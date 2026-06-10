# AI CLI Tools Community Digest 2026-06-10

> Generated: 2026-06-10 00:42 UTC | Tools covered: 8

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

# Cross-Tool Comparison Report: AI CLI Developer Tools Ecosystem

**Date:** 2026-06-10 | **Analyst:** OWL

---

## 1. Ecosystem Overview

The AI CLI tooling landscape in mid-2026 is defined by rapid model integration cycles (Claude Fable 5 launches dominated 3 of 7 tool communities today), intensifying pressure on **multi-agent orchestration**, and a shared reckoning with **Windows platform reliability** as a first-class target. All seven tools are converging on ACP/daemon protocol parity for IDE embeddability, while simultaneously grappling with safety classifiers, context compaction, and session durability as core infrastructure debts. The gap between "pioneering experimentation" (Agent Teams, Dynamic Workflows) and "table-stakes reliability" (copy/paste, non-ASCII encoding, undo) remains the defining tension across the board.

---

## 2. Activity Comparison

| Tool | New Releases (24h) | Issues Active/Noted | PRs Active | Overall Signal |
|---|---|---|---|---|
| **Claude Code** | v2.1.170 (Fable 5) | 18 bugs + 6 features | 10+ (REAPR bot auto-PRs) | 🔥 Highest volume; model-launch-driven |
| **OpenAI Codex** | v0.139.0, v0.140.0-alpha.2 | 10 highlighted | 12+ | 🔥 High; latency-engineering focus |
| **Gemini CLI** | v0.47.0-preview, v0.45.3 | 10 flagged | 10 | 📈 Moderate; stability-first patching |
| **GitHub Copilot CLI** | v1.0.61 | 10 highlighted | 0 | ⚠️ Regression cleanup; PR drought |
| **Kimi Code CLI** | None | 1 | 0 | 🥶 Dormant day |
| **OpenCode** | None | 10 | 10 | 📈 Steady; desktop + custom provider work |
| **Pi** | v0.79.1 | 10 | 12+ | 🔥 High; provider extensibility surge |

---

## 3. Shared Feature Directions

The following requirements surfaced in **3 or more** tool communities independently this cycle:

| Shared Direction | Tools Exhibiting | Specific Need |
|---|---|---|
| **Sub-agent / multi-agent orchestration** | Claude Code, OpenCode, Qwen Code, Gemini CLI | Dynamic model selection for subtasks; tmux/visible pane monitoring; parallel agent coordination with message passing |
| **Session durability & continuity** | Claude Code, Copilot CLI, OpenCode, Qwen Code | Cross-device resume (Codex already shipped phone-connect); post-compaction tool-call integrity; file-history snapshots surviving process restart |
| **Safety classifier / false-positive control** | Claude Code, Pi, Gemini CLI | Suppress/reconfigure API-level safety flags for authorized security work, academic research, and health/biology data; prevent silent mid-session model downgrades |
| **Windows as first-class platform** | Claude Code, Codex, Copilot CLI, Pi | Named pipe/daemon supervisor stability; sandbox spawn reliability; shell encoding (LC_CTYPE) correctness; agent-shell configurability |
| **Context compaction correctness** | Claude Code, Codex, OpenCode | Silent data loss during compaction; tail-turn retention; cross-auth-type / cross-session compaction stability |
| **Token cost & usage guardrails** | Claude Code, Pi, Gemini CLI, OpenCode | Auto downgrade expensive parent models in workflow subagents; runaway extended thinking detection; prompt cache preservation across session mutations |
| **Non-ASCII / i18n encoding** | Copilot CLI, Gemini CLI, Pi, OpenCode | UTF-8 vs. legacy encoding in edit/bash tools; CJK rendering; locale-aware shell spawning |

---

## 4. Differentiation Analysis

### Focus & Target Audience

| Tool | Primary Focus | Target User | Architectural Differentiator |
|---|---|---|---|
| **Claude Code** | Autonomous agentic workflows; team/subagent mode | Professional devs, agencies, security researchers | Claude Opus/Fable model tier integration; REAPR automated triage pipeline; Cowork desktop app |
| **OpenAI Codex** | Low-latency remote execution; voice/realtime coherence | Pro-users already in OpenAI ecosystem; remote-SSH devs | Noise relay encrypted transport; realtime voice handoff; standalone Web Search in Code mode |
| **Gemini CLI** | Google ecosystem (Vertex AI, ADC auth, A2A protocol) | Enterprise GCP customers; Google-first developers | A2A server implementation; Auto Memory extraction; Gemini 3.5 Flash native support |
| **Copilot CLI** | Enterprise GitHub admin workflows; model catalog parity | Org admins, BYOK/hybrid-cloud teams | Enterprise custom model hooks; BYOK thinking token surface; tight VS Code Copilot integration gap (closing) |
| **Kimi Code CLI** | Moonshot AI model integration | K2.6 model users; Chinese-language developer base | Minimal tooling; low community activity suggests early-stage or niche positioning |
| **OpenCode** | Custom provider flexibility; extensibility-first design | Self-hosted / multi-provider power users; plugin authors | models.dev unified provider registry; Electron desktop + PWA; extension marketplace |
| **Pi** | Multi-provider abstraction; prompt-engineering sophistication | Polyglot-provider users; extensibility RFC contributors | 50+ provider support; RFC-gated experimental features; prompt template `${N:-default}` system; plugin trust API |

### Key Technical Divergences

- **Protocol standardization**: Qwen Code is aggressively pushing ACP Streamable HTTP parity (29+ `_qwen/*` methods); Pi and OpenCode rely on provider plugins; Claude Code and Codex are building proprietary desktop experiences.
- **Deployment model**: Codex and Qwen Code lead on headless daemon/serve modes. Claude Code and Pi offer richer TUI. OpenCode and Copilot CLI offer dedicated desktop apps.
- **Autonomy level**: Claude Code and Qwen Code are pioneering sub-agent swarms and Dynamic Workflows. Codex focuses on single-agent + voice. Copilot CLI and Gemini CLI remain closer to interactive-assistant models.
- **Security model**: Pi leads with project trust gating and RFC-0043 experimental feature gates. Gemini CLI surfaced path traversal in skills (critical). Copilot CLI faces BYOK audit-token gaps.

---

## 5. Community Momentum & Maturity

### Momentum Tier 1 — Rapid Iteration
- **Claude Code**: Highest engagement volume (577 👍 on multi-account switching alone). REAPR bot indicates automated CI/CD. Fable 5 launch drove immediate bug-fix PRs within hours.
- **OpenAI Codex**: Active latency-engineering PRs (113 ms/turn tool-search fix). Stable + alpha releases shipping weekly. Strong UX-first feature polish.
- **Pi**: 50+ open PRs in the last cycle, dominated by community contributors. RFC-driven extensibility model. Rapid fire on provider adapter PRs (Fable 5 across Anthropic + Bedrock in one day).

### Momentum Tier 2 — Steady Development
- **Qwen Code**: 50 open PRs; Agent Teams and Dynamic Workflows are genuinely novel directions. High contributor count. Preview release cadence is brisk.
- **Gemini CLI**: Security-fix-driven cadence (path traversal, Vertex AI mapping). Cherry-picking across 3 release branches signals real enterprise deployment pressure.
- **OpenCode**: Consistent PR flow focused on desktop stability and custom-provider robustness. Active memory-leak debug drives heap-snapshot-driven engineering.

### Momentum Tier 3 — Consolidation / Stalled
- **GitHub Copilot CLI**: Zero PRs updated in 24h. Community is surfacing regressions (v1.0.60 hook breakage, model-list parity) faster than the team is shipping fixes. 75 👍 on the branding-change complaint — longest-running unaddressed tension.
- **Kimi Code CLI**: Single issue, no PRs. Appears to be in a low-activity or maintenance-only phase.

---

## 6. Trend Signals: What Developers Should Watch

### Near-Term (1–3 months)
1. **Multi-agent orchestration becomes the competitive battleground.** Claude Code (workflow subagents), Qwen Code (Agent Teams), and OpenCode (task model override) are all converging here. Developers building agentic products should evaluate how each handles subagent context passing, error isolation, and cost controls.

2. **Safety classifier friction is a cross-model, cross-provider problem.** Not just Claude Code — Pi and Gemini CLI users are also hitting blocks on legitimate content. Budget for engineering time around prompt preambles, model fallback chains, and (where possible) provider-level safety API flags.

3. **Windows reliability is a make-or-break adoption factor.** Four of seven tools reported Windows-specific regressions today. Teams standardizing on Windows workstations should test codex/Claude/Pi agent sessions on Windows before committing to production workflows.

4. **Session durability is the new baseline expectation.** Compaction integrity, cross-device resume, and post-crash recovery are no longer "nice to have." Tools codifying these (Qwen Code's `/rewind` snapshots, Claude Code's compaction research, Codex's phone-connect) will pull ahead.

### Mid-Term (3–6 months)
5. **ACP/daemon protocol will become as important as the CLI UX itself.** Qwen Code's aggressive ACP parity push and Codex's Noise relay infrastructure signal the industry is building toward headless backends with multiple frontend consumers (IDE, CLI, mobile, web). Teams should plan for an API-first consumption model.

6. **Enterprise BYOK and custom model gaps will close — or become dealbreakers.** Copilot CLI, Gemini CLI, and Qwen Code all have active threads on enterprise model visibility, private-network `web_fetch`, and token audit trails. These will be procurement-blocking if unresolved by Q3 2026.

7. **Encoding and i18n issues are underreported but will surface at scale.** Every tool except Codex and Copilot CLI had at least one encoding issue. As AI CLI tools enter enterprise dev teams with international membership, localization fragility will generate substantial support burden.

### Strategic Takeaway
The AI CLI ecosystem is maturing from "best model wins" to "best tooling integration wins." Developer experience depth — session durability, agent observability, cross-platform reliability, extensibility APIs — is emerging as the real differentiator, increasingly decoupled from which underlying model is most powerful.

---

*Report generated by **OWL — Your AI Technical Analyst.** Data sourced from GitHub community activity across all seven repositories, 2026-06-10.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

**Data Source:** [anthropics/skills](https://github.com/anthropics/skills) | **Collected:** June 10, 2026

---

## 1. Top Skills Ranking

The following PRs represent the most-discussed skill submissions, ordered by community engagement (comments + 👍 reactions):

| # | PR | Skill | Author | Status | Engagement | Summary |
|---|---|---|---|---|---|---|
| 1 | [#492](https://github.com/anthropics/skills/issues/492) | **Security: Namespace trust boundary** | aliksir | OPEN | 7 comments, 2 👍 | Not a skill per se — a critical security discussion about community skills impersonating the `anthropic/` namespace, raising urgency for an official verification/attestation mechanism. |
| 2 | [#228](https://github.com/anthropics/skills/issues/228) | **Org-wide skill sharing** | jh-broad-reach | OPEN | 13 comments, 7 👍 | The single highest-engagement issue. Users demand native skill-sharing infrastructure (shared library, sharing links) rather than manual `.skill` file handoff via Slack/Teams. |
| 3 | [#556](https://github.com/anthropics/skills/issues/556) | **run_eval.py trigger bug** | dthau120391 | OPEN | 11 comments, 7 👍 | The core `skill-creator` evaluation reliably reports 0% trigger rate because `claude -p` does not trigger skills/commands as designed. Blocks iterative skill-quality improvement. |
| 4 | [#189](https://github.com/anthropics/skills/issues/189) | **Duplicate skill installs** | chuggies510 | OPEN | 6 comments, 8 👍 | `document-skills` and `example-skills` plugins ship identical content, polluting the context window. Has the highest 👍 count — a silent pain point affecting many users. |
| 5 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | PGTBoos | OPEN | 0 👍 (pending review) | Automated typographic quality control for AI-generated documents — saves from orphan words, widow paragraphs, numbered-list misalignment. Addresses a complaint that affects *every* document Claude produces. |
| 6 | [#1140](https://github.com/anthropics/skills/pull/1140) | **agent-creator (meta-skill)** | SyedaQurratAI | OPEN | 0 👍 | Creates task-specific agent sets on the fly; also bundles a critical fix for multi-tool evaluation in the skill-creator pipeline. Directly addresses Issue #1120. |
| 7 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer** | eovidiu | OPEN | 0 👍 | First meta-skill pair that lets Claude evaluate other skills across five dimensions (structure, security, etc.). Would close the quality-feedback loop for the entire marketplace. |
| 8 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 4444J99 | OPEN | 0 👍 | Full-stack testing philosophy (Testing Trophy model, AAA pattern, React Testing Library). High practical demand given the ecosystem's current focus on code quality. |

---

## 2. Community Demand Trends

Distilled from the top 15 Issues by engagement concentration:

```
Demand Signal Radar (as of June 2026)

🔴 Critical / High Volume
 ├── Platform Infrastructure
 │   ├── Org-level skill distribution & sharing (#228 — 13 comments, 7👍)
 │   ├── Skill deduplication in plugin installs (#189 — 8👍)
 │   └── Skill trust & namespace verification (#492)
 │
 ├── Skill Developer Experience
 │   ├── Reliable skill-trigger evaluation (#556, #1169 — 13 combined comments)
 │   ├── Windows compatibility for skill-creator scripts (#62, #1050, #1099)
 │   └── Multi-file reference preloading (#1220)
 │
 └── Missing Skill Categories
      ├── Agent governance, audit, trust scoring (#412)
      ├── Skills-as-MCP protocol exposure (#16)
      └── Platform-specific guidance (AWS Bedrock — #29)
```

**Key takeaway:** The loudest community demand is not for *more skills*, but for **platform infrastructure** — sharing, trust, deduplication, and a reliable evaluation pipeline. "Tooling for skill builders" outranks "skills for end users" in engagement.

---

## 3. High-Potential Pending Skills

Active PRs with substantive content that could land soon:

| PR | Skill | Why It Matters |
|---|---|---|
| [#1140](https://github.com/anthropics/skills/pull/1140) | **agent-creator** | Meta-skill + evaluation fix in one PR. Closes a tracked issue (#1120). Cross-platform (Windows via `%APPDATA%`). Has the momentum of a direct issue-PR link. |
| [#1050](https://github.com/anthropics/skills/pull/1050) | **skill-creator Windows fix** | Two 1-line fixes (`claude.cmd` + encoding). Resolves real failures on Windows 11. Low review friction. |
| [#1099](https://github.com/anthropics/skills/pull/1099) | **run_eval.py Windows pipe fix** | Complements #1050 — fixes subprocess pipe reading on Windows that caused 0% trigger rates. Together these make the entire skill-creator evaluation loop functional on Windows. |
| [#538–541](https://github.com/anthropics/skills/pull/538) | **PDF/DOCX skill fixes** | Three bug-fix PRs by Lubrsy706: case-sensitivity, YAML special characters, OOXML `w:id` collisions. Straightforward technical correctness improvements. |
| [#83](https://github.com/anthropics/skills/pull/83) | **Quality & security analyzers** | Meta-skills that could become first-class citizens of the quality pipeline. No merge activity but conceptually aligned with the repo's trajectory. |
| [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow platform skill** | Broad enterprise coverage (ITSM, SecOps, ITAM, FSM, SPM, CSDM). High scope, likely to undergo extended review but fills an enterprise gap. |
| [#444](https://github.com/anthropics/skills/pull/444) | **AURELION suite** | Four interlocking skills (kernel, advisor, agent, memory) for structured thinking and knowledge management. Ambitious scope; may need fragmentation. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand at the Skills level is not for more task-specific skills, but for platform-level trust, sharing, and evaluation infrastructure — the plumbing that makes a skill ecosystem reliable at organizational scale.**

In other words: **the bottleneck has shifted from content creation to platform maturity.** Users hit frictions around distribution (how to share), verification (which skills are trustworthy), evaluation (does my skill even trigger?), and developer ergonomics (Windows support, plugin deduplication). Skills like `testing-patterns`, `servicenow`, and `document-typography` will always have demand, but the PRs most likely to move the needle are the infrastructure fixes (#1050, #1099, #1140) and the policy discussions (#228, #492) that will define how Skills operate as a first-class extensibility layer for Claude Code.

---

*Generated by OWL · skills-ecosystem-analyst*

---

# Claude Code Community Digest — 2026-06-10

---

## 1. Today's Highlights

The headline is **Claude Fable 5** — a new Mythos-class model included in v2.1.170 — but the community is immediately running into safety classifier false positives on legitimate security and science content, triggering mid-session downgrades and workflow disruption. A second hot topic is the desire for **true cross-device session continuity**, mirroring a recent OpenAI Codex feature. Finally, **compiler/parser instability** remains the top bug frustration, with Windows users especially affected by a recurring "tool call could not be parsed" error that forcibly aborts in-progress actions.

---

## 2. Releases

### **v2.1.170** — [View](https://github.com/anthropics/claude-code/issues/18435)

- **Introducing Claude Fable 5**: Anthropic's new Mythos-class model, made safe for general use, with capabilities described as exceeding any model they've previously made generally available. Included in plan limits until June 22, then switches to usage credits. → [Official announcement](https://www.anthropic.com/news/claude-fable-5-mythos-5)
- **Session fix**: Multiple reports of session-related crashes and instability (Issue #18435, #66726) were addressed.

---

## 3. Hot Issues

### Bug Reports

| # | Issue | Comments | Why It Matters |
|---|-------|----------|----------------|
| #63875 | ["Tool call could not be parsed (retry also failed)"](./) interrupts sessions repeatedly | 57 ⬆️87 | **The top pain point.** Windows users report mid-task model failures that abort in-progress actions with no self-recovery. Marked as duplicate — meaning the underlying parser bug is still hitting many users. |
| #66671 | Fable 5 safety measures blocking basic greetings | 2 | Even a simple "Hi" triggers scaffolding setup warnings, suggesting the classifier or setup gate is too aggressive. |
| #66728 | Fable 5 safety classifier forces silent mid-task model downgrade (Fable 5 1M → Opus 4.8) | 2 | **P0-rated by reporter.** The model auto-downgrades during genuinely in-scope security PR review workflows, silently breaking user trust and context. Related to the auto-switch bug in #66723. |
| #66711 | Opus 4.8 runaway extended thinking (20k–64k tokens/turn), replies to hallucinated messages, fabricates forensic evidence | 2 | Raises concerns about Opus 4.8's stability in extended-thinking mode — burning tokens at alarming rates while producing unreliable output. |
| #64722 | Claude Code organization analytics missing some users | 4 ⬆️4 | Organization admins need accurate usage data; silent undercounting undermines procurement and compliance workflows. |
| #66729 | Cowork desktop update wipes all projects, instructions, and folder connections (Windows 11) | 1 | **Data loss.** Any Windows user who uses Cowork and applies an update risks complete project/config loss. Extremely alarming for affected users. |
| #66483 | Daemon supervisor creates no control named pipe on Windows | 2 | Background sessions appear "not running" despite the supervisor being alive — a broken discovery/connection path that defeats the entire background-agent UX on Windows. |
| #66702 | Skill-specific memory not persisting across session restarts (Linux) | 1 | Memory is a key differentiator for Claude Code; losing skill-level memory between sessions degrades the personalization users expect. |

### Feature Requests & Enhancements

| # | Issue | Comments | Why It Matters |
|---|-------|----------|----------------|
| #18435 | Manage multiple Claude accounts / profile switching in desktop app | **108 ⬆️577** | **The single most-requested feature in the codebase by a wide margin.** Teams, agencies, and users with personal/work accounts are desperate for native profile switching. |
| #66686 | Render dynamic workflow subagents in tmux panes (like teammate mode) | 1 | Users love the tmux pane visibility for agent teams; extending this to workflow subagents would close a major observability gap in long-running autonomous runs. |
| #66703 | Auto-select appropriate model for dynamic workflow tasks instead of inheriting parent | 1 | Users are burning through Opus 4.8 credits because workflows spawn 219 agents at the parent model tier — intelligent model down-selection will save enormous cost. |
| #66246 | Allow programmatic/agent-initiated compaction | 1 | Long-running autonomous sessions need the agent itself to trigger compaction before context overflows; currently only `/compact` from the user is supported. |
| #60058 | Cross-device session continuity (connect from claude.ai, phone, another laptop) | 5 | Mirrors OpenAI Codex's recent "connect from phone" feature. Users want to monitor and steer sessions from any device. |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|----|---------|
| #66608 | [Fix false positive: Usage Policy block on lattice gauge theory question](./) | **Automated fix via REAPR bot.** Addresses Issue #66592 where Fable 5's safety classifier blocked pure academic physics questions about lattice gauge theory. Confirms the classifier is over-triggering on non-scientific usage. |
| #66607 | [Fix Fable 5 safety auto-switch during authorized security testing](./) | **Automated fix via REAPR bot.** Addresses Issue #66595 where Fable 5 silently downgraded to Opus mid-session during合法的 security testing workflows. Both PRs suggest an automated triage pipeline is actively resolving safety-classifier false positives. |
| #66650 | [fix(pr-review-toolkit): use full author name in plugin manifest](./) | Name consistency fix — "Daisy" → "Daisy Hollman" in the manifest to match other plugins by the same author. |
| #66575 | [fix(pr-review-toolkit): use full author name in plugin.json](./) | Same consistency fix inside `plugin.json` itself. |
| #66577 | [fix(marketplace): sync security-guidance version/description](./) | `marketplace.json` had stale metadata (v1.0.0 vs v2.0.0, outdated description) for the security-guidance plugin. |
| #66573 | [fix(ralph-wiggum): restore dead error handlers broken by set -euo pipefail](./) | `stop-hook.sh`'s `set -euo pipefail` caused silent exits before error handlers could run. Classic bash-footgun fix. |
| #66572 | [[WIP] Repeated "Image couldn't be processed" API errors consuming usage limit](./) | RepoSage-started WIP investigating Issue #62466 — repeated image processing failures that silently burn usage credits. |
| #66416 | [fix(plugin-dev): validator scripts abort on first finding due to set -e](./) | Three plugin-dev validator scripts (`validate-agent.sh`, `hook-linter.sh`, `validate-hook-schema.sh`) abort on the first error instead of collecting all findings — making iterative plugin development unnecessarily painful. |
| #65286 | [fix(plugins): add missing plugin.json manifest for plugin-dev](./) | Plugin-dev plugin couldn't be discovered or installed through normal mechanisms because its manifest was missing. |
| #65723 | Claude/subscription debate chat rx ewi | Activity/update on subscription/plan topic. |

---

## 5. Feature Request Trends

1. **Multi-account / profile switching** (#18435 — 108 comments, 577 👍) dominates by an order of magnitude. Users want work vs. personal, or client-A vs. client-B isolation inside the desktop app.

2. **Cross-device continuity** (#60058) — OpenAI Codex shipped phone-connect; Claude Code users want the same. Expectation is real-time session sync across claude.ai, desktop, and mobile.

3. **Agent autonomy safeguards** — both **programmatic compaction** (#66246) and **dynamic model selection for workflows** (#66703) are requests for the runtime to self-manage cost and context instead of blindly inheriting expensive parent-model settings.

4. **Safety classifier tunability** — requests for a way to suppress or configure API safety flags (#66727), especially for authorized security work and domain-specific content (data pipelines, health data, academic physics) that routinely triggers false positives.

5. **Observability for subagents** — tmux-based rendering for workflow subagents (#66686) would give the same transparency that team-mode agents enjoy today.

6. **Per-agent global setting isolation** — (#66402) `/model` and `/effort` writing globally to `~/.claude/settings.json` breaks fleet/multi-agent workflows that need independent configurations.

---

## 6. Developer Pain Points

- **Recurring model/tool-call parser failures** (#63875, #66721, #66714): Mid-session crashes with "tool call could not be parsed," internal errors on tool results, and silent advisor/model incompatibility swallowed by fallback. These destroy trust in long sessions.
- **Fable 5 safety classifier false positives** (#66671, #66728, #66718, #66592, #66595, #66717, #66708, #66596): The dominant recurring theme. Users report blocks on security reviews, biology/health data analysis, physics research, and even basic greetings. The silent auto-downgrade to Opus (#66723) is especially disruptive.
- **Windows platform instability**: Named pipe failures (#66483), daemon supervisor bugs, cowork update data loss (#66729), and the underlying model parsing bug (#63875) — Windows users are disproportionately affected.
- **Memory not persisting** (#66702): Skill-specific memory sessions don't survive restarts, degrading learned behavior between runs.
- **Token cost blowout**: Runaway extended thinking in Opus 4.8 (#66711) and workflow subagents spawning at parent-model tier (#66703) are burning through usage limits at alarming rates — users want automatic safeguards.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-10

Produced by OWL, your AI technical analyst.

---

## 1. Today's Highlights

Two issues are dominating community attention: the **GPT-5.5 404 "Model not found" bug** across Windows, macOS, and CLI is now the single most-discussed issue (#26892, 79 comments), and a long-awaited **`/undo` command revival** continues to pile up votes (#9203, 👍274). On the engineering side, the Rust-based v0.139.0 and v0.140.0-alpha.2 landed alongside several exciting PRs — **streaming file APIs**, **Noise relay infrastructure**, **realtime handoff consolidation**, and a **tool-search-cache optimization** that targets a ~113 ms per-turn regression.

---

## 2. Releases

### v0.139.0 (stable)
- **Standalone Web Search in Code mode** — Code mode can now invoke standalone web search directly, including from nested JavaScript tool calls, and receive plaintext results. This substantially reduces context-assembly overhead when Codex needs external information. [#26719](https://github.com/openai/codex/pull/26719)
- **Schema compaction improvement** — Tool and connector input schemas now preserve `oneOf` and `allOf` structures; large schemas retain more shallow structure when compacted, improving both accuracy and context efficiency.

### v0.140.0-alpha.2
- Alpha preview — details pending merge of stacked PRs (see §4). Expected to ship the streaming file API, Noise relay, and tool-search caching.

### v0.139.0-alpha.3 / -alpha.2
- Pre-release milestones containing various fixes leading up to stable 0.139.0.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|---|---|
| [#26892](https://github.com/openai/codex/issues/26892) | **GPT-5.5 listed as available but returns 404** (79 comments, 👍28) | Most-discussed issue of the week. Affects Desktop + CLI on Windows and macOS. There are at least 4 duplicates ([#26910](https://github.com/openai/codex/issues/26910), [#27021](https://github.com/openai/codex/issues/27021), [#26860](https://github.com/openai/codex/issues/26860), [#26916](https://github.com/openai/codex/issues/26916), [#26927](https://github.com/openai/codex/issues/26927)). Indicates a model metadata / backend rollout mismatch. |
| [#9203](https://github.com/openai/codex/issues/9203) | **`/undo` command removed — please bring back** (48 comments, 👍274) | Top-liked feature request. Users accidentally lose untracked file changes with no way to revert. The 👍274 vote count signals this is deeply felt across the community. |
| [#24391](https://github.com/openai/codex/issues/24391) | **Windows sandbox spawn-setup refresh fails on 0.133.0** (42 comments, 👍25) | Sandbox regressions on Windows have been a persistent pain point; this is another data point in that pattern. |
| [#20741](https://github.com/openai/codex/issues/20741) | **Desktop chat histories disappeared after update** (32 comments, 👍14) | Data loss after an update destroys trust. Affects macOS / ChatGPT Pro users. |
| [#26493](https://github.com/openai/codex/issues/26493) | **Context compaction sends unsupported `context_compaction` type** (16 comments) | Compaction is a core long-context mechanism; breakage here degrades the entire experience on long sessions. Linked duplicate at [#27005](https://github.com/openai/codex/issues/27005). |
| [#18299](https://github.com/openai/codex/issues/18299) | **File viewer hides dotfiles/folders** (11 comments, 👍24) | `.agents`, `.codex`, `.claude`-adjacent config dirs are invisible, hurting discoverability. |
| [#16717](https://github.com/openai/codex/issues/16717) | **Configurable Windows agent shell (feat)** — **CLOSED** (8 comments, 👍15) | Positive closure: `windows.agent_shell` config landed, letting users switch from hardcoded PowerShell to Git Bash. Worth noting as a new feature. |
| [#18969](https://github.com/openai/codex/issues/18969) | **Support `cwd` for `spawn_agent`** (4 comments, 👍5) | Parallel subagent workflows need isolated checkouts; the tool surface lacks a working-directory parameter. |
| [#23095](https://github.com/openai/codex/issues/23095) | **Allow `spawn_agent` to start in specified workspace/worktree** (3 comments, 👍3) | Related to above — multi-agent coordination across directories is a top-requested workflow. |
| [#23279](https://github.com/openai/codex/issues/23279) | **`codex models` CLI command to print available models** (3 comments) | Simple but practical: users need a quick way to list models from the terminal. |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|---|---|
| [#27190](https://github.com/openai/codex/pull/27190) | **Streaming file APIs** | Adds pull-based streaming `readFile`/`writeFile` to app-server v2 and exec-server with client-supposed handles, enabling large-file I/O without buffering entire payloads. |
| [#27226](https://github.com/openai/codex/pull/27226) | **Fix Remote SSH agent forwarding** | Fixes a real-world bug where OpenSSH's different bootstrap-vs-proxy session lifetimes caused forwarded-agent connections to break. |
| [#27258](https://github.com/openai/codex/pull/27258) | **Cache tool-search handler across sampling continuations** | Eliminates ~113 ms per-turn cost from `append_tool_search_executor` rebuilding the BM25 index when tools haven't changed. Directly targets a measured latency regression. |
| [#27094](https://github.com/openai/codex/pull/27094) & [#27107](https://github.com/openai/codex/pull/27107) | **Add spans to `build_tool_router` and `run_turn`** | Observability-focused: wraps turn orchestration, sampling requests, and tool-load work in trace spans so latency breakdowns become actionable. |
| [#26245](https://github/openai/codex/pull/26245)–[#26247](https://github.com/openai/codex/pull/26247), [#26273](https://github.com/openai/codex/pull/26273) | **exec-server Noise relay stack** (5 PRs) | End-to-end Noise protocol relay for encrypted remote execution — opt-in E2E tests, executor transport, and remote opt-in. This is infrastructure for zero-trust remote dev environments. |
| [#24999](https://github.com/openai/codex/pull/24999) | **Per-session realtime model overrides** | Adds optional `model`/`version` fields to `thread/realtime/start` so clients switch model without restarting app-server or mutating persisted config. |
| [#27127](https://github.com/openai/codex/pull/27127) | **Forward assistant output to realtime through handoffs** | Makes realtime voice feel like a single coherent assistant by ensuring the frontend model hears *every* Codex message, regardless of turn origin. |
| [#17724](https://github.com/openai/codex/pull/17724) | **Append macOS Seatbelt sandbox denials to command output** | Opt-in diagnostics that surface why Seatbelt blocked a command directly in the result, sparing users from digging into the system log. |

---

## 5. Feature Request Trends

1. **Multi-agent / subagent workspace control** — `cwd` for `spawn_agent` ([#18969](https://github.com/openai/codex/issues/18969), [#23095](https://github.com/openai/codex/issues/23095)) and explicit work directory selection are consistently requested for parallel-agent workflows across git checkouts.
2. **Session export** ([#13267](https://github.com/openai/codex/issues/13267)) — A simple `/export` (or similar) to dump the full session transcript for record-sharing or compliance.
3. **Dotfile visibility** ([#18299](https://github.com/openai/codex/issues/18299)) — File trees should surface `.agents`, `.codex`, and similar config directories by default.
4. **Windows shell configurability** (✅ shipped — [#16717](https://github.com/openai/codex/issues/16717)) — `windows.agent_shell` now shipped, resolving a months-long request.
5. **Realtime / voice coherence** — Multiple PRs (above) are converging on making voice-interleaved sessions feel seamless.
6. **Granular observability** — New spans and profiled tool-search caching suggest the team and community are prioritizing measurable latency reduction.

---

## 6. Developer Pain Points

- **GPT-5.5 backend instability** — The 404 errors are not isolated; they span Desktop, CLI, Windows, macOS, and multiple regions (Brazil/GIG specifically called out). Until resolved, ~15 open issues will keep generating duplicates.
- **Windows as a second-class platform** — Sandbox regressions ([#24391](https://github.com/openai/codex/issues/24391)), notification-launch bugs ([#25231](https://github.com/openai/codex/issues/25231)), agent-shell hardcoding (fixed), Terminal + WSL2 display flicker ([#25004](https://github.com/openai/codex/issues/25004)), and context-indicator display ([#24272](https://github.com/openai/codex/issues/24272)) show systemic Windows friction.
- **Session log bloat** — Logs ballooning to 700 MB–2 GB from compaction history and raw tool output ([#24948](https://github.com/openai/codex/issues/24948)) is a real disk-space and performance concern for long-running sessions.
- **No undo for destructive file ops** — The `/undo` gap ([#9203](https://github.com/openai/codex/issues/9203)) is the single most up-voted issue in the repo. Until addressed, users are one accidental `rm` away from lost work.
- **Context compaction breakage** — Two separate reports ([#26493](https://github.com/openai/codex/issues/26493), [#27005](https://github.com/openai/codex/issues/27005)) of the compaction pipeline sending unsupported item types, which silently degrades long-context quality.
- **Auth / workspace migration friction** — PR review fails after workspace migration ([#26867](https://github.com/openai/codex/issues/26867)); remote device revocation leaves orphaned connections ([#23865](https://github.com/openai/codex/issues/23865)). These are "it worked, then I moved / revoked, now it's broken" stories that erode trust.

---

*Data sourced from [github.com/openai/codex](https://github.com/openai/codex) as of 2026-06-10. Digest generated by OWL.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-10

---

## 1. Today's Highlights

Gemini CLI shipped a new preview release (`v0.47.0-preview.0`) and two patch releases (`v0.46.0-preview.3`, `v0.45.3`), with the core patch being a Vertex AI model-mapping fix cherry-picked from [PR #27749](https://github.com/google-gemini/gemini-cli/pull/27749). On the issues front, the community remains highly engaged around agent reliability — particularly subagent hangs, session recovery, and Auto Memory correctness. Security is also in focus, with multiple open PRs addressing path traversal vulnerabilities in the skill management subsystem.

---

## 2. Releases

| Version | Type | Key Detail |
|---|---|---|
| [`v0.47.0-preview.0`](https://github.com/google-gemini/gemini-cli/releases/tag/v0.47.0-preview.0) | Preview | Nightly bump; no new feature highlights beyond routine version cut. |
| [`v0.46.0-preview.3`](https://github.com/google-gemini/gemini-cli/releases/tag/v0.46.0-preview.3) | Preview patch | Cherry-picks Vertex AI model-mapping fix (`f08b4af`) to resolve routing of `gemini-3.5-flash` through non-API-key auth paths. |
| [`v0.45.3`](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.3) | Stable patch | Same Vertex AI fix cherry-picked to the stable `v0.45.x` branch. |

**Takeaway:** If you're using `LOGIN_WITH_GOOGLE` or `COMPUTE_ADC` auth with Vertex AI, upgrading to the latest patch of your current branch is strongly recommended.

---

## 3. Hot Issues

### Agent Reliability & Correctness

1. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** ⭐ 8 upvotes · 7 comments
   - Users report the agent hangs indefinitely (up to an hour) when delegating to the generalist subagent. Workaround: instruct the model not to use sub-agents.
   - **Why it matters:** This hits core workflow productivity. The `workstream-rollup` label signals maintainer attention.

2. **[#22323 — Subagent reports GOAL success after MAX_TURNS interruption](https://github.com/google-gemini/gemini-cli/issues/22323)** 👍 2 · 6 comments
   - The `codebase_investigator` subagent reports `status: "success"` with `Termination Reason: GOAL` even when it hit the turn limit before completing analysis.
   - **Why it matters:** Silent failures erode trust in agent outputs. Users may act on incomplete analysis.

3. **[#25166 — Shell command execution stuck on "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** 👍 3 · 4 comments
   - Simple CLI commands that have already finished are shown as active, blocking the session.
   - **Why it matters:** Frequent reproduction makes this a high-friction daily annoyance.

4. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** · 5 comments
   - If the extraction agent decides a session looks low-signal and skips reading it, it stays unprocessed and gets surfaced again later in a loop.
   - **Why it matters:** Background processing never converges; wastes tokens and user attention.

5. **[#26525 — Auto Memory deterministic redaction & logging reduction](https://github.com/google-gemini/gemini-cli/issues/26525)** · 5 comments
   - Secrets reach model context *before* the extraction prompt can redact them; existing skill contents are also logged.
   - **Why it matters:** Security/privacy concern — credentials in transcripts could leak into model context.

6. **[#22745 — AST-aware file reads, search, and mapping EPIC](https://github.com/google-gemini/gemini-cli/issues/22745)** 👍 1 · 7 comments
   - Evaluating whether AST-aware tools can reduce misaligned reads and noise tokens by reading precise method bounds.
   - **Why it matters:** Could materially improve agent efficiency on large codebases.

7. **[#21968 — Gemini does not use skills/sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** · 6 comments
   - Even when custom skills are highly relevant (e.g., gradle, git), the model ignores them without explicit instruction.
   - **Why it matters:** Skills are a key extensibility mechanism; underutilization defeats their purpose.

8. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** 👍 1 · 2 comments
   - Model uses `git reset --force` where safer alternatives exist; doesn't understand danger of modifying shared DBs.
   - **Why it matters:** Safety guardrails are critical for developer trust.

9. **[#24246 — 400 error with >~400 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** · 3 comments
   - API rejects requests when too many tools are registered; the agent doesn't proactively scope tools.
   - **Why it matters:** Limits the number of MCP servers/tools you can attach simultaneously.

10. **[#24353 — Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** · 7 comments
    - Follow-up EPIC to build on 76 existing behavioral eval tests across 6 supported Gemini versions.
    - **Why it matters:** Signals long-term investment in quality assurance and regression testing.

---

## 4. Key PR Progress

### Security

1. **[PR #27767 — Prevent path traversal in skill install/link/uninstall](https://github.com/google-gemini/gemini-cli/pull/27767)** `OPEN` · `size/m`
   - Mitigates three path traversal vulnerabilities in `installSkill`, `linkSkill`, and `uninstallSkill`. Frontmatter paths were not sanitized, allowing crafted skill packages to write outside the skill directory.
   - **Impact:** Critical security fix awaiting review. A duplicate/earlier PR (#27659) was already merged.

### Agent

2. **[PR #27760 — Use gemini-3.5-flash for all auth types including Vertex AI](https://github.com/google-gemini/gemini-cli/pull/27760)** `OPEN` · `help wanted`
   - Fixes `setFlashModels()` to set `gemini-3.5-flash` for Vertex AI auth, not just AI Studio. Related to [issue #27759](https://github.com/google-gemini/gemini-cli/issues/27759) and the cherry-picked fix in v0.45.3/v0.46.0-preview.3.
   - **Impact:** Completes the model mapping fix for the main branch.

3. **[PR #27771 — Fix MCP header encoding for non-ASCII values](https://github.com/google-gemini/gemini-cli/pull/27771)** `OPEN`
   - Normalizes MCP transport header values before passing to Fetch, so Unicode headers (e.g., `mąka`) don't cause discovery failures. Fixes [#25668](https://github.com/google-gemini/gemini-cli/issues/25668).
   - **Impact:** Improves MCP server compatibility with internationalized configurations.

4. **[PR #27705 — Promote Gemini 3.1 Flash Lite to GA, support Gemini 3.5 Flash](https://github.com/google-gemini/gemini-cli/pull/27705)** `OPEN` · `size/xl`
   - Unifies three change lines: promotes `gemini-3.1-flash-lite` to GA, updates default flash model references, and adds `gemini-3.5-flash` support.
   - **Impact:** Users on latest models should keep an eye on this for default model behavior changes.

5. **[PR #27770 — Avoid persisting empty resume sessions](https://github.com/google-gemini/gemini-cli/pull/27770)** `CLOSED`
   - Filters empty/command-only sessions from `/resume` and `--last` flows; cleans up startup-only sessions on exit.
   - **Impact:** Reduces noise in session history.

6. **[PR #27772 — Standardize tool output formatting](https://github.com/google-gemini/gemini-cli/pull/27772)** `OPEN`
   - Refactors output text formatting across `mcp-tool`, `shell`, and `web-fetch` to use consistent data structures via a shared `wrapUntrusted` helper.
   - **Impact:** Reduces bugs from duplicated text transformation logic.

### Core / CLI

7. **[PR #27391 — Filter internal session context from history during resumption](https://github.com/google-gemini/gemini-cli/pull/27751)** `CLOSED`
   - Fixes `<session_context>` XML blocks appearing in TUI when resuming sessions.
   - **Impact:** Cleaner resume experience.

8. **[PR #27754 — Add missing return after 501 in A2A server GET /tasks/metadata](https://github.com/google-gemini/gemini-cli/pull/27754)** `OPEN` · `help wanted`
   - Prevents `ERR_HEADERS_SENT` crash on the A2A server endpoint.
   - **Impact:** Fixes a server-crash bug; straightforward one-line fix.

9. **[PR #27698 — Zero-quota limits fail fast to prevent retry loop hang](https://github.com/google-gemini/gemini-cli/pull/27698)** `OPEN`
   - Stops the CLI from entering a futile 10-attempt retry loop when the account has a hard quota of `0`.
   - **Impact:** Unbilled/free-tier users get instant feedback instead of apparent hangs.

10. **[PR #27763 — Document read_file 20MB limit](https://github.com/google-gemini/gemini-cli/pull/27763)** `OPEN`
    - Documents an existing but previously undocumented file size limit that causes a confusing runtime error.
    - **Impact:** Improves developer UX through documentation alone.

---

## 5. Feature Request Trends

| Trend | Related Issues | Signal |
|---|---|---|
| **IGNORED in this digest** — *See note below* | — | — |
| **AST-aware codebase tools** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747) | Active investigation into whether AST-level tools (preilts/glyph/AST-grep) can reduce token waste and improve precision of `codebase_investigator`. |
| **Subagent auto-use / skill auto-discovery** | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#20195](https://github.com/google-gemini/gemini-cli/issues/20195) | Community wants the model to *automatically* leverage skills and sub-agents when relevant rather than requiring explicit prompting. |
| **Browser agent resilience** | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Requests for session takeover, lock recovery, and `settings.json` override support in the browser subagent. |
| **Destructive operation guardrails** | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Desire for the model to prefer safer alternatives to forceful git/database commands. |
| **Agent self-awareness** | [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) | Agent should know its own CLI flags, hotkeys, and execution semantics to serve as its own expert guide. |

---

## 6. Developer Pain Points

1. **Subagent hangs and silent failures** — The most upvoted and commented issues cluster around subagents hanging ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)) or reporting false success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)). This is the #1 reliability concern.

2. **Shell command "Waiting input" after completion** — A persistent, frequently reproduced bug ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) that blocks sessions on simple commands.

3. **Auto Memory correctness and security** — Multiple issues ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) highlight that the memory system retries endlessly, silently drops invalid patches, and may expose secrets to model context before redaction.

4. **Skills and sub-agents are underutilized** — Even well-described custom skills are ignored ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), and sub-agents run even when explicitly disabled in config ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)).

5. **Path traversal in skill management** — Two separate PRs ([#27767](https://github.com/google-gemini/gemini-cli/pull/27767), [#27659](https://github.com/google-gemini/gemini-cli/pull/27659)) addressing the same vulnerability class suggest this was a significant gap in input validation.

6. **Vertex AI model mapping** — The need for cherry-picks across three release branches (v0.45.x, v0.46.x-preview, and main) indicates this auth-model routing issue has been a multi-branch headache.

7. **Quota/rate-limit UX** — Zero-quota accounts get stuck in retry loops ([#27698](https://github.com/google-gemini/gemini-cli/pull/27698)) rather than failing fast with a clear message.

---

*Data source: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · Generated 2026-06-10*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-10

---

## 1. Today's Highlights

GitHub shipped **v1.0.61** (June 9), polishing the `/agents` picker and Create New Agent wizard with consistent borders/headers, fixing a blank-screen-on-resume bug, and adding an interactive `/settings` dialog. The community continues to surface a wave of active regressions and high-impact feature requests — most notably around **hook context injection breaking in v1.0.60**, **model list discrepancies with VS Code Copilot**, and **missing enterprise/BYOK support**. A total of 29 issues were active in the last 24 hours with no merged PRs.

---

## 2. Releases

### [v1.0.61](https://github.com/github/copilot-cli/releases/tag/v1.0.61) — 2026-06-09

- **UI polish**: `/agents` picker and Create New Agent wizard now have consistent borders, headers, and styled inputs
- **Bug fix**: Fixed a bug where resuming a session could leave the screen blank
- **New `/settings` dialog**: Interactive dialog to browse and edit all user settings in one place
- **Session resume**: Improved local session resume behavior (description truncated in changelog)

---

## 3. Hot Issues

### 🔴 [#3727](https://github.com/github/copilot-cli/issues/3727) — Plugin hook `additionalContext` no longer injected into planner (regression in v1.0.60)
**Why it matters**: A multi-version regression confirmed between v1.0.59 → v1.0.60. Custom plugin `userPromptSubmitted` hooks were injecting extra context into the pre-tool-use planner; this broke silently mid-release. Third-party plugin developers see their pipelines degrade with no error.  
**Reaction**: Early reporters with reproduction matrices; likely to generate follow-up pressure for a hotfix.

### 🔴 [#1703](https://github.com/github/copilot-cli/issues/1703) — CLI does not list all org-enabled models (e.g., Gemini 3.1 Pro) while VS Code Copilot does
**Why it matters**: The CLI shows a reduced model list compared to VS Code Copilot on the same GitHub account and organization. Users paying for org-level model access hit an artificial ceiling.  
**Reaction**: 54 👍 — highest upvoted issue in the last 24h; spans multiple comment threads and workarounds.

### 🟡 [#3730](https://github.com/github/copilot-cli/issues/3730) — Support Enterprise-Managed Custom Models in Copilot CLI
**Why it matters**: GitHub Copilot Enterprise admins can configure custom AI models and OpenAI-compatible endpoints via the Copilot Admin dashboard. These models appear in VS Code/Copilot Chat but are invisible in the CLI.  
**Reaction**: Newly filed; word-of-mouth likely to grow as enterprise adoption accelerates.

### 🟡 [#53](https://github.com/github/copilot-cli/issues/53) — Bring back the GitHub Copilot in the CLI commands to not break workflows
**Why it matters**: After 6 months of no official response, the community has begun forking (`shell-ai` by Deltik cited as 🥇). The core tension: removing `github-copilot-cli` branding/commands breaks CI scripts and shell aliases with no migration window.  
**Reaction**: 75 👍, 31 comments; probably the longest-running open tension in the repo right now.

### 🟡 [#3123](https://github.com/github/copilot-cli/issues/3123) — `/research` can't write its research report
**Why it matters**: The `/research` command completes analysis but fails to serialize the markdown output because the `create` tool isn't surfaced for the agent in a local session.  
**Reaction**: 4 upvotes; comments reveal users expect the tool's own output pipeline to "just work" without hand-holding.

### 🟡 [#3732](https://github.com/github/copilot-cli/issues/3732) — `edit` tool corrupts non-UTF-8 bytes
**Why it matters**: The `edit` tool silently overwrites valid CP1252 and other legacy-encoded bytes with `U+FFFD` replacement characters. Breaks localization files, binary-adjacent assets, and legacy codebases.  
**Reaction**: Freshly filed; internationalization-sensitive teams are watching closely.

### 🟡 [#3596](https://github.com/github/copilot-cli/issues/3596) — Session resume: "Error loading model list: Error: Not authenticated"
**Why it matters**: Resuming a local session breaks `/model` listing, while fresh sessions work — a confusing inconsistency that disrupts multi-session workflows.  
**Reaction**: 10 👍, consistent with a cluster of session/auth regressions.

### 🟡 [#3601](https://github.com/github/copilot-cli/issues/3601) — Bash tool drops non-ASCII characters (LC_CTYPE=C)
**Why it matters**: The bash tool spawns shells with `LANG=""` and `LC_CTYPE="C"`, silently stripping Chinese, Japanese, Korean, emoji, and accented Latin from all command strings. File paths with non-ASCII characters become unresolvable.  
**Reaction**: Quiet but severe; likely underreported due to locale-specific reproduction.

### 🟡 [#3736](https://github.com/github/copilot-cli/issues/3736) — Thinking Tokens/Text never appears with BYOK models
**Why it matters**: BYOK (Bring Your Own Key) endpoints of any type never surface thinking tokens or visible reasoning text. Breaks alignment with enterprise audit/logging expectations.  
**Reaction**: Filed *two hours* ago — very fresh; tied to #3730's broader enterprise gap.

### 🟡 [#2082](https://github.com/github/copilot-cli/issues/2082) — `Ctrl+Shift+C` no longer copies to clipboard on Linux (v1.0.4+)
**Why it matters**: Linux users lost the standard terminal copy shortcut after v1.0.4. While `Ctrl+C` and right-click still work for text selection, power-user muscle memory is broken.  
**Reaction**: 8 👍 and 20 comments; keyboard-interaction issues tend to compound with other recent regressions (#3724, #3733, #3735).

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours. The repository appears to be in a release-stabilization phase, with the core team focused on the v1.0.61 patches and the regression surface from v1.0.60.

---

## 5. Feature Request Trends

| Trend | Representative Issues | Signal |
|-------|----------------------|--------|
| **Enterprise model parity** | [#3730](https://github.com/github/copilot-cli/issues/3730) (custom enterprise models), [#3731](https://github.com/github/copilot-cli/issues/3731) (private network `web_fetch` toggle), [#3736](https://github.com/github/copilot-cli/issues/3736) (BYOK thinking tokens) | Enterprise teams are actively evaluating Copilot CLI but hitting missing-feature walls that VS Code Copilot already solves. |
| **Session portability & cross-machine resume** | [#3729](https://github.com/github/copilot-cli/issues/3729) (share local sessions across machines) | Users want local sessions to be cloud-syncable — a shift from the current local-only `.copilot` directory model. |
| **Hook/Plugin ecosystem maturity** | [#3727](https://github.com/github/copilot-cli/issues/3727) (hook regression), [#2540](https://github.com/github/copilot-cli/issues/2540) (plugin preToolUse hooks), [#3725](https://github.com/github/copilot-cli/issues/3725) (OpenTelemetry skill spans) | The hooks system is a core extensibility surface; regressions or missing observability block serious agentic workflows. |
| **Non-English / i18n support** | [#3601](https://github.com/github/copilot-cli/issues/3601) (bash LC_CTYPE), [#3732](https://github.com/github/copilot-cli/issues/3732) (edit tool UTF-8), [#3726](https://github.com/github/copilot-cli/issues/3726) (Chinese double-encoding) | Locale-aware shell interaction is a recurring pain cluster. |
| **Session lifecycle tooling (worktrees)** | [#1613](https://github.com/github/copilot-cli/issues/1613) (built-in git worktree lifecycle, 31 👍), [#2243](https://github.com/github/copilot-cli/issues/2243) (disable worktrees by default) | Opposing views: some users want deeper worktree automation; others want it off by default. The consensus is that defaults need revisiting. |

---

## 6. Developer Pain Points

1. **v1.0.60 regression cluster**: The jump from v1.0.59 to v1.0.60 introduced multiple breakages — hook context injection (#3727), plugin hook reliability (#2540), MCP server spawning loops (#3701), and public-network `web_fetch` restrictions (#3731). Each fix appears to create a new regression surface, eroding confidence in upgrade cadence.

2. **Model list inconsistency**: The CLI's model catalog doesn't match VS Code Copilot for the same authenticated account, forcing users to switch clients or file workarounds. Org-enabled models, enterprise custom models, and BYOK endpoints are all underrepresented.

3. **Non-ASCII / encoding fragility**: The `edit` tool corrupts non-UTF-8 bytes (#3732), the bash tool strips non-ASCII characters (#3601), and paste from interactive mode double-encodes Chinese characters (#3726). International users are effectively running a degraded toolchain.

4. **Session/auth state decay**: Several issues (#3596, #2655, #3729) point to authentication and session metadata becoming unreliable over time or across resume cycles, causing subtle workflow breaks that are hard to diagnose.

5. **Undocumented or surprising default behaviors**: Worktrees without opt-in consent (#2243), loss of `Ctrl+Shift+C` on Linux (#2082), and Windows Terminal zoom capture (#3735) all reflect a CLI that hasn't fully reconciled with established terminal conventions.

---

*Generated by **OWL** · Data captured 2026-06-10 · Source: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-10  

## 1. Today's Highlights  
Kimi Code had a quiet day with no new releases or PRs updated in the last 24 h. The most notable activity is a newly opened bug report about the Edit tool failing repeatedly on v0.12.0 when used with the k2.6 model on Debian, which may affect CLI editing stability on non‑macOS platforms.

## 2. Releases  
No new releases in the past 24 h.

## 3. Hot Issues  
Only one issue was updated; it’s highlighted as the most relevant recent thread.

- **Edit tool keeps failing in new kimi-code** — Issue [#2443](https://github.com/MoonshotAI/kimi-cli/issues/2443)  
  - Reporter: iaindooley  
  - Versions: CLI **v0.12.0**, model **k2.6**, platform **Debian**  
  - Core problem: Frequent failures in the Edit tool, indicating possible incompatibility or reliability regression on Linux + latest model.  
  - Why it matters: Edit-tool regressions directly affect core developer workflows (refactors, patches, in-place changes).  
  - Community sentiment: No comments or 👍 yet, but it may quickly gain traction if other Debian or Linux users see similar behavior.

## 4. Key PR Progress  
No pull requests updated in the last 24 h.

## 5. Feature Request Trends  
Based on this single recent issue, the visible trend is:

- **Stability & cross-platform parity for CLI editing** — Users expect Edit tool behavior to be consistent across macOS/Linux with the latest models.  
- Implicit expectation: Linux deployments should receive equal support and testing for core editing features.

## 6. Developer Pain Points  
The main emerging pain point from recent feedback:

- **Edit tool reliability on Linux** — Crashes or hangs when using Edit with k2.6 on Debian suggest platform-specific regression and reinforce the broader pain point of **fragile local tool integration** and **limited cross-platform testing visibility**.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest — 2026-06-10**  

---

### **Today's Highlights**  
OpenCode saw no new releases in the last 24 hours, but active development continues with a focus on stability, custom provider UX, and desktop improvements. A major memory megathread (#20695) remains the most-discussed issue, while several high-impact PRs target tool integrity, streaming output, and Electron stack updates. Community frustration persists around copy/paste reliability and context awareness in the VSCode extension.

---

### **Releases**  
No new releases in the last 24 hours.

---

### **Hot Issues**  

1. **#20695 [OPEN] Memory Megathread**  
   Centralized effort to diagnose memory leaks; maintainers explicitly ask users *not* to suggest LLM-generated fixes but to provide heap snapshots. High engagement (91 comments, 👍64) signals widespread impact.  
   → [anomalyco/opencode#20695](https://github.com/anomalyco/opencode/issues/20695)

2. **#13984 [OPEN] Can not copy and paste in opencode CLI**  
   Critical UX regression: clipboard appears to copy but Ctrl+V yields nothing. Affects workflow efficiency across OSes (45 comments, 👍20).  
   → [anomalyco/opencode#13984](https://github.com/anomalyco/opencode/issues/13984)

3. **#3472 [CLOSED] [bug] Context awareness**  
   VSCode extension claims context awareness but ignores selected lines. Closed without resolution—users still report confusion (38 comments, 👍26).  
   → [anomalyco/opencode#3472](https://github.com/anomalyco/opencode/issues/3472)

4. **#27530 [OPEN] Error: 4 of 5 requests failed: config.providers**  
   Server startup fails due to unexpected errors in provider/config loading. Blocks usage for multiple users (31 comments, 👍21).  
   → [anomalyco/opencode#27530](https://github.com/anomalyco/opencode/issues/27530)

5. **#5674 [OPEN] Custom OpenAI-compatible provider options not passed to API**  
   `baseURL` and `apiKey` from `opencode.json` ignored for custom providers—breaks self-hosted or proxy setups (23 comments, 👍13).  
   → [anomalyco/opencode#5674](https://github.com/anomalyco/opencode/issues/5674)

6. **#20802 [OPEN] Image attachments fail with custom OpenAI-compatible providers**  
   Vision input broken when using non-standard providers like `longent`. Same config works elsewhere (15 comments, 👍7).  
   → [anomalyco/opencode#20802](https://github.com/anomalyco/opencode/issues/20802)

7. **#30545 [OPEN] Desktop can not see File tree**  
   v1.15.13 regression: enabling File tree in Advanced Settings has no effect, even after restart (11 comments).  
   → [anomalyco/opencode#30545](https://github.com/anomalyco/opencode/issues/30545)

8. **#31498 [OPEN] Extremely bad developer prompt**  
   User praises the tool but criticizes agent’s over-cautious behavior (e.g., questioning `mv` for simple file moves). Highlights prompt engineering gaps (7 comments).  
   → [anomalyco/opencode#31498](https://github.com/anomalyco/opencode/issues/31498)

9. **#31525 [OPEN] Prompt loop breaks Anthropic prompt cache**  
   DB reloads on every iteration invalidate byte-identity, defeating caching optimizations—hurts cost/performance (4 comments).  
   → [anomalyco/opencode#31525](https://github.com/anomalyco/opencode/issues/31525)

10. **#26508 / #28226 [CLOSED] ZEN subscription scam allegations**  
    Users claim misleading UI redirects them to ZEN instead of GO plan. Closed, but trust concerns linger (12 + 5 comments).  
    → [anomalyco/opencode#26508](https://github.com/anomalyco/opencode/issues/26508)

---

### **Key PR Progress**  

1. **#31581 [OPEN] feat(core): sync models.dev reasoning options**  
   Adds typed support for provider-specific reasoning toggles (effort, budget_tokens)—future-proofs model capability handling.  
   → [anomalyco/opencode#31581](https://github.com/anomalyco/opencode/pull/31581)

2. **#31566 [CLOSED] refactor(core): unify filesystem search service**  
   Replaces legacy search with a single cwd-based service using FFF/Ripgrep + caching—improves autocomplete responsiveness.  
   → [anomalyco/opencode#31566](https://github.com/anomalyco/opencode/pull/31566)

3. **#31547 [OPEN] fix: ensure tool_use/tool_result integrity**  
   Addresses session hangs post-compaction by enforcing strict pairing of tool calls/results and Anthropic ordering.  
   → [anomalyco/opencode#31547](https://github.com/anomalyco/opencode/pull/31547)

4. **#31279 [OPEN] feat(app): add PWA support**  
   Enables installable web app via service worker—addresses offline use and update prompts (#19174, #19119).  
   → [anomalyco/opencode#31279](https://github.com/anomalyco/opencode/pull/31279)

5. **#28647 [OPEN] fix(skill): run plugin config hooks before skill discovery**  
   Fixes superpowers-like plugins that register custom skill dirs—ensures paths are available at discovery time.  
   → [anomalyco/opencode#28647](https://github.com/anomalyco/opencode/pull/28647)

6. **#29447 [OPEN] feat: add task model override**  
   Lets primary agent choose subagent model at runtime—enables cost/performance tiering for subtasks.  
   → [anomalyco/opencode#29447](https://github.com/anomalyco/opencode/pull/29447)

7. **#31578 [OPEN] fix(cli): stream run output + flush race conditions**  
   Fixes silent exits and dropped answers in `opencode run` by enabling proper streaming and part flushing.  
   → [anomalyco/opencode#31578](https://github.com/anomalyco/opencode/pull/31578)

8. **#31571 [CLOSED] fix(desktop): update Electron stack**  
   Upgrades Electron to v42.3.3 and fixes Linux AppImage naming—resolves panel layout issues.  
   → [anomalyco/opencode#31571](https://github.com/anomalyco/opencode/pull/31571)

9. **#26545 [CLOSED] fix: increase compaction tail_turns from 2 → 15**  
   Prevents premature message loss during auto-compaction—addresses user reports of disappearing context.  
   → [anomalyco/opencode#26545](https://github.com/anomalyco/opencode/pull/26545)

10. **#26510 [CLOSED] feat: add Databricks provider**  
    First-class support for Databricks Model Serving + AI Gateway—expands enterprise deployment options.  
    → [anomalyco/opencode#26510](https://github.com/anomalyco/opencode/pull/26510)

---

### **Feature Request Trends**  
- **Custom provider robustness**: Repeated issues with OpenAI-compatible providers (image passthrough, option forwarding, streaming errors) demand better abstraction.  
- **Context awareness clarity**: Users expect VSCode selection auto-attachment like Claude Code—current behavior is undocumented or broken.  
- **Usage transparency**: Requests for in-CLI plan stats (#27698) and session insights (#26590) reflect desire for cost control.  
- **Input flexibility**: Speech-to-text (#31542), Office file drag-and-drop (#27689), and multi-line paste fixes (#23524) aim to reduce friction.

---

### **Developer Pain Points**  
- **Clipboard & input reliability**: Copy/paste failures (#13984) and multi-line paste splitting (#23524) disrupt core workflows.  
- **Memory & performance**: Heap leaks (#20695) and prompt cache invalidation (#31525) hurt long sessions.  
- **Tool execution instability**: “Tool execution aborted” errors (#18757) and post-compaction hangs (#27594) break automation.  
- **Desktop UX regressions**: File tree (#30545) and Electron layout bugs (#31571) suggest insufficient QA on GUI updates.  
- **Subscription trust issues**: ZEN/GO confusion (#26508, #28226) risks user retention despite closure.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-10

## 1. Today's Highlights

This 24-hour window is dominated by the rollout of **Claude Fable 5 and Mythos 5** across the Anthropic and Amazon Bedrock providers, with multiple PRs rapidly adding and correcting metadata for these new models. On the quality-of-life front, a closed issue and accompanying PRs have significantly improved the **project trust approval dialog** — adding global toggles, folder inheritance, quick-trust-parent actions, and alignment of `config`/`list` commands. Meanwhile, **interactive-mode crashes** (#4984, EPIPE errors during `edit` tool calls) and **Azure GPT-5.x context limits** (#5559, 1M not 272k) stand out as the most urgent pain points affecting daily workflows.

---

## 2. Releases

**v0.79.1** shipped within the last 24h with two headline items:

- **Claude Fable 5** is now available on both the Anthropic and Amazon Bedrock providers, with adaptive-thinking and `xhigh` effort support. This triggered a cascade of PRs (#5563, #5561, #5565, #5554) to wire up the new models correctly.
- **Prompt template defaults** — positional arguments now accept default values via `${1:-7}` syntax, so templates can omit optional parameters gracefully.

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters |
|---|-------|--------|---------------|
| [#5514](https://github.com/earendil-works/pi/issues/5514) | Project Trust Feature Feedback | CLOSED, 24 comments, 12 👍 | The brand-new trust-gating feature landed and immediately polarized users. The 12 👍 and 23-comment thread show strong pushback against repeated approval prompts. The team responded within hours with PR #5549 adding global toggles, inheritance, and quick-trust — a textbook example of rapid community-driven iteration. |
| [#4984](https://github.com/earendil-works/pi/issues/4984) | Interactive mode crash on transient terminal EPIPE | CLOSED, *in-progress* label | `edit` tool calls are crashing Pi with uncaught `write EPIPE`. This is a hard crash — not just degraded UX — and affects anyone running interactive sessions. |
| [#4180](https://github.com/earendil-works/pi/issues/4180) | Links not clickable anymore | CLOSED | After the switch to alternate term mode for `pi-codingagent`, hyperlinks (both raw URLs and markdown links) stopped being clickable. A regression with wide UX impact for agents that cite web sources. |
| [#4877](https://github.com/earendil-works/pi/issues/4877) | Session folder collision | OPEN, 11 comments | Collision in the flat session-naming scheme means two different project paths (`/a/b/c/d` vs `/a-b/c-d`) map to the same folder `--a-b-c-d--`. Low-frequency but high-surprise; can silently cross-contaminate sessions. |
| [#5363](https://github.com/earendil-works/pi/issues/5363) | Add amazon-bedrock-mantle provider | OPEN, 7 comments, 3 👍 | Bedrock Mantle models (OpenAI Responses API) are incompatible with the existing Converse-API-based Bedrock provider. Users on AWS need a separate provider path to avoid silently broken requests. |
| [#5559](https://github.com/earendil-works/pi/issues/5559) | Azure GPT-5.5/5.4 are 1M context, not 272k | CLOSED | Azure's latest GPT-5.x models have 1M context windows, but Pi's model metadata registers them at 272k, causing premature context-switch or truncation. A data-correction bug with immediate real-world impact. |
| [#5464](https://github.com/earendil-works/pi/issues/5464) | Local models: 3-5 min "Working" latency | CLOSED | Every message sent to a local Ollama model (e.g., `ministral3:8b`) stalls for 3-5 minutes even mid-session on a simple "Hi". Unacceptable UX for local-model adopters. |
| [#4714](https://github.com/earendil-works/pi/issues/4714) | `/update` TUI command instead of `pi update` | OPEN | Users want to run Pi updates from inside the TUI without quitting first. Small friction point, but the request surfaces repeatedly across sessions. |
| [#5546](https://github.com/earendil-works/pi/issues/5546) | Use Markdown, not XML, for model-facing skills catalog | CLOSED | Replacing XML skill blocks in the prompt with a compact Markdown list — clearer for the model to parse, no behavioral change to skill discovery or invocation. A good example of prompt hygiene iteration. |
| [#5531](https://github.com/earendil-works/pi/issues/5531) | kimi.com: Thinking enabled despite `thinking off` | CLOSED | Kimi K2.6 continues burning thinking tokens even when the user explicitly sets `thinking off`. Provider-level thinking flag is being ignored — significant for token cost control. |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#5563](https://github.com/earendil-works/pi/pull/5563) / [#5564](https://github.com/earendil-works/pi/pull/5564) | Add Claude Fable 5 and Mythos 5 models (Anthropic) | CLOSED | Model metadata for the new adaptive-thinking models on the direct Anthropic provider. Disables unsupported `thinking.type: "disabled"` and temperature payloads. |
| [#5561](https://github.com/earendil-works/pi/pull/5561) | Add Claude Fable 5 to Amazon Bedrock | OPEN | Mirrors the Anthropic-side Fable 5 adapter to Bedrock, sending `thinking.type=adaptive` with `output_config.effort` and exposing native `xhigh` effort via the thinking-level map. |
| [#5567](https://github.com/earendil-works/pi/pull/5567) | Mark Claude Fable 5 thinking off unsupported | CLOSED | Nulls the thinking flag for Fable consistent with other models, omitting the unsupported payload field that would cause API errors. |
| [#5549](https://github.com/earendil-works/pi/pull/5549) | Improved project approval settings | **CLOSED, high-impact** | Adds a global on/off toggle, folder inheritance, quick-trust-parent in the approval dialog (VS Code-style), and aligns `config`/`list` defaults. Directly addresses the firestorm in #5514. |
| [#5547](https://github.com/earendil-works/pi/pull/5547) | Experimental feature guard | CLOSED | Implements RFC 0043's `PI_EXPERIMENTAL=1` gate for experimental features — a structured way to ship opt-in bleeding-edge functionality. |
| [#5555](https://github.com/earendil-works/pi/pull/5555) | Attach `reasoning_details` streamed before `tool_calls` | CLOSED | Fixes silent dropping of encrypted reasoning signature chunks when they arrive ahead of tool-call chunks (e.g., OpenRouter + Gemini). |
| [#5553](https://github.com/earendil-works/pi/pull/5553) | Add prompt template argument defaults | CLOSED | Implements the `${N:-default}` syntax from v0.79.1, with single-pass substitution to prevent recursive expansion bugs. |
| [#5509](https://github.com/earendil-works/pi/pull/5509) | Add Amazon Bedrock Mantle OpenAI Responses provider | OPEN | New provider for Bedrock Mantle's OpenAI-compatible Responses API at `bedrock-mantle.{region}.api.aws/openai/v1/responses`. Also adds support for the GPT-5.5 and GPT-5.4 models Mantle exposes. |
| [#5270](https://github.com/earendil-works/pi/pull/5270) | Ephemeral session model and thinking level selection | CLOSED | `setModel()` and `setThinkingLevel()` now default to session-scoped changes; an explicit `{ persist: true }` flag is required to mutate global defaults. Prevents Ctrl+P / Ctrl+T from silently overwriting user preferences. |
| [#5385](https://github.com/earendil-works/pi/pull/5385) | Detect first-run terminal theme | OPEN | Queries terminal color via OSC sequences on first run to auto-select light/dark theme, then persists to settings. Solves the "blinding white Pi on dark terminal" onboarding problem. |

---

## 5. Feature Request Trends

**Extensibility & Plugin Ercosystem** dominates the request landscape this cycle. Multiple issues call for making internal systems accessible to extension authors: exposing `isProjectTrusted()` to plugins ([#5523](https://github.com/earendil-works/pi/issues/5523)), letting extensions register custom autocomplete trigger characters beyond the built-in `/ @ #` set ([#4703](https://github.com/earendil-works/pi/issues/4703)), and supporting custom tool operations over remote filesystems while Pi runs on a different OS ([#5350](https://github.com/earendil-works/pi/issues/5350)). Together, these signals indicate a community that is building on top of Pi and needs first-class extension APIs.

**Multi-provider & Model Coverage** is the other major axis. Requests span Bedrock Mantle ([#5363](https://github.com/earendil-works/pi/issues/5363)), kimi.com thinking compliance ([#5531](https://github.com/earendil-works/pi/issues/5531)), Azure GPT-5.x context limits ([#5559](https://github.com/earendil-works/pi/issues/5559)), and opencode-go API compatibility ([#5331](https://github.com/earendil-works/pi/issues/5331)) — each reflecting the real-world friction of supporting the fast-moving model/provider landscape with per-API idiosyncrasies.

**Workflow UX polish** rounds out the top trends: in-TUI `/update` ([#4714](https://github.com/earendil-works/pi/issues/4714)), `/about` on quiet startup ([#5548](https://github.com/earendil-works/pi/issues/5548)), and Markdown-over-XML for the skills catalog ([#5546](https://github.com/earendil-works/pi/issues/5546)) are all small-investment, high-frequency-request improvements.

---

## 6. Developer Pain Points

**Crashes and terminal rendering bugs are the most acute frustration.** The EPIPE crash in interactive mode ([#4984](https://github.com/earendil-works/pi/issues/4984)) and an uncaught `getSessionStats()` crash on Ollama sessions missing usage data ([#5386](https://github.com/earendil-works/pi/issues/5386)) both terminate sessions without graceful recovery. Side effects compound: broken pagination after `/new` ([#5337](https://github.com/earendil-works/pi/issues/5337)), stuck viewport on Windows ([#5192](https://github.com/earendil-works/pi/issues/5192)), CJK word-wrapping ([#5326](https://github.com/earendil-works/pi/issues/5326)), and kitty key-handling regressions ([#3967](https://github.com/earendil-works/pi/issues/3967)).

**Local-model deployment friction** is a distinct concern. The 3-5 minute latency ([#5464](https://github.com/earendil-works/pi/issues/5464)) and the Ollama crash ([#5386](https://github.com/earendil-works/pi/issues/5386)) both specifically affect Ollama-backed models, suggesting that the local-model integration path needs dedicated hardening — not just feature parity with cloud providers.

**Trust-gating fatigue** (#5514, 24 comments in under 24h) surfaced as a category error: a security feature that was too aggressive for power users. The rapid fix in PR #5549 (global toggle, inheritance, quick-trust) is a good outcome, but the episode highlights the tension between safe defaults and developer velocity in a tool that opens arbitrary project folders.

**Cross-platform path resolution** ([#5350](https://github.com/earendil-works/pi/issues/5350)) and **provider-specific API drift** ([#5331](https://github.com/earendil-works/pi/issues/5331), [#5531](https://github.com/earendil-works/pi/issues/5531), [#5559](https://github.com/earendil-works/pi/issues/5559)) are structural pain points that will recur as Pi's provider matrix grows. A systematic approach to provider conformance testing would pay dividends.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-10

---

## 1. Today's Highlights

Qwen Code is in the middle of a significant **v0.18.0 preview cycle** (`.preview.0` and `.preview.1` both landed in the last 24 hours), with the community rapidly iterating on daemon/ACP transport parity, multi-agent coordination, and session management. The most active discussion threads center on **ACP Streamable HTTP transport** for native editor integration (Zed, Goose, JetBrains) and a growing backlog of **subagent and session-resume bugs** that affect real-world workflows. Meanwhile, **50 open PRs** signal a highly active contributor base pushing features like Agent Teams, Dynamic Workflows, and project-scoped extensions.

---

## 2. Releases

| Version | Highlights |
|---|---|
| **v0.18.0-preview.1** | Chore release building on v0.17.1; includes `fix(cli): skip thought parts in copy output` by @he-yufeng — prevents internal reasoning tokens from polluting clipboard copies in TUI mode. |
| **v0.18.0-preview.0** | Same base fixes as preview.1; establishes the v0.18 release branch. |

> Both previews are incremental over **v0.17.1**. No breaking changes noted. The real feature surface for v0.18 is being assembled through the open PRs tracked below.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|---|---|---|
| [#4514](https://github.com/QwenLM/qwen-code/issues/4514) | `qwen serve` daemon capability gaps & backlog | Tracks remaining HTTP/SSE surface gaps for remote clients; foundational for headless/IDE usage. | 14 comments — the most-discussed issue in the set. |
| [#4782](https://github.com/QwenLM/qwen-code/issues/4782) | ACP Streamable HTTP transport — implementation status & upgrade plan | Enables Zed, Goose, JetBrains to connect to `qwen serve` without adapters. Critical for editor ecosystem adoption. | 4 comments, active PR [#4827](https://github.com/QwenLM/qwen-code/pull/4827) in progress. |
| [#4615](https://github.com/QwenLM/qwen-code/issues/4615) | Project-scoped `.mcp.json` with pending approval | Addresses a security gap: MCP servers in a workspace should require explicit approval before connecting. | 5 comments; aligns with supply-chain security best practices. |
| [#4727](https://github.com/QwenLM/qwen-code/issues/4727) | Dual Output mode TUI unresponsive | JSON-file I/O mode (`--json-file` / `--input-file`) hangs the TUI — blocks a key non-interactive workflow. | 5 comments; affects CI/automation users. |
| [#4888](https://github.com/QwenLM/qwen-code/issues/4888) | `ask_user_question` in IDEA plugin not showing text | Breaks interactive Q&A in the JetBrains plugin — users can't see questions or type answers. | 3 comments, P2 priority. |
| [#4876](https://github.com/QwenLM/qwen-code/issues/4876) | Subagent image reading returns unrelated content | Subagents fail at multimodal tasks that the main agent handles correctly — a regression in context passing. | 3 comments, P2, tagged `roadmap/subagents-tools`. |
| [#4891](https://github.com/QwenLM/qwen-code/issues/4891) | Terminal resize during streaming fragments scrollback | Visual corruption in scrollback after resizing mid-generation; degrades TUI UX. | 2 comments, P2, `welcome-pr`. |
| [#4904](https://github.com/QwenLM/qwen-code/issues/4904) | Cannot switch to newer models (qwen3.7-plus) | Model availability check is too restrictive under Coding Plan auth — blocks users from advertised models. | 2 comments; affects user trust in model switching. |
| [#4889](https://github.com/QwenLM/qwen-code/issues/4889) | In-process MCP server support for Python SDK | The Python SDK can't embed MCP servers, unlike Claude Code SDK's `create_sdk_mcp_server`. Biggest SDK gap per the requester. | 2 comments; directly references Claude Code parity. |
| [#4877](https://github.com/QwenLM/qwen-code/issues/4877) | OpenWork can't distinguish same model from different providers | When two providers expose identically-named models, the UI conflates them — a configuration ambiguity bug. | 2 comments, P2. |

---

## 4. Key PR Progress

| # | Title | Author | Description |
|---|---|---|---|
| [#4844](https://github.com/QwenLM/qwen-code/pull/4844) | **Agent Team — parallel sub-agent coordination** | @tanzhenxin | Experimental multi-agent mode: model creates named teams, spawns parallel sub-agents that message each other and a leader, share a task list, and consolidate results. |
| [#4827](https://github.com/QwenLM/qwen-code/pull/4827) | **ACP/REST parity — 29 new `_qwen/*` methods** | @chiga0 | Adds 29 dispatch methods for full ACP/REST parity (session recap, shell, detach, context_usage, etc.). Production hardening for `qwen serve`. |
| [#4732](https://github.com/QwenLM/qwen-code/pull/4732) | **Workflow tool P1 — minimal node:vm sandbox** | @LaZzyMan | First phase of Dynamic Workflows port from Claude Code: model-authored JS scripts run in a sandbox with sequential `agent()` calls. |
| [#4897](https://github.com/QwenLM/qwen-code/pull/4897) | **Persist file history snapshots for cross-session `/rewind`** | @doudouOUC | Saves `FileHistorySnapshot` to JSONL so `/rewind` survives session resume — previously lost on process exit. |
| [#4853](https://github.com/QwenLM/qwen-code/pull/4853) | **`enter_plan_mode` tool + Plan Approval Gate** | @callmeYe | Model can proactively self-lower into plan mode for complex tasks; adds approval gate when exiting from AUTO/YOLO mode. |
| [#4896](https://github.com/QwenLM/qwen-code/pull/4896) | **Stabilize prompt-cache prefix against MCP/skills churn** | @callmeYe | Decouples skill visibility from validation so mid-session MCP/skill changes don't invalidate the entire prompt cache. |
| [#4835](https://github.com/QwenLM/qwen-code/pull/4835) | **Project-level extension install & management** | @BZ-D | Extensions can now be installed per-project (`.qwen/extensions/`) or per-user, enabling workspace-specific tooling. |
| [#4850](https://github.com/QwenLM/qwen-code/pull/4850) | **Interactive multi-tab `/extensions` manager** | @BZ-D | Transforms `/extensions` from a read-only list into an interactive manager with Installed / Discover / Sources tabs. |
| [#4890](https://github.com/QwenLM/qwen-code/pull/4890) | **`/cd` command — change session working directory** | @qqqys | Adds `/cd <path>` slash command to move the session cwd without restarting, with workspace trust prompts. |
| [#4911](https://github.com/QwenLM/qwen-code/pull/4911) | **Fix: down-arrow reaches subagent in 1 press** | @wsyjh8 | Reorders TUI focus chain so Down from empty input reaches a running sub-agent in one press instead of two. |

---

## 5. Feature Request Trends

Synthesizing all open issues and PRs, the most-requested feature directions are:

1. **ACP & Daemon Parity** — The community is pushing hard to make `qwen serve` a first-class remote backend. Requests include full ACP Streamable HTTP transport ([#4782](https://github.com/QwenLM/qwen-code/issues/4782)), cursor-paged session listing ([#4902](https://github.com/QwenLM/qwen-code/pull/4902)), and REST/ACP method parity ([#4827](https://github.com/QwenLM/qwen-code/pull/4827)). This is the dominant architectural theme.

2. **Multi-Agent & Workflow Orchestration** — Agent Teams ([#4844](https://github.com/QwenLM/qwen-code/pull/4844)), Dynamic Workflows ([#4721](https://github.com/QwenLM/qwen-code/issues/4721), [#4732](https://github.com/QwenLM/qwen-code/pull/4732)), and subagent reliability fixes ([#4876](https://github.com/QwenLM/qwen-code/issues/4876)) reflect demand for structured parallel execution — catching up to Claude Code's swarm/workflow capabilities.

3. **Session Durability & Portability** — Cross-session `/rewind` ([#4897](https://github.com/QwenLM/qwen-code/pull/4897)), preserving CLI flags on resume ([#4884](https://github.com/QwenLM/qwen-code/issues/4884)), and `/cd` for working directory changes ([#4879](https://github.com/QwenLM/qwen-code/issues/4879)) all point to users wanting sessions that survive process restarts and adapt to context changes.

4. **Security & Trust Boundaries** — Project-scoped `.mcp.json` with approval gates ([#4615](https://github.com/QwenLM/qwen-code/issues/4615)), `--safe-mode` for troubleshooting ([#4883](https://github.com/QwenLM/qwen-code/issues/4883)), and configurable agent ignore files ([#4653](https://github.com/QwenLM/qwen-code/pull/4653)) show growing concern about supply-chain and configuration security.

5. **SDK & Extension Ecosystem** — In-process MCP servers in the Python SDK ([#4889](https://github.com/QwenLM/qwen-code/issues/4889)), project-level extensions ([#4835](https://github.com/QwenLM/qwen-code/pull/4835)), and archive/URL-based extension installs ([#4901](https://github.com/QwenLM/qwen-code/issues/4901)) indicate demand for a richer, more flexible extension model.

---

## 6. Developer Pain Points

- **Subagent reliability**: Subagents fail at tasks the main agent handles (image reading, tool use) — context passing to subagents is inconsistent ([#4876](https://github.com/QwenLM/qwen-code/issues/4876)).
- **Model switching friction**: Auth-type restrictions block advertised models ([#4904](https://github.com/QwenLM/qwen-code/issues/4904)); `modelProviders` requires duplicated `baseUrl` per model ([#4813](https://github.com/QwenLM/qwen-code/issues/4813), now closed but indicative).
- **TUI/IDE interaction bugs**: Dual-output mode hangs ([#4727](https://github.com/QwenLM/qwen-code/issues/4727)), terminal resize corrupts scrollback ([#4891](https://github.com/QwenLM/qwen-code/issues/4888)), and the IDEA plugin's `ask_user_question` is broken ([#4888](https://github.com/QwenLM/qwen-code/issues/4888)).
- **Configuration leakage**: Runtime snapshot prefixes leak into `settings.json` and stack on restart, causing 404 model errors ([#4729](https://github.com/QwenLM/qwen-code/issues/4729), closed).
- **Auto-update disrupting sessions**: Background updates replace chunks mid-session, breaking cross-auth-type model switches ([#4758](https://github.com/QwenLM/qwen-code/issues/4758), closed).
- **Memory/context pollution**: Users want finer control over user-profile generation and skill extraction to prevent context bloat ([#4898](https://github.com/QwenLM/qwen-code/issues/4898)); global cross-project memory is also requested ([#4747](https://github.com/QwenLM/qwen-code/issues/4747), closed).

---

*Data source: [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) · Generated by OWL for 2026-06-10*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*