# AI CLI Tools Community Digest 2026-06-26

> Generated: 2026-06-26 00:40 UTC | Tools covered: 9

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

# AI CLI Tools Cross-Tool Comparison Report

## 1. Ecosystem Overview

The AI CLI tools ecosystem on June 26, 2026, exhibits a pattern of intense, divergent evolution. Major tools are simultaneously converging on shared competencies—notably cross-platform stability and context-management controls—while diverging sharply in architectural philosophy. Rust-native daemons (Codex, Pi) challenge Node.js/TypeScript incumbents (Gemini CLI, Copilot CLI), while portable Go binaries (OpenCode) and Bun-based distributions (CodeWhale) target different deployment constraints. Three systemic concerns unite nearly every community: runaway token/quota consumption, fragile MCP integrations, and context loss after compaction.

## 2. Activity Comparison

| Tool | Issues Touched | PRs Touched | Releases in 24h |
|---|---|---|---|
| **Claude Code** | 10 Hot + lifecycle PR | 1 | v2.1.193 |
| **OpenAI Codex** | 10 Hot | 10 | rust-v0.142.2, codex-zsh-v0.1.0 |
| **Gemini CLI** | 10 Hot | 10 | v0.49.0, v0.50.0-preview.1 |
| **GitHub Copilot CLI** | 10 Hot | 1 | None |
| **Kimi Code CLI** | 2 Hot | 0 | None |
| **OpenCode** | 10 Hot | 10 | v1.17.11 |
| **Pi** | 10 Hot | 11 | None |
| **Qwen Code** | 10 Hot | 10 | v0.19.2-nightly |
| **DeepSeek TUI (CodeWhale)** | 10 Hot | 10 | v0.8.65 (rebrand) |

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|---|---|---|
| **Token/Quota Governance** | Claude Code, Codex, Gemini CLI, OpenCode, Qwen Code | Auto-compact loop prevention, session-resume warnings, quota over-counting fixes, configurable compaction thresholds |
| **MCP Reliability** | Codex, Gemini CLI, OpenCode, Pi, Kimi Code, Copilot CLI | OAuth token refresh, tool discovery/pagination, timeout splitting, cross-server resource isolation, npm marketplace plugins |
| **Context Management** | Claude Code, Codex, OpenCode, Qwen Code, Pi | Post-compaction context loss, `/compact` inflating instead of compressing, reasoning token visibility, AST-aware reads |
| **Cross-Platform Stability** | Claude Code (macOS), Copilot CLI (Windows/WSL2), OpenCode (Windows), Pi (Windows), CodeWhale (Windows), Kimi Code (Windows) | OS-specific rendering bugs, shell detection, env-var inheritance, clipboard, segfaults |
| **Permission/Approval UX** | Claude Code, Copilot CLI, CodeWhale, OpenCode | Silent hook rewrites, YOLO mode consistency, bypass-permission toggling, plan-mode scoping |
| **Session Management** | Copilot CLI, Qwen Code, OpenCode, Pi, Claude Code | Reliable resumption, snapshot/revert, autopilot persistence, collapsed-session previews |
| **Subagent Observability** | Claude Code, Gemini CLI, Pi, CodeWhale | Dispatch-time labels, trajectory sharing, false-success reporting, hang detection |

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|---|---|---|---|
| **Claude Code** | Full-featured agentic CLI with IDE integrations | Professional developers, teams | TypeScript/Node.js, auto-mode classifier, extensive permission system |
| **OpenAI Codex** | Rust-native daemon with MCP Apps prototype | Performance-focused developers, MCP power users | Rust, streamable-HTTP MCP servers, paginated history architecture |
| **Gemini CLI** | AST-aware tooling, Vertex AI integration | Google Cloud ecosystem users | TypeScript, tool registry, Cloud Run webhook integration |
| **GitHub Copilot CLI** | Tight GitHub/IDE integration, enterprise policy | GitHub ecosystem, enterprise admins | .NET-based, org-level settings, AIC quota management |
| **Kimi Code CLI** | Minimalist, MCP scalability | Lightweight users, MCP-heavy workflows | Undisclosed stack, focus on tool pagination |
| **OpenCode** | Bun-based portability, session snapshots | Developers wanting fast, portable CLI | Bun runtime, session revert, plan-mode permissions |
| **Pi** | Headless RPC/SDK engine, orchestration | Integrators, multi-instance operators | TypeScript, IPC-based orchestrator, embeddable engine |
| **Qwen Code** | Voice dictation, extension ecosystem | Multilingual teams, desktop users | Desktop app, ASR/voice, team memory tiering |
| **DeepSeek TUI (CodeWhale)** | Hotbar UX, native runtime migration | Gamers/MMO-style UX, Rust advocates | Transitioning to Rust, 8-slot action bar, Fleet model routing |

## 5. Community Momentum & Maturity

**Most Active (by engagement volume):** OpenAI Codex (302-reaction quota crisis), Claude Code (63-comment permission bypass bug), Pi (71-comment provider hang). These communities are large, vocal, and filing issues at high velocity.

**Rapidly Iterating:** OpenCode (10 PRs, session snapshots shipped), DeepSeek TUI (10 PRs, Hotbar MVP + rebrand), Gemini CLI (10 PRs, tool registry + thought leakage fix), Qwen Code (10 PRs, voice dictation + extension creator).

**Maturing but Slow-Moving:** Copilot CLI (no releases, 1 PR), Kimi Code CLI (2 issues, 0 PRs). These repositories show either maintainer bandwidth constraints or pre-release quiet periods.

**High Churn Risk:** Codex's quota accounting crisis and Claude Code's billing misrouting bugs represent trust-threatening issues that could drive user churn if unresolved.

## 6. Trend Signals

1. **Token Governance as Table Stakes** — Users now expect first-class controls against runaway spending. Tools without auto-compact safeguards or transparent quota accounting face immediate community backlash.

2. **MCP as the New Plugin Battleground** — Every major tool is investing in MCP server integration, but reliability (OAuth refresh, timeout handling, tool discovery at scale) remains unsolved. The winners will be those that make MCP "just work."

3. **Rust/Native Performance** — Codex's Rust foundation and CodeWhale's planned Rust migration signal that developers increasingly reject Node.js cold-start latency for long-running agent sessions.

4. **Session Persistence & Recovery** — Session snapshots (OpenCode), `/undo` requests (Codex, 296 👍), and reliable resumption (Copilot CLI) reflect demand for safety nets against destructive or lost work.

5. **Enterprise Readiness** — Org-level policy (Copilot CLI), team memory tiering (Qwen Code), and multi-account OAuth (OpenCode) show that teams want centralized management, not just individual productivity.

6. **Voice & Multimodal Input** — Qwen Code's voice dictation and Copilot CLI's voice mode indicate that text-only interaction is becoming a baseline, not a ceiling.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

**Data as of:** 2026-06-26 | **Source:** [anthropics/skills](https://github.com/anthropics/skills)

---

## 1. Top Skills Ranking

Ranked by community attention (comments, reactions, and update recency):

| # | Skill / PR | Focus | Status | Key Discussion |
|---|---|---|---|---|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** fix(skill-creator): run_eval.py always reports 0% recall | skill-creator eval pipeline | OPEN | 10+ independent reproductions of `recall=0%` bug; affects `run_loop.py` and `improve_description.py`. Most urgent infrastructure fix. |
| 2 | **[#1323](https://github.com/anthropics/skills/pull/1323)** fix(skill-creator): run_eval trigger detection misses real skill name | skill-creator eval pipeline | OPEN | Root-cause fix for trigger detection logic; directly unblocks description optimization. |
| 3 | **[#514](https://github.com/anthropics/skills/pull/514)** Add document-typography skill | Document quality control | OPEN | Prevents orphan word wrap, widow paragraphs, numbering misalignment in AI-generated documents. High user pain point. |
| 4 | **[#486](https://github.com/anthropics/skills/pull/486)** Add ODT skill | OpenDocument format support | OPEN | Create, fill, read, convert .odt/.ods files. Fills gap in open-source document format coverage. |
| 5 | **[#360](https://github.com/anthropics/skills/pull/360)** Add AppDeploy skill | Full-stack webapp deployment | OPEN | Deploy and manage web apps via AppDeploy.ai directly from Claude. |
| 6 | **[#723](https://github.com/anthropics/skills/pull/723)** Add testing-patterns skill | Testing best practices | OPEN | Comprehensive testing stack: unit, React component, testing philosophy. |
| 7 | **[#147](https://github.com/anthropics/skills/pull/147)** Add codebase-inventory-audit skill | Codebase cleanup & audit | OPEN | 10-step workflow producing CODEBASE-STATUS.md; identifies orphaned code, unused files, doc gaps. |
| 8 | **[#154](https://github.com/anthropics/skills/pull/154)** Add shodh-memory skill | Persistent agent memory | OPEN | Cross-conversation context retention via proactive memory surfacing. |

---

## 2. Community Demand Trends

Distilled from top Issues by engagement:

- **Enterprise & Org-Wide Sharing** — [#228](https://github.com/anthropics/skills/issues/228) (14 comments, 👍7): Strong demand for org-level skill distribution in Claude.ai, replacing manual file-sharing workflows.

- **Security & Trust Boundaries** — [#492](https://github.com/anthropics/skills/issues/492) (19 comments, 👍2): Community skills under `anthropic/` namespace create trust boundary abuse; needs namespace verification or signing.

- **Agent Governance & Safety** — [#412](https://github.com/anthropics/skills/issues/412): Proposal for agent-governance skill covering policy enforcement, threat detection, trust scoring, audit trails.

- **Cross-Platform Compatibility** — [#1061](https://github.com/anthropics/skills/issues/1061), [#1169](https://github.com/anthropics/skills/issues/1169): Windows compatibility for skill-creator scripts is a persistent blocker for Windows-based developers.

- **MCP Integration** — [#16](https://github.com/anthropics/skills/issues/16): Request to expose Skills as MCPs for standardized API signaling.

- **Memory & Context Persistence** — [#1329](https://github.com/anthropics/skills/issues/1329): Compact symbolic notation for long-running agent state to reduce context window pressure.

---

## 3. High-Potential Pending Skills

Active PRs with recent activity likely to land soon:

| PR | Why It Matters |
|---|---|
| **[#1323](https://github.com/anthropics/skills/pull/1323)** | Fixes critical eval pipeline bug; unblocks all future skill description optimization. |
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | Comprehensive fix for `run_eval.py` Windows + trigger detection; addresses #556. |
| **[#1099](https://github.com/anthropics/skills/pull/1099)** | Windows subprocess pipe reading fix; prerequisite for Windows users. |
| **[#1050](https://github.com/anthropics/skills/pull/1050)** | Windows `claude.cmd` PATHEXT + encoding fixes; 1-line changes, high impact. |
| **[#514](https://github.com/anthropics/skills/pull/514)** | Document typography skill; addresses universal pain point in AI-generated documents. |
| **[#361](https://github.com/anthropics/skills/pull/361)** | YAML special character validation; prevents silent parsing failures in skill descriptions. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is reliability of the skill-creator evaluation pipeline** — multiple independent reports of `recall=0%` bugs, Windows incompatibilities, and YAML parsing failures reveal that **infrastructure trust is the gating factor for all future skill quality improvements**, and until `run_eval.py` and `run_loop.py` work reliably across platforms, the entire description-optimization feedback loop remains broken.

---

*Report generated by OWL — ZOO company*

---

# Claude Code Community Digest — June 26, 2026

---

## Today's Highlights

A new patch release (v2.1.193) landed with auto-mode classifier improvements and additional bash command routing through the safety classifier. The community continues to focus heavily on **permission mode issues on macOS** (#61415), **auto-compact/token-waste concerns** (#51088, #64192), and **billing/subscription misrouting bugs** (#71476) that have left some Team plan users on API credit billing. A long-standing pain point — repeated `TaskCreate` system-reminders — continues to generate multiple tracking issues.

---

## Releases

**[v2.1.193](https://github.com/anthropics/claude-code/releases/tag/v2.1.193)**

- Added `autoMode.classifyAllShell` setting to route **all** Bash/PowerShell commands through the auto-mode classifier (previously only arbitrary-code-execution patterns were classified).
- Added auto-mode denial reasons to the transcript, denial toast, and `/permissions` recent-denials list, making blocked actions significantly more transparent.
- Contribution by community member **@JacksonKearl**.

---

## Hot Issues

### 1. [#61415 — Bypass Permissions mode can't be enabled on macOS (63 comments)](https://github.com/anthropics/claude-code/issues/61415)
The highest-engagement open issue. macOS users in Bypass Permissions mode are silently reverted to "Accept Edits" with an unhelpful "Permission mode couldn't be changed" message. **24 👍** — one of the most-upvoted active issues. Likely regression on recent macOS builds.

### 2. [#61869 — Anthropic API Error: Usage credits required for 1M context with opus-plan (61 comments)](https://github.com/anthropics/claude-code/issues/61869)
Closed as a duplicate, but extremely active. Switching to opus-plan with 1M context triggers a "Usage credits required" error when the account lacks enabled usage credits, but the error message doesn't explain the context window relationship. **16 👍**.

### 3. [#39636 — Cowork VM guest kernel never boots on Snapdragon X Plus ARM64 (29 comments)](https://github.com/anthropics/claude-code/issues/39636)
ARM64 on Windows is still a friction point for Cowork. Snapdragon X Plus users get connection timeouts every attempt. Open since March with ongoing investigation.

### 4. [#51088 — Auto-Compact enters infinite loop, excessive token consumption (7 comments)](https://github.com/anthropics/claude-code/issues/51088)
Closed as stale. A session's auto-compact looped 15 times overnight until tokens were exhausted. Highlights the cost impact of runaway agentic behaviour on fixed-token plans.

### 5. [#71478 — VS Code extension resumes huge sessions without warning (4 comments)](https://github.com/anthropics/claude-code/issues/71478)
Fresh issue. The VS Code extension silently resumes large historical sessions, causing rapid max-usage exhaustion with no user prompt or warning. High relevance for VS Code extension users.

### 6. [#54179 — Desktop GUI SSH: multiple sessions on same host invalidate auth tokens (3 comments)](https://github.com/anthropics/claude-code/issues/54179)
macOS Desktop app users trying to run Claude Code on multiple remote hosts via GUI SSH find that the second session invalidates the first session's auth token, hanging both sessions.

### 7. [#70958 — Sub-agent API 401 reported as "Request interrupted by user" (2 comments)](https://github.com/anthropics/claude-code/issues/70958)
Auth expiry in sub-agents produces a misleading error message that blames user cancellation rather than expired credentials, making debugging auth issues unnecessarily difficult.

### 8. [#66027 — @import in path-scoped rule files ignores frontmatter scope (2 comments)](https://github.com/anthropics/claude-code/issues/66027)
Rule file `@import` directives load eagerly rather than respecting path conditions, causing unintended rule application.

### 9. [#71476 — Team subscription billing routed to API credits after forced re-login (1 comment)](https://github.com/anthropics/claude-code/issues/71476)
Fresh concern: a forced console re-login caused a Team plan organization to drain API credit balance instead of Team allowance. Organization admins should monitor billing dashboards.

### 10. [#70267 — Opus model "lobotomized and slow" (4 comments, duplicate)](https://github.com/anthropics/claude-code/issues/70267)
4 👍 — some users report severely degraded Opus performance over recent days. Closed as duplicate but may indicate a broader capacity/quality concern.

---

## Key PR Progress

Only one PR was updated in the last 24 hours:

### [#63686 — Bump stale and autoclose timeouts from 14 to 90 days (Closed)](https://github.com/anthropics/claude-code/pull/63686)
Edited by **@caseyWebb**, this lifecycle change extends the `stale` and `autoclose` timeouts in `scripts/issue-lifecycle.ts` from **14 days to 90 days**. This means unmarked issues will wait 90 days before being flagged stale (and another 90 days after that before auto-closing). A signal that the team is reducing issue-tracker churn for slower-moving investigations.

---

## Feature Request Trends

**1. Permission system usability (multiple issues)**
#61415, #71463 — Users want smarter permission mode toggling on macOS, and fewer false-positive safety blocks (e.g., network audits on `bind` operations).

**2. Token-waste governance**
#51088, #61835, #64192, #62323 — Recurring community desire for first-class controls against redundant token spending, including auto-compact loop prevention, smarter context deduplication, and configurable nag suppression for `TaskCreate` reminders.

**3. Localization & accessibility**
#71479 (Japanese UI localization), #71470 (screen-reader keyboard landmarks) — Emerging requests to make the Desktop app usable for non-English-speaking and visually impaired users.

**4. Sub-agent diagnostics & labelling**
#71292 (stable dispatch-time labels), #70958 (better auth-error propagation) — Sub-agent debugging tooling is maturing; users want clearer identity and error reporting.

**5. IDE integrations stability**
#71455 (IntelliJ EDT slow-operation regression), #71464 (forked skill output not rendering) — Plugin ecosystem users want parity with the CLI experience.

---

## Developer Pain Points

| Pain Point | Frequency | Representative Issues |
|---|---|---|
| **Hidden token waste** — auto-compact loops, session resumption, redundant reads | High | #51088, #71478, #61835, #64192 |
| **Permission mode issues on macOS** — reverts silently, no bypass | High | #61415, #71463, #67576 |
| **Misleading error messages** — "user interrupted," "credits required" when root causes differ | Medium | #70958, #61869, #62218 |
| **Nagging system-reminders** — `TaskCreate` reminder fires despite CLAUDE.md override | Medium | #60323, #62323, #64192 |
| **ARM64 on Windows instability** — Cowork kernel never boots on Snapdragon X Plus | Medium | #39636 |
| **TUI regressions** — mouse input broken on Terminal.app, tmux transcript not persisted | Medium | #71465, #70219 |
| **Billing/subscription confusion** — Team plan users routed to API credits | Low (impact: high) | #71476 |
| **Plugin ecosystem gaps** — IntelliJ regressions, VS Code session resume issues | Low-Medium | #71455, #71455, #71464 |

**Quote of the day:**
> *"Tried fleet mode. It spent all day burning tokens (hit limit on 100/month subscription and 60% on next session). The task was very straightforward — audit the repo and ensure each var is typed."*
> — @sethdev1152 on [Issue #71461](https://github.com/anthropics/claude-code/issues/71461)

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-26

## 1. Today's Highlights

The Codex team landed a new stable CLI release (**rust-v0.142.2**) with MCP tool search and improved macOS proxy support, while the **0.143.0-alpha** train continued with more frequent pre-releases. On the community side, the most upvoted issue of the day remains the **GPT-5.5 rate-limit regression** (#28879), which has now accumulated 152 comments and 302 reactions as users report budget consumption jumping 10–20× since mid-June. Two new reports of similar quota over-counting (#29955, #30002, #30086) are gaining traction, suggesting a systemic accounting issue post-reset. Meanwhile, the PR queue is heavy on internal architecture work — a new MCP Apps prototype, app-server analytics, and a consolidated CI gate.

---

## 2. Releases

**rust-v0.142.2** (latest stable)
- MCP tools now use **tool search by default** when supported by the server, improving tool discovery while preserving compatibility with older models and providers. ([#29486](https://github.com/openai/codex/pull/29486))
- macOS authentication clients can now honor **system proxy, PAC, and WPAD** settings when `respect_system_proxy` is enabled. ([#26709](https://github.com/openai/codex/pull/26709))

**codex-zsh-v0.1.0**
- First release of the Zsh companion tool.

**rust-v0.143.0-alpha.25 / .22 / .21 / .16 / previous**
- Rapid-fire alpha releases; no detailed public changelogs posted.

---

## 3. Hot Issues

### 🔴 Critical — Account & Data Loss Scenarios

**1. [#28879](https://github.com/openai/codex/issues/28879) — GPT-5.5 budget drains 10–20× faster on Plus plan** *(152 💬 · 👍 302)* (OPEN)
The single most-discussed issue today. Users report that since ~June 16, Codex token consumption per prompt skyrocketed, burning the 5-hour Plus-plan allocation in only 2–3 prompts. The reporter provides log evidence showing `limit-% consumed per token` increased roughly an order of magnitude. Community reaction is intense — this effectively breaks the Plus plan's Codex tier.

**2. [#29955](https://github.com/openai/codex/issues/29955) — Quota drained instantly: 100 credits gone after 1 message** *(23 💬 · 👍 4)* (OPEN)
A brand-new report echoing #28879: Pro subscription user reports quota went from 100% to 0% after a single prompt. This accelerates the pattern — from gradual overcounting to near-instant quota wipeouts. Worth monitoring closely today.

### 🟠 High Attention — Workflow Impact

**3. [#30002](https://github.com/openai/codex/issues/30002) — Server-side quota accounting over-reports after 5h reset** *(19 💬 · 👍 4)* (OPEN)
Pro user hit `usage_limit_reached` in **~41 minutes** on ~1.35M tokens of actual usage, compared to the earlier same-day session that lasted the full 5-hour window on ~156M tokens. The correlation suggests the post-reset accounting window is misconfigured.

**4. [#30086](https://github.com/openai/codex/issues/30086) — Codex Pro quota draining abnormally; local logs show `needs_follow_up` token loops** *(3 💬 · 👍 4)* (OPEN)
Another quota report with a new detail: local logs show repeated `model_needs_follow_up` token loops, suggesting the model is generating invisible follow-up tokens that count against quota without producing visible output.

**5. [#25749](https://github.com/openai/codex/issues/25749) — Codex requires verification of inaccessible legacy phone number** *(64 💬 · 👍 38)* (OPEN)
Long-running auth issue: users who signed up with a phone number they can no longer access are locked out of Codex despite having valid Google OAuth and MFA on their OpenAI account. No recovery path exists. 64 comments indicate this affects many people.

**6. [#9203](https://github.com/openai/codex/issues/9203) — Please make `/undo` back** *(50 💬 · 👍 296)* (OPEN)
The most upvoted feature request in the repo. Users want the `/undo` command restored after Codex accidentally deletes untracked/uncommitted files. 296 👍 signals this is a near-universal pain point.

**7. [#25719](https://github.com/openai/codex/issues/25719) — macOS Desktop repeatedly triggers `syspolicyd` / `trustd` CPU and memory runaway** *(34 💬 · 👍 54)* (OPEN)
Codex Desktop on macOS is causing kernel-level processes to spike CPU and memory, degrading the entire system. Multiple reports (#28071 is a related duplicate) confirm this is a persistent issue.

**8. [#28978](https://github.com/openai/codex/issues/28978) — Desktop app 26.616: new conversations fail with "missing field `inputSchema`"** *(25 💬 · 👍 30)* (OPEN)
Regression in the latest desktop build: new conversations fail with an MCP validation error. Notably, the CLI with the same config works fine — pointing to a desktop-specific MCP handling bug.

**9. [#17265](https://github.com/openai/codex/issues/17265) — Codex does not auto-refresh routed MCP OAuth tokens** *(19 💬 · 👍 39)* (OPEN)
Codex stores `refresh_token` for routed MCP servers but never uses it. Once the access token expires, all MCP tool calls fail silently. This breaks any long-running session that depends on OAuth-authenticated MCP servers.

**10. [#5957](https://github.com/openai/codex/issues/5957) — Auto compaction causes GPT-5-Codex to lose the plot** *(31 💬 · 👍 9)* (OPEN)
After auto-compaction, GPT-5-Codex forgets it was mid-task, forgets which files it edited, and stops working. This is a critical reliability issue for long coding sessions on the Enterprise plan.

---

## 4. Key PR Progress

**1. [#30000](https://github.com/openai/codex/pull/30000) — Prototype Codex Apps as virtual HTTP MCP servers** *(OPEN)*
New `codex-apps` crate that serves authenticated loopback streamable-HTTP MCP endpoints per connector. This could unify how Codex Apps integrate with the MCP manager — no more Apps-specific launch branches.

**2. [#29934](https://github.com/openai/codex/pull/29934) — Emit app name and template ID in MCP app context** *(OPEN)*
Adds optional `appName` and `templateId` fields to MCP tool-call app context, populated from trusted Codex Apps metadata. Enables downstream consumers to distinguish which app triggered a tool call.

**3. [#30146](https://github.com/openai/codex/pull/30146) — Add single required CI gate** *(OPEN)*
Replaces the many required GitHub Actions status checks with one stable, version-controlled `pr-ci` caller workflow. Should reduce CI flakiness and make it clearer whether a PR is merge-ready.

**4. [#29683](https://github.com/openai/codex/pull/29683) — Add managed new-thread model settings** *(OPEN)*
Admins can now set persistent defaults for model, reasoning effort, and service tier when the Desktop App creates a new thread. Initialization defaults, not runtime constraints — users can still override.

**5. [#29927](https://github.com/openai/codex/pull/29927) — Add `history_mode` to thread** *(OPEN)*
New `historyMode: "legacy" | "paginated"` field on Thread, persisted in rollout JSONL and SQLite. This is groundwork for paginated conversation history — a significant UX improvement for long sessions.

**6. [#30127](https://github.com/openai/codex/pull/30127) — Route MCP elicitation to its live runtime** *(OPEN)*
Fixes a race condition where environment availability replaces a thread's MCP runtime while an elicitation call is still pending. Prevents stale runtime references during environment transitions.

**7. [#30111](https://github.com/openai/codex/pull/30111) — Implement standalone code-mode process host** *(OPEN)*
New `codex-code-mode-host` stdio service that supervises request, writer, cell-forwarding, actor, and V8 failure boundaries. Bounded request/session tombstones for better resource management.

**8. [#29375](https://github.com/openai/codex/pull/29375) — Support npm marketplace plugin sources** *(OPEN)*
Fixes a bug where `{"source":"npm", ...}` was treated as unsupported, causing npm-backed plugins to silently not appear in `plugin list --available`. Unlocks a whole class of community plugins.

**9. [#30141](https://github.com/openai/codex/pull/30141) — Load hook-backed user instructions** *(OPEN)*
Resolves UserInstructions at the same lifecycle boundary as global AGENTS.md during fresh session construction. Fixes a gap where user-level instructions from hooks were loaded too late.

**10. [#30144](https://github.com/openai/codex/pull/30144) — Fix terminal rollout durability** *(OPEN)*
Closes a durability gap where terminal `TurnComplete` / `TurnAborted` events could be appended after a rollout flush and delivered immediately while the session stayed live. Prevents clients from observing phantom terminal states.

---

## 5. Feature Request Trends

Based on issue labels, comment volume, and 👍 counts, the most-requested directions are:

| Trend | Representative Issues | Signal |
|---|---|---|
| **Undo / safety net for destructive actions** | [#9203](https://github.com/openai/codex/issues/9203) (👍296) | By far the most popular request |
| **Quota / rate-limit transparency** | [#28879](https://github.com/openai/codex/issues/28879), [#29955](https://github.com/openai/codex/issues/29955), [#30002](https://github.com/openai/codex/issues/30002), [#30086](https://github.com/openai/codex/issues/30086) | Surging in the last 48h |
| **Accessibility (screen-reader TUI)** | [#20489](https://github.com/openai/codex/issues/20489) | Unaddressed for months |
| **Disable auto-updates** | [#18546](https://github.com/openai/codex/issues/18546) | Recurring ask from power users |
| **Headless remote Linux support for mobile** | [#23200](https://github.com/openai/codex/issues/23200) (👍21) | Server/SSH workflow gap |
| **Promptless resume for active goals** | [#24016](https://github.com/openai/codex/issues/24016) | Long-running automation use case |
| **User-level code-review skills** | [#30143](https://github.com/openai/codex/pull/30143) | Extensibility / customization |

---

## 6. Developer Pain Points

**Quota accounting is the #1 pain point right now.** Four separate issues filed in the last 48 hours describe the same pattern: Codex is counting tokens against user quotas at rates that don't match actual usage. Some users see their entire 5-hour budget consumed in minutes. Others see 2% drops from trivial prompts. The `model_needs_follow_up` loop finding in #30086 suggests invisible token generation may be the root cause. This is actively driving user churn and needs an urgent transparent response.

**MCP reliability is the #2 pain point.** Three distinct issues (#28978, #17265, #28640) cover: desktop MCP schema validation failures, OAuth token refresh failures, and blocking on slow MCP tool/list calls. As MCP adoption grows, these become showstopper bugs for power users.

**macOS Desktop stability** continues to be a recurring complaint. The `syspolicyd`/`trustd` runaway issue (#25719, #28071) has been open for over a month with no fix, and users are reporting they need to reboot to recover their systems.

**Auth recovery gaps** remain unresolved. The legacy phone number verification issue (#25749) has 64 comments spanning over a month, and the related "phone verify but no code sent" issue (#20320) adds another 43. Users with valid OAuth accounts are being locked out of Codex specifically.

**Context management after compaction** (#5957) is a silent productivity killer — users lose work because the model forgets its task context after auto-compaction, and there's no `/undo` to recover (#9203).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-26

## 1. Today's Highlights
Gemini CLI shipped **v0.49.0** and **v0.50.0-preview.1**, with the preview introducing a new **tool registry** and several CI/release hardening fixes. On the issue tracker, long-standing agent reliability bugs (subagent hangs, false "success" reports, and shell execution stalls) continue to dominate community discussion, while multiple high-priority PRs target **thought leakage**, **MCP resource isolation**, and **Vertex AI routing correctness**.

## 2. Releases
- **v0.50.0-preview.1** — Adds a new **tool registry** (`Feat/tool registry di…`), fixes npm CI release verification to ignore scripts, and prevents workspace binary shadowing during release checks.  
  [Release notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.50.0-preview.1)
- **v0.49.0** — Stable release; includes Dependabot npm cooldown, various refactors, and nightly rollups.  
  [Release notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.49.0)
- **v0.49.0-nightly.20260625** — Fixes path-traversal vulnerability during skill install and resolves pending-tools/trust override conflicts.  
  [Release notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.49.0-nightly.20260625.gd845bc5d4)

## 3. Hot Issues
1. **#22323 — Subagent reports GOAL success after hitting MAX_TURNS**  
   The `codebase_investigator` subagent falsely reports `status: "success"` when it never actually analyzed anything, hiding interruptions from users.  
   [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **#21409 — Generalist agent hangs indefinitely**  
   Simple operations like folder creation hang for over an hour when the CLI defers to the generalist agent; disabling subagents works around it. 👍8  
   [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **#26384 — "Too many open files" and forkpty failures**  
   High-volume shell command execution exhausts file descriptors, causing persistent shell failures in large workspaces.  
   [Issue #26384](https://github.com/google-gemini/gemini-cli/issues/26384)

4. **#25166 — Shell command stuck on "Waiting input" after completion**  
   The CLI incorrectly awaits user input for commands that have already finished, blocking the session. 👍3  
   [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

5. **#26525 — Auto Memory leaks secrets into model context**  
   Auto Memory reads transcripts and sends content to the extraction agent *after* secrets are already in context; redaction happens too late.  
   [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

6. **#26522 — Auto Memory retries low-signal sessions forever**  
   Sessions the extractor deems low-signal are never marked processed, causing infinite reprocessing loops.  
   [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

7. **#21968 — Gemini ignores custom skills and sub-agents**  
   Users report the model rarely invokes available skills/sub-agents unless explicitly instructed, reducing automation value.  
   [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

8. **#24246 — 400 error with >128 tools**  
   The CLI hits API errors when too many tools are registered, with no graceful scoping or pruning.  
   [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

9. **#22672 — Agent uses destructive git commands**  
   The model occasionally runs `git reset --force` or similar destructive operations when safer alternatives exist. 👍1  
   [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

10. **#22745 — EPIC: AST-aware file reads and search**  
    Investigation into AST-precise tooling to reduce misaligned reads, cut token noise, and speed up codebase navigation.  
    [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

## 4. Key PR Progress
1. **#27971 — Strip thoughts from scrubbed history turns**  
   Fixes "thought leakage" where the model's internal reasoning bleeds into plain-text history, causing infinite monologue loops.  
   [PR #27971](https://github.com/google-gemini/gemini-cli/pull/27971)

2. **#28143 — Resolve MCP resources by server to prevent cross-server confusion**  
   Prevents `read_mcp_resource` from returning another server's content when URIs collide across MCP servers.  
   [PR #28143](https://github.com/google-gemini/gemini-cli/pull/28143)

3. **#28142 — Honor GOOGLE_CLOUD_LOCATION for Vertex AI with API key**  
   Fixes silent ignoring of regional routing, ensuring requests hit the correct Vertex endpoint.  
   [PR #28142](https://github.com/google-gemini/gemini-cli/pull/28142)

4. **#28153 — Ignore stale update_topic calls after session reset**  
   Prevents orphaned `update_topic` writes from corrupting state after `/clear`.  
   [PR #28153](https://github.com/google-gemini/gemini-cli/pull/28153)

5. **#28144 — Detect available editors lazily to speed startup**  
   Replaces synchronous `execSync` editor probes at module load with lazy detection, fixing slow startup on Windows.  
   [PR #28144](https://github.com/google-gemini/gemini-cli/pull/28144)

6. **#28149 — Respect .gitignore/.geminiignore in skill resource listing**  
   Stops skill activation from leaking ignored files into the model's "available resources" view.  
   [PR #28149](https://github.com/google-gemini/gemini-cli/pull/28149)

7. **#27915 — Trust dialog discloses the hook shape that never runs**  
   Fixes inverted trust-dialog display so users see the actual hooks that will execute.  
   [PR #27915](https://github.com/google-gemini/gemini-cli/pull/27915)

8. **#27979 — Wrap read_mcp_resource output with wrapUntrusted()**  
   Aligns MCP resource output trust handling with MCP tool output for consistent safety treatment.  
   [PR #27979](https://github.com/google-gemini/gemini-cli/pull/27979)

9. **#28015 — Cloud Run webhook ingestion service for Caretaker Agent**  
   Implements GitHub webhook entry point with signature verification, Firestore storage, and Pub/Sub publishing.  
   [PR #28015](https://github.com/google-gemini/gemini-cli/pull/28015)

10. **#28147 — Prevent bad NPM releases and promote job crashes**  
    Reorders release verification so integration tests run *before* `npm publish`, avoiding dangling releases.  
    [PR #28147](https://github.com/google-gemini/gemini-cli/pull/28147)

## 5. Feature Request Trends
- **AST-aware tooling** — Multiple EPICs (#22745, #22746) push for AST-precise file reads, search, and codebase mapping to reduce token waste and misaligned tool calls.
- **Subagent observability** — Requests to surface subagent trajectories via `/chat share` (#22598) and include subagent context in `/bug` reports (#21763).
- **Smarter skill/subagent dispatch** — Users want the model to autonomously invoke relevant skills and sub-agents without explicit instruction (#21968).
- **Browser agent resilience** — Automatic session takeover and lock recovery for persistent browser profiles (#22232).
- **Agent self-awareness** — The CLI should accurately explain its own flags, hotkeys, and execution model (#21432).

## 6. Developer Pain Points
- **Agent hangs and stalls** — Generalist/subagent hangs (#21409, #25166) and browser agent failures (#21983) remain top complaints.
- **Shell execution reliability** — "Too many open files" (#26384) and stuck "Waiting input" states (#25166) disrupt workflows.
- **Memory system quality** — Auto Memory leaks secrets (#26525), retries low-signal sessions forever (#26522), and silently drops invalid patches (#26523).
- **Tool sprawl** — 400 errors with >128 tools (#24246) and random tmp-script creation (#23571) show poor tool scoping.
- **Trust and transparency gaps** — Trust dialog lies about which hooks run (#27915), and subagent context is invisible in bug reports (#21763).
- **Destructive model behavior** — Unsafe git operations (#22672) and ignored settings overrides (#22272) erode trust.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-26

## 1. Today's Highlights

No new releases in the last 24 hours. The community is actively engaged with **31 issues** and **1 PR** updated in the past day, with strong discussion around model listing, plugin/hook behavior, and cross-platform rendering. Authentication issues when resuming sessions and Windows scrollbar rendering bugs are generating the most community reactions.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

1. **[#700](https://github.com/github/copilot-cli/issues/700) — List all supported models** — 👍4, 💬14
   Users want a `copilot --list-models` command to discover available models and their multiplier info. This is a long-standing request (since Dec 2025) with active community engagement.

2. **[#2643](https://github.com/github/copilot-cli/issues/2643) — preToolUse hook rewrites still trigger confirmation dialog** — 👍2, 💬12
   When a `preToolUse` hook uses `updatedInput` with `permissionDecision: allow`, the CLI still shows an interactive confirmation dialog on every rewritten command. Plugin developers want a way to silently rewrite commands.

3. **[#3596](https://github.com/github/copilot-cli/issues/3596) — "Not authenticated" error when listing models in resumed sessions** — 👍11, 💬7
   Resuming a session blocks `/model` with an authentication error, even though other commands work fine. High community impact — 11 upvotes signals this affects many users.

4. **[#3501](https://github.com/github/copilot-cli/issues/3501) — Scrollbar breaks text alignment on Windows** — 👍9, 💬5
   Since the vertical scrollbar was introduced, text rendering is misaligned on Windows Console Host and Windows Terminal. A persistent UI regression.

5. **[#3534](https://github.com/github/copilot-cli/issues/3534) — `/copy` fails on WSL2 ARM64 due to cmd.exe quoting bug** — 👍4, 💬4
   In v1.0.55-1, clipboard writes through the Windows path fail on WSL2 (Ubuntu, ARM64) because of a quoting issue in the `cmd.exe` wrapper.

6. **[#3636](https://github.com/github/copilot-cli/issues/3636) — Voice mode fails on corporate VPN** — 👍5, 💬3
   `/voice` cannot be enabled because the CLI cannot fetch the voice model catalog. Corporate network environments are blocking catalog access entirely.

7. **[#3909](https://github.com/github/copilot-cli/issues/3909) — Enterprise/org server-managed settings for local CLI** — 👍0, 💬2
   Org admins want to centrally push configuration (especially environment variables) to local Copilot CLI installs. Currently only possible for cloud-hosted environments via Codespaces secrets.

8. **[#3692](https://github.com/github/copilot-cli/issues/3692) — Escape key discards queued prompt instead of canceling current task** — 👍1, 💬2
   When a task is running and a follow-up prompt is queued, pressing Escape drops everything rather than canceling the current task and focusing the queued prompt.

9. **[#3933](https://github.com/github/copilot-cli/issues/3933) — Autopilot mode drops after each request** — 👍0, 💬0
   Previously, entering autopilot kept it active across multiple prompts. Now it exits after each request, breaking the continuous autonomous workflow.

10. **[#3931](https://github.com/github/copilot-cli/issues/3931) — Cannot resume yesterday's session** — 👍0, 💬0
    Users report that `/resume` and `--resume` don't show all sessions, including ones from the previous day. Session discovery is unreliable.

## 4. Key PR Progress

1. **[#3928](https://github.com/github/copilot-cli/pull/3928) — Add .gitignore and configuration** — by tpsaint
   Adds a `.gitignore` file and settings configuration to the repository. A small infrastructure contribution.

## 5. Feature Request Trends

- **Model discoverability**: Users want commands to list models, view catalogs, and check AIC quota/usage from the CLI (Issues [#700](https://github.com/github/copilot-cli/issues/700), [#3596](https://github.com/github/copilot-cli/issues/3596), [#3932](https://github.com/github/copilot-cli/issues/3932))
- **Enterprise/org management**: Centrally managed settings, org policy for MCP servers, and Azure DevOps integration in the Up next panel (Issues [#3909](https://github.com/github/copilot-cli/issues/3909), [#3794](https://github.com/github/copilot-cli/issues/3794), [#3934](https://github.com/github/copilot-cli/issues/3934))
- **Plugin & hook system maturity**: Silent command rewrites, async read-only slash commands, argument-hint validation, and skill migration preservation (Issues [#2643](https://github.com/github/copilot-cli/issues/2643), [#3829](https://github.com/github/copilot-cli/issues/3829), [#3929](https://github.com/github/copilot-cli/issues/3929), [#3938](https://github.com/github/copilot-cli/issues/3938))
- **Theming & accessibility**: Fine-grained per-element theming and VSCode terminal theme detection (Issues [#2123](https://github.com/github/copilot-cli/issues/2123), [#3935](https://github.com/github/copilot-cli/issues/3935))
- **Session management**: Better session discovery, timestamps in conversations, and autopilot persistence (Issues [#3931](https://github.com/github/copilot-cli/issues/3931), [#3930](https://github.com/github/copilot-cli/issues/3930), [#3933](https://github.com/github/copilot-cli/issues/3933))

## 6. Developer Pain Points

- **Cross-platform rendering bugs**: Windows scrollbar misalignment and WSL2 clipboard failures remain unresolved, degrading the experience for non-macOS users.
- **Authentication state inconsistency**: Resumed sessions report "Not authenticated" for model listing while other commands work, suggesting stale auth state not being refreshed on resume.
- **Plugin/hook UX friction**: The inability to silently rewrite commands via hooks forces unnecessary confirmation dialogs, breaking automation workflows.
- **Session continuity**: Autopilot dropping after each request and unreliable session resumption are disrupting long-running agentic workflows.
- **Enterprise visibility**: No way to view monthly AIC quota from the CLI, and no org-level policy mechanism for local installations — gaps compared to IDE plugins.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-26

---

## 1. Today's Highlights

It was a quiet day on the Kimi Code CLI repository with no new releases or pull requests merged in the past 24 hours. Two new bug reports surfaced: one detailing UI rendering instability (flickering and full-conversation re-renders) on Linux, and another flagging potential issues when working with large MCP tool sets (212+ tools) on Windows. Both remain open with no community response yet.

---

## 2. Releases

No new releases in the last 24 hours. The latest published version remains **v0.19.2**.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| [#2475](https://github.com/MoonshotAI/kimi-cli/issues/2475) | MCP tools failing with large tool sets (212 tools, Windows) | Signals potential scalability limits in the MCP integration layer — critical for power users wiring Kimi into complex toolchains. | No comments yet; early-stage report. |
| [#2474](https://github.com/MoonshotAI/kimi-cli/issues/2474) | UI flickering / full re-renders on Linux (K2.7 Code Thinking) | Directly impacts developer productivity; rendering bugs in the TUI are highly visible and disruptive. | No comments yet; likely needs repro steps or logs from the community. |

> **Note:** Only 2 issues were filed in the last 24h. The repository is currently in a low-activity period, or the community may be awaiting a new release cycle.

---

## 4. Key PR Progress

No pull requests were opened or updated in the last 24 hours. The project appears to be between active development sprints.

---

## 5. Feature Request Trends

Based on the limited recent activity, the most prominent implicit feature direction is:

- **MCP scalability & robustness** — Issue #2475 hints that the MCP server integration may not gracefully handle servers exposing a large number of tools. The community will likely push for better tool pagination, lazy loading, or filtering mechanisms.
- **Cross-platform TUI stability** — Issue #2474 (Linux rendering) adds to a recurring theme of terminal UI inconsistencies across OS platforms, suggesting demand for a more robust rendering engine or platform-specific testing.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **UI rendering instability** | [#2474](https://github.com/MoonshotAI/kimi-cli/issues/2474) — flickering and full re-renders on Linux | Breaks flow state; developers lose context when the entire conversation re-renders. |
| **MCP tool overload** | [#2475](https://github.com/MoonshotAI/kimi-cli/issues/2475) — 212-tool MCP server causing issues on Windows | Limits adoption for teams with rich tool ecosystems (CI/CD, infra management, etc.). |
| **Slow issue triage** | Both new issues have 0 comments after 24h | May signal maintainer bandwidth constraints; community contributors could help with reproductions and logs. |

---

*Data sourced from [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) — Digest generated 2026-06-26.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-26

---

## 1. Today's Highlights

OpenCode shipped **v1.17.11**, adding session snapshots/revert controls and fixing an MCP OAuth URL visibility bug. The community is heavily engaged around **Windows Bun segfaults** (Issue #33742, 40 👍), and a large **memory megathread** (#20695, 103 comments) is collecting heap snapshots to tackle systemic memory issues. On the PR side, contributors are pushing fixes for plan-mode permission inheritance, MCP timeout splitting, and TUI compact-number formatting.

---

## 2. Releases

### v1.17.11 (2026-06-26)

**Core Improvements**
- **Session snapshots & revert** — Roll a session back to an earlier message, including file changes. A significant UX win for long-running coding sessions.

**Bugfixes**
- **MCP OAuth URL always printed** — Manual sign-in now works reliably when the browser-based OAuth flow can't open automatically.

**Desktop Improvements**
- Chrome-style titlebar improvements (partial release notes).

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters | Community Reaction |
|---|-------|--------|----------------|--------------------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | Memory Megathread | OPEN (103 💬, 74 👍) | Centralized effort to collect heap snapshots and fix memory leaks. Maintainer explicitly asked community *not* to have LLMs suggest solutions. | Highest-engagement issue; 74 users want memory fixes. |
| [#33742](https://github.com/anomalyco/opencode/issues/33742) | v1.17.10 crashes with Bun segfault on Windows | OPEN (45 💬, 40 👍) | Regression in v1.17.10 causes native Bun segfaults on Windows; v1.17.9 is stable. | Fast-rising, high urgency — 40 👍 in ~24h. |
| [#15585](https://github.com/anomalyco/opencode/issues/15585) | "Free usage exceed" on all free models | CLOSED (52 💬, 13 👍) | Users hitting rate-limit errors on all three free model providers simultaneously. | Frustration about unclear error messaging; closed without full resolution. |
| [#16610](https://github.com/anomalyco/opencode/issues/16610) | Hangs at startup when inotify instances exhausted | OPEN (14 💬, 7 👍) | Running OpenCode in a `.git` directory with low `fs.inotify.max_user_instances` causes a hang. | Linux users affected; workaround exists but no code fix yet. |
| [#17557](https://github.com/anomalyco/opencode/issues/17557) | `/compact` increases context instead of compressing | OPEN (5 💬, 1 👍) | `/compact` command silently fails — context token count *increases* after running it. | Undermines trust in a core context-management command. |
| [#33828](https://github.com/anomalyco/opencode/issues/33828) | Blank screen on Windows after install | OPEN (6 💬) | `npm install -g opencode-ai` on Windows produces a blank screen; Ctrl+C reveals partial UI. | New-user onboarding blocker. |
| [#33399](https://github.com/anomalyco/opencode/issues/33399) | 99–100% CPU utilization, unresponsive CLI | OPEN (6 💬) | Periodic CPU spikes render OpenCode completely unresponsive. | Long-running session users affected; root cause unclear. |
| [#33945](https://github.com/anomalyco/opencode/issues/33945) | `ctx_execute(language: "javascript")` crashes Desktop on Windows | CLOSED (3 💬) | MCP tool call crashes the entire Electron process on Windows. | Critical for Desktop users relying on JS execution tools. |
| [#33938](https://github.com/anomalyco/opencode/issues/33938) | `ConfigInvalidError` and missing sessions after upgrade | OPEN (3 💬) | v1.17.11 Desktop shows `ConfigInvalidError` on startup; sidebar empty despite sessions in SQLite. | Windows-specific upgrade regression. |
| [#22227](https://github.com/anomalyco/opencode/issues/22227) | OpenCode startup too slow (~1 minute) | OPEN (4 💬, 4 👍) | Cold start takes ~1 minute for many users. | Recurring complaint across multiple versions. |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#33822](https://github.com/anomalyco/opencode/pull/33822) | Use Bun canary for beta channel | OPEN | Switches CI to Bun canary to address widespread segfaults on Windows (Bun 1.3.14 instability). |
| [#33967](https://github.com/anomalyco/opencode/pull/33967) | Fix plan-mode: deny bash & scope subagent permission inheritance | OPEN | Plan mode currently allows unrestricted bash; this PR denies `bash` and scopes subagent permissions correctly. Closes #22641. |
| [#33977](https://github.com/anomalyco/opencode/pull/33977) | Split MCP timeout configuration | OPEN | Replaces single `timeout` with `timeout.startup` and `timeout.request` for finer-grained MCP server control. |
| [#33969](https://github.com/anomalyco/opencode/pull/33969) | Fix rounding overflow in compact number formatter | CLOSED | Values 999,950–999,999 rendered as "1000.0K" instead of "1.0M". Merged. |
| [#33960](https://github.com/anomalyco/opencode/pull/33960) | Respect per-agent variant when TAB-cycling shared models | CLOSED | Two agents sharing a model but different variants (e.g., `max` vs `high`) would display the wrong variant. Merged. |
| [#33979](https://github.com/anomalyco/opencode/pull/33979) | Stabilize titlebar tab alignment | OPEN | Fixes v2 titlebar flex row height and prevents alignment shifts after tab navigation. |
| [#33974](https://github.com/anomalyco/opencode/pull/33974) | Enable auto-accept in session settings | OPEN | Scopes the settings dialog to the active tab's server, fixing session lookups with multiple servers. |
| [#33978](https://github.com/anomalyco/opencode/pull/33978) | Use dropdown primitives for project picker | OPEN | Refactor of project selector for side-by-side comparison with PR #32015. |
| [#12721](https://github.com/anomalyco/opencode/pull/12721) | Add tokens-per-second to response footer | OPEN | Shows `18.3s · 131 tok/s` in assistant message footers. Addresses long-standing request for throughput visibility. |
| [#32370](https://github.com/anomalyco/opencode/pull/32370) | Linux clipboard selection | OPEN | Enables native Linux terminal text selection to clipboard. Fixes #29963. |

---

## 5. Feature Request Trends

Based on issue content, the most-requested feature directions are:

1. **Multi-account / OAuth improvements** — Multiple Codex OAuth accounts with round-robin load balancing ([#8145](https://github.com/anomalyco/opencode/issues/8145)), configurable `OAUTH_CALLBACK_HOST` ([#33966](https://github.com/anomalyco/opencode/issues/33966)), and better provider key management ([#33775](https://github.com/anomalyco/opencode/issues/33775)).

2. **Credential security** — Storing secrets in the OS keychain instead of plaintext `auth.json` ([#4318](https://github.com/anomalyco/opencode/issues/4318)).

3. **Plugin & TUI extensibility** — In-TUI session navigation events for plugins ([#31051](https://github.com/anomalyco/opencode/issues/31051)), LM Studio auto-detection via `/v1/models` API ([#23327](https://github.com/anomalyco/opencode/issues/23327)).

4. **Session management UX** — Rename sessions from the UI ([#33932](https://github.com/anomalyco/opencode/issues/33932)), session metadata in SDK ([#33964](https://github.com/anomalyco/opencode/issues/33964)), and the newly shipped snapshot/revert feature.

5. **IDE integration** — Keyboard shortcut forwarding from OpenCode terminal back to host IDEs like Cursor/Windsurf ([#27006](https://github.com/anomalyco/opencode/issues/27006)).

6. **Performance** — Faster startup ([#22227](https://github.com/anomalyco/opencode/issues/22227)), reduced memory usage ([#20695](https://github.com/anomalyco/opencode/issues/20695)), and Git Changes panel causing 3-minute API delays ([#33952](https://github.com/anomalyco/opencode/issues/33952)).

---

## 6. Developer Pain Points

- **Windows stability** — Bun segfaults ([#33742](https://github.com/anomalyco/opencode/issues/33742)), blank screen on launch ([#33828](https://github.com/anomalyco/opencode/issues/33828)), `ctx_execute` crashes ([#33945](https://github.com/anomalyco/opencode/issues/33945)), and `ConfigInvalidError` after upgrade ([#33938](https://github.com/anomalyco/opencode/issues/33938)) point to a **fragile Windows experience**. The move to Bun canary in CI ([#33822](https://github.com/anomalyco/opencode/pull/33822)) acknowledges this.

- **Memory & CPU spikes** — The memory megathread ([#20695](https://github.com/anomalyco/opencode/issues/2065)) and 100% CPU utilization reports ([#33399](https://github.com/anomalyco/opencode/issues/33399)) suggest **resource management in long-running sessions** remains unresolved.

- **Context management broken** — `/compact` silently inflating context instead of compressing ([#17557](https://github.com/anomalyco/opencode/issues/17557)) erodes trust in a critical tool for staying within token budgets.

- **Slow startup** — A ~1-minute cold start ([#22227](https://github.com/anomalyco/opencode/issues/22227)) has been reported across multiple versions with no definitive fix.

- **Auth UX friction** — Repeated API key prompts despite stored credentials ([#33775](https://github.com/anomalyco/opencode/issues/33775)) and plaintext secret storage ([#4318](https://github.com/anomalyco/opencode/issues/4318)) are recurring complaints.

- **Light mode accessibility** — Code examples are invisible in light terminal themes ([#17935](https://github.com/anomalyco/opencode/issues/17935)), a long-standing UI issue.

- **Prompt cache inconsistency** — GLM-5.1 cache reads dropping to 0 while DeepSeek V4 Flash works reliably ([#31348](https://github.com/anomalyco/opencode/issues/31348)) suggests provider-specific cache handling bugs.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-26

## 1. Today's Highlights

No new releases in the past 24 hours, but the issue tracker was very active with 42 issues updated and 11 pull requests touched. The dominant themes are **connection reliability with external providers** (especially OpenAI Codex/GPT-5.5), **streaming and TUI rendering bugs**, and meaningful momentum on the **coding-agent RPC architecture** with new `get_entries`/`get_tree` commands and a configurable wait timeout.

---

## 2. Releases

None in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Key Detail | Community Signal |
|---|-------|------------|------------------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | **openai-codex Connection Reliability** | `openai-codex` / `gpt-5.5` leaves interactive TUI stuck on `Working…` with no streamed output and no visible error; Escape is the only recovery. | 71 comments, 👍30 — by far the most discussed open issue |
| [#5825](https://github.com/earendil-works/pi/issues/5825) | **Streaming markdown forces scroll to bottom** | When `clear on shrink` is enabled, Pi forcibly scrolls down during markdown streaming, pulling the viewport away from what the user is reading. | 31 comments — UX regression |
| [#5103](https://github.com/earendil-works/pi/issues/5103) | **Windows build can't detect git-bash from PATH** | The GitHub Release zip of `pi-windows-x64.zip` fails to find Git Bash even when it's on PATH, so the built-in bash tool reports no shell. | 23 comments |
| [#6050](https://github.com/earendil-works/pi/issues/6050) | **TUI full redraw clears terminal scrollback** | Custom UI redraws trigger a destructive full TUI re-render that wipes the terminal's scrollback buffer during active conversations. | 10 comments |
| [#6060](https://github.com/earendil-works/pi/issues/6060) | **TypeError: content is not iterable on tool-call-only messages** | TUI crashes with an uncaught exception when the footer renders token stats for sessions containing only tool-call assistant messages. | 4 comments — crash bug |
| [#6061](https://github.com/earendil-works/pi/issues/6061) | **MiniMax-M2.7-highspeed context budget smaller than expected** | Long conversations fail at ~131 k tokens (well below the advertised 200 k context window). | 4 comments |
| [#6047](https://github.com/earendil-works/pi/issues/6047) | **Add BMP support to `read` tool** | BMP files can be read from clipboard but fail when read from disk. PR is ready. | 2 comments |
| [#6057](https://github.com/earendil-works/pi/issues/6057) | **Add reasoning token counts to Usage** | OpenAI, Anthropic, and other providers return reasoning/thinking token counts but Pi drops them silently. | 3 comments — observability gap |
| [#5810](https://github.com/earendil-works/pi/issues/5810) | **RPC: expose `get_entries` and `get_tree`** | Headless integrations need read-only RPC commands for session entry listing and tree navigation. | 5 comments — architecture enabler |
| [#6085](https://github.com/earendil-works/pi/issues/6085) | **Compiled binary extension resolver fails for npm subdirectories** | Follow-up to #5949; the Bun-compiled Pi binary cannot resolve npm package imports in extensions loaded from subdirectories. | 1 comment — regression in distribution path |

---

## 4. Key PR Progress

| PR | Title | Status | Impact |
|----|-------|--------|--------|
| [#6087](https://github.com/earendil-works/pi/pull/6087) | Remove hardcoded 60 s RPC wait timeout | **MERGED** | Fixes long-running MCP tool sessions that failed after 60 s; adds configurable `waitTimeoutMs`. |
| [#6078](https://github.com/earendil-works/pi/pull/6078) | Add `get_entries` and `get_tree` RPC commands | **OPEN** | Exposes session entry listing (with cursor) and tree structure for headless/SDK integrations. |
| [#6074](https://github.com/earendil-works/pi/pull/6074) | Avoid pre-prompt compaction continue | **OPEN** | Prevents premature context compaction on coding-agent sessions. |
| [#5832](https://github.com/earendil-works/pi/pull/5832) | Surface provider HTTP error body instead of opaque SDK message | **OPEN** | Fixes: behind a proxy, raw error bodies were dropped, making debugging impossible. |
| [#5515](https://github.com/earendil-works/pi/pull/5515) | Add `alwaysTrust` setting to skip project trust gating | **MERGED** | Allows fully trusted environments to bypass trust prompts. |
| [#6084](https://github.com/earendil-works/pi/pull/6084) | Preserve custom widget render order on background tick refreshes | **MERGED** | Fixes TUI widget flickering/reordering on high-frequency timer refreshes. |
| [#6081](https://github.com/earendil-works/pi/pull/6081) | Theme colors: `#RRGGBBAA` alpha support | **MERGED** | Themes now accept 8-digit hex colors; alpha is blended at theme load for terminals without true transparency. |
| [#6064](https://github.com/earendil-works/pi/pull/6064) | Experimental `@earendil-works/pi-orchestrator` package | **OPEN** | New IPC-based orchestrator daemon for managing multiple Pi instances lifecycle. |
| [#6067](https://github.com/earendil-works/pi/pull/6067) | Add overeager scope-discipline rule to system prompt | **MERGED** | One-line prompt addition to keep the agent scoped to the request. |
| [#6063](https://github.com/earendil-works/pi/pull/6063) | Extension stats | **MERGED** | Adds OSC garbage cleanup when `PI_STARTUP_BENCHMARK=1` exits. |

---

## 5. Feature Request Trends

1. **Single-file / standalone binary distribution** — [#6065](https://github.com/earendil-works/pi/issues/6065) requests bundling Node runtime into the binary to avoid version conflicts across projects.
2. **Observability into reasoning/thinking tokens** — [#6057](https://github.com/earendil-works/pi/issues/6057) and related discussion want `Usage` objects to carry `reasoning_tokens` / `thinking_tokens`.
3. **Richer headless RPC / SDK APIs** — `get_entries`, `get_tree` ([@earendil-works/pi/issues/5810](https://github.com/earendil-works/pi/issues/5810)), durable human-in-the-loop ([@earendil-works/pi/issues/5901](https://github.com/earendil-works/pi/issues/5901)), and custom fetch hooks ([@earendil-works/pi/issues/6034](https://github.com/earendil-works/pi/issues/6034)) all signal demand for Pi as an embeddable engine.
4. **Shell-level tab completion** — [#6086](https://github.com/earendil-works/pi/issues/6086) requests completion metadata for bash/zsh/fish.
5. **Orchestration daemon** — The experimental `pi-orchestrator` PR ([@earendil-works/pi/pull/6064](https://github.com/earendil-works/pi/pull/6064)) points toward multi-instance management tooling.

---

## 6. Developer Pain Points

- **Provider connection fragility** — The top-voted issue ([@earendil-works/pi/issues/4945](https://github.com/earendil-works/pi/issues/4945)) highlights that `openai-codex` silently hangs with no error feedback, forcing users to abort turns manually. Combined with MiniMax context-limit surprises ([@earendil-works/pi/issues/6061](https://github.com/earendil-works/pi/issues/6061)) and dropped error bodies ([@earendil-works/pi/pull/5832](https://github.com/earendil-works/pi/pull/5832)), the overall provider reliability story is a recurring frustration.
- **TUI rendering regressions** — Multiple issues describe the TUI fighting the user: forced scroll-to-bottom during streaming ([@earendil-works/pi/issues/5825](https://github.com/earendil-works/pi/issues/5825)), viewport jumps in tmux ([@earendil-works/pi/issues/6073](https://github.com/earendil-works/pi/issues/6073)), full redraws clearing scrollback ([@earendil-works/pi/issues/6050](https://github.com/earendil-works/pi/issues/6050)), and crashes on long lines ([@earendil-works/pi/issues/6058](https://github.com/earendil-works/pi/issues/6058)) or tool-call-only messages ([@earendil-works/pi/issues/6060](https://github.com/earendil-works/pi/issues/6060)).
- **Windows support gaps** — Git Bash not detected from PATH ([@earendil-works/pi/issues/5103](https://github.com/earendil-works/pi/issues/5103)) remains a first-run blocker for Windows developers.
- **Extension compatibility** — The compiled binary's npm resolver ([@earendil-works/pi/issues/6085](https://github.com/earendil-works/pi/issues/6085)) and a breaking update to `pi-lovely-codex` ([@earendil-works/pi/issues/5989](https://github.com/earendil-works/pi/issues/5989)) erode trust in the extension ecosystem's stability.
- **Input history loss after `/resume`** — When extensions use `setEditorComponent`, the input history is lost after resuming a session ([@earendil-works/pi/issues/6066](https://github.com/earendil-works/pi/issues/6066)), suggesting an initialization ordering bug.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-26

---

## 1. Today's Highlights

Qwen Code shipped **v0.19.2-nightly** with a core fix for `web_fetch` JSON fallback, keeping tool-call pipelines stable when upstream responses are malformed. On the community side, the past 24 hours were dominated by **shell-process resource leaks on Windows** (a P1 reproducerpowershell-spawning-until-OOM bug in [#5873](https://github.com/QwenLM/qwen-code/issues/5873)) and a wave of feature requests around agent/session observability, memory tiering, and self-paced `/loop` lifecycle controls. Several high-quality PRs also advanced—notably `@extension` mention autocomplete, a bundled `extension-creator` skill, and voice dictation desktop support.

---

## 2. Releases

**v0.19.2-nightly.20260625.b2f11b735** ([release](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2-nightly.20260625.b2f11b735))

- **fix(core): allow web_fetch JSON fallback** ([#5660](https://github.com/QwenLM/qwen-code/pull/5660)) — When a web fetch target returns non-JSON content, the pipeline now degrades gracefully instead of erroring out.
- Chore: version bump to v0.19.2.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|----------------|----------|
| [#5873](https://github.com/QwenLM/qwen-code/issues/5873) | powershell-spawning-until-OOM bug (P1, Windows) | Each tool invocation leaks a powershell process until OOM—full repro on Windows. | 4 comments, urgent; community flagged as critical. |
| [#5641](https://github.com/QwenLM/qwen-code/issues/5641) | Shell tool results repeatedly submitted with certain OpenAI-compatible providers | Deterministic providers cause duplicate shell-result round-trips, wasting context tokens. | Closed after repro + fix; 4 comments. |
| [#5861](https://github.com/QwenLM/qwen-code/issues/5861) | Context-compression side-query uses `stream=false`, risking gateway timeouts | Under-heavy context, the summarization call blocks the entire request and can hit infra timeouts. | Closed; fix merged via [#5860](https://github.com/QwenLM/qwen-code/pull/5860). |
| [#5722](https://github.com/QwenLM/qwen-code/issues/5722) | Token-speed display bugs: tok/s disappears during thinking, stalls during tool calls | Undermines a key UX health indicator. | Closed with fix; 2 comments. |
| [#5263](https://github.com/QwenLM/qwen-code/issues/5263) | Auto-generated skills persisted without user confirmation | One-off project-refactor skills clutter storage; users want a confirm-before-save prompt. | Closed; 6 comments (feature-design debate). |
| [#5838](https://github.com/QwenLM/qwen-code/issues/5838) | Configurable timeout for agent-spawned commands | Long-running agent tasks (builds, tests) need tunable execution limits. | 5 comments, community-backed use cases. |
| [#5867](https://github.com/QwenLM/qwen-code/issues/5867) | Git-shared "team" tier for auto-memory | Memory is currently local-only; team onboarding would benefit from shared project context. | 3 comments, early-stage design discussion. |
| [#5759](https://github.com/QwenLM/qwen-code/issues/5759) | Collapsed-session preview of last N messages | `collapseOnResume` hides everything, forcing users to uncollapse just to see recent context. | 3 comments; addressed by PR [#5848](https://github.com/QwenLM/qwen-code/pull/5848). |
| [#5806](https://github.com/QwenLM/qwen-code/issues/5806) | Esc-cancel doesn't stop pending `/loop` wakeups | Users report loop continues spawning ticks after abort, wasting resources until natural timeout. | Closed after fix merged. |
| [#401](https://github.com/QwenLM/qwen-code/issues/401) | Streaming setup timeout after 6 s (P1, open since Aug 2022) | A long-standing intermittent timeout, especially on high-latency networks. | 10 comments; workaround known (increase config timeout). |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#5849](https://github.com/QwenLM/qwen-code/pull/5849) | OPEN | **@extension mention in input autocomplete** — Codex-style `@` picker surfaces installed extensions with badge + description. |
| [#5828](https://github.com/QwenLM/qwen-code/pull/5828) | OPEN | **Bundled extension-creator skill** — Guides agents through scaffolding and testing Qwen Code extensions end-to-end. |
| [#5856](https://github.com/QwenLM/qwen-code/pull/5856) | OPEN | **Voice dictation in desktop app** — Mic button in composer toolbar; waveform + timer UX; parity with CLI/Web Shell. |
| [#5868](https://github.com/QwenLM/qwen-code/pull/5868) | OPEN | **Configurable auto-compact threshold** — New setting + Stop-hook context-usage hook (addresses [#4025](https://github.com/QwenLM/qwen-code/issues/4025)). |
| [#5848](https://github.com/QwenLM/qwen-code/pull/5848) | OPEN | **collapsePreviewCount** — Config to show last N turns when resuming collapsed sessions (implements [#5759](https://github.com/QwenLM/qwen-code/issues/5759)). |
| [#5835](https://github.com/QwenLM/qwen-code/pull/5835) | OPEN | **Preserve selected model on provider re-install** — Auth refresh / ACP reconnect no longer resets active model. |
| [#5778](https://github.com/QwenLM/qwen-code/pull/5778) | OPEN | **/model --vision** — Dedicated fallback vision model for when the main model is text-only but receives images. |
| [#5738](https://github.com/QwenLM/qwen-code/pull/5738) | OPEN | **Virtualized terminal history by default** — New users get in-app scrollable buffer out of the box. |
| [#5874](https://github.com/QwenLM/qwen-code/pull/5874) | Merged (perf) | **Skip spawnSync wrapper for `qwen serve`** — Eliminates a redundant Node.js process fork on daemon startup. |
| [#5629](https://github.com/QwenLM/qwen-code/pull/5629) | OPEN | **PreToolUse "ask" → TUI confirmation** — Hooks returning `ask` now show a native confirmation prompt instead of being treated as deny. |

---

## 5. Feature Request Trends

1. **Session & Agent Observability** — Multiple requests for richer daemon HTTP endpoints ([#5855](https://github.com/QwenLM/qwen-code/issues/5855), [#5863](https://github.com/QwenLM/qwen-code/issues/5863)) returning per-session turn-phase, active tools, and pending permissions — driven by external tooling and dashboard use cases.

2. **Memory Tiering & Sharing** — A "team" auto-memory tier backed by git ([#5867](https://github.com/QwenLM/qwen-code/issues/5867)) signals demand for collaborative, project-scoped context that survives team member onboarding.

3. **UX Polish for History & Display** — Collapse-preview counts ([#5759](https://github.com/QwenLM/qwen-code/issues/5759)), default status-line toggle ([#5789](https://github.com/QwenLM/qwen-code/issues/5778)), TUI visual refresh ([#4422](https://github.com/QwenLM/qwen-code/pull/4422)), and tok/s display fixes ([#5722](https://github.com/QwenLM/qwen-code/issues/5722)) show a community pushing for polish-equivalent to Claude Code's interface.

4. **Extension & Skill Ecosystem** — `@extension` mentions ([#5849](https://github.com/QwenLM/qwen-code/pull/5849)), the `extension-creator` skill ([#5828](https://github.com/QwenLM/qwen-code/pull/5828)), and ASR keyword configurability ([#5816](https://github.com/QwenLM/qwen-code/issues/5816)) all point to a maturing plugin platform with growing third-party aspirations.

5. **Voice Dictation Expansion** — Beyond voice ASR biasing, PRs now bring dictation to the desktop app ([#5856](https://github.com/QwenLM/qwen-code/pull/5856)) and improve mirror-registry packaging for the native audio-capture package ([#5742](https://github.com/QwenLM/qwen-code/issues/5742)).

---

## 6. Developer Pain Points

- **Process/Resource Leaks on Windows** — The P1 powershell-spawning-until-OOM bug ([#5873](https://github.com/QwenLM/qwen-code/issues/5873)) is the highest-priority complaint; users report their machines becoming unresponsive after extended sessions.
- **Esc-Cancel Not Fully Respected** — Canceling a `/loop` tick doesn't kill scheduled wakeups ([#5806](https://github.com/QwenLM/qwen-code/issues/5806)); workaround awareness is low.
- **Context-Compression Timeouts** — Non-streaming compression queries fail on high-latency gateways ([#5861](https://github.com/QwenLM/qwen-code/issues/5861)); some deployments silently degrade.
- **Stale CI on Merged PRs** — Semantic CI conflicts still slip through due to outdated merge-base checks ([#4805](https://github.com/QwenLM/qwen-code/issues/4805), open since June).
- **Auto-Generated Skill Clutter** — Users want explicit confirmation before skills persist to disk ([#5263](https://github.com/QwenLM/qwen-code/issues/5263)), especially after one-off refactors.
- **Streaming Setup Intermittency** — The long-running [#401](https://github.com/QwenLM/qwen-code/issues/401) continues to surface for users on high-latency or proxy-mediated connections.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-26

## 1. Today's Highlights

The v0.8.65 release is now live, marking the official rebrand to **CodeWhale** and deprecating the legacy `deepseek-tui` npm package. The community is heavily focused on the **Hotbar MVP** landing in v0.8.66, with nearly a dozen PRs merged in the past 24 hours covering everything from the setup wizard to trigger semantics. Meanwhile, several recurring pain points persist — plan/agent mode confusion, YOLO approval behavior, and Windows environment variable inheritance remain active friction areas.

## 2. Releases

- **v0.8.65** — The canonical project, command, npm package, and release-asset name is now **CodeWhale**. The legacy `deepseek-tui` npm package is deprecated with no further releases. Users on legacy names should consult `docs/REBRAND.md` for migration instructions.

## 3. Hot Issues

1. **#3205 — Fleet model classes, loadout auto, and semantic route roles** (OPEN, 10 comments)
   A foundational issue for shared model/loadout selection across TUI, CLI, exec, subagents, and Fleet workers. Critical for multi-model workflows.

2. **#3568 — Plan and agent mode mixed up YET AGAIN** (OPEN, 4 comments, 👍1)
   A fresh reproduction case showing the AI fails to detect plan/agent mode switches — a long-standing bug that continues to resurface.

3. **#3606 — Agent asks for confirmation in YOLO mode** (OPEN, 1 comment)
   Users report YOLO mode still triggers approval prompts despite `approval_mode: AUTO`, undermining trust in the mode system.

4. **#3541 — Rust-based native runtime / desktop client** (OPEN, 3 comments)
   Community proposal to move off the Node.js/TypeScript runtime to reduce cold-start latency and memory overhead in long agent sessions.

5. **#3582 — install.sh endpoint returns HTML instead of shell script** (CLOSED, 1 comment)
   The recommended `curl | sh` install command was broken because the Next.js app was serving HTML at the install endpoint.

6. **#3572 — Windows user environment variables not inherited** (CLOSED, 1 comment)
   User-level env vars set via Windows System Properties aren't loaded into shells spawned by CodeWhale's `exec_shell`.

7. **#3545 — Custom context size in provider config** (CLOSED, 1 comment)
   Users want to override the default 128k context window per-provider; some models support 1M but the config doesn't expose this.

8. **#3466 — Approval modal cancellation and review-required semantics** (CLOSED, 5 comments)
   A user frustrated by destructive approval prompts after upgrading to v0.8.64, wanting a way to return to no-confirmation behavior.

9. **#3496 — Throttle Zhipu/GLM-5.2 request concurrency** (CLOSED, 1 comment)
   SSE stream timeouts under concurrent load when using Zhipu/GLM coding plan due to undocumented concurrency limits.

10. **#2022 — Classify environment/tool failures before blaming the model** (CLOSED, 2 comments)
    A push to redact and categorize session logs so users can distinguish model-quality failures from tool/runtime issues.

## 4. Key PR Progress

1. **#3613 — fix(tui): honor auto approval mode in dispatch** (OPEN)
   Routes normal user turns through auto-approve when the live approval mode is AUTO, not just when the mode label is YOLO. Closes #3606.

2. **#3612 — fix(tui): gate unsafe hotbar dispatch paths** (OPEN)
   Adds explicit hotbar source safety modes (direct-fire, composer-prefill, disabled, approval-gated) and blocks unbound disabled actions.

3. **#3610 — feat(tui): add redacted session failure diagnostics** (CLOSED)
   Privacy-first JSONL session failure classifier with `codewhale session-diagnostics <path>` CLI subcommand.

4. **#3608 — refactor(tui): route hotbar actions through source adapters** (CLOSED)
   Introduces `HotbarActionSource` trait with descriptors for app, slash, MCP, skill, and plugin categories.

5. **#3604 — fix(tui): centralize hotbar recommendations** (CLOSED)
   Shared recommendation engine with stable default ordering, disabled-action exclusion, and category limits.

6. **#3602 — fix(tui): add hotbar setup wizard** (CLOSED)
   Full `/hotbar` command and modal state machine with source navigation, 1-8 slot assignment, save/cancel, and live config wiring.

7. **#3598 — fix(tui): render hotbar sidebar panel** (CLOSED)
   Renders the configured 8-slot Hotbar as a fixed 2×4 grid at the bottom of the sidebar.

8. **#3595 — fix(tui): throttle Z.ai provider requests** (CLOSED)
   Adds `max_concurrency` config per provider, defaulting Z.ai/GLM to 3 in-flight requests. Fixes #3496.

9. **#3594 — fix(tui): clarify destructive approval semantics** (CLOSED)
   Improves approval card copy to clarify YOLO vs. review-rule behavior and Deny vs. Esc semantics.

10. **#3593 — fix(tui): honor shell-only exec tool surface** (CLOSED)
    Maps `CODEWHALE_TOOL_SURFACE=shell-only` to a shell-only `allowed_tools` gate in `codewhale exec`.

## 5. Feature Request Trends

- **Hotbar / quick-action surface** — The dominant current development theme; an 8-slot MMO-style action bar with MCP, skill, plugin, and slash command source adapters.
- **Rust native runtime** — Growing community interest in moving off Node.js to reduce latency and memory footprint for long agent sessions.
- **Custom context window sizing** — Users want per-provider overrides for models with large (1M+) context windows.
- **Better failure diagnostics** — Demand for redacted, categorized session logs that separate model failures from tool/runtime issues.
- **Multi-model / multi-provider routing** — Continued interest in Fleet loadout auto-selection and clearer provider docs (especially `vllm` vs `openai` provider distinctions).

## 6. Developer Pain Points

- **Plan/Agent mode confusion** — Persistently recurring issue (#3568 and predecessors) where the agent fails to recognize mode switches, leading to unintended tool execution during planning.
- **YOLO mode approval prompts** — Multiple reports (#3606, #3466) that YOLO mode doesn't fully suppress confirmations, eroding user trust.
- **Windows environment gaps** — User-level env vars not inherited by spawned shells (#3572), breaking build tool integrations.
- **Install script breakage** — The `install.sh` endpoint returning HTML (#3582) is a first-impression blocker for new users.
- **Provider concurrency limits** — Zhipu/GLM SSE timeouts under load (#3496) highlight the need for better out-of-the-box concurrency defaults.
- **Verbose agent output** — Ongoing requests (#2959) to reduce transcript chatter and final summary size without losing auditability.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*