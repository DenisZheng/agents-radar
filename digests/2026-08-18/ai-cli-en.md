# AI CLI Tools Community Digest 2026-08-18

> Generated: 2026-08-18 00:51 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-18)

---

## 1. Ecosystem Overview

The AI CLI tools landscape shows **high velocity but divergent maturity**. All major tools shipped fixes or features in the last 24 hours except Kimi Code. A clear split exists between **enterprise-grade platforms** (Claude Code, Codex, Copilot CLI) investing heavily in observability, security, and multi-session orchestration, and **developer-experience-focused tools** (Gemini CLI, Qwen Code, Pi, OpenCode, DeepSeek TUI) prioritizing terminal UX, context management, and agent reliability. Windows stability remains a systemic weak point across multiple tools. The industry is converging on **agent orchestration**, **MCP standardization**, and **context-window governance** as the next competitive frontier.

---

## 2. Activity Comparison

| Tool | Issues (Hot) | PRs (24h) | Release Today | Release Notes |
|------|--------------|-----------|---------------|---------------|
| **Claude Code** | 10 (critical: Windows GPU crashes, cross-session regression) | 10 (mostly closed) | v2.1.234 | QoL: `CLAUDE_CODE_PROJECT_DIR_NAME`, `selection:clear` keybinding |
| **OpenAI Codex** | 10 (top: 195 👍 auto-resolve disable) | 14 | rust-v0.148.0-alpha.21 | Alpha cadence; 6-PR OTEL proxy stack, agents dashboard, 872k context |
| **Gemini CLI** | 10 (P1: subagent hangs, termination reason) | 10 | v0.56.0-nightly | SSR fixes: subagent termination, autocomplete, TUI hang, agent guard |
| **GitHub Copilot CLI** | 10 (MCP OAuth regressions, terminal regression) | 1 | — | No release; low merge velocity |
| **Kimi Code CLI** | 0 | 0 | — | No activity |
| **OpenCode** | 10 (endpoint retired 410, billing discrepancies) | 10 | — | Fixes: `--continue` injection, DB migration, SQLite WAL, MCP transforms |
| **Pi** | 10 (auto-compaction 100%+, XDG violation 39 👍) | 10 | — | Fixes: Anthropic refusal fallback, differential rendering, i18n, compaction events |
| **Qwen Code** | 10 (Windows Ctrl+V broken, context loss post-compress) | 10 | v0.21.13 | Web Shell: file attachments, conversation forking, SWE-bench validated |
| **DeepSeek TUI** | 10 (config fragmentation, flaky CI, agent schema) | 10 | v0.9.9 | Critical: shell-tool wedge fix, honest telemetry labeling, i18n spine |

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Agent/Subagent Orchestration** | Claude Code, Codex, Gemini CLI, Copilot CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI | Dashboard views (Codex `/agents`, Claude message queue), parent-child signaling, termination-reason fidelity (Gemini #22323), recursive delegation fixes (Codex #13491), Plan↔Build mode fluidity (OpenCode #7801) |
| **MCP Protocol Hardening** | Codex, Copilot CLI, OpenCode, Pi, Gemini CLI, DeepSeek TUI | OAuth auto-refresh (Codex #17265, Copilot #4480/#4439), stdio server lifecycle (Codex #38754), per-server trust config (OpenCode #40125), protected-resource metadata (Codex #39101), token refresh serialization (OpenCode #43074) |
| **Context/Compaction Governance** | Claude Code, Gemini CLI, Pi, Qwen Code, OpenCode, DeepSeek TUI | Auto-compaction triggers (Pi #6879, #8229), termination-reason preservation (Gemini #22323), compression reliability (Qwen #9320), token budget standardization (Pi #8275), background agent memory limits (Claude #81343) |
| **Cross-Session/Platform Continuity** | Claude Code, Codex, Copilot CLI, Qwen Code, Pi | Message queuing (Claude #50246 198 👍), mobile↔desktop handoff (Codex #37403), transcript portability (Qwen #9354), session resume reliability (Copilot #4514), cross-host export (Pi) |
| **Windows/WSL Parity** | Claude Code, Codex, Copilot CLI, Qwen Code, OpenCode, Gemini CLI | GPU process crashes (Claude #80444/#81341), WSL shell poisoning (Codex #25317), `--no-alt-screen` removal (Copilot #4509), Ctrl+V paste (Qwen #9061), ripgrep/MSIX (OpenCode #40623), Wayland browser (Gemini #21983) |
| **Enterprise Observability & Security** | Codex, Claude Code, Copilot CLI, Pi | OTEL proxy stack (Codex 6 PRs), capability dropping (Codex #39103), audit hooks (Claude #30692), compaction failure events (Pi #8241), policy fail-open (Copilot #4512) |

---

## 4. Differentiation Analysis

| Dimension | Enterprise/Platform Tools | Developer-Experience Tools |
|-----------|---------------------------|----------------------------|
| **Primary Focus** | **Claude Code, Codex, Copilot CLI** | **Gemini CLI, Qwen Code, Pi, OpenCode, DeepSeek TUI** |
| **Target User** | Enterprise teams, regulated environments, multi-developer workflows | Individual developers, power users, open-source contributors |
| **Technical Approach** | Heavy infrastructure investment: OTEL, sandboxing, policy engines, app-server architecture | Terminal-native UX: TUI polish, autocomplete, differential rendering, shell integration |
| **Agent Model** | Server-managed background agents (Codex dashboard, Claude subagents) | Local-first subagents with explicit invocation (Gemini, Pi, DeepSeek) |
| **Session Model** | Persistent, cloud-synced, multi-device (Codex remote, Copilot worktrees) | File-based transcripts, portable export (Qwen #9354, Pi append compaction) |
| **Extension/Plugin** | Marketplace with dependency resolution (Copilot #4487), guarded hooks (Claude) | Skill systems (Gemini, Pi), MCP transforms (OpenCode), federated marketplaces (DeepSeek) |
| **Differentiator** | **Compliance, observability, multi-tenant safety** | **Latency, hackability, terminal fidelity, local-first** |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum / Enterprise Maturity** | **OpenAI Codex**, **Claude Code** | Codex: 14 PRs/24h including 6-PR infra stack; Claude: 198 👍 on message queue, sustained architectural issues (A2A protocol). Both show dedicated platform teams. |
| **High Momentum / Rapid Iteration** | **Gemini CLI**, **Qwen Code**, **Pi**, **OpenCode**, **DeepSeek TUI** | Daily nightlies (Gemini, Qwen), 10+ PRs/day across all, active P1 bug fixes, transparent prioritization (P1/P2/P3 labels). |
| **Moderate Momentum / Platform Integration** | **GitHub Copilot CLI** | Low PR velocity (1/24h), but high-impact enterprise issues (org models, MCP OAuth). Tight GitHub ecosystem coupling. |
| **Low / No Activity** | **Kimi Code CLI** | Zero GitHub activity in 24h; unclear maintenance status. |

**Maturity Indicators:**
- **Codex** leads in **observability/security infra** (OTEL proxy, capability dropping, exec-server tracing).
- **Claude Code** leads in **workflow primitives** (message queue demand, container isolation examples, guard hooks).
- **Gemini CLI** leads in **evaluation infrastructure** (76 behavioral tests, 6 models, component-level evals).
- **Qwen Code** leads in **web/terminal fusion** (Web Shell composer, SWE-bench validation, HTML export fidelity).
- **Pi** leads in **extension API correctness** (hook timing, compaction events, turn-start dispatch).

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Agent orchestration is the new platform layer** | Every tool building dashboards, queues, parent-child signaling, termination fidelity | Invest in **agent lifecycle APIs**; expect standardization around ACP/MCP for interop. |
| **MCP is becoming the universal tool protocol** | 6/8 tools fixing OAuth, stdio lifecycle, trust config, token refresh | **Adopt MCP for tool integration**; avoid proprietary tool APIs. |
| **Context window management = reliability** | Auto-compaction bugs in Pi, Gemini, Qwen, OpenCode, DeepSeek; 872k tokens in Codex | **Demand compaction observability** (events, failure hooks, token budgets) before production use. |
| **Windows is the compatibility tax** | GPU crashes (Claude), WSL poisoning (Codex), alt-screen regression (Copilot), paste broken (Qwen), ripgrep (OpenCode) | **Validate Windows/WSL in CI**; prefer tools with native Windows investment (Codex, Copilot). |
| **Enterprise features migrating downmarket** | OTEL proxy (Codex), guard hooks (Claude), policy fail-open (Copilot), Vertex labels (OpenCode) | **Smaller teams gain enterprise-grade observability/security** without custom builds. |
| **Local-first vs. cloud-synced divergence** | Qwen/Pi/OpenCode: file transcripts, portable export; Codex/Copilot: app-server, remote resume | **Choose based on data sovereignty needs**; local-first enables air-gapped/offline work. |
| **Evaluation-driven development** | Gemini's 76-test eval suite, Qwen's SWE-bench/Terminal-Bench gates, Codex's flakiness gates | **Tools with public eval infrastructure** (Gemini, Qwen) signal higher regression safety. |

---

## Recommendation Summary

| If You Prioritize... | Best Fit |
|----------------------|----------|
| **Enterprise compliance, multi-tenant safety, observability** | **OpenAI Codex** (OTEL, sandboxing, exec-server tracing) or **Claude Code** (guard hooks, container isolation) |
| **Terminal UX, hackability, local-first workflows** | **Gemini CLI** (

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-18 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `fix(skill-creator): run_eval.py 0% recall` | Fixes the core evaluation harness: installs eval artifact as real skill, repairs Windows stream reading, trigger detection, and parallel workers. | Referenced in Issue [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍) — "description-optimization loop is currently optimizing against noise." Blocks skill quality iteration. | 🟢 Open |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Typographic quality control for generated documents: prevents orphan/widow lines, numbering misalignment, header stranding. | "Affects every document Claude generates. Users rarely ask for good typography but notice when it's bad." | 🟢 Open |
| 3 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` | OpenDocument (.odt/.ods) creation, template filling, parsing to HTML. MCP server integration via `pyxel-mcp`. | Triggers on "ODT", "ODS", "OpenDocument", "LibreOffice" — targets ISO-standard document workflows. | 🟢 Open |
| 4 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills: 5-dimension quality scoring (structure, examples, resources, triggers, security) + security audit (injection, secrets, permissions). | Addresses the "how do I know this skill is good?" gap. First automated quality gate for the marketplace. | 🟢 Open |
| 5 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing skill: Trophy model, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing. | Covers full stack — philosophy → CI integration. High demand for "test generation" seen in Issues. | 🟢 Open |
| 6 | **[#568](https://github.com/anthropics/skills/pull/568)** `servicenow` | Enterprise ServiceNow platform skill: ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, IntegrationHub. | Broad platform assistant, not narrow scripting. Recently updated (2026-08-12) — active enterprise interest. | 🟢 Open |
| 7 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` | Mechanical file verification → 4-dimension reasoning audit (correctness, completeness, consistency, safety) in damage-severity order. | "Universal — works with any project, any tech stack, any model." Quality gate pipeline proposal ([#1385](https://github.com/anthropics/skills/issues/1385)). | 🟢 Open |
| 8 | **[#525](https://github.com/anthropics/skills/pull/525)** `pyxel` | Retro game dev skill via `pyxel-mcp`: write → run_and_capture → inspect → iterate loop for Pyxel engine. | Niche but demonstrates MCP + skill composition pattern. Author is Pyxel creator (@kitao). | 🟢 Open |

> **Note**: PR comment counts show as "undefined" in source data; ranking weighs issue cross-references, update frequency, enterprise relevance, and recency.

---

## 2. Community Demand Trends — From Issues

| Rank | Theme | Evidence (Top Issues) | Signal Strength |
|------|-------|----------------------|-----------------|
| 1 | **Trust & Security Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍): Community skills distributed under `anthropic/` namespace impersonate official skills. | 🔴 Critical |
| 2 | **Org-Wide Sharing & Collaboration** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍): Manual .skill file sharing via Slack/Teams; need shared library or direct links. | 🟠 High |
| 3 | **Skill-Creator Tooling Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍): `run_eval.py` 0% trigger rate; [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) Windows fixes. | 🟠 High |
| 4 | **Quality Assurance Meta-Skills** | [#83](https://github.com/anthropics/skills/pull/83) (quality/security analyzers); [#1367](https://github.com/anthropics/skills/pull/1367) (self-audit); [#1385](https://github.com/anthropics/skills/issues/1385) (3-gate pipeline). | 🟠 High |
| 5 | **Enterprise/Platform Skills** | [#568](https://github.com/github.com/anthropics/skills/pull/568) ServiceNow; [#181](https://github.com/anthropics/skills/pull/181) SAP-RPT-1-OSS; [#1175](https://github.com/anthropics/skills/issues/1175) SharePoint security. | 🟡 Growing |
| 6 | **Testing & Code Quality Automation** | [#723](https://github.com/anthropics/skills/pull/723) testing-patterns; [#202](https://github.com/anthropics/skills/issues/202) skill-creator best practices. | 🟡 Growing |
| 7 | **Document Processing Fidelity** | [#514](https://github.com/anthropics/skills/pull/514) typography; [#12](https://github.com/anthropics/skills/issues/12) docx whitespace corruption; [#538](https://github.com/anthropics/skills/pull/538) PDF case-sensitivity. | 🟡 Steady |
| 8 | **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments): Expose skills as MCPs; [#525](https://github.com/anthropics/skills/pull/525) pyxel-mcp pattern. | 🟢 Emerging |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval fix | Unblocks all skill quality iteration; referenced in top bug issue (#556); Windows + parallel fixes bundled. |
| **[#1099](https://github.com/anthropics/skills/pull/1099)** / **[#1050](https://github.com/anthropics/skills/pull/1050)** | Windows compatibility | Two independent PRs fixing `claude.cmd` vs `claude` and encoding bugs — critical for Windows adopters. |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` | Implements the 3-gate pipeline from [#1385](https://github.com/anthropics/skills/issues/1385); universal, no deps. |
| **[#83](https://github.com/anthropics/skills/pull/83)** | `skill-quality-analyzer` / `skill-security-analyzer` | First automated marketplace quality gate; directly addresses trust issue [#492](https://github.com/anthropics/skills/issues/492). |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Most comprehensive testing skill proposed; aligns with "test generation" demand. |
| **[#568](https://github.com/anthropics/skills/pull/568)** | `servicenow` | Enterprise breadth (ITSM/ITOM/SecOps/SPM); recent updates show active maintainer. |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Solves universal pain point (every generated document); low complexity, high visibility. |
| **[#1538](https://github.com/anthropics/skills/pull/1538)** | Spec compliance fixes | Brings `template/` and another skill into spec conformance — repo hygiene. |
| **[#1595](https://github.com/anthropics/skills/pull/1595)** | `UIZZE` partner skill | Anti-UI-slop skill (800k+ real screens); very recent (Aug 17), signals partner ecosystem growth. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *trustworthy, enterprise-ready skill infrastructure*: reliable authoring tooling (skill-creator), automated quality/security gates, org-wide distribution, and platform-specific skills (ServiceNow, SAP, SharePoint) — all underpinned by a secure namespace model that prevents impersonation.**

---

# Claude Code Community Digest — 2026-08-18

---

## 1. Today's Highlights

- **v2.1.234 released** with two quality-of-life improvements: a new `CLAUDE_CODE_PROJECT_DIR_NAME` environment variable for custom per-project transcript directory names, and a `selection:clear` keybinding action to clear in-app selections.
- **Windows Desktop stability crisis deepens**: Multiple GPU-process crashes (0x060C201E) tied to MSIX packaging, CIG enforcement, and `vk_swiftshader.dll` are leaving the app unlaunchable until Repair — affecting both browser previews and external link clicks.
- **Cross-session messaging regressions** on Windows and Desktop apps: messages are silently dropped, held for approvals the UI never surfaces, or render in the target session but never reach the runtime input queue (regressions since 2.1.222/2.1.227).

---

## 2. Releases

### v2.1.234
| Change | Description |
|--------|-------------|
| `CLAUDE_CODE_PROJECT_DIR_NAME` (env var) | Optional variable allowing hosts that give each session its own config directory to choose a short name for the per-project transcript directory. |
| `selection:clear` keybinding | New keybinding action so a key can be bound to clear an in-app selection. |

---

## 3. Hot Issues

| # | Title | Status | Why It Matters | Community Reaction |
|---|-------|--------|----------------|-------------------|
| [#50246](https://github.com/anthropics/claude-code/issues/50246) | **Message queue mode** — queue messages instead of interrupting active tasks | CLOSED | Highly requested workflow improvement: lets users queue follow-ups mid-task without derailing current work. | 60 comments, **198 👍** — strongest community signal in this batch |
| [#80444](https://github.com/anthropics/claude-code/issues/80444) | **Windows Desktop 1.24012.1: fatal GPU-process crash (0x060C201E)** via in-app Browser tab; leaves MSIX unlaunchable until Repair | OPEN | Blocks Windows Desktop users entirely; reproduced on two driver versions; MSIX package enters `appxState=2` (corrupted). | 39 comments, 5 👍 — active investigation, multiple repros |
| [#28300](https://github.com/anthropics/claude-code/issues/28300) | **Multi-agent collaboration across machines (Agent-to-Agent protocol)** | OPEN | Foundational request for distributed agent workflows; enables modern software architectures. | 38 comments — sustained architectural interest |
| [#19649](https://github.com/anthropics/claude-code/issues/19649) | **Model frequently uses Bash tools (sed/grep) when builtin tools (Read/Grep) are better aligned** | OPEN | Wasteful token usage and slower execution; model prefers shell over native tools despite clear alignment. | 27 comments, **97 👍** — strong pain point for daily users |
| [#81341](https://github.com/anthropics/claude-code/issues/81341) | **Windows MSIX: CIG + vendor-signed `vk_swiftshader.dll` kills GPU process on every browser preview** (0x060C201E) | OPEN | Root cause for #80444/#85540: Microsoft-signed-only policy clashes with vendor-signed SwiftShader, causing deterministic GPU crash. | 21 comments, 3 👍 — technical deep-dive underway |
| [#86298](https://github.com/anthropics/claude-code/issues/86298) | **Desktop app (Windows): cross-session messages silently dropped** — held for approval UI never offers, then expire (~5 min) | OPEN | Regression since app 1.28929.0; breaks multi-session workflows; messages vanish without user action. | 13 comments, 1 👍 — regression confirmed |
| [#80094](https://github.com/anthropics/claude-code/issues/80094) | **macOS Desktop: filesystem MCP server unusable** — new schema never dispatched, old schema dropped at registration | OPEN | Blocks MCP filesystem integration on macOS Desktop entirely; both package generations affected. | 11 comments — macOS Desktop blocker |
| [#64568](https://github.com/anthropics/claude-code/issues/64568) | **macOS TUI: Pressing Esc in `/btw` mode rejects pending tool-use prompt instead of exiting mode** | OPEN | UX footgun: muscle memory for "exit mode" accidentally declines tool permissions. | 10 comments, 9 👍 — clear UX regression |
| [#86237](https://github.com/anthropics/claude-code/issues/86237) | **Desktop app: cross-session messages render in target UI but never reach runtime input queue** (regression 2.1.222 → 2.1.227) | OPEN | Messages appear delivered but are functionally lost; breaks inter-session communication. | 8 comments, 1 👍 — regression bisected |
| [#81343](https://github.com/anthropics/claude-code/issues/81343) | **Single background subagent balloons to 9.5 GiB in ~100s → global kernel OOM** (2.1.220, Linux, no swap) | OPEN | Memory leak in background Task tool (`run_in_background: true`); triggers host OOM kill. | 5 comments — severe resource regression |

---

## 4. Key PR Progress

| # | Title | Status | Description |
|---|-------|--------|-------------|
| [#87395](https://github.com/anthropics/claude-code/pull/87395) | `ralph-wiggum`: use `disable-model-invocation` so model can't self-invoke `/ralph-loop` | CLOSED | Fixes plugin security issue: frontmatter `hide-from-slash-command-tool: "true"` was unsupported; now uses proper mechanism to prevent autonomous loops. |
| [#72451](https://github.com/anthropics/claude-code/pull/72451) | Remove `statsig.anthropic.com` from `init-firewall.sh` | CLOSED | Hostname no longer resolves; caused devcontainer startup failures during firewall allowlist resolution. |
| [#79131](https://github.com/anthropics/claude-code/pull/79131) | Fix `validate-settings.sh` abort when no lowercase frontmatter keys match | OPEN | `grep` exit code 1 triggered `set -e` abort with no diagnostics; mixed-case/hyphenated keys silently skipped. |
| [#30692](https://github.com/anthropics/claude-code/pull/30692) | Add container isolation example with guard hook | CLOSED | New `examples/container/` with Podman/Docker setup + `guard-destructive-git` PreToolUse hook (catches force push, hard reset, `branch -D`, `rm -rf`, PR merges). |
| [#29284](https://github.com/anthropics/claude-code/pull/29284) | Docs: clarify `excludedCommands` requires `:*` suffix | CLOSED | Updates `settings-bash-sandbox.json` example and README: `"docker:*"` needed to match commands with args; bare `"docker"` matches only the command alone. |
| [#84004](https://github.com/anthropics/claude-code/pull/84004) | Fix plugin-dev: limit frontmatter parsing to opening YAML block | CLOSED | Range-based `sed` incorrectly parsed later `---` horizontal rules in Markdown body as frontmatter boundaries. |
| [#84003](https://github.com/anthropics/claude-code/pull/84003) | Fix scripts: propagate top-level failures | CLOSED | `.catch(console.error)` swallowed rejections; now returns failing process status while preserving error logs. |
| [#83999](https://github.com/anthropics/claude-code/pull/83999) | Fix scripts: validate `gh` flag values | CLOSED | Restricted `gh` wrapper previously allowed `--limit` without value, bypassing validation. |
| [#83995](https://github.com/anthropics/claude-code/pull/83995) | Fix scripts: validate label option values | CLOSED | `--add-label`/`--remove-label` without value caused unbound variable error (`set -u`); now validates upfront. |
| [#83992](https://github.com/anthropics/claude-code/pull/83992) | Fix plugin-dev: assert expected hook decision (`--expect allow|deny|ask`) | CLOSED | `test-hook.sh` treated allow/deny both as success; now verifies hook produces intended decision. |

---

## 5. Feature Request Trends

| Trend | Evidence (Issues) | Developer Signal |
|-------|-------------------|------------------|
| **Message queuing / non-interruptive workflows** | [#50246](https://github.com/anthropics/claude-code/issues/50246) (198 👍) | Highest-voted request: users want to queue follow-ups without stopping active tasks. |
| **Multi-agent / distributed agent protocols** | [#28300](https://github.com/anthropics/claude-code/issues/28300) (38 comments) | Architectural demand for Agent-to-Agent communication across machines. |
| **Model tool selection intelligence** | [#19649](https://github.com/anthropics/claude-code/issues/19649) (97 👍) | Model overuses Bash (`sed`/`grep`) vs. native `Read`/`Grep`/`Glob` — wastes tokens & time. |
| **Cross-session / multi-session reliability** | [#86298](https://github.com/anthropics/claude-code/issues/86298), [#86237](https://github.com/anthropics/claude-code/issues/86237), [#85888](https://github.com/anthropics/claude-code/issues/85888) | Multiple regressions: messages dropped, approvals never surfaced, UI renders but runtime never receives. |
| **Permission prompt consistency across surfaces** | [#73325](https://github.com/anthropics/claude-code/issues/73325), [#83567](https://github.com/anthropics/claude-code/issues/83567) | Key `1` = Approve in CLI but Deny in Windows Desktop; digit for "No" shifts between 2/3-option variants. |
| **Background agent resource controls** | [#81343](https://github.com/anthropics/claude-code/issues/81343) (9.5 GiB OOM) | Need memory limits / monitoring for `run_in_background` subagents. |
| **Skill system fixes** | [#87191](https://github.com/anthropics/claude-code/issues/87191), [#87113](https://github.com/anthropics/claude-code/issues/87113), [#87159](https://github.com/anthropics/claude-code/issues/87159) | Entire multi-language bundles loaded unnecessarily; stacked slash-skills only load first; failing preambles silently abort. |

---

##

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-18

---

## 1. Today's Highlights

The team shipped a significant batch of infrastructure PRs: a 6-part OTEL proxy stack to route telemetry through enterprise proxies, a new `codex agents` dashboard command and TUI view for managing background tasks, and a security hardening that drops all Linux capabilities in sandboxed processes. GPT-5.6 context windows were raised to 872k tokens. On the issue side, the top-voted request (195 👍) asks for a setting to disable the 60-second auto-resolve on confirmation prompts, and a long-standing MCP OAuth token refresh bug remains unresolved.

---

## 2. Releases

**rust-v0.148.0-alpha.21** — Alpha release; no changelog provided in the feed. This continues the rapid alpha cadence leading toward the next stable CLI.

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#28969](https://github.com/openai/codex/issues/28969) | **Add setting to disable 60s auto-resolve for questions** | The aggressive auto-confirm timeout breaks workflows that need human review; 195 upvotes make this the loudest ask. | 79 comments · 195 👍 |
| [#17265](https://github.com/openai/codex/issues/17265) | **MCP OAuth tokens not auto-refreshed** | Stored refresh tokens are ignored, causing silent auth failures on routed MCP servers. | 31 comments · 57 👍 |
| [#37403](https://github.com/openai/codex/issues/37403) | **macOS Desktop: “already has an active writer” after remote resume** | Regression from Aug 7 update breaks mobile→desktop handoff for remote control threads. | 21 comments · 17 👍 |
| [#15723](https://github.com/openai/codex/issues/15723) | **Background subagents don’t wake calling agent** | Completion of forked workers isn’t signaled, stalling parent orchestration. | 18 comments · 8 👍 |
| [#17793](https://github.com/openai/codex/issues/17793) | **Backspace deletes multiple characters in TUI** | Core input regression making prompting error-prone on Linux/Kitty. | 16 comments · 5 👍 |
| [#23418](https://github.com/openai/codex/issues/23418) | **Mobile remote worktree thread missing from Desktop sidebar** | Project/thread association gap; thread exists locally but invisible in UI. | 12 comments · 4 👍 |
| [#13491](https://github.com/openai/codex/issues/13491) | **Forked worker inherits parent intent as instruction** | Recursive delegation loop when subagent misreads context. | 10 comments · 11 👍 |
| [#33282](https://github.com/openai/codex/issues/33282) | **Auto-approval mode not inherited for worktree tasks** | Permission model inconsistency between local and worktree sessions. | 9 comments · 5 👍 |
| [#25317](https://github.com/openai/codex/issues/25317) | **Windows WSL shell poisoned after reboot** | Stale `CODEX_HOME/tmp/arg0` path held by live app-server; blocks WSL launches. | 8 comments · 3 👍 |
| [#38754](https://github.com/openai/codex/issues/38754) | **Windows: local stdio MCP servers repeatedly spawned, not reaped** | Resource leak per turn; breaks Browser, Chrome, Computer Use tools. | 7 comments · 2 👍 |

---

## 4. Key PR Progress (Last 24h)

| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#39114](https://github.com/openai/codex/pull/39114) | Add `codex agents` dashboard command | CLI/U/DX | New entry point to view/manage background agents without creating a session. |
| [#39094](https://github.com/openai/codex/pull/39094) | Add agents overview dashboard to TUI | TUI | Full-screen `/agents` view with search, grouping, live subagent status. |
| [#39112](https://github.com/openai/codex/pull/39112) | Make agents overview an interactive task dashboard | TUI | Start/stop/rename tasks, open root sessions directly from dashboard. |
| [#39113](https://github.com/openai/codex/pull/39113) | Surface interactive requests in realtime conversations | Realtime/App | Mirrors approval/elicitation prompts into active realtime sessions. |
| [#39092](https://github.com/openai/codex/pull/39092) | Add `codex queue --thread --message` | CLI/Server | Enqueue messages to existing sessions via app-server API. |
| [#39103](https://github.com/openai/codex/pull/39103) | Drop capabilities from Linux sandbox processes | Security | `--cap-drop ALL` enforced; inner stage verifies empty cap sets before exec. |
| [#39102](https://github.com/openai/codex/pull/39102) | Raise GPT-5.6 max context window to 872k tokens | Model/Infra | Applies to `gpt-5.6-sol/terra/luna` and Bedrock equivalents. |
| [#39101](https://github.com/openai/codex/pull/39101) | Update `rmcp` to 3.1.2 | MCP/Protocol | Native JSON-RPC decoding, OAuth protected-resource metadata, preserves `input_required` metadata. |
| [#39091–#39105](https://github.com/openai/codex/pull/39105) | **OTEL Proxy stack (6 PRs)** | Observability/Enterprise | Proxy-aware async/blocking transports, custom CA support, Statsig/Sentry routed through policy, reqwest removed from `codex-otel`. |
| [#39100](https://github.com/openai/codex/pull/39100) | Avoid redundant terminal size queries | Performance | Caches screen size during history insertion; reduces TUI latency. |
| [#39098](https://github.com/openai/codex/pull/39098) | Trace exec-server requests end-to-end | Observability | Spans from queue receipt through dispatch/response; captures policy callback outcomes. |
| [#39115](https://github.com/openai/codex/pull/39115) | Remove experimental thread config endpoint | Cleanup | Removes `experimental_thread_config_endpoint` from config model/schema. |

---

## 5. Feature Request Trends

1. **Agent/Subagent Orchestration** — Dashboard views (`/agents`, `codex agents`), queueing messages to running sessions, parent/child signaling, and recursive delegation fixes.
2. **MCP Reliability** — OAuth auto-refresh, stdio server lifecycle (spawn/reap), protected-resource metadata, and Windows-specific transport hardening.
3. **Cross-Surface Continuity** — Mobile↔Desktop↔CLI thread handoff, remote control resume, project/thread association in sidebars, worktree permission inheritance.
4. **TUI/CLI Polish** — Input handling (backspace), terminal title integration, collapsible code snippets, filter persistence in `/resume`.
5. **Enterprise Observability** — Full OTEL proxy support, custom CAs, Sentry feedback routing, exec-server tracing.
6. **Sandbox Security** — Capability dropping, auto-review prefix rule guidance fixes.
7. **Model Context Scaling** — 872k token windows for GPT-5.6 family; Bedrock parity.

---

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Evidence |
|------------|----------|
| **Aggressive auto-confirm** | #28969 (195 👍) — 60s timeout forces unwanted approvals; no off switch. |
| **MCP auth fragility** | #17265 (57 👍) — Refresh tokens stored but unused; manual re-auth required. |
| **Remote/desktop sync regressions** | #37403, #23418, #28238 — Mobile→desktop handoff broken; worktree dropdown missing on remote projects. |
| **Subagent communication gaps** | #15723, #13491 — Parents not notified of completion; intent inheritance causes loops. |
| **Windows/WLS instability** | #25317, #38754, #38518 — Stale paths, MCP process leaks, disk read storms on conversation switch. |
| **TUI input bugs** | #17793 — Backspace over-deletes; #36010 — `/resume` filter resets unexpectedly. |
| **Permission model leaks** | #33282 — Auto-approval not inherited in worktrees; #28238 — Remote composer lacks worktree option. |
| **Documentation drift** | #39085 — Auto-review docs recommend unsafe prefix rules as “safe” examples. |

---

*Generated from GitHub data (openai/codex) for 2026-08-18. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-18

---

## 1. Today's Highlights
The SSR Agent squad shipped a wave of targeted fixes addressing long-standing P1/P2 bugs: subagent termination-reason preservation (#22323), autocomplete UX (#23954), TUI initialization hangs (#21477), and a regression where subagents ran despite `agents: disabled` (#22093). Meanwhile, core engineering continues hardening the Auto Memory pipeline (redaction, retry loops, inbox quarantine) and investigating AST-aware tooling for deeper codebase comprehension.

---

## 2. Releases
**v0.56.0-nightly.20260817.g9a15c45fb**  
- **SSR Agent Fix #21911**: Added `composite` flag to `packages/cli/tsconfig.json` to resolve type-checking issues in the SSR prototype.  
[Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260816.g2a87e7be1...v0.56.0-nightly.20260817.g9a15c45fb)

---

## 3. Hot Issues (Top 10 by Community Signal)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after `MAX_TURNS` reports `GOAL` success | Masks real failures; breaks trust in agent delegation. **P1, 12 comments, 2 👍** | Active retesting; fix merged in #28815 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs indefinitely | Blocks all delegated work; users must disable subagents. **P1, 8 comments, 8 👍** | High impact; workstream-rollup tracking |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) Robust component-level evaluations | Scaling behavioral evals (76 tests, 6 models) for regression safety. **P1, 7 comments** | EPIC tracking; eval infra investment |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) Assess AST-aware file reads/search/mapping | Potential turn/token reduction via precise AST navigation. **P2, 7 comments, 1 👍** | Investigation phase; tilth/glyph candidates |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini underuses skills/sub-agents | Developer frustration: explicit invocation required. **P2, 6 comments** | Prompt/skill discovery improvements needed |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory retries low-signal sessions indefinitely | Wastes quota; clutters inbox. **P2, 5 comments** | Fix in progress (extraction agent logic) |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Deterministic redaction & reduced Auto Memory logging | Security: secrets enter model context before redaction. **P2, 4 comments** | Architecture-level fix required |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell command stuck at “Waiting input” post-completion | Frequent UX breakage; simple commands hang. **P1, 4 comments, 3 👍** | Core shell execution bug |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) Browser agent: session takeover & lock recovery | Persistent profiles fail fast; no auto-recovery. **P3, 4 comments** | Resilience enhancement |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent fails on Wayland | Linux/Wayland blocker for browser automation. **P1, 4 comments, 1 👍** | Platform-specific; needs retesting |

---

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| [#28870](https://github.com/google-gemini/gemini-cli/pull/28870) | Open | **P1**: Emit `tool_call` (status `pending`) before `session/request_permission` — fixes ACP protocol violation (#21783). |
| [#28869](https://github.com/google-gemini/gemini-cli/pull/28869) | Open | **P2**: Fix gVisor `runsc` host network resolution for VSCode extension connectivity (#21331). |
| [#28868](https://github.com/google-gemini/gemini-cli/pull/28868) | **Closed** | **P2**: Append trailing space to executable autocomplete suggestions — closes #23954. |
| [#28867](https://github.com/google-gemini/gemini-cli/pull/28867) | **Closed** | **P2**: Guard `loadBuiltInAgents()` behind `agents.enabled` check — closes regression #22093 (v0.33.0+). |
| [#28866](https://github.com/google-gemini/gemini-cli/pull/28866) | Open | Ignore `.gemini/` by default in file search/watch — prevents chokidar noise in home dir workspaces (#28826). |
| [#28865](https://github.com/google-gemini/gemini-cli/pull/28865) | **Closed** | **P3**: Add Vertex AI regions doc link to authentication guide — closes #28050. |
| [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) | Open | Extension consent for env changes + sanitize runtime-altering vars — supply-chain hardening. |
| [#28815](https://github.com/google-gemini/gemini-cli/pull/28815) | **Closed** | **P1**: Preserve original termination reason (`MAX_TURNS`, `TIMEOUT`) during subagent grace recovery — closes #22323. |
| [#28812](https://github.com/google-gemini/gemini-cli/pull/28812) | **Closed** | **P1**: Add execution timeouts to `getProcessInfo()` — prevents indefinite TUI hang on bare Linux (#21477). |
| [#27863](https://github.com/google-gemini/gemini-cli/pull/27863) | Open | **P1**: Prioritize `_toolDisplayName` → `_toolName` → fallback in `getDisplayTitle()` — fixes structured tool UI (#23018). |

---

## 5. Feature Request Trends
1. **AST-Aware Tooling** (#22745, #22746): Community and maintainers exploring `tilth`/`glyph` for precise symbol-level reads, reducing token waste and misaligned edits.
2. **Subagent Observability** (#22598, #21763): Demand for `/chat share` to include subagent trajectories and `/bug` reports to capture subagent context.
3. **Memory System Maturity** (#26516, #26522, #26523, #26525): Four linked issues targeting redaction safety, retry loops, inbox quarantine, and patch validation — signals production hardening.
4. **Agent Self-Awareness** (#21432): Users expect accurate CLI flag/hotkey/self-execution knowledge from the agent itself.
5. **Destructive Action Guardrails** (#22672): Requests for built-in discouragement of `git reset --force`, DB drops, etc., without explicit confirmation.

---

## 6. Developer Pain Points (Recurring Themes)
- **Subagent Reliability**: Hangs (#21409), false success (#22323), permission bypass (#22093), missing context in logs (#21763) — top frustration vector.
- **Shell/Process Execution**: “Waiting input” ghost hangs (#25166), TUI init stalls (#21477), Wayland browser failures (#21983), tmp-script litter (#23571).
- **Tool/Context Explosion**: 400+ tools → 400 errors (#24246); model overwhelms context with unused tools.
- **Terminal UX Polish**: Autocomplete missing trailing space (#23954), resize flicker (#21924), external editor corruption (#24935).
- **Auto Memory Opacity**: Silent retries, secret leakage risk, unverified patches — trust concerns for background learning.

---

*Generated from `google-gemini/gemini-cli` GitHub data (2026-08-18).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-18

## Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker shows **29 active items**, with a cluster of **MCP authentication regressions** (GitLab, Atlassian) affecting v1.0.79+, a **terminal regression** from the removal of `--no-alt-screen`, and growing friction around **long-running session management** (compaction loops, stale connections, instruction reload). Enterprise users report **organization-enabled models missing** from the catalogue.

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#1481](https://github.com/github/copilot-cli/issues/1481)** SHIFT+ENTER executes prompt instead of line break | Violates universal chat UX convention; forces `CTRL+ENTER` for newlines. **Closed** but 28 comments show strong sentiment. | 👍 17 · 28 comments |
| **[#4390](https://github.com/github/copilot-cli/issues/4390)** Org-enabled models (Claude Sonnet 5/Opus 5, Kimi K3) missing from catalogue | Blocks Copilot Business/Enterprise users from using approved models; reports “disabled by your organization” incorrectly. | 👍 7 · 8 comments |
| **[#4480](https://github.com/github/copilot-cli/issues/4480)** Atlassian MCP OAuth fails with RFC 8414 issuer mismatch (regression from 1.0.71) | Breaks Atlassian MCP integration entirely post-upgrade; issuer validation mismatch during OAuth discovery. | 👍 6 · 5 comments |
| **[#4439](https://github.com/github/copilot-cli/issues/4439)** GitLab MCP OAuth metadata rejected (RFC 8414 issuer mismatch) | Same root cause as #4480; affects GitLab Self-Managed MCP via Dynamic Client Registration. **Closed** (likely hotfixed). | 👍 3 · 5 comments |
| **[#4509](https://github.com/github/copilot-cli/issues/4509)** `--no-alt-screen` silently removed, alt-screen now unavoidable and broken | Long-standing regression (#1799, #2334); removes escape hatch for terminal multiplexer/tmux users. No deprecation notice. | 👍 1 · 0 comments |
| **[#4506](https://github.com/github/copilot-cli/issues/4506)** Memory-pressure watchdog force-compacts at 23% context, recovers 0.003% tokens, loops to OOM | Aggressive compaction triggered by process memory, not context pressure; destroys conversation utility. | 👍 0 · 0 comments |
| **[#4211](https://github.com/github/copilot-cli/issues/4211)** BigInt in structured MCP response causes `TypeError: Do not know how to serialize a BigInt` | MCP servers returning large integers crash the CLI; aborts all ongoing tasks. Protocol compliance gap. | 👍 2 · 4 comments |
| **[#4512](https://github.com/github/copilot-cli/issues/4512)** MCP registry policy fetch fails closed, blocks **all** non-default MCP servers (including local stdio) | Policy fetch failure = total MCP lockout, even for user-defined local servers. No override or fail-open path. | 👍 0 · 0 comments |
| **[#4508](https://github.com/github/copilot-cli/issues/4508)** Feature request: reload `.github/instructions` mid-session | Long-running sessions (200+ compactions) never pick up instruction updates; forces session restart. | 👍 0 · 0 comments |
| **[#4487](https://github.com/github/copilot-cli/issues/4487)** Plugin dependency specification & resolution (inter/intra marketplace) | Ecosystem parity gap vs. Claude Code; no way to declare or auto-install plugin dependencies. | 👍 0 · 0 comments |

---

## Key PR Progress
| PR | Summary | Status |
|----|---------|--------|
| **[#4510](https://github.com/github/copilot-cli/pull/4510)** Remove GitHub Copilot CLI documentation from README | Strips installation/usage docs from repo README; likely migrating to docs site. Minor, no code change. | Open |

*Only 1 PR updated in the last 24h — low merge velocity.*

---

## Feature Request Trends
1. **MCP Protocol Hardening** — OAuth discovery fixes (RFC 8414), BigInt serialization, `structuredContent` precedence, policy fail-open, stdio container lifecycle (#4480, #4439, #4211, #4515, #4512, #4461).
2. **Session Durability & Control** — Resume reliability, fork recovery, compaction tuning, mid-session instruction reload, AIC accuracy (#4514, #4505, #4506, #4508, #4511).
3. **Model Selection Parity** — Org model visibility, `contextTier` via ACP, auto-model reasoning level, cross-family agent model inheritance (#4390, #4275, #4459, #2950, #4457).
4. **Plugin Ecosystem Maturity** — Dependency graph, marketplace cache keyed by `ref`, `enabledPlugins` in non-interactive mode (#4487, #4513, #4507).
5. **Terminal & Accessibility** — Scrollback navigation, alt-screen opt-out, keyboard shortcuts (SHIFT+ENTER), theme persistence, session picker contrast (#4313, #4509, #1481, #4485, #4455).

---

## Developer Pain Points
- **MCP Auth Fragility**: Multiple OAuth regressions in v1.0.79+ break GitLab/Atlassian integrations; strict RFC 8414 enforcement without fallback.
- **Terminal Regression**: Removal of `--no-alt-screen` breaks tmux/screen workflows; no replacement flag or config.
- **Session Instability**: Force-compaction loops at low context usage, stale connection IDs on resume, no mid-session config reload.
- **Enterprise Model Drift**: Organization-approved models invisible in CLI catalogue; “disabled” errors despite policy allow.
- **Plugin Gaps in Non-Interactive Mode**: Repository-level `enabledPlugins` ignored in `copilot -p`; marketplace cache ignores `ref`; no dependency resolution.
- **Long-Running Session Neglect**: Instructions never refresh, AIC underreports, compaction destroys context, no graceful recovery.

---

*Digest generated from github.com/github/copilot-cli data as of 2026-08-18 00:00 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-18

## Today's Highlights
Multiple critical endpoint and billing issues surfaced today: the legacy inference endpoint (`https://opencode.ai/inference/v1`) has been retired (410 Gone), causing widespread connection failures, while users report significant discrepancies between actual spend and dashboard usage percentages. Concurrently, a regression in `opencode run --continue` injects prompts into active sessions from other instances, and DeepSeek Flash v4 enters infinite reply loops on Alpine Linux.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#43105](https://github.com/anomalyco/opencode/issues/43105)** Legacy inference endpoint retired (410 Gone) | Breaks all CLI tools using `https://opencode.ai/inference/v1`; users cannot connect to any model via this endpoint | 15 comments, closed but indicates widespread breakage |
| **[#43146](https://github.com/anomalyco/opencode/issues/43146)** DeepSeek Flash v4 infinite reply loop | Model enters endless loop repeating same sentence on Alpine Linux; renders model unusable | 4 comments, newly opened, high severity |
| **[#43009](https://github.com/anomalyco/opencode/issues/43009)** Incorrect charging / billing discrepancies | Users report charges far exceeding expectations (e.g., $0.38 for single Go request); dashboard percentages don't match actual spend | 6 comments, 1👍, closed but financial impact |
| **[#43148](https://github.com/anomalyco/opencode/issues/43148)** USD consumption vs. usage % mismatch | Dashboard shows 24% monthly usage but actual spend is $3.65 vs. projected ~$14.40; billing transparency concern | 1 comment, newly opened, compliance-tagged |
| **[#43133](https://github.com/anomalyco/opencode/issues/43133)** `--continue` injects into active session from another instance | Silent prompt injection into foreign conversation; data integrity and concurrency bug | 1 comment, PR #43140 opened to fix |
| **[#43102](https://github.com/anomalyco/opencode/issues/43102)** "Endpoint unavailable" on new sessions | Upstream request fails for multiple models; suggests broader gateway degradation | 4 comments, open |
| **[#7801](https://github.com/anomalyco/opencode/issues/7801)** Plan Mode → Build Mode auto-switch | Highly upvoted (32👍) feature request for seamless mode transition; UX improvement for planning workflows | 11 comments, 32👍, open since Jan |
| **[#33027](https://github.com/anomalyco/opencode/issues/33027)** MCP tools connected but not exposed to agent | MCP server registers 6 tools via `tools/list` but agent cannot see them; breaks MCP integration | 8 comments, 3👍, open since June |
| **[#42880](https://github.com/anomalyco/opencode/issues/42880)** opencode generates .so files at high velocity in `/tmp` | SSD wear concern; workaround requires ramdisk + cron job; indicates resource leak | 2 comments, open |
| **[#40623](https://github.com/anomalyco/opencode/issues/40623)** Grep tool fails on Windows (MSIX PowerShell 7) | ripgrep extraction broken by `PSModulePath`; failures cached until restart; blocks Windows users | 3 comments, open since Aug 5 |

---

## Key PR Progress

| PR | Type | Description |
|----|------|-------------|
| **[#43140](https://github.com/anomalyco/opencode/pull/43140)** | Bug fix | Fix `--continue` injecting into in-flight sessions: adds liveness check before session selection (fixes #43133) |
| **[#43142](https://github.com/anomalyco/opencode/pull/43142)** | Bug fix | Support older `opencode-next.db` schemas in V2 importer; tolerates missing project/session columns (fixes #43139, #41341) |
| **[#43141](https://github.com/anomalyco/opencode/pull/43141)** | Bug fix | Disable SQLite WAL on network filesystems (NFS, SMB/CIFS, 9P, FUSE) via `statfs` detection; adds `OPENCODE_DB_WAL` override |
| **[#43136](https://github.com/anomalyco/opencode/pull/43136)** | Bug fix | Settle pending Anthropic tool calls when `message_stop` arrives without `content_block_stop`; prevents malformed tool execution |
| **[#43135](https://github.com/anomalyco/opencode/pull/43135)** | Bug fix | Select dedicated `deepseek()` adapter for Azure DeepSeek deployments instead of generic Azure adapter (fixes #43106) |
| **[#43125](https://github.com/anomalyco/opencode/pull/43125)** | Feature | Expose MCP server transforms to plugins: `list`, `get`, `set`, `update`, `remove` for Effect/Promise plugins |
| **[#43124](https://github.com/anomalyco/opencode/pull/43124)** | Bug fix | Preserve validated OpenCode session header when legacy Zen route forwards to managed inference gateway |
| **[#43129](https://github.com/anomalyco/opencode/pull/43129)** | Feature | Add Vertex request labels (billing labels) to Vertex Gemini provider options; related to #41932 |
| **[#40125](https://github.com/anomalyco/opencode/pull/40125)** | Feature | Per-MCP-server trust config via fingerprint pinning & `caFile`; avoids global `insecure: true` (closes #40111) |
| **[#43074](https://github.com/anomalyco/opencode/pull/43074)** | Bug fix | Serialize MCP token refresh to prevent concurrent clients from invalidating rotating OAuth refresh tokens |

---

## Feature Request Trends
1. **Session lifecycle management** — Unarchive/restore archived sessions (#24153, 11👍), better `--continue` semantics (#43133), pause/resume on rate limits (#43126)
2. **Plan ↔ Build mode fluidity** — Auto-switch from Plan to Build when plan is approved (#7801, 32👍)
3. **MCP integration depth** — Per-server trust config (#40125), tool transforms for plugins (#43125), fix tool exposure (#33027)
4. **Windows parity** — Path handling (#36681), cmdlet permissions (#36696), ripgrep/MSIX fixes (#40623), postinstall binary copy (#41370)
5. **Mobile/responsive UI** — Horizontal tab bar unusable on mobile (#38974), reasoning-effort select overlaps send button (#42834)
6. **Billing transparency** — Usage % vs. actual spend reconciliation (#43148, #43009), Vertex request labels (#43129)

---

## Developer Pain Points
- **Endpoint instability**: Legacy endpoint retirement without clear migration path; "endpoint unavailable" errors on new sessions
- **Billing opacity**: Dashboard percentages diverge from actual charges; no clear explanation of pricing tiers
- **Model regressions**: DeepSeek Flash v4 infinite loops; Big Pickle stops mid-response (#22861)
- **MCP fragility**: Tools connect but don't expose; token refresh races; schema warnings from `schemars` uint formats (#31002)
- **Windows second-class**: Path config undocumented, cmdlet permissions broken, MSIX PowerShell breaks ripgrep, postinstall leaves 479-byte stub
- **Session concurrency bugs**: `--continue` hijacks active sessions; New Workspace stalls indefinitely (#36731)
- **Resource leaks**: `.so` file spam in `/tmp` threatening SSD lifespan (#42880)

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-18

## 1. Today's Highlights
The Pi team closed **14 issues and merged 11 PRs** in the last 24 hours, focusing on provider catalog hygiene (removing deprecated models, aligning Qwen/GLM catalogs), TUI stability fixes (full-render crashes, theme invalidation, differential rendering), and extension hook correctness (`agent_settled` vs `agent_end`). A critical auto-compaction bug (#6879, 18 comments) remains open — context windows exceed 100% until provider rejection, affecting long-running agent sessions.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#6879](https://github.com/earendil-works/pi/issues/6879)** Auto-compaction never triggers past 100% context until provider overflow | **Critical reliability bug**: 2-hour agent sessions hit 373k tokens before compaction kicks in; affects all long-running workflows. | 18 comments, 17 👍 — high urgency |
| **[#534](https://github.com/earendil-works/pi/issues/534)** Config folder violates XDG Base Directory Spec on Linux | **Standards compliance**: Config lands in `$HOME` instead of `$XDG_CONFIG_HOME`; blocks distro packaging and user expectations. | 15 comments, 39 👍 — longstanding (since Jan) |
| **[#8029](https://github.com/earendil-works/pi/issues/8029)** Very slow prompt editor performance with large buffers | **UX regression**: 7000-line prompt → 1.65s/keystroke; linear scaling makes editor unusable for large contexts. | 9 comments, 0 👍 — recent regression |
| **[#3200](https://github.com/earendil-works/pi/issues/3200)** Support video/audio in `prompt` RPC command | **Multimodal parity**: Extends `images` support to video/audio for Gemma 4, GPT-4o, etc.; enables richer agent workflows. | 8 comments, 5 👍 — feature demand |
| **[#7995](https://github.com/earendil-works/pi/issues/7995)** `openai-responses` lacks Anthropic `cacheControlFormat` → 2.5× cost penalty for Claude via OpenRouter | **Cost/correctness**: Missing prompt caching support on OpenRouter's Anthropic-compatible endpoint; measured 2.5× cost increase. | 4 comments, 0 👍 — vendor-reported |
| **[#8036](https://github.com/earendil-works/pi/issues/8036)** Edit tool crashes TUI on large diffs (14.5 MB) during resume | **Stability**: HTML files with long lines generate massive diffs that OOM the renderer; session resume triggers crash. | 4 comments, 0 👍 — data-loss risk |
| **[#8166](https://github.com/earendil-works/pi/issues/8166)** Custom message mid-tool-batch breaks `tool_calls`→`tool` adjacency (DeepSeek 400) | **Extension API footgun**: `sendMessage(triggerTurn: false)` corrupts message sequence; breaks all subsequent turns. | 3 comments, 0 👍 — subtle but fatal |
| **[#8028](https://github.com/earendil-works/pi/issues/8028)** TUI `fullRender` crashes on V8 string limit (RangeError) | **Hard limit**: Video frame analysis produces output exceeding V8's max string length; uncaught exception kills process. | 2 comments, 0 👍 — architectural ceiling |
| **[#8229](https://github.com/earendil-works/pi/issues/8229)** Local providers overflow between tool turns (pre-compaction) | **Local model gap**: Tool results appended before auto-compaction runs; llama.cpp rejects 87k-token requests. | 2 comments, 0 👍 — mirrors #6879 for local |
| **[#7756](https://github.com/earendil-works/pi/issues/7756)** `detectInstallMethod` mislabels non-pnpm installs under `PNPM_HOME` | **Install detection noise**: False "pnpm" label → spurious "not managed" errors for global bins in `PNPM_HOME`. | 3 comments, 0 👍 — developer friction |

## 4. Key PR Progress (Top 10 Merged/Open)

| PR | Type | Summary |
|----|------|---------|
| **[#8258](https://github.com/earendil-works/pi/pull/8258)** | Fix | **Anthropic refusal fallback**: Adds `allowed_fallback_models` to model registry; handles `stop_reason: "refusal"` during compaction (fixes #8017). |
| **[#8255](https://github.com/earendil-works/pi/pull/8255)** | Fix | **Nested skills discovery**: Loads `SKILL.md` from subdirectories (e.g., `~/.agents/skills/third-party/child-skill.md`) — fixes #6479. |
| **[#8253](https://github.com/earendil-works/pi/pull/8253)** | Fix | **Differential rendering flash**: Stops full-screen clear on viewport changes above fold in 10k+ line transcripts; clears only affected region. |
| **[#8242](https://github.com/earendil-works/pi/pull/8242)** | Fix | **Extension hook correction**: Shipped `notify.ts` example now uses `agent_settled` (not `agent_end`) — avoids premature "done" during retries/compaction (fixes #7350). |
| **[#8241](https://github.com/earendil-works/pi/pull/8241)** | Fix | **Compaction failure visibility**: Emits `session_compact_failed` event to extensions with failure payload; previously only internal. |
| **[#8240](https://github.com/earendil-works/pi/pull/8240)** | Fix | **Qwen Token Plan catalog alignment**: Unifies `qwen-token-plan` and `-cn` to same 8-model allowlist (DeepSeek v4, GLM 5.2, Qwen 3.6–3.8). |
| **[#8246](https://github.com/earendil-works/pi/pull/8246)** | Fix | **OpenAI Completions reasoning round-trip**: Preserves signed `reasoning.text`/`summary` from `delta.reasoning_details` for replay (fixes #7994). |
| **[#8275](https://github.com/earendil-works/pi/pull/8275)** | Feat | **Generalized thinking token budget**: Adds `thinkingTokenBudgetField` for vLLM/Qwen/SGLang/llama.cpp variants; documents compat matrix. |
| **[#8120](https://github.com/earendil-works/pi/pull/8120)** | Feat | **Experimental append compaction** (`PI_EXPERIMENTAL=1`): Reuses system prompt/tools/context/routing to leverage provider prompt caches. |
| **[#8262](https://github.com/earendil-works/pi/pull/8262)** | Feat | **Turn-start hook dispatch**: Ensures `input`/`before_agent_start` fire on *every* turn path including `sendCustomMessage(triggerTurn: true)`. |

## 5. Feature Request Trends
1. **Multimodal parity** — Video/audio support in `prompt` RPC (#3200), vision models in catalogs (#8220), image paste (#2144).
2. **Provider cost optimization** — Prompt caching for OpenRouter Anthropic (#7995), thinking token budget standardization (#8275).
3. **Extension API completeness** — Compaction failure events (#8241), reliable turn hooks (#8262), subagent progress/failure fidelity (#8250).
4. **TUI scalability** — Differential rendering (#8253), large-diff handling (#8036), V8 string limits (#8028), editor performance (#8029).
5. **Standards compliance** — XDG config paths (#534), SELinux volume labels (#8276), install method detection (#7756).

## 6. Developer Pain Points
- **Context window management** is the top reliability concern: auto-compaction fires too late (#6879, #8229), crashes on large output (#8028, #8036), and lacks append-mode caching (#8120 experimental).
- **Extension authoring friction**: Hook timing mismatches (`agent_end` vs `agent_settled`), invisible compaction failures, broken tool-call adjacency from custom messages.
- **Provider integration gaps**: Missing caching fields (OpenRouter), reasoning round-trip loss (OpenAI Completions), thinking-level drops (Google GenAI), Bedrock schema strictness.
- **Linux/desktop integration**: XDG non-compliance, Konsole keybinding conflicts (#8278), SELinux docs gaps, pnpm detection false positives.
- **Performance cliffs**: Prompt editor O(n) keystroke latency, full-render flashes on long transcripts, no streaming diff rendering for large edits.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-18

---

## 1. Today's Highlights

**v0.21.13** shipped with Web Shell composer upgrades: drag-and-drop/paste support for text files as named attachments (alongside images) and the ability to fork conversations from any Assistant response. The release passed full end-to-end validation — SWE-bench Verified (500 tasks) and Terminal-Bench 2.0 (89 tasks) — after a resilient Sandbox command-stream deployment. Meanwhile, the autofix pipeline is under heavy refactor to address a 59% cancellation rate and review-event storms.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v0.21.13** | 2026-08-17 | • Web Shell: drag/drop/paste text files as named attachments ([#9180](https://github.com/QwenLM/qwen-code/pull/9180))<br>• Conversation forking from any Assistant response<br>• Full SWE-bench Verified (500) + Terminal-Bench 2.0 (89) validation passed |

---

## 3. Hot Issues (Top 10 by Community Engagement)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#9194](https://github.com/QwenLM/qwen-code/issues/9194) **Mutation-verified test-pin gaps** (10 💬) | Automated reviewer found tests that pass despite production-code mutations — indicates test robustness gaps in review-platform subcommands. | 10 comments; P3, enhancement |
| [#8316](https://github.com/QwenLM/qwen-code/issues/8316) **Prompt not restored on Ctrl+C** (9 💬) | Canceling a prompt loses user input; forces re-typing. Core UX regression in interactive CLI. | 9 comments; needs triage |
| [#8051](https://github.com/QwenLM/qwen-code/issues/8051) **Bound daemon resource usage** (9 💬) | `qwen serve` multi-workspace daemon lacks byte-level bounds on request bodies, WS assembly, session memory — OOM risk. | 9 comments; P2, daemon |
| [#9324](https://github.com/QwenLM/qwen-code/issues/9324) **Duplicate message delivery** (7 💬) | Messages received multiple times, interrupting agent reasoning. Possible transport-level deduplication bug. | 7 comments; needs info |
| [#6806](https://github.com/QwenLM/qwen-code/issues/6806) **Status line % stale after /compress** (6 💬) | Context usage footer doesn't update post-compression until next model request — misleading developers. | 6 comments; welcome PR |
| [#9061](https://github.com/QwenLM/qwen-code/issues/9061) **Ctrl+V paste broken on Windows** (6 💬) | Regression since 0.21.x; works in 0.21.0. Blocks Windows CLI adoption. | 6 comments; P1, Windows |
| [#9300](https://github.com/QwenLM/qwen-code/issues/9300) **VP mode content not bottom-aligned** (6 💬) | Blank space between last message and composer in terminal-buffer mode — visual regression. | 6 comments; P2, UI |
| [#9354](https://github.com/QwenLM/qwen-code/issues/9354) **Cross-host transcript contract** (5 💬) | Proposes stable export schema for Web Shell, Tauri, VS Code, HTML — foundational for portability. | 5 comments; P3, roadmap |
| [#9320](https://github.com/QwenLM/qwen-code/issues/9320) **Lost context after /compress-fast + /rewind** (5 💬) | Session resume after compression shows context loss — reliability concern for long sessions. | 5 comments; P2 |
| [#9296](https://github.com/QwenLM/qwen-code/issues/9296) **Autofix review-event storms** (4 💬) | 59% of ~500 autofix runs cancelled in 3h; duplicate dispatches, runs on closed PRs — wastes CI capacity. | 4 comments; P1, autofix |

---

## 4. Key PR Progress (Top 10 by Recent Activity)

| PR | Type | Summary |
|----|------|---------|
| [#9345](https://github.com/QwenLM/qwen-code/pull/9345) | Refactor | Consolidate shared helpers for upcoming legacy audit skill; decouples from `commands/review/` |
| [#9370](https://github.com/QwenLM/qwen-code/pull/9370) | CI Fix | Restores macOS/Windows test lanes with platform-sensitivity classifier + nightly `main` runs |
| [#9214](https://github.com/QwenLM/qwen-code/pull/9214) | Autofix | Runs verification gate in ephemeral container (Phase 1+2 of #9089); structural trust boundary test |
| [#9190](https://github.com/QwenLM/qwen-code/pull/9190) | Review | Content-anchored incremental rounds for local review-fix loop — avoids re-reviewing whole dirty tree |
| [#9332](https://github.com/QwenLM/qwen-code/pull/9332) | Review | Folds one-hop import widening into `fetch-pr --since`; deletes `rescope` subcommand (1.3k lines) |
| [#9184](https://github.com/QwenLM/qwen-code/pull/9184) | Review | Gates incremental anchor recovery on certifying model — prevents cross-model cache reuse |
| [#9367](https://github.com/QwenLM/qwen-code/pull/9367) | WebUI | Adds global "Expand all / Collapse all" toolbar to exported HTML viewer (thinking, tool results) |
| [#9369](https://github.com/QwenLM/qwen-code/pull/9369) | CI Fix | Ports checkout self-heal wipe guard (canonicalization, allowlist) to triage and A/B wipe workflows |
| [#9130](https://github.com/QwenLM/qwen-code/pull/9130) | Triage | Adds deterministic flakiness gate: re-runs modified unit tests N× (default 5) post-build |
| [#9342](https://github.com/QwenLM/qwen-code/pull/9342) | Review | Clears 19 deferred suggestions from #9175's 15 review rounds — half are behavior fixes |

---

## 5. Feature Request Trends

| Direction | Evidence (Issues/PRs) |
|-----------|----------------------|
| **Web Shell as unified chat surface** | [#5883](https://github.com/QwenLM/qwen-code/issues/5883) (consolidate chat panel), [#9180](https://github.com/QwenLM/qwen-code/pull/9180) (file attachments), [#9354](https://github.com/QwenLM/qwen-code/issues/9354) (transcript contract) |
| **Session durability & portability** | [#9320](https://github.com/QwenLM/qwen-code/issues/9320) (compress+rewind), [#8906](https://github.com/QwenLM/qwen-code/issues/8906) (scheduled tasks reuse session), [#9354](https://github.com/QwenLM/qwen-code/issues/9354) (cross-host export) |
| **Daemon resource governance** | [#8051](https://github.com/QwenLM/qwen-code/issues/8051) (byte-level bounds), [#8091](https://github.com/QwenLM/qwen-code/issues/8091) (split into reviewable PRs), [#8927](https://github.com/QwenLM/qwen-code/pull/8927) (sessionRotation bounds) |
| **Review/autofix pipeline maturity** | [#9190](https://github.com/QwenLM/qwen-code/pull/9190) (incremental rounds), [#9262](https://github.com/QwenLM/qwen-code/pull/9262) (audit approach on growth breach), [#9296](https://github.com/QwenLM/qwen-code/issues/9296) (storm fixes) |
| **Multi-provider model integration** | [#9226](https://github.com/QwenLM/qwen-code/pull/9226) (Aone Code read path), [#9368](https://github.com/QwenLM/qwen-code/issues/9368) (dynamic ModelStudio model list), [#9307](https://github.com/QwenLM/qwen-code/issues/9307) (Weixin 64-bit IDs) |
| **Export/HTML fidelity** | [#8208](https://github.com/QwenLM/qwen-code/issues/8208) (thinking/tool results expand), [#9367](https://github.com/QwenLM/qwen-code/pull/9367) (global expand/collapse) |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Items |
|------------|-----------|----------------------|
| **Windows CLI regressions** | High | [#9061](https://github.com/QwenLM/qwen-code/issues/9061) Ctrl+V broken since 0.21.x; [#9300](https://github.com/QwenLM/qwen-code/issues/9300) VP mode alignment; [#9315](https://github.com/QwenLM/qwen-code/issues/9315) copy broken on Linux too |
| **Context/compression reliability** | High | [#9320](https://github.com/QwenLM/qwen-code/issues/9320) lost context post-compress; [#9309](https://github.com/QwenLM/qwen-code/issues/9309) double-compress anomaly; [#6806](https://github.com/QwenLM/qwen-code/issues/6806) stale status % |
| **Daemon unbounded resources** | Medium | [#8051](https://github.com/QwenLM/qwen-code/issues/8051) no byte bounds; [#9250](https://github.com/QwenLM/qwen-code/issues/9250) hardcoded 0600 file mode ignores umask |
| **Autofix pipeline waste** | Medium | [#9296](https://github.com/QwenLM/qwen-code/issues/9296) 59% cancellation, duplicate dispatches, runs on closed PRs |
| **Test robustness gaps** | Medium | [#9194](https://github.com/QwenLM/qwen-code/issues/9194) mutation-verified pins; [#9130](https://github.com/QwenLM/qwen-code/pull/9130) flakiness gate added |
| **Message transport duplicates** | Emerging | [#9324](https://github.com/QwenLM/qwen-code/issues/9324) multi-delivery; [#7433](https://github.com/QwenLM/qwen-code/issues/7433) wrong model reported in SDK |
| **UI rendering glitches** | Persistent | [#3806](https://github.com/QwenLM/qwen-code/issues/3806) flickering output; [#8608](https://github.com/QwenLM/qwen-code/issues/8608) inline image height jumps |

---

*Generated from github.com/QwenLM/qwen-code data as of 2026-08-18. Links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-18

---

## 1. Today's Highlights

The project shipped **v0.9.9** (PR #5476), a "truth-and-resilience" release fixing a critical shell-tool wedge bug (#5465) that could deadlock sessions under resource exhaustion, plus honest labeling of unverified context windows and pricing. Concurrently, the **web localization spine** (#5337) advanced with two merged PRs (#5488, #5490) retiring `isZh` branches in favor of a dictionary-driven i18n system across eight partial locales. A flaky-test investigation (#5056, #5355) and a major **agent-tool schema simplification** (#5324, closed) signal ongoing reliability and DX focus.

---

## 2. Releases

| Version | PR | Summary |
|---------|-----|---------|
| **v0.9.9** | [#5476](https://github.com/Hmbown/CodeWhale/pull/5476) | Critical fix: shell tool no longer wedges session on OOM/descriptor exhaustion (#5465). Unverified context windows, output ceilings, and telemetry defaults now labeled honestly. CHANGELOG addenda in #5477, #5487. |

> No other releases in the last 24h.

---

## 3. Hot Issues (10 Noteworthy)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2369](https://github.com/Hmbown/CodeWhale/issues/2369) | **Config paths fragmented across OS/Cygwin + silent migration bug** | Cross-platform config divergence breaks portable workflows; migration can silently corrupt secrets. Patch attached. | 8 comments, open since May |
| [#5056](https://github.com/Hmbown/CodeWhale/issues/5056) | **Flaky verifier background tests + 12 untriaged `#[ignore]` tests** | CI reliability blocker; parallel-suite flakes mask real regressions. | 8 comments, authored by maintainer |
| [#5324](https://github.com/Hmbown/CodeWhale/issues/5324) | **Agent tool: 32-field schema with 0 required fields → model errors** | Single schema serving 8 actions confuses models; parser accepts aliases unpredictably. **Closed** after simplification. | 8 comments |
| [#5424](https://github.com/Hmbown/CodeWhale/issues/5424) | **v0.9.7: TUI crashes after ~1 minute of output wait** | High-severity regression; reproducible with `--continue`. | 7 comments, recent |
| [#1425](https://github.com/Hmbown/CodeWhale/issues/1425) | **Large-text processing (3M chars) → sub-agent timeout deadlock** | 10 spawned sub-agents all show `Running` but `agent_wait` times out; session hangs. | 7 comments, Chinese report |
| [#5123](https://github.com/Hmbown/CodeWhale/issues/5123) | **Agent spawn surface: labeled builder runs read-only & self-BLOCKED** | Dogfood failure: `builder` label grants read-only tool contract, blocking gate execution. | 7 comments |
| [#1651](https://github.com/Hmbown/CodeWhale/issues/1651) | **VS Code crashes when YOLO Agent runs test scripts** | Integration instability in VS Code terminal with autonomous agents. | 6 comments |
| [#1829](https://github.com/Hmbown/CodeWhale/issues/1829) | **SSH exit code 255 — suspected shell sandbox TCP 22 egress block** | Built-in shell sandbox may block outbound SSH; works in local terminal. | 6 comments |
| [#5355](https://github.com/Hmbown/CodeWhale/issues/5355) | **v0.9.8 known flakes: parallel-load & config-fixture** | Carried from v0.9.7 close-out; `exec_persistent_service` and snapshot-restore tests flake under parallelism. | 3 comments |
| [#5403](https://github.com/Hmbown/CodeWhale/issues/5403) | **`main` red on both platforms: plugin_e2e (macOS) + NSIS (Windows)** | All four completed CI runs fail; blocks release confidence. | 3 comments |

---

## 4. Key PR Progress (10 Important)

| # | Title | Type | Impact |
|---|-------|------|--------|
| [#5476](https://github.com/Hmbown/CodeWhale/pull/5476) | **release: 0.9.9** | Release | Critical stability fix + honest telemetry labeling |
| [#5488](https://github.com/Hmbown/CodeWhale/pull/5488) | **feat(web): move docs shell onto dictionary spine** | i18n | Retires `isZh` ternaries in `docs/layout.tsx`; enables 8 partial locales |
| [#5490](https://github.com/Hmbown/CodeWhale/pull/5490) | **feat(web): route shared components' locale picks through `pickText`** | i18n | 10 hardcoded locale branches → 9 `pickText` calls; completes #5337 |
| [#5484](https://github.com/Hmbown/CodeWhale/pull/5484) | **feat(dsh): ambient ocean scene (whales + glyph fish)** | UX | Visual polish for DeepSeek Harness bundle; bezier-animated background |
| [#5483](https://github.com/Hmbown/CodeWhale/pull/5483) | **web: de-slop site copy (voice sheet + rewritten surfaces)** | Docs | Product-grade copy rewrite; new `WEB_VOICE.md` style guide |
| [#5485](https://github.com/Hmbown/CodeWhale/pull/5485) | **fix(models): bring model catalog & pricing current (2026-08-17)** | Data | Verified against official pages; xAI long-context = 2× standard |
| [#5491](https://github.com/Hmbown/CodeWhale/pull/5491) | **fix(tui): persist approval outcomes before execution** | Reliability | Implements #5360: durable, fail-closed approval log with resume reconstruction |
| [#5474](https://github.com/Hmbown/CodeWhale/pull/5474) | **perf(context): compact all noisy web tool results** | Perf | Applies soft limit to `Web`, `web_search`, `web.run`, `fetch_url`; regression tests |
| [#5475](https://github.com/Hmbown/CodeWhale/pull/5475) | **fix(config): resolve owned direct model casing safely** | Bugfix | Prevents lowercase selectors (e.g., `glm-5.2`) from misclassifying as foreign provider |
| [#5402](https://github.com/Hmbown/CodeWhale/pull/5402) | **fix(tui): restore session cost when live pricing unverifiable** | Bugfix | Fixes #5241: 503 `control_plane_not_attached` no longer leaves costs `unverified_live_pricing` forever |

---

## 5. Feature Request Trends

| Trend | Representative Issues | Direction |
|-------|----------------------|-----------|
| **Agent/Sub-agent UX overhaul** | #5123, #1425, #5324, #5102 | Simplify spawn surface, fix timeout deadlocks, add first-class screenshot viewing |
| **Plugin ecosystem maturity** | #5311, #5439, #5442 | Ship Kimi-level plugin system + federated marketplaces; surface workflow/goal/auto modes |
| **Third-party model onboarding** | #5350, #4683, #5290 | Pre-built templates, connection test button, fix `not checked`/`cache failed` states |
| **Localization completeness** | #5337, #5290, #5482 | Retire `isZh` branches; fix clickable controls on non-EN routes; full Chinese docs restructure |
| **Config & identity migration** | #2369, #5443, #5098 | Tiered retirement of `deepseek-tui` identifiers; fix cross-OS config fragmentation; eliminate fleet config shadowing |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Flaky / unreliable CI** | High | #5056 (8 comments), #5355, #5403 — parallel-load flakes, red `main` on both platforms |
| **Agent tooling complexity** | High | #5324 (32-field schema), #5123 (read-only builder), #1425 (sub-agent timeout), #5098 (fleet config shadowing) |
| **Cross-platform config/SSH breakage** | Medium | #2369 (OS/Cygwin path divergence), #1829 (sandbox blocks TCP 22), #5410 (bwrap sandbox denies `/dev/null`, system libs) |
| **Pricing / cost visibility loss** | Medium | #5241 (503 → all `unverified_live_pricing`), #5402 (fix merged) |
| **Discoverability of advanced features** | Medium | #5442 (34 commands demoted from palette root), #5439 (workflow/goal/auto buried) |
| **Large-context handling** | Emerging | #5239 (1M context model but 128K compaction trigger), #1425 (3M char novel processing) |

---

*Digest generated from GitHub data (issues/PRs updated 2026-08-17 → 2026-08-18). Links point to Hmbown/CodeWhale repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*