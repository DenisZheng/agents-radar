# AI CLI Tools Community Digest 2026-04-29

> Generated: 2026-04-29 00:20 UTC | Tools covered: 8

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

# AI CLI Tools Ecosystem Cross-Comparison Report
## Community Digest Analysis — 2026-04-29

---

## 1. Ecosystem Overview

The AI CLI tooling landscape has matured into a competitive seven-player market with distinct architectural philosophies. All major tools now support MCP (Model Context Protocol) extensibility, yet diverge sharply on sandboxing models, permission granularity, and platform prioritization. The sector is experiencing a reliability crisis: every tracked tool shows chronic hang states, permission regression patterns, and Windows-platform neglect. Meanwhile, enterprise demands are forcing rapid evolution in context window management, background task execution, and cross-provider abstraction layers. The most active tools (Claude Code, OpenCode) are investing in native LLM cores and Effect-based architectures, suggesting a generational shift away from thin API wrappers toward deeply integrated agent runtimes.

---

## 2. Activity Comparison

| Tool | Issues (24h Window) | PRs (24h Window) | Releases | Release Velocity |
|:---|:---|:---|:---|:---|
| **Claude Code** | 10 hot issues tracked | 6 PRs (all minor fixes) | v2.1.121–v2.1.122 (2 releases) | Very high — daily patches |
| **OpenAI Codex** | 10 hot issues | 10 PRs (8 infrastructure merges) | 0.126.0-alpha.9–11 (3 alphas) | Very high — stabilization push |
| **Gemini CLI** | 10 hot issues | 10 PRs (1 closed) | v0.41.0-preview.0, nightly | High — nightly cadence |
| **GitHub Copilot CLI** | 10 hot issues | 2 PRs (both trivial/closed) | v1.0.39 | Moderate — feature-ship cycle |
| **Kimi Code CLI** | 10 hot issues | 10 PRs (2 closed) | v1.40.0 | High — responsive to community |
| **OpenCode** | 10 hot issues | 10 PRs (2 critical security fixes closed) | v1.14.29 | Very high — 50 issues/50 PRs active |
| **Pi** | 10 hot issues | 10 PRs (6 merged) | v0.70.6 | High — rapid bug-fix cycle |
| **Qwen Code** | 10 hot issues | 10 PRs | v0.15.4 + SDK v0.1.7 | Moderate — SDK/CLI dual track |

*Note: Issue/PR counts normalized from digest scope; OpenCode explicitly reports 50/50 active items.*

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|:---|:---|:---|
| **Persistent thinking/reasoning visibility** | Claude Code (#8477, 244👍), Pi (#3208), OpenCode (#24569) | Users reject hidden reasoning; want model cognition exposed and configurable per-model |
| **Background task / async execution** | Copilot CLI (v1.0.39 `ctrl+x→b`), Qwen Code (#3634 Phase C), Kimi (#2040 VS Code notifications) | Long-running operations without blocking; push notifications for remote/tmux workflows |
| **Granular permission model** | Kimi (#2095, #1837, #2045), Copilot CLI (#1973), Claude Code (#51798 hooks regression) | Escape binary allow-all/approve-each; per-tool-type rules, timeouts, persistent preferences |
| **WSL/Windows toolchain parity** | Claude Code (#12506, 101👍), Codex (#16088, #20048), OpenCode (#24081, #17291) | Native Windows performance, WSL integration, PowerShell/encoding fixes, ARM64 support |
| **Context window transparency & control** | Copilot CLI (#2052, #1688, #3024), Codex (#19464 1M tokens, 106👍), Qwen Code (#3652, #3698) | Real-time usage indicators, configurable compaction thresholds, API-limit alignment |
| **MCP scalability & management** | Copilot CLI (#3024, #2282), Claude Code (#53262 plugin prune), Gemini (#24246 >128 tools) | Tool cardinality limits, connection reliability, per-project server configuration |
| **Session durability / fsync safety** | Kimi (#2093, #2101), OpenCode (#24628 ghost sessions), Pi (#3911 duplicates) | Crash-safe persistence, atomic state writes, recovery from `kill -9` |
| **Hot-reload / runtime config** | Qwen Code (#3696), Kimi (#2097 `/reload-skills`), Codex (#2628 project MCPs) | Zero-downtime skill/extension updates without session restart |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi | OpenCode | Pi | Qwen |
|:---|:---|:---|:---|:---|:---|:---|:---|
| **Core Architecture** | TypeScript, heavy sandboxing (Cowork VMs) | Rust migration, `PermissionProfile` overhaul | Node.js/TypeScript, ACP client-centric | Proprietary, ACP session model | TypeScript, Web UI + CLI dual mode | Effect-TS, native LLM core (flagged) | TypeScript, extension-API first | TypeScript, SDK+CLI dual track |
| **Target User** | Enterprise teams, safety-conscious | Developers wanting OpenAI model fidelity | Google ecosystem integrators | GitHub-centric developers, Microsoft shops | Chinese market, VS Code users | Multi-provider power users, open-source | TUI purists, keyboard-centric devs | Alibaba cloud integrators, local model deployers |
| **Permission Philosophy** | Restrictive by default, hooks API for automation | Migrating to `PermissionProfile` (explicit tiers) | Approval mode cycling (F10/Shift+Tab) | Binary allow-all/approve-each + ACP client config | Maturing granularity (per-tool, timeout, yolo/afk split) | **Critical security fix**: was default-allow, now patching | Configurable per model | OAuth-gated, quota-driven |
| **Platform Priority** | macOS primary, Windows struggling | macOS app prioritized, Intel deprecated | Cross-terminal compatibility focus | Windows via winget (fragile) | Windows + uv path (emerging pain) | Cross-platform, WSL gaps | Linux/XDG compliance, terminal state focus | Local deployment emphasis |
| **Unique Strength** | `/resume` PR→session resolution, Bedrock routing | 1M token context demand (enterprise blocker) | Terminal compatibility breadth (keypad, SSH, SEA) | GitHub native integration, slash commands | Agent autonomy UX maturation | Provider abstraction architecture, mobile touch | Extension API, multi-provider flexibility | Hot-reload system, background task roadmap |
| **Critical Weakness** | Billing regressions (#53262 $200 bug), sandbox fragility | macOS app reliability crisis, Windows neglect | Sub-agent infinite loops (#26146), "thinking forever" | Low PR velocity, context opacity | Windows cold-start (#2106), fd exhaustion (#2111) | Chronic hangs (#11112), provider schema drift | Markdown stack overflow (#3826), documentation gaps | DeepSeek compatibility, quota policy backlash (#3203) |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|:---|:---|:---|
| **🔥 Highest Momentum** | **Claude Code**, **OpenCode**, **OpenAI Codex** | Claude Code: daily releases, 244👍 top feature, rapid bug response. OpenCode: 50 active issues/PRs, architectural investment (#24712 native LLM), security patches. Codex: 3 alphas in 24h, 106👍 1M token demand, systematic `SandboxPolicy`→`PermissionProfile` migration |
| **High Momentum** | **Kimi**, **Pi**, **Gemini CLI** | Kimi: 11 fresh issues in burst, closed long-standing UX gaps (#1823, #1631). Pi: 6/10 PRs merged, rapid terminal-state fixes. Gemini: nightly releases, terminal compatibility focus, ACP refactor |
| **Moderate Momentum** | **Qwen Code**, **Copilot CLI** | Qwen: SDK/CLI dual track, policy controversy driving 120 comments. Copilot CLI: feature-ship cycle (v1.0.39), but only 2 trivial PRs in window suggests internal development model |

| Maturity Signal | Leaders | Laggards |
|:---|:---|:---|
| **Permission model sophistication** | Kimi (yolo/afk split, per-tool rules, timeout config) | Copilot CLI (binary model), OpenCode (was default-allow, patching) |
| **Session durability engineering** | Kimi (#2093 fsync awareness), Claude Code (/resume PR resolution) | OpenCode (#24628 ghost sessions since January) |
| **Provider abstraction** | OpenCode (#24712 Effect-based native core), Pi (6+ providers) | Codex (OpenAI-only, context limit mismatch), Copilot CLI (GitHub-only) |
| **Cross-platform reliability** | Gemini (terminal compatibility breadth), Pi (XDG compliance) | Claude Code (Windows ARM64 broken), Codex (Intel Mac deprecated) |

---

## 6. Trend Signals

| Trend | Evidence | Implication for Developers |
|:---|:---|:---|
| **Context window as competitive battleground** | Codex #19464 (106👍, 74 comments for 1M tokens); Copilot CLI #3024 (MCP bloat at 94K/128K); Qwen #3652 (983K hard ceiling) | Plan for 1M+ token workflows; expect compaction/ compression to become user-configurable; monitor provider API vs. client limit mismatches |
| **Agent autonomy UX maturation** | Kimi's unified auto-mode (#2105), timeout config (#1837), yolo/afk orthogonalization (#2045); Claude Code's hooks API regressions (#51798) | Demand is shifting from "more automation" to "predictable, configurable automation"; permission granularity is product-differentiating |
| **Sandboxing/permissions as systemic fragility point** | Every tool shows regression patterns: Claude Code (#49363, #51798), Codex (infrastructure migration), OpenCode (CVE-class default-allow fix), Kimi (#2095) | Treat permission code as security-critical; expect breaking changes in permission APIs; automation pipelines need defensive design |
| **Windows as persistent market gap** | Claude Code (#12506, 101👍; #40198 ARM64), Codex (#16088 WSL, #20048), OpenCode (#24081), Kimi (#2106) | Windows-native or WSL-integrated tools have adoption advantage; enterprise Windows deployments are underserved |
| **Terminal/TUI robustness renaissance** | Gemini (F10, keypad Enter, SEA), Pi (Kitty protocol, editor state), Kimi (prompt color, focus events) | TUI is not "solved"; terminal state management, input handling, and accessibility are active innovation areas |
| **Provider schema drift accelerating** | OpenCode (Kimi #23887, Copilot #24527, DeepSeek #24569), Qwen (DeepSeek #3579, #3715), Pi (Fireworks #3854, Antigravity #2815) | Multi-provider tools need defensive schema adaptation; "works with X" claims require continuous validation; native LLM cores (#24712) may reduce fragility |
| **Background/remote execution as power-user expectation** | Copilot CLI v1.0.39 background tasks, Qwen Phase C monitor, Kimi VS Code notifications, Claude Code #28765 push notifications | Synchronous REPL model is insufficient; async task management, session recovery, and cross-device continuity are emerging requirements |
| **MCP ecosystem hitting architectural limits** | Copilot CLI #3024 (context bloat), Gemini #24246 (>128 tools), Claude Code #53262 (billing via string match in git commits), Kimi #2096 (tool list overflow) | Tool cardinality management, intelligent scoping, and MCP server lifecycle governance are next-order problems |

---

*Report compiled from 2026-04-29 community digests across eight active AI CLI tools.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-04-29 | Repository: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control preventing orphans, widows, and numbering misalignment in AI-generated documents | Universal pain point—every Claude document affected; author argues users rarely ask for good typography but always suffer from bad |
| 2 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills evaluating Skill structure, documentation, security posture, and prompt injection resilience | Enterprise governance angle; five-dimension scoring framework |
| 3 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised for single-conversation actionability—specific, token-efficient guidance | Clarity vs. verbosity tension in Skill authoring |
| 4 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Create, fill, read, convert ODT/ODS files; LibreOffice/ISO standard compliance | Open-source format advocacy vs. proprietary DOCX dominance |
| 5 | **Skill-Creator Validation** | [#539](https://github.com/anthropics/skills/pull/539) | 🟡 Open | Pre-parse YAML validation catching unquoted descriptions with `:` characters | Developer experience; silent failure prevention |
| 6 | **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | 🟡 Open | Fixes `w:id` collision corruption when adding tracked changes to bookmarked documents | Deep OOXML expertise; hardcoded ID anti-pattern |
| 7 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Full testing stack: Testing Trophy, AAA pattern, React Testing Library, MSW, Playwright | Modern frontend testing orthodoxy |
| 8 | **Sensory (macOS Automation)** | [#806](https://github.com/anthropics/skills/pull/806) | 🟡 Open | AppleScript/`osascript` automation replacing screenshot-based computer use | Privacy/permission tiering; native vs. visual automation |

---

## 2. Community Demand Trends

From high-engagement Issues, five dominant Skill directions emerge:

| Trend | Evidence | Intensity |
|:---|:---|:---:|
| **Enterprise Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (9 comments, 👍6) — org-wide libraries, not Slack file dumps | 🔥🔥🔥 |
| **Skill Governance & Trust** | [#492](https://github.com/anthropics/skills/issues/492) trust boundary abuse; [#412](https://github.com/anthropics/skills/issues/412) agent governance proposal | 🔥🔥🔥 |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) — expose Skills as Model Context Protocol servers | 🔥🔥 |
| **Platform-Native Automation** | [#806](https://github.com/anthropics/skills/pull/806) macOS; implicit demand for Windows/Linux equivalents | 🔥🔥 |
| **Evaluation & Quality Assurance** | [#556](https://github.com/anthropics/skills/issues/556) 0% skill trigger rate in `claude -p`; [#83](https://github.com/anthropics/skills/pull/83) meta-analyzers | 🔥🔥 |

**Emerging pattern:** The community is shifting from *creating Skills* to *governing, distributing, and verifying Skills* at organizational scale.

---

## 3. High-Potential Pending Skills

Active PRs with strong technical merit awaiting merge:

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | Solves universal problem with minimal scope; no external dependencies |
| **ODT** | [#486](https://github.com/anthropics/skills/pull/486) | Complements existing DOCX/PDF skills; ISO standard alignment |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Fills major gap in code-quality skill coverage; comprehensive but focused |
| **Sensory** | [#806](https://github.com/anthropics/skills/pull/806) | Unique platform-native approach; two-tier permission model addresses enterprise concerns |
| **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | Broad enterprise IT coverage (ITSM, ITOM, SecOps, FSM, SPM); actively updated through April 23 |
| **HADS (Human-AI Document Standard)** | [#616](https://github.com/anthropics/skills/pull/616) | Addresses documentation duality problem; lightweight Markdown convention |

**Note:** Three critical bug-fix PRs by [Lubrsy706](https://github.com/Lubrsy706) ([#538](https://github.com/anthropics/skills/pull/538), [#539](https://github.com/anthropics/skills/pull/539), [#541](https://github.com/anthropics/skills/pull/541)) represent concentrated maintenance activity in document-format skills and may batch-merge.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade Skill lifecycle management—encompassing secure distribution, organizational sharing, automated quality validation, and trust verification—rather than merely more individual Skills.**

The shift from "what Skills can Claude use?" to "how do organizations safely govern Skills at scale" defines the 2026 Skills ecosystem maturity inflection point.

---

---

# Claude Code Community Digest — 2026-04-29

---

## 1. Today's Highlights

Two rapid-fire releases (v2.1.121–v2.1.122) shipped MCP plugin improvements and Bedrock service-tier controls, while a bizarre billing regression involving `HERMES.md` in git commit messages burned through $200 in user credits before being patched. Windows and sandboxing regressions continue to dominate the incoming bug stream, with permission hooks and thinking-block handling emerging as fragile subsystems.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v2.1.122** | Added `ANTHROPIC_BEDROCK_SERVICE_TIER` env var (`default`/`flex`/`priority`) for AWS Bedrock routing; `/resume` now resolves PR URLs to their originating sessions ([release](https://github.com/anthropics/claude-code/releases/tag/v2.1.122)) |
| **v2.1.121** | MCP `alwaysLoad` flag skips tool-search deferral; `claude plugin prune` cleans orphaned plugin deps; `plugin uninstall --prune` cascades ([release](https://github.com/anthropics/claude-code/releases/tag/v2.1.121)) |

---

## 3. Hot Issues

| # | Title | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#8477](https://github.com/anthropics/claude-code/issues/8477) | Add Option to Always Show Claude's Thinking | Top-voted enhancement (244 👍); users want persistent visibility into reasoning without toggling | 77 comments; sustained demand since v2.0.0 |
| [#1669](https://github.com/anthropics/claude-code/issues/1669) | Claude Code frequently loses track of which directory it is in | Safety-critical: caused destructive ops in wrong directories; long-running reliability flaw | 48 comments; 77 👍; recurring frustration |
| [#40198](https://github.com/anthropics/claude-code/issues/40198) | Cowork VM fails to start on Windows ARM64 (Snapdragon) | Blocks adoption on emerging Copilot+ PCs; Samsung Galaxy Book4 Edge specifically broken | 43 comments; niche but vocal hardware segment |
| [#12506](https://github.com/anthropics/claude-code/issues/12506) | Claude Desktop: Option to execute commands in WSL instead of Windows | 101 👍; Windows devs want Linux toolchain parity without leaving Desktop | 26 comments; clear feature gap |
| [#25979](https://github.com/anthropics/claude-code/issues/25979) | Hangs indefinitely when API streaming connection stalls | No read timeout = zombie sessions; affects Vertex API users specifically | 25 comments; reliability concern |
| [#49363](https://github.com/anthropics/claude-code/issues/49363) | Regression: malware reminder on every Read still causes subagent refusals (v2.1.111) | Fix from #47027 (v2.1.92) didn't hold; `<system-reminder>` injection breaks agent workflows | 19 comments; trust in regression fixes eroding |
| [#53262](https://github.com/anthropics/claude-code/issues/53262) | `HERMES.md` in git commit messages routes to extra usage billing instead of plan quota | **Closed**; bizarre string-matching bug caused $200 unexpected charge; Max plan quota ignored | 17 comments; billing trust damage |
| [#36465](https://github.com/anthropics/claude-code/issues/36465) | RPC error: `useradd` failed (exit status 12) — cannot start any new Cowork tasks | Sandbox provisioning failure blocks all Cowork usage; macOS-specific | 14 comments; hard blocker |
| [#28765](https://github.com/anthropics/claude-code/issues/28765) | Push notifications for completed tasks in remote-control mode | 39 👍; mobile/remote workflow gap; tmux users need async completion signals | 13 comments; quality-of-life for power users |
| [#51798](https://github.com/anthropics/claude-code/issues/51798) | `PreToolUse` `permissionDecision: "allow"` no longer suppresses prompt for Bash with `dangerouslyDisableSandbox: true` (2.1.116+ regression) | Hooks API contract broken; automation pipelines relying on silent allow now hang for input | 8 comments; scripting reliability hit |

---

## 4. Key PR Progress

| # | Title | Description |
|---|-------|-------------|
| [#54429](https://github.com/anthropics/claude-code/pull/54429) | fix(hookify): drop hookify.* import prefix so hooks resolve in versioned cache | Fixes broken plugin imports when cache uses versioned paths; `hookify/` wrapper directory mismatch |
| [#54424](https://github.com/anthropics/claude-code/pull/54424) | fix(plugin-dev): document `repository` as string-only in manifest docs | Runtime schema rejects object-format `repository`; docs now match actual validator |
| [#54103](https://github.com/anthropics/claude-code/pull/54103) | fix(commit-commands): cover all bash invocations in commit-push-pr allowed-tools | `/commit-push-pr` skill was missing `git diff`, `git branch`, `git switch` in allowlist; caused mid-flow permission prompts |
| [#54094](https://github.com/anthropics/claude-code/pull/54094) | fix: quote `$CLAUDE_PLUGIN_ROOT` in plugin hook commands | Unquoted path expansion broke hooks when plugin root contained spaces (e.g. `Company Name/`) |
| [#54391](https://github.com/anthropics/claude-code/pull/54391) | docs: clarify calculation assumptions in bug reports | Adds guidance on fees, slippage, rounding for calculation bug reports; tighter repro standards |
| [#54134](https://github.com/anthropics/claude-code/pull/54134) | fix: correct MacOS to macOS in README.md | Trivial but consistent with Apple branding and rest of repo |

*Only 6 PRs updated in last 24h; all shown.*

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Persistent thinking visibility** | #8477 (244 👍), #49739 (inverted thinking toggle in VS Code) | High — users reject "hidden by default" UX |
| **WSL/Windows toolchain integration** | #12506 (101 👍), #43024 (PowerShell encoding), #53133 (Windows retry loops) | High — Windows treated as second-class |
| **Async/push notifications for remote workflows** | #28765 (39 👍) | Medium — tmux/remote-control power users |
| **Team agent observability** | #48897 (progress visibility, keyboard shortcuts for Tasks/Plans) | Medium — multi-agent orchestration maturing |
| **Cowork sandbox robustness** | #36465, #40198, #54477 (data-loss from unsandboxed DELETE) | Urgent — sandbox failures have security implications |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **Permission/sandboxing regressions** | Very high | Critical | #51798, #49363, #54486, #54468, #54477 — hooks, allowlists, and sandbox flags break repeatedly between versions; automation pipelines fragile |
| **Windows as second-class platform** | High | High | #12506, #40198, #43024, #53133, #51219, #54488 — ARM64, WSL, PowerShell encoding, stats undercounting, retry storms |
| **Billing/quota transparency failures** | Medium | Critical | #53262 (`HERMES.md` string match → $200 charge), #51219 (UI shows low usage but hard-limited), #54464 (cross-account quota sharing) |
| **Streaming/connection reliability** | Medium | High | #25979 (indefinite hang), #54434 (SSE stall), #53133 (10x retry loop) — no timeout or recovery |
| **Thinking block handling** | Medium | Medium | #8477 (always-show request), #54482 (stripped from context in Opus 4.7) — core to trust in model reasoning |
| **Directory/working-state coherence** | Low but severe | Critical | #1669 — long-standing bug with destructive potential |

---

*Digest compiled from github.com/anthropics/claude-code activity 2026-04-28 to 2026-04-29.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-29

---

## 1. Today's Highlights

The Codex team shipped three rapid-fire Rust alpha releases (0.126.0-alpha.9–11) as the project accelerates toward a stable 0.126 milestone. A major community push for **1M token context support in GPT-5.5** is gaining significant traction with 106 upvotes and 74 comments, reflecting intense demand for expanded context windows. Meanwhile, the engineering team is systematically migrating the entire test suite from legacy `SandboxPolicy` to `PermissionProfile`, signaling a foundational permissions model overhaul.

---

## 2. Releases

| Version | Notes |
|--------|-------|
| **rust-v0.126.0-alpha.9** through **alpha.11** | Three consecutive alpha releases in 24 hours suggest active stabilization of the 0.126 branch. No detailed changelogs provided in release notes. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#19464](https://github.com/openai/codex/issues/19464) | **Support 1M token context for GPT-5.5 in Codex** | GPT-5.5 API supports 1M tokens but Codex is artificially limited to 400K; blocks enterprise codebases and long-document workflows | 🔥 **106 upvotes, 74 comments** — top community priority |
| [#8648](https://github.com/openai/codex/issues/8648) | **Codex replies to earlier messages instead of latest** | Core conversation state bug breaking multi-turn reliability; affects trust in agent workflows | 48 upvotes, 53 comments, persistent since January |
| [#16088](https://github.com/openai/codex/issues/16088) | **Empty `.codex` file left behind in projects without config** | Sandbox regression polluting version control; WSL-specific friction | 74 upvotes, 32 comments |
| [#18258](https://github.com/openai/codex/issues/18258) | **Computer Use plugin "unavailable" despite bundled files** | macOS app broken core feature; community-developed workaround circulating | 35 upvotes, 30 comments |
| [#18404](https://github.com/openai/codex/issues/18404) | **Computer Use broken on Intel Macs (x86_64)** | Platform-specific architecture gap; Apple Silicon prioritized, Intel users left behind | 5 upvotes, 14 comments |
| [#17318](https://github.com/openai/codex/issues/17318) | **Can't change model/reasoning effort in app** | UI state bug blocking model switching; breaks Pro tier flexibility | 19 upvotes, 13 comments |
| [#2628](https://github.com/openai/codex/issues/2628) | **Project-specific MCPs** *(closed)* | Long-running feature request finally resolved; enables per-repo MCP server configuration | 141 upvotes, 30 comments — **closed today** |
| [#18708](https://github.com/openai/codex/issues/18708) | **Allow edit on any message, not just last** | UX friction in conversation branching; forking creates clutter vs. inline editing | 2 upvotes, 4 comments but strongly argued |
| [#19891](https://github.com/openai/codex/issues/19891) | **"For coding" view hides file names behind summaries** | Regression reducing transparency in code review workflow | 6 upvotes, 4 comments |
| [#20025](https://github.com/openai/codex/issues/20025) | **0.125.0 hangs on startup (Homebrew)** | Critical launch failure on latest release; `--version` also hangs suggesting binary-level regression | Fresh report, 3 comments |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#20091](https://github.com/openai/codex/pull/20091) | **Improve `tool_suggest` triggering conditions** | Refines prompt distinction from tool search; disables parallel tool calls for suggestions | 🟢 Open |
| [#20072](https://github.com/openai/codex/pull/20072) | **Support disabling tool suggest for specific tools** | Adds `disable_tool_suggest` config with persistent "never show again" UX | ✅ Merged |
| [#20060](https://github.com/openai/codex/pull/20060) | **Add reasoning effort to turn tracing spans** | Observability enhancement for performance filtering by model effort | 🟢 Open |
| [#19442](https://github.com/openai/codex/pull/19442) | **Disable capabilities by model provider** | Bedrock/Azure providers fail-closed on unsupported features (connectors, MCP, image gen, etc.) | 🟢 Open |
| [#20049](https://github.com/openai/codex/pull/20049) | **Expose provider capability bounds to app server** | v2 API surfaces provider-derived limits for UI alignment | 🟢 Open |
| [#19160](https://github.com/openai/codex/pull/19160) | **Make `apply_patch` streaming parser stateful** | 10–15x performance improvement on large patches via incremental parsing | 🟢 Open |
| [#19852](https://github.com/openai/codex/pull/19852) | **Enforce workspace metadata protections in Linux sandbox** | Protects `.git`, `.agents`, `.codex` from writes in bubblewrap | 🟢 Open |
| [#19840](https://github.com/openai/codex/pull/19840) | **Add persisted hook enablement state** | User hook preferences survive sessions; distinguishes managed vs. user hooks | 🟢 Open |
| [#19949](https://github.com/openai/codex/pull/19949) | **Detect and import MCP, subagents, hooks, commands from external** | Migration path for external agent configs into Codex-native shape | 🟢 Open |
| [#18902](https://github.com/openai/codex/pull/18902) | **Clean up `SessionStart` and input hook handling** | Fixes hook ordering after `SessionStart`/`UserPromptSubmit` refactor | 🟢 Open |

**Infrastructure theme:** 8 merged PRs from `bolinfest` systematically replace `SandboxPolicy` with `PermissionProfile` across core tests — foundational cleanup for the permissions system.

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Context window expansion** | #19464 (1M tokens), #19607 (rate limit complaints) | 🔥 Critical mass — enterprise blocker |
| **Conversation UX improvements** | #18708 (edit any message), #19891 (file name visibility), #8648 (reply targeting) | Active frustration with current branching model |
| **Environment/project isolation** | #2628 (project MCPs — **shipped**), #14330 (full env isolation), #12862 (`--worktree`/`--tmux`) | Strong demand for multi-tenant workflows |
| **Windows parity** | #20048, #19011, #18486 (Browser Use, automations, MCP all broken) | Persistent second-class platform status |
| **Hook/plan-mode extensibility** | #19921 (expose plan-mode to notify), #19840 (persist hook state) | Growing ecosystem integration needs |
| **Azure/enterprise auth** | #8732 (DefaultAzureCredential) | Security compliance requirement |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **macOS app reliability** | Very High | 🔴 Critical | #18258, #18404, #17318, #19930, #20090 — Computer Use, GPU compositing, model switching, blank UI elements |
| **Windows as neglected platform** | High | 🔴 Critical | #20048, #19011, #18486, #16088 (WSL) — feature gaps across app, MCP, automations |
| **Context limits vs. API reality** | High | 🟡 Blocking | #19464 — 400K vs. 1M token disconnect |
| **Conversation state integrity** | Medium | 🟡 Degrading trust | #8648, #18708 — reply targeting, editing friction |
| **Sandbox/permission debugging** | Medium | 🟡 Opaque | #19674 (arg0 errors lack context), #17139 (malloc logging noise) |
| **Release stability** | Emerging | 🟡 Concerning | #20025 (0.125.0 startup hang), #19930 (Intel GPU regression) |

---

*Digest compiled from openai/codex GitHub activity for 2026-04-29.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-29

## Today's Highlights

The Gemini CLI team pushed two releases in the last 24 hours, including v0.41.0-preview.0 with UI polish and automatic update reliability fixes. Meanwhile, community contributors landed several terminal compatibility fixes (F10 fallback, keypad Enter, SEA support) and the maintainers began a major ACP client refactor. A fresh bug report on infinite model invalidation loops in sub-agent invocation (#26146) highlights ongoing instability in the agent execution path.

---

## Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v0.41.0-preview.0** | 2026-04-28 | Hides `list` suggestion when partial input exists ([#25847](https://github.com/google-gemini/gemini-cli/pull/25847)); cleaner interactive UI |
| **v0.41.0-nightly.20260428.gc17400b83** | 2026-04-28 | Fixes custom theme text schema missing `response` key ([#25822](https://github.com/google-gemini/gemini-cli/pull/25822)); surfaces manual update command when auto-update fails ([#26052](https://github.com/google-gemini/gemini-cli/pull/26052)) |
| **v0.40.0** | 2026-04-14 | Retries additional OpenSSL 3.x SSL errors during streaming ([#16075](https://github.com/google-gemini/gemini-cli/pull/16075)) — stability improvement for network-sensitive workflows |
| **v0.40.0-preview.5** | 2026-04-28 | Cherry-pick with conflicts resolved for preview branch ([#26124](https://github.com/google-gemini/gemini-cli/pull/26124)) |

---

## Hot Issues

| # | Status | Title | Why It Matters | Community Signal |
|---|--------|-------|--------------|----------------|
| [#26146](https://github.com/google-gemini/gemini-cli/issues/26146) | 🔴 OPEN | Infinite model invalidation loop in sub-agent invocation | **Critical runtime bug**: Using `invoke_agent` with `gemini-3-flash-preview` triggers unrecoverable loop; blocks multi-agent workflows | 2 comments, fresh report (Apr 28-29) |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | 🔴 OPEN | Assess AST-aware file reads, search, and mapping | **Strategic EPIC**: Could reduce token waste and misaligned reads; foundational for smarter code agents | 5 comments, maintainer-tracked |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | 🔴 OPEN | Shell command execution stuck with "Waiting input" | **High-frequency hang**: Simple commands falsely report awaiting input; breaks automation trust | 2 comments, 3 👍 |
| [#18979](https://github.com/google-gemini/gemini-cli/issues/18979) | 🔴 OPEN | User prompts logged despite `logPrompts=false` | **Privacy/security**: Configuration bypass leaks sensitive conversation history to logs | 3 comments |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | 🔴 OPEN | Repeated permission prompts on same file | **UX friction**: "Allow for all future sessions" intermittently ignored; breaks flow state | 3 comments |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | 🔴 OPEN | Model creates tmp scripts in random spots | **Workspace hygiene**: Restricted shell execution sp scattered edit scripts; cleanup burden on users | 2 comments |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 🔴 OPEN | 400 error with >128 tools | **Scalability ceiling**: Hard limit on tool count; needs intelligent tool scoping | 1 comment, maintainer-tracked |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | 🔴 OPEN | Memory routing: global vs. project | **Architecture**: Defines how agent memory persists across contexts; user-specific vs. repo-specific | 1 comment, 2 👍 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | 🔴 OPEN | Agent should stop/discourage destructive behavior | **Safety**: `git reset --force` and similar commands need guardrails | 1 comment, 1 👍 |
| [#25520](https://github.com/google-gemini/gemini-cli/issues/25520) | 🟢 CLOSED | Stays in thinking forever! | Resolved hang issue; pattern of "infinite thinking" reports now triaged as duplicates | 5 comments, 3 👍 |

---

## Key PR Progress

| # | Status | Title | What It Does | Impact |
|---|--------|-------|------------|--------|
| [#26143](https://github.com/google-gemini/gemini-cli/pull/26143) | 🔴 OPEN | Refactor: Modularize monolithic `acpClient` | Decomposes massive ACP client into focused modules; Phase 1 of planned refactoring | Maintainability, testability |
| [#26149](https://github.com/google-gemini/gemini-cli/pull/26149) | 🔴 OPEN | Expose runtime identity for external observers | Writes `runtime.json` sidecar with PID, session ID, workdir for external tooling integration | Observability, ecosystem |
| [#25980](https://github.com/google-gemini/gemini-cli/pull/25980) | 🔴 OPEN | Fix crash on @-mention with non-path blob | Prevents `ENAMETOOLONG` crash when JSON-like content is pasted as path argument | Robustness |
| [#25352](https://github.com/google-gemini/gemini-cli/pull/25352) | 🔴 OPEN | Add search/level filtering to debug console | Search + level-based filtering for high-volume log inspection | Developer experience |
| [#26150](https://github.com/google-gemini/gemini-cli/pull/26150) | 🔴 OPEN | Update documentation workflows with workspace trust | Fixes CI failures in docs automation from untrusted directory errors | CI reliability |
| [#25605](https://github.com/google-gemini/gemini-cli/pull/25605) | 🔴 OPEN | Forward termination signals to relaunched child process | Forwards `SIGTERM`/`SIGHUP` to child processes; fixes orphan process leaks | Process management |
| [#25260](https://github.com/google-gemini/gemini-cli/pull/25260) | 🔴 OPEN | Scrub CI env vars in dev mode | Prevents `ink` non-interactive hang when `CI_*` vars present in `npm run start` | Dev workflow |
| [#25135](https://github.com/google-gemini/gemini-cli/pull/25135) | 🔴 OPEN | Add `/enhance` command for prompt refinement | LLM-powered prompt improvement using conversation context | User productivity |
| [#26088](https://github.com/google-gemini/gemini-cli/pull/26088) | 🔴 OPEN | F10 fallback for approval mode cycling | `Shift+Tab` alternative for Windows/WezTerm compatibility | Terminal accessibility |
| [#26130](https://github.com/google-gemini/gemini-cli/pull/26130) | 🟢 CLOSED | Pass Node arguments via `NODE_OPTIONS` for SEA | Fixes flag parsing when CLI runs as Single Executable Application | Distribution model |

---

## Feature Request Trends

1. **Smarter Agent Memory & Context** — Multiple issues converge on memory architecture: global vs. project-scoped persistence ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819)), proactive memory writes ([#22809](https://github.com/google-gemini/gemini-cli/issues/22809)), and sub-agent awareness of approval modes ([#23582](https://github.com/google-gemini/gemini-cli/issues/23582)). The community wants agents that remember and respect workspace boundaries.

2. **AST-Aware Code Intelligence** — The AST investigation EPIC ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) signals demand for precise code navigation over regex-based search. Expected outcomes: method-bound reads, reduced token burn, and better codebase mapping.

3. **Safety & Guardrails** — Destructive operation prevention ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) and permission persistence ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916)) reflect user need for predictable, non-destructive automation. The "agentic commerce" proposals ([#25275](https://github.com/google-gemini/gemini-cli/issues/25275), [#25471](https://github.com/google-gemini/gemini-cli/issues/25471)) suggest commercial interest in standardized agent capabilities.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Hangs & unresponsiveness** | "Thinking forever" reports ([#25520](https://github.com/google-gemini/gemini-cli/issues/25520), [#24026](https://github.com/google-gemini/gemini-cli/issues/24026), [#25518](https://github.com/google-gemini/gemini-cli/issues/25518)), shell command "Waiting input" bug ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) | 🔴 Critical — erodes trust in automation |
| **Terminal compatibility gaps** | SSH text scrambling ([#24202](https://github.com/google-gemini/gemini-cli/issues/24202)), keypad Enter failures ([#26092](https://github.com/google-gemini/gemini-cli/pull/26092)), approval mode keybinding issues ([#22738](https://github.com/google-gemini/gemini-cli/issues/22738)) | 🟡 High — blocks adoption in enterprise/remote workflows |
| **Sub-agent instability** | Infinite model invalidation ([#26146](https://github.com/google-gemini/gemini-cli/issues/26146)), OAuth field gaps (fixed in [#26141](https://github.com/google-gemini/gemini-cli/pull/26141)), tmp script sprawl ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) | 🔴 Critical — multi-agent features unreliable |
| **Privacy/configuration leaks** | Prompt logging bypass ([#18979](https://github.com/google-gemini/gemini-cli/issues/18979)), permission prompts not respecting "allow all sessions" ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916)) | 🟡 High — compliance risk |
| **Dev/prod parity** | CI env var handling differs between bundled and `npm run start` builds ([#25260](https://github.com/google-gemini/gemini-cli/pull/25260), [#25649](https://github.com/google-gemini/gemini-cli/pull/25649)) | 🟡 Moderate — contributor friction |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-29

---

## 1. Today's Highlights

GitHub shipped **Copilot CLI v1.0.39** with background task support (`ctrl+x → b`) and new ACP session slash commands (`/compact`, `/context`, `/usage`, `/env`), while the community closed several high-visibility bugs including a GPT-5.4 model picker UI inconsistency and a costly premium request consumption loop. Context memory management remains the dominant theme across open issues, with users reporting aggressive auto-compaction on smaller-context models and requesting persistent token usage visibility.

---

## 2. Releases

### [v1.0.39](https://github.com/github/copilot-cli/releases/tag/v1.0.39) (2026-04-28)
| Change | Impact |
|--------|--------|
| **Background tasks via `ctrl+x → b`** | Move running tasks/shell commands to background without losing session state |
| **ACP session slash commands** | `/compact`, `/context`, `/usage`, `/env` give users direct control over session management and environment inspection |
| **Allow-all permission toggle for ACP clients** | Programmatic clients can now configure permission granularity via session config |
| **Improved `/remote` status output** | Actionable hints per connection state reduce debugging friction |
| **Enhanced `--resume` session picker** | Tab layout, status display, and progressive loading for faster session recovery |
| **Transient pipe error fix** | Child process std stability improvement |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#2725](https://github.com/github/copilot-cli/issues/2725) | **GPT-5.4 model picker hides "Extra High" effort** | UI inconsistency blocked users from accessing full model capability despite `xhigh` working at API level | 33 comments, 21 👍 — resolved quickly after visibility |
| [#2591](https://github.com/github/copilot-cli/issues/2591) | **Single session consumed 80-100 premium requests** | Critical cost bug: each tool invocation/thinking step billed as separate premium request | 32 comments, 13 👍 — high urgency, now closed |
| [#1973](https://github.com/github/copilot-cli/issues/1973) | **Tool whitelist for Interactive Mode** | `/allow-all` vs. per-approval binary is too coarse for safe read-only workflows (grep, git log) | 8 comments, 12 👍 — strong demand for middle-ground permission model |
| [#2205](https://github.com/github/copilot-cli/issues/2205) | **Mouse scroll broken in Terminator terminal** | Regression broke history navigation; scroll now jumps through inputs instead of output | 9 comments, 7 👍 — terminal compatibility concern |
| [#2052](https://github.com/github/copilot-cli/issues/2052) | **Persistent token/context usage indicator** | No visibility into context window consumption until compaction hits | 1 comment, 10 👍 — high vote count signals strong latent demand |
| [#2967](https://github.com/github/copilot-cli/issues/2967) | **Opus 4.7 small context triggers excessive compaction** | Model-specific context allocation appears inconsistent vs. GPT-5.4 under same subscription tier | 2 comments, 1 👍 — Pro+ user experience degradation |
| [#2720](https://github.com/github/copilot-cli/issues/2720) | **Speculative context / checkpoint / rewind for sub-agents** | Large verbatim reads permanently pollute context; systems programming/debugging needs reversible exploration | 2 comments, 1 👍 — advanced workflow request from Microsoft engineer |
| [#2282](https://github.com/github/copilot-cli/issues/2282) | **MCP server connection failures on Windows/winget install** | Default install path broken for `github-mcp-server`; onboarding friction for Windows users | 6 comments, 1 👍 — platform-specific reliability |
| [#3024](https://github.com/github/copilot-cli/issues/3024) | **Too many MCP servers → continuous compaction** | Degenerate state at 94k/128k context with no user warning; MCP scaling limit | New (0 comments) — emergent architectural concern |
| [#1464](https://github.com/github/copilot-cli/issues/1464) | **Skills beyond ~32 alphabetically unreachable** | Hard token budget cap silently drops skills with no prioritization logic | 4 comments, 5 👍 — skill ecosystem scalability blocked |

---

## 4. Key PR Progress

> **Note:** Only 2 PRs updated in the tracking window; both are minor documentation/infrastructure changes. No feature PRs active in this window.

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#3018](https://github.com/github/copilot-cli/pull/3018) | Update README.md | **Closed** | CCPA checklist PDF attachment (appears spam/low-value, quickly closed) |
| [#2970](https://github.com/github/copilot-cli/pull/2970) | Create devcontainer.json | **Closed** | Empty devcontainer configuration PR |

**Assessment:** No substantive PR activity in the last 24h. Feature development appears to be happening through internal branches or longer-lived PRs not captured in this window.

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Granular permission model** | #1973 (tool whitelist), #2174 (custom tool whitelist), #1091 (MCP CLI management) | High — binary allow-all/approve-each is insufficient |
| **Context memory transparency & control** | #1851 (show context window in `/model`), #2052 (persistent usage indicator), #1688 (configurable compaction threshold), #2720 (checkpoint/rewind) | Very high — dominant theme across 6+ issues |
| **Shell environment fidelity** | #1131 (load shell configs), #334 (shell completions), #411 (PowerShell 5.1 support) | Moderate — integration with existing developer environments |
| **MCP scalability & management** | #3024 (too many servers), #2282 (connection failures), #2630 (custom agent MCP in sub-agents), #1091 (CLI MCP add) | Growing — MCP adoption hitting architectural limits |
| **Multi-org/enterprise auth** | #2940 (org seat selection) | Emerging — enterprise complexity |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **Context window opacity & aggressive compaction** | 🔥🔥🔥 Very High | Critical | #2052, #1688, #2967, #893, #3024, #2720 — users flying blind until performance collapses |
| **Permission model too coarse** | 🔥🔥 High | High | #1973, #2174 — safe workflows penalized by all-or-nothing approval |
| **MCP reliability & scaling** | 🔥🔥 High | High | #2282, #3024, #2630, #1091 — connection failures, context bloat, missing CLI management |
| **Terminal/shell integration gaps** | 🔥🔥 High | Medium | #2205, #1131, #334, #2997 — scroll regressions, missing completions, bracketed paste forced |
| **Skill/plugin discoverability limits** | 🔥 Moderate | Medium | #1464, #2314, #3023 — hard caps on skills, truncation without prioritization, plugin extension loading broken |
| **Premium request cost surprises** | 🔥 Moderate | High | #2591 (resolved) — per-step billing model opaque to users |

---

*Digest compiled from github.com/github/copilot-cli activity 2026-04-28 to 2026-04-29.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-29

## 1. Today's Highlights

Version 1.40.0 shipped with OAuth recovery fixes and shell status bar improvements, while the community filed a burst of 11 fresh issues spanning MCP initialization failures, session persistence risks, and sub-agent timeouts. Notably, two long-standing requests—configurable approval timeouts (#1823) and granular auto-approval config (#1631)—finally landed in closed PRs, signaling maturing UX around agent autonomy controls.

---

## 2. Releases

**[v1.40.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.40.0)** — Latest release (2026-04-28)

| Change | Author | PR |
|--------|--------|-----|
| Shell prompt now displays active agent task count | @wbxl2000 | [#2041](https://github.com/MoonshotAI/kimi-cli/pull/2041) |
| OAuth flows recover gracefully after transient failures | @wbxl2000 | [#2060](https://github.com/MoonshotAI/kimi-cli/pull/2060) |
| `/usage` command rendering fix | — | — |

---

## 3. Hot Issues

| # | Title | Status | Why It Matters |
|---|-------|--------|--------------|
| [#2111](https://github.com/MoonshotAI/kimi-cli/issues/2111) | Too many open files crashes agent | **OPEN** | Critical stability issue on macOS with v1.40.0—suggests file descriptor leak in agent loop. Zero comments yet, needs triage. |
| [#2107](https://github.com/MoonshotAI/kimi-cli/issues/2107) | Window switching injects focus events into CLI input | **OPEN** | i3wm/Ubuntu terminal corruption bug; breaks interactive reliability for tiling WM users. |
| [#2106](https://github.com/MoonshotAI/kimi-cli/issues/2106) | UV-installed CLI takes >1 min to start on Windows 11 Enterprise | **OPEN** | Severe cold-start regression affecting enterprise Windows deployments; likely anti-malware or uv path resolution. |
| [#2105](https://github.com/MoonshotAI/kimi-cli/issues/2105) | Unified Auto Mode as first-class feature | **OPEN** | Consolidates scattered `--yolo`, `--auto-approve`, `--print` flags into coherent UX. 1 👍, resonates with power-user workflow demands. |
| [#2103](https://github.com/MoonshotAI/kimi-cli/issues/2103) | Sub-agent timeout too short for long tasks | **OPEN** | Hard timeout kills child agents mid-task on Windows; directly impacts coding plan reliability with K2.6. |
| [#2101](https://github.com/MoonshotAI/kimi-cli/issues/2101) | Web UI blocks session metadata edits during busy workers | **OPEN** | Race condition in `state.json` RMW paths risks data loss; @wbxl2000 self-filed after review finding. |
| [#2096](https://github.com/MoonshotAI/kimi-cli/issues/2096) | Long MCP tool list causes initialization error | **OPEN** | Scalability ceiling for MCP integrations—tool cardinality explosion breaks startup on macOS. |
| [#2093](https://github.com/MoonshotAI/kimi-cli/issues/2093) | Session persistence lacks `fsync`, risks data loss on crash | **OPEN** | Fundamental durability gap in `aiofiles` append path; `kill -9` or SSH drop loses in-flight session state. |
| [#2040](https://github.com/MoonshotAI/kimi-cli/issues/2040) | VS Code notification when approval pending | **OPEN** | Extension UX gap—missed approvals when VS Code minimized. 4 comments, active discussion. |
| [#1823](https://github.com/MoonshotAI/kimi-cli/issues/1823) | Configurable approval timeout (or unlimited) | **CLOSED** | Resolved by [#1837](https://github.com/MoonshotAI/kimi-cli/pull/1837) — `timeout_s=0` now waits indefinitely. Community validated with 5 comments, 2 👍. |

---

## 4. Key PR Progress

| # | Title | Status | Feature/Fix Summary |
|---|-------|--------|---------------------|
| [#2110](https://github.com/MoonshotAI/kimi-cli/pull/2110) | `/prompt-color` command for custom input echo | **OPEN** | Terminal theming: distinguishes user prompts from model replies via configurable color/bold—readability win for long sessions. |
| [#2109](https://github.com/MoonshotAI/kimi-cli/pull/2109) | Read-only mode (`--readonly`, `/readonly`, `/execute`) | **OPEN** | Safety mode: intercepts write tools, queues mutations for batch review. Enterprise/guardrails use case. |
| [#2097](https://github.com/MoonshotAI/kimi-cli/pull/2097) | `/reload-skills` without session restart | **OPEN** | Hot-reload skill directories; cuts iteration loop for skill developers. Soul-level slash command. |
| [#2095](https://github.com/MoonshotAI/kimi-cli/pull/2095) | Auto-approval with config granularity | **OPEN** | Per-tool-type approval rules in `config.toml`—addresses #1631. Live-tested by author. |
| [#2082](https://github.com/MoonshotAI/kimi-cli/pull/2082) | Expose runtime identity (PID + session ID) | **OPEN** | External observability: enables process managers and debuggers to map OS processes to Kimi sessions. |
| [#1960](https://github.com/MoonshotAI/kimi-cli/pull/1960) | RalphFlow architecture: ephemeral context + convergence detection | **OPEN** | Agent loop safety: isolated iteration contexts, infinite-loop prevention, multi-step workflow robustness. |
| [#2100](https://github.com/MoonshotAI/kimi-cli/pull/2100) | Fix JS MIME type on Windows (module-safe) | **OPEN** | Resolves [#2074](https://github.com/MoonshotAI/kimi-cli/issues/2074): Windows serves `.js` as `text/plain`, breaking Web UI startup. |
| [#2099](https://github.com/MoonshotAI/kimi-cli/pull/2099) | UTF-8 encoding for git file listing (`@file`) | **OPEN** | Fixes GBK-locale Windows crash when `@file` resolves paths with non-ASCII characters. |
| [#1837](https://github.com/MoonshotAI/kimi-cli/pull/1837) | Configurable approval timeout (`timeout_s=0` = unlimited) | **CLOSED** | Ships #1823. Eliminates 5-min hard cap; `None` falls back to internal default. |
| [#2045](https://github.com/MoonshotAI/kimi-cli/pull/2045) | Unblock `AskUserQuestion` in `--yolo`; add `afk` mode | **CLOSED** | Orthogonalizes auto-approve (`yolo`) from non-interactive (`afk`)—fixes semantic conflation causing missed user queries. |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Agent autonomy controls** | #2105 (unified auto mode), #2095 (config granularity), #1837 (timeout config), #2045 (yolo/afk split) | 🔥 High — core UX maturation theme |
| **Session durability & safety** | #2093 (`fsync`), #2101 (busy-session edits), #2109 (read-only mode) | 🔥 High — production-readiness push |
| **Observability & external integration** | #2082 (PID/session ID), #2040 (VS Code notifications), #2097 (skill hot-reload) | Medium — tooling ecosystem expansion |
| **Terminal customization** | #2110 (prompt color), #2107 (focus event handling) | Emerging — developer experience polish |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Affected Cohorts | Tracking |
|------------|-----------|------------------|----------|
| **Windows cold-start / performance** | 2 issues (#2106 slow start, #2099 encoding crash) | Windows + uv users, enterprise envs | #2106, #2099 |
| **File descriptor / resource exhaustion** | 2 issues (#2111 too many open files, #2096 MCP tool overflow) | macOS, heavy MCP/tool users | #2111, #2096 |
| **Approval UX gaps** | 3 issues + 3 PRs | Interactive users, CI/automation | #1823→#1837, #2040, #2045, #2095, #2105 |
| **Session state fragility** | 2 issues (#2093 fsync, #2101 busy edits) | Long-running sessions, remote/SSH users | #2093, #2101 |
| **Sub-agent / multi-turn reliability** | 2 issues (#2103 timeout, #2088 max_steps bump) | Coding plan users, K2.6 | #2103, #2088 |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity 2026-04-28.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-29

---

## 1. Today's Highlights

OpenCode shipped **v1.14.29** with critical fixes for tool schema sanitization and OAuth error handling, while the community grappled with a **persistent "Preparing write..." hang** affecting 58+ users and a newly resolved **storage persistence bug** that silently stopped disk writes since January. On the PR front, a major native LLM core foundation landed alongside a critical security fix for the default-allow permission model.

---

## 2. Releases

**[v1.14.29](https://github.com/anomalyco/opencode/releases/tag/v1.14.29)** — Patch release with five targeted fixes:
- **Session workspace paths** now use relative paths for better portability
- **Moonshot & Kimi tool schemas** sanitized to prevent rejected tool calls (addresses ongoing provider compatibility issues)
- **MCP & Provider OAuth errors** now match native API formats more closely
- **Shell cancellations** now properly terminate

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| **[#11112](https://github.com/anomalyco/opencode/issues/11112)** | **"Preparing write..." infinite hang** — Tool execution aborts repeatedly during file writes | **Most-commented open bug (58 comments)**; blocks core workflow for oh-my-opencode users | 27 👍, active troubleshooting since January; no definitive fix yet |
| **[#23887](https://github.com/anomalyco/opencode/issues/23887)** | **Kimi K2.6/K2.5 returns "Provider returned error"** via OpenCode Go | Regression affecting specific high-capability models; other models work fine under same subscription | 29 comments, 4 👍; pattern suggests provider-specific schema drift |
| **[#24569](https://github.com/anomalyco/opencode/issues/24569)** | **DeepSeek V4 Pro `reasoning_content` passthrough failure** (OpenRouter) | Closed — reasoning chains must be echoed back to API; breaks thinking mode | 26 comments, 10 👍; fixed in v1.14.27 |
| **[#24527](https://github.com/anomalyco/opencode/issues/24527)** | **claude-opus-4.7 via GitHub Copilot fails with `output_config` error** | Complete model unusability due to unsupported `output_config.effort` parameter | 23 comments; closed — Copilot silently changed supported params |
| **[#8501](https://github.com/anomalyco/opencode/issues/8501)** | **Feature: Expand pasted text summaries** (`[Pasted ~1 lines]`) | **Top-voted feature request (152 👍)**; paste compression hides editable content | 22 comments; long-standing UX friction |
| **[#24628](https://github.com/anomalyco/opencode/issues/24628)** | **[CRITICAL] Storage persistence bug: no disk writes since Jan 31** | **Data loss risk** — sessions processed but never persisted; `session.processor` reported success | 16 comments; closed after identification; users may have months of "ghost" sessions |
| **[#17516](https://github.com/anomalyco/opencode/issues/17516)** | **`opencode run` hangs after tool completion** — process never exits | Breaks CI/automation workflows; requires manual `kill` | 14 comments, 6 👍; reproducible with simple read-write prompts |
| **[#21010](https://github.com/anomalyco/opencode/issues/21010)** | **"Provider returned error" for Kimi** (post-1.3.13 upgrade) | Corroborates #23887 pattern; suggests broader Kimi provider regression | 13 comments; version-specific trigger identified |
| **[#22788](https://github.com/anomalyco/opencode/issues/22788)** | **Copilot: `output_config.effort: "max"` unsupported for claude-opus-4.6** | Precedent for #24527; Copilot changing effort levels without notice | 13 comments, 16 👍; closed with workaround |
| **[#23928](https://github.com/anomalyco/opencode/issues/23928)** | **`<`/`<=` operators cut off AI responses** | Parser-level bug causing truncated output; affects code generation reliability | 10 comments, 1 👍; root cause identified by user |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| **[#24712](https://github.com/anomalyco/opencode/pull/24712)** | **Native LLM Core Foundation** — Effect-based typed schemas, provider adapters, tool runtime; behind `OPENCODE_EXPERIMENTAL_LLM_NATIVE` flag | `[Vouched]` Major architecture investment for provider abstraction | Open |
| **[#20039](https://github.com/anomalyco/opencode/pull/20039)** | **Bash→Shell tool rename + shell-specific definitions** — pwsh/powershell/cmd/bash prompts for better agent compatibility | `[beta]` Breaking tool rename with legacy compatibility | Open |
| **[#24866](https://github.com/anomalyco/opencode/pull/24866)** | **Fix MCP OAuth callback server leak** — Stops HTTP server after auth completion/removal/finalization | Memory/connection leak fix | Open |
| **[#24205](https://github.com/anomalyco/opencode/pull/24205)** | **Authenticate `opencode run` in-process server requests** — Fixes `Session not found` when `OPENCODE_SERVER_PASSWORD` set | `[contributor]` Closes #24204 | Open |
| **[#24838](https://github.com/anomalyco/opencode/pull/24838)** / **[#24839](https://github.com/anomalyco/opencode/pull/24839)** | **[CRITICAL] Security: Fix default-allow permission model** — `"*": "allow"` auto-approved dangerous tools (bash, write, edit, webfetch, etc.) without confirmation | Both closed; critical CVE-class fix | Closed |
| **[#24512](https://github.com/anomalyco/opencode/pull/24512)** | **Refactor v2 session events as schemas** — Const schema definitions with `session.*` event types, sync metadata | `[Vouched]` Core protocol modernization | Open |
| **[#24853](https://github.com/anomalyco/opencode/pull/24853)** | **Default dev/beta builds to Effect HttpApi** — Runtime server selection with trace attribution; stable stays on Hono | `[Vouched]` Infrastructure migration | Open |
| **[#18767](https://github.com/anomalyco/opencode/pull/18767)** | **Mobile Touch Optimization** — Touch targets, swipe gestures, responsive layout while preserving desktop | Addresses #6536 mobile app demand | Open |
| **[#21722](https://github.com/anomalyco/opencode/pull/21722)** | **UX/Design overhaul** — Reduces borders, improves visual hierarchy vs. competitors | Closes #21395; large refactor | Open |
| **[#24861](https://github.com/anomalyco/opencode/pull/24861)** | **Fix bash memory leak** — Releases `web-tree-sitter` parse trees after permission scanning | Closes #21319; scoped cleanup with `Effect.acquireRelease` | Closed |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Mobile/Responsive Experience** | #6536 (37 👍), PR #18767 | Strong — dedicated PR in progress |
| **Plan/Question Mode (Claude Code parity)** | #3844 (124 👍) | High vote count, no active PR |
| **Paste Text Expandability** | #8501 (152 👍) | **Highest-voted open request** |
| **Configurable TUI Spacing/Themes** | #21395, #20230 (7 👍), PR #21722 | Active design overhaul PR |
| **Native LLM Core / Provider Abstraction** | PR #24712 | Architectural, behind feature flag |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Provider Schema Drift** | Kimi (#23887, #21010), Moonshot (#24158), Copilot effort levels (#22788, #24527), DeepSeek reasoning (#24569) | **Critical mass** — multiple providers breaking weekly |
| **Hang/Freeze States** | "Preparing write..." (#11112), `opencode run` hangs (#17516), `opencode -c` no-session hang (#23437) | Chronic; affects core UX |
| **Tool Execution Reliability** | Shell cancellations, memory leaks (#24861), pip3 auto-installs (#22100) | Recurring infrastructure debt |
| **Permission/Security Model** | Default-allow critical fix (#24838/24839), unexpected software installation | Recently patched but trust erosion |
| **Cross-Platform Binary Issues** | WSL1 exec format errors (#24081), Windows white screen (#17291), tmux crashes (#19651) | Platform coverage gaps |
| **Resource Exhaustion** | 63GiB memory usage (#22018), 50-100% idle CPU (#24393) | Performance at scale unaddressed |

---

*Digest compiled from github.com/anomalyco/opencode — 50 issues and 50 PRs active in last 24h.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-29

## Today's Highlights
Pi v0.70.6 shipped with Cloudflare Workers AI provider support, expanding the platform's multi-provider capabilities. The release also introduced automatic update checks against pi.dev, addressing a long-standing gap in version awareness. Meanwhile, the community closed a flurry of terminal-state and input-handling bugs, including fixes for Kitty keyboard protocol leakage and editor text retention on submit.

---

## Releases

**[v0.70.6](https://github.com/badlogic/pi-mono/releases/tag/v0.70.6)** — Latest patch release adding:
- Cloudflare Workers AI provider integration via `CLOUDFLARE_API_KEY`/`CLOUDFLARE_ACCOUNT_ID` environment variables ([#3851](https://github.com/badlogic/pi-mono/pull/3851))
- Built-in update check mechanism querying pi.dev for latest versions ([#3877](https://github.com/badlogic/pi-mono/pull/3877))

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#3208](https://github.com/badlogic/pi-mono/issues/3208) | **Custom Thinking Levels per Model** (Open) | Most-discussed open feature; would let models declare supported reasoning levels instead of hardcoded cycling, with extension API implications | 12 comments, 12 👍; author volunteering to implement pending design approval |
| [#2870](https://github.com/badlogic/pi-mono/issues/2870) | **Follow XDG Base Directory** (Closed) | Long-standing Linux hygiene issue; resolves config/state directory clutter | 11 comments, 10 👍; closed with standard-compliant implementation |
| [#2815](https://github.com/badlogic/pi-mono/issues/2815) | **Antigravity deprecation error** (Closed) | Broke all Antigravity model usage; Google Cloud Code Assist API rejected old UA | 10 comments; resolved by UA bump to 1.107.0 |
| [#3786](https://github.com/badlogic/pi-mono/issues/3786) | **`EBADF` in bash executor** (Closed) | Critical reliability bug affecting long-running sessions; file descriptor exhaustion | 5 comments; root-caused and patched |
| [#3882](https://github.com/badlogic/pi-mono/issues/3882) | **fd not found due to distro naming** (Closed) | Cross-distro compatibility gap; Linux package name variations caused unnecessary downloads | 5 comments; highlights packaging fragmentation pain |
| [#3808](https://github.com/badlogic/pi-mono/issues/3808) | **Anthropic subscription auth warning** (Closed) | UX friction for paid users; persistent warning cluttered interactive mode | 5 comments; made optional/removable |
| [#3884](https://github.com/badlogic/pi-mono/issues/3884) | **Shift+Enter sends message** (Closed) | Input handling regression on macOS; broke multi-line message composition | 4 comments; quickly patched in v0.70.6 cycle |
| [#3867](https://github.com/badlogic/pi-mono/issues/3867) | **SDK agent sessions don't execute tools** (Closed) | Regression in v0.68+ breaking coding-agent SDK workflows; tool calls rendered but not run | 3 comments; critical for programmatic use |
| [#3854](https://github.com/badlogic/pi-mono/issues/3854) | **Fireworks.ai 400 on tool requests** (Closed) | Provider compatibility; Fireworks anthropic-messages endpoint rejected Pi-specific tool fields | 3 comments; provider abstraction gap |
| [#3826](https://github.com/badlogic/pi-mono/issues/3826) | **TUI Markdown stack overflow** (Open) | Crash on common terminal output patterns (pytest/PDB `>` separators); affects stability | 2 comments, 1 👍; in progress |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#3927](https://github.com/badlogic/pi-mono/pull/3927) | **Clear editor text on submit** | Fixes editor retention bug when submitting from idle state; closes [#3926](https://github.com/badlogic/pi-mono/issues/3926) | ✅ Merged |
| [#3923](https://github.com/badlogic/pi-mono/pull/3923) | **Clear editor after normal submit** | Complementary fix for editor state cleanup in interactive TUI | ✅ Merged |
| [#3917](https://github.com/badlogic/pi-mono/pull/3917) | **Restore terminal state on unexpected exit** | Disables Kitty keyboard protocol on Ctrl+C during startup; fixes terminal garbling | ✅ Merged |
| [#3915](https://github.com/badlogic/pi-mono/pull/3915) | **Slash commands from inline autocomplete** | Cursor-CLI-style mid-text slash command execution; non-destructive commands preserve surrounding text | 🔄 Open |
| [#3911](https://github.com/badlogic/pi-mono/pull/3911) | **Handle duplicate session entries** | Prevents duplicate node chains in session tree when reopening persisted sessions; adds regression tests | 🔄 Open |
| [#3909](https://github.com/badlogic/pi-mono/pull/3909) | **Correct DeepSeek pricing** | Fixes 10x inflated `cacheRead` price for v4-flash; applies time-limited discount for v4-pro | ✅ Merged |
| [#3897](https://github.com/badlogic/pi-mono/pull/3897) / [#3899](https://github.com/badlogic/pi-mono/pull/3899) | **Update Antigravity UA to 1.107.0** | Resolves 503 API errors from Google Cloud Code Assist; duplicate PRs suggest urgent community need | ✅ Both merged |
| [#3887](https://github.com/badlogic/pi-mono/pull/3887) | **Image content support** | Adds `ImageContent` type, OpenRouter non-tool-call model support for Flux; enables agent image generation | 🔄 Open |
| [#3877](https://github.com/badlogic/pi-mono/pull/3877) | **Update check against pi.dev** | Version telemetry with platform-aware user agent; foundation for targeted update notifications | ✅ Merged |
| [#3868](https://github.com/badlogic/pi-mono/pull/3868) | **Migrate syntax highlighting to Shiki** | Replaces cli-highlight; adds theme-aware diff highlighting, Markdown code blocks, and bash/read/write support | 🔄 Open |

---

## Feature Request Trends

1. **Provider ecosystem expansion** — Cloudflare Workers AI landed; Xiaomi MiMo ([#3912](https://github.com/badlogic/pi-mono/issues/3912)) and image-generation pipelines ([#3887](https://github.com/badlogic/pi-mono/pull/3887)) are next. OpenRouter and non-standard API shapes remain active integration targets.

2. **Extension API surface growth** — Requests for viewport state exposure ([#3925](https://github.com/badlogic/pi-mono/issues/3925)), programmatic tool invocation ([#3893](https://github.com/badlogic/pi-mono/issues/3893)), and mid-session CWD switching ([#3921](https://github.com/badlogic/pi-mono/issues/3921)) show demand for deeper coding-agent embeddability.

3. **Thinking/reasoning configurability** — Custom thinking levels ([#3208](https://github.com/badlogic/pi-mono/issues/3208)) and cross-model reasoning content preservation ([#3924](https://github.com/badlogic/pi-mono/issues/3924)) indicate maturing needs around reasoning control.

4. **Structured output modes** — Compact JSON logging ([#3905](https://github.com/badlogic/pi-mono/issues/3905)) for headless/background operations; session metadata export hardening ([#3883](https://github.com/badlogic/pi-mono/pull/3883)).

---

## Developer Pain Points

| Category | Pattern | Evidence |
|----------|---------|----------|
| **Terminal state management** | Kitty protocol leaks, dead keys, Ctrl+C handling | [#3917](https://github.com/badlogic/pi-mono/pull/3917), [#3919](https://github.com/badlogic/pi-mono/issues/3919), [#2869](https://github.com/badlogic/pi-mono/issues/2869) — TUI robustness is recurring theme |
| **Input/editor state bugs** | Text retention, unexpected submission, focus handling | [#3926](https://github.com/badlogic/pi-mono/issues/3926), [#3927](https://github.com/badlogic/pi-mono/pull/3927), [#3884](https://github.com/badlogic/pi-mono/issues/3884) — interactive mode polish gaps |
| **Provider fragility** | Hardcoded UAs, pricing drift, API field incompatibilities | [#3897](https://github.com/badlogic/pi-mono/pull/3897), [#3909](https://github.com/badlogic/pi-mono/pull/3909), [#3854](https://github.com/badlogic/pi-mono/issues/3854) — maintenance burden of N providers |
| **Session integrity** | Duplicates, fork race conditions, persistence edge cases | [#3911](https://github.com/badlogic/pi-mono/pull/3911), [#3914](https://github.com/badlogic/pi-mono/issues/3914) — scaling session management complexity |
| **Documentation infrastructure** | Broken links in new pi.dev site, README staleness | [#3838](https://github.com/badlogic/pi-mono/issues/3838), [#3920](https://github.com/badlogic/pi-mono/issues/3920), [#3740](https://github.com/badlogic/pi-mono/pull/3740) — website migration teething |
| **System-wide installation** | Self-update failures, permission assumptions | [#3922](https://github.com/badlogic/pi-mono/issues/3922) — packaging beyond npm defaults |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-29

---

## 1. Today's Highlights

Qwen Code shipped **v0.15.4** with Catalan language support and VS Code companion fixes, while the TypeScript SDK reached **v0.1.7** bundling CLI v0.15.3. The community is actively debating a controversial [proposed free tier policy change](https://github.com/QwenLM/qwen-code/issues/3203) that would slash daily quotas from 1,000 to 100 requests, drawing 120 comments. Meanwhile, core contributors are pushing hard on performance and reliability with a new `FileReadCache` system and expanded TUI markdown rendering.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **[v0.15.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.4)** | Catalan language support (`#3643`); fix for VS Code companion slash command completion not triggering after message submit (`#3609`); CLI gradient rendering guard fix |
| **[v0.15.2-nightly.20260428](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.2-nightly.20260428.1befabe58)** | Same changes as v0.15.4 (nightly build) |
| **[sdk-typescript-v0.1.7](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.7)** | Bundles CLI v0.15.3; backfilled release for npm-published v0.1.5 after original workflow failure |
| **[sdk-typescript-v0.1.7-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.7-preview.0)** | Preview build with same CLI bundling |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| **[#3203 — Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203)** | Proposes drastic 10× quota cut (1,000 → 100/day) and complete free tier shutdown by 2026-06-01; affects all hobbyist and evaluation users | **120 comments** — highest engagement by far; likely heated pushback given zero 👍 count |
| **[#3579 — DeepSeek API 400 error: reasoning_content must be passed back](https://github.com/QwenLM/qwen-code/issues/3579)** | Critical for DeepSeek V4 users; breaks thinking mode conversations intermittently | Closed with fix; 9 comments show active debugging collaboration |
| **[#3652 — Internal error: input length range [1, 983616]](https://github.com/QwenLM/qwen-code/issues/3652)** | Hard ceiling on context window causing failures in long conversations; user explicitly notes friction of restarting chats | 5 comments; emerging pattern with similar reports |
| **[#3644 — Rewind fails when IDE integration enabled](https://github.com/QwenLM/qwen-code/issues/3644)** | Core UX feature broken by common config combination; workaround known but undocumented | 3 comments; user provided precise reproduction |
| **[#3595 — Local Qwen3.6-35B-A3B not recognizing images](https://github.com/QwenLM/qwen-code/issues/3595)** | Vision capability gap vs. competing CLI (iflow); configuration ambiguity for local deployers | 3 comments; includes detailed config screenshots |
| **[#3696 — Comprehensive hot-reload system](https://github.com/QwenLM/qwen-code/issues/3696)** | Tracking issue for runtime reload of skills, extensions, MCP, config without session restart | 2 comments; well-structured sub-task breakdown by active contributor |
| **[#3674 — Image input not recognized with local llama.cpp](https://github.com/QwenLM/qwen-code/issues/3674)** | Another vision-local deployment failure; suggests systematic OpenAI-compatible provider gap | 2 comments; reproducible with specific model setup |
| **[#3634 — Background task management roadmap](https://github.com/QwenLM/qwen-code/issues/3634)** | Architectural milestone tracking Phases A-C of background shell/task infrastructure | 2 comments; Phase C PR in review |
| **[#3715 — DeepSeek V4 Pro thinking mode fails with 400 error](https://github.com/QwenLM/qwen-code/issues/3715)** | Fresh report echoing #3579 pattern; suggests fix may not cover all DeepSeek variants | New (0 comments); needs triage |
| **[#3716 — ReadLines infinite loop](https://github.com/QwenLM/qwen-code/issues/3716)** | Tool execution bug causing repeated same-line reads; user already worked around with Sed/Get-Content | New (0 comments); title reflects user frustration |

---

## 4. Key PR Progress

| PR | Feature / Fix | Status |
|----|-------------|--------|
| **[#3717 — FileReadCache with short-circuit unchanged Reads](https://github.com/QwenLM/qwen-code/pull/3717)** | Session-scoped cache eliminates redundant full-file re-reads; keyed by device/inode/mtime for correctness | **Open** — performance optimization for long sessions |
| **[#3631 — Model cost estimation + priority fix](https://github.com/QwenLM/qwen-code/pull/3631)** | Adds `/stats model` pricing from user config; fixes model precedence bug | Open |
| **[#3604 — Parallelize skill loading + path-conditional activation](https://github.com/QwenLM/qwen-code/pull/3604)** | 3× nested `for-await` → `Promise.all`; skills activate based on file path patterns | Open — cold-start perf |
| **[#3714 — runtime.json sidecar for active sessions](https://github.com/QwenLM/qwen-code/pull/3714)** | PID→session mapping for external tools; ports kimi-cli approach | Open — ecosystem integration |
| **[#3687 — Wire background shells into task_stop tool](https://github.com/QwenLM/qwen-code/pull/3687)** | Unified cancellation: model stops background shells same as subagents, no raw `kill` needed | Open — safety/reliability |
| **[#3684 — Event monitor tool with throttled streaming (Phase C)](https://github.com/QwenLM/qwen-code/pull/3684)** | Long-running shell monitor with token-bucket throttling (burst=5, sustain=1/s); lifecycle registry | Open — CI red, in review |
| **[#3645 — Correct model precedence: argv > settings > env](https://github.com/QwenLM/qwen-code/pull/3645)** | Fixes `resolveCliGenerationConfig` auth env var overriding user settings | Open — correctness fix |
| **[#3680 — Expand TUI markdown rendering](https://github.com/QwenLM/qwen-code/pull/3680)** | Adds Mermaid diagrams, math, task lists, blockquotes to terminal output | Open — UX richness |
| **[#3698 — Auto compression before ACP model sends](https://github.com/QwenLM/qwen-code/pull/3698)** | Fixes #3652 context window crashes by running compression pre-send; handles swapped chat instances | Open — stability |
| **[#3710 — Customize banner area (logo, title, hide)](https://github.com/QwenLM/qwen-code/pull/3710)** | Three `ui.*` settings for brand chrome customization; operational lines preserved | Open — personalization |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Session lifecycle management** | Batch deletion (`#3706`), chat history deletion (`#1902` → closed), `/rewind` file rollback (`#3697`, `#3058`) | High — repeated requests for granular undo |
| **Hot-reload / runtime config** | Comprehensive system (`#3696`), skill loading parallelization (`#3604`) | Growing — contributor-led |
| **Background task infrastructure** | Roadmap (`#3634`), Phase C monitor (`#3684`), `task_stop` integration (`#3687`) | Active development |
| **Local deployment UX** | Image recognition failures (`#3595`, `#3674`), llama.cpp compatibility | Persistent — config/documentation gaps |
| **TUI robustness** | Flickering fixes (`#3663`, `#2924`), export navigation (`#3700`, `#3701`), banner customization (`#3710`) | Sustained polish effort |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Manifestations |
|------------|-----------|----------------|
| **DeepSeek API compatibility** | Very High | `reasoning_content` handling (`#3579`, `#3715`, `#3637`); context window mislabeling (`#3679`) — thinking mode is fragile across versions |
| **Context window limits** | High | Hard ceiling crashes (`#3652`, `#3698`); long conversation degradation (`#3702` cap request); compression triggers too late |
| **Local vision model setup** | Medium-High | Repeated "not recognizing images" with local Qwen3.6 + llama.cpp (`#3595`, `#3674`) — OpenAI-compatible provider path unclear |
| **TUI stability in agent mode** | Medium | Screen flicker (`#2924`, `#3663`), Caps Lock freeze (`#2401`), narrow output handling — agent-heavy workflows stress renderer |
| **IDE integration conflicts** | Medium | `/rewind` breaks with `ide.enabled` (`#3644`); IDE context injection architecture questioned (`#3712`) |
| **Authentication / billing edge cases** | Medium | Token-plan API key 401s (`#3704`), OAuth policy uncertainty (`#3203`) — enterprise/hobbyist friction |

---

*Digest compiled from github.com/QwenLM/qwen-code activity on 2026-04-28/29.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*