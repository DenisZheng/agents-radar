# AI CLI Tools Community Digest 2026-08-12

> Generated: 2026-08-12 01:19 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Ecosystem (2026-08-12)

---

## 1. Ecosystem Overview

The AI CLI landscape is in a **high-velocity stabilization phase** across all major tools. Every project shipped fixes or alpha builds in the past week, but **no tool released a stable major version** — indicating ongoing architectural churn. Community energy is concentrated on **three cross-cutting themes**: (a) session/context durability across restarts and devices, (b) Windows/Linux parity for first-class desktop experiences, and (c) agent orchestration guardrails (token budgets, subagent reliability, permission models). Proprietary tools (Claude Code, Codex, Copilot, Gemini) show heavier investment in **enterprise-grade billing, security hardening, and MCP/ACP ecosystem integration**, while community-driven tools (OpenCode, Kimi, Pi, DeepSeek) lead on **TUI/UX innovation, modular architecture, and provider extensibility**. The gap between "cloud-tethered" and "local-first" philosophies is widening as a strategic differentiator.

---

## 2. Activity Comparison (2026-08-11 → 2026-08-12)

| Tool | Releases (24h) | Hot Issues Tracked | Active PRs Merged/Updated | Top Community Signal (👍/comments) | Release Cadence |
|------|----------------|-------------------|---------------------------|-----------------------------------|-----------------|
| **Claude Code** | 1 patch (v2.1.228) | 10 | 7 (3 docs, 3 security, 1 bugfix) | #50246: Message queue — **191👍, 53 comments** | ~weekly patches |
| **OpenAI Codex** | 2 alphas (0.148.0-a.7→a.8) | 10 | 10 merged (coordinated sprint) | #11023: Linux desktop — **950👍, 207 comments** (CLOSED) | Daily alphas |
| **Gemini CLI** | 4 (preview.1, nightly, 2 patches) | 10 | 10 (2 critical CVEs, evals, capacity fix) | #22323: Subagent false success — **12 comments, 2👍** (P1) | Nightly + preview |
| **GitHub Copilot CLI** | 0 | 10 | 2 (infra only) | #4095: Windows plugin lock — **14👍, 2 comments** | Irregular |
| **Kimi Code** | 0 | 5 | 8 (1 feat, 7 bugfixes closed) | #1283: Persistent memory — **34 comments, 0👍** (open since Feb) | Low visibility |
| **OpenCode** | 0 | 10 | 12 (tabs, UTF-8, autocomplete, experiments) | #16017: Usage API — **137👍, 33 comments** (CLOSED) | V2 heavy dev |
| **Pi** | 0 | 10 | 10 (usage streaming, Qwen CN, Intercom, TUI) | #6187: WSL Copilot login — **25 comments, 0👍** | Active bug-fix sprint |
| **DeepSeek TUI** | 0 | 2 | 6 (PiP, OrcaRouter, ACP tools, snapshot) | #5322: Wide-terminal regression — **1 comment** | Modular refactor |
| **Qwen Code** | — | — | — | — | — |

**Key Observation**: Codex and Gemini show highest **release velocity** (daily/nightly). OpenCode and Pi demonstrate broadest **PR diversity** (UX, arch, providers). Copilot and Kimi are quietest on releases but have acute **Windows/config pain points**.

---

## 3. Shared Feature Directions (Cross-Tool Convergence)

| Requirement | Tools Affected | Specific Community Ask |
|-------------|----------------|------------------------|
| **Persistent cross-session memory/context** | Claude Code (#76727), Gemini (#26522, #26525), Kimi (#1283, #1478), OpenCode (#28191), Pi (#7931/#7960) | Users want *both* AI-curated and user-defined memory (AGENT.md, MEMORY.md, daily logs) that survives restarts, compactions, and device switches. |
| **Windows-first reliability** | **All 8 tools** have Windows-specific regressions: Claude (Git PATH, console flash, MSIX false+), Codex (memory leak 8.8GB, disk 400GiB, sandbox ACLs), Copilot (plugin "Access denied" 14👍), Gemini (shell hang), Kimi (PowerShell 7 D: drive), OpenCode (CRLF, UTF-8, ALSA), Pi (CMD duplicate output, bash not found), DeepSeek (output width). | Consistent ask: treat Windows as Tier-1, not afterthought. |
| **Agent/subagent orchestration guardrails** | Claude (#67636 runaway tokens), Gemini (#21409 hangs, #22323 false success), Codex (#23930 ghost cards, #37910 model resolution), Copilot (#4438 skill reload race), OpenCode (#40778 Plan Mode ignored), Pi (#7553 thinking budget), DeepSeek (session snapshot safety). | Budget quotas, turn limits, crash recovery, permission inheritance, and *observable* subagent state. |
| **MCP/ACP ecosystem maturity** | Claude (#36024 multi-Gmail, #76727 coordination), Codex (#37417 tool-list stale, #38089 OAuth), Copilot (#4211 BigInt crash, #4439 GitLab OAuth), Gemini (tool explosion >128), OpenCode (#41884 MCP registration race), DeepSeek (#5225 ACP tool exec), Pi (#7901 Cloudflare Gateway). | Dynamic tool discovery, cross-session approval persistence, provider-agnostic OAuth, and **tool execution** (not just chat) over ACP. |
| **Linux desktop parity** | Codex (#11023 950👍), Claude (#78775 desktop regressions), Gemini (#21983 Wayland), Copilot (no Linux app), Kimi (no Linux focus), OpenCode (TUI-first, no GUI), Pi (TUI), DeepSeek (TUI). | Native Linux app — not just CLI-in-terminal — is the #1 unmet need for non-macOS users. |
| **Model/provider flexibility & cost transparency** | Codex (custom provider first-class), Gemini (evals across 6 models), Copilot (auto mode picks unavailable models), OpenCode (hidden Haiku calls, Grok gaps), Pi (per-phase thinking budgets, Qwen CN), DeepSeek (OrcaRouter). | Users want **provider-agnostic model routing**, per-task thinking budgets, and programmatic usage APIs (OpenCode #16017 137👍). |

---

## 4. Differentiation Analysis

| Dimension | Cloud-Tethered (Proprietary Backend) | Local-First / Provider-Agnostic |
|-----------|--------------------------------------|----------------------------------|
| **Tools** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI | OpenCode, Kimi Code, Pi, DeepSeek TUI |
| **Core Value Prop** | Zero-config access to frontier models, enterprise SSO/billing, managed sandbox | Model freedom, data sovereignty, extensible architecture, offline-capable |
| **Session Model** | Server-backed, cloud-synced, conversation history tied to account | Local SQLite/JSONL, portable, user-owned, git-friendly |
| **Agent Architecture** | Orchestrated by backend (Opus/Sonnet, GPT-4o, Gemini 2.5) with tool sandbox | User-composable: bring-your-own-model, custom tool chains, ACP/MCP native |
| **Target User** | Enterprise devs, teams needing compliance/billing, "it just works" adopters | Power users, researchers, privacy-conscious, polyglot model experimenters |
| **Technical Approach** | Thin CLI → heavy cloud runtime; frequent alpha/preview channels | Thick client (Rust/Go/TS), plugin systems, crate/module decomposition, self-hostable |
| **Monetization** | Subscription/seat (Copilot), usage-based (Claude, Codex), bundled (Gemini) | Free/OSS; some offer cloud plans (OpenCode Go plan) but CLI stays free |
| **Risk Profile** | Vendor lock-in, pricing changes, data egress, feature gating | Maintenance burden, model quality variance, smaller ecosystems |

**Emerging Hybrid**: **Pi** and **OpenCode** blur the line — local-first TUI with first-class cloud provider integrations (Copilot, OpenRouter, custom gateways) and optional paid plans for hosted services.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **OpenAI Codex**, **Gemini CLI**, **OpenCode**, **Pi** | Daily/nightly releases; 10+ PRs/day; coordinated landing sprints (Codex 10 PRs by bot); nightly eval infra (Gemini); V2 architectural push (OpenCode); Intercom/ACP innovation (Pi). |
| **Steady Enterprise Cadence** | **Claude Code** | Weekly patches; high community signal on top issues (191👍); security/plugin hygiene focus; billing incidents show scale but also process gaps. |
| **Friction-Heavy / Slower Visible Velocity** | **GitHub Copilot CLI**, **Kimi Code** | No releases in 24h; acute Windows/config bugs blocking users; PRs infra-only (Copilot) or bugfix backlog cleanup (Kimi); strong community pain (14👍 on plugin lock) but slower public response. |
| **Early Architectural Phase** | **DeepSeek TUI** | Crate decomposition (EPIC-005) underway; ACP tool exec just landed; provider extensibility proven (OrcaRouter); small but focused community. |
| **Data Gap** | **Qwen Code** | Summary generation failed — unable to assess. |

**Maturity Signals**:
- **Most production-hardened**: Claude Code (v2.1.x, enterprise billing), Copilot CLI (v1.0.x, GitHub integration)
- **Best developer experience polish**: Pi (TUI copyOnSelect, OSC 52, Mermaid), OpenCode (tab system, autocomplete, experiments surface)
- **Most innovative architecture**: OpenCode (V2 service/TUI split, shared server), DeepSeek (crate decomposition, ACP-native), Pi (Intercom session handoff, per-phase thinking budgets)

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Strategic Implication |
|-------|-----------------|----------------------|
| **Windows is the new Tier-1 battleground** | 🔴 **Critical** — Every tool has blocking Windows bugs; Copilot 14👍, Codex 8.8GB leak, Claude console flash (60 comments). Teams adopting AI CLI *must* validate Windows workflows in CI. |
| **Session durability > raw model quality** | 🟠 **High** — Top asks across 6+ tools: persistent memory, cross-device sync, migration reliability. Tools that solve "context loss on restart" win loyalty. |
| **ACP/MCP as the integration standard** | 🟠 **High** — Codex, Copilot, Gemini, OpenCode, Pi, DeepSeek all investing. **Tool execution over ACP** (DeepSeek #5225, Pi extensions) is the differentiator vs. chat-only. |
| **Subagent orchestration needs guardrails, not just features** | 🟠 **High** — Runaway tokens (Claude #67636), false success (Gemini #22323), ghost cards (Codex #23930). Budget APIs, turn limits, and observable state are becoming table stakes. |
| **Linux desktop app vacuum** | 🟡 **Medium** — Codex 950👍, Claude desktop regressions, Gemini Wayland gaps. First tool to ship a polished Linux-native app (not Electron wrapper) captures a vocal, sticky segment. |
| **Local-first vs. cloud-tethered split deepening** | 🟡 **Medium** — OpenCode/Pi/DeepSeek enable BYOM + local data; Claude/Codex/Copilot/Gemini optimize for managed experience. **Hybrid workflows** (local TUI + cloud model) will dominate power-user setups. |
| **Security hygiene as competitive differentiator** | 🟢 **Emerging** — Gemini patched 2 CRITICAL CVEs in 24h; Copilot ships vulnerable `adm-zip`; Claude hardens plugin/hookify supply chain. Enterprises will audit CLI supply chains. |
| **Evaluation/observability infrastructure maturing** | 🟢 **Emerging** — Gemini local `eval:report`, OpenCode 93% faster

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-08-12 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs (by community attention)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `fix(skill-creator): run_eval.py` | Fixes the core evaluation harness that powers skill-description optimization; addresses 0% recall bug, Windows stream reading, trigger detection, and parallel workers | 10+ independent reproductions of the recall=0% bug; blocks the entire description-optimization loop (`run_loop.py`, `improve_description.py`) | **Open** |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Typographic quality control for AI-generated documents: prevents orphan/widow lines, heading stranding, numbering misalignment | Addresses a universal pain point—every document Claude generates suffers from these issues; users rarely request good typography explicitly | **Open** |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` | Mechanical file-existence verification + four-dimension reasoning audit (correctness, completeness, safety, style) in damage-severity priority order | Universal, stack-agnostic quality gate; proposed as v1.3.0 with structured reasoning pipeline | **Open** |
| 4 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing skill: Testing Trophy philosophy, AAA unit patterns, React Testing Library, E2E, contract, property-based, mutation testing | Full-stack testing coverage; fills a gap in the skills catalog for systematic test engineering guidance | **Open** |
| 5 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` / `skill-security-analyzer` | Meta-skills that evaluate other skills across 5 dimensions (structure, examples, resources, security, maintainability) | Enables automated skill review; security analyzer catches trust-boundary issues like those raised in Issue #492 | **Open** |
| 6 | **[#1479](https://github.com/anthropics/skills/pull/1479)** `plan-file-hygiene` | Lifecycle management for planning artifacts (SPEC.md, TODO.md, etc.)—creation, update, archival, cleanup | Directly addresses Issue #1417: planning artifacts accumulate with no lifecycle, polluting context | **Open** |
| 7 | **[#525](https://github.com/anthropics/skills/pull/525)** `pyxel` | Retro/pixel-art/8-bit game development via Pyxel MCP server; covers write → run_and_capture → inspect → iterate loop | Niche but high-signal domain; demonstrates MCP-backed skill pattern for interactive graphical workflows | **Open** |
| 8 | **[#1302](https://github.com/anthropics/skills/pull/1302)** `color-expert` | Color naming systems (ISCC-NBS, Munsell, XKCD, RAL, CSS), color-space selection guide (OKLCH, OKLAB, CAM16), accessibility contrast | Self-contained color expertise; useful for design-system, data-viz, and frontend tasks | **Open** |

> **Note:** Multiple high-attention PRs cluster around **skill-creator tooling fixes** (#1298, #1099, #1050, #1323, #539, #1169) — a meta-theme indicating the skill-authoring pipeline is the community’s top friction point.

---

## 2. Community Demand Trends — From Issues (by comment volume & 👍)

| Rank | Theme | Representative Issues | Signal Strength |
|------|-------|----------------------|-----------------|
| 1 | **Trust & Security Hardening** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍) — community skills masquerading as official `anthropic/` namespace; [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍) — duplicate skills from bundled plugins | 🔴 Critical |
| 2 | **Organizational Skill Distribution** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) — org-wide skill library / sharing links instead of manual file uploads | 🟠 High |
| 3 | **Skill-Creator Pipeline Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍), [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments, 1 👍) — `run_eval.py` 0% trigger rate; [#202](https://github.com/anthropics/skills/issues/202) (8 comments) — skill-creator reads like docs, not an operational skill | 🟠 High |
| 4 | **Context-Window Efficiency** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments) — `claude-api` skill injects 156k tokens in one call; [#12](https://github.com/anthropics/skills/issues/12) (4 comments) — DOCX whitespace corruption | 🟡 Medium |
| 5 | **Platform & Integration Gaps** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments) — AWS Bedrock support; [#16](https://github.com/anthropics/skills/issues/16) (4 comments) — expose skills as MCPs; [#1175](https://github.com/anthropics/skills/issues/1175) — SharePoint Online permissions in skills | 🟡 Medium |
| 6 | **Agent Governance & Reasoning Quality** | [#412](https://github.com/anthropics/skills/issues/412) (6 comments) — agent-governance skill (closed); [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments) — three-gate reasoning pipeline; [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments) — compact-memory for agent state | 🟡 Medium |
| 7 | **Document Processing Robustness** | [#12](https://github.com/anthropics/skills/issues/12) (4 comments) — DOCX whitespace; [#538](https://github.com/anthropics/skills/pull/538), [#541](https://github.com/anthropics/skills/pull/541) — PDF/DOCX case-sensitivity & ID collisions | 🟢 Ongoing |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` evaluation fixes | Blocks the entire description-optimization loop; 10+ reproductions; multiple contributors converging on same root causes |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | `plan-file-hygiene` | Directly implements consensus from Issue #1417; credited to community members who framed the problem |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Universal need (every generated document); no existing skill covers typographic QC; well-scoped and tested |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Fills a catalog gap; comprehensive coverage from unit → property-based → mutation; aligns with “testing trophy” best practices |
| **[#1302](https://github.com/anthropics/skills/pull/1302)** | `color-expert` | Self-contained, no external deps; high utility for design-system, data-viz, frontend tasks; clear trigger definitions |
| **[#83](https://github.com/anthropics/skills/pull/83)** | `skill-quality-analyzer` / `skill-security-analyzer` | Enables automated skill review; directly mitigates Issue #492 (trust boundary); meta-skill leverage is high |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` | Universal quality gate; mechanical + reasoning layers; proposed as versioned release (v1.3.0) with structured pipeline |
| **[#525](https://github.com/anthropics/skills/pull/525)** | `pyxel` | Demonstrates MCP-backed interactive skill pattern; author is Pyxel maintainer; niche but reference-quality implementation |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community’s most concentrated demand is for a trustworthy, efficient skill-authoring and distribution pipeline—fixing the broken evaluation harness, securing the namespace/trust boundary, and enabling org-wide skill sharing—so that domain skills (typography, testing, color, retro-gaming, agent governance) can be reliably created, vetted, and adopted at scale.**

---

# Claude Code Community Digest — 2026-08-12

---

## 1. Today's Highlights

- **v2.1.228 released** with critical fixes for Windows Git detection, TUI revert behavior, and a rare layout error that could freeze interactive session redraws.  
- **Message queue mode** (#50246, 191 👍) remains the top community feature request — users want to queue follow-ups without interrupting active tasks.  
- **Billing disputes** from the July 17 incident (#81703, #83062) continue to surface, with users reporting unreconciled auto-recharges despite plan allowances.

---

## 2. Releases

### v2.1.228
| Fix | Impact |
|-----|--------|
| Interactive session redraw freeze after internal layout error | Restores TUI responsiveness in long-running sessions |
| `git` / Git Bash not found on Windows when launched from parent folder of Git install | Fixes Windows PATH resolution for Git-dependent workflows |
| `/tui` revert regression | Restores expected TUI toggle behavior |

[Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.228)

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#50246](https://github.com/anthropics/claude-code/issues/50246) | **Feature: Message queue mode** — queue messages instead of interrupting active tasks | Highest-voted open enhancement (191 👍); addresses core UX gap for iterative workflows | 53 comments, 191 👍 |
| [#14828](https://github.com/anthropics/claude-code/issues/14828) | **Windows: Console window flashing when executing tools** | Long-standing Windows UX regression (open since Dec 2025); affects every tool invocation | 60 comments, 36 👍 |
| [#36024](https://github.com/anthropics/claude-code/issues/36024) | **Support multiple Gmail accounts in MCP integration** | Blocks multi-account users (personal + work); 77 👍 shows strong demand | 25 comments, 77 👍 |
| [#54394](https://github.com/anthropics/claude-code/issues/54394) | **ugrep wrapper amplifies regex backtracking → V8 heap OOM on WSL2** | v2.1.117 change routes all `grep` through embedded `ugrep`; 8 GB ceiling freezes host | 27 comments, 4 👍 |
| [#76727](https://github.com/anthropics/claude-code/issues/76727) | **Cross-session coordination for independently-launched sessions** | No first-party coordination for multi-session repo work; only primitive is `PreToolUse deny` hook | 14 comments |
| [#81703](https://github.com/anthropics/claude-code/issues/81703) | **July 17 mass billing incident: credits charged despite plan allowance** | $604.71 in disputed auto-recharges; Anthropic acknowledged incident but charges unreconciled | 12 comments |
| [#71539](https://github.com/anthropics/claude-code/issues/71539) | **Mouse click to refocus terminal triggers permission prompt unintentionally** | Linux TUI/permissions regression; 22 👍 indicates widespread annoyance | 10 comments, 22 👍 |
| [#78775](https://github.com/anthropics/claude-code/issues/78775) | **Desktop app: session time-range filter only appears when Group by = State** | Desktop UI regression; filter hidden in other group modes | 8 comments, 28 👍 |
| [#67636](https://github.com/anthropics/claude-code/issues/67636) | **Parallel agent spawning causes excessive token consumption before crashing** | Agents spawn 10-15x unnecessarily, burning millions of tokens; suggests orchestrator logic flaw | 6 comments |
| [#84841](https://github.com/anthropics/claude-code/issues/84841) | **MSIX write redirection misdetected as junction-planting attack** | Blocks Cowork VM SDK install on every app update; false positive in security heuristic | 6 comments, 2 👍 (CLOSED) |

---

## 4. Key PR Progress (All 7 Active PRs)

| # | Title | Type | Status |
|---|-------|------|--------|
| [#85925](https://github.com/anthropics/claude-code/pull/85925) | docs: point remaining stale doc links at `code.claude.com` | Documentation | OPEN |
| [#85834](https://github.com/anthropics/claude-code/pull/85834) | fix: HackerOne Bug Bounty Program access issue (devcontainer `hookify` plugin) | Security/Config | OPEN |
| [#70173](https://github.com/anthropics/claude-code/pull/70173) | fix(commit-commands): detect `[gone]` branches with `git branch -vv` in `clean_gone` | Bugfix | CLOSED |
| [#85822](https://github.com/anthropics/claude-code/pull/85822) | docs: fix stale doc links and README drift in plugins and examples | Documentation | OPEN |
| [#85806](https://github.com/anthropics/claude-code/pull/85806) | fix(security-guidance): skip XSS warnings in docs (preserve for executable sources) | Security/Linting | OPEN |
| [#85243](https://github.com/anthropics/claude-code/pull/85243) | fix(skills): use spec-conformant names in plugin-dev and hookify skills | Standards/Plugin | OPEN |
| [#85716](https://github.com/anthropics/claude-code/pull/85716) | fix(hookify): load rules from ancestor `.claude` directories to prevent silent bypass | Security/Plugin | OPEN |

**Theme:** Documentation hygiene (3 PRs), plugin/security hardening (3 PRs), one closed bugfix for git gone-branch detection.

---

## 5. Feature Request Trends

1. **Non-interruptive messaging** — Queue/follow-up mode (#50246) is the clear #1 ask; users want async collaboration with the agent.
2. **Multi-account MCP** — Gmail (#36024), likely extends to other OAuth providers (GitHub, Slack, etc.).
3. **Session coordination primitives** — First-party support for multi-session repo work (#76727); current hook-based DIY approach has "silent holes."
4. **Desktop app parity** — Filtering, grouping, session management regressions (#78775) suggest desktop is lagging CLI/TUI.
5. **Agent orchestration controls** — Token/runaway-agent guards (#67636), subagent reply paths (#85949), forked-skill coordination.

---

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Evidence |
|------------|----------|
| **Windows TUI/console instability** | Console flashing (#14828, 60 comments), Git PATH issues (fixed in v2.1.228), MSIX false positives (#84841) |
| **Billing opacity & disputes** | Two high-value incidents in 3 weeks (#81703, #83062); users lack reconciliation tooling |
| **Model instruction adherence** | Cluster of reports from multiple users: ignored rejections, unverified claims, overridden stop commands, low tool execution rates (#71576, #72061, #76044, #74848, #75232, #76512, #77322) |
| **WSL2 / Linux resource explosions** | ugrep regex backtracking → OOM (#54394); permission prompt on focus (#71539) |
| **Plugin/skill ecosystem friction** | Stale docs links (3 PRs), non-conformant skill names (#85243), hookify ancestor config bypass (#85716) |
| **Agent runaway costs** | Parallel spawning burning millions of tokens (#67636); no budget/quota controls exposed |

---

*Data sourced from `anthropics/claude-code` GitHub (releases, issues, PRs updated 2026-08-11 → 2026-08-12).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-12

## 1. Today's Highlights
The Codex team shipped two rapid alpha releases (0.148.0-alpha.7 → alpha.8) while closing 15+ PRs in a single day, focusing on sandbox hardening, MCP OAuth improvements, and TUI stability. Community attention remains concentrated on the long-standing Linux desktop app request (#11023, 950👍) and a cluster of Windows-specific regressions around sandbox ACLs, memory leaks, and `codex exec` hangs. Several critical bugs surfaced in the past week: subagent UI ghosting, MCP tool-list staleness, and custom-model provider incompatibilities with the Responses API.

## 2. Releases
| Version | Type | Notes |
|---------|------|-------|
| **0.148.0-alpha.8** | Alpha | Incremental update atop alpha.7; no separate changelog published. |
| **0.148.0-alpha.7** | Alpha | Baseline for current alpha series; includes recent sandbox/permission fixes. |

*Both releases are Rust CLI builds; no desktop app bundle updates in the last 24h.*

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#11023](https://github.com/openai/codex/issues/11023) | **Linux desktop app** | Highest-voted enhancement (950👍); blocks Linux power users forced to macOS/Windows. | 207 comments, **CLOSED** (likely tracked internally) |
| [#20880](https://github.com/openai/codex/issues/20880) | **Silent `~/Documents/Codex` folder creation** | Privacy/polish issue: app litters user Documents on every launch. | 22 comments, 42👍 |
| [#37403](https://github.com/openai/codex/issues/37403) | **macOS Remote Control resume broken** | Regression after Aug 7 update breaks mobile→desktop CLI handoff. | 9 comments, 9👍 |
| [#31376](https://github.com/openai/codex/issues/31376) | **`codex exec` hangs on Windows/Linux** | No timeout/retry on pooled SSE connections; kills long-running automation. | 8 comments, 2👍 |
| [#29235](https://github.com/openai/codex/issues/29235) | **Permission prompts despite full access** | Approval prompts fire even when disabled; breaks autonomous workflows. | 3 comments, 16👍 |
| [#38059](https://github.com/openai/codex/issues/38059) | **Windows Desktop memory leak (8.8 GB idle)** | UI freezes after 1–2 messages; affects current Store build 26.803.10989. | 3 comments, filed yesterday |
| [#35470](https://github.com/openai/codex/issues/35470) | **Image file copied 150k times (400 GiB)** | Runaway disk consumption on Windows; subagent/session interaction bug. | 4 comments |
| [#37421](https://github.com/openai/codex/issues/37421) | **CLI 0.147.0: Esc-Esc backtrack broken** | Core TUI navigation regression; cannot find persisted thread prompt. | 4 comments, 26👍, **CLOSED** |
| [#37471](https://github.com/openai/codex/issues/37471) | **MCP servers not exposed on Windows** | Blocks MCP ecosystem adoption on Windows desktop. | 4 comments |
| [#19143](https://github.com/openai/codex/issues/19143) | **Paste images into CLI** | Missing clipboard image support slows frontend/DevTools debugging. | 11 comments, 7👍 |

## 4. Key PR Progress (Top 10 Merged Yesterday)

| PR | Area | Summary |
|----|------|---------|
| [#38094](https://github.com/openai/codex/pull/38094) | Guardian/Code Mode | Integration test: Guardian receives user prompt + outer `exec` source for nested escalations. |
| [#38092](https://github.com/openai/codex/pull/38092) | Core/Queue | Simplify queued user-message admission; drop persistence-wait, remove hook-specific errors. |
| [#38089](https://github.com/openai/codex/pull/38089) | MCP/OAuth | Prefer CIMD (Client ID Metadata Documents) for public-client OAuth registration; fallback to dynamic client reg. |
| [#38087](https://github.com/openai/codex/pull/38087) | gRPC/Proxy | Route gRPC code-mode sessions through shared `HttpClientFactory` → respects outbound proxy & custom CA. |
| [#38086](https://github.com/openai/codex/pull/38086) | Cloud Config | Scoped `~` path resolution against explicit home dir for execution-host context. |
| [#38084](https://github.com/openai/codex/pull/38084) | Core/Turns | Allow empty input to start a turn (emits env context only, no user-message item). |
| [#38081](https://github.com/openai/codex/pull/38081) | MCP/Approvals | Persist MCP tool approvals via `ReviewDecision`/`ApprovedMcpPolicyAmendment` across sessions. |
| [#38080](https://github.com/openai/codex/pull/38080) | Windows Sandbox | Trust nested Git repos by adding worktree root + `/*` wildcard to Git safe directories. |
| [#38078](https://github.com/openai/codex/pull/38078) | World State | Deserialize typed snapshots from borrowed JSON; apply merge patches in-place (less cloning). |
| [#38075](https://github.com/openai/codex/pull/38075) | TUI/History | Initialize chat widgets with current terminal width; saturate diff-summary to visible columns. |

*All 10 PRs authored by `copyberry[bot]` and merged 2026-08-11/12 — indicates a coordinated internal landing sprint.*

## 5. Feature Request Trends (from all 50 issues)

1. **Linux Desktop Parity** — #11023 dominates; users want native app, not just CLI.
2. **Cross-Surface Sync** — #11907, #24648: archived threads, CLI↔app↔VS Code conversation consistency.
3. **MCP Ecosystem Maturity** — #37417, #37471, #31354: dynamic tool-list updates, Windows exposure, custom-provider compatibility.
4. **Subagent/Delegation UX** — #23930, #37858, #37910: ghost cards, multi-agent with API keys, model resolution.
5. **Custom Model Provider First-Class Support** — #24648, #37379, #37858: thread listing, desktop visibility, Responses API wiring.
6. **Image/Clipboard Workflows** — #19143, #35470: paste images, prevent runaway copies.
7. **Windows Sandbox Reliability** — #32525, #34549, #38080: ACLs, apply_patch stalls, nested repos.

## 6. Developer Pain Points (Recurring High-Friction Themes)

| Pain Point | Evidence | Affected Surface |
|------------|----------|------------------|
| **Silent failures / missing timeouts** | `codex exec` hangs (#31376), SSE no retry, notify payload overflow (#18309) | CLI, `exec` automation |
| **Permission system ignores config** | Prompts despite full access/disabled approvals (#29235, #36115) | App, Desktop |
| **Windows-specific resource leaks** | 8.8 GB memory (#38059), 400 GiB disk (#35470), apply_patch 49–86s stalls (#34549) | Windows Desktop, Sandbox |
| **MCP tooling fragility** | Tool-list not refreshed (#37417), OAuth registration gaps (#38089), custom-provider rejection (#31354) | App Server, CLI, Desktop |
| **Subagent/UI state desync** | Ghost cards (#23930), model resolution errors (#37910), delegation loses handlers (#36404) | App, Desktop |
| **Cross-device conversation sync gaps** | Archive restore not reflected (#11907), thread list filters (#24648) | App, CLI, VS Code |
| **Linux second-class support** | No desktop app (#11023), RISC-V unsupported (#6150) | Platform coverage |

---

**Next Watch**: 0.148.0 stable candidate (alpha.8 → beta?), Linux desktop app roadmap, and whether the Windows memory/disk leaks get hotfixes before the next Store rollout.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-12

## Today's Highlights
The team shipped **v0.56.0-preview.1** and a new nightly (v0.56.0-nightly.20260812), headlined by a fix for **false “model capacity exhaustion” errors** that were causing spurious fallbacks and a new **local evaluation report command** (`npm run eval:report`) for behavioral evals. Two critical dependency CVEs (shell-quote, simple-git) were patched in the same window. Meanwhile, the issue backlog shows sustained pressure on **sub-agent reliability** (hangs, false success reporting, permission bypasses) and **Auto Memory quality** (retry loops, redaction gaps).

---

## Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.56.0-nightly.20260812.g5024443c7** | Nightly | • `fix(core,cli)`: Resolve false model capacity exhaustion & correct quota lookup model mapping ([#28730](https://github.com/google-gemini/gemini-cli/pull/28730))<br>• `feat(evals)`: Add local report command & developer docs ([#28369](https://github.com/google-gemini/gemini-cli/pull/28369)) |
| **v0.56.0-preview.1** | Preview | Changelog roll-up for v0.55.0-preview.1; version bump to 0.56.0-nightly baseline |
| **v0.55.1** | Patch | Fix `npm ci --ignore-scripts` in release verification; prevent workspace binary shadowing; tool registry updates |
| **v0.55.0-preview.3** | Preview Patch | Cherry-pick fix from #28730 into preview branch |

🔗 **Full changelog**: [github.com/google-gemini/gemini-cli/releases](https://github.com/google-gemini/gemini-cli/releases)

---

## Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after hitting MAX_TURNS** | Masks real failures; breaks trust in delegation | 12 comments, 2 👍 — P1, needs retest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Blocks workflows; workaround is disabling sub-agents | 8 comments, 8 👍 — P1, high user pain |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Leverage model’s bash affinity via zero-dep sandboxing** | Strategic: align tooling with model’s native POSIX strengths | 8 comments, 1 👍 — P2, large effort |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations** | Scaling eval infra (76 behavioral tests across 6 models) | 7 comments — P1, epic tracking |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads/search/mapping** | Could cut turns & token noise via precise method-bound reads | 7 comments, 1 👍 — P2, customer issue |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini rarely uses skills/sub-agents autonomously** | Undermines extensibility; requires explicit prompting | 6 comments — P2 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions forever** | Wastes cycles; no backoff/quarantine for bad transcripts | 5 comments — P2 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell exec stuck at “Waiting input” after completion** | Frequent hang on simple commands; UX blocker | 4 comments, 3 👍 — P1 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Browser agent: auto session takeover & lock recovery** | Persistent profile locks break long-running browser tasks | 4 comments — P3, customer issue |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Platform gap for Linux/Wayland users | 4 comments, 1 👍 — P1, needs retest |

---

## Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| [#28730](https://github.com/google-gemini/gemini-cli/pull/28730) | **Closed** | **Fix false capacity exhaustion & quota lookup** — corrects model mapping, preserves “Keep trying” UI during transient surges. Shipped in nightly & preview.3. |
| [#28780](https://github.com/google-gemini/gemini-cli/pull/28780) | Open | **Security: upgrade shell-quote 1.8.4 (CVE-2026-9277, CRITICAL)** — blocks command-injection vector in CLI arg parsing. |
| [#28778](https://github.com/google-gemini/gemini-cli/pull/28778) | Open | **Security: upgrade simple-git 3.32.3 (CVE-2026-28292, CRITICAL)** — mitigates repo-clone RCE risk. |
| [#28369](https://github.com/google-gemini/gemini-cli/pull/28369) | Closed | **Evals: local report command (`npm run eval:report`) + dev docs** — aggregates pass rates by model from Vitest JSON, maps to inventory policies. |
| [#28305](https://github.com/google-gemini/gemini-cli/pull/28305) | Open | **Evals: tool-call timeline formatter & failure summaries** — prints numbered tool-call trace on eval failure for faster debugging. |
| [#28599](https://github.com/google-gemini/gemini-cli/pull/28599) / [#28716](https://github.com/google-gemini/gemini-cli/pull/28716) | Closed | **Reclassify capacity exhaustion as terminal error** — stops retry hangs, triggers immediate fallback/ graceful degradation. |
| [#28729](https://github.com/google-gemini/gemini-cli/pull/28729) | Closed | **Fix IDE connection directory mismatch** — resolves Cider/VS Code fork virtual-path issues for companion extension. |
| [#28688](https://github.com/google-gemini/gemini-cli/pull/28688) | Closed | **Dynamic Cloud Workstations OAuth redirect URI** — fixes auth in remote VMs where browser runs locally. |
| [#28581](https://github.com/google-gemini/gemini-cli/pull/28581) | Open | **Skip diff hunk markers during `@` processing** — eliminates recursive glob searches, prevents heap growth on large diffs. |
| [#28768](https://github.com/google-gemini/gemini-cli/pull/28768) | Open | **Fix CI nightly release & perf tests** — resolves 403 on Wombat tags & ripgrep resolution. |

---

## Feature Request Trends (from Issues)

1. **Sub-agent autonomy & reliability** — Users want agents that *actually* use skills/tools without hand-holding, recover gracefully from turn limits, and respect permission settings (#21968, #22093, #22323).
2. **AST-aware code navigation** — Strong interest in method-level read/search (tilth, glyph) to reduce token waste and turn count (#19873, #22745, #22746).
3. **Evaluation maturity** — Push for component-level, reproducible evals with rich failure diagnostics (tool-call timelines, local reports) (#24353, #28305, #28369).
4. **Memory system hardening** — Deterministic redaction, quarantine for bad patches, backoff on low-signal sessions (#26522, #26523, #26525).
5. **Browser agent robustness** — Session takeover, Wayland support, settings.json adherence (#21983, #22232, #22267).
6. **Terminal UX polish** — Flicker-free resize, external editor corruption fix, escape-sequence handling (#21924, #22466, #24935).

---

## Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Sub-agent hangs / false success** | #21409 (1 hr hangs), #22323 (MAX_TURNS → GOAL), #21763 (bugreport lacks sub-agent context) | 🔴 High — multiple P1s, 5+ issues |
| **Shell “Waiting input” ghost state** | #25166 (simple cmds), #22465 (vite interactive prompt) | 🔴 High — 3+ reports, blocks workflows |
| **Auto Memory noise & security gaps** | #26522 (infinite retry), #26525 (post-context redaction), #26523 (silent invalid patch skip) | 🟠 Medium — 4 dedicated issues |
| **Tool explosion >128 tools → 400 error** | #24246 (400 tools), #23571 (tmp script sprawl) | 🟠 Medium — architecture limit hit |
| **Browser agent platform gaps** | #21983 (Wayland), #22232 (lock recovery), #22267 (settings ignored) | 🟠 Medium — 3+ issues, P1/P3 mix |
| **Model destructive behavior** | #22672 (git reset --force, DB risks), #22186 (get-shit-done crash) | 🟡 Emerging — safety/UX concern |

---

*Digest generated from github.com/google-gemini/gemini-cli data (releases, issues, PRs updated 2026-08-12). Links point directly to GitHub for full context.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-12

## Today's Highlights
No new releases shipped in the last 24 hours, but the issue tracker shows a cluster of regressions in v1.0.79: settings wipe on `/config model`, BigInt serialization crashes in MCP responses, and Windows plugin installs blocked by "Access denied" (OS error 5). A security finding also flags a vulnerable `adm-zip` dependency (CVE-2026-39244) in the current binary.

## Releases
*None in the last 24h.*

## Hot Issues
| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4431](https://github.com/github/copilot-cli/issues/4431) | **`/config model` wipes all settings** | User-wide model change overwrites `~/.copilot/settings.json`, losing all other config. Regression in v1.0.79. | 3 comments, 0 👍 — critical config-loss bug |
| [#4211](https://github.com/github/copilot-cli/issues/4211) | **BigInt in MCP response crashes CLI** | MCP servers returning large integers trigger `TypeError: Do not know how to serialize a BigInt`, aborting all tasks. | 3 comments — blocks MCP integrations with numeric data |
| [#4251](https://github.com/github/copilot-cli/issues/4251) | **Session resume OOM / 70-min CPU grind (v1.0.74 regression)** | Large sessions that resumed fine in 1.0.73 now spike 3–4× memory and hang one core for ~70 min. | 3 comments, 1 👍 — severe perf regression for power users |
| [#4422](https://github.com/github/copilot-cli/issues/4422) | **All Claude models disabled for Enterprise accounts** | Claude Sonnet 4/4.5/5 unavailable despite being enabled in GitHub Copilot settings; worked yesterday. | 2 comments, 3 👍 — enterprise workflow blocker |
| [#4095](https://github.com/github/copilot-cli/issues/4095) | **Windows plugin update fails while VS Code runs** | VS Code’s Copilot extension holds watcher handles on `installed-plugins`, causing "Access denied (os error 5)" on update. | 2 comments, **14 👍** — high-impact Windows friction |
| [#4151](https://github.com/github/copilot-cli/issues/4151) | **Windows plugin install fails (Access denied) for all sources** | Marketplace, GitHub repo, and local directory installs all fail with OS error 5 on Windows 11. | 3 comments, 1 👍 — broad Windows plugin breakage |
| [#4442](https://github.com/github/copilot-cli/issues/4442) | **Binary bundles vulnerable `adm-zip@0.5.17` (CVE-2026-39244)** | XRay scans flag High-severity CVE in Docker images built with CLI 1.0.79. | 0 comments — security/compliance blocker |
| [#4439](https://github.com/github/copilot-cli/issues/4439) | **CLI 1.0.79 rejects GitLab MCP OAuth metadata (RFC 8414 issuer mismatch)** | Self-managed GitLab MCP servers using Dynamic Client Registration fail auth due to strict issuer validation. | 1 comment — breaks GitLab MCP integration |
| [#4380](https://github.com/github/copilot-cli/issues/4380) | **Rubber Duck reviewer picks same model family** | Adversarial review loses value when rubber-duck subagent selects same family (e.g., both GPT) instead of complementary. | 3 comments — undermines review diversity |
| [#4451](https://github.com/github/copilot-cli/issues/4451) | **Explicit slash skill reloaded via model registry → “Skill not found”** | Skills with `disable-model-invocation: true` work via slash command but then fail when model tool retries load. | 0 comments, 2 👍 — skill invocation regression |

## Key PR Progress
| # | PR | Status | Summary |
|---|----|--------|---------|
| [#4449](https://github.com/github/copilot-cli/pull/4449) | **Migrate PR automation off `pull_request_target`** | Open (draft) | Security hardening: moves untrusted PR input to lower-privilege `pull_request` workflows; repo-write actions shifted to separate privileged workflow. |
| [#4428](https://github.com/github/copilot-cli/pull/4428) | **Add initial devcontainer configuration** | Open | First devcontainer setup for contributor onboarding; marked LGTM by author. |

*Only 2 PRs updated in the last 24h — both infrastructure-focused.*

## Feature Request Trends
1. **Session & context durability** — Preserve durable context across compactions ([#4441](https://github.com/github/copilot-cli/issues/4441)), auto-allow permissions on start ([#3877](https://github.com/github/copilot-cli/issues/3877)), and user-default model persistence across sessions ([#4434](https://github.com/github/copilot-cli/issues/4434)).
2. **Skill system maturation** — Dedupe skills from repo + plugin ([#4430](https://github.com/github/copilot-cli/issues/4430)), fix `disable-model-invocation` semantics ([#4438](https://github.com/github/copilot-cli/issues/4438)), and stop redundant model-registry reloads ([#4451](https://github.com/github/copilot-cli/issues/4451)).
3. **Model selection reliability** — Auto mode picking unavailable models ([#4445](https://github.com/github/copilot-cli/issues/4445)), rubber-duck complementary strategy override ([#4432](https://github.com/github/copilot-cli/issues/4432)), and `.claude/agents` model field overriding session model ([#4437](https://github.com/github/copilot-cli/issues/4437)).
4. **Cross-tool compatibility** — Read `.claude/rules` and `.agents/rules` ([#4440](https://github.com/github/copilot-cli/issues/4440)), GitLab MCP OAuth support ([#4439](https://github.com/github/copilot-cli/issues/4439)).
5. **UI/UX polish** — Collapsed autopilot timeline ([#2623](https://github.com/github/copilot-cli/issues/2623)), explicit file-edit approval mode ([#4444](https://github.com/github/copilot-cli/issues/4444)), light-theme color fixes ([#3750](https://github.com/github/copilot-cli/issues/3750)), backspace behavior ([#4447](https://github.com/github/copilot-cli/issues/4447)).

## Developer Pain Points
| Area | Recurring Frustration | Representative Issues |
|------|----------------------|----------------------|
| **Windows plugin management** | "Access denied (os error 5)" on install/update; VS Code watcher lock contention | [#4095](https://github.com/github/copilot-cli/issues/4095) (14 👍), [#4151](https://github.com/github/copilot-cli/issues/4151) |
| **Settings & config loss** | `/config model` nukes `settings.json`; user-default model not honored until restart | [#4431](https://github.com/github/copilot-cli/issues/4431), [#4434](https://github.com/github/copilot-cli/issues/4434) |
| **MCP integration fragility** | BigInt serialization crash; GitLab OAuth issuer mismatch; no graceful degradation | [#4211](https://github.com/github/copilot-cli/issues/4211), [#4439](https://github.com/github/copilot-cli/issues/4439) |
| **Session resume performance** | 1.0.74+ regression: OOM / 70-min CPU hang on large sessions | [#4251](https://github.com/github/copilot-cli/issues/4251) |
| **Model availability drift** | Auto mode selects unavailable models; Enterprise Claude models silently disabled | [#4422](https://github.com/github/copilot-cli/issues/4422), [#4445](https://github.com/github/copilot-cli/issues/4445) |
| **Skill system inconsistencies** | Duplicate loads, `disable-model-invocation` makes skills unreachable, slash vs. model-tool race | [#4430](https://github.com/github/copilot-cli/issues/4430), [#4438](https://github.com/github/copilot-cli/issues/4438), [#4451](https://github.com/github/copilot-cli/issues/4451) |
| **Security hygiene** | Vulnerable `adm-zip` in shipped binary blocks Docker builds | [#4442](https://github.com/github/copilot-cli/issues/4442) |

---
*Digest generated from github.com/github/copilot-cli data as of 2026-08-12 00:00 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-12

## Today's Highlights
No new releases shipped in the last 24 hours. Community attention is converging on **persistent memory across sessions** (two high-engagement issues) and a **Windows PowerShell 7 path-resolution bug** blocking D-drive launches. Meanwhile, maintainers closed seven older PRs—mostly hardening asserts → proper exceptions and fixing a TOCTOU race—while one feature PR adds configurable "thinking effort" via a new `/effort` command.

---

## Releases
*None in the last 24 h.*

---

## Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Memory System – Persistent context across sessions** | Top-voted enhancement (34 comments). Users want both AI-managed *and* user-defined memory (à la `AGENT.md`, `MEMORY.md`, daily logs) to avoid re-explaining project context every session. | 34 comments, open since Feb, updated yesterday – clear demand. |
| [#1478](https://github.com/MoonshotAI/kimi-cli/issues/1478) | **Optimize memory layer / missing docs** | Chinese-language duplicate of #1283; author shares a concrete file-layout proposal (`~/.openclaw/workspace/{SOUL,USER,MEMORY}.md + memory/*.md`). Highlights documentation gap. | 1 comment, but concrete design sketch useful for implementers. |
| [#2600](https://github.com/MoonshotAI/kimi-cli/issues/2600) | **PowerShell 7 default D: drive → path not found** | Blocks Windows users who set non-C: default start directory. Repro on v0.33. | New, 0 comments – likely affects many Win devs silently. |
| [#2601](https://github.com/MoonshotAI/kimi-cli/issues/2601) | **Quote & Reply on AI responses (Kimi Web)** | UX parity with modern chat UIs: select any span (code block, diff line, plan step) → attach follow-up. Would streamline iterative coding. | New, 0 comments – forward-looking feature request. |
| [#2599](https://github.com/MoonshotAI/kimi-cli/issues/2599) | **“Autopsy” appears in todo list during planning** | Alarmingly worded hallucination/bug in planning output (`kimi k3`, macOS, v0.34.0). Screenshot attached. | New, 0 comments – high visibility if planning is core workflow. |

---

## Key PR Progress

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#2509](https://github.com/MoonshotAI/kimi-cli/pull/2509) | **feat(kimi): configurable thinking effort & `/effort` command** | OPEN | Adds user-control over reasoning depth (resolves #2501). Builds on earlier `reasoning_effort` work (#318). |
| [#2057](https://github.com/MoonshotAI/kimi-cli/pull/2057) | **fix(acp): replace `assert` with `RuntimeError`** | CLOSED | Hardens `acp/session.py` against `-O` optimization stripping asserts. 5 sites fixed. |
| [#2056](https://github.com/MoonshotAI/kimi-cli/pull/2056) | **fix(wire): eliminate TOCTOU in `WireFile.append_record`** | CLOSED | Race-condition fix: atomic check-then-write for record appends. |
| [#2055](https://github.com/MoonshotAI/kimi-cli/pull/2055) | **fix(agentspec): `assert` → `AgentSpecError`** | CLOSED | Production-safe guard for `agent_spec.extend` invariant. |
| [#1328](https://github.com/MoonshotAI/kimi-cli/pull/1328) | **Fix minor bugs in file tools & UI feedback** | CLOSED | Corrects replacement-count math in `StrReplaceFile`; polishes UX. |
| [#1082](https://github.com/MoonshotAI/kimi-cli/pull/1082) | **fix(pyinstaller): filter missing `dateparser` cache** | CLOSED | Prevents build failure when `dateparser_tz_cache.pkl` absent. |
| [#1077](https://github.com/MoonshotAI/kimi-cli/pull/1077) | **fix: remove redundant `mode` validation in WriteFile** | CLOSED | Code cleanup; validation already enforced by schema. |
| [#1393](https://github.com/MoonshotAI/kimi-cli/pull/1393) | **fix(acp): route shell commands via terminal args** | CLOSED | Aligns ACP shell exec with current SDK (`command` + `args` + `terminal_id`); adds regression tests for bash/PowerShell. |

---

## Feature Request Trends
1. **Persistent, hierarchical memory** – automatic (AI-curated) + manual (user files) + per-session logs; cross-project & per-project scopes.  
2. **Granular thinking/reasoning control** – exposed via CLI flag (`/effort`) and config.  
3. **Rich chat UX primitives** – quote-reply, inline annotation, thread branching (Web-first, CLI parity later).  
4. **Windows-first polish** – default-directory handling, PowerShell 7+ path resolution, symlink/junction awareness.  
5. **Planning/output sanitization** – remove hallucinated/scary terms (“autopsy”), improve structured-task rendering.

---

## Developer Pain Points
- **Context loss between sessions** – #1 friction for large codebases; forces repetitive re-prompting.  
- **Windows path assumptions** – CLI assumes C: launch; breaks for D:/E: default directories in PowerShell 7.  
- **Opaque planning output** – unexpected verbs (“autopsy”) erode trust in agent autonomy.  
- **Missing memory documentation** – users reverse-engineer `~/.openclaw/workspace/` layout; no official spec.  
- **Assert-dependent internals** – multiple PRs converting `assert` → typed exceptions indicate latent `-O` fragility in prod builds.

---

*Digest compiled from GitHub API data (issues/PRs updated 2026-08-11 → 2026-08-12).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-12

## Today's Highlights
OpenCode V2 development remains intensely active with 50 issues and 50 PRs updated in the last 24 hours. The focus is squarely on TUI polish (tab system, autocomplete, experiments surface), V2 regression fixes (webfetch, plan mode, agent visibility), Windows compatibility (UTF-8, line endings, ALSA), and V1→V2 migration stability. Third-party client maintainers are flagging critical API gaps blocking V2 adoption.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#16017](https://github.com/anomalyco/opencode/issues/16017)** Go plan usage/balance API endpoint | High-demand billing transparency feature for paid tiers; enables programmatic usage monitoring | **137 👍, 33 comments** — strongest engagement in dataset; closed but signals strong user need |
| **[#10272](https://github.com/anomalyco/opencode/issues/10272)** Hidden calls to Haiku via OpenRouter | Silent model substitution burns budget and breaks trust; user configured MiniMax but billed for Claude Haiku 4.5 | **5 👍, 10 comments** — critical provider routing bug affecting cost predictability |
| **[#12548](https://github.com/anomalyco/opencode/issues/12548)** Chrome-style tab system for multi-session TUI | Fundamental workflow gap: no way to juggle multiple sessions without losing context | **10 👍, 5 comments** — PR **#41887** (plus button) and **#41862** (hidden experiments) address this |
| **[#17838](https://github.com/anomalyco/opencode/issues/17838)** Session & Subagent tabs in TUI | Orchestration pain point: multiple sessions/subagents exist but TUI can't surface them | **6 👍, 4 comments** — directly related to tab system work |
| **[#39181](https://github.com/anomalyco/opencode/issues/39181)** TUI cross-contamination with shared server | Multiple TUIs on one `opencode serve` show wrong git branches and receive foreign events | **4 comments** — architectural issue for team/shared-server workflows; see also **#41839** |
| **[#41777](https://github.com/anomalyco/opencode/issues/41777)** V2: `webfetch` returns null in Code Mode | Regression in `next` channel: tool reports success but delivers no content; absent from tool list | **3 comments** — blocks web-dependent workflows in V2 |
| **[#40778](https://github.com/anomalyco/opencode/issues/40778)** Ignored Plan Mode in V2 | Agent implements despite explicit Plan Mode selection; V1 parity gap | **1 👍, 3 comments** — see also **#41476** (plan mode modifies files) and **#40474** (mode invisible to model) |
| **[#41869](https://github.com/anomalyco/opencode/issues/41869)** V1→V2 migration fails on apostrophes | SQLite syntax error on legacy message data with single quotes; blocks upgrades | **2 comments** — data migration blocker for existing users |
| **[#41828](https://github.com/anomalyco/opencode/issues/41828)** V2 API gaps blocking third-party clients | Rust TUI maintainer identifies 5 missing capabilities for V2 port | **2 comments** — ecosystem health issue; API completeness needed |
| **[#37090](https://github.com/anomalyco/opencode/issues/37090)** `apply_patch` corrupts line endings on Windows | CRLF→LF conversion breaks Windows workflows; affects `write` tool too | **3 comments** — PR **#31658** (UTF-8 default) partially related |

---

## Key PR Progress (10 Important)

| PR | Type | Description |
|----|------|-------------|
| **[#31658](https://github.com/anomalyco/opencode/pull/31658)** | Bug fix | Sets default UTF-8 encoding for spawned subprocesses on Windows; closes **#23636, #31187, #30205, #31830, #26882** |
| **[#41887](https://github.com/anomalyco/opencode/pull/41887)** | Feature | Adds plus button to session tab bar (browser-style new tab affordance); addresses **#12548** |
| **[#41870](https://github.com/anomalyco/opencode/pull/41870)** | Feature | Implements directory autocomplete for `/cd` with recents, home/parent/nested paths; Windows fix in **#41893** |
| **[#41862](https://github.com/anomalyco/opencode/pull/41862)** | Feature | Hidden **Experiments** surface (trigger: `/baldbeard`) with per-tab prompt drafts; opt-in for in-flight features |
| **[#41884](https://github.com/anomalyco/opencode/pull/41884)** | Bug fix | Gates tool snapshot on initial MCP registration; prevents race where model sees stale tool catalog |
| **[#41888](https://github.com/anomalyco/opencode/pull/41888)** | Feature | Adds `continue` parameter to session interrupt API; resumes pending work after interruption |
| **[#41838](https://github.com/anomalyco/opencode/pull/41838)** | Refactor | Embeds `models.dev` snapshot as static import instead of compile-time define; easier refresh |
| **[#41793](https://github.com/anomalyco/opencode/pull/41793)** | Bug fix | Surfaces managed startup stderr; `opencode2 service start` now reports port-conflict guidance |
| **[#41883](https://github.com/anomalyco/opencode/pull/41883)** | Bug fix | Shows syntax-highlighted file contents after V2 `write` completes; ports **#41352** to `v2` |
| **[#41879](https://github.com/anomalyco/opencode/pull/41879)** | Perf | Accelerates client service lifecycle tests from **72.5s → 4.5s median** (93.8% faster) |
| **[#40845](https://github.com/anomalyco/opencode/pull/40845)** | Feature | Redesigns non-modal settings: dedicated Appearance/Notifications pages, real Projects/Extensions views |
| **[#41889](https://github.com/anomalyco/opencode/pull/41889)** | Chore | Aligns local desktop dev identity: shared `2.0.0-local` version, `LOCAL` titlebar badge, isolated server discovery |

---

## Feature Request Trends
1. **TUI Multi-Session Management** — Chrome-style tabs, plus button, per-tab drafts, subagent visibility (**#12548, #17838, #28191, #41887, #41862**)
2. **Notification & Awareness Systems** — VS Code notifications for agent completion, desktop minimize-to-tray, system notifications (**#39936, #18134, #7242, #13334**)
3. **Plan Mode Fidelity** — Prevent file edits/process spawns in Plan Mode; make mode visible to model (**#40778, #41476, #40474**)
4. **Windows-First Compatibility** — UTF-8 defaults, CRLF preservation, GBK/encoding support, ALSA silencing (**#31658, #37090, #37602, #41763, #41890**)
5. **V2 API Completeness** — Third-party client blockers: session management, tool catalog, mode/agent state (**#41828**)
6. **Model/Provider Expansion** — Grok 4.5 on Go/Zen, GPT-5.6 variants on Zen, AgentRouter compatibility (**#41886, #39831, #41873**)
7. **MCP & Ecosystem Integration** — Lumify MCP docs, PR tracker plugin, remote server examples (**#41822, #41857**)
8. **Silent/Background Operations** — Compaction without terminal spam, background service reliability (**#13033, #41793**)
9. **Shared Server Isolation** — Per-TUI git branch, event scoping, workspace separation (**#39181, #41839**)
10. **Migration Reliability** — V1→V2 data migration hardening, apostrophe handling, skill loading in git repos (**#41869, #41751**)

---

## Developer Pain Points
| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **V2 regressions breaking V1 workflows** | High | `webfetch` null, Plan Mode ignored, agent mode invisible, migration failures |
| **Windows-specific breakage** | High | Line endings, encoding, ALSA spam, subprocess code page — 5+ issues + PR **#31658** |
| **Shared server cross-talk** | Medium | Multiple TUIs on one server show wrong branches, receive foreign events |
| **Model routing opacity** | Medium | Hidden Haiku calls, Grok unavailable on paid plans, AgentRouter 401/content-blocked |
| **TUI discoverability & ergonomics** | Medium | Hard-coded permission prompt height, no tab system, missing autocomplete, no new-tab affordance |
| **Plan Mode trust deficit** | Medium | Agent edits files/starts processes despite explicit Plan Mode; mode not communicated to model |
| **Third-party client neglect** | Emerging | Maintainer explicitly lists 5 V2 API gaps blocking Rust TUI port |
| **Migration anxiety** | Emerging | V1→V2 migration fails on real-world data (apostrophes); skill loading broken in git repos |
| **Cost predictability** | Persistent | Go plan usage

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-12

## 1. Today's Highlights
The Pi codebase saw intense bug-fixing activity with no new release, but several critical regressions from v0.84.x were addressed: a Copilot 429 rate-limit login failure affecting large organizations, a Bun runtime crash due to missing `zlib.createZstdDecompress`, and a streaming `usage` regression that broke mid-run token accounting. Meanwhile, the TUI gained a `copyOnSelect` toggle and proper OSC 52 clipboard routing, and a new Qwen China Token Plan provider was added.

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Hot Issues (Top 10)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6187](https://github.com/earendil-works/pi/issues/6187) | **WSL GitHub Copilot login hangs after browser auth completes** | Blocks WSL users entirely; device auth succeeds but client never detects completion. | 25 comments — highest engagement; indicates widespread WSL friction. |
| [#7730](https://github.com/earendil-works/pi/issues/7730) | **High CPU (50–110%) on macOS during long sessions** | Makes Pi unusable for extended coding; memory 600–800 MB. | 8 👍, 10 comments — strong pain signal from Mac users. |
| [#7846](https://github.com/earendil-works/pi/issues/7846) | **Bun runtime crash: `zlib.createZstdDecompress is not a function`** | Hard blocker for Bun users; uncaught exception on startup. | 10 comments, 1 👍 — regression in v0.84.0/0.84.1. |
| [#7850](https://github.com/earendil-works/pi/issues/7850) | **Copilot 429 rate limit for orgs with 20+ models** | Enterprise/org users cannot log in; 429 after device auth. | 7 👍, 7 comments — affects paying Copilot Business customers. |
| [#7428](https://github.com/earendil-works/pi/issues/7428) | **Duplicate of #7850 — same 429 Copilot login failure** | Confirms scope; multiple independent reports. | 5 comments — reinforces urgency. |
| [#7553](https://github.com/earendil-works/pi/issues/7553) | **Configurable thinking level for compaction** | Users on reasoning models can’t separate summarization budget from chat budget. | 8 comments — clear feature gap for power users. |
| [#7444](https://github.com/earendil-works/pi/issues/7444) | **WebSocket retry only handles 2 error codes** | Other transient `response.failed` errors hard-stop turns, causing silent failures. | 8 comments — reliability hole in OpenAI-compatible streaming. |
| [#7836](https://github.com/earendil-works/pi/issues/7836) | **Edit fuzzy match fails on whitespace-length differences** | Breaks edits when only indentation/spacing differs; hurts small models especially. | 6 comments, 1 👍 — core editing reliability. |
| [#7911](https://github.com/earendil-works/pi/issues/7911) | **v0.84.0 removed `usage` from streaming `message_update`** | Mid-run token accounting broken; `usage` only appears at `message_end`. | 2 comments, in-progress fix via PR #7982. |
| [#7739](https://github.com/earendil-works/pi/issues/7739) | **Startup-time budget targeting jcode-comparable latency** | Explicit performance goal: close gap vs. jcode (currently 2–3× slower). | 2 comments — strategic perf initiative. |

## 4. Key PR Progress (Top 10)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#7982](https://github.com/earendil-works/pi/pull/7982) | **fix** | Preserves cumulative `usage` on JSON/RPC `message_update` events; adds regression test. Fixes #7911. |
| [#7978](https://github.com/earendil-works/pi/pull/7978) | **fix** | Normalizes single-object `edits` to array + collapses whitespace in fuzzy match. Addresses #7836, #7904. |
| [#7989](https://github.com/earendil-works/pi/pull/7989) | **feat** | Adds `qwen-token-plan-individual-cn` provider (China region). Mirrors #7659. |
| [#7866](https://github.com/earendil-works/pi/pull/7866) | **feat** | Adds `copyOnSelect` option to `TuiAltScreen` (defaults `true`), letting users disable auto-copy on mouse select. |
| [#7972](https://github.com/earendil-works/pi/pull/7972) | **fix** | Routes selection copy through host clipboard (OSC 52 fallback) so “Copied!” toast is truthful across terminals. |
| [#7865](https://github.com/earendil-works/pi/pull/7865) | **fix** | Adds `tui.select.pageUp/pageDown` keybindings to base `SelectList` and model selector. |
| [#7984](https://github.com/earendil-works/pi/pull/7984) | **fix** | Updates `grok-mermaid` to 0.2.3; fixes Mermaid rendering in coding agent (classes still ignored). |
| [#7956](https://github.com/earendil-works/pi/pull/7956) | **feat** | Renders Mermaid diagrams in HTML exports (toggleable, ANSI→HTML translation). |
| [#7981](https://github.com/earendil-works/pi/pull/7981) | **fix** | Maps `models.dev` cost tiers for *every* provider (was only GitHub Copilot). Fixes #7912. |
| [#7968](https://github.com/earendil-works/pi/pull/7968) | **feat** | **Intercom extension** — live session-to-session messaging via file mailbox + `ask_predecessor` ghost responder for handoff/co-op workflows. |

## 5. Feature Request Trends
1. **Model/Provider Flexibility** — Per-phase thinking budgets (#7553), new provider factories (Qwen CN, Cloudflare AI Gateway #7901), cost-tier mapping everywhere (#7981).
2. **Session Continuity & Handoff** — Intercom live messaging (#7968), subagent config inheritance (#7897), `/resume` count accuracy (#7931/#7960).
3. **TUI Polish** — Clickable OSC 8 links in fullscreen (#7930), scroll-position indicator (#7970), copy-on-select toggle (#7866), Kitty DCS image passthrough in tmux (#7936).
4. **Extensibility Surface** — Off-transcript model streaming for extensions (#7986), theme override CLI (`--use-theme` #7722), notify example for VS Code terminal (#7967).
5. **Startup/Resource Budgets** — Explicit latency/memory targets vs. jcode (#7739), Bun compatibility (#7846).

## 6. Developer Pain Points
- **Authentication fragility**: Copilot 429s for large orgs (#7850/#7428), WSL device-auth hang (#6187), invalid `settings.json` silently ignored with misleading “bash not found” on Windows (#7829).
- **Streaming reliability**: Missing `usage` mid-stream (#7911), SSE hangs with no inactivity timeout (#7954), WebSocket retry covers only 2 error codes (#7444).
- **Edit tool brittleness**: Single-object `edits` rejected (#7904/#7978), fuzzy match fails on whitespace variance (#7836), serialized JSON string edits bypass fix (#7944).
- **Platform-specific breakage**: Bun missing `zstd` (#7846), Windows CMD duplicate output/memory leak (#7947), VS Code integrated terminal CJK input blank (#7923), macOS Terminal.app/VTE OSC 52 ignored (#7972).
- **Configuration opacity**: Hardcoded keybindings bypass registry (#7939), root `.md` files in skill dirs loaded as skills (#7805), session JSONL version mismatch between packages (#7937).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-12

*Data source: `Hmbown/CodeWhale` (GitHub)*

---

## 1. Today's Highlights
The project is advancing on two fronts: a major architectural refactor (EPIC-005) to decompose the TUI into separate crates for better modularity, and a user-facing regression where the output area no longer expands to fill wide terminals (v0.9+). Meanwhile, six PRs landed or updated, adding Windows PiP window pinning, a new LLM provider (OrcaRouter), session-snapshot safety, and a fix for copying messages without visual chrome.

---

## 2. Releases
**No new releases in the last 24 hours.**

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** | Umbrella tracking issue for splitting the monolithic TUI into independent crates. Enables cleaner boundaries, faster compile times, and easier third-party embedding. | 2 comments, 0 👍 — early coordination phase; sub-epics and FEATs will report here. |
| [#5322](https://github.com/Hmbown/CodeWhale/issues/5322) | **Regression: output area doesn't fill wide terminals (worked in v0.8.65)** | In v0.9 the transcript/output area is capped at a max width, leaving unused whitespace on ultrawide monitors. Blocks readability for users on large displays. | 1 comment, 0 👍 — clear regression with reproduction steps; high visibility for UI/UX. |

---

## 4. Key PR Progress

| # | PR | Type | Summary |
|---|----|------|---------|
| [#5318](https://github.com/Hmbown/CodeWhale/pull/5318) | **feat(tui)** | Adds “shrink & pin on top” (PiP) for the host terminal on Windows via right-click menu or `/pin` command (640×400, always-on-top). Restores original size/state on toggle. |
| [#5321](https://github.com/Hmbown/CodeWhale/pull/5321) | **feat(provider)** | Registers **OrcaRouter** as a named provider (OpenAI-compatible gateway, 150+ models, keys prefixed `sk-orca-`). Mirrors OpenRouter wiring for model picker, config, and docs. |
| [#5320](https://github.com/Hmbown/CodeWhale/pull/5320) | **fix(session)** | Splits snapshot reads from crash recovery: new `load_session_snapshot` (side-effect-free) and `recover_session_for_resume` (returns repair stats). Safer for embedding hosts. |
| [#5319](https://github.com/Hmbown/CodeWhale/pull/5319) | **fix(tui)** | Copy Message now uses canonical source content for User/Assistant cells instead of rendered Ratatui lines; complex cells (Tool, Thinking, System) keep full-transcript path. |
| [#5225](https://github.com/Hmbown/CodeWhale/pull/5225) | **feat(acp)** | **CLOSED** — Enables ACP `session/prompt` to *execute* tool calls (file/search/git/patch/shell), not just stream text. Unblocks Zed and `acp-deepseek-adapter` integrations. |
| [#5277](https://github.com/Hmbown/CodeWhale/pull/5277) | **chore(deps)** | Bumps `docker/login-action` 4.5.2 → 4.6.0 (hardened credential handling). Dependabot maintenance. |

---

## 5. Feature Request Trends
From the open issues and PRs, the community is pushing toward:
- **Modular architecture** — Crate decomposition (EPIC-005) to support embedding, testing, and faster builds.
- **Provider extensibility** — First-class support for OpenAI-compatible gateways (OrcaRouter, OpenRouter) with consistent config/model-picker UX.
- **Terminal UX polish** — Full-width output on ultrawide displays, PiP window management (Windows), and clean copy/paste semantics.
- **ACP maturity** — Full tool execution over the Agent Client Protocol so external editors (Zed, etc.) get a *coding* agent, not just chat.

---

## 6. Developer Pain Points
- **Wide-terminal regression** — Output area capped at max width since v0.9; workflows on ultrawide monitors are degraded.
- **Session resilience** — Need for safe, side-effect-free snapshot reads while tool calls are in-flight, and explicit crash-recovery APIs for embedding hosts.
- **Copy fidelity** — Copying messages previously included visual chrome (rails, borders); developers want raw source content.
- **ACP tool execution gap** — Until #5225, ACP consumers could not run code-editing tools, limiting integration value.

---

*Generated 2026-08-12 from `Hmbown/CodeWhale` GitHub activity (issues/PRs updated in last 24h).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*