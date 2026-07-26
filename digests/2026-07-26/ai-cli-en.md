# AI CLI Tools Community Digest 2026-07-26

> Generated: 2026-07-26 02:08 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-07-26)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is characterized by **rapid, parallel iteration** across 9 major projects, with all teams shipping nightly/alpha builds and addressing critical stability regressions from recent releases. A clear **convergence on agent orchestration** (subagents, background tasks, session persistence) and **cross-tool interoperability** (AGENTS.md, MCP, skill/plugin ecosystems) is evident. However, **platform-specific instability**—particularly Windows GPU/process management and macOS/Linux Wayland support—remains a systemic weak point. Enterprise readiness (SSH/remote dev, compaction reliability, auth flows) is the next competitive frontier, with several tools explicitly blocking on these gaps.

---

## 2. Activity Comparison (2026-07-25 → 2026-07-26)

| Tool | Hot Issues Tracked | PRs Updated | Release Status | Top Community Signal |
|------|-------------------|-------------|----------------|---------------------|
| **Claude Code** | 10 | 5 (2 closed) | None | #6235 AGENTS.md: **4,451 👍** (highest in repo history) |
| **OpenAI Codex** | 10 | 13 (all open) | **2 alpha releases** (rust-v0.146.0-alpha.10/.10.1) | #10450 Remote Dev: **690 👍, 178 comments** (closed) |
| **Gemini CLI** | 10 | 10 (2 closed) | **1 nightly** (v0.54.0-nightly) | #21409 Generalist agent hang: **8 👍, P1** |
| **GitHub Copilot CLI** | 10 | 2 (both closed w/o merge) | None | #2205 Terminal scroll: **14 👍, 13 comments** (open since Mar) |
| **Kimi Code CLI** | 2 | 4 (3 closed) | None | #1282 Remote Control: **16 👍, 8 comments** |
| **OpenCode** | 10 | 10 | None (v1.18.5 ~Jul 24) | #37012 Legacy layout: **31 👍, 33 comments** |
| **Pi** | 10 | 10 (7 merged) | **v0.82.1 today** (Claude Opus 5, CVE fix) | #6768 Copilot Enterprise compaction: **11 👍** |
| **Qwen Code** | 10 | 10 | **1 nightly** (v0.21.0-nightly) | #6378 Multi-workspace daemon RFC: **30 comments** |
| **DeepSeek TUI (CodeWhale)** | 10 | 10 | None (v0.9.1, v0.9.2 dev) | #3314 App god object: **252 fields, 4.5k lines** (architectural debt) |

**Observations**: OpenAI Codex leads in PR velocity (13) and release cadence (2 alphas). Pi is the only tool with a **stable release today**. Claude Code dominates raw community engagement (4.4k 👍 on AGENTS.md). Kimi and Copilot CLI show lower issue/PR throughput but high-severity regressions.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Session/Task Persistence & Resume** | Claude Code (#76844, #80871, #80249), Copilot CLI (#4251, #4246), Gemini CLI (#22323, #25166), OpenCode (#38791), Pi (#7020, #7048), Kimi (#2517, #2413, #2420) | Task ID continuity across resume; compaction without progress loss; upload/file state persistence; subagent survival across session boundaries |
| **Cross-Tool Context Standard (AGENTS.md)** | Claude Code (#6235, 4.4k 👍), Gemini CLI (referenced in PRs), Qwen Code (external context provider #7585), Kimi (AGENTS.md refresh #2519), OpenCode (skill/workflow parity) | Portable, agent-agnostic codebase context format; migration path from CLAUDE.md/GEMINI.md; skill/plugin metadata interoperability |
| **Subagent/Background Task Reliability** | Claude Code (#77554, #78313), Gemini CLI (#22323, #21409), Qwen Code (#7685, #7702), OpenCode (v2 allocation loops #36677), Pi (compaction stalls #7020) | Turn-limit reporting accuracy; orphaned task cleanup; model-grade selection at spawn; non-blocking delegation;blocking background execution |
| **Remote/SSH/Container Development** | OpenAI Codex (#10450, #32512, #35217), Qwen Code (#6378 multi-workspace daemon), Kimi (#1282 Remote Control), DeepSeek TUI (#3927 offline onboarding), Pi (#7114 manual OAuth) | VS Code Remote–SSH/Containers parity; daemon multi-tenancy; cross-device session continuity; air-gapped/offline auth flows |
| **MCP / Tool Ecosystem Maturity** | OpenAI Codex (#30408, #35414, #11324), Gemini CLI (skills underused #21968), Qwen Code (#7697 Unity MCP, #7618 Cua Driver), DeepSeek TUI (#2743, #1172 plugin migration), Copilot CLI (#4247 marketplace) | Process lifecycle management; recursion limits; allowlist filtering; skill/plugin marketplace persistence; cross-tool skill portability |
| **Model Config Fidelity & Multi-Provider Support** | Claude Code (#79798, #81288), OpenAI Codex (#31864 GPT-5.6), Pi (#7065, #7067 model switch), DeepSeek TUI (#4832, #4838 non-DeepSeek providers), Qwen Code (#7685 model-grade), OpenCode (#38854 LAN Ollama) | Config flags honored per model version; thinking/effort/delegation mapping; provider-agnostic model resolution; context-window validation on switch |
| **Desktop/TUI Stability (Windows/macOS/Linux)** | Claude Code (#81275, #77768 GPU crashes), OpenAI Codex (#33776, #34133, #25453 process storms), Gemini CLI (#21983 Wayland), OpenCode (#38844, #38885 Windows freeze), Pi (#6665 CPU pinning, #6050 scrollback), DeepSeek TUI (#3904–#3908 render jank) | GPU process isolation; CPU idle behavior; Wayland compatibility; scrollback preservation; TUI render optimization |
| **Observability & Cost Control** | Claude Code (#64988 timestamps, #76863 status line), Qwen Code (#7719 token usage), Pi (#7048 compaction truncation, #7101 cost preview), OpenCode (#38881 session name in status), Copilot CLI (#4183 5 MB CAPI limit) | Token/quota visibility; per-tool latency; timezone-aware timestamps; subagent context in UI; compaction summary integrity |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|---------------|-------------|-------------------|
| **Claude Code** | **Enterprise agent workflows** with Opus 4.8/5; cross-tool standardization | Professional dev teams, autonomous background orchestration | Tight Anthropic model integration; CLAUDE.md context; Desktop app + CLI parity |
| **OpenAI Codex** | **Sandboxed, multi-agent coding** with rapid Rust CLI iteration | Power users, OSS contributors, teams needing remote/SSH | Rust core (codex-rs); exec-server sandbox; MCP-first architecture; Desktop app wrapper |
| **Gemini CLI** | **Agent reliability & evaluation infrastructure**; automated PR generation (SSR pipeline) | Google ecosystem users, teams needing behavioral evals | Go/TypeScript; component-level evals (76 across 6 models); Firestore-backed PR generator |
| **GitHub Copilot CLI** | **IDE-terminal parity**; GitHub-native workflows (PR, issues, skills) | GitHub-centric developers, enterprise Copilot seats | Node/TypeScript; deep GitHub API integration; VS Code extension + CLI duality |
| **Kimi Code CLI** | **Session resilience & cross-device continuity**; lightweight core | Mobile-first developers, Chinese-market users | Go; web-based Remote Control; persistent upload markers; AGENTS.md refresh on resume |
| **OpenCode** | **TUI-first UX with legacy layout option**; multi-provider model routing | Terminal power users, Ollama/self-hosted model users | Go; ACP protocol; plugin system; v2 rewrite in progress |
| **Pi** | **Extensible coding agent platform**; enterprise auth & compaction reliability | Platform builders, enterprise users needing custom providers | TypeScript monorepo; extension API (Mecha); vitest eval harness; multi-provider (Anthropic, Bedrock, OpenRouter, llama.cpp) |
| **Qwen Code** | **Web Shell IDE parity**; multi-workspace daemon; verifiable subagents | Web-first developers, teams needing git/PR in browser | TypeScript; Web Shell (Ink/React); sandbox runtime probing; mutation-tested verification |
| **DeepSeek TUI (CodeWhale)** | **Architectural cleanup**; multi-provider parity; plugin ecosystem | DeepSeek users, plugin/workflow migrators from Cursor/Codex/CC | Rust; App god object refactor; CWC browser remote control; skill pack routing metadata |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum / Rapid Iteration** | **OpenAI Codex**, **Pi**, **Qwen Code** | Daily alpha/nightly releases; 10+ PRs/day; merged PRs addressing core infra (MCP, sandbox, eval harness, daemon scaling) |
| **High Engagement / Maturing** | **Claude Code**, **OpenCode** | Massive community votes (4.4k 👍, 31 👍); legacy layout demand shows installed base; regression clusters on recent releases indicate active user base |
| **Stabilizing / Regression-Focused** | **Gemini CLI**, **GitHub Copilot CLI** | P1 agent hangs/OOMs blocking workflows; fewer new features, more bug fixes; Copilot CLI has 0 merged PRs in window |
| **Early / Niche Momentum** | **Kimi Code CLI**, **DeepSeek TUI** | Lower issue/PR volume but high-severity fixes (session integrity, provider resolution); architectural refactors underway (App god object, Remote Control) |

**Key Insight**: The ecosystem splits between **platform-backed tools** (Codex, Gemini, Copilot, Claude) with dedicated infra teams shipping daily, and **community/emerging tools** (OpenCode, Pi, Qwen, Kimi, DeepSeek) iterating on architectural debt and differentiation. Pi’s stable release today and Codex’s 2 alphas signal highest ship velocity.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **AGENTS.md is becoming the de facto interop standard** | 4.4k 👍 on Claude Code #6235; referenced in Gemini, Qwen, Kimi PRs; Copilot skills truncation (#1464) shows need for portable context | **Adopt AGENTS.md now**; build tooling around it; expect all major CLIs to support it within 2 quarters |
| **Session resilience > raw model capability** | 7/9 tools have critical resume/compaction bugs; users explicitly migrating over this (Claude Code #6235 comments) | **Evaluate tools on session fidelity** (task ID persistence, compaction integrity, subagent survival) before model benchmarks |
| **Remote/SSH/Container dev is table stakes** | Codex #10450 (690 👍) closed but demand persists; Qwen daemon RFC (30 comments); Kimi Remote Control (16 👍); DeepSeek offline onboarding | **Tools without remote parity will lose enterprise/team adoption**; plan for daemon multi-tenancy and cross-device session sync |
| **MCP/Plugin ecosystem fragmentation** | Every tool has distinct skill/plugin format; migration walls cited in DeepSeek (#1172), Codex (#11324), Copilot (#4247), Qwen (#7697) | **Invest in adapter layers**; expect a "Language Server Protocol for agents" effort; avoid vendor-locked skill formats |
| **Windows stability is a systemic blocker** | GPU crashes (Claude, Codex, Pi), process storms (Codex), freezes (OpenCode), test flakiness (

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-26 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator`: fix `run_eval.py` 0% recall | Core tooling fix — `run_eval.py` (and downstream `run_loop.py`, `improve_description.py`) reports `recall=0%` for every skill description, breaking the description-optimization loop. Fixes Windows stream reading, trigger detection, and parallel workers. | 10+ independent reproductions (#556); blocks skill creators from optimizing descriptions. | **Open** |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Prevents typographic defects in AI-generated docs: orphan words, widow headers, numbering misalignment. Triggers on any document generation request. | Addresses a universal pain point — users rarely ask for good typography but notice when it's broken. | **Open** |
| 3 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills for the marketplace: quality analysis across 5 dimensions (structure, examples, resources, triggers, security) and security scanning (secrets, injection, permissions). | First "skills that analyze skills" — enables community self-governance. | **Open** |
| 4 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing skill: Testing Trophy philosophy, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing, CI integration. | Fills a gap — no existing skill covers the full testing stack with opinionated patterns. | **Open** |
| 5 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` | Mechanical file verification + four-dimension reasoning audit (correctness, completeness, consistency, safety) in damage-severity priority. Universal across projects/stacks/models. | Novel "quality gate before delivery" approach; v1.3.0 adds damage-severity ordering. | **Open** |
| 6 | **[#1302](https://github.com/anthropics/skills/pull/1302)** `color-expert` | Self-contained color expertise: naming systems (ISCC-NBS, Munsell, XKCD, RAL, CSS), color spaces (OKLCH, OKLAB, CAM16), accessibility, harmonies, conversion. | Highly specialized domain skill; covers both theory and practical "what to use when" tables. | **Open** |
| 7 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` (OpenDocument) | Create, fill, read, convert ODT/ODS files via `pyxel-mcp`. Triggers on "ODT", "OpenDocument", "LibreOffice", ISO-standard requests. | Enables open-format document workflows; integrates with MCP server. | **Open** |
| 8 | **[#525](https://github.com/anthropics/skills/pull/525)** `pyxel` (retro game dev) | Skill for `pyxel-mcp` — retro/pixel-art/8-bit game development in Python. Workflow: write → run_and_capture → inspect → iterate. | Niche but passionate community; demonstrates MCP + skill composition for creative coding. | **Open** |

> **Note**: PR comment counts show as `undefined` in source data; ranking reflects "top 20 by comments" ordering from GitHub. The above are the most substantive *new skill* submissions (vs. bug fixes).

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issues) | Signal Strength |
|-------|-------------------|-----------------|
| **Skill distribution & trust model** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍): Community skills masquerading as official `anthropic/` namespace — trust boundary abuse. [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍): Duplicate skills from `document-skills` + `example-skills` plugins. | 🔴 **Critical** — Security & UX |
| **Org-wide skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍): No native sharing in Claude.ai; manual file transfer via Slack/Teams required. | 🟠 **High** — Workflow friction |
| **Skill-creator tooling reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍): `run_eval.py` 0% trigger rate. [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments): Recall=0% even for literal slash-commands. [#1061](https://github.com/anthropics/skills/issues/1061) (3 comments, 2👍): Windows PATHEXT/encoding/select bugs. | 🟠 **High** — Blocks skill authors |
| **Governance & safety skills** | [#412](https://github.com/anthropics/skills/issues/412) (closed): `agent-governance` proposal (policy enforcement, threat detection, audit trails). [#1385](https://github.com/anthropics/skills/issues/1385): Reasoning Quality Gate Pipeline (calibration → adversarial review → verification). | 🟡 **Growing** — Agent safety |
| **MCP ↔ Skill interop** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments): Expose skills as MCPs for standard API signaling. [#486](https://github.com/anthropics/skills/pull/486), [#525](https://github.com/anthropics/skills/pull/525): Skills already wrapping MCP servers. | 🟡 **Emerging** — Architecture |
| **Specialized domain skills** | [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments): `compact-memory` (symbolic notation for agent state). [#181](https://github.com/anthropics/skills/pull/181): SAP-RPT-1-OSS predictor. [#1302](https://github.com/anthropics/skills/pull/1302): `color-expert`. | 🟢 **Active** — Long tail |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval fix (core tooling) | Blocks all description optimization; 10+ reproductions; multiple related PRs (#1099, #1050, #1323) converging on same root cause. |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Universal need (every generated doc); no competing skill; clear spec with concrete triggers. |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Comprehensive coverage of the only skill covering full testing stack; aligns with enterprise adoption. |
| **[#83](https://github.com/anthropics/skills/pull/83)** | `skill-quality-analyzer` / `skill-security-analyzer` | Meta-skills enable community scaling; directly addresses #492 trust concerns. |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` | Novel quality-gate pattern; v1.3.0 shows active iteration; universal applicability. |
| **[#1302](https://github.com/anthropics/skills/pull/1302)** | `color-expert` | Complete, self-contained domain skill; no overlaps; practical reference tables. |
| **[#538](https://github.com/anthropics/skills/pull/538)** | `pdf` case-sensitivity fix | Small, targeted fix for cross-platform breakage; low review burden. |
| **[#539](https://github.com/anthropics/skills/pull/539)** | `skill-creator` YAML validation | Prevents silent description corruption; complements #361/#362 UTF-8 fixes. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *reliable skill-authoring tooling* (fixing the broken `run_eval`/`run_loop` pipeline on Windows and Unix) and *trustworthy skill distribution* (resolving namespace impersonation and duplicate installation) — without these foundations, domain skill contributions cannot scale.**

---

# Claude Code Community Digest — 2026-07-26

---

## 1. Today's Highlights

The community's overwhelming focus remains on **AGENTS.md standardization** (#6235, 4,451 👍), reflecting a strong push for cross-tool interoperability. Meanwhile, a cluster of **session-resumption and task-persistence bugs** (#76844, #80871, #80249) and **Opus 4.8/5 model integration issues** (#79798, #81283, #81288) dominate recent technical discussions. Desktop stability on Windows (GPU crashes, MSIX issues) and macOS (subagent hangs) also surfaced prominently.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#6235](https://github.com/anthropics/claude-code/issues/6235) Support AGENTS.md** | Industry-wide standard for agent-agnostic codebase context; CLAUDE.md locks users into Claude Code. | **4,451 👍, 344 comments** — highest engagement in repo history; users explicitly migrating to Codex/Cursor over this. |
| **[#79798](https://github.com/anthropics/claude-code/issues/79798) `alwaysThinkingEnabled` not → `thinking: {type:"adaptive"}` on Opus 4.8** | Silent failure: extended thinking disabled despite config; 400 errors on `xhigh` + WebSearch. | 7 comments, 1 👍 — blocks high-effort workflows; affects Opus 4.8 specifically. |
| **[#76844](https://github.com/anthropics/claude-code/issues/76844) Task list not restored on `--resume/--continue`** | Task IDs regenerate on resume, breaking `TaskUpdate`/`TaskList` continuity for long-running work. | 2 comments, 1 👍 — core workflow blocker for multi-session agent runs. |
| **[#80871](https://github.com/anthropics/claude-code/issues/80871) TaskUpdate/TaskList IDs don't survive session resume** | Duplicate of #76844 symptom; confirms systemic task-persistence flaw. | 1 comment, 1 👍. |
| **[#80249](https://github.com/anthropics/claude-code/issues/80249) Background Workflow dies at session boundary** | Compaction prompt handling breaks multi-hour, 20+ subagent workflows; `resumeFromRunId` re-runs entire pipeline. | 1 comment — critical for autonomous background orchestration. |
| **[#77554](https://github.com/anthropics/claude-code/issues/77554) Background tasks orphaned when sub-agent turn ends** | Non-root subagent background tasks become unrecoverable; leaks resources. | 3 comments — affects `run_in_background: true` and nested `Agent`/`Task` dispatch. |
| **[#78313](https://github.com/anthropics/claude-code/issues/78313) Subagents hang on first tool call (intermittent)** | Parent waits forever; no error, 0 tool uses. Observed on Linux/Opus 4.8 high/max effort. | 2 comments — non-deterministic, hard to debug. |
| **[#81275](https://github.com/anthropics/claude-code/issues/81275) Desktop MSIX: Browser pane crashes GPU process (exit code 101457950)** | Consistent crash on Intel, NVIDIA, and WARP; kills entire app. | 1 comment — blocks Cowork browser preview on Windows. |
| **[#77768](https://github.com/anthropics/claude-code/issues/77768) Desktop GPU crash during web research (4–5×/day)** | Silent crash, no dump, no recovery; recurs daily during research workflows. | 2 comments, 1 👍 — major Desktop stability issue. |
| **[#81288](https://github.com/anthropics/claude-code/issues/81288) Opus 5 AUP safeguard false positives on security research** | Benign defensive/backdoor-removal work flagged repeatedly in BBH/VSF framework (BBH/VSF) multi-agent sessions. | 0 comments (new) — echoes #74293 safety-research exemption request. |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| **[#81262](https://github.com/anthropics/claude-code/pull/81262)** | Open | Log closed issues as `github_issue_closed` events in Statsig (fixes duplicate `github_issue_created` on close). |
| **[#81261](https://github.com/anthropics/claude-code/pull/81261)** | Open | Fix `/clean_gone` for worktree paths with spaces using `git for-each-ref` + `git worktree list --porcelain -z`. |
| **[#39043](https://github.com/anthropics/claude-code/pull/39043)** | Open | Remove "retro-futuristic" recommendation from Frontend Design Skill (stale aesthetic guidance). |
| **[#15727](https://github.com/anthropics/claude-code/pull/15727)** | **Closed** | Fix `hookify` plugin Python import paths (`hookify.core.config_loader` → `core.config_loader`). |
| **[#49596](https://github.com/anthropics/claude-code/pull/49596)** | **Closed** | Extract shared GitHub API client into `github-api.ts` with tests. |

---

## 5. Feature Request Trends

1. **Cross-tool standardization** — AGENTS.md adoption (#6235) is the single loudest ask; developers want portable context files.
2. **Session/task continuity** — Resume/restore fidelity for tasks, subagents, effort levels, and workflows (#76844, #80871, #73742, #80249).
3. **Model-config fidelity** — Settings (`alwaysThinkingEnabled`, `--effort`, delegation policy) must map correctly to API calls per model version (#79798, #80988, #73742).
4. **Observability & debugging** — Timezone-aware timestamps (#64988), status-line subagent context (#76863), plain-English control-char errors (#81289).
5. **Safety/research exemptions** — Legitimate security research (backdoor removal, eval frameworks) repeatedly flagged (#74293, #81288).
6. **Desktop parity & stability** — Windows GPU crashes, MSIX issues, macOS subagent hangs; feature gaps vs. CLI.

---

## 6. Developer Pain Points

| Area | Recurring Frustrations |
|------|------------------------|
| **Session Resumption** | Task IDs reset, effort levels pinned from daemon cache, workflows re-run from scratch on compaction/resume. |
| **Model Integration** | Config flags silently ignored (thinking, delegation, effort); model availability gaps across CLI/VSCode/Desktop; AUP false positives on valid work. |
| **Subagent Reliability** | Orphaned background tasks, intermittent hangs on first tool call, no visibility into focused subagent from status line. |
| **Desktop Stability (Windows)** | GPU process crashes (Browser pane, web research), MSIX-specific failures, no crash dumps/recovery. |
| **Interoperability** | CLAUDE.md lock-in vs. AGENTS.md ecosystem standard; no migration path. |
| **Observability** | UTC-only timestamps, opaque control-char rejections, missing subagent context in UI. |

---

*Data sourced from `github.com/anthropics/claude-code` — issues/PRs updated in the last 24h.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-26

---

## 1. Today's Highlights

Two Rust alpha releases (0.146.0-alpha.10 and .10.1) shipped in the last 24 hours, continuing rapid iteration on the CLI core. The issue tracker remains dominated by **Windows Desktop stability problems** — GPU process crashes, `taskkill.exe`/`conhost.exe` storms, PowerShell polling loops, and spellcheck regressions — alongside **MCP server memory leaks** and **remote SSH handoff failures** for large conversations. A highly-upvoted feature request for **Remote Development support in the Desktop App** (#10450, 690 👍) was closed, suggesting the team may be pivoting or deferring this capability.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.146.0-alpha.10.1` | Alpha patch | Follow-up to alpha.10; likely minor fix (no changelog in release notes) |
| `rust-v0.146.0-alpha.10` | Alpha | Base alpha release for the 0.146 series |

> **Links:** [alpha.10.1](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.10.1) · [alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.10)

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#10450](https://github.com/openai/codex/issues/10450) | **Remote Development in Codex Desktop App** (CLOSED) | Top-voted enhancement (690 👍, 178 comments). Users want VS Code Remote–SSH/Containers parity. Closure signals strategic shift or deferral. | 🔥 690 👍, 178 comments |
| [#33776](https://github.com/openai/codex/issues/33776) | **Windows: `ChatGPT.exe` spawns hundreds of `taskkill.exe`/`conhost.exe` → WMI storms, DWM degradation** | Critical stability/reliability blocker on Windows; makes Desktop unusable for extended sessions. | 21 👍, 24 comments |
| [#30408](https://github.com/openai/codex/issues/30408) | **MCP server process leak: per-thread processes never cleaned up (9+ GB RSS)** | Unbounded memory growth breaks multi-day, multi-thread workflows; affects all platforms. | 4 👍, 17 comments |
| [#1457](https://github.com/openai/codex/issues/1457) | **Python UV fails in Codex** (CLOSED) | Long-standing toolchain incompatibility (uv/pre-commit) in sandbox; impacts Python devs heavily. | 46 👍, 61 comments |
| [#25453](https://github.com/openai/codex/issues/25453) | **Windows: `powershell.exe` spawned every second for process polling → high CPU** | Persistent background CPU drain; indicates inefficient process enumeration strategy. | 4 👍, 16 comments |
| [#34133](https://github.com/openai/codex/issues/34133) | **Windows: `Page.captureScreenshot` crashes GPU process (Code Integrity rejects `vk_swiftshader.dll`)** | Browser tooling broken on Windows 10; unsigned SwiftShader fallback blocked by CI policy. | 14 comments |
| [#35058](https://github.com/openai/codex/issues/35058) | **VS Code extension: Codex Diff crashes with “Oops, an error has occurred” on macOS** | Core review workflow broken in IDE; affects all repos on macOS Apple Silicon. | 11 👍, 12 comments |
| [#26478](https://github.com/openai/codex/issues/26478) & [#30749](https://github.com/openai/codex/issues/30749) | **Windows spellcheck: detects misspellings but shows “No Guesses Found”** | UX regression in composer; two duplicate reports confirm widespread impact. | 23 👍 / 1 👍, 12/6 comments |
| [#31864](https://github.com/openai/codex/issues/31864) | **GPT-5.6 Sol: `collaboration.spawn_agent` reserved error breaks all turns** | Model/tool schema mismatch blocks newest model entirely; high-severity for early adopters. | 14 👍, 6 comments |
| [#35217](https://github.com/openai/codex/issues/35217) | **Remote SSH reconnect loop leaks thousands of `app-server` processes on shared NFS home** | Infra-scale leak in team environments; combines remote + process-management bugs. | 3 comments |

---

## 4. Key PR Progress (Last 24h)

| # | PR | Summary | Significance |
|---|----|---------|--------------|
| [#35414](https://github.com/openai/codex/pull/35414) | **Raise MCP server recursion limit to 256** | Fixes deep skill/graph traversal crashes; directly supports complex agent workflows. |
| [#35359](https://github.com/openai/codex/pull/35359) | **Handle exec-server network policy requests in client** | Adds per-process allow/deny/ask for network egress; hardens sandbox security model. |
| [#35363](https://github.com/openai/codex/pull/35363) | **Include item start times in completion events** | Enables latency observability per tool call; foundational for perf dashboards. |
| [#35364](https://github.com/openai/codex/pull/35364) | **Bound Code Mode metadata compatibility headers** | Prevents unbounded HTTP/WS header growth from tool-name mapping; DoS mitigation. |
| [#35365](https://github.com/openai/codex/pull/35365) | **Keep unified mention results fresh** | Restarts file search on popup open; fixes stale @-mention completions. |
| [#35375](https://github.com/openai/codex/pull/35375) | **Make keymap action menu responsive** | TUI usability: stacks descriptions on narrow terminals; improves discoverability. |
| [#35408](https://github.com/openai/codex/pull/35408) | **Ignore generated system skills in skills watcher** | Stops watcher churn on pre-installed system skills; reduces startup noise. |
| [#31810](https://github.com/openai/codex/pull/31810) | **perf(core): pipeline ancestor discovery** | Parallelizes root-marker, AGENTS, and skill discovery; speeds remote project startup. |
| [#31782](https://github.com/openai/codex/pull/31782) | **Bound stdio JSON-RPC frame size (64 MiB)** | Hardens exec-server protocol against unbounded frame DoS. |
| [#30228](https://github.com/openai/codex/pull/30228) | **Notify clients when thread-selected skills change** | Adds invalidation signal for dynamic skill sets; unblocks reactive UI updates. |
| [#29845](https://github.com/openai/codex/pull/29845) | **Plumb explicit application paths through Windows launchers** | Foundational plumbing for Windows unified-exec resolution; enables future `codex.exe` fixes. |
| [#31582](https://github.com/openai/codex/pull/31582) | **Expose thread-selected skills from skills/list** | API completeness: clients can now see env-selected skills, not just cwd-discovered ones. |
| [#31817](https://github.com/openai/codex/pull/31817) | **Automated `models.json` update** | Routine model catalog refresh. |
| [#35280](https://github.com/openai/codex/pull/35280) | **Skip plugin MCP filtering when no allowlists configured** | Removes unnecessary filtering overhead for default plugin configurations. |

---

## 5. Feature Request Trends (from Issue Corpus)

1. **Remote Development Parity** — SSH, containers, devcontainers, and multi-host worktrees in Desktop App (#10450, #32512, #35217). Closed but highest vote count.
2. **Usage Transparency** — Persistent 5-hour/weekly limit display in Desktop status bar (#32195, 6 👍).
3. **MCP Ecosystem Maturity** — Allowlist filtering, recursion limits, process lifecycle management (#30408, #11324, #35414).
4. **Cross-Platform Desktop Polish** — Spellcheck suggestions, accessibility (JAWS), GPU stability, CPU idle behavior (Windows cluster).
5. **IDE Integration Reliability** — Diff view, auth flow, extension crash loops on Windows/macOS (#35058, #35162, #35240).
6. **Context/Compaction Control** — Auto-compaction loops rereading files, losing progress, burning credits (#35226, #23257).

---

## 6. Developer Pain Points (Recurring High-Frequency Frustrations)

| Area | Symptoms | Representative Issues |
|------|----------|----------------------|
| **Windows Desktop Stability** | GPU crashes, process storms (`taskkill`, `conhost`, `powershell`), spellcheck broken, browser crashes, high idle CPU | #33776, #25453, #26478, #34133, #35352, #33483 |
| **MCP / Agent Process Leaks** | Unbounded memory (GBs), orphaned servers per thread, NFS-home reconnect storms | #30408, #11324, #35217, #33235 |
| **Remote/SSH Handoff Fragility** | 16 MiB WebSocket message limit, conversation rollout transfer fails, app-server leaks | #32512, #35217 |
| **Context Compaction Bugs** | Full image base64 re-embedded, progress lost, paid credits consumed unexpectedly | #23257, #35226, #33235 |
| **IDE Extension Breakage** | Diff panel crashes (macOS), auth 403/ crash post-login (Windows), version regressions | #35058, #35162, #35240 |
| **Model/Tool Schema Mismatches** | Reserved function errors (`collaboration.spawn_agent`) blocking newest models | #31864 |
| **Sandbox Toolchain Gaps** | `uv`/`pre-commit` failures, `apply_patch.bat` resolving wrong `codex.exe` on Windows | #1457, #29365 |

---

*Generated from `github.com/openai/codex` data (releases, issues, PRs updated 2026-07-25 → 2026-07-26).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-26

## 1. Today's Highlights
The project shipped **v0.54.0-nightly.20260726.g3818efbbf**, publishing changelogs for the recent v0.53.0-preview.0 and v0.52.0 releases. Engineering effort is heavily focused on **agent reliability**: multiple P1 bugs around subagent turn-limit reporting, generalist-agent hangs, and shell-command “awaiting input” deadlocks are under active investigation. A new **SSR Code Generation Pipeline** (pr-generator) is being built across several large PRs, adding Firestore-backed orchestration, container workers, and Antigravity agent prompts for automated issue-to-PR workflows.

## 2. Releases
**v0.54.0-nightly.20260726.g3818efbbf** ([#28536](https://github.com/google-gemini/gemini-cli/pull/28536))  
- Automated nightly version bump.  
- Includes changelogs for **v0.53.0-preview.0** ([#28507](https://github.com/google-gemini/gemini-cli/pull/28507)) and **v0.52.0** ([#28508](https://github.com/google-gemini/gemini-cli/pull/28508)).  
- No user-facing feature changes in this nightly; primarily release-infrastructure updates.

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reported as GOAL success** | Subagents silently mask turn-limit exhaustion as success, breaking trust in delegation. | 12 comments, 2 👍, **P1**, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Core delegation path stalls on simple ops (folder creation); workaround is disabling subagents. | 8 comments, 8 👍, **P1**, `status/need-retesting` |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations** | Epic to harden the 76 behavioral evals across 6 model variants; foundational for release confidence. | 7 comments, **P1**, `aiq/eval_infra` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads, search, & mapping** | Investigates whether AST tooling (tilth/glyph) can reduce turn count & token noise for code navigation. | 7 comments, 1 👍, **P2**, `kind/feature` |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini under-uses custom skills & sub-agents** | Model rarely invokes registered skills (gradle, git, etc.) without explicit instruction. | 6 comments, **P2** |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions endlessly** | Background extractor re-queues unread sessions, wasting cycles & storage. | 5 comments, **P2** |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell command stuck at “Waiting input” after completion** | Frequent UI deadlock on trivial commands; blocks interactive workflows. | 4 comments, 3 👍, **P1**, `effort/medium` |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Browser agent: session takeover & lock recovery** | Current “fail-fast” on locked profile breaks persistent browser sessions. | 4 comments, **P3**, `kind/feature` |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Platform-specific regression; blocks Linux Wayland users. | 4 comments, 1 👍, **P1**, `agent/browser` |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | **Symlinked agent files not recognized** | `~/.gemini/agents/filename.md` symlinks ignored; breaks dotfile management workflows. | 4 comments, **P2**, `status/need-information` |

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#28536](https://github.com/google-gemini/gemini-cli/pull/28536) | **chore/release: bump to 0.54.0-nightly.20260726** | Automated nightly cut. | Open |
| [#28535](https://github.com/google-gemini/gemini-cli/pull/28535) | **fix: use resolveRipgrepPath in perf test setup** | Removes deleted `canUseRipgrep()` helper; unblocks perf CI. | Open |
| [#28534](https://github.com/google-gemini/gemini-cli/pull/28534) | **fix(ci): retry staging-tmp dist-tag removal after npm publish** | Addresses race where `npm dist-tag rm` fails on large core package. | Open |
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | **fix(core): refresh MCP OAuth tokens with stored client ID** | **Security/Stability**: fixes token refresh for dynamically registered MCP servers, stops forced re-auth loops. | Open |
| [#28401](https://github.com/google-gemini/gemini-cli/pull/28401) | **fix(shell): bound command output sent to model** | Caps shell-tool output to prevent context explosion (e.g., `find /`, huge `git log`). | Open, `status/pr-nudge-sent` |
| [#28442](https://github.com/google-gemini/gemini-cli/pull/28442) | **Main (size/xl)** | Large integration PR; details TBD. | Open |
| [#28353](https://github.com/google-gemini/gemini-cli/pull/28353) | **fix(a2a-server): prevent path traversal in restore command** | **Security**: normalizes & contains `restore` argument; defense-in-depth. | **Closed** |
| [#28348](https://github.com/google-gemini/gemini-cli/pull/28348) | **fix: resolve MaxListenersExceededWarning & infinite auth loop** | Fixes event-emitter leak + Windows OAuth loop after successful login. | **Closed** |
| [#28435](https://github.com/google-gemini/gemini-cli/pull/28435) | **feat(pr-generator-core): env config parser, cmd executor, GitHub REST client** | Foundational libs for the **SSR Issue→PR Pipeline** (Antigravity). | Open, `status/pr-nudge-sent` |
| [#28433](https://github.com/google-gemini/gemini-cli/pull/28433) | **feat(pr-generator-orchestrator): iterative bug-fixing state machine & container worker** | Orchestrates Firestore locking, AI coding loops, ESLint, diff limits, auto-PR. | Open, `status/pr-nudge-sent` |

## 5. Feature Request Trends
1. **AST-aware code navigation** — Multiple issues (#22745, #22746) seek precision tooling to reduce token spend & turn count.  
2. **Subagent/skill discoverability & autonomy** — Users want the model to proactively invoke registered skills & subagents (#21968, #22598).  
3. **Browser agent hardening** — Persistent sessions, lock recovery, Wayland support (#22232, #21983, #22267).  
4. **Evaluation infrastructure** — Scaling behavioral evals across model variants & making them reliable (#24353, #23313).  
5. **Memory system quality** — Deterministic redaction, inbox quarantine, low-signal session handling (#26522, #26523, #26525).  
6. **Chat/share UX for subagent trajectories** — Make nested agent traces inspectable via `/chat share` (#22598).

## 6. Developer Pain Points (Recurring Frustrations)
- **Agent hangs & silent failures**: Generalist agent stalls (#21409), shell tool “awaiting input” phantom state (#25166), browser agent Wayland crash (#21983).  
- **Delegation trust issues**: Subagents misreport turn-limit as success (#22323), run without permission (#22093), ignore `settings.json` overrides (#22267).  
- **Configuration friction**: Symlinked agents ignored (#20079), settings not propagated to subagents (#22267), OAuth re-auth loops on Windows (#28348).  
- **Token/context bloat**: Unbounded shell output floods model context (#28401), auto-memory re-processes noise (#26522).  
- **Platform gaps**: Wayland browser support, Windows auth stability, large-package npm publish races (#28534).  
- **Observability gaps**: Bug reports lack subagent context (#21763), subagent trajectories not shareable (#22598), eval flakiness (#23313).

---

*Generated from `google-gemini/gemini-cli` GitHub data (releases, issues, PRs updated 2026-07-26). All links point to live GitHub items.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-26

## Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker shows a surge of regression reports against v1.0.74–1.0.75, notably an OOM/CPU regression on large-session resume (#4251), a settings-clobber bug that silently reverts model changes on exit (#4252), and a terminal scrolling regression in Terminator (#2205). Meanwhile, plugin marketplace persistence (#4247) and session archive timeouts (#4246) are blocking advanced workflows.

## Releases
*No releases published in the last 24 hours.*

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#2205](https://github.com/github/copilot-cli/issues/2205) Terminal scroll broken in Terminator — mouse wheel navigates input history instead of output | Core usability regression for terminal users; `---no-mouse` doesn’t fix it | 14 👍, 13 comments (open since Mar) |
| [#4251](https://github.com/github/copilot-cli/issues/4251) Resume of large session OOMs / pegs CPU for ~70 min in 1.0.74 (regression vs 1.0.73) | Blocks daily workflow for heavy users; 3–4× memory spike isolated to 1.0.74 | New, 0 👍 but high-severity regression |
| [#4252](https://github.com/github/copilot-cli/issues/4252) Session exit writes launch-time `model` back to `settings.json`, silently reverting edits | Causes “self-perpetuating stale default” — manual/model-switch changes lost on quit | New, 0 👍; data-loss risk |
| [#4183](https://github.com/github/copilot-cli/issues/4183) Auto-compaction doesn’t prevent CAPI 5 MB body limit from accumulated tool history | Sessions hit hard 5 MB Requests API limit despite token headroom; compaction logic gap | 10 👍, 3 comments |
| [#4247](https://github.com/github/copilot-cli/issues/4247) `plugin marketplace add` reports success but registration not persisted | Marketplace additions vanish immediately; `list`/`browse` fail with “not found” | New, 0 👍; breaks plugin ecosystem |
| [#4246](https://github.com/github/copilot-cli/issues/4246) `archive_session` times out after 60 s, orphans large worktrees | Leaves GBs of disk waste and unrecoverable session branches | New, 0 👍; ops/ops risk |
| [#1464](https://github.com/github/copilot-cli/issues/1464) Skills beyond alphabetical position ~32 unreachable due to token-limit truncation | 63 skills installed → only first 32 shown to model; later skills never selected | 5 👍, 5 comments (open since Feb) |
| [#4241](https://github.com/github/copilot-cli/issues/4241) Password masking masks from agent, triggers extra token loops reading raw bytes | Security feature backfires: agent re-reads file as bytes, wastes tokens & gets stuck | New, 0 👍 |
| [#4244](https://github.com/github/copilot-cli/issues/4244) `/rename` unsupported in VS Code agent sessions; agent cannot invoke it | Feature parity gap between terminal and VS Code Agents UI | New, 0 👍 |
| [#4248](https://github.com/github/copilot-cli/issues/4248) `/pr` fails on repos using SSH host aliases (`~/.ssh/config`) | Common SSH config pattern breaks PR workflow; false “not a GitHub repo” error | New, 0 👍 |

## Key PR Progress
Only two PRs updated in the last 24 h; both closed without merge:
- [#23](https://github.com/github/copilot-cli/pull/23) *Create monad.yml* — stale design doc, closed.
- [#4228](https://github.com/github/copilot-cli/pull/4228) *Withdrawn: incorrect scope for #3534* — author withdrew; changed docs instead of runtime clipboard fix.

No active feature/fix PRs surfaced in this window.

## Feature Request Trends
1. **IDE–Terminal parity** — `/rename` in VS Code Agents (#4244), diff lighting in IDE terminals (#17).
2. **Plugin marketplace robustness** — persistence (#4247), schema validation for third-party marketplaces (#1996).
3. **Session durability** — reliable large-session resume (#4251), archive without timeout (#4246), plan-indicator isolation across headless switches (#4249).
4. **Model/context control** — prevent silent settings overwrite (#4252), fix compaction vs. 5 MB CAPI limit (#4183), expand skill visibility beyond 32 (#1464).
5. **SSH/remote flexibility** — `/pr` support for SSH host aliases (#4248).

## Developer Pain Points
- **Regression fatigue**: v1.0.74 introduced OOM/CPU spike on resume (#4251) and settings clobber (#4252), eroding trust in patch releases.
- **Silent data loss**: marketplace registrations vanishing (#4247), worktrees orphaned on archive timeout (#4246), model preference reverted on exit (#4252).
- **Token/context ceiling**: hard 5 MB CAPI limit hits before token limit (#4183); skill truncation at 32 items (#1464).
- **Terminal UX gaps**: scroll regression in Terminator (#2205), password masking causing agent confusion (#4241), `/ask` returning empty results (#4253).
- **SSH/config assumptions**: `/pr` rejects valid GitHub remotes using `~/.ssh/config` aliases (#4248).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-26

---

## 1. Today's Highlights
Three critical session-management fixes landed in the past 24 hours: context-turn alignment for fork/undo operations, stale system-prompt refresh on session resume, and persistent upload markers to prevent file re-sending after restarts. A new feature request for **Remote Control** (continue local sessions from any device) gained traction with 16 👍, while a dead-loop regression was reported against v1.44.0.

---

## 2. Releases
*No new releases published in the last 24 hours.*

---

## 3. Hot Issues

| Issue | Type | Why It Matters | Community Reaction |
|-------|------|----------------|-------------------|
| [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) **Remote Control — Continue local sessions from any device** | Enhancement | Enables seamless cross-device workflow continuity (phone, tablet, browser) without losing local environment context. High user demand for mobility. | 16 👍, 8 comments — strong community interest |
| [#2557](https://github.com/MoonshotAI/kimi-cli/issues/2557) **Dead Loop in v1.44.0** | Bug | Regression blocking normal operation; reported against the Kimi Code subscription platform. Zero comments suggests recent discovery. | 0 👍, 0 comments — needs triage |

---

## 4. Key PR Progress

| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#2520](https://github.com/MoonshotAI/kimi-cli/pull/2520) | Closed | Align fork/undo context truncation to wire turns; fixes history mismatch after forks/undos (resolves #2517, #1974, likely #2049). | Core session integrity; eliminates context drift |
| [#2519](https://github.com/MoonshotAI/kimi-cli/pull/2519) | Closed | Refresh stale frozen system prompt on session resume; skills and `AGENTS.md` edits now propagate to resumed sessions (resolves #2420). | Ensures latest config/skills are active after resume |
| [#2518](https://github.com/MoonshotAI/kimi-cli/pull/2518) | Closed | Persist uploads `.sent` marker so restarts do not re-send files (resolves #2413). | Prevents duplicate file/image pollution in web sessions |
| [#2558](https://github.com/MoonshotAI/kimi-cli/pull/2558) | Open | Improve Windows cross-platform test compatibility: fix `Path.write_text()` newline handling and path-separator assertions. | CI reliability on Windows; <100 lines |

---

## 5. Feature Request Trends
From the active issue (#1282) and recent PR context, the top community asks are:
1. **Cross-device session continuity** — Remote Control / web-based session access from mobile/tablet.
2. **Session resilience** — Reliable resume with fresh config, skills, and upload state (addressed by #2519, #2518).
3. **History fidelity** — Correct fork/undo/context alignment (addressed by #2520).

---

## 6. Developer Pain Points
- **Session resume stale state**: Skills, `AGENTS.md`, and system prompts not updating after resume (#2420 → #2519).
- **Duplicate file uploads** on every `kimi web` restart (#2413 → #2518).
- **Context/history corruption** after fork/undo operations (#1974, #2049, #2517 → #2520).
- **Windows test flakiness** due to newline/path-separator differences (#2558).
- **Dead-loop regression** in current v1.44.0 release (#2557) — urgent triage needed.

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` — issues & PRs updated 2026-07-25.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-26

## 1. Today's Highlights

The v1.18.5 desktop release has triggered a wave of regression reports — high CPU usage, project reload failures (`UnsupportedContentType`), TUI input blackouts during heavy tool use, and Windows project-close freezes. Meanwhile, the v2 branch shows persistent allocation loops in long-lived servers. Community sentiment is split: 31👍 on #37012 demanding a legacy layout option, while multiple critical bugs block basic workflows (project switching, session import, LAN Ollama). A new `roll-call` command PR (#38433) aims to improve model connectivity diagnostics.

---

## 2. Releases

**None in the last 24h.** The latest Desktop v1.18.5 (released ~Jul 24) is the focus of today's regression cluster.

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#30086](https://github.com/anomalyco/opencode/issues/30086) | **High CPU usage in newer versions** | Users report 10→3 session capacity drop; mouse lag indicates main-thread blocking. Affects all platforms. | 36 comments, 19👍 — highest engagement |
| [#37012](https://github.com/anomalyco/opencode/issues/37012) | **Keep legacy layout option** | New UI hides core actions behind navigation; workspace workflow broken. Strong demand for toggle. | 33 comments, 31👍 — top feature ask |
| [#38789](https://github.com/anomalyco/opencode/issues/38789) | **Desktop v1.18.5: `UnsupportedContentType` on project reload** | SDK-generated client rejects project data post-update; blocks workspace loading. | 7 comments, fresh regression |
| [#38791](https://github.com/anomalyco/opencode/issues/38791) | **Run loop hangs on non-time-sortable message IDs** | Imported/third-party sessions cause infinite loops until provider 400s. Core session logic flaw. | 3 comments, architectural risk |
| [#36677](https://github.com/anomalyco/opencode/issues/36677) | **V2 server persistent allocation loop (1 CPU core, 1.3GB RSS)** | Long-lived `opencode2 serve` leaks memory/CPU while idle. Fresh restart avoids it. | 3 comments, v2 blocker |
| [#38773](https://github.com/anomalyco/opencode/issues/38773) | **TUI input covered by black rectangle during heavy tool calls (v2)** | Input field obscured during reasoning/tool storms; only fix is re-enter TUI. | 2 comments, UX blocker |
| [#38844](https://github.com/anomalyco/opencode/issues/38844) | **Close button freezes project screen (v1.18.5)** | Clicking project close button locks UI entirely; requires force-kill. | 3 comments, Windows regression |
| [#38885](https://github.com/anomalyco/opencode/issues/38885) | **Desktop freezes closing project on Windows 11** | Clean reinstall doesn't help; project list interaction breaks. | 2 comments, platform-specific |
| [#38854](https://github.com/anomalyco/opencode/issues/38854) | **Cannot connect to LAN-hosted Ollama on macOS (curl works)** | Network stack regression; local Ollama reachable via CLI but not OpenCode. | 2 comments, macOS networking |
| [#34442](https://github.com/anomalyco/opencode/issues/34442) | **Windows offline installer broken: ripgrep not bundled** | Core tools (`grep`, `glob`, `skill`, `customize-opencode`) fail without internet. | 2 comments, 3👍, distribution blocker |

---

## 4. Key PR Progress (10 Important)

| # | PR | Type | Description |
|---|----|------|-------------|
| [#38906](https://github.com/anomalyco/opencode/pull/38906) | **feat** | TUI startup progress bar (terminal, settings, workspace, theme, plugins) — addresses frozen-start perception. Closes #36195. |
| [#38802](https://github.com/anomalyco/opencode/pull/38802) | **feat** | Duplicate of #38906 (closed). |
| [#38433](https://github.com/anomalyco/opencode/pull/38433) | **feat** | New `roll-call` command to test model connectivity/latency. Closes #13711. |
| [#38903](https://github.com/anomalyco/opencode/pull/38903) | **feat** | Route ChatGPT OAuth inference via configurable `codexApiEndpoint` (plugin). |
| [#29789](https://github.com/anomalyco/opencode/pull/29789) | **feat** | Dynamic workflows (Claude Code parity): project-local `/workflow <name> arg=value` with `/workflow list`. Closes #29059. |
| [#36550](https://github.com/anomalyco/opencode/pull/36550) | **fix** | TUI keyboard deadlock in question mode (mutually exclusive `useBindings`). Closes #36382, #30517. |
| [#33950](https://github.com/anomalyco/opencode/pull/33950) | **fix** | ACP permission prompts now show real tool context in title (not just tool kind). Closes #33949. |
| [#33948](https://github.com/anomalyco/opencode/pull/33948) | **fix** | Compact number formatting: avoid `1000.0K` in TUI context panel/subagent footer/CLI summary. Closes #33947. |
| [#33943](https://github.com/anomalyco/opencode/pull/33943) | **fix** | Restore timeline scroll position across tab switches/reloads; load older history on shift. |
| [#33927](https://github.com/anomalyco/opencode/pull/33927) | **fix** | VCS crash on repos with 1200+ untracked files. Closes #33928. |

---

## 5. Feature Request Trends

1. **Legacy UI parity** — #37012 (31👍) demands toggle for old layout; #38875 echoes "new UI not intuitive."
2. **Pricing/enterprise** — #20252 requests annual plan + invoicing for corporate procurement.
3. **Model diagnostics** — #38433 (`roll-call`) and #32613 (Xiaomi MiMo 400 errors) show need for better provider validation.
4. **Session/UX polish** — #38881 (session name in TUI status bar), #38876 (scroll-to-top button), #38884 (font size).
5. **Offline/air-gap support** — #34442 (Windows installer bundles ripgrep) remains unresolved.

---

## 6. Developer Pain Points

| Area | Symptoms | Frequency |
|------|----------|-----------|
| **v1.18.5 regressions** | Project reload fails, close-button freeze, high CPU, TUI input loss | 8+ issues in 24h |
| **Session import/loop bugs** | Non-timestamp IDs hang run loop (#38791); imported sessions loop until 400 | 2 core issues |
| **TUI instability** | Black rectangle overlay (#38773), Enter swallowed (#31217), keyboard deadlock (#36550) | 3+ active |
| **Windows/WSL friction** | Web UI empty (#37096), offline installer broken (#34442), project-close freeze (#38885) | Platform-specific cluster |
| **Provider connectivity** | LAN Ollama fails on macOS (#38854), MiMo 400 on tool images (#32613), managed models 500/timeout (#38874) | Multi-provider |
| **Free-tier limits** | "Free usage exceeded" persists after cooldown (#38869) | Billing/quota confusion |

---

*Digest generated from anomalyco/opencode GitHub activity (2026-07-25 → 2026-07-26). Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-26

## 1. Today's Highlights
Pi **v0.82.1** shipped with **Claude Opus 5** support on Anthropic and Amazon Bedrock, adding adaptive thinking, inference profiles, and prompt caching. The community is actively tackling TUI performance regressions (full-core CPU pinning during streaming, scrollback loss on redraw) and a critical Copilot Enterprise compaction blocker. A CVE in `brace-expansion@5.0.7` forced an emergency shrinkwrap regeneration.

## 2. Releases
### **v0.82.1** — 2026-07-26
- **Claude Opus 5** now available on Anthropic API and Amazon Bedrock with adaptive thinking (including `xhigh` budget), inference profiles, and prompt caching. See [Providers docs](https://github.com/earendil-works/pi/blob/v0.82.1/packages/coding-agent/docs/providers.md#api-keys).
- Emergency shrinkwrap update to pull `brace-expansion@5.0.8+` (fixes `CVE-2026-14257` / `GHSA-mh99-v99m-4gvg`, a memory-exhaustion DoS in `expand`).

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Status | Why It Matters | Community Reaction |
|-------|--------|----------------|-------------------|
| [#6768](https://github.com/earendil-works/pi/issues/6768) Compaction broken with Copilot Enterprise | 🟢 **OPEN** `inprogress` | Enterprise users on Copilot cannot compact context — both OpenAI and Anthropic paths fail with `421 Misdirected Request` / auth errors. Blocks long-running sessions. | **11 👍**, 13 comments — high urgency for enterprise adopters. |
| [#6665](https://github.com/earendil-works/pi/issues/6665) TUI pins 100% CPU while streaming | 🟢 **OPEN** `inprogress` | Uncached `Intl.Segmenter` + per-chunk Markdown rebuild burns a full core during model output. Reproducible with `pi -ne`. | 7 comments — core perf regression affecting all interactive users. |
| [#6050](https://github.com/earendil-works/pi/issues/6050) TUI full redraw clears terminal scrollback | 🔴 **CLOSED** `no-action` | Active rendering wipes scrollback history; root cause in core TUI renderer. | 15 comments — UX pain point, but closed without fix (may need re-open). |
| [#7020](https://github.com/earendil-works/pi/issues/7020) Pi stalls after compaction | 🟢 **OPEN** `inprogress` | Long-running “coordinator” sessions frequently hang post-compaction; agent doesn’t resume. | 4 comments, 1 👍 — reliability issue for extended workflows. |
| [#7048](https://github.com/earendil-works/pi/issues/7048) Compaction summary truncated mid-word | 🟢 **OPEN** `last-read` | `generateSummary` caps tokens but only checks `stopReason === "error"`, missing `"length"` → persisted summaries cut mid-token. | 3 comments — data integrity risk in compacted sessions. |
| [#7064](https://github.com/earendil-works/pi/issues/7064) WSL absolute Windows paths mishandled | 🟢 **OPEN** | `read`/`write`/`edit` tools fail on WSL2 with Windows-side Pi install; paths not translated correctly. | 3 comments — blocks WSL developers using Windows Pi binary. |
| [#5990](https://github.com/earendil-works/pi/issues/5990) TUI flickers when dialog > viewport | 🟢 **OPEN** `inprogress` | Confirm/select dialogs taller than terminal cause continuous repaint flicker. | 5 comments, 3 👍 — visible UX bug on small terminals. |
| [#4877](https://github.com/earendil-works/pi/issues/4877) Session folder collision | 🔴 **CLOSED** | Different paths (`/a/b/c/d` vs `/a-b/c-d`) map to same session folder (`--a-b-c-d--`). | 21 comments, 2 👍 — long-standing edge case, now closed (fix status unclear). |
| [#7090](https://github.com/earendil-works/pi/issues/7090) Shrinkwrap CVE: brace-expansion 5.0.7 | 🔴 **CLOSED** | Published `npm-shrinkwrap.json` pulls vulnerable `brace-expansion@5.0.7` (DoS via `expand`). Fixed in 5.0.8. | 4 comments — supply-chain security; addressed in v0.82.1. |
| [#7067](https://github.com/earendil-works/pi/issues/7067) Model switch breaks session (GPT HTML errors, Qwen 400) | 🔴 **CLOSED** `no-action` | Mid-session model switches (e.g., Qwen 983K → GPT 272K) cause HTML error pages, `enable_thinking` 400s, no pre-switch validation. | 3 comments — UX/reliability gap; closed without action. |

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| [#7118](https://github.com/earendil-works/pi/pull/7118) Expose extension context clear callback | 🟢 **MERGED** | Adds runtime-owned `clearContext` callback so extensions (e.g., Mecha) can reset session without generating a summary — enables clean handoffs. |
| [#7116](https://github.com/earendil-works/pi/pull/7116) Fix TUI: truncate over-width lines instead of crashing | 🟢 **MERGED** | `doRender()` no longer throws on lines exceeding terminal width; truncates gracefully. Fixes crashes from long permission-tool JSON output. |
| [#7081](https://github.com/earendil-works/pi/pull/7081) Support Claude Opus 5 on Bedrock | 🟢 **MERGED** | Configures Opus 5 with required adaptive thinking; improves Bedrock error messaging (hides internal event-emitter noise). |
| [#7072](https://github.com/earendil-works/pi/pull/7072) Cache llama.cpp model catalog | 🟢 **MERGED** | Fixes [#6948](https://github.com/earendil-works/pi/issues/6948) — race condition where `defaultProvider`/`defaultModel` not applied at startup due to async model refresh. |
| [#7114](https://github.com/earendil-works/pi/pull/7114) Manual redirect URL fallback for OpenRouter OAuth | 🟢 **OPEN** | Adds `manual_code` prompt racing against loopback server — enables `/login openrouter` on SSH/headless/container hosts. |
| [#7111](https://github.com/earendil-works/pi/pull/7111) Durable external tool results | 🟢 **MERGED** | Tools can return `defer: true`; Pi persists assistant call + JSONL pending marker, waits for external result via `AgentSession.resumeTool`. |
| [#7031](https://github.com/earendil-works/pi/pull/7031) Run coding-agent tests offline by default | 🟢 **OPEN** | Flips default to `PI_OFFLINE=1` for all coding-agent tests; opt-in for network-required tests. Improves CI reliability & speed. |
| [#7085](https://github.com/earendil-works/pi/pull/7085) Add vitest eval harness | 🟢 **MERGED** | New `packages/evals` workspace using `vitest-evals` + Pi SDK; smoke eval for extension create/reload/invoke with usage metadata. |
| [#7112](https://github.com/earendil-works/pi/pull/7112) Normalize path separators in footer (cross-platform) | 🟢 **MERGED** | Footer now always shows `~/project` (forward slash) on Windows too — fixes `~\project` display. |
| [#7061](https://github.com/earendil-works/pi/pull/7061) Handle array content & missing `finish_reason` in OpenAI-compatible | 🟢 **OPEN** | Fixes Databricks/Qwen3/gpt-oss streaming: `choice.delta.content` as typed array + missing `finish_reason` on tool calls. |

## 5. Feature Request Trends
1. **Model-switching safety** — Multiple issues (#7065, #7067, #7020) demand pre-switch context-window validation, thinking-block conversion, and graceful resume after compaction.
2. **Enterprise/SSH authentication flows** — OpenRouter manual callback (#7078, #7114), Copilot Enterprise compaction (#6768), session-affinity headers for custom gateways (#7104, #7107, #7108).
3. **TUI rendering hardening** — Truncation over crash (#7116), flicker-free tall dialogs (#5990), scrollback preservation (#6050), CPU-efficient streaming (#6665).
4. **Configurable truncation/token budgets** — Tool output limits (#7066), compaction token caps (#7048), cost-preview UI (#7101).
5. **Extension API completeness** — Context clear without summary (#7118, #7119), unavailable model visibility (#7032), eval harness for extension testing (#7085, #7117).

## 6. Developer Pain Points
- **Compaction reliability** — Stalls post-compaction (#7020), truncated summaries (#7048), Copilot Enterprise incompatibility (#6768) break long-running agent loops.
- **TUI performance & stability** — 100% CPU core during streaming (#6665), scrollback loss (#6050), flicker on small terminals (#5990), crashes on wide lines (#7116).
- **Cross-platform path handling** — WSL/Windows path translation failures (#7064), footer separator inconsistency (#7112).
- **Model-switch friction** — No context-window check, thinking-block mismatches, HTML error pages on downgrade (#7065, #7067).
- **Supply-chain security noise** — CVE in transitive dep (`brace-expansion`) required emergency shrinkwrap regen (#7090); developers want automated dependabot/renovate coverage.
- **Headless/remote auth** — OAuth loops assume localhost callback; SSH/container users need manual code paste (#7078, #7114).

---

*Generated from `earendil-works/pi` GitHub data (releases, 50 issues, 19 PRs updated 2026-07-25 → 2026-07-26).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-26

## Today's Highlights
The v0.21.0 nightly release ships a CLI time-zone fix for insight metrics. Community focus centers on **multi-workspace daemon support** (RFC #6378, 30 comments), **subagent model-grade selection** (#7685 → PR #7702), and **sandbox runtime reliability** (#7732 → PR #7734). Web Shell gains major UX upgrades: git branch picker, PR creation flow, and shell commands without active sessions.

---

## Releases
### v0.21.0-nightly.20260726.9d19eafa9
- **fix(cli)**: Measure insight days/hours in local time everywhere ([#7670](https://github.com/QwenLM/qwen-code/pull/7670))
- **refactor(autofix)**: Extension improvements (details truncated)

---

## Hot Issues (Top 10 by Impact & Discussion)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#6378](https://github.com/QwenLM/qwen-code/issues/6378) **RFC: Multiple workspaces per `qwen serve` daemon** | Fundamental architecture shift: 1 daemon → N workspaces × M sessions. Enables shared daemon for teams/CI. | 30 comments, P2, `need-discussion`, `daemon` |
| [#7585](https://github.com/QwenLM/qwen-code/issues/7585) **Direct external context provider profile** | Allows CLI to fetch repo-shared context from external memory/knowledge service without core changes. | 6 comments, P3, `scope/extensions`, `need-discussion` |
| [#7665](https://github.com/QwenLM/qwen-code/issues/7665) **Error 520/522 blocking desktop users** | New desktop installers hit Cloudflare errors; users cannot code. High urgency for onboarding. | 5 comments, P3, `status/need-information` |
| [#7684](https://github.com/QwenLM/qwen-code/issues/7684) **IME candidate box misaligned on multi-line statusline (macOS)** | Breaks CJK input in Command mode; cursor/floating candidate disconnect. | 5 comments, P2, `scope/macos`, `welcome-pr` |
| [#7697](https://github.com/QwenLM/qwen-code/issues/7697) **VS Code extension fails Unity MCP (Claude works)** | MCP interop gap; blocks Unity workflows in Qwen VS Code. | 4 comments, `scope/vscode`, `welcome-pr` |
| [#7685](https://github.com/QwenLM/qwen-code/issues/7685) **Subagent model-grade selection at spawn** | Adds `model` param to `agent` tool (small/medium/high/super) mapped in `settings.json`. | 4 comments, P3, `roadmap/subagents-tools` |
| [#7719](https://github.com/QwenLM/qwen-code/issues/7719) **CLI shows no token usage / quota percentage** | Zero visibility into consumption; critical for cost control. | 3 comments, P3, `scope/token-management` |
| [#6801](https://github.com/QwenLM/qwen-code/issues/6801) **`pinned/` memory directory (read-only, `/dream`-immune)** | Protects curated knowledge from consolidation; opt-in gate for forked Dream workers. | 3 comments, P2, `scope/memory` |
| [#7700](https://github.com/QwenLM/qwen-code/issues/7700) **Explicit math authoring contract (source-preserving)** | Standardizes LaTeX/math rendering, copy, tables, streaming alignment. | 3 comments, `need-discussion`, `scope/web-shell` |
| [#7732](https://github.com/QwenLM/qwen-code/issues/7732) **Sandbox runtime picked by PATH only — broken Docker hides working Podman** | Runtime selection ignores daemon health/group membership; PR #7734 probes `version` first. | 2 comments, P2, `scope/sandbox`, *filed today* |

---

## Key PR Progress (Top 10 by Scope & Readiness)

| PR | Summary | Linked Issue |
|----|---------|--------------|
| [#7724](https://github.com/QwenLM/qwen-code/pull/7724) **fix(web-shell): allow `!` shell commands in new tasks without session** | Lazily creates session via `ensureSessionForPrompt()`; removes "No active session" blocker. | — |
| [#7686](https://github.com/QwenLM/qwen-code/pull/7686) **perf(core): Lazy-load first-use dependencies** | Defers heavy imports until first invocation; reduces startup latency. | — |
| [#7733](https://github.com/QwenLM/qwen-code/pull/7733) **feat(review): Redefine `--effort medium` as balanced verified pass** | Medium now runs subagents, build/test, verification, `comment-status` — catches real bugs. | — |
| [#7731](https://github.com/QwenLM/qwen-code/pull/7731) **feat(web-shell): Git branch picker, commit dialog, create PR flow** | IntelliJ-style popover with search (local/remote/tags/recent), checkout, new branch, PR creation. | — |
| [#7710](https://github.com/QwenLM/qwen-code/pull/7710) **feat(triage): Sandboxed `/verify` deep-verification lane** | `@qwen-code /verify` on PR runs A/B load-bearing proof, vacuity check, mock-free wire-oracle. | — |
| [#7734](https://github.com/QwenLM/qwen-code/pull/7734) **fix(cli): Probe sandbox runtime before selecting it** | Tests `docker version`/`podman version` first; skips installed-but-unusable runtimes. | [#7732](https://github.com/QwenLM/qwen-code/issues/7732) |
| [#7735](https://github.com/QwenLM/qwen-code/pull/7735) **feat(review): Mutation-test the tests in test-coverage pass (Agent 5)** | Ensures new tests actually fail when code breaks; prevents "green but useless" coverage. | — |
| [#7702](https://github.com/QwenLM/qwen-code/pull/7702) **feat(core): Model grade selection for subagent spawn** | Implements `model` param on `agent` tool; grades defined in `settings.json → agents.modelGrades`. | [#7685](https://github.com/QwenLM/qwen-code/issues/7685) |
| [#7714](https://github.com/QwenLM/qwen-code/pull/7714) **feat(memory): Protect `pinned/` files during forked Dream** | Opt-in permission gate denies `write_file`/`edit` under `pinned/`; consolidation skips them. | [#6801](https://github.com/QwenLM/qwen-code/issues/6801) |
| [#7711](https://github.com/QwenLM/qwen-code/pull/7711) **fix(cli): Keep IME cursor aligned after footer updates** | Submits cursor positions at Ink's expected render phase; reasserts latest on multi-line statusline. | [#7684](https://github.com/QwenLM/qwen-code/issues/7684) |

---

## Feature Request Trends
1. **Multi-tenancy & Daemon Scaling** — RFC #6378 (30 comments) leads demand for shared daemon serving multiple workspaces/sessions.
2. **Subagent Orchestration Granularity** — Model-grade selection (#7685), Goal v3 worker tools (#7729), and mutation-tested coverage (#7735) show push for *verifiable, cost-aware* agent delegation.
3. **Memory/Context Sovereignty** — `pinned/` directory (#6801), external context provider (#7585), and Dream consolidation controls reflect need for *curated, immutable knowledge*.
4. **Web Shell Parity with Desktop IDEs** — Git branch picker/PR flow (#7731), shell-in-new-task (#7724), 256-color/truecolor ANSI (#7620), IME fixes (#7711).
5. **Observability & Cost Control** — Token usage UI (#7719), generation timing metrics (#4252), configurable rate-limit retries (#7658).
6. **MCP Ecosystem Bridges** — Unity MCP in VS Code (#7697), Cua Driver upstreaming (#7618), OAuth callback forwarding (#7503).

---

## Developer Pain Points (Recurring & High-Frequency)
| Pain Point | Evidence | Status |
|------------|----------|--------|
| **Sandbox runtime false positives** | Docker on PATH but daemon down / user not in `docker` group → hides working Podman | PR #7734 probes `version` |
| **IME / CJK input misalignment** | Multi-line statusline shifts candidate box away from cursor (macOS) | PR #7711 targets render-phase cursor sync |
| **Session restore broken** | `AcpBridge.loadSession()` returns `undefined` (missing `sessionId` in ACP response) | PR #7727 fixes GitHub adapter senderId; root cause in ACP schema |
| **Skill auto-complete regression** | Only first `/skill` triggers completion in multi-skill lines | #7717 `status/ready-for-agent` |
| **CI flakiness in E2E tool-control tests** | 5 flaky cases asserting specific model tool calls | PR #7725 migrates to `fake-openai-server` + adds flake detection |
| **Desktop installer Cloudflare errors (520/522)** | New users blocked immediately post-install | #7665 `status/need-information` |
| **Extension install ID mismatch** | `/extensions install` fails when repo contains multiple skills with different IDs | #7568 closed; validation logic tightened |
| **No token/quota visibility** | CLI shows zero usage metrics; users fly blind on costs | #7719 open, P3 |
| **`tool_choice: required` rejected in DashScope thinking mode** | Structured side queries (memory recall) crash with HTTP 400 | PR #7661 disables forced tool choice when thinking enabled |
| **Destructive git guard gaps** | `git clean -f` / `git checkout --force` bypassed pattern list | PR #7531 widens regex coverage |

---

*Generated from github.com/QwenLM/qwen-code data as of 2026-07-26. Links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-07-26

## 1. Today's Highlights
The v0.9.2 development cycle is in full swing with intense focus on architectural cleanup (extracting the `App` god object), multi-provider model resolution fixes, and TUI performance bottlenecks. A new `/rc` remote-control host feature landed in PR #4844, enabling browser-driven terminal sessions via the CWC companion. Critical provider-agnostic bugs in model resolution and config validation were exposed and patched within hours.

## 2. Releases
No new releases in the last 24 hours. The project remains on v0.9.1 with v0.9.2 actively tracking ~50 open issues and 41 active PRs.

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4520](https://github.com/Hmbown/CodeWhale/issues/4520) | **Configurable session token breakdown in header** | Restores per-category (input/cache/output) token visibility after PR #2411 collapsed it to a single total. UX-critical for cost-aware developers. | 4 comments, opened 2026-07-18 |
| [#4831](https://github.com/Hmbown/CodeWhale/issues/4831) | **Test suite writes to real `~/.codewhale/config.toml`** | Flaky CI caused by tests mutating developer's actual config — correlates with `allow_shell_save` flag. Threatens reproducible builds. | 3 comments, **CLOSED** same day |
| [#2743](https://github.com/Hmbown/CodeWhale/issues/2743) | **Adapt Claude Code skill ecosystem** | High-demand request: users want native compatibility with Claude Code skills (e.g., `understand-anything`) without imperfect transpilation. | 3 comments, open since 2026-06-04 |
| [#1172](https://github.com/Hmbown/CodeWhale/issues/1172) | **Plugin/workflow migration from Cursor/Codex/CC** | Developers have portable plugin-based workflows (skills, commands, agents, hooks) blocked by missing plugin market support. | 3 comments, open since 2026-05-08 |
| [#3927](https://github.com/Hmbown/CodeWhale/issues/3927) | **Provider-independent offline onboarding path** | First-run still forces provider selection; no "just explore" mode. Blocks air-gapped/offline eval and keyless local model trials. | 3 comments, authored by Hmbown |
| [#3314](https://github.com/Hmbown/CodeWhale/issues/3314) | **Extract `App` god object (252 fields, 236 methods, 4.5k lines)** | Core architectural debt. `App` struct grew 68% since filing. Blocking maintainability and testability for v0.9.2. | 3 comments, **CLOSED** (tracking refactor) |
| [#4698](https://github.com/Hmbown/CodeWhale/issues/4698) | **Complete default skill-pack routing metadata** | Follow-up to v0.9.1 skill pack (PR #4695). Missing routing metadata & live smoke docs stall plugin discoverability. | 2 comments, v0.9.2 tracked |
| [#4683](https://github.com/Hmbown/CodeWhale/issues/4683) | **Wrong DeepSeek completions URL (flaky)** | Intermittent `https://api.deepseek.com/v1/chat/completions` failures after long sessions. Suggests DNS/pool exhaustion. | 2 comments, flaky repro |
| [#3928](https://github.com/Hmbown/CodeWhale/issues/3928) | **No in-app constitution reader; custom override fails silently** | Constitution = base prompt centerpiece. `/context` points to missing repo path; env-flagless override ignored without error. | 2 comments, UX gap |
| [#4832](https://github.com/Hmbown/CodeWhale/issues/4832) | **`codew model resolve` ignores provider, falls back to DeepSeek** | **Critical bug**: configured `provider=zai` + `default_text_model=GLM-5.2` still resolves to `deepseek-v4-pro`. Blocks non-DeepSeek workflows. | 0 comments, **filed today**, immediate PR #4837 |

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#4844](https://github.com/Hmbown/CodeWhale/pull/4844) | **Feature** | **`/rc` remote-control host** — enrolls running TUI session as CWC browser-driveable target. Pairs with `cwc#119`/`cwc#120`. |
| [#4843](https://github.com/Hmbown/CodeWhale/pull/4843) | **Fix** | Auto-fit composer height to content (part 2 of #4809). Removes `min_content_rows` floor causing wasted vertical space. |
| [#4842](https://github.com/Hmbown/CodeWhale/pull/4842) | **Feature** | Workflow per-worker usage telemetry + bounded run-record payloads. Completes #2974 wiring for model-facing `workflow` tool. |
| [#4841](https://github.com/Hmbown/CodeWhale/pull/4841) | **Refactor** | Removes dead `--no-alt-screen` flag (hardcoded `true` since v0.8.x). Cleans CLI surface. |
| [#4455](https://github.com/Hmbown/CodeWhale/pull/4455) | **Cleanup** | Removes legacy memory push/inject in report building (Moraine migration). Auto-generated by agent. |
| [#4442](https://github.com/Hmbown/CodeWhale/pull/4442) | **Cleanup** | Removes legacy memory composition from `refresh_system_prompt`; replaces with `user_memory_block: None`. |
| [#4444](https://github.com/Hmbown/CodeWhale/pull/4444) | **Cleanup** | Strips legacy memory block from `build_headless_context_report` and related test. |
| [#4840](https://github.com/Hmbown/CodeWhale/pull/4840) | **Chore** | Maps 5 missing contributors to `AUTHOR_MAP` (3 lacked `Co-authored-by` due to missing entries). |
| [#4686](https://github.com/Hmbown/CodeWhale/pull/4686) | **Feature** | Adds 4 MiniMax China/Token Plan provider routes (`minimax-cn`, `minimax-anthropic-cn`, etc.) targeting `api.minimaxi.com`. |
| [#4743](https://github.com/Hmbown/CodeWhale/pull/4743) | **Fix** | Stops misapplying 45s SSE open timeout to non-streaming chat requests. Fixes `codewhale exec` false failures on slow generations. |

## 5. Feature Request Trends (Distilled from 50 Issues)

1. **Plugin & Workflow Ecosystem** (#1172, #2743, #4836) — Demand for portable plugin market: skills, commands, agents, hooks compatible with Cursor/Codex/Claude Code workflows.
2. **Multi-Provider Parity** (#4832, #4838, #4829, #4758, #4686) — Non-DeepSeek providers (Z.ai, Kimi, MiniMax CN) treated as second-class: model resolve, config validation, `codew model set` all DeepSeek-scoped.
3. **Offline/Air-Gapped First-Class Support** (#3927, #3928) — Provider-independent onboarding, local constitution access, keyless Ollama/SGLang/vLLM paths without forced cloud gates.
4. **Localization Completion** (#3091, #3092, #3093, #4839) — TUI locale packs (8+ languages) lack CI drift-gating; website lags README translations (JP/VI shipped, KO/ES/PT/RU pending).
5. **TUI Performance at Scale** (#3904–#3908) — Synchronous FS/syscalls in render loop, O(history) re-cloning, `git status` blocking Ctrl+P, per-frame JSON serialization for token estimates.
6. **Skill/Plugin Packaging** (#4698, #4836) — Bundled skill packs need routing metadata, live smoke tests, and a starter plugin pack with safe install registry.

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Non-DeepSeek providers broken by default** | #4832 (model resolve), #4838 (`model set` no-op), #4829 (config validation rejects valid models), #4758 (Kimi tier default) | 4 issues filed **today alone** |
| **Test pollution of real config** | #4831 (CI flakes from `~/.codewhale/config.toml` writes) | Critical CI reliability blocker |
| **TUI rendering jank on large sessions** | #3904 (Ctrl+T deep-clones history/frame), #3905 (Ctrl+P blocks on `git status` + 20k walk), #3906 (per-frame `serde_json` on all ToolUse), #3907 (tool-run collapse O(history) re-scan) | 4 perf issues, all open since 2026-07-02 |
| **God object `App` blocking refactors** | #3314 (252 fields, 236 methods, 4.5k lines — up 68%) | Architectural debt acknowledged by maintainers |
| **Missing in-app discoverability** | #3928 (no constitution reader), #4520 (token breakdown hidden), #4834 (macOS notifications use Script Editor icon) | UX gaps for power users |
| **Plugin/skill migration wall** | #1172 (workflow plugins from Cursor/CC/Codex), #2743 (Claude Code skills), #4836 (no starter plugin pack) | 3+ issues, 2+ months old |

---

*Data sourced from `github.com/Hmbown/DeepSeek-TUI` (issues/PRs updated 2026-07-25 to 2026-07-26). Digest generated 2026-07-26.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*