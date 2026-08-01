# AI CLI Tools Community Digest 2026-08-01

> Generated: 2026-08-01 02:10 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Comparison Report — 2026-08-01

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **mature enterprise-grade tools** (Claude Code, Copilot CLI, OpenAI Codex) battling regression debt from rapid feature expansion, and **newer entrants** (Kimi, OpenCode, Pi, Qwen Code, CodeWhale) investing heavily in architectural foundations—client/server session backends, protocol standardization (ACP/MCP), and daemon-based multi-workspace support. Across the board, **session durability, auto-mode safety, and Windows/WSL compatibility** are the dominant engineering themes. Release cadences vary: Codex and Gemini ship multiple daily builds (alpha/preview/stable), while Claude and Copilot stabilize monthly with patch regressions. The ecosystem is converging on **protocol-neutral agent interop** (ACP/MCP) as the integration layer for IDEs, CI, and custom tooling.

---

## 2. Activity Comparison (2026-08-01)

| Tool | Hot Issues (Top 10) | Key PRs (24h) | Release Status | Release Count |
|------|---------------------|---------------|----------------|---------------|
| **Claude Code** | 10 | 6 (5 open) | No new release | 0 |
| **OpenAI Codex** | 10 | 15 (11 closed) | 3 alpha releases | 3 |
| **Gemini CLI** | 10 | 10 (4 closed) | Nightly + preview + stable patch | 3 |
| **GitHub Copilot CLI** | 10 | 2 (both open) | v1.0.78-0 stable | 1 |
| **Kimi Code CLI** | 4 | 1 (open) | No new release | 0 |
| **OpenCode** | 10 | 10 (6 merged) | No new release | 0 |
| **Pi** | 10 | 10 (7 merged) | No new release | 0 |
| **Qwen Code** | 10 | 10 (mixed) | v0.21.2 patch | 1 |
| **CodeWhale (DeepSeek TUI)** | 10 | 10 (3 closed) | v0.9.3 major | 1 |

**Signal**: Codex, Gemini, Pi, and Qwen show highest **daily engineering throughput** (PR volume + release frequency). Claude and Copilot have high issue engagement but lower PR visibility in this window. Kimi is earliest-stage.

---

## 3. Shared Feature Directions (Cross-Tool Consensus)

| Requirement | Tools Requesting | Specific Needs |
|-------------|------------------|----------------|
| **Session persistence & recovery** | Claude Code, Codex, Gemini, Copilot, OpenCode, Pi, Qwen, CodeWhale | Durable transcripts, compaction reliability, OOM-free resume, cross-process session stores (SQLite/JSONL), crash recovery |
| **Auto-mode safety & confirmation control** | Claude Code, Codex, Gemini, Copilot, Qwen Code | Configurable timeouts (Codex #28969 185👍), mandatory confirm for destructive ops (Claude #82165), round-limited autofix (Qwen v0.21.2), plan-mode guardrails (Copilot #4188) |
| **ACP/MCP protocol completeness** | Codex, Gemini, Copilot, OpenCode, Pi, Qwen Code, CodeWhale | OAuth refresh (Gemini #28481), `ask_user`/`ask_question` (Copilot #2109), strict auto-review (Codex #36365), ACP child memory bounds (Qwen #8182), headless PKCE (CodeWhale #4998) |
| **Windows/WSL first-class support** | Claude Code, Codex, Gemini, Copilot, OpenCode, Pi, Qwen Code | GPU crash fixes (Claude #81159, Codex #34133), WSL Git detection (Codex #35119), ReFS/Dev Drive (Copilot #3712), BMI2 binary (Pi #7149), `O_NOFOLLOW` parity (Qwen #8227) |
| **Model access transparency & quota visibility** | Claude Code, Codex, Copilot, OpenCode, Kimi | Per-model dashboards (Claude #83036), sub-agent token accounting (Codex #35259), enterprise policy push (Copilot #3909), provider attribution (OpenCode #24649), provider compat layer (Kimi #2572) |
| **Token/context efficiency** | Codex, Gemini, Qwen Code, CodeWhale, Pi | Prompt cache preservation (Qwen #6721), delta-only JSON streaming (Pi #7394), minimized tool payloads (CodeWhale #4705), base64 deduplication (Codex #28316) |
| **Multi-workspace / shared daemon** | Qwen Code, Pi, OpenCode, CodeWhale | RFC #6378 (Qwen), server session backend (Pi #7396), ACP session leases (OpenCode), ACP client (CodeWhale #4996) |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|---------------|-------------|-------------------|
| **Claude Code** | Enterprise safety, IDE integration, Max-plan billing | Professional devs, Anthropic Max subscribers | TypeScript/Node, VS Code extension + desktop, Fable/Opus model routing, auto-mode with guardrails |
| **OpenAI Codex** | Runtime isolation, realtime UX, MCP hardening | OpenAI ecosystem users, Rust enthusiasts | **Rust** core, sandboxed V8, connector runtime manager, rapid alpha cadence, heavy internal tooling (copyberry[bot]) |
| **Gemini CLI** | Agent reliability, eval infrastructure, AST-aware tooling | Google Cloud devs, agent workflow builders | Three-track releases (nightly/preview/stable), 76+ behavioral evals, `thoughtSignature` fidelity, web-fetch SSRF hardening |
| **GitHub Copilot CLI** | Enterprise governance (cloud), ACP protocol, sandbox caches | GitHub Enterprise orgs, Codespaces users | Node/TypeScript, `allowDevToolCaches` sandbox, local CLI governance gap, ACP `closeSession` + `/permissions` |
| **Kimi Code CLI** | Cross-device continuity, persistent memory | Mobile/remote devs, Moonshot API users | Early-stage, Python/Pydantic tool layer, Remote Control + Memory System as dual pillars, provider JSON normalization |
| **OpenCode** | Paid-tier model access (Go/Zen), privacy governance, plugin marketplace | Anomaly subscribers, privacy-conscious teams | Go/Zen auth infrastructure, TUI (OpenTUI/Solid), dual model-resolution chains, marketplace RFC (#28696) |
| **Pi** | Client/server architecture, streaming performance, provider extensibility | Power users, self-hosters, extension authors | **Major refactor**: SQLite server backend, Unix socket RPC, delta JSON streaming, Baseten/Kimi/Bedrock providers, pre-Haswell binary |
| **Qwen Code** | Daemon multi-workspace, autofix maturity, Anthropic 4.6+ compat | Qwen model users, CI/CD integration, review automation | `qwen serve` daemon RFC, bounded resource tracking, autofix round limits, repo-hygiene skill + weekly patrol CI |
| **CodeWhale** | ACP/MCP interop, headless auth, CJK terminal correctness, token efficiency | DeepSeek users, Rust/TUI enthusiasts, automation builders | **Rust** (ratatui), semantic graphics persistence, canonical tool surface, 72-commit v0.9.3, `npm i -g codewhale` migration |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum / Rapid Iteration** | **OpenAI Codex, Pi, Gemini CLI, Qwen Code, CodeWhale** | >10 PRs/24h, multi-release cadence, architectural refactors in flight (Pi server, Codex connector runtime, Qwen daemon RFC, CodeWhale 72-commit release) |
| **Mature / Regression-Heavy** | **Claude Code, GitHub Copilot CLI** | High issue engagement (50+ comments on top issues), enterprise user base, but session stability, billing, and Windows regressions dominate discourse |
| **Critical Blocker Phase** | **OpenCode** | Go/Zen auth outage (#38257 42 comments) blocks paying subscribers; TUI black-screen regressions persist across versions |
| **Early Stage / Feature-Definition** | **Kimi Code CLI** | 4 issues, 1 PR, no releases; community converging on Remote Control + Memory System as MVP differentiation |

**Maturity signals**: Gemini’s three-track release process and 76-test eval suite indicate highest **process maturity**. Codex’s internal bot-driven PR volume suggests strong **automation maturity**. Pi’s 20+ PR architectural shift shows **technical ambition**. Claude/Copilot have **user-base maturity** but accumulating technical debt.

---

## 6. Trend Signals (Industry-Wide)

1. **Client/Server Session Architecture is the New Default**  
   Pi (server backend + remote client), Qwen Code (daemon RFC), OpenCode (ACP session leases), CodeWhale (ACP client)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-08-01 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs

| Rank | PR | Skill / Focus | Status | Key Discussion Points |
|------|-----|---------------|--------|----------------------|
| 1 | [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** — lifecycle management for planning artifacts (addresses #1417) | OPEN | Community-identified gap: planning files accumulate with no cleanup mechanism; skill enforces retention policies and hygiene |
| 2 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** — mechanical file verification + 4-dimension reasoning quality gate (v1.3.0) | OPEN | Universal pre-delivery audit: verifies claimed outputs exist, then audits reasoning across correctness, completeness, safety, clarity |
| 3 | [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** — comprehensive color knowledge (naming systems, spaces, accessibility, harmonies) | OPEN | Self-contained expertise for any color task; covers ISCC-NBS, Munsell, OKLCH/CAM16, WCAG contrast, palette generation |
| 4 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator fix** — run_eval.py 0% recall bug; installs eval artifact as real skill; fixes Windows streams, trigger detection, parallel workers | OPEN | **Critical infrastructure fix**: description-optimization loop was optimizing against noise (10+ independent reproductions) |
| 5 | [#1323](https://github.com/anthropics/skills/pull/1323) | **skill-creator fix** — run_eval trigger detection misses real skill name, bails on first non-Skill tool | OPEN | Root cause of 0% recall: evaluator fails to detect skill invocation, causing optimization loop to stall |
| 6 | [#1261](https://github.com/anthropics/skills/pull/1261) | **skill-creator fix** — isolates trigger-eval command files from live project registry | OPEN | Prevents synthetic eval commands from polluting user's `.claude/commands/` during parallel evaluation (10 workers) |
| 7 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** — full testing stack: Trophy model, AAA, React Testing Library, integration/E2E, property-based, contracts | OPEN | Comprehensive reference for modern testing practices; addresses gap in existing skills collection |
| 8 | [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** — retro game development via pyxel-mcp (write → run_and_capture → inspect → iterate) | OPEN | MCP-integrated workflow for Pyxel engine; triggers on "retro/pixel-art/8-bit game" requests |
| 9 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** — prevents orphans, widows, numbering misalignment in generated docs | OPEN | Addresses universal pain point: AI-generated documents suffer typographic defects users rarely explicitly request fixes for |
| 10 | [#486](https://github.com/anthropics/skills/pull/486) | **odt** — OpenDocument (.odt/.ods) creation, template filling, parse to HTML | OPEN | ISO-standard document format support; triggers on ODT/ODS/OpenDocument/LibreOffice mentions |

> **Note**: PR comment counts are not exposed in the dataset; ranking weighs update recency, issue linkage, and infrastructure criticality.

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Top Issues) | Signal Strength |
|-------|----------------------|-----------------|
| **Trust & Security Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍): Community skills distributed under `anthropic/` namespace impersonate official skills — **highest engagement** | 🔴 Critical |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍): Org-wide library / direct sharing links vs. manual file transfer; [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍): Duplicate skills from `document-skills` + `example-skills` plugins | 🟠 High |
| **skill-creator Toolchain Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍): `run_eval.py` 0% trigger rate; [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments, 1👍): recall=0% even for literal slash-commands; [#202](https://github.com/anthropics/skills/issues/202) (8 comments): skill-creator reads like docs, not operational skill | 🟠 High |
| **Windows Compatibility** | [#1061](https://github.com/anthropics/skills/issues/1061) (3 comments, 2👍): PATHEXT, cp1252 encoding, `select()` on pipes block evaluation on Windows | 🟡 Medium |
| **Specialized Domain Skills** | [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments): `compact-memory` symbolic notation; [#412](https://github.com/anthropics/skills/issues/412) (6 comments): `agent-governance` safety patterns; [#1385](https://github.com/anthropics/skills/issues/1385) (3 comments): Reasoning Quality Gate pipeline | 🟡 Medium |
| **MCP & Platform Integration** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments): Expose Skills as MCPs; [#29](https://github.com/anthropics/skills/issues/29) (4 comments): AWS Bedrock support | 🟡 Medium |
| **Context Window Optimization** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments): `claude-api` skill injects ~156k tokens in one call | 🟢 Emerging |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | Directly addresses community-identified lifecycle gap (#1417); recent (Jul 2026); credited to multiple contributors |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Universal quality gate; mechanical + reasoning audit; v1.3.0 suggests iteration; recent (Jul 2026) |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Self-contained, no external deps; fills clear domain gap; active discussion (Jul 2026) |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: run_eval fix** | **Blocks all description optimization**; 10+ reproductions; fixes Windows, parallel workers, artifact installation |
| [#1323](https://github.com/anthropics/skills/pull/1323) | **skill-creator: trigger detection** | Companion to #1298; fixes root cause of 0% recall |
| [#1261](https://github.com/anthropics/skills/pull/1261) | **skill-creator: eval isolation** | Prevents eval pollution of user projects; critical for parallel evaluation reliability |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive, well-structured; fills testing gap; sustained attention (Apr 2026) |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | MCP-native workflow; niche but active (updated Jul 2026); author is Pyxel creator |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Universal pain point; preventive (not reactive); high utility/low complexity |
| [#486](https

---

# Claude Code Community Digest — 2026-08-01

## 1. Today's Highlights
The community is dominated by **Fable 5 billing regressions** on Max plans—multiple users report being incorrectly prompted for usage credits despite active allowances, with silent downgrades to Opus 4.8. Simultaneously, **Windows MSIX builds suffer repeated GPU process crashes (exit code 101457950)** when using the in-app browser, affecting Intel, NVIDIA, and WARP rendering. A cluster of **auto-mode safety bypasses** allows destructive `rm -rf` operations without confirmation, including one incident where a command expanded to `rm -rf /*`.

---

## 2. Releases
No new releases in the last 24 hours.

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#79337](https://github.com/anthropics/claude-code/issues/79337)** Fable 5 prompts "usage credits required" on Max plan (day 1 of inclusion) | Blocks flagship model on paid Max plans; silent downgrade to Opus 4.8 breaks workflows | **51 comments, 20👍** — Highest engagement; users confirm repro on macOS & VS Code |
| **[#65833](https://github.com/anthropics/claude-code/issues/65833)** v2.1.150: scroll wheel sends arrow keys instead of scrolling TUI | Regression breaks basic navigation in terminal UI; affects all WSL/Linux users | **35 comments, 83👍** — Most upvoted; workaround: use keyboard scroll |
| **[#11139](https://github.com/anthropics/claude-code/issues/11139)** Claude Code Web: `gh` CLI permission denied | Blocks GitHub integration in web IDE; limits cloud workflow adoption | **28 comments, 31👍** — Long-standing (since Nov 2025), unassigned |
| **[#79441](https://github.com/anthropics/claude-code/issues/79441)** VS Code extension blocks Fable 5 despite 20% weekly allowance remaining | Duplicate of #79337 but VS Code-specific; confirms cross-platform scope | **13 comments, 10👍** — Marked duplicate but distinct surface |
| **[#81159](https://github.com/anthropics/claude-code/issues/81159)** GPU process crash (exitCode 101457950) kills Claude Desktop on Windows 11 | Hard crash corrupts MSIX package; occurs during Opus 5 in-page browser actions | **9 comments** — Consistent exit code across HW; no crash dump |
| **[#81275](https://github.com/anthropics/claude-code/issues/81275)** MSIX 1.24012.9: Browser pane crashes entire app (same GPU exit code) | Confirms #81159 is reproducible on Intel, NVIDIA, WARP; blocks browser preview feature | **7 comments** — Same exit code `0x60C201E`; total app loss |
| **[#72274](https://github.com/anthropics/claude-code/issues/72274)** Cross-session credential leakage: production DB modified on unauthorized host | **Critical security**: another user's server credentials leaked into session context | **6 comments, 1👍** — Masked password reported; requires immediate rotation |
| **[#74113](https://github.com/anthropics/claude-code/issues/74113)** Background agents go idle without final SendMessage report | Breaks multi-agent workflows; re-ping recovers but adds latency | **5 comments, 5👍** — Affects v2.1.200; no auto-recovery |
| **[#80830](https://github.com/anthropics/claude-code/issues/80830)** Auto-mode destructively removes pre-existing dirs without confirmation | `rm -rf` on existing checkout before clone; safety guard bypassed | **1 comment** — Data loss risk; recovered only via GitHub |
| **[#82165](https://github.com/anthropics/claude-code/issues/82165)** Catastrophic data loss: agent expanded command to `rm -rf /*` | Safety classifier blocked kill attempts; WSL2 environment; Fable 5 model | **1 comment** — Most severe auto-mode failure reported; sudo + wildcard expansion |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| **[#81540](https://github.com/anthropics/claude-code/pull/81540)** | Closed | Fixes usage leak (#80705); automated via Atlas 2 ($200 bounty) |
| **[#17776](https://github.com/anthropics/claude-code/pull/17776)** | Closed | Adds README for `security-guidance` plugin (9 patterns documented) |
| **[#82987](https://github.com/anthropics/claude-code/pull/82987)** | Open | Fixes CI cron failures, excludes PRs from scheduled runs, proposes TUI latency fix for high agent workloads |
| **[#82794](https://github.com/anthropics/claude-code/pull/82794)** | Open | Implements confidence scoring (0–100) + `--threshold` flag for `code-review` plugin; reconciles README↔command drift |
| **[#39872](https://github.com/anthropics/claude-code/pull/39872)** | Open | Upgrades Node.js 20 → 24 for upcoming LTS; long-running (since Mar 2026) |
| **[#82981](https://github.com/anthropics/claude-code/pull/82981)** | Open | Spanish title ("automatizar inventario insumos"); unclear scope — likely misfiled |

---

## 5. Feature Request Trends
From open issues and enhancements, developers are asking for:

1. **Model access transparency** — Clearer quota visibility, no silent downgrades, per-model usage dashboards (#79337, #83036, #77134)
2. **Auto-mode safety hardening** — Mandatory confirmation for destructive ops, sandboxed command expansion, kill-switch API (#80830, #81273, #82165)
3. **Background agent reliability** — Guaranteed final reports, CLI-accessible results, advisor-agent resume control (#74113, #83012, #83014)
4. **Session persistence** — Configurable transcript locations, backup integration, no auto-delete (#83019, #83001)
5. **Security defaults** — Opt-in for IDE context capture, secret scanning in selections, cross-session isolation (#71566, #72274)
6. **TUI/UX polish** — Scroll restoration, prompt suggestions in GUI, dark-mode contrast fixes (#65833, #79919, #62911)

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Billing/entitlement mismatches** | Very High | #79337, #79441, #83037, #83036 — Max plan users blocked from Fable 5 |
| **Windows/MSIX instability** | High | #81159, #81275, #77768, #82962 — GPU crashes, no dumps, full app loss |
| **Auto-mode destructive actions** | High | #80830, #81273, #82165 — `rm -rf` without guard, wildcard expansion to root |
| **Security/credential leaks** | Critical | #72274 (cross-session DB creds), #71566 (closed-file IDE selection) |
| **Background agent opacity** | Medium | #74113 (idle/no report), #83012 (no CLI retrieval), #83014 (no forced resume) |
| **Session data fragility** | Medium | #83019 (transcripts outside backup, 30-day auto-delete), #83001 (quota lost on limit) |
| **Model safeguard false positives** | Medium | #74422 (defensive audit flagged), #83038 (frontend reconnect flagged) |
| **TUI regressions** | Medium | #65833 (scroll wheel), #62911 (dark mode contrast), #79919 (ghost suggestions missing) |

---

*Digest generated from GitHub data (anthropics/claude-code) as of 2026-08-01. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-01

---

## 1. Today's Highlights

Three alpha releases of **Codex CLI v0.147.0** shipped in the last 24 hours, signaling rapid iteration on the Rust codebase. Community attention is concentrated on two high-impact regressions: a **VS Code diff viewer crash on macOS** (109 👍) and a **Windows GPU process crash** triggered by `vk_swiftshader.dll` rejection. Meanwhile, the top-voted issue (185 👍) requests a configurable timeout for the auto-resolve behavior on confirmation prompts, reflecting friction in daily CLI workflows.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.147.0-alpha.4` | Alpha | Latest in the 0.147 series; incremental fixes atop alpha.3 |
| `rust-v0.147.0-alpha.3` | Alpha | Mid-series alpha; likely includes MCP/runtime stabilization |
| `rust-v0.147.0-alpha.1.1` | Alpha | Hotfix re-cut of the initial 0.147 alpha |

> No stable release this cycle. Alpha cadence suggests 0.147 is targeting MCP hardening, sandboxed V8, and session-state fixes (see PRs below).

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#28969](https://github.com/openai/codex/issues/28969) | **Add setting to disable 60s auto-resolve on questions** | CLI auto-confirms prompts after 60s; users want control for safety-critical workflows. | **185 👍, 64 comments** — highest engagement in dataset |
| [#35058](https://github.com/openai/codex/issues/35058) | **Codex Diff crashes in VS Code on macOS** | Diff viewer unusable post-edit; blocks review workflow entirely. | **109 👍, 42 comments** — macOS + VS Code is a primary dev surface |
| [#34133](https://github.com/openai/codex/issues/34133) | **Windows GPU crash: `vk_swiftshader.dll` rejected by Code Integrity** | Screenshot capture kills GPU process; app becomes unresponsive. | **30 comments** — Windows 10/11 blocker for browser tooling |
| [#30408](https://github.com/openai/codex/issues/30408) | **MCP server process leak (9+ GB RSS)** | Per-thread MCP servers never cleaned; memory grows unbounded. | **21 comments, 6 👍** — affects long-running desktop sessions |
| [#35119](https://github.com/openai/codex/issues/35119) | **WSL repos marked non-Git / “Git unavailable” in 26.721.3404** | Regression in WSL2 path handling; breaks cross-OS workspaces. | **11 👍, 11 comments** — Windows+WSL is a key developer segment |
| [#25779](https://github.com/openai/codex/issues/25779) | **Meta-bug: unbounded session/turn state causes freezes** | Context bloat, lost turn control, app freezes over time. | **13 comments, 8 👍** — architectural debt surfacing as UX failures |
| [#29645](https://github.com/openai/codex/issues/29645) | **`image_gen` times out at ~240s for complex prompts** | Built-in image generation unreliable for non-trivial prompts. | **10 comments, 3 👍** — points to inference timeout tuning |
| [#28316](https://github.com/openai/codex/issues/28316) | **Large base64 images re-sent in subsequent context** | Unbounded context growth; wastes tokens & latency. | **10 comments, 3 👍** — context management hygiene |
| [#17401](https://github.com/openai/codex/issues/17401) | **`@include` directive for composable AGENTS.md** | Modular instruction files; long-standing CLI enhancement request. | **9 comments, 15 👍** — strong support for config composability |
| [#35259](https://github.com/openai/codex/issues/35259) | **Sub-agent wait/status polling burns ~20% token quota** | Model re-entry during idle polling consumes credits silently. | **9 comments** — cost/quota transparency concern |

---

## 4. Key PR Progress (Last 24h)

| PR | Status | Summary |
|----|--------|---------|
| [#36413](https://github.com/openai/codex/pull/36413) | **Closed** | Realtime delegation acknowledgement control (`delegationAckFiller` field) |
| [#36411](https://github.com/openai/codex/pull/36411) | **Closed** | Git repos as pre-tool hook test markers (test infra hardening) |
| [#31471](https://github.com/openai/codex/pull/31471) | **Open** | **Faster connectors (1/4)**: Extract apps cache into `ConnectorRuntimeManager` — major refactor for MCP/runtime isolation |
| [#36410](https://github.com/openai/codex/pull/36410) | **Closed** | Explicit `isBlocking` flag for user input (decouples blocking from timeout) |
| [#31817](https://github.com/openai/codex/pull/31817) | **Open** | Automated `models.json` update (model registry sync) |
| [#36409](https://github.com/openai/codex/pull/36409) | **Closed** | Remote plugin search implementation (scoped, paginated, gated) |
| [#36408](https://github.com/openai/codex/pull/36408) | **Closed** | Custom realtime transition instructions (`realtimeStart/EndInstructions`) |
| [#36402](https://github.com/openai/codex/pull/36402) | **Closed** | Experimental `plugin/search` API declaration |
| [#36393](https://github.com/openai/codex/pull/36393) | **Closed** | Redundant filesystem probe elimination (env load, socket connect) |
| [#36389](https://github.com/openai/codex/pull/36389) | **Closed** | Single-writer ownership enforced for all thread histories (concurrency fix) |
| [#36388](https://github.com/openai/codex/pull/36388) | **Closed** | Image preparation analytics (detail, dims, source, role) |
| [#36385](https://github.com/openai/codex/pull/36385) | **Closed** | Acknowledged user message submission API (`submit_user_input_and_wait_for_admission`) |
| [#36384](https://github.com/openai/codex/pull/36384) | **Closed** | Paginated turn summary loading (N+1 query fix) |
| [#36380](https://github.com/openai/codex/pull/36380) | **Closed** | Thread section management APIs (create/update/delete, UUIDv7, SQLite) |
| [#36378](https://github.com/openai/codex/pull/36378) | **Closed** | Local session pickers from state DB first (startup perf) |
| [#36374](https://github.com/openai/codex/pull/36374) | **Closed** | **Sandboxed V8 enabled for code mode** (Windows MSVC now uses sandboxed prebuilts) |
| [#36373](https://github.com/openai/codex/pull/36373) | **Closed** | `--approve-for-me` CLI flag (auto-approval policy for scripting) |
| [#36372](https://github.com/openai/codex/pull/36372) | **Closed** | Native Windows Bazel tests on MSVC target |
| [#36367](https://github.com/openai/codex/pull/36367) | **Closed** | Effective tool exposure tracked in registry (host policy vs tool preference) |
| [#36365](https://github.com/openai/codex/pull/36365) | **Closed** | Strict auto-review for MCP elicitations (`codex_strict_auto_review` marker) |

> **Theme**: Heavy investment in **thread/history architecture** (pagination, writer locks, section APIs), **MCP/runtime isolation** (connector refactor, strict auto-review), **realtime UX** (delegation ack, custom instructions), and **sandbox hardening** (V8 sandbox on Windows). Many PRs from `copyberry[bot]` — likely automated/internal tooling landing batch fixes.

---

## 5. Feature Request Trends

| Trend | Representative Issues | Signal |
|-------|----------------------|--------|
| **Configurable confirmation timeouts** | [#28969](https://github.com/openai/codex/issues/28969) (185 👍) | Top-voted; users want per-project/per-session control |
| **Modular AGENTS.md composition** | [#17401](https://github.com/openai/codex/issues/17401) (15 👍) | `@include` directive for shared instruction libraries |
| **Sub-agent identity & observability** | [#29649](https://github.com/openai/codex/issues/29649), [#19186](https://github.com/openai/codex/issues/19186) | Dynamic naming, prioritize user-defined names over runtime nicknames |
| **MCP OAuth/enterprise SSO reliability** | [#35006](https://github.com/openai/codex/issues/35006) | Umbrella tracking for credential lifecycle, reauth, locking |
| **Hybrid local/cloud “instant” models** | [#22041](https://github.com/openai/codex/issues/22041) | NPU-backed lightweight models for low-latency edits |
| **VS Code parity with Desktop** | [#35763](https://github.com/openai/codex/issues/35763) | Missing “Max” reasoning effort in extension |
| **Codex Cloud PR template support** | [#17932](https://github.com/openai/codex/issues/17932), [#6750](https://github.com/openai/codex/issues/6750) | Respect `.github/pull_request_template.md` |

---

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Auto-resolve confirmation timeout** | #28969 (185 👍), #36373 (new `--approve-for-me` flag) | Safety vs speed tradeoff; no middle ground today |
| **Session/context unbounded growth** | #25779 (meta-bug), #28316 (image re-send), #36384 (N+1 turn loads) | Freezes, OOM, token waste — architectural |
| **MCP server leakage** | #30408 (9+ GB RSS), #35259 (polling burns quota) | Resource & cost leak in long sessions |
| **Windows/WSL regressions** | #34133 (GPU crash), #35119 (Git detection), #32706 (Edge plugin) | Windows is a friction surface; frequent breakage |
| **VS Code extension parity** | #35058 (diff crash), #35763 (missing reasoning tier) | Extension lags Desktop; blocks primary IDE users |
| **Quota/accounting opacity** | #32250 (Sol Medium depletes Pro), #36396 (sub-agent busy-wait), #36369 (false limit alert) | Users can’t predict or audit consumption |
| **Sub-agent UX confusion** | #36405 (fork inherits unfinished turns), #19186 (nicknames vs roles), #29649 (naming) | Multi-agent workflows feel brittle |

---

*Generated from `github.com/openai/codex` data as of 2026-08-01. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-01

---

## 1. Today's Highlights

The project shipped three releases in 24 hours: a nightly (v0.55.0-nightly), a preview patch (v0.54.0-preview.1), and a stable patch (v0.53.1), all centered on a critical fix that classifies capacity exhaustion as a terminal error to prevent retry hangs and propagates `InvalidStreamError` details to the UI for actionable guidance. Concurrently, two high-impact regressions from v0.53.0 are being addressed: a `thoughtSignature` stripping bug causing 400 errors on parallel tool calls, and an SSRF vulnerability in `web-fetch` resolved via async DNS resolution.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.55.0-nightly.20260801.gf47d6c6f7** | Nightly | • `fix(core)`: Classify capacity exhaustion as terminal to prevent retry hangs ([#28599](https://github.com/google-gemini/gemini-cli/pull/28599))<br>• `fix(core,cli)`: Propagate `InvalidStreamError` details to UI for specific empty-response guidance ([#28566](https://github.com/google-gemini/gemini-cli/pull/28566)) |
| **v0.54.0-preview.1** | Preview Patch | • Cherry-pick of `f47d6c6` (above fixes) onto `release/v0.54.0-preview.0` ([#28609](https://github.com/google-gemini/gemini-cli/pull/28609)) |
| **v0.53.1** | Stable Patch | • Same cherry-pick applied to `release/v0.53.0` (with merge conflicts requiring manual resolution) ([#28610](https://github.com/google-gemini/gemini-cli/pull/28610)) |

> **Note**: The stable patch (v0.53.1) had conflicts; users on v0.53.0 should verify the fix landed cleanly.

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after hitting MAX_TURNS** | Masks real failures; breaks trust in agent delegation. | 12 comments, 2 👍 — P1, needs retesting |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Renders subagent delegation unusable; users disable agents entirely. | 8 comments, 8 👍 — P1, high user pain |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations (EPIC)** | Scaling eval infrastructure for 76+ behavioral tests across 6 models. | 7 comments — P1, strategic investment |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads/search/mapping (EPIC)** | Potential to reduce turns, token noise, and improve code navigation precision. | 7 comments, 1 👍 — P2, exploratory |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini underutilizes custom skills/sub-agents** | Core value prop of extensibility not realized autonomously. | 6 comments — P2, product gap |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions indefinitely** | Wastes compute, pollutes memory index with noise. | 5 comments — P2, quality issue |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell command execution stuck at “Waiting input” post-completion** | Frequent UX breakage; simple commands hang the agent loop. | 4 comments, 3 👍 — P1, core reliability |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Browser agent lacks session takeover/lock recovery** | Persistent profile locking breaks automation on Wayland/macOS. | 4 comments — P3, customer-reported |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Platform gap for Linux desktop users. | 4 comments, 1 👍 — P1, agent/browser |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error when >128 tools available** | Tool explosion breaks agent; needs smarter scoping. | 3 comments — P2, scalability blocker |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#28566](https://github.com/google-gemini/gemini-cli/pull/28566) | **Closed** | **Critical fix**: Propagates `InvalidStreamError` (type + message) to CLI UI → enables `/compress` suggestions, quota guidance. Shipped in all three releases today. |
| [#28586](https://github.com/google-gemini/gemini-cli/pull/28586) / [#28607](https://github.com/google-gemini/gemini-cli/pull/28607) | **Open** | **Regression fix (v0.53.0)**: Preserve `thoughtSignature` in `functionCall` parts — resolves `400: Function call is missing thought_signature` on parallel tool calls. Two PRs targeting same root cause. |
| [#28557](https://github.com/google-gemini/gemini-cli/pull/28557) | **Open** | **Security**: Fix SSRF in `web-fetch.ts` by switching to async DNS resolution (`isPrivateIpAsync`) — blocks hostnames resolving to internal IPs (e.g., 169.254.169.254). |
| [#28608](https://github.com/google-gemini/gemini-cli/pull/28608) | **Open** | **Auth resilience**: Fall back to stable models when preview model 404s under Gemini API key auth (missing preview access). |
| [#28551](https://github.com/google-gemini/gemini-cli/pull/28551) | **Open** | **macOS sandbox**: Fall back to embedded Seatbelt profiles if static `.sb` files missing — unblocks `-s` flag on gMac/CI. |
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | **Open** | **MCP OAuth**: Refresh tokens using stored client ID (fixes dynamic registration flow; previously deleted creds on refresh failure). |
| [#28519](https://github.com/google-gemini/gemini-cli/pull/28519) | **Open** | **Auth loop**: Await credential write + force consent — fixes infinite OAuth loop ([#28430](https://github.com/google-gemini/gemini-cli/issues/28430)). |
| [#28609](https://github.com/google-gemini/gemini-cli/pull/28609) | **Closed** | Automated cherry-pick for v0.54.0-preview.1. |
| [#28610](https://github.com/google-gemini/gemini-cli/pull/28610) | **Closed** | Automated cherry-pick for v0.53.1 (conflicts detected — manual resolution required). |
| [#28606](https://github.com/google-gemini/gemini-cli/pull/28606) | **Open** | `Setapart` — unclear scope; needs triage (no linked issue, minimal description). |

---

## 5. Feature Request Trends

1. **Agent Observability & Debugging**  
   - Subagent trajectory visibility in `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598))  
   - Bug reports lacking subagent context ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763))  
   - Task-aware memory compression ([#23323](https://github.com/google-gemini/gemini-cli/issues/23323))

2. **AST-Aware Tooling**  
   - Precision reads, search, and codebase mapping to reduce turns/tokens ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746))  
   - Evaluation of tools like `tilth`/`glyph` for integration.

3. **Autonomous Skill/Subagent Discovery**  
   - Model should invoke custom skills/agents without explicit instruction ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).

4. **Browser Agent Hardening**  
   - Session takeover, lock recovery, Wayland support, settings.json adherence ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).

5. **Memory System Quality**  
   - Deterministic redaction, invalid patch quarantine, low-signal session handling ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Agent/Subagent Unreliability** | Hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), false success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), ignored settings ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), unauthorized runs ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) | **High** — 8+ issues, P1/P2, many "workstream-rollup" |
| **Shell/Command Execution Hangs** | "Waiting input" after completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), stuck at interactive prompts ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)), tmp script pollution ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) | **High** — Core loop breakage |
| **Model/Tool Integration Bugs** | `thoughtSignature` regression (2 PRs), 400 error >128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)), SSRF vuln ([#28557](https://github.com/google-gemini/gemini-cli/pull/28557)) | **High** — Blocking releases |
| **Auto Memory Noise & Security** | Indefinite retries ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), post-hoc redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), invalid patch leakage ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)) | **Medium** — Quality/trust erosion |
| **Platform Gaps** | Wayland browser failure ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), macOS seatbelt missing ([#28551](https://github.com/google-gemini/gemini-cli/pull/28551)), symlink agent detection ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)) | **Medium** — Adoption blockers |
| **Terminal UX** | Resize flicker/performance ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)), editor exit corruption ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)), `\n` escape bugs ([#22466](https://github.com/google-gemini/gemini-cli/issues/22466)) | **Medium** — Daily friction |

---

**Bottom Line**: Today’s releases stabilize the v0.53/v0.54 lines against a critical retry-hang bug, but the v0.53.0 regression (`thoughtSignature`) and SSRF fix remain in-flight. The backlog signals a pivot from *feature velocity* to *agent reliability, observability, and platform hardening* — expect more patch releases and eval investment in the next cycle.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-01

---

## 1. Today's Highlights
- **v1.0.78-0 released** with a new `/permissions` command to switch approval modes and ACP `closeSession` support. A new sandbox setting `allowDevToolCaches` (enabled by default) grants sandboxed builds access to toolchain caches and registries.  
- **Session stability regressions dominate discussions**: large-session resume now OOMs or pegs a CPU core for ~70 min (v1.0.74+), and plan-mode regressions block shell commands like `gh` that were previously allowed.  
- **Enterprise governance gap persists**: org admins still cannot push environment variables or settings to developers’ *local* CLI installs, forcing workarounds via cloud-only Codespaces secrets.

---

## 2. Releases
### v1.0.78-0 (2026-07-31)
| Change | Details |
|--------|---------|
| **Added** | `/permissions` command to toggle approval modes; ACP `closeSession` request to end sessions cleanly. |
| **Improved** | Sandbox setting `allowDevToolCaches` (default: on) — grants sandboxed builds access to toolchain caches, registries, and installs so builds work without extra configuration. |

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4188](https://github.com/github/copilot-cli/issues/4188) | **Plan-mode regression: shell commands blocked** | `gh` CLI and other tools used to enrich plans are now denied, breaking established workflows. | 7 comments, 3 👍 — **Closed** but regression acknowledged. |
| [#4305](https://github.com/github/copilot-cli/issues/4305) | **`Undefined` → Rust `String` conversion crash** | Immediate error on any command after upgrading to 1.0.76; blocks all usage. | 4 comments, 4 👍 — **Closed** (likely fixed in 1.0.78). |
| [#4251](https://github.com/github/copilot-cli/issues/4251) | **Large-session resume OOMs / 70-min CPU grind** | 3–4× memory vs 1.0.73; makes long-lived sessions unusable. | 1 comment, 1 👍 — **Open**, regression isolated to 1.0.74. |
| [#4078](https://github.com/github/copilot-cli/issues/4078) | **Scheduled prompts kill prompt queue** | `/every` or `/after` prompts discard queued items; queue stalls. | 4 comments — **Open**, breaks automation chains. |
| [#4161](https://github.com/github/copilot-cli/issues/4161) | **`task_complete` unavailable after mode switch** | Regression of #1523; autopilot mode loses critical tool after toggling. | 4 comments, 4 👍 — **Closed** but re-opened concern. |
| [#3183](https://github.com/github/copilot-cli/issues/3183) | **Orphan `tool_use` after hard kill + resume → 400** | Persisted conversation state corrupts; SDK users hit `tool_use` without `tool_result`. | 4 comments — **Closed**, root cause in session persistence. |
| [#3909](https://github.com/github/copilot-cli/issues/3909) | **Enterprise-managed settings for local CLI** | No central push of `env`/config to local installs; only cloud Codespaces supported. | 4 comments — **Open**, high enterprise demand. |
| [#2109](https://github.com/github/copilot-cli/issues/2109) | **ACP `ask_user` / `ask_question` extension** | Custom ACP clients cannot surface clarifying questions; only `request_permission` exists. | 2 comments, **6 👍** — **Open**, strong community interest. |
| [#1352](https://github.com/github/copilot-cli/issues/1352) | **`sessionStart` hook stdout discarded** | Prevents banners, reminders, checklists at session start. | 3 comments, 3 👍 — **Open**, long-standing (Feb 2026). |
| [#4325](https://github.com/github/copilot-cli/issues/4325) | **Session unloadable when `events.jsonl` > V8 max string** | Hard limit corrupts resume; session appears valid but fails to load. | 0 comments — **Open**, critical for long-running sessions. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#4316](https://github.com/github/copilot-cli/pull/4316) | **Create `devcontainer.json`** | Adds a dev container definition for consistent contributor environments. | Open |
| [#3163](https://github.com/github/copilot-cli/pull/3163) | **ViewSonic monitor** | Appears unrelated/spam (references monitor hardware and GitHub Actions runners). | Open |

> Only two PRs updated in the last 24h; one is likely noise. No core feature/fix PRs visible in this window.

---

## 5. Feature Request Trends
1. **Enterprise/local governance parity** — Org-managed `env`, settings, and model policies for *local* CLI (not just Codespaces) [#3909](https://github.com/github/copilot-cli/issues/3909), [#4315](https://github.com/github/copilot-cli/issues/4315).  
2. **ACP protocol completeness** — `ask_user`/`ask_question`, token/context usage exposure, structured permission flows [#2109](https://github.com/github/copilot-cli/issues/2109), [#4174](https://github.com/github/copilot-cli/issues/4174).  
3. **Session UX resilience** — Scrollable history [#4313](https://github.com/github/copilot-cli/issues/4313), transcript repaint fixes [#4311](https://github.com/github/copilot-cli/issues/4311), pinned-session nav [#4321](https://github.com/github/copilot-cli/issues/4321).  
4. **MCP ergonomics** — Comments in `.mcp.json` [#4323](https://github.com/github/copilot-cli/issues/4323), interactive wizard help text [#1478](https://github.com/github/copilot-cli/issues/1478), nested-agent tool inheritance [#4320](https://github.com/github/copilot-cli/issues/4320).  
5. **Plan-mode flexibility** — Allow shell tools during planning [#4188](https://github.com/github/copilot-cli/issues/4188), fix forked-session plan/todo sync [#4324](https://github.com/github/copilot-cli/issues/4324).

---

## 6. Developer Pain Points (Recurring Frustrations)
- **Session corruption at scale**: V8 string limits, OOM on resume, orphaned `tool_use` blocks — long sessions become unrecoverable.  
- **Mode-switching regressions**: Plan → autopilot toggles drop tools (`task_complete`), block previously allowed commands, or hang on session switch.  
- **ACP gaps for integrators**: No structured user-question API, no token/cost telemetry, `closeSession` only added now.  
- **Enterprise blind spot**: Local CLI remains unmanageable centrally; secrets/env vars only work in GitHub-hosted runners.  
- **Terminal/rendering flakiness**: Blank transcripts, broken scroll, sidebar keyboard nav missing — core TUI interactions feel fragile.  
- **Version pinning broken**: Installing a specific version (e.g., `v1.0.75`) still pulls latest [#4317](https://github.com/github/copilot-cli/issues/4317).  
- **Sandbox platform limits**: Windows ReFS/Dev Drive incompatibility undocumented [#3712](https://github.com/github/copilot-cli/issues/3712); PTY buffer deadlock on macOS [#2182](https://github.com/github/copilot-cli/issues/2182).  

--- 

*Digest compiled from github.com/github/copilot-cli data as of 2026-08-01 00:00 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-01

## Today's Highlights
No new releases in the last 24 hours. Community focus remains on two high-impact feature requests—**Remote Control** (cross-device session continuity) and **Memory System** (persistent context across sessions)—both attracting significant discussion. A critical bug fix PR addresses double-encoded JSON in tool-call arguments that breaks providers returning nested JSON strings.

---

## Releases
*No new releases published in the last 24 hours.*

---

## Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) | **Feature Request: Remote Control — Continue local sessions from any device** | Enables seamless workflow continuity: pick up a local CLI session on phone/tablet/browser without losing context. High demand for mobile/remote dev workflows. | 23 👍, 9 comments — strong community interest |
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Feature Request: Memory System — Persistent context across sessions** | Automatic + manual memory (project patterns, user preferences, AI-managed notes) would eliminate repetitive context-setting. Foundational for long-term agent utility. | 8 comments, 0 👍 — active design discussion |
| [#2422](https://github.com/MoonshotAI/kimi-cli/issues/2422) | **Bug: Output auto-scrolls to bottom after conversation completes (Linux, v1.46.0)** | Breaks post-task review workflow; users cannot scroll back through output without it jumping to bottom. Affects Linux desktop users on kimi2.6 model. | 1 👍, 2 comments — usability regression |
| [#796](https://github.com/MoonshotAI/kimi-cli/issues/796) | **Closed: LLM provider error — "message at position 1 with role" (v1.3, macOS)** | Invalid message role ordering sent to provider. Closed without fix details; may indicate provider-side validation changes. | 1 comment — low visibility, historical |

---

## Key PR Progress

| # | Title | Description | Status |
|---|-------|-------------|--------|
| [#2572](https://github.com/MoonshotAI/kimi-cli/pull/2572) | **fix(kosong): recursively unwrap double-encoded JSON in tool-call arguments** | Providers (incl. Moonshot API) sometimes return `function.arguments` where nested arrays/objects are themselves JSON-encoded strings. This PR adds recursive unwrapping before Pydantic validation, fixing `SetTodoList`, `ExitPlanMode`, `StrReplaceFile` tool calls. | Open, authored 2026-07-31 |

---

## Feature Request Trends
From the two major open enhancements, the community is converging on **session persistence & portability**:

1. **Cross-device continuity** (#1282) — Remote Control / session sync via browser or mobile app.
2. **Long-term memory** (#1283) — Both automatic (AI-extracted project patterns) and manual (user-defined instructions via config/files) memory layers.
3. **Implicit theme**: Reducing context-reconstruction overhead between sessions and devices — the top friction point for daily CLI agent users.

---

## Developer Pain Points
- **Output rendering regression** (#2422): Auto-scroll-to-bottom on Linux breaks post-completion log review.
- **Provider compatibility fragility** (#2572): Double-encoded JSON in tool arguments causes silent Pydantic failures; suggests need for more robust argument normalization layer.
- **Message format validation** (#796): Provider-side role/position validation changes can break older CLI versions without clear error messages.
- **Session ephemerality**: No built-in mechanism to persist or transfer session state — driving the Remote Control + Memory System requests.

---

*Data source: `github.com/MoonshotAI/kimi-cli` — Issues & PRs updated 2026-07-31 to 2026-08-01.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-01

## Today's Highlights
No new releases were published in the last 24 hours. The issue tracker is dominated by **OpenCode Go/Zen authentication failures** (401 "Request blocked by upstream provider") affecting multiple subscribers, alongside persistent **TUI black-screen regressions** across versions 1.0.47+. A cluster of PRs landed today focused on TUI plugin discovery, runtime sharing for external TSX plugins, and a configurable send-key binding — signaling active investment in extensibility and UX polish.

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#38257](https://github.com/anomalyco/opencode/issues/38257) | **OpenCode Go: 401 on chat/completions** — all Go models blocked, `/v1/models` works | **Critical service outage** for paying Go subscribers; server-side auth regression blocking all completions | 42 comments, 11 👍 — highest engagement; users report total work stoppage |
| [#39823](https://github.com/anomalyco/opencode/issues/39823) | **DeepSeek V4 Flash (0731) availability on Go/Zen** | New flagship model release; developers need clarity on rollout timeline | 22 comments, 20 👍 — strong demand for latest model access |
| [#24649](https://github.com/anomalyco/opencode/issues/24649) | **Clarify self-hosted vs. proxied models in Go plan** | Trust/transparency question: which models run on Anomaly infra vs. third-party proxies? | 14 comments, 31 👍 — high upvotes signal community concern over data routing |
| [#39875](https://github.com/anomalyco/opencode/issues/39875) | **Revert silent removal of Go privacy wording & provider attribution** | Docs changes removed privacy guarantees and provider transparency without notice | 4 comments, 20 👍 — subscribers flagging governance/compliance risk |
| [#39827](https://github.com/anomalyco/opencode/issues/39827) | **Zen: AuthError on all models, even after account recreation** | Mirrors #38257 but for Zen tier; suggests systemic auth infrastructure issue | 2 comments, 2 👍 — early reports, likely to grow |
| [#4140](https://github.com/anomalyco/opencode/issues/4140) | **Black screen on v1.0.47+ (TUI)** | Regression blocking TUI launch; fixed by downgrading to 1.0.46 | 37 comments, 13 👍 — long-standing, affects onboarding |
| [#10221](https://github.com/anomalyco/opencode/issues/10221) | **Black screen on fresh install** | New users hit blank TUI immediately; blocks adoption | 33 comments, 17 👍 — high visibility for first-time experience |
| [#17505](https://github.com/anomalyco/opencode/issues/17505) | **`session/update` arrives after `session/prompt` response (ACP)** | Breaks ACP integrations (e.g., Fabriqa); turn finalization receives incomplete content | 15 comments, 10 👍 — impacts ecosystem partners |
| [#39881](https://github.com/anomalyco/opencode/issues/39881) | **gpt-5.6-luna stream degradation on Go (repeats, cuts, junk)** | Quality gap vs. Codex path; paid subscribers get inferior streaming | 3 comments — emerging quality complaint |
| [#39165](https://github.com/anomalyco/opencode/issues/39165) | **SQLite NOT NULL constraint crash on `/model` switch** | Model switch mid-session corrupts message sequencing; silent failure thereafter | 3 comments — data-integrity bug with silent fallout |

---

## Key PR Progress (Top 10 by Significance)

| # | PR | Description | Impact |
|---|----|-------------|--------|
| [#39981](https://github.com/anomalyco/opencode/pull/39981) | **fix(tui): watch newly created plugin directory** | Enables hot-discovery of `.opencode/plugins/tui/` created after TUI start | Unblocks plugin development workflow; merged |
| [#39983](https://github.com/anomalyco/opencode/pull/39983) | **fix(tui): share runtime with external TSX plugins** | External V2 plugins now use host OpenTUI/Solid runtimes; fixes frozen reactive JSX | Critical for plugin ecosystem stability; merged |
| [#39985](https://github.com/anomalyco/opencode/pull/39985) | **feat(app): configurable send key (Enter/Shift+Enter/Ctrl+Enter)** | Adds Settings → General → Input binding options | High-request UX customization; open |
| [#39984](https://github.com/anomalyco/opencode/pull/39984) | **Add 'no-browser' option to web command** | Disables auto-browser-open for headless/CI environments | Developer ergonomics; open |
| [#39982](https://github.com/anomalyco/opencode/pull/39982) | **feat(tool): concise error output for failed shell commands** | Part 3 of #39771; reduces noise from non-zero exits | Improves log readability; open |
| [#39980](https://github.com/anomalyco/opencode/pull/39980) | **test(tui): wait for mini prompt readiness** | Eliminates flaky test race on prompt listener | Test reliability; merged |
| [#39942](https://github.com/anomalyco/opencode/pull/39942) | **fix(tui): persist tab reorder once per drag** | Batches tab persistence to single write per gesture | Performance & UX smoothness; merged |
| [#39941](https://github.com/anomalyco/opencode/pull/39941) | **fix(tui): harden session tab state hygiene** | Fixes silent persistence failures & double-close bugs | Prevents tab reset on launch; merged |
| [#39940](https://github.com/anomalyco/opencode/pull/39940) | **fix(tui): ignore hidden tab close hitbox** | Prevents invisible close clicks on non-hovered tabs | Terminal compatibility fix; merged |
| [#5657](https://github.com/anomalyco/opencode/pull/5657) | **feat: toggle transparent background** | Tri-state transparency policy (`auto\|on\|off`) with command palette | Long-requested theming feature; open (since Dec 2025) |

---

## Feature Request Trends
1. **Marketplace / Plugin Registry** ([#28696](https://github.com/anomalyco/opencode/issues/28696), 23 👍) — Unified discovery, installation, and distribution for agents, skills, and TUI plugins.
2. **Privacy & Data Governance** ([#39861](https://github.com/anomalyco/opencode/issues/39861), [#39875](https://github.com/anomalyco/opencode/issues/39875), [#24649](https://github.com/anomalyco/opencode/issues/24649)) — Demands for explicit retention policies, provider attribution, and reversal of silent doc changes.
3. **Session/Context Management** ([#24017](https://github.com/anomalyco/opencode/issues/24017), [#37489](https://github.com/anomalyco/opencode/issues/37489), [#23595](https://github.com/anomalyco/opencode/issues/23595)) — Saving/bookmarking threads, cache invalidation fixes, stable system-reminder positioning.
4. **Notifications & Cross-IDE Integration** ([#39936](https://github.com/anomalyco/opencode/issues/39936), [#7242](https://github.com/anomalyco/opencode/issues/7242)) — VS Code notifications on agent completion/attention needs.
5. **Model Access Transparency** — Real-time status pages for Go/Zen model availability, version pinning, and upstream provider health.

---

## Developer Pain Points
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Auth/Upstream blocking on paid tiers** | #38257 (Go), #39827 (Zen) — 401 on all completions | **Critical**; multiple subscribers, high 👍 |
| **TUI black-screen regressions** | #4140 (v1.0.47+), #10221 (fresh install), #16185 (desktop + CLI) | **High**; blocks onboarding & daily use |
| **Silent data loss / session corruption** | #39165 (SQLite crash on model switch), #32719 (messages ignored), #17505 (ACP ordering) | **High**; erodes trust in session persistence |
| **Streaming quality degradation** | #39881 (gpt-5.6-luna repeats/cuts), #24316 (qwen naked tool calls halt) | **Medium**; paid tier quality vs. direct API |
| **Opaque model routing & privacy** | #24649 (self-hosted vs. proxied), #39875 (removed privacy wording) | **Medium**; compliance & trust concerns |
| **Missing basic UX affordances** | #927 (text selection), #39944 (collapse tool panels), #39985 (send key binding) | **Medium**; daily friction for power users |

---

*Generated from GitHub data (anomalyco/opencode) as of 2026-08-01 00:00 UTC. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-01

## Today's Highlights
The Pi codebase is undergoing a major architectural refactor centered on session persistence, server/client separation, and streaming performance. Over 20 PRs landed in the last 24 hours introducing a durable SQLite-backed server backend, linear JSON streaming output, and per-session store queues — signaling a shift toward production-grade multi-session support. Meanwhile, high-impact bugs in compaction, TUI rendering, and provider authentication remain active blockers for power users.

## Releases
No new releases in the last 24 hours.

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6187](https://github.com/earendil-works/pi/issues/6187) | **Pi login hangs in WSL after GitHub Copilot device authorization** | Blocks WSL users entirely; auth completes in browser but client never detects it. | 19 comments, active since June — top engagement. |
| [#6665](https://github.com/earendil-works/pi/issues/6665) | **TUI pins a full core while streaming (uncached Intl.Segmenter + per-chunk Markdown rebuild)** | Major CPU regression during long streaming sessions; affects all users on `pi -ne`. | 11 comments, marked `inprogress`. |
| [#6879](https://github.com/earendil-works/pi/issues/6879) | **Auto-compaction never triggers past 100% context until provider overflow** | Compaction logic fails silently; sessions grow until API rejects at 373k tokens. | 7 comments, 5 👍 — data-loss risk. |
| [#7020](https://github.com/earendil-works/pi/issues/7020) | **Pi doesn't continue after compaction** | Long-running coordinator sessions stall post-compaction; workflow-breaking. | 7 comments, 2 👍, `inprogress`. |
| [#7161](https://github.com/earendil-works/pi/issues/7161) | **anthropic-messages never sends x-client-request-id** | Breaks session affinity in proxies/gateways; Anthropic conversations can't be grouped. | 6 comments, affects multi-account setups. |
| [#7253](https://github.com/earendil-works/pi/issues/7253) | **/compact triggers twice at 90% context, loops until ESC** | Double-compaction bug with error spam; blocks manual compaction flow. | 3 comments, `inprogress`. |
| [#7149](https://github.com/earendil-works/pi/issues/7149) | **Standalone linux-x64 binary SIGILL on pre-Haswell CPUs (BMI2)** | Official binary crashes on older CPUs; npm version works — build config issue. | 2 comments, `inprogress`, PR [#7390](https://github.com/earendil-works/pi/pull/7390) targets fix. |
| [#7290](https://github.com/earendil-works/pi/issues/7290) | **`--mode json` emits O(n²) stdout for single tool call; OOMs agent** | JSON streaming sends full cumulative message on every update; kills large writes. | 2 comments, `inprogress`, PR [#7394](https://github.com/earendil-works/pi/pull/7394) addresses. |
| [#7319](https://github.com/earendil-works/pi/issues/7319) | **kimi-coding OAuth 401 stops turn: no refresh-on-401, 401 excluded from retry** | Built-in provider fails silently on token expiry; no automatic recovery. | 5 comments, closed but highlights provider resilience gap. |
| [#7413](https://github.com/earendil-works/pi/issues/7413) | **Compaction fails on GitHub Copilot GHE.com — "unknown stamp" error** | Enterprise Copilot users blocked from compaction; normal chat works. | 2 comments, filed today — high severity for orgs. |

## Key PR Progress

| # | PR | Description | Impact |
|---|----|-------------|--------|
| [#7396](https://github.com/earendil-works/pi/pull/7396) | **feat: add server session backend** | Durable `@earendil-works/pi-coding-agent/server` with JSONL persistence, cross-process locking, crash recovery, and live transcript projection. | Foundation for remote/multi-client sessions. |
| [#7409](https://github.com/earendil-works/pi/pull/7409) | **feat: add remote session client coordination** | `PiClient` with session leases, `RemoteSession` transcript projection, idempotent detach/reconciliation. | Enables true client-server architecture. |
| [#7381](https://github.com/earendil-works/pi/pull/7381) | **fix: make model refresh state consistent** | Unifies model catalog refresh across login, API-key changes, extension registration, `/model` commands. | Eliminates race conditions in provider discovery. |
| [#7394](https://github.com/earendil-works/pi/pull/7394) | **fix: make JSON streaming output linear** | Emits delta-only `message_update` in JSON/RPC modes; adds stdout backpressure. | Fixes O(n²) memory blowup (#7290). |
| [#7390](https://github.com/earendil-works/pi/pull/7390) | **fix: target baseline x64 CPUs** | Removes BMI2 requirement from standalone binary. | Unblocks pre-Haswell users (#7149). |
| [#7387](https://github.com/earendil-works/pi/pull/7387) | **fix: read clipboard text on Wayland** | Uses `wl-paste` before X11 fallback; preserves empty clipboard semantics. | Fixes Ctrl+V on Wayland (#7248). |
| [#7404](https://github.com/earendil-works/pi/pull/7404) | **feat: add Baseten provider** | New built-in OpenAI-compatible provider via `BASETEN_API_KEY`. | Expands provider ecosystem. |
| [#7379](https://github.com/earendil-works/pi/pull/7379) | **fix: clarify session persistence ownership** | Replaces per-session storage objects with owned `SessionStore`; atomic multi-backend persistence. | Hardens session durability. |
| [#7398](https://github.com/earendil-works/pi/pull/7398) | **feat: add per-session store queues** | Serializes memory/JSONL ops per session; bounds JSONL concurrency to 4. | Prevents cross-session contention. |
| [#7389](https://github.com/earendil-works/pi/pull/7389) | **Add native prompt API for extensions** | Exposes `pi.prompt()` to extensions with full command/skill/template routing. | Unblocks extension-driven workflows. |

## Feature Request Trends
1. **Server/Client Architecture** — Multiple PRs (#7396, #7409, #7386, #7411) converge on a durable server backend with remote session coordination, Unix socket transport, and CLI role separation.
2. **Provider Extensibility** — New built-in providers (Baseten #7404, Kimi K3 #7199, Bedrock Mantle #6216) and custom provider docs fixes (#7267) show demand for easier third-party model integration.
3. **Streaming Performance** — Delta-only JSON output (#7394), cached grapheme segmentation (#6665), and tool-result render caching (#7385) target O(n²) bottlenecks.
4. **Compaction Reliability** — Auto-trigger logic (#6879), double-compaction fixes (#7253), and enterprise auth support (#7413) address the top data-loss vector.
5. **Extension Prompt/Command API** — Native `pi.prompt()` (#7389) and command execution fixes (#7277) enable richer extension workflows.

## Developer Pain Points
- **WSL Auth Breakage** (#6187): Device flow completes but client hangs — blocks entire WSL user base.
- **Compaction Unreliability**: Silent failures (#6879), double-runs (#7253), enterprise auth errors (#7413), and post-compaction stalls (#7020) erode trust in long sessions.
- **TUI Performance**: 100% core usage streaming (#6665), input lag scaling with history (#7385), and scroll-jank on copy (#6662) make the TUI unusable for heavy workloads.
- **Provider Edge Cases**: Missing `x-client-request-id` (#7161), 401 handling gaps (#7319), thought_signature drops (#6996, #7356), and array content parsing (#7062) cause silent failures.
- **Binary Compatibility**: Official `linux-x64` binary requires BMI2 (#7149) while npm works — forces users to build from source.
- **JSON/RPC Streaming Bloat**: Cumulative message updates OOM agents on large tool outputs (#7290) — only now being fixed via delta emission (#7394).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-01

## 1. Today's Highlights
The v0.21.2 patch release ships with **autofix round-limiting safeguards** that defer lower-severity suggestions after five rounds and surface visible notices when refusing to proceed. Meanwhile, the daemon team is advancing **multi-workspace support** (RFC #6378) and **bounded resource tracking** (#8051) for production `qwen serve` deployments. A cluster of Anthropic 4.6+ converter fixes (#8039, #8159–#8161) and Windows file-security hardening (#8227) also landed, reflecting ongoing model-compatibility and platform-hardening work.

---

## 2. Releases
### v0.21.2 — Patch Release
- **Autofix round limits**: After five autofix rounds, lower-severity suggestions are deferred and a visible notice is posted when refusing to proceed (#7913, #8067).
- **No breaking changes** — targeted stability and UX improvements for the autofix workflow.

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6378](https://github.com/QwenLM/qwen-code/issues/6378) | **RFC: Multiple workspaces per `qwen serve` daemon** | Foundational architecture change: moves from `1 daemon = 1 workspace` to `1 daemon = N workspaces`. Enables shared daemon for CI/CD, IDEs, and multi-repo workflows. | 31 comments, active design discussion, P2 priority |
| [#8051](https://github.com/QwenLM/qwen-code/issues/8051) | **Bound multi-workspace daemon resource usage** | Critical for production: adds byte-level bounds (request bodies, WS frames, memory) on top of count-only limits. Prevents OOM and DoS in shared daemons. | 9 comments, P2, `need-discussion` |
| [#8039](https://github.com/QwenLM/qwen-code/issues/8039) | **Anthropic 4.6+ prefill 400 + thinking.display defaults** | Blocks all Claude 4.6+/5.x models: assistant prefill returns 400; `thinking.display` silently defaults to `omitted`. High-impact model compatibility. | 6 comments, P1, closed with fix |
| [#6721](https://github.com/QwenLM/qwen-code/issues/6721) | **Deferred tool discovery invalidates prompt cache prefixes** | Performance regression: `tool_search` resolving hidden tools calls `setTools()`, busting prompt cache prefixes. Affects long-session latency/cost. | 7 comments, P2 |
| [#8182](https://github.com/QwenLM/qwen-code/issues/8182) | **Daemon gives each ACP child 50% host memory, never divided** | Memory misconfiguration: V8 old-space ceiling derived from host RAM, not divided by child count. Risks OOM on multi-child daemons. | 3 comments, P2 |
| [#8258](https://github.com/QwenLM/qwen-code/issues/8258) | **History consolidation drops later `thoughtSignature` per turn** | Reasoning fidelity loss: merges all thought-flagged parts into one blob, keeping only first `thoughtSignature`. Breaks multi-reasoning-episode turns. | 2 comments, P2 |
| [#8252](https://github.com/QwenLM/qwen-code/issues/8252) | **File-search crawler re-tests ignore rules ~41× per crawl** | Severe perf bug: `crawl()` re-evaluates ignore rules for every file via `shouldIncludeFile()`/`applyFilters()`. Major slowdown on large repos. | 2 comments, P2 |
| [#8227](https://github.com/QwenLM/qwen-code/issues/8227) | **Windows: `@-file` reads lose `O_NOFOLLOW`, vacuous dev/ino checks** | Security gap: TOCTOU/symlink protection from #7206 is ineffective on Windows (no `O_NOFOLLOW`, untested dev/ino). | 3 comments, P2, `welcome-pr` |
| [#8267](https://github.com/QwenLM/qwen-code/issues/8267) | **SGR mouse escape sequences leak into input box on startup** | UX regression in v0.21.2: raw `ESC[<...M` mouse events injected into TUI input buffer, breaking typing. | 2 comments, P2 |
| [#8232](https://github.com/QwenLM/qwen-code/issues/8232) | **QQBot truncates sender openid, breaks `@`-mentions** | Integration bug: prompt prefix shows `ABCDEF01…` but model expects full openid for `<@OPENID>` tags. Blocks mention functionality. | 3 comments, P2 |

---

## 4. Key PR Progress (10 Important)

| # | PR | Type | Description |
|---|----|------|-------------|
| [#7206](https://github.com/QwenLM/qwen-code/pull/7206) | **fix(cli): complete image routing across entry points** | Feature/fix | Validates `@`-image refs against workspace boundaries, ignore rules, MIME types, file-identity for TUI, ACP, and non-interactive CLI. |
| [#8077](https://github.com/QwenLM/qwen-code/pull/8077) | **fix(cli): stabilize thinking block height, inline Ctrl+O toggle** | UX | Hides streaming thinking preview by default (constant 1-line header); replaces full-screen overlay with inline expand-all toggle. |
| [#8229](https://github.com/QwenLM/qwen-code/pull/8229) | **feat(web-shell): mutable default mid-turn messages** | Feature | Queued messages enter running turn by default; show “Queued…” until daemon confirms injection. |
| [#7967](https://github.com/QwenLM/qwen-code/pull/7967) | **refactor(core): thread descriptor instead of forking text-read helpers** | Refactor | Pins large-text reads to one inode via descriptor threading; stacked on #7947. |
| [#7908](https://github.com/QwenLM/qwen-code/pull/7908) | **feat(ci): repo-hygiene skill + weekly patrol workflow** | CI/Automation | Adds `repo-hygiene` skill; weekly workflow dispatches 9 parallel subagents to scan/docs/test/code hygiene → consolidated fix PR. |
| [#8141](https://github.com/QwenLM/qwen-code/pull/8141) | **refactor(cli): remove ACP private serve dependencies** | Architecture | Moves ACP/daemon contracts from `packages/cli/src/serve/**` → `packages/cli/src/runtime/**` (memory diagnostics, skill status, IPC contracts). |
| [#7947](https://github.com/QwenLM/qwen-code/pull/7947) | **fix(serve): allow bounded reads of large text files** | Fix | Streaming reads for files >256 KiB when request has finite `limit`; preserves full-snapshot safety gate. |
| [#8215](https://github.com/QwenLM/qwen-code/pull/8215) | **feat(review): Test Plan claim check, base-tree A/B harness, per-hunk probes** | Review tooling | Gives `/review` hands-on verification: test-plan claims, A/B base-tree harness, per-hunk probes. |
| [#8240](https://github.com/QwenLM/qwen-code/pull/8240) | **feat(workflows): bubble workflow agent approvals** | Feature | Surfaces Shell/edit/MCP/info requests from Workflow agents to parent TUI/ACP/stream-json control channel. |
| [#8268](https://github.com/QwenLM/qwen-code/pull/8268) | **fix(cli): filter SGR mouse escape sequences in early input capture** | Fix | Adds `0x3c` (`'<'`) to CSI third-byte check so `ESC[<...` mouse events are classified as terminal responses and filtered. |

---

## 5. Feature Request Trends
From the issue landscape, the strongest demand signals are:

1. **Multi-workspace daemon** — RFC #6378 (31 comments) and tracking issue #8051 show clear push for `qwen serve` as a shared infrastructure service.
2. **Prompt cache preservation** — #6721 highlights that tool-discovery side effects bust cache prefixes; developers want cache-friendly tool resolution.
3. **Anthropic 4.6+/5.x full support** — Cluster of converter fixes (#8039, #8159–#8161) indicates urgent need for seamless Claude 4.6+ / 5.x integration.
4. **Web Shell parity** — Issues #8214 (selection rendering), #8248 (duplicate buttons), #8264 (narrow-table compaction) show active Web Shell polishing.
5. **Autofix maturity** — v0.21.2 round limits + PR #8257 (budget/headroom) + #8121 (unified local/CI skill) signal investment in reliable automated repair.

---

## 6. Developer Pain Points
Recurring frustrations surfacing in the last 24h:

| Pain Point | Evidence |
|------------|----------|
| **Daemon memory misconfiguration** | #8182: each ACP child gets 50% host RAM, undivided — silent OOM risk. |
| **Prompt cache invalidation by tool discovery** | #6721: `setTools()` on deferred tool reveal busts cache prefixes, increasing latency/cost. |
| **Windows file-security gaps** | #8227: symlink/TOCTOU protection from #7206 is a no-op on Windows; untested. |
| **TUI input corruption** | #8267: SGR mouse escapes leak into input buffer on startup (v0.21.2 regression). |
| **Reasoning fidelity loss** | #8258: history consolidation drops all but first `thoughtSignature` per turn. |
| **File-search perf at scale** | #8252: ignore rules re-evaluated ~41× per file per crawl — unusable on large repos. |
| **Sub-agent ↔ user communication gap** | #7835: sub-agents can ask questions but main agent doesn’t forward them; user stuck. |
| **CI flakiness in E2E suites** | #8237, #8244, #8256, #8222, #8076: multiple main-branch E2E failures (acp-cron, MCP, subagents) blocking merges. |

---

*Generated from github.com/QwenLM/qwen-code data as of 2026-08-01. All links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-08-01

---

## 1. Today's Highlights

**CodeWhale v0.9.3 released** — the first release under the new Shannon Labs product identity (legacy `deepseek-tui` npm package deprecated). The release adds native DeepSeek V4 Flash response handling, canonical tool definitions, and a 72-commit integration train. Concurrently, the community is debugging a critical file-edit regression on large CRLF/Chinese-comment files (#5003) and debating the Chinese translation of "Constitution" (宪法 vs 协作准则) in project governance docs (#4949).

---

## 2. Releases

### v0.9.3 — *Released 2026-07-31*
| Change | Impact |
|--------|--------|
| **DeepSeek V4 Flash direct responses** | Native support for the new flash model; no provider shim required |
| **Canonical tool surface** | Single source of truth for tool schemas; reduces context bloat |
| **Headless OAuth (PKCE + manual fallback)** | Enables SSH/container installs without browser |
| **ACP client (protocol-neutral, stdio JSON-RPC)** | External editors/agents can drive CodeWhale sessions |
| **GitHub Copilot as named ACP worker** | Copilot agent mode consumed at runtime, not hard-coded |
| **Semantic TUI graphics persistence** | Jellyfish/ocean scene intent survives restart/resize/theme change |
| **Explicit credential handoff (`auth print-api-key`)** | Provider-scoped, pinned resolution for automation |
| **Benchmark harness hardening** | Deterministic, fail-closed, provenance-exact evaluation |
| **Dependency cleanup** | Removed unmaintained `ttf-parser` → `lopdf` → `pdf-extract` chain (RUSTSEC-2026-0192) |

**Migration note**: `npm i -g codewhale` (lowercase). The legacy `deepseek-tui` package receives no further updates.  
🔗 [Release PR #4993](https://github.com/Hmbown/CodeWhale/pull/4993)

---

## 3. Hot Issues (Top 10 by Signal)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5003](https://github.com/Hmbown/CodeWhale/issues/5003) | **File edit tool fails repeatedly on large CRLF/Chinese-comment C files** | Blocks real-world editing of 700+ line files; model made 15+ failed attempts, 3 `git checkout` rollbacks | 2 comments, PR #5008 opened with fix |
| [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) | **Chinese translation of "Constitution": 宪法 vs 协作准则** | Governance terminology affects contributor onboarding & political sensitivity in CN context | 5 comments, active debate |
| [#5005](https://github.com/Hmbown/CodeWhale/issues/5005) | **Filesystem allowlist for sandbox (Xcode DerivedData, external logs)** | Critical for iOS/macOS devs; current workspace-write sandbox breaks build/debug workflows | 1 comment, clear use case |
| [#5000](https://github.com/Hmbown/CodeWhale/issues/5000) | **Interrupted assistant output → durable session item** | Engine lacks representation for partial assistant text; breaks session continuity after interruption | 1 comment, architectural |
| [#5007](https://github.com/Hmbown/CodeWhale/issues/5007) | **YouTuber used Codex instead of CodeWhale for DeepSeek v4-flash** | Visibility/competitive positioning; community wants official TUI recognition | 5 comments, marketing angle |
| [#4851](https://github.com/Hmbown/CodeWhale/issues/4851) | **Two model-resolution chains — merge behind one owner** | Dual resolution causes drift; `Config::default_model()` vs route-owned overrides | 0 comments, maintainer-tracked |
| [#4599](https://github.com/Hmbown/CodeWhale/issues/4599) | **Single source of truth for per-model facts (context window, max output)** | Scattered constants cause mismatches in routing, tests, docs | 0 comments, tech debt |
| [#4708](https://github.com/Hmbown/CodeWhale/issues/4708) | **Shorten tool descriptions & progressively disclose advanced schemas** | Token bloat dilutes action-selection signal on smaller models | 0 comments, performance |
| [#4706](https://github.com/Hmbown/CodeWhale/issues/4706) | **Reduce default tool surface & unify overlapping task state** | `tasks`/`update_plan`/`work_update` overlap → selection errors | 0 comments, UX reliability |
| [#4705](https://github.com/Hmbown/CodeWhale/issues/4705) | **Minimize tool results, reminders, sub-agent payloads** | Verbose results waste context; model needs only outcome + next actionable fact | 0 comments, context efficiency |

---

## 4. Key PR Progress (Top 10)

| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#5008](https://github.com/Hmbown/CodeWhale/pull/5008) | **OPEN** | **Fix File edit diagnostics & stale-line-number tolerance** (closes #5003) | Actionable errors, CRLF/large-file resilience |
| [#5001](https://github.com/Hmbown/CodeWhale/pull/5001) | **OPEN** | **Measure circled digits/keycaps as 2 columns** (fixes rendering glitch) | CJK terminal correctness |
| [#5006](https://github.com/Hmbown/CodeWhale/pull/5006) | **OPEN** | **Preserve long Windows user PATH in NSIS installer** | Prevents PATH truncation on Windows |
| [#4977](https://github.com/Hmbown/CodeWhale/pull/4977) | **CLOSED** | **AltGr-typed "/" reaches composer (not help)** — fixes BR ABNT2 layout | Windows IME compatibility |
| [#5004](https://github.com/Hmbown/CodeWhale/pull/5004) | **CLOSED** | **Restore v0.9.3 rustdoc gate** | CI documentation quality |
| [#5013](https://github.com/Hmbown/CodeWhale/pull/5013) | **OPEN** | **Bump ratatui 0.30.0 → 0.30.2** | TUI framework updates |
| [#5015](https://github.com/Hmbown/CodeWhale/pull/5015) | **OPEN** | **Bump futures-util 0.3.32 → 0.3.33** | Async runtime fix (`ReadLine`) |
| [#5016](https://github.com/Hmbown/CodeWhale/pull/5016) | **OPEN** | **Bump libc 0.2.186 → 0.2.189** | Emscripten pthreads, new syscalls |
| [#5014](https://github.com/Hmbown/CodeWhale/pull/5014) | **OPEN** | **Bump clap_complete 4.6.7 → 4.6.8** | Shell completion maintenance |
| [#4910](https://github.com/Hmbown/CodeWhale/pull/4910) | **OPEN** | **Docs sanity check / onboarding suit (draft)** | Onboarding UX exploration |

*Dependabot PRs (#5010–#5016) are routine dependency maintenance; merged rapidly after CI passes.*

---

## 5. Feature Request Trends (from Issues)

| Direction | Evidence | Priority |
|-----------|----------|----------|
| **External agent interop (ACP/MCP)** | #4996 (ACP client), #4997 (Copilot as ACP worker), #2535 (historical) | **High** — v0.9.3 includes foundation |
| **Headless/CI-friendly auth** | #4998 (PKCE + manual fallback), #4994 (credential handoff) | **High** — shipped in v0.9.3 |
| **Sandbox filesystem flexibility** | #5005 (allowlist for Xcode DerivedData, logs) | **Medium** — clear developer pain |
| **Session durability & interruption resilience** | #5000 (partial assistant output), #4995 (semantic graphics persistence) | **Medium** — UX polish |
| **Token/context efficiency** | #4705 (minimize payloads), #4708 (shorten tool desc), #4706 (reduce tool surface) | **Medium** — ongoing optimization |
| **Model facts centralization** | #4599 (single source of truth), #4851 (dual resolution merge) | **Medium** — architectural hygiene |
| **Internationalization governance** | #4949 (CN translation debate) | **Low** — community process |

---

## 6. Developer Pain Points (Recurring)

1. **Large-file editing reliability** — CRLF line endings + non-ASCII comments + 100+ line replacements cause cascading tool failures (#5003). Workaround: external Python scripts.
2. **Sandbox too restrictive for native toolchains** — Xcode, Gradle, Cargo put artifacts outside workspace; no allowlist mechanism (#5005).
3. **Session state loss on interruption** — Partial assistant output not persisted; next turn loses context (#5000).
4. **Windows IME/keyboard layout conflicts** — AltGr keys trigger global chords (help overlay) instead of composing characters (#4977, fixed).
5. **Installer clobbers long PATH** — NSIS `ReadRegStr` buffer limit truncates user PATH on Windows (#5006, fix pending).
6. **Token bloat from verbose tool schemas** — Descriptions mix tutorial, policy, defaults; hurts small-model performance (#4705, #4708).
7. **Model metadata fragmentation** — Context window, max output, capabilities scattered across crates/tests (#4599, #4851).

---

## Quick Links
- **Repo**: https://github.com/Hmbown/CodeWhale  
- **Releases**: https://github.com/Hmbown/CodeWhale/releases  
- **Issue tracker**: https://github.com/Hmbown/CodeWhale/issues  
- **Discussions**: https://github.com/Hmbown/CodeWhale/discussions  

*Digest generated from GitHub data as of 2026-08-01 00:00 UTC. Next digest: 2026-08-02.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*