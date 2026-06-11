# AI CLI Tools Community Digest 2026-06-11

> Generated: 2026-06-11 00:42 UTC | Tools covered: 8

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

**Date:** 2026-06-11 · **Sources:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code

---

## 1. Ecosystem Overview

The AI CLI tool landscape in mid-2026 is defined by a shift from single-turn chat wrappers to **agentic development environments** — tools that orchestrate multi-step tasks, manage sub-agent hierarchies, and integrate deeply with IDEs, cloud providers, and external tool ecosystems. All eight tools covered here are in active development with daily issue/PR velocity, but they span a wide spectrum of maturity: Claude Code and OpenAI Codex are shipping production-grade features at a rapid clip, while OpenCode and Kimi Code are closing gaps through high-volume PR batches. A clear architectural bifurcation is emerging between **terminal-native TUI tools** (Claude Code, Gemini CLI, Kimi Code, Qwen Code) and **desktop-app-first platforms** (Codex, OpenCode, Copilot CLI), with each camp making different trade-offs around portability, rendering fidelity, and remote-control workflows. Across the board, the community is converging on a shared set of hard problems — context management, agent reliability, secrets handling, and cross-platform stability — that will define the next generation of tooling.

---

## 2. Activity Comparison

| Tool | Open Issues (Hot) | PRs Active Today | Release in Last 24h | Most-Engaged Issue |
|---|---|---|---|---|
| **Claude Code** | 10 tracked | 10 open | ✅ v2.1.172 | #5674 — macOS `ECONNRESET` (44💬, 👍36) |
| **OpenAI Codex** | 10 tracked | 10 open | ✅ 2 Rust alphas (0.140.0-a.7, a.4) | #14593 — Token burn rate (604💬, 👍265) |
| **Gemini CLI** | 10 tracked | 10 open | ✅ v0.46.0 | #21409 — Subagent hangs (7💬, 👍8) |
| **GitHub Copilot CLI** | 10 tracked | 1 open (low-signal) | ❌ None | #53 — Restore `gh copilot` alias (34💬, 👍75) |
| **Kimi Code CLI** | 4 tracked | 10+ merged | ❌ None | #640 — File-reading infinite loop (7💬) |
| **OpenCode** | 10 tracked | 10 open | ✅ v1.17.3 (hotfix) | #1764 — Vim motions (32💬, 👍165) |
| **Pi** | 10 tracked | 10 (9 merged) | ❌ None | #5514 — Project Trust fatigue (25💬, 👍13) |
| **Qwen Code** | 10 tracked | 10 open | ❌ None | #4973 — Terminal cooked-mode regression (P1) |

**Key takeaway:** Claude Code, OpenAI Codex, and OpenCode are the only tools with releases in the last 24 hours, indicating the fastest iteration cycles. OpenAI Codex's #14593 (604 comments) is a single-issue engagement outlier, reflecting acute user pain around cost transparency.

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities, signaling convergent user demand:

### 3.1 Secrets & Credential Management
- **Claude Code** (#29910, 👍30): No native secrets management; users want Vault/AWS Secrets Manager integration.
- **OpenAI Codex** (#24675, #27443): Auth lifecycle bugs and Bedrock API key as first-class auth mode.
- **Gemini CLI** (#26525): Auto Memory leaks pre-redacted transcript content to the model.
- **GitHub Copilot CLI** (#223, #3756): Org-level token permission scopes missing; enterprise auth is a blocker.
- **Qwen Code** (#4930): `env` command in read-only allowlist enables sandbox escape.

> **Pattern:** Every tool lacks a robust, built-in secrets handling story. This is the single most cross-cutting gap and a prerequisite for enterprise/CI-CD adoption.

### 3.2 Agent Loop Reliability & Observability
- **Claude Code** (#54393): 12 multi-agent coordination bugs in a single overnight cycle.
- **Gemini CLI** (#21409, #22323): Subagents hang indefinitely or falsely report success.
- **Kimi Code** (#640, #2447): File-reading infinite loop; todo state machine never reaches terminal state.
- **OpenCode** (#31772): V1 tool errors silently swallowed by `Effect.orDie`.
- **Qwen Code** (#4928): Background subagents auto-deny tool calls instead of surfacing prompts.

> **Pattern:** As tools ship recursive/forking sub-agents, the failure modes multiply. Users need loop detection, explicit termination signals, and honest status reporting.

### 3.3 Context Window & Token Management
- **OpenAI Codex** (#27488): New context window tool for agents to start fresh context without compaction summaries.
- **Claude Code** (#58933): No in-session determinism controls; users want seed/temperature knobs.
- **Qwen Code** (#4941, #4964): QWEN.md length warnings, `max_tokens` truncation recovery.
- **OpenCode** (#5422): Per-provider caching with measurable token reduction.

> **Pattern:** Users are hitting context limits in real workflows and demanding agent-controlled context lifecycle management rather than opaque automatic compaction.

### 3.4 Terminal Rendering & Cross-Platform Stability
- **Claude Code** (#66808, #67277): Mouse/scroll regressions, TUI render anomalies across platforms.
- **OpenAI Codex** (#23198, #27175): Windows Desktop crashes, white screens, extreme slowness — 6+ distinct Windows issues.
- **GitHub Copilot CLI** (#3749, #2082): Streaming output corruption, Linux copy shortcut broken.
- **Qwen Code** (#4973, #4974): Raw-mode regression, SGR mouse sequences leaking as typed text.
- **Pi** (#5582, #5589): CJK text wrapping crashes, overlay compositing errors.

> **Pattern:** TUI rendering remains the most platform-fragile layer. Windows is consistently the worst-served platform. CJK/international text handling is an emerging quality frontier.

### 3.5 MCP Ecosystem Maturation
- **Claude Code** (#60385): MCP permission prompts invisible in remote-control web UI.
- **OpenAI Codex** (#27495): Agent path metadata in MCP requests; plugin auth routing.
- **Gemini CLI** (#24246): 400 error with >128 tools; no intelligent tool scoping.
- **GitHub Copilot CLI** (#3756, #3752): Third-party MCP servers blocked by org policy; demand for direct invocation syntax.
- **Qwen Code** (#4966): SchemaValidator missing numeric string coercion causes silent MCP failures.

> **Pattern:** MCP adoption is accelerating faster than the tooling can handle. Users need smarter tool selection, better permission UX, and resilience against schema mismatches.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code |
|---|---|---|---|---|---|---|---|---|
| **Primary Interface** | TUI (terminal) | Desktop app + CLI | TUI (terminal) | TUI (terminal) | TUI + Web | TUI + Desktop | TUI + Desktop | TUI + Web Shell |
| **Target User** | Power developers, multi-agent workflows | Existing OpenAI ecosystem users | Google Cloud / Gemini ecosystem | GitHub-centric enterprises | Automation-focused, CI/CD | Extensible-platform seekers | Multi-role agent users | Alibaba Cloud / open-model users |
| **Key Strength** | Recursive sub-agents (5 levels); Bedrock integration | Rust performance; Desktop UX polish; image pipeline | Security posture (path traversal, CI poisoning fixes) | GitHub ecosystem integration | Rapid bug-fix cadence; Windows parity push | Plugin ecosystem; OpenTelemetry; browser tools | Multi-provider support; persona system | Agent Team parallel coordination; fork subagents |
| **Key Weakness** | macOS networking instability; no secrets management | Windows Desktop instability; opaque token burn | Agent hangs; Auto Memory security gaps | Stagnant PR pipeline; model list inconsistency | Agent control flow bugs; mode flag fidelity | Silent failures; large-repo performance | TUI crash cluster; trust gating fatigue | Terminal input pipeline fragility; VP mode not default-ready |
| **Differentiator** | Deepest agent orchestration | Fastest Rust iteration; image-first UX | Security-hardest codebase | GitHub-native workflow | Most aggressive Windows investment | Broadest extensibility (plugins, OTel, browser) | Multi-role/persona agent configuration | Parallel sub-agent coordination (Agent Team) |

**Notable architectural split:**
- **Terminal-native tools** (Claude Code, Gemini CLI, Kimi Code, Qwen Code) prioritize scriptability, SSH/remote workflows, and minimal dependencies.
- **Desktop-first tools** (Codex, OpenCode, Copilot CLI) invest in rich rendering, image handling, and IDE-like UX — at the cost of cross-platform stability.
- **Pi** occupies a unique position as a multi-provider framework with persona support, targeting users who switch between Anthropic, Google, OpenAI, and xAI backends.

---

## 5. Community Momentum & Maturity

### Highest Engagement (Comments + Reactions)
1. **OpenAI Codex** — #14593 (604💬, 👍265) is an order of magnitude more engaged than any other single issue, reflecting a large, cost-sensitive user base.
2. **OpenCode** — #1764 (👍165) and #906 (36💬, 👍22) show a passionate community around UX polish and extensibility.
3. **GitHub Copilot CLI** — #53 (👍75) and #223 (👍76) have high reaction-to-comment ratios, indicating broad but silent frustration.
4. **Claude Code** — #5674 (44💬, 👍36) is the most technically engaged issue, with active repro sharing.

### Fastest Iteration (PRs merged / day)
1. **Kimi Code** — 9 PRs merged in a single batch, all bug fixes. Signals a team in aggressive catch-up mode on Windows and agent reliability.
2. **Pi** — 9 PRs merged, spanning CJK fixes, provider additions, and streaming corrections. High breadth.
3. **OpenCode** — 1 PR merged (Chromium-scale repo fix) + 10 open PRs. Responsive to critical regressions.

### Slowest Momentum
- **GitHub Copilot CLI** — Only 1 PR updated in 24 hours (low-signal). Multiple high-engagement issues (#53, #1703, #223) have been open for months without resolution. The community is beginning to fork alternatives (`shell-ai`).

### Maturity Assessment
| Tier | Tools | Characteristics |
|---|---|---|
| **Production-grade** | Claude Code, OpenAI Codex | Regular releases, deep feature sets, but carrying significant technical debt in platform-specific bugs. |
| **Rapidly maturing** | Gemini CLI, OpenCode, Qwen Code | Active PR pipelines, responsive to security issues, but agent reliability and edge-case stability still lag. |
| **Niche / catching up** | Kimi Code, Pi | Smaller communities, focused on specific differentiators (Windows parity, multi-provider), high PR velocity but narrower scope. |
| **Stagnant risk** | GitHub Copilot CLI | Low PR throughput, unresolved high-engagement issues, community exploring forks. |

---

## 6. Trend Signals

The following industry trends are clearly visible across community feedback:

### 🔴 Trend 1: The Agent Reliability Crisis
Every tool that has shipped sub-agent orchestration (Claude Code, Gemini CLI, Qwen Code, Kimi Code) is now dealing with **cascading agent failures** — hangs, false successes, silent tool denials, and context contamination. The community is effectively beta-testing multi-agent workflows in production, and the tools are not yet reliable enough for unsupervised automation. **Implication:** Expect a wave of "agent observability" tooling and guardrail features in the next 6–12 months.

### 🔴 Trend 2: Cost Transparency as a Retention Issue
OpenAI Codex's token burn issue (604 comments) and Claude Code's determinism request both reflect a maturing user base that is **tracking dollars, not just capabilities**. Tools that cannot provide predictable cost models will lose enterprise users to metered SDKs. **Implication:** Token budgets, session cost caps, and per-agent cost attribution will become table-stakes features.

### 🟡 Trend 3: Windows Is the Neglected Platform
OpenAI Codex (6+ Windows issues), Kimi Code (dedicated Windows PR batch), GitHub Copilot CLI (Windows MCP loop), and Qwen Code (Windows terminal bugs) all show that **Windows is a second-class citizen** in the AI CLI ecosystem. Given that enterprise developers disproportionately run Windows, this is a strategic gap. **Implication:** Tools that achieve Windows parity first will capture enterprise market share.

### 🟡 Trend 4: MCP Is Outpacing Client Readiness
The MCP ecosystem is expanding faster than clients can integrate it. Every tool is hitting the same failure modes: permission UX gaps, tool-count limits, schema mismatches, and org policy false positives. **Implication:** The next competitive frontier is not MCP server availability but **MCP client intelligence** — smart tool selection, graceful degradation, and transparent permission models.

### 🟢 Trend 5: From Coding Tool to Multi-Role Agent Platform
Pi's persona system (#5577), Claude Code's recursive sub-agents, and Qwen Code's Agent Team all point to a future where these tools are **not just for coding** but for security analysis, QA, project management, and research. **Implication:** The "AI CLI tool" category will converge with the "AI agent platform" category by end of 2026. Tools that remain code-only will be niche.

### 🟢 Trend 6: Security Posture as Differentiator
Gemini CLI's proactive security PRs (path traversal, CI artifact poisoning) stand out in a landscape where most tools are reactive. Claude Code's context-contamination report (#67283) and Qwen Code's sandbox escape (#4930) show that **security issues are being discovered by users, not auditors**. **Implication:** Security-first design (input validation, sandbox isolation, audit logging) will become a competitive advantage, not a compliance checkbox.

---

*Report generated by OWL · Data sourced from GitHub community digests, 2026-06-11. All issue/PR references are hyperlinked to source repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

*Data as of 2026-06-11 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

Ranked by community engagement (comments, 👍 reactions, and recency of activity):

| # | Skill / PR | Author | Status | Engagement |
|---|-----------|--------|--------|------------|
| 1 | **[Enable org-wide skill sharing in Claude.ai](https://github.com/anthropics/skills/issues/228)** | jh-broad-reach | 🟡 Open | 💬 13 · 👍 7 |
| 2 | **[run_eval.py: 0% trigger rate bug](https://github.com/anthropics/skills/issues/556)** | dthau120391 | 🟡 Open | 💬 12 · 👍 7 |
| 3 | **[All skills disappeared — loading errors](https://github.com/anthropics/skills/issues/62)** | nicksonnenberg | 🟡 Open | 💬 10 · 👍 2 |
| 4 | **[skill-creator should follow best practices](https://github.com/anthropics/skills/issues/202)** | oaustegard | 🔴 Closed | 💬 8 · 👍 1 |
| 5 | **[Security: namespace trust boundary abuse](https://github.com/anthropics/skills/issues/492)** | aliksir | 🟡 Open | 💬 7 · 👍 2 |
| 6 | **[Duplicate skills from document-skills & example-skills](https://github.com/anthropics/skills/issues/189)** | chuggies510 | 🟡 Open | 💬 6 · 👍 8 |
| 7 | **[feat: frontend-design, ai-experience-consultant, automation-workflows-builder](https://github.com/anthropics/skills/pull/1046)** | ALMMECHANICAL | 🟡 Open (PR) | Recent activity |
| 8 | **[feat: agent-creator skill + multi-tool eval fix](https://github.com/anthropics/skills/pull/1140)** | SyedaQurratAI | 🟡 Open (PR) | Recent activity |

### Highlights

- **Org-wide skill sharing (#228)** is the single most-discussed item. Teams want a native sharing mechanism instead of the manual download → Slack → upload workflow. This is a **platform-level feature request** that signals enterprise adoption friction.
- **run_eval.py 0% trigger rate (#556)** is the top technical bug: the skill-creator's evaluation harness is fundamentally broken — `claude -p` never triggers skills, making the entire description-optimization loop useless. This blocks quality improvement for all skill authors.
- **Security namespace abuse (#492)** raises a critical trust issue: community skills distributed under the `anthropic/` namespace can impersonate official skills, creating a supply-chain-style trust boundary vulnerability.
- **Duplicate skills (#189)** has the highest 👍 count (8) among issues — users are confused and context-window-wasted by identical skills appearing from two different plugin packages.

---

## 2. Community Demand Trends

Distilled from Issues and PR descriptions, the most-anticipated Skill directions are:

### 🔧 Skill Infrastructure & Tooling (Highest Demand)
The community is investing heavily in **meta-skills** — skills that improve the skill ecosystem itself:
- **skill-quality-analyzer** and **skill-security-analyzer** (#83) — automated quality and security auditing for skills
- **skill-creator improvements** — multiple PRs (#1099, #1050, #362, #539) fixing Windows compatibility, UTF-8 handling, and YAML parsing
- **agent-creator** (#1140) — meta-skill for creating task-specific agent sets
- **agent-governance** (#412, closed proposal) — safety patterns, policy enforcement, and audit trails

### 📄 Document Generation & Processing
A consistent thread of demand for document-centric skills:
- **document-typography** (#514) — typographic quality control (orphan words, widow paragraphs, numbering)
- **ODT skill** (#486) — OpenDocument text creation, template filling, and ODT→HTML conversion
- **DOCX tracked changes fix** (#541) — preventing document corruption with existing bookmarks
- **PDF case-sensitivity fix** (#538) — cross-platform file reference correctness

### 🤖 Workflow Automation & Agent Capabilities
- **automation-workflows-builder** (part of #1046) — workflow automation skill
- **sensory skill** (#806) — native macOS automation via AppleScript instead of screenshot-based computer use
- **shodh-memory** (#154) — persistent context/memory system for AI agents across conversations
- **codebase-inventory-audit** (#147) — systematic codebase cleanup and documentation audit

### 🏢 Enterprise & Platform Features
- **Org-wide skill sharing** (#228) — the most-commented issue
- **Skills as MCPs** (#16) — exposing skill APIs via the Model Context Protocol
- **SharePoint Online integration** (#1175) — enterprise document handling with access control in SKILL.md
- **AWS Bedrock compatibility** (#29) — skills working beyond Anthropic's native platform

### 🧪 Testing & Quality
- **testing-patterns** (#723) — comprehensive testing stack skill (unit, React component, testing philosophy)
- **SAP-RPT-1-OSS predictor** (#181) — predictive analytics on SAP business data using SAP's open-source tabular foundation model

---

## 3. High-Potential Pending Skills

Active PRs with recent updates that are candidates for merging:

| PR | Skill | Why It Matters | Last Updated |
|----|-------|----------------|-------------|
| **[#1046](https://github.com/anthropics/skills/pull/1046)** | frontend-design, ai-experience-consultant, automation-workflows-builder | Three high-utility skills in one PR; broadest scope | 2026-06-10 |
| **[#1140](https://github.com/anthropics/skills/pull/1140)** | agent-creator + eval fixes | Meta-skill for agent creation; also fixes critical multi-tool evaluation bug | 2026-06-02 |
| **[#361](https://github.com/anthropics/skills/pull/361)** | YAML special character detection | Prevents silent parsing failures in skill descriptions — foundational quality improvement | 2026-06-10 |
| **[#362](https://github.com/anthropics/skills/pull/362)** | UTF-8 panic fix | Fixes Rust panics with multi-byte characters; internationalization correctness | 2026-06-10 |
| **[#1099](https://github.com/anthropics/skills/pull/1099)** | run_eval.py Windows fix | Unblocks Windows users from the skill-creator optimization loop | 2026-05-24 |
| **[#1050](https://github.com/anthropics/skills/pull/1050)** | skill-creator Windows subprocess fix | Two 1-line fixes for Windows 11 compatibility | 2026-05-24 |
| **[#509](https://github.com/anthropics/skills/pull/509)** | CONTRIBUTING.md | Addresses community health gap (repo scores 25% on GitHub metrics) | 2026-03-19 |
| **[#723](https://github.com/anthropics/skills/pull/723)** | testing-patterns | Comprehensive testing skill covering philosophy through React component testing | 2026-04-21 |

**Notable pattern:** A cluster of contributors (Lubrsy706, Mr-Neutr0n, joshuawowk, gstreet-ops) are systematically fixing the **skill-creator toolchain** — Windows compatibility, UTF-8 handling, YAML validation, and DOCX/PDF correctness. This infrastructure work is a prerequisite for broader skill quality improvement.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for skill infrastructure maturity — quality tooling, cross-platform reliability, and enterprise sharing — rather than new domain-specific skills, signaling that the ecosystem is transitioning from early experimentation to production readiness.**

---

*Report generated by OWL for the Claude Code Skills ecosystem. Data sourced from [github.com/anthropics/skills](https://github.com/anthropics/skills). All links verified as of 2026-06-11.*

---

# Claude Code Community Digest — 2026-06-11

---

## 1. Today's Highlights

Claude Code shipped **v2.1.172**, headlined by recursive sub-agents (up to 5 levels deep) and improved AWS Bedrock region detection. On the issue tracker, a macOS-specific `ECONNRESET` networking bug continues to dominate community attention with 44 comments and 36 upvotes, while a new cluster of TUI render-anomaly defects and a concerning context-contamination report in bridged sessions signal active quality concerns. The PR landscape is heavily focused on plugin infrastructure fixes and documentation accuracy.

---

## 2. Releases

### v2.1.172
- **Recursive sub-agents**: Sub-agents can now spawn their own sub-agents, up to 5 levels deep — a significant unlock for complex multi-agent orchestration workflows.
- **Amazon Bedrock region fallback**: When `AWS_REGION` is unset, Claude Code now reads the region from `~/.aws` config files, matching standard AWS SDK precedence. The `/status` command now surfaces where the region was resolved from.
- **Search bar in mark browsing**: Added a search bar when browsing a mark (exact feature scope TBD from release notes).

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#5674](https://github.com/anthropics/claude-code/issues/5674) | **Persistent ECONNRESET Errors on macOS** | macOS-exclusive network disconnections that kill mid-task sessions; doesn't affect Windows/Linux on the same network. A long-running blocker for Mac-based developers. | 44 comments, 👍36 — the most-engaged issue in the set. Users are actively sharing repros and workarounds. |
| [#51183](https://github.com/anthropics/claude-code/issues/51183) | **Bedrock: Opus 4.7 returns `permission_error` despite AUTHORIZED entitlement** | Users with valid entitlements are being blocked from using Opus 4.7 on Bedrock, suggesting a server-side or SDK-side auth mismatch. | 30 comments, 👍8. Frustration is high among enterprise/Bedrock users. |
| [#54393](https://github.com/anthropics/claude-code/issues/54393) | **Post-mortem: 12 multi-agent coordination bugs in a single overnight cycle** | A catalog of coordination failures surfaced during autonomous overnight runs — filed as a generic multi-agent issue, not tied to a single FR. Signals that recursive sub-agents (now shipped in v2.1.172) may surface these issues more frequently. | 13 comments, 👍0. Low engagement but high informational value. |
| [#29910](https://github.com/anthropics/claude-code/issues/29910) | **Built-in secrets management with optional third-party integrations** | Claude Code has no native secrets management, forcing users to improvise with env vars or external vaults. Critical for CI/CD and team workflows. | 10 comments, 👍30 — the most upvoted feature request, indicating broad demand. |
| [#51587](https://github.com/anthropics/claude-code/issues/51587) | **Option to disable Launch preview panel auto-open on Write/Edit** | The macOS desktop app auto-opens a preview panel on every file write/edit, which many users find disruptive. | 10 comments, 👍13. A quality-of-life fix with steady support. |
| [#60385](https://github.com/anthropics/claude-code/issues/60385) | **Remote Control: MCP permission prompts never surface in web UI** | When using `--remote-control` from claude.ai/code, MCP tool permission prompts are invisible in the web UI and only appear in the local TUI, blocking sessions silently. | 10 comments, 👍0. A critical UX gap for remote-control users. |
| [#67282](https://github.com/anthropics/claude-code/issues/67282) | **Remote Control sessions die after ~41 minutes, metronomically** | Sessions started with `--remote-control` terminate exactly ~41 minutes in, regardless of activity, across independent tmux sessions and different models. A watchdog timer confirms the pattern. | 2 comments (new today). If confirmed, this is a severe reliability bug for headless/remote workflows. |
| [#67283](https://github.com/anthropics/claude-code/issues/67283) | **Context contamination in bridged sessions: exfiltration-shaped instructions in model context but absent from transcripts** | Over 3 days, content that doesn't exist on disk appeared in the model's context across 4 sessions, steering toward data exfiltration. The model refused, but the source is unknown. | 1 comment (new today). A security-sensitive report that warrants immediate investigation. |
| [#66808](https://github.com/anthropics/claude-code/issues/66808) | **v2.1.170 regression: trackpad scrolling and copy/paste broken** | A regression in the latest release broke mouse interaction in the TUI. `CLAUDE_CODE_DISABLE_MOUSE=1` partially works but scrollback still fails. | 3 comments, 👍1. Regression bugs on core input handling are high-priority. |
| [#66398](https://github.com/anthropics/claude-code/issues/66398) | **Cursor not visible in typing window on first session attach (Windows)** | `claude agents` on Windows Terminal renders no visible cursor on first attach, making editing difficult despite functional input. | 3 comments, 👍0. A Windows-specific TUI polish issue. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| [#67084](https://github.com/anthropics/claude-code/pull/67084) | **fix Hookify prompt fields and warning context** | Maps legacy `event: prompt` + `pattern:` rules to the current `UserPromptSubmit` payload field; adds `hookSpecificOutput.additionalContext` to Hookify warning responses. Keeps `user_prompt` as a backward-compatible alias. |
| [#63382](https://github.com/anthropics/claude-code/pull/63382) | **Fix Hookify tests example semantics** | Splits the Hookify stop-example into three literal `not_contains` checks and updates the README to match the engine's actual substring-based behavior (not regex). |
| [#63460](https://github.com/anthropics/claude-code/pull/63460) | **docs: update deprecated npm install instructions in plugins/README.md** | Replaces `npm install -g` with recommended curl/irm methods and adds a deprecation note. |
| [#63686](https://github.com/anthropics/claude-code/pull/63686) | **Bump stale and autoclose timeouts from 14 to 90 days** | Extends the issue lifecycle to reduce premature closure of valid bugs and feature requests. |
| [#64607](https://github.com/anthropics/claude-code/pull/64607) | **fix: Plugin .mcp.json example incorrectly uses `mcpServers` wrapper** | Corrects the `.mcp.json` documentation — the `mcpServers` key is a `plugin.json` concept; `.mcp.json` uses a flat format. |
| [#65286](https://github.com/anthropics/claude-code/pull/65286) | **fix(plugins): add missing plugin.json manifest for plugin-dev** | Adds the missing `.claude-plugin/plugin.json` manifest so `plugin-dev` can be discovered and installed through normal plugin mechanisms. |
| [#65314](https://github.com/anthropics/claude-code/pull/65314) | **scripts: add detect-theme-color-issues triage script** | Adds a triage script that scans open issues for light-theme color collision reports and groups them, reducing duplicate issue volume. |
| [#65875](https://github.com/anthropics/claude-code/pull/65875) | **fix: Forward ANTHROPIC_BASE_URL to agentic_review child process** | Fixes the advisor feature (agentic_review) when using proxy/gateway endpoints (LiteLLM, Bifrost) by forwarding `ANTHROPIC_BASE_URL` to the spawned child process. |
| [#65916](https://github.com/anthropics/claude-code/pull/65916) | **docs: clarify allowed-tools vs agent tools: enforcement** | Documents the critical distinction: `allowed-tools` is auto-approval only (not a capability boundary), while `tools:` in subagent frontmatter is a hard restriction. |
| [#65919](https://github.com/anthropics/claude-code/pull/65919) | **docs: document ${CLAUDE_PLUGIN_ROOT} limitation in subagents** | Documents that subagents receive `${CLAUDE_PLUGIN_ROOT}` as a literal string instead of a resolved path (affects ≤2.1.166), with a resolution matrix in SKILL.md. |

---

## 5. Feature Request Trends

1. **Secrets Management** ([#29910](https://github.com/anthropics/claude-code/issues/29910), 👍30) — The most upvoted feature request. Users want built-in secrets handling with optional Vault/AWS Secrets Manager integration. This is a prerequisite for team and CI/CD adoption.

2. **Determinism / Reproducibility Controls** ([#58933](https://github.com/anthropics/claude-code/issues/58933)) — No in-session determinism mechanism exists, forcing automation users onto the metered Agent SDK. Users want seed/temperature controls or session-level reproducibility flags.

3. **Dismissible UI Banners** ([#67209](https://github.com/anthropics/claude-code/issues/67209)) — The "Virtualization is not available" banner in Cowork can't be dismissed, annoying users who intentionally run without the sandbox VM.

4. **Slash Command Initialization** ([#67278](https://github.com/anthropics/claude-code/issues/67278)) — Users want to invoke slash commands (e.g., `/color`) automatically at session start, enabling personalized default configurations.

5. **Hardened Container / Secure Deployment Support** ([#67276](https://github.com/anthropics/claude-code/issues/67276)) — Users are requesting support for hardened container image specifications (e.g., Docker Hardened Images) and secure deployment configurations, suggesting Claude Code's security classifiers may be overly aggressive for legitimate infrastructure work.

---

## 6. Developer Pain Points

- **macOS Networking Instability**: The `ECONNRESET` bug ([#5674](https://github.com/anthropics/claude-code/issues/5674)) has been open since August 2025 with no resolution. It's the single most-engaged issue and a daily blocker for Mac users.

- **Remote Control Reliability**: Two new issues ([#67282](https://github.com/anthropics/claude-code/issues/67282), [#60385](https://github.com/anthropics/claude-code/issues/60385)) highlight that `--remote-control` sessions are fragile — dying at 41 minutes and silently dropping MCP permission prompts in the web UI. This undermines headless and remote workflows.

- **TUI Render Anomalies**: A cluster of at least 5 issues ([#67277](https://github.com/anthropics/claude-code/issues/67277), [#64007](https://github.com/anthropics/claude-code/issues/64007), [#64567](https://github.com/anthropics/claude-code/issues/64567), [#67254](https://github.com/anthropics/claude-code/issues/67254), [#67267](https://github.com/anthropics/claude-code/issues/67267)) document omission, duplication, and corruption in the `cct` TUI rendering path. This is a systemic quality concern across platforms.

- **Bedrock Auth Friction**: Users on Amazon Bedrock face both region configuration confusion (partially addressed in v2.1.172) and entitlement/permission errors ([#51183](https://github.com/anthropics/claude-code/issues/51183)) that block access to models they're authorized to use.

- **Plugin Ecosystem Rough Edges**: Multiple PRs and issues point to documentation inaccuracies, missing manifests, and path resolution bugs in the plugin system. The infrastructure is maturing but still has sharp edges for plugin developers.

- **Safety Classifier False Positives**: At least 3 issues ([#67273](https://github.com/anthropics/claude-code/issues/67273), [#67033](https://github.com/anthropics/claude-code/issues/67033), [#67276](https://github.com/anthropics/claude-code/issues/67276)) report legitimate diagnostic and infrastructure work being flagged as security risks, suggesting the safety classifier needs tuning for developer-tool contexts.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-11

---

## 1. Today's Highlights

The Codex Desktop Windows experience is under significant strain: multiple reports of crashes on launch (26.608.1337), white-screen post-login failures, and severe performance degradation are dominating the issue tracker. On the PR side, the team is actively shipping infrastructure improvements — a new **context window tool** lets the model start a fresh context without compaction summaries, and **Mentions 2.0** (unified TUI mention popup) is being promoted to stable. The most-discussed issue remains token consumption rate limits, now surpassing 600 comments.

---

## 2. Releases

Two new Rust alpha releases landed in the last 24 hours:

| Version | Tag |
|---|---|
| **0.140.0-alpha.7** | [rust-v0.140.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.7) |
| **0.140.0-alpha.4** | [rust-v0.140.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.4) |

No detailed release notes were provided in the data; these appear to be incremental alpha builds feeding the rapid iteration cycle between the CLI and Desktop app.

---

## 3. Hot Issues

### 🔴 #14593 — Burning tokens very fast
**[openai/codex#14593](https://github.com/openai/codex/issues/14593)** · 💬 604 · 👍 265
The single most-engaged issue on the repo. Business-plan VS Code users report extremely aggressive token consumption, raising concerns about cost predictability and rate-limit exhaustion during normal development sessions. The volume of comments (604) signals this is a widespread, unresolved pain point across plans and platforms.

### 🔴 #23198 — Codex Desktop on Windows extremely slow
**[openai/codex#23198](https://github.com/openai/codex/issues/23198)** · 💬 12 · 👍 31
Windows users report the Desktop app becomes sluggish in day-to-day use despite healthy machines. The high like-to-comment ratio suggests many are affected but few have workarounds to share.

### 🟡 #24675 — Stale app connector link after 401 reauth
**[openai/codex#24675](https://github.com/openai/codex/issues/24675)** · 💬 22 · 👍 17
After a Linear connector returns `401 Reauthentication required`, Codex Desktop caches the stale link and won't regenerate it — even after restarting or removing/re-adding the plugin. Users must manually clear the `codex_apps` cache. This is a sharp auth lifecycle bug affecting all connector-based integrations.

### 🟡 #26867 — GitHub PR review uses deactivated workspace after migration
**[openai/codex#26867](https://github.com/openai/codex/issues/26867)** · 💬 13 · 👍 7
Migrating from a Business workspace to a Personal Pro account leaves Codex PR review pointing at the deactivated workspace, with no UI path to reassign it. This is a critical workflow blocker for teams undergoing account restructuring.

### 🟡 #25463 — Project threads disappear from UI while session data remains on disk
**[openai/codex#25463](https://github.com/openai/codex/issues/25463)** · 💬 11 · 👍 1
Local project conversations vanish from the Desktop project page and search, yet the underlying JSONL files are intact and readable. This is a UI/indexing desync that erodes trust in the app's ability to surface prior work.

### 🟡 #20833 — Project sidebar hides older workspace conversations
**[openai/codex#20833](https://github.com/openai/codex/issues/20833)** · 💬 9 · 👍 5
Related to #25463 — older workspace threads are invisible in the sidebar despite local data existing. Together these suggest a systemic issue with how the Desktop app indexes and displays historical sessions.

### 🟡 #27175 — Windows Desktop crashes after update to 26.602.71036
**[openai/codex#27175](https://github.com/openai/codex/issues/27175)** · 💬 8 · 👍 2
Post-update, the app becomes inaccessible even with empty sessions. This is one of several Windows stability regressions appearing in the 26.60x series.

### 🟡 #27491 — Severe streaming slowdown in Fast mode
**[openai/codex#27491](https://github.com/openai/codex/issues/27491)** · 💬 5
GPT-5.5 with Fast mode enabled outputs only a few characters every several seconds on macOS Tahoe. This directly undermines the value proposition of the Fast mode toggle.

### 🟡 #27296 — Fn global dictation hotkey stops working after update
**[openai/codex#27296](https://github.com/openai/codex/issues/27296)** · 💬 3 · 👍 8
The high like count (8) on a low-comment issue suggests broad impact: the global dictation hotkey breaks across all apps after updating to 26.608.12217, likely due to a macOS event-tap or accessibility permission regression.

### 🟡 #26743 — Locked Computer Use stuck on loginwindow
**[openai/codex#26743](https://github.com/openai/codex/issues/26743)** · 💬 4
When the Mac is locked, Computer Use can only see `loginwindow` and cannot access allowed desktop apps like Chrome. The temporary locked-use unlock path appears non-functional, making Computer Use unusable in locked-screen scenarios.

---

## 4. Key PR Progress

### 🟢 #27488 — Add new context window tool
**[openai/codex#27488](https://github.com/openai/codex/pull/27488)** — *pakrym-oai*
Adds a model-requestable tool to start a fresh context window without generating a compaction summary. The next turn re-establishes full context through the existing initial-context path. This gives agents explicit control over context lifecycle — a meaningful quality-of-life improvement for long-running sessions.

### 🟢 #27499 — Promote TUI unified mentions (Mentions 2.0) to default
**[openai/codex#27499](https://github.com/openai/codex/pull/27499)** — *canvrno-oai*
Promotes the unified TUI mention popup to stable, enabled by default. The legacy split popups remain available via `--disable mentions_v2` as a rollback path. This is a UX polish milestone for the TUI composer.

### 🟢 #27443 — Add Bedrock API key as a managed auth mode
**[openai/codex#27443](https://github.com/openai/codex/pull/27443)** — *celia-oai*
Treats Amazon Bedrock API key login as a first-class auth mode with the same persistence, keyring, reload, and logout lifecycle as other auth providers. Removes the need for separate credential files.

### 🟢 #27440 — Fall back to manual approval when Guardian times out
**[openai/codex#27440](https://github.com/openai/codex/pull/27440)** — *kbazzi*
When Guardian auto-review times out without a decision, the PR falls back to manual user approval instead of blocking the command entirely. This prevents legitimate commands from being silently rejected due to review-path timeouts.

### 🟢 #27495 — Pass agent path metadata to MCP tools
**[openai/codex#27495](https://github.com/openai/codex/pull/27495)** — *miaolin-oai*
Adds `agent_path` to Codex MCP request turn metadata (`/root` for root sessions, `/root/worker` for subagent spawns). This gives MCP tools visibility into the agent hierarchy, enabling context-aware tool behavior.

### 🟢 #27337 — Improve `/goal` in TUI: long objectives and images
**[openai/codex#27337](https://github.com/openai/codex/pull/27337)** — *etraut-openai*
Removes limitations in the TUI `/goal` flow: goals can now include local image inputs and remote image URLs, and long objectives are supported. Images are materialized into a goal-specific attachment directory.

### 🟢 #27247 / #27246 / #27266 — Image resizing and metadata preservation
**[openai/codex#27247](https://github.com/openai/codex/pull/27247)** / **[#27246](https://github.com/openai/codex/pull/27246)** / **[#27266](https://github.com/openai/codex/pull/27266)** — *fjord-oai*
A trio of PRs adding client-side image preparation behind the `resize_all_images` flag: centralizes image decoding/resizing before history insertion, strips `detail` fields from Responses Lite requests, and preserves ICC/EXIF metadata during re-encoding. Collectively these reduce token waste from large images.

### 🟢 #27452 — Support asynchronous command hooks
**[openai/codex#27452](https://github.com/openai/codex/pull/27452)** — *abhinav-oai*
Runs `async: true` command hooks in a session-scoped background runtime, delivering `additionalContext` and `systemMessage` output on the next accepted model request. Exposes `executionMode` from `hooks/list`.

### 🟢 #27489 — Cache turn diff rendering
**[openai/codex#27489](https://github.com/openai/codex/pull/27489)** — *nornagon-openai* ✅ Merged
Eliminates redundant diff re-rendering after every `apply_patch`. In production feedback, 2,589 patches across 72 paths produced 401 unnecessary full re-renders. A straightforward performance win.

---

## 5. Feature Request Trends

| Direction | Evidence |
|---|---|
| **Context window control** | #21777 (expose compaction to agent), #27488 (new context window tool PR) — users want the agent to manage its own context lifecycle rather than relying on automatic compaction mid-iteration. |
| **Goal enhancements** | #27337 (images + long objectives in `/goal`), #24300 (auto-continuation permission consistency) — the `/goal` feature is evolving toward richer, more reliable long-running task support. |
| **MCP ecosystem expansion** | #24103 (Meta Ads MCP OAuth), #27495 (agent path in MCP metadata), #27461 (plugin auth routing) — the community is pushing for broader, more reliable MCP server integration with better auth handling. |
| **Automation reliability** | #27492 (automations disappearing / schedule corruption) — as automations become a core workflow, users need stronger guarantees around persistence and correctness. |
| **Image support across surfaces** | #27337, #27247, #27246, #27266, #27498 — a concentrated effort to make images first-class citizens in goals, TUI, and extension tool calls. |

---

## 6. Developer Pain Points

**1. Windows Desktop instability is the dominant theme.**
At least 6 distinct issues (#23198, #27175, #25807, #26310, #27320, #27367) report crashes, white screens, transparent UI, immediate exits, and extreme slowness — all on Windows. The 26.527–26.608 release range appears to have introduced multiple regressions. The CLI works fine; the Desktop app does not.

**2. Token consumption and rate limits remain opaque and punishing.**
Issue #14593 (604 comments, 265 likes) is a clear signal that developers lack visibility into and control over token burn rates. This is the single highest-friction issue in the repo.

**3. Session/index desync erodes trust.**
Multiple issues (#25463, #20833, #22796) describe the Desktop UI failing to display sessions that exist on disk. When the app can't reliably show prior work, developers lose confidence in it as a primary workspace.

**4. Auth lifecycle bugs cascade across integrations.**
Stale connector links (#24675), workspace migration failures (#26867), and plugin OAuth probing (#27461) all point to auth state management that doesn't gracefully handle transitions (reauth, migration, reinstall).

**5. Sandbox and permission model inconsistencies.**
Issues #24300 (Full Access downgraded silently), #26921 (SSH `/goal` ignores Full Access), and #23105 (bwrap sandbox failures) reveal that the permission model's actual behavior often diverges from what the UI displays, creating security and usability confusion.

---

*Data source: [github.com/openai/codex](https://github.com/openai/codex) · Digest generated 2026-06-11*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-11

---

## 1. Today's Highlights

Gemini CLI shipped **v0.46.0**, hardening PTY resize against native crashes. Beyond the release, the community is heavily focused on **agent reliability** — subagent hangs, false success signals, and Auto Memory quality issues dominate the most-discussed issues. On the PR front, two security-focused PRs addressing **path traversal vulnerabilities** and **CI artifact poisoning** are drawing attention.

---

## 2. Releases

### v0.46.0 — [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.46.0)

- **fix(core): harden PTY resize against native crashes** ([#27496](https://github.com/google-gemini/gemini-cli/pull/27496)) — Prevents native crashes triggered during terminal resize, improving stability for interactive sessions.
- Changelog entries for v0.45.0-preview.0 and v0.44.0 were also published.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|---------------|-----------------|
| 1 | **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs** | The generalist subagent hangs indefinitely on simple tasks (e.g., folder creation). Users report waiting over an hour. Disabling subagent delegation works around it. | 7 comments, 👍8 — highest-engagement bug in the set. |
| 2 | **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent reports GOAL success after MAX_TURNS** | `codebase_investigator` falsely reports `status: "success"` / `Termination Reason: "GOAL"` when it actually hit the turn limit without doing analysis. Masks interruptions. | 6 comments, 👍2 — a correctness issue that erodes trust in agent outputs. |
| 3 | **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — Robust component-level evaluations** | EPIC tracking the expansion of behavioral eval tests (76 already created). Critical for ensuring agent quality as the tool scales. | 7 comments — signals investment in eval infrastructure. |
| 4 | **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST-aware file reads, search, and mapping** | Investigates whether AST-aware tools can reduce misaligned reads, cut token noise, and improve agent precision. | 7 comments, 👍1 — a forward-looking quality/efficiency investigation. |
| 5 | **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell command execution stuck on "Waiting input"** | After a simple CLI command finishes, Gemini hangs showing "Awaiting user input" even though the process has exited. | 4 comments, 👍3 — a recurring workflow blocker. |
| 6 | **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Deterministic redaction & Auto Memory logging** | Auto Memory sends transcript content to the model *before* redaction occurs, risking secret leakage. Also flags excessive logging of skill content. | 5 comments — security-sensitive. |
| 7 | **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory retries low-signal sessions indefinitely** | Sessions the extraction agent skips as "low-signal" remain unprocessed and get re-surface endlessly, wasting resources. | 5 comments — a loop-efficiency bug. |
| 8 | **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini doesn't use skills/sub-agents enough** | Anecdotal but widely felt: the model rarely invokes custom skills or subagents autonomously, even when highly relevant. Requires explicit instruction. | 6 comments — points to prompt/agent instruction gaps. |
| 9 | **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — 400 error with >128 tools** | API returns 400 when too many tools are in scope. Users expect smarter tool limiting/selection by the agent. | 3 comments — a scalability bottleneck for MCP-heavy setups. |
| 10 | **[#22093](https://github.com/google-gemini/gemini-cli/issues/22093) — Subagents running without permission since v0.33.0** | After updating, subagents activate even when agent mode is disabled in all configs. Unexpected behavior change. | 2 comments — a regression/permissions concern. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| 1 | **[#27767](https://github.com/google-gemini/gemini-cli/pull/27767) — Prevent path traversal in skill install** | Mitigates three path traversal vulnerabilities in `installSkill`, `linkSkill`, and `uninstallSkill`. Frontmatter paths were not validated, allowing writes outside the skill directory. | OPEN — security-critical. |
| 2 | **[#27753](https://github.com/google-gemini/gemini-cli/pull/27753) — Validate workflow_run origin (fork artifact poisoning)** | Fixes a CI supply-chain vulnerability where a fork PR could poison E2E artifacts and run attacker-controlled code with repo secrets. Validates `repo.full_name` before consuming artifacts. | OPEN — security-critical. |
| 3 | **[#27839](https://github.com/google-gemini/gemini-cli/pull/27839) — Make read_background_output delay abort-aware** | Pressing ESC cancelled the UI state but the underlying spinner and queued prompts continued because `setTimeout` ignored the abort signal. Now properly aborts. | OPEN — UX fix. |
| 4 | **[#27698](https://github.com/google-gemini/gemini-cli/pull/27698) — Zero-quota limits fail fast** | Fixes a retry-loop hang where unbilled free-tier accounts (quota = 0) triggered 10 futile retry attempts instead of failing immediately. | OPEN — critical for free-tier users. |
| 5 | **[#27824](https://github.com/google-gemini/gemini-cli/pull/27824) — Bump vitest 3.2.4 → 4.1.8** | Major version upgrade to the test framework. | CLOSED (merged). |
| 6 | **[#27827](https://github.com/google-gemini/gemini-cli/pull/27827) — Bump zod 3.25.76 → 4.4.3** | Major version bump for the schema validation library. | CLOSED (merged). |
| 7 | **[#27834](https://github.com/google-gemini/gemini-cli/pull/27834) — Bump react-devtools-core 6.1.5 → 7.0.1** | Dev dependency update. | CLOSED (merged). |
| 8 | **[#27833](https://github.com/google-gemini/gemini-cli/pull/27833) — Bump comment-json 4.2.5 → 5.0.0** | Major bump; includes breaking changes around blank line handling. | CLOSED (merged). |
| 9 | **[#27828](https://github.com/google-gemini/gemini-cli/pull/27828) — Bump chrome-devtools-mcp 0.19.0 → 1.1.1** | Significant version jump for the Chrome DevTools MCP integration. | CLOSED (merged). |
| 10 | **[#27831](https://github.com/google-gemini/gemini-cli/pull/27831) — Bump @vitest/coverage-v8 3.2.4 → 4.1.8** | Coverage tooling aligned with vitest major upgrade. | CLOSED (merged). |

---

## 5. Feature Request Trends

Synthesizing across all issues, the most-requested feature directions are:

1. **Smarter tool scoping** — Agents should dynamically limit tools in context rather than hitting hard API limits ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)). Demand for intelligent tool selection grows as MCP adoption increases.

2. **AST-aware codebase navigation** — Multiple EPICs ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)) explore using AST-aware reads and searches to reduce token waste and misaligned file reads.

3. **Agent self-awareness** — Requests for the agent to accurately know its own CLI flags, hotkeys, and execution model ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).

4. **Improved skill/subagent auto-invocation** — Users want the model to autonomously leverage custom skills and subagents without explicit instruction ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).

5. **Browser agent resilience** — Automatic session takeover and lock recovery for persistent browser profiles ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)).

6. **Remote agent auth & background operations** — Task-level auth, first-party agent support, and background processing for remote agents ([#20303](https://github.com/google-gemini/gemini-cli/issues/20303)).

---

## 6. Developer Pain Points

- **Agent hangs and false completions** — The most acute frustration. Subagents hang ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)) or falsely report success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), leaving users unsure whether work was actually done.

- **Shell execution getting stuck** — Commands that have finished still show as "Awaiting user input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/22323)), breaking interactive workflows.

- **Auto Memory quality and security** — Multiple issues ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)) highlight that the memory system retries endlessly, leaks pre-redacted content, and silently skips invalid patches.

- **Skills not being used autonomously** — Despite investing in custom skill definitions, developers must explicitly instruct the model to use them ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).

- **Quota/retry behavior** — Zero-quota accounts get stuck in retry loops instead of failing fast ([#27698](https://github.com/google-gemini/gemini-cli/pull/27698)), and the 400-error tool limit is surfaced too late ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)).

- **Terminal rendering glitches** — Resize crashes (now fixed in v0.46.0), flicker on resize ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)), and corruption after exiting external editors ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)) continue to affect the Ink-based UI.

---

*Data source: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · Digest generated by OWL for 2026-06-11.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-11

---

## 1. Today's Highlights

No new releases landed in the past 24 hours, but the issue tracker remains highly active with 42 updates. The dominant themes today are **terminal rendering regressions** (corrupted streaming output, duplicated text), **model availability gaps** between VS Code Copilot and the CLI, and **MCP server policy confusion** that continues to block enterprise users. A v1.0.60 regression breaking plugin `additionalContext` injection has also drawn attention.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|--------------------|
| [#53](https://github.com/github/copilot-cli/issues/53) | **Bring back `github-copilot` CLI commands** | The original `gh copilot` shell alias was removed, breaking muscle-memory workflows and scripts. After 6+ months of silence, the community has begun forking alternatives (e.g., `shell-ai`). | 34 comments, 👍75 — the most-reacted issue on the repo. Signals a serious communication gap between GitHub and power users. |
| [#1703](https://github.com/github/copilot-cli/issues/1703) | **CLI doesn't list all org-enabled models (e.g., Gemini 3.1 Pro)** | Users on the same org/account see fewer models in the CLI than in VS Code Copilot, undermining the CLI as a first-class client. | 31 comments, 👍54. Closed without resolution, frustrating users who expected parity. |
| [#223](https://github.com/github/copilot-cli/issues/223) | **"Copilot Requests" permission invisible for org-owned fine-grained tokens** | Enterprise automation scenarios require org-owned PATs, but the permission scope needed for Copilot CLI auth is missing from the token creation UI. | 29 comments, 👍76. A blocker for corporate adoption. |
| [#2082](https://github.com/github/copilot-cli/issues/2082) | **Ctrl+Shift+C no longer copies on Linux** | A regression in v1.0.4 broke the universal Linux terminal copy shortcut, forcing users to relearn basic workflows. | 21 comments, 👍8. Cross-platform input handling remains fragile. |
| [#3749](https://github.com/github/copilot-cli/issues/3749) | **Terminal streaming renderer corrupts output — doubled/truncated characters** | Freshly reported today: streamed reasoning and response text arrives with duplicated characters and truncated tokens, making output unreadable. | 2 comments, 👍2 (new). Likely related to [#3755](https://github.com/github/copilot-cli/issues/3755) (garbled thinking display). |
| [#3727](https://github.com/github/copilot-cli/issues/3727) | **v1.0.60 regression: `userPromptSubmitted` hook `additionalContext` no longer injected** | Plugin authors report that context injection worked in v1.0.59 and broke immediately after the v1.0.60 release — a clear regression boundary. | 3 comments. Impacts anyone building Copilot CLI plugins. |
| [#3596](https://github.com/github/copilot-cli/issues/3596) | **"Not authenticated" when listing models after session resume** | Resuming a named session breaks model enumeration, forcing users to start fresh sessions — a workflow killer for long-running tasks. | 5 comments, 👍10. |
| [#3701](https://github.com/github/copilot-cli/issues/3701) | **Runaway MCP server spawning on Windows (IDE lock-file watcher loop)** | On Windows, the IDE integration's lock-file watcher re-initializes MCP servers in an infinite loop, consuming resources. | 5 comments. Closed, but highlights Windows platform fragility. |
| [#2334](https://github.com/github/copilot-cli/issues/2334) | **Bring back `no-alt-screen`** | The switch to alt-screen mode removed scrollback, find-in-history, and the ability to review output while editing. | 7 comments, 👍28. Closed — but the demand for a non-alt-screen option remains strong. |
| [#3756](https://github.com/github/copilot-cli/issues/3756) | **Third-party MCP servers blocked by org policy (reoccurrence)** | A repeat of [#1707](https://github.com/github/copilot-cli/issues/1707): enterprise orgs see third-party MCP servers disabled in the CLI despite no such policy existing. | New today, 0 comments so far. Indicates the underlying bug was never fully resolved. |

---

## 4. Key PR Progress

Only **1 pull request** was updated in the last 24 hours:

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#3737](https://github.com/github/copilot-cli/pull/3737) | **Jigg empire ai** | Vague description ("Let's try this new method"); no meaningful detail provided. Author `j2030aiNotez` has no prior contribution history. | Open, 0 reactions. Low signal — likely noise or a test PR. |

*No substantive PRs landed today. The contribution pipeline appears quiet.*

---

## 5. Feature Request Trends

Synthesized from all open and recently closed issues:

1. **Model Parity with VS Code Copilot** — The single most-requested direction. Users want every model available in VS Code (Gemini 3.1 Pro, Gemini 3 Flash, Raptor mini, etc.) to appear in the CLI's `/model` picker. Issues: [#1703](https://github.com/github/copilot-cli/issues/1703), [#1664](https://github.com/github/copilot-cli/issues/1664), [#821](https://github.com/github/copilot-cli/issues/821), [#2550](https://github.com/github/copilot-cli/issues/2550), [#2854](https://github.com/github/copilot-cli/issues/2854).

2. **Enterprise & Org-Level Auth** — Fine-grained token support for org-owned automations, proper permission scopes, and reliable MCP policy enforcement. Issues: [#223](https://github.com/github/copilot-cli/issues/223), [#3756](https://github.com/github/copilot-cli/issues/3756), [#1707](https://github.com/github/copilot-cli/issues/1707).

3. **ACP / Custom Provider Support** — Respecting `COPILOT_PROVIDER_*` environment variables in `--acp` mode so users can route through OpenRouter and other providers. Issue: [#3048](https://github.com/github/copilot-cli/issues/3048).

4. **MCP Power-User Shortcuts** — A direct syntax (e.g., `#mcp-server:tool arg1 arg2`) to invoke MCP tools without LLM interpretation overhead. Issue: [#3752](https://github.com/github/copilot-cli/issues/3752).

5. **Terminal Rendering Control** — Opt-out of alt-screen, reliable clipboard integration (Linux Ctrl+Shift+C, Windows copy), and fix for streaming output corruption. Issues: [#2334](https://github.com/github/copilot-cli/issues/2334), [#2082](https://github.com/github/copilot-cli/issues/2082), [#3622](https://github.com/github/copilot-cli/issues/3622), [#3749](https://github.com/github/copilot-cli/issues/3749).

---

## 6. Developer Pain Points

- **Silent regressions at release boundaries.** The v1.0.60 → v1.0.59 plugin hook regression ([#3727](https://github.com/github/copilot-cli/issues/3727)) and the long-standing alt-screen change ([#2334](https://github.com/github/copilot-cli/issues/2334)) both shipped without opt-out paths, breaking workflows overnight.

- **Streaming output corruption.** Two new reports today ([#3749](https://github.com/github/copilot-cli/issues/3749), [#3755](https://github.com/github/copilot-cli/issues/3755)) describe the terminal renderer producing garbled, duplicated text during live streaming — a fundamental usability issue that makes the CLI nearly unusable for interactive sessions.

- **Model list inconsistency.** The CLI consistently shows fewer models than VS Code Copilot for the same account, with no transparency about why. This has been reported repeatedly since February 2026 with no resolution.

- **MCP policy false positives.** Enterprise users are blocked from third-party MCP servers despite no org policy enabling this restriction. The issue was "closed" once ([#1707](https://github.com/github/copilot-cli/issues/1707)) but has recurred ([#3756](https://github.com/github/copilot-cli/issues/3756)), suggesting the root cause was never fixed.

- **Session resume fragility.** Resuming named sessions breaks model listing ([#3596](https://github.com/github/copilot-cli/issues/3596)) and fails silently with names containing spaces ([#3754](https://github.com/github/copilot-cli/issues/3754)), undermining the CLI's utility for long-running or named workflows.

- **Cross-platform input/rendering bugs.** Linux copy shortcuts, Windows clipboard, and Windows MCP server spawning all exhibit platform-specific regressions that suggest insufficient cross-platform testing.

---

*Data source: [github.com/github/copilot-cli](https://github.com/github/copilot-cli) · Digest generated 2026-06-11*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-11

---

## 1. Today's Highlights

No new releases in the past 24 hours. The community remains highly active on the PR front, with **24 pull requests updated** — the vast majority being a coordinated batch of bug fixes merged by maintainer `he-yufeng`, covering Windows compatibility, web session handling, MCP resilience, and shell process management. On the issues side, three new bug reports surfaced around **file-reading loops**, **yolo mode approval prompts**, and **incomplete todo tracking**, all pointing to agent-loop reliability concerns in the v0.12.x cycle.

---

## 2. Releases

**None.** No new versions published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|--------------------|
| [#640](https://github.com/MoonshotAI/kimi-cli/issues/640) | **CLI stuck reading one file in an infinite loop** | A critical agent-loop bug on v0.76 with a custom Anthropic endpoint — the tool-use loop never terminates, rendering the session unusable. Affects users on non-standard provider configurations. | 7 comments, 1 👍 — longest-standing open issue of the batch; no maintainer response yet. |
| [#2448](https://github.com/MoonshotAI/kimi-cli/issues/2448) | **Yolo mode still prompts for approval** | Undermines the core value proposition of `--yolo` / auto-approve mode. If users explicitly opt out of confirmations, unexpected approval dialogs break automation workflows. | Fresh report (created & updated same day); no comments yet. |
| [#2447](https://github.com/MoonshotAI/kimi-cli/issues/2447) | **Final Todo item never completes** | The agent's task-tracking system leaves the last todo in an in-progress state indefinitely, which can block downstream automation that polls todo completion as a success signal. | Fresh report; no comments yet. |
| [#2173](https://github.com/MoonshotAI/kimi-cli/issues/2173) | **Enhancement: `!` shell command prefix behavior** | Closed without comments — likely a duplicate or resolved by another PR. Suggests ongoing confusion around shell escape semantics in the REPL. | Closed silently; 0 comments. |

**Takeaway:** The three open bugs all relate to **agent control flow** — the CLI failing to advance past a tool call, a mode flag being ignored, and a task-tracking state machine not reaching terminal state. These are high-severity for anyone running Kimi CLI in automated or CI contexts.

---

## 4. Key PR Progress

All listed PRs were **closed/merged** on 2026-06-10. The following 10 represent the most impactful changes:

| # | PR | Fix / Feature | Impact |
|---|----|--------------|--------|
| [#2355](https://github.com/MoonshotAI/kimi-cli/pull/2355) | **Continue after deferred MCP startup failures** | MCP servers that fail to start no longer abort the entire interactive turn. | Critical for users with flaky or optional MCP tool servers — prevents single-point-of-failure cascades. |
| [#2354](https://github.com/MoonshotAI/kimi-cli/pull/2354) | **Avoid shared rotating logs on Windows** | Uses per-process log files (`kimi.<pid>.log`) on Windows to prevent concurrent process log corruption. | Fixes a long-standing Windows reliability issue when running CLI + web + worker simultaneously. |
| [#2334](https://github.com/MoonshotAI/kimi-cli/pull/2334) | **Sanitize UTF-16 surrogates before Kimi requests** | Strips lone surrogate code units from outgoing chat-completion payloads. | Prevents API request failures when tool output or file content contains malformed Unicode. |
| [#2327](https://github.com/MoonshotAI/kimi-cli/pull/2327) | **Terminate shell process trees on timeout** | Runs shell commands in their own process group and kills the entire tree on timeout/cancellation. | Fixes orphaned child processes — a common pain point for long-running or hung shell tool calls. |
| [#2288](https://github.com/MoonshotAI/kimi-cli/pull/2288) | **Avoid resending web uploads after restart** | Persists upload `.sent` markers so restarted sessions don't re-attach files to new prompts. | Eliminates duplicate context injection after session recovery — important for the web UI workflow. |
| [#2235](https://github.com/MoonshotAI/kimi-cli/pull/2235) | **Omit empty tools in OpenAI legacy requests** | Stops serializing `tools: []` in API calls, which vLLM and similar backends reject. | Fixes `/compact` and other no-tool calls on OpenAI-compatible providers. |
| [#2217](https://github.com/MoonshotAI/kimi-cli/pull/2217) | **Recover background auto-trigger after cooldown** | Pauses background auto-trigger for 10 min after 3 consecutive failures, then resets. | Prevents runaway retry loops while preserving eventual recovery — a smart circuit-breaker pattern. |
| [#2211](https://github.com/MoonshotAI/kimi-cli/pull/2211) | **Propagate AFK mode to web workers** | Ensures `kimi --afk web` also starts worker subprocesses in non-interactive mode. | Fixes tool approval prompts leaking through in AFK web sessions. |
| [#2383](https://github.com/MoonshotAI/kimi-cli/pull/2383) | **Repair orphan tool_calls when replaying history** *(OPEN)* | Handles `context.jsonl` entries where an assistant message has `tool_calls` but no corresponding tool result (e.g., after OOM kill). | Addresses a crash-on-resume scenario that affects anyone running long sessions under memory pressure. |
| [#2387](https://github.com/MoonshotAI/kimi-cli/pull/2387) | **Preserve shell command headline details** *(OPEN)* | Stops truncating long shell commands to 50 chars in the `Used Shell (...)` UI headline. | Improves debuggability — users can now see the actual command that was executed. |

---

## 5. Feature Request Trends

Distilling from the full issue set:

1. **Agent loop robustness** — Multiple issues (#640, #2447, #2383) point to demand for more resilient agent execution: better loop detection, graceful handling of interrupted turns, and reliable todo/task state machines.
2. **Mode flag fidelity** — Issue #2448 (yolo mode) and PR #2211 (AFK propagation) reveal that **mode flags don't always permeate the full process tree**. Users expect `--yolo` and `--afk` to be absolute.
3. **Windows parity** — A significant portion of merged PRs (#2354, #2289, #2199, #2210, #1893) target Windows-specific bugs, indicating a large Windows user base that has historically been second-class. The community is actively closing this gap.
4. **Session recovery & undo** — PRs #2288, #2239, and #2386 all deal with session persistence, resumption, and undo correctness. Users treat Kimi CLI as a long-lived workspace, not a fire-and-forget tool.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Agent gets stuck in tool-use loops** | #640 (file-reading loop, 7 comments) | 🔴 High — blocks the entire session |
| **Mode flags silently ignored** | #2448 (yolo), #2211 (AFK workers) | 🔴 High — breaks automation trust |
| **Session corruption on crash/kill** | #2383 (orphan tool_calls), #2386 (undo mapping) | 🟡 Medium — affects long sessions |
| **Windows compatibility gaps** | 5+ dedicated Windows PRs merged in one batch | 🟡 Medium — improving rapidly |
| **MCP server fragility** | #2355 (deferred startup failures abort session) | 🟡 Medium — mitigated by latest PR |
| **Poor shell command visibility** | #2387 (truncated headlines) | 🟢 Low — cosmetic but affects debugging |

---

*Data source: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) · Digest generated 2026-06-11*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-11

---

## 1. Today's Highlights

OpenCode shipped **v1.17.3**, a hotfix for the desktop crash introduced in v1.17.2, continuing a rapid patch cycle. The community is heavily engaged around **image paste/attachment support** (36 comments, 22 upvotes) and **Vim motions in the prompt input** (32 comments, 165 upvotes), both of which are now actively being addressed in open PRs. A critical **snapshot performance regression** affecting massive repos (e.g., Chromium) was filed and fixed within the same day by contributor dmtrKovalenko.

---

## 2. Releases

### v1.17.3 — Desktop crash fix
- Fixes the desktop crash introduced in v1.17.2.

### v1.17.2 — Auth recovery & subagent permissions
- **Core:** Recovers from expired remote config auth by re-prompting login instead of failing silently. Restores subagent permission isolation.
- **Desktop:** Restores Linux launcher and icon identity so pinned apps keep opening correctly.

### v1.17.1 — Reference config & MCP fixes
- **Core:** References now support usage descriptions, appear in docs, and can be hidden from `@` autocomplete. Deprecated `reference` config entries continue to load under the newer `references` key. Fixes for MCP prompt and resource request handling.

### v1.17.0 — Faster search, Cohere North, reasoning field
- **Core:** New `fff`-backed search tools for faster file search across large projects. Added `X-Session-Id` headers for proxy sticky routing. Added Cohere North model support. Added `reasoning` as an interleaved field option.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#906](https://github.com/anomalyco/opencode/issues/906) | **Paste to attach image** | Users want clipboard-paste for images (like Excalidraw PNGs) instead of drag-and-drop only. Critical for visual workflows. | 36 comments, 👍22 — long-standing request since July 2025. |
| [#1764](https://github.com/anomalyco/opencode/issues/1764) | **Vim motions in input box** | Vim users expect modal editing in the prompt. Claude Code already has this. | 32 comments, 👍165 — one of the most upvoted feature requests. PR [#12679](https://github.com/anomalyco/opencode/pull/12679) is open. |
| [#14273](https://github.com/anomalyco/opencode/issues/14273) | **Free usage exceeded on Zen (false positive)** | Users with $3 balance still hit "Free usage exceeded" with Kimi K2.5/MiniMax2.5 free models. | 27 comments — billing confusion eroding trust in the free tier. |
| [#6330](https://github.com/anomalyco/opencode/issues/6330) | **Generic UI Intent Channel for plugins** | Plugins need a way to emit UI events (toasts, modals, navigation) through a standardized server-client protocol. | 17 comments, 👍8 — foundational for a richer plugin ecosystem. |
| [#25038](https://github.com/anomalyco/opencode/issues/25038) | **Long-running shell commands hang after completion** | Gradle/Android builds hang even after "BUILD SUCCESSFUL" — the process never returns control to the agent. | 11 comments, 👍6 — blocks mobile dev workflows. |
| [#26602](https://github.com/anomalyco/opencode/issues/26602) | **Desktop 5-min Headers Timeout with slow local providers** | Desktop aborts local OpenAI-compatible provider requests at 5 minutes regardless of config. | 8 comments — critical for users running local LLMs that need more time. |
| [#31747](https://github.com/anomalyco/opencode/issues/31747) | **fff scan times out on OneDrive File Provider trees (1.17.0+)** | New `fff` search in v1.17.0+ times out on home directories with OneDrive cloud files. | 4 comments — regression from the v1.17.0 search upgrade. |
| [#31687](https://github.com/anomalyco/opencode/issues/31687) | **Cache point after reasoning block (Amazon Bedrock Fable 5)** | OpenCode inserts cache points after reasoning blocks, which Bedrock rejects. | 4 comments — blocks Anthropic Fable 5 users on AWS. |
| [#31797](https://github.com/anomalyco/opencode/issues/31797) | **Session hangs in huge repos (Chromium) due to `git add --all`** | Snapshot step runs `git add --all` on 500k-file repos, causing indefinite hangs. | Fixed same-day by PR [#31798](https://github.com/anomalyco/opencode/pull/31798). |
| [#31772](https://github.com/anomalyco/opencode/issues/31772) | **V1 tool errors silently swallowed by `Effect.orDie`** | All V1 tool errors become defects, so the AI never sees error messages and can't self-correct. | 2 comments — significant reliability bug for V1 tool execution. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#31798](https://github.com/anomalyco/opencode/pull/31798) | **fix(snapshot): reuse source git objects to avoid re-hashing huge repos** | Fixes the Chromium-scale repo hang by reusing the source repo's git object store instead of `git add --all`. | ✅ Merged |
| [#12679](https://github.com/anomalyco/opencode/pull/12679) | **feat(tui): vim motions in prompt input** | Adds optional Vim modal editing to the TUI prompt. Enable via `tui.vim: true`. Closes #1764. | 🟡 Open |
| [#31799](https://github.com/anomalyco/opencode/pull/31799) | **fix: surface usage errors instead of only printing help** | Yargs `.fail()` handler now surfaces actual error messages instead of silently printing help text. | 🟡 Open |
| [#4604](https://github.com/anomalyco/opencode/pull/4604) | **feat(formatter): restrict formatting to changed line range** | clang-format now only formats the specific lines edited, preventing unrelated diff noise. | 🟡 Open |
| [#5422](https://github.com/anomalyco/opencode/pull/5422) | **feat(provider): provider-specific cache configuration** | Implements per-provider caching and prompt optimization. A/B tests show significant token reduction with Claude Opus 4.5. | 🟡 Open |
| [#5245](https://github.com/anomalyco/opencode/pull/5245) | **feat: integrate OpenTelemetry** | Adds OpenTelemetry tracing for observability. Useful for teams running OpenCode in production-like setups. | 🟡 Open |
| [#7302](https://github.com/anomalyco/opencode/pull/7302) | **feat: built-in browser tools via Playwright** | Browser automation toolkit (like Claude in Chrome / Cursor 2.0). Toggle with `OPENCODE_ENABLE_BROWSER=true`. | 🟡 Open |
| [#8535](https://github.com/anomalyco/opencode/pull/8535) | **feat(session): bi-directional cursor-based pagination** | Adds efficient cursor pagination for session messages across server, app, TUI, and HTTP API. | 🟡 Open |
| [#9871](https://github.com/anomalyco/opencode/pull/9871) | **feat: add /reload slash command** | Hot-reloads config (opencode.jsonc, plugins, MCP servers) without restarting the TUI. | 🟡 Open |
| [#12490](https://github.com/anomalyco/opencode/pull/12490) | **feat(cli): plugin disable/enable commands** | Adds `opencode plugin list/enable/disable` CLI commands so users don't have to edit config files manually. | 🟡 Open |

---

## 5. Feature Request Trends

1. **Rich input interactions** — Image paste/attachment (#906), drag-and-drop images in the question tool (#31791), and Vim motions (#1764) all point to demand for a more expressive, less text-only input experience.

2. **Plugin-driven extensibility** — The Generic UI Intent Channel (#6330) and plugin enable/disable CLI (#12490) reflect a maturing plugin ecosystem that needs better lifecycle management and UI integration.

3. **Model control & transparency** — Requests for reasoning_effort in UI (#450), DeepSeek V4 thinking toggle (#24610, #27555), and per-session model selection via ACP (#31750) show users want finer-grained control over model behavior.

4. **Observability & production readiness** — OpenTelemetry integration (#5245), provider-specific caching (#5422), and base-path/reverse-proxy support (#7625) indicate growing enterprise and self-hosted deployment use cases.

5. **Agent orchestration UX** — Subagent sidebar navigation (#4865, #14043), `/goal` command for autonomous task completion (#31762), and hot-reload (#9871) all aim to make multi-agent workflows more manageable.

---

## 6. Developer Pain Points

- **Silent failures & swallowed errors:** Multiple issues (#31772, #28370, #31766) report errors that are silently swallowed or produce unhelpful messages, making debugging extremely difficult.
- **Large-repo performance:** The snapshot `git add --all` hang (#31797), fff timeouts on cloud-synced directories (#31747), and 16GB snapshot files (#16438) all highlight that OpenCode struggles at scale with massive repositories.
- **Local/slow provider timeouts:** The hardcoded 5-minute headers timeout (#26602) and long-running shell command hangs (#25038) penalize users with slower hardware or local LLMs.
- **Billing & account confusion:** False "free usage exceeded" errors (#14273) and inability to delete Zen accounts (#18016) erode trust in the platform's account management.
- **Cross-platform inconsistencies:** macOS Unicode normalization failures (#31786), macOS clipboard copy broken in TUI (#7134), and Linux launcher icon identity (#v1.17.2) show platform-specific regressions slip through.
- **ACP protocol gaps:** Missing diff content in permission requests (#31781) and no per-session model selection (#31750) limit the viability of OpenCode as an ACP backend for third-party agents.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-11

---

## 1. Today's Highlights

The Pi ecosystem saw a surge of activity around **TUI stability and internationalization**, with multiple crash fixes for CJK text rendering, overlay compositing, and workflow editor autocomplete. On the provider side, **Anthropic streaming finalization** was fixed to properly treat `message_stop` as the logical end of a response, and a new **Palantir Foundry LLM proxy** provider was merged. Community frustration around the newly-landed **Project Trust gating feature** dominated discussion, with 25 comments and 13 reactions.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#5514](https://github.com/badlogic/pi-mono/issues/5514) | **[CLOSED] Project Trust Feature Feedback** | The newly-landed trust gating feature asks users to trust folders repeatedly, including across machines. This is the most-discussed issue today. | 25 comments, 👍13 — strong pushback from power users who find the prompts disruptive. |
| [#4180](https://github.com/badlogic/pi-mono/issues/4180) | **[CLOSED] Links not clickable anymore** | After a recent update, hyperlinks (full URLs and markdown links) became unclickable in the TUI, breaking a core UX pattern. | 13 comments, 👍0 — users report the regression clearly; linked to the big refactor. |
| [#3715](https://github.com/badlogic/pi-mono/issues/3715) | **[CLOSED] `local-llm` streams terminate at 5 min from undici default `bodyTimeout`** | Long-running tool calls against local backends (e.g. vLLM + Qwen3) die after exactly 5 minutes because `retry.provider.timeoutMs` cannot override the undici socket-level cap. | 10 comments, 👍4 — significant pain point for local-LLM users doing extended reasoning. |
| [#5611](https://github.com/badlogic/pi-mono/issues/5611) | **[CLOSED] GitLab Duo Anthropic streams hit ~90s cutoff before `message_stop`** | GitLab Duo's Anthropic proxy can close the stream before `message_stop`, causing Pi to retry the entire turn — problematic for Opus 4.8 extended thinking. | 3 comments — newly reported, likely affects all GitLab Duo users. |
| [#5536](https://github.com/badlogic/pi-mono/issues/5536) | **[OPEN] Split-turn compaction sends parallel summarization requests, causing 429 on single-concurrency local backends** | Auto-compaction fails on single-slot local backends (e.g. llama.cpp) because split-turn compaction fires two concurrent summary requests. | 2 comments — open issue, directly impacts local-LLM reliability. |
| [#5605](https://github.com/badlogic/pi-mono/issues/5605) | **[CLOSED] MiniMax-M3: `cache_control` ignored on Anthropic endpoint** | MiniMax-M3 routed through the Anthropic-compatible endpoint ignores `cache_control`, so every turn is billed at full input price ($0.60/Mtok) instead of the $0.12/Mtok cache-read rate. | 2 comments — cost impact is significant for heavy users. |
| [#5575](https://github.com/badlogic/pi-mono/issues/5575) | **[CLOSED] kimi-k2.6 via OpenCode Go fails with JSON Schema conflict** | Tool-enabled requests to kimi-k2.6 through OpenCode Go + LiteLLM fail with 400 due to JSON Schema incompatibility. | 2 comments — blocks a specific but popular model/provider combo. |
| [#5592](https://github.com/badlogic/pi-mono/issues/5592) | **[CLOSED] Anthropic streams wait for transport EOF after `message_stop`** | Pi's SSE iterator kept reading past `message_stop` until HTTP EOF, causing hangs with proxies that keep the connection open. | 2 comments — now fixed by PR [#5594](https://github.com/badlogic/pi-mono/pull/5594). |
| [#5603](https://github.com/badlogic/pi-mono/issues/5603) | **[CLOSED] Cost reporting: 1hr cache writes priced at 5min rate** | Anthropic bills 1-hour cache writes at 2× base input, but Pi prices all cache writes at the 5-minute rate (1.25×), leading to underreported costs. | 1 comment — accounting accuracy issue for teams tracking spend. |
| [#5577](https://github.com/badlogic/pi-mono/issues/5577) | **[CLOSED] Persona override for the generated system prompt** | User requests the ability to specify a persona (security, QA, PM, etc.) without losing the existing system prompt — reflecting Pi's expanding use beyond coding. | 2 comments — signals growing demand for multi-role agent configuration. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#5594](https://github.com/badlogic/pi-mono/pull/5594) | **Fix Anthropic stream finalization on `message_stop`** | Treats `message_stop` as the logical end of the assistant message instead of waiting for transport EOF; cancels the body reader to release the underlying connection. Fixes [#5592](https://github.com/badlogic/pi-mono/issues/5592). | ✅ Merged |
| [#5609](https://github.com/badlogic/pi-mono/pull/5609) | **feat(providers): add Palantir Foundry LLM proxy and OAuth provider** | Adds native support for Palantir Foundry AIP proxy, enabling routing to Anthropic, Google, xAI, and OpenAI models via Foundry OAuth tokens. | ✅ Merged |
| [#5587](https://github.com/badlogic/pi-mono/pull/5587) | **feat(coding-agent): add experimental first-time setup flow** | Behind `PI_EXPERIMENTAL=1`, shows a first-time setup dialog on interactive startup for terminal appearance and analytics opt-in. | ✅ Merged |
| [#5583](https://github.com/badlogic/pi-mono/pull/5583) | **fix(coding-agent): preserve clickable subscription login URLs** | Fixes long login URLs being broken by the TUI's left-padding space, ensuring OAuth login links remain clickable. | ✅ Merged |
| [#5585](https://github.com/badlogic/pi-mono/pull/5585) | **fix(tui): wrap CJK text at character boundaries in editor** | Fixes CJK text wrapping so line breaks occur at character boundaries rather than mid-grapheme. Fixes [#5582](https://github.com/badlogic/pi-mono/issues/5582). | ✅ Merged |
| [#5589](https://github.com/badlogic/pi-mono/pull/5589) | **fix(tui): stabilize overlay compositing at wide char boundary** | Fixes overlay positioning when the overlay start column lands in the middle of a wide base grapheme (e.g. CJK text), preventing right-shift rendering errors. | ✅ Merged |
| [#5560](https://github.com/badlogic/pi-mono/pull/5560) | **fix(coding-agent): parse `:thinking` suffix from custom model IDs** | Parses the `:thinking` suffix from custom model IDs in the fallback path; keeps the suffix as part of the model ID when `--thinking` is explicitly specified. Fixes [#5552](https://github.com/badlogic/pi-mono/issues/5552). | ✅ Merged |
| [#5586](https://github.com/badlogic/pi-mono/pull/5586) | **fix(ai/bedrock): use resolved `apiKey` as bearer-token fallback** | Allows `bedrock-converse-stream` to use a gateway token configured via `models.json` `apiKey` as a bearer-token fallback. Fixes [#5584](https://github.com/badlogic/pi-mono/issues/5584). | ✅ Merged |
| [#5600](https://github.com/badlogic/pi-mono/pull/5600) | **fix(ai): honor Codex SSE header timeout setting** | Makes the Codex SSE header timeout configurable instead of hardcoded to 10s, allowing slow/unstable connections to succeed with a higher `timeoutMs`. | 🟡 Open |
| [#5509](https://github.com/badlogic/pi-mono/pull/5509) | **feat: Add Amazon Bedrock Mantle OpenAI Responses provider** | Adds a new provider for Amazon Bedrock Mantle's OpenAI Responses API, supporting GPT 5.5 and 5.4 models. | 🟡 Open |

---

## 5. Feature Request Trends

1. **Multi-role / persona system prompts** — Users increasingly use Pi for non-coding tasks (security, QA, PM, research) and want a way to specify agent persona without overwriting the base system prompt. ([#5577](https://github.com/badlogic/pi-mono/issues/5577))

2. **Extension UI components** — Demand for richer extension APIs, including a `multi-select-list` component ([#5509](https://github.com/badlogic/pi-mono/issues/5025)) and extension events for command execution ([#5608](https://github.com/badlogic/pi-mono/issues/5608)).

3. **Custom OAuth callback rendering** — Callers want to provide their own callback page renderer for OAuth login flows instead of being locked into Pi's internal HTML. ([#5372](https://github.com/badlogic/pi-mono/issues/5372))

4. **RPC mode parity** — Users want `clear_queue` exposed in RPC mode to clear queued steering/follow-up messages programmatically. ([#5606](https://github.com/badlogic/pi-mono/issues/5606))

5. **Global "max" thinking level** — Framework-level support for the maximum thinking level (e.g. Claude Opus 4.8) across providers. ([#5610](https://github.com/badlogic/pi-mono/issues/5610))

---

## 6. Developer Pain Points

- **Local LLM reliability** — Multiple compounding issues: 5-minute undici body timeout ([#3715](https://github.com/badlogic/pi-mono/issues/3715)), split-turn compaction 429s on single-slot backends ([#5536](https://github.com/badlogic/pi-mono/issues/5536)), and MiniMax-M3 cache billing ([#5605](https://github.com/badlogic/pi-mono/issues/5606)). Local-backend users face a gauntlet of timeout, concurrency, and cost-accuracy problems.

- **TUI stability** — A cluster of hard crashes hit the TUI today: `WorkflowEditor` autocomplete crash on non-string values ([#5604](https://github.com/badlogic/pi-mono/issues/5604)), `getTextOutput` crash on undefined `result.content` ([#5599](https://github.com/badlogic/pi-mono/issues/5599)), and `Box.render` crash on undefined child components ([#5597](https://github.com/badlogic/pi-mono/issues/5597)). These are process-killing, not graceful errors.

- **Anthropic streaming edge cases** — Multiple issues with stream finalization: waiting for EOF past `message_stop` ([#5592](https://github.com/badlogic/pi-mono/issues/5592)), GitLab Duo 90s cutoff ([#5611](https://github.com/badlogic/pi-mono/issues/5611)), and `simple` API sending `thinking: {type: "disabled"}` to adaptive-thinking models ([#5569](https://github.com/badlogic/pi-mono/issues/5569)). The Anthropic-compatible proxy landscape is fragmenting.

- **Trust gating fatigue** — The newly-landed project trust feature is generating immediate backlash from power users who find repeated trust prompts across machines disruptive. ([#5514](https://github.com/badlogic/pi-mono/issues/5514))

- **Cost reporting accuracy** — Cache write pricing is underreported for 1-hour retention ([#5603](https://github.com/badlogic/pi-mono/issues/5603)), and MiniMax-M3 users are overbilled due to ignored `cache_control` ([#5605](https://github.com/badlogic/pi-mono/issues/5605)). Teams relying on Pi's cost tracking are getting inaccurate numbers.

- **Cross-platform shell compatibility** — The `!` bash command runner uses `/bin/bash` by default, breaking zsh plugin commands like `gf` for users on zsh with plugins. ([#5578](https://github.com/badlogic/pi-mono/issues/5578))

---

*Digest generated by OWL for the Pi community. Data source: [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono). Coverage: issues and PRs updated 2026-06-10 to 2026-06-11.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-11

---

## 1. Today's Highlights

Qwen Code saw a surge of activity around **terminal input handling and raw-mode bugs**, with multiple P1/P2 issues and PRs converging on the `KeypressContext` / ink input pipeline. The community is also pushing hard on **subagent UX** — fork subagents going default, background agent permission queuing, and cross-session `/rewind` persistence all have active PRs. No new releases in the last 24 hours.

---

## 2. Releases

**None.** No new versions published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|---------------|-----------------|
| [4942](https://github.com/QwenLM/qwen-code/issues/4942) | **VP mode scroll conflicts with Composer input** | Virtualized History mode breaks the most common interaction — scrolling chat while the Composer is active. This blocks flipping `ui.useTerminalBuffer` to default-on. | 4 comments, active discussion |
| [4973](https://github.com/QwenLM/qwen-code/issues/4973) | **Terminal drops to cooked mode — all input dead until Enter** | P1 raw-mode regression: `KeypressContext` skips raw-mode acquisition when stdin is already raw, leaving the terminal unresponsive. Critical UX breakage. | 1 comment, `ready-for-agent` label |
| [4974](https://github.com/QwenLM/qwen-code/issues/4974) | **SGR mouse wheel sequences leak as typed text into input box** | Mouse scroll events (`64;50;15M`) are double-consumed — parsed correctly for scrolling but also fed through `KeypressContext` as literal text. Corrupts user input. | 2 comments |
| [4930](https://github.com/QwenLM/qwen-code/issues/4930) | **`env` in read-only command allowlist enables arbitrary command execution** | Security: `env` can execute commands via `env COMMAND=val cmd`, bypassing the confirmation prompt. Closed but highlights a real sandbox escape. | 1 comment, P1/security |
| [4877](https://github.com/QwenLM/qwen-code/issues/4877) | **OpenWork can't distinguish same model from different providers** | When two providers expose identically-named models, the model picker silently conflates them. Breaks multi-provider setups. | 3 comments |
| [4891](https://github.com/QwenLM/qwen-code/issues/4891) | **Terminal resize during streaming leaves fragmented scrollback** | Resizing mid-generation produces content rendered at inconsistent widths. Visual corruption in scrollback history. | 3 comments |
| [4966](https://github.com/QwenLM/qwen-code/issues/4966) | **SchemaValidator missing numeric string coercion causes MCP tool failures** | LLMs frequently emit `{"depth": "3"}` instead of `{"depth": 3}`; strict MCP servers reject these. Silent tool failures. | 2 comments |
| [4964](https://github.com/QwenLM/qwen-code/issues/4964) | **Recover from max_tokens truncation** | When a response is truncated by `max_tokens`, the model receives no structured signal to continue. Wasted tool calls and broken file writes. | 2 comments |
| [4976](https://github.com/QwenLM/qwen-code/issues/4976) | **Auto-generated memory interferes with normal CLI calls** | The auto-memory-recall feature injects context that derails tool-calling, causing the model to take wrong turns on straightforward tasks. | 2 comments |
| [4928](https://github.com/QwenLM/qwen-code/issues/4928) | **Background subagents auto-deny permission-required tool calls** | Background agents silently drop tool calls needing approval instead of surfacing them to the parent session. Kills autonomous workflows. | 2 comments |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [4963](https://github.com/QwenLM/qwen-code/pull/4963) | **Enable fork subagents by default** | Promotes fork subagents from env-gated experiment to always-on in interactive sessions. Sets implicit fork agent approval mode to `default` for safety. Addresses #4956. | OPEN |
| [4959](https://github.com/QwenLM/qwen-code/pull/4959) | **Enable VP scroll at idle prompt + fix viewport height** | Fixes three blockers for default-on Virtual Viewport: key binding disambiguation (`shift: false` on nav keys), scroll at idle prompt, and viewport height miscalculation. | OPEN |
| [4911](https://github.com/QwenLM/qwen-code/pull/4911) | **Route down-arrow straight to live agent panel** | Reorders TUI focus chain so Down from empty input reaches a running background sub-agent in one press instead of two. | OPEN |
| [4972](https://github.com/QwenLM/qwen-code/pull/4972) | **Make /settings mouse-reachable via status-bar gear icon** | Adds a gear icon to the web-shell status bar to toggle `/settings` without typing. Improves discoverability. | CLOSED (merged) |
| [4977](https://github.com/QwenLM/qwen-code/pull/4977) | **Collapse thinking output to 5-line window** | Bounds thinking/streaming output in the Web Shell to a 5-line tail-following window with expand/collapse toggle. Reduces visual noise. | OPEN |
| [4975](https://github.com/QwenLM/qwen-code/pull/4975) | **Merge adjacent tool calls into single tool_group card** | Renders consecutive tool calls without intervening output as a single grouped card in the web shell, matching native CLI behavior. | OPEN |
| [4897](https://github.com/QwenLM/qwen-code/pull/4897) | **Persist file history snapshots for cross-session /rewind** | Writes `FileHistorySnapshot` to JSONL as system records so `/rewind` survives session resume. Previously lost on process exit. | OPEN |
| [4914](https://github.com/QwenLM/qwen-code/pull/4914) | **Harden OOM prevention — idempotent compaction tests, explicit GC** | Adds regression tests for `compactOldItems` idempotency, explicit GC triggers, and debug log defaults. Closes #4815. | OPEN |
| [4970](https://github.com/QwenLM/qwen-code/pull/4970) | **Stabilize truncated tool retry keys** | Makes validation retry tracking ignore truncation-appended guidance text so the scheduler correctly deduplicates retries on the underlying schema error. | OPEN |
| [4844](https://github.com/QwenLM/qwen-code/pull/4844) | **Add Agent Team experimental feature for parallel sub-agent coordination** | Model can create named teams, spawn parallel sub-agents that message each other and the leader, share a task list, and consolidate results. | CLOSED (merged) |

---

## 5. Feature Request Trends

1. **Subagent & Background Automation** — The dominant theme. Fork subagents by default (#4956 → PR #4963), background agent permission queuing (#4928), Agent Team parallel coordination (PR #4844 merged), and task/goal/auth workflows in web shell (PR #4856). The community wants Qwen Code to match and exceed Claude Code's subagent ergonomics.

2. **Cross-Session Persistence** — `/rewind` across sessions (PR #4897), global usage stats across sessions (#4597), and persistent file history snapshots. Users expect state to survive process restarts.

3. **Terminal/CLI Rendering Parity** — Web shell catching up to native CLI: tool_group batch rendering (PR #4975), thinking output collapsing (PR #4977), mouse-reachable settings (PR #4972 merged). Also VP mode polish (#4959) and terminal resize fixes (#4891).

4. **MCP Tool Resilience** — Numeric string coercion for MCP parameters (#4966), `deniedMcpServers` policy complementing `allowedMcpServers` (#4940). As MCP adoption grows, robustness and security policy granularity become critical.

5. **Context & Token Management** — QWEN.md length warnings scaled to model context window (#4941), grep satisfying read-before-edit checks (#4939), and compaction when usage metadata is missing (PR #4528). Users want smarter, less wasteful context handling.

---

## 6. Developer Pain Points

- **Terminal input pipeline fragility** — Multiple overlapping bugs in `KeypressContext`, raw-mode refcounting, and SGR mouse sequence handling (#4973, #4974, #4942) suggest the ink input layer needs a systematic audit. These are P1/P2 issues causing total input lockup or text corruption.

- **Virtual Viewport not ready for default-on** — At least three distinct issues (#4942, #4921, #4959) block enabling Virtualized History by default. The community clearly wants this (it's a marquee UX feature) but scroll, focus, and viewport height bugs keep it gated.

- **Subagent permission model is too rigid** — Background agents silently auto-deny tool calls requiring approval (#4928), and there's no built-in way to bubble those prompts to the parent session. This makes autonomous multi-agent workflows impractical out of the box.

- **MCP tool call brittleness** — Strict schema validation rejecting string-typed numerics (#4966) is a silent failure mode that wastes entire tool-call rounds. Developers expect the client to coerce types before forwarding to the server.

- **Auto-memory recall causing tool-call derailment** (#4976) — The feature injects context that confuses the model on straightforward tasks. Users want a toggle to disable auto-recall while keeping extract/dream (#4374).

- **Token count display accuracy questioned** (#4951) — Users report statusline token counts seeming inflated (hundreds of K for a few sentences), eroding trust in the telemetry.

---

*Data source: [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) · Digest generated by OWL for 2026-06-11*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*