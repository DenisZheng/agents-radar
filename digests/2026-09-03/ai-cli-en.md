# AI CLI Tools Community Digest 2026-09-03

> Generated: 2026-09-03 02:29 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report (2026-09-03)

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **enterprise-grade platforms** (Claude Code, GitHub Copilot CLI, OpenAI Codex) prioritizing policy controls, auditability, and Windows parity, and **hacker-centric runtimes** (OpenCode, Pi, CodeWhale, Qwen Code) investing in session persistence, plugin architectures, and provider-agnostic internals. All tools are converging on **MCP as the universal tool protocol**, yet implementations remain fragile—connection flakiness, OAuth thrashing, and sub-agent tool loss appear in every tracker. A third tier (Gemini CLI, Kimi) is in **security hardening and maintenance mode**, addressing CVEs and UX polish rather than net-new capabilities. The dominant cross-cutting theme: **reliability over features**—memory leaks, silent failures, and platform-specific regressions (especially Windows) consume disproportionate engineering bandwidth.

---

## 2. Activity Comparison (2026-09-03)

| Tool | Releases (24h) | Hot Issues Tracked | PRs Updated/Merged | Primary Focus Today |
|------|----------------|-------------------|---------------------|---------------------|
| **Claude Code** | 1 (v2.1.259) | 10 | 4 | Enterprise policy, Windows regression triage |
| **OpenAI Codex** | 1 (v0.153.0 + alphas) | 10 | 10+ merged | Windows parity, MCP/OAuth, Guardian safety, TUI collab |
| **Gemini CLI** | 0 | 10 | 15+ closed (security) | CVE patching, sandbox reliability, prefix-caching |
| **GitHub Copilot CLI** | 2 patches (v1.0.83-2/3) | 10 | 0 | OOM crises, MCP fragility, custom-agent resume |
| **Kimi Code CLI** | 0 | 3 (all closed) | 0 | Maintenance: Yolo transparency, XDG, Windows cancel |
| **OpenCode** | 1 (v1.18.27) | 10 | 10 | /goal lifecycle, model auto-discovery, plugin SDK |
| **Pi** | 0 | 10 | 10 (4 merged) | AgentHarness runtime, ToolPolicy, session durability |
| **Qwen Code** | 1 (live-host-v0.2.0) | 10 | 10 | OpenTUI migration, daemon shell guard, memory system |
| **CodeWhale** | 0 (v0.9.12 milestone) | 10 | 10+ | Fleet UX, provider neutrality, crate decomposition |

> **Note**: "Hot Issues" = top 10 by community signal in each digest. PR counts reflect notable merges/updates in 24h.

---

## 3. Shared Feature Directions (Cross-Tool Convergence)

| Requirement | Tools Demanding It | Specific Needs |
|-------------|-------------------|----------------|
| **Session persistence & mobility** | Claude Code (#49790), OpenAI Codex (#23200, #38144), OpenCode (#27167), Pi (AgentHarness), CodeWhale (#5271, #5575) | SSH reconnect/resume, cross-device session linking, fork/resume without writer lock, fleet session peek |
| **Enterprise policy & managed config** | Claude Code (managedMcpServers ✅), OpenAI Codex (daemon updates), GitHub Copilot (model-policy: required), OpenCode (provider config), Pi (ToolPolicy) | Org-wide MCP distribution, permission prompts control, fallback model lists, host-enforced tool authorization |
| **MCP/OAuth robustness** | All 9 tools | Connection flakiness at startup, OAuth cache thrashing, sub-agent tool loss, dual-era protocol handshake, streamable HTTP refresh |
| **Windows desktop parity & stability** | Claude Code (3 critical bugs), OpenAI Codex (8+ issues), GitHub Copilot (ConstrainedLanguage, path sep), OpenCode (backslash paths), CodeWhale (non-Latin usernames) | GPU crashes, always-on-top, auto-update orphans, display scaling, shell selection, installer kills CLI |
| **Memory / resource stability** | GitHub Copilot (4 OOM issues), OpenAI Codex (handle leaks), Gemini CLI (7–24 GB heaps), OpenCode (compaction loops), Qwen Code (pulse storm DoS) | Handle leak fixes, bounded buffers, compaction loop guards, background monitoring backpressure |
| **Provider-agnostic / multi-provider support** | OpenAI Codex, OpenCode (#6231, #46941), Pi (#5588, #8818), CodeWhale (#5588), Qwen Code (#10080) | Auto-discover models from OpenAI-compatible endpoints, xAI/Bedrock/Ollama quirks, grammar normalization |
| **TUI/UX modernization** | OpenAI Codex (Vim undo/redo), OpenCode (goal-loop plugin), Pi (collapsible history), Qwen Code (OpenTUI migration), CodeWhale (fleet workbar) | Composer reliability, session forms, theme systems, mid-turn control, plugin marketplace UI |

---

## 4. Differentiation Analysis

| Dimension | Enterprise Platforms | Hacker Runtimes | Maintenance Tier |
|-----------|---------------------|-----------------|------------------|
| **Tools** | Claude Code, GitHub Copilot CLI, OpenAI Codex | OpenCode, Pi, CodeWhale, Qwen Code | Gemini CLI, Kimi |
| **Target User** | Org developers, CI/automation, compliance teams | Power users, local-LLM enthusiasts, plugin authors | Existing users, security-conscious teams |
| **Architecture** | Electron/MSIX desktop + cloud proxy | Rust/Go/Tauri core + plugin SDK | TypeScript/Node (Gemini), Rust (Kimi) |
| **Session Model** | Cloud-tethered (Cowork), limited offline | Local-first, durable JSONL, fork/resume | Mixed; Gemini cloud-heavy, Kimi local |
| **Extensibility** | MCP servers, managed settings | Plugin SDK (OpenCode), extensions (Pi), skills (CodeWhale), output styles (Qwen) | Skills/sub-agents (Gemini), Yolo mode (Kimi) |
| **Safety Model** | Guardian scoring, permission prompts, bypassPermissions | ToolPolicy (Pi), lane TTL (CodeWhale), shell guard (Qwen) | Safety-filter false positives (Claude), CVEs (Gemini) |
| **Release Cadence** | Weekly patches + enterprise features | Milestone-driven (v0.9.12, OpenTUI) | Security-driven, infrequent features |

**Key Technical Divergences**:
- **Session storage**: Cloud-synced (Claude, Codex) vs. local JSONL with fork semantics (OpenCode, Pi, CodeWhale)
- **Agent orchestration**: Single-thread + sub-agents (Claude, Codex, Copilot) vs. fleet/rail UX (CodeWhale, OpenCode /goal)
- **Provider abstraction**: Hardcoded gates being removed (CodeWhale 18 gates, Pi xAI/Bedrock fixes) vs. still emerging (OpenCode auto-discover, Qwen grammar normalization)

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum / Rapid Iteration** | **OpenAI Codex**, **OpenCode**, **Pi**, **CodeWhale**, **Qwen Code** | 10+ PRs/day, milestone-driven releases, architectural refactors (AgentHarness, OpenTUI, crate decomposition), plugin SDKs shipping |
| **Enterprise Velocity / Stability Focus** | **Claude Code**, **GitHub Copilot CLI** | Weekly patches, but dominated by regression triage (Windows, MCP, OOM); feature work gated by stability debt |
| **Security Hardening / Maintenance** | **Gemini CLI**, **Kimi Code CLI** | 15+ security PRs/day (Gemini), zero feature PRs (Kimi); issue velocity low, CVE response high |
| **Community Engagement (👍/comments)** | CodeWhale (#5573: 23 comments, 140 👍 on /goal), OpenAI Codex (#23200: 56 👍), Claude Code (#36151: 675 👍 mobile), OpenCode (#27167: 140 👍) | High engagement on session persistence, mobile/remote, multi-account—**mobility is the #1 unmet need** |

**Maturity Indicators**:
- **Most production-ready**: GitHub Copilot CLI (v1.0.83+), Claude Code (v2.1 enterprise features)
- **Architecturally boldest**: Pi (AgentHarness recoverable runtime), CodeWhale (fleet UX + provider neutrality)
- **Highest technical debt**: Windows desktop stacks (Claude, Codex, Copilot all have critical unfixed regressions)

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **MCP is the de facto standard—but implementations are brittle** | Every tool reports connection flakiness, OAuth thrashing, sub-agent tool loss | Invest in **MCP connection resilience** (retry, health checks, credential caching) before building custom integrations |
| **Local-first, durable sessions beat cloud-tethered for automation** | OpenCode, Pi, CodeWhale investing heavily in fork/resume, JSONL persistence, AgentHarness | For CI/headless workflows, **prefer tools with local session durability** over cloud-proxy dependent ones |
| **Windows is the compatibility tax** | 3+ critical bugs per major tool; MSIX/Electron/Tauri all struggling | Budget **20–30% extra QA** for Windows; consider WSL2-first development for CLI tools |
| **Provider neutrality is a competitive moat** | CodeWhale (2,281 lines removed), Pi (xAI/Bedrock/Ollama fixes), OpenCode (auto-discover) | Tools that **abstract provider quirks** win multi-model workflows; avoid hardcoded provider logic |
| **Memory/resource leaks are the #1 reliability killer** | 4+ tools with OOM/handle-leak issues in 24h; Gemini 24 GB heaps, Copilot 31k libuv handles | **Require bounded buffers, leak detection in CI** for any production deployment |
| **Fleet/multi-agent UX is the next frontier** | CodeWhale agents rail, OpenCode /goal, Pi lanes, Claude session linking | **Design for agent collectives**, not single-threaded chat; plan for session peek, mid-turn control, role posture |
| **Security hygiene is table stakes** | 3 CVEs patched in Gemini in 24h; plaintext credentials (Claude), shell injection (Gemini), path traversal (Pi) | **Audit credential storage, command sandboxing, dependency scanning** before enterprise adoption |

---

## Bottom Line for Developers

| If You Need... | Lean Toward |
|----------------|-------------|
| **Enterprise policy, audit trails, cloud sync** | Claude Code (managedMcpServers ✅), GitHub Copilot CLI (model-policy) |
| **Local-first automation, durable sessions, plugin extensibility** | OpenCode (/goal + plugin SDK), Pi (AgentHarness + ToolPolicy) |
| **Multi-model workflows, provider agnosticism** | CodeWhale (provider neutrality), OpenCode (auto-discover), Pi (xAI/Bedrock/Ollama) |
| **Cutting-edge TUI/fleet UX, willing to track milestones** | CodeWhale (v0.9.12), Qwen Code (OpenTUI) |
| **Stable, security-hardened, low-churn** | Gemini CLI (CVE response), Kimi (maintenance mode) |

**Watch This Space**: The **AgentHarness / ToolPolicy** pattern (Pi) and **/goal session lifecycle** (OpenCode) are the most transferable architectural innovations—expect adoption across tools in Q4 2026.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-09-03)

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator`: fix `run_eval.py` 0% recall | Fixes the evaluation harness that incorrectly reports 0% recall for all skill descriptions, breaking the description-optimization loop | Core infrastructure bug affecting all skill creation; 10+ independent reproductions; blocks skill-quality iteration | **OPEN** |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Typographic QC for AI-generated documents: prevents orphans, widows, numbering misalignment | Addresses universal pain point in AI document generation; high practical value | **OPEN** |
| 3 | **[#1628](https://github.com/anthropics/skills/pull/1628)** `hivemind` | Zero-cost multi-agent orchestration: delegates mechanical work to headless opencode workers on free models | Novel architecture—expensive model stays planner/reviewer; strong community interest in cost optimization | **OPEN** |
| 4 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` | Mechanical file verification → four-dimension reasoning audit (damage-severity priority) | Universal quality gate; works across any stack/model; v1.3.0 release candidate | **OPEN** |
| 5 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing stack: Trophy model, AAA, React Testing Library, contracts, E2E, property-based | Fills a major gap—no existing skill covers full testing philosophy + practice | **OPEN** |
| 6 | **[#568](https://github.com/anthropics/skills/pull/568)** `servicenow` | Broad ServiceNow platform assistant: ITSM, ITOM, ITAM/SAM, FSM, SecOps, IntegrationHub | Enterprise demand; 5-month active discussion; broad scope beyond scripting | **OPEN** |
| 7 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills: 5-dimension quality scoring (structure, examples, resources, triggers, safety) + security audit | Enables skill marketplace quality control; foundational for ecosystem trust | **OPEN** |
| 8 | **[#1615](https://github.com/anthropics/skills/pull/1615)** `scnet-hpc` | SCNet HPC cluster operations: profile-based SSH, Slurm workflows, cluster discovery | Niche but detailed HPC workflow automation; active maintainer engagement | **OPEN** |

> **Note:** All PRs above are **OPEN** as of 2026-09-03. Several critical bug-fix PRs (#1099, #1050, #538, #541, #539, #1602) also have sustained activity but are infrastructure fixes rather than new skills.

---

## 2. Community Demand Trends — From Issues

| Rank | Theme | Representative Issues | Signal Strength |
|------|-------|----------------------|-----------------|
| 1 | **Trust & Security Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43💬, 2👍) — community skills masquerading as official `anthropic/` namespace; [#1175](https://github.com/anthropics/skills/issues/1175) — SharePoint ACLs in skills | **Critical** — namespace impersonation enables privilege escalation |
| 2 | **Org-Level Skill Distribution** | [#228](https://github.com/anthropics/skills/issues/228) (16💬, 8👍) — native org-wide sharing in Claude.ai vs. manual file transfer | **High** — workflow friction for teams |
| 3 | **Evaluation Infrastructure Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12💬, 7👍) — `claude -p` never triggers skills (0% trigger rate); [#1390](https://github.com/anthropics/skills/issues/1390) — MCP builder eval scores 0/N | **High** — blocks skill quality iteration |
| 4 | **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) — `claude-api` injects ~156k tokens in one call; [#1329](https://github.com/anthropics/skills/issues/1329) — `compact-memory` symbolic notation proposal | **High** — token economics at scale |
| 5 | **Quality Gates & Governance** | [#1385](https://github.com/anthropics/skills/issues/1385) (4💬, 1👍) — 3-gate pipeline (calibration → adversarial review → verification); [#412](https://github.com/anthropics/skills/issues/412) — agent-governance skill (closed) | **Emerging** — demand for structured AI output verification |
| 6 | **MCP/Skill Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) — expose skills as MCPs; [#29](https://github.com/anthropics/skills/issues/29) — Bedrock support | **Steady** — integration flexibility |
| 7 | **Duplicate/Plugin Hygiene** | [#189](https://github.com/anthropics/skills/issues/189) (6💬, 9👍) — `document-skills` & `example-skills` install identical content | **Maintenance** — plugin packaging clarity |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval fix | **Blocker for all skill development**; 10+ reproductions; multiple contributors (MartinCajiao, joshuawowk, gstreet-ops) converging on Windows + logic fixes |
| **[#1602](https://github.com/anthropics/skills/pull/1602)** | Evaluation serialization & benchmark fixes | Cross-cutting reliability: MCP builder, encoding, metrics, script stability; authored by AbhiPra24 with broad scope |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Universal applicability (every AI-generated doc); clear spec; author (PGTBoos) responsive |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Fills a catalog gap; comprehensive scope; author (4444J99) iterating on feedback |
| **[#83](https://github.com/anthropics/skills/pull/83)** | `skill-quality-analyzer` / `skill-security-analyzer` | Meta-infrastructure for marketplace; enables automated review; aligns with #492 security concerns |
| **[#1628](https://github.com/anthropics/skills/pull/1628)** | `hivemind` | Novel cost-optimization architecture; leverages free-model workers; high community curiosity |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` | Universal quality gate; mechanical + reasoning layers; v1.3.0 near-release |
| **[#568](https://github.com/anthropics/skills/pull/568)** | `servicenow` | Enterprise breadth; 5-month iteration; covers ITSM/ITOM/SecOps/ITAM — high commercial value |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community’s most concentrated demand is for trustworthy, evaluatable, and composable skill infrastructure—specifically: fixing the broken evaluation loop that prevents skill quality iteration, establishing namespace security to prevent impersonation, and building meta-skills (quality analyzers, self-audit, multi-agent orchestration) that make the ecosystem self-governing and cost-efficient at scale.**

---

# Claude Code Community Digest — 2026-09-03

---

## 1. Today's Highlights

- **v2.1.259 released** with two enterprise-focused features: `managedMcpServers` for organization-wide MCP server distribution and `--permission-prompts none` for unattended headless execution.
- **Windows Desktop stability crisis deepens**: three high-impact bugs (GPU crash, always-on-top window, stealth-update orphaned processes) dominate community discussion, with the always-on-top issue alone gathering 200+ 👍 across duplicates.
- **Cowork/Cloud git proxy regression** blocks pushes to non-authorized repos even with user PATs, breaking established workflows for remote development teams.

---

## 2. Releases

### v2.1.259
| Change | Impact |
|--------|--------|
| `managedMcpServers` managed setting | Orgs can now push HTTP/SSE MCP servers to all users via policy (same schema as `.mcp.json`); command-based entries are ignored |
| `--permission-prompts none` | Headless CI/automation hosts can run fully unattended — any prompt-requiring action fails fast instead of blocking |

[View release](https://github.com/anthropics/claude-code/releases/tag/v2.1.259)

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#85891](https://github.com/anthropics/claude-code/issues/85891) | **Windows Desktop: window stuck always-on-top** (no disable setting) | Makes multitasking impossible; Windows counterpart to macOS #66516 | 65 comments, **145 👍** |
| [#80444](https://github.com/anthropics/claude-code/issues/80444) | **Windows Desktop: fatal GPU-process crash** in Browser tab (0x060C201E) | Crashes leave MSIX package unlaunchable until Repair; reproduced on two driver versions | 104 comments, 16 👍 |
| [#89680](https://github.com/anthropics/claude-code/issues/89680) | **Windows stealth auto-update leaves orphaned processes** → new version fails 0x80070020 until reboot | Silent updates break launch reliability; requires full reboot to recover | 8 comments |
| [#76248](https://github.com/anthropics/claude-code/issues/76248) | **Cowork git proxy blocks all pushes** to non-authorized repos; PAT pass-through broken | Breaks remote development workflows mid-session; regression ~10 Jul | 32 comments, 12 👍 |
| [#36151](https://github.com/anthropics/claude-code/issues/36151) | **Mobile: multi-account switching without shared email** | High-demand mobile UX gap; marked `invalid` but massive engagement | 169 comments, **675 👍** |
| [#49790](https://github.com/anthropics/claude-code/issues/49790) | **SSH remote sessions should survive client disconnect** (reconnect/resume) | Long-running remote tasks die on laptop close/network drop; no resume | 17 comments, 41 👍 |
| [#91296](https://github.com/anthropics/claude-code/issues/91296) | **`defaultMode: bypassPermissions` ignored in settings.local.json** + missing from Shift+Tab cycle | Security/automation workflows broken; setting silently dropped | 4 comments, 3 👍 |
| [#84698](https://github.com/anthropics/claude-code/issues/84698) | **Desktop: unrequested background `git fetch` on diff/commit refresh** | Untraceable network activity; no setting to disable; privacy/bandwidth concern | 4 comments, 2 👍 |
| [#73582](https://github.com/anthropics/claude-code/issues/73582) | **Store API credentials in OS secret store** (not plaintext) | Keys/tokens written to `~/.claude/` in plaintext; security hygiene gap | 3 comments, 4 👍 |
| [#73770](https://github.com/anthropics/claude-code/issues/73770) | **Statusline: expose per-model weekly rate limits** (Opus/Sonnet/Fable) | Custom statuslines can’t show same meters as `/status` | 2 comments, 7 👍 |

> **Note**: Always-on-top duplicates [#66516](https://github.com/anthropics/claude-code/issues/66516) (macOS, closed) and [#87895](https://github.com/anthropics/claude-code/issues/87895) (Windows, closed) show this is a cross-platform regression.

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#87079](https://github.com/anthropics/claude-code/pull/87079) | **Open** | **Security fix**: `**` glob patterns now match zero-depth paths in `security-guidance` plugin — previously `**/*.ts` silently excluded top-level files |
| [#61691](https://github.com/anthropics/claude-code/pull/61691) | **Open** | Diagnostic/repair script for GitHub MCP connector showing "Connected" but exposing zero tools (Windows) |
| [#41938](https://github.com/anthropics/claude-code/pull/41938) | **Closed** | Added Linux/macOS Bash script for DevContainer startup (previously Windows-only PowerShell) |
| [#86537](https://github.com/anthropics/claude-code/pull/86537) | **Open** | Trivial: fix duplicated word "to to" in CHANGELOG.md |

> Only 4 PRs updated in 24h — core team focus appears on triaging the Windows/Desktop regression wave.

---

## 5. Feature Request Trends

1. **Session persistence & mobility** — SSH reconnect (#49790), cross-device session linking (#76440), background session ID stability (#89946)
2. **Enterprise policy controls** — `managedMcpServers` delivered in v2.1.259; demand for more managed settings (secrets, permissions, update channels)
3. **Observability & cost transparency** — Per-model rate limits in statusline (#73770), billing incident clarity (#81703)
4. **Mobile parity** — Multi-account switching (#36151), feature parity with Desktop
5. **Security hygiene** — OS secret store for credentials (#73582), safety-filter false positives on legitimate research (#75713–75715)

---

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Evidence |
|------------|----------|
| **Windows Desktop reliability** | 3 critical bugs (GPU crash, always-on-top, stealth-update breakage) with high 👍; MSIX packaging / Electron 42 issues |
| **Cowork/Cloud git workflow breakage** | Proxy blocks PAT-authenticated pushes; mid-session regression; no rollback path |
| **Settings silently ignored** | `bypassPermissions` dropped (#91296), `effort` field undocumented (#91415), security-guidance globs broken (#87079) |
| **Background network activity without consent** | Unrequested `git fetch` (#84698), stealth updates spawning orphans (#89680) |
| **Safety filters blocking authorized work** | 4 cyber false positives in one week (#75713–75715, #75556) — session-halt severity |
| **Session state corruption on crash/update** | Sidebar projects reset to "Other", titles lost, sessions merged (#91528, #76430) |
| **Input/rendering glitches in TUI** | Stray backspace after idle (#78737), left-arrow agent view dead (#91652) |

---

*Generated from github.com/anthropics/claude-code data as of 2026-09-03. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-03

---

## 1. Today's Highlights

OpenAI Codex shipped **v0.153.0** with Vim-mode undo/redo (`u` / `Ctrl+R`) and plugin CLI enhancements, while closing **15+ PRs in a single day** covering Windows app-server daemon support, MCP OAuth coordination, Guardian scoring alignment, and TUI collaboration-mode discovery. The issue tracker remains dominated by Windows desktop stability (window management, auto-update launches, display scaling), quota/accounting anomalies, and remote/headless workflow gaps.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **rust-v0.153.0** | • Vim mode: undo (`u`) and redo (`Ctrl+R`) now preserve full drafts including pasted content/attachments ([#41941](https://github.com/openai/codex/pull/41941), [#42140](https://github.com/openai/codex/pull/42140))<br>• Plugin CLI: list, install, and remove commands added |
| **rust-v0.153.0-alpha.6** | Pre-release iteration |
| **rust-v0.153.0-alpha.5.1** | Pre-release iteration |
| **rust-v0.153.0-alpha.5** | Pre-release iteration |

> **Note**: The alpha series suggests rapid iteration toward the stable 0.153.0 release.

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#23200](https://github.com/openai/codex/issues/23200) | **Headless remote Linux hosts for Codex mobile** | Enables mobile control of always-on SSH servers without desktop app online; 56 👍, 22 comments | High demand for true remote-first workflows |
| [#39954](https://github.com/openai/codex/issues/39954) | **Windows + Android Remote reconnect loop** | Blocks mobile→Windows remote control entirely; 20 comments | Critical connectivity regression |
| [#41513](https://github.com/openai/codex/issues/41513) | **Windows Pets become click-through/undraggable** | Floating pets (Codey, custom) lose interactivity; 6 👍, 19 comments | Visible UX regression on Windows |
| [#41220](https://github.com/openai/codex/issues/41220) | **Abnormal quota depletion & usage accounting** | Cross-report tracker; users see credits drain faster than token evidence; 8 👍, 16 comments | Trust/billing concern affecting Pro/Plus tiers |
| [#39989](https://github.com/openai/codex/issues/39989) | **Deleted conversations persist in Recents (Windows)** | Full restart doesn't clear stale entries; 14 comments | Data hygiene / privacy annoyance |
| [#40782](https://github.com/openai/codex/issues/40782) | **macOS UI text thinner/blurry after 26.820.60940** | Regression on Apple Silicon; 4 👍, 13 comments | Visual quality regression |
| [#30385](https://github.com/openai/codex/issues/30385) | **Missing local threads in sidebar/search (Windows)** | Threads exist on disk & in `session_index.jsonl` but invisible; 12 comments | Core navigation broken |
| [#25826](https://github.com/openai/codex/issues/25826) | **Maximized window spills onto adjacent monitors** | Multi-monitor Windows 11; 15 👍, 12 comments | Long-standing window management bug |
| [#38144](https://github.com/openai/codex/issues/38144) | **`/fork` leaves parent thread with active writer** | Blocks resume in another terminal; 7 👍, 8 comments | CLI session management flaw |
| [#24224](https://github.com/openai/codex/issues/24224) | **Concurrent sessions leak workspace root across projects** | Context bleed between projects; 4 👍, 8 comments | Isolation/security concern |

---

## 4. Key PR Progress (10 Notable Merges/Updates)

| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#42405](https://github.com/openai/codex/pull/42405) | **Support the app-server daemon on Windows** | Platform parity | Enables background daemon & TUI attachment on Windows (previously Unix-only) |
| [#42392](https://github.com/openai/codex/pull/42392) | **Support managed daemon updates on Windows** | Platform parity | Daemon auto-update loop via PowerShell installer; readiness handshake |
| [#42413](https://github.com/openai/codex/pull/42413) | **Enable coordinated MCP OAuth refresh** | MCP/Auth | Streamable HTTP MCP connections refresh/persist credentials via pinned store |
| [#42422](https://github.com/openai/codex/pull/42422) | **Honor model requirements in Guardian computer-use scoring** | Safety/Guardian | Computer-use scoring respects active model's REPL auto-review requirements |
| [#42410](https://github.com/openai/codex/pull/42410) | **Allow reviewing and continuing misalignment-paused chats** | Safety/UX | Users can inspect findings & explicitly continue after misalignment pause |
| [#42406](https://github.com/openai/codex/pull/42406) | **Honor explicit plugin mentions during MCP startup** | Plugins/MCP | Explicitly mentioned plugins/servers wait past grace period for tool availability |
| [#42401](https://github.com/openai/codex/pull/42401) | **Discover TUI collaboration modes from app server** | TUI/Collab | Dynamic `collaborationMode/list` fetch at startup/reconnect with 2s timeout |
| [#42419](https://github.com/openai/codex/pull/42419) | **Add session resume to agent command center** | TUI/UX | `Ctrl+O` opens resume picker; preserves command-center state on cancel |
| [#42408](https://github.com/openai/codex/pull/42408) | **Harden embedded composer input handling** | TUI/Input | Literal `!`, `/`, `?` prefixes; preserved buffers on mode change/paste burst |
| [#42395](https://github.com/openai/codex/pull/42395) | **Expose Codex version to commands and turn metadata** | Observability | `CODEX_VERSION` env var + `codex_version` in MCP turn metadata |

> **Pattern**: Today's PR batch heavily targets **Windows parity** (daemon, updates), **MCP/OAuth robustness**, **Guardian/model alignment**, and **TUI composer reliability**.

---

## 5. Feature Request Trends (from Issues)

| Direction | Representative Issues | Signal Strength |
|-----------|----------------------|-----------------|
| **Headless/remote-first workflows** | [#23200](https://github.com/openai/codex/issues/23200) (56 👍), [#31110](https://github.com/openai/codex/issues/31110) | ★★★★★ |
| **Windows desktop parity & stability** | [#25826](https://github.com/openai/codex/issues/25826), [#39954](https://github.com/openai/codex/issues/39954), [#41513](https://github.com/openai/codex/issues/41513), [#41523](https://github.com/openai/codex/issues/41523), [#42289](https://github.com/openai/codex/issues/42289) | ★★★★★ |
| **Quota transparency & accounting accuracy** | [#41220](https://github.com/openai/codex/issues/41220), [#42127](https://github.com/openai/codex/issues/42127), [#42280](https://github.com/openai/codex/issues/42280) | ★★★★☆ |
| **Session/thread management improvements** | [#38144](https://github.com/openai/codex/issues/38144), [#30385](https://github.com/openai/codex/issues/30385), [#30515](https://github.com/openai/codex/issues/30515), [#24224](https://github.com/openai/codex/issues/24224) | ★★★★☆ |
| **Vim/TUI mode persistence & ergonomics** | [#21804](https://github.com/openai/codex/issues/21804) (17 👍), [#41242](https://github.com/openai/codex/issues/41242) | ★★★☆☆ |
| **Computer Use / native app control on Windows** | [#42214](https://github.com/openai/codex/issues/42214), [#36459](https://github.com/openai/codex/issues/36459) | ★★★☆☆ |
| **MCP/OAuth reliability & plugin ergonomics** | [#42406](https://github.com/openai/codex/pull/42406), [#42413](https://github.com/openai/codex/pull/42413) (PRs addressing) | ★★★☆☆ |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Voices |
|------------|-----------|----------------------|
| **Windows desktop instability** — auto-update launches invisible window ([#41523](https://github.com/openai/codex/issues/41523)), maximized window spill ([#25826](https://github.com/openai/codex/issues/25826)), display scaling breaks pets ([#42289](https://github.com/openai/codex/issues/42289)), flicker on Insider builds ([#34351](https://github.com/openai/codex/issues/34351)) | **Very High** (8+ issues in top 30) | "Unusable after update", "spills onto second monitor", "pet non-interactive at 150% scaling" |
| **Quota/usage accounting opacity** — credits drain faster than token counts suggest ([#41220](https://github.com/openai/codex/issues/41220)), weekly reset doesn't restore allowance ([#42280](https://github.com/openai/codex/issues/42280)), Pro 20x draining on small VS Code fixes ([#42127](https://github.com/openai/codex/issues/42127)) | **High** (3+ issues, cross-referenced) | "Abnormal depletion", "materially faster than baseline", "no transparency into accounting" |
| **Remote/headless workflow gaps** — mobile requires desktop online ([#23200](https://github.com/openai/codex/issues/23200)), Windows+Android reconnect loop ([#39954](https://github.com/openai/codex/issues/39954)), Cloudflare challenge blocks remote ([#31110](https://github.com/openai/codex/issues/31110)) | **High** | "Control layer limited by desktop staying online", "unusable from Android" |
| **Session/thread data integrity** — deleted chats reappear ([#39989](https://github.com/openai/codex/issues/39989)), threads missing from sidebar but on disk ([#30385](https://github.com/openai/codex/issues/30385)), `/fork` breaks parent resume ([#38144](https://github.com/openai/codex/issues/38144)), workspace leak across projects ([#24224](https://github.com/openai/codex/issues/24224)) | **High** | "Not lost but invisible", "prevents resume in another terminal", "leaks workspace root" |
| **TUI/Vim regressions** — light theme near-black composer ([#41242](https://github.com/openai/codex/issues/41242)), mode resets after submit ([#21804](https://github.com/openai/codex/issues/21804)), Windows Terminal detection flips background ([#37769](https://github.com/openai/codex/issues/37769)) | **Medium** | "Regression vs 0.147.0", "preserve Insert mode after submit" |
| **Computer Use limitations** — Windows native apps uncontrollable ([#42214](https://github.com/openai/codex/issues/42214)), macOS Safari coordinate click fails after restart ([#36459](https://github.com/openai/codex/issues/36459)) | **Medium** | "`cua.getApp is not a function`", "works fresh then fails after restart" |

---

## Quick Links

- **Releases**: [rust-v0.153.0](https://github.com/openai/codex/releases/tag/rust-v0.153.0) | [alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.6)
- **Issue tracker**: [openai/codex/issues](https://github.com/openai/codex/issues)
- **PR activity**: [openai/codex/pulls](https://github.com/openai/codex/pulls)

*Digest generated from GitHub data as of 2026-09-03 00:00 UTC. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-03

## 1. Today's Highlights
No new releases shipped in the last 24 hours. The team closed **15+ pull requests** focused on security hardening (three critical CVEs patched), sandbox reliability, and prefix-caching preservation for retry nudges. Meanwhile, high-priority bugs around **subagent state misreporting**, **shell-command hangs**, and **memory pressure** remain open and actively discussed.

## 2. Releases
*None in the last 24 hours.*

## 3. Hot Issues (10 noteworthy)

| # | Title & Link | Why It Matters | Community Signal |
|---|--------------|----------------|------------------|
| **#22323** | [Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagents silently claim success when they actually hit turn limits, breaking trust in automated workflows. | 13 comments, P1, `maintainer only`, `need-retesting` |
| **#25166** | [Shell command execution gets stuck “Waiting input” after command completes](https://github.com/google-gemini/gemini-cli/issues/25166) | Core UX blocker: simple CLI commands hang indefinitely, forcing manual intervention. | 4 comments, 3 👍, P1, `need-retesting` |
| **#29045** | [read-many-files treats substring overlap as explicit binary request](https://github.com/google-gemini/gemini-cli/issues/29045) | Glob-pattern substring matching inlines unrequested images, polluting context and token budget. | 4 comments, P1 |
| **#21968** | [Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968) | Autonomous tool-use regression; users must explicitly invoke skills/sub-agents that should be automatic. | 6 comments, P2, `maintainer only` |
| **#27938** / **#27976** | [High memory usage detected](https://github.com/google-gemini/gemini-cli/issues/27938) / [7.03 GB memory warning](https://github.com/google-gemini/gemini-cli/issues/27976) | Recurring OOM crashes; GC logs show 24+ GB heaps. Both closed as stale but root cause unclear. | 5+4 comments, P1/P2 |
| **#26525** | [Add deterministic redaction & reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525) | Secrets enter model context before redaction; skill transcripts logged verbatim — security/privacy risk. | 5 comments, P2, `area/security` |
| **#29042** | [Non-numeric background-PID lines become NaN in shell output](https://github.com/google-gemini/gemini-cli/issues/29042) | Parsing bug injects `NaN` into PID tracking, corrupting background-process management. | 5 comments, P2 |
| **#22745** | [Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | Epic investigating whether AST tooling reduces turns/tokens — strategic direction for codebase understanding. | 7 comments, P2, `workstream-rollup` |
| **#22232** | [Enhance browser_agent resilience: session takeover & lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232) | Persistent browser profiles fail fast on lock contention; needs graceful recovery for CI/automation. | 4 comments, P3, `kind/feature` |
| **#24246** | [Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246) | Hard tool-count limit surfaces in large monorepos; agent needs dynamic tool scoping. | 3 comments, P2, `need-information` |

## 4. Key PR Progress (10 important)

| # | Title & Link | Type | Impact |
|---|--------------|------|--------|
| **#28902** | [fix(core): block `$VAR`/`${VAR}` variable expansion bypass (GHSA-wpqr-6v78-jr5g)](https://github.com/google-gemini/gemini-cli/pull/28902) | **Security** | Closes incomplete check from prior CVE; defense-in-depth for automated dedup workflow. |
| **#29094** | [fix: upgrade simple-git to 3.32.3 (CVE-2026-28292)](https://github.com/google-gemini/gemini-cli/pull/29094) | **Security** | Critical CVE in git dependency; trivy-flagged. |
| **#29095** | [fix: upgrade shell-quote to 1.8.4 (CVE-2026-9277)](https://github.com/google-gemini/gemini-cli/pull/29095) | **Security** | Critical CVE in shell-quote; command-injection surface. |
| **#29173** | [chore(deps): bump fast-uri 3.1.2 → 3.1.7](https://github.com/google-gemini/gemini-cli/pull/29173) | **Security** | Security warning in release notes; transitive dependency. |
| **#28914** | [fix(core): inject on-retry nudge into contents to preserve prefix caching](https://github.com/google-gemini/gemini-cli/pull/28914) | **Performance** | Moves retry nudge from system instruction → user-turn suffix, preserving static prompt cache. |
| **#28917** | [fix(core): atomic download & failure cleanup in WhisperModelManager](https://github.com/google-gemini/gemini-cli/pull/28917) | **Reliability** | Prevents partial/corrupt model files; respects backpressure; cleans temp on failure. |
| **#28916** | [fix(core): buffer partial stdout chunks in WhisperTranscriptionProvider](https://github.com/google-gemini/gemini-cli/pull/28916) | **Reliability** | Fixes dropped transcription lines split across stdout events in local voice mode. |
| **#29098** | [fix(cli): keep useInputHistoryStore state updaters pure](https://github.com/google-gemini/gemini-cli/pull/29098) | **Correctness** | Removes side-effects from React state updater (double-invoke safe under StrictMode). |
| **#29172** | [feat(core): add gemini-3.8-flash as default flash model](https://github.com/google-gemini/gemini-cli/pull/29172) | **Feature** | Registers 3.5-flash-lite through 3.8-flash; promotes 3.8-flash to default. |
| **#29170** | [fix(core): enhance workspace path boundary checks & symlink resolution](https://github.com/google-gemini/gemini-cli/pull/29170) | **Security/Hardening** | Strengthens command safety & file discovery against path traversal via symlinks (POSIX/Windows). |

## 5. Feature Request Trends
1. **AST-aware tooling** — Multiple issues (#22745, #22746) investigate precise, token-efficient code navigation via AST (tilth/glyph prototypes).
2. **Autonomous skill/sub-agent use** — Strong demand for the agent to *choose* skills/sub-agents without explicit instruction (#21968).
3. **Subagent observability** — Requests to surface subagent trajectories in `/chat share` for debugging/evals (#22598).
4. **Browser agent hardening** — Session takeover, lock recovery, Wayland support (#22232, #21983).
5. **Prompt-as-Code templating** — Structured templating (Nunjucks) for workflow definition (#28315).
6. **Antigravity CLI migration path** — Clarity on custom command → skill conversion (#27325).

## 6. Developer Pain Points
- **Memory instability** — Repeated OOM reports (7–24 GB heaps), GC thrashing, crashes during long sessions.
- **Shell tool flakiness** — “Waiting input” hang after command completion; NaN PID corruption; background-process tracking broken.
- **Subagent trust** — False SUCCESS/GOAL status on turn-limit exhaustion; settings.json overrides ignored (maxTurns).
- **Security surface** — Three critical CVEs in one day (simple-git, shell-quote, fast-uri); variable-expansion bypass; NTFS short-name traversal; config-file ACL gaps.
- **Auto Memory opacity** — Silent patch skips, indefinite low-signal retries, secrets in model context pre-redaction.
- **Tool-count ceiling** — 400-tool 400 error forces manual tool scoping in large repos.
- **Workspace pollution** — Model scatters temp scripts across directories when restricted to shell-only mode.

---

*Generated from `google-gemini/gemini-cli` GitHub data (issues/PRs updated 2026-09-03). All links point to live GitHub items.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-03

---

## 1. Today's Highlights

Two patch releases (v1.0.83-2 and v1.0.83-3) shipped in the last 24 hours, adding support for **Claude Fable 5.1** and enabling custom agents to declare **fallback model lists** with a `model-policy: required` option. Meanwhile, the issue tracker shows a surge of stability reports: **OOM crashes on long/resumed sessions**, **MCP connection flakiness**, and **custom-agent state loss on resume** dominate developer discussions.

---

## 2. Releases

### v1.0.83-3 (2026-09-02)
> "Fixes and changes" — minor patch atop v1.0.83-2.  
> [Release notes](https://github.com/github/copilot-cli/releases/tag/v1.0.83-3)

### v1.0.83-2 (2026-09-02)
**Added**
- **Custom-agent model fallbacks**: `model` can now be an array; the CLI tries each until one is available. `model-policy: required` locks the agent to that list.
- **Claude Fable 5.1** support.

**Improved**
- Linux sandboxes now restrict network egress to the configured proxy.  
> [Release notes](https://github.com/github/copilot-cli/releases/tag/v1.0.83-2)

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#3709](https://github.com/github/copilot-cli/issues/3709) | **`/model` should list BYOK/local providers** | Blocks model switching for self-hosted/local LLMs; 29 👍, 7 comments. | High demand for true multi-provider parity. |
| [#4664](https://github.com/github/copilot-cli/issues/4664) | **OOM on resuming large sessions** | Hard blocker for long-running workflows; heap hits ~4 GiB before crash. | 5 comments, active reproduction. |
| [#4686](https://github.com/github/copilot-cli/issues/4686) | **Node OOM after ~37 min — 31k leaked libuv handles** | SEA build ignores `NODE_OPTIONS`; handle leak suggests async cleanup bug. | 2 comments, detailed perf data. |
| [#4694](https://github.com/github/copilot-cli/issues/4694) | **WSL2: 31 GB RSS / 57% CPU on long Opus 5 session** | Extreme resource growth on WSL; may share root cause with #4686. | New, zero comments but severe metrics. |
| [#4699](https://github.com/github/copilot-cli/issues/4699) | **OOM on long `--resume`; crash dumps pollute cwd** | Repeats #4664/#4686; adds UX pain (dumps in working dir). | 1 👍, fresh report. |
| [#2630](https://github.com/github/copilot-cli/issues/2630) | **Custom agent `mcp-servers` not connected in sub-agent/`--prompt`** | MCP tools silently missing for delegated work; breaks agent composability. | 9 comments, 1 👍, **closed** but may need regression watch. |
| [#4674](https://github.com/github/copilot-cli/issues/4674) | **Resume loses custom agent (regression of #917)** | Agent config (MCP, tools) not restored; session silently degrades. | 3 comments, direct regression. |
| [#4525](https://github.com/github/copilot-cli/issues/4525) | **Legacy `initialize` sent after modern `server/discover` → -32022** | Breaks MCP servers using Python SDK 2.0 dual-era runner. | 5 comments, 2 👍, protocol-level bug. |
| [#4598](https://github.com/github/copilot-cli/issues/4598) | **MCP: only 3/18 servers connect at startup; reloads kill live handles** | Unreliable MCP fleet; `NativeMcpHostHandle` destruction mid-session. | 1 comment, systemic connection mgmt issue. |
| [#4695](https://github.com/github/copilot-cli/issues/4695) | **MCP OAuth token cache thrashing → repeated re-auth** | Cache-key hash instability forces PKCE re-flow; hurts enterprise HTTP MCP. | 3 comments, fresh triage. |

---

## 4. Key PR Progress

*No pull requests updated in the last 24 hours.*  
(All current movement is on issues; PR velocity appears paused or batched.)

---

## 5. Feature Request Trends

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Multi-provider / BYOK model switching in-session** | [#3709](https://github.com/github/copilot-cli/issues/3709), [#4703](https://github.com/github/copilot-cli/issues/4703) | 29 👍 + new per-agent provider ask |
| **Reasoning-effort quick toggle (`/effort`)** | [#3074](https://github.com/github/copilot-cli/issues/3074) | 9 👍, closed but shows latent demand |
| **ACP parity: `contextTier` as runtime config** | [#4275](https://github.com/github/copilot-cli/issues/4275) | 3 comments, enterprise integration need |
| **Shell selection on Windows (bash vs pwsh)** | [#2271](https://github.com/github/copilot-cli/issues/2271) | 2 👍, long-standing (Mar 2026) |
| **Skill discovery from plugins / `skillDirectories` in ACP** | [#4655](https://github.com/github/copilot-cli/issues/4655), [#4700](https://github.com/github/copilot-cli/issues/4700) | Two fresh plugin/ACP gaps |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Memory instability on long sessions** — Multiple independent OOM reports (#4664, #4686, #4694, #4699) with heap exhaustion, handle leaks, and crash dumps in cwd. Affects both interactive and `--resume` flows; WSL2 and Linux SEA builds implicated.

2. **MCP ecosystem fragility** — Connection failures at startup (#4598), protocol handshake regressions (#4525), OAuth cache thrashing (#4695), and sub-agent MCP loss (#2630, #4674). Developers experience "silent degradation" where tools vanish without error.

3. **Custom-agent state not survive resume** — #4674 (regression of #917) and #2630 show agent config (MCP servers, tool allow-lists, model) is dropped on `/resume`, forcing manual re-setup.

4. **Windows enterprise friction** — ConstrainedLanguage mode spams `$host.SetShouldExit()` errors (#4683), path-separator dedup bugs (#4702), truncated permission prompts (#4701), and shell override still missing (#2271).

5. **Model/Provider UX gaps** — `/model` hides BYOK/local models (#3709), no per-agent provider scoping (#4703), and enterprise default model not recognized (#4692).

---

*Digest generated from github.com/github/copilot-cli data as of 2026-09-03 00:00 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-03

---

## 1. Today's Highlights

No new releases or pull requests in the last 24 hours. Three existing issues (#1294, #1297, #1298) were updated and closed on 2026-09-02, addressing Yolo mode transparency, subagent cancellation errors on Windows, and XDG Base Directory compliance. The project appears in a maintenance phase with focus on polishing existing features.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Hot Issues

All three recently updated issues are closed. They reflect active community engagement on UX polish and platform standards.

| # | Title | Type | Why It Matters | Community Reaction |
|---|-------|------|----------------|-------------------|
| [#1298](https://github.com/MoonshotAI/kimi-cli/issues/1298) | **Yolo mode: show full shell commands & file writes** | Enhancement | Critical for safety: users need visibility into long-running shell commands (currently truncated with `...`) and file mutations to intervene before damage. | 0 comments, 0 👍 — niche but high-impact for power users |
| [#1297](https://github.com/MoonshotAI/kimi-cli/issues/1297) | **Cancelling subagents via Escape shows unhandled errors** | Bug | Windows users on v1.16.0 hit uncaught exceptions when interrupting subagents — breaks workflow and erodes trust in cancellation UX. | 0 comments, 1 👍 — confirmed pain point on Windows |
| [#1294](https://github.com/MoonshotAI/kimi-cli/issues/1294) | **Follow XDG Base Directory (`~/.config/kimi`)** | Enhancement | Aligns with Linux/Unix conventions; reduces home directory clutter. Widely expected by developers using config managers (e.g., `antidot`, `chezmoi`). | 0 comments, 1 👍 — strong sentiment in dotfile-management communities |

---

## 4. Key PR Progress

**No pull requests** updated in the last 24 hours.

---

## 5. Feature Request Trends

From the closed issues, three clear directions emerge:

1. **Transparency in autonomous modes** — Users demand full audit trails (commands, file diffs) when the agent acts without confirmation (Yolo mode).
2. **Cross-platform robustness** — Windows-specific crash on subagent cancellation signals gaps in signal/exception handling.
3. **Standards compliance** — Adoption of XDG Base Directory is a low-effort, high-goodwill win for Linux/macOS power users.

---

## 6. Developer Pain Points

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Blind automation in Yolo mode** | High (safety-critical) | #1298: truncated shell output prevents timely intervention |
| **Unclean interruption handling** | Medium (Windows) | #1297: Escape key triggers unhandled exception during subagent cancel |
| **Non-standard config location** | Low but persistent | #1294: `~/.kimi` violates XDG; blocks dotfile sync tools |

---

*Digest generated from GitHub data as of 2026-09-03. All links point to live issues on `MoonshotAI/kimi-cli`.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-03

## 1. Today's Highlights
OpenCode v1.18.27 shipped critical timeout fixes: provider header and streamed chunk timeouts now default to five minutes (configurable to `false`), reducing failures during slow model startups. The community is actively advancing the `/goal` session lifecycle feature (PR #46328), while a regression in Bedrock's `thinking.adaptive.block_binding` (issue #46729) and Windows clipboard/path handling bugs dominate recent bug reports.

## 2. Releases
**v1.18.27** — Core bugfixes:
- Default provider header timeouts → 5 min (previously unbounded), preventing hangs on slow model starts
- Default streamed chunk timeouts → 5 min; `false` disables entirely
- Anthropic `thinking.blockBinding` now opt-out via config when provider requires it

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#27167](https://github.com/anomalyco/opencode/issues/27167) **Native `/goal` session lifecycle** | First-class persistent goals would replace ad-hoc slash commands; enables agent loops, planning, and memory across sessions. | 78 comments, 140 👍 — highest engagement in dataset |
| [#6231](https://github.com/anomalyco/opencode/issues/6231) **Auto-discover models from OpenAI-compatible endpoints** | Eliminates manual model listing for LM Studio/Ollama/llama.cpp; critical for local LLM workflows. | 48 comments, 225 👍 — strong demand |
| [#46729](https://github.com/anomalyco/opencode/issues/46729) **Bedrock `prefix_mismatch_behavior` regression (v1.18.26→27)** | Blocks Opus 5 on Bedrock entirely; `thinking.adaptive.block_binding` sends extra inputs the model rejects. | 6 comments, 13 👍 — production blocker |
| [#36413](https://github.com/anomalyco/opencode/issues/36413) **`opencode run` exits 0 with empty stdout on auto-rejected tool** | Silent success with no output breaks CI/CD automation; no machine-detectable failure signal. | 7 comments — automation reliability gap |
| [#37650](https://github.com/anomalyco/opencode/issues/37650) **Optional search metadata breaks permission listing** | `glob`/`grep` permissions fail schema encoding when optional fields are `undefined`; blocks permission UIs. | 6 comments — core permission system bug |
| [#28590](https://github.com/anomalyco/opencode/issues/28590) **`writeOsc52` broken under GNU screen** | Clipboard copy uses tmux DCS format on screen; no chunking → corrupts large copies. | 11 comments — Linux terminal compatibility |
| [#46931](https://github.com/anomalyco/opencode/issues/46931) **Go usage dashboard double-counts `glm-5.3-flash` promo pricing** | Dashboard shows full price while client shows discounted; billing reconciliation issues. | 2 comments (new) — cost tracking accuracy |
| [#46941](https://github.com/anomalyco/opencode/issues/46941) **Auto-discover models for custom OpenAI-compatible providers** | Extends #6231 to `npm:@ai-sdk/openai-compatible` providers; same pain point for custom endpoints. | 2 comments (new) — feature parity request |
| [#45368](https://github.com/anomalyco/opencode/issues/45368) **Compaction re-triggers every step when model lacks `limit.output`** | Local/proxied models default to 32k output → usable context = 0 → infinite compaction loop. | 2 comments — local model usability |
| [#35329](https://github.com/anomalyco/opencode/issues/35329) **File watcher emits backslash paths on Windows** | Path separator mismatch breaks `@file` mentions, file ops, and comparisons on Windows. | 3 comments — Windows path normalization |

## 4. Key PR Progress (Top 10 by Significance)

| PR | Type | Description |
|----|------|-------------|
| [#46328](https://github.com/anomalyco/opencode/pull/46328) | **Feature** | **Goal-loop example plugin** — implements `/goal` & `/loop` via plugin SDK (closes #27167). No core changes; demonstrates session goal persistence pattern. |
| [#46957](https://github.com/anomalyco/opencode/pull/46957) | **Fix** | **Retry failed location initialization** — repairs cache poisoning when config references missing files or unreadable dirs; infinite idle lifetime cleared. |
| [#46965](https://github.com/anomalyco/opencode/pull/46965) | **Refactor** | **Drop responses replay tombstones** — removes `completedMessages`/`completedTools` sets from `ParserState`; simplifies OpenAI background stream resume logic. |
| [#46690](https://github.com/anomalyco/opencode/pull/46690) | **Feature** | **Expose session forms, list, global event stream to plugins** — enables Telegram bot and external integrations to drive sessions programmatically. |
| [#46964](https://github.com/anomalyco/opencode/pull/46964) | **Fix** | **Drop undefined metadata from permission requests** — fixes #37650; filters `undefined` optional fields in `glob`/`grep` before schema encoding. |
| [#46954](https://github.com/anomalyco/opencode/pull/46954) | **Fix** | **Preserve live moves across metadata reads** — prevents late `/repo` GET from overwriting `session.moved` → `/worktree` in Solid cache. |
| [#46963](https://github.com/anomalyco/opencode/pull/46963) | **Refactor** | **Move update checks to TUI clients** — removes background server update monitoring; each TUI checks every 10 min via CLI callback. |
| [#46962](https://github.com/anomalyco/opencode/pull/46962) | **Feature** | **Persist compaction model & provider state** — compaction messages now carry `model: Model.Ref` and optional `providerState` for fidelity. |
| [#46961](https://github.com/anomalyco/opencode/pull/46961) | **Fix** | **Distinguish location loading vs data sync failures** — TUI no longer shows "Session location unavailable" on catalog (`/api/agent`) 500s. |
| [#46960](https://github.com/anomalyco/opencode/pull/46960) | **Feature** | **Add `UnsupportedOperation` error for route capability mismatches** — typed error when calling unimplemented ops (e.g., `compact` on Anthropic). |

## 5. Feature Request Trends
1. **Session persistence & goals** — `/goal` (#27167), super-personal memory (#35291), auto-updating session titles (#31592) indicate demand for long-running, context-aware agent sessions.
2. **Provider/model auto-discovery** — #6231, #46941, and Bedrock config requests (#23108) show friction in configuring diverse LLM backends (local, cloud, enterprise).
3. **Plugin ecosystem expansion** — PRs #46690, #46328, #46956, #46952 expose editors, events, and lookups; community building integrations (Telegram, custom tools).
4. **Web UI parity & reliability** — Session list blank (#35340), direct route crashes (#30898), desktop launch failures (#35313) highlight web/desktop stability gaps.
5. **Cost/usage transparency** — Dashboard pricing bugs (#46931), compaction token accounting (#45368) reflect need for accurate telemetry.

## 6. Developer Pain Points
- **Windows path/terminal handling** — Backslash paths (#35329), terminal title restore (#35328), `Stop-Process -Name node` self-kill (#35332), `@file` autocomplete (#35330), NSIS installer kills CLI (#35331) — cluster of Windows-specific regressions.
- **Silent failures in automation** — `opencode run` exit 0 with no output (#36413), permission schema breaks (#37650), compaction loops (#45368) — no observable error signals for scripting.
- **Clipboard/terminal integration** — OSC52 broken on GNU screen (#28590), GNOME Terminal copy (#29834), subagent card chevron UX (#46893) — core TUI/desktop polish gaps.
- **Model routing edge cases** — Bedrock thinking block binding (#46729), Perplexity API tool name conflicts (#34468), missing `limit.output` on local models (#45368) — provider abstraction leaks.
- **Plugin loading non-determinism** — Filesystem-order plugin loads (#45367), hook errors skip remaining plugins — makes plugin composition fragile.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-03

## 1. Today's Highlights
The Pi ecosystem saw significant core infrastructure work today with the merge of **AgentHarness** — a new recoverable runtime boundary for agent lifecycle (prompt, compact, abort, resume, lanes, watch) — alongside an opt-in **ToolPolicy** capability hook for host-controlled tool authorization with audit events. Critical stability fixes landed for OpenAI Codex SSE parsing (heap OOM), xAI tool_choice handling, and stale JSONL session writes after deletion. The Gemini 3.x tool-use regression (missing `thought_signature`) remains the highest-engagement open bug.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#6996](https://github.com/earendil-works/pi/issues/6996)** Bug: Gemini 3.x models fail during tool use due to missing `thought_signature` | Blocks all tool use on Gemini 3.5/3.6 Flash; regression in history serialization. | 8 comments, active since Jul 23 — highest engagement open bug. |
| **[#8845](https://github.com/earendil-works/pi/issues/8845)** Branch summarization hardcodes `maxTokens: 2048` | Deterministic failure on large branches; summarization silently truncates. | 7 comments; clear fix path (configurable token budget). |
| **[#8643](https://github.com/earendil-works/pi/issues/8643)** Bedrock: OpenAI models reject images nested in `toolResult.content` | Breaks image workflows on Bedrock-hosted OpenAI models; requires hoisting to sibling user blocks. | 4 comments, 1 👍; fix + regression test ready on fork. |
| **[#8928](https://github.com/earendil-works/pi/issues/8928)** Parallel startup reports "No API key found" for ~48s with expired OAuth creds | Misleading error points at active provider; wastes hours debugging in multi-process setups. | 3 comments; deterministic repro with timing data. |
| **[#8823](https://github.com/github.com/earendil-works/pi/issues/8823)** Esc during streaming fails to cancel in-flight request | Abort registered but HTTP request continues until provider finishes; UX breakage. | 2 comments; related to #9022 (queued messages restored to editor). |
| **[#8920](https://github.com/earendil-works/pi/issues/8920)** RPC `abort` reports success without cancelling in-progress compaction | `abort` returns `success: true` but compaction continues; subsequent prompts rejected. | 2 comments, `inprogress` label; RPC reliability gap. |
| **[#9036](https://github.com/earendil-works/pi/issues/9036)** Codex SSE parser buffers whole response → fatal heap OOM | Unbounded buffer accumulation on large Codex streams crashes Node process. | 1 comment; fixed in #9037 (bounded, CRLF-aware parser). |
| **[#9035](https://github.com/earendil-works/pi/issues/9035)** TUI crashes on non-`AgentToolResult` extension tool returns | Extension tools returning bare strings crash the TUI; no normalization guard. | 1 comment; fixed in #9035 (validation + normalization). |
| **[#9033](https://github.com/earendil-works/pi/issues/9033)** Linux downloads glibc-linked `fd`/`ripgrep` — fails on NixOS/Alpine | Dynamic linking breaks on musl/distros without `/lib64/ld-linux-x86-64.so.2`. | 1 comment; fix: use statically linked musl builds. |
| **[#9014](https://github.com/earendil-works/pi/issues/9014)** Default system prompt over-encourages exhaustive Pi docs reading | Prompt demands reading *all* linked Markdown files; bloats context, slows agents. | 2 comments; closed — prompt being made task-scoped. |

## 4. Key PR Progress (Top 10 by Significance)

| PR | Summary | Status |
|----|---------|--------|
| **[#9044](https://github.com/earendil-works/pi/pull/9044)** `feat(agent): add initial recoverable harness runtime and capability policy` | Introduces `AgentHarness` (canonical lifecycle for prompt/compact/abort/resume/lanes/watch) + opt-in `ToolPolicy` with tool/path/command decisions & audit events. Composes into `Agent` without changing defaults. | **Merged** |
| **[#9037](https://github.com/earendil-works/pi/pull/9037)** `fix(ai): bound and CRLF-aware Codex SSE parsing` | Fixes #9036: bounds SSE buffer, handles CRLF line endings per WHATWG spec, drains residual buffer — eliminates heap OOM on large Codex streams. | **Merged** |
| **[#8818](https://github.com/earendil-works/pi/pull/8818)** `fix(ai): omit Responses tool_choice when no tools are sent` | Fixes xAI 400 on compaction: omits `tool_choice` when no tools; sends `tools: []` for Grok so compact succeeds. | **Merged** |
| **[#9040](https://github.com/earendil-works/pi/pull/9040)** `fix(agent): reject stale JSONL session writes after delete` | Prevents `NodeExecutionEnv.appendFile()` from recreating headerless JSONL after `JsonlSessionRepo.delete()` removes the file. | **Merged** |
| **[#8998](https://github.com/earendil-works/pi/pull/8998)** `System prompt refactor` | **Draft** — enables partial system prompt updates for extensions; emits mid-conversation updates for dynamic tool/system changes without session wipe. | **Open** |
| **[#9031](https://github.com/earendil-works/pi/pull/9031)** `feat(coding-agent): add opencode-go limits extension` | Extension parsing `x-ratelimit-*` / `x-opencode-quota-*` headers; renders Go quota in footer (compact/full) — no core changes. | **Merged** |
| **[#9015](https://github.com/earendil-works/pi/pull/9015)** `fix(coding-agent): enable reasoning and reasoning effort for llama.cpp provider` | Adds per-request `reasoning_effort` support for built-in llama.cpp provider (upstream llama.cpp PR #26045). | **Merged** |
| **[#8994](https://github.com/earendil-works/pi/pull/8994)** `fix(agent): map signal-killed processes to non-zero exit codes` | Fixes `waitForChildProcess` resolving `null` exit code on SIGKILL/OOM; `exec` now maps to non-zero so bash tool treats as failure. | **Open** |
| **[#8627](https://github.com/earendil-works/pi/pull/8627)** `Use ctx.cwd for cwd-sensitive tools` | Extension tools (read/write/edit/glob/ls/grep) now resolve paths against `ExtensionContext.cwd` (real session cwd) with fallback. | **Merged** |
| **[#9039](https://github.com/earendil-works/pi/pull/9039)** `feat(coding-agent): add PI_DISABLE_MOUSE to opt out of fullscreen mouse tracking` | Exposes existing `TuiAltScreenOptions.mouse` via env var; disables `?1000/1002/1003` sequences in fullscreen when set. | **Merged** |

## 5. Feature Request Trends
From the issue/PR stream, the strongest community demand clusters are:

1. **Recoverable, observable agent runtime** — `AgentHarness` + `ToolPolicy` (#9044, #9042, #9043) signal a push for first-class lifecycle control, auditability, and host-enforced boundaries.
2. **Provider parity & edge-case hardening** — xAI tool_choice (#8818), Bedrock image hoisting (#8643), llama.cpp reasoning (#9015), vLLM priority (#9004), OpenCode Go quota (#9031), OpenRouter retry (#9002).
3. **Session durability & corruption prevention** — Stale write guards (#9040/#9041), import overwrite protection (#8995), compaction boundary preservation on fork (#8990), in-memory session ingestion (#8980).
4. **TUI/UX polish** — Collapsible history (#9020), frameless editor (#9032), mouse opt-out (#9039), keybinding hint resolution (#8872), queued-message handling on abort (#9022).
5. **System prompt modularity** — Task-scoped docs guidance (#9014), partial updates for extensions (#8998), thinking-level mapping for mapless models (#9026).

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence |
|------------|----------|
| **Silent/ambiguous failures** | Expired OAuth creds masquerading as missing API key (#8928); OpenRouter `finish_reason: error` killing turns without retry (#9002); RPC `abort` lying about success (#8920); Codex OOM with no actionable error (#9036). |
| **Tool-use brittleness across providers** | Gemini 3.x `thought_signature` regression (#6996); Bedrock image nesting (#8643); xAI tool_choice 400 (#8818); OpenAI completions leaking reasoning (#9007); extension tool return-type crashes (#9035). |
| **Compaction/queueing UX gaps** | Can't interleave `/compact` with prompts (#8301); abort during compaction leaves stale state (#8920); queued follow-ups dumped back to editor on Esc (#9022); prompt race during `agent_settled` handlers (#9028). |
| **Platform-specific install/runtime breaks** | Non-Latin Windows usernames (#8895); glibc binaries on musl/Nix

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-03

## 1. Today's Highlights
The Qwen Code team released **Qwen Live Host v0.2.0** and continued the major **OpenTUI migration** (tracking issue #8662, 23 comments) to replace the ink-based TUI rendering layer. A critical security concern emerged around `qwen serve`'s shell guard blocking git commands outside the session directory without configurability (#10860, #10859). CI stability remains a focus with multiple flaky E2E test fixes and a new dependency CVE audit failure (#10850) requiring attention.

## 2. Releases
### **live-host-v0.2.0** — Qwen Live Host v0.2.0
- Released via automated workflow at commit `867bb94a`
- Part of the `qwen-live` package ecosystem
- [View Release](https://github.com/QwenLM/qwen-code/releases/tag/live-host-v0.2.0)

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Title | Why It Matters | Community Reaction |
|-------|-------|----------------|-------------------|
| [#8662](https://github.com/QwenLM/qwen-code/issues/8662) | **Migrate TUI rendering layer from ink to OpenTUI (tracking)** | Structural rewrite addressing flicker, viewport issues, and 1000+ lines of ink patches; affects all interactive users | 23 comments, active since Aug 7 — highest engagement |
| [#10860](https://github.com/QwenLM/qwen-code/issues/10860) | **`qwen serve`: built-in shell guard ignores session approval mode, denies read-only Git commands** | Security/usability: daemon shell guard blocks legitimate git operations outside session dir, no config/audit/surface to operator | 3 comments, opened today — critical for `qwen serve` users |
| [#10859](https://github.com/QwenLM/qwen-code/issues/10859) | **Serve shell guard blocks every git command outside session directory** | Same root cause as #10860; blocks all cross-repo git work in daemon mode | 3 comments, closed as duplicate of #10860 |
| [#10818](https://github.com/QwenLM/qwen-code/issues/10818) | **Monitor pulse storm can DoS interactive session: ESC cancel ineffective, input starved** | P1 bug: background monitoring floods event loop, making ESC cancel useless and starving user input | 3 comments, closed with fix |
| [#10850](https://github.com/QwenLM/qwen-code/issues/10850) | **CI: Dependency CVE audit fails repo-wide on new fast-uri/qs/uuid advisories** | 4 vulnerabilities (1 high) in main lockfile; blocks releases until resolved | 2 comments, `status/ready-for-human` |
| [#10692](https://github.com/QwenLM/qwen-code/issues/10692) | **Tool call XML dialect leaks as plain text: fallback misses `xml` dialect** | Core parsing bug: model's native XML tool-call format leaks to user; affects all model interactions | 2 comments, P2 |
| [#10791](https://github.com/QwenLM/qwen-code/issues/10791) | **Balanced `<thinking>` blocks leak to user-visible output** | Content sanitization gap: properly closed thinking tags not stripped on content-only turns | 2 comments, P2, `welcome-pr` |
| [#10797](https://github.com/QwenLM/qwen-code/issues/10797) | **Non-thinking scaffolding tags (tool-result, system-reminders) echoed to output** | Additional internal markup leaking to users; no current sanitizer covers these shapes | 2 comments, P2, `welcome-pr` |
| [#10834](https://github.com/QwenLM/qwen-code/issues/10834) | **MCP tool images bypass read_file image budget, enter context at full resolution** | Token/context blowup: MCP images unbounded vs. 1568px cap for `read_file` | 2 comments, P2, `status/ready-for-agent` |
| [#9942](https://github.com/QwenLM/qwen-code/issues/9942) | **Hide skill commands from top-level slash completion** | UX: skill proliferation crowds completion menu, hiding built-in commands | 5 comments, `need-discussion` |

## 4. Key PR Progress (Top 10 by Significance)

| PR | Title | Description | Status |
|----|-------|-------------|--------|
| [#10831](https://github.com/QwenLM/qwen-code/pull/10831) | **fix(cli): close OpenTUI submit-path gaps, restore its E2E leg** | Aligns OpenTUI composer submission with ink: raw text + @-mention file content + proper dialect handling | Open |
| [#10842](https://github.com/QwenLM/qwen-code/pull/10842) | **fix(release): stop one flaky test from failing a stable release** | Adds retry for workspace test (like nightly/preview); hardens 6 tests that blocked releases | Open |
| [#10828](https://github.com/QwenLM/qwen-code/pull/10828) | **docs(design): Define relaxed standalone daemon ownership** | Architecture doc: allows updated daemons to mount shared Conversations runtime, concurrency by session ID | Open |
| [#10836](https://github.com/QwenLM/qwen-code/pull/10836) | **fix(live-host-release): build sdk before qwen-live in publish job** | Fixes publish pipeline: explicit `@qwen-code/sdk` build step before `qwen-live` (--ignore-scripts skips it) | Open |
| [#10183](https://github.com/QwenLM/qwen-code/pull/10183) | **feat(memory): add structured on-demand recall** | Major memory system upgrade: flat prompt → structured push/pull with ref/title tree, query-focused subtree, dedicated recall tool | Open |
| [#10080](https://github.com/QwenLM/qwen-code/pull/10080) | **fix(core): normalize tool schemas for grammar-based providers** | Keeps full tool set for OpenAI-compatible providers; normalizes only outbound schema copy (fixes empty-object grammar for llama.cpp) | Open |
| [#10761](https://github.com/QwenLM/qwen-code/pull/10761) | **feat: load custom output styles from ~/.qwen/output-styles and .qwen/output-styles** | User/project output styles as Markdown files with YAML frontmatter (name, description); `autofix/takeover` | Open |
| [#10835](https://github.com/QwenLM/qwen-code/pull/10835) | **fix(core): bound oversized images returned by MCP tools** | Routes MCP images through same visual budget as `read_file` (1568px max edge); forward as-is if within budget | Open |
| [#10793](https://github.com/QwenLM/qwen-code/pull/10793) | **fix(channels): route daemon permission votes by session** | Daemon channels now use session-scoped vote path; legacy request-id path retained for compat | Open |
| [#10800](https://github.com/QwenLM/qwen-code/pull/10800) | **feat(ipc): keep the peer inbox reachable, and say so when it is not** | Cross-session messaging inbox: tries multiple paths (`$XDG_RUNTIME_DIR/qwen-socks/`, etc.), reports failures, avoids address conflicts | Open |

## 5. Feature Request Trends
From the issue corpus, these directions dominate community requests:

1. **TUI/Rendering Modernization** — OpenTUI migration (#8662) is the largest tracked effort; multiple PRs (#10831, #10773) address parity gaps
2. **Daemon/Serve Hardening** — Shell guard configurability (#10860, #10859), cross-conversation message routing (#10688), session-scoped permissions (#10793)
3. **Skill/Extension UX** — Slash completion crowding (#9942), extension-namespaced skills (#10841), custom output styles (#10761)
4. **Memory/Context Management** — Structured recall (#10183), image budget enforcement for MCP (#10834, #10835), thinking-tag sanitization (#10791, #10797, #10692, #10700)
5. **CI/CD Reliability** — Flaky test mitigation (#10842, #10758), CVE audit automation (#10850), job splitting (#10756)

## 6. Developer Pain Points
Recurring frustrations surfacing in issues and PRs:

- **`qwen serve` shell guard opacity** — Blocks legitimate git/read-only commands outside session dir with no configuration, audit trail, or operator visibility (#10860, #10859)
- **Content leakage to users** — Multiple dialects of tool calls, thinking blocks, and internal scaffolding reaching user-visible output despite sanitizers (#10692, #10700, #10791, #10797)
- **Flaky E2E tests blocking releases** — 10+ CI failure tracking issues in 24h; team investing in retries (#10842) and test hardening (#10758)
- **Skill discovery noise** — Installed skills flood slash completion, hiding core commands (#9942)
- **Daemon cross-session interference** — Shared event subscription blocks concurrent conversations (#10688), stale channel selections block new starts (#10782)
- **Dependency security debt** — New CVE advisories (fast-uri, qs, uuid) failing audit on main lockfile (#10850)

---

*Generated from GitHub data at 2026-09-03. Links point to live issues/PRs on [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code).*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-09-03

---

## 1. Today's Highlights

The **v0.9.12 milestone** is the dominant focus, with 10+ integration PRs landing today covering fleet-only UX, provider neutrality, brand unification, and the plugin marketplace. A critical **lane TTL cleanup bug** (#5824) was fixed that could recursively delete unverified paths. The project is actively decomposing mega-files (lib.rs 18.7k, config.rs 12.3k) and retiring DeepSeek-era identifiers in favor of provider-neutral architecture.

---

## 2. Releases

**No new releases in the last 24 hours.** The v0.9.12 release is being assembled via integration PR #5862 (10 UX slices) and PR #5826 (shell, brand, fleet, Operate mega-PR).

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5573](https://github.com/Hmbown/Codewhale/issues/5573) | **v0.9.12 milestone tracker** — central coordination for the release | 23 comments; tracks all slices, gates, PR/reinstall/self-test steps; product authority reference | High — release coordination hub |
| [#5316](https://github.com/Hmbown/Codewhale/issues/5316) | **EPIC-005: TUI Crate Decomposition** | 21 comments; umbrella for splitting monolithic crates; architectural prerequisite for maintainability | High — foundational refactor |
| [#5588](https://github.com/Hmbown/Codewhale/issues/5588) | **Provider neutrality: 18 DeepSeek-exclusive gates** | 7 comments; audit found 2,281 lines of DeepSeek-specific code; 18 gates fixed (NVIDIA NIM env leak, ghost-text, etc.) | High — multi-provider support |
| [#5586](https://github.com/Hmbown/Codewhale/issues/5586) | **Decompose mega-files: lib.rs (18.7k), config.rs (12.3k), client.rs (11.1k)** | 6 comments; explicit 0.9.12 cleanup lane; pain point for contributors | High — developer experience |
| [#5533](https://github.com/Hmbown/Codewhale/issues/5533) | **Per-session control socket for supervised operation** | 5 comments; enables external supervisors (tmux, CI, automation) to message/interrupt/relaunch/status | Medium — automation/ops |
| [#5820](https://github.com/Hmbown/Codewhale/issues/5820) | **Ollama: input budget collapses to 1024 tokens on 32K models** | 2 comments; default 64K output reservation clamps context window; affects local model users | Medium — local LLM users |
| [#5575](https://github.com/Hmbown/Codewhale/issues/5575) | **Fleet/subagent role posture has no single source of truth** | 2 comments; role definitions drifted in 5+ places; caused verifier contradiction bug | Medium — agent reliability |
| [#5268](https://github.com/Hmbown/Codewhale/issues/5268) | **Mid-turn control: queue / send-now / Esc-keep-draft + named waits** | 3 comments; composer UX while agent runs; steering feels like "fighting a locked chat bubble" | Medium — interactive UX |
| [#5271](https://github.com/Hmbown/Codewhale/issues/5271) | **Session peek: list/peek/answer approvals without full attach** | 2 comments; multi-session control beyond resume picker; pin/dispatch/stop without losing context | Medium — multi-session workflow |
| [#5860](https://github.com/Hmbown/Codewhale/issues/5860) | **Continuous Self-Learning from Dialog (Automatic Skill Evolution)** | 1 comment; automatic pattern extraction from repeated problem-solving; skill system currently static | Low — forward-looking R&D |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Status | Description |
|---|----|--------|-------------|
| [#5862](https://github.com/Hmbown/Codewhale/pull/5862) | OPEN | **v0.9.12 Fleet-only UX mega-PR** — 10 slices: workbar rename (sidebar→workbar), underwater default theme, provider settings regroup, logo, hover contract, retro theme, startup card |
| [#5861](https://github.com/Hmbown/Codewhale/pull/5861) | OPEN | **Brand unification** — canonical whale mark on account-entry pages (sign-in/up); aligns with web/components/whale.tsx and TUI braille mark |
| [#5858](https://github.com/Hmbown/Codewhale/pull/5858) | OPEN | **Collapse ocean_treatment into ThemeId::Underwater** — 11 commits: locale, mark assets, deepsea alias, single picker, read-only config migration, OceanRamp keys |
| [#5832](https://github.com/Hmbown/Codewhale/pull/5832) | CLOSED | **Provider neutrality gates** — fixes #5588; remaining-credit lookup (/balance), un-gate ghost-text across protocols, dispatch provider-neutral paths |
| [#5831](https://github.com/Hmbown/Codewhale/pull/5831) | CLOSED | **Per-session control socket** — Unix JSON-RPC at `<sessions-dir>/<id>/control.sock`; verbs: message, interrupt, relaunch, status |
| [#5840](https://github.com/Hmbown/Codewhale/pull/5840) | CLOSED | **Persist tool-call identity for runtime restarts** — fixes #5823; threads with tool-call history no longer fail 400 after restart |
| [#5854](https://github.com/Hmbown/Codewhale/pull/5854) | CLOSED | **Lane TTL cleanup: require verified managed-worktree identity** — fixes #5824; prevents recursive delete of unverified paths |
| [#5833](https://github.com/Hmbown/Codewhale/pull/5833) | OPEN | **FEAT-019: Memory capability** — `CommandCapabilities::MEMORY`, `CommandMemoryContext` facet; TUI adapter with typed outcomes (search, remember, get, export, reindex, delete) |
| [#5829](https://github.com/Hmbown/Codewhale/pull/5829) | CLOSED | **FEAT-022: Skills command shapes** — portable contextual dispatch for `/skills`, `/skill`, `/review`, `/restore`; retained-host validation |
| [#5842](https://github.com/Hmbown/Codewhale/pull/5842) | OPEN | **Plugin + marketplace management over /v1/apps (Engine side)** — gated local plugin system; app side follows separately |

---

## 5. Feature Request Trends

From the issue landscape, four clear directions emerge:

1. **Multi-agent / Fleet UX** — Persistent agents rail (#5479), session peek (#5271), subagent role posture unification (#5575), mid-turn control (#5268). The TUI is evolving from single-thread to fleet orchestration.
2. **Provider-agnostic architecture** — Systematic removal of DeepSeek-specific gates (#5588, #5443), provider-neutral credential handling (#5637), Ollama budget fixes (#5820).
3. **External control & automation** — Control sockets (#5533), debugger protocol (#3981), structural code search (#3980), browser automation (#3358) — positioning CodeWhale as an embeddable agent runtime.
4. **Durable knowledge & planning** — Memory system (#5833), skills evolution (#5860), durable plan artifacts (#5269), attention-aware notifications (#4402).

---

## 6. Developer Pain Points

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Mega-file maintenance burden** | lib.rs (18.7k), config.rs (12.3k), client.rs (11.1k), runtime_threads.rs (9.3k) explicitly called out in #5586 | High — dedicated 0.9.12 cleanup lane |
| **Provider lock-in leakage** | 2,281 lines of `deepseek` occurrences; 18 gates fixed in #5588; DEEPSEEK_YOLO alias retired in #5841 | High — systematic audit underway |
| **Fleet/subagent observability** | No single source of truth for role posture (#5575); agents rail requested (#5479); session peek missing (#5271) | High — multiple issues, active PRs |
| **Mid-turn steering UX** | "Fighting a locked chat bubble" (#5268); queue vs send-now vs cancel-keep-draft not crisp | Medium — UX-focused issues |
| **Local model context window bugs** | Ollama 32K model clamped to 1K input (#5820) | Medium — affects local LLM users |
| **Destructive cleanup bugs** | Lane TTL cleanup deleting unverified paths (#5824) | Medium — safety-critical fix merged |
| **Setup wizard complexity** | 3,847-line setup/mod.rs (#3954); constitution, runtime, provider, persistence all mixed | Medium — refactor tracked |

---

**Bottom line:** The project is in a heavy **architectural hardening phase** for v0.9.12 — crate decomposition, provider neutrality, fleet UX, and plugin marketplace are converging. Expect v0.9.12 to ship once the integration PRs (#5862, #5826) pass CI. Contributors should watch the milestone tracker (#5573) for slice ownership.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*