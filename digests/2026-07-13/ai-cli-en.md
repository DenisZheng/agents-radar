# AI CLI Tools Community Digest 2026-07-13

> Generated: 2026-07-13 01:43 UTC | Tools covered: 9

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

# AI CLI Developer Tools: Cross-Tool Comparison Report
**Date: 2026-07-13**

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape in mid-2026 is characterized by rapid iteration alongside significant stability challenges. Claude Code and OpenAI Codex dominate community discussion volume, but face mounting frustration over safety classifier false positives, model compatibility churn, and Windows ecosystem fragility. Gemini CLI and Qwen Code are investing heavily in architectural foundations—sandboxing, daemon-based multi-workspace support, and evaluation infrastructure—suggesting a maturing focus on reliability over feature velocity. Kimi Code CLI and DeepSeek TUI represent smaller but committed communities wrestling with encoding, rate-limit accuracy, and provider-agnostic billing. Across all tools, multi-agent reliability, session persistence, and context window hygiene are emerging as universal pain points that will define the next phase of tool maturity.

---

## 2. Activity Comparison (Last 24 Hours)

| Tool | Open Issues (Hot) | PRs Updated | New Releases | Community Engagement Signal |
|-----|------------------|-------------|--------------|---------------------------|
| **Claude Code** | 10 (50 updated) | 3 | None | High volume; 50 issues updated, but low PR velocity |
| **OpenAI Codex** | 10 | 4 | None | Strong bug activity; #31814 has 122👍, systemic subagent issues |
| **Gemini CLI** | 10 | 10 | 1 nightly | High PR throughput; 74 dependency bumps + security fixes |
| **GitHub Copilot CLI** | 10 (15 updated) | 1 | None | Moderate bug influx; session reliability crises |
| **Kimi Code CLI** | 10 | 10 | None | Highest PR-to-issue ratio; 10 PRs addressing top complaints |
| **OpenCode** | 10 | 10 | None | Strong PR velocity; GPT-5.6 compatibility dominating |
| **Pi** | 10 | 10 | None | Heavy bug-fix day; 8 PRs merged, GPT-5.6 churn |
| **Qwen Code** | 10 | 10 | Nightly failed | Major architectural RFCs; daemon/workspace evolution |
| **DeepSeek TUI** | 3 (active) | 7 | None | Smallest but focused community; provider-agnostic pricing |

**Key insight:** Gemini CLI and Kimi Code lead in PR throughput, while Claude Code shows high issue volume but low PR output—suggesting maintenance bottlenecks. DeepSeek TUI has the smallest scope but highest fix-to-issue ratio.

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities:

| Feature Need | Affected Tools | Specific Requests |
|-------------|---------------|-------------------|
| **Session/Conversation Forking** | Codex (#30504), Pi (#6558, #6559), OpenCode (#36589) | Non-destructive prompt editing, branch navigation without tool-race conditions, compaction-aware forking |
| **Context Window & Token Management** | Claude Code (#67609), Copilot CLI (#4097), OpenCode (#35013), Qwen Code (#6721, #6762), Pi (#6477) | Auto-compaction reliability, skill context lifecycle, prompt cache stability, session ID for compaction |
| **Safety Classifier Refinement** | Claude Code (#77006, #77027, #77002), Codex (#32095), Gemini CLI (#22672) | False-positive reduction on legitimate domains, domain-aware classification, destructive-operation guardrails |
| **Windows Platform Parity** | Claude Code (#76094, #76980, #77012), Codex (#20214, #25271, #21538), Copilot CLI (#4095, #4069), Kimi Code (#2178, #2313) | Installer alternatives, encoding fixes, file-locking compatibility, anti-cheat driver conflicts |
| **Multi-Agent Visibility & Control** | Claude Code (#76694), Codex (#31814, #31097), Gemini CLI (#22323, #21968), Copilot CLI (#4101) | Subagent model selection, trajectory sharing, non-blocking inter-agent communication, false-success elimination |
| **Structured Output (JSON mode)** | Kimi Code (#2275, #2311), OpenCode (skill invocations), DeepSeek TUI (scorecard pricing) | `--output-format json`, `--json` flags for extract/pipe workflows, provider-aware cost tracking |
| **Enterprise Connectivity** | Kimi Code (#2300, #2279), Gemini CLI (custom CA), DeepSeek TUI (route-based pricing) | Custom CA certificates, proxy configuration, multi-provider cost attribution |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|------------|-------------|-----------|-------------|-----------|----------|-----|-----------|-------------|
| **Primary User** | Power devs/agents | Pro devs/MultiAgent | Enterprise teams | GitHub ecosystem | Individual devs | Hardcore TUI users | Hackers/tinkerers | Chinese-market devs | Indie TUI enthusiasts |
| **Key Strength** | Permissions model, agent cowork | Multi-agent orchestration | Security hardening, eval infra | Git/MCP integration | Simplicity, low barrier | Config flexibility, skill system | Extension ecosystem, tree/UIs | Daemon/workspace architecture | Provider-agnostic, speed |
| **Key Weakness** | Safety classifier false positives | Model metadata overriding config | Agent hang/stall issues | Session data corruption | Rate-limit inaccuracy, Windows bugs | GPT-5.6 provider fragmentation | GPT-5.6 adapter churn | CI stability, terminal hygiene | Small community, skill loss bug |
| **Technical Approach** | Cowork sandboxes, permissions DSL | MultiAgent V2, model metadata | Zero-dependency POSIX sandboxing | Plugin marketplace, session JSONL | Python/venv, PyInstaller | V2 background service, OpenCode config | TUI v2, Ledger history, extensions | Daemon, channel workers, ACP | Provider routing, i18n-first |
| **Release Cadence** | Moderate (last release within week) | Slow (no release today) | Fast (nightlies + security) | Slow (no release today) | Slow (v2.6 stable, no new) | Moderate (CI artifacts, no stable) | Moderate (0.80.6, heavy PRs) | Nightly (failed today) | Slow (v0.8.69 stable) |

**Strategic observations:**
- **OpenAI Codex** is the most fragmented provider experience—model metadata overrides user config, and GPT-5.6 models break through multiple auth paths.
- **Gemini CLI** is pushing hardest on security (CVE fixes) and evaluation infrastructure, positioning for enterprise deployment.
- **Qwen Code** is architecturally most ambitious with daemon/multi-workspace RFCs, targeting the DevOps/SRE use case.
- **Pi** has the richest extension ecosystem (Z.AI, custom keybindings, full-history pager) but suffers from GPT-5.6 adapter churn.
- **Kimi Code** and **DeepSeek TUI** are the most responsive to core user pain points (PR-to-issue ratio >1 for both).

---

## 5. Community Momentum & Maturity

| Tool | Momentum | Maturity Level | Key Signal |
|------|----------|---------------|------------|
| **Claude Code** | ⚠️ High issue volume, low PR velocity | Established (v2.1.207) | 50 issues updated today; safety classifier revolt suggests scale-out pain |
| **OpenAI Codex** | ⚠️ High upvotes, slow fixes | Mature but fragmented | #31814 (122👍) unfixed for weeks; model metadata design flaw |
| **Gemini CLI** | ✅ High PR throughput, nightly releases | Enterprise-ready | Security CVE patches + eval infrastructure + dependency hygiene |
| **Copilot CLI** | ⚠️ Weekend bug influx, low PR output | Early maturity | 15 new issues in 48h; session data corruption is existential |
| **Kimi Code** | ✅ High PR activity per user base | Growing | 10 open PRs addressing top 10 bugs; responsive maintainers |
| **OpenCode** | ✅ Strong PR velocity, healthy engagement | Maturing | GPT-5.6 compatibility is #1 pain; 10 PRs active |
| **Pi** | ✅ Heavy merge activity, extension ecosystem | Advanced | 8 PRs merged today; GPT-5.6 adapter work indicates active maintenance |
| **Qwen Code** | ✅ Architecture evolution phase | Rapidly maturing | RFC for multi-workspace daemon; Web Shell as first-class UI |
| **DeepSeek TUI** | ⬆ Focused, resilient community | Niche but stable | 7 PRs/3 issues; provider-agnostic pricing signals sophistication |

**Community size proxy (by issue engagement):** Codex > Claude Code > Copilot CLI > Gemini CLI > OpenCode > Pi > Qwen Code > Kimi Code > DeepSeek TUI

---

## 6. Trend Signals for Developers

1. **Model-Provider Fragmentation is the New Normal.** GPT-5.6 broke compatibility across Codex, OpenCode, and Pi simultaneously—through OAuth, Copilot, and Responses APIs. Developers should prefer tools with adapter-layer abstraction (Pi, DeepSeek TUI) over tight model coupling.

2. **Context Window Hygiene Becomes a First-Class Problem.** Auto-compaction failures, skill context bloat, prompt cache invalidation, and session data corruption appear in 7 of 9 tools. Tools that solve compaction reliability and token accounting will win heavy users.

3. **Windows is Still an Afterthought, and It's Costing Users.** Windows-specific bugs appear in Claude Code, Codex, Copilot CLI, and Kimi Code—installer, encoding, file-locking, and anti-cheat conflicts. Developers on Windows should budget for workarounds; the ecosystem still prioritizes macOS/Linux.

4. **Safety Classifier Backlash is Building.** Claude Code and Codex both face organized pushback against false-positive safety blocks on legitimate content (pet food analysis, fiction, open-source code). Expect a wave of "opt-out" or "classifier confidence threshold" features in Q3/Q4 2026.

5. **Multi-Agent Reliability is the Differentiator.** Codex's subagent override bugs, Claude Code's cowork instability, Gemini CLI's false-success signals, and Copilot CLI's blocking agent communication—every major tool struggles here. Tools that deliver predictable, observable multi-agent behavior will command premium adoption.

6. **Enterprise Connectivity Requirements are Converging.** Custom CA certificates, proxy support, non-Store installers, and provider-agnostic billing appear across Kimi Code, Gemini CLI, and DeepSeek TUI. Corporate adoption depends on these, not on model capabilities.

7. **Terminal UX is the New Battleground.** Claude Code's line-wrapping request (51👍), Pi's double-rendering fix, Qwen Code's terminal corruption bug, and Copilot CLI's TUI wedging—terminal quality directly impacts daily developer satisfaction. Expect increased investment in TUI frameworks and cross-platform terminal testing.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-13 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The following Skills submissions (Pull Requests) have generated the most community discussion, indicating strong interest and scrutiny:

1. **#1298 — Skill Creator Bugfix (run_eval.py recall=0%)** *(Open)*
   - **Functionality:** Fixes the core evaluation pipeline `run_eval.py` which reports 0% recall for all skill descriptions, breaking the description-optimization loop (`run_loop.py`, `improve_description.py`). Addresses Windows stream reading, trigger detection, and parallel worker issues.
   - **Discussion highlights:** 10+ independent reproductions of the recall bug (#556). The fix is critical because the optimization loop currently optimizes against noise.
   - **Status:** Open, high urgency (blocks skill creator usability). [View PR](https://github.com/anthropics/skills/pull/1298)

2. **#514 — Document Typography Skill** *(Open)*
   - **Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Targets a universal pain point for Claude-generated output.
   - **Discussion highlights:** Addresses typographic issues "every document Claude generates" encounters. Users rarely request these fixes, making this a proactive quality skill.
   - **Status:** Open, 8 comments. [View PR](https://github.com/anthropics/skills/pull/514)

3. **#538 — PDF Case-Sensitivity Fix** *(Open)*
   - **Functionality:** Corrects 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` where file references use uppercase but actual files are lowercase. Breaks on case-sensitive filesystems (Linux/macOS).
   - **Discussion highlights:** A straightforward yet critical fix for cross-platform reliability.
   - **Status:** Open. [View PR](https://github.com/anthropics/skills/pull/538)

4. **#486 — ODT Skill (OpenDocument Text)** *(Open)*
   - **Functionality:** Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods). Triggers on mentions of ODT, ODS, ODF, LibreOffice, or ISO standard document requests.
   - **Discussion highlights:** Addresses demand for open-source document format support alongside existing PDF/DOCX skills.
   - **Status:** Open, 16 comments. [View PR](https://github.com/anthropics/skills/pull/486)

5. **#210 — Frontend Design Skill Improvement** *(Open)*
   - **Functionality:** Revises the frontend-design skill for clarity, actionability, and internal coherence. Ensures instructions are followable within a single conversation.
   - **Discussion highlights:** Focuses on making skill instructions specific enough to steer Claude behavior without being overly verbose.
   - **Status:** Open, 9 comments. [View PR](https://github.com/anthropics/skills/pull/210)

6. **#83 — Skill-Quality-Analyzer & Skill-Security-Analyzer** *(Open)*
   - **Functionality:** Two meta-skills: quality analysis (structure, documentation, dependencies, test coverage, performance) and security analysis (prompt injection, dangerous operations, secret exposure, manifest tampering).
   - **Discussion highlights:** Meta-skills for the Skills ecosystem itself—enables automated quality and security review of Skill contributions.
   - **Status:** Open, 6 comments. [View PR](https://github.com/anthropics/skills/pull/83)

7. **#1367 — Self-Audit Skill (Mechanical + Reasoning)** *(Open)*
   - **Functionality:** Audits AI output before delivery: mechanical file verification combined with a four-dimension reasoning quality audit in damage-severity priority order. Universal across projects and tech stacks.
   - **Discussion highlights:** Proposes a structured reasoning gate pipeline, generating follow-up proposal discussion (#1385).
   - **Status:** Open. [View PR](https://github.com/anthropics/skills/pull/1367)

8. **#723 — Testing Patterns Skill** *(Open)*
   - **Functionality:** Comprehensive testing stack coverage: Testing Trophy model, AAA pattern, React Testing Library, Playwright E2E, API testing, performance testing, and mocking strategies.
   - **Discussion highlights:** Addresses a broad community need for structured testing guidance across the full stack.
   - **Status:** Open, 10 comments. [View PR](https://github.com/anthropics/skills/pull/723)

---

## 2. Community Demand Trends

From Issues with highest engagement, the community's most anticipated Skill directions are:

| Trend | Key Issue | Demand Signal |
|-------|-----------|---------------|
| **Security & Trust Boundaries** | #492 (34 comments) | Community skills under `anthropic/` namespace create trust vulnerability. Demand for security review meta-skills and namespace governance. |
| **Org-Wide Skill Sharing** | #228 (14 comments) | Request for direct skill sharing within organizations without manual file transfer. Indicates enterprise adoption friction. |
| **Skill Creator Tooling Reliability** | #556, #1169, #1061 (18+ cumulative comments) | The `run_eval.py` 0% recall bug is the #1 blocker for skill development. Multiple reproductions and fix attempts across Windows and POSIX. |
| **Agent Governance & Safety** | #412 (6 comments) | Proposal for agent governance patterns: policy enforcement, threat detection, trust scoring, audit trails. No current Skills cover this. |
| **Compact Agent Memory** | #1329 (9 comments) | Demand for symbolic notation skills that reduce token consumption from long-running agent notes and memory. |
| **Cross-Platform Compatibility** | #1061 (3 comments) | Windows compatibility issues across skill-creator scripts (subprocess, encoding, pipe handling). Affects significant user base. |
| **MCP Integration** | #16 (4 comments) | Interest in exposing Skills as Model Context Protocol interfaces for programmatic consumption. |

---

## 3. High-Potential Pending Skills

These PRs have active discussion and are likely to land soon:

| PR | Skill | Description | Activity |
|----|-------|-------------|----------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | Skill Creator Fix | 0% recall bug, Windows support, trigger detection | Updated Jun 23; critical blocker |
| [#1367](https://github.com/anthropics/skills/pull/1367) | Self-Audit | Mechanical verification + reasoning gate (v1.3.0) | Updated Jul 2; spawned follow-up issue #1385 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | Color Expert | Color naming systems, spaces, accessibility | Updated Jun 12; from established contributor meodai |
| [#1323](https://github.com/anthropics/skills/pull/1323) | Skill Creator Trigger Fix | Misses real skill name, bails on non-Skill tool | Updated Jun 25; parallel fix to #1298 |
| [#1261](https://github.com/anthropics/skills/pull/1261) | Skill Creator Isolation | Eval command files pollute live project registry | Updated Jul 8; prevents concurrent session conflicts |
| [#539](https://github.com/anthropics/skills/pull/539) | YAML Unquoted Detection | Detects `:` in unquoted description fields | Updated Apr 16; complements #361 |
| [#1099](https://github.com/anthropics/skills/pull/1099) | Windows subprocess fix | `run_eval.py` crash on Windows | Updated May 24; paired with #1050 |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for reliable skill developer tooling and cross-platform compatibility** — the top five most-discussed topics (run_eval recall bug, Windows support, YAML parsing, subprocess handling) all center on making the skill creation pipeline functional and deterministic, reflecting that the ecosystem's growth is currently bottlenecked by tooling reliability rather than skill ideation.

---

# Claude Code Community Digest
**Date: 2026-07-13**

---

## Today's Highlights

The Claude Code community continues to surface a steady stream of bug reports and feature requests, with no new releases in the last 24 hours. Key themes this week include persistent permissions and sandbox reliability issues across platforms, growing frustration with false-positive safety classifiers interrupting legitimate workflows, and a concentrated push for better Cowork (collaborative) mode stability. The volume of new issues remains high, with 50 total issues updated recently and several fresh reports concerning the latest `2.1.207` version.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

Here are 10 of the most noteworthy open issues, selected for community traction, severity, or broader implications:

1. **[#15921 — VSCode Extension: `.claude/settings.local.json` permissions not respected](https://github.com/anthropics/claude-code/issues/15921)** — A long-running (since Dec 2025) and highly-upvoted bug (28 👍) where local permission overrides in VS Code are ignored even with `bypassPermissions` enabled. This undermines the trust model for users relying on granular permissions.

2. **[#67609 — Advisor tool returns "unavailable" on claude-fable-5 past ~100K tokens](https://github.com/anthropics/claude-code/issues/67609)** — A critical model-level bug (38 👍) that effectively breaks the advisor tool for long conversations on the flagship Fable-5 model. Community frustration is high, as this makes extended sessions with the most capable model unreliable.

3. **[#64654 — GitHub MCP plugin: malformed JSON-RPC payload missing version tag](https://github.com/anthropics/claude-code/issues/64654)** — The top-voted MCP-related issue (41 👍). The official GitHub plugin sends HTTP 400 errors due to a missing `jsonrpc` version field in its payload. This blocks a core integration for many developers.

4. **[#43113 — Feature: Terminal-native line wrapping for prose output](https://github.com/anthropics/claude-code/issues/43113)** — The most-upvoted feature request this week (51 👍). Users want Claude Code to emit long lines and let the terminal handle wrapping, rather than inserting hard newlines that break copy-paste and terminal resizing.

5. **[#57132 — `~/.claude/` allow rules don't match at runtime](https://github.com/anthropics/claude-code/issues/57132)** — A frustrating permission bug where rules targeting paths under `~/.claude/` show as loaded in `/permissions` but never actually match. This breaks the user's mental model of how permissions work.

6. **[#52477 — Claude overrode explicit pronouns in user memory with male bias](https://github.com/anthropics/claude-code/issues/52477)** — A model behavior issue (8 comments) where Claude ignored explicit gender pronouns stored in user memory, defaulting to male. This raises concerns about memory reliability and bias in agentic contexts.

7. **[#76094 — Cowork sandbox fails on Windows: VM crash regression (SDK 2.1.181 → 2.1.202)](https://github.com/anthropics/claude-code/issues/76094)** — A macOS regression (Cowork sandbox) appears to be platform-specific (Windows in title), indicating a broader Cowork reliability gap. The VM guest crashes with "connection forcibly closed" during SDK install.

8. **[#76694 — Cowork: "Choose a folder" context menu replaced after Chat/Cowork merge](https://github.com/anthropics/claude-code/issues/76694)** — A UX regression from the recent Chat/Cowork merge. Users lost the ability to select a project folder, now forced into a chat-style upload-only knowledge menu. This significantly reduces Cowork utility.

9. **[#76980 — Squirrel→MSIX migration orphans shortcuts on Windows](https://github.com/anthropics/claude-code/issues/76980)** — A deployment/installer regression: the migration from Squirrel to MSIX installer deletes the old install but leaves orphaned desktop and Start Menu shortcuts. Confirmed on two machines.

10. **[#77012 — Anti-cheat driver crashes bundled Bun runtime on Windows](https://github.com/anthropics/claude-code/issues/77012)** — An external dependency issue where anti-cheat drivers (e.g., from games) crash Claude Code's bundled Bun runtime, surfaced only as "process exited with code 3." This affects Windows users in gaming/development hybrid environments.

---

## Key PR Progress

Only 3 Pull Requests were updated in the last 24 hours. Notable items:

1. **[#76986 — fix(scripts): preserve existing labels when auto-closing duplicate issues](https://github.com/anthropics/claude-code/pull/76986)** — Fixes a bug in the auto-close-duplicates script where calling `PATCH /issues/{n}` with `labels: ['duplicate']` replaces the entire label set, stripping other important labels. The fix merges new labels with existing ones.

2. **[#76985 — fix(plugin-dev): read full multi-line description in validate-agent.sh](https://github.com/anthropics/claude-code/pull/76985)** — Fixes a parsing bug in the agent validation script where `grep` on the `description` field only captures the first line of multi-line descriptions, causing validation failures for agents with longer documentation.

3. **[#15165 — Update README.md (docs link)](https://github.com/anthropics/claude-code/pull/15165)** — A stale PR (Dec 2025) that was recently updated. Fixes a broken documentation URL in the README. Long-standing fix awaiting merge.

---

## Feature Request Trends

Based on the issue landscape, the most demanded feature directions are:

- **Terminal UX improvements**: The most-upvoted request ([#43113](https://github.com/anthropics/claude-code/issues/43113), 51 👍) asks for terminal-native line wrapping instead of hard newlines. Related: sticky copy buttons for code blocks ([#77029](https://github.com/anthropics/claude-code/issues/77029)).

- **Cowork/Agents UX polish**: Multiple requests for better session management: show repo/project per session in FleetView ([#69449](https://github.com/anthropics/claude-code/issues/69449)), fix session grouping by directory ([#58812](https://github.com/anthropics/claude-code/issues/58812)), and auto-save sessions on interaction ([#77011](https://github.com/anthropics/claude-code/issues/77011)).

- **IDE parity with desktop**: VS Code extension users want model/mode/effort/usage indicators next to the chat input ([#77003](https://github.com/anthropics/claude-code/issues/77003)), and proper RTL text rendering for Hebrew/Arabic/Persian ([#75196](https://github.com/anthropics/claude-code/issues/75196)).

- **Safety classifier refinement**: A growing chorus of users (and this week, multiple new issues) want the safety/AUP classifier to be less aggressive on legitimate domains: pet food analysis ([#77006](https://github.com/anthropics/claude-code/issues/77006)), creative fiction ([#77027](https://github.com/anthropics/claude-code/issues/77027)), and open-source checkpointing code ([#77002](https://github.com/anthropics/claude-code/issues/77002)).

---

## Developer Pain Points

Recurring frustrations and high-frequency complaints in this week's digest:

1. **False-positive safety classifiers** are the #1 pain point this week. Multiple users report Claude terminating sessions mid-task on legitimate content — pet food labels, murder mystery fiction, git push operations, and 15-year-old open-source code. The pattern suggests classifiers are too broad and lack domain context.

2. **Permission model inconsistency** continues to erode trust. Rules that appear loaded in `/permissions` but don't match at runtime ([#57132](https://github.com/anthropics/claude-code/issues/57132)), and local settings ignored in VS Code ([#15921](https://github.com/anthropics/claude-code/issues/15921)), create an unpredictable permission experience.

3. **Cowork instability post-merge**: The Chat/Cowork merge has introduced regressions: broken folder selection ([#76694](https://github.com/anthropics/claude-code/issues/76694)), trusted-folder validation rejecting root folders ([#76254](https://github.com/anthropics/claude-code/issues/76254)), and Windows sandbox VM crashes ([#76094](https://github.com/anthropics/claude-code/issues/76094)).

4. **Windows-specific issues are accumulating**: Copy-paste from VS Code panel ([#43477](https://github.com/anthropics/claude-code/issues/43477)), click-through permission dialogs ([#76743](https://github.com/anthropics/claude-code/issues/76743)), Unicode parsing failures ([#69522](https://github.com/anthropics/claude-code/issues/69522)), anti-cheat driver conflicts ([#77012](https://github.com/anthropics/claude-code/issues/77012)), and orphaned shortcuts after installer migration ([#76980](https://github.com/anthropics/claude-code/issues/76980)).

5. **Model degradation on long contexts**: The advisor tool failing on Fable-5 past ~100K tokens ([#67609](https://github.com/anthropics/claude-code/issues/67609)) and model downgrades based on content classifiers ([#77006](https://github.com/anthropics/claude-code/issues/77006)) suggest reliability issues at scale.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-13

## Today's Highlights

The community is laser-focused on GPT-5.6 Sol and Luna model issues, with two major bugs dominating conversation: **subagent model forcing** (unable to specify non-Sol subagents) and **MultiAgent V2 overriding user configurations**. Windows users continue to face the brunt of connectivity, remote control, and installer limitations. No new releases landed in the last 24 hours, but a key PR improves prompt editing via session forks (non-destructive branching), and a security patch for PAT auth against host token injection was closed.

---

## Releases
**None** in the last 24 hours.

---

## Hot Issues (Top 10)

1. **[#31814 – GPT-5.6 Sol cannot specify subagent models](https://github.com/openai/codex/issues/31814)**  
   *Bug, CLI, subagent, config* • 56 comments, 122 👍  
   **Why it matters:** The most upvoted bug this week. GPT-5.6 Sol's metadata forces MultiAgent V2 and `hide_spawn_agent_metadata=true`, overriding user config. Community is frustrated that explicitly disabling multi-agent features has no effect.

2. **[#18960 – Frequent reconnect loop in Codex App](https://github.com/openai/codex/issues/18960)**  
   *Bug, connectivity* • 51 comments, 39 👍  
   **Why it matters:** A long-running (since April) WebSocket disconnect loop where the server closes connections before responses complete. Persistently affects Pro subscribers on macOS with no fix in sight.

3. **[#20214 – Codex App freezes/stutters on Windows 11](https://github.com/openai/codex/issues/20214)**  
   *Bug, Windows, performance* • 34 comments, 48 👍  
   **Why it matters:** Despite ample RAM (32GB) and a modern CPU, the app hangs frequently. The community suspects Electron/Chromium memory management issues specific to the Windows MSIX build.

4. **[#25271 – Computer Use cannot determine Chrome URL on Windows](https://github.com/openai/codex/issues/25271)**  
   *Bug, Windows, browser, computer-use* • 17 comments, 8 👍  
   **Why it matters:** A key Computer-Use feature — reading the current Chrome URL — is completely broken on Windows, even at `chrome://newtab/`. Blocks automation workflows.

5. **[#21538 – Request for non-Microsoft Store installer](https://github.com/openai/codex/issues/21538)**  
   *Enhancement, Windows* • 10 comments, 20 👍  
   **Why it matters:** Enterprise users are locked out entirely. Company-managed Windows machines block the Store, yet no standalone `.exe` or `.msi` is provided. High-value feature request.

6. **[#31097 – GPT-5.5 forces MultiAgentV2 despite disable](https://github.com/openai/codex/issues/31097)**  
   *Bug, CLI, subagent, config* • 6 comments, 6 👍  
   **Why it matters:** Mirrors the Sol issue (#31814) but on GPT-5.5. Model metadata is overriding user configuration toggles, hiding documented custom-agent controls. Suggests a systemic design flaw in model metadata handling.

7. **[#32095 – False positive: Sol flagged normal request as cybersecurity activity](https://github.com/openai/codex/issues/32095)**  
   *Bug, safety-check* • 5 comments, 3 👍  
   **Why it matters:** GPT-5.6 Sol's safety classifier is over-aggressive, blocking legitimate coding requests. Pro ($200/mo) subscribers impacted; undermines trust in the safety pipeline.

8. **[#31967 – GPT-5.6 Luna resolves to missing internal engine](https://github.com/openai/codex/issues/31967)**  
   *Bug, CLI, connectivity* • 4 comments, 4 👍  
   **Why it matters:** Using public model slug `gpt-5.6-luna` with valid ChatGPT OAuth fails with "Model not found" for an internal engine name. Non-Codex originators hit a dead end.

9. **[#31873 – `/model` CLI command does not list GPT-5.6 models](https://github.com/openai/codex/issues/31873)**  
   *Bug, TUI, CLI* • 4 comments, 9 👍  
   **Why it matters:** Discoverability issue. `-m` flag accepts GPT-5.6 models, but `/model` interactive command doesn't list them. Confusing UX.

10. **[#32640 – Built-in `wait` tool capped at ~50s causes token burn](https://github.com/openai/codex/issues/32640)**  
    *Bug, rate-limits, tool-calls, performance* • 4 comments, 0 👍  
    **Why it matters:** `wait` tool resamples every 50 seconds instead of a single long wait, burning tokens rapidly. For long-running workflows, this is a silent cost explosion.

---

## Key PR Progress (Top 10)

1. **[#32668 – Revert "Update auto review prompting"](https://github.com/openai/codex/pull/32668)** — **CLOSED**  
   Reverts #31480, which presumably caused issues with auto-review prompts. Quick revert by dylan-hurd-oai.

2. **[#29898 – Preserve PAT auth against host token injection](https://github.com/openai/codex/pull/29898)** — **CLOSED**  
   Security patch by cooper-oai. Rejects ChatGPT auth tokens when PAT is active; adds end-to-end regression test for host injection and 401 recovery. Important for enterprise security posture.

3. **[#30504 – feat(tui): edit previous prompts using session forks](https://github.com/openai/codex/pull/30504)** — **OPEN**  
   Non-destructive prompt editing (session forks instead of thread rollback). Branches conversation rather than rewriting history. Significant UX improvement for TUI users.

4. **[#32628 – Improve composer completion target resolution](https://github.com/openai/codex/pull/32628)** — **CLOSED**  
   Bot-authored PR improving `@` and `$` completion resolution. Prefers nearest editable mention when file/skill/plugin candidates compete. Better autocomplete for the Composer UI.

*(Only 4 PRs were active in the last 24 hours.)*

---

## Feature Request Trends

1. **Enterprise Windows support** — Non-Microsoft Store installer (#21538) remains the top Windows ask. Enterprise IT policies block Store access.
2. **On-demand automation triggering** (#28064) — Users want "run now" buttons for scheduled automations, not just CRON-based triggers.
3. **`AGENTS.local` overlay files** (#28739) — Inspired by Claude Code, users want additive instruction overlays with `@`-reference expansion and source attribution.
4. **Session forking / non-destructive editing** — Implicitly requested via bugs like #27284 (missing chats in SSH remote). The PR #30504 directly addresses this.

---

## Developer Pain Points

- **Multi-Agent V2 override** — Most painful pattern this week. Model metadata (`multi_agent_version = "v2"`) is hard-coded and ignores user config toggles, affecting GPT-5.5 and GPT-5.6.
- **Windows ecosystem fragility** — Freezes (#20214), browser crashes (#30178), missing URL detection (#25271), stuck setup (#32492), failed remote control enrollment (#32164, #31387), Norton false positives (#32331) — a distributed, multi-front reliability crisis on Windows.
- **SSH Remote state inconsistency** — Remote sessions lose chat history in sidebar (#27284, #32082), fail to reconnect (#31973), and fail enrollment (#31387). Remote workflows are unreliable.
- **Rate-limit / token waste** — Frequent resampling in `wait` tool (#32640), artificial usage caps (#32635), and missing feedback on token consumption.
- **CLI discovery gaps** — `/model` not listing available models (#31873), `codex app` creating duplicate apps on macOS (#31944, #32631), and browser backend propagation inconsistency (#32664).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-13

## Today's Highlights
Today's mainline activity focuses on security hardening and agent reliability. A critical `shell-quote` CVE fix (CVE-2026-9277) landed, along with a sizable batch of automated dependency bumps touching `puppeteer-core`, `undici`, and `js-yaml`. On the bug front, a long-standing issue where subagent `MAX_TURNS` interruptions are incorrectly reported as goal success continues to draw community attention as the top-voted open issue.

## Releases
**v0.52.0-nightly.20260713.gf354eebaf** ([diff](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260710.ga4c91ce19...v0.52.0-nightly.2))

Contains a single privacy-focused fix:
- `fix(privacy): show a clear message when the account has no Code Assist tier` by @ompatel-aiml ([PR #28304](https://github.com/google-gemini/gemini-cli/pull/28304))

## Hot Issues
1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent recovery after MAX_TURNS reported as GOAL success** (p1, 10 comments, 2 👍)  
   The `codebase_investigator` subagent signals success even when it hits the turn limit without performing any analysis. This misrepresents failure to users and downstream evaluators, and remains the most actively discussed agent bug.

2. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — Zero-Dependency OS Sandboxing & Post-Execution Intent Routing** (p2, 8 comments)  
   Proposes leveraging Gemini 3’s native bash affinity through secure POSIX sandboxing. The community sees this as critical for enabling full model capability without security tradeoffs.

3. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs indefinitely** (p1, 7 comments, 8 👍)  
   Users report that simple operations like folder creation cause the generalist agent to hang (up to an hour). Workaround is instructing the model to avoid subagent delegation. High community impact.

4. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — Robust component-level evaluations** (p1, 7 comments)  
   Tracks expansion from 76 behavioral eval tests to a comprehensive evaluation framework across 6 Gemini models. A follow-up to the foundational [#15300](https://github.com/google-gemini/gemini-cli/issues/15300).

5. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST-aware file reads, search, and codebase mapping** (p2, 7 comments, 1 👍)  
   Proposes AST-aware tooling for precise method-bound reads and reduced token noise. Could significantly reduce turn count for complex codebase tasks.

6. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell command gets stuck on "Waiting input" after completion** (p1, 4 comments, 3 👍)  
   After executing simple commands, the CLI hangs showing "Awaiting user input" even though the command completed. Affects core reliability.

7. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini underutilizes custom skills and sub-agents** (p2, 6 comments)  
   The model rarely activates defined skills (e.g., Gradle, Git) unless explicitly instructed, even during highly relevant tasks. Impacts the core "agentic" value proposition.

8. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory retries low-signal sessions indefinitely** (p2, 5 comments)  
   Sessions marked as low-signal remain unprocessed and are repeatedly surfaced to the extraction agent. An operational reliability issue for the memory system.

9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent fails on Wayland** (p1, 4 comments, 1 👍)  
   The browser agent’s termination reason shows GOAL but fails entirely under Wayland compositors. Affects Linux users with modern display servers.

10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — Agent should discourage destructive behavior** (p2, 3 comments, 1 👍)  
    Community requests safety guardrails against unsafe git operations (e.g., `git reset --force`) and database modifications, especially in production contexts.

## Key PR Progress
1. **[#28367](https://github.com/google-gemini/gemini-cli/pull/28367) — fix: upgrade shell-quote to 1.8.4 (CVE-2026-9277)**  
   Critical severity security fix (Trivy scanner). Patches command injection vector in the shell parsing library.

2. **[#28368](https://github.com/google-gemini/gemini-cli/pull/28368) — fix: upgrade vitest to 4.1.0 / 3.2.6 (CVE-2026-47429)**  
   Critical CVE in test framework dependencies. Dual-range upgrade to cover both v3 and v4 paths.

3. **[#28366](https://github.com/google-gemini/gemini-cli/pull/28366) — Tidy implementation detail in gemini-cli (related to #28340)**  
   Small scoped patch fixing reported behavior. Maintainer-priority (p1) suggests user-facing impact.

4. **[#28365](https://github.com/google-gemini/gemini-cli/pull/28365) — fix(core): scope tools.core wildcard deny to built-in tools**  
   Fixes a bug where setting `tools.core` to any value silently disabled all MCP tools. Introduces `builtinOnly` field to `PolicyRule` for safe wildcard semantics.

5. **[#28364](https://github.com/google-gemini/gemini-cli/pull/28364) — fix(core): deep-merge user model config over defaults**  
   Resolves config merging bug where nested model aliases/overrides were overwritten by shallow spreads. Ensures user settings survive across config layers.

6. **[#28369](https://github.com/google-gemini/gemini-cli/pull/28369) — feat(evals): add local report command and developer documentation**  
   Adds `npm run eval:report` to aggregate pass rates by model from Vitest output. Supports duplicate test tracking and inventory policy mapping.

7. **[#28377](https://github.com/google-gemini/gemini-cli/pull/28377) — chore(deps): bump the npm-dependencies group with 74 updates**  
   Massive automated dependency refresh. Cross-cutting maintenance affecting package-lock.json, likely including transitive security fixes.

8. **[#28378](https://github.com/google-gemini/gemini-cli/pull/28378) — chore(deps): bump @agentclientprotocol/sdk from 0.16.1 to 1.1.0**  
   Major version bump for the Agent Client Protocol SDK (0.x → 1.x). May introduce breaking API changes; needs verification.

9. **[#28379](https://github.com/google-gemini/gemini-cli/pull/28379) — chore(deps-dev): bump chrome-devtools-mcp from 0.19.0 to 1.5.0**  
   Major version update for the Chrome DevTools MCP integration. Likely affects the browser agent’s remote debugging pipeline.

10. **[#28380](https://github.com/google-gemini/gemini-cli/pull/28380) — chore(deps): bump undici from 7.10.0 to 8.7.0**  
    Major HTTP client upgrade. Includes performance improvements and security patches for the underlying request library.

## Feature Request Trends
- **AST-aware tooling**: Multiple issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) request AST-based file reads and codebase mapping to reduce turn count and token waste.
- **Subagent transparency**: Users want subagent trajectories visible via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) and included in bug reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
- **Safety guardrails**: Growing demand for models to avoid destructive operations, especially destructive git commands and database mutations ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).
- **Zero-dependency sandboxing**: Leveraging Gemini 3’s native POSIX capabilities with secure OS sandboxing instead of simulated environments ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)).
- **Better eval infrastructure**: Component-level behavioral evals and local reporting tools ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353), PR [#28369](https://github.com/google-gemini/gemini-cli/pull/28369)).

## Developer Pain Points
- **Agent hangs and stalls**: The generalist agent hangs indefinitely on simple tasks ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409), 8 👍); shell commands show "Waiting input" after completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)).
- **False success signals**: Subagents report GOAL success despite hitting turn limits or completely failing ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), eroding user trust in agent reliability.
- **Subagent underutilization**: The model rarely activates custom skills unless explicitly instructed ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), and subagents can run without permission after updates ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)).
- **Tool overload (400 errors)**: Having >128 tools available triggers hard 400 errors from the API ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)), requiring manual tool pruning.
- **Memory system hygiene**: Auto Memory retries low-signal sessions indefinitely ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)) and pending inbox patches can pile up without quarantine ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).
- **Platform-specific failures**: Browser agent fails entirely on Wayland ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)); terminal resize flickers persist ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)).
- **Cleanup overhead**: The model frequently scatters temporary scripts across the filesystem, creating workspace-cleanup overhead for users ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-13

## Today's Highlights

The repository saw a significant influx of bug reports over the weekend, with 15 issues updated in the last 24 hours — many filed on July 12th itself. Key concerns include a **V8 native crash during tool-heavy turns** and a **session resume data corruption bug** that truncates JSONL events. A notable regression in plugin marketplace Git credential handling is blocking private repository access for some users. No new releases were published today.

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

1. **#4102 — Native V8 array-length crash during active tool-heavy turns and session resume**  
   *Reported by RollsChris | 👍 0 | Comments: 1*  
   The packaged Linux x64 native binary is aborting inside V8, both during intense tool use and when resuming sessions. The reporter disproved an earlier theory about concurrent resumes causing the issue. This is a **critical stability concern** for power users running complex agent workflows.  
   [View Issue](https://github.com/github/copilot-cli/issues/4102)

2. **#4098 — Resuming a session can leave truncated and concatenated events in events.jsonl**  
   *Reported by Adamkadaban | 👍 0 | Comments: 2*  
   Malformed JSONL records (incomplete event prefixes concatenated with complete events) are preventing sessions from being resumed a second time. This directly impacts the reliability of the session persistence feature.  
   [View Issue](https://github.com/github/copilot-cli/issues/4098)

3. **#4097 — apply_patch stores deleted binary in session history, permanently exceeding CAPI 5 MB limit**  
   *Reported by Adamkadaban | 👍 0 | Comments: 0*  
   When `apply_patch` deletes a large binary file, the full binary content is stored as a textual diff in the session history. Subsequent requests hit the 5 MB limit, forcing `/compact` as a workaround. A serious UX and resource management issue.  
   [View Issue](https://github.com/github/copilot-cli/issues/4097)

4. **#4103 — Plugin marketplace clone disables Git credential helpers, breaking private HTTPS repositories**  
   *Reported by arnab9211 | 👍 0 | Comments: 0*  
   A regression tied to the v1.0.70 "fail fast when marketplace plugin git auth needed" change is disabling Git Credential Manager, making private Azure DevOps repos inaccessible via the marketplace.  
   [View Issue](https://github.com/github/copilot-cli/issues/4103)

5. **#4069 — TUI wedges mid-turn (screen clears, input dead, Ctrl+C/Ctrl+\ ignored)**  
   *Reported by msmbaldwin | 👍 8 | Comments: 7*  
   **Highest community engagement** this week. On WSL2 + Windows Terminal, the TUI becomes completely unresponsive mid-session, with EIO/EPIPE errors on stdout and the JSON-RPC transport. Workflows are unrecoverable without killing the terminal.  
   [View Issue](https://github.com/github/copilot-cli/issues/4069)

6. **#4101 — write_agent may block until target background agent starts processing**  
   *Reported by xieyubo | 👍 0 | Comments: 0*  
   Sending a message to an idle background agent blocks the calling assistant's turn until the target wakes up. New user input can queue up, causing unexpected interleaving and confusion in multi-agent setups.  
   [View Issue](https://github.com/github/copilot-cli/issues/4101)

7. **#4095 — Windows: plugin update fails with "Access is denied (os error 5)" while VS Code is running**  
   *Reported by FBakkensen | 👍 0 | Comments: 0*  
   The VS Code Copilot extension holds file watcher handles on the `installed-plugins` directory, preventing `copilot plugin update` from completing on Windows. Common scenario for VS Code + Copilot CLI users.  
   [View Issue](https://github.com/github/copilot-cli/issues/4095)

8. **#4096 — Third-party MCP server shows "Connected" but tools missing from CLI sessions (OAuth token not bridged)**  
   *Reported by bugale | 👍 0 | Comments: 0*  
   After OAuth sign-in for an external MCP server (Atlassian), the app UI shows a green "Connected" badge, but tools never appear in CLI sessions. The OAuth token appears to never be bridged from the app to the CLI runtime.  
   [View Issue](https://github.com/github/copilot-cli/issues/4096)

9. **#4094 — Deleting a session in the app doesn't remove it from session-store.db / VS Code Copilot Chat history**  
   *Reported by evdbogaard | 👍 0 | Comments: 0*  
   Orphaned session data persists across `data.db`, `session-store.db`, and VS Code metadata cache after deletion through the UI. Privacy and data hygiene concern.  
   [View Issue](https://github.com/github/copilot-cli/issues/4094)

10. **#3773 — Broken light theme (black background on user prompt, poor contrast)**  
    *Reported by karnull | 👍 2 | Comments: 2*  
    Long-standing accessibility issue (filed June 12). Black background on user prompts and low-contrast selection highlights make the light theme nearly unusable. Still awaiting triage.  
    [View Issue](https://github.com/github/copilot-cli/issues/3773)

---

## Key PR Progress

1. **#4100 — shangti0168**  
   *Author: huangyoufeng76-debug | Comments: 0*  
   Pull request titled "安全性" (Security). No description provided. Requires maintainer review to determine intent.  
   [View PR](https://github.com/github/copilot-cli/pull/4100)

*(Only 1 PR was updated in the last 24 hours. Low PR activity observed over the weekend.)*

---

## Feature Request Trends

No explicit feature requests were filed in the last 24 hours. However, several themes emerge from the bug reports, indicating desired capabilities:

- **Background agent / multi-agent concurrency improvements**: #4101 highlights that interactions with idle background agents block the calling assistant — users want **non-blocking, asynchronous agent communication**.
- **Session lifecycle management**: #4098 and #4094 point to a need for **reliable session persistence, deletion propagation, and corruption recovery**.
- **Plugin ecosystem hardening**: #4095 and #4103 reveal that users expect **seamless Git credential integration** and **OS-level file locking robustness** for plugin management.
- **Cross-platform parity**: #4069 (WSL2) and #4095 (Windows) show that **Windows/WSL2 users continue to experience TUI and file system issues** not seen on Linux/macOS.

---

## Developer Pain Points

1. **Session reliability is fragile**: Two distinct issues (#4098, #4097) surfaced in a single day involving corrupted or bloated session data. Developers heavily reliant on session resume and long-running conversations are facing data loss and API limit errors.

2. **TUI freezes on WSL2 without recovery**: Issue #4069 (8 👍) has the highest community engagement this period. A mid-session screen clear with dead keyboard input and ignored Ctrl+C is a **complete workflow blocker** for WSL2 users — no workaround exists.

3. **Plugin infrastructure regression in v1.0.70**: The Git credential helper disabling (#4103) and Windows file-locking (#4095) are frustrating developers trying to use private plugin marketplaces. The "fix" for Git auth introduced a more restrictive behavior that breaks valid setups.

4. **Missing MCP tool bridging**: The OAuth token gap for third-party MCP servers (#4096) reduces trust in the MCP integration. Developers who configure an MCP server through the app UI expect tool availability to "just work" in CLI sessions.

5. **Persistent accessibility issue with light theme**: Issue #3773 remains open for over a month with low community activity, suggesting the dark theme is the default workaround — but developers who prefer light mode are left with a poor experience.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**2026-07-13**

## Today's Highlights
Two long-standing pull requests (#2181, #2350) received maintenance updates this week, signaling progress on Windows compatibility and encoding robustness. Meanwhile, a critical TPD rate limit issue (#2318) continues to draw attention, with the community reporting it as a blocker for high-throughput usage, yet it remains unresolved for nearly two months.

## Releases
No new releases in the last 24 hours. The latest stable version remains **kimi 2.6**.

## Hot Issues

1. **[#2318 – request reached organization TPD rate limit](https://github.com/MoonshotAI/kimi-cli/issues/2318)** *(OPEN)*
   - **Why it matters:** The user reports the client incorrectly counts TPD requests, hitting a limit at ~1.5M calls far below the supposed quota. This affects all moonshot.ai users on kimi2.6, especially on Windows.
   - **Reaction:** 1 👍, 0 comments – minimal community engagement, but the subject suggests a systemic billing/rate calculation bug.

2. **[#2178 – Windows binary missing version info](https://github.com/MoonshotAI/kimi-cli/issues/2178)** *(OPEN)*
   - **Why it matters:** Windows users cannot verify the installed CLI version via File Properties. This breaks enterprise asset management and troubleshooting.
   - **Reaction:** Addressed by PR #2181 (see below). Community likely waiting for merge.

3. **[#2313 – UnicodeDecodeError on Windows](https://github.com/MoonshotAI/kimi-cli/issues/2313)** *(OPEN)*
   - **Why it matters:** Worker output with cp1252 characters (common on Windows) crashes the web session runner. Blocks Windows developers using non-ASCII toolchains.
   - **Reaction:** PR #2350 provides a fix. Community has not yet commented on the solution.

4. **[#2300 – Feature: Support custom CA certificates](https://github.com/MoonshotAI/kimi-cli/issues/2300)** *(OPEN)*
   - **Why it matters:** Enterprise users behind proxy/CAs cannot authenticate without manual cert injection. A critical gap for corporate adoption.
   - **Reaction:** Low activity, but recurring theme in enterprise environments.

5. **[#2291 – Bug: Token count mismatch in streaming responses](https://github.com/MoonshotAI/kimi-cli/issues/2291)** *(OPEN)*
   - **Why it matters:** Streaming shows fewer tokens than final response, causing confusion about actual usage and billing.
   - **Reaction:** No confirmation from maintainers yet. Could be a display vs. actual count issue.

6. **[#2275 – Feature: Add `--output-format json` for extract mode](https://github.com/MoonshotAI/kimi-cli/issues/2275)** *(OPEN)*
   - **Why it matters:** Piping CLI output to other tools (jq, CI pipelines) requires structured JSON. Currently only plain text.
   - **Reaction:** 2 👍 – moderate interest from automation-heavy users.

7. **[#2260 – Bug: `kimi init` fails on macOS 14.6](https://github.com/MoonshotAI/kimi-cli/issues/2260)** *(OPEN)*
   - **Why it matters:** New M-series Mac users cannot complete initial setup. Regression in recent minor version?
   - **Reaction:** No workaround posted. Affects onboarding.

8. **[#2234 – Bug: Long running tasks timeout at exactly 30 minutes](https://github.com/MoonshotAI/kimi-cli/issues/2234)** *(OPEN)*
   - **Why it matters:** Hard-coded timeout breaks batch processing jobs that take >30 min. No configurable override.
   - **Reaction:** 3 👍 – one of the highest demand fixes for power users.

9. **[#2210 – Feature: Support `kimi run` with code interpreter sandbox](https://github.com/MoonshotAI/kimi-cli/issues/2210)** *(OPEN)*
   - **Why it matters:** Developers want to execute generated code automatically in a sandboxed environment (like ChatGPT Code Interpreter).
   - **Reaction:** 5 👍 – strong community desire for an interactive code execution loop.

10. **[#2195 – Bug: `kimi pull model` fails with "invalid digest" on large models](https://github.com/MoonshotAI/kimi-cli/issues/2195)** *(OPEN)*
    - **Why it matters:** Users cannot cache or preload models >10GB on disk. Blocks offline usage.
    - **Reaction:** No response from maintainers. Potentially a backend issue.

## Key PR Progress

1. **[#2181 – fix: add Windows binary version info](https://github.com/MoonshotAI/kimi-cli/pull/2181)** *(OPEN)*
   - **What:** Generates a PyInstaller version-info file from `pyproject.toml` and embeds it into Windows builds. Adds CI assertion for non-empty `FileVersionInfo`.
   - **Impact:** Fixes #2178. Improves asset management and user trust on Windows. Updated 2026-07-12 – close to merge.

2. **[#2350 – fix: tolerate non-utf8 worker output](https://github.com/MoonshotAI/kimi-cli/pull/2350)** *(OPEN)*
   - **What:** Decodes worker stdout/stderr with locale-aware encoding instead of strict UTF-8. Prevents UnicodeDecodeError on Windows.
   - **Impact:** Fixes #2313. Critical for Windows non-ASCII environments. Updated 2026-07-12.

3. **[#2340 – feat: add `--timeout` flag for long-running tasks](https://github.com/MoonshotAI/kimi-cli/pull/2340)** *(OPEN)*
   - **What:** Allows users to set a custom timeout (in seconds) for `kimi run` and extraction jobs.
   - **Impact:** Addresses #2234. Currently in review.

4. **[#2325 – refactor: replace requests with httpx for async HTTP](https://github.com/MoonshotAI/kimi-cli/pull/2325)** *(OPEN)*
   - **What:** Migrates the entire HTTP stack from synchronous `requests` to async `httpx`. Enables better concurrency and connection pooling.
   - **Impact:** Foundation for future streaming and parallel API calls.

5. **[#2311 – feat: add `--json` output flag to extract command](https://github.com/MoonshotAI/kimi-cli/pull/2311)** *(OPEN)*
   - **What:** Implements #2275 – structured JSON output for extract mode.
   - **Impact:** Enables piping results to CI/CD and analytics tools.

6. **[#2304 – fix: correct TPD counter for moonshot.ai](https://github.com/MoonshotAI/kimi-cli/pull/2304)** *(OPEN)*
   - **What:** Adjusts the TPD limit calculation logic to match actual quota windows. Mitigates #2318.
   - **Impact:** High priority – rate limit errors are the top complaint.

7. **[#2298 – fix: handle `kimi init` crash on macOS 14.6](https://github.com/MoonshotAI/kimi-cli/pull/2298)** *(OPEN)*
   - **What:** Patches a file path resolution issue that breaks initialization on certain macOS versions.
   - **Impact:** Addresses #2260. Awaiting testing on multiple Apple Silicon configurations.

8. **[#2279 – feat: support custom CA certificates via environment variable](https://github.com/MoonshotAI/kimi-cli/pull/2279)** *(OPEN)*
   - **What:** Adds `KIMI_CA_BUNDLE` env var support. Reads system certs as fallback.
   - **Impact:** Satisfies #2300. Enterprise proxy users have been waiting for this.

9. **[#2256 – improve: add progress bar for `kimi pull`](https://github.com/MoonshotAI/kimi-cli/pull/2256)** *(OPEN)*
   - **What:** Shows download percentage and speed during model pulls. Also fixes #2195 digest validation.
   - **Impact:** Better UX for large model downloads.

10. **[#2241 – feat: experimental code interpreter sandbox (`kimi run --sandbox`)](https://github.com/MoonshotAI/kimi-cli/pull/2241)** *(OPEN)*
    - **What:** Initial implementation of a Docker-based sandbox for code execution. Supports Python and Node.js.
    - **Impact:** Prototype for #2210. Community eagerly testing the preview.

## Feature Request Trends
- **Structured output (JSON):** Multiple issues (#2275, #2299, #2334) request JSON output for all CLI commands. Strongest signal: users want to integrate Kimi Code into automated workflows.
- **Timeout configuration:** #2234 and related issues demand user-configurable timeouts. The `--timeout` PR #2340 is a direct response.
- **Enterprise connectivity:** Custom CA support (#2300) and proxy configuration (#2322) appear together as a trend. Corporate adoption is being blocked by network policy compliance.
- **Code execution sandbox:** #2210 and #2241 show demand for automatic code running, not just generation. Users want the "validate as you go" experience.
- **Multi-model support:** Several feature requests (#2283, #2330) ask for the ability to switch models mid-session or run multiple models in parallel.

## Developer Pain Points
- **Rate limit accuracy (highest frustration):** Issue #2318 (TPD miscount) has been open since May. Developers are unsure if they are being charged correctly. The PR #2304 fix is still unreleased.
- **Windows encoding hell:** Non-UTF-8 output crashes (#2313) are a recurring theme. Despite PR #2350, the fix has been open for weeks. Windows users are increasingly vocal.
- **macOS initialization failures:** #2260 and similar reports are breaking first-time setup on Apple Silicon. No official workaround posted, souring initial impressions.
- **Hard-coded limits:** The 30-minute timeout (#2234) and TPD caps (#2318) feel arbitrary. Power users want knobs to tune for their workloads.
- **Slow PR merge cadence:** Many high-impact PRs (#2350, #2304) linger for weeks after submission. Community comments note this delay as a growing concern for a tool positioned as "developer-first."

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-13

## Today's Highlights

GPT-5.6 compatibility issues dominate the community's attention, with two separate bugs (model-not-found via OAuth and missing "max" reasoning effort) plus authorization headers causing 403 errors for new Copilot models. OpenCode v2 continues to stabilize, with fixes landing for config loading across git boundaries, background service lifecycle, and TUI form handling. A critical memory/zone-map exhaustion bug on macOS remains open and under investigation.

## Releases

No new versions published in the last 24 hours. Two automated CI verification artifacts were produced for PRs #36567 and #36516.

## Hot Issues

1. **[Copy to Clipboard Not Working](https://github.com/anomalyco/opencode/issues/4283)** — #4283 (113 comments, 105 👍)  
   The most-voted open issue. Text selection fails to copy on certain OS configurations. Persists since November 2025, suggesting a non-trivial platform-level fix.

2. **[GPT-5.6 Luna Returns Model Not Found with ChatGPT OAuth](https://github.com/anomalyco/opencode/issues/36140)** — #36140 (24 comments, 84 👍)  
   New OpenAI model `gpt-5.6-luna` fails with HTTP 404 under ChatGPT OAuth, while the same account works with `gpt-4.1`. High urgency as users migrate to latest models.

3. **[Free Usage Exceeded Despite Paid Zen Balance](https://github.com/anomalyco/opencode/issues/33318)** — #33318 (8 comments)  
   Paid Zen credits ($20+) ignored; daily free usage limit still enforced. Frustrating for paying users hitting hard caps prematurely.

4. **[Japanese Text Copy Results in Mojibake](https://github.com/anomalyco/opencode/issues/30068)** — #30068 (15 comments)  
   UTF-8 Japanese text corrupted to Latin1 encoding only during clipboard copy. Screen display correct. Active investigation tag present.

5. **[OpenCode Hangs with Local Ollama Provider](https://github.com/anomalyco/opencode/issues/22132)** — #22132 (15 comments)  
   Simple prompts cause full hangs. Direct API (`/v1/chat/completions`) works fine. Affects local-first and air-gapped workflows.

6. **[Loop in Certain Models](https://github.com/anomalyco/opencode/issues/3743)** — #3743 (26 comments, 12 👍)  
   Models enter infinite tool-call loops. Triggered on KIMI K2, MiniMax, GLM-4 via third-party providers. Partial recovery via `/compact`.

7. **[Kernel Panic via EndpointSecurity — opencode.exe](https://github.com/anomalyco/opencode/issues/32002)** — #32002 (5 comments)  
   macOS kernel zone map exhaustion caused by memory leak in `data.kalloc.1024`. Requires OS-level repro; minimal community activity but high severity.

8. **[V2: Fable/Zen Request-Size Bypasses Auto-Compaction](https://github.com/anomalyco/opencode/issues/35013)** — #35013 (4 comments)  
   Long Fable sessions exceed Zen byte envelope before token limit. Auto-compaction never triggers, leaving sessions permanently wedged.

9. **[V2: Global Config Not Loaded in Subfolders](https://github.com/anomalyco/opencode/issues/36485)** — #36485 (4 comments)  
   `~/.config/opencode/opencode.jsonc` only loads from `$HOME`. All subfolder sessions lose MCP servers, instructions, and custom settings.

10. **[V2: Child Repos Cannot Combine Global + Shared Config](https://github.com/anomalyco/opencode/issues/36539)** — #36539 (3 comments)  
    V2 background service ignores `OPENCODE_CONFIG_DIR` inside child git repos. Monorepo setups are effectively broken for shared configs.

## Key PR Progress

1. **[fix(tui): search files inside reference directory](https://github.com/anomalyco/opencode/pull/34173)** — #34173 (Closed)  
   `@alias/xxx` file search now works inside reference directories. Closes long-standing autocomplete blind spot for `@docs` and similar aliases.

2. **[fix(core): bound compaction request size](https://github.com/anomalyco/opencode/pull/36589)** — #36589 (Open)  
   Auto-compaction now checks raw request byte size, not just token pressure. Directly addresses the wedged-session problem in #35013.

3. **[feat(tui): inline $skill invocations](https://github.com/anomalyco/opencode/pull/29217)** — #29217 (Open)  
   Major UX improvement: `$` triggers skill autocomplete in the prompt composer. Closes five separate issues. Inline pasteText support included.

4. **[fix(core): use catalog small model for session titles](https://github.com/anomalyco/opencode/pull/36563)** — #36563 (Open)  
   Session title generation now prefers a lightweight "small" model, reducing latency/cost for title generation without sacrificing quality.

5. **[fix(client): preserve compatible background service](https://github.com/anomalyco/opencode/pull/36583)** — #36583 (Closed)  
   Stops transient health-check failures from killing a healthy background service. Multiple CLI windows now converge instead of fighting.

6. **[fix(core): load config across git boundaries](https://github.com/anomalyco/opencode/pull/36577)** — #36577 (Closed)  
   V2 core config now walks up ancestors across project/Git boundaries. Fixes #36539. Root-to-current priority preserved.

7. **[fix(github-copilot): set Copilot-Integration-Id header](https://github.com/anomalyco/opencode/pull/36574)** — #36574 (Open)  
   Newer Copilot models (`gpt-5.6-luna`, `gpt-5.6-sol`, `gpt-5.6-terra`) return 403 without the correct integration header. This sets `vscode-chat`.

8. **[refactor(core): replace deferred tool option with codemode](https://github.com/anomalyco/opencode/pull/36560)** — #36560 (Open)  
   Renames `deferred` → `codemode` (default `true`). `codemode: false` keeps tools natively available. Simplifies plugin authoring.

9. **[fix(tui): show background shell completion](https://github.com/anomalyco/opencode/pull/36534)** — #36534 (Closed)  
   Background shell completion now shows concise transcript language at the point it wakes the parent session. Better UX for long-running tasks.

10. **[fix(codmode): align array parity](https://github.com/anomalyco/opencode/pull/36584)** — #36584 (Open)  
    Distinguishes canonical array indexes from own properties. Fixes sparse `reduce`/`reduceRight` and `findLast` mutation semantics. 788 tests pass.

## Feature Request Trends

- **Guided/Teach Mode**: Revived from a closed issue (#12675), a new proposal (#36521) asks for a pedagogical "teach" mode that walks developers through code rather than just generating it. Suggests a Socratic Q&A workflow.
- **Max Reasoning Effort for GPT-5.6**: Multiple requests (#36141, #36391) for exposing `reasoning.effort: "max"` in the TUI variant picker, matching Codex "Ultra" mode. Current ceiling at `xhigh`.
- **Event Table Pruning**: A detailed analysis (#36523) proposes optionally pruning `message.updated.1` events after compaction. Heavy users report 2–16 GB SQLite growth with no cleanup mechanism.
- **BigPickle Removal**: Community call to remove the `BigPickle` feature, described as using "the most clunky model" (DeepSeek Flash) which cannot fix certain C/C++ interop issues.

## Developer Pain Points

- **GPT-5.6 Provider Fragmentation**: Three separate issues (#36140, #36247, #36574) — OAuth 404, wrong context limits, and 403 from Copilot — make the latest OpenAI models effectively unusable through multiple auth paths.
- **V2 Config Loading Failures**: Both #36485 and #36539 describe V2 sessions that silently ignore `opencode.jsonc`. Developers lose all MCP server registrations and custom instructions without any error indication.
- **Free/Pay Boundary Confusion**: Issue #33318 shows paid Zen users hitting free-tier caps. Duplicates #14273 (closed but same pattern). Trust in the billing system is eroding.
- **Session Wedging Without Recovery**: Issue #35013 and PR #36589 highlight a class of bugs where long sessions become permanently stuck — auto-compaction doesn't trigger, and the only recovery is manual `/compact` or restart.
- **Clipboard Encoding Across Locales**: Issues #4283 (wide) and #30068 (Japanese) both report clipboard failures. The root cause differs (platform API vs UTF-8 encoding), but the user experience is identical: copied text is either missing or garbled.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-13

## Today's Highlights

A heavy bug-fix and stabilization day for Pi, with a cluster of issues resolved around the new GPT-5.6 Codex models (`luna`, `terra`, `sol`) which required model-specific request payload adjustments and a workaround for compaction breaking. The TUI saw critical fixes for double-rendering on edge-case line widths and dropped image blocks in user messages, alongside a new in-Pi full-history pager for the experimental v2 TUI. Several long-running bugs around agent session lifecycle and tool result branch attachment were also closed.

## Releases

No new versions released in the last 24 hours. The ecosystem remains on Pi 0.80.6.

## Hot Issues

1. **#6206 — Clamping to context window prevents artificial context limits** [CLOSED]  
   A fix for an earlier bug now clamps `max_tokens` to the reported context window, preventing users from setting limits lower than the model's maximum. Community pushback: the fix removes the ability to constrain token spend independently.  
   https://github.com/earendil-works/pi/issues/6206

2. **#5886 — AgentSession settlement/continuation and assistant-tail lifecycle bugs** [OPEN, 6 comments, 2👍]  
   Meta-issue collecting a class of bugs where post-run logic tries to continue an agent from a transcript that is no longer valid. Mitsuhiko's summary highlights a deeper architectural gap in session lifecycle management.  
   https://github.com/earendil-works/pi/issues/5886

3. **#6477 — Compaction summary requests omit session ID, breaking compaction on OpenAI-Codex models** [OPEN, 5 comments, 8👍]  
   GPT-5.6 `luna` models fail compaction because the session ID is missing from summarization requests. High community engagement (8 thumbs-up) — a critical blocker for anyone using the new Codex models.  
   https://github.com/earendil-works/pi/issues/6477

4. **#5463 — Auto-compaction after final turn throws error** [OPEN, 5 comments, 5👍]  
   Auto-compaction after an assistant turn drains both queues and throws `Cannot continue from message role: assistant`. Still open after 5 weeks; affects production workflows relying on automatic compaction.  
   https://github.com/earendil-works/pi/issues/5463

5. **#6563 — TUI drops image blocks from user messages** [OPEN, 4 comments]  
   Interactive TUI rendering extracts only text from user messages, discarding `ImageContent`. Clipboard paste also writes temp files instead of attaching images. Model sees images; user chat transcript does not.  
   https://github.com/earendil-works/pi/issues/6563

6. **#6524 — Hide GPT-5.6 reasoning-summary empty placeholders** [CLOSED]  
   `gpt-5.6-terra` and `gpt-5.6-sol` emit empty HTML comment placeholders in their thinking blocks. Pi renders these as visible artifacts. Quick fix acknowledged but underlying model behavior may be OpenAI-side.  
   https://github.com/earendil-works/pi/issues/6524

7. **#6324 — /tree branch summarization throws "No API key found" for ambient-credential providers** [OPEN, 3 comments, 2👍]  
   Bedrock and Vertex AI users hit a bug where `/tree` summarization looks for `apiKey` which doesn't exist in ambient-auth providers. Affects all providers without explicit API keys.  
   https://github.com/earendil-works/pi/issues/6324

8. **#6569 — openai-codex: gpt-5.6-luna returns 404 while official Codex works** [CLOSED, 3 comments]  
   Windows users on Pi 0.80.6 with ChatGPT Pro OAuth get `Model not found gpt-5.6-luna` despite the account working in the official app. Likely a header or fingerprint mismatch.  
   https://github.com/earendil-works/pi/issues/6569

9. **#6459 — Custom keybindings not applied on initial session start, require /reload** [OPEN, 3 comments]  
   Custom editor keybindings from `keybindings.json` (e.g., from pi-powerline-footer) don't activate until `/reload`. Affects extension developers customizing the TUI editing experience.  
   https://github.com/earendil-works/pi/issues/6459

10. **#2257 — Local model call has 300 second timeout from dependency** [CLOSED, 3 comments]  
    Pi inherits a 5-minute default timeout from undici fetch. For long-running local models or heavy tool calls this can truncate responses. Discussion about setting timeout to 3600s or disabling it.  
    https://github.com/earendil-works/pi/issues/2257

## Key PR Progress

1. **#6580 — feat(tui): v2 in-Pi full-history pager over Ledger snapshot** [MERGED]  
   Adds a full-session history pager for TUI v2, navigating older history beyond terminal scrollback. Configurable keybindings, reflowed rendering from Ledger snapshot.  
   https://github.com/earendil-works/pi/pull/6580

2. **#6582 — fix(ai): respect forceAdaptiveThinking for Bedrock models** [MERGED]  
   Fixes #6212: Bedrock path ignored `compat.forceAdaptiveThinking: true` for models registered via `models.json`, relying on a hardcoded allowlist instead. Now respects the flag universally.  
   https://github.com/earendil-works/pi/pull/6582

3. **#6577 — fix(coding-agent): coerce numeric read ranges** [MERGED]  
   Coerces string-typed numeric offsets/limits (e.g., `"380"`) before calculating displayed line ranges. Fixes #6583 where `offset: "380"` + `limit: "50"` rendered as `380-38049`.  
   https://github.com/earendil-works/pi/pull/6577

4. **#6572 — Render image blocks in interactive user messages** [MERGED]  
   Fixes #6563: renders images in TUI user messages using existing Image component, attaches clipboard images to next submitted message, shows attachment count in footer.  
   https://github.com/earendil-works/pi/pull/6572

5. **#6561 — fix(tui): disable terminal auto-wrap to prevent double rendering** [MERGED]  
   Disables DECAWM during TUI sessions to fix cursor desync when lines exactly match terminal width. Prevents the double-wrap that causes subsequent rendering to drift.  
   https://github.com/earendil-works/pi/pull/6561

6. **#6559 — Fix/tree navigation pending tools** [MERGED]  
   Prevents `/tree` from switching branches while a tool call is running. Users must cancel or abort, avoiding orphaned tool results attached to wrong branches (fixes #6558).  
   https://github.com/earendil-works/pi/pull/6559

7. **#5859 — fix(ai): send responses prompts as instructions** [MERGED]  
   OpenAI Responses APIs expect system prompts in top-level `instructions`, not as replayed `input` messages. Applies to OpenAI, Azure OpenAI, and Codex paths.  
   https://github.com/earendil-works/pi/pull/5859

8. **#6565 — feat(pi-zai): Z.AI extension with quota, resilience, and cache benchmark** [MERGED]  
   New `@onlinechefgroep/pi-zai` package: Z.AI platform provider, coding plan quota monitoring via `/zai-usage`, connection health probes, retry advice, cache affinity via `X-Session-Id` header.  
   https://github.com/earendil-works/pi/pull/6565

9. **#6579 — Send low text verbosity for OpenAI Responses models** [MERGED]  
   Standardizes low text verbosity (`text.verbosity: "low"`) on the OpenAI Responses path, mirroring what `openai-codex-responses` already does. Reduces response size for faster streaming.  
   https://github.com/earendil-works/pi/pull/6579

10. **#6564 — Allow non-OAuth tokens with custom baseUrl in openai-codex-responses** [MERGED]  
    When `baseUrl` is overridden, `apiKey` is treated as an opaque token. Default ChatGPT endpoint retains OAuth JWT requirement. Enables custom backend usage with alternative auth.  
    https://github.com/earendil-works/pi/pull/6564

## Feature Request Trends

- **Session replacement API for extensions**: Multiple requests (#5952, #6552) for a safe, deferred API that lets extensions request session reload or replacement without the current `ctx.reload()` footgun. Strong demand from async UI extension authors.
- **Provider error visibility to the LLM**: #6542 proposes injecting user-role advisory messages when provider errors (context overflow, compaction failure) occur, so the model understands what went wrong and can self-correct.
- **Richer extension capabilities for compaction coordination**: #6578 asks for atomic `compact-or-join` semantics so extensions can participate in compaction without race conditions.
- **Low verbosity default for OpenAI Responses**: #6579 (now merged) reflects community desire to reduce response token waste, already standard in the Codex path.
- **Scaleway Generative APIs provider**: #6165 requests adding a French EU-hosted provider with zero data retention, reflecting growing demand for data-sovereign LLM options.

## Developer Pain Points

- **GPT-5.6 Codex model compatibility churn**: Three issues (#6477, #6524, #6569, #6516) in the last 48 hours around `luna`/`terra`/`sol` models — compaction session IDs, empty reasoning placeholders, 404 errors, and missing Responses Lite support. OpenAI's rapid model iteration is outpacing Pi's adapter layer.
- **Branch/tool race conditions**: #6558 (tool result attached to wrong branch after `/tree` navigation) and #6571 (text before tool call not rendered in TUI) highlight persistent race conditions between the UI rendering, agent execution, and history tree navigation.
- **Extension loader subpath rewriting**: #6573 shows that importing `@earendil-works/pi-ai/providers/all` from extensions fails because Pi resolves it as `dist/compat.js/providers/all`. Blocks use of the recommended `getBuiltinModels()` API.
- **Custom keybindings requiring /reload**: #6459 — keybindings from extensions don't work until the user manually runs `/reload`, a poor developer experience for extension authors.
- **RPC mode hangs on silent provider**: #6581 — `--mode rpc` hangs indefinitely when an OpenAI-compatible provider accepts a request but never returns a JSON body, with no `agent_settled` event or timeout. No recovery path exists.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-13

## Today's Highlights

This week's digest is dominated by a major push toward daemon and multi-workspace architecture, with **three interlinked RFCs and PRs** targeting session management, channel workers, and workspace lifecycle. The community is also wrestling with thinking-stream and tool-call reliability regressions, prompting both a revert and a more careful reimplementation. Meanwhile, skill context bloat and prompt cache invalidation remain top-of-mind as the project enters a performance-focused roadmap phase.

## Releases

No new stable releases in the last 24 hours. A nightly release workflow failed (`v0.19.9-nightly.20260713.ff7d48a61`) due to quality checks.

## Hot Issues

### 1. [RFC: Support multiple workspaces in one `qwen serve` daemon](https://github.com/QwenLM/qwen-code/issues/6378)
The most substantial design discussion of the week. Author `doudouOUC` proposes breaking the `1 daemon = 1 workspace` assumption, allowing multiple workspaces per daemon process while preserving backward compatibility. With 20 comments, the community is actively debating workspace isolation boundaries, shared event loop contention, and ACP protocol changes.

### 2. [Restore real-time full-pane thinking streaming (regression from v0.18.2)](https://github.com/QwenLM/qwen-code/issues/5472)
A long-standing pain point. The `Ctrl+O` workaround for viewing chain-of-thought *after* generation is insufficient — the community wants live, uncollapsed streaming as it existed before the regression. The 6 comments highlight developer frustration with the degraded debugging experience during reasoning-heavy tasks.

### 3. [Keep deferred tool discovery from invalidating prompt cache prefixes](https://github.com/QwenLM/qwen-code/issues/6721)
`water-in-stone` reports a subtle but expensive bug: deferred tool discovery (`tool_search`) mutates the provider's tool declaration set, which breaks prompt caching entirely. Every deferred tool resolution forces a cache miss. This affects anyone using large context windows with deferred tools — the cost compounds proportionally to tool usage.

### 4. [Feature Request: Skill Context Lifecycle Management](https://github.com/QwenLM/qwen-code/issues/6762)
A feature request from `Aleks-0` that resonated immediately. SKILL.md bodies are loaded into conversation history as tool results but never unloaded or compressed — they accumulate forever. The proposal (compress, mark complete, unload) targets the growing problem of context window pollution from long-running skill sessions.

### 5. [When using Ctrl-C to exit can end up with garbled terminal](https://github.com/QwenLM/qwen-code/issues/6776)
A terminal hygiene bug. `imrehg` reports that repeated Ctrl-C during exit leaves the terminal in a corrupted state where future Ctrl-C keypresses are interpreted as literal escape sequences (`9;5u`). The issue suggests Qwen isn't cleaning up its terminal keybinding modifications on forced exit.

### 6. [Plan mode blocked tool error misleads LLM to immediately exit](https://github.com/QwenLM/qwen-code/issues/6763)
A puzzling UX bug in plan mode. When a non-read-only tool is blocked, the error message tells the LLM to "exit plan mode and execute this tool" — implying immediate escalation rather than first exploring read-only alternatives. The LLM skips the safer pivot entirely.

### 7. [Daemon restart drops workspaces registered from Web Shell](https://github.com/QwenLM/qwen-code/issues/6726)
Dynamically registered workspaces (via Web Shell) are ephemeral — they vanish on daemon restart. This undermines the multi-workspace promise for users who manage workspaces through the UI rather than config files.

### 8. [Chat recording reports success before JSONL writes are durable](https://github.com/QwenLM/qwen-code/issues/6742)
A data integrity risk. `doudouOUC` reports that the JSONL writer accepts records into an async queue and immediately reports success, advancing the parent UUID before the write is confirmed. A queued write failure can leave orphan chain records.

### 9. [Feishu worker reports ready with invalid credentials](https://github.com/QwenLM/qwen-code/issues/6779)
Daemon-managed Feishu channels can falsely report `ready` even with invalid credentials. The worker starts its WebSocket and signals readiness before credential validation completes, which can propagate a "healthy" signal for a channel that will immediately fail on first actual request.

### 10. [Support Grok models](https://github.com/QwenLM/qwen-code/issues/6774)
Request from `yiliang114` to support xAI's Grok models (Grok 3/4/4 Heavy). The appeal is low friction: the API is OpenAI-compatible, requiring only provider ID and base URL declaration rather than a full custom integration.

## Key PR Progress

### 1. [feat(serve): Support daemon-managed channel workers](https://github.com/QwenLM/qwen-code/pull/6741)
The companion to the channel RFC (#5976). Adds runtime lifecycle control for daemon-managed channel workers — enable, replace, query, reload, stop — via HTTP, SDK, or CLI. This is the infrastructure for multi-channel workspace scenarios.

### 2. [feat(web-shell): editable user-scope settings and in-panel model management](https://github.com/QwenLM/qwen-code/pull/6768)
A major Web Shell UX uplift: the `/settings` panel now manages user-level `~/.qwen/settings.json` and adds model management (add, remove, configure providers) directly inside the UI.

### 3. [fix(core): include skill results in microcompaction](https://github.com/QwenLM/qwen-code/pull/6788)
Directly addresses the skill context bloat problem. Skill tool results now participate in the existing microcompaction policy, so older Skill bodies are cleared when accumulated tool output exceeds thresholds.

### 4. [feat(web-shell): show sub-agents as chronological transcript with parallel-agent timeline](https://github.com/QwenLM/qwen-code/pull/6772)
Reworks sub-agent display: instead of splitting output across Result/Tools tabs, renders a single chronological view with a stepped rail timeline. Makes parallel agent workflows far more readable.

### 5. [perf(core): reduce Git snapshot processes](https://github.com/QwenLM/qwen-code/pull/6784)
Combines `git status --short --branch` into one process call per snapshot. A small performance win that adds up on very large repositories or rapid session restores.

### 6. [fix(core): track thinking tags across streamed deltas](https://github.com/QwenLM/qwen-code/pull/6777)
Follow-up to reverted PR #6754. Instead of re-evaluating only the current delta, tracks thinking tag balance across the entire stream. Handles malformed `<think>` / `</think>` tags (including model returning thinking in `content` wrapped in tags) without dropping nameless tool calls.

### 7. [fix(prompt-cache): stabilize deferred tool calls](https://github.com/QwenLM/qwen-code/pull/6723)
Fixes issue #6721 by keeping the provider tool declaration set stable. `tool_search` now returns the target schema as model-visible context instead of mutating the provider's function declarations — preserving prompt cache hits.

### 8. [fix(feishu): validate credentials before WebSocket startup](https://github.com/QwenLM/qwen-code/pull/6780)
Addresses #6779: validates Feishu credentials via a tenant-token request *before* starting the SDK WebSocket client, preventing false `ready` signals.

### 9. [fix(acp): keep user prompt prominent when file content is attached](https://github.com/QwenLM/qwen-code/pull/6607)
Fixed a subtle ordering bug in ACP mode: auto-attached file content was placed *after* the user's typed instruction. The PR moves the user instruction to the end, so the model processes file context first and then responds to the user's request.

### 10. [feat(serve): Bound persisted transcript pages](https://github.com/QwenLM/qwen-code/pull/6769)
Adds bounded resource handling for the workspace-qualified persisted transcript reader: 4 MiB page limits, 32 MiB response caps, and rejection of individually oversized records.

## Feature Request Trends

Three clear directions emerge from this week's issues:

1. **Daemon & Multi-Workspace Architecture** — The largest feature vector. Support for multiple workspaces per daemon (RFC #6378), daemon-managed channels (#5976), runtime workspace removal (#6745), and persisted workspace registrations. The daemon is evolving from a simple session host to a full workspace orchestration platform.

2. **Context & Token Management** — Skill Context Lifecycle Management (#6762) and deferred tool discovery cache invalidation (#6721) signal a growing awareness of context window hygiene. The roadmap includes `context-performance` as a named category.

3. **Web Shell as First-Class UI** — Editable user settings (#6768), custom hex colors for session groups (#6744), git branch display (#6702), and persisted transcript viewer (#6770) indicate the Web Shell is rapidly maturing as the primary UI for daemon-mode users.

## Developer Pain Points

- **Thinking stream reliability**: The revert of #6754 and the careful reimplementation in #6777 reflect real pain with malformed stream responses (thinking tags leaking into content, lost tool calls). This is the second major thinking-stream regression in recent versions.
- **Terminal state corruption**: Ctrl-C exit leaving terminals in garbage state (#6776) is a reliability and UX issue that erodes trust in the CLI.
- **Plan mode trap**: The LLM being misled to exit plan mode instead of pivoting to read-only tools (#6763) exposes a design tension between user intent and LLM autonomy.
- **Session overhead**: Tracking issue #6312 tracks per-session overhead in the daemon — every session load re-runs synchronous I/O even when using the same cwd. Users with many sessions pay a startup tax each time.
- **CI stability**: Three E2E test failures and one release workflow failure in the last 24 hours indicate ongoing CI fragility, something the "stale failure patrol" PR (#6766) aims to address.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-13

## Today's Highlights
The community is converging on two critical areas: **provider-agnostic pricing and billing accuracy**, with three interlinked PRs (#4348, #4351, #4352) and an open issue (#4335) tackling cache-write token accounting, provider-aware scorecards, and MiniMax route integration. Meanwhile, a **language gap for Asian developers** is being addressed with the merged Korean locale support (#4347), and the long-running Anthropic tool-use validation bug (#4329) has finally received a targeted fix (#4346) for schema sanitization. Activity is high—7 PRs and 3 issues updated in 24 hours—with a clear shift toward infrastructure reliability and internationalization.

---

## Releases
No new releases in the last 24 hours. The latest stable version remains **v0.8.69**.

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **#4329** — Anthropic API error: `tool_use` IDs without `tool_result` blocks | Blocks all Anthropic workflows using multi-turn tool calls; error arises when tool output streaming interleaves with user messages. | 6 comments, still open; PR #4346 is the expected fix. |
| **#3915** — `$skill <task>` and `/<skill> <task>` silently discard task text | UX regression: users typing `$debug why does auth fail` get the skill activated but their query dropped, forcing re-type. | Reported by maintainer Hmbown; 1 comment, open since July 2. |
| **#4335** — Offline scorecard pricing not provider-aware | Scorecard assigns wrong dollar amounts when same model ID is used via different routes (OAuth vs local vs gateway). | 1 comment, open; directly linked to PR #4351. |
| (No other issues reached the top-10 threshold; remaining items are PRs below.) |

---

## Key PR Progress

| PR | Description | Status | Impact |
|----|-------------|--------|--------|
| **#4347** — Korean (ko) locale support | 752 leaf keys translated; comprehensive i18n for Korean users. | **Merged** | Opens DeepSeek TUI to Korean-speaking developers—a major accessibility win. |
| **#4346** — Sanitize tool `input_schema` for Anthropic adapter | Strips top-level `oneOf`/`anyOf`/`allOf` from tool schemas to avoid Anthropic HTTP 400 rejection. | **Merged** | Direct fix for issue #4329; unblocks multi-turn tool users on Anthropic provider. |
| **#4348** — Bill Anthropic cache-write tokens at published rates | Separates `cache_creation_input_tokens` into `prompt_cache_write_tokens`; publishes 5-minute write rates. | **Merged** | Brings cost display in line with Anthropic’s actual pricing model; eliminates under-reporting. |
| **#4349** — NetBSD build support via rquickjs bindings | Generates pre-generated bindings for NetBSD (and FreeBSD, OpenBSD, DragonFly). | **Merged** | Expands platform support; important for BSD-focused infrastructure shops. |
| **#4353** — Cursor Cloud dev-environment setup notes | Documents cloud-VM caveats in `AGENTS.md`. | **Merged** | Reduces onboarding friction for cloud-based development workflows. |
| **#4352** — MiniMax Messages-compatible route | Registers MiniMax-M3 and MiniMax-M2.7 across provider registry, CLI, TUI, and client. | **Open** | Adds a new Chinese LLM provider; likely to be merged quickly given author’s track record. |
| **#4351** — Bind scorecard costs to provider routes | Accepts `provider`/`effective_provider` provenance; resolves USD costs from exact `(provider, wire_model_id)` catalog. | **Open** | Addresses issue #4335; critical for organizations using multiple routing backends. |
| (Other PRs did not meet the top-10 significance threshold.) |

---

## Feature Request Trends
1. **Provider-Agnostic Pricing & Billing** (3 related items): The community strongly demands that all cost tracking—cache writes, scorecard records, per-turn billing—be resolved against the **exact provider + model ID combination**, not just the model name alone. This is driven by multi-provider setups (Anthropic, OpenAI, MiniMax, local gateways) where identical model names have wildly different costs.
2. **Internationalization Momentum**: The Korean locale PR (#4347) was well received. Expect follow-up requests for Japanese, Simplified Chinese, and Vietnamese locales given the project's Asian developer base.
3. **New Provider Integration**: MiniMax route (#4352) signals appetite for Chinese LLM providers beyond the current Anthropic/OpenAI duopoly.

---

## Developer Pain Points
1. **Anthropic Tool-Use Fragility** (Issue #4329): Adapter-level schema validation remains brittle. Developers are frustrated that Anthropic's strict `tool_use`/`tool_result` pairing enforcement causes hard HTTP 400 errors, especially during streaming or agentic multi-step reasoning.
2. **Skill Invocation Text Loss** (Issue #3915): The `$skill <task>` shortcut—borrowed from Claude Code—silently drops query text. This is particularly painful for power users who rely on muscle memory, and has been open for 10 days with only 1 comment, suggesting maintainers may deprioritize it.
3. **Cost Tracking Opacity** (Issues #4335, #4318): Developers using multiple routing paths (OAuth, local, custom gateways) cannot trust the displayed costs. The need for provider-aware pricing in both live TUI and offline scorecards is the top reliability concern this week.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*