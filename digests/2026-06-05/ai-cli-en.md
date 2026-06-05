# AI CLI Tools Community Digest 2026-06-05

> Generated: 2026-06-05 00:40 UTC | Tools covered: 8

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report

**Date:** 2026-06-05 | **Analyst:** OWL

---

## 1. Ecosystem Overview

The AI CLI tool landscape in mid-2026 is defined by rapid, parallel iteration across at least seven major projects, all converging on a similar core loop — terminal-native agentic coding with tool use, multi-model provider support, and plugin extensibility. The competitive pressure is intense: features pioneered by one tool (Claude Code's Agent Teams, OpenCode's event-sourced sessions, Codex's desktop app) quickly become table-stakes expectations across the ecosystem. Windows and Linux platform support remains the most visible quality gap, with every tool fielding platform-specific bugs. Meanwhile, the community is pushing hard on **multi-agent orchestration**, **session/auth reliability**, and **cross-tool standardization** (e.g., AGENTS.md) as the next frontier.

---

## 2. Activity Comparison

| Tool | Open Issues (Tracked) | Hot Issues (Top 10) | Active PRs | Releases (24h) | Release Cadence |
|------|----------------------|---------------------|------------|-----------------|-----------------|
| **Claude Code** | 10 documented | High-severity: data loss, multi-agent bugs, billing | 6 open / 2 merged | **v2.1.163** (stable) | Frequent stable + managed settings |
| **OpenAI Codex** | 10 documented | WSL perf, macOS freezes, auth regressions | 10+ active | **v0.137.0** (stable) + 4 alphas | Rapid alpha cycle (4/day) |
| **Gemini CLI** | 10 documented | Subagent hangs, shell hangs, security hardening | 10 active | **v0.45.1** (patch) + nightly | Nightly + stable patch track |
| **GitHub Copilot CLI** | 10 documented | Clipboard regressions, auth, plugin hooks | 1 (spam) | **v1.0.60-0** | Regular stable |
| **Kimi Code CLI** | 7 documented | Auth 403s, session expiry, Linux scroll | 6 active | None | Slower release cadence |
| **OpenCode** | 10 documented | Memory leaks, read-before-edit, Alpine breakage | 6 open / 4 closed | None | Intermittent |
| **Pi** | 10 documented | Provider compat, Ollama crashes, large-session perf | 3 open / 7 merged | **v0.78.1** | Steady |
| **Qwen Code** | 10 documented | Auth loops, settings persistence, headless Linux | 10 active | **v0.17.1-nightly** | Nightly + feature PRs |

**Key takeaway:** Codex and Qwen Code show the highest raw PR velocity. Claude Code has the highest community engagement per issue (4,060 👍 on #6235). Copilot CLI's PR pipeline is notably thin — community energy is concentrated in issue reporting, not code contribution.

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities, signaling ecosystem-wide convergence:

| Shared Direction | Tools Affected | Specific Need |
|---|---|---|
| **Multi-agent orchestration & reliability** | Claude Code, Codex, Gemini, OpenCode, Qwen | Duplicate worker spawning, token waste from no-op acks, subagent hangs, infinite retry loops, working-tree conflicts in parallel sessions |
| **Cross-platform parity (Windows + Linux)** | All 7 tools | Windows: TUI rendering, file truncation, sandbox failures, path normalization, clipboard. Linux: musl/Alpine support, headless `xdg-open`, scroll hijacking, WSL filesystem latency |
| **Session persistence & crash recovery** | Claude Code, Codex, Kimi, OpenCode, Qwen | Orphaned tool calls on hard kills, session transcript loss on IDE restart, backward-incompatible session formats, stale auth on resume |
| **Auth/credential lifecycle robustness** | Codex, Gemini, Kimi, Copilot CLI, Qwen | OAuth token expiry, stale connector caching, mid-task logouts, 403 access-policy mismatches, BYOK retry failures |
| **Plugin/hook system maturity** | Claude Code, Copilot CLI, Pi, OpenCode, Qwen | Missing manifests, hook execution failures on Windows, deferred extension loading, credential-guard/pre-tool-use hooks, autocomplete integration |
| **Context window & cost management** | Claude Code, Copilot CLI, OpenCode, Qwen | Silent 1M-context billing, premature compaction, non-AI context compression, cross-session usage stats, token waste in multi-agent loops |
| **Standardized agent configuration** | Claude Code, Qwen, Gemini (implicit) | AGENTS.md adoption vs. tool-specific formats (CLAUDE.md), persistent rules/instructions across sessions, cross-project memory scoping |
| **Provider compatibility & model routing** | Pi, Codex, Qwen, Gemini | `maxTokens` parameter mapping, `developer` role handling, OpenRouter/proxy compatibility, Ollama non-standard responses, Bedrock integration |

---

## 4. Differentiation Analysis

| Tool | Primary Target User | Technical Approach | Key Differentiator |
|---|---|---|---|
| **Claude Code** | Enterprise teams, multi-agent power users | Tight Anthropic model integration; managed settings for org governance; CLAUDE.md project config | Agent Teams (multi-agent), managed version pinning, largest community engagement |
| **OpenAI Codex** | Developers wanting desktop + CLI hybrid | Rust-based TUI; desktop app (macOS/Windows) with sandboxed execution; rapid alpha iteration | Desktop app with sandboxing, enterprise credit-limit visibility, fastest release cadence |
| **Gemini CLI** | Google ecosystem users, security-conscious devs | Nightly + stable patch track; aggressive security hardening (SSRF, prompt injection); AST-aware tooling exploration | Security-first posture (IPI prevention, atomic OAuth writes), AST-aware code navigation R&D |
| **GitHub Copilot CLI** | GitHub-native teams, enterprise | Tight GitHub ecosystem integration; Mission Control session sharing; vim-style TUI | Mission Control integration, billing/credit visibility, GitHub-centric workflow |
| **Kimi Code CLI** | Moonshot AI / Kimi model users | Lightweight CLI; session replay robustness; cross-platform terminal UX | Session crash recovery (orphan tool call repair), undo/fork correctness, Pluviobyte's systematic UX hardening |
| **OpenCode** | Go subscribers, multi-provider power users | Event-sourced sessions; ACP protocol for editor integration (Zed); multi-provider from day one | Event-sourced session model, ACP-first architecture, DeepSeek price-pass-through advocacy |
| **Pi** | Multi-provider / extension developers | Provider-agnostic core; extension API with `ctx.mode` and system prompt options; keybinding unification | Broadest built-in provider coverage, richest extension context API, remote/SSH execution roadmap |
| **Qwen Code** | Alibaba Cloud / Qwen model users, ACP ecosystem | Daemon mode (`qwen serve`) as ACP host; streamable HTTP transport; cross-session state sync | Daemon/ACP maturity (Zed, JetBrains, Goose integration), interactive stats dashboard, user-level auto-memory |

---

## 5. Community Momentum & Maturity

**Highest Community Engagement (by reaction volume):**
1. **Claude Code** — #6235 at 4,060 👍 is an outlier; the community is large, vocal, and shaping the AGENTS.md standardization debate that affects the entire ecosystem.
2. **OpenCode** — Memory Megathread at 89 comments and 63 👍; DeepSeek pricing issue at 74 👍. Smaller but highly engaged community with strong contributor pipeline (Pluviobyte, kitlangton, arvsrn).
3. **OpenAI Codex** — Linux desktop app request at 474 👍; WSL performance cluster generating sustained discussion. High comment counts on desktop-app issues signal a large user base hitting platform walls.

**Fastest Iteration (by release/PR velocity):**
1. **OpenAI Codex** — 4 alpha releases in 24 hours + 10 active PRs. The team is batching fixes at remarkable speed.
2. **Qwen Code** — 10 active PRs including a massive daemon-mode merge (386 files, +115k LOC). Feature development is aggressive.
3. **Pi** — 7 merged PRs in the snapshot window, systematically addressing provider compat, keybinding, and session management.

**Maturity Concerns:**
- **GitHub Copilot CLI** — Only 1 PR (spam) updated in 24h; clipboard regressions dominating the issue tracker suggest QA gaps between releases.
- **Kimi Code CLI** — No releases in 24h; auth/403 issues spanning multiple versions indicate possible backend instability.
- **OpenCode** — No releases in 24h; Alpine/musl regression and memory leaks suggest testing coverage gaps for niche platforms.

---

## 6. Trend Signals

The following industry-level trends emerge from today's community data:

**1. Multi-Agent Is the New Battleground — But It's Not Ready for Production**
Every tool with agent teams or subagents (Claude Code, Gemini, OpenCode, Qwen) is fielding critical reliability bugs: duplicate workers, infinite retries, false success reports, and token-burning ack loops. Expect the next 3-6 months to focus on hardening orchestration primitives (circuit breakers, parent-child lifecycle management, working-tree isolation).

**2. AGENTS.md as the de Facto Standard**
Claude Code's #6235 (4,060 👍) is the single data point that should command executive attention. The community is demanding agent-agnostic project configuration. Tools that cling to proprietary formats (CLAUDE.md) risk friction in multi-agent teams. Watch for convergence around AGENTS.md or a similar standard.

**3. Windows Remains the Neglected Platform**
Across all 7 tools, Windows users bear a disproportionate bug burden: TUI rendering failures, file truncation, sandbox incompatibility, clipboard regressions, path normalization, and console handle loss. Any tool that achieves Windows parity first will capture a significant underserved segment.

**4. The Desktop App Is a Differentiator — and a Liability**
Codex's desktop app is its flagship feature but also its #1 source of bugs (WSL latency, macOS syspolicyd exhaustion, session regressions, Computer Use crashes). Pi and OpenCode are investing in remote/SSH execution environments as an alternative architecture. The "desktop vs. CLI vs. remote" question is unresolved.

**5. Security Hardening Is Accelerating**
Gemini CLI's SSRF fix, prompt injection prevention via truncation lockout, and atomic MCP OAuth writes — combined with OpenCode's `<system-reminder>` injection reports and Qwen's AES-128-ECB concerns — indicate the ecosystem is entering a sustained security-hardening phase. As these tools gain filesystem and shell access, the attack surface grows, and communities are responding.

**6. Provider Compatibility Is a Whack-a-Mole Problem**
Pi alone has 5+ distinct provider-compat bugs (`maxTokens` mapping, `developer` role, proxy routing, Ollama usage fields, Bedrock API paths). As the model provider landscape fragments (OpenAI, Anthropic, Google, Moonshot, Alibaba, DeepSeek, Fireworks, NVIDIA NIM, MiniMax...), every tool faces an exponentially growing integration surface. Expect investment in provider testing automation and compat layers.

**7. Cost Transparency Is Becoming a Requirement**
Billing surprises (Claude Code's silent 1M context charges, Copilot CLI's premature compaction wasting 82% of paid context, OpenCode's subagent cost explosions) are generating trust erosion. Tools that invest in real-time cost dashboards (Qwen's interactive `/stats`, Codex's credit-limit display) will have a retention advantage.

---

*Report generated by OWL · Data sources: GitHub repositories of all listed tools · 2026-06-05*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

## Claude Code Skills Community Highlights Report
**Repository:** `anthropics/skills`
**Report Date:** June 5, 2026

---

### 1. Top Skills Ranking (Most-Discussed PRs)

The following PRs are the most-discussed by the community, ranked by the comment and reaction volume. Note that the repository's default sort is by comment count, but data limitations may prevent an exact numerical ranking. The following list represents the most prominent and discussed PRs as of the report date.

| PR # | Skill Name | Author | Status | Description & Discussion Highlights |
| :--- | :--- | :--- | :--- | :--- |
| **#514** | `document-typography` | PGTBoos | 🟢 OPEN | Prevents common AI-generated doc issues (orphan words, widow paragraphs, misalignment). Widely discussed as a needed fix for document quality. |
| **#486** | `odt` | GitHubNewbie0 | 🟢 OPEN | A comprehensive skill for OpenDocument Format (.odt, .ods) files, including creation, filling, and conversion. |
| **#210** | `frontend-design` (Improvement) | justinwetch | 🟢 OPEN | Major revision to improve the skill's clarity and actionability for single-conversation use. |
| **#83** | `skill-quality-analyzer`, `skill-security-analyzer` | eovidiu | 🟢 OPEN | Meta-skills that provide automated quality and security analysis for other proposed skills. |
| **#1140** | `agent-creator` | SyedaQurratAI | 🟢 OPEN | A meta-skill for creating task-specific agent sets, with critical stability fixes for the evaluation framework. |
| **#1099** | `skill-creator` (Windows Fix) | joshuawowk | 🟢 OPEN | Fixes a critical bug where `run_eval.py` was unusable on Windows, causing incorrect skill evaluation results. |
| **#1050** | `skill-creator` (Windows Fix) | gstreet-ops | 🟢 OPEN | Another PR addressing Windows compatibility issues in the `skill-creator` scripts, specifically for subprocess calls. |
| **#723** | `testing-patterns` | 4444J99 | 🟢 OPEN | A comprehensive skill covering the full testing stack, from philosophy to unit and React component testing. |

---

### 2. Community Demand Trends (From Issues)

Analysis of the most-discussed issues reveals several key areas of community demand:

*   **Enterprise & Platform Integration:** High demand for skills that integrate with enterprise platforms like **ServiceNow** (PR #568) and **SAP** (PR #181), as well as workflow automation tools like **n8n** (PR #190).
*   **Skill Quality & Security:** The community is actively discussing the need for better tooling to evaluate and secure skills, as seen in the proposals for `skill-quality-analyzer` (PR #83) and Issue #492 regarding trust boundary vulnerabilities.
*   **Cross-Platform Compatibility:** A significant number of issues and PRs are focused on making the skill ecosystem more robust on **Windows** (PRs #1050, #1099, #1140).
*   **Core Workflow & Memory:** There is strong interest in skills that improve core agent capabilities, such as persistent memory (`shodh-memory`, PR #154) and structured thinking (`aurelion-kernel`, PR #444).
*   **Document Generation & Manipulation:** Skills for creating and manipulating documents in various formats (PDF, DOCX, ODT) are highly active, reflecting a major use case for Claude Code.

---

### 3. High-Potential Pending Skills

These are active PRs with significant community engagement that are strong candidates for being merged soon.

*   **`document-typography` (PR #514):** Addresses a universal pain point with AI-generated documents. Its practical utility makes it a high-priority candidate.
*   **`agent-creator` (PR #1140):** This meta-skill, along with its included stability fixes, addresses a key need for creating specialized sub-agents, a popular advanced use case.
*   **`skill-creator` Windows Fixes (PRs #1050, #1099):** These PRs fix critical bugs that block Windows users from contributing to the ecosystem. Their importance for community growth is high.
*   **`testing-patterns` (PR #723):** A comprehensive and well-structured skill that fills a gap in the official collection for software testing best practices.

---

### 4. Skills Ecosystem Insight

The community's most concentrated demand is for **robust, production-ready skills that enhance core developer workflows** (testing, documentation, enterprise integration) and **meta-tooling** to improve the quality, security, and cross-platform compatibility of the skill ecosystem itself.

---

# Claude Code Community Digest — 2026-06-05

---

## 1. Today's Highlights

Claude Code shipped **v2.1.163**, introducing managed version pinning (`requiredMinimumVersion` / `requiredMaximumVersion`) and a new `/plugin list` command — a clear signal that Anthropic is tightening enterprise governance and plugin management. On the community side, the **AGENTS.md standardization debate** (#6235) continues to dominate discussion with 308 comments and 4,060 👍, reflecting growing demand for agent-agnostic project configuration. Meanwhile, **Windows users remain disproportionately affected** by rendering, file-truncation, and MCP tooling bugs.

---

## 2. Releases

### v2.1.163
- **Managed version pinning**: New `requiredMinimumVersion` and `requiredMaximumVersion` managed settings. Claude Code will refuse to start if its version falls outside the allowed range and directs the user to an approved version — important for orgs that need to enforce version compliance.
- **`/plugin list` command**: Lists installed plugins with `--enabled`/`--disabled` filters, improving plugin discoverability and management.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#6235](https://github.com/anthropics/claude-code/issues/6235) | **Feature Request: Support AGENTS.md** | Codex, Amp, Cursor, and others are converging on `agents.md` as a universal agent config format. CLAUDE.md locks users into Claude-specific workflows, creating friction in multi-agent teams. | 308 comments, **4,060 👍** — the most-reacted issue in the repo by a wide margin. |
| [#53940](https://github.com/anthropics/claude-code/issues/53940) | **[BUG] Cowork Edit/Write tools silently truncate files via byte-conservation buffer cap** | Deterministic data-loss bug on Windows — files are silently truncated at all file sizes. Has repro steps. | 22 comments, 11 👍 — high severity, active investigation. |
| [#55586](https://github.com/anthropics/claude-code/issues/55586) | **[BUG] Agent Teams: Single teammate spawn creates 10–151 duplicate worker instances** | Spawning one teammate creates over a hundred duplicate workers, each consuming full context and actively editing files — a critical multi-agent reliability bug. | 12 comments, 1 👍 — recently updated, likely under active triage. |
| [#52472](https://github.com/anthropics/claude-code/issues/52472) | **[Bug] Weekly usage limit reset occurring before scheduled reset time** | Users losing remaining weekly quota unexpectedly — the reset window shifts from 7-day cycles to 5-day cycles, breaking usage planning. | 20 comments, 3 👍 — affects paid users directly. |
| [#54393](https://github.com/anthropics/claude-code/issues/54393) | **Post-mortem: 12 multi-agent coordination bugs in a single overnight cycle** | A comprehensive catalog of multi-agent coordination failures surfaced during autonomous overnight runs — filed as a generic reference for the community. | 11 comments — valuable for anyone building multi-agent workflows. |
| [#59750](https://github.com/anthropics/claude-code/issues/59750) | **[BUG] Claude agents TUI fully unresponsive on Windows Terminal (2.1.143)** | Complete TUI breakage on Windows Terminal — broken rendering and dead input loop. Affects all Windows Terminal users. | 5 comments, 5 👍 — small but unanimous concern. |
| [#47930](https://github.com/anthropics/claude-code/issues/47930) | **[BUG] Agent Teams lead session burns 13–22% of input tokens on no-op acks** | Idle notification loops and duplicate `task_assignment` echoes waste significant tokens — a cost and performance issue for Agent Teams users. | 4 comments, 6 👍 — high 👍-to-comment ratio signals broad silent impact. |
| [#64445](https://github.com/anthropics/claude-code/issues/64445) | **1M context credits consumed without user selecting 1M mode** | Users are being charged for 1M context windows they never opted into — a billing integrity issue. | 4 comments, 1 👍 — duplicates emerging (#65514). |
| [#52051](https://github.com/anthropics/claude-code/issues/52051) | **Seamless local multi-branching: parallel sessions conflict on working tree** | Running two Claude Code sessions on the same repo causes uncommitted edits to collide and branch switches to break each other — a workflow blocker for power users. | 2 comments, 1 👍 — under-discussed but fundamental for team workflows. |
| [#65516](https://github.com/anthropics/claude-code/issues/65516) | **MCP server tools not surfacing when claude.ai web connectors are also present** | Tools from `claude mcp add`-registered servers disappear from the conversational interface when web connectors coexist — a regression for MCP power users. | 2 comments — newly filed, needs triage. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#65344](https://github.com/anthropics/claude-code/pull/65344) | **fix(scripts): correct premature return in markStale + add --debug flag to auto-close-duplicates** | Fixes a pagination logic bug in `scripts/sweep.ts` where `markStale()` returned early, leaving stale issues unprocessed. Adds debug logging to the auto-close-duplicates script. | 🟡 Open |
| [#44742](https://github.com/anthropics/claude-code/pull/44742) | **fix: diagnostic tool for session persistence data loss (#12908)** | Addresses a critical VS Code extension bug where conversation transcripts aren't reliably persisted to disk — history disappears on IDE restart/update. Adds `scripts/diagnose-session-persistence.ts`. | 🔴 Closed (merged) |
| [#65286](https://github.com/anthropics/claude-code/pull/65286) | **fix(plugins): add missing plugin.json manifest for plugin-dev** | Adds the missing `.claude-plugin/plugin.json` manifest so the `plugin-dev` plugin can be discovered and installed through normal plugin mechanisms. | 🟡 Open |
| [#65314](https://github.com/anthropics/claude-code/pull/65314) | **scripts: add detect-theme-color-issues for light-theme color bugs** | Adds a triage script that clusters open issues reporting invisible/unreadable text on light terminal themes, linking them to the known `color7`/`color0` collision family. | 🟡 Open |
| [#65223](https://github.com/anthropics/claude-code/pull/65223) | **Spelling: Fix typo in security guidance plugin** | Minor fix: "reqwest" → "request" in the security guidance plugin. | 🔴 Closed (merged) |
| [#61691](https://github.com/anthropics/claude-code/pull/61691) | **Add diagnostic script for GitHub MCP connector showing 'Connected' but no tools** | Adds a PowerShell diagnostic/repair script for Windows users where the GitHub MCP connector shows "Connected" but exposes zero tools. Closes #61682. | 🟡 Open |
| [#62099](https://github.com/anthropics/claude-code/pull/62099) | **Add credential-guard plugin for hardcoded secret detection** | New plugin with a PreToolUse hook that scans `Write`, `Edit`, `MultiEdit`, and `Bash` tool calls for 20+ credential patterns before content is written — addresses #62095. | 🟡 Open |
| [#58673](https://github.com/anthropics/claude-code/pull/58673) | **s** | Placeholder/minimal PR — no meaningful description available. | 🟡 Open |

---

## 5. Feature Request Trends

1. **AGENTS.md / Multi-Agent Standardization** (#6235): The single most-supported request. Developers want Claude Code to adopt the emerging `agents.md` standard rather than CLAUDE.md, enabling seamless collaboration across different agent tools (Codex, Cursor, Amp, etc.).

2. **Multi-Agent Reliability & Coordination**: Multiple issues (#55586, #54393, #47930, #52051) point to demand for production-grade multi-agent orchestration — duplicate worker spawning, token waste from no-op acks, and working-tree conflicts during parallel sessions.

3. **Parallel Session / Multi-Branch Workflows** (#52051): Power users want to run multiple Claude Code sessions on the same repo without working-tree collisions — essentially git-worktree-level isolation.

4. **Plugin Ecosystem Maturity**: The new `/plugin list` command in v2.1.163, combined with PRs for plugin manifest fixes (#65286) and new plugins like credential-guard (#62099), shows the plugin system is a major investment area.

5. **Documentation Completeness**: A long tail of docs issues (filed primarily by contributor `coygeek`) covers gaps in headless mode, hooks, MCP, PowerShell, rate limiting, and Agent SDK error handling — suggesting the feature set has outpaced documentation.

---

## 6. Developer Pain Points

- **Windows is a second-class platform**: At least 4 distinct Windows-specific bugs are active — TUI rendering failure (#53940, #59750), file truncation (#53940), duplicate agent spawning (#55586), and GitHub MCP connector tool loss (#61682). Windows users are bearing a disproportionate burden.

- **Silent data loss**: The Cowork file truncation bug (#53940) and VS Code session persistence loss (#44742) both involve silent data loss — the most damaging category of bug for developer trust.

- **Billing surprises**: Two issues (#64445, #65514) report 1M context credits being consumed without explicit user opt-in, and another (#52472) reports weekly limits resetting early. Cost predictability is a growing concern.

- **Multi-agent is not yet production-ready**: Between duplicate workers (#55586), token-burning ack loops (#47930), and 12 coordination bugs in a single overnight run (#54393), the Agent Teams feature clearly needs hardening before reliable autonomous use.

- **Documentation debt**: ~15 open docs issues (many by a single dedicated contributor) indicate that features are shipping faster than they can be documented, leaving users to discover behavior through trial and error.

---

*Data source: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) | Digest generated 2026-06-05*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-05

---

## 1. Today's Highlights

The Codex project is in the middle of a rapid alpha cycle, with four `rust-v0.138.0-alpha` releases landing in the past 24 hours on top of the stable `v0.137.0`. The stable release brings meaningful TUI improvements (F13–F24 keybindings, paste in searchable menus, compact reasoning status) and enterprise credit-limit visibility. Meanwhile, the community is heavily focused on **Windows + WSL performance and stability**, with multiple high-engagement bugs around sandboxing, session management, and cross-filesystem latency.

---

## 2. Releases

### Stable: `rust-v0.137.0`
- **TUI enhancements**: F13–F24 keybinding support, paste in searchable menus, and a compact reasoning-only status/title item ([#25329](https://github.com/openai/codex/pull/25329), [#25400](https://github.com/openai/codex/pull/25400), [#25504](https://github.com/openai/codex/pull/25504)).
- **Enterprise/admin**: Monthly credit limits now displayed; cloud-managed config bundles can be applied, including EDU workspaces ([#24812](https://github.com/openai/codex/pull/24812)).

### Alpha: `rust-v0.138.0-alpha.1` through `alpha.4`
Four alpha releases shipped in the last 24 hours, indicating active iteration on the next cycle. Specific changelog details for each alpha are not yet published in the release notes, but the pace suggests the team is batching fixes rapidly ahead of the next stable cut.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| 1 | **[#11023](https://github.com/openai/codex/issues/11023) — Codex desktop app for Linux** | The single most-upvoted open issue (👍474, 89 comments). Linux users are locked out of the desktop app experience entirely. | Massive demand; users are workarounding by running the CLI, but the gap is felt. |
| 2 | **[#25715](https://github.com/openai/codex/issues/25715) — Codex App unusably slow with WSL as agent environment** | Routine turns take so long on Windows+WSL that the app is effectively broken for this large user segment. | 👍22, 19 comments — developers are frustrated because the same project is fast via CLI inside WSL. |
| 3 | **[#26149](https://github.com/openai/codex/issues/26149) — Repeated .codex/.tmp/plugins scans over /mnt/c causing severe latency** | Root-cause analysis shows the desktop app repeatedly scans plugin directories across the WSL/Windows filesystem boundary on every command invocation. | 👍9 — this is likely the underlying cause of #25715 and potentially other Windows perf issues. |
| 4 | **[#25882](https://github.com/openai/codex/issues/25882) — macOS app relaunches main binary in tight loop, exhausting syspolicyd** | A critical macOS bug where the app's own relaunch loop exhausts system file descriptors, freezing *all* app launches system-wide. | 👍9 — this is a showstopper-level bug for affected users. |
| 5 | **[#24675](https://github.com/openai/codex/issues/24675) — Stale app connector link after 401 reauth** | After a connector (e.g., Linear) returns 401, Codex Desktop caches the stale link indefinitely. Users must manually clear the `codex_apps` cache. | 👍13, 20 comments — auth/connector reliability is a recurring pain point. |
| 6 | **[#25391](https://github.com/openai/codex/issues/25391) — Windows Computer Use plugin fails to bootstrap (native pipe path unavailable)** | Computer Use on Windows is fundamentally broken — the native pipe path the plugin expects doesn't exist. | 👍1, 20 comments — Windows Computer Use users are completely blocked. |
| 7 | **[#26104](https://github.com/openai/codex/issues/26104) — Desktop Codex cannot open older chat sessions after recent update** | A regression in v26.601.x breaks backward compatibility with existing chat sessions on Windows. | 14 comments — data access regressions are high-severity for users with long histories. |
| 8 | **[#26363](https://github.com/openai/codex/issues/26363) — Custom .codex/agents no longer selectable in CLI v0.137.0** | A regression in the latest stable: custom agent configs in `.codex/agents/` are ignored, subagents spawn as generic and inherit the parent model. | 👍5 — this breaks advanced multi-agent workflows that power users depend on. |
| 9 | **[#25799](https://github.com/openai/codex/issues/25799) — Windows Codex app cannot launch sandboxed commands for WSL2 project** | Sandboxed execution fails entirely for WSL2-hosted projects on Windows, forcing users into full-access mode. | 👍4 — security-conscious users are impacted. |
| 10 | **[#26458](https://github.com/openai/codex/issues/26458) — Codex desktop repeatedly crashes when using Computer Use** | Fresh report (today) of repeated crashes on macOS when the Computer Use tool is active. | Early but aligns with a pattern of Computer Use stability issues across platforms. |

---

## 4. Key PR Progress

| # | PR | Description | Significance |
|---|----|-------------|-------------|
| 1 | **[#26307](https://github.com/openai/codex/pull/26307) — Respect Windows sandbox backend in exec policy** | Fixes exec-policy to recognize the new Windows sandbox backend, preventing benign commands (e.g., PowerShell `ls`) from being incorrectly blocked. | Directly addresses [#25799](https://github.com/openai/codex/issues/25799) and the broader Windows sandbox reliability story. |
| 2 | **[#26431](https://github.com/openai/codex/pull/26431) — Pull plugin service less frequently** | Replaces the startup shallow-clone strategy with a lighter sync to reduce download traffic to `github.com/openai/plugins` at global scale. | Addresses a scalability bottleneck — repeated full clones on every startup for millions of users is wasteful. |
| 3 | **[#26469](https://github.com/openai/codex/pull/26469) — Speed up TUI startup by reusing plugin discovery** | Eliminates redundant filesystem discovery and serial initialization during TUI startup by sharing plugin data across hooks/list, MCP init, and skill warmup. | Should meaningfully improve TUI cold-start time, especially for users with many plugins. |
| 4 | **[#26484](https://github.com/openai/codex/pull/26484) — Add turn profiling analytics** | Adds flat profiling fields to `codex_turn_event` to break down wall-clock time (pre-sampling, sampling, overhead) without changing tool execution behavior. | Gives the team data to systematically address latency complaints like those in [#25715](https://github.com/openai/codex/issues/25715). |
| 5 | **[#26482](https://github.com/openai/codex/pull/26482) — Refresh expired OAuth tokens before startup** | Fixes a regression from the RMCP 1.7 update where persisted OAuth tokens with known expiry were rehydrated without `expires_in`, causing stale tokens to be sent. | Directly relevant to auth issues like [#24675](https://github.com/openai/codex/issues/24675). |
| 6 | **[#26487](https://github.com/openai/codex/pull/26487) — Add Responses Lite request body support** | Adds `ModelInfo.use_responses_lite` catalog field, supports `reasoning.context = "all_turns"`, and disables parallel tool calls for Responses Lite models. | Expands model compatibility and reasoning transparency for the Responses Lite path. |
| 7 | **[#26450](https://github.com/openai/codex/pull/26450) / [#26449](https://github.com/openai/codex/pull/26449) — Remote control pairing status** | Adds transport + app-server RPC for checking remote-control pairing status by pairing code. | Improves the remote workflow UX — users can now programmatically check if a pairing code has been claimed. |
| 8 | **[#25955](https://github.com/openai/codex/pull/25955) — Emit sandbox outcome telemetry** | Introduces a dedicated `codex.sandbox_outcome` telemetry event for visibility into sandbox failures and escalation retries via OTEL. | Should help the team diagnose the class of Windows sandbox issues more quickly. |
| 9 | **[#25158](https://github.com/openai/codex/pull/25158) — Support more Vim normal commands** | Adds `gg`/`G`, `dG`, `yG`, `c{motion}`, and other Vim navigation/editing commands to the TUI composer buffer. | Quality-of-life improvement for Vim users in the TUI — a frequently-requested category. |
| 10 | **[#26486](https://github.com/openai/codex/pull/26486) — Route image edits through referenced file paths** | Image edits now use the exact file paths selected by the model rather than inferring from conversation history. | Fixes a correctness issue in the image editing workflow — edits should be deterministic. |

---

## 5. Feature Request Trends

1. **Linux desktop app** ([#11023](https://github.com/openai/codex/issues/11023)) — By far the most requested feature. The macOS and Windows desktop apps have had months of polish; Linux users want parity.

2. **Subagent observability and control** ([#16900](https://github.com/openai/codex/issues/16900)) — Users want to check agent status, implement parent-child wait mechanisms, and avoid redundant work when a child agent is still processing.

3. **Audio/read-aloud for assistant responses** ([#21645](https://github.com/openai/codex/issues/21645)) — A replay audio button similar to chatgpt.com, useful for long-running conversational coding sessions.

4. **TUI polish** ([#9252](https://github.com/openai/codex/issues/9252)) — Small but highly-upvoted: remove leading spaces from command suggestions, improve Vim support (partially addressed by [#25158](https://github.com/openai/codex/pull/25158)).

5. **"New Worktree" in "Continue in"** ([#20221](https://github.com/openai/codex/issues/20221)) — Users want the ability to spawn a new worktree directly from the session continuation menu.

---

## 6. Developer Pain Points

- **Windows + WSL is the #1 stability cluster.** Multiple interrelated issues ([#25715](https://github.com/openai/codex/issues/25715), [#26149](https://github.com/openai/codex/issues/26149), [#25799](https://github.com/openai/codex/issues/25799), [#25391](https://github.com/openai/codex/issues/25391)) paint a picture of the desktop app struggling with cross-filesystem operations, sandboxing, and plugin scanning on the Windows/WSL boundary. Several open PRs ([#26307](https://github.com/openai/codex/pull/26307), [#25955](https://github.com/openai/codex/pull/25955)) are actively addressing this.

- **Auth/connector caching is fragile.** Stale credentials after reauth ([#24675](https://github.com/openai/codex/issues/24675)) and OAuth token expiry ([#26482](https://github.com/openai/codex/pull/26482)) show that the credential lifecycle across connectors and sessions needs more robust cache invalidation.

- **Regressions in stable releases.** The v0.137.0 custom agents regression ([#26363](https://github.com/openai/codex/issues/26363)) and the v26.601.x session-opening regression ([#26104](https://github.com/openai/codex/issues/26104)) suggest the release process may need stronger backward-compatibility gating.

- **macOS system-wide freezes.** The syspolicyd file descriptor exhaustion bug ([#25882](https://github.com/openai/codex/issues/25882)) is particularly severe because it affects the entire system, not just Codex.

- **Computer Use reliability across platforms.** Both Windows ([#25391](https://github.com/openai/codex/issues/25391), [#25178](https://github.com/openai/codex/issues/25178)) and macOS ([#26458](https://github.com/openai/codex/issues/26458)) users report crashes and bootstrap failures with Computer Use, indicating the feature is still maturing on desktop.

---

*Data source: [github.com/openai/codex](https://github.com/openai/codex) · Digest generated 2026-06-05*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-05

---

## 1. Today's Highlights

Gemini CLI shipped a **nightly release (v0.47.0-nightly.20260604)** focused on CI infrastructure improvements, alongside a **stable patch (v0.45.1)** that cherry-picks a critical fix for Gemini 3.5 Flash access. The community remains highly engaged around **agent reliability** (subagent hangs, false success reporting) and **security hardening** (OAuth token safety, prompt injection prevention), with several high-priority PRs advancing toward merge.

---

## 2. Releases

| Version | Type | Key Changes |
|---|---|---|
| **v0.47.0-nightly.20260604.g4196596f7** | Nightly | CI optimizations: new PR size labeler, batch workflows, and `pull_request_target` trigger for fork PR write access. ([Release notes](https://github.com/google-gemini/gemini-cli/releases)) |
| **v0.45.1** | Stable Patch | Cherry-picks commit `665228e` to restore Gemini 3.5 Flash model access for users on the v0.45 stable track. ([PR #27667](https://github.com/google-gemini/gemini-cli/pull/27667)) |

---

## 3. Hot Issues

1. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs** (👍8, 7 comments)
   The generalist subagent hangs indefinitely on simple tasks like folder creation. Users report waiting over an hour before cancellation. Workaround: instruct the model not to use subagents. This is a **P1 bug** with the highest community reaction in the last 24h.

2. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent reports GOAL success after hitting MAX_TURNS** (👍2, 6 comments)
   The `codebase_investigator` subagent falsely reports `status: "success"` / `Termination Reason: "GOAL"` even when it hit the maximum turn limit without performing analysis. This masks interruptions and erodes trust in agent outputs.

3. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell command execution stuck on "Waiting input" after completion** (👍3, 4 comments)
   After executing simple CLI commands, Gemini hangs showing the shell as active and "Awaiting user input" even though the command has finished. Affects basic workflow reliability.

4. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — Robust component-level evaluations** (7 comments)
   EPIC tracking the expansion of behavioral eval tests (76 already created). Critical for ensuring agent quality and regression detection as the tool scales.

5. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST-aware file reads, search, and mapping** (👍1, 7 comments)
   Investigation into whether AST-aware tools can reduce misaligned file reads, cut token noise, and improve navigation precision. Could significantly boost agent efficiency.

6. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini does not use skills and sub-agents enough** (6 comments)
   Anecdotal but widely observed: the model rarely invokes custom skills or subagents autonomously, even when highly relevant. Only works when explicitly instructed.

7. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Deterministic redaction and Auto Memory logging reduction** (3 comments)
   Auto Memory sends transcript content to the extraction agent *before* redaction occurs, creating a security gap. Also requests reduced logging of sensitive data.

8. **[#26523](https://github.com/google-gemini/gemini-cli/issues/26523) — Surface or quarantine invalid Auto Memory inbox patches** (3 comments)
   Invalid memory patches are silently skipped, meaning malformed or malicious patches in the inbox are never surfaced to the user. A potential integrity issue.

9. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory retries low-signal sessions indefinitely** (3 comments)
   Sessions the extraction agent skips as "low-signal" are never marked as processed, causing them to be re-evaluated on every run — a resource leak.

10. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — 400 error with >128 tools** (3 comments)
    The agent encounters API errors when too many tools are in scope. Expected behavior: the agent should intelligently limit tool selection rather than failing.

---

## 4. Key PR Progress

| # | Title | Why It Matters |
|---|---|---|
| **[#27676](https://github.com/google-gemini/gemini-cli/pull/27676)** | Update max display count for Antigravity transition banner | Ensures deprecation/reroute banners remain visible to affected users instead of being hidden after 5 displays. |
| **[#27572](https://github.com/google-gemini/gemini-cli/pull/27572)** | Fix tmux false positive background detection | Fixes a regression where tmux (especially via mosh) causes incorrect light-terminal detection, triggering wrong theme switches. |
| **[#27664](https://github.com/google-gemini/gemini-cli/pull/27664)** | Write MCP OAuth tokens atomically | Prevents token file corruption during concurrent writes — a security-critical fix for MCP integrations. |
| **[#27463](https://github.com/google-gemini/gemini-cli/pull/27463)** | Preserve `refresh_token` in file-based `cacheCredentials` | Fixes persistent auth failures for users without encrypted file storage. Addresses #21691. |
| **[#27341](https://github.com/google-gemini/gemini-cli/pull/27341)** | Strip `functionCall.id` and `functionResponse.id` before API call | Fixes 400 "Unknown name 'id'" errors on turns following tool calls. Internal ACP IDs were leaking into API payloads. |
| **[#27473](https://github.com/google-gemini/gemini-cli/pull/27473)** | Resolve hostnames before private-IP check in `isBlockedHost` | Closes a security gap where hostnames resolving to private IPs bypassed SSRF protection. |
| **[#27568](https://github.com/google-gemini/gemini-cli/pull/27568)** | Fall back when ripgrep execution fails | Gracefully degrades to legacy `GrepTool` when `rg` is missing or exits with error, improving robustness. |
| **[#27502](https://github.com/google-gemini/gemini-cli/pull/27502)** | Resolve P1 crash during terminal resize (ioctl EBADF) | Fixes a race condition between shell exit and React resize callback that crashes the PTY. |
| **[#27472](https://github.com/google-gemini/gemini-cli/pull/27472)** | Enforce truncation lockout for tool confirmations to prevent IPI | **Critical security fix**: prevents Indirect Prompt Injection by requiring users to expand and view full command/diff content before approving. Addresses #23433. |
| **[#27474](https://github.com/google-gemini/gemini-cli/pull/27474)** | Guard `isFunctionCall`/`isFunctionResponse` against empty parts | Fixes a vacuous truth bug where messages with `parts: []` were incorrectly classified as function calls/responses. |

---

## 5. Feature Request Trends

- **AST-aware tooling**: Multiple issues (#22745, #22746, #22747) explore using AST-aware reads and searches to reduce token waste and improve code navigation precision. This is a recurring theme for agent efficiency.
- **Backgroundable local agents** (#22741): Users want to send subagents to the background with Ctrl+B, freeing the main thread during exploration or build tasks.
- **Agent self-awareness** (#21432): Requests for the agent to accurately know its own CLI flags, hotkeys, and configuration — acting as its own expert guide.
- **Remote agent auth & background operations** (#20303): EPIC for task-level auth, first-party agent support, and background processing in remote agent scenarios.
- **Browser agent resilience** (#22232): Automatic session takeover and lock recovery for persistent browser profiles.

---

## 6. Developer Pain Points

- **Subagent reliability is the #1 frustration**: Hangs (#21409), false success reporting (#22323), and underutilization of skills/subagents (#21968) dominate the issue tracker. Developers are losing trust in autonomous agent delegation.
- **Shell execution hangs** (#25166): Commands that have completed are still shown as "awaiting input," blocking workflows.
- **Auth token handling**: Multiple issues and PRs (#27463, #27664, #26525) reveal ongoing fragility in OAuth and credential storage — both for core auth and MCP integrations.
- **Security surface area**: Active work on SSRF bypass (#24733), prompt injection via truncated confirmations (#2472), and Auto Memory secret leakage (#26525) indicates the team is in a sustained security-hardening phase.
- **Tool scope management**: The 400-error at >128 tools (#24246) and the model's tendency to create temp scripts in random directories (#23571) suggest the tool invocation layer needs smarter scoping and sandboxing.
- **Terminal rendering edge cases**: CJK character spacing (#27505), tmux detection (#27572), and resize crashes (#27502) show that cross-platform terminal compatibility remains a persistent source of bugs.

---

*Data source: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · Digest generated 2026-06-05*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-05

---

## 1. Today's Highlights

GitHub Copilot CLI shipped **v1.0.60-0**, adding vim-style navigation in `/diff` view, a new `billing` help topic, Mission Control sharing status in `/session info`, and the `--resume` shorthand `-r`. The community remains **heavily focused on copy/paste and clipboard regressions** on Linux/Windows, with Issue #2082 leading all threads at 19 comments. Meanwhile, authentication edge cases and plugin hook failures are generating fresh churn.

---

## 2. Releases

**v1.0.60-0** (published within last 24h)

| Category | Detail |
|---|---|
| **New** | `billing` help topic with AI credit usage overview |
| **New** | Vim-style navigation keys `g`, `G`, `Ctrl+D`, `Ctrl+U` in `/diff` view |
| **New** | Mission Control sharing status indicator in `/session info` |
| **New** | `-r` shorthand for `--resume` flag |
| **In Progress** | LSP server config (description truncated — likely partial release) |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|---|---|---|
| **[#2082](https://github.com/github/copilot-cli/issues/2082)** | `Ctrl+Shift+C` no longer copies to clipboard on Linux | Breaks a deeply-ingrained Linux terminal convention; regressions from v1.0.4 onward | 👍 8 · 19 comments — most-discussed active issue |
| **[#3260](https://github.com/github/copilot-cli/issues/3260)** | Copy/Paste broken via SSH inside tmux on macOS/Linux → Windows Server 2025 | Cross-platform remote dev workflows are blocked since v1.0.47 | 6 comments — silent but critical for remote devs |
| **[#3666](https://github.com/github/copilot-cli/issues/3666)** 🔒 | Wrapped output removes spaces on copy (`var c` → `varc`) | Code pasted from CLI silently corrupts — a correctness risk | 3 comments, closed same-day; rapid triage |
| **[#3659](https://github.com/github/copilot-cli/issues/3659)** | Plugin `preToolUse` hooks fail on Windows; blocks all prompts | Prevents plugin ecosystem adoption on Windows | 3 comments; includes concrete debug logs |
| **[#2398](https://github.com/github/copilot-cli/issues/2398)** | Default config file for permissions | Permission prompts per session are a top friction point | 👍 10 — highest upvote count in the set |
| **[#3596](https://github.com/github/copilot-cli/issues/3596)** | Resumed sessions get "Not authenticated" on `/model` | Resumed sessions behave differently from fresh ones — a confusing regression | 👍 8 · 2 comments |
| **[#3636](https://github.com/github/copilot-cli/issues/3636)** | Voice mode fails on corporate VPN (model catalog unreachable) | Enterprise users locked out of voice features entirely | 👍 3 · 2 comments |
| **[#3677](https://github.com/github/copilot-cli/issues/3677)** | `claude-opus-4.7-1m-internal` triggers compaction at 18% capacity | Long-context models effectively broken; wastes 82% of paid context | 1 comment — likely under-reported |
| **[#3683](https://github.com/github/copilot-cli/issues/3683)** | PowerShell tool has no console handle since v1.0.57 | Breaks `Clear-Host`, MSAL interactive auth on Windows | 0 comments — filed today, early signal |
| **[#3679](https://github.com/github/copilot-cli/issues/3679)** | BYOK Azure OpenAI: 429 retries burn out in ~0.15s with no backoff | Self-hosted/air-gapped Azure deployments are effectively unusable under load | 0 comments — fresh report |

---

## 4. Key PR Progress

Only **1 PR** was updated in the last 24h:

| # | PR | Status | Notes |
|---|---|---|---|
| **[#3473](https://github.com/github/copilot-cli/pull/3473)** | "Update project name in README" | OPEN | ⚠️ **Spam** — body contains a Temu/GCash promotional link. No meaningful code change. Should be closed and reported. |

*No substantive PRs were updated today. The community's energy is concentrated in issue reporting and discussion.*

---

## 5. Feature Request Trends

Synthesized from all 35 issues (top 30 shown):

| Trend | Representative Issues | Signal |
|---|---|---|
| **Persistent permission/config defaults** | #2398 (👍10), #3343 | Developers want machine-level defaults and cross-project slash commands to avoid per-session setup |
| **BYOK & enterprise auth improvements** | #3682, #3679, #3636 | Short-lived credential refresh, retry backoff, and VPN-friendly catalog fetching are critical for enterprise adoption |
| **Agent orchestration controls** | #3678, #2923, #3547 | Users want effort/length config per agent, reliable sub-agent notifications, and model-specific tuning |
| **Session & worktree management** | #3675, #3676, #1559 | Configurable worktree paths, consistent naming, and cross-workspace session listing are recurring asks |
| **Localization** | #3681 | Non-English command descriptions requested (Spanish specifically) |
| **Secure credential storage** | #2783 | Plaintext OAuth tokens on disk is a security concern for MCP users |

---

## 6. Developer Pain Points

**🔴 Clipboard & Input (Highest Volume)**
Copy/paste regressions dominate the issue tracker. Three separate issues (#2082, #3260, #3666) cover Linux, cross-platform SSH, and output-wrapping scenarios. This is the single most visible quality-of-life regression.

**🟠 Authentication Inconsistencies**
Resumed sessions (#3596, #3680) silently lose auth context for model listing. BYOK users face opaque failures (#3679, #3682). The auth surface area is growing faster than its reliability.

**🟡 Plugin & Hook System Maturity**
`preToolUse` hooks fail on Windows (#3659), `postToolUse` hooks are skipped for `web_fetch` (#3665), and tilde expansion in hook `cwd` is broken (#3664). The plugin API is clearly in active use but not yet hardened.

**🟡 Context & Model Capacity**
Long-context models trigger compaction far too early (#3677), and sub-agents silently hang with certain model selections (#3547). Users paying for extended context are not getting what they pay for.

**🔵 Windows-Specific Gaps**
Console handle loss (#3683), hook execution failures (#3659), and path normalization bugs (#1409) suggest Windows receives less testing coverage than macOS/Linux.

---

*Data source: [github.com/github/copilot-cli](https://github.com/github/copilot-cli) · Digest generated 2026-06-05*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-05

---

## 1. Today's Highlights

No new releases landed in the last 24 hours, but issues and PRs were highly active. The community is currently wrestling with **authentication/session stability** (403 errors, mid-task logouts) and a **Linux terminal scroll-jump bug**, while several deep quality-of-life PRs from Pluviobyte continue to land or iterate toward merge — covering shell command display, undo logic, session replay robustness, and image format handling.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Hot Issues

### 🔴 #2425 — `[bug] 403 Kimi For Coding is currently only available for Coding Agents`
- **Author:** zhhongyr | 👍 3 | 10 comments
- **Why it matters:** Version 0..9.0 users on Mac get a blanket 403 on every message when using `kimi-for-coding`. This is the highest-traffic issue today and signals a possible backend access-policy mismatch affecting a subset of CLI users.
- **Link:** [Issue #2425](https://github.com/MoonshotAI/kimi-cli/issues/2425)

### 🔴 #2427 — `[bug] Getting "Kimi For Coding is currently only available for Coding Agents"`
- **Author:** fzyz999 | 👍 0 | 2 comments
- **Why it matters:** The same 403 pattern on the latest 146.0, but via OAuth `/login` on Debian WSL2 with model `k2.6`. Suggests the issue is **not version-specific** — it likely spans auth providers and model selections.
- **Link:** [Issue #2427](https://github.com/MoonshotAI/kimi-cli/issues/2427)

### 🟡 #2422 — `[bug] Terminal auto-scrolls to bottom after conversation completes`
- **Author:** venus0707 | 👍 0 | 1 comment
- **Why it matters:** On Linux, scrolling up to read history snaps back to the bottom ~every second, making long outputs unreadable. A downstream fix is already in PR #2429 (see below).
- **Link:** [Issue #2422](https://github.com/MoonshotAI/kimi-cli/issues/2422)

### 🟡 #2430 — `[bug] Auto logged out in the middle of a task`
- **Author:** TheKevinWang | 👍 0 | 0 comments
- **Why it matters:** Users on Windows 10 with k2.6 report session expiry mid-task. Coupled with #2425/#2427, **session/auth reliability** is a clear pain cluster today.
- **Link:** [Issue #2430](https://github.com/MoonshotAI/kimi-cli/issues/2430)

### 🟡 #2428 — `[bug] '/title' not available in VS Code Kimi Code extension`
- **Author:** Seuchezz | 👍 0 | 0 comments
- **Why it matters:** The `/title` slash command is missing from the VS Code extension surface on Linux. Indicates a gap between CLI and IDE-extension feature parity.
- **Link:** [Issue #2428](https://github.com/MoonshotAI/kimi-cli/issues/2428)

### 🟡 #2424 — `[bug] "engine overloaded" with k2.5`
- **Author:** iaindooley | 👍 0 | 0 comments
- **Why it matters:** Capacity-related errors with k2.5 may indicate backend routing or model-availability issues rippling through the CLI.
- **Link:** [Issue #2424](https://github.com/MoonshotAI/kimi-cli/issues/2424)

### 🟡 #2423 — `[bug] Latest versions are far slower`
- **Author:** lnsy-dev | 👍 0 | 0 comments
- **Why it matters:** Reports slowness on ARM64 (aarch64 Linux) with k2.6. Performance regressions on non-x86 architectures deserve attention as the user base diversifies.
- **Link:** [Issue #2423](https://github.com/MoonshotAI/kimi-cli/issues/2423)

---

## 4. Key PR Progress

| PR | Author | What it fixes | Status |
|---|---|---|---|
| **#2429** | GH-ytym | Prevents idle cursor blink from forcing scroll-to-bottom in Linux terminals. Resolves #2422. | Open |
| **#2388** | Pluviobyte | Persists pasted-text placeholders (`[Pasted text #1]`) across prompt/session recall instead of losing them. Resolves #1946. | Open |
| **#2387** | Pluviobyte | Preserves full shell command headlines in tool output instead of truncating them to 50 chars. Resolves #2142. | Open |
| **#2386** | Pluviobyte | Maps `/undo` wire turns to correct context turns, fixing undo/fork when local slash commands don't write to `context.jsonl`. Resolves #1974, #2049. | Open |
| **#2383** | Pluviobyte | Repairs orphan `tool_calls` when replaying history after a mid-turn crash (OOM, `kill -9`, terminal close). Resolves #2336. | Open |
| **#2382** | Pluviobyte | Converts unsupported image formats (e.g., `.ico`) to PNG in `ReadMediaFile` so they pass provider validation. Resolves #2017. | Open |

**Takeaway:** Pluviobyte is systematically hardening session reliability, undo correctness, and cross-platform UX. PR #2429 is the newest and directly addresses today's most-reported UI bug.

---

## 5. Feature Request Trends

No explicit feature requests appeared in the last 24 hours. However, the issues reveal **implicit demand** for:

1. **Better auth/session resilience** — Users expect transparent token refresh and clear error messaging when sessions expire or access is denied.
2. **IDE-CLI feature parity** — The `/title` gap in VS Code (#2428) signals that extension users want the same slash commands available in the terminal.
3. **Performance transparency** — ARM64 slowdown reports (#2423) suggest demand for platform-specific optimization or at minimum documented performance expectations.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|---|---|
| **Authentication instability** | 403 errors across versions and platforms (#2425, #2427); mid-task logouts (#2430) |
| **Linux terminal UX** | Auto-scroll hijacking (#2422) — actively being fixed in PR #2429 |
| **Session crash recovery** | Orphaned tool calls on hard kills (#2336 → PR #2383) |
| **Undo/fork correctness** | Slash-command turns breaking undo (#1974, #2049 → PR #2386) |
| **Cross-platform performance** | ARM64 slowdowns (#2423) |
| **IDE extension gaps** | Missing `/title` in VS Code (#2428) |

**Bottom line:** The community's biggest frustrations today center on **session/auth reliability** and **cross-platform polish**. The good news is that the PR pipeline is actively addressing several of these — particularly the Linux scroll bug and session crash recovery.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-05

---

## 1. Today's Highlights

No new releases landed in the last 24 hours, but the issue tracker saw a surge of activity — particularly a coordinated push by a single contributor (LifetimeVip) flagging systemic "read-before-edit" enforcement gaps, prompt injection via `<system-reminder>` tags, and compaction/context-loss bugs that degrade code quality over long sessions. The most active discussion remains the **Memory Megathread** (#20695), now at 89 comments, and a recently closed feature request sparked heated debate about adjusting Go subscription limits after DeepSeek V4 Pro's permanent 75% price reduction (#28846).

---

## 2. Releases

**None.** No new versions published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| 1 | **[#20695](https://github.com/anomalyco/opencode/issues/20695) — Memory Megathread** | Centralizes scattered memory-leak reports; maintainers explicitly asked for heap-snapshot data, not LLM-generated guesses. | 89 comments, 63 👍 — the go-to thread for diagnosing runaway memory usage. |
| 2 | **[#28846](https://github.com/anomalyco/opencode/issues/28846) — Adjust Go usage limits after DeepSeek V4 Pro price reduction** | DeepSeek V4 Pro's permanent 75% API price cut should translate into higher request quotas for Go subscribers. | 68 comments, 74 👍 — closed, but pricing-policy friction is high. |
| 3 | **[#4695](https://github.com/anomalyco/opencode/issues/4695) — Speech-to-Text Voice Input** | First-party voice input would make OpenCode accessible while away from a keyboard (e.g., driving, walking). | 33 comments, 162 👍 — the top-liked feature request in the dataset. Closed as completed or shelved. |
| 4 | **[#27589](https://github.com/anomalyco/opencode/issues/27589) — TUI fails on Alpine Linux (musl) in 1.14.50** | `getcontext` symbol missing breaks the TUI entirely for musl-based distros; regression from 1.14.48. | 27 comments, 12 👍 — affects a niche but vocal segment. |
| 5 | **[#30811](https://github.com/anomalyco/opencode/issues/30811) — Code quality degrades as conversations get longer** | Connects five sub-problems: compaction losing context, no automatic post-edit verification, and read-before-edit bypasses. | 6 comments, 0 👍 — newly filed; broad implications for long-session reliability. |
| 6 | **[#1168](https://github.com/anomalyco/opencode/issues/1168) — Make links clickable (Ctrl+Left Click)** | Basic UX parity with other editors; low effort, high usability payoff. | 6 comments, 91 👍 — extremely popular, still open 9+ months later. |
| 7 | **[#17169](https://github.com/anomalyco/opencode/issues/17169) — Subagent infinite retry loop on tool failure** | Failed edit/write operations cause subagents to retry indefinitely → $15+ API costs per invocation. | 4 comments, 0 👍 — serious cost-of-use concern. |
| 8 | **[#27530](https://github.com/anomalyco/opencode/issues/27530) — Config provider unexpected server errors** | 4 out of 5 startup requests fail with generic server errors, blocking normal operation. | 26 comments, 16 👍 — high-friction bug affecting multiple users. |
| 9 | **[#29099](https://github.com/anomalyco/opencode/issues/29099) — TUI system notifications don't fire under zellij/tmux** | Desktop notifications silently drop inside terminal multiplexers, even when `notify-send` works. | 6 comments, 1 👍 — affects power-user workflow. |
| 10 | **[#6273](https://github.com/anomalyco/opencode/issues/6273) — Vue syntax highlighting doesn't work** | Vue is LSP-supported, so syntax highlighting should work out of the box — a good-first-issue with PR potential. | 7 comments, 5 👍 — closed, but may need revisiting. |

---

## 4. Key PR Progress

| # | PR | Author | What It Does |
|---|----|--------|-------------|
| 1 | **[#30824](https://github.com/anomalyco/opencode/pull/30824)** | arvsrn | **feat(app): color themes** — Introduces `resolveThemeVariantV2` to generate v2 semantic design tokens from theme palettes at runtime; adds static v2 token mapping. |
| 2 | **[#30419](https://github.com/anomalyco/opencode/pull/30419)** | adamdotdevin | **feat(stats): refresh stats routes and homepage** — Updates stats app shell, homepage, model-detail routes, and layout. *(Closed)* |
| 3 | **[#30477](https://github.com/anomalyco/opencode/pull/30477)** | delta9000 | **feat: add `"reasoning"` as interleaved field option for vLLM providers** — Expands model.interleaved.field to accept `"reasoning"` alongside existing `reasoning_content`/`thinking` values. |
| 4 | **[#30785](https://github.com/anomalyco/opencode/pull/30785)** | kitlangton | **refactor(core): make v2 session inputs event-sourced** — Prompts are now admitted via events so they survive restarts and can be reconstructed from synchronized session history. *(Closed)* |
| 5 | **[#30488](https://github.com/anomalyco/opencode/pull/30488)** | kitlangton | **feat(tui): allow backgrounding synchronous subagents** — Adds `POST /experimental/session/:id/background` and `ctrl+b background` hint so synchronous task subagents can detach without restarting. |
| 6 | **[#30820](https://github.com/anomalyco/opencode/pull/30820)** | PershingSquare | **feat(provider): support Bedrock OpenAI model URLs** — Enables Amazon Bedrock provider URL variable substitution for Mantle OpenAI model entries. |
| 7 | **[#30822](https://github.com/anomalyco/opencode/pull/30822)** | Hona | **feat(desktop): surface local server startup failures** — Replaces an infinite loading spinner with an actionable error page when the desktop app's local server can't start. *(Closed)* |
| 8 | **[#30821](https://github.com/anomalyco/opencode/pull/30821)** | Northern-Lights | **feat: OPENCODE_CONFIG_DIRS (plural)** — Introduces a colon-separated `OPENCODE_CONFIG_DIRS` env var for multiple config override directories. |
| 9 | **[#7763](https://github.com/anomalyco/opencode/pull/7763)** | IdrisGit | **fix: add persistent cost to prevent under-reporting spent value** — Adds per-session persisted cost tracking so long sessions (>100 messages) no longer under-report spend. |
| 10 | **[#11303](https://github.com/anomalyco/opencode/pull/11303)** | validatedev | **feat: let ACP client expose input/output properly** — Fixes ACP client tool-call rendering so editors like Zed can display command-execution UI correctly. |

---

## 5. Feature Request Trends

1. **Voice / Speech-to-Text Input** — Strong demand (#4695, 162 👍). Accessibility and multitasking workflows.
2. **Session Management** — `–resume <session name>` (#18569), clickable links (#1168, 91 👍), and persistent web sessions (#16562) all point to a need for deeper session lifecycle control.
3. **Amazon Bedrock / New Provider Support** — FastRouter (#25706), Bedrock GPT-5.4/5.5 (#30819), and Bedrock OpenAI-compatible URLs (#30820) show the community racing to integrate newly available model endpoints.
4. **Pricing / Usage Limit Rebalancing** — DeepSeek V4 Pro's 75% price drop exposed that subscription quotas haven't kept pace (#28846, #29115).
5. **Quality-of-Life UX** — Color themes (#30824), `copy_on_select` config (#25700), and better error surfacing (#30822) are recurring polish requests.

---

## 6. Developer Pain Points

1. **Memory Leaks & Long-Session Degradation** — The Memory Megathread (#20695, 89 comments) is the most active issue; users feel they're flying blind without heap diagnostics. Compaction (#30805, #30811) makes the problem worse by throwing away context.

2. **Read-Before-Edit Not Enforced** — A cluster of new issues (#30791, #30793, #30794, #30795, #30811) reveals that `write`, `bash`, and plugin tools can all bypass the read-before-edit contract. The AI can (and does) edit files it never read, producing stale mutations.

3. **Subagent Cost Explosions** — Infinite retry loops on tool failure (#17169) have cost some users $15+ per subagent invocation. No circuit-breaker exists yet.

4. **Alpine/musl Regression** — The `getcontext` breakage in v1.14.50 (#27589) left Alpine Linux users completely locked out of the TUI with no workaround documented.

5. **Config Provider Errors Block Startup** — Generic "Unexpected server errors" on 4 of 5 startup requests (#27530, 26 comments) with insufficient logging to self-diagnose.

6. **Prompt Injection via System Tags** — `<system-reminder>` tags injected through file content (#30799) can override AI behavior since the system prompt treats those tags as authoritative. No sanitization layer exists.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-05

---

## 1. Today's Highlights

Pi shipped **v0.78.1** with expanded built-in provider coverage (Ant Ling, NVIDIA NIM, MiniMax-M3) and a richer extension context exposing `ctx.mode` and `ctx.getSystemPromptOptions()`. The community remains highly active around **provider compatibility bugs** — particularly around `maxTokens` mapping, `developer` role handling, and Ollama usage-field crashes — while several quality-of-life PRs landed for session model persistence, keybinding unification, and first-run terminal theme detection.

---

## 2. Releases

- **v0.78.1** — [Release notes](https://github.com/badlogic/pi-mono/releases)
  - **More built-in provider coverage**: Added Ant Ling and NVIDIA NIM provider setup, plus MiniMax-M3 support for direct MiniMax providers. See [Providers](docs/providers.md).
  - **Richer extension context**: Extensions can now use `ctx.mode` and `ctx.getSystemPromptOptions()` for deeper integration with the agent runtime.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#4945](https://github.com/badlogic/pi-mono/issues/4945) | `openai-codex` / `gpt-5.5` hangs on `Working...` with zero-usage aborted turns | Affects users of OpenAI's latest models in interactive TUI; requires manual Escape to recover, breaking workflow | 51 comments, 👍27 — the most-discussed issue; clearly a widespread pain point |
| [#5386](https://github.com/badlogic/pi-mono/issues/5386) | Crash in `getSessionStats()` when assistant message has no usage field (Ollama) | Ollama-backed models that omit token usage data crash the session stats path | 4 comments; straightforward fix needed, affects all Ollama users |
| [#5323](https://github.com/badlogic/pi-mono/issues/5323) | Improve Vertex + GCP metadata server support | Pi's Vertex auth check relies on synchronous `existsSync` for `GOOGLE_APPLICATION_CREDENTIALS`, missing metadata server-based auth on GCP compute | 5 comments; important for cloud-deployed Pi instances |
| [#5363](https://github.com/badlogic/pi-mono/issues/5363) | Add `amazon-bedrock-mantle` provider for OpenAI-compatible models | Bedrock Mantle models use a different API path incompatible with the existing Converse-based `amazon-bedrock` provider | 3 comments, 👍1; expands AWS Bedrock coverage |
| [#5331](https://github.com/badlogic/pi-mono/issues/5331) | `options.maxTokens` maps to wrong API parameter for opencode-go provider | `maxTokens` is silently ignored because pi sends `max_completion_tokens` instead of `max_tokens` | 3 comments; directly impacts token budget control |
| [#5350](https://github.com/badlogic/pi-mono/issues/5350) | Custom tool operations receive host-OS-resolved paths (Windows host breaks Linux remote file tools) | Path resolution leaks the host OS convention into remote SSH tool invocations, breaking cross-platform setups | 2 comments; critical for remote-container/SSH workflows |
| [#5188](https://github.com/badlogic/pi-mono/issues/5188) | Shift+Enter submits instead of creating new line | Keybinding customization for `tui.input.newLine` doesn't work for Shift+Enter despite being configured | 4 comments, 👍1; basic UX expectation broken |
| [#5373](https://github.com/badlogic/pi-mono/issues/5373) | High idle CPU and syscall rate on large sessions (150k+ tokens) | ~24% CPU at idle with no generation activity; `strace` shows massive syscall overhead | 3 comments; performance regression for long-running sessions |
| [#5341](https://github.com/badlogic/pi-mono/issues/5341) | Port coding-agent to ExecutionEnv + remote containers over SSH | Would enable running Pi sessions on remote hosts with all fs/spawn operations routed over SSH | 4 comments; significant architecture extension |
| [#5384](https://github.com/badlogic/pi-mono/issues/5384) | DeepSeek via OpenRouter still sends `role: "developer"` after #1048 fix | `detectCompat()` only matches the direct `api.deepseek.com` provider ID, not proxied routes | 2 comments; proxy users still blocked |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#5281](https://github.com/badlogic/pi-mono/pull/5281) | **feat(coding-agent): Support keybindings for all commands** | Unifies built-in and extension command handling; adds `cmd.<name>` keybinding convention so any command can be bound to a key | ✅ Closed |
| [#5412](https://github.com/badlogic/pi-mono/pull/5412) | **fix(coding-agent): alias firepass model references** | Normalizes `firepass/...` model references to canonical `fireworks/...` provider; fixes saved/default model lookup through alias path | ✅ Closed |
| [#5385](https://github.com/badlogic/pi-mono/pull/5385) | **feat(coding-agent): detect first-run terminal theme** | Queries terminal via OSC to detect light/dark mode on first run, setting the initial Pi theme to match | 🟡 Open |
| [#5400](https://github.com/badlogic/pi-mono/pull/5400) | **fix(ai): map maxTokens to max_tokens for opencode providers** | Fixes `maxTokensField` resolution for opencode/opencode-go so `maxTokens` is correctly sent as `max_tokens`. Fixes #5331 | ✅ Closed |
| [#5399](https://github.com/badlogic/pi-mono/pull/5399) | **fix(extensions): surface deferred-extension commands in autocomplete** | Deferred extensions loaded ~250ms after session start now have their commands appear in interactive autocomplete | ✅ Closed |
| [#5379](https://github.com/badlogic/pi-mono/pull/5379) | **Store user-scoped local package installs as absolute paths** | User-scoped installs (`pi install <path>`) now store absolute paths in settings; project-scoped remain relative. Closes #5378 | ✅ Closed |
| [#5410](https://github.com/badlogic/pi-mono/pull/5410) | **fix: persist restored session model as default for new sessions** | When continuing a session (`pi -c`), the restored model now updates `defaultModel`/`defaultProvider` in `settings.json` so new sessions don't fall back to a stale default | ✅ Closed |
| [#5332](https://github.com/badlogic/pi-mono/pull/5332) | **feat(config): Approval system for workspaces** | Adds `.pi.user` as a second user extension folder; requires approval on first interactive load (or `-f` flag) for `.pi` and `.pi.user` directories | 🟡 Open |
| [#5371](https://github.com/badlogic/pi-mono/pull/5371) | **fix(coding-agent): add a space between skill and user messages** | Fixes missing space when running `/skill:<name> message` — skill prompt and user text now separated correctly | ✅ Closed |
| [#5397](https://github.com/badlogic/pi-mono/pull/5397) | **fix: Alt+Delete word deletion on Mac OS** | Restores standard macOS text-field behavior for Alt+Delete (delete word backward) in Pi's TUI input | ✅ Closed |

---

## 5. Feature Request Trends

1. **Remote/SSH execution environments** — Multiple issues (#5341, #5350) and the ExecutionEnv refactoring signal strong demand for running Pi's tool operations on remote hosts or containers while the agent runs locally.

2. **Provider ecosystem expansion** — Requests for Amazon Bedrock Mantle (#5363), improved Vertex/GCP auth (#5323), and continued OpenAI-compatible proxy support (#5384) show the community wants Pi to seamlessly cover every major model provider.

3. **Extension API surface growth** — Extension authors are pushing for deeper integration: customizable grep commands (#5354), working loader UI replacement (#5411), slash command execution from extensions (#5367), and richer context (`ctx.mode`, system prompt options in v0.78.1).

4. **TUI/UX polish** — Mouse support (#4728), altbuf rendering mode (#5357), first-run theme detection (#5385), and keybinding unification (#5281) reflect a maturing product where users expect desktop-grade terminal UX.

5. **Session management** — Branch deletion in session trees (#5366), session model persistence across restores (#5410), and approval workflows for workspace configs (#5332) point to users managing increasingly complex, long-lived agent sessions.

---

## 6. Developer Pain Points

- **Provider compatibility matrix is fragile** — The same model routed through different proxies (OpenRouter, opencode-go, Fireworks) triggers different bugs: wrong `maxTokens` parameter names (#5331), `developer` role rejections (#5384), JSON schema errors (#5352), and silently ignored `compat` fields (#5347, #5349). Developers maintaining custom providers face a whack-a-mole debugging experience.

- **Ollama integration is second-class** — The crash in `getSessionStats()` when usage fields are absent (#5386) highlights that Ollama's non-standard responses aren't gracefully handled throughout the codebase.

- **Large session performance degrades** — Idle CPU at 24% for 150k+ token sessions (#5373) suggests the TUI or agent loop is doing unnecessary work, making long sessions impractical.

- **Cross-platform path handling is inconsistent** — Windows hosts running remote Linux tool operations get Windows-resolved paths (#5350), and Bun-installed Pi falls back to Node internals (#5365), indicating platform abstraction leaks.

- **Keybinding customization is unreliable** — Shift+Enter not respecting configured new-line binding (#5188) and the need for a unified keybinding system (#5281) show the input layer needs a more robust configuration model.

- **Stale defaults after session restore** — Users continuing sessions with `-c` found that new sessions would revert to an old default model (#5410), creating confusion about which model is actually active.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-05

---

## 1. Today's Highlights

Qwen Code shipped a new nightly build (`v0.17.1-nightly.20260604`), and the community is actively shaping the tool's trajectory around three major themes: **daemon/ACP maturity**, **memory and stats persistence**, and **model-switching UX polish**. Several long-running feature PRs (daemon mode, desktop app, computer use) are in advanced stages, while new bug reports around authentication, headless Linux, and TUI responsiveness keep the triage queue busy.

---

## 2. Releases

- **v0.17.1-nightly.20260604.16dd99fa3** — Routine nightly bump; no user-facing release notes beyond the version tag. [PR #4742](https://github.com/QwenLM/qwen-code/pull/4742)

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|---------------|-----------------|
| [#4493](https://github.com/QwenLM/qwen-code/issues/4493) | Rider IDE can't log in to Qwen Code (OAuth redirect loop) | Blocks JetBrains users from authenticating with Aliyun token plan; 10 comments show this is a multi-user pain point | 👍 0 · 10 comments |
| [#4722](https://github.com/QwenLM/qwen-code/issues/4722) | Statusline shows model ID instead of human-readable name | Degrades UX for anyone using custom or multi-key model setups; raw IDs like `qwen3-coder-plus` leak into the UI | 👍 0 · 5 comments |
| [#4754](https://github.com/QwenLM/qwen-code/issues/4754) | `/model` should not persist to settings by default | Surprise persistence trips up users who temporarily switch models; spawns a broader conversation about session-scoped vs. global settings | 👍 0 · 5 comments |
| [#4723](https://github.com/QwenLM/qwen-code/issues/4723) | Does Qwen Code support Rules/Instructions (à la Claude Code)? | Users want persistent, cross-session style/language guidance — a gap in Qwen Code's current configuration model | 👍 0 · 5 comments |
| [#4597](https://github.com/QwenLM/qwen-code/issues/4597) | Cross-session global usage stats (like Claude Code) | Current `/stats` is session-only and lost on exit; users want persistent dashboards for token/cost tracking | 👍 1 · 4 comments |
| [#4747](https://github.com/QwenLM/qwen-code/issues/4747) | Global user-level auto-memory at `~/.qwen/memories/` | Per-project memory isolation means re-learning user preferences every project; mirrors Claude Code's `private`/`team` scope | 👍 0 · 4 comments |
| [#4783](https://github.com/QwenLM/qwen-code/issues/4783) | Concerns about AES-128-ECB usage in the codebase | Security-minded community member questioning a weak cipher choice; could affect trust in credential storage | 👍 0 · 3 comments |
| [#4421](https://github.com/QwenLM/qwen-code/issues/4421) | Local-first diagnostic framework (ring buffer + `/bug collect`) | Addresses the chronic problem of users being unable to provide actionable debug info after API/SSE failures | 👍 0 · 3 comments |
| [#4264](https://github.com/QwenLM/qwen-code/issues/4264) | `/compress-fast` — non-AI context reduction | Users running local models (e.g., llama.cpp) want fast, deterministic context trimming without an extra LLM call | 👍 0 · 3 comments |
| [#4727](https://github.com/QwenLM/qwen-code/issues/4727) | Dual Output (JSON file) mode TUI unresponsive | Breaks headless/automation workflows where users pipe input via FIFO; regression from v0.17.0 | 👍 0 · 3 comments |

---

## 4. Key PR Progress

| # | Title | Description | Status |
|---|-------|-------------|--------|
| [#4779](https://github.com/QwenLM/qwen-code/pull/4779) | Interactive `/stats` dashboard with cross-session tracking | Three-tab dashboard (Session / Activity / Efficiency) with persistent usage history — directly addresses [#4597](https://github.com/QwenLM/qwen-code/issues/4597) | OPEN |
| [#4764](https://github.com/QwenLM/qwen-code/pull/4764) | User-level auto-memory at `~/.qwen/memories/` | Adds cross-project memory scope so user preferences survive across projects; closes [#4747](https://github.com/QwenLM/qwen-code/issues/4747) | OPEN |
| [#4490](https://github.com/QwenLM/qwen-code/pull/4490) | Daemon mode feature batch merge into main | Massive integration PR (46 commits, 386 files, +115k LOC) bringing core daemon-mode capabilities to main for v0.16-alpha | OPEN |
| [#4677](https://github.com/QwenLM/qwen-code/pull/4677) | Fix vim mode Esc leak, Enter submit, render lag | Fixes three vim-mode regressions and implements missing NORMAL-mode commands; significant quality-of-life improvement for vim users | OPEN |
| [#4705](https://github.com/QwenLM/qwen-code/pull/4705) | `POST /session/:id/language` for runtime language switching | Enables ACP clients to switch UI/LLM output language mid-session without polluting the transcript | OPEN |
| [#4716](https://github.com/QwenLM/qwen-code/pull/4716) | Fix headless browser open crashes (`xdg-open ENOENT`) | Replaces direct `open` calls in `/bug`, `/docs`, `/insight` with `openBrowserSecurely()`; fixes [#4712](https://github.com/QwenLM/qwen-code/issues/4712) on headless Linux | OPEN |
| [#4613](https://github.com/QwenLM/qwen-code/pull/4613) | Keep model & approval-mode state consistent across shared daemon sessions | Solves state sync issues when multiple clients (chat, terminal, IDE) share one daemon session | OPEN |
| [#4734](https://github.com/QwenLM/qwen-code/pull/4734) | Strip runtime snapshot prefix before persisting `model.name` | Fixes a bug where runtime model selection corrupted `settings.json`, causing cascading 404 errors on restart | OPEN |
| [#4572](https://github.com/QwenLM/qwen-code/pull/4572) | Harden auto-mode self-modification checks | Prevents auto mode from bypassing classifier checks when writing to config, hooks, skills, MCP, and other persistence surfaces | OPEN |
| [#4533](https://github.com/QwenLM/qwen-code/pull/4533) | `/skills` picker dialog — browse, search, toggle, pick | Transforms bare `/skills` into a full interactive picker with workspace-scoped disable list; improves discoverability | OPEN |

---

## 5. Feature Request Trends

1. **Daemon & ACP Ecosystem Maturity** — Multiple issues and PRs ([#4782](https://github.com/QwenLM/qwen-code/issues/4782), [#4490](https://github.com/QwenLM/qwen-code/pull/4490), [#4613](https://github.com/QwenLM/qwen-code/pull/4613), [#4705](https://github.com/QwenLM/qwen-code/pull/4705)) show the community investing heavily in making `qwen serve` a first-class ACP host for Zed, JetBrains, and Goose. Streamable HTTP transport, session state sync, and runtime language switching are all active workstreams.

2. **Persistent Cross-Session State** — Users want stats ([#4597](https://github.com/QwenLM/qwen-code/issues/4597)), memory ([#4747](https://github.com/QwenLM/qwen-code/issues/4747)), and rules/instructions ([#4723](https://github.com/QwenLM/qwen-code/issues/4723)) to survive across sessions and projects. This is a clear gap compared to Claude Code's offering.

3. **Context & Performance Optimization** — Non-AI context compression ([#4264](https://github.com/QwenLM/qwen-code/issues/4264)), prompt cache busting from deferred tools ([#4777](https://github.com/QwenLM/qwen-code/issues/4777)), and subagent concurrency limits ([#3568](https://github.com/QwenLM/qwen-code/issues/3568)) reflect a user base increasingly running local or cost-sensitive models where every token matters.

4. **Built-in Computer Use** — Requests for zero-config, first-class desktop automation ([#4591](https://github.com/QwenLM/qwen-code/issues/4591)) signal demand for Qwen Code to compete with Claude's computer-use capabilities out of the box.

5. **Developer Experience & Observability** — Local diagnostic frameworks ([#4421](https://github.com/QwenLM/qwen-code/issues/4421)), auto-update reliability ([#4627](https://github.com/QwenLM/qwen-code/issues/4627)), and headless Linux support ([#4712](https://github.com/QwenLM/qwen-code/issues/4712)) show the community pushing for production-grade robustness.

---

## 6. Developer Pain Points

- **Authentication friction** — OAuth redirect loops in JetBrains Rider ([#4493](https://github.com/QwenLM/qwen-code/issues/4493)) and OpenRouter model deprecation confusion ([#4750](https://github.com/QwenLM/qwen-code/issues/4750)) indicate the auth/multi-provider setup flow needs better documentation and error handling.

- **Settings persistence surprises** — The `/model` command writing to `settings.json` by default ([#4754](https://github.com/QwenLM/qwen-code/issues/4754)) and runtime model selection corrupting settings ([#4734](https://github.com/QwenLM/qwen-code/pull/4734)) erode trust in configuration stability.

- **Headless/Linux second-class citizenship** — Crashes from `xdg-open` on headless systems ([#4712](https://github.com/QwenLM/qwen-code/issues/4712)) and clipboard image paste failures on WSL2+Wayland ([#4647](https://github.com/QwenLM/qwen-code/pull/4647)) suggest the tool still assumes a desktop GUI environment too often.

- **TUI/Interactive mode regressions** — Vim mode Esc leaks ([#4677](https://github.com/QwenLM/qwen-code/pull/4677)), dual-output FIFO mode hanging ([#4727](https://github.com/QwenLM/qwen-code/issues/4727)), and desktop Escape-then-re-edit input lockout ([#4772](https://github.com/QwenLM/qwen-code/issues/4772)) point to interaction-model bugs slipping through CI.

- **Lack of persistent guidance** — Users migrating from Claude Code miss rules/instructions files ([#4723](https://github.com/QwenLM/qwen-code/issues/4723)) and cross-project memory ([#4747](https://github.com/QwenLM/qwen-code/issues/4747)), forcing them to re-explain preferences in every session.

---

*Data source: [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) · Generated by OWL for 2026-06-05*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*