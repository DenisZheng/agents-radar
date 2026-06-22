# AI CLI Tools Community Digest 2026-06-22

> Generated: 2026-06-22 00:43 UTC | Tools covered: 9

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

# AI CLI Tools Cross-Comparison Report — 2026-06-22

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem in June 2026 is characterized by intense competition, rapid iteration, and converging feature sets. Eight major tools — Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi, Qwen Code, and DeepSeek TUI (CodeWhale) — are all actively developed, with most having updated their repositories within the last 24 hours. The market has moved well beyond basic chat-in-terminal: every tool now offers agentic execution, MCP integration, session management, and IDE companion apps. The differentiator is no longer "does it have agents" but rather how reliably those agents execute, how transparent the system is to the user, and how well the tool handles edge cases like context overflow, multi-account workflows, and cross-platform stability. Notably, **no tool is standing still** — even on a single-day snapshot, a combined ~150 issue updates and 30+ PRs were observed across the ecosystem.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Opened/Updated (24h) | New Releases (24h) | Hot Issue Count | Community Signal |
|---|---|---|---|---|---|
| **Claude Code** | 50 | 2 | 0 | 10 tracked | Very high — #18435 at 601 👍 |
| **OpenAI Codex** | ~30+ | ~20 (7 merged) | 3 (alpha) | 10 tracked | Very high — active internal + community |
| **Gemini CLI** | ~25+ | 10 | 0 | 10 tracked | High — multiple P1 bugs |
| **GitHub Copilot CLI** | ~12 | 1 (suspicious) | 0 | 8 tracked | Moderate — fresh issues, low PR |
| **OpenCode** | ~15+ | 10 | 0 | 10 tracked | High — YOLO mode PR active |
| **Pi** | 39 | 6 | 0 | 10 tracked | High — 6 PRs merged in 24h |
| **Qwen Code** | ~15 | 12 | 1 (v0.18.5) | 10 tracked | High — major feature PRs |
| **DeepSeek TUI** | ~15 | 10 | 0 (v0.8.63 current) | 10 tracked | Moderate — maintainer-driven |

**Key takeaway:** OpenAI Codex and Qwen Code are shipping releases fastest. Claude Code has the largest single-issue community engagement. Pi and OpenCode have the highest PR merge velocity relative to their size.

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities simultaneously, indicating convergent market demand:

| Feature Direction | Tools Requesting | Specific Needs |
|---|---|---|
| **Auto-compaction / context management** | Claude Code, OpenAI Codex, Pi, DeepSeek TUI, Copilot CLI | Opt-in compaction, carried-forward summaries, compaction reason metadata, safe checkpoint timing |
| **YOLO / auto-approve permission mode** | OpenCode (#11831), DeepSeek TUI (#3144), Claude Code (sandbox concerns) | First-class auto-approve with explicit deny-rule safety, reduced permission prompt fatigue |
| **Multi-account / profile switching** | Claude Code (#18435, 601👍), OpenAI Codex (ChatGPT↔Copilot handoff #2153), Gemini CLI | Switch between personal/team/enterprise accounts without re-auth |
| **Session checkpointing / resume** | OpenAI Codex (thread resume PRs), Qwen Code (#5030), OpenCode (#33281), Pi (#5952) | Crash recovery without synthetic messages, explicit save/restore semantics |
| **IDE-native diff / approval UI** | OpenAI Codex (#2998, 197👍), Qwen Code (IDEA plugin #4888), Copilot CLI (hooks #3874) | Move approval flows from terminal into VS Code/JetBrains |
| **MCP maturity (resource subscriptions, $ref support, OAuth)** | OpenCode (#29355, #32829), Gemini CLI (#27889), Qwen Code (#5561), Claude Code (#61537) | Full MCP client capabilities, schema compliance, hot-reload |
| **Cost / rate-limit transparency** | OpenAI Codex (#28879), Copilot CLI (#3881, #3778), Pi (#5950) | Per-request cost attribution, OTel export, budget regulators |
| **Local LLM provider support** | Pi (#3357, 36👍), DeepSeek TUI (#3357), OpenCode (custom providers) | Dynamic model discovery, Ollama/llama.cpp/vLLM integration |
| **Windows platform parity** | OpenAI Codex (6+ Windows issues), Claude Code (Windows-specific bugs), DeepSeek TUI (#1812) | Standalone installers, sandbox fixes, path handling, UI rendering |
| **Tool-call loop detection** | Qwen Code (#5019), Gemini CLI (#21409), OpenCode (#32998), Pi (#5921) | Always-on detection, lower thresholds, graceful termination |

---

## 4. Differentiation Analysis

### Feature Focus

| Tool | Primary Focus | Secondary Strengths |
|---|---|---|
| **Claude Code** | Enterprise-grade agent execution, 1M context window | Strongest community, multi-platform desktop app, MCP ecosystem |
| **OpenAI Codex** | Code-mode cell runtime, thread store architecture | Rust performance, tight OpenAI model integration, IDE diff workflow |
| **Gemini CLI** | Google ecosystem integration, browser automation (Chrome DevTools MCP) | Auto Memory system, multi-model support, eval infrastructure |
| **GitHub Copilot CLI** | GitHub-native workflow, VS Code integration | Enterprise governance (hooks, sandboxing), billing transparency |
| **OpenCode** | Permission UX (YOLO mode), plugin/extensibility | v2 session architecture, standalone mode, skills API |
| **Pi** | Provider agnosticism, extension API richness | Local LLM support, compaction control, multi-session TUI |
| **Qwen Code** | CI/CD automation, IDE companions (VS Code + IDEA) | Voice dictation, artifact publishing, background sub-agents |
| **DeepSeek TUI** | Security hardening, agent governance | Chinese locale support, worktree/sandbox, custom provider extensibility |

### Target Users

- **Enterprise teams** → Claude Code (multi-account, governance), Copilot CLI (GitHub-native compliance)
- **Power users / solo developers** → OpenCode (YOLO mode, plugins), Pi (provider agnostic, local LLM)
- **OpenAI ecosystem developers** → Codex (gpt-5.5, Codex ecosystem), Copilot CLI (VS Code users)
- **Chinese market** → Qwen Code (Alibaba ecosystem), DeepSeek TUI (Chinese providers, locale)
- **Google ecosystem** → Gemini CLI (Chrome, Google Cloud integration)

### Technical Approach

- **Rust-based:** OpenAI Codex (performance, safety), DeepSeek TUI (Rust TUI via crossterm)
- **TypeScript/Node:** Gemini CLI, Qwen Code, Copilot CLI
- **Go:** Claude Code (backend), OpenCode
- **Dart:** Pi (cross-platform TUI from single Dart codebase)

---

## 5. Community Momentum & Maturity

### By Engagement Volume

1. **Claude Code** — Largest single-issue engagement (601 👍 on multi-account), 50 issues updated daily, but slow PR throughput (only 2 PRs). Community is vocal but maintainers appear bottlenecked.
2. **OpenAI Codex** — Highest internal engineering velocity (20+ PRs, 3 alpha releases in 24h). Community issues are being addressed rapidly. The code-mode refactor series (#29285–#29310) signals a major architectural investment.
3. **Gemini CLI** — Strong community reporting (multiple P1 bugs), moderate PR activity. The eval infrastructure EPIC (#24353) suggests Google is investing in long-term quality.
4. **OpenCode** — Smaller but highly engaged community. YOLO mode PR (#33279) directly addresses the #1 upvoted issue. Rapid PR-to-issue conversion.
5. **Pi** — Efficient small-team execution: 6 PRs merged in 24h, all addressing real issues. The extension API focus is creating a platform-like ecosystem.
6. **Qwen Code** — Most feature-diverse roadmap (voice, artifacts, background agents, CI/CD). The v0.18.5 release shows steady cadence.
7. **Copilot CLI** — Lowest activity volume. The suspicious PR (#3880) and sparse maintainer response suggest this may be a lower-priority project internally, despite its strategic importance.
8. **DeepSeek TUI** — Maintainer-driven (Hmbown filing many issues internally). Community is engaged but smaller. The rebrand from DeepSeek-TUI to CodeWhale adds uncertainty.

### Maturity Indicators

| Tool | Maturity Signal | Concern |
|---|---|---|
| Claude Code | Massive user base, enterprise adoption | Auth fragility, Windows neglect, slow PR review |
| Codex | Rapid internal iteration, alpha releases | Rate-limit opacity, Windows second-class |
| Gemini CLI | Eval infra investment, security fixes | Agent hangs, subagent reliability |
| Copilot CLI | Governance features, OTel asks | Low activity, suspicious PRs, sparse responses |
| OpenCode | Clean PR-to-issue mapping, YOLO mode | Renderer crashes, regression of known bugs |
| Pi | High merge rate, extension API | TUI usability friction, WSL2 path issues |
| Qwen Code | Feature breadth, CI/CD focus | Path validation fragility, IDE companion lag |
| DeepSeek TUI | Security hardening, governance | TUI freezes, config monolith complexity |

---

## 6. Trend Signals

### What the Community Is Telling the Industry

1. **Permission UX is the new battleground.** The #1 upvoted issue across multiple tools (OpenCode #11831, Claude Code sandbox complaints, DeepSeek TUI governance) is the same: users trust their tools and want fewer interruptions. The winning approach appears to be **granular auto-approve with explicit deny rules** — not binary trust/distrust.

2. **Context management is the reliability frontier.** Every tool is grappling with context window exhaustion, auto-compaction, and session continuity. The community is demanding: (a) compaction that preserves meaning, (b) visibility into when compaction happens, and (c) crash recovery that doesn't require restarting from scratch. Tools that solve this will have a decisive advantage for long-running agentic sessions.

3. **Cost transparency is becoming a first-class feature.** The OpenAI Codex rate-limit surge (#28879, 188 👍), Copilot CLI billing miscalculation (#3881), and Pi's real-cost display fix (#5950) all point to users treating AI CLI tools as infrastructure — they need metering, attribution, and budget controls. OpenTelemetry integration is emerging as the enterprise standard ask.

4. **The MCP ecosystem is maturing but fragmented.** Every tool has active MCP issues, but the specifics vary: OAuth refresh (Gemini, OpenCode), schema compliance (OpenCode #32829), resource subscriptions (OpenCode #29355), hot-reload (Qwen Code #5561), and mid-session header updates (Claude Code #61537). The MCP protocol is becoming the USB-C of AI tooling, but implementation quality varies dramatically.

5. **Local LLM support is a growing wedge.** Pi (#3357, 36 👍), DeepSeek TUI (#3357), and OpenCode all have active requests for local model integration. Developers want the ability to switch between cloud and local providers seamlessly — driven by cost, privacy, and latency concerns.

6. **Windows is consistently underserved.** OpenAI Codex (6+ Windows issues), Claude Code (Windows-specific bugs), and DeepSeek TUI (#1812) all show that Windows is a second-class platform across the ecosystem. Tools that invest in Windows parity (standalone installers, sandbox fixes, path handling) can capture an underserved segment.

7. **IDE companions are becoming table stakes, but quality lags.** Every major tool has a VS Code or JetBrains extension, but Qwen Code's broken `ask_user_question` (#4888) and Codex's IDE diff request (#2998) show that most IDE integrations are still thin wrappers. The next competitive frontier is **native IDE agent experiences** — not just terminal-in-a-panel.

8. **Agent governance is converging on Cursor's model.** DeepSeek TUI's natural-language review policy (#3144), OpenCode's YOLO mode (#11831), and Claude Code's sandbox overreach complaints all point toward the same conclusion: the community wants Cursor-style configurable safety layers — not all-or-nothing trust modes.

---

*Report generated by OWL — AI-native developer tool analyst. Data sourced from GitHub repositories across 8 AI CLI tools, snapshot date 2026-06-22.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

**Data Source:** [anthropics/skills](https://github.com/anthropics/skills) | **Report Date:** 2026-06-22

---

## 1. Top Skills Ranking

The following PRs represent the most-discussed and most-anticipated Skills in the community, ordered by community engagement (comments, reactions, and update activity).

### 1.1 Document Typography Skill — PR #514
- **Author:** PGTBoos | **Status:** OPEN | **Created:** 2026-03-04
- **Functionality:** Prevents common typographic problems in AI-generated documents — orphan word wrap (1–6 words spilling onto the next line), widow paragraphs (section headers stranded at page bottom), and numbering misalignment.
- **Why it matters:** These issues affect virtually every document Claude generates, yet users rarely explicitly request typographic quality. This skill fills a universal gap.
- **Link:** [PR #514](https://github.com/anthropics/skills/pull/514)

### 1.2 ODT (OpenDocument) Skill — PR #486
- **Author:** GitHubNewbie0 | **Status:** OPEN | **Created:** 2026-03-01
- **Functionality:** Full OpenDocument Format support — create, fill, read, and convert `.odt`/`.ods` files, including template filling and ODT-to-HTML parsing. Triggers on mentions of ODT, ODS, ODF, OpenDocument, or LibreOffice documents.
- **Why it matters:** Addresses demand for open-standard, ISO-compliant document workflows as an alternative to Microsoft Office formats.
- **Link:** [PR #486](https://github.com/anthropics/skills/pull/486)

### 1.3 Frontend Design Skill (Improvement) — PR #210
- **Author:** justinwetch | **Status:** OPEN | **Created:** 2026-01-05
- **Functionality:** Revises the existing `frontend-design` skill for clarity, actionability, and internal coherence. Ensures every instruction is something Claude can actually follow within a single conversation.
- **Why it matters:** One of the earliest skills in the repo, this revision reflects the community's push for higher-quality, more actionable skill definitions.
- **Link:** [PR #210](https://github.com/anthropics/skills/pull/210)

### 1.4 Skill Quality & Security Analyzers — PR #83
- **Author:** eovidiu | **Status:** OPEN | **Created:** 2025-11-06
- **Functionality:** Two meta-skills: `skill-quality-analyzer` evaluates skills across five dimensions (structure, documentation, triggers, instructions, resources); `skill-security-analyzer` audits skills for security risks.
- **Why it matters:** As the skills ecosystem grows, quality assurance and security vetting become critical. These meta-skills address a foundational infrastructure need.
- **Link:** [PR #83](https://github.com/anthropics/skills/pull/83)

### 1.5 Testing Patterns Skill — PR #723
- **Author:** 4444J99 | **Status:** OPEN | **Created:** 2026-03-22
- **Functionality:** Comprehensive testing skill covering the full stack — Testing Trophy model, unit testing (AAA pattern, naming, edge cases), React component testing with Testing Library, and integration testing.
- **Why it matters:** Testing is one of the most common developer workflows. A dedicated skill ensures Claude produces well-tested code by default.
- **Link:** [PR #723](https://github.com/anthropics/skills/pull/723)

### 1.6 ServiceNow Platform Skill — PR #568
- **Author:** Vanka07 | **Status:** OPEN | **Created:** 2026-03-08
- **Functionality:** Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM Pro, FSM, HRSD, CSM, SPM/PPM, Vulnerability Response, Security Incident Response, and IntegrationHub.
- **Why it matters:** Enterprise workflow skills are in high demand. This is one of the most comprehensive enterprise platform skills proposed.
- **Link:** [PR #568](https://github.com/anthropics/skills/pull/568)

### 1.7 AURELION Skill Suite — PR #444
- **Author:** Chase-Key | **Status:** OPEN | **Created:** 2026-02-21
- **Functionality:** Four skills from the AURELION ecosystem — a structured cognitive and memory framework: `aurelion-kernel` (5-floor cognitive framework), `aurelion-advisor`, `aurelion-agent`, and `aurelion-memory`.
- **Why it matters:** Represents the emerging category of "meta-cognitive" skills that enhance Claude's reasoning and memory architecture.
- **Link:** [PR #444](https://github.com/anthropics/skills/pull/444)

### 1.8 Shodh Memory Skill — PR #154
- **Author:** varun29ankuS | **Status:** OPEN | **Created:** 2025-12-19
- **Functionality:** Persistent memory system for AI agents that maintains context across conversations. Teaches Claude when to call `proactive_context` and how to structure memories.
- **Why it matters:** Cross-session memory is one of the most requested capabilities in the Claude Code ecosystem.
- **Link:** [PR #154](https://github.com/anthropics/skills/pull/154)

---

## 2. Community Demand Trends

Analysis of the top Issues reveals clear demand signals for new Skill directions:

### 2.1 Skill Sharing & Distribution Infrastructure
- **Issue #228** (14 comments, 👍7): The most-commented issue. Users want org-wide skill sharing in Claude.ai — a shared skill library or direct sharing link instead of manual `.skill` file exchange via Slack/Teams.
- **Issue #189** (6 comments, 👍9): Duplicate skills across `document-skills` and `example-skills` plugins waste context window. Community wants clean separation and deduplication.
- **Signal:** The community has moved past creating individual skills and now needs **distribution, sharing, and lifecycle management** infrastructure.

### 2.2 Skill Creator Tooling Reliability
- **Issue #556** (12 comments, 👍7): `run_eval.py` reports 0% trigger rate for all skills — the description-optimization loop is broken.
- **Issue #1169** (3 comments, 👍1): `recall=0%` on every iteration, including literal slash-command queries.
- **Issue #1061** (3 comments): Windows compatibility failures in skill-creator scripts (subprocess PATHEXT, cp1252 encoding, select on pipes).
- **Signal:** The **skill-creator toolchain is a critical bottleneck**. Multiple contributors are filing PRs to fix it (see Section 3), but the core evaluation loop remains unreliable.

### 2.3 Security & Trust
- **Issue #492** (9 comments, 👍2): Community skills distributed under the `anthropic/` namespace impersonate official skills, creating a trust boundary vulnerability.
- **Issue #1175** (4 comments): Concerns about writing access control logic directly in SKILL.md files for SharePoint Online documents.
- **Signal:** As skills gain enterprise adoption, **skill provenance, signing, and trust verification** are emerging as critical needs.

### 2.4 Platform & Protocol Integration
- **Issue #16** (4 comments): Request to expose Skills as MCP (Model Context Protocol) tools, turning skill capabilities into callable APIs.
- **Issue #29** (4 comments): Skills compatibility with AWS Bedrock.
- **Signal:** The community wants skills to be **interoperable across platforms and protocols**, not locked to Claude Code.

### 2.5 Agent Governance & Safety
- **Issue #412** (6 comments): Proposal for an `agent-governance` skill covering policy enforcement, threat detection, trust scoring, and audit trails.
- **Signal:** As Claude is deployed in multi-agent systems, **governance and safety patterns** are a new skill category the community wants to see.

---

## 3. High-Potential Pending Skills

These PRs have active discussion, address critical gaps, and are strong candidates for merging:

| PR | Skill | Why It's High-Potential |
|---|---|---|
| **#1298** | skill-creator: fix `run_eval.py` recall=0% | Fixes the core evaluation loop that 10+ users have independently reproduced as broken. Blocks all description optimization. |
| **#1099** | skill-creator: fix Windows subprocess pipe crash | Unblocks Windows users from running the skill-creator toolchain entirely. |
| **#1050** | skill-creator: fix Windows subprocess + encoding | Complementary Windows fix (1-line changes). Together with #1099, resolves the Windows compatibility gap. |
| **#539** | skill-creator: warn on unquoted YAML special characters | Prevents silent YAML parsing failures that corrupt skill descriptions. A quality-of-life fix with broad impact. |
| **#361** | Detect unquoted YAML special characters | Similar to #539 — addresses the same class of YAML parsing bugs. |
| **#362** | Fix skill-creator UTF-8 panic on multi-byte characters | Prevents Rust panics in the CLI when processing non-ASCII characters. Critical for international users. |
| **#538** | Fix case-sensitive file references in PDF skill | Fixes 8 broken references (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`) that break on case-sensitive filesystems (Linux). |
| **#541** | Fix DOCX tracked change ID collision | Prevents document corruption when adding tracked changes to documents with existing bookmarks. |
| **#509** | Add CONTRIBUTING.md | Addresses the repo's 25% community health score. Low effort, high impact for onboarding new contributors. |

**Key observation:** The majority of high-potential pending PRs are **skill-creator infrastructure fixes**, not new end-user skills. The community's immediate priority is stabilizing the toolchain that creates and evaluates skills.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is not for new end-user skills, but for a reliable, cross-platform skill-creator toolchain and a secure skill distribution/sharing infrastructure — the ecosystem has reached an inflection point where tooling and governance must catch up with skill creation.**

---

*Report generated by OWL | Data: anthropics/skills (GitHub) | 2026-06-22*

---

# Claude Code Community Digest — 2026-06-22

---

## 1. Today's Highlights

No new releases landed in the past 24 hours. The community remains highly active on the issue tracker, with **50 issues updated** — dominated by authentication/credential bugs across platforms, a widely-requested multi-account management feature (601 👍), and a fresh wave of API availability complaints. Two small maintenance PRs are open, both focused on developer-experience polish.

---

## 2. Releases

**None.** No new versions published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| 1 | **[#18435] Multi-account profile switching in Claude Desktop** | Users juggling personal, team, and enterprise accounts have no way to switch contexts without re-authenticating. This is the single most-upvoted open issue. | 601 👍, 118 comments — the community has been vocal since January. No official response yet. |
| 2 | **[#36179] `Unsupported content type: redacted_thinking` on Windows + VSCode** | A recurring API-level error that crashes or interrupts sessions for Windows VSCode extension users. | 18 👍, 29 comments. Multiple users confirming; appears tied to thinking-mode responses on the Windows code path. |
| 3 | **[#69942] Anthropic API Service Unavailable (macOS, VSCode)** | Reports of the API being completely down for some users on v2.1.185. | 10 👍, 5 comments — filed today. Could be transient infrastructure, but no status-page acknowledgment yet. |
| 4 | **[#69772] Model silently switches from 1M to non-1M Opus mid-session** | Context window shrinks without warning, producing unrecoverable API errors. Users must kill and restart sessions; `--resume` doesn't help. | 2 👍, 5 comments. Particularly painful for long-running sessions that depend on the 1M window. |
| 5 | **[#37994] Claude Desktop update breaks LAN SSH/network access (macOS)** | A March 2026 update introduced `OPERON_SANDBOXED_NETWORK=1`, blocking all local network access (SSH, SCP, curl to LAN hosts) from within Claude Desktop. | 4 👍, 11 comments. Users relying on local dev servers or network tooling are blocked. |
| 6 | **[#52765] "Server is busy" error in Claude Cowork Desktop (Windows)** | Cowork sessions fail to start with a generic busy error, with no retry guidance. | 2 👍, 14 comments. Frustrating because the error gives no actionable next step. |
| 7 | **[#54461] Cannot change primary working directory or open new chat (Windows Desktop)** | Core desktop functionality is broken — users are locked into a single project directory. | 4 👍, 8 comments. A fundamental UX regression for the Windows desktop app. |
| 8 | **[#61912] OAuth refresh corrupts credentials during transient 5xx → persistent 401 loop (Linux)** | A race condition in the OAuth refresh path can permanently corrupt credentials when a Cloudflare 5xx occurs, requiring manual credential reset. | 0 👍, 5 comments. Silent and hard to debug; affects headless/Linux users most. |
| 9 | **[#69793] `xargs rm -rf` without null delimiter causes data loss on paths with spaces** | A model behavior issue where Claude generates a destructive shell command that mishandles paths with spaces, leading to data loss. | 0 👍, 2 comments. Highlights the risk of unconstrained bash tool execution. |
| 10 | **[#69939] Opening a chat re-appends duplicate mode/custom-title records to JSONL** | Every time a session is opened, duplicate bookkeeping records are appended to the transcript, bumping mtime and reordering Recent chats. | 0 👍, 2 comments. Corrupts transcript integrity and pollutes the recent-chats list. |

---

## 4. Key PR Progress

Only **2 PRs** were updated in the last 24 hours:

| PR | Description | Status |
|----|-------------|--------|
| **[#69916]** `fix: print error message before silent exit in edit-issue-labels.sh` | Fixes a silent `exit 1` in the issue-triage script when called without `--add-label` or `--remove-label` arguments. Improves debuggability of the `Claude Issue Triage` workflow. | **Open** — small, targeted fix. |
| **[#4943]** `feat: add shell completions (bash, zsh, fish)` | Adds static tab-completion scripts for bash, zsh, and fish under `shell-completions/`. Would eliminate the need for users to manually configure completions. | **Open** — stale since August 2025, updated yesterday. No maintainer response. |

> **Note:** The PR pipeline is unusually quiet. The two open PRs are both community-contributed quality-of-life improvements that have not received maintainer review.

---

## 5. Feature Request Trends

Synthesizing all open enhancement issues and highly-commented threads, the most-requested directions are:

1. **Multi-account / profile management** ([#18435] — 601 👍): The dominant request. Users want to switch between personal, team, and enterprise accounts within Claude Desktop without logging out.

2. **Session-as-process primitive** ([#68996]): Programmatic spawning, communication, and termination of isolated Claude Code sessions from within a running session — essentially subprocess management for AI agents.

3. **Customizable thinking-phase UI** ([#57895]): Option to disable or customize the status labels shown during the thinking/reasoning phase in the TUI.

4. **Native RISC-V (riscv64) Linux binary** ([#59813]): Expand platform support to Linux RISC-V boards (e.g., Orange Pi 5).

5. **MCP server header updates mid-session** ([#61537]): For SDK-hosted multi-user sessions, the ability to update MCP server `Authorization` headers per-turn rather than only at session creation.

6. **Agent View unread/read tracking** ([#61533]): Track viewed vs. unviewed state for completed sessions in the Agent View panel.

---

## 6. Developer Pain Points

The most recurring frustrations across the issue tracker right now:

- **Authentication fragility** — OAuth refresh bugs ([#61912]), Cowork auth hangs ([#44654]), and "Server is busy" errors ([#52765]) suggest the auth/credential layer is the single biggest source of user-facing failures across all platforms.

- **Silent session-killing behavior** — Auto Dream permanently disabled after a single crash ([#50694]), autoCompact not firing on scheduled-task wake ([#50920]), and model context-window switching mid-session ([#69772]) all share a pattern: features fail silently with no user-visible error or recovery path.

- **Windows platform neglect** — A disproportionate number of bugs are Windows-specific (unsupported content type errors, broken working directory, Cowork VM service failures, markdown link handling), suggesting the Windows code path receives less testing coverage.

- **API stability** — Multiple reports of 502s, "Service Unavailable" errors, and thinking-content-type failures ([#69942], [#69785], [#36179]) point to upstream API instability that cascades into client-side errors with poor error messages.

- **Transcript/session integrity** — Duplicate JSONL records on chat open ([#69939]) and memory items being disregarded ([#61549]) erode trust in session persistence and memory features.

- **Sandbox overreach** — The `OPERON_SANDBOXED_NETWORK=1` change ([#37994]) broke legitimate LAN access for all macOS Desktop users, indicating that sandboxing changes are being rolled out without sufficient community communication or opt-out mechanisms.

---

*Data source: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) · Digest generated 2026-06-22*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-22

---

## 1. Today's Highlights

The Codex repo saw a burst of internal engineering activity today, with a wave of **code-mode session runtime refactors** (PRs #29285–#29310) and **thread store / resume performance optimizations** (#29352, #29355, #29357, #29367) landing from multiple OpenAI engineers. On the community side, the **rate-limit cost surge on gpt-5.5** (Issue #28879) dominates discussion with 96 comments and 188 upvotes, while Windows users continue to report sandbox, installer, and I/O pain points across a dozen active issues.

---

## 2. Releases

Three new Rust alpha releases shipped in the last 24 hours:

| Version | Tag |
|---|---|
| **v0.142.0-alpha.10** | [rust-v0.142.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.10) |
| **v0.142.0-alpha.9** | [rust-v0.142.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.9) |
| **v0.142.0-alpha.8** | [rust-v0.142.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.8) |

No detailed release notes are available yet for these alpha cuts. Given the volume of merged PRs around code-mode cell lifecycle, thread resume, and sandbox MCP integration, these alphas likely carry those internal fixes. Developers on the bleeding edge should monitor the [releases page](https://github.com/openai/codex/releases) for changelog updates.

---

## 3. Hot Issues

### 🔴 #28879 — Rate-limit cost per token jumped ~10–20× since June 16 (gpt-5.5, Plus)
**96 comments · 188 👍**
The single hottest issue in the repo right now. Users on ChatGPT Plus report that `gpt-5.5` Codex sessions now drain the 5-hour budget in 2–3 prompts instead of the expected 20+. Session logs confirm the limit-% consumed per token increased roughly 10–20× with no plan or model change on the user's end. This is effectively a severe regression in usable capacity and is generating widespread frustration.
🔗 [openai/codex#28879](https://github.com/openai/codex/issues/28879)

---

### 🟠 #13993 — Support standalone Windows installer (`codex-setup.exe`)
**74 comments · 153 👍**
A long-standing feature request (opened March 2026) asking for a traditional `.exe` installer as an alternative to the Microsoft Store distribution. Corporate environments, offline machines, and users who simply prefer classic installers are all blocked. The breadth of upvote support (153) signals this is a high-priority platform gap.
🔗 [openai/codex#13993](https://github.com/openai/codex/issues/13993)

---

### 🟠 #2998 — IDE-integrated diff / approval
**62 comments · 197 👍**
The most upvoted feature request in this digest. Users want Codex's existing terminal-based red/green diff approval flow to also appear directly inside their IDE (VS Code, JetBrains, etc.) rather than only in the terminal. With 197 👍, this is a clear signal that developers want tighter IDE integration for code review workflows.
🔗 [openai/codex#2998](https://github.com/openai/codex/issues/2998)

---

### 🟡 #28224 — SQLite feedback logs can write ~640 TB/year, consuming SSD endurance
**10 comments · 29 👍**
A serious performance/reliability issue: Codex continuously writes large volumes of data to `~/.codex/logs_2.sqlite` (and WAL/SHM files). One user measured a projected ~640 TB/year write rate, which would rapidly destroy consumer SSD endurance. This is a silent disk-wear bomb that needs urgent attention.
🔗 [openai/codex#28224](https://github.com/openai/codex/issues/28224)

---

### 🟡 #21128 — Codex Desktop silently hides project conversations outside recent-50 window
**29 comments · 17 👍**
Older project conversations effectively disappear from the Desktop UI once they fall outside the global recent-50 list. This isn't cosmetic — it makes the Desktop app unreliable as working memory for real projects. Users with many active projects are disproportionately affected.
🔗 [openai/codex#21128](https://github.com/openai/codex/issues/21128)

---

### 🟡 #2153 — ChatGPT ↔ Codex session handoff
**37 comments · 149 👍**
Users want to start a research/brainstorming session in ChatGPT (with web search, nice UI) and then seamlessly continue it in Codex CLI for implementation — and vice versa. This bidirectional workflow is highly requested (149 👍) and reflects how developers actually work: exploratory in chat, exec-heavy in CLI.
🔗 [openai/codex#2153](https://github.com/openai/codex/issues/2153)

---

### 🟡 #29178 — Windows Desktop regression: apply_patch / fs-helper fails with global proxy env
**10 comments · 4 👍**
A regression in version `26.616.4196.0` where `apply_patch` and `fs-helper` tool calls fail when a system-wide proxy environment variable is set. Rolling back to `26.611.8604.0` resolves it. Affects users behind corporate proxies.
🔗 [openai/codex#29178](https://github.com/openai/codex/issues/29178)

---

### 🟡 #29047 — SIGTRAP crash on macOS Intel when invoking tools (regression in 0.141.0)
**6 comments · 2 👍**
Codex `0.141.0` crashes with `SIGTRAP` inside V8's `Isolate::New` on Intel Macs running macOS 26.5.1 the moment any tool or skill is invoked. Downgrading to `0.140.0` fixes it. This is a platform-specific regression in the embedded JS engine.
🔗 [openai/codex#29047](https://github.com/openai/codex/issues/29047)

---

### 🟡 #26158 — Windows sandbox regression in CLI 0.138.0 (CLOSED)
**12 comments · 5 👍**
Windows sandbox execution broke in `0.138.0` (setup refresh fails with OS error 740 / `CreateProcessAsUserW` failed). Users rolled back to `0.132.0`. Now closed — presumably fixed in a subsequent release, but worth noting for anyone pinned to affected versions.
🔗 [openai/codex#26158](https://github.com/openai/codex/issues/26158)

---

### 🟡 #29361 — Codex Desktop crashes on resume: sends unsupported `thread_tools` feature to bundled CLI
**6 comments · 0 👍**
Fresh report (created today): Desktop becomes unusable on macOS because opening/resuming a thread crashes the app-server with `SIGKILL`. Root cause: Desktop sends a `thread_tools` feature override that the bundled CLI doesn't recognize. This is a newly filed issue to watch.
🔗 [openai/codex#29361](https://github.com/openai/codex/issues/29361)

---

## 4. Key PR Progress

### 🔧 Code-Mode Session Runtime Refactor (PRs #29285–#29310)
A major batch of 7 PRs from **cconger** (plus 2 closed/merged) that restructure the code-mode cell lifecycle:

- **#29285** — Move session ownership into `SessionRuntime`, isolating cell ownership and stored values from `CodeModeService` into a transport-neutral runtime.
- **#29286** — Linearize cell terminal state with a single state machine for completion/termination, making stored-value commits atomic.
- **#29287** — Make session shutdown authoritative via hierarchical cancellation tokens, fixing race conditions between concurrent admission and callbacks.
- **#29288** — Preserve dropped observation output so canceling a wait doesn't silently consume output.
- **#29289** — Preserve the initial `yield_control()` boundary when a cell completes before observation.
- **#29290** — Decouple cell creation from observation in code-mode.
- **#29291** — Expose create and observe operations separately in the session protocol.
- **#29292** — Expose a transport-neutral session runtime for upcoming transport stages.
- **#29310** — Clean up terminal cell dispatch gates for prompt (not deferred) cleanup.

🔗 [PR #29285](https://github.com/openai/codex/pull/29285) · [PR #29286](https://github.com/openai/codex/pull/29286) · [PR #29287](https://github.com/openai/codex/pull/29287) · [PR #29290](https://github.com/openai/codex/pull/29290) · [PR #29310](https://github.com/openai/codex/pull/29310)

---

### ⚡ Thread Store & Resume Performance (PRs #29352, #29355, #29357, #29367)
Four stacked PRs from **anaiskillian** targeting thread list and resume latency:

- **#29352** — Separate thread names from history-derived titles in SQLite; add lightweight list projection with canonical parent metadata.
- **#29355** — Route `thread/list` through a lightweight SQLite projection, batching filesystem scan repair work.
- **#29357** — Speed up `thread/resume` by parsing rollout files on a blocking worker, reusing loaded history, avoiding duplicate clones/reads.
- **#29367** — Add checkpoint-bounded rollout reconstruction and reverse recent-turn reads for `thread/resume` and `thread/turns/list`, avoiding full long-thread materialization.

🔗 [PR #29352](https://github.com/openai/codex/pull/29352) · [PR #29355](https://github.com/openai/codex/pull/29355) · [PR #29357](https://github.com/openai/codex/pull/29357) · [PR #29367](https://github.com/openai/codex/pull/29367)

---

### 🔒 Sandbox & Safety

- **#29371** — Propagate safety buffering events to app-server clients so the in-progress safety review state can be rendered in the UI.
- **#29358** — Let `codex sandbox` consume MCP sandbox state (`codex/sandbox-state-meta` JSON), enabling MCP servers like `node_repl` to forward sandbox context.
- **#29113** — Apply sandbox intent inside remote exec servers, completing the split from PR #29108 so the executor interprets and enforces sandbox policy locally.

🔗 [PR #29371](https://github.com/openai/codex/pull/29371) · [PR #29358](https://github.com/openai/codex/pull/29358) · [PR #29113](https://github.com/openai/codex/pull/29113)

---

### 📝 Prompting

- **#29301** (merged) — Updated plan mode prompt to render the implementation plan to the user on relevant follow-ups, so users can exit plan mode to implement rather than manually switching.

🔗 [PR #29301](https://github.com/openai/codex/pull/29301)

---

## 5. Feature Request Trends

| Trend | Representative Issues | Signal |
|---|---|---|
| **IDE-native diff/approval UI** | #2998 (197 👍) | Strongest feature ask — developers want Codex diffs inside VS Code/JetBrains, not just terminal |
| **ChatGPT ↔ Codex bidirectional handoff** | #2153 (149 👍) | Users want seamless context transfer between chat exploration and CLI implementation |
| **Standalone Windows installer** | #13993 (153 👍) | Platform gap for enterprise/offline users who can't use Microsoft Store |
| **Custom storage paths for Desktop chats** | #24534 (6 👍) | Users want control over where projectless workspace data is stored |
| **Disable hover-triggered sidebar** | #22168 (4 👍) | UX friction in Desktop — accidental sidebar activation disrupts text selection |
| **Avoid interrupting active typing** | #28551 (0 👍, filed today) | TUI should detect when user is typing and defer prompts/questions |

---

## 6. Developer Pain Points

1. **Rate-limit opacity and sudden cost surges** — Issue #28879 is the clearest example: users have no visibility into *why* their token budget consumption changed 10–20× overnight. The community needs better rate-limit telemetry and proactive communication from OpenAI when pricing/budgeting models change.

2. **Windows is a second-class platform** — At least 6 active issues are Windows-specific: no standalone installer (#13993), sandbox regressions (#26158, #29178), `\\?\` namespace paths breaking pnpm/Node (#13845), visible PowerShell window flashing (#26613), excessive SQLite I/O (#29177), and BitDefender false positives (#28971). Windows users are accumulating friction.

3. **Context window exhaustion** — Multiple issues (#9046, #28920, #29356) report threads becoming unrecoverable after context compaction or window exhaustion. Users want smarter compaction that preserves operational continuity (e.g., last 5 steps verbatim) and clearer recovery paths.

4. **Silent failures and missing errors** — Several issues describe silent degradation: conversations disappearing (#21128), image generation no longer saving files (#28881), MCP servers omitted without auth prompts (#18527), and cloud code review silently failing (#15477). Developers can't debug what they can't see.

5. **Desktop app stability** — Crash-on-resume (#29361), duplicate messages (#22298), and sidebar UX issues (#22168) suggest the Desktop app needs more polish before it can be relied on as a primary interface.

---

*Data source: [github.com/openai/codex](https://github.com/openai/codex) · Digest generated 2026-06-22*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-22

---

## 1. Today's Highlights

No new releases landed in the last 24 hours, but the repository saw significant activity on both the issue and PR fronts. A large batch of dependency PRs from dependabot were merged or closed today, modernizing the toolchain (ESLint 10, `@types/node` 25.x, `actions/checkout` v7, and 76 npm dependency bumps). On the issue side, several long-running P1 bugs around agent hangs, subagent reliability, and Auto Memory correctness continue to accumulate community engagement, signaling these remain the most impactful open problems.

---

## 2. Releases

**None.** No new versions of Gemini CLI were published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|---------------|-----------------|
| 1 | **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs** | The generalist subagent hangs indefinitely on simple tasks (e.g., folder creation). Users report waiting over an hour. Disabling subagent delegation works around it, but that defeats the purpose of the agent system. | 👍 8, 7 comments — the most upvoted active issue. |
| 2 | **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent reports GOAL success after MAX_TURNS** | A `codebase_investigator` subagent falsely reports `status: "success"` / `Termination Reason: "GOAL"` even when it hit the maximum turn limit without doing any analysis. This silently hides interruptions from the user. | 👍 2, 7 comments — P1, needs retesting. |
| 3 | **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — Robust component-level evaluations** | EPIC tracking the expansion of behavioral eval tests (76 already written). This is foundational infrastructure for measuring agent quality and preventing regressions as the codebase grows. | 7 comments — P1 eval infra workstream. |
| 4 | **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST-aware file reads, search, and mapping** | Investigating whether AST-aware tools can reduce token noise and tool-call turns by reading precise method bounds. Could significantly improve agent efficiency on large codebases. | 👍 1, 7 comments — P2 feature investigation. |
| 5 | **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell command execution stuck on "Waiting input"** | After a shell command finishes, the CLI hangs showing "Awaiting user input" even for commands that never prompt. This is a core UX break that affects everyday usage. | 👍 3, 4 comments — P1 bug. |
| 6 | **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Deterministic redaction & Auto Memory logging** | Auto Memory reads local transcripts and sends content to a background agent for extraction, but secrets are only redacted *after* content is already in model context. A genuine security concern. | 5 comments — P2 security. |
| 7 | **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory retries low-signal sessions indefinitely** | If the extraction agent decides a session is low-signal and skips it, that session is never marked as processed and gets re-surface endlessly, wasting resources. | 5 comments — P2 agent bug. |
| 8 | **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini doesn't use skills/sub-agents enough** | Users report the model almost never invokes custom skills or subagents on its own, even when the task is clearly related. Explicit instruction works, but autonomous delegation doesn't. | 6 comments — P2 agent behavior. |
| 9 | **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — Agent should stop/discourage destructive behavior** | The model occasionally uses `git reset --force` or similar destructive commands when safer alternatives exist. This is a safety/reliability concern for real-world usage. | 👍 1, 3 comments — P2 agent safety. |
| 10 | **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — 400 error with >128 tools** | When too many tools are available (e.g., large MCP server catalogs), the API returns a 400 error. The agent should intelligently scope or paginate its tool selection. | 3 comments — P2 agent bug. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| 1 | **[#28078](https://github.com/google-gemini/gemini-cli/pull/28078)** | Massive dependency bump: 76 npm packages updated, including `@agentclientprotocol/sdk` 0.16.1→0.25.1 and `simple-git` 3.28→3.36. Keeps the project current with its ecosystem. | ✅ Merged |
| 2 | **[#28082](https://github.com/google-gemini/gemini-cli/pull/28082)** | Bumps `chrome-devtools-mcp` from 0.19.0 to 1.2.0 — a major version jump for the browser automation MCP server. | 🟡 Open |
| 3 | **[#28063](https://github.com/google-gemini/gemini-cli/pull/28063)** | Fixes NPM publish lifecycle failures (`--ignore-scripts` flag) and resolves scheduler event loop starvation. Addresses two release infrastructure issues. | ✅ Merged |
| 4 | **[#28059](https://github.com/google-gemini/gemini-cli/pull/28059)** | Fixes extension loading failure when a workspace `.env` file is unreadable (EACCES under sandbox). Root-cause fix for [#27894](https://github.com/google-gemini/gemini-cli/issues/27894). | 🟡 Open |
| 5 | **[#28068](https://github.com/google-gemini/gemini-cli/pull/28068)** | Fixes `isFunctionCall()` / `isFunctionResponse()` misclassifying messages with empty `parts` arrays (JavaScript's `[].every(...)` is vacuously `true`). Subtle but important correctness fix. | 🟡 Open |
| 6 | **[#27744](https://github.com/google-gemini/gemini-cli/pull/27744)** | Security fix: resolves DNS before SSRF guard to block hostname-to-private-IP bypass (e.g., `127.0.0.1.nip.io`). Prevents a real SSRF vector in `web-fetch`. | 🟡 Open |
| 7 | **[#27878](https://github.com/google-gemini/gemini-cli/pull/27878)** | Fixes MCP image MIME type detection — implements local image signature sniffing so WebP images from Figma MCP aren't mislabeled as `image/png`, which caused HTTP 400 errors. | 🟡 Open |
| 8 | **[#27889](https://github.com/google-gemini/gemini-cli/pull/27889)** | Fixes MCP OAuth refresh for auto-discovered servers that lack a static `oauth.clientId` in settings. Uses the persisted client ID from token metadata instead. | 🟡 Open |
| 9 | **[#27887](https://github.com/google-gemini/gemini-cli/pull/27887)** | Makes custom theme `border.default` colors actually apply on terminals that report background via OSC 11. Fixes a documented-but-broken feature. | 🟡 Open |
| 10 | **[#28071](https://github.com/google-gemini/gemini-cli/pull/28071)** | Performs spawn check on ripgrep before tool registration, so the CLI fails gracefully if rg isn't available. Closes [#22784](https://github.com/google-gemini/gemini-cli/issues/22784). | ✅ Merged |

---

## 5. Feature Request Trends

1. **Smarter tool management** — Multiple issues ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246), [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)) call for the agent to intelligently scope, paginate, or AST-awarely navigate large tool/codebase surfaces rather than brute-forcing everything into context.

2. **Subagent observability & trajectory sharing** — [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) requests making subagent trajectories visible via `/chat share`. As subagent usage grows, developers need better debugging and eval visibility into what delegated agents actually did.

3. **Agent self-awareness** — [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) asks that the CLI agent understand its own mechanics (flags, hotkeys, config) well enough to serve as its own expert guide.

4. **Browser agent resilience** — [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) requests automatic session takeover and lock recovery for the browser agent, replacing the current fail-fast strategy.

5. **Destructive operation safeguards** — [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) asks for the agent to prefer safer alternatives to destructive commands (`git reset --force`, etc.) and to understand the risks of modifying databases and similar resources.

---

## 6. Developer Pain Points

- **Agent/subagent hangs are the #1 frustration.** Issues [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) (generalist agent hangs), [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) (shell "Waiting input" hang), and [#22465](https://github.com/google-gemini/gemini-cli/issues/22465) (stuck at interactive prompt) all describe the CLI becoming unresponsive during routine operations. This is the most upvoted and commented category.

- **Silent failures in subagent reporting.** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) shows subagents reporting success when they actually hit limits. Developers can't trust the agent's self-reported status.

- **Auto Memory correctness and security.** Three issues filed by the same author ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)) highlight that the Auto Memory system has security gaps (secrets in model context before redaction), infinite retry loops on low-signal sessions, and silent skipping of invalid patches.

- **Skills/subagents not being invoked autonomously.** [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) reports that custom skills and subagents are almost never used by the model without explicit instruction, undermining the value of configuring them.

- **MCP integration rough edges.** Issues around OAuth refresh ([#27889](https://github.com/google-gemini/gemini-cli/pull/27889)), image MIME types ([#27878](https://github.com/google-gemini/gemini-cli/pull/27878)), elicitation support ([#22249](https://github.com/google-gemini/gemini-cli/issues/22249)), and tool count limits ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) show that the MCP ecosystem integration still has significant friction.

---

*Data source: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · Digest generated 2026-06-22*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI — Community Digest 📌  
**Date: 2026-06-22**

---

### 1. **Today's Highlights**

Today we're seeing a wave of stability and UX polish issues dominate the repository. The most impactful is **a critical crash bug on Windows ARM64 (#3687)** — `copilot.exe` is hard-aborting under load instead of graceful shutdowns, affecting every release from 1.0.57 onward. Beyond reliability cracks, the community is sharpening focus on **observability gaps**: hidden context compaction (#3867), missing hook/env discovery (#3871 vs MCP parity), and silent billing miscalculations (#3881). The direction is clear—developers need transparency windows into both token accounting and subprocess lifecycle.

---

### 2.  **Releases**

None.  No tagged releases or release-namespace activity surfaced within the trailing 24-hour window.

---

### 3.  **Hot Issues**

| # | Issue | Title | Why it matters | Community signal |
|---|-------|-------|----------------|-----------------|
| [3687](https://github.com/github/copilot-cli/issues/3687) | 🔴 **[OPEN]** `copilot.exe` fatal-aborts under load (BEX64 / 0xc0000409) – Windows ARM64 – versions 1.0.57 → 1.0.60 | **Top stability risk** – 6 comments, 1 👍. Any hard abort without graceful teardown risks workspace corruption, lost session state, and bad first impression for ARM64 early adopters. | 6 comments signal active troubleshooting; author reproduced across versions |
| [3881](https://github.com/github/copilot-cli/issues/3881) | 🆕 **[OPEN]** Selected model (Claude Sonnet 4.5 6×) deducted 5 % instead of 2 % premium quota | **Billing accuracy** – Users are watching per-request arithmetic; silent over-deduction erodes trust in the $10/300-request plan economics. | 0 comments; just filed – could gain traction as multi-model quotas proliferate |
| [3879](https://github.com/github/copilot-cli/issues/3879) | 🆕 **[OPEN]** Status line conflates “actively generating” with “idle + background work” – user unsure when to type safely | **UX / input safety** – False busy indicators cause interrupting keystrokes, ruining generations, and breaking muscle memory. | Fresh issue; adjacent to background-agent UX debates across all coding CLIs |
| [3874](https://github.com/github/copilot-cli/issues/3874) | 🔴 **[OPEN]** VS Code `preToolUse` agent hook denial bypassed | **Security surface** – If policy hooks don't actually gate tool execution, org admins have false sense-of-compliance. Pairs with broader hooks ecosystem complaints. | 1 comment; low volume now but security-adjacent |
| [3861](https://github.com/github/copilot-cli/issues/3861) | 🟡 **[OPEN]** Docs claim per-host sandbox filtering / cross-platform isolation that doesn't actually work | **Doc ↔ implementation drift** – Security-hardening settings presented as functional that silently no-op is worse than no setting at all. | 1 comment; signals need for doc audit |
| [3867](https://github.com/github/copilot-cli/issues/3867) | 🟡 **[CLOSED]** No context window / compaction notifications in Chat | **Awareness / cost control** – Users invisible to compaction can't judge whether critical pre-amble survived or got snipped. | Merged/closed; suggests fix landed elsewhere or UX compromise reached |
| [3778](https://github.com/github/copilot-cli/issues/3778) | 🟡 **[OPEN]** Feature request: emit cost / premium-request metrics via OpenTelemetry (parity with Claude Code) | **Analytics gap** – Teams auto-exporting OTel spans get token counts but zero dollar attribution; makes charge-back impossible. | 1 comment; enterprise-facing |
| [3882](https://github.com/github/copilot-cli/issues/3882) | 🟤 **[CLOSED][invalid]** Blank issue template with no fields filled | Spam / misfiled; closed same day. No community impact. |
| [3871](https://github.com/github/copilot-cli/issues/3871) | 🟢 **[CLOSED]** Hooks lack enumeration (`copilot mcp list` exists, hooks have no equivalent) | **Operator ergonomics** – If you can't `list` hooks you can't audit what's running; was closed, implying fix or intentional scope decision. | 2 comments; may return if no surface shipped |
| [3871→3687](https://github.com/github/copilot-cli/issues/) | — | — | The overlap between sandbox, permission, and hook issues reveals **three layers of governance** (network, tool-use, lifecycle) with inconsistent CLI/API coverage. | — |

> **Signal summary:**  Windows ARM64 stability tops the list; billing math and UX transparency are the emerging themes attracting fresh issues; several closed items indicate the maintainers are triaging quickly amid surge.

---

### 4.  **Key PR Progress**

Only one PR appeared in the 24-hour window:

| PR | Title | Status | Assessment |
|----|-------|--------|------------|
| [#3880](https://github.com/github/copilot-cli/pull/3880) | “beyond the streets of america” — imports `Card`/`Badge` UI components | 🆕 **[OPEN]** | 🚩 **Off-topic / suspicious.** The diff contains Next.js UI component imports (`@/components/ui/Card`) completely unrelated to a CLI tool. Likely a misfiled PR or spam contribution. No meaningful feature or fix impact expected. |

> No substantive PRs targeting the CLI runtime, documentation, or sandbox landed today. The PR pipeline appears idle.

---

### 5.  **Feature Request Trends**

Aggregating all open and recently-closed issues, three thematic clusters emerge:

1. **Subprocess & session lifecycle transparency**  
   - Context-window meters + compaction alerts (#3867)  
   - Background-agent status differentiation (#3879)  
   - Graceful shutdown under load instead of BEX64 (#3687)  

2. **Plugin / hook ecosystem discoverability**  
   - `copilot hooks list` parity with `copilot mcp list` (#3871)  
   - Effective enforcement of `preToolUse` security hooks (#3874)  

3. **Cost observability & billing telemetry**  
   - Per-request premium-quota accounting (#3881)  
   - OpenTelemetry cost-metric export (#3778)  
   - (implies need for per-model multiplier clarity in UI)  

These requests trace a coherent ask: **treat the CLI like a server** — expose metrics, surface state changes, and let ops tooling hook into lifecycle events.

---

### 6.  **Developer Pain Points**

| Pain frequency | Category | Description |
|----------------|----------|-------------|
| 🔴  High | **Windows ARM64 reliability** | Hard aborts (BEX64) on tab-restore and memory pressure; versions 1.0.57-1.0.60 all affected — no workaround mentioned. |
| 🟠  Medium | **Governance surface drift** | Sandbox network-filter settings claim functionality that silently no-ops (#3861); hook denial doesn't fire in VS Code agent (#3874). Users ship "secure" configs believing protections are live. |
| 🟡  Emerging | **Quota arithmetic opacity** | Single-request deductions can be 2.5× expected (#3881); no dashboard-level per-request receipt. Compounded by missing OTel cost metrics (#3778) for fleet tracking. |
| 🟢  Resolved-ish | **Hooks enumeration** | Closed but no shipping alternative visible yet (#3871); teams managing multi-plugin installs still can't audit active hook inventory. |

> **Bottom-line:**  Stability on non-x86 platforms is the immediate blocker; governance configuration trust and billing transparency are the strategic gaps Catalyst maintainers should prioritize this quarter.

---

*Generated by OWL — your AI-native developer tool analyst. 🦉*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-22

---

## 1. Today's Highlights

OpenCode's community activity remains intense around permission UX, renderer stability, and the new v2 session architecture. The most upvoted discussion — YOLO Mode — is back in a polished PR form from a core contributor, and two fresh crash reports in the desktop renderer are getting rapid PR attention. No new tagged release landed in the last 24 hours.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|---------------|
| **#11831** | [YOLO Mode — Auto-Approve All Permission Prompts](https://github.com/anomalyco/opencode/issues/11831) 👍30, 9 comments | The single most upvoted recent discussion. Power users want a first-class auto-approve mode that respects explicit `deny` rules. Drives PR #33279. |
| **#10908** | [RTL support for Arabic and other RTL languages](https://github.com/anomalyco/opencode/issues/10908) 👍7, 9 comments | Accessibility gap; Arabic translations exist in docs but the UI lacks proper RTL layout. |
| **#33286** | [Checkpoints (NOT the current undo implementation)](https://github.com/anomalyco/opencode/issues/33286) — opened today | User wants proper session checkpointing with explicit save/restore semantics, distinct from the existing undo feature. |
| **#33280** | [Empty message content sanitised … still appears (regression) with GLM-5.2](https://github.com/anomalyco/opencode/issues/33280) | A previously closed placeholder-text bug has regressed on an OpenAI-compatible provider. |
| **#33285** | [Renderer crash: TypeError reading 'size' on undefined in VirtualTimelineRow](https://github.comanomalyco/opencode/issues/33285) — opened today | Fresh desktop crash with an immediate fix PR (#33287) in progress. |
| **#32829** | [DeepSeek + MCP ($ref/$defs in schemas causes AttributeError)](https://github.com/anomalyco/opencode/issues/32829) | MCP tool schemas with JSON Schema `$ref`/`$defs` break DeepSeek provider tool registration. Affects popular servers like Asana and Notion. |
| **#32002** | [Kernel panic / memory leak via EndpointSecurity — opencode.exe on macOS](https://github.comanomalyco/opencode/issues/32002) | Serious: macOS zone-map exhaustion through a memory leak triggered via EndpointSecurity. Significant stability concern for Mac users. |
| **#31041** | [Zen API endpoints return 404 on CORS preflight (OPTIONS)](https://github.com/anomalyco/opencode/issues/31041) | Blocks all browser-based clients from calling the Zen API. POSTs work; the preflight routing is the bug. |
| **#33252 / #33264** | Payment/subscription card declines (multiple reports) | International card payment failures for OpenCode Go subscriptions. Possibly a provider/region issue needing investigation. |
| **#33229** | [Zen lists Claude Opus 4.7/4.8 but cannot run them](https://github.com/anomalyco/opencode/issues/33229) | Models are listed in `opencode models` but request-time fails. Follow-up to the broader Claude Copilot provider instability (#31247, #31807). |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|------------|
| **#33279** | [feat(tui): add yolo permission mode](https://github.com/anomalyco/opencode/pull/33279) — core contributor | Makes `--yolo` the canonical auto-approval flag for `opencode run` and the TUI, with `"auto" \| "normal"` permission mode. Directly addresses #11831. |
| **#33287** | [fix: guard VirtualTimelineRow against undefined initialItem/row](https://github.comanomalyco/opencode/pull/33287) | Patches today's renderer crash (#33285) by adding a null guard in the virtualized timeline component. |
| **#33281** | [feat(cli): add standalone v2 session flow](https://github.comanomalyco/opencode/pull/33281) | Adds `--standalone` mode (private authenticated server child process), v2 API session creation, session-owned `DataProvider`, and built-in TUI plugin loading in standalone mode. Big architectural step. |
| **#33246** | [feat(core): make system prompt immutable after session creation](https://github.comanomalyco/opencode/pull/33246) | Caches the system prompt per session ID to prevent mid-session mutation, closing #29672. |
| **#33270** | [refactor(core): simplify runner transitions](https://github.comanomalyco/opencode/pull/33270) | Replaces mutually recursive retry functions with an iterative, exhaustive transition loop — cleaner state machine for retries/overflow recovery. |
| **#32998** | [fix(session): cap OpenAI Responses tool count to avoid 500 server_error loop](https://github.comanomalyco/opencode/pull/32998) | Prevents massive MCP tool lists from triggering a ChatGPT/Codex backend 500 and subsequent infinite retry loop. |
| **#32998** | [fix(session): cap OpenAI Responses tool count to avoid 500 server_error loop](https://github.comanomalyco/opencode/pull/32998) | Prevents massive MCP tool lists from triggering a ChatGPT/Codex backend 500 and subsequent infinite retry loop. |
| **#29355** | [feat(mcp): add resource subscription API with autoprompt](https://github.comanomalyco/opencode/pull/29355) | Partial delivery of full MCP client capabilities — enables subscribing to MCP resources and auto-prompting on change. |
| **#29356** | [feat(plugin): expose skills API to plugins via PluginInput.skills](https://github.com/anomalyco/opencode/pull/29356) | Extends the plugin API surface so plugins can read and react to skill definitions. |
| **#33284** | [fix(ui): restore markdown heading hierarchy in Desktop/web chat](https://github.com/anomalyco/opencode/pull/33284) | Fix where all h1–h6 shared a single 14px CSS rule, making headings indistinguishable. |

---

## 5. Feature Request Trends

1. **Permission UX simplification** — YOLO/auto-approve mode (#11831, #33279) is the loudest single request. Users want granular control: auto-ask with deny-rule safety.
2. **Session management** — Renaming sessions (#32375, closed), checkpointing (#33286), and the new v2 standalone session flow (#33281) all point to users wanting richer session lifecycle control.
3. **MCP maturity** — Resource subscriptions (#29355), JSON Schema `$ref` support (#32829), and per-model context/input/output limits (#29354) show heavy MCP adoption driving feature demand.
4. **Internationalization & accessibility** — RTL layout support (#10908, #32726), Persian language (#32810), and Arabic rendering fixes indicate a growing non-Latin user base.
5. **Permissionless automation** — YOLO mode, session immutability (#33246), and the `/reload` slash command (#9871) all reduce friction for trusted-power-user workflows.

---

## 6. Developer Pain Points

- **Renderer/Desktop crashes** — Multiple new crash reports (#33285, #33283, #32706) in the virtual timeline and session view components; the desktop app is currently fragile.
- **Permission prompt fatigue** — The #1 upvoted feature request. Users trust the tool and want less interruption.
- **Claude Copilot provider instability** — Recurring #400/#401 errors with Claude Opus 4.8 (#31247, #31807, #31236, #33229); stale Responses API item IDs, pseudo tool-call text, and assistant prefill issues make this provider unreliable.
- **Tool-count-induced 500 loops** — Heavy MCP server setups cause OpenAI-compatible backends to reject requests and OpenCode to retry endlessly (#32998).
- **Invalid UTF-8 handling inconsistency** — Read tool crashes while Edit tool silently corrupts (#33068), showing inconsistent error handling across filesystem tools.
- **Payment/subscription friction** — Multiple international card decline reports (#33252, #33264) suggest payment provider issues outside the US.
- **macOS kernel panic** — Memory leak triggering zone-map exhaustion via EndpointSecurity (#32002) is a serious stability issue for Mac developers.
- **Regression of known bugs** — Empty-message sanitisation placeholder text returning (#33280) after being marked closed erodes trust in fix permanence.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-22

---

## 1. Today's Highlights

No new releases landed in the past 24 hours, but the community was highly active with 39 issue updates and 6 pull requests. The dominant themes are **connection reliability with OpenAI Codex/gpt-5.5**, **auto-compaction hardening**, and a wave of **TUI/UX polish** around copy-paste, scrolling, and IME support. Several high-impact PRs were merged addressing vLLM context overflow detection, OpenRouter cost display accuracy, and compaction event metadata.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|--------------------|
| 1 | **[#4945](https://github.com/earendil-works/pi/issues/4945) — openai-codex Connection Reliability Issues** | The most-discussed issue (64 comments, 👍30). `openai-codex` / `gpt-5.5` intermittently leaves the TUI stuck on `Working...` with no streamed output, no tool call, and no visible error. Recovery requires pressing Escape, which aborts the assistant turn. This is a critical reliability blocker for users on OpenAI's latest models. | High engagement; users are actively sharing workarounds. The volume of comments and upvotes signals this is a top-priority pain point. |
| 2 | **[#5825](https://github.com/earendil-works/pi/issues/5825) — Streaming markdown forces scroll to bottom** | When `clear on shrink` is enabled, Pi forcibly scrolls to the bottom during streaming markdown output, making it impossible to read earlier content while the agent is still responding. | 28 comments. Users find this extremely disruptive to the reading workflow. No upvotes but high comment volume indicates widespread frustration. |
| 3 | **[#3357](https://github.com/earendil-works/pi/issues/3357) — Official local LLM provider extension** | Requests dynamic model list fetching from `{baseUrl}/models` to seamlessly integrate Pi with llama.cpp, Ollama, LM Studio, vLLM, and similar local inference servers. | 26 comments, 👍36 — the highest upvoted issue in this batch. This is a long-standing community priority for local-first developers. |
| 4 | **[#5916](https://github.com/earendil-works/pi/issues/5916) — Support provider extensions with model aliases and improve search** | Users configuring OpenRouter via `models.json` overrides need model alias support and better search/filtering in the model picker. Currently there's no UI for OpenRouter provider configuration. | 10 comments. Active discussion with maintainer involvement. Important for power users managing many models. |
| 5 | **[#5700](https://github.com/earendil-works/pi/issues/5700) — Support multiple live agent sessions with TUI switching** | Requests the ability to run multiple concurrent agent sessions and switch between them in the TUI, similar to tmux panes or editor tabs. Currently `switchSession` tears down the current session. | 7 comments. A frequently-requested architectural improvement for multi-tasking workflows. |
| 6 | **[#5217](https://github.com/earendil-works/pi/issues/5217) — Extension events session_before_compact and session_compact lack compaction reason** | Extension developers cannot distinguish whether compaction was triggered manually (`/compact`), by context threshold, or by overflow recovery. The RPC protocol already exposes this distinction but the extension API doesn't. | 3 comments. Important for extension authors building compaction-aware tooling. |
| 7 | **[#5932](https://github.com/earendil-works/pi/issues/5932) — Exposing ctx.navigateTree() to agents** | `navigateTree()` exists on `ExtensionCommandContext` but not on the base `ExtensionContext`, limiting what custom extensions (e.g., a `/goal` command) can do during event handlers. | 3 comments, labeled `to-discuss`. A targeted API gap that would unlock richer custom extension UIs. |
| 8 | **[#5939](https://github.com/earendil-works/pi/issues/5939) — Make auto-compaction opt-in and safe before the next provider request** | Requests that auto-compaction be opt-in (off by default) and run at a safe checkpoint — after tool results complete but before the next provider request. | 7 comments, closed. Directly addressed by PR [#5937](https://github.com/earendil-works/pi/pull/5937). |
| 9 | **[#5931](https://github.com/earendil-works/pi/issues/5931) — Copy-paste from TUI introduces extra spaces and line breaks** | Text copied from Pi's TUI contains spurious spaces and line breaks at line-wrapping points, breaking pasted content in editors and terminals. | 5 comments, closed. A quality-of-life bug that affects daily usability. |
| 10 | **[#5948](https://github.com/earendil-works/pi/issues/5948) — Option to send project AGENTS.md as user message instead of system prompt** | Proposes sending project-level `AGENTS.md` as a user message rather than embedding it in the system prompt, giving models more natural context about project conventions. | 2 comments, closed. An interesting prompt-engineering discussion about how project context is delivered to models. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| 1 | **[#5929](https://github.com/earendil-works/pi/pull/5929) — Add vLLM context overflow error patterns** | Adds vLLM-specific error message patterns to `OVERFLOW_PATTERNS` so that `isContextOverflow()` correctly detects vLLM's distinct 400 error format (e.g., "This model's maximum context length is 262144 tokens..."). Prevents infinite retry loops on context overflow. | ✅ Merged |
| 2 | **[#5937](https://github.com/earendil-works/pi/pull/5937) — Harden opt-in auto-compaction at between-turn checkpoint** | Makes auto-compaction opt-in (disabled by default) and adds a between-turn checkpoint so compaction runs after tool results complete but before the next provider request. Manual `/compact` remains available. Addresses issue [#5939](https://github.com/earendil-works/pi/issues/5939). | ✅ Merged |
| 3 | **[#5942](https://github.com/earendil-works/pi/pull/5942) — Add reason and willRetry to compaction extension events** | Adds `reason` (`"manual"` / `"threshold"` / `"overflow"`) and `willRetry` (boolean) fields to `SessionBeforeCompactEvent` and `SessionCompactEvent` in the public extension API, matching what the RPC protocol already exposes. Addresses issue [#5217](https://github.com/earendil-works/pi/issues/5217). | ✅ Merged |
| 4 | **[#5941](https://github.com/earendil-works/pi/pull/5941) — Add reason and willRetry to compaction events (duplicate)** | Appears to be a duplicate of PR #5942, targeting the same fix. | ✅ Merged |
| 5 | **[#5950](https://github.com/earendil-works/pi/pull/5950) — Use OpenRouter's actual cost from API response in footer** | Pi was ignoring OpenRouter's `usage.cost` field (which contains the actual USD amount charged) and instead using its own static per-token estimate. This fix displays the real cost for both built-in and custom OpenRouter models. | ✅ Merged |
| 6 | **[#5938](https://github.com/earendil-works/pi/pull/5938) — Sync d-pi TUI components to clients** | Adds `defineTuiComponent` declarations to d-pi agent definitions, validates them during agent loading, and generates a client-synced TUI component capability module. Migrates the built-in `d-pi-message` renderer into the new system. | ✅ Merged |

---

## 5. Feature Request Trends

1. **Local LLM Integration** — The most upvoted request ([#3357](https://github.com/earendil-works/pi/issues/3357), 👍36) is dynamic model discovery from local inference servers (Ollama, llama.cpp, LM Studio, vLLM). The community strongly wants first-class local provider support.

2. **Multi-Session / Session Management** — Multiple issues ([#5700](https://github.com/earendil-works/pi/issues/5700), [#5952](https://github.com/earendil-works/pi/issues/5952)) request the ability to run and switch between concurrent agent sessions, and to expose session management APIs to extensions.

3. **Provider Configuration UX** — Users want UI-based configuration for providers like OpenRouter ([#5916](https://github.com/earendil-works/pi/issues/5916)) rather than manual `models.json` editing, including model aliases and search.

4. **Extension API Enrichment** — Repeated requests for richer extension APIs: compaction reason metadata ([#5217](https://github.com/earendil-works/pi/issues/5217)), `navigateTree()` exposure ([#5932](https://github.com/earendil-works/pi/issues/5932)), and safe session replacement ([#5952](https://github.com/earendil-works/pi/issues/5952)).

5. **Auto-Compaction Control** — The community wants auto-compaction to be opt-in, configurable, and to run at safe checkpoints ([#5939](https://github.com/earendil-works/pi/issues/5939), [#5935](https://github.com/earendil-works/pi/issues/5935)).

6. **Per-Model Configuration** — Requests for per-model default thinking levels ([#5933](https://github.com/earendil-works/pi/issues/5933)) and per-model tool output truncation limits ([#5935](https://github.com/earendil-works/pi/issues/5935)).

---

## 6. Developer Pain Points

- **Streaming/Connection Reliability**: The single biggest pain point is intermittent hangs with OpenAI Codex/gpt-5.5 ([#4945](https://github.com/earendil-works/pi/issues/4945)), compounded by agent loop hangs on unresponsive streams ([#5778](https://github.com/earendil-works/pi/issues/5778)) and vLLM context overflow going undetected ([#5930](https://github.com/earendil-works/pi/issues/5930)).

- **TUI Usability**: Multiple friction points in the terminal UI: forced scroll-to-bottom during streaming ([#5825](https://github.com/earendil-works/pi/issues/5825)), broken copy-paste with extra whitespace ([#5931](https://github.com/earendil-works/pi/issues/5931)), IME preedit being erased by background renders ([#4888](https://github.com/earendil-works/pi/issues/4888)), and non-clickable hyperlinks after a recent update ([#4180](https://github.com/earendil-works/pi/issues/4180)).

- **Tool Execution Edge Cases**: Several bugs around tool handling: bash tool silently dropping `cwd` parameter ([#5904](https://github.com/earendil-works/pi/issues/5904)), bash/read tools showing only preview lines ([#5906](https://github.com/earendil-works/pi/issues/5906)), malformed tool calls causing 400 error spirals ([#5921](https://github.com/earendil-works/pi/issues/5921)), and crashes on missing/malformed tool content arrays ([#5945](https://github.com/earendil-works/pi/issues/5945)).

- **WSL2 / Cross-Platform Path Handling**: WSL2 UNC paths (`\\wsl.localhost\...`) cause Pi to dangerously change the working directory to `C:\WINDOWS\` ([#5927](https://github.com/earendil-works/pi/issues/5927)).

- **Extension Development Gaps**: Extension authors face an incomplete API surface — missing compaction reasons, no `navigateTree()` on base context, no safe session replacement API, and inconsistent `ctx.ui.notify` behavior at `session_start` ([#5943](https://github.com/earendil-works/pi/issues/5943)).

- **Authentication Friction**: First-time GitHub Copilot login fails with `incorrect_device_code` when the organization field is left blank ([#5928](https://github.com/earendil-works/pi/issues/5928)).

---

*Digest generated by OWL for the Pi community. Data source: [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono). Coverage window: 2026-06-21 to 2026-06-22.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-22

---

## 1. Today's Highlights

This week's release cycle is headlined by **v0.18.5**, which makes plan-mode prompts opt-in rather than automatic — a meaningful workflow change for users who rely on structured planning. On the community side, two high-engagement issues are driving discussion: **runaway tool-call loops** in long-context sessions (Issue [#5019](https://github.com/QwenLM/qwen-code/issues/5019)) and a **missing question UI in the IDEA plugin** (Issue [#4888](https://github.com/QwenLM/qwen-code/issues/4888)). Several significant feature PRs are also approaching merge readiness, including voice dictation, revivable background sub-agents, and a new artifact tool for publishing interactive HTML.

---

## 2. Releases

### v0.18.5 (stable)
- **fix(core):** Plan mode prompt is now opt-in — users must explicitly enable it rather than having it triggered automatically. ([PR #5433](https://github.com/QwenLM/qwen-code/pull/5433))
- **test(core):** Removed a duplicate git-diff untracked-count test case.

### v0.18.3-nightly.20260621.6b2f800ab
- Mirrors the v0.18.5 plan-mode opt-in fix and test cleanup above.

---

## 3. Hot Issues

### 🔴 Runaway tool-call loops crash long-context sessions
**[Issue #5019](https://github.com/QwenLM/qwen-code/issues/5019)** — In extended conversations, the model begins repeating identical tool calls with byte-identical arguments, triggering the API's `InvalidParameter` guard and terminating the session. This is arguably the most impactful open bug right now, directly affecting reliability for power users. Multiple PRs ([#5573](https://github.com/QwenLM/qwen-code/pull/5573), [#5571](https://github.com/QwenLM/qwen-code/pull/5571)) are racing to promote loop detection from opt-in to always-on.

### 🔴 IDEA plugin `ask_user_question` shows no question text
**[Issue #4888](https://github.com/QwenLM/qwen-code/issues/4888)** — When Qwen asks the user a question inside the IntelliJ IDEA plugin, neither the question text nor an input field is rendered — only Submit/Cancel buttons appear. This completely blocks interactive workflows in the IDE and has accumulated 10 comments, making it the most-discussed open issue.

### 🟡 Non-interactive loop detection exits successfully
**[Issue #5554](https://github.com/QwenLM/qwen-code/issues/5554)** (closed via [PR #5564](https://github.com/QwenLM/qwen-code/pull/5564)) — In GitHub Actions headless mode, loop detection fired but the workflow still reported success, hiding failures from users. Now fixed to report an error exit code.

### 🟡 `--resume` truncates thinking block previews
**[Issue #5555](https://github.com/QwenLM/qwen-code/issues/5555)** (closed via [PR #5565](https://github.com/QwenLM/qwen-code/pull/5565), [#5566](https://github.com/QwenLM/qwen-code/pull/5566)) — After resuming a session, pressing Space to preview thinking blocks showed truncated output. The fix routes resumed history through Ink's `<Static>` component so long content survives terminal scrollback.

### 🟡 Input box background color breaks on line wrap
**[Issue #5562](https://github.com/QwenLM/qwen-code/issues/5555)** (closed via [PR #5568](https://github.com/QwenLM/qwen-code/pull/5568)) — Multi-line input in the TUI left gaps in the background color, exposing the terminal's default background. A one-line fix applies `backgroundColor` to the content container.

### 🟡 `mcp add --scope` default documented as `project`, code uses `user`
**[Issue #5563](https://github.com/QwenLM/qwen-code/issues/5563)** — Documentation in `mcp.md` lists the default scope as `project` in three places, but the actual CLI default is `user`. This mismatch causes confusion when users expect project-scoped MCP servers.

### 🟡 Plan mode `exit_plan_mode` auto-executes without confirmation
**[Issue #5574](https://github.com/QwenLM/qwen-code/issues/5574)** — Entering plan mode via Shift+Tab (approval-mode cycling) and then exiting triggers immediate plan execution without asking the user. This is a safety concern for users who may accidentally cycle into plan mode.

### 🟡 Integration tests don't run on PRs
**[Issue #5219](https://github.com/QwenLM/qwen-code/issues/5219)** — E2E integration tests only execute on the nightly release pipeline, not on PRs or merges to `main`. Regressions therefore go undetected until release time. PRs [#5559](https://github.com/QwenLM/qwen-code/pull/5559) and [#5560](https://github.com/QwenLM/qwen-code/pull/5560) propose a fake OpenAI-compatible test server to enable CI runs without API keys.

### 🟡 Extension marketplace misclassifies uppercase `HTTPS://` schemes
**[Issue #5434](https://github.com/QwenLM/qwen-code/issues/5434)** (closed) — `parseExtensionSourceType` treated URL schemes case-sensitively, so `HTTPS://github.com/...` was not recognized as a marketplace source. Fixed by @tt-a1i.

### 🟡 `restoreFiles` rejects target directories with trailing separators
**[Issue #5518](https://github.com/QwenLM/qwen-code/issues/5518)** (closed) — A raw `startsWith` check on `targetDir + sep` failed when the caller passed a path that already ended with a separator, causing legitimate restores to throw "Path escapes target directory."

---

## 4. Key PR Progress

### 🎙️ Voice Dictation — [PR #5502](https://github.com/QwenLM/qwen-code/pull/5502)
Adds `/voice [hold|tap|off|status]` for native speech-to-text dictation in the prompt input. Hold mode activates while Space is pressed; tap mode toggles on/off. Supports configurable transcription models via `/model --voice`. A significant UX enhancement for hands-free coding.

### 🔁 Revivable Background Sub-Agents — [PR #5556](https://github.com/QwenLM/qwen-code/pull/5556)
Completed background agents can now be revived via `send_message` — the agent's transcript is restored, the new instruction is appended, and it re-enters the resume path. Also adds TTL cleanup for old sub-agent transcripts. Addresses [Issue #5540](https://github.com/QwenLM/qwen-code/issues/5540).

### 📄 Artifact Tool — [PR #5557](https://github.com/QwenLM/qwen-code/pull/5557)
An experimental `artifact` tool that lets the model publish self-contained interactive HTML pages from a session. Writes to `~/.qwen/artifacts/{id}/index.html` and opens via `file://`. Early-stage but signals a direction toward shareable, visual outputs.

### 🔁 Resume Without Synthetic "Continue" — [PR #5030](https://github.com/QwenLM/qwen-code/pull/5030)
Enables resuming an interrupted assistant turn (crash, Ctrl+C) without injecting a synthetic `"continue"` message into the transcript. Classifies the continuation shape from persisted chat history. Long-running PR with significant architectural implications.

### 🔁 Always-On Loop Detection — [PR #5573](https://github.com/QwenLM/qwen-code/pull/5573)
Promotes the consecutive-identical tool-call check from opt-in to always-on, halting runaway loops regardless of `model.skipLoopDetection`. Complementary to [PR #5571](https://github.com/QwenLM/qwen-code/pull/5571), which lowers the duplicate threshold.

### 🔁 Fake OpenAI Test Server — [PR #5560](https://github.com/QwenLM/qwen-code/pull/5560)
Lightweight OpenAI-compatible fake server for integration tests — supports fixture responses, streaming, tool calls, and request capture. Enables PR CI to run model-dependent E2E tests without real API keys.

### 🔁 Auto-Publish VS Code Companion — [PR #5572](https://github.com/QwenLM/qwen-code/pull/5572)
Stable CLI releases now automatically trigger the VS Code companion VSIX publish workflow, eliminating the manual release step that was previously required.

### 🔁 Release Failure → Autofix Pipeline — [PR #5551](https://github.com/QwenLM/qwen-code/pull/5551)
When a release workflow fails, it now creates a labeled GitHub issue and dispatches the existing autofix workflow, reducing maintainer triage time.

### 🔁 Vision Bridge for Text-Only Models — [PR #5126](https://github.com/QwenLM/qwen-code/pull/5126)
Automatically transcribes images to text via an image-capable model when the primary model is text-only and the user pastes or `@`-references an image. Improves compatibility for users on text-only model tiers.

### 🔁 MCP Server Hot-Reload — [PR #5561](https://github.com/QwenLM/qwen-code/pull/5561)
Editing `mcpServers` in `settings.json` now live-connects/disconnects servers without restarting. Sub-task of [Issue #3696](https://github.com/QwenLM/qwen-code/issues/3696).

---

## 5. Feature Request Trends

| Direction | Representative Issues/PRs |
|---|---|
| **CI/CD integration & release automation** | [#5219](https://github.com/QwenLM/qwen-code/issues/5219), [#5551](https://github.com/QwenLM/qwen-code/pull/5551), [#5572](https://github.com/QwenLM/qwen-code/pull/5572), [#5549](https://github.com/QwenLM/qwen-code/issues/5549) |
| **Background agent lifecycle** | [#5540](https://github.com/QwenLM/qwen-code/issues/5540), [#5556](https://github.com/QwenLM/qwen-code/pull/5556) |
| **Voice / multimodal input** | [#5502](https://github.com/QwenLM/qwen-code/pull/5502) |
| **Shareable artifacts & visual output** | [#5557](https://github.com/QwenLM/qwen-code/pull/5557) |
| **IDE plugin reliability** | [#4888](https://github.com/QwenLM/qwen-code/issues/4888), [#5538](https://github.com/QwenLM/qwen-code/issues/5538) |
| **Testing infrastructure** | [#5559](https://github.com/QwenLM/qwen-code/issues/5559), [#5560](https://github.com/QwenLM/qwen-code/pull/5560) |
| **Session resume robustness** | [#5030](https://github.com/QwenLM/qwen-code/pull/5030), [#5555](https://github.com/QwenLM/qwen-code/issues/5555) |

The dominant theme is **making Qwen Code CI/CD-ready** — contributors want integration tests on PRs, auto-publishing for companion extensions, and release failures that self-remediate. Background agent lifecycle and voice input are the next most active fronts.

---

## 6. Developer Pain Points

1. **Path validation fragility** — A recurring class of bugs ([#5516](https://github.com/QwenLM/qwen-code/issues/5516), [#5518](https://github.com/QwenLM/qwen-code/issues/5518), [#5506](https://github.com/QwenLM/qwen-code/issues/5506), [#5522](https://github.com/QwenLM/qwen-code/issues/5522), [#5512](https://github.com/QwenLM/qwen-code/issues/5512)) stems from raw `startsWith` / string-prefix checks on file paths without canonicalization. Windows paths, UNC paths, symlinks, and trailing separators all bypass the guards. A centralized, platform-aware path canonicalization utility would address many of these in one pass.

2. **Loop detection is off by default** — Multiple issues ([#5019](https://github.com/QwenLM/qwen-code/issues/5019), [#5554](https://github.com/QwenLM/qwen-code/issues/5554)) trace back to `skipLoopDetection` defaulting to `true`. The community is converging on making it always-on with a lower threshold.

3. **IDE companion lags behind CLI** — The IDEA plugin's broken `ask_user_question` UI and the VS Code companion's UNC path handling both suggest the IDE integrations need dedicated QA attention. The auto-publish PR (#5572) is a step toward keeping them in sync.

4. **Documentation drift** — The `mcp add --scope` default mismatch ([#5563](https://github.com/QwenLM/qwen-code/issues/5563)) and stale build-script references in tests ([#5530](https://github.com/QwenLM/qwen-code/issues/5530)) indicate docs and tests aren't being updated alongside code changes.

5. **Non-interactive mode silent failures** — Beyond loop detection, the `transform_data` output joining bug ([#5524](https://github.com/QwenLM/qwen-code/issues/5524)) shows that desktop/non-interactive output paths receive less scrutiny than the TUI.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-22

---

## 1. Today's Highlights

The v0.8.64 release train is in full swing, with maintainer **Hmbown** actively filing security hardening, refactoring, and UX trackers across a dozen new issues. A wave of cleanup PRs — token budget regulation, Codex retry fixes, sandbox worktree support, and proxy env for JS execution — have landed and closed in the last 24 h, indicating strong momentum toward the next release. The most-discussed community problem remains the **"Turn stalled — no completion signal received"** TUI freeze ([issue #2487](https://github.com/Hmbown/CodeWhale/issues/2487)), still unresolved and affecting yolo-mode users.

---

## 2. Releases

- **v0.8.63** — The current stable release. This is now the canonical **CodeWhale** project. The legacy npm packages `deepseek` / `deepseek-tui` are **deprecated**; migrating users should follow [`docs/REBRAND.md`](https://github.com/Hmbown/CodeWhale/blob/main/docs/REBRAND.md). No new tags were cut in the last 24 h; work is actively targeting **v0.8.64**.

---

## 3. Hot Issues

| # | Title | Why it matters | Community signal |
|---|-------|----------------|-----------------|
| [#2487](https://github.com/Hmbown/CodeWhale/issues/2487) | Turn stalled — no completion signal | **Top-commented issue (17 comments, 👍1).** yolo-mode freezes completely; `continue` doesn't resume. Core reliability blocker. | 22 days old, still no fix |
| [#3368](https://github.com/Hmbown/CodeWhale/issues/3364) | v0.8.64 security hardening & code-scanning | Creator: **Hmbown**. Centralizes CodeQL findings and advisory-class reports into one public release tracker. Signals the project is taking supply-chain / security auditing seriously before the next cut. | 16 comments in 1 day — high engagement |
| [#3325](https://github.com/Hmbown/CodeWhale/issues/3275) | CodeWhale over-extends, self-loops beyond user intent | Agent enters a runaway propose→answer→execute cycle without waiting for confirmation. Regression from #3061. | 9 comments — widely felt pain point |
| [#1812](https://github.com/Hmbown/CodeWhale/issues/1812) | TUI freeze on Windows (crossterm poll) | Windows 11 users hit intermittent full UI hangs; process stays alive but input and rendering stop. | 8 comments; long-standing Windows reliability gap |
| [#3144](https://github.com/Hmbown/CodeWhale/issues/3144) | Natural-language auto-review policy & pre-push gate | Inspired by Cursor's Bugbot `/review`. Would add a middle ground between full manual YOLO mode and unchecked autonomous execution. | 11 comments; popular direction |
| [#3355](https://github.com/Hmbown/CodeWhale/issues/3355) | Sandbox blocks Git worktree write ops | macOS seatbelt sandbox rejects `git add` in git-worktree-linked paths unless the user drops into trust_mode. Real workflow blocker for worktree-heavy users. | 3 comments; PR #3356 already opened |
| [#3369](https://github.com/Hmbown/CodeWhale/issues/3369) | Nightly cross-target build & auto-tag failures | CI/CD failures blocking the v0.8.64 release gate for Nightly builds. | Fresh today; 0 comments but critical-path |
| [#3363](https://github.com/Hmbown/CodeWhale/issues/3363) | Seamless auto-compaction with carried-forward summaries | Aims to eliminate the "context wall" by auto-compacting conversations with intelligent summaries carried forward, removing the need for manual session restarts. | Release-planning priority per maintainer |
| [#3357](https://github.com/Hmbown/CodeWhale/issues/3357) | Baidu Qianfan coding plan model support | The `--provider` flag lacks a `custom` option; users can't configure arbitrary OpenAI-compatible endpoints with custom URL + key + model name. Blocks a major Chinese-model provider. | Common ask from CN users |
| [#3367](https://github.com/Hmbown/CodeWhale/issues/3367) | User-defined subagent personas in `.codewhale/agents` | Would let teams define reusable agent personas (roles, tool sets, system prompts) locally, without waiting to be added as built-in types. | Fresh today; aligns with agentic workflow trend |

---

## 4. Key PR Progress

| # | Title | What it does | Status |
|---|-------|--------------|--------|
| [#3321](https://github.com/Hmbown/CodeWhale/pull/3321) | Add token budget regulator for high-fan-out agent runs | Closes enforcement gap between protocol-layer `BudgetSpec` and actual runtime execution; adds max_tokens, max_tool_calls, and cost ceilings for workflow/sub-agent orchestration. | **Merged** |
| [#3344](https://github.com/Hmbown/CodeWhale/pull/3344) | Retry Codex Responses requests | Routes `/codex/responses` streaming through `send_with_retry` with per-attempt body/header rebuild instead of failing on first transport error. Fixes #3019. | **Merged** |
| [#3331](https://github.com/Hmbown/CodeWhale/pull/3331) | Enable proxy env for JS execution | Mirrors lowercase proxy vars + `ALL_PROXY` into the uppercase names Node reads, fixing JS execution behind corporate proxies. Fixes #3273. | **Merged** |
| [#3356](https://github.com/Hmbown/CodeWhale/pull/3356) | Allow worktree Git metadata writes in sandbox | Detects linked-worktree `.git` pointer files and adds the real git-dir to writable roots in the macOS seatbelt sandbox. Fixes #3355. | **Open** |
| [#3332](https://github.com/Hmbown/CodeWhale/pull/3332) | Require auth for non-loopback app-server binds | Rejects non-loopback `--http` / `--mobile` binds when no explicit auth token is supplied. Security hardening for remote/multi-user setups. Fixes #3258. | **Open** |
| [#3345](https://github.com/Hmbown/CodeWhale/pull/3345) | Move inline config tests to `tests.rs` | Reduces `crates/config/src/lib.rs` by extracting the large `#[cfg(test)]` module. Lowers merge conflict surface and improves code navigability. Closes #3307. | **Open** |
| [#3333](https://github.com/Hmbown/CodeWhale/pull/3333) | Split MCP header helpers | Extracts HTTP header framing and custom-header filtering from `mcp.rs` into `mcp::headers`, prep for the larger MCP transport modularization in #3310. | **Open** |
| [#3330](https://github.com/Hmbown/CodeWhale/pull/3330) | Layer 4: replay FEAT-005 command extraction onto main | Continues the multi-layer command architecture refactor, replaying FEAT-005 onto the current `main` branch. Refs #2870. | **Merged** |
| [#3343](https://github.com/Hmbown/CodeWhale/pull/3343) | chore: bump tokio 1.50.0 → 1.52.3 | Dependency maintenance; pulls in tokio fixes for 2026-05-08 patch. | **Open** |
| [#3346](https://github.com/Hmbown/CodeWhale/pull/3346) | style: fix clippy warnings | Runs `cargo clippy --fix` across the workspace; some pre-existing test failures unrelated to the change. | **Open** |

---

## 5. Feature Request Trends

1. **Agent governance & safety controls** — Multiple issues (#3144, #3145, #3365) point demand toward Cursor-style review gates, natural-language policy definitions, and model-aware prompt/tool surface curation (`ModelProfile` descriptors).

2. **Context management & auto-compaction** — Issue #3363 signals that users are hitting context limits and losing session continuity. Auto-compaction with intelligent carry-forward summaries is the #1 comfort gap flagged for v0.8.64.

3. **Custom provider / model extensibility** — Requests for Baidu Qianfan (#3357) and broader custom provider URL support (see #2608 config refactor) show users want plug-and-play compatibility with any OpenAI-api-compatible endpoint without core code changes.

4. **Subagent configurability** — User-defined agent personas in `.codewhale/agents` (#3367) and editable subagent policy knobs (#3303) reflect demand for team-shareable, locally-owned agent role definitions.

5. **Consolidated work-tracking surface** — Issue #3366 plans to unify plans, todos, tasks, goals, and related aliases into one canonical model-visible work ledger, reducing tool-choice confusion especially for non-flagship models.

---

## 6. Developer Pain Points

- **TUI freezes remain the #1 blocker** — Both long-standing (#1812 Windows crossterm) and recent (#2487 turn-stall) reports show that the terminal UI becomes unresponsive under load, especially in yolo mode. No fix has shipped yet.

- **Config monolith complexity** — At 4,700 and 9,400 lines respectively, `config.rs` in both the shared crate and the TUI crate make adding or fixing a provider a 15–30-diff-arm scavenger hunt. The maintainer has acknowledged this and is filing gradual refactor issues (#2608, #3306–#3314).

- **Over-eager agent execution** — Multiple users (#3275, and tangentially #3144) report that CodeWhale frequently over-extends beyond the asked task, entering self-referential propose→answer→execute loops. This is a trust and reliability regression from earlier versions.

- **Sandbox/workflow friction** — macOS seatbelt issues with git worktrees (#3355), JS proxy env propagation (#3331, now fixed), and remote app-server auth (#3332, in progress) all point to rough edges when CodeWhale is used behind corporate proxies, in container/VM setups, or with non-standard repo layouts.

- **Chinese locale / provider gaps** — Users are requesting Baidu Qianfan support (#3357) and Chinese-localized skills (#3354) to reduce token usage and support domestic models. These signal that the project's primarily EN-US user base is expanding and the tooling hasn't caught up.

---

*Data snapshot: 2026-06-22 | Source: github.com/Hmbown/CodeWhale | OWL Digest*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*