# AI CLI Tools Community Digest 2026-04-05

> Generated: 2026-04-05 00:11 UTC | Tools covered: 8

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Comparison Report — 2026-04-05

## 1. Ecosystem Overview

The AI CLI tools landscape is maturing rapidly with seven major players now competing for developer mindshare. A clear bifurcation has emerged: established tools (Claude Code, Codex, Gemini CLI) are investing heavily in enterprise reliability, policy controls, and observability infrastructure, while newer entrants (Kimi, OpenCode, Pi, Qwen) are aggressively differentiating through architectural experimentation, multi-model flexibility, and community-driven extensibility. Token metering transparency and session reliability have become universal pain points across all tools, suggesting the category is transitioning from feature accumulation to production hardening. The Rust/TypeScript runtime debate (exemplified by Kimi's proposed Bun rewrite and Codex's Rust CLI) signals underlying tensions between performance, distribution, and ecosystem compatibility.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Notable Activity |
|------|-------------|-----------|----------------|----------------|
| **Claude Code** | 10+ tracked | 7 open | **v2.1.92** | Enterprise policy controls, Bedrock onboarding |
| **OpenAI Codex** | 10+ tracked | 10+ merged | **3 alphas** (v0.119.0-alpha.9–11) | Aggressive Rust CLI iteration, WebRTC migration |
| **Gemini CLI** | 10 tracked | 10 merged | None | Context system rewrite, PTY fixes |
| **GitHub Copilot CLI** | 10 tracked | 0 visible | **v1.0.18** | Critic agent release, session regressions |
| **Kimi CLI** | 7 tracked | 7 open | None | TPS metering, diagnostic logging, major rewrite debate |
| **OpenCode** | 10+ tracked | 10 open | **v1.3.14–15** | Windows fixes, Effect pattern refactoring |
| **Pi** | 10 tracked | 9 merged | None | Extension API expansion, Gemma 4 support |
| **Qwen Code** | 10 tracked | 10 merged | None (nightly failed) | Token optimization, Agent Team feature |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **Token/Performance Visibility** | Claude Code, Codex, Kimi, OpenCode, Pi | TPS meters, real-time cost tracking, compaction transparency (#1760, #14593, #5374, #6096) |
| **Session Persistence & Resume** | Claude Code, Gemini, Copilot, OpenCode | `--resume` reliability, cross-device handoff, chat history archives (#3882, #2510, #1282) |
| **Voice/Multimodal Input** | Gemini, Copilot, Pi, Qwen | Voice transcription, video attachments, image paste parity (#18499, #1276, #2809, #2885) |
| **Enterprise Proxy/Network** | Claude Code, OpenCode, Pi | HTTP_PROXY support, MDM configs, GHES integration (#531, #2821) |
| **Context Window Control** | Claude Code, Copilot, OpenCode | Disable auto-compaction, manual memory management, system prompt overrides (#2333, #232) |
| **Subagent Observability** | Gemini, Kimi, Qwen | Interaction logs, reasoning block retention, parallel coordination (#1755, #23582, #2897) |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Approach |
|-----------|---------|----------|
| **Enterprise Security** | Claude Code | `forceRemoteSettingsRefresh`, policy fail-closed, Bedrock integration |
| **Realtime/Voice** | Codex | WebRTC migration, ChatGPT call integration, echo cancellation |
| **Context Architecture** | Gemini CLI | Immutable episodic IR pipelines, degradation processors, semantic compression |
| **Extension Ecosystem** | Pi | Footer segments, side panels, tool/command unregistration APIs |
| **Multi-Model Flexibility** | OpenCode | LiteLLM provider, Deno runtime exploration, provider-specific headers |
| **Agent Orchestration** | Qwen Code | Agent Team (parallel sub-agents), intelligent tool parallelism |
| **Cross-Platform Polish** | Kimi CLI | `/btw` side queries, queue editing, terminal path completion |
| **IDE Integration** | Copilot CLI | Critic agent (Claude-only), deep GitHub ecosystem leverage |

**Target User Segmentation:**
- **Security-conscious enterprises**: Claude Code, Copilot CLI
- **Performance/AI researchers**: Codex (Rust), Gemini (context systems)
- **Power users/tinkerers**: OpenCode, Pi, Kimi
- **Cost-optimized scale**: Qwen (token escalation), Gemini (infrastructure efficiency)

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Velocity, Established** | Codex, Gemini CLI | 10+ daily PRs, architectural rewrites, production telemetry investment |
| **Steady, Enterprise-Focused** | Claude Code, Copilot CLI | Release-driven cadence, policy/compliance features, fewer public PRs |
| **Rapid Iteration, Growing** | OpenCode, Kimi, Qwen, Pi | Community PR acceptance, experimental features, platform parity gaps |

**Maturity Signals:**
- **Most production-hardened**: Claude Code (enterprise controls), Gemini (context reliability)
- **Fastest feature velocity**: Codex (3 alphas/24h), Qwen (28 active PRs)
- **Strongest community contribution**: OpenCode (external PRs for Windows, mobile, Deno), Pi (extension API ecosystem)
- **Highest risk/reward**: Kimi (Python→Bun rewrite proposal), OpenCode (Effect pattern migration)

---

## 6. Trend Signals

| Trend | Evidence | Developer Value |
|-------|----------|---------------|
| **Metering Transparency Crisis** | 3 of top 4 Claude issues, #14593 (Codex), #1477 (Copilot) | Demand for cost-predictable AI tooling; vendors must prioritize billing trust |
| **Context Compression as Competitive Moat** | Gemini's episodic IR, Codex compaction regression (#16812), Claude's channels gating | Long-horizon task reliability becoming key differentiator |
| **Voice/Realtime Convergence** | Codex WebRTC, Gemini voice input (#18499), Qwen thinking depth requests | CLI tools approaching IDE-like multimodal parity |
| **Subagent/Hierarchical Systems** | Qwen Agent Team, Gemini subagent awareness (#23582), Claude plugin ecosystem | Next architecture phase beyond single-agent loops |
| **Windows as Second-Class Platform** | Persistent issues across all tools (Codex sandbox, OpenCode plugins, Kimi clipboard, Gemini SSH) | Cross-platform parity remains unsolved; opportunity for Windows-native entrant |
| **Open-Source Runtime Debates** | Kimi's Bun rewrite, OpenCode's Deno exploration, Codex's Rust migration | Performance vs. ecosystem tradeoffs becoming explicit architectural decisions |

---

*Report compiled from 2026-04-05 community digests across 8 major AI CLI tools.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-04-05 | Repository: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Quality control for AI-generated documents: prevents orphans, widows, and numbering misalignment | Universal pain point; affects every document Claude generates |
| 2 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised guidance for actionable, single-conversation design instructions | Clarity vs. verbosity trade-offs; token efficiency |
| 3 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills evaluating Skills across 5 quality dimensions + security audit | Meta-cognitive tooling for Skill ecosystem maturity |
| 4 | **ODT Processing** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | OpenDocument creation, template filling, and ODT→HTML parsing | Enterprise document workflow integration |
| 5 | **Contributing Guidelines** | [#509](https://github.com/anthropics/skills/pull/509) | 🟡 Open | `CONTRIBUTING.md` to address 25% community health score | Governance infrastructure; closes [#452](https://github.com/anthropics/skills/issues/452) |
| 6 | **System Documentation** | [#95](https://github.com/anthropics/skills/pull/95) | 🟡 Open | Comprehensive evidence management system docs with flowcharts | Enterprise audit/compliance use cases |
| 7 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for business analytics | ERP ecosystem integration; Apache 2.0 model |
| 8 | **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | 🟡 Open | Fixes `w:id` collision corruption in documents with bookmarks | Critical bugfix for OOXML shared ID space |

---

## 2. Community Demand Trends

Extracted from high-engagement Issues, ranked by 👍 + comment velocity:

| Trend | Evidence | Underlying Need |
|:---|:---|:---|
| **Enterprise Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) (agent-governance proposal), [#492](https://github.com/anthropics/skills/issues/492) (trust boundary abuse) | Policy enforcement, audit trails, and trust verification for multi-agent systems |
| **Skill Distribution & Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (org-wide sharing), [#189](https://github.com/anthropics/skills/issues/189) (duplicate skills), [#16](https://github.com/anthropics/skills/issues/16) (MCP exposure) | Scalable, version-controlled Skill deployment beyond manual file exchange |
| **Evaluation & Testing Infrastructure** | [#556](https://github.com/anthropics/skills/issues/556) (0% skill trigger rate), [#202](https://github.com/anthropics/skills/issues/202) (skill-creator best practices) | Reliable validation that Skills actually activate when intended |
| **Multi-Platform Runtime** | [#29](https://github.com/anthropics/skills/issues/29) (AWS Bedrock), [#532](https://github.com/anthropics/skills/issues/532) (SSO/enterprise auth) | Skills working outside Anthropic's native auth/API boundary |
| **Reliability & Data Integrity** | [#62](https://github.com/anthropics/skills/issues/62) (skills disappeared), [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403) (500 errors) | Production-grade stability guarantees |

---

## 3. High-Potential Pending Skills

Active PRs with demonstrated community interest, likely to merge pending review:

| Skill | PR | Author | Why It Matters |
|:---|:---|:---|:---|
| **Codebase Inventory Audit** | [#147](https://github.com/anthropics/skills/pull/147) | @p19dixon | 10-step workflow for orphaned code detection; fills critical gap in technical debt management |
| **Shodh Memory** | [#154](https://github.com/anthropics/skills/pull/154) | @varun29ankuS | Persistent context across conversations—addresses Claude's session boundary limitation |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | @4444J99 | Comprehensive Testing Trophy model coverage; high engineering demand |
| **Masonry Media Generation** | [#335](https://github.com/anthropics/skills/pull/335) | @junaid1460 | Imagen 3.0 + Veo 3.1 integration; multimodal output capability |
| **Sensory (macOS Automation)** | [#806](https://github.com/anthropics/skills/pull/806) | @AdelElo13 | Native AppleScript alternative to screenshot-based computer use; Tier 1/2 permission model |
| **Quality Playbook** | [#659](https://github.com/anthropics/skills/pull/659) | @andrewstellman | Revives traditional QA practices via AI cost reduction; requirements-driven vs. code-driven testing |
| **UX/Product Engineering Suite** | [#740](https://github.com/anthropics/skills/pull/740) | @4eckd | 11-skill bundle including pre-deployment validation, journey mapping, algorithmic art |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *production-grade reliability infrastructure*—spanning Skill validation (did it trigger?), trust verification (is it official?), persistent state (will it remember?), and cross-platform deployment (will it work in my environment?)—indicating the ecosystem is maturing from experimentation toward enterprise adoption.**

---

---

# Claude Code Community Digest — 2026-04-05

---

## 1. Today's Highlights

Anthropic shipped **v2.1.92** with enterprise-grade policy controls and improved Bedrock onboarding, while the community continues to grapple with **usage limit controversies**—three of the top five most-commented issues this week involve Max subscribers hitting limits abnormally fast. The companion "buddy" feature is generating polarized feedback, with simultaneous requests to customize it and disable it entirely.

---

## 2. Releases

### [v2.1.92](https://github.com/anthropics/claude-code/releases/tag/v2.1.92)

| Change | Impact |
|--------|--------|
| `forceRemoteSettingsRefresh` policy setting | Enterprise fail-closed security: CLI blocks startup until remote settings are fetched fresh, exits on failure |
| Interactive Bedrock setup wizard | Streamlined AWS onboarding from login screen when selecting third-party providers |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#16157](https://github.com/anthropics/claude-code/issues/16157) | **Instant usage limits with Max subscription** | 1,436 comments, 666 👍—the definitive thread on billing/limits breakage | Intense; users documenting exact token counts and timestamps |
| [#34229](https://github.com/anthropics/claude-code/issues/34229) | **Phone verification failures** | 650 comments, 728 👍—blocking new user onboarding at scale | Marked `invalid` but persists; regional carrier issues suspected |
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | **Max plan session limits exhausted abnormally fast (CLI)** | 413 comments since March 23—pattern suggests metering regression | Users comparing CLI vs. web consumption rates |
| [#16082](https://github.com/anthropics/claude-code/issues/16082) | **Menu Bar Only Mode (hide Dock icon)** | 71 👍, macOS power-user workflow essential | Long-standing; competing with similar apps |
| [#36460](https://github.com/anthropics/claude-code/issues/36460) | **Channels ignored on personal Max plan** | `--channels` flag silently disabled despite paid tier | Confusion over feature gating; plugin ecosystem impact |
| [#36151](https://github.com/anthropics/claude-code/issues/36151) | **Multi-account switching in mobile app** | 69 👍, enterprise/freelancer segmentation need | Privacy-conscious users rejecting shared-email workarounds |
| [#42796](https://github.com/anthropics/claude-code/issues/42796) | **Model regression: unusable for complex engineering** | Feb updates degraded reasoning on large codebases | Serious productivity impact; rollback requests |
| [#41001](https://github.com/anthropics/claude-code/issues/41001) | **Team Premium seat limit stuck at 100%** | 102M tokens consumed vs. 757M+ for peers—metering inconsistency | Enterprise billing trust issue |
| [#42975](https://github.com/anthropics/claude-code/issues/42975) | **`bypassPermissions` ignored in Desktop app** | Windows 11 regression—breaks automation workflows | Affects CI/CD integrations |
| [#43675](https://github.com/anthropics/claude-code/issues/43675) | **`~/.claude/` directory undocumented** | Security/community deep dive available for official docs | Rare positive: contributor offering research for incorporation |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#41837](https://github.com/anthropics/claude-code/pull/41837) | `arsenal-reliability` plugin | **Merged** | 6 production reliability patterns for LLM agents (circuit breakers, retries, rate limiting) using `kavacha` library |
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | Add missing source | Open | Ambiguous scope; likely documentation or build artifact fix |
| [#43598](https://github.com/anthropics/claude-code/pull/43598) | Upstream issue sync workflow | Open | Infrastructure for cross-repo issue tracking with pagination handling |
| [#43563](https://github.com/anthropics/claude-code/pull/43563) | Normalize Windows paths in security hook | Open | Fixes `.github/workflows/` path checks failing on backslash-separated paths |
| [#43559](https://github.com/anthropics/claude-code/pull/43559) | Plugin install docs + typo fix | Open | Removes deprecated npm guidance, corrects settings README |
| [#42604](https://github.com/anthropics/claude-code/pull/42604) | Remove "retro-futuristic" from Frontend Design Skill | Open | Editorial cleanup of dated aesthetic recommendation |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | Open source Claude Code ✨ | Open | Symbolic/community pressure PR; closes multiple source-code requests |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Companion/buddy customization** | [#42698](https://github.com/anthropics/claude-code/issues/42698) (reroll/skins/shop), [#42212](https://github.com/anthropics/claude-code/issues/42212) (disable), [#43691](https://github.com/anthropics/claude-code/issues/43691) (confusion about activation) | High polarization—equal demand for *more* and *less* of this feature |
| **MCP environment variable expansion** | [#43693](https://github.com/anthropics/claude-code/issues/43693) | Security-critical; parity between user-scope and project-scope configs |
| **Session persistence improvements** | [#43696](https://github.com/anthropics/claude-code/issues/43696) (`--continue`/`--resume` broken), [#12858](https://github.com/anthropics/claude-code/issues/12858) (MCP access to chat history) | Workflow continuity for long-running tasks |
| **Platform-native integrations** | [#16082](https://github.com/anthropics/claude-code/issues/16082) (macOS menu bar), [#36151](https://github.com/anthropics/claude-code/issues/36151) (mobile multi-account) | Ecosystem maturity signals |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Usage metering & billing transparency** | Limits hit "instantly," discrepancies between seats, rapid credit drain on Max plans | **Critical**—3 of top 4 issues by comment volume |
| **Permission system reliability** | `bypassPermissions` ignored, intermittent prompts mid-conversation, Desktop/CLI divergence | High—breaks automation trust |
| **Windows platform parity** | Path normalization bugs, Cowork VM signature failures, WSL edge cases | Moderate-High—consistent pattern |
| **Documentation gaps** | `~/.claude/` internals, feature gating logic, settings schema | Moderate—community filling voids |
| **Model quality regression** | Feb updates degraded complex engineering performance | Emerging—needs more data |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-05

---

## 1. Today's Highlights

The Codex team is aggressively shipping Rust CLI alphas with three releases in 24 hours (v0.119.0-alpha.9–11), while a major 4-PR stack from @aibrahim-oai migrates realtime audio from WebSocket to WebRTC with echo cancellation and ChatGPT call integration. Meanwhile, the community is escalating around token consumption regressions and sandbox permission issues introduced in v0.118, with #14593 ("Burning tokens very fast") now at 431 comments and 166 upvotes.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| [rust-v0.119.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.119.0-alpha.9) | Rapid alpha iteration continues |
| [rust-v0.119.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.119.0-alpha.10) | — |
| [rust-v0.119.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.119.0-alpha.11) | — |

*No detailed changelogs provided for alpha releases.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|------------------|
| [#14593](https://github.com/openai/codex/issues/14593) [OPEN] Burning tokens very fast | **Critical cost regression** — Business-tier users report explosive token consumption with no clear trigger. 431 comments suggest widespread impact and lack of resolution. | 🔥 166 👍, extremely active |
| [#8197](https://github.com/openai/codex/issues/8197) [CLOSED] Panel grey after long runtime | VS Code extension UI degradation finally resolved after months. 41 comments show persistence. | 16 👍, closure appreciated |
| [#11981](https://github.com/openai/codex/issues/11981) [OPEN] 100% CPU with single agent | Mac App efficiency regression affecting Plus users on Apple Silicon. | 30 comments, 3 👍 |
| [#2952](https://github.com/openai/codex/issues/2952) [OPEN] @ search ignores .gitignore exclusions | Breaks workflow for monorepos and generated code directories. Longstanding (since Aug 2025). | 56 👍, 26 comments |
| [#15764](https://github.com/openai/codex/issues/15764) [OPEN] Code Helper Renderer >100% CPU on patch apply | **Regression** in VS Code extension builds after 26.313.41514. Performance killer for macOS devs. | 24 👍, 17 comments |
| [#2880](https://github.com/openai/codex/issues/2880) [OPEN] Copy/Export message as Markdown | Documentation workflow gap — users need clean export for external sharing. | 42 👍, 16 comments |
| [#13025](https://github.com/openai/codex/issues/13025) [OPEN] Desktop ignores project .codex/config.toml MCP | Config hierarchy bug breaks per-project MCP server setup (Serena, etc.). | 20 👍, 13 comments |
| [#16231](https://github.com/openai/codex/issues/16231) [OPEN] High CPU after 26.325.31654 update | **Fresh regression** on M5 Pro Macs. Thermal throttling reported. | 17 👍, 8 comments, updated today |
| [#16812](https://github.com/openai/codex/issues/16812) [OPEN] Context compaction regression in v0.118 | 2x compaction frequency → token explosion. Filed today, already 5 comments. | Fresh, escalating |
| [#16402](https://github.com/openai/codex/issues/16402) [OPEN] Sandbox write regression on Linux 0.118.0 | Permission denied errors blocking basic operations. | 6 👍, 7 comments |

---

## 4. Key PR Progress

| PR | Description | Impact |
|----|-------------|--------|
| [#16769](https://github.com/openai/codex/pull/16769) 4/4 Support ChatGPT realtime call auth | Final piece of 4-PR WebRTC migration stack. Enables ChatGPT voice call integration in Codex. | Major feature |
| [#16805](https://github.com/openai/codex/pull/16805) 1/4 Replace realtime websocket with WebRTC | Foundation: migrates audio transport from WebSocket to WebRTC for lower latency. | Infrastructure |
| [#16806](https://github.com/openai/codex/pull/16806) 2/4 Route TUI audio through echo cancellation | Shared AEC pipeline for realtime voice mode. | UX quality |
| [#16807](https://github.com/openai/codex/pull/16807) 3/4 Remove local playback interruption | Cleans up audio interruption logic in preparation for ChatGPT call parity. | Polish |
| [#16638](https://github.com/openai/codex/pull/16638)–[#16706](https://github.com/openai/codex/pull/16706) [codex-analytics] Stack | 5-PR telemetry stack: turn timestamps, token usage, steering metadata, queued submissions. | Observability |
| [#16813](https://github.com/openai/codex/pull/16813) Annotate skill doc reads with skill names | Fixes TUI ambiguity where `Read SKILL.md` hid which skill was loaded. | UX fix |
| [#16803](https://github.com/openai/codex/pull/16803) Fix reasoning summaries and orphan stream deltas | Prevents CLI panics from malformed response streams; restores missing reasoning summaries. | Stability |
| [#16810](https://github.com/openai/codex/pull/16810) Decode percent-escaped bare local file links | Fixes TUI markdown rendering of paths with spaces/Unicode. | Polish |
| [#16814](https://github.com/openai/codex/pull/16814) [exec-server] MVP startup and surface seams | Exec server foundation: typed payloads, sandbox handling, skills loading. | Architecture |
| [#16795](https://github.com/openai/codex/pull/16795) Fix ephemeral turn backfill in exec | Regression fix: `codex exec --ephemeral` was breaking app-server validation. | Stability |

---

## 5. Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **Long-term / adaptive memory** | [#8368](https://github.com/openai/codex/issues/8368) — niche corrections persist across sessions | 13 👍, acknowledged by team |
| **Voice transcription for TUI** | [#14630](https://github.com/openai/codex/issues/14630) — match App's superior voice models in CLI | 7 👍 |
| **Markdown table formatting** | [#8259](https://github.com/openai/codex/issues/8259) — human-readable whitespace | 42 👍 |
| **Terminal resize handling** | [#5259](https://github.com/openai/codex/issues/5259) — scrollback reflow | 22 👍 |
| **Local ingress for trusted controllers** | [#15355](https://github.com/openai/codex/issues/15355) — avoid PTY emulation | 5 comments |
| **Export/copy as Markdown** | [#2880](https://github.com/openai/codex/issues/2880) | 42 👍 |

---

## 6. Developer Pain Points

| Category | Symptoms | Priority Signal |
|----------|----------|---------------|
| **Token cost explosions** | #14593, #16812 — rapid consumption, context compaction regressions | 🔥 Critical |
| **macOS CPU/thermal issues** | #11981, #15764, #16231 — 100% CPU on Apple Silicon, multiple regression waves | High |
| **Sandbox permission regressions** | #16402, #16790, #15505 — v0.118 breaking write access, `.git` mounts, WSL paths | High |
| **WSL/Windows filesystem friction** | #13762, #16088, #13618, #16794 — `CODEX_HOME` on `/mnt/c`, worktree failures, git ops blocked | Medium-High |
| **Config hierarchy bugs** | #13025, #16797 — `.codexrc` ignored, project vs. global MCP conflicts | Medium |
| **TUI rendering glitches** | #5538, #8259, #5259 — input disappearance, tables, resize handling | Medium |

---

*Digest compiled from 50 issues and 50 PRs updated 2026-04-04 to 2026-04-05.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-05

## Today's Highlights

The Gemini CLI team is actively shipping infrastructure improvements across memory management, context compression, and platform stability. A major architectural rewrite of the context system landed with immutable episodic IR pipelines, while Windows compatibility and PTY resource leaks received critical fixes. The community continues to drive editor ecosystem expansion and voice input capabilities through sustained external contributions.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#3882](https://github.com/google-gemini/gemini-cli/issues/3882) | **Automatically save chat history** — *CLOSED* | Long-awaited parity with Claude Code; 300+ chat/month users need audit trails and session recovery. | 36 comments, 52 👍 — one of the most upvoted feature requests in project history. |
| [#22631](https://github.com/google-gemini/gemini-cli/issues/22631) | **Gemini CLI keeps thinking because of Too Many Requests** | Active API rate-limiting incident affecting production users for 24+ hours; regression between 0.31→0.33. | 13 comments, 9 👍; users reporting workarounds ineffective, needs urgent triage. |
| [#24200](https://github.com/google-gemini/gemini-cli/issues/24200) | **Is it stuck??** — *CLOSED* | Agent hangs on trivial queries (1+1); signals broader reliability concerns with execution loop. | 9 comments; resolved but indicates need for better hang detection UX. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads, search, and mapping** | EPIC for precision tooling—reducing token waste from misaligned reads, enabling method-bound navigation. | 4 comments; maintainer-driven, foundational for next-gen codebase understanding. |
| [#22863](https://github.com/google-gemini/gemini-cli/issues/22863) | **Unsafe object cloning patterns** | Code quality issue where generated proxies partially implement types—technical debt accumulating in agent outputs. | 2 comments; maintainer flagging for prompt engineering + guardrails. |
| [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) | **SSH session text scrambling** | Windows→gLinux SSH breaks terminal rendering; enterprise remote dev workflow blocker. | 1 comment; accessibility issue for non-technical users in cloudtop environments. |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) | **Subagents unaware of active Approval Modes** | Policy engine blocks calls but subagents don't know why—creates instruction/tool definition conflicts. | 1 comment, 1 👍; architectural gap in multi-agent orchestration. |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | **Memory routing: global vs. project** | Critical for multi-repo workflows—user preferences vs. codebase conventions need separation. | 1 comment, 2 👍; design spec ready for implementation. |
| [#24695](https://github.com/google-gemini/gemini-cli/issues/24695) | **Request contains an invalid argument** | Fresh regression in Plan Mode with simple file creation—blocks basic Pro tier usage. | 0 comments, newly filed; likely API contract change or validation strictness. |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with >128 tools** | Hard limit hit by power users with many MCP servers; needs intelligent tool scope limiting. | 0 comments; infrastructure scalability concern. |

---

## Key PR Progress

| # | PR | Feature / Fix | Technical Depth |
|---|-----|-------------|---------------|
| [#24643](https://github.com/google-gemini/gemini-cli/pull/24643) | **V0 Episodic Context Manager** | Immutable IR pipeline replacing monolithic string manipulation; four degradation processors (squashing, masking, blob degradation, semantic compression). | Foundational rewrite for long-context handling. |
| [#24653](https://github.com/google-gemini/gemini-cli/pull/24653) | **Fix bunx execution on Windows** | Removes GNU `env -S` shebang dependency causing "interpreter executable not found" on Windows. | Cross-platform packaging hygiene. |
| [#24694](https://github.com/google-gemini/gemini-cli/pull/24694) | **Prevent PTY resource leak** | Terminates `node-pty` subprocesses on SIGINT/exit; fixes zombie PTY hoarding on macOS/Linux. | Production stability for shell-heavy workflows. |
| [#24688](https://github.com/google-gemini/gemini-cli/pull/24688) | **Browser agent Clearcut metrics** | Adds 4 telemetry events (Connection, Navigation, Action, Result) with dual Clearcut+OTel logging. | Observability infrastructure for agent quality tracking. |
| [#24685](https://github.com/google-gemini/gemini-cli/pull/24685) | **Fix false positive binary detection** | Replaces naive high-byte heuristic with proper UTF-8 validation; fixes Rust files with U+FFFD. | Correctness for international source code. |
| [#24661](https://github.com/google-gemini/gemini-cli/pull/24661) | **Extensions select command** | Bulk enable/disable extensions via interactive UI; addresses power user workflow friction. | UX efficiency for complex setups. |
| [#21090](https://github.com/google-gemini/gemini-cli/pull/21090) | **Sublime Text + Emacs Client support** | Expands editor integration beyond VS Code; improves error messages for missing commands. | Ecosystem inclusivity. |
| [#18499](https://github.com/google-gemini/gemini-cli/pull/18499) | **Voice input with pluggable backend** | Zero-install Gemini transcription + optional local Whisper; addresses accessibility and speed use cases. | Major UX differentiator vs. competitors. |
| [#23957](https://github.com/google-gemini/gemini-cli/pull/23957) | **additionalContext for BeforeModel hooks** | Aggregates context from multiple hooks, migrates BeforeAgent to robust infrastructure. | Extensibility architecture for enterprise integrations. |
| [#24277](https://github.com/google-gemini/gemini-cli/pull/24277) | **Self-contained Dockerfile** | Multi-stage build eliminating host pre-build requirement; fixes `COPY packages/cli/dist/*.tgz` failure. | Container reproducibility. |

---

## Feature Request Trends

1. **Session Persistence & History** — Closed [#3882](https://github.com/google-gemini/gemini-cli/issues/3882) shows sustained demand for Claude Code-style chat archives; related memory routing work (#22819) indicates systemic investment in state management.

2. **Context Compression & Long-Horizon Tasks** — The Episodic Context Manager PR (#24643) and multiple degradation processor issues signal focus on scaling to 100K+ token workflows without quality loss.

3. **Multi-Agent Orcheination** — Subagent awareness (#23582), memory coordination (#22809), and tool scope limiting (#24246) reveal architecture maturation toward hierarchical agent systems.

4. **Enterprise Remote Development** — SSH rendering (#24202), PTY stability (#24694), and tracker enablement (#23925) target cloudtop and team deployment scenarios.

5. **Observability & Evaluation** — Component-level behavioral evals (#24353), telemetry expansion (#24688), and model steering CI (#24493) reflect production-readiness investments.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **API Rate Limiting & Reliability** | [#22631](https://github.com/google-gemini/gemini-cli/issues/22631) 24+ hour outages, [#24200](https://github.com/google-gemini/gemini-cli/issues/24200) hangs on trivial queries | **Critical** — blocks daily usage |
| **Windows-First Experience Gaps** | [#24653](https://github.com/google-gemini/gemini-cli/pull/24653) shebang failures, [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) SSH scrambling | **High** — platform parity debt |
| **Tool/Context Overflow** | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 128+ tool crashes, [#24634](https://github.com/google-gemini/gemini-cli/issues/24634) unbounded search output | **High** — power user scalability |
| **Subagent Coordination Bugs** | [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) approval mode unawareness, [#22863](https://github.com/google-gemini/gemini-cli/issues/22863) unsafe cloning | **Medium-High** — architectural complexity |
| **Editor Ecosystem Lock-in** | [#21090](https://github.com/google-gemini/gemini-cli/pull/21090) community driving Sublime/Emacs support | **Medium** — addressed by community PRs |
| **Voice Input Accessibility** | [#18499](https://github.com/google-gemini/gemini-cli/pull/18499) long-running community contribution | **Medium** — competitive feature gap |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-05

---

## 1. Today's Highlights

GitHub shipped **v1.0.18** with a notable experimental feature: the **Critic agent**, a secondary model that automatically reviews plans and complex implementations to catch errors early (currently Claude-only). Meanwhile, the community is actively reporting regressions—**multi-device session conflicts** and **session resume failures** are emerging as critical reliability issues following recent releases.

---

## 2. Releases

### [v1.0.18](https://github.com/github/copilot-cli/releases/tag/v1.0.18) — 2026-04-04

| Feature | Description |
|--------|-------------|
| **Critic Agent (Experimental)** | New complementary model automatically reviews generated plans and complex implementations for errors before execution. Available for Claude models via experimental flag. |
| **Session Resume Picker Fix** | Correctly groups sessions by branch and repository on first use—addresses prior UX confusion. |
| **preToolUse Hook** | Permissions infrastructure extension (description truncated in release notes). |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|------------------|
| [#107](https://github.com/github/copilot-cli/issues/107) **Segfault on Alpine Linux** — Tool calls crash with segmentation fault in Docker/alpine containers. | **Critical for containerized workflows.** Alpine is widely used in CI/CD and minimal dev environments. 12 comments, 4 👍, marked `needs-human` with `large` effort estimate. | Frustrated; workaround hunting ongoing. |
| [#1477](https://github.com/github/copilot-cli/issues/1477) **"Continuing autonomously (3 premium requests)" loop** | **Billing/UX regression.** Users report unexpected premium request consumption after model completion, suggesting state machine bug in autopilot mode. 7 comments, 9 👍. | Concerned about cost transparency; multiple confirmations. |
| [#1614](https://github.com/github/copilot-cli/issues/1614) **8-minute hangs post-compaction on cache miss** | **Performance degradation.** No timeout or user feedback during extended stalls—violates responsive CLI expectations. Root cause identified in logs. | Awaiting fix; impacts long-session workflows. |
| [#2513](https://github.com/github/copilot-cli/issues/2513) **Multi-device login regression (v1.0.15/16)** | **Breaking change.** Simultaneous sessions on Device A + B now auto-logout each other—worked for months prior. Fresh report, zero comments. | Just emerging; likely to escalate. |
| [#2510](https://github.com/github/copilot-cli/issues/2510) **`--resume` missing new sessions** | **Data loss risk.** Sessions not appearing in resume picker despite clean exit. Confirmed in v1.0.17. | Immediate impact on workflow continuity. |
| [#1082](https://github.com/github/copilot-cli/issues/1082) **Sudo commands hang without password prompt** | **Security/UX blocker.** Elevated permission tasks fail silently. 7 👍 indicates broad impact. | Long-standing; no resolution yet. |
| [#1276](https://github.com/github/copilot-cli/issues/1276) **Image paste from clipboard** | **Multimodal gap.** CLI lacks vision input support that competitors (Claude Code, etc.) offer. 6 👍. | Feature parity request; workflow friction. |
| [#2333](https://github.com/github/copilot-cli/issues/2333) **No toggle for auto-compaction** | **Control loss.** Forced context management at 95% threshold disrupts intentional long-context workflows. | Power user frustration; autonomy request. |
| [#232](https://github.com/github/copilot-cli/issues/232) **System prompt parameter** | **Customization gap.** No global system prompt override outside repo-specific files. 7 👍. | Repeat request for agent behavior control. |
| [#716](https://github.com/github/copilot-cli/issues/716) **Auth failure: ENOTFOUND next-waitlist.azurewebsites.net** | **Onboarding blocker.** DNS resolution failure during authentication flow. 5 👍, months old. | Persistent infrastructure issue. |

---

## 4. Key PR Progress

**No Pull Requests updated in the last 24 hours.**

*Note: Active development appears release-driven; community contributions may be managed through internal GitHub workflows not visible in public PRs.*

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Context Window Control** | #2333 (auto-compaction toggle), #232 (system prompts), #1614 (compaction hangs) | Users demand granular control over memory management and agent behavior configuration. |
| **Multimodal Input** | #1276 (image paste), implicit in Critic agent release | CLI lagging behind IDE extensions and competitors in vision capabilities. |
| **Session Reliability** | #2513 (multi-device), #2510 (resume), #1614 (hangs) | Infrastructure for session persistence and cross-device sync needs hardening. |
| **Transparency/ Observability** | #1477 (premium request clarity), #1614 (hang feedback) | Users need clearer state indication and billing visibility during autonomous operation. |

---

## 6. Developer Pain Points

| Category | Summary | Top Issues |
|----------|---------|------------|
| **Reliability Regressions** | v1.0.15–1.0.18 introduced session management bugs (resume, multi-device, compaction) that break core workflows. | #2513, #2510, #1614 |
| **Container/Minimal Environment Support** | Alpine Linux segfaults and missing dependency checks (wl-clipboard) indicate insufficient testing in non-standard environments. | #107, #2511 |
| **Permission & Elevation Handling** | Sudo hangs and auth DNS failures create friction for system-level operations and initial setup. | #1082, #716 |
| **Cost & Autonomy Anxiety** | Opaque premium request counting and forced autonomous continuation erode trust in billing. | #1477 |
| **Customization Limits** | Lack of system prompts, auto-compaction toggles, and image input restrict power user workflows. | #232, #2333, #1276 |

---

*Digest compiled from github.com/github/copilot-cli public activity. For full context, follow individual issue links.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-05

## Today's Highlights

The community is actively pushing observability and reliability improvements with two PRs for TPS metering and diagnostic logging landing today. A significant rewrite proposal to Bun + TypeScript + React Ink (#1707) continues to generate discussion, while clipboard handling and character encoding bugs highlight ongoing cross-platform stability challenges.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) | Remote Control: Continue local sessions from any device | Addresses a major workflow gap for developers who switch between desktop and mobile contexts; would differentiate Kimi from other CLI-first tools | 2 comments, 👍 1 — sustained interest since Feb |
| [#1327](https://github.com/MoonshotAI/kimi-cli/issues/1327) | More Steps per turn by default | Exposes a configuration friction point where conservative defaults interrupt long-running agent workflows despite ample context headroom | 1 comment — user-provided workaround exists but pain is real |
| [#1755](https://github.com/MoonshotAI/kimi-cli/issues/1755) | Show complete subagent interaction records | Critical for debugging agentic systems; current opacity forces users to infer subagent behavior from tool calls alone | New (Apr 4), 1 comment — fills observability gap |
| [#1754](https://github.com/MoonshotAI/kimi-cli/issues/1754) | Character garbling/mojibake on macOS | i18n/encoding bug affecting non-ASCII text display; blocks reliable use for international users | New (Apr 4), 1 comment — needs repro details |
| [#1760](https://github.com/MoonshotAI/kimi-cli/issues/1760) | TPS meter config and `/tps` command | Performance visibility is table stakes for LLM tools; users want to understand generation speed and compare model configs | New (Apr 4), 0 comments — PR already filed (#1759) |
| [#1757](https://github.com/MoonshotAI/kimi-cli/issues/1757) | Ctrl+V crash on non-text clipboard data | Robustness issue: clipboard pasting screenshots or rich content shouldn't crash the CLI | New (Apr 4), 0 comments — PR already filed (#1758) |
| [#1729](https://github.com/MoonshotAI/kimi-cli/issues/1729) | Custom session naming/renaming | Session organization at scale; auto-titles become useless for long-running projects | Closed Apr 4 — likely resolved or superseded |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#1743](https://github.com/MoonshotAI/kimi-cli/pull/1743) | `/btw` side question command | Adds non-interrupting parallel LLM queries with dual-layer rendering; significant UX enhancement for multitasking | Open, active (updated Apr 5) |
| [#1756](https://github.com/MoonshotAI/kimi-cli/pull/1756) | Diagnostic logging + export bundling | 25+ error path instrumentations to improve debuggability of user-reported issues | Open, active (updated Apr 5) |
| [#1749](https://github.com/MoonshotAI/kimi-cli/pull/1749) | Filter unsupported content types + `reasoning_key` support | Fixes OpenAI-compatible API integration gaps; enables reasoning model output extraction | Open |
| [#1709](https://github.com/MoonshotAI/kimi-cli/pull/1709) | Fix diff inline highlight tab alignment | Corrects visual offset bugs in code diff rendering when tabs are present | Open |
| [#1759](https://github.com/MoonshotAI/kimi-cli/pull/1759) | TPS meter config and `/tps` command | Real-time tokens-per-second display in status bar; addresses #1760 | Open |
| [#1758](https://github.com/MoonshotAI/kimi-cli/pull/1758) | Fix Ctrl+V crash on non-text clipboard | Two-layer defense: type checking + graceful fallback; resolves #1757 | Open |
| [#1707](https://github.com/MoonshotAI/kimi-cli/pull/1707) | Rewrite: Python → Bun + TypeScript + React Ink | 32k LOC, 166 files, 37 tests — ambitious full-stack migration with performance and maintainability claims; controversial given ecosystem maturity | Open, active discussion |

---

## Feature Request Trends

1. **Observability & Transparency** — Subagent introspection (#1755), TPS metering (#1760/#1759), and diagnostic logging (#1756) cluster around a demand for "seeing inside" the system.

2. **Cross-Device Workflow Continuity** — Remote session handoff (#1282) signals users want Kimi to bridge local CLI power with mobile flexibility.

3. **Agentic Ergonomics** — Higher step limits (#1327) and side queries (`/btw`, #1743) reflect friction in long-running autonomous workflows.

4. **Configuration Control** — Custom naming (#1729), TPS toggles, and reasoning key extraction (#1749) show users want fine-grained behavioral control.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Clipboard/Input Robustness** | #1757, #1754 — crashes and garbling on paste operations | High — breaks basic interaction |
| **Opaque Agent Internals** | #1755 — inability to inspect subagent reasoning blocks debugging | Medium-High — impacts power users |
| **Conservative Default Limits** | #1327 — artificial step caps despite available context | Medium — workaround exists but UX is poor |
| **Cross-Platform Stability** | Encoding issues on macOS, Darwin clipboard handling | Medium — platform-specific QA gaps |
| **Python Runtime Concerns** | #1707 rewrite proposal — performance and distribution pain driving migration pressure | Debated — significant engineering investment proposed |

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-05

## Today's Highlights

OpenCode shipped two patch releases (v1.3.14–v1.3.15) to fix critical Windows plugin loading and npm install failures caused by hardcoded CI build paths. Meanwhile, the community is actively triaging a surge of Windows-specific regressions and debating core architectural decisions around proxy support, runtime alternatives (Deno), and token performance metrics.

---

## Releases

| Version | Key Changes |
|---------|-------------|
| **v1.3.15** | Fixed npm install failures when Arborist hit compiled binary's `node-gyp` path. Community contribution by @Yuxin-Dong removing redundant Kimi skill section. |
| **v1.3.14** | Restored git-backed review modes (uncommitted/branch diffs); fixed revert chain snapshot restoration; added macOS managed preferences for MDM-enforced config; addressed session stuck states. |

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|------------------|
| [#531](https://github.com/anomalyco/opencode/issues/531) HTTP_PROXY & HTTPS_PROXY support | Critical for enterprise and regional firewall users; 9+ months old with persistent activity | 38 comments, 24 👍 — highly demanded, implementation details still debated |
| [#4406](https://github.com/anomalyco/opencode/issues/4406) Read-before-edit tool requirement | Questions core agent workflow design; impacts token efficiency | 32 comments, marked `good first issue` — philosophical divide on tool semantics |
| [#20650](https://github.com/anomalyco/opencode/issues/20650) Kimi k2.5 tool calling bugs | JSON parsing failures breaking bash tool execution | 28 comments, urgent reports from active users |
| [#16499](https://github.com/anomalyco/opencode/issues/16499) GPT-5.4 fast mode (/fast) | Keeping pace with OpenAI's latest model capabilities | 15 comments, 62 👍 — strong user demand for feature parity |
| [#5374](https://github.com/anomalyco/opencode/issues/5374) + [#6096](https://github.com/anomalyco/opencode/issues/6096) Tokens/second display | Performance visibility is a recurring theme across two issues | Combined 27 comments, 77 👍 — users want benchmarking tools |
| [#20695](https://github.com/anomalyco/opencode/issues/20695) Memory Megathread | Centralized tracking for memory leaks; maintainers explicitly requesting heap snapshots | 12 comments, structured diagnostic approach |
| [#21032](https://github.com/anomalyco/opencode/issues/21032) oh-my-openagent broken on 1.3.14 | Windows plugin regression from v1.3.13 → v1.3.14 | 11 comments, 5 👍 — immediate user impact |
| [#5122](https://github.com/anomalyco/opencode/issues/5122) Mid-stream context injection | UX gap vs. Claude Code; workflow interruption friction | 8 comments, 9 👍 — competitive feature gap |
| [#5635](https://github.com/anomalyco/opencode/issues/5635) WSL backend support for Desktop | Windows ecosystem integration gap | 8 comments, 33 👍 — significant Windows developer population affected |
| [#13819](https://github.com/anomalyco/opencode/issues/13819) Deno runtime alternative | Architectural flexibility and security sandboxing discussion | 7 comments — early exploratory phase |

---

## Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| [#21056](https://github.com/anomalyco/opencode/pull/21056) Fix DB migration on every run | Resolves channel-specific database migration loops affecting Nix and local builds | Open, closes #21057 & #16885 |
| [#21017](https://github.com/anomalyco/opencode/pull/21017) Refactor task tool to Effect pattern | Modernizes tool architecture using `Tool.defineEffect()` with proper service injection | Open, vouched contributor |
| [#21052](https://github.com/anomalyco/opencode/pull/21052) Remove agent context from tool init | Simplifies tool initialization, improves predictability across agents | Open |
| [#21046](https://github.com/anomalyco/opencode/pull/21046) Preserve agent identity across compaction | Addresses specialized agent degradation in long sessions | Open, closes #21045 |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) Mobile touch optimization | First-class mobile/touch support while preserving desktop UX | Open |
| [#13854](https://github.com/anomalyco/opencode/pull/13854) Fix streaming markdown after completion | Corrects table rendering bug where final rows were truncated | Open, needs issue |
| [#4604](https://github.com/anomalyco/opencode/pull/4604) Range-restricted formatting | clang-format only touches changed lines, reducing diff noise | Open, long-running |
| [#14468](https://github.com/anomalyco/opencode/pull/14468) LiteLLM provider with auto-discovery | Native proxy support eliminating manual model configuration | Open |
| [#13860](https://github.com/anomalyco/opencode/pull/13860) GitHub Enterprise Server support | GHES compatibility for GitHub Action | Open |
| [#19540](https://github.com/anomalyco/opencode/pull/19540) Disable sticky scroll when user scrolls up | UX fix for TUI auto-scroll behavior | Open |

---

## Feature Request Trends

1. **Performance Observability** — Tokens/second metrics (#5374, #6096, #17449) and real-time token display dominate user requests for benchmarking and cost transparency.

2. **Model Control Surface** — Fast mode toggles (/fast), thinking effort levels, and granular model enable/disable controls reflect demand for fine-grained LLM behavior management.

3. **Enterprise & Restricted Environments** — HTTP_PROXY support, MDM configs, and GHES integration signal growing enterprise adoption friction.

4. **Cross-Platform Runtime Flexibility** — WSL backend, Deno alternative, and Termux detection show interest in expanding beyond Bun-centric architecture.

5. **Workflow Continuity** — Mid-stream injection, agent identity preservation, and context compaction improvements target long-session reliability.

---

## Developer Pain Points

| Category | Specific Issues | Severity |
|----------|---------------|----------|
| **Windows Instability** | Plugin loading failures (#21032, #21041), fresh install breakage (#20985), FileTime path issues (#20071) | Critical — multiple regressions in v1.3.14 |
| **Silent/Opaque Behaviors** | Auto-updates without notification (#21037), double-counted OpenRouter credits (#20937), aggressive timeouts on local models (#17307) | High — trust and cost concerns |
| **Configuration Rigidity** | Cannot disable question tool (#13827), forced environment system prompts (#1894), no per-model filtering (#21035) | Medium — power user friction |
| **Migration Reliability** | JSON→SQLite migration reruns (#16885, #21057) | Medium — startup performance impact |
| **TUI/Terminal Compatibility** | Built-in terminal rendering (#9750), window state reset (#15165) | Medium — daily UX friction |

---

*Data sourced from github.com/anomalyco/opencode on 2026-04-05.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-05

## Today's Highlights

The Pi team shipped critical fixes for the Edit tool and OpenAI/Azure Responses replay bugs that were bricking sessions, while landing substantial extension API improvements including footer segments, side panels, and proper tool/command unregistration. Gemma 4 support arrived with thinking capabilities, though timezone handling in system prompts remains an active pain point.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|------------------|
| [#808](https://github.com/badlogic/pi-mono/issues/808) `pi -p` live output in print mode | Print mode's "black box" behavior hurts CI/debugging workflows; users want streaming visibility like OpenCode | 4 comments, acknowledged as UX gap |
| [#2803](https://github.com/badlogic/pi-mono/issues/2803) Edit tool fails for local models | Critical regression breaking core editing functionality across local model setups | 4 comments, duplicate of #2786, fast-closed with fix |
| [#2702](https://github.com/badlogic/pi-mono/issues/2702) OpenAI/Azure Responses replay invalid reasoning history | 400 errors on multi-turn tool calls with reasoning models—session-breaking bug for enterprise Azure users | 4 comments, root cause identified in `packages/ai` |
| [#2796](https://github.com/badlogic/pi-mono/issues/2796) Branching onto tool_use creates unrecoverable 400 | Tree navigation + unresolved tool calls = permanently broken sessions; recovery UX gap | 3 comments, filed during OSS weekend for documentation |
| [#2804](https://github.com/badlogic/pi-mono/issues/2804) Shift+Enter broken in Zed | Terminal integration friction for Zed users; diagnostic script contributed by community | 3 comments, environment-specific key handling issue |
| [#2809](https://github.com/badlogic/pi-mono/issues/2809) Video/audio attachment support | Gemini 3+ video understanding unavailable; Pi limited to images (JPEG/PNG/GIF/WEBP) | 3 comments, feature gap vs. competitor capabilities |
| [#2786](https://github.com/badlogic/pi-mono/issues/2786) Edit tool "edits must contain at least one replacement" | Widespread 0.64.0 regression affecting all file edits; preflight validation bug | 3 comments, 👍 1, high-impact fix shipped |
| [#2681](https://github.com/badlogic/pi-mono/issues/2681) Bad control character in JSON crashes session | Agent failures become hard stops instead of retryable errors; interrupts flow | 3 comments, parsing robustness issue |
| [#2822](https://github.com/badlogic/pi-mono/issues/2822) `Box.render` crashes on non-component tool returns | Extension API footgun: custom renderers can crash TUI without validation | 2 comments, defensive programming gap |
| [#2814](https://github.com/badlogic/pi-mono/issues/2814) UTC system prompt date causes hallucinations | Follow-up to #1873: "yesterday/tomorrow" errors in changelogs due to hardcoded UTC | 0 comments, 👍 0, filed as "supreme issue" |

---

## Key PR Progress

| PR | Description | Impact |
|----|-------------|--------|
| [#2825](https://github.com/badlogic/pi-mono/pull/2825) opencode-cli compatible headers for Zen | Dynamic runtime headers with random IDs to avoid 429 rate limits on free tiers | Unblocks qwen3.6-plus-free and other Zen models |
| [#2817](https://github.com/badlogic/pi-mono/pull/2817) Quote variables in doom build script | Shellcheck SC2086 fix for `$RESX`/`$RESY`—prevents globbing/word splitting | Code quality, extension example hardening |
| [#2823](https://github.com/badlogic/pi-mono/pull/2823) Gemma 4 26B/31B model definitions | Adds new Google models with updated attributes | Expands model catalog coverage |
| [#2820](https://github.com/badlogic/pi-mono/pull/2820) Footer segments and side panels for extensions | `registerFooterSegment()`, `setSidePanel()` APIs—richer extension UI | Major extension capability expansion |
| [#2819](https://github.com/badlogic/pi-mono/pull/2819) `ctx.reload` from all extension contexts | Promotes reload from command-only to general extension capability | Lifecycle management improvement |
| [#2818](https://github.com/badlogic/pi-mono/pull/2818) Unregister extension tools and commands | Symmetric APIs for `unregisterTool()`/`unregisterCommand()` | Proper cleanup, reversible runtime state |
| [#2811](https://github.com/badlogic/pi-mono/pull/2811) Gemma 4 thinking support | `thinkingLevel` (MINIMAL/HIGH) vs `thinkingBudget` for Gemma 4 compatibility | Fixes 400 errors, documents Google AI Studio setup |
| [#2724](https://github.com/badlogic/pi-mono/pull/2724) Preserve diff alignment highlighting | Fixes inverse highlighting on leading whitespace in `renderDiff()` | Visual diff quality improvement |
| [#2777](https://github.com/badlogic/pi-mono/pull/2777) Allow PR | Minimal description—appears to be workflow/permission fix | Repository maintenance |

---

## Feature Request Trends

1. **Richer Media Support** — Video and audio attachments (#2809) requested to match Gemini 3 capabilities; currently image-only
2. **Streaming/Visibility Improvements** — Live output in print mode (#808), real-time stderr from RPC subprocesses (#2805)
3. **Extension API Completeness** — Unregistration (#2818), broader context access (#2819), UI composition (#2820)
4. **Model-Specific Handling** — Thinking budget/level nuances for Gemma 4 (#2812, #2811), provider-specific header requirements (#2824, #2821)
5. **Fuzzy Discovery** — Skill description matching in autocomplete (#2807), not just name-based

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Session corruption & recovery** | #2796 (unrecoverable 400s), #2702 (invalid history replay), #2810 (Copilot 413 bricks sessions) | Critical—data loss risk |
| **Edit tool reliability** | #2786, #2803 (universal failures in 0.64.0), #2681 (JSON control characters) | High—core workflow broken |
| **Timezone/date hallucinations** | #2814 (UTC hardcoding), follow-up to #1873/#2131 | Medium—silent correctness bugs |
| **Terminal integration edge cases** | #2804 (Zed key handling), #2805 (stderr visibility) | Medium—environment-specific friction |
| **Extension API footguns** | #2822 (render crashes), #2781 (skill collision precedence) | Medium—developer experience gaps |
| **Provider-specific quirks** | #2824 (opencode rate limits), #2821 (Vertex proxy auth), #2815 (Antigravity deprecation) | Medium—ecosystem fragmentation |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-05

## Today's Highlights

The Qwen Code team pushed significant core improvements with **adaptive token escalation** and **thinking block retention** to optimize GPU utilization and multi-turn reasoning coherence. A surge in VS Code plugin UI bugs and clipboard-related regressions on Linux/Wayland signal growing pains from the 0.14.0 release. Community contributions remain strong with 28 active PRs, including an experimental **Agent Team** feature for parallel sub-agent coordination.

---

## Releases

*No new releases in the last 24 hours.*

**Note:** The nightly release `v0.14.1-nightly.20260404.3bce84d5d` [failed](https://github.com/QwenLM/qwen-code/issues/2870) due to workflow issues.

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|---------------|-------------------|
| [#2885](https://github.com/QwenLM/qwen-code/issues/2885) **Ctrl+V image paste broken in 0.14.0 (Linux/Wayland)** — Clipboard image paste regression breaks core UX for Linux users after 0.14.0 upgrade. | Critical regression affecting daily workflow; no workaround provided. | Reported with detailed environment info; awaiting triage. |
| [#2873](https://github.com/QwenLM/qwen-code/issues/2873) **VS Code plugin: session tab width overflow** — Single session tabs expand infinitely, blocking other tabs. | Severe UI breakage making multi-file workflow impossible. | Chinese and English reports; screenshot provided. |
| [#2883](https://github.com/QwenLM/qwen-code/issues/2883) **VS Code: chat scrollbar drag failure** — Scrollbar unresponsive at bottom of chat input. | Frustrating accessibility issue for long conversations. | Video reproduction attached. |
| [#2899](https://github.com/QwenLM/qwen-code/issues/2899) **Auto "Co-authored-by" trailer on git commits** — Unwanted attribution to `qwen-coder@alibabacloud.com` appears on all commits, polluting contributor graphs. | Privacy and attribution concern; affects professional workflows. | Zero comments suggests recent filing; likely to escalate. |
| [#2877](https://github.com/QwenLM/qwen-code/issues/2877) **TUI colors not configurable** — Dark blue "thinking" text on black background is unreadable. | Accessibility gap; AI failed to self-correct when asked. | Specific color contrast complaint with attempted workaround. |
| [#2876](https://github.com/QwenLM/qwen-code/issues/2876) **Request: thinking depth option** — User observes VS Code plugin + 3.6plus produces shallower reasoning than web interface. | Perceived quality regression in plugin vs. web; configuration gap vs. Codex. | Feature parity request with competitor reference. |
| [#2605](https://github.com/QwenLM/qwen-code/issues/2605) **Windows: paste image/file from clipboard** — Long-standing request for Windows Command Prompt clipboard integration. | Cross-platform parity gap; affects Windows UX significantly. | 9 comments, 2+ weeks old; needs triage decision. |
| [#2882](https://github.com/QwenLM/qwen-code/issues/2882) **WeChat QR scan fails** — "please upgrade WeChat interface version in OpenClaw" error with latest WeChat 8.0.70. | Blocks China-specific authentication flow. | Russian-language report; integration maintenance issue. |
| [#1514](https://github.com/QwenLM/qwen-code/issues/1514) **LSP support plans?** *(closed)* — Competitive feature request referencing OpenCode and Claude Code LSP support. | Strategic positioning vs. competitors; closed without clear resolution. | 3 comments; may resurface given competitive pressure. |
| [#2887](https://github.com/QwenLM/qwen-code/issues/2887) **Thank you letter: significant code quality improvements** — Detailed positive feedback on backend, frontend, DB migration, and deployment assistance. | Rare comprehensive validation; counters negative bias in issue trackers. | No comments; serves as testimonial for team morale. |

---

## Key PR Progress

| PR | Feature/Fix | Technical Significance |
|----|-------------|------------------------|
| [#2898](https://github.com/QwenLM/qwen-code/pull/2898) **Adaptive output token escalation (8K default + 64K retry)** | Reduces GPU slot over-reservation from 32K fixed to 8K default, escalating only on truncation. | 4x concurrency improvement; addresses infrastructure cost at scale. |
| [#2897](https://github.com/QwenLM/qwen-code/pull/2897) **Thinking block cross-turn retention with idle cleanup** | Preserves 10–60K token reasoning blocks across multi-step tool chains instead of stripping them. | Fixes reasoning coherence in complex agent workflows; includes 5-min idle TTL. |
| [#2886](https://github.com/QwenLM/qwen-code/pull/2886) **Agent Team experimental feature** | Parallel sub-agent coordination with lead agent orchestration. | Major architectural expansion; gated behind experimental flag for safe iteration. |
| [#2864](https://github.com/QwenLM/qwen-code/pull/2864) **Intelligent tool parallelism** | Batches read-only tools (Read, Grep, git log) while preserving sequential execution for mutating operations. | Latency reduction for common read-heavy agent patterns. |
| [#2854](https://github.com/QwenLM/qwen-code/pull/2854) **Mid-turn queue drain** | Allows user messages to interrupt tool execution instead of buffering until round completion. | Responsiveness improvement for interactive sessions. |
| [#2879](https://github.com/QwenLM/qwen-code/pull/2879) **Terminal path completion** | File/directory autocomplete triggered by `/`, `./`, `../`, `~/` prefixes with Tab/Arrow navigation. | CLI UX parity with Claude Code; reduces path typing friction. |
| [#2871](https://github.com/QwenLM/qwen-code/pull/2871) **Queue input editing via Up arrow** | Edit queued messages by pressing Up at input top, with Down to re-queue. | Reduces wasted turns from incorrect queued instructions. |
| [#2889](https://github.com/QwenLM/qwen-code/pull/2889) **Dangerous actions behavior guidance** | Layered safety rules for destructive operations (rm -rf, DROP TABLE) with explicit user confirmation requirements. | Safety hardening beyond single "no remote push" rule. |
| [#2850](https://github.com/QwenLM/qwen-code/pull/2850) **Fix env-prefixed shell permission matching** | Strips `VAR=value` prefixes before matching saved permission rules. | Eliminates repeated "Always allow" prompts for common patterns. |
| [#2884](https://github.com/QwenLM/qwen-code/pull/2884) **Restore `?` shortcuts in Vim normal mode** | Fixes keyboard shortcut regression where `?` was swallowed by Vim handler. | Small but noticeable UX fix for Vim mode users. |

---

## Feature Request Trends

1. **Thinking/Reasoning Control** — Multiple requests for configurable reasoning depth (#2876), with explicit comparison to Codex's tiered options. Suggests users perceive inconsistency between web and plugin outputs.

2. **Clipboard & Media Integration** — Persistent theme: Windows clipboard paste (#2605), Linux/Wayland regression (#2885), and image handling improvements. Cross-platform clipboard remains uneven.

3. **Token Efficiency Tools** — Request for Rust Token Killer integration (#2880) indicates power-user concern about context window pollution and cost optimization.

4. **VS Code Plugin Polish** — UI/UX refinements dominate: tab sizing (#2873), scrolling (#2883), and color theming (#2877). Plugin maturity lagging behind core CLI.

5. **Authentication & Integration** — WeChat (#2882) and OAuth flows need maintenance; international user base requires diverse auth options.

---

## Developer Pain Points

| Category | Issue | Frequency/Impact |
|----------|-------|----------------|
| **Regression Testing** | 0.14.0 introduced clipboard breakage (#2885) and potential release pipeline failures (#2870). | High — core functionality broken in stable release. |
| **Configuration Gaps** | Colors (#2877), thinking depth (#2876), and attribution behavior (#2899) lack user control. | Medium-High — accessibility and preference violations. |
| **Permission Friction** | Environment-prefixed commands bypass saved rules (#2850, now fixed). | Medium — repetitive prompts interrupt flow. |
| **Platform Parity** | Windows clipboard (#2605), Linux/Wayland (#2885), WeChat (#2882) lag behind macOS experience. | Medium — expansion barrier for non-macOS users. |
| **Attribution Hygiene** | Forced `Co-authored-by` trailer (#2899) affects professional commit history. | Medium — GitHub contributor graph pollution. |

---

*Digest compiled from github.com/QwenLM/qwen-code activity on 2026-04-04.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*