# AI CLI Tools Community Digest 2026-06-09

> Generated: 2026-06-09 00:36 UTC | Tools covered: 8

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

**Date:** 2026-06-09 | **Analyst:** OWL, ZOO

---

## 1. Ecosystem Overview

The AI CLI tool landscape in mid-2026 is in a phase of rapid, competitive maturation. Seven major tools — Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, and Qwen Code — are simultaneously racing to ship core reliability fixes, expand provider/ecosystem interoperability, and differentiate on agent orchestration depth. The dominant themes of the cycle are **session lifecycle management** (persistence, compaction, OOM hardening), **security hardening** (SSRF, symlink attacks, project trust gating), and **cross-platform parity** (Windows and mobile remain persistent pain surfaces). A secondary but growing wave of demand centers on **ecosystem migration tooling** — users increasingly expect to move between tools without losing configuration, skills, or agent definitions.

---

## 2. Activity Comparison

| Tool | Release (24h) | Version | Hot Issues Tracked | PRs Active (24h) | Community Signal |
|---|---|---|---|---|---|
| **Claude Code** | ✅ Yes | v2.1.169 | 10 | 4 (1 open, 1 closed, 2 open) | High — `--safe-mode`, `/cd` command; image-token bug closed after 60 comments |
| **OpenAI Codex** | ✅ Yes | v0.138.0 | 10 | 10 (all open or closed today) | Very High — `/app` handoff to Desktop; gpt-5.5 404 crisis dominates |
| **Gemini CLI** | ✅ Nightly | v0.47.0-nightly | 10 | 10 (mix of open/closed/merged) | High — SSRF hardening surge; AST-aware tooling EPICs active |
| **GitHub Copilot CLI** | ❌ No | — | 10 | 1 (closed) | Moderate — quiet PR day; 34 issue updates; vim mode (👍63) leads requests |
| **Kimi Code CLI** | ❌ No | — | 4 | 0 | Low — auth regressions in v0.11.0; minimal PR activity |
| **OpenCode** | ❌ No | — | 10 | 10 (mix of open/closed/merged) | High — SQLite NOT NULL regression; Bedrock provider fragmentation |
| **Pi** | ✅ Yes | v0.79.0 | 10 | 10 (6 merged, 4 open) | Very High — Project Trust launch; 42 issues, 22 PRs touched in 24h |
| **Qwen Code** | ✅ Nightly | v0.17.1-nightly | 10 | 14 (all open) | High — OOM fixes, ACP transport push, CI integrity gap flagged |

**Key takeaway:** Pi and OpenAI Codex show the highest raw activity volume. Claude Code and Qwen Code are shipping frequent incremental releases. Kimi Code CLI is the quietest, with signs of maintainer bandwidth constraints. GitHub Copilot CLI has high community engagement but low PR throughput, suggesting a triage backlog.

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities, indicating convergent market demand:

| Shared Direction | Tools Expressing Demand | Specific Needs |
|---|---|---|
| **Session lifecycle control** | Claude Code, Copilot CLI, OpenCode, Pi, Qwen Code | Pause/resume (#1928 Copilot), persistent memory across sessions (#16077 OpenCode, #5522 Pi rewind+restore), mid-turn compaction guards (#5512 Pi, #4838 Qwen), session deletion (`codex delete` 👍102) |
| **Hook/automation system maturity** | Codex, Copilot CLI, Claude Code, Pi | Full hook parity with Claude Code (#21737 Codex), plugin hooks not firing (#2540 Copilot), async command hooks (PR #27039 Codex), `userPromptSubmitted` prompt modification (#3713 Copilot) |
| **Multi-model / BYOK flexibility** | Copilot CLI, OpenCode, Pi, Codex, Qwen Code | Mid-session model switching including BYOK/local (#3709 Copilot), provider-agnostic transport config (PR #31357 OpenCode), per-provider streaming disable, Bedrock-compatible gateway support |
| **Windows platform parity** | Codex, Copilot CLI, OpenCode, Pi, Claude Code | WSL performance (#25715 Codex, #3652 Copilot), OAuth callback failures (#25203 Codex), runaway MCP spawning (#3701 Copilot), terminal rendering (#5529 Pi), install script bugs (#3710 Copilot) |
| **Security hardening** | Gemini CLI, OpenCode, Pi, Claude Code, Codex | SSRF in web_fetch (Gemini PRs #27744/#27739), symlink traversal (Codex PRs #25956/#15730, Claude Code #66171), project trust gating (Pi v0.79.0), prompt injection via plugins (#66359 Claude Code) |
| **Ecosystem migration / config portability** | Qwen Code, Claude Code, Copilot CLI, Pi | Claude config import (#4845 Qwen), cross-machine `~/.claude/` sync (#66303 Claude Code), declarative agent definitions (#4821 Qwen), separating managed vs. user config (#5508 Pi) |
| **Cost/usage transparency** | All tools | Token waste from silent errors (Claude #60334), usage-limit display bugs (Claude #61828), token accounting with export (#4564 Qwen), missing per-token pricing (#5286 Pi) |

---

## 4. Differentiation Analysis

### Feature Focus

| Tool | Primary Differentiator | Secondary Strengths |
|---|---|---|
| **Claude Code** | Deepest plugin/skill/hook ecosystem; `--safe-mode` for clean troubleshooting | Cowork feature (cross-platform desktop agent); 1M context window support |
| **OpenAI Codex** | Tightest Desktop-CLI integration (`/app` handoff); strongest observability investment (tracing spans) | Guardian review sessions; Python SDK with goal operations |
| **Gemini CLI** | AST-aware tooling roadmap (potential step-change in large-codebase efficiency); browser agent maturing | Vertex AI integration; Auto Memory (automated transcript indexing) |
| **GitHub Copilot CLI** | Native GitHub ecosystem integration; BYOK/provider flexibility focus | Plugin hooks architecture; multi-model session support |
| **Kimi Code CLI** | Lightweight; Moonshot AI model integration | Simplicity; `@filename` file-reference shorthand (currently regressed) |
| **OpenCode** | ACP-native architecture (Zed, Devin integration); broadest provider support (Bedrock, vLLM, etc.) | TUX + Web UI dual interface; SWE-bench verified performance focus |
| **Pi** | Project Trust security model; most responsive maintainer team (6 PRs merged on release day) | File checkpoint/rewind; multi-account/provider support; Ollama local model integration |
| **Qwen Code** | ACP Streamable HTTP daemon (`qwen serve`); strongest session memory/OOM engineering focus | Declarative agent definitions; Claude config migration tooling |

### Target Users

- **Enterprise / security-conscious:** Pi (Project Trust), Codex (sandbox hardening, observability), Gemini CLI (SSRF hardening, GCP telemetry)
- **Power users / plugin developers:** Claude Code (richest extension surface), OpenCode (ACP-native, provider-agnostic)
- **GitHub-native developers:** Copilot CLI (seamless GitHub integration, OAuth, Copilot model access)
- **Multi-tool / migration users:** Qwen Code (Claude import, ACP daemon), Pi (multi-provider, multi-account)
- **Cost-sensitive / local model users:** Pi (Ollama support), OpenCode (vLLM, self-hosted backends)

### Technical Approach

- **Rust-based:** Codex (performance, safety), OpenCode (TUX performance)
- **TypeScript/Node-based:** Claude Code, Gemini CLI, Copilot CLI, Qwen Code (ecosystem velocity)
- **Go-based:** Kimi Code CLI (deployment simplicity)
- **Multi-language:** Pi (TypeScript core with native terminal handling)

---

## 5. Community Momentum & Maturity

### Highest Momentum (rapid iteration, high engagement)

1. **Pi** — Shipped v0.79.0 with a major security feature, merged 6 PRs on release day, closed issues within hours. The maintainer response time is the fastest in the ecosystem. The `alwaysTrust` escape hatch was added the same day as community backlash — a model of responsive development.

2. **OpenAI Codex** — 10 PRs active in 24h with clear investment themes (observability, sandbox hardening, Desktop integration). The gpt-5.5 404 crisis is a significant risk, but the breadth of active development is high.

3. **Qwen Code** — 14 open PRs, nightly release cadence, and a clear strategic push on ACP transport maturity. The CI integrity gap (#4864) is a maturity concern but was caught and flagged by the community.

### Stable / Mature (established patterns, moderate iteration)

4. **Claude Code** — Steady incremental releases, large installed base, but several long-standing issues (#16550 file write, #27725 detachable windows) suggest feature velocity may be slowing as the tool matures.

5. **Gemini CLI** — Nightly cadence with consistent quality (SSRF hardening, telemetry fixes, CJK rendering). The AST-aware tooling EPICs represent a potentially significant differentiator if delivered.

6. **OpenCode** — High PR volume but the SQLite NOT NULL regression and Bedrock provider fragmentation suggest testing coverage gaps at the current growth pace.

### Constrained / At Risk

7. **GitHub Copilot CLI** — High community demand (vim mode 👍63, session management) but low PR throughput (1 closed PR in 24h). The gap between community expectations and maintainer bandwidth is widening.

8. **Kimi Code CLI** — Lowest activity across all metrics. Auth regressions and `@filename` breakage in v0.11.0 with zero maintainer response is a retention risk. The Python→TypeScript migration adds transitional friction.

---

## 6. Trend Signals

### Signal 1: Session Persistence Is the New Table Stakes
Users no longer accept stateless CLI invocations. The demand for pause/resume, cross-session memory, file checkpoints on rewind, and OOM-safe long-running sessions is universal across all eight tools. **Implication:** Tools that solve session continuity reliably will have a structural advantage in 2026H2.

### Signal 2: Security Is Shifting Left in the Agent Lifecycle
SSRF hardening (Gemini), symlink rejection (Codex, Claude Code), project trust gating (Pi), and prompt injection via plugins (Claude Code) all surfaced in a single day. As AI CLI tools are adopted in CI/CD and enterprise environments, **security review is becoming a gating factor for adoption**, not a nice-to-have.

### Signal 3: The "Multi-Tool Developer" Is the Norm, Not the Exception
Qwen Code's `/import-config` for Claude settings, Codex's Claude Code hook parity tracker, and Pi's multi-account support all acknowledge the same reality: **developers use multiple AI CLI tools and expect frictionless migration.** Tools that lock in users through proprietary config formats will face backlash.

### Signal 4: Windows Is the Persistent Blind Spot
Every tool with a Windows surface (all except Kimi Code CLI) has active Windows-specific bugs — from WSL performance to OAuth failures to terminal rendering. **Windows developer experience is the single largest cross-tool quality gap** and represents both a risk and an opportunity for whichever tool closes it first.

### Signal 5: Provider Fragmentation Is Accelerating
Bedrock Mantle, vLLM, Ollama, Moonshot, self-hosted gateways — the provider landscape is proliferating faster than any single tool's provider layer can accommodate. OpenCode's Bedrock issues, Pi's multi-provider PRs, and Copilot CLI's BYOK rough edges all point to a need for **pluggable, spec-tolerant provider architectures** rather than hardcoded per-provider adapters.

### Signal 6: Agent Orchestration Depth Is the Next Competitive Frontier
`/goal` loops (Qwen), Guardian review sessions (Codex), AST-aware sub-agents (Gemini), Dynamic Workflows porting (Qwen), and multi-agent patterns (Copilot) all signal that the market is moving beyond single-turn code generation toward **multi-step, multi-agent autonomous workflows**. The tool that makes this reliable and observable will define the next era.

---

*Report generated by OWL, ZOO. Data sourced from GitHub community digests for all eight tools, 2026-06-09.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights

**Data Source:** [github.com/anthropics/skills](https://github.com/anthropics/skills) — *As of 2026-06-09*

---

## 1. Top Skills Ranking (by Community Attention)

These PRs have attracted the most discussion, reaction, or engagement — signaling strong community interest or broad applicability.

| # | PR | Author | Functionality | Comments | Status |
|---|-----|--------|---------------|----------|--------|
| 1 | [#514](https://github.com/anthropics/skills/pull/514) | PGTBoos | **Document Typography** — Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents | undefined | OPEN |
| 2 | [#486](https://github.com/anthropics/skills/pull/486) | GitHubNewbie0 | **ODT Skill** — Creates, fills, reads, and converts OpenDocument files (.odt ↔ HTML), targeting LibreOffice and ISO-standard document workflows | undefined | OPEN |
| 3 | [#210](https://github.com/anthropics/skills/pull/210) | justinwetch | **Frontend Design Improvements** — Re-writes the `frontend-design` skill for clarity and actionability, ensuring every instruction is executable within a single conversation | undefined | OPEN |
| 4 | [#83](https://github.com/anthropics/skills/pull/83) | eovidiu | **Skill Quality & Security Analyzers** — Two meta-skills for evaluating other Skills across structure, security, and documentation quality (five-dimension scoring) | undefined | OPEN |
| 5 | [#1140](https://github.com/anthropics/skills/pull/1140) | SyedaQurratAI | **Agent Creator** — A meta-skill for creating task-specific agent sets; also fixes `evaluation.py` for multi-tool calls and adds Windows path support | undefined | OPEN |
| 6 | [#568](https://github.com/anthropics/skills/pull/568) | Vanka07 | **ServiceNow Platform Skill** — Covers ITSM, ITOM, ITAM/SAM, FSM, HRSD/CSM, SPM/PPM, SecOps, and IntegrationHub in a single enterprise skill | undefined | OPEN |
| 7 | [#444](https://github.com/anthropics/skills/pull/444) | Chase-Key | **AURELION Suite** — A four-part cognitive + memory framework (kernel, advisor, agent, memory) for structured knowledge management and professional collaboration | undefined | OPEN |
| 8 | [#363](https://github.com/anthropics/skills/pull/363) | Mr-Neutr0n | **Feature-Dev Workflow Fix** — Resolves a critical `TodoWrite` overwrite bug that silently skipped Phase 6 (Quality Review) and Phase 7 (Summary) in the `/feature-dev` workflow | undefined | OPEN |

---

## 2. Community Demand Trends (from Issues)

Analyzing the top issues by comment volume reveals where the community wants Skills to go:

1. **Workflow & Skill Execution Reliability** — Multiple issues ([#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169)) report fundamental bugs in `run_eval.py` and `run_loop.py` where skills silently fail to trigger. This is currently the **highest-friction area**: the meta-tooling meant to help create better skills is itself broken, blocking contributors.

2. **Enterprise Collaboration & Sharing** — [#228 (13 comments, 7 👍)](https://github.com/anthropics/skills/issues/228) is the single most-discussed issue: teams want org-wide skill sharing directly inside Claude.ai instead of manual `.skill` file distribution via Slack/Teams. This reflects enterprise adoption maturing.

3. **Security & Trust Boundaries** — [#492](https://github.com/anthropics/skills/issues/492) raises a concrete trust issue: community skills distributed under the `anthropic/` namespace can impersonate official ones. The community is asking for a namespace or signing mechanism.

4. **Cross-Platform Compatibility** — Windows-specific bugs dominate ([#1050](https://github.com/anthropics/skills/pull/1050), [#1099](https://github.com/anthropics/skills/pull/1099), [#723](https://github.com/anthropics/skills/pull/723)), indicating a significant Windows developer base hitting `subprocess.Popen` and encoding issues.

5. **Ecosystem Interoperability** — Requests for Bedrock support ([#29](https://github.com/anthropics/skills/issues/29)) and MCP exposure ([#16](https://github.com/anthropics/skills/issues/16)) reflect demand for Skills to work beyond the native Anthropic runtime.

---

## 3. High-Potential Pending Skills

These PRs are open with substantive scope and are likely candidates for near-term merging based on community need:

- **[#83 — Skill Quality & Security Analyzers](https://github.com/anthropics/skills/pull/83)** — *Meta-infrastructure for the entire ecosystem. With #492 highlighting trust issues, security analysis becomes urgent.* ⚠️ Stale since 2026-01-07.

- **[#514 — Document Typography](https://github.com/anthropics/skills/pull/514)** — *Addresses a universal pain point (typographic quality) affecting every generated document. Highly relatable scope.* ⚠️ Stale since 2026-03-13.

- **[#1140 — Agent Creator + Eval Fixes](https://github.com/anthropics/skills/pull/1140)** — *Actively addresses open Issue #1120 and fixes critical tooling bugs. Submitted 2026-05-15, most recently updated.*
- **[#568 — ServiceNow Skill](https://github.com/anthropics/skills/pull/568)** — *Enterprise-grade, covers 8 ServiceNow modules. Strong fit for professional user base.*

> **Notable contributor:** `Lubrsy706` has three PRs ([#538](https://github.com/anthropics/skills/pull/538), [#539](https://github.com/anthropics/skills/pull/539), [#541](https://github.com/anthropics/skills/pull/541)) fixing PDF case-sensitivity, YAML validation, and DOCX bookmark collisions — all infrastructure hygiene improvements that would unblock multiple downstream skills.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for Skills reliability and trust infrastructure**: meta-tools for security scanning, quality evaluation, and Windows-compatible execution are the foundation that all other Skills depend on — and right now those foundations are where the most urgent issues are accumulating.

---

*Report generated from `anthropics/skills` open data, 2026-06-09. All links reference the official repository.*

---

# Claude Code Community Digest — 2026-06-09

---

## 1. Today's Highlights

Claude Code shipped **v2.1.169** with a `--safe-mode` flag and a new `/cd` command for hot-swapping working directories. The day's most discussed community issue is **image processing failures burning 70% of users' rate-limit windows** (#60334) — now closed after 60 comments. A wave of new bug reports around runaway agent spawning, usage-limit display glitches, and prompt-injection via plugins also surfaced.

---

## 2. Releases

**v2.1.169** — What's new:

| Change | Why it matters |
|---|---|
| `--safe-mode` flag (and `CLAUDE_CODE_SAFE_MODE` env var) | Boots Claude Code with all customizations (CLAUDE.md, plugins, skills, hooks, MCP servers) disabled — a clean troubleshooting baseline. |
| `/cd` command | Moves an active session to a new working directory **without breaking the prompt cache**, avoiding redundant context re-injection. |

---

## 3. Hot Issues (Top 10)

| # | Issue | Reactions | Why it matters |
|---|---|---|---|
| **#60334** | [Bug] Image processing failures wasting conversation tokens | 60 👍 14 | Image in a conversation could not be processed — users reported this burned ~70% of a 5-hour window despite not actively sending images. Closed today; no root cause disclosed. |
| **#63896** | [Bug] "Usage credits required for 1M context" error during compaction | 39 👍 22 | Compaction triggers an opaque API error demanding usage credits, even on standard plans. High frustration; needs an Anthropic-side fix. |
| **#16550** | [Feature] Allow Claude to write/update project files | 31 👍 59 | One of the longest-standing feature requests. The 59 upvotes signal broad demand for first-class file-mutation permissions. |
| **#48827** | [Bug] Cowork downloads Linux ELF binary on Intel macOS | 18 👍 4 | macOS users get SIGILL (exit 132) because the Cowork feature fetches a Linux binary. Cross-platform packaging bug. |
| **#27725** | [Feature] Detachable OS-level windows in desktop app | 13 👍 54 | Users want native OS windows for split-screen workflows — popular request with 54 upvotes. |
| **#61828** | [Bug] "Usage limit reached" despite 2% session / 32% weekly | 12 👍 4 | Display inconsistency — the hard stop does not align with actual usage metrics. |
| **#29937** | [Bug] Terminal rendering corruption in tmux | 10 👍 22 | Text overlaps and overwrites previous output in tmux sessions. Long-standing issue with a solid supporter base. |
| **#66339** | [Bug] Background agents resurrect after being stopped, consuming 160k+ tokens | 4 👍 0 | Agents ignoring explicit user termination signals. Cost impact is significant. |
| **#66359** | [Bug] Unattributable prompt injection after plugin installation | 3 👍 0 | A suspected prompt-injection instruction appeared post-plugin install with no clear source. Security-sensitive. |
| **#66332** | [Bug] Authentication broken on Android + Codespaces (OAuth redirect) | 3 👍 0 | OAuth redirect flow fails on mobile platforms, blocking first-time auth. |

---

## 4. Key PR Progress

Only 4 pull requests saw activity in the last 24 hours:

| PR | Author | Status | Summary |
|---|---|---|---|
| **#66372** | MartinCajiao | **Open** | `fix(devcontainer)`: Detects Docker daemon failures via `$LASTEXITCODE`. The existing try/catch misbehaves in PowerShell because non-zero exits from native commands don't throw. |
| **#66171** | szamaniai | **Open** | `extensibility.py` symlink dereference fix — addresses a security/safety concern where symlinks in project-controlled GUI paths were followed. |
| **#26914** | Johntycour | **Closed** | Adds `examples/rules/` directory with correct/incorrect frontmatter syntax and a PostToolUse hook that detects broken `paths:` syntax. Documentation + validation. |
| — | — | — | No other PRs met the activity threshold in the last 24h. |

---

## 5. Feature Request Trends

The most-requested feature directions distilled from all active issues:

1. **File system write/update permissions** (#16550, 59 👍) — Granular, first-class support for Claude to persist project file changes.
2. **UI extensibility in Desktop app** (#27725, 54 👍) — Detachable/native OS windows, split-screen monitoring.
3. **Cross-machine setup sync** (#66303) — Sync `~/.claude/` (skills, plugins, MCP, statusline) via Anthropic account.
4. **Sandbox path-scoped Unix sockets** (#41817) — Allow bind/listen on Unix domain sockets within the sandbox.
5. **CLI startup logo suppressible/themed** (#65788, 2 👍) — Suppress the welcome banner for custom launcher scripts.

---

## 6. Developer Pain Points

Recurring frustrations from the community across live issues:

| Pain Point | Representative Issues |
|---|---|
| **Token/cost waste from silent errors** | #60334 (image failures), #66339 (zombie agents), #66332 (auth broken), #66353/#65920 (runaway agent spawning — 272 agents for a simple task) |
| **Usage-limit display bugs** | #61828, #66357 — hard stops misaligned with actual usage |
| **Cross-platform packaging gaps** | #48827, #66367 — Linux ELF served on macOS Intel |
| **Plugin-related security** | #66355 — prompt injection surfaced after plugin install |
| **Terminal rendering glitches** | #29937 (tmux corruption), #57759 (CJK IME broken) |
| **Mobile/Android platform parity** | #66332 (OAuth), #66363 (AskUserQuestion truncation) |

---

*Digest generated from data sourced via `github.com/anthropics/claude-code`. For real-time tracking, watch the repository on GitHub.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-09

---

## 1. Today's Highlights

Codex shipped **v0.138.0** with a major cross-platform workflow upgrade: the `/app` command can now hand off a CLI thread directly into Codex Desktop on macOS and Windows, and Windows workspace launches can open straight into Desktop. A new **gpt-5.5 model availability bug** is the dominant community issue, with multiple reports across Windows, macOS, and CLI showing 404 "Model not found" errors despite the model being listed as available. On the PR side, the team is actively investing in **observability** (spans for tool router/build, debug-only analytics capture) and **sandbox hardening** (symlink rejection, Windows deny-read fixes).

---

## 2. Releases

### rust-v0.138.0 (latest stable)
- **`/app` handoff to Desktop**: The `/app` command can now hand off the current CLI thread into Codex Desktop on macOS and native Windows. Windows workspace launches can open directly into Desktop instead of stopping at a manual prompt. ([#25638](https://github.com/openai/codex/pull/25638), [#26500](https://github.com/openai/codex/pull/26500))
- **Local image attachments & standalone image generation** (details truncated in release notes)

### rust-v0.139.0-alpha.1
- Early alpha; no detailed notes beyond version bump.

### rust-v0.138.0-alpha.7 / alpha.8
- Incremental pre-release builds.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [26892](https://github.com/openai/codex/issues/26892) | **gpt-5.5 listed as available but requests fail with 404** (Windows, Desktop + CLI) | Most-discussed issue today (76 comments, 👍27). Users on both Desktop and CLI see gpt-5.5 in the model picker, but actual API calls return 404. gpt-5.4 works fine. Suggests a model metadata/routing mismatch on OpenAI's side. | High frustration; multiple users confirming across platforms. |
| [27021](https://github.com/openai/codex/issues/27021) | **macOS: gpt-5.5 returns 404 while gpt-5.4 works** | Same root cause as #26892 but on macOS, confirming this is cross-platform. Filed today, already 5 comments. | Users consolidating reports under the Windows thread. |
| [26916](https://github.com/openai/codex/issues/26916) | **gpt-5.5 returns 404 on first message (Brazil/GIG region)** | Suggests the gpt-5.5 issue may be region-specific or rolling out unevenly. Brazil-region user on Windows PowerShell. | Adds geographic dimension to the model availability bug. |
| [26860](https://github.com/openai/codex/issues/26860) | **GPT-5.5 xhigh via Amazon Bedrock stops mid-task** | Affects users on custom model providers (Bedrock). GPT-5.4 xhigh works identically, suggesting a provider-side context/streaming issue with the 5.5 variant. | 4 comments, 👍2 — smaller but critical for enterprise users. |
| [25144](https://github.com/openai/codex/issues/25144) | **Option to disable auto-conversion of long pasted prompts → .txt attachments** | Highly requested (👍65, 51 comments). Long structured prompts are silently converted into file attachments, breaking workflows that rely on inline context. | Strong community support; seen as a regression in UX control. |
| [25203](https://github.com/openai/codex/issues/25203) | **GitHub OAuth callback fails on Windows ("Unable to find Electron app")** | Blocks GitHub integration setup on Windows entirely. 37 comments, 👍21. | Persistent issue since late May; no workaround confirmed. |
| [25715](https://github.com/openai/codex/issues/25715) | **Codex App unusably slow with WSL agent environment** | 36 comments, 👍36 — one of the most upvoted performance issues. Routine turns are extremely slow when the agent runs in WSL. | Major pain point for Windows developers; CLI-in-WSL is fast, Desktop is not. |
| [25719](https://github.com/openai/codex/issues/25719) | **macOS: Codex Desktop triggers syspolicyd/trustd CPU & memory runaway** | Desktop repeatedly triggers macOS security daemons, causing system-wide resource exhaustion. 20 comments, 👍20. | Affects machine usability beyond Codex itself. |
| [8784](https://github.com/openai/codex/issues/8784) | **`codex delete <session>` command** | Long-standing request (opened Jan 6) with 👍102 — the most upvoted feature request in this set. Users want to permanently delete sessions they no longer need. | Persistent demand; no native solution yet. |
| [21753](https://github.com/openai/codex/issues/21753) | **Full Claude Code Hook Parity (29+ hooks)** | Umbrella tracker for bringing Codex hooks to parity with Claude Code's automation surface. 11 comments, 👍15. | Important for users migrating from or comparing to Claude Code. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| [27094](https://github.com/openai/codex/pull/27094) | **Add spans to `build_tool_router`** | Observability: adds tracing spans to track the ~113ms `append_tool_search_executor` cost for follow-up optimization. |
| [27090](https://github.com/openai/codex/pull/27090) | **Add spans to `build_tool_specs_and_registry`** | Same observability push — spans on the tool spec/registry build path. |
| [26694](https://github.com/openai/codex/pull/26694) | **Cache tool search handler (2/n)** | Performance: caches the tool search handler to avoid redundant ~113ms rebuilds when inputs haven't changed. |
| [27017](https://github.com/openai/codex/pull/27017) | **Fix Windows deny-read across exec runtimes** | Bug fix: Windows `deny_read` sandbox entries were in the permission profile but not resolved by `shell_command`/`exec_command`, so the model could see restrictions the runtime didn't enforce. |
| [25956](https://github.com/openai/codex/pull/25956) | **Reject symlinked `--output-last-message` paths** | Security hardening: uses `O_NOFOLLOW` to reject symlinked output files and parent directories. |
| [15730](https://github.com/openai/codex/pull/15730) | **Harden symlinked project config writes** | Security: rejects symlinked `.codex/config.toml` loads and reads through no-follow filesystem plumbing. |
| [27039](https://github.com/openai/codex/pull/27039) | **Add detached async command hooks** | Feature: allows hooks with `async: true` to run outside the blocking hook lane and deliver results on a later turn. |
| [26953](https://github.com/openai/codex/pull/26953) | **Add dedicated Python SDK goal operations** | SDK: adds a goal API matching how the TUI drives persisted goals, keeping goal work composable through existing RPCs. |
| [27091](https://github.com/openai/codex/pull/27091) | **Eagerly compact Guardian threads between reviews** | Performance: schedules compaction for reused Guardian review sessions immediately after a completed review when context exceeds the auto-compaction threshold. |
| [27068](https://github.com/openai/codex/pull/27068) | **Show effective sandbox modes in `/debug-config`** | UX fix: renders `allowed_sandbox_modes` from finalized permission constraints instead of the raw requirements list. |

---

## 5. Feature Request Trends

1. **Session management** — `codex delete <session>` ([#8784](https://github.com/openai/codex/issues/8784), 👍102) remains the single most-requested capability. Users want lifecycle control over sessions.

2. **Hook system expansion** — Full Claude Code hook parity ([#21753](https://github.com/openai/codex/issues/21753)) and async command hooks (PR [#27039](https://github.com/openai/codex/pull/27039)) signal strong demand for deeper automation and lifecycle integration.

3. **Prompt/attachment control** — Disabling auto-conversion of long pasted prompts to `.txt` attachments ([#25144](https://github.com/openai/codex/issues/25144), 👍65) reflects a desire for more predictable input handling.

4. **Composable agent instructions** — `@include` directive for `AGENTS.md` ([#17401](https://github.com/openai/codex/issues/17401)) would enable modular, maintainable instruction sets across projects.

5. **Context management between tasks** — Ability to clear context mid-session while preserving the session ID ([#23218](https://github.com/openai/codex/issues/23218)) for clean task transitions.

6. **Image generation from Codex** — ([#8758](https://github.com/openai/codex/issues/8758), 👍55, now closed) — was a popular request; its closure suggests this may be addressed or deprioritized.

---

## 6. Developer Pain Points

- **gpt-5.5 model broken across all platforms** — The most urgent pain point today. Users on Windows, macOS, CLI, and Bedrock all report 404 errors. The model appears in the picker but cannot serve requests. This is blocking work for anyone who selected it as their default.

- **Windows + WSL performance** — Multiple issues ([#25715](https://github.com/openai/codex/issues/25715), [#26149](https://github.com/openai/codex/issues/26149), [#22185](https://github.com/openai/codex/issues/22185)) describe severe latency, filesystem scanning overhead, and exec failures when using WSL as the agent environment. The CLI-in-WSL workaround is fast, but Desktop integration is not.

- **Windows-specific regressions** — Beyond WSL: GitHub OAuth callback failures ([#25203](https://github.com/openai/codex/issues/25203)), transparent sidebar rendering bugs ([#25249](https://github.com/openai/codex/issues/25249)), and lost projects after restart ([#19615](https://github.com/openai/codex/issues/19615)) suggest Windows is accumulating platform-specific debt.

- **macOS security daemon runaway** — `syspolicyd`/`trustd` CPU and memory spikes triggered by Codex Desktop ([#25719](https://github.com/openai/codex/issues/25719)) affect the entire machine, not just the app.

- **Stale auth state after 401** — Codex Desktop caches stale app connector links after reauthentication-required responses ([#24675](https://github.com/openai/codex/issues/24675)), requiring manual cache clearing.

- **Hook diagnostics** — When hooks fail, error messages don't identify which hook failed or expose diagnostics ([#27052](https://github.com/openai/codex/issues/27052)), making debugging difficult.

- **Symlink security gaps** — Multiple PRs ([#25956](https://github.com/openai/codex/pull/25956), [#15730](https://github.com/openai/codex/pull/15730)) are actively closing symlink traversal vulnerabilities in config and output paths, indicating this was a real attack surface.

---

*Data source: [github.com/openai/codex](https://github.com/openai/codex) · Digest generated 2026-06-09*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest — 2026-06-09**

---

### 1. Today's Highlights

The June 9 nightly (v0.47.0-nightly) shipped with a minor Antigravity transition banner fix and removal of "experimental" labeling from browser agent docs, signaling growing maturity for that feature. On the issues front, two long-running EPICs—**AST-aware tooling** (#22745, #22746) and **component-level evaluations** (#24353)—saw renewed discussion as the agent quality roadmap remains a central focus for maintainers. Security and SSRF hardening also jumped forward with two substantial open PRs targeting DNS-based bypass vectors in the `web_fetch` tool.

---

### 2. Releases

**v0.47.0-nightly.20260609.g0567b25a2**
- Updated the max display count for the Antigravity transition banner (PR #27676).
- Removed "experimental" label from browser agent documentation (PR #27746), a quiet signal that browser-agent stability has improved significantly.

---

### 3. Hot Issues

1. **[#24353] Robust component-level evaluations** (EPIC · 7 comments) — @gundermanc continues to drive the effort to formalize behavioral evals at the component level, building on the 76 existing tests. This is foundational work for measuring agent correctness before shipping quality-sensitive features.
2. **[#22745] Impact of AST-aware file reads, search, and mapping** (EPIC · 7 comments + 1 👍) — Tracks whether structured AST tools can reduce misaligned reads and token waste. High community interest makes this a potential game-changer for large-codebase performance.
3. **[#21409] Generalist agent hangs** (P1 · 7 comments + 8 👍) — The most upvoted bug this week. Deferring to the generalist agent causes infinite hangs on simple tasks. Users have found that disabling sub-agents around the issue is a stopgap, but a real fix is needed.
4. **[#22323] Subagent recovery after MAX_TURNS reports false GOAL success** (P1 · 6 comments + 2 👍) — A silent correctness bug: the `codebase_investigator` claims success when it actually timed out without doing analysis. Deceptive status reporting directly erodes trust in autonomous agents.
5. **[#21968] Gemini does not use skills and sub-agents enough** (P2 · 6 comments) — Anecdotal but widely felt: the model ignores available custom skills for relevant tasks. This touches on tool-prompt engineering and may inform future agent UX improvements.
6. **[#26525] Deterministic redaction and reduced Auto Memory logging** (P2 · 5 comments) — Auto Memory currently sends transcripts to an extraction agent before secrets are redacted. A security tightening issue that intersects with privacy-first deployment scenarios.
7. **[#26522] Auto Memory retries low-signal sessions indefinitely** (P2 · 5 comments) — Complements #26525; unprocessed low-signal sessions cycle through the index repeatedly, wasting background-agent quota.
8. **[#25166] Shell command execution gets stuck with "Waiting input"** (P1 · 4 comments + 3 👍) — Affects simple, non-interactive commands. The CLI incorrectly thinks stdin is still needed after the process exits, blocking the entire session.
9. **[#21983] Browser subagent fails on Wayland** (P1 · 4 comments + 1 👍) — Linux Wayland users are locked out of browser-agent functionality, an important gap as Linux developer adoption grows.
10. **[#26523] Surface or quarantine invalid Auto Memory inbox patches** (P2 · 3 comments) — Malformed memory patches are silently skipped, making debugging memory extraction failures difficult. User-proposed quarantine would improve observability.

---

### 4. Key PR Progress

1. **[PR #27750] Version bump to v0.47.0-nightly** — The standard automated release commit.
2. **[PR #27729] Truncate telemetry metric attributes to 1024 chars** — Fixes GCP export crashes that were flooding terminals with Node.js stack traces, especially in `--format json` mode. A solid enterprise-ops fix.
3. **[PR #27505] Fix extra spaces on width-0 CJK continuation cells** — Rendering correction for international users. Prevents copy-paste corruption from spurious whitespace in wide-character text.
4. **[PR #27749] Vertex AI model mapping refactor** — Replaces hardcoded values with shared constants in `packages/core/src/config/models.ts`. Low-risk maintainability improvement.
5. **[PR #27698] Zero-quota fail fast to prevent retry loop hang** — Critical: the CLI was looping 10 retries on hard quota-exhausted accounts. Now fails fast, resolving a very visible free-tier frustration.
6. **[PR #27619] Atomic update in MCP tool discovery** — Fixes "tool not found" errors during transient network drops by retaining last-known-good MCP tool lists. Improves robustness for MCP-heavy setups.
7. **[PR #27747] Fix infinite loop in ghost text wrapping for narrow terminals** — Fixes frozen CLI when an `@filename:line` completion contains a wide character in a sub-1-column terminal width. Tagged `help wanted` for review.
8. **[PR #27744] Resolve DNS before SSRF guard in web_fetch** — Fixes a bypass where wildcard-DNS services like `nip.io` could resolve to private IPs after the initial guard check. Important security hardening.
9. **[PR #27739] Prevent SSRF via DNS hostnames and redirects** — Companion to #27744: addresses the redirect-chain vector and hostname-based private-IP resolution gaps in outbound `web_fetch` requests.
10. **[PR #27412] Prevent model fabrication when read_file returns binary content** (CLOSED/Merged) — Previously injected a misleading synthetic "Binary content received" model thought, which could confuse downstream reasoning. Now cleaned up.

---

### 5. Feature Request Trends

- **AST-Aware Tooling (#22745, #22746, #22747)** — Multiple EPICs tracking whether AST-native file reads, searches, and maps can reduce token waste and misaligned reads in large codebases. This could be the next major leap in agent efficiency and is clearly a strategic investment by the core team.
- **Agent Self-Awareness (#21432)** — Request for the agent to understand its own CLI flags, hotkeys, and execution semantics, reducing user friction when directing the model.
- **Browser Agent Resilience (#22232)** — Feature request for automatic session takeover and lock recovery in persistent browser mode, addressing the current fail-fast behavior.
- **Extension Discovery (#22586, merged)** — Programmatic `/extensions search` has landed; contributors are thinking more about discoverability as the plugin ecosystem grows.
- **Agent Skill Utilization (#21968)** — The community wants the model to automatically apply registered skills more proactively without explicit user instructions.

---

### 6. Developer Pain Points

- **Subagent and hanging issues dominate**: The single cluster of post-P1 issues around generalist agent hangs (#21409), MAX_TURNS false success (#22323), and shell command sticking (#25166) reveals a broader reliability crisis in the subagent orchestration layer. These are not edge cases—they block real workflows daily.
- **Auto Memory quality and privacy**: Multiple issues (#26525, #26522, #26523) surface from the same contributor, indicating the current Auto Memory implementation has serious security gaps (secrets sent pre-redaction), waste cycles (infinite retry on low-signal), and observability issues (silent skip of invalid patches).
- **SSRf and security hardening**: The surge in web-fetch SSRF PRs (#27744, #27739) and telemetry export crashes (#27729) show that as Gemini CLI is adopted in enterprise and CI environments, security and operational correctness requirements are rising sharply.
- **Internationalization rendering**: The CJK whitespace fix (#27505) highlights ongoing terminal rendering edge cases that affect users outside ASCII-default environments, a growing concern as global adoption increases.
- **Quota UX**: The zero-quota retry loop (#27698) hitting free-tier users is a sharp onboarding pain point—new users expecting a helpful CLI instead get 10 retries and a hang, which is not the first impression the team wants to make.

---

*Data source: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## GitHub Copilot CLI Community Digest — 2026-06-09

---

### 1. Today's Highlights

No new releases landed in the past 24 hours, but the issue tracker saw significant activity with 34 updates. The most-discussed topics center on **session control** (pausing/resuming agent work), **input ergonomics** (vi/vim mode, ESC/ESC history stashing, model-picker inconsistency), and a cluster of **Windows-specific bugs** ranging from runaway MCP server spawning to install-script misidentification of FreeBSD. Plugin hooks and BYOK/provider flexibility also remain persistent themes.

---

### 2. Releases

**None.** No new versions were published in the last 24 hours.

---

### 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| 1 | **[#1928](https://github.com/github/copilot-cli/issues/1928) — Allow to pause copilot work** | Users can currently only steer a session by typing mid-run, but there's no way to truly pause, inject context, and resume. This is a fundamental UX gap for long-running agentic sessions. | 9 comments, 👍2 — modest engagement but conceptually important for power users. |
| 2 | **[#13](https://github.com/github/copilot-cli/issues/13) — CLI input should have a vi/vim input mode** | Vim users are forced into a non-modal editing experience inside the CLI, making prompt composition inefficient. This is one of the oldest open issues. | 7 comments, 👍63 — the highest upvoted issue in today's set, indicating strong and sustained demand. |
| 3 | **[#3547](https://github.com/github/copilot-cli/issues/3547) — Background sub-agent silently hangs at total_turns=0 when model="gpt-5.5"** | A regression where background sub-agents dispatched with `gpt-5.5` report success but never execute, silently stalling workflows. | 6 comments, 👍0 — concerning for anyone using multi-agent patterns with newer models. |
| 4 | **[#3436](https://github.com/github/copilot-cli/issues/3436) — /mcp search constructs wrong URL for custom MCP registries** | The experimental `/mcp search` command omits the `/v0.1/` path segment, producing 404s against self-hosted registries. Breaks enterprise MCP Registry URL configurations. | 5 comments, 👍1 — a clear bug with a straightforward fix needed. |
| 5 | **[#2867](https://github.com/github/copilot-cli/issues/2867) — Claude Opus 4.6 (high) returns "model not supported" after quota reset** | After being told to wait for quota, the user retried and got a hard "model not supported" error instead of a quota message — suggesting the model was removed from the available pool. | 5 comments, 👍1 — confusing error messaging erodes trust in quota guidance. |
| 6 | **[#2540](https://github.com/github/copilot-cli/issues/2540) — Plugin-defined preToolUse hooks (hooks.json) do not fire** | Hooks defined in a plugin's `hooks.json` are completely ignored in both main sessions and sub-agents, undermining the plugin extensibility model. | 4 comments, 👍3 — directly impacts developers building plugin-based workflows. |
| 7 | **[#3652](https://github.com/github/copilot-cli/issues/3652) — Copilot Chat in WSL experiences 40–80 second startup delays** | The `CopilotCLIChatSessionContentProvider.listSessions` call causes massive delays for WSL users, making the tool nearly unusable in that environment. | 3 comments, 👍0 — a critical performance issue for the growing WSL developer segment. |
| 8 | **[#3701](https://github.com/github/copilot-cli/issues/3701) — Runaway MCP server spawning (IDE lock-file watcher re-init loop)** | A bug in v1.0.60 on Windows causes infinite MCP server process spawning when VS Code's lock-file watcher triggers re-init. **Closed** — likely fixed or triaged. | 2 comments, 👍0 — good to see this was addressed quickly. |
| 9 | **[#3716](https://github.com/github/copilot-cli/issues/3716) — [Regression] Function call fails on Moonshot provider** | Started in v1.0.60: tool function parameters fail validation against Moonshot-flavored JSON schema, breaking BYOK users on that provider. | 1 comment, 👍0 — a regression that needs prompt attention given BYOK adoption. |
| 10 | **[#3709](https://github.com/github/copilot-cli/issues/3709) — Allow /model to switch between multiple models including BYOK/local providers** | BYOK mode pins a session to one model; the `/model` picker doesn't list local provider models, removing the ability to switch mid-session. | 1 comment, 👍0 — important for developers mixing cloud and local models. |

---

### 4. Key PR Progress

Only **one PR** was updated in the last 24 hours:

| PR | Status | Description |
|----|--------|-------------|
| **[#1960](https://github.com/github/copilot-cli/pull/1960) — install: use GITHUB_TOKEN for authenticated GitHub requests** | **Closed** | When `GITHUB_TOKEN` is set, the install script now passes it as an `Authorization` header for curl/wget downloads and embeds it in git remote URLs for `ls-remote`. This avoids rate limits and enables installation from private repositories. A small but impactful quality-of-life improvement for enterprise and CI environments. |

With only a single closed PR and no open PRs updated today, the contribution pipeline appears quiet. The community may be waiting on maintainers to triage the growing backlog of issues.

---

### 5. Feature Request Trends

Synthesizing all open issues, the most-requested feature directions are:

1. **Session Lifecycle Control** — Pause/resume (#1928), multi-session management (#2966), and visual delimiters per agentic-loop iteration (#3718). Users want finer-grained control over long-running agent sessions.

2. **Input & Editing Ergonomics** — Vi/vim mode (#13, 👍63), ESC/ESC to stash in-progress prompts to history (#3720), and fixing `ask_user` multi-line input display (#3722). The CLI's interactive input layer is a major friction point.

3. **Model & Provider Flexibility** — Mid-session model switching including BYOK/local providers (#3709), disabling streaming for BYOK providers (#3717, closed), and support for lower-cost/open-weight models (#3707). The community wants Copilot CLI to be provider-agnostic.

4. **Plugin & Hooks System Maturity** — Plugin-defined `preToolUse` hooks not firing (#2540), `sessionStart` hooks not printing at startup (#2201), and the ability for `userPromptSubmitted` hooks to modify prompts (#3713, closed). The hooks architecture is clearly powerful but currently unreliable.

5. **Windows Platform Parity** — Runaway MCP spawning (#3701, closed), WSL startup delays (#3652), ReFS/Dev Drive sandbox limitations (#3712), home directory path handling (#3719), and install script misidentifying FreeBSD as Windows (#3710). Windows support needs dedicated attention.

---

### 6. Developer Pain Points

- **Silent failures**: Background sub-agents hanging with `total_turns=0` (#3547) and plugin hooks silently not firing (#2540) create debugging nightmares with no error surface.
- **Windows second-class citizenship**: At least 5 distinct Windows-specific issues surfaced today, from installation to runtime to filesystem support. WSL users face 40–80 second delays (#3652).
- **Input experience fragmentation**: The `/model` picker uses arrow keys for model selection but numeric entry for subsequent steps (#3715), and ESC/ESC doesn't save partial input to history (#3720). These inconsistencies add up.
- **BYOK rough edges**: From function-call schema regressions (#3716) to inability to switch models mid-session (#3709) to missing streaming toggle (#3717), the bring-your-own-key experience still feels incomplete.
- **Error message trust**: Being told to wait for quota, then receiving "model not supported" (#2867), undermines confidence in the CLI's guidance.

---

*Data source: [github.com/github/copilot-cli](https://github.com/github/copilot-cli) · Digest generated by OWL for 2026-06-09*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-09

---

## 1. Today's Highlights

It was a quiet release day with no new version published in the past 24 hours. The hot discussion is focused on **authentication regressions** in the newer versions (v0.11.0): multiple users reported that the API key login workflow has been silently dropped. Meanwhile, a documentation issue advocating for a Python-to-TypeScript migration banner on GitHub Pages has been formally closed.

---

## 2. Releases

**None** — No new versions were published in the last 24 hours. The most recently referenced versions in the community remain `v0.11.0` and `v1.47.0`.

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters |
|---|-------|--------|----------------|
| 1 | [#2442 Broken Workflow](https://github.com/MoonshotAI/kimi-cli/issues/2442) | OPEN | 🔴 **High**. User on macOS reports API key authentication was silently removed in v0.11.0, creating a hard blocker for non-interactive `/login` workflows. Zero replies so far — this is an active pain point. |
| 2 | [#2436 Installation failed](https://github.com/MoonshotAI/kimi-cli/issues/2436) | OPEN | 🟡 Installation succeeds but the CLI behaves inconsistently ("Kimi can't seem to make up her mind"). Running v1.47.0 with `kimi-k2.6`. The single comment has not yet yielded a confirmed root cause. |
| 3 | [#2441 @filename no longer supported](https://github.com/MoonshotAI/kimi-cli/issues/2441) | OPEN | 🟡 User reports the `@filename` shorthand (previously used to pass file content into prompts) is broken on v0.11.0. This is a **workflow-breaking regression** for developers who relied on inline file referencing. Reactions: 0 — may need triage visibility. |
| 4 | [#2376 Deprecation banner on GitHub Pages](https://github.com/MoonshotAI/kimi-cli/issues/2376) | CLOSED | 🟢 This enhancement landed — the maintainers closed it, implying a deprecation notice or redirect banner has (or will) appear on the original Python-based `kimi-cli` GitHub Pages docs, steering users toward the TypeScript rewrite (`kimi-code`). |

---

## 4. Key PR Progress

**No Pull Requests were opened or updated in the last 24 hours**, so there is no active PR activity to report.

---

## 5. Feature Request Trends

Across the open issues, a clear directional signal emerges:

- **Authentication flexibility**: The community is asking for stable, documented auth paths (API key, token-based) that survive version upgrades. The regression in v0.11.0 (#2442) highlights that the current `/login`-only flow is insufficient for headless / CI environments.
- **The `@filename` file-reference shorthand**: This was a workflow staple. Its reported breakage in newer versions suggests it should either be restored as a first-class feature or formally deprecated with a migration path and docs — an enhancement worth tracking.

There are currently no high-volume feature requests in the last 24 hours.

---

## 6. Developer Pain Points

| Pain Point | Affected Versions | Severity |
|------------|-------------------|----------|
| **Auth silently dropped** — API key login broken / undocumented | v0.11.0 | 🔴 High |
| **`@filename` removed** without changelog note or migration guide | v0.11.0 | 🟡 Medium |
| **Unreliable installation / runtime behavior** — CLI works intermittently after install | v1.47.0 | 🟡 Medium |
| **Mental model shift (Python → TypeScript rewrite)** — docs still pending deprecation signals | Cross-cutting | 🟡 Low-Med |

> **Takeaway for maintainers**: Two of the three open issues are **regressions in v0.11.0** affecting auth and file-referencing features. Prioritizing a hotfix or at least an acknowledgment/response to #2441 and #2442 would go a long way toward retaining developer trust in the upgrade path.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-09

Digest generated by **OWL**, technical analyst for AI developer tools.

---

## 1. Today's Highlights

No new releases in the past 24 hours, but the community was extremely active with bug reports and pull requests landing rapidly. A critical SQLite `NOT NULL` constraint failure (`session_message.seq`) is silently breaking sessions for users on versions 1.15.13 through 1.16.2, surfacing as duplicate reports and nested closed issues. Meanwhile, Bedrock provider instability (empty responses, signature mismatches, header timeouts) across Amazon Bedrock Mantle and compatible gateways is emerging as a multi-front pain point requiring contributor attention.

---

## 2. Releases

**None in the last 24 hours.** The latest reported version in the field is **v1.16.2**, with multiple regressions being tracked against it.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|---|---|---|
| [#27167](https://github.com/anomalyco/opencode/issues/27167) | Add native session goals with `/goal` | The highest-discussed feature request today (37 👍 comments). Would give users a persistent directive per session — a gap many feel exists next to custom slash commands. | 64 upvotes, 37 comments — the community strongly wants lifecycle-aware sessions. |
| [#29548](https://github.com/anomalyco/opencode/issues/29548) | OpenAI provider header timeout regression (1.15.11) | A breaking regression introduced in 1.15.11 where the OpenAI provider's 10 s header timeout is too low for some network setups. Increasing `headerTimeout` is the manual workaround. | No upvotes but active discussion (11 comments) — signals a class-of-user problem (corporate proxies, high-latency regions). |
| [#30948](https://github.com/anomalyco/opencode/issues/30948) | Amazon Bedrock returns empty output against Bedrock-compatible gateway | A regression from 1.16.0 where the `amazon-bedrock` provider silently returns empty responses through non-AWS Bedrock-compatible gateways. Direct curl works; OpenCode does not. | Closed, 8 comments, 4 upvotes — the provider parsing layer clearly has routing assumptions baked in. |
| [#31247](https://github.com/anomalyco/opencode/issues/31247) | Opus 4.8 via GitHub Copilot leaks tool-call text into messages | Claude Opus 4.8 routing through `github-copilot` leaks raw tool-call markup (`<invoke>`, `call read`, etc.) into assistant output in long sessions. | 7 comments — important for context-window-heavy workflows; likely a prompt/template formatting issue on the Copilot adapter side. |
| [#31204](https://github.com/anomalyco/opencode/issues/31204) | `session_message.seq` NOT NULL constraint failed on agent-switched sessions | A database schema migration from early June introduces a NOT NULL violation when switching agents mid-session. The appended message code path for new session projections is incomplete. | 4 comments, 2 upvotes — this is a subset of the larger issue below; critical for multi-agent setups. |
| [#31412](https://github.com/anomalyco/opencode/issues/31412) / [#31413](https://github.com/anomalyco/opencode/issues/31413) | `opencode run` + HTTP POST `/session/{id}/message` fail with same NOT NULL constraint (1.15.13) | Two near-duplicate reports in a single day confirm this is a widespread regression, not edge-case. Any programmatic or API-driven session creation is broken. | Closed within hours (likely merged into master fix), but 2 duplicate reports in one day expose the severity. |
| [#16077](https://github.com/anomalyco/opencode/issues/16077) | Persistent session memory / load previous context | Users want the AI to remember across sessions — loading prior conversation context from a local file at startup. Closely related to the `/goal` feature but broader. | 10 comments, 3 upvotes — foundational request for "AI companion" workflows. |
| [#16960](https://github.com/anomalyco/opencode/issues/16960) | Compaction loses AGENTS.md/CLAUDE.md instruction context | The compaction call receives an empty system prompt, so project-specific behavioral instructions are lost after compaction. Silent quality degradation. | 5 comments, 2 upvotes — subtle but high-impact for teams relying on AGENTS.md for coding standards. |
| [#15161](https://github.com/anomalyco/opencode/issues/15161) | Noisy `unknown format google-duration` warnings from Firebase MCP | Firebase MCP tool schemas trigger repeated warnings on every OpenCode startup, cluttering the TUI. Cosmetic but affects daily UX. | 12 upvotes (highest pain-per-vote issue) — a small fix with outsized daily annoyance. |
| [#31404](https://github.com/anomalyco/opencode/issues/31404) | `opencode run --format json` does not stream text events to stdout | Only `step_start` emitted; text and reasoning events are dropped from NDJSON output. Breaks headless/automation integrations. | Closed (PR #31434 merged), 2 comments — but highlights a class of headless-mode parity bugs. |

---

## 4. Key PR Progress

| # | Title | What It Does | Status |
|---|---|---|---|
| [#31434](https://github.com/anomalyco/opencode/pull/31434) | Fix: drain pending events before breaking on session idle in JSON format mode | Fixes #31404 — tracks active events in the SSE pipeline so text/step-finish parts aren't lost before the idle event arrives. | **Open** (merged today) |
| [#31429](https://github.com/anomalyco/opencode/pull/31429) | Fix: strip Responses API item IDs before request signing | Fixes #31349 — removes item IDs from provider metadata before AI SDK serialization so SigV4 signatures remain valid (Bedrock Mantle). | **Closed** (landed today) |
| [#31357](https://github.com/anomalyco/opencode/pull/31357) | feat: respect `provider/model streaming: false` to disable streaming | Closes #785 — allows downstreams that don't support or return broken streaming responses to fall back to non-streaming. | Open |
| [#31392](https://github.com/anomalyco/opencode/pull/31392) | feat(acp): stage edits for native review in ACP clients | Makes OpenCode's file-edit proposals compatible with ACP client-native file review flows (Zed, Devin). Big ecosystem integration win. | Open |
| [#30477](https://github.com/anomalyco/opencode/pull/30477) | feat: add `"reasoning"` as interleaved field option for vLLM providers | Closes #19988 — adds `reasoning` alongside `reasoning_content` and `reasoning_details` for model providers that emit reasoning tokens in a different field shape. | Open |
| [#31436](https://github.com/anomalyco/opencode/pull/31436) | refactor(core): fix sameModel tautology, add query limits, deduplicate agent name lookup | Fixes a logic bug (`sameModel(session.model, session.model)` always true), adds pagination/cap to queries, deduplicates agent lookups. | Open |
| [#31432](https://github.com/anomalyco/opencode/pull/31432) | refactor(core): add query limits, context caching, indexed queries, tool message fix | Performance hardening — caps on session listing, messages, shell messages, steer promotion, and parts queries to prevent unbounded DB reads on large workspaces. | Open |
| [#31438](https://github.com/anomalyco/opencode/pull/31438) | fix(app): round session prompt dock bottom corners in v2 layout | Purely visual — aligns the dock's bottom corners with the panel radius for a polished look in the v2 desktop UI. | Open |
| [#31428](https://github.com/anomalyco/opencode/pull/31428) | Fix: prevent text duplication on Gboard autocomplete in prompt input | Closes #12555 — each Gboard autocomplete tap previously duplicated text. Fixed by suppressing redundant input events. | **Closed** |
| [#6370](https://github.com/anomalyco/opencode/pull/6370) | Fix: enable primary clipboard copy for Wayland/X11 | Populates both CLIPBOARD and PRIMARY selections on Linux so middle-click paste works. Adds config `clipboard.linux.enablePrimaryCopy` (opt-in). | Open (opened Dec 2025, still pending) |

---

## 5. Feature Request Trends

Synthesizing across all open issues updated today, the most-requested feature directions are:

- **Session Persistence & Continuity** — Two threads (#27167 `/goal`, #16077 persistent memory) and one (#16960 compaction context preservation) converge on a single demand: *make sessions remember things between invocations and across compaction events*. This is the top-ranked feature gap.
- **Native ACP Integration** — PR #31439 and related issues show demand for first-class ACP staging/review workflows with Zed, Devin, and other ACP-native clients.
- **Streaming Control** — PR #31357 (`reasoning` field, `streaming: false` config) reflects a broader need for per-provider transport configurability as OpenCode integrates with increasingly diverse model backends.
- **Web UI Parity** — Requests like clickable `file:line` references (#13430) and opening files in the built-in editor (#31406) indicate the web/desktop UI lagging behind TUX functionality.
- **Third-Party Backend Compatibility** — Recurring issues around Bedrock-compatible gateways, vLLM, and self-hosted backends suggest the provider layer needs a more pluggable, spec-tolerant architecture.

---

## 6. Developer Pain Points

**Critical / Breaking:**
- **Database migration regression** — The `session_message.seq` NOT NULL constraint failure is silently destroying sessions on versions 1.15.13–1.16.2. Multiple users hit this within hours of each other. This needs a hotfix release ASAP.
- **Bedrock provider fragmentation** — At least four distinct Bedrock failures today: empty responses (#30948), signature mismatch (#31349, fixed by PR #31429), empty successful responses on GPT-5.5 (#31430), and SigV4 auth issues. The Bedrock provider has clearly not been tested against the proliferation of Bedrock-compatible gateways and new model launches.

**High-Frequency Annoyances:**
- **TUI/UX regressions** — Gboard autocomplete duplication (#31428, now fixed), noisy `google-duration` warnings on every startup (#15161), and renderer freeze/HTTP 500 on Windows Desktop v1.16.0+ (#31400) degrade daily trust.
- **Headless / automation fidelity bugs** — `opencode run --format json` dropping text events (#31404, being fixed by PR #31434) is part of a pattern where non-interactive mode gets less testing coverage than the TUI.
- **Plugin cache staleness** — `@latest` plugin resolution getting pinned to stale npm versions (#25293) suggests the caching layer needs cache-busting on version resolution.
- **Provider discovery fragility** — Custom `baseURL` providers silently dropping API keys at runtime (#21737) and header timeouts (#29548) indicate configuration validation and error reporting need hardening.

---

*The OWL will return tomorrow with your next OpenCode community digest. If your project is affected by the `session_message.sql` regression, pin to a version prior to 1.15.13 or watch for a patch release.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-09

---

## 1. Today's Highlights

Pi shipped **v0.79.0** headlined by **Project Trust**, a new security gating system that prompts users before loading project-local settings, resources, instructions, and packages, with saved decisions and CLI flags (`--approve` / `--no-approve`) for non-interactive workflows. The release day also saw heavy community engagement — 42 issues updated and 22 pull requests touched — ranging from Windows terminal flashing regressions and Azure OpenAI stateful-mode bugs to a quadratic-complexity traversal fix that was tanking CPU on large sessions.

---

## 2. Releases

### [v0.79.0](https://github.com/earendil-works/pi/releases/tag/v0.79.0) — Security & UX

- **Project Trust for local inputs** — Pi now asks before loading project-local settings, resources, instructions, and packages. Decisions are persisted per project. Non-interactive users get `--approve` / `--no-approve` flags. → [Project Trust docs](https://github.com/earendil-works/pi/blob/v0.79.0/README.md#project-trust)
- **Release notes bug** — Links in the v0.79.0 notes were broken on day one. Track: [#5516](https://github.com/earendil-works/pi/issues/5516)

---

## 3. Hot Issues (10)

| # | Title | Why it matters | Reaction |
|---|-------|---------------|----------|
| [#5514](https://github.com/earendil-works/pi/issues/5514) | Project Trust Feature Feedback | The #1 signal on day-one: power users think the trust prompt is unnecessary friction when they already chose to open the project. The follow-up PR [#5515](https://github.com/earendil-works/pi/pull/5515) adding `alwaysTrust` was merged within hours. | 14 comments, 👍4 — polarized but responsive maintainers |
| [#5492](https://github.com/earendil-works/pi/issues/5492) | High CPU in interactive TUI on large sessions (quadratic session branch traversal) | Large sessions (~62k turns) caused sustained ~100% CPU. Root cause: `Footer.render → getContextUsage → sessionManager.getBranch` was O(n²). Fix PR [#5493](https://github.com/earendil-works/pi/pull/5493) merged same day. | 3 comments — quick diagnosis and fix |
| [#5427](https://github.com/earendil-works/pi/issues/5427) | OpenAI Codex transport issues (SSE timeout) | Users on OpenAI Codex via ChatGPT subscription hit "SSE response headers timed out after 10000ms" mid-conversation, blocking all subsequent messages. A persistent reliability issue across versions. | 3 comments, 👍4 — high interest |
| [#5464](https://github.com/earendil-works/pi/issues/5464) | Local models: 3–5 min "Working" latency | Even simple "Hi" messages via Ollama local models (`ministral3:8b`) trigger multi-minute delays. Points to a systemic issue with local model request handling. | 6 comments — active discussion |
| [#5530](https://github.com/earendil-works/pi/issues/5530) | `azure-openai-responses` missing `store: false` | Stateful API mode on Azure causes server-side reasoning object loss. Fix is a 3-line PR [#5524](https://github.com/earendil-works/pi/pull/5524). | 2 comments — small fix, big impact |
| [#5433](https://github.com/earendil-works/pi/issues/5433) | Extension OAuth login mirrors prompt input into previous rows | UI rendering bug in OAuth dialogs where repeated prompts corrupt the terminal. Follow-up to previously fixed [#5292](https://github.com/earendil-works/pi/issues/5292), now scoped to extensions. | 2 comments — regression concern |
| [#5286](https://github.com/earendil-works/pi/issues/5286) | Missing pricing info for GitHub Copilot models | Copilot's new per-token pricing isn't reflected; Pi still shows `$0.000 (sub)`. Budget-tracking users can't track real cost. | 6 comments — moderately requested |
| [#5512](https://github.com/earendil-works/pi/issues/5512) | Auto-compaction has no mid-turn context guard | Long tool loops can blow past `config.contextWindow` before compaction checks run. Fix PR [#5513](https://github.com/earendil-works/pi/pull/5513) exposes `shouldStopAfterTurn`. | 2 comments — structural fix landed quickly |
| [#5531](https://github.com/earendil-works/pi/issues/5531) | kimi.com thinking enabled despite `thinking off` | Configuration is ignored; token spend is higher than expected even when the user explicitly disabled thinking. | 3 comments — trust in settings |
| [#5522](https://github.com/earendil-works/pi/issues/5522) | Restore files on rewind (file checkpoints) | `Esc Esc` rewinds the conversation but not files. Users want parity: rewind should optionally restore working tree to that point. PR [#5521](https://github.com/earendil-works/pi/pull/5521) already merged. | 1 comment — quickly prototyped and merged |

---

## 4. Key PR Progress (10)

| # | PR | Status | Description |
|---|----|--------|-------------|
| [#5524](https://github.com/earendil-works/pi/pull/5524) | fix(ai): send `store: false` on Azure OpenAI Responses | ✅ Merged | 3-line fix resolving Azure stateful API bugs. Issue [#5530](https://github.com/earendil-works/pi/issues/5530). |
| [#5493](https://github.com/earendil-works/pi/pull/5493) | Avoid quadratic session branch traversal | ✅ Merged | Eliminates O(n²) path that caused ~100% CPU on large sessions. Issue [#5492](https://github.com/earendil-works/pi/issues/5492). |
| [#5513](https://github.com/earendil-works/pi/pull/5513) | Enforce context window mid-turn via `shouldStopAfterTurn` | ✅ Merged | Adds agent-loop hook to stop compaction cleanly at threshold. Issue [#5512](https://github.com/earendil-works/pi/issues/5512). |
| [#5515](https://github.com/earendil-works/pi/pull/5515) | feat: add `alwaysTrust` setting to skip project trust gating | ✅ Merged | Direct response to [#5514](https://github.com/earendil-works/pi/issues/5514) feature feedback — power users can disable trust prompts. |
| [#5521](https://github.com/earendil-works/pi/pull/5521) | feat: restore files on rewind (checkpoints) | ✅ Merged | File restore paired with conversation rewind. Implements [#5522](https://github.com/earendil-works/pi/issues/5522). |
| [#5518](https://github.com/earendil-works/pi/pull/5518) | feat: configurable clipboard image storage path | ✅ Merged | `images.storagePath` in `settings.json` instead of `os.tmpdir()`. Closes [#5414](https://github.com/earendil-works/pi/issues/5414). |
| [#5526](https://github.com/earendil-works/pi/pull/5526) | Require terminal events for OpenAI Responses streams | 🔄 Open | Prevents streams from randomly stopping mid-response, corrupting the context counter. |
| [#5509](https://github.com/earendil-works/pi/pull/5509) | feat: Add Amazon Bedrock Mantle OpenAI Responses provider | 🔄 Open | New provider for Bedrock Mantle's OpenAI-compatible Responses API (GPT-5.5/5.4). |
| [#5527](https://github.com/earendil-works/pi/pull/5527) | fix(amazon-bedrock): extract region from inference profile ARNs | 🔄 Open | Fixes Bedrock region detection for application inference profiles. |
| [#5385](https://github.com/earendil-works/pi/pull/5385) | feat: detect first-run terminal theme | 🔄 In Progress | Auto-detect terminal light/dark theme on first run via OSC query for automatic Pi theme matching. |

---

## 5. Feature Request Trends

1. **Trust & approval UX** — The biggest tension point this cycle. Users want granular control: disabling trust prompts via config (`alwaysTrust`), exposing trust decisions to extensions ([#5523](https://github.com/earendil-works/pi/issues/5523)), and smoother multi-machine workflows ([#5514](https://github.com/earendil-works/pi/issues/5514)).

2. **Expanded provider ecosystem** — Requests to add Bedrock Mantle ([#5509](https://github.com/earendil-works/pi/pull/5509)), Bedrock region fixes ([#5527](https://github.com/earendil-works/pi/pull/5527)), Wafer ([#5517](https://github.com/earendil-works/pi/issues/5517)), and multi-account/provider support ([#5502](https://github.com/earendil-works/pi/issues/5502)).

3. **Session & state management** — Restoring files on rewind ([#5522](https://github.com/earendil-works/pi/issues/5522)), mid-turn compaction guards ([#5512](https://github.com/earendil-works/pi/issues/5512)), persistent CWD tracking ([#5478](https://github.com/earendil-works/pi/issues/5478)), and service reuse on session switch ([#5479](https://github.com/earendil-works/pi/pull/5479)) all point to demand for more robust session lifecycle control.

4. **Configuration portability** — Separating Pi-managed data from user-managed config in `~/.pi/agent` ([#5508](https://github.com/earendil-works/pi/issues/5508)) and making clipboard image paths configurable ([#5414](https://github.com/earendil-works/pi/issues/5414)) reflect a push toward cleaner, more predictable configuration management.

5. **Authentication evolution** — OAuth session-based auth (Claude Pro) alongside API keys ([#5519](https://github.com/earendil-works/pi/issues/5519)) signals growing demand for corporate/subscription-managed credential flows.

---

## 6. Developer Pain Points

- **Local model latency remains a black box** — 3–5 minute delays on trivial messages with Ollama-local models ([#5464](https://github.com/earendil-works/pi/issues/5464)) with no clear root cause resolution yet.
- **Trust gating friction on upgrade** — v0.79.0 introduced security UX that immediately frustrates existing power users. The `alwaysTrust` escape hatch was added in hours, but the incident highlights a gap in pre-release user testing for workflow-disrupting changes.
- **Azure & Copilot provider bugs** — Stateful API mode on Azure ([#5530](https://github.com/earendil-works/pi/issues/5530)) and missing per-token pricing for Copilot ([#5286](https://github.com/earendil-works/pi/issues/5286)) show that provider-specific edge cases keep surfacing post-merge.
- **Large-session performance** — Quadratic traversal bugs ([#5492](https://github.com/earendil-works/pi/issues/5492)) and context management gaps ([#5512](https://github.com/earendil-works/pi/issues/5512)) reveal that stress testing at scale (60k+ turn sessions) isn't catching regressions.
- **Windows parity** — Terminal window flashing regressions ([#5529](https://github.com/earendil-works/pi/issues/5529)) indicate that Windows `windowsHide: true` fixes keep regressing across releases.
- **Thinking/thinking-off controls not respected** — At least two providers (kimi.com, possibly others) ignore the `thinking off` setting ([#5531](https://github.com/earendil-works/pi/issues/5531)),
  wasting user tokens unexpectedly.
- **Broken release-note links on launch day** — A meta-pain: the v0.79.0 notes themselves contained dead links ([#5516](https://github.com/earendil-works/pi/issues/5516)),
  forcing the very community the feature is meant to serve into a rough first impression.

---

*Digest generated by OWL — ZOO 🐾*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-09

---

## 1. Today's Highlights

The Qwen Code project shipped a new nightly release (`v0.17.1-nightly.20260608`) with a CLI fix for thought-part leakage in copy output. The community is heavily focused on **daemon/ACP transport maturity** (WebSocket, REST parity, session lifecycle), **memory/OOM hardening** across long-running sessions, and **ecosystem interoperability** (Claude config migration, declarative agents). A critical CI gap was also flagged after a PR merged with all checks broken.

---

## 2. Releases

**v0.17.1-nightly.20260608.aea34fa2c** — [Release notes](https://github.com/QwenLM/qwen-code/releases)

| Change | Author | PR |
|---|---|---|
| chore(release): v0.17.1 | @qwen-code-ci-bot | [#4742](https://github.com/QwenLM/qwen-code/pull/4742) |
| fix(cli): skip thought parts in copy output | @he-yufeng | — |

The key user-facing fix prevents internal reasoning/thought tokens from appearing when users copy AI output to clipboard — a polish item that improves daily UX.

---

## 3. Hot Issues

### 🔴 Critical / High-Priority

1. **[#4815 [CLOSED] BUG: Severe OOM with `qwen --resume` and Escape key broken](https://github.com/QwenLM/qwen-code/issues/4815)**
   - **Why it matters:** Long-running sessions crash with out-of-memory within ~10 minutes of resuming, and the Escape key becomes completely non-functional. This is a P1 performance/session-management bug affecting anyone using `--resume`.
   - **Community reaction:** 9 comments, active investigation. Root cause traced to missing microcompaction on Hook-continuation messages (see [#4838](https://github.com/QwenLM/qwen-code/issues/4838)). Fix shipped via [#4824](https://github.com/QwenLM/qwen-code/pull/4824).

2. **[#4838 [OPEN] BUG: Hook continuations skip tool-result microcompaction in long /goal loops](https://github.com/QwenLM/qwen-code/issues/4838)**
   - **Why it matters:** Direct follow-up to #4815. `/goal` uses Stop-hook continuations that recursively call `sendMessageStream()` with `SendMessageType.Hook`, but `microcompactHistory()` only ran inside `UserQuery`/`Cron` branches. This means long `/goal` sessions accumulate unbounded tool results.
   - **Community reaction:** 2 comments, P1 priority. Fix PR [#4823](https://github.com/QwenLM/qwen-code/pull/4823) is open.

3. **[#4864 [OPEN] CI: Enable required status checks on main branch protection](https://github.com/QwenLM/qwen-code/issues/4864)**
   - **Why it matters:** PR [#4798](https://github.com/QwenLM/qwen-code/pull/4798) was merged with **all CI checks failing** (Lint ❌, Test ❌ across Ubuntu/macOS/Windows), introducing a TypeScript syntax error that broke `tsc --build` on main. No branch protection gate existed to prevent this.
   - **Community reaction:** 2 comments. This is a process/infrastructure issue that could have been caught trivially.

### 🟡 Active Discussion / Feature Requests

4. **[#4514 [OPEN] Tracking: `qwen serve` daemon capability gaps & prioritized backlog](https://github.com/QwenLM/qwen-code/issues/4514)**
   - **Why it matters:** The most-commented issue (13 comments). Tracks remaining gaps in the HTTP/SSE surface for remote clients after slash-command passthrough shipped. This is the master tracking issue for daemon maturity.
   - **Community reaction:** Active, with multiple dependent PRs in flight.

5. **[#4821 [OPEN] feat(agents): Support declarative agent definitions via frontmatter files](https://github.com/QwenLM/qwen-code/issues/4821)**
   - **Why it matters:** Requests Claude Code 2.1.167-style `.claude/agents/*.md` with YAML frontmatter for defining custom agents declaratively instead of hardcoding in TypeScript. 6 comments.
   - **Community reaction:** Seen as a key ecosystem parity item.

6. **[#4782 [OPEN] Tracking: ACP Streamable HTTP transport — implementation status & upgrade plan](https://github.com/QwenLM/qwen-code/issues/4782)**
   - **Why it matters:** Qwen-Code Daemon now implements ACP Streamable HTTP at `/acp`, enabling Zed, Goose, and JetBrains to connect without adapter code. This tracks the remaining work and RFD alignment.
   - **Community reaction:** 3 comments, active PR [#4827](https://github.com/QwenLM/qwen-code/pull/4827) adding 29 new `_qwen/*` methods.

7. **[#4845 [OPEN] feat: Add /import-config for Claude user config migration](https://github.com/QwenLM/qwen-code/issues/4845)**
   - **Why it matters:** One-click import of MCP servers, instructions, permissions, and custom commands from Claude Code/Desktop configs. Reduces migration friction for developers using both tools.
   - **Community reaction:** 2 comments, P2 priority.

8. **[#4869 [OPEN] bug(skills): YAML block scalar descriptions parsed as literal character](https://github.com/QwenLM/qwen-code/issues/4869)**
   - **Why it matters:** SKILL.md frontmatter using `>` or `|` block scalars displays the literal `>` character instead of multiline text. Affects skill authoring UX.
   - **Community reaction:** Fix PR [#4870](https://github.com/QwenLM/qwen-code/pull/4870) already open.

9. **[#4721 [OPEN] Feature Request: Port Dynamic Workflows / Ultracode from Claude Code 2.1.160](https://github.com/QwenLM/qwen-code/issues/4721)**
   - **Why it matters:** Requests porting Anthropic's Dynamic Workflows feature as a third tier of multi-agent execution (alongside existing `/swarm`). Would significantly expand Qwen Code's automation capabilities.
   - **Community reaction:** 1 comment, early-stage feature request.

10. **[#4872 [OPEN] Feature Request: Add Automated CHANGELOG](https://github.com/QwenLM/qwen-code/issues/4872)**
    - **Why it matters:** Users want a `CHANGELOG.md` that auto-syncs with each release, summarizing new features and improvements. Modeled on Claude Code's CHANGELOG.
    - **Community reaction:** 1 comment, P3 priority.

---

## 4. Key PR Progress

### 🔴 Bug Fixes / Reliability

1. **[#4824 [CLOSED] fix(core): prevent OOM by compacting API history, UI history, and triggering under memory pressure](https://github.com/QwenLM/qwen-code/pull/4824)**
   - Fixes [#4815](https://github.com/QwenLM/qwen-code/issues/4815). Three targeted fixes: microcompaction on Hook messages, UI history compaction, and memory-pressure-triggered compaction. **This is the primary OOM fix.**

2. **[#4823 [OPEN] fix(core): microcompact resumed goal continuations](https://github.com/QwenLM/qwen-code/pull/4823)**
   - Makes resumed and long-running goal continuations eligible for stale tool-result cleanup. Complements [#4824](https://github.com/QwenLM/qwen-code/pull/4824).

3. **[#4870 [OPEN] fix(skills): use full YAML parser for frontmatter to support block scalars](https://github.com/QwenLM/qwen-code/pull/4870)**
   - Switches from custom `yaml-parser.ts` to the `yaml` npm package for skill frontmatter parsing. Fixes [#4869](https://github.com/QwenLM/qwen-code/issues/4869).

4. **[#4865 [OPEN] fix(core): don't kill a failed-spawn sleep inhibitor child](https://github.com/QwenLM/qwen-code/pull/4865)**
   - Stops sandboxed sessions from aborting with `Operation cancelled.` when the keep-system-awake helper process fails to start.

5. **[#4841 [OPEN] fix(cli): close @path completion dropdown on Enter accept](https://github.com/QwenLM/qwen-code/pull/4841)**
   - Closes the file completion dropdown immediately when accepting with Enter (was staying open for folder paths).

### 🟢 Features / Enhancements

6. **[#4827 [OPEN] feat(serve): ACP/REST parity — 29 new `_qwen/*` methods + production hardening](https://github.com/QwenLM/qwen-code/pull/4827)**
   - Major daemon PR adding 29 new dispatch methods for full ACP/REST parity: session extensions (recap, btw, shell, detach, context_usage, etc.). Replaces closed [#4736](https://github.com/QwenLM/qwen-code/pull/4736). Depends on [#4782](https://github.com/QwenLM/qwen-code/issues/4782).

7. **[#4773 [OPEN] feat(serve): ACP WebSocket transport (RFD Streamable HTTP phase 2)](https://github.com/QwenLM/qwen-code/pull/4773)**
   - Implements ACP WebSocket transport per RFD, coexisting with SSE. Depends on [#4827](https://github.com/QwenLM/qwen-code/pull/4827).

8. **[#4833 [OPEN] feat(daemon): session idle reaper for automatic cleanup](https://github.com/QwenLM/qwen-code/pull/4833)**
   - Adds periodic scanning of in-memory session registry, closing sessions with no subscribers/clients/active prompts exceeding a configurable idle TTL (default 30 min).

9. **[#4868 [OPEN] feat(telemetry): add runtime memory/CPU sampling with OTel metric reporting](https://github.com/QwenLM/qwen-code/pull/4868)**
   - Adds `RuntimeSampleRing` capturing RSS, heap, external memory, and CPU usage on every pressure check. Ring buffer always records locally; OTel metric reporting is opt-in.

10. **[#4871 [OPEN] refactor(core): remove GitService, migrate /restore to FileHistoryService](https://github.com/QwenLM/qwen-code/pull/4871)**
    - Removes shadow-git-based `GitService` entirely, rewires `/restore` to use `FileHistoryService`. Unifies `/restore` and `/rewind` under a single backend.

### Other Notable PRs

- **[#4847 [OPEN] fix(ci): acknowledge queued qwen review requests](https://github.com/QwenLM/qwen-code/pull/4847)** — Posts immediate PR comment when `@qwen-code /review` is triggered, before the self-hosted runner picks it up.
- **[#4867 [OPEN] feat(web-shell): improve UX with double-ESC clear, thinking collapse, and layout fixes](https://github.com/QwenLM/qwen-code/pull/4867)** — Web-shell UX polish.
- **[#4564 [OPEN] feat(stats): expose token usage for cost visibility](https://github.com/QwenLM/qwen-code/pull/4564)** — Persisted token-usage accounting with daily/monthly breakdowns and CSV/JSON export.
- **[#4781 [OPEN] fix(core): keep deferred-tools listing out of the cached system prompt](https://github.com/QwenLM/qwen-code/pull/4781)** — Moves MCP tools listing from cached system prompt to per-turn `<system-reminder>` injection.

---

## 5. Feature Request Trends

Based on all issues updated in the last 24h, the most-requested feature directions are:

| Trend | Related Issues | Signal |
|---|---|---|
| **Daemon/ACP transport maturity** | [#4514](https://github.com/QwenLM/qwen-code/issues/4514), [#4782](https://github.com/QwenLM/qwen-code/issues/4782), [#4773](https://github.com/QwenLM/qwen-code/pull/4773), [#4827](https://github.com/QwenLM/qwen-code/pull/4827) | Highest comment counts, multiple active PRs |
| **Ecosystem interoperability (Claude migration)** | [#4821](https://github.com/QwenLM/qwen-code/issues/4821), [#4845](https://github.com/QwenLM/qwen-code/issues/4845), [#4721](https://github.com/QwenLM/qwen-code/issues/4721) | Users want Claude Code parity for agents, config import, dynamic workflows |
| **Memory/OOM hardening** | [#4815](https://github.com/QwenLM/qwen-code/issues/4815), [#4838](https://github.com/QwenLM/qwen-code/issues/4838), [#4824](https://github.com/QwenLM/qwen-code/pull/4824), [#4868](https://github.com/QwenLM/qwen-code/pull/4868) | P1 bugs, active fixes, telemetry additions |
| **Session lifecycle management** | [#4833](https://github.com/QwenLM/qwen-code/pull/4833), [#4524](https://github.com/QwenLM/qwen-code/pull/4524), [#4520](https://github.com/QwenLM/qwen-code/pull/4520), [#4757](https://github.com/QwenLM/qwen-code/issues/4757) | Idle reaper, output bounding, fork/branch semantics |
| **Skills system improvements** | [#4869](https://github.com/QwenLM/qwen-code/issues/4869), [#4837](https://github.com/QwenLM/qwen-code/issues/4837), [#4870](https://github.com/QwenLM/qwen-code/pull/4870) | YAML parsing, auto-skill directory conventions |
| **Cost/usage visibility** | [#4564](https://github.com/QwenLM/qwen-code/pull/4564), [#4801](https://github.com/QwenLM/qwen-code/issues/4801) | Token usage stats, web search tool |

---

## 6. Developer Pain Points

1. **OOM in long-running sessions** — The most critical recurring pain point. Users running `/goal` loops or resuming sessions hit memory exhaustion within minutes. Multiple PRs ([#4824](https://github.com/QwenLM/qwen-code/pull/4824), [#4823](https://github.com/QwenLM/qwen-code/pull/4823), [#4520](https://github.com/QwenLM/qwen-code/pull/4520), [#4524](https://github.com/QwenLM/qwen-code/pull/4524)) are addressing different angles (microcompaction, output truncation, telemetry).

2. **CI/main branch integrity** — [#4864](https://github.com/QwenLM/qwen-code/issues/4864) exposed that `main` had no required status checks, allowing a PR with all CI failures to merge and break the build. This is a process gap that erodes trust in the default branch.

3. **Daemon/serve capability gaps** — Despite significant progress, users tracking [#4514](https://github.com/QwenLM/qwen-code/issues/4514) report remaining gaps in the HTTP/SSE surface for remote clients. The ACP transport work ([#4827](https://github.com/QwenLM/qwen-code/pull/4827), [#4773](https://github.com/QwenLM/qwen-code/pull/4773)) is actively closing these.

4. **Migration friction from Claude Code** — Multiple requests ([#4821](https://github.com/QwenLM/qwen-code/issues/4821), [#4845](https://github.com/QwenLM/qwen-code/issues/4845), [#4721](https://github.com/QwenLM/qwen-code/issues/4721)) indicate users want parity with Claude Code features (declarative agents, config import, dynamic workflows) to reduce switching costs.

5. **Skill authoring UX** — YAML block scalars in SKILL.md frontmatter being parsed incorrectly ([#4869](https://github.com/QwenLM/qwen-code/issues/4869)) and auto-generated skill directory conventions ([#4837](https://github.com/QwenLM/qwen-code/issues/4837)) show the skills system needs polish.

6. **Vim mode keybinding issues** — Multiple issues ([#4675](https://github.com/QwenLM/qwen-code/issues/4675), [#4815](https://github.com/QwenLM/qwen-code/issues/4815)) report Escape key leaks and mode interaction bugs in Vim mode, affecting keyboard-centric users.

7. **Web search tool absence** — [#4801](https://github.com/QwenLM/qwen-code/issues/4801) and [#3841](https://github.com/QwenLM/qwen-code/issues/3841) note that Qwen Code is the only mainstream Code Agent CLI without a dedicated `web_search` tool, despite DashScope already supporting it server-side.

---

*Digest generated by OWL for the Qwen Code community. Data source: [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*