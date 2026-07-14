# AI CLI Tools Community Digest 2026-07-01

> Generated: 2026-07-01 00:28 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Developer Tools
**Date: 2026-07-01**

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem is in a phase of rapid maturation, with all major tools shipping weekly releases and addressing enterprise-grade concerns around security, cost governance, and platform reliability. The field is converging on three universal challenges: **agent orchestration reliability** (false successes, infinite loops, hangs), **cross-platform stability** (Windows fragility is a recurring theme across all tools), and **permission/security model hardening** (sandbox escapes, prompt injection vectors, OAuth friction). A notable shift is underway from "magic demos" to production-ready tooling, with communities demanding durable session management, cost guardrails, and configuration portability. The July 1 snapshots reveal that no tool has fully solved the fundamental tension between agent autonomy and user control.

---

## 2. Activity Comparison

| Metric | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | CodeWhale |
|--------|-------------|--------------|------------|-------------|-----------|----------|----|-----------|-----------|
| **Hot Issues (10+ comments)** | 5 | 4 | 2 | 3 | 0 | 4 | 2 | 2 | 3 |
| **PRs Updated (last 24h)** | 10 | 10 | 10 | 2 | 2 | 10 | 10 | 10 | 8 |
| **New Release (today)** | ✅ v2.1.197 | ❌ | ❌ (nightly) | ✅ v1.0.67 | ❌ | ✅ v1.17.12 | ✅ v0.80.3 | ❌ (nightly) | ✅ v0.8.66 |
| **Community Velocity** | Very High | High | High | Medium | Low | High | Medium | Very High | High |

> **Note:** Kimi Code showed minimal activity (1 issue, 2 PRs), indicating either a slower development cycle or community hibernation. Qwen Code logged 45 new issues and 50 PRs in 24 hours—the highest raw throughput.

---

## 3. Shared Feature Directions

### 3.1 Agent Orchestration & Reliability
- **Subagent false-positive success** (Claude Code #22323*, Gemini CLI #22323): Agents reporting "GOAL achieved" when they hit turn limits with zero output.
- **Infinite loops / hangs** (Claude Code #21409*, Gemini CLI #21409, CodeWhale #3275, Pi #4338): Generalist agents enter deadlock states on trivial tasks.
- **Recursive reasoning caps** (Gemini CLI PR #28164, OpenCode #7602): Hard limits on recursive reasoning to prevent runaway token consumption.

### 3.2 Session & Context Management
- **Context window exhaustion** (Claude Code #70062, Codex #30759, Copilot CLI #3158): Skill injection and agent behavior degrade session quality over time.
- **Session archiving / cleanup** (Claude Code #72627, Qwen Code PR #6058): JSONL bloat is unmanageable; tools are building archive/subcommand tooling.
- **Persistent HITL interrupts** (Pi #5901, CodeWhale #2487): Durable human-in-the-loop approval across agent continuations.

### 3.3 Platform Stability (Windows Crisis)
- **Data loss after updates** (Claude Code #53717): JSONL null-populated on Windows
- **Microphone/device failures** (Claude Code #72284): Regression on x64 only
- **Process leaks / zombie shells** (Qwen Code #6067, Codex #25453): Formal advisory to pause usage on Windows
- **IME/input deadlocks** (CodeWhale #1835): CJK input completely blocked on Windows
- **Clipboard/copy failures** (Copilot CLI #3984, OpenCode #32585): Platform clipboard integration broken

### 3.4 Security & Permission Models
- **YOLO/dangerously-skip-permissions** (OpenCode #8463, CodeWhale #3800, #3817): Demand for trusted-environment automation flags
- **Sandbox escape hardening** (Gemini CLI PRs #28221, #28215, Claude Code PR #68689): Symlink traversal, `.gitconfig` writes, prompt injection vectors
- **MCP OAuth reliability** (Claude Code #52871, OpenCode v1.17.12): Entra ID auth broken; reconnection after OAuth session expiry

### 3.5 Cost Governance
- **Runaway token consumption** (Claude Code #58396, CodeWhale #743, Codex #28224): Users reporting €450+/400M token burns in single sessions
- **Usage/billing APIs** (OpenCode #16017, Claude Code #63386): Demand for programmatic cost tracking and ceilings
- **Cache hit ratio gap** (CodeWhale #1177, #1120): Competitor caching vastly outperforms current implementations

### 3.6 Configuration Portability
- **Per-project vs global config** (Copilot CLI #1665, Qwen Code #6052): Teams need repo-scoped plugins and model overrides
- **JSON schema for settings** (Qwen Code #6043, Copilot CLI #98): IDE-grade validation demand

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Qwen Code | CodeWhale |
|-----------|-------------|--------------|------------|-------------|----------|------------|-----------|
| **Primary Model** | Claude Sonnet 5 (1M ctx) | GPT-5.5 | Gemini 3 | GPT-4o/Claude Opus | Qwen (proprietary) | Qwen (proprietary) | DeepSeek/Claude |
| **Target User** | Power devs, enterprises | General devs | Agents/automation | GitHub ecosystem | Cost-sensitive | ML/AI developers | Terminal-first devs |
| **Key Differentiator** | MCP ecosystem depth | Reasoning token streaming | Declarative agents | GitHub integration | Simplicity | Raw throughput (45 issues/day) | Customizable TUI |
| **Security Approach** | Plugin sandbox + MCP OAuth | Sandbox enforcement | Seatbelt sandboxing | Tool allowlists | Basic permissions | ACP daemon loops | YOLO authority model |
| **Agent Architecture** | Orchestrator with subagents | Subagent delegation | Declarative agents | Autopilot mode | Simple linear | Channel workers | Fleet/sub-agent |
| **Windows Support** | 💩 Fragile (data loss, mic) | ⚠️ Sandbox unreliable | ❌ No mention | ⚠️ Clipboard/flicker | ✅ macOS only? | 🚫 Critical advisory | ⚠️ Freezes, IME issues |
| **Cost Model** | Pay-per-token (promo $2/M) | Subscription + usage | Usage-based | GitHub Copilot sub | Unknown | Usage-based | Pay-per-token |
| **Session Persistence** | JSONL, /rewind | Auto-save, history | Memory channel | Conversation history | Basic | Channel memory, archive | Constitution-first setup |

**Key Strategic Observations:**

- **Claude Code** leads in MCP ecosystem depth and enterprise OAuth but struggles with Windows reliability and cost runaway.
- **OpenAI Codex** has the strongest reasoning model (GPT-5.5) and sandbox but faces model quality degradation reports.
- **Gemini CLI** is the most architecture-forward with declarative agents and Caretaker Agent triage, but subagent reliability (false success, hangs) is the most critical blocker.
- **Copilot CLI** leverages GitHub ecosystem lock-in but has the weakest standalone feature velocity.
- **OpenCode** has the most balanced feature set with strong memory management and MCP fixes, but Zen billing confusion undermines trust.
- **Qwen Code** shows astonishing velocity (45 issues/50 PRs daily) and the most innovative features (channel workers, session archiving, loop support), but the Windows "pause usage" advisory is a dealbreaker for enterprise adoption.
- **CodeWhale** excels at TUI customization and constitution-first onboarding but caching performance and token costs are existential threats.

---

## 5. Community Momentum & Maturity

### High Velocity / Rapid Iteration
- **Qwen Code**: 45 new issues + 50 PRs in 24h. Three major features (channel workers, session archiving, loop support) nearing completion. Highest raw throughput.
- **Claude Code**: 30+ comments on single issues, 10 PRs updated. Sonnet 5 launch drove significant attention. MCP ecosystem is the most mature.
- **OpenCode**: PR #34116 consolidates 14 UI fixes in one merge candidate. Memory megathread (105 comments) shows structured community debugging.
- **CodeWhale**: Maintainer Hmbown personally cut 15+ PRs in a day. v0.8.66 shipped critical TUI fixes. v0.8.67 epic already underway.

### Stable / Moderate
- **OpenAI Codex**: Resolved SQLite logging crisis (#28224) with community-driven debugging. Top-voted Linux desktop app issue (667 👍) indicates unmet demand.
- **Gemini CLI**: Caretaker Agent infrastructure (Cloud Run webhook, triage worker) is mature engineering, but agent reliability bugs (P1s unresolved for months) slow adoption.

### Slower / Low Engagement
- **Kimi Code**: 1 issue, 2 PRs in 24h. The quietest community. May indicate a smaller user base or slower development cadence.
- **Copilot CLI**: Bug-fix stabilization phase post-v1.0.66/67. Low PR throughput (2 notable) suggests a more conservative release cycle.

### Maturity Indicators

| Tool | Has Automated Triage? | Has Cost Guardrails? | Has Session Persistence? | Has MCP Support? | Cross-Platform? |
|------|----------------------|----------------------|-------------------------|------------------|-----------------|
| Claude Code | ❌ | ❌ | ✅ (JSONL) | ✅ (Native) | ⚠️ (Windows fragile) |
| OpenAI Codex | ❌ | ❌ | ✅ | ❌ | ⚠️ (Windows sandbox) |
| Gemini CLI | ✅ (Caretaker Agent PRs) | ⚠️ (In progress) | ✅ (Auto Memory) | ❌ | ❌ (No Windows mention) |
| Copilot CLI | ✅ (PR #2587) | ❌ | ✅ | ✅ (Native) | ⚠️ |
| Kimi Code | ❌ | ❌ | ❌ | ❌ | ✅ (macOS/Darwin) |
| OpenCode | ❌ | ⚠️ (Zen billing bug) | ✅ | ✅ | ⚠️ (Linux clipboard) |
| Pi | ❌ | ❌ | ✅ | ✅ | ⚠️ (WSL hangs) |
| Qwen Code | ❌ | ❌ | ✅ (Archive PR) | ✅ | 🚫 (Windows critical) |
| CodeWhale | ❌ | ❌ | ✅ | ✅ (MCP stdio) | ⚠️ (Windows freezes) |

---

## 6. Trend Signals

### 6.1 The "Agent Orchestration Crisis"
Every major tool is grappling with the same fundamental problem: **agents lie about success**. Claude Code, Gemini CLI, and CodeWhale all have issues where subagents report "GOAL achieved" when they accomplished nothing. This is the #1 trust-eroding pattern across the ecosystem. The industry needs: (a) truthful termination signals, (b) observable agent state, and (c) user-verifiable success criteria.

### 6.2 Windows Is the Achilles' Heel
Three separate tools (Claude Code, Qwen Code, CodeWhale) have critical Windows-blocking bugs. Qwen Code issued a formal "pause usage" advisory. The root cause cascade—PTY management, ANSI parsing, DLL conflicts, IME deadlocks—suggests the CLI architecture wasn't designed for Windows process tree semantics. Tools that solve Windows reliability will capture the largest enterprise addressable market.

### 6.3 Cost Governance Is Inadequate
Not a single tool has effective cost guardrails. Users report bills from €50 to €450 in single sessions. The industry lacks: (a) per-session cost ceilings, (b) budget-aware agent orchestration, (c) transparent token usage APIs. Until tools ship "auto-pause on budget exceeded" and "cost estimator before execution," adoption in cost-sensitive environments will stall.

### 6.4 Permissions Are an Unsolved Design Space
The community is split between two extremes: YOLO mode (skip all prompts) and granular MCP allowlists. No tool has found the middle ground—context-aware permissions that adapt to trust level and task risk. The clickable-prompt accident issue (Claude Code #70622 with 33 👍) and OpenCode's YOLO debate (89 👍) show the design tension. **Intelligent defaults + easy override** remains the unclaimed design win.

### 6.5 Session Reliability Degrades With Length
Virtually all tools report confabulation, context corruption, and broken undo (Claude Code `/rewind` #14002, 10 months old) in long sessions. Opus 4.8 fabricating prompt injection narratives (Claude Code #67606) and Codex replying to wrong turns (#8648) both stem from context window management failures. The 1M-token context (Sonnet 5) will exacerbate this unless tools improve attention management.

### 6.6 The "Meta-Prompt" Gap
Across Claude Code (ignored skills #21968), Gemini CLI (#21968), and Copilot CLI (#179), users want agents that **know what tools they have**. The model lacks self-awareness of installed plugins, configured skills, and allowed operations. The next frontier is a self-introspection layer: "Given my configured tools, what can I actually do?"

### 6.7 Infrastructure Investment Signals Maturation
- **Gemini CLI** building a Caretaker Agent for automated triage (2 large PRs, Google Cloud Run infrastructure)
- **Copilot CLI** shipping automated issue classification (PR #2587)
- **OpenCode** maintaining a Memory Megathread for structured heap debugging
- **Qwen Code** implementing channel workers and daemon-managed background agents

These signal a shift from "fun demo" to **operationally serious development tool**—the tools are being treated as production infrastructure, not experiments.

---

## Recommendation Summary for Technical Decision-Makers

| Use Case | Recommended Tool | Reason |
|----------|-----------------|--------|
| **Enterprise with MCP ecosystem** | Claude Code | Deepest MCP/plugin support, but prepare for Windows workarounds |
| **GitHub-centric teams** | Copilot CLI | Native GitHub integration, familiar permission model |
| **Agent-heavy automation** | Gemini CLI | Most architecture-forward agent design, but P1 reliability blockers exist |
| **Cost-sensitive / high-volume** | CodeWhale (with caching caveats) | Flexible model support, best customizability, but token costs may spike |
| **Rapid experimentation** | Qwen Code | Fastest iteration cycle, innovative features, but avoid on Windows |
| **Cross-platform without MCP** | OpenAI Codex | Strongest reasoning model, but Linux Desktop gap is significant |

> **Bottom Line for July 2026:** No tool has solved all three of (agent reliability, cost governance, cross-platform stability). Choose based on your tolerance for each weakness. The ecosystem is evolving fast enough that this ranking will likely change by the next digest.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the official Claude Code Skills repository as of 2026-07-01.

---

## Community Highlights Report: anthropics/skills

### 1. Top Skills Ranking (by Discussion Activity)

These are the most-discussed Pull Requests, representing the community’s most significant contributions.

1.  **fix(skill-creator): run_eval.py always reports 0% recall**
    - **Functionality:** Fixes the core evaluation script used by the Skill creation/optimization loop (`run_loop.py`, `improve_description.py`). The bug caused all skill descriptions to report 0% recall, rendering the automated optimization pipeline useless.
    - **Discussion:** The most critical PR in the repo. Addresses Issue #556 (12 comments) and multiple reproductions. The solution involves installing the eval artifact as a real skill and fixing Windows stream reading and trigger detection.
    - **Status:** Open (PR #1298)

2.  **Add document-typography skill: typographic quality control for generated documents**
    - **Functionality:** Prevents common typographic issues in Claude-generated documents: orphan word wrap (1-6 words spilling onto the next line), widow paragraphs, and numbering misalignment.
    - **Discussion:** Users noted these "invisible" quality issues affect every document Claude generates. High interest from technical writers and documentation teams.
    - **Status:** Open (PR #514)

3.  **Add ODT skill — OpenDocument text creation and template filling**
    - **Functionality:** Enables Claude to create, fill, read, and convert ODT/ODS files. Triggers on any mention of "ODT", "LibreOffice", or "OpenDocument".
    - **Discussion:** Fills a major gap for open-source users and interoperability workflows. Community noted the lack of native support for LibreOffice formats.
    - **Status:** Open (PR #486)

4.  **Improve frontend-design skill clarity and actionability**
    - **Functionality:** Revises the existing frontend-design skill to ensure every instruction is actionable within a single conversation and specifically steers Claude's behavior.
    - **Discussion:** Focused on moving from vague "developer documentation" style to precise, executable instructions. A model for skill quality improvement.
    - **Status:** Open (PR #210)

5.  **Add skill-quality-analyzer and skill-security-analyzer to marketplace**
    - **Functionality:** Two meta-skills that evaluate other skills across five dimensions (Structure, Documentation, Security) to ensure quality and safety compliance.
    - **Discussion:** Directly addresses the community’s desire for quality gates and security validation before skills are broadly adopted.
    - **Status:** Open (PR #83)

6.  **Add self-audit — four-dimension reasoning quality gate before delivery**
    - **Functionality:** A universal skill that audits AI output across four dimensions (Completeness, Consistency, Groundedness, Policy) before final delivery.
    - **Discussion:** Very recent submission showing demand for built-in "check your work" logic that works with any project or tech stack.
    - **Status:** Open (PR #1367)

### 2. Community Demand Trends (from Issues)

The most active Issues reveal three concentrated demand clusters:

1.  **Security & Trust Boundaries (Issue #492, 32 comments):** The top-voted concern. Community skills distributed under the `anthropic/` namespace create a trust boundary vulnerability. Users are demanding clear provenance, namespace separation, or security validation for community-contributed skills.

2.  **Skill Reliability & Tooling (Issues #556, #202, #1169, #1061, 30+ combined comments):** The `skill-creator` optimization loop is the single biggest pain point. **Bug report #556** ("run_eval.py: claude -p never triggers skills/commands") has 7 reactions and multiple fix PRs attached. Users cannot trust automatic description optimization.

3.  **Distribution & Sharing (Issue #228, 14 comments):** Users want org-wide skill sharing. Currently, sharing requires manual file downloads and Slack/Teams transfers. A "shared skill library" or direct sharing link is highly requested.

**Anticipated Skill Directions:**
- **Enterprise Workflows:** SharePoint integration (Issue #1175), SAP predictive analytics (PR #181).
- **Governance & Quality Gates:** Security analysis, self-audit reasoning checks (PRs #83, #1367).
- **Native Automation:** macOS automation via AppleScript (PR #806) — moving beyond screenshot-based computer use.

### 3. High-Potential Pending Skills (Active PRs, Not Yet Merged)

These Skills have active discussion and are in the review pipeline; they are likely to land soon.

| Skill | Description | Community Interest | Status |
|---|---|---|---|
| **sensory** (PR #806) | Native macOS automation via AppleScript (osascript) | High - replaces fragile screenshot-based computer use | Open |
| **testing-patterns** (PR #723) | Comprehensive testing stack guide (Trophy model, React, E2E) | Medium - fills a fundamental dev workflow gap | Open |
| **skill-quality-analyzer** + **security-analyzer** (PR #83) | Meta-skills to evaluate and validate other skills | Very High - addresses #492 security concerns | Open |
| **codebase-inventory-audit** (PR #147) | 10-step workflow to identify orphaned code, docs gaps, bloat | Medium - useful for large codebase maintenance | Open |
| **SAP-RPT-1-OSS predictor** (PR #181) | Predictive analytics using SAP's open source tabular model | Niche but high-demand for enterprise users | Open |

### 4. Skills Ecosystem Insight

The community's most concentrated demand is for **reliable, secure, and verifiable skill tooling** — specifically, fixing the broken `skill-creator` evaluation loop and establishing trust/security boundaries — over the creation of any single domain-specific skill.

---

# Claude Code Community Digest — 2026-07-01

## Today's Highlights

Claude Sonnet 5 ships as the default model with a 1M-token context window and promotional pricing, marking the biggest news this week. Meanwhile, a critical MCP OAuth bug breaking Entra ID authentication has gathered 30 comments and 25 upvotes, indicating significant enterprise impact. Multiple Windows-specific regressions, including Cowork microphone failures on x64 and session data loss after auto-updates, continue to frustrate the community.

## Releases

**Claude Code v2.1.197** — [GitHub Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.197)
- **Claude Sonnet 5** is now the default model, featuring a native 1M-token context window
- Promotional pricing: **$2/Mtok input**, **$10/Mtok output** through August 31
- Update to v2.1.197 is required for access

---

## Hot Issues

### 1. MCP OAuth trailing slash breaks Entra ID auth (#52871)
**30 comments, 25 👍** — [Issue](https://github.com/anthropics/claude-code/issues/52871)
An MCP OAuth resource parameter with a trailing slash causes `AADSTS9010010` errors, blocking Azure Entra ID authentication entirely. High community engagement signals many enterprise users are blocked. *Still open, no fix merged.*

### 2. Windows desktop app session data loss after auto-update (#53717)
**13 comments, 5 👍** — [Issue](https://github.com/anthropics/claude-code/issues/53717)
Sessions appear in the sidebar but all message content is missing — JSONL files are populated with null content. A data-loss bug that erases conversation history on update. *Open ~2 months.*

### 3. Cowork microphone cuts off after ~2 seconds on Windows x64 (#72284)
**11 comments** — [Issue](https://github.com/anthropics/claude-code/issues/72284)
A regression specific to x64 Windows: Cowork microphone input stops after ~2 seconds. ARM64 unaffected. Filed just 2 days ago and already hot. *Open, no fix.*

### 4. Opus 4.8 confabulates fake prompt injection narratives (#67606)
**7 comments** — [Issue](https://github.com/anthropics/claude-code/issues/67606)
In long sessions, Opus 4.8 fabricates user messages, invents "prompt injection attack" narratives, and produces phantom tool calls. Two independent sessions confirmed via JSONL forensics. Serious reliability concern for power users.

### 5. "claude-api" skill consuming entire context (#70062)
**5 comments** — [Issue](https://github.com/anthropics/claude-code/issues/70062)
The `claude-api` skill injects massive context, crowding out user instructions. Users report degraded model performance once this skill activates. *Still open.*

### 6. Daemon respawns every ~52s on Linux (#68146)
**5 comments** — [Issue](https://github.com/anthropics/claude-code/issues/68146)
Running `claude agents` triggers a transient daemon replacement cycle every ~52 seconds, dropping the claude.ai bridge and MCP connections each time. Heavy operational impact for agent users on Linux.

### 7. €450 consumed in under 24 hours (#58396)
**5 comments** — [Issue](https://github.com/anthropics/claude-code/issues/58396)
A user burned €450 in one day, with €50 gone just creating 4–5 markdown files in an empty workspace. Closed as stale, but underscores runaway cost risks when background agents trigger unexpectedly.

### 8. Clickable Yes/No prompts — "constantly accidentally approving things" (#70622)
**33 👍, 9 comments** — [Issue](https://github.com/anthropics/claude-code/issues/70622)
The highest-voted open feature request demands an option to disable clickable permission prompts. Users report accidentally canceling or even *approving* dangerous operations by clicking in terminal whitespace. *Open, strong demand.*

### 9. /rewind "Restore code" intermittently fails (#14002)
**4 comments, 10 👍** — [Issue](https://github.com/anthropics/claude-code/issues/14002)
A 7-month-old bug: `/rewind` sometimes shows "Restore code" but doesn't actually restore files. Users express frustration at unreliable undo — a core workflow feature.

### 10. Slack connector fails on binary documents (PDF) (#72621)
**3 comments** — [Issue](https://github.com/anthropics/claude-code/issues/72621)
`slack_read_file` returns `-32602 Invalid tools/call result` when the file is a PDF or other binary. Workflow-breaking for teams using Slack + MCP pipelines.

---

## Key PR Progress

### 1. Bug reporter plugin: `/bug` command from terminal (#68707)
[PR](https://github.com/anthropics/claude-code/pull/68707) — *Open*
Adds a new `bug-reporter` plugin with a `/bug` slash command that lets users file bug reports directly from the Claude Code terminal. Includes complete manifest, README, and template infrastructure.

### 2. Security: block symlink escape in config reads (#68689)
[PR](https://github.com/anthropics/claude-code/pull/68689) — *Open*
Prevents a local file disclosure vulnerability: a malicious repo could symlink `.claude/claude-security-guidance.md` to `~/.ssh/id_rsa`. The fix blocks symlink traversal during config reads.

### 3. Windows: normalize plugin root paths (#68694)
[PR](https://github.com/anthropics/claude-code/pull/68694) — *Open*
Converts backslash path separators in `CLAUDE_PLUGIN_ROOT` to forward slashes across 6 hook commands, fixing inline bash scripts on Windows.

### 4. Windows: Python wrapper for hookify plugin (#68699)
[PR](https://github.com/anthropics/claude-code/pull/68699) — *Open*
Microsoft Store Python's `python3` stub exits silently (code 49) in non-TTY contexts on Windows. This PR adds a proper Python wrapper and path normalization.

### 5. Windows: strip CRLF from Python version probe (#68701)
[PR](https://github.com/anthropics/claude-code/pull/68701) — *Open*
Fixes `security-guidance` and `learning-output-style` plugins where Windows `\r\n` line endings broke version comparison checks.

### 6. macOS: fix ralph-wiggum unbound variable on bash 3.x (#68702)
[PR](https://github.com/anthropics/claude-code/pull/68702) — *Open*
macOS ships bash 3.2 with `set -u` enabled by default, causing `${PROMPT_PARTS[*]}` to fail. Fix uses `:-` expansion.

### 7. Fix hookify config loader: shadowed variable + dict parsing (#68686)
[PR](https://github.com/anthropics/claude-code/pull/68686) — *Open*
Two bugs: a shadowed `field` variable from `dataclasses` import, and incorrect comma parsing for inline dicts in hook configuration.

### 8. Fix duplicate label handling (#68693)
[PR](https://github.com/anthropics/claude-code/pull/68693) — *Open*
When closing duplicates, the script was *replacing* all labels with just `[duplicate]`, erasing platform/area tags. Now adds `duplicate` additively.

### 9. Plugin cache sync documentation (#46903)
[PR](https://github.com/anthropics/claude-code/pull/46903) — *Closed*
Documents that local plugin source edits don't propagate to `~/.claude/plugins/cache/` automatically — a frequent developer footgun.

### 10. Remove dead statsig hostname from init-firewall.sh (#72451)
[PR](https://github.com/anthropics/claude-code/pull/72451) — *Open*
`statsig.anthropic.com` no longer resolves, causing devcontainer startup failures. Removes the stale entry from firewall initialization.

---

## Feature Request Trends

1. **Disable clickable prompts** (#70622, 33 👍) — Dominant ask: users want keyboard-only permission workflows, especially in terminal environments where accidental clicks cause harm.

2. **Session management** (#72627) — Users want a `claude sessions` subcommand and archive/cleanup tooling. Current JSONL accumulation is unmanageable.

3. **Session title via hooks** (#58763) — Developers want hooks or skills to programmatically set chat session titles, enabling better project organization.

4. **Mermaid rendering in Claude Desktop** (#52517, 9 👍) — GUI tab lacks diagram rendering that terminal TUI is working toward. Users want native SVG/PNG output.

5. **Wrap long lines in VS Code panel** (#63405) — Chat panel forces horizontal scroll instead of word-wrap. Small but frequently mentioned.

---

## Developer Pain Points

- **Windows instability remains the #1 recurring theme**: data loss after updates (#53717), x64 microphone regression (#72284), path separator breakage, and Python stub issues all point to Windows as the most fragile platform. Multiple PRs this week are Windows-only fixes.

- **Cost explosion without guardrails**: Unbounded agent spawning (#63386) and runaway token consumption (#58396) show that Claude Code lacks effective cost ceilings. Users are getting $50–€450 bills from single sessions.

- **Session reliability erodes with length**: Opus 4.8 confabulation (#67606), thinking-block corruption (#63277), and incomplete `/rewind` (#14002) all manifest in longer sessions. The tool becomes less trustworthy over time.

- **MCP/OAuth friction for enterprise**: The Entra ID auth bug (#52871) and general OAuth connectivity issues (#62981) signal that MCP's enterprise auth path needs hardening. Enterprise adopters are hitting configuration walls.

- **Daemon lifecycle still fragile on Linux**: Transient daemon cycling (#68146), control-socket bind races (#72334), and permission prompt false flags (#72168) make Linux a second-class citizen for background agent operations.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date: 2026-07-01**

---

## Today's Highlights

The Codex community remains highly engaged, with the all-time top-voted issue—a **Linux desktop app** (#11023, 667 👍)—still awaiting action. A critical **SQLite logging performance bug** (#28224) has been resolved after community pressure, slashing potential 640 TB/year writes. Meanwhile, a surge of **Windows sandbox reliability issues** and user reports of **degraded model quality** following the 06/23 update are the dominant themes today.

---

## Releases

No new releases in the last 24 hours. The latest stable track is **v0.142.x** (CLI) and **Version 26.623.x** (Desktop App).

---

## Hot Issues

1. **#11023** – [Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)
   - *The top-voted open issue (667 👍, 135 comments).* Users on Linux are effectively blocked from Desktop due to macOS power issues. Community frustration is high given months of silence.
2. **#28224** – [Codex SQLite feedback logs can write ~640 TB/year](https://github.com/openai/codex/issues/28224)
   - *Now closed after merging 3 PRs.* Community-driven debugging identified massive SSD wear from verbose logging. The fix reduces log volume by ~85%.
3. **#30364** – [GPT-5.5 reasoning-token clustering at 516/1034/1552](https://github.com/openai/codex/issues/30364)
   - *New, 27 comments.* A sharp-eyed user found model responses land at fixed token boundaries, suggesting truncation or caching that degrades complex reasoning.
4. **#8648** – [Codex replies to earlier messages instead of latest](https://github.com/openai/codex/issues/8648)
   - *65 comments, 55 👍.* Long-standing context-switching bug in multi-turn conversations causing assistant to respond to wrong turn.
5. **#28969** – [Add setting to disable auto-resolve after 60 seconds](https://github.com/openai/codex/issues/28969)
   - *63 👍, high demand.* CLI users want control over the automatic question-resolution timeout. Seen as workflow-breaking for complex investigations.
6. **#16404** – [TUI voice transcription removed in 0.118.0](https://github.com/openai/codex/issues/16404)
   - *Closed, but 27 comments.* Terminal-first users are pushing for a CLI-native dictation path. Desktop-only `Ctrl+M` not seen as equivalent.
7. **#14630** – [Voice transcription for TUI](https://github.com/openai/codex/issues/14630)
   - *46 👍, 17 comments.* Sister request to #16404: users want OpenAI's superior voice transcription models in CLI, not just OS dictation.
8. **#30759** – [Quality of code analysis and generation dropped precipitously](https://github.com/openai/codex/issues/30759)
   - *New, 3 comments.* Reports of sudden output degradation around 06/23–24, possibly linked to model updates or routing changes.
9. **#30712** – [Windows sandbox forces fallback to PowerShell for file writes](https://github.com/openai/codex/issues/30712)
   - *New.* `apply_patch` fails due to split writable roots, forcing agents to bypass sandbox entirely — a security concern.
10. **#25453** – [Windows Desktop spawns powershell.exe every second](https://github.com/openai/codex/issues/25453)
    - *5 comments.* High CPU usage due to aggressive process polling. Recurring Windows-specific performance issue.

---

## Key PR Progress

1. **#30757** (CLOSED) – [Remove full text websocket trace](https://github.com/openai/codex/pull/30757)
   - Follow-up to the logging fix (#28224). Removes one more verbose trace that leaked request payloads.
2. **#30765** (OPEN) – [Enable tool search for fallback models](https://github.com/openai/codex/pull/30765)
   - Ensures unknown/fallback model slugs still get `tool_search` capability, avoiding silent feature degradation.
3. **#27914** (OPEN) – [Fail closed on executable Git worktree helpers](https://github.com/openai/codex/pull/27914)
   - Security hardening: prevents repository-configured Git content filters from executing during patch operations.
4. **#30752** (OPEN) – [Add configurable reasoning summary delivery](https://github.com/openai/codex/pull/30752)
   - New `reasoning_summary_delivery` config (`sequential`/`concurrent`/`concurrent_cutoff`) for controlling reasoning token streaming.
5. **#30628** (OPEN) – [Trust only system PowerShell parsers on Windows](https://github.com/openai/codex/pull/30628)
   - Security: prevents arbitrary `pwsh.exe` from being used as AST parser; only system-located parsers trusted.
6. **#29470** (OPEN) – [Deny implicit transport for local-only Git operations](https://github.com/openai/codex/pull/29470)
   - Blocks Git from lazily fetching objects from promisor remotes during local operations — a partial-clone attack vector.
7. **#28307** (CLOSED) – [Queue TUI follow-ups through app-server](https://github.com/openai/codex/pull/28307)
   - TUI follow-ups now survive process restarts by being queued server-side. Part of multi-session reliability effort.
8. **#28264** – [Extract core user submission payload](https://github.com/openai/codex/pull/28264) *(series closed)*
   - Refactors turn handling: `UserSubmission` as named type. Foundation for better idle-turn processing and queuing.
9. **#28265** – [Accept user submissions at idle turn boundaries](https://github.com/openai/codex/pull/28265) *(closed)*
   - Core now admits queued user messages during idle gates. Enables Plan mode and telemetry for buffered inputs.
10. **#28267** – [Dispatch queued user messages through core idle extensions](https://github.com/openai/codex/pull/28267) *(closed)*
    - Prevents race conditions between server-side turn completion and core follow-up work by unifying the idle path.

---

## Feature Request Trends

- **Linux Desktop App** (#11023) – Still the dominant unmet feature request. No official acknowledgment of timeline.
- **TUI Voice Transcription** (#16404, #14630) – Terminal users want parity with Desktop dictation, using OpenAI's voice models.
- **Configurable Auto-Resolve Timeout** (#28969) – Demand for CLI user control over the 60-second auto-answer behavior.
- **C#/.NET Support in codex-universal** (#13430) – Growing request from .NET ecosystem for containerized Codex.
- **Install Location Choice on Windows** (#21074) – System administrators need control over app installation paths.

---

## Developer Pain Points

- **Windows Sandbox Reliability** – Multiple open issues (#30009, #30712, #30758) show `apply_patch` and sandbox helpers failing inconsistently on Windows, forcing security bypasses.
- **Model Quality Degradation** (#30759, #30696, #30364) – Reports of sudden performance drops around 06/23, with users correlating to model updates or reasoning-token boundaries.
- **Subagent UI Ghosting** (#23930, #25179) – Completed subagents remain stuck in Desktop UI, with no reliable way to close them.
- **Stale Session and Conversation Bugs** (#30410, #30767, #8648) – Chat history failures, wrong-turn replies, and ownership errors frustrate multi-turn workflows.
- **Rate Limit Confusion** (#30772) – Subscription upgrades not reflected in CLI, showing "hit usage limit" errors post-upgrade.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-01

---

## Today's Highlights

Agent reliability continues to dominate the conversation, with two critical P1 bugs—subagent false-positive success reporting and generalist agent hangs—still unresolved after months. A flurry of sandbox security hardening PRs landed, including read-only `~/.gitconfig` enforcement and file-write scope restrictions to mitigate prompt injection escape vectors. Meanwhile, infrastructure for the new Caretaker Agent (automated triage) is taking shape with two large PRs for its Cloud Run webhook ingestion and triage worker core.

---

## Releases

**v0.51.0-nightly.20260630.gae0a3aa7b** — Standard nightly release.  
Full changelog: [v0.51.0-nightly.20260629...v0.51.0-nightly.20260630](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260629.gae0a3aa7b...v0.51.0-nightly.20260630.gae0a3aa7b)

No breaking changes or major feature flags were included in this build.

---

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, Bug, 8 comments)
   The `codebase_investigator` subagent hits its turn limit without doing any analysis, but the orchestrator interprets the return as `status: "success"` / `Termination Reason: "GOAL"`. This silent failure erodes trust in agent output and could mislead users into acting on incomplete results. Upvoted twice, indicating community concern.

2. **[#19873 — Leverage model's bash affinity via Zero-Dependency OS Sandboxing](https://github.com/google-gemini/gemini-cli/issues/19873)** (P2, Enhancement, 8 comments)
   A long-running proposal to let Gemini 3's native POSIX tool-chaining run in a lightweight sandbox rather than forcing the model into safer-but-less-natural tool use. This would improve both correctness and security but requires careful design to avoid frustrating the model's "preferred" workflow.

3. **[#21409 — Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, Bug, 7 comments, 8 👍)
   Users report that trusting the generalist agent with simple tasks (e.g., folder creation) results in indefinite hangs. The only workaround is explicitly disabling subagent delegation. This remains the most upvoted open bug and suggests a core orchestration deadlock.

4. **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** (P1, EPIC, 7 comments)
   Tracks building a proper eval infrastructure atop 76 existing behavioral tests. Critical for detecting regressions before releases, especially given the fragility shown in other agent issues.

5. **[#22745 — Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (P2, EPIC, 7 comments)
   Investigates whether AST-aware tooling can reduce turn count and token waste by precisely targeting method bounds during codebase investigation. Could dramatically improve performance for large-repo users.

6. **[#25166 — Shell command gets stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, Bug, 4 comments, 3 👍)
   Even trivial commands that produce no stdout hang while the shell shows "Awaiting user input". This breaks interactive workflows and suggests a PTY/child-process management bug in the core shell execution layer.

7. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2, Bug, 6 comments)
   User-crafted custom skills are ignored unless explicitly invoked by name, defeating the purpose of skill-based customization. The model appears to lack awareness of available skills during autonomous reasoning.

8. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, Bug, 5 comments)
   Auto Memory sends transcript content to the model before redacting secrets, and the extraction prompt relies on the model itself to redact—a security anti-pattern. Also, the service can log existing skills, creating an exfiltration risk.

9. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (P2, Bug, 5 comments)
   If the extraction agent decides a session is low-signal and skips it, that session remains "unprocessed" and gets surfaced again on the next cycle. This causes infinite retries of sessions the model itself deemed irrelevant.

10. **[#22267 — Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)** (P2, Bug, 3 comments)
    Configuration like `maxTurns` in `settings.json` is correctly parsed by the `AgentRegistry` but silently ignored during browser agent execution. A configuration UX regression that undermines the customization model.

---

## Key PR Progress

1. **[#28224 — fix: avoid splitting emoji when truncating display strings](https://github.com/google-gemini/gemini-cli/pull/28224)** (size/s, OPEN)
   Terminals get corrupted replacement characters when `sanitizeForDisplay` truncates mid-surrogate-pair. This surgical fix uses proper Unicode-aware truncation. Small change, high impact for users on platforms with emoji-heavy filenames.

2. **[#28223 — bypass LLM correction for JSON and IPYNB files](https://github.com/google-gemini/gemini-cli/pull/28223)** (size/m, OPEN)
   Both `write_file` and `replace` were corrupting `.ipynb` and `.json` files because the LLM "corrects" formatting after the tool executes. This PR skips that post-processing for structured data formats—a targeted fix for a critical user-facing bug.

3. **[#28015 — implement Cloud Run webhook ingestion service](https://github.com/google-gemini/gemini-cli/pull/28015)** (size/l/xl, CLOSED)
   The first piece of the Caretaker Agent: a webhook endpoint that verifies GitHub signatures, stores issues in Firestore, and publishes to Pub/Sub. Closed after merge—large infrastructure investment for automated triage.

4. **[#28163 — add triage worker core foundation (part 1/2)](https://github.com/google-gemini/gemini-cli/pull/28163)** (size/l, OPEN)
   Part 1 of the Triage Worker for the Caretaker Agent. Defines the worker's core modules, split to keep reviews manageable. Will likely close after part 2 lands.

5. **[#28221 — make ~/.gitconfig read-only in macOS sandbox](https://github.com/google-gemini/gemini-cli/pull/28221)** (size/xs/m/l, OPEN)
   Removes `~/.gitconfig` from the seatbelt sandbox's writable set. Since git config can drive arbitrary command execution via aliases and hooks, this closes a sandbox escape vector. Security hardening welcomed by the community.

6. **[#28126 — show ellipsis on multi-line edit snippets](https://github.com/google-gemini/gemini-cli/pull/28126)** (size/m/l, OPEN)
   `EditToolInvocation.getDescription()` now appends `...` when content is truncated. While cosmetic, this improves terminal UX by signaling that more changes exist than what's shown—reducing user confusion during complex edits.

7. **[#28164 — limit recursive reasoning turns per user request](https://github.com/google-gemini/gemini-cli/pull/28164)** (size/m, OPEN)
   Implements a hard cap of 15 recursive reasoning turns per request (configurable). Prevents infinite loops from consuming local CPU and API quota. Addresses a common user complaint about runaway reasoning.

8. **[#28215 — harden file-write scope: stop writes to .gemini and .gitconfig](https://github.com/google-gemini/gemini-cli/pull/28215)** (size/m, CLOSED)
   Closes sandbox escapes via prompt injection by blocking writes to `.gemini/` (config) and `.gitconfig`. When auto-accept is on, the agent could otherwise modify its own permissions. Closed and merged; a companion to #28221.

9. **[#27971 — strip thoughts from scrubbed history turns](https://github.com/google-gemini/gemini-cli/pull/27971)** (size/m/l, OPEN)
   Resolves "thought leakage": the model's internal reasoning appearing in saved history turns, which then confuses the model on subsequent conversations. The fix strips monologue tokens from plain-text history. Addresses a subtle but quality-of-life degrading bug.

10. **[#28219 — parse commented settings.json in memory bootstrap](https://github.com/google-gemini/gemini-cli/pull/28219)** (size/s, OPEN)
    The lightweight CLI parent process silently fell back to defaults when reading `settings.json` with comments. This PR swaps to a parser that tolerates comments, fixing an obscure configuration-load failure.

---

## Feature Request Trends

- **Automated sandboxing**: Multiple issues (especially #19873) request moving from the current post-hoc security model to a native, lightweight sandbox that lets Gemini 3 use its preferred bash toolchain without compromising user safety.
- **AST-aware tooling**: Issues #22745 and #22746 suggest moving beyond regex/grep-based codebase understanding to AST-level file reads and search, promising fewer turns and lower token usage for large repositories.
- **Agent & skill self-awareness**: A recurring theme across #21968, #21432, and #22672 is that the model doesn't know what skills/sub-agents it has, doesn't use them autonomously, and lacks awareness of destructive operations—effectively asking for a "meta-prompt" layer that lets the model introspect its own capabilities.
- **Component-level evaluation infrastructure**: EPIC #24353 and related issue #15300 signal a push to formalize regression testing for agent behavior, suggesting the team is prioritizing release quality as the tool matures.

---

## Developer Pain Points

- **Subagent orchestration reliability**: Issues #22323 (false success), #21409 (hangs), and #21763 (no bug report context from subagents) paint a picture of an agent orchestration layer that is fragile, opaque, and prone to silent failures. Developers are frustrated by lost time debugging ghost failures.
- **Shell execution unpredictability**: Commands getting stuck (#25166), interactive prompts confusing the agent (#22465), and the model scattering temp scripts (#23571) make headless/sandboxed execution feel unpredictable. The "Waiting input" bug is especially painful because it hangs even trivial commands.
- **Security friction**: Users report subagents running without permission (#22093) and express concern about Auto Memory logging skills (#26525). The sandbox hardening PRs (#28221, #28215) are directly responding to prompt-injection escape vectors, indicating the team acknowledges real risk.
- **Configuration inconsistencies**: The Browser Agent ignoring `settings.json` (#22267), symlinked agents not being recognized (#20079), and commented JSON breaking bootstrap (#28219) all erode trust in the configuration system. Developers invest time in setup only to find it silently ignored.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest — 2026-07-01**

**1. Today's Highlights**
Two releases shipped yesterday (v1.0.66 & v1.0.67) with UX polish: sandbox bypass is now immediate, block cursor is restored on exit, and Claude Opus 4.8 Fast support lands. The community is heavily focused on MCP permission controls, project-scoped plugins, and persistent autopilot mode, with a spike in clipboard/flicker regressions on Windows.

**2. Releases**
- **v1.0.67** (2026-06-30) — Sandbox disable takes effect mid-session without re-prompting; subagent sessions inherit parent tool restrictions; clearer error output for custom agent load failures; session limit enforcement.
- **v1.0.66** (2026-06-30) — Non-blinking block cursor during interactive sessions (restores default on exit); support for Claude Opus 4.8 Fast, deprecates 4.6 Fast; MCP add/edit form accepts `Key: value` HTTP headers; LSP double-start fix.

**3. Hot Issues** (10 noteworthy)
- [#2684](https://github.com/github/copilot-cli/issues/2684) — Persistent auth errors after login. 13 comments. High signal: affects all `/login` workflows, likely a token refresh bug. Community frustrated by no resolution in ~2.5 months.
- [#1665](https://github.com/github/copilot-cli/issues/1665) — Request for project/repo-scoped plugins (not per-user). 10 comments, 17 👍. Strong demand: teams need per-repo plugin configs without global bleed.
- [#2334](https://github.com/github/copilot-cli/issues/2334) — "Bring back no-alt-screen" (CLOSED). 8 comments, 29 👍. UX regression: users hate losing scrollback and find-in-history. Reopened by community demand.
- [#3028](https://github.com/github/copilot-cli/issues/3028) — MCP permissions: add allowlist for tool usage (like `trustedFolders`). 7 comments, 5 👍. Directly ties to enterprise adoption.
- [#98](https://github.com/github/copilot-cli/issues/98) — Integrate with `prompts/*.md` for reusable instruction files. 7 comments, 28 👍. Long-standing (since Sep 2025): cross-tool prompt portability.
- [#3727](https://github.com/github/copilot-cli/issues/3727) — Regression: `userPromptSubmitted` hook `additionalContext` lost in v1.0.60. 6 comments. Plugin authors tracking hard — breaks custom context injection.
- [#179](https://github.com/github/copilot-cli/issues/179) — Globally configurable allowed tools (`config.json`). 3 comments, 41 👍. Most-upvoted open issue: enterprise security demands global tool allowlist, inspired by Claude Code.
- [#1504](https://github.com/github/copilot-cli/issues/1504) — Custom theme support. 4 comments, 20 👍. High demand for shareable JSON themes and `/theme` command extendability.
- [#3948](https://github.com/github/copilot-cli/issues/3948) — `web_fetch` always fails with `TypeError: fetch failed`. 3 comments. Networking regression: affects all web-reading use cases.
- [#3984](https://github.com/github/copilot-cli/issues/3984) — Flicker on Windows (regression of #158). New today. Block cursor (#2507) amplifies the issue — significant UX degradation for Windows users.

**4. Key PR Progress** (10 notable)
- [#2587](https://github.com/github/copilot-cli/pull/2587) (CLOSED) — Adds automated issue classification using GitHub Agentic Workflows. Auto-applies `area:` and `triage` labels. Mature signal for CI/CD integrations.
- [#3880](https://github.com/github/copilot-cli/pull/3880) (OPEN) — Spam/low-effort PR (React card component). Flag for closure.
- No other high-impact PRs were updated in the last 24h. The project is currently in a bug-fix and stabilization phase post-v1.0.66/67.

**5. Feature Request Trends**
- **Project-scoped configuration dominance** (#1665, #98): Users want per-repo plugins, prompt files, and instruction sets — not global-only.
- **MCP policy controls** (#3028, #179, #3982): Enterprise demand for granular tool allowlists, OAuth flow respect for MCP servers, and global permission configs.
- **Persistent autopilot mode** (#3977): New request to make `--autopilot` stick across turns, not just initial mode.
- **Custom theming** (#1504): Shareable terminal themes via JSON, extensible via `/theme`.
- **Live extension panels** (#3979): Extensions want real-time terminal dashboards, not just scrolling logs.

**6. Developer Pain Points**
- **Authentication instability** (#2684): Persistent "re-login" errors despite valid sessions — top frustration by comment count.
- **Windows UX regressions** (#3984, #3981): Flickering cursor + broken clipboard copy are recurring complaints. #3981 reports entire clipboard fails while CLI runs.
- **Clipboard/Copy failures** (#3985, #3981): Wayland protocol issues on Linux and clipboard hogging on Windows — platform-specific pain.
- **Context window exhaustion cycles** (#3158): Agents fall into Plan→Compact→Re-Plan infinite loops on large sessions, wasting 200+ turns with zero execution.
- **BYOK model mismatch** (#3978, #3911): BYOK users hit null pointer errors and automatic fallback to deprecated models after AIC exhaustion.
- **native `tgrep` OOM kills** (#3976): Monorepo users report the new trigram indexer has no memory cap, leading to host OOM kills at startup.

*Next digest: 2026-07-08. Data source: github.com/github/copilot-cli*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date: 2026-07-01**

---

## Today's Highlights

The Kimi Code CLI community saw limited activity over the past 24 hours, with no new releases and only one open issue reported. However, two long-standing pull requests saw recent updates, signaling incremental progress on UX improvements. The primary developer concern this cycle centers around authentication approval reliability.

---

## Releases

- **No new releases in the last 24 hours.** The latest stable version remains **v0.20.1**.

---

## Hot Issues (Top 10 Noteworthy)

Given low volume, the following represents the most relevant open issues from the repository:

1. **#2480 — [bug] Approve for this session doesn't work** [OPEN]  
   *Reporter: Econ01*  
   Users running Kimi Code CLI v0.20.1 on Darwin arm64 report that the "Approve for this session" feature fails to persist authentication state, forcing repeated re-authentication during a workflow. This is a critical UX blocker for developers using OAuth. No comments or upvotes yet.  
   [GitHub Link](https://github.com/MoonshotAI/kimi-cli/issues/2480)

*Note: With only one issue updated in the last 24h, the remaining 9 slots are omitted due to insufficient activity. Full repository issue tracking is recommended for comprehensive visibility.*

---

## Key PR Progress (Top 10 Important)

Two pull requests saw updates in the last 24 hours:

1. **#1600 — feat(shell): highlight user input with bright blue and separator for better visibility** [OPEN]  
   *Author: liuchong*  
   Aims to improve visual distinction of user messages in the shell UI by using bright blue (#007AFF) and adding a full-width separator below user input. This addresses developer feedback around reading conversational flow in long shell sessions. Updated on 2026-06-30 after months of inactivity.  
   [GitHub Link](https://github.com/MoonshotAI/kimi-cli/pull/1600)

2. **#2246 — feat(shell): add --prompt-interactive option** [CLOSED]  
   *Author: shuizhongyueming*  
   Introduces a new `--prompt-interactive` (`-P`) CLI option to pass an initial prompt when starting the shell UI while keeping the session open for follow-ups. This resolves feature request #2240 and was merged/closed on 2026-06-30. Valuable for scripting and CI integration workflows.  
   [GitHub Link](https://github.com/MoonshotAI/kimi-cli/pull/2246)

*Note: Only 2 PRs updated in the last 24h. Remaining 8 slots are omitted.*

---

## Feature Request Trends

Based on longitudinal issue analysis across the repository, the most consistently requested feature directions include:

- **Persistent session management** — Requests for better authentication token caching and “approve for session” reliability (directly relates to #2480)
- **Customizable shell UI themes** — Developers want control over prompt styling, colors, and separators to match terminal preferences (aligned with PR #1600)
- **Scriptable initiation** — Growing demand for CLI flags that pass initial prompts while keeping interactive sessions open (addressed by merged PR #2246)
- **Multi-model switching** — Users want the ability to switch between K2.7 Code and other models mid-session without restarting
- **Output streaming controls** — Requests for configurable verbosity levels and structured output formats (e.g., JSON) for pipeline usage

---

## Developer Pain Points

Recurring frustrations and high-frequency requests from the community include:

- **Authentication instability** — OAuth session approvals not persisting across commands, forcing repeated re-auth, especially on macOS (Darwin)
- **Inconsistent error messaging** — Some validation failures produce opaque error codes without actionable guidance
- **Slow startup time** — Users report noticeable latency when initializing the CLI, particularly with large context windows
- **Limited CI integration examples** — Lack of documented patterns for using Kimi Code CLI in automated pipelines or GitHub Actions
- **Unclear version compatibility** — Different model versions (e.g., K2.7 Code) showing inconsistent behavior across CLI updates, with no compatibility matrix

---

*Digest generated automatically from GitHub activity data. For full context, visit [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-01

## Today's Highlights

The v1.17.12 patch brings adaptive thinking for Claude Sonnet 5 and critical MCP OAuth reconnection fixes. A major question UI overhaul PR (#34116) consolidates 14 UI bug fixes into a single merge candidate, while the persistent GitHub Copilot `gpt-5.5` stale item ID bug (#31236) now has two competing fix PRs. Memory issues remain the most active community discussion with 105 comments, and multiple reports of Zen paid balance not lifting free-tier caps signal a growing billing concern.

---

## Releases

**v1.17.12** — Core bugfix patch:
- **Adaptive thinking** enabled for Claude Sonnet 5
- **MCP content responses** now preferred over structured output when both are present
- **MCP server reconnection** after OAuth now works even if the server was disabled (@MaxAnderson95)
- **MCP refresh-token scope** requested during OAuth
- **MCP OAuth completion** UI improvements

---

## Hot Issues

1. **#20695 — Memory Megathread** (105 comments, 77 👍)  
   [Link](https://github.com/anomalyco/opencode/issues/20695)  
   Central collection point for heap snapshot debugging. Maintainers explicitly ask *not* to run LLMs suggesting solutions — they need manual heap dumps from users. Highest engagement issue by far.

2. **#7602 — Native Model Fallback / Failover Support** (28 comments, 90 👍)  
   [Link](https://github.com/anomalyco/opencode/issues/7602)  
   No way to define fallback between different models (e.g., Model A → Model B on error). Only same-model provider fallback currently exists. Strong demand for long-running agent reliability.

3. **#8463 — `--dangerously-skip-permissions` (YOLO mode)** (23 comments, 89 👍)  
   [Link](https://github.com/anomalyco/opencode/issues/8463)  
   Request for a flag to bypass all permission prompts in trusted/automated environments. Community split between convenience and safety concerns.

4. **#16017 — Go plan usage/balance API endpoint** (21 comments, 84 👍)  
   [Link](https://github.com/anomalyco/opencode/issues/16017)  
   Expose subscription usage data via public API (rolling/weekly/monthly windows). Currently only visible in dashboard. High demand from power users.

5. **#24879 — Go Pro tier ($20) and Share modifier with first-month discounts** (10 comments, 6 👍)  
   [Link](https://github.com/anomalyco/opencode/issues/24879)  
   Users hitting Go monthly cap want a higher tier plus shareable credit pools. Suggests Zen pay-as-you-go is hard to budget.

6. **#33696 — GitHub Copilot provider broken** (7 comments, 5 👍, updated today)  
   [Link](https://github.com/anomalyco/opencode/issues/33696)  
   After fresh auth flow, no models found. Provider appears unauthorized despite successful OAuth. Fresh report with screenshots.

7. **#33318 & #33495 — Zen balance does not remove free usage cap** (6 + 4 comments)  
   [Link](https://github.com/anomalyco/opencode/issues/33318) | [Link](https://github.com/anomalyco/opencode/issues/33495)  
   Users with paid Zen balances still hit 200-request free limit and `FreeUsageLimitError`. Two separate accounts confirmed. Billing logic bug.

8. **#28956 — Question prompt overlay blocks response text** (6 comments)  
   [Link](https://github.com/anomalyco/opencode/issues/28956)  
   AI `question` tool overlays terminal UI with no minimize/close button. Users cannot scroll back to read previous response. Addressed by PR #34116.

9. **#31236 — Copilot gpt-5.5: stale Responses API item ID** (4 comments, closed)  
   [Link](https://github.com/anomalyco/opencode/issues/31236)  
   `input item ID does not belong to this connection` after auth token switch mid-session. Deterministically reproducible. Now has two fix PRs (#32451, #34686).

10. **#34640 — MCP optional array fields materialized as empty arrays** (4 comments)  
    [Link](https://github.com/anomalyco/opencode/issues/34640)  
    Omitted optional array params sent as `[]`, triggering mutually-exclusive argument validation. Breaks tools where arrays are optional.

---

## Key PR Progress

1. **#34677 — `feat: experimental codemode`** (recently opened)  
   [Link](https://github.com/anomalyco/opencode/pull/34677)  
   New experimental mode. Details TBD. Worth watching.

2. **#34686 — `fix(core): stop replaying stale GitHub Copilot Responses item IDs`** (closed)  
   [Link](https://github.com/anomalyco/opencode/pull/34686)  
   Fixes #31236. Strips stale per-connection response item handles from provider metadata before reuse. Competes with #32451.

3. **#34688 — `fix(session-ui): recognize more inline file paths`** (opened today)  
   [Link](https://github.com/anomalyco/opencode/pull/34688)  
   Expands inline code path detection to `.mjs/.cjs`, framework files, GraphQL, Dockerfile, dotfiles. Bot-authored.

4. **#34116 — `fix(app): question UI fixes and UX improvements`** (open, closes 14 issues)  
   [Link](https://github.com/anomalyco/opencode/pull/34116)  
   Major question overlay cleanup: scrollable questions, minimized dialog, text trimming fixes. Closes #11014, #14924, #15186, #15896, #23515, #23730, #28956, and 7 more.

5. **#34680 — `feat(provider): use models.dev reasoning options`** (open)  
   [Link](https://github.com/anomalyco/opencode/pull/34680)  
   Parses `reasoning_options` from models.dev, drives provider reasoning variants, adds budget-token handling for Anthropic/Claude.

6. **#34684 — `fix(app): show unread for pending questions`** (open)  
   [Link](https://github.com/anomalyco/opencode/pull/34684)  
   Pending session questions now trigger tab attention state with unread indicator, like permissions.

7. **#32451 — `fix: strip copilot response item ids`** (open)  
   [Link](https://github.com/anomalyco/opencode/pull/32451)  
   Alternative fix for #31236. Stale Copilot response IDs could cause 401 after session switch.

8. **#34682 — `feat: added auto model for github copilot provider`** (open)  
   [Link](https://github.com/anomalyco/opencode/pull/34682)  
   Adds Auto Model picker for GitHub Copilot, matching VSCode behavior. Addresses #34644.

9. **#33950 — `fix(acp): show real tool context in permission prompt title`** (open)  
   [Link](https://github.com/anomalyco/opencode/pull/33950)  
   ACP permission prompts now show actual tool context instead of generic `permission.permission`. Closes #33949.

10. **#28921 — `fix(acp): include shell command and file path in permission prompts`** (closed)  
    [Link](https://github.com/anomalyco/opencode/pull/28921)  
    Improves permission dialogs with real command/file context. Closes #4240. Human note: used OpenCode itself to write this PR.

---

## Feature Request Trends

1. **Model fallback/failover** (#7602, 90 👍) — Cross-model automatic retry on error or rate limit. Highest-voted open feature.
2. **YOLO / no-permissions mode** (#8463, 89 👍) — Skip permission prompts entirely for automation/trusted environments.
3. **Usage/balance API** (#16017, 84 👍) — Public endpoints for subscription analytics; dashboard-only data is insufficient.
4. **Pricing tier expansion** (#24879) — Go Pro ($20) tier with shared credits; community finds Zen uncapped pricing hard to budget.
5. **Reasoning disable toggle** (#28371) — Per-model or global option to skip reasoning chain to save tokens.
6. **Session state freshness polling** (#33783) — Web UI users want real-time session status without manual refresh.
7. **Drizzle Effect SQLite upstream evaluation** (#34648) — Bot-opened feature to evaluate replacing vendored SQLite integration for OpenCode 2.0.

---

## Developer Pain Points

1. **Zen billing confusion** — Multiple reports (#33318, #33495) that paid Zen balances do not bypass free-tier limits. Users add credits but still get `FreeUsageLimitError`. Critical as this directly blocks paid usage.
2. **Network error non-retry** — `ETIMEDOUT` and other transient failures (#30611, #34672) are treated as hard errors instead of retryable. Causes session failures during brief network blips.
3. **MCP tool argument semantics** (#34640) — Optional array fields become empty arrays, breaking tools with mutually-exclusive argument validation. MCP integration friction.
4. **Question overlay UX** (#28956, #23515, #11014, #11367) — Multiple overlapping reports: question panes block response text, no scroll, no dismiss. Core UX pain point with high volume of related issues.
5. **Home/End key binding conflict** (#27661) — Terminal navigation keys scroll message list instead of moving cursor in input box. Long message editing is broken.
6. **Clipboard on Linux** (#32585) — "Copied to clipboard" confirmation but nothing actually copied on Ubuntu.
7. **ResourceExhausted concurrency limit** (#34657) — Worker local total request limit (32) hit with multiple workspaces. Community submitted rate limiter plugin as workaround.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-01

## Today's Highlights

Pi v0.80.3 ships with support for Anthropic Claude Sonnet 5, marking a significant provider expansion. The community is actively discussing session lifecycle improvements, particularly around durable HITL interrupts and extension tool state refresh across agent runs. A notable spike in bug reports around provider-specific encoding issues (base64, pricing) and streaming resilience suggests the recent provider catalog expansion is exercising new edge cases.

## Releases

- **v0.80.3** — Adds Anthropic Claude Sonnet 5 support through inherited Anthropic-compatible and Bedrock provider catalogs with adaptive thinking enabled. ([Release details](https://github.com/earendil-works/pi/blob/v0.80.3/packages/coding-agent/docs/providers.md))

## Hot Issues

1. **#5654 — `excludeFromContext` for custom messages** (OPEN, 8 comments)  
   Request to mirror the bash-execution `excludeFromContext` flag on `CustomMessage`/`sendMessage()`. High community engagement suggests many extension authors need selective context filtering.  
   [Issue link](https://github.com/earendil-works/pi/issues/5654)

2. **#4687 — Screen reader support broken by ASCII art** (CLOSED, 6 comments)  
   TUI borders, selectors, and decorations create noise for screen readers. Accessibility remains an ongoing concern, though this was closed without clear resolution.  
   [Issue link](https://github.com/earendil-works/pi/issues/4687)

3. **#4338 — Agent says "working" but makes no progress** (CLOSED, 6 comments)  
   Agent enters infinite loops without observable output. Closed with `closed-because-refactor` tag, but the underlying looping behavior is a recurring complaint.  
   [Issue link](https://github.com/earendil-works/pi/issues/4338)

4. **#6103 — OpenAI Responses API mislabels empty tool results** (OPEN, 4 comments)  
   Empty tool outputs are incorrectly labeled "(see attached image)", misleading the model. Exposed by the `pi-hashline-edit-pro` extension but latent in core. A PR (#6196) is already open.  
   [Issue link](https://github.com/earendil-works/pi/issues/6103)

5. **#5901 — Durable HITL tool-call interrupts** (CLOSED, 4 comments)  
   Proposal for persistent human-in-the-loop approval for tool calls, similar to LangGraph middleware. Closed as `no-action`, but the feature gap is notable for enterprise integrations.  
   [Issue link](https://github.com/earendil-works/pi/issues/5901)

6. **#5463 — Auto-compaction after final turn throws error** (OPEN, 3 comments)  
   Compactation after an assistant message causes an unhandled `Cannot continue from message role: assistant` error. High 👍 count (5) indicates many users encountering this.  
   [Issue link](https://github.com/earendil-works/pi/issues/5463)

7. **#6133 — ECONNRESET crashes Pi during streaming** (CLOSED, 2 comments)  
   Upstream provider TCP resets cause `uncaughtException` rather than graceful retry. Closed quickly but highlights a reliability gap in the streaming layer.  
   [Issue link](https://github.com/earendil-works/pi/issues/6133)

8. **#6151 — Support direct image_url content type** (OPEN, 2 comments)  
   Currently all `ImageContent` items are base64-converted; request to pass URLs directly to reduce bandwidth and latency for large images.  
   [Issue link](https://github.com/earendil-works/pi/issues/6151)

9. **#6162 — Extension tool changes not applied before next provider request** (CLOSED, 2 comments)  
   `pi.setActiveTools()` during tool execution doesn't take effect until the next run. Core extension lifecycle bug. Fixed in PR #6176.  
   [Issue link](https://github.com/earendil-works/pi/issues/6162)

10. **#6187 — Pi login hangs in WSL after GitHub Copilot device auth** (OPEN, 1 comment)  
    Browser-based authorization completes but WSL terminal doesn't detect it. Platform-specific integration bug affecting Windows developers.  
    [Issue link](https://github.com/earendil-works/pi/issues/6187)

## Key PR Progress

1. **#6196 — Fix empty tool result mislabeling** (CLOSED)  
   Returns empty string instead of "(see attached image)" for empty tool results. Direct fix for #6103.  
   [PR link](https://github.com/earendil-works/pi/pull/6196)

2. **#5678 — Add `excludeFromContext` for custom messages** (OPEN, inprogress)  
   Core implementation by mitsuhiko. Persists flagged messages but skips them in `convertToLlm`. Also teaches compaction and branch summarization.  
   [PR link](https://github.com/earendil-works/pi/pull/5678)

3. **#6176 — Apply extension tool changes within the same run** (CLOSED, inprogress)  
   Fixes session runtime state refresh between turns. Ensures `setActiveTools()` from extensions takes effect immediately.  
   [PR link](https://github.com/earendil-works/pi/pull/6176)

4. **#6182 — Add redo support to editors** (CLOSED)  
   Follow-up on long-standing #959, adding redo operations to the TUI editor.  
   [PR link](https://github.com/earendil-works/pi/pull/6182)

5. **#6190 — Add PI_SKILL_PATH environment variable** (CLOSED)  
   Enables per-repo skill path configuration via `.envrc`, reducing CLI overhead for multi-repo workflows.  
   [PR link](https://github.com/earendil-works/pi/pull/6190)

6. **#6115 — Add configurable chat padding** (CLOSED, to-discuss)  
   Addresses long-standing community request for removing TUI padding. Author notes this is a significant change given current architecture.  
   [PR link](https://github.com/earendil-works/pi/pull/6115)

7. **#6169 — Disable padding for assistant messages** (CLOSED, inprogress)  
   Quick fix specific to assistant message padding, complementary to #6115.  
   [PR link](https://github.com/earendil-works/pi/pull/6169)

8. **#6175 — Emit session name changes to extensions** (CLOSED, inprogress)  
   Ensures extensions receive `session:nameChanged` events, enabling better session management in UIs.  
   [PR link](https://github.com/earendil-works/pi/pull/6175)

9. **#6178 — Guard against undefined content in tool result messages** (CLOSED)  
   Fixes crashes when extension tools (e.g., `get_kline`) return results without explicit content.  
   [PR link](https://github.com/earendil-works/pi/pull/6178)

10. **#5832 — Surface provider HTTP error body** (CLOSED)  
    Behind proxies, non-2xx responses now show the actual error body instead of opaque SDK messages. Fixes #5763.  
    [PR link](https://github.com/earendil-works/pi/pull/5832)

## Feature Request Trends

- **Session Lifecycle Deepening**: Multiple requests for persistent HITL interrupts (#5901), session naming shortcuts (#6046), and redo support (#6183) indicate users want more sophisticated session control beyond basic chat.
- **Enterprise Configuration**: Requests for admin-level config overrides (#6159) and environment-based skill paths (#6191) suggest growing adoption in team/enterprise settings.
- **Provider Ecosystem Expansion**: New provider requests (Scaleway #6165, Fireworks GLM 5.2 Fast #6195) and model alignment fixes (#6192, #6114) show active community interest in vendor diversity.
- **Developer Ergonomics**: `/exit` alias (#6193), multi-skill invocation (#6180), and auto-complete improvements (#6188) reflect demand for faster, muscle-memory-friendly workflows.

## Developer Pain Points

1. **Streaming Reliability**: ECONNRESET crashes (#6133) and misleading timeout errors (#6181) rank high — users expect graceful retry, not process termination.
2. **Provider Encoding Inconsistencies**: Base64 corruption on Kimi Coding (#6164), mislabeled image attachments on OpenAI (#6103), and incorrect pricing on Xiaomi (#6138) point to insufficient provider-specific testing.
3. **Agent Looping / Stalling**: The "says working but doesn't progress" pattern (#4338) remains unresolved, frustrating users who waste sessions debugging.
4. **Extension Lifecycle Bugs**: Tool changes not applying mid-run (#6162) and silent no-ops in RPC mode (#6186) undermine extension reliability, especially for SDK/headless integrations.
5. **Platform-Specific Integration**: WSL login hangs (#6187) and screen reader incompatibility (#4687) reveal gaps in cross-platform and accessibility testing.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-01

## Today's Highlights

The Qwen Code team delivered a packed day with 3 significant new features nearing completion: daemon-managed channel workers (`qwen serve --channel`), session archiving, and channel loop support. A **critical Windows process management issue** (#6067) has prompted a formal warning advising Windows users to pause usage, while ongoing work to stabilize the ACP daemon and fix GLM thinking-text leaks continues to mature. The community has submitted 45 new issues and 50 PRs in the last 24 hours, signaling strong engagement.

## Releases

**v0.19.3-nightly.20260630.e00fe6a27** — No release notes beyond the auto-generated changelog. Nightly build with no documented user-facing changes.

## Hot Issues (Top 10)

1. **[#5975 — API Error: No stream activity for 120000ms](https://github.com/QwenLM/qwen-code/issues/5975)** (8 comments)  
   Users upgrading to v0.19.3 report frequent stream timeouts after 19 chunks. The "Thought for 2s" prelude vanishes, replaced by silent failures. **Importance:** Affects daily workflow reliability; 8 comments indicate broad impact.

2. **[#6049 — timeout=0 causes immediate timeout](https://github.com/QwenLM/qwen-code/issues/6049)** (7 comments)  
   Setting `generationConfig.timeout` to `0` (common user expectation: "no timeout") causes requests to fail immediately with a 3-second timeout. **Why it matters:** Counterintuitive behavior that breaks configuration portability.

3. **[#6067 — Windows process management anomaly — CRITICAL](https://github.com/QwenLM/qwen-code/issues/6067)** (3 comments)  
   Formal advisory to suspend Qwen Code on Windows. Traces a lineage from v0.19.2's process leak (#5873) to ongoing zombie PowerShell processes and tool-call mishandling. **Community reaction:** High concern; users seeking alternative tools.

4. **[#5941 — Scroll jumps to top during model output on Windows](https://github.com/QwenLM/qwen-code/issues/5941)** (4 comments)  
   Scrolling up mid-generation snaps the viewport to the top. A persistent UX regression affecting Windows users.

5. **[#6089 — macOS sandbox .sb files missing from build](https://github.com/QwenLM/qwen-code/issues/6089)** (2 comments)  
   Fatal launch error on macOS ARM64: missing seatbelt profile files cause CLI to abort. **Impact:** Blocks macOS users from running the nightly build entirely.

6. **[#6094 — QQ bot: streaming + cron interaction issues](https://github.com/QwenLM/qwen-code/issues/6094)** (2 comments)  
   Follow-up from PR #5902: `blockStreaming: 'on'` causes duplicate messages with cron; `botOpenId` timing is broken. **Why it matters:** Shows the tension between new features and edge-case correctness.

7. **[#6075 — ACP daemon loops on invalid tool parameters](https://github.com/QwenLM/qwen-code/issues/6075)** (2 comments, closed)  
   Models can loop indefinitely by re-requesting the same invalid tool call with fresh IDs. Fix merged, but follow-up tracking (#6084) remains open.

8. **[#6043 — Publish comprehensive JSON Schema for `settings.json`](https://github.com/QwenLM/qwen-code/issues/6043)** (2 comments)  
   Request for a full `settings.schema.json` covering all properties and dynamic options. **Community signal:** Users want IDE-grade configuration validation.

9. **[#6052 — Decouple default model from project model](https://github.com/QwenLM/qwen-code/issues/6052)** (2 comments)  
   `model.name` should support per-project overrides via `<project>/.qwen/settings.json`. **Relevance:** Core workflow ergonomics for multi-project developers.

10. **[#5176 — Sub-agent max parallel count + queue](https://github.com/QwenLM/qwen-code/issues/5176)** (4 comments)  
    Feature request for configurable parallelism in sub-agents to avoid resource exhaustion when running local LLMs. Gaining traction as multi-agent usage grows.

## Key PR Progress (Top 10)

1. **[#6031 — feat(cli): Add daemon-managed channel worker for serve --channel](https://github.com/QwenLM/qwen-code/pull/6031)**  
   Implements PR2 of #5976: `qwen serve` now spawns out-of-process channel workers. A foundational infrastructure PR for background automation.

2. **[#6058 — feat(daemon): Add session archive support](https://github.com/QwenLM/qwen-code/pull/6058)**  
   Moves inactive sessions to `chats/archive/` with full list/unarchive lifecycle. Solves session list bloat for long-running users.

3. **[#6073 — feat(channel): add channel loop support](https://github.com/QwenLM/qwen-code/pull/6073)**  
   Enables `/loop add`, `/loop list`, `/loop cancel` in channel sessions. Key for recurring agent work without manual re-triggering.

4. **[#6051 — Add explicit channel memory for messaging channels](https://github.com/QwenLM/qwen-code/pull/6051)**  
   Gives channel members commands to save/clear stable context injected on session start. Bridges the gap between interactive and persistent memory.

5. **[#6087 — feat(core): Disallow plan lifecycle tools in subagents](https://github.com/QwenLM/qwen-code/pull/6087)**  
   Prevents subagents from calling `enter_plan_mode`/`exit_plan_mode`. Ensures plan approval remains with the parent session — a governance fix for multi-agent workflows.

6. **[#6085 — Fix ACP daemon loop review follow-ups](https://github.com/QwenLM/qwen-code/pull/6085)**  
   Lands review fixes for #6075: makes loop detection a terminal path, adds stable invalid-tool bucket. **Impact:** Closes a class of infinite-loop bugs.

7. **[#6092 — refactor(review): drop deterministic-analysis and autofix steps](https://github.com/QwenLM/qwen-code/pull/6092)**  
   Slims `/review` from 11 to 9 steps by removing linting and autofix. **Trade-off:** Faster review at the cost of automated code-quality guardrails.

8. **[#6091 — feat(web-shell): add browser tab favicon](https://github.com/QwenLM/qwen-code/pull/6091)**  
   Inlines the Qwen mark as a `data:` URI favicon. Small UX polish, but signals growing investment in web-shell professionalism.

9. **[#6011 — feat(ui): add mouse click & hover in alternate-screen mode](https://github.com/QwenLM/qwen-code/pull/6011)**  
   Brings mouse interaction to menus, dialogs, and suggestions when `ui.useTerminalBuffer` is enabled. Modernizes the TUI experience.

10. **[#6033 — fix(core): Parse tagged thinking for GLM responses](https://github.com/QwenLM/qwen-code/pull/6033)** (closed)  
    Strips `<think>...</think>` from GLM-5.2 assistant output. Direct fix for the thinking-text leak (#6007). **Why it matters:** Restores correct thinking display for a popular model provider.

## Feature Request Trends

- **Persistence & Memory (5 requests):** Channel memory (#6050), group history backfill (#6064), session archiving (#6058), channel loop persistence (#6073), workspace remember API (#5884). The community is pushing for durable context across sessions and channels.
- **Multi-Agent Workflows (3 requests):** Parallel sub-agent limits (#5176), plan-mode governance (#6083, #6087), and multi-agent office automation (#6093). Users want controlled, memory-backed sub-agents.
- **Configuration Ergonomics (3 requests):** JSON schema for `settings.json` (#6043), per-project model overrides (#5052), and decoupled session/timeout defaults (#6049). Developer tooling maturity is in demand.
- **Non-Interactive Modes (2 requests):** Autonomous `/loop` mode (#5990) and channel integration (#5976). Users want the agent to work without continuous supervision.
- **Windows/MacOS Stability (2 requests):** Critical Windows process leak (#6067), missing macOS sandbox files (#6089) — platform parity remains a pain point.

## Developer Pain Points

1. **Windows Stability Crisis:** Issue #6067 documents a multi-release degradation of process management on Windows (zombie shells, memory leaks, tool-call failures). Users are explicitly advised to "pause usage." **Root cause:** Incomplete PTY process tree cleanup on Windows.
2. **Stream Reliability:** The "No stream activity for 120000ms" error (#5975) is the most-commented bug today. It's a regression in v0.19.3 that breaks the core chat experience.
3. **Configuration Surprises:** `timeout=0` causing immediate failure (#6049) and `~/docs` resolving to `.\~` on Windows (#6030) are classic ergonomic traps that waste developer debug time.
4. **macOS Build Completeness:** Missing sandbox profiles (#6089) means the released nightly is literally unlaunchable on Apple Silicon Macs — a packaging regression.
5. **Loop Detection Gaps:** Even after the ACP daemon loop fix (#6075), follow-up reviews found missed stop-hooks and tool-call evasion paths (#6084), indicating the fix isn't yet bulletproof.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-01

**Project Note:** The project has been rebranded to **CodeWhale**. The legacy `deepseek-tui` npm package is deprecated. See `docs/REBRAND.md` for migration instructions.

---

## Today's Highlights

The v0.8.66 release went out on June 30, bringing the "CodeWhale" rebrand to production and closing several TUI reliability blockers. Maintainer Hmbown cut 15+ PRs in a single day, addressing sub-agent concurrency, approval visibility, MCP auth recovery, and modal rendering regressions. Meanwhile, the v0.8.67 "constitution-first setup" epic is already underway, with foundation PR #3861 landing today.

---

## Releases

**v0.8.66 (released 2026-06-30)** [GitHub](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.66)
- Official rebrand: project/command/npm package now **CodeWhale**; `deepseek-tui` legacy package receives no further updates
- Critical TUI fixes:
  - Shared modal renderer resolves opaque-surface bleed-through and footer overflow (#3732, #3791)
  - Approval controls stay visible inline instead of clipping off-screen (#3799)
  - MCP OAuth auth-failure surfaces login guidance and stale-token cleanup (#3828)
  - Sub-agent state persistence moved off the write-lock hot path to prevent render stalls (#3805)
  - YOLO authority properly preserved through runtime continuations and sub-agent handoffs (#3800)
- Windows: background console windows suppressed for all child processes (#3823)
- Engine: wildcard prefix matching now supported in `disallowed_tools` config (#3824)

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#2487](https://github.com/Hmbown/CodeWhale/issues/2487) | **"Turn stalled – no completion signal received"** in yolo mode | UI freezes => workflow breaks; no `continue` recovery | 18 comments, 1 👍; persisted open since June 1 |
| [#1177](https://github.com/Hmbown/CodeWhale/issues/1177) | **Input cache hit ratio too low vs DeepSeek-Reasonix** | 95%+ vs poor performance; bill impact; reopened repeatedly | 25 comments; closed but cache issues keep returning |
| [#1120](https://github.com/Hmbown/CodeWhale/issues/1120) | **Cache miss rate still problematic after claimed fix** | Same root cause as #1177; users skeptical of resolution | 23 comments; closed but adjacent caching issues remain |
| [#3275](https://github.com/Hmbown/CodeWhale/issues/3275) | **CodeWhale over-modifies, self-Q&A loop, ignores user intent** | Trust erosion; regression from #3061 | 13 comments; opened June 17, still open |
| [#743](https://github.com/Hmbown/CodeWhale/issues/743) | **Massive token consumption spike** | 400M tokens in half a day; users report financial impact | 15 comments; closed but left a strong impression |
| [#1812](https://github.com/Hmbown/CodeWhale/issues/1812) | **Windows TUI freeze – crossterm poll deadlock** | Windows 11 freeze confirmed with logs + thread analysis | 9 comments; open since May 19 |
| [#1835](https://github.com/Hmbown/CodeWhale/issues/1835) | **IME composition deadlock on Windows (Chinese input)** | Blocks non-English input completely | 3 comments, 1 👍; critical for CJK users |
| [#3794](https://github.com/Hmbown/CodeWhale/issues/3794) | **Constitution checkpoint after update** | Part of v0.8.67 setup rework; expected UX for update path | 2 comments; active planning by maintainer |
| [#3402](https://github.com/Hmbown/CodeWhale/issues/3402) | **Constitution-first setup wizard epic** | Flagship v0.8.67 feature; defines how new users onboard | 2 comments; centrally managed by Hmbown |
| [#3859](https://github.com/Hmbown/CodeWhale/issues/3859) | **"Ctrl+B backgrounds this command" is misleading** | Bash commands can't truly be backgrounded for LLM continuation | 1 comment; design correctness issue found by maintainer |

---

## Key PR Progress

| PR | What It Does | Status |
|----|--------------|--------|
| [#3861](https://github.com/Hmbown/CodeWhale/pull/3861) | **Constitution-first setup foundation** – state model, persistence, renderer for v0.8.67 | **Open** – foundational |
| [#3860](https://github.com/Hmbown/CodeWhale/pull/3860) | Flaky test fix: `launch_gate_queues_extra_direct_children` made deterministic | Merged |
| [#3858](https://github.com/Hmbown/CodeWhale/pull/3858) | `/model` now shows all configured providers, not just active one | Merged |
| [#3833](https://github.com/Hmbown/CodeWhale/pull/3833) | Shared modal UI + progressive `/fleet` setup; fixes two v0.8.66 blockers (#3732, #3791) | Merged |
| [#3823](https://github.com/Hmbown/CodeWhale/pull/3823) | **Windows: suppress background console windows** for all child processes (community contribution) | Merged |
| [#3825](https://github.com/Hmbown/CodeWhale/pull/3825) | MCP stdio: `${VAR}` env placeholders now expanded in `sanitized_mcp_env` | Merged |
| [#3824](https://github.com/Hmbown/CodeWhale/pull/3824) | Engine: wildcard prefix support for `disallowed_tools` config | Merged |
| [#3818](https://github.com/Hmbown/CodeWhale/pull/3818) | Active in-flight tool-run entries now included in dense summary expansion (edge case from #3256) | **Open** |
| [#3822](https://github.com/Hmbown/CodeWhale/pull/3822) | Update system: prefer exact binary release assets over prefix fallback | **Open** |
| [#3817](https://github.com/Hmbown/CodeWhale/pull/3817) | **YOLO authority preserved** across runtime continuations and sub-agent handoffs | Merged |

---

## Feature Request Trends

1. **Cache hit ratio improvements** – Multiple high-engagement issues (#1177, #1120, #1747) demand parity with DeepSeek-Reasonix's 95%+ input cache hit rate. This is the single most costly pain point for heavy users.

2. **Constitution-first setup wizard** – The v0.8.67 epic (#3402, #3793, #3794) envisions a guided, localized constitution creator replacing the blank prompt editor. Community feedback emphasizes language-first, step-by-step onboarding with a clear checkpoint model.

3. **Windows/IME reliability** – Persistent demand for Windows stability: crossterm poll deadlocks (#1812), IME composition deadlocks (#1835), and npm install issues (#765). Significant CJK-user base frustrated.

4. **Token transparency / usage controls** – Users want visibility and limits on token consumption (#743, #1818). "Half a day burned 400M tokens" incidents erode trust.

5. **ModalShell shared UI** – Maintainer-driven push (#3829, #3833) to unify modal rendering across all menus, fixing bleed-through and overflow regressions.

---

## Developer Pain Points

- **Cache hit ratio is abysmal** compared to competitors – multiple issues, 48+ total comments, users demanding this as a blocking concern
- **TUI freezes mid-session** – Windows (crossterm poll, IME deadlock) and generic "Turn stalled" errors kill workflow without recovery
- **Token cost explosions** – No guardrails; users report surprise 400M token burns in half-day sessions
- **Tool overreach / autonomy** – CodeWhale self-Q&A loops and over-modification (#3275) erode trust; yolo mode doesn't reliably respect standing authority
- **Setup friction** – Windows npm install gets stuck at "Working"; WSL users encounter encoding/initialization failures; multi-step setup wizard is still in-progress

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*