# AI CLI Tools Community Digest 2026-08-26

> Generated: 2026-08-26 00:55 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Ecosystem (2026-08-26)

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **enterprise-grade platforms** (Claude Code, Codex, Copilot CLI, Gemini CLI) with dedicated security, compliance, and multi-provider architectures, and **community-driven tools** (OpenCode, Qwen Code, CodeWhale, Pi, Kimi) prioritizing provider neutrality, hackability, and local-first workflows. All tools are converging on **MCP as the universal extension protocol**, **multi-agent orchestration** as the next UX paradigm, and **session/context governance** as the primary reliability frontier. Windows remains the weakest platform across the board—installer distribution, GPU crashes, path handling, and process locking are systemic gaps. Release cadences range from daily alphas (Codex, Gemini) to weekly stables (Claude Code, OpenCode), with most teams shipping hotfixes within 24h of critical regressions.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Releases (24h) | Top Issue Engagement |
|------|---------------------|-------------------|----------------|---------------------|
| **Claude Code** | 10 (hot) | 1 | 2 patches (v2.1.246/245) | 155 comments / 24 👍 (#84352 CVP re-blocks) |
| **OpenAI Codex** | 10 (hot) | 10 (all internal bot) | 3 alphas (rust-v0.150.0-α.9–11) | 187 👍 (#13993 standalone Windows installer) |
| **Gemini CLI** | 10 (hot) | 10 | 3 (stable v0.57.0, preview v0.58.0, nightly) | 8 👍 (#21409 generalist agent hangs) |
| **GitHub Copilot CLI** | 10 (hot) | 1 | 1 prerelease (v1.0.81-10) | 74 👍 (#13 Vi/Vim input mode) |
| **OpenCode** | 10 (hot) | 10 | 1 stable (v1.18.23) | 13 comments / 5 👍 (#44300 free-tier tool call outage) |
| **Qwen Code** | 10 (hot) | 10 | 0 | 10 comments (#9459 `/effort max` session brick) |
| **CodeWhale (DeepSeek TUI)** | 10 (hot) | 10 (7 merged today) | 0 (v0.9.12 RC prep) | 49 comments (#7547 Windows support strategy) |
| **Pi** | 10 (hot) | 10 (23 closed total) | 0 | 49 comments (#7547 Windows strategy) |
| **Kimi Code** | 2 (critical) | 0 | 0 | 2 comments (#2617 silent data loss) |

**Notes**: Codex and Copilot CLI show high internal velocity (bot-driven PR batches); CodeWhale/Pi demonstrate strong community PR throughput; Kimi is notably quiet on PR side despite P0 bugs.

---

## 3. Shared Feature Directions

| Direction | Tools Demanding It | Specific Needs |
|-----------|-------------------|----------------|
| **MCP Protocol Maturity** | Codex, Copilot CLI, Gemini CLI, OpenCode, Qwen Code, CodeWhale | draft-07 `outputSchema` support (Codex #86142, CodeWhale #5588), OAuth/IdP flows for enterprise (Codex #40739, #40722), attachment-scoped permissions (Codex #40728), MCP server cost visibility (CodeWhale #5611) |
| **Multi-Agent Orchestration** | Qwen Code, OpenCode, Gemini CLI, Codex, Copilot CLI | Background agent coordination (Qwen #8097, OpenCode #33618), subagent lifecycle hygiene (Gemini #22323, #25166), delegation reliability (Codex #25179, #17598), supervised headless fleets (CodeWhale #5533, #5531) |
| **Session/Context Governance** | All 9 tools | Compaction reliability (Claude #89040, Qwen #9309, CodeWhale #4394, Gemini #26522), token budgets & rotation (Qwen #8927, #9988, CodeWhale #5567), context editing/deletion (OpenCode #7712, #19143), silent failure detection (Claude #74719, Kimi #2617) |
| **Windows-First Distribution** | Codex, Copilot CLI, Claude Code, Gemini CLI, Pi, CodeWhale | Standalone installer (Codex #13993, 187 👍), MSIX/AppX reliability (Claude #80444, #85901), PowerShell 7/WSL parity (Pi #7547, #8582, CodeWhale #5610), worktree cleanup (Copilot #4593) |
| **Provider Neutrality / BYOM** | CodeWhale, OpenCode, Qwen Code, Pi, Codex | Remove hardcoded provider gates (CodeWhale #5588: 18 DeepSeek-exclusive), native provider SDKs (OpenCode #45108, #45098: Groq, DeepInfra, Cerebras, Together, Azure CLI), custom model switching in-session (Codex #3709, Copilot #3709) |
| **Observability & Debugging** | OpenCode, Qwen Code, Codex, CodeWhale, Copilot CLI | Session search (OpenCode #19143), token usage panels (Qwen #9988), telemetry hardening (Codex #40726, #40724), lifecycle event outbox (CodeWhale #5531), DAP integration (Qwen #10051) |

---

## 4. Differentiation Analysis

| Dimension | Enterprise Platforms | Community / Hackable Tools |
|-----------|---------------------|---------------------------|
| **Core Philosophy** | Managed service, compliance, safety rails, enterprise SSO | Local-first, provider-agnostic, extensible, user-owned data |
| **Target User** | Enterprise dev teams, regulated industries, Org admins | Power users, OSS contributors, researchers, solo devs |
| **Extension Model** | MCP (curated), Skills/Plugins (signed, policy-gated) | MCP (open), native provider plugins, shell commands, crate decomposition |
| **Session Model** | Cloud-synced, org-scoped, audit-logged | Local SQLite/JSONL, portable, user-controlled |
| **Release Strategy** | Stable + prerelease channels, MSIX/Store, signed binaries | Nightly/preview/stable, cargo/npm/pip, self-update via `/relaunch` |
| **Key Technical Bets** | Cyber Verification Program (Claude), Guardian reviewer (Codex), Cloud Workstations (Gemini), Entra ID (Copilot) | gix/gitoxide (CodeWhale), hermetic core tests (OpenCode), zero-dep sandboxing (Gemini), command shapes (CodeWhale) |
| **Pain Point Profile** | Auth/CVP reliability, Windows packaging, update cadence, policy gating | Provider wire-format drift, git locking, compaction contracts, npm/extension loader fragility |

**Notable Outliers**:
- **Claude Code**: Only tool with *cyber safeguard re-blocks* as top issue (#84352) — unique enterprise compliance surface.
- **CodeWhale**: Only tool building *supervised control surface* (Unix socket JSON-RPC, `/relaunch`, lifecycle outbox) for fleet automation.
- **Qwen Code**: Only tool investing heavily in *automated code review pipeline* (6+ PRs on incremental, auditable, recoverable rounds).
- **Pi**: Only tool with *explicit Windows strategy debate* (49 comments) and *Chinese localization epic*.
- **Kimi**: Only tool with *zero PR activity* despite P0 silent data-loss bug.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum (Enterprise)** | **Codex, Gemini CLI, OpenCode, CodeWhale** | Daily/alpha releases, 10+ PRs/day (internal or community), rapid hotfix cycles, structured epic tracking |
| **Steady Momentum (Enterprise)** | **Claude Code, Copilot CLI** | Weekly stable patches, lower PR velocity but high issue engagement (155 comments on CVP), clear roadmap signals |
| **Growing Momentum (Community)** | **Qwen Code, Pi** | 10+ PRs/day, major architectural refactors (review system, crate decomposition), active localization |
| **Low Momentum / Risk** | **Kimi Code** | 0 PRs in 24h, 2 critical bugs unfixed, no releases, minimal community signal |

**Maturity Indicators**:
- **Most production-ready**: Claude Code (Cyber Verification, MSIX, permissions classifier), Copilot CLI (plugins dashboard, universal delete key), OpenCode (hermetic tests, native providers, session deep links).
- **Best developer experience polish**: CodeWhale (focused transcript actions, context cost inspector, `/relaunch`), Qwen Code (WebShell workflow cockpit, token panel), Pi (mouse cursor placement, eager tool execution).
- **Biggest reliability gaps**: Kimi (silent data loss), Codex (session state corruption, update fatigue), Claude Code (TUI regressions accumulating since v2.1.150).

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **MCP is the de facto plugin standard** | 7/9 tools actively fixing MCP compat, OAuth, scoping | Invest in MCP server development; expect protocol stabilization by 2026-Q4 |
| **Multi-agent is the new "chat"** | Every tool has coordination bugs + roadmap epics | Design workflows for *agent fleets*, not single assistants; demand observability |
| **Windows is a competitive differentiator** | Codex (187 👍 installer), Pi (49 comments strategy), CodeWhale (CI fixes), Claude (MSIX crashes) | Tools that solve Windows natively (not WSL) will capture enterprise adoption |
| **Session portability = vendor lock-in reducer** | OpenCode deep links, CodeWhale `/relaunch`, Qwen WebShell, Copilot session sharing | Evaluate tools on *session export/import* and *cross-machine resume* |
| **Cost transparency becoming table stakes** | OpenCode (model cost picker 11 👍), CodeWhale (per-tool cost, fleet ceiling), Qwen (token panel) | Procurement will require per-session/model/tool cost breakdowns |
| **Local-first / air-gapped demand rising** | Codex standalone installer, Pi native Windows, CodeWhale self-update, Kimi offline gaps | Cloud-only tools will lose regulated/defense/finance segments |
| **Provider abstraction layers are leaking** | Codex (OpenRouter empty tools), Qwen (OpenAI-compat `/effort max`), CodeWhale (18 DeepSeek gates), Pi (OpenRouter reasoning) | *Test your target provider matrix*; don't assume "OpenAI-compatible" works |
| **Extension loader fragility** | Pi (npm 11.16 breaks `pi update --extensions`), Copilot (hook trust UX), Gemini (install races) | Standardize on *signed, sandboxed, declarative* extension manifests |

---

**Bottom Line**: The ecosystem is splitting into **managed platforms** (optimize for compliance, SSO, audit) and **hackable runtimes** (optimize for provider freedom, local control, fleet automation). For 2026 H2, **MCP maturity, Windows-native distribution, and session portability** are the three axes where tooling choices will have longest-term strategic impact.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-08-26)

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill | Functionality | Discussion Highlights | Status |
|---|-------|---------------|----------------------|--------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: run_eval.py fix** | Fixes core evaluation harness reporting 0% recall on all skills; addresses Windows stream reading, trigger detection, parallel workers | Directly resolves [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍) — "description-optimization loop is currently optimizing against noise" | OPEN |
| [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind: Zero-Cost Multi-Agent Orchestration** | Delegates mechanical work to headless opencode workers (free models) while Claude Code remains planner/reviewer/merger | Novel cost-optimization architecture; "expensive model's context is the scarce resource, not its intelligence" | OPEN |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit v1.3.0** | Mechanical file verification → four-dimension reasoning audit (damage-severity priority); universal across projects/stacks/models | Quality-gate pipeline; Step 0 verifies every claimed output file exists before reasoning audit | OPEN |
| [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | Profile-based SSH/Slurm workflows for SCNet HPC clusters: connection, partition, memory, module, accelerator guidance | Enterprise HPC workflow automation; cluster discovery, profile refresh, compute-node ops | OPEN |
| [#568](https://github.com/anthropics/skills/pull/568) | **servicenow** | Broad ServiceNow platform assistant: ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, SecOps, Vuln Response, IntegrationHub | Most comprehensive enterprise platform skill submitted; active maintenance (updated 2026-08-12) | OPEN |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Full testing stack: Trophy model, AAA, React Testing Library, contract testing, E2E, property-based, mutation, flakiness | Addresses widespread demand for structured testing guidance; covers philosophy → practice | OPEN |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Prevents orphan words, widow paragraphs, numbering misalignment in AI-generated documents | "Affects every document Claude generates"; users rarely ask for typography but need it | OPEN |
| [#1602](https://github.com/anthropics/skills/pull/1602) | **Evaluation & benchmark stability fixes** | Fixes MCP result serialization, metric calculation, encoding, script stability across skills | Cross-cutting reliability PR; resolves TextContent JSON serialization, fabricated tool errors | OPEN |

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issues) | Signal Strength |
|-------|-------------------|-----------------|
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍): Community skills distributed under `anthropic/` namespace enable impersonation; [#1175](https://github.com/anthropics/skills/issues/1175): SharePoint permission logic in SKILL.md raises security concerns | 🔴 Critical |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍): Native org-wide skill library vs. manual file sharing via Slack/Teams | 🟢 High |
| **Evaluation & Tooling Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍): `run_eval.py` 0% trigger rate; [#1390](https://github.com/anthropics/skills/issues/1390): mcp-builder evaluation scores 0/N; [#1487](https://github.com/anthropics/skills/issues/1487): claude-api injects 156k tokens | 🟢 High |
| **Quality Gates & Reasoning Audits** | [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments, 1👍): Three-gate pipeline (Calibration → Adversarial Review → Delivery Verification); [#1367](https://github.com/anthropics/skills/pull/1367) PR implements self-audit | 🟡 Emerging |
| **Platform/Cloud Integration** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments): AWS Bedrock support; [#16](https://github.com/anthropics/skills/issues/16) (4 comments): Expose Skills as MCPs | 🟡 Emerging |
| **Document Fidelity** | [#12](https://github.com/anthropics/skills/issues/12) (4 comments, 1👍): Whitespace reformatting corrupts docx; [#538](https://github.com/anthropics/skills/pull/538), [#541](https://github.com/anthropics/skills/pull/541): case-sensitivity & bookmark collision fixes | 🟢 Steady |

---

## 3. High-Potential Pending Skills (Active Open PRs)

| PR | Skill | Why It May Land Soon |
|----|-------|----------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator evaluation fix** | Blocks all skill optimization; referenced by 12-comment issue; Windows fixes included |
| [#1602](https://github.com/anthropics/skills/pull/1602) | **Evaluation stability suite** | Cross-repo reliability fixes; addresses multiple silent failure modes |
| [#1099](https://github.com/anthropics/skills/pull/1099) / [#1050](https://github.com/anthropics/skills/pull/1050) | **Windows skill-creator compat** | Two focused 1-line fixes; unblocks Windows contributors |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Universal need (every generated doc); narrow scope, high impact |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive coverage; fills documented gap in skills collection |
| [#486](https://github.com/anthropics/skills/pull/486) | **odt (OpenDocument)** | ISO-standard format support; complete create/fill/read/convert workflow |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel (retro game dev)** | MCP-backed; niche but complete implementation with iteration loop |
| [#1628](https://github.com/anthropics/skills/pull/1628) | **hivemind (multi-agent)** | Innovative architecture; leverages free models for cost optimization |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for trustworthy, production-grade skill infrastructure — reliable evaluation tooling, secure distribution namespaces, and organizational sharing — rather than any single domain-specific skill.**

---

# Claude Code Community Digest — 2026-08-26

---

## 1. Today's Highlights

Two patch releases shipped in 24 hours: **v2.1.246** adds a startup warning for unsafe Bash allow-rules with leading wildcards and an Auto mode tab in `/permissions` for editing classifier rules; **v2.1.245** fixes a startup crash on Linux distros shipping glibc 2.44 (Arch, CachyOS, Fedora Rawhide). The issue tracker shows heightened friction around **Cyber Verification Program re-blocks** (155 comments), **Windows MSIX packaging crashes**, and **TUI regressions** (scroll wheel, text selection, SGR mouse mode leak).

---

## 2. Releases

### v2.1.246
- **Startup warning** for Bash allow rules like `Bash(git * main)` — wildcard before subcommand also matches injected options (e.g., `git -c … main`), creating unintended permission grants.
- **Auto mode tab** in `/permissions` — view and edit the classifier rules that decide which tools run automatically.
- *Additional changes truncated in feed.*

### v2.1.245
- **Fixed startup crash** on Linux with glibc 2.44 (Arch, CachyOS, Fedora Rawhide).

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#84352](https://github.com/anthropics/claude-code/issues/84352) | **CVP-approved org still blocked by cyber safeguards** | Verified orgs suddenly re-blocked; portal shows "Under review" despite prior approval email. Blocks all Claude Code usage. | 155 comments, 24 👍 — highest engagement in tracker |
| [#80444](https://github.com/anthropics/claude-code/issues/80444) | **Windows Desktop GPU crash (0x060C201E) leaves MSIX unlaunchable** | Fatal GPU-process crash in Browser tab; requires full Repair to recover. Reproduced on two NVIDIA driver versions. | 56 comments, 9 👍 — blocks Windows desktop users |
| [#65833](https://github.com/anthropics/claude-code/issues/65833) | **TUI scroll wheel sends arrow keys instead of scrolling** (v2.1.150+) | Regression: mouse wheel cycles input history, cannot scroll conversation output. Affects WSL & Linux TUI users. | 41 comments, 99 👍 — high upvote count signals broad impact |
| [#86142](https://github.com/anthropics/claude-code/issues/86142) | **MCP servers with draft-07 outputSchema rejected client-side** | `"unsupported dialect"` error prevents any tool dispatch. Blocks MCP adoption for structured outputs. | 29 comments, 12 👍 — CLOSED but highlights MCP compatibility gap |
| [#85891](https://github.com/anthropics/claude-code/issues/85891) | **Windows Desktop: window stays always-on-top, no setting to disable** | Topmost window behavior breaks multitasking; no UI toggle. Mirrors macOS issue #66516. | 25 comments, 37 👍 — strong demand for fix |
| [#82049](https://github.com/anthropics/claude-code/issues/82049) | **Magic-link sign-in emails delayed 2–5 minutes since mid-July** | Login flow broken for Claude Code session startup; affects all platforms. | 14 comments, 25 👍 — auth reliability concern |
| [#89040](https://github.com/anthropics/claude-code/issues/89040) | **`/compact` silently fails on very large conversations** | Summary generated but no `compact_boundary` written; context unchanged, no error shown. Silent data-loss risk. | 2 comments, new — critical for long-running sessions |
| [#74719](https://github.com/anthropics/claude-code/issues/74719) | **Worktree GC deletes DIRTY/UNPUSHED agent worktrees** | `worktree.cleanupPeriodDays` removes uncommitted work, contradicting documented "clean+pushed only" behavior. | 2 comments, 1 👍 — data-loss severity |
| [#78027](https://github.com/anthropics/claude-code/issues/78027) | **Injected grep (ugrep) consumes 20+ GB RAM on bounded-repeat regex** | Bundled `ugrep` wrapper OOMs machine on patterns like `(a{1,100})*`. Hard freeze, no recovery. | 2 comments, DUPLICATE — perf/security risk |
| [#89663](https://github.com/anthropics/claude-code/issues/89663) | **ECONNRESET on streaming requests (Windows, Node 26.3.0)** | Nearly every streaming request fails in CLI & VS Code extension; browser UI works. | 0 comments, new — potential regression in bundled Node |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|----|---------|
| [#89404](https://github.com/anthropics/claude-code/pull/89404) | **validate-agent.sh: don't abort at first warning; stop false-flagging valid agents** | Fixes `set -euo pipefail` interactions: arithmetic `((count++))` returns non-zero on zero, triggering abort. Now tolerates warnings and validates plugin-dev's own agents correctly. |

*Only 1 PR updated in last 24h — low contribution velocity.*

---

## 5. Feature Request Trends

1. **Rule system granularity** — Prompt-topic triggers for `.claude/rules/` ([#87804](https://github.com/anthropics/claude-code/issues/87804)), skill-scoped hooks ([#89669](https://github.com/anthropics/claude-code/issues/89669)), and standing prohibitions that catch incremental drift ([#89464](https://github.com/anthropics/claude-code/issues/89464)).
2. **MCP protocol parity** — Support for draft-07 `outputSchema` ([#86142](https://github.com/anthropics/claude-code/issues/86142)), Slack connector visibility to routines/MCP ([#89665](https://github.com/anthropics/claude-code/issues/89665)).
3. **Remote Control on personal devices** — Independent, trackable sessions without spawning nested processes ([#89670](https://github.com/anthropics/claude-code/issues/89670)).
4. **TUI accessibility & polish** — Text selection in chat input ([#80734](https://github.com/anthropics/claude-code/issues/80734)), `prefersReducedMotion` timer freeze ([#85972](https://github.com/anthropics/claude-code/issues/85972)), OSC 8 hyperlinks regression ([#79839](https://github.com/anthropics/claude-code/issues/79839)).
5. **Windows/MSIX reliability** — AppX servicing kills background agents ([#82277](https://github.com/anthropics/claude-code/issues/82277)), Code Integrity missing `CodeIntegrity.cat` ([#85901](https://github.com/anthropics/claude-code/issues/85901)), update lock by `cowork-svc.exe` ([#73694](https://github.com/anthropics/claude-code/issues/73694)).

---

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Evidence |
|------------|----------|
| **Silent failures & data loss** | `/compact` no-op on large convos ([#89040](https://github.com/anthropics/claude-code/issues/89040)); worktree GC deletes dirty work ([#74719](https://github.com/anthropics/claude-code/issues/74719)); skill hooks persist past scope ([#82801](https://github.com/anthropics/claude-code/issues/82801)). |
| **Windows MSIX packaging fragility** | GPU crash bricks app ([#80444](https://github.com/anthropics/claude-code/issues/80444)); missing Code Integrity catalog ([#85901](https://github.com/anthropics/claude-code/issues/85901)); servicing kills agents ([#82277](https://github.com/anthropics/claude-code/issues/82277)); update file locks ([#73694](https://github.com/anthropics/claude-code/issues/73694)). |
| **TUI regressions accumulating** | Scroll wheel broken since v2.1.150 ([#65833](https://github.com/anthropics/claude-code/issues/65833)); no text selection ([#80734](https://github.com/anthropics/claude-code/issues/80734)); SGR mouse mode leak on exit ([#79015](https://github.com/anthropics/claude-code/issues/79015)); OSC 8 links gone ([#79839](https://github.com/anthropics/claude-code/issues/79839)). |
| **Auth & session reliability** | Magic-link delays 2–5 min ([#82049](https://github.com/anthropics/claude-code/issues/82049)); CVP re-blocks approved orgs ([#84352](https://github.com/anthropics/claude-code/issues/84352)); usage limits hit without activity ([#61012](https://github.com/anthropics/claude-code/issues/61012)). |
| **Bundled tooling hazards** | `ugrep` wrapper OOMs on regex ([#78027](https://github.com/anthropics/claude-code/issues/78027)); Node 26.3.0 ECONNRESET on Windows ([#89663](https://github.com/anthropics/claude-code/issues/89663)). |

---

*Digest generated from GitHub data as of 2026-08-26. Links point to anthropics/claude-code repository.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-26

---

## 1. Today's Highlights

The Codex team shipped three rapid alpha releases (0.150.0-alpha.9–11) while closing a large batch of internal PRs focused on enterprise MCP/OAuth, Guardian reviewer isolation, Bazel test infrastructure, and telemetry hardening. Community attention remains concentrated on Windows usability gaps — standalone installer demand (#13993, 187 👍), MCP configuration breakage in v26.820 (#40715), and a sandbox crash loop (#39251) — plus a strong push to make the temporary 5-hour usage-limit removal permanent (#34035, 140 👍).

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.150.0-alpha.9` | Alpha | Incremental alpha in the 0.150 series |
| `rust-v0.150.0-alpha.10` | Alpha | Follow-up alpha |
| `rust-v0.150.0-alpha.11` | Alpha | Latest alpha; no changelog published yet |

> **Note**: All three are pre-release Rust crate publishes; no desktop/CLI binary updates accompany them.

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#13993](https://github.com/openai/codex/issues/13993) | **Support standalone Windows installer (`codex-setup.exe`)** | Corporate/offline environments cannot use Microsoft Store; blocker for enterprise adoption. | 81 comments, **187 👍** — highest engagement in repo |
| [#34035](https://github.com/openai/codex/issues/34035) | **Make 5-hour usage limit removal permanent** | Temporary lift (announced Jul 12) is widely relied upon; reverting would disrupt Plus/Pro/Business workflows. | 14 comments, **140 👍** — strong consensus |
| [#28919](https://github.com/openai/codex/issues/28919) | **Windows app missing “Control other devices” tab** | Prevents remote-device pairing; core collaboration feature absent on Windows. | 44 comments, 42 👍 |
| [#38350](https://github.com/openai/codex/issues/38350) | **Recurring scheduled tasks disable themselves** | Automation reliability regression in ChatGPT Web; tasks silently pause after successful runs. | 40 comments |
| [#13018](https://github.com/openai/codex/issues/13018) | **Allow deleting threads (not just archiving)** | UX gap: users must manually delete files in `~/.codex/archived_sessions/`. | **CLOSED** — 29 comments, 105 👍 |
| [#40715](https://github.com/openai/codex/issues/40715) | **Windows 26.820.60940 fails with “invalid transport in mcp_servers.codex_app”** | Stable release breaks MCP config; beta 26.727 works — regression in transport parsing. | 17 comments, 9 👍 |
| [#25179](https://github.com/openai/codex/issues/25179) | **Stale subagents accumulate in cache/UI** | Long-running sessions leak phantom subagents that cannot be closed; UI clutter + resource waste. | 21 comments, 3 👍 |
| [#17598](https://github.com/openai/codex/issues/17598) | **Native subagent orchestration broken with non-OpenAI custom providers** | Blocks BYOM (bring-your-own-model) workflows; subagent spawning fails silently. | 14 comments, 3 👍 |
| [#34026](https://github.com/openai/codex/issues/34026) | **Windows Desktop: completed threads stuck “thinking”; new messages queue locally** | Session state desync — user sees spinner forever, input buffers but never sends. | 14 comments |
| [#39841](https://github.com/openai/codex/issues/39841) | **Workspace terminal fails with “setup refresh had errors”** | Terminal completely non-functional on Windows 11; blocks CLI-in-app workflows. | 13 comments, 1 👍 |

---

## 4. Key PR Progress (Today’s Merged Work)

| PR | Area | Summary |
|----|------|---------|
| [#40742](https://github.com/openai/codex/pull/40742) | **Guardian Review** | Isolated reviewer sessions with dedicated policy prompt, low-reasoning model selection, and fallback chain. |
| [#40739](https://github.com/openai/codex/pull/40739) | **Enterprise MCP/OAuth** | IdP identity resolution against discovered auth metadata; requires configured issuer, public-client auth, ID-JAG token exchange. |
| [#40737](https://github.com/openai/codex/pull/40737) | **MCP Output** | Preserve structured MCP tool results as typed content items instead of flattening to text strings. |
| [#40736](https://github.com/openai/codex/pull/40736) | **Test Infra** | Bazel rule for Noise relay compatibility suite; covers app-server↔exec-server across current, 0.149.1, and min-supported releases. |
| [#40728](https://github.com/openai/codex/pull/40728) | **MCP Permissions** | Attachment-owned MCP servers retain owner’s permission profile instead of inheriting thread-wide sandbox authority. |
| [#40726](https://github.com/openai/codex/pull/40726) | **Telemetry** | SQLite log persistence metrics: batch size, write latency, failures, dropped entries; exporter diagnostics isolated from sink. |
| [#40724](https://github.com/openai/codex/pull/40724) | **Skill Telemetry** | Plugin-attributed dimensions (`plugin_id`, `model_slug`, `reasoning_effort`) added to `codex.skill.injected` metrics. |
| [#40722](https://github.com/openai/codex/pull/40722) | **Enterprise OAuth** | Non-interactive two-step ID-JAG → MCP bearer token exchange with trusted-endpoint validation. |
| [#40718](https://github.com/openai/codex/pull/40718) | **Bazel Repos** | Module extension for checksum-pinned Linux x86-64 release packages (Codex host + GitHub Releases sources). |
| [#40716](https://github.com/openai/codex/pull/40716) | **Worktrees** | `WorktreeManager` binds managed linked worktrees to threads via atomic `codex-thread.json` in Git metadata. |

> All 10 PRs were authored/merged by `copyberry[bot]` today — indicating a coordinated internal landing.

---

## 5. Feature Request Trends

1. **Windows-first distribution** — Standalone installer (#13993), Store binary location (#28392), crash fixes (#39443, #39251) dominate Windows feedback.
2. **Session/thread lifecycle control** — Delete threads (#13018), prevent ghost chats (#40219, #40674), reliable resume (#39823), search visibility (#30385).
3. **Usage-limit policy stability** — Community treats the 5-hour lift as de-facto permanent; any reversal risks backlash (#34035).
4. **Enterprise MCP/OAuth maturity** — IdP resolution, ID-JAG exchange, attachment-scoped permissions signal push for SSO/zero-trust readiness.
5. **Subagent hygiene** — Stale agent cleanup (#25179, #37041), orchestration with custom models (#17598), per-thread process leaks (#35485).
6. **Hook reliability** — `exec` tool skipping `PreToolUse` (#23411), trust bypass required for `codex exec` (#32491), installer hook trust model (#21615).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence |
|------------|----------|
| **Windows installer/distribution friction** | Store-only delivery blocks air-gapped/corporate machines; bundled `codex.exe` relocation fails (#40700); sandbox setup crashes (#39251). |
| **Session state corruption** | Threads disappear (#40674), reappear as “thinking” (#34026), resurrect deleted subagents (#37041), fail resume with DB lock errors (#35555, #39823). |
| **MCP config fragility** | Transport parsing regression in stable (#40715); OAuth/IdP flows incomplete for enterprise (#40739, #40722). |
| **Update cadence fatigue** | “Updates almost every several days” (#30122) — no opt-out or channel selection. |
| **Observability gaps** | No telemetry for SQLite log health until today (#40726); skill/plugin attribution missing (#40724); image-gen request IDs untracked (#40714). |
| **Hook system trust UX** | Project hooks ignored unless `--dangerously-bypass-hook-trust` (#32491); no supported path for IDE/wrapper installers to request trust (#21615). |

---

*Generated from GitHub data (openai/codex) covering 2026-08-25 → 2026-08-26. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-26

## 1. Today's Highlights
Three releases shipped in the last 24 hours: **v0.58.0-preview.0**, **v0.57.0** (stable), and a new nightly **v0.56.0-nightly**. The stable release fixes Cloud Workstations OAuth redirects and IDE connection directory mismatches, while the preview adds symlink handling consistency in ignore paths. Meanwhile, the issue backlog shows persistent agent reliability problems—subagent turn-limit misreporting, generalist agent hangs, and shell command "stuck" states—dominating maintainer attention.

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| **[v0.58.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.58.0-preview.0)** | Preview | • Changelog generation for v0.57.0<br>• **fix(core)**: consistent symlink evaluation in ignore path handling ([#28915](https://github.com/google-gemini/gemini-cli/pull/28915)) |
| **[v0.57.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0)** | Stable | • **fix(core)**: dynamic Cloud Workstations proxy redirect URI for OAuth ([#28688](https://github.com/google-gemini/gemini-cli/pull/28688))<br>• **fix(core)**: resolved swallowed directory mismatch in IDE connections |
| **v0.56.0-nightly.20260825** | Nightly | • **fix(a2a-server)**: clear stale cancellation error on new message turns ([#28940](https://github.com/google-gemini/gemini-cli/pull/28940))<br>• **fix(core)**: declare top-level safety checkers in write policy config |

## 3. Hot Issues (Top 10 by Impact & Discussion)
| Issue | Priority/Area | Why It Matters | Community Signal |
|-------|---------------|----------------|------------------|
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent recovery after MAX_TURNS reported as GOAL success | P1, Agent | Subagents silently mask turn-limit exhaustion as success, breaking trust in autonomous workflows. | 13 comments, 2👍, `status/need-retesting` |
| **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist agent hangs indefinitely | P1, Agent | Core delegation path stalls on simple ops (folder creation); workaround requires explicit "no subagents" instruction. | 8 comments, 8👍 |
| **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** Shell command execution stuck at "Waiting input" after completion | P1, Core | Frequent false "awaiting input" state on trivial commands; blocks interactive use. | 4 comments, 3👍 |
| **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** Leverage model's bash affinity via Zero-Dependency OS Sandboxing | P2, Agent (Enhancement) | Strategic: align tooling with Gemini 3's native POSIX tool-chaining strength; large effort. | 8 comments, 1👍 |
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** Assess AST-aware file reads, search, and mapping | P2, Agent (Epic) | Potential to reduce turns/tokens via precise method-bound reads; evaluates `tilth`/`glyph` tooling. | 7 comments, 1👍 |
| **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** Gemini underutilizes custom skills/sub-agents | P2, Agent | Model rarely auto-invokes skills (gradle, git) without explicit prompting; limits extensibility value. | 6 comments |
| **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** Auto Memory retries low-signal sessions indefinitely | P2, Agent | Extraction agent skips low-signal sessions but never marks them processed, causing repeated re-surfacing. | 5 comments |
| **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** Browser agent: automatic session takeover & lock recovery | P3, Agent | Persistent profile locking fails fast; needs resilience for `sessionMode: 'persistent'`. | 4 comments |
| **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** Browser subagent fails on Wayland | P1, Agent | Platform regression; blocks browser automation on modern Linux desktops. | 4 comments, 1👍 |
| **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)** Symlinked agent files in `~/.gemini/agents/` not recognized | P3, Agent | Symlinks ignored during agent discovery; breaks dotfile management workflows. | 4 comments |

## 4. Key PR Progress (Top 10 by Significance)
| PR | Status | Area | Summary |
|----|--------|------|---------|
| **[#28955](https://github.com/google-gemini/gemini-cli/pull/28955)** | Open | Core/Deps (XL) | Major dependency update + MCP configuration + ECC bundle integration. |
| **[#29089](https://github.com/google-gemini/gemini-cli/pull/29089)** | Open | Core (S) | Forward `abortSignal` to `retryWithBackoff` in `BaseLlmClient`; fixes cancellation propagation for summarization/classifier calls ([#29065](https://github.com/google-gemini/gemini-cli/issues/29065)). |
| **[#28863](https://github.com/google-gemini/gemini-cli/pull/28863)** | Open | Extensions (M/L) | Consent prompt for env changes on extension updates; sanitize runtime-altering env vars in MCP servers. Security hardening. |
| **[#29088](https://github.com/google-gemini/gemini-cli/pull/29088)** | Open | VS Code Companion (M) | Fix `IdeServer.stop()` hang when MCP streaming response (`GET /mcp`) holds connection open ([#28785](https://github.com/google-gemini/gemini-cli/issues/28785)). |
| **[#29087](https://github.com/google-gemini/gemini-cli/pull/29087)** | Open | CLI/Extensions (L) | Prevent concurrent extension install races using `proper-lockfile`; avoids interleaved file copies/metadata corruption. |
| **[#28789](https://github.com/google-gemini/gemini-cli/pull/28789)** | **Closed** | VS Code Companion (M/L/XL) | Resolves `stop()` hang + keep-alive ping leak in MCP sessions; duplicate of #29088 fix path. |
| **[#28984](https://github.com/google-gemini/gemini-cli/pull/28984)** | Open | Deps (XL) | Dependabot: 76 npm updates incl. `simple-git@3.36.0`, `@modelcontextprotocol/sdk@1.x`. |
| **[#29081](https://github.com/google-gemini/gemini-cli/pull/29081)** | Open | Security (L) | **SSRF prevention** in MCP OAuth metadata discovery: enforce HTTPS, validate origin matching, RFC 9728/8414 compliance. |
| **[#28930](https://github.com/google-gemini/gemini-cli/pull/28930)** | Open | Core (M) | Drop unsafe `diff.external` override that broke `git diff` ([#28928](https://github.com/google-gemini/gemini-cli/issues/28928)); empty string ≠ unset in Git config. |
| **[#29067](https://github.com/google-gemini/gemini-cli/pull/29067)** | Open | Security (S) | Remove misleading `securitySchemes` and hardcoded credentials from A2A server agent card ([#29001](https://github.com/google-gemini/gemini-cli/issues/29001)). |

## 5. Feature Request Trends
1. **Agent Observability & Control** — Strong demand for subagent trajectory visibility (`/chat share` [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), bug-report context inclusion [#21763](https://github.com/google-gemini/gemini-cli/issues/21763), and self-awareness of CLI flags/hotkeys [#21432](https://github.com/google-gemini/gemini-cli/issues/21432).
2. **AST-Aware Code Navigation** — Epic tracking [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) + investigation [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) for precise method-level reads/search to cut token usage and turns.
3. **Native Bash Affinity** — [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) proposes zero-dependency sandboxing to let models chain `grep`/`sed`/`awk` natively, aligning with Gemini 3 training.
4. **Memory System Hardening** — Cluster of issues ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)) around Auto Memory: retry loops, invalid patch quarantine, deterministic redaction, logging reduction.
5. **Extension Ecosystem Polish** — Gallery visibility [#28208](https://github.com/google-gemini/gemini-cli/issues/28208), install race fixes [#29087](https://github.com/google-gemini/gemini-cli/pull/29087), consent/sanitization [#28863](https://github.com/google-gemini/gemini-cli/pull/28863).

## 6. Developer Pain Points (Recurring Frustrations)
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Agent reliability / silent failures** | Subagent misreports success on turn limit [#22323](https://github.com/google-gemini/gemini-cli/issues/22323); generalist hangs [#21409](https://github.com/google-gemini/gemini-cli/issues/21409); browser agent Wayland fail [#21983](https://github.com/google-gemini/gemini-cli/issues/21983); settings ignored [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | 6+ issues, multiple P1 |
| **Shell/execution UX broken** | "Waiting input" ghost state [#25166](https://github.com/google-gemini/gemini-cli/issues/25166); interactive prompt stalls (Vite) [#22465](https://github.com/google-gemini/gemini-cli/issues/22465); tmp script sprawl [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | 4+ issues |
| **Tool explosion / 400 errors** | >128 tools triggers 400 [#24246](https://github.com/google-gemini/gemini-cli/issues/24246); model creates destructive git ops [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | 2 issues, high impact |
| **Memory/extension friction** | Auto Memory retry loops [#26522](https://github.com/google-gemini/gemini-cli/issues/26522); extension gallery invisibility [#28208](https://github.com/google-gemini/gemini-cli/issues/28208); symlink agent discovery [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | 4+ issues |
| **Platform gaps** | Windows longpaths docs needed [#28926](https://github.com/google-gemini/gemini-cli/pull/28926); env-dependent test failures on Windows [#28832](https://github.com/google-gemini/gemini-cli/pull/28832); Wayland browser [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | 3+ issues |

---
*Digest generated from `google-gemini/gemini-cli` GitHub data (releases, issues, PRs updated 2026-08-25 → 2026-08-26).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-26

## Today's Highlights
The Copilot CLI shipped **v1.0.81-10**, introducing a **plugins dashboard** accessible via `/plugin`, `/mcp`, or `/skills` (opt-out via `PLUGINS_DASHBOARD=false`) and making **`x` the universal delete key** across all configuration dialogs. Meanwhile, the community is actively triaging regressions in the 1.0.81 prerelease series—most notably a broken `latest-prerelease` lookup stranding users on `-9`, MCP token injection failures for `api.githubcopilot.com/mcp/`, and a `store_memory` crash due to a missing instance ID.

## Releases
### v1.0.81-10 (prerelease)
- **New**: Plugins dashboard now available to all users—run `/plugin`, `/mcp`, or `/skills` to manage extensions, MCP servers, and skills. Set `PLUGINS_DASHBOARD=false` to disable.
- **Improved**: `x` is now the delete key everywhere: `/sandbox config`, `/settings`, `/mcp`, sessions dialog, and diff confirmations.
- **Note**: PR #4607 prepares v1.0.81-11 for imminent release.

## Hot Issues
| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#13](https://github.com/github/copilot-cli/issues/13) | **Vi/Vim input mode** | Long-standing request (74 👍) for modal editing in interactive CLI—critical for power users. | 8 comments, 74 👍, open since 2025-09 |
| [#4535](https://github.com/github/copilot-cli/issues/4535) | **`store_memory` fails: "Instance id is required"** | Blocks memory persistence in 1.0.81 prereleases; core agent functionality broken. | 6 comments, updated today |
| [#3709](https://github.com/github/copilot-cli/issues/3709) | **`/model` should list BYOK/local models** | Users pinned to single model via `COPILOT_MODEL`; cannot switch to local providers in-session. | 6 comments, 28 👍 |
| [#4605](https://github.com/github/copilot-cli/issues/4605) | **`latest-prerelease` strands users on 1.0.81-9** | Release lookup logic picks `-9` over `-10` due to identical `created_at`; blocks auto-update. | 0 comments, filed today |
| [#4604](https://github.com/github/copilot-cli/issues/4604) | **MCP token injection lost for `api.githubcopilot.com/mcp/`** | User-configured GitHub MCP servers get 401; OAuth rescue impossible (no dynamic client registration). | 0 comments, filed today |
| [#4542](https://github.com/github/copilot-cli/issues/4542) | **Workspace `.mcp.json` detected but not connected in agent sessions** | MCP servers show "Enabled" in `mcp list` but unavailable in interactive/`-i`/`-p` sessions. | 2 comments, 1 👍 |
| [#4035](https://github.com/github/copilot-cli/issues/4035) | **Voice installer hits private Azure Artifacts feed (401)** | Voice mode setup fails downloading `Microsoft.AI.Foundry.Local.Core` from internal feed instead of NuGet. | 4 comments |
| [#4272](https://github.com/github/copilot-cli/issues/4272) | **New models greyed out: "disabled by organization policy"** | Users cannot enable models; settings link provides no controls. Affects enterprise/individual alike. | 1 comment, 3 👍 |
| [#4560](https://github.com/github/copilot-cli/issues/4560) | **Model "auto" forces `reasoningEffort: null`** | Auto router disables reasoning entirely; no way to configure effort level. | 1 comment |
| [#4593](https://github.com/github/copilot-cli/issues/4593) | **Worktree session archive fails on Windows (os error 32)** | Process locking prevents worktree cleanup; session process tree not stopped before removal. | 1 comment |

## Key PR Progress
| # | PR | Status | Summary |
|---|----|--------|---------|
| [#4607](https://github.com/github/copilot-cli/pull/4607) | Prepare public prerelease v1.0.81-11 | **Closed** | Advances repository commit timestamp for v1.0.81-11 publish. Imminent follow-up to -10. |

*Only one PR updated in the last 24h; the release cadence is driven by prerelease tags rather than feature PRs.*

## Feature Request Trends
1. **Modal editing support** — Vi/Vim keybindings (#13, 74 👍) remains the top-voted feature, signaling strong demand from terminal-centric developers.
2. **Model flexibility** — BYOK/local model switching in-session (#3709), reasoning effort control for "auto" (#4560), and policy-gated model visibility (#4272) all point to a desire for granular model orchestration.
3. **MCP ergonomics** — Disable repo-shipped MCPs globally (#3380), fix workspace MCP connection (#4542), and persistent instruction-file exclusions (#4603) show MCP adoption is maturing but UX gaps remain.
4. **Session portability** — Cross-machine/team session sharing (#3537, #1153) and session-to-repo context export indicate workflows are becoming collaborative and long-lived.
5. **Extensibility SDK stability** — Hook processor disposal on extension reconnect (#4590) reveals growing pains in the plugin architecture.

## Developer Pain Points
- **Prerelease update reliability**: The `latest-prerelease` logic is fundamentally flawed (identical timestamps → wrong sort), leaving users stuck on known-bad builds (#4605).
- **MCP authentication fragility**: Token injection silently drops for first-party GitHub MCP endpoints, and the fallback OAuth flow is architecturally impossible (#4604).
- **Memory system regression**: `store_memory` crashes with a missing instance ID in all 1.0.81 prereleases—core agent memory is non-functional (#4535).
- **Windows worktree cleanup**: Process locking (error 32) breaks session archival, leaving orphaned worktrees (#4593).
- **Voice mode install broken**: Installer pulls from a private Azure Artifacts feed instead of public NuGet, blocking voice entirely (#4035).
- **Exit summary regression**: Session summaries stopped printing in 1.0.74/75, removing a key debugging aid (#4268).

---
*Data sourced from `github/copilot-cli` — releases, issues, and PRs updated in the last 24h. Digest generated 2026-08-26.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-26

## 1. Today's Highlights
No new releases or PRs in the last 24 hours. Two critical issues surfaced: a **silent data-loss bug** in the `Edit`/`Write` tools (v0.38.0, macOS) where operations report success but never persist to disk, and a **context-compaction regression** causing Kimi to resurrect already-completed-and-deleted tasks. Both are 100% reproducible and block core workflows.

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#2617](https://github.com/MoonshotAI/kimi-cli/issues/2617)** `Edit`/`Write` tools report success but never write to disk (v0.38.0, macOS) | Core file-mutation primitives are broken; developers cannot trust any write operation. 100% reproducible since ~2026-08-25 17:00 UTC. | 2 comments, 0 👍 (newly filed). Urgent triage needed — likely a regression in the sandbox/fs layer introduced in 0.38.0. |
| **[#2523](https://github.com/MoonshotAI/kimi-cli/issues/2523)** Context compaction bug — Kimi reopens an already completed and deleted task | Undermines session hygiene: completed work reappears, polluting context and wasting tokens. Affects Windows (v0.6.3). | 1 comment, 0 👍. Updated today (2026-08-25), suggesting renewed impact or new repro. Points to state-management flaw in compaction logic. |

*Only 2 issues updated in the last 24h; both are high-severity functional regressions.*

## 4. Key PR Progress
*No pull requests updated in the last 24 hours.*

## 5. Feature Request Trends
*Insufficient new issue volume in the last 24h to infer trends. Historically, the repository sees requests around:*  
- **Multi-platform parity** (Windows/macOS/Linux sandbox consistency)  
- **Session persistence & export** (save/restore conversation state)  
- **Tool-call observability** (debug logs for `Edit`/`Write`/`Bash` internals)  
- **Model/version pinning** (explicit control over which K2.x variant runs)

## 6. Developer Pain Points
1. **Silent data loss** — Tools claim success while doing nothing (#2617). This is the #1 trust blocker.  
2. **State corruption across compaction** — Completed tasks zombie-revive (#2523), forcing manual cleanup.  
3. **Platform-specific regressions** — macOS write-path broken in 0.38.0; Windows compaction bug persists since July.  
4. **Lack of visibility** — No PR activity in 24h suggests fixes may not be in flight yet; community expects faster turnaround on P0 bugs.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-26

---

## 1. Today's Highlights

- **v1.18.23 released** with critical Cloudflare AI Gateway fixes: third-party provider routing now works via REST API, and Anthropic dotted model IDs (e.g., `claude-haiku-4.5`) are correctly converted to dashed slugs for the gateway.
- **Ox Alpha Free / Zen free tier outage** dominates issues: multiple reports (#44300, #44850, #45073) confirm tool-enabled requests fail with "Endpoint is unavailable" since ~Aug 23, affecting both Zen Console and Go gateways.
- **Provider expansion accelerates** with PRs adding native Groq, DeepInfra, Cerebras, Together AI, and Azure CLI authentication — signaling a push for first-class multi-provider support in v2.

---

## 2. Releases

### v1.18.23
**Bugfixes**
- Fixed Cloudflare AI Gateway routing for third-party providers so non-Workers models work through the gateway's REST API ([@superhighfives](https://github.com/superhighfives))
- Fixed Anthropic models through Cloudflare AI Gateway by converting dotted model IDs like `claude-haiku-4.5` to the dashed slug Anthropic expects

[View Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.23)

---

## 3. Hot Issues

| Issue | Summary | Why It Matters | Community Signal |
|-------|---------|----------------|------------------|
| [#44300](https://github.com/anomalyco/opencode/issues/44300) | **Zen API: `ox-alpha-free` / `x-preview-f-free` fails with "Endpoint is unavailable" on any tool call** | Blocks free-tier users from agentic workflows; affects both Zen Console and Go routes. | 13 comments, 5 👍 — highest engagement today |
| [#44850](https://github.com/anomalyco/opencode/issues/44850) | **Ox Alpha Free fails when OpenCode uses tools** | Duplicate of #44300; confirms regression impacts real projects (NVGT). | 7 comments, 2 👍 |
| [#33618](https://github.com/anomalyco/opencode/issues/33618) | **Qwen 3.7 Plus/Max via OpenRouter: invalid/empty tool calls** | Sporadic `✗ "" failed` errors cause retries and aborted sessions; hurts OpenRouter adoption. | 10 comments, 4 👍 — ongoing since June |
| [#35434](https://github.com/anomalyco/opencode/issues/35434) | **Multi-question tool calls fail silently in TUI since v1.17.13** | Regression from #34116; Enter key does nothing for ≥2 questions. TUI-only. | 7 comments — CLOSED but regression signal |
| [#19143](https://github.com/anomalyco/opencode/issues/19143) | **Feature: Message search (Cmd+F/Ctrl+F) in Desktop App** | Long sessions unsearchable; high user demand for basic navigation. | 9 comments, 8 👍 — top-voted feature |
| [#14524](https://github.com/anomalyco/opencode/issues/14524) | **Feature: Display model cost in model picker** | Cost transparency missing during model selection; PR exists but unmerged. | 5 comments, 11 👍 — highest 👍 count |
| [#7712](https://github.com/anomalyco/opencode/issues/7712) | **Feature: Edit context / delete messages** | Context pollution forces session restarts; fundamental UX gap. | 4 comments, 12 👍 — long-standing request |
| [#43277](https://github.com/anomalyco/opencode/issues/43277) | **Sessions permanently stuck — survive reboots, unrecoverable** | Data-loss risk; sessions refuse new messages across full system restarts. | 5 comments — severe reliability issue |
| [#45087](https://github.com/anomalyco/opencode/issues/45087) | **Auto-updater consumed 266 GB via 10-min reinstall loop** | `opencode2 serve --service` fills `~/.npm/_cacache`; runaway disk usage. | 4 comments — critical for server operators |
| [#39632](https://github.com/anomalyco/opencode/issues/39632) | **IME composition breaks on first keystroke in v2 prompt input** | Blocks CJK/IME users in new prompt input; old layout works. | 3 comments, 2 👍 — i18n regression |

---

## 4. Key PR Progress

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#45107](https://github.com/anomalyco/opencode/pull/45107) | Feature | **Directory projects**: treat markerless dirs as projects via deterministic path-based IDs; Git/Hg roots still win. | Enables project tracking without VCS |
| [#45108](https://github.com/anomalyco/opencode/pull/45108) | Feature | **Native Groq & DeepInfra providers** via OpenAI Chat protocol; resolves SDK identifiers directly. | Expands free/cheap model access |
| [#45098](https://github.com/anomalyco/opencode/pull/45098) | Feature | **Native Cerebras & Together AI providers** — same pattern as Groq/DeepInfra. | More high-speed/low-cost options |
| [#45086](https://github.com/anomalyco/opencode/pull/45086) / [#45079](https://github.com/anomalyco/opencode/pull/45079) | Feature | **Azure CLI authentication** for V2 Azure provider (Entra ID via `az login`). | Enterprise auth without API keys |
| [#45106](https://github.com/anomalyco/opencode/pull/45106) | Fix | **Stream shell tool output** in Desktop session UI via existing endpoint; incremental polling with cursors. | Parity with TUI live output |
| [#45103](https://github.com/anomalyco/opencode/pull/45103) | Feature | **Deep links for existing sessions**: `opencode://open-session?server=...&session=...`; Copy Link emits this. | Shareable/resumable sessions |
| [#45002](https://github.com/anomalyco/opencode/pull/45002) | Feature | **Repair malformed tool args** before validation (internal plugin); handles common LLM output errors. | Reduces tool-call failures |
| [#45094](https://github.com/anomalyco/opencode/pull/45094) | Fix | **Preserve provider-defined Responses item IDs** — matches Codex outbound rule (underscore prefix/suffix). | Improves provider compatibility |
| [#44845](https://github.com/anomalyco/opencode/pull/44845) | Refactor | **Hermetic Core tests**: isolate from home dir, config, credentials, MCP servers, npm, temp files. | CI reliability, no local pollution |
| [#45102](https://github.com/anomalyco/opencode/pull/45102) | Fix | **Preserve interrupted Mermaid diagrams** on reopen; keeps partial flowcharts rendered. | Better session restore UX |

---

## 5. Feature Request Trends

1. **Search & Navigation** — Message search (#19143, 8 👍), context editing/deletion (#7712, 12 👍), session deep links (#45103) all point to session management as a top UX gap.
2. **Cost Transparency** — Model cost in picker (#14524, 11 👍) reflects growing sensitivity to inference spend, especially with free-tier instability.
3. **Desktop Parity** — MCP server setup in Desktop (#40335), shell output streaming (#45106), IME support (#39632) show Desktop lagging TUI.
4. **Provider Flexibility** — Native providers (Groq, DeepInfra, Cerebras, Together, Azure CLI) + OpenRouter fixes indicate demand for *any-model-anywhere* without gateway friction.
5. **Localization** — Hebrew locale (#42447), IME fixes signal internationalization catching up.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Free-tier tool calls broken** | #44300, #44850, #45073, #45020 — all "Endpoint unavailable" on tool use | 4+ issues in 24h |
| **Session corruption / lock** | #43277 (stuck across reboots), #33995 (wrong directory lock), #35494 (TUI freeze) | 3+ critical reliability bugs |
| **Model/tool call failures** | Qwen/OpenRouter empty names (#33618), Muse Spark hangs (#45053), refusal hidden (#44958) | Multiple provider-specific bugs |
| **Auto-updater runaway** | #45087 — 266 GB in `~/.npm/_cacache` from 10-min reinstall loop | 1 catastrophic, high-impact |
| **Debug/logging broken** | #17846 — `--log-level DEBUG` silent after 10 log files (rotation bug) | Long-standing, blocks diagnostics |
| **Windows UX regressions** | Console flash on every subprocess (#42440), workspace dir confusion (#33995) | Platform-specific friction |

---

*Generated from github.com/anomalyco/opencode data as of 2026-08-26*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-26

## Today's Highlights
No new releases shipped in the last 24 hours, but the community closed **23 issues/PRs** in a single day — a heavy bug-fix sprint targeting Windows compatibility, provider integrations (OpenAI Responses, Bedrock, xAI, Opper), TUI streaming corruption, and agent session lifecycle bugs. The highest-engagement thread (#7547, 49 comments) is a strategic discussion on how Pi should officially support Windows across WSL, native, and PowerShell environments.

---

## Releases
*None in the last 24h.*

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **Windows support strategy** — “gazillion devs on Windows; too many run modes (WSL, native, PowerShell 5.1 vs 7) to focus energy” | Defines product direction for the largest developer demographic; 49 comments show deep community investment | 👍 2 · 49 comments · Open |
| [#8584](https://github.com/earendil-works/pi/issues/8584) | **TUI row corruption** — assistant text renders one word/line after long tool output | Core UX regression in streaming; makes output unreadable | 👍 5 · 9 comments · **Closed** |
| [#5886](https://github.com/earendil-works/pi/issues/5886) | **AgentSession settlement/continuation bugs** — post-run logic continues from stale transcripts | Meta-issue for recurring agent lifecycle failures; affects reliability of long sessions | 👍 4 · 9 comments · Open |
| [#7855](https://github.com/earendil-works/pi/issues/7855) | **“Response truncated before completion”** — random red error with OpenAI-compatible APIs (vLLM tested) | Blocks autonomous workflows; requires manual “continue” prompts | 👍 4 · 7 comments · **Closed** (no-action) |
| [#4742](https://github.com/earendil-works/pi/issues/4742) | **Add SiliconFlow provider** (api.siliconflow.com/.cn, OpenAI-compat) | High-demand Chinese/international model host (Qwen, GLM, etc.); 7 comments show sustained interest | 7 comments · **Closed** |
| [#8582](https://github.com/earendil-works/pi/issues/8582) | **Built-in `powershell` tool uses 5.1 in interactive mode, `pwsh` in `-p` mode** | Inconsistent Windows tooling; breaks scripts expecting PS7+ | 6 comments · **Closed** |
| [#8468](https://github.com/earendil-works/pi/issues/8468) | **GitHub Copilot login times out** | Blocks Copilot users; regression from pending PR #8254 | 6 comments · **Closed** |
| [#7049](https://github.com/earendil-works/pi/issues/7049) | **Upgrade Undici to 8.8.0** for correct plain-HTTP proxy forwarding (`proxyTunnel` default changed) | Infrastructure fix for corporate proxy environments | 5 comments · **Closed** |
| [#6596](https://github.com/earendil-works/pi/issues/6596) | **`spawn(taskkill) ENOENT` on Node.js 24** — use absolute `System32` path | Node 24 compatibility; affects process cleanup on Windows | 👍 0 · 5 comments · Open (inprogress) |
| [#8456](https://github.com/earendil-works/pi/issues/8456) | **Gemini 3.7 Flash rejects `/tree` summarization** — `MINIMAL` thinking level not supported | Model-specific adapter bug; breaks branch summarization | 👍 2 · 4 comments · **Closed** (no-action) |

---

## Key PR Progress (Top 10 by Significance)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#8232](https://github.com/earendil-works/pi/pull/8232) | **Dev branch** — CI/commenting sandbox | Open |
| [#8650](https://github.com/earendil-works/pi/pull/8650) | **Fix: omit `tool_choice` in Responses API when no tools sent** — fixes xAI/Grok 400 on `/compact` | **Closed** |
| [#8642](https://github.com/earendil-works/pi/pull/8642) | **Fix: hoist Bedrock tool-result images** out of `toolResult.content` for OpenAI models — unblocks image tool results | **Closed** |
| [#8641](https://github.com/earendil-works/pi/pull/8641) | **Load skills when `bash` available** (even if `read` disabled) — improves file-loading flexibility | **Closed** |
| [#8639](https://github.com/earendil-works/pi/pull/8639) | **Add Opper provider** (OpenAI-compat, `api.opper.ai/v3/compat`) — catalog, auth, tests, docs | **Closed** |
| [#8635](https://github.com/earendil-works/pi/pull/8635) | **Preserve aborted stop reason during lazy setup** — fixes abort handling mid-tool-execution | Open |
| [#8633](https://github.com/earendil-works/pi/pull/8633) | **Omit Responses `tool_choice` without tools** — same fix as #8650 for OpenAI/Azure Responses | **Closed** |
| [#8629](https://github.com/earendil-works/pi/pull/8629) | **Eager tool execution (opt-in)** — starts eligible local `read` calls at `toolcall_end`, reuses outcome | **Closed** |
| [#8627](https://github.com/earendil-works/pi/pull/8627) | **Use `ctx.cwd` for cwd-sensitive tools** (read, write, edit, grep, glob, task, lsp) — fixes extension path resolution | **Closed** |
| [#8547](https://github.com/earendil-works/pi/pull/8547) | **Move editor cursor on click** in TUI — mouse click in prompt now repositions cursor | Open |

---

## Feature Request Trends
1. **Windows-first support** — Native PowerShell 7, WSL integration, installer parity (#7547, #8582, #6596)
2. **Provider ecosystem expansion** — SiliconFlow, Opper, DeepSeek v4-vision, Bedrock OpenAI models, OpenRouter reasoning controls (#4742, #8639, #8483, #8643, #8614)
3. **Model reasoning/thinking parity** — Per-model `thinkingLevelMap`, `thinkingTokenBudgetField`, clamp `xhigh`/`max` effort (#8456, #8444, #8653)
4. **TUI/UX polish** — Mouse cursor placement, streaming render fixes, image display, mermaid/LaTeX in HTML export (#8547, #8584, #8306, #8041)
5. **Extension system reliability** — npm 11.16 script blocking, module resolution (`@earendil-works/pi-*`), concurrent `/share` isolation (#6600, #8620, #8613)

---

## Developer Pain Points (Recurring Frustrations)
- **Windows fragmentation** — Three run modes (WSL, native Node, PowerShell 5.1/7) with inconsistent tool behavior; no clear “blessed” path.
- **Streaming display bugs** — TUI corrupts after long tool output (word-per-line), thinking renders one word/line, images only show top row.
- **Agent session lifecycle** — Compaction produces unusable checkpoints; settlement continues from stale transcripts; abort loses queued steer/follow-ups.
- **Provider wire-format mismatches** — `tool_choice: "none"` with no tools rejected by xAI/OpenAI Responses; Bedrock rejects images in `toolResult`; OpenRouter streams `reasoning_details` per-token unmerged.
- **Extension loading broken by npm 11.16** — Default script blocking breaks `pi update --extensions`; bundled CLI can’t resolve internal packages.
- **Authentication timeouts** — GitHub Copilot login fails; env vars implicitly re-activate logged-out providers.

---

*Digest generated from `earendil-works/pi` GitHub activity (2026-08-25 → 2026-08-26). Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-26

## 1. Today's Highlights
The community is heavily focused on **session stability and multi-agent coordination**. A critical P1 bug (#9459) where `/effort max` permanently breaks sessions on OpenAI-compatible providers was closed, while a deep-rooted background agent coordination gap (#8097) remains open with duplicate work and message-passing failures. Simultaneously, the review system is undergoing a major overhaul across 6+ PRs—adding incremental content-anchored rounds, deferred suggestion recovery, prose-execution audits, and coverage ledgers—signaling a push toward production-grade automated code review.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#9459](https://github.com/QwenLM/qwen-code/issues/9459) **CLOSED** — `/effort max` bricks session on OpenAI-compatible providers | P1 bug: `clampReasoningEffort()` didn't clamp `max`, causing **permanent 400 errors** for the entire session until tier reset. Fixed core provider compatibility. | 10 comments, P1 priority, `status/ready-for-agent` |
| [#8097](https://github.com/QwenLM/qwen-code/issues/8097) **OPEN** — Background agent coordination gap | Multi-agent runs suffer **duplicate work, premature completion, and broken `send_message`**—blocking reliable autonomous workflows. | 8 comments, P2, `roadmap/multi-agent` |
| [#6762](https://github.com/QwenLM/qwen-code/issues/6762) **OPEN** — Skill Context Lifecycle Management | **SKILL.md bodies stay in context forever**—no unload/compress/evict mechanism. Critical for long-running sessions and token budgets. | 6 comments, P2, `roadmap/context-performance` |
| [#9198](https://github.com/QwenLM/qwen-code/issues/9198) **OPEN** — OOM after week-long run on 1TB RAM | Process OOMs despite massive host memory; **terminal corruption** (keystrokes garbled, mouse broken) post-OOM—suggests leak in session/terminal state. | 6 comments, P2, `scope/memory-usage` |
| [#9309](https://github.com/QwenLM/qwen-code/issues/9309) **CLOSED** — Compression behavior incorrect | `/compress-fast` then `/compress` shows **non-monotonic token counts** (170k→7k→12k), indicating compression state bugs. | 6 comments, P3, `scope/token-management` |
| [#5823](https://github.com/QwenLM/qwen-code/issues/5823) **OPEN** — `/loop` cron tasks fire silently | **No visibility/control** over model-scheduled tasks; tasks persist across sessions, auto-start on new chats—safety & usability gap. | 5 comments, P2, `roadmap/background-automation` |
| [#8227](https://github.com/QwenLM/qwen-code/issues/8227) **OPEN** — Windows `@-file` reads lose `O_NOFOLLOW` | Symlink/TOCTOU protection **materially weaker on Windows**; untested path—security regression for file operations. | 5 comments, P2, `scope/windows`, `welcome-pr` |
| [#10051](https://github.com/QwenLM/qwen-code/issues/10051) **OPEN** — Native DAP Integration | First-class **Debug Adapter Protocol** support requested for agentic runtime debugging—moves beyond terminal/log analysis. | 4 comments, P3, `need-discussion` |
| [#9827](https://github.com/QwenLM/qwen-code/issues/9827) **CLOSED** — `permissions.allow` doesn't restrict tool schemas sent to model | Allowlist only hides tools in CLI; **full tool set still sent to API**—security/privacy leak for restricted environments. | 4 comments, P2 |
| [#9733](https://github.com/QwenLM/qwen-code/issues/9733) **OPEN** — Loop detection false-positives kill unattended runs | Legitimate **write→run→verify cycles flagged as loops**, terminating turns unrecoverably—breaks CI/automation pipelines. | 4 comments, P2, `status/need-retesting` |

## 4. Key PR Progress (10 Important)

| PR | Description | Impact |
|----|-------------|--------|
| [#9995](https://github.com/QwenLM/qwen-code/pull/9995) | **fix(cli): preserve bridge timeouts for mid-turn media** — Images/audio/resources injected mid-turn now use their media bridge's timeout/retry policy. | Reliability for multimodal turns |
| [#8583](https://github.com/QwenLM/qwen-code/pull/8583) | **feat(web-shell): experimental session workflow cockpit** — Plan capture, revision-bound approval, transcript projection, agent execution unified in WebShell. | Major UX for autonomous workflows |
| [#9406](https://github.com/QwenLM/qwen-code/pull/9406) | **feat(serve): hide workspace Browse on headless daemon hosts** — Daemon advertises capability conditionally; avoids broken native pickers on headless servers. | Server-side usability |
| [#9761](https://github.com/QwenLM/qwen-code/pull/9761) | **feat(review): keep deferred suggestions recoverable off PR page** — Post-convergence suggestions move to deferral list on review body, recoverable by tooling. | Review workflow continuity |
| [#8927](https://github.com/QwenLM/qwen-code/pull/8927) | **feat(channels): bound session lifetime with `sessionRotation`** — Per-channel `maxTurns`/`maxAge` bounds; fresh session auto-started after bound. | Session hygiene, context control |
| [#9993](https://github.com/QwenLM/qwen-code/pull/9993) | **feat(web-shell): make compact view the only mode** — Retires compact-mode toggle; merges thinking blocks & tool groups; removes Ctrl+O, settings, i18n. | Simplified, consistent WebShell UX |
| [#9940](https://github.com/QwenLM/qwen-code/pull/9940) | **fix(review): reply carried findings into their thread, resolve fixed ones** — Multi-round reviews now thread replies; fixed findings get resolution fed back to PR. | Review thread hygiene |
| [#9988](https://github.com/QwenLM/qwen-code/pull/9988) | **feat(web-shell): add session token usage panel** — Opt-in panel: total usage, per-model breakdown, subagent invocations, tool stats, polling, reconnect. | Observability for token budgets |
| [#9659](https://github.com/QwenLM/qwen-code/pull/9659) | **feat(review): content-anchored incremental rounds for local review-fix loop** — Part 1 of 2; anchors rounds to diff content, survives rebase; 20 reviews/166 comments on prior stack. | Scalable, resilient review pipeline |
| [#9717](https://github.com/QwenLM/qwen-code/pull/9717) | **feat(review): add prose-execution audit & counter-frame audit** — Audits instruction files (SKILL.md, agent defs) for execution fidelity; adds adversarial lens. | Review depth & trustworthiness |

## 5. Feature Request Trends
1. **Context & Token Governance** — Skill lifecycle management (#6762), session rotation (#8927), token usage panels (#9988), telemetry breakdowns (#10015) all point to **explicit context window control**.
2. **Multi-Agent & Background Automation** — Coordination fixes (#8097), cron visibility (#5823), workflow cockpit (#8583), review subagents (#9784) show demand for **reliable, observable agent fleets**.
3. **Review System Maturation** — 6+ PRs (#9659, #9717, #9761, #9768, #9940, #9902) evolving `/review` into a **production CI/CD gate** with incremental, auditable, recoverable rounds.
4. **WebShell as Primary UI** — Compact-only mode (#9993), workflow cockpit (#8583), token panel (#9988), git dirty-tree handling (#9769) indicate **WebShell is becoming the flagship interface**.
5. **Debugging & Observability** — Native DAP (#10051), OOM diagnostics (#9198), prefix caching fixes (#9230) reflect **need for runtime introspection** beyond logs.

## 6. Developer Pain Points
- **Session Fragility**: OOMs after days (#9198), infinite thinking loops (#4055), compression bugs (#9309), loop-detection false kills (#9733)—long sessions are unreliable.
- **Permission System Leaks**: `permissions.allow` doesn't filter API tool schemas (#9827); Windows symlink protection gaps (#8227)—security controls are porous.
- **Provider Compatibility Minefield**: `/effort max` breaks OpenAI-compat (#9459), DeepSeek vision drops images (#10027), Auto Mode fails on OpenRouter (#9757)—**provider abstraction layer is leaky**.
- **Invisible Automation**: Cron tasks fire silently (#5823), background agents duplicate work (#8097), review anchors lost on failure (#9902)—**no observability into autonomous behavior**.
- **CI/Infra Flakiness**: ENOSPC on self-hosted runners (#10035), vitest RPC timeouts (#10050), image build probe artifacts (#9989)—**CI stability consumes maintainer bandwidth**.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-26

---

## 1. Today's Highlights

The v0.9.12 release cycle is in final integration (PR #5576, 72 commits gated on version bump + changelog), closing a batch of provider-neutrality audits, workflow robustness fixes, and UX polish. A major architectural push continues on the **CodeWhale TUI crate decomposition (EPIC-005, #5316)** and the **supervised-operation control surface** (control socket, `/relaunch`, lifecycle outbox — #5533, #5532, #5531). Meanwhile, Windows CI blockers around `git` CLI locking and POSIX word-splitting have been resolved (#5616, #5610, #5618).

---

## 2. Releases

No new releases published in the last 24 hours. v0.9.12 is in RC preparation (integration branch #5576).

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** | Top-level tracking epic for breaking the monolithic TUI crate into focused crates; 16 comments indicate active cross-team coordination. | 16 comments, opened 2026-08-10, updated 2026-08-25 |
| [#5588](https://github.com/Hmbown/CodeWhale/issues/5588) | **[v0.9.12] Provider neutrality: 18 DeepSeek-exclusive gates that should be provider-neutral** | Audit found 18 hard-coded DeepSeek assumptions; fixes include NVIDIA NIM env leak. Critical for multi-provider strategy. | 5 comments, author: Hmbown (maintainer) |
| [#4394](https://github.com/Hmbown/CodeWhale/issues/4394) | **Compaction: publish and enforce a structured survival contract** | Long-standing gap: compaction lacks an explicit contract for what context survives. Affects reliability of long sessions. | 4 comments, open since 2026-07-16 |
| [#5533](https://github.com/Hmbown/CodeWhale/issues/5533) | **Feature: the control surface for supervised operation** | Per-session Unix control socket (JSON-RPC) for external supervisors (CI, multiplexers, automation). Enables headless fleet ops. | 3 comments, author: M-Maciej (core contributor) |
| [#5532](https://github.com/Hmbown/CodeWhale/issues/5532) | **Feature: /relaunch — switch a running session to the current binary** | Eliminates manual restart after `/update`; self-exec under a live TUI is non-trivial. Merged via #5593. | 4 comments |
| [#5531](https://github.com/Hmbown/CodeWhale/issues/5531) | **Feature: local lifecycle event outbox (JSONL + webhook)** | Structured event stream (`turn_stalled`, `turn_failed`, etc.) for external observability without shell hooks. Merged via #5592. | 3 comments |
| [#5562](https://github.com/Hmbown/CodeWhale/issues/5562) | **Stale write-claims lock sub-agents out of command execution** | Windows: stale write-claims persist forever, cascade-locking other agents; verifier role contradicts its own description. | 3 comments, cross-platform impact |
| [#5617](https://github.com/Hmbown/CodeWhale/issues/5617) | **Reduce background git command runs and avoid git probes holding `.git/index.lock`** | `git status` probes from TUI cause `git commit` failures due to lock contention. Root cause for CI flakes. | 2 comments, author: LmeSzinc |
| [#5618](https://github.com/Hmbown/CodeWhale/issues/5618) | **Replace internal `git` CLI reads with gix (gitoxide)** | Follow-up to #5617: eliminate process-spawn overhead and lock contention entirely by using pure-Rust git library. | 1 comment, architectural direction |
| [#5482](https://github.com/Hmbown/CodeWhale/issues/5482) | **EPIC(docs): review, partially restructure, and fully localize documentation to Chinese** | Growing Chinese user base; many docs English-only or stale. Machine translation introduces errors. | 2 comments, author: SparkofSpike |

---

## 4. Key PR Progress (10 Important)

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#5576](https://github.com/Hmbown/CodeWhale/pull/5576) | **0.9.12 integration: must-fix + UX fixes (WIP)** | 72-commit integration branch gating all v0.9.12 blockers: provider neutrality, workflow schema repair, fleet cost ceiling, sandbox deny-list, MCP OAuth refresh, control socket, `/relaunch`, lifecycle outbox, focused-block actions, context cost attribution. | **Open** (awaiting version bump + changelog gates) |
| [#5616](https://github.com/Hmbown/CodeWhale/pull/5616) | **fix(tui): move git_status/git_diff off the async executor thread** | `GitStatusTool`/`GitDiffTool` called blocking `Command::output()` in async `execute()`, stalling tokio worker pool. Moves to blocking pool. | **Closed** (merged 2026-08-25) |
| [#5608](https://github.com/Hmbown/CodeWhale/pull/5608) | **feat(tui): add focused transcript actions** | Implements approved slice of #5551: `y`/`Y`/`Enter`/`r` on focused transcript block (copy content, copy metadata, fullscreen, raw markdown). | **Closed** (merged 2026-08-25) |
| [#5611](https://github.com/Hmbown/CodeWhale/pull/5611) | **feat(tui): show tool and MCP schema costs** | Context inspector now shows per-tool and per-MCP-server token cost estimates (display-only). Addresses #5553. | **Closed** (merged 2026-08-25) |
| [#5594](https://github.com/Hmbown/CodeWhale/pull/5594) | **control socket - part d (final)** | Opt-in Unix-only JSON-RPC control socket per session (`[control_socket] enabled = true`). Closes #5533. | **Closed** (merged 2026-08-25) |
| [#5593](https://github.com/Hmbown/CodeWhale/pull/5593) | **/relaunch command - part c** | Self-relaunch: `/relaunch` saves state, restores terminal, flushes telemetry, `exec()`s new binary. Closes #5532. | **Closed** (merged 2026-08-25) |
| [#5592](https://github.com/Hmbown/CodeWhale/pull/5592) | **lifecycle outbox - part b** | Opt-in `[lifecycle_outbox]` writes JSONL events (`turn_stalled`, `turn_failed`, etc.) for TUI + headless `exec`. Closes #5531. | **Closed** (merged 2026-08-25) |
| [#5584](https://github.com/Hmbown/CodeWhale/pull/5584) | **fix(subagents): persist child approval receipts** | Child approval prompts now inherit session receipt store; commit `Asked` before prompt, terminal outcomes before close. Closes #5543. | **Closed** (merged 2026-08-25) |
| [#5610](https://github.com/Hmbown/CodeWhale/pull/5610) | **fix(tui): preserve Windows verbatim-path operands through POSIX word split** | Fixes two Windows CI failures blocking FEAT-019 (#5609): readonly operand validation and subagent `git -C` execution. | **Closed** (merged 2026-08-25) |
| [#5609](https://github.com/Hmbown/CodeWhale/pull/5609) | **refactor(tui): adopt command shapes in memory group (FEAT-019)** | Converts `/note`, `/memory` to external command shapes (FEAT-014/015 pattern). Follows FEAT-018 utility group. | **Closed** (merged 2026-08-25) |

---

## 5. Feature Request Trends

1. **Supervised / Headless Operations** — Control socket (#5533), `/relaunch` (#5532), lifecycle outbox (#5531), fleet cost ceiling (#5567). Multiple PRs merged today. Core demand: run CodeWhale under CI, automation harnesses, terminal multiplexers without human at keyboard.

2. **Provider Neutrality & Multi-Model Support** — Audit of 18 DeepSeek-hardcoded gates (#5588), auto-update model lists from OpenRouter/Opencode (#5607), NVIDIA NIM fix. Strategic shift away from DeepSeek-only assumptions.

3. **Context & Cost Transparency** — Per-tool/MCP schema cost in `/context` (#5553 → #5611), compaction survival contract (#4394), detached-agent cost leakage fix (#5597), fleet-wide cost accumulator (#5567).

4. **TUI UX Polish** — Focused-block actions (#5551 → #5608), line-range `@path:START-END` mentions (#5550), onboarding `/tutorial` (#5556), fleet config UX (#5589), clipboard fallback file (#5555).

5. **Documentation & Localization** — Full Chinese localization epic (#5482), REBRAND.md correction (#5564), English doc accuracy fixes (#5613).

6. **Git Integration Reliability** — Move off `git` CLI to `gix` (#5617 → #5618), fix Windows lock contention, verbatim-path handling (#5610).

---

## 6. Developer Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **`git` CLI locking breaks commits** | #5617: `git status` probes hold `.git/index.lock`; #5618 proposes `gix` migration | CI flakes, local dev friction, Windows especially |
| **No self-relaunch after update** | #5532: `/update` requires manual restart; "inventing one under a TUI holding the terminal is not a small change" | Workflow interruption, poor UX for frequent updates |
| **Sub-agent coordination failures** | #5562: stale write-claims cascade-lock agents; verifier role self-contradictory | Multi-agent workflows unreliable on Windows |
| **Compaction is a black box** | #4394: no structured survival contract; users can't predict what context survives | Long-session reliability, token budget unpredictability |
| **Provider lock-in assumptions** | #5588: 18 DeepSeek-exclusive gates in 2,281 lines across 279 files | Blocks multi-provider adoption, maintenance burden |
| **MCP OAuth expiry looks like broken server** | #5572: 401/403 not auto-refreshed; manual recovery only | Silent tool failures, poor error UX |
| **Sandbox over-permissive by default** | #5568: full-disk read in every posture; ReadOnly child can read `~/.ssh`, `.env` | Secret exfiltration risk, security audit failures |
| **Fleet runs unbounded cost** | #5567: no run-level cost accumulator; worker events lack usage fields | Budget overruns in automated fleets |
| **Windows path/verbatim handling** | #5610: POSIX word-split mangles Windows verbatim paths; blocks CI | Windows CI failures, cross-platform inconsistency |
| **Documentation drift & language barrier** | #5482, #5564, #5613: stale English docs, Chinese localization gaps, REBRAND.md typo | Onboarding friction, trust erosion for non-English users |

---

*Data source: github.com/Hmbown/CodeWhale (formerly DeepSeek-TUI) — Issues & PRs updated 2026-08-25 to 2026-08-26.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*