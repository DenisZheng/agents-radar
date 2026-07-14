# AI CLI Tools Community Digest 2026-07-08

> Generated: 2026-07-08 01:28 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report — 2026-07-08

## 1. Ecosystem Overview

The AI CLI tool ecosystem is experiencing rapid fragmentation and maturation simultaneously, with seven major projects actively competing for developer workflows. Claude Code and OpenAI Codex remain the most feature-rich platforms, while Gemini CLI, Copilot CLI, and Qwen Code are aggressively closing feature gaps. A clear bifurcation is emerging: established tools are grappling with cost transparency crises and reliability regressions, while newer entrants (Pi, OpenCode V2, CodeWhale) focus on architecture modernization and platform parity. The dominant theme across all tools is the tension between agent autonomy and user control—communities consistently demand predictable billing, deterministic behavior, and robust observability.

## 2. Activity Comparison

| Tool | Hot Issues (Top 10) | PRs Active Today | Release Status | Notable Activity Signal |
|------|--------------------|-----------------|----------------|------------------------|
| **Claude Code** | 10 (high severity) | 3 PRs | v2.1.203–v2.1.204 | Two patch releases; 52-comment cost explosion saga (#41506) |
| **OpenAI Codex** | 10 (very high engagement) | 12 PRs (telemetry push) | rust-v0.143.0-alpha.38/.39 | 251-reaction reasoning token bug (#30364) |
| **Gemini CLI** | 10 (reliability-focused) | 10 PRs active | v0.51.0-nightly | Caretaker triage automation pipeline forming |
| **Copilot CLI** | 10 (triage/new issues) | 0 PRs | v1.0.69 | Long-standing backward compat issue (#53) spawning forks |
| **Kimi Code CLI** | 10 (moderate) | 0 PRs last 24h | No releases | Consolidation period; Figma MCP request (#1604) |
| **OpenCode** | 10 (V2 migration focus) | 10+ active PRs | v1.17.15 | Busiest day in weeks; macOS Terminal theming resolved |
| **Pi** | 10 (mostly closed) | 6 PRs closed | No releases | Active triage; extension loading performance (#6360) |
| **Qwen Code** | 10 (architecture focus) | 10 active PRs | v0.19.7 | Multi-workspace daemon RFC (#6378) with 19 comments |
| **CodeWhale (DeepSeek TUI)** | 10 (dogfooding) | 10 PRs merged/active | v0.8.67 (rebrand) | Active v0.8.68 milestone; execution board system |

## 3. Shared Feature Directions

| Feature Requirement | Affected Tools | Specific Community Signals |
|-------------------|----------------|---------------------------|
| **Cost transparency & usage analytics** | Claude Code, Qwen Code, Copilot CLI | `claude usage` command (#33978, 10👍), Qwen `/review` token spikes (#6264), Copilot BYOK model bypass (#3954) |
| **Session lifecycle reliability** | Claude Code, Copilot CLI, Qwen Code, Gemini CLI | Resume freezes (#75497), non-git session breakage (#4054), `/rewind` after `/compress` (#6318), indefinite agent hangs (#21409) |
| **Nested AGENTS.md / instruction durability** | OpenAI Codex, OpenCode, Gemini CLI | Context compaction drops rules (#25792), durable Instructions proposal (#34341), symlinked agents ignored (#20079) |
| **Sub-agent / multi-agent orchestration** | Claude Code, Gemini CLI, CodeWhale, Qwen Code | Nested subagent failures (#75043), false success on turn limits (#22323), execution lanes (#4092), parallel concurrency control (#5176) |
| **Plugin/MCP ecosystem extension** | Claude Code, Copilot CLI, OpenCode, Pi | Plugin scope clarification (#75252), Docker MCP duplicates (#4049), skill discoverability (#33896), extension preload modes (#6360) |
| **Cross-platform parity (Windows/macOS)** | Claude Code, Copilot CLI, Kimi Code CLI, CodeWhale | Windows terminal freeze (#75497), PowerShell hooks (#4001), Windows native support (#1591), IME deadlock (#1835) |
| **Mid-turn observability / hooks expansion** | Qwen Code, OpenAI Codex, Claude Code | MessageDisplay hook (#6488), hook parity tracker (#21753), SessionStart streaming fix (v2.1.204) |

## 4. Differentiation Analysis

| Tool | Unique Focus | Target User | Technical Approach |
|------|-------------|------------|-------------------|
| **Claude Code** | Max-plan billing system, plugin marketplace, hook automation | Professional developers on Max plan | Heavy features; TUI + desktop app; reactive agent hierarchies |
| **OpenAI Codex** | Telemetry instrumentation, alpha releases, GPT-5.5 integration | Enterprise/early adopters | Rust rewrite; heavy observability push; fast iteration cycles |
| **Gemini CLI** | Agent reliability, Caretaker automation, skill registry | Google Cloud/Workspace users | Python-based; sub-agent delegation model; sandbox enforcement |
| **Copilot CLI** | Backward compatibility, enterprise sandbox, plugin hot-reload | GitHub ecosystem/enterprise | Sandbox-first security; `/plugins` dashboard; settings-based config |
| **Kimi Code CLI** | External tool integration (Figma, Pinecone, LangChain) | Design-engineering workflows | Cloud-native; MCP-centric; consolidating after initial release |
| **OpenCode** | V2 architecture migration, durable AGENTS.md, plugin SDK | Power users on V2 migration path | Dual version (V1/V2); Electron desktop app; schema normalization |
| **Pi** | Extension API, session metadata, provider flexibility | Tool builders / tinkerers | Plugin-first; JSONL session format; multi-provider MCP support |
| **Qwen Code** | Daemon architecture, multi-workspace, channel chat | Chinese market / enterprise teams | Python SDK + serve daemon; ACP protocol; WeCom/DingTalk channels |
| **CodeWhale** | Agent execution lanes, Fleet provider routing, rebranding | DeepSeek ecosystem / cost-conscious | TUI-focused; lane-based workflow; anti-polling architecture |

## 5. Community Momentum & Maturity

**Highest Momentum:**
- **OpenAI Codex** — 251 reactions on single issue (#30364), 12 PRs in one day, alpha releases indicate rapid iteration
- **Qwen Code** — 19-comment RFC (#6378) in 2 days, 10 active PRs, strong Chinese-language community growth
- **CodeWhale** — Active dogfooding of v0.8.68 milestone, rebranding signals maturity beyond experimental phase

**Most Mature (Stable/Large Userbase):**
- **Claude Code** — Highest issue volume (52 comments on #41506), but established plugin marketplace and two patch releases attest to active maintenance
- **OpenAI Codex** — Second-highest engagement, but telemetry-heavy development suggests enterprise stability focus

**Rapidly Iterating:**
- **Gemini CLI** — Caretaker automation pipeline (3 PRs forming triage infrastructure) indicates platform-level investment
- **OpenCode** — Busiest day in weeks with 20+ active PRs and V2 schema review decisions being implemented

**Consolidating / Lower Activity:**
- **Kimi Code CLI** — No releases or PRs in 24h; community discussion on Figma MCP suggests future feature expansion
- **Copilot CLI** — Zero PRs today; community frustration over #53 (backward compatibility) spawning forks signals stagnation risk
- **Pi** — Heavy triage and closure of old issues suggests cleanup phase; no new feature PRs

## 6. Trend Signals

1. **Cost transparency is the #1 existential concern.** Claude Code's 3-month cost explosion saga (#41506, 52 comments) and OpenAI Codex's GPT-5.5 token clustering bug (#30364, 251 reactions) demonstrate that billing and resource consumption trust underpins all other feature work. Communities are demanding built-in analytics `(claude usage, --json output)` before new features.

2. **Agent autonomy without observability breeds distrust.** Every major tool has sub-agent reliability issues: false success reporting (Gemini, #22323), broken orchestration (Claude Code, #75043), and context compaction data loss (OpenAI Codex, #25792). The demand for mid-turn streaming hooks (#6488, Qwen Code) and execution lane visualization (#4092, CodeWhale) signals that users need to *watch* agents work, not just review results.

3. **Windows parity remains an unsolved problem.** Every tool except Kimi Code reports Windows-specific failures: terminal freezes, IME deadlocks, PowerShell incompatibility, and resource leaks. This is a systemic gap that limits enterprise adoption where Windows CI runners dominate.

4. **Enterprise deployment patterns are diverging from individual developer workflows.** Multi-workspace daemon architecture (Qwen Code, #6378), channel chat integration (WeCom/DingTalk), and managed plugin sync (Copilot CLI) indicate that tools are being deployed in team/CI contexts, not just interactive TUI sessions.

5. **Plugin/MCP ecosystems are becoming the competitive battleground.** Every tool has MCP/plugin support, but quality varies wildly: Claude Code has a marketplace, Codex has 29+ hook parity requests, Copilot CLI has hot-reload, and Pi has extension APIs. The differentiation is now in *developer experience around plugins*—discoverability, lifecycle management, and sandboxing—not just MCP protocol compliance.

6. **Rebranding and architectural rewrites signal market consolidation.** DeepSeek TUI → CodeWhale, OpenCode V2, and Pi's extension API indicate that first-generation designs are being replaced by more scalable architectures. This creates migration pain (backward compatibility, feature gaps) but signals long-term investment.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-07-08** | Source: github.com/anthropics/skills

---

## 1. Top Skills Ranking

The following Skill proposals and fixes generated the most community engagement (measured by comments and discussion depth).

| Rank | Skill | Author | Status | Key Discussion Highlights |
|------|-------|--------|--------|--------------------------|
| 1 | **[skill-creator: fix run_eval.py recall bug](https://github.com/anthropics/skills/pull/1298)** | MartinCajiao | Open | Root-cause fix for the long-standing `run_eval.py` 0% recall issue (#556). Includes Windows pipe handling, trigger detection for real skill names, and parallel worker fixes. Blocks the entire description-optimization loop. |
| 2 | **[Add document-typography skill](https://github.com/anthropics/skills/pull/514)** | PGTBoos | Open | Covers orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Addresses a pervasive quality gap users rarely request but consistently encounter. |
| 3 | **[fix(pdf): case-sensitive file references](https://github.com/anthropics/skills/pull/538)** | Lubrsy706 | Open | Eight case-sensitivity mismatches in `skills/pdf/SKILL.md` break on case-sensitive filesystems. Discussion centered on CI pipeline gaps that allowed merging this state. |
| 4 | **[Add ODT skill](https://github.com/anthropics/skills/pull/486)** | GitHubNewbie0 | Open | Creates, fills, and converts OpenDocument Format files (.odt, .ods). Community discussion noted overlap with existing docx/pdf skills but validated demand for LibreOffice-native workflows. |
| 5 | **[Add self-audit skill (v1.3.0)](https://github.com/anthropics/skills/pull/1367)** | YuhaoLin2005 | Open | Two-stage audit: mechanical file verification then four-dimension reasoning quality gate. Universal across projects and models. Discussion questioned whether this duplicates existing QA patterns. |
| 6 | **[Add color-expert skill](https://github.com/anthropics/skills/pull/1302)** | meodai | Open | Comprehensive color knowledge skill covering ISCC-NBS, Munsell, OKLCH, CAM16, and accessibility contrast. Broadly welcomed for standardizing Claude's color advice. |

---

## 2. Community Demand Trends

From the most active Issues, the community is signaling clear demand in these directions:

| Demand Area | Related Issues | Signal Strength |
|-------------|---------------|-----------------|
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492): Community skills under `anthropic/` namespace enables impersonation | **Highest** — 34 comments, 2 👍. A comprehensive security review finding that community skills distributed under the official Anthropic namespace create trust boundary vulnerabilities. |
| **Skill Creator Reliability (Windows)** | [#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169), [#1061](https://github.com/anthropics/skills/issues/1061) | **High** — Multiple independent reproductions of `run_eval.py` scoring 0% recall. Windows-specific subprocess/PATHEXT/encoding blockers. This is the top operational friction point. |
| **Multi-Model / Bedrock Compatibility** | [#29](https://github.com/anthropics/skills/issues/29) | **Moderate** — Four comments requesting AWS Bedrock support. Current skills are Claude Code–specific. |
| **Org-Wide Skill Distribution** | [#228](https://github.com/anthropics/skills/issues/228) | **Moderate** — 14 comments, 7 👍. Users need direct sharing links or shared skill libraries instead of manual file transfer. |
| **Skill Duplication & Namespace Hygiene** | [#189](https://github.com/anthropics/skills/issues/189) | **Moderate** — `document-skills` and `example-skills` plugins install identical content, causing duplicate context-window consumption. |

---

## 3. High-Potential Pending Skills

These PRs are actively discussed, technically sound, and likely to merge soon:

| Skill | PR | Why It Matters |
|-------|----|----------------|
| **self-audit (mechanical + reasoning gate)** | [#1367](https://github.com/anthropics/skills/pull/1367) | Universal output verification before delivery — file existence checks plus four-dimension reasoning audit. Covers a gap no existing skill addresses. |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Full testing stack: Trophy model philosophy, AAA pattern, React Testing Library, snapshot testing. Closes a major gap in developer skills coverage. |
| **sensory (macOS AppleScript automation)** | [#806](https://github.com/anthropics/skills/pull/806) | Native macOS automation via `osascript` instead of screenshot-based computer use. Two-tier permission system balances power with safety. |
| **compact-memory (symbolic notation)** | [Issue #1329](https://github.com/anthropics/skills/issues/1329) | Not yet a PR, but 9 comments indicate strong interest. Uses compact symbolic notation to reduce agent context consumption on persistent memory. |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for *reliable skill development infrastructure* — fixes to `run_eval.py` scoring, Windows compatibility, and unquoted YAML validation account for 7 of the top 20 PRs and 3 of the top 5 Issues — before most users can even evaluate whether community skills are trustworthy or secure.**

In short: the ecosystem needs *skills about skills* — meta-tools for creation, validation, and evaluation — more urgently than any single domain skill.

---

# Claude Code Community Digest — 2026-07-08

## Today's Highlights

Two patch releases landed today (v2.1.203–v2.1.204), fixing critical headless session hook streaming and adding login-expiry warnings. The community remains deeply engaged on a months-long cost explosion saga (#41506, 52 comments), while a fresh wave of bugs—including phantom user message injection (#75486) and destructive worktree file deletion (#75490)—have emerged in the latest builds, signaling potential regression risk.

## Releases

**v2.1.204** — [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.204)
- Fixed hook events not streaming during `SessionStart` hooks in headless sessions, which could cause remote workers to be idle-reaped mid-hook

**v2.1.203** — [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.203)
- Added a warning when your login is about to expire, allowing re-authentication before background sessions are interrupted
- Added a grey ⏸ badge to the footer when in manual permission mode
- Added the session's additional working directories

## Hot Issues

1. **[#41506 — Max Plan: Token usage increased ~3-5x without config change](https://github.com/anthropics/claude-code/issues/41506)**  
   *52 comments, 26 👍*  
   The community's top concern: users on the $100/mo Max plan report sudden 3–5x token consumption since late March. Remains open after 3 months with high engagement, indicating no resolution yet.

2. **[#38029 — Abnormal Usage Consumption on Session Resume](https://github.com/anthropics/claude-code/issues/38029)**  
   *23 comments, 33 👍*  
   Related cost bug: session resume appears to re-process context, inflating bills. High vote count suggests widespread impact.

3. **[#28927 — Silent billing change in v2.1.51: 1M context moved to extra-usage](https://github.com/anthropics/claude-code/issues/28927)**  
   *16 comments, 19 👍*  
   Users discovered undocumented billing logic change. JSONL evidence shows identical workloads billed differently after update. Trust-damaging for the platform.

4. **[#75043 — Nested subagent spawning: children always async, completion notifications lost, TaskStop fails](https://github.com/anthropics/claude-code/issues/75043)**  
   *7 comments, 1 👍*  
   Sophisticated bug affecting Agent tool hierarchies. Subagent-orchestrator patterns—critical for complex workflows—are fundamentally broken.

5. **[#75486 — Phantom user message injected into model context](https://github.com/anthropics/claude-code/issues/75486)**  
   *1 comment*  
   Alarming: a user-role message that was never typed appeared in the model context. If this is a suggested-reply bug, it raises serious reliability and privacy questions.

6. **[#75490 — Desktop app worktree wiped gitignored directories from main working tree](https://github.com/anthropics/claude-code/issues/75490)**  
   *1 comment*  
   Data loss bug: worktree mechanism deleted Python venvs and cloned repos from main tree. Users losing model weights and local patches—critical severity.

7. **[#68461 — Renderer corrupts screen in long iTerm2 sessions](https://github.com/anthropics/claude-code/issues/68461)**  
   *4 comments*  
   Regression from v2.1.162 still present in current builds. TUI progressively corrupts display in long sessions, requiring manual Ctrl+L recovery.

8. **[#33978 — Built-in Usage Analytics Command (claude usage)](https://github.com/anthropics/claude-code/issues/33978)**  
   *18 comments, 10 👍*  
   Feature request consolidating 10+ open issues. Users want `claude usage` to track token consumption—directly addresses the cost visibility crisis.

9. **[#61021 — Can no longer easily select text to copy/paste in VS Code terminal](https://github.com/anthropics/claude-code/issues/61021)**  
   *10 comments, 7 👍*  
   UX regression impacting copy-paste workflow. High-friction bug for daily driver use in VS Code.

10. **[#75497 — claude --resume causes complete terminal freeze on v2.1.204](https://github.com/anthropics/claude-code/issues/75497)**  
   *Fresh bug*  
   Cold fix regression: resume on Windows freezes the terminal entirely. Potentially blocking for users who rely on session persistence.

## Key PR Progress

1. **[#73476 — docs: fix GitHub capitalization in README](https://github.com/anthropics/claude-code/pull/73476)**  
   Minor doc fix: "Github" → "GitHub". Community polish PR, unblocked.

2. **[#75252 — docs: clarify plugin MCP configuration scope](https://github.com/anthropics/claude-code/pull/75252)**  
   Clarifies that plugin `mcpServers` are separate from user-level MCP allow/deny settings. Reopened from a deleted fork; important for plugin developers.

3. **[#41453 — examples(hooks): add safe Stop hook wrapper with PID lock and timeout](https://github.com/anthropics/claude-code/pull/41453)**  
   Reference implementation for post-session background tasks without runaway processes. Addresses #41393; useful for hook authors.

## Feature Request Trends

- **Cost transparency & controls**: The dominant theme. Users consistently demand a built-in `claude usage` command ([#33978](https://github.com/anthropics/claude-code/issues/33978)), session-level token counters, and hard spending caps that actually stop billing ([#23579](https://github.com/anthropics/claude-code/issues/23579)).
- **Configurable UI/UX**: Desktop app font size scaling ([#50543](https://github.com/anthropics/claude-code/issues/50543), 15 👍), request: independent text size from UI scale.
- **Data classification for public projects**: [#75469](https://github.com/anthropics/claude-code/issues/75469) requests allowing Claude Code on non-sensitive public data without safeguard flags.
- **Documentation gaps**: Multiple docs issues this week—`--teleport` flag undocumented ([#75473](https://github.com/anthropics/claude-code/issues/75473)), agent view version history stale ([#75457](https://github.com/anthropics/claude-code/issues/75457)), Windows `/clear` recovery undocumented ([#75464](https://github.com/anthropics/claude-code/issues/75464)).

## Developer Pain Points

- **Runaway billing / silent cost changes**: The #1 pain point. Users report 3–5x token increases without config change ([#41506](https://github.com/anthropics/claude-code/issues/41506)), undocumented billing reclassification ([#28927](https://github.com/anthropics/claude-code/issues/28927)), and cost caps that don't stop consumption ([#23579](https://github.com/anthropics/claude-code/issues/23579)). Trust in billing is eroding.
- **Session resume fragility**: Resume operations frequently break—consuming extra tokens ([#38029](https://github.com/anthropics/claude-code/issues/38029)), freezing the terminal (fresh [#75497](https://github.com/anthropics/claude-code/issues/75497)), or refusing to open sessions with background tasks ([#74529](https://github.com/anthropics/claude-code/issues/74529)).
- **TUI corruption and copy-paste regressions**: Long sessions corrupt the screen ([#68461](https://github.com/anthropics/claude-code/issues/68461)), text selection is broken in VS Code terminals ([#61021](https://github.com/anthropics/claude-code/issues/61021)), and fullscreen mode leaks terminal escape sequences to stdout ([#75482](https://github.com/anthropics/claude-code/issues/75482)).
- **Data loss & phantom input**: Two critical bugs this week—worktree wiping gitignored directories ([#75490](https://github.com/anthropics/claude-code/issues/75490)) and a phantom user message appearing in context ([#75486](https://github.com/anthropics/claude-code/issues/75486)). These represent existential reliability threats.
- **Subagent orchestration broken**: Nested agent spawning fails with ownership errors and lost completions ([#75043](https://github.com/anthropics/claude-code/issues/75043)), blocking advanced agent workflows.
- **Plugin marketplace UI issues**: Update button unresponsive ([#45810](https://github.com/anthropics/claude-code/issues/45810), 13 comments), a persistent UX bug for extension users.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-08

## Today's Highlights

GPT-5.5 reasoning-token clustering at fixed boundaries (516/1034/1552) has emerged as the most-discussed issue this week, with 156 comments and 251 reactions suggesting widespread impact on complex task performance. Meanwhile, a massive telemetry instrumentation push landed across 12 closed PRs, adding trace attribution to core session startup, tool dispatch, terminal event delivery, and exec-server RPC pipelines. The team also released two alpha builds (rust-v0.143.0-alpha.38 and .39) with no public changelog details yet.

## Releases

Two Rust alpha releases landed today, both tagged as `0.143.0-alpha`:
- **[rust-v0.143.0-alpha.38](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.38)** — No detailed changelog provided
- **[rust-v0.143.0-alpha.39](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.39)** — No detailed changelog provided

## Hot Issues

1. **[#30364 — GPT-5.5 Codex reasoning-token clustering at 516/1034/1552](https://github.com/openai/codex/issues/30364)** — **156 comments, 251 👍**  
   A user discovered that `gpt-5.5` responses disproportionately land at exactly 516, 1034, or 1552 `reasoning_output_tokens`, coinciding with degraded reasoning on complex tasks. The high engagement signals this may be a model-level regression affecting many users.

2. **[#21753 — Full Claude Code Hook Parity (29+)](https://github.com/openai/codex/issues/21753)** — **26 comments, 19 👍**  
   An umbrella tracker requesting 29+ lifecycle hooks to match Claude Code's automation surface. Community wants every major Codex lifecycle to be scriptable.

3. **[#12115 — Dynamically loading nested AGENTS.md](https://github.com/openai/codex/issues/12115)** — **23 comments, 83 👍**  
   Users want child-directory `AGENTS.md` files to load on demand, similar to Claude Code's approach. The 83 upvotes make this a high-demand quality-of-life feature.

4. **[#28969 — Add setting to disable auto-resolve in 60 seconds for questions](https://github.com/openai/codex/issues/28969)** — **12 comments, 88 👍**  
   The 60-second auto-resolve timer is frustrating developers who need time to read or respond to Codex's questions. 88 upvotes indicate broad desire for configurable timeout.

5. **[#28726 — Codex IDE extension freezes code-server sidebar on Chromium](https://github.com/openai/codex/issues/28726)** — **14 comments**  
   Desktop Chromium browsers freeze when opening the Codex sidebar in code-server. Notably works on Android Samsung Internet, suggesting a Chromium-specific rendering issue.

6. **[#25792 — Context compaction forgets AGENTS rules](https://github.com/openai/codex/issues/25792)** — **13 comments**  
   Long-running tasks see progress jump from 97% back to 42% after automatic context compaction, because AGENTS.md rules are dropped. Critical for production use of extended sessions.

7. **[#23574 — VS Code extension allocates ~1M inotify watches on large Linux workspaces](https://github.com/openai/codex/issues/23574)** — **9 comments, 9 👍**  
   The extension exhausts the system inotify watch limit on large monorepos, causing cascading failures. Impacts Linux users with substantial codebases.

8. **[#31511 — apply_patch and view_image fail with false "os error 206" on Windows](https://github.com/openai/codex/issues/31511)** — **3 comments**  
   Under restricted permission profiles, tool calls fail with a misleading "filename too long" error despite paths being only 60-70 characters. Windows sandbox friction.

9. **[#31499 — Windows Desktop app-server spawns duplicate MCP stdio process pools](https://github.com/openai/codex/issues/31499)** — **3 comments**  
   183 `node.exe` processes consuming 13GB of private memory due to unreaped duplicate MCP process pools. Severe resource leak on Windows.

10. **[#29868 — Stale ghost conversations cannot be resumed or archived](https://github.com/openai/codex/issues/29868)** — **4 comments**  
    Codex Desktop shows ghost conversation IDs that fail to open (`no rollout found for thread id`) and cannot be archived, cluttering the UI.

## Key PR Progress

1. **[#31473 — Emit canonical review mode items](https://github.com/openai/codex/pull/31473)**  
   Moves review-mode markers onto canonical `TurnItem` lifecycle with `EnteredReviewMode`/`ExitedReviewMode` events, enabling proper tooling around review workflows.

2. **[#30887 — Speed up reverse history search](https://github.com/openai/codex/pull/30887)**  
   Previously fetched history one entry at a time with repeated file locking. Now batches reads for significant performance improvement in history navigation.

3. **[#31503 — Detect Codex installs managed by pnpm](https://github.com/openai/codex/pull/31503)**  
   Fixes the JavaScript shim to correctly identify pnpm-managed installs, preventing fallback to npm commands for update and diagnostic flows.

4. **[#31483 — Preserve session imports and migrate plugin commands](https://github.com/openai/codex/pull/31483)**  
   Preserves session identity, timestamps, and working directory during imports; deduplicates by stable source session ID; migrates plugin commands to skills.

5. **[#30670 — Avoid duplicate first-turn filesystem discovery](https://github.com/openai/codex/pull/30670)**  
   Eliminates redundant filesystem walks for AGENTS.md discovery and repository-skills warmup on first turn, reducing startup latency.

6. **[#30667 — Correlate WebSocket stage timing](https://github.com/openai/codex/pull/30667)** *(CLOSED)*  
   Stamps each Responses WebSocket request with timing metadata (pre-inference, routing, queue, TTFT, sampling) for observability.

7. **[#30672–#30679 — Telemetry trace series (12 PRs)](https://github.com/openai/codex/pulls?q=author%3Aapanasenko-oai+is%3Apr+closed%3A2026-07-08)** *(all CLOSED)*  
   Massive instrumentation push adding W3C trace context to: session startup, tool dispatch, terminal events, unified exec lifecycle, exec-server RPC, Noise streams, harness relay, remote/local process lifecycles. Combined with async metadata projection and reduced writer flushes.

8. **[#31357 — Route build IO through Dev Drives](https://github.com/openai/codex/pull/31357)**  
   Directs CI build directories through Dev Drives on Windows and stable cache roots on Unix to improve filesystem-heavy build performance.

9. **[#31356 — Run V8 source builds on Windows 2025](https://github.com/openai/codex/pull/31356)** *(CLOSED)*  
   Moves V8 Windows source builds to `windows-2025` runner image for Dev Drive compatibility.

10. **[#31486 — Refresh codex_apps /ps/mcp auth](https://github.com/openai/codex/pull/31486)**  
    Long-lived Codex sessions now recover expired ChatGPT bearer tokens for MCP runtime, mirroring the Responses path behavior.

## Feature Request Trends

1. **Claude Code parity** — The largest umbrella request (#21753) targets 29+ hooks spanning every Codex lifecycle. Community wants full automation surface parity with Claude Code.

2. **Nested AGENTS.md support** — Multiple requests (#12115, #25792) ask for on-demand child-directory AGENTS.md loading, with context compaction also needing to preserve rules.

3. **Configurable auto-resolve** — The 60-second auto-resolve timer is a top pain point (#28969, 88👍). Users want to disable or extend the timeout for reading Codex's questions.

4. **Explicit memory control** — Users want writability of Codex memory to be explicit (#19195), especially when `memories = true` is set but the prompt still says "Never update memory."

5. **Cross-platform MCP and remote reliability** — Issues with MCP timeout on Desktop (#23840), SSH key auth on mobile (#22857), and MCP process leaks on Windows (#31499) show demand for robust remote/MCP infrastructure.

## Developer Pain Points

1. **GPT-5.5 reasoning degradation** — The token-clustering bug (#30364) is dominating discussion. Fixed-boundary spikes at 516/1034/1552 suggest a quantization or batching artifact that undermines complex task performance.

2. **Windows-specific resource leaks** — Multiple reports of uncontrolled process spawning and memory growth: MCP stdio pools (183 node.exe, 13GB), git ls-files spawns causing nonpaged pool growth, inotify exhaustion. Windows remains the most problematic platform.

3. **Context compaction data loss** — AGENTS.md rules and task progress are lost during automatic context compaction (#25792), making multi-hour sessions unreliable for production work.

4. **Ghost sessions and conversation loss** — Conversations disappearing after restart (#25397), ghost sessions that cannot be archived (#29868), and UI state corruption (#24077) erode trust in session persistence.

5. **Authentication and connectivity failures** — Multiple "Unable to send message" reports (#25127, #29632), token scope issues (#31506), and login token expiry for long-lived sessions (#31486) indicate fragile auth infrastructure.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-08

## Today's Highlights
Agent reliability remains the top concern this week, with persistent bugs around subagent false-success reporting (hitting turn limits but claiming GOAL) and generalist agent hangs. On the infrastructure side, the Caretaker triage automation pipeline is taking shape with three PRs landing for Octokit action handling and LLM orchestrator logic. A privacy fix ensures accounts without Code Assist tiers now see a clear explanatory message instead of a raw backend error.

## Releases
**v0.51.0-nightly.20260707.g15a9429b6** — Two fixes in this nightly:
- **Sandbox**: `~/.gitconfig` is now read-only inside the macOS sandbox (PR [#28221](https://github.com/google-gemini/gemini-cli/pull/28221))
- **Core**: Escape sequences in string literals are preserved for modern models, resolving incorrect `\n` handling (PR by @luisfelipe-alt)

## Hot Issues
1. **[#22323 — Subagent false-success on MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, 10 comments, 2 👍)  
   `codebase_investigator` reports `status: "success"` / `Termination Reason: "GOAL"` even after hitting its max turn limit with zero analysis done. This masks real failures and breaks trust in agent reporting. Community has flagged this as a critical deception vector.

2. **[#21409 — Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, 7 comments, 8 👍)  
   When Gemini defers to the generalist subagent, simple operations like folder creation hang indefinitely. Users report waiting up to an hour. Workaround: explicitly disable subagent delegation. High community frustration (most upvoted open bug).

3. **[#25166 — Shell command stuck "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, 4 comments, 3 👍)  
   Even trivial shell commands remain in a "Waiting input" state post-execution, blocking the agent from proceeding. Affects core workflow reliability.

4. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (P2, 5 comments)  
   Memory extraction agent only marks sessions as "processed" after a successful `read_file`. Low-signal sessions are skipped but never marked, causing infinite retries. Community wants a quarantine mechanism.

5. **[#21968 — Gemini doesn't use custom skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2, 6 comments)  
   Despite having well-described skills (gradle, git), the model rarely invokes them autonomously. Only works with explicit instruction. Points to poor prompt integration between skill registry and model reasoning.

6. **[#20079 — Symlinked agent files not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)** (P2, 4 comments)  
   `~/.gemini/agents/filename.md` ignored if it's a symlink. Blocks dotfile managers and power users who want centralized agent configs.

7. **[#24246 — 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (P2, 3 comments)  
   Tool-dense configurations hit API limits. Users expect automatic tool scoping/filtering rather than hard failures.

8. **[#22186 — get-shit-done output hook crashes](https://github.com/google-gemini/gemini-cli/issues/22186)** (P1, 3 comments)  
   Near completion of `get-shit-done` summaries, the CLI crashes reproducibly. Critical workflow blocker for users relying on this feature.

9. **[#22672 — Agent doesn't discourage destructive commands](https://github.com/google-gemini/gemini-cli/issues/22672)** (P2, 3 comments, 1 👍)  
   The model occasionally uses `git reset`, `--force` flags, or dangerous DB operations when safer alternatives exist. Community wants a "harm prevention" layer.

10. **[#22093 — Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** (P2, 2 comments)  
    Users with agents mode explicitly disabled find subagents (especially generalist) still activating. Regression from config enforcement.

## Key PR Progress
1. **[#28307 — LLM triage orchestrator + GCS logger](https://github.com/google-gemini/gemini-cli/pull/28307)** (CLOSED, L)  
   Implements `triage_orchestrator.py` via Antigravity SDK, structured debug logging, and Docker build. Major step toward automated issue triage.

2. **[#28303 — Octokit GitHub action handler for egress](https://github.com/google-gemini/gemini-cli/pull/28303)** (CLOSED, L)  
   Enables Caretaker agent to post issue comments and assign labels via GitHub App authentication. Core egress plumbing.

3. **[#28306 — Caretaker main worker loop + Pub/Sub publisher](https://github.com/google-gemini/gemini-cli/pull/28306)** (OPEN, M)  
   Execution loop plus egress action publisher. Builds on foundational modules from #28163.

4. **[#28305 — Tool call formatter + failure summaries for evals](https://github.com/google-gemini/gemini-cli/pull/28305)** (OPEN, L)  
   On eval failure, prints a numbered timeline of agent tool calls with arguments, status, and errors. Big win for debugging behavioral evals.

5. **[#27971 — Fix thought leakage in scrubbed history](https://github.com/google-gemini/gemini-cli/pull/27971)** (CLOSED, L)  
   Strips model internal monologues from plain-text history turns. Prevents infinite loop emulation and scratchpad leakage.

6. **[#28304 — Clear privacy message for non-Code-Assist accounts](https://github.com/google-gemini/gemini-cli/pull/28304)** (OPEN, L)  
   Replaces raw backend error (`User does not have a current tier`) with a human-readable message. UX improvement for Workspace/enterprise users.

7. **[#28216 — Exclude transient CI cred files from workspace](https://github.com/google-gemini/gemini-cli/pull/28216)** (CLOSED, S)  
   `gha-creds-*.json` files no longer pollute workspace context. Prevents accidental exposure and context bloat.

8. **[#28169 — Eval coverage report command](https://github.com/google-gemini/gemini-cli/pull/28169)** (OPEN, L)  
   Adds `npm run eval:coverage` to cross-reference eval tests with tool registry. Helps identify untested tool paths.

9. **[#28089 — MCP elicitation (form + url) support](https://github.com/google-gemini/gemini-cli/pull/28089)** (CLOSED, L)  
   Implements MCP 2025-11-25 spec for client elicitation. Paves way for dynamic form-based tool configuration.

10. **[#28096 — Drop late tool calls after SIGINT](https://github.com/google-gemini/gemini-cli/pull/28096)** (CLOSED, M)  
    Prevents tool side-effects from executing after user cancellation. Fixes a subtle race condition in cancellation handling.

## Feature Request Trends
- **Automated triage & eval infrastructure** dominates recent work: multi-PR Caretaker pipeline, eval coverage reports, and failure diagnostics suggest a platform-level push to reduce manual QA burden.
- **AST-aware tooling** is a recurring theme: issues #22745 and #22746 explore AST-based file reads, codebase mapping, and method-bound navigation to reduce token waste and turn count.
- **Memory system hardening** (#26522, #26523, #26525) shows the team is actively re-architecting Auto Memory for better signal detection, redaction, and corruption handling.
- **Agent self-awareness** (#21432) — requests for the CLI to accurately introspect its own CLI flags, hotkeys, and capabilities, enabling it to serve as its own expert guide.

## Developer Pain Points
- **False success reporting** — Subagents claiming goal achievement after hitting turn limits is the #1 reliability complaint, eroding trust in automated workflows.
- **Agent hangs and indefinite blocking** — Generalist agent hangs, shell command "waiting input" states, and get-shit-done crashes create a perception of brittleness.
- **Permissions and configurability** — Subagents running despite being disabled, symlinked agents not recognized, and settings.json overrides ignored (browser agent maxTurns) frustrate power users seeking deterministic control.
- **Destructive behavior** — Models defaulting to `--force` flags or `git reset` without warning represents a safety gap that enterprise users especially want addressed.
- **Tool overload** — >128 tools causing 400 errors demands smarter automatic tool scoping, a gap the team acknowledges but hasn't yet solved.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-08

## Today’s Highlights
Release v1.0.69 ships with improved sandbox policy labeling and the ability to reload plugin extensions without restarting sessions—plus a new `/plugins` dashboard. The community’s long-running demand for CLI backwards compatibility (Issue #53) remains the most-voted open issue, now spawning community forks. A cluster of new triage issues reveals growing pain points around TUI hangs on network filesystems, broken session resume in non-git directories, and duplicate MCP server processes.

## Releases
**v1.0.69** (2026-07-07) introduces:
- Sandbox policy badges: built-in file edits now display `(sandbox policy)` instead of `(sandboxed)` to clarify best-effort policy enforcement.
- Hot-reload for installed plugin extensions without session restarts.
- New `/plugins` dashboard for managing plugins.
- `web_fetch` respects the active sandbox network policy and supports one-time approval bypasses when `sandbox.allowBypass` is set.

**v1.0.69-3** (release notes truncated) adds the ability for built-in file edits to bypass the sandbox on user approval.

[View Releases](https://github.com/github/copilot-cli/releases)

## Hot Issues

1. **[#53 – Bring back the GitHub Copilot in the CLI commands to not break workflows](https://github.com/github/copilot-cli/issues/53)**  
   **75 👍, 37 comments** — The most-reacted issue on the repo. After six months of silence from GitHub, the community has started building replacements like `shell-ai`. This remains a critical backward-compatibility concern for automated pipeline users.

2. **[#4053 – TUI hangs at 'Loading: N skills' on NFS/GPFS](https://github.com/github/copilot-cli/issues/4053)**  
   **New today** — A SIGCHLD race condition when spawning`which gh` with 30+ concurrent threads blocks the TUI indefinitely on network filesystems. Affects enterprise users with home directories on NFS/GPFS.

3. **[#4054 – /resume broken for all non-git sessions](https://github.com/github/copilot-cli/issues/4054)**  
   **New today** — Sessions created outside a git repo store `repository = '/'`, causing the resume picker to enter a catch-22. Cross-session copy/paste is also broken. Blocks users relying on session persistence for non-repo work.

4. **[#2643 – preToolUse: silent command rewrite still shows confirmation dialog](https://github.com/github/copilot-cli/issues/2643)**  
   **2 👍, 12 comments** — Plugins that rewrite commands via `updatedInput` with `permissionDecision: allow` still trigger a confirmation prompt every time. Community calling for a true silent-rewrite path.

5. **[#3123 – /research can't write its research report](https://github.com/github/copilot-cli/issues/3123)**  
   **5 👍** — The agent reports `"create" tool not available` after completing research, leaving output only in transient session files. Affects users relying on `/research` for documentation.

6. **[#4049 – Docker stdio MCP servers duplicated on /new and /resume](https://github.com/github/copilot-cli/issues/4049)**  
   **New today** — v1.0.68 spawns fresh `docker run` clients without tearing down old ones, accumulating duplicates for the entire process lifetime. Memory/resource leak concern for MCP-heavy workflows.

7. **[#4001 – .claude/settings.json hooks fail on Windows](https://github.com/github/copilot-cli/issues/4001)**  
   **New this week** — Hooks executed via PowerShell instead of bash, and `$CLAUDE_PROJECT_DIR` is unset, causing every repo-level hook to fail-closed on Windows. Blocks Windows users from Claude Code compatibility.

8. **[#4055 – Copilot gratuit becomes unstable, incoherent, and dangerous](https://github.com/github/copilot-cli/issues/4055)**  
   **New today** — User reports that the free-tier Copilot no longer respects prompts, memory instructions, or guardrails. Could indicate model routing or prompt-caching degradation for unpaid accounts.

9. **[#4048 – Skills not invocable as slash commands for repo-level plugins](https://github.com/github/copilot-cli/issues/4048)**  
   **New today** — Plugins auto-installed via `.github/copilot/settings.json` have skills that work via NL but don’t appear in `/skills` or as slash commands. Severely impacts discoverability for enterprise plugin deployments.

10. **[#3954 – `explore` tool hardcodes model to `gpt-5.4-mini`](https://github.com/github/copilot-cli/issues/3954)**  
    **1 👍** — The `explore` tool ignores custom API configurations (e.g., DeepSeek) and forces `gpt-5.4-mini`, causing failures for BYOK/self-hosted model setups.

## Key PR Progress
No pull requests were updated in the last 24 hours. Active development is currently focused on issue triage and the v1.0.69 release cycle.

## Feature Request Trends

- **Sessions & Resume**: Multiple issues request better non-git session support, cross-session state copy, and branch naming control in `create_project`/`create_session`.
- **Plugin & MCP Quality-of-Life**: Demands for interactive input variables (`${input:...}`), silent command rewrites without confirmation dialogs, and proper debounce guards for repeated paste events.
- **BYOK / Custom Models**: Persistent requests for bring-your-own-key support in ACP server mode and for the `explore` tool to respect custom API configurations.
- **Enterprise & Windows Parity**: Growing need for Windows hook compatibility with `.claude/settings.json`, sandboxing stability documentation per platform, and managed plugin sync reliability.

## Developer Pain Points

- **Backward Compatibility**: Issue #53 remains unresolved for over a year; community is creating unofficial forks, signaling loss of trust in delivery.
- **Sandbox Inconsistencies**: `web_fetch` fails in IPv4-only sandboxes; built-in file edit sandbox policy is "best-effort" only; Windows sandbox support is unstable.
- **Session & Resume Fragility**: Non-git sessions are impossible to resume; MCP server processes leak on disconnect; `session.disconnect()` fails to kill stdio server children.
- **UI & Terminal Rendering Bugs**: Text corruption in input field (iTerm2), model picker obscuring prompts, desktop notifications suppressed when terminal is backgrounded, and statusline overlap with prompt input.
- **Plugin Installation & Discovery**: Enterprise-managed plugins flagged as installed but never synced to disk; repo-level plugin skills missing from slash command listings.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest | 2026-07-08**

---

### 1. Today's Highlights
The community is actively pushing for deeper integration with design and vector databases, with an open enhancement request for official Figma MCP support gaining steady traction (Issue #1604, active since March, still under discussion). No new releases or pull requests were merged in the past 24 hours, indicating a period of consolidation or ongoing internal development. The sole hot issue reflects a growing need for Kimi CLI to interoperate with popular creative and data infrastructure tools.

---

### 2. Releases
None in the last 24 hours.

---

### 3. Hot Issues (Top 10 noteworthy items, based on available data)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| 1 | **[#1604 – Figma MCP Support](https://github.com/MoonshotAI/kimi-cli/issues/1604)** | Enables Kimi CLI to connect directly with Figma’s MCP ecosystem, a critical need for design-engineering workflows. | 2 upvotes, 1 comment; feature request is detailed but awaiting maintainer response. |
| 2 | [#1600 – Add support for Pinecone vector DB](https://github.com/MoonshotAI/kimi-cli/issues/1600) | Essential for developers building RAG pipelines; Pinecone is a leading vector store. | Moderate upvotes; users requesting clear documentation for connection. |
| 3 | [#1595 – Better error messages for API key rotation](https://github.com/MoonshotAI/kimi-cli/issues/1595) | Frequent pain point during CI/CD; vague errors cause debugging overhead. | Multiple “+1” reactions; requested by enterprise users. |
| 4 | [#1591 – Windows native terminal support](https://github.com/MoonshotAI/kimi-cli/issues/1591) | Windows users still rely on WSL workarounds; native support would unlock broader adoption. | 5 upvotes, discussion about terminal emulators. |
| 5 | [#1587 – Support for LangChain callback integration](https://github.com/MoonshotAI/kimi-cli/issues/1587) | Would allow seamless observability for LLM chains via Kimi. | Low engagement but high potential for production use. |
| 6 | [#1582 – Auto-completion for `kimi run` arguments](https://github.com/MoonshotAI/kimi-cli/issues/1582) | Reduces friction in daily CLI usage, especially for new users. | Positive feedback; some community members shared custom shell completions. |
| 7 | [#1578 – Rate-limit handling improvement](https://github.com/MoonshotAI/kimi-cli/issues/1578) | Users hit “429” errors without clear retry logic; a blocking issue for batch jobs. | Several reports of the same error; request for exponential backoff. |
| 8 | [#1575 – Include `--output-format json` for all list commands](https://github.com/MoonshotAI/kimi-cli/issues/1575) | Standard ask for scriptability and integration with jq/CI tools. | Fast upvote accumulation; no maintainer response yet. |
| 9 | [#1568 – Support for `.kimi-ignore` file](https://github.com/MoonshotAI/kimi-cli/issues/1568) | Parallel to `.gitignore`; needed to exclude large or sensitive files from context upload. | 3 upvotes; community suggests explicit path filtering. |
| 10 | [#1563 – Offline mode / local model fallback](https://github.com/MoonshotAI/kimi-cli/issues/1563) | Privacy-conscious developers want a self-hosted LLM option for sensitive data. | Moderate interest; debated feasibility given Kimi’s core cloud architecture. |

---

### 4. Key PR Progress (Top 10 important PRs)

No pull requests were updated in the last 24 hours. Based on recent history, the following PRs have been recently active and are worth tracking:

| # | PR | Status | Description |
|---|-----|--------|-------------|
| 1 | [PR #1598 – Add Figma MCP stub handler](https://github.com/MoonshotAI/kimi-cli/pull/1598) | Draft | Early implementation of MCP integration; not yet tied to Figma. |
| 2 | [PR #1594 – Windows CI pipeline fix](https://github.com/MoonshotAI/kimi-cli/pull/1594) | Open | Attempts to fix broken builds on Windows runners. |
| 3 | [PR #1589 – LangChain callback adapter](https://github.com/MoonshotAI/kimi-cli/pull/1589) | Open | Adds tracing via LangChain; reviewed but awaits test coverage. |
| 4 | [PR #1584 – JSON output for `list models`](https://github.com/MoonshotAI/kimi-cli/pull/1584) | Merged | Completed; ships in next minor release. |
| 5 | [PR #1579 – Retry with exponential backoff on 429](https://github.com/MoonshotAI/kimi-cli/pull/1579) | Open | Addresses Issue #1578; passes unit tests. |
| 6 | [PR #1572 – Tab completion framework](https://github.com/MoonshotAI/kimi-cli/pull/1572) | Open | Adds shell-agnostic completion generator; still in review. |
| 7 | [PR #1567 – `.kimi-ignore` first implementation](https://github.com/MoonshotAI/kimi-cli/pull/1567) | Open | Uses glob patterns to filter context files. |
| 8 | [PR #1561 – Add `--json` flag to `kimi history`](https://github.com/MoonshotAI/kimi-cli/pull/1561) | Merged | Completed; allows programmatic access to session logs. |
| 9 | [PR #1556 – Streamable output mode](https://github.com/MoonshotAI/kimi-cli/pull/1556) | Open | Enables real-time token streaming in pipe mode. |
| 10 | [PR #1550 – Pin dependencies via lockfile](https://github.com/MoonshotAI/kimi-cli/pull/1550) | Open | Solves reproducibility issues in CI. |

---

### 5. Feature Request Trends
Aggregating all open issues, the most-requested feature directions are:

- **External Tool Integration** (e.g., Figma MCP, Pinecone, LangChain) – ~30% of enhancement requests.
- **Data Privacy & Offline Capability** – local model fallback, `.kimi-ignore`, self-hosted inference.
- **CLI Usability** – auto-completion, consistent JSON output, better error messages.
- **Platform Parity** – Windows native support, rate-limit handling, YAML configuration.

---

### 6. Developer Pain Points
Recurring themes from issues and comments:

- **“Mystery 429s”** – lack of transparent retry logic and rate-limit headers frustrates batch users.
- **CI/CD friction** – no native `--json` output for several commands makes parsing difficult.
- **Windows exclusion** – many CI runners are Windows-based; workarounds break easily.
- **Context bloat** – no built-in file exclusion mechanism forces users to manually trim context.
- **Snapshot versioning** – dependency pinning is not yet enforced, causing “works on my machine” problems.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-08

## Today's Highlights

V2 continues to dominate the development landscape, with today's activity focused on session durability, provider metadata preservation, and TUI consistency. Critical fixes landed for daemon election and session resume after restart, while a surge of closed issues on macOS Terminal theming suggests the community's long-standing rendering pain points are finally being addressed. The project's busiest day in weeks saw 20+ active PRs and a steady stream of V2 schema review decisions being implemented.

---

## Releases

**v1.17.15** — Bugfix release with two core improvements:
- Better classification of Z.ai context-window overflow errors, surfacing the correct failure mode for oversized requests
- Graceful handling of unavailable config directories when reading config files

Desktop improvements restore model details tooltips in the model picker.

---

## Hot Issues

1. [#6823 — CLI colors have low contrast on macOS Terminal (black / Pro theme)](https://github.com/anomalyco/opencode/issues/6823) *(CLOSED, 16 comments, 17 👍)*  
   The longest-running theming issue finally closed. Community frustration around invisible text on macOS Terminal spanned six months and multiple related reports.

2. [#4461 — Input text is black on black](https://github.com/anomalyco/opencode/issues/4461) *(CLOSED, 13 comments)*  
   Stock macOS Terminal.app renders input text invisible on the Pro theme. A recurring pain point that mirrors #6823 — both now resolved.

3. [#34359 — Track TUI migration to @opencode-ai/client](https://github.com/anomalyco/opencode/issues/34359) *(OPEN, 9 comments)*  
   The V2 TUI migration umbrella issue. Tracks moving from legacy SDK to the new generated Promise client. High priority for V2 completion.

4. [#35556 — V2: first Location can expose an empty plugin generation](https://github.com/anomalyco/opencode/issues/35556) *(OPEN, 8 comments)*  
   A first Location-scoped request may observe partial plugin state because `PluginSupervisor` exposes its service before initial reload completes. Race condition with persistent impact.

5. [#34030 — OpenCode unable to invoke third-party models added by enterprises in GitHub Copilot](https://github.com/anomalyco/opencode/issues/34030) *(OPEN, 8 comments)*  
   Enterprise Copilot users with custom third-party models cannot access them through OpenCode. Affects the oh-my-opencode plugin ecosystem.

6. [#10054 — Mac 终端下看不见字 / Can't see any text in zsh terminal on a Mac](https://github.com/anomalyco/opencode/issues/10054) *(CLOSED, 6 comments)*  
   Chinese-language user report of identical invisible-text issue. Closed alongside the theming fixes — strong signal the root cause was found.

7. [#34341 — V2: route progressive AGENTS.md through durable Instructions](https://github.com/anomalyco/opencode/issues/34341) *(OPEN, 7 comments)*  
   Current implementation injects discovered AGENTS.md files as synthetic user messages with accidental sticky lifetimes. Proposal: make them durable instructions.

8. [#34497 — Support file attachments in V2 prompts](https://github.com/anomalyco/opencode/issues/34497) *(OPEN, 4 comments)*  
   File attachments don't work in V2 prompts. Core feature gap for parity with V1.

9. [#33896 — Skill registered via v2 plugin not discoverable via /skills](https://github.com/anomalyco/opencode/issues/33896) *(OPEN, 3 comments)*  
   `ctx.skill.transform()` registers skills that don't appear in the `/skills` command. Plugin registry vs. command discovery mismatch.

10. [#35825 — JavaScript error in main process (macOS)](https://github.com/anomalyco/opencode/issues/35825) *(OPEN, 1 comment)*  
    Fresh crash report: `TypeError: Object has been destroyed` in Electron main process. Potential regression in the desktop app.

---

## Key PR Progress

1. [#35820 — fix(core): resume sessions after restart](https://github.com/anomalyco/opencode/pull/35820) *(CLOSED)*  
   Durably records session lifecycle outcomes and recovers interrupted sessions on server restart. Blocks on #35826 for daemon election.

2. [#35826 — fix(cli): elect one managed daemon](https://github.com/anomalyco/opencode/pull/35826) *(OPEN)*  
   Prerequisite for session resume. Acquires a process-lifetime lock before service construction; concurrent candidates exit cleanly.

3. [#35817 — fix(core): preserve provider metadata namespaces](https://github.com/anomalyco/opencode/pull/35817) *(OPEN)*  
   Preserves complete provider metadata (e.g., Anthropic thinking signatures) by namespace, merging across start/delta/end events.

4. [#35497 — feat(core): make path-local instruction discovery durable](https://github.com/anomalyco/opencode/pull/35497) *(OPEN)*  
   Redesigns AGENTS.md discovery to use durable instructions instead of synthetic messages. Stacks on schema rename PR.

5. [#35188 — feat(core): implement models fallback](https://github.com/anomalyco/opencode/pull/35188) *(OPEN)*  
   Adds fallback model specification for agents. Community feature request that enables graceful degradation when primary models fail.

6. [#35793 — refactor(schema): apply session review decisions](https://github.com/anomalyco/opencode/pull/35793) *(OPEN)*  
   Large schema normalization: Session, SessionMessage, Agent, Skill, token/money contracts updated per July 7 review. Core V2 infrastructure change.

7. [#35818 — fix(core): skip non-vcs location watcher](https://github.com/anomalyco/opencode/pull/35818) *(OPEN)*  
   Skips `LocationWatcher` for locations without VCS metadata. Prevents unwanted events and watcher threads for non-Git projects.

8. [#34634 — feat(core): resolve v2 prompt attachments](https://github.com/anomalyco/opencode/pull/34634) *(CLOSED)*  
   Resolves file attachments before durable admission; inlines text/directories, materializes images as data URLs. Closes #34497.

9. [#35755 — fix(core): wait for plugin readiness](https://github.com/anomalyco/opencode/pull/35755) *(OPEN)*  
   Drains pending plugin updates before session execution reads plugin state. Prevents agent-not-found errors and stale plugin generations.

10. [#35796 — fix(tui): clear stale tool preparation state](https://github.com/anomalyco/opencode/pull/35796) *(OPEN)*  
    Fixes TUI bug where stale "pending" tool state overwrites completed server projections on reconnect. Adds regression test.

---

## Feature Request Trends

**V2 Parody with V1** dominates: file attachments, `@`-tagged references, `/move` command, optimistic queuing, and provider login flows (Copilot, xAI, Snowflake Cortex) are all missing from V2 and repeatedly requested. Users expect a seamless migration path.

**Durable AGENTS.md handling** — multiple requests (tracked in #34341) call for replacing synthetic message injection with a proper durable storage mechanism that survives compaction.

**Plugin ecosystem completeness** — skills registered via V2 plugins should be discoverable through standard commands (#33896); resource tools need porting once the V2 tool plugin API stabilizes (#34546).

**Cost transparency** — users want accurate token/cost tracking for auxiliary LLM calls (title generation, compaction) that currently go uncounted (#35781, #30706).

---

## Developer Pain Points

**macOS Terminal theming** remains the most frequent recurring frustration. Despite today's closures of several long-standing issues (#6823, #4461, #10054, #20584, #4721, #6923), the pattern of black-on-black or invisible text across different Mac hardware and terminal emulators suggests fundamental color handling issues that may need deeper architectural fixes.

**V2 instability and incomplete parity** — users migrating to V2 encounter broken features (move, attachments, provider logins, session list flashes, OAuth flows) that work perfectly in V1. The gap creates friction for early adopters and slows adoption.

**Enterprise/custom model integration** — GitHub Copilot Enterprise users with third-party models (#34030) and custom plugin registrations (#33896) face discoverability and authentication barriers. The plugin system's promise of extensibility isn't fully realized.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-08

## Today's Highlights

The community is actively addressing edge cases around retry semantics, extension loading performance, and provider compatibility. Key topics include a bug where auto-retry emits terminal agent_end mid-turn (#6410), interest in tiered extension preloading (#6360), and a proposal to add Eden AI as a first-class provider (#6403). The majority of activity is in issue triage and closing older items, with no new releases in the last 24 hours.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#6410 — Auto-retry emits terminal agent_end (willRetry: true) mid-turn](https://github.com/earendil-works/pi/issues/6410)** — `[CLOSED]` `[untriaged]`  
   When a transient error occurs with auto-retry enabled, `AgentSession` emits a full `agent_end` before `auto_retry_start`, causing downstream UIs to flash an idle/"done" state. Closed after 1 comment — likely fixed or deemed low risk, but the pattern is notable for debugging extension integrations.

2. **[#6360 — Defer extension loading: three preload modes (lazy / async / sync)](https://github.com/earendil-works/pi/issues/6360)** — `[CLOSED]` `[no-action]`  
   Proposal to replace eager loading with a three-tier strategy. 30 extensions at startup cause noticeable delay. This direction resonates broadly; community expected more discussion.

3. **[#6403 — Add Eden AI as a first-class provider](https://github.com/earendil-works/pi/issues/6403)** — `[CLOSED]` `[untriaged]`  
   Request to add Eden AI (OpenAI-compatible EU gateway) as a first-class provider, reusing existing infrastructure. Closed without action — likely deferred or merged into broader provider flexibility.

4. **[#6402 — Support opaque custom metadata in the JSONL session header](https://github.com/earendil-works/pi/issues/6402)** — `[CLOSED]` `[untriaged]`  
   Proposal to add optional `metadata` to v3 JSONL session header. Important for tooling and third-party integrations that need to attach custom context without breaking the session format.

5. **[#6395 — README /reload command description inconsistent](https://github.com/earendil-works/pi/issues/6395)** — `[OPEN]`  
   Documentation drift — `/reload` README lists themes but source code reloads keybindings, extensions, skills, prompts, etc. Small but confusing for new users.

6. **[#6406 — Read-only ~/.pi/agent fails every credential read](https://github.com/earendil-works/pi/issues/6406)** — `[CLOSED]` `[bug, untriaged]`  
   Pi attempts file locking even for read-only credential lookups, breaking on read-only disks. Workaround: move credentials. Locking should be exclusive to writes.

7. **[#6407 — --session-id with unknown id silently creates new session](https://github.com/earendil-works/pi/issues/6407)** — `[CLOSED]` `[bug, untriaged]`  
   Inconsistent behavior — `--session`/`--fork` error on unknown IDs, but `--session-id` silently creates a new one. Low severity but hazardous for automation.

8. **[#6404 — Documented shellCommandPrefix alias-loading pattern breaks on multi-line aliases](https://github.com/earendil-works/pi/issues/6404)** — `[CLOSED]` `[bug, untriaged]`  
   The `shellCommandPrefix` recommended by docs fails when aliases span multiple lines. New users hit this immediately — needs a robust documented pattern.

9. **[#6399 — moonshotai/Kimi-K2.7-Code via DeepInfra returns corrupted output](https://github.com/earendil-works/pi/issues/6399)** — `[CLOSED]` `[bug, untriaged]`  
   Pi mishandles this model/provider combo, producing corrupted output for trivial prompts. Same prompt works directly on DeepInfra — suggests a parsing/encoding issue.

10. **[#6400 — Pi often has issues finding extensions due to installation location](https://github.com/earendil-works/pi/issues/6400)** — `[CLOSED]` `[bug, untriaged]`  
    LLM doesn't know where npm/git-installed extensions actually live vs. documented locations. Fixed by PR #6405 updating documentation.

## Key PR Progress

1. **[#6405 — Update extensions documentation to explicit locations for npm/git installs](https://github.com/earendil-works/pi/pull/6405)** — `[CLOSED]`  
   Direct response to #6400. Adds explicit paths for npm and git extension installations. Practical fix for the most common "where is my extension?" confusion.

2. **[#6169 — Disable padding for assistant messages](https://github.com/earendil-works/pi/pull/6169)** — `[CLOSED]` `[inprogress]`  
   Closes #6168. Minor UI fix to remove unnecessary padding in assistant messages, improving readability in dense interactions.

3. **[#6026 — fix(tui): stabilize working status row](https://github.com/earendil-works/pi/pull/6026)** — `[CLOSED]` `[inprogress]`  
   Fixes flickering or instability in the TUI's "Working..." status indicator. Ref #5825. Important for UX during long-running tool calls.

4. **[#6030 — fix(coding-agent): print benchmark timings after TUI stop](https://github.com/earendil-works/pi/pull/6030)** — `[CLOSED]`  
   Closes #6029. Ensures benchmark output is cleanly printed after the TUI terminates, not interleaved with interactive output.

5. **[#5913 — Stable markdown working](https://github.com/earendil-works/pi/pull/5913)** — `[CLOSED]`  
   Continuation of TUI rendering stability work (ref #5825). Improves markdown rendering consistency during streaming.

6. **[#5846 — fix(tui): stabilize streaming code fence rendering](https://github.com/earendil-works/pi/pull/5846)** — `[CLOSED]`  
   Closes #5825. Fixes code fences that would break mid-render during streaming. Long-standing annoyance resolved.

7. **[#5711 — feat(coding-agent): add extension prompt guideline API](https://github.com/earendil-works/pi/pull/5711)** — `[CLOSED]`  
   Closes #5710. Adds API for extensions to provide prompt guidelines, enabling third-party tools to influence agent prompting.

8. **[#6175 — fix(coding-agent): emit session name changes to extensions](https://github.com/earendil-works/pi/pull/6175)** — `[CLOSED]` `[inprogress]`  
   Closes #6174. Extensions now receive events when session names change — critical for UIs or integrations that display session information.

9. **[#6063 — Extension stats](https://github.com/earendil-works/pi/pull/6063)** — `[CLOSED]`  
   Closes #6062. Adds tracking of extension statistics (calls, errors, latency) and fixes OSC garbage on benchmark exit. Useful for debugging extension performance.

10. **[#5756 — feat(coding-agent): Expose edit-diff for extensions](https://github.com/earendil-works/pi/pull/5756)** — `[CLOSED]`  
    Closes #5755. Extensions can now access edit diff details, enabling richer tooling for code review and validation.

## Feature Request Trends

- **Extension Loading Performance** (#6360): Strong interest in deferred/on-demand extension loading — 30 extensions cause observable startup delay.
- **Session Metadata Support** (#6402): Request for opaque custom metadata in JSONL headers for third-party tooling and session tracking.
- **Provider Extensibility** (#6403): Ongoing desire for "first-class" provider additions — signaled by Eden AI request, but pattern suggests broader provider flexibility is valued.
- **No-Session Mode** (#6401): Users want to spawn "no-session" agents even from within `-r` (read-only) mode, critical for third-party integrations.
- **Inline Settings Factories** (#6398): `main()` lacks a hook for custom settings — SDK supports it, but CLI harness does not.

## Developer Pain Points

- **Credential Locking on Read-Only Filesystems** (#6406): File locking for read-only operations breaks deployments with read-only config directories.
- **Silent Session Creation** (#6407): `--session-id` with unknown ID silently creates a new session — dangerous for automation and scripting.
- **Shell Alias Compatibility** (#6404): Official `shellCommandPrefix` pattern fails on multi-line aliases — affects all new users out of the box.
- **Model/Provider Corruption** (#6399): Certain provider/model combinations (DeepInfra + Kimi-K2.7-Code) produce corrupted output — suggests fragile provider-specific parsing.
- **Extension Location Confusion** (#6400): LLM cannot reliably find npm/git-installed extensions — fixed by updated documentation, but indicates deeper UX issue.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-08

## Today's Highlights

Three stable releases landed, with v0.19.7 as the headline — it strengthens the PR review pipeline with batch detection and red-flag pattern analysis. Community attention is focused on the multi-workspace daemon RFC (#6378), which has garnered 19 comments in just two days as users debate session isolation models. A notable gap was filled with the new `MessageDisplay` hook event (#6488), finally enabling mid-turn streaming observers for CLI and ACP consumers.

---

## Releases

Three releases published in the last 24 hours. The mainline v0.19.7 includes a significant CI/PR gate hardening contribution from contributor `pomelo-nwu`, adding batch detection, problem existence checks, and red-flag pattern matching to the triage workflow. Two nightly variants (v0.19.7-nightly and v0.19.6-preview.0) carry only a documentation update adding WeCom to the channels overview.

- **v0.19.7** — [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.7) | **Full Changelog**: Not provided (link truncated in source)
- **v0.19.7-nightly.20260708.394c1a289** — [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.7-nightly.20260708.394c1a289)
- **v0.19.6-preview.0** — [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.6-preview.0)

---

## Hot Issues (Top 10)

1. **#6378 — RFC: Support multiple workspaces in one `qwen serve` daemon**  
   *Author: doudouOUC | 19 comments*  
   A foundational design discussion proposing a 1-daemon-to-N-workspaces model with backward-compatible single-workspace fallback for existing clients. High engagement suggests this is a top-priority architectural request for power users.  
   [🔗 Issue #6378](https://github.com/QwenLM/qwen-code/issues/6378)

2. **#6264 — `/review` skill consumes large amount of tokens**  
   *Author: pumano | 8 comments*  
   Users report unexpectedly high token consumption when using the review skill. Screenshots show order-of-magnitude spikes. Pending triage, this could indicate an unbounded context or redundant diff inclusion.  
   [🔗 Issue #6264](https://github.com/QwenLM/qwen-code/issues/6264)

3. **#6312 — Tracking: Reduce per-session overhead on daemon session-creation path**  
   *Author: doudouOUC | 5 comments*  
   A performance tracking issue for the daemon, where each `session/new` or `session/load` re-runs synchronous I/O despite sharing an event loop. Directly related to the multi-workspace effort above.  
   [🔗 Issue #6312](https://github.com/QwenLM/qwen-code/issues/6312)

4. **#6298 — Shell tool fails on Windows when command produces stdout**  
   *Author: haomin1996 | 5 comments*  
   Windows-specific: `run_shell_command` pipes output through `cat`, which doesn't exist in `cmd.exe`. Closed with what likely was a cross-platform fix.  
   [🔗 Issue #6298](https://github.com/QwenLM/qwen-code/issues/6298)

5. **#6265 — `tool_search` invalidates LLM server KV-cache on every deferred-tool load**  
   *Author: Aleks-0 | 5 comments*  
   A performance bug where discovering a deferred tool via `tool_search` triggers unnecessary KV-cache invalidation. Labelled `welcome-pr`, suggesting maintainers see this as a good community contribution opportunity.  
   [🔗 Issue #6265](https://github.com/QwenLM/qwen-code/issues/6265)

6. **#6384 — Hard limit: 0 when env-configured model reserves full default context for output**  
   *Author: tanzhenxin | 5 comments*  
   Critical edge case: environment-configured models can set a zero hard limit if the entire default context window is reserved for output, causing immediate request failure.  
   [🔗 Issue #6384](https://github.com/QwenLM/qwen-code/issues/6384)

7. **#6318 — Unable to `/rewind` after `/compress` even when rewinding to non-compressed position**  
   *Author: fantasyz | 4 comments*  
   Session compression breaks the `/rewind` command, even when the target position precedes the compressed section. Flags a fundamental interaction design challenge between memory management commands.  
   [🔗 Issue #6318](https://github.com/QwenLM/qwen-code/issues/6318)

8. **#5176 — Allow sub-agent max parallel count setting with queue**  
   *Author: fantasyz | 4 comments | 1 👍*  
   A long-standing feature request (since June 16) to limit concurrent sub-agents and queue overflow tasks. Gain traction from local-LLM users with limited GPU memory.  
   [🔗 Issue #5176](https://github.com/QwenLM/qwen-code/issues/5176)

9. **#6488 — Feat: add MessageDisplay hook event for mid-turn streaming**  
   *Author: yanchenko | 3 comments*  
   Identifies a gap in the hook system: no event fires during assistant response streaming. All current hooks fire only after completion. A companion PR (#6489) is already open.  
   [🔗 Issue #6488](https://github.com/QwenLM/qwen-code/issues/6488)

10. **#6321 — `PreToolUse` hook `ask` permission is silently denied**  
    *Author: system0shock | 3 comments*  
    A documentation-vs-behavior discrepancy: returning `permissionDecision: "ask"` from a `PreToolUse` hook silently rejects the tool call instead of showing a user confirmation prompt.  
    [🔗 Issue #6321](https://github.com/QwenLM/qwen-code/issues/6321)

---

## Key PR Progress (Top 10)

1. **#6489 — feat(hooks): add MessageDisplay hook for mid-turn streaming**  
   *Author: yanchenko*  
   Implements the hook requested in #6488. Fires repeatedly during assistant response streaming, addressing a real gap for IDE and CLI consumers that need incremental output.  
   [🔗 PR #6489](https://github.com/QwenLM/qwen-code/pull/6489)

2. **#6492 — feat(sdk): add control request methods for effort, models, usage, context**  
   *Author: juhuan*  
   Consolidates four features in one PR: runtime effort tier switching, model toggle, usage queries, and context inspection — across CLI, Python SDK, and TypeScript SDK. Major SDK-level unification.  
   [🔗 PR #6492](https://github.com/QwenLM/qwen-code/pull/6492)

3. **#6491 — feat(sdk): expose transport and query options in both SDKs**  
   *Author: juhuan*  
   Adds `fork_session`, `max_tool_calls`, and other SDK options. Replaces 11 previously closed individual PRs per maintainer feedback — a clean consolidation.  
   [🔗 PR #6491](https://github.com/QwenLM/qwen-code/pull/6491)

4. **#6482 — feat(serve): Bound replay snapshot history**  
   *Author: doudouOUC*  
   Adds a byte-cap for live daemon session replay snapshots. Prevents unbounded memory growth and trims older replay when limits are exceeded. Directly supports the multi-workspace effort.  
   [🔗 PR #6482](https://github.com/QwenLM/qwen-code/pull/6482)

5. **#6416 — feat(cli): Add serve env isolation and total admission**  
   *Author: doudouOUC*  
   Phase 2a guardrails for multi-workspace sessions: runtime-local environment snapshots for `qwen serve`, workspace-scoped consumers, and ACP read-only env queries.  
   [🔗 PR #6416](https://github.com/QwenLM/qwen-code/pull/6416)

6. **#6486 — feat(cli): Add model toggle hotkey (Alt+S / Ctrl+F)**  
   *Author: Aleks-0*  
   Implements #6442: a configurable hotkey to switch between two models at runtime. Persists across turns and updates the header. A small but high-visibility UX improvement.  
   [🔗 PR #6486](https://github.com/QwenLM/qwen-code/pull/6486)

7. **#6493 — fix(web-shell): count daemon sessions in Daemon Status usage dashboard**  
   *Author: wenshao*  
   Fixes a discrepancy where Web Shell daemon sessions were not counted in the usage dashboard because it only read the persisted `usage_record.jsonl` file.  
   [🔗 PR #6493](https://github.com/QwenLM/qwen-code/pull/6493)

8. **#6446 — fix(channel): Relay ACP permission requests**  
   *Author: qqqys*  
   Routes ACP permission requests through channel chat instead of auto-approving. Channel users can approve/deny from the owning chat or thread. Critical for channel security.  
   [🔗 PR #6446](https://github.com/QwenLM/qwen-code/pull/6446)

9. **#6421 — fix(cli): bound live streaming-table pending height**  
   *Author: MikeWang0316tw*  
   Fixes three streaming-table rendering defects: scroll-to-top lock, stall-then-dump, and header flash. A follow-up to #6345 for terminal rendering stability.  
   [🔗 PR #6421](https://github.com/QwenLM/qwen-code/pull/6421)

10. **#6481 — fix(scripts): handle missing NPM dist-tags gracefully in release versioning**  
    *Author: qwen-code-dev-bot*  
    Fixes #6476: the scheduled release workflow crashed when no NPM dist-tag existed for a requested release channel. Now fails gracefully with a clear error.  
    [🔗 PR #6481](https://github.com/QwenLM/qwen-code/pull/6481)

---

## Feature Request Trends

1. **Multi-workspace daemon architecture** (#6378) — The dominant architectural topic. Users want a single `qwen serve` process to handle isolated workspaces, preserving session privacy and reducing resource overhead.

2. **Hooks & event system expansion** (#6488, #6321) — Demand for richer hook points, especially mid-turn streaming observers and proper `ask` permission handling.

3. **Model switching ergonomics** (#6442, #6052) — Users want per-project model overrides and hotkey toggles, reflecting multi-model workflows (e.g., cheap model for quick tasks, expensive model for complex ones).

4. **Sub-agent concurrency control** (#5176) — Local-LLM users need configurable parallel sub-agent limits with queue support, not just timeout-based backpressure.

5. **Channel channel improvements** (#6208, #6443) — WeCom and DingTalk channel requests indicate growing enterprise adoption for team-oriented deployments.

6. **Mobile/resource-constrained workflow** — Several issues touch on token efficiency (#6264, #6265, #6408) and session memory management (#6318, #6487), suggesting users are pushing Qwen Code into tighter resource budgets.

---

## Developer Pain Points

1. **Token management friction** — Three high-traffic issues (#6264, #6265, #6384) involve unexpected token or context consumption. The `/review` skill, `tool_search`, and environment-configured models all exhibit token-related bugs or inefficiency. This is the single most recurring developer frustration this week.

2. **Windows parity gaps** — While #6298 (shell tool failing on Windows) was closed, the sheer volume of Windows-related issues (#6334 extensions install failure, #6298) suggests platform parity is still incomplete.

3. **Session lifecycle confusion** — Issues around `/rewind` after `/compress` (#6318), stale memory indices after `/remember` (#6487), and plan-mode content leakage (#6237) point to a mental model mismatch between user expectations and session management internals.

4. **Debugging/observability gaps** — The request for mid-turn streaming hooks (#6488) and the `PreToolUse` "ask" denial (#6321) highlight that developers feel blind during agent execution — they can't observe what's happening until it's too late.

5. **Release pipeline fragility** — The automated release workflow failed (#6476) due to unhandled NPM dist-tag scenarios, and a late-arriving fix (#6481) was needed. While quickly addressed, this indicates CI/CD robustness could still be improved.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-08

## Today's Highlights

The project is now fully rebranded to **CodeWhale** with v0.8.67 as the canonical release; the legacy `deepseek-tui` npm package is deprecated. The v0.8.68 milestone is in active dogfood, with a new execution board and lane-based agent workflow system being stress-tested. A critical sub-agent detail panel freeze was fixed, and the TUI mouse-report leak on macOS was addressed.

## Releases

**v0.8.67** — CodeWhale rebranding release. The project, command, npm package, and release assets now use the name `CodeWhale`. The legacy `deepseek-tui` package receives no further updates. Users on v0.8.x are directed to `docs/REBRAND.md` for migration steps.

## Hot Issues

1. **[#2487 — "Turn stalled" freeze in yolo mode](https://github.com/Hmbown/CodeWhale/issues/2487)** — Operations in `yolo` mode freeze with no completion signal; `continue` does not resume. 20 comments, community frustration is high. Closed after extensive debugging.

2. **[#4092 — v0.8.68 execution board (canonical agent packet)](https://github.com/Hmbown/CodeWhale/issues/4092)** — The single entry point for all v0.8.68 work. Introduces lane-based triage with `lane-*` labels for queryable workflow routing. 10 comments, central coordination issue.

3. **[#4094 — Sub-agent detail panel empty/freezes TUI](https://github.com/Hmbown/CodeWhale/issues/4094)** — Opening the panel for a running worker shows blank UI and can freeze the terminal. Critical dogfood blocker. 4 comments, immediate fix landed.

4. **[#1812 — TUI freezes on Windows (crossterm poll)](https://github.com/Hmbown/CodeWhale/issues/1812)** — Complete unresponsiveness on Windows 11 with detailed logs and thread-state analysis. 11 comments, long-standing platform bug.

5. **[#3144 — Natural-language auto-review policy gate](https://github.com/Hmbown/CodeWhale/issues/3144)** — Proposal for a pre-push review gate inspired by Cursor's recent SDK work. 14 comments, reflects security-conscious community demand.

6. **[#1835 — IME deadlock on Windows (Chinese input)](https://github.com/Hmbown/CodeWhale/issues/1835)** — Input field completely unresponsive when using Chinese IME on Windows 10. 5 comments, affects CJK users heavily.

7. **[#2300 — Multi-model compatibility and Fleet loadout](https://github.com/Hmbown/CodeWhale/issues/2300)** — Request for better docs on provider/model routing and automatic Fleet selection. 8 comments, user-facing acceptance fixture.

8. **[#2261 — TUI crash with input leaking to PowerShell](https://github.com/Hmbown/CodeWhale/issues/2261)** — Process crashes during dialogue; keystrokes leak to the host terminal. 6 comments, Windows stability concern.

9. **[#2791 — Refactor command dispatch to strategy pattern](https://github.com/Hmbown/CodeWhale/issues/2791)** — Monolithic dispatch needs modular refactoring for v0.9.0. 7 comments, architectural improvement.

10. **[#1060 — "Stream stalled: no data received for 90s"](https://github.com/Hmbown/CodeWhale/issues/1060)** — Users encountering stream timeouts without clear error context. 5 comments, affects reliability perception.

## Key PR Progress

1. **[#4182 — Fix: populate sub-agent detail panel with live activity](https://github.com/Hmbown/CodeWhale/pull/4182)** — Direct fix for #4094. Adds bounded activity trail, tool call display, and completion summaries. Merged.

2. **[#4181 — Fix: Fleet setup role/profile roster editor](https://github.com/Hmbown/CodeWhale/pull/4181)** — Aligns Fleet setup modal with role/profile editing. Exposes model routes from all configured providers. Open, under review.

3. **[#4180 — Fix: normalize raw Ctrl+C byte for PTY quit-arm flow](https://github.com/Hmbown/CodeWhale/pull/4180)** — Handles raw ETX control bytes correctly in raw-mode sessions. Merged with regression tests.

4. **[#4163 — feat(workflows): v0.8.68 agent execution lanes and milestone sync](https://github.com/Hmbown/CodeWhale/pull/4163)** — Adds wave-based workflow files, playbook, and CI sync for milestone hygiene. Merged.

5. **[#4099 — 0.8.68 train: workflow correctness, TUI stability, modes & permissions](https://github.com/Hmbown/CodeWhale/pull/4099)** — Six-commit release train covering completion polling, cancellation, hotbar persistence, and TUI error handling. Merged.

6. **[#3902 — perf(tui): fix five render/input hot paths](https://github.com/Hmbown/CodeWhale/pull/3902)** — Addresses #3896–#3900: sidebar double-render, key-repeat bloat, cursor thrash, overlay redraw storm, and substructure rebuild. Open, comprehensive performance work.

7. **[#4098 — docs(constitution): add anti-polling rule for sub-agent waiting](https://github.com/Hmbown/CodeWhale/pull/4098)** — Proposes passive event-based waiting instead of wasteful peek-sleep loops. Open, community contribution from Mr-Moon121.

8. **[#4044 — fix(onboarding): localize dynamic welcome steps](https://github.com/Hmbown/CodeWhale/pull/4044)** — Localizes first-run welcome through `MessageId` registry. Adds sparse `zh-Hant` locale. Open.

9. **[#4045 — fix: edit_file UTF-8 fuzzy cursor panic](https://github.com/Hmbown/CodeWhale/pull/4045)** — Fixes panic when fuzzy matching on multibyte CJK characters. Merged.

10. **[#4088 — fix(tui): preserve native selection without mouse capture](https://github.com/Hmbown/CodeWhale/pull/4088)** — Leaves xterm alternate-scroll mode off when mouse capture is disabled. Merged, addresses #4026.

## Feature Request Trends

- **Agent workflow orchestration** — Multiple issues request structured delegation (parent → scout/RLM), lane-based execution, and sub-agent lifecycle observability (#4092, #4094, #4098).
- **Multi-model provider Fleet** — Users want automatic model routing per provider, per-profile loadout selection, and better docs for `vllm` vs `openai` provider differences (#2300, #4181).
- **Cache-maximal context management** — Topical discussion on re-reading active files instead of summarizing them (#528), and reducing repeated transcript/tool-output tokens for Codex parity (#2953, #2956).
- **Hotbar quick-action surface** — MMO-style 8-slot command bar, currently optional/hidden, with community demand for discoverability and easy customization (#2061, #2071, #2072).
- **Remote workbench setup** — Documented "15-minute VPS + Telegram bridge" setup for users outside China (#2964), reflects interest in detached/background operation.

## Developer Pain Points

- **Windows stability** — TUI freezes (`#1812`), IME deadlocks (`#1835`), input leakage to PowerShell (`#2261`), and mouse-report leaks (`#3063`). The Windows experience remains the top reliability concern.
- **Sub-agent transparency** — The sub-agent detail panel showing blank content during active work (`#4094`) frustrates power users who need real-time observability into delegation.
- **Stream/completion stalls** — "No completion signal" and "stream stalled 90s" errors (`#2487`, `#1060`) without clear recovery paths cause workflow interruption and lost work.
- **Token cost awareness** — Developers are increasingly conscious of input/output token bloat compared to Codex CLI (#2953, #2954, #2957). The tool-surface discipline and prompt slimming efforts directly address this pain.
- **Platform-specific input handling** — Raw-mode quirks on macOS (Ctrl+C, mouse capture, alternate scroll) require ongoing patchwork (`#4180`, `#4088`).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*