# AI CLI Tools Community Digest 2026-08-06

> Generated: 2026-08-06 01:58 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-06)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is characterized by **rapid, parallel iteration** across nine major projects, with all teams shipping releases or pre-releases in the past 24 hours. A clear bifurcation has emerged: **model-provider-owned tools** (Claude Code, Codex, Gemini CLI, Qwen Code, Copilot CLI) prioritize deep model integration, enterprise policy controls, and desktop GUI stability; **independent/extendable tools** (OpenCode, Pi, Kimi Code, DeepSeek TUI) emphasize protocol-level extensibility (MCP/ACP), runtime APIs, and cross-provider flexibility. Security hardening, session reliability, and MCP/ACP ecosystem maturation are universal priorities, while Windows stability and terminal rendering remain cross-cutting pain points.

---

## 2. Activity Comparison

| Tool | Hot Issues (Top 10) | Key PRs (Merged/Open) | Release Status (Last 24h) | Primary Signal |
|------|---------------------|----------------------|---------------------------|----------------|
| **Claude Code** | 10 (max 46 👍 on #66504) | 3 open PRs | **v2.1.223** stable (wildcard marketplace, agent warnings) | Quota opacity, MCP param loss, Desktop crashes |
| **OpenAI Codex** | 10 (max 373 👍 on #9203) | 10 merged, 13 alpha builds | **rust-v0.146.1** stable (security), **0.147.0-alpha** rapid | `/undo` missing, MCP zombies (37 GB), Windows BSODs |
| **Gemini CLI** | 10 (multiple P1) | 10 open (5 bug fixes) | **v0.54.0** stable, **v0.55.0-preview.1**, **nightly** | Subagent false success, shell "Waiting input", AST tooling |
| **Copilot CLI** | 10 (max 8 👍 on #1799) | 0 updated | **4 pre-releases** (v1.0.79-2 → -5) | MCP enterprise parity, alt-screen forced, Windows crashes |
| **Kimi Code** | 3 (critical severity) | 3 open | None | Silent file corruption, MCP abort mid-task, memory system demand |
| **OpenCode** | 10 (max 134 👍 on #11176) | 10 open (2 closed) | **v1.18.14** (xAI auth, provider retries) | No VS Code ext, Go plan API opacity, cross-project sessions |
| **Pi** | 10 (max 23 👍 on #534) | 10 open | None | Windows fragmentation, OSC-8 truncation, XDG compliance done |
| **Qwen Code** | 10 (2 P1 security) | 10 open | **v0.21.6** stable, **nightly**, **desktop-v0.1.0** Tauri | Credential leak, read-only bypass, CI hangs, Windows desktop broken |
| **DeepSeek TUI** | 3 (low engagement) | 10 open (release train) | None (v0.9.4 train 77 commits) | Single API key, ACP tool exposure, Runtime API completeness |

---

## 3. Shared Feature Directions

| Requirement | Tools Demanding | Specific Needs |
|-------------|-----------------|----------------|
| **MCP/ACP Reliability & Enterprise Parity** | Claude Code, Codex, Copilot CLI, OpenCode, Qwen Code, DeepSeek TUI | Param-dropping fixes (Claude #72228, Codex #12491), registry policy fetch on GHEC (Copilot #4378), HTTP Streamable transport (OpenCode #8058), ACP tool execution (DeepSeek #5225), OAuth 3LO support |
| **Session Continuity & Portability** | Claude Code, Codex, Gemini CLI, OpenCode, Qwen Code | `--continue` resume (Claude #82536), history rehydration (Codex #23979), cross-project session picker (OpenCode #31932), transcript portability (Claude #81946), session export (OpenCode #40781) |
| **Model/Reasoning Config Transparency** | Codex, Copilot CLI, OpenCode, Qwen Code, Pi | Effort flag display mismatch (Copilot #3135), per-session guardrails (Claude #77136), DeepSeek China opt-in surprise (OpenCode #39845), ephemeral model switches (Pi #5263), Anthropic alias parsing (Qwen #8584) |
| **Security Hardening** | All 9 tools | Credential sanitization (Qwen #8136, Claude), read-only bypass (Qwen #8582), cyber-model auto-review defaults (Codex v0.146.1), MCP policy enforcement (Copilot #3934), sandbox allowlists (DeepSeek #5005) |
| **Windows/Desktop Stability** | Claude Code, Codex, Copilot CLI, Qwen Code, Pi | 5hr crash loop (Claude #83403), Sysmon BSOD (Codex #31035), native runtime crashes (Copilot #4026), Tauri `EISDIR` (Qwen #8615), runtime prioritization (Pi #7547) |
| **Terminal/TUI Rendering Fixes** | Codex, Gemini CLI, Copilot CLI, Qwen Code, Pi, DeepSeek TUI | tmux flicker (Qwen #8580), alt-screen toggle (Copilot #1799), OSC-8 truncation (Pi #7399), resize duplicate output (Gemini #25166), ratatui pin (DeepSeek #5192) |

---

## 4. Differentiation Analysis

| Dimension | Model-Provider Tools | Independent/Extendable Tools |
|-----------|---------------------|------------------------------|
| **Core Focus** | Model integration depth, enterprise policy, desktop GUI polish | Protocol extensibility (MCP/ACP), runtime APIs, multi-provider agnosticism |
| **Target Users** | Enterprise teams, model subscribers, IDE-integrated workflows | Power users, plugin authors, multi-model workflows, air-gapped/self-hosted |
| **Technical Approach** | Tight coupling to proprietary models; managed cloud sync; MSIX/dmg installers | Open protocol surfaces (Runtime API, ACP); local-first; single binary / npm / cargo distribution |
| **Release Cadence** | Weekly stable + daily alpha/preview (Codex 13 alphas/24h) | Bi-weekly stable + nightly; release trains with batch PRs (DeepSeek 77 commits) |
| **Extensibility Model** | Marketplace/plugins (Claude), Skills (Codex/Gemini), MCP servers | ACP tools (DeepSeek), Runtime API endpoints (Pi/DeepSeek), Skills with `disable-model-invocation` (OpenCode) |
| **Data/Privacy Stance** | Telemetry opt-in pressure (Claude #66504 46 👍), cloud sync by default | XDG compliance (Pi #534), local-only scratch (Claude #81946), offline install (OpenCode #40590) |

**Notable Outliers:**
- **Kimi Code**: Minimal community signal (3 issues, 0 comments on critical bugs) — early stage or closed development.
- **Pi**: Unique "Harness" architecture redesign (lane reducers, configurable factories) targeting embeddable/managed deployments.
- **DeepSeek TUI**: Only tool building **ACP tool execution** as first-class feature (#5225), enabling Zed/adapter parity.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Maturing** | **OpenAI Codex**, **Claude Code**, **Gemini CLI** | Highest issue engagement (373 👍, 46 👍), daily releases, 10+ PRs merged/day, enterprise-grade issue tracking |
| **Rapid Iteration / Growing** | **OpenCode**, **Qwen Code**, **Copilot CLI** | Strong community signals (134 👍 VS Code ask), weekly stable + pre-release cadence, desktop app investment (Qwen Tauri, Copilot sessions) |
| **Protocol-Focused / Niche** | **Pi**, **DeepSeek TUI** | Deep architectural PRs (Harness v2, Runtime API batch), lower raw issue count but high technical depth, multi-provider design |
| **Early / Low Visibility** | **Kimi Code** | Critical bugs with zero community discussion; no releases in 24h; single-vendor dependency (MoonshotAI) |

**Key Maturity Indicators:**
- **VS Code extension demand** is the #1 adoption blocker for non-Microsoft tools (OpenCode 134 👍, Codex implied).
- **MCP/ACP implementation completeness** correlates with ecosystem traction — Codex, Claude, OpenCode, DeepSeek investing heavily.
- **Windows native support** remains a maturity gate: only Copilot CLI and Qwen Code ship Windows desktop apps; others rely on WSL.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication for Developers |
|-------|-----------------|----------------------------|
| **MCP → ACP Convergence** | High | Tools exposing **ACP tool execution** (DeepSeek #5225, Pi tool prompt colocation #7671) will win editor integrations. Invest in ACP-compatible skill/tool authoring. |
| **Session as Portable Asset** | High | Demand for **export/import, cross-project, cross-machine session continuity** (OpenCode, Claude, Codex). Build workflows assuming session portability. |
| **Model-Agnostic Runtime Layer** | Rising | OpenCode, Pi, DeepSeek building **provider-agnostic runtimes** with Runtime APIs. Avoid hardcoding model-specific logic in automation. |
| **Security-by-Default in Tool Calling** | Critical | Credential sanitization, read-only enforcement, cyber-model guardrails now shipping in **stable channels** (Codex v0.146.1, Qwen #8582). Audit tool permissions. |
| **Desktop App as Second Interface** | Accelerating | Qwen (Tauri), Copilot (Sessions tab), Claude (Desktop) all shipping native GUIs. CLI-only tools risk workflow gaps for non-terminal users. |
| **Observability Standardization (OTel)** | Emerging | Qwen aligning session lifecycle to OpenTelemetry (#8616). Expect structured logs/traces to become integration requirement. |
| **Windows as Tier-1 Target** | Forcing | Sysmon BSODs (Codex), Tauri crashes (Qwen), native runtime instability (Copilot) show **Windows native support is now table stakes**. |

---

## Recommendation Summary

| For... | Prioritize Tools |
|--------|------------------|
| **Enterprise standardization** | Claude Code (policy controls), Copilot CLI (GitHub/GHEC integration), Codex (security defaults) |
| **Multi-model / provider-agnostic workflows** | OpenCode (Go plan, LiteLLM), Pi (Harness embeddability), DeepSeek TUI (ACP tool execution) |
| **Local-first / air-gapped / self-hosted** | OpenCode (GITHUB_TOKEN install, LAN discovery), Pi (XDG, offline), Kimi Code (if maturity improves) |
| **Editor integration (VS Code/Zed)** | Copilot CLI (native), OpenCode (high-demand gap), DeepSeek TUI (ACP → Zed) |
| **Cutting-edge protocol development** | Pi (Harness v2), DeepSeek TUI (Runtime API), OpenCode (workspace flows) |

*The ecosystem is converging on **MCP/ACP as the plugin substrate**, **session portability as a user right**, and **Windows native stability as a baseline**. Tools that treat these as architectural commitments — not afterthoughts — will lead the next adoption wave.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-06 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[skill-creator] fix: run_eval.py 0% recall bug** ([#1298](https://github.com/anthropics/skills/pull/1298)) | Core tooling: fixes the evaluation harness that optimizes skill descriptions; currently reports 0% recall for all skills, breaking the optimization loop | 10+ independent reproductions; blocks automated skill improvement; Windows subprocess + trigger detection fixes | **Open** (Jun 10 → Jun 23) |
| 2 | **skill-creator: Windows subprocess/encoding fixes** ([#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)) | Makes `run_eval.py` / `run_loop.py` work on Windows (claude.cmd vs claude, pipe encoding) | Same root cause as #1298; `WinError 10038` / `WinError 2`; skill-creator unusable on Windows | **Open** (May 7 → May 24) |
| 3 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | Prevents orphan/widow lines, header stranding, numbering misalignment in AI-generated docs | "Affects every document Claude generates"; users rarely ask for typography but need it | **Open** (Mar 4 → Mar 13) |
| 4 | **self-audit** ([#1367](https://github.com/anthropics/skills/pull/1367)) | Mechanical file verification → 4-dimension reasoning audit (correctness, completeness, safety, style) before delivery | Universal, stack-agnostic quality gate; v1.3.0; addresses "hallucinated file outputs" | **Open** (Jun 28 → Jul 2) |
| 5 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | Full testing stack: Trophy model, AAA pattern, React Testing Library, E2E, contract testing, property-based | Comprehensive reference; covers philosophy → implementation; high utility for dev teams | **Open** (Mar 22 → Apr 21) |
| 6 | **ODT skill** ([#486](https://github.com/anthropics/skills/pull/486)) | Create/fill/read/convert OpenDocument (.odt, .ods) via LibreOffice; template filling + ODT→HTML | ISO standard format; enterprise demand; MCP server integration | **Open** (Mar 1 → Apr 14) |
| 7 | **color-expert** ([#1302](https://github.com/anthropics/skills/pull/1302)) | Color naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), accessibility | Design/branding workflows; "what to use when" decision table; self-contained | **Open** (Jun 10 → Jul 21) |
| 8 | **pyxel** ([#525](https://github.com/anthropics/skills/pull/525)) | Retro/pixel-art/8-bit game development via Pyxel MCP server (write → run_and_capture → inspect → iterate) | Niche but passionate community; MCP-based tooling; iterative visual feedback loop | **Open** (Mar 5 → Jul 15) |

> **Note:** PR comment counts show "undefined" in source data; ranking combines issue cross-references (e.g., #556 → #1298), update frequency, and problem severity.

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issues) | Community Signal |
|-------|-------------------|------------------|
| **Skill distribution security & namespace trust** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍) — community skills published under `anthropic/` namespace impersonate official skills | **Critical**: Users granting elevated permissions to untrusted skills; needs namespace isolation or verification |
| **Organizational skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍) — no native org-wide skill library; manual file transfer via Slack/Teams | **High**: Teams need discoverable, versioned, permissioned skill catalogs |
| **skill-creator evaluation pipeline reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍), [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments) — 0% recall across all queries; optimization loop broken | **High**: Core tooling for skill authors is non-functional; blocks quality improvement |
| **Duplicate skill installation** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍) — `document-skills` + `example-skills` install identical content | **Medium**: Wastes context window; plugin packaging needs deduplication |
| **Context window exhaustion** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments) — `claude-api` skill injects ~156k tokens in one call | **Medium**: Skills must be token-aware; lazy loading / summarization needed |
| **Reasoning quality gates** | [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments) — proposal: Pre-task Calibration → Adversarial Review → Delivery Verification | **Emerging**: Community building meta-skills for output verification |
| **Bedrock / enterprise deployment** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments) — no guidance for AWS Bedrock integration | **Niche but persistent**: Enterprise adoption blocker |
| **MCP exposure for skills** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) — skills as MCP servers for standard API surfaces | **Strategic**: Aligns skills with broader tool ecosystem |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It Has Momentum | Blockers |
|----|-------|---------------------|----------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator eval fix** | 10+ reproductions; blocks all skill optimization; multiple contributors (MartinCajiao, Polluelo978, alvingarcia) attacking same problem | Windows + trigger detection + parallel worker isolation all needed |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Universal quality gate; addresses hallucinated files + reasoning errors; v1.3.0 suggests iteration | Needs review for token overhead vs. value |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | "Affects every document"; low maintenance; high user-visible impact | None apparent — ready for merge |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive reference skill; aligns with "testing trophy" best practices | Scope is large; may need modular split |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Self-contained; design/branding workflow gap; decision tables reduce ambiguity | None apparent |
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | Addresses #1417 (planning artifact accumulation); lifecycle management for `.claude/plans/` | New (Jul 25); needs design review |
| [#538](https://github.com/anthropics/skills/pull/538), [#541](https://github.com/anthropics/skills/pull/541) | **pdf/docx fixes** | Case-sensitivity + w:id collision fixes; prevent document corruption | Small, targeted — likely quick merges |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *trustworthy, production-ready skill tooling*: a working skill-creator evaluation pipeline (currently broken), secure namespace-isolated distribution (preventing impersonation), and organizational sharing primitives — without which skills remain local experiments rather than shareable, auditable capabilities.**

---

# Claude Code Community Digest — 2026-08-06

---

## 1. Today's Highlights

- **v2.1.223 released** with owner wildcard support (`"owner/*"`) for marketplace allow/block lists and new warnings for workflow agents, forked skills, and resumed background agents.
- **Claude Max quota consumption bug** (#82506, 17 comments) remains the hottest open issue — users report session limits draining without active usage.
- **MCP parameter-dropping regression** (#72228) and **Claude Desktop 5-hour crash loop** (#83403) are critical stability blockers affecting Linux and Windows respectively.

---

## 2. Releases

### v2.1.223
| Change | Impact |
|--------|--------|
| Owner wildcard entries (`"owner/*"`) in `strictKnownMarketplaces` / `blockedMarketplaces` | Simplifies org-wide marketplace policy management |
| Warning for workflow agents, forked skills, slash commands, resumed background agents | Improves visibility into background agent lifecycle |

[Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.223)

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#82506](https://github.com/anthropics/claude-code/issues/82506) | **Claude Max session limit consumed without usage** | Billing/quota integrity — users hit limits while idle | 17 comments, 7 👍; multiple repro reports |
| [#66504](https://github.com/anthropics/claude-code/issues/66504) | **Session URL auto-appended to commits/PRs — should be opt-in** | Privacy & repo hygiene; leaks session IDs into git history | 12 comments, **46 👍** (highest upvote count) |
| [#77136](https://github.com/anthropics/claude-code/issues/77136) | **Opus 4.8 toxic language / Opus 5.0 incoherence** | Model quality regression affecting daily usability | 8 comments, 8 👍; cross-model comparison |
| [#83403](https://github.com/anthropics/claude-code/issues/83403) | **Desktop crashes at ~5hr limit, requires full reinstall** | Windows showstopper; data loss risk on crash | 7 comments; fresh reports daily |
| [#82536](https://github.com/anthropics/claude-code/issues/82536) | **`--continue` cannot resume `-p` (interactive) sessions** | Breaks CLI workflow for interactive→background handoff | 7 comments; regression in v2.1.222 |
| [#72228](https://github.com/anthropics/claude-code/issues/72228) | **MCP tool calls drop params after long value** | Silent data loss in tool calls; affects all MCP servers | 5 comments, 1 👍; has minimal repro |
| [#83744](https://github.com/anthropics/claude-code/issues/83744) | **Desktop GPU process crash (exitCode 101457950) on Windows** | Whole-app kill; correlates with GPU acceleration | 4 comments; new in 1.24012.11.0 |
| [#74715](https://github.com/anthropics/claude-code/issues/74715) | **Claude-in-Chrome "Always allow" persists as `duration:"once"`** | Permission prompt spam (813 dialogs/90min reported) | 4 comments; blocks browser automation |
| [#77605](https://github.com/anthropics/claude-code/issues/77605) | **Claude-in-Chrome: cross-machine browser control, no device ID** | Security gap — authenticated browser drivable from anywhere | 3 comments; security-sensitive |
| [#81946](https://github.com/anthropics/claude-code/issues/81946) | **Make transcripts portable, scratch files local-only** | Project portability vs. local temp separation | 3 comments, 1 👍; architectural ask |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#41661](https://github.com/anthropics/claude-code/pull/41661) | Open | **14 new marketplace plugins** — security, performance, architecture, fullstack automation; updates `marketplace.json` to 27 total |
| [#16929](https://github.com/anthropics/claude-code/pull/16929) | Open | **`/code-review` respects `--comment` flag** — fixes default behavior to output to terminal (matches README), only posts to GH when flagged |
| [#84138](https://github.com/anthropics/claude-code/pull/84138) | Open | **Self-signed cert workaround for Cowork (Bun runtime)** — macOS users hit "Self-signed certificate detected" without proxy; hook-level fix |

---

## 5. Feature Request Trends

1. **Opt-in telemetry/privacy controls** — #66504 (46 👍) leads a cluster asking for granular control over what metadata (session URLs, project paths) leaves the machine.
2. **Project-portable session data** — #81946 + #84354 (case-sensitive path hashing on Windows) show demand for relocatable conversation history.
3. **MCP reliability hardening** — #72228 (param drop), #53134 (double spawn), #84362 (tag-grammar parser loss) point to a systemic MCP transport layer fragility.
4. **Browser extension permission UX** — #74715, #77605, #84355 all target Claude-in-Chrome's permission model (persist, device binding, prompt spam).
5. **Model behavior toggles** — #77136 (Opus toxicity/incoherence), #84353/#84340 (false-positive safety downgrades) request per-session model guardrail configuration.

---

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Quota/billing opacity** | #82506 (Max limit drain), #84358 (phantom charges), #84360 (Pro quota leak post-MCP) | 4+ issues in 24h |
| **Session continuity breaks** | #82536 (`--continue` vs `-p`), #83403 (5hr crash), #72875 (`/login` loop) | Cross-platform |
| **MCP silent failures** | #72228 (param drop), #84362 (parser absorption), #53134 (double spawn) | Linux/Windows/macOS |
| **Desktop stability** | #83403 (crash+reinstall), #83744 (GPU kill), #84333 (MSIX modified state) | Windows/macOS |
| **Permission prompt fatigue** | #74715 (Chrome 813 prompts), #84355 (all modes fail), #79867 (macOS bare version in TCC) | Daily workflow blocker |
| **Model safeguard false positives** | #84353, #84340, #84361 — all Opus 5 → 4.8 downgrades on authorized security work | Security/pen-test workflows |

---

*Data sourced from `anthropics/claude-code` — issues/PRs updated 2026-08-05 → 2026-08-06. Next digest: 2026-08-07.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-06

---

## 1. Today's Highlights

The Codex team shipped **rust-v0.146.1** with a critical security fix: safer automatic-review defaults for cyber-capable models, plus explicit permission-change explanations in the terminal. Meanwhile, **0.147.0-alpha** continues rapid iteration (13 alpha builds in 24h). On the issue front, the community’s top pain points remain **missing `/undo` in TUI** (373 👍), **MCP zombie processes leaking 37 GB RAM**, and **Windows desktop instability** (GPU crashes, Sysmon driver BSODs, MSIX corruption). A batch of 20+ PRs merged today focuses on rollout migration, skill system refactoring, MCP hardening, and macOS notarization via Azure Key Vault.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **rust-v0.146.1** | Bug-fix | • Safer auto-review defaults for cyber-capable models (Guardian integration)<br>• Terminal now explains permission changes when they occur<br>[Full changelog](https://github.com/openai/codex/compare/rust-v0.146.0...rust-v0.146.1) |
| **rust-v0.147.0-alpha.13** | Alpha | Incremental alpha; no published notes |
| **rust-v0.147.0-alpha.6.5 → .12** | Alpha | Rapid alpha cadence (8 builds in 24h); likely internal validation |

> **Takeaway**: 0.146.1 is the only stable-channel update — install it if you use cyber-capable models. 0.147.0 is still deep in alpha.

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#9203](https://github.com/openai/codex/issues/9203) | **Restore `/undo` in TUI** | Users lose untracked files/changes with no recovery; 373 👍, 70 comments | Highest-voted open issue; “bites me several times” |
| [#12491](https://github.com/openai/codex/issues/12491) | **MCP child processes not reaped → 1300+ zombies, 37 GB leak** | Desktop GUI becomes unusable after extended use; OOM kills | 32 comments, 5 👍; affects Pro users on o3 |
| [#33776](https://github.com/openai/codex/issues/33776) | **Windows: `ChatGPT.exe` spawns hundreds of `taskkill.exe`/`conhost.exe`** | WMI storms, DWM degradation, system-wide slowdown | 30 comments, 27 👍; 287 processes observed |
| [#19425](https://github.com/openai/codex/issues/19425) | **Custom stdio MCP tools discovered but not exposed to Desktop threads** | Regression in 0.124.0-alpha.2; breaks MCP workflow | 29 comments, 5 👍 |
| [#23979](https://github.com/openai/codex/issues/23979) | **Local project history missing after Desktop update (data intact in SQLite)** | UI doesn’t rehydrate `state_5.sqlite`; users think data lost | 26 comments, 5 👍 |
| [#31035](https://github.com/openai/codex/issues/31035) | **Windows: Codex reinstalls SysmonDrv v13.22 → BSOD** | Kernel crashes; driver persists after force-uninstall | 23 comments; WinDbg confirms `SysmonDrv.sys` |
| [#37002](https://github.com/openai/codex/issues/37002) | **Unable to install after clicking Update (macOS 12)** | Blocked update path; no version info in report | 20 comments, fresh (Aug 5) |
| [#35481](https://github.com/openai/codex/issues/35481) | **VS Code: Codex Diff shows “Oops, an error”** | Closed but 49 👍; diff view broken on Windows | 18 comments |
| [#32177](https://github.com/openai/codex/issues/32177) | **Text-log attachment triggers “Request blocked” and poisons subsequent turns** | Context compaction loop; breaks long sessions | 14 comments, 16 👍 |
| [#34684](https://github.com/openai/codex/issues/34684) | **`codex mcp login` fails on macOS only (“No authorization support”)** | OAuth flow works on Linux; macOS-specific regression | 10 comments, 5 👍 |

---

## 4. Key PR Progress (Merged Today)

| PR | Area | Summary |
|----|------|---------|
| [#37190](https://github.com/openai/codex/pull/37190) | Safety | **Interrupt cyber-model turns after first Guardian denial** — adds circuit-breaker policy for `cyber` specialty models |
| [#37191](https://github.com/openai/codex/pull/37191) | Data integrity | **Preserve legacy semantics during rollout migration** — prevents history rewrites when migrating rollbacks/compaction checkpoints |
| [#37189](https://github.com/openai/codex/pull/37189) | Multi-agent | **Track multi-agent usage hints in world state** — survives config changes & session resume |
| [#37188](https://github.com/openai/codex/pull/37188) | Tooling | **Reserve `tool_search` namespace** — prevents collisions with built-in search tool |
| [#37175](https://github.com/openai/codex/pull/37175) | History | **Add legacy rollout migration to paginated history** — dry-run + apply modes, per-rollout outcomes |
| [#37174](https://github.com/openai/codex/pull/37174) | Skills | **Centralize skill invocation helpers in `codex-skills`** — decouples parsing, counting, implicit detection |
| [#37168](https://github.com/openai/codex/pull/37168) | MCP | **Bound remote MCP handshake HTTP requests** — prevents executor starvation on timeout |
| [#37167](https://github.com/openai/codex/pull/37167) | MCP | **Expose session sources to MCP contributors** — threads `SessionSource` through resolution pipeline |
| [#37154](https://github.com/openai/codex/pull/37154) | Release | **Use Azure Key Vault for macOS notarization** — removes `.p8` secret from runners |
| [#37151](https://github.com/openai/codex/pull/37151) | Perf | **Coalesce concurrent Git status scans** — shares `git status --porcelain` per repo root |

> **Pattern**: Today’s merge batch is heavily weighted toward **data integrity (rollout migration)**, **skill system architecture**, and **MCP robustness** — foundational work ahead of 0.147.0.

---

## 5. Feature Request Trends

| Direction | Evidence (Issues) |
|-----------|-------------------|
| **Session recovery & undo** | #9203 (373 👍), #23979 (history loss), #32177 (compaction poisoning) |
| **MCP reliability & visibility** | #12491 (zombies), #19425 (tools not exposed), #34684 (macOS auth), #32101 (tool_search dropped) |
| **Windows desktop stability** | #33776 (process storm), #31035 (Sysmon BSOD), #35411/35635/35566 (GPU/SwiftShader), #35737 (MSIX corruption) |
| **Accessibility** | #34211 (JAWS, heading nav) — only a11y issue in top 30 |
| **Model/context control** | #32533 (reasoning effort strands session), #32309 (high-frequency polling), #33493 (image payload retention) |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **No safety net for destructive actions** — `/undo` missing in TUI; users lose untracked work daily.
2. **MCP subsystem leaks resources** — zombie processes, unbounded handshakes, tools discovered but not wired.
3. **Windows desktop is fragile** — GPU crashes, driver installs, MSIX self-corruption, WSL auto-start despite native mode.
4. **Session history is opaque** — updates hide conversations; compaction loops poison context; migration risks rewriting history.
5. **Platform parity gaps** — macOS MCP login broken, Windows accessibility neglected, Linux-only fixes land first.
6. **Observability void** — no visibility into why Guardian blocks, why compaction triggers, why MCP tools disappear.

---

*Generated from `openai/codex` GitHub data (releases, issues, PRs updated 2026-08-05 → 2026-08-06).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-06

---

## 1. Today's Highlights
Three releases shipped in the last 24 hours: **v0.54.0** (stable), **v0.55.0-preview.1**, and the **v0.55.0 nightly** (2026-08-06). The nightly includes a macOS Seatbelt profile fallback fix and the first pieces of a PR-generator infrastructure (environment config parser, command executor, GitHub integration). Meanwhile, the backlog shows persistent agent-reliability pain points—subagent turn-limit handling, generalist-agent hangs, and shell “Waiting input” stalls dominate the top issues.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **[v0.54.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0)** | Stable | Changelogs for v0.53.0-preview.0 & v0.52.0; version bump to 0.54.0-nightly.20260722.gf743ab5. |
| **[v0.55.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-preview.1)** | Preview | Changelog for v0.54.0-preview.0 & v0.53; version bump to 0.55.0-nightly.20260728.gd29268d36. |
| **[v0.55.0-nightly.20260806.g761f604c1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-nightly.20260806.g761f604c1)** | Nightly | • **fix(cli)**: fall back to embedded macOS Seatbelt profiles if missing ([#28551](https://github.com/google-gemini/gemini-cli/pull/28551))<br>• **feat(pr-generator-core)**: environment config parser, command executor, GitHub REST client scaffolding ([#28569](https://github.com/google-gemini/gemini-cli/pull/28569)) |

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports **GOAL success** after hitting `MAX_TURNS` | Masks real failures; breaks trust in automated workflows. | 12 comments, 👍 2, **P1**, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs** indefinitely on simple ops | Blocks non-interactive use; workaround = disable subagents. | 8 comments, 👍 8, **P1** |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell exec **stuck at “Waiting input”** after command completes | Recurring UX break; affects even trivial commands. | 4 comments, 👍 3, **P1**, `effort/medium` |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations** (76 behavioral evals) | Foundational for regression prevention across 6 models. | 7 comments, **P1**, `aiq/eval_infra` |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model’s **bash affinity via zero-dep sandboxing** | Strategic: align tooling with Gemini 3’s native POSIX strengths. | 8 comments, 👍 1, **P2**, `effort/large` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads/search/mapping** assessment | Could cut turns & token noise; investigates `tilth`/`glyph`. | 7 comments, 👍 1, **P2** |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini **under-uses custom skills/sub-agents** | Reduces value of extensibility investments. | 6 comments, **P2** |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions** indefinitely | Wastes quota & pollutes memory; needs quarantine logic. | 5 comments, **P2** |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Browser agent** fails fast on locked profile (persistent mode) | Breaks long-running browser sessions; needs takeover/recovery. | 4 comments, **P3** |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Platform gap for Linux users; `GOAL` termination but broken. | 4 comments, 👍 1, **P1**, `agent/browser` |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#28607](https://github.com/google-gemini/gemini-cli/pull/28607) | **Bug Fix** | Preserve `functionCall.thoughtSignature` when stripping thought parts — fixes v0.53.0 regression causing **API 400** errors. |
| [#28695](https://github.com/google-gemini/gemini-cli/pull/28695) | **Bug Fix** | Harden `sendStream()`: defensively parse string tool args, avoid generator crash on malformed JSON ([#28649](https://github.com/google-gemini/gemini-cli/issues/28649)). |
| [#28660](https://github.com/google-gemini/gemini-cli/pull/28660) | **Bug Fix** | Keep `sendStream` alive on bad tool args; convert to structured `functionResponse` errors. |
| [#28689](https://github.com/google-gemini/gemini-cli/pull/28689) | **Reliability** | Unwrap nested `gaxios` streaming errors; correct quota/rate-limit classification for GCA fallback. |
| [#28688](https://github.com/google-gemini/gemini-cli/pull/28688) | **Auth/Cloud** | Dynamically resolve Cloud Workstations proxy redirect URI for OAuth (fixes localhost mismatch). |
| [#28670](https://github.com/google-gemini/gemini-cli/pull/28670) | **Reliability** | Fix GCA agent-mode infinite retry on `MODEL_CAPACITY_EXHAUSTED`; enable Flash fallback. |
| [#28672](https://github.com/google-gemini/gemini-cli/pull/28672) | **Bug Fix** | Repair `/compress` session reload + quota-fallback tool response loss (two independent bugs). |
| [#28700](https://github.com/google-gemini/gemini-cli/pull/28700) | **Bug Fix** | Prevent new user message from fusing into unanswered tool response after interrupt (ESC/stream fail). |
| [#28694](https://github.com/google-gemini/gemini-cli/pull/28694) | **Release Eng** | Handle npm `dist-tag` deletion forbidden on registries like Wombat Dressing Room (403). |
| [#28676](https://github.com/google-gemini/gemini-cli/pull/28676) | **Process Mgmt** | Forward termination signals (SIGTERM, SIGINT, etc.) to relaunched child process — avoids orphans. |

---

## 5. Feature Request Trends (from Issues)

1. **Agent Observability & Control** — Subagent trajectory sharing ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), bug-report context inclusion ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)), settings.json overrides respected ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
2. **Native Bash / POSIX Alignment** — Zero-dependency sandboxing ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)), AST-aware tooling ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)), reduce tmp-script sprawl ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
3. **Memory System Hardening** — Deterministic redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), quarantine invalid patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), stop low-signal retries ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).
4. **Evaluation & Regression Infrastructure** — Component-level evals ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)), behavioral evals for interactive prompts ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)).
5. **Platform Parity** — Wayland browser support ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), symlink agent recognition ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)), terminal resize flicker fix ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Subagent reliability** — false success, hangs, permission bypass | #22323, #21409, #22093, #21968 | **High** (4 P1/P2 issues) |
| **Shell “Waiting input” ghost state** after command exit | #25166, #22465, #22186 | **High** (3+ reports) |
| **Auto Memory noise & quota waste** — low-signal retries, secret leakage risk | #26522, #26525, #26523, #26516 | **Medium-High** (4 linked issues) |
| **Browser agent fragility** — Wayland, locked profiles, ignored config | #21983, #22232, #22267 | **Medium** |
| **Tool-call / streaming error handling** — 400s, malformed args, quota loops | #28607, #28695, #28660, #28670, #28689 | **Medium** (5 PRs in 24h) |
| **Terminal UX** — resize flicker, external editor corruption, `\n` escaping | #21924, #24935, #22466 | **Low-Medium** |

---

*Generated from `google-gemini/gemini-cli` GitHub data (releases, issues, PRs updated 2026-08-06).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-06

## 1. Today's Highlights

The Copilot CLI team shipped four pre-releases in 24 hours (v1.0.79-2 through v1.0.79-5), delivering **multi-session management** via a new Sessions tab/sidebar, **`/worktree new`** for spawning sessions in git worktrees, and a refined prompt-pinning UX that now defaults off and respects small terminals. Meanwhile, the issue tracker shows a surge of **MCP-related regressions** (registry policy fetch failures, OAuth 3LO breaks, `server/discover` handling) and a persistent Windows crash report (#4026) unresolved since May.

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v1.0.79-5** | **Added:** Manage multiple concurrent sessions from Sessions tab & sidebar. **Improved:** Prompt pinning off by default (`pinnedPrompts: true` to enable). **Fixed:** Sandboxed wrapper builds now receive dev-tool caches per build manifest. |
| **v1.0.79-4** | Pre-release (no changelog). |
| **v1.0.79-3** | **Improved:** `/worktree new` starts a new session in a new git worktree. |
| **v1.0.79-2** | **Improved:** Pinned prompt moves one row higher (into tab-bar row), preserving prompt shape. Disabled by default on terminals <30 rows. |

[View releases](https://github.com/github/copilot-cli/releases)

## 3. Hot Issues (10 Noteworthy)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#1799](https://github.com/github/copilot-cli/issues/1799) | **How to turn off alt-screen views?** | Alt-screen mode (recently added) breaks workflows; users want a toggle back to original rendering. | 8 👍, 12 comments — open since Mar |
| [#3172](https://github.com/github/copilot-cli/issues/3172) | **“Somebody else owns the clipboard” spam** | Clipboard ownership messages corrupt status line layout on every cross-app copy. | 7 👍, 2 comments — open since May |
| [#4345](https://github.com/github/copilot-cli/issues/4345) | **Reasoning effort ‘medium’ unsupported for claude-haiku-4.5** | Feature flags force `medium` effort on a model that rejects it, breaking sub-agent execution. | 4 👍, 2 comments — filed Aug 3 |
| [#4374](https://github.com/github/copilot-cli/issues/4374) | **`/mcp search` fails 400 on Azure DevOps remotes** | MCP registry browser broken for any repo with non-GitHub (ADO) remote — blocks enterprise adoption. | 4 👍, 0 comments — filed today |
| [#4202](https://github.com/github/copilot-cli/issues/4202) | **`view` tool reports “Path does not exist” for real files** | Regression since 1.0.72; core file-reading tool unreliable. | 1 👍, 5 comments — open since Jul |
| [#3135](https://github.com/github/copilot-cli/issues/3135) | **BYOK statusline shows medium effort despite `--effort high`** | Display mismatch hides actual model config; undermines trust in BYOK workflows. | 1 👍, 3 comments — open since May |
| [#3934](https://github.com/github/copilot-cli/issues/3934) | **MCP server ‘blocked by policy’ on custom registry** | Works in VS Code/IntelliJ but not CLI — policy enforcement inconsistency. | 1 👍, 2 comments — open since Jun |
| [#4370](https://github.com/github/copilot-cli/issues/4370) | **MCP init fails when `server/discover` returns -32602** | FastMCP servers (no `discover` impl) rejected; CLI treats RFC error as fatal. | 1 👍, 2 comments — filed today |
| [#4026](https://github.com/github/copilot-cli/issues/4026) | **CLI crashes repeatedly on Windows (native runtime)** | Unpredictable crashes across ≥4 versions since May; no repro, high user impact. | 0 👍, 2 comments — open since Jul |
| [#4378](https://github.com/github/copilot-cli/issues/4378) | **Cloud agent: MCP registry policy fetch 401/403 on GHEC data residency** | All user-configured MCP servers silently dropped on data-residency GHEC instances. | 0 👍, 0 comments — filed today |

## 4. Key PR Progress

No pull requests were updated in the last 24 hours.

## 5. Feature Request Trends

1. **MCP robustness & enterprise parity** — Multiple issues (#3934, #4370, #4371, #4374, #4378) demand: graceful handling of unimplemented MCP methods, OAuth 3LO support, registry policy fetch on GHEC/data-residency, and ADO remote compatibility.
2. **BYOM/BYOK model flexibility** — #3135 (effort display mismatch), #4376 (in-session model switching for Vertex/OpenAI-compatible endpoints) show demand for dynamic model discovery without CLI restart.
3. **Session & workflow UX** — #1799 (alt-screen toggle), #4372/#4373 (steering/queue ordering), #4380 (independent rubber-duck reviewer model) reflect desire for finer control over multi-session, multi-agent flows.
4. **Platform reliability** — Windows crashes (#4026), macOS malloc spam (#4375), Oracle Linux execve issue (#4382) signal need for native-runtime hardening across OSes.

## 6. Developer Pain Points

| Area | Recurring Frustration |
|------|----------------------|
| **MCP Integration** | Silent server drops, policy fetch failures on GHEC, OAuth 3LO unsupported, `server/discover` rigidity — “works in VS Code, not CLI.” |
| **Model/Reasoning Config** | Effort flags ignored or misreported (BYOK statusline), feature flags forcing unsupported effort levels on newer models (Haiku 4.5). |
| **Terminal/Rendering** | Alt-screen forced on, clipboard noise corrupting status line, prompt pinning crowding small terminals. |
| **Windows Stability** | Native runtime crashes “unpredictably” for months; no clear repro or fix timeline. |
| **Queue/Steering UX** | Messages stuck in queue forever, steering order inversion when rapid follow-ups sent. |
| **Auth/Network** | Device flow hitting `ENOTFOUND` on `next-waitlist.azurewebsites.net` (since Jan). |

---

*Digest generated from github.com/github/copilot-cli data as of 2026-08-06 00:00 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-06

## Today's Highlights
Two critical bugs surfaced yesterday around MCP tool handling and file encoding: an image-returning MCP tool aborts runs mid-task after side effects when model capabilities aren’t declared (#2588), and `StrReplaceFile` silently corrupts non-UTF-8 bytes anywhere in a file (#2591). Two PRs (#2592, #2590) already address the first issue by degrading unsupported media instead of aborting and improving the error message to show the exact config fix. A long-standing memory-system feature request (#1283) saw renewed discussion today.

## Releases
No new releases in the last 24 hours.

## Hot Issues
| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Memory System — Persistent context across sessions** | High-impact feature request for cross-session context (auto_completer_imports [Errno 2] No such file or directory: 19 comments since Feb; updated today |
| [#2591](https://github.com/MoonshotAI/kimi-cli/issues/2591) | **StrReplaceFile corrupts undecodable bytes outside edited region** | Data-loss risk: any invalid UTF-8 byte in a file gets replaced globally on every edit | New, 0 comments; severity = silent corruption |
| [#2588](https://github.com/MoonshotAI/kimi-cli/issues/2588) | **Model without capabilities aborts mid-task on image MCP tool** | Breaks agentic workflows: side effects apply, then run dies with unhelpful error | New, 0 comments; two PRs already targeting it |

## Key PR Progress
| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#2592](https://github.com/MoonshotAI/kimi-cli/pull/2592) | `fix(soul): degrade unsupported tool media instead of aborting mid-task` | Open | Resolves #2588 core abort; preserves side effects, degrades image→text |
| [#2590](https://github.com/MoonshotAI/kimi-cli/pull/2590) | `fix(soul): name the config fix in the unsupported-capability error` | Open | Partial #2588 fix; error now shows exact `capabilities` TOML snippet to add |
| [#2589](https://github.com/MoonshotAI/kimi-cli/pull/2589) | `docs: mention qwen-audio-agent as a voice ACP client` | Open | Expands ACP ecosystem docs; highlights hands-free voice client |

## Feature Request Trends
1. **Persistent memory / cross-session context** — #1283 dominates discussion (19 comments); users want both AI-managed notes and user-defined instructions (`CLAUDE.md`-style).
2. **MCP / ACP ecosystem expansion** — Voice client (#2589) and image-tool support (#2588) show demand for richer agent integrations.
3. **Robust file-tool semantics** — #2591 reveals expectation that edit tools must be encoding-safe by default.

## Developer Pain Points
- **Silent data corruption** in core file tools (`StrReplaceFile`’s global `errors="replace"`).
- **Opaque failures** when model capabilities are undeclared: runs abort *after* side effects with no actionable guidance.
- **Missing persistent context** forces re-explanation of project conventions every session.
- **Documentation gaps** for emerging ACP clients (voice, non-IDE integrations).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-06

## Today's Highlights
OpenCode shipped **v1.18.14** with critical provider resilience improvements: xAI login now uses a single device-code flow that works in headless/remote environments, structured mid-stream provider errors are preserved for retry logic, and transient network/provider errors trigger automatic retries. Meanwhile, the community is heavily focused on **Go plan transparency** (usage/balance API), **VS Code integration**, and **cross-project session management** — the top three issues by engagement.

---

## Releases

### v1.18.14 — Core Reliability & Auth Improvements
- **xAI auth simplified**: Single device-code flow replaces previous multi-step process; works in headless CI, remote SSH, and containerized environments.
- **Provider error handling hardened**: Structured mid-stream errors now preserved so compatible providers can retry failed responses instead of hard-failing.
- **Transient error retries expanded**: More network and provider error classes now trigger automatic retry with backoff.
- **Impact**: Reduces session interruptions during model provider flakiness; unblocks xAI usage in automation pipelines.  
  [Release notes](https://github.com/anomalyco/opencode/releases/tag/v1.18.14)

---

## Hot Issues (Top 10 by Community Engagement)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#16017](https://github.com/anomalyco/opencode/issues/16017) | **Go plan usage/balance API endpoint** (rolling/weekly/monthly) | Users need programmatic access to subscription consumption for budgeting, alerts, and CI/CD governance. Dashboard shows it; API doesn't. | 32 comments · 126 👍 — highest engagement |
| [#11176](https://github.com/anomalyco/opencode/issues/11176) | **Official VS Code extension** | Native IDE integration is the #1 adoption blocker for teams standardized on VS Code. Current workarounds are fragile. | 27 comments · 134 👍 — most upvoted |
| [#39845](https://github.com/anomalyco/opencode/issues/39845) | **DeepSeek V4 Flash suddenly requires "Enable models hosted in China" opt-in** | Mid-session breakage without notice; affects Go subscribers. Raises data residency/compliance concerns. | 17 comments · 22 👍 — urgent regression |
| [#23153](https://github.com/anomalyco/opencode/issues/23153) | **Pay Go with crypto** | Crypto-native developers want payment rails matching their stack; reduces friction for global contributors. | 16 comments · 36 👍 |
| [#31932](https://github.com/anomalyco/opencode/issues/31932) | **Cross-project session list/picker for TUI** | Multi-repo workflows (monorepos, microservices) need unified session history; current `/sessions` is project-scoped. | 14 comments · 6 👍 |
| [#34498](https://github.com/anomalyco/opencode/issues/34498) | **Respect `disable-model-invocation: true` in SKILL.md frontmatter** | Parity with Claude Code/Cursor; enables pure-template skills without LLM calls. Critical for deterministic automation. | 13 comments · 49 👍 |
| [#8058](https://github.com/anomalyco/opencode/issues/8058) | **HTTP Streamable transport for remote MCP servers** (CLOSED) | SSE-only MCP limits compatibility with major servers (Sanity, etc.). Streamable HTTP is the modern standard. | 10 comments · implemented |
| [#37564](https://github.com/anomalyco/opencode/issues/37564) | **Auto-mode LLM model classifier auto-approval for permissions** | Reduces permission prompt fatigue in autonomous agent workflows; mirrors features in competing tools. | 6 comments · 12 👍 |
| [#29308](https://github.com/anomalyco/opencode/issues/29308) | **Auto-sync LiteLLM Models into OpenCode Configuration** (CLOSED) | Eliminates manual model config drift for teams using LiteLLM as a gateway. | 5 comments · 10 👍 |
| [#34040](https://github.com/anomalyco/opencode/issues/34040) | **TUI autocomplete doesn't list files inside configured references** | `@home` alias completes but doesn't recurse into the referenced directory; breaks reference-based workflows. | 5 comments · 2 👍 |

---

## Key PR Progress (Top 10 by Recent Activity)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#40723](https://github.com/anomalyco/opencode/pull/40723) | **Migrate v1 data to v2** | CLOSED | REST-triggered V1→V2 session history migration with resumable progress; imports legacy JSON credentials. Foundation for V2 data model. |
| [#38790](https://github.com/anomalyco/opencode/pull/38790) | **Workspace flows in new layout (beta)** | OPEN | Local/New/Existing workspace selection with search, branch context, "View all", and per-project defaults. Major UX overhaul for session start. |
| [#40783](https://github.com/anomalyco/opencode/pull/40783) | **Align event persistence expectations** | CLOSED | Fixes Core test suite after event payload persistence became opt-in; unblocks CI. |
| [#40781](https://github.com/anomalyco/opencode/pull/40781) | **Export session as JSON from UI** | CLOSED | Adds `Export...` to session dropdown, Context tab button, and `/export` command palette action. Enables offline analysis/archival. |
| [#40717](https://github.com/anomalyco/opencode/pull/40717) | **Add Swedish community translation** | OPEN | Swedish README, glossary, language registration, and dictionary verification. Community-contributed i18n. |
| [#40784](https://github.com/anomalyco/opencode/pull/40784) | **Hosted workspace execution with modal driver** | OPEN | V2 Workspaces as durable execution environments (machines with roots); sessions target workspaceID via existing runner graph. |
| [#40590](https://github.com/anomalyco/opencode/pull/40590) | **Support GITHUB_TOKEN auth in install script** | OPEN | Eliminates anonymous GitHub API rate limits during install; critical for CI/CD pipelines. |
| [#39758](https://github.com/anomalyco/opencode/pull/39758) | **Show directories in web project picker** | OPEN | Fixes "No folders found" on fresh browser profiles; unblocks first-project onboarding in `opencode web`. |
| [#40765](https://github.com/anomalyco/opencode/pull/40765) | **Deduplicate Copilot endpoint routing** | OPEN | Uses shared `@opencode-ai/ai` heuristic (`shouldUseResponsesApi`) instead of Core duplicate. Reduces drift. |
| [#27554](https://github.com/anomalyco/opencode/pull/27554) | **Local LAN provider discovery + auto-discover models** | OPEN | mDNS/UPnP discovery of local OpenAI-compatible servers in `/connect`; auto-populates model catalog. |

---

## Feature Request Trends (Distilled from All Issues)

1. **IDE Integration Parity** — Official VS Code extension (#11176), JetBrains support implied; developers want OpenCode as a first-class IDE citizen, not a terminal-only tool.
2. **Subscription Transparency & Control** — Go plan usage API (#16017), crypto payments (#23153), model opt-in clarity (#39845). Users demand programmatic billing/usage visibility and flexible payment.
3. **Cross-Project/Workspace Fluidity** — Cross-project session picker (#31932, #35581), workspace flows (#38790 PR), hosted workspaces (#40784 PR). Multi-repo workflows are the norm, not the exception.
4. **MCP Protocol Modernization** — HTTP Streamable transport (#8058), MCP sampling (#11948), OAuth race fixes (#40768, #40769). MCP is becoming the plugin backbone; OpenCode must track spec evolution.
5. **Skill/Automation Ergonomics** — `disable-model-invocation` in SKILL.md (#34498), mid-prompt skill autocomplete (#40689), skill visibility in root autocomplete (#40720). Skills are the primary automation surface; UX gaps hurt power users.
6. **Local/Offline-First Capabilities** — LAN provider discovery (#27554), bundled ripgrep for Windows offline (#31734), GITHUB_TOKEN for air-gapped installs (#40590). Enterprise/air-gapped deployments need zero-external-dependency operation.
7. **Session History & Export** — Session export (#40781 PR), global AGENTS.md persistence (#40348), session deletion/archive on home page (#40786). Sessions are assets; users need CRUD + portability.

---

## Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **No native VS Code extension** | #11176 (134 👍, open since Jan) — teams blocked on adoption | Critical |
| **Go plan opacity** | #16017 (126 👍) — cannot automate budget alerts or CI gates | High |
| **Session scoping too narrow** | #31932, #35581, #40759 (v1.18.14 regression) — multi-repo workflows broken | High |
| **Model/provider surprises** | #39845 (DeepSeek China opt-in mid-session), #34498 (skill invocation control) — config changes without notice | High |
| **TUI autocomplete gaps** | #34040 (references), #40689 (mid-prompt skills), #40719 (mid-line slash commands) — daily friction | Medium |
| **Windows/offline support lagging** | #31734 (ripgrep bundling), #40399 (Web UI case-sensitivity on Windows) — platform parity | Medium |
| **Memory/process bloat on macOS** | #40779 (many small processes vs. one large) — resource pressure on 16GB machines | Medium |
| **MCP OAuth fragility** | #40768 (cross-process refresh race), #40769 (re-registration on re-login) — auth instability | Medium |

---

*Digest generated from GitHub data as of 2026-08-06. Links point to live issues/PRs for context.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-06

## Today's Highlights
The Pi ecosystem saw a flurry of polish-focused work today: model selector UX was overhauled with natural sorting, `@file` references gained line-range support, and the TUI fixed a dangling OSC-8 hyperlink bug that could corrupt terminal output. On the provider front, Amazon Bedrock Mantle and Qwen Token Plan Individual providers are in review, while the experimental Harness architecture continues its v2 redesign.

---

## Releases
*No new releases published in the last 24 hours.*

---

## Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **Windows strategy & pain points** | 17 comments — largest open thread. Core team seeking signal on which Windows runtimes (WSL, native, Git Bash, PowerShell) to prioritize for docs, CI, and out-of-box experience. | High engagement; developers sharing breakage across envs. |
| [#534](https://github.com/earendil-works/pi/issues/534) | **XDG Base Directory Spec compliance** | 23 👍, 14 comments — closed today. Config folder moved from `~/.pi` to `~/.config/pi` per freedesktop spec. | Strong consensus; fix landed in PR #7685. |
| [#7399](https://github.com/earendil-works/pi/issues/7399) | **`truncateToWidth()` leaves dangling OSC-8 hyperlinks** | 12 comments — truncation could emit unclosed `\x1b]8;;url\x07`, breaking subsequent terminal output. | Fixed in PR #7665 with prefix-scan optimization. |
| [#5263](https://github.com/earendil-works/pi/issues/5263) | **Ephemeral in-session model/thinking changes** | 12 👍, 11 comments — open. Request: session-local model switches shouldn’t persist globally; add “Default model” to `/settings`. | Clear UX ask; design discussion ongoing. |
| [#5291](https://github.com/earendil-works/pi/issues/5291) | **Sessions hang on “Working…” with Anthropic Enterprise** | 3 👍, 8 comments — closed. Intermittent stalls on subscription accounts; resume/interrupt unreliable. | Root cause unclear; workaround via retry logic. |
| [#6675](https://github.com/earendil-works/pi/issues/6675) | **`pi update --self` fails on single transient network error** | 2 👍, 8 comments — closed. One failed `latest-version` fetch aborted update. | Retry/backoff added in follow-up. |
| [#5064](https://github.com/earendil-works/pi/issues/5064) | **Context window size selector** | 7 comments — closed. Parity with Copilot CLI’s context-window dropdown. | Implemented via scoped model variants. |
| [#3200](https://github.com/earendil-works/pi/issues/3200) | **Video/audio content in `prompt` command** | 4 👍, 7 comments — open. Extend `images[]` to `video[]`/`audio[]` for multimodal models (GPT-4o, Gemma 4). | Awaiting provider API stability. |
| [#7553](https://github.com/earendil-works/pi/issues/7553) | **Configurable thinking level for compaction** | 7 comments — open. Auto-compaction reuses session thinking budget; users want separate budget for summarization. | Design phase; impacts token economics. |
| [#7465](https://github.com/earendil-works/pi/issues/7465) | **iTerm2 inline images missing `size=` parameter** | 7 comments — closed. xterm.js addon rejects images without decoded byte count. | Fixed in PR #7681 (merged). |

---

## Key PR Progress (Top 10 by Impact)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#6216](https://github.com/earendil-works/pi/pull/6216) | **Feature** | Add **Amazon Bedrock Mantle OpenAI Responses provider** — enables Pi on AWS Bedrock via OpenAI-compatible endpoint. |
| [#7692](https://github.com/earendil-works/pi/pull/7692) / [#7690](https://github.com/earendil-works/pi/pull/7690) | **UX** | **Natural sort for model selectors** — case-insensitive, numeric-aware ordering (`@200k` before `@1m`) shared across `/model` and `/scoped-models`. |
| [#7679](https://github.com/earendil-works/pi/pull/7679) / [#7664](https://github.com/earendil-works/pi/pull/7664) | **Feature** | **Line ranges in `@file` references** — `@file#L122-L145` syntax supported; integrates with `read` tool semantics and prompt metadata. |
| [#7659](https://github.com/earendil-works/pi/pull/7659) | **Feature** | **Qwen Token Plan Individual provider** — adds 8 models via international Token Plan endpoint (`QWEN_TOKEN_PLAN_API_KEY`). |
| [#7671](https://github.com/earendil-works/pi/pull/7671) | **Refactor** | **Colocate tool prompt contributions** — each built-in tool’s system-prompt snippet lives next to its definition; regression tests added. |
| [#7638](https://github.com/earendil-works/pi/pull/7638) | **Fix** | **`thinking_token_budget` on openai-completions** — prevents reasoning-heavy turns from consuming entire `max_tokens` and returning empty responses. |
| [#7686](https://github.com/earendil-works/pi/pull/7686) | **Architecture** | **Configurable Harness factory** — internal API for constructing experimental Harness with custom tools, activation, and prompt policy. |
| [#7656](https://github.com/earendil-works/pi/pull/7656) | **Fix** | **Event bus leak** — scopes `pi.events.on()` to extension runtime; stale listeners removed on reload/disposal (fixes #7193). |
| [#7669](https://github.com/earendil-works/pi/pull/7669) | **Architecture** | **Harness v2 R2** — pure lane reducer (`LaneReductionInput → LaneReductionResult`), durable `LaneState`, terminal-failure provenance. |
| [#7685](https://github.com/earendil-works/pi/pull/7685) | **Fix** | **Disable bunfig autoload in compiled binaries** — prevents broken `preload` scripts from crashing `pi --version` in standalone builds. |

---

## Feature Request Trends
1. **Model UX parity** — Context-window selectors (#5064), natural sorting (#7693), ephemeral session overrides (#5263), per-compaction thinking budgets (#7553).
2. **Multimodal input** — Video/audio in `prompt` (#3200), image rendering fixes (#7465, #7399).
3. **Context file hierarchy** — `AGENTS.override.md` precedence (#7642, #7664, #7681) for per-directory overrides.
4. **Provider expansion** — Bedrock Mantle (#6216), Qwen Token Plan (#7659), Vertex/GCP metadata server hardening (#5323).
5. **Harness extensibility** — Configurable factory (#7686), lane reducer v2 (#7669), tool prompt colocation (#7671).

---

## Developer Pain Points
- **Windows fragmentation** — No blessed path; WSL vs native vs Git Bash vs PowerShell each surface different bugs (#7547).
- **Session reliability** — “Working…” hangs on Anthropic Enterprise (#5291), WebSocket retry gaps (#7444), negative cost reporting (#7688).
- **Extension lifecycle** — Event-bus leaks on reload (#7193), no programmatic auth persistence (#7658), bunfig autoload crashes binaries (#7601, #7685).
- **Terminal rendering edge cases** — OSC-8 truncation (#7399), iTerm2 image size param (#7465), selection keybinding conflicts (#7680).
- **Self-update fragility** — Single transient failure aborts `pi update --self` (#6675).

---

*Data sourced from `github.com/earendil-works/pi` — issues & PRs updated 2026-08-05 → 2026-08-06.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-06

## 1. Today's Highlights
- **Nightly release v0.21.6-nightly.20260806** shipped with a test de-flaking fix for glob external-path tests. The stable **v0.21.6** release added experimental native Live Voice support to WebShell on macOS (global shortcut for real-time audio) and improved conversation turn persistence during background activity. **Desktop v0.1.0** (Tauri-based) was also published, marking the new desktop app direction.
- **Security focus**: Two high-priority bugs addressed — provider warning sanitizer leaking credentials with `@` in passwords ([#8136](https://github.com/QwenLM/qwen-code/issues/8136)) and read-only shell classifier auto-approving command substitution via line continuation or `${var@P}` ([#8582](https://github.com/QwenLM/qwen-code/issues/8582)).
- **CI reliability push**: Multiple PRs target the `/review` fan-out hang that burns 360-min timeouts ([#8597](https://github.com/QwenLM/qwen-code/issues/8597)), moving heavy AutoFix jobs to self-hosted ECS runners ([#8603](https://github.com/QwenLM/qwen-code/pull/8603)) and adding streaming response lifetime caps ([#8602](https://github.com/QwenLM/qwen-code/pull/8602)).

---

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.21.6-nightly.20260806.cb3dc107f** | Nightly | Test fix: de-flake glob external-path test using dedicated empty dir instead of `/tmp` ([#8604](https://github.com/QwenLM/qwen-code/pull/8604)) |
| **v0.21.6** | Stable | • Experimental native Live Voice support in WebShell on macOS (global shortcut) ([#7859](https://github.com/QwenLM/qwen-code/pull/7859))<br>• WebShell keeps conversation turns expanded during active background work<br>• Various bug fixes and improvements |
| **desktop-v0.1.0** | Desktop (Tauri) | First release of the Tauri-based desktop app; Electron app (`packages/desktop`) slated for deprecation ([#8596](https://github.com/QwenLM/qwen-code/issues/8596)) |

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| Issue | Priority | Category | Why It Matters | Community Reaction |
|-------|----------|----------|----------------|-------------------|
| **[#8136](https://github.com/QwenLM/qwen-code/issues/8136)** Provider warning sanitizer truncates messages with port, leaks password containing `@` | P2 / Security | Credential leakage in `/status` payload; affects all providers using URLs with ports or `@` in passwords. PR [#8408](https://github.com/QwenLM/qwen-code/pull/8408) fixes it. | 8 comments, active discussion on sanitizer logic |
| **[#8582](https://github.com/QwenLM/qwen-code/issues/8582)** Read-only shell classifier auto-approves command substitution hidden by line continuation or `${var@P}` | P1 / Security | Bypasses read-only protection; arbitrary code execution risk. AST and regex classifiers both affected. | 4 comments, marked P1 (critical) |
| **[#8597](https://github.com/QwenLM/qwen-code/issues/8597)** CI `/review`: reverse-audit fan-out launch hangs silently until timeout | P1 / CI | 21+ timeouts in 2 days; 4/5 root-caused to silent hang in fan-out launch. Blocks review automation. | 2 comments, multiple PRs addressing ([#8602](https://github.com/QwenLM/qwen-code/pull/8602), [#8603](https://github.com/QwenLM/qwen-code/pull/8603)) |
| **[#8615](https://github.com/QwenLM/qwen-code/issues/8615)** Desktop 0.1.0 Windows: bundled runtime crashes on startup `EISDIR lstat 'C:'` | P1 / Platform | Blocks Windows users on new Tauri desktop app; regression in v0.1.0 installer. | 2 comments, fresh issue (created today) |
| **[#8557](https://github.com/QwenLM/qwen-code/issues/8557)** CLI: shrinking terminal reprints transcript blocks (duplicate output) on macOS/Warp | P3 / UI | Visual corruption in TUI; affects developer experience during responsive layout changes. | 4 comments, Warp-specific but reproducible |
| **[#8580](https://github.com/QwenLM/qwen-code/issues/8580)** TUI flickers continuously in tmux < 3.5: full-screen clear+repaint 2-3×/sec | P2 / UI | Makes qwen-code unusable in older tmux (common on servers); Ink renderer + DEC 2026 guard issue. | 2 comments, detailed root cause analysis |
| **[#8560](https://github.com/QwenLM/qwen-code/issues/8560)** Web Shell: refreshing session deep link returns 401 with bearer token | P2 / Auth | Breaks session persistence on page reload; affects `qwen serve --token` workflows. | 3 comments, in review |
| **[#8538](https://github.com/QwenLM/qwen-code/issues/8538)** Desktop: copy-response button does nothing on Windows | P2 / UI | Basic UX broken in v0.0.5/v0.1.0; clipboard unchanged after click. | 4 comments, reproduced across restarts |
| **[#8593](https://github.com/QwenLM/qwen-code/issues/8593)** Desktop: markdown links in assistant messages styled but click does nothing | P2 / UI | Links render correctly but no navigation; silent failure. | 3 comments |
| **[#8584](https://github.com/QwenLM/qwen-code/issues/8584)** Anthropic model-ID parsing rejects `claude-opus-4.8` and lacks Opus 5 token limits | P2 / Core | Breaks proxy deployments using dotted-minor aliases; incorrect token budgeting for new models. | 2 comments |

---

## 4. Key PR Progress (Top 10 by Significance)

| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| **[#8408](https://github.com/QwenLM/qwen-code/pull/8408)** | Open | Fix `sanitizeProviderWarning`: authority-scoped credential stripping; resolves port truncation + password leak ([#8136](https://github.com/QwenLM/qwen-code/issues/8136)) | Security fix for credential exposure |
| **[#8602](https://github.com/QwenLM/qwen-code/pull/8602)** | Open | Cap streaming response total lifetime; slim review fan-out launch to fix silent hangs ([#8597](https://github.com/QwenLM/qwen-code/issues/8597)) | CI reliability, unblocks `/review` automation |
| **[#8603](https://github.com/QwenLM/qwen-code/pull/8603)** | Open | Route heavy AutoFix jobs (issue-fix, review bundle, feedback) to self-hosted ECS pool with hosted fallback | CI cost/performance, reduces GitHub-hosted runner load |
| **[#8616](https://github.com/QwenLM/qwen-code/pull/8616)** | Open | Align session lifecycle with OpenTelemetry: emit `session.start`/`session.end` as OTel LogRecords ([#8589](https://github.com/QwenLM/qwen-code/issues/8589)) | Observability standardization |
| **[#8559](https://github.com/QwenLM/qwen-code/pull/8559)** | Open | Improve WebShell parallel agent feedback: status stays at tail, auto-expands during work, collapses before main agent resumes | UX for multi-agent workflows |
| **[#8570](https://github.com/QwenLM/qwen-code/pull/8570)** | Open | Report zero-height VP items so collapsed thoughts release reserved space in virtual viewport | Fixes layout jump when collapsing thinking blocks |
| **[#8576](https://github.com/QwenLM/qwen-code/pull/8576)** | Open | Switch `@` completion category tabs with bare arrow keys (replaces Ctrl+arrow/Tab) | Keyboard UX improvement for completions |
| **[#8290](https://github.com/QwenLM/qwen-code/pull/8290)** | Open | Fail closed on zero inode file cache (`ino === 0`); avoid shared `dev:0` cache entries | Correctness for network/VM filesystems |
| **[#8260](https://github.com/QwenLM/qwen-code/pull/8260)** | Open | Preserve every reasoning episode's signature during history consolidation (was keeping only first) | Fixes reasoning trace fidelity for parallel tool calls |
| **[#7925](https://github.com/QwenLM/qwen-code/pull/7925)** | Open | Sweep stale worktree project snapshots on startup (fixes [#7906](https://github.com/QwenLM/qwen-code/issues/7906)) | Disk hygiene for worktree-based workflows |

---

## 5. Feature Request Trends
From the 38 recent issues, the strongest recurring themes:

1. **Desktop/WebShell Convergence** — Deprecate Electron app, promote Tauri `desktop-shell` as primary desktop ([#8596](https://github.com/QwenLM/qwen-code/issues/8596)); build lower-maintenance desktop around WebShell ([#8092](https://github.com/QwenLM/qwen-code/issues/8092)); QR-code pairing for phone access to local sessions ([#8595](https://github.com/QwenLM/qwen-code/issues/8595)).

2. **Batch/Async Execution Modes** — `/slow` or `/batch` slash command for lower-cost asynchronous agent runs via provider async APIs ([#8605](https://github.com/QwenLM/qwen-code/issues/8605)); background agent recovery tracking ([#8586](https://github.com/QwenLM/qwen-code/issues/8586)).

3. **File Operation Flexibility** — Allow `edit`/`write_file`/`notebook_edit` to operate outside CWD with permission handling ([#8581](https://github.com/QwenLM/qwen-code/issues/8581)); fix VSCode companion link resolution for nested files ([#8606](https://github.com/QwenLM/qwen-code/issues/8606)).

4. **Telemetry & Observability Standardization** — Full OpenTelemetry session lifecycle alignment ([#8589](https://github.com/QwenLM/qwen-code/issues/8589), PR [#8616](https://github.com/QwenLM/qwen-code/pull/8616)); bounded textual tool-result payloads across ACP/headless ([#8447](https://github.com/QwenLM/qwen-code/issues/8447)).

5. **SDK Extensibility** — Pass hooks configuration inline in TypeScript SDK `query()` ([#8591](https://github.com/QwenLM/qwen-code/issues/8591)).

---

## 6. Developer Pain Points (High-Frequency Frustrations)

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **TUI instability in tmux/terminal multiplexers** | Flickering ([#8580](https://github.com/QwenLM/qwen-code/issues/8580)), duplicate output on resize ([#8557](https://github.com/QwenLM/qwen-code/issues/8557)), SSH+tmux flash ([#8562](https://github.com/QwenLM/qwen-code/issues/8562)) | Remote/server developers, tmux < 3.5 users |
| **Desktop app regressions on Windows** | Startup crash `EISDIR` ([#8615](https://github.com/QwenLM/qwen-code/issues/8615)), copy button broken ([#8538](https://github.com/QwenLM/qwen-code/issues/8538)), markdown links dead ([#8593](https://github.com/QwenLM/qwen-code/issues/8593)), language switch no-op ([#8592](https://github.com/QwenLM/qwen-code/issues/8592)) | Windows desktop users (v0.1.0) |
| **CI/CD flakiness & timeouts** | `/review` fan-out hangs 12+ times/day ([#8597](https://github.com/QwenLM/qwen-code/issues/8597)), mocked disk-full errors pollute logs ([#8532](https://github.com/QwenLM/qwen-code/issues/8532)) | Contributors, maintainers, automation relyers |
| **Credential handling bugs** | Sanitizer leaks passwords with `@` ([#8136](https://github.com/QwenLM/qwen-code/issues/8136)), WebShell 401 on refresh with bearer token ([#8560](https://github.com/QwenLM/qwen-code/issues/8560)) | Teams using authenticated providers/serve |
| **Model compatibility gaps** | Anthropic dotted-minor aliases rejected ([#8584](https://github.com/QwenLM/qwen-code/issues/8584)), missing Opus 5 token limits | Proxy/enterprise users with non-standard model IDs |
| **Session persistence & recovery** | Live journal truncation loses turn context ([#8412](https://github.com/QwenLM/qwen-code/issues/8412)), background agent recovery untracked ([#8586](https://github.com/QwenLM/qwen-code/issues/8586)) | Long-running session users |

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-06

> **Repository**: `Hmbown/CodeWhale` (DeepSeek TUI)  
> **Period**: Last 24 hours (2026-08-05 → 2026-08-06)

---

## 1. Today's Highlights
- **v0.9.4 release train** (#5135) advances with 77 commits ahead of `main`, bundling Runtime API expansions (memory, MCP, goals, skills, verifier receipts) and ACP tool exposure.  
- **Windows onboarding** gets a dedicated Chinese guide (#5229) covering install, config, model switching, and permissions — validated on Windows 10.  
- **Sandbox flexibility** request (#5005, closed) highlights growing demand for filesystem allowlists to reach Xcode `DerivedData` and external build artifacts.

---

## 2. Releases
*No new releases published in the last 24 hours.*

---

## 3. Hot Issues (Top 3 updated)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5250](https://github.com/Hmbown/CodeWhale/issues/5250) | **Only one API key can be saved** — blocks multi-provider workflows (DeepSeek + GLM) | Directly impacts developers who switch models daily; key rotation UX is a recurring friction point. | 1 comment, opened 2026-08-05 |
| [#4029](https://github.com/Hmbown/CodeWhale/issues/4029) | **Interface similar to Reasonix?** | Signals interest in a more structured, reasoning-centric UI paradigm; could shape future TUI design direction. | 4 comments, updated 2026-08-05 |
| [#5005](https://github.com/Hmbown/CodeWhale/issues/5005) | **Sandbox filesystem allowlist for Xcode DerivedData** (closed) | Unblocks iOS/macOS developers; closure suggests a fix or workaround landed in v0.9.4 train. | 2 comments, closed 2026-08-05 |

---

## 4. Key PR Progress (Top 10 by impact)

| # | Title | Type | Status | Summary |
|---|-------|------|--------|---------|
| [#5135](https://github.com/Hmbown/CodeWhale/pull/5135) | **release: Codewhale v0.9.4 release train** | Release | Open | Integration branch (77 commits) superseding #5044; bundles all v0.9.4 features. |
| [#5225](https://github.com/Hmbown/CodeWhale/pull/5225) | **feat(acp): expose file/search/git/patch/shell tools over session/prompt** | Feature | Open | Enables ACP clients (Zed, adapters) to execute tool calls — turns chat-only agents into full code editors. |
| [#5131](https://github.com/Hmbown/CodeWhale/pull/5131) | **feat: Runtime API memory endpoints** | Feature | Open | Adds `/v1/memory` for bounded inspection, scope/provenance, and lifecycle controls. |
| [#5130](https://github.com/Hmbown/CodeWhale/pull/5130) | **feat(runtime-api): bounded MCP server config & lifecycle** | Feature | Open | POST/GET/PATCH/DELETE for MCP servers — removes need to edit TOML/JSON directly. |
| [#5133](https://github.com/Hmbown/CodeWhale/pull/5133) | **feat(runtime-api): expose persistent goal-loop state** | Feature | Open | New `/v1/threads/{id}/goal` endpoints for reading/driving goal lifecycle. |
| [#5132](https://github.com/Hmbown/CodeWhale/pull/5132) | **Runtime API: verifier receipts & evidence** | Feature | Open | Three read-only endpoints under `/v1/fleet/runs/{run_id}/` for task-level failure diagnosis. |
| [#5129](https://github.com/Hmbown/CodeWhale/pull/5129) | **feat(runtime-api): skill lifecycle endpoints** | Feature | Open | Install, update, uninstall, trust, audit — full HTTP surface for skill management. |
| [#5240](https://github.com/Hmbown/CodeWhale/pull/5240) | **feat(tui/shell): surface real wait elapsed time in tool content** | UX | Open | Moves `duration_ms` from metadata into model-visible content — reduces busy-polling bias. |
| [#5242](https://github.com/Hmbown/CodeWhale/pull/5242) | **feat(tui/subagent): resume interrupted children from checkpoint** | Feature | Open | Enables `agents/followup` to actually resume `interrupted_continuable` subagents via checkpoint handle. |
| [#5229](https://github.com/Hmbown/CodeWhale/pull/5229) | **docs: add Windows beginner guide (zh-CN)** | Docs | Open | New `docs/WINDOWS_BEGINNER.zh-CN.md` + 4 screenshots; validated on Windows 10. |

*Closed PRs of note:*  
- [#5192](https://github.com/Hmbown/CodeWhale/pull/5192) — **fix(tui): pin ratatui to 0.30.0** (blocks CPR race on startup)  
- [#5095](https://github.com/Hmbown/CodeWhale/pull/5095) — **fix(ohos): re-quote Windows linker args with spaces** (OpenHarmony SDK path fix)

---

## 5. Feature Request Trends
1. **Multi-provider credential management** — #5250 is the latest ask; users want isolated key storage per provider (DeepSeek, GLM, etc.).  
2. **Sandbox escape hatches** — #5005 (Xcode `DerivedData`), plus implied need for configurable allowlists beyond workspace-write.  
3. **ACP tool parity** — #5225 shows external editors (Zed, community adapters) are blocked without tool execution over ACP.  
4. **Runtime API completeness** — 6 PRs (#5129–#5133) systematically fill gaps: memory, MCP, goals, skills, verifier receipts — indicating a push toward **managed/embeddable** CodeWhale.  
5. **Subagent resilience** — #5242 (checkpoint resume) and #5240 (wait-time visibility) target long-running, interruptible agent workflows.

---

## 6. Developer Pain Points
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Single API key slot** forces manual re-entry when switching providers | #5250 (new, 1 comment) | High — cited in multiple prior issues |
| **Sandbox blocks external build artifacts** (Xcode, Gradle, Cargo caches) | #5005 (closed, but workaround unclear) | Recurring — appears in v0.9.x cycle |
| **ACP clients get chat-only agents** — no file/git/shell tool execution | #5225 (open, core blocker for Zed/adapter users) | Critical for ecosystem adoption |
| **No visibility into subagent wait time** → model busy-polls short waits | #5240 (open, UX fix) | Subtle but degrades long-task reliability |
| **Interrupted subagents cannot resume** — checkpoint exists but no resume path | #5242 (open) | Blocks document review, multi-step search |
| **ratatui 0.30.1+ breaks startup** (CPR race) — requires pin | #5192 (closed, pin workaround) | Environment-specific but severe on affected terminals |

---

## Quick Links
- **v0.9.4 train**: [#5135](https://github.com/Hmbown/CodeWhale/pull/5135)  
- **ACP tool exposure**: [#5225](https://github.com/Hmbown/CodeWhale/pull/5225)  
- **Runtime API batch**: [#5129](https://github.com/Hmbown/CodeWhale/pull/5129) · [#5130](https://github.com/Hmbown/CodeWhale/pull/5130) · [#5131](https://github.com/Hmbown/CodeWhale/pull/5131) · [#5132](https://github.com/Hmbown/CodeWhale/pull/5132) · [#5133](https://github.com/Hmbown/CodeWhale/pull/5133)  
- **Windows guide (zh-CN)**: [#5229](https://github.com/Hmbown/CodeWhale/pull/5229)  
- **Multi-key request**: [#5250](https://github.com/Hmbown/CodeWhale/issues/5250)

---

*Digest generated from GitHub data as of 2026-08-06 00:00 UTC. Repository: `Hmbown/CodeWhale` (DeepSeek TUI).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*