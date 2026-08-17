# AI CLI Tools Community Digest 2026-08-17

> Generated: 2026-08-17 00:53 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Ecosystem (2026-08-17)

---

## 1. Ecosystem Overview

The AI CLI landscape is consolidating around **three strategic axes**: (1) **agent orchestration maturity** — multi-agent task dispatch, subagent lifecycle, and delegation reliability; (2) **platform hardening** — Windows parity, sandbox stability, session continuity, and token/cost accounting accuracy; (3) **extensibility & interop** — MCP server management, remote/SSH workflows, and headless/CI integration. All nine tracked tools shipped nightly or patch releases in the past week, but **zero stable releases in the last 24h**, indicating a ecosystem-wide stabilization sprint ahead of autumn releases. Community signal is heavily weighted toward **reliability regressions** (timeouts, silent data loss, stuck states) over new capabilities.

---

## 2. Activity Comparison (2026-08-17)

| Tool | Hot Issues (≥P2) | Key PRs Merged/Updated | Release (24h) | Dominant Signal |
|------|------------------|------------------------|---------------|-----------------|
| **Claude Code** | 9+ (9 timeout duplicates + 3 critical bugs) | 3 | ❌ None | **Timeout regression** (60s hardcoded), parser data loss (6.2%), orphaned `rm -rf` |
| **OpenAI Codex** | 10 (Windows cluster = 7 issues) | 10 (merged) | ❌ None | **Windows desktop instability**, remote/SSH approval broken, MCP leaks |
| **Gemini CLI** | 10 (5× P1, 3× P2) | 10 | ✅ v0.56.0-nightly | **Agent hangs & misreported termination**, memory layer gaps |
| **GitHub Copilot CLI** | 10 (v1.0.80 regressions) | 1 (spam/unrelated) | ❌ None | **MCP OAuth regressions**, session fragility, Windows file locks |
| **Kimi Code CLI** | 4 | 3 | ❌ None | Session lifecycle gaps, Windows PowerShell path bug |
| **OpenCode** | 10 (Ctrl+C 49👍, billing bugs) | 10 (6 closed) | ❌ None | **Ctrl+C kills session**, stuck thinking states, paid-tier billing failures |
| **Pi** | 10 | 10 | ❌ None | Token accounting (cache tokens), Windows TUI redraw, prompt-editor perf cliff |
| **Qwen Code** | 10 (6 multi-agent) | 10 | ✅ v0.21.11-nightly | **Multi-agent routing/dispatch bugs**, review platform hardening |
| **CodeWhale (DeepSeek TUI)** | 10 (v0.9.7 crash, agent complexity) | 10 | ✅ v0.9.8 (deprecation) | TUI render regression, agent/subagent blocking, CI flakiness |

**Aggregate**: 83 high-signal issues, 67 active PRs, 3 nightly releases, 0 stable releases.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Community Ask |
|-------------|----------------|------------------------|
| **Configurable interactive timeouts** | Claude Code (9 issues), OpenCode, Gemini CLI | Expose `AskUserQuestion`/`afkTimeoutMs` via `settings.json`, env var, CLI flag; disable auto-continue |
| **Agent/subagent reliability & observability** | Qwen Code (6), Gemini CLI (3 P1), Claude Code, CodeWhale, OpenCode | Termination reason fidelity, task dispatch guarantees, trajectory sharing, subagent concurrency limits |
| **Windows-first parity & sandbox stability** | OpenAI Codex (7), GitHub Copilot CLI (2), Pi, CodeWhale | Mouse stutter, ACL corruption after power loss, file-locking on plugin update, TUI input redraw |
| **Remote/SSH & headless workflow** | OpenAI Codex, GitHub Copilot CLI, OpenCode, Qwen Code | Project-scoped chat sync, headless Linux host for mobile, approval UX parity, `/cd` in TUI |
| **Token/cost accounting accuracy** | Pi, Claude Code, Qwen Code, CodeWhale | Exclude cache tokens from billable totals, reasoning_details round-trip, prompt caching cost calc |
| **MCP server ergonomics** | OpenAI Codex, GitHub Copilot CLI, Claude Code | Enable/disable without config edits, stop spawn/reap leaks, OAuth RFC 8414 compliance |
| **Session continuity & recovery** | GitHub Copilot CLI, OpenCode, OpenAI Codex, Kimi | Resume without stale connection IDs, un-archive chats, persistent agent selection, cron task visibility |
| **TUI/UX polish: notification sounds, transcript views, undo/redo** | Claude Code, OpenAI Codex, OpenCode, Pi | Distinct "needs input" vs "done" sounds, collapsible tool-call views, Vim history-up, prompt-editor perf |

---

## 4. Differentiation Analysis

| Dimension | Leaders / Distinct Approaches |
|-----------|-------------------------------|
| **Multi-agent orchestration** | **Qwen Code** (explicit team/leader model, worktree-leased reviews, Aone Code integration); **Gemini CLI** (SSR Agent, browser subagents, AST-aware navigation); **CodeWhale** (harness posture per model, builder/scout profiles) |
| **Review/CI automation** | **Qwen Code** (autofix footprint gate, capture-tui visual evidence, scratch verifier trees, body budgeting); **Claude Code** (security-patterns glob fix, agent YAML frontmatter repair) |
| **Enterprise/SSO integration** | **GitHub Copilot CLI** (repo-level `enabledPlugins` in `.github/copilot/settings.json`, Atlassian MCP); **Claude Code** (Vertex allowlist model pinning, cross-session messaging) |
| **Local-first / privacy** | **Pi** (deterministic redaction before model context, Kiro OAuth device login, encrypted reasoning_details); **OpenCode** (Zen paid balance, local provider config) |
| **Extensibility framework** | **Pi** (RPC argument completions, component mouse events, subagent nesting depth limits, schema validation); **CodeWhale** (bwrap configurable roots, universal Pre/PostToolUse hooks) |
| **Mobile/remote control plane** | **OpenAI Codex** (mobile↔desktop handoff, headless Linux host, device-kind headers); **OpenCode** (Web UI auto-sync projects) |
| **Token economics transparency** | **Pi** (cache-token exclusion, Kimi cached_tokens parsing, xAI Responses API routing); **Claude Code** (5-hr limit guardrail requests) |

**Target User Segments**:
- **Enterprise/Platform teams**: GitHub Copilot CLI, Claude Code (Vertex), Qwen Code (Aone Code)
- **Power users / agent builders**: Qwen Code, Pi, CodeWhale, Gemini CLI
- **Generalist developers (Windows-heavy)**: OpenAI Codex, GitHub Copilot CLI
- **Automation/CI engineers**: Qwen Code (autofix), Pi (harness rewrite), Claude Code (security-patterns)

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum / Rapid Iteration** | **Qwen Code**, **Pi**, **CodeWhale** | Nightly releases, 10+ PRs/day, multi-agent/review platform features landing daily, rapid bug-to-fix cycles (issues filed → PR merged same day) |
| **Active Stabilization** | **Gemini CLI**, **OpenAI Codex**, **OpenCode** | High issue engagement (👍 50+ on top issues), 10+ merged PRs/day, but recurring regressions (stuck states, Windows, billing) indicate growing pains |
| **Enterprise-Grade / Slower Cadence** | **Claude Code**, **GitHub Copilot CLI** | Fewer PRs (1–3/day), critical bugs persist for weeks (timeout regression since July, OAuth regressions in v1.0.80), duplicate issue clusters suggest triage bottleneck |
| **Niche / Early Stage** | **Kimi Code CLI** | Lowest issue/PR volume, session management gaps, Windows path bug, memory layer undocumented — pre-1.0 feel |

**Maturity Signals**:
- **Qwen Code** and **Pi** show the most **architectural coherence** (review platform, harness rewrite, token accounting) with features shipping as composable primitives.
- **OpenAI Codex** has the **largest raw community** (106 comments on Windows freeze) but fragmentation across desktop/CLI/mobile surfaces.
- **Claude Code**'s 9 duplicate timeout issues signal **triaging debt** — community workaround fatigue.

---

## 6. Trend Signals (Strategic Implications for Developers)

| Trend | Evidence | Decision Guidance |
|-------|----------|-------------------|
| **Agent orchestration > single-agent chat** | 6/9 tools have multi-agent/subagent epics; Qwen Code, Gemini CLI, CodeWhale investing in delegation protocols, task dispatch, termination fidelity | **Build workflows assuming multi-agent**; evaluate tools on subagent observability (trajectories, termination reasons, concurrency limits) |
| **Windows is the primary friction surface** | 4 tools report critical Windows bugs (Codex 7 issues, Copilot CLI 2, Pi, CodeWhale); mouse stutter, ACL corruption, file locks, TUI redraw | **Validate Windows CI/CD paths early**; prefer tools with native Windows sandbox (Codex, Copilot) or proven WSL2 integration |
| **Token economics transparency becoming table stakes** | Pi, Qwen Code, CodeWhale, Claude Code all fixing cache-token accounting, reasoning_details, prompt caching costs | **Demand programmatic usage APIs**; budget guardrails (maxParallelAgents, footprint gates) will differentiate enterprise readiness |
| **Remote/headless = first-class, not afterthought** | Codex (mobile handoff, headless Linux), OpenCode (Web sync), Copilot CLI (`-p` mode parity), Qwen Code (web-shell boot) | **Design for headless/CI from day one**; `/cd`, `--prompt`, session resume, project-scoped config are minimum viable |
| **MCP standardization accelerating** | 5 tools fixing OAuth (RFC 8414), spawn leaks, enable/disable UX; but still fragmented (Codex vs Copilot vs Claude) | **Standardize on MCP SDK**; avoid vendor-specific extensions until `mcp` npm package stabilizes |
| **Session continuity = trust metric** | Copilot CLI (silent archive), OpenCode (stuck states), Codex (compact 404), Kimi (cron invisibility) — all erode automation confidence | **Test session resume/fork/archive flows** before committing to a tool for long-running tasks |
| **Security sandboxing diverging** | CodeWhale (bwrap configurable roots), Codex (sandbox ACL), Claude Code (TaskStop orphaned processes), Qwen Code (PAT isolation) | **Audit sandbox model** for your threat model; runner-level isolation (Qwen #9089) may be required for untrusted code |

---

## Summary for Technical Decision-Makers

| If Your Priority Is… | Recommended Primary Tool(s) | Watch List |
|----------------------|----------------------------|------------|
| **Multi-agent code review & autofix pipelines** | Qwen Code | Pi (harness rewrite), Gemini CLI (AST tools) |
| **Enterprise SSO, repo policy, Atlassian integration** | GitHub Copilot CLI | Claude Code (Vertex) |
| **Windows desktop daily driver + mobile remote** | OpenAI Codex | OpenCode (Web sync) |
| **Local-first, privacy, extensible TUI framework** | Pi | CodeWhale (hooks, bwrap) |
| **Agent orchestration research / custom harnesses** | CodeWhale, Gemini CLI | Qwen Code (review platform) |
| **Stable, low-churn CLI for scripting/CI** | *None yet* — all in stabilization | Monitor Claude Code (timeout fix), Copilot CLI (v1.0.81) |

**Bottom Line**: The ecosystem is in a **reliability consolidation phase**. No tool has "won" multi-agent UX or Windows parity. Teams should **standardize on MCP + headless session APIs** as the portable layer, and evaluate CLIs on **session recovery fidelity** and **token accounting honesty** — the two leading indicators of production readiness.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-17 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator` eval fix | Fixes `run_eval.py` reporting 0% recall for all skill descriptions — breaking the description-optimization loop | Core tooling bug affecting skill authoring pipeline; 10+ independent reproductions cited (#556) | **Open** (Jun 2026) |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Typographic QC for AI-generated docs: prevents orphans, widows, numbering misalignment | Addresses universal pain point in Claude-generated documents; high practical value | **Open** (Mar 2026) |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` | Mechanical file verification + 4-dimension reasoning quality gate (pre-delivery audit) | Novel "damage-severity priority" reasoning audit; universal across tech stacks | **Open** (Jun 2026) |
| 4 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing skill: Trophy model, AAA, React Testing Library, contract testing, property-based | Fills major gap in testing guidance; covers philosophy → practice across stack | **Open** (Mar 2026) |
| 5 | **[#568](https://github.com/anthropics/skills/pull/568)** `servicenow` | Enterprise ServiceNow platform skill: ITSM, ITOM, SecOps, ITAM/SAM, FSM, IntegrationHub | Broad platform coverage (not just scripting); active maintenance through Aug 2026 | **Open** (Mar 2026) |
| 6 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` / `skill-security-analyzer` | Meta-skills for skill quality (5-dim) and security (OWASP, supply chain, secrets) | Addresses ecosystem quality control; enables automated skill review | **Open** (Nov 2025) |
| 7 | **[#1479](https://github.com/anthropics/skills/pull/1479)** `plan-file-hygiene` | Lifecycle management for planning artifacts (addresses accumulation/no-cleanup problem) | Community-identified gap (#1417); practical workflow hygiene skill | **Open** (Jul 2026) |
| 8 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` | OpenDocument (.odt/.ods) create, fill, parse, convert; ISO-standard document workflow | Open-source document format support; triggers on ODF/LibreOffice mentions | **Open** (Mar 2026) |

> **Note:** PR comment counts show as "undefined" in source data; ranking inferred from issue cross-references, longevity, and scope of discussion.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence (Top Issues) | Signal Strength |
|-------|----------------------|-----------------|
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43💬, 2👍): Community skills masquerading as official `anthropic/` namespace — trust abuse vector | 🔴 Critical |
| **Org-Level Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16💬, 8👍): No native sharing; manual file transfer via Slack/Teams required | 🟠 High |
| **Skill Authoring Tooling Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12💬, 7👍): `run_eval.py` 0% trigger rate; [#1419](https://github.com/anthropics/skills/issues/1419) (3💬): parallel workers break eval | 🟠 High |
| **Ecosystem Hygiene (Duplicates/Bloat)** | [#189](https://github.com/anthropics/skills/issues/189) (6💬, 9👍): `document-skills` + `example-skills` install identical content | 🟡 Medium |
| **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) (4💬): `claude-api` skill injects 156k tokens in one call | 🟡 Medium |
| **MCP Integration** | [#16](https://github.com/anthropics/skills/issues/16) (4💬): Expose skills as MCP endpoints for programmatic access | 🟡 Medium |
| **Enterprise/Platform Skills** | [#568](https://github.com/anthropics/skills/pull/568) ServiceNow, [#181](https://github.com/anthropics/skills/pull/181) SAP-RPT-1-OSS — demand for deep platform coverage | 🟡 Medium |
| **Quality Gates / Self-Correction** | [#1385](https://github.com/anthropics/skills/issues/1385) (4💬): 3-gate reasoning pipeline proposal; [#1367](https://github.com/anthropics/skills/pull/1367) self-audit PR | 🟡 Medium |

---

## 3. High-Potential Pending Skills (Active PRs, Not Yet Merged)

| PR | Skill | Why It's Likely to Land |
|----|-------|------------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval fix (Windows + artifact install) | Blocks core authoring workflow; 10+ reproductions; recent activity (Jun 23 update) |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Universal need; no dependencies; clear spec; author responsive (Mar 13 update) |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Fills documented gap; comprehensive scope; active discussion (Apr 21 update) |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | `plan-file-hygiene` | Directly addresses filed issue (#1417); community-coauthored; recent (Jul 27 update) |
| **[#538](https://github.com/anthropics/skills/pull/538)** | `pdf` case-sensitivity fix | Trivial fix (8 refs); breaks on Linux/CI; author has 3 other merged fixes |
| **[#539](https://github.com/anthropics/skills/pull/539)** | `skill-creator` YAML validation | Prevents silent description corruption; 1-line pre-parse check; low risk |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` | Novel quality primitive; aligns with #1385 proposal; v1.3.0 tagged |
| **[#568](https://github.com/anthropics/skills/pull/568)** | `servicenow` | Enterprise demand; broad coverage; actively maintained (Aug 12 update) |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for trustworthy, production-grade skill authoring infrastructure — reliable evaluation tooling, security boundaries, and sharing primitives — rather than any single domain skill.**

---

# Claude Code Community Digest — 2026-08-17

---

## 1. Today's Highlights

The community is heavily focused on a **long-standing TUI timeout regression**: 9 separate issues (most filed 2026-07-02, all updated today) demand a configurable `AskUserQuestion` timeout, currently hardcoded at ~60s with an undocumented AFK auto-continue. Simultaneously, a **critical parser bug** (#84362) resurfaces showing 6.2% silent field loss on parameter-rich MCP calls due to malformed close-tag handling. No new releases shipped in the last 24h.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **#84362** | [Tag-grammar tool-call parser silently absorbs parameter blocks on mismatched/mangled close tags — measured 6.2% silent field loss on parameter-rich MCP calls](https://github.com/anthropics/claude-code/issues/84362) | **Critical data-loss bug**: malformed close tags cause subsequent parameters to be absorbed into preceding string fields; calls succeed with missing data. Re-raise of stale-closed #44826. | 12 comments, reopened by isaac-ranger (2026-08-06) |
| **#73394** | [Feature Request] Make AskUserQuestion timeout configurable](https://github.com/anthropics/claude-code/issues/73394) | 60s auto-proceed breaks workflows requiring considered decisions; no opt-out. Duplicate of #30740, #70294. | 👍 26, 6 comments, closed as duplicate |
| **#73408** | [AFK auto-continue on unanswered AskUserQuestion (`afkTimeoutMs`) is undocumented and has no opt-out](https://github.com/anthropics/claude-code/issues/73408) | Undocumented `afkTimeoutMs` triggers auto-continue; users unaware and cannot disable. macOS 2.1.198. | 👍 20, 4 comments, closed |
| **#73416** | [BUG] Autocontinue after 60s not possible to be disabled](https://github.com/anthropics/claude-code/issues/73416) | Windows user reports no way to disable auto-proceed; workflows interrupted. | 👍 16, 6 comments, closed |
| **#85200** | [BUG] TaskStop does not kill the process tree — orphaned `rm -rf /c` deleted user data for 20 minutes after stop](https://github.com/anthropics/claude-code/issues/85200) | **Severe safety issue**: `TaskStop` leaves child processes alive; destructive commands continued running post-stop. | 2 comments, opened 2026-08-09 |
| **#86600** | [BUG] Agent tool model parameter accepts only family aliases; aliases resolve to latest model and cause 401 for teams with restricted allowlist](https://github.com/anthropics/claude-code/issues/86600) | Teams on Vertex with allowlisted models get 401 because agent `model` param resolves to latest alias, not pinned version. | 1 comment, reproduced, opened 2026-08-14 |
| **#73384** | Feature request: built-in distinct notification sounds for "needs input" vs "done"](https://github.com/anthropics/claude-code/issues/73384) | Accessibility/UX gap: no audible alert when Claude waits for permission/question; users step away and miss prompts. | 4 comments, 👍 0, open |
| **#73413** | Add transcript view modes (Summary / Normal / Verbose) to VS Code extension to hide tool-call noise](https://github.com/anthropics/claude-code/issues/73413) | VS Code extension renders every tool call as full block; noise hides signal. Request: collapsible/summary views. | 👍 2, 1 comment, open |
| **#73438** | [FEATURE] please add a maxParallelAgents limit](https://github.com/anthropics/claude-code/issues/73438) | User hit 142 parallel agents consuming 5-hr limit in 20 min; no guardrail exists. | 1 comment, 👍 0, closed |
| **#85679** | Receiver never notified when held cross-session message expires — message abandoned, not denied](https://github.com/anthropics/claude-code/issues/85679) | Cross-session message held for approval; on `dialogExpiry` (5 min default) it drops silently—receiver never learns. | 👍 1, 1 comment, open |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| **#87079** | [fix(security-guidance): make `**` glob patterns match zero-depth paths](https://github.com/anthropics/claude-code/pull/87079) | `fnmatch`-based `**/*.ts` required literal `/`, silently excluding top-level files from `security-patterns.json` rules. Fix restores documented "any depth" semantics. | Open, 2026-08-16 |
| **#87077** | [fix(pr-review-toolkit): repair invalid YAML frontmatter in all agents](https://github.com/anthropics/claude-code/pull/87077) | Agent descriptions were unquoted scalars containing `key: value` lines; YAML parsed as nested mappings, causing empty frontmatter on load. All agents now quote descriptions. | Open, 2026-08-16 |
| **#87125** | [Create python-package-conda.yml](https://github.com/anthropics/claude-code/pull/87125) | Adds Conda package build workflow (commit `0xb8f682b`). | Open, 2026-08-16 |

---

## 5. Feature Request Trends

1. **Configurable interactive timeouts** — 9+ issues request `AskUserQuestion` / `afkTimeoutMs` exposed via `settings.json`, env var, or CLI flag. Current 60s hardcode + undocumented AFK continue is the single loudest pain point.
2. **Agent concurrency guardrails** — `maxParallelAgents` limit, default "Monitor CI" on, session-switching disable option.
3. **Observability & audit** — Programmatic access to routine/transcript APIs (#85702), `/btw` message logging (#85674), cross-session message expiry notifications (#85679).
4. **TUI/UX polish** — Distinct notification sounds for "needs input" vs "done" (#73384), VS Code transcript view modes (#73413), skill/agent slash-menu rendering fixes (#73911).
5. **MCP/remote improvements** — Remote MCP support in Cowork (#73410), HTTP MCP static-header auth hang fix (#76459).

---

## 6. Developer Pain Points

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Non-configurable 60s auto-proceed on prompts** | 9 issues (all updated today) | #73394, #73442, #73416, #73408, #73393, #73385, #73449, #73456, #73430 |
| **Silent data loss / undefined behavior** | 3 high-severity | #84362 (6.2% MCP param loss), #85200 (orphaned `rm -rf`), #86600 (401 on agent model alias) |
| **Missing guardrails on agent scaling** | 2+ | #73438 (142 agents, 5-hr limit in 20 min), #73412 (default CI monitor off) |
| **Cross-session messaging reliability** | 2 | #85679 (silent expiry), #82347 (permission mode not synced) |
| **TUI noise & discoverability** | 3 | #73413 (VS Code tool-call noise), #73911 (skill rendering bug), #73384 (no input alert sound) |
| **Undocumented / hidden behavior** | 3 | #73408 (`afkTimeoutMs`), #73456 (timeout hardcoded in harness), #76459 (30s MCP connect hang) |

---

*Digest generated from `anthropics/claude-code` GitHub data (issues/PRs updated 2026-08-17).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-17

## Today's Highlights
No new releases shipped in the last 24 hours. The team merged **17 PRs** focused on TUI polish, permission-system hardening, `codex doctor` diagnostics, and remote-control reliability. Community attention remains concentrated on **Windows desktop stability** (freezes, mouse stutter, sandbox ACL corruption) and **remote/SSH workflow gaps** (project-scoped chats, headless Linux support, mobile handoff).

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#20214](https://github.com/openai/codex/issues/20214) | **Codex App frequently freezes/stutters on Windows 11 Pro** | Core desktop reliability on Windows; affects Plus subscribers on modern hardware (Ryzen 5600/32 GB). | 106 comments · 85 👍 |
| [#38546](https://github.com/openai/codex/issues/38546) | **[Windows] ChatGPT/Codex desktop app causes system-wide mouse stutter without elevation** | Input lag extends beyond the app—system-wide cursor stutter suggests deep integration issue. | 31 comments · 13 👍 |
| [#25319](https://github.com/openai/codex/issues/25319) | **Scope Codex VS Code chats to current workspace/project** | High-demand IDE enhancement: chat history bleed across projects breaks context isolation. | 28 comments · 62 👍 |
| [#23200](https://github.com/openai/codex/issues/23200) | **Support headless remote Linux hosts for Codex mobile** | Unblocks server-centric workflows; mobile becomes true control plane without desktop dependency. | 18 comments · 48 👍 |
| [#37487](https://github.com/openai/codex/issues/37487) | **Codex CLI 0.147.0 sends empty tool description to Azure Responses API** | Blocks Azure enterprise customers; regression in tool-call serialization. | 12 comments · 5 👍 |
| [#28248](https://github.com/openai/codex/issues/28248) | **Windows sandbox fails all read ops with "apply deny-read ACLs" after power outage** | Data-loss-adjacent: sandbox enters unrecoverable state after unclean shutdown. | 11 comments · 6 👍 |
| [#34652](https://github.com/openai/codex/issues/34652) | **File-edit approval buttons unresponsive in Remote SSH conversations** | Remote SSH UX broken in desktop app while CLI approval works—inconsistent trust flow. | 10 comments · 1 👍 |
| [#2379](https://github.com/openai/codex/issues/2379) | **Undo/redo typing (Cmd-Z / Shift-Cmd-Z) in TUI** | Long-standing TUI papercut (open since Aug 2025); basic editing affordance missing. | 8 comments · 32 👍 |
| [#32797](https://github.com/openai/codex/issues/32797) | **Windows Desktop retains 5 MCP/Node process batches (147 node.exe, 13.9 GiB)** | Severe resource leak: MCP subprocesses not reaped, consuming ~14 GB RAM. | 7 comments · 1 👍 |
| [#19265](https://github.com/openai/codex/issues/19265) | **Background exec intermittently deletes `~/.codex/skills/.system`** | System skills vanish mid-session, breaking bundled capabilities (imagegen, openai-* skills). | 7 comments · 6 👍 |

---

## Key PR Progress (10 Notable Merges)

| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#38921](https://github.com/openai/codex/pull/38921) | Compact successful command activity in the TUI | TUI UX | Groups consecutive successful commands into `Ran N commands` entry; preserves full transcript. |
| [#38919](https://github.com/openai/codex/pull/38919) | Reject obsolete app-server permission profile fields | Security/Config | Prevents silent ignore of removed `permissionProfile` field; fails fast on stale configs. |
| [#38918](https://github.com/openai/codex/pull/38918) | Improve `codex doctor` network diagnostics | Observability | Probes Responses endpoint with route-aware client; classifies TLS, proxy, CA, resolution, timeout failures. |
| [#38916](https://github.com/openai/codex/pull/38916) | Honor legacy `:project_roots` permission entries | Config Migration | Backward-compat for configs written before `:workspace_roots` rename; avoids dropped filesystem restrictions. |
| [#38913](https://github.com/openai/codex/pull/38913) | Stop rendering columns after filling their area | TUI Perf | Avoids unnecessary layout work once viewport bottom reached. |
| [#38907](https://github.com/openai/codex/pull/38907) | Edit queued messages with Vim history-up | TUI UX | Empty composer + `history-up` restores latest queued follow-up for editing; replaces instead of appending. |
| [#38902](https://github.com/openai/codex/pull/38902) | Honor per-environment shell variable policies | Exec Policy | Carries `ShellEnvironmentPolicy` per resolved environment; used for shell commands, user tasks, unified exec. |
| [#38894](https://github.com/openai/codex/pull/38894) | Add working-directory commands to the TUI | TUI Feature | `/cd [path]` changes idle local session CWD, reloads project config/instructions, preserves history. |
| [#38840](https://github.com/openai/codex/pull/38840) | Identify Mac mini hosts in remote control handshakes | Remote | Sends `x-codex-host-device-kind: mac_mini` header for device-specific remote UI. |
| [#38827](https://github.com/openai/codex/pull/38827) | Add endpoint protection checks to `codex doctor` | Observability | Detects common EDR/AV products on macOS/Windows; guides users on required Codex exclusions. |

---

## Feature Request Trends (Distilled from All Issues)

1. **Windows-first parity** — Mouse stutter, sandbox ACL corruption, proxy passthrough to WSL2, elevated sandbox payload limits, MCP process leaks. Windows desktop is the #1 friction surface.
2. **Remote/SSH as first-class workflow** — Project-scoped chat history (#25319), Connection→Project→Thread sidebar grouping (#24295), headless Linux host support for mobile (#23200), mobile↔desktop task handoff (#32519).
3. **MCP server ergonomics** — Enable/disable without config.toml edits (#11765), stop spawning/reaping leaks (#38754, #32797), custom provider ID validation (#38855).
4. **TUI parity with GUI** — Undo/redo (#2379), Vim history-up editing (#38907), working-directory commands (#38894), column render culling (#38913), hyperlink decor allocation (#38823).
5. **Session continuity & context** — 1M context window doc vs reality (#38917), thread resume quadratic on large threads (#38787), compact 404 breaking remote steering (#38856), thread_history cursor desync (#38792).
6. **Rate-limit transparency** — Weekly limit behavior vs credits (#18018), unexpected refill/reset date shifts (#38900), Pro value feedback (#29900).
7. **Safety/approval UX** — Unresponsive approval buttons in remote SSH (#34652), constant "Request blocked" false positives (#34367), image download broken (#33798).

---

## Developer Pain Points (Recurring High-Frequency Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Windows desktop instability** | Freezes/stutters (#20214), system-wide mouse lag (#38546), sandbox ACL corruption after power loss (#28248), MCP process leak (#32797), skills dir deletion (#19265), elevated sandbox payload limit (#32315), proxy not passed to WSL2 (#15447) | 7 distinct issues, 180+ combined comments |
| **Remote/SSH approval & context broken** | Approval buttons dead in desktop app (#34652), sidebar doesn't show remote projects (#24295), SSH restart kills mobile remote control (#23699), compact 404 breaks session continuity (#38856) | 4 issues, 39 comments |
| **MCP management is manual & leaky** | No enable/disable UI (#11765), servers spawned repeatedly not reaped (#38754, #32797), custom provider ID validation broken (#38855) | 3 issues, 11 comments |
| **Session/context reliability** | Thread resume quadratic (#38787), history cursor desync (#38792), 1M context window unavailable (#38917), weekly limit logic inconsistent (#18018, #38900) | 4 issues, 25 comments |
| **TUI missing basic editing affordances** | No undo/redo (#2379, open 1 yr), no Vim history-up edit (#38907), no `/cd` command (#38894), hyperlink render allocates per-char (#38823) | 4 issues, 50+ 👍 on undo/redo alone |
| **Rate-limit opacity** | Limit reached but execution continues without credits (#1801

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-17

## 1. Today's Highlights
The project shipped a nightly release (v0.56.0-nightly) while maintainers actively triaged a backlog of **P1/P2 agent reliability bugs**—particularly around subagent termination reporting, generalist agent hangs, and shell command stuck states. A wave of dependency updates (73 packages via Dependabot) and several targeted SSR Agent fixes landed, signaling ongoing stabilization work ahead of a stable release.

## 2. Releases
**v0.56.0-nightly.20260816.g2a87e7be1** — Nightly build. [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260815.g2a87e7be1...v0.56.0-nightly.20260816.g2a87e7be1). No standalone release notes; changes are incremental against the prior nightly.

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reports GOAL success, hiding interruption** | Subagents silently mask turn-limit exhaustion as success, breaking observability and eval accuracy. | 12 comments, 2 👍, `priority/p1`, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Core agent delegation path deadlocks on simple ops (folder creation); blocks users who rely on subagents. | 8 comments, 8 👍, `priority/p1`, `status/need-retesting` |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell command execution stuck at "Waiting input" after completion** | Frequent UX breakage: CLI shows command as active despite exit, forcing manual interruption. | 4 comments, 3 👍, `priority/p1`, `effort/medium` |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations (EPIC)** | Tracking 76 behavioral evals across 6 models; foundational for regression prevention. | 7 comments, `priority/p1`, `aiq/eval_infra` |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini under-uses skills & sub-agents autonomously** | Users must explicitly invoke tools the agent should discover; limits "agentic" value prop. | 6 comments, `priority/p2` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads/search/mapping (EPIC)** | Investigating whether AST tooling reduces turn count & token noise for code navigation. | 7 comments, 1 👍, `priority/p2`, `kind/customer-issue` |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions indefinitely** | Background extractor re-queues unread sessions, wasting cycles and polluting memory. | 5 comments, `priority/p2` |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Browser agent: automatic session takeover & lock recovery** | Persistent browser profiles fail fast on lock contention; needs graceful recovery. | 4 comments, `priority/p3`, `kind/customer-issue` |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Platform-specific breakage for Linux/Wayland users; blocks web automation workflows. | 4 comments, 1 👍, `priority/p1`, `agent/browser` |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with >128 tools available** | Tool explosion (400+) triggers API errors; needs smarter tool scoping. | 3 comments, `priority/p2` |

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#28848](https://github.com/google-gemini/gemini-cli/pull/28848) | **Fix** | Handle `refreshAuth` failures gracefully in non-interactive (`--prompt`) mode; return clean error + dedicated exit code instead of raw stack trace. |
| [#28815](https://github.com/google-gemini/gemini-cli/pull/28815) | **Fix** | **Preserve original termination reason during subagent recovery** (fixes #22323). Prevents MAX_TURNS/timeout from being reported as GOAL success. |
| [#28812](https://github.com/google-gemini/gemini-cli/pull/28812) | **Fix** | Add execution timeouts to prevent indefinite TUI hang at "Initializing..." on bare Linux terminals (fixes #21477). |
| [#28843](https://github.com/google-gemini/gemini-cli/pull/28843) | **Feature** | Add `--list-models` flag printing available models as JSON; enables programmatic model discovery for orchestrators. |
| [#28840](https://github.com/google-gemini/gemini-cli/pull/28840) | **Fix** | Populate `cachedContentTokenCount` & `thoughtTokenCount` in ACP `PromptResponse` usage; fixes ~3x cost overestimation with prompt caching. |
| [#28820](https://github.com/google-gemini/gemini-cli/pull/28820) | **Fix** | Clarify privacy notice wording & selection options (fixes #26120); resolves misleading opt-out language. |
| [#28844](https://github.com/google-gemini/gemini-cli/pull/28844) | **Docs** | Add Homebrew deprecation notice; direct users to npm for updated builds. |
| [#28813](https://github.com/google-gemini/gemini-cli/pull/28813) | **Build** | Add `composite: true` to `packages/cli/tsconfig`; unblocks root build/typecheck (fixes #21911). |
| [#28814](https://github.com/google-gemini/gemini-cli/pull/28814) | **Fix** | Resolve TypeScript strict-null errors in integration test files (fixes #21919). |
| [#28849](https://github.com/google-gemini/gemini-cli/pull/28849) | **Chore** | **73 dependency updates** (npm group): `simple-git`, `@modelcontextprotocol/sdk`, `puppeteer-core`, `@google/genai` v2.16.0, `eslint` v10, `@types/node` v26, etc. |

## 5. Feature Request Trends
From the issue corpus, three clear directions dominate community ask:

1. **Agent Autonomy & Tool Discovery** — Agents should *proactively* invoke skills/sub-agents (not require explicit instruction), respect `settings.json` overrides (maxTurns, etc.), and surface trajectories via `/chat share` ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)).
2. **Structured Code Navigation** — Strong interest in AST-aware reads, search, and codebase mapping to reduce turn count and token waste ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873), [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
3. **Memory & Privacy Hardening** — Deterministic redaction *before* model context, quarantine of invalid memory patches, and clearer opt-out flows ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#28820](https://github.com/google-gemini/gemini-cli/pull/28820)).

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Agent hangs / silent stalls** | Generalist agent hangs (#21409), shell "Waiting input" ghost (#25166), TUI init hang (#21477/PR #28812), browser agent Wayland failure (#21983) | **High** — 5+ distinct P1 reports |
| **Misreported termination states** | Subagent MAX_TURNS → GOAL success (#22323), Auto Memory retry loops (#26522), memory inbox silently drops invalid patches (#26523) | **High** — Undermines trust in agent output |
| **Config ignored / not respected** | `settings.json` overrides ignored by browser agent (#22267), symlinked agent files not loaded (#20079), subagents auto-run despite `disabled` config (#22093) | **Medium** — Configuration drift |
| **Tool explosion & API limits** | 400+ tools → 400 error (#24246), model creates temp scripts everywhere (#23571), destructive git/DB ops without guardrails (#22672) | **Medium** — Scalability & safety |
| **Observability gaps** | Bug reports lack subagent context (#21763), subagent trajectories not shareable (#22598), `\n` escape bugs in output (#22466) | **Medium** — Debugging friction |

---

**Meta**: Data sourced from `google-gemini/gemini-cli` GitHub activity (issues/PRs updated 2026-08-16 → 2026-08-17). Nightlies publish daily; stable cadence unspecified.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-17

## Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker shows a cluster of regressions in v1.0.80 around MCP OAuth (RFC 8414 compliance), Windows file-locking during plugin updates, and a memory-pressure watchdog that aggressively compacts conversations at low context usage. Session resumption remains fragile — stale connection IDs, lost agent selection, and silent archiving are all reported.

---

## Releases
*None in the last 24h.*

---

## Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4490](https://github.com/github/copilot-cli/issues/4490) | **Atlassian MCP OAuth broken in 1.0.80 (RFC 8414 §3.3 regression)** | Blocks all Atlassian MCP integrations; worked in 1.0.78. Indicates a regression in OAuth discovery validation. | 1 comment, 0 👍 — recent regression, likely high impact for enterprise users. |
| [#4463](https://github.com/github/copilot-cli/issues/4463) | **MCP OAuth intermittently fails on Windows with socket error 10013** | Windows-specific permission error prevents browser auth flow; intermittent but recurring. | 1 comment, 0 👍 — platform-blocking for Windows developers using remote MCP. |
| [#4472](https://github.com/github/copilot-cli/issues/4472) | **Concurrent tool calls during token refresh spin up duplicate rmcp services, cancelling in-flight calls** | Race condition in OAuth refresh breaks parallel tool execution; each call creates a new service instance. | 0 comments — architectural concurrency bug affecting all Streamable HTTP MCP servers. |
| [#4506](https://github.com/github/copilot-cli/issues/4506) | **Memory-pressure watchdog force-compacts at 23% context usage, loops until OOM** | Watchdog triggers on process memory (not context pressure), recovers negligible tokens, then loops — causing OOM in long sessions. | 0 comments — severe performance regression for extended coding sessions. |
| [#4505](https://github.com/github/copilot-cli/issues/4505) | **Resumed session retains stale connection item IDs after interrupted response** | Every prompt fails with `CAPIError: 400 input item ID does not belong to this connection`; `/fork` doesn't recover. | 0 comments — session corruption makes resumed sessions unusable. |
| [#4488](https://github.com/github/copilot-cli/issues/4488) | **Plugin updates fail with "Access is denied" when other Copilot CLI/VS Code sessions open** | File locks from unrelated processes block updates; affects developers running multiple sessions. | 1 comment, 0 👍 — daily workflow friction for multi-window users. |
| [#4474](https://github.com/github/copilot-cli/issues/4474) | **General Chat silently archived after 60s resume timeout, no restore UI** | Long-running chats disappear without user action; replacement chat created automatically, original unrecoverable. | 0 comments — data-loss risk with no recovery path. |
| [#4507](https://github.com/github/copilot-cli/issues/4507) | **Repo-level `enabledPlugins` in `.github/copilot/settings.json` ignored in `copilot -p` mode** | Non-interactive prompt mode doesn't respect repo plugin config, while interactive mode and `plugins list` do. | 0 comments — inconsistency breaks CI/automation workflows. |
| [#4473](https://github.com/github/copilot-cli/issues/4473) | **claude-haiku-4.5 sub-agent fails: reasoning effort 'medium' not supported** | Internal routing applies unsupported parameter to model; breaks sub-agent delegation. | 0 comments — model compatibility regression in agent routing. |
| [#4503](https://github.com/github/copilot-cli/issues/4503) | **SDK server reports ready without auth, then Slack session creation fails** *(CLOSED)* | Server started without `COPILOT_SDK_AUTH_TOKEN`; generic error masked root cause. | 5 comments — fixed, but highlights need for stricter startup validation. |

---

## Key PR Progress
Only one PR updated in the last 24h:

| # | Title | Status | Notes |
|---|-------|--------|-------|
| [#3163](https://github.com/github/copilot-cli/pull/3163) | ViewSonic monitor | OPEN | Appears unrelated to copilot-cli (monitor hardware + GitHub Actions runners); likely spam or misfiled. No code changes relevant to CLI. |

*No substantive PRs addressing the hot issues above were updated today.*

---

## Feature Request Trends
From the open issues, the community is asking for:

1. **Plugin dependency resolution** ([#4487](https://github.com/github/copilot-cli/issues/4487)) — inter/intra-marketplace dependency spec + auto-install.
2. **Session un-archive/restore** ([#4502](https://github.com/github/copilot-cli/issues/4502), [#4474](https://github.com/github/copilot-cli/issues/4474)) — undo "Done" archive, view/restore archived chats.
3. **Persistent agent selection across resume** ([#4489](https://github.com/github/copilot-cli/issues/4489)) — remember `/agent` choice when resuming.
4. **Non-interactive mode parity** ([#4507](https://github.com/github/copilot-cli/issues/4507)) — `copilot -p` should honor repo `enabledPlugins`.
5. **Permission request timeout control** ([#4486](https://github.com/github/copilot-cli/issues/4486)) — configurable or disabled timeout for edit confirmations.

---

## Developer Pain Points
Recurring frustrations surfacing in the last 24h:

- **MCP OAuth instability** — three distinct OAuth regressions (RFC 8414, Windows sockets, concurrent refresh race) in v1.0.80 alone.
- **Session fragility** — resume breaks connection IDs, loses agent context, silently archives chats, and offers no recovery UI.
- **Windows file-locking** — plugin updates blocked by unrelated VS Code/CLI processes; no graceful retry or lock detection.
- **Memory watchdog misfires** — compacts based on process RSS, not context pressure, causing OOM loops at low context usage.
- **Inconsistent config surfaces** — repo settings apply in interactive mode but not `copilot -p`; plugin list vs. runtime disagree.
- **Opaque errors** — generic "session creation failed" or "transport closed" messages hide root causes (missing auth token, socket permissions).

---

*Data sourced from `github.com/github/copilot-cli` issues/PRs updated 2026-08-16 → 2026-08-17. Digest generated 2026-08-17.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-17

## Today's Highlights
No new releases shipped in the last 24 hours. Community focus centers on session management gaps (delete command, cron task visibility), a Windows PowerShell 7 path-resolution bug, and long-standing requests for memory-layer optimization in large projects. Three PRs address a new `--starting-prompt` flag, a `BrokenPipeError` guard in the web runner, and a string-truncation fix for tool-call summaries.

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#1783](https://github.com/MoonshotAI/kimi-cli/issues/1783) | **Add `/delete` command to remove sessions** | Users currently must manually delete `~/.kimi/sessions/` folders; a CLI command would improve hygiene, disk-space reclamation, and sensitive-data removal. | 6 comments, 1 👍 — active discussion on UX (interactive picker vs. ID arg) |
| [#2600](https://github.com/MoonshotAI/kimi-cli/issues/2600) | **PowerShell 7 defaults to D:\ drive, breaking path resolution** | Blocks Windows users who configure a non-system-drive startup directory; regression in v0.33. | 5 comments — reproducible, needs path-normalization fix |
| [#1478](https://github.com/MoonshotAI/kimi-cli/issues/1478) | **Optimize memory layer / document memory system** | Large-project developers lack persistent, queryable context; current docs only reference `agent.md`. | 4 comments — references external memory architecture (SOUL/USER/MEMORY.md) as desired model |
| [#2605](https://github.com/MoonshotAI/kimi-cli/issues/2605) | **CronCreate tasks have no user-visible management entry** | Scheduled prompts persist in `~/.kimi-code/cron/` but are invisible in TUI (`/tasks`, no `/cron`); users cannot inspect, edit, or cancel them. | 1 comment — critical UX gap for automation workflows |

---

## Key PR Progress

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#864](https://github.com/MoonshotAI/kimi-cli/pull/864) | `feat: --starting-prompt flag to prompt without exit` | **Closed** (merged 2026-08-17) | Enables non-interactive prompt injection (`kimi -s "..."`), closing #887; useful for scripting/CI. |
| [#2324](https://github.com/MoonshotAI/kimi-cli/pull/2324) | `fix(web): handle BrokenPipeError in SessionProcess.send_message` | **Open** | Guards stdin write/drain against subprocess exit race; prevents web-runner crashes during session teardown. |
| [#2449](https://github.com/MoonshotAI/kimi-cli/pull/2449) | `fix(string): strip newlines in shorten_middle before length check` | **Open** | Ensures single-line tool-call summaries stay within width budget; fixes log/UI truncation artifacts. |

---

## Feature Request Trends
1. **Session lifecycle management** — delete, list, archive, and export commands (#1783, related to #2605).  
2. **First-class scheduling UI** — `/cron` command, `/tasks` integration, and docs for `CronCreate` (#2605).  
3. **Memory/context persistence** — structured long-term memory (MEMORY.md, daily logs) with query APIs (#1478).  
4. **Cross-platform path robustness** — normalize working-directory detection across shells/OSes (#2600).  

---

## Developer Pain Points
- **Invisible automation**: Cron tasks created by the model are write-only; no inspection or cancellation path.  
- **Session clutter**: No built-in cleanup → manual filesystem surgery required.  
- **Context loss in large repos**: Memory layer undocumented and non-queryable; developers rebuild context each session.  
- **Windows shell quirks**: Non-standard startup directories break path resolution, requiring workarounds.  
- **Fragile web runner**: Unhandled `BrokenPipeError` crashes the web session process during normal shutdown races.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-17

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The issue tracker shows **persistent UX and stability pain points** dominating community attention: the long-standing `Ctrl+C` exit conflict (#7957, 49 👍) remains unresolved since January, while multiple "stuck in thinking/busy" states (#32366, #40468, #36370) and silent stream failures (#38644, #40625) indicate fragile error handling in the desktop/TUI stack. On the PR side, maintainers merged a batch of V2 documentation reorganization, session UI fixes, and a CPU optimization for the session spinner.

---

## 2. Releases

**None** in the last 24 hours.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#7957](https://github.com/anomalyco/opencode/issues/7957)** `Ctrl+C` exits OpenCode — conflicts with universal copy shortcut | Core UX regression on Windows/Linux; users accidentally kill sessions when trying to copy text. Open since **Jan 2026**. | 16 comments, **49 👍** — highest engagement in tracker |
| **[#13626](https://github.com/anomalyco/opencode/issues/13626)** Auto-sync projects in Web UI from server | Multi-device workflow broken; users must manually re-add projects on each new browser/device. | 11 comments, **15 👍** — clear demand for cloud sync parity |
| **[#26602](https://github.com/anomalyco/opencode/issues/26602)** Desktop 5-min Headers Timeout with slow local providers | Hardcoded timeout ignores user config (`timeout: false`), killing valid long-running local model requests. | 11 comments — affects self-hosted/ollama users disproportionately |
| **[#33318](https://github.com/anomalyco/opencode/issues/33318)** Zen paid balance still hits FreeUsageLimitError | Billing integration failure: paid users blocked by free-tier quota despite active credits. **Urgent** label. | 9 comments — revenue-impacting, trust-eroding |
| **[#32366](https://github.com/anomalyco/opencode/issues/32366)** UI stuck on "thinking" indefinitely after stream error | No error surfacing, no recovery; forces full app restart. Recurrent pattern across desktop/TUI. | 6 comments — part of a cluster of "stuck state" bugs |
| **[#40468](https://github.com/anomalyco/opencode/issues/40468)** Stuck in busy forever after toolcall (TUI) | Ping-pong animation persists; `ESC` interrupt ignored. Session becomes unrecoverable. | 5 comments — recent regression (Aug 4) |
| **[#37671](https://github.com/anomalyco/opencode/issues/37671)** V2 CLI: headless commands load OpenTUI & leak 13 MB `.so` files in `/tmp` | `--version`, `--help`, `service status` spawn heavy TUI binary unnecessarily; temp files accumulate. | 5 comments, **2 👍** — resource leak on every diagnostic call |
| **[#20458](https://github.com/anomalyco/opencode/issues/20458)** Mouse escape sequences garbled after TUI exit | Terminal left in broken state post-exit; distinct from in-session mouse issues. | 7 comments, **4 👍** — persistent since Apr 2026 |
| **[#42913](https://github.com/anomalyco/opencode/issues/42913)** zsh completion: top-level flags (`--continue`, `--session`, `--fork`) never suggested | Developer ergonomics: tab completion omits root flags, only shows subcommands. | 4 comments — filed Aug 16, quick traction |
| **[#42938](https://github.com/anomalyco/opencode/issues/42938)** Go plan hits 100%, blocks 12h — Zen balance ($39.89) never used | Fallback logic broken: "Use balance" enabled but Zen credits ignored across all models. | 2 comments — filed Aug 16, subscription-tier impact |

---

## 4. Key PR Progress (Top 10 by Significance)

| PR | Status | Summary |
|----|--------|---------|
| **[#42952](https://github.com/anomalyco/opencode/pull/42952)** `fix(app): reduce session spinner CPU usage` | **OPEN** (Aug 17) | Replaces 25 per-dot CSS animations with single APNG timeline; preserves reduced-motion, `currentColor`, SVG props. Performance win for idle sessions. |
| **[#42949](https://github.com/anomalyco/opencode/pull/42949)** `fix(app): render code mode executions` | **OPEN** (Aug 16) | Adds dedicated Desktop renderer for Code Mode: child tool progress, input summaries, failed-call states, runtime errors + metadata parsing tests. |
| **[#42947](https://github.com/anomalyco/opencode/pull/42947)** `docs: reorganize v2 documentation` | **CLOSED** (Aug 16) | Major doc restructure: focused CLI pages for config, providers, themes, keybinds, plugins; layout/typography/branding refresh; `terminal.copy_on_select` → `terminal.copy`. |
| **[#42944](https://github.com/anomalyco/opencode/pull/42944)** `fix(app): correct background subagent status` | **CLOSED** (Aug 16) | Background subagents now classified only after parent tool completes with running child result; legacy `task` metadata preserved; progress indicator tied to child session state. |
| **[#42945](https://github.com/anomalyco/opencode/pull/42945)** `fix(app): clarify skill timeline presentation` | **CLOSED** (Aug 16) | Timeline tool rows show skill icon, label, separator, resolved name; muted text for details/notices; regression tests added. |
| **[#42766](https://github.com/anomalyco/opencode/pull/42766)** `refactor(app): use current session messages` | **OPEN** (Aug 15) | Removes legacy `Message`/`Part` transcript duplication; desktop now relies solely on V2 session message stream. |
| **[#42948](https://github.com/anomalyco/opencode/pull/42948)** `chore(util): log spawned processes` | **CLOSED** (Aug 16) | Logs every cross-spawn at info level (exe, args, cwd) — aids debugging process churn (e.g., #37671 temp file leaks). |
| **[#42049](https://github.com/anomalyco/opencode/pull/42049)** `fix(tui): hide background badge on interrupted shells` | **CLOSED** (Aug 16) | Background badge renders only for completed tools with explicit detached running state; shared predicate across shell/subagent rendering. |
| **[#41144](https://github.com/anomalyco/opencode/pull/41144)** `fix(tui): clarify saved permission copy` | **CLOSED** (Aug 16) | Renames "Allow always" → "Always allow"; explains project-scoped persistence; removes incorrect claim that rules vanish on restart. |
| **[#37392](https://github.com/anomalyco/opencode/pull/37392)** `fix(core): surface refusal category & explanation on content filter` | **CLOSED** (Jul 16, cleanup Aug 16) | Maps Anthropic `stop_reason: "refusal"` to `content-filter` finish with category/explanation instead of hardcoded message. Closes #35736. |

---

## 5. Feature Request Trends

1. **Cloud/Web Sync Parity** — #13626 (auto-sync projects), #24286/#29301 (version mismatch CLI vs Web) show users expect seamless multi-device experience.
2. **Session Management UX** — #42863 (persistent ordered review), #42940 (favorites/pinning), #42913 (completion for session flags) — heavy investment in session workflow tooling.
3. **Provider/Timeout Config Respect** — #26602 (ignore hardcoded 5-min timeout), #42938 (Zen balance fallback), #33318 (paid tier recognition) — users want config to be authoritative.
4. **Headless/CLI Lightweight Mode** — #37671 (stop loading TUI for `--version`/ `--help`), #42913 (root flag completion) — demand for fast, scriptable CLI.
5. **Error Visibility & Recovery** — Cluster of "stuck thinking" (#32366, #36370, #40468), silent 500 drops (#38644), empty response handling (#41469) — consistent ask: **surface errors, allow retry, don't hard-lock UI**.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Accidental session termination** | `Ctrl+C` = copy on Windows, but kills OpenCode (#7957, 49 👍, 7 months open) | **Critical** — daily driver impact |
| **Unrecoverable stuck states** | "Thinking" forever (#32366, #36370), busy animation lock (#40468), network stall (#40625) — all require restart | **High** — multiple independent reports |
| **Silent failures / no error UI** | 500 dropped silently (#38644), empty LLM response exits silently (#41469), stream errors swallow state (#32366) | **High** — erodes trust in automation |
| **Resource leaks in V2 CLI** | 13 MB `.so` per `--version` call (#37671), SSD wear from `/tmp` spam (#42880) | **Medium** — affects CI/scripting users |
| **Billing/entitlement bugs** | Paid Zen balance ignored (#33318, #42938), Stripe/Alipay verification failure (#33112) | **Medium** — direct revenue & trust impact |
| **Terminal corruption on exit** | Mouse escape sequences left in shell (#20458), requires `reset` | **Medium** — workflow friction |
| **Completion/Discoverability gaps** | Root flags missing from zsh completion (#42913), model cycle hidden from palette (#37363) | **Low-Medium** — power-user friction |

---

*Generated from GitHub data (issues/PRs updated 2026-08-16 → 2026-08-17). Links point to live items on `anomalyco/opencode`.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-17

## Today's Highlights
The Pi team merged critical fixes for token accounting (excluding cache tokens from billable totals), Kiro OAuth device login, and a regression where custom messages mid-stream corrupted tool-call ordering. Meanwhile, the community is actively debugging a Windows TUI input redraw bug, a prompt-editor performance cliff at large buffers, and intermittent `pi.dev` catalog timeouts that block model refreshes.

## Releases
No new releases in the last 24 hours.

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#5023](https://github.com/earendil-works/pi/issues/5023) Terminal scrolls to beginning randomly | Core UX regression in TUI; disrupts long sessions. **Closed** with fix. | 14 comments, 2 👍 — high visibility. |
| [#8029](https://github.com/earendil-works/pi/issues/8029) Slow prompt-editor navigation at ~7k lines | Performance scales linearly with buffer size; blocks large-context workflows. **In progress**. | 9 comments — developers hit this in real usage. |
| [#6300](https://github.com/earendil-works/pi/issues/6300) Windows: input line redrawn per keystroke | Makes Pi unusable on Windows cmd/Terminal; each char appears on new line. | 7 comments — Windows users blocked. |
| [#7683](https://github.com/earendil-works/pi/issues/7683) pi-tui: components receive mouse events on own rows | Enables richer component interactions (e.g., custom click handlers). **Closed** with implementation. | 10 comments — feature request from extension authors. |
| [#8157](https://github.com/earendil-works/pi/issues/8157) Migrate grok-mermaid → lovely-mermaid | Current mermaid renderer has inherited corner cases; lovely-mermaid is better maintained. | 5 comments — maintainers planning migration. |
| [#5581](https://github.com/earendil-works/pi/issues/5581) Custom messages bypass `before_agent_start` | Breaks extension hooks for `triggerTurn: true` messages; affects steering workflows. **In progress**. | 4 comments, 1 👍 — extension authors impacted. |
| [#7994](https://github.com/earendil-works/pi/issues/7994) `openai-completions`: reasoning_details round-trip only supports encrypted entries | Prevents signed-text replay for OpenRouter/DeepSeek reasoning traces. | 3 comments — reported by OpenRouter team via 870-trial benchmark. |
| [#7870](https://github.com/earendil-works/pi/issues/7870) Remote catalog overrides `glm-5.2` contextWindow (262k vs 1M) | Model capabilities silently downgraded; affects GLM-5.2 users on OpenRouter. **In progress**. | 3 comments — catalog sync issue. |
| [#8061](https://github.com/earendil-works/pi/issues/8061) Context budget ignores `maxTokens` output reservation | Requests rejected at 78% input; compact-and-retry also fails. | 2 comments, 1 👍 — context-management bug. |
| [#8198](https://github.com/earendil-works/pi/issues/8198) `pi.dev` catalog endpoint times out from multiple networks | `pi update --models` fails consistently; blocks model discovery. | 2 comments — infrastructure issue affecting all users. |

## Key PR Progress

| PR | Summary | Impact |
|----|---------|--------|
| [#8218](https://github.com/earendil-works/pi/pull/8218) `fix(coding-agent): getStats tokens.total = billable only` | Excludes cache tokens (billed at 1/120th rate) from `tokens.total`; prevents premature compaction. | Fixes budget miscalculation for DeepSeek/OpenAI cache pricing. |
| [#8217](https://github.com/earendil-works/pi/pull/8217) `feat(auth): add Kiro OAuth device login` | Adds Kiro provider, catalog, runtime routing; handles OAuth edge cases. | New auth option for Kiro users. |
| [#8209](https://github.com/earendil-works/pi/pull/8209) `fix(coding-agent): defer non-turn custom messages` | Fixes #8166: `sendCustomMessage(triggerTurn:false)` mid-stream no longer corrupts tool-call adjacency. | Prevents permanent 400 errors on Moonshot/DeepSeek. |
| [#8119](https://github.com/earendil-works/pi/pull/8119) `fix: track kimi cached tokens` | Parses Kimi's top-level `usage.cached_tokens` as cache-read input (addresses #8075). | Accurate token accounting for Kimi/OpenAI-compat. |
| [#8124](https://github.com/earendil-works/pi/pull/8124) `feat(ai): route xAI models through Responses API` | Switches xAI to Responses API, defaults to Grok 4.6, sends user-agent. | Aligns xAI with modern API surface. |
| [#8204](https://github.com/earendil-works/pi/pull/8204) `fix(coding-agent): retry hung pi.dev catalog refreshes` | Adds per-attempt timeout + retry for catalog fetches (recurrence of #8065). | Mitigates `pi update --models` hangs. |
| [#8193](https://github.com/earendil-works/pi/pull/8193) `feat(ai): add image-to-image for MiniMax` | Implements `minimax-images` module + runtime registry for image-gen endpoint. | Enables reference-image generation via MiniMax. |
| [#8076](https://github.com/earendil-works/pi/pull/8076) `DRAFT: dev branch with new harness` | Work-in-progress harness rewrite. | Foundation for future agent-loop improvements. |
| [#8219](https://github.com/earendil-works/pi/pull/8219) Closed without merge | Placeholder PR. | No impact. |
| [#8222](https://github.com/earendil-works/pi/pull/8222) `Consider validating tool parameter schemas` | Proposes validation/defaulting for tool schemas (plain-JS extensions can omit). | Prevents `parameters: undefined` serialization bugs. |

## Feature Request Trends
1. **TUI Extensibility** — Mouse-event dispatch to components (#7683), argument completions via RPC (#8214), blockable `agent_end` veto (#8213).
2. **Model Catalog Accuracy** — Sync context windows (#7870), align Qwen token-plan catalogs (#8194), add missing vision models (#8220), fix provider routing for OpenCode Go (#8206).
3. **Reasoning/Thinking Controls** — Thinking levels for GLM-5.3 (#8190), reasoning-effort wire support, mermaid renderer upgrade (#8157).
4. **Extension Safety** — Subagent nesting depth limit (#8195), package install/update race fixes (#8215), schema validation (#8222).
5. **Cross-Platform Polish** — Windows input redraw (#6300), IME/dictation live re-layout (#8211), theme-switch stale colors (#8212).

## Developer Pain Points
- **Prompt Editor Performance** — Linear slowdown with buffer size (~1.6s/keystroke at 7k lines) makes large-context editing painful (#8029).
- **Windows TUI Usability** — Per-keystroke line redraw renders Pi unusable on native Windows terminals (#6300).
- **Catalog Reliability** — `pi.dev` timeouts block `pi update --models`; intermittent TLS hangs require client-side retry/timeout hardening (#8198, #8204).
- **Token Accounting Surprises** — Cache tokens inflated `tokens.total` ~120x, triggering early compaction; reasoning_details round-trip limited to encrypted format (#8218, #7994).
- **Message Queue Shortcut Conflict** — `Alt+Enter` (fullscreen toggle) vs. message queue binding confuses users (#8221).
- **Extension Lifecycle Races** — Concurrent package installs/updates + `/reload` can leave partial extension sets (#8215).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-17

## 1. Today's Highlights
The project shipped a nightly release (`v0.21.11-nightly.20260817`) with an autofix footprint gate and a full DSW EAS E2E rerun across SWE-bench Verified (500) and Terminal-Bench 2.0 (89). Multi-agent stability dominates current work: four critical bugs around agent-team message routing, task dispatch, prompt accuracy, and tab crashes were filed and paired with fixes in the last 24h. The `/review` platform continues its hardening sprint — worktree lease locking, verifier scratch trees, body-length budgeting, and Aone Code read-path support are all landing via autofix takeovers.

## 2. Releases
**v0.21.11-nightly.20260817.195128a17a**  
- `feat(autofix)`: Deny-by-default footprint gate and positional window censuses ([#9156](https://github.com/QwenLM/qwen-code/pull/9156)) — prevents unbounded diff growth in automated fix loops.  
- `fix(web-shell)`: DSW EAS full E2E r3 rerun after scoping package proxy to verifier-only egress; published through SWE-bench Verified (500) → Terminal-Bench 2.0 (89) → Release.  
[Release notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11-nightly.20260817.195128a17a)

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#9276](https://github.com/QwenLM/qwen-code/issues/9276) | Team members cannot send ordinary messages to leader — treated as shutdown request | Blocks basic multi-agent communication; P2 bug in `roadmap/multi-agent` | 5 comments, 0 👍 — active triage |
| [#9291](https://github.com/QwenLM/qwen-code/issues/9291) | Unsupported image MIME (HEIC) aborts Responses-compatible session | Breaks real-world image uploads; endpoint rejects `image/heic` during validation | 3 comments, PR [#9295](https://github.com/QwenLM/qwen-code/pull/9295) already fixing |
| [#9290](https://github.com/QwenLM/qwen-code/issues/9290) | Interactive session crashes opening errored agent-team tab | UX regression in multi-agent UI; crashes on tab select | 3 comments, PR [#9292](https://github.com/QwenLM/qwen-code/pull/9292) contains fix |
| [#9282](https://github.com/QwenLM/qwen-code/issues/9282) | Manual team task assignment persists but never dispatches work | Leader can set `owner: alice` but idle Alice receives no prompt — delivery path only auto-claims unowned `pending` tasks | 3 comments, PR [#9289](https://github.com/QwenLM/qwen-code/pull/9289) implements fix |
| [#9283](https://github.com/QwenLM/qwen-code/issues/9283) | Agent-team prompts contradict actual delivery & promise unavailable peer summaries | Docs/prompts say explicit `send_message` required, but runtime auto-forwards on idle — misleading for developers | 3 comments, PR [#9284](https://github.com/QwenLM/qwen-code/pull/9284) aligns prompts |
| [#9281](https://github.com/QwenLM/qwen-code/issues/9281) | `task_list` treats blank optional filters as active filters | Empty string `owner`/`blockedBy` returns "No tasks found" despite matches; filter logic mismatch | 3 comments, PR [#9286](https://github.com/QwenLM/qwen-code/pull/9286) (author's own) |
| [#9089](https://github.com/QwenLM/qwen-code/issues/9089) | Autofix PAT-bearing jobs share host with untrusted branch code — needs runner-level isolation | Security: persistent-pool attack surface from `global-driver` incident; cannot be fixed inside GH Actions step | 5 comments, P1 security, `scope/github-actions` |
| [#9194](https://github.com/QwenLM/qwen-code/issues/9194) | Close mutation-verified test-pin gaps from PR #9096 review rounds 5-6 | Test robustness debt: mutations in prod code pass suite; flagged by automated reviewer | 8 comments, `type/enhancement`, `scope/testing` |
| [#9205](https://github.com/QwenLM/qwen-code/issues/9205) | Concurrent same-PR reviews race on fixed worktree path (worktree deleted mid-run) | `.qwen/tmp/review-pr-<n>` deleted by another session; 5 unverified cleanups recorded | 2 comments, P2, `autofix/skip` |
| [#9294](https://github.com/QwenLM/qwen-code/issues/9294) | Add ClawMetry to Ecosystem section | Community integration request: local observability dashboard with Qwen Code adapter | 2 comments, `status/ready-for-human`, `scope/documentation` |

## 4. Key PR Progress (10 Important)

| # | PR | Scope | Status | Summary |
|---|----|-------|--------|---------|
| [#9295](https://github.com/QwenLM/qwen-code/pull/9295) | `fix(core): omit image media the model endpoint cannot safely consume` | Core, Multi-agent | Open | Filters HEIC/TIFF/unknown MIME before forwarding; prevents validation abort ([#9291](https://github.com/QwenLM/qwen-code/issues/9291)) |
| [#9292](https://github.com/QwenLM/qwen-code/pull/9292) | `fix(cli): contain agent-tab render errors instead of exiting the session` | CLI, Interactive | Open | Adds error boundary around agent tabs; stops full-session crash ([#9290](https://github.com/QwenLM/qwen-code/issues/9290)) |
| [#9289](https://github.com/QwenLM/qwen-code/pull/9289) | `fix(core): dispatch manually assigned team tasks to their owner` | Core, Multi-agent | Open | On `task_update(status=in_progress, owner=X)`, immediately delivers to X if idle, else queues for when idle ([#9282](https://github.com/QwenLM/qwen-code/issues/9282)) |
| [#9284](https://github.com/QwenLM/qwen-code/pull/9284) | `fix(core): align agent-team prompts and TeamCreate description with actual delivery` | Core, Multi-agent | Open | Updates prompts to reflect auto-forward on idle; removes false `send_message` requirement ([#9283](https://github.com/QwenLM/qwen-code/issues/9283)) |
| [#9211](https://github.com/QwenLM/qwen-code/pull/9211) | `fix(review): lock the PR review worktree lease against concurrent sessions` | Review, CI/CD | Closed | Worktree lease now doubles as lock; prevents mid-run deletion ([#9205](https://github.com/QwenLM/qwen-code/issues/9205)) |
| [#9221](https://github.com/QwenLM/qwen-code/pull/9221) | `fix(review): run verifier probes in a private scratch worktree` | Review, CI/CD | Open | Verifier writes/runs/restores in isolated tree; avoids polluting shared review worktree ([#9207](https://github.com/QwenLM/qwen-code/issues/9207)) |
| [#9247](https://github.com/QwenLM/qwen-code/pull/9247) | `fix(review): budget the composed body against GitHub's review limit` | Review | Open | Trims review body to 65,536 chars; drops Chinese fold first (translation duplicate) |
| [#9273](https://github.com/QwenLM/qwen-code/pull/9273) | `feat(review): capture-tui — rendering claims get pixels, not prose` | Review, CLI | Open | `qwen review capture-tui` drives private tmux, captures pane text (`.ans`) + PNG (`freeze`) for visual evidence |
| [#9226](https://github.com/QwenLM/qwen-code/pull/9226) | `feat(review): Aone Code read path (second review-platform provider)` | Review, Integration | Open | Detects `gitlab.alibaba-inc.com` remotes; reuses read subcommands (`meta`, `issues`, `comments`, `changes`) |
| [#9262](https://github.com/QwenLM/qwen-code/pull/9262) | `feat(autofix): audit the approach instead of stopping on growth-budget breach` | Autofix, Core | Open | On growth-budget breach, runs audit round instead of handing off to maintainer — keeps automation moving |

## 5. Feature Request Trends
1. **Multi-agent maturity** — 6+ issues/PRs in 24h around message routing, task dispatch, prompt accuracy, tab stability, and leader observability (`roadmap/multi-agent` label appears repeatedly).  
2. **Review platform extensibility** — Aone Code read-path (#9226), capture-tui evidence (#9273), body budgeting (#9247), worktree locking (#9211), scratch verifier trees (#9221) — all building a pluggable, auditable review pipeline.  
3. **Autofix self-governance** — Growth-budget audit instead of handoff (#9262), footprint gate (#9156), runner isolation (#9089), checkout self-heal backport (#9265) — pushing automation deeper without human bottlenecks.  
4. **Ecosystem integrations** — ClawMetry observability adapter (#9294), GitHub Copilot auth (#9275), web-shell boot fallback (#9254) — lowering adoption friction.  
5. **Developer experience hardening** — tmux usability (#8962), inline image perf (#8608), Chinese IME (#5966), file-mode umask respect (#9250).

## 6. Developer Pain Points
- **Multi-agent reliability** — message routing bugs (#9276), silent task dispatch failures (#9282), contradictory prompts (#9283), tab crashes (#9290) make team workflows feel fragile.  
- **Review flakiness at scale** — worktree races (#9205), verifier pollution (#9221), body overflow (#9247), overlap-drop false positives (#9208), retirement logic gaps (#9206) — all surfaced in high-effort, multi-round reviews.  
- **Security/ops constraints** — PAT-bearing jobs on shared runners (#9089), workspace wipe deleting `.git` (#9228), umask-ignored file modes (#9250) — infra-level issues requiring architectural fixes.  
- **Input handling gaps** — HEIC images abort sessions (#9291), blank filters misbehave (#9281), Chinese IME broken (#5966), tmux flicker (#8962) — edge cases that block real workflows.  
- **Test trustworthiness** — mutation-verified gaps (#9194) mean CI green ≠ behavior correct; reviewers flag but maintainers defer past round 5.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-08-17

---

## 1. Today's Highlights

CodeWhale v0.9.8 shipped, formally deprecating the legacy `deepseek-tui` npm package and establishing `codewhale` as the sole public identifier from Shannon Labs. The past 24 hours saw intense stabilization work: a crashing TUI regression (v0.9.7), prose rendering capped at 105 columns on wide terminals, and flaky verifier tests under parallel CI. Meanwhile, the agent/subagent tool schema was slimmed from 33 to 12 advertised fields, and the bwrap sandbox gained configurable extra bind roots to unblock Zig and other toolchains.

---

## 2. Releases

### v0.9.8 (2026-08-17)
- **Breaking**: Legacy npm package `deepseek-tui` deprecated; all future releases publish under `codewhale` (lowercase).
- **Migration**: Users on v0.8.x `deepseek`/`d` commands must switch to `codewhale`.
- **Note**: This release appears to be a version bump / deprecation marker; no feature changelog provided in the release notes.

[Release v0.9.8](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.8)

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5424](https://github.com/Hmbown/CodeWhale/issues/5424) | **v0.9.7: TUI crashes after ~1 min** | Critical regression blocking daily use; affects `--continue` sessions. | 5 comments, opened 2026-08-16 |
| [#5123](https://github.com/Hmbown/CodeWhale/issues/5123) | **Agent spawn surface has too many knobs** | Builder-labeled delegates run read-only and self-BLOCKED; core agent reliability issue. | 6 comments, updated 2026-08-16 |
| [#5056](https://github.com/Hmbown/CodeWhale/issues/5056) | **Flaky verifier background tests** | 2 verifier tests + 12 `#[ignore]` tests flake under parallel CI; blocks release confidence. | 5 comments, updated 2026-08-17 |
| [#5436](https://github.com/Hmbown/CodeWhale/issues/5436) | **Prose wraps at ~105 cols; tool cells full-width** | Transcript reads left-oriented on wide terminals; UX regression from v0.8. | 0 comments (just filed), but PR #5446 already merged |
| [#5322](https://github.com/Hmbown/CodeWhale/issues/5322) | **Output area doesn't fill wide terminals** | Related to #5436; capped max width since v0.9, worked in v0.8.65. | 5 comments, **CLOSED** via #5446 |
| [#2693](https://github.com/Hmbown/CodeWhale/issues/2693) | **HarnessPosture: model-specific context/subagent policy** | Strategic: different models (DeepSeek V4, MiMo v2.5) need different context strategies. | 6 comments, open since 2026-06-03 |
| [#1917](https://github.com/Hmbown/CodeWhale/issues/1917) | **Universal PreToolUse/PostToolUse hook layer** | Architectural: unified Cancel/Pause/Resume for *any* action type. | 5 comments, open since 2026-05-22 |
| [#5413](https://github.com/Hmbown/CodeWhale/issues/5413) | **Regression: sudo broken in v0.9.7** | YOLO mode sudo worked in v0.8.65; now fails in wheel group. | 2 comments, **CLOSED** (likely fixed in v0.9.8) |
| [#5403](https://github.com/Hmbown/CodeWhale/issues/5403) | **main red on macOS (plugin_e2e) & Windows (NSIS)** | CI health: 4 consecutive runs red on both platforms post-#5395. | 2 comments, open |
| [#5410](https://github.com/Hmbown/CodeWhale/issues/5410) | **Allow extra roots in bwrap sandbox** | Blocks Zig toolchain (dev/null, system libs); PR #5456 addresses. | 1 comment, open |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#5458](https://github.com/Hmbown/CodeWhale/pull/5458) | **feat** | Slim `agent` tool schema from 33→12 advertised fields (action, prompt, type, profile, name, agent_id, message, detached, worktree, write_roots, resume_from, until); aliases still parse-accepted. |
| [#5456](https://github.com/Hmbown/CodeWhale/pull/5456) | **feat** | bwrap sandbox: mount private `/dev`, `/proc`, `/tmp` by default; add `bwrap_ro_roots` / `bwrap_rw_roots` config for extra bind mounts (fixes #5410). |
| [#5445](https://github.com/Hmbown/CodeWhale/pull/5445) | **fix** | Carry Responses-dialect DSH routes via `pi-ai openai-responses`; unblocks `deepseek-v4-flash` default route (closes #5434). |
| [#5446](https://github.com/Hmbown/CodeWhale/pull/5446) | **fix** | Remove `PROSE_MAX_MEASURE=105` cap; prose now fills full content width; add `transcript.prose_measure` config (closes #5436, #5322). |
| [#5450](https://github.com/Hmbown/CodeWhale/pull/5450) | **fix** | Restore session cost display when live pricing unverifiable (503 from control plane); supersedes #5402. |
| [#5438](https://github.com/Hmbown/CodeWhale/pull/5438) | **fix** | Scout posture gate honors read-only shell from #5428; fixes scout denied `git log`, `ls`, `cat` (closes #5426). |
| [#5455](https://github.com/Hmbown/CodeWhale/pull/5455) | **feat** | Empty-state whale art redrawn from Whale Teams "Signal Cut" roster; visual polish. |
| [#5454](https://github.com/Hmbown/CodeWhale/pull/5454) | **feat** | Web i18n: add fr/de/ca/hi/tr/it/pl + ar (RTL) dictionaries; parity with TUI locale packs. |
| [#5452](https://github.com/Hmbown/CodeWhale/pull/5452) | **docs** | README translations for fr/de/zh-TW/hi/tr/it/pl/ar (8 new languages). |
| [#5401](https://github.com/Hmbown/CodeWhale/pull/5401) | **security** | CodeQL High fixes: clear-text logging of catalog limits; GHSA-8hp3 / GHSA-3mgh prep. |

---

## 5. Feature Request Trends

1. **Agent/Subagent UX & Reliability** — #5123, #2693, #1917, #3389, #5263: Unified hook layer, model-specific harness posture, hotbar command surface, prompt assembly in core.
2. **Sandbox Extensibility** — #5410, #2617: Configurable bwrap roots, SPM `swift test` support.
3. **Model/Provider Configurability** — #4660, #5367, #4173: Custom providers, configurable read/tool-result limits, de-hardcode model/tool registries.
4. **Internationalization** — #5454, #5452: Rapid expansion to 8+ new languages for web + README.
5. **Session/Workflow Control** — #1917, #5444: Mid-turn rename, universal pause/resume/cancel hooks.

---

## 6. Developer Pain Points

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **TUI rendering regressions on wide terminals** | High | #5436, #5322 (both fixed in same day via #5446) |
| **Agent/subagent tool complexity & blocking** | High | #5123 (builder read-only + self-BLOCKED), #5426 (scout read-only shell), #5438 (scout gate fix) |
| **Flaky CI / test reliability** | High | #5056 (verifier tests), #4669 (coalesced read test), #5403 (main red on both platforms) |
| **Sandbox blocking legitimate toolchains** | Medium | #5410 (Zig), #2617 (SPM swift test) |
| **Legacy migration friction** | Medium | v0.9.8 deprecates `deepseek-tui` npm; v0.8.x users must migrate commands |
| **Model-specific context tuning lacking** | Medium | #2693 (HarnessPosture), #5367 (configurable size limits) |
| **Session cost opacity when pricing unavailable** | Low | #5241 → #5450 (fixed) |

---

*Digest generated from GitHub data as of 2026-08-17. All links point to Hmbown/CodeWhale (formerly DeepSeek-TUI).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*