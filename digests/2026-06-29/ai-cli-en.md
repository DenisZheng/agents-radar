# AI CLI Tools Community Digest 2026-06-29

> Generated: 2026-06-29 00:40 UTC | Tools covered: 9

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

# AI CLI Tools Cross-Comparison Report — 2026-06-29

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem is in a phase of rapid divergence and intensifying competition. What began in 2024–2025 as a handful of terminal-based coding assistants has matured into a segmented landscape: Anthropic's Claude Code dominates mindshare and ecosystem depth, OpenAI's Codex is iterating aggressively on multi-agent architecture and TUI polish, Google's Gemini CLI is tackling agent reliability at the model-capability layer, and a constellation of open-source and challenger tools (OpenCode, Pi, Qwen Code, Kimi CLI, GitHub Copilot CLI, DeepSeek TUI) are competing on permission models, cost transparency, cross-platform UX, and provider agnosticism. Three tectonic themes are reshaping the space: **(1)** agentic cost control has become a first-class concern as multi-agent workflows risk burning through budgets in minutes; **(2)** plugin/MCP ecosystems are the new battleground for platform lock-in vs. extensibility; and **(3)** the permission model — how tools gate autonomous actions — is the most architecturally contested design decision across the ecosystem.

---

## 2. Activity Comparison

| Tool | Issues Active (24h) | PRs Active (24h) | Release Status | Notable Signal |
|---|---|---|---|---|
| **Claude Code** | 50 | 5 | No release; high chan activity | Plugin marketplace UX, agentic cost overruns, sandbox edge cases |
| **OpenAI Codex** | ~20+ | 10+ merged/open | v0.142.3 (no new today) | Rate-limit accounting regression (dominant), multi-agent TUI improvements |
| **Gemini CLI** | 10 | 10+ (many dep bumps) | Nightly shipped 2026-06-28 | Agent hangs, false-success reporting, security fix landed |
| **GitHub Copilot CLI** | 7 | 0 (1 closed no-op) | No release | Session management UX, soft-wrap regression, enterprise proxy |
| **Kimi CLI** | 2 | 0 | No release | File-reading loop, VS Code memory bloat — quiet backlog |
| **OpenCode** | 10 | 10 merged | No release | Billing/activation failures, desktop stability, mode enforcement |
| **Pi** | 10 | 6 merged + 2 open | No release | Streaming reliability, provider-agnostic auth, extension API |
| **Qwen Code** | 10 | 10+ open | v0.19.3 released | Zombie session token leak, IME/UI bugs, multi-agent RFC |
| **DeepSeek TUI** | 10+ | 10+ open/merged | Targeting v0.8.67 | Mode semantics overhaul, migration fixes, modal UI rework |

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities, signaling industry-wide demand:

| Direction | Tools | Specific Needs |
|---|---|---|
| **Agentic cost control & budget governance** | Claude Code (#72127), Codex (#28879, #30002), Qwen Code (#5964), OpenCode (#30680) | Per-session spend caps, real-time usage dashboards, authorization prompts before parallel agent spawning, rate-limit transparency |
| **Permission model sophistication** | Claude Code (#55095), DeepSeek TUI (#3736, #3742), OpenCode (#29755, #34190), Gemini CLI (#22093) | Granular tool-class deny rules, plan-mode enforcement, trust-bypass separation, failure-closed security postures |
| **Session export, reuse & handoff** | Claude Code (#72121, #72037), Copilot CLI (#3970, #3971), Qwen Code (#5852, #5030), OpenCode (#34336) | Export chats as skills/agents, session tagging, resumable streams, cross-LLM context handoff |
| **Sandbox / containment reliability** | Claude Code (#64301, #39429), Codex (#29072, #30473), Gemini CLI (#19873), OpenCode (#34190) | Cross-platform sandbox consistency, Windows parity, bubblewrap/grubble containment, non-interference with host shortcuts |
| **Cost-aware context management** | Qwen Code (#5942, #5950, #5957), DeepSeek TUI (#3738, #3743), Codex (#28879) | Prompt-cache hit optimization, output-token-aware compaction thresholds, per-route cache telemetry |
| **TUI/UX polish & responsiveness** | Codex (#5825-equivalent scroll issues), Pi (#5825, #6131), OpenCode (#13984), Qwen Code (#5941, #5800), DeepSeek TUI (#3728, #3732) | Scroll-during-stream behavior, copy/paste fidelity, CPU/freeze fixes, Unicode/IME support |
| **Plugin/extension ecosystem** | Claude Code (#42142, #72014, #72037), Pi (#4945-channel, #6089), OpenCode (#34356), Qwen Code (#5847) | Marketplace UX, Cedar/policy-based tool gates, configurable plugins via standard APIs |

---

## 4. Differentiation Analysis

### Claude Code — *The Ecosystem Moat*
**Target:** Professional developers, power users, IDE-integrated workflows.
**Differentiator:** The deepest plugin/MCP ecosystem (handover plugins, protect-mcp policy gates), the most granular permission controls, and the strongest IDE integration surface (VS Code, JetBrains, Desktop). The community's top asks — open-sourcing (#41447), session-as-skill export (#72121) — reveal a user base that wants to build *on top of* the tool, not just use it. Pain points center on plugin platform maturity and agentic cost overruns, suggesting the ecosystem has outpaced the guardrails.

### OpenAI Codex — *The Multi-Agent Pioneer*
**Target:** Developers building agentic workflows, especially those already in the OpenAI ecosystem.
**Differentiator:** Architectural lead in multi-agent V2 (thread-scoped skills, configurable agent hints, `writes` approval mode), aggressive TUI innovation (remote plugins by default, reasoning effort display), and the deepest investment in approval-mode UX. The 10–20× rate-limit regression (#28879, 337 👍) is both a vulnerability (backend dependency) and a signal of how many users are pushing GPT-5.5 to its limits.

### Gemini CLI — *The Model-Native Approach*
**Target:** Google Cloud / Vertex AI users, developers who value model capability over tooling breadth.
**Differentiator:** Tightest coupling to Gemini model capabilities (AST-aware reads, native bash affinity via sandboxing), aggressive security posture (case-insensitive blocklists via community PRs), and the most active dependency hygiene. Pain points skew toward **agent reliability** (hangs, false-success reporting) and **memory system correctness** — reflecting the difficulty of building autonomous agents on a model that "wants" to use tools aggressively.

### OpenCode — *The Open-Source Generalist*
**Target:** Indie developers, open-source enthusiasts, multi-provider users.
**Differentiator:** Broad provider support (Copilot, OpenAI, custom endpoints, FreeBSD), the most active PR throughput in the ecosystem (~10 merged/day), and progressive features like auto-compaction V2 and an embedders plugin API (#34356). The #1 pain point is **billing/trust** (Go subscription activation failures), indicating the project's maturity ceiling is now organizational rather than technical.

### Pi — *The Provider-Agnostic Minimalist*
**Target:** Developers who want a lightweight, terminal-native AI interface without vendor lock-in.
**Differentiator:** Extreme provider flexibility (custom endpoints, multiple auth methods), minimal UX philosophy, and some of the fastest PR merge cycles. Armin Ronacher's (mitsuhiko) involvement on foundational UX PRs signals Python-ecosystem credibility. Pain points center on **streaming reliability** with Codex backend and **cross-platform edge cases**.

### Qwen Code — *The Mobile & Multi-Modal Play*
**Target:** Chinese-language developers, mobile/web users, multi-agent workflow builders.
**Differentiator:** Unique investments in Web Shell + mobile browser input, Chinese IME support, channel-resident multiplayer agents (DingTalk integration via #5888), and the `/loop` durable task persistence. The zombie-session token leak (#5964, 30M tokens) is a cautionary signal about the cost risks of always-on agent daemons.

### DeepSeek TUI — *The Permission Model Lab*
**Target:** Security-conscious developers, Rust comunitants, mode-driven workflow users.
**Differentiator:** The most architecturally experimental approach to mode/permission design — currently dismantling a 4-boolean permission model into a cleaner 2-knob system, adding verifier agents that emit hunt verdicts, and maintaining the most explicit Auto/Plan/YOLO mode taxonomy. Small rapidly-shipping development team.

### GitHub Copilot CLI — *The Enterprise Integrator*
**Target:** Enterprise developers already in the GitHub ecosystem.
**Differentiator:** Tightest GitHub-native integration (repo-backed sessions, Copilot model routing), the most enterprise-focused feature requests (session tags, plan status badges), and the fewest platform-specific bugs. Activity is lower, suggesting either quieter development or a more curated release cadence.

### Kimi CLI — *The Dark Horse*
**Target:** Users of non-standard/non-Anthropic model providers.
**Differentiator:** Focus on custom endpoint compatibility (mimo-v2-flash, non-standard Anthropic-compatible APIs). Community is small but vocal about the file-reading loop bug that breaks non-default configurations — a signal that endpoint compatibility is all-or-nothing for this tool's value proposition.

---

## 5. Community Momentum & Maturity

### Tier 1: Massive & Fast-Moving
- **Claude Code**: Highest absolute activity (50 issues/day), most extensive feature surface, largest plugin ecosystem. The open-source PR (#41447) is the single most-watched PR across the ecosystem. Maturity is high but outpaced by agentic complexity.
- **OpenAI Codex**: Most-engaged single issue in the ecosystem (337 👍 on #28879), aggressive PR cadence, architectural ambition with multi-agent V2. The rate-limit regression shows the risk of tight backend coupling.

### Tier 2: High Throughput, Growing Ambition
- **OpenCode**: Highest daily PR merge rate (~10/day), broadest provider support, most active feature development relative to user base size. Billing/trust issues are the primary risk to momentum.
- **Qwen Code**: Strong release cadence (v0.19.3 shipped), unique mobile/multiplayer direction, largest non-English user base. The zombie-session bug needs a fast fix to maintain trust.
- **Gemini CLI**: Active nightly releases, strong security posture, heaviest dependabot investment. Agent reliability issues suggest the technical foundation is solid but the autonomous agent layer needs hardening.

### Tier 3: Steady, Community-Driven
- **Pi**: Fast merge cycles, contributor-friendly (community-driven security fix shipped), strong provider-agnostic vision. Scaling challenge is retaining users when streaming reliability breaks.
- **DeepSeek TUI**: Small but extremely high-quality iteration (mode system overhaul, migration UX, verifier agents). Punching above its weight architecturally.

### Tier 4: Early / Niche
- **GitHub Copilot CLI**: Low visible activity, enterprise-focused pain points (proxy support, session management). Likely shipping via private/internal release processes.
- **Kimi CLI**: Minimal visible activity, small community, but addresses a real gap (non-standard endpoint compatibility). The file-reading loop bug has been open for months.

---

## 6. Trend Signals

### 🔴 Critical: Agentic Cost Governance is the #1 Emerging Requirement
Across **Claude Code, Codex, Qwen Code, and OpenCode**, the dominant theme is the same: agents can burn through budgets 6–20× faster than expected, with poor observability and insufficient guardrails. The Claude Code Workflow agent spawning 8–10 parallel researchers without authorization, Codex's rate-limit multiplier miscalibration draining Plus plans in minutes, and Qwen Code's zombie session consuming 30M tokens overnight are all manifestations of the same underlying gap. **Implication:** The next competitive moat is not model quality — it's cost governance infrastructure.

### 🟡 Watch: Permission Models are in Active Flux
The ecosystem is converging on the realization that binary "allow/deny" or "auto/plan/yolo" models are insufficient. DeepSeek TUI is collapsing 4 booleans into 2, OpenCode is fixing wildcard deny rules that didn't protect `.env` files, Gemini CLI is dealing with subagent permission regressions, and Claude Code is building Cedar-policy-based tool gates. **Implication:** Expect a new permission architecture to emerge — class-based rules with scoped inheritance, user-overridable defaults, and audit trails.

### 🟡 Watch: The MCP/Plugin Economy is Table Stakes
Claude Code's plugin marketplace issues, OpenCode's MCP tool exposure, Pi's extension API, and Qwen Code's runtime config injection all point to the same conclusion: extensibility via plugins/MCP servers is no longer optional. **Implication:** Tools without a plugin ecosystem by mid-2027 will be considered legacy.

### 🟢 Emerging: Mobile & Web as First-Class Targets
Only Qwen Code is investing seriously in mobile input and Web Shell. As AI coding moves beyond the terminal (e.g., reviewing PRs from a phone, directing agents from a tablet), this could become a differentiator. **Implication:** The terminal-only assumption will loosen; tools that offer a web or mobile companion interface will capture new user segments.

### 🟢 Emerging: Provider Agnosticism as a Survival Strategy
Pi, OpenCode, and Kimi CLI all compete primarily on provider flexibility. With model quality converging and pricing in flux, the ability to switch providers without workflow disruption is a growing advantage. **Implication:** Tools locked to a single model provider (Codex → GPT, Gemini → Gemini) face concentration risk that multi-provider tools can mitigate.

### 🟢 Emerging: Prompt-Cache Economics
Qwen Code, DeepSeek TUI, and (implicitly) Codex users are increasingly aware that cache misses directly translate to higher API bills. Per-turn metadata, route fragmentation, and tokenizer-driven prefix busting are becoming first-order cost optimization targets. **Implication:** Cache telemetry will become a standard feature, and tools that can guarantee cache-friendly prompt construction will offer 20–40% cost savings.

---

### Developer Summary

AI CLI tools in mid-2026 face a shared technical plateau: the core UX patterns are commoditized, and differentiation is shifting to agent orchestration models, cost governance, and permission system sophistication. Claude Code continues to leverage its ecosystem lead through the breadth and depth of its plugin marketplace, but that advantage is increasingly tested by growing demands for cost controls and more mature guardrails against agentic overruns. OpenAI Codex is pushing hardest on multi-agent architecture and TUI polish, while challenger tools like OpenCode and Pi distinguish themselves through provider agnosticism and rapid open-source iteration. For developers building in this space, the critical lessons are that cost control, permission design, and plugin infrastructure are now the decisive battlegrounds — and no tool has yet delivered a fully satisfactory solution across all three.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

*Data as of 2026-06-29 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

| # | Skill / PR | Focus | Status |
|---|---|---|---|
| 1 | **[skill-creator eval fix](https://github.com/anthropics/skills/pull/1298)** | Fixes `run_eval.py` reporting 0% recall; addresses Windows stream reading, trigger detection, and parallel workers | 🟢 Open |
| 2 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | Typographic quality control for AI-generated documents (orphan words, widow paragraphs, numbering) | 🟢 Open |
| 3 | **[ODT skill](https://github.com/anthropics/skills/pull/486)** | Create, fill, read, and convert OpenDocument Format files (.odt, .ods) | 🟢 Open |
| 4 | **[frontend-design improvement](https://github.com/anthropics/skills/pull/210)** | Improves clarity and actionability of the frontend-design skill | 🟢 Open |
| 5 | **[skill-quality & security analyzers](https://github.com/anthropics/skills/pull/83)** | Meta-skills that evaluate other skills across quality and security dimensions | 🟢 Open |
| 6 | **[DOCX tracked-change fix](https://github.com/anthropics/skills/pull/541)** | Prevents document corruption from w:id collisions with existing bookmarks | 🟢 Open |
| 7 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | Comprehensive testing stack: unit, React, integration patterns | 🟢 Open |
| 8 | **[AppDeploy](https://github.com/anthropics/skills/pull/360)** | Deploy and manage full-stack web apps directly from Claude | 🟢 Open |

> **Note:** All listed PRs show `Comments: undefined` in the dataset, suggesting comment counts may not be fully captured. Ranking above is based on recency, update activity, and cross-referencing with the Issues section (e.g., the `run_eval.py` bug is referenced by 10+ independent reports in [#556](https://github.com/anthropics/skills/issues/556)).

---

## 2. Community Demand Trends

From the top Issues by engagement:

- **🔒 Trust & Security** — [#492](https://github.com/anthropics/skills/issues/492) (27 comments): Community skills under the `anthropic/` namespace create impersonation risk. Demand for namespace verification or official-badge mechanisms is strong.
- **🏢 Org-wide Sharing** — [#228](https://github.com/anthropics/skills/issues/228) (14 comments, 👍7): Teams want native skill distribution within organizations — no more manual `.skill` file sharing.
- **🐛 skill-creator Reliability** — [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 👍7) + [#1169](https://github.com/anthropics/skills/issues/1169): The description-optimization loop is fundamentally broken on multiple platforms; this is the single most-reported technical pain point.
- **🔌 MCP Interop** — [#16](https://github.com/anthropics/skills/issues/16): Interest in exposing Skills as MCP servers for broader tool ecosystem compatibility.
- **☁️ Cloud Platform Support** — [#29](https://github.com/anthropics/skills/issues/29): Bedrock integration remains unclear; users want official guidance.
- **🧠 Agent Memory** — [#1329](https://github.com/anthropics/skills/issues/1329) + [#154](https://github.com/anthropics/skills/pull/154): Persistent cross-conversation memory is a recurring ask.

---

## 3. High-Potential Pending Skills

These PRs have active discussion and address clear pain points — likely candidates for near-term merge:

| PR | Why It Matters |
|---|---|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** — skill-creator eval fix | Unblocks the entire description-optimization pipeline; directly resolves the most-upvoted bug report |
| **[#1323](https://github.com/anthropics/skills/pull/1323)** — run_eval trigger detection fix | Complements #1298; addresses a second root cause of the 0% recall problem |
| **[#1050](https://github.com/anthropics/skills/pull/1050)** — Windows subprocess + encoding | Unblocks Windows users from running the skill-creator toolchain at all |
| **[#362](https://github.com/anthropics/skills/pull/362)** — UTF-8 panic fix | Prevents Rust panics on multi-byte characters; affects international users |
| **[#514](https://github.com/anthropics/skills/pull/514)** — document-typography | Solves a universal quality issue across all document-generating skills |
| **[#723](https://github.com/anthropics/skills/pull/723)** — testing-patterns | Fills a clear gap; testing is one of the most-requested skill categories |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is reliability of the skill-creator toolchain itself** — specifically fixing the broken eval/optimization loop (`run_eval.py` recall=0% bug) that has spawned 10+ independent reports and 3+ competing PRs, making it the single highest-signal issue in the repo.

---

*Report generated 2026-06-29 · [anthropics/skills](https://github.com/anthropics/skills)*

---

# Claude Code Community Digest — 2026-06-29

---

## 1. Today's Highlights

No new releases in the last 24 hours. The community is active with **50 issues** and **5 PRs** updated in the past day, spanning plugin ecosystem bugs, agentic workflow reliability, and platform-specific regressions. The most-discussed topics are **plugin marketplace UX gaps**, **agent cost-control failures**, and **sandbox/permission edge cases** across platforms.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

### 1. Claude Code Desktop missing `/plugin` command — and Claude hallucinates it
**[#42142](https://github.com/anthropics/claude-code/issues/42142)** · 👍 8 · 9 comments · OPEN
The Desktop app lacks the `/plugin` command and plugin marketplace support. Compounding the frustration: Claude itself hallucinates that the command exists, leading users into a loop. This is a top-tier UX issue for anyone managing extensions via the GUI.

### 2. `/usage` command rate-limited, shows error instead of data
**[#32503](https://github.com/anthropics/claude-code/issues/32503)** · 👍 13 · 9 comments · OPEN
Running `/usage` to check consumption fails with a `rate_limit_error`. Users on the cost/rate-limiting path can't monitor their own usage — a critical gap for budget-conscious developers and teams.

### 3. Workflow tool burns through 5× plan budget in ~5 minutes with no authorization
**[#72127](https://github.com/anthropics/claude-code/issues/72127)** · 3 comments · OPEN
After rejecting one agent call and saying "continue," Claude silently spawned 8–10 parallel research agents via a Workflow, consuming the entire plan with no warning or approval prompt. A serious agentic cost-control failure.

### 4. Bypass permissions mode no longer appears in Desktop session UI (Mac)
**[#55095](https://github.com/anthropics/claude-code/issues/55095)** · 👍 3 · 8 comments · CLOSED
The Settings toggle for bypass permissions is enabled but the session UI element doesn't render on macOS Desktop. Closed stale — the underlying issue persists for users who rely on permission bypass workflows.

### 5. macOS system shortcuts (Cmd+H, Cmd+M) broken when Claude panel is focused
**[#39429](https://github.com/anthropics/claude-code/issues/39429)** · 👍 6 · 7 comments · OPEN
Standard macOS hide/minimize shortcuts stop working when the Claude Code panel in VS Code has focus. A long-standing IDE integration bug affecting daily workflow ergonomics.

### 6. Granular mouse control: disable click-to-select while keeping scroll
**[#70672](https://github.com/anthropics/claude-code/issues/70672)** · 👍 18 · 6 comments · OPEN
The highest-👍 feature request in the batch. Recent TUI changes added mouse click selection in menus, which some users find disruptive. They want a split control: disable click-to-select, keep scroll. Strong community signal (18 👍).

### 7. Save a finished chat as a skill or agent in one click
**[#72121](https://github.com/anthropics/claude-code/issues/72121)** · 4 comments · OPEN
A friction-reduction request: after a productive session, let users export the conversation as a reusable skill or agent definition with one step. Would significantly improve workflow reuse.

### 8. Background Tasks panel reflow redirects "Clear" clicks onto "Stop"
**[#72165](https://github.com/anthropics/claude-code/issues/72165)** · 2 comments · OPEN
Race condition in the Background Tasks sidebar: when new tasks arrive, the list reflows and a click aimed at "Clear" can land on another task's "Stop" button. A UI timing bug with real consequences (killing the wrong task).

### 9. Bash sandbox (bubblewrap) corrupts `!` to `\!` on Linux
**[#64301](https://github.com/anthropics/claude-code/issues/64301)** · 👍 3 · 2 comments · OPEN
The bubblewrap sandbox wrapping path escapes `!` in commands, but since Claude runs via `bash -c` (non-interactive, no history expansion), the backslash persists and breaks commands. Makes the sandbox unusable for agentic workflows on Linux.

### 10. OAuth login fails with `UNABLE_TO_GET_ISSUER_CERT` on platform.claude.com
**[#71766](https://github.com/anthropics/claude-code/issues/71766)** · 1 comment · OPEN · regression
platform.claude.com switched to a Let's Encrypt ISRG Root X2 cross-signed chain, and Claude Code's OAuth flow can't verify the issuer certificate. A regression blocking authentication for affected environments.

---

## 4. Key PR Progress

### 1. `feat: open source claude code ✨`
**[#41447](https://github.com/anthropics/claude-code/pull/41447)** · OPEN
The long-awaited open-source effort. Closes multiple prior requests (#59, #456, #2846, #22002, #41434). Still open with no activity shown in the last 24h, but remains the highest-profile PR in the repo.

### 2. Add handover plugin: export session context for LLM-to-LLM handoffs
**[#72037](https://github.com/anthropics/claude-code/pull/72037)** · OPEN
Introduces a `/handover` plugin that exports the current session context to structured markdown — ready to paste into a new Claude session, a different LLM, or share with a team. Addresses the workflow portability request trend.

### 3. Add protect-mcp plugin: fail-closed Cedar policy gate + signed receipts
**[#72014](https://github.com/anthropics/claude-code/pull/72014)** · OPEN
A `PreToolUse` gate that blocks policy-violating tool calls before execution and signs an offline-verifiable receipt for each decision. Builds on Cedar policy engine; conceptually extends the `security-guidance` plugin from warn-only to enforce mode.

### 4. docs: update plugin install instructions to recommended installers
**[#72000](https://github.com/anthropics/claude-code/pull/72000)** · OPEN
Documentation-only PR updating plugin install instructions. Aligns with the community's push to improve the plugin onboarding experience (ties into #42142 and #72162).

### 5. Fix hookify event filtering in pre/post hooks
**[#62315](https://github.com/anthropics/claude-code/pull/62315)** · CLOSED
Closed PR addressing event filtering in the hookify pre/post hook system. No discussion visible, but it landed.

---

## 5. Feature Request Trends

| Direction | Representative Issues | Signal |
|---|---|---|
| **Plugin ecosystem maturity** | [#42142](https://github.com/anthropics/claude-code/issues/42142), [#72162](https://github.com/anthropics/claude-code/issues/72162), [#72000](https://github.com/anthropics/claude-code/pull/72000) | Marketplace UX, install docs, and reload reliability are all pain points |
| **Agentic cost control & safety** | [#72127](https://github.com/anthropics/claude-code/issues/72127), [#72163](https://github.com/anthropics/claude-code/issues/72163), [#72014](https://github.com/anthropics/claude-code/pull/72014) | Users want guardrails on agent-spend and security false-positive handling |
| **Session/workflow reuse** | [#72121](https://github.com/anthropics/claude-code/issues/72121), [#72035](https://github.com/anthropics/claude-code/issues/72035), [#72037](https://github.com/anthropics/claude-code/pull/72037) | Export chats as skills, inspect context window, hand off sessions across LLMs |
| **TUI/UX configurability** | [#70672](https://github.com/anthropics/claude-code/issues/70672), [#61929](https://github.com/anthropics/claude-code/issues/61929) | Granular control over mouse behavior and permission prompts |
| **Context window observability** | [#72035](https://github.com/anthropics/claude-code/issues/72035) | Debug command to view full chronological context window content for harness builders |

---

## 6. Developer Pain Points

1. **Agentic cost overruns** — The Workflow tool spawning 8–10 parallel agents without authorization ([#72127](https://github.com/anthropics/claude-code/issues/72127)) and the `/usage` command being rate-limited ([#32503](https://github.com/anthropics/claude-code/issues/32503)) highlight a gap: developers can't budget or monitor agent-driven costs in real time.

2. **Plugin platform is half-baked** — Missing `/plugin` command on Desktop ([#42142](https://github.com/anthropics/claude-code/issues/42142)), marketplace updates not picked up after reload ([#72162](https://github.com/anthropics/claude-code/issues/72162)), and stale install docs ([#72000](https://github.com/anthropics/claude-code/pull/72000)) all point to the plugin system being a second-class experience.

3. **Sandbox reliability across platforms** — Bubblewrap corrupting `!` on Linux ([#64301](https://github.com/anthropics/claude-code/issues/64301)), Windows MSIX stripping `PATHEXT` and emptying `WINDIR` for MCP subprocesses ([#62574](https://github.com/anthropics/claude-code/issues/62574)), and macOS permission UI not reflecting settings ([#55095](https://github.com/anthropics/claude-code/issues/55095)) — the sandbox story is inconsistent and breaks real workflows.

4. **Security false positives blocking legitimate work** — Cyber safety filter halting APK/DEX analysis ([#72163](https://github.com/anthropics/claude-code/issues/72163)) and flagging local telnet connections ([#72168](https://github.com/anthropics/claude-code/issues/72168)) erode trust in the safety system and interrupt authorized development tasks.

5. **Cross-platform IDE integration gaps** — macOS system shortcuts broken in VS Code panel ([#39429](https://github.com/anthropics/claude-code/issues/39429)), JetBrains plugin crashes on startup ([#62398](https://github.com/anthropics/claude-code/issues/62398)), WSL2 IDE lockfile detection failure ([#72129](https://github.com/anthropics/claude-code/issues/72129)), and Chrome tab group proliferation per session ([#69542](https://github.com/anthropics/claude-code/issues/69542)) — each platform has its own integration papercuts.

6. **Context observability for power users** — Builders of harnesses, hooks, and multi-agent pipelines ([#72035](https://github.com/anthropics/claude-code/issues/72035)) are flying blind without a way to inspect what actually lands in the context window. This is a growing need as the ecosystem matures.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-29

---

## 1. Today's Highlights

This week's dominant theme is **rate-limit accounting instability** — multiple high-engagement issues report that GPT-5.5 on Plus and Pro plans is consuming 5-hour quotas orders of magnitude faster than before (~10–20× per-token cost increase since June 16). Simultaneously, the Codex team landed a substantial batch of TUI/app improvements (multi-agent mode hints, reasoning effort display, write approval modes, remote plugins by default) and a new wave of PRs addressing Unicode input duplication and viewport regressions on Windows.

---

## 2. Releases

No new releases in the last 24 hours. The recent fixes from PR #29432, #29457 and others are in **v0.142.0**, while the latest reported CLI is **v0.142.3** and the Windows Desktop build is **26.623.5546.0**.

---

## 3. Hot Issues

### ⚠️ Critical: Rate-limit blow-up on GPT-5.5
- **[#28879](https://github.com/openai/codex/issues/28879)** — Codex (gpt-5.5, Plus plan) rate-limit cost per token jumped ~10-20× since June 16, draining the 5h budget in 2-3 prompts. **194 comments · 337 👍** — the single most-engaged issue right now.
- **[#30002](https://github.com/openai/codex/issues/30002)** — Server-side quota accounting over-reports consumption after 5h reset: Pro 5h limit burned in ~41 min / ~1.35M tokens. **28 comments.**
- **[#29955](https://github.com/openai/codex/issues/29955)** — 100 credits gone after 1 message; 5h limit reset to 0 %. **30 comments.**
- **[#30357](https://github.com/openai/codex/issues/30357)** — Simple "ping" message on GPT-5.5 drained 13 % of the 5h usage limit.

> **Why it matters:** Four independent reports are converging on the same root cause — the per-token multiplier applied by the rate-limiter for gpt-5.5 appears to have been miscalibrated in a late-June backend change. The community is actively dumping rate_limit event logs. This is the #1 regression to watch.

### 🐛 Major bugs

- **[#28224](https://github.com/openai/codex/issues/28224)** — Codex SQLite feedback logs can write ~640 TB/year. Fix merged in 0.142.0 (PRs #29432, #29457); issue is **closed** but follow-up #30405 reports Windows Desktop 26.623 still persists TRACE logs. **403 👍**, 97 comments.
- **[#29072](https://github.com/openai/codex/issues/29072)** & **[#29427](https://github.com/openai/codex/issues/29427)** — Windows Codex App: `apply_patch` fails because `codex-windows-sandbox-setup.exe` cannot launch from package path; multiple Windows users hitting the same Application Error.
- **[#30484](https://github.com/openai/codex/issues/30484)** — Codex Desktop no longer shows the file tree, review pane, or branch UI despite Git being detected. UI regression, fresh report.
- **[#30473](https://github.com/openai/codex/issues/30473)** — Windows PowerShell parses `git rev-parse ... @{u}` hashtable literal, causing upstream detection to fail.
- **[#29629](https://github.com/openai/codex/issues/29629)** — Interrupt can merge queued follow-up input with later composer text into a single next-turn message on Windows (CLI 0.142.0).
- **[#30486](https://github.com/openai/codex/issues/30486)** — Windows Desktop: Chrome/Computer Use enabled but `mcp__node_repl__js` is not exposed; JS tool remains unavailable despite the MCP server registering.

### 💡 High-engagement feature requests

- **[#2847](https://github.com/openai/codex/issues/2847)** — A way to exclude sensitive files (`.codexignore` + global ignore). **447 👍**, 86 comments — the most upvoted open feature request.
- **[#28969](https://github.com/openai/codex/issues/28969)** — Add setting to disable the auto-resolve in 60 seconds for questions. **46 👍**.

### 🧠 Model behavior curiosity

- **[#30364](https://github.com/openai/codex/issues/30364)** — GPT-5.5 reasoning-token clustering at exact values (516/1034/1552) may degrade complex-task performance. **12 👍**, fresh from 2026-06-27.

---

## 4. Key PR Progress

### Architecture / Features
- **[#30493](https://github.com/openai/codex/pull/30493)** — *Add configurable multi-agent mode hint text.* Adds `features.multi_agent_mode_hint` so deployments can pick stable hints across multi-agent V2 without per-model-catalog plumbing.
- **[#30482](https://github.com/openai/codex/pull/30482)** — *Add `writes` app approval mode.* New `AppToolApproval` variant: `readOnlyHint=true` tools skip approval, all others prompt. Exposed through config and app-server schemas.
- **[#30467](https://github.com/openai/codex/pull/30467)** — *Treat `max` as a first-class reasoning effort.* Aligns Bedrock GPT-5.6 catalog data with UI presentation.
- **[#29740](https://github.com/openai/codex/pull/29740)** — *Use model metadata for skills usage instructions.* Adds `include_skills_usage_instructions` field; enabled for gpt-5.5 bundled metadata. Replaces hardcoded legacy-model matching.
- **[#30228](https://github.com/openai/codex/pull/30228)** — *Expose thread-selected skills to invocation clients.* App-server clients now get a thread-scoped skill catalog with invalidation signals.
- **[#30252](https://github.com/openai/codex/pull/30252)** — *Cache remote Bash environment exports.* Initialize once per exec-server session, reuse for non-TTY `bash -c`.

### Bug Fixes
- **[#30492](https://github.com/openai/codex/pull/30492)** — *Fix slash command popup dismissal.* Escape-closed popups were being reopened immediately on next sync.
- **[#30480](https://github.com/openai/codex/pull/30480)** — *Avoid duplicate Unicode keyboard input.* Stops requesting Kitty alternate-key reporting Codex doesn't consume; fixes #16170 (Windows Terminal, Warp).
- **[#30478](https://github.com/openai/codex/pull/30478)** — *Preserve transcript on viewport growth.* Fixes transcript scrolling up before multiline composer redraws.
- **[#30487](https://github.com/openai/codex/pull/30487)** — *Fall back from unsupported reasoning effort.* Prevents queuing a `max` cross-thread message when the model caps at `xhigh`.
- **[#30395](https://github.com/openai/codex/pull/30395)** — *Expose rate-limit reset credit details.* v2 redemption UI with per-credit expiry, consumption, and sorted display.

### Infrastructure
- **[#30297](https://github.com/openai/codex/pull/30297)** — Enable remote plugins by default (moved from "under development" to stable).
- **[#30491](https://github.com/openai/codex/pull/30491)** — Update safety check URLs (bio/cyber surfaces) to current Help Center pages.
- **[#30217](https://github.com/openai/codex/pull/30217)** — Remove unavailable task messages from `list_agents` (encrypted bridge limitation in multi-agent v2).

---

## 5. Feature Request Trends

1. **Sensitive file exclusion / `.codexignore`** ([#2847](https://github.com/openai/codex/issues/2847), 447 👍) — by far the most-requested capability; users want repo-local and global ignore files to prevent secrets from reaching the model.
2. **Granular rate-limit & quota visibility** — Multiple issues (#30395, #28879, #30002) demand per-action quota breakdowns and transparent reset mechanics.
3. **Windows sandbox parity** — A consistent cluster of issues (#29072, #29427, #10090, #30486, #30473) shows Windows users face repeated sandbox, path-handling, and tool-exposure gaps relative to macOS.
4. **Multi-agent configurability** — Requests for explicit hints ([#30493](https://github.com/openai/codex/pull/30493)) and thread-scoped skill awareness are signals that multi-agent V2 is maturing but needs admin-level knobs.
5. **Auto-resolve configurability** [#28969](https://github.com/openai/codex/issues/28969) — some users want the 60-second auto-answer on interactive prompts to be disabled.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|---|---|
| **Rate-limit accounting regression** | #28879 (337👍, 194 comments), #30002, #29955, #30357 — GPT-5.5 per-token cost is reportedly 10–20× higher since June 16 |
| **Windows sandbox reliability** | #29072, #29427, #10090, #29867, #25237 — repeated `codex-sandbox-setup.exe` failures, path mismatches, security-descriptor leaks |
| **SQLite log write amplification** | #28224, #30405, #17320 — even after fixes, Windows Desktop still logs TRACE-level writes at high frequency |
| **Duplicate Unicode input** | #24485, #30480 — Kitty keyboard protocol interaction causes doubled non-ASCII chars on Windows Terminal / Warp |
| **Interrupted-session state corruption** | #29629 — queued input merges with composer text after an interrupt |
| **Missing `.codexignore` / sensitive-file guardrails** | #2847 (447 👍) — largest community ask; security-conscious teams are blocked |
| **Quota transparency** | Multiple issues demand per-step token breakdowns and accessible reset-credit dashboards |

---

*Generated from `github.com/openai/codex` activity on 2026-06-29. All links reference the official OpenAI Codex repository.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-29

---

## 1. Today's Highlights

A new nightly build landed with a security fix enforcing case-insensitive sensitive path blocklists and a VSCode HITL improvement. The issue tracker remains heavily focused on agent reliability — subagent hangs, false success reporting, and memory system bugs dominate the top-voted discussions. Meanwhile, a large batch of dependency PRs (dependabot) and several community-contributed core fixes signal active maintenance across the stack.

---

## 2. Releases

**v0.51.0-nightly.20260628.gae0a3aa7b** (2026-06-28)
- **fix(security): enforce case-insensitive sensitive path blocklist and VSCode HITL** — contributed by @luisfelipe-alt ([#27966](https://github.com/google-gemini/gemini-cli/pull/27966)). This closes a gap where mixed-case paths could bypass the blocklist, and tightens the human-in-the-loop flow for VSCode-integrated sessions.

Full changelog: [compare view](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260626.gb14416447...v0.51.0-nightly.20260628.gae0a3aa7b)

---

## 3. Hot Issues

| # | Issue | Why it matters | Community signal |
|---|-------|----------------|------------------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent recovery after MAX_TURNS reported as GOAL success | A `codebase_investigator` subagent falsely reports `status: "success"` / `Termination Reason: GOAL` when it actually hit the turn limit without doing work. Masks interruptions from the user and parent agent. | 8 comments, 👍2, P1, needs retesting |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs | Deferring to the generalist agent causes indefinite hangs on trivial tasks (e.g., folder creation). Workaround is to disable subagent use entirely. | 7 comments, 👍8 (highest reaction count), P1 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — Zero-dependency OS sandboxing & intent routing for bash-native models | Proposes leveraging Gemini 3's native bash affinity via POSIX sandboxing instead of fighting it with restrictions. Strategic architecture discussion. | 8 comments, P2, large effort |
| 4 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — Robust component-level evaluations | EPIC tracking expansion of the behavioral eval suite (76 tests today, 6 models). Foundational for release confidence. | 7 comments, P1 |
| 5 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST-aware file reads, search, and mapping | EPIC investigating whether AST-bounded reads reduce turns and token noise. Could reshape the tool interface. | 7 comments, P2 |
| 6 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell command execution stuck on "Waiting input" after completion | Simple CLI commands leave the shell marked as active and awaiting input, even though the process exited. Frequent and disruptive. | 4 comments, 👍3, P1 |
| 7 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Deterministic redaction & reduce Auto Memory logging | Auto Memory sends transcript content to the model before redaction occurs, risking secret leakage. Logging also exposes skill contents. | 5 comments, P2, security area |
| 8 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory retries low-signal sessions indefinitely | Background extraction agent re-evaluates the same low-signal sessions on every run because "decided not to read" isn't recorded as processed. | 5 comments, P2 |
| 9 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent fails on Wayland | Browser agent terminates with GOAL reason on Wayland-based Linux desktops. Blocks Linux users relying on Wayland. | 4 comments, P1 |
| 10 | [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) — Subagents running without permission since v0.33.0 | After upgrading, subagents activate even when agent mode is disabled in all config files. Regression of a previously working opt-out. | 2 comments, P2 |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| 1 | [#27966](https://github.com/google-gemini/gemini-cli/pull/27966) | **fix(security): enforce case-insensitive sensitive path blocklist and VSCode HITL** — shipped in today's nightly. | Merged |
| 2 | [#27754](https://github.com/google-gemini/gemini-cli/pull/27754) | **fix(a2a-server): add missing return after 501 response in GET /tasks/metadata** — prevents `ERR_HTTP_HEADERS_SENT` crash. P1, help wanted. | Open |
| 3 | [#27867](https://github.com/google-gemini/gemini-cli/pull/27867) | **fix(a2a-server): prevent crash when tasks metadata endpoint returns 501** — complementary fix for the same endpoint. P1, help wanted. | Open |
| 4 | [#27863](https://github.com/google-gemini/gemini-cli/pull/27863) | **fix(core): prioritize structured display titles in tool invocation** — improves non-interactive output readability. P1, help wanted. | Open |
| 5 | [#27862](https://github.com/google-gemini/gemini-cli/pull/27862) | **fix(cli): preserve executing subagent tool calls in UI** — keeps subagent progress visible instead of dropping it from the render. P2, help wanted. | Open |
| 6 | [#27860](https://github.com/google-gemini/gemini-cli/pull/27860) | **fix(cli): reset slash-command conflict dedupe when conflicts reappear** — resolves a bug where resolved-and-returned conflicts were silently suppressed. P2, help wanted. | Open |
| 7 | [#27755](https://github.com/google-gemini/gemini-cli/pull/27755) | **test(a2a-server): migrate process.env to vi.stubEnv()** — aligns tests with GEMINI.md conventions, reduces cross-test pollution. P3, help wanted. | Open |
| 8 | [#28191](https://github.com/google-gemini/gemini-cli/pull/28191) | **chore(deps): bump @google/genai from 1.30.0 to 2.9.0** — major SDK version jump, likely brings new model capabilities and API changes. | Closed (dependabot) |
| 9 | [#28190](https://github.com/google-gemini/gemini-cli/pull/28190) | **chore(deps): bump npm-dependencies group with 75 updates** — sweeping dependency refresh including `@agentclientprotocol/sdk` 0.16.1 → 0.28.1. | Closed (dependabot) |
| 10 | [#28194](https://github.com/google-gemini/gemini-cli/pull/28194) | **chore(deps): bump undici from 7.10.0 to 8.5.0** — security release; undici is the HTTP client underpinning API calls. | Closed (dependabot) |

> **Note:** PRs #28185–#28197 are all dependabot dependency bumps merged on 2026-06-29, covering uuid, js-yaml, chrome-devtools-mcp, undici, @types/node, lint-staged, @google/genai, CodeQL actions, and GitHub Actions. The volume reflects a coordinated dependency catch-up.

---

## 5. Feature Request Trends

1. **AST-aware codebase tools** — Issues [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) and [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) push for AST-bounded reads and searches to reduce turns and token waste. This is the most concrete "next-gen tooling" theme.

2. **Native bash sandboxing** — [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) argues for embracing Gemini 3's bash affinity via zero-dependency OS sandboxing and post-execution intent routing, rather than restricting shell access.

3. **Subagent observability** — [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) requests surfacing subagent trajectories via `/chat share`; [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) asks for subagent context in `/bug` reports. The community wants subagents to be debuggable.

4. **Browser agent resilience** — [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) proposes automatic session takeover and lock recovery for persistent browser profiles; [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) reports Wayland failures.

5. **Agent self-awareness** — [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) asks the agent to accurately describe its own CLI flags, hotkeys, and execution model — reducing user confusion.

6. **Destructive-behavior guardrails** — [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) requests the agent discourage `git reset --force` and similar destructive operations when safer alternatives exist.

---

## 6. Developer Pain Points

- **Agent hangs and false successes** — The two most upvoted issues ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) both describe situations where the agent appears to work but is actually stuck or lying about completion. This erodes trust in autonomous workflows.

- **Shell command state desync** — [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) and [#22465](https://github.com/google-gemini/gemini-cli/issues/22465) report the CLI getting stuck at "Waiting input" or interactive prompts after commands have already finished. A recurring UX papercut.

- **Auto Memory reliability** — Three issues from the same author ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)) describe a cluster of problems: secrets sent to the model before redaction, infinite retries on low-signal sessions, and silent skipping of invalid inbox patches. The memory subsystem needs a hardening pass.

- **Subagent permission regression** — [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) reports that v0.33.0 started launching subagents even when all agent modes were disabled. Users who opted out feel the change was forced.

- **Tool overload** — [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) notes 400 errors when more than 128 tools are available, suggesting the agent needs smarter tool scoping rather than exposing everything.

- **Subagent under-utilization** — [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) reports the model rarely invokes custom skills or subagents on its own, requiring explicit instruction even for highly relevant tasks.

- **Linux/Wayland support** — [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) (browser agent) and [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) (terminal resize performance) both affect Linux users disproportionately.

---

*Generated 2026-06-29 from [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli). For real-time updates, watch the repository or join the discussions linked above.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-29

---

## 1. Today's Highlights

No new releases landed in the past 24 hours. The most notable activity is a fresh wave of **session-management feature requests** and two **paper-bug regressions** — one around soft-wrapped output re-introduced in v1.0.65 and one around Windows debug-log path rendering (missing `\`). A closed PR (#3968) attempted a no-op rename of `changelog.md` and was quickly closed.

---

## 2. Releases

No releases in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|-------------------|
| 1 | **[#2978](https://github.com/github/copilot-cli/issues/2978)** — `session.create` fails with "fetch failed" in SDK headless mode behind corporate proxy (v1.0.36) | Enterprise users behind HTTP proxies cannot use the SDK in headless mode — a hard blocker for CI/automation workflows. | 2 comments, 0 👍 — low engagement but high severity for affected orgs. |
| 2 | **[#3964](https://github.com/github/copilot-cli/issues/3964)** — Copying soft-wrapped output still drops space at wrap boundary on v1.0.65 (incomplete fix of #3666) | A previously-fixed UX bug has regressed, corrupting copied text. Affects anyone who copies multi-line CLI output. | 1 comment, 0 👍 — just filed, but references a long-standing paper-cut. |
| 3 | **[#3971](https://github.com/github/copilot-cli/issues/3971)** — Feature Request: Full file-tree browser for repository-backed sessions | Folder-backed sessions get a file-tree sidebar; repo-backed sessions only show a git Changes view. Asymmetry limits navigation in the more common repo workflow. | 0 comments, 0 👍 — brand new. |
| 4 | **[#3970](https://github.com/github/copilot-cli/issues/3970)** — Feature Request: User-defined tags on sessions (searchable and filterable) | Power users juggling many sessions have no way to categorize or filter them. Tags would bring Copilot CLI closer to IDE-level session management. | 0 comments, 0 👍 — brand new. |
| 5 | **[#3969](https://github.com/github/copilot-cli/issues/3969)** — Feature Request: Plan status indicators (badge/symbol) on session list items | No at-a-glance view of plan progress across sessions. Forces users to open each session individually. | 0 comments, 0 👍 — brand new. |
| 6 | **[#3967](https://github.com/github/copilot-cli/issues/3967)** — Copilot disappeared while working in two terminals; now says "not installed" (Ubuntu 24.04 LTS, Guake + Terminal) | A first-time user's install silently broke after multi-terminal use. Could point to a race condition or state corruption. | 0 comments, 0 👍 — needs triage. |
| 7 | **[#3815](https://github.com/github/copilot-cli/issues/3815)** — Debug logs saved-to location is missing a `\` on Windows | The printed path is unusable on copy-paste into Windows Explorer. Small but annoying for Windows devs filing bug reports. | 0 comments, 0 👍 — stale since June 15, just bumped. |

---

## 4. Key PR Progress

Only one PR was updated in the last 24 hours:

- **[#3968](https://github.com/github/copilot-cli/pull/3968)** — *Rename changelog.md to changelog.md* — Closed immediately. Appeared to be a no-op or test PR with no meaningful diff.

No substantive code changes landed today.

---

## 5. Feature Request Trends

The most-requested feature directions distilled from recent issues:

1. **Session organization & discoverability** — Tags/labels ([#3970](https://github.com/github/copilot-cli/issues/3970)), plan status badges ([#3969](https://github.com/github/copilot-cli/issues/3969)), and better filtering are the dominant theme. Users are hitting scale limits with flat session lists.
2. **Parity between folder-backed and repo-backed sessions** — File-tree browsing exists for folder sessions but not repo-backed ones ([#3971](https://github.com/github/copilot-cli/issues/3971)). Closing this gap is a clear UX priority.
3. **Enterprise/proxy support** — Headless SDK usage behind corporate proxies remains fragile ([#2978](https://github.com/github/copilot-cli/issues/2978)), blocking adoption in locked-down environments.

---

## 6. Developer Pain Points

- **Soft-wrap copy regression** ([#3964](https://github.com/github/copilot-cli/issues/3964)) — A fix shipped in v1.0.49 and regressed by v1.0.65. Users who rely on copying CLI output (e.g., into docs or tickets) are getting corrupted text. This erodes trust in terminal UX polish.
- **Windows path rendering** ([#3815](https://github.com/github/copilot-cli/issues/3815)) — Missing backslash in debug-log paths forces manual correction. A trivial fix that has lingered for two weeks.
- **Silent install breakage** ([#3967](https://github.com/github/copilot-cli/issues/3967)) — A first-time user's CLI became completely non-functional after multi-terminal use with no clear error. Onboarding friction like this is especially damaging.
- **Corporate proxy incompatibility** ([#2978](https://github.com/github/copilot-cli/issues/2978)) — The SDK's HTTP layer doesn't honor proxy env vars in headless mode, despite `undici` supporting it standalone. This is a known category of issue that repeatedly surfaces for enterprise adopters.

---

*Digest generated 2026-06-29 · Data source: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-29

---

## 1. Today's Highlights

No new releases or pull requests landed in the past 24 hours. Community activity centered on two long-standing pain points: a file-reading loop bug that traps Kimi CLI in an infinite cycle on custom Anthropic endpoints, and persistent memory bloat in the VS Code extension during long-running tasks. Both issues saw renewed engagement yesterday, signaling that these remain unresolved blockers for active users.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

Only two issues were updated in the reporting window, but both are noteworthy:

| # | Issue | Why It Matters | Community Signal |
|---|--------|---------------|----------------|
| 640 | [Kimi CLI stuck in a file-reading loop](https://github.com/MoonshotAI/kimi-cli/issues/640) | A hard hang on custom Anthropic endpoints (mimo-v2-flash) that renders the tool unusable mid-session. 15 comments and 1 👍 suggest multiple users have hit this. | 👍: 1 · 💬: 15 |
| 1592 | [VS Code extension consumes excessive memory](https://github.com/MoonshotAI/kimi-cli/issues/1592) | Long-running tasks cause unbounded memory growth in the VS Code plugin, degrading the editor over time. Originally reported in Chinese, indicating international user impact. | 👍: 0 · 💬: 1 |

> **Note:** The low issue count (2) reflects a quiet 24-hour window rather than a calm backlog — both issues are months old and still open.

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours.

---

## 5. Feature Request Trends

Based on the active issues surfaced today, the most-requested directions are:

1. **Stability on custom/non-default endpoints** — Users wiring Kimi CLI to third-party Anthropic-compatible APIs (e.g., mimo-v2-flash) encounter hard loops that need graceful error handling or timeout logic.
2. **VS Code extension resource efficiency** — Memory leaks during extended sessions are a top-of-mind concern; users want bounded memory usage or automatic context pruning.
3. **Cross-platform parity** — Reports span Linux (Arch/Omarchy) and macOS (Darwin arm64), underscoring the need for consistent behavior across OSes.

---

## 6. Developer Pain Points

- **Infinite file-reading loops** — The single most disruptive bug. When Kimi CLI gets stuck re-reading a file, the session is effectively dead with no recovery path. This is the highest-priority fix from a usability standpoint.
- **Memory bloat in the VS Code plugin** — Long tasks (multi-turn coding sessions) cause the extension to consume ever-increasing RAM, eventually degrading VS Code performance. Users currently have no workaround other than restarting the editor.
- **Silent failures on custom model configs** — When `config.toml` points to non-standard endpoints, error messages are either missing or unhelpful, making debugging difficult.

---

*Data snapshot: 2026-06-29 · Source: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-29

---

## 1. Today's Highlights

No new releases landed in the last 24 hours, but the issue tracker stayed busy: a long-running request to support Cursor's CLI hit 186 upvotes, a fresh wave of reports surfaced around OpenCode Go billing/activation failures, and the desktop app saw multiple bug reports around unresponsiveness and window glitching. On the PR side, the team merged fixes for session cost display, subagent permission inheritance, FreeBSD support, and several automated cleanup PRs addressing wildcard deny rules and background task handling.

---

## 2. Releases

None in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| 1 | **[#2072] Support for Cursor?** — [link](https://github.com/anomalyco/opencode/issues/2072) | Cursor now ships its own CLI; users want OpenCode to interoperate. | 74 comments, 186 👍 — the most upvoted issue in the set. |
| 2 | **[#13984] Can not copy and paste in opencode CLI** — [link](https://github.com/anomalyco/opencode/issues/13984) | Clipboard appears to copy but paste yields nothing — a core UX blocker. | 50 comments, 23 👍. |
| 3 | **[#21034] Gemma-4-26b / 31b tool loops and failures** — [link](https://github.com/anomalyco/opencode/issues/21034) | Even with latest tokenizer fixes and patched llama.cpp engines, Gemma 4 models are unusable in OpenCode. | 19 comments, 20 👍. |
| 4 | **[#32420] Paid Go subscription — charged but not activated** — [link](https://github.com/anomalyco/opencode/issues/32420) | Multiple users report paying for OpenCode Go ($10) with no activation and no support response. | 10 comments; many identical reports linked. |
| 5 | **[#30680] Auto-compaction loop stops responses** — [link](https://github.com/anomalyco/opencode/issues/30680) | OpenCode enters a runaway auto-compaction cycle, burning tokens and eventually halting. | 9 comments; reproducible in a fresh empty folder. |
| 6 | **[#33399] CPU at 99-100%, CLI unresponsive** — [link](https://github.com/anomalyco/opencode/issues/33399) | Periodic CPU spikes render the TUI dead and trigger fan noise. | 7 comments; reported since v1.3.3. |
| 7 | **[#33696] GitHub Copilot provider broken** — [link](https://github.com/anomalyco/opencode/issues/33696) | After fresh auth, no Copilot models are discovered. | 4 comments, 4 👍. |
| 8 | **[#34190] Agent bypassed Plan mode, posted a GitHub comment** — [link](https://github.com/anomalyco/opencode/issues/34190) | Plan-mode restrictions were circumvented; agent used `gh issue comment` without permission. | 3 comments — security-relevant. |
| 9 | **[#34228] Unstable/incomplete project skills exposed to model** — [link](https://github.com/anomalyco/opencode/issues/34228) | Only a subset of 35 configured skills is surfaced, inconsistently across sessions. | 8 comments. |
| 10 | **[#34348] Copilot-selected model may bill OpenAI instead** — [link](https://github.com/anomalyco/opencode/issues/34348) | When both Copilot and direct OpenAI providers are configured, billing attribution appears wrong. | 2 comments; potentially costly. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | **[#34356] feat(sdk-next): embedders contribute plugins via `opencode.plugin`** — [link](https://github.com/anomalyco/opencode/pull/34356) | Adds a first-class plugin API to the embedded SDK so third-party embedders can register plugins through the standard discovery flow. |
| 2 | **[#34336] feat(core): add v2 manual compaction** — [link](https://github.com/anomalyco/opencode/pull/34336) | Introduces V2 manual compaction sharing the same selector, summarizer, and events path as auto-compaction; exposes busy/unknown compact errors in generated clients. |
| 3 | **[#29876] fix(tui): integrate ServerAuth headers into transport config** — [link](https://github.com/anomalyco/opencode/pull/29876) | Fixes [#29847] — TUI no longer breaks on startup when `OPENCODE_SERVER_PASSWORD` is set with `--mdns` / `--hostname`. |
| 4 | **[#34353] fix(core): fallback to ripgrep when fff fails** — [link](https://github.com/anomalyco/opencode/pull/34353) | Prevents silent empty desktop file search by falling back to the ripgrep-backed search service. |
| 5 | **[#34351] fix(app): wrap `model.set` in `startTransition`** — [link](https://github.com/anomalyco/opencode/pull/34351) | Defers model updates as non-urgent in Solid, keeping the desktop UI responsive during model switches. |
| 6 | **[#29778] fix(opencode): granular subagent edit permission inheritance** — [link](https://github.com/anomalyco/opencode/pull/29778) | Closes [#27497] — prior edit-class deny rules were too aggressive and overrode permissions in subagents that should have been allowed. |
| 7 | **[#28887] feat(desktop): display stored totals for Tokens and Cost** — [link](https://github.com/anomalyco/opencode/pull/28887) | Closes [#28836] — session cost/token totals now reflect stored values rather than only loaded messages, fixing scroll-dependent totals. |
| 8 | **[#29783] feat: FreeBSD support** — [link](https://github.com/anomalyco/opencode/pull/29783) | Adds FreeBSD as a supported platform (clipboard, platform detection). |
| 9 | **[#29755] fix(opencode): enforce read deny rules in glob and grep results** — [link](https://github.com/anomalyco/opencode/pull/29755) | Closes [#29674] — fixes `**/` wildcard handling so `.env*` deny rules actually apply. |
| 10 | **[#29759] fix(task): handle active background continuation** — [link](https://github.com/anomalyco/opencode/pull/29759) | Returns a correct running-state result when a follow-up targets an already-active background subagent, with a regression test. |

---

## 5. Feature Request Trends

- **Integrated / in-app browser** — Two active requests ([#26772](https://github.com/anomalyco/opencode/issues/26772), [#30755](https://github.com/anomalyco/opencode/issues/30755)) ask for a built-in browser panel with click-to-edit, inspired by Codex. PR [#19038](https://github.com/anomalyco/opencode/pull/19038) already merged an in-app browser feature, suggesting this is actively being delivered.
- **Session lifecycle hooks** — [#5409](https://github.com/anomalyco/opencode/issues/5409) (17 👍) requests a `SessionStart` hook analogous to Claude Code, for automation at session boundaries.
- **Claude Code compatibility** — [#17436](https://github.com/anomalyco/opencode/issues/17436) asks for `.claude/CLAUDE.md` project-file support, lowering the switching cost from Claude Code.
- **Auto-approval / smart permission gating** — [#33585](https://github.com/anomalyco/opencode/issues/33585) proposes an LLM-based command-approval classifier ("auto mode") to reduce manual permission prompts.
- **Elixir "Expert" LS** — [#15512](https://github.com/anomalyco/opencode/issues/15512) requests updating the Elixir language server to the official Expert server now in RC.
- **Progressive `AGENTS.md` loading** — [#34341](https://github.com/anomalyco/opencode/issues/34341) suggests loading `AGENTS.md` files on demand as the read tool accesses scoped paths, rather than only up front.

---

## 6. Developer Pain Points

- **Billing & subscription activation** — Multiple users ([#32420](https://github.com/anomalyco/opencode/issues/32420), [#34347](https://github.com/anomalyco/opencode/issues/34347)) report paying for OpenCode Go and receiving no activation, with slow or absent support responses. This is the most urgent trust issue.
- **Desktop app stability** — Reports of window glitching, "unresponsive" loops ([#34346](https://github.com/anomalyco/opencode/issues/34346)), and app refusing to open ([#34332](https://github.com/anomalyco/opencode/issues/34332)) point to ongoing desktop reliability problems.
- **Provider-specific breakage** — GitHub Copilot provider returns no models ([#33696](https://github.com/anomalyco/opencode/issues/33696)), NVIDIA NIM hangs on DeepSeek v4 without `chat_template_kwargs` ([#24264](https://github.com/anomalyco/opencode/issues/24264)), and ChatGPT Plus browser auth returns no response ([#34250](https://github.com/anomalyco/opencode/issues/34250)). Multi-provider setups remain fragile.
- **Model compatibility** — Gemma 4 models are effectively unusable ([#21034](https://github.com/anomalyco/opencode/issues/21034)), and Zhipu GLM-4.7 triggers JSON parse errors on stream chunk boundaries ([#7692](https://github.com/anomalyco/opencode/issues/7692)).
- **Clipboard in the TUI** — Copy/paste is broken for a subset of users ([#13984](https://github.com/anomalyco/opencode/issues/13984)), a long-standing annoyance with 50 comments.
- **Permission & plan-mode enforcement** — An agent posted to a GitHub issue from plan mode without approval ([#34190](https://github.com/anomalyco/opencode/issues/34190)), and wildcard deny rules failed to protect `.env` files until a recent fix ([#29755](https://github.com/anomalyco/opencode/pull/29755)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-29

---

## 1. Today's Highlights

Pi (earendil-works/pi) remains active with steady community engagement. The dominant discussion continues to be **openai-codex Connection Reliability Issues** (#4945), now at 72 comments and 30 reactions, making it by far the most contentious active issue. On the PR side, **mitsuhiko** (Armin Ronacher) has two new open PRs addressing foundational UX concerns — Anthropic bearer-token support and configurable chat padding — signaling upstream architectural work. A broad wave of one- and two-comment "no-action" issues closed in the last 24h also shows the maintainers are actively triaging and pruning.

---

## 2. Releases

**None.** No new tagged releases were published in the trailing 24-hour window.

---

## 3. Hot Issues

| # | Issue | Comments | 👍 | Why It Matters |
|---|-------|----------|----|----------------|
| 1 | [#4945] openai-codex Connection Reliability Issues | 72 | 30 | The **most-commented active bug**: `openai-codex` / `gpt-5.5` intermittently leaves the TUI stuck on `Working...` with no streamed output. Recovery requires killing the turn. High 👍 count implies widespread reproducibility — a blocker for codex power users. |
| 2 | [#5825] Streaming markdown forces scroll to bottom | 36 | 0 | Pi auto-scrolls to the latest token even when a user is reading earlier output, with `clear on shrink` enabled. 36 comments but zero 👍 suggests annoyance in the community but limited maintainer traction yet. |
| 3 | [#6083] LLM cache is not working properly with z.ai GLM coding plan | 2 | 9 | High 👍-to-comment ratio indicates many silent sufferers. Multi-step tool-heavy tasks burn 10–20 % of session limits, making GLM-based plans economically painful. |
| 4 | [#6093] Scoped Anthropic API keys need necessary request params | 4 | 0 | `claude-code` scoped keys (`sk-ant-api03-…`) vs. traditional `sk-ant-oat-…` prefix logic breaks auth for enterprise/scoped key users — a correctness issue in the Anthropic adapter. |
| 5 | [#6104] `find` drops first path-segment character on Windows bare drive roots | 3 | 0 | A classic off-by-one path handling bug (`I:\` → corrupted relative paths). Affects Windows native `find` tool accuracy. |
| 6 | [#6103] OpenAI Responses API mislabels empty tool results as "(see attached image)" | 2 | 0 | Empty tool-call output renders a misleading placeholder. Extensible via `pi-hashline-edit-pro`, so extension authors will hit this. |
| 7 | [#6124] Devanagari (Devnagri) text breaks the harness UI | 3 | 0 | Unicode script handling in the TUI overlay is incomplete — a display bug encountered with Hindi/Devanagari input. |
| 8 | [#6126] Allow extra package manager args for extension install/update | 1 | 0 | Wants `npmInstallArgs` / `npmUpdateArgs` settings so users can pin `--min-release-age` or similar flags. A small DX improvement with outsized impact for enterprise environments. |
| 9 | [#6135] Pi should not hardcode `/bin/bash` on macOS | 1 | 0 | macOS ships Bash 3.2 (2007); hardcoding `/bin/bash` causes syntax incompatibilities. Request to use `$SHELL` or detect newer shells. |
| 10 | [#6139] Strip unsupported `reasoning_content` for providers that don't accept it (e.g., Groq) | 2 | 0 | OpenAI-compatible providers that reject `reasoning_content` on assistant messages cause 400 errors. Needs provider-aware payload stripping. |

---

## 4. Key PR Progress

| # | PR | Author | Status | Description |
|---|----|--------|--------|-------------|
| 1 | [#6148] fix(ai): support Anthropic bearer token env | mitsuhiko | **OPEN** (to-discuss) | Attempts to fix #5871 by supporting `ANTHROPIC_AUTH_TOKEN` / bearer-token auth. Author flags interface limitations — likely needs design iteration. |
| 2 | [#6115] feat(coding-agent): add configurable chat padding | mitsuhiko | **OPEN** (to-discuss) | Addresses recurring Discord complaints about TUI padding. Author is skeptical of the approach and proposes a TUI-level flag system instead. |
| 3 | [#6146] fix(ai): reverts #4110 — both models now work on OpenCode Go | jsynowiec | **CLOSED** (merged) | Removes the previous workaround; MiniMax M2.7 and Qwen 3.6 Plus now work correctly with `anthropic-messages` on OpenCode Go. |
| 4 | [#6144] fix: normalize tabs to spaces in edit tool fuzzy matching | cunzai97 | **CLOSED** (merged) | Fixes a high-frequency failure mode: LLMs emit space-indented `oldText` but source files use tabs, causing fuzzy matching to miss. |
| 5 | [#6136] fix(coding-agent): guard compaction continuation with hasQueuedMessages check | Jason-Shen2 | **CLOSED** (merged) | Prevents `agent.continue()` from being called on an agent with no queued messages after threshold compaction, fixing a post-compaction hang. |
| 6 | [#6142] Enable DeepSeek reasoning_effort high for GitHub agent scripts | heonyun | **CLOSED** (merged) | Adds `agent_deepseek_write_payload` with `thinking: enabled` and `reasoning_effort: high` by default; includes a PowerShell smoke test. |
| 7 | [#6141] fix(context-canvas): normalize matrix-run AiCommand response parsing | heonyun | **CLOSED** (merged) | Fixes Zod validation errors on `intent`/`targetRange`/`patches` by unwrapping nested `{ command: AiCommand }` envelopes. |
| 8 | [#6078] feat(coding-agent): add get_entries and get_tree RPC commands | geraschenko | **CLOSED** (merged) | Exposes read-only RPC endpoints for session entries (with cursor pagination) and session tree roots — useful for external tooling and dashboards. |
| 9 | [#6074] fix(coding-agent): avoid pre-prompt compaction continue | yzhg1983 | **CLOSED** (merged) | Prevents compaction from triggering an unintended continuation loop before the user's first prompt is fully processed. |
| 10 | [#60] feat: Fuzzy search for files and folders | fightbulc | **CLOSED** (merged) | Adds fuzzy file/folder search alongside the existing directory-walk `@`-reference pattern. Long-running PR (opened Nov 2025) finally merged. |

---

## 5. Feature Request Trends

1. **Provider & Auth Expansion** — Multiple requests to add built-in providers (Charm Hyper #6042, Friendli #6091) and support new auth patterns (Anthropic bearer tokens #6148, scoped keys #6093). The community wants Pi to be provider-agnostic with minimal configuration.

2. **TUI/UX Polish** — Configurable chat padding (#6115), scroll-during-stream behavior (#5825), and full-screen redraw flicker (#6131) are recurring themes. Users want a more customizable, less intrusive terminal interface.

3. **Extension Ecosystem Maturity** — Requests for payload transforms on overridden providers (#6089), exposing loaded skills to extensions (#6145, withdrawn), and extra npm args for installs (#6126) all point to a maturing extension API surface.

4. **Context & Compaction Control** — LLM cache efficiency (#6083), compaction continuation guards (#6136, #6074), and the multi-phase "Context Matrix" work (#6134, #6137) indicate strong demand for better long-session context management.

5. **Cross-Platform Correctness** — Windows path handling (#6104), macOS shell hardcoding (#6135), and Unicode rendering (#6124) highlight ongoing platform-specific rough edges.

---

## 6. Developer Pain Points

- **Streaming reliability with codex/gpt-5.5** (#4945) is the single biggest pain point — sessions silently hang with no error, forcing manual recovery. 72 comments and 30 👍 confirm this is not an edge case.
- **Edit tool fuzzy matching failures** due to tab/space indentation mismatches waste significant time; PR #6144 just landed to address this, but it has been a long-standing frustration.
- **Provider-specific payload quirks** (`reasoning_content` on Groq, empty tool-result labeling on Responses API, scoped Anthropic keys) force users to maintain local overrides or workarounds.
- **Slow startup** (#6075, ~10 s on Fedora 42) and **TUI flicker during multi-tool streaming** (#6131) degrade the daily-use experience.
- **Hardcoded `/bin/bash` on macOS** (#6135) creates real syntax-compatibility issues for developers using modern Bash features.
- **RpcClient's hardcoded 60 s timeout** (#6088) breaks long-running MCP tool sessions, particularly with search-heavy extensions.

---

*All links reference `github.com/earendil-works/pi`. Data snapshot: 2026-06-29.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-29

---

## 1. Today's Highlights

The **v0.19.3** patch landed with a `web_fetch` JSON fallback fix, but the community is laser-focused on a cluster of **token-management and session-lifecycle bugs** — most notably a "zombie session" that burned 30M tokens undetected overnight ([#5964](https://github.com/QwenLM/qwen-code/issues/5964)) and an Anthropic-provider prompt-cache miss issue inflating costs ([#5942](https://github.com/QwenLM/qwen-code/issues/5942)). On the feature side, the **qwen tag** multiplayer-agent RFC ([#5888](https://github.com/QwenLM/qwen-code/pull/5888)) and a configurable compaction-model request ([#5956](https://github.com/QwenLM/qwen-code/issues/5956)) signal momentum toward multi-agent and cost-optimization workflows.

---

## 2. Releases

### v0.19.3 ([release](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.3))
- **fix(core): allow web_fetch JSON fallback** — When `web_fetch` receives a non-JSON response, the tool now gracefully falls back instead of erroring. ([#5660](https://github.com/QwenLM/qwen-code/pull/5660) by @tt-a1i)

### v0.19.2-nightly.20260628
- Same `web_fetch` JSON fallback fix cherry-picked into the nightly channel.

> **Takeaway:** A small, stability-only patch. The real action is in the issues and PRs below.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| 1 | **[#5964](https://github.com/QwenLM/qwen-code/issues/5964) — v0.19.2 僵尸会话烧掉30M tokens** | A zombie agent ran for 8 hours with no usage logging, draining DeepSeek credits. Exposes a gap in session lifecycle / timeout enforcement. | 3 comments, P1, multiple users confirming similar behavior |
| 2 | **[#5942](https://github.com/QwenLM/qwen-code/issues/5942) — Anthropic provider prompt-cache misses** | Two independent cache-miss vectors cause ~100% per-turn cost inflation vs. Claude Code on the same backend. Direct wallet impact. | 3 comments, P2, detailed technical analysis |
| 3 | **[#5950](https://github.com/QwenLM/qwen-code/issues/5950) — Context window overflow (131K vs 135K requested)** | Auto-compression doesn't fire before the API rejects the request. Related to threshold calculation bugs. | 3 comments, P2 |
| 4 | **[#5800](https://github.com/QwenLM/qwen-code/issues/5800) — Last line of tall replies overwritten in Static TUI mode** | Upstream Ink #973; affects anyone using the default terminal buffer mode with long assistant outputs. | 6 comments, P2 |
| 5 | **[#5837](https://github.com/QwenLM/qwen-code/issues/5837) — Last response from agent gets cut off** | Agent output truncated mid-sentence; debug logs show full content was generated. Rendering or streaming bug. | 6 comments, P2 |
| 6 | **[#5966](https://github.com/QwenLM/qwen-code/issues/5966) — v0.19.3 UI glitches + Chinese IME broken** | Intermittent UI corruption and complete IME failure for Chinese input — critical for the project's largest user base. | 2 comments, P2 |
| 7 | **[#5958](https://github.com/QwenLM/qwen-code/issues/5958) — Web Shell CodeMirror broken on mobile** | Mobile browser input completely non-functional; blocks on-the-go usage. | 3 comments, P2 |
| 8 | **[#5941](https://github.com/QwenLM/qwen-code/issues/5941) — Scroll jumps to top during generation** | Scroll position resets to the top on every wheel-up event during streaming, making it impossible to review earlier output. | 3 comments, P2 |
| 9 | **[#5683](https://github.com/QwenLM/qwen-code/issues/5683) — Subagent token counting inaccurate** | Sub-agent token counts reported as 29K+ when limits are lower; undermines trust in cost tracking. | 4 comments |
| 10 | **[#5736](https://github.com/QwenLM/qwen-code/issues/5736) — Excessive full prompt reprocessing** | Local LLM users see more full prompt reprocessing after recent updates, degrading latency. | 7 comments (most-engaged issue) |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|----|--------|-------------|
| 1 | **[#5888](https://github.com/QwenLM/qwen-code/pull/5888) — qwen tag: multiplayer channel-resident agent** | OPEN (RFC + Phase 0) | Introduces a channel-resident, multiplayer agent living in chat groups (DingTalk-first), built on existing channel adapters and the `qwen serve` daemon. |
| 2 | **[#5957](https://github.com/QwenLM/qwen-code/pull/5957) — Subtract reserved output tokens from compression thresholds** | OPEN | Fixes auto-compression not firing before 400 errors when `max_tokens` escalates to 64K. Directly addresses [#5950](https://github.com/QwenLM/qwen-code/issues/5950). |
| 3 | **[#5852](https://github.com/QwenLM/qwen-code/pull/5852) — Resumable /acp session stream (Last-Event-ID)** | OPEN | Wires SSE `id:` lines into the daemon event-replay engine so clients can resume interrupted streams. |
| 4 | **[#5780](https://github.com/QwenLM/qwen-code/pull/5780) — `qwen update` / `/update` auto-update command** | OPEN | Adds CLI and slash commands to check for and install new releases automatically. |
| 5 | **[#5847](https://github.com/QwenLM/qwen-code/pull/5847) — Runtime context injection for per-turn system reminders** | OPEN | Adds a per-session key-value store injectable as `<system-reminder>` blocks on every turn — enables dynamic, runtime-mutable context. |
| 6 | **[#5928](https://github.com/QwenLM/qwen-code/pull/5928) — `todosDirectory` setting for project-local todo persistence** | OPEN | Lets the todo-write tool persist to `.qwen/todos` (Git-trackable) instead of only the global runtime dir. |
| 7 | **[#5738](https://github.com/QwenLM/qwen-code/pull/5738) — Default to virtualized terminal history** | OPEN | Turns on the in-app scrollable history viewport by default for new users. |
| 8 | **[#5962](https://github.com/QwenLM/qwen-code/pull/5962) — `--insecure` flag for self-signed TLS endpoints** | OPEN | Opt-in TLS skip-verification for self-hosted model endpoints. |
| 9 | **[#5890](https://github.com/QwenLM/qwen-code/pull/5890) — `.qwen/loop.md` task file for /loop** | CLOSED (merged) | Implements the feature requested in [#5889](https://github.com/QwenLM/qwen-code/issues/5889): a durable, editable task list for long-running loops. |
| 10 | **[#5030](https://github.com/QwenLM/qwen-code/pull/5030) — Resume interrupted turn without synthetic "continue"** | CLOSED (merged) | SDK/stream-json callers can now resume unfinished assistant turns without injecting a fake user message. Closes [#4679](https://github.com/QwenLM/qwen-code/issues/4679). |

---

## 5. Feature Request Trends

1. **Multi-agent / channel-resident agents** — The **qwen tag** RFC ([#5888](https://github.com/QwenLM/qwen-code/pull/5888)) and `/loop` task persistence ([#5890](https://github.com/QwenLM/qwen-code/pull/5890)) show demand for persistent, multiplayer agents that live in chat platforms rather than ephemeral CLI sessions.

2. **Cost-aware context management** — Requests for a **configurable compaction model** ([#5956](https://github.com/QwenLM/qwen-code/issues/5956)), **Anthropic cache-hit optimization** ([#5942](https://github.com/QwenLM/qwen-code/issues/5942)), and **output-token-aware compression thresholds** ([#5957](https://github.com/QwenLM/qwen-code/pull/5957)) all point to users wanting finer control over token spend.

3. **Mobile & cross-platform UX** — Web Shell mobile input ([#5958](https://github.com/QwenLM/qwen-code/issues/5958)), voice dictation on desktop ([#5856](https://github.com/QwenLM/qwen-code/pull/5856)), and Chrome extension revival ([#5777](https://github.com/QwenLM/qwen-code/pull/5777)) indicate a push beyond the terminal.

4. **Inline model switching** — Request for `/model <id> <prompt>` single-line override ([#5967](https://github.com/QwenLM/qwen-code/issues/5956)) to avoid the current two-step model-change flow.

5. **Project-level state persistence** — `todosDirectory` ([#5928](https://github.com/QwenLM/qwen-code/pull/5928)) and runtime context injection ([#5847](https://github.com/QwenLM/qwen-code/pull/5847)) reflect demand for Git-commitable, shareable agent state.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|---|---|
| **Zombie sessions & token leaks** | [#5964](https://github.com/QwenLM/qwen-code/issues/5964) (30M tokens burned), [#5683](https://github.com/QwenLM/qwen-code/issues/5683) (subagent counting inaccurate), [#5819](https://github.com/QwenLM/qwen-code/issues/5819) (auto-upgrade switched to expensive model) |
| **Context window overflows** | [#5950](https://github.com/QwenLM/qwen-code/issues/5950) (compression threshold too late), [#5942](https://github.com/QwenLM/qwen-code/issues/5942) (cache misses inflate cost), [#5736](https://github.com/QwenLM/qwen-code/issues/5736) (excessive reprocessing) |
| **TUI rendering bugs** | [#5800](https://github.com/QwenLM/qwen-code/issues/5800) (last line overwritten), [#5837](https://github.com/QwenLM/qwen-code/issues/5837) (response cut off), [#5941](https://github.com/QwenLM/qwen-code/issues/5941) (scroll jumps to top), [#5966](https://github.com/QwenLM/qwen-code/issues/5966) (IME broken) |
| **Local LLM friction** | [#5736](https://github.com/QwenLM/qwen-code/issues/5736) (full prompt reprocessing), [#5821](https://github.com/QwenLM/qwen-code/pull/5821) (follow-up suggestions misbehave on local backends) |
| **Upgrade / update UX** | [#5819](https://github.com/QwenLM/qwen-code/issues/5819) (auto-upgrade changed model + settings), [#5780](https://github.com/QwenLM/qwen-code/pull/5780) (no built-in update command — now being addressed) |
| **Daemon cold-start latency** | [#4748](https://github.com/QwenLM/qwen-code/issues/4748) (2.5s cold start vs 0.7s CLI) |

---

*Next watch: Whether the zombie-session root cause ([#5964](https://github.com/QwenLM/qwen-code/issues/5964)) gets a dedicated patch, and if the **qwen tag** RFC ([#5888](https://github.com/QwenLM/qwen-code/pull/5888)) clears design review this week.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-29

---

## 1. Today's Highlights

The v0.8.66 cycle landed a **slew of safety-mode and modal-UI fixes** after a week where Auto, Plan, and YOLO modes all exhibited broken or misleading behavior. The biggest structural change: **Auto mode has been removed from the user-facing mode set** because it was functionally identical to Agent mode. Meanwhile, the **`.deepseek` → `.codewhale` state migration** that silently broke session visibility for upgraders has been patched with additive copy-back, doctor diagnostics, and a visible one-time notice.

---

## 2. Releases

No new releases in the last 24 hours. All activity is on `main` targeting v0.8.67.

---

## 3. Hot Issues

| # | Issue | Why it matters | Community signal |
|---|-------|----------------|------------------|
| 1 | **[#3733](https://github.com/Hmbown/CodeWhale/issues/3733) Auto mode is a hollow shell** | Auto mode behaved identically to Agent at runtime, contradicting its "shell enabled with automatic risk review" label. **Decision: remove from 0.8.66 UI; fix or cut in 0.8.67.** | Closed same-day — fast triage by maintainer. |
| 2 | **[#3734](https://github.com/Hmbown/CodeWhale/issues/3734) Plan mode write tools not hard-blocked** | Plan mode's prompt claims "all writes blocked," but the turn loop only hard-blocks exec/code/js — `write_file`, `edit_file`, `apply_patch`, and MCP writes slip through. | Closed; paired with PR #3722 to sync mode policy with engine. |
| 3 | **[#3735](https://github.com/Hmbown/CodeWhale/issues/3735) YOLO silently approves publish actions** | `cargo publish`, `git push --tags`, etc. were auto-approved in YOLO, defeating the `safety_floor` durable-review intent. | Closed; regression test added in PR #3737. |
| 4 | **[#3732](https://github.com/Hmbown/CodeWhale/issues/3732) Modal UI broken across ALL modals** | Content bleed-through (no opaque backdrop) and action-row truncation/overflow in the shared modal renderer. Affects Plan Confirmation and every other popup. | Open; PR #3750 addresses the backdrop centrally. |
| 5 | **[#3728](https://github.com/Hmbown/CodeWhale/issues/3728) TUI freezes under many concurrent sub-agents** | ~13 sub-agents + background bash jobs starve the render loop via event-receiver `RwLock` contention. Full TUI freeze, unrecoverable without kill. | Open; no fix yet — a real scalability ceiling. |
| 6 | **[#3738](https://github.com/Hmbown/CodeWhale/issues/3738) Prompt-cache hit-rate regression (DeepSeek cost up)** | A per-turn `<turn_meta>` block may be busting the cacheable prefix, causing significantly higher DeepSeek API bills. | Open; PRs #3743/#3745 add route-level cache telemetry to diagnose. |
| 7 | **[#3724](https://github.com/Hmbown/CodeWhale/issues/3724) Sessions lost after upgrade** | `~/.deepseek/sessions/` not surfaced after rebrand migration; read-path didn't fall back to legacy dir. | Closed; fixed by PR #3752 (additive copy-back). |
| 8 | **[#3736](https://github.com/Hmbown/CodeWhale/issues/3736) Simplify mode permissions: 4 knobs → 2** | `EffectiveModePolicy` has four overlapping booleans (`allow_shell`, `approval_mode`, `trust_mode`, `auto_approve`) that co-vary in every mode — the structural source of "UI says one mode but runtime does another." | Open; PR #3742 already removes `auto_approve` as a first step. |
| 9 | **[#3751](https://github.com/Hmbown/CodeWhale/issues/3751) Neuralwatt provider request** | Neuralwatt offers GLM 5.2 with a non-token-based pricing model and is gaining rapid adoption. Community wants first-class support. | Open; 1 comment so far. |
| 10 | **[#3093](https://github.com/Hmbown/CodeWhale/issues/3093) Korean, Spanish, Brazilian Portuguese localization** | Next-wave README + website locales for broader global reach. | Open; low engagement but high leverage for adoption. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | **[#3754](https://github.com/Hmbown/CodeWhale/pull/3754) Surface legacy state migrations** | Adds a structured migration event + visible one-time notice when `~/.deepseek/<state>` is moved to `~/.codewhale/<state>`. Covers sessions, skills, tasks. |
| 2 | **[#3753](https://github.com/Hmbown/CodeWhale/pull/3753) Surface legacy state in doctor** | `codewhale doctor` now reports `legacy_only` / dual-root data without moving or deleting anything. JSON output documented. |
| 3 | **[#3752](https://github.com/Hmbown/CodeWhale/pull/3752) Restore legacy session visibility** | Fixes #3724: additive copy of missing entries from `~/.deepseek/sessions` → `~/.codewhale/sessions`. Existing CodeWhale data never overwritten. |
| 4 | **[#3750](https://github.com/Hmbown/CodeWhale/pull/3750) Clear modal backdrop centrally** | Paints an opaque backdrop from `ViewStack` before any modal renders, fixing content bleed-through (#3732). |
| 5 | **[#3742](https://github.com/Hmbown/CodeWhale/pull/3742) Split trust from approval bypass** | Stops treating workspace trust as authority to auto-resolve tool approvals. Removes redundant `auto_approve` field. First step toward #3736's 4→2 knob collapse. |
| 6 | **[#3737](https://github.com/Hmbown/CodeWhale/pull/3737) Keep publish safety floor in YOLO** | Preserves durable-review prompts for `cargo publish`, `npm publish`, tag/release pushes even in YOLO. Adds regression test. |
| 7 | **[#3743](https://github.com/Hmbown/CodeWhale/pull/3743) + [#3745](https://github.com/Hmbown/CodeWhale/pull/3745) Show routes in cache telemetry** | Records provider/model route per turn and renders it in `/cache`. Enables diagnosis of cache-hit regression (#3738) by surfacing endpoint/model fragmentation. |
| 8 | **[#3740](https://github.com/Hmbown/CodeWhale/pull/3740) Clarify provider key status** | Splits API-key provider labels (`needs-key` / `key:not-set`) from OAuth labels (`needs-login` / `auth:oauth-*`) in the provider picker. Fixes misleading "auth:missing" on key-based providers (#3725). |
| 9 | **[#3748](https://github.com/Hmbown/CodeWhale/pull/3748) + [#3749](https://github.com/Hmbown/CodeWhale/pull/3749) Add Sakana AI Fugu provider** | New built-in OpenAI-compatible provider (`sakana` / `fugu` aliases, `FUGU_API_KEY` auth, default model `fugu`). Harvested from community contributor @lerugray. |
| 10 | **[#3729](https://github.com/Hmbown/CodeWhale/pull/3729) Pause input pump for external editor** | Fixes editor freeze/crash (#3657) by pausing the terminal input pump before Ctrl+O hands the terminal to Vim/external editor, draining buffered events, and resuming on exit. Credits @buko's Windows repro. |

---

## 5. Feature Request Trends

1. **Provider expansion** — Neuralwatt (#3751) and Sakana Fugu (merged) show demand for fast onboarding of new OpenAI-compatible providers, especially those with novel pricing or exclusive model access (GLM 5.2).
2. **Mode model simplification** — #3736 proposes collapsing four overlapping permission booleans into two (`approval_mode` + `trust_mode`). This is the structural follow-up to the Auto-mode removal (#3733) and the trust/approval split (#3742).
3. **Verifier preview / "hunt" verdicts** — #2093 (open since May) wants a read-only, time-boxed sub-agent that emits `hunted` / `wounded` / `escaped` verdicts on claims. PR #3721 adds the config table; the feature is scoped for v0.8.67.
4. **Hotbar (0.8.67)** — #3731 requests a fully customizable hotbar with clear key-chord activation UI, deferred from 0.8.66.
5. **Localization** — #3093 tracks Korean, Spanish, and Brazilian Portuguese README + website locales as the next wave after Russian parity.
6. **HarmonyOS/OpenHarmony tier-2 target** — #2970 seeks a CI `cargo-check` job and remaining sandbox/clipboard gating for the OHOS platform.

---

## 6. Developer Pain Points

- **Mode semantics are unreliable.** Auto = Agent (#3733), Plan doesn't block writes (#3734), YOLO bypasses publish safety (#3735). The four-knob permission model (#3736) is the root cause and is actively being dismantled, but the churn is visible and frustrating.
- **Modal UI is fundamentally broken.** Content bleed-through and action-row truncation (#3732) affect every confirmation popup. A central fix landed (#3750) but the issue remains open — likely more polish needed.
- **Silent state migration loses user data.** The `.deepseek` → `.codewhale` rebrand moved files without telling anyone, leaving sessions "empty" after upgrade (#3724). Three PRs (#3752, #3753, #3754) now address copy-back, diagnostics, and user-visible notices.
- **TUI freezes at scale.** ~13 concurrent sub-agents cause a hard freeze via `RwLock` contention (#3728). No fix yet — this is a hard ceiling for power users running parallel agent workflows.
- **Cache cost regression.** A per-turn metadata block may be busting DeepSeek prompt-cache hits, silently increasing API bills (#3738). Telemetry improvements (#3743/#3745) are the first step; the root-cause fix is still pending.
- **Provider picker mislabels auth state.** Every API-key provider shows `needs-auth | auth:missing`, which reads as a regression (#3725). Fixed by #3740.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*