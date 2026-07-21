# AI CLI Tools Community Digest 2026-07-21

> Generated: 2026-07-21 02:03 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-07-21)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is characterized by **rapid iteration on core reliability** rather than feature expansion. All nine tools show active development, but the dominant theme across communities is fixing regressions in session persistence, platform parity (especially Windows), and token/cost economics. Major vendors (Anthropic, OpenAI, Google, GitHub) are shipping weekly patches for quadratic performance bugs, sandbox escapes, and context-window limits, while newer entrants (Kimi, Qwen, DeepSeek TUI, OpenCode, Pi) are racing toward v1.0 stability milestones. The ecosystem is consolidating around **multi-account/identity management**, **headless/CI-first operation**, and **provider-agnostic model routing** as baseline expectations.

---

## 2. Activity Comparison (2026-07-21)

| Tool | Repository | Releases (24h) | Hot Issues Tracked | PRs Updated (24h) | Top Issue 👍 |
|------|------------|----------------|-------------------|-------------------|--------------|
| **Claude Code** | anthropics/claude-code | 1 (v2.1.216) | 10 | 7 (6 open) | 668 (#18435 multi-account) |
| **OpenAI Codex** | openai/codex | 2 (alpha) | 10 | 10 | 801 (#11023 Linux app) |
| **Gemini CLI** | google-gemini/gemini-cli | 1 (nightly) | 10 | 10 | 8 (#21409 agent hangs) |
| **GitHub Copilot CLI** | github/copilot-cli | 2 (v1.0.72/73) | 10 | 0 | 17 (#1481 SHIFT+ENTER) |
| **Kimi Code CLI** | MoonshotAI/kimi-cli | 0 | 6 (new) | 3 | 3 (#2209 cloud 429) |
| **OpenCode** | anomalyco/opencode | 1 (v1.18.4) | 10 | 10 | 13 (#27906 Bun installs) |
| **Pi** | earendil-works/pi | 0 | 10 | 10 | 11 comments (#6476 timeout regression) |
| **Qwen Code** | QwenLM/qwen-code | 1 (nightly) | 10 | 10 | 7 comments (#7040 auto-memory RFC) |
| **DeepSeek TUI** | Hmbown/CodeWhale | 0 (v0.9.1 RC) | 10 | 10 | 40 comments (#4032 constitution) |

**Note:** Issue/PR counts reflect digest curation (top 10 each), not absolute totals. 👍/comment counts indicate community resonance.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|--------------------------|
| **Multi-account / Identity Switching** | Claude Code (668 👍), Copilot CLI (BYOK #4192), OpenCode (currency config #32485), Pi (provider auth #6799) | Seamless switching between personal/org/client accounts without re-auth; per-session model credentials |
| **Session Persistence & Resume** | Claude Code (SSH #49790, history loss #62272), Codex (mobile/desktop sync #23200), Copilot CLI (new session from `/btw` #4182), Kimi (stale prompts #2519), OpenCode (orphaned sessions #23248) | SSH disconnect survival, crash recovery, cross-device sync, config hot-reload on resume |
| **Windows Parity** | Claude Code (Cowork VM #64592), Codex (freezes #20214, sandbox #33737), Copilot CLI (clipboard #3622, WSL #4191), Kimi (migration #2522, arrow keys #2521), DeepSeek TUI (6+ Windows regressions) | Native VM/sandbox, clipboard/PTY reliability, installer migration, TUI rendering, Defender coexistence |
| **Headless / CI-First Operation** | Codex (remote Linux #23200), Copilot CLI (PTY automation #4180, `--no-project-config`), OpenCode (`--no-project-config` #4652), DeepSeek TUI (`--no-project-config` #4652), Qwen (daemon/WebShell #7023) | JSON/streaming output, hermetic config, reproducible runs, no interactive prompts |
| **Provider-Agnostic Model Routing** | Pi (Bedrock #6216, Qwen #6858), Qwen (Token Plan #7284, OpenAI schema #7344), DeepSeek TUI (Moonshot/xAI routing #4617), OpenCode (Kimi on Anthropic-compatible #38026) | Unified interface for OpenAI/Anthropic/custom endpoints; thinking-level negotiation; schema normalization |
| **Token / Cost Transparency** | Codex (10–20× cost spike #28879, polling burns #13733), Copilot CLI (5 MB CAPI limit #4183, compaction #1688), Pi (provider-reported cost #6881), Qwen (thinking tokens in stats #7236) | Real-time usage dashboards, predictive compaction, provider cost passthrough, model-specific limits visibility |
| **Skill / Agent Composability** | Claude Code (skill chaining #79560), Codex (skill conventions #16127), Gemini (skill discoverability #21968), Qwen (overridable skills #7357), DeepSeek TUI (canonical roles #3934) | Programmatic skill invocation, VCS-agnostic hooks, default-disabled opt-in, role-based permission contracts |

---

## 4. Differentiation Analysis

| Dimension | Established Vendors (Claude, Codex, Copilot, Gemini) | Challenger / Community Tools (OpenCode, Pi, Qwen, Kimi, DeepSeek TUI) |
|-----------|------------------------------------------------------|-----------------------------------------------------------------------|
| **Target User** | Enterprise teams, individual pros on managed plans | Power users, self-hosters, cost-sensitive devs, plugin authors |
| **Architecture** | Proprietary backends, tightly coupled Desktop+CLI | Provider-agnostic cores, pluggable model adapters, local-first |
| **Extensibility** | Skills/plugins (Claude, Codex, Gemini), MCP (all) | First-class plugin APIs (OpenCode status bar #23539, Pi RPC #3200), skill markets (Qwen #7357) |
| **Platform Strategy** | macOS-first → Windows/Linux catch-up | Linux/WSL-native, Windows as tier-1 (DeepSeek TUI), headless-first |
| **Session Model** | Cloud-synced, account-bound | Local-first, portable sessions (OpenCode #23248, Pi archive #6874) |
| **Cost Model** | Subscription-tied (Plus/Pro/Max), opaque limits | BYOK, provider-reported cost, experimental token caps (OpenCode 32k) |
| **Release Cadence** | Weekly patches + quarterly majors | Nightly + milestone RCs (Qwen, DeepSeek TUI v0.9.1) |

**Key Insight:** Established tools optimize for **managed reliability** (sandboxing, auth, enterprise controls); challengers optimize for **composability and local control** (provider choice, session ownership, scriptability).

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum / Mature** | **Claude Code**, **OpenAI Codex** | Highest 👍 counts (668, 801), dedicated Desktop apps, enterprise feature requests (multi-account, private Marketplace), security fixes (Claude sandbox RCE prevention) |
| **High Momentum / Maturing** | **Gemini CLI**, **GitHub Copilot CLI** | Nightly automation, bi-weekly patches, strong IDE integration focus, but lower community 👍 (single digits) suggesting quieter user base |
| **Rapid Iteration / Pre-v1** | **OpenCode**, **Qwen Code**, **DeepSeek TUI**, **Pi** | 10+ PRs/day, release-blocker sprints (DeepSeek v0.9.1), nightly builds, architectural rewrites (OpenCode TUI v2, Pi provider refactor) |
| **Early / Niche** | **Kimi Code CLI** | Fewer issues/PRs, cloud-platform dependency (429 errors), Windows gaps, but active fix PRs for session resilience |

**Velocity Leaders (PRs/day):** OpenCode, Pi, Qwen, DeepSeek TUI, Codex (all ~10 curated PRs)  
**Community Engagement Leaders (👍/comments):** Codex (Linux app 801 👍), Claude Code (multi-account 668 👍), DeepSeek TUI (constitution 40 comments)

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Local-first, provider-agnostic cores are winning mindshare** | Pi, OpenCode, Qwen, DeepSeek TUI all invest heavily in model routing abstraction; even Claude adds `sandbox.filesystem.disabled` for trusted local workflows | **Build/buy decision:** Wrapper CLIs around proprietary APIs risk obsolescence; invest in tools that support BYOK and local model servers |
| **Session durability = table stakes** | Every tool has open issues on SSH survival, crash recovery, history loss, or config staleness | **Eval criterion:** Test session resume after kill -9, network drop, and version upgrade before adopting |
| **Windows is the new Linux (pain point)** | 6/9 tools report active Windows regressions (VM, clipboard, TUI, installer, Defender) | **Rollout risk:** Pilot on Windows first; expect 2–3 patch cycles for parity |
| **Token economics transparency drives churn** | Codex 10–20× cost spike (358 👍), Copilot 5 MB hard limit, OpenCode silent 32k cap | **Budget planning:** Demand provider-reported cost APIs (Pi #6881) and predictive compaction before committing to paid tiers |
| **Skill/agent ecosystems standardizing on MCP + conventions** | Claude skills, Codex skills, Gemini skills, Qwen skills all converging on discoverability, composability, and opt-in defaults | **Extensibility strategy:** Author skills against MCP + conventional branch/commit specs (Claude #74722) for portability |
| **Headless/CI mode is a competitive differentiator** | Copilot `--no-project-config`, OpenCode `--no-project-config`, DeepSeek `--no-project-config`, Qwen daemon/WebShell | **Automation priority:** Tools without true headless JSON streaming will block CI/CD integration |

---

## Recommendation Summary

| Use Case | Recommended Primary | Watch List |
|----------|---------------------|------------|
| **Enterprise managed (SSO, audit, sandbox)** | Claude Code, GitHub Copilot CLI | Gemini CLI (Google Cloud integration) |
| **Cost-sensitive BYOK / self-hosted models** | Pi, OpenCode, Qwen Code | DeepSeek TUI (v0.9.1 GA) |
| **Linux/WSL native power user** | OpenCode, Pi, DeepSeek TUI | Qwen Code (daemon maturity) |
| **Rapid prototyping / skill authoring** | Claude Code (skills), Codex (skills), Qwen Code (overridable skills) | Gemini CLI (AST-aware tooling) |
| **CI/CD automation / headless** | Copilot CLI (`--no-project-config`), OpenCode, DeepSeek TUI | Pi (RPC streaming) |

**Bottom line:** The ecosystem is bifurcating into **managed SaaS CLIs** (Anthropic, OpenAI, GitHub, Google) and **composable local-first frameworks** (OpenCode, Pi, Qwen, DeepSeek TUI). For teams not locked into a single model provider, the latter offer better long-term leverage — but require tolerating pre-v1 churn through 2026.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-21 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298] skill-creator: fix run_eval.py 0% recall** | Core tooling fix — installs eval artifact as real skill, fixes Windows stream reading, trigger detection, parallel workers | Addresses root cause of description-optimization loop optimizing against noise (#556, 10+ reproductions) | ![Open](https://img.shields.io/badge/Open-green) |
| 2 | **[#514] document-typography** | Typographic QC for AI-generated docs: prevents orphan/widow lines, header stranding, numbering misalignment | "Affects every document Claude generates; users rarely ask for good typography explicitly" | ![Open](https://img.shields.io/badge/Open-green) |
| 3 | **[#1367] self-audit** | Mechanical file verification → 4-dimension reasoning audit (damage-severity priority) | Universal, stack-agnostic quality gate; v1.3.0 | ![Open](https://img.shields.io/badge/Open-green) |
| 4 | **[#723] testing-patterns** | Full testing stack: Trophy model, AAA pattern, React Testing Library, contract testing, E2E, flaky test mitigation | Comprehensive coverage from philosophy to CI integration | ![Open](https://img.shields.io/badge/Open-green) |
| 5 | **[#83] skill-quality-analyzer & skill-security-analyzer** | Meta-skills: 5-dimension quality scoring (structure, examples, resources, triggers, maintainability) + security scanning | Addresses marketplace quality control gap | ![Open](https://img.shields.io/badge/Open-green) |
| 6 | **[#486] odt (OpenDocument)** | Create/fill/read/convert .odt/.ods; triggers on ODT/ODF/LibreOffice mentions | ISO-standard document format support | ![Open](https://img.shields.io/badge/Open-green) |
| 7 | **[#1302] color-expert** | Color naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), accessibility | Self-contained expertise for any color-related task | ![Open](https://img.shields.io/badge/Open-green) |
| 8 | **[#525] pyxel (retro game dev)** | MCP server for Pyxel 8-bit engine; write → run_and_capture → inspect → iterate workflow | Niche but complete retro-game toolchain | ![Open](https://img.shields.io/badge/Open-green) |

> **Note**: All top PRs remain **Open** as of 2026-07-21. The `comments` field was undefined in source data; ranking reflects issue cross-references, update recency, and technical scope.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence (Issues) | Demand Signal |
|-------|-------------------|---------------|
| **Skill-creator tooling reliability** | #556 (12💬, 7👍), #1169, #1061, #362, #361, #1099, #1050, #1323 | **Critical** — Windows/encoding/trigger-detection failures block description optimization loop |
| **Trust & namespace security** | #492 (43💬, 2👍) — community skills masquerading as `anthropic/` official | **High** — Impersonation enables permission escalation |
| **Org-wide skill sharing** | #228 (14💬, 7👍) — eliminate manual .skill file transfer via Slack/Teams | **High** — Workflow friction for team adoption |
| **Meta-skills for quality/governance** | #83 (PR), #412 (6💬, closed), #1385 (3💬), #1367 (PR) | **Growing** — Self-audit, governance, reasoning pipelines |
| **Document processing completeness** | #538 (PDF case-sensitivity), #541 (DOCX w:id collision), #514 (typography), #486 (ODT) | **Steady** — Enterprise doc formats need parity |
| **MCP / Bedrock integration** | #16 (4💬), #29 (4💬) | **Latent** — Skills-as-MCP, AWS Bedrock compatibility |
| **Duplicate/plugin hygiene** | #189 (6💬, 9👍) — `document-skills` & `example-skills` install identical content | **Maintenance** — Context-window pollution |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | skill-creator eval fixes | Blocks core contribution pipeline; 10+ independent reproductions; multiple related issues |
| **[#514](https://github.com/anthropics/skills/pull/514)** | document-typography | Universal pain point (every generated doc); low implementation risk |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | self-audit | Novel meta-skill pattern; mechanical + reasoning layers; stack-agnostic |
| **[#723](https://github.com/anthropics/skills/pull/723)** | testing-patterns | Fills glaring gap — no existing testing methodology skill; comprehensive scope |
| **[#83](https://github.com/anthropics/skills/pull/83)** | skill-quality-analyzer / skill-security-analyzer | Directly addresses marketplace quality control; needed for scaling |
| **[#1302](https://github.com/anthropics/skills/pull/1302)** | color-expert | Well-scoped domain expertise; high reuse across design/frontend/data-viz |
| **[#538](https://github.com/anthropics/skills/pull/538)** / **[#541](https://github.com/anthropics/skills/pull/541)** | PDF/DOCX bug fixes | Case-sensitivity & w:id corruption are data-loss bugs; low-risk merges |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is fixing the skill-creator contribution pipeline (trigger detection, Windows compatibility, eval reliability) so that *new skills can be reliably authored and validated* — without this, all other skill development is bottlenecked.**

---

## Quick Links
- **Repository**: https://github.com/anthropics/skills
- **Issues**: https://github.com/anthropics/skills/issues
- **Pull Requests**: https://github.com/anthropics/skills/pulls
- **Top Security Issue**: [#492](https://github.com/anthropics/skills/issues/492) — Namespace trust boundary
- **Top Tooling Issue**: [#556](https://github.com/anthropics/skills/issues/556) — run_eval.py 0% trigger rate

---

# Claude Code Community Digest — 2026-07-21

## Today's Highlights
- **v2.1.216 released** with a critical performance fix for long sessions (quadratic message normalization cost eliminated) and a new `sandbox.filesystem.disabled` setting to bypass filesystem isolation while retaining network egress control.
- Community focus remains on **multi-account management** (668 👍), **Cowork reliability on Windows**, and **session persistence/resume UX** — all high-impact workflow blockers.
- New accessibility PR introduces a production-ready **text-to-speech hook** for hands-free response reading across Linux/macOS/Windows.

---

## Releases

### v2.1.216
- **Added** `sandbox.filesystem.disabled` setting — skip filesystem isolation while keeping network egress control (useful for trusted local workflows).
- **Fixed** severe slowdown in long sessions: message normalization cost grew quadratically with turn count, causing multi-second stalls and slow resumes.
- **Fixed** additional issue (details truncated in feed).

---

## Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#18435](https://github.com/anthropics/claude-code/issues/18435) | **Multi-account support in Claude Desktop** | Teams and consultants need seamless switching between personal/org accounts without re-auth flows. | **668 👍, 148 comments** — highest engagement in tracker |
| [#23626](https://github.com/anthropics/claude-code/issues/23626) | **Diff against non-main branches** | Current diff tool only compares to `main`; feature branches, release branches, and trunk-based workflows are unsupported. | **95 👍, 33 comments** — core review workflow gap |
| [#49790](https://github.com/anthropics/claude-code/issues/49790) | **SSH remote session survival** | Disconnect (lid close, network drop) kills remote Claude process; no reconnect/resume. Breaks long-running background work. | **29 👍, 10 comments** — critical for remote dev |
| [#28125](https://github.com/anthropics/claude-code/issues/28125) | **Cowork: private GitHub Marketplace** | Enterprise users cannot install private Marketplace apps in Cowork workspaces. | **30 👍, 36 comments** — blocks private tooling adoption |
| [#62272](https://github.com/anthropics/claude-code/issues/62272) | **Chat history deletion despite high `cleanupPeriodDays`** | JSONLs in `~/.claude/projects/` vanish on update/restart; data loss reported. Recovery script published by user. | **18 comments, 3 👍** — trust/reliability concern |
| [#64592](https://github.com/anthropics/claude-code/issues/64592) | **Cowork VM service fails on Windows 11** | Fresh installs hit "VM service not running"; all built-in recovery fails. Workaround: manual Hyper-V enable. | **12 comments** — Windows onboarding blocker |
| [#61021](https://github.com/anthropics/claude-code/issues/61021) | **Text selection broken in VS Code terminal** | Click-drag + Ctrl+C no longer works when Claude Code runs in VS Code terminal; worked previously. | **8 👍, 11 comments** — daily UX regression |
| [#60848](https://github.com/anthropics/claude-code/issues/60848) | **Ambiguous "Don't ask me again" in resume prompt** | Prompt for long sessions (12h+, 600k tokens) has unclear "Don't ask again" semantics — users fear losing resume choice. | **13 👍, 8 comments** — UX clarity issue |
| [#79560](https://github.com/anthropics/claude-code/issues/79560) | **`/code-review` skill rejects invocation from other skills** | Built-in skill flagged `disable-model-invocation`; breaks workflow composition (skill → skill calls). User-typed `/code-review` still works. | **4 👍, 2 comments** — regression in skill chaining |
| [#76653](https://github.com/anthropics/claude-code/issues/76653) | **Remote Control blocks localhost proxies** | Since v2.1.196, `ANTHROPIC_BASE_URL=http://127.0.0.1:*` disables Remote Control; breaks local proxy/development setups. | **9 👍, 2 comments** — dev tooling regression |

---

## Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#79620](https://github.com/anthropics/claude-code/pull/79620) | **feat: Text-to-speech read-aloud hook** | Production-ready TTS for assistant responses. Supports Piper (Linux), `say` (macOS), PowerShell (Windows). Markdown-aware extraction, code-block skip, configurable voice/rate. | OPEN |
| [#79385](https://github.com/anthropics/claude-code/pull/79385) | **fix: Honor any user's thumbs-down on auto-close bot** | Bot comment says "👎 this comment" to prevent closure, but code only checked issue author's reaction. Now honors any user's 👎. | OPEN |
| [#74722](https://github.com/anthropics/claude-code/pull/74722) | **feat: Conventional Branch naming in `/commit-push-pr`** | Adds optional `conventional` arg: branch named `<type>/<description>` per Conventional Branch 1.0.0 spec (type inferred from diff). | OPEN |
| [#79387](https://github.com/anthropics/claude-code/pull/79387) | **fix: Error message for `edit-issue-labels.sh` without args** | Script silently exited code 1; now prints clear usage error to stderr. Fixes #69913. | OPEN |
| [#78532](https://github.com/anthropics/claude-code/pull/78532) | **gateway/gcp: Optional internal ALB + PG16 Cloud SQL fix** | Terraform example: adds optional internal ALB; fixes PG16 instance creation (API now defaults to ENTERPRISE_PLUS edition, rejecting shared-core tiers). | OPEN |
| [#66650](https://github.com/anthropics/claude-code/pull/66650) | **fix: Full author name in pr-review-toolkit manifest** | Consistency fix: author changed from "Daisy" → "Daisy Hollman" to match other plugins. | CLOSED |
| [#1](https://github.com/anthropics/claude-code/pull/1) | **Create SECURITY.md** | Initial security policy document. | CLOSED (2025) |

---

## Feature Request Trends
1. **Multi-identity / account management** — Top request (668 👍): seamless switching between personal, org, client accounts in Desktop and CLI.
2. **Session persistence & resume** — SSH survival (#49790), resume prompt clarity (#60848), history retention (#62272), Recents sync (#69663).
3. **Cowork maturity** — Private Marketplace (#28125), Windows VM reliability (#64592, #62116), local-agent-mode parity (#69663).
4. **Diff/review flexibility** — Compare against any branch (#23626), conventional branch naming (#74722), skill composability (#79560, #79023).
5. **Accessibility & UX polish** — TTS hook (#79620), text selection (#61021), Remote Control localhost support (#76653).
6. **Model/agent cost control** — Explicit subagent model pinning (#75055), Fable 5 credit logic on Max plans (#79341), task tool availability (#77577).

---

## Developer Pain Points (Recurring Frustrations)

| Area | Symptoms | Frequency |
|------|----------|-----------|
| **Windows Cowork** | VM service fails, installer lacks fallback, local-agent sessions invisible in Recents, private Marketplace blocked | 5+ issues in 24h |
| **Session/history loss** | JSONLs deleted despite config, resume prompt ambiguity, no SSH reconnect, Recents out of sync | 4+ issues |
| **Skill/agent composability** | `/code-review` blocks programmatic invoke, custom skills can't call built-ins, subagent model inheritance unpinned, background bash never resumes subagents | 4+ issues |
| **Remote Control gating** | Loopback proxies (`127.0.0.1:*`) disabled since v2.1.196 — breaks local dev proxies, SSH tunnels, corp MITM | 1 issue, 9 👍 |
| **VS Code terminal UX** | Text selection/copy broken, headless `-p` hangs on closed sockets (no timeout/retry) | 2 issues |
| **Auth/identity** | Multi-account missing, Firefox login loop, trust dialog/.mcp.json inconsistency | 3 issues |

---

*Digest generated from GitHub data (anthropics/claude-code) as of 2026-07-21. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-21

---

## 1. Today's Highlights

The community is sharply focused on a **10–20× rate-limit cost regression** (#28879, 358 👍) that drains Plus budgets in 2–3 prompts, making it the top concern. Meanwhile, the **Linux desktop app request** (#11023, 801 👍) remains the most-upvoted feature ask, and **Windows app stability** continues to generate multiple high-impact reports (freezes, sandbox disk saturation, cold-launch process storms). On the engineering side, a wave of PRs landed improvements to permission profiles, sandboxing, history compaction, and skill model organization.

---

## 2. Releases

| Release | Version | Notes |
|---------|---------|-------|
| `rust-v0.145.0-alpha.27` | 0.145.0-alpha.27 | Alpha increment; see [release](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.27) |
| `rust-v0.145.0-alpha.25` | 0.145.0-alpha.25 | Alpha increment; see [release](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.25) |

*No changelog details provided in the release notes; these appear to be rapid alpha iterations.*

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#28879](https://github.com/openai/codex/issues/28879) | **Rate-limit cost per token jumped ~10–20× since June 16** (gpt-5.5, Plus) | Users report budget exhaustion in 2–3 prompts vs. 20+ previously; logs show limit-% consumed per token spiked. Blocks daily workflows. | **208 comments, 358 👍** — Highest engagement in the queue; urgent production impact. |
| [#11023](https://github.com/openai/codex/issues/11023) | **Codex desktop app for Linux** | Mac power/thermal issues drive users to Linux; no native app forces workarounds. | **181 comments, 801 👍** — Most-upvoted issue overall; sustained demand over 5 months. |
| [#20214](https://github.com/openai/codex/issues/20214) | **Codex App freezes/stutters on Windows 11 Pro** | UI hangs despite ample resources (32 GB RAM, Ryzen 5600); affects core usability. | **60 comments, 68 👍** — Persistent since April; multiple repros. |
| [#13733](https://github.com/openai/codex/issues/13733) | **Background polling wastes tokens: each poll triggers full API turn with history** | `cargo build`/`test` polling burns tokens ∝ history size × poll count; silent cost driver. | **31 comments, 29 👍** — Architectural inefficiency; compounds with rate-limit issues. |
| [#31836](https://github.com/openai/codex/issues/31836) | **Projects “Sort By Last Updated” only sorts tasks within groups, not projects** | Core navigation broken; project ordering ignores selection. | **23 comments, 26 👍** — UX regression in Projects view. |
| [#24287](https://github.com/openai/codex/issues/24287) | **Desktop accepts prompt but UI stuck in “Thinking”; Stop fails; turn invisible after restart** | Session state corruption; users lose work and trust in reliability. | **16 comments, 5 👍** — Pro user on macOS 15.6.1; critical for session integrity. |
| [#26633](https://github.com/openai/codex/issues/26633) | **Automations ignore timezone for RRULE scheduling** | Weekly rules display local time but execute as UTC; `DTSTART;TZID` ignored. | **15 comments, 3 👍** — Scheduling reliability gap for global teams. |
| [#31969](https://github.com/openai/codex/issues/31969) | **Unsupported parameter: `reasoning.summary` with `gpt-5.3-codex-spark`** | Model/parameter mismatch blocks reasoning features; unclear model capabilities matrix. | **14 comments, 8 👍** — Signals model rollout / SDK sync issues. |
| [#23200](https://github.com/openai/codex/issues/23200) | **Support headless remote Linux hosts for Codex mobile** | Mobile app requires desktop online; devs want direct SSH server control. | **12 comments, 42 👍** — Strong interest in server-first workflows. |
| [#16127](https://github.com/openai/codex/issues/16127) | **`yeet` skill is over-opinionated (adds `codex/` branch prefix, `[codex]` PR tag, uses git on jj repos)** | Skill imposes conventions without opt-in; breaks non-git VCS workflows. | **11 comments, 26 👍** — Extensibility UX friction. |

---

## 4. Key PR Progress (Last 24h)

| # | PR | Summary | Impact |
|---|----|---------|--------|
| [#34436](https://github.com/openai/codex/pull/34436) | **Honor managed permission profiles in network proxy resolution** | Permission profiles from `requirements.toml` now correctly apply their network config when selected. | Fixes proxy routing for managed environments. |
| [#34435](https://github.com/openai/codex/pull/34435) | **Resolve outbound proxy routes explicitly** | Avoids blocking system proxy discovery; prevents repeated fallback inconsistency across transports. | Improves network reliability & latency. |
| [#34398](https://github.com/openai/codex/pull/34398) | **Support per-environment permission profiles** | Each environment can override thread `PermissionProfile`; inherited when omitted. Applies to shell, exec, patch, FS, approval, network. | Granular security model for multi-env workflows. |
| [#34431](https://github.com/openai/codex/pull/34431) | **Optimize remote compaction history handling** | Single-pass token estimation; avoids full-history cloning when tracing disabled. | Reduces CPU/memory for long-context sessions. |
| [#34429](https://github.com/openai/codex/pull/34429) | **Move shared skill models into `codex-skills`** | Centralizes skill metadata, policy, dependency, interface, config types; updates consumers. | Cleaner plugin architecture; easier skill authoring. |
| [#34423](https://github.com/openai/codex/pull/34423) | **Support Windows sandboxing in the exec server** | Adds native launcher selecting Windows sandbox backend when required; falls back to PTY/pipe. | Unblocks sandboxed execution on Windows. |
| [#34416](https://github.com/openai/codex/pull/34416) | **Show completed hook warnings in TUI headers** | Renders first warning line in hook header (`says:`), indents remainder. | Better visibility into hook failures. |
| [#30235](https://github.com/openai/codex/pull/30235) | **Kill timed-out Git status process groups** | Runs `git status --porcelain` in own process group; kills group on 5s timeout (Unix). | Prevents orphaned git scans stalling worktrees. |
| [#31463](https://github.com/openai/codex/pull/31463) | **Support pathless hosted thread managers** | Makes installation IDs optional; adds `LocalRuntimePaths` capability for hosted managers. | Enables fully remote/in-memory thread stores. |
| [#30949](https://github.com/openai/codex/pull/30949) | **Refresh derived thread titles over time** | Live titles update from later user messages; `derived_title` patches avoid overwriting explicit names. | Improves session list usability. |

---

## 5. Feature Request Trends (from Issues)

1. **Linux Native App** — #1 by 👍 (801); developers on Linux feel deprioritized vs. macOS/Windows.
2. **Remote/Headless Server Support** — Mobile-to-SSH-server workflow (#23200, 42 👍); Windows-to-Windows SSH blocked by POSIX sh requirement (#26164).
3. **Project/Chat Organization** — Project-name prefixes in chat titles (#29681, #26070), proper project sorting (#31836), pinned sidebar context (#26070).
4. **Automation & Scheduling Reliability** — Timezone-aware RRULE (#26633), explicit expiration timestamps (#32726).
5. **Model/Parameter Transparency** — Which models support which parameters (reasoning.summary, etc.) (#31969); rate-limit cost visibility (#28879).
6. **Skill Extensibility** — Opt-in conventions, VCS-agnostic hooks (#16127).
7. **Cross-Platform Parity** — Sandboxing, GPU/Defender interactions, cold-launch performance on Windows (#33737, #34025, #33711).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Signal | Representative Issues |
|------|--------|----------------------|
| **Rate Limits & Token Economics** | 🔥 Critical | #28879 (10–20× cost spike), #13733 (polling burns tokens), #28879 logs show `rate_limits` events misaligned with usage. |
| **Windows App Stability** | 🔥 High | Freezes (#20214, #26401), cold-launch process storms (#34025), sandbox disk saturation (#33737), Defender-induced mouse stutter (#33711). |
| **macOS UI Responsiveness** | 🟡 Medium | Sidebar hover freezes 3–10s (#34376), Ctrl-B shortcut conflict (#10749, #33977), session stuck in “Thinking” (#24287). |
| **Session/History Integrity** | 🟡 Medium | Thread disappears when prompt is pasted-text only (#29069), VS Code history hides local chats (#21244), TUI idle stalls 30–90s (#31401). |
| **Mobile/Remote Workflow Gaps** | 🟡 Medium | Desktop must stay online for mobile (#23200), Windows SSH bootstrap fails (#26164). |
| **Model/Config Opacity** | 🟡 Medium | Unsupported parameter errors (#31969), no clear capability matrix per model, automated `models.json` updates (#31817) without changelogs. |

---

*Generated from `github.com/openai/codex` data as of 2026-07-21. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-21

## 1. Today's Highlights
A critical security fix landed in the A2A server to prevent zero-click RCE in untrusted workspaces (PR #28470), while the nightly release v0.52.0-nightly.20260721 shipped with automated version bumps. The issue backlog reveals persistent stability pain points around subagent hangs, shell command zombies, and memory system reliability, alongside active investment in AST-aware tooling and behavioral evaluation infrastructure.

## 2. Releases
**v0.52.0-nightly.20260721.gacae7124b** — Nightly build published via automated pipeline. [Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260720.gacae7124b...v0.52.0-nightly.20260721.gacae7124b). No user-facing feature notes; primarily CI/CD and internal dependency updates.

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** (P1, 👍8) | Core agent delegation broken; simple folder ops stall for hours. Workaround: disable subagents. | High — 7 comments, 8 upvotes, “need-retesting” |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports success after MAX_TURNS hit** (P1) | False-positive GOAL status masks interruption, corrupting eval/rollup metrics. | 12 comments, 2 upvotes |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell exec stuck at “Waiting input” post-completion** (P1, 👍3) | Zombie shell state blocks follow-up commands; affects all simple CLI ops. | 4 comments, 3 upvotes |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations** (P1) | Scaling behavioral evals (76 tests × 6 models) needs reliable infra; blocks quality gates. | 7 comments |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Leverage model’s bash affinity via sandboxing** (P2) | Strategic: align tooling with Gemini 3’s native POSIX-tool chaining for perf & UX. | 8 comments, 1 upvote |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file read/search/mapping** (P2) | Potential turn/token reduction via precise method-bound reads; eval planned. | 7 comments, 1 upvote |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions indefinitely** (P2) | Extraction agent loops on unread transcripts, wasting compute & polluting memory. | 5 comments |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Skills/sub-agents underused without explicit instruction** (P2) | Discoverability gap: custom skills (gradle, git) ignored unless prompted. | 6 comments |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | **get-shit-done output hook crashes CLI** (P1) | Crash at summary printout; blocks “get-shit-done” workflow. | 3 comments |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** (P1) | Platform regression; persistent session mode broken on modern Linux desktops. | 4 comments, 1 upvote |

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#28470](https://github.com/google-gemini/gemini-cli/pull/28470) | **fix(a2a-server): enforce workspace trust & task isolation (RCE fix)** | Critical security: refactors startup, env loading, adds `AsyncLocalStorage` isolation. | Open (size/xl) |
| [#28469](https://github.com/google-gemini/gemini-cli/pull/28469) | **fix(core): rotate session ID on model fallback** | Prevents stateful API error `[Please submit a new query…]` when falling back to Flash. | Open (size/m) |
| [#28319](https://github.com/google-gemini/gemini-cli/pull/28319) | **refactor(a2a-server): path trust check before env load** | Precursor to #28470; moves trust validation earlier, isolates task env via `AsyncLocalStorage`. | Closed |
| [#28410](https://github.com/google-gemini/gemini-cli/pull/28410) | **fix(core): shorten MCP tools/list timeout (fail fast)** | Cuts 10-min silent freeze at startup when MCP server misbehaves. | Open (P1, size/m) |
| [#28405](https://github.com/google-gemini/gemini-cli/pull/28405) | **fix: prevent scroll jump when user scrolls up during updates** | UX polish: fixes #5009 auto-scroll aggression in `VirtualizedList`. | Open (P1/P2, size/xs) |
| [#28447](https://github.com/google-gemini/gemini-cli/pull/28447) | **docs: Windows PowerShell troubleshooting for `gemini` cmd** | Addresses post-install `gemini` not found in PowerShell; adds shell-specific guidance. | Open (P2, size/s) |
| [#28435](https://github.com/google-gemini/gemini-cli/pull/28435) | **feat(pr-generator-core): env config parser, cmd executor, GitHub REST client** | Foundation for SSR (Self-Service Repair) pipeline: config, exec, API, ANSI filtering. | Open (size/l) |
| [#28433](https://github.com/google-gemini/gemini-cli/pull/28433) | **feat(pr-generator-orchestrator): iterative bug-fix state machine & container worker** | Core orchestration: Firestore locking, AI coding/eval loops, ESLint, diff limits, auto-PR. | Open (size/l/xl) |
| [#28434](https://github.com/google-gemini/gemini-cli/pull/28434) | **feat(pr-generator-agent): Antigravity agent runner & prompt templates** | System prompts for headless iterative code gen/QA/refinement in SSR pipeline. | Open (size/l) |
| [#28432](https://github.com/google-gemini/gemini-cli/pull/28432) | **feat(pr-generator-db): Firestore dual-locking & test ingestion** | Transactional locking, doc ID resolution, lifecycle enums for SSR pipeline state. | Open (size/l/xl) |

## 5. Feature Request Trends
1. **AST-aware tooling** — Multiple epics (#22745, #22746) exploring `tilth`/`glyph` for precise code navigation, reducing turns/tokens.
2. **Behavioral evaluation maturity** — Scaling from 76 tests to robust component-level evals across 6 models (#24353); subagent trajectory sharing for debug/eval (#22598).
3. **Native bash affinity** — Zero-dependency sandboxing to let Gemini 3 chain POSIX tools safely (#19873).
4. **Memory system hardening** — Deterministic redaction, inbox quarantine, retry backoff (#26522, #26523, #26525).
5. **Browser agent resilience** — Session takeover, lock recovery, settings override respect (#22232, #22267).
6. **Self-service repair (SSR) pipeline** — Large PR batch (#28431–#28435) building automated issue→PR generation on Cloud Run.

## 6. Developer Pain Points
- **Subagent instability**: Hangs (#21409), false success reports (#22323), missing context in bug reports (#21763), unwanted auto-activation (#22093).
- **Shell command zombies**: “Waiting input” after completion (#25166), interactive prompt stalls (Vite #22465), tmp script litter (#23571).
- **Memory/skill discoverability**: Skills ignored unless explicit (#21968), symlinked agents not loaded (#20079), auto-memory loops (#26522).
- **Platform gaps**: Wayland browser failure (#21983), PowerShell install issues (#28447), 400 error >128 tools (#24246).
- **UI/UX friction**: Scroll jump on resize/updates (#21924, #28405), `\n` escape bugs (#22466), crash on summary hook (#22186).
- **Config opacity**: Browser agent ignores `settings.json` (#22267), MCP discovery timeout silent freeze (#28410).

---

*Generated from `google-gemini/gemini-cli` GitHub data (issues/PRs updated 2026-07-21). Links point to live GitHub items.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-21

---

## 1. Today's Highlights

Two patch releases (v1.0.72, v1.0.73) shipped yesterday, fixing Anthropic subagent dispatch with `--add-dir` and hardening `agentStop` hook behavior to prevent infinite blocking loops. The issue tracker shows a surge of new regressions: clipboard failures on Windows/WSL, plan-mode tool blocking, context-window 5 MB payload limits, and TUI automation breakdowns — signaling growing friction in multi-platform and agent-orchestration workflows.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.73** | 2026-07-20 | • Anthropic subagents now work when additional directories are configured via `--add-dir`<br>• Relative links in custom agent instructions resolve from the agent file location |
| **v1.0.72** | 2026-07-20 | • `agentStop` hook: after 8 consecutive blocks the CLI ends the turn; hooks receive `stop_hook_active` flag to self-limit<br>• Opt-in `git` and `gh` authentication inside the O… (truncated in feed) |

> **Note:** Both releases address agent/subagent stability — a clear focus area for the team.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **#1481** | **SHIFT+ENTER executes prompt instead of line break** | Violates universal chat UX; forces `CTRL+ENTER` muscle-memory break. | 27 comments, 17 👍 — **CLOSED** (fix likely in recent release) |
| **#3622** | **Copy to clipboard silently fails on Windows** | Regression since v1.0.48; breaks core copy/paste workflow on primary platform. | 4 comments, 4 👍 |
| **#2181** | **`COPILOT_CUSTOM_INSTRUCTIONS_DIRS` stops loading all dirs** | Config regression from v1.0.8 → v1.0.9; affects teams using shared instruction sets. | 2 comments, 1 👍 |
| **#1688** | **Configurable auto-compaction threshold** | High-capacity models (Opus 4.6) degrade at 45–60% context; current trigger is too late. | 2 comments, 5 👍 |
| **#4183** | **Auto-compaction doesn’t prevent 5 MB CAPI payload limit** | Sessions hit hard 5 MB request ceiling *before* compaction triggers — unrecoverable. | 0 comments, 2 👍 |
| **#4185** | **`--add-dir` breaks Claude subagents (400: cache_control blocks >4)** | Blocks multi-directory workflows for Anthropic models; fixed in v1.0.73. | 0 comments |
| **#4188** | **Plan mode now blocks shell commands (regression)** | `gh` CLI, file reads, etc. were used to enrich plans; now forbidden. | 1 comment, 1 👍 |
| **#3747** | **`WAITFOR DELAY` text poisons any model call** | Single keyword triggers unrecoverable timeout — affects SQL docs, logs, tests. | 1 comment, 1 👍 |
| **#4180** | **TUI ignores all PTY keystrokes (breaks automation/orchestration)** | `tmux send-keys`, `expect`, `pty.fork()` cannot drive the CLI — blocks CI/agent tooling. | 0 comments |
| **#4195** | **Code-review agents mutate parent worktree despite read-only contract** | Security/isolation violation; agents described as read-only can write. | 0 comments |

---

## 4. Key PR Progress

**No pull requests updated in the last 24 hours.**  
The release cadence suggests fixes are landing via direct commits or internal branches; community PR velocity is currently zero.

---

## 5. Feature Request Trends (from all open issues)

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Keyboard & TUI UX parity** | #1481 (SHIFT+ENTER), #4179 (click to edit queue), #4181 (paste image in `/btw`), #4180 (PTY automation) | High — 4 distinct input/accessibility gaps |
| **Model & context control** | #1688 (compaction threshold), #4183 (5 MB limit), #4189 (MCP tool footprint accuracy), #4190 (quick model switching) | High — 4 issues around context economics |
| **Session & planning workflow** | #4182 (new session from `/btw`), #4193 (sandboxed `plan.md` write), #4192 (BYOK model for background agents) | Medium — 3 issues on session lifecycle |
| **Configuration flexibility** | #2181 (custom instructions dirs), #4194 (hard-coding complaints) | Medium — regression + architectural frustration |
| **Multi-platform clipboard/terminal** | #3622 (Windows), #4191 (WSL + tmux/screen), #4184 (path copy whitespace) | Medium — 3 environment-specific breaks |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Input model mismatch** — CLI uses `CTRL+ENTER` for newline while every other chat app uses `SHIFT+ENTER`; no config to swap.
2. **Clipboard unreliability** — Silent failures on Windows, WSL/tmux, and VS Code terminal; no fallback or diagnostics.
3. **Configuration regressions** — `COPILOT_CUSTOM_INSTRUCTIONS_DIRS`, plan-mode tool allowlist, and `--add-dir` all broke in recent minors.
4. **Context-window economics** — Auto-compaction triggers too late; 5 MB CAPI hard limit is invisible until failure; MCP tool schema reporting is inaccurate.
5. **Automation-hostile TUI** — PTY-driven keystrokes ignored; no headless/JSON mode for orchestration tools.
6. **Agent isolation leaks** — Code-review agents mutate parent worktree; sandboxed sessions can’t write their own `plan.md`.
7. **Model selection opacity** — Background agents pick models automatically; no BYOK or per-agent override in Desktop.

---

*Digest generated from `github/copilot-cli` data as of 2026-07-21. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-21

## Today's Highlights
No new releases shipped in the last 24 hours. The community surfaced **6 new issues** spanning cloud deployment 429 errors, Windows migration gaps, editor navigation regressions, and a critical `StrReplaceFile` chained-edit counting bug — with a fix already opened as PR #2524. Two session-resilience PRs (#2519, #2520) address stale system prompts and fork/undo context truncation.

---

## Releases
*No releases published in the last 24h.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2209](https://github.com/MoonshotAI/kimi-cli/issues/2209) | **Cloud server 429 `engine_overloaded` for 48+ hrs** | Blocks production workloads on remote Linux hosts; persists across versions v1.24→v1.41 and models (kimi-for-coding, k2.5, k2.6). Diagnostic file attached. | 👍 3, 4 comments — active investigation |
| [#2526](https://github.com/MoonshotAI/kimi-cli/issues/2526) | **`StrReplaceFile` undercounts chained replacements** | Breaks multi-edit workflows: later edits whose `old_string` was produced by earlier edits are missed in the replacement count, causing silent failures. | New, 0 comments — high technical severity |
| [#2525](https://github.com/MoonshotAI/kimi-cli/issues/2525) | **Goal mode spins indefinitely on external waits** | Burns tokens/context while polling for GPU/remote job completion; re-injects full goal context every few seconds. | New — cost/latency impact for long-running tasks |
| [#2523](https://github.com/MoonshotAI/kimi-cli/issues/2523) | **Context compaction resurrects deleted tasks** | v0.6.3 on Windows reopens completed+deleted tasks after compaction, corrupting history. PDF evidence attached. | New — data integrity risk |
| [#2522](https://github.com/MoonshotAI/kimi-cli/issues/2522) | **Windows: `kimi-code` sessions not migrated to `.kimi`** | Upgrade to 1.49.0 leaves `%USERPROFILE%\.kimi-code` orphaned; `kimi migrate` command missing. | New — migration gap for Windows users |
| [#2521](https://github.com/MoonshotAI/kimi-cli/issues/2521) | **Windows: arrow keys broken in `herdr` selector** | v0.27.0 on Windows NT 10.0.22631 — cannot navigate menus with arrow keys (e.g., slash commands). | New — UX regression on Windows |

---

## Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#2524](https://github.com/MoonshotAI/kimi-cli/pull/2524) | `fix(tools): count StrReplaceFile replacements against the running content` | Open | Fixes #2526: counts replacements against progressively edited content, not original file. Ensures chained edits are detected. |
| [#2520](https://github.com/MoonshotAI/kimi-cli/pull/2520) | `fix(session): align fork/undo context truncation to wire turns` | Open | Resolves #2517, #1974, likely #2049. Aligns fork/undo truncation to wire turns; adds regression test for slash-turn shift. |
| [#2519](https://github.com/MoonshotAI/kimi-cli/pull/2519) | `fix(app): refresh stale frozen system prompt on session resume` | Open | Resolves #2420. On resume, reloads system prompt from disk instead of using frozen `context.jsonl` snapshot — picks up new skills/`AGENTS.md` edits. |

---

## Feature Request Trends
*No explicit feature requests in the last 24h; all items are bug reports.* Implicit demand signals:
- **Reliable cloud execution**: #2209 shows teams need predictable quota/throughput on remote servers.
- **Seamless upgrades**: #2522 demands first-class migration tooling (`kimi migrate`) for Windows.
- **Robust multi-edit atomicity**: #2526 reveals reliance on chained `StrReplaceFile` for complex refactors.
- **Cost-aware agent loops**: #2525 requests backoff/pause semantics when waiting on external resources.

---

## Developer Pain Points
1. **Cloud 429 saturation** — Persistent `engine_overloaded` on official platform renders CLI unusable for CI/CD or long-running cloud dev environments; no backoff/retry visibility.
2. **Windows second-class experience** — Missing migration command, broken TUI navigation (arrow keys), and context-compaction corruption (#2521, #2522, #2523).
3. **Session state staleness** — Resumed sessions ignore new skills, `AGENTS.md` changes, and system-prompt updates (#2519).
4. **History drift after fork/undo** — Slash-command turns shift undo cut points, causing mismatches (#2520, #1974, #2049).
5. **Silent multi-edit failures** — `StrReplaceFile` reports success but misses chained edits, leading to incomplete refactors (#2526).

---

*Digest generated from GitHub data (issues/PRs updated 2026-07-20 → 2026-07-21). All links point to MoonshotAI/kimi-cli.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-21

## Today's Highlights
OpenCode **v1.18.4** shipped with adaptive thinking controls for Kimi models on Anthropic-compatible providers and reduced OpenAI header timeouts. The desktop client continues to face a cluster of **"Notification server not found"** crashes across WSL, localhost, and Windows environments, while the new UI (v1.18.1+) has removed the Plan/Build mode toggle, sparking user frustration. A silent 32k output token cap remains a hidden constraint for high-throughput models.

---

## Releases
### v1.18.4
- **Core Improvements**: Adaptive thinking controls for Kimi models on Anthropic-compatible providers (summarized reasoning by default) — [@chouqin](https://github.com/anomalyco/opencode/releases/tag/v1.18.4)
- **Bugfixes**: Reduced OpenAI provider header timeouts during slow connection setup; respected provider-defined reasoning options.

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#27906](https://github.com/anomalyco/opencode/issues/27906) | **v1.15.1+ Breaks Bun Installs** | Postinstall scripts required by v1.15.1+ are blocked by default in Bun (and other non-npm managers), breaking global installs. | 20 comments, 13 👍 — High visibility; affects onboarding for Bun users. |
| [#29363](https://github.com/anomalyco/opencode/issues/29363) | **Silent 32k Output Token Cap** | `limit.output` in config is silently capped at 32k; only workaround is an experimental env var (`OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX`). | 15 comments, 7 👍 — Hidden limit surprises users of DeepSeek/GPT-4/Claude with higher limits. |
| [#37171](https://github.com/anomalyco/opencode/issues/37171) | **Desktop Crash: "Notification server not found: wsl:Ubuntu"** | App fails to start on WSL/Ubuntu after plugin install (oh-my-opencode); stack trace points to renderer notification logic. | 9 comments, 4 👍 — Part of a broader desktop stability pattern. |
| [#37970](https://github.com/anomalyco/opencode/issues/37970) | **Plan/Build Mode Removed in New UI** | v1.18.0+ removed the explicit Plan/Build toggle; behavior is now inconsistent (sometimes plans, sometimes executes). | 9 comments — UX regression; users lose control over agent autonomy. |
| [#37430](https://github.com/anomalyco/opencode/issues/37430) | **Cannot Switch Build/Plan Modes in v1.18.1+** | Toggle button missing entirely in new UI; no entry point to switch modes mid-session. | 6 comments, 2 👍 — Confirmed regression; blocks workflow for users who rely on mode switching. |
| [#23539](https://github.com/anomalyco/opencode/issues/23539) | **Plugin API: Custom Status Bar Widgets** | Long-standing request for a supported API to extend the status bar (consolidates #8619, #18969). | 6 comments, 4 👍 — Strong community interest in extensibility. |
| [#35686](https://github.com/anomalyco/opencode/issues/35686) | **Infinite Startup Crash Loop (Notification Server)** | Desktop v1.17.14 gets stuck in crash loop: `Error: Notification server not found: http://[ip]:4096`; restart/reload doesn’t help. | 6 comments, 1 👍 — Critical desktop blocker; PR #35688 addresses it. |
| [#35434](https://github.com/anomalyco/opencode/issues/35434) | **Multi-Question Tool Fails Silently in TUI (v1.17.13+)** | `question` tool with ≥2 questions renders but Enter submits nothing — no reply/reject event sent. Single questions work. | 6 comments — Regression from #34116; breaks interactive TUI workflows. |
| [#36826](https://github.com/anomalyco/opencode/issues/36826) | **DeepSeek V4 Flash: "Unexpected Server Error"** | Sending prompts with DeepSeek V4 Flash returns generic server error; no actionable logs in UI. | 6 comments, 1 👍 — Provider-specific failure; blocks model adoption. |
| [#23248](https://github.com/anomalyco/opencode/issues/23248) | **Sessions Orphaned on Project Rename/Move** | Session `directory` field stores absolute path; never updated when project moves. Sessions become invisible but remain in DB. | 5 comments, 6 👍 — Data integrity issue; affects long-term session management. |

---

## Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#38026](https://github.com/anomalyco/opencode/pull/38026) | **fix(server)** | Allow authenticated CORS preflight — applies shared CORS policy before auth, enabling browser preflight to reach password-protected servers. |
| [#38014](https://github.com/anomalyco/opencode/pull/38014) | **fix(core)** | Resolve npm plugin entry point as `file://` URL on Windows — fixes `import.meta.resolve()` returning raw paths (`C:\...`) instead of file URLs. Closes #38021. |
| [#38022](https://github.com/anomalyco/opencode/pull/38022) | **docs(ecosystem)** | Add `opencode-hypa` plugin to ecosystem docs. |
| [#38019](https://github.com/anomalyco/opencode/pull/38019) | **fix(opencode)** | Bound shell output after exit — resolves child process status on direct `exit`, waits up to 500ms for EOF, marks incomplete output. |
| [#37647](https://github.com/anomalyco/opencode/pull/37647) | **feat(nix)** | Build `opencode2` (TUI) alongside `opencode` in Nix. Closes #37646. |
| [#37219](https://github.com/anomalyco/opencode/pull/37219) | **fix(opencode)** | Ignore `node_modules` during config/skill discovery — prevents glob scans from traversing `node_modules` (recursive `**/*.md`, `**/SKILL.md`). Closes #30337. |
| [#37956](https://github.com/anomalyco/opencode/pull/37956) | **feat(app)** | Add image backgrounds — background image controls in appearance settings; persists in Cache Storage (web) / managed files (desktop); serves via restricted renderer protocol. |
| [#38016](https://github.com/anomalyco/opencode/pull/38016) | **fix(core)** | Improve patch errors — typed parser errors for missing boundaries, invalid hunk headers with line numbers/alternatives, preserves filesystem failure details. |
| [#38006](https://github.com/anomalyco/opencode/pull/38006) | **feat(codemode)** | Support JSON callbacks — effectful plumbing for `JSON.parse` revivers / `JSON.stringify` replacers; array replacer filtering, ordering, deduplication, number-key coercion. |
| [#35688](https://github.com/anomalyco/opencode/pull/35688) | **fix(app)** | Guard missing notification server state — prevents renderer crash when notification state requested for unknown server key. Closes #35686. |

---

## Feature Request Trends
1. **Extensibility & Plugin APIs** — Status bar widgets (#23539), conversation sync skills (#36509), ecosystem plugin docs (#38022).
2. **Network Resilience** — Built-in proxy with auto-start/stop for restricted environments (#37993); Console Go provider instability (#37056).
3. **UI/UX Control** — Plan/Build mode toggle restoration (#37970, #37430); currency configuration for usage costs (#32485); disable exit splash for embedded/white-label use (#38010).
4. **Session Portability** — Conversation sync across devices (#36509); fix orphaned sessions on project rename (#23248).
5. **Background Customization** — Image backgrounds landed in #37956; brightness/contrast complaints in new desktop client (#37428).

---

## Developer Pain Points
- **Desktop Instability**: Recurring `"Notification server not found"` crashes on WSL (#37171, #36977), localhost (#37331), Windows (#35501, #32923), and generic JS errors (#30627, #30297). PR #35688 mitigates but root cause persists.
- **Bun/Non-npm Install Breakage**: Postinstall scripts blocked by default in Bun (#27906) — blocks adoption for modern package managers.
- **Silent Limits**: 32k output token cap with no UI warning (#29363); multi-question tool fails silently in TUI (#35434).
- **Mode Control Loss**: Plan/Build toggle removed in v1.18+ with no replacement (#37970, #37430) — users cannot reliably choose planning vs. execution.
- **Provider Reliability**: Console Go (opencode-go) returns 400/401/500 for subscribed models (#37056); Kimi K3 fails exclusively (#37815); DeepSeek V4 Flash errors (#36826).
- **Session Management**: Orphaned sessions on directory rename (#23248); web UI 404s when parent message removed (#36371, #36907).

---

*Digest generated from GitHub data (anomalyco/opencode) for 2026-07-21. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-21

## Today's Highlights
No new releases in the last 24 hours. The community is actively addressing a critical regression where `httpIdleTimeoutMs` is ignored for self-hosted OpenAI-compatible providers (#6476), while multiple PRs landed fixes for provider cost reporting, environment variable handling, and compaction reliability. A notable feature push adds Amazon Bedrock Mantle and Qwen Token Plan as built-in providers.

## Releases
No releases published in the last 24h.

## Hot Issues

| Issue | Summary | Why It Matters | Community Reaction |
|-------|---------|----------------|-------------------|
| [#6476](https://github.com/earendil-works/pi/issues/6476) | **Regression: `httpIdleTimeoutMs` ignored for self-hosted OpenAI-compatible provider** (v0.80.6) | Breaks long-running requests to local models (vLLM, etc.) — worked in v0.80.3. | 11 comments, `inprogress` — high urgency for self-hosted users. |
| [#5263](https://github.com/earendil-works/pi/issues/5263) | **Make in-session model/thinking-level changes ephemeral by default** | UX improvement: session-scoped changes won't leak to global settings; adds "Default model" to `/settings`. | 8 comments, 8 👍 — strong community support for clearer defaults. |
| [#3200](https://github.com/earendil-works/pi/issues/3200) | **Support video/audio content in `prompt` RPC command** | Enables multimodal models (Gemma 4, GPT-4o) via extensions. | 6 comments, 4 👍 — requested by extension authors. |
| [#6647](https://github.com/earendil-works/pi/issues/6647) | **Compaction fails on single transient stream drop (no retry)** | Compaction uses one non-retried call; a socket hiccup kills the whole summarization. | 2 comments, `inprogress` — PR #6775 addresses this. |
| [#6652](https://github.com/earendil-works/pi/issues/6652) | **TUI crash log hardcodes `~/.pi/agent/pi-crash.log`, ignores `PI_CODING_AGENT_DIR`** | Crashes create a new `.pi` in home dir when config is relocated. | 4 comments, `inprogress` — affects users with custom config dirs. |
| [#6621](https://github.com/earendil-works/pi/issues/6621) | **Prevent accidental cache invalidation due to dynamic system prompt** | Dynamic prompts cause cache misses on slow-prefill hardware (e.g., AMD Strix Halo). | 5 comments, 1 👍, closed — fix merged. |
| [#6799](https://github.com/earendil-works/pi/issues/6799) | **ENV section in `auth.json` ignored for some providers** | Provider-scoped env vars (e.g., `AZURE_OPENAI_BASE_URL`) not applied; falls back to process env. | 2 comments, closed — fixed in #6864/#6856. |
| [#6888](https://github.com/earendil-works/pi/issues/6888) | **Default system prompt causes Claude Pro/Max OAuth requests to be billed as third-party (400)** | Default prompt triggers Anthropic's third-party classification, hard-failing on overage-disabled accounts. | 1 comment, closed — urgent for Claude Pro/Max users. |
| [#6851](https://github.com/earendil-works/pi/issues/6851) | **`pi-agent-core` statically imports `/compat`, pulling all providers into bundles** | Bundle size regression after migrating off `@earendil-works/pi-ai/compat`. | 4 comments, closed — architectural coupling issue. |
| [#5931](https://github.com/earendil-works/pi/issues/5931) | **Copy-paste from TUI introduces extra spaces/line breaks at wrap points** | Copied text doesn't match original; affects workflows relying on clean clipboard output. | 6 comments, closed as `no-action` — known limitation. |

## Key PR Progress

| PR | Summary | Status | Impact |
|----|---------|--------|--------|
| [#6216](https://github.com/earendil-works/pi/pull/6216) | **feat: Add Amazon Bedrock Mantle OpenAI Responses provider** | Open | New first-class provider for AWS Bedrock Mantle via OpenAI Responses API. |
| [#6881](https://github.com/earendil-works/pi/pull/6881) | **feat(ai): use provider-reported cost when responses include it** | Open | Uses `usage.cost` from Vercel AI Gateway, OpenAI, etc.; falls back to catalog rates. |
| [#6775](https://github.com/earendil-works/pi/pull/6775) | **retry on compaction/branch summarization retryable failures** | Open | Fixes #6647 — adds retries with backoff for transient stream drops during compaction. |
| [#6765](https://github.com/earendil-works/pi/pull/6765) | **feat(ai): separate generated model data** | Open | Moves model data to JSON files; reduces repo churn from catalog updates. |
| [#6864](https://github.com/earendil-works/pi/pull/6864) | **fix: env section ignored in `auth.json`** | Closed | Fixes #6799 — threads `credential.env` through `AuthResult`, prefers over process env. |
| [#6858](https://github.com/earendil-works/pi/pull/6858) | **feat(ai): add Qwen Token Plan as built-in provider** | Closed | Adds `qwen-token-plan` (intl) and `qwen-token-plan-cn` (China) providers. |
| [#6874](https://github.com/earendil-works/pi/pull/6874) | **feat(session-selector): add Ctrl+A archive shortcut** | Closed | Archives sessions to `.pi/archive/YYYY-MM/` from `/resume` picker. |
| [#6786](https://github.com/earendil-works/pi/pull/6786) | **fix(ai): expose Kimi Coding K3 effort levels** | Closed | Adds `low`/`high`/`max` thinking levels for Kimi K3; updates regression tests. |
| [#6865](https://github.com/earendil-works/pi/pull/6865) | **feat: `get_available_thinking_levels` RPC** | Closed | New RPC to query supported thinking levels per model (addresses #6773). |
| [#6671](https://github.com/earendil-works/pi/pull/6671) | **add usage info to branch summary, compaction, tool result entries** | Closed | Enables cost tracking for branch/compaction/tool operations in session history. |

## Feature Request Trends
1. **Multimodal extension support** — Video/audio in `prompt` RPC (#3200), message chrome customization API (#6876), and thinking-level introspection (#6865).
2. **Ephemeral session defaults** — Strong demand for in-session model/thinking changes to stay local unless explicitly saved (#5263).
3. **Extension cost & session ownership** — APIs for extensions to report usage (#6509), rewrite session files at launch (#6863), and customize TUI chrome (#6876).
4. **Provider diversification** — New built-in providers for Bedrock Mantle (#6216), Qwen Token Plan (#6858), and Kimi K3 thinking levels (#6786).
5. **Session lifecycle tooling** — Archive shortcut (#6874), compaction retry logic (#6775), and stable trigger metadata for embedders (#6884).

## Developer Pain Points
- **Self-hosted model timeouts** — `httpIdleTimeoutMs` regression (#6476) blocks local LLM users on vLLM/Ollama.
- **Terminal compatibility** — Kitty double keypress (#5407), TUI copy-paste corruption (#5931), crash log path hardcoding (#6652).
- **Cost & billing surprises** — Copilot GPT-5.6 pricing mismatch (#6725), Claude Pro/Max third-party classification (#6888), missing provider-reported cost usage (#6877).
- **Cache & performance** — Dynamic system prompts invalidating cache on slow-prefill hardware (#6621), compaction fragility on stream drops (#6647).
- **Configuration leaks** — `auth.json` env block ignored (#6799), `PI_CODING_AGENT_DIR` not respected (#6652), lockfile flip-flopping from `./dist/cli.js` (#6812, #6855).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-21

---

## 1. Today's Highlights

- **Nightly release v0.20.0-nightly.20260721** ships autofix improvements: label-driven PR takeover and a fix for forced-dispatch green no-op scenarios.  
- **Critical Token Plan compatibility bugs** dominate the issue tracker: `runSideQuery` forces `enable_thinking=false`, breaking Token Plan endpoints that require thinking enabled (#7284, #7359, #7366).  
- **Autofix fleet observability** gets a major upgrade — PR #7355 renders the entire managed fleet state into scan run summaries, and #7364 resolves review threads whose findings were implemented.

---

## 2. Releases

### v0.20.0-nightly.20260721.cda0e0348
**Type:** Nightly build  
**Key changes:**
- `feat(autofix)`: Label-driven takeover and release; fix forced-dispatch green no-op ([#7165](https://github.com/QwenLM/qwen-code/pull/7165))
- Additional autofix refinements

> Nightly builds are pre-release; production users should stay on stable (v0.19.x).

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#7040](https://github.com/QwenLM/qwen-code/issues/7040) | **RFC: Reliable auto-memory recall** — timing, quality, telemetry | Core memory recall path redesign; affects all users' context persistence. Narrowed scope after maintainer feedback. | 7 comments, active design discussion |
| [#7147](https://github.com/QwenLM/qwen-code/issues/7147) | **MCP server never gets tool/resource listing** (Fastmail MCP) | Blocks MCP integration for popular services; authentication works but tool discovery times out. | 6 comments, `welcome-pr` |
| [#7284](https://github.com/QwenLM/qwen-code/issues/7284) | **`runSideQuery` forces `enable_thinking=false`** — breaks Token Plan endpoints | **P1 bug**: `web_fetch`, classifiers fail with 400 on Token Plan APIs that require thinking. | 3 comments, multiple duplicates (#7359, #7366) |
| [#7316](https://github.com/QwenLM/qwen-code/issues/7316) | **OpenAI toolCall quirks break `subAgent`** — empty `working_dir` + `isolation` conflict | Subagents unusable with OpenAI-compatible models; schema validation fails on mutually exclusive fields. | 3 comments, `roadmap/subagents-tools` |
| [#7315](https://github.com/QwenLM/qwen-code/issues/7315) | **Agent tool schema forces mutually exclusive `working_dir`/`isolation`** | Same root cause as #7316; validation rejects valid subagent launches. | 2 comments, P1, `welcome-pr` |
| [#7023](https://github.com/QwenLM/qwen-code/issues/7023) | **Model switch invalidates loaded daemon session** | Daemon sessions become unavailable after model switch in embedded WebShell. | 3 comments, `daemon`, `welcome-pr` |
| [#7301](https://github.com/QwenLM/qwen-code/issues/7301) | **Web Shell loses bearer token on refresh** when daemon started with `--token` | Auth persistence broken for browser-based workflows; token dropped after page reload. | 2 comments, P2 |
| [#7049](https://github.com/QwenLM/qwen-code/issues/7049) | **Update check: soften timeout UX** — warning instead of error, raise budget | Post-#6857 fix, slow npm registry regions see hard errors; needs graceful degradation. | 3 comments, P3 enhancement |
| [#7306](https://github.com/QwenLM/qwen-code/issues/7306) | **Harden tool-output budgeting, observability, artifact lifecycle** | Multiple independent truncation paths cause inconsistent behavior; needs unified budgeting. | 2 comments, `need-discussion` |
| [#6414](https://github.com/QwenLM/qwen-code/issues/6414) | **VS Code: "Failed to connect to Qwen agent"** | Persistent IDE integration failure; blocks VS Code users. | 5 comments, `need-information` |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#7308](https://github.com/QwenLM/qwen-code/pull/7308) | `autofix/takeover` | **Workspace runtime ownership** for `qwen serve` — ACP lifecycle/capability state moves to registered workspace with explicit startup, reconciliation, idle cleanup. |
| [#7355](https://github.com/QwenLM/qwen-code/pull/7355) | `autofix/takeover` | **Fleet visibility** — every scan renders per-PR decision table into run summary; answers "what's stuck?" at a glance. |
| [#7364](https://github.com/QwenLM/qwen-code/pull/7364) | `autofix/takeover` | **Review thread resolution** — autofix resolves threads whose findings it implemented; reduces re-review noise. |
| [#7350](https://github.com/QwenLM/qwen-code/pull/7350) | `autofix/takeover` | **Real-time managed PR pickup** — processes review feedback instantly via `pull_request_review` trigger instead of waiting for scheduled scan. |
| [#7344](https://github.com/QwenLM/qwen-code/pull/7344) | `fix` | **Relax `additionalProperties:false` on OpenAI wire** for optional-field schemas — fixes subagent tool validation failures with OpenAI-compatible models. |
| [#7351](https://github.com/QwenLM/qwen-code/pull/7351) | `autofix/takeover` | **Retry verification-gate crashes** — distinguishes gate rejection from gate crash; retries crashes instead of burying agent's fix. |
| [#7322](https://github.com/QwenLM/qwen-code/pull/7322) | `fix` | **Safe background npm updates** — installs to immutable launcher-scoped dir; active session unaffected; atomic launcher swap. |
| [#7357](https://github.com/QwenLM/qwen-code/pull/7357) | `feat` | **Overridable default-disabled skills** — `skills.defaultDisabled` (soft), `skills.enabled` (explicit opt-in), `skills.disabled` (hard). Case-insensitive matching. |
| [#7256](https://github.com/QwenLM/qwen-code/pull/7256) | `fix` | **Strip daemon secrets from agent child env** — fixes #6601; prevents `QWEN_SERVER_TOKEN` leakage to shell subprocesses/MCP servers. |
| [#7376](https://github.com/QwenLM/qwen-code/pull/7376) | `chore` | **Simplify CODEOWNERS** — 80-line granular rules → single package-level rule for `packages/core/` (4 core maintainers). CUA Driver & Mobile MCP keep dedicated owners. |

---

## 5. Feature Request Trends

| Trend | Representative Issues | Signal |
|-------|----------------------|--------|
| **Memory & Context Automation** | #7040 (RFC auto-memory recall), #7335 (telemetry for channel memory recall) | High — core roadmap item, multiple PRs in flight |
| **Subagent / Background Agent Maturity** | #7348 (context-inheriting subagents in headless), #7316/#7315 (schema fixes), #7334 (background agent responses dropped) | High — `roadmap/subagents-tools`, `roadmap/background-automation` tags |
| **Token Plan / Provider Compatibility** | #7284, #7252 (token-plan.ap-southeast-1 not selectable), #7359, #7366 | Critical — blocking cloud users |
| **MCP Ecosystem Reliability** | #7147 (tool listing timeout), #7314 (prompt positional args dropped) | Medium — `welcome-pr` labels indicate community help wanted |
| **Daemon / WebShell Stability** | #7023 (model switch breaks session), #7301 (token loss on refresh), #7244 (ACP initialize timeout configurable) | Medium — affects long-running/server-mode users |
| **Observability & Telemetry** | #7306 (tool-output budgeting), #7335 (content-safe recall telemetry), #7236 (thinking tokens in stats) | Growing — infra investment |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Token Plan API incompatibility** — `enable_thinking=false` hardcoded in side-queries breaks Qwen Cloud Token Plan endpoints (multiple P1 bugs, duplicates filed).  
2. **Subagent tool schema rigidity** — OpenAI-compatible models emit empty optional fields (`working_dir=""`), causing validation failures on mutually exclusive `isolation`/`working_dir`.  
3. **MCP server flakiness** — Tool/resource listing timeouts (Fastmail), prompt argument handling bugs; blocks ecosystem adoption.  
4. **Daemon session fragility** — Model switches invalidate sessions; WebShell loses auth tokens on refresh; ACP initialize timeouts non-configurable.  
5. **Update check UX regression** — Post-fix (#6857), slow npm registry regions see hard errors instead of graceful warnings.  
6. **VS Code extension connection failures** — Persistent "Failed to connect to Qwen agent" with ACP process exit code 0.  
7. **Autofix fleet opacity** — Before #7355, no single view of managed PR health; reviewers re-read resolved threads.  
8. **Secret leakage risk** — Daemon bearer tokens inherited by agent-spawned subprocesses (fixed in #7256, but highlights supply-chain concern).  

---

*Digest generated from GitHub data as of 2026-07-21. Links point to live issues/PRs on github.com/QwenLM/qwen-code.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-07-21

---

## 1. Today's Highlights
The v0.9.1 release-blocker sprint dominates activity: 50 issues and 25 PRs updated in 24h, nearly all tagged `v0.9.1` and `release-blocker`. The team is converging on four pillars — **truthful child runtime manifests**, **unified permission contracts (Ask/Auto-Review/Full Access)**, **provider-neutral model routing**, and **TUI reliability fixes** (scrolling, onboarding persistence, Enter-key latency). Windows-specific regressions (process leaks, scroll truncation, setup-wizard loops) received same-day fixes.

---

## 2. Releases
**No new releases in the last 24h.** The v0.9.1 milestone remains in active stabilization.

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#4032](https://github.com/Hmbown/CodeWhale/issues/4032) | **Codewhale not following the constitution** — agent ignores provided scripts, writes throwaway temp scripts instead | Highest comment count (40); signals core agent-reliability regression blocking trust in autonomous workflows | 40 comments, 0 👍 — active debate on constitution enforcement |
| [#4042](https://github.com/Hmbown/CodeWhale/issues/4042) | **Environment-level tool sandboxing for sub-agents** — enforce `tool_restrictions` across sessions, Fleet, MCP | Closed with 18 comments; foundational for multi-tenant/enterprise security posture | 18 comments — design consensus reached, implementation merged |
| [#4489](https://github.com/Hmbown/CodeWhale/issues/4489) | **Hooks process leak on Windows** — `node.exe` grandchildren survive hook timeouts | Closed; fixes Windows resource exhaustion during long hook chains | 6 comments — confirmed leak, fix validated |
| [#414](https://github.com/Hmbown/CodeWhale/issues/414) | **Resolve one truthful child runtime before launch** — single persisted manifest for prompt, tools, permissions, workspace | Open release-blocker; architectural prerequisite for deterministic sub-agent delegation | 5 comments — design locked, implementation in flight |
| [#2889](https://github.com/Hmbown/CodeWhale/issues/2889) | **Work Agent rows: real sub-agent details & structured activity** — restore sidebar fidelity for Planner/Worker/Reviewer/Verifier | Open; UX blocker for fleet observability | 4 comments — community-owned slice, awaiting focused pass |
| [#4605](https://github.com/Hmbown/CodeWhale/issues/4605) | **Enter key send lag — UI freezes 100s of ms on message send (multi-version legacy)** | Open P1 regression across 0.6.x–0.9.0 on Windows; high-frequency touch point | 2 comments — perf profiling underway |
| [#4603](https://github.com/Hmbown/CodeWhale/issues/4603) | **Long output content cannot scroll — truncated beyond viewport** | Open P2; blocks review of large diffs/logs on Windows | 2 comments — PTY test scenario added in #4653 |
| [#3934](https://github.com/Hmbown/CodeWhale/issues/3934) | **Collapse Fleet/agent roles to Planner / Worker / Reviewer / Verifier** | Open release-blocker; simplifies mental model & permission mapping | 2 comments — canonical parser/reducer in progress |
| [#4604](https://github.com/Hmbown/CodeWhale/issues/4604) | **Setup wizard forced on every restart — first-run flag not persisted** | Closed P1 blocking; Windows `CODEWHALE_HOME` isolation fix | 2 comments — resolved via state-root contract (#4616) |
| [#4594](https://github.com/Hmbown/CodeWhale/issues/4594) | **Top bar/sidebar list does not scroll to bottom (10-item To-do)** | Closed; viewport clipping in Work surface | 2 comments — fixed in #4607 |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#4653](https://github.com/Hmbown/CodeWhale/pull/4653) | **test(tui): lock long-output transcript scrolling with PTY scenario** — end-to-end test for #4603 (3+ viewport reply retained, head/tail markers reachable) | Open |
| [#4652](https://github.com/Hmbown/CodeWhale/pull/4652) | **feat(cli): add `--no-project-config` for reproducible headless exec** — gates workspace config overlay, enables CI/hermetic runs | Open |
| [#4618](https://github.com/Hmbown/CodeWhale/pull/4618) | **fix(tui): keep long-running tools live** — liveness heartbeats around tool boundary prevent 10-min stall watchdog from stranding follow-up input | Closed |
| [#4613](https://github.com/Hmbown/CodeWhale/pull/4613) | **fix(tui): sanitize Moonshot tool parameters per MFJS spec** — root `type:object`, no `anyOf`/`oneOf` at root; normalizes `apply_patch`, `finan...` schemas | Closed |
| [#4617](https://github.com/Hmbown/CodeWhale/pull/4617) | **fix(kimi): enforce exact K3 and MFJS contracts** — route-scoped model/endpoint/reasoning receipts; fail closed on schema mismatch | Closed |
| [#4616](https://github.com/Hmbown/CodeWhale/pull/4616) | **fix(tui): make onboarding completion durable** — persists via state-root contract; respects `CODEWHALE_HOME` isolation | Closed |
| [#4615](https://github.com/Hmbown/CodeWhale/pull/4615) | **fix(tui): present built-in Fleet as ready** — replaces idle label with truthful localized copy; keeps fail-closed for missing provider | Closed |
| [#4609](https://github.com/Hmbown/CodeWhale/pull/4609) | **fix(tui): respect umask for workspace atomic writes** — separates workspace file perms from internal persistence (#4606) | Closed |
| [#4607](https://github.com/Hmbown/CodeWhale/pull/4607) | **fix(tui): restore durable Work surface progress** — stops redraw snapping, hides clean completed ops, restores localized To-do section | Closed |
| [#4600](https://github.com/Hmbown/CodeWhale/pull/4600) | **feat(tui): auto-fork read-only same-route children onto parent's cached prefix** — eliminates ~100K token cold-start per subagent | Closed |

---

## 5. Feature Request Trends (Distilled from All Issues)

1. **Unified Permission Contract** — Single typed decision for Ask / Auto-Review / Full Access across *all* call types (root, child, background, MCP, streaming) — [#4412](https://github.com/Hmbown/CodeWhale/issues/4412), [#4626](https://github.com/Hmbown/CodeWhale/issues/4626), [#4608](https://github.com/Hmbown/CodeWhale/pull/4608)
2. **Provider-Neutral Model Routing** — Remove DeepSeek-specific fallback; route-scoped fallback state for Moonshot, xAI, custom endpoints — [#4644](https://github.com/Hmbown/CodeWhale/issues/4644), [#4640](https://github.com/Hmbown/CodeWhale/issues/4640), [#4617](https://github.com/Hmbown/CodeWhale/pull/4617)
3. **Four Canonical Agent Roles** — Planner / Worker / Reviewer / Verifier everywhere; capability/permission/model/lifecycle decoupled from role name — [#3934](https://github.com/Hmbown/CodeWhale/issues/3934)
4. **Truthful Child Runtime Manifest** — Single persisted manifest (prompt, tools, schemas, workspace, identity) resolved *before* child launch — [#414](https://github.com/Hmbown/CodeWhale/issues/414), [#4627](https://github.com/Hmbown/CodeWhale/issues/4627)
5. **Bounded Child Completion Handoffs** — Durable session-owned evidence + deterministic bounded preview to parent; never present partial as full — [#4646](https://github.com/Hmbown/CodeWhale/issues/4646)
6. **TUI Reliability & Polish** — Scrollable long output, grapheme-safe emoji/keycap rendering, Enter-key latency, durable Work surface, clickable URLs — [#4603](https://github.com/Hmbown/CodeWhale/issues/4603), [#4510](https://github.com/Hmbown/CodeWhale/pull/4510), [#4605](https://github.com/Hmbown/CodeWhale/issues/4605), [#4643](https://github.com/Hmbown/CodeWhale/issues/4643)
7. **Headless/CI First-Class Support** — `--no-project-config`, stream-json resumable checkpoints, reproducible config surface — [#4652](https://github.com/Hmbown/CodeWhale/pull/4652), [#4631](https://github.com/Hmbown/CodeWhale/issues/4631)

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Windows TUI regressions** — process leaks (#4489), scroll truncation (#4603), Enter-key lag (#4605), setup-wizard loop (#4604), grapheme corruption (#4510) | 6+ issues/PRs in 24h | High |
| **Sub-agent cold-start token waste** — ~100K input tokens per child re-prefilling context parent already paid for | #4600, #414, #4627 | High |
| **Permission modal fatigue** — Auto-Review still shows approval modals for ordinary calls; Ask/Full Access inconsistent across handoffs | #4626, #4608, #4412 | High |
| **Fleet/agent role ambiguity** — too many role names leaking into UI; no canonical parser | #3934, #2889 | Medium |
| **Model routing opacity** — DeepSeek fallback silently inherited by Moonshot/xAI routes; no provider-neutral fallback UI | #4644, #4640, #4617 | Medium |
| **Child completion truncation** — 489 KB child output → bounded preview only; no durable full evidence access | #4646 | Medium |
| **Onboarding non-persistence** — first-run wizard reappears on every restart (Windows) | #4604, #4616 | Medium |
| **Long-output review impossible** — no scroll beyond viewport for diffs/logs | #4603, #4653 | Medium |

---

*Digest generated from GitHub data as of 2026-07-21 00:00 UTC. All links point to Hmbown/CodeWhale repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*