# AI CLI Tools Community Digest 2026-04-08

> Generated: 2026-04-08 00:13 UTC | Tools covered: 8

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

# Cross-Tool AI CLI Comparison Report — 2026-04-08

---

## 1. Ecosystem Overview

The AI CLI tool landscape is maturing rapidly, with all major players converging on multi-modal capabilities, MCP ecosystem integration, and enterprise-grade observability. Claude Code and OpenAI Codex lead in release velocity and enterprise adoption, while Qwen Code and Kimi CLI are aggressively closing feature gaps through rapid iteration. The community is increasingly vocal about token transparency, session persistence, and cross-platform reliability—pain points that now dominate issue backlogs across all tools. Open-source pressure is intensifying, with multiple extraction attempts against closed-source tools and community-driven rewrite efforts emerging.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases | Release Cadence |
|------|:------------:|:---------:|:--------:|-----------------|
| **Claude Code** | 50 | 10 | v2.1.94 | Daily stable |
| **OpenAI Codex** | ~15 | ~15 | 5 alphas (v0.119.0-alpha.13–.17) | Hourly alpha |
| **Gemini CLI** | ~12 | ~12 | v0.37.0-preview.2, nightly | Daily preview |
| **GitHub Copilot CLI** | ~12 | 2 | v1.0.20, v1.0.21 | Rapid patch |
| **Kimi CLI** | ~12 | ~10 | — | Irregular |
| **OpenCode** | ~12 | ~12 | — | Irregular |
| **Pi** | ~12 | ~12 | — | Irregular |
| **Qwen Code** | ~12 | ~12 | v0.14.1, v0.14.2 | Emergency patch |

*Note: Issue/PR counts estimated from digest scope; precise 24-hour windows vary by tool.*

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **Token/Cost Transparency** | Claude Code, Codex, Qwen Code, Gemini CLI | Per-request attribution, real-time dashboards, burn rate alerts (#38335, #14593, #2904, contextual tips) |
| **MCP Ecosystem Maturity** | Copilot CLI, Codex, Claude Code, Kimi CLI | Server management commands, sampling support, bidirectional comms, schema validation (#1748, #17043, #36411) |
| **Session Persistence & Portability** | Claude Code, Gemini CLI, Kimi CLI, OpenCode | Cross-device resume, path-independent history, manual lifecycle tools (#39148, #22819, #1783, #21399) |
| **Remote/Mobile Workflows** | Codex, Claude Code, Qwen Code | Phone-based oversight, Telegram/SSH integration, unattended sessions (#9224, #29214, #2339) |
| **Enterprise Observability** | Copilot CLI, Claude Code, Codex, Pi | OpenTelemetry, structured logging, steering metadata (#2471, analytics stack, #2908) |
| **TUI/Terminal Integration** | Gemini CLI, Copilot CLI, OpenCode, Qwen Code | Mouse capture disable, paste transparency, scroll stability, CJK support (#7926, #2344, #21315, #2942) |
| **Rules/Guidelines Hierarchy** | Kimi CLI, Claude Code | Global/user/project-level governance (#1747, #1777, CLAUDE.md patterns) |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Distinctive Approach |
|-----------|---------|----------------------|
| **Enterprise Integration** | Claude Code, Codex, Copilot CLI | Claude Code: Bedrock/Vertex/Foundry multi-cloud; Codex: Rust-based performance + rapid alpha iteration; Copilot CLI: GitHub-native MCP registry, Azure OpenAI BYOK |
| **Open Source Positioning** | OpenCode, Pi, Kimi CLI | OpenCode: explicit Claude Code compatibility layer; Pi: extension framework + custom gateway hub; Kimi CLI: aggressive hooks ecosystem + controversial Python→Bun rewrite |
| **Multimodal & Voice** | OpenCode, Qwen Code | OpenCode: full STT/TTS/VAD with barge-in; Qwen Code: image paste, PDF gaps being closed |
| **Cost Optimization** | Qwen Code, Gemini CLI | Qwen: adaptive token escalation (8K→64K), disable follow-ups by default; Gemini: bounded memory growth, context splitting |
| **Quality & Safety** | Claude Code, Codex | Claude: elevated default effort tiers, Cowork workspace reliability investment; Codex: sandbox hardening, limited git writes, memory extensions |
| **Internationalization** | Qwen Code, Gemini CLI | Qwen: CJK word segmentation, Ctrl+arrow navigation; Gemini: non-English performance regression testing |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **Highest Velocity** | OpenAI Codex, Claude Code | Codex: 5 alphas in 24h, heavy analytics infrastructure investment; Claude Code: 456-comment billing crisis, sustained enterprise pressure |
| **Rapid Catch-Up** | Qwen Code, Kimi CLI, Gemini CLI | Qwen: emergency patches, 4-agent `/review` architecture; Kimi: hooks ecosystem expansion, controversial full rewrite; Gemini: 5 performance regression tests filed, memory leak fixes |
| **Steady Feature Build** | Copilot CLI, OpenCode, Pi | Copilot CLI: MCP + OTel shipped rapidly; OpenCode: voice + web performance PR stack; Pi: OpenRouter routing, custom provider proliferation |
| **Structural Tension** | Claude Code, Kimi CLI | Claude Code: 4 active "open source" PRs extracting sourcemaps; Kimi CLI: #1707 rewrite PR claims Python was "complete failure"—community trust at stake |

**Maturity Signals:** Claude Code and Codex show enterprise-grade incident response (billing investigations, model rollbacks). Qwen Code and Gemini CLI demonstrate engineering discipline (performance regression testing, memory bounds). Kimi CLI's rewrite controversy and Claude Code's source extraction pressure indicate community frustration with closed-source governance.

---

## 6. Trend Signals

| Trend | Evidence | Developer Value |
|-------|----------|---------------|
| **Token Anxiety → Cost-First Design** | "Burning tokens" is #1 issue across Codex, Claude Code; Qwen disables follow-ups by default; adaptive allocation | Demand pricing transparency and efficiency-first defaults |
| **MCP as Lingua Franca** | All tools investing; Copilot CLI ships `copilot mcp`; Codex server-driven elicitations; Kimi fixes connection crashes | Interoperable tool ecosystem reducing vendor lock-in |
| **Terminal-Native UX as Differentiator** | Mouse capture, paste behavior, scroll stability dominate Gemini, Copilot, OpenCode issues | Power users rejecting web-first for CLI fidelity |
| **Remote Agent Infrastructure** | Phone control, Telegram bots, SSH session management across Codex, Qwen, Claude Code | AI coding as ambient service, not local-only tool |
| **Governance & Safety Layering** | Rules hierarchies, permission workflows, hook systems for external approval | Enterprise adoption requires auditable, constrainable agent behavior |
| **Source Availability Pressure** | Multiple extraction PRs against Claude Code; Kimi CLI rewrite controversy; OpenCode's explicit compatibility strategy | Community demanding inspectability and portability guarantees |

---

*Report compiled from 8 community digests covering 400+ issues, 100+ PRs, and 12 releases on 2026-04-08.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Date:** 2026-04-08 | **Source:** github.com/anthropics/skills

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Prevents typographic defects in AI-generated documents: orphan word wraps, widow paragraphs, numbering misalignment | Universal applicability—"affects every document Claude generates" |
| 2 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised guidance for actionable, conversation-scoped frontend design instructions | Clarity vs. verbosity trade-offs; token efficiency |
| 3 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills for evaluating Skills across 5 quality dimensions and security posture | First systematic approach to Skill validation |
| 4 | **ODT Processing** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | OpenDocument creation, template filling, and ODT→HTML parsing (ISO 26300 standard) | Enterprise document workflow integration |
| 5 | **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | 🟡 Open | Fixes `w:id` collision corruption when adding tracked changes to bookmarked documents | Deep OOXML expertise; production stability |
| 6 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Comprehensive testing stack: Testing Trophy, AAA pattern, React component testing, MSW | Full-spectrum testing philosophy |
| 7 | **Sensory (macOS Automation)** | [#806](https://github.com/anthropics/skills/pull/806) | 🟡 Open | Native macOS automation via AppleScript/osascript vs. screenshot-based computer use | Two-tier permission model; accessibility trade-offs |
| 8 | **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | 🟡 Open | Broad enterprise platform coverage: ITSM, ITOM, SecOps, ITAM/SAM, FSM, SPM, CSDM, IntegrationHub | Enterprise IT scope breadth |

---

## 2. Community Demand Trends

Derived from top Issues by engagement:

| Trend | Evidence | Implication |
|:---|:---|:---|
| **Enterprise SSO/Auth Integration** | [#532](https://github.com/anthropics/skills/issues/532), [#29](https://github.com/anthropics/skills/issues/29) | Skills tooling assumes API-key auth; enterprise users blocked |
| **Skill Distribution & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492), [#228](https://github.com/anthropics/skills/issues/228), [#189](https://github.com/anthropics/skills/issues/189) | Namespace impersonation risks; need org-wide sharing, deduplication |
| **Evaluation & Quality Assurance** | [#556](https://github.com/anthropics/skills/issues/556), [#202](https://github.com/anthropics/skills/issues/202) | `run_eval.py` 0% trigger rate; skill-creator needs best-practice overhaul |
| **MCP Protocol Exposure** | [#16](https://github.com/anthropics/skills/issues/16) | Community wants Skills exposed as typed APIs, not opaque prompts |
| **Agent Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) | Emerging demand for policy enforcement, audit trails, trust scoring |

---

## 3. High-Potential Pending Skills

Active PRs with substantive discussion, likely to merge:

| Skill | PR | Why It Matters | Blocker/Status |
|:---|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | Solves universal output quality problem; zero dependencies | Open, awaiting review |
| **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | Production bugfix with precise OOXML root-cause analysis | Open, technical review |
| **YAML Validation Fixes** | [#539](https://github.com/anthropics/skills/pull/539), [#361](https://github.com/anthropics/skills/pull/361) | Prevents silent parsing failures in Skill frontmatter | Open, overlapping—may need consolidation |
| **Feature-Dev Workflow Fix** | [#363](https://github.com/anthropics/skills/pull/363) | Fixes Phase 6/7 skipping in `/feature-dev` due to TodoWrite overwrite | Open, workflow-critical |
| **Shodh-Memory** | [#154](https://github.com/anthropics/skills/pull/154) | Persistent context across conversations—foundational agent capability | Open, architectural review |
| **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | First enterprise tabular foundation model integration (SAP) | Open, vendor-specific scope |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade reliability infrastructure**—encompassing auth/SSO compatibility, deterministic evaluation frameworks, namespace trust boundaries, and cross-conversation state management—rather than additional domain-specific Skills.

---

*Report generated from 50 PRs and 50 Issues. All GitHub links: [github.com/anthropics/skills](https://github.com/anthropics/skills)*

---

# Claude Code Community Digest — 2026-04-08

---

## 1. Today's Highlights

Anthropic shipped **v2.1.94** with Amazon Bedrock support via Mantle and elevated default effort levels for paid tiers. Meanwhile, a **456-comment thread** on abnormal session limit exhaustion dominates community attention, while multiple high-engagement issues around model quality and Cowork workspace reliability were resolved. The open-source movement continues with 4 active PRs attempting to extract or release Claude Code's source code.

---

## 2. Releases

### [v2.1.94](https://github.com/anthropics/claude-code/releases/tag/v2.1.94) — 2026-04-07

| Change | Impact |
|--------|--------|
| `CLAUDE_CODE_USE_MANTLE=1` — Amazon Bedrock via Mantle | Enterprise AWS users gain alternative inference path |
| Default effort: `medium` → `high` for API-key, Bedrock/Vertex/Foundry, Team, Enterprise users | More capable responses by default; override with `/effort` |
| Compact Slack channel headers | UI polish for integrations |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | **Claude Max plan session limits exhausted abnormally fast** (CLI) | **456 comments, 356 👍** — Top-billing crisis; users report 10-50x faster consumption since March 23 | Intense demand for transparency on token counting; Anthropic acknowledging investigation |
| [#42796](https://github.com/anthropics/claude-code/issues/42796) | **Claude Code unusable for complex engineering tasks** (Feb updates) | **757 👍, now closed** — Major quality regression reported by senior engineers | Closed with model rollback acknowledgment; significant reputation impact |
| [#24964](https://github.com/anthropics/claude-code/issues/24964) | **Cowork: Folder picker rejects folders outside home directory** | **186 👍, closed** — Core workspace functionality broken for non-standard project layouts | Fix shipped; symlinks/junctions now supported |
| [#44910](https://github.com/anthropics/claude-code/issues/44910) | **`AWS_BEARER_TOKEN_BEDROCK` auth broken in 2.1.92+** | Regression blocks enterprise AWS auth; 9 comments in 24h | Critical for Bedrock users; workaround sought |
| [#2805](https://github.com/anthropics/claude-code/issues/2805) | **Windows line endings on Linux systems** | Persistent cross-platform file handling bug; breaks shell scripts | 31 comments; CLAUDE.md instructions ignored by model |
| [#29214](https://github.com/anthropics/claude-code/issues/29214) | **Remote Control: mobile app shows permission prompts despite `--dangerously-skip-permissions`** | Security/UX inconsistency in remote workflow | 54 👍; blocks unattended remote sessions |
| [#41361](https://github.com/anthropics/claude-code/issues/41361) | **MCP tool results invisible in 2.1.88** — `outputSchema` safeParse guard | Plugin ecosystem regression; null returns on schema mismatch | 8 comments; affects MCP tool developers |
| [#36411](https://github.com/anthropics/claude-code/issues/36411) | **Telegram MCP plugin: inbound notifications never delivered** | Bidirectional MCP integration broken | 10 👍; outbound works, inbound fails |
| [#43660](https://github.com/anthropics/claude-code/issues/43660) | **`disable-model-invocation` blocks user-typed slash commands** | Skill system design flaw; user intent overridden by YAML flag | 4 comments; breaks automation workflows |
| [#44868](https://github.com/anthropics/claude-code/issues/44868) | **Secrets exposed from `.env` / `.dev.vars` via grep/Read tool** | Security gap: model reads secrets despite CLAUDE.md prohibitions | 3 comments; safety reflex fires after exposure |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#44874](https://github.com/anthropics/claude-code/pull/44874) | **wmux-orchestrator plugin** | Multi-agent task decomposition with parallel Claude Code agents, dependency-aware waves, and cross-agent consistency review | Open — significant architecture addition |
| [#44742](https://github.com/anthropics/claude-code/pull/44742) | **Diagnostic tool + root cause analysis for session persistence data loss** | Addresses 12+ duplicate issues since Dec 2025; adds `scripts/diagnose-session-persistence.ts` | Open — critical bug fix |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | **Open source Claude Code** | Community attempt to force source release; closes #59, #456, #2846, #22002, #41434 | Open — symbolic/pressure PR |
| [#41518](https://github.com/anthropics/claude-code/pull/41518) | **Fully Open Source Claude Code** | Extracted 1906 TypeScript files from `cli.js.map`; Bun build config; runs `--version`/`--help` | Open — most technically complete source extraction |
| [#44681](https://github.com/anthropics/claude-code/pull/44681) | **Remove stale exec guidance** | Security documentation cleanup | Open |
| [#44676](https://github.com/anthropics/claude-code/pull/44676) | **Add missing plugin manifest for `plugin-dev`** | Fixes bundled marketplace inconsistency | Open |
| [#41938](https://github.com/anthropics/claude-code/pull/41938) | **Linux/macOS Bash script for DevContainer startup** | Cross-platform parity; previously Windows-only PowerShell | Open — DX improvement |
| [#39148](https://github.com/anthropics/claude-code/pull/39148) | **preserve-session plugin** | Path-independent session history via project UUIDs; survives renames/moves/copies | Open — solves long-standing session fragility |
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | **Add missing source to Claude Code** | Minimal source release request | Open — companion to #41447, #41518 |
| [#1](https://github.com/anthropics/claude-code/pull/1) | **Create SECURITY.md** | Baseline security policy | Closed — merged |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Buddy/Companion customization** | [#41766](https://github.com/anthropics/claude-code/issues/41766), [#42747](https://github.com/anthropics/claude-code/issues/42747), [#44728](https://github.com/anthropics/claude-code/issues/44728), [#41844](https://github.com/anthropics/claude-code/issues/41844), [#41908](https://github.com/anthropics/claude-code/issues/41908) | **High** — 5 issues in 7 days; name, appearance, behavior, gamification all requested |
| **Remote Control enhancements** | [#29214](https://github.com/anthropics/claude-code/issues/29214), [#29438](https://github.com/anthropics/claude-code/issues/29438) | Medium — iOS push notifications, permission inheritance |
| **Session persistence & portability** | [#42291](https://github.com/anthropics/claude-code/issues/42291), [#39148](https://github.com/anthropics/claude-code/pull/39148), [#44742](https://github.com/anthropics/claude-code/pull/44742) | High — data loss is recurring pain point |
| **Cowork workspace reliability** | [#24964](https://github.com/anthropics/claude-code/issues/24964), [#43534](https://github.com/anthropics/claude-code/issues/43534), [#44668](https://github.com/anthropics/claude-code/issues/44668) | Medium — Windows-specific instability |
| **MCP ecosystem hardening** | [#36411](https://github.com/anthropics/claude-code/issues/36411), [#41361](https://github.com/anthropics/claude-code/issues/41361), [#43660](https://github.com/anthropics/claude-code/issues/43660) | Medium — bidirectional comms, schema validation, skill invocation |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Billing & Session Limits** | Unexplained rapid credit consumption; confusion between subscription tiers and API credits; promotional credits misapplied | **Critical** — #38335, #43678, #44559 |
| **Cross-Platform File Handling** | CRLF/LF mismatches; path resolution bugs; Windows-specific Cowork crashes | High — #2805, #44668, #43534 |
| **Authentication Fragility** | OAuth expiration without recovery; Bedrock token regressions; session/subscription misalignment | High — #44930, #44910, #44559 |
| **Model Quality Consistency** | Perceived degradation in complex reasoning; "sabotage" accusations (emotional but indicative) | Moderate-High — #42796, #43052 |
| **Security Tooling Gaps** | Secrets leakage despite instructions; `.claude/` directory undocumented; permission model inconsistencies | Moderate — #44868, #43675, #29214 |
| **Open Source Tension** | Community actively extracting source from sourcemaps; multiple PRs demanding transparency | Persistent — #41447, #41518, #41611 |

---

*Digest compiled from 50 issues, 10 PRs, and 1 release in the 24-hour window ending 2026-04-08.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-08

---

## 1. Today's Highlights

The Codex team is aggressively iterating on the Rust CLI with **five alpha releases in 24 hours** (v0.119.0-alpha.13 through .17), signaling active stabilization ahead of a broader release. Community friction remains concentrated around **token consumption transparency**, **macOS Intel support gaps**, and **Windows installer accessibility**. Meanwhile, analytics infrastructure is getting heavy investment with a stacked PR series for telemetry metadata, and the TUI is receiving performance fixes for startup latency.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| [rust-v0.119.0-alpha.13–.17](https://github.com/openai/codex/releases) | Rapid-fire alpha iteration on the Rust CLI. No detailed changelogs provided; typical for pre-release channels. Indicates active bugfixing or feature integration. |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|------------------|
| [#14593 — Burning tokens very fast](https://github.com/openai/codex/issues/14593) | **464 comments, 172 👍** — Top community pain point. Business-tier users report opaque token consumption with no granular visibility into *what* burned credits. | Frustrated; demands for real-time token dashboards and per-request breakdowns. |
| [#10410 — macOS Intel (x86_64) support](https://github.com/openai/codex/issues/10410) | **243 👍, 165 comments** — Apple Silicon-only releases exclude substantial legacy Mac install base in enterprise environments. | Persistent advocacy; users note Rosetta 2 is insufficient for performance-sensitive workflows. |
| [#12764 — 401 Unauthorized errors](https://github.com/openai/codex/issues/12764) | Auth regression affecting CLI users with `api` login method; blocks basic functionality. | Confusion between API key vs. OAuth flows; needs clearer error messaging. |
| [#9224 — Codex Remote Control](https://github.com/openai/codex/issues/9224) | **246 👍** — High-demand workflow: phone-based oversight of desktop Codex sessions. | Strong enthusiasm; users already hacking workarounds via SSH/tmux. |
| [#16231 — High CPU usage on macOS (M5 Pro)](https://github.com/openai/codex/issues/16231) | Regression in VS Code extension v26.325.31654; thermal throttling on latest Apple Silicon. | Concerned; affects daily usability. |
| [#13993 — Standalone Windows installer](https://github.com/openai/codex/issues/13993) | **56 👍** — Microsoft Store restrictions block corporate/locked-down Windows deployments. | Repeated requests; seen as accessibility barrier. |
| [#16904 — TUI stale busy spinner after subagent completion](https://github.com/openai/codex/issues/16904) | UX polish issue in Linux/tmux environments; state management bug. | Niche but annoying for heavy terminal users. |
| [#16553 — Unresponsive startup with large `~/.ssh/config`](https://github.com/openai/codex/issues/16553) | Performance cliff on SSH-heavy developer machines; parsing bottleneck. | Workaround identified (trim config), fix needed. |
| [#16502 — Desktop crashes immediately on Windows](https://github.com/openai/codex/issues/16502) | Startup failure on Windows 10/11; regression or environment detection issue. | Blocking for affected users; multiple version bisects attempted. |
| [#17041 — Live session breaks on auth refresh](https://github.com/openai/codex/issues/17041) | Corporate `api` login users lose sessions mid-work; no graceful re-auth. | Workflow disruptive; security vs. UX tension. |

---

## 4. Key PR Progress

| PR | Feature / Fix | Significance |
|----|-------------|------------|
| [#17039 — Reduce TUI startup and new-session latency](https://github.com/openai/codex/pull/17039) | Async fetch of rate limits; fixes stale `/status` cache notices | Directly addresses perceived "hang" on launch; improves responsiveness |
| [#17036 — Allow limited git writes in workspace sandbox](https://github.com/openai/codex/pull/17036) | `allow_limited_git_writes` for `workspace-write` sandboxes | Unblocks git workflows (commit, branch) without full hook/config exposure |
| [#17043 — MCP server-driven elicitations](https://github.com/openai/codex/pull/17043) | Extends elicitation flow to custom MCP servers; preserves `_meta` | Critical for MCP ecosystem maturity; enables richer tool interactions |
| [#16736 — Move unified-exec sandbox launch to exec-server](https://github.com/openai/codex/pull/16736) | Architectural refactor: remote sandbox argv construction in exec-server | Foundation for distributed/remote execution; reduces client complexity |
| [#17030 — Exec-server managed-network follow-up](https://github.com/openai/codex/pull/17030) | Completes remote managed-network support; explicit rejection of unsupported callbacks | Hardens networking edge cases; improves error clarity |
| [#16949 — Use model metadata for Fast Mode status](https://github.com/openai/codex/pull/16949) | Decouples "Fast Mode" from hardcoded model names; uses metadata-driven tiers | Enables flexible model rollout; UI adapts automatically |
| [#16276 — Add memory extensions](https://github.com/openai/codex/pull/16276) | External contribution for persistent memory capabilities | Community-driven enhancement; long-requested for context continuity |
| [#17057 — Attach WebRTC realtime starts to sideband websocket](https://github.com/openai/codex/pull/17057) | WebRTC call setup via direct websocket; keeps fallback path alive | Reliability improvement for voice/realtime features |
| [#16937 — Surface remote startup exec approvals](https://github.com/openai/codex/pull/16937) | Approval plumbing for remote unified exec startup | Security/UX bridge for remote execution workflows |
| [#16706 / #16640 / #16641 / #16659 / #16870 — Analytics metadata stack](https://github.com/openai/codex/pulls?q=is%3Apr+analytics) | Steering metadata, token usage, queued submission, thread denormalization | Heavy investment in observability; likely for internal rate-limiting and product analytics |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Token economics transparency** | #14593, #8367, #6792 | Users demand granular cost visibility; "burning tokens" is the #1 anxiety |
| **Remote / mobile workflows** | #9224 (phone control), #16937, #16736 (remote exec) | Codex as "anywhere" agent; desktop-to-mobile bridge |
| **Windows enterprise compatibility** | #13993 (standalone installer), #16364, #16502, #16834, #16970 | Microsoft Store is a deployment blocker; need .exe/MSI |
| **MCP ecosystem maturity** | #17043, #11264, #16834 | Server-driven capabilities becoming first-class |
| **Hooks & automation** | #16484, #16301, #5781 | Power users want machine-readable events for CI/CD integration |
| **Export / portability** | #2880 (Markdown export), #5781 | Session artifacts need to escape the terminal |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Core Issue |
|------------|-----------|------------|
| **Opaque token consumption** | 🔥🔥🔥🔥🔥 | No per-request attribution; "fast burn" erodes trust |
| **Platform support gaps** | 🔥🔥🔥🔥 | macOS Intel abandoned; Windows Store-only friction |
| **Auth fragility** | 🔥🔥🔥 | 401s, session expiration, API vs. OAuth confusion |
| **Sandbox / networking edge cases** | 🔥🔥🔥 | localhost unreachable, shell blocked, Windows firewall failures |
| **TUI state management** | 🔥🔥 | Spinners, resume behavior, Ctrl+C handling |
| **Model selection bugs** | 🔥🔥 | `spawn_agent` ignores requested model (#16548) |

---

*Digest compiled from github.com/openai/codex — 2026-04-08*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-08

## Today's Highlights

The v0.37.0-preview.2 patch release landed with a critical cherry-pick fix, while the team aggressively tackled memory and performance infrastructure—five new performance regression test issues were filed in 24 hours. A significant UX shift is underway: Ctrl+G replaces Ctrl+X as the external editor shortcut, aligning with industry standards. Memory leak fixes dominated the merge queue, with two long-standing Scheduler disposal issues finally receiving comprehensive patches.

---

## Releases

| Version | Type | Key Change |
|---------|------|------------|
| [v0.37.0-preview.2](https://github.com/google-gemini/gemini-cli/releases/tag/v0.37.0-preview.2) | Patch | Cherry-pick fix for release branch stability |
| [v0.36.0-nightly.20260407.1c22c5b37](https://github.com/google-gemini/gemini-cli/releases/tag/v0.36.0-nightly.20260407.1c22c5b37) | Nightly | Role-specific `/stats` metrics; context splitting; Windows/BSD shebang fix (removed `-S` flag) |

---

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|----------------|
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST-aware file reads/search | EPIC tracking whether tree-sitter-style parsing could reduce token waste and misaligned reads. Fundamental to agent efficiency. | 4 comments, maintainer-only; high architectural impact |
| [#24863](https://github.com/google-gemini/gemini-cli/issues/24863) Scheduler McpProgress listener leak | Code review caught production memory leak—Scheduler instances never disposed listeners. Quickly closed with fix PR. | 3 comments; demonstrates active code health monitoring |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) Subagents unaware of approval modes | Policy engine blocks calls but subagents' prompts contradict constraints. Creates confusing UX in Plan/Auto-Edit modes. | 1 comment, 👍1; workflow friction |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) Memory routing: global vs. project | Defines persistence architecture—`~/.gemini/` for user prefs, `.gemini/` for codebase-specific memory. Critical for multi-repo workflows. | 1 comment, 👍2; clear user demand |
| [#22809](https://github.com/google-gemini/gemini-cli/issues/22809) Proactive memory writes | Main agent lacks guidance on *when* to persist preferences. Would reduce repetitive corrections. | 1 comment, 👍1; UX polish |
| [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) SSH session text scrambling | Windows→gLinux SSH breaks terminal rendering. Blocking remote development workflow. | 1 comment; accessibility concern |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) Tmp scripts scattered in random spots | Model workaround for shell restrictions pollutes workspaces. Commit hygiene pain point. | 1 comment; cleanup overhead |
| [#24768](https://github.com/google-gemini/gemini-cli/issues/24768) Nested scrollbar rendering glitch | Visual regression: wrapped lines break bordered boxes. Polish issue affecting perceived quality. | 0 comments; fresh report |
| [#24470](https://github.com/google-gemini/gemini-cli/issues/24470) Long chat scroll instability | Screen flashes, scrollbar jumps until first top reach. Performance/UX hybrid issue with repro video. | 0 comments; documented severity |
| [#24535](https://github.com/google-gemini/gemini-cli/issues/24535) Session resume auth failure | `--resume` failed with "Invalid session identifier" due to API key env handling. Closed after 9-comment diagnosis. | 9 comments; resolved support load |

---

## Key PR Progress

| PR | Status | Feature/Fix |
|----|--------|-------------|
| [#24870](https://github.com/google-gemini/gemini-cli/pull/24870) | Open | **Scheduler disposal fix**—completes #21006, covers leak site missed in earlier attempt |
| [#24861](https://github.com/google-gemini/gemini-cli/pull/24861) | Open | **Ctrl+G external editor shortcut**—industry standard migration; Ctrl+X shows deprecation toast |
| [#24862](https://github.com/google-gemini/gemini-cli/pull/24862) | Open | **Bounded memory growth**—caps items in `AnsiOutput`, `SubagentProgressDisplay`, `text-buffer` |
| [#24397](https://github.com/google-gemini/gemini-cli/pull/24397) | Open | **Slash command listener cleanup**—prevents async init/unmount race conditions |
| [#24859](https://github.com/google-gemini/gemini-cli/pull/24859) | Open | **EPT size flag + default increase**—configurable context window sizing |
| [#24858](https://github.com/google-gemini/gemini-cli/pull/24858) | Open | **Content disappearance fix**—poems/conversational text no longer vanish after tool execution |
| [#24763](https://github.com/google-gemini/gemini-cli/pull/24763) | Open | **Sandbox cleanup robustness**—`try...finally` wrappers prevent resource exhaustion |
| [#24752](https://github.com/google-gemini/gemini-cli/pull/24752) | Open | **Decoupled ContextManager/Sidecar architecture**—foundational refactor for #24751 |
| [#24677](https://github.com/google-gemini/gemini-cli/pull/24677) | Open | **Compact mode formatting**—terse search/read tools, consistent listing verbiage |
| [#24853](https://github.com/google-gemini/gemini-cli/pull/24853) | Open | **OAuth URL preservation**—dedicated auth display path prevents terminal truncation |

---

## Feature Request Trends

1. **Memory & Persistence Architecture** — Three issues (#22819, #22809, #22816) converge on structured memory: global vs. project scoping, proactive writes, and hierarchical UI display. Users want the CLI to "remember" effectively.

2. **Performance Observability** — Five new issues (#24864–#24869) from @jacob314 establish regression testing for memory, scrolling, shell execution, and non-English language performance. Infrastructure investment signals scale concerns.

3. **AST-Aware Tooling** — #22745/#22746 explore semantic code navigation to reduce token burn. Potentially competitive with cursor-style codebase understanding.

4. **Policy/Mode Clarity** — #23582 and #24769 highlight friction between approval modes and agent behavior. Users need consistent constraints across parent/child agents.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Memory leaks in long sessions** | #24863, #21006, #22614, PR #24862, #24870 | High—multiple fixes in flight |
| **Terminal rendering glitches** | #24202 (SSH), #24768 (scrollbars), #24470/#24438 (scroll momentum), #24857 (reverted narration fix) | High—UX degradation |
| **Workspace pollution** | #23571 (tmp scripts), #24349 (custom plans directory errors) | Medium—hygiene friction |
| **Authentication edge cases** | #24535 (resume failures), #24853 (OAuth URL truncation) | Medium—blocking workflows |
| **Scrolling performance at scale** | #24867, #24865, #24470 | Medium—1000+ message degradation |
| **SSH environment detection** | #24202, #24546 | Low-medium—needs diagnostic tooling |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-08

---

## 1. Today's Highlights

GitHub shipped two rapid-fire releases (v1.0.20 and v1.0.21) introducing **MCP server management** via `copilot mcp` and **production-grade observability** with OpenTelemetry support. The team also resolved a cluster of long-standing UX regressions including stuck spinners, flickering slash command pickers, and broken terminal copy-on-select behavior that had frustrated power users since v1.0.15.

---

## 2. Releases

### [v1.0.21](https://github.com/github/copilot-cli/releases/tag/v1.0.21) — 2026-04-07
| Category | Change |
|----------|--------|
| **Feature** | New `copilot mcp` command for managing Model Context Protocol servers |
| **Fix** | Spinner no longer appears stuck during long-running async shell commands |
| **Fix** | Enterprise GitHub URL input in login flow now accepts keyboard input and submits on Enter |
| **Fix** | Slash command picker flickering and layout shifts eliminated |

### [v1.0.20](https://github.com/github/copilot-cli/releases/tag/v1.0.20) — 2026-04-07
| Category | Change |
|----------|--------|
| **Feature** | `copilot help monitoring` topic with OpenTelemetry configuration details and examples |
| **Fix** | Spinner stays active until background agents and shell commands complete; user input remains available throughout |
| **Improvement** | Azure OpenAI BYOK defaults to GA versionless v1 route when no API version specified |

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters | Community Reaction |
|---|-------|--------|--------------|------------------|
| [#2494](https://github.com/github/copilot-cli/issues/2494) | `copilot login` auto-enters 'y/N' keychain prompt without waiting for user input | **OPEN** | Critical authentication regression breaking headless and interactive workflows alike; affects CI/CD and manual enterprise logins | 8 comments, no resolution yet |
| [#1748](https://github.com/github/copilot-cli/issues/1748) | Support MCP Sampling in Copilot CLI | **CLOSED** | Closes parity gap with Copilot Chat; enables advanced MCP servers using `ctx.sample_step` | 3 comments, 3 👍; resolved in v1.0.21 |
| [#2446](https://github.com/github/copilot-cli/issues/2446) | `/resume` doesn't show recent sessions due to missing git context in `workspace.yaml` | **CLOSED** | Session continuity broken for developers working across branches; root cause identified in `initializeWorkspace()` | 3 comments, 2 👍 |
| [#2344](https://github.com/github/copilot-cli/issues/2344) | Terminal copy-on-select broken by mouse reporting "feature" | **CLOSED** | Regressed standard terminal behavior for power users; forced workflow changes | 3 comments, 7 👍; high frustration signal |
| [#2471](https://github.com/github/copilot-cli/issues/2471) | OTel telemetry support for parity with Claude Code | **CLOSED** | Enterprise observability requirement; Claude Code competitive pressure | 2 comments; addressed in v1.0.20 |
| [#1444](https://github.com/github/copilot-cli/issues/1444) | Infinite loop on empty bash tool call (>5000 iterations) | **OPEN** | Reliability risk; agent can burn tokens and hang indefinitely on malformed tool calls | 2 comments; needs attention |
| [#2404](https://github.com/github/copilot-cli/issues/2404) | Plugin install ignores macOS system git credentials | **CLOSED** | Private Git host workflows broken; credential isolation bug | 2 comments, 1 👍 |
| [#2008](https://github.com/github/copilot-cli/issues/2008) | Auto-compact to prevent CAPIError 400 *before* error | **CLOSED** | Long-session reliability; proactive context management vs. reactive failure | 2 comments, 3 👍 |
| [#2564](https://github.com/github/copilot-cli/issues/2564) | Does `model:` in agent frontmatter control model selection? | **CLOSED** | Documentation/expectation gap; agent developers need deterministic model control | 2 comments; clarification provided |
| [#2557](https://github.com/github/copilot-cli/issues/2557) | Double-Escape cancellation hangs indefinitely on v1.0.19 | **CLOSED** | macOS-specific cancellation regression; required force-kill | 1 comment; fixed in subsequent release |

---

## 4. Key PR Progress

| # | PR | Description | Impact |
|---|-----|-------------|--------|
| [#2565](https://github.com/github/copilot-cli/pull/2565) | install: guard against duplicate PATH entries on reinstall | Prevents shell profile pollution when rerunning installer without restart | Developer experience, shell hygiene |
| [#2556](https://github.com/github/copilot-cli/pull/2556) | Developer skill | "Level up skills" — appears to be skill/curriculum content contribution | Community content expansion |

*Note: Only 2 PRs updated in the 24h window. Larger feature work likely in-flight on internal branches.*

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **MCP ecosystem expansion** | `copilot mcp` command shipped; MCP Sampling support closed; MCP registry policy checks added | ⬆️ High — core strategic direction |
| **Observability & telemetry** | OpenTelemetry support shipped; Claude Code parity explicitly requested and delivered | ⬆️ High — enterprise readiness |
| **Local/self-hosted AI models** | [#2531](https://github.com/github/copilot-cli/issues/2531) — Ollama, LM Studio, llama.cpp support | ➡️ Steady — privacy/cost-conscious users |
| **Persistent permissions** | [#2505](https://github.com/github/copilot-cli/issues/2505) — avoid `/allow-all` with granular, remembered grants | ➡️ Steady — security-conscious workflows |
| **Richer command discovery** | [#2489](https://github.com/github/copilot-cli/issues/2489) — descriptions, categories, search for slash commands | ➡️ Steady — onboarding/UX improvement |
| **User-scoped hooks** | [#2430](https://github.com/github/copilot-cli/issues/2430) — global hooks across repositories | ➡️ Steady — power user automation |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **Terminal input/rendering regressions** | Very High | High | [#2344](https://github.com/github/copilot-cli/issues/2344), [#2472](https://github.com/github/copilot-cli/issues/2472), [#2438](https://github.com/github/copilot-cli/issues/2438), [#2360](https://github.com/github/copilot-cli/issues/2360), [#2406](https://github.com/github/copilot-cli/issues/2406) — copy-on-select, Ctrl+D, typing latency, BOM in clipboard |
| **Cancellation hangs & stuck states** | High | High | [#2557](https://github.com/github/copilot-cli/issues/2557), [#2502](https://github.com/github/copilot-cli/issues/2502), [#1444](https://github.com/github/copilot-cli/issues/1444) — double-Escape, "Cancelling" indefinite, infinite loops |
| **Authentication & credential handling** | Medium-High | Critical | [#2494](https://github.com/github/copilot-cli/issues/2494), [#2404](https://github.com/github/copilot-cli/issues/2404), [#2437](https://github.com/github/copilot-cli/issues/2437) — keychain auto-input, SSO, plugin install credentials |
| **Session/context continuity** | Medium | Medium | [#2446](https://github.com/github/copilot-cli/issues/2446), [#2496](https://github.com/github/copilot-cli/issues/2496) — `/resume` visibility, corrupted context usage |
| **Enterprise integration gaps** | Medium | Medium | [#2471](https://github.com/github/copilot-cli/issues/2471), [#2480](https://github.com/github/copilot-cli/issues/2480) — OTel, MCP registry latency |

**Pattern:** Rapid feature velocity (MCP, telemetry) is introducing instability in core terminal interaction patterns. The team is responsive to regressions but the "whack-a-mole" cycle with input handling suggests need for deeper terminal integration testing.

---

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-08

---

## 1. Today's Highlights

The community is actively expanding Kimi Code CLI's extensibility through lifecycle hooks and plugin systems, while a controversial full-rewrite PR to Bun/TypeScript sparked significant discussion. Multiple critical bug fixes landed for MCP connection stability, file mention reliability, and hook payload integrity.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#1344](https://github.com/MoonshotAI/kimi-cli/issues/1344) | API Error 400: Invalid request Error | Persistent API failure affecting multiple users across versions; 21 comments indicate widespread impact with unclear root cause | Active troubleshooting, cross-version reports |
| [#778](https://github.com/MoonshotAI/kimi-cli/issues/778) | Duplicate API Error 400 | Similar symptoms to #1344 but on Claude model via Windows; suggests platform-agnostic API validation issue | 10 comments, awaiting resolution |
| [#1375](https://github.com/MoonshotAI/kimi-cli/issues/1375) | File mentions (@) can't find files | **Closed** — Critical UX regression in v1.18.0 where @-mentions failed to resolve files; fix deployed via git-ls-files optimization | Resolved with community validation |
| [#1779](https://github.com/MoonshotAI/kimi-cli/issues/1779) | UserPromptSubmit hook sends empty prompt field | Breaks external integrations relying on hook payloads; immediate PR fix submitted same day | Rapid response: fix PR [#1781](https://github.com/MoonshotAI/kimi-cli/pull/1781) opened |
| [#1774](https://github.com/MoonshotAI/kimi-cli/issues/1774) | @mention file path error in home directory | Edge case where ~ path expansion fails for file mentions; affects macOS users specifically | New report, awaiting triage |
| [#1775](https://github.com/MoonshotAI/kimi-cli/issues/1775) | LLM provider connection error | Generic connection failures on Windows 11 with K2.5 model; network vs. config ambiguity | Early report, needs reproduction |
| [#1785](https://github.com/MoonshotAI/kimi-cli/issues/1785) | Streamable HTTP MCP: Field name duplicated | Structured content parsing failure in MCP protocol; blocks MCP server integration | Fresh report, no response yet |
| [#1773](https://github.com/MoonshotAI/kimi-cli/issues/1773) | Error 400: 'function name is invalid' | **Closed** — LLM returning invalid function names causing hard failures; quick fix deployed | Same-day resolution |
| [#1747](https://github.com/MoonshotAI/kimi-cli/issues/1747) | Three-tier Rules System for Development Guidelines | Feature parity request matching Claude Code's rules hierarchy; structured governance for AI coding | 2 comments, PR [#1777](https://github.com/MoonshotAI/kimi-cli/pull/1777) now open |
| [#1783](https://github.com/MoonshotAI/kimi-cli/issues/1783) | Add /delete command to remove sessions | Manual session cleanup is friction point; affects privacy and disk management | New request, well-scoped |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#1707](https://github.com/MoonshotAI/kimi-cli/pull/1707) | **Rewrite: Python → Bun + TypeScript + React Ink** | Complete 32k-line rewrite with 166 TS files, 37 tests, 211 fixtures; claims Python was "complete failure" | 🔥 **Highly controversial** — open, undefined comments |
| [#1784](https://github.com/MoonshotAI/kimi-cli/pull/1784) | AWS Bedrock Mantle platform support | Adds enterprise-grade auth flow for AWS-hosted models; expands deployment options | Open, fresh submission |
| [#1781](https://github.com/MoonshotAI/kimi-cli/pull/1781) | Fix: Extract text from ContentPart for UserPromptSubmit hook | Resolves [#1779](https://github.com/MoonshotAI/kimi-cli/issues/1779) — corrects empty prompt payload when UI passes structured content | Open, same-day fix |
| [#1780](https://github.com/MoonshotAI/kimi-cli/pull/1780) | Graceful MCP connection failure handling | Prevents worker crashes when MCP servers fail to connect; fixes stuck "thinking" states | Open, addresses [#1766](https://github.com/MoonshotAI/kimi-cli/issues/1766) |
| [#1715](https://github.com/MoonshotAI/kimi-cli/pull/1715) | Claude-compatible local plugin support | Enables discovery and execution of local Claude plugins via `--plugin-dir`; ecosystem bridge strategy | Open, draft status |
| [#1622](https://github.com/MoonshotAI/kimi-cli/pull/1622) | Graceful exit when CWD removed during session | Fixes infinite error cascade when working directory disappears (external drive unplug, etc.) | Open, long-running |
| [#1751](https://github.com/MoonshotAI/kimi-cli/pull/1751) | PermissionRequest hook for external approval | New hook type pausing execution for external workflows (notifications, webhooks, remote approval) | Open, enterprise-oriented |
| [#1777](https://github.com/MoonshotAI/kimi-cli/pull/1777) | Three-tier Rules System implementation | Implements global/user/project-level rules matching Claude Code; closes [#1747](https://github.com/MoonshotAI/kimi-cli/issues/1747) | Open, feature-complete |
| [#1588](https://github.com/MoonshotAI/kimi-cli/pull/1588) | **Closed** — git ls-files for @ mentions in large repos | Fixed [#1375](https://github.com/MoonshotAI/kimi-cli/issues/1375) by replacing os.walk() with git-ls-files; handles 65k+ file repos | ✅ Merged |
| [#1743](https://github.com/MoonshotAI/kimi-cli/pull/1743) | **Closed** — /btw side question command | Major UX feature: lightweight parallel queries without disrupting main agent context; dual-layer rendering | ✅ Merged |

---

## 5. Feature Request Trends

| Trend | Evidence | Direction |
|-------|----------|-----------|
| **Lifecycle Hooks & Observability** | [#1772](https://github.com/MoonshotAI/kimi-cli/issues/1772), [#1751](https://github.com/MoonshotAI/kimi-cli/pull/1751), [#1779](https://github.com/MoonshotAI/kimi-cli/issues/1779) | External integration ecosystem (vibe-islands, monitoring, approval workflows) |
| **Session Management** | [#1783](https://github.com/MoonshotAI/kimi-cli/issues/1783), [#1782](https://github.com/MoonshotAI/kimi-cli/issues/1782) | Persistent memory branches, manual cleanup tools, work state restoration |
| **Rules/Guidelines Hierarchy** | [#1747](https://github.com/MoonshotAI/kimi-cli/issues/1747), [#1777](https://github.com/MoonshotAI/kimi-cli/pull/1777) | Structured AI behavior governance at multiple scopes |
| **Multi-Platform Auth** | [#1784](https://github.com/MoonshotAI/kimi-cli/pull/1784) | Enterprise deployment flexibility (AWS, etc.) |
| **Plugin Ecosystem Compatibility** | [#1715](https://github.com/MoonshotAI/kimi-cli/pull/1715) | Leveraging existing Claude plugin infrastructure |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **API Error 400 (Invalid Request)** | 🔴 High — [#1344](https://github.com/MoonshotAI/kimi-cli/issues/1344), [#778](https://github.com/MoonshotAI/kimi-cli/issues/778) | Blocking usage, unclear resolution path, spans multiple versions |
| **MCP Connection Stability** | 🟡 Medium — [#1785](https://github.com/MoonshotAI/kimi-cli/issues/1785), [#1780](https://github.com/MoonshotAI/kimi-cli/pull/1780), [#1766](https://github.com/MoonshotAI/kimi-cli/issues/1766) | Crashes, parsing failures, stuck states |
| **File Mention Reliability** | 🟡 Medium — [#1375](https://github.com/MoonshotAI/kimi-cli/issues/1375) (fixed), [#1774](https://github.com/MoonshotAI/kimi-cli/issues/1774) | Core UX feature intermittently broken |
| **Hook Payload Integrity** | 🟢 Low but critical — [#1779](https://github.com/MoonshotAI/kimi-cli/issues/1779) | Silent data loss for integrations |
| **Session Lifecycle Management** | 🟡 Growing — [#1783](https://github.com/MoonshotAI/kimi-cli/issues/1783), [#1782](https://github.com/MoonshotAI/kimi-cli/issues/1782) | Manual workarounds required for cleanup and persistence |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity on 2026-04-07.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-08

---

## 1. Today's Highlights

The OpenCode community is actively refining multi-agent orchestration and provider integrations, with significant discussion around Alibaba/DashScope rate limiting following Qwen 3.6 Plus (free) availability. The TUI experience remains a focal point, spanning mouse capture conflicts with terminal multiplexers, paste behavior transparency, and session management UX friction. Meanwhile, voice mode and MCP resource subscriptions are advancing through the PR pipeline, signaling broader modality support.

---

## 2. Releases

No releases in the last 24 hours.

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#21164](https://github.com/anomalyco/opencode/issues/21164) **Qwen 3.6 Plus rate limiting** — Alibaba's "request rate increased too quickly" errors causing work cancellation | Critical for users leveraging the new free tier; exposes lack of client-side rate limiting | 29 comments, 9 👍; users seeking configurable backoff strategies |
| [#8140](https://github.com/anomalyco/opencode/issues/8140) **Configurable context limits and auto-compaction** | Cost optimization blocker; current hardcoded thresholds force unnecessary token spend | 18 comments, 35 👍; long-standing request with strong demand |
| [#12472](https://github.com/anomalyco/opencode/issues/12472) **Native Claude Code hooks compatibility** | Gap in Claude Code parity — missing `PreToolUse`/`PostToolUse`/`Stop` hooks limits migration paths | 12 comments, 13 👍; power users need programmatic intervention points |
| [#17505](https://github.com/anomalyco/opencode/issues/17505) **ACP `session/update` timing bug** | Protocol correctness issue breaking Fabriqa integration; race condition between notification and `end_turn` | 10 comments, 4 👍; affects enterprise ACP consumers |
| [#7926](https://github.com/anomalyco/opencode/issues/7926) **Disable mouse capture in TUI** | Terminal multiplexer (Zellij/tmux) workflow friction; blocks native copy/paste | 8 comments, 15 👍; accessibility and power-user priority |
| [#21034](https://github.com/anomalyco/opencode/issues/21034) **Gemma-4 tool loop failures** | Local model reliability gap despite upstream tokenizer fixes; blocks Gemma adoption | 7 comments, 9 👍; LM Studio users affected |
| [#6506](https://github.com/anomalyco/opencode/issues/6506) **Restore List tool to reduce grep/find abuse** | Model behavior issue — LLMs over-relying on bash tools instead of structured file operations | 5 comments, 6 👍; recurring with glm-4.7 and similar models |
| [#21372](https://github.com/anomalyco/opencode/issues/21372) **Session file change summary not isolated** | Multi-session workflow bug causing cross-contamination of file change tracking | 2 comments; data integrity concern for parallel agent usage |
| [#21391](https://github.com/anomalyco/opencode/issues/21391) **Desktop app UX criticism** | Emotional but valid feedback on session creation/switching friction; "worst UX" rhetoric signals churn risk | 2 comments; needs product attention |
| [#21375](https://github.com/anomalyco/opencode/issues/21375) **`opencode serve` epoll hang** | Production stability issue — server becomes unresponsive without crashing | 2 comments; operational concern for self-hosted deployments |

---

## 4. Key PR Progress

| PR | Feature/Fix | Significance |
|----|-------------|------------|
| [#21377](https://github.com/anomalyco/opencode/pull/21377) **docs: opencode-claude-commands ecosystem** | Documents community plugin for `.claude` directory command/skill support | Ecosystem growth; bridges Claude Code compatibility gap |
| [#21399](https://github.com/anomalyco/opencode/pull/21399) **Context usage + New Session tools** | Manual session lifecycle management bypassing auto-compaction | Power-user workflow; addresses #8140 pain point indirectly |
| [#20677](https://github.com/anomalyco/opencode/pull/20677) **Voice mode (STT/TTS/VAD/barge-in)** | Full multimodal input/output with continuous listening | Major feature expansion; fixes #18226 |
| [#20676](https://github.com/anomalyco/opencode/pull/20676) **Web performance + config-driven UI mode** | `webMode`/`webUrl` config, CDN support, rendering optimizations | Scalability and deployment flexibility; fixes #4786 |
| [#20672](https://github.com/anomalyco/opencode/pull/20672) **MCP resource subscription support** | Real-time resource updates via MCP protocol | Agent context freshness; fixes #12092 |
| [#20671](https://github.com/anomalyco/opencode/pull/20671) **GitHub ref plugins + model limit overrides** | `github:owner/repo#ref` plugin installs, per-model context limit config | Plugin ecosystem flexibility; fixes #12143 |
| [#20491](https://github.com/anomalyco/opencode/pull/20491) **Kiro (AWS CodeWhisperer) provider** | AWS-native model support via Event Stream binary protocol | Enterprise AWS integration; closes #9165 |
| [#20309](https://github.com/anomalyco/opencode/pull/20309) **Experimental next-prompt suggestion** | Ephemeral post-response suggestions, Right Arrow acceptance | UX enhancement for conversation flow |
| [#20939](https://github.com/anomalyco/opencode/pull/20939) **Plugin-modified config for skills.paths** | Fixes skill discovery when plugins register directories | Bug fix for plugin ecosystem reliability |
| [#21339](https://github.com/anomalyco/opencode/pull/21339) **Simplify console org display** | Reduces provider/org label redundancy in TUI | Polish; addresses visual clutter feedback |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Multi-agent orchestration** | #20368 (coordinator shell + fork), #19215 (DB-backed agent teams), #6506 (List tool for agent coordination) | Community pushing beyond single-session limits toward distributed agent systems |
| **Claude Code parity** | #12472 (hooks), #21377 (ecosystem docs), existing `CLAUDE.md`/`~/.claude/skills/` support | Migration path completeness is strategic priority |
| **Provider resilience** | #21164/#21140 (Alibaba rate limits), #21034 (Gemma reliability), #21354 (Ollama native integration) | Diversification beyond OpenAI/Anthropic requiring robust error handling |
| **TUI/UX refinements** | #7926 (mouse capture), #21315 (paste transparency), #21391 (desktop session UX), #7755 (shell tab completion) | Terminal-native experience quality is competitive differentiator |
| **Context lifecycle control** | #8140 (configurable limits), #21399 (manual tools), #21388 (mid-turn interruption) | Users rejecting opaque auto-management in favor of explicit control |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Manifestations |
|------------|-----------|----------------|
| **Rate limiting without retry** | High | #21164, #21140 — Alibaba/DashScope failures are immediate; no exponential backoff |
| **Opaque context management** | High | #8140, #21399, #11995 — auto-compaction timing, token bloat from tool descriptions, lack of visibility |
| **TUI/terminal integration friction** | High | #7926, #21315, #21397, #7755 — mouse capture, paste behavior, transparency, shell completion all break expected terminal conventions |
| **Multi-session isolation failures** | Medium | #21372, #21364 — file changes and agent selectors bleeding across sessions |
| **Local model reliability gaps** | Medium | #21034, #21354, #21214 — Gemma, Ollama, vLLM integration issues despite "support" |
| **Web/Desktop UX inconsistency** | Medium | #21391, #19920 — authentication loops, session management friction, hidden controls |
| **Plugin ecosystem fragility** | Medium | #20939, #19497, #21369 — config propagation, dist-tag resolution, fork divergence |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-08

## 1. Today's Highlights

The Pi team shipped critical fixes for overlapping compaction race conditions and expanded OpenRouter routing capabilities, while community activity surged around provider extensibility—particularly custom AI gateway integrations and native document input support. A breaking change with Antigravity model deprecation (#2815) remains unresolved, prompting urgent PRs to update User-Agent headers.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#2815](https://github.com/badlogic/pi-mono/issues/2815) — Antigravity version no longer supported | **Breaking**: Pi's Google Gemini/Antigravity integration is completely non-functional; blocks all users on this provider | 5 comments, urgent; PR #2901 submitted but still open |
| [#2923](https://github.com/badlogic/pi-mono/issues/2923) — Native PDF/document input type | Enables multimodal workflows across Anthropic, OpenAI, and Google providers without manual base64 encoding | Closed same day with implementation |
| [#2886](https://github.com/badlogic/pi-mono/issues/2886) — Jiti alias table missing provider subpaths | Extension authors cannot import `@mariozechner/pi-ai/anthropic` directly; breaks modular provider development | Fixed rapidly; shows active extension ecosystem growth |
| [#2909](https://github.com/badlogic/pi-mono/issues/2909) — Find/grep tools referenced but not enabled | UX inconsistency: default prompts mention unavailable tools, confusing new users | Closed with fix expected |
| [#2880](https://github.com/badlogic/pi-mono/issues/2880) — Bedrock auth fails on EC2 with IMDS | Enterprise AWS deployments blocked; forces API key workarounds against security best practices | Closed; OpenClaw/Clanker deployment pattern affected |
| [#2882](https://github.com/badlogic/pi-mono/issues/2882) — Tool JSON parse errors halt sessions silently | Edit tool fails on JSX/TypeScript with quotes; model never learns of failure | In progress; critical for code-editing reliability |
| [#2927](https://github.com/badlogic/pi-mono/issues/2927) — Multiple custom providers with same API overwrite | Registry collision prevents using multiple OpenAI-compatible endpoints simultaneously | Closed; affects OpenRouter + local LLM setups |
| [#2925](https://github.com/badlogic/pi-mono/issues/2925) — Bedrock adaptive thinking broken with inference profiles | AWS enterprise feature (application inference profiles) incompatible with Pi's capability detection | Closed; enterprise AWS adoption friction |
| [#2924](https://github.com/badlogic/pi-mono/issues/2924) — Add window_focus/blur extension events | Enables context-aware extensions (pause expensive ops on focus loss) | Closed; small but polished DX improvement |
| [#2920](https://github.com/badlogic/pi-mono/issues/2920) — Filter Copilot models via single API call | Reduces login latency from N requests to 1; prepares for dynamic model discovery | Closed with PR #2890 |

---

## 4. Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| [#2910](https://github.com/badlogic/pi-mono/pull/2910) | **Fix overlapping compaction race** — Eliminates `Cannot read properties of undefined (reading 'signal')` by binding abort controllers to compaction runs rather than mutable session fields | Closed |
| [#2904](https://github.com/badlogic/pi-mono/pull/2904) | **Complete OpenRouter routing fields** — Adds full TypeScript coverage for all 10+ provider routing options (quantization, data collection, etc.) previously working only at runtime | Open |
| [#2901](https://github.com/badlogic/pi-mono/pull/2901) | **Bump Antigravity User-Agent** — Emergency fix for #2815 deprecation; updates `google-gemini-cli` provider version string | Open |
| [#2903](https://github.com/badlogic/pi-mono/pull/2903) | **Gemma 4 thinking levels** — Handles `MINIMAL`/`HIGH` reasoning modes; routing ambiguity for `low` remains | Open |
| [#2890](https://github.com/badlogic/pi-mono/pull/2890) | **Dynamic GitHub Copilot model discovery** — Replaces static model list with live API fetch; enables immediate access to new Copilot models | Closed |
| [#2913](https://github.com/badlogic/pi-mono/pull/2913) | **Tolerant external skill loading** — Prevents malformed YAML frontmatter from dropping entire skill directories | Closed |
| [#2895](https://github.com/badlogic/pi-mono/pull/2895) | **Fix Anthropic partialParse throw** — Switches from `messages.stream()` to `messages.create()` to avoid uncaught JSON parsing crashes in SDK vendor code | Closed |
| [#2889](https://github.com/badlogic/pi-mono/pull/2889) | **Sanitize schemas for Cloud Code Assist** — Strips `anyOf`/`const` for OpenAPI 3.0.3 compatibility with Google's Antigravity gateway | Closed |
| [#2915](https://github.com/badlogic/pi-mono/pull/2915) | **Correct sandbox config path** — Documentation fix: `~/.pi/agent/sandbox.json` → `~/.pi/agent/extensions/sandbox.json` | Closed |
| [#2135](https://github.com/badlogic/pi-mono/pull/2135) | **Raise Anthropic context to 1M tokens** — Updates SOTA model definitions for Claude's expanded context window | Closed |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Custom provider gateway proliferation** | #2898, #2914 (Opper AI), #2927, #2886 | Pi becoming integration hub; need standardized provider SDK patterns |
| **Native multimodal input** | #2923 (documents), implied vision expansion | Shift from text-only to file-native workflows |
| **Declarative/team reproducibility** | #2908 (CREAM/"Nix-like" workspaces) | Enterprise adoption driving infrastructure-as-code for agent environments |
| **Dynamic model discovery** | #2920, #2890, #2922 (capabilities query) | Static model lists unsustainable; runtime introspection required |
| **Extension lifecycle events** | #2924 (focus/blur), #2919 (pinet persistence) | Extensions maturing toward full application framework |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Manifestations |
|------------|-----------|----------------|
| **Provider authentication edge cases** | High | IMDS (#2880), inference profiles (#2925), custom provider collisions (#2927) — AWS and multi-provider setups particularly fragile |
| **JSON/tool schema compatibility** | High | #2882 (parse errors), #2889 (OpenAPI 3.0.3 sanitization), #2917 (empty call_id) — schema handling across providers inconsistent |
| **Extension loading/debugging** | Medium | #2886 (jiti aliases), #2875 (workspace src aliases), #2913 (malformed skills) — module resolution fragile in source/dev modes |
| **Documentation accuracy** | Medium | #2916, #2915 (wrong paths), #2909 (misleading default prompts) — config drift between code and docs |
| **Compaction/session stability** | Medium | #2911, #2910 (race conditions), #2919 (pinet reconnect) — long-running sessions need reliability investment |

---

*Digest compiled from [badlogic/pi-mono](https://github.com/badlogic/pi-mono) activity 2026-04-07 to 2026-04-08.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-08

---

## 1. Today's Highlights

Qwen Code shipped **v0.14.1** with critical hook system fixes, while the VS Code extension received an emergency **v0.14.2** patch to resolve blank-screen failures affecting all 0.14.1 users. The community is actively stress-testing the new release, surfacing UI stability issues and context-management pain points that suggest the project is hitting mainstream adoption friction.

---

## 2. Releases

| Version | Date | Summary |
|---------|------|---------|
| **[v0.14.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.1)** | 2026-04-07 | Fixes abort listener memory leak in hooks ([`#2841`](https://github.com/QwenLM/qwen-code/pull/2841)) and ensures pending AI responses commit before hook system messages ([`#2848`](https://github.com/QwenLM/qwen-code/pull/2848)). |
| **[v0.14.2](https://github.com/QwenLM/qwen-code/pull/2959)** | 2026-04-07 | Emergency VS Code extension fix: resolves blank panel caused by esbuild bundling Node.js modules into webview ([`#2959`](https://github.com/QwenLM/qwen-code/pull/2959)). |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| **[#2956](https://github.com/QwenLM/qwen-code/issues/2956)** | VS Code 0.14.1 blank screen | **P0 regression** — extension completely non-functional; 8 comments, 2 upvotes; fixed in 0.14.2 | Users rapidly confirmed fix; demonstrates release QA gap |
| **[#1922](https://github.com/QwenLM/qwen-code/issues/1922)** | Edit tool fails to modify files | **Recurring regression** — fixed in earlier version, resurfaced in 0.10.5; 11 comments | Frustration over stability; edit reliability is core competency |
| **[#2605](https://github.com/QwenLM/qwen-code/issues/2605)** | Image paste from clipboard (Windows) | UX friction for Windows CLI users; 10 comments | Active discussion on implementation approaches |
| **[#93](https://github.com/QwenLM/qwen-code/issues/93)** | AI unexpectedly deletes code | **Trust-destroying bug** — 2K lines reduced to 40; billing complaints attached; 6 comments | Emotional + financial impact; comparison to Cursor/Claude unfavorable |
| **[#2339](https://github.com/QwenLM/qwen-code/issues/2339)** | Telegram Bot Mode (`--telegram` flag) | Remote access use case; 3 comments, 2 upvotes | Niche but enthusiastic; infrastructure expansion signal |
| **[#2947](https://github.com/QwenLM/qwen-code/issues/2947)** | PDF read support missing | Multimodal gap — Qwen 3.6 can't ingest PDFs directly; 1 comment | Blocks documentation-heavy workflows |
| **[#2946](https://github.com/QwenLM/qwen-code/issues/2946)** | Excessive permission prompts | Workflow interruption during research; 1 comment | Compared unfavorably to Codex/Claude Code |
| **[#2903](https://github.com/QwenLM/qwen-code/issues/2903)** | JetBrains terminal flickering | IDE integration quality; 2 comments, 1 upvote | Professional developer environment friction |
| **[#2786](https://github.com/QwenLM/qwen-code/issues/2786)** | User interrupts ignored during chain-of-thought | **Control/responsiveness issue** — urgent corrections queued behind long reasoning; 1 comment, 1 upvote | Safety/correction latency concern |
| **[#2906](https://github.com/QwenLM/qwen-code/issues/2906)** | Permission fatigue (general) | "七八十来次" (7-10 times per conversation); 1 comment | Competitive disadvantage vs. peers |

---

## 4. Key PR Progress

| # | PR | Description | Impact |
|---|-----|-------------|--------|
| **[#2932](https://github.com/QwenLM/qwen-code/pull/2932)** | `/review` enhancement: deterministic analysis + autofix + security | 4-agent parallel architecture upgrade targeting Copilot/Claude Code parity | Code review as differentiated feature |
| **[#2921](https://github.com/QwenLM/qwen-code/pull/2921)** | `/plan` command for plan mode | Disk-based plan workflow with structured prompts; formalizes planning phase | Addresses "agent goes off rails" complaints |
| **[#2949](https://github.com/QwenLM/qwen-code/pull/2949)** | Skill-level model overrides via frontmatter | Skills can specify `model: qwen-coder-plus` for specific turns | Fine-grained cost/quality control |
| **[#2923](https://github.com/QwenLM/qwen-code/pull/2923)** | Customizable status line (`/statusline`) | User-defined shell commands in footer area | Power-user customization |
| **[#2898](https://github.com/QwenLM/qwen-code/pull/2898)** | Adaptive output token escalation (8K→64K) | Reduces GPU over-reservation from 32K fixed; 99% of responses <5K | **Infrastructure efficiency** — 4x concurrency improvement |
| **[#2904](https://github.com/QwenLM/qwen-code/pull/2904)** | Contextual tips system | Proactive warnings at 80%/95% context usage suggesting `/compress` | Onboarding + cost management |
| **[#2942](https://github.com/QwenLM/qwen-code/pull/2942)** | CJK word segmentation + Ctrl+arrow navigation | Proper CJK character handling in CLI input | Internationalization quality |
| **[#2915](https://github.com/QwenLM/qwen-code/pull/2915)** | Enhanced `/clear` with `--history` and `--all` | Granular session reset vs. Claude Code's "destroy everything" | User control refinement |
| **[#2954](https://github.com/QwenLM/qwen-code/pull/2954)** | Disable follow-up suggestions by default | Eliminates wasted API calls for users without fast model configured | **Cost reduction** for default experience |
| **[#2959](https://github.com/QwenLM/qwen-code/pull/2959)** | VS Code blank screen fix | esbuild `external` config fix for webview bundling | **Critical stability** |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Remote/headless deployment** | [#2339](https://github.com/QwenLM/qwen-code/issues/2339) (Telegram), [#71](https://github.com/QwenLM/qwen-code/issues/71) (saved provider configs) | Users want Qwen Code as service/infrastructure, not just local CLI |
| **Context management optimization** | [#94](https://github.com/QwenLM/qwen-code/issues/94) (file tree placement), [#113](https://github.com/QwenLM/qwen-code/issues/113) (auto-save chats), [#2767](https://github.com/QwenLM/qwen-code/issues/2767) (compact mode) | Token cost anxiety + workflow continuity demands |
| **Multimodal expansion** | [#2605](https://github.com/QwenLM/qwen-code/issues/2605) (clipboard images), [#2947](https://github.com/QwenLM/qwen-code/issues/2947) (PDF support) | Catching up to Claude/Cursor native capabilities |
| **Permission workflow refinement** | [#2946](https://github.com/QwenLM/qwen-code/issues/2946), [#2906](https://github.com/QwenLM/qwen-code/issues/2906) | "Ask less, do more" — trust calibration needed |
| **IDE integration depth** | [#2903](https://github.com/QwenLM/qwen-code/issues/2903) (JetBrains), [#2883](https://github.com/QwenLM/qwen-code/issues/2883) (VS Code scrolling), [#2956](https://github.com/QwenLM/qwen-code/issues/2956) | Platform-native quality bar rising |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **UI/Terminal instability** | High | High | [#2956](https://github.com/QwenLM/qwen-code/issues/2956) (blank screen), [#2903](https://github.com/QwenLM/qwen-code/issues/2903) (flickering), [#2924](https://github.com/QwenLM/qwen-code/issues/2924) (agent expand flicker), [#2972](https://github.com/QwenLM/qwen-code/issues/2972) (infinite scroll) |
| **Edit tool reliability** | Recurring | Critical | [#1922](https://github.com/QwenLM/qwen-code/issues/1922) (regression), [#1937](https://github.com/QwenLM/qwen-code/issues/1937) (massive token waste on failures), [#93](https://github.com/QwenLM/qwen-code/issues/93) (destructive edits) |
| **Permission fatigue** | High | Medium | [#2946](https://github.com/QwenLM/qwen-code/issues/2946), [#2906](https://github.com/QwenLM/qwen-code/issues/2906) — explicit comparison to Codex/Claude Code being "less annoying" |
| **Context/cost opacity** | Medium | Medium | [#94](https://github.com/QwenLM/qwen-code/issues/94) (file tree bloat), [#113](https://github.com/QwenLM/qwen-code/issues/113) (session persistence), billing shock in [#93](https://github.com/QwenLM/qwen-code/issues/93) |
| **Agent responsiveness** | Medium | Medium | [#2786](https://github.com/QwenLM/qwen-code/issues/2786) (interrupt latency), [#2867](https://github.com/QwenLM/qwen-code/issues/2867) (hallucination → wrong edits) |
| **Environment compatibility** | Low-Medium | Medium | [#2926](https://github.com/QwenLM/qwen-code/issues/2926) (CentOS 7 GLIBC), [#2882](https://github.com/QwenLM/qwen-code/issues/2882) (WeChat integration version) |

---

*Digest compiled from 50 active issues and 50 recent PRs. Data source: [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*