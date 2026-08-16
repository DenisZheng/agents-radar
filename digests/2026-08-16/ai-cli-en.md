# AI CLI Tools Community Digest 2026-08-16

> Generated: 2026-08-16 00:55 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report
**Date:** 2026-08-16 | **Tools Analyzed:** 9 (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code, OpenCode, Pi, Qwen Code, DeepSeek TUI)

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **two strategic layers**: (1) *foundation-model-native tools* (Claude Code, Codex, Gemini, Copilot, DeepSeek) optimizing for model-specific capabilities and desktop integration, and (2) *platform-agnostic orchestration layers* (OpenCode, Pi, Qwen Code, Kimi) investing in workspace isolation, agent reliability, and cost governance. Across the board, **reliability engineering** (Windows stability, session continuity, storage bounds) has overtaken feature velocity as the dominant investment theme. Enterprise adoption signals are strong—multi-account identity, CI/CD token workflows, and audit-grade observability appear in 7/9 tool backlogs.

---

## 2. Activity Comparison (2026-08-15 → 2026-08-16)

| Tool | Releases (24h) | Hot Issues Tracked | PRs Merged/Updated | Top Community Signal (👍/Comments) | Velocity Tier |
|------|----------------|-------------------|-------------------|-----------------------------------|---------------|
| **OpenAI Codex** | 2 α (0.148.0-α.19/20) | 10 | 10 (all bot-driven) | 85👍 / 104 comments (Windows freeze) | **Very High** (automated pipeline) |
| **OpenCode** | 0 | 10 | 10 (major v2 infra) | 31👍 (Plan→Build auto-switch) | **Very High** (architectural shift) |
| **Qwen Code** | 2 (preview.5 + nightly) | 10 | 10 (CI/autofix hardening) | 5 comments (security/storage) | **High** (release + stabilization) |
| **DeepSeek TUI** | 0 (v0.9.8 finalizing) | 10 | 10 (v0.9.8 fixes) | 5 comments (SSE UTF-8 macOS) | **High** (stabilization sprint) |
| **Pi** | 0 | 10 | 10 (compaction/TUI) | 17👍 (compaction trigger) | **High** (quality focus) |
| **Gemini CLI** | 1 nightly (v0.56.0) | 10 | 10 (security/evals) | 8👍 (agent hang) | **Moderate-High** (steady) |
| **GitHub Copilot CLI** | 0 | 10 | 2 (security migration) | 9👍 (NixOS break) | **Moderate** (targeted fixes) |
| **Claude Code** | 0 | 10 | 3 (2 user-submitted) | **346👍** (multi-account) | **Low PR / High Issue Gravity** |
| **Kimi Code** | 0 | 4 | 2 (bug fixes) | 2 comments (quota transparency) | **Low** (early stage) |

> **Note:** "Hot Issues Tracked" = issues featured in each digest's top-10 table. Actual open issue counts are higher.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Multi-account / Identity Management** | Claude Code (#27302), Kimi Code (quota tiers), Copilot CLI (MCP OAuth), OpenCode (billing sync) | SSO parity, connector account switching, token minting for CI, config/memory sync across surfaces |
| **Session Continuity & Context Governance** | **All 9 tools** | Compaction triggers (Pi, Kimi, Qwen), session limits/resume (Claude, Codex), rollout retention (Codex), cross-surface memory bridge (Claude), per-session budgets (OpenCode, Pi) |
| **Async / Non-blocking UX** | Claude Code (message queue), OpenCode (Plan→Build auto-switch), Pi (boundary compaction) | Queue modes, background execution, interruptible turns |
| **Windows/Desktop Stability** | **Claude Code, Codex, Copilot CLI, DeepSeek TUI** | MSIX/Electron GPU crashes (Claude), system-wide mouse stutter + idle CPU (Codex), autopilot OOM (Copilot), wide-terminal regression (DeepSeek) |
| **MCP / Tool Integration Robustness** | **Claude, Codex, Copilot, Gemini** | Process leak prevention (Codex), OAuth RFC 8414 compliance (Copilot), tool surfacing (Claude), browser-agent Wayland (Gemini) |
| **Observability & Telemetry** | Codex (`codex doctor`, trace context), Copilot (OTLP Protobuf), Pi (compaction API), OpenCode (event streaming), Qwen (CI health probes) | Storage diagnostics, distributed tracing, structured logging, health endpoints |
| **Security Hardening Baseline** | **Gemini (SSRF, Node 22), Copilot (pull_request_target), Qwen (autofix gates, worktree locks), DeepSeek (CodeQL, sandbox)** | Supply-chain, SSRF, sandbox escape hatches, privileged workflow elimination |
| **Agent/Subagent Reliability** | **Gemini (hangs, recovery), Copilot (autopilot OOM, model downgrade), OpenCode (backend 500s), Qwen (review fleet), Pi (compaction corruption)** | Deterministic termination, observability, permission enforcement, model fidelity |
| **Cost/Quota Transparency** | **Kimi (silent quota drop), OpenCode (paid-but-blocked), Claude (session limits), Pi (token accounting)** | Metering APIs, budget-aware compaction, billing↔access sync, enterprise reporting |
| **Terminal/Shell Compatibility** | **Copilot (Kitty OSC 8), DeepSeek (wide terminal), Pi (cursor flicker, V8 limits), Gemini (Wayland), Codex (NixOS)** | OSC 8 hyperlinks, ultrawide rendering, input handling, shell completion |

---

## 4. Differentiation Analysis

| Dimension | Foundation-Model-Native Tools | Platform-Agnostic Orchestration Tools |
|-----------|-------------------------------|----------------------------------------|
| **Core Strategy** | Deep model integration, desktop app polish, proprietary protocol (ACP, custom hooks) | Workspace isolation, multi-model routing, open protocol (MCP, ACP), extensibility |
| **Target User** | Individual developers + enterprise teams on specific model stacks | Polyglot teams, self-hosted model users, automation-heavy workflows |
| **Technical Approach** | Electron/Tauri desktop + CLI, tight model↔UI coupling | Container/VM sandboxing (Docker, Incus, bwrap), event-sourced architectures, plugin systems |
| **Differentiation** | **Claude**: Hook system, connector ecosystem, enterprise identity<br>**Codex**: Computer Use, desktop OS integration, rapid α cadence<br>**Gemini**: Subagent architecture, eval-driven dev, security-first<br>**Copilot**: GitHub Actions native, skill system, MCP registry<br>**DeepSeek**: TUI-first, third-party provider DX, SSE streaming | **OpenCode**: Docker/Incus blueprints, per-session budgets, event streaming<br>**Pi**: Compaction correctness, terminal rendering quality, extension lifecycle<br>**Qwen**: Automated review fleet (SWE-bench), web shell, daemon reliability<br>**Kimi**: Quota-aware compaction, provider parity for self-hosted |

**Key Insight:** Foundation tools compete on *model-specific magic*; orchestration tools compete on *infrastructure correctness*. The latter are shipping more architectural PRs (OpenCode 10/10 PRs are v2 infra; Pi 10/10 are compaction/TUI fixes).

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum (Rapid Iteration + Structural Investment)** | **OpenCode, Qwen Code, DeepSeek TUI, Pi, OpenAI Codex** | ≥10 significant PRs/day; architectural refactors (OpenCode v2, Pi compaction rewrite, DeepSeek v0.9.8, Codex storage/telemetry); releases weekly or faster |
| **Steady Momentum (Feature Completion + Hardening)** | **Gemini CLI, GitHub Copilot CLI** | Consistent security/eval PRs (Gemini); targeted regression fixes (Copilot); nightly/preview cadence |
| **High Gravity / Low Velocity (Enterprise Demand ≠ Delivery Speed)** | **Claude Code** | Highest issue engagement in ecosystem (346👍 on multi-account); only 3 PRs/

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-16 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill | Functionality | Discussion Highlights | Status |
|---|-------|---------------|----------------------|--------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | **skill-creator: run_eval.py fix** | Fixes core evaluation pipeline that reports 0% recall for all skill descriptions — breaks the description-optimization loop | 10+ independent reproductions; blocks `run_loop.py` and `improve_description.py`; Windows stream reading, trigger detection, parallel workers all addressed | 🟢 Open (Updated 2026-06-23) |
| **[#568](https://github.com/anthropics/skills/pull/568)** | **servicenow** | Enterprise ServiceNow platform skill covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, IntegrationHub | Broad platform assistant (not narrow scripting); active maintenance through Aug 2026 | 🟢 Open (Updated 2026-08-12) |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | **self-audit** | Mechanical file verification + four-dimension reasoning quality gate (v1.3.0); universal across tech stacks | Novel "damage-severity priority" audit model; pre-delivery quality gate | 🟢 Open (Updated 2026-07-02) |
| **[#723](https://github.com/anthropics/skills/pull/723)** | **testing-patterns** | Comprehensive testing skill: Testing Trophy, AAA pattern, React Testing Library, contract testing, E2E, property-based | Full-stack testing philosophy + practical patterns; addresses gap in current collection | 🟢 Open (Updated 2026-04-21) |
| **[#514](https://github.com/anthropics/skills/pull/514)** | **document-typography** | Typographic QC for AI-generated docs: orphan/widow prevention, numbering alignment, hyphenation | "Affects every document Claude generates"; users rarely request good typography explicitly | 🟢 Open (Updated 2026-03-13) |
| **[#486](https://github.com/anthropics/skills/pull/486)** | **odt** | OpenDocument (.odt/.ods) creation, template filling, ODT→HTML parsing via MCP server | ISO-standard document format support; LibreOffice interop | 🟢 Open (Updated 2026-04-14) |
| **[#525](https://github.com/anthropics/skills/pull/525)** | **pyxel** | Retro/pixel-art/8-bit game development via Pyxel MCP server (write → run_and_capture → inspect → iterate) | Niche but complete workflow; targets creative coding education | 🟢 Open (Updated 2026-07-15) |
| **[#83](https://github.com/anthropics/skills/pull/83)** | **skill-quality-analyzer / skill-security-analyzer** | Meta-skills: 5-dimension quality scoring (structure, examples, resources, triggers, safety) + security analysis | Addresses marketplace quality control; security analyzer detects prompt injection, excessive perms | 🟢 Open (Updated 2026-01-07) |

> **Note:** All top PRs remain **Open** as of 2026-08-16. The repository shows no merged PRs in this dataset, suggesting a backlog or review bottleneck.

---

## 2. Community Demand Trends (From Issues)

| Rank | Demand Signal | Evidence | Representative Issues |
|------|---------------|----------|----------------------|
| **1** | **Skill Distribution & Trust Security** | 43 comments — highest in dataset | [#492](https://github.com/anthropics/skills/issues/492): Community skills masquerading as official `anthropic/` namespace |
| **2** | **Org-Level Skill Sharing** | 16 comments, 8 👍 | [#228](https://github.com/anthropics/skills/issues/228): Eliminate manual .skill file sharing via Slack/Teams |
| **3** | **Evaluation Pipeline Reliability** | 12+12+3 comments across 3 issues | [#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169), [#1298](https://github.com/anthropics/skills/pull/1298): `run_eval.py` 0% recall breaks skill-creator optimization |
| **4** | **Windows Compatibility** | 2 PRs + 1 issue | [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050): `claude.cmd` vs `claude`, encoding, subprocess pipes |
| **5** | **Meta-Skills for Skill Quality** | 6 comments + PR #83 | [#202](https://github.com/anthropics/skills/issues/202): skill-creator needs best-practice rewrite; [#83](https://github.com/anthropics/skills/pull/83) adds analyzers |
| **6** | **Agent Governance & Safety** | 6 comments | [#412](https://github.com/anthropics/skills/issues/412): Policy enforcement, threat detection, trust scoring, audit trails |
| **7** | **MCP Integration** | 4 comments | [#16](https://github.com/anthropics/skills/issues/16): Expose skills as MCPs for standardized APIs |
| **8** | **Context Window Management** | 4 comments | [#1487](https://github.com/anthropics/skills/issues/1487): `claude-api` skill injects 156k tokens in one call |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1538](https://github.com/anthropics/skills/pull/1538)** | **Spec Compliance Fixes** | Fixes 2 skills failing `skills-ref validate` (template name mismatch, example-skills duplicates); recent activity (Aug 9–12) |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | **plan-file-hygiene** | Addresses [#1417](https://github.com/anthropics/skills/issues/1417) — planning artifact lifecycle gap; community-credited design |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | **self-audit** | Novel quality gate architecture; v1.3.0 suggests iteration; universal applicability |
| **[#723](https://github.com/anthropics/skills/pull/723)** | **testing-patterns** | Fills clear gap; comprehensive scope (unit → E2E → property-based); active through April |
| **[#514](https://github.com/anthropics/skills/pull/514)** | **document-typography** | Universal pain point ("every document Claude generates"); low implementation risk |
| **[#538](https://github.com/anthropics/skills/pull/538)** | **pdf case-sensitivity fix** | Trivial fix (8 filename refs); blocks case-sensitive filesystems; updated through April |
| **[#539](https://github.com/anthropics/skills/pull/539)** | **skill-creator YAML validation** | Prevents silent description corruption; pre-parse check; low risk, high value |
| **[#541](https://github.com/anthropics/skills/pull/541)** | **docx w:id collision fix** | Prevents document corruption; root cause identified (shared OOXML ID space) |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for trustworthy, evaluatable, and shareable skills — not just new capabilities.** The top signals converge on: (1) fixing the broken skill-creator evaluation pipeline that prevents reliable skill development, (2) resolving namespace trust abuse where community skills impersonate official ones, and (3) enabling organizational skill distribution without manual file passing. New domain skills (ServiceNow, Pyxel, ODT) are actively proposed, but the *meta-layer* — creation tooling, validation, security, sharing — dominates discourse.

---

# Claude Code Community Digest — 2026-08-16

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours. Community attention remains focused on **long-standing feature gaps** (multi-account connector support, message queuing, session limit handling) and a **cluster of regressions** affecting Windows desktop stability, hook execution semantics, and MCP tool surfacing. A new field report on cross-session memory at multi-agent scale signals growing enterprise adoption patterns.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **#27302** | [Support multiple Connector accounts](https://github.com/anthropics/claude-code/issues/27302) | Enterprise teams need to switch between org/personal GitHub, Jira, Linear accounts without re-auth. Blocked since Feb. | **346 👍, 229 comments** — highest engagement in repo history |
| **#13354** | [Continue when session limit reached](https://github.com/anthropics/claude-code/issues/13354) | Hard stop on long-running agent workflows; no resume/continuation path. | **197 👍, 78 comments** — core TUI workflow blocker |
| **#50246** | [Message queue mode](https://github.com/anthropics/claude-code/issues/50246) | Eliminates interrupt-or-forget dilemma; enables async collaboration patterns. | **197 👍, 56 comments** — strong demand for non-blocking UX |
| **#80444** | [Windows desktop GPU crash (MSIX)](https://github.com/anthropics/claude-code/issues/80444) | Fatal Electron GPU process crash leaves app unlaunchable until Repair; affects Store installs. | **34 comments, 5 👍** — critical for Windows enterprise users |
| **#85199** | [Windows desktop repeated crashes → Repair loop](https://github.com/anthropics/claude-code/issues/85199) | Same symptom cluster as #80444; suggests systemic Electron/MSIX instability. | **23 comments, 4 👍** |
| **#78527** | [PreToolUse hook deny stops entire turn (regression v2.1.210)](https://github.com/anthropics/claude-code/issues/78527) | Breaks documented hook contract (`{ok:false}` should return tool error, not halt turn). | **5 comments, 1 👍** — security/guardrail workflows broken |
| **#86362** | [Browser pane blocks local dev subresources (ERR_BLOCKED_BY_CLIENT)](https://github.com/anthropics/claude-code/issues/86362) | `/etc/hosts` mapped domains render blank; breaks local preview workflows. | **5 comments, 4 👍** |
| **#74567** | [`--permission-mode dontAsk` denies Write/Edit despite allowlist](https://github.com/anthropics/claude-code/issues/74567) | Headless CI agents cannot write even to explicitly allowed paths. | **3 comments** — blocks automation pipelines |
| **#87024** | [Windows Cowork regression: "not supported on this device" (Aug 5-6)](https://github.com/anthropics/claude-code/issues/87024) | `msix_required` enforcement breaks legacy installs with no upgrade path. | **1 comment** — recent regression, high severity |
| **#86986** | [`claude setup-token` tokens rejected with 400 (no body)](https://github.com/anthropics/claude-code/issues/86986) | Long-lived OAuth tokens from CLI minting fail on first request; interactive works. | **1 comment** — blocks CI/CD token workflows |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| **#86870** | [fix: prevent false-positive CVP status changes during authorized security research](https://github.com/anthropics/claude-code/pull/86870) | Open | Adds session-context checks (`is_authorized_lab`, CVS status) to security hook to reduce false blocks on legitimate research (drone SDK, firmware, RE). |
| **#84600** | [Enable frontend-design plugin at project scope](https://github.com/anthropics/claude-code/pull/84600) | Closed | Registers official marketplace + enables `frontend-design` skill via `.claude/settings.json` for auto-load in repo. |
| **#82981** | [Claude/automatizar inventario insumos](https://github.com/anthropics/claude-code/pull/82981) | Open | Spanish-language automation workflow; appears to be a user-submitted template/skill (no description). |

*Note: Only 3 PRs updated in 24h — low contribution velocity. Two are user-submitted (one template, one i18n), one is a security-hook fix from Anthropic staff.*

---

## 5. Feature Request Trends (Distilled from All Issues)

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Multi-account / identity management** | #27302 (connectors), #87027 (config sync), #87028 (claude.ai ↔ Code memory bridge) | **High** — 346+ 👍 on lead issue; enterprise SSO/identity parity gap |
| **Non-blocking / async interaction** | #50246 (message queue), #13354 (session limit continuation) | **High** — 197 👍 each; core UX shift requested |
| **Cross-device / cross-surface continuity** | #87027 (config sync), #87028 (memory bridge), #86999 (Windows PATH) | **Rising** — new issues filed Aug 15-16 |
| **Hook reliability & observability** | #78527 (regression), #75081 (silent disable), #76297 (dedup), #76156 (skillOverrides ignored) | **Steady** — multiple regressions + silent-failure patterns |
| **Windows/MSIX stability** | #80444, #85199, #87024, #86999 | **Critical** — GPU crashes, install breaks, PATH issues, Cowork regression |
| **Headless/CI permission model** | #74567 (`dontAsk` broken), #86986 (setup-token 400) | **Blocking** — automation pipelines broken |
| **MCP tooling gaps** | #86674 (tools not surfacing), #80094 (filesystem MCP schema) | **Emerging** — MCP adoption surfacing integration bugs |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Silent failures over loud errors** — Hooks silently disabled (#75081), skillOverrides ignored (#76156), frontmatter destroyed on parse error (#76868). No logs, no warnings.
2. **Windows as second-class platform** — MSIX GPU crashes (#80444), Repair loops (#85199), Cowork regression (#87024), PATH not managed (#86999), native vs bundled CLI version skew.
3. **Permission model incoherence** — `dontAsk` doesn't respect allowlists (#74567), token minting broken for CI (#86986), no scoped-write escape hatch for headless agents.
4. **Session/continuity ceiling** — Hard token limits halt multi-hour agent runs (#13354), no queue for follow-ups (#50246), no memory bridge between web and CLI (#87028).
5. **MCP integration friction** — Tools connect but don't surface (#86674), schema registration race (#80094), filesystem server unusable on macOS.
6. **Enterprise identity fragmentation** — Single connector ≠ single account (#27302), config/memory doesn't follow user (#87027), no account-level sync.

---

## Links Reference

- **Issues**: [#27302](https://github.com/anthropics/claude-code/issues/27302) | [#13354](https://github.com/anthropics/claude-code/issues/13354) | [#50246](https://github.com/anthropics/claude-code/issues/50246) | [#80444](https://github.com/anthropics/claude-code/issues/80444) | [#85199](https://github.com/anthropics/claude-code/issues/85199) | [#78527](https://github.com/anthropics/claude-code/issues/78527) | [#86362](https://github.com/anthropics/claude-code/issues/86362) | [#74567](https://github.com/anthropics/claude-code/issues/74567) | [#87024](https://github.com/anthropics/claude-code/issues/87024) | [#86986](https://github.com/anthropics/claude-code/issues/86986)
- **PRs**: [#86870](https://github.com/anthropics/claude-code/pull/86870) | [#84600](https://github.com/anthropics/claude-code/pull/84600) | [#82981](https://github.com/anthropics/claude-code/pull/82981)

---

*Digest generated from GitHub data as of 2026-08-16 00:00 UTC. Next digest: 2026-08-17.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-16

---

## 1. Today's Highlights

The Codex repository shows **intense Windows desktop stability work** — 8 of the top 15 issues involve system-wide mouse stutter, CPU spikes, or freeze loops on Windows 11 after the August 14 app update (26.810.x). Simultaneously, **unbounded local storage growth** remains a cross-platform crisis: Crashpad dumps (+5 GB/day), subagent JSONL histories, and rollout files consuming hundreds of GiB. On the release front, two rapid alpha cuts (`0.148.0-alpha.19/20`) shipped, while 15+ PRs merged today — mostly internal bot-driven fixes for telemetry, pagination, MCP hooks, and TUI polish.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.148.0-alpha.20` | Alpha | Incremental alpha; no changelog provided. |
| `rust-v0.148.0-alpha.19` | Alpha | Incremental alpha; no changelog provided. |

> **Note:** Both are pre-release alphas. Stable channel remains on `0.146.x` / `0.147.x` branches.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#20214](https://github.com/openai/codex/issues/20214) | **Codex App freezes/stutters on Windows 11** | Core usability blocker; 104 comments, 85 👍. Affects Plus subscribers on modern hardware. | 🔥 **Highest engagement** — users report complete workflow stoppage. |
| [#38546](https://github.com/openai/codex/issues/38546) | **[Windows] ChatGPT/Codex desktop app causes system-wide mouse stutter without elevation** | New regression in 26.810.x; affects *entire OS*, not just app. | 25 comments, 11 👍 — fresh reports clustering post-Aug-14 update. |
| [#28109](https://github.com/openai/codex/issues/28109) | **Windows Desktop: mouse/input freezes after opening Codex with large sessions directory** | Links session size to input latency; 23 comments, 14 👍. | Strong correlation with session count; workaround: delete history. |
| [#38750](https://github.com/openai/codex/issues/38750) | **[Windows] System-wide stutter while Codex is idle; exiting restores OS** | App idling consumes ~100% of a logical CPU (#37372); 9 comments, 0 👍 but new. | Confirms background process runaway. |
| [#25921](https://github.com/openai/codex/issues/25921) | **Codex Desktop continuously generates Crashpad pending dumps: +5 GB/day** | Unbounded disk growth on macOS; 17 comments, 8 👍. | Silent fill-up; no auto-cleanup or rotation. |
| [#30779](https://github.com/openai/codex/issues/30779) | **Subagent fork sessions persist large JSONL histories indefinitely → ~/.codex disk bloat** | CLI/subagent storage explosion; 5 comments. | Related to #35470 (150k image copies, 400 GiB). |
| [#34337](https://github.com/openai/codex/issues/34337) | **CLI & Desktop rollouts silently consume tens–hundreds of GiB** | Cross-platform storage crisis; 4 comments, 1 👍. | No retention policy, no `codex doctor` visibility (until PR #38795). |
| [#38760](https://github.com/openai/codex/issues/38760) | **[macOS] Computer Use spawn storm exhausts launchservicesd → kernel panic** | `SkyComputerUseService` spawns 5–8×/sec; 340 threads; OOM crash. | 4 comments, new; **macOS stability blocker**. |
| [#3550](https://github.com/openai/codex/issues/3550) | **Scope Codex chats to VS Code projects/workspaces** | Top feature ask (79 👍); closed but indicates strong demand. | Users want workspace-isolated history. |
| [#34614](https://github.com/openai/codex/issues/34614) | **Windows 26.715: duplicate MCP suites accumulate; termination misses cmd.exe/node.exe grandchildren** | MCP process leaks; Job Object pattern exists but unused. | 9 comments, 1 👍; impacts enterprise/Biz users. |

---

## 4. Key PR Progress (10 Notable Merges Today)

| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#38795](https://github.com/openai/codex/pull/38795) | **Add storage diagnostics to `codex doctor`** | Observability | Reports free space for `CODEX_HOME`/worktree; warns <5 GiB, fails <1 GiB; Windows Dev Drive check. |
| [#38774](https://github.com/openai/codex/pull/38774) | **Use paginated history for persistent exec threads** | Performance | Reduces memory on long sessions; falls back to legacy if store lacks pagination. |
| [#38705](https://github.com/openai/codex/pull/38705) | **Add MCP tool handler support to the hooks engine** | Extensibility | Enables `mcp_tool` hooks; discovers sync handlers, expands placeholders, processes outputs. |
| [#38701](https://github.com/openai/codex/pull/38701) | **Route permission requests through shared Guardian approvals** | Security/UX | Unifies permission flow; preserves turn cancellation during auto-review. |
| [#38690](https://github.com/openai/codex/pull/38690) | **Propagate request trace context through exec-server relays** | Observability | W3C `traceparent`/`tracestate` across Noise records; aids distributed tracing. |
| [#38785](https://github.com/openai/codex/pull/38785) | **Keep active-turn model settings stable across updates** | Correctness | Prevents mid-turn config drift (sampling params, model). |
| [#38788](https://github.com/openai/codex/pull/38788) | **Show resume/fork status during TUI startup** | UX | Dimmed "Resuming session…" / "Forking session…" above composer. |
| [#38800](https://github.com/openai/codex/pull/38800) | **Route executor policy audits through log-only telemetry** | Telemetry | Moves `network_proxy.policy_decision` to `codex_otel.log_only` target. |
| [#38806](https://github.com/openai/codex/pull/38806) | **Add health endpoint to code-mode gRPC listener** | Infra | `GET /healthz` over HTTP/1.1 & HTTP/2; gRPC stays HTTP/2-only. |
| [#38817](https://github.com/openai/codex/pull/38817) | **Add raw config overrides to TypeScript SDK** | SDK | `CodexOptions.configOverrides` for TOML keys unsafe via dotted notation (e.g., permission maps). |

> All 10 PRs authored by `copyberry[bot]` and closed same-day — suggests automated/internal release pipeline.

---

## 5. Feature Request Trends (from Issues)

| Trend | Evidence | Priority Signal |
|-------|----------|-----------------|
| **Workspace-scoped chat/session isolation** | #3550 (79 👍, closed), #31433 (rollout indexing per-workspace) | High — VS Code users lose context across projects. |
| **Explicit cache controls for Bedrock/GPT-5.6** | #37674 (5 👍), #35300 referenced | Medium — cost control for enterprise API users. |
| **MCP elicitation over remote HTTP** | #38707 (closed, works on stdio only) | Medium — remote MCP UX parity. |
| **Session rollout retention / rotation policies** | #34337, #25921, #30779, #35470 | **Critical** — storage unbounded across platforms. |
| **Computer Use resource governance** | #38760, #38769, #38771 (macOS spawn storms) | **Critical** — causes kernel panics / OOM. |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Windows Desktop is unusable for many** — System-wide mouse stutter, 90–100% idle CPU, input freezes tied to session size. Multiple reports link regression to **26.810.x (Aug 14)**. Workaround: downgrade or run elevated (not ideal).

2. **Silent disk exhaustion** — Crashpad dumps (macOS), subagent JSONL, rollout files, and image copies grow without bounds. No built-in rotation, TTL, or `codex doctor` visibility until **today's PR #38795**.

3. **Session history corruption / indexing gaps** — #31433 (valid rollouts unindexed), #35746 (pagination drops records), #19837 (large session resume fails). Users lose work or cannot resume.

4. **Computer Use (macOS) runs away** — `SkyComputerUseService` spawns uncontrollably even when feature is **disabled** (#38769, #38771). Triggers `launchservicesd` exhaustion → WindowServer watchdog panic.

5. **MCP process leaks on Windows** — Grandchild `cmd.exe`/`node.exe` not reaped (#34614); duplicate suites accumulate per session. Job Object helper exists in repo but not wired to MCP spawn path.

6. **VS Code extension lacks workspace awareness** — Global chat history mixes projects (#3550, 79 👍). No per-workspace session scoping.

---

## Quick Links

- **Repo:** https://github.com/openai/codex
- **Issues (last 24h):** https://github.com/openai/codex/issues?q=updated%3A%3E2026-08-15
- **PRs (last 24h):** https://github.com/openai/codex/pulls?q=updated%3A%3E2026-08-15
- **Releases:** https://github.com/openai/codex/releases

---

*Digest generated from GitHub data as of 2026-08-16 00:00 UTC. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-16

## 1. Today's Highlights
The project shipped a nightly release (v0.56.0-nightly) containing a test infrastructure fix, while the backlog shows sustained focus on **agent reliability**—subagent termination reporting, generalist agent hangs, and browser-agent Wayland failures remain top P1/P2 bugs. Security hardening continues with two critical PRs: an SSRF fix for `web-fetch` and a Node 22 runtime upgrade for the sandbox. Evaluation coverage is expanding rapidly, with four new behavioral eval PRs targeting task tracking, tool chaining, and security boundaries.

## 2. Releases
**v0.56.0-nightly.20260815.g2a87e7be1** — Single change: migrated `process.env` to `vi.stubEnv` in `a2a-server` tests ([#28811](https://github.com/google-gemini/gemini-cli/pull/28811)). No user-facing changes.

## 3. Hot Issues (Top 10 by Impact & Activity)

| Issue | Priority/Area | Why It Matters | Community Signal |
|-------|---------------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after `MAX_TURNS` reported as GOAL success | P1, Agent | Masks subagent timeouts as successes, breaking workflow reliability | 12 comments, 2 👍, open since Mar |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs indefinitely | P1, Agent | Renders subagent delegation unusable; users disable agents entirely | 8 comments, 8 👍, open since Mar |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell execution stuck at "Waiting input" after completion | P1, Core | Frequent false hangs on simple commands; disrupts automation | 4 comments, 3 👍, open since Apr |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent fails on Wayland | P1, Agent/Browser | Blocks browser automation on modern Linux desktops | 4 comments, 1 👍, open since Mar |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory retries low-signal sessions endlessly | P2, Agent | Wastes quota & pollutes memory with noise | 5 comments, open since May |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory redaction happens post-model-context | P2, Security | Secrets enter model context before redaction | 4 comments, open since May |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 400 error with >128 tools | P2, Agent | Hard tool limit breaks complex agent configurations | 3 comments, open since Mar |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent ignores `settings.json` (`maxTurns`, etc.) | P2, Agent | Configuration drift; users can’t tune browser agent | 3 comments, open since Mar |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) `get-shit-done` output hook crashes CLI | P1, Agent | Crashes at task completion, losing final output | 3 comments, open since Mar |
| [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) Subagents run without permission since v0.33.0 | P2, Agent | Violates user consent model; unexpected agent invocation | 3 comments, open since Mar |

## 4. Key PR Progress (Top 10 by Significance)

| PR | Status | Summary |
|----|--------|---------|
| [#28828](https://github.com/google-gemini/gemini-cli/pull/28828) | Open (P1) | **Fix silent preview-model substitution** — warns when `gemini-3.1-pro-preview` falls back to `auto-gemini-2.5` due to missing entitlement. |
| [#28725](https://github.com/google-gemini/gemini-cli/pull/28725) | Open (P1, Security) | **SSRF fix for `web-fetch`** — validates resolved IPs against private/loopback ranges *after* DNS resolution (CVSS 8.6). |
| [#28726](https://github.com/google-gemini/gemini-cli/pull/28726) | Open (P1, Security) | **Upgrade sandbox to `node:22-slim`** — Node 20 EOL; patches recent CVEs only in 22+. |
| [#28827](https://github.com/google-gemini/gemini-cli/pull/28827) | Open (P2) | **Fix false 401 auth errors** — tightens `isAuthenticationError` to avoid misclassifying port numbers/exit codes containing “401”. |
| [#28823](https://github.com/google-gemini/gemini-cli/pull/28823) | Open (XL) | **Evals: tracker relationships & error recovery** — adds behavioral tests for task-graph deps, visualization, file 404 recovery, shell retry logic. |
| [#28824](https://github.com/google-gemini/gemini-cli/pull/28824) | Open (L) | **Evals: multi-tool chains, context safety, security bounds** — tests structured tool sequences, large-file handling, sensitive-path blocking. |
| [#28822](https://github.com/google-gemini/gemini-cli/pull/28822) | Open (XL) | **Evals: todos/task tracker** — covers `write_todos`, `complete_task`, `tracker_list_tasks`, `tracker_get_task`. |
| [#28679](https://github.com/google-gemini/gemini-cli/pull/28679) | Open (P2) | **Improve Vertex AI 401 error message** — clarifies when standard API key is used with `vertex-ai` auth type. |
| [#28608](https://github.com/google-gemini/gemini-cli/pull/28608) | Closed | **Fallback to stable models on preview 404** — mitigates silent fallback for Gemini API key auth. |
| [#28821](https://github.com/google-gemini/gemini-cli/pull/28821) | Merged | **Nightly version bump** to 0.56.0-nightly.20260815. |

## 5. Feature Request Trends
1. **AST-aware tooling** ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873), [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) — Multiple epics exploring AST-based read/search/map to reduce token waste and turn count.
2. **Subagent observability** ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)) — Demand for shared subagent trajectories in `/chat share` and `/bug` reports.
3. **Agent self-awareness** ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)) — Request for accurate CLI flag/hotkey knowledge so the agent can guide its own usage.
4. **Memory system hardening** ([#26516](https://github.com/google-gemini/gemini-cli/issues/26516), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)) — Quarantine invalid patches, surface extraction failures, deterministic redaction.
5. **Destructive-action guards** ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) — Explicit discouragement of `git reset --hard`, force pushes, DB mutations.

## 6. Developer Pain Points (Recurring Frustrations)
- **Agent opacity & unpredictability** — Subagents spawn without consent ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)), ignore config ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), misreport status ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), and hang silently ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)).
- **Shell integration fragility** — False “awaiting input” hangs ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), interactive prompt deadlocks ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)), tmp-script litter ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
- **Browser agent platform gaps** — Wayland incompatibility ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), profile-lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)).
- **Model entitlement surprises** — Silent fallback from preview to stable models ([#28828](https://github.com/google-gemini/gemini-cli/pull/28828), [#28608](https://github.com/google-gemini/gemini-cli/pull/28608)).
- **Memory/privacy leakage risk** — Auto Memory sends unredacted transcripts to model ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), re-tries noisy sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).

---
*Generated from github.com/google-gemini/gemini-cli data as of 2026-08-16. All links point to live GitHub items.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-16

## 1. Today's Highlights
No new release shipped in the last 24 hours. The issue tracker shows a cluster of **MCP/OAuth regressions** (Atlassian MCP broken in 1.0.79/1.0.80) and a **critical OOM crash in autopilot** on Windows. Meanwhile, the project merged a security-focused migration away from `pull_request_target` for PR automation.

---

## 2. Releases
*None in the last 24h.*

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#3392](https://github.com/github/copilot-cli/issues/3392) | **Bash tool breaks on NixOS ≥1.0.49** | Blocks NixOS users entirely; `strace` shows process spawn failure. Open since May with no fix. | 👍 9 · 4 comments |
| [#4480](https://github.com/github/copilot-cli/issues/4480) | **Atlassian MCP OAuth fails on 1.0.79 (RFC 8414 §3.3)** | Regression from 1.0.71; blocks Atlassian MCP server connections. Closed but root cause may persist. | 👍 6 · 4 comments |
| [#4490](https://github.com/github/copilot-cli/issues/4490) | **Atlassian MCP OAuth broken in 1.0.80 (regression)** | Same RFC 8414 error re-appeared in 1.0.80 after working in 1.0.78. Indicates incomplete fix. | 0 👍 · New (Aug 14) |
| [#4421](https://github.com/github/copilot-cli/issues/4421) | **MCP initialize handshake: hard 60s timeout, no retry** | npx-launched stdio servers fail ~29% of sessions; server never respawns for session lifetime. | 0 👍 · Critical reliability |
| [#4499](https://github.com/github/copilot-cli/issues/4499) | **v1.0.79 fatal OOM in autopilot (Windows)** | `Committing semi space failed` despite heap at 607 MB / 4.3 GB — host RAM commit failure, not heap limit. | 0 👍 · Crash blocker |
| [#4346](https://github.com/github/copilot-cli/issues/4346) | **MCP registry 403 for Actions GITHUB_TOKEN in CI** | Blocks all non-default MCP servers in GitHub Actions when using documented PAT-less auth. | 👍 3 · 2 comments |
| [#2934](https://github.com/github/copilot-cli/issues/2934) | **Protobuf OTLP export unsupported** | `OTEL_EXPORTER_OTLP_PROTOCOL` ignored; only JSON export works. Limits observability integrations. | 👍 6 · 2 comments |
| [#4491](https://github.com/github/copilot-cli/issues/4491) | **`/spawn` template contradicts singular-spawn contract** | Template instructs agent to reuse existing session, causing cross-session writes without approval gate. | 0 👍 · Architectural flaw |
| [#4438](https://github.com/github/copilot-cli/issues/4438) | **`disable-model-invocation: true` makes skill unreachable** | Skill disappears from model tool entirely, not just auto-invocation. Breaks explicit skill calls. | 👍 1 · 2 comments |
| [#3565](https://github.com/github/copilot-cli/issues/3565) | **Task tool silently downgrades subagent model** | Cost-multiplier guard ignores frontmatter `model:` and explicit override. Closed but behavior may need config. | 👍 1 · 1 comment |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#4449](https://github.com/github/copilot-cli/pull/4449) | **Migrate PR automation away from `pull_request_target`** | **Closed** | Security hardening: closes invalid issues with issue-scoped token; uses no-permission `pull_request` signal for mergeable PRs; drops privileged `pull_request_target`. |
| [#4497](https://github.com/github/copilot-cli/pull/4497) | **Handle fork PR associations in invalid-label writer** | Open | Fixes trusted invalid-label automation when GitHub omits PR association on fork workflow runs; searches via workflow-run metadata. |

---

## 5. Feature Request Trends
1. **MCP robustness** — Configurable timeouts, retries, and observability for MCP server lifecycle (#4421, #4346, #4480, #4490).
2. **Model & reasoning control** — Expose `contextTier` via ACP (#4275), add GPT-5.6 `reasoning.mode` parameter (#4495), fix model catalog refresh (#4494).
3. **Session ergonomics** — Un-archive sessions marked Done (#4502), fix `/restart` in worktree sessions (#4493), clarify `/spawn` semantics (#4491).
4. **Observability standards** — Protobuf OTLP export (#2934), BYOK prompt caching fidelity (#4500).
5. **Cross-platform install/update** — Codespaces ships stale 1.0.3; `copilot update` requires `sudo` (#4501).

---

## 6. Developer Pain Points (Recurring Frustrations)
- **MCP fragility**: OAuth regressions (Atlassian), hard-coded timeouts, 403s in CI, and no server respawn erode trust in remote MCP servers.
- **Silent model downgrades**: Cost-multiplier guard overrides explicit config without visibility (#3565, #4438).
- **Autopilot instability**: OOM crashes on Windows despite headroom (#4499); prompt caching broken by re-serialization (#4500).
- **NixOS/non-standard env support**: Bash tool broken for months (#3392); Codespaces update path broken (#4501).
- **Session state traps**: No undo for "Done" (#4502), `/restart` conflicts with worktrees (#4493), `/spawn` template ambiguity (#4491).
- **Cache staleness**: Model catalog, skill index, and OAuth metadata not refreshing automatically (#4494, #4480/4490).

---

*Generated from github.com/github/copilot-cli data (issues/PRs updated 2026-08-15 → 2026-08-16).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-16

---

## 1. Today's Highlights
No new releases in the past 24 hours. Community focus centers on **quota metering transparency** (Issue #2604), **context compaction strategy** for subscription tiers (Issue #2603), and a long-standing **Memory System** feature request (#1283). Two bug-fix PRs landed: a StrReplaceFile replacement-count fix (#2524) and a circular `$ref` guard in JSON Schema dereferencing (#2506).

---

## 2. Releases
*None in the last 24 hours.*

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2604](https://github.com/MoonshotAI/kimi-cli/issues/2604) | **Effective weekly allowance reduced ~3–5× without announcement** | User reports instrumented token usage showing drastic quota reduction on Vivace tier; raises concerns about silent metering changes or regression. | 2 comments, opened today — high urgency for billing transparency. |
| [#2603](https://github.com/MoonshotAI/kimi-cli/issues/2603) | **Quota-aware compaction: trigger on token budget, not model max context** | With K3’s 1M-token window, default compaction (at 50k reserved) never fires, causing unbounded context growth and quota burn on subscription plans. | Fresh issue, zero comments yet — architectural impact on cost control. |
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Memory System: persistent context across sessions** | Long-running enhancement (Feb → Aug) requesting automatic + manual memory (project patterns, user prefs) to avoid re-explaining context every session. | 40 comments, sustained interest — top-voted feature direction. |
| [#1155](https://github.com/MoonshotAI/kimi-cli/issues/1155) | **openai_legacy provider drops reasoning content → APIEmptyResponseError** | Fixes compatibility with OpenAI-compatible servers (sglang, vLLM) that separate reasoning into a dedicated field; provider lacked `reasoning_key` passthrough. | Closed today — unblocks self-hosted model integrations. |

---

## 4. Key PR Progress

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#2524](https://github.com/MoonshotAI/kimi-cli/pull/2524) | **fix(tools): count StrReplaceFile replacements against running content** | Open | Corrects replacement counting for chained edits; previously under-counted when later edits depended on earlier ones. Resolves #2526. |
| [#2506](https://github.com/MoonshotAI/kimi-cli/pull/2506) | **fix(kosong): raise clear error on circular `$ref` in deref_json_schema** | Closed | Prevents infinite recursion during JSON Schema dereferencing; improves robustness of tool schema parsing. |

---

## 5. Feature Request Trends
1. **Cross-session memory** (#1283) — persistent, user-editable context store (project conventions, preferences, API keys).
2. **Cost-aware context management** (#2603) — compaction triggered by subscription token budget, not model limits.
3. **Metering transparency** (#2604) — observable, announced quota changes; instrumentation-friendly APIs.
4. **Provider parity** — full reasoning-content support for OpenAI-compatible backends (#1155).

---

## 6. Developer Pain Points
- **Silent quota changes** erode trust; developers need changelog-grade visibility into metering logic.
- **Unbounded context growth** on large-window models burns subscription tokens unnecessarily; no budget-aware compaction knob exists.
- **Session amnesia** forces repetitive context injection; no standardized memory API for plugins or user scripts.
- **Provider fragmentation** — `openai_legacy` drops reasoning fields, breaking tool-calling loops with self-hosted models.

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` — issues & PRs updated 2026-08-15 → 2026-08-16.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-16

## Today's Highlights
OpenCode's v2 development is accelerating with major infrastructure PRs landing for Docker/Incus workspace isolation, event streaming optimization, and plugin architecture improvements. Meanwhile, the community is reporting widespread **upstream endpoint failures** and **grok-4.5 model errors** across Go/Zen tiers, suggesting backend instability. A critical billing bug persists where paid Go subscriptions show "Insufficient balance" despite successful Stripe payments.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (Top 10 by Impact & Discussion)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#37790](https://github.com/anomalyco/opencode/issues/37790) **Go subscription paid but "Insufficient balance"** | Billing/payment sync failure blocks paying customers from using Go tier; 14 comments indicate widespread impact | High urgency — users paid but cannot access service |
| [#42799](https://github.com/anomalyco/opencode/issues/42799) **Servers in broken state (500s, DB connection limits)** | Core backend infrastructure failing; workspace dashboard and client requests both affected | 2 comments but systemic — "ResourceExhausted" DB errors suggest scaling issue |
| [#42750](https://github.com/anomalyco/opencode/issues/42750) / [#42757](https://github.com/anomalyco/opencode/issues/42757) **Upstream request failed: Endpoint unavailable** | Multiple users on v1.18.18 reporting repeated endpoint failures with retry loops | 4+2 comments — appears to be ongoing outage affecting all Go/Zen users |
| [#40206](https://github.com/anomalyco/opencode/issues/40206) / [#40886](https://github.com/anomalyco/opencode/issues/40886) / [#42802](https://github.com/anomalyco/opencode/issues/42802) **grok-4.5 returning 500/503 errors** | Specific model broken on Go/Zen for ~2 weeks; other models (deepseek) work fine | 9+3+3 comments — model-specific backend routing issue |
| [#27924](https://github.com/anomalyco/opencode/issues/27924) **Infinite compaction loop when compression fails** | Core session loop bug causing hangs; token overflow → compact → still overflow → repeat | 8 comments, 0 👍 — technical debt in prompt.ts session management |
| [#42143](https://github.com/anomalyco/opencode/issues/42143) **"Why subscribe when website says 100% free?"** | Branding/pricing confusion damaging trust; website claims vs. product reality mismatch | 10 comments, 1 👍 — messaging inconsistency |
| [#7801](https://github.com/anomalyco/opencode/issues/7801) **Plan Mode → Build Mode auto-switch** | Highly requested UX improvement (31 👍); would streamline plan→execute workflow | 10 comments, 31 👍 — strong community demand |
| [#24879](https://github.com/anomalyco/opencode/issues/24879) **Go Pro tier ($20) with share modifier** | Pricing tier request addressing monthly cap pain point; 11 👍 shows willingness to pay more | 11 comments, 11 👍 — monetization opportunity |
| [#35649](https://github.com/anomalyco/opencode/issues/35649) **Links wrapped across lines not clickable in Kitty** | Terminal rendering bug affecting OSC 8 hyperlinks; impacts usability in popular terminal | 5 comments, 2 👍 — niche but annoying for Kitty users |
| [#42739](https://github.com/anomalyco/opencode/issues/42739) **Crash in Provider.list with Cloudflare env vars** | Startup crash when `CLOUDFLARE_*` vars exist without `CLOUDFLARE_API_TOKEN`; blocks launch | 4 comments — regression in v1.18.18 provider initialization |

---

## Key PR Progress (Top 10 by Significance)

| PR | Type | Description |
|----|------|-------------|
| [#42831](https://github.com/anomalyco/opencode/pull/42831) | **Feature** | **Docker blueprint workspaces** — immutable snapshot-based containers, coordinator outside workspace, subagent forking, idle cleanup. Major v2 infrastructure. |
| [#42829](https://github.com/anomalyco/opencode/pull/42829) | **Feature** | **Incus workspace forks** — container/VM blueprints with snapshot forking, SDK Next exposure, subagent isolation, wake-on-demand. |
| [#42826](https://github.com/anomalyco/opencode/pull/42826) | **Fix** | **Batch streamed session deltas** — reduces event flood (was publishing every text/reasoning/tool fragment separately); avg 47 events/sec → batched. |
| [#42828](https://github.com/anomalyco/opencode/pull/42828) | **Refactor** | **Numeric event timestamps** — epoch-ms at runtime, persist/replay without DateTime round-trip; serialization only at projection boundary. |
| [#42832](https://github.com/anomalyco/opencode/pull/42832) | **Fix** | **Scope Promise event iterators** — child Effect scope + scoped queue per async iterator; prevents event leakage after iterator shutdown. |
| [#42830](https://github.com/anomalyco/opencode/pull/42830) | **Feature** | **Select event subscriptions** — plugin-only `ctx.event.subscribe(type)` alongside wildcard; resolves via `EventManifest.Server`, single-definition bus path. |
| [#42823](https://github.com/anomalyco/opencode/pull/42823) | **Feature** | **Per-session budget limit** — schema, storage, migration (`20260812223059_session_budget`); `PATCH /session/:id` accepts `budget`, stops assistant at limit. |
| [#42824](https://github.com/anomalyco/opencode/pull/42824) | **Feature** | **Voice input + session budget UI** — mic button for continuous STT (browser `SpeechRecognition` + desktop), budget panel in app UI. |
| [#42811](https://github.com/anomalyco/opencode/pull/42811) | **Feature** | **Session viewed state** — moves unread state from per-TUI local tab to session-level; fixes cross-client disagreement on read status. |
| [#42825](https://github.com/anomalyco/opencode/pull/42825) | **Fix** | **Release virtualized timeline elements** — TanStack Virtual `elementsCache` retained 37.5k detached DOM nodes in long sessions; now releases on Solid removal. |

---

## Feature Request Trends
From the issue corpus, developers are consistently asking for:

1. **Predictable pricing tiers** — Go Pro ($20/mo) with sharing, first-month discounts (#24879), per-session budgets (#42823) to avoid surprise bills
2. **Plan→Build workflow automation** — Auto-switch from plan mode to execution (#7801, 31 👍) reducing manual context switching
3. **Workspace portability** — Project path updates after moves (#34737), subfolder browsing in web UI (#42784)
4. **Terminal compatibility fixes** — Kitty OSC 8 links (#35649, #42805), mouse wheel behavior with `mouse: false` (#35295)
5. **Model provider reliability** — grok-4.5 fixes, Deepseek token billing accuracy (#32911), provider error propagation via ACP (#42827)
6. **Agent permission enforcement** — `permission.ask` rules not respected at runtime (#32787)

---

## Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Backend instability / endpoint failures** | Very High | 5+ issues in 24h: #42799, #42750, #42757, #40206, #40886, #42802 — all citing 500/503/unavailable |
| **Billing ↔️ access mismatch** | High | #37790 (paid but blocked), #42143 (free vs. paid confusion), #24879 (cap anxiety) |
| **Model-specific regressions** | High | grok-4.5 broken for 2+ weeks; Deepseek overbilling; Poe provider tool failures (#42818) |
| **Session/context management bugs** | Medium | Infinite compaction loop (#27924), project path stale (#34737), unread state sync (#42811) |
| **TUI/terminal rendering quirks** | Medium | Kitty links (#35649, #42805), mouse fallback (#35295), subagent row click (#42754) |
| **Provider initialization crashes** | Medium | Cloudflare env var crash (#42739), missing token handling in v1.18.18 |
| **ACP protocol gaps** | Emerging | Errors not surfaced via ACP (#42827), session creation model selection (#42836) |

---

*Digest generated from GitHub data (issues/PRs updated 2026-08-15 → 2026-08-16). Links point to anomalyco/opencode.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-16

## Today's Highlights
The Pi ecosystem saw a flurry of **compaction and TUI stability fixes** merged today, addressing long-standing issues around context overflow recovery, token accounting accuracy, and terminal rendering glitches. A major **Mermaid rendering upgrade** (grok-mermaid → lovely-mermaid) landed in draft, promising fewer corner-case failures. Meanwhile, the community continues to surface **WSL authentication hangs** and **Windows host-process kill risks** as critical cross-platform pain points.

---

## Releases
No new releases published in the last 24 hours.

---

## Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6879](https://github.com/earendil-works/pi/issues/6879) | **Auto-compaction never triggers after context >100% until provider overflow** | Core reliability: sessions silently exceed context limits, only failing at API rejection (373k tokens). Affects long-running agentic tasks. | 21 comments, **17 👍** (open) |
| [#6187](https://github.com/earendil-works/pi/issues/6187) | **Pi login hangs in WSL after GitHub Copilot device auth** | Blocks WSL users entirely; browser auth succeeds but client never detects completion. | 27 comments (closed) |
| [#8028](https://github.com/earendil-works/pi/issues/8028) | **TUI `fullRender` crashes with `RangeError` when output exceeds V8 string limit** | Hard crash on image-heavy workloads (video production agents). V8 string limit is a hard ceiling. | 2 comments (open) |
| [#8003](https://github.com/earendil-works/pi/issues/8003) | **Cursor in input box flickers aggressively while assistant streams** | UX regression: cursor blink rate spikes during streaming, worsens with typing. Impairs usability during long generations. | 2 comments, **1 👍** (open) |
| [#8170](https://github.com/earendil-works/pi/issues/8170) | **Windows: `bash` tool can kill host via `taskkill /IM node.exe`** | Safety critical: model-generated command kills Pi's own host process (pi-web/Next.js). No confirmation guard. | 2 comments (closed) |
| [#8168](https://github.com/earendil-works/pi/issues/8168) | **Compaction + session restore corrupts tool-result role → 422** | Data integrity: auto-compaction during tool-heavy turns breaks message role adjacency, causing provider 422 errors on resume. | 1 comment (closed) |
| [#8157](https://github.com/earendil-works/pi/issues/8157) | **Migrate grok-mermaid → lovely-mermaid** | Technical debt: grok-mermaid inherited Grok's corner cases; lovely-mermaid has better parsers and maintenance. | 2 comments (open) |
| [#8154](https://github.com/earendil-works/pi/issues/8154) | **Hidden thinking blocks leave blank spacer lines in transcript** | TUI polish: hidden thinking blocks collapse to 1–2 blank lines instead of zero height; tool rows collapse correctly. | 2 comments (closed) |
| [#7871](https://github.com/earendil-works/pi/issues/7871) | **Configurable per-model thinking-level persistence** | Workflow friction: global thinking level carries across model switches, clamping unexpectedly. Users want per-model memory. | 2 comments (closed) |
| [#4776](https://github.com/earendil-works/pi/issues/4776) | **Add `pi completion <shell>` subcommand** | DX: long-requested shell completion generator (bash/zsh/fish). Closed as "last-read" — likely implemented or deferred. | 4 comments, **5 👍** (closed) |

---

## Key PR Progress (Top 10 by Impact)

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#8153](https://github.com/earendil-works/pi/pull/8153) | **fix: compact at safe turn boundaries** | Adds run-scoped boundary-compaction API; compacts between completed turns, preserves native recent tail, respects abort signals. Fixes unbounded overflow recovery. | ✅ Closed |
| [#8164](https://github.com/earendil-works/pi/pull/8164) | **fix(agent-session): never continue from trailing assistant message** | Prevents compaction crash when retrying from a completed turn (`stopReason: 'stop'`). Only retries mid-flight errors (`stopReason: 'error'`). | ✅ Closed |
| [#8165](https://github.com/earendil-works/pi/pull/8165) | **fix(coding-agent): tokens.total = billable only** | Excludes `cacheRead`/`cacheWrite` from `tokens.total` (billed at 1/120th rate). Fixes skewed compaction budgets and status stats. | ✅ Closed |
| [#8158](https://github.com/earendil-works/pi/pull/8158) | **feat(coding-agent): upgrade Mermaid terminal rendering** | Migrates `grok-mermaid` → `lovely-mermaid` (closes #8157, #7832). Better parsers, fewer corner cases. | 🟢 Open |
| [#8155](https://github.com/earendil-works/pi/pull/8155) | **fix(tui): avoid resetting cursor blink during renders** | Tracks cursor visibility in `TuiBase`; emits visibility commands only on state transitions. Fixes aggressive flicker (#8003). | 🟢 Open |
| [#8181](https://github.com/earendil-works/pi/pull/8181) | **fix(ai): expose low thinking level for DeepSeek V4 Flash on opencode/opencode-go** | Applies `DEEPSEEK_V4_FLASH_THINKING_LEVEL_MAP` (includes `low`) to opencode providers, not just native DeepSeek. | ✅ Closed |
| [#8174](https://github.com/earendil-works/pi/pull/8174) | **fix(coding-agent): neutral wording for repeated ambiguous length stops** | Replaces alarming "Context overflow recovery failed..." with neutral messaging when second recoverable `length` stop exhausts retry. | ✅ Closed |
| [#8172](https://github.com/earendil-works/pi/pull/8172) | **example: tool-result pruner + spill extension** | Reference extension: prunes tool results (8192/4096/1024 tiers), spills full output to files (maxInlineBytes 50k), supports spill-copy-on-prune. | ✅ Closed |
| [#8151](https://github.com/earendil-works/pi/pull/8151) | **fix(extensions): contain widget render failures & tear down ctx-owned widgets** | Prevents extension widget crashes from breaking `/reload`; ensures ctx invalidation tears down widget registrations. | ✅ Closed |
| [#8124](https://github.com/earendil-works/pi/pull/8124) | **feat(ai): route xAI models through Responses API, default to Grok 4.6** | Switches xAI from Completions → Responses API, sends user-agent, updates default model to Grok 4.6. | 🟢 Open |

---

## Feature Request Trends
1. **Compaction control & observability** — Users want predictable triggering (#6879), safe boundaries (#8153), extension hooks for failures (#8175), and per-model budgets.
2. **TUI rendering polish** — Scrollable/fixed-height thinking blocks (#8171), cursor stability (#8003, #8155), mouse-wheel configurability (#7765), Mermaid upgrade (#8157).
3. **Model configuration granularity** — Per-model thinking-level persistence (#7871, #8182), model refresh consistency (#7381), provider-specific caps (#8146).
4. **Extension system maturity** — UI dialog events (#7147), pre-commit model-select hooks (#8169), compaction failure exposure (#8175), widget lifecycle safety (#8151).
5. **Cross-platform hardening** — WSL auth reliability (#6187), Windows command guards (#8170), terminal keybinding conflicts (#8183).
6. **Session & transcript integrity** — File restore on `/tree` (#8152), tool-result role preservation across compaction (#8168), hidden-block collapse (#8154).

---

## Developer Pain Points
- **Compaction is opaque and unreliable** — Doesn't trigger at threshold (#6879), crashes on retry (#8164), corrupts message roles (#8168), hides failures from extensions (#8175).
- **TUI rendering is fragile at scale** — V8 string limit crashes (#8028), cursor flicker during streaming (#8003), thinking-block layout leaks (#8154), Mermaid corner cases (#8157).
- **Authentication & platform quirks block adoption** — WLS device-flow hang (#6187), Windows self-kill via model commands (#8170), terminal keybinding conflicts (#8183).
- **Token accounting skews budgets** — Cache tokens included in `total` (#8165), compaction triggers on inflated counts.
- **Extension API gaps hinder custom tooling** — No dialog events (#7147), no pre-model-select hook (#8169), compaction errors invisible (#8175), widget cleanup races (#8151).
- **Documentation gaps for core workflows** — How to interrupt streaming response (#8058), shell completion discoverability (#4776).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-16

---

## 1. Today's Highlights

The project shipped two preview/nightly releases (v0.21.12-preview.5 and v0.21.11-nightly) with successful SWE-bench Verified and Terminal-Bench 2.0 benchmark runs. A major autofix hardening landed: deny-by-default footprint gates and positional window censuses (PR #9156). Meanwhile, the CI pipeline is under active stabilization—multiple E2E test failures triggered automated issues, and several PRs target runner isolation, checkout self-healing, and worktree locking to eliminate flakiness in the automated review fleet.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.21.12-preview.5** | Preview | Full changelog: [compare](https://github.com/QwenLM/qwen-code/compare/v0.21.12...v0.21.12-preview.5) |
| **v0.21.11-nightly.20260816.5677823abb** | Nightly | Automated nightly build |

**Benchmark Results (from release notes):**
- **SWE-bench Verified**: `SUCCEEDED` — 1/1 resolved, 0 errors (`swe-bench/swe-bench-verified@2`)
- **Terminal-Bench 2.0**: `SUCCEEDED` — 1/1 completed (`terminal-bench@2.0`)
- Full end-to-end run: 500 SWE-bench cases → 89 Terminal-Bench cases dispatched after successful SWE publication

---

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#7427](https://github.com/QwenLM/qwen-code/issues/7427)** `web-shell`: artifact panel spams `Load artifacts failed` on auto-refresh | UX regression in web shell; background refresh silently fails and toasts repeatedly. Affects all `qwen serve` users. | 5 comments, `welcome-pr` label — good entry point for contributors |
| **[#9250](https://github.com/QwenLM/qwen-code/issues/9250)** `qwen serve` hard-codes new-file mode `0600`, ignores umask | Security/ops issue: created files are unreadable by other users/processes. No config knob exists. | 4 comments, `daemon` scope — impacts shared dev environments |
| **[#9089](https://github.com/QwenLM/qwen-code/issues/9089)** Autofix PAT-bearing jobs share host with untrusted branch code | **Security critical**: runner-level isolation needed to prevent credential leakage from malicious PR code. | 4 comments, `priority/P1`, `category/security` — blocks full autofix rollout |
| **[#9219](https://github.com/QwenLM/qwen-code/issues/9219)** `/review` presubmit overlap matching is exact-line only | Multi-line and semantic duplicate findings slip through, causing redundant review comments. | 4 comments, `priority/P2` — reduces review quality |
| **[#9205](https://github.com/QwenLM/qwen-code/issues/9205)** Concurrent same-PR reviews race on fixed worktree path (worktree deleted mid-run) | Causes review job crashes and lost work. Root cause: fixed `.qwen/tmp/review-pr-<n>` path. | 3 comments, `priority/P2` — impacts review fleet reliability |
| **[#9230](https://github.com/QwenLM/qwen-code/issues/9230)** Follow-up suggestion side query defeats server-side prefix caching (`enableCacheSharing` off by default) | Kills prompt-cache reuse on llama.cpp/vLLM; every turn re-prefills full context. Major perf regression. | 3 comments, `priority/P2`, `category/performance` |
| **[#9198](https://github.com/QwenLM/qwen-code/issues/9198)** `qwen` OOM after week-long run (1TB RAM server) | Memory leak in long-running sessions; also corrupts tmux input handling. `kimi code` unaffected. | 3 comments, `priority/P2` — stability blocker for daemon mode |
| **[#8823](https://github.com/QwenLM/qwen-code/issues/8823)** Hidden unrecognized diagnostics mutate/evict transcript state | SDK-level bug: unknown daemon events normalize to `debug` but first corrupt shared transcript reducer. | 3 comments, `priority/P2`, `scope/sdk` — data integrity risk |
| **[#9253](https://github.com/QwenLM/qwen-code/issues/9253)** Web Shell dev tabs white-screen after dev-server/daemon restart, no recovery UI | DevEx breakage: white screen with no error or reload button. Requires manual reload. | 2 comments, newly filed today — high visibility for web-shell users |
| **[#9246](https://github.com/QwenLM/qwen-code/issues/9246)** Triage flakiness gate: test-pin hardening backlog deferred from #9130 | Long tail of test-robustness gaps after deterministic flakiness gate (PR #9130) passed 7 review rounds. | 2 comments, `priority/P3` — technical debt tracking |

---

## 4. Key PR Progress (10 Important)

| PR | Status | Description |
|----|--------|-------------|
| **[#9156](https://github.com/QwenLM/qwen-code/pull/9156)** `feat(autofix): deny-by-default footprint gate and positional window censuses` | Merged (in release) | Core autofix hardening: prevents out-of-scope fixes by default, adds census tracking. |
| **[#9235](https://github.com/QwenLM/qwen-code/pull/9235)** `fix(serve): redact skill bodies from Web Shell event surface` | Open, `review/self-reported` | Stops leaking full `SKILL.md` bodies to browser; reduces attack surface and payload size. |
| **[#9027](https://github.com/QwenLM/qwen-code/pull/9027)** `feat(cli): plain-prose /review comments; severity markers follow review.attribution` | Open, `autofix/takeover` | Human-readable review comments; drops template voice. Improves PR review UX. |
| **[#9220](https://github.com/QwenLM/qwen-code/pull/9220)** `fix(ci): self-heal failed checkouts on reused review runners` | Open, `autofix/takeover` | Runner workspace auto-repair after failed `git checkout`; eliminates stuck runners. |
| **[#9254](https://github.com/QwenLM/qwen-code/pull/9254)** `fix(web-shell): show a boot fallback instead of a white screen` | Open, `review/self-reported` | **Filed today**: adds dependency-free error overlay with reload button for failed resource loads. |
| **[#9255](https://github.com/QwenLM/qwen-code/pull/9255)** `fix(ci): keep a fallback comment when PR review runner dies` | Open | Resilience: preflight health probe + fallback comment if review job crashes abnormally. |
| **[#9163](https://github.com/QwenLM/qwen-code/pull/9163)** `fix(review): confine every ledger and evidence read to contained regular files` | Open | Security hardening: `O_NOFOLLOW` + `fstat` on same descriptor prevents TOCTOU on ledger reads. |
| **[#9211](https://github.com/QwenLM/qwen-code/pull/9211)** `fix(review): lock the PR review worktree lease against concurrent sessions` | Open, `autofix/takeover` | Worktree lease now acts as mutex; prevents concurrent reviews from deleting each other's worktrees. |
| **[#9183](https://github.com/QwenLM/qwen-code/pull/9183)** `feat(review): scale reverse-audit round cap to diff topology` | Open | Dynamic round caps: 10 (small), 5 (chunked), 3 (huge diffs) — improves finishability. |
| **[#9092](https://github.com/QwenLM/qwen-code/pull/9092)** `feat(review): resume interrupted PR review from on-disk state` | Open | Adds `--resume` to `fetch-pr`; validates prior report, worktree, diff hash before continuing. |

---

## 5. Feature Request Trends

| Direction | Evidence (Issues/PRs) |
|-----------|------------------------|
| **Automated review fleet reliability** | Worktree locking (#9211), checkout self-heal (#9220), fallback comments (#9255), runner isolation (#9089), concurrent review races (#9205) |
| **Web Shell robustness & UX** | Boot fallback (#9254), artifact refresh spam (#7427, #9227), session name retention (#8977), HTML export refactor (#9186), white-screen recovery (#9253) |
| **Session/channel lifecycle control** | `sessionRotation` bounds (#8927), channel empty-set no-op (#8978), cache-sharing defaults (#9230) |
| **Review quality & deduplication** | Multi-line overlap detection (#9219), ledger re-post preservation (#9208), chunk retirement fixes (#9213), schema friction (#9209) |
| **Third-party provider expansion** | Kimi + Xiaomi MiMo auth presets (#8368) |
| **Long-running daemon stability** | OOM investigation (#9198), transcript mutation bugs (#8823), prefix caching defeats (#9230) |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **CI/E2E Flakiness Cascade** — Multiple daily `Main CI failed: E2E Tests` auto-issues (#9248, #9159, #9241, #9239, #9237) indicate systemic test instability. Contributors spend cycles triaging infrastructure vs. code.

2. **Review Fleet Self-Sabotage** — Concurrent reviews on same PR delete each other's worktrees (#9205), verification probes mutate shared worktrees (#9207), and runner checkouts fail silently (#9220). The automation designed to scale review is its own bottleneck.

3. **Web Shell Fragility** — White screens on dev-server restart (#9253), artifact toast spam (#7427), session name loss on `/clear` (#8977), and Chinese IME breakage (#5966) make the browser UX feel unpolished compared to CLI.

4. **Opaque Memory/Leak Behavior** — Week-long daemon OOM on 1TB RAM (#9198) with no diagnostics; transcript state corrupted by unknown diagnostics (#8823). Hard to debug without observability tooling.

5. **Configuration Gaps in Daemon Mode** — File mode hard-coded to `0600` (#9250), no `enableCacheSharing` default (#9230), no umask respect — forces workarounds in shared environments.

6. **Review Comment Noise** — Exact-line overlap misses multi-line/semantic dupes (#9219), ledger re-posts swallowed (#9208), schema friction at last gate (#9209). Reviewers get low-signal output.

---

*Generated from github.com/QwenLM/qwen-code data as of 2026-08-16. Links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-08-16

---

## 1. Today's Highlights
The project is deep in **v0.9.8 stabilization**: critical regressions (wide-terminal output, SSE UTF-8 corruption on macOS, pricing verification failures) have fixes merged or in review. The community concluded a three-week debate on the Chinese term for "Constitution," settling on **宪章 (charter)**. New feature work targets **third-party provider onboarding** (prefab templates + test-connection) and **long-context model support** (configurable per-result budgets for self-hosted DeepSeek V4).

---

## 2. Releases
*No new releases in the last 24h.*  
v0.9.8 cut is being finalized on branch `codex/v098-final-20260814` (PR [#5407](https://github.com/Hmbown/CodeWhale/pull/5407)); tag target `d30effc8`.

---

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#5374](https://github.com/Hmbown/CodeWhale/issues/5374) **Agent text garbled on macOS** | P0 streaming bug: SSE frames split multi-byte UTF-8 → U+FFFD / CJK corruption. Blocks macOS users on DeepSeek Flash. | 5 comments, active reproduction; fix PR [#5404](#) open. |
| [#5322](https://github.com/Hmbown/CodeWhale/issues/5322) **Wide-terminal regression (v0.9)** | Output area capped at max width; worked in v0.8.65. Major UX regression for tmux/ultrawide users. | **Closed**; fix merged in [#5400](https://github.com/Hmbown/CodeWhale/pull/5400). |
| [#5350](https://github.com/Hmbown/CodeWhale/issues/5350) **Prefab third-party model templates** | Users manually craft Base URL / model / env vars for OpenCode Zen, Agnes, SenseNova, etc.; frequent `cache failed` states. | 3 comments; implementation PR [#5406](#) open. |
| [#5367](https://github.com/Hmbown/CodeWhale/issues/5367) **Configurable read/tool-result budgets** | Self-hosted DeepSeek V4 hits hard ceilings (50 KiB read, 12k chars tool result) → 20+ extra reads per file. | 3 comments; PR [#5405](#) adds per-model/HarnessProfile limits. |
| [#5370](https://github.com/Hmbown/CodeWhale/issues/5370) **P0: Web UI "totally broken"** | Public Next.js app (codewhale.net) diverged from harness references; look & feature gaps. | Authored by maintainer Hmbown; audit/rebuild scoped. |
| [#5241](https://github.com/Hmbown/CodeWhale/issues/5241) **Pricing endpoint 503 → unverified_live_pricing** | All sessions show zero cost after 0.8.67→0.9.3 upgrade; control plane not attached. | 2 comments; fix in [#5402](#) falls back to cached pricing. |
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) **EPIC-005: TUI Crate Decomposition** | Umbrella tracking for monolith → crate split; architectural prerequisite for faster CI & plugin isolation. | 7 comments; active sub-issue breakdown. |
| [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) **Chinese "Constitution" translation** | 3-week, 17-comment debate: 宪法 vs 协作准则 vs 宪章. Settled on **宪章**; TUI already uses it (`cf08cb6af`). | **Closed**; web copy updated in [#5397](https://github.com/Hmbown/CodeWhale/pull/5397). |
| [#5410](https://github.com/Hmbown/CodeWhale/issues/5410) **bwrap sandbox: additional roots** | Zig toolchain fails: `/dev/null` redirection & system lib linking denied. Needs opt-in bind mounts. | 1 comment; sandbox hardening vs. dev workflow tension. |
| [#5403](https://github.com/Hmbown/CodeWhale/issues/5403) **Main red on macOS & Windows** | Plugin PTY acceptance & NSIS provisioning failing across 4 completed runs post-CI fix [#5395](#). | 1 comment; blocks release confidence. |

---

## 4. Key PR Progress (10 Important)

| PR | Type | Summary |
|----|------|---------|
| [#5404](https://github.com/Hmbown/CodeWhale/pull/5404) | **Bug Fix** | **SSE UTF-8 fail-closed**: decode per frame → buffer incomplete multi-byte sequences; fixes [#5374](#). |
| [#5400](https://github.com/Hmbown/CodeWhale/pull/5400) | **Bug Fix** | **Full-width transcript**: `session_shell_area` identity restored; expands to host width (v0.8.65 parity). Closes [#5322](#). |
| [#5406](https://github.com/Hmbown/CodeWhale/pull/5406) | **Feature** | **Prefab provider templates** (OpenCode Zen/Go, Agnes, SenseNova) + **Test Connection** button; implements [#5350](#). |
| [#5405](https://github.com/Hmbown/CodeWhale/pull/5405) | **Feature** | **Configurable model-visible budgets** for `read` / `read_file` / tool results; per-model & HarnessProfile; implements [#5367](#). |
| [#5402](https://github.com/Hmbown/CodeWhale/pull/5402) | **Bug Fix** | **Pricing fallback**: session cost no longer stuck at `unverified_live_pricing` on 503; uses cached/estimated pricing. Fixes [#5241](#). |
| [#5399](https://github.com/Hmbown/CodeWhale/pull/5399) | **Stabilization** | **v0.9.8 Rust fixes**: turn-owned subagents, compaction quality, Blue Stage web sync. No version bump. |
| [#5397](https://github.com/Hmbown/CodeWhale/pull/5397) | **I18n** | **Web: "Constitution" → "Charter"** (宪章) per [#4949](#) outcome; aligns with TUI. |
| [#5395](https://github.com/Hmbown/CodeWhale/pull/5395) | **CI** | **Cancel-in-progress fix**: unique concurrency group per push (`ci-${{ github.sha }}`); prevents mid-flight cancellation. |
| [#5396](https://github.com/Hmbown/CodeWhale/pull/5396) | **Test Fix** | **macOS agy_credentials**: fixtures canonicalized to avoid `/var` symlink → `O_NOFOLLOW` rejection. Closes [#5392](#). |
| [#5401](https://github.com/Hmbown/CodeWhale/pull/5401) | **Security** | **CodeQL Highs** (#107 clear-text logging + #88–#106); GHSA prep. No functional changes. |

---

## 5. Feature Request Trends
1. **Third-party provider DX** — Templates, one-click test-connection, embedded docs ([#5350](#), [#5406](#)).
2. **Long-context model tuning** — Per-model read/tool-result ceilings; first-class support for self-hosted DeepSeek V4 ([#5367](#), [#5405](#)).
3. **Sandbox escape hatches** — Opt-in bind mounts for `/dev/null`, system libs, toolchains ([#5410](#)).
4. **Web/TUI parity** — Dictionary spine completion (retire `isZh` branches), feature audit against harness refs ([#5337](#), [#5370](#)).
5. **CI/CD reliability** — Deterministic concurrency, macOS symlink-safe fixtures, flake elimination ([#5395](#), [#5396](#), [#5403](#)).

---

## 6. Developer Pain Points
| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **SSE streaming corruption on macOS** | High (blocks daily use) | [#5374](#) + immediate fix PR [#5404](#) |
| **Wide-terminal regression in v0.9** | High (UX regression) | [#5322](#) closed with fix [#5400](#) |
| **Pricing verification failures → zero cost UI** | Medium (all sessions) | [#5241](#) open since 08-04; fix [#5402](#) |
| **CI flakiness: cancel-in-progress + macOS symlinks** | Medium (blocks merges) | [#5395](#), [#5396](#),

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*