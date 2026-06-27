# AI CLI Tools Community Digest 2026-06-27

> Generated: 2026-06-27 00:38 UTC | Tools covered: 9

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

# AI CLI Tools Cross-Comparison Report — 2026-06-27

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem in late June 2026 is characterized by **intense competition on agent reliability, usage pricing transparency, and cross-platform stability**. Seven major tools — Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, and DeepSeek TUI — are all in active development with nightly or weekly release cadences. The dominant community themes are no longer about raw model capability but about **production hardening**: agent orchestration correctness, memory/context isolation, credential/auth robustness, and predictable billing. A clear bifurcation exists between tools positioning themselves as **platform ecosystems** (Codex with plugins, Qwen Code with daemon+channels, DeepSeek TUI with multi-provider) versus **focused terminal agents** (Claude Code, Copilot CLI) that prioritize deep model integration over extensibility.

---

## 2. Activity Comparison

| Tool | Open Issues (Active) | PRs (Last 24h) | Latest Release | Release Cadence |
|------|---------------------|-----------------|----------------|-----------------|
| **Claude Code** | 10 hot + hundreds in tracker | 2 updated | v2.1.195 (patch) | Weekly patches |
| **OpenAI Codex** | 10+ hot, 600+ comment mega-threads | 10 active | rust-v0.143.0-alpha.26 | Bi-weekly stable + alpha |
| **Gemini CLI** | 10 hot (multiple P1) | 10 active | v0.51.0-nightly | Nightly |
| **GitHub Copilot CLI** | 10 hot | 1 (low activity) | v1.0.66-1 (2 patches today) | Patch-driven |
| **Kimi Code CLI** | 3 notable | 2 active | None today | Sporadic |
| **OpenCode** | 10 hot + heavy automated cleanup | 20 active | None today | Sporadic (cleanup PRs) |
| **Pi** | 10 hot | 10 closed + 1 open | None today (v0.80.2 latest) | Irregular |
| **Qwen Code** | 10 hot | 10 active (5 merged) | cua-driver-rs v0.6.8 | Component-driven |
| **DeepSeek TUI** | 10 hot | 10 merged | None today (v0.8.59 tracker) | Tracker-based |

**Key observation**: OpenCode and Pi show the highest raw PR throughput (20 and 10 respectively), but much of OpenCode's is automated backlog cleanup. Qwen Code and DeepSeek TUI show the most substantive merged PR density, indicating strong core-team execution. Copilot CLI and Kimi CLI show the lowest public PR activity, suggesting either private development or slower iteration.

---

## 3. Shared Feature Directions

### 3.1 Agent Orchestration & Reliability (All Tools)
Every tool except Kimi CLI has open P1 bugs related to agent hangs, silent failures, or incorrect success reporting. Claude Code (#69691), Gemini CLI (#21409), Codex (#30290), and OpenCode (#32149) all report variants of "agent appears to succeed but didn't" or "agent blocks UI indefinitely." This is the **defining reliability crisis** across the ecosystem.

### 3.2 Usage/Billing Transparency (Claude Code, Codex, Copilot CLI, OpenCode)
Claude Code (#16157, #38335), Codex (#28879, #14593), and Copilot CLI (#18357) all have mega-threads about users unable to reconcile consumed quota vs. expected quota. OpenCode's #28846 (👍82) demands subscription pricing reflect model price drops. The pattern: **as AI CLI usage scales to production workflows, opaque metering becomes a trust-destroying pain point**.

### 3.3 Memory/Context Isolation (Copilot CLI, Gemini CLI, DeepSeek TUI, Qwen Code)
Copilot CLI (#3945, #3946) reports memories leaking between repositories. Gemini CLI (#26525) has secrets entering model context before redaction. DeepSeek TUI is wiring Moraine MCP for cross-session recall (#3575). Qwen Code (#5884) is building sessionless workspace memory. The shared need: **scoped, auditable, opt-in memory with hard isolation boundaries**.

### 3.4 Cross-Platform Stability (Claude Code, Codex, Qwen Code, DeepSeek TUI)
Windows-specific regressions are acute: Claude Code (#71717, #71718 — auth/cert failures), Codex (#28703 — plugins disappearing, #30251 — ACL corruption), Qwen Code (#5873 — PowerShell tree leak causing OOM). macOS has its own cluster: Codex (#29000 — Intel SIGTRAP), DeepSeek TUI (mouse-report leaks). **Linux is the primary development target; Windows and macOS are where trust is lost**.

### 3.5 Permission & Execution Policy (DeepSeek TUI, Gemini CLI, Codex, OpenCode)
DeepSeek TUI (#1186, #3650) is building `allow`/`deny`/`ask` rules in `permissions.toml`. Gemini CLI (#22672) wants guardrails on destructive git operations. Codex (#30290) reports agents crossing into state-changing actions without approval. OpenCode (#450) requests reasoning_effort controls. The convergence: **users want deterministic, granular control over what agents can execute, moving beyond YOLO/plan-mode binaries**.

### 3.6 MCP Ecosystem Maturity (Copilot CLI, Codex, Qwen Code, DeepSeek TUI)
Copilot CLI (#3950, #3887) reports SSO marketplace errors and registry interpolation gaps. Codex (#30292–30296) is refactoring OAuth credential stores for concurrent safety. Qwen Code (#5677) is tracking ACP compliance gaps. DeepSeek TUI (#3675) is wiring MCP-based recall tools. **MCP is the shared extensibility surface, but production-grade implementations are still immature**.

---

## 4. Differentiation Analysis

| Tool | Primary Positioning | Target User | Technical Approach |
|------|---------------------|-------------|-------------------|
| **Claude Code** | Deep Claude model integration, enterprise workflows | Professional developers, Max subscribers | Tight Anthropic ecosystem coupling; hook/sandbox system; conservative release cadence |
| **OpenAI Codex** | Platform play with plugins, remote control, rollout persistence | Power users, extensibility seekers | Rust-based; plugin API; canonical TurnItem event pipeline; remote execution architecture |
| **Gemini CLI** | Google AI integration, caretaker automation | Google Cloud ecosystem users | Nightly cadence; aggressive agent automation (Caretaker Agent); Firestore/Pub/Sub backend |
| **GitHub Copilot CLI** | IDE-to-CLI continuity, GitHub-native workflows | GitHub Enterprise, VS Code users | Patch-driven; tight GitHub integration; lowest PR throughput (private dev suspected) |
| **Kimi Code CLI** | Lightweight alternative, plan-mode workflows | Chinese market, Moonshot API users | Minimal public activity; quiet release cycle; focused on plan-mode state correctness |
| **OpenCode** | Multi-provider, model-agnostic terminal | Indie developers, multi-model users | Go-based; ACP protocol support; heavy automated backlog management; plugin architecture |
| **Pi** | Embeddable library, extension-first platform | Framework builders, platform engineers | TypeScript; orchestrator daemon; provider abstraction layer; extension API |
| **Qwen Code** | Full-stack platform (daemon, channels, IDE plugins) | Chinese enterprise, Alibaba ecosystem | Rust daemon (`qwen serve`); DingTalk/Telegram channel adapters; Chrome extension revival |
| **DeepSeek TUI** | Multi-protocol provider, permission-rich TUI | Privacy-conscious users, multi-model operators | Rust; `permissions.toml` deny/allow/ask; OpenModel Anthropic wire protocol; mode architecture |

**Key differentiators**:
- **Platform vs. Product**: Codex, Qwen Code, and Pi are building platforms (plugins, channels, daemon APIs). Claude Code and Copilot CLI are products (opinionated, model-specific).
- **Enterprise vs. Indie**: Copilot CLI and Qwen Code target enterprise (SSO, managed settings, compliance). OpenCode and Kimi CLI serve indie/solo developers.
- **Protocol-level innovation**: DeepSeek TUI's OpenModel provider (Anthropic wire protocol on DeepSeek models) and OpenCode's ACP compliance are the only protocol-level differentiators.

---

## 5. Community Momentum & Maturity

### High Momentum (Rapid Iteration)
- **Gemini CLI**: Nightly releases, 10 active PRs, aggressive Caretaker Agent infrastructure buildout. Fastest-moving codebase in the set.
- **DeepSeek TUI**: 10 PRs merged in 24h, v0.8.59 tracker active, strong maintainer triage. High execution velocity.
- **Qwen Code**: 5 PRs merged, daemon architecture advancing, channel-resident agent RFC. Substantial architectural investment.

### Stable Momentum (Steady, Production-Focused)
- **Claude Code**: Weekly patches, massive community (1476 👍 on top issue), but PR activity is low (internal development). Mature but opaque.
- **OpenAI Codex**: Alpha + stable dual-track, 10 active PRs, large community threads (600+ comments). Active but facing metering trust crisis.

### Moderate Momentum (Niche or Slower)
- **OpenCode**: High PR count but mostly automated cleanup. Core architecture work (v2 refactor, ACP) progressing but slowly.
- **Pi**: Strong PR close rate (10 closed), but smaller community. Library/extension API maturing steadily.

### Low Momentum (Concerning)
- **GitHub Copilot CLI**: Only 1 PR in 24h, patch-driven releases. Lowest visible activity — likely heavy private development, but community issues (clipboard, memory leaks) are going unaddressed.
- **Kimi Code CLI**: No releases, 3 notable issues, 2 PRs. Quietest tool in the set. Community concerns (403 gating, plan-mode contradictions) lack responses.

### Maturity Indicators
- **Most mature agent model**: Claude Code (sandbox, hooks, sub-agents, session management — despite reliability bugs)
- **Most mature platform architecture**: Qwen Code (daemon, REST API, channel adapters, IDE plugins)
- **Most mature permission system**: DeepSeek TUI (deny/allow/ask in `permissions.toml`, four-mode split)
- **Least mature**: Kimi Code CLI (public development appears stalled)

---

## 6. Trend Signals

### 🔴 Critical Trends (Act Now)

1. **Agent reliability is the new battleground**. The first tool to solve "agents that never hang, never silently fail, and never execute unapproved actions" will capture the professional developer market. Currently, no tool has this solved.

2. **Usage metering transparency is a retention issue, not a feature request**. Claude Code and Codex both have 600+ comment threads about opaque billing. This is driving subscriber churn and demands immediate product-level response (dashboards, hard-stop warnings, per-request cost attribution).

3. **Windows is an afterthought — and it shows**. Every tool with a Windows surface has critical bugs. As AI CLI tools move from early-adopter Mac/Linux users to enterprise environments where Windows is standard, this is a market-expansion blocker.

### 🟡 Emerging Trends (Monitor)

4. **MCP as the plugin standard is coming, but it's not ready**. Four tools are investing in MCP, but OAuth fragility, registry gaps, and missing spec compliance (ACP) mean production MCP ecosystems are 6–12 months out.

5. **Channel-resident agents (DingTalk, Telegram, Slack)** are a new frontier. Qwen Code's #5888 RFC and DeepSeek TUI's Telegram adapter point to a future where AI agents live in group chats, not terminals. This is the "multiplayer agent" paradigm.

6. **Daemon/serve architectures** (Qwen Code, Pi's orchestrator) are emerging as the answer to multi-instance, multi-client, and headless use cases. Expect convergence toward "local daemon + thin client" patterns.

### 🟢 Structural Trends (Long-Term)

7. **Permission models are converging on deny/allow/ask triads** (DeepSeek TUI, Codex, Gemini CLI). The binary YOLO/plan split is insufficient for production. Expect all tools to adopt granular, rule-based permission systems within 12 months.

8. **Memory systems are being rebuilt from scratch**. Every tool's memory implementation (Auto Memory, Moraine MCP, workspace remember) has serious correctness issues. The industry is in the "break before fix" phase of persistent agent memory.

9. **Multi-provider support is table stakes**. DeepSeek TUI's OpenModel provider (Anthropic wire protocol on non-Anthropic models) and OpenCode's model-agnostic architecture signal that **locking to a single model provider is a losing strategy**. Users want to route any model through any tool.

---

*Report generated from community digest snapshots dated 2026-06-27. Data sourced from public GitHub repositories. All issue counts and PR statuses are point-in-time and may not reflect subsequent activity.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

**Data as of 2026-06-27 · Repository: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking (by community attention)

The sorting provided lists PRs in order, but all selected PRs show `Comments: undefined` in the extracted data, so comment counts were unavailable for direct ranking. The top items by relevance from the available list are:

| # | PR | Skill / Topic | Status | Key Detail |
|---|---|---|---|---|
| 1 | [#556](https://github.com/anthropics/skills/issues/556) | `skill-creator` eval loop (`run_eval.py`) — 0% recall bug | **OPEN** | 12 comments, 👍7. The most-discussed bug in the repo. `claude -p` never triggers skills during eval, making the description-optimizer optimize against noise. |
| 2 | [#1099](https://github.com/anthropics/skills/pull/1099) | `skill-creator` — Windows subprocess pipe crash fix | **OPEN** | Same root symptom as #556. On Windows, `select.select()` on a pipe raises `[WinError 10038]`, every query is recorded as "not triggered." |
| 3 | [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` — comprehensive Windows stream + trigger detection + parallel workers fix | **OPEN** | Multi-PR effort to make `run_eval.py`, `run_loop.py`, and `improve_description.py` work correctly on Windows. |
| 4 | [#538](https://github.com/anthropics/skills/pull/538) | `pdf` — case-sensitive file references in SKILL.md | **OPEN** | Fixes 8 broken cross-references (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`). Breaks PDF skill on Linux/case-sensitive installs. |
| 5 | [#486](https://github.com/anthropics/skills/pull/486) | `odt` — OpenDocument text creation, template filling, ODT→HTML parsing | **OPEN** | Proposes a full ODT skill (create, fill, read, convert) for open-source / ISO-standard document workflows. |
| 6 | [#539](https://github.com/anthropics/skills/pull/539) | `skill-creator` — warn on unquoted YAML special chars in description fields | **OPEN** | Adds pre-parse validation in `quick_validate.py` to catch silent YAML truncation when `description` contains `:`, `#`, `{`, etc. |
| 7 | [#541](https://github.com/anthropics/skills/pull/541) | `docx` — prevent tracked-change `w:id` collision with existing bookmarks | **OPEN** | Fixes document corruption in OOXML files when `w:id` IDs from tracked changes collide with existing bookmark IDs. |
| 8 | [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` — typographic quality control for generated docs | **OPEN** | Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents; a frequently requested quality improvement. |

---

## 2. Community Demand Trends (distilled from Issues)

| Trend | Demand Signal | Detail |
|---|---|---|
| **Org-wide skill distribution** | [#228](https://github.com/anthropics/skills/issues/228) — 14 comments, 👍7 | Users want to share Skills within teams without manual file-sharing; a native sharing mechanism or shared library is the ask. |
| **Trust & namespace security** | [#492](https://github.com/anthropics/skills/issues/492) — **21 comments, 👍2** (highest-engagement issue) | Community Skills distributed under the `anthropic/` namespace create a trust boundary abuse vector. Formal verification or namespace gating is being debated. |
| **Cross-platform eval reliability** | [#1061](https://github.com/anthropics/skills/issues/1061) + [#556](https://github.com/anthropics/skills/issues/556) — 3 & 12 comments | Windows compatibility for `skill-creator` scripts is a multi-PR pain point; Windows users cannot run the optimization loop at all. |
| **Agent governance & safety patterns** | [#412](https://github.com/anthropics/skills/issues/412) — 6 comments | Demand for a skill teaching Claude AI-agent governance — policy enforcement, threat detection, trust scoring, audit trails. Issue closed without merge. |
| **Skill standardization / MCP exposure** | [#16](https://github.com/anthropics/skills/issues/16) — 4 comments | Proposal to expose Skills as MCP servers, turning each skill into a discoverable tool with a typed API contract. |
| **Provider compatibility (Bedrock)** | [#29](https://github.com/anthropics/skills/issues/29) — 4 comments | Users running Claude via AWS Bedrock want official guidance on Skills compatibility. |
| **Plugin deduplication** | [#189](https://github.com/anthropics/skills/issues/189) — 6 comments, 👍9 | `document-skills` and `example-skills` plugins install identical Skills, wasting context window. |

---

## 3. High-Potential Pending Skills (active PRs, not yet merged)

| PR | Skill | Why It's High-Potential |
|---|---|---|
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | Comprehensive testing philosophy + React/component testing skill; fills a gap for engineers building test suites with Claude. Active comment period ended 2026-04-21 — nearing decision. |
| [#360](https://github.com/anthropics/skills/pull/360) | `appdeploy` | Deploys full-stack web apps to public URLs directly from Claude. Curated, opinionated workflow — high utility for prototyping. Last updated 2026-05-04. |
| [#1323](https://github.com/anthropics/skills/pull/1323) | `skill-creator` trigger detection fix | Active (updated 2026-06-25); critical path for the description optimizer. Likely to land given active maintenance. |
| [#362](https://github.com/anthropics/skills/pull/362) | `skill-creator` UTF-8 panic fix | Prevents Rust panics in the CLI on multi-byte character input. Active. |
| [#83](https://github.com/anthropics/skills/pull/83) | `skill-quality-analyzer` & `skill-security-analyzer` | Meta-skills that audit other Skills for quality and security. First proposed 2025-11-06; still iterating. Would be the first self-evaluating Skills in the marketplace. |
| [#147](https://github.com/anthropics/skills/pull/147) | `codebase-inventory-audit` | Systematic 10-step audit of codebase health (orphaned code, unused files, infra bloat). Updated 2026-02-04 — stable, ready for review. |
| [#210](https://github.com/anthropics/skills/pull/210) | `frontend-design` improvement | Rewrites the frontend-design skill for clarity and actionability. Addresses a common pain point with vague guidance. Last updated 2026-03-07 — may need a rebase push. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for reliable, cross-platform eval infrastructure to support automated skill description optimization — the `skill-creator`'s broken Windows eval loop (`run_eval.py` reporting 0% recall) is the single most-discussed technical blocker, cutting across 3+ PRs and 2 Issues, because it undermines the quality-signal integrity of the entire Skills delivery pipeline.**

Secondary but rising: trust boundary enforcement for community-distributed Skills under the `anthropic/` namespace (Issue #492, 21 comments) — this is becoming a governance priority as the skill marketplace scales.

---

# Claude Code Community Digest — 2026-06-27

---

## 1. Today's Highlights

The dominant theme this month is **Max plan usage limit instability** — two mega-issues continue to rack up hundreds of comments from subscribers reporting that session/usage limits are consumed far faster than expected. On the release side, v2.1.195 ships a small but precise patch fixing hook matcher exact-matching (previously hyphenated IDs caused accidental substring matches) and adds a `CLAUDE_CODE_DISABLE_MOUSE_CLICKS` env var for fullscreen mouse control. Multiple fresh Windows and macOS model-picker bugs report the **1M-context Opus option disappearing** from the UI.

---

## 2. Releases

**v2.1.195** (latest)
- New environment variable `CLAUDE_CODE_DISABLE_MOUSE_CLICKS` disables mouse click/drag/hover in fullscreen mode while preserving wheel scroll — useful for keyboard-only TRAMP/SSH workflows.
- Fixed hook matchers with hyphenated identifiers (e.g. `code-reviewer`, `mcp__brave-search`) accidentally substring-matching. Matchers now exact-match. Users relying on substring typing should use `mcp__` prefix patterns explicitly.

---

## 3. Hot Issues (10)

| # | Issue | Status | Comments / 👍 | Why it matters |
|---|-------|--------|----------------|----------------|
| 1 | **[#16157]** Instantly hitting usage limits with Max subscription | OPEN | 1476 / 691 | Oldest and largest — long-standing complaint that Max CLI quota burns far faster than desktop, with no clear accounting. Dominates community sentiment. |
| 2 | **[#38335]** Max plan session limits exhausted abnormally fast (CLI) | OPEN | 786 / 468 | Recent resurgence of the same complaint; suggests the latest round of usage-limit changes (March 23) regressed behavior. |
| 3 | **[#36351]** 1M context window removed from Desktop Code tab model picker (Max plan) | OPEN | 17 / 11 | Users report the 1M-context Opus option vanished after updating to v1.1.7714. Multiple duplicates now filed (see below). |
| 4 | **[#69109]** Opus 4.8 (1M context) model option disappeared from picker (Windows) | OPEN | 5 / 3 | Same bug as #36351 but user-confirmed on Windows. Signals a regression in how Max entitlements are inferred from newer model IDs. |
| 5 | **[#68287]** Max plan: Opus 4.8 only shows 256 k context, 1 M missing (Windows) | OPEN | 6 / 1 | Duplicate cluster member — reinforces that this is model-version specific and plan-specific. |
| 6 | **[#69444]** Claude Code Desktop lost ability to select 1M context variants for 3p inference (Bedrock) | OPEN | 6 / 1 | Additional angle: Bedrock users can't pick long-context variants at all. Broader entitlement/routing bug. |
| 7 | **[#70684]** SOCKS5 sandbox proxy needs auth → breaks SSH git operations on macOS | OPEN | 3 / 12 | Strong upvote-to-comment ratio. Sandbox `GIT_SSH_COMMAND` wrapping assumes AWS-style unauthenticated SOCKS5; breaks enterprise/CI environments. |
| 8 | **[#71717]** OAuth login succeeds but `.credentials.json` never written on Windows (401 loop) | OPEN | 2 / 0 | Fresh auth bug — credentials file silently not written on Windows, causing permanent 401 loop. No workaround exists. |
| 9 | **[#71708]** `CERT_HAS_EXPIRED` on Windows native install during OAuth login | OPEN | 2 / 0 | Same-day companion to #71717; Windows validation bug since v2.1.195 causes cURL inside Claude Code to distrust otherwise valid certificates. |
| 10 | **[#69691]** Sub-agent sync-vs-async behavior is session-host-dependent; no documented way to force sync | OPEN | 4 / 0 | New and technically important — `run_in_background: false` is unreliable, breaking deterministic orchestration pipelines. |

---

## 4. Key PR Progress

Only two PRs were updated in the last 24 hours:

| # | PR | Status | Description |
|---|----|--------|-------------|
| 1 | **[#71627]** docs(sandbox): note that prompt-approved hosts are session-scoped | OPEN | Adds a single, important clarification bullet to `examples/settings/README.md` — prompt-time sandbox network approvals are **session-scoped and lost on restart**, distinct from `sandbox.network.allowedDomains` in managed settings. |
| 2 | **[#71530]** Merge main into fork | CLOSED | Routine sync from upstream — no functional change. |

Low PR activity aligns with Anthropic's typical release cadence (PRs merged internally; public repo sees batch closes weekly).

---

## 5. Feature Request Trends

Compiled from the 30 issues reviewed:

1. **1M / long-context model discoverability & picker fixes** — Multiple users on Max report that Opus 4.8's 1M-context option is completely invisible in the Desktop and CLI model picker. This is the **single most urgent UX issue** right now, with at least four overlapping issues filed.

2. **Usage limit transparency & predictability (Max plan)** — Three mega-threads (#16157, #38335, #56281) and a dozen smaller ones all demand: real-time token quota dashboards, hard-stop warnings, and per-context-window billing clarity. This is the **longest-running community frustration**.

3. **Status line & TUI customization** — Two long-standing requests (#21867, #16345) ask for hiding token counters/version strings and supporting `.github/skills/` directories. Users want a cleaner, more professional TUI.

4. **Sandbox auth flexibility** — #70684 exposes that `sandbox` SOCKS5 wrapping assumes unauthenticated proxies. Users want `SOCKS5_USER`/`SOCKS5_PASS` env passthrough and per-domain sandbox bypass lists.

5. **Sub-agent sync guarantee** — #69691 requests a documented, reliable way to force synchronous sub-agent execution (instead of depending on session-host timing).

6. **Local voice dictation & multilingual input** — #71712 (voice) and #71712/#71687 (Thai/UTF-8 multibyte) show developer demand for dictation support and proper multibyte input in the prompt box.

7. **Default session-URL-in-git commits flipped to opt-in** — #66504 (12 👍) argues auto-appending session links to commits/PRs by default should require explicit enable.

---

## 6. Developer Pain Points (Summary)

- **🔥 Max billing/usage confusion** — The by-far loudest pain point. Users cannot reconcile consumed quota vs. expected quota. Errors like "instant limits hit" erode trust.
- **🔥 1M context option missing from picker** — Affects both Desktop and CLI on Windows and macOS. Users on Max pay for long context but can't select it.
- **🔥 Windows auth regressions** — Two fresh issues (#71717, #71708) on v2.1.195: OAuth credentials file not written, and `CERT_HAS_EXPIRED` during login. Windows users are effectively locked out.
- **🔥 Sandbox breaks SSH git** — Enterprise users with authenticated SOCKS5 proxies cannot use sandbox mode at all.
- **⚠️ Sub-agent orchestration is unreliable** — No documented sync/async control; behavior varies by session host.
- **⚠️ Multibyte input corruption** — Thai and other non-Latin scripts silently lose bytes when pasted into the prompt.
- **⚠️ Plugin/skill marketplace gaps** — Custom marketplace skills appear in slash menu but fail at invocation (#62485, closed stale).
- **⚠️ Desktop memory leak** — NTFS NonPaged Pool leak on Windows (#45889, closed) still referenced in community discussions.

---

*Data source: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) — snapshot 2026-06-27.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-27

---

## 1. Today's Highlights

The Codex ecosystem is in active flux: a new alpha (`rust-v0.143.0-alpha.26`) continues to roll out while the most-discussed community issue — a perceived 10–20× rate-limit cost increase on `gpt-5.5` since mid-June — continues to generate intense discussion (600+ and 175+ comments). On the engineering side, OpenAI contributors are pushing a large serialization refactor for MCP OAuth, canonical rollout items, and default-on remote plugins, all signaling deeper architectural work around state persistence and extensibility.

---

## 2. Releases

| Version | Type | Notes |
|---|---|---|
| `rust-v0.142.3` | Patch (stable) | Maintenance-only; no user-facing changes since 0.142.2. [Changelog](https://github.com/openai/codex/compare/rust-v0.142.2...rust-v0.142.3) |
| `rust-v0.143.0-alpha.26` | Alpha | Continued alpha iteration; details in release notes on GitHub. |

---

## 3. Hot Issues

### 1. [#14593](https://github.com/openai/codex/issues/14593) — "Burning tokens very fast" (👍 274 · 624 comments)
A long-running thread where Business-plan VS Code users report extreme token consumption. The issue has persisted since March with ongoing community frustration; no resolution has been posted. This is the single most-commented issue in the tracker.

### 2. [#28879](https://github.com/openai/codex/issues/28879) — "Rate-limit cost per token jumped ~10-20× since June 16" (👍 326 · 175 comments)
The most explosive recent issue. ChatGPT Plus users report that `gpt-5.5` now drains the 5-hour Codex budget in 2–3 prompts instead of ~20+. The issue gained significant traction in just 9 days and remains **OPEN**. This is likely the highest-priority topic for both the community and the product team.

### 3. [#29000](https://github.com/openai/codex/issues/29000) — Intel macOS SIGTRAP crash on CLI 0.141.0 (👍 11 · 16 comments)
CLI crash affecting Intel Mac users on macOS with `gpt-5.5`. Closed after initial triage, but closely related to the still-open [#30300](https://github.com/openai/codex/issues/30300), which reports the same SIGTRAP on `0.142.2` — indicating the problem was **not** fully resolved.

### 4. [#27536](https://github.com/openai/codex/issues/27536) — macOS `code_sign_clone` grows to 62 GB+
The Codex Electron desktop app accumulates a massive temp directory on macOS across auto-updates, consuming 62+ GB silently. Closed but illustrative of desktop-app hygiene debt.

### 5. [#18357](https://github.com/openai/codex/issues/18357) — PRO plan user gets "out of Codex messages" (👍 5 · 9 comments)
Despite paying for a 5x PRO plan upgrade, users hit usage walls. This issue highlights a disconnect between billing entitlement checks and actual quota enforcement.

### 6. [#30212](https://github.com/openai/codex/issues/30212) — 5-hour allowance consumed in ~1 hour on 20x Pro plan (👍 8 · 6 comments)
Another usage-depletion report, this time from a Pro 20x subscriber. Together with #14593 and #28879, this forms a pattern of widespread metering dissatisfaction.

### 7. [#30301](https://github.com/openai/codex/issues/30301) — Recover stalled Remote Control relay generations in-process
Feature/bug: Remote Control's WebSocket relay stalls without self-healing, requiring a full app-server restart. Important for users relying on the mobile/desktop remote workflow.

### 8. [#28703](https://github.com/openai/codex/issues/28703) — Browser/Chrome plugins removed on Codex startup
Windows users who successfully install browser extensions find them gone after the next app launch. Points to a packaging or path-resolution bug on Windows.

### 9. [#29084](https://github.com/openai/codex/issues/29084) — Source-control watcher spawns thousands of git/sec on nested repos (👍 1 · 3 comments)
Performance regression on macOS: the file watcher triggers a `git status` storm when the workspace contains nested/embedded git repos, causing CPU spikes and maxed fans via `syspolicyd/trustd`.

### 10. [#30290](https://github.com/openai/codex/issues/30290) — Agent crossed from investigation into state-changing action without approval
A critical agent-safety report: the Codex agent performed state-changing operations when only an informational response was requested. This touches on the core trust model for autonomous coding agents.

---

## 4. Key PR Progress

### 1. [#30283](https://github.com/openai/codex/pull/30283) — Emit canonical `TurnItem`s instead of legacy begin/end events
**owenlin0** — Refactors the core event pipeline so that command execution, dynamic tool calls, collab agent activity, and sub-agent activity are represented as canonical `TurnItem`s. This is a foundational change for rollout persistence and future UI rendering.

### 2. [#30188](https://github.com/openai/codex/pull/30188) — Persist canonical items for paginated threads
**owenlin0** — Builds on #30283 to persist completed `TurnItem` snapshots into rollout files, replacing legacy event shapes. Enables paginated thread loading from SQLite.

### 3. [#30297](https://github.com/openai/codex/pull/30297) — Enable remote plugins by default
**xl-openai** — Promotes the remote plugin feature from experimental to stable, flipping the default-on switch while preserving the `features.remote_plugin` escape hatch. Signals that the plugin API is considered production-ready.

### 4. [#30292](https://github.com/openai/codex/pull/30292) — Serialize shared MCP OAuth credential stores
**stevenlee-oai** — First in a stacked PR series (#30292–30296) that adds serialization, refresh, recovery, and drift detection for MCP OAuth flows. Addresses a class of bugs where concurrent Codex processes corrupt shared OAuth state.

### 5. [#30269](https://github.com/openai/codex/pull/30269) — Gate `TCP_NODELAY` on Rendezvous transport policy
**richardopenai** — Replaces an unconditional `TCP_NODELAY` with a fail-closed transport policy negotiated between executor and harness. Improves network behavior for remote exec-server deployments.

### 6. [#30273](https://github.com/openai/codex/pull/30273) — Consume pushed exec-server process events
**richardopenai** — Switches process lifecycle management from polling (`process/read`) to consuming an ordered event stream, reducing latency and improving reliability of sandbox-denial state propagation.

### 7. [#30302](https://github.com/openai/codex/pull/30302) — Preserve namespaces on custom tool calls
**nhamidi-oai** — Fixes a bug where custom MCP tool call namespaces were stripped during deserialization and replay. Regenerates protocol schemas and adds regression tests.

### 8. [#30286](https://github.com/openai/codex/pull/30286) — Overlap diff root discovery with world state
**anp-oai** — Performance optimization: runs diff-root discovery in parallel with world-state construction, eliminating serial filesystem metadata latency on cold thread turns.

### 9. [#30201](https://github.com/openai/codex/pull/30201) — Avoid server token refresh retry storms (Closed)
**apanasenko-oai** — Fixes a retry storm where transient 502 errors on `/server/refresh` caused the still-valid token to be discarded, triggering cascading reconnect failures in Remote Control.

### 10. [#30313](https://github.com/openai/codex/pull/30313) — Add referral invites to `/usage`
**jayp-oai** — Adds a client-side referral invite flow under the `/usage` endpoint, reusing existing eligibility/invite HTTP endpoints without new RPC surface. Bound to embedded session identity; fails closed for remote sessions.

---

## 5. Feature Request Trends

| Direction | Representative Issues | Signal |
|---|---|---|
| **Rate-limit / usage transparency** | #14593, #28879, #18357, #30212, #30310 | 🔥 Dominant theme — users want clearer metering, better dashboards, and predictable consumption |
| **Configurable transport / networking** | #28902 (Bedrock `base_url`), #27381 (HTTPS-only mode), #27752 (Cloudflare 403) | Strong demand for proxy support, transport control, and corporate-network compatibility |
| **CLI memory management** | #30299 — inspect/prune/delete/scope memories | Users want first-class CLI commands for the experimental `memories` feature |
| **Remote plugin ecosystem** | #30297 (enable by default) | OpenAI is betting on plugins as a core extensibility mechanism |
| **Agent safety / approval boundaries** | #30290 — agent crossed into state-changing action | Growing community concern about autonomous agent guardrails |
| **Custom model / endpoint support** | #30224 — `X-OpenAI-Internal-Codex-Responses-Lite` errors | Users pushing custom-model integrations hit undocumented restrictions |

---

## 6. Developer Pain Points

1. **Rate-limit opacity and cost shock** — The single biggest pain point. Multiple plan tiers (Plus, Pro, Business) report sudden, order-of-magnitude increases in token cost per request with no corresponding change in user behavior. The community is demanding better usage telemetry and cost attribution.

2. **Intel macOS crashes** — SIGTRAP/EXC_BREAKPOINT on `x86_64` macOS across multiple CLI versions (#29000, #28090, #30300). The issue keeps reappearing, suggesting an architecture-specific bug that hasn't been fully root-caused.

3. **Windows desktop instability** — A cluster of Windows-specific bugs: plugin disappearance (#28703, #30270), terminal read failures (#29070), sandbox ACL corruption (#30251), image paste failures (#30305), and UI overlap (#30308). The Windows app appears to have systemic quality debt.

4. **SQLite concurrency** — Multiple processes (IDE extension + desktop app) competing for the same `logs_2.sqlite` cause launch failures (#30105). The local state layer needs better multi-process coordination.

5. **macOS desktop performance** — The `code_sign_clone` temp leak (#27536) and the git-watcher CPU storm (#29084) both point to insufficient testing of long-running desktop scenarios on macOS.

6. **MCP OAuth reliability** — The stacked PR series (#30292–30296) reveals that shared OAuth credential stores are fragile under concurrent access, causing auth failures that are hard to diagnose.

7. **Remote Control resilience** — WebSocket relay stalls (#30301) and token refresh storms (#30201) degrade the remote coding experience, which is a flagship feature for the Codex app.

---

*Generated from `github.com/openai/codex` data as of 2026-06-27. For the full issue tracker, visit [github.com/openai/codex/issues](https://github.com/openai/codex/issues).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-27

---

## 1. Today's Highlights

The nightly release **v0.51.0** shipped with CI pipeline fixes, while the open-source community saw heavy activity around caretaker-agent infrastructure, core agent reasoning limits, and a critical `@`-prefixed path resolution bug. Agent reliability — subagent hangs, thought leakage, and shell-execution stalls — dominated the issue tracker with multiple P1 bugs still unresolved after months.

---

## 2. Releases

| Version | Highlights |
|---------|------------|
| **[v0.51.0-nightly.20260626.gb14416447](https://github.com/google-gemini/gemini-cli/pull/28158)** | CI fix to prevent bad NPM releases and surface promotion-job crashes; changelog for v0.50.0-preview.1. |

---

## 3. Hot Issues

| # | Title | Priority | Why It Matters | 💬 |
|---|-------|----------|----------------|-----|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports GOAL success after MAX_TURNS interruption | P1 | Silent correctness failure — the CLI reports success when analysis never ran. Affects `codebase_investigator` reliability. | 8 👍2 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | P1 | Folder creation and simple changes block forever. 👍8 — highest community signal on agent execution. | 7 👍8 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error with >128 tools | P2 | Tool scalability ceiling. The agent can't self-limit its tool scope, breaking large MCP registrations. | 3 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command stuck on "Waiting input" after completion | P1 | UI permanently blocks user after trivial CLI commands finish. 👍3. | 4 👍3 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | P1 | Linux desktop users locked out of browser automation. | 4 👍1 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Deterministic redaction for Auto Memory logging | P2 | Secrets enter model context *before* the extraction prompt redacts them. Audit/legal risk. | 5 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | P2 | Background CPU waste; extraction loop never terminates on noisy/uninteresting sessions. | 5 |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Model creates tmp scripts in random directories | P2 | Workaround for shell exclusion creates workspace pollution, complicating commit hygiene. | 3 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Agent uses destructive git commands (reset/force) when safer alternatives exist | P2 | Data-loss risk. Community frequently requests guardrails on forceful VCS operations. | 3 👍1 |
| [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | Subagents running without permission since v0.33.0 | P2 | Agents execute even when explicitly disabled in config. Trust/regression concern. | 2 |

---

## 4. Key PR Progress

| # | Title | Status | Description |
|---|-------|--------|-------------|
| [#28164](https://github.com/google-gemini/gemini-cli/pull/28164) | Limit recursive reasoning turns per request | OPEN | Caps recursive reasoning at **15 turns** (configurable via `maxSessionTurns`) to protect CPU and API quotas from infinite loops. |
| [#27971](https://github.com/google-gemini/gemini-cli/pull/27971) | Strip thoughts from scrubbed history turns | OPEN | Fixes **thought leakage** — insider monologues bleeding into plaintext history, causing the model to loop or emulate scratchpad reasoning. |
| [#28053](https://github.com/google-gemini/gemini-cli/pull/28053) | Defensive path resolution for `@`-reference files | OPEN | Fixes `File not found` errors when the model passes `@`-prefixed paths (e.g., `@policies/new.txt`). |
| [#28015](https://github.com/google-gemini/gemini-cli/pull/28015) | Cloud Run webhook ingestion for Caretaker Agent | OPEN | Entry point for GitHub webhooks — signature verification, Firestore transaction, Pub/Sub publish. Foundation for automated triage. |
| [#28163](https://github.com/google-gemini/gemini-cli/pull/28163) | Triage Worker core foundation (Part 1/2) | OPEN | Builds the Caretaker Agent triage worker — first modular piece of the automated issue-classification pipeline. |
| [#27966](https://github.com/google-gemini/gemini-cli/pull/27966) | Case-insensitive sensitive-path blocklist + VS Code HITL | **CLOSED** | Production-grade security fix: blocks `.git`, `.env`, `node_modules` access regardless of casing; patches prompt-injection vector. |
| [#27915](https://github.com/google-gemini/gemini-cli/pull/27915) | Trust dialog discloses wrong hook shape | OPEN | Fixes UI showing inverse of which hooks actually execute — previously misled users on trust decisions. |
| [#28103](https://github.com/google-gemini/gemini-cli/pull/28103) | Avoid keep-alive socket reuse during OAuth exchange | OPEN | Patches OAuth "Premature close" failures on Node 24.17.0 / 22.23.0 / 26.3.0 after **CVE-2026-48931** http.Agent fix. |
| [#27850](https://github.com/google-gemini/gemini-cli/pull/27850) | Sniff MCP image MIME types | **CLOSED** | Corrects mislabeled image payloads (e.g., WebP declared as PNG) so the model receives the right content type. |
| [#28013](https://github.com/google-gemini/gemini-cli/pull/28013) | Function replacer in `applySubstitutions` to prevent `$`-pattern corruption | OPEN | Fixes `String.prototype.replace` interpreting `$`-prefixed patterns in skill/sub-agent descriptions. |

---

## 5. Feature Request Trends

1. **Subagent transparency & trajectory sharing** — [#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763): Make subagent reasoning visible and shareable via `/chat share` and bug reports for eval/debug workflows.
2. **Agent self-awareness** — [#21432](https://github.com/google-gemini/gemini-cli/issues/21432): Agent should accurately explain its own CLI flags, hotkeys, and configuration to the user.
3. **Browser agent resilience** — [#22232](https://github.com/google-gemini/gemini-cli/issues/22232): Automatic session takeover and lock recovery for persistent browser profiles.
4. **AST-aware codebase tools** — [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746): Method-boundary precision reads, smarter codebase mapping to reduce turns and token noise.
5. **Native file tools for task tracking** — [#21000](https://github.com/google-gemini/gemini-cli/issues/21000): Experiment with purpose-built task-tracker primitives instead of shell-based file edits.
6. **Caretaker Agent infrastructure** — Multiple open PRs (#28015, #28163) signal an emerging **autonomous issue-triage pipeline** — webhook → storage → triage worker → classification.

---

## 6. Developer Pain Points

| Pain Point | Frequency Signal |
|------------|------------------|
| **Agent/shell hangs** — executions block UI indefinitely | Issues [#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) all reference permanent blocking. Top source of 👍 reactions. |
| **Destructive operations without guardrails** — `git reset --hard`, `--force` | Recurring theme in [#22672](https://github.com/google-gemini/gemini-cli/issues/22672). Users want sandboxing or confirmation gates. |
| **Memory system correctness** — secrets in context, silent patch skips, retry loops | Cluster of issues [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/6522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516) indicate the Auto Memory subsystem is fragile. |
| **Underutilization of skills and subagents** | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) notes the model ignores custom skills even when tasks match descriptions. |
| **Platform-specific regressions** (Wayland, WSL mounts, PTY resize) | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#28012](https://github.com/google-gemini/gemini-cli/pull/28012), [#27461](https://github.com/google-gemini/gemini-cli/pull/27461) — non-Mac/Linux environments remain second-class. |

---

*All data sourced from [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) as of 2026-06-27. Links verified against provided URLs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-27

---

## 1. Today's Highlights

Two patch releases landed in the last 24 hours (v1.0.66-0 and v1.0.66-1), bringing MCP server toggles, experimental response budget controls, subagent concurrency/depth configuration, and a new `/chronicle skills review` command. On the issues side, the community is heavily engaged with **clipboard regressions on both Linux and Windows**, **memory leaking between repositories**, and **subagent transcript export bloat** — each generating significant discussion. A security researcher also requested a CVE assignment (Issue #3906) after submitting a responsible disclosure.

---

## 2. Releases

### v1.0.66-1
- **Subagent concurrency & depth limits** — usage-based billing users can now configure these in `/settings`
- **`/chronicle skills review`** — new command to review proposed draft skill changes with accept/reject/defer options
- **Desktop notifications** for attention prompts and idle sessions

### v1.0.66-0
- **MCP server toggle** — enable or disable MCP servers directly from the CLI's MCP list view
- **Experimental response budget controls** in CLI settings
- **OpenTelemetry export** can now be configured via managed settings
- **OAuth token recovery** — MCP tools on OAuth-authenticated remote servers automatically recover after a mid-session token refresh

---

## 3. Hot Issues

### #2082 — `Ctrl+Shift+C` no longer copies to clipboard on Linux
**Why it matters:** A long-standing terminal convention broken since at least v1.0.4. With 22 comments and 10 👍, this is the most-reacted-to issue in the digest window. Users expect Linux clipboard shortcuts to "just work" in any TUI.
🔗 [github/copilot-cli Issue #2082](https://github.com/github/copilot-cli/issues/2082)

### #3949 — Copy on Windows 11 does not work; nothing on clipboard
**Why it matters:** The Linux clipboard bug has a Windows counterpart. The reporter notes Copilot *claims* text was copied when it wasn't — a UX trust issue. Zero 👍 but a clear cross-platform pattern.
🔗 [github/copilot-cli Issue #3949](https://github.com/github/copilot-cli/issues/3949)

### #3945 — Memories leaking between repositories
**Why it matters:** A user created a fresh git repo and Copilot referenced facts from a prior project's memory. This is a **data isolation / privacy concern** that undermines trust in the memory system.
🔗 [github/copilot-cli Issue #3945](https://github.com/github/copilot-cli/issues/3945)

### #3946 — Custom instructions leak into repository analysis
**Why it matters:** Closely related to #3945 — local `copilot-instructions.md` content is being injected as factual context when analyzing *other* repos. Two reports of the same class of bug in one day signals a systemic scoping issue.
🔗 [github/copilot-cli Issue #3946](https://github.com/github/copilot-cli/issues/3946)

### #3944 — Subagent transcripts inlined verbatim and uncapped into parent export
**Why it matters:** Session exports become unusably large when subagents are involved. Every tool-call output is embedded in full with no summarization or size bound. Important for anyone using exports for audit or sharing.
🔗 [github/copilot-cli Issue #3944](https://github.com/github/copilot-cli/issues/3944)

### #3954 — `explore` tool hardcodes model to `gpt-5.4-mini`, ignoring custom/DeepSeek config
**Why it matters:** Users who configured custom model endpoints (e.g., DeepSeek) are finding that the `explore` tool bypasses their settings entirely. This undermines the custom model feature promise.
🔗 [github/copilot-cli Issue #3954](https://github.com/github/copilot-cli/issues/3954)

### #3948 — `web_fetch` always fails with `TypeError: fetch failed`
**Why it matters:** A core tool is completely broken for at least one user despite working network for auth and model calls. Likely a proxy/TLS configuration issue, but no error detail is surfaced.
🔗 [github/copilot-cli Issue #3948](https://github.com/github/copilot-cli/issues/3948)

### #1928 — Allow pausing Copilot work mid-session
**Why it matters:** With 10 comments and 4 👍, this feature request has steady demand. Users want to interrupt a runaway agent to provide course-correcting instructions without killing the session.
🔗 [github/copilot-cli Issue #1928](https://github.com/github/copilot-cli/issues/1928)

### #3906 — Assign CVE (security researcher request)
**Why it matters:** A researcher submitted a responsible disclosure (GHSA assigned) and is now requesting a formal CVE. Active as of yesterday — worth monitoring for a security advisory.
🔗 [github/copilot-cli Issue #3906](https://github.com/github/copilot-cli/issues/3906)

### #3940 — Custom agent `skills` field to limit preloaded skills
**Why it matters:** As teams build specialized agents (e.g., `.github/agents/dotnet-developer.md`), they want to scope which skills load into context. This is a performance and relevance request from power users.
🔗 [github/copilot-cli Issue #3940](https://github.com/github/copilot-cli/issues/3940)

---

## 4. Key PR Progress

Only one PR was updated in the last 24-hour window:

### #570 — [CLOSED] [WIP] Add macOS installation instructions to README.md
**Summary:** A Copilot-generated PR that added macOS-specific install instructions to the README. Closed after updates on 2026-06-26. Low-impact but signals ongoing documentation investment.
🔗 [github/copilot-cli PR #570](https://github.com/github/copilot-cli/pull/570)

> **Note:** The low PR count in the window suggests most active work is still in the issue triage / discussion phase, or that larger feature PRs haven't yet surfaced in the last-24h filter.

---

## 5. Feature Request Trends

Distilled from issue titles, labels, and community reactions:

| Trend | Representative Issues | Signal |
|---|---|---|
| **Context/memory isolation** | #3945, #3946 | 🔴 High urgency — two reports in one day of cross-repo data leaking |
| **Subagent controls** | #3944, v1.0.66-1 release notes | 📈 Growing — concurrency/depth shipped; transcript export next |
| **Session flow control** | #1928 (pause), #3942 (--acp + --agent) | 📈 Steady — users want more granular agent orchestration |
| **Custom model support** | #3954 (explore tool), #3951 (PowerShell) | 📈 Emerging — as custom endpoints proliferate, hardcoded model IDs break |
| **MCP ecosystem maturity** | v1.0.66-0 (toggles), #3887 (registry interpolation), #3950 (SSO marketplace) | 📈 Active — multiple MCP UX gaps being identified |
| **Custom agent extensibility** | #3940 (skills field), #3942 (--agent flag) | 📈 Power-user demand — agents as first-class config objects |
| **Session export quality** | #3944 | 🟡 Niche but important — exports need summarization and size bounds |

---

## 6. Developer Pain Points

1. **Clipboard is broken cross-platform.** Issues #2082 (Linux, 10 👍) and #3949 (Windows) describe the same fundamental regression. This is table-stakes TUI functionality and the top community frustration.

2. **Memory/context isolation is unreliable.** Two issues (#3945, #3946) filed on the same day describe Copilot mixing facts and instructions across repository boundaries. For a tool that handles proprietary code, this is a trust-eroding bug.

3. **Custom model configurations are partially respected.** Issue #3954 shows the `explore` tool hardcoding `gpt-5.4-mini` regardless of user-configured endpoints. Teams investing in alternative models (DeepSeek, etc.) will hit this wall.

4. **Subagent output is unmanageable.** Issue #3944 highlights that subagent transcripts are exported verbatim with no bounds — making session exports impractical for any non-trivial agent workflow.

5. **`web_fetch` is silently failing.** Issue #3948 reports total failure of a core tool with no diagnostic output. Better error surfacing (proxy detection, TLS info) is needed.

6. **No way to interrupt/pause an agent.** Issue #1928 has been open since March with steady engagement. Users want a "pause and redirect" workflow without session teardown.

7. **MCP UX gaps persist.** From SSO marketplace errors (#3950) to registry variable interpolation (#3887), the MCP integration surface still has rough edges that complicate plugin adoption.

---

*Generated from data sourced at github.com/github/copilot-cli on 2026-06-27. For the latest, visit the [repository](https://github.com/github/copilot-cli).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-27

---

## 1. Today's Highlights

Kimi Code CLI saw a quiet release day — no new patches landed in the last 24 hours. However, the community remained active on two fronts: a freshly reported **ExitPlanMode state-inconsistency bug** (#2478) signals ongoing friction in the tool's plan-mode workflow, while an older **403 access-control issue** (#2425) was triage-closed after collecting 10 community comments, shedding light on the evolving access model for the `kimi-for-coding` API.

---

## 2. Releases

None in the last 24 hours. Please check back after a new version is tagged.

---

## 3. Hot Issues

Two notable issues were updated in the last 24 hours:

| # | Title | Status | Why it matters | Reaction |
|---|---|---|---|---|
| [#2425](https://github.com/MoonshotAI/kimi-cli/issues/2425) | 403 on every message with `kimi-for-coding` (v0.9.0, macOS) | Closed 🔒 | User reported that every turn returned a `403`, traced to the `kimi-for-coding` model being gated behind approved coding-agent clients. Triaging this issue may clarify access policies and error messaging. | 10 comments, 👍3 — community widely affected. |
| [#2478](https://github.com/MoonshotAI/kimi-cli/issues/2478) | "ExitPlanMode reports Not in plan mode" despite active plan mode | Open 🐛 | System reminders claim plan mode is active, yet `ExitPlanMode` returns a contradictory error, leaving assistants (and users) stuck. | — |
| [#2477](https://github.com/MoonshotAI/kimi-cli/issues/2477) | Double-Enter key bug & `/sessions` feedback loss (v0.20.0, Ubuntu) | Open 🐛 | Irregular input handling erodes interactive UX; this bug was reported right alongside the latest release, suggesting regressions that need investigation. | — |

---

## 4. Key PR Progress

| # | Title | Author | Summary | Status |
|---|---|---|---|---|
| [#2476](https://github.com/MoonshotAI/kimi-cli/pull/2476) | `fix(kosong): omit reasoning_effort instead of sending null when thinking is off` | logicwu0 | Fixes a subtle serialization bug: when `thinking_effort_to_reasoning_effort("off")` resolves to `None`, the OpenAI SDK still emits `"reasoning_effort": null`, which upstream validators reject. Switches to SDK's `omit` sentinel so the field is dropped entirely. | 🟢 Open, review requested |
| [#2287](https://github.com/MoonshotAI/kimi-cli/pull/2287) | `docs(readme): add prerequisites list to Development section` | ktwu01 | Closes [#2274](https://github.com/MoonshotAI/kimi-cli/issues/2274) by adding a clear `### Prerequisites` list before `make prepare`, reducing newcomer setup friction caused by missing system dependencies. | 🟢 Open, awaiting merge |

---

## 5. Feature Request Trends

Based on signals from recent issues and PRs:

1. **Clearer access gating & error surfaces** — The 403 discussion surfaced demand for actionable guidance when the CLI tries to hit an endpoint whose policy has silently changed. Comminity members want the auth layer to explain what the problem is, and potentially to guide the user toward the right configuration.

2. **Robust plan-mode state tracking** — Two separate contributors hit plan-mode state conflicts, pointing to a need for better synchronisation and explicit state reporting.

3. **Interactive UX hardening** — Reports of accidental double-key submissions indicate that input handling and key-event management are key areas for improvement, particularly on Linux.

4. **Developer onboarding clarity** — A PR has been open to close a documentation gap about local prerequisites. The community has also indicated that they see value in *live* prerequisite checks that would fail fast when something is missing.

---

## 6. Developer Pain Points

1. **Silent access policy changes**: When `kimi-for-coding` was gated behind approved agents, the CLI returned a plain `403` with no actionable guidance. Contributors explicitly want self-diagnosing errors.

2. **Plan-mode state contradictions**: Multiple contributors report the assistant being told plan mode is active while tooling rejects that state, leaving sessions unrecoverable.

3. **Input capture irregularities**: At least one report (Ubuntu, double-Enter) highlights gaps in universal key-event handling, a must-fix for a modal CLI.

4. **Setup friction from shallow docs**: Long-standing issue asks for explicit build tooling requirements; pending PR would contribute to closing that gap — but the need is broader and also extends to OS-specific setup.

---

*Generated 2026-06-27 from MoonshotAI/kimi-cli — pull latest via `curl -s https://api.github.com/repos/MoonshotAI/kimi-cli/issues?state=open&sort=updated`.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-27

---

## 1. Today's Highlights

No new releases landed in the last 24 hours, but update activity was heavy: **30 issues** and **20 pull requests** were touched, dominated by a burst of automated cleanup PRs and a flurry of new user-facing bugs on the desktop app. The two biggest conversations — **DeepSeek V4 Pro price-driven subscription changes** (84 comments) and **no new features / desktop regressions** — signal community tension around pricing responsiveness and desktop app quality.

---

## 2. Releases

No releases published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters | Community Pulse |
|---|-------|--------|----------------|-----------------|
| 1 | [DeepSeek V4 Pro price drop → adjust Go limits](https://github.com/anomalyco/opencode/issues/28846) | Closed | DeepSeek permanently cut V4 Pro API prices by 75%; users argue subscription tiers must reflect that | 👍 82, 84 comments — highest engagement by far |
| 2 | [Windows desktop app won't launch after update](https://github.com/anomalyco/opencode/issues/12598) | Closed (Feb ticket, still bumped) | Silent crash on Win10 after upgrade — installers regressed months ago and some users never recovered | 👍 0, unresolved churn |
| 3 | [reasoning_effort parameter missing from UI](https://github.com/anomalyco/opencode/issues/450) | Closed | Major models (OpenAI, Gemini, Deepseek) expose reasoning effort; OpenCode has no first-class control for it | 👍 26, long-standing feature gap |
| 4 | [/model TUI picker drops custom-provider models](https://github.com/anomalyco/opencode/issues/6169) | Closed | Models load correctly but are invisible in picker dialog — only "recent" ones surface | 👍 1; affects multi-provider power users |
| 5 | [OpenCode stops processing requests (silent death)](https://github.com/anomalyco/opencode/issues/32149) | **OPEN** | Thinking → no response; reproducible across providers | 👍 2; quiet but critical |
| 6 | [Desktop: pasting a file path behaves inconsistently and can't paste plain text](https://github.com/anomalyco/opencode/issues/34006) | **OPEN** | Desktop auto-converts path to file-attach; terminal has different behavior; neither offers "paste as text" | Already has matching PR #34123 open |
| 7 | [Infinite compaction loop with empty sessions](https://github.com/anomalyco/opencode/issues/31152) | **OPEN** | Every response triggers Build compaction ("auto-compact"), even on a fresh install with zero config | 👍 0; session-breaking bug |
| 8 | [ACP session/list doesn't conform to spec when cwd is omitted](https://github.com/anomalyco/opencode/issues/33036) | **OPEN** | ACP client protocol conformance issue — session list is process-scoped instead of agent-scopic | 👍 0; protocol-level correctness |
| 9 | [Qwen 3.7 Plus/Max via OpenRouter: empty tool-call names](https://github.com/anomalyco/opencode/issues/33618) | **OPEN** | `✗ "" failed` errors break tool-use loops; affects reliability on newer Qwen models | 👍 1; narrow but painful |
| 10 | ["Bring back the old features" — desktop regression complaint](https://github.com/anomalyco/opencode/issues/34100) | **OPEN** | Sentiment flare-up: multiple users feel the desktop app is losing features and degrading | 👍 0; cultural signal |

---

## 4. Key PR Progress

| PR | Author | Status | Impact |
|----|--------|--------|--------|
| [v2 plugin skills in legacy skills list](https://github.com/anomalyco/opencode/pull/33918) | tangtaizong666 | **OPEN** | Closes #33896 — unifies v2-registered plugin skills into legacy `/skills` and instance API |
| [Separate layer-node functionality and integrate into v2](https://github.com/anomalyco/opencode/pull/34119) | jlongster | **OPEN** | Core refactor — looks like foundational v2 architecture work |
| [MCP refresh-scope selection (SEP-2207)](https://github.com/anomalyco/opencode/pull/34125) | rekram1-node | **OPEN** | Backports MCP scope-selection spec compliance; safer token handling |
| [Desktop: question UX fixes](https://github.com/anomalyco/opencode/pull/34116) | eXamadeus | **OPEN** | Closes #14924, #32791, #15896, #15353 — multi-issue UX improvement suite |
| [TUI: plain-text paste (Ctrl+Alt+V)](https://github.com/anomalyco/opencode/pull/34123) | ametel01 | **OPEN** | Directly addresses #34006; clipboard handling parity |
| [Don't carry plan model into build agent on plan_exit](https://github.com/anomalyco/opencode/pull/29457) | fmb4910-ops | Closed | Closes #9296 — plan-mode handoff fix |
| [Bound Codex stream stalls](https://github.com/anomalyco/opencode/pull/29446) | avilabss | Closed | Closes #29129 — ChatGPT/Codex OAuth streaming hang fix |
| [Cap retry delays without valid hints](https://github.com/anomalyco/opencode/pull/29439) | Bagnesium | Closed | Closes #20126 — prevents unbounded backoff |
| [Repair common tool-input shape failures before retry](https://github.com/anomalyco/opencode/pull/29412) | paymog | Closed | Closes #26498 — validate-then-repair layer for malformed tool calls |
| [Preserve image input for custom OpenAI-compatible models](https://github.com/anomalyco/opencode/pull/29386) | SpencerJung | Closed | Fixes #26780 — image-content mapping for OpenAI-compatible providers |

**Note:** The automated cleanup queue (`[automated-pr-cleanup]`) has been systematically closing long-standing bugs (#29373–#29457), churning through stalled tickets with focused fix PRs. This is a good sign of backlog hygiene — but also generates a lot of notification noise visible in this digest.

---

## 5. Feature Request Trends

1. **Pricing & subscription flexibility** — DeepSeek price drop (#28846, 👍82) and crypto-pay for Go plan (#23153, 👍23) show strong demand for pricing responsiveness and alternative payment rails.
2. **Better model controls in TUI** — reasoning_effort (#450, 👍26), clickable file paths (#19005, 👍2), and preserving model-per-chat (#17873) all aim at a richer interactive experience.
3. **ACP/CLI extensibility** — Expose session ID to subprocess env (#15739, 👍2), send diff on apply_patch (#30913, 👍3), and expose coding-agent marker to shell commands (#34065) point to ecosystem/tooling depth.
4. **Provider edge-case fixes** — Image passthrough for OpenAI-compatible models, Qwen tool-call stability, GLM model-detection — users want OpenCode to simply work with any model they throw at it.

---

## 6. Developer Pain Points

- **Silent failures everywhere**: App won't launch (#12598), stalls after "thinking" (#32149, #34087), infinite compaction with zero config (#31152), SQLite constraint errors after model switch (#31606). High-severity issues that trash sessions with little debug signal.
- **Desktop vs. Terminal parity gaps**: File-path paste (#34006), TUI locale/translation (#34100), app menu not localized (#34104), and the general "features are being removed" sentiment (#34100) suggest the desktop Electron app is getting worse faster than it's getting better.
- **Proto

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-27

## 1. Today's Highlights

The past 24 hours were unusually busy despite **zero new releases**: 28 updated issues and 6 closed PRs landed, with heavy activity around **TUI rendering**, **provider support**, and **extension/library embedding stability**. A major recurring theme is OAuth-token detection fragility — multiple issues and PRs touched on hardcoded `sk-ant-oat` substring checks that break scoped Claude Code keys (`sk-ant-api03-…`) and impede multi-account login. Separately, the community rallied around two TUI bugs (forced-scroll-during-streaming #5825 and terminal-scrollback wiping #6050) that combine for an excellent quarter of the active issue comments.

---

## 2. Releases

**None** in the last 24 hours. The latest published release remains **v0.80.2** (referenced in #5944).

---

## 3. Hot Issues (10)

| # | ID | Title | 💬 | 👍 | Why it matters |
|---|---|---|---|---|---|
| 1 | [#5825](https://github.com/earendil-works/pi/issues/5825) | Streaming markdown forces scroll to bottom | 33 | 0 | Most-discussed open bug right now. The "clear on shrink" setting triggers a full re-render that resets scroll position while streaming, making it impossible to read previous output. 33 comments signal a large user base is affected. |
| 2 | [#4877](https://github.com/earendil-works/pi/issues/4877) | Session folder collision | 19 | 2 | Different directory paths can hash to the same session folder name (e.g., `/a/b/c/d` vs `/a-b/c-d`), risking cross-contamination. 👍 upvotes suggest users want this prioritized. |
| 3 | [#5363](https://github.com/earendil-works/pi/issues/5363) | Add `amazon-bedrock-mantle` provider | 15 | 4 | Bedrock Mantle exposes an OpenAI-compatible API that is incompatible with the existing Converse-backed provider. High 👍 count (4) signals strong Bedrock user demand for first-class support. |
| 4 | [#6050](https://github.com/earendil-works/pi/issues/6050) | TUI full redraw clears terminal scrollback | 11 | 0 | When Pi redraws the full screen (footer, header, widgets), it wipes the terminal's scrollback buffer — destroying context from prior commands. Closed after discussion but highlights a rendering architecture concern. |
| 5 | [#5871](https://github.com/earendil-works/pi/issues/5871) | Anthropic OAuth-token detection hardcoded to `sk-ant-oat` | 6 | 0 | Scoped Claude Code keys (`sk-ant-api03-…`) are misclassified as regular API keys, causing auth failures. Tied to #6093 (closed) — this is a systemic issue, not a one-off. |
| 6 | [#5992](https://github.com/earendil-works/pi/issues/5992) | Crash: `value.startsWith is not a function` in CustomEditor autocomplete | 4 | 0 | After a session reload, a non-string value reaches the autocomplete matcher, causing a fatal uncaughtException. Stability-critical bug that can lose work. |
| 7 | [#5886](https://github.com/earendil-works/pi/issues/5886) | AgentSession settlement/continuation and assistant-tail lifecycle bugs | 3 | 2 | Meta-issue from a maintainer (mitsuhiko) describing a recurring class of bugs where post-run logic tries to continue an agent from a closed transcript. Cross-cutting concern for the coding-agent package. |
| 8 | [#5944](https://github.com/earendil-works/pi/issues/5944) | Print mode hangs after turn completes (post-completion non-exit) | 3 | 0 | The `streamTimeoutMs`/`toolTimeoutMs` race fix for #5778 didn't cover all cases. `pi -p` mode can still hang after the model finishes responding. |
| 9 | [#6100](https://github.com/earendil-works/pi/issues/6100) | Compaction summary displayed out of place after session reload | 1 | 0 | UX bug: compaction markers render before the conversation on resume instead of inline, confusing users about context. |
| 10 | [#1391](https://github.com/earendil-works/pi/issues/1391) | Support multiple OAuth logins per provider | 3 | 0 | Frequently requested: allow `/login` to store labeled accounts (work/personal) with separate credentials in `auth.json`. |

---

## 4. Key PR Progress (10)

| PR | Author | Status | Summary |
|---|---|---|---|
| [#6026](https://github.com/earendil-works/pi/pull/6026) | xl0 | **OPEN** | **fix(tui): stabilize working status row** — directly targets #5825. Stabilizes the TUI status row to prevent re-render-triggered scroll resets during streaming. |
| [#6087](https://github.com/earendil-works/pi/pull/6087) | mizuikki | **Closed** | **fix: remove hardcoded RPC wait timeout** — eliminates the 60s ceiling in `RpcClient.waitForIdle()`, `collectEvents()`, and `promptAndWait()`. Adds configurable `waitTimeoutMs` option. Merged. Closes #6088. |
| [#6090](https://github.com/earendil-works/pi/pull/6090) | Lee-Si-Yoon | **Closed** | **feat(ai): add Friendli provider** — adds built-in OpenAI-compatible Friendli provider. Merged. Closes #6091. |
| [#6099](https://github.com/earendil-works/pi/pull/6099) | vamshi9666 | **Closed** | **Rename model key from 'gpt-5.2-chat-latest' to 'gpt-5.2-chat'** — fixes a hallucinated model identifier in the registry. Merged same day. |
| [#6064](https://github.com/earendil-works/pi/pull/6064) | cristinaponcela | **Closed** | **feat(experimental): pi-orchestrator** — introduces `@earendil-works/pi-orchestrator`, a local daemon exposing a Unix socket (`./pi/orchestrator.sock`) for lifecycle management of pi instances (start, list, etc.). Experimental stage but adds multi-instance orchestration. |
| [#6092](https://github.com/earendil-works/pi/pull/6092) | ahxxm | **Closed** | **draft: hosted websearch** — proof-of-concept for an always-on hosted search tool, related to #1589. Explicitly marked "not meant to be merge" but seeds future direction. |
| [#6075](https://github.com/earendil-works/pi/pull/5675) | SeanThomasWilliams | **Closed** | **fix: stabilize compaction after reload** — fixes `prevCompaction is not defined` error. Was auto-closed by the contributor gate; the underlying fix in #5676 is still open. |
| [#6098](https://github.com/earendil-works/pi/pull/6098) | thetrebor | **Closed** | **fix: container.render crash when tool renderer returns non-Component** — handles type mismatch where a tool's custom renderer returns a raw value instead of a Component, preventing `TypeError: child.render is not a function`. |
| [#6096](https://github.com/earendil-works/pi/issues/6096) | will-jack-and-jilll | **Closed** | **fix: ctx.compact() from turn_end aborts tool-loop continuation** — calling `ctx.compact()` in a `turn_end` handler kills the remaining model loop. Affects the shipped `trigger-compact.ts` example extension. |
| [#6089](https://github.com/earendil-works/pi/issues/6089) | gotgenes | **Closed** | **feat: register a payload transform on a provider** — requests an API for extensions that override built-in providers to inject payload transforms applied on every call path. |

---

## 5. Feature Request Trends

1. **Provider ecosystem expansion** — Amazon Bedrock Mantle (#5363), Friendli (merged #6090/6091), multi-account OAuth (#1391), and scoped API key handling (#5871, #6093) dominate. Users want Pi to treat the provider layer as a first-class extensibility surface.

2. **GPT-5.6 thinking levels** — #6097 requests an OpenAI `max` thinking level, continuing a rapid-response pattern: Anthropic added a 6th level first and Pi is tracking closely behind.

3. **Multi-instance orchestration** — PR #6064 introduces an experimental orchestrator daemon, suggesting demand for running and managing multiple pi processes programmatically.

4. **Hosted search / web capabilities** — #6092 (draft PR) and the related #1589 show community appetite for built-in web search that doesn't rely on Brave API keys.

5. **Extension API maturity** — Payloads transforms (#6089), plan-mode extension guard (#6095), and embedded-library fixes (#6101, #6102) all reflect a growing cohort building on Pi as a platform, not just a CLI tool.

---

## 6. Developer Pain Points

| Pain point | Issues | Severity |
|---|---|---|
| **Auth fragility** — hardcoded key-prefix checks break on new key formats (scoped keys, labeled accounts) | #5871, #6093, #1391 | 🔴 High — affects login and API calls |
| **TUI scroll/scrollback regressions** — streaming, redraws, and tmux interaction cause viewport jumps and lost terminal history | #5825 (33 💬), #6050, #6073 | 🔴 High — daily-use UX degraded |
| **Session reload instability** — crashes, stale extension contexts, compaction errors, and out-of-place compaction messages | #5992, #5676, #6100, #6101 | 🟠 Medium-High — trust in save/restore cycle eroded |
| **Multi-session / embedded library support** — `AgentSession` settlement bugs, stale ctx across sequential sessions, theme initialization gaps | #5886, #6101, #6102 | 🟠 Medium — blocks library embedding use cases |
| **Model/protocol edge cases** — empty tool results mislabeled as images (#6103), Responses API compatibility gaps (#6103), Windows path bugs (#6104) | #6103, #6104, #4106 | 🟡 Low-Medium — niche but surprising when hit |
| **Long-running tool session limits** — hardcoded RPC timeouts (#6088, now fixed via #6087), stream/tool races (#5944) | #6088, #5944 | 🟠 Medium — workarounds exist (`streamTimeoutMs`) but cases remain |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-27

---

## 1. Today's Highlights

The community is heavily focused on **production-hardening the daemon/serve architecture** and **plugging a steady stream of correctness bugs** in the CLI and security surfaces. Two significant resource-exhaustion bugs surfaced this week: a PowerShell process-tree leak on Windows (every tool invocation spawned an un-reaped tree until OOM) and a TUI freeze on Linux tied to zombie child-process accumulation. On the feature side, momentum is building around a **channel-resident "Qwen Tag" multiplayer agent** (DingTalk-first) and a **runtime per-turn system-reminder injection** mechanism for the daemon.

---

## 2. Releases

- **`cua-driver-rs v0.6.8`** — Patched relative-coordinate fork. Prebuilt universal binary for macOS (codesigned + notarized, includes `QwenCuaDriver.app`); unsigned x86_64 + arm64 for Linux (glibc 2.31+) and Windows.
  → [View Release](https://github.com/QwenLM/qwen-code/releases)

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters |
|---|-------|--------|----------------|
| [#5873](https://github.com/QwenLM/qwen-code/issues/5873) | **Each tool call opens a new PowerShell and never closes until OOM** | OPEN (P1 bug, on track) | Severe Windows-specific resource leak. `ptyProcess.kill()` only tears down the ConPTY host, not the `pwsh` tree. Multiple reports confirm consistent Windows reproduction. |
| [#5083](https://github.com/QwenLM/qwen-code/issues/5083) | **TUI freeze — zombie child processes not reaped** (Linux) | OPEN (P2) | Root-cause is a defunct bash child (~4 min unreaped) from an MCP shell invocation. Points to a cross-platform process-reaping gap. |
| [#5882](https://github.com/QwenLM/qwen-code/issues/5882) | **CI agent jobs run un-isolated on shared ECS runner → cross-PR state contamination** | CLOSED | Triage bot posted comments from PR #5872 onto #5874 — a workflow-isolation failure that erodes trust in CI gating. |
| [#5834](https://github.com/QwenLM/qwen-code/issues/5834) | **Source deletion path-traversal via crafted `sourceSlug`** | CLOSED (P1 security) | A `../` payload can escape the workspace `sources` directory. Addressed by PR #5829. |
| [#5905](https://github.com/QwenLM/qwen-code/issues/5905) | **`POST /workspace/settings` accepts negative `cleanupPeriodDays`** | CLOSED | Schema lacked `minimum` constraint; API/UI/runtime inconsistency. Patched by PR #5906. |
| [#5819](https://github.com/QwenLM/qwen-code/issues/5819) | **Upgrade silently switches default model to a higher-priced tier** | OPEN (P2) | Upgrading from 0.18.3→0.19 rewrote `setting.json`, switching from DeepSeek-4 Flash to Pro. User discovered depletion via SMS alert. |
| [#5055](https://github.com/QwenLM/qwen-code/issues/5055) | **Antivirus flags VSCode extension `.vsix` as `Trojan:JS/ShaiWorm.DBA!MTB`** | CLOSED (P1) | False-positive concern for Windows developers considering adoption; warrants a signing/publishing investigation. |
| [#4493](https://github.com/QwenLM/qwen-code/issues/4493) | **Rider plugin login loop when browser session is already authenticated** | CLOSED | OAuth redirect loop blocks JetBrains users from invoking Alibaba Cloud token-plan models. |
| [#5800](https://github.com/QwenLM/qwen-code/issues/5800) | **Last line of tall assistant reply overwritten on completion in Static render mode** | OPEN (P2) | Upstream Ink #973. Long responses that exceed terminal height lose their final line — a noticeable UX degradation in default TUI mode. |
| [#5677](https://github.com/QwenLM/qwen-code/issues/5677) | **Tracking: ACP compliance gaps for `cd`, permissions, trust, LSP, setup-github** | OPEN | Systematic tracking issue measuring daemon parity; partial closure on `/lsp` and `/permissions` REST endpoints. |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|-----|--------|---------|
| [#5892](https://github.com/QwenLM/qwen-code/pull/5892) | **fix(core): tree-kill PTY shell tree on Windows** | MERGED | Implements recursive process-tree termination via Windows Job Objects; resolves the PowerShell OOM leak from #5873. |
| [#5829](https://github.com/QwenLM/qwen-code/pull/5829) | **fix(desktop): reject unsafe source slugs before deletion** | MERGED | Validates `sourceSlug` against path-traversal patterns before resolving file-system targets. Fixes #5834. |
| [#5906](https://github.com/QwenLM/qwen-code/pull/5906) | **fix(serve): reject negative `cleanupPeriodDays`** | MERGED | Adds `minimum` field to `SettingDefinition` schema and enforces `minimum: 0`; validates server-side, not just client-side. |
| [#5847](https://github.com/QwenLM/qwen-code/pull/5847) | **feat(serve): runtime context injection for per-turn system-reminders** | OPEN | Introduces a key-value `RuntimeContext` store accessible via daemon API. Entries are injected as `<system-reminder>` blocks on every turn — the bridge between external orchestrators and in-session model guidance. High relevance for SDK consumers. |
| [#5890](https://github.com/QwenLM/qwen-code/pull/5890) | **feat(loop): inject `.qwen/loop.md` task file via sentinels** | OPEN | Durable task list for long-running `/loop` cron sessions. Model opts in by setting the loop prompt to a sentinel; the file is re-read and reinjected each tick, allowing user edits mid-loop. |
| [#5888](https://github.com/QwenLM/qwen-code/pull/5888) | **feat(channels): qwen tag — multiplayer channel-resident agent (RFC + Phase 0)** | OPEN | Ambitious: a persistent agent embedded in DingTalk group chats, built on the channel adapter layer and `qwen serve` daemon. Defines primitives for channel-resident presence, mention-triggered turns, and multi-user interaction scoping. |
| [#5884](https://github.com/QwenLM/qwen-code/pull/5884) | **feat(serve): sessionless workspace remember** | OPEN | Adds a daemon enqueue endpoint for managed-memory `remember` tasks that don't require a full session lifecycle. Useful for SDK/daemon callers wanting lightweight persistence. |
| [#5778](https://github.com/QwenLM/qwen-code/pull/5778) | **feat(cli): `/model --vision` for fallback vision model** | OPEN | Mirrors `/model --fast` UX for image-capable fallback; enables pairing a fast text model with a vision model for image-handling without a full model switch. |
| [#5777](https://github.com/QwenLM/qwen-code/pull/5777) | **feat(browser-ext): revive Chrome extension via daemon-direct architecture** | OPEN | Replaces the deprecated Native Messaging host with a thin WebSocket/HTTP client of `qwen serve`. Side panel chat connects directly to the local daemon. |
| [#5677](https://github.com/QwenLM/qwen-code/pull/5677) | **tracking(serve): ACP gaps** | OPEN | Meta-tracking issue quantifying daemon API parity against the Agent Communication Protocol. Items: `/lsp` routing ✅, `/permissions` REST ✅, remaining: `cd`, trust modes, `setup-github`. |

---

## 5. Feature Request Trends

- **`qwen serve` daemon parity & ACP compliance** — The most architecturally significant push. Multiple tracking issues (#4175, #5677) map gaps between CLI and daemon, targeting production-ready v0.16. Expect continued investment in REST endpoints (permissions, trust, LSP), session lifecycle management, and SDK-first ergonomics.
- **Channel-resident / multiplayer agents** — #5888 (Qwen Tag for DingTalk) and #5907 (Telegram bot command alignment) signal demand for persistent agents that live in group chat environments rather than 1:1 interactive terminals.
- **Runtime/mutable context injection** — #5847 (per-turn system-reminder store) is a building block for external orchestration frameworks (LangGraph-style) that need to inject dynamic instructions without restarting sessions.
- **Update & distribution UX** — #5780 (`qwen update` / `/update` slash command) reflects friction in the current manual-upgrade workflow across npm/yarn/pnpm.
- **Hot-reload for skills/MCP/config** — #3696 remains open; partial implementation landed. Developers want sub-second iteration cycles without session restarts.
- **Smarter shell input handling** — #2652 proposes moving from regex-based parsing to tree-sitter AST everywhere, addressing a class of edge-case bugs in tool-call shell parsing.
- **Skill command UX** — #5898 (mid-input slash completion) and #5875 (fuzzy substring match) polish the skill invocation workflow.

---

## 6. Developer Pain Points

1. **Process/resource leaks on Windows** — The PowerShell tree-leak (#5873) is a critical recurring frustration for Windows developers; PR #5892 addresses it but confidence needs to rebuild through validation.
2. **Cross-platform inconsistencies** — Ollama works in Rider/WebStorm but not IntelliJ 2026.1 (#2724); TUI zombie reaping is Linux-specific (#5800's Static mode bug is cross-platform). Platform-specific regressions are a trust eroder.
3. **Silent / surprising config mutations** — The model-upgrade-tweaks-`setting.json` incident (#5819) and negative `cleanupPeriodDays` bug (#5905) share a theme: insufficient schema validation and opaque state changes.
4. **CI reliability** — Cross-contamination from shared ECS runners (#5882) and stale-CI merges (#4805) reduce confidence that a green check means "actually OK," slowing the feedback loop for contributors.
5. **VSCode extension onboarding** — Antivirus false positives (#5055) and missing settings UI/documentation (#1370) create friction for new users trying the IDE extension; even resolved, their existence signals discoverability gaps.
6. **API/streaming instability** — Long-running sessions hitting `terminated (cause: other side closed)` at ~1 min intervals (#1002, #1111, #2938) remains a recurring complaint with no definitive root cause posted.

---

*Next digest: 2026-07-04 | Source: [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-27

---

## 1. Today's Highlights

The community is in heavy **v0.8.59 release tracker** mode with a focus on TUI mouse-report input leaks on macOS, thinking-block reliability (#861), and promoter/maintainer triage. The most active new feature work centers on the **OpenModel provider** integration (Anthropic Messages wire protocol, defaulting to `deepseek-v4-flash`) and a **refined permission model** (`deny`/`allow`/`ask` in `permissions.toml`). A significant mode refactor has landed that separates **Auto** as a fourth distinct TUI mode, decoupling it from YOLO's bypass semantics.

---

## 2. Releases

No new releases pushed in the last 24 hours. The **v0.8.59** release tracker ([#3063](https://github.com/Hmbown/CodeWhale/issues/3063)) is the current stabilization target, carrying the mouse-report leak fix and maintainer-queue items.

---

## 3. Hot Issues

#|Issue|Title|Why It Matters
---|---|---|---
1|[#3063](https://github.com/Hmbown/CodeWhale/issues/3063)|**v0.8.59 release tracker** — mouse-report leak + stabilization|Current release-blocker tracker; the macOS TUI mouse-report input leak is a visible cross-platform regression. 11 comments, active triage.
2|[#1186](https://github.com/Hmbown/CodeWhale/issues/1186)|**Typed persistent permission rules for execpolicy**|Long-requested granular permission system (allow/deny/ask by tool, command prefix, path pattern). 10 comments, still open — active design discussion.
3|[#861](https://github.com/Hmbown/CodeWhale/issues/861)|**Thinking collapse — frozen/truncated/dropped reasoning blocks**|The top verified community bug for all reasoning models; directly causes HTTP 400s on DeepSeek-family endpoints when `reasoning_content` replay breaks. 8 comments.
4|[#2870](https://github.com/Hmbown/CodeWhale/issues/2870)|**EPIC: staged command-boundary refactor (#2791)**|Core TUI architecture refactor to decouple command boundaries; reference PR [#2851](https://github.com/Hmbown/CodeWhale/issues/2851). 7 comments.
5|[#3568](https://github.com/Hmbown/CodeWhale/issues/3568)|**Plan and Agent modes mixing up (again)**|Regression: AI loses mode awareness mid-conversation, attempts file edits in plan mode. Recent repro with chat export attached. 5 comments, 1 👍.
6|[#3582](https://github.com/Hmbown/CodeWhale/issues/3582)|**install.sh endpoint returns HTML instead of shell script**|Docs-driven install command fails because the Next.js app intercepts the curl URL. 4 comments — straightforward fix needed.
7|[#3490](https://github.com/Hmbown/CodeWhale/issues/3490)|**Dead-code inventory for v0.8.71 cleanup**|Stale `allow(dead_code)` markers and orphaned follow-up comments need resolution before v0.9 scope expansion. 4 comments.
8|[#3407](https://github.com/Hmbown/CodeWhale/issues/3407)|**v0.8.67 Setup Wizard: tools, MCP, skills, and plugins step**|Discovery and safe-enablement wizard for power-user features. Broad cross-cutting concern (8 labels). 2 comments.
9|[#2953](https://github.com/Hmbown/CodeWhale/issues/2953)|**Slim the default prompt toward Codex-parity input tokens**|Prompt footprint reduction initiative; current base prompt significantly larger than Codex CLI. Part of a multi-issue token-efficiency drive.
10|[#3638](https://github.com/Hmbown/CodeWhale/issues/3638)|**Expose main prompt for non-software use cases (literature, etc.)**|Requests config-directory symlink/fallback for hardcoded prompt binaries to enable non-coding workflows. Fresh discussion.

---

## 4. Key PR Progress

| # | PR | Description |
|---|---|---|
| 1 | [#3677](https://github.com/Hmbown/CodeWhale/pull/3677) (**merged**) | **Add OpenModel as first-class Anthropic Messages provider** — harvests @noaft's #3585; routes through Anthropic wire protocol with `deepseek-v4-flash` default; updates CLI, TUI picker, config, docs, and drift checks. |
| 2 | [#3650](https://github.com/Hmbown/CodeWhale/pull/3650) (**merged**) | **`permissions.toml` deny/allow/ask actions** — adds explicit action field to permission rules, matching Claude Codex semantics. From @yekern. |
| 3 | [#3664](https://github.com/Hmbown/CodeWhale/pull/3664) (**merged**) | **Split Auto mode from YOLO bypass** — Auto is now a fourth TUI mode using shell-enabled Agent policy + deterministic risk review; YOLO retains true bypass/no-prompt authority. Touches mode parsing, hotbar, footer, header, exec policy mapping, and locale surfaces. |
| 4 | [#3673](https://github.com/Hmbown/CodeWhale/pull/3673) (**merged**) | **Support sha2 0.11 digest hex** — carries Dependabot's upgrade; replaces direct `LowerHex` formatting with byte-to-hex helpers to keep SHA-256 strings stable across CLI, TUI, skills, Fleet, RLM, tool receipts, and WhaleFlow. |
| 5 | [#3674](https://github.com/Hmbown/CodeWhale/pull/3674) (**merged**) | **Extract auth helpers into `runtime_api/auth.rs`** from @cyq1017 — moves bearer/runtime-token/cookie logic out of the main router module for cleaner separation. |
| 6 | [#3665](https://github.com/Hmbown/CodeWhale/pull/3665) (**merged**) | **Debounce Telegram turn-stream writes** from @cyq1017 — part of #2967 resilience hardening; saves on debounced intervals + force-flush on stream exit for correct reattach. |
| 7 | [#3675](https://github.com/Hmbown/CodeWhale/pull/3675) (**merged**) | **Wire moraine-mcp as recall tool source** from @pkeging — integrates Moraine MCP server (search sessions, file attention, etc.) into CodeWhale's default MCP config template; adds `[memory] moraine_fallback` config gate. |
| 8 | [#3584](https://github.com/Hmbown/CodeWhale/pull/3584) (**open**) | **Audit + memory verify gates** from @pkeging — adds verification safeguards for the audit/memory subsystem; checklist pending. |
| 9 | [#3575](https://github.com/Hmbown/CodeWhale/pull/3575) (**open**) | **feat(memory): wire moraine-mcp recall tool + gate legacy push/inject** — extends #3675 with legacy pathway deprecation controls. |
| 10 | [#3607](https://github.com/Hmbown/CodeWhale/pull/3607) (**open**) | **Reactivate stale issue cleanup** — introduces `needs-info`, `stale`, `keep-open`, `pinned` labels and configures the stale workflow to age out `bug` + `needs-info` issues unless protected. |

---

## 5. Feature Request Trends

Based on the full issue/PR surface, the most requested direction clusters are:

1. **Permission & Execution Policy Control** — Persistent `allow`/`deny`/`ask` rules scoped by tool, command prefix, and path ([#1186](https://github.com/Hmbown/CodeWhale/issues/1186), [#3650](https://github.com/Hmbown/CodeWhale/pull/3650)). The community wants Codex-style granular control surfaces.

2. **Mode Architecture Clarity** — Multiple issues reflect ongoing confusion between Plan, Agent, YOLO, and Auto modes ([#3568](https://github.com/Hmbown/CodeWhale/issues/3568), [#3606](https://github.com/Hmbown/CodeWhale/issues/3606)). The four-mode split in #3664 is the current response.

3. **Provider Ecosystem Expansion** — OpenModel integration signals demand for first-class multi-protocol provider support ([#3585](https://github.com/Hmbown/CodeWhale/pull/3585), [#3677](https://github.com/Hmbown/CodeWhale/pull/3677)). Community also tracking Qianfan docs coverage.

4. **Prompt Customizability** — Users want configurable/hard-loadable prompts for non-software use cases (literature, background reading, etc.) rather than hardcoded engineering-focused prompts ([#3638](https://github.com/Hmbown/CodeWhale/issues/3638), [#2958](https://github.com/Hmbown/CodeWhale/issues/2958)).

5. **Memory & Recall Infrastructure** — Moraine MCP wiring and audit gates ([#3575](https://github.com/Hmbown/CodeWhale/pull/3575), [#3584](https://github.com/Hmbown/CodeWhale/pull/3584)) point to growing demand for persistent cross-session agent memory.

---

## 6. Developer Pain Points

 **Thinking/reasoning reliability on DeepSeek endpoints** remains the single highest-impact developer pain point. Frozen thinking blocks, silent truncation, and dropped `reasoning_content` (which causes hard 400 errors on the next turn) affect all reasoning-model users. Root-cause work continues under [#861](https://github.com/Hmbown/CodeWhale/issues/861) and [#3016](https://github.com/Hmbown/CodeWhale/issues/3016).

- **IME/CJK input handling** — The composer placeholder overrenders during pinyin/hiragana/hangul composition ([#2612](https://github.com/Hmbown/CodeWhale/issues/2612)). The app has zero IME-composition-state awareness, a recurring issue for East-Asian users.

- **Install documentation rot** — The `install.sh` URL serving HTML from a Next.js app instead of a shell script ([#3582](https://github.com/Hmbown/CodeWhale/issues/3582)) is a sharp regression that blocks new users on first contact.

- **Bloat and compile times** — The `localization.rs` file exceeding 5,000 lines of hard-coded strings is flagged as affecting compilation speed and i18n toolchain adoption ([#3537](https://github.com/Hmbown/CodeWhale/issues/3537)).

- **Multi-agent SSE timeouts on Windows** — Four-agent parallel execution still hits 45-second timeouts on Windows 11 with UI corruption as a secondary symptom ([#1679](https://github.com/Hmbown/CodeWhale/issues/1679)). Platform-specific runtime reliability is an ongoing theme.

- **Editor freeze/crash** — New report of complete application freeze when invoking the editor (`Ctrl-O`) after entering draft mode ([#3657](https://github.com/Hmbown/CodeWhale/issues/3657)); process must be killed to recover.

- **Permission prompts in YOLO mode** — A user-reported regression where YOLO mode still requests tool approval ([#3606](https://github.com/Hmbown/CodeWhale/issues/3606)), directly motivating the Auto/YOLO mode split in #3664.

---

*Generated from `github.com/Hmbown/DeepSeek-TUI` activity updated 2026-06-27.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*