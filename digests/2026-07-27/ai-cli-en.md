# AI CLI Tools Community Digest 2026-07-27

> Generated: 2026-07-27 02:22 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-07-27)

---

## 1. Ecosystem Overview

The AI CLI tools landscape remains highly fragmented with **8 active projects** spanning first-party vendor tools (Claude Code, Gemini CLI, GitHub Copilot CLI, Qwen Code, Kimi Code) and community-driven alternatives (Pi, DeepSeek TUI/CodeWhale). No new stable releases shipped today across any project—development velocity is concentrated on **nightly builds, regression fixes, and security hardening**. A clear bifurcation is emerging: vendor tools prioritize **enterprise readiness** (Bedrock/Vertex resilience, MCP authorization, cross-surface sync) while community projects push **TUX polish, provider abstraction, and workflow orchestration**. Cross-platform reliability—especially Windows—remains a systemic weak point across the ecosystem.

---

## 2. Activity Comparison (2026-07-27)

| Tool | Hot Issues (Top 10) | Key PRs Merged/Active | Release Status | Critical Regressions |
|------|---------------------|----------------------|----------------|---------------------|
| **Claude Code** | 10 (4 Windows, 3 silent-failure, 2 sync) | 7 active (4 Windows/cross-platform) | No release | CLI hang (Win), VS Code session loss, Git Bash 2.3s overhead, hook silent failures |
| **Gemini CLI** | 10 (1 perf P2: 1hr stalls, 3 planning/subagent) | 10 (2 security P1, 1 deps major bump) | v0.54.0-nightly | 1hr+ stall on trivial edits (#22141, 164👍), planning-mode deadlock |
| **GitHub Copilot CLI** | 10 (3 Linux/Win TUI, 2 MCP/OAuth, 2 ext) | 0 updated | No release | Zombie processes (closed), `view` broken 1.0.72+, Win TUI render crash |
| **Qwen Code** | 10 (3 MCP security P1/P2, 1 SDK identity) | 10 (3 web-shell, 2 security fixes) | v0.21.0-nightly | MCP authZ bypass chain, CI flakiness (5+ E2E fails/24h) |
| **DeepSeek TUI (CodeWhale)** | 10 (onboarding, session, workflow) | **12 merged** (perf, cache, clipboard) | No release | O(N²) markdown streaming, prompt-cache busting (fixed) |
| **Pi** | 10 (compaction/extension, WSL paths, CPU) | 10 (loadout mgmt, perf, path norm) | No release | TUI 100% CPU streaming, compaction drops RPC, WSL path mishandling |
| **Kimi Code CLI** | 1 (Web image drop) | 0 | No release | Intermittent image paste loss in Web client |
| **OpenAI Codex** | ⚠️ Summary failed | — | — | — |
| **OpenCode** | ⚠️ Summary failed | — | — | — |

**Key Signal**: DeepSeek TUI/CodeWhale shows highest **PR throughput (12 merged)** with measurable perf wins. Claude Code and Qwen Code carry the heaviest **regression backlogs** (Windows + silent failures; MCP security + CI flakes). Gemini CLI's top issue (#22141) has **164👍**—highest community pain signal in dataset.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Cross-surface session/history sync** | Claude Code (#28791 107👍), GitHub Copilot CLI (#4260), Gemini CLI (#71500-adjacent), Pi | Unified conversation backend; CLI ↔ Desktop ↔ VS Code ↔ browser parity; trust-state portability |
| **MCP / Tool Authorization Hardening** | Qwen Code (#7768, #7769, #7770), GitHub Copilot CLI (#4203, #4205), Gemini CLI (security PRs), Pi | Enforced user consent on every tool call; token refresh without re-auth; sandbox egress control; IPC exposure audit |
| **Windows / Cross-Platform Parity** | Claude Code (6+ Win issues), GitHub Copilot CLI (#4263, #4217), Gemini CLI (#26567), Pi (#7064 WSL), Qwen Code (#7684 macOS IME) | Native CLI stability, MSIX recovery, TUI rendering, PATH/non-ASCII username, Git Bash perf, WSL path translation |
| **Autonomous Agent Reliability** | Claude Code (#80716, #74514, #74386), Gemini CLI (#26575, #22571), Pi (#7154, #7150), Copilot CLI (#4259) | Plan-mode auto-approval, Bedrock/Vertex retry/backoff, worktree liveness, subagent observability, compaction-safe RPC |
| **Hook / Guardrail Observability** | Claude Code (#81458 6,865 silent skips), Gemini CLI (security PRs), Pi (policy narrowing events) | Visible hook failures, transcript traceability, `/hooks` warnings, policy-change audit trail |
| **Provider Abstraction & Model Routing** | Pi (#4411, #7138), DeepSeek TUI (#4893 Kimi tier), Qwen Code (#7685 model grades), Gemini CLI (#26864) | Unified model config, tier selection, reasoning-split params, offline/local provider onboarding |
| **Evaluation / CI Infrastructure** | Gemini CLI (#24353, #28369), Qwen Code (CI flakes), Pi (#7090 CVE shrinkwrap), DeepSeek TUI (prompt-cache tests) | Component-level evals, local reporting, flake suppression, dependency hardening, cache-hit validation |

---

## 4. Differentiation Analysis

| Dimension | Vendor-First Tools | Community / Alternative Tools |
|-----------|-------------------|-------------------------------|
| **Primary Focus** | Enterprise adoption, cloud integration (Bedrock, Vertex, GitHub), compliance | Developer experience, TUX polish, provider neutrality, workflow orchestration |
| **Target User** | Professional/enterprise developers, teams needing audit trails, SSO, cloud billing | Power users, researchers, multi-model experimenters, offline/local-first advocates |
| **Technical Approach** | Tight SDK/runtime coupling; proprietary protocols (ACP, custom IPC); mono-repo | Protocol-agnostic (MCP, ACP, OpenAPI); plugin/extension architectures; micro-repos |
| **Session Model** | Cloud-anchored, conversation-ID centric, multi-surface sync as differentiator | Local-first, file-based transcripts, git-worktree isolation, compaction-aware |
| **Extension/Tooling** | First-party extensions (VS Code, JetBrains), managed MCP registries | Community skill/workflow systems (WhaleFlow, Pi loadouts), JS-authored tools |
| **Security Posture** | Enterprise-grade: sandbox, IPC audit, token exchange, CVE response | Hardening via community PRs (GHSA), Electron prefs review, prompt-injection mitigations |
| **Release Cadence** | Nightly + stable channels; gated by internal QA | Continuous merge-to-main; nightly tags; fewer gating checks |

**Notable Outliers**:
- **DeepSeek TUI/CodeWhale**: Only tool with **constitution-guided onboarding** and **prompt-cache optimization** as first-class features.
- **Pi**: Unique **compaction-aware extension runtime** and **session-folder collision detection**.
- **Qwen Code**: Dual-SDK confusion (`qwen-code-sdk` vs `qoder-agent-sdk`) signals product-strategy ambiguity.
- **Claude Code**: Only tool with **cross-surface sync** as #1 community ask (107👍, 5 months open).

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **DeepSeek TUI/CodeWhale**, **Gemini CLI**, **Pi** | CodeWhale: 12 PRs merged/24h with perf wins; Gemini: major dep bump (genai 1.30→2.12) + 75 pkgs; Pi: loadout mgmt, compaction fixes, WSL path work |
| **High Engagement / Stalled Fixes** | **Claude Code**, **Qwen Code** | Claude: 107👍 on sync issue (5mo), 6+ critical Win regressions unfixed; Qwen: 3 MCP P1 vulns in 24h, 5+ CI flakes/day, SDK identity crisis |
| **Moderate / Narrow Focus** | **GitHub Copilot CLI**, **Kimi Code CLI** | Copilot: active triage but 0 PR updates; Kimi: single Web image bug, low issue volume |
| **Unknown / Data Gaps** | **OpenAI Codex**, **OpenCode** | Summary generation failed—no visibility |

**Maturity Indicators**:
- **Gemini CLI** and **Claude Code** show **enterprise-grade issue taxonomies** (P1/P2, severity labels, regression bisect windows).
- **CodeWhale** and **Pi** demonstrate **community-driven architecture evolution** (workflow runtime, loadout management, constitution UX).
- **Qwen Code**'s CI instability and SDK confusion suggest **growing pains in productization**.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication for Developers |
|-------|-----------------|----------------------------|
| **MCP Authorization is the New Attack Surface** | 🔴 Critical (Qwen 3 P1s, Copilot OAuth, Gemini security PRs) | Treat MCP servers as **untrusted until proven**; demand per-call consent, sandbox egress control, and IPC audit before enterprise adoption. |
| **Windows is the Ecosystem's Weak Link** | 🟠 High (Claude 6+, Copilot 2, Gemini 1, Pi 1) | **Validate Windows workflows in CI**; expect native CLI hangs, TUI crashes, MSIX corruption. Prefer WSL2 or Git Bash with known workarounds. |
| **Silent Failures = Unacceptable Risk** | 🔴 Critical (Claude hooks, Bedrock, worktree; Pi compaction RPC; Qwen MCP) | **Require observability by default**: hook failure alerts, transcript traceability, compaction-safe RPC, retry/backoff for cloud APIs. |
| **Session/Context Portability is Table Stakes** | 🟠 High (Claude 107👍, Copilot settings sync, Gemini traces) | **Adopt tools with unified history backends** or build abstraction layers; multi-surface workflows (CLI + IDE + Web) are standard. |
| **Provider Abstraction > Vendor Lock-in** | 🟢 Rising (Pi, CodeWhale, Qwen model grades, Gemini config) | **Invest in model-agnostic tooling**: config-driven model routing, tier selection, reasoning params, local provider onboarding. |
| **Nightly/Continuous Delivery > Stable Releases** | 🟢 Established (All tools shipping nightlies; 0 stable releases today) | **Pin to tested nightlies** or vendor-supported channels; expect breaking changes in point releases (Claude 2.1.58→2.1.59 regressions). |
| **Community Tools Lead on TUX/Workflow Innovation** | 🟢 Rising (CodeWhale constitution, Pi loadouts, WhaleFlow) | **Evaluate alternatives for power-user workflows**: subagent orchestration, offline/local-first, custom skill systems. |

---

## Recommendation Summary

| Decision Context | Recommended Approach |
|------------------|---------------------|
| **Enterprise rollout (regulated, SSO, audit)** | **Claude Code** (despite regressions) or **GitHub Copilot CLI** — deepest cloud integration, compliance tooling; budget for Windows validation. |
| **Multi-model experimentation / local-first** | **Pi** or **DeepSeek TUI/CodeWhale** — best provider abstraction, workflow orchestration, offline support. |
| **Team standardizing on Google Cloud / Vertex** | **Gemini CLI** — but **block on #22141 fix** (1hr stalls) before production autonomous use. |
| **Chinese-market / Alibaba Cloud alignment** | **Qwen Code** — monitor MCP security fixes and SDK consolidation; avoid until CI stabilizes. |
| **Windows-first development teams** | **Defer adoption** across all tools until regression wave clears; use WSL2 + Linux-targeted CLIs as interim. |
| **Building internal agent platform** | **Study Pi's compaction-aware extensions** and **CodeWhale's constitution/prompt-cache architecture** — most transferable patterns. |

---

*Report generated from 2026-07-27 community digests across 8 AI CLI repositories. Data reflects single-day snapshot; trends should be validated over 7–14 day windows.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-27 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator`: fix `run_eval.py` 0% recall | Core fix for the skill description optimization loop — installs eval artifact as real skill, fixes Windows stream reading, trigger detection, and parallel workers | References **Issue #556** (12 comments, 7 👍); root cause of description-optimization loop optimizing against noise; 10+ independent reproductions | **OPEN** (Updated 2026-06-23) |
| 2 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` skill | Mechanical file verification + four-dimension reasoning quality gate (damage-severity priority); universal across projects/stacks/models | Step 0 verifies every claimed output file exists; then audits reasoning across four dimensions; v1.3.0 | **OPEN** (Updated 2026-07-02) |
| 3 | **[#1323](https://github.com/anthropics/skills/pull/1323)** `skill-creator`: fix trigger detection | `run_eval.py` misses real skill name and bails on first non-Skill tool, causing recall=0% for all should-trigger queries | Directly blocks description-optimization loop; tied to #1298/#556 | **OPEN** (Updated 2026-06-25) |
| 4 | **[#1302](https://github.com/anthropics/skills/pull/1302)** `color-expert` skill | Comprehensive color expertise: naming systems (ISCC-NBS, Munsell, XKCD, RAL, CSS), color spaces (OKLCH, OKLAB, CAM16), gradients, accessibility | Self-contained; covers "what to use when" decision tables; active iteration through July | **OPEN** (Updated 2026-07-21) |
| 5 | **[#1099](https://github.com/anthropics/skills/pull/1099)** / **[#1050](https://github.com/anthropics/skills/pull/1050)** Windows compatibility fixes | `run_eval.py` unusable on Windows: `[WinError 10038]` on subprocess pipes; `claude.cmd` not honored by `PATHEXT`; cp1252 encoding issues | **Issue #1061** (3 comments, 2 👍); blocker for Windows users running optimizer | **OPEN** (Updated 2026-05-24) |
| 6 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` skill | Full testing stack: Testing Trophy model, AAA pattern, React Testing Library, API/contract testing, E2E, property-based, mutation testing | Comprehensive reference; covers philosophy → implementation → CI integration | **OPEN** (Updated 2026-04-21) |
| 7 | **[#525](https://github.com/anthropics/skills/pull/525)** `pyxel` skill | Retro/pixel-art/8-bit game development via [pyxel-mcp](https://github.com/kitao/pyxel-mcp); workflow: write → run_and_capture → inspect → iterate | Niche but active; author is Pyxel creator; updated through July | **OPEN** (Updated 2026-07-15) |
| 8 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` skill | Prevents orphan/widow lines, widow paragraphs, numbering misalignment in AI-generated documents | Addresses universal pain point: "users rarely ask for good typography but always notice bad" | **OPEN** (Updated 2026-03-13) |

> **Note:** All PRs show `Comments: undefined` in source data; ranking inferred from cross-referenced Issues, update recency, and technical centrality.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence (Issues) | Demand Signal |
|-------|-------------------|---------------|
| **Skill distribution & trust security** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍) — Community skills masquerading as official `anthropic/` namespace; trust boundary abuse | **Critical** — Highest engagement; fundamental platform integrity issue |
| **Organizational skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) — No native org-wide sharing; manual `.skill` file transfer via Slack/Teams | **High** — 8 👍 indicates strong workflow pain |
| **Skill creator toolchain reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍), [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments, 1 👍) — `run_eval.py` 0% recall; optimizer broken on Windows & Unix | **High** — Blocks skill authoring quality loop |
| **Meta-skills for skill quality/governance** | [#83](https://github.com/anthropics/skills/pull/83) (PR: `skill-quality-analyzer`, `skill-security-analyzer`), [#412](https://github.com/anthropics/skills/issues/412) (agent-governance), [#1385](https://github.com/anthropics/skills/issues/1385) (Reasoning Quality Gate Pipeline) | **Emerging** — Community building tools to validate skills themselves |
| **Document format interoperability** | [#486](https://github.com/anthropics/skills/pull/486) (ODT), [#541](https://github.com/anthropics/skills/pull/541) (DOCX tracked changes), [#538](https://github.com/anthropics/skills/pull/538) (PDF case-sensitivity) | **Steady** — Enterprise document workflow gaps |
| **MCP/Bedrock integration** | [#16](https://github.com/anthropics/skills/issues/16) (Expose Skills as MCPs), [#29](https://github.com/anthropics/skills/issues/29) (Bedrock usage) | **Latent** — Low comments but strategic for enterprise adoption |

---

## 3. High-Potential Pending Skills (Active PRs Not Yet Merged)

| PR | Skill | Why It May Land Soon |
|----|-------|----------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` core fix (run_eval.py) | Blocks entire description-optimization pipeline; 10+ reproductions; referenced by multiple Issues |
| **[#1323](https://github.com/anthropics/skills/pull/1323)** | `skill-creator` trigger detection fix | Companion to #1298; same root cause (recall=0%) |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` | Universal quality gate; mechanical + reasoning audit; active v1.3.0 iteration |
| **[#1302](https://github.com/anthropics/skills/pull/1302)** | `color-expert` | Complete self-contained implementation; active maintainer updates through July |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Comprehensive reference skill; fills testing methodology gap |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Universal document quality issue; well-scoped implementation |
| **[#486](https://github.com/anthropics/skills/pull/486)** | `odt` (OpenDocument) | MCP-backed; author responsive; enterprise format support |
| **[#1099](https://github.com/anthropics/skills/pull/1099)** / **[#1050](https://github.com/anthropics/skills/pull/1050)** | Windows compat fixes | 1-line changes; unblock Windows skill authors; low review burden |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is fixing the skill authoring toolchain (`skill-creator`/`run_eval.py`) so that skill description optimization actually works — currently it reports 0% recall universally, breaking the quality feedback loop for all skill authors — while simultaneously demanding trust-safe skill distribution (namespace governance) and org-native sharing to make skills viable in team environments.**

---

# Claude Code Community Digest — 2026-07-27

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The issue tracker shows intense activity around **cross-platform regressions** (Windows native CLI hang, VS Code extension session loss, macOS desktop draft loss) and **core reliability gaps** (hook failures going silent, Bedrock 503 halting autonomous sessions, worktree cleanup destroying in-progress work). The top community ask remains **CLI ↔ Desktop conversation sync** (#28791, 107 👍), now open for five months.

---

## 2. Releases

*No releases published in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#28791](https://github.com/anthropics/claude-code/issues/28791) | **Sync conversation history between CLI and Desktop** | Top-voted enhancement (107 👍). Users lose context when switching between CLI and desktop app — a daily friction for hybrid workflows. | 27 comments, 5 months open; strong consensus on need for unified history backend. |
| [#81484](https://github.com/anthropics/claude-code/issues/81484) | **Windows native `claude.exe` hangs indefinitely (regression post-2.1.58)** | Blocks all Windows CLI users on current versions. Confirmed regression with sustained CPU usage — not a startup delay. | 1 comment, but critical severity; users pinned to 2.1.58. |
| [#81519](https://github.com/anthropics/claude-code/issues/81519) | **Git Bash: 2.3 s fixed overhead per Bash tool call (88 base64 evals)** | Makes agentic loops unusably slow on Windows. Root cause: shell snapshot replay on every invocation. | New issue, 0 comments yet; echoes stale macOS issue #31437. |
| [#80716](https://github.com/anthropics/claude-code/issues/80716) | **Auto-mode classifier falls back to manual approval in plan mode** | Read-only ops (cd, git status) incorrectly trigger permission prompts, breaking autonomous plan-mode flows. | 7 comments, 15 👍; affects core "auto-mode during plan" UX. |
| [#71500](https://github.com/anthropics/claude-code/issues/71500) | **VS Code extension omits externally-created session transcripts (regression 2.1.187–2.1.191)** | Sessions started in CLI/terminal disappear from VS Code sidebar — breaks multi-window workflows. | 4 comments; regression window identified, needs bisect. |
| [#81458](https://github.com/anthropics/claude-code/issues/81458) | **Hook launch failures (exit 127) are silent — 6,865 skipped guardrails in one session** | Security/guardrail hooks failing silently with no UI signal, no transcript visibility, no `/hooks` warning. | 2 comments; critical for teams relying on pre-tool hooks for policy enforcement. |
| [#74514](https://github.com/anthropics/claude-code/issues/74514) | **Bedrock 503 mid-session permanently stops autonomous sessions** | No backoff/retry/recovery; 3 concurrent sessions halted simultaneously during outage. | 2 comments; blocks enterprise Bedrock adoption for long-running agents. |
| [#74386](https://github.com/anthropics/claude-code/issues/74386) | **Worktree cleanup discards another session's in-progress work (no liveness signal)** | Cleanup logic relies only on git state; destroys uncommitted work in active sibling sessions. | 2 comments; data-loss risk in multi-agent workflows. |
| [#81306](https://github.com/anthropics/claude-code/issues/81306) | **Windows MSIX desktop crash wedges package; recovery destroys local app data** | Crash corrupts MSIX state; manual removal required, wiping Code-tab groups & crash dumps. | 3 comments; poor recovery UX for desktop app on Windows. |
| [#81517](https://github.com/anthropics/claude-code/issues/81517) | **macOS Desktop: Up-arrow replaces draft; Enter loses it permanently** | Composers lose user input with no recovery — basic text-editing regression. | New, 1 comment; high user-visible impact. |

---

## 4. Key PR Progress (All 7 Active PRs)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#81500](https://github.com/anthropics/claude-code/pull/81500) | Docs | Fixes 7 broken 404 links in AWS gateway example (`code.claude.com/docs/en/claude-apps-gateway-on-aws`). |
| [#81426](https://github.com/anthropics/claude-code/pull/81426) | Fix (Windows) | Enables agentic security reviewer on Windows by supporting `venv` layout in `ensure_agent_sdk.py` (removes `SKIP_WIN32`). |
| [#81423](https://github.com/anthropics/claude-code/pull/81423) | Security | Adds `ip6tables` rules to devcontainer firewall — closes IPv6 egress bypass on dual-stack Docker networks. |
| [#81421](https://github.com/anthropics/claude-code/pull/81421) | Fix (Examples) | Adds `failIfUnavailable` to bash-sandbox example so it fails closed when sandbox unavailable (matches docs). |
| [#68693](https://github.com/anthropics/claude-code/pull/68693) | Automation | Fixes duplicate-label script to add labels additively instead of replacing entire label set on issue closure. |
| [#38167](https://github.com/anthropics/claude-code/pull/38167) | DevContainer | Uses authenticated `GH_TOKEN` for GitHub API in firewall script to avoid shared-IP rate limits. |
| [#20448](https://github.com/anthropics/claude-code/pull/20448) | Feature (Community) | Adds `web4-governance` plugin (T3 trust tensors, R6 audit trails) — external governance framework integration. |

**Notable:** 4 of 7 PRs target Windows/cross-platform reliability (#81426, #81423, #81421, #68693), aligning with today's issue themes.

---

## 5. Feature Request Trends (From All 50 Issues)

| Trend | Representative Issues | Signal |
|-------|----------------------|--------|
| **Unified session/history sync** | #28791 (CLI↔Desktop), #71500 (VS Code↔external), #79973 (onboarding state) | 107 👍 on #28791; multiple duplicate/adjacent issues |
| **Windows parity** | #81484 (CLI hang), #81519 (Git Bash perf), #80087 (PATH detection), #81306 (MSIX recovery) | 4 critical Windows regressions in 24h |
| **Agent/subagent orchestration** | #80798 (promote/demote subagents), #74386 (worktree liveness), #74116 (agent completion tracking) | Growing demand for first-class multi-agent lifecycle |
| **Hook observability & reliability** | #81458 (silent failures), #80693 (reason rendering), #79973 (trust dialog gating) | Teams building governance on hooks need visibility |
| **Enterprise/Cloud resilience** | #74514 (Bedrock 503), #78529 (DNS parsing), #44380 (channels wake) | Production autonomous agents need retry/backoff/idempotency |
| **Localization & accessibility** | #69078 (Russian UI), #41015 (URL handler install path) | Internationalization backlog |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **"It works on my machine" regressions** — Windows native CLI hang (#81484), VS Code session loss (#71500), Git Bash 2.3s overhead (#81519) all regressed in recent point releases. Bisect windows are narrow but fixes absent.

2. **Silent failures by default** — Hook launch errors (#81458), Bedrock 503 halts (#74514), LSP incomplete results (#76870), worktree cleanup data loss (#74386) all share: **no user-visible alert, no automatic recovery, no transcript trace**.

3. **Cross-surface context fragmentation** — CLI, Desktop, VS Code, and browser (Claude in Chrome) maintain separate histories, trust states, and session stores. #28791 (107 👍) is the umbrella; #71500, #79973, #79976 are symptoms.

4. **Autonomous agent reliability gaps** — Plan-mode auto-approval broken (#80716), subagent lifecycle untracked (#74116), no Bedrock retry (#74514), hook guardrails silently skipped (#81458). Teams cannot run unattended agents confidently.

5. **Windows as second-class platform** — Native CLI hang, MSIX corruption, PATH detection broken for non-ASCII usernames, Git Bash perf cliff, IPv6 firewall bypass, agentic reviewer disabled. 6+ distinct Windows issues in one day.

---

*Data sourced from `github.com/anthropics/claude-code` — issues/PRs updated 2026-07-26 to 2026-07-27.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-27

## 1. Today's Highlights
The project shipped a new nightly release (v0.54.0-nightly) with a major dependency bump to `@google/genai@2.12.0` and 75 other package updates. Security remains a focus: two open PRs address OAuth token-exchange failures on headless VPSes and a variable-expansion bypass (GHSA-wpqr-6v78-jr5g). Community attention is centered on a long-standing, high-impact performance regression (#22141, 164 👍) where the CLI stalls for hours on trivial edits, and on persistent planning-mode/sub-agent reliability gaps.

## 2. Releases
- **v0.54.0-nightly.20260727.g3818efbbf** — Nightly build. Includes `chore(deps): bump @google/genai from 1.30.0 to 2.12.0` (PR #28543) plus 75 other dependency updates (PR #28539). Full changelog: [compare](https://github.com/google-gemini/gemini-cli/compare/v0.54.0-nightly.20260726.g3818efbbf...v0.54.0-nightly.20260727.g3818efbbf).

## 3. Hot Issues (Top 10 by Community Impact)

| Issue | Status | Priority | Why It Matters | Community Reaction |
|-------|--------|----------|----------------|-------------------|
| [#22141](https://github.com/google-gemini/gemini-cli/issues/22141) CLI becomes extremely slow (1+ HOURS) / stuck during small code-edit tasks | OPEN | P2 | Core usability blocker; agent loop + model response delays make CLI unusable for routine edits. | **218 comments, 164 👍** — highest engagement in dataset. |
| [#25868](https://github.com/google-gemini/gemini-cli/issues/25868) Multiple sequential edits to same file lost — only last persists | CLOSED | P1 | Regression after PR #8513 fix; breaks multi-step refactoring workflows. | 11 comments, 5 👍 |
| [#26864](https://github.com/google-gemini/gemini-cli/issues/26864) Teach Gemini models about Gemini CLI configuration (MCP, settings) | CLOSED | P2 | Models hallucinate config paths/formats; hurts self-service onboarding. | 11 comments, 1 👍 |
| [#23054](https://github.com/google-gemini/gemini-cli/issues/23054) Non-interactive mode produces fragmented traces (separate Trace IDs per span) | CLOSED | P2 | Breaks automated eval/observability pipelines relying on correlated traces. | 10 comments |
| [#26972](https://github.com/google-gemini/gemini-cli/issues/26972) Daily quota shows 200 for Google AI Pro subscribers | CLOSED | P2 | Pricing/quota mismatch erodes trust in paid tier. | 8 comments |
| [#27475](https://github.com/google-gemini/gemini-cli/issues/27475) Authentication issues: Vertex sessions expire daily, invalid_grant on resume | OPEN | P1 | Enterprise/Vertex users blocked daily; reauth loop disrupts workflows. | 5 comments |
| [#22225](https://github.com/google-gemini/gemini-cli/issues/22225) [Security] API Key leakage — agent prints raw MISTRAL/OPENAI keys from env/files | CLOSED | P1 | Sensitive credentials exposed in tool output and transcripts. | 4 comments |
| [#26575](https://github.com/google-gemini/gemini-cli/issues/26575) Cannot write plan files — write_file denied by policy; cannot exit Plan Mode | CLOSED | P1 | Planning mode deadlock; users stuck unable to persist or approve plans. | 6 comments, 1 👍 |
| [#22571](https://github.com/google-gemini/gemini-cli/issues/22571) [Architecture] Real-time observability/control gap in subagent delegation | OPEN | P2 | No visibility into delegated subagents (generalist, codebase_investigator); P0/P1 architectural limitation. | 6 comments |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) Robust component-level evaluations (EPIC) | OPEN | P1 | Follow-up to behavioral evals (#15300); 76 tests across 6 models — critical for release confidence. | 7 comments (maintainer-only) |

## 4. Key PR Progress (Top 10)

| PR | Status | Area | Summary |
|----|--------|------|---------|
| [#28403](https://github.com/google-gemini/gemini-cli/pull/28403) | OPEN | Security (P1) | Blocks `$VAR` / `${VAR}` variable-expansion bypass (GHSA-wpqr-6v78-jr5g); hardens issue-dedup workflow. |
| [#28446](https://github.com/google-gemini/gemini-cli/pull/28446) | OPEN | Auth/Security (P1) | Uses native `fetch` for OAuth token exchange to fix “Premature close” on headless VPSes (fixes #28440). |
| [#28364](https://github.com/google-gemini/gemini-cli/pull/28364) | CLOSED | Core (P2) | Deep-merges user `modelConfigServiceConfig` over defaults (was shallow merge losing nested overrides). |
| [#28369](https://github.com/google-gemini/gemini-cli/pull/28369) | CLOSED | Evals (L) | Adds `npm run eval:report` to aggregate pass rates by model from Vitest `report.json`; includes dev guide. |
| [#28363](https://github.com/google-gemini/gemini-cli/pull/28363) | CLOSED | Core (P2, XS) | Prevents `AbortSignal` listener leak in `ShellExecutionService` (fixes #28280). |
| [#28523](https://github.com/google-gemini/gemini-cli/pull/28523) | OPEN | Core (M/L) | Enforces explicit 128-bit auth tag length/validation in file-based keychain across Node runtimes. |
| [#28386](https://github.com/google-gemini/gemini-cli/pull/28386) | OPEN | VS Code (P2) | Tracks activation disposables correctly (fixes #27790 — comma-expression bug lost registrations). |
| [#28447](https://github.com/google-gemini/gemini-cli/pull/28447) | OPEN | Docs (P2) | Adds Windows PowerShell troubleshooting for `gemini` command after global npm install. |
| [#28543](https://github.com/google-gemini/gemini-cli/pull/28543) | CLOSED | Deps | Bumps `@google/genai` 1.30.0 → 2.12.0 (major version). |
| [#28539](https://github.com/google-gemini/gemini-cli/pull/28539) | CLOSED | Deps (XL) | 75-package npm dependency group update (simple-git, MCP SDK, etc.). |

## 5. Feature Request Trends
1. **Sub-agent steering & observability** — Users want manual/automatic routing of top-level steering to delegated agents (#23728, #22571).
2. **Managed-agent support for Enterprise/API** — Align CLI with Google’s managed-agents announcement (#27392).
3. **Planning-mode hardening** — Reliable plan-file writes, session isolation, and exit-path consistency (#26575, #26849, #26276).
4. **Evaluation infrastructure** — Local reporting, component-level evals, and CI integration (#24353, #28369).
5. **Configuration discoverability** — Document `GEMINI_CLI_HOME`, MCP server config, and model steering for LLMs (#26864, #23622).
6. **Windows/Git Bash parity** — First-class support when `cmd.exe`/`powershell.exe` are policy-blocked (#26567).
7. **Session lifecycle management**

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-27

## Today's Highlights
No new releases in the last 24 hours. The issue tracker shows active triage across **Linux process leaks, Windows TUI rendering bugs, MCP/OAuth token handling, and extension command duplication**. A critical zombie-process regression (#4163) was closed after confirmation, while several new regressions in 1.0.73+ (#4202, #4258, #4263) block daily workflows for Linux and Windows users.

---

## Releases
*No releases published in the last 24 hours.*

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4163](https://github.com/github/copilot-cli/issues/4163) | **copilot CLI 1.0.71 does not reap child processes — zombies accumulate** | Linux users see ~2 zombie processes/min per session, risking PID exhaustion. Root cause: missing `SIGCHLD` handling in Tokio runtime. | 👍 3 · 4 comments · **CLOSED** (fix likely in 1.0.74+) |
| [#4053](https://github.com/github/copilot-cli/issues/4053) | **TUI hangs at 'Loading: N skills' on NFS/GPFS: SIGCHLD race when Tokio spawns 'which gh'** | Blocks all TUI usage on network filesystems (common in HPC/enterprise). Race between 30+ concurrent `which gh` spawns and signal handling. | 3 comments · `area:platform-linux, area:mcp` · **OPEN** |
| [#4263](https://github.com/github/copilot-cli/issues/4263) | **Responses disappear after submitting a prompt on Windows Terminal** | Vertical split panes cause content loss on scroll; only first screen visible until next command. Affects all Windows Terminal users. | 2 comments · `triage` · **OPEN** |
| [#4258](https://github.com/github/copilot-cli/issues/4258) | **Interactive `-i` startup prompt ignored with custom/BYOK provider in TTY** | Breaks scripted/automated workflows for BYOK (Bring Your Own Key) users. Works with standard provider, regression in 1.0.75. | 2 comments · `triage` · **OPEN** |
| [#4202](https://github.com/github/copilot-cli/issues/4202) | **Built-in `view` reports "Path does not exist" for existing files in 1.0.73; 1.0.71 succeeds** | Core file-reading tool broken since 1.0.72. Blocks codebase navigation and context gathering. | 1 comment · `triage` · **OPEN** |
| [#4264](https://github.com/github/copilot-cli/issues/4264) | **Extensions slash command firing multiple times for single command** | Local repo extensions queue 3–5 duplicate executions per invocation. Makes custom slash commands unreliable. | 0 comments · `triage` · **OPEN** |
| [#4260](https://github.com/github/copilot-cli/issues/4260) | **Desktop app ignores `askUser: false` from settings.json** | No way to disable `ask_user` tool in desktop app; CLI setting not consulted. Forces interactive prompts in automation. | 0 comments · `triage` · **OPEN** |
| [#4259](https://github.com/github/copilot-cli/issues/4259) | **`--resume` replays orphaned `permission.requested` events (no matching `permission.completed`)** | Every resume re-prompts for permissions that were never resolved (process death mid-prompt). Noise + workflow breakage. | 0 comments · `triage` · **OPEN** |
| [#4203](https://github.com/github/copilot-cli/issues/4203) | **Remote MCP (OAuth): expired access token forces interactive re-auth instead of silent refresh_token grant** | Valid refresh tokens ignored; CLI drops MCP tools and demands interactive login. Breaks unattended/remote MCP usage. | 0 comments · `area:authentication, area:mcp` · **OPEN** |
| [#4217](https://github.com/github/copilot-cli/issues/4217) | **Copilot CLI crashes on exit (Windows) — libuv `uv_async_send` on closing handle** | 100% reproducible crash at teardown (`FAST_FAIL_FATAL_APP_EXIT`). Clean exit impossible on Windows x64. | 👍 1 · `area:platform-windows` · **OPEN** |

---

## Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## Feature Request Trends (from all Issues)

1. **MCP & OAuth Hardening** — Silent token refresh (#4203), registry policy flexibility for runtime headers (#4205), and `.agents` discovery for non-Git folders (#4204).
2. **Anthropic/Claude Cost Optimization** — `cache_control` breakpoints to reuse system prompts & tool defs (#4256).
3. **Extension & Slash Command Reliability** — Deduplication, predictable execution (#4264).
4. **Cross-Platform TUI Stability** — NFS/GPFS, Windows Terminal split-pane, TTY/BYOK quirks (#4053, #4263, #4258).
5. **Automation-First Settings** — Desktop app respecting `askUser: false`, `--resume` not replaying dead prompts (#4260, #4259).

---

## Developer Pain Points (High-Frequency Frustrations)

| Pain Point | Affected Issues | Frequency Hint |
|------------|----------------|----------------|
| **File/Path tooling broken in 1.0.72+** | #4202 | Regression blocking basic `view` |
| **Zombie/process leaks on Linux** | #4163 (closed), #4053 | 2+ zombies/min; PID pressure |
| **Windows TUI rendering & crash-on-exit** | #4263, #4217 | Daily driver unusable for some |
| **MCP OAuth not production-ready** | #4203, #4205 | Interactive re-auth breaks CI/remote |
| **Extension command duplication** | #4264 | Custom tooling unreliable |
| **Settings not synced across CLI/Desktop** | #4260 | `askUser: false` ignored in app |
| **`--resume` noise from orphaned events** | #4259 | Manual dismissal every resume |

---

*Digest generated from github/copilot-cli issue data (2026-07-26 00:00 → 2026-07-27 00:00 UTC). Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-27

## Today's Highlights
No new releases or pull requests were merged in the last 24 hours. A single critical bug affecting image handling in the Web client (Issue #2559) was reported and closed, indicating an intermittent regression where pasted images are dropped and replaced with a placeholder string, preventing the model from seeing user-provided visual context.

---

## Releases
No new releases published in the last 24 hours.

---

## Hot Issues

| Issue | Summary | Why It Matters | Community Reaction |
|-------|---------|----------------|---------------------|
| **[#2559](https://github.com/MoonshotAI/kimi-cli/issues/2559)** `[CLOSED]` **Web: pasted images intermittently dropped; model only receives placeholder** | In Kimi Code Web, images pasted into chat intermittently fail to reach the model. The message contains only `[image omitted for provider compatibility; re-read the file to view it or get conversion guidance]`. One image may work, the next fails in the same session. | **High impact for Web users** — breaks multimodal workflows (diagrams, screenshots, UI mockups). Intermittent nature makes it hard to reproduce and erodes trust in the Web client for visual tasks. | 1 comment, 0 👍. Closed same day — suggests either a quick fix was deployed or the issue was deemed a known limitation/provider-side issue. No public fix details in thread. |

---

## Key PR Progress
No pull requests updated in the last 24 hours.

---

## Feature Request Trends
*Insufficient data from the last 24 hours to identify trends.*  
Historical context (not in today’s data) shows recurring requests for:  
- **Stable multimodal input** (image paste/upload reliability)  
- **Provider-agnostic asset handling** (avoiding “omitted for compatibility” fallbacks)  
- **Session persistence** for uploaded assets across turns

---

## Developer Pain Points
1. **Unreliable image ingestion in Web client** — The `#2559` regression highlights a fragile pipeline: pasted images are silently dropped with no user-facing error, only a cryptic placeholder. Developers cannot debug whether the issue is client-side (paste handling), transport, or provider compatibility.
2. **Lack of visibility into asset processing** — No logging or UI indication when an image fails to reach the model, making it impossible to distinguish between “model refused” and “pipeline lost the bytes.”
3. **Provider compatibility as a black box** — The placeholder message `omitted for provider compatibility` suggests upstream API constraints, but the CLI gives no guidance on supported formats, size limits, or workarounds.

---

*Digest generated from GitHub data for `MoonshotAI/kimi-cli` covering 2026-07-26 to 2026-07-27.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-27

## Today's Highlights
No new releases in the last 24 hours. The community closed **3The Pi community focused heavily on **session lifecycle reliability** and **extension runtime stability** — fixing compaction-triggered extension invalidation, silent RPC message loss during compaction, and session folder collisions. A notable performance fix landed for the TUI's CPU-hot path (Intl.Segmenter caching + LRU eviction), and cross-platform path handling received multiple corrections.

---

## Releases
**None** in the last 24 hours.

---

## Hot Issues (Top 10 by Impact & Discussion)

| Issue | Status | Why It Matters |
|-------|--------|----------------|
| **[#6665](https://github.com/earendil-works/pi/issues/6665)** TUI pins a full core while streaming: uncached `Intl.Segmenter` + per-chunk Markdown rebuild | `inprogress` | **Critical perf regression** — 100% core usage during streaming. Root cause: grapheme segmentation uncached, Markdown rebuilt per chunk. PR [#7129](https://github.com/earendil-works/pi/pull/7129) raises cache to 4096 entries with LRU eviction. |
| **[#7154](https://github.com/earendil-works/pi/issues/7154)** Compaction invalidates extension runtime: captured `pi` throws "stale after session replacement" forever | `closed` | **Extension ecosystem blocker** — compaction triggers session replacement, which invalidates all extension runtimes with no in-process recovery. Affects long-running autonomous sessions. |
| **[#7150](https://github.com/earendil-works/pi/issues/7150)** RPC prompt during in-flight compaction: ACKed `success:true`, then silently dropped | `closed` | **Silent data loss** — user prompts acknowledged but never enter session during compaction. High risk for automation/RPC consumers. |
| **[#7064](https://github.com/earendil-works/pi/issues/7064)** WSL absolute Windows paths mishandled | `open` 👍1 | **WSL2 usability** — `read`/`write`/`edit` tools fail, forcing fallback to full writes. Blocks Windows developers on WSL. |
| **[#4877](https://github.com/earendil-works/pi/issues/4877)** Session folder collision: distinct paths → same session folder | `closed` 👍2 | **Data integrity** — `/a/b/c/d` and `/a-b/c-d` both map to `--a-b-c-d--`. Low probability but surprising corruption vector. |
| **[#7136](https://github.com/earendil-works/pi/issues/7136)** Bash tool silently truncates long commands (partial execution, no error) | `closed` | **Silent data loss** — commands cut mid-execution with zero error reporting. Dangerous for CI/automation. |
| **[#7149](https://github.com/earendil-works/pi/issues/7149)** Standalone linux-x64 binary `SIGILL` on pre-Haswell CPUs (BMI2) | `closed` | **Hardware compatibility** — official binary uses `shlx` (BMI2), crashes on Sandy Bridge/Ivy Bridge. npm package works (different build). |
| **[#7090](https://github.com/earendil-works/pi/issues/7090)** Regenerate 0.82.x shrinkwrap with brace-expansion 5.0.8+ (CVE-2026-14257) | `closed` | **Security** — transitive dependency vulnerable to memory-exhaustion DoS. Requires shrinkwrap regeneration. |
| **[#7138](https://github.com/earendil-works/pi/issues/7138)** / **[#7140](https://github.com/earendil-works/pi/issues/7140)** / **[#7155](https://github.com/earendil-works/pi/issues/7155)** MiniMax-M3: thinking tags leak, compaction breaks reasoning, `reasoning_split` parameter needed | `closed` | **Provider integration quality** — MiniMax M3 reasoning output leaks into assistant text; compaction corrupts thinking blocks; missing `reasoning_split` support. |
| **[#7153](https://github.com/earendil-works/pi/issues/7153)** `/scoped-models` stalls ~5 minutes awaiting stalled catalog refresh | `closed` | **UX regression** — command blocks UI with no loading state, eventually renders. Synchronous catalog refresh blocks REPL. |

---

## Key PR Progress (Top 10)

| PR | Status | Summary |
|----|--------|---------|
| **[#7148](https://github.com/earendil-works/pi/pull/7148)** feat(coding-agent): Experimental loadout management | `open` | **Major extension UX** — `/loadout` command to enable/disable extensions mid-session, persisted across resumption. Requires user confirmation. Draft/early stage. |
| **[#7151](https://github.com/earendil-works/pi/pull/7151)** feat(ai): expose pending stop reason while streaming | `open` | **Streaming observability** — interprets Responses API `phase: "final_answer"` as predicted `stopReason: "stop"`, letting consumers know final message is incoming early. |
| **[#7129](https://github.com/earendil-works/pi/pull/7129)** tui: raise visibleWidth cache to 4096 entries, use LRU eviction | `closed` | **Perf fix for #6665** — 512-entry FIFO cache thrashed on real sessions (box drawing, emoji, CJK). LRU + 8x capacity eliminates hot-path cache misses. |
| **[#7131](https://github.com/earendil-works/pi/pull/7131)** Set `AI_AGENT=pi` for child process attribution | `closed` | **Cross-agent convention** — sets emerging standard `AI_AGENT=pi` alongside `PI_CODING_AGENT=true` so tooling (Claude Code, GitHub CLI, Vercel) detects Pi generically. |
| **[#7122](https://github.com/earendil-works/pi/pull/7122)** fix(tools): correct byte count in write, false limit warning in find, surrogate pairs in truncateLine | `closed` | **Three tool fixes** — UTF-8 byte count (not UTF-16) for `write`; `find` false "limit reached" warning; `truncateLine` handles surrogate pairs correctly. |
| **[#7120](https://github.com/earendil-works/pi/pull/7120)** feat(coding-agent): show `SYSTEM.md` / `APPEND_SYSTEM.md` in startup `[Context]` banner | `closed` | **Transparency** — these files silently replace/append system prompt but were invisible in startup banner. Now surfaced for user awareness. |
| **[#7124](https://github.com/earendil-works/pi/pull/7124)** / **[#7112](https://github.com/earendil-works/pi/pull/7112)** fix: normalize path separators in footer for cross-platform display | `closed` | **Windows footer fix** — `formatCwdForFooter` used `path.sep` (`\` on Windows), showing `~\project` vs `~/project`. Now always forward slash. |
| **[#7156](https://github.com/earendil-works/pi/pull/7156)** fix(ai): rename OpenCode Zen Go to OpenCode Go | `closed` | **Provider naming** — display name corrected from "OpenCode Zen Go" to "OpenCode Go" in `--list-models`. |
| **[#7145](https://github.com/earendil-works/pi/pull/7145)** Dev | `closed` | Internal/dev PR (minimal description). |
| **[#7146](https://github.com/earendil-works/pi/pull/7146)** workflow: include token usage in agent_result / run_complete events | *referenced in issue* | **Observability** — adds token usage to workflow run logs for parallel subagent fan-out cost tracking. |

---

## Feature Request Trends
1. **Extension runtime durability** — Loadout management ([#7148](https://github.com/earendil-works/pi/pull/7148)), pre-response hooks ([#7137](https://github.com/earendil-works/pi/issues/7137)), durable compaction strategies ([#7127](https://github.com/earendil-works/pi/issues/7127)), mouse-click overlay API ([#7144](https://github.com/earendil-works/pi/issues/7144)). Extensions need first-class lifecycle control and UI primitives.
2. **Structured output & provider parity** — JSON schema support ([#1086](https://github.com/earendil-works/pi/issues/1086)), OpenAI Pro modes ([#7135](https://github.com/earendil-works/pi/issues/7135)), MiniMax `reasoning_split` ([#7138](https://github.com/earendil-works/pi/issues/7138)), Z.AI `max_tokens` fix ([#7143](https://github.com/earendil-works/pi/issues/7143)). Providers diverge; Pi needs normalized abstraction layer.
3. **Authentication/credential UX** — Read-only auth preflight ([#7152](https://github.com/earendil-works/pi/issues/7152)), catalog refresh non-blocking ([#7153](https://github.com/earendil-works/pi/issues/7153)).
4. **Observability & standards** — Token usage in workflow events ([#7146](https://github.com/earendil-works/pi/issues/7146)), `AI_AGENT` env var ([#7131](https://github.com/earendil-works/pi/pull/7131)), Anthropic refusal signal ([#7133](https://github.com/earendil-works/pi/issues/7133)).
5. **Theming/customization** — Cursor color ([#7141](https://github.com/earendil-works/pi/issues/7141)), overlay position API ([#7144](https://github.com/earendil-works/pi/issues/7144)).

---

## Developer Pain Points (Recurring Frustrations)
| Pain Point | Evidence |
|------------|----------|
| **Session/compaction instability** | Extensions invalidated on compaction ([#7154](https://github.com/earendil-works/pi/issues/7154)), RPC messages silently dropped during compaction ([#7150](https://github.com/earendil-works/pi/issues/7150)), session folder

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-27

## Today's Highlights
Security dominates today's activity: three critical MCP-related vulnerabilities were disclosed and closed within hours, exposing authorization bypasses in the Desktop app's IPC bridge and SSE session handling. Simultaneously, the nightly release v0.21.0-nightly.20260727.c003e1718 shipped a CLI time-zone fix, while CI instability persists with 5+ E2E test failures on `main` in the last 24 hours. The community is also debating the strategic relationship between `qwen-code-sdk` and `qoder-agent-sdk` — a recurring identity question for downstream developers.

---

## Releases
**v0.21.0-nightly.20260727.c003e1718**  
- **fix(cli)**: Measure insight days and hours in local time everywhere (PR #7670) — resolves inconsistent timestamp display across time zones.  
- **refactor(autofix)**: Extensibility improvements (details truncated in release notes).  
[Release link](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.0-nightly.20260727.c003e1718)

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#7769](https://github.com/QwenLM/qwen-code/issues/7769) | **[Security] MCP tool denial bypassed via new SSE session** (P1, Closed) | User denial of an MCP tool call is not enforced if the agent creates a new SSE session and retries — fundamental authZ flaw. | 6 comments, closed same day; fix likely in PR pipeline. |
| [#7768](https://github.com/QwenLM/qwen-code/issues/7768) | **[Security] Desktop IPC `mcp_client_tool_call` executes without user authZ** (P1, Closed) | Renderer-exposed IPC method calls MCP servers directly — no permission prompt, no user consent. | 6 comments; pairs with #7769 as a full MCP authZ bypass chain. |
| [#7772](https://github.com/QwenLM/qwen-code/issues/7772) | **[Security Hardening] Insecure Electron `webPreferences`** (P3, Open) | `sandbox: false`, `webSecurity: false`, `allowRunningInsecureContent: true` weaken Desktop app security posture. | 4 comments; needs Electron hardening review. |
| [#7770](https://github.com/QwenLM/qwen-code/issues/7770) | **[Security] Code interpreter sandbox can write to host via exposed MCP proxy** (P2, Open) | Sandbox has outbound internet; if MCP proxy is exposed, attacker can pivot from sandbox to host. | 4 comments; architecture-level risk. |
| [#7771](https://github.com/QwenLM/qwen-code/issues/7771) | **Persisted `mcp_config` not loaded into main-process MCP proxy at startup** (Open, needs retest) | After restart, MCP servers configured in settings are unavailable until re-added manually. | 4 comments; usability + reliability blocker. |
| [#7755](https://github.com/QwenLM/qwen-code/issues/7755) | **Main CI failed: E2E Tests on 60812d4** (Open, autofix/skip) | Recurring CI flakiness; 5+ similar failures in 24h (#7773, #7777, #7780, #7759). | 4 comments each; `autofix/skip` label suggests known flakes. |
| [#7750](https://github.com/QwenLM/qwen-code/issues/7750) | **[Question] qwen-code-sdk vs qoder-agent-sdk selection** (Closed, 6 comments) | Developers confused by two similar SDKs (CLI, VS Code, Python SDKs); unsure which is "official" or future-proof. | 6 comments; strategic clarity needed from maintainers. |
| [#7264](https://github.com/QwenLM/qwen-code/issues/7264) | **Cold-start follow-ups: lazy-loading candidates from ACP eager-closure audit** (P2, Closed) | 17.24 MiB / 2420 modules loaded eagerly on every ACP child start — major latency source. | 6 comments; follow-up to #4748, performance-critical. |
| [#7684](https://github.com/QwenLM/qwen-code/issues/7684) | **Command mode: multi-line statusline breaks IME candidate position** (P3, Closed, welcome-pr) | macOS IME candidate window appears far from cursor when statusline wraps — UX regression. | 5 comments; macOS-specific, good first issue. |
| [#7757](https://github.com/QwenLM/qwen-code/issues/7757) | **perf(serve): Measure and optimize daemon first-model-output latency** (P2, Open) | Post-cold-start, next bottleneck is time-to-first-model-token; needs instrumentation & optimization. | 2 comments; follow-up to #7264, latency-focused. |

---

## Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#7782](https://github.com/QwenLM/qwen-code/pull/7782) | fix(core) | **Keep Draft 4 boolean exclusive bounds in `toOpenAPI30`** — prevents schema conversion from dropping `exclusiveMinimum: true` / `exclusiveMaximum: true` when already in boolean form. |
| [#7778](https://github.com/QwenLM/qwen-code/pull/7778) | feat(web-shell) | **Allow sidebar widening up to 50% of window width** — replaces fixed max-width with dynamic cap for large displays. |
| [#7731](https://github.com/QwenLM/qwen-code/pull/7731) | feat(web-shell) | **Git branch picker, commit dialog, create PR flow** — IntelliJ-style popover with search, checkout, new branch, tag support, and PR creation. |
| [#7724](https://github.com/QwenLM/qwen-code/pull/7724) | fix(web-shell) | **Allow shell commands (`!`) in new tasks without existing session** — lazily creates session via `ensureSessionForPrompt()` instead of erroring. |
| [#7698](https://github.com/QwenLM/qwen-code/pull/7698) | feat(dingtalk) | **Support outbound image delivery** — agent can send `[IMAGE: /abs/path]` markers; channel uploads to DingTalk and replaces with Markdown image. |
| [#7749](https://github.com/QwenLM/qwen-code/pull/7749) | feat(review) | **script-lint: run linters over diff's executable scripts as required step** — catches shell bugs (unquoted vars, `PIPESTATUS` misuse, `[` vs `[[`) in code review. |
| [#7776](https://github.com/QwenLM/qwen-code/pull/7776) | fix(core) | **Scope timeout veto to the fragment it appears in** — fixes over-broad error classification where timeout patterns matched unrelated error text. |
| [#7774](https://github.com/QwenLM/qwen-code/pull/7774) | fix(core) | **Read stash reflog from common git dir** — fixes `countStashEntries` in linked worktrees where `.git` is a file pointing to per-worktree dir. |
| [#7765](https://github.com/QwenLM/qwen-code/pull/7765) | fix(core) | **Stop rewriting backslash escapes in gitignore patterns** — `replace(/\\/g, '/')` was corrupting escaped chars like `\#` in patterns. |
| [#7753](https://github.com/QwenLM/qwen-code/pull/7753) | fix(triage) | **Carry `/verify` hardening controls to `/tmux`** — ports 5 attack-surface reductions (reproduced exploits) to the tmux triage lane. |

---

## Feature Request Trends
1. **MCP / External Context Integration** — #7585 (Direct External Context Provider Profile), #7687 (DingTalk image outbound), #7771 (persisted MCP config loading) show demand for richer, persistent, and secure MCP workflows.
2. **Subagent / Model Granularity** — #7685 (model grade selection at spawn: small/medium/high/super) and subagent tooling roadmap items indicate desire for fine-grained agent orchestration.
3. **Web Shell Parity with Desktop** — #7731 (git PR flow), #7778 (sidebar resize), #7724 (shell in new tasks), #6770 (read-only transcript viewer), #6972 (Voice for secondary workspaces) — Web Shell is catching up feature-for-feature.
4. **CI / Developer Hygiene Automation** — #7383 (scheduled repo-hygiene skill for trivial docs/test fixes), #7749/#7751 (script-lint as deterministic gate) — reducing review overhead via automation.
5. **Terminal UX Polish** — #5738 (virtualized history default), #3439 (LaTeX math rendering), #7779/#7781 (VP teardown/SIGTERM terminal state cleanup) — refining the CLI as a first-class interface.

---

## Developer Pain Points (Recurring Themes)
- **CI Flakiness Fatigue** — 5+ E2E test failures on `main` in 24h (#7755, #7773, #7777, #7780, #7759) with `autofix/skip` labels; developers waste cycles debugging infra instead of code.
- **SDK Identity Crisis** — #7750 (6 comments) crystallizes confusion: two SDKs (`qwen-code-sdk`, `qoder-agent-sdk`) with overlapping CLI/VS Code/Python surfaces; no public guidance on which to adopt or whether one will be deprecated.
- **MCP Authorization Gaps** — Three P1/P2 security issues in 24h (#7769, #7768, #7770) reveal systemic authZ enforcement gaps in the MCP stack; erodes trust for enterprise adoption.
- **Daemon/Session State Fragility** — #7771 (config not loaded at startup), #7752 (writer lock handoff on daemon replacement), #7264 (cold-start bloat) — daemon lifecycle remains a source of bugs and latency.
- **Cross-Platform Terminal Quirks** — #7684 (macOS IME), #6820 (WASM memory OOB on Linux), #7779/#7781 (Kitty protocol/SIGTERM state leaks) — terminal abstraction layer needs hardening.

---

*Digest generated from GitHub data as of 2026-07-27. Links point to live issues/PRs on [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code).*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-07-27

---

## 1. Today's Highlights

No new releases in the last 24 hours, but the project shipped **12 merged PRs** addressing critical performance regressions (O(N²) markdown streaming, prompt-cache hit-rate), UX polish (onboarding escapability, context-menu alignment, clipboard offloading), and provider/skill infrastructure (Kimi Code tier selection, skill marker repair). The v0.9.2 milestone continues to focus on onboarding, localization parity, and runtime control-plane completeness.

---

## 2. Releases

**None** in the last 24 hours.

---

## 3. Hot Issues (Top 10 by Community Engagement)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#3793](https://github.com/Hmbown/CodeWhale/issues/3793) **v0.9.2 Setup: guided localized constitution creator** | Redefines first-run UX: language-first, guided canvas for constitution authoring; explicitly separates autonomy/risk posture from runtime security controls. | 17 comments — highest engagement; signals core UX direction for v0.9.2. |
| [#4227](https://github.com/Hmbown/CodeWhale/issues/4227) **Skill/workflow for CodeWhale dev environment setup** | Automates `main` sync, rebuild, test, and config for contributors; addresses 10+ PRs/day velocity friction. | 13 comments — strong contributor interest in onboarding automation. |
| [#2934](https://github.com/Hmbown/CodeWhale/issues/2934) **Sidebar sessions panel with auto-resume & history** | Persistent session browser replaces `Ctrl+R` picker; enables session history browsing and auto-resume. | 10 comments — high demand for session management parity with GUI IDEs. |
| [#3792](https://github.com/Hmbown/CodeWhale/issues/3792) **First-run onboarding: feel like starting CodeWhale, not editing config** | Sequences welcome → language → provider → constitution → appearance; keeps constitution central but decoupled from security controls. | 9 comments — aligns with #3793; onboarding is a top v0.9.2 theme. |
| [#2494](https://github.com/Hmbown/CodeWhale/issues/2494) **macOS + iTerm2 user pain points (CLOSED)** | Documents key gaps: macOS keybindings, multiline paste handling, stop-generation, session history access. | 6 comments — closed but surfaces recurring platform-specific UX debt. |
| [#1004](https://github.com/Hmbown/CodeWhale/issues/1004) **`/dryrun` — preview next chat completion request** | Lets developers inspect the full rendered request (system prompt, tools, @mentions, thinking) before sending; critical for V4 Pro cost control. | 5 comments — niche but high-value for power users iterating on long contexts. |
| [#4022](https://github.com/Hmbown/CodeWhale/issues/4022) **CLI/TUI parity for subagent & runtime control surfaces** | Ensures subagent status, expand/collapse, cancellation aren’t TUI-trapped; enables future cloud/remote clients. | 5 comments — architectural prerequisite for multi-surface support. |
| [#3983](https://github.com/Hmbown/CodeWhale/issues/3983) **Make Work state model-visible on parent turns** | Exposes `checklist_*` ledger and `update_plan` strategy to parent model; closes observability gap in subagent forks. | 4 comments — key for agentic workflow transparency. |
| [#2974](https://github.com/Hmbown/CodeWhale/issues/2974) **Wire model-facing workflow tool & run driver** | Connects JS-authored workflows → typed plans → subagent execution → bounded events; the “last mile” for WhaleFlow. | 4 comments — unblocks workflow runtime for end users. |
| [#3927](https://github.com/Hmbown/CodeWhale/issues/3927) **Explicit provider-independent offline path in onboarding** | Adds a keyless “just look around” mode (Ollama/SGLang/vLLM) without activating runtime services. | 4 comments — addresses contributor friction for offline evaluation. |

---

## 4. Key PR Progress (10 Most Impactful)

| PR | Status | Summary |
|----|--------|---------|
| [#4903](https://github.com/Hmbown/CodeWhale/pull/4903) | **MERGED** | **perf(tui): stop re-parsing committed markdown while streaming** — eliminates O(N²) markdown re-parse per chunk (fixes [#3897](https://github.com/Hmbown/CodeWhale/issues/3897)). |
| [#4902](https://github.com/Hmbown/CodeWhale/pull/4902) | **MERGED** | **test(engine): pin the cacheable prefix across unchanged turns** — proves `<turn_meta>` block was busting DeepSeek prompt-cache; restores 10× cheaper cached tokens (closes [#3738](https://github.com/Hmbown/CodeWhale/issues/3738)). |
| [#4894](https://github.com/Hmbown/CodeWhale/pull/4894) + [#4901](https://github.com/Hmbown/CodeWhale/pull/4901) | **MERGED** | **feat(shell): deliver tracked completions to waiting turns** + **test: close background-completion acceptance gaps** — completes reliable background job completion delivery (refs [#3874](https://github.com/Hmbown/CodeWhale/issues/3874)). |
| [#4899](https://github.com/Hmbown/CodeWhale/pull/4899) | **MERGED** | **feat(composer): add `@git` and `@diff` mentions** — attaches curated git context directly in composer, avoiding round-trip tool calls (closes [#4067](https://github.com/Hmbown/CodeWhale/issues/4067)). |
| [#4900](https://github.com/Hmbown/CodeWhale/pull/4900) | **MERGED** | **feat(engine): make policy narrowing observable** — emits structured events when runtime policy narrows turn authority; model now sees *why* tools were dropped (closes [#3947](https://github.com/Hmbown/CodeWhale/issues/3947)). |
| [#4892](https://github.com/Hmbown/CodeWhale/pull/4892) | **MERGED** | **perf(tui): reuse live transcript snapshots & flattened lines** — caches rendered cells by revision/width/mode; streaming only invalidates changed tail (closes [#3904](https://github.com/Hmbown/CodeWhale/issues/3904)). |
| [#4896](https://github.com/Hmbown/CodeWhale/pull/4896) | **MERGED** | **[codex] move terminal clipboard writes off event loop** — serializes OSC 52/SSH/tmux clipboard via bounded background worker; prevents event-loop stalls (fixes [#4159](https://github.com/Hmbown/CodeWhale/issues/4159)). |
| [#4765](https://github.com/Hmbown/CodeWhale/pull/4765) | **MERGED** | **fix(tui): make provider onboarding navigable and escapable** — breaks OAuth modal trap; restores `Esc`/`Ctrl+C` exit (closes [#4763](https://github.com/Hmbown/CodeWhale/issues/4763)). |
| [#4893](https://github.com/Hmbown/CodeWhale/pull/4893) | **MERGED** | **feat(provider): ask Kimi Code plan tier during setup** — explicit 262K vs 1M context window choice for `k3` model; persists selection (closes [#4758](https://github.com/Hmbown/CodeWhale/issues/4758)). |
| [#4863](https://github.com/Hmbown/CodeWhale/pull/4863) | **MERGED** | **feat(tui): persist exact repo-scoped allow grants** — approval cards now remember safe shell/file-write calls as precise, repo-scoped `allow` rules (harvested from [#4761](https://github.com/Hmbown/CodeWhale/pull/4761)). |

---

## 5. Feature Request Trends (Distilled from All Issues)

1. **Onboarding & Constitution UX** — Guided, localized, language-first setup; constitution as living document, not blank editor ([#3793](https://github.com/Hmbown/CodeWhale/issues/3793), [#3792](https://github.com/Hmbown/CodeWhale/issues/3792), [#3937](https://github.com/Hmbown/CodeWhale/issues/3937), [#3927](https://github.com/Hmbown/CodeWhale/issues/3927)).
2. **Session & History Management** — Persistent sidebar, auto-resume, searchable history, multi-session dashboard ([#2934](https://github.com/Hmbown/CodeWhale/issues/2934), [#4397](https://github.com/Hmbown/CodeWhale/issues/4397), [#2494](https://github.com/Hmbown/CodeWhale/issues/2494)).
3. **Localization Parity** — Website locales for JA, VI, KO, ES-419, PT-BR, RU, FR, DE, CA, ID; README translations already landed ([#3091](https://github.com/Hmbown/CodeWhale/issues/3091), [#3093](https://github.com/Hmbown/CodeWhale/issues/3093), [#3092](https://github.com/Hmbown/CodeWhale/issues/3092), [#4788](https://github.com/Hmbown/CodeWhale/issues/4788), [#4789](https://github.com/Hmbown/CodeWhale/issues/4789)).
4. **Control-Plane Completeness** — CLI/TUI parity for subagents, workflow tools, policy observability, approval surfaces ([#4022](https://github.com/Hmbown/CodeWhale/issues/4022), [#3983](https://github.com/Hmbown/CodeWhale/issues/3983), [#2974](https://github.com/Hmbown/CodeWhale/issues/2974), [#1888](https://github.com/Hmbown/CodeWhale/issues/1888)).
5. **Provider & Model Abstraction** — Auto-router consent flow, whale-size model tier names, Kimi/Ollama/SGLang first-class support ([#4411](https://github.com/Hmbown/CodeWhale/issues/4411), [#2026](https://github.com/Hmbown/CodeWhale/issues/2026), [#4893](https://github.com/Hmbown/CodeWhale/pull/

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*