# AI CLI Tools Community Digest 2026-04-17

> Generated: 2026-04-17 00:15 UTC | Tools covered: 8

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

# AI CLI Tools Ecosystem Cross-Comparison Report — 2026-04-17

## 1. Ecosystem Overview

The AI CLI developer tools landscape is intensely competitive, with seven major players pushing rapid iteration cycles. Today's activity reveals a maturation phase focused on reliability engineering—sandboxing, session persistence, rate limiting, and terminal UX hardening—rather than pure feature expansion. Anthropic's Claude Code and OpenAI's Codex lead in release velocity and community engagement, while smaller tools (Pi, Kimi, Qwen, OpenCode) differentiate through provider flexibility, pricing accessibility, or open-source extensibility. Enterprise concerns (Bedrock, Azure, Vertex AI, OAuth stability) are increasingly central across all communities. Meanwhile, trust erosion from silent feature removals, rate-limit regressions, and authentication outages is emerging as a critical ecosystem-wide risk.

---

## 2. Activity Comparison

| Tool | Issues Active (24h) | PRs Active (24h) | Releases (24h) | Release Notes |
|------|---------------------|------------------|----------------|---------------|
| **Claude Code** | 10 hot issues tracked | 7 PRs | v2.1.111, v2.1.112 | Detailed; model effort levels, Auto mode, hotfix |
| **OpenAI Codex** | 10 hot issues tracked | 10 PRs | rust-v0.122.0-alpha.3, alpha.5 | Minimal (CI cuts) |
| **Gemini CLI** | 10 hot issues tracked | 10 PRs | None | N/A |
| **GitHub Copilot CLI** | 10 hot issues tracked | 0 PRs | v1.0.29, v1.0.30, v1.0.31 | Detailed; prompt rendering, MCP config, feedback URLs |
| **Kimi Code CLI** | 6 issues | 5 PRs | None | N/A |
| **OpenCode** | 10 hot issues tracked | 10 PRs | v1.4.7 | Detailed; GPT-5-mini, Cloudflare gateway, auth persistence |
| **Pi** | 10 hot issues tracked | 10 PRs | v0.67.4, v0.67.5, v0.67.6 | Detailed; prompt templates, Opus 4.7 fixes, context-file escape hatch |
| **Qwen Code** | 10 hot issues tracked | 10 PRs | v0.14.5-nightly.20260416 | Minimal (tag comparison only) |

*Note: "Active" counts reflect issues/PRs with 24h activity per digest sources, not total open queue size.*

---

## 3. Shared Feature Directions

| Requirement | Tools Demanding | Specific Evidence |
|-------------|---------------|-----------------|
| **Reasoning/thinking transparency & control** | Kimi, Claude Code, Pi, Copilot CLI | Kimi #1865 (restore thinking process); Claude Code `/effort` levels; Pi #3299 (`max` thinking for Opus 4.7); Copilot CLI #2725 (xhigh hidden in UI) |
| **Remote/multi-environment execution** | OpenAI Codex, Claude Code, Gemini CLI | Codex #10450 (remote dev), #18173 (environment selection); Claude Code Cowork (crashing but strategically invested); Gemini browser agent settings (#22267) |
| **Session lifecycle & context management** | OpenAI Codex, Claude Code, Kimi, Qwen, OpenCode | Codex `/compact`, thread deletion, `/side` conversations (#18190); Claude Code resume/cache invalidation (#43657); Kimi #1797 (session picker); Qwen #3315 (thinking strip on model switch); OpenCode memory megathread |
| **Ambient/side-channel queries without context mutation** | Copilot CLI, OpenAI Codex | Copilot CLI #2778 (`/btw` from Claude Code); Codex #18190 (`/side` conversations) |
| **MCP robustness & observability** | Kimi, Gemini CLI, Copilot CLI, OpenCode | Kimi #1897 (MCP crash deadlocks Web UI); Gemini #23582 (subagents unaware of approval modes); Copilot CLI #2780/#2779 (token expiry, per-session isolation); OpenCode #20467 (MCP blank assistant text) |
| **Rate limiting transparency & fair backoff** | Copilot CLI, Qwen, Claude Code | Copilot CLI #2756/#2760/#2768 (tight limits, spin-loop retries); Qwen #3203 (free-tier slash); Claude Code cost/cache issues |
| **AST-aware/code-native tooling** | Gemini CLI, OpenCode | Gemini #22745 (AST-aware reads/mapping); OpenCode local-model tool execution precision |
| **Localization/i18n** | Qwen, Gemini CLI | Qwen #3328 (slash command i18n), #3240 (Chinese docs); Gemini CLI implicit international user base |

---

## 4. Differentiation Analysis

| Tool | Feature Focus | Target Users | Technical Approach |
|------|-------------|------------|------------------|
| **Claude Code** | Premium agent autonomy (Auto mode, Cowork), model effort granularity | Max subscribers, enterprise teams, pair-programming workflows | Proprietary Node.js/Electron stack; tight Anthropic model integration; skills-based architecture (`/buddy`, `/effort`) |
| **OpenAI Codex** | Rust CLI performance, TUI sophistication, extensibility hooks, goal-mode agent orchestration | Performance-sensitive developers, CI/automation engineers, power users | Rust-first rewrite; heavy investment in `ThreadStore`, event hooks, permission request plumbing; desktop + CLI + VS Code extension matrix |
| **Gemini CLI** | Google ecosystem integration, telemetry-informed iteration, Gemma local model support | Google Cloud users, Android/Termux developers, open-source tinkerers | TypeScript/Node.js; ACP (Agent Communication Protocol) integration; emphasis on model routing and API priority tiers |
| **GitHub Copilot CLI** | Tight GitHub/Microsoft ecosystem integration, fleet/autopilot agent features | Copilot Pro+/Enterprise subscribers, VS Code-centric developers | Closed-source rapid patch cadence; plugin/skill/MCP discovery; focuses on prompt-mode ergonomics |
| **Kimi Code CLI** | Long-context agent sessions, Moonshot API integration, adaptive thinking | Chinese and APAC developers, cost-conscious users seeking Claude alternatives | Node.js/TypeScript; kosong agent kernel; Web UI + CLI dual interface; heavy telemetry investment (#1798) |
| **OpenCode** | Multi-provider flexibility, open-source extensibility, local/self-hosted model support | Developers avoiding vendor lock-in, Ollama/Gemma/Qwen users | TypeScript; aggressive namespace refactoring for plugin ecosystem; memory/heap optimization struggle |
| **Pi** | Terminal-native minimalism, broad provider abstraction, prompt-template extensibility | Terminal purists, multi-provider power users, extension authors | Rust/TypeScript hybrid; explicit focus on TUI polish (OSC 8 links, argument hints); `FileSystem` trait abstraction for portability |
| **Qwen Code** | Qwen model optimization, Chinese-market accessibility, agent team orchestration | Chinese domestic developers, indie/hobbyist users (under pricing pressure) | Node.js/TypeScript; heavy investment in subagent/multi-agent workflows; dual-output sidecar mode for automation |

---

## 5. Community Momentum & Maturity

### Most Active Communities (by engagement intensity)
| Rank | Tool | Evidence |
|------|------|----------|
| 1 | **Claude Code** | 806 👍 on single issue (#45596, `/buddy` removal); 186 comments; rapid dual-release response to launch bug |
| 2 | **OpenAI Codex** | 555 👍 top open feature (#10450); 10 active PRs across hooks, TUI, thread store; Intel Mac closure celebrated |
| 3 | **Qwen Code** | 83-comment firestorm on pricing (#3203); global 401 outage generating 10+ duplicate issues; toxic sentiment spike |
| 4 | **Pi** | 50 updated tickets in 24h; same-day fix for Zellij regression (#3259 → #3296); active extension ecosystem signals |

### Rapid Iteration Leaders
| Tool | Release Cadence | Iteration Pattern |
|------|---------------|-----------------|
| **Claude Code** | 2 releases in 24h | Model-tier launches + immediate hotfixes |
| **Copilot CLI** | 3 patches in 24h | Reactive bug-fix train (rendering, URLs, MCP ergonomics) |
| **Pi** | 3 patches in 24h | Small, user-facing polish items with fast turnaround |

### Maturity Signals
- **Codex** shows the most structured engineering investment (Rust rewrite, `ThreadStore`, filesystem abstraction, provider crate separation).
- **Claude Code** exhibits highest user trust volatility—explosive backlash to silent removals suggests a maturing user base with elevated expectations.
- **Gemini CLI** and **Kimi** demonstrate steady but lower-visibility iteration; neither had releases today but maintained consistent PR/issue flow.
- **Qwen Code** shows signs of operational strain: stale-bot misconfiguration (#3375), mass auth outage, and pricing communication crisis.

---

## 6. Trend Signals

| Trend | Evidence | Value for Developers |
|-------|----------|-------------------|
| **Trust erosion from silent changes is now a product risk** | Claude Code `/buddy` removal (#45596); Kimi thinking-process removal (#1865); Qwen free-tier slash (#3203) | Developers should prioritize changelogs, deprecation notices, and opt-in toggles for UX-altering changes |
| **Reasoning/thinking visibility is becoming table stakes** | Kimi backlash, Claude Code `/effort`, Pi `max` thinking requests, Copilot xhigh UI gaps | Users expect control over and visibility into model reasoning; hiding chain-of-thought is perceived as downgrade |
| **Terminal UX hardening is a competitive battlefield** | Pi Zellij/tmux fixes, Codex goal-mode TUI, Gemini SSH scrambling, OpenCode Windows `ENAMETOOLONG` | Multiplexer compatibility, paste behavior, and spinner/busy-state rendering are now differentiators |
| **Enterprise routing/auth/caching gaps are recurring** | Claude Code Bedrock lag (#49238), Pi Vertex AI absence (#1155), OpenCode Azure ordering (#20698), Qwen 401s | Teams evaluating tools should test their specific cloud provider and auth stack early; "works with OpenAI API" is insufficient |
| **Side-channel/ambient queries are an emerging interaction paradigm** | Copilot CLI `/btw` request, Codex `/side` PR | Developers building AI tools should consider non-mutating query modes that preserve main agent context |
| **Multi-agent orchestration is advancing but unstable** | Claude Code Agent Teams crash (#49253), Qwen Agent Team/background agents, Gemini subagent approval sync | Early adopters should expect debugging opacity and permission-model inconsistencies in multi-agent features |
| **Rate limiting and cost control are user-experience blockers** | Copilot CLI throttling regressions, Claude Code cache invalidation costs, Qwen free-tier anxiety | Transparent quota accounting, configurable backoff, and prompt-cache efficiency are now core product requirements |

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-04-17 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following PRs represent the most-discussed and attention-grabbing Skills in the community. *(Note: All listed PRs are currently **OPEN**; comment counts are unavailable in this dataset, so ranking is inferred from narrative prominence, update recency, and community engagement signals.)*

| Rank | Skill | PR | Functionality | Status |
|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | Quality-control skill that prevents orphan words, widow paragraphs, and numbering misalignment in AI-generated documents. Addresses a universal pain point across all document output. | Open |
| 2 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | Two meta-skills that audit other Skills across five dimensions (structure, documentation, examples, resources, security posture). Brings systematic review to the marketplace. | Open |
| 3 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | Major revision improving clarity and actionability of the existing frontend-design skill. Every instruction is now scoped to single-conversation executability. | Open |
| 4 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | Creation, template filling, reading, and HTML conversion for .odt/.ods files. Targets open-source and ISO-standard document workflows. | Open |
| 5 | **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | Bugfix skill preventing DOCX corruption by resolving `w:id` collisions between tracked changes and existing bookmarks in OOXML. | Open |
| 6 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Comprehensive testing stack guidance: Testing Trophy philosophy, unit testing (AAA), React component testing, and integration patterns. | Open |
| 7 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | Integrates SAP's open-source tabular foundation model for predictive analytics on SAP business data. Enterprise AI/BI use case. | Open |
| 8 | **Shodh Memory** | [#154](https://github.com/anthropics/skills/pull/154) | Persistent memory system for Claude Code that surfaces relevant context across sessions via structured `proactive_context` calls. | Open |

---

## 2. Community Demand Trends

From the most-commented Issues, the community is loudly asking for:

| Trend | Evidence | Representative Issues |
|:---|:---|:---|
| **Skill reliability & trust infrastructure** | Users report skills disappearing, upload failures (500 errors), duplicate skills across plugins, and namespace impersonation attacks. | [#62](https://github.com/anthropics/skills/issues/62), [#189](https://github.com/anthropics/skills/issues/189), [#406](https://github.com/anthropics/skills/issues/406), [#492](https://github.com/anthropics/skills/issues/492) |
| **Skill-creator tooling overhaul** | The built-in `skill-creator` skill is criticized as "developer documentation, not an operational skill" — too verbose, poor token efficiency, and validation gaps. | [#202](https://github.com/anthropics/skills/issues/202), [#532](https://github.com/anthropics/skills/issues/532) |
| **Evaluation & testing automation** | `run_eval.py` fails to trigger skills reliably (`claude -p` 0% trigger rate), blocking automated skill validation. | [#556](https://github.com/anthropics/skills/issues/556) |
| **Enterprise sharing & SSO compatibility** | Org-wide skill libraries, direct sharing links, and removal of hard API-key dependencies for enterprise/SSO users. | [#228](https://github.com/anthropics/skills/issues/228), [#532](https://github.com/anthropics/skills/issues/532) |
| **MCP interoperability & platform expansion** | Requests to expose Skills as MCPs and to support AWS Bedrock deployments. | [#16](https://github.com/anthropics/skills/issues/16), [#29](https://github.com/anthropics/skills/issues/29) |

---

## 3. High-Potential Pending Skills

These active PRs show sustained maintainer or author attention and address clear gaps — strong candidates for near-term merge:

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | Solves a universal, well-scoped problem with immediate user value. |
| **ODT Support** | [#486](https://github.com/anthropics/skills/pull/486) | Fills a major format gap (open-source alternative to DOCX/PDF); recently updated (2026-04-14). |
| **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | Critical bugfix with precise root-cause analysis; prevents document corruption. |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Large, well-structured addition to a high-demand domain; recently active. |
| **Sensory (macOS Automation)** | [#806](https://github.com/anthropics/skills/pull/806) | Novel AppleScript-based automation tier; distinguishes itself from screenshot-based computer use. |
| **Record Knowledge** | [#521](https://github.com/anthropics/skills/pull/521) | Directly addresses Claude Code's session-amnesia problem; lightweight and practical. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for trustworthy, enterprise-ready document and code skills that work reliably across sessions, platforms, and teams — with equally robust tooling to create, validate, and share them.**

---

# Claude Code Community Digest — 2026-04-17

## 1. Today's Highlights
Anthropic shipped two rapid-fire releases (v2.1.111 and v2.1.112) bringing **Opus 4.7 xhigh** effort levels and **Auto mode for Max subscribers**, while also patching a launch-day availability bug. Meanwhile, the community is in open revolt over the silent removal of `/buddy` ([#45596](https://github.com/anthropics/claude-code/issues/45596)), now the most-upvoted active issue by a wide margin, and Cowork sessions are crashing across macOS and Windows ([#49367](https://github.com/anthropics/claude-code/issues/49367), [#46029](https://github.com/anthropics/claude-code/issues/46029)).

---

## 2. Releases

| Version | Summary |
|--------|---------|
| **[v2.1.111](https://github.com/anthropics/claude-code/releases/tag/v2.1.111)** | Opus 4.7 `xhigh` effort level lands between `high` and `max`, configurable via `/effort`, `--effort`, or model selection. Auto mode is now unlocked for Max subscribers using Opus 4.7. |
| **[v2.1.112](https://github.com/anthropics/claude-code/releases/tag/v2.1.112)** | Hotfix for "claude-opus-4-7 is temporarily unavailable" errors encountered in Auto mode. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#45596](https://github.com/anthropics/claude-code/issues/45596) | **Bring Back Buddy** — consolidated community plea | The `/buddy` skill was removed silently in v2.1.97; users report workflow disruption and loss of a distinctive UX feature. | **186 comments, 806 👍** — overwhelming support, emotional pleas, demands for official communication. |
| [#49238](https://github.com/anthropics/claude-code/issues/49238) | **Opus 4.7 doesn't work with Bedrock** | Breaks AWS Bedrock deployments for enterprise users right as 4.7 launches. | 44 comments, 87 👍 — urgent, provider-critical. |
| [#46029](https://github.com/anthropics/claude-code/issues/46029) | **Cowork sessions crash "exited with code 1" on Windows/VS Code** | New Cowork sessions completely unusable on Windows; `/doctor` and `/bug` also broken, blocking self-service debugging. | 46 comments — high frustration, no viable workaround. |
| [#49367](https://github.com/anthropics/claude-code/issues/49367) | **Cowork crashes on macOS — Desktop-to-SDK spawn failure** | Parallels the Windows Cowork crash, indicating a cross-platform regression in SDK 2.1.111. | 19 comments, 7 👍 — Desktop users stranded. |
| [#38537](https://github.com/anthropics/claude-code/issues/38537) | **Auto mode safety classifier uses wrong model (Sonnet 1M) when Opus 1M selected** | Causes Bash tool failures when the fallback model is unavailable; cost and reliability issue for power users. | 12 comments, 65 👍 — fixed logic gap in model routing. |
| [#43657](https://github.com/anthropics/claude-code/issues/43657) | **Resume/continue cache invalidation** | Cache invalidation on session resume wastes tokens and money for long-running workflows. | 8 comments, 5 👍 — recurring cost pain point. |
| [#49253](https://github.com/anthropics/claude-code/issues/49253) | **Agent Teams: subagent permission request crashes Bun process** | Experimental multi-agent feature is unstable; crashes on permission prompts. | 4 comments, 5 👍 — blocks adoption of Agent Teams. |
| [#49585](https://github.com/anthropics/claude-code/issues/49585) | **Per-turn smoosh pipeline breaks prompt cache** | Dynamic `<system-reminder>` text being folded into `tool_result.content` destroys prompt-cache efficiency, inflating costs. | 2 comments — deeply technical, cost impact. |
| [#49604](https://github.com/anthropics/claude-code/issues/49604) | **Model regression: car-wash failure persists across 4.5→4.6→4.7** | Long-standing benchmark/task failure not resolved by model upgrades; now adds multi-turn recovery failures. | 2 comments — model-quality concern. |
| [#49609](https://github.com/anthropics/claude-code/issues/49609) | **Model selection mismatch: `/model` shows Opus 4.7 but sets 4.6** | UI/CLI lying to users about which model is active undermines trust and billing transparency. | 1 comment — sharp, reproducible bug. |

---

## 4. Key PR Progress

| # | PR | Status | Feature / Fix |
|---|-----|--------|---------------|
| [#49596](https://github.com/anthropics/claude-code/pull/49596) | **Extract shared GitHub API client into `github-api.ts` with tests** | Open | Refactors GitHub integration for maintainability and test coverage. |
| [#40322](https://github.com/anthropics/claude-code/pull/40322) | **Enhance devcontainer firewall with hybrid static/dynamic IP management** | Open | Hardens devcontainer networking; fixes sudo/env, crontab, and heredoc issues from prior attempt. |
| [#49230](https://github.com/anthropics/claude-code/pull/49230) | **Format description and examples in `conversation-analyzer.md`** | Open | Documentation quality improvement for the conversation analyzer. |
| [#48335](https://github.com/anthropics/claude-code/pull/48335) | **Fix `hookify`: support `Write` content for `new_text` rules** | Open | Runtime fix enabling hook rules to read `content` from Write tool payloads, not just `new_string` from Edit. |
| [#48905](https://github.com/anthropics/claude-code/pull/48905) | **Perf: run commit-commands with Haiku** | Closed | Optimization to run commit commands on a cheaper/faster model. |
| [#45721](https://github.com/anthropics/claude-code/pull/45721) | **Add Claude Mythos operating contract for Veriflow immune system** | Closed | Appears to be an experimental/unserious PR ("Idk what I'm doing"). |
| [#1](https://github.com/anthropics/claude-code/pull/1) | **Create `SECURITY.md`** | Closed | Basic security policy addition. |

*Note: Only 7 PRs had 24h activity. The table above covers all of them.*

---

## 5. Feature Request Trends

1. **Bring back `/buddy`** — By far the dominant request. Users want the companion skill restored or at least explained.
2. **Vim-style navigation in TUI menus** — `j/k` or `Ctrl+J/K` for `/effort`, `/model`, `/agents`, etc. ([#49606](https://github.com/anthropics/claude-code/issues/49606)).
3. **Split-pane TUI** — Ability to scroll Claude's output while typing a response ([#49608](https://github.com/anthropics/claude-code/issues/49608)).
4. **Better token-usage visibility in hooks** — `SubagentStop` hooks missing usage data; demand for programmatic cost tracking ([#47045](https://github.com/anthropics/claude-code/issues/47045)).
5. **Stable Cowork / multi-session reliability** — Implicit feature demand from the volume of Cowork crash reports.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|-----------|----------|
| **Silent feature removals break trust** | `/buddy` disappeared without changelog notice; community response is explosive. |
| **Cowork is fragile across platforms** | Concurrent crashes on Windows, macOS, and VS Code suggest Desktop/SDK spawn pipeline is unstable. |
| **Cost and cache inefficiency** | Multiple issues ([#43657](https://github.com/anthropics/claude-code/issues/43657), [#49585](https://github.com/anthropics/claude-code/issues/49585)) highlight that resume and prompt-cache behavior is costing users real money. |
| **Model routing lies or fails** | Selection UI showing 4.7 but loading 4.6 ([#49609](https://github.com/anthropics/claude-code/issues/49609)), and safety-classifier fallback to unavailable models ([#38537](https://github.com/anthropics/claude-code/issues/38537)), create confusion and downtime. |
| **Bedrock lag / breakage on new models** | Opus 4.7 unavailable via Bedrock at launch ([#49238](https://github.com/anthropics/claude-code/issues/49238)) — enterprise AWS users feel second-class. |
| **Permission UX friction** | "Bypass Permissions" still nags for memory and skill edits ([#47081](https://github.com/anthropics/claude-code/issues/47081)); plugin autoloader/dispatch conflation kills concurrent sessions ([#49610](https://github.com/anthropics/claude-code/issues/49610)). |
| **macOS packaging / signing annoyances** | Versioned install paths force re-registration in Privacy & Security on every update ([#49282](https://github.com/anthropics/claude-code/issues/49282)); Homebrew update messaging is misleading ([#49590](https://github.com/anthropics/claude-code/issues/49590)). |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-17

---

## 1. Today's Highlights

The Codex team shipped two Rust CLI pre-releases (`v0.122.0-alpha.3` and `alpha.5`) while closing a long-running, highly upvoted request for macOS Intel support. On the engineering side, a major stack of PRs is landing around **PermissionRequest hooks**, **goal-mode TUI UX**, and **thread-store persistence refactors**—signaling heavy investment in extensibility, session management, and the in-terminal experience.

---

## 2. Releases

| Version | Notes |
|--------|-------|
| [rust-v0.122.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.5) | Latest Rust CLI pre-release. No detailed changelog published. |
| [rust-v0.122.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.3) | Preceding alpha in the same train. |

*No substantive release notes were provided; these appear to be iterative CI cuts toward the upcoming `v0.122.0` stable.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#10410](https://github.com/openai/codex/issues/10410) | **macOS Intel (x86_64) support** — *CLOSED* | Closes one of the top-voted platform gaps for the desktop app. Intel Mac users can now run Codex natively (or via a Universal build). | **285 👍, 187 comments.** Celebrated as a major accessibility win. |
| [#10450](https://github.com/openai/codex/issues/10450) | **Remote Development in Codex Desktop App** | Users want to attach Codex App to remote/WSL/SSH environments the same way VS Code does. A core competitive parity issue. | **555 👍, 134 comments.** The highest-voted open feature request. |
| [#2109](https://github.com/openai/codex/issues/2109) | **Event Hooks** — *CLOSED* | Enables pattern-matched scripts/commands before/after Codex behaviors. Unlocks CI/automation integrations. | **526 👍, 76 comments.** Power-user favorite; closure suggests underlying infra is now in place. |
| [#11325](https://github.com/openai/codex/issues/11325) | **Manual `/compact` command in Codex app** | CLI has `/compact`; the GUI lacks it, forcing users into context-trimming workarounds. | **145 👍, 54 comments.** Frequently cited quality-of-life gap. |
| [#13822](https://github.com/openai/codex/issues/13822) | **macOS Input Bug: Control-F cursor movement broken** — *CLOSED* | Regressed Emacs-style keybindings in the app input field. Fixed quickly after report. | 12 👍, 27 comments. Users confirmed the fix restored expected macOS text-editing behavior. |
| [#16088](https://github.com/openai/codex/issues/16088) | **WSL: empty `.codex` file left behind** | Sandboxing/persistence bug on Windows/WSL that pollutes repos. A papercut with outsized DX impact. | 56 👍, 19 comments. WSL users flagging regressions in daily workflows. |
| [#17525](https://github.com/openai/codex/issues/17525) | **Ubuntu: every normal edit requires skipping sandbox** | Landlock/bwrap sandboxing is overly aggressive on Ubuntu 24.04, breaking the edit loop. | 0 👍, 14 comments. Critical severity for Linux CLI users despite low vote count. |
| [#17322](https://github.com/openai/codex/issues/17322) | **Windows: App does not fully exit on close + UI hit-testing bug** | Two related Windows desktop polish issues: ghost processes and unresponsive "New Chat" regions. | 11 👍, 9 comments. Windows app stability remains a recurring theme. |
| [#17649](https://github.com/openai/codex/issues/17649) | **VS Code extension: file-reference links completely broken** | Regression makes all file links in chat non-clickable, defeating a core navigation feature. | 8 👍, 8 comments. IDE-extension users treating this as a blocker. |
| [#18069](https://github.com/openai/codex/issues/18069) | **`apply_patch` fails with `use_legacy_landlock=true`** | Workspace edits break when legacy landlock is enabled. Intersects config, sandbox, and tool-calling layers. | 7 👍, 5 comments. Reported against `v0.121.0`; needs urgent triage. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| [#18236](https://github.com/openai/codex/pull/18236) | **Add PermissionRequest hook plumbing** | PR 1 of a 2-PR stack. Lays protocol/schema and display groundwork for user/guardian approval hooks. |
| [#18209](https://github.com/openai/codex/pull/18209) | **Refactor config loading to use filesystem abstraction** | Propagates a `FileSystem` trait through config loading, improving testability and cross-platform portability. |
| [#18231](https://github.com/openai/codex/pull/18231) | **codex: split thread/read view loading** | Pure refactor separating persisted-load, live-load, and merge steps for thread reads; paves the way for `ThreadStore` migration. |
| [#18096](https://github.com/openai/codex/pull/18096) | **feat(sandbox): add glob deny-read platform enforcement** | Adds macOS Seatbelt and Linux bwrap rules for unreadable glob patterns, with fallback when `rg` is absent. |
| [#18077](https://github.com/openai/codex/pull/18077) | **Add goal mode TUI UX (5 / 5)** | Final PR in the goal-mode stack: adds `/goal` command, statusline indicators, and update handling to the Rust TUI. |
| [#17563](https://github.com/openai/codex/pull/17563) | **Add PermissionRequest hooks support** | End-to-end hook support for approval requests; allows scripts to react to (and optionally auto-approve) permission events. |
| [#18173](https://github.com/openai/codex/pull/18173) | **Add explicit thread environment selection** | Surfaces `thread/start.environmentId` so callers can choose `local` vs `remote`; preserves current defaults. |
| [#17862](https://github.com/openai/codex/pull/17862) | **Stream apply_patch changes** | Introduces streaming events for `apply_patch` file writes, enabling progress UI in clients. (Responses API only; not function-call mode.) |
| [#18190](https://github.com/openai/codex/pull/18190) | **Add `/side` conversations** | Adds ephemeral forked side-chats in the TUI without interrupting the main agent thread. |
| [#17713](https://github.com/openai/codex/pull/17713) | **feat: add opt-in provider runtime abstraction** | Creates `codex-model-provider` crate to house provider-specific runtime logic outside core, enabling cleaner custom-model integrations. |

---

## 5. Feature Request Trends

1. **Remote & Multi-Environment Execution** — The top ask is native remote-dev support in the desktop app (#10450), followed by explicit local/remote environment selection (now landing in #18173) and WSL/SSH polish.
2. **Session Lifecycle Control** — Users want manual `/compact` (#11325), thread deletion (#13018), multiple terminals per environment (#11427), and background-terminal inspection (#13858).
3. **Extensibility & Hooks** — Event hooks (#2109, closed) and PermissionRequest hooks (#18236, #17563) show strong demand for programmable interception points.
4. **Cross-Platform Coverage** — macOS Intel support is now resolved, but Termux/Android (#17787) and Windows ARM64 WSL (#13565) remain underserved.
5. **IDE Extension Parity** — VS Code users are pushing for reliable hyperlink/file-reference behavior (#17649, #13277) and diff rendering fixes (#17308).

---

## 6. Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Windows Desktop Instability** | Ghost processes on close (#17322), WSL startup failures (#14461, #13565), VS Code connection drops (#17244). | High — multiple distinct failure modes. |
| **Sandbox Regressions on Linux** | Ubuntu users must skip sandbox on every edit (#17525); legacy landlock breaks `apply_patch` (#18069). | High — breaks core editing loop. |
| **VS Code Extension Link/Diff Rot** | File links and hyperlinks repeatedly break (#17649, #13277, #18217); diff styling regressed (#17308). | Medium-High — erodes trust in IDE integration. |
| **Rate-Limit & Billing Surprises** | Code-review errors reportedly consume the 5-hour limit (#18194). | Medium — operational cost concern. |
| **MCP/Tool-Calling Confusion** | Agents forget how to invoke MCP tools after `0.121.0` (#18233); custom-model `apply_patch` failures (#17899). | Medium — signals prompt/tool-schema drift in recent releases. |

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-17

## 1. Today's Highlights
No new release shipped in the last 24 hours, but development remains active with 50+ issues and PRs updated. Key themes include hardening the CLI against RipGrep download failures, improving telemetry reliability, and expanding model support with Gemma 4. Several long-standing agent behavior bugs—such as plan state not resetting on `/clear` and subagents masking `MAX_TURNS` failures as successes—also saw fixes or renewed attention.

---

## 2. Releases
*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#25323](https://github.com/google-gemini/gemini-cli/issues/25323) | RipGrep download failures permanently slow CLI startup | A network hiccup can add 2+ minutes to every launch; users want fail-fast behavior and bundling. | 6 comments, actively discussed |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST-aware file reads, search, and mapping | EPIC-level investigation that could reduce token noise and improve code navigation precision. | 5 comments, strong maintainer interest |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | CLI keeps asking permissions on the same file | Breaks trust in "allow for all future sessions"; friction-heavy UX bug. | 3 comments, user-reported |
| [#24936](https://github.com/google-gemini/gemini-cli/issues/24936) | Edit/WriteFile tools not showing file being modified | **P0** regression—users cannot safely approve edits without seeing the target file. Closed after fix. | 2 comments, critical severity |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after `MAX_TURNS` reported as `GOAL` success | Hides real failures from users; corrupts agent reliability and debugging. | 2 comments, 2 upvotes |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell execution hangs with "Waiting input" after command completes | Common workflow breaker; simple commands falsely appear blocked. | 2 comments, 2 upvotes |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores `settings.json` overrides | Configuration system not respected by all agents, leading to unpredictable `maxTurns` behavior. | 2 comments |
| [#25216](https://github.com/google-gemini/gemini-cli/issues/25216) | CLI fails to open in temporary path `A:\` | Windows edge-case crash (`EISDIR` on `realpath`) blocking portability. | 1 comment |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Implement memory routing: global vs. project | Foundation for persistent, context-aware agent behavior across workspaces. | 1 comment, 2 upvotes |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) | Subagents unaware of active Approval Modes | Policy engine and agent instructions are out of sync, causing rejected tool-call loops. | 1 comment, 1 upvote |

---

## 4. Key PR Progress

| # | PR | Feature or Fix |
|---|-----|---------------|
| [#25426](https://github.com/google-gemini/gemini-cli/pull/25426) | Revive bundling and unleash 16-core test speed | Artifact-centric CI overhaul with reusable setup action; major CI latency reduction. |
| [#25256](https://github.com/google-gemini/gemini-cli/pull/25256) | Detect new files in `@` recommendations with watcher-based updates | Live file-watcher refresh for `@` suggestions, gated behind a feature flag for safety. |
| [#25344](https://github.com/google-gemini/gemini-cli/pull/25344) | Bounded structural truncation for telemetry | Prevents JSON parsing failures and OOMs; fixes Cloud Monitoring high-cardinality label explosions. |
| [#25427](https://github.com/google-gemini/gemini-cli/pull/25427) | Resolve custom Seatbelt profiles from `$HOME/.gemini` first | Lets users define one cross-workspace sandbox profile instead of copying per project. |
| [#25537](https://github.com/google-gemini/gemini-cli/pull/25537) | Use newline in shell command wrapping to avoid breaking heredocs | Fixes shell execution when heredoc delimiters are appended with semicolons. |
| [#25545](https://github.com/google-gemini/gemini-cli/pull/25545) | Improve dangerous command detection for `rm` | Hardens POSIX `isDangerousCommand` to catch path-qualified `rm` and flag inherently risky flags. |
| [#25560](https://github.com/google-gemini/gemini-cli/pull/25560) | Add support for Gemma 4 model | Adds `gemma-4-26b-a4b-it` selection in UI and ACP integration. |
| [#25497](https://github.com/google-gemini/gemini-cli/pull/25497) | Allow dots in `GEMINI_API_KEY` | Supports new service-account-bound API key format (e.g., `AQ.Ab8RN6...`). |
| [#25555](https://github.com/google-gemini/gemini-cli/pull/25555) | Add priority setting to send priority requests to the API | Exposes tier-2/3 priority access via `model.geminiApiPriority` in `settings.json`. |
| [#25554](https://github.com/google-gemini/gemini-cli/pull/25554) | Skip model routing classification when redundant | Performance win: bypasses lightweight classifier when `pro` and `flash` resolve to the same model. |

---

## 5. Feature Request Trends

- **AST-aware tooling** — Multiple issues (#22745, #22746) explore using AST-based reads and codebase mapping to cut token waste and improve navigation accuracy.
- **Memory and persistence** — Requests for global vs. project-scoped memory (#22819) and proactive memory writes (#22809) signal demand for long-term agent context.
- **Model flexibility** — Gemma 4 support (#25560), favorite models (#25072), and API priority (#25555) show continued push for user control over model selection and routing.
- **File context UX** — Watcher-based `@` suggestions (#25256) and shortcuts to open mentions in editor/file browser (#25060) reflect a focus on speeding up context attachment.

---

## 6. Developer Pain Points

- **Startup and environment fragility** — RipGrep download failures (#25323) and Windows path crashes (#25216) make the CLI feel brittle in non-ideal network or OS environments.
- **Permission fatigue** — Repeated permission prompts (#24916) and subagents ignoring approval modes (#23582) erode trust in the safety UX.
- **Agent opacity** — Subagents hiding `MAX_TURNS` failures (#22323) and browser agent ignoring settings (#22267) make it hard to debug or predict agent behavior.
- **Terminal rendering glitches** — SSH session scrambling (#24202), incremental table streaming (#25218), and scroll instability in long chats (#24470) degrade the TUI experience.
- **Telemetry and observability reliability** — Recent PRs (#25344, #25136) address repeated JSON parsing and metric-write failures, indicating this has been a production stability issue.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-17

## 1. Today's Highlights
The Copilot CLI team shipped three rapid-fire patch releases (v1.0.29–v1.0.31) in 24 hours, fixing prompt rendering glitches, broken feedback URLs, and MCP server config ergonomics. Meanwhile, the issue tracker is heating up around **rate limiting**, **model availability gaps**, and **agent UX regressions** — with several new reports emerging directly from the v1.0.29 rollout.

---

## 2. Releases

| Version | Date | Summary |
|---------|------|---------|
| **v1.0.31** | 2026-04-16 | Fixes prompt-frame rendering issues on Windows and Ubuntu terminals. |
| **v1.0.30** | 2026-04-16 | Corrects `/feedback` URL to the right repo; `/undo` now explains when rewind is unavailable; plugin/skill discovery fixed for `skills.discover`; introduces `/statusline` command. |
| **v1.0.29** | 2026-04-16 | Remote MCP server configs now default to `http` when `type` is omitted; blinking cursor width stabilized to prevent text shifting; adds `--list-env` flag for debugging loaded plugins, agents, skills, and MCP servers in prompt mode. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#1703](https://github.com/github/copilot-cli/issues/1703) | **Copilot CLI does not list all org-enabled models (e.g. Gemini 3.1 Pro) while VS Code Copilot does** | Enterprise users see model fragmentation across GitHub surfaces — CLI lags behind VS Code in honoring org settings. | 🔥 20 comments, 33 👍 — top active thread. |
| [#2725](https://github.com/github/copilot-cli/issues/2725) | **GPT-5.4 /model picker hides Extra High even though xhigh still works** | UI doesn't reflect actual backend capability, causing user confusion and underutilization of paid tiers. | 13 comments, 14 👍. |
| [#2712](https://github.com/github/copilot-cli/issues/2712) | **MS legal/monetary liability for rate limit behavior** | Raises serious concerns about autopilot / fleet agents burning quota without explicit user action — touches billing fairness and liability. | 8 comments, heated legal/policy tone. |
| [#2756](https://github.com/github/copilot-cli/issues/2756) | **Rate limit is very tight** | Post-limit recovery is broken: 1–2 tool calls re-trigger throttling, making workflows unusable. | 5 comments, fresh v1.0.29 report. |
| [#2769](https://github.com/github/copilot-cli/issues/2769) | **Copilot Pro+ – Weekly Rate Limit Not Resetting** | Pro+ subscribers hitting hard stops despite expected reset windows — directly impacts paid experience. | 3 comments, 2 👍. |
| [#2768](https://github.com/github/copilot-cli/issues/2768) | **Unreasonable rate limit reached quickly after updating to v1.0.29 (Pro+)** | Correlates new release with sharply reduced practical quota — regression suspicion. | 2 comments. |
| [#2760](https://github.com/github/copilot-cli/issues/2760) | **Implement proper HTTP retry logic for 429 responses** | CLI currently spin-loops on rate-limit errors (20+ retries/minute), worsening bans and client load. | 2 comments, 1 👍. |
| [#2776](https://github.com/github/copilot-cli/issues/2776) | **Shift+Enter currently submits the prompt instead of inserting a new line** | Breaks muscle memory from every other chat/CLI tool; hurts multi-line prompting UX. | 2 comments. |
| [#2777](https://github.com/github/copilot-cli/issues/2777) | **Agent name is not visible anymore** | v1.0.27 → v1.0.31 regression removes agent indicator from status bar, disorienting users switching models/agents. | 1 comment. |
| [#2778](https://github.com/github/copilot-cli/issues/2778) | **When is /btw from claude code coming to copilot?** | High-signal feature request: users want ambient, non-destructive side queries without corrupting active agent context. | 1 comment. |

---

## 4. Key PR Progress

**No Pull Requests were updated in the last 24 hours.**  
All changes in this period landed via direct releases (v1.0.29–v1.0.31).

---

## 5. Feature Request Trends

1. **Rate Limit Transparency & Control** — Users want clearer quota accounting, configurable retry backoff, and autopilot-aware throttling that doesn't self-sabotage.
2. **Model Parity with VS Code / Org Settings** — Consistent model availability across GitHub Copilot surfaces is a recurring demand.
3. **Ambient / Side-Channel Queries (`/btw`)** — Interest is growing in Claude Code-style out-of-band questions that don't mutate session context.
4. **Plugin Lifecycle Management** — Toggle enable/disable for plugins without uninstalling them.
5. **MCP Session Robustness** — Shared token caches and automatic OAuth refresh for long-running agent workflows.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Aggressive / Broken Rate Limiting** | Issues [#2756](https://github.com/github/copilot-cli/issues/2756), [#2768](https://github.com/github/copilot-cli/issues/2768), [#2769](https://github.com/github/copilot-cli/issues/2769), [#2712](https://github.com/github/copilot-cli/issues/2712), [#2754](https://github.com/github/copilot-cli/issues/2754), [#2760](https://github.com/github/copilot-cli/issues/2760) — the dominant theme of the week. |
| **Model Discovery Gaps** | [#1703](https://github.com/github/copilot-cli/issues/1703), [#2725](https://github.com/github/copilot-cli/issues/2725), [#2762](https://github.com/github/copilot-cli/issues/2762), [#2782](https://github.com/github/copilot-cli/issues/2782) — CLI lags behind interactive and VS Code model catalogs. |
| **Agent UX Regressions** | [#2777](https://github.com/github/copilot-cli/issues/2777) (missing agent name), [#2374](https://github.com/github/copilot-cli/issues/2374) (infinite loops), [#2775](https://github.com/github/copilot-cli/issues/2775) (stuck cancel states) — eroding trust in autopilot. |
| **Input / Accessibility Friction** | [#2776](https://github.com/github/copilot-cli/issues/2776) (Shift+Enter), [#2085](https://github.com/github/copilot-cli/issues/2085) (screen-reader noise) — polish issues that compound daily. |
| **MCP Operational Friction** | [#2780](https://github.com/github/copilot-cli/issues/2780), [#2779](https://github.com/github/copilot-cli/issues/2779) — token expiry and per-session isolation break enterprise integrations. |

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-17

## 1. Today's Highlights
No new release shipped in the last 24h, but development activity remains brisk with five PRs updated and six active issues. The dominant themes are **visibility into model reasoning** (users protesting the removal of thinking-process output) and **robustness of long-running agent sessions** (spinner fixes, step-limit increases, and MCP failure handling).

---

## 2. Releases
*No releases in the last 24h.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#1865](https://github.com/MoonshotAI/kimi-cli/issues/1865) | **Thinking process removed in v1.33.0** — user reports loss of reasoning visibility, calling it "pure negative optimization." | Transparency is a core differentiator for coding agents; hiding chain-of-thought erodes trust and debuggability. | **Heated.** 11 comments, 3 upvotes. Multiple users expressing frustration and seeking rollback or setting to re-enable. |
| [#1903](https://github.com/MoonshotAI/kimi-cli/issues/1903) | **Error code: 400 on `kimi-for-coding`** (v1.34.0, macOS). | A hard 400 from the LLM provider breaks the entire coding flow; could indicate a model-version or payload-format mismatch. | Early-stage report. 4 comments, no upvotes yet. Needs repro confirmation. |
| [#1910](https://github.com/MoonshotAI/kimi-cli/issues/1910) | **IDEA (JetBrains) integration: CLI produces no response** (v1.25.0, Mac). | JetBrains IDEs are a major developer segment; silent failures in terminal embedding block adoption. | Fresh report (1 comment). Awaiting logs and repro steps. |
| [#1897](https://github.com/MoonshotAI/kimi-cli/issues/1897) | **Web UI hangs forever when MCP server fails to connect.** | MCP is central to the agent ecosystem; an unreachable server crashing the backend worker makes the whole Web UI unusable. | 1 comment. Clear repro provided. High severity for `kimi web` users. |
| [#1867](https://github.com/MoonshotAI/kimi-cli/issues/1867) | **`--yolo` auto-approves plans in Plan Mode; user wants separation of plan review vs. tool approval.** | Safety/control issue: high-risk plan execution should not be bundled with low-risk tool auto-approval. | 1 comment. Well-structured feature request with risk matrix. Likely to resonate with power users. |
| [#1378](https://github.com/MoonshotAI/kimi-cli/issues/1378) | **JSON parsing error when tool-call arguments contain control characters** (v1.17.0, `kimi-2.5`, Linux). | Control characters in generated JSON are an evergreen LLM-output sanitization problem; breaks tool-use reliability. | **Closed** after 3 comments. Fix presumably landed or deemed resolved in a newer version. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| [#1911](https://github.com/MoonshotAI/kimi-cli/pull/1911) | **fix(kosong): support adaptive thinking for Opus 4.7+ models** | Expands adaptive-thinking logic beyond hardcoded `opus-4.6` to all Opus ≥4.6, preventing `invalid thinking format` errors on newer Claude versions. |
| [#1909](https://github.com/MoonshotAI/kimi-cli/pull/1909) | **fix(shell): show moon spinner fallback during all active turn gaps** | Eliminates blank-screen periods between tool calls and model steps by ensuring the moon spinner renders whenever the agent is busy. |
| [#1908](https://github.com/MoonshotAI/kimi-cli/pull/1908) | **feat(core): increase default `max_steps_per_turn` from 100 to 500** | Removes a common ceiling for complex tasks; users no longer need manual config overrides for long agent runs. |
| [#1798](https://github.com/MoonshotAI/kimi-cli/pull/1798) | **feat(telemetry): integrate telemetry tracking across interactive and …** | Adds telemetry instrumentation. Open since 2026-04-08; still under review. Privacy-conscious users will watch how this is documented and gated. |
| [#1797](https://github.com/MoonshotAI/kimi-cli/pull/1797) | **feat(shell): add Ctrl+A directory scope toggle to `/sessions` picker** | Brings Claude Code-style session management to Kimi: toggle between current-directory and all-directory sessions with `Ctrl+A`. |

---

## 5. Feature Request Trends
1. **Restore or configurable thinking-process visibility** — the backlash in #1865 signals that reasoning transparency is now a table-stakes expectation.
2. **Finer-grained safety controls** — #1867 asks to decouple plan approval from tool auto-approval, pointing toward a demand for tiered consent levels.
3. **Deeper IDE integration robustness** — #1910 and similar silent-failure reports suggest users want first-class JetBrains/VS Code terminal behavior, not just CLI-in-a-pane.

---

## 6. Developer Pain Points
- **Loss of reasoning transparency** is the loudest frustration right now. Users feel the product became less trustworthy overnight.
- **MCP/Web UI fragility** — a single misconfigured or unreachable MCP server can deadlock the entire web interface (#1897).
- **Provider 400 errors on latest versions** — #1903 hints at possible model/payload drift in recent releases, creating anxiety about update stability.
- **Invisible busy states** — while PR #1909 addresses this, the fact that users reported blank screens during active turns shows UX polish gaps in async agent loops.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-17

## Today's Highlights
OpenCode shipped **v1.4.7** with compatibility fixes for GPT-5-mini reasoning effort and Cloudflare AI Gateway token handling, while a massive namespace-refactoring campaign (18+ PRs) swept through the codebase to flatten TypeScript exports. Meanwhile, a **memory-performance megathread** and several model-specific breakages (Claude Opus 4.7, Gemma 4, GPT-5.4 via Azure) dominated community attention.

---

## Releases

### [v1.4.7](https://github.com/anomalyco/opencode/releases/tag/v1.4.7)
- **GitHub Copilot `gpt-5-mini`** now defaults to **low reasoning effort** for broader request compatibility. *(thakrarsagar)*
- **Workspace auth context** now persists across sessions, fixing provider sign-in drop-offs.
- **Cloudflare AI Gateway** no longer sends `max_tokens` to OpenAI reasoning models, resolving the `max_tokens` vs. `max_completion_tokens` rejection for GPT-5.x.

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | **Memory Megathread** [perf, core] | Centralized tracker for memory leaks/heap bloat; maintainers explicitly ask for **manual heap snapshots** and warn against LLM-generated solutions. | 56 comments, 33 👍 |
| [#1692](https://github.com/anomalyco/opencode/issues/1692) | **Socket connection closed unexpectedly** | Long-running networking reliability issue finally **closed** after extensive log analysis. | 34 comments, 19 👍 |
| [#20698](https://github.com/anomalyco/opencode/issues/20698) | **GPT 5.4 via Azure fails on reasoning item ordering** | Breaks multi-tool-call flows with Azure Cognitive Services; "continue" doesn't recover. | 30 comments, 3 👍 |
| [#13984](https://github.com/anomalyco/opencode/issues/13984) | **Copy/paste broken in CLI** | Basic UX regression—clipboard claims success but `Ctrl+V` yields nothing. | 26 comments, 9 👍 |
| [#7030](https://github.com/anomalyco/opencode/issues/7030) | **Ollama `qwen2.5-coder`: fake tool execution** | `edit`/`write` calls appear to succeed but **no disk changes occur**, breaking local-model trust. | 16 comments, 18 👍 |
| [#7992](https://github.com/anomalyco/opencode/issues/7992) | **OpenAI connect auth loop** | OAuth shows "authorization successful" but OpenCode stays stuck on "Waiting for authorization." | 15 comments, 1 👍 |
| [#22512](https://github.com/anomalyco/opencode/issues/22512) | **Windows: `ENAMETOOLONG` on any message** | Complete TUI blocker on Windows in v1.4.4; screen glitches then crashes. | 14 comments |
| [#21034](https://github.com/anomalyco/opencode/issues/21034) | **Gemma 4 models loop/fail** | Despite upstream tokenizer patches, Gemma-4-26b/31b remain **unusable** in OpenCode due to tool-call loops. | 12 comments, 16 👍 |
| [#22863](https://github.com/anomalyco/opencode/issues/22863) | **Opus 4.7: `thinking.type.enabled` unsupported** | Model-selection regression in v1.4.6; **closed** quickly but signals fast-breaking Anthropic API drift. | 8 comments |
| [#22630](https://github.com/anomalyco/opencode/issues/22630) | **Desktop 1.4.6 blank window on macOS 26.4 (Tahoe)** | macOS beta compatibility issue—app launches to white screen, fully unresponsive. | 6 comments, 1 👍 |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#22821](https://github.com/anomalyco/opencode/pull/22821) | **Tidy stale ripgrep references** | Removes outdated `ripgrep` binary refs and contradictory tool descriptions; docs + prompt hygiene fix. | Open |
| [#22964](https://github.com/anomalyco/opencode/pull/22964) | **Unwrap `Shell` namespace + self-reexport** | Flattens `Shell` TS namespace to top-level exports while preserving `Shell.x` consumer ergonomics. | Closed |
| [#22929](https://github.com/anomalyco/opencode/pull/22929) | **Add unwrap-and-self-reexport scripts** | Automation scripts (ast-grep powered) to batch-migrate remaining `export namespace` patterns. | Closed |
| [#22950](https://github.com/anomalyco/opencode/pull/22950) | **Unwrap `ConfigSkills` namespace** | Same refactor pattern for config skills module. | Closed |
| [#22938](https://github.com/anomalyco/opencode/pull/22938) | **Unwrap `Protected` namespace** | File-protection module flattened. | Closed |
| [#22952](https://github.com/anomalyco/opencode/pull/22952) | **Unwrap `TuiConfig` namespace** | TUI config module flattened. | Closed |
| [#22937](https://github.com/anomalyco/opencode/pull/22937) | **Unwrap `FileIgnore` namespace** | Ignore-pattern module flattened. | Closed |
| [#22945](https://github.com/anomalyco/opencode/pull/22945) | **Unwrap `PluginMeta` namespace** | Plugin metadata module flattened. | Closed |
| [#22935](https://github.com/anomalyco/opencode/pull/22935) | **Unwrap `Agent` namespace** | Core agent module flattened. | Closed |
| [#20467](https://github.com/anomalyco/opencode/pull/20467) | **Fix blank assistant text (AI SDK v6 regression)** | Restores assistant text rendering in TUI when MCP servers are enabled, a v1.3.4 regression. | Open |

---

## Feature Request Trends

1. **TUI/UX configurability** — Requests for sidebar default state ([#3682](https://github.com/anomalyco/opencode/issues/3682)) and session-title behavior indicate demand for more customizable interface defaults.
2. **Better local/self-hosted model support** — Repeated Gemma, Qwen, Ollama, and GLM issues show users want first-class reliability for non-API models.
3. **Retry/backoff transparency** — Silent failures (minimax, Azure) drive requests for visible exponential retry and clearer error surfacing.
4. **Instruction/auto-execution workflows** — Confusion around `instructions` key in `opencode.json` ([#22879](https://github.com/anomalyco/opencode/issues/22879)) suggests the AGENTS.md / instruction system needs clearer execution semantics.

---

## Developer Pain Points

- **Model compatibility whack-a-mole** — Rapid API changes from OpenAI (`max_tokens` → `max_completion_tokens`), Anthropic (`thinking.type.enabled` deprecation), and Azure (reasoning item ordering) are causing frequent breakages that require patch releases.
- **Local-model tool execution is brittle** — Ollama/Qwen/Gemma users consistently report **fake success states**: tool calls look completed but files aren't written, or models enter infinite loops.
- **Auth/session reliability** — Provider OAuth loops, workspace auth not persisting, and 160-second freezes on provider startup (GitHub Copilot + WSL) erode trust in the connection layer.
- **Windows TUI stability** — `ENAMETOOLONG`, scroll bugs, and clipboard failures suggest the Windows terminal experience lags behind macOS/Linux.
- **Memory opacity** — The memory megathread shows users know there's bloat but lack tooling; maintainers' call for **manual heap snapshots** highlights the gap in built-in diagnostics.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-17

## 1. Today's Highlights
The Pi team shipped three rapid-fire patch releases (v0.67.4–v0.67.6) adding prompt-template argument hints, a `--no-context-files` escape hatch, and Opus 4.7 adaptive-thinking fixes across Anthropic and Bedrock. The issue tracker was exceptionally active with 50 updated tickets, driven by a wave of terminal-input regressions in Zellij/tmux and provider-specific caching and auth gaps.

---

## 2. Releases

| Version | Summary |
|---------|---------|
| **v0.67.6** | Prompt templates now support an `argument-hint` frontmatter field. Hints render in the `/` autocomplete dropdown using `<angle>` for required and `[square]` for optional arguments. [docs/prompt-templates.md#argument-hints](https://github.com/badlogic/pi-mono/blob/main/docs/prompt-templates.md#argument-hints) |
| **v0.67.5** | Fixed Opus 4.7 adaptive-thinking configuration on both Anthropic and Bedrock providers, mapping `xhigh` reasoning to provider-supported effort values. [#3286](https://github.com/badlogic/pi-mono/pull/3286) |
| **v0.67.4** | Added `--no-context-files` (`-nc`) flag to disable automatic `AGENTS.md` / `CLAUDE.md` discovery; also exported `loadProjectContextFiles()` as a standalone utility for extensions. [README.md#context-files](https://github.com/badlogic/pi-mono/blob/main/README.md#context-files) |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#3259](https://github.com/badlogic/pi-mono/issues/3259) | **Shift+Enter newline broken inside Zellij** | A pure regression in v0.67.3 that broke multi-line input for Zellij users. | 11 comments; fixed same day by [#3296](https://github.com/badlogic/pi-mono/pull/3296). |
| [#3167](https://github.com/badlogic/pi-mono/issues/3167) | **Multiline paste emits CSI-u escapes in tmux** | Pasting from scrollback injects garbage sequences, breaking copy-paste workflows. | 9 comments; linked to prior terminal-protocol debt. |
| [#3196](https://github.com/badlogic/pi-mono/issues/3196) | **Prompt caching broken for OpenAI-compatible proxies** | `openai-responses` path omitted cache-routing headers, causing 100 % cache misses on proxies like LiteLLM. | 8 comments; partially fixed by [#3264](https://github.com/badlogic/pi-mono/pull/3264) and [#3266](https://github.com/badlogic/pi-mono/pull/3266). |
| [#1155](https://github.com/badlogic/pi-mono/issues/1155) | **Add Vertex AI provider for Anthropic Claude** | GCP users are locked out of Claude because the `google-vertex` provider only supports Gemini paths. | 7 comments; long-standing enterprise blocker. |
| [#3305](https://github.com/badlogic/pi-mono/issues/3305) | **`/import` crashes the Pi session** | A hard exit on `.jsonl` import makes conversation recovery impossible. | 7 comments; closed rapidly. |
| [#3005](https://github.com/badlogic/pi-mono/issues/3005) | **Make "UPDATE AVAILABLE" toggleable** | NixOS and managed-env users are spammed with a non-actionable banner. | 6 comments, 2 👍; reflects packaging friction. |
| [#3103](https://github.com/badlogic/pi-mono/issues/3103) | **Markdown links should be OSC 8 clickable** | Modern terminals support hyperlinks, but Pi only styles them. Accessibility and UX gap. | 6 comments; resolved by [#3248](https://github.com/badlogic/pi-mono/pull/3248). |
| [#3301](https://github.com/badlogic/pi-mono/issues/3301) | **RTL Arabic text reversed on Windows** | Enterprise Windows adoption is blocked for Arabic-speaking teams. | 4 comments; macOS works, Windows bidi is flagged as "painful." |
| [#3299](https://github.com/badlogic/pi-mono/issues/3299) | **Add `max` thinking level for Opus 4.7** | Opus 4.7 exposes a five-rung API; Pi's ladder is one step behind. | 4 comments; feature request to keep model parity. |
| [#2469](https://github.com/badlogic/pi-mono/issues/2469) | **Clipboard image paste silently fails in WSL** | Windows-WSL is a huge user segment; image paste is completely non-functional there. | 4 comments, 3 👍; still open since March. |

---

## 4. Key PR Progress

| # | PR | What It Does |
|---|-----|--------------|
| [#3311](https://github.com/badlogic/pi-mono/pull/3311) | **Skip empty user messages and handle empty tool results** | Prevents `400` errors on strict providers (GLM-5, MiniMax) that reject empty `content` strings. |
| [#3307](https://github.com/badlogic/pi-mono/pull/3307) | **Fix Codex service-tier pricing** | Adds a Codex-specific resolver so cost computation is correct when the API echoes `default` instead of requested `flex`/`priority`. |
| [#3267](https://github.com/badlogic/pi-mono/pull/3267) | **Compact startup header and resource listings** | Collapses startup help with `ctrl+o` expansion and comma-separated lists, fixing overly verbose launch output. |
| [#3286](https://github.com/badlogic/pi-mono/pull/3286) | **Fix Opus 4.7 adaptive-thinking config** | Maps `xhigh` reasoning to the correct provider effort values on Anthropic and Bedrock. |
| [#3024](https://github.com/badlogic/pi-mono/pull/3024) | **Use `Promise.allSettled` for parallel tool execution** | Stops `afterToolCall` hook failures from swallowing results of sibling parallel tool calls. |
| [#3125](https://github.com/badlogic/pi-mono/pull/3125) | **Bedrock Bearer token auth for Converse API** | Unlocks Bedrock for users who have an API key but no IAM credentials / SigV4 setup. |
| [#2780](https://github.com/badlogic/pi-mono/pull/2780) | **Prompt-template `argument-hint` frontmatter** | Powers the new autocomplete argument hints shipped in v0.67.6. |
| [#2713](https://github.com/badlogic/pi-mono/pull/2713) | **Apply model switches to next queued request** | Makes mid-run model/reasoning changes take effect on the following turn without aborting the current stream. |
| [#3264](https://github.com/badlogic/pi-mono/pull/3264) | **Set session-id headers for all OpenAI-compatible responses** | Aligns with Codex behavior so prompt caching works on non-OpenAI proxies. |
| [#3248](https://github.com/badlogic/pi-mono/pull/3248) | **OSC 8 hyperlinks in Markdown** | Tracks active hyperlink state through `AnsiCodeTracker` and correctly re-emits OSC 8 sequences across line wraps. |

---

## 5. Feature Request Trends

1. **Thinking/reasoning ladder parity** — Users want Pi's abstraction to stay in lockstep with model-native tiers (latest: `max` for Opus 4.7, [#3299](https://github.com/badlogic/pi-mono/issues/3299)).
2. **Broader cloud provider coverage** — Vertex AI for Claude ([#1155](https://github.com/badlogic/pi-mono/issues/1155)) and Bearer-token Bedrock ([#3125](https://github.com/badlogic/pi-mono/pull/3125)) show sustained demand for GCP and AWS auth flexibility.
3. **TUI polish & accessibility** — OSC 8 links ([#3103](https://github.com/badlogic/pi-mono/issues/3103)), RTL/bidi support ([#3301](https://github.com/badlogic/pi-mono/issues/3301)), and quieter startup ([#3005](https://github.com/badlogic/pi-mono/issues/3005)) are recurring themes.
4. **Process observability for extensions** — Requests to expose `pid` in `BashOperations.exec` ([#2974](https://github.com/badlogic/pi-mono/issues/2974)) and cleaner RPC transports ([#3298](https://github.com/badlogic/pi-mono/pull/3298)) point to a growing extension ecosystem.

---

## 6. Developer Pain Points

- **Terminal multiplexers are fragile** — Zellij and tmux accounted for multiple high-comment regressions this cycle: Shift+Enter ([#3259](https://github.com/badlogic/pi-mono/issues/3259)), CSI-u paste corruption ([#3167](https://github.com/badlogic/pi-mono/issues/3167)), and Ctrl+Alt shortcut parsing ([#3133](https://github.com/badlogic/pi-mono/issues/3133)). The maintainers are landing fixes, but the churn suggests the input stack needs hardening.
- **Provider-specific caching and auth gaps** — OpenAI-compatible proxies miss cache headers ([#3196](https://github.com/badlogic/pi-mono/issues/3196)), Bedrock required SigV4-only until this week ([#3125](https://github.com/badlogic/pi-mono/pull/3125)), and Vertex AI Claude is still unsupported ([#1155](https://github.com/badlogic/pi-mono/issues/1155)). Enterprises on non-standard routes feel second-class.
- **Windows/WSL second-tier experience** — Clipboard image paste is silently broken ([#2469](https://github.com/badlogic/pi-mono/issues/2469)) and RTL text renders backwards ([#3301](https://github.com/badlogic/pi-mono/issues/3301)), blocking adoption for international Windows teams.
- **Tooling edge-cases in the coding agent** — `find` glob patterns with directories return empty ([#3302](https://github.com/badlogic/pi-mono/issues/3302)), nested `.gitignore` rules leak across siblings ([#3303](https://github.com/badlogic/pi-mono/issues/3303)), and bash exit-code 1 is over-eagerly treated as error ([#3051](https://github.com/badlogic/pi-mono/issues/3051)). These paper-cuts degrade agent reliability.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-17

## 1. Today's Highlights
The Qwen Code community is reeling from a sudden wave of **401 authentication errors** affecting OAuth users globally, coinciding with a controversial proposal to slash the free tier from 1,000 to 100 requests/day and close it entirely. Meanwhile, the maintainers pushed **v0.14.5-nightly.20260416** and merged several UX and core stability PRs, including fixes for truncated tool calls and file-descriptor exhaustion.

---

## 2. Releases
**[v0.14.5-nightly.20260416.a6612940f](https://github.com/QwenLM/qwen-code/compare/v0.14.5...v0.14.5-nightly.20260416.a6612940f)** — Latest nightly build released 2026-04-16. No detailed changelog was published beyond the Git tag comparison.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | **Qwen OAuth Free Tier Policy Adjustment** | Proposes cutting the free tier to 100 req/day and sunsetting it entirely by April 20. This directly impacts the project's accessibility and growth. | **83 comments** — the most active thread by far; heated debate with strong pushback from hobbyists and indie developers. |
| [#3335](https://github.com/QwenLM/qwen-code/issues/3335) | **401 invalid access token or token expired** | Closed as duplicate, but represents a massive outage pattern: users on v0.14.5 suddenly cannot authenticate. | 13 comments, 3 upvotes; users confirming the bug across macOS/Node.js stacks. |
| [#1855](https://github.com/QwenLM/qwen-code/issues/1855) | **OAuth session persists after switching to Coding Plan API key** | Root-cause explanation for many 401s: stale OAuth tokens override newly purchased API keys, causing paying users to be locked out. | 9 comments; frustrated users who paid but still hit auth walls. |
| [#3314](https://github.com/QwenLM/qwen-code/issues/3314) | **报错：Internal error: 401 invalid access token** | Chinese-language duplicate of the 401 surge, showing the geographic breadth of the incident. | 7 comments; Windows users heavily represented. |
| [#3365](https://github.com/QwenLM/qwen-code/issues/3365) | **Burn in the Chinese hell** | Toxic venting from a user impacted by the auth/free-tier changes; signals severe community trust erosion. | 6 comments; flagged for moderation, but indicative of sentiment. |
| [#3351](https://github.com/QwenLM/qwen-code/issues/3351) | **Internal error: 401 invalid access token** | Another open 401 report on macOS darwin x64, confirming the issue is not architecture-specific. | 6 comments; no maintainer response yet. |
| [#3348](https://github.com/QwenLM/qwen-code/issues/3348) | **Internal error: 401 invalid access token (VS Code extension)** | Highlights that the breakage extends to the **Qwen Code Companion Preview** extension, not just CLI. | 3 comments, 5 upvotes; extension users are alarmed. |
| [#1210](https://github.com/QwenLM/qwen-code/issues/1210) | **better config and data location by XDG Base Directory** | Long-standing quality-of-life request for Linux users to respect `~/.config` instead of dumping files in `~/.qwen`. | 3 comments, 6 upvotes; steady community support, marked `welcome-pr`. |
| [#3240](https://github.com/QwenLM/qwen-code/issues/3240) | **关于文档的默认语言 (Default language for docs)** | Request to default documentation to Chinese given the product's domestic origins, touching on localization strategy. | 3 comments; culturally charged discussion about international vs. local audience. |
| [#3357](https://github.com/QwenLM/qwen-code/issues/3357) | **we're cooked — no free api anymore** | Succinct community despair over the free-tier removal; meme-title belies genuine concern about project sustainability for non-paying users. | 3 comments; rapidly upvoted in spirit if not in count. |

---

## 4. Key PR Progress

| # | PR | Description | Impact |
|---|-----|-------------|--------|
| [#3375](https://github.com/QwenLM/qwen-code/pull/3375) | **ci(stale): enable 35+35 stale/close policy for PRs** | Fixes a broken `if` guard in `stale.yml` that referenced `google-gemini/gemini-cli`, causing 46+ PRs to languish untouched. | Repo hygiene; will finally auto-close abandoned contributions. |
| [#3319](https://github.com/QwenLM/qwen-code/pull/3319) | **feat(cli): add early input capture to prevent keystroke loss** | Buffers stdin keystrokes during REPL initialization (200–500 ms) and replays them once ready. | Fixes a long-standing UX papercut where fast typists lose input on startup. |
| [#3328](https://github.com/QwenLM/qwen-code/pull/3328) | **feat(cli): localize slash command descriptions** | Adds full i18n coverage for slash commands, including runtime translation caching for dynamic descriptions. | Major accessibility win for non-English users; closes [#3323](https://github.com/QwenLM/qwen-code/issues/3323). |
| [#3303](https://github.com/QwenLM/qwen-code/pull/3303) | **fix(editor): detect Zed.app on macOS when CLI is not in PATH** | Detects Zed via macOS `.app` bundle location even when `zed` CLI is unavailable. | Improves editor integration for a growing segment of macOS developers. |
| [#3214](https://github.com/QwenLM/qwen-code/pull/3214) | **feat(core): replace fdir crawler with git ls-files + ripgrep fallback** | Replaces slow full-directory re-scans with `git ls-files` for `@` file-mention autocomplete, respecting `.gitignore`. | Performance and accuracy improvement on large repositories. |
| [#3352](https://github.com/QwenLM/qwen-code/pull/3352) | **feat(cli): add dual-output sidecar mode for TUI** | Adds `--json-fd` / `--json-file` structured event streaming alongside normal TUI output, plus JSONL command ingestion. | Enables headless automation and third-party tooling without sacrificing interactivity. |
| [#3313](https://github.com/QwenLM/qwen-code/pull/3313) | **fix(core): recover from truncated tool calls via multi-turn continuation** | Detects `max_tokens`-truncated tool calls (e.g., large `WriteFile`) and gracefully continues across turns. | Closes [#3049](https://github.com/QwenLM/qwen-code/issues/3049); eliminates cryptic `params must have required property 'file_path'` failures. |
| [#3297](https://github.com/QwenLM/qwen-code/pull/3297) | **fix(tool-registry): add lazy factory registration with inflight concurrency dedup** | Fixes a P0 race where `ensureTool()` could instantiate the same tool twice, leaking event listeners. | Core stability; prevents subtle memory leaks and duplicate subagent manager hooks. |
| [#3320](https://github.com/QwenLM/qwen-code/pull/3320) | **fix(core): limit skill watcher depth to prevent FD exhaustion** | Caps skill file watcher recursion depth to stop `node_modules`-induced descriptor exhaustion. | Fixes silent shell I/O breakage caused by `node-pty` callback starvation. |
| [#3315](https://github.com/QwenLM/qwen-code/pull/3315) | **fix(core): strip thinking blocks from history on model switch** | Removes `reasoning_content` from conversation history when switching to non-reasoning providers. | Prevents 422 validation errors on strict OpenAI-compatible endpoints mid-session. |

---

## 5. Feature Request Trends

1. **Localization & i18n** — Multiple requests for Chinese-first docs ([#3240](https://github.com/QwenLM/qwen-code/issues/3240)) and full slash-command localization ([#3323](https://github.com/QwenLM/qwen-code/issues/3323), addressed by [#3328](https://github.com/QwenLM/qwen-code/pull/3328)). The community is pushing for a product that feels native in both Chinese and international contexts.

2. **XDG / Clean Config Management** — Linux users want standard `XDG_Base_Directory` compliance ([#1210](https://github.com/QwenLM/qwen-code/issues/1210)) and clean uninstall scripts ([#3324](https://github.com/QwenLM/qwen-code/issues/3324)), reflecting a broader demand for professional-grade system integration.

3. **Agent Orchestration & Observability** — PRs like [#2886](https://github.com/QwenLM/qwen-code/pull/2886) (Agent Team), [#3076](https://github.com/QwenLM/qwen-code/pull/3076) (background agents), and [#3229](https://github.com/QwenLM/qwen-code/pull/3229) (subagent `/stats` attribution) show heavy investment in multi-agent workflows. Users want parallelism, transparency, and control.

4. **Programmatic / Headless Interfaces** — The dual-output sidecar mode ([#3352](https://github.com/QwenLM/qwen-code/pull/3352)) and API preconnect ([#3318](https://github.com/QwenLM/qwen-code/pull/3318)) indicate demand for embedding Qwen Code into pipelines, CI systems, and IDE extensions.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Sudden, mass 401 authentication failures** | [#3335](https://github.com/QwenLM/qwen-code/issues/3335), [#3314](https://github.com/QwenLM/qwen-code/issues/3314), [#3351](https://github.com/QwenLM/qwen-code/issues/3351), [#3348](https://github.com/QwenLM/qwen-code/issues/3348), [#3366](https://github.com/QwenLM/qwen-code/issues/3366), [#3373](https://github.com/QwenLM/qwen-code/issues/3373) | **Critical** — The dominant issue of the last 24h. OAuth tokens are expiring or being rejected en masse, affecting CLI and VS Code extension users globally. |
| **Free-tier uncertainty and bait-and-switch anxiety** | [#3203](https://github.com/QwenLM/qwen-code/issues/3203), [#3357](https://github.com/QwenLM/qwen-code/issues/3357), multiple toxic rage-issues from `svfolder` | **High** — Trust in the project's pricing stability is eroding rapidly. The proposed 90% quota cut and sunset date created a backlash firestorm. |
| **OAuth ↔ API key migration friction** | [#1855](https://github.com/QwenLM/qwen-code/issues/1855) | **High** — Users who try to convert from free OAuth to paid Coding Plan API keys are still blocked by stale session state. |
| **TUI rendering glitches** | [#3330](https://github.com/QwenLM/qwen-code/issues/3330) (cmux flicker), [#3259](https://github.com/QwenLM/qwen-code/issues/3259) (buffer freezing) | **Medium** — Terminal UX remains rough compared to competitors like Codex and Claude Code. |
| **Stale PR backlog & maintenance velocity** | [#3375](https://github.com/QwenLM/qwen-code/pull/3375) (46 PRs idle >5 weeks) | **Medium** — A literal copy-paste error in the stale-bot config (`google-gemini/gemini-cli`) left the queue unmanaged, signaling resourcing or process gaps. |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*