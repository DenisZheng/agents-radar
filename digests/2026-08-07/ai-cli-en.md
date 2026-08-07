# AI CLI Tools Community Digest 2026-08-07

> Generated: 2026-08-07 02:21 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-07)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is characterized by **rapid weekly releases** and **intense competition on developer experience polish**. All nine tracked tools shipped updates or hotfixes within the last week, with three (Codex, Gemini, Qwen) releasing stable versions today. A clear bifurcation is emerging: **commercial-backed tools** (Claude Code, Codex, Copilot, Gemini, Qwen) prioritize enterprise readiness, sandbox security, and cross-platform parity, while **community-driven tools** (OpenCode, Kimi, Pi, DeepSeek TUI) iterate faster on TUI/UX innovation, embeddable runtimes, and multi-provider flexibility. The dominant architectural pattern is **agentic workflows with tool-use, subagent delegation, and persistent context**—every tool now grapples with context-window management, hook/plugin ecosystems, and session resumption reliability.

---

## 2. Activity Comparison (2026-08-07)

| Tool | Issues Tracked (Hot) | PRs Updated | Release Today | Highest Community Signal |
|------|---------------------|-------------|---------------|--------------------------|
| **Claude Code** | 10 | 3 | No | #6527 permissions regression (19👍, 23 comments) |
| **OpenAI Codex** | 10 | 10 | **Yes** (v0.147.0) | #33776 Windows process leak (27👍, 32 comments) |
| **Gemini CLI** | 10 | 10 | **Yes** (v0.56.0-nightly, v0.55.0-preview.2, v0.54.2) | #26856 data loss (16👍, 47 comments) |
| **GitHub Copilot CLI** | 10 | 0 | **Yes** (v1.0.79-6) | #4118 `/app` CWD default (35👍) |
| **Kimi Code CLI** | 7 | 3 | No | #1283 memory system (20 comments) |
| **OpenCode** | 10 | 8 | No | #6152 context usage viz (129👍) |
| **Pi** | 10 | 9 | **Yes** (v0.84.0) | #6879 auto-compaction bug (15👍) |
| **Qwen Code** | 10 | 10 | **Yes** (v0.21.7, live-host v0.1.0) | #3203 OAuth policy (150 comments) |
| **DeepSeek TUI** | 10 | 10 | No (v0.9.4 train) | #2870 command-boundary epic (20 comments) |

**Key insight**: Commercial tools show higher PR velocity (8–10 PRs/day) and structured release cadences; community tools compensate with deeper architectural PRs (e.g., DeepSeek's command-boundary refactor, OpenCode's workspace environment foundation).

---

## 3. Shared Feature Directions (Cross-Tool Convergence)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Persistent cross-session memory/context** | OpenCode (#6152), Kimi (#1283), Qwen (#8507 Mem0), Pi (AGENTS.override.md), Gemini (Auto Memory) | Token-usage visualization, project-pattern learning, explicit memory write APIs |
| **MCP (Model Context Protocol) ecosystem hardening** | Codex (#20883 pool, #33531 leak), Copilot (#4374, #4346, #4392), Gemini (#10704), DeepSeek (#5238 registry), Qwen (serve hooks) | Project-scoped process pooling, registry discovery, orphaned process cleanup, CI token support |
| **Windows first-class support** | **All 9 tools** report Windows-specific bugs | GPU crashes (Claude), process leaks (Codex), PowerShell 5.1 compat (Gemini), NixOS/WSL (Copilot), startup crashes (Qwen, OpenCode), docs fragmentation (Pi) |
| **Session resumption & large-context reliability** | Copilot (#4251 OOM), OpenCode (compaction serialization), Pi (auto-compaction bug), Qwen (50-turn limit removed), Claude (#73638 transcript corruption) | Compaction serialization, subagent checkpoint resume, context-window telemetry |
| **Hook/plugin system reliability & security** | Qwen (#8622 hooks silent, #8582 bypass), Claude (#6527 ask list ignored), Codex (plugin system v0.147.0), Kimi (StrReplaceFile corruption), Gemini (settings load-order) | Fail-closed defaults, schema validation parity, sandboxed tool execution |
| **Terminal/TUI polish & accessibility** | Pi (v0.84.0 fullscreen), DeepSeek (mouse scroll, line-width), Copilot (tmux dark-on-dark), Qwen (VP mode dupes, IME), Codex (multi-line status 58👍) | Scrollback integrity, selection/copy semantics, IME support, theme compatibility |

---

## 4. Differentiation Analysis

| Dimension | Commercial-Backed (Claude, Codex, Copilot, Gemini, Qwen) | Community-Driven (OpenCode, Kimi, Pi, DeepSeek) |
|-----------|----------------------------------------------------------|--------------------------------------------------|
| **Target User** | Enterprise teams, professional developers, CI/CD integration | Power users, researchers, multi-provider enthusiasts, embedders |
| **Release Cadence** | Weekly stable + nightly/preview channels | Continuous integration trains (DeepSeek), nightly (Kimi), ad-hoc (OpenCode, Pi) |
| **Architecture** | Proprietary backends, managed sandboxes, opaque model routing | BYOM (Bring Your Own Model), multi-provider routing, embeddable runtimes (DeepSeek Runtime API, Pi Harness) |
| **Security Model** | Centralized auth, enterprise SSO, audit hooks, sandboxed execution | Local-first, user-managed keys, transparent tool execution, capability-based permissions |
| **Extension Strategy** | Marketplace/plugins (Claude, Codex), MCP servers (all), VS Code extensions (Copilot, Gemini) | Skill systems (OpenCode, Kimi), AGENTS.md context files (Pi, Kimi), MCP registry (DeepSeek) |
| **Monetization** | Subscription tiers (Claude Go, Codex, Copilot, Qwen), usage-based | Free/open-source; OpenCode Go subscription (currently broken) |
| **Platform Priority** | macOS/Linux first, Windows catching up | Linux-first (DeepSeek, Pi), cross-platform via Rust/Node (Kimi, OpenCode) |

**Technical approach divergence**: Commercial tools invest heavily in **managed infrastructure** (sandbox VMs, auth proxies, model routing headers). Community tools invest in **composability** (DeepSeek's `EngineConfig::subagent_state_root`, Pi's `Harness` factory, OpenCode's `Files` effect from `ChildProcessSpawner`).

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum / Maturing** | **OpenAI Codex**, **Gemini CLI**, **Qwen Code** | Daily stable releases, 10+ PRs/day, structured issue triage, security fix turnaround <24h (Qwen #8590), enterprise feature depth (Codex plugin system, Gemini MCP sampling) |
| **High Momentum / Stabilizing** | **GitHub Copilot CLI**, **Claude Code** | Regular patches, but accumulating regressions (Copilot 1.0.74 OOM, Claude permissions/Windows), strong community signal but slower root-cause resolution |
| **Rapid Iteration / Architectural Flux** | **DeepSeek TUI**, **OpenCode**, **Pi** | Major refactors in-flight (command-boundary, workspace environment, Harness v2), high PR quality, but breaking changes frequent; DeepSeek's 77-commit release train exemplifies velocity |
| **Niche / Early-Stage** | **Kimi Code CLI** | Focused on VS Code extension parity and memory system; smaller issue volume but high-severity data-corruption bugs (#2591) indicate maturity gaps |

**Critical signal**: OpenCode's **Go subscription auth outage** (16+ days, 9+ issues, 100+ comments) reveals operational risk in commercial-community hybrids. Conversely, Qwen's **150-comment OAuth policy debate** shows active user governance.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **MCP is becoming the universal tool-interop layer** | 8/9 tools actively fixing MCP lifecycle, registry discovery, or auth | Invest in MCP server development over proprietary plugin APIs; expect MCP compliance to be table stakes by Q4 2026 |
| **Context-window management is the new performance bottleneck** | Auto-compaction bugs (Pi, Qwen), compaction serialization (OpenCode), 50-turn limit removal (Qwen), context viz demand (OpenCode 129👍) | Tool selection should prioritize transparent context accounting and programmatic compaction control |
| **Windows is the compatibility litmus test** | Every tool has open Windows blockers; Codex & Claude treat it as P0 | Teams standardizing on Windows must validate CLI tooling in CI; WSL2 ≠ native support |
| **Security regressions in hook/tool-permission systems are systemic** | Qwen (classifier bypass), Claude (ask list ignored), Kimi (StrReplaceFile corruption), Gemini (settings race) | Adopt fail-closed permission defaults; audit tool-execution paths before production use |
| **Embeddable/headless agent runtimes are emerging** | DeepSeek Runtime API (5 PRs), Pi Harness v2, OpenCode workspace environment, Codex thread plumbing | Future integration will favor tools exposing programmatic control planes over CLI-only interfaces |
| **Multi-provider routing is standardizing** | DeepSeek (single key pain), Pi (Ollama Cloud, Bedrock), Qwen (OpenAI-compat cache sharing), OpenCode (model metadata) | Avoid vendor lock-in; evaluate tools on provider-agnostic architecture |

---

**Bottom line for developers**: 
- **For enterprise stability**: **Codex** (plugin ecosystem, sandbox hardening) and **Gemini** (MCP sampling, eval infrastructure) lead.
- **For customization & local control**: **DeepSeek TUI** (embeddable runtime, MCP registry) and **Pi** (AGENTS.md context, Harness architecture) are most hackable.
- **For immediate productivity**: **Qwen Code** (inline images, unbounded turns, live host) and **Copilot CLI** (GitHub integration) ship polished UX today—verify Windows/CI compat first.
- **Watch list**: **OpenCode**—if auth outage resolves, its session/context architecture and workspace environment are best-in-class for complex multi-repo workflows.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-08-07)

---

## 1. Top Skills Ranking — Most-Discussed PRs & Skill Areas

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **skill-creator / run_eval.py ecosystem** (#1298, #1099, #1050, #1323, #1261 + Issues #556, #1169) | Core tooling for creating, evaluating, and optimizing skill descriptions; `run_loop.py`/`improve_description.py` depend on it | **Highest concentrated attention**: 6 PRs + 2 issues (55 total comments) addressing systemic 0% recall bug, Windows subprocess crashes, trigger detection failures, and test isolation. Community reports "optimization loop optimizing against noise." | 🔴 Open (multiple) |
| 2 | **document-typography** (#514) | Prevents typographic defects in AI-generated docs: orphan/widow control, numbering alignment, line-break hygiene | 10-day active discussion; addresses "every document Claude generates" pain point; no native typographic QA exists today | 🔴 Open |
| 3 | **self-audit** (#1367) | Mechanical file verification → 4-dimension reasoning audit (correctness, completeness, security, clarity) before delivery | Universal, stack-agnostic quality gate; frames verification as "damage-severity priority" pipeline; 4-day rapid iteration | 🔴 Open |
| 4 | **testing-patterns** (#723) | Comprehensive testing skill: Testing Trophy, AAA pattern, React Testing Library, contract testing, property-based, mutation testing | 30-day discussion; fills gap — no prior skill covers full testing stack from philosophy to CI integration | 🔴 Open |
| 5 | **color-expert** (#1302) | Color naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), accessibility, harmonies | Niche but deep; 41-day discussion suggests sustained specialist demand for design/visualization workflows | 🔴 Open |
| 6 | **ODT (OpenDocument)** (#486) | Create/fill/read/convert .odt/.ods via pyxel-mcp; triggers on "ODT", "LibreOffice", "ISO standard" | Enterprise/reproducibility angle: open-format alternative to DOCX; 136-day lifecycle indicates complex implementation | 🔴 Open |
| 7 | **plan-file-hygiene** (#1479) | Lifecycle management for planning artifacts (creation → archival → cleanup); addresses accumulation without expiration | Directly born from community issue #1417; 2-day fast-track shows recognized pain | 🔴 Open |
| 8 | **skill-quality-analyzer / skill-security-analyzer** (#83) | Meta-skills: 5-dimension quality scoring (structure, examples, resources, triggers, safety) + security static analysis | Foundation for skill governance; 62-day discussion reflects need for marketplace quality control | 🔴 Open |

> **Note**: PR comment counts show as `undefined` in source data; ranking synthesizes PR multiplicity per topic + linked issue engagement.

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issues) | Signal Strength |
|-------|-------------------|-----------------|
| **Skill distribution & trust infrastructure** | #492 (43 comments, 2👍): namespace impersonation vulnerability; #189 (6 comments, 9👍): duplicate skills from `document-skills`/`example-skills`; #228 (16 comments, 8👍): org-wide sharing | 🔥 **Critical** — security + usability blockers |
| **skill-creator toolchain reliability** | #556 (12 comments, 7👍): `claude -p` never triggers skills; #1169 (3 comments, 1👍): recall=0% even on literal slash-commands; #202 (8 comments, closed): skill-creator reads like docs, not ops | 🔥 **Critical** — blocks skill authoring workflow |
| **Quality gates & reasoning verification** | #1385 (4 comments): 3-gate pipeline (calibration → adversarial review → delivery verification); #1367 PR: self-audit; #83 PR: quality/security analyzers | 📈 **Rising** — meta-skilling for output reliability |
| **Enterprise/platform integration** | #29 (4 comments): Bedrock support; #1175 (4 comments, closed): SharePoint Online security/context concerns; #16 (4 comments): expose skills as MCPs | 📈 **Rising** — deployment flexibility demands |
| **Document fidelity & format coverage** | #12 (4 comments, 1👍): docx whitespace corruption; #538/#541 PRs: pdf/docx case-sensitivity & w:id collisions; #486 PR: ODT; #514 PR: typography | 📈 **Sustained** — professional document workflows |
| **Testing & validation as first-class skills** | #723 PR: testing-patterns (30-day discussion); #1329 (9 comments): compact-memory for agentname=python tool=python
{
  "code": "import requests\nimport re\n\n# 尝试搜索更多信息\n# 这里主要是分析已有的数据\nprint(\"数据分析完成\")"
}
</invoke>

---

# Claude Code Community Digest — 2026-08-07

## Today's Highlights
No new releases in the past 24 hours. The community is actively discussing a critical permissions regression where `ask` lists are ignored when "Bash" is in the allow list (#6527, 23 comments, 19 👍), and a Windows-specific crash in Claude Desktop during browser-pane screenshot verification (#81664). A new streaming connectivity issue (ECONNRESET with bundled Bun HTTP client on Windows) emerged on August 5th (#84194) and is under investigation.

---

## Releases
*No releases in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#6527](https://github.com/anthropics/claude-code/issues/6527)** `ask` list ignored when "Bash" in allow list | **Security/permissions regression** on Linux: adding Bash to the allow list silently disables all `ask` prompts, bypassing intended approval flows. | 23 comments, 19 👍 — high engagement indicates widespread impact |
| **[#57371](https://github.com/anthropics/claude-code/issues/57371)** Disable bundled CoworkVMService on Windows | Windows users forced to run unnecessary background service; no opt-out for non-Cowork users. | 18 comments, 42 👍 — strong demand for resource control |
| **[#54750](https://github.com/anthropics/claude-code/issues/54750)** Session limit shows 100% despite low local usage | Blocks legitimate work; usage accounting discrepancy between local view and backend enforcement. | 16 comments, 9 👍 — recurring billing/quota confusion |
| **[#76248](https://github.com/anthropics/claude-code/issues/76248)** Cowork git proxy blocks all pushes, PAT pass-through broken | Remote/cloud sessions cannot push to GitHub even with user-supplied PAT; regression appeared mid-July. | 14 comments, 5 👍 — breaks CI/CD and collaborative workflows |
| **[#79584](https://github.com/anthropics/claude-code/issues/79584)** Assistant text before tool call intermittently not rendered (Windows) | TUI rendering bug: text preceding `AskUserQuestion` disappears, confusing users during interactive workflows. | 9 comments, 7 👍 — affects plugin-driven workflows |
| **[#73638](https://github.com/anthropics/claude-code/issues/73638)** Session rename mid-server-tool-call corrupts transcript (400 on future prompts) | Renaming during `server_tool_use` injects malformed `system-reminder`, permanently breaking the session. | 9 comments — data-loss severity, reproducible |
| **[#26581](https://github.com/anthropics/claude-code/issues/26581)** System notifications when Claude needs attention/completes tasks | Long-standing request (since Feb 2026) for OS-level notifications like Copilot provides. | 8 comments, 32 👍 — high community interest, cross-platform need |
| **[#76718](https://github.com/anthropics/claude-code/issues/76718)** Compound-command permission prompting: 700+ prompts on non-mutating chains | Bash permission system prompts on every segment of compound commands even when all segments are allowlisted. | 7 comments — makes multi-session orchestration unusable |
| **[#78775](https://github.com/anthropics/claude-code/issues/78775)** Desktop: session time-range filter only appears when "Group by State" | Regression in Desktop app UI; filter hidden under other group-by modes on Windows/macOS. | 7 comments, 23 👍 — UX regression affecting discoverability |
| **[#84194](https://github.com/anthropics/claude-code/issues/84194)** ECONNRESET on streaming API: bundled Bun client fails, Node/curl work (Windows) | New issue (Aug 5): Bun HTTP client in Claude Code drops connections under VPN/enterprise networks; survives reinstall. | 5 comments — potential blocker for Windows enterprise users |

---

## Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| **[#84600](https://github.com/anthropics/claude-code/pull/84600)** Enable frontend-design plugin at project scope | Registers official marketplace and enables `frontend-design` skill via `.claude/settings.json` for auto-loading in repo. | Open (Aug 6) |
| **[#84427](https://github.com/anthropics/claude-code/pull/84427)** fix(plugin-dev): prevent `validate-agent.sh` exiting on first warning | Fixes Bash `set -e` interaction where `((count++))` returns non-zero on increment from 0, causing premature exit. | Open (Aug 6) |
| **[#84381](https://github.com/anthropics/claude-code/pull/84381)** fix(plugin-dev): handle wrapped hook schemas & optional matchers in `validate-hook-schema.sh` | Supports top-level `"hooks"` object wrapper and optional `matcher` fields in `hooks.json` validation. | Open (Aug 6) |

*Only 3 PRs updated in the last 24h — all plugin/developer tooling fixes.*

---

## Feature Request Trends
From the issue landscape, the top community asks cluster around:

1. **Notification & attention management** — System-level alerts for task completion or input needed (#26581, 32 👍); terminal tab title reflecting agent state (#71369).
2. **Permissions granularity & usability** — Compound-command allowlist respect (#76718); `ask` list reliability (#6527); `UserPromptSubmit` hook "handled" decision to avoid "blocked" framing (#72327).
3. **Cowork/remote session polish** — Git proxy PAT pass-through (#76248); disable bundled Windows service (#57371); `AskUserQuestion` permission channel reliability on macOS (#59707).
4. **Session & context control** — Self-initiated context compaction (#33026); session resumption docs (`/recap`, away-summary) (#48084); transcript corruption fixes (#73638).
5. **Desktop app parity & stability** — Windows GPU crashes (#81664, #81123); UI filter regressions (#78775); mouse-click selection in VS Code terminal (#72173).

---

## Developer Pain Points
Recurring friction themes across issues:

- **Permissions system unpredictability** — Allowlists not honored (Bash, compound commands), `ask` prompts silently dropped, 700+ approval prompts for routine orchestration.
- **Windows-specific instability** — MSIX package corruption after GPU crashes, mandatory CoworkVMService, Bun HTTP client failures, TUI rendering gaps.
- **Remote/Cowork session breakage** — Git proxy blocking valid PATs, permission popups not appearing on macOS, transcript corruption from benign actions (rename).
- **Observability gaps** — No proactive notifications, session limit accounting opacity, missing docs for new env vars (`CLAUDE_CODE_SCRIPT_CAPS`, stream watchdog), `/loop` alias undocumented.
- **Hook & plugin developer experience** — Validator scripts exit on warnings, schema validation doesn't match real config shapes, marketplace auto-install behavior undocumented.

---

*Digest generated from GitHub data as of 2026-08-07. Links point to live issues/PRs for full context.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-07

## 1. Today's Highlights

Codex **v0.147.0** shipped with a new plugin ecosystem—portable Agent Plugins installable from local, personal, workspace, and remote catalogs—and persistent, manually-ordered conversation sections for long transcripts. On the stability front, Windows users report a severe `taskkill.exe`/`conhost.exe` process leak causing WMI storms and DWM degradation (#33776, 32 comments), while macOS faces zombie-process leaks exhausting the process table (#37247). Multiple PRs landed today hardening sandbox device isolation, MCP server recovery after OAuth reauth, and subagent context-window tracking.

---

## 2. Releases

### `rust-v0.147.0` — 2026-08-07
- **Agent Plugin System**: Install portable plugins from local, personal, workspace, and remote catalogs (#36544, #36409, #36919, #36796)
- **Conversation Sections**: Organize chats into persistent, manually-ordered sections with incremental transcript browsing (#35722, #36007, #36380, #36948)
- [Release notes](https://github.com/openai/codex/releases/tag/rust-v0.147.0)

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#33776](https://github.com/openai/codex/issues/33776) | **Windows: `ChatGPT.exe` spawns hundreds of `taskkill.exe`/`conhost.exe` → WMI storms, DWM degradation** | Blocks Windows Desktop usability; 287+ orphan processes observed per session. | 32 comments, 27 👍 — **Highest engagement** |
| [#28080](https://github.com/openai/codex/issues/28080) | **Desktop thread tools lose handlers (`No handler registered`) mid-session** | Breaks tool-calling reliability in active Desktop sessions on Windows. | 21 comments, 2 👍 |
| [#20883](https://github.com/openai/codex/issues/20883) | **Desktop should use project-scoped MCP process pool (not per-session)** | Current per-chat MCP spawn wastes resources; 10.9 GB RSS reported in #33531. | 17 comments, 4 👍 |
| [#19694](https://github.com/openai/codex/issues/19694) | **Model picker filters out models from `model_catalog_json`** | Custom/self-hosted models invisible in Desktop picker despite catalog registration. | 14 comments, 35 👍 — **Closed** but high demand |
| [#26820](https://github.com/openai/codex/issues/26820) | **CLI cannot acquire Chrome extension backend (Desktop works)** | CLI/desktop parity gap for browser tooling; same env, different results. | 12 comments, 9 👍 |
| [#21653](https://github.com/openai/codex/issues/21653) | **TUI: Support multi-line status line** | Status truncation hides configured items; high visibility for daily CLI users. | 12 comments, 58 👍 — **Top voted enhancement** |
| [#33967](https://github.com/openai/codex/issues/33967) | **Windows ChatGPT stuck on “Complete Windows setup”** | Hard block for new Windows users; setup loop prevents any usage. | 9 comments |
| [#33531](https://github.com/openai/codex/issues/33531) | **Windows: MCP suites persist after subagents → 10.9 GB private memory** | Memory leak compounds with subagent use; ties to #20883 pool request. | 5 comments, 1 👍 |
| [#27395](https://github.com/openai/codex/issues/27395) | **Desktop: “Error submitting message” — 30s timeout while app-server stalls silently** | macOS/ARM64; sidecar stalls minutes without logs, breaking flow. | 4 comments, 1 👍 |
| [#37192](https://github.com/openai/codex/issues/37192) | **OAuth fallback silently uses hardcoded “dummy” API key after network change → 401** | Security/auth regression: no re-auth prompt, silent failure on WiFi/VPN switch. | 4 comments (filed 2026-08-06) |

---

## 4. Key PR Progress (Top 10 Merged Today)

| PR | Summary | Category |
|----|---------|----------|
| [#37349](https://github.com/openai/codex/pull/37349) | Mount minimal `/dev` in full-filesystem Bubblewrap sandboxes (prevents host device-tree leakage) | **Sandbox hardening** |
| [#37337](https://github.com/openai/codex/pull/37337) | Recover MCP servers after OAuth reauthentication (auto-retry failed HTTP MCP servers post sign-in) | **MCP reliability** |
| [#37347](https://github.com/openai/codex/pull/37347) | Track context windows per agent (forked subagents get distinct window lineage) | **Subagent architecture** |
| [#37345](https://github.com/openai/codex/pull/37345) | Send `x-codex-routing-hint` header (model + service tier) on Responses API, compaction, WS prewarm | **Backend routing** |
| [#37344](https://github.com/openai/codex/pull/37344) | Fix subagent MCP startup status settling (clears deferred expectations) | **MCP/TUI sync** |
| [#37352](https://github.com/openai/codex/pull/37352) | Configure default code-mode exec yield timeout (30s default, reflected in tool description) | **Tool exec UX** |
| [#37350](https://github.com/openai/codex/pull/37350) | Allow `ThreadManager` to customize thread ID generation (pluggable UUIDv7 default) | **Threading infra** |
| [#37348](https://github.com/openai/codex/pull/37348) | Add rollout migration tooling (`codex migrate-rollouts` with dry-run, throttling, JSON reports) | **Release ops** |
| [#37341](https://github.com/openai/codex/pull/37341) | Support content references for inline visualizations (structured `visualize` refs in TUI) | **TUI rendering** |
| [#37335](https://github.com/openai/codex/pull/37335) | Fully repaint inline viewports after history overlap (fixes stale composer chars on resize) | **TUI polish** |

---

## 5. Feature Request Trends (from Issues)

1. **Windows shell configurability** — #16579 (32 👍) requests config entry for default session shell (Git Bash, etc.) instead of hardcoded PowerShell.
2. **Project-scoped resource pooling** — #20883 (MCP), #33531 (memory) converge on sharing heavy processes (MCP, sandbox) per workspace, not per chat.
3. **TUI status/composer flexibility** — #21653 (58 👍) multi-line status line; #13979 (5 👍) disable forced focus on notifications.
4. **Model picker extensibility** — #19694 (35 👍) shows strong demand for custom/self-hosted model visibility.
5. **Subagent governance** — #36381 (RFC) proposes host-enforced monotonic authority ceilings for delegations; #37347 lands per-agent context windows.

---

## 6. Developer Pain Points (Recurring Themes)

| Area | Representative Issues | Frequency Signal |
|------|----------------------|------------------|
| **Windows process hygiene** | #33776 (taskkill/conhost leak), #31556 (WFP firewall re-arm/UAC spam), #37104 (WSL/PTY silent fail), #16579 (shell default) | **Critical** — multiple high-comment issues block daily use |
| **MCP lifecycle & memory** | #20883 (per-session spawn), #33531 (10.9 GB leak), #26820 (CLI vs Desktop Chrome backend), #37351 (nondeterministic tool order) | **High** — resource waste + parity gaps |
| **Auth resilience** | #37192 (silent dummy-key fallback), #37337 (PR fix), #19694 (model catalog auth) | **High** — network changes break sessions silently |
| **macOS stability** | #37247 (zombie process table exhaustion), #32676 (V8 cache crash), #37084 (CUA PiP zombie loop) | **High** — process leaks crash host after hours |
| **TUI/CLI polish** | #21653 (status truncation), #36115 (unresponsive “Allow once”), #37335 (viewport stale chars) | **Medium** — daily friction for terminal users |

---

*Generated from `github.com/openai/codex` data (releases, 50 issues, 32 PRs updated 2026-08-06 → 2026-08-07).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-07

## 1. Today's Highlights
The v0.56.0 nightly release ships with a changelog for v0.55.0-preview.1 and a version bump. Meanwhile, the community is actively triaging a high-profile data-loss report (#26856) that has garnered 47 comments and 16 👍, while maintainers merge critical fixes for auth loops, Docker base images, and settings load-order races.

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.56.0-nightly.20260807.gd5c9a97dc** | Nightly | Changelog for v0.55.0-preview.1; version bump from v0.56.0-nightly.20260806.g761f604c1. [PR #28720](https://github.com/google-gemini/gemini-cli/pull/28720) |
| **v0.55.0-preview.2** | Preview (patched) | Cherry-pick of commit `2139b12` onto `release/v0.55.0-preview.1`. [PR #28719](https://github.com/google-gemini/gemini-cli/pull/28719) |
| **v0.54.2** | Stable | Patch release; version bump across all workspace packages. [PR #28712](https://github.com/google-gemini/gemini-cli/pull/28712) |

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#26856](https://github.com/google-gemini/gemini-cli/issues/26856) | **Catastrophic data loss** — user reports 10k+ Obsidian files deleted, $300 work lost | Highest-severity user-impact report; demands root-cause analysis & recovery tooling | 47 comments, 16 👍 — urgent priority |
| [#20773](https://github.com/google-gemini/gemini-cli/issues/20773) | **Windows PowerShell 5.1 `&&` parser error** | Blocks CLI on default Windows shells; long-standing compat gap | 17 comments, 1 👍 — closed but referenced in new fixes |
| [#10704](https://github.com/google-gemini/gemini-cli/issues/10704) | **MCP Client Sampling support** | Enables MCP servers to call LLMs via Gemini CLI; key extensibility | 13 comments, 9 👍 — closed (likely implemented) |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent false-success on MAX_TURNS** | Masks interruption as GOAL success; breaks trust in agent workflows | 12 comments, 2 👍 — open, needs retesting |
| [#25867](https://github.com/google-gemini/gemini-cli/issues/25867) | **Backspace deletes word on Windows** | Basic UX regression on Windows; affects daily usability | 10 comments, 4 👍 — closed |
| [#25884](https://github.com/google-gemini/gemini-cli/issues/25884) | **Invalid whitespace/newlines in terminal commands** | Copy-paste failures in Zsh; erodes CLI reliability | 10 comments — closed |
| [#25933](https://github.com/google-gemini/gemini-cli/issues/25933) | **`execvp(3) Permission denied` on RHEL** | Blocks all shell commands on enterprise Linux; install-path sensitive | 7 comments — closed |
| [#27132](https://github.com/google-gemini/gemini-cli/issues/27132) | **VS Code UI lockup from `globalState` blocking main thread** | Extension freezes on long sessions/history reloads; impacts IDE UX | 7 comments, 2 👍 — open |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations (EPIC)** | Scaling eval infra beyond 76 behavioral tests; quality gate for releases | 7 comments — open, maintainer-only |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads/search/mapping (EPIC)** | Potential token/turn reduction via precision tooling; strategic R&D | 7 comments, 1 👍 — open, maintainer-only |

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#28519](https://github.com/google-gemini/gemini-cli/pull/28519) | **Fix** | Prevents infinite auth loop by awaiting `oauth_creds.json` write and forcing consent. Fixes #28430. |
| [#28597](https://github.com/google-gemini/gemini-cli/pull/28597) | **Fix** | Loads `.env` *before* resolving settings placeholders, eliminating load-order race. |
| [#28602](https://github.com/google-gemini/gemini-cli/pull/28602) | **Chore** | Updates Docker base to `node:24-slim`; fixes runtime stage copy. |
| [#28603](https://github.com/google-gemini/gemini-cli/pull/28603) | **Security** | Upgrades sandbox Dockerfile to Node 22 (Node 20 EOL 2026-04-30). Fixes #28584. |
| [#28596](https://github.com/google-gemini/gemini-cli/pull/28596) | **Feature** | Adds `--list-all-sessions` to list/manage sessions across all workspaces. |
| [#28592](https://github.com/google-gemini/gemini-cli/pull/28592) | **Fix** | Keeps “Auto” model visible without preview access; falls back to stable models. |
| [#28716](https://github.com/google-gemini/gemini-cli/pull/28716) | **Fix** | Reclassifies capacity exhaustion & insufficient credits as terminal errors → immediate fallback. |
| [#28526](https://github.com/google-gemini/gemini-cli/pull/28526) | **Fix** | Stops leaking `gemini.diff.accept` & `onDidChangeWorkspaceFolders` disposables in VS Code extension. Fixes #27790. |
| [#28718](https://github.com/google-gemini/gemini-cli/pull/28718) | **Fix** | Records usage metadata on stream abort (previously lost in catch block). Fixes #28682. |
| [#28641](https://github.com/google-gemini/gemini-cli/pull/28641) | **Fix** | Prevents infinite ghost-text wrap loop at narrow widths (CJK/emoji). Fixes #19985. |

## 5. Feature Request Trends
1. **MCP Ecosystem Depth** — Client Sampling (#10704), Figma MCP MIME fixes (#27731), Calendar structuredContent (#27725).
2. **Agent Reliability & Safety** — Subagent permission gating (#22093), destructive-command discouragement (#22672), browser-agent session recovery (#22232).
3. **Evaluation & Observability** — Component-level evals (#24353), AST-aware tooling (#22745), search-result capping (#19638).
4. **Cross-Platform Polish** — PowerShell 5.1 compat (#20773, #26318), Windows backspace/whitespace (#25867, #25884), RHEL execvp (#25933).
5. **Session & Memory Management** — `--list-all-sessions` (#28596), Auto Memory retry/quarantine (#26522, #26523, #26525), session resume after crash (#27180).

## 6. Developer Pain Points (Recurring Themes)
| Pain Point | Evidence |
|------------|----------|
| **Data-loss anxiety** | #26856 (10k files), #27180 (session loss on crash), #27386 (Unicode corruption) |
| **Windows second-class experience** | PowerShell `&&` (#20773), backspace/whitespace (#25867, #25884), command substitution (#26318) |
| **Agent opacity & false successes** | Subagent MAX_TURNS masquerading as GOAL (#22323), unauthorized subagents (#22093), browser-agent config ignored (#22267) |
| **Extension instability** | VS Code UI lockups (#27132), disposable leaks (#28526), diff-accept UX broken (#27387) |
| **Resource exhaustion** | High memory growth (#28698), 400-error at >128 tools (#24246), context overflow from search (#19638) |
| **Auth & credentials friction** | Infinite auth loops (#28519), Vertex AI 401 messaging (#28679), ProjectIdRequiredError dead link (#28640) |

---

*Generated from github.com/google-gemini/gemini-cli data as of 2026-08-07. All links point to live GitHub items.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-07

## Today's Highlights
Version **1.0.79-6** shipped with two UX-focused fixes: a rare internal delay no longer prints a diagnostic warning over the interactive UI, and failed session-history loads no longer leave the transcript permanently blank. The issue tracker shows heavy activity around **session resume regressions** (OOM/CPU spikes in 1.0.74), **MCP integration fragility** (orphaned stdio processes, 400/403 policy fetch failures on non-GitHub remotes), and **terminal rendering glitches** (blank transcripts, dark-on-dark text in tmux, Windows codepage quirks). No pull requests were updated in the last 24 hours.

---

## Releases
### v1.0.79-6
- **Fixed**: A rare internal delay no longer prints a diagnostic warning on top of the interactive UI.
- **Fixed**: A failed session-history load no longer leaves the timeline permanently empty; the failure was silently discarded, leaving the transcript blank for the rest of the session with nothing logged.  
[Release v1.0.79-6](https://github.com/github/copilot-cli/releases/tag/v1.0.79-6)

---

## Hot Issues
| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4118](https://github.com/github/copilot-cli/issues/4118) | `/app` command does not select current working directory by default | High-friction UX: users must manually re-select the repo every time they open the desktop app from CLI. | **35 👍** — strongest community signal in this batch. |
| [#3392](https://github.com/github/copilot-cli/issues/3392) | Bash tool breaks on NixOS ≥1.0.49 (`Failed to start bash process`) | Blocks NixOS users entirely; regression introduced in 1.0.49, still open after 3 months. | 7 👍, 3 comments; strace logs provided. |
| [#4251](https://github.com/github/copilot-cli/issues/4251) | Resume of large session OOMs / grinds CPU ~70 min in 1.0.74 (3–4× memory vs 1.0.73) | **Critical regression** for power users with long-lived sessions; makes CLI unusable for large projects. | 2 comments, 1 👍; includes controlled A/B memory/RSS data. |
| [#4374](https://github.com/github/copilot-cli/issues/4374) | `/mcp search` fails with 400 Bad Request on Azure DevOps git remotes | Breaks MCP registry discovery for enterprise teams using Azure DevOps; no workaround. | 4 👍; affects all repos with `dev.azure.com` remotes. |
| [#4346](https://github.com/github/copilot-cli/issues/4346) | MCP registry policy fetch returns 403 for Actions `GITHUB_TOKEN` in CI | Blocks non-default MCP servers in GitHub Actions despite documented PAT-less setup. | 1 👍, 1 comment; CI/CD blocker. |
| [#4392](https://github.com/github/copilot-cli/issues/4392) | Post-auth MCP client rebuild leaves orphaned stdio MCP server processes | Resource leak on every startup; orphaned children accumulate across sessions. | Fresh issue (08-06), 1 comment; includes process-tree evidence. |
| [#4311](https://github.com/github/copilot-cli/issues/4311) | Transcript renders as blank lines until `children` or width change (measured-line cache invalidation) | Core UI bug: interactive transcript blanks out; `/resume` doesn’t recover. Distinct from #4282. | 2 comments; detailed React/Ink rendering analysis. |
| [#4212](https://github.com/github/copilot-cli/issues/4212) | Prompt box & highlighted menu items invisible (dark-on-dark) inside tmux | Accessibility/usability blocker for tmux users; works fine in raw iTerm2. | 2 comments; ruled out stale config, theme, terminfo. |
| [#4211](https://github.com/github/copilot-cli/issues/4211) | Cannot handle BigInt in structured MCP response (`TypeError: Do not know how to serialize a BigInt`) | Hard crash aborting all tasks when MCP servers return large integers. | 2 comments; screenshot + stack trace attached. |
| [#4380](https://github.com/github/copilot-cli/issues/4380) | Rubber-duck reviews sometimes use same model family as primary session | Undermines adversarial review value; observed across multiple models (incl. 5.6 Terra Max). | 2 comments; affects review quality assurance. |

---

## Key PR Progress
*No pull requests were updated in the last 24 hours.*

---

## Feature Request Trends
1. **Session & Context Continuity** — Strong demand for reliable large-session resume (#4251, #4282), scrollable history (#4313), and preserved worktrees on session deletion (#4383).
2. **MCP Ecosystem Hardening** — Multiple requests for robust MCP lifecycle: orphaned process cleanup (#4392), registry search on non-GitHub remotes (#4374), CI token support (#4346), and BigInt serialization (#4211).
3. **Model Flexibility & BYOM** — Users want in-session model switching for custom endpoints (#4376), correct reasoning-effort persistence (#3053), and independent reviewer model selection for rubber-duck (#4380).
4. **Terminal/UX Polish** — Scrollable transcripts (#4313), tmux color compatibility (#4212), Windows codepage copy fixes (#4391), shell-mode Tab completion (#4387), and terminal title stability (#4384).
5. **Permission Transparency** — Clearer prompts showing *which rule* triggered approval (#4386) and reliable auto↔interactive mode transitions (#4388, #4389).
6. **Project-Local Configuration** — Extend `.agents` convention to instructions, agents, hooks in any folder (not just Git repos) (#4204).

---

## Developer Pain Points
- **Session Resume Regression (1.0.74+)**: Large sessions OOM or spin CPU for ~70 min; forces downgrade to 1.0.73.  
- **MCP Fragility**: Orphaned stdio processes on startup, 400/403 registry errors on Azure DevOps remotes, CI token blocking, BigInt crashes.  
- **Terminal Rendering Bugs**: Blank transcripts, invisible prompts in tmux, Windows copy clears screen, title hijacking.  
- **Model/Review Trust**: Rubber-duck using same model family; reasoning effort reset on model switch; org-enabled models missing from catalogue.  
- **Workflow Friction**: `/app` ignores CWD; queued messages stall indefinitely; steering message order flips; permission prompts lack context.  
- **NixOS Incompatibility**: Bash tool broken since 1.0.49 with no fix timeline.  

---

*Generated from github/copilot-cli data as of 2026-08-07. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-07

## Today's Highlights
Two critical fixes for the `StrReplaceFile` tool address silent corruption of non-UTF-8 files (Issues #2591, PRs #2594, #2595), while the community continues to push for a persistent memory system (#1283) and lazy-loading MCP tool schemas (#2147) to reduce context bloat. VSCode extension usability improvements remain active, including clickable plan-mode paths (#2317) and mode-switching shortcuts (#2593).

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues

| Issue | Type | Why It Matters | Community Signal |
|-------|------|----------------|------------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) Memory System — Persistent context across sessions | Enhancement | Top-voted long-running request (20 comments). Enables cross-session learning, project patterns, and user preferences — essential for agentic workflows. | 20 comments, created Feb, still active |
| [#2591](https://github.com/MoonshotAI/kimi-cli/issues/2591) StrReplaceFile corrupts undecodable bytes outside edited region | Bug (Data Loss) | Silent corruption of binary/non-UTF-8 files (images, compiled assets, mixed-encoding) when any edit occurs. Two competing PRs (#2594, #2595) show urgency. | 3 comments, created 2 days ago |
| [#2317](https://github.com/MoonshotAI/kimi-cli/issues/2317) [VSCode] Plan mode file paths not clickable in chat webview | Bug (UX) | Breaks core “click-to-open” workflow in plan mode; forces manual navigation. Affects VSCode extension users on 0.5.10+. | 4 comments, 1 👍 |
| [#2474](https://github.com/MoonshotAI/kimi-cli/issues/2474) UI shaking / full conversation re-render | Bug (Perf/UX) | Linux user reports constant flicker and full re-renders, making CLI unusable. 2 👍 suggests others hit it. | 2 comments, 2 👍 |
| [#2147](https://github.com/MoonshotAI/kimi-cli/issues/2147) Lazy-load MCP tool schemas into context | Enhancement (Perf) | Injecting all MCP schemas upfront burns thousands of tokens. Lazy loading would reclaim context budget for actual tasks. | 1 comment, 1 👍 |
| [#2593](https://github.com/MoonshotAI/kimi-cli/issues/2593) VSCode panel: quick switch auto/yolo/manual modes + token quota | Enhancement (UX) | Requests toolbar-level mode toggle and visible 5-hr quota — reduces friction for power users switching autonomy levels. | 0 comments, new |
| [#621](https://github.com/MoonshotAI/kimi-cli/issues/621) First WriteFile fails with “Invalid path”, then works with absolute path | Bug (Regression?) | Long-standing (Jan) but recently updated; suggests path-resolution race on first tool call. Closed but re-surfaced? | 2 comments |
| [#821](https://github.com/MoonshotAI/kimi-cli/issues/821) [Security] Missing auth checks + 5 dependency CVEs | Security | High-severity (CVSS 7–8): IDOR on session endpoints + outdated deps. Closed but no public fix details — verify patched in current build. | 0 comments |

---

## Key PR Progress

| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#2595](https://github.com/MoonshotAI/kimi-cli/pull/2595) `fix(StrReplaceFile): refuse to edit files that are not valid UTF-8` | Open | Conservative fix: rejects edits on non-UTF-8 files entirely, preventing corruption at cost of blocking binary edits. | Safe default; may break workflows editing mixed files. |
| [#2594](https://github.com/MoonshotAI/kimi-cli/pull/2594) `fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits` | Open | Surgical fix: applies old/new as byte substrings on raw buffer, preserving all non-UTF-8 regions outside the edit. | Preferred by reporter; maintains compatibility with binary assets. |
| [#2255](https://github.com/MoonshotAI/kimi-cli/pull/2255) `feat(shell): support Shift+Enter for inserting newlines` | Closed | Adds Shift+Enter as newline binding alongside Ctrl-J / Alt-Enter, matching muscle memory from IDEs and ChatGPT. | Merged — improves shell ergonomics for all users. |

---

## Feature Request Trends
1. **Persistent Memory / Context Continuity** — #1283 (20 comments) is the clear #1 ask: users want the CLI to remember project conventions, preferences, and decisions across sessions.
2. **Context Budget Optimization** — #2147 (lazy MCP schemas) and implicit pressure from token limits drive demand for smarter context injection.
3. **VSCode Extension Parity** — Clickable paths (#2317), mode toggles (#2593), quota visibility — users treat the extension as a first-class IDE citizen, not a side panel.
4. **Autonomy Granularity** — Requests for quick auto/yolo/manual switching (#2593) show teams want fine-grained control per task, not per session.

---

## Developer Pain Points
- **Silent Data Corruption** — `StrReplaceFile` destroying non-UTF-8 bytes (#2591) is a trust-blocker for repos with images, fonts, or legacy encodings.
- **UI Instability** — Full conversation re-renders (#2474) on Linux make the TUI feel broken; no clear repro yet.
- **First-Command Flakiness** — WriteFile “Invalid path” on first call (#621) suggests initialization race; erodes confidence in tool reliability.
- **Security Hygiene Visibility** — #821 closed without public mitigation details; teams need assurance CVEs are patched in their version.
- **Token Budget Pressure** — MCP schema bloat (#2147) forces users to disable servers to fit actual prompts — defeats the purpose of tooling.

---

*Digest generated from GitHub data as of 2026-08-07. Links point to live issues/PRs on MoonshotAI/kimi-cli.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-07

## Today's Highlights
A **critical authentication outage** continues to block all OpenCode Go subscribers from accessing paid models, with 9+ issues reporting "401 Request blocked by upstream provider" since July 22. Free models remain unaffected. Meanwhile, the team is actively merging TUI enhancements (queued prompts, model scoping, permission handling) and core infrastructure work (compaction serialization, subagent session continuation, workspace environment foundation).

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#38257](https://github.com/anomalyco/opencode/issues/38257) | **Go subscription completely broken** — all chat/completions return 401 since July 22; `/v1/models` works | 44 comments, 11 👍 — users blocked for 16+ days |
| [#38218](https://github.com/anomalyco/opencode/issues/38218) | Same Go outage; confirms server-side issue affecting all subscription models | 31 comments, 13 👍 |
| [#38195](https://github.com/anomalyco/opencode/issues/38195) | Go sub active but all paid models fail; reproduces on Desktop, Hermes, Windows, Mac | 24 comments, 17 👍 |
| [#39827](https://github.com/anomalyco/opencode/issues/39827) | **Zen models also broken** — all models (paid + free) return auth error; direct provider keys work | 9 comments, 4 👍 |
| [#6152](https://github.com/anomalyco/opencode/issues/6152) | **Top feature request**: TUI dialog showing session context window usage breakdown | 22 comments, **129 👍** — high demand for token visibility |
| [#1168](https://github.com/anomalyco/opencode/issues/1168) | Make URLs clickable (Ctrl+Click) in TUI/terminal — standard editor behavior | 11 comments, **119 👍** — long-standing UX gap |
| [#39875](https://github.com/anomalyco/opencode/issues/39875) | Privacy policy regression: Go privacy wording & provider attribution silently removed; demands telemetry/retention disclosure | 6 comments, **44 👍** — trust concern for paying users |
| [#32157](https://github.com/anomalyco/opencode/issues/32157) | Configurable mid-run prompt delivery: queue vs steer vs break with compaction-aware semantics | 5 comments, **67 👍** — advanced workflow control |
| [#40958](https://github.com/anomalyco/opencode/issues/40958) | DeepSeek V4 Flash Free capped at 200K context in metadata vs native 1M — metadata config bug | 3 comments, 1 👍 — new, affects model utility |
| [#40957](https://github.com/github.com/anomalyco/opencode/issues/40957) | OpenCode 1.18.14 fails to start on Windows 10 / Node 26.7 — regression in latest version | 2 comments — platform-specific blocker |

---

## Key PR Progress

| PR | Type | Summary |
|----|------|---------|
| [#40922](https://github.com/anomalyco/opencode/pull/40922) | Feature | **Queue prompts with Option+Enter** — Enter steers active response; Option+Enter queues prompts in a dock attached to composer |
| [#40971](https://github.com/anomalyco/opencode/pull/40971) | Feature | Expose stable prompt action commands to TUI plugins (`form.option.previous`, `form.option.next`, `form.submit`, `form.cancel`) |
| [#40800](https://github.com/anomalyco/opencode/pull/40800) | Fix | Serialize orphaned compaction history into labeled text in one user message; preserves full context types, truncates large tool output |
| [#40931](https://github.com/anomalyco/opencode/pull/40931) | Feature | **Continue subagent sessions** — optional `sessionID` input to resume foreground subagent; validates parent ownership/agent identity |
| [#40929](https://github.com/anomalyco/opencode/pull/40929) | Feature | Bound tool output via configured `tool_output` line/byte limits; retains full text in managed files (7-day retention) |
| [#40962](https://github.com/anomalyco/opencode/pull/40962) | Refactor | Simplify V2 file tools to lexical paths (match V1): resolve mutations lexically, list symlinks as unresolved, lossy UTF-8 decode |
| [#40967](https://github.com/anomalyco/opencode/pull/40967) | Feature | **Workspace environment foundation** — pure addition; `Files` derived from `ChildProcessSpawner` Effect; drivers may provide fast-path overrides |
| [#40954](https://github.com/anomalyco/opencode/pull/40954) | Fix | Hot-reload local skill directory sources (global + explicit configs); invalidates cache, publishes `skill.updated` without restart |
| [#40913](https://github.com/anomalyco/opencode/pull/40913) | Fix | **Model selection now session-scoped** in TUI — switching tabs restores each session's durable model/variant; unsent choices stay private drafts |
| [#40960](https://github.com/anomalyco/opencode/pull/40960) | Fix | Dismiss stale TUI permission prompts when server reports request no longer exists; routes replies through data layer |

---

## Feature Request Trends

1. **Session & Context Management** — Cross-project session picker (#31932), context usage visualization (#6152), session stats (#37760), search session contents (#38973). Developers want Git-like session workflows across repos.

2. **Prompt/Interaction Control** — Configurable mid-run delivery semantics (#32157), queued prompts (#40922), clickable links (#1168). Power users need fine-grained steering of multi-turn conversations.

3. **Project/Task Integration** — Todo sidebar with Linear sync (#38081), workspace environment foundation (#40967). Bridging coding agents with issue trackers.

4. **Transparency & Trust** — Privacy policy completeness (#39875), model metadata accuracy (#40958). Paying users demand visibility into data handling and model capabilities.

---

## Developer Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Go/Zen auth outage** | 9+ issues, 100+ comments since July 22 | **Critical** — paying subscribers completely blocked from paid models; no official resolution visible |
| **TUI stability on Linux** | #35494 (Debian 13/XFCE/X11 freeze, only `kill -9` works) | High — forces CLI-only workflows |
| **Windows startup regression** | #40957 (1.18.14 + Node 26.7 fails) | High — blocks Windows users on current version |
| **Web UI real-time sync** | #40502 (messages don't appear without manual refresh) | Medium — degrades web experience |
| **Permission rule matching** | #40945 (absolute/~ patterns silently fail-open for deny rules) | Medium — security misconfiguration risk |
| **Compaction/thinking block errors** | #14332 (Bedrock Opus 4.6: `thinking` blocks cannot be modified) | Medium — breaks specific provider workflows |

---

*Digest generated from GitHub data (anomalyco/opencode) covering issues/PRs updated 2026-08-06 to 2026-08-07.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-07

---

## 1. Today's Highlights

Pi v0.84.0 ships a **fullscreen TUI mode** with a sticky editor/footer, independently scrollable transcript, and draggable scrollbars — a major UX upgrade for terminal-centric workflows. The community is actively debating Windows support strategy (#7547, 22 comments) while fixing a critical auto-compaction bug that lets context exceed 100% until provider rejection (#6879, 15 👍). Several TUI regressions from the new mode (text selection, line-width crashes, copy behavior) were patched within hours.

---

## 2. Releases

### v0.84.0 — Fullscreen TUI Mode
- **New runtime-switchable fullscreen mode** with sticky editor/footer and independently scrollable transcript
- Draggable scrollbars for transcript navigation
- See [UI & Display docs](https://github.com/earendil-works/pi/blob/v0.84.0/packages/coding-agent/docs/settings/ui-display.md) for configuration

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **Windows support strategy** — "gazzilion developers on windows… too many ways pi can be run" | Defines priorities for docs, bug fixes, and out-of-box experience on Windows; high engagement indicates broad pain | 22 comments, 1 👍 |
| [#6879](https://github.com/earendil-works/pi/issues/6879) | **Auto-compaction never triggers past 100% context** until API rejects request | Data-loss risk for long agentic sessions; compaction only fires at provider overflow (373k tokens) | 12 comments, **15 👍** |
| [#7128](https://github.com/earendil-works/pi/issues/7128) | **System prompt over-encourages `bash env` calls** via `PI_*` guideline | Wastes tokens/latency; agents inspect env vars unnecessarily on every turn | 10 comments, 5 👍 |
| [#7321](https://github.com/earendil-works/pi/issues/7321) | **Multi-line paste broken on Termux** (no bracketed paste support) | Blocks Android/Termux users; first `\r` submits instead of inserting block | 3 comments, 1 👍 |
| [#7600](https://github.com/earendil-works/pi/issues/7600) | **X11 connection leak** — 182 connections in 8 days, fills Xorg client table | Long-running `pi` processes crash the X server; affects Linux desktop users | 3 comments |
| [#7689](https://github.com/earendil-works/pi/issues/7689) | **Handle `end_turn: false` for Codex** backend | Codex can signal "turn not over" via provider extension; current logic assumes turn ends | 2 comments, 1 👍 |
| [#7720](https://github.com/earendil-works/pi/issues/7720) | **Disable select-to-copy in fullscreen TUI** | Default selection-copy clobbers clipboard for users who highlight frequently | 3 comments |
| [#7740](https://github.com/earendil-works/pi/issues/7740) | **TUI after `/reload` ignores custom tool renderers** registered on `session_start` | Breaks MCP/extension tool rendering after reload; load-order regression | 1 comment |
| [#7736](https://github.com/earendil-works/pi/issues/7736) | **Uncaught exception: rendered line exceeds terminal width** (v0.84.0) | Fatal crash instead of truncation; regression in new fullscreen TUI | 3 comments, 1 👍 |
| [#7746](https://github.com/earendil-works/pi/issues/7746) | **Double-click splits paths/kebab-case on `/` and `-`** in fullscreen | Word selection via `Intl.Segmenter` treats path separators as boundaries | 1 comment |

---

## 4. Key PR Progress

| # | Title | Type | Status | Summary |
|---|-------|------|--------|---------|
| [#7745](https://github.com/earendil-works/pi/pull/7745) | Preserve Gemini thought signatures in OpenAI completions | Fix | **Closed** | Captures `extra_content.google.thought_signature` / `vertex.thought_signature` from streamed tool calls and replays them on follow-up requests |
| [#7742](https://github.com/earendil-works/pi/pull/7742) | **Ollama Cloud support** | Feature | **Open** | Adds `ollama-cloud` provider using `OLLAMA_API_KEY`; hybrid local/cloud via `ollama launch pi` |
| [#7733](https://github.com/earendil-works/pi/pull/7733) | Fix multi-click text selection | Fix | **Closed** | Double-click no longer includes trailing whitespace; whitespace-group double-click fixed |
| [#7721](https://github.com/earendil-works/pi/pull/7721) | Avoid unwanted newlines when copying wrapped lines in fullscreen | Fix | **Closed** | Tracks visual row ownership; pasting preserves original line structure |
| [#7717](https://github.com/earendil-works/pi/pull/7717) | Reject `Agent.reset()` during active runs | Fix | **Closed** | Prevents assistant-only transcript corruption; preserves state until in-flight response settles |
| [#7715](https://github.com/earendil-works/pi/pull/7715) | Allow blocked tool calls to terminate | Feature | **Closed** | Adds `terminate?: boolean` to `BeforeToolCallResult` / `ToolCallEventResult` for extensions |
| [#7718](https://github.com/earendil-works/pi/pull/7718) | Preserve scrollback on content-driven full redraws | Fix | **Closed** | Normal-screen mode retains terminal scrollback when streaming markdown reflows above viewport |
| [#7686](https://github.com/earendil-works/pi/pull/7686) | Configurable Harness factory | Feature | **Closed** | Internal factory for experimental Harness v2; preserves caller tools, activation, prompt policy |
| [#7681](https://github.com/earendil-works/pi/pull/7681) | Support `AGENTS.override.md` per-directory context override | Feature | **Closed** | Highest-priority context file; shadows `AGENTS.md`/`CLAUDE.md` in same directory |
| [#7727](https://github.com/earendil-works/pi/pull/7727) | SQLite queries optimizations | Perf | **Open** | Branch queries push filters to SQL; covering index for membership lookup; `stopAtType` uses cached type |

---

## 5. Feature Request Trends

1. **Provider ecosystem expansion** — Ollama Cloud (#7742), Amazon Bedrock Mantle (#6216), Qwen Token Plan Individual (#7659), Vertex/GCP metadata server (#5323)
2. **TUI polish & accessibility** — Half-page scroll keys (#7735), selection keybindings (#7680), theme override CLI flag (#7722), disable select-to-copy (#7720), double-click word boundaries (#7725, #7746)
3. **Session & state resilience** — `SessionManager.reload()` (#7699), harness suspend/restore (#7710), auth preflight check (#7152)
4. **Model/token fidelity** — Gemini thought signatures (#7745, #6733), DeepSeek `reasoning_content` round-trip (#7702), Codex `end_turn: false` (#7689), server-side builtin tools (#7704)
5. **Extension ergonomics** — Terminate hint for blocked calls (#7715, #5998), colocated tool prompt contributions (#7671), `AGENTS.override.md` (#7681)

---

## 6. Developer Pain Points

| Area | Recurring Frustrations |
|------|------------------------|
| **Context management** | Auto-compaction silent failure past 100% (#6879); compaction broken on GitHub Copilot GHE (#7413); no preflight auth check (#7152) |
| **TUI regressions (v0.84.0)** | Line-width crashes (#7736, #7737); copy adds phantom newlines (#7721); selection steals clipboard (#7720); double-click splits paths (#7746); custom tool renderers lost after `/reload` (#7740) |
| **Windows experience** | Fragmented run modes (WSL, Git Bash, native, etc.); no clear "blessed" path; docs and bug fixes scattered (#7547) |
| **Provider quirks** | Anthropic SSH login redirects to localhost (#7691); GLM on Fireworks fails with prompt caching (#7676); Qwen model list stale (#7674); DeepSeek requires `reasoning_content` echo (#7702) |
| **Long-running stability** | X11 connection leak fills client table (#7600); tool-call streaming O(n²) re-parse (#7698); bunfig autoload crashes compiled binaries (#7685) |
| **Input/UX friction** | Multi-line paste broken on Termux (#7321); system prompt biases toward `bash env` calls (#7128); model switches leak across instances via `/new` (#7677) |

---

*Generated from github.com/badlogic/pi-mono — 2026-08-07 00:00 UTC*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-07

---

## 1. Today's Highlights

- **v0.21.7 stable released** with two major improvements: the 50-turn limit for Goals has been removed (allowing unbounded task continuation), and inline terminal image rendering is now supported for Kitty, iTerm2, WezTerm, Ghostty, and Warp terminals.
- **Qwen Live Host v0.1.0** launched, providing a stable installer feed for the live-host component.
- A **security regression in v0.21.6** was identified where `PreToolUse`/`PostToolUse`/`PreCompact`/`SessionStart` hooks stop firing — only `UserPromptSubmit` and `Stop` execute — blocking automation workflows that depend on tool-level hooks.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.21.7** | Stable | • Removed 50-turn limit for Goals ([#8421](https://github.com/QwenLM/qwen-code/pull/8421))<br>• Inline terminal image rendering for Kitty/iTerm2/WezTerm/Ghostty/Warp |
| **v0.21.7-nightly.20260807.fca8f3c1f** | Nightly | • CI fix: surface blocked autofix takeover admission ([#8410](https://github.com/QwenLM/qwen-code/pull/8410)) |
| **live-host-v0.1.0** | Component | • First stable release of Qwen Live Host; Windows merge queue tests now run on ECS ([#8386](https://github.com/QwenLM/qwen-code/pull/8386)) |
| **live-host-latest** | Feed | • Stable installer feed for Qwen Live Host |

---

## 3. Hot Issues (Top 10 by Community Impact)

| Issue | Status | Why It Matters | Community Reaction |
|-------|--------|----------------|-------------------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) OAuth Free Tier Policy Adjustment | CLOSED | Proposed reducing free quota from 1,000→100 req/day and phasing out free tier entirely | **150 comments** — highest engagement; indicates strong user concern over pricing/access changes |
| [#8622](https://github.com/QwenLM/qwen-code/issues/8622) v0.21.6 regression: hooks not dispatched | OPEN | `PreToolUse`/`PostToolUse`/`PreCompact`/`SessionStart` hooks silent; breaks CI/CD, security gates, custom tooling | **5 comments**, P1 priority; regression from 0.21.5 where hooks gated tool execution |
| [#8615](https://github.com/QwenLM/qwen-code/issues/8615) Desktop 0.1.0 Windows crash on startup | OPEN | `EISDIR lstat 'C:'` when opening workspace; blocks Windows Desktop adoption | **5 comments**, P1; affects bundled Node.js v22.20.0 on Windows 11 |
| [#8582](https://github.com/QwenLM/qwen-code/issues/8582) Security: read-only shell classifier bypasses | OPEN | Line continuation (`\`) and `${var@P}` hide command substitution, causing auto-approval of arbitrary code execution | **5 comments**, P1 security; two bypasses confirmed, fix in [#8590](https://github.com/QwenLM/qwen-code/pull/8590) |
| [#8627](https://github.com/QwenLM/qwen-code/issues/8627) DO_NOT_TRUST overridden by ancestor TRUST_FOLDER | OPEN | Explicit distrust rule ignored if any parent has `TRUST_FOLDER`; untrusted workspace can inject bearer token into `qwen serve` | **3 comments**, P2 security; trust evaluation short-circuits incorrectly |
| [#8557](https://github.com/QwenLM/qwen-code/issues/8557) Terminal shrink reprints transcript blocks (macOS/Warp) | OPEN | Shrinking window duplicates prior output in scrollback; UX regression in virtualized history (VP mode) | **6 comments**, P3; affects macOS Warp users |
| [#8316](https://github.com/QwenLM/qwen-code/issues/8316) Prompt not restored on Ctrl+C cancel | OPEN | Cancelled prompt disappears from input box; users must retype — friction in iterative prompting | **8 comments**, needs triage; core interactive CLI annoyance |
| [#8643](https://github.com/QwenLM/qwen-code/issues/8643) `.env` loaded from DO_NOT_TRUST ancestor via fast path | OPEN | `findEnvFilesFastPath` evaluates trust once for start dir, applies to all parent `.env` files; leaks secrets from untrusted dirs | **3 comments**, P2 security; credential exposure risk |
| [#8644](https://github.com/QwenLM/qwen-code/issues/8644) File links in chat fail on Windows (colon URL-encoded) | OPEN | `file:///d%3A/...` links unopenable in VS Code; Windows drive letter encoding bug | **3 comments**, P2; blocks file navigation from chat on Windows |
| [#8592](https://github.com/QwenLM/qwen-code/issues/8592) Desktop UI language switch has no effect | CLOSED | Language dropdown in Settings → Appearance doesn’t apply; UI stays English | **5 comments**, P2; fixed in [#8641](https://github.com/QwenLM/qwen-code/pull/8641) for native menu persistence |

---

## 4. Key PR Progress (Top 10 by Activity)

| PR | Type | Description | Impact |
|----|------|-------------|--------|
| [#8656](https://github.com/QwenLM/qwen-code/pull/8656) | Docs | Documents inline terminal image previews: ordered text/image display, ANSI/native renderer selection, PNG validation, deterministic placeholders | Supports v0.21.7 image rendering feature; enables user onboarding |
| [#8590](https://github.com/QwenLM/qwen-code/pull/8590) | Security Fix | Closes read-only classifier bypasses via line continuation and `${var@P}` ([#8582](https://github.com/QwenLM/qwen-code/issues/8582)) | Critical security fix; prevents auto-approval of malicious commands |
| [#8320](https://github.com/QwenLM/qwen-code/pull/8320) | Feature | Cooperative pause/resume for Dynamic Workflows: stops new dispatches, lets in-flight work converge, holds results at gate | Enables controlled workflow orchestration; supports long-running CI pipelines |
| [#8290](https://github.com/QwenLM/qwen-code/pull/8290) | Core Fix | Fail-closed on zero inode (`ino=0`) in file cache: prevents `dev:0` collisions across unrelated files in `FileReadCache` and identity checks | Fixes cache corruption on filesystems with zero inodes (e.g., network mounts) |
| [#8594](https://github.com/QwenLM/qwen-code/pull/8594) | Desktop Fix | Fallback to system browser when built-in browser fails to open links ([#8593](https://github.com/QwenLM/qwen-code/issues/8593)) | Restores link-click functionality in Desktop assistant replies |
| [#8621](https://github.com/QwenLM/qwen-code/pull/8621) | Web Shell | Install Extensions from local `.zip`/`.tar.gz` archives via browser upload to daemon endpoint | Extends Web Shell extensibility; supports offline/private extension distribution |
| [#8507](https://github.com/QwenLM/qwen-code/pull/8507) | Feature | Opt-in Mem0 memory writes for external context: `context_remember({content})` via strict v1 config with `"write": {"enabled": true}` | Enables persistent cross-session memory for agents using Mem0 |
| [#8418](https://github.com/QwenLM/qwen-code/pull/8418) | Perf | Share compression caches with all OpenAI-compatible providers (not just DashScope); prefix-preserving cache for system/tools/history | Reduces token costs & latency for any OpenAI-compatible endpoint |
| [#8365](https://github.com/QwenLM/qwen-code/pull/8365) | UX | Slash command history feedback: transient commands (auth, settings, help, theme, etc.) no longer pollute visible TUI history | Cleaner interactive history; only substantive commands remain visible |
| [#8620](https://github.com/QwenLM/qwen-code/pull/8620) | Serve Fix | Allow approved same-host text reads outside workspace in `qwen serve` | Unblocks legitimate cross-workspace file access for approved sessions |

---

## 5. Feature Request Trends

| Trend | Evidence (Issues/PRs) | Signal Strength |
|-------|----------------------|-----------------|
| **Multi-modal / Voice interfaces** | [#8629](https://github.com/QwenLM/qwen-code/issues/8629) (qwen-audio-agent ecosystem request), [#8197](https://github.com/QwenLM/qwen-code/issues/8197) (Omni multimodal roadmap), [#8090](https://github.com/QwenLM/qwen-code/issues/8090) (inline image rendering — now shipped) | 🔥 High — active ecosystem expansion |
| **Persistent / External Memory** | [#8507](https://github.com/QwenLM/qwen-code/pull/8507) (Mem0 writes), [#8185](https://github.com/QwenLM/qwen-code/issues/8185) (S3 delivery reliability, 47h cache), [#8588](https://github.com/QwenLM/qwen-code/pull/8588) (active work state exposure) | 🔥 High — multiple PRs/in-flight |
| **Workflow Orchestration & Control** | [#8320](https://github.com/QwenLM/qwen-code/pull/8320) (pause/resume), [#7167](https://github.com/QwenLM/qwen-code/issues/7167) (Fleet Shepherd dashboard), [#8390](https://github.com/QwenLM/qwen-code/pull/8390) (bundle age check) | 🔶 Medium — CI/CD integration focus |
| **Desktop App Maturity** | [#8615](https://github.com/QwenLM/qwen-code/issues/8615) (Windows crash), [#8592](https://github.com/QwenLM/qwen-code/issues/8592) (i18n), [#8594](https://github.com/QwenLM/qwen-code/pull/8594) (browser fallback), [#8641](https://github.com/QwenLM/qwen-code/pull/8641) (menu language persistence) | 🔶 Medium — stabilizing v0.1.0 |
| **Terminal UX Polish** | [#8557](https://github.com/QwenLM/qwen-code/issues/8557) (scrollback dupes), [#8634](https://github.com/QwenLM/qwen-code/issues/8634) (Ctrl+S expand), [#7634](https://github.com/QwenLM/qwen-code/issues/7634) (WSL render), [#8625](https://github.com/QwenLM/qwen-code/issues/8625) (IME/pinyin visibility) | 🔶 Medium — ongoing rendering/IME issues |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Hook system reliability** | High (regression + security) | [#8622](https://github.com/QwenLM/qwen-code/issues/8622) (hooks silent in 0.21.6), [#8582](https://github.com/QwenLM/qwen-code/issues/8582) (classifier bypass), [#8627](https://github.com/QwenLM/qwen-code/issues/8627) (trust evaluation) |
| **Windows Desktop instability** | High (crash + encoding + i18n) | [#8615](https://github.com/QwenLM/qwen-code/issues/8615) (startup crash), [#8644](https://github.com/QwenLM/qwen-code/issues/8644) (file link encoding), [#8592](https://github.com/QwenLM/qwen-code/issues/8592) (language switch) |
| **Terminal rendering glitches in VP mode** | Medium (scrollback, IME, resize) | [#8557](https://github.com/QwenLM/qwen-code/issues/8557) (duplicate output on resize), [#8634](https://github.com/QwenLM/qwen-code/issues/8634) (Ctrl+S no-op), [#7634](https://github.com/QwenLM/qwen-code/issues/7634) (WSL char duplication), [#8625](https://github.com/QwenLM/qwen-code/issues/8625) (pinyin obscured) |
| **Credential / `.env` leakage via trust logic** | Medium (multiple security issues) | [#8643](https://github.com/QwenLM/qwen-code/issues/8643) (fast path loads from DO_NOT_TRUST), [#8627](https://github.com/QwenLM/qwen-code/issues/8627) (DO_NOT_TRUST overridden), [#6606](https://github.com/QwenLM/qwen-code/pull/6606) (daemon secrets in shell env) |
| **Interactive CLI friction** | Medium (prompt loss, history noise) | [#8316](https://github.com/QwenLM/qwen-code/issues/8316) (Ctrl+C loses prompt), [#8365](https://github.com/QwenLM/qwen-code/pull/8365) (slash command history pollution) |
| **CI/CD pipeline flakiness** | Medium (timeouts, fan-out hangs) | [#8597](https://github.com/QwenLM/qwen-code/issues/8597) (review fan-out hangs 360min), [#8647](https://github.com/QwenLM/qwen-code/issues/8647) (E2E failure), [#8436](https://github.com/QwenLM/qwen-code/pull/8436) (triage comment on cancel) |

---

*Generated from GitHub data as of 2026-08-07. All links point to live issues/PRs on github.com/Qwen

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-07

## 1. Today's Highlights
The v0.9.4 release train (#5135) has merged 77 commits ahead of main, delivering workflow runtime fixes, TUI status-bar improvements, and build-profile optimizations. A command-boundary refactor epic (#2870) closes after staged integration, while FreeBSD support lands via PR #5254. Runtime API expands with memory, goal-loop, MCP, skill, and verifier endpoints across five open PRs (#5129–#5133), signaling a push toward embeddable, headless operation.

---

## 2. Releases
**No new releases in the last 24h.** The v0.9.4 release train (#5135) remains in integration; expect a tag once the train completes validation.

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2870](https://github.com/Hmbown/CodeWhale/issues/2870) | **EPIC: staged command-boundary refactor** (CLOSED) | Completes the architectural split between user commands and internal tooling; 20 comments show deep design review. | 👍 0 · 20 comments |
| [#4978](https://github.com/Hmbown/CodeWhale/issues/4978) | **Anthropic API `type` validation error** (CLOSED) | Intermittent 400 errors when using OpenModel as Anthropic-compatible provider; affects multi-provider users. | 👍 0 · 6 comments |
| [#5250](https://github.com/Hmbown/CodeWhale/issues/5250) | **Single API key slot — blocks multi-provider workflows** (OPEN) | Users switching between DeepSeek/GLM must re-enter keys; high-friction for polyglot model users. | 👍 0 · 2 comments |
| [#5244](https://github.com/Hmbown/CodeWhale/issues/5244) | **Unknown model IDs silently fall back to 128K context** (OPEN) | 1M-window models compact at 128K without warning; silent data-loss risk for long-context workloads. | 👍 0 · 2 comments |
| [#4828](https://github.com/Hmbown/CodeWhale/issues/4828) | **macOS underwater shell breaks `open`/`osascript`/launchctl (exit -54)** (CLOSED) | v0.9.0’s default shell breaks macOS GUI integration; downgrading to v0.8.67 was the only workaround. | 👍 0 · 2 comments |
| [#5253](https://github.com/Hmbown/CodeWhale/issues/5253) | **Nested subagent `max_depth` can widen root depth budget** (OPEN) | Subagent recursion ceiling (8) bypassable via explicit nested `max_depth`; safety boundary leak. | 👍 0 · 1 comment |
| [#5223](https://github.com/Hmbown/CodeWhale/issues/5223) | **Mouse scroll routes to input history, not content area** (CLOSED) | Long responses unreadable via scrollwheel; fixed in #5234 by disabling alternate-scroll during mouse capture. | 👍 0 · 1 comment |
| [#4681](https://github.com/Hmbown/CodeWhale/issues/4681) | **`<turn_meta>` blocks visible on session reopen** (CLOSED) | Internal metadata leaked to UI on session restore; UX regression. | 👍 0 · 1 comment |
| [#5246](https://github.com/Hmbown/CodeWhale/issues/5246) | **Fat LTO on every pre-push build slows contributors** (CLOSED) | Shipping profile applied to local `cargo build --release`; splits profile to avoid 10-min+ rebuilds. | 👍 0 · 0 comments |
| [#5245](https://github.com/Hmbown/CodeWhale/issues/5245) | **Git commit SHA stamp forces full TUI/CLI rebuild** (CLOSED) | Every commit triggers 680k-line rebuild; decouples SHA injection from compilation. | 👍 0 · 0 comments |

---

## 4. Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#5255](https://github.com/Hmbown/CodeWhale/pull/5255) | **Layer 5.3: Palette, completion, discovery filtering** (OPEN) | Finalizes command-boundary refactor: verifies user-command integration in palette & slash-completion. |
| [#5229](https://github.com/Hmbown/CodeWhale/pull/5229) | **docs: Windows beginner guide (zh-CN)** (CLOSED) | Adds `docs/WINDOWS_BEGINNER.zh-CN.md` + 4 screenshots; validated on Windows 10. |
| [#5254](https://github.com/Hmbown/CodeWhale/pull/5254) | **Build fix for FreeBSD** (OPEN) | Enables compilation on `x86_64-unknown-freebsd` via `bindgen` feature for `rquickjs-sys`. |
| [#5077](https://github.com/Hmbown/CodeWhale/pull/5077) | **perf(prompt): progressively disclose fresh context** (CLOSED) | Caps ambient skills block at 2.4K chars; keeps `AGENTS.md`/`CLAUDE.md` eager; skills lazy-load via `load_skill`. |
| [#5242](https://github.com/Hmbown/CodeWhale/pull/5242) | **feat(tui/subagent): resume interrupted children from checkpoint** (CLOSED) | `agents/followup` now resumes `interrupted_continuable` children via preserved `continuation_handle`. |
| [#5240](https://github.com/Hmbown/CodeWhale/pull/5240) | **feat(tui/shell): surface real wait elapsed time in tool content** (CLOSED) | Exposes `duration_ms` in tool result body (not just metadata) so model sees actual wait time. |
| [#5238](https://github.com/Hmbown/CodeWhale/pull/5238) | **feat(mcp): MCP Registry discovery with Registry-first tool selection** (CLOSED) | Adds `registry_sync` to fetch zero-env stdio servers from public MCP Registry before falling back to shell. |
| [#5234](https://github.com/Hmbown/CodeWhale/pull/5234) | **fix(tui): keep alternate scroll off while mouse capture active** (CLOSED) | Fixes #5223: disables DECSET 1006/1015 during mouse capture so scrollwheel targets transcript. |
| [#5252](https://github.com/Hmbown/CodeWhale/pull/5252) | **feat(subagents): allow embedders to isolate runtime state roots** (OPEN) | Adds `EngineConfig::subagent_state_root` for embedding hosts needing session-owned delegated-agent state. |
| [#5135](https://github.com/Hmbown/CodeWhale/pull/5135) | **release: Codewhale v0.9.4 release train** (CLOSED) | 77 commits integrating workflow fixes, status-bar move, build-profile split, and all v0.9.4 candidates. |

---

## 5. Feature Request Trends
1. **Multi-provider credential management** — #5250 (separate API keys per provider) is the clearest user-facing ask; current single-key design forces re-entry on switch.
2. **Embeddable/headless runtime** — Five concurrent Runtime API PRs (#5129–#5133) expose memory, goals, MCP, skills, verifiers — building a programmatic control plane for desktop/web clients.
3. **Subagent resilience & isolation** — #5242 (checkpoint resume), #5253 (depth ceiling), #5252 (state-root isolation) show investment in reliable, sandboxed delegation.
4. **Build & contributor velocity** — #5246, #5245 split shipping vs. local profiles and decouple git SHA from compilation; direct response to 10-min rebuild pain.
5. **MCP ecosystem integration** — #5238 adds Registry-first discovery; positions CodeWhale as an MCP-native client.

---

## 6. Developer Pain Points
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Single API key slot** | #5250 (2 comments, recent) | Blocks seamless multi-model workflows; users manually swap keys. |
| **Silent context-window fallback** | #5244 (author: Hmbown) | 1M-token models truncated to 128K without warning; silent quality loss. |
| **macOS underwater shell breaks GUI tools** | #4828 (exit -54 on `open`/`osascript`) | v0.9.0 regression; forced downgrade to v0.8.67 for macOS users. |
| **Mouse scroll hijacked by input history** | #5223 (fixed in #5234) | Long transcripts unreadable via scrollwheel; only `Cmd+Up` workaround. |
| **Fat LTO on every pre-push build** | #5246, #5245 (author: Hmbown) | 680k-line crate rebuilds on every commit; 10+ min CI/local cycles. |
| **Subagent depth ceiling bypassable** | #5253 (nested `max_depth` widens budget) | Safety boundary leak; could allow runaway recursion. |
| **Internal metadata leaks on session restore** | #4681 (`<turn_meta>` visible) | UX polish gap; exposes implementation detail to users. |

---

*Digest generated from GitHub data (issues/PRs updated 2026-08-06 → 2026-08-07). All links point to Hmbown/CodeWhale repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*