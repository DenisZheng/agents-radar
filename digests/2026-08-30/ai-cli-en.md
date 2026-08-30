# AI CLI Tools Community Digest 2026-08-30

> Generated: 2026-08-30 02:59 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison Report
**Date:** 2026-08-30 | **Scope:** 9 Major AI CLI Tools

---

## 1. Ecosystem Overview

The AI CLI landscape is maturing rapidly with **three distinct tiers** emerging: (1) **Enterprise-backed heavyweights** (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI) shipping weekly releases with dedicated platform teams; (2) **Specialized contenders** (Qwen Code, DeepSeek TUI, OpenCode, Pi) iterating on niche strengths like local-model integration, multi-agent orchestration, and web-based UIs; (3) **Early-stage tools** (Kimi Code CLI) still solving foundational billing/observability gaps. 

**Universal pressure points** across all tools: Windows/WSL stability, session/history durability, MCP/OAuth integration reliability, and token-cost transparency. The ecosystem is converging on **multi-agent architectures**, **plugin/extension marketplaces**, and **web/desktop parity** as table-stakes features.

---

## 2. Activity Comparison (2026-08-30)

| Tool | Releases (24h) | Hot Issues Tracked | PRs Updated (24h) | Primary Focus Today |
|------|----------------|-------------------|-------------------|---------------------|
| **OpenAI Codex** | 3 (v0.151.0 stable + 2α) | 10 | **12 closed** | MCP tool interception, Vim motions, session resume hardening |
| **GitHub Copilot CLI** | 2 (v1.0.82 patch) | 9 | 2 (1 closed) | Worktree fixes, plan UX, auth error clarity |
| **Gemini CLI** | 1 (nightly) | 10 | 10 (6 closed) | Agent evals, FileSystemService unification, scrollback fix |
| **Qwen Code** | 0 | 10 | 10 open | Hook security, auto-retry, goal proposal, web-shell parity |
| **DeepSeek TUI** | 0 (v0.9.12 RC) | 10 | 10 open | Crate decomposition, provider templates, sandbox fix, cloud dispatch |
| **Pi** | 0 | 10 | 10 (7 closed) | **`pi web` GUI launch**, provider fixes, extension lifecycle |
| **OpenCode** | 0 | 10 | 10 (2 closed) | MCP subprocess sharing, iOS PWA, webfetch timeout, logout CLI |
| **Claude Code** | 0 | **10 (highest severity)** | 1 (docs) | Windows MSIX crisis, Auto Mode regression, data-loss bug |
| **Kimi Code CLI** | 0 | 1 | 0 | Quota billing crisis (cache_read amplification) |

**Key Signal:** OpenAI Codex leads in **release velocity & PR throughput**; Claude Code has **highest-severity regressions** (data loss, Windows unreliability); Pi shipped the **most significant UX milestone** (browser GUI).

---

## 3. Shared Feature Directions (Cross-Tool Convergence)

| Requirement | Tools Demanding | Specific Needs |
|-------------|----------------|----------------|
| **Multi-Agent Orchestration** | Claude Code, OpenAI Codex, Gemini CLI, Qwen Code, OpenCode, DeepSeek TUI | Subagent turn-limit handling (Gemini #22323), proactive spawn grammar (Codex #41570), goal proposal UX (Qwen #10171), team message delivery (Qwen #8172), `/dispatch` cloud runners (DeepSeek #5712) |
| **MCP/OAuth Robustness** | Claude Code, OpenAI Codex, GitHub Copilot CLI, OpenCode, Qwen Code | Credential survival across account switch (Claude #90647), issuer URL path support (Copilot #4662), optional server grace period (Codex #41199), tool result interception (Codex #41202), grammar parsing with tools (Qwen #10520) |
| **Session Durability & Resume** | All 9 tools | History corruption on resume (Codex #35746, #38792), cold-start latency (Pi #8843, Copilot #4165), lazy loading (Pi), thread cwd restoration (Codex #41567), subagent state persistence (Gemini #22323) |
| **Windows/WSL First-Class Support** | Claude Code, OpenAI Codex, GitHub Copilot CLI, OpenCode, Qwen Code, DeepSeek TUI | MSIX update orchestration (Claude #83932), WSL path translation (Codex #29639, #41290), `--resume` hang (Copilot #4165), plugin load hangs in git dirs (OpenCode #25668), Chinese IME (Qwen #8625), PowerShell/cmd shell detection (DeepSeek #1754) |
| **Plugin/Extension Marketplace** | Claude Code, OpenAI Codex, GitHub Copilot CLI, OpenCode, Pi, DeepSeek TUI | Plugin catalog merging (Codex v0.151.0), `.agents` discovery (Copilot #4204), agent plugin spec compliance (Copilot #4655), hot-reload & proactive recs (DeepSeek #5579), extension provider registration race (Pi #8812) |
| **Token/Cost Observability** | Claude Code, Gemini CLI, Kimi Code CLI, DeepSeek TUI | Configurable retention with confirmation (Claude), deterministic redaction (Gemini #26525), quota breakdown dashboard (Kimi #2626), context pressure as agent directive (DeepSeek #5661) |
| **Web/Desktop Parity** | Pi, OpenAI Codex, GitHub Copilot CLI, Qwen Code, DeepSeek TUI | `pi web` GUI (Pi #8840), Chrome/Edge extension stability (Codex #32706), web-shell PR bindings (Qwen #10425), web provider search (DeepSeek #5720), desktop app reliability (Claude, Codex) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Qwen Code | DeepSeek TUI | Pi | OpenCode | Kimi Code |
|-----------|-------------|--------------|------------|-------------------|-----------|--------------|-----|----------|-----------|
| **Core Architecture** | Electron desktop + CLI | Rust TUI + app-server + browser ext | Node.js CLI + ACP protocol | Node.js CLI + VS Code integration | TypeScript monorepo (CLI + web-shell + VS Code) | Rust TUI (crate decomposition) | Rust TUI + **new Web GUI** | Rust TUI + Go backend | Python/Node CLI |
| **Target User** | Anthropic ecosystem, enterprise teams | OpenAI power users, Vim/terminal natives | Google Cloud / Gemini developers | GitHub/GitHub Enterprise users | Alibaba Cloud / Qwen users, local-model enthusiasts | DeepSeek users, self-hosting advocates | Privacy-first, local-LLM, accessibility focus | Multi-provider power users, hackers | Moonshot/Kimi subscribers |
| **Unique Strength** | `CLAUDE.md` nested rules, Cowork remote sessions | Vim motions, model catalog-driven multi-agent, plugin catalog | AST-aware tooling vision, eval-driven dev, ACP protocol | `.agents` convention, GitHub-native auth, worktree UX | Agent Team framework, web-shell daemon, pnpm worktree bootstrap | `/hunt` LLM-as-judge, cloud dispatch, Concentrate gateway | **Browser GUI with TUI parity**, startup composer, profile isolation | MCP subprocess sharing, provider-agnostic, machine tokens | Simple pricing (but broken metering) |
| **Technical Approach** | Proprietary, closed-core | Open-core (Rust), heavy app-server | Open-source (Apache 2), protocol-first (ACP) | Open-source (MIT), GitHub-integrated | Open-source (Apache 2), monorepo + web daemon | Open-source (MIT), crate decomposition for modularity | Open-source (MIT), extension SDK, token-gated web server | Open-source (MIT), provider abstraction layer | Closed-source, minimal community visibility |
| **Biggest Gap** | Windows stability, Auto Mode regression, data loss | Windows app-server fragility, extension manifest drift | Agent hangs, subagent opacity, Wayland browser | MCP/OAuth fragility, Windows resume, permission leaks | Stream timeout, llama.cpp grammar, local model MCP | Sandbox regression (`NoNewPrivs`), session recovery, plugin maturity | TUI rendering fragility, context accounting, provider churn | Auth failures (OpenAI/GLM), Windows plugin hangs, Muse endpoint | **Billing observability**, cache layer, community trust |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum & Maturity** | **OpenAI Codex**, **Gemini CLI**, **Pi** | Codex: 12 PRs/day, stable+alpha releases, 34-comment deep technical issues. Gemini: Nightly cadence, 3 eval PRs/day, P1 agent bugs actively triaged. Pi: Major GUI milestone, 7 PRs merged/day, provider ecosystem expanding. |
| **High Momentum, Active Stabilization** | **Qwen Code**, **DeepSeek TUI**, **GitHub Copilot CLI** | Qwen: 10 PRs open targeting security/parity, CI hardening. DeepSeek: v0.9.12 RC with 22-comment tracker, crate decomposition underway. Copilot: Weekly patches, but MCP regressions signal integration test gaps. |
| **Enterprise Scale, Critical Regressions** | **Claude Code** | Highest engagement issues (78 comments on GPU crash), but **zero feature PRs** — team consumed by Windows MSIX crisis, Auto Mode regression, and silent data-loss bug. Maturity undermined by platform instability. |
| **Early Stage / Niche** | **OpenCode**, **Kimi Code CLI** | OpenCode: Strong provider-agnostic vision, but auth failures block paid users; 29👍 Copilot routing request shows demand. Kimi: Single critical billing issue, no PR activity, opaque metering eroding trust. |

**Community Health Indicator:** Tools with **open-core + public issue triage** (Codex, Gemini, Pi, Qwen, DeepSeek) show faster feedback loops than **closed-core** (Claude, Kimi) or **platform-tied** (Copilot) tools.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication |
|-------|-----------------|-------------|
| **Protocol-First Interop (ACP/MCP) > Proprietary APIs** | 🔥🔥🔥 | Gemini's ACP, Codex/OpenCode/Claude MCP adoption means **tool-agnostic agent runtimes** are emerging. Invest in MCP server development over vendor-specific plugins. |
| **Local-Model + Cloud Hybrid Workflows** | 🔥🔥🔥 | Qwen (llama.cpp), DeepSeek (OpenCode Zen, Concentrate), Pi (Minimax/DeepSeek/Tencent), OpenCode (multi-provider) — **BYO-model** is table stakes. Evaluate tools on local-model tool-calling fidelity (grammar parsing, sampler init). |
| **Web GUI as First-Class Peer to TUI** | 🔥🔥 | Pi's `pi web` (full parity), Qwen's web-shell daemon, Codex browser extension — **browser-based AI IDEs** are replacing Electron wrappers. Prioritize tools with WebSocket-session architecture. |
| **Session Durability

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-30 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator`: fix `run_eval.py` 0% recall | Core skill-authoring toolchain; fixes evaluation harness that reports 0% recall for all skills, breaking the description-optimization loop | Referenced in Issue #556 (12 comments, 7👍); affects `run_loop.py`, `improve_description.py`; Windows stream reading & parallel workers also fixed | **Open** (Jun 10) |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Typographic QC for AI-generated docs: prevents orphan/widow lines, header stranding, numbering misalignment | Addresses universal pain point in Claude-generated documents; no user request needed—skill triggers automatically | **Open** (Mar 4) |
| 3 | **[#1628](https://github.com/anthropics/skills/pull/1628)** `hivemind` | Zero-cost multi-agent orchestration: delegates mechanical work to headless `opencode` workers on free models; Claude stays planner/reviewer/merger | Novel cost-optimization architecture; "expensive model's context is the scarce resource" | **Open** (Aug 21) |
| 4 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` | Mechanical file verification → 4-dimension reasoning audit (damage-severity priority); universal across stacks/models | v1.3.0; quality-gate pipeline; referenced in Issue #1385 (4 comments, 1👍) | **Open** (Jun 28) |
| 5 | **[#568](https://github.com/anthropics/skills/pull/568)** `servicenow` | Broad ServiceNow platform assistant: ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, SecOps, Vulnerability Response, IntegrationHub | Enterprise-wide scope; 5-month active discussion (updated Aug 12) | **Open** (Mar 8) |
| 6 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Full testing stack: Trophy model, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing | Comprehensive reference skill; fills gap in test-generation workflows | **Open** (Mar 22) |
| 7 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` | OpenDocument (.odt/.ods) create, fill, read, convert; template filling + ODT→HTML parsing | ISO-standard document format support; triggers on "ODT", "ODF", "LibreOffice" mentions | **Open** (Mar 1) |
| 8 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills for marketplace: 5-dim quality scoring (structure, examples, resources, security, maintainability) + security scanning | Addresses skill-discovery trust; security analyzer catches credential leaks, injection risks | **Open** (Nov 6, 2025) |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Community Signal |
|-------|----------|------------------|
| **Skill distribution trust & namespace security** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍): community skills masquerading as official `anthropic/` namespace | **Highest engagement** — users demand clear trust boundaries |
| **Organizational skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍): eliminate manual `.skill` file shuffle via Slack/Teams | **Strong product ask** — team workflows blocked by no shared library |
| **Evaluation harness reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍): `claude -p` never triggers skills (0% trigger rate) | **Blocker for skill authors** — optimization loop fundamentally broken |
| **Duplicate skill installation** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍): `document-skills` + `example-skills` install identical content | **UX friction** — pollutes context window |
| **Context-window explosion** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments): `claude-api` injects ~156k tokens in one call | **Scalability concern** — single skill exhausts context |
| **MCP integration** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments): expose skills as MCPs; [#1390](https://github.com/anthropics/skills/issues/1390) (4 comments): mcp-builder eval broken | **Architectural direction** — skills ↔ MCP convergence |
| **Quality gates / self-audit** | [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments, 1👍): 3-gate pipeline (calibration → adversarial review → delivery verification) | **Emerging pattern** — reasoning verification as first-class skill |
| **Enterprise/platform skills** | [#568](https://github.com/anthropics/skills/pull/568) ServiceNow; [#1175](https://github.com/anthropics/skills/issues/1175) SharePoint security concerns | **Vertical expansion** — platform-specific deep skills |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` evaluation fix | **Critical infrastructure** — unblocks all skill authoring; referenced in top issue (#556); Windows fixes included |
| **[#1602](https://github.com/anthropics/skills/pull/1602)** | Evaluation serialization & benchmark fixes | Cross-cutting reliability: MCP-builder text extraction, encoding, metrics, script stability |
| **[#1099](https://github.com/anthropics/skills/pull/1099)** / **[#1050](https://github.com/anthropics/skills/pull/1050)** | Windows `skill-creator` subprocess fixes | Platform parity — `claude.cmd` vs `claude`, pipe encoding; multiple reproductions |
| **[#538](https://github.com/anthropics/skills/pull/538)** | PDF case-sensitivity fix | Trivial but breaking on Linux; 8 mismatches in `SKILL.md` |
| **[#541](https://github.com/anthropics/skills/pull/541)** | DOCX `w:id` collision fix | Prevents document corruption with existing bookmarks; OOXML spec compliance |
| **[#1607](https://github.com/anthropics/skills/pull/1607)** | `claude-api` retired model markers | Maintenance hygiene — removes deprecated model IDs from active lists |
| **[#1595](https://github.com/anthropics/skills/pull/1595)** | UIZZE partner skill | Partner ecosystem growth; anti-UI-slop skill with 800k+ screen MCP |
| **[#509](https://github.com/anthropics/skills/pull/509)** | `CONTRIBUTING.md` | Closes community health gap (Issue #452); repo at 25% GitHub health score |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for trustworthy, shareable, and reliably-evaluated skills — fixing the authoring toolchain (evaluation harness, Windows support), establishing namespace security, and enabling organizational distribution are prerequisites before vertical skill expansion can scale.**

---

# Claude Code Community Digest — 2026-08-30

## Today's Highlights
No new releases shipped today. The issue tracker is dominated by **Windows Desktop app instability** — GPU crashes, MSIX auto-update failures leaving packages unlaunchable, and Repair-loop churn — alongside growing frustration with **Auto Mode's Bash-first steering** silently disabling Read/Edit/Write tools and nested `CLAUDE.md` rules. A silent data-loss bug (default 30-day cleanup purging conversations without warning) surfaced today.

---

## Releases
*No releases in the last 24 hours.*

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#80444](https://github.com/anthropics/claude-code/issues/80444) | **Windows Desktop 1.24012.1: fatal GPU-process crash (0x060C201E) via in-app Browser tab; MSIX package unlaunchable until Repair** | Blocks all Windows Store users; reproduces across two driver versions; Electron 42.7.0 / Chrome 148. | 👍 14 • 78 comments — highest engagement; users stuck on Repair loop daily |
| [#85199](https://github.com/anthropics/claude-code/issues/85199) | **Claude Desktop repeatedly crashes and requires “Advanced Options → Repair” on Windows** | Separate crash vector from #80444; same Repair remediation; affects fresh installs. | 👍 6 • 40 comments — confirms systemic Windows stability problem |
| [#83932](https://github.com/anthropics/claude-code/issues/83932) | **Windows auto-update deploys into running `claude.exe` + `CoworkVMService` (0x80073CF9/0x80073D02); app left unlaunchable** | Auto-update runs while processes hold file locks; fails with sharing violations; `PreserveApplicationData` dev flag leaks to prod. | 👍 0 • 16 comments — detailed technical repro; points to ShipIt/ MSIX orchestration bug |
| [#87971](https://github.com/anthropics/claude-code/issues/87971) | **Auto Mode abuses Bash tools for reads/writes/edits instead of Read/Edit/Write tools** | Model steering regressed: Auto Mode injects standing instruction to use `cat`/`sed`/heredocs, bypassing purpose-built tools. | 👍 38 • 8 comments — highest 👍/comment ratio; devs report broken workflows |
| [#89731](https://github.com/anthropics/claude-code/issues/89731) | **Auto Mode's Bash-first steering reverses 2.1.21 and 2.1.31 fixes** | Confirms regression: two prior releases shipped opposite behavior as "fix"; undocumented opt-out. | 👍 3 • 3 comments — links #88041, #87575, #87971, #89716 |
| [#90450](https://github.com/anthropics/claude-code/issues/90450) | **Auto Mode's Bash-first instruction silently disables nested `CLAUDE.md` and path-scoped rules** | Project-scoped instructions ignored when Bash steering active; silent behavior change. | 👍 1 • 2 comments — critical for team workflows |
| [#87419](https://github.com/anthropics/claude-code/issues/87419) | **Weekly + Fable scoped meters deplete 1.7–5× faster since Aug 17 reset on Max 20x** | Cost regression unrelated to plan change; OAuth token carries `rateLimitTier: default_claude_max_5x`. | 👍 0 • 5 comments — links 5 prior cost issues; billing impact |
| [#90667](https://github.com/anthropics/claude-code/issues/90667) | **Default `cleanupPeriodDays=30` silently and permanently deleted months of conversations, twice** | Startup purge with no warning, no trash, no backup, no recovery; destroyed tax-filing & irreplaceable chats. | 👍 0 • 1 comment — **new today**; severe data-loss risk for all users |
| [#90647](https://github.com/anthropics/claude-code/issues/90647) | **Claude account logout/switch discards all MCP OAuth grants (stored inside account credential)** | Every HTTP MCP server requires re-auth on account switch; breaks multi-account workflows. | 👍 0 • 1 comment — architectural credential storage flaw |
| [#72308](https://github.com/anthropics/claude-code/issues/72308) | **macOS Desktop: scheduled-task/background CLI sessions never exit → memory exhaustion over 1–2 days** | Headless sessions accumulate indefinitely, each retaining full plugin + MCP stack; starves system. | 👍 1 • 3 comments — persistent since June; affects all scheduled-task users |

---

## Key PR Progress
| # | PR | Summary | Status |
|---|----|---------|--------|
| [#61720](https://github.com/anthropics/claude-code/pull/61720) | **docs: Add troubleshooting for Cowork queue not spawning follow-up turn** | Documents race condition between queue post-turn handler and rate-limit handler; closes #61718. | Open (updated 2026-08-29) |

*Only 1 PR updated in last 24h — primarily documentation.*

---

## Feature Request Trends (from open issues)
1. **Auto Mode control plane** — Explicit opt-out/opt-in for Bash-first steering, per-project tool policy, visibility into injected standing instructions.
2. **Windows MSIX reliability** — Proper update orchestration (close processes before deploy), crash telemetry, graceful degradation instead of Repair-loop.
3. **Conversation durability** — Configurable retention with confirmation, export/backup before purge, trash/recycle bin for transcripts.
4. **MCP credential portability** — Decouple OAuth grants from account credentials; survive logout/switch.
5. **Session provenance in UI** — Show hostname/machine for remote/Cowork sessions (#73343) to debug disconnect/resume.
6. **Scheduled-task lifecycle** — Guaranteed termination, resource cleanup, concurrency-slot release on wedge.
7. **Tool parity & docs sync** — Restore Glob/Grep on native builds or update model guidance/docs (#51781, #61845, #69849).

---

## Developer Pain Points (recurring, high-frequency)
| Pain Point | Evidence | Affected Surface |
|------------|----------|------------------|
| **Windows Desktop app unreliability** | 4+ high-comment issues (#80444, #85199, #83932, #81992, #89599, #89675) — GPU crashes, update failures, Repair loops, black screenshots | Desktop (Windows/MSIX) |
| **Auto Mode tool steering regression** | #87971 (38 👍), #89731, #90450, #88041, #87575, #89716 — Bash-first breaks Read/Edit/Write, nested rules, prior fixes | Core / Auto Mode |
| **Silent data destruction** | #90667 (new), default 30-day purge with no UX guardrails | CLI / Desktop (all platforms) |
| **Background session leaks** | #72308 (macOS), #89639 (macOS), #89632 (Windows permissions) — memory exhaustion, wedge, concurrency starvation | Desktop scheduled tasks / Cowork |
| **MCP/OAuth fragility** | #90647 (logout kills grants), #60252 (strict-mcp-config fetches anyway) | MCP / Auth |
| **Cost opacity & meter drift** | #87419, #79773, #65678, #69430, #52135, #54714 — 5× depletion, tier mismatch | Billing / Max plans |
| **Tool/docs divergence** | #51781, #61845, #69849 — Glob/Grep removed but model/docs still reference them | Tools / Docs / Model guidance |

---

*Digest generated from GitHub data (anthropics/claude-code) as of 2026-08-30 00:00 UTC. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-30

---

## 1. Today's Highlights

Codex shipped **v0.151.0** with three notable capabilities: a configurable grace period for discovering tools from optional MCP servers, the ability for extensions to inspect or replace MCP tool results before they reach the model, and plugin catalogs that now merge per-repository configuration while reporting invalid marketplace entries. Meanwhile, the issue tracker shows a cluster of Windows-specific regressions — particularly around WSL workspace handling, Chrome extension manifest drift after updates, and DWM handle leaks — suggesting the desktop app’s Windows integration layer needs stabilization.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **[rust-v0.151.0](https://github.com/openai/codex/releases/tag/rust-v0.151.0)** | Stable | • Configurable grace period for optional MCP server tool discovery (#41199)<br>• Extensions can intercept/replace MCP tool results pre-model (#41202)<br>• Plugin catalogs merge per-repo config; invalid marketplace entries reported |
| **[rust-v0.152.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.1)** | Alpha | Initial alpha for next minor series |
| **[rust-v0.151.0-alpha.7.2](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.7.2)** | Alpha | Patch alpha for 0.151 line |

---

## 3. Hot Issues (Top 10 by Community Impact)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#35746](https://github.com/openai/codex/issues/35746)** Paginated history drops valid flattened rollout records and reuses ordinals | Breaks session resume fidelity; affects CLI users relying on history replay | 34 comments, 2👍 — active investigation by maintainers |
| **[#32706](https://github.com/openai/codex/issues/32706)** Windows/Edge: Chrome plugin update leaves locked host, partial cache, stale manifest | Blocks browser-tool workflows on Windows; uninstallable plugin state | 17 comments, 2👍 — impacts Edge/Chrome extension users |
| **[#29639](https://github.com/openai/codex/issues/29639)** Browser Use Node REPL fails in Windows Desktop with WSL workspace (unmapped `sandboxCwd`) | Core WSL↔Windows path translation gap; breaks Node REPL tooling | 16 comments, 3👍 — persistent since June |
| **[#33192](https://github.com/openai/codex/issues/33192)** [Win10] DWM Composition handles accumulate after tool calls | Resource leak causing desktop instability over long sessions | 16 comments, 10👍 — high reproducibility |
| **[#38792](https://github.com/openai/codex/issues/38792)** Resume opens long thread at first turn: desynced `thread_history` cursors never repair | Silent data corruption on resume; affects all long-running sessions | 15 comments, 4👍 — filed by AI-assisted investigation |
| **[#29811](https://github.com/openai/codex/issues/29811)** Goal compaction resurrects completed manual steer before continuation | UX regression in goal-oriented workflows; steering state machine bug | 10 comments, 7👍 |
| **[#36087](https://github.com/openai/codex/issues/36087)** Windows sandbox fails with `helper_unknown_error` applying deny-read ACLs in workspace-write mode | Sandbox policy regression on Windows; blocks file operations | 9 comments, 1👍 |
| **[#41290](https://github.com/openai/codex/issues/41290)** [Win/WSL] Project creation/removal fail after switching Agent Environment to WSL | Environment-switching breaks project lifecycle; new in v26.825 | 9 comments, 3👍 |
| **[#32447](https://github.com/openai/codex/issues/32447)** CLI repeatedly reports bundled `node_repl` MCP startup failure on macOS | Spurious error noise; may mask real MCP issues | 8 comments, 11👍 — high visibility |
| **[#41583](https://github.com/openai/codex/issues/41583)** Windows App constantly crashing after today's update (26.825.41651) | Acute regression in latest Store release; blocks all Windows users | 3 comments, filed today — early signal |

---

## 4. Key PR Progress (All Closed in Last 24h)

| PR | Description | Category |
|----|-------------|----------|
| **[#41586](https://github.com/openai/codex/pull/41586)** Add Vim search motions to composer | `/`, `?`, `n`, `N` literal search + operator support (delete/change/yank) | Editor UX |
| **[#41570](https://github.com/openai/codex/pull/41570)** Fix proactive multi-agent instruction grammar | Grammar correction for auto-spawned agent directives | Multi-agent |
| **[#41569](https://github.com/openai/codex/pull/41569)** Harden diagnostic report uploads | Core event sent first; attachments gzip-compressed, size-bounded, format-aware truncation | Telemetry |
| **[#41567](https://github.com/openai/codex/pull/41567)** Restore thread cwd from owned settings snapshots | Fixes resume without explicit `cwd`; handles forked history & compaction edge cases | Session mgmt |
| **[#41562](https://github.com/openai/codex/pull/41562)** Preserve turn lineage across goal continuations | Keeps attribution to originating turn; clears stale lineage on external input/edits | Goal tracking |
| **[#41477](https://github.com/openai/codex/pull/41477)** Organize bundled Rust resources under asset directories | Separates embedded runtime resources from source/test fixtures in `core`/`tui` | Build hygiene |
| **[#41476](https://github.com/openai/codex/pull/41476)** Use `rules_rs` platforms for release binaries | Maps release platforms → Rust triples; builds against `rules_rs` not LLVM defs | Release infra |
| **[#41467](https://github.com/openai/codex/pull/41467)** Refresh TUI model picker from app server | Async fetch on picker open; avoids stale cached catalog | Model selection |
| **[#41464](https://github.com/openai/codex/pull/41464)** Preserve permissions when updating session metadata | Defers sandbox policy projection; avoids rebinding on client name/version changes | Permissions |
| **[#41461](https://github.com/openai/codex/pull/41461)** Source async user message descriptions from model catalog | Uses active step model’s catalog for `send_user_message_async`; falls back to built-in | Model catalog |
| **[#41457](https://github.com/openai/codex/pull/41457)** Source proactive multi-agent instructions from model catalog | Catalog-driven proactive message for Ultra reasoning; fallback to built-in | Multi-agent |
| **[#41456](https://github.com/openai/codex/pull/41456)** Support app targets in executor plugin hooks | Admits curated Browser plugin `Stop`/`SubagentStop` hooks with app routing metadata | Plugin system |
| **[#41454](https://github.com/openai/codex/pull/41454)** Block goals after repeated execution host failures | Tracks failed `exec` attempts per goal; blocks after 3; resets on any tool success | Reliability |

---

## 5. Feature Request Trends

From the issue corpus, developers are consistently asking for:

1. **External event injection into live sessions** ([#33556](https://github.com/openai/codex/issues/33556) — 5👍): Webhooks, file-watchers, and notifications should wake visible sessions, not just headless remote-control threads.
2. **Multi-account / multi-machine mobile Remote Control** ([#31187](https://github.com/openai/codex/issues/31187) — 2👍): First-class support for parallel desktop enrollments across accounts and machines.
3. **GitHub plugin org-install discoverability** ([#36473](https://github.com/openai/codex/issues/36473) — 3👍): Connection menu should surface the GitHub App installation flow for private repos/orgs.
4. **Chat/Work/Codex task disambiguation** ([#41594](https://github.com/openai/codex/issues/41594)): Generic “chat” labels conflate distinct task types in the desktop sidebar.
5. **Vim motions in composer** (delivered in #41586): Literal search + operator-pending motions — indicates strong demand for modal editing parity.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pattern | Evidence | Impact |
|---------|----------|--------|
| **Windows + WSL path translation** | #29639, #41290, #32706, #36087 | Core workflow blocker for Windows developers using WSL workspaces; sandbox `cwd` mapping, project creation, and browser tooling all affected |
| **Session/history corruption on resume** | #35746, #38792, #40452 | Paginated rollout decoding, cursor desync, and post-update history truncation erode trust in long-running tasks |
| **Chrome/Edge extension manifest drift after auto-update** | #32706, #41592 | Locked hosts, stale `nodePath`, uninstallable plugins — update pipeline doesn’t cleanly migrate extension state |
| **App-server instability on Windows** | #36778, #40913, #41255, #41540, #41583 | `codex.exe` killed mid-turn (0xC000013A), handshake failures (0xC0000022), headless startup blocks — bundled backend lifecycle is fragile |
| **DWM/resource leaks on Windows** | #33192, #41523 | Handle accumulation and background-process spawns after updates indicate native integration gaps |
| **MCP `node_repl` spurious failures** | #32447, #29639 | Bundled binary not found on macOS; wrong binary (Windows) invoked for WSL workspaces — packaging/runtime mismatch |
| **Goal/steering state machine bugs** | #29811, #24565 | Compaction resurrects completed steers; plan mode exhibits undefined behavior — high-level agent orchestration needs hardening |

---

*Generated from github.com/openai/codex data as of 2026-08-30. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-30

---

## 1. Today's Highlights

The project shipped nightly **v0.59.0-nightly.20260830** while maintainers continue triaging a backlog of high-priority agent reliability bugs—most notably subagent turn-limit misreporting (#22323), generalist agent hangs (#21409), and shell-command “waiting input” stalls (#25166). A wave of evaluation-focused PRs (#28822–#28824) landed to harden task-tracker, multi-tool-chain, and security-boundary behaviors, signaling a push toward more rigorous behavioral testing.

---

## 2. Releases

| Version | Type | Key Notes |
|---------|------|-----------|
| `v0.59.0-nightly.20260830.g0bd1d4397` | Nightly | Automated nightly bump; see [changelog](https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260829.g0bd1d4397...v0.59.0-nightly.20260830.g0bd1d4397) for incremental changes. |

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Title | Priority/Area | Why It Matters | Community Signal |
|---|-------|---------------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | **P1**, `area/agent` | Subagents falsely report success when hitting turn limits, masking failures and breaking downstream logic. | 13 comments, 2 👍, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | **P1**, `area/agent` | Core agent stalls on simple tasks (e.g., folder creation); workarounds require disabling subagents. | 8 comments, 8 👍 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution stuck at “Waiting input” | **P1**, `area/core` | Completed commands leave the UI in a hung state, forcing manual interruption. | 4 comments, 3 👍 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model’s bash affinity via Zero-Dependency OS Sandboxing | **P2**, `area/agent` | Strategic epic to align tooling with Gemini 3’s native POSIX-tool fluency. | 8 comments, 1 👍, `effort/large` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST-aware file reads, search, mapping | **P2**, `area/agent` | Exploration of AST tooling to reduce token noise and misaligned reads. | 7 comments, 1 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini under-utilizes custom skills & sub-agents | **P2**, `area/agent` | Agents ignore registered skills unless explicitly invoked, limiting extensibility. | 6 comments |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | **P2**, `area/agent` | Background extractor re-queues unprocessed sessions, wasting cycles. | 5 comments |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | **P1**, `area/agent`, `agent/browser` | Platform-specific regression blocking browser automation on Linux/Wayland. | 4 comments, 1 👍 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Browser agent lacks session takeover/lock recovery | **P3**, `area/agent` | Fail-fast on locked profiles breaks persistent-session workflows. | 4 comments |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction; reduce Auto Memory logging | **P2**, `area/security` | Secrets may enter model context before redaction; verbose logging risks exposure. | 4 comments |

---

## 4. Key PR Progress (Top 10 by Scope & Urgency)

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#29110](https://github.com/google-gemini/gemini-cli/pull/29110) | `fix(core): route read_file through FileSystemService` | **Open** | Unifies FS access for ACP clients; enables remote/virtualized filesystems. |
| [#28828](https://github.com/google-gemini/gemini-cli/pull/28828) | `fix(core): warn when preview model silently substituted` | **Closed** | Prevents silent fallback from `gemini-3.1-pro-preview` → `auto-gemini-2.5`. |
| [#28827](https://github.com/google-gemini/gemini-cli/pull/28827) | `fix(core): avoid false auth errors for 401 substrings` | **Closed** | Stops spurious auth failures when “401” appears in non-HTTP contexts. |
| [#28823](https://github.com/google-gemini/gemini-cli/pull/28823) | `Feat/evals: tracker relationships, error recovery` | **Closed** | Adds behavioral evals for task-graph deps, visualization, 404 re-search, shell retry. |
| [#28824](https://github.com/google-gemini/gemini-cli/pull/28824) | `feat(evals): multi-tool chain, context safety, security bounds` | **Closed** | New evals for chained tools, large-file handling, sensitive-path guards. |
| [#28822](https://github.com/google-gemini/gemini-cli/pull/28822) | `Feat/evals: todos tasks tracker` | **Closed** | Covers `write_todos`, `complete_task`, `tracker_list_tasks`, `tracker_get_task`. |
| [#28967](https://github.com/google-gemini/gemini-cli/pull/28967) | `fix(cli): prevent clearing terminal scrollback on static refresh` | **Open** | Fixes scrollback wipe on Linux/Unix terminals (GNOME, Alacritty, etc.). |
| [#28966](https://github.com/google-gemini/gemini-cli/pull/28966) | `docs(extensions): correct excludeTools examples` | **Open** | Fixes documented patterns that never matched (exact tool names only). |
| [#29120](https://github.com/google-gemini/gemini-cli/pull/29120) | `fix(core): improve destination validation in web fetch` | **Open** | Async DNS validation + Undici connector for safer outbound requests. |
| [#29124](https://github.com/google-gemini/gemini-cli/pull/29124) | `fix(cli): correct SubagentStop event key in hooks migration` | **Open** | Fixes case-sensitivity bug dropping `SubagentStop` hooks during Claude → Gemini migration. |

---

## 5. Feature Request Trends

1. **Agentic Bash/OS Integration** — Multiple issues (#19873, #22745, #22746) push for native POSIX toolchains, AST-aware reads, and sandboxed shell execution to match model training.
2. **Subagent Observability & Control** — Demand for trajectory sharing (#22598), bug-report context inclusion (#21763), and config propagation (#22267) shows teams building complex multi-agent workflows.
3. **Memory System Hardening** — Auto Memory retries (#26522), redaction timing (#26525), and patch validation (#26523) indicate production usage surfacing reliability gaps.
4. **Evaluation-Driven Development** — Three large eval PRs merged in one day signal a shift toward behavioral regression suites for planning, tooling, and security.
5. **Extension & Skill Ecosystem** — Symlink deduping (#28968), excludeTools docs (#28966, #28965), and agent symlink support (#20079) reflect growing third-party integration.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Agent hangs / silent stalls** | Generalist agent (#21409), shell “waiting input” (#25166), browser Wayland (#21983), vite interactive prompt (#22465) | 5+ distinct issues, multiple P1 |
| **Subagent misreporting & opacity** | MAX_TURNS → GOAL success (#22323), missing bug-report context (#21763), ignored `maxTurns` (#22267) | 4+ issues, high comment counts |
| **Skill/Subagent discoverability** | Skills not auto-used (#21968), symlink agents ignored (#20079), skill dir deduping needed (#28968) | 3+ issues |
| **Terminal UX regressions** | Scrollback cleared on refresh (#28967), resize flicker (#21924), `\n` escape bugs (#22466) | 3+ issues |
| **Security/Privacy leakage risks** | Auto Memory redaction post-context (#26525), verbose logging, secret exposure in transcripts | 2+ security-labeled issues |

---

*Generated from `google-gemini/gemini-cli` GitHub data as of 2026-08-30. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-30

## Today's Highlights
GitHub Copilot CLI shipped **v1.0.82** with three targeted fixes: a worktree-switching regression, plan-card expansion via `Ctrl+E`, and clearer auth-error surfacing. Meanwhile, the issue queue shows a cluster of **OAuth/MCP integration failures** (chroma-mcp, Azure DevOps, generic issuer-URL paths) and a **Windows `--resume` hang** that blocks cold-start workflows. A long-standing `/allow-all` permission bypass gap and a `str_replace` tooling error round out the top friction points.

---

## Releases
### v1.0.82 / v1.0.82-2 (2026-08-29)
| Change | Impact |
|--------|--------|
| Fixed: message typed during `/worktree` or `/move` prep no longer breaks the switch | Eliminates a silent worktree-corruption scenario |
| `Ctrl+E` now expands the plan-approval card to show the full plan again | Restores discoverability for multi-step plans |
| Auth failures (e.g., `401 Bad credentials`) now surface explicitly instead of generic `/login` prompt | Faster debugging of token/credential issues |

[Release v1.0.82](https://github.com/github/copilot-cli/releases/tag/v1.0.82) · [Release v1.0.82-2](https://github.com/github/copilot-cli/releases/tag/v1.0.82-2)

---

## Hot Issues (9 updated in last 24h)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4647](https://github.com/github/copilot-cli/issues/4647) | **v1.0.81 broke chroma-mcp compatibility** | MCP ecosystem breakage; blocks vector-search workflows | 2 comments, triage label |
| [#4660](https://github.com/github/copilot-cli/issues/4660) | **Remote ADO MCP server OAuth fails in v1.0.81 WAM impl** | Enterprise Azure DevOps integration regression | 1 comment, triage label |
| [#4662](https://github.com/github/copilot-cli/issues/4662) | **AgentHost MCP client fails OAuth discovery for issuer URLs with path component** | Standards-compliant OAuth servers (e.g., `mcp.example.com/oauth`) rejected | New, 0 comments |
| [#4165](https://github.com/github/copilot-cli/issues/4165) | **`copilot --resume` hangs at “Resuming session” on Windows cold start** | Blocks Windows developers from session persistence | 4 comments, 👍 1, `area:platform-windows` |
| [#4027](https://github.com/github/copilot-cli/issues/4027) | **Tool `str_replace` does not exist (Java edits)** | Recurring edit-tool fallback noise; hints at tool-selection logic bug | 1 comment, 👍 13, `area:tools` |
| [#2955](https://github.com/github/copilot-cli/issues/2955) | **`/allow-all` does not suppress bash tool prompts** | Permission UX promise broken; erodes trust in allow-list | 1 comment, 👍 1, `area:permissions` |
| [#4553](https://github.com/github/copilot-cli/issues/4553) | **CLI loops infinitely on `apply_patch` due to JSON-wrapping error** | Task stall + token burn; core apply-patch reliability | 0 comments, `area:models,area:tools` |
| [#4204](https://github.com/github/copilot-cli/issues/4204) | **Add `.agents` discovery for instructions/agents/hooks in any folder** | Extends existing `.agents/skills` convention; reduces config fragmentation | 2 comments, `area:agents,area:configuration` |
| [#4655](https://github.com/github/copilot-cli/issues/4655) | **Agent Plugins 1.0: custom agents under `com.github.copilot/agents` not discovered** | Plugin authoring spec compliance gap | 1 comment, triage label |

---

## Key PR Progress (2 updated in last 24h)

| # | Title | Status | Note |
|---|-------|--------|------|
| [#4659](https://github.com/github/copilot-cli/pull/4659) | Initial commit with exported changes from codespace | Open | Appears to be a codespace sync; review for scope |
| [#2381](https://github.com/github/copilot-cli/pull/2381) | Install: add fish shell support for PATH configuration | **Closed** | Long-standing shell-completion gap; fish users now get correct PATH array syntax |

---

## Feature Request Trends
1. **Unified `.agents` convention** — Extend the existing `.agents/skills` pattern to *instructions, agents, hooks* across *any* folder (not just Git repos) [#4204](https://github.com/github/copilot-cli/issues/4204).
2. **Agent Plugins 1.0 parity** — Discover custom agents packaged under `com.github.copilot/agents` per the plugin spec [#4655](https://github.com/github/copilot-cli/issues/4655).
3. **MCP/OAuth robustness** — Support issuer URLs with path components, fix ADO & chroma-mcp integrations [#4662](https://github.com/github/copilot-cli/issues/4662), [#4660](https://github.com/github/copilot-cli/issues/4660), [#4647](https://github.com/github/copilot-cli/issues/4647).

---

## Developer Pain Points
- **Windows session resume broken** — Cold-start `--resume` hangs indefinitely; workaround requires extra steps [#4165](https://github.com/github/copilot-cli/issues/4165).
- **MCP ecosystem fragility** — Three distinct OAuth/MCP regressions in v1.0.81 suggest insufficient integration testing against real servers.
- **Permission model leaks** — `/allow-all` still prompts for every bash command, negating its purpose [#2955](https://github.com/github/copilot-cli/issues/2955).
- **Edit-tool flakiness** — `str_replace` “does not exist” errors during Java edits indicate tool-selection or schema drift [#4027](https://github.com/github/copilot-cli/issues/4027).
- **Patch-apply loops** — JSON-wrapping errors cause infinite retries, wasting tokens and time [#4553](https://github.com/github/copilot-cli/issues/4553).

--- 
*Digest generated from github.com/github/copilot-cli data as of 2026-08-30 00:00 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-30

## 1. Today's Highlights
No new releases or PRs merged in the last 24 hours. The community spotlight is on **Issue #2626**, where a paying subscriber reports severe quota amplification: `cache_read` tokens are billed every turn while `cache_creation` remains zero, draining ~40% of a 5-hour quota window within minutes of light usage. This suggests a potential caching-layer bug or metering misconfiguration affecting all paying users.

---

## 2. Releases
*None in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#2626](https://github.com/MoonshotAI/kimi-cli/issues/2626) | **Abnormal quota consumption: `cache_read` billed every turn with `cache_creation` always 0 (>10× amplification)** | Directly impacts billing for all paid subscribers; indicates cache is never being created/updated, forcing full-context reads each turn. High severity for revenue trust and user retention. | 1 comment (author follow-up), 0 👍 — likely underreported due to niche billing visibility. |

*Only one issue updated in the last 24h. No other hot issues to surface.*

---

## 4. Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## 5. Feature Request Trends
*Insufficient new issue data in the last 24h to infer trends. Historical patterns (not in this window) typically center on:*
- Token metering transparency & dashboarding
- Local-first / offline execution modes
- Multi-repo workspace support
- Configurable context-window policies

---

## 6. Developer Pain Points
| Pain Point | Evidence |
|------------|----------|
| **Opaque / runaway quota billing** | #2626: `cache_read` charged per turn, `cache_creation` stuck at 0 → 10× token burn; no visibility tooling to audit. |
| **Lack of billing observability** | User had to “pull the CLI” logs manually to diagnose; no built-in quota breakdown or real-time dashboard. |
| **Cache layer reliability** | Cache creation appears broken (always 0), negating the primary cost-control mechanism for long sessions. |

---

*Digest generated from GitHub data as of 2026-08-30 00:00 UTC. For real-time updates, watch the [kimi-cli repository](https://github.com/MoonshotAI/kimi-cli).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-30

## Today's Highlights
No new releases shipped today. The community is actively triaging authentication failures across multiple providers (OpenAI, GLM, OpenCode Go) and resolving TUI usability regressions. A notable PR (#46210) addresses MCP subprocess multiplication across Locations—a scalability fix for multi-project workflows.

---

## Releases
*No releases published in the last 24 hours.*

---

## Hot Issues (Top 10 by Impact & Engagement)

| Issue | Summary | Why It Matters | Community Signal |
|-------|---------|----------------|------------------|
| [#20235](https://github.com/anomalyco/opencode/issues/20235) | **Request GitHub Copilot auto model routing API access** | Enables Copilot's `/models/session` endpoint for dynamic model selection—high-value integration for VS Code parity. | **29 👍**, 8 comments (closed) |
| [#39215](https://github.com/anomalyco/opencode/issues/39215) | **OpenCode Go: HTTP 401 "Request blocked by upstream provider" on all models** | Subscription holders completely blocked; affects DeepSeek, GLM, Qwen simultaneously. | **3 👍**, 3 comments (open) |
| [#16281](https://github.com/anomalyco/opencode/issues/16281) | **OpenAI ChatGPT Pro/Plus browser login fails with 403 on macOS** | Breaks primary auth flow for paid OpenAI users on Mac; OAuth callback succeeds but token exchange fails. | **4 👍**, 10 comments (closed) |
| [#27661](https://github.com/anomalyco/opencode/issues/27661) | **Home/End keys scroll message list instead of moving cursor** | Core text-editing regression in TUI input; makes long-message editing nearly impossible. | **8 👍**, 6 comments (closed) |
| [#34598](https://github.com/anomalyco/opencode/issues/34598) | **GLM-5.2 routes to Alibaba Cloud with silent content scanning** | Privacy/compliance risk: user content filtered by third party without ToS disclosure. | **1 👍**, 5 comments (closed) |
| [#25668](https://github.com/anomalyco/opencode/issues/25668) | **Plugin loading hangs intermittently when `.git` exists (Windows)** | 80% repro rate in git-tracked dirs; TUI freezes at "Loading plugins...", Ctrl+C ineffective. | 5 comments (closed) |
| [#43477](https://github.com/anomalyco/opencode/issues/43477) | **Muse model: "Upstream request failed: Endpoint is unavailable"** | New model integration broken; upstream endpoint unreachable despite valid config. | 4 comments (open) |
| [#24795](https://github.com/anomalyco/opencode/issues/24795) | **Allow editing "always" permission pattern before confirming** | Auto-generated patterns often over-broad; users want review/approval before persistent grant. | **6 👍**, 4 comments (closed) |
| [#33630](https://github.com/anomalyco/opencode/issues/33630) | **Bedrock Converse ignores extended thinking config for Claude 3.7** | Reasoning tokens silently dropped; `thinking` provider option has no effect. | 5 comments (closed) |
| [#34637](https://github.com/anomalyco/opencode/issues/34637) | **Desktop: closing session tab throws "Session not found" error** | Stable repro on every tab close; persists across restarts—data loss risk perception. | 2 comments (closed) |

---

## Key PR Progress (Top 10 by Significance)

| PR | Status | Summary | Linked Issue |
|----|--------|---------|--------------|
| [#46210](https://github.com/anomalyco/opencode/pull/46210) | **Open** | **fix(mcp): share identical MCP subprocesses across Locations** — eliminates subprocess multiplication (5 Locations × 3 MCPs → 3 subprocesses). Critical for multi-project performance. | #37844 |
| [#46205](https://github.com/anomalyco/opencode/pull/46205) | **Open** | **fix(session-ui): share timeline tool headers** — extracts `ToolHeader` component for consistent rendering across Read/Grep/Glob/List, Shell, WebFetch, Edit/Write, reasoning, and grouped tool summaries. | — |
| [#46200](https://github.com/anomalyco/opencode/pull/46200) | **Open** | **fix(app): inset iOS PWA navigation below native chrome** — adds safe-area padding for landscape/home-indicator devices; preserves `viewport-fit=cover`. | #36142, #35480 |
| [#45235](https://github.com/anomalyco/opencode/pull/45235) | **Open** | **fix(webfetch): apply timeout to body read** — prevents stall on slow streaming responses; fails fast instead of hanging indefinitely. | #45229 |
| [#46199](https://github.com/anomalyco/opencode/pull/46199) | **Open** | **feat: configurable plans directory & opt-out for plugin dependency installs** — user control over `.opencode/plans/` location and auto-install behavior. | #46189 |
| [#41955](https://github.com/anomalyco/opencode/pull/41955) | Closed | **feat(provider): add `none` reasoning variant for DeepSeek V4** — exposes thinking toggle previously missing from variant menu. | — |
| [#39558](https://github.com/anomalyco/opencode/pull/39558) | Closed | **fix(tui): show context percentage relative to input limit** — denominator now uses `limit.input` (compaction trigger) not `limit.context`, fixing misleading UI. | #38851 |
| [#39569](https://github.com/anomalyco/opencode/pull/39569) | Closed | **fix(provider): inject `chat_template_kwargs` for NVIDIA NIM GLM models** — removes unsupported `reasoningEffort` param causing 400 errors. | #39553 |
| [#39563](https://github.com/anomalyco/opencode/pull/39563) | Closed | **fix(core): align patch tool guidance** — replaces legacy tutorial with grammar-aligned docs; shortens `patchText` description. | — |
| [#39549](https://github.com/anomalyco/opencode/pull/39549) | Closed | **feat(cli): add `opencode console logout` command** — V2 CLI support for credential revocation; idempotent feedback. | — |

---

## Feature Request Trends
1. **GitHub Copilot Deep Integration** — Auto model routing (`/models/session`) is the top-voted request (29 👍), signaling demand for seamless Copilot parity.
2. **Session Lifecycle Control** — Resume capability (#46197), freshness polling (#33783), and plans directory configurability (#46199) reflect maturation of long-running workflows.
3. **Desktop App Polish** — Minimize-to-tray (#27463), custom install paths (#34664, #17044), and close confirmation are recurring UX asks.
4. **Permission Granularity** — Edit-before-confirm for "always" grants (#24795) and parallel tool execution (#34636) show desire for finer-grained automation control.
5. **Mobile/PWA First-Class Support** — iOS safe-area insets (#46200) and web app manifest issues (#35480) indicate growing mobile usage.
6. **Provider Ecosystem Expansion** — DeepSeek reasoning variants (#41955), NVIDIA NIM GLM fixes (#39569), and Bedrock extended thinking (#33630) highlight multi-provider strategy.

---

## Developer Pain Points

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-30

## 1. Today's Highlights
The Pi project shipped a **browser-based Web GUI (`pi web`)** with full TUI parity, served via a token-gated local HTTP/WebSocket server — a major milestone for accessibility and remote workflows. Meanwhile, the community is actively debugging a high-impact **TUI streaming corruption bug** (#8584) that scrambles assistant output after long tool calls, and a **Mac CPU spike** (#7730) tied to long session context. Several provider compatibility fixes landed for xAI, DeepSeek, Minimax, and Tencent.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#8584](https://github.com/earendil-works/pi/issues/8584) **TUI row corruption during streaming** | Assistant text renders one word per line after long tool output (e.g., `sed` on wide files). Breaks readability in common workflows. | 25 comments, 9 👍 — high urgency, reproducible |
| [#7730](https://github.com/earendil-works/pi/issues/7730) **High CPU on Mac OS with long sessions** | CPU swings 50–110% (600–800 MB RAM) on macOS; correlates with session/context length. | 13 comments, 9 👍 — persistent pain point for Mac users |
| [#3159](https://github.com/earendil-works/pi/issues/3159) **Edit tool timeout termination** | Qwen 27B consistently fails edits with "terminated"; suggests timeout too low for large diffs. | 8 comments — tool reliability blocker |
| [#3966](https://github.com/earendil-works/pi/issues/3966) **Built-in `--profile` for isolated state** | No clean way to separate work/personal/local-LLM setups without manual `PI_CODING_AGENT_DIR` juggling. | 5 comments — strong demand for multi-tenant workflows |
| [#8061](https://github.com/earendil-works/pi/issues/8061) **Context budget ignores `maxTokens` output reservation** | Requests rejected at ~78% input capacity; compact-and-retry also fails. Affects Gemini 1M-token windows. | 3 comments, 2 👍 — core context management flaw |
| [#8643](https://github.com/earendil-works/pi/issues/8643) **Bedrock: OpenAI models reject images in `toolResult.content`** | Images nested in tool results cause 400s; needs hoisting to sibling user blocks (like `openai-completions.ts` does). | 3 comments — provider interop blocker |
| [#8753](https://github.com/earendil-works/pi/issues/8753) **0.84.3 regression: `reasoning_details` echo breaks Venice GLM** | Deterministic reasoning degeneration across turns when `preservedReasoningDetails` echoed back. | 3 comments — regression in recent release |
| [#8829](https://github.com/earendil-works/pi/issues/8829) **`wrapUIPromptContext` loses prototype methods via spread** | Breaks class-based UI implementations; only plain-object UIs survive the copy. | 3 comments — SDK extensibility bug |
| [#8843](https://github.com/earendil-works/pi/issues/8843) **Lazy session resume: 10s+ cold start on large sessions** | Full JSONL parse blocks interactivity; cost grows linearly with session age. | 1 comment — startup performance regression |
| [#8831](https://github.com/earendil-works/pi/issues/8831) **NVDA screen reader inconsistency in interactive mode** | `pi -p` works reliably; interactive TUI output reads inconsistently. Accessibility gap. | 2 comments — a11y concern |

## 4. Key PR Progress

| PR | Summary | Status |
|----|---------|--------|
| [#8840](https://github.com/earendil-works/pi/pull/8840) **feat: `pi web` GUI with full TUI parity** | Browser GUI served from token-gated local HTTP + WebSocket; reuses `AgentSessionRuntime`. Major new interface. | **Closed** (merged) |
| [#8844](https://github.com/earendil-works/pi/pull/8844) **feat(ai): Tencent Token Plan Individual provider** | Adds `tc-code-latest`, DeepSeek v4 flash/pro, GLM-5.2, Minimax-m2.7 via `api.lkeap.cloud.tencent.com`. | **Closed** (merged) |
| [#8818](https://github.com/earendil-works/pi/pull/8818) **fix(ai): omit Responses `tool_choice` when no tools** | Fixes xAI 400 on compaction; sends `tools: []` for Grok. | **Closed** (merged) |
| [#8812](https://github.com/earendil-works/pi/pull/8812) **fix: flush extension provider registrations before model resolution** | Ensures `pi.registerProvider()` extensions are available during initial model selection. | **Closed** (merged) |
| [#8811](https://github.com/earendil-works/pi/pull/8811) **feat: startup composer** | `StartupComposer` captures input during startup (trust checks, project selection) and carries into interactive mode. | **Closed** (merged) |
| [#8725](https://github.com/earendil-works/pi/pull/8725) **fix: settle active turn before in-memory fork** | Prevents `toolResult` landing in replacement session; fixes resource disposal under wrong session ID. | **Closed** (merged) |
| [#8297](https://github.com/earendil-works/pi/pull/8297) **fix: exclude superseded retry attempts from restored context** | Records replaced assistant entry IDs; excludes from provider context, compaction, token budgets, summaries. | **Closed** (merged) |
| [#8828](https://github.com/earendil-works/pi/pull/8828) **fix(tui): detect Zed terminal capabilities** | Adds capability detection for Zed (Alacritty-based): hyperlinks, true color, no images; documents keymaps. | **Open** |
| [#8262](https://github.com/earendil-works/pi/pull/8262) **feat: dispatch hooks on every turn-start path** | Ensures `input` hook and `before_agent_start` fire for `sendCustomMessage(triggerTurn: true)`. | **Open** |
| [#8112](https://github.com/earendil-works/pi/pull/8112) **fix: realpath extension entries before jiti import** | Resolves pnpm symlink resolution issues for extension entry points. | **Open** |

## 5. Feature Request Trends
- **Multi-profile / isolated state management** (#3966, #8834): Users want first-class `--profile` support and opt-in package namespaces (`pi.namespace`) to keep work, personal, and local-LLM environments cleanly separated.
- **Provider catalog expansion** (#8836, #8844): Demand for built-in providers (Command Code, Tencent, Minimax, DeepSeek variants) to avoid third-party plugin overhead.
- **Extension API surface growth** (#8533, #8832, #8812): Requests for skill visibility controls, lifecycle hooks on reload, and earlier provider registration.
- **Startup/Resume UX** (#8843, #8811): Lazy session loading and input capture during startup to eliminate cold-start latency.
- **Accessibility & terminal compatibility** (#8831, #8828, #8825): Screen-reader support, Zed/terminal capability detection, `NO_COLOR` compliance.

## 6. Developer Pain Points
- **TUI rendering fragility**: Streaming corruption (#8584), markdown soft-break regression (#8751), thinking-trail line breaks (#8780), table cell SGR resets (#8825), and autocomplete ranking quirks (#8813) point to a brittle rendering pipeline.
- **Context & token accounting bugs**: Output reservation ignored (#8061), superseded retries polluting context (#8297), cache TTL violations (#8463) — core context logic needs hardening.
- **Provider interop churn**: xAI tool_choice (#8820), DeepSeek reasoning_content echo (#8838), Minimax anthropic-messages (#8839), Bedrock image hoisting (#8643), LMStudio image support (#8713) — each provider needs bespoke fixes.
- **Windows/Path normalization**: Backslashes in system prompts (#8841), image fallback paths (#8809), PowerShell stderr misclassification (#8842) — cross-platform path handling remains leaky.
- **Extension lifecycle gaps**: Reload skips `session_start`/`resources_discover` with empty bindings (#8832), provider registration race (#8812), symlink resolution (#8112) — extension SDK feels second-class.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-30

## 1. Today's Highlights
The community is actively resolving critical stability issues: a persistent **120-second stream timeout** (#5975, 14 comments) affecting v0.19.3+, and a **llama.cpp grammar parsing regression** in v0.22.3 (#10520, #10530) that breaks tool search with MCP servers. Meanwhile, the **Web Shell and VS Code integrations** received a wave of fixes for rendering, session handling, and i18n bugs. CI/CD hardening continues with dedicated agent runners and ENOSPC mitigation for self-hosted fleets.

---

## 2. Releases
No new releases in the last 24 hours.

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Summary | Why It Matters | Status |
|-------|---------|----------------|--------|
| [#5975](https://github.com/QwenLM/qwen-code/issues/5975) | **API Error: No stream activity for 120s after 19 chunks** — frequent timeouts post v0.19.3 upgrade | Highest-comment issue (14); blocks interactive use; latency regression in core streaming | OPEN (P2) |
| [#10520](https://github.com/QwenLM/qwen-code/issues/10520) | **toolSearch threshold > 0 causes llama.cpp 400 "failed to parse grammar"** with MCP tools | Breaks local model + MCP workflows; threshold=0 works; regression in v0.22.3 | OPEN (P2) |
| [#10530](https://github.com/QwenLM/qwen-code/issues/10530) | **400 Failed to initialize samplers in 0.22.3** — Qwen 3.8/3.6 models fail, Gemma works | Same root cause as #10520?; blocks local model users; Pi/OpenCode unaffected | OPEN (P2) |
| [#8625](https://github.com/QwenLM/qwen-code/issues/8625) | **Windows terminal: Chinese input shows pinyin unclearly** | Affects CJK developers; 8 comments; UX blocker for non-Latin input | CLOSED (P2) |
| [#8172](https://github.com/QwenLM/qwen-code/issues/8172) | **Agent Team: teammate messages queue for entire long turn**, not just next response | Delays inter-agent communication; architectural issue in `TeamManager` | CLOSED (P2) |
| [#10208](https://github.com/QwenLM/qwen-code/issues/10208) | **Agent Team: failed concurrent spawn persists ghost member** | Roster corruption under race conditions; multi-agent reliability | CLOSED (P2) |
| [#8721](https://github.com/QwenLM/qwen-code/issues/8721) | **`npm test` fails: unknown flag `--parallel`** in workspaces command | Blocks local development; CI may mask it | CLOSED (P2) |
| [#9025](https://github.com/QwenLM/qwen-code/issues/9025) | **Keyless Vertex AI not inferred from env** — headless ADC runs exit with no auth | Breaks serverless/headless Vertex AI deployments | CLOSED (P2) |
| [#10444](https://github.com/QwenLM/qwen-code/issues/10444) | **Perf: adopt pnpm + fast worktree bootstrap** (dependency-only, no build/Husky) | Reduces CI/dev loop latency; high-leverage DX improvement | OPEN (P2) |
| [#10035](https://github.com/QwenLM/qwen-code/issues/10035) | **CI: prevent transient ENOSPC on high-concurrency self-hosted runners** | `npm ci` fails with "no space left on device"; affects fleet reliability | OPEN (P2) |

---

## 4. Key PR Progress (Top 10 by Significance)

| PR | Title | Description | Status |
|----|-------|-------------|--------|
| [#10427](https://github.com/QwenLM/qwen-code/pull/10427) | **fix(hooks): close four trust-boundary holes in hook execution** | HTTP hooks no longer follow redirects; `command` hooks validate argv; network egress gated; config-driven execution sandboxed | OPEN (autofix/takeover) |
| [#10347](https://github.com/QwenLM/qwen-code/pull/10347) | **feat(core): auto-retry transient network errors (EOF) where Ctrl+Y unavailable** | Classifies wrapped 4xx EOF as retryable transport error; enables bounded auto-retry in non-interactive contexts | OPEN (review/self-reported) |
| [#10171](https://github.com/QwenLM/qwen-code/pull/10171) | **feat(goal): let model propose a Goal user approves in dialog** | Adds `propose_goal` tool; user sees full objective in approval dialog; mirrors `/goal set` UX | OPEN (autofix/takeover) |
| [#10283](https://github.com/QwenLM/qwen-code/pull/10283) | **feat(cli): select output style via `general.outputStyle` or `--output-style`** | First consumer of #9565’s built-in styles (`Concise`, `Proactive`, `Explanatory`); case-insensitive | OPEN (autofix/takeover) |
| [#10226](https://github.com/QwenLM/qwen-code/pull/10226) | **feat: shell support optional worktree** | Enables Git worktree-based isolation for shell sessions; review seeks test plan | OPEN (autofix/takeover) |
| [#10425](https://github.com/QwenLM/qwen-code/pull/10425) | **feat(web-shell): derive session issue bindings from PR closing references** | Daemon sweeps bound PRs for `Fixes #N` links; attaches issue state (open/completed/not-planned) to session | OPEN (autofix/takeover) |
| [#10390](https://github.com/QwenLM/qwen-code/pull/10390) | **feat(web-shell): unblock git update on dirty working tree** | Branch picker shows resolution panel (stash/commit/discard) instead of dead-end error | OPEN (autofix/takeover) |
| [#10403](https://github.com/QwenLM/qwen-code/pull/10403) | **feat(serve): Enable full API access on trusted loopback** | Loopback + no token + no `--require-auth` → operator API without `Authorization` header | OPEN (review/self-reported) |
| [#10428](https://github.com/QwenLM/qwen-code/pull/10428) | **fix(ci): run `/resolve` without container sandbox; pin CLI version** | Restores `/resolve` functionality; moves credentialed half to agent-isolated runner | OPEN (autofix/takeover) |
| [#10537](https://github.com/QwenLM/qwen-code/pull/10537) | **ci: isolate agent workflows on dedicated `ecs-agent` runners** | Long-running PR review/Autofix jobs routed to dedicated pool; trusted CLI build stays on general pool | OPEN |

---

## 5. Feature Request Trends
From issues and PRs, the strongest community signals are:

1. **Agent Team / Multi-Agent Maturity** — Message delivery semantics (#8172), spawn race fixes (#10208), background task errors (#10073), session routing (#9529), compensating writes (#10297).
2. **Web Shell & VS Code Parity** — i18n (lang attribute #10373), session overlay locks (#10405), re-render loops (#10406), selection UI (#8617), DingTalk channel routing (#10248), dirty-tree git ops (#10390), PR-linked issues (#10425).
3. **Output & UX Customization** — Output styles (#10283), Goal proposal (#10171), session rotation bounds (#8927), VP bottom-alignment (#9305).
4. **Local Model / MCP Integration** — Grammar parsing with tool search (#10520, #10530), sampler

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-30

## 1. Today's Highlights
The v0.9.12 release cycle is in its final integration phase with all P0 blockers resolved; the tracker issue (#5573) shows 22 comments of coordination activity. A critical sandbox regression surfaced (#5723): the agent shell sets `NoNewPrivs`, breaking `sudo` and existing deployment workflows — marked High severity. Meanwhile, crate decomposition (EPIC-005, #5316) continues its multi-week refactor with 19 comments of design discussion.

---

## 2. Releases
**No new releases in the last 24 hours.**  
v0.9.12 is targeting release once the integration branch (`codex/v0912-integration-20260823`) passes full CI (docs, tag, assets, npm, website). See tracker **#5573**.

---

## 3. Hot Issues (10 Noteworthy)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5573](https://github.com/Hmbown/CodeWhale/issues/5573) | **v0.9.12 milestone tracker** | Central coordination for the imminent release; lists all P0–P2 items with ownership. | 22 comments, active triage |
| [#5723](https://github.com/Hmbown/CodeWhale/issues/5723) | **Agent shell sets `NoNewPrivs`, blocking `sudo`** | High-severity regression: breaks production deployment workflows that rely on privilege escalation. | New (1 comment), urgent |
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | **EPIC-005: TUI Crate Decomposition** | Umbrella epic splitting the monolithic TUI crate — foundational for maintainability and parallel workstreams. | 19 comments, long-running |
| [#5350](https://github.com/Hmbown/CodeWhale/issues/5350) | **Simplify third-party model config with templates** | UX gap: users manually craft Base URL/model/key for providers like OpenCode Zen, Agnes, Moonshot; templates + test-connection would cut setup to <1 min. | 7 comments, closed (impl likely in PR) |
| [#5715](https://github.com/Hmbown/CodeWhale/issues/5715) | **Session recovery invisible to model after force-quit** | Work persists on disk but the agent has no context on restart — reported by users in WeChat group. | New, 0 comments, high impact |
| [#5713](https://github.com/Hmbown/CodeWhale/issues/5713) | **Support `wire = "responses" \| "anthropic"` for openai-compatible** | Unblocks Responses API and Anthropic Messages wire formats for custom providers (currently ignored). | 1 comment, fix in PR #5719 |
| [#5579](https://github.com/Hmbown/CodeWhale/issues/5579) | **Plugin UX parity with Claude Code** | Requests proactive recommendations, discoverable reload, hot-reload — plugin system feels second-class today. | 3 comments, closed (work landed) |
| [#1261](https://github.com/Hmbown/CodeWhale/issues/1261) | **Pane zooming support** | Long-standing UX pain: tables/plan panes truncate; users can't view full content without resizing terminal. | 2 comments, closed (likely shipped) |
| [#2094](https://github.com/Hmbown/CodeWhale/issues/2094) | **`/hunt` jurisdiction: configurable LLM-as-judge** | Ships a full verdict system (strict/evidentiary/permissive) for code review / quality gates. | 1 comment, closed (landed) |
| [#5718](https://github.com/Hmbown/CodeWhale/issues/5718) | **Retire Keychain product path + single-worker spawn** | Cleanup from PR #5632: remove legacy OS-keyring code path, consolidate to single-worker model. | New, 0 comments, architectural |

---

## 4. Key PR Progress (10 Important)

| # | Title | Type | Status | Summary |
|---|-------|------|--------|---------|
| [#5717](https://github.com/Hmbown/CodeWhale/pull/5717) | `refactor(tui): adopt command shapes in project group (FEAT-021)` | Refactor | Open | Converts `/init`, `/lsp`, `/share`, `/goal` to external command shapes (FEAT-014/015 pattern). |
| [#5725](https://github.com/Hmbown/CodeWhale/pull/5725) | `feat(providers): Concentrate as first-class opt-in BYOK Responses gateway` | Feature | Open | Adds Concentrate (`api.concentrate.ai/v1`) as a built-in provider — no parallel secret store/router. |
| [#5724](https://github.com/Hmbown/CodeWhale/pull/5724) | `fix(sandbox): match read deny-list against resolved path` | Bugfix | Open | Greens shared macOS/Windows CI (6 macOS + Windows failures on `main` at `20e957406`). |
| [#5721](https://github.com/Hmbown/CodeWhale/pull/5721) | `feat(cli): Codewhale-account machine tokens (CODEWHALE_API_KEY)` | Feature | Open | CLI authenticates via `CODEWHALE_API_KEY` — no session file, no browser; follows control-plane contract. |
| [#5719](https://github.com/Hmbown/CodeWhale/pull/5719) | `fix(custom): wire = responses\|anthropic + opencode-zen muse-spark` | Bugfix | Open | Rescue of #5716; implements `wire` dialect for openai-compatible (credits @whp233). |
| [#5722](https://github.com/Hmbown/CodeWhale/pull/5722) | `feat(tui): wire header group's pod + notifications segments` | Feature | Open | Renders live `pod n/m` capacity and notification chips in topbar per shipped design language. |
| [#5703](https://github.com/Hmbown/CodeWhale/pull/5703) | `feat(tui): match Operate to landed CWC OperateRecord` | Feature | Open | Aligns `cw operate` with camelCase `burnRate`, `leadPlan`, `pace`, `cancelled`; adds `/keepalive`, `/cancel`. |
| [#5712](https://github.com/Hmbown/CodeWhale/pull/5712) | `feat(cli): cloud-dispatch remote runner — sandbox to forge PR` | Feature | Open | Completes `/dispatch`: confirmed jobs run cloud agent in sandbox, open forge PR, teardown on cancel. |
| [#5720](https://github.com/Hmbown/CodeWhale/pull/5720) | `feat(web): Moonshot and Kimi native search` | Feature | Open | Rescue of #5686; adds native search for Moonshot/Kimi providers (authorship preserved). |
| [#5661](https://github.com/Hmbown/CodeWhale/pull/5661) | `fix(tui): make context pressure an agent directive` | Bugfix | Closed | Turns context-pressure warning from decorative into a model-facing directive (agent now respects it). |

---

## 5. Feature Request Trends
From the issue corpus, three clear directions dominate:

1. **Provider onboarding & configurability** — Pre-built templates for third-party providers (OpenCode Zen, Agnes, Moonshot, Kimi, Concentrate), test-connection button, and wire-format support (`responses`, `anthropic`) for `openai-compatible` kind. (#5350, #5713, #5725)
2. **Agent-environment parity** — Fix sandbox regressions (`NoNewPrivs` blocking `sudo`), shell detection on Windows (PowerShell/cmd), and session recovery visibility after force-quit. (#5723, #1754, #5715)
3. **Plugin & extensibility maturity** — Hot-reload, proactive recommendations, discoverable reload, marketplace parity with Claude Code. (#5579, #5316 crate decomposition enables this)

---

## 6. Developer Pain Points
| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Third-party provider setup friction** | High | Manual Base URL/model/key entry; `not checked`/`cache failed` states; no embedded docs. (#5350) |
| **Sandbox breaking legitimate workflows** | Critical (new) | `NoNewPrivs` blocks `sudo` — breaks existing CI/CD and deployment scripts. (#5723) |
| **Session context loss on crash/force-quit** | High | Model cannot see prior work despite disk persistence; users surprised. (#5715) |
| **Pane/content truncation** | Medium | Tables, plans, todos cut off; no zoom/full-view. (#1261) |
| **Windows shell mismatch** | Medium | AI generates bash commands; host runs PowerShell/cmd → failures. (#1754) |
| **Plugin system feels incomplete** | Medium | No hot-reload, no proactive suggestions, reload hidden. (#5579) |
| **i18n gaps in commands/modals/widgets** | Low-medium | Hardcoded English strings remain after `zh-Hant` addition. (#790) |

---

*Digest generated from GitHub data (issues/PRs updated 2026-08-29 → 2026-08-30). Links point to `Hmbown/CodeWhale` repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*