# AI CLI Tools Community Digest 2026-06-17

> Generated: 2026-06-17 00:44 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Agent Ecosystem

**Date:** 2026-06-17
**Analysis Scope:** 9 major AI CLI tools
**Method:** Quantitative issue/PR/release tracking + qualitative signal extraction from community digests

---

## 1. Ecosystem Overview

The AI CLI agent ecosystem is in a period of **intense convergence on maturity**. The initial wave of proving that agents can work has passed — every active project is now grappling with the same class of production-grade problems: context window management, multi-agent orchestration reliability, cross-platform stability, and token cost predictability. The competitive differentiation has shifted from "can the agent do it" to **"can the agent do it reliably at scale, across providers, without wasting your evening debugging hangs."** Two macro-standards — MCP for tool/plugin interoperability and OAuth-based auth — are rapidly becoming table stakes, while a quieter but critical battle is playing out around **session lifecycle management** (goals, loops, compaction, persistence). The ecosystem is fragmenting into two tiers: platforms with the resources to invest in systemic hardening (Claude Code, Gemini CLI, OpenCode) versus tools that carve niches through provider breadth, regional UX, or open extensibility (Pi, Kimi, Qwen Code, CodeWhale).

---

## 2. Activity Comparison

| Tool | Updated Issues (24h) | Updated PRs (24h) | Release Today | Most Discussed Issue | Upvotes on Top Issue |
|------|---------------------|-------------------|---------------|----------------------|---------------------|
| **Claude Code** | 10 tracked + PR-activity on 18 | 14 (contributor AZERDSQ131: 12+) | ✅ v2.1.179 | CLAUDE.md lost after compaction | 👍 9 |
| **OpenAI Codex** | 10 hot + many background | 10+ (incl. 10-PR automations stack) | ✅ 4 alpha releases | #14593 Token burn rate | 👍 269 |
| **Gemini CLI** | 50 issues + 28 PRs | 10+ focused | ❌ None | #21409 Generalist agent hangs | 👍 8 |
| **Copilot CLI** | 18 issues | 0 PRs updated | ❌ None (v1.0.63 prev. 2 days) | #3687 Windows ARM64 crash | 👍 1 |
| **Kimi CLI** | 4 issues | 1 | ❌ None | MCP 400 stale discovery | 👍 0 |
| **OpenCode** | 10 hot issues tracked | 10+ | ❌ None | #27167 `/goal` session management | 👍 87 |
| **Pi** | 18 issues tracked | 9 (mostly merged) | ✅ v0.79.5 + v0.79.6 | #4945 OpenAI Codex connection hangs | 👍 30 |
| **Qwen Code** | 10 tracked | 10 | ✅ v0.18.1 + nightly | #3203 Free tier policy change | 👍 — (136 comments) |
| **CodeWhale** | 19 issues | 7 | ✅ v0.8.61 (rebrand) | #2487 Turn stalls unrecoverably | 👍 1 |

**Key Observations:**
- **OpenCode** drives the most concentrated single-issue engagement (👍87 on `/goal`), suggesting a highly opinionated community with strong product instincts.
- **OpenAI Codex's** token burn issue (#14593) dominates all community discussion across the ecosystem by engagement volume (612 comments, 👍269) — this is the single largest trust deficit in the space right now.
- **Gemini CLI** leads in raw issue+PR throughput (78 total updates), indicating a repository in active iteration even without a release.
- **Copilot CLI** shows a notable problem: 18 new/updated issues with zero PR updates in the same window, suggesting a triage bottleneck.
- **Claude Code** has the most coordinated contributor push (AZERDSQ131 responsible for 12 of 14+ PRs) — infrastructure hardening at scale.

---

## 3. Shared Feature Directions

| Shared Need | Tools Affected | Specific Manifestation |
|-------------|---------------|----------------------|
| **Context compaction reliability** | Claude Code, OpenCode, Pi, CodeWhale | Compaction should not silently destroy project rules (CLAUDE.md), lose conversation history, or fail to make progress on empty repos. This is the #1 quality-of-life concern across four independent projects. |
| **Multi-agent orchestration & reliability** | Claude Code, OpenCode, Copilot CLI, Qwen Code, CodeWhale, Gemini CLI | Compounding failures: subagents ignoring parent rules (Claude Code), running on wrong models (Copilot CLI), crashing mid-task (Qwen), blocking and deadlocking (CodeWhale, OpenCode), or hanging indefinitely (Gemini). Every team is now building in session trees, shared budgets, and loop detection. |
| **MCP ecosystem maturity** | All 9 tools | Process lifecycle & orphaned child processes (Claude Code), tool loss in subagents (Copilot CLI), OAuth token atomicity (Gemini, OpenCode), auto-discovery consistency (Kimi CLI, OpenCode), bad URI scoping (Gemini). MCP is becoming a lingua franca, but the integration quality surface is enormous and under-tested. |
| **Token/cost predictability & budgeting** | OpenAI Codex, Claude Code, OpenCode, Pi | Opaque billing math (Claude Code Pro/Max tiers), rapid unpredicted burn (Codex #14593), missing usage indicators (Codex Desktop), and infinite token-burn loops (OpenCode). Users demand session-level budgets and real-time visibility. |
| **Session lifecycle management** | OpenCode, Qwen Code, Claude Code, CodeWhale, Pi | `/goal`, `/loop`, persistent sessions, remote-control handoff, worktree lifecycle, archival/restore. Users want to "set and remember" intent — not rebuild context every session. |
| **Cross-platform parity (especially Windows)** | Claude Code, Pi, CodeWhale, Copilot CLI | WSL2 regressions, glibc version conflicts, CP-1252 encoding corruption, ARM64 hard crashes, PATH issues on removable drives. Windows is consistently the second-class citizen. |
| **Subagent fidelity & transparency** | Claude Code, Copilot CLI, Gemini CLI, OpenCode | Three shared frustrations: subagents executing on wrong/degraded models without user knowledge, silently ignoring project rules, and propagating misleadingly positive status on failure. |

---

## 4. Differentiation Analysis

### Feature Focus Matrix

| Tool | Primary Focus | Distinctive Strength | Technical Approach & Target User |
|------|--------------|---------------------|----------------------------------|
| **Claude Code** | Autonomous multi-agent coding at scale | CLAUDE.md project context system; aggressive internal security hardening | Tightly coupled with Anthropic API; targets professional dev teams running long autonomous sessions |
| **OpenAI Codex** | App-server + desktop + CLI unified platform | Automations framework (10-PR stack); agent SDK backbone | Rust core, SQLite session model, app-server architecture; targets developers building agent-powered applications |
| **Gemini CLI** | Agent quality & evaluation infrastructure | AST-aware tooling EPICs; behavioral evaluations; strong MCP security posture | Google's internal quality framework; targets quality-conscious engineers and Google Cloud ecosystem users |
| **Copilot CLI** | Enterprise model policy integration | GitHub ecosystem integration; enterprise admin model governance | Tightest VS Code/GitHub lock-in; targets enterprises and teams standardized on GitHub Copilot |
| **OpenCode** | Open extensibility & provider freedom | Plugin pipeline middleware; LAN provider discovery; configurable model fallback chains | Provider-agnostic architecture (10+ providers); targets power users and self-hosted model enthusiasts |
| **Kim i CLI** | Chinese LLM ecosystem integration | Moonshot API native support; thinking-mode UX controls | Regional focus with Chinese model support; targets developers in China using domestic LLM providers |
| **Pi** | Provider breadth & transport flexibility | Provider-scoped environment overrides; Vercel AI Gateway attribution; Nix support | Rust + TypeScript hybrid; transport-layer focus; targets devs routing multiple providers through one client |
| **Qwen Code** | Claude Code parity for Chinese market | `/loop` automation, Dynamic Workflows port; multi-channel bot adapters (QQ, WeChat, DingTalk, Feishu) | Alibaba Cloud ecosystem; targets Chinese developers wanting Claude Code-level features on Qwen models |
| **CodeWhale** | UX polish & multi-provider TUI | Hippocampal Memory v2; hotbar + slash command binding; in-rewrite 0.9.0 architecture | Rust TUI-first; privacy-conscious segment wanting DeepSeek-like UX with broader provider support |

### Target User Archetypes

| Archetype | Best Fit Tool(s) | Rationale |
|-----------|-----------------|-----------|
| **Enterprise, locked into GitHub ecosystem** | Copilot CLI | Single-pane corporate governance; model policy from admin dashboard; VS Code parity |
| **Autonomy-maximist (overnight agents)** | Claude Code, Qwen Code | Best CLAUDE.md context propagation + multi-agent coordination; planned `/goal`/`/loop` workflows |
| **Provider-agnostic power user** | OpenCode, Pi | Most provider options; infrastructure for self-hosted; fallback chains; plugin architecture |
| **Quality & reliability focused** | Gemini CLI | Strongest evaluation framework investment; security path forward; AST-aware agent UX |
| **Chinese market / domestic LLM users** | Kimi CLI, Qwen Code | Native Moonshot/Alibaba integration; Chinese messaging platform adapters; Chinese-language UX |
| **Embedded / automation builder** | OpenAI Codex | Automations framework; app-session SDK; durable scheduling primitives built into core |
| **Lightweight, terminal-centric** | CodeWhale, Pi | TUI polish; session memory; minimal desktop footprint; focused provider breadth |

---

## 5. Community Momentum & Maturity

### Momentum Tier Map

**🔥 Highest Velocity**
- **OpenAI Codex**: 4 automated alpha releases in 24h; 10-PR feature stack landing; 612-comment engagement on burn issue. Core team is shipping at breakneck speed, but the burn issue signals a trust gap.
- **Gemini CLI**: 78 total issues+PRs updated (highest throughput); deep in architectural EPICs, security hardening, and eval infrastructure. Communicates caution — prioritizing groundwork over flashy releases.
- **Qwen Code**: 2 releases, 10 active PRs, coordinated `/loop` staged build. Clear roadmap execution, tight alignment to Claude Code feature parity.

**📈 Active & Steady**
- **Claude Code**: 18+ PRs, 1 release, dominant single-contributor hardening sprint. Mature and disciplined — fixes are surgical, not splashy. Compaction bug closure pattern suggests systemic fix is arriving.
- **OpenCode**: 10+ PRs, highest per-issue engagement of any tool (👍87 community signal). Very strong community voice — roadmap is visibly shaped by user demand.
- **Pi**: 2 patch releases, 6+ PRs merged in window. Mature contributor patterns (mitsuhiko leading core features); well-scoped, incremental improvements.

**🔄 Building / Niche**
- **CodeWhale**: 1 release (rebrand milestone), 7 PRs, strong niche community (19 issues). The 0.9.0 v0.9.0 EPIC signals a major coming architectural investment; post-rebrand consolidation phase.
- **Copilot CLI**: 0 PRs, 18 issues accumulating. Despite a recent stable release (v1.0.63), the zero-PR throughput in 24h while issues pile up is a risk signal. Enterprise users notice.

**🌱 Early Stage**
- **Kimi CLI**: 4 issues, 1 PR, no releases. The "LLM not set" fresh-install experience and MCP auto-discovery bugs are critical first-impression issues. Low activity suggests small team; needs to invest in onboarding UX urgently.

### Maturity Indicators

| Indicator | Leaders |
|-----------|---------|
| **Release regularity & quality** | Claude Code, Pi, Qwen Code (disciplined patch cadence) |
| **Security consciousness** | Gemini CLI (path blocklist, OAuth atomics, supply-chain pinning) |
| **Community responsiveness** | OpenCode (👍87 on `/goal`), OpenAI Codex (engaging#14593 directly) |
| **Regression management** | Claude Code (WSL2 rollback fix), Pi (PathUri serde revert — fast rollback) |
| **Documentation alignment** | Gemini CLI, Qwen Code (both shipping docs-in-release to fight drift) |

---

## 6. Trend Signals

### Trend 1: The Compaction-Plus-Context Crisis Is the Industry's #1 Bug
Context compaction was supposed to be the elegant solution to long sessions — instead, it's the source of the most-reported silent data-loss bug across Claude Code (CLAUDE.md dropped), CodeWhale (session history lost), and OpenCode (infinite loops). Expect the entire industry to converge on **compaction Rule 1: never evict project rules; always propagate to subagents** within 2 quarters. Solutions like OpenCode's merged compaction loop guard are templates others will copy.

### Trend 2: Automations Are the Next Feature Frontier
OpenAI Codex's 10-PR automations stack is the largest single coordinated feature investment in the ecosystem right now. Qwen Code's `/loop` (with second-resolution wakeup engine), OpenCode's `/goal`, and Claude Code's persistent agent session requests all point to the same need: **users want to walk away from their terminal and let agents work on a schedule**. Tools that don't offer durable, schedulable automations by Q4 2026 will feel incomplete.

### Trend 3: MCP Becomes Table Stakes — and a Security Battlefield
Every single tool in this report is dealing with MCP integration issues at multiple levels: OAuth, URI scoping, orphaned processes, tool visibility in subagents, and server discovery. MCP is becoming the USB-C of AI tools — expected everywhere, but with a sprawling quality and security surface. The tools establishing best practices now (Gemini's MCP security PRs, OpenCode's `.mcp.json` approval gate request) will set community standards.

### Trend 4: Provider-Agnostic Becomes a Requirement, Not a Niche
The base expectation has shifted from "connects to OpenAI" to "connects to any provider, anywhere." Pi's provider-scoped environments, OpenCode's LAN discovery and model fallback chains, Qwen Code's multi-provider obsession, CodeWhale's DeepInfra/Moonshot/Novita additions — and Codex's Bedrock managed auth — all confirm this. **The agent client is becoming a universal LLM router.**

### Trend 5: Enterprise/Paid Users Are the Most Frustrated — and Most Valuable
The highest-engagement issues come from paying subscribers: Codex's token burn (#14593, 612 comments, 👍269), Claude Code's Pro/Max quota math, Copilot CLI's enterprise model governance gap. These users are hitting real production scaling limits — and they vocalize at 10x the rate of free users. Tools that solve **cost predictability** and **enterprise policy inheritance** will lock in the highest-value segment.

### Trend 6: The rebrand from DeepSeek TUI → CodeWhale marks a broader shift toward differentiation-by-experience
CodeWhale's Hippocampal Memory, hotbar UX, persona system (Ponytail), and 0.9.0 architectural EPIC show that TUI-first tools are choosing to **invest in differentiated UX** rather than compete on model access. As model access commoditizes, this is a signal other tools should note: the terminal experience itself becomes the product.

---

*Report generated by OWL · 2026-06-17 · Data synthesized from GitHub community activity across 9 AI CLI agent tools*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

*Data as of 2026-06-17 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The community's most-watched PRs cluster around four themes: document format support, skill-creator tooling reliability, meta/quality analysis, and frontend design. Here are the most-discussed entries:

| # | PR | Author | Theme | Status | Comment Highlight |
|---|---|---|---|---|---|
| 1 | **#514** — document-typography | PGTBoos | Typographic QC for AI-generated documents | 🟠 Open | Solves orphan word wraps, widow paragraphs, and numbering misalignment in every document Claude produces — a universal pain point. |
| 2 | **#486** — ODT skill | GitHubNewbie0 | OpenDocument (.odt/.ods) creation & HTML conversion | 🟠 Open | Covers LibreOffice-compatible document workflows, filling the gap left by the existing DOCX and PDF skills. |
| 3 | **#210** — frontend-design improvement | justinwetch | UI/UX skill clarity overhaul | 🟠 Open | Rewrites the frontend-design skill so every instruction is actionable within a single conversation. |
| 4 | **#83** — skill-quality-analyzer & skill-security-analyzer | eovidiu | Meta-quality tool | 🟠 Open | Evaluates skills across five dimensions (structure, security, performance). Moves these from an in-skill reference to a standalone marketplace skill. |
| 5 | **#568** — ServiceNow skill | Vanka07 | Enterprise platform | 🟠 Open | Broad ServiceNow assistant covering ITSM, ITOM, SecOps, FSM, and IntegrationHub. |
| 6 | **#723** — testing-patterns | 4444J99 | Software testing | 🟠 Open | Full-stack testing guide (Testing Trophy, AAA pattern, React Testing Library). |
| 7 | **#335** — masonry-image-video | junaid1460 | AI media generation | 🟠 Open | Text→image and text→video via Masonry CLI (Imagen 3.0, Veo 3.1). |
| 8 | **#154** — shodh-memory | varun29ankuS | Persistent memory | 🟠 Open | Gives Claude persistent cross-conversation memory via `proactive_context`. |

**Key takeaway:** Every PR in the top 20 remains open — the repo has a significant merge bottleneck.

---

## 2. Community Demand Trends

Distilling from the top 15 most-commented Issues:

### 2.1 Infrastructure Pain Points — The Bottleneck Cluster
Issue **#556** (12 comments, 👍7) reveals the single most-discussed bug: **`run_eval.py` reports 0% trigger rate for every skill description**, regardless of quality. This corrupts the entire `run_loop.py` → `improve_description.py` optimization pipeline. Because the description-optimization loop is the primary feedback mechanism for skill authors, this bug directly impacts the quality bar of *every* skill submitted to the repo.

Three follow-up PRs (#1099, #1050, #1298) and one follow-up Issue (#1169) trace the same root cause to Windows subprocess/encoding failures — suggesting a notable portion of contributors are on Windows and the Unix-first scripts block their participation.

### 2.2 Distribution & Platform Demand
- **Org-wide skill sharing** (Issue #228): Users want a shared library or direct sharing link instead of manual .file upload workflows.
- **Skills as MCPs** (Issue #16): Proposal to surface Skills as callable tools via the Model Context Protocol, enabling programmatic tool discovery.

### 2.3 Security & Governance
- **Trust boundary abuse** (Issue #492): Community skills distributed under the official `anthropic/` namespace create impersonation risk.
- **Agent governance** (Issue #412, closed): Policy enforcement, audit trails, and trust scoring for agent systems — demand exists but no merged solution yet.

### 2.4 Emerging Workflow Needs
- **Multi-file preload** (Issue #1220): Currently only `SKILL.md` is delivered into context; reference files must be manually read, breaking multi-file skill patterns.
- **Document format expansion**: ODT support (#486) and typographic quality control (#514) signal demand beyond the current PDF/DOCX coverag

---

## 3. High-Potential Pending Skills

These PRs are technically substantive and tied to active Issues or community pain points — strong candidates for near-term merging:

| PR | Why It Matters | Linked Issue |
|---|---|---|
| **#538** — PDF case-sensitivity fix | Fixes 8 broken file references; case-sensitive OS users cannot load the PDF skill at all | — |
| **#539** — YAML unquoted description validation | Prevents silent truncation of skill descriptions containing `:` — directly upstream of the eval pipeline bug | #361 |
| **#541** — DOCX tracked-changes ID collision | Fixes document corruption when adding tracked changes to DOCX files with existing bookmarks | — |
| **#1099** — Windows `run_eval.py` fix | Resolves `WinError 10038` preventing Windows users from running the eval pipeline | #1061 |
| **#1298** — `run_eval.py` comprehensive fix | Addresses 0% recall, Windows streams, detection logic, and parallel workers in one PR | #556, #1169 |
| **#1050** — Windows subprocess + encoding | 2-line fix: `claude.cmd` and encoding detection for Windows 11 | #1061 |
| **#509** — CONTRIBUTING.md | Closes community health gap (repo scored 25% on GitHub health metrics) | #452 |

**Priority recommendation:** The YAML validation fix (#539 → #361) and the eval pipeline fixes (#1099, #1298, #1050) are prerequisites for any other skill quality work to be measurable. Merging these first unlocks the rest of the pipeline.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is not for new domain-specific skills — it is for reliable, cross-platform skill-authoring infrastructure (validity → testability → debugging), without which every other skill contribution degrades in quality assurance.**

The data reveals a funnel problem: 20 high-interest PRs are open with no merges visible in the dataset, 15 top Issues show the most discussion around tooling bugs rather than feature requests, and the Windows compatibility Issues (#1061, #1050) indicate that a meaningful fraction of potential contributors are currently blocked from participation entirely. The community building skills is itself bottlenecked by skill-creator tooling.

---

*Report generated based on anthropics/skills data as of 2026-06-17.*

---

# Claude Code Community Digest — 2026-06-17

---

## 1. Today's Highlights

Claude Code shipped **v2.1.179** with critical stability fixes — mid-stream connection drops now preserve partial responses instead of erroring out, and WSL2 mouse-wheel scrolling is restored. The issue tracker saw heavy activity on **CLAUDE.md propagation bugs** (closed trio of related issues reaffirming context-compaction fragility), a fresh **macOS Tahoe desktop extension install failure**, and a concerning **skill-creator MCP memory leak** that can crash machines. Across PRs, contributor `AZERDSQ131` continues an aggressive sprint on internal script hardening — 14 PRs touch everything from shell injection fixes to Windows path normalization.

---

## 2. Releases

| Version | Highlights |
|---------|------------|
| **[v2.1.179](https://github.com/anthropics/claude-code/releases/tag/v2.1.179)** | • **Fixed** mid-stream connection drops — partial responses preserved instead of raw errors; spinner no longer stuck at "running tool".<br>• **Fixed** mouse-wheel scrolling in WSL2 under Windows Terminal and VS Code (regression introduced in v2.1.172).<br>• **Fixed** sandbox `denyR…` (truncated in changelog data). |

**Why it matters:** The connection-drop fix is the headline — long-running tool calls on flaky networks should no longer silently lose work. The WSL2 regression was a paperclip issue for Windows-first devs working in cross-platform setups.

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters |
|---|-------|--------|----------------|
| [#19471](https://github.com/anthropics/claude-code/issues/19471) | CLAUDE.md instructions ignored after context compaction | 🔒 Closed · 💬 27 · 👍 9 | The canonical compaction-rule-loss bug. Post-compaction, project-level CLAUDE.md directives were silently dropped. Closed without a clear fix noted — likely consolidated into a broader fix. High 👍 indicates this remains a top developer frustration. |
| [#47166](https://github.com/anthropics/claude-code/issues/47166) | JetBrains needs a real Claude AI Assist plugin | 💬 24 · 👍 1 | Duplicate of an existing request, but the sheer comment volume shows IntelliJ/Android Studio users are actively underserved by the current IDE integration. Signals demand for parity with the VS Code extension. |
| [#65514](https://github.com/anthropics/claude-code/issues/65514) | 1M context credits block Pro plan despite 17% usage | 💬 16 · 👍 2 | Duplicate of cost_limit confusion. Users hitting opaque "usage credits" walls — the 1M-context window has its own billing math that isn't transparent in-app. Frustration around cost predictability. |
| [#54393](https://github.com/anthropics/claude-code/issues/54393) | Post-mortem: 12 multi-agent coordination bugs in one overnight cycle | 💬 15 | A meta-issue cataloging failure modes when running multiple autonomous agents overnight. Not feature-specific — systemic reliability concern. Valuable for anyone building multi-agent pipelines. |
| [#52135](https://github.com/anthropics/claude-code/issues/52135) | Max (20x) weekly limit depletes 51% mid-week, ~17% in minutes | 🔒 Closed · 💬 14 · 👍 4 | Top-tier subscribers experiencing wildly unpredictable quota burn. Closed (stale), but the underlying model-token-accounting confusion remains a trust issue. |
| [#59309](https://github.com/anthropics/claude-code/issues/59309) | CLAUDE.md not propagated to subagents; degraded after compaction | 🔒 Closed · 💬 12 | Two-in-one rule-loss scenario: subagents ignore parent CLAUDE.md AND compaction weakens rule adherence. Triple-closed with #19471 and #29423 — strongly suggests a systemic fix shipped or is imminent. |
| [#29423](https://github.com/anthropics/claude-code/issues/29423) | Task subagents silently ignore project CLAUDE.md and .claude/rules/ | 🔒 Closed · 💬 11 · 👍 6 | Highest-👍 CLAUDE.md issue. Subagents running blind to project conventions is a code-quality risk for autonomous workflows. Closed as duplicate/consolidated. |
| [#68484](https://github.com/anthropics/claude-code/issues/68484) | Desktop extension silently fails on macOS Tahoe 26.5 | 💬 9 · 🆕 2026-06-14 | Fresh regression on the latest macOS point release. Silent failures with zero feedback are the worst UX pattern — users can't self-diagnose. High priority for a patch. |
| [#68933](https://github.com/anthropics/claude-code/issues/68933) | skill-creator leaks MCP child processes via headless `claude -p` — forced reboot | 💬 3 · 🆕 2026-06-16 | Skill-creator's eval harness boots a headless `claude -p` per test query; with MCP servers, each instance spawns its own MCP children that are never reaped. Real memory exhaustion risk. |
| [#68921](https://github.com/anthropics/claude-code/issues/68921) | Tool response diffing/delta for MCP tools to save context | 💬 2 · 🆕 2026-06-16 | MCP `browser_snapshot` dumps full accessibility trees (thousands of lines). Broadcasting each full response into the context window is wasteful. Delta/diff support could drastically reduce token burn. |

---

## 4. Key PR Progress

| # | PR | Significance |
|---|----|--------------|
| [#68786](https://github.com/anthropics/claude-code/pull/68786) | **fix(plugin-dev): avoid shell injection in test-hook.sh via stdin redirection** | Security fix. Unsanitized `$TEST_INPUT` inside `bash -c "..."` allows arbitrary command execution via crafted file paths. Stdin redirection eliminates the injection surface. |
| [#68689](https://github.com/anthropics/claude-code/pull/68689) | **fix(security-guidance): block symlink escape in extensibility config reads** | Prevents a malicious symlink in `CLAUDE_PLUGIN_ROOT` from escaping the plugin-sandbox boundary and reading arbitrary files on disk. Defense-in-depth for the extensibility model. |
| [#68693](https://github.com/anthropics/claude-code/pull/68693) | **fix(scripts): add duplicate label additively, don't replace** | Bug fix in issue-label management CI — previously, re-adding a label would overwrite the entire label set instead of appending. Prevents accidental metadata loss in triage workflows. |
| [#68699](https://github.com/anthropics/claude-code/pull/68699) | **fix(hookify): add Python wrapper and normalize plugin root paths on Windows** | Adds a Python wrapper for the hookify script (improving cross-platform maintainability) and fixes backslash-forward-slash mismatches in `CLAUDE_PLUGIN_ROOT` on Windows. First-class Windows support. |
| [#68678](https://github.com/anthropics/claude-code/pull/68678) | **fix(triage): don't mark Claude Desktop issues as invalid** | Corrects an overzealous triage classifier that was incorrectly fast-closing Desktop-app issues in the CLI repo. Process fix — stops loss of valid cross-cutting bugs. |
| [#68707](https://github.com/anthropics/claude-code/pull/68707) | **feat(bug-reporter): add /bug command to file GitHub issues from terminal** | New `/bug` slash command lets users create properly-formed GitHub issues without leaving their terminal session. Reduces friction for bug reporting; may improve issue quality with auto-collected env metadata. |
| [#68702](https://github.com/anthropics/claude-code/pull/68702) | **fix(ralph-wiggum): guard PROMPT_PARTS expansion against set -u on bash 3.x (macOS)** | Bounds macOS bash 3.x compatibility. `set -u` with empty arrays causes crashes in bash <4.0 — unguarded expansion is a common footgun. This fix keeps ralph-wiggum usable on stock macOS. |
| [#68682](https://github.com/anthropics/claude-code/pull/68682) | **fix(scripts/gh.sh): reject empty query for search issues command** | Input validation — prevents the script from making a blanket `gh issue search` with no predicate, which would dump the entire repo's issue list. Prevents accidental CI noise / rate-limit hits. |
| [#68785](https://github.com/anthropics/claude-code/pull/68785) | **fix(plugin-dev): hook JSON to stdout, tighten su* glob, fix CI detection** | Corrects example hook scripts that were writing JSON decisions to stderr (wrong stream) and had fragile glob patterns. Since these are reference implementations, correctness matters for plugin developers copying them. |
| [#46351](https://github.com/anthropics/claude-code/pull/46351) | **Enable PowerShell tool on macOS/Linux when pwsh is available** | Landed. Removes the Windows-only gate on the opt-in PowerShell tool (`CLAUDE_CODE_USE_POWERSHELL_TOOL=1`). Useful for cross-platform teams that rely on `pwsh` scripts in their build pipeline. |

**PR pattern note:** Contributor `AZERDSQ131` filed **12 of the 18** active PRs in this window — a coordinated push on script robustness covering shell injection, Windows path normalization, pagination edge cases, CI detection, and the new `/bug` reporter feature. This is infrastructure-quality work, not user-facing, but it materially reduces the attack surface and maintenance burden of the repo's own tooling.

---

## 5. Feature Request Trends

Aggregated from open issues and community discussion:

1. **JetBrains / IntelliJ Plugin Parity** — [#47166](https://github.com/anthropics/claude-code/issues/47166) has 24 comments. Users want a first-class IntelliJ/Android Studio extension on par with the VS Code extension, not just generic LSP integration.

2. **Persistent "agent" / remote-control session management** — [#46517](https://github.com/anthropics/claude-code/issues/46517) (auto-accept plan mode), [#60699](https://github.com/anthropics/claude-code/issues/60699) (in-session `/remote-control` toggle). Users who walk away from long-running sessions want handoff mechanisms without restarting context.

3. **CLAUDE.md fidelity guarantees across compaction and subagent boundaries** — The closed trio (#19471, #59309, #29423) and open #44166 (exempt CLAUDE.md from compaction) all point to a single demand: project rules must survive context window management and propagate to every spawned subagent.

4. **In-session determinism / reproducibility** — [#58933](https://github.com/anthropics/claude-code/issues/65514) requests a non-metered, deterministic execution path for CI/automation use cases. Users building pipelines on Claude Code want reproducible outputs without paying per-Agent-SDK-call.

5. **MCP tool response optimization** — [#68921](https://github.com/anthropics/claude-code/issues/68921) proposes delta/diff for MCP tool responses. As MCP adoption grows, the context-window cost of full tool responses (especially browser snapshots) becomes a scaling bottleneck.

6. **Desktop app IDE integration** — [#61306](https://github.com/anthropics/claude-code/issues/61306) asks for a `/ide` equivalent in the desktop app, so desktop users can connect to any supported IDE without dropping to CLI.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **CLAUDE.md / rules silently lost after compaction or in subagents** | Three closed issues (#19471, #59309, #29423) with 50+ combined comments and 16 👍. This is the single most-reported reliability issue. Developers cannot trust that project conventions survive long sessions or multi-agent delegation. |
| **Opaque cost / quota accounting** | #65514 (1M context credits), #52135 (Max plan depletion), #58933 (determinism for automation). Users on paid plans still can't predict when they'll hit limits. The gap between "20x" marketing and actual token math erodes trust. |
| **macOS Tahoe compatibility** | #68484 (silent desktop extension install failure). New macOS point releases are breaking the desktop extension with zero user feedback — a silent-failure anti-pattern. |
| **MCP process lifecycle management** | #68933 (skill-creator leaks MCP child processes). As MCP servers proliferate, the blast radius of orphaned child processes becomes a real stability and security concern. |
| **Windows / WSL2 second-class experience** | v2.1.179's WSL2 scroll fix, #68699 (Windows path normalization), #58732 (PATH polling on removable drives). Windows users consistently report regressions that macOS/Linux users don't see. |
| **Worktree / multi-session coordination fragility** | #62309 (worktree naming convention broken), #62431 (/exit removes worktree with live sessions), #65216 (worktree-relocated agents crash-loop). Teams running parallel Claude Code sessions on shared repos hit edge cases in worktree management. |
| **No in-terminal bug reporting workflow** | Addressed by PR #68707 (`/bug` command). Previously, filing a well-formed issue required leaving the terminal, manually collecting env info, and navigating GitHub — too much friction for effective bug reports. |

---

*Digest generated by OWL · Data source: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) · 2026-06-17*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-17

---

## 1. Today's Highlights

The Codex repository saw intense activity centered around **stability and reliability fixes** for the Desktop app on Windows and macOS — including session loss, RAM exhaustion, and plugin initialization failures. A major thread on **rapid token consumption** (#14593) continues to dominate community discussion with 612 comments, while a new **automations stack** (PRs #28609–#28618) signals the largest coordinated feature push in recent memory. The team also shipped three alpha releases (0.141.0-alpha.1 through .4), iterating quickly on core fixes.

---

## 2. Releases

Four alpha releases shipped in the last 24h, indicating rapid iteration on a pre-stable branch:

- **rust-v0.141.0-alpha.4** → **rust-v0.141.0-alpha.1** (4 releases)

These are sequential alpha bumps; detailed changelogs are embedded in the release notes on the [Codex releases page](https://github.com/openai/codex/releases). The pace suggests an upcoming stable 0.141.0 is being stress-tested, with the revert of the `PathUri` serde compat change (#28627) confirming the team is hardening rollout serialization.

---

## 3. Hot Issues

### 🔴 #14593 — Burning tokens very fast
**[bug, rate-limits]** · 612 comments · 👍 269 · [Link](https://github.com/openai/codex/issues/14593)
The single most-discussed issue on the repo. Users across Business plans report catastrophic token burn rates that drain quotas far faster than expected. With nearly 700 engagements, this is a top-priority concern for paid subscribers. The sheer volume of reports suggests a systemic issue rather than edge cases.

### 🔴 #23794 — Codex Desktop no longer shows visible context/token usage indicator
**[bug, context, app]** · 169 comments · 👍 168 · [Link](https://github.com/openai/codex/issues/23794) **[CLOSED]**
A regression removed the in-app token/context usage indicator from the Desktop app. Strong community consensus (👍 168) that visibility into consumption is critical for workflow planning. Closed — likely fixed in a recent patch, but worth monitoring for regression.

### 🟡 #21128 — Codex Desktop silently hides project conversations outside the global recent-50 window
**[bug, app, session]** · 26 comments · 👍 17 · [Link](https://github.com/openai/codex/issues/21128)
Older project threads effectively vanish from the UI without warning once they exceed the 50-session window. This undermines the Desktop app's reliability as a project management tool. Updated today — the team is likely engaging.

### 🟡 #28190 — rg is blocked by macOS
**[bug, CLI]** · 26 comments · 👍 40 · [Link](https://github.com/openai/codex/issues/28190)
macOS security policies (Gatekeeper / notarization interference) are preventing Codex CLI from invoking `ripgrep`. Highly upvoted (👍 40) and a workflow blocker for CLI-first developers on macOS.

### 🟠 #28507 — Selected model is at capacity
**[bug, rate-limits, app]** · 13 comments · 👍 11 · [Link](https://github.com/openai/codex/issues/28507)
Frequent "model at capacity" errors on Pro 5x plans. Complements #14593 as part of a broader rate-limit and quota frustration pattern among paying users.

### 🟠 #21211 — Thread navigation/loading slows from unbounded metadata and eager large-history hydration
**[bug, app, session, performance]** · 11 comments · 👍 2 · [Link](https://github.com/openai/codex/issues/21211)
SQLite-based thread navigation degrades as history grows unbounded. Supersedes #21154 and points to a deeper architectural issue in how conversation metadata is stored and loaded.

### 🟠 #25321 — Composer caret/input focus intermittently disappears on macOS
**[bug, app]** · 9 comments · 👍 4 · [Link](https://github.com/openai/codex/issues/25321)
Input focus randomly drops on macOS until the user switches app focus away and back. A UI polish issue but disruptive for continuous-typing workflows. Updated today.

### 🟠 #25154 — Codex Desktop App Windows Full Screen Issue
**[bug, windows-os, app]** · 9 comments · 👍 20 · [Link](https://github.com/openai/codex/issues/25154)
The Desktop app misbehaves in full-screen mode on Windows. Relatively high engagement for a platform-specific bug, indicating it affects a meaningful segment of Windows users.

### 🟠 #28095 — Archived chats show a Delete button, but deletion does not work
**[bug, app, session]** · 9 comments · 👍 4 · [Link](https://github.com/openai/codex/issues/28095)
Broken delete functionality for archived sessions is a data-management concern — users cannot clean up old chats despite the UI suggesting they can.

### ⚪ #28606 — Codex lost all chat history. Won't save settings.
**[bug, windows-os, app, session, config, performance]** · 3 comments · 👍 0 · [Link](https://github.com/openai/codex/issues/28606)
Freshly reported today (v26.611.61049). Total chat history loss and settings persistence failure on Windows — a user's worst-case scenario. One to watch closely for upvotes as affected users discover it.

---

## 4. Key PR Progress

### 🆕 PR #28609–#28618 — The Automations Stack (10 PRs by **eternal-openai**)
**[automations]** · [Groundwork #28609](https://github.com/openai/codex/pull/28609) + [#28610](https://github.com/openai/codex/pull/28610) · [#28611](https://github.com/openai/codex/pull/28611) · [#28612](https://github.com/openai/codex/pull/28612) · [#28613](https://github.com/openai/codex/pull/28613) · [#28614](https://github.com/openai/codex/pull/28614) · [#28615](https://github.com/openai/codex/pull/28615) · [#28616](https://github.com/openai/codex/pull/28616) · [#28617](https://github.com/openai/codex/pull/28617) · [#28618](https://github.com/openai/codex/pull/28618) · [#28620](https://github.com/openai/codex/pull/28620)
A landmark 10-PR stack building out a full **automations framework**: durable state store, scheduling, background worker loop, heartbeat dispatch, app-server CRUD protocol, and a new `automation_update` agent tool. This is the most architecturally significant work in the repo today — expect automations to be a flagship feature update.

### 🟢 PR #28494 — Add shared session token budgets
**[codex]** · [Link](https://github.com/openai/codex/pull/28494)
Introduces opt-in shared token budgets across root and all descendant threads. Directly addresses the token-consumption pain voiced in #14593 and #28541. Tracks a single ledger for an entire agent session tree.

### 🟢 PR #28148 — Experimental managed Amazon Bedrock login and logout
**[codex]** · [Link](https://github.com/openai/codex/pull/28148)
Adds managed credential lifecycle for Amazon Bedrock, following up on #27751. Enables app-server clients to create/remove AWS-managed Codex credentials. A meaningful expansion of the non-OpenAI provider ecosystem.

### 🟢 PR #28409 — Enforce exact managed config values
**[codex]** · [Link](https://github.com/openai/codex/pull/28409)
Hardens `requirements.toml` with exact-value enforcement for critical paths (`sqlite_home`, `log_dir`, `model_catalog_json`, sandbox config, etc.) and emits startup warnings on violations.

### 🟢 PR #28411 — Add keyed shell environment rules to config
**[codex]** · [Link](https://github.com/openai/codex/pull/28411)
Introduces a canonical keyed representation for shell environment include/exclude patterns, e.g. `"CORP_*" = "include"`. Cleaner and more maintainable than flat arrays for enterprise use cases.

### 🔧 PR #28628 — Repair invalid skill frontmatter scalars
**[codex]** · [Link](https://github.com/openai/codex/pull/28628)
Fixes YAML parsing failures in community skill marketplace frontmatter (unquoted scalars with `: ` patterns). Reduces friction for skill authors publishing to the marketplace.

### 🔧 PR #28629 / #28627 — Restore absolute turn context cwd / Revert PathUri serde compat
**[codex]** · [Link](https://github.com/openai/codex/pull/28629) · [Revert](https://github.com/openai/codex/pull/28627)
Corrects a breaking change from #28152 that made rollout reconstruction fail when `TurnContextItem.cwd` was converted to `PathUri`. The revert confirms this was a cross-version compatibility pitfall that needed immediate rollback.

### 🔧 PR #28624 / #28623 — Concurrent plugin and skill root loading
**[codex]** · [Link #28624](https://github.com/openai/codex/pull/28624) · [Link #28623](https://github.com/openai/codex/pull/28623)
Loads up to 8 plugins and skill roots concurrently with a shared, order-preserving, bounded (256 entries) `SkillRootLoader` cache. Addresses startup and thread-loading performance concerns raised in #21211.

### ⚒️ PR #28437 — Support PreToolUse `permissionDecision: ask` for native approval prompts
**[enhancement, hooks]** · [Link](https://github.com/openai/cidex/issues/28437)
Feature request to escalate `PreToolUse` hook decisions into native human approval prompts. Builds on prior work from closed PR #20702. Would enable safer tool-use workflows in production-sensitive environments.

---

## 5. Feature Request Trends

| Trend | Signal |
|---|---|
| **Automations / scheduled tasks** | The 10-PR automations stack is the largest coordinated feature push — clearly prioritized by the core team. |
| **Token budget controls** | PR #28494 + the massive discussion on #14593 and #28541 show strong demand for session-level budget caps and visibility. |
| **Session export & portability** | #13267 (export entire session via `/export`) has persisted since March with steady engagement. |
| **PreToolUse hook enhancements** | #28437 requests native approval modal support, building on an already-explored PR from the team. |
| **Multi-provider support** | Bedrock managed login (#28148) and config hardening (#28409/#28411) suggest enterprise/multi-provider extensibility is accelerating. |
| **Skill marketplace quality** | #28628 fixing frontmatter parsing reflects the growing importance of a healthy community skill ecosystem. |

---

## 6. Developer Pain Points

1. **Session & data loss on Windows** — #28606 (total history loss), #27353 (chats disappeared after update), #28241 (turn-diff tree refs breaking libgit2), and #24047 (update fails to relaunch) form a pattern of Windows Desktop instability. Windows users are the most frustrated platform segment.

2. **Token consumption opacity and speed** — The massive #14593 thread (612 comments, 269 upvotes) combined with the closed #23794 (removed usage indicator) shows that developers lack trust in how tokens are counted and consumed. This is the #1 pain point by a wide margin.

3. **Plugin/package resolution failures** — Multiple issues (#27287, #28121, #18803, #22927, #28622) point to Computer Use and plugin initialization being fragile across platforms — particularly around `@oai/sky` subpath exports and macOS runtime detection.

4. **macOS security interference** — #28190 (rg blocked by macOS) and #28024 (missing `NSLocalNetworkUsageDescription` for remote control) highlight that macOS privacy features create recurring friction for CLI and app-server workflows.

5. **Archived/broken session management** — #28095 (broken delete), #25341 (subagent threads polluting recent list), #21128 (vanishing project conversations) all reflect gaps in session lifecycle management within the Desktop app.

---

*OWL · 2026-06-17 · Data: github.com/openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-17

---

## 1. Today's Highlights

No new releases landed in the past 24 hours, but the community remains highly active with 50 issues and 28 PRs updated. Security hardening is a dominant theme — multiple PRs target path blocklist bypasses, OAuth token atomicity, and trust dialog disclosure flaws. On the agent front, a critical bug where subagents falsely report `GOAL` success after hitting `MAX_TURNS` is gaining traction, alongside continued investment in AST-aware tooling and evaluation infrastructure.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

**1. Generalist agent hangs indefinitely** — [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
Users report that when Gemini CLI defers to the generalist subagent, it hangs forever — even for trivial operations like folder creation. With 8 👍 and 7 comments, this is the most upvoted issue in the batch. The workaround (instructing the model not to use subagents) confirms this is a routing/loop detection failure.

**2. Subagent reports GOAL success after hitting MAX_TURNS** — [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
The `codebase_investigator` subagent returns `status: "success"` and `Termination Reason: "GOAL"` even when it hit the turn limit without doing meaningful analysis. This silently hides interruptions from users and undermines trust in subagent outputs.

**3. Robust component-level evaluations (EPIC)** — [#24353](https://github.com/google-gemini/gemini-cli/issues/24353)
Follow-up to the behavioral evals initiative — now at 76 tests across 6 Gemini models. This EPIC tracks building a more rigorous internal evaluation framework, which is critical as the agent surface area expands.

**4. AST-aware file reads, search, and mapping (EPIC)** — [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
Investigating whether AST-aware tools can reduce misaligned reads, cut token noise, and improve codebase navigation precision. A key architectural question for agent quality.

**5. Auto Memory security: deterministic redaction & reduced logging** — [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)
Auto Memory sends transcript content to a background extraction agent with only prompt-based redaction — meaning secrets can already be in model context before redaction occurs. A security-sensitive design concern.

**6. Auto Memory retrying low-signal sessions indefinitely** — [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)
If the extraction agent skips a session as "low-signal," it remains unprocessed and gets resurfaced repeatedly, creating an infinite loop of wasted background processing.

**7. Shell command execution stuck on "Waiting input"** — [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
After executing simple CLI commands, Gemini hangs showing "Awaiting user input" even though the command has finished. A recurring pain point with 4 comments and 3 👍.

**8. Browser Agent ignores settings.json overrides** — [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
The `BrowserAgent` bypasses global and project-level `settings.json` overrides (e.g., `maxTurns`), despite `AgentRegistry` correctly reading them at initialization. Undermines user configuration control.

**9. Subagents running without permission since v0.33.0** — [#22093](https://github.com/google-gemini/gemini-cli/issues/22093)
After the v0.33.0 update, subagents (e.g., generalist) activate automatically even when agent mode is disabled in all configurations. Users expected only MCP functionality to be affected.

**10. Agent should stop/discourage destructive behavior** — [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)
The model occasionally uses `git reset` or `--force` when safer alternatives exist. The community wants the agent to understand the dangers of destructive operations, especially around databases and branch management.

---

## 4. Key PR Progress

**1. Strip thoughts from scrubbed history turns** — [#27971](https://github.com/google-gemini/gemini-cli/pull/27971)
Fixes **thought leakage** where Gemini's internal reasoning leaks into plain-text history, confusing the model in subsequent turns and causing infinite monologue loops. A surgically targeted fix for a subtle but serious quality issue.

**2. Enforce case-insensitive sensitive path blocklist** — [#27966](https://github.com/google-gemini/gemini-cli/pull/27966)
Production-grade security fix for a case-insensitivity bypass in the path blocklist (`.git`, `.env`, `node_modules`) and a prompt injection vector. Enforces strict matching regardless of casing.

**3. Write MCP OAuth tokens atomically** — [#27664](https://github.com/google-gemini/gemini-cli/pull/27664)
Prevents token corruption by writing the legacy MCP OAuth token file through a temp file + atomic rename. Addresses a reliability gap in credential persistence.

**4. Refresh MCP OAuth with stored client ID** — [#27889](https://github.com/google-gemini/gemini-cli/pull/27889)
Fixes the OAuth refresh path when an auto-discovered server has no static `oauth.clientId` — the CLI now correctly uses the persisted discovered client ID from token metadata.

**5. Trust dialog discloses correct hook shape** — [#27915](https://github.com/google-gemini/gemini-cli/pull/27915)
Fixes an inversion bug where the workspace-trust dialog showed the *opposite* of which hooks would actually run, meaning `SessionStart` hooks could execute arbitrary shell commands without user awareness.

**6. Pin dependencies with 14-day update cooldown** — [#27948](https://github.com/google-gemini/gemini-cli/pull/27948)
Strips `^` and `~` ranges from all dependency fields and enforces a 14-day cooldown for automated dependency updates. A supply-chain hardening measure.

**7. Native drag-and-drop and clipboard image pasting** — [#27859](https://github.com/google-gemini/gemini-cli/pull/27859)
Adds first-class terminal drag-and-drop and `Cmd+V`/`Ctrl+V` clipboard image pasting — bringing visual multimodal parity to the CLI terminal experience.

**8. Scope flash model names per auth type** — [#27760](https://github.com/google-gemini/gemini-cli/pull/27760) *(merged)*
Fixes `hasGemini35FlashGAAccess()` to apply correct flash model names per backend (Vertex AI vs. Gateway vs. AI Studio), preventing resolution failures.

**9. MCP resource resolution scoping** — [#27964](https://github.com/google-gemini/gemini-cli/pull/27964)
Prevents cross-server URI confusion by failing closed when multiple connected MCP servers expose the same resource URI, stopping a second server from silently shadowing a trusted one.

**10. Defensive path resolution for @-reference files** — [#27943](https://github.com/google-gemini/gemini-cli/pull/27943) *(merged)*
Adds `resolveDefensiveToolPath` to strip leading `@` reference prefixes from LLM-generated file paths, integrated into `ReadFileTool`, `WriteFileTool`, and `EditTool`.

---

## 5. Feature Request Trends

- **AST-aware tooling** — Multiple EPICs (#22745, #22746, #22747) explore AST-aware file reads, searches, and codebase mapping to improve agent precision and reduce token waste.
- **Agent self-awareness** — [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) requests that Gemini CLI understand its own mechanics well enough to act as its own expert guide — accurate CLI flags, hotkeys, and self-execution instructions.
- **Better subagent orchestration** — Issues around subagent activation (#22093), skill/subagent utilization (#21968), and recovery semantics (#22323) point to demand for more reliable and transparent multi-agent workflows.
- **Multimodal terminal input** — The drag-and-drop/clipboard image pasting PR (#27859) responds to long-standing demand for visual input parity in the terminal.
- **Evaluation infrastructure maturity** — Continued investment in behavioral evals (#24353), steering evals (#23313), and project eval stability (#23166) signals a push toward production-grade quality assurance.

---

## 6. Developer Pain Points

- **Agent hangs and infinite loops** — The most visceral frustration: the agent hangs on shell commands (#25166), subagent delegation (#21409), and thought leakage loops (#27971). These erode trust in headless/automated workflows.
- **Silent failures and misleading status** — Subagents reporting success when they actually timed out (#22323), invalid Auto Memory patches silently skipped (#26523), and trust dialogs showing wrong hook info (#27915) all undermine debugging confidence.
- **Security surface area** — Multiple issues highlight gaps: secrets in model context before redaction (#26525), case-insensitive path blocklist bypasses (#27966), and unscoped MCP resource resolution (#27964). The community is actively pushing for defense-in-depth.
- **Configuration not respected** — Browser Agent ignoring `settings.json` (#22267), subagents activating when disabled (#22093), and symlinked agent files not recognized (#20079) point to configuration propagation inconsistencies.
- **Destructive operations without safeguards** — The model's willingness to use `git reset --force` or similar dangerous commands (#22672) remains a concern for developers working in production-adjacent environments.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-17

---

## Today's Highlights

The past 24 hours saw a surge of **18 updated issues** on `github/copilot-cli`, making it one of the busiest recent days for community activity — with no new pull requests landed yet. Themes cluster around **sub-agent model routing bugs** (#3824, #3823), **MCP tool visibility regressions** (#3812), and a steady stream of **TUI/permission UX wedges** (#3825, #3826). Version **v1.0.63** (released 2026-06-15) delivers a better error UX for blocked image attachments and alphabetical help-output sorting.

---

## Releases

### v1.0.63 (2026-06-15)

- **Blocked image attachments now guide, not just error.** When an image can't be processed, the CLI explains the available fixes — enable the *"Editor preview features"* policy, switch to a vision-capable model, or try a different image — instead of surfacing a confusing opaque error.
- **`--help` output options sort alphabetically**, including options that have two-letter shorthand flags, making polarBearrig-style flags easier to scan.

> No other release changes were listed in the data window.

---

## Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| [#3687](https://github.com/github/copilot-cli/issues/3687) | **copilot.exe fatal-aborts under load (BEX64 / 0xc0000409) on Windows ARM64** | Reproducible hard crash at the Windows structured-exception level across multiple CLI versions. Hits users with concurrent session restores on ARM64 — a growing platform for Surface/X-Elite machines. | 5 comments, 👍1 |
| [#1168](https://github.com/github/copilot-cli/issues/1168) | **Excessive authorization prompts ("authorization fatigue")** | A single high-level request (e.g. "investigate this PR") triggers **more than a dozen** consent dialogs, destroying flow state. This is a long-standing pain point (opened Jan 2026). | 2 comments, 👍2 |
| [#3824](https://github.com/github/copilot-cli/issues/3824) | **Sub-agents silently run a different model than the session model** | When the main agent is pinned to a specific model, spawned sub-agents (`explore`, `general-purpose`, etc.) frequently execute on a **different model** via agent-type defaults or experiment overrides — with zero user visibility. Breaks cost and capability predictability. | New today, 0 comments |
| [#3823](https://github.com/github/copilot-cli/issues/3823) | **`xhigh` reasoning effort silently downgraded to `medium` instead of `max`** | On models that don't support `xhigh` (e.g. claude-opus-4.6), the CLI falls back to the model default (`medium`) rather than clamping to the highest available level (`max`). Users paying for premium reasoning get silently degraded. | New today, 0 comments |
| [#3812](https://github.com/github/copilot-cli/issues/3812) | **Subagents can no longer access MCP tools** | Regression: custom sub-agents lost visibility into MCP tools that the top-level agent can still use. Root cause suspected to be deferred MCP tool loading. Breaks complex multi-agent workflows. | 1 comment |
| [#3825](https://github.com/github/copilot-cli/issues/3825) | **`--allow-all` read permissions leak to UI dispatcher and wedge the TUI** | Launching non-interactively or resuming with `--allow-all` causes read-permission requests to leak into the UI layer, wedging the TUI (no input box) on startup. | New today, 0 comments |
| [#3826](https://github.com/github/copilot-cli/issues/3826) | **"Operation cancelled by user" re-injected as a user message after cancel** | Cancelling a turn (Esc/Ctrl-C) causes the cancellation notice to be sent back to the model as a **new user message**, triggering a phantom reply. Pollutes conversation history. | New today, 0 comments |
| [#3730](https://github.com/github/copilot-cli/issues/3730) | **Support Enterprise-Managed Custom Models in Copilot CLI** | Enterprise admins can configure custom AI models in the Copilot Admin dashboard, but the CLI ignores them — creating a gap between VS Code and CLI experiences. | 1 comment, **👍4** (highest upvoted) |
| [#3518](https://github.com/github/copilot-cli/issues/3518) | **Add ability to unarchive / restore an archived project session** | Accidentally archiving a long-running orchestrator session (with child sessions and checkpoints) is currently irreversible. Users want an `unarchive` command. | 1 comment, 👍3 |
| [#3828](https://github.com/github/copilot-cli/issues/3828) | **ContentExclusionFilter.isExcluded crash (TypeError)** | The `rg` tool crashes with `TypeError: Cannot read properties of undefined (reading 'isExcluded')` from the CLI's `ContentExclusionFilter` class. Breaks search tool execution. | 1 comment |

---

## Key PR Progress

**No pull requests were updated in the last 24 hours.** The issue queue is building up without corresponding PR activity, suggesting the maintainers may be triaging or that fixes are still in-flight.

---

## Feature Request Trends

1. **Enterprise model parity** (#3730) — The most-upvoted request. Users want the CLI to respect enterprise-managed custom models and OpenAI-compatible endpoints configured in the Copilot Admin dashboard, matching VS Code behavior.

2. **Session lifecycle management** (#3518) — Demand for `unarchive` / restore capabilities for accidentally archived sessions, especially long-running orchestrator sessions with accumulated context.

3. **Async read-only slash commands** (#3829) — `/mcp show` and `/plugin list` should execute asynchronously (like `/tasks`) instead of blocking until after the agent turn completes.

4. **Skill directory scoping** (#3822) — `skillDirectories` should work at the repo level (not just global), enabling multi-repo and monorepo skill organization without file copying.

5. **Command hook matcher documentation** (#3820) — Clearer docs for `matcher` support on flat command hooks (e.g. running a linter only after file-edit tools).

6. **Rate-limit timezone clarity** (#3819) — When rate-limited, the CLI should display the reset time in a specific timezone rather than a bare relative duration.

---

## Developer Pain Points

- **Sub-agent opacity** is the dominant theme today. Three separate issues (#3824, #3823, #3812) reveal that sub-agents behave unpredictably — running on wrong models, with degraded reasoning effort, and without MCP tool access — and the user has **no visibility** into any of it.

- **Permission UX remains broken.** Between `--allow-all` wedging the TUI (#3825), authorization fatigue (#1168), and cancellation messages being re-injected as user input (#3826), the permission and TUI interaction model is a recurring source of friction.

- **Windows ARM64 stability** (#3687) continues to be a hard-crash issue with no resolution across multiple releases.

- **MCP ecosystem gaps** persist — from Figma Desktop MCP being misidentified as SSE (#2790) to sub-agent MCP tool loss (#3812) to async command execution (#3829).

- **No PR throughput** in the last 24 hours despite 18 updated issues signals a potential backlog that the community will be watching closely.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-17

---

## 1. Today's Highlights

No new releases landed in the past 24 hours. The community's attention is split between a critical MCP auto-discovery bug that can brick sessions with unfixable 400 errors, a fresh-install UX gap where new users get a cryptic "LLM not set" message with no guidance, and an ongoing push to raise the default max-steps-per-turn limit from 100.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

### 🔴 #2457 — Auto-discovered MCP server causes unfixable 400 errors after deletion
**Status:** OPEN · 0 comments · 👍 0
A user on Windows 10 / v0.15.0 reports that Kimi Code CLI auto-discovers an MCP server that was previously deleted, then repeatedly hits 400 errors with no way to recover within the session. This is a **session-killing bug** — once the stale MCP config is picked up, the user has no clear escape hatch. The issue has no maintainer response yet and deserves urgent triage.
🔗 [MoonshotAI/kimi-cli#2457](https://github.com/MoonshotAI/kimi-cli/issues/2457)

### 🔴 #2456 — Fresh install reports "LLM not set" with no guidance to run `login`
**Status:** OPEN · 0 comments · 👍 0
New users installing via Homebrew (`brew install kimi-cli`) hit `LLM not set` on any command invocation with zero indication that `kimi login` is the next step. This is a **first-impression blocker** — the CLI should detect an unauthenticated state and print a helpful hint rather than a bare error.
🔗 [MoonshotAI/kimi-cli#2456](https://github.com/MoonshotAI/kimi-cli/issues/2456)

### 🟡 #1327 — More steps per turn by default
**Status:** OPEN · 3 comments · 👍 0
The default cap of 100 steps per turn is hit surprisingly often, even when context utilization is only ~35%. The user argues the default is too conservative and wastes available context budget. Three community members have chimed in — this is a recurring friction point for long-running agentic tasks.
🔗 [MoonshotAI/kimi-cli#1327](https://github.com/MoonshotAI/kimi-cli/issues/1327)

### 🟢 #1632 — Option to hide thinking content while using thinking models *(CLOSED)*
**Status:** CLOSED · 2 comments · 👍 3
Users want the ability to suppress the real-time "Thinking…" spinner and grey italic stream when using thinking-capable models (e.g., `kimi-k2-thinking-turbo`). The use case: leverage better reasoning quality without cluttering the terminal. The issue was resolved — check the linked thread for the implemented solution.
🔗 [MoonshotAI/kimi-cli#1632](https://github.com/MoonshotAI/kimi-cli/issues/1632)

---

## 4. Key PR Progress

### 🔧 #1771 — fix: always stringify tool message content in Chat Completions provider
**Status:** OPEN · Author: he-yufeng
Fixes issue #1762. The OpenAI Chat Completions API requires `content` to be a **string** for `role: "tool"` messages. When a tool result contained multiple `ContentPart`s (e.g., a system-reminder TextPart + the actual output TextPart), `_convert_message` kept them as an array, triggering `400: Failed to…` errors. This PR ensures tool message content is always stringified before submission.
🔗 [MoonshotAI/kimi-cli#1771](https://github.com/MoonshotAI/kimi-cli/pull/1771)

---

## 5. Feature Request Trends

| Direction | Signal |
|---|---|
| **Configurable step limits** | Strong demand to raise or remove the 100-step default cap (#1327) |
| **Thinking-mode UX controls** | Users want toggles to hide/reveal thinking streams (#1632, now closed) |
| **Better onboarding/auth UX** | Fresh-install and unauthenticated flows need actionable guidance (#2456) |
| **MCP server management** | Users need clear controls to list, remove, or reset auto-discovered MCP configs (#2457) |

---

## 6. Developer Pain Points

1. **Opaque failure modes** — Both #2457 (MCP 400 errors) and #2456 ("LLM not set") share a root cause: the CLI surfaces raw errors without actionable remediation steps. Developers are left guessing their next move.

2. **Conservative default limits** — The 100-step cap (#1327) is a recurring complaint. With context windows large enough to operate well below capacity, the artificial ceiling interrupts long-running agentic workflows.

3. **Stale state persistence** — The MCP auto-discovery bug (#2457) highlights a broader pattern: the CLI caches or re-derives server state without giving users a way to invalidate it, leading to unrecoverable sessions.

4. **Thinking-mode verbosity** — Even though #1632 is closed, the fact that it garnered 👍3 and prompted a dedicated toggle request signals that real-time thinking output is a polarizing UX element — some users love the transparency, others find it noisy.

---

*Generated by OWL · Data as of 2026-06-17 · Source: [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-17

---

## 1. Today's Highlights

No new releases landed in the past 24 hours, but the community is buzzing with activity: a **native session `/goal` feature request** (#27167) has become the most-commented issue of the day (50 comments, 87 upvotes), signaling strong demand for persistent session lifecycle management. On the bug front, **MiniMax M3 tool-call history rejection** (#32608) and an **infinite compaction loop on empty git repos** (#32615) are drawing attention as correctness and cost-control concerns. The PR pipeline is active with automated cleanup PRs merging rapidly, and a contributor-submitted fix for MiniMax sanitization (#32609) is now open.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| 1 | **[#27167] Add native session goals with `/goal`** | Proposes a persistent session goal/lifecycle primitive — a gap compared to custom slash commands that don't survive across turns. | 50 comments, 👍87 — the highest-engagement issue today. Strong community alignment that OpenCode needs first-class session intent tracking. |
| 2 | **[#32615] Infinite clarification/compaction loop on empty git repo** | On a directory containing only `.git/`, OpenCode can spin indefinitely burning tokens with no progress. Correctness + cost-control bug. | Early reports (3 comments), but the severity (unbounded token burn) makes this a high-priority watch. |
| 3 | **[#32608] MiniMax M3 fails with "tool call result does not follow tool call" (2013)** | Switching an existing tool-heavy session to `minimax-m3` via OpenCode Go triggers a provider 400. Fresh sessions work; the issue is historical tool-call/result ordering. | 2 comments, but already has an open PR (#32609) with a fix — fast community response. |
| 4 | **[#28957] "Upstream idle timeout exceeded"** | Sessions using the `writing-plans` skill on macOS Tahoe 26.5 are timing out at the infrastructure layer. Unclear if client- or server-side. | 15 comments, no upvotes — users are hitting a wall but haven't rallied around a root cause yet. |
| 5 | **[#25832] OpenCode cannot read images anymore** | Image input broke around 2026-05-05 for PNG/JPG. Users who relied on visual context for HTML modifications are blocked. | 13 comments, 👍4. Regression suspected; no confirmed fix yet. |
| 6 | **[#21470] OpenCode is heavily CPU-bound** | With Gemini 3.1, the overwhelming majority of session time is spent in OpenCode itself rather than waiting on model APIs — 1.5 GB+ memory reported for a 300k-token session. | 11 comments, 👍10. Performance profiling requests are mounting. |
| 7 | **[#22129] Skills don't show up in TUI autocomplete (but do in web app)** | Tracked to a specific file (`autocomplete.tsx:363`). Skills with "Skill" badges appear in the web popover but are completely absent from TUI suggestions. | 10 comments, 👍12. Closed — fix likely shipped, but worth noting as a resolved pain point. |
| 8 | **[#29879] @ai-sdk/azure Responses API: encrypted content verification fails after 3–4 tool-calling turns** | Stateless Azure Responses API sessions (`store: false`) break after a few tool rounds. Blocks Azure users doing multi-turn agentic work. | 7 comments, no upvotes. Niche provider config but critical for affected users. |
| 9 | **[#8345] `zsh: illegal hardware instruction opencode`** | Crash on launch for macOS x64 DMG builds (v1.1.19). Likely a CPU feature/architecture mismatch in the binary. | 15 comments, 👍6. Affects users on older or misidentified hardware — no resolution confirmed. |
| 10 | **[#32444] GLM-5.2 thinking-effort variants (High/Max) not exposed** | A blanket `"glm"` exclusion in `ProviderTransform.variants()` means GLM-5.2 users can't select thinking levels despite Z.AI supporting them. | 2 comments, 👍6. Small fix, high impact for GLM users. |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|----|--------|-------------|
| 1 | **[#32609] fix(provider): sanitize MiniMax tool result text** | OPEN | Fixes #32608 — addresses MiniMax M3 rejecting sessions with prior tool-call history by sanitizing tool result text before submission. |
| 2 | **[#32610] fix(desktop): skip file watcher on $HOME and filesystem root** | OPEN | Prevents the desktop app from watching entire home directories or `/`, which caused inotify timeouts and pegged CPU. Adds Flatpak workaround. |
| 3 | **[#32604] fix(session): preserve reasoning part type on model switch** | OPEN | Fixes #32603 — switching models currently triggers mass prefix cache invalidation, causing long re-processing delays. Preserves reasoning part types across switches. |
| 4 | **[#32612] fix(codex): exclude `-pro` models from ChatGPT-account model list** | OPEN | Prevents `gpt-5.5-pro` from appearing as selectable on ChatGPT OAuth accounts where it always fails. Closes #26115 and #32435. |
| 5 | **[#32592] fix(opencode): send system context as structured messages on OpenAI OAuth path** | CLOSED (merged) | Fixes #32505 — the OAuth/Codex path was flattening system context into `options.instructions` instead of structured messages, causing compatibility issues. |
| 6 | **[#27939] feat(session): add configurable fallback model chain** | CLOSED (merged) | Closes #7602 — when the primary model fails, OpenCode can now cascade through a user-defined fallback chain instead of hard-failing. |
| 7 | **[#27938] feat: add provider and per-model concurrency limits** | CLOSED (merged) | Closes #12019, #26314 — providers with concurrent-request caps (e.g., free tiers) now respect configurable limits instead of rejecting over-limit requests. |
| 8 | **[#27919] fix(session): break infinite compaction loop** | CLOSED (merged) | Closes #27924 — adds a guard so that when compaction fails to reduce context below the token limit, the session exits the loop instead of spinning forever. |
| 9 | **[#26861] fix(tui): old messages disappearing during long sessions** | OPEN | Fix #7380 — implements lazy-scroll loading (50 messages at a time) so long sessions don't drop older messages from the TUI buffer. |
| 10 | **[#27554] feat(opencode): local LAN provider discovery + auto-discover models** | OPEN | Closes #6231, #27553 — adds mDNS-based local discovery in `/connect` for OpenAI-compatible servers on the LAN. Significant UX improvement for self-hosted setups. |

---

## 5. Feature Request Trends

Synthesizing all open issues and recent discussions, the most-requested feature directions are:

1. **Session Lifecycle & Goal Management** — The `/goal` proposal (#27167, 👍87) and `/loop` command (#18001, 👍27) both point to a desire for *persistent, structured session intent* beyond one-shot prompts. Users want OpenCode to maintain and reference goals across turns.

2. **Model Fallback & Concurrency Controls** — Now partially addressed by merged PRs (#27938, #27939), but the demand signal remains strong. Users want granular control over provider rate limits and automatic failover chains.

3. **Local/LAN Provider Discovery** — PR #27554 reflects growing demand for seamless self-hosted model integration. Users running LM Studio, Ollama, or custom OpenAI-compatible servers want zero-config discovery.

4. **Layout & UI Customization** — Requests for swappable panel layouts (#16349), configurable session picker limits (#20754), and auto-switching models based on input type (#32601) show users want more control over the desktop/TUI experience.

5. **Plugin Pipeline Middleware** — The comprehensive plugin pipeline request (#5148) asks for middleware-style data flow control, indicating power users want deeper interception hooks than the current event system provides.

---

## 6. Developer Pain Points

Recurring frustrations and high-frequency issues from the last 24 hours:

- **Provider compatibility fragmentation** — Multiple issues (#32608, #29879, #32505, #25065) reveal that OpenCode's provider abstraction layer struggles with edge cases in tool-call history, encrypted reasoning, and OAuth-specific request formatting. Each new provider or API version introduces regressions.

- **Session reliability under edge conditions** — Infinite compaction loops (#32615, #27919), clarification loops on empty repos (#32615), and duplicate agent responses (#32598) all point to the session loop lacking sufficient guardrails for degenerate inputs.

- **Performance at scale** — CPU-bound execution (#21470), memory bloat in long sessions, and TUI message disappearance (#7380) suggest the client-side runtime needs profiling and optimization for heavy-use scenarios.

- **Cross-platform parity** — Windows-specific bugs (#28824 — `@` file mentions broken on Windows), macOS-specific crashes (#8345 — illegal hardware instruction), and LM Studio model refresh failures (#2047) indicate platform-specific code paths need more testing coverage.

- **Image input regression** — The silent breakage of image reading (#25832) around May 5 with no confirmed fix is a notable regression that affects a core multimodal workflow.

---

*Data source: [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode) · Digest generated by OWL for 2026-06-17*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-17

---

## 1. Today's Highlights

Pi shipped two patch releases in rapid succession — v0.79.5 and v0.79.6 — focusing on provider-scoped environment configuration and critical HTTP dispatcher/fetch-override fixes. On the social front, DeepSeek V4 compatibility continues to churn, with two separate issues around tool-call serialization and thinking-mode parameter conflicts landing and closing within hours. The broader conversation remains anchored around long-standing reliability concerns with OpenAI Codex connections ([#4945](https://github.com/earendil-works/pi/issues/4945), 59 comments, 30 👍).

---

## 2. Releases

### v0.79.6
- **HTTP dispatcher fix**: Preserves a caller's deliberate `fetch` override instead of reinstalling the undici global fetch on top of it — important for environments that inject custom fetch implementations.
- **DeepSeek V4 thinking compatibility**: Fixes inherited OpenCode Go DeepSeek V4 thinking-off requests to send `thinking: { type: "disabled" }`, resolving provider parameter conflicts.

### v0.79.5
- **Provider-scoped API key environments**: `auth.json` API key entries can now include `env` overrides scoped to specific providers (Cloudflare, Azure OpenAI, Google Vertex, Amazon Bedrock, cache retention, proxy settings) without touching the project shell. [Auth File docs](https://github.com/earendil-works/pi/blob/main/docs/auth-file.md).

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | **openai-codex Connection Reliability Issues** | `openai-codex` / `gpt-5.5` sometimes leaves the TUI stuck on `Working...` with no streamed text. This is the most-commented active issue (59 comments, 30 👍), indicating it's a widespread pain point for users relying on Codex models. | [liushuaiiu] | Labels: `inprogress` |
| [#5811](https://github.com/earendil-works/pi/issues/5811) | **DeepSeek V4 toolCall/toolResult pair serialization** | Valid Pi-native tool call/result pairs serialize to an invalid `role:tool` chain for DeepSeek V4, causing 400 errors. Directly impacts users of DeepSeek through Pi. | [kerushidao] | Labels: `bug` |
| [#5822](https://github.com/earendil-works/pi/issues/5822) | **Moonshot/Kimi models reject Pi tool schemas** | `kimi-k2.6` and `kimi-k2.7-code` return 400 errors due to `allOf` if/then conflicts and missing type on properties in tool schemas. Blocks Pi users targeting Chinese LLM providers. | [sombraxxl] | Labels: `bug` |
| [#5763](https://github.com/earendil-works/pi/issues/5763) | **Providers swallow HTTP error bodies** | Behind proxies/gateways, non-2xx response bodies are dropped, making errors unreadable (e.g., `Unknown: UnknownError` for Bedrock, bare `403 status code` for OpenAI). Hinders debugging for enterprise users. | [stephanmck] | Labels: `bug` |
| [#5817](https://github.com/earendil-works/pi/issues/5817) | **Pi quietly quits randomly** | Pi exits mid-computation with overlapping/artifacted terminal output and broken shell prompt. No error is shown — very disruptive for long-running sessions. | [nonbasketless] | Labels: `bug` |
| [#4877](https://github.com/earendil-works/pi/issues/4877) | **Session folder collision** | Distinct file paths (e.g., `/a/b/c/d` and `/a-b/c-d`) can map to the same session folder (`--a-b-c-d--`), causing session data to be silently shared across projects. | [olivierverdier] | Labels: `bug`, 19 comments |
| [#5778](https://github.com/earendil-works/pi/issues/5778) | **pi-agent-core hangs on unresponsive streams / tool deadlocks** | Critical vulnerability: the agent loop wedges indefinitely if an LLM stream drops without closing or a tool's `execute()` promise never resolves. This is a systemic reliability gap. | [Paramveersingh-S] | Labels: `bug` |
| [#5819](https://github.com/earendil-works/pi/issues/5819) | **openai-responses streaming drops tool calls** | When the server sends an empty message item before a `function_call`, Pi drops the tool call entirely because `item.content.map` is called without a null guard. Model appears to "just stop." | [5queezer] | Labels: `bug` |
| [#5696](https://github.com/earendil-works/pi/issues/5696) | **Model name doesn't refresh in TUI on CTRL+P** | Switching models with CTRL+P requires two presses to advance by two positions — skipping one — and the TUI footer display doesn't always update. UX confusion. | [mxr576] | Labels: `bug` |
| [#5797](https://github.com/earendil-works/pi/issues/5797) | **File edits break CP-1252 encoding on Windows** | Pi converts CP-1252 files (common in older C++/Windows projects) to UTF-8 on edit, breaking legacy constant definitions. Encoding preservation is essential for cross-platform correctness. | [hendrikp] | Labels: `bug` |

---

## 4. Key PR Progress

| # | PR | Description | Impact |
|---|----|-------------|--------|
| [#5807](https://github.com/earendil-works/pi/pull/5807) | **feat: add provider-scoped environment overrides** (mitsuhiko) | ✅ Merged. Allows `auth.json` and stream config to carry per-provider `env` objects that override process environment. Delivers v0.79.5's headline feature. | ✅ Merged |
| [#5820](https://github.com/earendil-works/pi/pull/5820) | **fix: Preserve raw HTTP error status and bodies** (darrendc26) | Introduces a shared error-formatting helper that extracts and surfaces HTTP status and raw body from non-schema errors, closing [#5763](https://github.com/earendil-works/pi/issues/5763). Major debuggability improvement for proxy/gateway users. | ✅ Merged |
| [#5809](https://github.com/earendil-works/pi/pull/5809) | **feat(ai): add durationMs and timeToFirstTokenMs to Usage** (martircz) | Adds optional `durationMs` and `timeToFirstTokenMs` to `AssistantMessage.usage` and displays tokens/sec in the TUI footer. Footers and extensions can now surface latency metrics. | ✅ Merged |
| [#5803](https://github.com/earendil-works/pi/pull/5803) | **fix(ai): reject malformed OpenAI tool calls** (woodgear) | Rejects streamed tool calls that finish without an `id` or function name, and removes malformed entries from persisted session history. Adds regression tests. | ✅ Merged |
| [#5789](https://github.com/earendil-works/pi/pull/5789) | **fix(tui): restore cursorUp line-start jump before history browsing** (4h9fbZ) | Reverts an over-broad change that made `cursorUp` always enter prompt history even when the user just wanted to jump to line start. Fixes TUI editing ergonomics. | ✅ Merged |
| [#5812](https://github.com/earendil-works/pi/pull/5812) | **fix(tui): protect pipe characters inside inline code in markdown tables** (aliou) | Backtick-escaped `|` in table cells no longer breaks column rendering. Improves markdown table fidelity in the TUI. | ✅ Merged |
| [#5801](https://github.com/earendil-works/pi/pull/5801) | **Nixify pi** (o1lo01ol1o) | Adds a Nix flake for building and installing Pi, making it accessible to Nix and NixOS users who currently can't self-update via `pi update`. | ✅ Merged |
| [#5798](https://github.com/earendil-works/pi/pull/5798) | **feat(coding-agent): add Vercel AI Gateway attribution** (rwachtler) | Adds `http-referer` and `x-title` headers for Vercel AI Gateway app attribution per Vercel's ecosystem docs. | ✅ Merged |
| [#5796](https://github.com/earendil-works/pi/pull/5796) | **chore: bump TS target and lib to ES2024, use Promise.withResolvers()** (Perlence) | Upgrades tsconfig to ES2022+ and replaces hand-rolled `Promise.withResolvers()` polyfills with the native API. Reduces maintenance surface. | 🟡 Open |
| [#5761](https://github.com/earendil-works/pi/pull/5761) | **feat: support gemini-3.5-flash in google-vertex provider** (sandesh-jagdale-tp) | Adds Google's latest `gemini-3.5-flash` model to the Vertex provider. Google frequently ships new model IDs and Pi needs to keep pace. | ✅ Merged |

---

## 5. Feature Request Trends

| Direction | Representative Issues | Summary |
|-----------|----------------------|---------|
| **Provider configuration ergonomics** | [#5728](https://github.com/earendil-works/pi/issues/5728), [#5790](https://github.com/earendil-works/pi/issues/5790), [#5807](https://github.com/earendil-works/pi/pull/5807) | Strong demand for per-provider environment variables, HTTP proxy settings in `settings.json`, and richer `auth.json` config (IDs, gateway URLs) without shell hacks. The merged provider-scoped env PR addresses a large chunk of this. |
| **RPC / programmatic access** | [#5810](https://github.com/earendil-works/pi/issues/5810) | Users want structured RPC endpoints (`get_entries`, `get_tree`) to drive Pi from external tools — treating Pi as a session engine, not just a TUI. |
| **OAuth customization** | [#5372](https://github.com/earendil-works/pi/issues/5372) | Ability to supply custom callback page renderers for OAuth login flows, rather than being locked into Pi's internal HTML templates. |
| **Latency & cost observability** | [#5607](https://github.com/earendil-works/pi/issues/5607), [#5809](https://github.com/earendil-works/pi/pull/5809) | Users want tokens/sec, time-to-first-token, and duration metrics surfaced in the UI and extension API. The merged usage-timing PR is an early step. |
| **Model & provider expansion** | [#2345](https://github.com/earendil-works/pi/issues/2345) (ZhipuAI), [#5761](https://github.com/earendil-works/pi/pull/5761) (gemini-3.5-flash) | Ongoing requests to add new Chinese and international provider backends and keep up with rapid model releases from Google, Zhipu, etc. |

---

## 6. Developer Pain Points

1. **Provider compatibility churn is exhausting.** In a single cycle, DeepSeek V4 surfaced two distinct compatibility issues (tool-chain serialization + thinking-mode parameter conflicts), Moonshot/Kimi rejects Pi's tool schemas, and OpenAI Codex connectivity remains the top-voted open issue. Multi-provider support remains the single largest source of bugs.

2. **Silent failures and swallow error context.** Multiple issues ([#5763](https://github.com/earendil-works/pi/issues/5763), [#5817](https://github.com/earendil-works/pi/issues/5817), [#5778](https://github.com/earendil-works/pi/issues/5778)) describe Pi hanging or exiting without actionable error messages. The merged HTTP error body PR ([#5820](https://github.com/earendil-works/pi/pull/5820)) addresses one facet, but the broader pattern of unclear failure modes frustrates enterprise and proxy users.

3. **Session and state management edge cases.** Session folder collisions ([#4877](https://github.com/earendil-works/pi/issues/4877)), full transcript text kept in memory for listing ([#5556](https://github.com/earendil-works/pi/issues/5556)), and `pi list`/`pi update` hanging on long-lived MCP servers ([#5687](https://github.com/earendil-works/pi/issues/5687)) all point to Pi's session layer needing hardening as usage scales.

4. **TUI rendering fidelity.** Markdown tables, backspace/enter doubling on Kitty ([#5407](https://github.com/earendil-works/pi/issues/5407)), model-name refresh lag ([#5696](https://github.com/earendil-works/pi/issues/5696)), and jumping chat view during streaming ([#5576](https://github.com/earendil-works/pi/issues/5576)) — the TUI is a collection of small but sharp paper cuts that degrade daily developer experience.

5. **Cross-platform encoding and install management.** CP-1252 file corruption on Windows ([#5797](https://github.com/earendil-works/pi/issues/5797)) and the inability of Nix/externally-managed installs to self-update ([#5607](https://github.com/earendil-works/pi/issues/5607)) highlight that Pi's assumptions about the host environment still don't cover all developer workflows. The Nix flake PR ([#5801](https://github.com/earendil-works/pi/pull/5801)) is a welcome step.

---

*Data sourced from [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) as of 2026-06-17.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-17

---

## 1. Today's Highlights

Qwen Code shipped two patch releases (`v0.18.1-preview.0` and a nightly) focused on context-overflow warnings and documentation accuracy. The community is actively pushing for Claude Code feature parity — particularly around `/loop` self-paced wakeups, Dynamic Workflows, and session management — while several high-priority bugs around terminal state corruption, auto-update failures on older glibc, and plan-mode stalls are drawing urgent attention.

---

## 2. Releases

### v0.18.1-preview.0
- **fix**: Warn on oversized context instructions — surfaces a warning when system/user instructions exceed safe context budget, helping users avoid silent truncation. ([PR #5073](https://github.com/QwenLM/qwen-code/pull/5073))
- **docs**: Fix stale defaults, CLI syntax, and tool naming drift across the documentation.

### v0.18.1-nightly.20260616.a68b2e1e7
- Same fixes as the preview above; nightly track for early adopters.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|---------------|-----------------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | Qwen OAuth Free Tier Policy Adjustment | Proposes slashing the free tier from 1,000 → 100 req/day and eventually removing it. Impacts every free-tier user. | 136 comments — the most-discussed issue in the repo; strong community pushback expected. |
| [#5210](https://github.com/QwenLM/qwen-code/issues/5210) | ExitPlanMode stuck for 7+ hours | User reports `ExitPlanMode` hanging indefinitely with `qwen3.7-max`, blocking workflow entirely. | P2, needs-info; mirrors a pattern of plan-mode reliability complaints. |
| [#5055](https://github.com/QwenLM/qwen-code/issues/5055) | Trojan:JS/ShaiWorm.DBA!MTB in VSIX | Antivirus flags the official VSCode extension as malware — a trust and distribution crisis if not addressed. | P1/security; 6 comments, no maintainer response yet. |
| [#5206](https://github.com/QwenLM/qwen-code/issues/5206) | Auto-update fails on older glibc (CentOS 7) | The 0.18.0→0.18.1 auto-update path silently migrates npm→standalone installer, breaking on glibc 2.17. | P2; affects all Linux users on enterprise LTS distros. |
| [#5180](https://github.com/QwenLM/qwen-code/issues/5206) | Sub-agent crashes mid-task in multi-agent sessions | Multi-agent orchestration (main session as PM + sub-agents) fails partway through long tasks. | P2, long-context; critical for users relying on background automation. |
| [#4615](https://github.com/QwenLM/qwen-code/issues/4615) | Project-scoped `.mcp.json` with pending-approval semantics | Requests workspace-level MCP server config with an explicit approval gate before connection — a security best practice. | 6 comments; aligns with growing MCP ecosystem adoption. |
| [#5201](https://github.com/QwenLM/qwen-code/issues/5201) | QQ Bot channel adapter (PR ready) | Adds a native QQ Bot channel alongside Telegram/WeChat/DingTalk/Feishu — huge for the Chinese developer market. | Feature-request with PR attached; low friction to merge. |
| [#5124](https://github.com/QwenLM/qwen-code/issues/5124) | Track `/loop` alignment work | Parent issue for staged `/loop` improvements to reach Claude Code parity. | 👍1; signals community desire for background automation features. |
| [#5208](https://github.com/QwenLM/qwen-code/issues/5208) | Stale `.qwen-session` marker blocks worktree cleanup | Cross-session worktree management is broken — old markers prevent cleanup in new sessions. | P2; affects users who reuse worktrees across sessions. |
| [#4721](https://github.com/QwenLM/qwen-code/issues/4721) | Port Dynamic Workflows / Ultracode from Claude Code 2.1.160 | Requests a third tier of multi-agent execution beyond `/swarm`. | Strategic feature gap vs. Claude Code; long-term roadmap item. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#5213](https://github.com/QwenLM/qwen-code/pull/5213) | fix(cli): disable SGR mouse mode on exit | Uses `writeSync` in exit handler to guarantee terminal mouse state is restored. Fixes [#5212](https://github.com/QwenLM/qwen-code/issues/5212). | **Merged** |
| [#5188](https://github.com/QwenLM/qwen-code/pull/5188) | fix(core): strengthen `exit_plan_mode` descriptions | Hardens tool schema to reject empty `plan` parameters, reducing wasted retry turns. Fixes [#5177](https://github.com/QwenLM/qwen-code/issues/5177). | **Merged** |
| [#5196](https://github.com/QwenLM/qwen-code/pull/5196) | fix(permissions): don't model `/dev/tcp` & `/dev/udp` as file I/O | Stops bash network pseudo-devices from being flagged as unauthorized file reads/writes. | **Merged** |
| [#5209](https://github.com/QwenLM/qwen-code/pull/5209) | fix(core): read SHORT-typed TIFF dimensions on big-endian files | Fixes image tokenizer for big-endian TIFF files — a correctness bug in vision pipeline. | **Merged** |
| [#5182](https://github.com/QwenLM/qwen-code/pull/5182) | feat(loop): second-resolution session wakeup engine | Step 1 of `/loop` alignment with Claude Code — adds a session-scoped, non-durable wakeup primitive. Closes [#5156](https://github.com/QwenLM/qwen-code/issues/5156). | **Open** |
| [#5197](https://github.com/QwenLM/qwen-code/pull/5197) | feat(loop): wire prompt-only `/loop` to self-paced wakeups | Step 2 — makes `/loop <prompt>` (no interval) run immediately then self-schedule one continuation. | **Open** |
| [#5202](https://github.com/QwenLM/qwen-code/pull/5202) | feat(channel): QQ Bot adapter | Full WebSocket gateway implementation for QQ Bot, joining the built-in channel lineup. | **Open** |
| [#5126](https://github.com/QwenLM/qwen-code/pull/5126) | feat(vision-bridge): transcribe images for text-only models | Opt-in bridge that sends images to a multimodal model and returns text to the primary text-only model. | **Open** |
| [#5185](https://github.com/QwenLM/qwen-code/pull/5185) | fix(plan-gate): isolate gate agent AbortSignal | Fixes infinite retry loop in Plan Approval Gate when using `exit_plan_mode` in AUTO/YOLO pre-plan mode. | **Open** |
| [#5145](https://github.com/QwenLM/qwen-code/pull/5145) | feat(cli): show follow-up suggestion in input placeholder | Surfaces the model's suggested next prompt directly in the input area using the fast model. | **Open** |

---

## 5. Feature Request Trends

1. **Claude Code `/loop` Parity** — The most coordinated effort in the repo. Multiple child issues ([#5124](https://github.com/QwenLM/qwen-code/issues/5124), [#5156](https://github.com/QwenLM/qwen-code/issues/5156), [#5184](https://github.com/QwenLM/qwen-code/issues/5184)) and PRs ([#5182](https://github.com/QwenLM/qwen-code/pull/5182), [#5197](https://github.com/QwenLM/qwen-code/pull/5197)) are systematically rebuilding `/loop` with self-paced wakeups, second-resolution scheduling, and prompt-only invocation.

2. **Multi-Agent & Dynamic Workflows** — Requests to port Claude Code's Dynamic Workflows ([#4721](https://github.com/QwenLM/qwen-code/issues/4721)) and improve sub-agent parallelism ([#5176](https://github.com/QwenLM/qwen-code/issues/5176)) reflect demand for sophisticated agent orchestration beyond the current `/swarm` tool.

3. **Channel Expansion** — The QQ Bot adapter ([#5201](https://github.com/QwenLM/qwen-code/issues/5201) / [#5202](https://github.com/QwenLM/qwen-code/pull/5202)) continues the pattern of adding regional messaging platforms (Telegram, WeChat, DingTalk, Feishu) to make Qwen Code accessible where developers already communicate.

4. **MCP Security & Project-Scoped Config** — Request for `.mcp.json` with pending-approval semantics ([#4615](https://github.com/QwenLM/qwen-code/issues/4615)) shows the community is thinking about supply-chain security as MCP adoption grows.

5. **Vision Bridge for Text-Only Models** — PR [#5126](https://github.com/QwenLM/qwen-code/pull/5126) addresses a real gap: users running local or text-only models lose image understanding. The opt-in bridge pattern is a pragmatic solution.

---

## 6. Developer Pain Points

- **Terminal State Corruption** — Multiple reports of terminals left in broken states after Qwen Code exits: SGR mouse mode stuck ([#5212](https://github.com/QwenLM/qwen-code/issues/5212), now fixed via [#5213](https://github.com/QwenLM/qwen-code/pull/5213)), and React error #185 crashes in the IDE companion ([#5199](https://github.com/QwenLM/qwen-code/issues/5199)). Terminal hygiene is a recurring theme.

- **Plan Mode Reliability** — `ExitPlanMode` hanging ([#5210](https://github.com/QwenLM/qwen-code/issues/5210)), empty plan parameter retries ([#5177](https://github.com/QwenLM/qwen-code/issues/5177)), and gate agent infinite loops ([#5185](https://github.com/QwenLM/qwen-code/pull/5185)) all point to plan mode being a fragile user experience.

- **Auto-Update Fragility** — The npm→standalone migration on non-writable prefixes ([#5206](https://github.com/QwenLM/qwen-code/issues/5206)) and the failed v0.18.1 release workflow ([#5150](https://github.com/QwenLM/qwen-code/issues/5150)) suggest the release and update infrastructure needs hardening, especially for Linux enterprise environments.

- **Multi-Agent Session Stability** — Sub-agents crashing mid-task ([#5180](https://github.com/QwenLM/qwen-code/issues/5180)) and stale session markers blocking worktree cleanup ([#5208](https://github.com/QwenLM/qwen-code/issues/5208)) indicate that long-running, multi-session workflows are not yet production-reliable.

- **Documentation Drift** — Even the release notes for v0.18.1 include a docs fix for stale defaults and CLI syntax, confirming that docs are falling behind the rapidly evolving codebase.

- **Free Tier Uncertainty** — The 136-comment debate on [#3203](https://github.com/QwenLM/qwen-code/issues/3203) reflects anxiety about the sustainability of the free OAuth tier, which could drive users to alternative tools if not communicated transparently.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# CodeWhale Community Digest — 2026-06-17

> **Note:** The project formerly known as `deepseek-tui` has been rebranded to **CodeWhale**. The legacy npm package `deepseek-tui` is deprecated. See `docs/REBRAND.md` for migration instructions.

---

## 1. Today's Highlights

CodeWhale shipped **v0.8.61**, which is now the canonical release across all channels. The community is actively engaged with **19 open issues** and **7 open PRs** updated in the last 24 hours, with significant activity around TUI reliability (stalled turns, paste handling, sub-agent deadlocks), provider support (DeepInfra merged, Novita and Moonshot fixes), and a major v0.9.0 command-boundary refactor EPIC gaining traction.

---

## 2. Releases

- **v0.8.61** — This is the current stable release. The key change is the formal rebrand: the project, CLI command, npm package, and release-asset name are now all **CodeWhale**. The legacy `deepseek-tui` npm package receives no further releases. Users on v0.8.x legacy names should migrate via [`docs/REBRAND.md`](https://github.com/Hmbown/CodeWhale/blob/main/docs/REBRAND.md).

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#2487](https://github.com/Hmbown/CodeWhale/issues/2487) | **Turn stalled — no completion signal received** | A long-standing, high-impact bug where `yolo` mode freezes and becomes unresponsive. Even `continue` cannot resume the session. Affects core reliability. | 14 comments, 👍1 — open since June 1, still unresolved |
| [#2739](https://github.com/Hmbown/CodeWhale/issues/2739) | **任务执行过程中卡死 (Task execution freezes)** | Reports of infinite hangs during long-running bug-fix tasks. After `Esc` + `continue`, connection times out and session history is lost on `--continue`. User reports this existed since v0.8.51. | 4 comments — critical reliability regression for power users |
| [#3268](https://github.com/Hmbown/CodeWhale/issues/3268) | **Failed to install on brand new Ubuntu 24.04 LTS** | Fresh Ubuntu 24.04 install via `cargo install` fails. Likely related to missing system dependencies (`libdbus-1-dev`, `pkg-config`). | 4 comments — onboarding blocker for new Linux users |
| [#3238](https://github.com/Hmbown/CodeWhale/issues/3238) | **Ubuntu 22.04 LTS glibc version mismatch** | `npm install -g codewhale` fails on Ubuntu 22.04 due to glibc incompatibility. Limits reach to a widely-used LTS release. | 2 comments — affects a large existing user base |
| [#3240](https://github.com/Hmbown/CodeWhale/issues/3240) | **Legacy `.deepseek` config directory still created** | Despite the rebrand, the runtime still creates a `.deepseek` folder alongside `.codewhale` on Windows. Confusing for users expecting a clean migration. | 2 comments — polish/rebrand completeness issue |
| [#3266](https://github.com/Hmbown/CodeWhale/issues/3266) | **`agent_eval` with `block=True` causes TUI freeze/deadlock** | Multiple sub-agents with `block=True` deadlock the parent session indefinitely. Forces terminal kill. Closed (fix likely in progress). | 2 comments — critical for multi-agent workflows |
| [#3273](https://github.com/Hmbown/CodeWhale/issues/3273) | **JS execution Node fetch ignores proxy config on Windows** | `js_execution` tool times out on Windows despite proxy env vars being set, while shell tools work fine. Breaks web-dependent JS tooling behind corporate VPNs. | 1 comment — niche but blocking for enterprise users |
| [#3264](https://github.com/Hmbown/CodeWhale/issues/3264) | **Option to restrict skill scanning to `~/.codewhale/skills/` only** | Users want to limit skill discovery to their personal directory, avoiding noise from global/bundled skills. Improves security and predictability. | 3 comments — quality-of-life for skill-heavy users |
| [#2870](https://github.com/Hmbown/CodeWhale/issues/2870) | **EPIC: Staged command-boundary refactor for v0.9.0** | Tracks the decomposition of a large architectural refactor into mergeable PRs against `codex/v0.9.0-stewardship`. Foundational work for the next major version. | 3 comments — important for contributors to track |
| [#3101](https://github.com/Hmbown/CodeWhale/issues/3101) | **Finish Paulo Aboim Pinto's architecture stream without losing design intent** | Ensures high-quality but fragmented architecture work (command/tool/compaction/TUI) is properly consolidated for release. Prevents design intent from being lost across partial merges. | 2 comments — stewardship/process issue |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#3236](https://github.com/Hmbown/CodeWhale/pull/3236) | **Add DeepInfra provider support** | Full provider integration including runtime, TUI, CLI, TOML alias wiring, and registry docs. Fixes #3231. | ✅ **Merged** |
| [#3267](https://github.com/Hmbown/CodeWhale/pull/3267) | **Keep oversized paste inline with truncation and auto-expand** | Fixes #3263: instead of replacing large pastes with a file mention, keeps the full text in the composer with truncation + auto-expand. Users can now select, copy, and edit pasted content. | ✅ **Merged** |
| [#3269](https://github.com/Hmbown/CodeWhale/pull/3269) | **Expose slash commands as hotbar actions** | Hotbar can now bind existing slash commands (e.g., `slash.mode`, `slash.task`, `slash.rename`). Arg-less and optional-arg commands are supported. Refs #2067, part of #2061. | 🟡 **Open** |
| [#3270](https://github.com/Hmbown/CodeWhale/pull/3270) | **Add Linux build-time deps to cargo install guides** | Documents `libdbus-1-dev` and `pkg-config` requirements for `cargo install` on bare Ubuntu. Addresses #3268. | 🟡 **Open** |
| [#3271](https://github.com/Hmbown/CodeWhale/pull/3271) | **Add Ponytail personality to project instructions** | Adds Ponytail as a recommended agent in project docs. Blocked on upstream Ponytail PR listing CodeWhale as a supported agent. | 🟡 **Open** |
| [#2933](https://github.com/Hmbown/CodeWhale/pull/2933) | **Hippocampal Memory v2 — glossary, namespaces, rollback, auto-inject, daemon** | Major upgrade to the cross-session memory system: schema migration, namespace isolation, rollback, auto-injection into prompts, and a background daemon. | 🟡 **Open** (needs human review) |
| [#2998](https://github.com/Hmbown/CodeWhale/pull/2998) | **Bump tailwindcss 3.4.19 → 4.3.1 in `/web`** | Dependabot dependency upgrade for the web frontend. Tailwind CSS v4 is a major version with breaking changes. | 🟡 **Open** |

---

## 5. Feature Request Trends

1. **Agent UX & Interaction Model** — Multiple issues (#3102, #3101, #2870) push for first-class agent-to-user interactions (clarifying questions, modal prompts) and a cleaner command/tool/compaction architecture. The community wants agents to feel less like chat and more like structured tool invocations.

2. **Multi-Agent Reliability** — Sub-agent orchestration pain is a recurring theme: deadlocks with `block=True` (#3266), clipped evaluation output misleading the model (#2652), and stalled turns (#2487, #2739). Users running complex multi-agent workflows are hitting hard reliability walls.

3. **Provider Ecosystem Expansion** — DeepInfra was just merged (#3236), and there's active work on Novita (#3255), Moonshot/Kimi (#3265), and model catalog hydration from provider APIs (#3072). The community wants CodeWhale to be provider-agnostic with robust auto-discovery.

4. **TUI Polish & Input Handling** — Paste handling (#3263 → fixed in #3267), digit key hijacking (#3243), and hotbar/slash-command integration (#3269) show a push toward making the TUI feel more like a modern editor/IDE.

5. **Memory & Cross-Session Context** — The Hippocampal Memory v2 PR (#2933) represents a significant investment in persistent, structured memory — glossary, namespaces, rollback, and auto-injection. This is a strategic direction for long-running agent workflows.

---

## 6. Developer Pain Points

- **Installation failures on Linux** — Both Ubuntu 22.04 (glibc) and 24.04 (missing `-dev` packages) are blocking new users. The project needs better pre-install dependency documentation or binary distribution. ([#3238](https://github.com/Hmbown/CodeWhale/issues/3238), [#3268](https://github.com/Hmbown/CodeWhale/issues/3268))

- **Session freezes and unrecoverable hangs** — The most critical and long-standing pain point. Stalled turns, sub-agent deadlocks, and lost session history after cancellation are driving users away. ([#2487](https://github.com/Hmbown/CodeWhale/issues/2487), [#2739](https://github.com/Hmbown/CodeWhale/issues/2739), [#3266](https://github.com/Hmbown/CodeWhale/issues/3266))

- **Rebranding residue** — Legacy `.deepseek` config directories and naming inconsistencies create confusion during the transition to CodeWhale. ([#3240](https://github.com/Hmbown/CodeWhale/issues/3240))

- **Proxy/network configuration gaps** — JS execution tools not respecting proxy settings on Windows breaks workflows behind corporate networks. ([#3273](https://github.com/Hmbown/CodeWhale/issues/3273))

- **Provider-specific API quirks** — Each new provider integration surfaces edge cases (Novita's missing `/openai` path, Moonshot's strict `type: "object"` requirement). A more resilient provider abstraction layer is needed. ([#3255](https://github.com/Hmbown/CodeWhale/issues/3255), [#3265](https://github.com/Hmbown/CodeWhale/issues/3265))

---

*Data source: [github.com/Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | Digest generated by OWL for 2026-06-17*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*