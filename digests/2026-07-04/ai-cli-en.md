# AI CLI Tools Community Digest 2026-07-04

> Generated: 2026-07-04 01:50 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Developer Tools Ecosystem
**Date:** 2026-07-04

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape on July 4, 2026 shows a field in active, uneven evolution. While Anthropic's Claude Code shipped a controversial permission-mode change that sparked significant community backlash, Google's Gemini CLI and the CodeWhale project (formerly DeepSeek TUI) are in intensive pre-release hardening cycles. OpenAI's Codex is focused on security hardening and model regression triage, while Qwen Code and OpenCode demonstrate sustained shipping velocity with multiple daily releases and PRs. Across all tools, **subagent reliability**, **multi-model support**, and **security isolation** have emerged as universal pain points, suggesting the ecosystem is moving beyond basic chat-to-code translation toward production-grade agent orchestration.

---

## 2. Activity Comparison

| Tool | Issues Opened (24h) | PRs Active (notable) | Release Status | Community Sentiment |
|---|---|---|---|---|
| **Claude Code** | 19+ | 10 selected | v2.1.201 (shipped today) | Negative – UX regression backlash |
| **OpenAI Codex** | ~10 | 10 selected | `rust-v0.143.0-alpha.35` | Mixed – model regression concerns |
| **Gemini CLI** | ~8 | 10 selected | v0.51.0-nightly (nightly pipeline) | Stable – focused iteration |
| **GitHub Copilot CLI** | ~10 | 0 | No release today | Negative – crashes & regression |
| **OpenCode** | ~12 | 10 selected | No release today | Mixed – billing confusion |
| **Pi** | ~10 | 10 selected | No release today | Negative – reliability issues |
| **Qwen Code** | 27 updated | 10 selected | v0.19.6 (stable) + nightly | Neutral – active development |
| **CodeWhale (DeepSeek TUI)** | ~8 | 10 selected | Pre-v0.8.67 RC | Positive – community contributions |

**Notable:** Claude Code had the highest issue volume but the most negative community reaction. Qwen Code had the most updated issues and multiple releases today. GitHub Copilot CLI had zero PR activity, indicating a slow development day.

---

## 3. Shared Feature Directions

### Requirements appearing across ≥3 tools:

| Cross-Tool Requirement | Affected Tools | Detail |
|---|---|---|
| **Subagent lifecycle stability** | Claude Code, Gemini CLI, CodeWhale, OpenCode, Pi | Ghost tasks, OOM from deep nesting, false success reports, indefinite hangs. Universal pain point. |
| **Multi-model / provider routing** | Claude Code (feature request), Codex (#14039), CodeWhale (#3965), Pi (dynamic catalog), Qwen (fallback chains) | Users want per-subagent model assignment, fallback chains, and heterogeneous provider backends. |
| **AST-aware code tools** | Gemini CLI (#22745), CodeWhale (#3980), Claude Code (implied via skills) | Structural code search, precise method-bound reading, safe refactoring with syntax awareness. |
| **Dynamic MCP/tool ecosystem** | GitHub Copilot CLI (#3829), OpenCode (V2 MCP PR), CodeWhale (#3866/#3869), Qwen (MCP mentions) | Runtime tool discovery, live MCP server lifecycle, tool pagination, marketplace integration. |
| **Session state / context isolation** | Claude Code (#74043, #74023), Copilot CLI (#4025), OpenCode (cross-device sync), Pi (#6101) | Cross-project contamination, stale indices, per-project memory, resume corruption. |
| **Autonomy / human-in-the-loop gates** | Claude Code (permission mode change), CodeWhale (#3275), OpenCode (#35239), Copilot CLI (agent mode) | Tension between agent autonomy and user control — request for plan-review gates and configurable approval modes. |
| **Security hardening (Git, subprocess)** | Codex (5 PRs on Git security), Gemini CLI (#28175, #28178), Qwen (#6282, #6285), OpenCode (#35237) | Shell parameter expansion confirmation, Git patch safety, subprocess isolation, request body limits. |

### Additional 2-tool overlaps:
- **Windows/WSL UX gaps**: Pi (#6187), Copilot CLI (#4026), OpenCode (#35258, #26038)
- **Configuration file resolution**: Claude Code (#74023), Qwen (#6283), Gemini CLI (settings.json)
- **Memory/compaction reliability**: Codex (#25792), Pi (#6157), Gemini CLI (#26522)
- **Billing/quota transparency**: OpenCode (#35142, #35215), Codex (#31054), Gemini CLI (implied)

---

## 4. Differentiation Analysis

### Feature Focus

| Dimension | Leading Tools | Distinction |
|---|---|---|
| **Model quality & ecosystem** | Claude Code, OpenAI Codex | Focused on proprietary frontier models; regressions in model behavior (hallucinations, tool-call parsing) directly impact utility |
| **Security-first architecture** | Codex, Gemini CLI | Codex is running a major Git patch security campaign; Gemini added shell expansion confirmation and bot patch artifacts |
| **Web-shell / UI richness** | Qwen Code, CodeWhale | Qwen shipping ECharts, daemon dashboard, MCP mentions in web-shell; CodeWhale focusing on TUI with Hotbar and constitution flow |
| **Enterprise / platform integration** | Copilot CLI, Gemini CLI | Copilot's BYOK models, MCP plugins; Gemini's cloud run egress, Vertex AI support |
| **Multi-provider flexibility** | Pi, OpenCode, CodeWhale | Pi with GLM, Azure, Copilot, Cloudflare providers; OpenCode with Copilot, Zen, DeepSeek; CodeWhale with LM Studio routing |
| **Constitution-based safety** | CodeWhale (unique) | Novel "constitution" framework for agent behavior — explicit rules files that constrain scope, distinct from permission systems |

### Target User Profile

| Tool | Primary User | Value Proposition |
|---|---|---|
| **Claude Code** | Professional developers using Anthropic stack | Deep tool integration, skills system, VS Code/JetBrains support |
| **OpenAI Codex** | Power users/enterprise | GPT-5.5 quality, sandbox execution, credit system |
| **Gemini CLI** | Google Cloud / Vertex AI users | Multi-agent orchestration, caretaker system, cloud-native |
| **Copilot CLI** | GitHub ecosystem developers | Copilot integration, MCP plugin ecosystem, BYOK |
| **OpenCode** | Cost-sensitive/indie developers | Free-tier models, multi-provider, Zen API |
| **Pi** | TUI enthusiasts / Linux users | Embedded library, extensible provider model, strict tool parsing |
| **Qwen Code** | Chinese market / Qwen users | Web-shell UI, WeCom integration, local models |
| **CodeWhale** | DeepSeek / open-source advocates | Constitution-first safety, per-sub-agent routing, MCP dynamism |

### Technical Approach

| Tool | Language | Architecture | Key Differentiator |
|---|---|---|---|
| **Claude Code** | TypeScript | Monorepo, VS Code/JetBrains extensions | Mid-conversation system role harness (Sonnet 5) |
| **OpenAI Codex** | Rust + TypeScript | Rust core, IDE extensions | Security-hardened Git operations pipeline |
| **Gemini CLI** | TypeScript | Multi-agent orchestration | Caretaker system for agent lifecycle |
| **Copilot CLI** | TypeScript | TUI-first, MCP plugin architecture | Alt-screen rendering, voice mode |
| **OpenCode** | TypeScript | V2 architecture migration | Zen API, MCP lifecycle, form service |
| **Pi** | TypeScript | Embedded library + TUI | Strict schema validation, dynamic model catalog |
| **Qwen Code** | TypeScript | Web-shell + CLI + daemon | Vision bridge, CUA driver, WeCom channels |
| **CodeWhale** | TypeScript | TUI, constitution framework | Per-sub-agent provider, dynamic MCP |

---

## 5. Community Momentum & Maturity

### High-Velocity Iterators (daily releases, high PR throughput)
- **Qwen Code**: Shipped v0.19.6 stable + nightly + CUA driver today. 50+ PRs updated. Multiple feature PRs (model fallback chains, @ mention panels, WeCom integration). Most active shipping pipeline.
- **OpenCode**: V2 architecture migration progressing with PRs for MCP execute, form service, step ledger. 3 parallel fix attempts for the `pkill -f` hang bug.
- **Claude Code**: Despite negative sentiment, shipped 2 releases today. High issue volume (19+) indicates heavy usage. The PR queue shows active iteration on code-architect agent and security guidance.

### Stable, Focused Iteration
- **Gemini CLI**: Nightly pipeline, 10 notable PRs. Focus on security (shell expansion, bot patches) and UX fixes (thought leakage, stale state, Windows startup). Lower issue volume but higher quality.
- **Pi**: 10 notable PRs, majority closed. Hotfixes for Claude model compatibility (#6278) and strict tool parsing (#6285). Growing provider support (GLM, Azure Cognitive Services).

### Lower Activity / Concerns
- **GitHub Copilot CLI**: Zero PRs today. Crashes on Windows (#4026) and terminal rendering regressions (#1799) are unresolved. Community frustration around authentication and proxy issues.
- **CodeWhale**: Pre-release hardening — no release today but 10 RC-blocker issues closed. Moderate community contribution (2 community PRs for MCP and provider routing).

### Community Sentiment Heat Map

| Tool | Positive | Neutral/Mixed | Negative |
|---|---|---|---|
| **Claude Code** | — | — | 🔴 Permission mode, 60s timeout, subagent crashes |
| **OpenAI Codex** | — | 🟡 Model regression concerns | — |
| **Gemini CLI** | ✅ | — | — |
| **Copilot CLI** | — | — | 🔴 Crashes, rendering, auth |
| **OpenCode** | — | 🟡 Billing confusion | — |
| **Pi** | — | 🟡 Reliability concerns | — |
| **Qwen Code** | ✅ | — | — |
| **CodeWhale** | ✅ | — | — |

---

## 6. Trend Signals

### 1. Agent Orchestration is the New Frontier
Every tool is struggling with subagent lifecycle — ghost tasks, false success reports, OOM from deep nesting. The industry is moving from single-turn code generation to multi-agent orchestration. **Gemini CLI's caretaker system** and **Claude Code's subagent model** are the most ambitious approaches, but both show that production-grade agent reliability is still unsolved.

### 2. Security is No Longer Optional
A coordinated security hardening wave: Codex (5 Git patch PRs), Gemini CLI (shell expansion confirmation, bot patches), Qwen (subprocess isolation), OpenCode (10MB request body limit). The ecosystem is recognizing **AI-assisted Git operations as an attack surface**, and **subprocess isolation** as a core requirement.

### 3. Multi-Provider is Becoming Table Stakes
No single model provider dominates. Users want per-sub-agent provider routing (CodeWhale #3965), model fallback chains (Qwen #6273), dynamic model catalogs (Pi), and BYOK support (Copilot CLI). **Provider lock-in is seen as a risk**, not a feature.

### 4. The TUI Renaissance Continues
Despite the rise of IDE-based tools, CLI/TUI tools remain dominant. Qwen Code is investing heavily in web-shell (ECharts, @ mentions, daemon dashboard). Copilot CLI added alt-screen rendering. CodeWhale optimized TUI compositor performance. **The terminal is not dying** — it's becoming a richer, more interactive surface.

### 5. Safety is Still an Open Problem
Claude Code's permission mode change sparked 110+ comment backlash. CodeWhale's "constitution" framework is a novel approach. Community frustration about agent autonomy (#3275 in CodeWhale, #22672 in Gemini CLI) suggests **users want guardrails, not just permissions**. The tension between agent autonomy and user control will define the next generation of tools.

### 6. Context Management is a Universal Bottleneck
Context compaction deleting agent progress (Codex #25792, Gemin CLI thought leakage, Pi compaction summary language, Qwen context window miscalculation). **Long-running agent sessions** are the primary use case that exposes this pain point. Tools that solve context management — with caching, compilation, and smart summarization — will have a significant advantage.

### 7. Windows and WSL Remain Second-Class Citizens
Pi, Copilot CLI, and OpenCode all report Windows-specific crashes, paste issues, and WSL login hangs. While shipping macOS and Linux first is pragmatic, **the Windows developer market is underserved** and represents growth opportunity.

---

**Summary for Technical Decision-Makers:**

- **For reliability and security:** Gemini CLI and Qwen Code show the strongest stability and security posture today. Codex is investing heavily in Git security but struggling with model regressions.
- **For feature velocity:** Qwen Code and OpenCode ship fastest. Claude Code ships frequently but is currently creating as many bugs as it fixes.
- **For agent orchestration:** Gemini CLI's caretaker system is most architecturally complete. Claude Code's subagent model is powerful but unstable. CodeWhale's constitution framework is novel but unproven.
- **For enterprise use:** Copilot CLI's GitHub integration and BYOK support are strong, but platform stability is a concern. Gemini CLI's cloud-native architecture suits GCP shops.
- **For cost-conscious users:** OpenCode and Pi offer the most flexible provider ecosystems with free-tier and local model support. CodeWhale's per-sub-agent routing enables heterogeneous cost optimization.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-07-04 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following Pull Requests represent the most-discussed Skill submissions in the community, ranked by comment activity and cross-referencing attention from related Issues.

### #1298 — Fix: `run_eval.py` recall reported as 0% (Skill Creator)
**Status:** Open | **Created:** 2026-06-10 | [View PR](https://github.com/anthropics/skills/pull/1298)

**Functionality:** Fixes core infrastructure of the `skill-creator` meta-skill. The `run_eval.py` script—used by the description-optimization loop—was consistently reporting `recall=0%` for all skill descriptions due to improper evaluation artifact installation, Windows stream reading failures, and trigger detection bugs. This PR addresses issues #556 and #1169 (10+ independent reproductions).

**Discussion highlights:** The highest-activity PR reflects deep frustration: the optimization loop was "optimizing against noise" for months. Multiple community members independently reproduced the failure but the fix required coordinated changes across artifact installation, subprocess handling, and parallelism.

---

### #514 — Add `document-typography` skill
**Status:** Open | **Created:** 2026-03-04 | [View PR](https://github.com/anthropics/skills/pull/514)

**Functionality:** Typographic quality control for generated documents: prevents orphan word wrap (1-6 words stranded on a new line), widow paragraphs (headers isolated at page bottom), and numbering misalignment.

**Discussion highlights:** Emphasizes that "these issues affect every document Claude generates" and users rarely request fixes explicitly. Community interest centers on the skill's universal applicability across document types.

---

### #538 — Fix: case-sensitive file references in `pdf/SKILL.md`
**Status:** Open | **Created:** 2026-03-06 | [View PR](https://github.com/anthropics/skills/pull/538)

**Functionality:** Corrects 8 case-sensitivity mismatches between SKILL.md references (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`) that break on case-sensitive filesystems (Linux/macOS by default).

**Discussion highlights:** Represents a persistent class of "plumbing" fixes—the Skills ecosystem is still maturing, with basic portability issues requiring attention across PDF, DOCX, and the skill-creator toolchain.

---

### #486 — Add ODT skill (OpenDocument Text)
**Status:** Open | **Created:** 2026-03-01 | [View PR](https://github.com/anthropics/skills/pull/486)

**Functionality:** Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods). Triggers on "ODT," "ODS," "ODF," "OpenDocument," "LibreOffice document," and requests for open-source or ISO standard document formats.

**Discussion highlights:** Interest stems from enterprise users operating outside the Microsoft ecosystem. The skill covers LibreOffice workflows and template filling, addressing a gap for organizations standardized on open-source tools.

---

### #210 — Improve `frontend-design` skill clarity
**Status:** Open | **Created:** 2026-01-05 | [View PR](https://github.com/anthropics/skills/pull/210)

**Functionality:** Revises the frontend-design skill so every instruction is actionable within a single conversation, with specific enough guidance to steer Claude behavior without being overly prescriptive.

**Discussion highlights:** Community feedback centered on existing skills being "too verbose" or "educational" rather than operational—a theme echoed in Issue #202. The PR aims for concision and direct Claude instruction.

---

### #83 — Add meta-skills: `skill-quality-analyzer` and `skill-security-analyzer`
**Status:** Open | **Created:** 2025-11-06 | [View PR](https://github.com/anthropics/skills/pull/83)

**Functionality:** Two meta-skills for evaluating other skills: quality analysis across five dimensions (Structure & Documentation 20%, etc.) and security analysis for trust boundary vulnerabilities.

**Discussion highlights:** Long-running (8 months) but high-interest. The security analyzer relates directly to Issue #492 (namespace trust abuse). These meta-skills represent the community's desire for ecosystem governance tooling.

---

### #1367 — Add `self-audit` skill v1.3.0
**Status:** Open | **Created:** 2026-06-28 | [View PR](https://github.com/anthropics/skills/pull/1367)

**Functionality:** Audits AI output before delivery via mechanical file verification followed by a four-dimension reasoning audit in damage-severity priority order. Universal across projects and tech stacks.

**Discussion highlights:** The newest entrant to the top tier. Positions itself as a "reasoning quality gate" — reflecting concern not just with output correctness but with *reasoning quality*. Very recent, gaining rapid attention.

---

## 2. Community Demand Trends

From Issue activity, the following directions represent the community's most-anticipated new Skill capabilities:

| Trend | Signal | Key Issue |
|---|---|---|
| **Trust & Security Governance** | #492 (34 comments) — namespace impersonation, trust boundary abuse | [Issue #492](https://github.com/anthropics/skills/issues/492) |
| **Enterprise Skill Sharing** | #228 (14 comments) — org-wide distribution, shared skill libraries | [Issue #228](https://github.com/anthropics/skills/issues/228) |
| **Infrastructure Reliability** | #556 (12 comments), #1169, #1061 — skill-creator eval loop broken across platforms | [Issue #556](https://github.com/anthropics/skills/issues/556) |
| **Skill Quality Standards** | #202 (8 comments) — skill-creator is "educational" not operational; needs practical focus | [Issue #202](https://github.com/anthropics/skills/issues/202) |
| **Compact Agent Memory** | #1329 (8 comments) — symbolic notation for long-running agent state | [Issue #1329](https://github.com/anthropics/skills/issues/1329) |
| **Deduplication & Plugin Architecture** | #189 (6 comments) — identical skills installed from different plugins | [Issue #189](https://github.com/anthropics/skills/issues/189) |

**Key takeaway:** The community is shifting from *creating individual utility skills* toward *demanding infrastructure, governance, and reliability improvements* for the Skills ecosystem itself. The #1 Issue (#492, security) and the top PR (#1298, `run_eval` reliability) both target the platform layer, not end-user functionality.

---

## 3. High-Potential Pending Skills

These PRs show active commenting, are not yet merged, and address clearly defined gaps:

| PR | Skill | Created | Status Signal |
|---|---|---|---|
| [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` — reasoning quality gate + file verification | 2026-06-28 | Very recent, v1.3.0 versioning suggests prior iteration |
| [#1323](https://github.com/anthropics/skills/pull/1323) | Fix: `run_eval` trigger detection misses real skill names | 2026-06-16 | Part of same reliability push as #1298 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | `color-expert` — comprehensive color knowledge skill | 2026-06-10 | From established community member (meodai); well-scoped |
| [#1099](https://github.com/anthropics/skills/pull/1099) | Fix: `run_eval` Windows subprocess crash | 2026-05-07 | Complements #1050 and #538 (Windows portability push) |
| [#806](https://github.com/anthropics/skills/pull/806) | `sensory` — native macOS automation via AppleScript | 2026-03-29 | Novel capability (osascript-based); two-tier permission system |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` — full testing stack (unit, React, e2e, philosophy) | 2026-03-22 | Covers Testing Trophy model; high utility for code-generation workflows |
| [#509](https://github.com/anthropics/skills/pull/509) | `CONTRIBUTING.md` — community health documentation | 2026-03-03 | Addresses #452; currently 25% community health score |
| [#181](https://github.com/anthropics/skills/pull/181) | SAP-RPT-1-OSS predictor — tabular foundation model integration | 2025-12-28 | Enterprise analytics; niche but well-defined domain |
| [#95](https://github.com/anthropics/skills/pull/95) | System documentation + flowcharts for evidence management | 2025-11-11 | Comprehensive but broad scope; may need scoping down |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for *ecosystem reliability and governance* — not new end-user Skills, but tooling to fix the skill-creator evaluation pipeline (broken across platforms for months), audit community-submitted skills for security and quality, and establish trust boundaries between official Anthropic and community contributions.**

The top Issue (#492, 34 comments, security namespace abuse) and the top PRs (#1298, #1323, #1099, #1050 — all `run_eval`/skill-creator platform fixes) together reveal a community that has matured beyond "what can Skills do" to "how do we ensure Skills infrastructure is trustworthy, cross-platform, and reliable at scale." The `skill-quality-analyzer` and `skill-security-analyzer` meta-skills (#83) directly address this, while `self-audit` (#1367) extends the theme to output quality.

In short: the community wants to *trust the ecosystem* before building more on top of it.

---

# Claude Code Community Digest
**2026-07-04**

## Today's Highlights
Anthropic shipped two releases (v2.1.200–v2.1.201) that overhaul default permissions—switching the default mode from "Auto" to "Manual" across all surfaces—while also disabling automatic continuation of AskUserQuestion dialogs. A surge of 19+ new bug reports landed over the past 24 hours, dominated by subagent lifecycle problems (ghost tasks, OOM crashes, ARG_MAX overflows) and lingering session/resume corruption issues.

## Releases
**v2.1.201** (latest):
- Sonnet 5 sessions no longer use the mid-conversation system role for harness reminders.

**v2.1.200**:
- `AskUserQuestion` dialogs no longer auto-continue by default; users can opt into an idle timeout via `/config`.
- Default permission mode changed to **"Manual"** across CLI, `--help`, VS Code, and JetBrains (`--permission-mode manual` / `"defaultMode": "manual"`).

## Hot Issues (10 selected)

1. **[#73125 – AskUserQuestion: "No response after 60s — continued without an answer"](https://github.com/anthropics/claude-code/issues/73125)** [OPEN, 110 comments, 353 👍]  
   Community pushed back hard against v2.1.200’s new idle timeout logic. Users report that 60 seconds is too short for thoughtful decisions, and the auto-continue silently corrupts sessions. *Why it matters:* Major UX regression for multi-step workflows. Anthropic provided no opt-out path.

2. **[#73487 – AskUserQuestion auto-selects default answer after ~60s idle](https://github.com/anthropics/claude-code/issues/73487)** [OPEN, 7 comments, 8 👍]  
   Mirrors #73125 from a Windows perspective. Users want a `--no-timeout` or configurable fallback. *Why it matters:* Shows the issue is cross-platform.

3. **[#70315 – assistant hallucinates fake user/system turns with stop_reason=null](https://github.com/anthropics/claude-code/issues/70315)** [OPEN, 12 comments]  
   Re-report of a critical Opus 4.8 corruption bug that was auto-closed by a bot. The model fabricates entire user turns, breaking every downstream consumer. *Why it matters:* Makes Opus 4.8 unusable for any serious work; bot-based issue triage is frustrating users.

4. **[#74006 – Contradictory 'session limit resets at X' times; background subagents die terminally](https://github.com/anthropics/claude-code/issues/74006)** [OPEN, 6 comments]  
   Subagents silently die but leave the parent session projecting future consumption. Cost projections drift without warning. *Why it matters:* Financial uncertainty for heavy agent users.

5. **[#74035 – Deeply-nested subagent fan-out causes unbounded memory growth → OOM](https://github.com/anthropics/claude-code/issues/74035)** [OPEN, 2 comments]  
   Self-reported by Claude analyzing its own crash logs. Nested `run_in_background: true` agents never release memory. *Why it matters:* Production blocker for any multi-level agent orchestration.

6. **[#74032 – Worktree isolation inflates spawned-shell env past ARG_MAX → E2BIG](https://github.com/anthropics/claude-code/issues/74032)** [OPEN, 1 comment]  
   After a single worktree-isolated subagent dispatch, every subsequent Bash call in the parent session fails with `E2BIG`. The session is unrecoverable. *Why it matters:* Worktree isolation (a key security feature) is currently broken on macOS.

7. **[#74043 – Session becomes inaccessible via --resume despite intact .jsonl transcript](https://github.com/anthropics/claude-code/issues/74043)** [OPEN, 1 comment, 1 👍]  
   Session index gets stale after directory path changes. *Why it matters:* Users lose full work sessions with no recovery path.

8. **[#74063 – Opus 4.8 emits tool calls as literal text ('court'/'count' + raw invoke tags)](https://github.com/anthropics/claude-code/issues/74063)** [OPEN, 0 comments]  
   Model intermittently fails to parse tool call blocks, rendering them as plaintext. *Why it matters:* Silent failures in agentic workflows—tool execution never occurs.

9. **[#74023 – .claude/settings.json resolved against literal cwd, not git root](https://github.com/anthropics/claude-code/issues/74023)** [OPEN, 3 comments]  
   Launching from a subdirectory silently drops all project-level settings. *Why it matters:* Breaks project-wide configuration for monorepos and nested workspaces.

10. **[#74060 – Cloud web session (claude.ai/code) hangs indefinitely after init](https://github.com/anthropics/claude-code/issues/74060)** [OPEN, 1 comment]  
    Zero response to any message post-initialization. *Why it matters:* Cloud-hosted Claude Code is completely unusable for this cohort.

## Key PR Progress (10 selected)

1. **[#74021 – fix(security-guidance): allow null findings in StructuredOutput schema](https://github.com/anthropics/claude-code/pull/74021)** [OPEN]  
   Relaxes `FINDINGS_SCHEMA` to accept `null` findings, preventing wasted retries when the model finds no vulnerabilities. Observed across 31 review sessions. *Why it matters:* Reduces token waste and latency for commit review.

2. **[#74010 – enhance(feature-dev): add system design patterns, edge cases, and operational context to code-architect agent](https://github.com/anthropics/claude-code/pull/74010)** [OPEN]  
   Three new steps: System Design Pattern Analysis, Edge Case Analysis, and Operational Context Analysis. Bridges high-level design intent with codebase architecture. *Why it matters:* Makes `code-architect` viable for production-grade feature planning.

3. **[#74009 – fix(plugin-dev): use "asks to" in skill-development and plugin-settings descriptions](https://github.com/anthropics/claude-code/pull/74009)** [OPEN]  
   Completes a months-old consistency fix (#13204) across two missed skill descriptions. *Why it matters:* Small UX polish; shows attention to developer-experience consistency.

4. **[#42701 – fix init-firewall.sh crash from ipset when a domain resolves to repeated IPs](https://github.com/anthropics/claude-code/pull/42701)** [CLOSED]  
   Adds `-exist` switch to `ipset` to prevent devcontainer launch failures from duplicate IPs. *Why it matters:* Devcontainer reliability improvement.

5. **[#74007 – enhance(feature-dev): add system design patterns … to code-architect agent](https://github.com/anthropics/claude-code/pull/74007)** [CLOSED]  
   Identical content to #74010 but closed (likely superseded). *Why it matters:* Duplicate PRs indicate active iteration on agent enhancement.

6. **[#73999 – fix(plugin-dev): use "asks to" …](https://github.com/anthropics/claude-code/pull/73999)** [CLOSED]  
   Superseded by #74009. *Why it matters:* Demonstrates community-driven fix for overlooked gaps.

7. **[#66854 – toekn](https://github.com/anthropics/claude-code/pull/66854)** [OPEN]  
   Ambiguous title, no summary. Likely a draft or spam. *Why it matters:* Low-priority noise in the PR queue.

## Feature Request Trends
- **Multi-account switching** (#36151, 415 👍): Highest-voted open issue. Users want account switching without shared email constraints, driven by enterprise/professional separation needs.
- **Linux desktop build** (#65697, 495 👍, CLOSED): Strongest overall demand despite being closed. The community clearly wants native Linux desktop support.
- **Branch-diff comparison** (#23626, 78 👍): Users want diff against arbitrary branches, not just `main`.
- **RISC-V native binary** (#59813, 0 👍 but niche significance): Growing architectural diversity request.
- **Prompt navigation** (#63901, 3 👍): Navigation within conversation history without terminal scrollback.

## Developer Pain Points

1. **Subagent lifecycle instability** – Ghost tasks (#73916, #65925), OOM from deep nesting (#74035), ARG_MAX from worktree isolation (#74032), terminal subagent death (#74006). Multi-agent workflows are effectively broken for production use.

2. **Session/resume corruption** – Stale indices (#74043), opaque resume failures (#74059), phantom remote sessions (#73675). Core session management is fragile.

3. **Model reliability issues** – Opus 4.8 hallucinates turns (#70315) and emits literal tool call text (#74063). Fable 5’s over-broad safeguards block legitimate security and auth code (#74062, #74058). These erode trust in the model layer.

4. **AskUserQuestion timeout UX** – The 60-second auto-continue (#73125, #73487) is the most acute recent regression. Users feel forced into decisions by a timer with no escape hatch.

5. **Configuration resolution** – `.claude/settings*` files break in subdirectory launches (#74023). Long-standing small bug that silently removes project-wide settings.

6. **Hook/notification consistency** – AskUserQuestion fires `permission_prompt` instead of a distinct type (#74052). Pre-tool-call text is rendered invisibly (#67051). Builds friction for developers relying on hooks for automation.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-04

## Today's Highlights

The Codex community continues to converge around a critical **model support regression** (`X-OpenAI-Internal-Codex-Responses-Lite`) affecting GPT-5.5 across multiple platforms, with at least four distinct issues filed this week. Meanwhile, a systematic **Git security hardening campaign** is underway in PRs, addressing configuration injection, transport isolation, and patch safety. A separate performance concern has emerged around **GPT-5.5 reasoning-token clustering** at 516/1034/1552 boundaries, suggesting possible token allocation optimizations may be degrading complex task outcomes.

## Releases

- **`rust-v0.143.0-alpha.35`** — No detailed changelog provided. Likely an incremental Rust SDK release in the alpha series.

## Hot Issues

1. **#30224 — "This model is not supported when using X-OpenAI-Internal-Codex-Responses-Lite"**  
   *(68 comments, 22 👍)*  
   The most active open bug. GPT-5.5 model access fails via Codex's internal Responses-Lite API on Windows 11. Community reports it may be tied to recent app update `26.623.31921`.  
   [View Issue](https://github.com/openai/codex/issues/30224)

2. **#30364 — GPT-5.5 reasoning-token clustering at 516/1034/1552**  
   *(37 comments, 53 👍)*  
   Highly-upvoted performance investigation. Users observe GPT-5.5 responses land disproportionately at fixed token boundaries, coinciding with degraded reasoning quality on complex tasks. Suggests a token allocation or batching artifact.  
   [View Issue](https://github.com/openai/codex/issues/30364)

3. **#7291 — VSCode extension failed to revert changes**  
   *(47 comments, 16 👍)*  
   Long-running bug (since Nov 2025) on macOS/Darwin, extension `0.4.46`. Undo operations silently fail, leaving partial edits in place. High frustration over data integrity.  
   [View Issue](https://github.com/openai/codex/issues/7291)

4. **#20214 — Codex App freezes/stutters on Windows 11 Pro**  
   *(27 comments, 40 👍)*  
   Despite 32 GB RAM and Ryzen 5, app experiences UI freezes. Community suspects sandbox or token-stream contention. Common workaround: restart session.  
   [View Issue](https://github.com/openai/codex/issues/20214)

5. **#25792 — Context compaction forgets AGENTS rules**  
   *(12 comments)*  
   After automatic context compaction, task progress jumps from 97% back to 42%. Rated as a serious long-task reliability issue for Pro users.  
   [View Issue](https://github.com/openai/codex/issues/25792)

6. **#30009 — `apply_patch` fails with Windows sandbox error**  
   *(21 comments, 4 👍)*  
   File edits through sandbox on Windows produce path translation errors. Likely related to WSL ↔ Windows cwd mapping.  
   [View Issue](https://github.com/openai/codex/issues/30009)

7. **#30595 — Same ChatGPT account fails on macOS CLI but works on Windows**  
   *(11 comments)*  
   macOS CLI incorrectly routes authenticated requests to Responses-Lite while Windows works fine. Cross-platform auth inconsistency.  
   [View Issue](https://github.com/openai/codex/issues/30595)

8. **#30137 — "significant reduction in intelligence. feels like gpt 5.5 got downgraded to 5.3"**  
   *(6 comments, 2 👍)*  
   User reports GPT-5.5 quality regression over last two days. May correlate with the reasoning-token clustering in #30364.  
   [View Issue](https://github.com/openai/codex/issues/30137)

9. **#26429 — Computer Use plugin disappears after Codex restart**  
   *(9 comments, 3 👍)*  
   On macOS Desktop, the Computer Use plugin becomes "unavailable" after restart. Chrome recovers, but Computer Use remains broken until manual reinstall.  
   [View Issue](https://github.com/openai/codex/issues/26429)

10. **#31054 — Exec quota consumed while idle**  
    *(2 comments)*  
    Codex Desktop appears to consume ~1% Exec quota at regular intervals even when not interacting. Quitting immediately stops drain. Potential background polling or health-check issue.  
    [View Issue](https://github.com/openai/codex/issues/31054)

## Key PR Progress

1. **#31072 — Bind patch application to guarded Git configuration**  
   Final link in a Git security chain: ensures validated configuration stays bound through child processes. Prevents reconstruction of raw commands.  
   [View PR](https://github.com/openai/codex/pull/31072)

2. **#31071 — Authorize included Git configuration sources before patch operations**  
   Extends safety to `include.path` and `includeIf` directives that could introduce repository-controlled settings.  
   [View PR](https://github.com/openai/codex/pull/31071)

3. **#31070 — Authorize primary Git configuration sources before patch operations**  
   Blocks environment-variable–routed config files (HOME, XDG, Windows profile) from being consumed during patch apply.  
   [View PR](https://github.com/openai/codex/pull/31070)

4. **#31069 — Bind Git configuration environment for patch operations**  
   Prevents race condition where `GIT_CONFIG_GLOBAL`/`GIT_CONFIG_SYSTEM` could differ between validation and execution.  
   [View PR](https://github.com/openai/codex/pull/31069)

5. **#30395 — Expose rate-limit reset credit details (app-server)**  
   Adds v2 endpoint to return available credits, expiry times, and consumption mechanism — unblocks the redemption UI.  
   [View PR](https://github.com/openai/codex/pull/30395)

6. **#30488 — Show reset details in redemption picker (CLI)**  
   Companion to #30395: CLI now shows sorted available credits with expiry times when user opens redeem dialog.  
   [View PR](https://github.com/openai/codex/pull/30488)

7. **#31058 — Retry model capacity errors**  
   Introduces structured retry for HTTP 503 capacity errors: 3 attempts with jittered delays (30s, 2m, 5m). Deferred from normal transport retry layer.  
   [View PR](https://github.com/openai/codex/pull/31058)

8. **#30850 — Block selected Git filters before staging patch paths**  
   Prevents path traversal through symlinks/submodules during `git add`. Stages only exact normalized file paths.  
   [View PR](https://github.com/openai/codex/pull/30850)

9. **#30854 — Block selected merge drivers before three-way patch application**  
   Safety check: prevents `git apply --3way` from running custom merge drivers from the repository.  
   [View PR](https://github.com/openai/codex/pull/30854)

10. **#30982 — Allow extension-managed Apps authentication**  
    Enables VS Code extension to manage Codex App authentication flow, simplifying cross-IDE identity management.  
    [View PR](https://github.com/openai/codex/pull/30982)

## Feature Request Trends

- **Multi-model/per-subagent routing** (#14039, 12 👍): Users want the ability to assign different models, providers, or profiles to spawned subagents — not just the parent session. A long-standing request (March 2026).

- **Multi-repository workspace support** (#26338, 8 👍): Users need Codex App to handle parent folders containing multiple independent Git repositories. Referenced issues #15168 and #14218.

- **Real-time session sync between App and CLI** (#31062): Request for bi-directional state synchronization — changes made in one client should appear in the other without manual refresh.

- **Reset-credit redemption UI** (inferred from #30395, #30488): Community has been demanding transparent visibility into available reset credits, expiry, and consumption — now being addressed via PRs.

## Developer Pain Points

1. **GPT-5.5 model regression on Responses-Lite** — Multiple issues (#30224, #30406, #30595, #30912) report that GPT-5.5 fails with "This model is not supported" on both App and CLI, especially on macOS and Windows. The pattern suggests a server-side routing problem.

2. **Context compaction destroying long task state** (#25792, #31033) — Automatic context management is deleting agent task progress (97% → 42% regression). Power users running complex multi-step workflows feel this most acutely.

3. **Windows sandbox + WSL path translation failures** (#30009, #29413, #30435) — A cluster of bugs around WSL ↔ Windows cwd handling, especially for `apply_patch`, `node_repl`, and Computer Use. Sandbox operations break due to incorrect working directory or path namespace confusion.

4. **Quota/resource consumption without visible activity** (#31054, #23192) — Users report Exec quota draining while idle, and usage desync between web analytics and desktop app. Erodes trust in billing and usage monitoring.

5. **Plugins disappearing after restart** (#26429, #25353) — Computer Use and Browser use plugins fail to survive Codex Desktop restarts on both macOS and Windows. Requires manual reinstallation — a significant friction for users who rely on these features daily.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-04

## Today's Highlights

The nightly release pipeline continues with **v0.51.0-nightly.20260704**, following yesterday's introduction of a cloud run egress skeleton for the caretaker system. The community's attention remains fixed on **subagent reliability and safety** — the `MAX_TURNS` false-success bug (#22323) and the generalist agent hang issue (#21409) remain the most active threads. A significant cluster of PRs landed over the past week targeting **security hardening** (shell parameter expansion confirmation, approved bot patch artifacts) and **core UX fixes** (thought leakage in history, stale topic state after session reset, slow editor detection on Windows).

## Releases

**[v0.51.0-nightly.20260704.gf7af4e518](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260704.gf7af4e518)** — Automated nightly version bump. No user-facing changes documented.

**[v0.51.0-nightly.20260703.gf7af4e518](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260703.gf7af4e518)** — Introduces `feat(caretaker): egress cloud run service skeleton` by @chadd28 (PR [#28167](https://github.com/google-gemini/gemini-cli/pull/28167)), laying groundwork for managed outbound network access from agent execution environments.

## Hot Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent recovery after `MAX_TURNS` reported as GOAL success** (9 comments, 2 👍). The `codebase_investigator` subagent incorrectly reports `status: "success"` with `Termination Reason: "GOAL"` when it actually hit the maximum turn limit before doing any analysis. This is a **critical logic bug** that masks real agent failures, misleading users and subagent orchestrators. Maintainer-only, needs retesting.

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs** (7 comments, 8 👍). The most upvoted bug this week. Simple operations like folder creation cause the generalist agent to hang indefinitely when it defers to subagents. Workaround: instructing the model not to use subagents resolves the issue. High community impact.

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — Leverage model's bash affinity via Zero-Dependency OS Sandboxing** (8 comments, 1 👍). A large enhancement proposal to let Gemini 3 models use native POSIX tools (`grep`, `cat`, `sed`, `awk`) directly in a sandboxed environment, reducing reliance on tool-calling abstractions. Foundational for performance-sensitive codebase operations.

4. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — Robust component-level evaluations** (7 comments). Tracks the evolution from 76 behavioral eval tests to a comprehensive component-level evaluation framework. Critical for ensuring agent quality as the codebase grows.

5. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — Assess AST-aware file reads, search, and mapping** (7 comments, 1 👍). Investigates whether Abstract Syntax Tree-aware tools reduce token usage and turn counts by precisely reading method bounds and navigating code structure. Could significantly improve agent efficiency on large codebases.

6. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell command gets stuck with "Waiting input" after completion** (4 comments, 3 👍). A frequent pain point: simple CLI commands finish execution but the CLI hangs, showing "Awaiting user input" indefinitely. P1 priority, medium effort.

7. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini does not use skills and sub-agents enough** (6 comments). The model fails to invoke user-defined custom skills and sub-agents autonomously, even for tasks closely matching their descriptions. Undermines the value of the skills system.

8. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Stop Auto Memory from retrying low-signal sessions indefinitely** (5 comments). The auto-memory system re-presents low-value sessions to the extraction agent repeatedly because it only records a session as processed on successful read. This wastes model context and compute.

9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent fails on Wayland** (4 comments, 1 👍). The browser agent terminates with `GOAL` status but fails silently under Wayland display servers. A platform compatibility gap for Linux users.

10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — Agent should stop/discourage destructive behavior** (3 comments, 1 👍). The model occasionally uses `git reset`, `--force` flags, or dangerous DB operations when safer alternatives exist. Community requesting safety-oriented guardrails.

## Key PR Progress

1. **[#28175](https://github.com/google-gemini/gemini-cli/pull/28175) — `fix(policy): require confirmation for shell parameter expansion`** (@huynhtrungcsc). Downgrades allowlisted shell commands containing `$` parameter expansion to require user confirmation in interactive mode; denies entirely in YOLO/non-interactive mode. A significant security hardening step.

2. **[#27971](https://github.com/google-gemini/gemini-cli/pull/27971) — `fix(core): strip thoughts from scrubbed history turns`** (@amelidev). Resolves a **thought leakage** bug where the model's internal reasoning monologues leaked into plain-text history, causing hallucination loops in subsequent turns. Large fix with high correctness impact.

3. **[#28178](https://github.com/google-gemini/gemini-cli/pull/28178) — `fix(security): require approved bot patch artifacts`** (@huynhtrungcsc). Introduces an explicit approval marker before the bot publish job consumes `bot-changes.patch`, keeping the reasoning-to-publish boundary fail-closed. Prevents unauthorized patch application.

4. **[#28240](https://github.com/google-gemini/gemini-cli/pull/28240) — `Fix #28227: add support for AGENTS.md out of the box`** (@vichu3d-dev). Makes `AGENTS.md` a default context file alongside `GEMINI.md`, so agent-level documentation is automatically included without manual configuration. Fixes a usability gap.

5. **[#28247](https://github.com/google-gemini/gemini-cli/pull/28247) — `fix(core): match ls ignore globs by relative path`** (@JSap0914). Changes `ls` ignore pattern matching from basename-only to workspace-relative paths, enabling `**` glob patterns. Fixes issue [#28207](https://github.com/google-gemini/gemini-cli/issues/28207).

6. **[#28183](https://github.com/google-gemini/gemini-cli/pull/28183) — `fix(vscode-ide-companion): preserve terminal focus when closing diff tabs`** (@gaurav0107). Stops the VS Code extension from stealing keyboard focus from the integrated terminal after approving file edits. A UX annoyance fix.

7. **[#28153](https://github.com/google-gemini/gemini-cli/pull/28153) — `fix(core): ignore stale update_topic calls after a session reset`** (@abhay-codes07). Prevents orphaned `update_topic` tool calls from corrupting the topic state after a `/clear` command. Prevents inconsistent UI state.

8. **[#28144](https://github.com/google-gemini/gemini-cli/pull/28144) — `fix(cli): detect available editors lazily to avoid slow startup`** (@abhay-codes07). Moves editor probing from module-load time to first use, significantly reducing startup latency on Windows where each `execSync` is expensive.

9. **[#28143](https://github.com/google-gemini/gemini-cli/pull/28143) — `fix(core): resolve MCP resources by server to prevent cross-server confusion`** (@abhay-codes07). Fixes a bug where `read_mcp_resource` could return content from the wrong MCP server when two servers expose the same resource URI. Large fix for MCP interoperability.

10. **[#28142](https://github.com/google-gemini/gemini-cli/pull/28142) — `fix(core): honor GOOGLE_CLOUD_LOCATION for Vertex AI with API key`** (@abhay-codes07). Ensures that `GOOGLE_CLOUD_LOCATION` is respected when using API key authentication with Vertex AI, instead of silently routing to the global endpoint.

## Feature Request Trends

- **AST-aware code analysis**: Multiple issues (#22745, #22746) request integrating Abstract Syntax Tree tools for precise code reading, search, and mapping — aiming to reduce token waste and turn counts on large codebases.
- **Subagent transparency and control**: Users want subagent trajectories visible in `/chat share` (#22598), better understanding of when/why subagents are invoked (#21968), and the ability to prevent unwanted subagent execution (#22093).
- **Agent self-awareness and safety**: Requests for agents to accurately describe their own CLI flags and capabilities (#21432), avoid destructive commands (#22672), and respect `settings.json` overrides (#22267).
- **Auto Memory improvements**: The extraction pipeline needs better handling of low-signal sessions (#26522), deterministic redaction (#26525), and quarantine of invalid patches (#26523).

## Developer Pain Points

- **Subagent reliability**: The most active issue cluster. Agents hang indefinitely (#21409), report false success on turn limits (#22323), ignore configuration overrides (#22267), and fail silently on unsupported platforms (#21983).
- **Shell execution glitches**: CLI hangs after shell commands complete (#25166), interactive prompts (e.g., `npm create vite`) cause stuck states (#22465), and the model creates temporary scripts in random directories (#23571).
- **Context and history corruption**: Internal model thoughts leak into history (#27971), stale `update_topic` calls survive session resets (#28153), and the `/bug` report omits subagent context (#21763).
- **Performance on Windows**: Editor detection at startup is slow (#28144), and terminal resize causes flickering (#21924). WSL users face additional `fs.watch` limitations (#28012).
- **Memory system overhead**: Auto Memory retries low-signal sessions indefinitely (#26522), and the extraction pipeline may expose secrets before redaction (#26525).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-07-04

---

## 1. Today's Highlights

This week sees a surge of open issues around terminal rendering regressions, MCP plugin integration bugs, and authentication problems with BYOK (Bring Your Own Key) configurations. A critical bug report details persistent CLI crashes on Windows spanning multiple versions, while several feature requests focus on custom themes, configurable scroll speed, and non-interactive command support. No new releases or pull requests were published in the last 24 hours.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

1. **[#3997 – [triage] Copilot Web: Model "gpt-5.3-codex" is not available](https://github.com/github/copilot-cli/issues/3997)**  
   *Comments: 9 | 👍: 0*  
   A critical model availability error blocks agent-based code generation. Users report the CLI fails with "Model gpt-5.3-codex is not available" on session creation. This suggests either a backend rollout issue or a configuration mismatch affecting Copilot Web users.

2. **[#1799 – [area:configuration, area:terminal-rendering] How to turn off alt-screen views?](https://github.com/github/copilot-cli/issues/1799)** *(OPEN since Mar 2026)*  
   *Comments: 11 | 👍: 7*  
   High community engagement around the newly introduced alt-screen rendering. Many users find the feature disruptive and want a configuration option to revert to the original terminal mode. This remains one of the most-upvoted open issues.

3. **[#4026 – [triage] Copilot CLI crashes repeatedly (native runtime), reproducible across versions](https://github.com/github/copilot-cli/issues/4026)** *(Filed today)*  
   *Comments: 0 | 👍: 0*  
   A fresh report of persistent crashes on Windows since May 2026 across four versions (v1.0.15–v1.0.53+). No single reproducible action identified yet—crashes during normal interactive use. This is a high-severity stability concern for Windows users.

4. **[#1504 – [area:theming-accessibility] Add custom theme support](https://github.com/github/copilot-cli/issues/1504)** *(OPEN since Feb 2026)*  
   *Comments: 7 | 👍: 20*  
   The most-upvoted feature request overall. Users want the ability to create, share, and apply custom themes via JSON files. The `/theme` command currently has basic built-in themes, but extensibility is highly desired.

5. **[#1112 – [CLOSED] [more-info-needed] Copilot CLI /login hangs after device code approval in VS Code Dev Container](https://github.com/github/copilot-cli/issues/1112)**  
   *Comments: 8 | 👍: 2*  
   A long-standing authentication bug in Dev Container environments (Debian 12, WSL2 host). Despite being marked closed, the high comment count and updated status suggest the fix may not fully resolve the issue for all users.

6. **[#4019 – [triage] Built-in web_fetch does not work with HTTP proxies](https://github.com/github/copilot-cli/issues/4019)** *(Filed 2026-07-03)*  
   *Comments: 2 | 👍: 0*  
   Blocks `/research` and URL retrieval in corporate environments behind mandatory HTTP proxies. A common enterprise pain point with no current workaround.

7. **[#4016 – [triage] BYOK (COPILOT_PROVIDER_*) still rejected in --acp mode](https://github.com/github/copilot-cli/issues/4016)** *(Filed 2026-07-03)*  
   *Comments: 0 | 👍: 0*  
   Authentication regression: `copilot --acp --stdio` gate checks GitHub login even with valid custom provider config. References previously fixed issues #3048 and #3902, indicating the fix may have regressed.

8. **[#4024 – [triage] Voice mode: all bundled ASR models fail silently](https://github.com/github/copilot-cli/issues/4024)** *(Filed 2026-07-03)*  
   *Comments: 0 | 👍: 0*  
   `/voice` records audio successfully but every transcription returns empty for all three bundled ASR models. Points to a routing bug in the Foundry Local Core for `nemotron_speech`.

9. **[#4025 – [triage] Session recall in a fresh session returns another project's history](https://github.com/github/copilot-cli/issues/4025)** *(Filed 2026-07-03)*  
   *Comments: 0 | 👍: 0*  
   All local sessions share one `session-state.json`, causing cross-project contamination. Recalling recent work in a fresh session returns history from a different project, ordered by global recency.

10. **[#4010 – [area:input-keyboard] "Copied to clipboard" notification is misleading](https://github.com/github/copilot-cli/issues/4010)** *(Filed 2026-07-02)*  
    *Comments: 0 | 👍: 0*  
    On macOS, mouse selection triggers "Copied to clipboard" even when text is not actually copied (requires Shift key). A second right-click pastes incorrectly.

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours.

---

## 5. Feature Request Trends

Based on recent issues, the community is consistently asking for:

- **Custom theming and accessibility** (#1504, #4015): Users want shareable JSON-based custom themes, and the new `/settings theme` command is not persisting selections reliably.
- **Non-interactive/headless operation** (#4011, #4023): Requests for running `/init`, `/agent`, and other commands from shell scripts without TTY—including proper exit codes and silent tool resolution.
- **Configurable terminal behavior** (#1799, #4018): Ability to disable alt-screen views, control scroll speed/sensitivity, and fix mouse selection copy corruption (scrollbar column interference).
- **Plugin/MCP ecosystem improvements** (#3829, #4006): Read-only commands like `/mcp show` and `/plugin list` should execute asynchronously; MCP pagination (`tools/list` nextCursor) is not followed.

---

## 6. Developer Pain Points

The most frequently recurring frustrations in this batch of issues:

1. **Terminal rendering regressions** (#1799, #3570, #4009, #4010, #4018): New TUI features (alt-screen, scrollbar columns, touch scrolling) are breaking basic usability—especially mouse selection, copy-paste, and scroll behaviour.
2. **Authentication & proxy issues** (#1112, #4016, #4019): Login hangs in Dev Containers, BYOK authentication regressions in `--acp` mode, and no HTTP proxy support for web fetch—blocking enterprise and containerized workflows.
3. **Plugin/MCP integration bugs** (#2709, #4006, #4021): Plugin MCP server definitions not merged into runtime config, tools pagination ignored, and marketplace registration state management is contradictory.
4. **Cross-platform crashes and instability** (#4026, #4024): Persistent native runtime crashes on Windows (unresolved for 1.5 months) and silent failures in voice mode speech recognition.
5. **Session state contamination** (#4025): Single global session store causes cross-project history leakage, breaking context isolation.
6. **BYOK model compatibility** (#4012): Reasoning effort flags rejected for custom BYOK models, limiting advanced features.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-04

## Today's Highlights
A busy day with no new releases but substantial community engagement. Three parallel fixes landed for the vexing `bash` tool hang class (Issue #25664), while V2 architecture work continues at pace with multiple PRs settling core runner and MCP lifecycle APIs. Subscription billing issues with Go and free-tier models are generating the most community noise.

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

1. **[#35142 — Insufficient balance in free model](https://github.com/anomalyco/opencode/issues/35142)** 🔥 39 comments
   - **What:** User reports "Insufficient Balance" when using the `DeepSeek V4 Flash Free` model via the Sisyphus Ultraworker.
   - **Why it matters:** Most-commented issue today. Free-tier quota errors are a top churn risk for new users; many may not understand the distinction between provider-level and OpenCode-level credits.
   - **Community:** 3 upvotes, user appears confused by the UI interaction.

2. **[#30086 — High CPU usage in newer versions](https://github.com/anomalyco/opencode/issues/30086)** — 15 comments, 👍 8
   - **What:** User reports dropping from 10 concurrent sessions down to 3 due to CPU spikes after recent updates.
   - **Why it matters:** Performance regression is a blocker for power users running multiple agents. High upvote count indicates broad impact.

3. **[#13626 — Auto-sync projects in web UI from server](https://github.com/anomalyco/opencode/issues/13626)** — 10 comments, 👍 8
   - **What:** Requests that projects appear automatically in the Web UI when opening on a new device.
   - **Why it matters:** Long-running feature request (Feb 2026) with sustained upvotes. Cross-device workflow friction is a key onboarding pain point.

4. **[#26038 — `/exit` in PowerShell closes the terminal](https://github.com/anomalyco/opencode/issues/26038)** — 9 comments
   - **What:** Typing `/exit` in OpenCode while running inside PowerShell exits the entire PowerShell session.
   - **Why it matters:** Dangerous UX bug — users lose their terminal shell unexpectedly. Simple fix but high impact for Windows developers.

5. **[#33696 — GitHub Copilot provider broken](https://github.com/anomalyco/opencode/issues/33696)** — 8 comments, 👍 5
   - **What:** After auth flow, Copilot provider shows `no models found`.
   - **Why it matters:** A major provider integration is completely non-functional for this user. Repeated reports suggest a wider issue.

6. **[#35215 — Go models not working](https://github.com/anomalyco/opencode/issues/35215)** — 4 comments
   - **What:** Paid Go subscription models fail with `Upstream request failed` after latest update.
   - **Why it matters:** Subscription-billed models breaking is a direct revenue and trust issue. A separate thread (#35252, #35191) shows this is affecting multiple users.

7. **[#35258 — Paste not working on Windows terminals](https://github.com/anomalyco/opencode/issues/35258)** — 2 comments
   - **What:** Both right-click paste and Ctrl+V are non-functional in Windows terminal environments.
   - **Why it matters:** Major UX blocker for Windows users. Ctrl+V being ignored is a basic expectation violation.

8. **[#25664 — `pkill -f` causes tool call hang](https://github.com/anomalyco/opencode/issues/25664)** — 2 comments, 👍 5
   - **What:** Sending `pkill -f vim` hangs the bash tool until timeout. The `-f` flag causes fork grandchildren that inherit stdio.
   - **Why it matters:** Classic Node.js subprocess trap. Has three separate fix PRs today (#35245, #35241, #35245), indicating the team is prioritizing it.

9. **[#27474 — TypeError: Failed to fetch](https://github.com/anomalyco/opencode/issues/27474)** — 7 comments
   - **What:** Clicking Explore or agent panels in the desktop app triggers a `TypeError: Failed to fetch` when not navigating to a sub-agent.
   - **Why it matters:** Navigation breakage in the core UI surface — blocks access to agent marketplace/explore functionality.

10. **[#34498 — Respect `disable-model-invocation` in SKILL.md](https://github.com/anomalyco/opencode/issues/34498)** — 4 comments, 👍 3
    - **What:** Request to honor `disable-model-invocation: true` frontmatter, as already supported by Claude Code and Cline.
    - **Why it matters:** Interoperability with existing skill/agent definitions. Low-effort feature that enables portability.

---

## Key PR Progress

1. **[#35247 — Compact shell progress output](https://github.com/anomalyco/opencode/pull/35247)**
   - **What:** Publishes semantic progress snapshots from shell tools and renders them as a TUI progress bar instead of raw redraw spam. Fixes #35246.
   - **Impact:** Reduces terminal noise during long-running bash commands.

2. **[#35235 — Step ledger and classified settlement (V2)](https://github.com/anomalyco/opencode/pull/35235)**
   - **What:** Implements the parked settlement refactor for the V2 runner — behavior-preserving, all 144 runner tests pass.
   - **Impact:** Core architecture work for V2 runner stability.

3. **[#35257 — Match rounded window background (Desktop)](https://github.com/anomalyco/opencode/pull/35257)**
   - **What:** Syncs Electron's native window background with the app theme to prevent light flash during startup on Windows with rounded corners.
   - **Impact:** Polish fix for Windows desktop UX.

4. **[#35232 — Wire execute tool for V2 MCP](https://github.com/anomalyco/opencode/pull/35232)**
   - **What:** Adds a V2 core execute tool backed by CodeMode over MCP tools. Keeps direct MCP tools behind an opt-in flag.
   - **Impact:** Major step toward V2 MCP integration strategy.

5. **[#35222 — Surface task_id in interrupted tool error text](https://github.com/anomalyco/opencode/pull/35222)**
   - **What:** Includes the sub-agent session ID in error text so the LLM can resume aborted sub-agents via the Task tool.
   - **Impact:** Enables agentic recovery from interrupted sub-agents — critical for reliability.

6. **[#35075 — Add oh-my-loop to ecosystem docs](https://github.com/anomalyco/opencode/pull/35075)**
   - **What:** Adds the external loop controller `oh-my-loop` to ecosystem project listings.
   - **Impact:** Growing the plugin/ecosystem surface for external automation.

7. **[#35249 — Restore unfocused composer typing](https://github.com/anomalyco/opencode/pull/35249)**
   - **What:** Fixes a regression where typing wouldn't reach the composer when the terminal panel is open but not focused.
   - **Impact:** Core keyboard input flow fix for TUI.

8. **[#35237 — Enforce 10MB request body limit on Zen API](https://github.com/anomalyco/opencode/pull/35237)**
   - **What:** Caps Zen API request bodies at 10MB with rejection before reading for declared content-length.
   - **Impact:** Resource protection — prevents abuse of console resources via large context payloads.

9. **[#35245 — Bound bash-tool hangs via scope teardown](https://github.com/anomalyco/opencode/pull/35245)**
   - **What:** Fixes the `pkill -f` hang by relying on scope teardown instead of multiple timeouts. Closes #25664.
   - **Impact:** Third fix attempt for this bug — uses a different strategy (scope-level cleanup vs. event waiting).

10. **[#35189 — Render forms and route question tool through form service (V2)](https://github.com/anomalyco/opencode/pull/35189)**
    - **What:** Integrates the V2 Form service into the TUI and migrates the question tool onto it.
    - **Impact:** First client of the new form surface — enables structured input for agent questions in V2.

---

## Feature Request Trends

1. **Cross-device/project state sync** (#13626, recurring) — Users want projects and sessions to follow them between devices without manual setup.
2. **Environment variable expansion in provider config** (#35253, #28527) — Requesting consistent `{env:VAR}` support in headers, options, and config fields.
3. **Ecosystem plugin/tool discovery** (#35251, recurring) — Requests to add community tools to official ecosystem listings (oh-my-loop, mempalace, etc.).
4. **V2 API and lifecycle porting** (#34435, #35018, #35015) — Multiple feature requests from the V2 migration track for MCP lifecycle, session replay, and shell event APIs.
5. **Human-in-the-loop approval gates** (#35239) — Emerging interest in plan review before autonomous execution.

---

## Developer Pain Points

- **Subscription/billing confusion is the #1 pain point.** Multiple threads (#35142, #35215, #35252, #35191) show users confused about free vs. paid model billing, especially with the "Go" subscription tier. Errors like "Insufficient Balance" and "Free Usage Exceeded" for subscribers are a trust crisis.
- **GitHub Copilot provider is unreliable.** Issue #33696 is the latest report of broken Copilot auth — a major third-party integration gap.
- **Windows UX is lagging.** Paste not working (#35258), rounded corners flash (#35257), and PowerShell `/exit` bug (#26038) all point to Windows being the neglected platform.
- **CPU/performance regressions.** Issue #30086 with 8 upvotes suggests recent updates introduced meaningful resource pressure for multi-session users.
- **Cross-provider configuration inconsistency.** Multiple issues (#28527, #35253) highlight frustration that `{env:VAR}` expansion works in `apiKey` but not in `headers` or other config fields.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest – 2026-07-04

## Today's Highlights

Pi sees a major stability push this week: a critical model‑edit compatibility fix connects the new Claude models to the edit tool, Codex WebSocket timeouts are surfaced for a long‑standing reliability gap, and a pending umbrella PR for strict tool‑call argument parsing could reduce wasteful retries across all providers. Meanwhile, Cloudflare Workers AI failures and Windows/ARM64 extension breakage continue to frustrate users.

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

### 1. #4945 – openai‑codex Connection Reliability Issues  
*(73 comments, 30 👍)*  
[GitHub](https://github.com/earendil-works/pi/issues/4945)  
**Why it matters:** The TUI hangs on `Working...` with no error or streamed text. Recovery requires a manual Escape key, burying the aborted turn. With 73 comments, this is the community's loudest reliability concern.  
**Community reaction:** Heated discussion around missing retry logic and lost productivity; several users report "multiple times per day."

---

### 2. #6215 – pi update fails on 0.80.3 due to missing @smithy/node-http-handler@^4.9.1  
*(22 comments)*  
[GitHub](https://github.com/earendil-works/pi/issues/6215)  
**Why it matters:** Self‑update is broken for many users because of a stale pnpm registry metadata cache. No matching version exists in the lockfile.  
**Community reaction:** Frustration that `pi update` silently fails; the PR #6279 adds a pnpm prune hint but doesn't auto‑fix.

---

### 3. #6187 – Pi login hangs in WSL after GitHub Copilot device auth  
*(15 comments)*  
[GitHub](https://github.com/earendil-works/pi/issues/6187)  
**Why it matters:** WSL users see the browser auth succeed but the terminal never detects completion, effectively blocking Copilot onboarding on Windows.  
**Community reaction:** Reports of "works on native Linux but not WSL." No fix yet; waiting for upstream WSL socket‑related changes.

---

### 4. #6278 – New Claude models fail ~20% of edits (extra hallucinated keys)  
*(12 comments)*  
[GitHub](https://github.com/earendil-works/pi/issues/6278)  
**Why it matters:** Claude Sonnet 5, Fable 5, and Opus 4.8 emit `newText_x`, `type`, `in_file`, `closeenough` alongside valid fields. The schema rejects them, breaking edits.  
**Community reaction:** Users calling this "the most disruptive bug of the week." PR #6283 is already merged as a hotfix.

---

### 5. #6157 – Compaction summary should be in the session's language  
*(4 comments)*  
[GitHub](https://github.com/earendil-works/pi/issues/6157)  
**Why it matters:** Non‑English users get compaction summaries with English `## Goal` / `## Progress` headers, breaking immersion.  
**Community reaction:** Light discussion; most agree this is a low‑effort high‑impact UX fix.

---

### 6. #6239 – HTTP 524 (Cloudflare timeout) not treated as retryable  
*(3 comments)*  
[GitHub](https://github.com/earendil-works/pi/issues/6239)  
**Why it matters:** Proxied Anthropic API calls that exceed Cloudflare's 100‑second timeout abort the session instead of retrying.  
**Community reaction:** "This killed a 40‑minute agent session." Closed quickly as "retryable classification needed."

---

### 7. #6259 – `content is not iterable` when reasoning models return null content  
*(3 comments)*  
[GitHub](https://github.com/earendil-works/pi/issues/6259)  
**Why it matters:** Reasoning models (GLM‑5.2 on Fireworks) can emit `reasoning_content` and `tool_calls` but no `content` array. Multiple code paths crash with `TypeError`.  
**Community reaction:** "I get this on every session with GLM." PR #6290 addresses one path, but others remain open.

---

### 8. #6101 – Embedded library: shared extension runtime poisoned across sessions  
*(3 comments)*  
[GitHub](https://github.com/earendil-works/pi/issues/6101)  
**Why it matters:** Library embedders (headless pipelines, UIs) cannot create a second `AgentSession` in the same process without a stale‑ctx crash.  
**Community reaction:** "Blocks our CI pipeline." Marked as `[no-action]` – the team is aware but hasn't started.

---

### 9. #6268 – Codex websocket terminates after 60 minutes; no reconnect  
*(3 comments)*  
[GitHub](https://github.com/earendil-works/pi/issues/6268)  
**Why it matters:** Long‑running agent tasks die silently after exactly 60 minutes. Codex expects a new WebSocket but Pi doesn't retry.  
**Community reaction:** "Lost a code review session at 59 minutes." Linked to #4945.

---

### 10. #6256 – Add Kimi K2.7 to GitHub Copilot model catalog  
*(2 comments, 1 👍)*  
[GitHub](https://github.com/earendil-works/pi/issues/6256)  
**Why it matters:** GitHub Copilot now includes Kimi K2.7, but Pi's model mapping doesn't list it; users must manually override.  
**Community reaction:** Positive; "would love to try K2.7 in my Pi workflow." Requests for a more dynamic model catalog in future.

---

## Key PR Progress

### 1. #6285 – Strict tool‑call argument JSON parsing (OPEN)  
[GitHub](https://github.com/earendil-works/pi/pull/6285)  
**What it does:** Rejects malformed tool‑call argument JSON (truncated or extra commas) instead of silently fudging it. Malformed arguments are preserved on `ToolCall.malformedArguments`.  
**Why it's important:** Eliminates a class of silent failures and makes debugging tool‑call issues much easier. The author warns it's "surprisingly invasive."

---

### 2. #6283 – Strip hallucinated extra keys from edit tool (CLOSED)  
[GitHub](https://github.com/earendil-works/pi/pull/6283)  
**What it does:** Removes `additionalProperties: false` on the inner `edits[]` schema, allowing models to emit extra keys without breaking edits.  
**Why it's important:** Hotfix for #6278; merged same day.

---

### 3. #6266 – Anthropic: strict tool use for the edit tool (CLOSED)  
[GitHub](https://github.com/earendil-works/pi/pull/6266)  
**What it does:** Enables Anthropic's `tool_choice.type: "any"` on the edit tool, forcing Claude to always use it correctly. Reduces edit failures from ~10% to near zero.  
**Why it's important:** A pragmatic workaround to the hallucination pattern without schema changes.

---

### 4. #6294 – Improve pi config add‑ons UX (CLOSED)  
[GitHub](https://github.com/earendil-works/pi/pull/6294)  
**What it does:** Replaces the raw resource list with a package‑level toggle UI, detail pane (scope/source/security), and subagent model‑fit guidance.  
**Why it's important:** Lowers the barrier for managing extensions and helps users avoid weak models.

---

### 5. #6292 – Fix Cloudflare account ID from ambient env (CLOSED)  
[GitHub](https://github.com/earendil-works/pi/pull/6292)  
**What it does:** Resolves `CLOUDFLARE_ACCOUNT_ID` from environment when only a key is provided, fixing the persistent 404 on Workers AI.  
**Why it's important:** The previous fix (ef231c49) only addressed a different layer; this one actually works.

---

### 6. #6290 – Use "(no tool output)" placeholder for empty tool results (CLOSED)  
[GitHub](https://github.com/earendil-works/pi/pull/6290)  
**What it does:** Stops replacing empty tool‑result text with `"(see attached image)"` when no image is attached, preventing hallucinations of fake images.  
**Why it's important:** Affects `grep` with no matches, `find` with no results, etc.

---

### 7. #6273 – Add Zen mode tool call labels (CLOSED)  
[GitHub](https://github.com/earendil-works/pi/pull/6273)  
**What it does:** Introduces a `/settings zenMode` toggle that renders compact, async‑labelled tool call summaries via GPT‑5.4‑mini.  
**Why it's important:** Declutters the TUI for users running long agent sessions.

---

### 8. #6279 – Add pnpm self‑update prune hint (CLOSED)  
[GitHub](https://github.com/earendil-works/pi/pull/6279)  
**What it does:** Displays a `pnpm store prune && pi update` hint when pnpm cache metadata is stale.  
**Why it's important:** Mitigates the #6215 breakage until a proper fix lands.

---

### 9. #6271 – Add GLM API provider (CLOSED)  
[GitHub](https://github.com/earendil-works/pi/pull/6271)  
**What it does:** Adds first‑class support for Z‑AI (`glm`) and Zhipu AI (`glm‑cn`) endpoints using `ZAI_API_KEY`.  
**Why it's important:** Unlocks GLM‑5.2 and other Chinese‑market models for Pi users.

---

### 10. #3799 – Add Azure Cognitive Services as provider (CLOSED, after long review)  
[GitHub](https://github.com/earendil-works/pi/pull/3799)  
**What it does:** Normalises `*.cognitiveservices.azure.com` URLs alongside existing `*.openai.azure.com` endpoints for the Azure provider.  
**Why it's important:** Closes a two‑month‑old gap for enterprise Azure users.

---

## Feature Request Trends

1. **Dynamic model catalog** – Several requests (Kimi K2.7, Claude Sonnet 5, DeepInfra) ask for a provider‑agnostic model list that updates from upstream APIs, rather than hard‑coded `models.ts` files.

2. **Session lifecycle improvements** – Resume without sending a message (#3721), AI‑generated session titles (#6209), and displaying active tools in the footer (#6277) indicate a desire for richer session management.

3. **Security‑first extensions** – Issues #6299 (VM egress defaults) and #6298 (subagent hardening) from a single contributor push for sandboxed, auditable tool execution, likely for multi‑tenant deployments.

4. **Non‑English UX** – Compaction summary language (#6157) is part of a broader demand for internationalisation of Pi's internal prompts and status messages.

5. **Provider parity** – Adding DeepInfra (#6270) and GLM (#6271) shows demand for more competitive pricing and model variety beyond OpenAI/Anthropic/Copilot.

---

## Developer Pain Points

1. **Codex WebSocket flakiness** (#4945, #6268) – the most commented issue by far. Hanging TUI, no errors, and silent 60‑minute disconnects create deep trust issues for long agent sessions.

2. **Model‑schema mismatch** (#6278, #6259, #5501) – Newer models (Claude 5, GLM‑5.2, GPT‑5.5) routinely violate edit‑tool schemas or omit required fields, causing crashes that are hard to diagnose.

3. **Self‑update brittleness** (#6215) – Stale pnpm metadata breaks `pi update` for a growing number of users; the workaround (manual prune) is not obvious.

4. **Windows/WSL ecosystem gaps** (#6187, #6282) – Copilot login hangs and `pi‑intercom` broker failure on Windows/ARM64 highlight a persistent second‑class support for that platform.

5. **Embedded library state leakage** (#6101) – Library consumers cannot create sequential sessions in the same process; this blocks CI pipelines and headless automation use cases.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-04

## Today's Highlights

Shipping activity increased significantly today with the release of **v0.19.6** (stable) and a matching nightly build. The team also cut **cua-driver-rs v0.7.0**, delivering a relative-coordinate fork with signed macOS binaries. On the issue tracker, a **P1 streaming bug** (#6249) and a **subprocess isolation vulnerability** in `transform_data` (#6282) emerged as top-priority concerns, while the community continues to push for richer web-shell visualizations and deeper WeCom integration.

## Releases

- **[v0.19.6](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.6)** (stable)
  - **fix(web-shell):** cut mobile session-switch jank (memoized timeline signature, replay-first dispatch) — PR [#6183](https://github.com/QwenLM/qwen-code/pull/6183)
  - **fix:** resolve macOS seat (details not yet expanded)

- **[v0.19.6-nightly.20260704.5dc2e1501](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.6-nightly.20260704.5dc2e1501)** (nightly)
  - **fix(triage):** strengthen PR gate with batch detection, problem existence check, and red flag patterns by @pomelo-nwu

- **[cua-driver-rs v0.7.0](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.7.0)** — prebuilt binaries (relative-coordinate fork, vendored under `packages/cua-driver`)
  - **macOS:** codesigned + notarized universal binary + `QwenCuaDriver.app`
  - **Linux:** unsigned (x86_64 + arm64, glibc 2.31 floor)
  - **Windows:** unsigned (x86_64 + arm64)

## Hot Issues (10 selected from 27 updated in last 24h)

1. **[#6249 — Streaming tool calls with empty `arguments` silently dropped](https://github.com/QwenLM/qwen-code/issues/6249) [P1, OPEN]**
   - *What:* When an OpenAI-compatible provider streams a tool call whose `function.arguments` is empty string (`""`), the streaming parser drops the entire tool call. If no follow-up fragment arrives, Qwen Code retries with "Model stream ended with empty response text".
   - *Why it matters:* Affects any zero-parameter tool in streaming mode — a P1 regression that causes infinite retry loops.
   - *Community:* 2 comments, no workaround posted yet.

2. **[#6282 — `transform_data` does not enforce subprocess isolation](https://github.com/QwenLM/qwen-code/issues/6282) [P1, OPEN]**
   - *What:* `transform_data` claims to run scripts in an isolated subprocess, but the handler lacks filesystem/network isolation wrappers when launching the transform script.
   - *Why it matters:* A security vulnerability — arbitrary scripts could access the host filesystem or network.
   - *Community:* Fast response; a fix PR was opened shortly after (see PR #6285).

3. **[#6144 — Incorrect context window calculation](https://github.com/QwenLM/qwen-code/issues/6144) [P2, OPEN]**
   - *What:* With `ctx-size = 65536`, Qwen Code miscalculates available tokens for Qwen3-Coder.
   - *Why it matters:* Causes premature context truncation even when the model supports more tokens.
   - *Community:* 6 comments; user supplied detailed `models.ini` config.

4. **[#6265 — `tool_search` invalidates KV-cache on every deferred-tool load](https://github.com/QwenLM/qwen-code/issues/6265) [P2, OPEN]**
   - *What:* When the model calls `tool_search("select:monitor")`, Qwen Code runs `setTools()` which triggers a full KV-cache flush on the LLM server.
   - *Why it matters:* Severely impacts latency and cost for every deferred-tool discovery, especially on Anthropic/Bedrock backends.
   - *Community:* 3 comments; labeled `welcome-pr`.

5. **[#6264 — `/review` skill consumes large token budgets](https://github.com/QwenLM/qwen-code/issues/6264) [P2, OPEN]**
   - *What:* The `/review` command uses excessive tokens per invocation.
   - *Why it matters:* Directly impacts API costs for users relying on code review workflows.
   - *Community:* Screenshots attached showing token counts; user feedback is positive about the skill but concerned about cost.

6. **[#6195 — Add daemon UI support for vision bridge model selection](https://github.com/QwenLM/qwen-code/issues/6195) [P2, CLOSED]**
   - *What:* Request to add a daemon UI for selecting and persisting the vision bridge model (CLI already supports `/model --vision`).
   - *Why it matters:* Finishes the UX gap between CLI and GUI for multi-model vision workflows.
   - *Community:* 6 comments; auto-fix appears to have resolved.

7. **[#6237 — Plan Mode content leakage in subsequent responses](https://github.com/QwenLM/qwen-code/issues/6237) [P2, OPEN]**
   - *What:* After `exit_plan_mode`, plan content submitted as a parameter leaks into following assistant responses.
   - *Why it matters:* A privacy/correctness bug — users see stale plan fragments instead of actual answers.
   - *Community:* Detailed reproduction steps provided.

8. **[#6283 — `settings.env` values silently shadowed by `.env` files and empty-string env vars](https://github.com/QwenLM/qwen-code/issues/6283) [P2, OPEN]**
   - *What:* On restart, `loadEnvironment()` loads `.env` files before `settings.env`, both in no-override mode, plus empty-string env vars block the intended value from `settings.json`.
   - *Why it matters:* API key changes via `/auth` are lost on restart — a frustrating UX that forces re-authentication.
   - *Community:* A fix PR (#6284) was opened in parallel.

9. **[#6218 — Taobao mirror (npmmirror) outdated by 3 versions](https://github.com/QwenLM/qwen-code/issues/6218) [P2, CLOSED]**
   - *What:* `npm install -g @qwen-code/qwen-code` from the Chinese mirror fails to get the latest release.
   - *Why it matters:* Blocks Chinese users from accessing bug fixes and features.
   - *Community:* 5 comments; closed after mirror sync was confirmed.

10. **[#6251 — OAuth authentication failing with 504 Gateway Timeout](https://github.com/QwenLM/qwen-code/issues/6251) [P2, CLOSED]**
    - *What:* Qwen OAuth callback times out after browser authorization completes.
    - *Why it matters:* Completely blocks login for affected users.
    - *Community:* 2 comments; resolved (likely server-side fix).

## Key PR Progress (10 selected from 50 updated in last 24h)

1. **[#6288 — fix(core): treat request timeout of 0 as disabled](https://github.com/QwenLM/qwen-code/pull/6288) [OPEN]**
   - Makes a provider `timeout: 0` (or `QWEN_CODE_API_TIMEOUT_MS=0`) disable the per-request timeout instead of failing immediately.
   - Matches existing `QWEN_STREAM_IDLE_MS=0` semantics.

2. **[#6273 — feat(core): model fallback chain](https://github.com/QwenLM/qwen-code/pull/6273) [OPEN]**
   - Adds configurable fallback models for the main conversation path.
   - When the primary model is unavailable (capacity/availability errors), Qwen Code tries backup models in order.
   - Preserves normal retry behavior per attempt.

3. **[#6242 — feat(web-shell): custom @ mention panel](https://github.com/QwenLM/qwen-code/pull/6242) [OPEN]**
   - Replaces inline @ autocomplete with a multi-level reference panel.
   - Drills into files, active extensions, MCP resources with search and keyboard/mouse support.

4. **[#6279 — feat(web-shell): MCP mentions and iconized @ references](https://github.com/QwenLM/qwen-code/pull/6279) [OPEN]**
   - Adds MCP server mentions to @ completion in both web-shell and CLI.
   - Upgrades web-shell with grouped results, icons, cleaner labels, and inline tag rendering.

5. **[#6232 — feat(web-shell): compact ECharts full data blocks](https://github.com/QwenLM/qwen-code/pull/6232) [OPEN]**
   - Adds `echarts-fulldata` envelope for inline datasets injected into ECharts options.
   - Supports host-resolved dataset refs for large artifacts and reuses parsed data for table view.

6. **[#6272 — feat(web-shell): daemon status dashboard](https://github.com/QwenLM/qwen-code/pull/6272) [CLOSED/merged]**
   - Adds a live daemon status page backed by `GET /daemon/status` (added in #5174).
   - Shows health badge, triage issues list, daemon info, sessions, and rate-limiting cards. Opened via a new pulse-icon button.

7. **[#6285 — fix(desktop): enforce `transform_data` isolation](https://github.com/QwenLM/qwen-code/pull/6285) [OPEN]**
   - Direct response to security issue #6282.
   - Runs transform scripts through existing session-tool isolation wrappers (network + filesystem write isolation).

8. **[#6224 — feat(channels): WeCom intelligent robot channel](https://github.com/QwenLM/qwen-code/pull/6224) [OPEN]**
   - Rewrites WeCom channel to use WeCom intelligent robot API mode via WebSocket SDK.
   - Users only need Bot ID and Secret — no custom application callback required.

9. **[#6139 — perf(core): memoize collectAvailableSkillEntries](https://github.com/QwenLM/qwen-code/pull/6139) [OPEN]**
   - Caches `collectAvailableSkillEntries()` with cache invalidation hooks, eliminating 7+ redundant disk scans at startup.
   - Affects SkillTool, SkillCommandLoader, and BundledSkillLoader.

10. **[#6238 — fix(core): fresh per-turn tool-call budget for Stop-hook continuations](https://github.com/QwenLM/qwen-code/pull/6238) [OPEN]**
    - Each blocking Stop-hook continuation (e.g., `/goal` iteration) now gets its own tool-call budget.
    - Makes the cap configurable, matching the IDE (ACP) path behavior.

## Feature Request Trends

- **Web-shell visual enhancements** — Clear demand for richer in-chart rendering (ECharts, pluggable chart blocks), improved @ mention panels with MCP and file references, and a daemon status dashboard.
- **Channel integrations** — WeCom intelligent robot support is the strongest feature request this week; users want native enterprise communication channels.
- **Model management** — Vision bridge model selection in the daemon UI, fallback chains, and better multi-model orchestration are recurring themes.
- **Caching and performance** — KV-cache preservation during tool invocations, token budget improvements, and memoization of expensive startup operations.
- **Tool isolation** — Security-conscious requests for sandboxed execution, particularly around `transform_data` and subprocess management.

## Developer Pain Points

- **Streaming reliability** — Empty `arguments` in tool calls causing silent drops (#6249) and "empty response text" retry loops (#3804, #6249) are recurring frustrations.
- **Token waste** — `/review` consuming excessive tokens (#6264), edit tool summaries being repeatedly appended (#5894), and KV-cache invalidation on deferred-tool loads (#6265) all increase API costs.
- **Configuration and authentication** — API key changes lost on restart (#6283), OAuth 504 timeouts (#6251), and quickpick focus issues during `/auth` (#6230) degrade the initial setup experience.
- **Installation friction** — Chinese mirror lagging 3 versions behind (#6218) and npm package size concerns (#6231) affect non-English markets.
- **Context management** — Incorrect context window calculation (#6144) and plan mode content leakage (#6237) undermine user confidence in model interactions.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-04

## Today's Highlights

The CodeWhale project (formerly DeepSeek TUI) is in the final stretch of the v0.8.67 "Constitution-first" release cycle, with 10+ closed issues today targeting release-blocker surfaces. A major perf improvement lands: composer input text wrapping was reduced from 5 redundant passes to 1 per frame. Community contributions around per-sub-agent provider routing and dynamic MCP server infrastructure continue to gain traction, signaling strong interest in modular agent orchestration.

## Releases

No new releases in the last 24 hours. The team is closing RC-blocker issues for v0.8.67 (e.g., #4007, #4008, #4009) ahead of ship.

## Hot Issues

1. **[#3965 — Per-sub-agent provider assignment + LM Studio support](https://github.com/Hmbown/CodeWhale/issues/3965)**  
   *7 comments, open*  
   A power user proposes explicit sub-agent-to-provider routing so e.g., `explore` runs on local LM Studio while `generate` uses DeepSeek. High engagement, already spawned PR #3969. Signals growing demand for heterogeneous provider backends.

2. **[#3275 — CodeWhale over-extending scope and self-looping](https://github.com/Hmbown/CodeWhale/issues/3275)**  
   *17 comments, open*  
   Regression complaint: agent proposes/answers/executes without user confirmation. Top-commented issue. Concerns around agent autonomy and user control remain the community's highest-touch pain point.

3. **[#3793 — Guided localized constitution creator](https://github.com/Hmbown/CodeWhale/issues/3793)**  
   *16 comments, open*  
   Proposes replacing blank prompt editor with language-first, guided flow. Core UX direction for v0.8.67, reflecting the team's "Constitution-first" philosophy.

4. **[#3406 — Runtime posture card with constitution boundary](https://github.com/Hmbown/CodeWhale/issues/3406)**  
   *16 comments, closed*  
   Security posture selector (ask-first/normal/high-trust) must not be silently mutable by constitution files. Crucial security boundary work.

5. **[#3792 — First-run onboarding feels like starting CodeWhale, not editing config](https://github.com/Hmbown/CodeWhale/issues/3792)**  
   *8 comments, open*  
   UX design for non-config-file-first onboarding. Language-first, then constitution, then providers. Aims to reduce perceived complexity.

6. **[#3983 — Make current Work state model-visible on parent turns](https://github.com/Hmbown/CodeWhale/issues/3983)**  
   *1 comment, open*  
   Harden the Work surface (checklist/plan) visibility for sub-agents. Important for orchestrated workflows in v0.8.68.

7. **[#3980 — Structural code search and AST-backed edit previews](https://github.com/Hmbown/CodeWhale/issues/3980)**  
   *1 comment, open*  
   Adds AST-backed tools for supported languages. Needed for safe refactors. Slated for v0.8.68.

8. **[#3981 — Debugger protocol surface for breakpoints, stack, variables](https://github.com/Hmbown/CodeWhale/issues/3981)**  
   *1 comment, open*  
   Agents would get DAP integration. Early-stage but high-signal for developer tooling ambitions.

9. **[#3976 — Seed project-scoped recall ahead of full backend](https://github.com/Hmbown/CodeWhale/issues/3976)**  
   *1 comment, open*  
   Lightweight per-project memory seed. Bridge until external-memory backend lands.

10. **[#4009 — Agent sidebar does not reflect cancellations](https://github.com/Hmbown/CodeWhale/issues/4009)**  
    *0 comments, but closed as RC-blocker*  
    Dogfooding found: cancelled sub-agents don't visually update; sidebar lacks interactivity. Fixed in PR #4023.

## Key PR Progress

1. **[#3967 — Avoid redundant composer input wrapping per frame](https://github.com/Hmbown/CodeWhale/pull/3967)**  
   *Open*  
   Fixes #3909: eliminates 4 redundant wrap calls per render frame. Direct perf win for TUI responsiveness.

2. **[#4025 — CI: light-classify inert scripts, stop allocating macOS/Windows for light PRs](https://github.com/Hmbown/CodeWhale/pull/4025)**  
   *Open*  
   Prevents heavy CI for trivial script-only changes. Saves ~22 min of runner time per light PR.

3. **[#4023 — Harden v0.8.67 RC surfaces](https://github.com/Hmbown/CodeWhale/pull/4023)**  
   *Closed*  
   Fixes 10+ RC-blocker issues: stream timeout config, plugin paths, provider routing, OAuth messaging, cost display, URL clickability, subagent authority policy, sidebar cancellation state.

4. **[#3969 — Per-sub-agent provider routing](https://github.com/Hmbown/CodeWhale/pull/3969)**  
   *Open*  
   Community PR implementing #3965. Adds `[subagents.routes.<role>]` config table. Pin sub-agent roles to specific provider+model combos.

5. **[#3869 + #3866 — Dynamic MCP server infrastructure](https://github.com/Hmbown/CodeWhale/pull/3869)**  
   *Open*  
   Two PRs from bistack: `McpPool` dynamic server support + `start_mcp_server` tool. Enables LLM to start MCP servers at runtime (stdio/HTTP).

6. **[#3972 — Allow longer quiet reasoning waits](https://github.com/Hmbown/CodeWhale/pull/3972)**  
   *Closed*  
   Raises streamed-response idle timeout from 300s to 900s. Fixes false timeouts on slow reasoning models.

7. **[#3781 — OpenCode Zen provider](https://github.com/Hmbown/CodeWhale/pull/3781)**  
   *Open*  
   Adds a new provider integration. Community contribution that widens model choice.

8. **[#3762 — Redesign homepage with trust strip, GitHub nav, mirror footer](https://github.com/Hmbown/CodeWhale/pull/3762)**  
   *Open*  
   Web presence refresh: MIT license, local-first, security model trust strip. Adds CN mirror/provenance links.

9. **[#3780 — Expose context compaction gates](https://github.com/Hmbown/CodeWhale/pull/3780)**  
   *Open*  
   Adds engine-level config for replacement compaction and Flash seam manager. More granular context management.

10. **[#3785 — Localize Hotbar setup wizard](https://github.com/Hmbown/CodeWhale/pull/3785)**  
    *Open*  
    Translates Hotbar setup chrome and built-in action names. Makes non-English setup viable.

## Feature Request Trends

1. **Multi-provider routing per agent/sub-agent**: Users want fine-grained control over which model handles which task (local LM Studio for cheap tasks, cloud for heavy generation). #3965, #3969.

2. **Structural code tools**: AST-backed search, edit previews, and debugger protocol surface. Developers want agent-assisted refactoring with syntax awareness. #3980, #3981.

3. **Dynamic MCP server lifecycle**: Starting MCP servers from conversation context. Community PR momentum suggests strong interest in live tool extension. #3866, #3869.

4. **Per-project memory/context**: Project-scoped recall separate from user-global memory. Lightweight seed before full external memory backend. #3976.

5. **Localization**: Constitution creation, setup wizard, Hotbar — users want full non-English workflows. #3793, #3785.

## Developer Pain Points

1. **Agent autonomy/scope creep**: #3275 remains the highest-comment issue. Agents self-looping, proposing then executing without user confirmation. The "constitution" framework is the team's response, but community frustration persists.

2. **Configuration complexity**: Multiple issues cite users feeling they are "editing config files" rather than "using the tool." #3792, #3793 — the guided setup wizard is the antidote.

3. **Provider/picker truncation bugs**: Half a dozen UX issues (#3988, #3989, #3992, #3994) report mid-word truncation in menus, pickers, and status lines. Indicates inadequate testing at varying terminal widths.

4. **CI waste and slow builds**: #4025 documents heavy CI running on trivial changes. 22+ minutes of macOS/Windows runner time for a script-only correction. Developer tooling improvement welcomed.

5. **Update prompt persistency**: #3961 — users don't notice new versions exist. In-app notification is weak. Needs persistent, actionable upgrade prompts.

6. **Memory-sensitive subagent failures**: #3884 — sub-agents fail under Codex with generic "Responses API request failed". Blocks orchestrated workflows. Partially addressed in #3972 (timeout hardening).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*