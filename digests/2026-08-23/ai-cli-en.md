# AI CLI Tools Community Digest 2026-08-23

> Generated: 2026-08-23 00:55 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-23)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is bifurcating into **platform-integrated** (Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI) and **community-driven/alternative** (OpenCode, Pi, Qwen Code, Kimi Code) tiers. All tools are converging on **multi-session persistence, agent reliability, and cross-platform parity** as table-stakes requirements. A clear pattern emerges: **Desktop/IDE wrapper instability** plagues platform tools (Claude, Codex, Copilot), while **core agent runtime correctness** (memory leaks, loop detection, session resume) dominates community-tool backlogs. Security hardening (sandboxing, supply-chain, auth) is now a continuous investment across the board.

---

## 2. Activity Comparison (2026-08-23)

| Tool | Releases (24h) | Hot Issues Tracked | PRs Updated (24h) | Top Issue Engagement (👍) |
|------|----------------|-------------------|-------------------|---------------------------|
| **Claude Code** | 2 patches (v2.1.240/241) | 10 | 0 | 748 (#18435 profile switching) |
| **OpenAI Codex** | 2 alpha (Rust) | 10 | 5 (all closed) | 394 (#25719 macOS daemon runaway) |
| **Gemini CLI** | 1 nightly (v0.56.0) | 10 | 10 (1 merged) | 8 (#21409 agent hangs) |
| **GitHub Copilot CLI** | 0 | 10 | 0 | 27 (#3709 multi-model switching) |
| **Kimi Code CLI** | 0 | 3 | 2 (open) | 0 (comments-only: 40 on #1283) |
| **OpenCode** | 0 | 10 | 10 (open) | 104 (#20695 Memory Megathread) |
| **Pi** | 0 | 10 | 10 (7 closed) | 18 (#6879 auto-compaction) |
| **Qwen Code** | 2 (v0.22.0 + nightly) | 10 | 10 (9 open) | 17 (#8102 deterministic boundaries) |
| **DeepSeek TUI** | — | — | — | — |

> **Note**: "Hot Issues" = top 10 by impact/discussion in each digest. PRs = updated in last 24h. DeepSeek TUI digest unavailable.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|--------------------------|
| **Multi-account / Profile Switching** | Claude Code (#18435, #27302), GitHub Copilot CLI (#3709, #3282), Kimi Code (#1283) | Seamless org/client context switching without full re-auth; persistent per-profile config |
| **Background Agent Reliability** | Claude Code (#75037), OpenAI Codex (#19265), Gemini CLI (#21409, #22323), Qwen Code (#9733) | Crash-loop recovery, lost completion restoration, deterministic termination, loop-detection tuning |
| **Session Persistence & Resume** | Claude Code (#88383), OpenAI Codex (#34724), Gemini CLI (#25166), OpenCode (#23362, #43277), Qwen Code (#9573, #9686) | Cross-device restore, tool-result fidelity on resume, large-session performance, model restoration |
| **Windows/WSL First-Class Support** | Claude Code (#88896), OpenAI Codex (#20730, #34724, #40163), Gemini CLI (#28968), Pi (#7547, #8484) | Hook parity, path normalization, ConPTY rendering, auto-update safety, Defender perf |
| **Sandboxing & Supply-Chain Security** | Gemini CLI (#28935 Seatbelt), OpenCode (#36376 SSRF, #40125 MCP trust), Pi (#8458 TLS retry), Qwen Code (#9699 CVE audit) | macOS Seatbelt hardening, per-MCP-server cert pinning, bounded retries, CI audit gates |
| **Model/Provider Flexibility (BYOK, Multi-Model)** | GitHub Copilot CLI (#3709, #3282), OpenCode (#34644, #44281), Pi (#8474, #8488), Qwen Code (#9757, #9758) | In-session `/model` switching, OpenRouter reasoning flags, Cloudflare AI Gateway slug mapping, llama.cpp preset visibility |
| **Observability & Debugging** | OpenAI Codex (#40161, #40068), OpenCode (#44271), Pi (#8486), Qwen Code (#9278, #9394) | Thread-source taxonomy, MCP runtime status, TUI test harnesses, review-loop telemetry |

---

## 4. Differentiation Analysis

| Dimension | Platform-Integrated Tools | Community/Alternative Tools |
|-----------|---------------------------|----------------------------|
| **Primary Focus** | Enterprise readiness, IDE/Desktop wrapper polish, billing/metering transparency | Core agent runtime correctness, extensibility, architectural experimentation |
| **Target Users** | Professional devs in managed orgs, consultants/agencies, mobile/remote workers | Power users, researchers, self-hosters, multi-model experimenters |
| **Technical Approach** | Proprietary backends, tight cloud coupling, wrapper-heavy (Electron/Tauri) | Open-core, provider-agnostic, TUI-first, local-first architectures |
| **Release Cadence** | Frequent patches (Claude: 2/24h), alpha channels (Codex), staged rollouts | Nightly/weekly (Gemini, Qwen, Pi), community-driven milestones |
| **Pain Point Profile** | **Wrapper fragility** (SIGTERM, auth browser, hook bypass), **billing opacity**, **mobile data loss** | **Memory leaks**, **session corruption**, **provider fragmentation**, **TUI event-loop blocking** |
| **Differentiators** | • Claude: Connector ecosystem, highest-profile UX gaps (748👍)<br>• Codex: Thread-source taxonomy, Guardian integration<br>• Copilot: GitHub-native auth, enterprise policy<br>• Gemini: Seatbelt sandboxing, A2A protocol | • OpenCode: Memory megathread transparency, per-MCP trust<br>• Pi: Loadout management, ConPTY test harness<br>• Qwen: Review-loop convergence, Web Shell bounded transcripts<br>• Kimi: Byte-safe file ops, plugin security model |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / High Engagement** | **Claude Code**, **OpenAI Codex**, **OpenCode** | • Claude: 1,100+ 👍 on top 2 issues, 234/168 comments<br>• Codex: 394👍 on single issue (repo record), 85 comments<br>• OpenCode: 135-comment Memory Megathread, 104👍, 95👍 on hot-reload |
| **Rapid Iteration / Shipping** | **Qwen Code**, **Gemini CLI**, **Pi** | • Qwen: v0.22.0 + nightly same day, 10 PRs active<br>• Gemini: Nightly with security fix, 10 PRs (1 merged)<br>• Pi: 7 PRs closed in 24h (Node bundle, providers, ConPTY fix) |
| **Early / Niche Communities** | **Kimi Code**, **GitHub Copilot CLI**, **DeepSeek TUI** | • Kimi: 40-comment memory thread but 0👍, 2 PRs<br>• Copilot: Top issue 27👍, 0 PRs, auth flakiness recurring<br>• DeepSeek: Digest unavailable |
| **Maturity Indicators** | | • **Security-first**: Gemini (Seatbelt), OpenCode (MCP pinning), Pi (TLS retry)<br>• **Observability investment**: Codex (thread-source), Qwen (review telemetry), OpenCode (location TTL)<br>• **Enterprise gaps**: All platform tools lack multi-account; community tools lack SSO/SCIM |

---

## 6. Trend Signals for Technical Decision-Makers

| Signal | Implication | Reference Tools |
|--------|-------------|-----------------|
| **Desktop wrappers are liability surfaces** | Electron/Tauri wrappers introduce SIGTERM, auth, hook, and rendering bugs absent in raw CLI. Invest in CLI-first or validate wrapper stability before org rollout. | Claude Code (#62202, #64630, #88896), OpenAI Codex (#25719), GitHub Copilot CLI (#4111) |
| **Session/agent state is the new data plane** | Memory leaks, resume corruption, and loop-detection false positives are P0 blockers for automation. Tools with **bounded transcripts** (Qwen #9303), **suffix compaction** (OpenCode #44264), and **convergence telemetry** (Qwen #9278) lead. | Qwen Code, OpenCode, Gemini CLI, Pi |
| **Multi-model orchestration > single-model optimization** | BYOK, in-session switching, and provider-agnostic routing are top-voted asks. Tools exposing **thread-source taxonomy** (Codex) and **loadout management** (Pi) enable this. | GitHub Copilot CLI, OpenCode, Pi, Qwen Code |
| **Windows is the differentiator, not the afterthought** | ConPTY drift, path normalization, Defender I/O, and hook parity determine Windows adoption. Pi’s test harness (#8486) and Codex’s 50GB RAM bug (#40163) show the spectrum. | Pi, OpenAI Codex, Claude Code, Gemini CLI |
| **Supply-chain security is now continuous** | CVE audit gates (Qwen #9699), per-MCP cert pinning (OpenCode #40125), Seatbelt hardening (Gemini #28935) — expect SBOM/attestation requirements in procurement. | Qwen Code, OpenCode, Gemini CLI, Pi |
| **Community-driven tools iterate faster on core runtime** | OpenCode’s memory megathread, Pi’s ConPTY fix, Qwen’s review-loop convergence — open backlogs with public diagnostics outpace closed-platform bug triage. | OpenCode, Pi, Qwen Code, Kimi Code |

---

## Bottom Line for Decision-Makers

- **For managed enterprise deployments**: Prioritize tools with **CLI stability over Desktop polish** (Claude Code CLI > Desktop, Codex CLI > Desktop). Demand multi-account SLA and Windows hook parity.
- **For automation/CI pipelines**: **Qwen Code** (bounded transcripts, review convergence) and **OpenCode** (suffix compaction, location TTL) show strongest runtime correctness signals.
- **For multi-model/byok workflows**: **GitHub Copilot CLI** (if GitHub-native), **OpenCode** (provider-agnostic), **Pi** (loadout management) lead; avoid tools with single-model session pinning.
- **For security-sensitive environments**: **Gemini CLI** (Seatbelt), **OpenCode** (MCP trust pinning), **Pi** (TLS retry classification) have shipped hardening; verify others’ CVE response time (Qwen: CI blocked 2+ days).

*Data as of 2026-08-23 00:00 UTC. All links point to live GitHub issues/PRs.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-08-23 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator` eval fix | Fixes `run_eval.py` reporting 0% recall for all skill descriptions, breaking the description-optimization loop. Includes Windows stream-reading, trigger detection, and parallel-worker fixes. | Core tooling bug blocking skill-author iteration; 10+ independent reproductions cited in linked Issue #556. | 🟡 Open (updated 2026-06-23) |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Prevents orphan words, widow headers, and numbering misalignment in AI-generated documents (PDF, DOCX, HTML). | Addresses a universal pain point: “users rarely ask for good typography but always notice bad typography.” | 🟡 Open (updated 2026-03-13) |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` | Mechanical file-existence verification → four-dimension reasoning audit (correctness, completeness, safety, style) in damage-severity priority order. Universal, stack-agnostic. | Novel “quality gate” meta-skill; author also proposed a three-gate pipeline in [Issue #1385](https://github.com/anthropics/skills/issues/1385). | 🟡 Open (updated 2026-07-02) |
| 4 | **[#568](https://github.com/anthropics/skills/pull/568)** `servicenow` | Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, Vulnerability Response, SecOps, IntegrationHub. | Enterprise demand signal; long-lived PR (Mar–Aug 2026) with ongoing updates. | 🟡 Open (updated 2026-08-12) |
| 5 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing-stack skill: Testing Trophy philosophy, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing, CI integration. | Fills a gap in the catalog for systematic test-authoring guidance. | 🟡 Open (updated 2026-04-21) |
| 6 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` | Create, fill, read, convert OpenDocument Format (.odt, .ods) via `pyxel-mcp`; trigger on ODT/ODS/ODF/LibreOffice keywords. | Open-standard document interoperability; complements existing `docx`/`pdf` skills. | 🟡 Open (updated 2026-04-14) |
| 7 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills evaluating structure/docs (20%), examples, resources, security, maintainability; security analyzer checks for injection, secrets, excessive perms. | Directly addresses the trust-boundary concern raised in [Issue #492](https://github.com/anthropics/skills/issues/492). | 🟡 Open (updated 2026-01-07) |
| 8 | **[#210](https://github.com/anthropics/skills/pull/210)** `frontend-design` (revamp) | Clarifies and makes actionable the existing frontend-design skill; ensures every instruction is executable in a single conversation. | Quality-of-life improvement for a high-use skill; author emphasizes “operational over educational” tone. | 🟡 Open (updated 2026-03-07) |

> **Note:** PR comment counts are unavailable in the export; ranking blends issue linkage, recency, scope, and community signals (👍, cross-references).

---

## 2. Community Demand Trends (from Issues)

| Trend | Evidence (Top Issues) | Signal Strength |
|-------|----------------------|-----------------|
| **Supply-chain trust & namespace security** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍): Community skills published under `anthropic/` namespace impersonate official skills. | 🔴 Critical |
| **Organizational skill sharing & distribution** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍): Org-wide library / direct sharing links needed; current manual upload flow is friction-heavy. | 🟠 High |
| **Skill-author tooling reliability (Windows + eval loop)** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050): `run_eval.py` 0% trigger rate, WinError 10038/2, `claude.cmd` vs `claude` executable. | 🟠 High |
| **Meta-skills for skill quality & governance** | [#83](https://github.com/anthropics/skills/pull/83) (PR), [#412](https://github.com/anthropics/skills/issues/412) (6 comments): `skill-quality-analyzer`, `skill-security-analyzer`, proposed `agent-governance`. | 🟡 Growing |
| **Context-window efficiency & token hygiene** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments): `claude-api` skill injects ~156k tokens in one call; [#1385](https://github.com/anthropics/skills/issues/1385) proposes three-gate reasoning pipeline. | 🟡 Growing |
| **Enterprise/platform-specific skills** | [#568](https://github.com/anthropics/skills/pull/568) ServiceNow, [#181](https://github.com/anthropics/skills/pull/181) SAP-RPT-1-OSS, [#1175](https://github.com/anthropics/skills/issues/1175) SharePoint Online. | 🟢 Steady |
| **Interoperability: MCP exposure & Bedrock support** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments): “Expose Skills as MCPs”; [#29](https://github.com/anthropics/skills/issues/29) (4 comments): AWS Bedrock usage. | 🟢 Steady |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It’s Poised to Merge |
|----|-------|---------------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval/Windows fix | Blocks the entire skill-author feedback loop; multiple independent fixes converging (also #1099, #1050). |
| **[#538](https://github.com/anthropics/skills/pull/538)** | `pdf` case-sensitivity fix | Trivial 8-line rename fix; breaks on case-sensitive FS; low risk, high usability. |
| **[#539](https://github.com/anthropics/skills/pull/539)** | `skill-creator` YAML description guard | Prevents silent front-matter corruption; 1-line pre-parse validation. |
| **[#541](https://github.com/anthropics/skills/pull/541)** | `docx` tracked-change `w:id` collision fix | Prevents document corruption; root-cause identified (shared ID space). |
| **[#1538](https://github.com/anthropics/skills/pull/1538)** | Spec compliance for `template/` & one other skill | Fails `skills-ref validate`; fixing brings repo into conformance with its own spec. |
| **[#509](https://github.com/anthropics/skills/pull/509)** | `CONTRIBUTING.md` | Addresses the #1 community-health gap (repo at 25% health score); straightforward docs PR. |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Comprehensive, well-scoped, fills a catalog gap; no open objections. |
| **[#525](https://github.com/anthropics/skills/pull/525)** | `pyxel` (retro game dev) | Niche but complete; MCP-backed; author is Pyxel maintainer. |

---

## 4. Skills Ecosystem Insight

> **The community’s most concentrated demand is for trustworthy, composable skill tooling: reliable author-time evaluation, secure distribution without namespace spoofing, and org-scale sharing—so that skills become a safe, shareable primitive rather than a fragmented, manual copy-paste workflow.**

---

# Claude Code Community Digest — 2026-08-23

---

## 1. Today's Highlights

Two patch releases (v2.1.240 → v2.1.241) shipped in the last 24 hours, both focused on bug fixes and reliability improvements. Community discussion remains dominated by two long-standing, high-engagement feature requests: **multi-account support for Connectors** (#27302, 357 👍) and **profile switching in the Desktop app** (#18435, 748 👍). A cluster of Desktop/VS Code stability issues (SIGTERM every 5 min, background agent crashes, hook failures on Windows) suggests the embedded runtime wrapper needs attention.

---

## 2. Releases

| Version | Date | Summary |
|---------|------|---------|
| **[v2.1.241](https://github.com/anthropics/claude-code/releases/tag/v2.1.241)** | 2026-08-23 | Bug fixes and reliability improvements |
| **[v2.1.240](https://github.com/anthropics/claude-code/releases/tag/v2.1.240)** | 2026-08-22 | Bug fixes and reliability improvements |

> No detailed changelogs provided; both are maintenance patches.

---

## 3. Hot Issues (Top 10 by Impact & Engagement)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **[#27302](https://github.com/anthropics/claude-code/issues/27302)** | **Support multiple Connector accounts (same connector, different accounts)** | Blocks orgs using multiple GitHub/GitLab/Slack accounts; top-voted open enhancement. | 234 comments, **357 👍**, open since Feb 2026 |
| **[#18435](https://github.com/anthropics/claude-code/issues/18435)** | **Multiple Claude accounts in Desktop app with easy switching** | Highest-engagement issue; fundamental UX gap for consultants/agencies. | 168 comments, **748 👍**, open since Jan 2026 |
| **[#64630](https://github.com/anthropics/claude-code/issues/64630)** | **macOS: Claude doesn't use default browser for login** | Auth flow breaks on non-Safari defaults; affects all macOS Desktop users. | 18 comments, 26 👍, updated today |
| **[#51267](https://github.com/anthropics/claude-code/issues/51267)** | **Remote Control (mobile): session hangs mid-execution, no remote unstick** | Mobile workflows unusable for long tasks; only local `Esc` recovers. | 17 comments, 17 👍, has repro |
| **[#75037](https://github.com/anthropics/claude-code/issues/75037)** | **Background agents: fast termination, crash-loop on attach, lost completions** | Core `--bg`/`claude agents` workflow unreliable for CI/automation. | 9 comments, detailed multi-symptom report |
| **[#62202](https://github.com/anthropics/claude-code/issues/62202)** | **Desktop/VS Code: process SIGTERM every exactly 300s (exit 143)** | Deterministic kill breaks long sessions; CLI unaffected → wrapper bug. | 7 comments, 3 👍, has repro |
| **[#88383](https://github.com/anthropics/claude-code/issues/88383)** | **2.1.238 regression: CLI `entrypoint: "cli"` persists empty thinking husks** | Session JSONL polluted; breaks tooling that parses thinking blocks. | 3 comments, 1 👍, regression tagged |
| **[#88416](https://github.com/anthropics/claude-code/issues/88416)** | **Benign coding stopped by `reasoning_extraction`; follow-up refused as `cyber`** | Safety false positive + meta-refusal chills legitimate security reporting. | 2 comments, 1 👍, high-severity UX |
| **[#85924](https://github.com/anthropics/claude-code/issues/85924)** | **Mobile: queued composer text silently discarded** | Data loss during "Queue feedback…" mode; affects Android app. | 5 comments, 2 👍 |
| **[#88896](https://github.com/anthropics/claude-code/issues/88896)** | **Windows: `PreToolUse` hooks never fire (v2.1.240)** | Security/policy hooks completely bypassed on Windows; other hooks work. | 1 comment, filed today, has repro |

---

## 4. Key PR Progress

**No pull requests updated in the last 24 hours.**  
The repository shows 0 PRs with recent activity, suggesting fixes for the above issues are either not yet opened or are being developed internally.

---

## 5. Feature Request Trends (Distilled from All Issues)

| Theme | Representative Issues | Signal Strength |
|-------|----------------------|-----------------|
| **Multi-account / Profile Management** | #27302 (Connectors), #18435 (Desktop), #73390 (session groups) | **Very High** — 1,100+ combined 👍 |
| **Background Agent Reliability** | #75037 (crash-loop, lost completions), #88907 (active-first sort), #88884 (Docker onboarding loop) | **High** — multiple distinct failure modes reported |
| **Mobile / Remote Control Parity** | #51267 (hang/no unstick), #85924 (queue discard), #83881 (voice code-switching) | **Medium-High** — mobile gaps block on-the-go devs |
| **Safety Filter Tuning** | #88416 (reasoning_extraction → cyber), #67622 (domain terminology), #73409 (local review mode) | **Medium** — false positives chilling legitimate work |
| **Desktop App Stability** | #62202 (SIGTERM), #64630 (browser), #88600 (CoworkVM crash) | **Medium** — wrapper-specific, not CLI |
| **Hooks & Extensibility** | #88896 (Windows PreToolUse), #88904 (Slack MCP), #85408 (notification impersonation) | **Emerging** — critical for enterprise policy |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Account switching is non-existent** — Users manage multiple clients/orgs but must fully log out/in; top two issues by 👍 are both about this.
2. **Desktop/VS Code wrapper is fragile** — Deterministic SIGTERM (5 min), auth browser mismatch, hook bypass on Windows, CoworkVM crashes — none affect raw CLI.
3. **Background agents (`--bg`) are production-risky** — Silent termination, crash-loop on reattach, lost completion records, Docker onboarding loops.
4. **Mobile/remote control has data-loss bugs** — Queued input discarded, sessions hang with no remote recovery, voice dictation can't handle code-switching.
5. **Safety filters over-block & lack override** — `reasoning_extraction` stops benign code; drafting a bug report about it gets refused as `cyber`; no project-level exemption for domain terminology.
6. **Session persistence inconsistencies** — Thinking blocks saved as empty husks (regression in 2.1.238), commit attribution hardcoded to Opus 4.7 regardless of model.
7. **Windows is a second-class platform** — `PreToolUse` hooks silently no-op; CoworkVM permission errors require manual Task Manager kill + Repair.

---

*Generated from github.com/anthropics/claude-code data as of 2026-08-23 00:00 UTC. Links point to live issues.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-23

## 1. Today's Highlights
- **Critical macOS stability issue dominates discussion**: Issue [#25719](https://github.com/openai/codex/issues/25719) (394 👍, 85 comments) reports Codex Desktop triggering `syspolicyd`/`trustd` runaway on macOS, consuming excessive CPU/memory — a top-priority regression for Darwin users.
- **Rate-limit confusion persists**: Multiple issues ([#33685](https://github.com/openai/codex/issues/33685), [#32707](https://github.com/openai/codex/issues/32707), [#30816](https://github.com/openai/codex/issues/30816)) indicate weekly limits are draining at pre-change velocities and 5-hour buckets have vanished for Pro users, suggesting billing/metering regressions.
- **Two alpha Rust releases shipped** (`0.150.0-alpha.7`, `0.149.0-alpha.7.2`) alongside 5 merged PRs improving TUI cursor handling, thread-source classification for exec, and MCP runtime status reporting.

---

## 2. Releases
| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.150.0-alpha.7` | Alpha | Latest bleeding-edge Rust toolchain build; no changelog provided in release notes. |
| `rust-v0.149.0-alpha.7.2` | Alpha | Patch to the 0.149 alpha line; likely contains targeted fixes backported from main. |

> **Note**: Both are `alpha` builds — intended for internal/CI validation. Production users should track `stable` or `beta` channels.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#25719](https://github.com/openai/codex/issues/25719) | **macOS: `syspolicyd`/`trustd` CPU & memory runaway** | Blocks daily workflow on Apple Silicon; system daemons spiral when Codex runs. | 394 👍, 85 comments — **highest engagement in repo history** |
| [#33685](https://github.com/openai/codex/issues/33685) | **Weekly limit draining at old 5-hour rate** | Users hit caps mid-day despite "normal" usage; suggests metering bug post-limit restructure. | 15 👍, 28 comments |
| [#20730](https://github.com/openai/codex/issues/20730) | **Custom Pets fail in WSL (path normalization)** | Breaks personalization for Windows+WSL devs; path translation mismatches `.codex` dir. | 28 👍, 23 comments |
| [#37674](https://github.com/openai/codex/issues/37674) | **Bedrock GPT-5.6 Sol lacks explicit cache controls** | High cache-write spend on agentic workloads; no `prompt_cache_breakpoint` support. | 12 👍, 13 comments *(CLOSED — fix likely in flight)* |
| [#35300](https://github.com/openai/codex/issues/35300) | **CLI cannot emit `prompt_cache_breakpoint` for GPT-5.6** | Prevents prefix caching reuse; increases latency/cost on long sessions. | 4 👍, 6 comments |
| [#35555](https://github.com/openai/codex/issues/35555) | **CLI hard-fails on `logs_2.sqlite` write lock (5s timeout, no retry)** | Boot-blocker if any process holds telemetry DB; no backoff/retry logic. | 1 👍, 5 comments |
| [#19265](https://github.com/openai/codex/issues/19265) | **Background exec deletes `~/.codex/skills/.system` intermittently** | System skills (imagegen, openai-*) vanish mid-session; breaks tool availability. | 6 👍, 10 comments |
| [#34724](https://github.com/openai/codex/issues/34724) | **CLI/TUI shows blank terminal on resuming long threads** | Windows users on 0.145.0 see no progress output; session appears frozen. | 3 👍, 7 comments |
| [#40163](https://github.com/openai/codex/issues/40163) | **Windows `codex.exe` consumes 50+ GB RAM and crashes** | New report (today); bundled process OOMs on Pro machines. | 0 👍, 2 comments — *watch for escalation* |
| [#31434](https://github.com/openai/codex/issues/31434) | **`apply_patch` modifies files outside writable roots without approval** | Sandbox escape risk; tool writes outside permitted directories silently. | 0 👍, 3 comments — *security-relevant* |

---

## 4. Key PR Progress (All 5 PRs updated in last 24h)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#40166](https://github.com/openai/codex/pull/40166) | **Move TUI cursor before showing it** | OPEN | Fixes stray blinking cursor on Windows ([#39710](https://github.com/openai/codex/issues/39710)); reorders cursor positioning before visibility. Includes regression test. |
| [#40161](https://github.com/openai/codex/pull/40161) | **Allow exec callers to classify new threads** | CLOSED | Adds `--thread-source <SOURCE>` to `codex exec`; propagates to forks. Defaults to `user`. Exposes `threadSource` in TS SDK. |
| [#40155](https://github.com/openai/codex/pull/40155) | **Expose thread source in CLI & TypeScript SDK** | CLOSED | Complements #40161; enables integrations to attribute agent work to initiating feature (app-server/Python SDK already supported). |
| [#40150](https://github.com/openai/codex/pull/40150) | **Use thread source metadata for Guardian classifiers** | CLOSED | Replaces classifier-specific fields with unified `thread_source: guardian_classifier`; updates sampler/extension tests. |
| [#40068](https://github.com/openai/codex/pull/40068) | **Report runtime MCP connection status** | CLOSED | Adds nullable `runtimeStatus` to `mcpServerStatus/list` for thread-scoped live connection state (vs. cached inventory). |

> **Theme**: Thread-source taxonomy & observability — enabling richer analytics, billing attribution, and Guardian safety classification.

---

## 5. Feature Request Trends (Distilled from Issues)

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Cross-platform path normalization** | [#20730](https://github.com/openai/codex/issues/20730) (WSL), [#40100](https://github.com/openai/codex/issues/40100) (Visualize), [#40147](https://github.com/openai/codex/issues/40147) (Claude import) | Need unified virtual FS layer translating Win32/WSL/macOS paths consistently across skills, plugins, imports. |
| **Session portability (CLI ↔ Desktop)** | [#40055](https://github.com/openai/codex/issues/40055) (closed but signals demand), [#34724](https://github.com/openai/codex/issues/34724) (resume UX) | Users expect seamless handoff; transcript/history sync is incomplete. |
| **Explicit cache control for new models** | [#37674](https://github.com/openai/codex/issues/37674), [#35300](https://github.com/openai/codex/issues/35300) | GPT-5.6 Sol/5.6 introduce `prompt_cache_breakpoint`; Codex must surface this in CLI, SDK, Bedrock paths. |
| **Guardian/thread-source observability** | PRs #40161, #40155, #40150 | Platform investing in structured metadata for safety, billing, and debugging — expect more `threadSource` endpoints. |
| **MCP runtime visibility** | #40068 | Moving from static inventory → live connection health; prerequisite for reliable tool calling. |

---

## 6. Developer Pain Points (Recurring High-Frequency Frustrations)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **macOS system daemon runaway** | Critical (1) but extreme severity | [#25719](https://github.com/openai/codex/issues/25719) — 394 👍 indicates widespread impact |
| **Rate-limit opacity & regression** | High (4+ issues) | [#33685](https://github.com/openai/codex/issues/33685), [#32707](https://github.com/openai/codex/issues/32707), [#30816](https://github.com/openai/codex/issues/30816), [#37674](https://github.com/openai/codex/issues/37674) — users cannot predict/control spend |
| **Windows/WSL path & sandbox fragility** | Medium-High (5+ issues) | [#20730](https://github.com/openai/codex/issues/20730), [#34227](https://github.com/openai/codex/issues/34227), [#40100](https://github.com/openai/codex/issues/40100), [#34928](https://github.com/openai/codex/issues/34928), [#24453](https://github.com/openai/codex/issues/24453) |
| **Skill system instability** | Medium (3 issues) | [#19265](https://github.com/openai/codex/issues/19265) (auto-delete), [#14941](https://github.com/openai/codex/issues/14941) (placement confusion), [#40147](https://github.com/openai/codex/issues/40147) (import path rewrite) |
| **TUI/CLI rendering & resume bugs** | Medium (3 issues) | [#34724](https://github.com/openai/codex/issues/34724) (blank resume), [#39710](https://github.com/openai/codex/issues/39710) (stray cursor), [#31624](https://github.com/openai/codex/issues/31624) (full redraw) |
| **Auth/session flakiness** | Medium (3 issues) | [#39803](https://github.com/openai/codex/issues/39803) (repeated sign-in), [#39883](https://github.com/openai/codex/issues/39883) (0.149.0 401), [#40073](https://github.com/openai/codex/issues/40073) (VSCode 401) |

> **Actionable insight**: The macOS daemon issue (#25719) and rate-limit cluster are **P0 blockers** for significant user cohorts. Windows/WSL path handling is a **chronic P1** affecting daily workflows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-23

## 1. Today's Highlights
- **Nightly v0.56.0** shipped a critical macOS sandbox hardening fix (PR #28935) that isolates Docker/container runtime sockets and binaries in Seatbelt profiles to prevent sandbox escape via VirtioFS mounts.  
- **Security hardening** continues: PR #28902 closes a variable-expansion bypass (GHSA-wpqr-6v78-jr5g) in bash/PowerShell substitution detection.  
- **Agent reliability** remains the top pain point—multiple P1/P2 issues track subagent hangs, incorrect success reporting after `MAX_TURNS`, and the generalist agent stalling indefinitely.

---

## 2. Releases
| Version | Date | Key Changes |
|---------|------|-------------|
| `v0.56.0-nightly.20260822.g5411f113c` | 2026-08-22 | **fix(sandbox)**: Isolate Docker/container runtime sockets, CLIs, Mach/XPC lookups, and POSIX shared memory in macOS Seatbelt profiles ([#28935](https://github.com/google-gemini/gemini-cli/pull/28935)). New contributor **@josebalius**. |

---

## 3. Hot Issues (Top 10 by Community Signal)

| Issue | Priority/Area | Why It Matters | Community Reaction |
|-------|---------------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | P1, agent | Subagent reports `GOAL` success after hitting `MAX_TURNS` with **zero analysis done**—masks real failures. | 13 comments, 👍2 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | P1, agent | Generalist agent **hangs forever** on simple ops (folder creation); only workaround is disabling sub-agents. | 8 comments, 👍8 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | P1, core | Shell commands **stuck at “Waiting input” after completion**; blocks non-interactive workflows. | 4 comments, 👍3 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | P2, agent | Model **rarely invokes custom skills/sub-agents autonomously** even when highly relevant. | 6 comments |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | P2, agent | Auto Memory **retries low-signal sessions indefinitely**, wasting cycles and polluting inbox. | 5 comments |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | P2, agent (EPIC) | Leverage model’s native bash affinity via **zero-dep OS sandboxing + post-exec intent routing**—architectural shift. | 8 comments, 👍1 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | P2, agent (EPIC) | Assess **AST-aware file reads/search/mapping** to reduce token noise and misaligned reads. | 7 comments, 👍1 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | P2, agent | **400 error when >128 tools** registered; needs smarter tool-scoping. | 3 comments |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | P3, agent | Browser agent **fail-fast on locked profile**; needs automatic session takeover/lock recovery. | 4 comments |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | P2, agent | Model occasionally uses **destructive git/DB commands** (`reset --hard`, `force`) when safer alternatives exist. | 3 comments, 👍1 |

---

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Area | Summary |
|----|--------|------|---------|
| [#28935](https://github.com/google-gemini/gemini-cli/pull/28935) | **Merged → Released** | security/sandbox | macOS Seatbelt: deny container sockets, binaries, XPC, shm to block VirtioFS escape. |
| [#28902](https://github.com/google-gemini/gemini-cli/pull/28902) | Open | security | Block `$VAR`/`${VAR}` expansion bypass (GHSA-wpqr-6v78-jr5g); harden dedup workflow. |
| [#28968](https://github.com/google-gemini/gemini-cli/pull/28968) | Open | extensions | Dedupe symlinked/junctioned skills dirs (fixes Windows `.agents` ↔ `.gemini` junctions). |
| [#28967](https://github.com/google-gemini/gemini-cli/pull/28967) | Open | core | Prevent `clearTerminal` ANSI escape from wiping scrollback in standard buffer mode (Linux). |
| [#28966](https://github.com/google-gemini/gemini-cli/pull/28966) / [#28965](https://github.com/google-gemini/gemini-cli/pull/28965) / [#28963](https://github.com/google-gemini/gemini-cli/pull/28963) | Open | docs/extensions | Fix `excludeTools` examples: bare tool names only; command-level blocking belongs in policy engine. |
| [#27754](https://github.com/google-gemini/gemini-cli/pull/27754) | Open | core/a2a | Add missing `return` after 501 in A2A `/tasks/metadata` to prevent `ERR_HTTP_HEADERS_SENT`. |
| [#27860](https://github.com/google-gemini/gemini-cli/pull/27860) | Open | core | Reset slash-command conflict dedupe when conflicts reappear (fixes silent re-conflicts). |
| [#27862](https://github.com/google-gemini/gemini-cli/pull/27862) | Open | core/ui | Preserve executing subagent tool calls in UI (they were disappearing while active). |
| [#28940](https://github.com/google-gemini/gemini-cli/pull/28940) | Open | a2a-server | Clear stale cancellation error on new message turns—fixes GCA “Execution aborted” loops. |
| [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) | Open | extensions | Require consent for env changes; sanitize runtime-altering vars injected into MCP servers. |

---

## 5. Feature Request Trends
1. **AST-aware tooling** — Precise method-level reads, symbol navigation, and codebase mapping to cut token waste ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873), [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
2. **Persistent, file-based task tracking** — Replace in-context `WriteToDo` with CRUD task files to survive context rot and session boundaries ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836), [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)).
3. **Tactful Extraction / surgical reads** — Hierarchical discovery (grep → AST → targeted read) to cap per-turn token growth ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561)).
4. **Subagent observability** — Share/traverse subagent trajectories via `/chat share` for eval and debugging ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
5. **Smarter tool scoping** — Dynamic tool limiting (>128 tools causes 400s) and automatic skill/sub-agent invocation ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246), [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).

---

## 6. Developer Pain Points (Recurring Frustrations)
- **Agent hangs & false successes**: Generalist agent stalls; subagents claim `GOAL` success after `MAX_TURNS` with no work done ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)).
- **Shell “zombie” state**: Commands finish but UI shows “Awaiting input,” blocking automation ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)).
- **Skill/sub-agent discovery broken**: Symlinks/junctions (Windows) cause double-scanning or invisibility ([#28944](https://github.com/google-gemini/gemini-cli/issues/28944) via [#28968](https://github.com/google-gemini/gemini-cli/pull/28968), [#20079](https://github.com/google-gemini/gemini-cli/issues/20079)).
- **Auto Memory noise**: Low-signal sessions retry forever; invalid patches silently skipped but still summarized ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).
- **Browser agent fragility**: Fails on Wayland, ignores `settings.json` (`maxTurns`), hard-fails on profile locks ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267), [#22232](https://github.com/google-gemini/gemini-cli/issues/22232)).
- **Documentation mismatches**: `excludeTools` examples used glob patterns that never match; users misconfigure policies ([#28966](https://github.com/google-gemini/gemini-cli/pull/28966), [#28963](https://github.com/google-gemini/gemini-cli/pull/28963)).
- **Terminal UX regressions**: Scrollback cleared on static refresh; resize flicker on large histories ([#28967](https://github.com/google-gemini/gemini-cli/pull/28967), [#21924](https://github.com/google-gemini/gemini-cli/issues/21924)).

---

*Digest generated from github.com/google-gemini/gemini-cli activity (2026-08-22 → 2026-08-23).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-23

## Today's Highlights
No new releases in the past 24 hours. Community focus remains on **BYOK/model flexibility** (two top-voted issues with 50+ combined 👍) and **stability regressions** in cloud sessions, MCP integration, and Windows auto-updates. Three new triage issues filed today signal emerging pain points in agent execution, cloud provisioning, and telemetry configuration.

---

## Releases
*No releases published in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#3709](https://github.com/github/copilot-cli/issues/3709)** – Allow `/model` to switch between multiple models, including BYOK/local providers, in one session | Top-voted open issue (27 👍). Unblocks multi-model workflows; currently BYOK pins a session to a single model via `COPILOT_MODEL` env var. | 5 comments, strong consensus for in-session switching. |
| **[#3282](https://github.com/github/copilot-cli/issues/3282)** – Add multiple BYOK model capability in Copilot CLI | 26 👍. Complements #3709; requests first-class support for multiple concurrent BYOK models without session restart. | 9 comments; users describe workaround friction (terminate session, swap env var). |
| **[#2306](https://github.com/github/copilot-cli/issues/2306)** – “Not authorized” error requiring enterprise policy (recurs 2–3×/week) | Recurring auth failure for enterprise users; `/context` returns policy block. Impacts productivity unpredictably. | 3 👍, 7 comments; intermittent nature makes root-cause elusive. |
| **[#4370](https://github.com/github/copilot-cli/issues/4370)** – MCP initialization fails when `server/discover` returns `-32602` (FastMCP incompatibility) | Blocks MCP adoption for FastMCP users. CLI treats `-32602` as fatal instead of graceful fallback. | 1 👍, 2 comments; clear spec mismatch. |
| **[#4514](https://github.com/github/copilot-cli/issues/4514)** – Unable to restore remote session locally via `/resume` | Session portability broken; UI shows session but restore fails silently. | 1 👍, 1 comment; includes screenshots. |
| **[#4111](https://github.com/github/copilot-cli/issues/4111)** – Windows: auto-update leaves `copilot.exe.old` running at 100% CPU | Orphaned processes persist after in-place update, consuming CPU. Platform-specific but high severity for Windows devs. | 0 👍, 1 comment; detailed repro steps. |
| **[#4566](https://github.com/github/copilot-cli/issues/4566)** – Agent repeatedly acknowledges work without executing tool actions (v1.0.80, gpt-5.3-codex) | New regression: agent “hallucinates” tool calls, stalling automation. | 0 👍, 1 comment; filed today with version/model context. |
| **[#4568](https://github.com/github/copilot-cli/issues/4568)** – `--cloud` owner picker hangs, reconnect crashes, task polling hits 429 | Cloud workflow broken end-to-end: owner discovery, provisioning timeout, rate limiting. | 0 👍, 0 comments; filed today, multiple symptoms. |
| **[#4567](https://github.com/github/copilot-cli/issues/4567)** – Opt-in to trust insecure (http://) OTLP exporter endpoint | Aligns CLI with VS Code/Copilot default OTLP behavior; currently silences telemetry on http:// localhost. | 0 👍, 0 comments; filed today, parity request. |
| **[#4565](https://github.com/github/copilot-cli/issues/4565)** – App configuration problems in `copilot-runtime-bazel-cache` (bot-generated) | Automated scan flagging build-config drift; may affect CI reliability. | 0 👍, 0 comments; internal repo hygiene. |

---

## Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## Feature Request Trends
1. **Multi-model/BYOK orchestration** — Users want a single session to span GitHub-hosted, BYOK, and local models with `/model` switching (#3709, #3282).
2. **MCP ecosystem compatibility** — First-class support for diverse MCP servers (FastMCP, etc.) without brittle `server/discover` assumptions (#4370).
3. **Session portability & persistence** — Seamless resume/restore across machines and cloud↔local boundaries (#4514).
4. **Cloud UX hardening** — Reliable owner discovery, provisioning, and rate-limit handling for `--cloud` (#4568).
5. **Observability parity** — OTLP config flexibility matching VS Code (insecure localhost endpoints) (#4567).

---

## Developer Pain Points
- **Authorization flakiness** — Enterprise policy checks fail intermittently, forcing re-auth or waiting (#2306).
- **Windows update hazard** — Auto-update renames binary but leaves old process spinning at 100% CPU (#4111).
- **Agent execution regression** — Latest model (gpt-5.3-codex) acknowledges tool calls but doesn’t execute them (#4566).
- **Cloud provisioning instability** — Owner picker hangs, sessions stall at `session.requested`, polling triggers 429s (#4568).
- **MCP handshake rigidity** — Non-standard `server/discover` responses treated as hard errors instead of optional capability probes (#4370).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-23

---

## 1. Today's Highlights
- **Memory system** remains the top community pain point: two long-standing issues (#1283, #1478) were updated yesterday, reflecting strong demand for persistent, cross-session context and better documentation.
- **Corporate proxy support** saw closure: SSL certificate verification behind Zscaler (#760) is now resolved, unblocking enterprise adopters.
- **Tooling hardening** landed: PR #2594 fixes a silent UTF-8 corruption bug in `StrReplaceFile`, improving reliability for binary/legacy files.

---

## 2. Releases
*No new releases in the last 24 hours.*

---

## 3. Hot Issues
| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Feature Request: Memory System — Persistent context across sessions** | Core UX gap: developers lose project context, conventions, and preferences between sessions. 40 comments show sustained engagement. | 👍 0 · 40 comments · Open since Feb |
| [#1478](https://github.com/MoonshotAI/kimi-cli/issues/1478) | **Optimize memory layer; missing from docs** | User explicitly requests memory-layer improvements and documentation; references a `.openclaw/workspace/` structure (SOUL.md, USER.md, MEMORY.md, daily logs). | 👍 0 · 3 comments · Open since Mar |
| [#760](https://github.com/MoonshotAI/kimi-cli/issues/760) | **SSL cert verification fails behind corporate proxy (Zscaler)** | Blocks enterprise adoption; login fails due to MITM proxy cert chain. Now **closed** — fix likely merged or workaround documented. | 👍 0 · 3 comments · Closed Aug 22 |

---

## 4. Key PR Progress
| # | Title | Type | Impact |
|---|-------|------|--------|
| [#2614](https://github.com/MoonshotAI/kimi-cli/pull/2614) | `docs(plugins): document security and persistent data` | Documentation | Clarifies plugin contract (root `plugin.json`, command tools, `inject`, install path `~/.kimi/plugins/`). Reduces integration friction. |
| [#2594](https://github.com/MoonshotAI/kimi-cli/pull/2594) | `fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits` | Bug Fix | **Critical correctness fix**: previously corrupted files containing invalid UTF-8 outside the edited range by replacing with U+FFFD. Now operates on raw byte buffers. |

---

## 5. Feature Request Trends
1. **Persistent Memory / Context Layer** — Dominant ask. Users want:
   - Automatic AI-managed notes (project patterns, decisions)
   - Manual user-defined instructions (à la `CLAUDE.md` / `AGENTS.md`)
   - Cross-session recall without re-prompting
   - Structured storage (daily logs + curated long-term memory)
2. **Documentation & Discoverability** — Memory features exist (per #1478’s `~/.openclaw/workspace/`) but are undocumented; developers can’t leverage what they can’t find.
3. **Enterprise Readiness** — Proxy/TLS support, offline/air-gapped operation, audit logs.

---

## 6. Developer Pain Points
- **Context loss between sessions** — “Painful when working on big projects” (#1478). Re-explaining architecture, conventions, and file layouts every session kills flow.
- **Silent data corruption** — `StrReplaceFile` mangling non-UTF-8 files (#2594) erodes trust in automated edits.
- **Opaque internals** — Memory subsystem exists (SOUL/USER/MEMORY.md) but lacks official docs, forcing reverse-engineering.
- **Corporate network barriers** — Zscaler/MITM proxy breaks auth (#760); resolution needed for regulated environments.

---

*Digest generated from GitHub activity on 2026-08-22/23. For real-time updates, watch the [kimi-cli repo](https://github.com/MoonshotAI/kimi-cli).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-23

## 1. Today's Highlights

No new releases shipped today. The community is heavily focused on stabilizing core infrastructure: a long-running **Memory Megathread** (#20695, 135 comments) continues collecting heap snapshots to diagnose leaks, while multiple PRs address provider integration bugs (Anthropic slug translation for Cloudflare AI Gateway, model catalog refresh storms) and TUI reliability (session resume hangs, autocomplete rendering). Desktop app gaps remain visible—file paths in chat aren't clickable (#37891) and hardware acceleration can't be disabled (#44071).

## 2. Releases

*No releases published in the last 24 hours.*

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695) | Centralized tracking for scattered memory leaks; requests heap snapshots from users to root-cause OOM kills. | 135 comments, 104 👍 — highest engagement in repo; active since April 2026. |
| [#2242 Sandbox/agent isolation](https://github.com/anomalyco/opencode/issues/2242) | No built-in way to restrict agent terminal commands to project directory; competitors (Gemini/Codex CLI) use macOS Seatbelt. | 83 comments, 71 👍 — security/critical for enterprise adoption. |
| [#4714 TUI: Search in session buffer](https://github.com/anomalyco/opencode/issues/4714) | Missing "find in output" capability makes debugging long agent sessions painful. | 33 comments, 45 👍 — basic UX gap vs. editors/terminals. |
| [#8751 Hot-reload agents/skills/commands](https://github.com/anomalyco/opencode/issues/8751) | Config changes require full restart; blocks iterative agent development. | 21 comments, 95 👍 — strong demand for dev-loop improvement. |
| [#30662 Auto title fails for opencode provider models](https://github.com/anomalyco/opencode/issues/30662) | Session titles stay "New session" for `big-pickle`/`opencode` provider due to missing `smallOptions` config. | 15 comments — silently broken UX for managed provider users. |
| [#43277 Sessions permanently stuck, survive reboots](https://github.com/anomalyco/opencode/issues/43277) | Sessions become unresponsive to new messages; state persists across OS reboots, no recovery path. | 4 comments — data-loss severity, blocks workflow continuity. |
| [#23362 TUI hangs on large diffs during resume](https://github.com/anomalyco/opencode/issues/23362) | `formatPatch`/`structuredPatch` blocks event loop on sessions with many file edits; deterministic freeze. | 5 comments, 3 👍 — core reliability issue for power users. |
| [#36376 webfetch: SSRF via redirects, unbounded buffering](https://github.com/anomalyco/opencode/issues/36376) | Security: no re-validation on redirects, private-IP checks incomplete, responses buffered without limits. | 1 comment — security vulnerability in a model-facing tool. |
| [#37891 Desktop: file paths in chat not clickable](https://github.com/anomalyco/opencode/issues/37891) | Paths render as chips/links but don't open in editor/Finder; `file://` markdown also dead. | 5 comments, 2 👍 — basic desktop UX expectation unmet. |
| [#34644 GitHub Copilot provider missing for Student plan](https://github.com/anomalyco/opencode/issues/34644) | OAuth succeeds but provider never appears in model selector for Copilot Student (Auto-only) accounts. | 3 comments, 17 👍 — blocks a whole user segment. |

## 4. Key PR Progress

| PR | Type | Summary |
|----|------|---------|
| [#44281](https://github.com/anomalyco/opencode/pull/44281) | Bug fix | Sends Anthropic's dashed slug (`claude-3-5-haiku-20241022`) through Cloudflare AI Gateway instead of dotted id, unblocking all Anthropic models. |
| [#44282](https://github.com/anomalyco/opencode/pull/44282) | Bug fix | Stops `models.dev` catalog refresh from firing `Refreshed` event on every 5-min poll when content unchanged — eliminates KV rewrite storms. |
| [#44275](https://github.com/anomalyco/opencode/pull/44275) | Feature | Adds `LocationActivity` service with 60-min idle TTL to evict stale session locations; fixes unbounded location cache growth. |
| [#44264](https://github.com/anomalyco/opencode/pull/44264) | Feature | Implements experimental `compaction.mode: "suffix"` (keep recent context) alongside default prepend compaction for session runtimes. |
| [#44279](https://github.com/anomalyco/opencode/pull/44279) | Bug fix | Extends FFF (fast file finder) home-directory protection to descendant locations via worktree root detection; prevents indexing `$HOME`. |
| [#44271](https://github.com/anomalyco/opencode/pull/44271) | Bug fix | Preserves raw provider error payload (`code`, `param`, `type`, `headers`, `body`) on stream failures instead of flattening to message prefix. |
| [#44270](https://github.com/anomalyco/opencode/pull/44270) | Bug fix | Defers terminal environment sync until optimistic session is confirmed on server — avoids sync against non-existent session. |
| [#44269](https://github.com/anomalyco/opencode/pull/44269) | Refactor | Proxies legacy `/zen` generation requests directly to `/inference` without parsing body; retains header compatibility. |
| [#44261](https://github.com/anomalyco/opencode/pull/44261) | Bug fix | Flattens autocomplete descriptions (collapses whitespace) so active highlight stays aligned on multiline skill entries. |
| [#40125](https://github.com/anomalyco/opencode/pull/40125) | Feature | Per-MCP-server trust config via fingerprint pinning + `caFile` — avoids global `insecure: true` for self-signed/private CA certs. |

## 5. Feature Request Trends

1. **Configuration hot-reload** — #8751 (95 👍) and related issues show developers want to iterate on agents/skills/commands without restarts.
2. **TUI parity with modern editors** — Search in buffer (#4714), tab shortcuts (#37077), autocomplete polish (#44261), clickable paths (#37891).
3. **Sandboxing & security** — Agent isolation (#2242), MCP trust per-server (#40125), webfetch SSRF hardening (#36376).
4. **Session resilience** — Stuck session recovery (#43277), resume performance (#23362), suffix compaction (#44264) for long contexts.
5. **Provider flexibility** — Copilot Student support (#34644), Cloudflare AI Gateway fixes (#44280/44252), Bedrock proxy compat (#25984).

## 6. Developer Pain Points

- **Memory instability**: The megathread (#20695) reveals widespread, unreproducible OOMs; users asked to manually capture heap snapshots — indicates tooling gap for self-diagnosis.
- **Silent failures**: Auto titles (#30662), stream truncation (#44210), provider 503s (#44044) all fail without actionable errors; developers waste time guessing root cause.
- **TUI freezes on large state**: Resume hangs (#23362), agent status toggles to inactive (#44226), paste broken in question input (#44098) — event-loop blocking and optimistic UI races.
- **Desktop app feels like a web wrapper**: Non-clickable paths (#37891), no hardware accel toggle (#44071), usage indicator flicker (#44257) — native expectations unmet.
- **Provider ecosystem fragmentation**: Copilot plan detection (#34644), Anthropic slug mismatch (#44280), Bedrock proxy cache keys (#25984), EU OAuth residency (#43615) — each provider needs custom glue.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-23

## Today's Highlights
The community is heavily focused on **Windows compatibility** — from ConPTY rendering drift and path-separator bugs to startup performance via Node runtime bundling. A critical **auto-compaction regression** (#6879, 18 👍) lets contexts exceed 100% until the provider rejects the request, blocking long-running agentic sessions. Meanwhile, the provider ecosystem expands with **MindsHub** and **Parasail.io** integrations, and a new **loadout management** PR (#7148) enables toggling extensions mid-session.

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (Top 10 by Impact & Discussion)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) **Windows strategy: how to run Pi on Windows?** | 39 comments debating native vs. WSL vs. MSYS2 vs. Dev Containers — defines where core effort should go vs. community extensions. | 2 👍, active maintainer participation |
| [#6879](https://github.com/earendil-works/pi/issues/6879) **Auto-compaction never triggers past 100% context** | Sessions exceed token limits silently until provider returns HTTP 400; breaks multi-hour autonomous runs. | 18 👍, 20 comments — high-severity regression |
| [#7130](https://github.com/earendil-works/pi/issues/7130) **Backspace deletes 2 chars in Kitty (KKP release events)** | Keyboard protocol handling gap; affects all Kitty users. | 11 comments, 1 👍 |
| [#8167](https://github.com/earendil-works/pi/issues/8167) **Cannot pick llama.cpp models in router mode** | Models loaded via `llama-server --models-preset` invisible in `/model` selector despite being functional. | 9 comments, closed via #8479 |
| [#8468](https://github.com/earendil-works/pi/issues/8468) **GitHub Copilot login times out** | Blocks Copilot auth for users on unreleased commits; regression from #8254. | 5 comments, closed |
| [#8376](https://github.com/earendil-works/pi/issues/8376) **Model selection persistence scope** | Request to persist `/model` choices per-directory vs. per-session; UX friction for multi-project workflows. | 5 comments |
| [#7885](https://github.com/earendil-works/pi/issues/7885) **npm search not indexing new pi-packages** | Gallery on pi.dev/packages stale since Aug 4; blocks discoverability for extension authors. | 5 comments |
| [#8442](https://github.com/earendil-works/pi/issues/8442) **Backspace ignored in herdr pane (legacy 0x7f vs KKP)** | Terminal protocol mismatch inside nested panes; Ctrl+Backspace works but plain Backspace doesn’t. | 4 comments |
| [#8464](https://github.com/earendil-works/pi/issues/8464) **Output-limit continuation & mid-turn compaction** | Autonomous runs stall at model output limit; need auto-continue + inter-turn compaction checks. | 4 comments |
| [#8484](https://github.com/earendil-works/pi/issues/8484) **Windows: editor scrolls to top / cursor lost (ConPTY autowrap drift)** | Full-width border renders trigger ConPTY eager wrap, drifting cursor position visually. Fixed in #8485. | 2 comments |

---

## Key PR Progress (Top 10)

| PR | Summary | Status |
|----|---------|--------|
| [#8474](https://github.com/earendil-works/pi/pull/8474) **Bundle Node runtime for coding-agent** | Reduces file I/O on startup; targets Windows Defender slowdown. “Needs more tests and optimizations.” | Closed |
| [#8488](https://github.com/earendil-works/pi/pull/8488) **Add MindsHub provider** | OpenAI-compatible gateway (Claude, GPT, Gemini, Kimi, DeepSeek, Qwen, GLM…) via single endpoint. | Closed |
| [#8487](https://github.com/earendil-works/pi/pull/8487) **Expose finish_reason compatibility override** | Adds missing type exposure for provider finish-reason handling; closes #8460. | Open |
| [#8486](https://github.com/earendil-works/pi/pull/8486) **Editor scroll capture & verification tooling** | Scriptable TUI test harness for `TuiMainScreen` + `Editor`; simulates F5/F6 events for regression testing. | Closed |
| [#8485](https://github.com/earendil-works/pi/pull/8485) **Disable autowrap around main-screen renders (ConPTY fix)** | Prevents eager line-wrap on full-width borders; fixes cursor drift on Windows Terminal. Closes #8484. | Closed |
| [#8482](https://github.com/earendil-works/pi/pull/8482) **Docs: point custom footer at `ctx.getContextUsage()`** | Corrects documentation for footer context-usage API. Closes #8392. | Open |
| [#8479](https://github.com/earendil-works/pi/pull/8479) **Expose unloaded llama.cpp presets** | Makes `--models-preset` models selectable in UI without pre-loading; supports llama-swap workflow. Closes #8167. | Closed |
| [#7148](https://github.com/earendil-works/pi/pull/7148) **Experimental loadout management** | `/loadout` command to enable/disable extensions mid-session; overrides persisted in session. Draft, needs review. | Open |
| [#8295](https://github.com/earendil-works/pi/pull/8295) **Locale switching via `/settings`** | Adds EN/ZH selector, `SettingsManager.setLocale()`, shared locale validation. | Closed |
| [#8458](https://github.com/earendil-works/pi/pull/8458) **Retry TLS/certificate errors in bounded retry** | Classifies cert verification failures as retryable in `packages/ai/src/utils/retry.ts`. | Closed |

---

## Feature Request Trends
1. **Windows-first experience** — Native terminal rendering, path handling, startup performance, key-binding conflicts.
2. **Provider & model extensibility** — New gateways (MindsHub, Parasail, OpenRouter reasoning-mandatory models), llama.cpp preset visibility, vision model catalog updates.
3. **Session autonomy** — Auto-continue on output limits, mid-turn compaction, configurable compaction prompts for continuation fidelity.
4. **Extension system maturity** — Loadout management (enable/disable mid-session), exclusion flags (`--exclude-extensions`), TUI viewport primitives for custom layouts.
5. **Internationalization** — Locale switching infrastructure landed; more languages requested.
6. **Package ecosystem health** — npm search indexing, gallery freshness, package discovery.

---

## Developer Pain Points (Recurring Frustrations)
- **Windows/ConPTY rendering bugs** — Cursor drift, autowrap drift, path-separator mismatches, key-binding collisions.
- **Compaction reliability** — Threshold ignored until provider hard-fails; no inter-turn checks; prompt fidelity loss.
- **Terminal protocol gaps** — Kitty keyboard protocol (KKP) release events, legacy `0x7f` vs. KKP in nested panes (herdr).
- **Model/provider UX** — Invisible models in selector, raw IDs instead of display names, reasoning-mandatory endpoint handling.
- **Extension management** — All-or-nothing loading, no mid-session toggles (pre-#7148), no exclusion mechanism.
- **Authentication flakiness** — Copilot timeouts, TLS cert errors not retried.
- **Discoverability** — New packages invisible in npm search / pi.dev gallery for weeks.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-23

## 1. Today's Highlights

Qwen Code shipped **v0.22.0** with major stability improvements: Web Shell now bounds transcript retention to prevent OOM crashes, and review loops surface instability by citing specific files with recurring findings. The nightly build (v0.22.0-nightly.20260823.1007bcacfc) includes a fix for Web Shell workspace CWD handling when opening from the overview panel. Concurrently, the team is tackling a critical CVE audit failure blocking all PRs and investigating loop-detection false positives that kill unattended automation runs.

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v0.22.0** | • Web Shell: bounded transcript retention & oversized replay trimming to prevent OOM ([#9303](https://github.com/QwenLM/qwen-code/pull/9303))<br>• Review loops: explain instability by citing specific files with recurring findings |
| **v0.22.0-nightly.20260823.1007bcacfc** | • Fix: Web Shell passes session workspace CWD when opening from overview panel ([#9730](https://github.com/QwenLM/qwen-code/pull/9730)) |

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#8102](https://github.com/QwenLM/qwen-code/issues/8102)** Deterministic tool-execution boundaries for trustworthy agent runtime | Foundational security architecture: keep LLM outside trust boundary, enforce deterministic constraints on model actions | 17 comments, P3, needs-discussion — active design debate |
| **[#9278](https://github.com/QwenLM/qwen-code/issues/9278)** Review publish-time convergence advisory (telemetry, diagnosis, operator-owned posting) | Addresses "runaway review loop" where fix cycles amplify findings; adds telemetry-driven damping | 9 comments, P2, in-progress — design doc preserved in issue |
| **[#9556](https://github.com/QwenLM/qwen-code/issues/9556)** Whether review pipeline should grant code execution as invoking user | Security boundary question: all 20 review rounds on #9221 share precondition of code executing as review's user | 8 comments, security scope, needs-discussion |
| **[#9002](https://github.com/QwenLM/qwen-code/issues/9002)** SDK Python rejects `permission_mode="auto"` despite CLI support | SDK/CLI parity gap blocking programmatic use of auto permission mode | 6 comments, P3, closed (validation fixed) |
| **[#9198](https://github.com/QwenLM/qwen-code/issues/9198)** OOM after week-long run on 1TB memory server | Long-running session memory leak; terminal corruption post-OOM (tmux keys broken, mouse garbled) | 5 comments, P2, need-information — regression vs kimi code |
| **[#9706](https://github.com/QwenLM/qwen-code/issues/9706)** Auto session title echoes system prompt example verbatim | "Fix login button on mobile" appears as title across unrelated sessions (dingtalk, qwen3-coder-flash) | 4 comments, P2, closed — prompt leakage bug |
| **[#9573](https://github.com/QwenLM/qwen-code/issues/9573)** Resumed sessions show "Tool result missing from saved history" for completed tools | Session resume UX regression: successful tool calls appear failed on restore | 4 comments, P1, closed (needs retesting) |
| **[#9733](https://github.com/QwenLM/qwen-code/issues/9733)** Loop detection false-positives on verification cycles kills unattended turns | Legitimate write→run→edit→verify cycles flagged as loops; terminated turns unrecoverable without human | 4 comments, P2, needs retesting — automation blocker |
| **[#9699](https://github.com/QwenLM/qwen-code/issues/9699)** Dependency CVE audit fails on every PR since 2026-08-21 | CI completely blocked: `npm audit --omit=dev --audit-level=high` reports 8 vulns (1 high) | 4 comments, P1, security, closed (ready-for-human) |
| **[#9757](https://github.com/QwenLM/qwen-code/issues/9757)** Auto Mode classifier stage 1 unavailable with OpenRouter | OpenRouter users forced to manual approval; fallback recommends Default Mode | 3 comments, P2 — provider integration gap |

## 4. Key PR Progress (Top 10 by Significance)

| PR | Description | Status |
|----|-------------|--------|
| **[#9740](https://github.com/QwenLM/qwen-code/pull/9740)** feat(review): make Step 4 verification execution-grade | Adds `qwen review ab-drive` subcommand for paired script execution against PR/base trees; execution-grade evidence for verification | Open |
| **[#9745](https://github.com/QwenLM/qwen-code/pull/9745)** fix(autofix): budget the repair pass, keep timeouts out of cap | Repair pass budget: 40min/45min backstop (was 18/20); exhaustions no longer count toward cumulative cap; long steps + setup = 320min | Open |
| **[#9728](https://github.com/QwenLM/qwen-code/pull/9728)** fix: repair Windows/macOS test lane failures | Product fixes, test-fixture repairs, CI harness repairs to revive Win/macOS lanes (#9370) | Open |
| **[#9758](https://github.com/QwenLM/qwen-code/pull/9758)** fix(core): emit OpenRouter's reasoning disable when thinking is off | Emits OpenRouter-native `reasoning: { enabled: false }` when `includeThoughts: false` (e.g., AUTO-mode classifier stage-1) | Open |
| **[#9526](https://github.com/QwenLM/qwen-code/pull/9526)** feat(review): persistently-critical convergence advisory (land-with-residual-risk) | Adds convergence-exit advisory when Criticals persist across rounds while first-time findings window exists | Open |
| **[#9394](https://github.com/QwenLM/qwen-code/pull/9394)** feat(channels): add DingTalk Workspace channel | Built-in DWS channel: DMs, @mentions, ambient groups, doc-mention notifications, native todos, source-scoped sessions | Open |
| **[#9273](https://github.com/QwenLM/qwen-code/pull/9273)** feat(review): capture-tui — rendering claims get pixels, not prose | `qwen review capture-tui` drives private tmux, captures pane text (`.ans`), renders PNG when `freeze` available | Open |
| **[#9626](https://github.com/QwenLM/qwen-code/pull/9626)** fix(serve): Repair persisted session lifecycle | Delete/archive/unarchive maintain owned persisted transcript even when empty, torn, malformed, or legacy orphan | Open |
| **[#9720](https://github.com/QwenLM/qwen-code/pull/9720)** test(core): pin that subagent registries carry no MCP instructions | Two tests ensuring subagent tool registry has no MCP instructions; no prod changes | Closed |
| **[#9392](https://github.com/QwenLM/qwen-code/pull/9392)** fix(serve): let channel workers reach TLS-enabled daemons | Channel workers get `https://` loopback URL when daemon uses `--tls-cert/--tls-key`; validates https loopback | Open |

## 5. Feature Request Trends

| Direction | Representative Issues/PRs | Momentum |
|-----------|---------------------------|----------|
| **Trustworthy agent runtime / security boundaries** | [#8102](https://github.com/QwenLM/qwen-code/issues/8102) (deterministic tool execution), [#9556](https://github.com/QwenLM/qwen-code/issues/9556) (code execution grants) | High — architectural, multi-issue thread |
| **Review loop convergence & telemetry** | [#9278](https://github.com/QwenLM/qwen-code/issues/9278), [#9526](https://github.com/QwenLM/qwen-code/pull/9526), [#9674](https://github.com/QwenLM/qwen-code/issues/9674), [#9340](https://github.com/QwenLM/qwen-code/pull/9340) | Very high — 4+ PRs/issues in 2 weeks |
| **Computer Use / Node REPL as MCP server** | [#9333](https://github.com/QwenLM/qwen-code/issues/9333), [#9335](https://github.com/QwenLM/qwen-code/issues/9335) | Medium — roadmap phase 3, ready-for-human |
| **Web Shell / VS Code companion parity** | [#9725](https://github.com/QwenLM/qwen-code/issues/9725), [#9726](https://github.com/QwenLM/qwen-code/issues/9726), [#9727](https://github.com/QwenLM/qwen-code/issues/9727), [#9465](https://github.com/QwenLM/qwen-code/issues/9465) | High — 4 issues in 24h, experimental flag gated |
| **Session persistence & daemon model restoration** | [#9686](https://github.com/QwenLM/qwen-code/issues/9686), [#9664](https://github.com/QwenLM/qwen-code/issues/9664), [#9573](https://github.com/QwenLM/qwen-code/issues/9573), [#9489](https://github.com/QwenLM/qwen-code/issues/9489) | High — multiple P1/P2 session management fixes |
| **Model provider expansion (Kimi, Xiaomi, OpenRouter fixes)** | [#8368](https://github.com/QwenLM/qwen-code/pull/8368), [#9757](https://github.com/QwenLM/qwen-code/issues/9757), [#9758](https://github.com/QwenLM/qwen-code/pull/9758) | Medium — auth & reasoning integration |
| **Skills / agent capabilities** | [#9384](https://github.com/QwenLM/qwen-code/pull/9384) (find-simplifications sweep), [#8927](https://github.com/QwenLM/qwen-code/pull/8927) (sessionRotation) | Emerging — skills framework maturing |

## 6. Developer Pain Points

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Session resume/reliability** | [#9573](https://github.com/QwenLM/qwen-code/issues/9573) (missing tool results), [#9706](https://github.com/QwenLM/qwen-code/issues/9706) (prompt leakage in titles), [#9686](https://github.com/QwenLM/qwen-code/issues/9686) (model not restored), [#9489](https://github.com/QwenLM/qwen-code/issues/9489) (4 provenance regressions) | 5+ issues in 24h |
| **Loop detection false positives killing automation** | [#9733](https://github.com/QwenLM/qwen-code/issues/9733) — verification cycles flagged as loops, turns unrecoverable without human | Critical for unattended runs |
| **OOM / memory leaks in long sessions** | [#9198](https://github.com/QwenLM/qwen-code/issues/9198) — week-long run on 1TB RAM OOMs, terminal corruption after | High severity, hard to reproduce |
| **CI completely blocked by CVE audit** | [#9699](https://github.com/QwenLM/qwen-code/issues/9699) — every PR fails since 2026-08-21 | Release-blocking |
| **Web Shell sidebar performance** | [#9465](https://github.com/QwenLM/qwen-code/issues/9465) — pin/unpin very slow, pinned section ordering unstable | UX regression |
| **Auto Mode / classifier failures with OpenRouter** | [#9757](https://github.com/QwenLM/qwen-code/issues/9757) — stage 1 unavailable, forced manual approval | Provider integration gap |
| **SDK/CLI parity gaps** | [#9002](https://github.com/QwenLM/qwen-code/issues/9002) — SDK rejects valid `permission_mode="auto"` | Developer friction |

---

*Digest generated from github.com/QwenLM/qwen-code data as of 2026-08-23. All links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*