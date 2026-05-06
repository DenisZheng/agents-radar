# AI CLI Tools Community Digest 2026-04-24

> Generated: 2026-04-24 00:18 UTC | Tools covered: 8

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

# Cross-Tool AI CLI Ecosystem Report — 2026-04-24

## 1. Ecosystem Overview

The AI CLI developer tools landscape is characterized by rapid iteration velocity, converging feature expectations, and growing operational complexity as users deploy these tools in production environments. All major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi CLI, OpenCode, Pi, and Qwen Code—shipped updates within the last 48 hours, indicating intense competitive pressure. A defining tension exists between "agentic autonomy" (YOLO modes, subagent orchestration, background execution) and "user control" (approval workflows, cost transparency, interruptibility). The community is simultaneously demanding more powerful autonomous capabilities and more granular oversight mechanisms, reflecting maturation from experimentation to mission-critical deployment.

---

## 2. Activity Comparison

| Tool | Releases (24h) | PRs Active/Merged | Hot Issues (≥2 comments) | Standout Activity |
|------|---------------|-------------------|------------------------|-------------------|
| **Claude Code** | 2 (v2.1.118–119) | 10 (6 merged, 4 open) | 10 | `/buddy` removal protest: 935 👍, 215 comments—largest mobilization in project history |
| **OpenAI Codex** | 2 (rust-v0.123.0–124.0) + 3 alphas | 10+ (heavy HAI stack) | 10 | 4 stacked PRs for human-agent interaction reintroduction; macOS CPU regression most active |
| **Gemini CLI** | 3 (v0.39.0–v0.41.0-nightly) | 10 (9 open, 1 P0 critical) | 10 | P0 lockfile race condition; 3 competing Windows backspace PRs; "Cognitive Repository" bot architecture |
| **GitHub Copilot CLI** | 3 (v1.0.35, .35-5, .35-6) | 1 open | 10 | Low PR velocity despite release cadence; model parity (#1703) and rate limiting dominate |
| **Kimi CLI** | 0 (v1.38.0 stable) | 27 active | 10 | Highest PR velocity; dual independent PRs for same color inversion bug; RalphFlow architecture review |
| **OpenCode** | 2 (v1.14.21–22) | 10 (2 merged memory fixes) | 10 | Memory megathread (#20695) with 63 comments; maintainer-structured diagnostic protocol |
| **Pi** | 1 (v0.70.0) | 15 merged + 15 discussed | 10 | Exceptional merge velocity; 30 actively discussed issues; rapid bug closure pattern |
| **Qwen Code** | 2 (v0.15.1 + nightly) | 10 | 10 | OAuth policy debate: 117 comments; React state management regressions emerging |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **Session lifecycle management** | Claude Code, GitHub Copilot CLI, OpenCode, Pi | List/delete/cleanup operations; corruption recovery; cross-device sync; session state persistence across turns |
| **Model selection & routing intelligence** | Gemini CLI, Qwen Code, Claude Code, Copilot CLI | Availability-aware fallback; respect user overrides; eliminate "ignored config" bugs; org-enabled model parity across surfaces |
| **Cost/usage transparency** | Claude Code, Kimi CLI, Qwen Code, Copilot CLI | Accurate quota display (color thresholds, ratio calculations); subagent cost visibility; rate limit clarity with actionable feedback |
| **Terminal/PTY integration** | Kimi CLI, OpenCode, Pi, Qwen Code | Persistent PTY sessions for interactive commands; shell escape improvements; terminal compatibility (Windows, tmux, SSH) |
| **MCP ecosystem hardening** | Kimi CLI, Gemini CLI, Qwen Code, Claude Code | JSON Schema strictness; stdio transport lifecycle; HTTP transport support; auth compatibility; stderr draining |
| **Subagent/orchestration controls** | Qwen Code, Gemini CLI, Kimi CLI, Claude Code | Concurrency limits; mid-flight interruption; live transcript access; false success detection; context visibility to parent |
| **Enterprise configuration** | Claude Code, Copilot CLI, Pi, Gemini CLI | URL whitelisting; custom PR endpoints; proxy handling; SSO/OAuth; GHES support; cache retention flexibility |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Distinctive Approach |
|-----------|---------|----------------------|
| **Agent autonomy architecture** | Gemini CLI (RalphFlow), Qwen Code (model-facing controls), Kimi CLI (RalphFlow convergence detection) | Gemini: ephemeral context + loop prevention; Qwen: parent-agent live transcript monitoring; Kimi: convergence detection for infinite loop prevention |
| **Vim/terminal-native UX** | Claude Code, Pi | Claude Code: full vim visual mode, persistent `/config`; Pi: searchable auth provider flow, OSC sequence configurability, sixel image support |
| **Memory & context systems** | OpenCode, Gemini CLI | OpenCode: shadow snapshot index with gitignore eviction; Gemini: global vs. project memory routing, auto-memory scratchpad persistence |
| **Open-source positioning** | OpenCode, Pi, Qwen Code | OpenCode: rapid model provider additions, community-driven; Pi: extension API ecosystem; Qwen: bundled operational safety skills (`oh-my-agent-check`) |
| **Enterprise/closed ecosystem** | Claude Code, Copilot CLI, Codex | Claude Code: policy override precedence, Bedrock integration; Copilot: GitHub-native sync, org model gating; Codex: Secure Enclave keys, Guardian proxy management |
| **Cross-platform parity** | Pi, Gemini CLI | Pi: explicit Windows Terminal sixel, tmux CSI-u fixes; Gemini: 3 competing Windows backspace PRs, SSH detection |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **Highest velocity, established** | Claude Code, OpenAI Codex | Sustained release cadence; large issue volumes; enterprise feature depth; but also "silent removal" backlash indicating governance maturity gaps |
| **Highest velocity, emerging** | Kimi CLI, Pi | Kimi: 27 PRs/day, rapid bug response (dual PRs for same issue); Pi: 15 merges/day, rapid closure pattern; both show contributor scaling |
| **Structured maturity** | OpenCode, Gemini CLI | OpenCode: maintainer-led diagnostic protocols for memory; Gemini: P0/P1 labeling, "Cognitive Repository" automation infrastructure |
| **Enterprise-cautious** | GitHub Copilot CLI | Regular releases but low PR velocity; heavy focus on rate limiting, session stability, VS Code parity—suggests conservative integration with larger product surface |
| **Policy-challenged** | Qwen Code | 117-comment policy debate signals community investment but also trust fragility; React regressions suggest frontend architectural debt |

**Community health signals**: Claude Code's `/buddy` protest (935 👍) demonstrates emotional investment but also communication failure. Pi's rapid issue closure with detailed terminal analysis shows mature maintainer-user collaboration. OpenCode's memory megathread with explicit "heap snapshots, not LLM solutions" request indicates sophisticated user base.

---

## 6. Trend Signals

| Trend | Evidence | Implications for Developers |
|-------|----------|----------------------------|
| **Production agent reliability > demo capability** | Gemini's MAX_TURNS false success (#22323), Qwen's concurrency limits (#3568), Claude's hook crash (#48508), Kimi's PTY allocation (#2037) | Design for observable failure modes, graceful degradation, and explicit resource bounds from inception |
| **Context window as contested resource** | Claude's ephemeral hook output (#45849), OpenCode's compaction limits (#23770), Codex's 1M removal (#19208), Gemini's compact output allowlist (#25877) | Token economics are becoming user-visible; tools need configurable truncation, intelligent summarization, and transparent accounting |
| **Multi-model heterogeneity as default** | Pi's per-model thinking levels (#3208), Claude's Opus 4.7 variant confusion (#52596), Kimi's K2.5 vs K2.6 preference (#1925), Copilot's org model gating (#1703) | Abstract model capabilities, not model identities; implement capability-based routing with user override |
| **Terminal as persistent environment, not transient shell** | OpenCode's PTY sessions (#23794), Kimi's shell tool PTY (#2037), Pi's persistent SSH/tmux focus | Agent tools must handle interactive programs, terminal state, and session continuity like IDEs, not scripts |
| **Community extraction pressure on closed tools** | Claude Code "Fully Open Source" PR (#41518: 1906 TS files extracted, runs `--version`) | Expect continued reverse-engineering; consider proactive API stability and documentation as competitive defense |
| **Automated tool self-maintenance** | Gemini's "Cognitive Repository" bot workflows (#25888), Qwen's `oh-my-agent-check` (#3563) | Meta-circular tooling—agents maintaining agent infrastructure—is emerging as operational necessity |

---

*Report compiled from public community digest data. For strategic decisions, validate with direct tool evaluation against specific workflow requirements.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-04-24 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control preventing orphan words, widow paragraphs, and numbering misalignment in AI-generated documents | Universal pain point—impacts every document Claude generates; author argues users rarely ask for good typography but always suffer without it |
| 2 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills evaluating Claude Skills across 5 dimensions (structure, security, performance, UX, maintainability) | Enterprise-grade tooling gap; positions Skills ecosystem for mature CI/CD integration |
| 3 | **Frontend Design** (Improved) | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised for single-conversation actionability—specific, token-efficient guidance without over-teaching | Core tension: skills as human docs vs. machine instructions; this PR models the latter |
| 4 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Create, fill, read, convert ODT/ODS files; ISO standard open-source document format | Enterprise/government compliance use case; bridges LibreOffice ecosystem |
| 5 | **Skill-Creator Validation** | [#539](https://github.com/anthropics/skills/pull/539) | 🟡 Open | Pre-parse YAML validation catching unquoted descriptions with `:` characters | Developer experience; prevents silent parsing failures in skill authoring |
| 6 | **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | 🟡 Open | Fixes `w:id` collisions between tracked changes and existing bookmarks in OOXML | Deep technical fix—shared ID space corruption in Word documents |
| 7 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Full testing stack: Testing Trophy philosophy, AAA pattern, React Testing Library, E2E strategies | Addresses "what to test vs. not test"—high-leverage for code generation workflows |
| 8 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for predictive analytics on SAP business data | Niche but high-value enterprise integration; Apache 2.0 model from SAP TechEd 2025 |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Priority Signal |
|:---|:---|:---|
| **Org-wide Skill Distribution** | [#228](https://github.com/anthropics/skills/issues/228) (9 comments, 5 👍) | 🔥 Critical |
| Teams need native sharing—current Slack/Teams + manual upload is friction-heavy | Enterprise scaling blocker | |
| **Skills-as-MCP Exposure** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) | 🔥 Architectural |
| Community wants Skills exposed via Model Context Protocol for API composability | Ecosystem interoperability | |
| **Bedrock/Enterprise Deployment** | [#29](https://github.com/anthropics/skills/issues/29), [#532](https://github.com/anthropics/skills/issues/532) | 🔥 Access |
| SSO/enterprise users locked out of skill-creator tooling; AWS Bedrock integration unclear | Platform expansion | |
| **Trust & Security Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (4 comments, 2 👍) | ⚠️ Emerging |
| `anthropic/` namespace impersonation risk for community skills | Governance gap | |
| **Agent Governance/Safety** | [#412](https://github.com/anthropics/skills/issues/412) (4 comments) | ⚠️ Nascent |
| Policy enforcement, threat detection, audit trails for multi-agent systems | Ahead of curve | |

---

## 3. High-Potential Pending Skills

| Skill | PR | Why It May Land Soon | Blocker Risk |
|:---|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | Universal applicability; clear scope; no dependencies | None visible |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Fills major gap in Claude's code generation; well-structured | Scope creep (full stack = large surface) |
| **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | Comprehensive enterprise coverage (ITSM, ITOM, SecOps, FSM, SPM) | Size/breadth may trigger review latency |
| **Sensory (macOS AppleScript)** | [#806](https://github.com/anthropics/skills/pull/806) | Unique positioning: native automation vs. screenshot-based; two-tier permission model | Accessibility permission UX complexity |
| **Xiaomi Robot Vacuum (`xiao`)** | [#997](https://github.com/anthropics/skills/pull/997) | CLI-first design for agent subprocess execution; very recent (April 21) | Niche hardware scope |
| **Codebase Inventory Audit** | [#147](https://github.com/anthropics/skills/pull/147) | 10-step systematic workflow; produces `CODEBASE-STATUS.md` as artifact | May overlap with existing analysis skills |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is escaping the "skill as documentation" trap toward composable, enterprise-grade infrastructure—org-wide distribution, programmatic APIs (MCP), and validation tooling that treats Skills as production software artifacts rather than prompt templates.**

---

*Report generated from 50 PRs and 50 Issues in anthropics/skills. All 🔗 links point to github.com/anthropics/skills.*

---

# Claude Code Community Digest — 2026-04-24

## Today's Highlights

Claude Code shipped two releases in 24 hours with persistent `/config` settings and full vim visual mode support, while the community's top issue demanding the return of `/buddy` crossed 215 comments and 935 upvotes. Documentation gaps dominate new issue filings, with prolific contributor `coygeek` filing six separate docs issues in a single day exposing missing coverage across status line, MCP, plugin, and Agent SDK references.

---

## Releases

**[v2.1.119](https://github.com/anthropics/claude-code/releases/tag/v2.1.119)** — Settings persistence and custom PR workflows
- `/config` settings (theme, editor mode, verbose, etc.) now persist to `~/.claude/settings.json` with full project/local/policy override precedence
- New `prUrlTemplate` setting redirects the footer PR badge to custom code-review URLs (e.g., for GitHub Enterprise or alternative platforms)

**[v2.1.118](https://github.com/anthropics/claude-code/releases/tag/v2.1.118)** — Vim visual mode and command consolidation
- Full vim visual mode (`v`) and visual-line mode (`V`) with selection, operators, and visual feedback
- `/cost` and `/stats` merged into `/usage` (legacy shortcuts preserved)
- Named custom theme creation and switching via `/theme`

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#45596](https://github.com/anthropics/claude-code/issues/45596) | **Bring Back Buddy** — Consolidated community plea for `/buddy` skill restoration | Largest community mobilization in project history; `/buddy` was removed silently in v2.1.97 with zero changelog mention | **215 comments, 935 👍**; emotional testimonials, organized advocacy, no official response yet |
| [#27263](https://github.com/anthropics/claude-code/issues/27263) | Configurable external URL whitelist for OAuth/third-party flows in App Preview | Blocks enterprise SSO and custom auth integrations behind strict preview URL allowlisting | 21 comments, 76 👍; active design discussion on security model |
| [#28765](https://github.com/anthropics/claude-code/issues/28765) | Push notifications for remote-control mode task completion | Critical UX gap for tmux-based multi-session workflows where tasks run backgrounded | 13 comments, 37 👍; remote-control power users vocal |
| [#49138](https://github.com/anthropics/claude-code/issues/49138) | `showSetupScreens()` Bedrock fallback tier probing adds ~4.3s startup regression | Quantified performance regression with reproduction; affects all Bedrock Linux users | 6 comments; regression label, awaiting triage |
| [#45849](https://github.com/anthropics/claude-code/issues/45849) | Ephemeral/transient hook output to prevent context window bloat | Hooks accumulating per-turn context is a fundamental architecture limitation for memory systems | 4 comments; hooks power users blocked on long sessions |
| [#52596](https://github.com/anthropics/claude-code/issues/52596) | Context display shows incorrect 1M token estimates for standard Opus 4.7 (200K) | Misleading UI could cause users to over-commit context; win32-specific | 4 comments; fresh in v2.1.119 |
| [#48508](https://github.com/anthropics/claude-code/issues/48508) | `SessionStart` prompt hooks crash with unhandled exception | Breaks automated workflows relying on session initialization hooks; cross-platform (macOS/Linux) | 3 comments; has reproduction |
| [#52559](https://github.com/anthropics/claude-code/issues/52559) | Claude-in-Chrome extension handshake never completes despite matching accounts | Blocks browser-CLI integration; macOS-specific, affects MCP/chrome area | 2 comments; no workaround identified |
| [#52584](https://github.com/anthropics/claude-code/issues/52584) | "Agree to Disagree" mode results in instant capitulation | Model behavior regression undermining a key reliability feature | 2 comments; model-quality concern |
| [#52613](https://github.com/anthropics/claude-code/issues/52613) | Up-Down cursor navigation freezes Claude Code in MCP servers/Rewind menus | Fresh TUI regression breaking keyboard navigation in subsystems | 1 comment; v2.1.119, macOS |

---

## Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#47676](https://github.com/anthropics/claude-code/pull/47676) | Fix plugin hookify/plugin-dev agent frontmatter YAML validity | **Merged** | Unquoted colon-space sequences broke strict YAML parsers; fixes four agent files |
| [#47673](https://github.com/anthropics/claude-code/pull/47673) | Add missing `plugin-dev` manifest | **Merged** | Only plugin in marketplace without `.claude-plugin/plugin.json`; unblocks installation |
| [#26328](https://github.com/anthropics/claude-code/pull/26328) | Session-manager plugin (list/delete/cleanup) | **Merged** | Addresses most-requested missing feature: session lifecycle management via `/session-manager:*` commands |
| [#52239](https://github.com/anthropics/claude-code/pull/52239) | Fix `$schema` 404 → SchemaStore.org | **Merged** | Resolves editor errors from broken marketplace schema URL; upstream SchemaStore integration |
| [#52418](https://github.com/anthropics/claude-code/pull/52418) | Prevent heredoc injection in ralph loop setup | **Open** | Security fix: splits frontmatter (intentional expansion) from prompt (verbatim) to prevent early termination attacks |
| [#52417](https://github.com/anthropics/claude-code/pull/52417) | Add explicit sort to auto-close-duplicates query | **Open** | Efficiency fix: asc sort prevents wasted API calls on recent issues filtered by 3-day window |
| [#52416](https://github.com/anthropics/claude-code/pull/52416) | Escape regex metacharacters in frontmatter field names | **Open** | Bug fix: dots in field names (`my.setting`) wildcard-matched incorrectly due to unescaped sed patterns |
| [#52415](https://github.com/anthropics/claude-code/pull/52415) | Normalize whitespace in completion promise comparison | **Open** | Fixes flaky promise matching when stored vs. extracted text have divergent whitespace normalization |
| [#41518](https://github.com/anthropics/claude-code/pull/41518) | Fully Open Source Claude Code | **Open** | Community effort: extracted 1906 TS files from source maps, built with Bun, runs `--version`/`--help`; symbolic pressure for official open-sourcing |
| [#47674](https://github.com/anthropics/claude-code/pull/47674) | Fix theme name typo in devcontainer Dockerfile | **Merged** | `powerline10k` → `powerlevel10k`; comment-only, no functional change |

---

## Feature Request Trends

1. **Companion/UX Personality** — The `/buddy` removal triggered unprecedented demand for optional companion interfaces, status line customization, and emotional UX elements in developer tools
2. **Session Lifecycle Management** — Multi-session power users need list/delete/cleanup operations (partially addressed by merged session-manager plugin)
3. **Enterprise Integration Hardening** — URL whitelisting, custom PR endpoints, SSO/OAuth flows, and org-policy overrides dominate enterprise readiness requests
4. **Remote/Mobile Workflow Completion** — Push notifications, background task alerts, and remote-control polish for tmux/headless usage patterns
5. **Hook Architecture Evolution** — Ephemeral output, unbounded context restoration, and crash resilience for the hooks subsystem powering advanced automations

---

## Developer Pain Points

| Category | Pain Point | Frequency Indicator |
|----------|-----------|---------------------|
| **Silent Removals** | `/buddy` deleted without changelog notice; 50KB `additionalContext` cap added silently in v2.1.91 | Top issue + dedicated feature request |
| **Documentation-Code Drift** | Six docs issues filed in one day covering `/export`, `/status`, status line JSON schema, plugin dependencies, Agent SDK `Read`, plan mode, MCP `userConfig`, VS Code voice dictation | 6+ issues by single contributor; systemic pattern |
| **Windows Stability** | Console title corruption crashing Playwright, cowork VM path mismatches, MSIX lookup failures, TUI token estimate bugs | 4 active issues, platform:windows tagged |
| **Usage/Limit Transparency** | Premature limit enforcement (47% → "limit reached"), unexplained 75% → 100% jumps, timezone confusion | 3 fresh issues in 24h |
| **Bedrock Startup Performance** | 4.3s regression from tier probing | Has-repro, regression-labeled, unassigned |
| **Model Selection UX** | Opus 4.7 context window confusion (200K vs. 1M variants) | Fresh bug, likely affecting more users |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-24

---

## 1. Today's Highlights

Codex shipped **rust-v0.124.0** with TUI quick-reasoning controls (`Alt+,` / `Alt+.`) and smarter model default handling, while the team continues heavy investment in **agent identity infrastructure** (four stacked PRs for HAI reintroduction) and **permissions model refactoring**. Windows and macOS platforms dominate the issue tracker, with sandboxing, context window configuration, and startup failures emerging as the most active pain points.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **[rust-v0.124.0](https://github.com/openai/codex/releases/tag/rust-v0.124.0)** | TUI quick reasoning controls: `Alt+,` lowers, `Alt+.` raises reasoning effort; accepted model upgrades now reset to new model defaults instead of carrying stale settings ([#18866](https://github.com/openai/codex/pull/18866), [#19085](https://github.com/openai/codex/pull/19085)); app-server sessions gain multi-environment management |
| **[rust-v0.123.0](https://github.com/openai/codex/releases/tag/rust-v0.123.0)** | Built-in `amazon-bedrock` model provider with AWS profile support ([#18744](https://github.com/openai/codex/pull/18744)); `/mcp verbose` for full MCP diagnostics while keeping `/mcp` fast ([#18610](https://github.com/openai/codex/pull/18610)); plugin MCP loading accepts both `mcpServers` and alternative config keys |

*Alpha builds (0.124.0-alpha.1 through alpha.3) were also released with no detailed changelogs.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| **[#16231](https://github.com/openai/codex/issues/16231)** — High CPU usage on macOS after VS Code extension update to 26.325.31654 | Most-commented active issue (47 comments); affects M5 Pro on macOS Tahoe 26.4, suggesting Apple Silicon optimization regression | 58 👍, extensive troubleshooting; users report thermal throttling |
| **[#11023](https://github.com/openai/codex/issues/11023)** — Codex App for Linux release request | Long-standing platform gap; macOS power consumption issues (#10432) driving Linux demand | 59 👍, 15 comments; recurring monthly engagement |
| **[#18341](https://github.com/openai/codex/issues/18341)** — Persistent blurred overlay on Intel Mac (0.122.0-alpha.1) | Visual regression blocking composer usability on older hardware; suggests rendering pipeline issue specific to x86_64 macOS | 8 👍, active screenshot diagnostics |
| **[#13555](https://github.com/openai/codex/issues/13555)** — Missing `@openai/codex-linux-x64` dependency on Ubuntu | CLI installation broken on major Linux distribution; zero 👍 suggests users abandon rather than engage | 11 comments, needs triage attention |
| **[#17318](https://github.com/openai/codex/issues/17318)** — Model/reasoning changes intermittently fail | Core UX breakage for Pro subscribers; model selection is fundamental workflow | 13 👍, video evidence provided |
| **[#19196](https://github.com/openai/codex/issues/19196)** — "Full Access" permissions still sandbox network calls | Trust/safety expectation violation; `danger-full-access` explicitly promises unsandboxed execution | 6 👍, security-critical for automation use cases |
| **[#19220](https://github.com/openai/codex/issues/19220)** — macOS startup failure: `workspace_dependencies` unsupported | Complete app failure post-update; blocks entire user base on specific build | Immediate report, needs hotfix |
| **[#19185](https://github.com/openai/codex/issues/19185)** — `config.toml` context window settings ignored | Configuration system regression; power users cannot control token limits | 6 👍, detailed config examples |
| **[#19208](https://github.com/openai/codex/issues/19208)** — 1M context window removed after GPT-5.5 release | Feature removal without communication; breaks established workflows | 3 👍, closed same day—resolution unclear |
| **[#19187](https://github.com/openai/codex/issues/19187)** — Windows Browser Use fails: `nodeRepl.fetch` cannot start app-server | Cross-platform feature parity gap; Browser Use is flagship capability | 3 👍, Windows-specific infrastructure gap |

---

## 4. Key PR Progress

| PR | Description | Significance |
|----|-------------|------------|
| **[#18950](https://github.com/openai/codex/pull/18950)** — Let model providers own model discovery | Decentralizes `codex-models-manager`; enables Bedrock, future providers to self-register catalogs | Architecture unlock for multi-provider ecosystem |
| **[#18904](https://github.com/openai/codex/pull/18904)** — Load AgentIdentity from JWT login/env | Programmatic auth for agent workflows; stdin or env JWT injection | Foundation for automated/CI Codex usage |
| **[#19231](https://github.com/openai/codex/pull/19231)** — Permissions: make profiles represent enforcement | Clarifies `DangerFullAccess` vs `ExternalSandbox` semantics; fixes lossy abstraction | Directly addresses #19196 class of bugs |
| **[#19047-19051-19054](https://github.com/openai/codex/pull/19047)** — HAI reintroduction stack (4 PRs) | Agent identity primitives → ChatGPT auth opt-in → thread task auth → background agent task auth | Major feature line: human-agent interaction / delegated execution |
| **[#18575](https://github.com/openai/codex/pull/18575)** — Fix TUI reflow on terminal resize | Resolves 6 long-standing scrollback issues (#5538, #5576, #8352, #12223, #16165, #15380) | Quality-of-life fix for heavy terminal users |
| **[#18897](https://github.com/openai/codex/pull/18897)** — Sticky environment API and thread state | Environment selections persist across turns; app-server v2 protocol enhancement | Reduces repetitive config in multi-repo workflows |
| **[#18576](https://github.com/openai/codex/pull/18576)** — Responsive markdown tables in TUI | Terminal-width-aware table rendering with streaming tail buffering | Rich output formatting for data-heavy agent responses |
| **[#19184](https://github.com/openai/codex/pull/19184)** — Handle deferred network proxy denials | Fixes race where Guardian approval denial arrives after command start | Safety/reliability for managed enterprise deployments |
| **[#18431](https://github.com/openai/codex/pull/18431)** — macOS Secure Enclave device key provider | Hardware-backed non-extractable keys for signing; preserves security boundary | Enterprise/auth infrastructure hardening |
| **[#18900](https://github.com/openai/codex/pull/18900)** — Migrate fork/resume reads to thread store | Decouples thread lifecycle from rollout path; enables remote thread store configs | Scalability for cloud-hosted thread persistence |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Linux native support** | #11023 (59 👍), #13555 installation failures | High; multi-year request, now amplified by macOS power issues |
| **Session UX improvements** | #18884 (`/recap`, `/btw` alias), #16669 adjustable chat width | Moderate; parity with Claude Code specifically requested |
| **Context window control** | #19185, #19208, #19205 (undo without Git) | Rising; GPT-5.5 release triggered configuration regressions |
| **Cross-platform parity** | #19187 Windows Browser Use, #14453 Windows cmake timeout, #19011 Windows automation | Persistent; Windows consistently lags macOS feature delivery |

---

## 6. Developer Pain Points

**Platform Reliability Gap** — Windows suffers disproportionately: installation failures (#13555), automation thread hangs (#19011), Browser Use broken (#19187), VS Code extension flashing (#19181), and permission denied in sandbox (#19190). The pattern suggests Windows testing lags release cadence.

**Sandbox/Permission Confusion** — "Full Access" not being full access (#19196), deferred proxy denials (#19184), and git permission errors inside sandbox (#19210) indicate the permissions model is technically complex and semantically unclear. PR #19231's refactoring confirms internal recognition.

**Configuration System Fragility** — Context window settings ignored (#19185), hooks config breaking startup (#19199), `workspace_dependencies` crashing launch (#19220) show config parsing and validation as a reliability hotspot.

**Rate Limiting at Scale** — GPT-5.5 users hitting limits "very early" (#19215) with Business-tier subscriptions suggests pricing/tiering may not align with new model's consumption profile.

**macOS Rendering Regressions** — Blurred overlays on both Intel (#18341) and Apple Silicon (#19237) across different window widths point to compositor/Metal issues in the native app.

---

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-24

---

## 1. Today's Highlights

The Gemini CLI team shipped **v0.41.0-nightly** with critical YOLO mode reliability fixes and offline-ready ripgrep bundling, while the community filed a **P0 lockfile race condition fix** and **availability-aware model routing** to address persistent startup crashes and model selection failures. Windows Terminal input handling saw intense activity with three competing PRs fixing backspace behavior. The project also laid groundwork for a new "Cognitive Repository" bot architecture with automated maintenance workflows.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **[v0.41.0-nightly.20260423](https://github.com/google-gemini/gemini-cli/releases/tag/v0.41.0-nightly.20260423.gd1c91f526)** | Fixes YOLO mode downgrade vulnerability ([#25341](https://github.com/google-gemini/gemini-cli/pull/25341)); bundles ripgrep binaries into SEA for fully offline search ([#25342](https://github.com/google-gemini/gemini-cli/pull/25342)) |
| **[v0.40.0-preview.2](https://github.com/google-gemini/gemini-cli/releases/tag/v0.40.0-preview.2)** | Version bump; retry logic for OpenSSL 3.x streaming SSL errors ([#16075](https://github.com/google-gemini/gemini-cli/pull/16075)) |
| **[v0.39.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.39.0)** | Simplified plan policy priorities; new memory usage integration test harness ([#24849](https://github.com/google-gemini/gemini-cli/pull/24849), [#24876](https://github.com/google-gemini/gemini-cli/pull/24876)) |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** | AST-aware file reads, search, and mapping investigation | EPIC-level exploration of semantic code understanding that could dramatically reduce token waste and misaligned tool calls. Foundation for next-gen codebase navigation. | 5 comments, maintainer-only; high strategic importance |
| **[#24916](https://github.com/google-gemini/gemini-cli/issues/24916)** | Permission prompts repeatedly appear for same file | Core trust/UX breakage: users selecting "allow for all future sessions" see decisions ignored, eroding confidence in security model | 3 comments, active user frustration |
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** | Subagent reports GOAL success after MAX_TURNS interruption | Silent failure mode hides incomplete work; critical for reliable agent delegation in production workflows | 3 comments, P1 priority, 2 upvotes |
| **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** | Shell execution hangs with "Waiting input" after completion | Frequent workflow blocker; simple commands falsely appear interactive, breaking automation trust | 2 comments, 3 upvotes, widely relatable |
| **[#25898](https://github.com/google-gemini/gemini-cli/issues/25898)** | CLI ignores model choices from CLI args and settings | **New today**: Model routing regression breaking user intent; Gemini 3.1 Pro Preview users forced onto suboptimal models without visibility | 0 comments yet, but critical functionality |
| **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)** | Model scatters tmp scripts across random directories | Workspace hygiene disaster; complicates git workflows and cleanup operations | 2 comments, agent-area focus |
| **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** | Browser Agent ignores settings.json overrides | Configuration system inconsistency; maxTurns and other safety limits bypassed | 2 comments, affects browser automation reliability |
| **[#22819](https://github.com/google-gemini/gemini-cli/issues/22819)** | Memory routing: global vs. project separation | Foundation for context-aware personalization; determines whether memories pollute across codebases | 1 comment, 2 upvotes, architectural |
| **[#25216](https://github.com/google-gemini/gemini-cli/issues/25216)** | Crash on temporary path `A:\` | Windows-specific path handling failure; blocks usage in certain enterprise/VM environments | 1 comment, core area |
| **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)** | Agent should stop/discourage destructive behavior | Safety guardrail gap; `git reset --force` and similar operations proceed without adequate friction | 1 comment, 1 upvote, security-adjacent |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| **[#25885](https://github.com/google-gemini/gemini-cli/pull/25885)** | **P0**: Fix ENOENT crash from proper-lockfile race condition | Eliminates startup hang/crash when multiple CLI instances launch simultaneously; critical reliability fix | 🔴 Open |
| **[#25886](https://github.com/google-gemini/gemini-cli/pull/25886)** | **P1**: Availability-aware auto-routing with "Best Effort Pro" | Detects Pro model timeouts, auto-falls back to Flash; new setting preserves Pro preference when healthy | 🟢 Open |
| **[#25893](https://github.com/google-gemini/gemini-cli/pull/25893)** | Fix MCP server deadlock from unconsumed stderr | Drains stderr unconditionally; resolves indefinite hangs with MCP servers in normal mode | 🟢 Open |
| **[#25894](https://github.com/google-gemini/gemini-cli/pull/25894)** | Fix output suppression for piped/redirected CLI subcommands | `gemini extensions list \| grep ...` now works; ConsolePatcher no longer infers headless from argv | 🟢 Open |
| **[#25873](https://github.com/google-gemini/gemini-cli/pull/25873)** | Persist auto-memory scratchpad for skill extraction | 16.7% reduction in extractor turns (13.2→11.0); session metadata retains workflow hints beyond summaries | 🟢 Open |
| **[#25888](https://github.com/google-gemini/gemini-cli/pull/25888)** | **P1**: Add gemini-cli-bot metrics and workflows | Introduces "Pulse" (high-frequency) and "Brain" (daily) automated workflows; Cognitive Repository architecture foundation | 🟢 Open |
| **[#25409](https://github.com/google-gemini/gemini-cli/pull/25409)** | Wire up new ContextManager and AgentChatHistory | Major agent architecture refactor; fixes context management debt | 🟢 Open |
| **[#25877](https://github.com/google-gemini/gemini-cli/pull/25877)** | **P1**: Add `compactToolOutputAllowlist` setting | User-extensible compact rendering; tools beyond built-in list can use DenseToolMessage UI | 🟢 Open |
| **[#24174](https://github.com/google-gemini/gemini-cli/pull/24174)** | Real-time voice mode with cloud and local backends | Whisper.cpp local-first + Gemini Live API cloud; major accessibility and UX expansion | 🟢 Open |
| **[#25882](https://github.com/google-gemini/gemini-cli/pull/25882)** / **[#25862](https://github.com/google-gemini/gemini-cli/pull/25862)** | Fix Ctrl+Backscope / backspace in Windows Terminal | Narrowed OS detection; cmd.exe/PowerShell plain backspace no longer deletes whole words | 🟢 Open (both) |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **AST-aware / semantic code tools** | #22745, #22746, #24353 | High — multiple EPICs, maintainer investment, eval framework expansion |
| **Memory system maturity** | #22819, #22809, #25873, #25895 | Strong — routing, proactive writes, scratchpad persistence, skill extraction all in flight |
| **Model routing intelligence** | #25886, #25898, #23823 | Surging — availability detection, user choice respect, internal model upgrades |
| **Safety & approval mode coherence** | #23582, #22672, #23897 | Steady — subagent awareness, destructive behavior guards, rejection handling |
| **Windows Terminal robustness** | #25216, #25882, #25862, #21447 | Active — input handling, path crashes, SSH detection |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Tracking |
|------------|-----------|--------|----------|
| **Startup crashes & hangs** | Very High | Blocks all usage | #25885 (P0 lockfile), #25758 (async boot perf), #25166 (shell hang) |
| **Model selection ignored / broken** | High | Wasted tokens, wrong capability | #25898 (new), #25886 (routing fix) |
| **Permission fatigue & trust erosion** | High | Repeated prompts break flow | #24916, #23582 (subagent awareness) |
| **Windows Terminal input corruption** | High | Unusable editing, character deletion bugs | #25882, #25862, #24202 (SSH scramble), #24546 (SSH detection) |
| **Subagent opacity & false success** | Medium | Hidden failures in delegation | #22323 (MAX_TURNS), #24037 (tracker updates) |
| **Workspace pollution from tmp files** | Medium | Git hygiene, cleanup overhead | #23571 |
| **Streaming UI artifacts** | Medium | Accessibility breaks, visual corruption | #25218 (tables), #24943 (parallel tool layouts), #24935 (editor corruption) |

---

*Digest compiled from google-gemini/gemini-cli public activity. For corrections or additions, open an issue or discussion.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-24

---

## 1. Today's Highlights

Copilot CLI v1.0.35 shipped with expanded slash command tab-completion, shell escape improvements, and new session management subcommands including `/session delete` and `delete-all`. The release cycle also addressed cross-device sync clarity and added `COPILOT_GH_HOST` support for GitHub Enterprise scenarios. Meanwhile, the community continues to surface critical gaps around model parity with VS Code, rate limiting behavior, and enterprise configuration workflows.

---

## 2. Releases

### [v1.0.35](https://github.com/github/copilot-cli/releases/tag/v1.0.35) (2026-04-23)
- **Slash commands**: Tab-completion now works for arguments and subcommands
- **Shell escapes**: `!` commands respect `$SHELL` instead of hardcoded `/bin/sh`
- **Remote sessions**: Permission prompts render correctly in CLI TUI over remote connections
- **Session selector**: Displays branch names and idle/in-use status

### [v1.0.35-6](https://github.com/github/copilot-cli/releases/tag/v1.0.35-6) (2026-04-23)
- Improved session sync prompt with clearer labels explaining GitHub.com cross-device sync

### [v1.0.35-5](https://github.com/github/copilot-cli/releases/tag/v1.0.35-5) (2026-04-23)
- Added `COPILOT_GH_HOST` environment variable (takes precedence over `GH_HOST`) for GitHub hostname configuration
- Added `Ctrl+Y` as alternative to `Tab` for accepting highlighted options in completion popups (@-mentions, paths, slash commands)
- Added `/session delete`, `delete <id>`, and `delete-all` subcommands

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#1703](https://github.com/github/copilot-cli/issues/1703) | **Org-enabled models missing from CLI** (e.g., Gemini 3.1 Pro) vs. VS Code Copilot | **Model parity gap** — enterprise users paying for org-wide model access can't use them in CLI, creating a two-tier experience. 24 comments, 38 👍 indicate strong demand. | Frustrated; users expect feature parity across GitHub Copilot surfaces |
| [#1347](https://github.com/github/copilot-cli/issues/1347) | `XDG_CONFIG_HOME` not supported correctly | **Linux/Unix standards compliance** — affects portability and dotfile management workflows. Now closed. | 13 👍; resolution appreciated by XDG-adherent developers |
| [#2760](https://github.com/github/copilot-cli/issues/2760) | Aggressive HTTP 429 retry loop without backoff | **Reliability** — rapid retries (20+/min) waste quota and trigger additional rate limits. Now closed with proper retry logic. | 2 👍 but high impact; fix addresses infrastructure stability |
| [#2787](https://github.com/github/copilot-cli/issues/2787) | Endless rate limit prompts with generic messaging | **UX degradation** — opaque "wait 6 seconds" loops break flow state. Now closed. | Users want actionable, specific rate limit feedback |
| [#2741](https://github.com/github/copilot-cli/issues/2741) | Sudden `user_weekly_rate_limited` errors | **Billing trust** — users question whether limits are correctly applied relative to their plan. Now closed. | Suspicion of buggy limit enforcement; demands transparency |
| [#2416](https://github.com/github/copilot-cli/issues/2416) | Sub-agents can't see own plugin skills due to `<available_skills>` truncation | **Agent ecosystem health** — 29-skill cap breaks complex multi-agent workflows. Now closed. | Plugin developers blocked from building sophisticated agents |
| [#35](https://github.com/github/copilot-cli/issues/35) | Dev Container / Codespaces support | **Onboarding friction** — no standardized environment for CLI development or CI/CD. Still open since Sept 2025. | 9 👍; recurring request from cloud-native developers |
| [#20](https://github.com/github/copilot-cli/issues/20) | Codebase indexing parity with VS Code extension | **Context quality** — CLI lacks repository indexing, degrading suggestions for large codebases. Still open since Sept 2025. | 10 👍; fundamental feature gap vs. IDE extension |
| [#2937](https://github.com/github/copilot-cli/issues/2937) | macOS segfault (`EXC_BAD_ACCESS`) | **Stability** — crash on launch blocks entire macOS user segment. Fresh report. | Critical severity; needs immediate repro investigation |
| [#2933](https://github.com/github/copilot-cli/issues/2933) | `task_complete` directive overrides explicit user instructions | **Agent alignment** — "always on" completion nudging causes unwanted commits despite prior user refusal. Fresh report. | Safety/control concern; touches on AI alignment in developer tools |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#2565](https://github.com/github/copilot-cli/pull/2565) | **Guard against duplicate PATH entries on reinstall** | Installer idempotency fix: prevents `.bashrc`/`.zshrc` pollution when `copilot` binary isn't in `$PATH` yet due to missing shell restart | Open since 2026-04-07 |

*Note: Only 1 PR updated in the last 24h. Below are significant recently-closed issues indicating areas where PRs would be valuable:*

| Derived Opportunity | From Issue | Technical Need |
|---------------------|-----------|--------------|
| Model discovery API sync | #1703 | Align CLI model enumeration with VS Code's org-aware endpoint |
| Reasoning effort per-agent | #2904 | Extend `.agent.md` frontmatter schema beyond global `--effort` flag |
| Granular tool whitelisting | #2921 | Regex/pattern-based command allowlists for subcommand safety |
| Config file free-model default | #2935 | Remove premium-model gate on `config.yaml` `model` field |
| Compaction summary UX | #2858 | Collapsible/compact rendering for auto-compaction output |

---

## 5. Feature Request Trends

| Trend | Evidence | Direction |
|-------|----------|-----------|
| **VS Code parity** | #1703, #20, #2908 | Users expect CLI to match IDE extension capabilities: model access, indexing, permission granularity |
| **Enterprise/self-hosted flexibility** | #1703, #2813, #2932 (Grok/xAI), #2904 | Custom providers, GHES support, and per-agent configuration for regulated environments |
| **Agent ecosystem maturity** | #2416, #2904, #2933, #2921 | Richer agent definitions (reasoning effort, skill visibility), safer tool execution, alignment controls |
| **Session lifecycle management** | #2869 → shipped, #2900, #2818 | Robust session CRUD, corruption recovery, token refresh without interruption |
| **Rate limit transparency & resilience** | #2760, #2787, #2741, #2840, #2754 | Better backoff, clearer messaging, quota visibility, autopilot graceful degradation |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Representative Issues |
|------------|-----------|--------|----------------------|
| **Rate limiting breaks workflows** | Very High | Severe — autopilot aborts, subagent failures, wasted premium quota | #2760, #2787, #2741, #2840, #2754, #2889 |
| **Model access inconsistency** | High | Medium-High — org-paid features unavailable in CLI | #1703, #2932, #2935 |
| **Configuration surprises** | Medium | Medium — env vars ignored, config files rejected, gitignored instructions skipped | #1347, #1981, #2857, #2935 |
| **Session fragility** | Medium | Medium — corruption, resume failures, token expiry mid-task | #2900, #2818, #2869 |
| **TUI/terminal rendering bugs** | Medium | Medium — alt-screen corruption, noisy diffs, compaction spam | #2864, #2884, #2858 |
| **Agent control & safety** | Emerging | Medium — unwanted commits, overly broad permissions, task override | #2933, #2921, #2908, #2855 |
| **macOS stability** | Low (critical when hit) | High — segfault on launch is total blocker | #2937 |

---

*Digest compiled from github.com/github/copilot-cli activity 2026-04-23 to 2026-04-24.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-24

---

## 1. Today's Highlights

The Kimi CLI team and community delivered a high-velocity maintenance day with **27 PRs** active, focusing heavily on UX polish and MCP ecosystem hardening. Notably, two independent PRs (#2039, #2046) raced to fix an inverted color bug in `/usage` quota display, while a significant architectural PR (#1960) introduced RalphFlow for autonomous agent loop control. The MCP interoperability story advanced with fixes for JSON Schema strictness (#2030, #1595) and ACP server session configuration loading (#2047).

---

## 2. Releases

*No new releases in the last 24 hours. The latest stable version remains **v1.38.0**.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1925](https://github.com/MoonshotAI/kimi-cli/issues/1925) | **Kimi K2.5 vs K2.6 model preference** | Users report K2.6's extended thinking harms creative tasks and "personality"; requests for model downgrade path with legacy system prompts | 8 comments, emotionally charged feedback — rare for this repo |
| [#1990](https://github.com/MoonshotAI/kimi-cli/issues/1990) | **IDEA terminal crash on message send** | Hard crash in JetBrains IDE integrated terminals blocks enterprise Java/Scala/Kotlin workflows | 2 comments, reproducible on Darwin ARM64 |
| [#2040](https://github.com/MoonshotAI/kimi-cli/issues/2040) | **VS Code notification on pending approval** | Approval dialogs hidden in webview panels cause workflow stalls when VS Code is backgrounded | 2 comments, clear UX gap vs. Copilot/Cursor |
| [#2031](https://github.com/MoonshotAI/kimi-cli/issues/2031) | **MCP stdio "already initialized" with fastmcp** | `keep_alive=True` breaks stdio transport lifecycle — blocks popular servers like `@steipete/peekaboo` | Root cause identified, awaits upstream coordination |
| [#2038](https://github.com/MoonshotAI/kimi-cli/issues/2038) | **Git subprocess lag in bottom toolbar** | Synchronous `git` calls on every prompt render create perceptible typing latency | Binary-isolated reproduction, performance regression |
| [#2037](https://github.com/MoonshotAI/kimi-cli/issues/2037) | **Shell tool missing PTY allocation** | Interactive commands (`ssh-add`, `sudo`, `npm init`) corrupt terminal state without pseudo-terminal | Worse-than-error behavior (hangs), security-adjacent |
| [#2032](https://github.com/MoonshotAI/kimi-cli/issues/2032) | **Extreme typing latency in modal inputs** | Keystroke lag in approval feedback/custom answer fields breaks flow state | Likely related to #2038's subprocess pattern |
| [#2024](https://github.com/MoonshotAI/kimi-cli/issues/2024) | **Subagent context invisible to parent** | Token accounting opacity hides true cost of multi-agent workflows | Design-level observability gap |
| [#2019](https://github.com/MoonshotAI/kimi-cli/issues/2019) | **Wrong usage color thresholds** | Quota gauge shows green when nearly exhausted, red when healthy — actively misleads users | Quickly picked up by two PRs (#2039, #2046) |
| [#2017](https://github.com/MoonshotAI/kimi-cli/issues/2017) | **Conversation deadlock with large context** | "Service temporarily unavailable" mid-conversation strands users with accumulated thread state | Windows-specific, high severity for long sessions |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#2039](https://github.com/MoonshotAI/kimi-cli/pull/2039) / [#2046](https://github.com/MoonshotAI/kimi-cli/pull/2046) | **Fix `/usage` quota color inversion** | Both PRs independently identify same bug: `_ratio_color()` receives *remaining* ratio but thresholds assume *used* ratio. #2046 adds more comprehensive threshold documentation. | Open — likely one will merge |
| [#1960](https://github.com/MoonshotAI/kimi-cli/pull/1960) | **RalphFlow architecture** | Ephemeral context files + convergence detection to prevent infinite agent loops; main context preserved across iterations. Significant soul-level change. | Open — architectural review needed |
| [#2047](https://github.com/MoonshotAI/kimi-cli/pull/2047) | **Load `~/.kimi/mcp.json` in ACP sessions** | Closes gap where ACP server mode (Zed, etc.) ignored user MCP configuration vs. interactive mode | Open — editor integration fix |
| [#2045](https://github.com/MoonshotAI/kimi-cli/pull/2045) | **Unblock AskUserQuestion in yolo; add afk mode** | Separates auto-approve (`yolo`) from non-interactive (`afk`) semantics — fixes model confusion about when user input is permissible | Open — mode semantics clarification |
| [#2044](https://github.com/MoonshotAI/kimi-cli/pull/2044) | **Scope-group skills in system prompt** | Project-local skills now explicitly labeled vs. global skills; honors `.kimi/skills` and `.claude/skills` overrides | Open — interoperability with Claude ecosystem |
| [#2041](https://github.com/MoonshotAI/kimi-cli/pull/2041) | **Show active agent count in status bar** | Surfaces background subagent activity to address "stalled CLI" perception in multi-agent runs | Open — related to #1768 |
| [#2036](https://github.com/MoonshotAI/kimi-cli/pull/2036) | **Strict schema validation for core tools** | Enables OpenAI/Anthropic `strict: true` on Shell, ReadFile, Grep, WriteFile, StrReplaceFile, SetTodoList | Open — reliability improvement |
| [#2030](https://github.com/MoonshotAI/kimi-cli/pull/2030) | **Fill missing JSON Schema `type` for MCP params** | Defensive fix for Moonshot's strict schema validator rejecting standard MCP servers; partial fix for #1595 | **Merged** ✅ |
| [#1985](https://github.com/MoonshotAI/kimi-cli/pull/1985) | **Prevent TTY hang on exit; close MCP connections** | Non-blocking `os.read()` in CPR cursor position query; proper MCP lifecycle cleanup during shutdown | Open — stability fix for #1984 |
| [#2026](https://github.com/MoonshotAI/kimi-cli/pull/2026) | **Clear token tombstone on concurrent rotation** | Fixes auth failure when multiple processes (VS Code windows, terminals) rotate refresh tokens independently | Open — concurrency hardening |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Model choice & control** | #1925 (K2.5 downgrade), #2029 (thinking keep toggle), #2014 (Agent Swarm API) | High — users want escape hatches from default model behavior |
| **IDE/Editor ecosystem parity** | #2040 (VS Code notifications), #1990 (IDEA crash), #2023 (VS Code font blur), #2047 (ACP MCP loading) | High — competing with Copilot/Cursor/Zed native experiences |
| **MCP ecosystem interoperability** | #1595/#2030 (JSON Schema), #1714 (Claude plugin compat), #2031 (fastmcp lifecycle), #2047 (ACP config) | Very high — strategic integration surface |
| **Observability & cost transparency** | #2024 (subagent context), #2033 (yolo status in web UI), #2019/#2039/#2046 (usage accuracy) | Medium — operational maturity gaps |
| **Real-time interaction refinements** | #2042 (mid-processing instructions), #2045 (yolo/afk modes), #2032/#2038 (latency) | Medium — competitive with streaming-first tools |

---

## 6. Developer Pain Points

**Performance & Responsiveness**
- Synchronous subprocess calls (#2038 git lag, #2032 modal input lag) repeatedly surface in different subsystems, suggesting architectural debt in the TTY/event loop boundary.
- Shell tool's lack of PTY allocation (#2037) creates a class of "worse than failure" hangs that damage trust in autonomous execution.

**Configuration & Environment Fragility**
- UTF-8 BOM in config files (#2043), concurrent token rotation (#2026), and ACP session config isolation (#2047) reveal edge cases in multi-environment deployments.
- OAuth flow breakage (#2021) blocks onboarding for new team setups.

**Model Behavior Opacity**
- K2.6's thinking mode backlash (#1925) and invisible subagent costs (#2024) compound a perception that the tool makes expensive decisions without user visibility or override.
- The quick dual-PR response to #2019 shows the team moves fast on clear bugs, but model-level UX requires longer coordination with API/platform teams.

**MCP as Critical Path**
- JSON Schema strictness (#1595), stdio transport lifecycle (#2031), and auth compatibility (#2021) indicate MCP support is still "best effort" rather than "first class." Given community tooling investment (#1714, #2047), this is becoming a competitive differentiator to resolve systematically.

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity on 2026-04-23.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-24

## Today's Highlights

OpenCode shipped two patch releases (v1.14.21–v1.14.22) with critical fixes for LSP pull diagnostics, session state staleness, and `.npmrc` compliance. Meanwhile, the community is intensely focused on memory optimization efforts led by maintainer thdxr's megathread, with two merged PRs directly addressing unbounded memory growth from SSE stream leaks and shadow snapshot index bloat.

---

## Releases

### [v1.14.22](https://github.com/anomalyco/opencode/releases/tag/v1.14.22)
- **Core**: Respects `.npmrc` settings during npm installs; adds persistent custom icon overrides for projects
- **Desktop**: Fixes stale state bugs when switching between sessions with nested session items

### [v1.14.21](https://github.com/anomalyco/opencode/releases/tag/v1.14.21)
- **Core**: Adds pull diagnostics support for LSP servers (C#, Kotlin); fixes project detection for bare Git repos and worktrees; improves session compaction to retain more useful context in long threads; preserves UTF-8 encoding

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | **Memory Megathread** — Centralized tracking for memory issues with explicit call for heap snapshots (not LLM-generated solutions) | Memory is the #1 operational blocker for production use; maintainer-led with structured diagnostic protocol | 63 comments, 39 👍 — highest engagement by far |
| [#8785](https://github.com/anomalyco/opencode/issues/8785) | **Bun crash on Windows** — Runtime crash with avx512 CPU features | Stability regression affecting Windows power users; Bun runtime reliability concerns | 28 comments, ongoing reports |
| [#22408](https://github.com/anomalyco/opencode/issues/22408) | **Kimi K2.6 integration** *(closed)* | Rapid model provider adoption; closed same day suggests fast maintainer response | 21 comments, 18 👍 |
| [#14808](https://github.com/anomalyco/opencode/issues/14808) | **Plugin `session.created` event not firing** | Breaks plugin ecosystem (Engram memory system cited); core event bus reliability | 15 comments, 12 👍 |
| [#22852](https://github.com/anomalyco/opencode/issues/22852) | **Claude Opus 4.7 thinking blocks not persisted** *(closed)* | API behavior change from Anthropic; thinking content now omitted by default | 11 comments, resolved |
| [#24039](https://github.com/anomalyco/opencode/issues/24039) | **GPT-5.5 support for OpenAI provider** *(closed)* | Same-day closure alongside duplicate #24036 shows rapid model update cadence | 11 comments, 12 👍 |
| [#22683](https://github.com/anomalyco/opencode/issues/22683) | **v1.4.6 constant crashing** (opentui/perf) | Critical stability regression; memory leak errors replaced with hard crashes | 11 comments, urgent tone |
| [#16612](https://github.com/anomalyco/opencode/issues/16612) | **Stale context — replies to previous turn** | UX-breaking context management bug; "stuck" repetition loops disrupt workflows | 10 comments, 5 👍 |
| [#14539](https://github.com/anomalyco/opencode/issues/14539) | **Copilot tool usage consuming premium requests incorrectly** | Cost impact for GitHub Copilot users; billing discrepancy with documented behavior | 9 comments, 3 👍 |
| [#20287](https://github.com/anomalyco/opencode/issues/20287) | **Azure provider broken since v1.3.4** *(closed)* | Enterprise Azure OpenAI deployments blocked; `/chat/completions` path regression | 9 comments, resolved |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | **Mobile Touch Optimization** | Full mobile/touch device support for OpenCode App while preserving desktop experience | Open — significant UX expansion |
| [#13854](https://github.com/anomalyco/opencode/pull/13854) | **Fix streaming markdown after message completion** | Derives streaming state from `message.time.completed` to fix table rendering bugs | Open — needs linked issue |
| [#23890](https://github.com/anomalyco/opencode/pull/23890) | **Runtime-aware search service with `fff`** | Uses `fff-bun` under Bun, falls back to ripgrep for Node/desktop; unifies file search, grep, glob | Open — performance/architecture improvement |
| [#23794](https://github.com/anomalyco/opencode/pull/23794) | **Interactive terminal tool with persistent PTY sessions** | Implements Phase 1+2 of #23449 — explicit `terminal` tool leveraging existing ghostty-web PTY infrastructure | Open — enables agent terminal integration |
| [#24058](https://github.com/anomalyco/opencode/pull/24058) | **Prevent unbounded memory growth from stuck SSE streams** *(closed)* | Fixes TCP half-close (CLOSE_WAIT) leak where `AsyncQueue` accumulated ~14MB/hr; adds bounded queue with timeout | **Merged** — critical memory fix |
| [#24059](https://github.com/anomalyco/opencode/pull/24059) | **Evict gitignored files from shadow snapshot index** *(closed)* | Fixes "files staged before .gitignore stay forever" memory leak from #20695 megathread | **Merged** — memory fix |
| [#24070](https://github.com/anomalyco/opencode/pull/24070) | **Allow remote local-network hosts when proxy env vars set** | Auto-detects private IPs/.local domains to bypass corporate proxies via NO_PROXY | Open — enterprise network compliance |
| [#20039](https://github.com/anomalyco/opencode/pull/20039) | **Split bash tool into bash/pwsh/powershell** | Refactors monolithic shell tool into runtime-specific implementations | Open — cross-platform shell correctness |
| [#23104](https://github.com/anomalyco/opencode/pull/23104) | **Preserve reasoning providerMetadata across model switches** | Fixes Anthropic thinking blocks being stripped when switching models | Open — reasoning fidelity |
| [#23770](https://github.com/anomalyco/opencode/pull/23770) | **Configurable tool output truncation limits** *(closed)* | Moves hardcoded 2000-line/50KB limits to user configuration | **Merged** — addresses MCP large output pain |

---

## Feature Request Trends

1. **Model Provider Velocity**: Rapid-fire GPT-5.5, Kimi K2.6, Claude 4.7 integrations show community expects same-day model support. Two duplicate GPT-5.5 issues (#24039, #24036) both closed within 24h indicates healthy maintainer response but also demand pressure.

2. **Terminal/PTY Integration**: [#23449](https://github.com/anomalyco/opencode/issues/23449) and [#23794](https://github.com/anomalyco/opencode/pull/23794) converge on a major architectural direction — moving agents from spawned shell processes to integrated PTY sessions, enabling persistent state, interactive programs, and better visibility.

3. **Workspace/Multi-directory Support**: [#19515](https://github.com/anomalyco/opencode/issues/19515) (22 👍) advocates explicit multi-directory workspace folders — a foundational change for monorepo and microservice workflows.

4. **UI Observability**: Requests for timestamps ([#8634](https://github.com/anomalyco/opencode/issues/8634)), subagent runtime visibility ([#22233](https://github.com/anomalyco/opencode/issues/22233)), and persistent footer status ([#18969](https://github.com/anomalyco/opencode/issues/18969)) indicate TUI information density is a growing concern as agent complexity increases.

---

## Developer Pain Points

| Category | Evidence | Severity |
|----------|----------|----------|
| **Memory & Stability** | #20695 megathread, #22683 crashes, #8785 Bun crashes, two merged memory-fix PRs | **Critical** — dominant theme across issues and maintainer priority |
| **Context Management** | #16612 stale replies, #22852 thinking block persistence, session compaction fixes in v1.14.21 | High — affects trust in long conversations |
| **Enterprise/Network Configuration** | #20287 Azure breakage, #24070 proxy handling, #22623 Azure `max_tokens` vs `max_completion_tokens` | High — enterprise adoption friction |
| **Windows-Specific Issues** | #8785, #14539, #23907, #24061, #24069 (Norton AV false positive) | Moderate-High — disproportionate platform pain |
| **Plugin Ecosystem Reliability** | #14808 event bus, #21625 `package-lock.json` vs `bun.lock`, #18969 limited TUI hooks | Moderate — extensibility promises vs. implementation gaps |
| **LSP/Tooling Regressions** | #20452 Java LSP broken in 1.3.13, #20317 Copilot Claude context limits | Moderate — IDE-adjacent features fragile across releases |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-24

## Today's Highlights

Pi v0.70.0 shipped with a searchable auth provider login flow, eliminating friction for users with many configured providers. The past 24 hours saw exceptional velocity: 15 PRs merged and 30 actively discussed issues, with heavy focus on terminal compatibility, provider robustness, and extension API gaps. Notably, the team closed several long-standing bugs around clipboard crashes, tmux paste corruption, and HTTP2 retry storms.

---

## Releases

**[v0.70.0](https://github.com/badlogic/pi-mono/releases/tag/v0.70.0)** — New searchable `/login` provider selector with fuzzy filtering. Previously, users scrolling through long provider lists (enterprise SSO, multiple API keys) faced friction; now type-to-filter finds the target in milliseconds. See [docs/providers.md](https://github.com/badlogic/pi-mono/blob/main/docs/providers.md). ([#3572](https://github.com/badlogic/pi-mono/pull/3572) by [@mitsuhiko](https://github.com/mitsuhiko))

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3588](https://github.com/badlogic/pi-mono/issues/3588) | Terminal progress escape sequences configurable/disabled | OSC progress bars (iTerm2 green line, Ghostty) are visually disruptive for sensitive users; accessibility concern | 10 comments, marked `[bug, inprogress]` then closed rapidly — user provided detailed terminal analysis |
| [#2980](https://github.com/badlogic/pi-mono/issues/2980) | Speed up `pi update` | CLI startup cost and serial npm updates make `pi update` painfully slow; affects daily workflow | 9 comments, active contributor `bjesuiter` profiling code paths, `[possibly-openclaw-clanker]` tag suggests ecosystem impact |
| [#3208](https://github.com/badlogic/pi-mono/issues/3208) | Custom Thinking Levels per Model | `Shift+Tab` cycles unsupported levels for many models (Kimi, local); extension API gap | 7 comments, 👍 6, author `ghost91-` volunteering implementation — high community demand |
| [#3600](https://github.com/badlogic/pi-mono/issues/3600) | Enter key stops working mid-session | Critical reliability bug breaking session continuity; workaround is full restart | 7 comments, rapid close, user requested copy-message shortcut as mitigation |
| [#3582](https://github.com/badlogic/pi-mono/issues/3582) | Segfault in clipboard native module during rsync | Native addon crash under high-frequency bash output; data loss risk | 4 comments, detailed environment report (Linux Mint, Node 22), crash dump analysis |
| [#3575](https://github.com/badlogic/pi-mono/issues/3575) | Anthropic proxy regression: `eager_input_streaming` rejected | Breaking change for `anthropic-messages` proxies (OpenClaw ecosystem); 400 errors on tool use | 4 comments, 👍 1, bisected to v0.68.1, `[bug, inprogress]` |
| [#3543](https://github.com/badlogic/pi-mono/issues/3543) | Remove URL gates around long cache retention | Enterprise/self-hosted users blocked from `PI_CACHE_RETENTION=long` by hardcoded api.openai.com check | 4 comments, duplicate of #1377, contributor unable to PR due to access restrictions |
| [#3589](https://github.com/badlogic/pi-mono/issues/3589) | OpenAI/Anthropic clients lack timeout — long inference aborted | 10-minute SDK default kills local inference (llama.cpp, vLLM) exceeding threshold; silent failure | 3 comments, `[possibly-openclaw-clanker]`, detailed SDK version matrix |
| [#3610](https://github.com/badlogic/pi-mono/issues/3610) | Ghostty progress bar stops after 15s | Terminal-specific protocol limitation; user experience inconsistency across terminals | 3 comments, cites Ghostty docs explicitly, `[possibly-openclaw-clanker]` |
| [#3576](https://github.com/badlogic/pi-mono/issues/3576) | Malformed tool call corrupts session state (Kimi K2.6) | Provider-specific JSON corruption breaks entire session; no recovery mechanism | 3 comments, `[bug, inprogress]`, real malformed payload example from OpenCode Zen |

---

## Key PR Progress

| # | PR | Feature / Fix | Significance |
|---|-----|-------------|------------|
| [#3624](https://github.com/badlogic/pi-mono/pull/3624) | Add Together AI Provider | Native Together AI integration with tool-capable model filtering | Expands model ecosystem; open, seeking review |
| [#3623](https://github.com/badlogic/pi-mono/pull/3623) | Decode CSI-u Ctrl+letter inside bracketed paste | Fixes #3599 tmux popup paste corruption (`[106;5u` fragments) | Terminal compatibility fix, clean targeted change |
| [#3618](https://github.com/badlogic/pi-mono/pull/3618) | Align GPT-5.5 Codex capability handling | Marks GPT-5.5 as xhigh-capable, updates pricing multipliers (2.5x priority) | Keeps model definitions current with OpenAI releases |
| [#3620](https://github.com/badlogic/pi-mono/pull/3620) | Await native clipboard before OSC 52 | Eliminates macOS native addon race crash; preserves SSH fallback | Reliability fix for clipboard operations |
| [#3197](https://github.com/badlogic/pi-mono/pull/3197) | Add `interrupt()` for graceful turn interruption | Non-destructive stop vs. `abort()`; preserves in-flight tool work | Major API addition for agent control; long-running open PR |
| [#3607](https://github.com/badlogic/pi-mono/pull/3607) | Show double-press hint in footer | UX: exposes invisible 500ms windows for Ctrl+C/Ctrl+D mechanics | Polish, matches node REPL pattern |
| [#3603](https://github.com/badlogic/pi-mono/pull/3603) | Add img2sixel sixel support | Windows Terminal image support via Sixel (1.22+); bypasses inline image limitations | Cross-platform terminal parity, significant Windows improvement |
| [#3597](https://github.com/badlogic/pi-mono/pull/3597) | Tear down extension UI on shutdown | Fixes `/quit` crash when extension footers touch disposed `ctx` | Extension API hardening |
| [#3593](https://github.com/badlogic/pi-mono/pull/3593) | Retry on HTTP2 'request did not get a response' | AWS Bedrock resilience; automatic retry vs. manual nudge | Operational reliability for cloud provider users |
| [#3572](https://github.com/badlogic/pi-mono/pull/3572) | Searchable auth provider login flow | v0.70.0 flagship; fuzzy-find API keys in `/login` | Daily workflow improvement, especially for multi-tenant/enterprise |

---

## Feature Request Trends

1. **Model-specific configuration granularity** — Thinking levels (#3208), reasoning token handling (#3581), per-model `baseUrl` forwarding (#3619) all point to users needing provider/model individuality beyond one-size-fits-all defaults.

2. **Extension API surface expansion** — Hooks for raw response streams (#3605), interrupt semantics (#3197), footer lifecycle (#3597), and shortcut collision diagnostics (#3617) show the extension ecosystem maturing but hitting boundaries.

3. **Terminal and environment compatibility** — Sixel (#3603), OSC sequence configurability (#3588, #3610), tmux/CSI-u fixes (#3623, #3599), and sandboxed `process.env` (#3573) reflect Pi's deployment diversity (SSH, containers, Windows, mobile/Termux).

4. **Enterprise/self-hosted operational features** — Cache retention gates (#3543), proxy support (#3579, #3619), and OAuth token flows (#3591) indicate production deployments needing flexibility beyond the managed OpenAI path.

---

## Developer Pain Points

| Theme | Frequency | Manifestations |
|-------|-----------|---------------|
| **Silent failures / poor observability** | High | Timeouts invisible until 10m abort (#3589), HTTP2 errors need manual retry (#3593), progress bars lie (#3610), `setStatus()` doesn't re-render (#3602) |
| **Session fragility** | High | Enter key dies (#3600), malformed tool calls corrupt state (#3576), prompt loss on submission error (#3571), segfaults in native modules (#3582) |
| **Provider proxy/edge case breakage** | High | Anthropic field rejection (#3575), Azure missing `api-version` (#2528), strict gateway header validation (#3579), Kimi User-Agent whitelisting (#3586) |
| **Extension developer experience gaps** | Medium | Shortcut collisions silent until reload (#3617), `SettingsManager.inMemory()` loses state (#3616), missing raw stream hooks (#3605) |
| **Package manager heterogeneity** | Medium | pnpm/yarn flag incompatibility in git installs (#3604), `--omit=dev` hardcoding |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-24

## Today's Highlights

Qwen Code shipped **v0.15.1** with a critical fix for streaming tool-call parsing scoping and improved shell timing indicators in the CLI. Meanwhile, the community is actively debating proposed OAuth free tier cuts (100x reduction) while developers continue pushing for better local model support, concurrent subagent controls, and terminal UX enhancements.

---

## Releases

### [v0.15.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.1)
- **Fix**: Scoped `StreamingToolCallParser` per stream rather than per `Converter` — resolves race conditions in multi-stream scenarios ([#3525](https://github.com/QwenLM/qwen-code/pull/3525))
- **Feat**: Combined elapsed time + timeout display in shell time indicator for clearer CLI feedback ([#3512](https://github.com/QwenLM/qwen-code/pull/3512))

### [v0.15.0-nightly.20260423.d40fe7cdb](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.0-nightly.20260423.d40fe7cdb)
- Same streaming parser fix as above, cut as nightly ahead of stable release.

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | **Qwen OAuth Free Tier Policy Adjustment** — reduce daily quota from 1,000 to 100 requests, phase out free tier entirely | The most-commented issue (117 comments); directly impacts accessibility and adoption for hobbyists and evaluators | Highly contentious; no upvotes but massive engagement suggests polarized debate |
| [#3384](https://github.com/QwenLM/qwen-code/issues/3384) | **Unable to add OpenAI-compatible local LLM** — VLLM-hosted Qwen3.6-35B-A3B fails despite correct `settings.json` | Blocks self-hosted workflows; documentation vs. reality gap for local model setup | Frustrated; 9 comments, minimal resolution clarity |
| [#3530](https://github.com/QwenLM/qwen-code/issues/3530) | **"Maximum update depth exceeded" React error when switching models** (`/model`) | Critical UI crash in core CLI interaction; suggests state management regression | 2 upvotes, 5 comments; actively affecting daily use |
| [#3532](https://github.com/QwenLM/qwen-code/issues/3532) | **Local model config ignored, still prompts for auth** — follows docs exactly but demands OAuth on startup | Undermines "local-first" promises; config parsing or precedence bug | Exasperated tone ("不让使用了吗？"); 4 comments |
| [#3553](https://github.com/QwenLM/qwen-code/issues/3553) | **Kimi-K2.5 tool_calls.type validation error** — API rejects empty string, expects `function` | Third-party model compatibility breakage; tool call serialization issue | Reported as urgent with request ID for traceability |
| [#3555](https://github.com/QwenLM/qwen-code/issues/3555) | **Duplicate model IDs across providers break parsing** — same `glm-5.1` from two OpenAI-compatible sources | Multi-provider failover is common production need; current config schema doesn't support it | Practical ops blocker; 1 comment |
| [#3549](https://github.com/QwenLM/qwen-code/issues/3549) | **ACP mode lacks HTTP MCP transport** — only SSE/WebSocket supported, not plain HTTP | Limits MCP ecosystem integration; HTTP is simpler for firewalled environments | Feature gap against spec ([agentclientprotocol.com](https://agentclientprotocol.com/protocol/session-setup#http-transport)) |
| [#3568](https://github.com/QwenLM/qwen-code/issues/3568) | **Add configurable limit for concurrent subagents** — llama.cpp users need serial execution | Resource-constrained local deployments suffer from parallel agent spawning | 0 comments but precisely scoped; aligns with local model trends |
| [#3566](https://github.com/QwenLM/qwen-code/issues/3566) | **`/skills list` triggers same React max-depth error** | Confirms [#3530](https://github.com/QwenLM/qwen-code/issues/3530) isn't isolated; broader component lifecycle bug | Newly filed, no comments yet — likely to aggregate |
| [#3536](https://github.com/QwenLM/qwen-code/issues/3536) | **Java SDK `TransportOptions.setEnv()` silently dropped** — env vars never reach CLI subprocess | SDK/CLI boundary bug; breaks Java automation use cases | Quietly filed, 0 comments; serious for enterprise integrations |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#3519](https://github.com/QwenLM/qwen-code/pull/3519) | **Image input unification** — paste base64/data URLs, drag files, all normalized to `[Image #N]` placeholders | Merges three attachment paths into consistent UX; closes [#3518](https://github.com/QwenLM/qwen-code/issues/3518) | Open |
| [#3567](https://github.com/QwenLM/qwen-code/pull/3567) | **Respect `OPENAI_MODEL` precedence in CLI resolution** — fixes env-driven model selection order | Aligns OpenAI-compatible provider behavior with user expectations (`argv > OPENAI_MODEL > QWEN_MODEL > settings`) | Open |
| [#3441](https://github.com/QwenLM/qwen-code/pull/3441) | **Conversation rewind** — double-ESC or `/rewind` to rollback to any prior turn | Major UX feature for iterative prompting; closes [#3186](https://github.com/QwenLM/qwen-code/issues/3186) | Open |
| [#3494](https://github.com/QwenLM/qwen-code/pull/3494) | **Python SDK implementation** — async/sync `query`, process transport, permissions | Closes gap with Node SDK; includes maintainer E2E smoke test | Open |
| [#3564](https://github.com/QwenLM/qwen-code/pull/3564) | **macOS Desktop App installer** — Spotlight/Launchpad native launch via `.app` bundle | Distribution milestone; lowers barrier for non-terminal users | Open |
| [#3563](https://github.com/QwenLM/qwen-code/pull/3563) | **`oh-my-agent-check` bundled skill** — audits agent wrappers, memory contamination, tool discipline, fallback loops | Operational safety tooling for production agent deployments | Open |
| [#3562](https://github.com/QwenLM/qwen-code/pull/3562) | **OSC terminal notifications** — iTerm2 (OSC 9), Kitty (OSC 99), Ghostty (OSC 777) with tmux passthrough | Rich desktop notifications replacing basic bell; closes [#2528](https://github.com/QwenLM/qwen-code/issues/2528) | Open (supersedes two closed attempts) |
| [#3463](https://github.com/QwenLM/qwen-code/pull/3463) | **Concurrent ACP Agent tool calls** — parallel subagent execution vs. sequential for-loop | Latency optimization; mirrors existing `coreToolScheduler` partition logic; closes [#2516](https://github.com/QwenLM/qwen-code/issues/2516) | Open |
| [#3471](https://github.com/QwenLM/qwen-code/pull/3471) | **Model-facing agent control** — `task_stop`, `send_message`, per-agent live transcript | Enables parent agents to monitor and redirect subagents mid-flight; major orchestration upgrade | Open |
| [#3550](https://github.com/QwenLM/qwen-code/pull/3550) | **Stateless OpenAI converter** — eliminates singleton mutable state, root-cause fix following [#3525](https://github.com/QwenLM/qwen-code/pull/3525) hotfix | Architectural debt cleanup; prevents entire class of stream-scoping bugs | Open |

---

## Feature Request Trends

1. **Local model ergonomics** — Simplified, auth-free configuration for self-hosted LLMs (VLLM, llama.cpp) dominates requests; users expect "it just works" parity with cloud OAuth flow.
2. **Agent orchestration controls** — Configurable concurrency limits, mid-flight subagent interruption (`task_stop`), and live transcript access reflect maturing from demo to production use.
3. **Terminal/CLI polish** — OSC notifications, conversation rewind, voice input (`/voice`), and auto-titled sessions show demand for competitive parity with Claude Code and Gemini CLI.
4. **MCP ecosystem expansion** — HTTP transport support and broader protocol compliance to integrate diverse tool servers.
5. **Built-in workflow commands** — `/simplify` (code review/refinement), `/update` self-updater, and plan mode directory configuration indicate users want opinionated, reusable workflows.

---

## Developer Pain Points

| Category | Pattern | Frequency |
|----------|---------|-----------|
| **React state management bugs** | `Maximum update depth exceeded` in model switcher, skills list — `useEffect` dependency arrays or missing memoization | 2+ confirmed instances, likely more unreported |
| **Local model auth friction** | Docs promise standalone local usage, but OAuth prompts persist; config schema validation unclear | 3+ issues ([#3384](https://github.com/QwenLM/qwen-code/issues/3384), [#3532](https://github.com/QwenLM/qwen-code/issues/3532), [#3535](https://github.com/QwenLM/qwen-code/issues/3535)) |
| **Tool call serialization edge cases** | Empty strings for optional params (`pages: ""`), malformed `tool_calls.type` rejected by third-party APIs | 2 fixes shipped ([#3559](https://github.com/QwenLM/qwen-code/pull/3559), [#3558](https://github.com/QwenLM/qwen-code/issues/3558)), [#3553](https://github.com/QwenLM/qwen-code/issues/3553) pending |
| **SDK parity gaps** | Java env propagation broken, Python SDK only now arriving; multi-language support lags core CLI | 2+ issues ([#3536](https://github.com/QwenLM/qwen-code/issues/3536), [#3494](https://github.com/QwenLM/qwen-code/pull/3494)) |
| **Provider/model compatibility** | Duplicate IDs, SSL bypass needs, non-Qwen model validation errors suggest hardcoded assumptions | 3+ issues ([#3555](https://github.com/QwenLM/qwen-code/issues/3555), [#3535](https://github.com/QwenLM/qwen-code/issues/3535), [#3553](https://github.com/QwenLM/qwen-code/issues/3553)) |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*