# AI CLI Tools Community Digest 2026-07-14

> Generated: 2026-07-14 08:37 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report (2026-07-14)

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **mature, enterprise-grade platforms** (Claude Code, GitHub Copilot CLI, Gemini CLI) and **rapidly iterating challengers** (Qwen Code, OpenCode, Kimi Code, DeepSeek TUI, Pi). All tools are converging on **multi-session daemon architectures**, **ACP/MCP interoperability**, and **subagent delegation** as core primitives. Windows parity, streaming stability, and memory management remain universal pain points. Vendor-neutral context formats (`AGENTS.md`) and provider-agnostic reasoning controls are emerging as cross-cutting standardization fronts.

---

## 2. Activity Comparison (2026-07-14)

| Tool | Releases (24h) | Hot Issues Tracked | PRs Updated | Primary Focus Today |
|------|----------------|-------------------|-------------|---------------------|
| **Claude Code** | 2 patches (v2.1.208–209) | 10 | 3 | Accessibility, Windows Cowork, SSE hangs, AGENTS.md |
| **OpenAI Codex** | ⚠️ Data unavailable | — | — | — |
| **Gemini CLI** | 1 nightly (v0.52.0) | 10 | 10 | Subagent reliability, A2A cancellation, quota UX |
| **GitHub Copilot CLI** | 0 | 10 | 0 | Linux clipboard, voice mode, permission system, data-loss bugs |
| **Kimi Code CLI** | 0 | 2 (1 closed) | 11 | ACP server parity, Windows session resume, provider logic |
| **OpenCode** | 2 patches (v1.17.19–20) | 10 | 10 | Subagent permissions, V2 durability, web UI regression |
| **Pi** | 0 | 10 | 10 | Provider regressions (Codex/DeepSeek), agent hooks, SQLite sessions |
| **Qwen Code** | 1 stable (v0.19.10) + nightly + SDK | 10 | 10 | Multi-workspace daemon, VP mode default, subagent observability |
| **DeepSeek TUI** | 1 RC (v0.8.68) | 9 | 9 | @-completion perf, TUI polish, MiniMax provider, docs portal |

**Key Observations:**
- **Highest release velocity**: OpenCode (2 patches), Claude Code (2 patches), Qwen Code (stable + nightly + SDK)
- **Highest PR throughput**: Kimi Code (11), Gemini/OpenCode/Pi/Qwen (10 each)
- **Most critical bugs**: GitHub Copilot CLI (data-loss checkpoint restore, autopilot runaway), Claude Code (Windows Cowork, memory leaks), OpenCode (serve-mode multi-tool deadlock)

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Vendor-neutral context format** | Claude Code (#6235, 4.3k 👍), Kimi Code (#2487), Qwen Code (daemon config) | `AGENTS.md` standardization; auto-discovery of `CLAUDE.md`/`.claude` for migration |
| **Subagent observability & control** | Gemini CLI (#22323, #21409), OpenCode (#16491, #28052), Qwen Code (#5239), Claude Code (#63190) | Trajectory sharing, config overrides, timeout control, non-interruptible message queuing |
| **MCP/ACP protocol parity** | Kimi Code (#2490, #2495), Qwen Code (#2414, #4782), OpenCode (#16491), DeepSeek TUI (#4352) | Global MCP config in server mode, structured question support, Streamable HTTP transport |
| **Multi-workspace / multi-session daemon** | Qwen Code (v0.19.10), OpenCode (V2), Gemini CLI (A2A), Pi (SQLite sessions) | Workspace isolation, hot-reload, session persistence across restarts |
| **Provider-agnostic reasoning controls** | Pi (#6433, #6409), DeepSeek TUI (#4368), Qwen Code (#6849), OpenCode (#36748) | Unified `/effort` command, thinking-mode preservation, originator headers for rollout-gated models |
| **Windows feature parity** | Claude Code (#74649, #47327, #77380), GitHub Copilot CLI (#2082), OpenCode (#36210) | HCS/Cowork support, clipboard fixes, MSIX virtualization, cursor jump during streaming |
| **Memory/session durability** | OpenCode (#36347), Pi (#6594), Qwen Code (#5979), DeepSeek TUI (#4355) | SQLite-backed stores, persistent permission waits, transcript projection, terminal identity persistence |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | Gemini CLI | GitHub Copilot CLI | Qwen Code | OpenCode | Kimi Code | Pi | DeepSeek TUI |
|-----------|-------------|------------|-------------------|-----------|----------|-----------|-----|--------------|
| **Primary User** | Enterprise devs, accessibility-first | Google Cloud-native teams | GitHub/Enterprise ecosystem | Daemon/server deployments, multi-workspace | V2 architecture enthusiasts, plugin authors | ACP/IDE integrators, cross-tool migrators | Provider-agnostic power users, orchestration builders | TUI purists, visual polish seekers |
| **Architecture** | Mature TUI + desktop + headless | A2A server + core CLI | VS Code-integrated + standalone CLI | Daemon-first (ACP transport, workers) | V2: lazy-loading, transcript projector | Soul/agent abstraction, Kosong provider | Agent harness + extension hooks + SQLite | PTY-heavy TUI, receipt-based observability |
| **Interop Focus** | `AGENTS.md` push, plugin marketplace | A2A protocol, MCP tools | MCP OAuth bridging, OTel | ACP-first, Streamable HTTP | Plugin system, custom providers | ACP server parity, `CLAUDE.md` migration | Provider registry, RPC extensions | MiniMax/Codex provider routes, cost attribution |
| **Differentiator** | Accessibility mode (v2.1.208), Cowork (broken on Win) | Auto Memory, quota-aware UX | Voice mode (broken), GitHub integration | VP mode default, multi-workspace daemon | Double Ctrl+C guard, `/ask` side panel | `kimi acp` server, ChaosChatProvider | `message_end` hook replacement, SQLite sessions | Underwater receipts, versioned exec streams, docs portal |
| **Maturity Signal** | High (v2.x, 4.3k 👍 on top issue) | High (nightly cadence, P1 triage) | Medium (critical data-loss bugs) | High (v0.19 stable, SDK released) | High (V2 refactor, 2 patches/day) | Medium (rapid PRs, ACP gaps) | Medium (provider regressions, new hooks) | Medium (RC polish, perf focus) |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **Tier 1: Established & High-Velocity** | **Claude Code**, **Qwen Code**, **OpenCode** | Claude: 4.3k 👍 on #6235, bi-daily patches; Qwen: stable + nightly + SDK same day, 25-comment RFCs; OpenCode: 2 patches + 10 PRs/day, V2 refactor landing |
| **Tier 2: Active Core, Critical Gaps** | **Gemini CLI**, **GitHub Copilot CLI**, **Pi** | Gemini: P1 subagent hangs, nightly fixes; Copilot: data-loss bugs, 0 PRs/day; Pi: provider regressions on new model tiers, but 10 PRs/day on agent hooks |
| **Tier 3: Rapid Iteration, Niche Focus** | **Kimi Code**, **DeepSeek TUI** | Kimi: 11 PRs/day, ACP server push; DeepSeek: RC polish, @-completion perf fix same day, docs portal launch |
| **Tier 4: Data Unavailable** | **OpenAI Codex** | Summary generation failed — no visibility |

**Momentum Indicators:**
- **Highest community engagement**: Claude Code (AGENTS.md issue: 342 comments, 4,369 👍)
- **Fastest fix-to-release**: DeepSeek TUI (#4365 → #4367 same day), Qwen Code (VP mode default in v0.19.10)
- **Most architectural risk**: OpenCode (V2 durability gaps), GitHub Copilot CLI (permission system unreliability)

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication |
|-------|----------------|-------------|
| **Daemon/Server mode becoming default** | 🔥🔥🔥 (Qwen, OpenCode, Gemini, Pi) | CLI tools evolving into long-running services; invest in ACP/Streamable HTTP integration now |
| **`AGENTS.md` as interop standard** | 🔥🔥🔥 (Claude 4.3k 👍, Kimi auto-detect, Qwen daemon config) | Vendor-specific context files (`CLAUDE.md`) are technical debt; adopt `AGENTS.md` in repos |
| **Subagent = first-class primitive** | 🔥🔥🔥 (All tools) | Delegation reliability (timeouts, observability, permission inheritance) is the new differentiator |
| **Windows is a second-class citizen** | 🔥🔥 (Claude Cowork, Copilot clipboard, OpenCode cursor jump) | Teams on Windows need workarounds or alternative tools; vendor priority remains Linux/macOS |
| **Provider abstraction layer hardening** | 🔥🔥 (Pi originator headers, DeepSeek route-aware pricing, OpenCode custom provider resolve) | Multi-model BYOK workflows demand unified reasoning controls, context handling, cost attribution |
| **Session durability > raw speed** | 🔥🔥 (OpenCode V2, Pi SQLite, DeepSeek terminal identity, Qwen daemon resume) | Transcript projection, persistent permission waits, and restart survival outweigh cold-start optimizations |
| **Accessibility & UX polish as competitive moats** | 🔥 (Claude screen-reader mode, DeepSeek reduced-motion, Qwen VP mode) | Enterprise procurement increasingly requires a11y compliance; TUI visual stability drives retention |
| **Memory/token leaks = trust erosion** | 🔥 (Claude 10–15 GB RSS, Gemini Auto Memory noise, Pi retry backoffs) | Observability (cost attribution, token accounting) becoming table stakes for production use |

---

## Recommendation Summary

| If You Need… | Best Fit (2026-07-14) |
|--------------|------------------------|
| **Enterprise stability + accessibility** | **Claude Code** (despite Windows Cowork gaps) |
| **Daemon/server deployment + multi-workspace** | **Qwen Code** (v0.19.10 stable, SDK ready) |
| **Cutting-edge V2 architecture + plugin extensibility** | **OpenCode** (high velocity, but durability gaps) |
| **Google Cloud / A2A-native workflows** | **Gemini CLI** (nightly cadence, subagent P1s) |
| **GitHub ecosystem + voice (when fixed)** | **GitHub Copilot CLI** (critical bugs block prod use) |
| **ACP/IDE integration + cross-tool config migration** | **Kimi Code** (fastest ACP server progress) |
| **Provider-agnostic orchestration + custom hooks** | **Pi** (agent harness extensions, SQLite sessions) |
| **Polished TUI + visual observability** | **DeepSeek TUI** (v0.8.68 RC, receipt-based replay) |

> **Bottom Line**: The ecosystem is standardizing on **daemon + ACP + subagents** as the core stack. Tools that solve **Windows parity**, **session durability**, and **provider-agnostic reasoning controls** first will capture the next wave of enterprise adoption. `AGENTS.md` adoption is the strongest leading indicator of interop maturity.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-14 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **[skill-creator evaluation pipeline fixes](https://github.com/anthropics/skills/pull/1298)** (PR #1298, #1323, #1099, #1050, #1261) | Core tooling that optimizes skill descriptions via automated eval loop (`run_eval.py` → `run_loop.py` → `improve_description.py`) | **Critical infrastructure failure**: `run_eval.py` reports `recall=0%` for all skills (Issue #556, 12 comments, 7 👍). Root causes: Windows subprocess/encoding bugs, trigger detection missing skill names, eval artifacts polluting live project registry. 6+ PRs targeting this. | **Open** (active) |
| 2 | **[document-typography](https://github.com/anthropics/skills/pull/514)** (PR #514) | Prevents orphan words, widow paragraphs, numbering misalignment in AI-generated documents | Addresses universal pain point: "users rarely ask for good typography but notice when it's broken." Covers print & digital output. | **Open** |
| 3 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** (PR #723) | Comprehensive testing skill: Testing Trophy model, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing | Full-stack testing guidance; high utility for code-generation workflows. | **Open** |
| 4 | **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (PR #83) | Meta-skills evaluating other skills across 5 dimensions (structure, examples, resources, triggers, safety) + security scanning | Enables marketplace quality gates; directly supports Issue #492 (namespace trust abuse). | **Open** |
| 5 | **[self-audit](https://github.com/anthropics/skills/pull/1367)** (PR #1367) | Mechanical file verification → 4-dimension reasoning audit (correctness, completeness, consistency, safety) in damage-severity order | Universal quality gate; aligns with Issue #1385's proposed 3-gate pipeline. | **Open** |
| 6 | **[color-expert](https://github.com/anthropics/skills/pull/1302)** (PR #1302) | Color naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), accessibility contrast, perceptual uniformity | Niche but deep; serves design-system, data-viz, and brand-compliance workflows. | **Open** |
| 7 | **[ODT skill](https://github.com/anthropics/skills/pull/486)** (PR #486) | Create, fill, read, convert OpenDocument Format (.odt, .ods); LibreOffice/ISO standard support | Fills open-format gap alongside existing DOCX/PDF skills. | **Open** |
| 8 | **[SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)** (PR #181) | Tabular foundation model (Apache 2.0) for predictive analytics on SAP business data | Enterprise-specific; signals demand for domain-ML integration. | **Open** |

---

## 2. Community Demand Trends (from Issues)

| Trend | Evidence | Representative Issues |
|-------|----------|----------------------|
| **Trust & Namespace Security** | Highest-comment issue (34); users installing community skills believing they're official Anthropic skills | [#492](https://github.com/anthropics/skills/issues/492) (34 💬, 2 👍) |
| **Organizational Skill Sharing** | 2nd highest engagement; current workflow requires manual file transfer + upload | [#228](https://github.com/anthropics/skills/issues/228) (14 💬, 7 👍) |
| **Evaluation Infrastructure Reliability** | `run_eval.py` fundamentally broken (0% recall); blocks skill optimization | [#556](https://github.com/anthropics/skills/issues/556) (12 💬, 7 👍), [#1169](https://github.com/anthropics/skills/issues/1169) |
| **Windows Compatibility** | Multiple blockers: PATHEXT, cp1252 encoding, `select()` on pipes | [#1061](https://github.com/anthropics/skills/issues/1061) (3 💬, 2 👍), PRs #1099, #1050, #362 |
| **Meta-Skills (Skills for Skills)** | Quality analyzer, security analyzer, self-audit all proposed; community wants self-governance | [#83](https://github.com/anthropics/skills/pull/83), [#1367](https://github.com/anthropics/skills/pull/1367), [#1385](https://github.com/anthropics/skills/issues/1385) |
| **MCP/Protocol Integration** | Request to expose skills as MCP endpoints for tool interoperability | [#16](https://github.com/anthropics/skills/issues/16) (4 💬) |
| **Bedrock/Cloud Deployment** | Unclear if skills work on AWS Bedrock; enterprise adoption blocker | [#29](https://github.com/anthropics/skills/issues/29) (4 💬) |
| **Duplicate Skill Management** | `document-skills` + `example-skills` install identical content → context pollution | [#189](https://github.com/anthropics/skills/issues/189) (6 💬, 9 👍) |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It's Likely | Blockers |
|----|-------|-----------------|----------|
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Universal need; no existing coverage; well-scoped | Review bandwidth |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | High utility for core Claude Code use case (code gen); comprehensive | Large scope may need iteration |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | Directly addresses top security issue (#492); enables marketplace trust | Depends on marketplace infra |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Self-contained; no external deps; clear trigger conditions | Niche audience |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT** | Completes office-format triad (DOCX/PDF/ODT); open standard | LibreOffice dependency for some ops |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Aligns with proposed quality-gate pipeline (#1385); universal applicability | Novel pattern; may need design review |
| [#538](https://github.com/anthropics/skills/pull/538) | **PDF case-sensitivity fix** | Trivial bug; breaks on Linux/CI; 8 filename mismatches | None — ready to merge |
| [#541](https://github.com/anthropics/skills/pull/541) | **DOCX w:id collision fix** | Prevents document corruption; root cause identified | None — ready to merge |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for trustworthy, self-governing skill infrastructure: reliable evaluation tooling (currently broken), namespace security to prevent impersonation, organizational sharing primitives, and meta-skills that audit other skills — all prerequisites before the marketplace can scale beyond early adopters.**

---

# Claude Code Community Digest — 2026-07-14

---

## 1. Today's Highlights

Two patch releases shipped: **v2.1.208** introduces a screen reader accessibility mode (`--ax-screen-reader` / `axScreenReader` setting) and Vim insert-mode remaps (`vimInsertModeRemaps`), while **v2.1.209** reverts an over-broad guard that was blocking `/model` and other dialogs in background `claude agents` sessions. The issue tracker shows intense community focus on **AGENTS.md standardization** (#6235, 342 comments, 4.3k 👍), persistent **Windows Cowork/HCS failures** (#74649, #47327), and a deep-rooted **SSE streaming hang** (#33949) affecting long-running sessions.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v2.1.209** | Reverts overly broad guard that blocked `/model` and other dialogs in `claude agents` background sessions. |
| **v2.1.208** | • **Screen reader mode**: opt-in plain-text rendering via `claude --ax-screen-reader`, `CLAUDE_AX_SCREEN_READER=1`, or `"axScreenReader": true` in settings.<br>• **Vim insert-mode remaps**: new `vimInsertModeRemaps` setting maps two-key sequences (e.g., `jj`) to Escape. |

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6235](https://github.com/anthropics/claude-code/issues/6235) | **Support AGENTS.md** (enhancement) | Codex, Amp, Cursor standardizing on `AGENTS.md` for cross-agent codebase context; `CLAUDE.md` is Claude-specific and hinders collaboration. | 342 comments, **4,369 👍** — highest engagement in tracker |
| [#74649](https://github.com/anthropics/claude-code/issues/74649) | **Missing HCS services: vfpext — Cowork broken on Windows 11 Pro** (bug) | Cowork (collaborative coding) non-functional on Windows due to absent Hyper-V Container Service extensions. | 70 comments, 2 👍 — blocks Windows teams |
| [#33949](https://github.com/anthropics/claude-code/issues/33949) | **SSE streaming hangs indefinitely + ESC cannot fully cancel** (bug, has repro) | Root-cause analysis with fix proposals for months-old hang affecting 28+ comment threads and 150+ user reports. | 38 comments, **24 👍** — long-standing stability blocker |
| [#47327](https://github.com/anthropics/claude-code/issues/47327) | **Cowork tab disabled — "unsupported" on Windows 11 Pro** (bug) | Ongoing since March 2026; Windows users cannot access Cowork feature at all. | 20 comments, 3 👍 |
| [#58192](https://github.com/anthropics/claude-code/issues/58192) | **/goal Stop hook fails with "Prompt is too long" on large goals** (bug, has repro) | Large goal text triggers prompt-length error, breaking automated goal-driven workflows. | 16 comments, **14 👍** |
| [#52924](https://github.com/anthropics/claude-code/issues/52924) | **TUI duplicates rendered text in scrollback on long sessions** (bug, has repro) | After ~300k tokens, scrollback corrupts with duplicate renders on Windows + Linux. | 13 comments, **15 👍** |
| [#77380](https://github.com/anthropics/claude-code/issues/77380) | **Windows MSIX/Cowork: in-app writes silently virtualized; in-place updates deadlock** (bug, has repro) | MSIX write virtualization redirects session writes to package-local paths; VM file handles block updates. | 4 comments, new today |
| [#63190](https://github.com/anthropics/claude-code/issues/63190) | **Deferred Messages — Queue Input for End of Turn** (enhancement) | Users need to queue follow-up messages without interrupting current turn; currently only interrupts possible. | 4 comments, 5 👍 |
| [#74562](https://github.com/anthropics/claude-code/issues/74562) | **sonnet[1m] / fable[1m] aliases don't apply 1M context (only opus[1m] works)** (bug) | Model alias suffix documented but broken for non-Opus models despite API support. | 4 comments, 2 👍 |
| [#76185](https://github.com/anthropics/claude-code/issues/76185) | **Headless -p session leaks 10–15 GB RSS while idle on background Bash** (bug, has repro, perf:memory) | Idle headless sessions balloon memory on Linux, triggering OOM kills on 18 GB machines. | 1 comment, new activity |

---

## 4. Key PR Progress (All 3 Updated in Last 24h)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#77292](https://github.com/anthropics/claude-code/pull/77292) | **docs(plugins): use correct marketplace name in plugin READMEs** | Fixes install commands in two bundled plugin READMEs to match `claude-code-plugins` marketplace name from `.claude-plugin/marketplace.json`. | Open |
| [#77289](https://github.com/anthropics/claude-code/pull/77289) | **Fix hookify prompt rules on Windows: utf-8 encoding + prompt field** | Resolves silent failure of `hookify` plugin's `UserPromptSubmit` rules caused by encoding issues and missing prompt field mapping. | Open |
| [#77260](https://github.com/anthropics/claude-code/pull/77260) | **fix(hookify): match Write and prompt rules** | Makes file rules inspect `Write` content; maps simple prompt rules to current `UserPromptSubmit` payload; adds regression tests for Write/Edit/prompt rules. | Open |

---

## 5. Feature Request Trends

1. **Cross-agent interoperability** — `AGENTS.md` support (#6235) dominates; developers want a vendor-neutral context format.
2. **Non-interruptible message queuing** — Deferred messages (#63190) to avoid derailing in-progress turns.
3. **Accessibility parity** — Screen reader mode shipped; community expects continued a11y investment.
4. **Model alias consistency** — `[1m]` suffix should work uniformly across Opus/Sonnet/Fable (#74562).
5. **Windows feature parity** — Cowork, HCS, MSIX virtualization fixes repeatedly requested.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Pattern |
|------|---------|
| **Windows Cowork** | Multiple issues (#74649, #47327, #77380, #69020) — HCS missing, MSIX virtualization, stale plugin caches, sidebar empty. Windows users effectively excluded from collaborative features. |
| **Streaming stability** | SSE hangs (#33949), queue auto-restart on ESC, no timeout — forces manual babysitting of long sessions. |
| **Memory/performance** | TUI scrollback corruption (#52924), headless RSS leaks to 10–15 GB (#76185), desktop 119 GB leak (#76588). |
| **Hook/goal reliability** | Stop-hook prompt-too-long (#58192), hookify silent failures (#77289, #77260), bypassPermissions ignored in Desktop (#77352). |
| **Model behavior opacity** | Undocumented downgrades (#77398), sub-agent model override (#77396), fabricated user messages (#77381), classifier fail-closed bursts (#74949). |
| **Authentication/billing** | VS Code false credit warnings (#77219), stranded Startup credits (#77413), MCP OAuth misroutes (#72582). |

---

*Generated from `anthropics/claude-code` GitHub data as of 2026-07-14. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-14

---

## 1. Today's Highlights
The nightly **v0.52.0-nightly.20260714** ships two critical fixes: a UX improvement that surfaces actionable guidance when shared-project quota limits are hit, and a stability patch ensuring A2A task cancellation actually terminates the execution loop. Meanwhile, the issue backlog highlights growing friction around subagent reliability (hangs, silent failures, turn-limit misreporting) and Auto Memory quality, while PRs show active work on async I/O, temp-file hygiene, and recursive-reasoning guardrails.

---

## 2. Releases
### `v0.52.0-nightly.20260714.gfa975395b`  
**Changes**  
- **fix(core)**: Quota-exhausted errors (HTTP 429) now include a setup hint when users hit shared Google Cloud project limits without a dedicated GCP project configured ([PR #28391](https://github.com/google-gemini/gemini-cli/pull/28391)).  
- **fix(a2a-server)**: Task cancellation now properly aborts the underlying execution stream, fixing “ghost executions” and several race conditions/memory leaks ([PR #28316](https://github.com/google-gemini/gemini-cli/pull/28316)).

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports `GOAL` success after hitting `MAX_TURNS` | Masks real failures; breaks trust in agent delegation | 10 comments, 2 👍, `priority/p1`, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely on simple tasks | Blocks core workflow; work-around is disabling subagents | 7 comments, 8 👍, `priority/p1` |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell tool sticks at “Waiting input” after command completes | Frequent UI freeze; affects basic CLI operations | 4 comments, 3 👍, `priority/p1` |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Model rarely invokes custom skills/sub-agents autonomously | Undermines extensibility model; requires explicit prompting | 6 comments, `priority/p2` |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | Wastes quota & compute; no back-off or quarantine | 5 comments, `priority/p2` |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | Platform regression for Linux users | 4 comments, 1 👍, `agent/browser` |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error when >128 tools registered | Hard ceiling for tool-rich workspaces | 3 comments, `priority/p2` |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Agent uses destructive git/DB commands unsafely | Safety risk in automated workflows | 3 comments, 1 👍, `kind/customer-issue` |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser agent ignores `settings.json` overrides (`maxTurns`) | Configuration drift; limits customization | 3 comments, `priority/p2` |
| [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) | Terminal flicker & perf drop on resize | Degrades UX in daily use | 2 comments, `priority/p2` |

---

## 4. Key PR Progress (10 Notable)

| PR | Status | Summary |
|----|--------|---------|
| [#28319](https://github.com/google-gemini/gemini-cli/pull/28319) | Open | **refactor(a2a-server)**: Enforce path-trust check before env load; isolate task env via `AsyncLocalStorage`. |
| [#28164](https://github.com/google-gemini/gemini-cli/pull/28164) | Open | **fix(core)**: Cap recursive reasoning at 15 turns/request (configurable via `maxSessionTurns`). |
| [#28397](https://github.com/google-gemini/gemini-cli/pull/28397) | Open | **fix(core)**: Replace sync `fs.*Sync` calls in shell tool with async `fs/promises` to eliminate UI stutter. |
| [#28394](https://github.com/google-gemini/gemini-cli/pull/28394) | Open | **fix(core)**: Clean up temp dirs on background process exit (fixes leak). |
| [#28389](https://github.com/google-gemini/gemini-cli/pull/28389) | Open | **fix(core)**: Add real-time deadline to `sendMessageStream`/`processTurn` to prevent infinite agent loops. |
| [#28398](https://github.com/google-gemini/gemini-cli/pull/28398) | Closed | **fix(core)**: Simplify Plan Mode write policy to accept relative `.md` paths (unblocks nightly tests). |
| [#28391](https://github.com/google-gemini/gemini-cli/pull/28391) | Closed | **fix(core)**: Enrich quota-limit errors with setup hint (shipped in tonight’s nightly). |
| [#28316](https://github.com/google-gemini/gemini-cli/pull/28316) | Closed | **fix(a2a-server)**: Cancellation now aborts execution loop (shipped in tonight’s nightly). |
| [#28385](https://github.com/google-gemini/gemini-cli/pull/28385) | Closed | **feat(core)**: Bump `google-auth-library` to 10.9.0 for upstream bug fixes. |
| [#28024](https://github.com/google-gemini/gemini-cli/pull/28024) | Open | **chore(deps)**: `@opentelemetry/core` 2.7.1 → 2.8.0. |

---

## 5. Feature Request Trends
1. **Subagent Observability & Control** – Trajectory sharing ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), config overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and self-awareness ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)) are top asks.  
2. **AST-Aware Tooling** – Multiple epics ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) explore precision reads & codebase mapping via `tilth`/`glyph`.  
3. **Zero-Dependency Sandbox** – Proposal to leverage model’s native bash affinity safely ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)).  
4. **Eval Infrastructure** – Scaling component-level behavioral evals beyond 76 tests ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)).  
5. **Auto Memory Hardening** – Deterministic redaction, patch validation, and retry policies ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).

---

## 6. Developer Pain Points
- **Silent Subagent Failures** – Hangs, misreported success, Wayland crashes, and ignored configs erode confidence in delegation.  
- **Shell Tool Flakiness** – “Waiting input” ghost state and synchronous I/O stutters disrupt flow.  
- **Quota/Tool Ceilings** – Shared-project 429s with poor messaging; 128-tool hard limit.  
- **Memory System Noise** – Auto Memory re-processes low-signal sessions, leaks invalid patches, and logs secrets pre-redaction.  
- **Terminal Rendering** – Resize flicker and post-editor corruption affect daily usability.  
- **Destructive Defaults** – Model reaches for `git reset --force`/DB drops without guardrails.

---

*Generated from `google-gemini/gemini-cli` GitHub data (2026-07-14 00:00–23:59 UTC).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-14

## Today's Highlights
No new releases were published in the last 24 hours. The issue tracker shows active community engagement across 37 updated issues, with the most discussed items centering on **Linux clipboard regression (ctrl+shift+c)**, **voice mode transcription failures**, **permission system bugs** (auto-approval, deadlocks, cross-session conflicts), and **enterprise OTel authentication gaps**. Several critical bugs affect production workflows: checkpoint restore deleting untracked files, autopilot infinite loops consuming premium requests, and MCP OAuth tokens not bridging to CLI sessions.

---

## Releases
No releases in the last 24 hours.

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#2082](https://github.com/github/copilot-cli/issues/2082) | **ctrl+shift+c no longer copies to clipboard on Linux** (v1.0.4+) | Breaks muscle memory for Linux developers; copy workflow regression in all Ubuntu 24.04 terminals. | 23 comments, 11 👍 — high visibility, strong demand for fix |
| [#1941](https://github.com/github/copilot-cli/issues/1941) | **Sudden "model not supported" CAPIError 400** | Blocks all Copilot usage intermittently; unclear root cause, affects agent progress. | 12 comments — widespread confusion, impacts reliability |
| [#4024](https://github.com/github/copilot-cli/issues/4024) | **Voice mode: all ASR models fail silently (nemotron_speech routing bug)** | Voice feature completely broken; audio captures but transcription returns empty for all 3 models. | 8 comments — niche but total failure for voice users |
| [#2776](https://github.com/github/copilot-cli/issues/2776) | **Shift+Enter submits prompt instead of new line** | UX regression: prevents multi-line prompt composition; no config to toggle behavior. | 6 comments, 2 👍 — daily friction for power users |
| [#3282](https://github.com/github/copilot-cli/issues/3282) | **Add multiple BYOK model capability** | Single BYOK env var forces session restart to switch models; no TUI model switcher. | 5 comments, 14 👍 — strong demand for multi-model workflows |
| [#1675](https://github.com/github/copilot-cli/issues/1675) | **Checkpoint restore runs `git clean -fd` → deletes untracked files** | **Data loss risk**: restoring a checkpoint permanently wipes all untracked files in repo root. | 3 comments — critical severity, silent destruction |
| [#2881](https://github.com/github/copilot-cli/issues/2881) | **Autopilot infinite loop drains premium requests** | Autonomous mode loops without progress, burning paid requests until manual kill. | 3 comments — financial impact, trust erosion |
| [#3874](https://github.com/github/copilot-cli/issues/3874) | **`preToolUse` hook denial does not work** | Permission hooks ignored; agents bypass deny rules, undermining security model. | 3 comments — enterprise/security blocker |
| [#4096](https://github.com/github/copilot-cli/issues/4096) | **Third-party MCP OAuth connected but tools missing in CLI** | OAuth flow completes in UI but tokens not propagated to spawned CLI sessions. | 2 comments, 2 👍 — breaks MCP integration promise |
| [#3563](https://github.com/github/copilot-cli/issues/3563) | **Tool approvals silently lost in parallel sessions** | Concurrent `copilot` sessions overwrite `permissions-config.json`; "Always allow" approvals vanish. | 2 comments — multi-session workflow breakage |

---

## Key PR Progress
No pull requests updated in the last 24 hours.

---

## Feature Request Trends
From the issue corpus, the strongest recurring feature directions are:

1. **Multi-model BYOK support** ([#3282](https://github.com/github/copilot-cli/issues/3282)) — developers want to register and switch between multiple custom models without restarting sessions.
2. **Enterprise-grade OTel authentication** ([#3477](https://github.com/github/copilot-cli/issues/3477)) — mTLS, dynamic header rotation, and parity with Claude Code’s exporter config.
3. **Persistent deny-rules in permissions** ([#3995](https://github.com/github/copilot-cli/issues/3995)) — complement existing allow-rules with explicit command-family blocking.
4. **Granular theming/color customization** ([#4117](https://github.com/github/copilot-cli/issues/4117)) — per-element color control for accessibility and preference.
5. **Non-interactive mode parity** ([#3699](https://github.com/github/copilot-cli/issues/3699), [#4107](https://github.com/github/copilot-cli/issues/4107)) — skills `allowed-tools` respected; JSON output includes token/cost usage from OTel.
6. **Voice model picker usability** ([#4059](https://github.com/github/copilot-cli/issues/4059)) — extended context pricing visibility and keyboard navigation in `/models`.

---

## Developer Pain Points
Recurring frustrations surfacing across issues:

| Pain Point | Evidence |
|------------|----------|
| **Permission system unreliability** | Hook denials ignored ([#3874](https://github.com/github/copilot-cli/issues/3874)), auto-approval of "ask" decisions ([#3590](https://github.com/github/copilot-cli/issues/3590)), deadlocks on postToolUse ([#3084](https://github.com/github/copilot-cli/issues/3084)), cross-session approval loss ([#3563](https://github.com/github/copilot-cli/issues/3563)), confusing subagent prompts ([#3684](https://github.com/github/copilot-cli/issues/3684)). |
| **Data-destructive defaults** | Checkpoint restore = `git clean -fd` ([#1675](https://github.com/github/copilot-cli/issues/1675)); PowerShell `$home` variable footgun ([#3098](https://github.com/github/copilot-cli/issues/3098)). |
| **Autopilot runaway behavior** | Infinite loops burning premium requests ([#2881](https://github.com/github/copilot-cli/issues/2881)), PowerShell permission loops ([#3120](https://github.com/github/copilot-cli/issues/3120)). |
| **MCP integration gaps** | OAuth tokens not bridged to CLI ([#4096](https://github.com/github/copilot-cli/issues/4096)), plugin update/install locking ([#1177](https://github.com/github/copilot-cli/issues/1177)). |
| **Input/UX regressions** | Linux clipboard broken ([#2082](https://github.com/github/copilot-cli/issues/2082)), Shift+Enter submits ([#2776](https://github.com/github/copilot-cli/issues/2776)), voice transcription silent failure ([#4024](https://github.com/github/copilot-cli/issues/4024)), prompt copy includes border glyph ([#4116](https://github.com/github/copilot-cli/issues/4116)). |
| **Model opacity** | Sudden "model not supported" errors ([#1941](https://github.com/github/copilot-cli/issues/1941)), no extended context pricing in `/models` ([#4059](https://github.com/github/copilot-cli/issues/4059)), JSON output missing token usage ([#4107](https://github.com/github/copilot-cli/issues/4107)). |

---

*Digest generated from github.com/github/copilot-cli data as of 2026-07-14 00:00 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-14

## 1. Today's Highlights
The project saw significant PR activity with 11 pull requests updated, focusing on provider logic fixes (reasoning effort handling, completion budget), ACP server improvements (MCP config loading, question handling), and core CLI stability (plan-mode tool bindings, error messaging). Two issues were updated: a critical Windows session-resume corruption bug was closed, while a new ACP structured-question regression was opened. No new release was published.

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Hot Issues

| Issue | Status | Why It Matters | Community Reaction |
|-------|--------|----------------|-------------------|
| [#2496](https://github.com/MoonshotAI/kimi-cli/issues/2496) `resuming forked session results in corrupted output` | **Closed** | Windows users on v1.36.0 experienced output corruption when resuming forked sessions (`kimi -r`), blocking session continuity workflows. | 0 comments, 0 👍 — resolved quickly via PR (likely #2498/#2499). |
| [#2495](https://github.com/MoonshotAI/kimi-cli/issues/2495) `ACP: AskUserQuestion/QuestionRequest resolves empty` | **Open** | ACP server mode (`kimi acp`) returns empty answers for all `QuestionRequest` calls, breaking interactive questioning for IDE integrations (Zed, JetBrains). | 0 comments, 0 👍 — new regression; blocks ACP adoption for structured workflows. |

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#2499](https://github.com/MoonshotAI/kimi-cli/pull/2499) `fix(kosong): stop sending Kimi reasoning effort implicitly` | **Closed** | Removes automatic serialization of legacy `reasoning_effort`; preserves caller-provided thinking effort as independent provider state. |
| [#2498](https://github.com/MoonshotAI/kimi-cli/pull/2498) `fix(kosong): preserve empty-string reasoning_content as ThinkPart` | **Closed** | Fixes 400 error from `coding-model-okapi-0711-vibe` requiring `reasoning_content` on every assistant message when `thinking.keep=all`. |
| [#2494](https://github.com/MoonshotAI/kimi-cli/pull/2494) `fix(kimi): use remaining context for completion budget` | **Closed** | Replaces fixed 32k cap with dynamic remaining context window for Kimi completion budget (includes ChaosChatProvider-wrapped Kimi). |
| [#2490](https://github.com/MoonshotAI/kimi-cli/pull/2490) `fix(acp): load global MCP config in kimi acp server` | **Open** | Loads user-configured global MCP servers in ACP server, achieving parity with interactive `kimi` (fixes #2464). |
| [#2487](https://github.com/MoonshotAI/kimi-cli/pull/2487) `feat(agent): support loading CLAUDE.md alongside AGENTS.md` | **Open** | Adds discovery of `CLAUDE.md` and `.claude/CLAUDE.md` for automatic Claude Code config migration (closes #2401). |
| [#2488](https://github.com/MoonshotAI/kimi-cli/pull/2488) `fix(soul): make LLMNotSet error message actionable for fresh installs` | **Open** | Improves fresh-install UX: error now guides users to run `kimi login` (closes #2456). |
| [#2489](https://github.com/MoonshotAI/kimi-cli/pull/2489) `fix(soul): restore plan-mode tool bindings after /init` | **Open** | Prevents `/init` throwaway soul from rebinding shared tool instances, restoring `ExitPlanMode`/`EnterPlanMode` bindings (fixes #2478). |
| [#2492](https://github.com/MoonshotAI/kimi-cli/pull/2492) `fix: shorten_middle output exceeds target width by ellipsis length` | **Open** | Corrects `shorten_middle` to account for `"..."` ellipsis in width calculation. |
| [#2493](https://github.com/MoonshotAI/kimi-cli/pull/2493) `Fix: record started_at for background agent tasks so duration is reported` | **Open** | Adds `runtime.started_at` tracking for background agent tasks (bash tasks already had it). |
| [#2259](https://github.com/MoonshotAI/kimi-cli/pull/2259) `fix: redirect stdio MCP stderr to logs` | **Open** (long-running) | Routes stdio MCP subprocess stderr to `~/.kimi/logs/mcp/<server>.log` instead of terminal. |

## 5. Feature Request Trends
From recent issues and PRs, the community is pushing for:
- **ACP protocol parity** — Full MCP config loading, structured question support, and session management matching interactive CLI.
- **Cross-tool config compatibility** — Automatic detection of `CLAUDE.md`/`.claude` configs to lower migration friction.
- **Dynamic resource management** — Context-aware completion budgets, adaptive shell timeouts, and accurate task duration tracking.
- **Provider-agnostic reasoning** — Clean separation of thinking/reasoning parameters across models (Kimi, Kosong, ChaosChatProvider).

## 6. Developer Pain Points
Recurring frustrations visible in the last 24h:
1. **ACP server gaps** — Missing global MCP config (#2464, #2490) and broken `AskUserQuestion` (#2495) make IDE integrations unreliable.
2. **Session corruption on Windows** — Forked session resume (`kimi -r`) corrupts output (#2496), undermining trust in session persistence.
3. **Opaque fresh-install errors** — `LLM not set` with no actionable guidance (#2456, #2488) confuses new users.
4. **Plan-mode fragility** — `/init` clobbers shared tool bindings (#2478, #2489), requiring careful state isolation.
5. **MCP stderr pollution** — Stdio MCP servers leak stderr to terminal (#2259), noise in interactive sessions.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-14

## Today's Highlights
Two patch releases (v1.17.19, v1.17.20) shipped in 24 hours, focusing on OpenAI Luna Responses Lite OAuth, Azure AI GPT-5.6 support, and a Codex workaround removal. The community is actively debugging subagent permission inheritance, MCP tool execution in spawned sessions, and a regression where the web UI terminal button vanished since v1.15.12. Several V2 architecture fixes landed: transcript projection extraction, lazy CLI command loading, and TUI reconnect reliability.

---

## Releases

### v1.17.20
- **Bugfix**: Removed obsolete Codex workaround interfering with OpenAI Luna Responses Lite requests.
- **Improvement**: Updated Azure AI support for GPT-5.6.

### v1.17.19
- **Bugfixes**: Enabled OpenAI pro reasoning mode; disabled response storage by default for xAI Responses; added OAuth for Luna Responses Lite; fixed org-switching after console logout; applied Codex context limits for GPT-5.6 over OAuth.

---

## Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#30158](https://github.com/anomalyco/opencode/issues/30158) | Terminal button missing in web UI since v1.15.12 | Regression blocking terminal access in web UI; downgrades to v1.15.11 work. | 10 comments, 11 👍 — high visibility, no fix yet |
| [#16491](https://github.com/anomalyco/opencode/issues/16491) | Subagents can't execute MCP tools despite registry listing | Core subagent/MCP integration broken; tools visible but permission-denied at runtime. | 9 comments, 4 👍 — blocks agent delegation workflows |
| [#28052](https://github.com/anomalyco/opencode/issues/28052) | Subagents inherit primary agent `deny` permissions (regression v1.14.46) | Last-match-wins evaluation causes inherited denies to override subagent allows. | 3 comments, 2 👍 — permission model regression |
| [#36804](https://github.com/anomalyco/opencode/issues/36804) | Serve mode: multi-tool-call drops bash dispatch, session stuck "busy" | Deterministic 10/10 repro on v1.17.18/20; blocks serve-mode reliability. | 3 comments, new today |
| [#30381](https://github.com/anomalyco/opencode/issues/30381) | Cloudflare Workers AI `AiError: Bad input` — content format mismatch | Schema validation fails due to inconsistent `content` field types in same request. | 6 comments, 1 👍 — provider integration bug |
| [#31463](https://github.com/anomalyco/opencode/issues/31463) | Plugin import hangs on `npm:` specifiers with cold cache | `Npm.add()` blocks on Arborist; `--pure` or `file://` workarounds exist. | 4 comments — plugin ecosystem friction |
| [#36347](https://github.com/anomalyco/opencode/issues/36347) | V2: permission/question waits lost on server restart | Pending interactions are process-local; managed restarts can't resume them. | 3 comments — V2 durability gap |
| [#36210](https://github.com/anomalyco/opencode/issues/36210) | Win11: keyboard cursor jumps to start during streaming output | Input unusable until stream completes; affects desktop app usability. | 3 comments, 1 👍 — Windows UX regression |
| [#36748](https://github.com/anomalyco/opencode/issues/36748) | Custom provider `ModelUnavailableError` despite config visibility | Provider+model appear in `/config/providers` but fail at resolve time. | 2 comments — V2 config/provider wiring issue |
| [#36808](https://github.com/anomalyco/opencode/issues/36808) | `opencode.ai` resolves to IPv6 only, stalls on IPv6-blackhole networks | China users blocked; browsers fallback to IPv4 but Bun fetch doesn't. | 2 comments — network compatibility |

---

## Key PR Progress

| # | Title | Type | Impact |
|---|-------|------|--------|
| [#36811](https://github.com/anomalyco/opencode/pull/36811) | Extract transcript projection to `session/projector` | Refactor | Enables durable transcript persistence; unblocks #36809 |
| [#36798](https://github.com/anomalyco/opencode/pull/36798) | Lazily load CLI commands | Refactor | Improves startup speed by deferring command module imports |
| [#36807](https://github.com/anomalyco/opencode/pull/36807) | Fix TUI: refresh MCP data for default location | Bugfix | Aligns MCP store keys with TUI dialogs; fixes #36580 |
| [#36806](https://github.com/anomalyco/opencode/pull/36806) | Ensure service on first TUI reconnect | Bugfix | Makes managed reconnect idempotent and version-agnostic; fixes #36581 |
| [#36755](https://github.com/anomalyco/opencode/pull/36755) | Add configurable timeout to Task tool | Feature | Addresses subagent hang forever (#15080, #11865) |
| [#36613](https://github.com/anomalyco/opencode/pull/36613) | Require double Ctrl+C to quit TUI | Feature | Prevents accidental exits; resolves long-standing #26371, #10975, #7957 |
| [#21002](https://github.com/anomalyco/opencode/pull/21002) | Add `/ask` side-question panel | Feature | Non-queued instant answers with full context; closes #16992 |
| [#26861](https://github.com/anomalyco/opencode/pull/26861) | Fix TUI: old messages disappearing (lazy-scroll) | Bugfix | Loads older messages on scroll-up; fixes #7380 |
| [#36817](https://github.com/anomalyco/opencode/pull/36817) | Restore Tencent Hy3 reasoning selection | Bugfix | Brings back Low/Medium/High reasoning for free Hy3 models; fixes #36812 |
| [#36573](https://github.com/anomalyco/opencode/pull/36573) | Support mise-managed upgrades | Bugfix | Allows applying updates detected via mise; fixes #36572 |

---

## Feature Request Trends

1. **Subagent ergonomics** — Timeout control (#36755), permission inheritance fixes (#28052, #16491), nested question tool support (#36802, #36803).
2. **V2 durability** — Persistent permission/question waits across restarts (#36347), transcript projection extraction (#36809, #36811).
3. **Web/Desktop UX** — Terminal button restore (#30158), double Ctrl+C quit guard (#36613), `/ask` side panel (#21002), scrollable question options (#36803).
4. **Provider/Model flexibility** — Custom provider model resolution (#36748), model discovery opt-in (#36790), Cloudflare Workers AI support (#30381).
5. **Platform compatibility** — IPv6 fallback for Bun fetch (#36808), Windows `EEXIST` handling (#36792), mise upgrade support (#36573).

---

## Developer Pain Points

| Pain Point | Frequency | Examples |
|------------|-----------|----------|
| **Subagent permission/MCP failures** | High | Tools visible but unexecutable (#16491); deny inheritance overrides allows (#28052); final output lost on cleanup (#36670) |
| **V2 session durability** | High | Permission waits lost on restart (#36347); transcript persistence not extractable (#36809); reconnect race conditions (#36806) |
| **Web UI regressions** | Medium | Terminal button gone since v1.15.12 (#30158); certificate validation failures (#36791) |
| **Plugin/Provider friction** | Medium | Cold-cache npm hangs (#31463); custom provider resolve errors (#36748); Cloudflare format mismatch (#30381) |
| **Windows/Network edge cases** | Medium | IPv6 blackhole stalls (#36808); `EEXIST` on existing dirs (#36792); cursor jump during streaming (#36210) |
| **Upgrade/Config management** | Medium | `upgrade` no longer downgrades (#34287); global config only loads from `$HOME` (#36485); mise unsupported (#36573) |

--- 

*Data sourced from anomalyco/opencode GitHub activity (releases, issues, PRs updated 2026-07-14).*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-14

## 1. Today's Highlights
The Pi ecosystem is wrestling with **critical provider integration regressions** as new model tiers (gpt-5.6-luna, DeepSeek V4 thinking modes) expose gaps in compaction logic, originator headers, and reasoning-content handling. Meanwhile, the **agent harness gains first-class extension hooks** (message-end replacement, RPC correlation) and a **SQLite-backed session store** lands in preview, signaling a shift toward durable, orchestration-ready sessions. WSL login hangs and unbounded retry backoffs remain top friction points for daily drivers.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | **openai-codex Connection Reliability** — TUI sticks on “Working…” with gpt-5.5; only Escape recovers | Blocks production use of Codex models; 74 comments, 30 👍 | 🔥 **Highest engagement** — multiple daily reports |
| [#6477](https://github.com/earendil-works/pi/issues/6477) | **Compaction omits session ID** → 404 “Model not found” on gpt-5.6-luna | Breaks auto/manual compaction for newest Codex tier | 11 👍, 8 comments; fixed in PR #6533 |
| [#6615](https://github.com/earendil-works/pi/issues/6615) / [#6601](https://github.com/earendil-works/pi/issues/6601) | **Hardcoded `originator: "pi"` blocks rollout-gated models** (gpt-5.6-luna 404) | Same root cause as #6477; Codex CLI works with `originator: codex_cli_rs` | 2 issues, 2 comments each; active workaround discussion |
| [#6476](https://github.com/earendil-works/pi/issues/6476) | **Regression: `httpIdleTimeoutMs` ignored** for self-hosted OpenAI-compatible (vLLM) since v0.80.6 | Breaks long-running requests on local models; worked in v0.80.3 | 7 comments; v0.80.6 regression |
| [#6187](https://github.com/earendil-works/pi/issues/6187) | **WSL login hangs** after GitHub Copilot device auth completes in browser | Blocks WSL users entirely; 19 comments | Closed but workaround-dependent |
| [#6303](https://github.com/earendil-works/pi/issues/6303) | **Exponential retry backoff unbounded** — attempt 7 waits ~4 min despite `maxRetryDelayMs` config | Causes multi-minute stalls on flaky providers | 6 comments, 1 👍; config exists but unused |
| [#6522](https://github.com/earendil-works/pi/issues/6522) | **openai-completions sends `max_completion_tokens=1`** → 400 Bad Request when context misreported | Proxy context miscalculation triggers invalid payload | 6 comments; edge case but hard failure |
| [#6433](https://github.com/earendil-works/pi/issues/6433) | **DeepSeek V4 + thinking mode crashes session** (silent TUI close) — regression from v0.79.x | `reasoning_content` not preserved during tool-call replay | 3 comments; blocks thinking modes > `low` |
| [#6409](https://github.com/earendil-works/pi/issues/6409) | **Azure OpenAI Responses (store:false) 400s on multi-turn** — bare `rs_` id, no `encrypted_content` backfill | Reasoning models fail on follow-up turns | 3 comments; fixed in PR #6608 |
| [#6567](https://github.com/earendil-works/pi/issues/6567) | **anthropic-messages crashes** when `message_delta` omits `usage.input_tokens` | Affects Anthropic-compat providers (Minimax, etc.) | 2 comments; fixed in PR #6611 |

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#6533](https://github.com/earendil-works/pi/pull/6533) | fix: Codex compaction “Model not found” for gpt-5.6-luna | **Open** | Adds tier-suffixed slug mapping for compaction requests; unblocks #6477/#6615 |
| [#6584](https://github.com/earendil-works/pi/pull/6584) | fix: forward provider options to summary requests | **Open** | Passes `SimpleStreamOptions` to compaction/branch summaries; fixes auth/headers for summarization |
| [#6633](https://github.com/earendil-works/pi/pull/6633) | feat(agent): allow `message_end` hooks to replace finalized message | **Open** | Extensions can now redact PII/secrets or rewrite content before persistence |
| [#6594](https://github.com/earendil-works/pi/pull/6594) | feat: sqlite session storage | **Open** | Persistent, queryable session DB; adds `retainedTail` to compaction entries for O(1) recent-context access |
| [#6632](https://github.com/earendil-works/pi/pull/6632) | fix(coding-agent): correlate RPC extension results | **Closed** | Emits `extension_output`/`extension_error` correlated by RPC ID; typed `RpcClient` rejects failed responses |
| [#6618](https://github.com/earendil-works/pi/pull/6618) | Fix: don’t cache-write compaction or branch summaries | **Open** | Avoids pointless cache puts for one-off summary turns; saves token costs |
| [#6449](https://github.com/earendil-works/pi/pull/6449) | add `ResourceExhausted` as retryable error | **Closed** | Fixes #6364; NVIDIA NIM / Triton gRPC errors now trigger backoff |
| [#6608](https://github.com/earendil-works/pi/pull/6608) | backfill `encrypted_content` from `response.completed` for missing reasoning blocks | **Closed** | Fixes #6409; enables multi-turn reasoning on Azure `store:false` |
| [#6611](https://github.com/earendil-works/pi/pull/6611) | anthropic-messages: skip usage fields if empty | **Closed** | Fixes #6567; guards against missing `input_tokens` in delta |
| [#6599](https://github.com/earendil-works/pi/pull/6599) / [#6597](https://github.com/earendil-works/pi/pull/6597) | feat(memory): agent-driven `memory_save` tool + TUI/web

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-14

---

## 1. Today's Highlights

- **Multi-workspace daemon support lands in v0.19.10**: The stable release introduces multi-workspace capabilities across ACP transport, daemon workers, split-view sessions, and workspace-aware actions ([#6621](https://github.com/QwenLM/qwen-code/pull/6621), [#6635](https://github.com/QwenLM/qwen-code/pull/6635), [#6746](https://github.com/QwenLM/qwen-code/pull/6746)), a major architectural milestone for `qwen serve`.
- **VP mode becomes default rendering**: PR [#6871](https://github.com/QwenLM/qwen-code/pull/6871) enables virtualized viewport (VP) mode by default, resolving long-standing scroll issues on Linux and non-VP terminals.
- **SDK TypeScript v0.1.8 released**, bundling CLI v0.19.10 for downstream integrators.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.19.10** | Stable | Multi-workspace daemon support (ACP, workers, split-view, workspace-aware actions); YOLO mode preserved on `enter_plan_mode` ([#6630](https://github.com/QwenLM/qwen-code/pull/6630)); `ask_user` forwarding in CLI. |
| **v0.19.9-nightly.20260714.9dd8389eb** | Nightly | Incremental fixes atop v0.19.9; includes the YOLO mode fix and `ask_user` forwarding. |
| **sdk-typescript-v0.1.8** | SDK | Bundles CLI v0.19.10; updates for downstream TypeScript consumers. |

---

## 3. Hot Issues (Top 10 by Community Engagement)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#3803](https://github.com/QwenLM/qwen-code/issues/3803) **Daemon mode proposal & open decisions** | Foundational design doc (6-chapter series) for `qwen serve`; tracks implementation of daemon architecture. | 25 comments, 1 👍 — active discussion on scope and prioritization. |
| [#6378](https://github.com/QwenLM/qwen-code/issues/6378) **RFC: Multiple workspaces in one daemon** | Directly enables the multi-workspace feature shipped in v0.19.10; defines 1 daemon = N workspaces model. | 22 comments — high engagement on API/behavior decisions. |
| [#4514](https://github.com/QwenLM/qwen-code/issues/4514) **Daemon capability gaps & backlog** | Tracks remaining HTTP/SSE surface gaps post slash-command passthrough; prioritizes post-v0.16 work. | 15 comments — used as internal roadmap tracker. |
| [#3696](https://github.com/QwenLM/qwen-code/issues/3696) **Comprehensive hot-reload system** | Skills, extensions, MCP, LSP, config changes without restart; partially implemented, remainder tracked here. | 6 comments — cross-cutting DX improvement. |
| [#4748](https://github.com/QwenLM/qwen-code/issues/4748) **Optimize daemon cold start & fast-path latency** | Daemon boot + first session was ~2.5s vs CLI ~0.7s; listener path optimized, now targeting remaining overhead. | 5 comments — performance-critical for server deployments. |
| [#5979](https://github.com/QwenLM/qwen-code/issues/5979) **`/auth` config not persisted to new sessions** | Changing model provider via `/auth` works in current session but new sessions still 401; config persistence bug. | 5 comments, **CLOSED** — fix likely in v0.19.10. |
| [#5219](https://github.com/QwenLM/qwen-code/issues/5219) **Integration tests don't run on PR/merge** | Regressions only caught at nightly release; CI gap for e2e tests. | 5 comments, **CLOSED** — workflow fix in progress. |
| [#6312](https://github.com/QwenLM/qwen-code/issues/6312) **Reduce per-session daemon overhead** | Each `session/new` re-runs sync I/O despite shared event loop; tracking optimization. | 5 comments, **CLOSED** — work merged. |
| [#5239](https://github.com/QwenLM/qwen-code/issues/5239) **Subagent ↔ main session weak communication** | Subagent completion/hang not notified; `monitor` can't inspect subagent; workarounds needed. | 4 comments — blocked PR [#5795](https://github.com/QwenLM/qwen-code/pull/5795) enriches crash notifications. |
| [#4055](https://github.com/QwenLM/qwen-code/issues/4055) **Agent stuck in 10+ min thinking loop** | Simple request triggers infinite reasoning loop; model fails to respond or act. | 4 comments — core reasoning/turn-control issue. |

---

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| [#6846](https://github.com/QwenLM/qwen-code/pull/6846) | Open | **PDF vision bridge fallback**: Text-first PDF reading; on extraction failure/oversized pages, renders & transcribes via vision bridge. |
| [#6860](https://github.com/QwenLM/qwen-code/pull/6860) | In Review | **Structured channel memory**: Upgrades channel memory from append-only MD to versioned store with stable IDs, pagination, CRUD. |
| [#6815](https://github.com/QwenLM/qwen-code/pull/6815) | **Closed** | **Web Shell extension management page**: Responsive cards, search, capability views, update checks, enable/disable, uninstall. |
| [#6766](https://github.com/QwenLM/qwen-code/pull/6766) | Open | **Automated PR failure patrol**: Scans open PRs every 10min, surfaces failing CI ≥30min old, posts summaries. |
| [#6872](https://github.com/QwenLM/qwen-code/pull/6872) | Open | **Web Shell composer adaptive height**: Grows with long text/images, bounded by `min(350px, 40vh)`, CodeMirror owns scrolling. |
| [#6871](https://github.com/QwenLM/qwen-code/pull/6871) | Open | **VP mode default + cleanup**: `ui.useTerminalBuffer` → `true` by default; removes `bypassVpGate`; fixes scroll storms ([#5971](https://github.com/QwenLM/qwen-code/issues/5971), [#6149](https://github.com/QwenLM/qwen-code/issues/6149)). |
| [#6869](https://github.com/QwenLM/qwen-code/pull/6869) | **Closed** | **Shell non-zero exit = failure**: Preserves stdout/stderr/exit code; respected on history replay; web-shell shows localized failure. |
| [#6868](https://github.com/QwenLM/qwen-code/pull/6868) | Open | **Async stable release finalization**: Package publish + GH Release first; AI notes, changelog, bump PR in separate workflow. |
| [#2414](https://github.com/QwenLM/qwen-code/pull/2414) | Open | **ACP integration test overhaul**: Comprehensive suites for auth, sessions, tools, slash commands, telemetry; SDK bump to 0.16.1. |
| [#6561](https://github.com/QwenLM/qwen-code/pull/6561) | Open | **Web Shell Goals page + daemon `/goal` persistence**: Visual surface for `/goal`; fixes silent loss on daemon resume. |

---

## 5. Feature Request Trends (Distilled from Issues)

1. **Daemon as a multi-tenant server** — Multi-workspace, multi-session, hot-reloadable channels ([#6378](https://github.com/QwenLM/qwen-code/issues/6378), [#6010](https://github.com/QwenLM/qwen-code/issues/6010), [#5887](https://github.com/QwenLM/qwen-code/issues/5887)).
2. **Subagent observability & control** — Bidirectional notifications, crash context, `monitor` access, shared goals ([#5239](https://github.com/QwenLM/qwen-code/issues/5239), [#5795](https://github.com/QwenLM/qwen-code/pull/5795), [#6561](https://github.com/QwenLM/qwen-code/pull/6561)).
3. **Hot-reload everywhere** — Skills, extensions, MCP, LSP, config, channels without restart ([#3696](https://github.com/QwenLM/qwen-code/issues/3696), [#6010](https://github.com/QwenLM/qwen-code/issues/6010)).
4. **ACP-first integrations** — Streamable HTTP transport, Zed/JetBrains/Goose native support, comprehensive test coverage ([#4782](https://github.com/QwenLM/qwen-code/issues/4782), [#2414](https://github.com/QwenLM/qwen-code/pull/2414)).
5. **Memory & context hygiene** — Stale index after `/remember`, compaction loss, unbounded UI history ([#6487](https://github.com/QwenLM/qwen-code/issues/6487), [#2128](https://github.com/QwenLM/qwen-code/issues/2128)).
6. **Channel-native collaboration** — Persistent multiplayer agents in DingTalk/Feishu/Telegram (`qwen tag`), interactive cards ([#5887](https://github.com/QwenLM/qwen-code/issues/5887), [#6443](https://github.com/QwenLM/qwen-code/issues/6443)).
7. **Reasoning/turn control** — Standalone `</thinking>` handling ([#6849](https://github.com/QwenLM/qwen-code/issues/6849), [#6854](https://github.com/QwenLM/qwen-code/pull/6854)), unified `/effort` command ([#6072](https://github.com/QwenLM/qwen-code/pull/6072)).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence |
|------------|----------|
| **Daemon config not persisted across sessions** | [#5979](https://github.com/QwenLM/qwen-code/issues/5979) — `/auth` changes lost on new session (401). |
| **Integration tests run only nightly** | [#5219](https://github.com/QwenLM/qwen-code/issues/5219) — regressions merge green, surface days later. |
| **Subagent failures silent to main session** | [#5239](https://github.com/QwenLM/qwen-code/issues/5239) — no notification on hang/crash; `monitor` can't inspect. |
| **Agent reasoning loops on simple tasks** | [#4055](https://github.com/QwenLM/qwen-code/issues/4055) — 10+ min thinking with no output. |
| **Memory grows unbounded in long sessions** | [#2128](https://github.com/QwenLM/qwen-code/issues/2128) — UI history array never pruned. |
| **Ctrl+C exits CLI accidentally in PyCharm** | [#4586](https://github.com/QwenLM/qwen-code/issues/4586) — single press quits; Esc doesn't interrupt. |
| **Tool output truncated, not wrapped** | [#6814](https://github.com/QwenLM/qwen-code/issues/6814) — ellipsis hides file paths/commands. |
| **Insight report uses mixed UTC/local dates** | [#6835](https://github.com/QwenLM/qwen-code/issues/6835) — heatmap/streak wrong for non-UTC users. |
| **Trust-folder preview mutates cached config** | [#6831](https://github.com/QwenLM/qwen-code/issues/6831) — read-only check leaks unconfirmed state. |
| **`/update` false "up to date" on v0.19.9** | [#6857](https://github.com/QwenLM/qwen-code/issues/6857) — npm has 0.19.10 but CLI says current. |

---

*Generated from github.com/QwenLM/qwen-code data as of 2026-07-14. Links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-14

## 1. Today's Highlights
The v0.8.68 release candidate is nearing completion with multiple TUI polish issues resolved (underwater receipts, PTY mouse coverage, exec-stream receipts, terminal identity persistence). A critical performance regression in `@`-file completion on large non-workspace directories has been identified and a fix PR (#4367) opened with a wall-clock budget. The public site has been overhauled into a documentation-led portal with keyword search, and MiniMax Messages provider support has landed.

## 2. Releases
*No new releases in the last 24 hours. v0.8.68 release candidate prepared in [PR #4361](https://github.com/Hmbown/CodeWhale/pull/4361).*

## 3. Hot Issues

| Issue | Status | Why It Matters | Community Reaction |
|-------|--------|----------------|-------------------|
| [#4365](https://github.com/Hmbown/CodeWhale/issues/4365) `@` file watcher scans entire directory tree eagerly, causing terminal lag/freeze on large paths | **Open** | Performance blocker: `@`-mentioning large non-workspace dirs freezes TUI (reported on pwsh7). Root cause: eager full subtree walk in `Workspace::build_file_index`. | 1 comment; fix PR [#4367](https://github.com/Hmbown/CodeWhale/pull/4367) opened same day with wall-clock budget. |
| [#4368](https://github.com/Hmbown/CodeWhale/issues/4368) Override kimi baseUrl, warning of exseed context limit | **Open** | Provider config gap: custom `base_url` for Moonshot/Kimi not respected; context-limit warning may be incorrect for overridden endpoints. | 1 comment; highlights need for provider-route-aware context handling. |
| [#4345](https://github.com/Hmbown/CodeWhale/issues/4345) Key binding unfriendly, cannot be placed in terminal | **Closed** | UX friction: keybinding workflow not terminal-friendly (Chinese user report with screenshot). | 2 comments; closed but signals onboarding pain for non-English users. |
| [#4359](https://github.com/Hmbown/CodeWhale/issues/4359) v0.8.68: define parent-stop semantics for detached background agents | **Closed** | Agent UX clarity: ambiguous Esc/stop behavior for detached agents (continue vs cancel all vs ask). | Author (Hmbown); resolved in v0.8.68 RC. |
| [#4333](https://github.com/Hmbown/CodeWhale/issues/4333) Configured picker treats empty provider headers as configured | **Closed** | Config bug: `[providers.anthropic.http_headers]` empty table caused provider to appear “configured”. | Author (Hmbown); fixed in v0.8.68 RC. |
| [#4358](https://github.com/Hmbown/CodeWhale/issues/4358) v0.8.68: add PTY coverage for work-surface and approval mouse interactions | **Closed** | Test reliability: PTY suite lacked coverage for live work-surface clicks and stop-confirm mouse flows. | Author (Hmbown); resolved in v0.8.68 RC. |
| [#4357](https://github.com/Hmbown/CodeWhale/issues/4357) v0.8.68: finish underwater receipt settling and phase-aware ambient motion | **Closed** | TUI polish: receipt settling, phase-aware depth, one-shot fish response — must respect reduced-motion. | Author (Hmbown); resolved in v0.8.68 RC. |
| [#4356](https://github.com/Hmbown/CodeWhale/issues/4356) v0.8.68: complete versioned exec stream receipts and tool lifecycle metadata | **Closed** | Observability: versioned terminal receipts + tool lifecycle needed for replay, support, cost attribution. | Author (Hmbown); resolved in v0.8.68 RC. |
| [#4355](https://github.com/Hmbown/CodeWhale/issues/4355) v0.8.68: persist stateful terminal identity and restart limitations safely | **Closed** | Session integrity: restarted client must not mistake stale PID/local record for live shell. | Author (Hmbown); resolved in v0.8.68 RC. |

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#4367](https://github.com/Hmbown/CodeWhale/pull/4367) | **Open** | **Critical perf fix**: bounds `@`-completion file-index walk with a wall-clock budget (fixes #4365). Adds timeout to `Workspace::build_file_index` for non-workspace dirs. |
| [#4361](https://github.com/Hmbown/CodeWhale/pull/4361) | **Closed** | **v0.8.68 release candidate**: bundles underwater TUI finish, PTY mouse coverage, exec-stream receipts, terminal identity persistence, parent-stop semantics. |
| [#4354](https://github.com/Hmbown/CodeWhale/pull/4354) | **Closed** | **New provider**: MiniMax Messages support (global + China Base URLs), registers MiniMax-M3/M2.7 with context, modality, thinking, pricing metadata. |
| [#4352](https://github.com/Hmbown/CodeWhale/pull/4352) | **Closed** | MiniMax Messages-compatible route across provider registry, config, CLI, TUI, request client (precursor to #4354). |
| [#4362](https://github.com/Hmbown/CodeWhale/pull/4362) | **Closed** | **Site redesign**: documentation-led portal replaces marketing page; underwater visual system aligned with CWC typography. |
| [#4364](https://github.com/Hmbown/CodeWhale/pull/4364) | **Closed** | **Docs search**: client-side keyword search on `/docs` and FAQ pages (real-time filtering, EN/ZH, `/` shortcut). |
| [#4366](https://github.com/Hmbown/CodeWhale/pull/4366) | **Open** | **Brand consistency**: aligns user-visible strings to “Codewhale” wordmark across web (repo slug unchanged). |
| [#4360](https://github.com/Hmbown/CodeWhale/pull/4360) | **Closed** | **BSD support**: fixes “browser opening unsupported” on NetBSD/FreeBSD/OpenBSD/DragonFly by adding BSD platform gates. |
| [#4351](https://github.com/Hmbown/CodeWhale/pull/4351) | **Open** | **Cost attribution**: binds offline scorecard prices to exact provider/model routes; fails closed for OAuth/local/unknown routes. |
| [#4342](https://github.com/Hmbown/CodeWhale/pull/4342) | **Closed** | **Dependency**: `rmcp` 1.8.0 → 2.2.0 (MCP Rust SDK major update). |

## 5. Feature Request Trends
1. **Provider extensibility** — Custom base URLs (#4368), new provider integrations (MiniMax #4354/#4352), route-aware pricing (#4351).
2. **TUI performance at scale** — Lazy/eager loading trade-offs for large workspaces (#4365), reduced-motion compliance (#4357).
3. **Agent lifecycle clarity** — Detached vs foreground stop semantics (#4359), terminal session persistence across restarts (#4355).
4. **Observability & replay** — Versioned exec-stream receipts, tool lifecycle metadata (#4356), cost attribution per provider route (#4351).
5. **Documentation-first UX** — Site redesign (#4362), keyword search (#4364), BSD link-handling (#4360).

## 6. Developer Pain Points
- **`@`-completion freeze on large dirs** — Immediate full-tree walk blocks terminal; urgent fix in #4367.
- **Provider config opacity** — Custom `base_url` ignored; context-limit warnings not route-aware (#4368).
- **Keybinding discoverability** — Non-English users struggle to map keys to terminal actions (#4345).
- **Detached agent stop ambiguity** — Esc behavior unclear: cancel all? continue? ask? (#4359).
- **Session persistence fragility** — Restarted client may reuse stale PID/shell record (#4355).
- **Missing BSD link support** — Clicking links in TUI failed on *BSD until #4360.
- **Cost tracking gaps** — Scorecard prices not bound to exact provider/model routes (#4351).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*