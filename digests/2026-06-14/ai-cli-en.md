# AI CLI Tools Community Digest 2026-06-14

> Generated: 2026-06-14 00:42 UTC | Tools covered: 8

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

# OWL — Cross-Tool Comparison Report: AI CLI Tools Ecosystem  
**Date:** 2026-06-14

---

## 1. Ecosystem Overview

The AI CLI tool landscape in June 2026 is intensely competitive, with six major toolchains racing to establish themselves as the default developer interface for AI-powered coding. **Claude Code** and **OpenAI Codex** lead in community volume, both grappling with agent reliability and cross-platform stability. **Qwen Code** and **Gemini CLI** are in rapid architectural evolution, with large refactor PRs and nightly-release cadences. **OpenCode** has carved a niche around provider-agnostic openness and MCP compliance, while **Kimi CLI** is focused on robustness at the MCP and API-compatibility layer. **GitHub Copilot CLI** sits in a unique position as the most "shipping-focused" — releasing polished IDE-adjacent UX features while managing platform-regression risk. The dominant ecosystem theme is **agent orchestration maturity**: every tool is moving beyond single-shot autocomplete into multi-step, multi-agent workflows, and the community feedback reflects the pain of that transition.

---

## 2. Activity Comparison

| Tool | Open Issues (Hot) | Active PRs | Releases (24h) | Release Cadence Signal |
|---|---|---|---|---|
| **Claude Code** | 10 featured (68k+ total) | 4 updated (quiet) | v2.1.177 | Frequent; patch-driven |
| **OpenAI Codex** | 10 featured (28k+ total) | 10 updated | 2 alpha releases (0.140.0-a17/18) | Rust alpha pipeline very active |
| **Gemini CLI** | 10 featured (27k+ total) | 20 updated | Nightly in progress (0.48.0-nightly) | Nightly cadence; no stable release |
| **GitHub Copilot CLI** | 6 featured (3.7k+ total) | 0 updated | v1.0.62, v1.0.62-2 (same day) | Rapid patch cadence |
| **Kimi CLI** | 2 featured (2.4k+ total) | 5 closed/merged | None | Merge-focused, quiet release rhythm |
| **OpenCode** | 10 featured (29k+ total) | 10 updated | v1.17.5, v1.17.6 (patch pair) | Patch cadence with feature releases |
| **Pi** | 10 featured (5.7k+ total) | 10 updated | v0.79.3 | Patch release; steady |

**Key observations:** Claude Code and OpenAI Codex have the largest raw issue counts and the highest community engagement. Copilot CLI ships the most polished and frequent patches (two releases in one day). Gemini CLI and OpenCode lead in PR throughput, suggesting heavier internal development investment. Kimi CLI is the quietest in terms of public-facing activity, with most work going into merged fixes rather than new feature PRs.

---

## 3. Shared Feature Directions

The following requirements are appearing across **three or more tool communities simultaneously**:

| Shared Direction | Tools Requesting It | Specific Needs |
|---|---|---|
| **MCP Ecosystem Maturity** | OpenCode 🔴, Claude Code, Gemini CLI, Copilot CLI, Pi | Protocol parity (capability negotiation, roots, error routing), OAuth reliability, tool preload/discovery, session recovery after expiry. OpenCode has a dedicated tracking issue (#28567, 👍20) pushing for full MCP spec compliance — the most explicit community demand. Gemini CLI has two independent PRs fixing MCP MIME-type handling. Copilot CLI's #3787 requests MCP tools in the initial agent context. |
| **Context Compaction & Memory Persistence** | Claude Code 🔴, Pi, Gemini CLI, Qwen Code | All tools struggle with state loss during compaction. Claude Code has the loudest signal (#34556, 43 comments; #47023 on lifecycle hooks) with users building external memory systems after 59+ compactions. Pi is building the "Capture" system (#5704) for auto-storing tool results in warm cache. Qwen Code's #5018/#5019 address long-context drift and tool-call loops. |
| **Cost Controls & Billing Guardrails** | Claude Code, OpenAI Codex, Copilot CLI | Claude Code's $1k surprise charge incident (#68285) is the most dramatic, but Codex's usage-limit meter bug (#26370) and requests for per-agent spend ceilings (Claude Code) all point to the same need: multi-agent workflows kill budgets without hard limits. |
| **Multi-Agent / Subagent Reliability** | Claude Code, Gemini CLI 🔴, OpenCode, Qwen Code 🔴 | Agent hangs (#21409, Gemini CLI, 👍8), false success reporting (#22323), repetitive tool-call loops (Qwen Code #5019, Pi #5697), and runaway agent cascades (OpenCode ACE governance PR #32240) are universal pain points. Qwen Code hard-stopped duplicate tool calls at the core loop level (#5036). |
| **WSL / Windows Platform Parity** | OpenAI Codex 🔴, Claude Code, OpenCode, Copilot CLI | Codex has three distinct WSL breakage bugs (#28086, #28103, #25296) plus Windows sandbox regressions across 4 CLI versions. Claude Code's Cowork-on-Windows cluster (#64592, #67780) involves VM service failures and memory leaks. OpenCode's UNC-path-to-WSL problem (#19473) and Copilot CLI's Linux ARM64 crash (#3787) show platform breadth is outpacing test coverage. |
| **Cross-Device / Session Sync** | OpenAI Codex, Claude Code, Qwen Code | Codex #21803 (👍12) wants Projects and Chats synced across Macs. Claude Code users are building external memory for the same reason. Qwen Code's persistent web-shell sidebar request (#5074) is a step toward session continuity. |
| **Tool Argument & API Normalization** | Kimi CLI, Pi, Gemini CLI, Qwen Code | Double-encoded JSON (Kimi CLI #2407, Qwen Code), JSON-string-to-array coercion (Pi #5697), MCP schema normalization (Gemini CLI #27888), and maxTokens passthrough (Pi #5595) all reflect the same underlying problem: provider API fragmentation requires defensive normalization layers. |

---

## 4. Differentiation Analysis

### Feature Focus

| Tool | Primary Focus | Secondary Strengths | Notable Weakness |
|---|---|---|---|
| **Claude Code** | Agent workflow orchestration (fan-out, subagent delegation) | Ecosystem maturity, large plugin/library ecosystem, `/bash` and tool-use UX | Context amnesia, Windows instability, VS Code extension not keeping pace |
| **OpenAI Codex** | Multi-platform desktop + CLI correctness; SSE/WebSocket transport | Rust core with strong test infra investment; cross-platform test harness (Wine+PowerShell CI) | Windows regressions recur across releases; WSL integration fundamentally broken in multiple ways |
| **Gemini CLI** | Evaluation infrastructure and behavioral testing at scale | 76+ behavioral eval tests; EPIC-driven quality investment; `--telemetry` and evals tooling | Agent hangs are the most critical reliability issue; subagent trust is undermined by false success reporting |
| **GitHub Copilot CLI** | IDE-adjacent UX polish (diff view, dialogs, plugin marketplace) | Tightest GitHub integration; fastest patch cadence; scrollable elicitation dialogs | Smallest community by issue count; platform regressions (ARM64 crash) suggest test coverage gaps; BYOM support lags |
| **OpenCode** | Provider-agnostic openness and MCP spec compliance | Multi-provider architecture; ACP protocol; plugin marketplace with extensions; community is most diverse (RTL support, crypto payments) | MCP session stability is the highest-frequency complaint; v2 layout migration introduces regressions |
| **Kimi CLI** | API compatibility and edge-case robustness | Strong focus on non-standard backend compatibility (Anthropic endpoints, Moonshot API workarounds); defensive coding for proxy environments | Smallest public footprint; fewer feature differentiators; narrow community engagement |
| **Pi** | Multi-model flexibility with a library/framework architecture | Supports the widest range of providers; context management innovation (Veil/Capture); used both as CLI and embedded library | Module duplication (#5653) causes subtle runtime bugs; TUI stability issues; silent failures across providers |

### Target Users

- **Claude Code**: Professional developers and teams invested in the Anthropic ecosystem; users comfortable with terminal-first workflows and willing to build custom memory/extensibility layers.
- **OpenAI Codex**: Developers wanting a ChatGPT-adjacent experience with strong IDE integration; multi-device users; those who value OpenAI's model ecosystem.
- **Gemini CLI**: Teams operating within Google Cloud / Vertex AI infrastructure; developers who prioritize model evaluation and quality measurement.
- **GitHub Copilot CLI**: GitHub-native developers; teams already in the GitHub ecosystem wanting incremental AI augmentation with minimal workflow disruption.
- **OpenCode**: Provider-agnostic developers; multi-model power users; international developers (community-driven RTL and localization work); ACP host users (Zed, etc.).
- **Kimi CLI**: Users routing through custom API endpoints or proxies; Moonshot K2/K2.5 model users; developers targeting Chinese + Western model backends simultaneously.
- **Pi**: Library consumers embedding AI agents in custom applications; developers who need maximum provider flexibility in a single tool.

### Technical Approach

- **Claude Code / OpenAI Codex / Gemini CLI**: Primarily TypeScript/Node.js CLI cores with proprietary protocol integration. Heavily model-opinionated to their parent companies' models (though increasingly multi-model).
- **OpenAI Codex**: Unique Rust core with a TypeScript UI layer — deliberately building cross-platform correctness at the systems level (exec-server, process handle lifecycle).
- **OpenCode**: TypeScript with a Go-based server (`opencode Go`); ACP protocol for IDE interop is architecturally differentiated.
- **Kimi CLI**: Python-influenced architecture with strong focus on API compatibility layers.
- **Pi**: TypeScript targeting both CLI and `npm` library consumption — the dual-use nature creates unique challenges (module duplication, API provider registry as module-level state).

---

## 5. Community Momentum & Maturity

### Community Activity Ranking (by engagement volume)

| Rank | Tool | Issue Volume | PR Throughput | Release Frequency | Engagement Depth |
|---|---|---|---|---|---|
| 1 | **Claude Code** | Highest (68k+) | Low today (4) | Steady | Deepest — users build entire external systems around the tool |
| 2 | **OpenAI Codex** | Very high (28k+) | High (10) | 2 alpha releases/day | Strong — multi-platform testing is generating rapid iteration |
| 3 | **Gemini CLI** | High (27k+) | Highest (20) | Nightly cadence | Active — heavy internal investment in quality infrastructure |
| 4 | **OpenCode** | High (29k+) | High (10) | Patch pair | Active — MCP governance and ACP integration driving focused work |
| 5 | **Qwen Code** | Moderate (5k total) | Moderate (11) | Nightly failed | Moderate — large refactor PRs suggest architectural investment |
| 6 | **Pi** | Moderate (5.7k) | Moderate (10) | Patch release | Steady — context management innovation is a differentiator |
| 7 | **Kimi CLI** | Low (2.4k) | Low (5 merged) | None | Narrow — focused on robustness fixes, smaller contributor base |
| 8 | **Copilot CLI** | Lowest (3.7k) | 0 today | 2 releases/day | Broad but shallow — high release velocity but lower community discussion |

### Maturity Signals

- **Most mature in production use**: Claude Code and Copilot CLI — both have enough adoption that billing incidents, data-loss bugs, and enterprise integration pain (VSCode extensions, SSH workflows) surface regularly.
- **Rapidly iterating**: OpenAI Codex (Rust rewrite with heavy test investment) and Qwen Code (major provider/auth decoupling refactor) are in active architectural evolution.
- **Most architecturally ambitious**: OpenCode (MCP full-spec compliance, ACP multi-host governance layer, ACE control plane) is tackling the hardest infrastructure problems, but the v2 migration is painful.
- **Most stable but slow-moving**: Pi and Kimi CLI iterate deliberately, focusing on correctness and edge-case handling over feature velocity.

---

## 6. Trend Signals

The community feedback across all eight tools reveals seven macro-level trends that will shape the AI CLI tool category through 2026:

### 1. The "Context Compaction Crisis" Is the Category's Defining Challenge
Every tool that implements context compaction (all except Kimi CLI, which has limited public detail) faces user revolt when compaction discards state. Claude Code users have built **entire external memory persistence systems** (#34556, 43 comments, 59 compactions over 26 days). Pi is engineering the **Capture/Veil context management system** (#5704). This is the single largest architectural gap in the category. Tools that solve persistent, structured memory across compactions will have a decisive advantage.

### 2. MCP Is Becoming the USB-C of AI Tooling — But the spec is straining
MCP integration is the **most cross-cutting feature request** across the ecosystem. What started as a nice-to-have protocol has become table stakes, with OpenCode (#28567, 👍20) tracking full spec compliance, Gemini CLI fixing MIME-type detection in two independent PRs, and Copilot CLI requesting MCP tool preload. The community is effectively demanding **MCP spec completeness** as a baseline, not a differentiator. Tools that lag on MCP compliance will lose power users to those that prioritize it.

### 3. Agent Reliability Is the Last Mile Problem
Five of the eight tools report **agent hangs, false success reporting, or infinite loops** as critical issues. Gemini CLI's #22323 (subagent reports success after MAX_TURNS cutoff) is the most dangerous variant — it **silently corrodes trust in agent reasoning**. Qwen Code's hard-stop on duplicate tool calls (#5036) at the core sendMessageStream loop is the right architectural pattern. The next wave of competition will be won on **agent correctness guarantees**, not raw capability.

### 4. Windows/WSL Is the Neglected Platform — And It's a Risky Blind Spot
Claude Code's Cowork-on-Windows cluster, OpenAI Codex's three distinct WSL bugs, and OpenCode's UNC-path issues all point to the same conclusion: **Windows test coverage is not keeping pace with feature development**. As AI CLI tools move from early-adopter Linux/macOS users to mainstream enterprise developers (who disproportionately use Windows), this becomes a market-access problem, not just a quality problem. The Codex team's investment in Wine+PowerShell test CI (#28120, #28124) is the most promising approach to solving this structurally.

### 5. Multi-Agent Workflow Cost Controls Are Inevitably Next
The $1,000 surprise charge on Claude Code (#68285) is a leading indicator. As teams deploy fan-out agent workflows (Claude Code's feature, Qwen Code's Workflow P3 port), **unbounded spending is a production incident waiting to happen**. Developers are explicitly requesting per-agent model tier limits, hard spending ceilings, and usage reporting — the features that will be required for enterprise adoption.

### 6. Evaluation Infrastructure Is Becoming a Competitive Moat
Gemini CLI's investment in 76+ behavioral eval tests across 6 models is unique among these tools. Because agent behavior is non-deterministic, **tools that can measure quality regressions reliably will ship with higher confidence**. This is an under-invested area: most tools rely on community-reported bugs rather than systematic evals. Expect other tools to build similar infrastructure as they scale.

### 7. The "Library vs. Application" Divergence Is Widening
Pi and OpenCode are increasingly architectured as **frameworks** (embeddable, provider-agnostic, ACP-hostable), while Claude Code, Codex, Copilot CLI, and Gemini CLI are **applications** (opinionated to their parent ecosystems). Kimi CLI and Qwen Code sit in between. This bifurcation will accelerate: developer teams building **on top of** AI CLI tools will choose framework-oriented options (OpenCode's ACP, Pi's npm packages), while individual developers will continue choosing application-oriented tools based on their preferred model provider.

---

**Strategic Recommendation for Technical Decision-Makers:**
If you are selecting a primary AI CLI tool in mid-2026, the decision framework should prioritize: **(1)** your model ecosystem lock-in (Claude → Claude Code, OpenAI → Codex, Google → Gemini CLI, multi-model → OpenCode/Pi), **(2)** your platform (Windows users should weight Windows stability heavily), **(3)** your need for agent orchestration maturity (Claude Code leads despite its memory问题时), and **(4)** your tolerance for bleeding-edge instability versus polished iteration (Copilot CLI for polish, OpenCode/OpenAI Codex for frontier capability). MCP compliance should be treated as a baseline requirement for any new integration work.

---

*Report compiled by OWL · Data sources: Individual GitHub repositories of each tool · Snapshot date: 2026-06-14*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

## Claude Code Skills Community Highlights  
*Data as of 2026-06-14 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

### 1. Top Skills Ranking (Most-Discussed PRs)

Despite all listed PRs showing `Comments: undefined`, activity is inferred from recency, topic centrality, and cross-PR/issue linkages.

1. **`document-typography` skill** (#514)  
   Adds typographic quality control for orphan words, widow paragraphs, and numbering misalignment in AI-generated documents.  
   *Status:* Open (created Mar 2026, updated Mar 2026)  
   🔗 [PR #514](https://github.com/anthropics/skills/pull/514)

2. **`ODT` skill** (#486)  
   Enables creation, filling, reading, and conversion of OpenDocument (.odt/.ods) files using LibreOffice-compatible formats.  
   *Status:* Open (Last updated Apr 2026)  
   🔗 [PR #486](https://github.com/anthropics/skills/pull/486)

3. **`skill-quality-analyzer` & `skill-security-analyzer`** (#83)  
   Meta-skills that audit other Skills across structure, documentation, security, and best practices. Critical for ecosystem hygiene.  
   *Status:* Open (Updated Jan 2026)  
   🔗 [PR #83](https://github.com/anthropics/skills/pull/83)

4. **`frontend-design` skill improvements** (#210)  
   Revisions to improve clarity, actionability, and coherence—ensuring instructions are executable within a single conversation.  
   *Status:* Open (Updated Mar 2026)  
   🔗 [PR #210](https://github.com/anthropics/skills/pull/210)

5. **`agent-creator` skill** (#1140)  
   Introduces a meta-skill for building task-specific agent sets, plus fixes to evaluation logic and Windows support.  
   *Status:* Open (Last updated Jun 2026)  
   🔗 [PR #1140](https://github.com/anthropics/skills/pull/1140)

> **Note**: While explicit comment counts are missing for PRs, several high-impact PRs (e.g., #538, #539, #541, #362) show intensive maintenance activity on core tooling like `skill-creator`, indicating strong developer-side engagement.

---

### 2. Community Demand Trends (from Issues)

- **Enterprise Collaboration**: Strong demand for **org-wide skill sharing** (#228, 14 comments, 7 likes)—users want native team distribution instead of manual file sharing.
- **Windows Compatibility**: Multiple issues (#1061, #1099) highlight critical bugs in `run_eval.py` and `subprocess` handling on Windows, blocking optimization workflows.
- **Skill Discovery & Trust**: Concerns about **namespace impersonation** (#492) suggest need for verified/official skill badges or org-scoped install controls.
- **MCP Integration**: Early calls to expose Skills via **Model Context Protocol (MCP)** (#16) for standardized interoperability.
- **Duplicate Packaging**: Confusion over identical content in `document-skills` vs `example-skills` plugins (#189, 8 likes) reveals packaging/orchestration gaps.

---

### 3. High-Potential Pending Skills (Active, Not Yet Merged)

- **`document-typography`** (#514): Addresses universal pain point in document generation; likely to gain traction if merged.  
  🔗 [PR #514](https://github.com/anthropics/skills/pull/514)

- **`ODT` skill** (#486): Fills a gap in open-standard office document support, appealing to enterprise and EU users.  
  🔗 [PR #486](https://github.com/anthropics/skills/pull/486)

- **`agent-creator` skill** (#1140): Empowers users to customize agent cognition—strategically valuable as multi-agent workflows grow.  
  🔗 [PR #1140](https://github.com/anthropics/skills/pull/1140)

- **`shodh-memory` skill** (#154): Persistent context across sessions solves a core UX limitation of stateless AI interactions.  
  🔗 [PR #154](https://github.com/anthropics/skills/pull/154)

- **`AURELION` skill suite** (#444): Comprehensive cognitive framework for professionals—could become a reference architecture.  
  🔗 [PR #444](https://github.com/anthropics/skills/pull/444)

---

### 4. Skills Ecosystem Insight

**The community’s most concentrated demand is for reliable, shareable, and maintainable Skills infrastructure—enabling enterprise adoption through better packaging, validation, Windows support, and cross-session persistence.**

---

# Claude Code Community Digest — 2026-06-14

---

## 1. Today's Highlights

Claude Code shipped **v2.1.177** with no detailed release notes available yet. The community's most active discussions center on **persistent memory across context compactions** — a pain point so acute that users are building their own external memory layers. Meanwhile, **Cowork on Windows** continues to generate a steady stream of bug reports, and a new **data-loss bug in file checkpointing** has surfaced that could silently destroy uncommitted edits.

---

## 2. Releases

- **v2.1.177** — Released today. No changelog details available in this data slice. Monitor the [releases page](https://github.com/anthropics/claude-code/releases) for notes.

---

## 3. Hot Issues

### 🔴 Critical / Data-Loss Risk

1. **[#68315](https://github.com/anthropics/claude-code/issues/68315) — File checkpointing silently stashes and hard-resets working tree, destroying uncommitted edits** (3 comments, macOS)
   The `tengu_use_file_checkpoints` feature runs `git stash` + `git reset --hard` without user awareness, repeatedly wiping uncommitted work. This is a **data-loss bug** with a repro. If you use file checkpoints in git repos with pre-commit hooks, treat this as urgent.

2. **[#68285](https://github.com/anthropics/claude-code/issues/68285) — Workflow fan-out inherits premium-tier default with no per-agent cost ceiling, causing ~$1k in auto-purchased charges** (6 comments, macOS)
   A user reported approximately $1,000 in unexpected charges from agent fan-out workflows that default to premium-tier models with no per-cost ceiling. The issue was edited to correct an initial misdiagnosis (ANSI escape leak → legitimate context-tier suffix), but the core billing concern remains unresolved.

### 🟡 High Community Demand

3. **[#24726](https://github.com/anthropics/claude-code/issues/24726) — VS Code extension: add setting to disable auto-attach of open file / selection** (52 comments, 👍159)
   The **most-commented and most-upvoted issue** in this digest. The VS Code extension automatically attaches the current file/selection to every prompt, which many users find intrusive. A toggle to disable auto-attach is the community's top IDE ask.

4. **[#34556](https://github.com/anthropics/claude-code/issues/34556) — Persistent Memory Across Context Compactions (59 compactions, built our own)** (43 comments)
   After 59 context compactions over 26 days, this user built a complete external memory persistence system. The issue crystallizes a fundamental architectural gap: Claude Code loses all in-context state on compaction unless it was externally saved.

5. **[#47023](https://github.com/anthropics/claude-code/issues/47023) — Expose compact/session lifecycle hooks for external memory layers** (21 comments, 👍4)
   A proposal to expose lifecycle hooks (on-compact, on-session-start) so the community doesn't have to re-invent transcript access and compact interception. Directly related to #34556 and five other memory-related issues.

6. **[#33932](https://github.com/anthropics/claude-code/issues/33932) — VS Code Extension: Diff review UI similar to GitHub Copilot Edits Review** (21 comments, 👍97)
   Users want a side-by-side diff review panel for Claude Code's file edits, comparable to Copilot Edits. Currently, reviewing changes across multiple files is cumbersome.

### 🟠 Platform-Specific Bugs

7. **[#36179](https://github.com/anthropics/claude-code/issues/36179) — Unsupported content type: `redacted_thinking` — errors on Windows + VS Code** (27 comments, 👍18)
   A persistent bug where the VS Code extension on Windows throws errors on `redacted_thinking` content blocks. Affects users who enable thinking mode.

8. **[#64592](https://github.com/anthropics/claude-code/issues/64592) — Cowork VM service not running on Windows 11 (fresh repro + workaround)** (8 comments)
   Extends a cluster of closed Cowork-on-Windows issues (#54891, #61559). Workaround: manually enable Virtual Machine Platform Windows feature. All built-in recovery options fail.

9. **[#67780](https://github.com/anthropics/claude-code/issues/67780) — Cowork locks up after ~5 min — EventEmitter memory leak, Electron renderer freezes** (4 comments, 👍1)
   `MaxListenersExceededWarning` accumulates per session until the Electron renderer freezes. A clear memory leak in the Cowork desktop app on Windows.

10. **[#60385](https://github.com/anthropics/claude-code/issues/60385) — Remote Control: MCP permission prompts never surface in claude.ai/code web UI** (19 comments)
    When using `--remote-control`, MCP tool permission prompts render only in the local TUI, not the web UI — blocking sessions remotely with no way to approve.

---

## 4. Key PR Progress

Only **4 pull requests** were updated in the last 24h, a relatively quiet period:

- **[#68239](https://github.com/anthropics/claude-code/pull/68239) — feat: add project-theme plugin for per-project theme settings** (OPEN)
  Adds a `SessionStart` hook that reads `theme`/`color` from `.claude/settings.json` and applies it automatically. Closes [#43216](https://github.com/anthropics/claude-code/issues/43216). A clean plugin approach to a long-standing personalization request.

- **[#58673](https://github.com/anthropics/claude-code/pull/58673) — s** (OPEN, no description)
  Placeholder PR with no meaningful content. Likely a draft or test.

- **[#26360](https://github.com/anthropics/claude-code/pull/26360) — Fix issues being auto-closed despite human activity** (CLOSED)
  Fixed the triage bot to recognize `stale`/`autoclose` labels and remove them when humans comment. Fixes [#16497](https://github.com/anthropics/claude-code/issues/16497).

- **[#1](https://github.com/anthropics/claude-code/pull/1) — Create SECURITY.md** (CLOSED)
  The repository's inaugural PR, finally merged.

---

## 5. Feature Request Trends

Synthesizing all issues, the most-requested feature directions are:

| Trend | Representative Issues | Signal |
|---|---|---|
| **Persistent memory / context survival** | #34556, #47023, #36678 | 🔴 Highest urgency — users are building workarounds |
| **VS Code IDE polish** | #24726, #33932, #28379 | 🔴 Most upvoted — auto-attach toggle, diff review, slash commands in remote |
| **Session lifecycle hooks / extensibility** | #47023, #36678 | 🟡 Growing — demand for compact/session events and model-accessible session metadata |
| **Cost controls for agent workflows** | #68285 | 🟡 Emerging — per-agent model tier limits and spending ceilings |
| **Remote Control parity** | #28379, #60385 | 🟡 Steady — feature parity between local TUI and web remote UI |
| **Theme / personalization** | #68239 (PR), #43216 | 🟢 Being addressed via plugin |

---

## 6. Developer Pain Points

1. **Context compaction = amnesia.** The single most painful architectural limitation. Every compaction discards in-context learning, instructions, and state. Five+ issues and multiple community-built memory systems attest to this. Lifecycle hooks (#47023) are the most elegant proposed solution.

2. **Cowork on Windows is unreliable.** VM service failures (#64592), memory leaks (#67780), and cross-device link errors (#45178) form a cluster of Windows-specific instability. Users are hitting these on fresh installs with no clear resolution path.

3. **Silent data destruction.** Two distinct bugs — file checkpointing (#68315) and the Write tool's full-file-replacement default (#67917) — can destroy user data without warning. Both involve governed or untracked state files.

4. **VS Code extension friction.** Auto-attach behavior (#24726), missing diff review UI (#33932), and process leaks on SSH reconnect (#59476) degrade the IDE experience. The extension feels less polished than the CLI.

5. **Remote Control is incomplete.** Slash commands don't work (#28379), MCP permission prompts don't surface (#60385), and the web UI lacks parity with the local TUI. Users who drive Claude Code remotely from mobile or another device hit walls.

6. **Billing surprises.** The workflow fan-out cost incident (#68285) highlights a lack of guardrails. Developers want per-agent model tier controls and hard spending limits before launching multi-agent workflows.

---

*Data source: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) · Digest generated 2026-06-14*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-14

---

## 1. Today's Highlights

The Codex team continues to invest heavily in cross-platform correctness and test infrastructure: a wave of exec-server PRs (process handle lifecycle, cwd propagation, Windows shell hermetic coverage) landed today, each authored by `anp-oai`. On the user-facing side, **Windows WSL integration** remains the single loudest pain cluster, with multiple fresh reports of broken CLI binary resolution, path-rewriting regressions, and missing Linux binaries in the MSIX package. A secondary theme is **false-positive cybersecurity safety checks** blocking routine finance and DevOps workflows, generating community friction around trust/authorize UX.

---

## 2. Releases

Two Rust alpha releases shipped in the last 24 hours:

| Release | Tag |
|---|---|
| 0.140.0-alpha.18 | [rust-v0.140.0-alpha.18](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.18) |
| 0.140.0-alpha.17 | [rust-v0.140.0-alpha.17](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.17) |

Detailed release notes were not captured in the data snapshot — consult the linked tags for full changelogs.

---

## 3. Hot Issues (Top 10)

### 1. Windows sandbox spawn regression — setup refresh fails on CLI 0.133.0
[#24391](https://github.com/openai/codex/issues/24391) · 💬 51 · 👍 26 · **CLOSED**
The single most-discussed issue in the window. Users upgrading to CLI 0.133.0 found all shell commands failing during sandbox setup refresh. The volume of comments and thumbs-up signals this affected a wide cross-section of Windows users. Marked closed, though a related Windows sandbox regression at 0.138.0 ([#26158](https://github.com/openai/codex/issues/26158), closed) suggests this class of bug has recurred across multiple releases.

### 2. Codex CLI responds too slowly (SSE fallback path)
[#24428](https://github.com/openai/codex/issues/24428) · 💬 14 · 👍 25 · **OPEN**
Clients report noticeable response latency, specifically when the transport falls back from WebSocket to SSE. The high like-to-comment ratio indicates many users silently experience the same degradation without being able to articulate reproduction steps — a classic signal of a systemic performance regression rather than isolated misconfiguration.

### 3. False-positive cybersecurity flag on authorized tax/finance work
[#27817](https://github.com/openai/codex/issues/27817) · 💬 13 · 👍 0 · **CLOSED**
Normal personal finance and tax-filing conversations triggered the cybersecurity safety flag and associated Trusted Access for Cyber authorization prompt. The zero-like count combined with closure suggests this was addressed quickly, but companion issue #28015 (below) indicates the root cause — overly aggressive safety classification of routine DevOps commands — may not be fully resolved.

### 4. False-positive cybersecurity check blocks routine local repo maintenance
[#28015](https://github.com/openai/codex/issues/28015) · 💬 12 · 👍 0 · **OPEN**
Companion to #27817. Ordinary `git`/DevOps hygiene inside a paid interactive session repeatedly triggered cybersecurity safety interleaves. The fact that tax *and* Git tooling both trip the same classifier points to a broad linguistic trigger pattern (keywords around "financial data," "credentials," "repo") rather than a narrow edge case.

### 5. macOS "Malware Blocked" alert for Codex helper process
[#24246](https://github.com/openai/codex/issues/24246) · 💬 11 · 👍 9 · **OPEN**
macOS Gatekeeper suddenly classifies the Codex helper binary as malware. Reinstalls have not been consistently effective. This is likely a code-signing / notarization translation issue exacerbated by a macOS Gatekeeper definition update, and it could affect user trust in the update pipeline.

### 6. macOS Desktop becomes unusable on long active threads (memory + log churn)
[#21134](https://github.com/openai/codex/issues/21134) · 💬 5 · 👍 0 · **OPEN**
Large conversation state plus verbose TRACE-level logging degrades the app-server and renderer over time, even after compaction-aware local transcript pruning. Long-session users effectively have to restart the app periodically to remain productive.

### 7. Codex Desktop usage-limit meters start at 99% instead of 100%
[#26370](https://github.com/openai/codex/issues/26370) · 💬 4 · 👍 6 · **OPEN**
The usage-limit UI displays 99% remaining at session start, misleading users into believing capacity has already been consumed. Likely an off-by-one boundary error in meter initialization. High signal-to-noise ratio — few comments, quick community consensus.

### 8. WSL agent mode fails to find bundled CLI on Windows Desktop
[#28086](https://github.com/openai/codex/issues/28086) · 💬 5 · 👍 0 · **OPEN**
Windows Desktop's WSL agent mode resolves to the Windows `codex.exe` via `CODEX_CLI_PATH` instead of using the bundled Linux binary. This is a path-resolution priority bug in the app-server's CLI binary discovery logic.

### 9. MSIX package missing Linux `codex` binary — breaks WSL entirely
[#28103](https://github.com/openai/codex/issues/28103) · 💬 3 · 👍 3 · **OPEN**
The Microsoft Store / MSIX build of Codex Desktop ships without the Linux `codex` binary under `app/resources`, making "Run agent in WSL" non-functional out of the box. This is likely an oversight in the Store packaging pipeline.

### 10. Cross-device sync for Codex Projects and Chats requested
[#21803](https://github.com/openai/codex/issues/21803) · 💬 2 · 👍 12 · **OPEN**
Users running Codex on multiple Macs want Projects and Chats to follow their OpenAI account across devices. Broadly reminiscent of IDE settings-sync expectations (e.g., VS Code Settings Sync). The high like count relative to comment count suggests widespread latent demand.

---

## 4. Key PR Progress (Top 10)

### 1. Bazel: add PowerShell to Wine test harness
[#28120](https://github.com/openai/codex/pull/28120) · by `anp-oai` · **OPEN**
Adds an x86_64 PowerShell binary to the Bazel Wine environment for cross-OS shell integration smoke tests. Lays groundwork for more faithful Windows execution coverage in CI without relying on a full Windows runner.

### 2. Hermetic Windows shell smoke coverage for exec-server
[#28124](https://github.com/openai/codex/pull/28124) · by `anp-oai` · **OPEN**
Companion to #28120. Proves Windows shell execution paths through exec-server using the Wine + PowerShell runtime from the parent PR. Splitting keeps each PR reviewable while stacking test coverage incrementally.

### 3. Rate-limit reset redemption via `/usage`
[#28118](https://github.com/openai/codex/pull/28118) · by `jayp-oai` · **OPEN**
Users can earn personal rate-limit reset credits but currently have no way to view or redeem them from the CLI. This PR wires reset redemption into the restored `/usage` command (#27925), creating a single entry point for usage-related actions rather than a separate dashboard.

### 4. Load app-bundled internal hooks from Codex Desktop
[#27953](https://github.com/openai/codex/pull/27953) · by `abhinav-oai` · **OPEN**
Marks all `openai-bundled` plugin hooks as forced/trusted, loads them exclusively from Desktop app resources (not user filesystem), and hides them from ordinary hook review UI. Retains telemetry while suppressing noise in the notification layer.

### 5. Refresh SSH agent for app-server proxy
[#28131](https://github.com/openai/codex/pull/28131) · by `abhinav-oai` · **OPEN**
Long-running app-server proxy sessions retain a stale `SSH_AUTH_SOCK` path from the original SSH session. This fixes the common workflow where a user reconnects via a new SSH session but tunnels through a process started in the previous one. Adds opt-in `--forward-ssh-agent` support.

### 6. Process handle reuse after exit / cleanup after spawn failure
[#28135](https://github.com/openai/codex/pull/28135) · [#28134](https://github.com/openai/codex/pull/28134) · by `anp-oai` · **OPEN**
Two paired PRs that lock down the app-server process-handle lifecycle contract. Handles must be reusable after exit and must be freed on spawn failure — invariants that were previously only documented but not tested.

### 7. Dedupe plugin MCPs by app declaration name
[#27607](https://github.com/openai/codex/pull/27607) · by `felixxia-oai` · **OPEN**
Next step in the plugin auth-routing stack. Narrows the ChatGPT/SIWC duplicate-detection logic so a plugin MCP server is only hidden when it conflicts with an App *declaration* of the same name, not on loose heuristic match.

### 8. Preserve plugin apps in connector listings
[#27602](https://github.com/openai/codex/pull/27602) · by `felixxia-oai` · **OPEN**
Ensures ChatGPT/SIWC users continue to see plugin App entries in connector listings after the auth-routing surface narrows. Keeps the listing layer consistent with the projected plugin App set.

### 9. Exec-server: honor remote environment cwd and shell
[#28122](https://github.com/openai/codex/pull/28122) · by `anp-oai` · **OPEN**
Enables passing a Windows cwd for the remote environment and using that environment's native shell. Moves the `remote_env_windows` integration test from recording early-exit mismatches to running real Windows processes.

### 10. Run buildifier from `just fmt`
[#28125](https://github.com/openai/codex/pull/28125) · by `anp-oai` · **OPEN**
Pins `buildifier v8.5.1` via a SHA-256 DotSlash manifest so `just fmt` auto-formats Bazel and Starlark files without contributors needing to install buildifier manually. Reduces "works on my lint" discrepancies in PR CI.

---

## 5. Feature Request Trends

Synthesized from all open **enhancement**-tagged and highly-asked-for items:

| Trend | Representative Issues |
|---|---|
| **Cross-device continuity for Projects & Chats** | [#21803](https://github.com/openai/codex/issues/21803) (👍 12) |
| **WSL / Windows shell execution parity** | [#28086](https://github.com/openai/codex/issues/28086), [#28103](https://github.com/openai/codex/issues/28103), [#25296](https://github.com/openai/codex/issues/25296) |
| **App UI customization (spellcheck toggle, etc.)** | [#25431](https://github.com/openai/codex/issues/25431) (👍 13) |
| **Persist side chats as child threads** | [#26227](https://github.com/openai/codex/issues/26227) (👍 5) |
| **macOS TCC (Calendar/Reminders) prompts from app context** | [#21228](https://github.com/openai/codex/issues/21228) (👍 8) |
| **IDE detection expansion (CLion)** | [#19002](https://github.com/openai/codex/issues/19002) (closed) |
| **AGENTS.md community-standard reference in docs** | [#1624](https://github.com/openai/codex/issues/1624) (closed) |

The dominant request clusters are **Windows/WSL reliability** and **app-level UX polish** — users want Codex Desktop to feel as robust and configurable as a mature native IDE.

---

## 6. Developer Pain Points

1. **Windows sandbox instability across releases** — Sandbox setup refresh failures have recurred in at least three CLI versions (0.132.0 → 0.133.0 → 0.136.0–0.138.0), eroding confidence in the Windows execution path. Each regression forces users to pin older versions.

2. **WSL integration is broken in multiple orthogonal ways** — CLI binary resolution falls back to Windows `codex.exe`, the MSIX package omits the Linux binary entirely, and `/home` paths get rewritten to `C:\home`. These are distinct bugs that collectively make WSL mode unusable for many users.

3. **Overly aggressive safety classifiers** — Both financial/tax conversations and routine Git/DevOps commands trigger cybersecurity flags. The false-positive rate is high enough that paid-session users are losing productive time to authorization prompts, and the "Trusted Access for Cyber" program gate feels misaligned with normal development workflows.

4. **Performance degradation on long sessions** — App-server memory growth and TRACE-level log churn make the Desktop app sluggish after extended use, even with compaction. Users resort to restarting the app to recover responsiveness.

5. **macOS Gatekeeper false-malware alerts** — Sudden "Malware Blocked" dialogs for the Codex helper binary undermine trust in the update mechanism and require manual user intervention to bypass.

6. **Usage-limit UI inaccuracy** — Meters starting at 99% instead of 100% create a misleading first impression and generate support confusion, even though the underlying quota logic may be correct.

7. **No cross-device sync** — Users with multiple machines (a common setup for developers) cannot carry Projects or Chats between them, forcing manual context reconstruction on each device.

---

*Generated by OWL · Data snapshot: github.com/openai/codex · 2026-06-14*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-14

---

## 1. Today's Highlights

It was a busy day on the PR front with **20 pull requests updated**, dominated by bug fixes touching the core agent, MCP integration, and CLI rendering layers. Notably, two separate teams independently submitted PRs to sniff and correct MCP image MIME types (fixing the Figma WebP regression). On the issue side, activity remains high on long-standing bugs around agent hangs and subagent misreporting of success, with several P1 issues from March now receiving fresh attention.

---

## 2. Releases

**No new releases in the last 24 hours.** The latest autopup PR ([`#27875`](https://github.com/google-gemini/gemini-cli/pull/27875)) bumps to `0.48.0-nightly.20260613.g9e5599c32`, indicating a nightly build is in progress but not yet cut.

---

## 3. Hot Issues

The top issues updated over the last 24 hours (ranked by community engagement):

### Critical Agent Reliability

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist agent hangs (👍8, 7 comments) | The most upvoted active issue — users report the generalist subagent hanging permanently on trivial tasks (e.g., folder creation) with waits of up to an hour. Instructing the model not to delegate to subagents is the current workaround. |
| 2 | **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent recovery after MAX_TURNS reported as GOAL success (👍2, 6 comments) | A correctness bug: `codebase_investigator` reports `status: "success"` even when it hit its turn limit without performing analysis. This silently corrupts agent workflows and undermines trust in agent reasoning. |
| 3 | **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** Shell command execution gets stuck with "Waiting input" (👍3, 4 comments) | After executing simple CLI commands, the shell hangs indefinitely showing "Awaiting user input" even though the process has exited. This is a frequent source of frustration and manual intervention. |

### Evaluation & Quality Infrastructure

| # | Issue | Why It Matters |
|---|-------|----------------|
| 4 | **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** Robust component-level evaluations (7 comments) | An EPIC tracking the expansion of behavioral evals to the component level. The team has already built 76 behavioral eval tests across 6 Gemini models — this is about scaling that infrastructure for more granular quality gates. |
| 5 | **[#23166](https://github.com/google-gemini/gemini-cli/issues/23166)** Stabilize and enhance internal project evaluations (1 comment) | Internal evals are currently "bleeding" (inconsistent), making it hard to trust regressions. This is a meta-quality issue that affects the team's ability to measure real model & agent improvements. |

### Security & Memory System

| # | Issue | Why It Matters |
|---|-------|----------------|
| 6 | **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** Add deterministic redaction and reduce Auto Memory logging (5 comments) | Auto Memory reads local transcripts and sends content to a background agent, but redaction happens *after* secrets are already in model context. There is also no deterministic redaction and too much skill/config logging exposure. |
| 7 | **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** Stop Auto Memory from retrying low-signal sessions indefinitely (5 comments) | Sessions deemed "low-signal" by the extraction agent are never marked as processed, so they keep surfacing endlessly — a resource leak in the memory pipeline. |
| 8 | **[#26516](https://github.com/google-gemini/gemini-cli/issues/26516)** Memory system bugs and quality improvements (2 comments) | A tracking EPIC aggregating all Auto Memory quality issues. Together with #26525, #26522, and #26523, these form a cluster of memory system fixes the team is actively working through. |

### Tooling & Agent Intelligence

| # | Issue | Why It Matters |
|---|-------|----------------|
| 9 | **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** Assess impact of AST-aware file reads, search, and mapping (👍1, 7 comments) | An EPIC exploring whether AST-aware tools (method-boundary-aware reads, syntax-aware search) can reduce tokens and turns. This could meaningfully improve agent precision and efficiency on large codebases. |
| 10 | **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** Gemini does not use skills and sub-agents enough (6 comments) | Even with well-described custom skills (e.g., "gradle", "git"), the agent ignores them and performs actions manually unless explicitly instructed. This undermines the extensibility model that many users depend on. |

---

## 4. Key PR Progress

### Fixes in the Last 24 Hours

| # | PR | Summary |
|---|----|---------|
| 1 | **[#27889](https://github.com/google-gemini/gemini-cli/pull/27889)** | **fix(core): Refresh MCP OAuth with stored client ID** — Fixes the OAuth refresh path for auto-discovered MCP servers that lack a static `oauth.clientId` in settings. The CLI already persisted the discovered ID in metadata, but the refresh logic ignored it. P1. |
| 2 | **[#27888](https://github.com/google-gemini/gemini-cli/pull/27888)** | **fix(core): Normalize MCP tool schemas to root type object** — MCP servers can advertise tool input schemas without `type: "object"`, which strict validators (Vertex AI strict mode) reject. This normalizes schemas at ingestion time. |
| 3 | **[#27886](https://github.com/google-gemini/gemini-cli/pull/27886)** | **fix(core): Respect `.gitignore` and `.geminiignore` in `<session_context>` tree** — The folder tree shown in session context was leaking ignored files. Now passes ignore rules through to `getFolderStructure()`. Fixes [#27787](https://github.com/google-gemini/gemini-cli/issues/27787). |
| 4 | **[#27887](https://github.com/google-gemini/gemini-cli/pull/27887)** | **fix(cli): Honor custom theme `border.default` on OSC 11 terminals** — Two code paths prevented custom border colors from applying, even though documented. Fixes [#27786](https://github.com/google-gemini/gemini-cli/issues/27786). |
| 5 | **[#27870](https://github.com/google-gemini/gemini-cli/pull/27870)** | **fix(core): Cap pending tool responses** — A very large tool result could fill the pending `functionResponse` slot unbounded, causing issues. Supersedes and improves upon a prior auto-closed PR. Fixes [#27738](https://github.com/google-gemini/gemini-cli/issues/27738). |
| 6 | **[#27878](https://github.com/google-gemini/gemini-cli/pull/27878)** & **[#27850](https://github.com/google-gemini/gemini-cli/pull/27850)** | **fix(core): Sniff MCP image MIME types** — Two independent PRs solving the same problem: WebP images from Figma MCP were labeled `image/png`, causing HTTP 400s from the Gemini API. Both implement local signature sniffing (PNG, JPEG, GIF, WebP). Fixes [#27731](https://github.com/google-gemini/gemini-cli/issues/27731). |

### Recently Closed PRs (Merged)

| # | PR | Summary |
|---|----|---------|
| 7 | **[#27553](https://github.com/google-gemini/gemini-cli/pull/27553)** | **fix(cli): Add GATEWAY auth type to `validateAuthMethod`** — Fixed the regression where `GOOGLE_GEMINI_BASE_URL` config caused "Invalid auth method selected" because `AuthType.GATEWAY` was added but not whitelisted. |
| 8 | **[#27568](https://github.com/google-gemini/gemini-cli/pull/27568)** | **fix(core): Fall back when ripgrep execution fails** — Gracefully falls back to legacy `GripTool` when `rg` is missing or exits with code 64, while preserving ripgrep-specific options. |
| 9 | **[#27555](https://github.com/google-gemini/gemini-cli/pull/27555)** | **fix(cli): Stop merging shell history commands ending in backslash** — Commands like `dir C:\` were being silently merged with the next command on relaunch due to odd-backslash-line-joining logic. |
| 10 | **[#27552](https://github.com/google-gemini/gemini-cli/pull/27552)** | **fix(core): Insert content literally into LLM prompts to avoid `$` substitution** — Prompt builders using `String.prototype.replace()` were corrupting content containing `$` patterns. Switched to literal insertion. |

---

## 5. Feature Request Trends

1. **AST-Aware Agent Tools** — Multiple issues (#22745, #22746, #22747) are converging on the idea of giving the agent syntax-aware file reads, searches, and codebase maps. The community and maintainers both see this as a high-leverage way to reduce token usage and misaligned tool calls.

2. **Backgroundable Subagents** — Issue [#22741](https://github.com/google-gemini/gemini-cli/issues/22741) (👍2) requests Ctrl+B to background local subagents, especially for exploration or build/lint tasks. This is a usability gap that forces sequential workflows.

3. **Agent Self-Awareness** — Issue [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) asks for the agent to accurately know its own CLI flags, hotkeys, and configuration, so it can serve as its own documentation.

4. **Browser Agent Resilience** — Requests for automatic session takeover and lock recovery (#22232), plus fixing Wayland compatibility (#21983), indicate demand for more robust browser automation.

5. **Destructive Behavior Guardrails** — Issue [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) (👍1) asks for the agent to avoid `git reset --force` and similar destructive commands when safer alternatives exist.

---

## 6. Developer Pain Points

| Pain Point | Related Issues | Severity |
|------------|---------------|----------|
| **Agent hangs during subagent delegation** | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | 🔴 Critical — Most upvoted issue; breaks core workflow |
| **Subagent success misreporting** | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | 🔴 Critical — Silent correctness failure |
| **Shell "Waiting input" hangs** | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | 🟡 High — Repeated interruption to flow |
| **Agent ignores custom skills** | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | 🟡 High — Undermines extensibility value proposition |
| **Auto Memory security & correctness** | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) | 🟡 High — Security-sensitive; data leakage risk |
| **Prompt template `$` corruption** | [#22466](https://github.com/google-gemini/gemini-cli/issues/22466) | 🟠 Medium — Silent data corruption in prompts |
| **Terminal rendering bugs (resize, tmux, Termux)** | [#21924](https://github.com/google-gemini/gemini-cli/issues/21924), [#24935](https://github.com/google-gemini/gemini-cli/issues/24935) | 🟠 Medium — Niche environments but impactful for affected users |

---

*OWL — Gemini CLI Community Digest | 2026-06-14 | Data as of 2026-06-14 UTC*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-14

---

## 1. Today's Highlights

Copilot CLI shipped two rapid-fire releases (v1.0.62 and v1.0.62-2) packed with UX improvements, plugin extensibility, and diff-view enhancements. On the issue tracker, a Linux ARM64 crash regression in v1.0.62-1 is the most urgent item, while the community is actively requesting better MCP tool discovery and Ollama/BYOM support.

---

## 2. Releases

### v1.0.62 (2026-06-13)
- **Ask/elicitation dialogs now scroll with the timeline** instead of overlaying the agent output — tall dialogs no longer hide the agent's work; scroll up to read earlier output, then back down to the dialog.
- **Blank lines preserved** between reasoning summary sections for improved readability.
- Truncated changelog entry ("Show user-ty…") suggests a minor display fix still being documented.

### v1.0.62-2 (2026-06-13)
- **Plugin extensions**: Plugins can now ship extensions, making them installable via the plugin marketplace.
- **Diff view upgrades**: Content search, match highlighting, and `n`/`N` navigation added to the diff view.
- **`/app` slash command**: Opens the GitHub app directly, with a browser fallback.
- **Subagent configuration**: Configure subagent model, reasoning effort, and context window (entry truncated).

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#3784](https://github.com/github/copilot-cli/issues/3784) | **Linux ARM66 crash — Tokio reactor panic after first message (v1.0.62-1)** | Blocks all Linux ARM66 users from using the latest release. Process exits with code 134 after submitting a prompt. | 👍 0 · 1 comment — newly filed, needs urgent triage. |
| [#2550](https://github.com/github/copilot-cli/issues/2550) | **Not all documented models available via `/model`** | Users can't select Gemini, Raptor mini, or Goldeneye despite them being listed in official docs. | 👍 6 · 4 comments — closed, but the 👍 count signals ongoing frustration. |
| [#3789](https://github.com/github/copilot-cli/issues/3789) | **Ollama API Key support in Bring Your Own Model** | Users running remote Ollama servers need API key passthrough to set the host header; currently requires a forward proxy workaround. | 👍 0 · 0 comments — fresh request, no traction yet. |
| [#3787](https://github.com/github/copilot-cli/issues/3787) | **Preload MCP server tools into initial agent function list** | MCP tools registered via `.mcp.json` or `--additional-mcp-config` are lazy-loaded and invisible to agents that don't proactively discover them, leading to silent tool misses. | 👍 0 · 0 comments — architectural concern with broad impact. |
| [#3785](https://github.com/github/copilot-cli/issues/3785) | **Clarify/support `.copilotignore` semantics** | Nested ignore file behavior is undefined; developers need predictable file exclusion, especially for monorepos. | 👍 0 · 0 comments — linked to broader copilot-sdk#963. |
| [#3788](https://github.com/github/copilot-cli/issues/3788) | **Empty/invalid issue** | No content provided; closed as invalid. | 👍 0 · 1 comment — noise, already handled. |

---

## 4. Key PR Progress

**No pull requests were updated in the last 24 hours.** The two releases (v1.0.62, v1.0.62-2) were likely cut from internal or previously merged PRs. Watch the repo for incoming PRs addressing the Linux ARM64 crash (#3784) and the MCP preload request (#3787).

---

## 5. Feature Request Trends

1. **Bring Your Own Model (BYOM) expansion** — Ollama API key support (#3789) and broader model availability (#2550) show strong demand for using Copilot CLI with non-GitHub-hosted models.
2. **MCP tooling maturity** — Preloading MCP tools into the initial agent context (#3787) reflects a growing ecosystem around MCP servers and the need for first-class integration.
3. **Plugin ecosystem growth** — The v1.0.62-2 release enabling plugin extensions for the marketplace signals GitHub's investment here; expect community plugins to proliferate.
4. **File-level control** — `.copilotignore` support (#3785) is a recurring ask as teams adopt Copilot CLI in complex monorepo setups.

---

## 6. Developer Pain Points

- **Platform regressions**: The Tokio reactor panic on Linux ARM64 (#3784) is a showstopper — a reminder that cross-platform testing coverage needs to keep pace with release velocity.
- **Model discoverability**: Even when models are documented as supported, the `/model` picker doesn't surface them (#2550), eroding trust in the tool.
- **MCP opacity**: Lazy-loaded MCP tools that agents can't see without explicit discovery (#3787) creates a silent failure mode — developers don't know what they're missing.
- **Ignore file gaps**: Without `.copilotignore` semantics (#3785), Copilot CLI can't be cleanly integrated into projects with complex directory structures.

---

*Data source: [github.com/github/copilot-cli](https://github.com/github/copilot-cli) · Digest generated 2026-06-14*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi CLI Community Digest  
**Date:** 2026-06-14  
**Source:** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. Today’s Highlights

No new releases in the last 24 hours, but active bug triage and fixes dominate today’s activity. Two open issues filed on June 13 include a TUI rendering crash at narrow screen widths and a persistent file-read loop bug first reported in January. Meanwhile, four closed PRs—led by contributor `wintrover`—resolved critical MCP instability and API compatibility problems, signaling ongoing robustness improvements in edge-case handling.

---

## 2. Releases

**No new releases** since the last 24-hour window. The latest activity consists entirely of merges to existing fixes in `main`.

---

## 3. Hot Issues

1. [#640: Kimi CLI stuck in reading one file repeatedly (loop)](https://github.com/MoonshotAI/kimi-cli/issues/640)  
   - **Why it matters**: Causes infinite loops during file processing under custom Anthropic endpoints, halting agent execution entirely.  
   - **Community reaction**: High engagement (13 comments, 👍1), with multiple users confirming reproduction across Linux environments using `config.toml`-based backends.

2. [#2450: Uncaught Pi TUI exception due to screen width](https://github.com/MoonshotAI/kimi-cli/issues/2450)  
   - **Why it matters**: Crashes the terminal UI when terminal width is too narrow, degrading usability for developers with split panes or small terminals.  
   - **Community reaction**: Newly opened (0 comments, 👍0), but likely affects a subset of CLI-centric workflows.

---

## 4. Key PR Progress

1. [#2324: fix(web): handle BrokenPipeError in SessionProcess.send_message](https://github.com/MoonshotAI/kimi-cli/pull/2324)  
   - Prevents silent hangs or crashes when writing to a dead subprocess stdin during web session execution.

2. [#2434: fix: suppress MCP connection errors and handle LLM double-serialization](https://github.com/MoonshotAI/kimi-cli/pull/2434)  
   - Stabilizes MCP toolchains by suppressing noisy disconnect errors and fixing malformed JSON propagation from Moonshot API.

3. [#2407: fix: handle double-encoded JSON in tool call arguments (Moonshot API)](https://github.com/MoonshotAI/kimi-cli/pull/2407)  
   - Resolves Pydantic validation failures in `SetTodoList` and `ExitPlanMode` caused by nested stringified JSON in API responses.

4. [#2409: fix(kosong): add default 120s timeout to create_openai_client](https://github.com/MoonshotAI/kimi-cli/pull/2409)  
   - Avoids 5+ minute hangs when upstream proxies (e.g., MiMo) honor shorter timeouts than the SDK’s default 600s.

5. [#2449: fix(string): strip newlines in shorten_middle before length check](https://github.com/MoonshotAI/kimi-cli/pull/2449)  
   - Fixes inaccurate single-line tool argument previews that could wrap or overflow in compact UI displays.

---

## 5. Feature Request Trends

- **Improved error resilience in distributed setups**: Requests for better timeout defaults, proxy compatibility, and graceful degradation with third-party API gateways (#2409, #640).
- **Richer TUI robustness**: Users expect the agent to adapt gracefully to constrained terminal environments (#2450).
- **Standardized API contract handling**: Community seeks automatic normalization of non-standard API responses (e.g., double-encoded JSON from Moonshot) to reduce integration friction (#2407, #2434).

---

## 6. Developer Pain Points

- **Uncaught crashes in UI and subprocess layers**: Both the TUI and web runner lack defensive coding around narrow layouts and broken pipes.
- **Ambiguous behavior with non-canonical backends**: Custom endpoints and proxies expose edge cases not covered by official SDK assumptions.
- **Silent long-timeouts**: Default timeouts mask upstream infrastructure behaviors, leading to developer confusion during debugging.
- **Inconsistent argument rendering**: String truncation logic doesn’t fully sanitize input before display, breaking single-line formatting guarantees.

Maintainers are actively addressing these via recent merges, but broader test coverage for edge-case integrations remains a community ask.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-14

---

## 1. Today's Highlights

OpenCode shipped two patch releases (v1.17.5 and v1.17.6) focused on MCP reliability and OAuth improvements. On the issue tracker, MCP client capabilities remain the hottest topic both for bugs and feature requests, with the community pushing hard for fuller protocol compliance. A surge of new PRs targeting MCP correctness — OAuth callback lifecycle, tool error routing, client roots — signals that the maintainers are converging on a major MCP stability push.

---

## 2. Releases

**v1.17.6** — Declared OpenCode's supported MCP client capabilities, improving interop with stricter MCP servers.

**v1.17.5**
- Added external browser OAuth for the Snowflake Cortex provider (contributed by @santigc6).
- Improved project copy management and move-session flows for the v2 layout.
- Fixed expired MCP sessions being left disconnected — sessions are now recovered automatically.
- Fixed stale MCP clients persisting after closure.

---

## 3. Hot Issues

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#28567](https://github.com/anomalyco/opencode/issues/28567) | Full MCP client capabilities | OpenCode's MCP client lags behind the latest MCP spec; this is the canonical tracking issue for catching up. | 👍20 · **Trending** — Multiple incoming PRs reference this issue. |
| [#4240](https://github.com/anomalyco/opencode/issues/4240) | ACP: no native change review in Zed | Users switching from Gemini CLI expect Zed's review-changes icon to appear after OpenCode edits; it doesn't. | 👍19 · Closed — addressed by PR #22674 adding `fs.writeTextFile` support. |
| [#23153](https://github.com/anomalyco/opencode/issues/23153) | Pay for OpenCode Go with crypto | Signals demand for alternative payment methods beyond traditional billing. | 👍19 · Open — no maintainer response yet. |
| [#23595](https://github.com/anomalyco/opencode/issues/23595) | `<system-reminder>` reordering breaks prompt cache (llama.cpp) | Every re-ordering forces full prompt re-processing; significant perf hit for local-model users. | 👍8 · Relevant to growing local-LLM user base. |
| [#28957](https://github.com/anomalyco/opencode/issues/28957) | "Upstream idle timeout exceeded" on macOS Tahoe | Session dies mid-task on Apple's latest OS; blocks users on Tahoe 26.5. | 👍0 · Highly active discussion (12 comments) but no resolution. |
| [#22129](https://github.com/anomalyco/opencode/issues/22129) | Skills missing from TUI autocomplete | Skills work in the web UI but are invisible in the TUI — a glaring UX inconsistency. | 👍11 · Closed — fix shipped in v1.17.x. |
| [#21090](https://github.com/anomalyco/opencode/issues/21090) | Model calls unavailable tools repeatedly | Tool invocation completely broken for some users despite correct configuration. | 👍5 · Workarounds discussed in comments; no definitive root cause. |
| [#18757](https://github.com/anomalyco/opencode/issues/18757) | "Tool execution aborted" errors on bash/edit/read | Core tools intermittently fail; users resort to full session restarts. | 👍0 · Underlying infrastructure issue; still open. |
| [#19473](https://github.com/anomalyco/opencode/issues/19473) | Desktop app sends UNC paths to WSL-hosted server | Windows–WSL2 path mismatch breaks all bash tool invocations; has a workaround. | 👍0 · Important growing WSL user segment affected. |
| [#20969](https://github.com/anomalyco/opencode/issues/20969) | Read tool adds extra space on Chinese-character paths | Encoding bug in file I18n handling affects CJK-language projects. | 👍2 · Niche but impacts real-world use. |

---

## 4. Key PR Progress

| # | PR | What it does |
|---|----|--------------|
| [#32242](https://github.com/anomalyco/opencode/pull/32242) | fix(mcp): escape OAuth callback errors | Prevents XSS via malicious error strings in MCP OAuth callback HTML; adds regression tests. |
| [#32243](https://github.com/anomalyco/opencode/pull/32243) | fix(mcp): use SDK protocol version in debug | Aligns MCP debug handshake with the latest SDK protocol version for accurate probing. |
| [#32244](https://github.com/anomalyco/opencode/pull/32244) | fix(mcp): handle tool result errors | Routes `CallToolResult.isError` through the AI SDK tool-error path so models see structured diagnostics. |
| [#32245](https://github.com/anomalyco/opencode/pull/32245) | fix(mcp): stop idle OAuth callback server | Cleans up OAuth listener after callback completes/times out; serializes concurrent flows. |
| [#32230](https://github.com/anomalyco/opencode/pull/32230) | feat(mcp): support client roots | Advertises MCP `roots` capability — lets servers request the instance's workspace directory. (**Merged**.) |
| [#22674](https://github.com/anomalyco/opencode/pull/22674) | fix: add ACP `writeTextFile` clientCapability | Enables native file-change review panels in Zed and other ACP-compliant editors. |
| [#32240](https://github.com/anomalyco/opencode/pull/32240) | feat: ACE control layer for tool/spawn governance | Introduces trace-driven gates (monitor / fixed-cap / reject-escalate) for runaway multi-agent cascades. (**Merged**.) |
| [#32238](https://github.com/anomalyco/opencode/pull/32238) | fix: avoid search retention for file reads | Prevents `/file/content` reads from being retained in search index, reducing memory bloat. |
| [#32193](https://github.com/anomalyco/opencode/pull/32193) | fix: mentions for hidden-folder files | Untangles the `@`-mention resolver so files inside directories prefixed with `.` are linkable. |
| [#32247](https://github.com/anomalyco/opencode/pull/32247) | feat(ui): full RTL support for Arabic & RTL languages | Corrects the entire UI for right-to-left rendering; OpenCode ships 17 languages but was hardcoded to LTR. |

---

## 5. Feature Request Trends

1. **MCP protocol parity** — The single most requested direction. Issues #28567 and related PRs show the community wants OpenCode's MCP client updated to the latest spec (roots, full capability negotiation, task-based results, etc.).

2. **Agent/multi-agent governance** — PR #32240 (ACE control layer) and issue #23153's request for tool-spawn limits reflect growing concern about runaway agent cascades in production workflows.

3. **Controller-Side Terminal (CST) / tiled sessions** — Multiple requests (#32224, #30360) for multi-pane or tiled session layouts in the v2 desktop UI.

4. **Local model provider expansion** — Requests for GLM-5.2 on Z.AI (#32217), Ollama local not appearing (#19326), and OpenRouter Fusion preset configuration (#32219).

5. **Payment & deployment flexibility** — Crypto payments (#23153), WSL-native desktop app mode (#322197), and in-GUI model/provider editing without deletion (#32218).

---

## 6. Developer Pain Points

- **MCP session instability** — Expired sessions, stale clients, and tool disconnections remain the highest-frequency complaint category. The flurry of MCP PRs today reflects maintainers actively triaging this, but it's not fully resolved.

- **WSL2 path translation** — Windows desktop ↔ WSL2 path mismatches silently break all bash-tool calls (#19473). A workaround exists but the underlying architecture doesn't handle it natively.

- **Tautological "tool execution aborted" errors** — Intermittent (#18757) with no obvious user-actionable fix; forces session restarts and kills productivity.

- **macOS Tahoe compatibility** — Upstream idle timeouts (#28957) on macOS 26.5 suggest an OS-level networking change is incompatible with the current keep-alive strategy.

- **v2 layout regressions** — Agent picker missing (#30360), terminal option removed (#32231), and shift+enter broken in tmux (#167) — the v2 UI migration is introducing regressions faster than they're being caught.

- **Prompt-cache thrashing** — `<system-reminder>` repositioning (#23595) and unnecessary agents.md re-reads (#32246) waste significant inference time for local-llama.cpp users.

---

*All data sourced from [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode) as of 2026-06-14.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-14

---

## 1. Today's Highlights

The Pi ecosystem saw a busy day with a patch release (v0.79.3) fixing a critical context window metadata issue for OpenAI GPT-5.4/GPT-5.5 and Codex models that could cause billing hazards. The community is actively engaged with 39 issues updated in the last 24 hours, spanning TUI bugs, provider compatibility, and context management improvements. Several significant PRs landed, including a capture system for auto-storing tool results and a configurable chat-template thinking format for vLLM-hosted models.

---

## 2. Releases

**v0.79.3** — [View Release](https://github.com/badlogic/pi-mono/releases/tag/v0.79.3)

- **Fixed:** Corrected inherited OpenAI GPT-5.4/GPT-5.5 and OpenAI Codex GPT-5.4/GPT-5.4 mini/GPT-5.5 context window metadata to use the observed 272k-token Codex backend limit. This prevents a billing hazard from prompts exceeding Codex's accepted limit. (Reported by [@trethore](https://github.com/trethore))

---

## 3. Hot Issues

1. **[#5703](https://github.com/badlogic/pi-mono/issues/5703) — 1h cache retention silently degraded to 5m for Claude models, inflating Anthropic cache costs**
   Pi sets `cache_control.ttl: "1h"` but never sends the required `extended-cache-ttl-2025-04-11` beta header, so the 1h cache is silently dropped. This directly impacts users' Anthropic bills and is a high-priority fix.

2. **[#5653](https://github.com/badlogic/pi-mono/issues/5653) — Move off Shrinkwrap**
   Installing both `@earendil-works/pi-ai` and `@earendil-works/pi-coding-agent` as direct deps puts two identical copies of `pi-ai` on disk. Since the API provider registry is a module-level `Map`, the two copies are separate module instances, causing subtle breakage.

3. **[#5644](https://github.com/badlogic/pi-mono/issues/5644) — GPT 5.5 in API/Codex has incorrect context window size**
   The context window metadata for GPT-5.5 was wrong — Codex uses 400K and the API uses 1M. This was the direct motivator for the v0.79.3 patch release.

4. **[#5595](https://github.com/badlogic/pi-mono/issues/5595) — openai-completions maxTokens not passing through**
   Reasoning models (e.g., DeepSeek v4pro via Together.ai) run out of output tokens before a turn finishes, regardless of user settings. This blocks effective use of long-output reasoning models.

5. **[#5671](https://github.com/badlogic/pi-mono/issues/5671) — ~/.pi and cwd/.pi overlap**
   The `.pi` directory serves as both global and project-local config, which can overlap in `$HOME`. While currently mitigated by storing global config in `.pi/agent`, the naming collision remains a design concern.

6. **[#5687](https://github.com/badlogic/pi-mono/issues/5687) — pi list and pi update never exit when an extension runs an MCP server**
   Package subcommands hang indefinitely after printing output when an installed extension runs a long-lived MCP server, requiring Ctrl-C to exit.

7. **[#5702](https://github.com/badlogic/pi-mono/issues/5702) — prompt_cache_retention sent to providers that reject it (opencode/zen 400)**
   The `prompt_cache_retention` parameter is sent to providers that don't support it, causing 400 errors. The issue also raises maintainability concerns about the `generate-models.ts` build system.

8. **[#5697](https://github.com/badlogic/pi-mono/issues/5697) — Tool-argument validator doesn't coerce JSON-encoded strings to arrays/objects**
   `validateToolArguments` handles coercion for primitives but not for arrays/objects, causing intermittent failures for MCP tools with `string[]` params when providers deliver JSON-encoded strings.

9. **[#5463](https://github.com/badlogic/pi-mono/issues/5463) — Auto-compaction after final turn throws error (👍: 5)**
   Auto-compaction after a normal assistant turn causes an unhandled `Error("Cannot continue from message role: assistant")`. This has the most community upvotes among open issues.

10. **[#5700](https://github.com/badlogic/pi-mono/issues/5700) — Support multiple live agent sessions with TUI switching**
    Users want to juggle multiple concurrent agent sessions and switch between them in the TUI. Currently `switchSession` tears down the current session, making this impossible.

---

## 4. Key PR Progress

1. **[#5704](https://github.com/badlogic/pi-mono/pull/5704) — feat: add capture system for auto-storing tool results**
   Implements the Capture phase of Veil context management. Read, Bash (grep/git), WebSearch, and WebFetch tool results are auto-stored in warm cache with deduplication via contentHash and smart truncation for large results.

2. **[#5690](https://github.com/badlogic/pi-mono/pull/5690) — feat(ai): add configurable chat-template thinkingFormat for vLLM-hosted models**
   Adds `thinkingFormat: "chat-template"` for OpenAI-compatible providers behind vLLM/LiteLLM, reading compat fields for a general approach instead of hardcoded per-model formats.

3. **[#5701](https://github.com/badlogic/pi-mono/pull/5701) — fix(ai/model): adjust minimax-m3 context size**
   Updates Minimax-M3 context size from 1M to 524288 based on observed OpenRouter limits.

4. **[#5688](https://github.com/badlogic/pi-mono/pull/5688) — fix(deps): force safe esbuild resolution**
   Forces transitive `esbuild` resolution to `^0.28.1` to prevent vulnerable lockfile entries from persisting below the patched version.

5. **[#5665](https://github.com/badlogic/pi-mono/pull/5665) — fix(coding-agent): handle setActiveTools(undefined) restoring all tools**
   Fixes #5663 by adding a nullish coalesce in `setActiveToolsByName` so `undefined` restores all tools as documented.

6. **[#5587](https://github.com/badlogic/pi-mono/pull/5587) — feat(coding-agent): add experimental first-time setup flow**
   Behind `PI_EXPERIMENTAL=1`, shows a first-time setup dialog on interactive startup with terminal appearance selection and opt-in analytics.

7. **[#5640](https://github.com/badlogic/pi-mono/pull/5640) — feat(coding-agent): paste clipboard images via Ctrl+V on Windows terminal**
   Fixes Windows terminal swallowing Ctrl+V by handling the keybinding properly for image pasting.

8. **[#5262](https://github.com/badlogic/pi-mono/pull/5262) — feat(ai): add Anthropic Vertex provider (OPEN)**
   Adds a built-in `anthropic-vertex` provider for Claude on Google Cloud Vertex AI as a thin adapter reusing the existing Anthropic streaming path.

9. **[#5681](https://github.com/badlogic/pi-mono/pull/5681) — feat(aigameagent): integrate AiGameAgent as packages/aigameagent**
   Integrates AiGameAgent (HTML5/微信/抖音小游戏 multi-end workflow + OpenAI-compatible HTTP API) into pi-mono as a new package.

10. **[#5693](https://github.com/badlogic/pi-mono/pull/5693) — Merging official repo updates**
    Routine sync of upstream changes.

---

## 5. Feature Request Trends

- **Context & Session Management:** Multiple requests around context window accuracy (#5644, #5703), auto-compaction reliability (#5463), and multi-session TUI support (#5700). The community is pushing for more robust context handling as models grow more capable.
- **TUI/UX Improvements:** Token throughput display (#5684), model name refresh on switch (#5696), tab completion behavior (#5670), and clipboard image paste (#5640) show demand for a more polished terminal experience.
- **Extension & Plugin System:** Custom slash commands with UI capabilities (#289), package discovery with semver ranges (#5695), and marketplace categorization (#5686) indicate the community wants a richer extension ecosystem.
- **Provider Compatibility:** Issues with vLLM thinking formats (#5690), Anthropic cache TTL (#5703), and maxTokens passthrough (#5595) reflect the growing diversity of model providers and the need for better abstraction.

---

## 6. Developer Pain Points

- **Module Duplication:** The shrinkwrap/npm dual-copy problem (#5653) causes subtle runtime bugs when `pi-ai` is loaded twice as separate module instances. This is a structural issue affecting anyone using Pi as a library.
- **Silent Failures:** Cache retention silently degrading (#5703), `pi -p` hanging on unauthenticated providers (#5571), and uppercase header values being misinterpreted as env vars (#5661) all represent cases where Pi fails silently rather than failing fast with clear errors.
- **Tool Argument Validation:** The validator's inability to coerce JSON-encoded strings to arrays/objects (#5697) causes intermittent MCP tool failures that are difficult to debug.
- **Provider-Specific Quirks:** Developers are hitting edge cases with OpenAI Codex context limits, Together.ai maxTokens, z.ai connection terminations (#845), and DeepSeek thinking level mappings (#5699), suggesting the provider abstraction layer needs more hardening.
- **TUI Stability:** Multiple crash reports — Box.render failures (#5597), single `+` character rendering (#5657), and Escape not stopping subagents (#5685) — indicate the TUI needs more defensive rendering logic.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-14

---

## 1. Today's Highlights

Qwen Code saw a surge of activity on the core architecture and UX fronts. A major refactor PR decoupling provider identity from SDK protocol ([#5089](https://github.com/QwenLM/qwen-code/pull/5089)) advanced alongside a feature-request issue ([#5090](https://github.com/QwenLM/qwen-code/issues/5090)) pushing the same direction, signaling the community wants truly custom model providers. Several critical bug-fix PRs landed or progressed: hard-stopping repeated identical tool calls ([#5036](https://github.com/QwenLM/qwen-code/pull/5036)), dropping tool calls after cancellation ([#5020](https://github.com/QwenLM/qwen-code/pull/5020) — now closed/merged), and fixing stale focus navigation in the TUI ([#5070](https://github.com/QwenLM/qwen-code/pull/5070)).

No new releases in the last 24 hours.

---

## 2. Releases

**None.** No new tagged releases were published in the last 24 hours. The most recent nightly build (`v0.18.0-nightly.20260613.44627a24b`) had a failed release workflow ([#5068](https://github.com/QwenLM/qwen-code/issues/5068)).

---

## 3. Hot Issues

### Bugs

| # | Issue | Why It Matters | Community Signal |
|---|-------|---------------|-----------------|
| **#5083** | [TUI freezes — zombie child process not reaped](https://github.com/QwenLM/qwen-code/issues/5083) | The TUI becomes completely unresponsive mid-session due to a zombie bash subprocess. Affects all long-running or MCP-heavy sessions. | 4 comments — early but critical reliability bug |
| **#5055** | [VSIX flagged as Trojan:JS/ShaiWorm.DBA!MTB by antivirus](https://github.com/QwenLM/qwen-code/issues/5055) | P1 security issue — the Windows VSCode companion extension is being flagged by antivirus, which undermines trust and blocks enterprise adoption. | 4 comments; maintainer response pending |
| **#5080** | [Aliyun Standard API Key mixed with Token Plan endpoint → 401](https://github.com/QwenLM/qwen-code/issues/5080) | Auth-type confusion when switching models via `/model`. A user with a `sk-xxx` key hitting a Token Plan provider gets 401. Points to incomplete auth isolation between provider types. | 4 comments |
| **#5016** | [Qwen Code executes a tool after cancellation](https://github.com/QwenLM/qwen-code/issues/5016) | P1 correctness bug: SIGINT during a streaming tool call doesn't prevent the tool from executing. Fixed by PR [#5020](https://github.com/QwenLM/qwen-code/pull/5020) (merged). | Closed ✅ |
| **#5018** | [Long-context task: model loses focus, exhibits heavy forgetting](https://github.com/QwenLM/qwen-code/issues/5018) | On tasks with large context, the model drifts and forgets instructions. Paired with #5019 (duplicate tool calls), this points to a systemic long-context reliability problem. | 4 comments; `status/need-information` |
| **#5019** | [Long-context task: massive repetitive tool calls → session terminated](https://github.com/QwenLM/qwen-code/issues/5019) | The model enters tool-call loops on long tasks, triggering API-level guardrails. Related to #5018 and addressed by PR [#5036](https://github.com/QwenLM/qwen-code/pull/5036). | 3 comments |
| **#5075** | [ExitPlanMode: plan gate fails, full plan not shown](https://github.com/QwenLM/qwen-code/issues/5075) | The coding plan feature silently degrades to a summary view when the plan gate check fails. Closed (root cause under investigation). | 4 comments |
| **#5067** | [Focus-jump counts stale hidden agents, creates phantom selection](https://github.com/QwenLM/qwen-code/issues/5067) | Follow-up to the LiveAgentPanel focus fix (#4911); keyboard focus can land on agents the panel has already hidden. Fixed by PR [#5070](https://github.com/QwenLM/qwen-code/pull/5070) (merged). | Closed ✅ |
| **#5007** | [ACP mode doesn't expose skills from `~/.qwen/skills`](https://github.com/QwenLM/qwen-code/issues/5007) | Users running Qwen Code through Zed or other ACP hosts lose access to locally installed skills. Affects the IDE integration story. | 2 comments |

### Feature Requests & Policy

| # | Issue | Why It Matters | Community Signal |
|---|-------|---------------|-----------------|
| **#3203** | [Qwen OAuth free tier: reduce to 100 req/day, then remove](https://github.com/QwenLM/qwen-code/issues/3203) | The highest-engagement issue (129 comments). Proposes drastically cutting the free OAuth tier. Impacts casual users and evaluation workflows. | Massive discussion — 129 comments |
| **#5090** | [Refactor: Decouple Provider Identity from SDK Protocol](https://github.com/QwenLM/qwen-code/issues/5090) | Requests `providerId` as a free-form string with a separate `Protocol` enum for SDK routing. Enables arbitrary custom providers while keeping type safety. | 3 comments; `status/in-review`; paired with PR [#5089](https://github.com/QwenLM/qwen-code/pull/5089) |
| **#5074** | [Persistent sidebar in web-shell for session management](https://github.com/QwenLM/qwen-code/issues/5074) | A cmux-like sidebar (open by default) showing session list, create, switch, rename, delete. Would bring web-shell UX closer to a full IDE experience. | 2 comments |

---

## 4. Key PR Progress

### Merged / Closed

| # | PR | Description |
|---|----|-------------|
| **#5020** | [fix(cli): drop tool calls after cancellation](https://github.com/QwenLM/qwen-code/pull/5020) | Prevents tool execution after SIGINT/cancellation. Closes #5016. |
| **#5070** | [fix(cli): ignore expired live agents in focus navigation](https://github.com/QwenLM/qwen-code/pull/5070) | Shares the live-agent visibility predicate between render and keyboard gates. Closes #5067. |
| **#5057** | [fix(core): persist file history snapshot updates](https://github.com/QwenLM/qwen-code/pull/5057) | Makes file-history snapshots durable immediately after edits, not just at turn boundaries. |
| **#5044** | [test(cli): cover rewind selection and confirm flow](https://github.com/QwenLM/qwen-code/pull/5044) | Adds regression tests for `/rewind` selector and confirmation orchestration. Closes #4187. |
| **#5034** | [feat(core): Workflow P3 — agentType, model, worktree isolation](https://github.com/QwenLM/qwen-code/pull/5034) | Final piece of the Dynamic Workflows port (P1 + P2 already merged). Brings agent dispatch parity with Claude Code 2.1.168. |
| **#4929** | [fix(cli): OSC 52 clipboard fallback for SSH](https://github.com/QwenLM/qwen-code/pull/4929) | Adds OSC 52 escape sequence fallback so `/copy` works over SSH without xclip/xsel. Closes #4926. |
| **#5091** | [fix(webui): defer DaemonClient disposal for React StrictMode](https://github.com/QwenLM/qwen-code/pull/5091) | Fixes the web-shell `npm run dev:daemon` "Loading…" issue caused by StrictMode double-mounting. |

### Open / In Progress

| # | PR | Description |
|---|----|-------------|
| **#5089** | [refactor(core): extract Protocol enum, decouple model identity from auth](https://github.com/QwenLM/qwen-code/pull/5089) | Turns `AuthType` into a free-form string and introduces a standalone `Protocol` enum (`OPENAI | GEMINI | ANTHROPIC | QWEN_OAUTH`). Draft but aligned with issue #5090. High architectural impact. |
| **#5088** | [feat(web-shell): reveal full tool detail, auto-collapse finished tools](https://github.com/QwenLM/qwen-code/pull/5088) | Removes the 120-char cap on tool descriptions in the web-shell transcript and auto-collapses completed tool calls. |
| **#5051** | [feat(core): migrate Computer Use to cua-driver-rs](https://github.com/QwenLM/qwen-code/pull/5051) | Switches the built-in Computer Use tool from the `ocu` npm backend to the Rust-based `cua-driver` (trycua/cua), enabling background, no-focus-stealing native automation. |
| **#5036** | [fix(core): hard-stop repeated identical tool calls](https://github.com/QwenLM/qwen-code/pull/5036) | Moves the identical-tool-call backstop from TUI hooks into the core `GeminiClient.sendMessageStream()` loop. Closes #5019. |
| **#5085** | [feat(core): add Kind.Agent for sub-agent tool](https://github.com/QwenLM/qwen-code/pull/5085) | Introduces `Kind.Agent` so sub-agent invocations get distinct UI treatment in the WebUI permission dialog and transcript. |
| **#4914** | [fix(cli,core): harden OOM prevention](https://github.com/QwenLM/qwen-code/pull/4914) | Adds idempotency tests for compaction, explicit GC, and debug log defaults. Closes #4815. |
| **#5073** | [fix: warn on oversized context instructions](https://github.com/QwenLM/qwen-code/pull/5073) | Warns at startup if QWEN.md / context block exceeds 15% of the model's context window. |
| **#4989** | [ci: scheduled autofix for stale bug issues](https://github.com/QwenLM/qwen-code/pull/4989) | Daily CI workflow that picks one stale bug and tries to fix it autonomously using Qwen Code itself. Experimental but promising for maintainer scaling. |
| **#5001** | [feat(cli): optional [HH:MM:SS] timestamps per assistant turn](https://github.com/QwenLM/qwen-code/pull/5001) | Adds `output.showTimestamps` setting. Useful for logging and post-hoc analysis of long sessions. |

---

## 5. Feature Request Trends

Synthesizing all issues, the community is converging on these directions:

1. **Provider & Auth Decoupling** — Multiple issues (#5090, #5080, #4877, #4078) and PR #5089 all push toward separating provider identity from auth type/protocol. Users want to register arbitrary model providers with custom IDs while the SDK routes by protocol. This is the single most active architectural theme.

2. **Web-Shell / Desktop UX Parity** — Requests for a persistent session sidebar (#5074), full tool detail visibility (#5088), git branch display (#4769), and statusline wrapping (#5064) all aim to bring the web-shell closer to a full IDE experience.

3. **Long-Context Reliability** — Issues #5018 and #5019 highlight that the model loses coherence and enters tool-call loops on long tasks. PR #5036 addresses the loop side; the forgetting problem remains open.

4. **ACP / IDE Integration** — Skills not loading in ACP mode (#5007) and the VSCode companion antivirus false positive (#5055) both affect the IDE-hosted workflow. As Qwen Code is increasingly used through Zed, VSCode, and other hosts, ACP maturity is critical.

5. **Session & File History Management** — The `/rewind` feature has spawned multiple follow-up issues (#4204, #4187) and PRs (#5044, #5057), showing the community values robust undo/restore capabilities.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|-----------|----------|
| **TUI freezes and zombie processes** | #5083 — the TUI locks up when child processes aren't reaped. Affects any session that spawns subprocesses (MCP servers, shell tools). |
| **Auth confusion across providers** | #5080, #4877, #4078 — mixing API keys, OAuth, and Token Plan endpoints leads to 401s and silent `fastModel` fallbacks. The current model conflates identity with auth. |
| **Tool execution after cancellation** | #5016 (now fixed) — SIGINT didn't reliably stop tool execution. A correctness issue that erodes trust in interactive use. |
| **Repetitive tool-call loops** | #5019 — the model repeats identical tool calls until the API terminates the session. Particularly painful on long tasks. |
| **Long-context drift** | #5018 — model forgets instructions and loses focus in extended sessions. No fix yet. |
| **ACP mode missing features** | #5007 — skills are invisible when running through ACP hosts, breaking workflows for Zed/VSCode users. |
| **Clipboard broken over SSH** | #4926 (fixed by #4929) — `/copy` relied on xclip/xsel with no SSH fallback. Now resolved with OSC 52. |
| **VSCode extension flagged by AV** | #5055 — the Windows VSIX triggers antivirus warnings, blocking enterprise adoption. |
| **Nightly release failures** | #5068 — the automated release pipeline failed for the latest nightly, delaying access to fixes. |

---

*Data source: [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) — snapshot 2026-06-14.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*