# AI CLI Tools Community Digest 2026-07-17

> Generated: 2026-07-17 02:04 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-07-17)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is characterized by **rapid release cadences** (7 of 9 tools shipped updates today), **intense competition on enterprise-readiness** (custom providers, cost controls, network flexibility), and **convergence on multi-agent orchestration** as the next frontier. While Anthropic, OpenAI, Google, and GitHub leverage first-party model advantages, community-driven tools (OpenCode, Pi, CodeWhale, Qwen, Kimi) differentiate through provider-agnostic architectures, local-first privacy, and extensible plugin ecosystems. Windows stability, token-cost transparency, and IDE integration depth remain universal pain points across all tools.

---

## 2. Activity Comparison

| Tool | Releases Today | Hot Issues (Top 10) | Key PRs (24h) | Top Issue Engagement |
|------|----------------|---------------------|---------------|----------------------|
| **Claude Code** | v2.1.212 | 10 | 5 (2 closed, 3 open) | 185 👍 (#24726 VS Code auto-attach) |
| **OpenAI Codex** | rust-v0.144.5 + 3 alpha | 10 | 10 merged/closed | 48 👍 (#10867 custom model providers) |
| **Gemini CLI** | v0.51.0 + v0.52.0-preview | 10 | 10 (3 P1 security) | 8 👍 (#21409 generalist agent hangs) |
| **GitHub Copilot CLI** | v1.0.72-0 | 10 | 0 | 6 👍 (#4139 custom endpoints, #1152 token info) |
| **Kimi Code CLI** | 1.49.0 | 4 | 4 (2 merged) | 1 👍 (#2318 org TPD rate limit) |
| **OpenCode** | v1.18.3 | 10 | 10 | 89 👍 (#20695 memory megathread) |
| **Pi** | v0.80.8/9/10 (3 patches) | 10 | 10 | 9 comments (#6657 Bedrock auth) |
| **Qwen Code** | v0.19.11 + nightly | 10 | 10 | 25 comments (#6378 multi-workspace RFC) |
| **CodeWhale** | v0.9.0 (rebrand) | 10 | 10 | 16 comments (#3793 guided onboarding) |

**Note:** OpenCode shows highest single-issue engagement (memory investigation). Pi shipped 3 patches in 24h — highest release velocity. GitHub Copilot CLI had zero PR activity despite active issues.

---

## 3. Shared Feature Directions

| Direction | Tools Requesting | Specific Needs |
|-----------|------------------|----------------|
| **Custom/BYO Model Provider Parity** | Codex, Copilot CLI, OpenCode, Pi, CodeWhale, Kimi | Full provider config (base_url, auth, headers) across all modes (interactive, ACP, subagents); Bedrock/OpenRouter/Azure/local model support |
| **Multi-Agent / Background Task Observability** | Claude Code, Codex, Gemini, OpenCode, CodeWhale | Global task dashboard, cross-session history, fire-and-forget with callbacks, conductor/swarm orchestration |
| **Token Cost Transparency & Control** | Claude Code, Codex, Copilot CLI, OpenCode, Kimi | Granular accounting (cache read/write), per-workflow alerts, pricing tiers for power users, hard budgets |
| **Windows + WSL2 First-Class Support** | Codex, Claude Code, Kimi, OpenCode | Sandbox-WSL harmony, Defender coexistence, native installers (winget/PS 5.1), non-paged pool leak fixes |
| **IDE ↔ CLI Tool Unification** | Claude Code, Copilot CLI, Qwen, Gemini | MCP tool inheritance, VS Code settings parity, ACP stability, sidebar auto-attach controls |
| **Session/Context Management at Scale** | All 9 tools | Compaction strategies, 5MB+ history limits, workspace-scoped state, auto-compact fallbacks |
| **Enterprise Security & Audit** | Codex, Copilot CLI, Pi, OpenCode | Cost attribution (Bedrock projects), thread originator tracking, prompt injection hardening, CORS lockdown |

---

## 4. Differentiation Analysis

| Tool | Primary Differentiator | Target User | Technical Approach |
|------|------------------------|-------------|-------------------|
| **Claude Code** | First-party Opus/Sonnet access; `/fork` parallel agents; Cowork cloud sessions | Anthropic-centric teams; enterprise cloud users | Tight Anthropic API integration; proprietary cloud sync (Cowork); kernel-level macOS issues |
| **OpenAI Codex** | GPT-4o/Codex models; sandbox execution; ACP protocol | OpenAI ecosystem users; Windows + WSL2 developers | Rust CLI + Node desktop; aggressive sandboxing; Windows-first but fragile |
| **Gemini CLI** | Google model access; AST-aware tooling exploration; Caretaker auto-triage | Google Cloud shops; teams wanting eval-driven quality | TypeScript; heavy investment in behavioral evals (76 tests); security-first (Seatbelt, variable expansion fixes) |
| **GitHub Copilot CLI** | GitHub ecosystem integration; CAPI backend; voice mode | GitHub Enterprise customers; VS Code loyalists | Go/Node hybrid; CAPI 5MB hard limit; BYOK regressions in programmatic modes |
| **Kimi Code CLI** | Moonshot Kimi models; reasoning-level switching; TS rewrite (`agent-core-v2`) | Chinese-market developers; reasoning-heavy workflows | Go (`kimi`) + Rust (`kosong`); telemetry parity focus; Windows onboarding broken |
| **OpenCode** | Provider-agnostic; local-first; plugin/agent marketplace vision | Privacy-conscious; multi-model power users | Rust + TypeScript desktop; multi-provider profiles; memory opacity challenges |
| **Pi** | Unified `ModelRuntime`; provider-owned auth; extension SDK | Advanced users wanting model/router flexibility | TypeScript monorepo; rapid patch cadence; extension ecosystem fragility |
| **Qwen Code** | Multi-workspace daemon; web-shell parity; VP mode (viewport) | Teams needing browser + CLI unity; Chinese/English bilingual | Go daemon + TypeScript clients; aggressive Web Shell feature parity |
| **CodeWhale** | Fleet/WhaleFlow orchestration; conductor agents; hotbar UX | Experimental/orchestration-focused; multi-model swarm users | Rust monolith (refactoring); Shannon Labs product; guided constitutional onboarding |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum / Rapid Iteration** | **Pi** (3 patches/24h), **CodeWhale** (50+ issues/PRs day, v0.9 rebrand), **Qwen Code** (10 PRs active, multi-workspace RFC), **OpenCode** (89 👍 memory megathread, 10 PRs) | Daily releases; high PR throughput; architectural shifts in progress |
| **Steady Enterprise-Grade** | **Claude Code** (v2.1.x stable, 185 👍 top issue), **Gemini CLI** (dual stable/preview, 3 P1 security PRs), **Codex** (stable + alpha channels, 10 PRs merged) | Predictable cadences; security-first; deep issue backlogs with team engagement |
| **Platform-Locked / Slower Open Loop** | **GitHub Copilot CLI** (0 PRs/24h despite 10 hot issues), **Kimi Code** (critical Windows blocker, low community visibility) | Limited external contribution; platform dependencies; onboarding friction |

**Maturity Indicators:** Gemini CLI and Pi lead on security hardening (Seatbelt, CORS, variable expansion). Claude Code and Codex have deepest enterprise pain-point backlogs (allowlists, cost tiers). OpenCode and CodeWhale show strongest community-driven architecture evolution.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Multi-Provider Is Table Stakes** | 7/9 tools actively building BYOK/custom provider support; Copilot CLI regressing in ACP mode | **Adopt tools with stable provider abstraction layers** (OpenCode, Pi, Codex) to avoid vendor lock-in |
| **Orchestration > Single-Agent** | CodeWhale Fleet/WhaleFlow, Claude `/fork`, Codex background callbacks, OpenCode marketplace, Gemini subagent autonomy | **Evaluate on multi-agent observability** (global dashboards, cross-session context, cost attribution) not just single-turn quality |
| **Windows Is a Differentiator, Not Afterthought** | Codex Defender conflicts, Kimi PS 5.1 installer broken, Claude WSL demand (#49933 80 👍), Copilot winget failures | **Validate Windows CI/CD pipelines** before team adoption; expect 6-12 month stabilization cycles |
| **Token Cost Observability Gap** | Claude 43M cache tokens/5min, Codex weekly limit accounting bug, Copilot no cache breakdown, OpenCode cache read token fixes | **Build internal cost dashboards**; don't rely on vendor tooling — all tools have blind spots |
| **IDE-CLI Convergence Accelerating** | Copilot MCP inheritance, Qwen Web Shell parity, Gemini VS Code settings, Claude auto-attach pain | **Standardize on ACP/MCP** for tool portability; expect IDE vendors to absorb CLI features |
| **Security Hardening as Competitive Moat** | Gemini Seatbelt + variable expansion (3 P1 PRs), Pi CORS lockdown, Codex `exec()` detection, CodeWhale tool budgets | **Audit supply chain** (Pi `pull_request_target` fix); prefer tools with deny-by-default sandbox models |

---

## Recommendation Summary

| Priority | Recommended Approach |
|----------|---------------------|
| **Enterprise Standardization** | Shortlist: **Claude Code** (Anthropic shops), **Codex** (OpenAI shops), **Gemini CLI** (Google Cloud shops) — but validate Windows/WSL and cost controls first |
| **Multi-Model Flexibility** | **OpenCode**, **Pi**, **CodeWhale** — provider-agnostic architectures; monitor OpenCode marketplace and Pi extension stability |
| **Cutting-Edge Orchestration** | **CodeWhale** (Fleet/WhaleFlow), **Claude Code** (`/fork` background agents) — highest risk/reward for agentic workflows |
| **Team Onboarding Safety** | **Gemini CLI** (security-first, eval-driven), **Qwen Code** (Web Shell for non-terminal users) — lowest silent-failure risk |

**Bottom Line:** No single tool leads across all dimensions. The ecosystem is fragmenting along **model-provider alignment** vs. **provider-agnostic flexibility** and **cloud-integrated** vs. **local-first** axes. Pilot 2-3 tools aligned with your model strategy and platform constraints before committing.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-17 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `fix(skill-creator): run_eval.py 0% recall` | Fixes the skill-creator evaluation pipeline (`run_eval.py`, `run_loop.py`, `improve_description.py`) which reports `recall=0%` for every skill description, making the description-optimization loop optimize against noise. | Directly addresses **Issue #556** (12 comments, 7 👍) and **#1169** (3 comments) — the core blocker for automated skill description improvement. | 🟢 Open |
| 2 | **[#1323](https://github.com/anthropics/skills/pull/1323)** `fix(skill-creator): trigger detection misses skill name` | `run_eval.py::run_single_query` fails to detect skill triggers, causing recall=0% on all should-trigger queries; also bails on first non-Skill tool. | Companion fix to #1298; tackles the detection logic that misses real skill names. | 🟢 Open |
| 3 | **[#1099](https://github.com/anthropics/skills/pull/1099)** `skill-creator: fix run_eval.py crash on Windows` | Fixes `[WinError 10038]` on Windows when reading from subprocess pipe; every query recorded as "not triggered." | Addresses **Issue #1061** (3 comments, 2 👍) — Windows compatibility blocker. | 🟢 Open |
| 4 | **[#1050](https://github.com/anthropics/skills/pull/1050)** `skill-creator: fix Windows subprocess + encoding bugs` | Two 1-line fixes: `claude.cmd` PATHEXT resolution and `cp1252` encoding for stdout/stderr. | Same Windows track as #1099; minimal but critical for Windows contributors. | 🟢 Open |
| 5 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `feat: add self-audit — mechanical verification + 4-dim reasoning gate` | New meta-skill: mechanical file verification → four-dimension reasoning audit (damage-severity priority). Universal across projects/stacks/models. | Proposed alongside **Issue #1385** (3 comments) — a full reasoning quality gate pipeline. | 🟢 Open |
| 6 | **[#514](https://github.com/anthropics/skills/pull/514)** `Add document-typography skill` | Prevents orphan/widow lines, header stranding, numbering misalignment in AI-generated documents. Triggers on any document generation. | High practical value — "affects every document Claude generates"; long-open (Mar 2026). | 🟢 Open |
| 7 | **[#723](https://github.com/anthropics/skills/pull/723)** `feat: add testing-patterns skill` | Comprehensive testing stack: Testing Trophy, AAA pattern, React Testing Library, API/contract/E2E, flakiness, CI integration. | Broad developer demand; covers full testing lifecycle. | 🟢 Open |
| 8 | **[#83](https://github.com/anthropics/skills/pull/83)** `Add skill-quality-analyzer & skill-security-analyzer` | Two meta-skills for marketplace: quality (5-dim rubric) + security (injection, secrets, supply chain, perms) analysis of skills. | Addresses **Issue #492** (34 comments) trust-boundary concerns via automated security review. | 🟢 Open |

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issue # / Comments / 👍) | Description |
|-------|-----------------------------------|-------------|
| **Trust & Security Hardening** | [#492](https://github.com/anthropics/skills/issues/492) (34 💬, 2 👍) | Community skills published under `anthropic/` namespace impersonate official skills; users grant elevated permissions erroneously. Highest-discussion issue. |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (14 💬, 7 👍) | No org-wide skill library; manual .skill file sharing via Slack/Teams → Settings upload. Strong demand for native sharing. |
| **Skill-Creator Pipeline Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 💬, 7 👍), [#1169](https://github.com/anthropics/skills/issues/1169) (3 💬, 1 👍) | `run_eval.py` never triggers skills (0% recall); optimization loop stuck. Blocks automated skill improvement. |
| **Windows First-Class Support** | [#1061](https://github.com/anthropics/skills/issues/1061) (3 💬, 2 👍), [#362](https://github.com/anthropics/skills/pull/362) | PATHEXT, cp1252, `select()` on pipes — Unix-first assumptions break Windows contributors. |
| **Meta-Skills for Governance** | [#412](https://github.com/anthropics/skills/issues/412) (6 💬), [#1385](https://github.com/anthropics/skills/issues/1385) (3 💬) | Proposals for `agent-governance` and a 3-gate reasoning pipeline (calibration → adversarial review → delivery verification). |
| **Duplicate/Plugin Hygiene** | [#189](https://github.com/anthropics/skills/issues/189) (6 💬, 9 👍) | `document-skills` and `example-skills` install identical content → duplicate skills in context window. |
| **Bedrock / Enterprise Integration** | [#29](https://github.com/anthropics/skills/issues/29) (4 💬), [#1175](https://github.com/anthropics/skills/issues/1175) (4 💬) | AWS Bedrock compatibility; SharePoint Online document handling with ACLs inside skills. |
| **MCP Exposure** | [#16](https://github.com/anthropics/skills/issues/16) (4 💬) | Request to expose skills as MCP servers for standard API signaling. |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why High Potential |
|----|-------|-------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval pipeline fix | Unblocks the entire automated skill-improvement loop; 10+ independent reproductions; fixes #556 (top technical issue). |
| **[#1323](https://github.com/anthropics/skills/pull/1323)** | Trigger detection fix | Companion to #1298; same root cause; small focused change. |
| **[#1099](https://github.com/anthropics/skills/pull/1099)** / **[#1050](https://github.com/anthropics/skills/pull/1050)** | Windows compatibility | Two PRs fixing same blocker; 1-line changes; enable Windows contributors. |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Universal need (every generated document); clear spec; long-standing (open since Mar). |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Broad developer appeal; comprehensive coverage; aligns with "testing trophy" best practices. |
| **[#83](https://github.com/anthropics/skills/pull/83)** | `skill-quality-analyzer` / `skill-security-analyzer` | Directly mitigates #492 trust issue; meta-skill for marketplace governance. |
| **[#361](https://github.com/anthropics/skills/pull/361)** / **[#539](https://github.com/anthropics/skills/pull/539)** | YAML special-char validation | Prevents silent YAML misparsing; small, high-impact validator additions. |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` | Novel quality gate; aligns with #1385 proposal; universal applicability. |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community's most concentrated demand is making the skill-creation pipeline reliable and trustworthy — fixing the broken evaluation loop (0% recall), hardening Windows support, and establishing security/governance meta-skills to prevent namespace impersonation — so that skill authors can iterate with confidence and organizations can adopt skills safely at scale.**

---

# Claude Code Community Digest — 2026-07-17

---

## 1. Today's Highlights

- **v2.1.212 released** with two notable changes: `/fork` now spawns a persistent background session (visible in `claude agents`) instead of an in-session subagent (now `/subtask`), and `claude auto-mode reset` lets users restore default auto-mode config with a confirmation prompt.
- **Top community pain points** center on VS Code integration (auto-attach behavior), network egress allowlist failures blocking custom domains, and a macOS kernel memory leak that crashes the CLI at ~20 GB under agent load.
- **Token-cost surprises** dominate new reports: browser automation in near-1M-token sessions silently burning ~43M cache-read tokens per 5 minutes, and the `code-review` workflow consuming 1.1M+ tokens for 5 files while returning empty results.

---

## 2. Releases

### v2.1.212
| Change | Impact |
|--------|--------|
| `/fork` → background session (new row in `claude agents`) | Enables true parallel workstreams; old in-session subagent behavior moved to `/subtask` |
| `claude auto-mode reset` (with confirm) | Safe one-click restore of default auto-mode settings |

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#24726](https://github.com/anthropics/claude-code/issues/24726) | **VS Code: setting to disable auto-attach of open file/selection** | Long-standing UX friction; sidebar auto-attaches context developers don't want | 60 comments, **185 👍** — highest engagement in dataset |
| [#30112](https://github.com/anthropics/claude-code/issues/30112) | **Cowork network egress allowlist blocks custom domains (403)** | Breaks enterprise/private registry access; `blocked-by-allowlist` error | 52 comments, **49 👍** — active since March, still open |
| [#49933](https://github.com/anthropics/claude-code/issues/49933) | **Native WSL Remote Integration for Windows Desktop** | Critical for Windows developers using WSL; current workaround is fragile | 23 comments, **80 👍** — closed but high demand signal |
| [#47509](https://github.com/anthropics/claude-code/issues/47509) | **Team plan needs Max 20x tier for power users** | Premium (6.25×) insufficient for heavy CLI agentic workflows | 19 comments, **59 👍** — pricing/packaging gap for senior devs |
| [#66020](https://github.com/anthropics/claude-code/issues/66020) | **macOS 26.5.1 kernel zone leak (`data.kalloc.1024`) → crash at ~20 GB** | Leak rate scales 21→1027/sec with agent load; hard crash, data loss risk | 15 comments, 2 👍 — detailed repro, macOS-specific |
| [#70217](https://github.com/anthropics/claude-code/issues/70217) | **API "Connection closed mid-response" interrupting work** | Costs time & money; occurs across sessions, version 2.1.186+ | 12 comments, 6 👍 — duplicate but widespread |
| [#77362](https://github.com/anthropics/claude-code/issues/77362) | **v2.1.208: `/mcp` menu blocked in active `claude agents` sessions** | Regression: guard checks launch path not attachment state | 3 comments, **5 👍** — blocks MCP config in attended agent sessions |
| [#77531](https://github.com/anthropics/claude-code/issues/77531) | **Native dashboard for cross-session/background-agent task monitoring** | `/tasks` only shows current session; no global view of running work | 3 comments — strong workflow need for multi-agent ops |
| [#77360](https://github.com/anthropics/claude-code/issues/77360) | **Browser automation silently burns ~43M cache-read tokens / 5 min** | Near-1M-token sessions multiply per-action cost 10× without warning | 2 comments — cost observability gap |
| [#77943](https://github.com/anthropics/claude-code/issues/77943) | **`code-review` workflow: 1.1M+ tokens for 5 files, empty results** | Disproportionate token burn + null output; undermines trust in built-in workflows | 2 comments — quality + cost regression |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#27204](https://github.com/anthropics/claude-code/pull/27204) | Fix hook validator for plugin wrapper format & optional matchers | **CLOSED** | Auto-detects `{"hooks":{...}}` vs direct settings; fixes validation for all existing plugin `hooks.json` |
| [#58646](https://github.com/anthropics/claude-code/pull/58646) | `git-aware-history`: fix session fragmentation across git worktrees | **CLOSED** | History keyed by repo root, not CWD; `/resume` works across worktrees, no orphaned history |
| [#78057](https://github.com/anthropics/claude-code/pull/78057) | Flag Python `exec()` as code-injection sink in security guidance | **OPEN** | Adds missing `exec()` detection (previously only `eval()` warned); gated to `.py` files |
| [#78049](https://github.com/anthropics/claude-code/pull/78049) | `Set-ClaudeCodePolicy.ps1`: fix 32-bit PowerShell host writing to `Program Files (x86)` | **OPEN** | Intune runs 32-bit by default; script now enforces 64-bit host or resolves correct path |
| [#77977](https://github.com/anthropics/claude-code/pull/77977) | Document `skipLfs` for `github`/`git` marketplace sources | **OPEN** | Adds examples for skipping Git LFS downloads in plugin marketplace config |

---

## 5. Feature Request Trends (Distilled from All Issues)

1. **Multi-session/agent observability** — Global task dashboard (#77531), cross-session history (#58646), background agent monitoring.
2. **IDE integration granularity** — Disable auto-attach (#24726), WSL remote native support (#49933), VS Code settings parity.
3. **Cost control & transparency** — Token burn warnings for browser automation (#77360), workflow cost anomalies (#77943), Max 20x team tier (#47509).
4. **Network/egress flexibility** — Allowlist custom domains (#30112), GitHub proxy fixes for cloud sessions (#78330).
5. **TUI/terminal behavior consistency** — Sub-agent fullscreen override (#78312), tmux rendering fixes (#77615), session-only pickers (#78329).
6. **Safety/guardrail tuning** — Over-blocking on legitimate code (#78332), cybersecurity topic blocks (#78331), mid-turn visibility (#77798).

---

## 6. Developer Pain Points (Recurring High-Frequency Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **VS Code sidebar auto-attaches unwanted context** | #24726 (185 👍, 60 comments) | Very High |
| **Network allowlist breaks private/enterprise domains** | #30112 (49 👍, 52 comments, 4+ months open) | High |
| **Token costs spike silently in long sessions / browser automation** | #77360, #77943, #47509 (pricing tier gap) | High |
| **macOS kernel memory leak crashes CLI under agent load** | #66020 (detailed repro, crash at 20 GB) | Medium-High |
| **Context compaction loses intra-session memory** | #75759, #78300 (agent forgets earlier actions) | Medium |
| **TUI rendering broken in tmux / sub-agents force fullscreen** | #77615, #78312 | Medium |
| **Remote Control / web session instability (401s, disconnect crashes)** | #78309, #78333, #78336 | Medium |
| **Overly restrictive guardrails block legitimate work** | #78332, #78331, #77798 | Medium |
| **Data loss: worktree mechanism deletes gitignored dirs; overwrite without confirm** | #75490, #78273 | Low but Severe |

---

*Digest generated from GitHub data (anthropics/claude-code) as of 2026-07-17. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-17

---

## 1. Today's Highlights

The Codex team shipped **rust-v0.144.5** with improved dangerous-command detection (including forced `rm` variants) and clearer rejection messaging. Meanwhile, the issue tracker shows **Windows performance and sandbox stability** dominating community concerns — multiple high-comment issues report severe slowdowns, Defender conflicts, WSL2 sandbox failures, and runaway `git.exe` spawning. On the CLI side, developers are actively requesting **event-driven background task callbacks** and **custom model provider support** for the desktop app.

---

## 2. Releases

### `rust-v0.144.5` (Stable)
- **Bug fix**: Enhanced dangerous-command detection to catch more forced `rm` forms (e.g., `rm -rf /`, `rm -f`) and provides clearer rejection reasons when commands are denied. [#33455](https://github.com/openai/codex/pull/33455)

### Alpha Channel: `0.145.0-alpha.19/18/16`
- Iterative pre-release builds; no changelog details published yet. [Compare 0.144.4→0.144.5](https://github.com/openai/codex/compare/rust-v0.144.4...rust-v0.144.5)

---

## 3. Hot Issues (Top 10 by Community Impact)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#10867](https://github.com/openai/codex/issues/10867)** Custom model providers in app | CLI supports `/model` switching; desktop app lacks parity — blocks BYOM workflows for enterprise/privacy users. | 19 comments, **48 👍** (highest in set) |
| **[#23198](https://github.com/openai/codex/issues/23198)** Windows Desktop extremely slow | App-level slowness on capable hardware; isolates to Codex, not system. Core usability blocker for Windows users. | 18 comments, **44 👍** |
| **[#20678](https://github.com/openai/codex/issues/20678)** Browser Use fails to connect to IAB from Node REPL on macOS | Breaks browser automation skill on macOS; affects Computer Use workflows. | 18 comments |
| **[#25799](https://github.com/openai/codex/issues/25799)** Windows app cannot launch sandboxed commands for WSL2 projects | Sandbox + WSL2 integration broken; forces developers to choose between isolation and WSL workflows. | 16 comments, **8 👍** |
| **[#30527](https://github.com/openai/codex/issues/30527)** Windows 10: Defender Behavior Monitoring / high CPU after update | Recent update triggers AV heuristics, causing system-wide lag. Security/perf collision. | 14 comments, **12 👍** |
| **[#23574](https://github.com/openai/codex/issues/23574)** VS Code extension allocates ~1M inotify watches on large Linux workspaces | Resource exhaustion on large repos; Linux file-watcher limits hit. | 12 comments, **11 👍** |
| **[#27613](https://github.com/openai/codex/issues/27613)** Support Amazon Bedrock project for cost attribution | Enterprise cost-tracking gap: no way to tag Bedrock inference to teams/workloads. | 11 comments, **14 👍** |
| **[#32314](https://github.com/openai/codex/issues/32314)** Windows 0.144.1: elevated sandbox adds ~20s/command; unelevated breaks `apply_patch` | Sandbox perf regression + functional regression; forces trade-off between speed and patch reliability. | 9 comments, **3 👍** |
| **[#33685](https://github.com/openai/codex/issues/33685)** Weekly limit draining like old 5-hour limit | Post-limit-change, quota consumption rate unchanged — suggests accounting bug or miscommunication. | 7 comments |
| **[#26812](https://github.com/openai/codex/issues/26812)** Windows app spawns `git.exe`/`conhost.exe` repeatedly → Nonpaged Pool growth | Process leak degrades system stability over time; potential kernel resource exhaustion. | 7 comments, **5 👍** |

---

## 4. Key PR Progress (Top 10 Merged/Closed in Last 24h)

| PR | Summary | Impact |
|----|---------|--------|
| **[#33695](https://github.com/openai/codex/pull/33695)** Support custom transports for Amazon Bedrock | Allows `base_url`, `auth`, `http_headers` overrides for Bedrock provider; enables proxy routing & custom auth. | Unblocks enterprise Bedrock proxy/cost-attribution needs ([#27613](https://github.com/openai/codex/issues/27613), [#28902](https://github.com/openai/codex/issues/28902)) |
| **[#31571](https://github.com/openai/codex/pull/31571)** Emit remote plugin IDs for skill invocations | Adds `remote_plugin_id` to analytics for explicit/implicit skill calls; improves billing attribution. | Observability for plugin ecosystem |
| **[#33687](https://github.com/openai/codex/pull/33687)** Avoid unnecessary writes during migration repair | Prevents spurious `UPDATE` on DB open when no repair needed; avoids writer-slot contention. | Fixes SQLite lock contention under concurrent access |
| **[#33684](https://github.com/openai/codex/pull/33684)** Extract TUI approval request payloads into structs | Dedicated structs for command/permissions/patch/MCP elicitation approvals; cleaner routing/rendering. | Maintainability; reduces TUI bug surface |
| **[#33683](https://github.com/openai/codex/pull/33683)** Preserve scope/provenance for imported agent memory | Records imported resources via `extension_resource_files`; retains frontmatter; limits `memory_summary.md` to project scope. | Prevents memory pollution across projects |
| **[#33680](https://github.com/openai/codex/pull/33680)** Reword `apply_patch` tool description | Clarifies tool contract for model; may reduce mis-application. | UX for model-tool interaction |
| **[#33677](https://github.com/openai/codex/pull/33677)** Forward thread originators from standalone extensions | Seeds extension data with resolved thread originator (`codex_work_cca`); preserves billing attribution. | Enterprise auditability for web search/image skills |
| **[#31529](https://github.com/openai/codex/pull/31529)** Core: add pre-rollover auto-compaction fallback | Structured `auto_compact_fallback` with `enabled`/`prompt`; runs restricted sampling before rollover. | Reduces context-loss during long sessions |
| **[#33665](https://github.com/openai/codex/pull/33665)** Refresh step world state for all sessions | Pushes `AGENTS.md`/env changes to model even with deferred executor disabled. | Consistency for multi-session workflows |
| **[#33659](https://github.com/openai/codex/pull/33659)** Require data URLs for code-mode image output | Rejects remote HTTP image URLs; only accepts `data:` scheme. | Security: prevents SSRF/exfil via generated images |

---

## 5. Feature Request Trends

1. **Custom Model Provider Parity (App ↔ CLI)** — `#10867` (48 👍), `#27613` (Bedrock cost attribution), `#28902` (Bedrock `base_url`): Developers want the desktop app to match CLI's `/model` switching and provider config flexibility.

2. **Event-Driven Background Execution** — `#32188`, `#33542`, `#33712`: Strong demand for "fire-and-forget" background tasks with automatic callback on completion — eliminates polling, saves token budget, enables true async workflows.

3. **Windows Sandbox + WSL2 Harmony** — `#25799`, `#32314`, `#29482`: Need sandbox to work *with* WSL2, not against it; elevated vs. unelevated trade-off is a false choice.

4. **Enterprise Cost & Audit Controls** — `#27613` (Bedrock project tagging), `#31571` (plugin ID emission), `#33677` (thread originator forwarding): Organizations require granular attribution for compliance/chargeback.

5. **Memory/Context Management** — `#31529` (auto-compact fallback), `#24336` (excessive context growth), `#33390` (130GB memory in swarm): Long-running and multi-agent sessions need better context compaction and memory scoping.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Affected Surface |
|------------|----------|------------------|
| **Windows performance regression** | `#23198` (44 👍), `#30527` (Defender conflict), `#33438` (0xC06D007F + input lag), `#33049` (terminal hangs), `#26812` (git.exe leak) | Desktop App (Windows) |
| **Sandbox latency & breakage** | `#32314` (+20s/command elevated), `#25799` (WSL2 fail), `#24155` (`apply_patch` hangs) | CLI + Desktop (Windows sandbox) |
| **Resource leaks at scale** | `#23574` (1M inotify watches), `#33390` (130GB RAM), `#24275` (log DB growth), `#26812` (Nonpaged Pool) | Extension, Desktop, CLI |
| **Quota accounting opacity** | `#33685` (weekly limit = old 5-hr rate), no official clarification | All surfaces |
| **Skill/Plugin reliability** | `#20678` (Browser Use macOS), `#31794` (Sites re-auth fail), `#33681` (Computer Use missing `node_repl`), `#26006` (browser/plugin not used) | Desktop Skills |
| **TUI/CLI focus & concurrency bugs** | `#33037` (freeze on FocusGained in Zellij), `#33645` (concurrent `write_stdin` fix just landed) | CLI/TUI |

---

*Digest generated from GitHub data as of 2026-07-17. Links point to live issues/PRs on `github.com/openai/codex`.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-17

## 1. Today's Highlights
The project shipped two releases in 24 hours: **v0.51.0 (stable)** and **v0.52.0-preview.0**, the latter introducing a refactor to exclude transient CI config files from workspace context and foundational modules for the new **Caretaker triage worker** (LLM-based issue classification). Security hardening continues with a fix for bash/PowerShell variable expansion bypass (GHSA-wpqr-6v78-jr5g) and a macOS Seatbelt sandbox escape remediation. Community discussion remains focused on subagent reliability, Auto Memory quality, and terminal UX polish.

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.52.0-preview.0** | Preview | • Refactor: exclude transient CI config files from workspace context ([#28216](https://github.com/google-gemini/gemini-cli/pull/28216))<br>• Feat: add triage worker core foundational modules for Caretaker ([#28216](https://github.com/google-gemini/gemini-cli/pull/28216)) |
| **v0.51.0** | Stable | • Changelog for v0.50.0-preview.1 ([#28150](https://github.com/google-gemini/gemini-cli/pull/28150))<br>• Fix `no_proxy` test ([#28131](https://github.com/google-gemini/gemini-cli/pull/28131))<br>• Version bump to 0.51.0-nightly |

## 3. Hot Issues (Top 10 by Impact & Discussion)
| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after `MAX_TURNS` reported as GOAL success | **P1 bug**: Subagents silently report success when they hit turn limits, masking failures. Blocks reliable automation. | 10 comments, 2 👍, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs indefinitely | **P1 bug**: Core agent delegation path deadlocks on simple ops (e.g., folder creation). Workaround: disable subagents. | 7 comments, 8 👍, `status/need-retesting` |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell command stuck at "Waiting input" after completion | **P1 core bug**: Frequent false-positive hang on trivial commands; breaks flow. | 4 comments, 3 👍 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) Robust component-level evaluations (EPIC) | **P1 infra**: 76 behavioral evals across 6 models; foundational for regression prevention. | 7 comments |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory retries low-signal sessions indefinitely | **P2 bug**: Unprocessed sessions re-queued endlessly, wasting quota & compute. | 5 comments |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Add deterministic redaction & reduce Auto Memory logging | **P2 security**: Secrets enter model context before redaction; logs may persist sensitive data. | 3 comments |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) Assess AST-aware file reads, search, mapping | **P2 exploration**: Could reduce turns & token noise via precise method-bound reads. | 7 comments, 1 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini under-uses skills & sub-agents autonomously | **P2 behavior**: Agent ignores registered skills unless explicitly instructed; limits extensibility value. | 6 comments |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 400 error with >128 tools | **P2 scalability**: Tool explosion breaks API calls; needs smarter scoping. | 3 comments |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent ignores `settings.json` overrides (e.g., `maxTurns`) | **P2 config bug**: User config not respected; undermines customization. | 3 comments |

## 4. Key PR Progress (Top 10 by Significance)
| PR | Type | Summary |
|----|------|---------|
| [#28403](https://github.com/google-gemini/gemini-cli/pull/28403) | **Security (P1)** | Block `$VAR` / `${VAR}` variable expansion bypass (GHSA-wpqr-6v78-jr5g); hardens automated dedup workflow. |
| [#28423](https://github.com/google-gemini/gemini-cli/pull/28423) | **Security (P1)** | Fix macOS Seatbelt sandbox escape: permissive profiles used `(allow default)` → now deny-by-default with explicit allow-list. |
| [#28424](https://github.com/google-gemini/gemini-cli/pull/28424) | **Security (P1)** | Align permissive Seatbelt profiles with deny-default model; preserves dev workflow while closing mount/launchd holes. |
| [#28345](https://github.com/google-gemini/gemini-cli/pull/28345) | **Feature (Large)** | Implement LLM triage orchestrator (Antigravity SDK), GCS debug logging, Cloud Run Job container for Caretaker. |
| [#28411](https://github.com/google-gemini/gemini-cli/pull/28411) | **Automation** | Caretaker posts explanatory comment before auto-closing feature requests; improves contributor UX. |
| [#28352](https://github.com/google-gemini/gemini-cli/pull/28352) | **Security** | Sanitize issue title in Caretaker ingestion to prevent prompt injection (`</untrusted_context>` escaping). |
| [#28304](https://github.com/google-gemini/gemini-cli/pull/28304) | **UX (P1)** | Show clear message when account lacks Code Assist tier (instead of raw backend error) in `/privacy`. |
| [#28405](https://github.com/google-gemini/gemini-cli/pull/28405) | **UX (P1/P2)** | Prevent scroll-position jump when user scrolls up during content updates (fixes #5009). |
| [#28309](https://github.com/google-gemini/gemini-cli/pull/28309) | **UX** | Improve markdown rendering: CJK hard-wrapping fix + `__bold__` syntax support. |
| [#28232](https://github.com/google-gemini/gemini-cli/pull/28232) | **CI Security** | Split eval workflow (`pull_request` + `workflow_run`) to eliminate supply-chain RCE via `pull_request_target`. |

## 5. Feature Request Trends
1. **Subagent/skill autonomy** — Multiple issues (#21968, #20195, #22598) ask for agents to *proactively* invoke skills/subagents and expose trajectories via `/chat share`.
2. **AST-aware tooling** — Epic #22745 + #22746 explore precise code navigation (method bounds, call graphs) to cut turns and token spend.
3. **Auto Memory quality & safety** — Cluster of issues (#26522, #26523, #26525, #26516) around deduplication, redaction-before-log, invalid-patch quarantine.
4. **Browser agent hardening** — Persistent profile locking (#22232), config overrides (#22267), Wayland support (#21983).
5. **Evaluation infrastructure** — Scaling behavioral evals across models (#24353) and new evals for interactive prompts (#22465).

## 6. Developer Pain Points
- **Silent subagent failures** — Turn-limit masking (#22323), hangs (#21409), missing context in `/bug` (#21763).
- **Shell integration flakiness** — False "awaiting input" (#25166), tmp-script litter (#23571), destructive git commands (#22672).
- **Config not respected** — Browser agent ignores `settings.json` (#22267); symlinked agents not loaded (#20079).
- **Terminal UX regressions** — Scroll jump on update (#28405), flicker on resize (#21924), external editor corruption (#24935).
- **Tool explosion** — 400 errors beyond ~128 tools (#24246); need dynamic scoping.
- **Auto Memory noise** — Infinite low-signal retries (#26522), secrets in logs (#26525), invalid patches silently dropped (#26523).

---

*Digest generated from `google-gemini/gemini-cli` GitHub activity (2026-07-16 → 2026-07-17). Links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-17

## Today's Highlights
Version **1.0.72-0** ships with multi-turn subagents now always enabled, tool search support for Claude Haiku 4.5+, and a fix for emoji shortcode rendering. The issue tracker shows intense activity around session/context limits (CAPI 5 MB ceiling), BYOK/custom-provider regressions, and voice-mode ASR failures — all areas where developers are hitting hard platform boundaries.

## Releases
### v1.0.72-0 (2026-07-17)
- **Added**: Multi-turn subagents always enabled (follow-up messages to running agents); tool search for Claude Haiku 4.5+  
- **Improved**: Scheduled prompts delivered as steering messages when agent is busy  
- **Fixed**: Emoji shortcodes (e.g., `:tada:`) no longer render with artifacts  
[Release notes](https://github.com/github/copilot-cli/releases/tag/v1.0.72-0)

## Hot Issues
| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4024](https://github.com/github/copilot-cli/issues/4024) | Voice mode: all bundled ASR models fail silently (MultiModalProcessor routing bug for nemotron_speech) | Blocks `/voice` entirely — mic captures but transcriptions return empty for all three models | 11 comments, active investigation |
| [#3762](https://github.com/github/copilot-cli/issues/3762) | `contextTier` config option does nothing until manual model-picker selection | Long-context tier ignored on startup; breaks non-interactive workflows expecting large context | 4 comments, persistent since June |
| [#4097](https://github.com/github/copilot-cli/issues/4097) | `apply_patch` stores deleted binary in session history, exceeding CAPI 5 MB limit | Large binary deletions bloat conversation history, causing subsequent requests to fail with 5 MB cap | 3 comments, 2 👍, blocks `/compact` |
| [#4016](https://github.com/github/copilot-cli/issues/4016) | BYOK (COPILOT_PROVIDER_*) rejected in `--acp` mode: `-32000 Authentication required` | Regression (1.0.61–1.0.68) — custom providers work in `-p` but fail in ACP/stdio mode | 3 comments, 3 👍, blocks enterprise BYOK |
| [#3481](https://github.com/github/copilot-cli/issues/3481) | `contextTier=long_context` not applied on startup / no CLI flag for long context | Settings ignored for non-interactive sessions; no way to force long context via flag | 2 comments, 5 👍, high developer demand |
| [#1152](https://github.com/github/copilot-cli/issues/1152) | More verbose token information (input, output, cache_read, cache_write) | Current `/usage` lacks granularity vs. Claude CLI; hinders cost/latency optimization | 2 comments, 6 👍, long-standing request |
| [#4139](https://github.com/github/copilot-cli/issues/4139) | Support for custom/third-party LLM endpoints (Google Cloud AI, Azure OpenAI, local models) | Parity with Claude CLI’s provider flexibility; critical for air-gapped/regulated environments | 0 comments, 6 👍, strong strategic signal |
| [#4143](https://github.com/github/copilot-cli/issues/4143) | CLI should inherit MCP tools from connected VS Code instance | Eliminates duplicate MCP config; enables seamless IDE↔CLI tool sharing | 0 comments, 3 👍, workflow integration pain |
| [#4122](https://github.com/github/copilot-cli/issues/4122) | Subagents resolve relative markdown links in `.agent.md` against cwd instead of agent file dir | Breaks agent portability; linked docs fail to load when subagent runs in different directory | 1 comment, 2 👍, agent authoring friction |
| [#3891](https://github.com/github/copilot-cli/issues/3891) | Sub-agent `model:` override silently dropped in BYOK/custom-provider mode | Custom agents declaring different models fall back to primary session model without warning | 0 comments, 1 👍, silent misconfiguration |

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends
1. **Custom provider / BYOK parity** — Multiple issues (#4016, #3891, #4139) demand full support for non-GitHub LLMs across all CLI modes (interactive, ACP, subagents).  
2. **Context-tier control** — Developers want reliable `long_context` activation via config *and* CLI flag (#3481, #3762), not just manual model-picker selection.  
3. **Token observability** — Granular token accounting (cache read/write) is the top-voted long-running request (#1152).  
4. **MCP ecosystem integration** — Inheriting VS Code MCP tools (#4143) and path-scoped permissions (#4157) reflect desire for unified tool surface.  
5. **Voice/ASR extensibility** — Multilingual STT and custom model selection (#3658) plus current ASR regression (#4024) highlight voice as a growth vector.

## Developer Pain Points
- **CAPI 5 MB hard limit** — Oversized attachments (#3767), binary diffs in history (#4097), and compaction failures (#4138) repeatedly wedge sessions with no recovery affordance.  
- **BYOK regressions in ACP mode** — Custom providers work in interactive (`-p`) but fail in programmatic (`--acp --stdio`) flows, blocking CI/automation (#4016).  
- **Session resume fragility** — Background compaction on resume can hang indefinitely (#4138); kickoff prompts dropped for worktree sessions (#4153).  
- **Permission model gaps** — Destructive `git branch -D` runs without prompt (#4156); command identifiers with spaces ignored (#4150); directory prompts show wrong paths (#4142).  
- **Install/Windows friction** — Winget install fails (#4149); plugin install hits `Access is denied` on Windows 11 for all sources (#4151).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-17

---

## 1. Today's Highlights
- **Version 1.49.0 released** with fixes for context budget calculation (`kimi`) and empty `reasoning_content` handling (`kosong`).
- **Windows PowerShell 5.1 install script broken** — `install.ps1` throws `IndexOutOfRangeException` during binary download, blocking fresh installs on legacy shells.
- **Telemetry schema aligned** with the TypeScript rewrite (`agent-core-v2`), adding `trace_id` capture and missing events for observability parity.

---

## 2. Releases

### `kimi-cli@1.49.0` & `kosong@0.55.0` (PR #2503)
| Component | Change |
|-----------|--------|
| **kimi** | Fix: use remaining context for completion budget (PR #2494) |
| **kosong** | Fix: preserve empty-string `reasoning_content` as `ThinkPart` (PR #2498) |
| **kosong** | Fix: stop sending … (truncated in source) |

> **Install**: `irm https://code.kimi.com/kimi-code/install.ps1 \| iex` (currently broken on PS 5.1 — see Hot Issues)  
> **Changelog**: [Release PR #2503](https://github.com/MoonshotAI/kimi-cli/pull/2503)

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **[#2504](https://github.com/MoonshotAI/kimi-cli/issues/2504)** | `install.ps1` crashes on Windows PowerShell 5.1 (`IndexOutOfRangeException`) | Blocks **all fresh Windows installs** on default PS 5.1; no workaround documented. | 🆕 Created today, 0 comments yet — high urgency. |
| **[#1559](https://github.com/MoonshotAI/kimi-cli/issues/1559)** | Official site download command errors | Persistent install friction reported since March; affects onboarding. | 👍 1, updated yesterday — still unresolved. |
| **[#2318](https://github.com/MoonshotAI/kimi-cli/issues/2318)** | Org TPD rate limit hit (1.5M tokens) | Suggests **incorrect TPD accounting** or leak; impacts heavy users on moonshot.ai. | 👍 1, open since May. |
| **[#2501](https://github.com/MoonshotAI/kimi-cli/issues/2501)** | [Feature] Quick-switch Reasoning Level in TUI main UI | UX parity with Codex/VS Code; avoids `/model` menu context switch. | 🆕 Created yesterday, 0 comments — clear demand. |

---

## 4. Key PR Progress

| # | Title | Status | Impact |
|---|-------|--------|--------|
| **[#2503](https://github.com/MoonshotAI/kimi-cli/pull/2503)** | `chore(release): bump kimi-cli to 1.49.0 and kosong to 0.55.0` | **Merged** | Ships the fixes above; updates wrapper & pins. |
| **[#2500](https://github.com/MoonshotAI/kimi-cli/pull/2500)** | `feat(telemetry): align events with TS schema, add trace_id` | **Merged** | Enables end-to-end tracing; parity with `agent-core-v2`. |
| **[#2488](https://github.com/MoonshotAI/kimi-cli/pull/2488)** | `fix(soul): actionable LLMNotSet error for fresh installs` | Open | Guides new users to `kimi login` instead of cryptic error. |
| **[#2471](https://github.com/MoonshotAI/kimi-cli/pull/2471)** | `feat(tools): add Monitor tool for per-line stdout streaming` | Open | Streaming counterpart to background tasks; enables live log tails. |

---

## 5. Feature Request Trends
1. **In-TUI model/reasoning controls** — Avoid nested menus; want Codex-style inline selectors (Issue #2501).
2. **Installer robustness** — Cross-shell (PS 5.1 vs 7+), cross-platform reliability.
3. **Observability parity** — Telemetry/events matching TS rewrite for unified dashboards (PR #2500).
4. **Streaming tooling** — First-class `Monitor` tool for real-time stdout (PR #2471).

---

## 6. Developer Pain Points
| Pain Point | Evidence |
|------------|----------|
| **Broken Windows onboarding** | `install.ps1` fails on default PS 5.1 (#2504); official download command errors persist (#1559). |
| **Opaque rate limiting** | TPD limit reached unexpectedly; calculation appears incorrect (#2318). |
| **Unfriendly first-run errors** | `LLM not set` with no guidance (fixed in PR #2488, not yet released). |
| **Context-switch friction** | Reasoning level changes require `/model` menu dive (#2501). |

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` — releases, issues, and PRs updated in the last 24h.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-17

## Today's Highlights
OpenCode v1.18.3 shipped with desktop stability fixes (WSL startup readiness, home page scrolling) and a UX tweak for the subagent picker. The community remains focused on three critical pain points: persistent "Failed to fetch" errors across providers, memory pressure investigations, and paid Zen/Go model failures. A major prompt quality fix landed to prevent token-minimization rules from degrading code output.

---

## Releases
### v1.18.3
- **Core**: Added Up Arrow shortcut to close subagent picker when first item selected
- **Desktop**: Fixed home page scrolling (sticky headers + session list); fixed startup readiness to include WSL server loading before desktop ready state
- [Release Notes](https://github.com/anomalyco/opencode/releases/tag/v1.18.3)

---

## Hot Issues (Top 10 by Community Impact)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695) | Central tracking for scattered memory leaks; team requests heap snapshots from users | 110 comments, 89 👍 — highest engagement |
| [#13984 Copy/Paste Broken in CLI](https://github.com/anomalyco/opencode/issues/13984) | Fundamental clipboard failure blocks basic workflow; persists across versions | 53 comments, 26 👍 |
| [#36506 Paid Zen Models Fail](https://github.com/anomalyco/opencode/issues/36506) | All paid Zen models (`MiniMax-M3`, `deepseek-v4-flash`) return "Upstream request failed"; free models work | 5 comments, 2 👍 — revenue-impacting |
| [#37255 Desktop 1.18.2: Models Never Reply](https://github.com/anomalyco/opencode/issues/37255) | Post-update regression: messages send but no response; API key valid | 3 comments, 3 👍 |
| [#27474 / #27755 / #32416 "Failed to Fetch" Cluster](https://github.com/anomalyco/opencode/issues/27474) | Recurring network/WS errors on explore, agent switch, or prompt send; blocks usage | 8+6+3 comments combined |
| [#28696 Plugin/Agent/Skills Marketplace](https://github.com/anomalyco/opencode/issues/28696) | Master issue for unified registry/discovery; high demand for ecosystem extensibility | 6 comments, 23 👍 |
| [#37056 opencode-go 400/401/500 Errors](https://github.com/anomalyco/opencode/issues/37056) | Subscribed models fail via proxy; large requests (300KB+) almost always 400 | 2 comments |
| [#37372 v2: Empty Reasoning Recorded as Success](https://github.com/anomalyco/opencode/issues/37372) | Reasoning-only responses with no tool calls marked complete; downstream gets no output/failure | 2 comments |
| [#29186 Log LLM API at DEBUG Level](https://github.com/anomalyco/opencode/issues/29186) | No visibility into request/response bodies at DEBUG; blocks provider debugging | 3 comments, 3 👍 |
| [#35319 / #33201 / #34697 RTL Support](https://github.com/anomalyco/opencode/issues/35319) | Arabic/Farsi/Urdu/Pashto rendering broken: word order, alignment, tables; fix recipe provided | 6+3+4 comments |

---

## Key PR Progress (Top 10 by Significance)

| PR | Type | Summary | Linked Issue |
|----|------|---------|--------------|
| [#37375](https://github.com/anomalyco/opencode/pull/37375) | **Fix** | Added coding-quality exceptions to token-minimization rules in system prompt (prevents omitted logs, tests, guards) | #37367 |
| [#37219](https://github.com/anomalyco/opencode/pull/37219) | **Fix** | Ignore `node_modules` during config/skill glob scans; avoids massive traversal | #30337 |
| [#37414](https://github.com/anomalyco/opencode/pull/37414) | **Fix** | Replaced quadratic diff-summary deduplication with Set-backed reverse scan (21k sequences verified) | #33106 |
| [#37190](https://github.com/anomalyco/opencode/pull/37190) | **Fix** | Handle unavailable notification server during WSL init; prevents renderer crash | #37171 |
| [#37409](https://github.com/anomalyco/opencode/pull/37409) | **Fix** | Added `OPENCODE_VERSION` define to Node.js Desktop build (was missing, caused `local` plugin install) | #30908 |
| [#37410](https://github.com/anomalyco/opencode/pull/37410) | **Fix** | Scoped WebFetch "always allow" to domain instead of wildcard `*` (security) | #37183 |
| [#36752](https://github.com/anomalyco/opencode/pull/36752) | **Fix** | Read cache write tokens from raw usage for Anthropic via OpenAI-compatible gateways | #36749 |
| [#37404](https://github.com/anomalyco/opencode/pull/37404) | **Feat** | Added `$hovered` theme state for actions/form fields; light/dark/V1 defaults | — |
| [#36781](https://github.com/anomalyco/opencode/pull/36781) | **Feat** | Multiple named profiles per provider (e.g., separate OpenRouter keys per project) | #5391 |
| [#37395](https://github.com/anomalyco/opencode/pull/37395) | **Fix** | Isolated server request traces from long-lived lifecycle spans; preserves `traceparent` | — |

---

## Feature Request Trends
1. **Marketplace / Registry** — Unified discovery for plugins, agents, skills, MCP servers (#28696, #37376)
2. **Multi-Provider Profiles** — Named API key profiles per provider (landed in #36781)
3. **Prompt Queue & Interrupt Controls** — Queue follow-ups without stopping stream (#37381)
4. **RTL / i18n Completeness** — Full RTL language support (Arabic, Farsi, Urdu, Pashto, Sorani) (#35319, #33201, #34697)
5. **Drag-and-Drop for Office Files** — `.docx`, `.xlsx` support in chat (#27689)
6. **Build/Plan Mode Automation** — JSON config to auto-return to Plan after Build (#37222)
7. **External CLI Agent Adapter** — Capability-based conformance layer for third-party agents (#37388)
8. **Web UI Plugin Extensibility** — Modify desktop/web UI via plugins (#37413)

---

## Developer Pain Points (Recurring Frustrations)
- **"Failed to fetch" instability** — Multiple distinct error paths (explore, agent switch, prompt send) with same symptom; WSL and network timing suspected
- **Paid model reliability** — Zen/Go paid tiers failing while free tiers work; 400/401/500 errors on large contexts
- **Memory opacity** — No built-in heap profiling; users asked to manually capture snapshots
- **CLI clipboard broken** — Copy shows "copied" but paste yields nothing; blocks terminal workflows
- **Debugging blind spots** — DEBUG logs omit LLM request/response bodies; provider issues unobservable
- **Post-update regressions** — v1.18.2 broke model responses; v2 records empty reasoning as success
- **Legacy layout removal** — Users want option to retain old single-window access pattern (#37012)
- **Notification server race** — WSL startup fails if notification server not ready (#37331, fixed in #37190)

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-17

## Today's Highlights
Pi shipped three patch releases in 24 hours (v0.80.8–v0.80.10), headlined by **unified model runtime with provider-owned authentication**, **Kimi K3 support with deferred tool loading**, and **Kimi Coding thinking compatibility** (adaptive thinking + empty-signature block replay). The community is actively triaging provider catalog drift (xAI, Together.ai deprecations), TUI rendering regressions under kitty keyboard protocol, and extension-loading breakage introduced in 0.80.8/0.80.9.

---

## Releases

| Version | Key Changes |
|---------|-------------|
| **v0.80.10** | Kimi Coding thinking compatibility: adaptive thinking now works correctly; K3 exposes its supported `max` level and supports replaying empty-signature thinking blocks. [Release notes](https://github.com/earendil-works/pi/releases/tag/v0.80.10) |
| **v0.80.9** | Kimi K3 across built-in providers + progressive extension tool activation via Kimi’s native protocol (Dynamic Tool Loading). [Release notes](https://github.com/earendil-works/pi/releases/tag/v0.80.9) |
| **v0.80.8** | Unified `ModelRuntime` centralizing model config, provider-owned `/login`, dynamic provider catalogs; live model updates. [Release notes](https://github.com/earendil-works/pi/releases/tag/v0.80.8) |

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6657](https://github.com/earendil-works/pi/issues/6657) | **Bedrock `AWS_PROFILE` auth still failing** (403) despite 0.80.7 fix claim | Blocks AWS users on Bedrock; regression or incomplete fix | 9 comments, 👍 2 — users confirm persistence |
| [#3808](https://github.com/earendil-works/pi/issues/3808) | **Anthropic subscription auth warning not dismissible** | Noise for Claude plan users; UX friction in interactive mode | 9 comments — closed but sentiment lingers |
| [#6686](https://github.com/earendil-works/pi/issues/6686) | **Pi auto-logs out of GitHub** (regression from #2725) | Breaks GitHub-dependent workflows; multi-device impact | 8 comments — “still active” on 0.80.7 |
| [#5821](https://github.com/earendil-works/pi/issues/5821) | **Agent SDK apps should honor Anthropic subscription** (no extra credits) | Cost predictability for SDK builders; aligns with Anthropic policy | 8 comments, 👍 1 — policy clarification sought |
| [#5294](https://github.com/earendil-works/pi/issues/5294) | **`/settings` http timeout=false ignored with llama.cpp** | Local slow-model users hit hard timeouts despite config | 7 comments — config not respected |
| [#6743](https://github.com/earendil-works/pi/issues/6743) | **`pi-ollama-cloud` extension fails to load on 0.80.8/0.80.9** | Extension ecosystem breakage; only fix is downgrade | 2 comments — `Cannot read properties of undefined (reading 'create')` |
| [#6736](https://github.com/earendil-works/pi/issues/6736) | **0.80.9 still exposes removed xAI models** (Grok 3, 4.20 variants) | Catalog drift → authenticated users see dead entries | 3 comments — catalog sync issue |
| [#6746](https://github.com/earendil-works/pi/issues/6746) | **`/model` selector flashes/closes under kitty keyboard protocol** | Breaks model switching in kitty, WezTerm, VS Code terminal | 1 comment — input protocol regression |
| [#6704](https://github.com/earendil-works/pi/issues/6704) | **TUI input box off-by-one (189 cols in 188-col terminal)** | Crash on long prompts; render-width assertion trip | 2 comments — 0.80.7 regression |
| [#6132](https://github.com/earendil-works/pi/issues/6132) | **Together.ai deprecating GLM-5.1, Qwen3-235B (Jul 10)** | Model catalog stale; users select deprecated models | 4 comments — alternatives not yet supported |

---

## Key PR Progress (10 Notable)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#6750](https://github.com/earendil-works/pi/pull/6750) | **Markdown transformer API** | Open | Adds `markdownTransformer` API; exports `marked`; example extension converting formulas → Unicode. Closes #6747. |
| [#6739](https://github.com/earendil-works/pi/pull/6739) | **Telnyx Inference provider** | Closed | New built-in OpenAI-compatible provider (`api.telnyx.com/v2/ai`) for open-source LLMs on Telnyx GPUs. |
| [#6742](https://github.com/earendil-works/pi/pull/6742) | **Explicit model generation** | Open | Makes model generation explicit (closes #6741). |
| [#6734](https://github.com/earendil-works/pi/pull/6734) | **xAI: prefilled OAuth, SuperGrok label, trimmed model list** | Closed | Defaults to `grok-4.5`; removes deprecated models; improves device-code OAuth UX. |
| [#6216](https://github.com/earendil-works/pi/pull/6216) | **Amazon Bedrock Mantle OpenAI Responses provider** | Open | New provider using OpenAI’s Bedrock client for Mantle’s Responses API. Supersedes prior attempt. |
| [#6731](https://github.com/earendil-works/pi/pull/6731) | **Don’t highlight read errors** | Closed | Skips syntax highlighting for failed `read` results; keeps success highlighted. Adds Elixir regression test. |
| [#6730](https://github.com/earendil-works/pi/pull/6730) | **Preserve compaction queue behavior** | Open | Fixes steering/follow-up loss when compaction queue flushes; adds regression coverage. |
| [#6594](https://github.com/earendil-works/pi/pull/6594) | **SQLite session storage** | Open | Adds `retainedTail` to compaction entries; optimizes `getPathToRoot` → `getPathToRootOrCompaction`. |
| [#6721](https://github.com/earendil-works/pi/pull/6721) | **Test model catalogs against PR merge refs** | Open | Uses GitHub merge refs for catalog generation so pre-merge branches include latest scripts. |
| [#6720](https://github.com/earendil-works/pi/pull/6720) | **Publish generated model catalogs to R2** | Closed | Deterministic JSON catalogs (full + per-provider); content-addressed revisions; 4-hr artifact generation. |

---

## Feature Request Trends (from Issues)

1. **Provider catalog hygiene** — Automatic removal of deprecated models (xAI, Together.ai), sync between release notes and runtime catalogs (#6736, #6748, #6132).
2. **Extensible auth UX** — Dismissible warnings, prefilled OAuth device codes, subscription-aware billing messaging (#3808, #6734, #5821).
3. **Extension API hardening** — Deferred canonical reload (`requestReload()`), stable UI selectors with viewport windowing, Markdown transformer hooks (#6552, #6688, #6750).
4. **Session & compaction control** — Explicit compaction queue steering, retained tails for faster restore, SQLite backend (#6730, #6594, #5253).
5. **Security defaults** — `0600` on `/tmp` files, `crypto.randomUUID()` over `Math.random()`, bash command guardrails opt-in (#6729, #6712, #6716).

---

## Developer Pain Points (Recurring)

| Area | Frequency | Representative Issues |
|------|-----------|------------------------|
| **Provider auth drift** | High | Bedrock `AWS_PROFILE` broken (#6657), Anthropic warning spam (#3808), GitHub re-auth loop (#6686), xAI OAuth UX (#6734) |
| **Extension breakage on minor releases** | High | `pi-ollama-cloud` fails on 0.80.8/0.80.9 (#6743), selector viewport missing (#6688), custom UI API docs obsolete (#6735) |
| **TUI rendering regressions** | Medium | Kitty keyboard protocol closes selectors (#6746), off-by-one column crash (#6704), tab normalization needed (#6697) |
| **Model catalog staleness** | Medium | Removed xAI models still exposed (#6736), deprecated Together.ai models selectable (#6748, #6132), GPT-5.4 thinking map wrong (#6740) |
| **Local/slow model timeouts** | Medium | `http timeout=false` ignored with llama.cpp (#5294), Qwen/Lemonade overflow detection flawed (#4862) |
| **Observability gaps** | Low | API error bodies sometimes dropped (#6749), orchestrator zero tests (#6710), no destructive command guardrails (#6716) |

---

*Digest generated from `github.com/badlogic/pi-mono` (releases, issues, PRs updated 2026-07-16 → 2026-07-17).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-17

## 1. Today's Highlights
The project shipped **v0.19.11** (stable) alongside a nightly build, delivering multi-workspace daemon hardening, web-shell workspace path locking, and a wave of UI/UX polish across VP mode, web shell, and CLI. A security fix scoping channel pairing/allowlist state by workspace landed in PR #7065, addressing a cross-workspace data leak. Community focus remains on multi-workspace daemon semantics, VS Code integration stability, and terminal rendering reliability.

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.19.11** | Stable | • `feat(web-shell)`: workspace path lock ([#6853](https://github.com/QwenLM/qwen-code/pull/6853))<br>• `fix(serve)`: harden multi-workspace ownership |
| **v0.19.11-nightly.20260717.f8e6e8931** | Nightly | • `feat(daemon)`: trace cold first-session startup ([#6907](https://github.com/QwenLM/qwen-code/pull/6907))<br>• `fix(serve)`: harden multi-workspace ownership |

> **No breaking changes** reported in either release.

## 3. Hot Issues (Top 10 by Community Signal)
| # | Title | Status | Comments | Why It Matters |
|---|-------|--------|----------|----------------|
| [#6378](https://github.com/QwenLM/qwen-code/issues/6378) | RFC: Support multiple workspaces in one `qwen serve` daemon | CLOSED | 25 | Foundational design discussion for multi-workspace daemon; drives PRs #7014, #7015, #7003. |
| [#7051](https://github.com/QwenLM/qwen-code/issues/7051) | VS Code side plugin error: ACP process exited unexpectedly | OPEN | 4 | Blocks VS Code extension users; stderr shows unknown `acp`/`channel` flags passed to Electron. |
| [#7056](https://github.com/QwenLM/qwen-code/issues/7056) | VS Code companion v0.19.11 fails to connect (same ACP error) | OPEN | 3 | Duplicate of #7051; confirms regression in 0.19.11 release. |
| [#7044](https://github.com/QwenLM/qwen-code/issues/7044) | Upgrade errors on v0.19.11 (CLI startup crash) | OPEN | 4 | Immediate post-upgrade breakage; affects new installs. |
| [#6857](https://github.com/QwenLM/qwen-code/issues/6857) | `/update` falsely reports "up to date" on 0.19.9 | CLOSED | 4 | Fixed in #6887 (v0.19.10+); timeout logic improved but UX still harsh (#7049). |
| [#7017](https://github.com/QwenLM/qwen-code/issues/7017) | **Security**: Channel pairing/allowlist state not scoped by workspace | OPEN | 2 | Global `$QWEN_HOME/channels/` storage leaks across workspaces; PR #7065 fixes. |
| [#7002](https://github.com/QwenLM/qwen-code/issues/7002) | CentOS 7 incompatibility: `GLIBC_2.27` / `GLIBCXX_3.4.21` missing | OPEN | 3 | Blocks enterprise/Linux users on older distros; needs binary compatibility strategy. |
| [#6996](https://github.com/QwenLM/qwen-code/issues/6996) | Custom OpenAI-compatible provider fails with generic "Connection error" | OPEN | 3 | Real error cause discarded before logging; hurts debugging for self-hosted models. |
| [#7034](https://github.com/QwenLM/qwen-code/issues/7034) | Agent silently stops after tool result when response is thought-only/placeholder | OPEN | 1 | Core agent reliability; empty continuations treated as success (PR #7039 addresses). |
| [#7006](https://github.com/QwenLM/qwen-code/issues/7006) | Streaming code blocks taller than viewport break rendering (prose fallback, line numbers reset) | OPEN | 2 | TUI markdown rendering regression for long outputs; affects readability. |

## 4. Key PR Progress (Top 10 by Impact)
| # | Title | Author | Status | Impact |
|---|-------|--------|--------|--------|
| [#7065](https://github.com/QwenLM/qwen-code/pull/7065) | **fix(channels): scope pairing and allowlist state by workspace** | zjunothing | OPEN | **Security fix**: isolates channel auth per workspace (resolves #7017). |
| [#7003](https://github.com/QwenLM/qwen-code/pull/7003) | **feat(serve): Complete legacy session workspace telemetry** | doudouOUC | OPEN | Adds declarative telemetry catalog for 48 legacy routes; enables workspace attribution. |
| [#7064](https://github.com/QwenLM/qwen-code/pull/7064) | **feat(web-shell): paginate restored session history** | ytahdn | OPEN | Bounded recent-history paint + lazy-load older turns; fixes massive transcript restore perf. |
| [#7018](https://github.com/QwenLM/qwen-code/pull/7018) | **feat(web-shell): add skill management pages** | ytahdn | OPEN | Full Skills UI in web shell: search, filter, enable/disable, status, manual install. |
| [#6937](https://github.com/QwenLM/qwen-code/pull/6937) | **feat(cli): mouse text selection and copy in VP mode** | chiga0 | OPEN | Click-drag, double/triple-click selection; copies to system clipboard. |
| [#6931](https://github.com/QwenLM/qwen-code/pull/6931) | **fix(cli): tighten VP-mode controls footprint & fix shell tool indicator overlap** | chiga0 | OPEN | Prevents sticky panels from crowding conversation; fixes 5 rendering issues. |
| [#7052](https://github.com/QwenLM/qwen-code/pull/7052) | **fix(core): make per-turn tool-call cap adaptive** | wenshao | OPEN | Dynamic cap based on context; prevents premature truncation in complex tasks. |
| [#7060](https://github.com/QwenLM/qwen-code/pull/7060) | **feat(ui): read full plan from `exit_plan_mode` confirmation** | zjunothing | OPEN | Press `o` to open complete plan in editor (resolves #7001). |
| [#7039](https://github.com/QwenLM/qwen-code/pull/7039) | **fix(core): retry empty tool-result continuations** | yiliang114 | OPEN | Treats thought-only/placeholder responses as retryable (fixes #7034 silent stop). |
| [#7062](https://github.com/QwenLM/qwen-code/pull/7062) | **fix(cli): hide sticky task panel when agent is idle** | qwen-code-dev-bot | OPEN | Removes stale "◐" indicators after conversation ends (fixes #7061). |

## 5. Feature Request Trends
| Direction | Representative Issues/PRs | Signal |
|-----------|---------------------------|--------|
| **Multi-workspace daemon** | #6378 (RFC), #7014 (branch/fork routing), #7015 (cd ownership), #7003 (telemetry) | **High** — 4+ PRs active; core architectural shift. |
| **Web Shell parity with CLI** | #7064 (history pagination), #7018 (Skills UI), #7054 (Git status/diff), #6561 (Goals page) | **High** — 5 PRs this week; browser UI becoming first-class. |
| **VP mode (viewport) maturity** | #6937 (mouse selection), #6931 (layout fixes), #7062 (sticky panel logic) | **Medium** — Polish for alternate-screen terminal buffer. |
| **Path/filename display unification** | #7007 (Phase 1), #7008 (Phase 2), #7009 (Phase 3), #7004 (unified utility) | **Medium** — 4 linked issues eliminating 9 inconsistent formatters. |
| **Plan mode UX** | #7001 (view full plan), #7060 (PR), #6967 (explicit approval required) | **Medium** — Iterative refinement of coding-plan workflow. |
| **Voice input** | #5431 (optional voice mode) | **Low** — Long-standing request; no active PR. |
| **Auto-memory lifecycle** | #7040 (RFC: recall, trusted writes, governance) | **Low** — Early design; no implementation yet. |

## 6. Developer Pain Points (Recurring Frustrations)
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **VS Code extension connection failures** | #7051, #7056 (both `ACP process exited unexpectedly` with Electron flag warnings) | 2 issues, 7 comments — blocks IDE users on 0.19.11 |
| **Upgrade/install breakage** | #7044 (CLI crash on start), #7002 (CentOS 7 GLIBC), #6857 (false "up to date") | 3 issues — affects onboarding & Linux compatibility |
| **Silent agent stops / empty responses** | #7034 (thought-only treated as success), #7039 (fix), #7006 (code block render break) | 3 issues — core reliability in long sessions |
| **Cross-workspace state leakage** | #7017 (security: pairing/allowlist global), #6378 (multi-workspace RFC) | 2 issues — architectural debt surfacing as daemon scales |
| **Generic error messages hiding root cause** | #6996 (custom provider: "Connection error" discards real cause), #7049 (update timeout UX) | 2 issues — debugging friction for integrators |
| **TUI rendering regressions** | #7006 (tall code blocks), #7037 (skill modal missing border), #7001 (plan truncation) | 3 issues — viewport-aware rendering still fragile |

---

**Links:**  
• Repo: [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)  
• Releases: [Releases page](https://github.com/QwenLM/qwen-code/releases)  
• Issues: [Issues dashboard](https://github.com/QwenLM/qwen-code/issues)  
• PRs: [Pull requests](https://github.com/QwenLM/qwen-code/pulls)

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-07-17

---

## 1. Today's Highlights

The project has officially rebranded from `deepseek-tui` to **CodeWhale** (v0.9.0), marking the public launch of Shannon Labs' product. The legacy npm package is deprecated. Development velocity remains high with 50+ issues/PRs updated in 24h, focusing on **v0.9.1–v0.9.3** milestones: Fleet model-policy contracts, WhaleFlow orchestration (conductor agents, swarm synthesis), first-class Kimi/K3 + OpenCode Go provider support, and a major Rust monolith refactor. Security hardening (CORS restrictions) and test-coverage expansion are also underway.

---

## 2. Releases

### v0.9.0 — CodeWhale Public Launch
- **Rebrand**: `deepseek-tui` → `codewhale` (binary, npm package, release assets). Legacy `deepseek-tui` npm package deprecated; no further releases.
- **Scope**: Core TUI, CLI, runtime, and Fleet worker entrypoints now unified under `codewhale` command.
- **Migration**: Users on v0.8.x must reinstall via new package; config paths updated (`~/.config/codewhale`).
- **Changelog**: Embedded in crate (see [#4413](https://github.com/Hmbown/CodeWhale/issues/4413) for packaging fix).

> 🔗 [Release v0.9.0](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.0)

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#3793](https://github.com/Hmbown/CodeWhale/issues/3793) | **v0.9.2 Setup: guided localized constitution creator** | Redesigns first-run UX: language-first, guided canvas, separates constitutional text from runtime security controls. Core onboarding overhaul. | 16 comments, active design iteration |
| [#3205](https://github.com/Hmbown/CodeWhale/issues/3205) | **v0.9.3: Fleet model classes, loadout auto, semantic route roles** | Defines the *single* user-facing auto mode for Fleet: resolves full compute loadout per role/slot (model + thinking + tools). Critical for multi-model orchestration. | 11 comments, cross-cutting (TUI, CLI, subagents, Fleet) |
| [#3792](https://github.com/Hmbown/CodeWhale/issues/3792) | **v0.9.2 Setup: first-run onboarding feels like starting CodeWhale** | Sequences welcome → language → constitution → provider auth → hotbar opt-in. Avoids config-editor feel. | 8 comments, UX-focused |
| [#4227](https://github.com/Hmbown/CodeWhale/issues/4227) | **Help contributors map the CodeWhale tsunami** | Request for a skill/workflow to keep dev env synced with `main` (10+ PRs/day). Highlights onboarding friction for contributors. | 7 comments, external contributor |
| [#1481](https://github.com/Hmbown/CodeWhale/issues/1481) | **Support OpenCode Go/Zen (DeepSeek-V4 provider)** | Adds a low-cost DeepSeek-V4 provider. High user demand (👍1). Now implemented in [#3781](https://github.com/Hmbown/CodeWhale/pull/3781). | 7 comments, 1👍 |
| [#4010](https://github.com/Hmbown/CodeWhale/issues/4010) | **v0.9.4 WhaleFlow: Conductor agent for orchestrating ensembles** | Introduces a conductor agent type that fans out scouts, routes artifacts, retries, synthesizes. Core to ultracode-style heterogeneous orchestration. | 4 comments, architectural |
| [#4417](https://github.com/Hmbown/CodeWhale/issues/4417) | **v0.9.1: first-class Kimi OAuth device login & token lifecycle** | Adds OAuth/device flow for Moonshot Kimi, separate from API keys. Complements K3 model support ([#4387](https://github.com/Hmbown/CodeWhale/issues/4387)). | 3 comments, auth/security |
| [#3389](https://github.com/Hmbown/CodeWhale/issues/3389) | **v0.9.2 EPIC: Hotbar command surface & source adapters** | Hotbar hidden by default on fresh installs; enabled via explicit config. Defines adapter pattern for command sources. | 3 comments, UX/API design |
| [#3306](https://github.com/Hmbown/CodeWhale/issues/3306) | **v0.9.3: Split large Rust monoliths into owned modules** | Targets `engine.rs` and other >2k LOC files. Reduces coordination dump, enables safer policy fixes. Prereq for Fleet/WhaleFlow scaling. | 3 comments, tech debt |
| [#4415](https://github.com/Hmbown/CodeWhale/issues/4415) | **Enforce hard per-turn tool budgets & write-first constraints** | Runtime admitted 13 `read_file` calls vs. 8-call budget. Needs enforcement across all model routes (GLM, GPT, etc.). | 1 comment, reliability/cost control |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | Title | Type | Status | Impact |
|---|-------|------|--------|--------|
| [#4456](https://github.com/Hmbown/CodeWhale/pull/4456) | **Refactor massive `run_subagent` runner** | Refactor | Closed | Extracted 4 duplicated blocks (~800 LOC) into `finish_subagent_run`; reduces bug surface in subagent lifecycle. |
| [#3781](https://github.com/Hmbown/CodeWhale/pull/3781) | **Feat: OpenCode Zen provider** | Feature | Open | Adds OpenCode Go/Zen as first-class provider (DeepSeek-V4). Passes fmt/clippy/test. Addresses [#1481](https://github.com/Hmbown/CodeWhale/issues/1481). |
| [#4454](https://github.com/Hmbown/CodeWhale/pull/4454) | **Restrict overly permissive CORS headers** | Security | Open | Replaces `*` with explicit headers (`Authorization`, `Content-Type`, `Accept`, `X-Codewhale-Runtime-Token`, `X-DeepSeek-Runtime-Token`). Least-privilege hardening. |
| [#4431](https://github.com/Hmbown/CodeWhale/pull/4431) | **Add tests for `McpManager::call_tool`** | Test | Open | Covers happy path + error propagation. Closes MCP testing gap. |
| [#4428](https://github.com/Hmbown/CodeWhale/pull/4428) | **Unit test for `ModelRegistry::new` alias map** | Test | Open | Verifies normalization + deduplication logic. Prevents alias collisions. |
| [#4455](https://github.com/Hmbown/CodeWhale/pull/4455) | **Remove legacy memory push/inject in report building** | Cleanup | Open | Deletes `UserMemory`, `ConfigEnabled`, `moraine_fallback` per `TOOL_LIFECYCLE.md`. `work_update` now sole progress surface. |
| [#4384](https://github.com/Hmbown/CodeWhale/pull/4384) | **Update workflow-js Cargo.toml for HarmonyOS build** | Port | Open | Generates `rquickjs` bindings for `aarch64-unknown-linux-ohos`. Enables OpenHarmony target ([#2625](https://github.com/Hmbown/CodeWhale/issues/2625)). |
| [#4370](https://github.com/Hmbown/CodeWhale/pull/4370) | **Add TelecomJS provider support** | Feature | Open | Fixes catalog refresh for custom provider; now shows all `/v1/models` (not just `deepseek-v4-pro`). |
| [#4430](https://github.com/Hmbown/CodeWhale/pull/4430) | **Tests for `repair_json_text_once` + array extraction fix** | Fix+Test | Open | Bug: function favored JSON objects over arrays. Tests cover both; fix ensures valid arrays with objects are extracted. |
| [#4437](https://github.com/Hmbown/CodeWhale/pull/4437) | **Perf: parallelize `runPrReview` with `Promise.all`** | Perf | Closed | Sequential → concurrent PR review checks + agent chats. Caches exceptions per-PR. Reduces review latency. |

---

## 5. Feature Request Trends (Distilled from All Issues)

| Theme | Representative Issues | Direction |
|-------|----------------------|-----------|
| **Guided, localized onboarding** | [#3793](https://github.com/Hmbown/CodeWhale/issues/3793), [#3792](https://github.com/Hmbown/CodeWhale/issues/3792), [#3961](https://github.com/Hmbown/CodeWhale/issues/3961) | Constitution creator → language-first → persistent update prompts. No blank editors. |
| **Fleet/WhaleFlow orchestration** | [#3205](https://github.com/Hmbown/CodeWhale/issues/3205), [#4010](https://github.com/Hmbown/CodeWhale/issues/4010), [#3229](https://github.com/Hmbown/CodeWhale/issues/3229), [#3230](https://github.com/Hmbown/CodeWhale/issues/3230) | Auto loadout resolution, conductor agent, swarm synthesis, shared ledger. Heterogeneous model workers (DeepSeek/GLM/Kimi/OpenAI). |
| **Provider expansion & auth** | [#1481](https://github.com/Hmbown/CodeWhale/issues/1481), [#4387](https://github.com/Hmbown/CodeWhale/issues/4387), [#4417](https://github.com/Hmbown/CodeWhale/issues/4417), [#4370](https://github.com/Hmbown/CodeWhale/pull/4370) | OpenCode Go/Zen, Kimi K3 + OAuth device flow, TelecomJS, Xiaomi MiMo UltraSpeed. First-class over custom. |
| **Hotbar as opt-in command surface** | [#3389](https://github.com/Hmbown/CodeWhale/issues/3389), [#3807](https://github.com/Hmbown/CodeWhale/issues/3807) | Hidden by default; enabled via config. Adapter pattern for sources (builtin, MCP, user scripts). |
| **Runtime hardening** | [#4415](https://github.com/Hmbown/CodeWhale/issues/4415), [#4407](https://github.com/Hmbown/CodeWhale/issues/4407), [#4454](https://github.com/Hmbown/CodeWhale/pull/4454) | Hard tool budgets, write-first constraints, artifact-skill readiness reporting, CORS lockdown. |
| **Code health / modularization** | [#3306](https://github.com/Hmbown/CodeWhale/issues/3306), [#3946](https://github.com/Hmbown/CodeWhale/issues/3946), [#4456](https://github.com/Hmbown/CodeWhale/pull/4456), [#4455](https://github.com/Hmbown/CodeWhale/pull/4455) | Split `engine.rs`, remove legacy memory, extract subagent runner, delete dead tools (`TodoAdd/UpdateTool`). |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Scrolling / rendering broken on Windows** | [#805](https://github.com/Hmbown/CodeWhale/issues/805) (results cut off), [#1106](https://github.com/Hmbown/CodeWhale/issues/1106) (edit box blocks scroll), [#894](https://github.com/Hmbown/CodeWhale/issues/894) (image chaos) | 3+ issues, 9+ comments |
| **Mac/iTerm2 keybinding & UX gaps** | [#2494](https://github.com/Hmbown/CodeWhale/issues/2494): Win-centric keys, multiline paste → multi-send, no `Ctrl-C` to stop (only kills session), history navigation missing | 3 comments, detailed list |
| **Slow report saving / low cache hit** | [#1732](https://github.com/Hmbown/CodeWhale/issues/1732): “巨慢” (very slow), cache miss on merge-save; screenshots show 1000s ms | 2 comments, perf-critical |
| **Subagent / task lifecycle leaks** | [#4443](https://github.com/Hmbown/CodeWhale/pull/4443) (orphaned model-wait subagents), [#4456](https://github.com/Hmbown/CodeWhale/pull/4456) (800 LOC duplication), [#4415](https://github.com/Hmbown/CodeWhale/issues/4415) (budget overrun) | Multiple PRs/issues in 24h |
| **Config / provider discovery friction** | [#1481](https://github.com/Hmbown/CodeWhale/issues/1481) (OpenCode missing), [#3810](https://github.com/Hmbown/CodeWhale/issues/3810) (Xiaomi docs lag code), [#2026](https://github.com/Hmbown/CodeWhale/issues/2026) (model picker naming) | Consistent across versions |
| **Contributor onboarding velocity** | [#4227](https://github.com/Hmbown/CodeWhale/issues/4227): “10+ PRs/day”, need automated env sync skill | 7 comments, external voice |

---

## Quick Links
---
*Digest generated from GitHub data (last 24h). For real-time updates, watch [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*