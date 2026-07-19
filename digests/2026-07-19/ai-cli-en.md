# AI CLI Tools Community Digest 2026-07-19

> Generated: 2026-07-19 02:04 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Report — 2026-07-19

---

## 1. Ecosystem Overview

The AI CLI landscape is consolidating around **production hardening** rather than feature expansion. All eight tracked tools shipped stability-focused updates in the last 24 hours — security patches, memory-leak fixes, session-persistence guarantees, and platform-specific regressions dominate. A clear split is emerging: **enterprise-grade CLIs** (Codex, Copilot CLI, OpenCode) prioritize multi-agent reliability, usage transparency, and cross-platform parity; **developer-experience-first CLIs** (Gemini, Kimi, Qwen, Pi, DeepSeek) iterate rapidly on TUX polish, daemon architectures, and protocol compliance (ACP/MCP). No tool is feature-complete; the race has shifted to **operational correctness** — single-writer session stores, bounded retries, and deterministic model routing.

---

## 2. Activity Comparison (2026-07-19)

| Tool | Releases (24h) | Hot Issues Tracked | PRs Merged/Updated | Top Community Signal (👍) | Maturity Indicator |
|------|----------------|-------------------|-------------------|---------------------------|-------------------|
| **OpenAI Codex** | 2 (1 patch, 1 alpha) | 10 | 10 closed | 64 (#34035 usage limits) | High — stable/alpha channels, enterprise bug backlog |
| **Gemini CLI** | 1 (nightly) | 10 | 8 (1 security, 7 bugfix/docs) | 8 (#21409 subagent hangs) | High — nightly cadence, security-first |
| **GitHub Copilot CLI** | 0 | 10 (27 total in tracker) | 0 | 62 (#2785 1M context) | High — issues closing fast, no daily releases |
| **Kimi Code CLI** | 0 | 2 | 2 open | 0 (early) | Emerging — rapid PR response (<24h to issue) |
| **OpenCode** | 0 | 10 | 2 merged, 8 open | 90 (#20695 memory megathread) | High — V2 RC stabilization, deep community engagement |
| **Pi** | 0 | 10 | 6 closed, 3 open | 2 (#6768 Copilot Enterprise) | High — high-volume closure, RPC expansion |
| **Qwen Code** | 3 (stable, preview, nightly) | 10 | 3 closed, 7 open | 9 (#4748 daemon latency) | High — triple-release cadence, daemon focus |
| **DeepSeek TUI** | 0 (v0.9.1 staging) | 10 (50 total) | **14 merged** | 39 (#4032 agent constitution) | High — architectural refactor velocity |

> **Note**: Issue/PR counts reflect *digest-curated* items (top 10 signals), not repo totals. DeepSeek TUI leads raw merge volume; Qwen leads release frequency; OpenCode leads discussion depth.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Demanding | Specific Needs |
|-------------|----------------|----------------|
| **Session Persistence Correctness** | OpenCode, Qwen, Pi, Codex, Copilot | Single-writer guarantees (Qwen #7164), compaction retries (Pi #6647), transcript integrity (OpenCode #20695), session resume CWD (Codex #33950), zombie reap (Copilot #4163) |
| **Multi-Agent/Subagent Reliability** | Codex, Gemini, Copilot, Qwen, DeepSeek | False-success masking (Gemini #22323), config persistence (Codex #33314), model leakage (Qwen #7156), permission leaks (Gemini #22093), constitution compliance (DeepSeek #4032) |
| **Platform-Specific Stability** | Codex, Gemini, Copilot, OpenCode, DeepSeek, Pi | Windows AppHang (Codex #33884), macOS 55GB leak (Codex #33582), Linux ASLR segfault (Copilot #4171), WSL state corruption (OpenCode #37353), macOS File Provider (DeepSeek #4085), tmpdir crowding (Pi #6774) |
| **Usage/Cost Observability** | Codex, Copilot, OpenCode, Pi, Qwen | Permanent limit removal (Codex #34035), persistent token bar (Copilot #2052), cached token display (OpenCode #23111), Copilot pricing accuracy (Pi #6725), extended context footer (Qwen #6824) |
| **Authentication & OAuth Standardization** | Gemini, Copilot, Pi, DeepSeek, Codex | Windows auth loop (Gemini #28348), remote session attach (Copilot #1979), OpenRouter OAuth (Pi #6814), xAI device-code (DeepSeek #4410), session approval regression (Codex #21839) |
| **TUI/Terminal UX Polish** | All 8 tools | Incremental markdown (Codex #34045), resize flicker (Gemini #21924), plan-mode UX (Copilot #4160), reasoning-level switching (Kimi #2501), TUI toggle (OpenCode #36482), ACP lazy-load (Qwen #7182), external editor (Pi #6774), model picker cache (DeepSeek #4550) |
| **Model Routing Flexibility** | Codex, Copilot, OpenCode, Kimi, Qwen, Pi | Per-mode defaults (Copilot #2958), adaptive thinking (OpenCode #37696), reasoning effort (Kimi #2509), daemon model switching (Qwen #4748), scoped-model cleanup (Pi #6804) |
| **Architectural Decomposition** | DeepSeek, OpenCode, Pi, Gemini | God-object splits (DeepSeek #3314), RPC surface (Pi #1762), component evals (Gemini #24353), session hygiene (OpenCode #8535) |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|---------------|-------------|-------------------|
| **OpenAI Codex** | Enterprise reliability, policy control | Paid-tier orgs, Windows/macOS shops | Dual-channel releases (stable/alpha), bundled prompt refreshes, usage-limit governance, heavy Windows/macOS CI |
| **Gemini CLI** | Security & observability, native tool affinity | Security-conscious devs, Linux/Wayland users | Variable-expansion hardening, AST-aware navigation, behavioral evals (76), sandboxed POSIX toolchains |
| **GitHub Copilot CLI** | IDE parity, credit transparency, regulated envs | GitHub ecosystem users, enterprise/finance | 1M context parity, remote attach, plan-mode graduation, ASLR compatibility, winget install |
| **Kimi Code CLI** | TUI workflow velocity, protocol correctness | Power CLI users, ACP integrators | Sub-minute PR turnaround, in-TUI parameter switching, ACP `QuestionNotSupported` semantics, ordered permission rules |
| **OpenCode** | Desktop parity, memory at scale, provider ecosystem | Local-first devs, multi-provider workflows | V2 RC stabilization, memory megathread, `--model free` Zen picker, bidirectional session pagination, teach mode |
| **Pi** | Resilience infrastructure, RPC extensibility, auth hygiene | Tool builders, multi-instance operators | Bounded retries everywhere, shared auth file, RPC session/tree editing, lockfile stability, provider lifecycle hygiene |
| **Qwen Code** | Daemon architecture, session correctness, MCP compat | `qwen serve` adopters, SDK consumers | Triple-release cadence, single-writer lease, native Gemma 4 tokens, ACP plan-mode classification, workspace display names |
| **DeepSeek TUI** | Architectural decomposition, provider abstraction, localization | Cost-sensitive multi-provider users, CJK locales | God-object splits (4 PRs), OpenCode/Ollama/SGLang providers, CLI/TUI/remote parity, Strunk-voice docs, Gherkin E2E |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **DeepSeek TUI**, **Qwen Code

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-07-19 | Source: anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs by Community Attention)

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **skill-creator tooling fixes**<br>[#1298](https://github.com/anthropics/skills/pull/1298) • [#1099](https://github.com/anthropics/skills/pull/1099) • [#1050](https://github.com/anthropics/skills/pull/1050) • [#1323](https://github.com/anthropics/skills/pull/1323) | Core toolchain for creating/validating/optimizing Skills; `run_eval.py`, `run_loop.py`, `improve_description.py` | **Critical pain point**: 0% recall on every evaluation (Issue [#556](https://github.com/anthropics/skills/issues/556), 12 comments), Windows subprocess/encoding failures (Issues [#1061](https://github.com/anthropics/skills/issues/1061), [#1169](https://github.com/anthropics/skills/issues/1169)), trigger detection broken. Multiple concurrent PRs addressing same root causes. | 🟢 Open (active) |
| 2 | **document-typography**<br>[#514](https://github.com/anthropics/skills/pull/514) | Prevents orphan words, widow paragraphs, numbering misalignment in AI-generated documents | Addresses universal quality gap: “users rarely ask for good typography but always notice bad typography.” No competing skill exists. | 🟢 Open |
| 3 | **self-audit**<br>[#1367](https://github.com/anthropics/skills/pull/1367) | Mechanical file verification → four-dimension reasoning audit (correctness, completeness, safety, clarity) before delivery | Universal, stack-agnostic quality gate; v1.3.0 adds severity-ordered reasoning audit. High ambition: “works with any project, any model.” | 🟢 Open |
| 4 | **testing-patterns**<br>[#723](https://github.com/anthropics/skills/pull/723) | Full testing stack: Trophy model, AAA pattern, React Testing Library, contract testing, property-based, mutation testing, CI integration | Comprehensive reference skill; fills gap where no existing skill covers testing philosophy + practice end-to-end. | 🟢 Open |
| 5 | **color-expert**<br>[#1302](https://github.com/anthropics/skills/pull/1302) | Color naming systems (ISCC-NBS, Munsell, XKCD, RAL, CSS), color spaces (OKLCH, OKLAB, CAM16), accessibility, harmonies | Niche but deep; self-contained expertise for any color-related task. No overlap with existing skills. | 🟢 Open |
| 6 | **ODT (OpenDocument Text)**<br>[#486](https://github.com/anthropics/skills/pull/486) | Create, fill, read, convert .odt/.ods via pyxel-mcp; template filling, parse to HTML | Targets ISO-standard open document format; triggers on “ODT”, “LibreOffice”, “open-source document.” | 🟢 Open |
| 7 | **skill-quality-analyzer & skill-security-analyzer**<br>[#83](https://github.com/anthropics/skills/pull/83) | Meta-skills: 5-dimension quality scoring (structure, examples, resources, triggers, maintainability) + security analysis (injection, permissions, secrets) | Addresses marketplace quality control; security analyzer directly responds to trust-boundary concerns (Issue [#492](https://github.com/anthropics/skills/issues/492)). | 🟢 Open |
| 8 | **compact-memory**<br>(Proposed in [Issue #1329](https://github.com/anthropics/skills/issues/1329)) | Symbolic notation for compressing long-running agent state (notes, memory) to reduce context window pressure | 9 comments; independent utility for any long-horizon agent. Author has prior accepted skill. | 🟡 Proposed |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Signal Strength |
|-------|----------|-----------------|
| **Skill distribution security & trust boundaries** | Issue [#492](https://github.com/anthropics/skills/issues/492): 34 comments, 2 👍 — community skills masquerading as official `anthropic/` namespace | 🔴 Critical |
| **Org-wide skill sharing in Claude.ai** | Issue [#228](https://github.com/anthropics/skills/issues/228): 14 comments, 7 👍 — current workflow requires manual file transfer via Slack/Teams | 🟠 High |
| **skill-creator reliability (Windows + 0% recall)** | Issues [#556](https://github.com/anthropics/skills/issues/556) (12 c, 7 👍), [#1169](https://github.com/anthropics/skills/issues/1169) (3 c, 1 👍), [#1061](https://github.com/anthropics/skills/issues/1061) (3 c, 2 👍) — toolchain unusable on Windows, evaluation loop broken | 🟠 High |
| **Duplicate skill management** | Issue [#189](https://github.com/anthropics/skills/issues/189): 6 comments, 9 👍 — `document-skills` & `example-skills` install identical content | 🟡 Medium |
| **MCP / Bedrock integration** | Issues [#16](https://github.com/anthropics/skills/issues/16) (Expose as MCPs), [#29](https://github.com/anthropics/skills/issues/29) (Bedrock support) — 4 comments each | 🟡 Medium |
| **Agent governance & reasoning quality gates** | Issues [#412](https://github.com/anthropics/skills/issues/412) (agent-governance, closed), [#1385](https://github.com/anthropics/skills/issues/1385) (3-gate pipeline: calibration → adversarial review → verification) | 🟡 Medium |
| **Document quality & format coverage** | PRs [#514](https://github.com/anthropics/skills/pull/514) (typography), [#486](https://github.com/anthropics/skills/pull/486) (ODT), [#541](https://github.com/anthropics/skills/pull/541) (docx fix), [#538](https://github.com/anthropics/skills/pull/538) (pdf fix) | 🟢 Growing |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land Soon)

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: run_eval.py fixes** (install eval as real skill, Windows streams, trigger detection, parallel workers) | Directly fixes the #1 community blocker (0% recall); consolidates fixes from [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#1323](https://github.com/anthropics/skills/pull/1323); recent activity (updated 2026-06-23) |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** (mechanical + reasoning quality gate v1.3.0) | Universal applicability; addresses rising demand for output verification (Issue [#1385](https://github.com/anthropics/skills/issues/1385)); recent (created 2026-06-28) |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Complete, self-contained, no dependencies; fills clear niche; recent (2026-06-10) |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Broad utility across all codebases; comprehensive scope; sustained discussion (updated 2026-04-21) |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Solves universal invisible-quality problem; well-scoped; older but detailed (updated 2026-03-13) |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | Meta-skills that unblock marketplace trust; security analyzer directly mitigates Issue [#492](https://github.com/anthropics/skills/issues/492) |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT skill** | Standards-based format support; MCP-backed; active author engagement (updated 2026-04-14) |

---

## 4. Skills Ecosystem Insight

> **The community’s most concentrated demand is fixing the broken skill-creator toolchain (especially Windows support and the 0% recall evaluation loop) so developers can reliably author and validate skills, while simultaneously demanding secure, org-level skill distribution to prevent namespace impersonation and enable team collaboration.**

---

*Report generated from GitHub data (anthropics/skills) as of 2026-07-19. All links point to live GitHub items.*

---

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-19

---

## 1. Today's Highlights

OpenAI shipped **rust-v0.144.6**, a targeted hotfix that refreshes bundled prompts and corrects context windows for GPT-5.6 Sol/Terra/Luna to 272K tokens. Meanwhile, the community is rallying around **#34035** (64 👍) urging OpenAI to make the temporary 5-hour usage-limit removal permanent for paid tiers. On the stability front, a critical Windows AppHang cycle (**#33884**) and macOS 55 GB memory leak (**#33582**) remain open and actively discussed.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **rust-v0.144.6** | Patch | Refreshed bundled instructions for GPT-5.6 Sol, Terra, Luna; corrected context windows to 272,000 tokens ([#33972](https://github.com/openai/codex/pull/33972), [#34009](https://github.com/openai/codex/pull/34009)) |
| **rust-v0.145.0-alpha.24** | Alpha | Pre-release build; no detailed changelog provided |

> Full changelog: [0.144.5 → 0.144.6](https://github.com/openai/codex/compare/rust-v0.144.5...rust-v0.144.6)

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Title | Status | Why It Matters | Community Reaction |
|---|-------|--------|----------------|-------------------|
| [#32925](https://github.com/openai/codex/issues/32925) | Browser/Chrome plugins fail: `Cannot redefine property: process` | **CLOSED** | Broke bundled browser integration on macOS 26.5 (Darwin 25.5) | 56 comments, 33 👍 — high impact on desktop users |
| [#34035](https://github.com/openai/codex/issues/34035) | Make temporary 5-hour usage limit removal permanent | **OPEN** | Policy request affecting Plus/Pro/Business quotas; announced 2026-07-12 | 9 comments, **64 👍** — strongest community signal today |
| [#33884](https://github.com/openai/codex/issues/33884) | Windows: periodic ~15 s AppHang / ~10 s responsive cycle | **OPEN** | Renders app unusable on Win11 (26.715.2305.0) | 9 comments — regression in latest Windows build |
| [#33582](https://github.com/openai/codex/issues/33582) | macOS: ChatGPT/Codex grows to 55 GB, freezes system | **OPEN** | Memory leak on macOS 26.5 (26.707.91948) | 2 comments — severe stability blocker |
| [#24948](https://github.com/openai/codex/issues/24948) | Session logs grow to 700 MB–2 GB from compaction history | **OPEN** | Disk pressure on long-running CLI sessions (0.118.0+) | 13 comments — persistent since May |
| [#32530](https://github.com/openai/codex/issues/32530) | VS Code panel stuck loading on Linux: `net::ERR_FAILED` | **OPEN** | Webview asset load failure on Ubuntu 26.04 / VS Code 1.128 | 8 comments, 12 👍 — blocks Linux IDE workflow |
| [#29499](https://github.com/openai/codex/issues/29499) | Windows: high CPU in WMI Provider Host after startup | **OPEN** | System-wide sluggishness triggered by Codex launch | 6 comments, 6 👍 — affects Win11 26200 |
| [#33314](https://github.com/openai/codex/issues/33314) | Multi-Agent V2: verifiable full-profile application & lifecycle | **OPEN** | Follow-up to #32782; custom agent config not persisting | 5 comments, 8 👍 — power-user automation gap |
| [#21839](https://github.com/openai/codex/issues/21839) | Pre-existing sessions with full access require approvals | **OPEN** | Regression since 26.506; breaks session continuity | 13 comments — long-standing UX friction |
| [#34061](https://github.com/openai/codex/issues/34061) | Insane disk usage from subagents (0.144.6, gpt-5.6) | **OPEN** | Subagent rollouts consuming excessive space | 5 comments — new in 0.144.x line |

---

## 4. Key PR Progress (Last 24h)

| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#34085](https://github.com/openai/codex/pull/34085) | **CLOSED** | Support legacy views for paginated thread history | Restores compatibility for full-history resume clients |
| [#34080](https://github.com/openai/codex/pull/34080) | **CLOSED** | Add audio output to dynamic tools & code mode | Enables audio responses in tool calls & code-mode helpers |
| [#34067](https://github.com/openai/codex/pull/34067) | **CLOSED** | Seed realtime V3 sessions with initial text items | Improves realtime session bootstrap for websocket clients |
| [#34049](https://github.com/openai/codex/pull/34049) | **CLOSED** | Avoid redundant TUI redraws while streaming | Reduces CPU/GPU load during token streaming |
| [#34045](https://github.com/openai/codex/pull/34045) | **CLOSED** | Render streamed Markdown incrementally | Eliminates full-reparse on each delta; smoother TUI |
| [#34047](https://github.com/openai/codex/pull/34047) | **CLOSED** | Avoid resending model for reasoning shortcuts | Cuts redundant model-apply events on effort changes |
| [#34038](https://github.com/openai/codex/pull/34038) | **CLOSED** | Handle compressed rollouts (`.jsonl.zst`) in doctor | Fixes parity check for compressed thread rollouts |
| [#33972](https://github.com/openai/codex/pull/33972) | **CLOSED** | Backport refreshed model metadata to 0.144 | Delivers GPT-5.6 prompt/context fixes to stable |
| [#33950](https://github.com/openai/codex/pull/33950) | **CLOSED** | Remember working directory for resumed sessions (`tui.resume_cwd`) | UX improvement for CLI session resume/fork flows |
| [#33938](https://github.com/openai/codex/pull/33938) | **CLOSED** | Centralize SQLite connection configuration (`SqliteConfig`) | Consistent WAL, busy-timeout, pool settings across DBs |

> Also notable: [#31781](https://github.com/openai/codex/pull/31781) (OPEN) — bounds executor HTTP response buffering to mitigate DoS from untrusted exec-server.

---

## 5. Feature Request Trends

1. **Usage Limit Policy** — #34035 (64 👍) demands permanent removal of 5-hour cap for paid tiers; weekly allowance retained.
2. **Multi-Agent / Custom Agent Maturity** — #33314, #32782 follow-ups: verifiable profile application, lifecycle continuity, subagent config persistence.
3. **Session/Workspace Continuity** — #33950 (resume CWD), #21839 (approval regression), #34076 (desktop loses project registrations).
4. **Localization** — #34078 requests Chinese (Simplified) UI support.
5. **Auto-Resolve Controls** — #34079 seeks setting to disable 60-second auto-resolve on questions.

---

## 6. Developer Pain Points (Recurring Themes)

| Area | Symptoms | Representative Issues |
|------|----------|----------------------|
| **Windows Stability** | AppHang cycles, WMI/Defender CPU spikes, sandbox `apply_patch` failures, DWM handle leaks | #33884, #29499, #33875, #34088, #34097 |
| **macOS Resource Leaks** | 55 GB RAM growth, git polling at 3.6 proc/sec (6–8% CPU idle), permission prompt loops | #33582, #32986, #11027 |
| **Linux IDE Integration** | VS Code webview `ERR_FAILED`, asset loading breaks panel | #32530 |
| **Session Log Bloat** | 700 MB–2 GB rollouts from compaction; subagent disk explosion | #24948, #34061 |
| **Subagent / Multi-Agent Reliability** | MCP process duplication, config not applied, lifecycle gaps | #33946, #33314, #32101 |
| **Rate Limit UX** | Unexpected reset date changes, consumption of stored resets | #30816, #33970 |
| **Mobile / Edge Platforms** | Termux `lock() not supported` blocks `codex exec` on Android | #26277 |

---

*Generated from github.com/openai/codex data as of 2026-07-19. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-19

## 1. Today's Highlights
A security patch addressing a variable-expansion bypass (GHSA-wpqr-6v78-jr5g) leads today’s activity, alongside a nightly release (v0.52.0-nightly). The issue backlog highlights two systemic pain points: subagent lifecycle bugs (false-success reporting, hangs, permission leaks) and Auto Memory quality/reliability gaps. Multiple PRs also target terminal stability (resize flicker, external-editor corruption) and auth-loop fixes.

## 2. Releases
**v0.52.0-nightly.20260719.gacae7124b** — Automated nightly build. [Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260718.gacae7124b...v0.52.0-nightly.20260719.gacae7124b)

## 3. Hot Issues (Top 10 by Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports **GOAL success** after hitting `MAX_TURNS` | Masks real failures; breaks trust in delegation | 11 comments, 👍2, `priority/p1`, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs** indefinitely on simple tasks | Blocks core workflow; workaround = disable subagents | 7 comments, 👍8, `priority/p1` |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell commands show **"Waiting input"** after completion | UI desync; users think command is stuck | 4 comments, 👍3, `priority/p1` |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Zero-dependency OS sandboxing** to leverage model’s bash affinity | Architectural shift: native tool use vs. custom tools | 8 comments, 👍1, `priority/p2`, `effort/large` |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations** (76 behavioral evals) | Quality gate for agent behavior regressions | 7 comments, `priority/p1`, `aiq/eval_infra` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads/search/mapping** impact assessment | Could cut token usage & turns via precise code navigation | 7 comments, 👍1, `priority/p2` |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory **retries low-signal sessions indefinitely** | Wastes cycles; clogs inbox | 5 comments, `priority/p2` |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Model **under-uses custom skills/sub-agents** | Reduces value of extensibility surface | 6 comments, `priority/p2` |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Platform gap for Linux desktop users | 4 comments, 👍1, `agent/browser` |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error when >128 tools** registered | Hard limit blocks tool-rich workspaces | 3 comments, `priority/p2` |

## 4. Key PR Progress

| # | PR | Type | Summary |
|---|----|------|---------|
| [#28403](https://github.com/google-gemini/gemini-cli/pull/28403) | **Security** | Blocks `$VAR` / `${VAR}` expansion bypass (GHSA-wpqr-6v78-jr5g); hardens dedup workflow. `priority/p1` |
| [#28441](https://github.com/google-gemini/gemini-cli/pull/28441) | **Release** | Nightly version bump to 0.52.0-nightly.20260719.gacae7124b |
| [#28438](https://github.com/google-gemini/gemini-cli/pull/28438) | **Bugfix** | Trims whitespace before tool-registry lookup; adds regression test |
| [#28348](https://github.com/google-gemini/gemini-cli/pull/28348) | **Stability** | Fixes `MaxListenersExceededWarning` + infinite retry loop; resolves Windows OAuth auth loop |
| [#28353](https://github.com/google-gemini/gemini-cli/pull/28353) | **Security** | Path-traversal guard in `a2a-server` restore command (defense-in-depth) |
| [#28247](https://github.com/google-gemini/gemini-cli/pull/28247) | **Bugfix** | `ls` ignore globs now match relative paths (supports `**`); uses `picomatch` |
| [#28248](https://github.com/google-gemini/gemini-cli/pull/28248) | **Docs** | Documents MCP `mcpServers` env expansion syntax (`$VAR`, `${VAR:-fallback}`, `%VAR%`) |
| [#24935](https://github.com/google-gemini/gemini-cli/issues/24935) | **Bugfix** | Forces full Ink screen refresh after external editor exit (terminalBuffer mode) |

## 5. Feature Request Trends
1. **Native bash/tool affinity** — Move away from custom tool wrappers toward sandboxed POSIX toolchains (#19873, #22745, #22746).  
2. **Subagent observability** — Shareable trajectories, bug-report context, config overrides (#22598, #21763, #22267).  
3. **Auto Memory hardening** — Deterministic redaction, inbox quarantine, low-signal backoff (#26525, #26523, #26522).  
4. **AST-aware code navigation** — Precision reads, structural search, codebase mapping (#22745, #22746).  
5. **Agent self-awareness** — Accurate CLI flags, hotkeys, self-execution guidance (#21432).  
6. **Terminal UX polish** — Resize flicker, external-editor corruption, flicker-free history (#21924, #24935).

## 6. Developer Pain Points (Recurring)
- **Subagent reliability**: false success (#22323), hangs (#21409), permission leaks (#22093), config ignores (#22267), Wayland breakage (#21983).  
- **Shell/UI desync**: “Waiting input” ghost state (#25166), interactive prompt deadlocks (#22465).  
- **Memory system noise**: infinite retries (#26522), secret leakage risk (#26525), silent patch drops (#26523).  
- **Tooling limits**: 128-tool ceiling (#24246), tmp-script sprawl (#23571), symlink agent discovery (#20079).  
- **Terminal stability**: resize flicker (#21924), editor-exit corruption (#24935), auth loops on Windows (#28348).  
- **Destructive defaults**: model reaches for `git reset --force`, DB mutations without guardrails (#22672).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-19

## Today's Highlights
No new releases in the last 24 hours. The issue tracker shows active triage across 27 items, with several high-engagement feature requests (1M context windows, remote session attach, per-mode model defaults) now closed, while new regressions have surfaced around plan-mode reliability, zombie processes, and a Linux ASLR segfault. Community attention remains focused on session ergonomics, model-configuration flexibility, and usage transparency.

## Releases
*No new releases published in the last 24 hours.*

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#2785](https://github.com/github/copilot-cli/issues/2785)** Support 1M context window for Claude Opus 4.7 (parity with Claude Code) | Brings CLI to feature parity with Claude Code’s flagship 1M-context Opus model; critical for large-repo workloads. | **62 👍** — highest engagement in this batch; closed with implementation. |
| **[#1979](https://github.com/github/copilot-cli/issues/1979)** Remote session support — attach from mobile/browser | Enables cross-device workflow (mobile/browser → running CLI session), matching Claude Code’s remote attach. | **53 👍** — strong demand for untethered development; closed. |
| **[#2958](https://github.com/github/copilot-cli/issues/2958)** Per-mode default model configuration (plan vs. autopilot) | Allows separate model defaults for planning vs. execution; reduces manual switching friction. | **16 👍**, **OPEN** — active design discussion. |
| **[#2052](https://github.com/github/copilot-cli/issues/2052)** Persistent Token/Context Usage Indicator | Always-visible context-window utilization (e.g., “45% used”) eliminates guesswork during long sessions. | **19 👍** — closed; implementation likely in recent builds. |
| **[#1477](https://github.com/github/copilot-cli/issues/1477)** “Continuing autonomously (3 premium requests)” after model completion | Users report spurious premium-request banners after normal completions, suggesting credit-accounting bug. | **18 👍**, **11 comments** — closed but sentiment suggests residual confusion. |
| **[#4163](https://github.com/github/copilot-cli/issues/4163)** CLI does not reap child processes — zombies accumulate | ~2 zombies/min leak under the Copilot PID; long sessions risk PID exhaustion and resource pressure. | **OPEN**, 0 👍 but high severity; reliability blocker for CI/daemonized use. |
| **[#4171](https://github.com/github/copilot-cli/issues/4171)** CLI segfaults (SIGSEGV) on Linux with ASLR disabled (`kernel.randomize_va_space=0`) | Hardened enterprise kernels (common in gov/finance) crash on startup; blocks adoption in regulated envs. | **OPEN**, 0 👍 — critical platform compatibility gap. |
| **[#4160](https://github.com/github/copilot-cli/issues/4160)** Plan mode over-blocks read-only shell commands (keyword false positives) | Heuristic matches substrings (e.g., “rm” in “ls -lrm”) rather than semantics, blocking safe commands. | **OPEN**, 0 👍 — direct usability pain in plan mode. |
| **[#4172](https://github.com/github/copilot-cli/issues/4172)** Exiting plan mode unreliable with new GPT-5.6 models | Session stalls after “Plan saved…” without prompting for implementation; regression with latest models. | **OPEN**, 0 👍 — blocks plan→execute workflow for early GPT-5.6 adopters. |
| **[#3767](https://github.com/github/copilot-cli/issues/3767)** Oversized attachment permanently wedges session (CAPI 5MB native limit, no recovery) | >5MB attachment kills the turn and leaves session unrecoverable; no graceful fallback or cleanup. | **CLOSED**, **11 comments** — fix likely adds size guard + recovery path. |

## Key PR Progress
*No pull requests updated in the last 24 hours.*

## Feature Request Trends
1. **Remote / multi-device session access** — #1979 (53 👍) shows strong appetite for mobile/browser attach to live CLI sessions.
2. **Granular model routing** — #2958 (per-mode defaults), #3891 (sub-agent model override in BYOK), and #2785/#1610 (1M context) indicate a push for *context-aware model selection* rather than global defaults.
3. **Usage & cost observability** — #2052 (persistent token bar), #4174 (ACP token exposure), #4169 (OTEL in `-p` mode) converge on “show me context/credits in real time.”
4. **Plan-mode graduation** — #4160, #4172, #4173, #3569 collectively demand smoother plan→execute transitions, clearer command semantics, and predictable session-state semantics (`/clear` vs `/new`).
5. **Local/credit-free operation** — #4167 (`-max-ai-credits=0` for local models) and #4168 (suppress low-credit warnings) reflect desire to run fully offline or on self-hosted models without credit nagging.
6. **Account & config ergonomics** — #4166 (default user), #1069 (readline keybindings), #4149 (winget install) target daily friction points.

## Developer Pain Points
- **Session stability**: Zombie leaks (#4163), resume hangs on Windows (#4165), attachment-induced wedges (#3767), and ASLR segfaults (#4171) make long-running or enterprise deployments fragile.
- **Plan-mode friction**: False-positive command blocking (#4160), unreliable exit with new models (#4172), stale write gates (#4173), and missing `task_complete` tool (#4161) disrupt the core plan→act loop.
- **Credit/usage opacity**: Spurious premium-request banners (#1477), un-suppressible low-credit warnings (#4168), and missing telemetry in non-interactive modes (#4169) erode trust in cost control.
- **Configuration rigidity**: No per-mode model defaults (#2958), silent sub-agent model drops in BYOK (#3891), and no default-user setting (#4166) force repetitive manual setup.
- **Platform gaps**: Winget install failure (#4149), Linux ASLR incompatibility (#4171), and Windows resume bug (#4165) leave supported-platform coverage uneven.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-19

---

## 1. Today's Highlights
- **Rapid feature response**: PR #2509 was opened within hours of issue #2501, implementing a configurable `/effort` command and quick-switch capability for reasoning levels directly in the TUI — addressing a high-friction workflow pain point.
- **ACP protocol fix**: PR #2507 corrects a semantic bug where `QuestionRequest` was resolved with an empty dict, indistinguishable from user dismissal; now properly signals `QuestionNotSupported`.
- **Permission engine bug surfaced**: Issue #2508 reveals that `deny` rules override `allow` rules regardless of declared order, contradicting the documented "first matching rule wins" behavior — a potential security/configuration risk.

---

## 2. Releases
*No new releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#2501](https://github.com/MoonshotAI/kimi-cli/issues/2501) | **Feature Request**: Quick-switch Reasoning Level / Thinking Effort in TUI main interface | Current flow requires navigating `/model` submenu — breaks flow during long prompts or mid-conversation. User cites VS Code Codex’s inline dropdown as UX benchmark. | 1 comment (author), 0 👍 — early but actionable; PR #2509 already submitted. |
| [#2508](https://github.com/MoonshotAI/kimi-cli/issues/2508) | **Bug**: Permission `deny` overrides `allow` regardless of order | Contradicts documented "first matching rule takes effect" semantics. Affects users relying on ordered allow/deny lists for tool access control (v0.27.0, k3 model, API key auth). | 0 comments, 0 👍 — newly filed, high severity for security-sensitive workflows. |

---

## 4. Key PR Progress

| # | Title | Type | Status | Summary |
|---|-------|------|--------|---------|
| [#2509](https://github.com/MoonshotAI/kimi-cli/pull/2509) | `feat(kimi): configurable thinking effort and /effort command` | Feature | Open | Implements `/effort <level>` slash command and TUI keybinding for instant reasoning-level switching. Builds on #318 (reasoning_effort support) and #2499 (legacy passthrough). Directly resolves #2501. |
| [#2507](https://github.com/MoonshotAI/kimi-cli/pull/2507) | `fix(acp): signal QuestionNotSupported instead of resolving empty answers` | Bugfix | Open | Fixes ACP server mode: `QuestionRequest` now returns `QuestionNotSupported` instead of empty dict `{}`, allowing the model to distinguish user dismissal from unsupported question types. Resolves #2495. |

---

## 5. Feature Request Trends
From current and recent issues, the strongest signals are:
- **In-TUI workflow acceleration**: Users want model/parameter adjustments (reasoning level, model selection) without leaving the main chat pane — mirroring IDE-integrated assistants.
- **Declarative, predictable configuration**: The permission-rules bug (#2508) highlights demand for deterministic, documented behavior in security-critical settings (tool allow/deny lists).
- **ACP protocol compliance**: Fixes like #2507 suggest growing adoption of ACP (Agent Client Protocol) for editor/IDE integrations — correctness matters for ecosystem trust.

---

## 6. Developer Pain Points
| Pain Point | Evidence | Frequency Signal |
|------------|----------|------------------|
| **Context-switching friction** | #2501: “非常打断心流” (severely breaks flow) when changing reasoning level mid-task | High — direct PR response within hours |
| **Undocumented/incorrect rule semantics** | #2508: `deny` overrides `allow` ignoring declared order, contrary to docs | Emerging — single report but high impact |
| **ACP integration roughness** | #2495 → #2507: Empty dict resolution ambiguous for model | Recurring — protocol-level fix needed |

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` (issues/PRs updated 2026-07-18 to 2026-07-19). Digest generated 2026-07-19.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-19

## Today's Highlights
The community is heavily focused on stabilizing the V2 release candidate: multiple PRs landed today fixing malformed tool-input recovery, screenshot glyph rendering, and adaptive thinking for Kimi/Moonshot models. Meanwhile, the long-running **Memory Megathread (#20695)** remains the top discussion (113 comments), signaling that memory pressure is the single biggest operational concern. Several critical V2 regressions—default agent ignored, TUI spacebar toggle broken, deep-link handling—are being patched in rapid succession.

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **[#20695](https://github.com/anomalyco/opencode/issues/20695)** | **Memory Megathread** | Central tracking for scattered OOM/heap reports; team explicitly requests heap snapshots, not LLM guesses. | 113 comments, 90 👍 — highest engagement in repo history. |
| **[#6680](https://github.com/anomalyco/opencode/issues/6680)** | View archived sessions on desktop | UX gap: users cannot browse history without CLI workarounds. | 39 comments, 24 👍 — persistent desktop parity request. |
| **[#30443](https://github.com/anomalyco/opencode/issues/30443)** | Infinite "Session compacted" loop (DeepSeek, MiMo, MiniMax) | App becomes unusable on fresh sessions; blocks multiple model families. | 4 comments, but “completely broken” language indicates severity. |
| **[#32548](https://github.com/anomalyco/opencode/issues/32548)** | Step-cap wrap-up sends assistant prefill → Anthropic 400 | Breaks Claude thinking models at step limit; core agent loop flaw. | 4 comments; duplicated in #37685 (closed today). |
| **[#37353](https://github.com/anomalyco/opencode/issues/37353)** | Desktop white screens & send failures (corrupted global state, WSL) | Data-integrity issue across dual databases (Windows + WSL); session loss risk. | 2 comments, but “dangling server refs” suggests systemic state bug. |
| **[#37671](https://github.com/anomalyco/opencode/issues/37671)** | V2 CLI loads OpenTUI for headless commands, leaks 13 MB temp files per call | `opencode --version`/`api` spawn native lib unnecessarily; disk churn on CI. | 2 comments; clear performance regression. |
| **[#37225](https://github.com/anomalyco/opencode/issues/37225)** | `default_agent` ignored on V2 startup (picks Build) | Config contract broken; affects both built-in and custom agents. | 2 comments; config fidelity issue. |
| **[#18428](https://github.com/anomalyco/opencode/issues/18428)** | Ollama local models 60–90 s vs 3 s direct API | Massive latency penalty through OpenCode stack; blocks local-first workflows. | 5 comments, long-standing (since Mar). |
| **[#37680](https://github.com/anomalyco/opencode/issues/37680)** | Rate-limited on OpenCode Zen despite paid sub + $25 balance | Billing/support trust issue; no contact channel reported. | 2 comments; echoes #32482 “scam” allegation (closed). |
| **[#37658](https://github.com/anomalyco/opencode/issues/37658)** | `designPlaceholder` hardcodes English, bypasses i18n keys | Chinese placeholder exists in `zh.ts` but never shown in new layout. | 2 comments; regression in i18n rollout. |

---

## Key PR Progress (10 Notable Merges/Open PRs)

| # | PR | Type | Summary |
|---|----|------|---------|
| **[#37698](https://github.com/anomalyco/opencode/pull/37698)** | `fix(core)` | **Merged** — Safely recovers malformed JSON tool calls: records as failed, preserves valid siblings, keeps Step truthfully failed, allows one repair step. |
| **[#37691](https://github.com/anomalyco/opencode/pull/37691)** | `fix(simulation)` | **Merged** — Registers Commit Mono symbols/braille for PNG screenshots; eliminates missing-glyph boxes in V2 sim output. |
| **[#37696](https://github.com/anomalyco/opencode/pull/37696)** | `feat(provider)` | **Open** — Implements Anthropic adaptive thinking (`thinking.type="adaptive"`) for Kimi/Moonshot family; enables dynamic budget. |
| **[#23111](https://github.com/anomalyco/opencode/pull/23111)** | `feat(opencode)` | **Open** — Shows `(N cached)` inline next to token counts in sidebar, prompt footer, subagent footer when `cache.read+write > 0`. |
| **[#8535](https://github.com/anomalyco/opencode/pull/8535)** | `feat(session)` | **Open** — Bidirectional cursor pagination for session messages across server, app, TUI, experimental HTTP API; closes #6548, #28257, #30587. |
| **[#7156](https://github.com/anomalyco/opencode/pull/7156)** | `feat` | **Open** — Respects agent’s configured model variant in TUI/Desktop when current model supports it; preserves selected/custom variants. |
| **[#9545](https://github.com/anomalyco/opencode/pull/9545)** | `feat(usage)` | **Open** — Unified OAuth usage tracking for four providers; supersedes #6905, #7837; includes auth refresh. |
| **[#35223](https://github.com/anomalyco/opencode/pull/35223)** | `fix(app)` | **Open** — Handles `opencode://` deep links (`open-project`, `new-session`) in redesigned desktop layout. |
| **[#37689](https://github.com/anomalyco/opencode/pull/37689)** | `fix(core)` | **Merged** — Restores V1 behavior: relative paths resolving outside Location route through `external_directory` auth instead of pre-rejection. |
| **[#34794](https://github.com/anomalyco/opencode/pull/34794)** | `feat(provider)` | **Open** — Adds `--model free` to pick a random zero-cost OpenCode Zen model per invocation (TUI + `opencode run`). |

---

## Feature Request Trends (From All Issues)

1. **Desktop parity & polish** — Archived sessions (#6680), integrated browser (#26772), deep links (#35223), brightness/contrast (#37428), native menu i18n (#37642).
2. **Model ecosystem expansion** — LM Studio auto-refresh (#2047), agentrouter.org provider (#2784), `--model free` (#34794), Kimi adaptive thinking (#37696).
3. **Session hygiene** — Cursor pagination (#8535), full transcript export (#32894), corrupted state recovery (#37353), moved-project resilience (#35427).
4. **Teaching/learning workflows** — “Teach Mode” proposal (#36521, revival of #12675).
5. **MCP/Tooling UX** — Toggle MCPs via spacebar (#36482), hide unavailable tool guidance (#32905), plugin `@latest` cache refresh (#35777, #37688).

---

## Developer Pain Points (Recurring Frustrations)

| Area | Symptom | Frequency |
|------|---------|-----------|
| **Memory/Performance** | OOM crashes, heap growth, 13 MB temp leaks per headless call, Ollama 20× latency | High (megathread + multiple perf bugs) |
| **V2 Regressions** | `default_agent` ignored, TUI toggle broken, deep links broken, simulation glyphs missing, config limit override ignored | High (5+ distinct regressions in last week) |
| **Anthropic/Claude Compatibility** | Step-cap prefill 400, thinking-enabled rejection, adaptive thinking gaps | Medium (3+ issues/PRs) |
| **State Corruption** | White screens, dangling refs, stale session IDs, moved-project 500s, character corruption on export | Medium (data-loss adjacent) |
| **i18n Gaps** | Hardcoded English placeholders, native menus untranslated, placeholder keys unused | Medium (3 reports in 24h) |
| **Support/Trust** | Zen rate limits despite payment, no contact channel, “scam” allegations | Low volume, high reputational risk |

---

*Digest generated from GitHub data (issues/PRs updated 2026-07-18 → 2026-07-19). Links point to live GitHub items.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-19

## Today's Highlights
The Pi team closed a high volume of issues and PRs yesterday, focusing on reliability hardening (retry caps, compaction retries, stream termination), UX polish (external editor temp-dir fix, extended-context footer accuracy, scoped-model cleanup), and new provider integrations (Anthropic Vertex, OpenRouter OAuth). Several long-standing pain points around model switching, cost accounting, and lockfile stability received fixes.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues

| # | Title | Status | Why It Matters |
|---|-------|--------|----------------|
| [#6303](https://github.com/earendil-works/pi/issues/6303) | Exponential retry backoff has no cap despite `retry.provider.maxRetryDelayMs` existing | **Closed** (8 comments, 1👍) | Unbounded exponential backoff could wait ~4 minutes on attempt 7; fix adds the missing `maxDelayMs` plumbing. |
| [#6725](https://github.com/earendil-works/pi/issues/6725) | Copilot pricing for GPT-5.6 models is incorrect | **Open / In Progress** (6 comments) | Cache-write costs omitted from Copilot cost calc, causing ~30% under-reporting; affects billing transparency. |
| [#6167](https://github.com/earendil-works/pi/issues/6167) | `transformMessages` + `isSameModel === false` thinking block normalization interacts poorly with `requiresReasoningContentOnAssistantMessages` | **Open** (4 comments) | Model-switching corrupts thinking blocks, breaking reasoning continuity for users who rotate models mid-session. |
| [#6774](https://github.com/earendil-works/pi/issues/6774) | Ctrl+G external editor slow to launch when `os.tmpdir()` is crowded | **Closed** (4 comments) | Temp files now written to a private `mkdtemp` subdirectory, eliminating stat storms on noisy `/tmp`. |
| [#6792](https://github.com/earendil-works/pi/issues/6792) | High CPU usage when writing/editing big 500+ line files | **Closed** (3 comments, profile attached) | 100% CPU on 1000+ line MD files; fix targets redundant re-renders in the editor pipeline. |
| [#6675](https://github.com/earendil-works/pi/issues/6675) | `pi update --self` gives up after one transient latest-version connection failure | **Open** (3 comments) | Self-update lacks retry/backoff; flaky networks block upgrades entirely. |
| [#6768](https://github.com/earendil-works/pi/issues/6768) | Compaction using Copilot Enterprise not possible | **Closed** (3 comments, 2👍) | Enterprise users hit 421/400 errors on summarization; unblocked by provider-specific header handling. |
| [#6808](https://github.com/earendil-works/pi/issues/6808) | openai-responses waits for HTTP EOF after `response.completed` | **Closed** (2 comments) | 4+ second tail latency per response; stream now terminates at terminal event instead of waiting for EOF. |
| [#6647](https://github.com/earendil-works/pi/issues/6647) | Compaction fails on a single transient stream drop (no retry) | **Open / In Progress** (2 comments) | Compaction summarization had zero retries; PR #6775 adds retry logic matching assistant-turn behavior. |
| [#6814](https://github.com/earendil-works/pi/issues/6814) | Add native OpenRouter OAuth support | **Closed** (1 comment, *filed today*) | Browser-based OAuth flow for OpenRouter eliminates manual API-key copy-paste; high community demand. |

---

## Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#6807](https://github.com/earendil-works/pi/pull/6807) | fix(ai): stop Responses streams at terminal event | **Closed** | Cuts 4 s tail latency by treating `response.completed` as stream end; omits `[DONE]` wait. |
| [#6813](https://github.com/earendil-works/pi/pull/6813) | feat(coding-agent): support shared auth file | **Closed** | New `PI_CODING_AGENT_AUTH_FILE` env var lets multiple Pi instances share a single credential store. |
| [#6812](https://github.com/earendil-works/pi/pull/6812) | Remove `./` from pi-ai bin path so lockfiles stop flip-flopping | **Closed** | One-line `package.json` fix stops `package-lock.json` churn between `./dist/cli.js` and `dist/cli.js`. |
| [#6775](https://github.com/earendil-works/pi/pull/6775) | retry on compaction/branch summarization retryable failures | **Open** | Adds exponential backoff + retry to compaction summarization (fixes #6647); asks if UI toast needed. |
| [#1762](https://github.com/earendil-works/pi/pull/1762) | Expose session and tree browsing/editing to RPC protocol | **Closed** | Reopens #1628; adds session discovery, tree navigation, and message editing to RPC for external tooling. |
| [#5262](https://github.com/earendil-works/pi/pull/5262) | feat(ai): add Anthropic Vertex provider | **Open** | Built-in `anthropic-vertex` provider for Claude on GCP Vertex AI; reuses Anthropic streaming stack. |
| [#6804](https://github.com/earendil-works/pi/pull/6804) | fix(coding-agent): allow removing scoped models whose provider/model no longer resolves | **Closed** | Scoped-models selector now shows orphaned entries so users can delete them after `/logout`. |
| [#6802](https://github.com/earendil-works/pi/pull/6802) | fix(coding-agent): show actual extended context size in footer indicator | **Closed** | Footer now reads `model.extendedContextWindow` (e.g., 1,050,000 for GPT-5.6) instead of hard-coded `[1M]`. |
| [#6795](https://github.com/earendil-works/pi/pull/6795) | Add exit cmd | **Closed** | Adds `/exit` command to cleanly quit the TUI; previously only `Ctrl+C` worked. |

---

## Feature Request Trends
1. **OAuth / zero-copy auth flows** — OpenRouter (#6814), shared auth file (#6813), provider-scoped env in `auth.json` (#6799).
2. **Resilient retry everywhere** — Self-update (#6675), compaction (#6647, #6775), API backoff caps (#6303).
3. **Model/provider lifecycle hygiene** — Hide/disable providers (#6803), clean scoped-model removal after logout (#6806, #6804), accurate context-window display (#6802).
4. **RPC surface expansion** — Session/tree browsing (#1762) for IDE extensions and automation.
5. **New first-party providers** — Anthropic Vertex (#5262), Copilot Enterprise fixes (#6768).

---

## Developer Pain Points
- **Retry/timeout gaps**: Self-update, compaction, and API backoff all lacked retries or caps, causing silent failures on flaky networks.
- **Model-switching fragility**: Thinking-block normalization, duplicate `tool_call_id`s (#6796), and cost miscalculation (#6725) when rotating models.
- **Temp-file hygiene**: External editor (`Ctrl+G`) and extension editor wrote to shared `os.tmpdir()`, causing slowdowns on busy systems (#6774).
- **Lockfile noise**: `./` prefix in `pi-ai` bin path caused perpetual `package-lock.json` flip-flop (#6811, #6812).
- **Large-file performance**: 100% CPU on 1000+ line edits (#6792) and slow startup from model-catalogue refresh (#6794).
- **Enterprise/SSO friction**: Copilot Enterprise compaction broken (#6768), no OAuth for OpenRouter (#6814), scoped-model cleanup after logout (#6806).

---

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-19

---

## 1. Today's Highlights

Three releases shipped in the last 24 hours: **v0.19.12**, **v0.19.12-preview.0**, and nightly **v0.19.12-nightly.20260719**. The headline feature is daemon cold-start tracing (#6907) — a step toward closing the 2.5 s vs 0.7 s gap between daemon and CLI first-session latency. Two P1 bugs dominate attention: subagents silently mutating the main session’s model (#7156) and concurrent writers forking transcript history (#7164). A memory-leak warning (`MaxListenersExceededWarning`) and MCP tool-name normalization for strict providers are also actively being fixed.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.19.12** | Stable | • `feat(daemon)`: Trace cold first-session startup ([#6907](https://github.com/QwenLM/qwen-code/pull/6907))<br>• `fix(serve)`: Harden multi-workspace ownership guards |
| **v0.19.12-preview.0** | Preview | Same changes as stable, released earlier for validation |
| **v0.19.12-nightly.20260719** | Nightly | • `chore(vscode-ide-companion)`: Sync third-party notices and guard against drift ([#7161](https://github.com/QwenLM/qwen-code/pull/7161)) |

> **No breaking changes** in any of the three releases.

---

## 3. Hot Issues (10 Noteworthy)

| # | Title | Priority / Labels | Why It Matters | Community Signal |
|---|-------|-------------------|----------------|------------------|
| [#4748](https://github.com/QwenLM/qwen-code/issues/4748) | Optimize daemon cold start & `qwen serve` fast-path latency | P1, performance, daemon | Daemon boot + first session ~2.5 s vs CLI ~0.7 s; blocking adoption for `qwen serve` users | 9 comments, open since Jun 3 |
| [#7156](https://github.com/QwenLM/qwen-code/issues/7156) | Subagent mutates main session model — context overflow recurrence | P1, core, session-management, model-switching | Same fatal 400 error as #7119 but via different code path; model silently switches during subagent run | 9 comments, opened Jul 18 |
| [#7164](https://github.com/QwenLM/qwen-code/issues/7164) | Concurrent session writers fork transcript history | P1, core, session-management | Two processes restore same session → divergent parent chains → data loss on restart | 1 comment, opened Jul 18 |
| [#7181](https://github.com/QwenLM/qwen-code/issues/7181) | `/goal` loop blocks user input — cannot clear/replace/interrupt | P1, cli, interactive, hooks-events | User input queued indefinitely; only Ctrl+C escapes | 1 comment, in-progress |
| [#7159](https://github.com/QwenLM/qwen-code/issues/7159) | `MaxListenersExceededWarning`: EventEmitter memory leak (11 resize listeners) | P2, performance, memory-usage, rendering | Crash after several turns; Node.js warns about leaked listeners on `process.stdout` | 3 comments, needs info |
| [#7147](https://github.com/QwenLM/qwen-code/issues/7147) | MCP server never gets tool/resource listing | P2, tools, mcp, welcome-pr | Fastmail MCP auth works but tool discovery times out; blocks MCP integration | 3 comments |
| [#7148](https://github.com/QwenLM/qwen-code/issues/7148) | Gemma 4 models halt due to non-native tool-call examples in system prompt | P2, core, model-performance | Generic `[tool_call:...]` examples override Gemma 4’s native `<|tool_call|>` tokens | 1 comment, fixed in #7177 |
| [#6949](https://github.com/QwenLM/qwen-code/issues/6949) | ACP Plan mode blocks unclassified read-only shell commands | P2, interactive, shell, coding-plan | Trusted read-only CLIs (e.g., `python3` metadata query) rejected; can bypass exit confirmation | 1 comment, in-review |
| [#7192](https://github.com/QwenLM/qwen-code/issues/7192) | `source_test` metadata updates dropped by source config validation | P2, core, mcp | Timestamp format mismatch (ISO string vs ms) breaks desktop save path | 1 comment, opened Jul 19 |
| [#6824](https://github.com/QwenLM/qwen-code/issues/6824) | Feature Request: Keyword search for conversation history | P2, cli, session-management, vscode | No way to locate past conversations; high user demand | 3 comments |

---

## 4. Key PR Progress (10 Important)

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#7166](https://github.com/QwenLM/qwen-code/pull/7166) | `fix(core): Enforce single-writer session persistence` | Open | Solves #7164: process-level lease + byte-length fencing for JSONL appends |
| [#7172](https://github.com/QwenLM/qwen-code/pull/7172) | `feat(core): Route Plan-mode shell commands by safety` | Open | Addresses #6949: classify read-only vs mutating commands, allow safe passthrough |
| [#7177](https://github.com/QwenLM/qwen-code/pull/7177) | `fix(core): apply native tool calling schema for gemma 4` | **Closed** | Fixes #7148: injects Gemma 4’s native `<|tool_call|>` tokens instead of generic XML |
| [#7186](https://github.com/QwenLM/qwen-code/pull/7186) | `fix(cli): share one process.stdout resize listener in useTerminalSize` | Open | Fixes #7159: single module-level listener + subscriber set eliminates leak |
| [#7182](https://github.com/QwenLM/qwen-code/pull/7182) | `perf(cli): Defer TUI runtime from ACP startup` | **Closed** | Cuts ACP cold path by lazy-loading TUI; part of #4748 latency work |
| [#6976](https://github.com/QwenLM/qwen-code/pull/6976) | `fix(mcp): normalize tool names for strict providers` | **Closed** | Fixes #6970: dots/long names → deterministic safe names for OpenAI/Anthropic compat |
| [#7153](https://github.com/QwenLM/qwen-code/pull/7153) | `feat(daemon): deliver scheduled results to explicit channel targets` | Open | Implements #7152: durable scheduled tasks can push results to observed chats |
| [#7165](https://github.com/QwenLM/qwen-code/pull/7165) | `feat(autofix): label-driven takeover and release` | Open | Adds `autofix/takeover` label to summon bot onto any PR; fixes forced-dispatch no-op bug |
| [#7193](https://github.com/QwenLM/qwen-code/pull/7193) | `fix(desktop): align source_test metadata contract` | Open | Fixes #7192: ms timestamps + shared connection-status vocabulary |
| [#7162](https://github.com/QwenLM/qwen-code/pull/7162) | `fix(desktop): validate list_sessions pagination params` | Open | Hardens `limit`/`offset` as integers; prevents malformed requests |

---

## 5. Feature Request Trends

| Direction | Representative Issues | Community Pull |
|-----------|----------------------|----------------|
| **Inline model switching** — `/model <id> <prompt>` in one line | [#5967](https://github.com/QwenLM/qwen-code/issues/5967) (closed) | 5 comments, high relevance for multi-model workflows |
| **Conversation history search** — keyword/filter across sessions | [#6824](https://github.com/QwenLM/qwen-code/issues/6824) | 3 comments, requested for both CLI & VS Code |
| **Daemon SDK session import/export** — workspace-scoped JSONL import | [#7178](https://github.com/QwenLM/qwen-code/issues/7178) | 2 comments, enables remote SDK session portability |
| **Custom workspace display names** in SDK | [#7170](https://github.com/QwenLM/qwen-code/issues/7170) | 2 comments, improves SDK consumer UX |
| **Auto output language** — follow user’s input language instead of fixed `output-language.md` | [#6943](https://github.com/QwenLM/qwen-code/issues/6943) (closed) | 2 comments, addresses i18n rigidity |
| **Channel active memory recall** for bot prompts | [#6360](https://github.com/QwenLM/qwen-code/issues/6360) (closed) | 1 comment, deterministic recall per channel/chat/thread |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Daemon cold-start latency** — 2.5 s vs 0.7 s CLI; blocks `qwen serve` adoption (#4748).
2. **Session/model leakage across subagents** — main session’s model silently overwritten, causing context overflow (#7156, recurrence of #7119).
3. **Transcript corruption from concurrent writers** — no single-writer guarantee; divergent history on restart (#7164).
4. **MCP tool-name incompatibility** — dots/long names rejected by OpenAI/Anthropic-compatible providers (#6970, fixed in #6976).
5. **EventEmitter memory leaks** — resize listeners accumulate on `process.stdout` (#7159, fixed in #7186).
6. **`/goal` loop un-interruptibility** — user input queued indefinitely; only Ctrl+C works (#7181).
7. **Plan-mode over-blocking** — read-only shell commands rejected due to opaque classification (#6949).
8. **Stream-JSON mode drops startup warnings** — silent failures in non-interactive automation (#7158).
9. **Gemma 4 execution halts** — generic tool-call examples poison native token format (#7148, fixed in #7177).
10. **No conversation history search** — power users cannot retrieve past context (#6824).

---

*Generated from github.com/QwenLM/qwen-code data as of 2026-07-19. All links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-19

## Today's Highlights
The project shipped a barrage of v0.9.1 release-blocker fixes and infrastructure PRs today — 14 PRs merged in 24 hours — covering xAI device-code OAuth restoration, config default-model leakage, TUI rendering regressions, CLI parity, and public-surface documentation overhaul. Concurrently, the community surfaced a high-signal bug (#4032) where CodeWhale ignores user-provided scripts in favor of throwaway temp files, and a macOS File Provider regression (#4085) blocking Dropbox CloudStorage access.

---

## Releases
*No new releases in the last 24 hours.* The v0.9.1 cut is being staged through stacked PRs; expect a tag once the public-surface and auth-lane trains land.

---

## Hot Issues (Top 10 by Signal)

| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#4032](https://github.com/Hmbown/CodeWhale/issues/4032) | **CodeWhale not following the constitution** — ignores user-provided scripts, writes temp scripts instead | Core agent behavior violation; undermines trust in multi-step workflows | 39 comments, active debate on whether this is prompt drift or tool-routing bug |
| [#4410](https://github.com/Hmbown/CodeWhale/issues/4410) | **Restore xAI device-code OAuth login** — hard-coded wrong endpoint (`/oauth2/device/code` vs `/oauth2/device`) | Release blocker for Grok users; auth completely broken | 6 comments, PR #4538/#4546 merged today fixing endpoint + schema flattening |
| [#4085](https://github.com/Hmbown/CodeWhale/issues/4085) | **Cannot read/write `~/Library/CloudStorage/Dropbox/`** (macOS File Provider) | Blocks macOS Dropbox users; not a sandbox issue — binary is ad-hoc signed | 3 comments, needs File Provider entitlement or path-resolution fix |
| [#3192](https://github.com/Hmbown/CodeWhale/issues/3192) | **Register in agentclientprotocol/registry** for Zed installability | Distribution unlock; Zed is a key integration target | 13 comments, maintainer acknowledgment, tracking upstream registry PR |
| [#1186](https://github.com/Hmbown/CodeWhale/issues/1186) | **Typed persistent permission rules** for execpolicy (tool/command/path/decision) | Security/UX gap: users want durable `allow/deny/ask` rules beyond session | 12 comments, design discussion on rule precedence and storage |
| [#1481](https://github.com/Hmbown/CodeWhale/issues/1481) | **Support OpenCode Go/Zen** as DeepSeek-V4 provider | Cost-sensitive users want cheaper V4 access via OpenCode | 10 comments, 👍1, awaiting provider abstraction work |
| [#998](https://github.com/Hmbown/CodeWhale/issues/998) | **Text truncation in UI** — needs hover tooltip for full content | Polish issue affecting readability in sidebar/history | 8 comments, 👍1, low-effort UX win |
| [#4022](https://github.com/Hmbown/CodeWhale/issues/4022) | **Define CLI/TUI parity for subagent & runtime control** | Architectural: TUI sidebar has controls that CLI/remote can't reach | 4 comments, maintainer-owned, blocks cloud/remote roadmap |
| [#3314](https://github.com/Hmbown/CodeWhale/issues/3314) | **Extract `App` god object** (252 fields, 236 methods, 4.4k lines) | Technical debt slowing all TUI feature work; refactor tracked for v0.9.2 | 3 comments, incremental splits underway (#3308, #3310, #3313) |
| [#1675](https://github.com/Hmbown/CodeWhale/issues/1675) | **Chinese garbled characters in agent real-time output** | i18n blocker for CJK users; appears in streaming rendering path | 4 comments, needs encoding/renderer audit |

---

## Key PR Progress (Top 10 Merged Today)

| # | Title | Type | Impact |
|---|-------|------|--------|
| [#4538](https://github.com/Hmbown/CodeWhale/pull/4538) | `fix(auth): report runtime-effective xAI credential routes in diagnostics` | **Bugfix** | Unblocks xAI auth debugging; shows actual resolved route |
| [#4546](https://github.com/Hmbown/CodeWhale/pull/4546) | `fix(xai): flatten root oneOf tool schemas rejected with 400` | **Bugfix** | Fixes Grok-4.5 tool-calling 400 errors; release blocker |
| [#4544](https://github.com/Hmbown/CodeWhale/pull/4544) | `fix(doctor): keep diagnostic commands read-only end to end` | **Hardening** | Guarantees `doctor`/`setup --status` never mutate state |
| [#4554](https://github.com/Hmbown/CodeWhale/pull/4554) | `fix(config): stop root DeepSeek default leaking onto vendor-locked routes` | **Bugfix** | Stops xAI sessions booting as `deepseek-v4-pro` (model-not-found) |
| [#4550](https://github.com/Hmbown/CodeWhale/pull/4550) | `perf(tui): memoize merged provider catalog snapshot for model picker` | **Perf** | `/model` open latency 3.1s → cached; UX noticeable |
| [#4551](https://github.com/Hmbown/CodeWhale/pull/4551) | `fix(tui): insert boundary between Responses reasoning summary parts` | **Bugfix** | Fixes run-together thinking text in streaming output |
| [#4552](https://github.com/Hmbown/CodeWhale/pull/4552) | `fix(tui): drop redundant [open] suffix on todo rows` | **UX** | Recovers label width in Work sidebar |
| [#4549](https://github.com/Hmbown/CodeWhale/pull/4549) | `fix(tui): show status feedback and update compaction budget on Ctrl+T` | **UX** | Adds visible feedback for reasoning-effort cycling |
| [#4540](https://github.com/Hmbown/CodeWhale/pull/4540) / [#4545](https://github.com/Hmbown/CodeWhale/pull/4545) | `0.9.1 public surface PR1/PR2: honesty + cleanup → Strunk voice + version truth` | **Docs** | Rewrites README hero, drops unreleased web links, pins v0.9.1 |
| [#4553](https://github.com/Hmbown/CodeWhale/pull/4553) | `feat(work-graph): core model, reducer, validation` | **Feature** | WG1 of work-graph cutover: authoritative session ledger (no integration yet) |

---

## Feature Request Trends (from all 50 issues)

1. **Provider abstraction & cost optimization** — OpenCode, Ollama, SGLang, vLLM, Kimi Code, nVidia NIM; users want "bring your own endpoint" without code changes (#1481, #1482, #3927, #4555–#4557).
2. **Durable permission/execution policy** — Typed, persistent `allow/deny/ask` rules scoped by tool, command prefix, path (#1186, #2117).
3. **CLI↔TUI↔Remote parity** — Subagent control, workflow triggers, runtime introspection must work outside TUI (#4022, #2974, #3927).
4. **Localization & accessibility** — Website parity for JA/VI/KO/ES/PT-BR (#3091, #3093), CJK rendering fixes (#1675, #1564).
5. **Workflow/runtime tooling** — Model-facing `workflow` tool, Gherkin E2E for tool lifecycle, WhaleFlow wiring (#2886, #2974).
6. **Architectural decomposition** — God-object splits (`App`, `mcp.rs`, `runtime_threads.rs`, `history.rs`) tracked as v0.9.2 milestones (#3308, #3310, #3313, #3314).

---

## Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Agent ignores user scripts, writes throwaway temps** | #4032 (39 comments) — "always finds a justification" | High |
| **xAI auth broken (wrong endpoint + schema rejection)** | #4410 + #4546 + #4538 — blocked Grok users | Release-blocker |
| **macOS File Provider (Dropbox/iCloud) unreadable** | #4085 — "not a sandbox issue, binary ad-hoc signed" | Platform-specific |
| **No durable permission rules — re-approve every session** | #1186, #2117 — "skills must be loaded individually" | High |
| **TUI god object blocks feature velocity** | #3314 (252 fields), #3310, #3313, #3308 — 4 split PRs in flight | Architectural |
| **Chinese/Japanese garbled in streaming output** | #1675, #1564 — rendering path encoding issues | i18n blocker |
| **Windows default launch uses `cmd.exe` not Windows Terminal** | #1854 — "fonts, colors, feel degraded" | Platform polish |
| **No provider-independent offline/onboarding path** | #3927 — "every path activates something" | UX gap |
| **Model picker slow (3s) due to uncached catalog merge** | #4550 — fixed today, but pattern repeats | Perf regression |
| **Documentation/site drift vs. README locales** | #3091, #3093 — 5 README langs, site only EN/ZH | Process gap |

---

*Digest generated from GitHub data as of 2026-07-19 00:00 UTC. All links point to Hmbown/CodeWhale (DeepSeek TUI).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*