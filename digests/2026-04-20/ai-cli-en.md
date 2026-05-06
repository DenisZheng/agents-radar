# AI CLI Tools Community Digest 2026-04-20

> Generated: 2026-04-20 00:14 UTC | Tools covered: 8

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

# Cross-Tool AI CLI Ecosystem Report — 2026-04-20

## 1. Ecosystem Overview

The AI CLI tools landscape is maturing from "demo reliability" toward production-grade developer infrastructure, with all major tools grappling with enterprise requirements: session persistence, rate limit transparency, remote/SSH workflows, and MCP ecosystem stability. However, this maturation is uneven—while OpenAI Codex and Claude Code push autonomous agent capabilities (Goal Mode, Cowork VMs), foundational issues like authentication fragility, process leaks, and version stability dominate community sentiment. The field is simultaneously converging on shared architectural patterns (AST-aware tooling, hierarchical memory, configurable keymaps) and diverging in target deployment models (cloud-native vs. self-hosted, individual vs. enterprise).

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Releases (24h) | Release Cadence Signal |
|------|:--------------------:|:-----------------:|:--------------:|------------------------|
| **Claude Code** | 50 | 9 | 0 | Stable; no release but intense issue churn around billing/VMs |
| **OpenAI Codex** | 50 | 50 | 2 (alpha) | Rapid Rust CLI iteration; alpha.11→alpha.12 in 24h |
| **Gemini CLI** | 50 | 29 | 0 | Active development; quality community PRs landing |
| **GitHub Copilot CLI** | 36 | 0 | 0 | Resolution-light; internal stabilization focus post-v1.0.32 |
| **Kimi Code CLI** | ~8 | 4 | 0 | Moderate; focused subagent/MCP refinement |
| **OpenCode** | ~15 | 10 | 2 (patch) | Aggressive patch cadence; v1.14.17→v1.14.18 |
| **Pi** | ~12 | 10 | 0 | Steady; enterprise cloud-code fixes + local LLM expansion |
| **Qwen Code** | 10+ | 8 | 1 (nightly) | Nightly shipping; authentication crisis dominating attention |

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **Session lifecycle & memory persistence** | Claude Code, OpenAI Codex, Gemini CLI, Qwen Code, Pi | Unarchive/archival (Claude #30869), semantic memory (Gemini #22819), session rewind/restore (Qwen #3292), forking/duplication (Pi #3431), Goal Mode persistence (Codex #18073–18077) |
| **Remote/SSH-native development** | OpenAI Codex, Gemini CLI, Pi, Claude Code | Remote desktop parity (Codex #10450, 573👍), SSH hostname display (Gemini #25663), terminal corruption fixes (Gemini #24202, Pi #3424 device code flow), Cowork VM (Claude) |
| **Rate limit transparency & quota economics** | GitHub Copilot CLI, Claude Code, OpenAI Codex | Real-time dashboards (Copilot #2839, #2827), graceful degradation vs. hard lockout (Claude #50740), error burns quota (Codex #18194), billing UX edge cases (Claude) |
| **MCP ecosystem reliability** | OpenAI Codex, Kimi Code CLI, Pi, Claude Code | Process zombie leaks (Codex #12491, 1300+ processes), config propagation to subagents (Kimi #1942), schema sanitization for cloud proxies (Pi #3214), skill state corruption (Claude #50947) |
| **Configurable TUI/editor experience** | OpenAI Codex, Gemini CLI, Pi, OpenCode | Vim composer mode (Codex #18595), keymap customization (Codex #18593, #18594), custom themes (Claude #50950), mobile touch (OpenCode #18767), numpad/terminal fidelity (Pi #2070) |
| **AST-aware / bounded code intelligence** | Gemini CLI, Claude Code | Tree-sitter integration for token-efficient reads (Gemini #22745), reducing misaligned file operations |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Approach & Target User |
|-----------|---------|------------------------|
| **Autonomous agent orchestration** | OpenAI Codex, Claude Code | Codex: "Goal Mode" with budgeted autonomous continuation; Claude: Cowork VMs with sandboxed execution. Both target **power users and enterprise teams** willing to trade control for throughput. |
| **Self-hosted / local-first deployment** | Pi, OpenCode, Gemini CLI | Pi: explicit local LLM provider extension (#3357, Julien Chaumond); OpenCode: Ollama/LM Studio native; Gemini: open-source with extension ecosystem. Target **privacy-sensitive and cost-conscious developers**. |
| **IDE integration depth** | Qwen Code, GitHub Copilot CLI | Qwen: VSCode Companion parity as 0.15.0 milestone; Copilot: native GitHub ecosystem tie-in. Target **IDE-bound developers** vs. terminal-native users. |
| **Enterprise auth & compliance** | Pi, Claude Code, Qwen Code | Pi: GovCloud Bedrock, device code OAuth, air-gapped callbacks; Claude: enterprise policy enforcement (with edge cases); Qwen: Coding Plan migration from OAuth. Target **regulated/enterprise environments**. |
| **Open-source community governance** | Gemini CLI, OpenCode, Pi | Gemini: Google-maintained, structured P1/P2 triage; OpenCode: chaotic aggressive releases with community confusion (#23419); Pi: single-maintainer (badlogic) with responsive merging but bus factor risk. |

**Key technical divergence:** OpenAI Codex and Claude Code are **betting on managed cloud autonomy** (VMs, goals, sandboxed execution), while Gemini CLI, Pi, and OpenCode are **investing in user-controlled, local-first extensibility** (AST tooling, plugin APIs, local model discovery). Qwen Code occupies a middle path with strong IDE integration but struggling cloud auth reliability.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **🔥 Highest momentum** | OpenAI Codex, Gemini CLI | Codex: 50 PRs in 24h, major feature stack landing (Goal Mode, Vim mode, keymaps); Gemini: 29 quality PRs with maintainer triage, AST architecture exploration |
| **⚡ Active but stressed** | Claude Code, OpenCode, Qwen Code | Claude: 50 issues, heated billing/VM regressions, spam PR cluster suggests moderation gaps; OpenCode: frequent patches but version confusion and config loss eroding trust; Qwen: nightly shipping but authentication crisis overshadowing progress |
| **🔄 Stabilization mode** | GitHub Copilot CLI, Kimi Code CLI, Pi | Copilot: zero PR activity, reporting-heavy; Kimi: focused subagent fixes, narrow scope; Pi: steady enterprise fixes, smaller but engaged community |

**Maturity signals:**
- **Most production-ready for terminal-native developers:** Gemini CLI (reliability focus, SSH polish) and Pi (session ergonomics, enterprise auth)
- **Highest ceiling but highest risk:** OpenAI Codex (ambitious autonomy features, MCP leaks unresolved) and Claude Code (Cowork VMs innovative but Windows broken, billing edge cases critical)
- **Fastest trust erosion:** OpenCode (version jumps, config loss) and Qwen Code (401 crisis, free tier policy uncertainty)

---

## 6. Trend Signals

| Trend | Evidence | Implication for Developers |
|-------|----------|---------------------------|
| **Agent autonomy → accountability tension** | Codex Goal Mode budgets, Claude Cowork VMs, Qwen agent interruptibility (#2786), Gemini destructive behavior guards (#22672) | Developers demand **observability and interruptibility** in autonomous systems; "set and forget" is insufficient. Implement kill switches, progress streaming, and explicit success criteria. |
| **MCP as critical infrastructure / critical liability** | Codex 1300+ zombie processes, Kimi config propagation fixes, Pi schema sanitization, Claude skill corruption | MCP is **non-negotiable for ecosystem extensibility** but process lifecycle, schema portability, and security boundaries are immature. Treat MCP server isolation as production-critical. |
| **Context management as core competency** | Claude 20min+ Opus latency, Qwen auto-compression failures, Codex compact stream disconnects, Gemini AST-aware reads | **Token-efficient context handling** differentiates tools at scale. Prefer AST-aware or semantic compression over naive truncation; monitor first-party vs. third-party model token counting accuracy. |
| **Rate limits as UX, not just infrastructure** | Copilot 6 distinct quota issues, Claude hard lockout, Codex quota burn on errors | Quota transparency is **user trust infrastructure**, not billing backend. Implement client-side prediction, graceful degradation, and consistent cross-surface reporting. |
| **Terminal as durable workspace, not chat** | Pi session forking, Codex Goal persistence, Claude unarchive demand, Gemini `/restart` with resume | Users expect **session durability comparable to IDEs or tmux**. Design for hours-long dwell time, crash recovery, and cross-device continuity. |
| **Authentication as adoption gate** | Qwen 401 crisis, Copilot enterprise auth regressions, Pi OAuth friction, Claude phone verification bug | **Auth reliability is onboarding**; token lifecycle desync, policy enforcement edge cases, and migration paths between auth systems are make-or-break for growth. |

---

*Report compiled from 2026-04-20 community digests across 8 active AI CLI tools. For real-time tracking, monitor authentication crisis resolution in Qwen Code, MCP leak fixes in OpenAI Codex, and version stability commitments in OpenCode.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-04-20 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Discussion Focus |
|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Solves universal AI document generation flaw—orphan words, widow headers, numbering misalignment. High resonance because it affects *every* document Claude produces. |
| 2 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills for evaluating other skills across 5 quality dimensions. Positions Claude as self-correcting infrastructure. |
| 3 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Clarity overhaul ensuring instructions are executable in single conversation. Addresses core UX pain: vague skill prompts. |
| 4 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Open-source document standard support—creation, template filling, ODT→HTML parsing. Enterprise/LibreOffice demand driver. |
| 5 | **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | 🟡 Open | Critical bugfix: `w:id` collision corrupts documents with existing bookmarks. Deep OOXML expertise on display. |
| 6 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Full testing stack skill—Testing Trophy, AAA pattern, React Testing Library, MSW. Fills major gap in code quality skills. |
| 7 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | Enterprise SAP integration—Apache 2.0 tabular foundation model for predictive analytics. Niche but high-value vertical. |
| 8 | **Sensory (macOS Automation)** | [#806](https://github.com/anthropics/skills/pull/806) | 🟡 Open | Native AppleScript automation replacing screenshot-based computer use. Two-tier permission system for security-conscious deployment. |

---

## 2. Community Demand Trends

Derived from top Issues by engagement:

| Trend | Evidence | Demand Signal |
|:---|:---|:---|
| **Org-wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (9 comments, 5 👍) | Enterprise teams need shared skill libraries, not file-sharing workarounds |
| **Skill Reliability & Triggering** | [#556](https://github.com/anthropics/skills/issues/556) (6 comments, 6 👍) | `claude -p` 0% skill trigger rate—core infrastructure broken for eval workflows |
| **Trust & Security Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (4 comments, 2 👍) | `anthropic/` namespace impersonation risk in community skills |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) | Skills-as-MCPs for standardized API exposure |
| **Bedrock/Enterprise Deployment** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments) | AWS ecosystem integration gap |
| **Persistent Context/Memory** | [#154](https://github.com/anthropics/skills/pull/154), [#521](https://github.com/anthropics/skills/pull/521) | Cross-session knowledge retention is recurring PR theme |

**Emerging pattern**: Community is shifting from *skill quantity* to *skill reliability, governance, and enterprise operability*.

---

## 3. High-Potential Pending Skills

Active PRs with strong technical merit, likely to merge pending review:

| Skill | PR | Why It Lands Soon |
|:---|:---|:---|
| **Record-Knowledge** | [#521](https://github.com/anthropics/skills/pull/521) | Solves #1 user pain: Claude Code's session amnesia. Tagged Markdown persistence in `.claude/knowledge/`. Simple, universal, immediately useful. |
| **Codebase Inventory Audit** | [#147](https://github.com/anthropics/skills/pull/147) | 10-step workflow for orphaned code, unused files, doc gaps. Engineering hygiene at scale. |
| **Masonry Image/Video Generation** | [#335](https://github.com/anthropics/skills/pull/335) | Imagen 3.0 + Veo 3.1 CLI wrapper. Media generation is high-frequency use case. |
| **x402 BSV Micropayments** | [#374](https://github.com/anthropics/skills/pull/374) | BSV blockchain auth + payment for AI services. Novel economic primitive for agent-to-agent transactions. |
| **Shodh-Memory** | [#154](https://github.com/anthropics/skills/pull/154) | Persistent memory with proactive context surfacing. Competes with [#521](https://github.com/anthropics/skills/pull/521); may merge as complementary. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *enterprise-grade reliability infrastructure*—skills that govern, share, persist, and validate other skills, reflecting a maturation from individual productivity hacks to organizational AI systems.**

---

---

# Claude Code Community Digest — 2026-04-20

---

## 1. Today's Highlights

No new releases shipped in the last 24h, but community activity remains intense with **50 issues updated** and significant churn around **Cowork VM stability**, **billing/limit enforcement edge cases**, and **skill system reliability**. A single phone verification issue continues to dominate engagement with 711 comments, while new regressions in long-context performance and session compaction surfaced.

---

## 2. Releases

*No releases in the last 24h.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#34229](https://github.com/anthropics/claude-code/issues/34229) | **Phone verification bug** — Users blocked from account access due to verification loop | Critical onboarding blocker affecting paid users; 785 upvotes indicate mass impact | Extremely heated (711 comments); users reporting workarounds failing |
| [#36503](https://github.com/anthropics/claude-code/issues/36503) | **Channels plugin false-negative** — "Channels not available" warning despite functional polling | Breaks trust in plugin status indicators; inbound notifications silently dropped | 41 comments, frustrated power users relying on Telegram/Slack integrations |
| [#43052](https://github.com/anthropics/claude-code/issues/43052) | **Alleged Opus 4.6/4.7 "sabotage"** — Accusations of intentional token waste | Reflects broader sentiment crisis around model quality vs. API costs; likely invalid but symptomatic | Polarized (36 comments, only 3 upvotes); mostly dismissed as rant |
| [#30869](https://github.com/anthropics/claude-code/issues/30869) | **Unarchive sessions in desktop app** | Core UX gap — archived sessions inaccessible without CLI workarounds | Strong demand (41 upvotes, 19 comments); productivity workflow blocker |
| [#47731](https://github.com/anthropics/claude-code/issues/47731) | **20min+ turn latency on Opus 4.6 (1M context)** | Severe performance regression making tool unusable for long-context workflows | Alarming for enterprise users; limited engagement suggests under-reporting |
| [#50947](https://github.com/anthropics/claude-code/issues/50947) | **Stale skill ARGUMENTS replayed after compaction** | Session compaction corrupts skill state — security/reliability risk | Niche but critical for skill developers; 2 comments, needs attention |
| [#50168](https://github.com/anthropics/claude-code/issues/50168) | **Cowork folder add fails on Windows** — "Session VM process not available" | Cowork core functionality broken on Windows; regression tag | Blocking Windows adoption; 4 comments, reproducible |
| [#50740](https://github.com/anthropics/claude-code/issues/50740) | **Hard lockout at design token limits** | Graceful degradation failure — app becomes entirely unusable instead of throttled | 3 comments, suggests broader limit-handling architecture issue |
| [#49219](https://github.com/anthropics/claude-code/issues/49219) | **`/model claude-opus-4-7` fails with thinking config error** | Model switching broken for latest flagship; API schema mismatch | 8 upvotes, quickly closed — fix likely shipped but visibility poor |
| [#21706](https://github.com/anthropics/claude-code/issues/21706) | **"All domains" egress setting invalid pattern error** | Network security feature broken on macOS desktop; wildcard `*` rejected | Long-standing (Jan), 12 upvotes; enterprise network config blocker |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#39043](https://github.com/anthropics/claude-code/pull/39043) | **Remove "retro-futuristic" from Frontend Design Skill** | Community-driven skill tuning; Theo (t3dotgg) vetoing dated aesthetic guidance | Open |
| [#50672](https://github.com/anthropics/claude-code/pull/50672) | **Fix changelog skill name typo** (`less` → `fewer`) | Docs quality; `/fewer-permission-prompts` naming corrected | Open, ready to merge |
| [#50643](https://github.com/anthropics/claude-code/pull/50643) | **Ethos Aegis project scaffolding** | Appears to be misdirected/spam — extensive CI/templates for unrelated project | Open, likely to close |
| [#50638](https://github.com/anthropics/claude-code/pull/50638) | **Fix README images (EU SFJ)** | Undocumented; minimal description | Open |
| [#50637](https://github.com/anthropics/claude-code/pull/50637) | **GoodshytGroup patch 1** | Empty description; possible spam from same cluster | Open |
| [#46095](https://github.com/anthropics/claude-code/pull/46095) | **Claude Mythos operating contract** | Closed; "Veriflow immune system" — appears to be AI safety/alignment fiction project | Closed |
| [#47895](https://github.com/anthropics/claude-code/pull/47895) | **Add Claude Mythos operating contract (reopen)** | Same as above, resubmitted | Open |
| [#50595](https://github.com/anthropics/claude-code/pull/50595) | **Copilot: fix duplicate imports and restore classes** | Code cleanup; no description provided | Open |
| [#50578](https://github.com/anthropics/claude-code/pull/50578) | **Wrangler observability bootstrap** | Cloudflare Workers monitoring setup; unclear relation to Claude Code | Open |

**Note:** PR quality is poor this cycle — 6/9 from single user (`GoodshytGroup`) with minimal descriptions, suggesting spam or misdirected automation. Only [#39043](https://github.com/anthropics/claude-code/pull/39043) and [#50672](https://github.com/anthropics/claude-code/pull/50672) represent genuine community contributions.

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Session lifecycle management** | [#30869](https://github.com/anthropics/claude-code/issues/30869) (unarchive), [#50922](https://github.com/anthropics/claude-code/issues/50922) (semantic memory) | Strong — archival and memory are friction points for power users |
| **Custom theming/TUI extensibility** | [#50950](https://github.com/anthropics/claude-code/issues/50950) (custom themes in `settings.json`) | Emerging — 7 built-in themes insufficient for accessibility/branding |
| **Semantic search & memory rotation** | [#50922](https://github.com/anthropics/claude-code/issues/50922) references "4-Layer Memory System" | Experimental — community prototyping ahead of official support |
| **Plugin/channel reliability** | [#36503](https://github.com/anthropics/claude-code/issues/36503) and related | Ongoing — notification infrastructure needs hardening |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **Billing/limit enforcement UX** | High | Critical | [#50740](https://github.com/anthropics/claude-code/issues/50740) (hard lockout), [#50838](https://github.com/anthropics/claude-code/issues/50838) (usage limits bugged), [#47284](https://github.com/anthropics/claude-code/issues/47284) (gift sub downgrade) |
| **Cowork VM stability (Windows)** | High | High | [#50168](https://github.com/anthropics/claude-code/issues/50168), [#50938](https://github.com/anthropics/claude-code/issues/50938) (virtualization unavailable), [#50942](https://github.com/anthropics/claude-code/issues/50942) (CoworkVMService), [#50935](https://github.com/anthropics/claude-code/issues/50935) (RPC useradd failure) |
| **Long-context performance degradation** | Medium | Critical | [#47731](https://github.com/anthropics/claude-code/issues/47731) (20min turns) |
| **Skill system state corruption** | Medium | High | [#50947](https://github.com/anthropics/claude-code/issues/50947) (stale args post-compaction), [#34037](https://github.com/anthropics/claude-code/issues/34037) (missing IDE context on first skill message) |
| **Model switching/API schema drift** | Medium | Medium | [#49219](https://github.com/anthropics/claude-code/issues/49219), [#22362](https://github.com/anthropics/claude-code/issues/22362) (`--model` flag ignored) |
| **Desktop/web parity gaps** | Medium | Medium | [#50928](https://github.com/anthropics/claude-code/issues/50928), [#48121](https://github.com/anthropics/claude-code/issues/48121), [#49942](https://github.com/anthropics/claude-code/issues/49942) (Scheduled sidebar missing) |

**Meta-observation:** The concentration of `invalid`-labeled issues (5/30) and duplicate spam PRs suggests **community moderation tooling** may need attention, alongside the technical debt in limit enforcement and VM isolation.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-20

---

## 1. Today's Highlights

OpenAI is shipping a major **"Goal Mode"** capability across a 5-PR stack, introducing persisted thread goals with budget management and autonomous continuation. The TUI team is also landing **configurable keymaps and Vim composer mode** after long-standing community demand. Meanwhile, **MCP process leaks remain a critical pain point** with fresh regressions reported despite previous fixes.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| [rust-v0.122.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.12) | Two rapid alpha releases (alpha.11 and alpha.12) with no detailed changelogs provided |
| [rust-v0.122.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.11) | — |

*No substantive release notes available; appears to be iterative Rust CLI builds.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#10450](https://github.com/openai/codex/issues/10450) | **Remote Development in Codex Desktop App** | Most-upvoted open feature request (573 👍); gaps vs. VS Code remote workflows are blocking enterprise adoption | 145 comments of active debate; users sharing workarounds |
| [#14936](https://github.com/openai/codex/issues/14936) | **bwrap: Approval prompt spam** | Linux sandbox regression making CLI nearly unusable; every command triggers approval | 49 comments, frustrated +20 users; clearly a release blocker |
| [#8648](https://github.com/openai/codex/issues/8648) | **Codex replies to earlier messages** | Core context/agent bug breaking conversation flow; affects Pro users on latest models | 45 comments, persistent since January; damaging trust |
| [#9544](https://github.com/openai/codex/issues/9544) | **Remote compact task: stream disconnected** *(CLOSED)* | Critical infrastructure reliability; "compact" is essential for long sessions | 30 comments; closure suggests fix shipped but [#14063](https://github.com/openai/codex/issues/14063) still open |
| [#16088](https://github.com/openai/codex/issues/16088) | **Empty `.codex` file pollution** | WSL/Windows workflow friction; unexpected side effects break git hygiene | 58 👍, 21 comments; Windows users particularly vocal |
| [#12491](https://github.com/openai/codex/issues/12491) | **MCP zombies: 1300+ processes, 37GB leak** | Severe Codex.app stability issue; memory exhaustion on macOS | 13 comments, alarming metrics; production-unsafe |
| [#17832](https://github.com/openai/codex/issues/17832) | **Playwright MCP still leaking after fix** | Regression on [#16895](https://github.com/openai/codex/issues/16895); fix incomplete | 7 comments; erodes confidence in MCP reliability |
| [#16335](https://github.com/openai/codex/issues/16335) | **TUI perf regression 116→117** | Noticeable degradation in daily CLI use; Windows Terminal specifically affected | 12 comments; users benchmarking and bisecting |
| [#18194](https://github.com/openai/codex/issues/18194) | **Review error burns 5hr rate limit** | Economic impact: failed operations consume precious quota | 6 comments; Plus user, no workaround |
| [#18546](https://github.com/openai/codex/issues/18546) | **Disable automatic app updates** | Enterprise/policy requirement; forced updates disrupt workflows | Brand new (3 comments), immediate +0 but clearly needed |

---

## 4. Key PR Progress

| # | PR | Feature/Fix | Status |
|---|-----|-------------|--------|
| [#18073](https://github.com/openai/codex/pull/18073)–[#18077](https://github.com/openai/codex/pull/18077) | **Goal Mode Stack (1-5/5)** | Persisted thread goals, budget controls, autonomous continuation, `/goal` TUI command, statusline indicators | **OPEN** — complete feature landing |
| [#18593](https://github.com/openai/codex/pull/18593) | **Configurable TUI keymaps** | Centralized keymap config replacing hardcoded shortcuts across app/composer/pager/approval | **OPEN** — foundational UX improvement |
| [#18595](https://github.com/openai/codex/pull/18595) | **Vim composer mode** | Normal/operator bindings, `/vim` slash command, preset `v2` with frozen snapshots | **OPEN** — long-requested editor parity |
| [#18594](https://github.com/openai/codex/pull/18594) | **Keymap slash command** | Guided `/keymap` TUI for discovering and customizing bindings without manual config editing | **OPEN** — discoverability layer |
| [#18597](https://github.com/openai/codex/pull/18597) | **Realtime handoff transcript handling** | Full conversation delta sharing between realtime model and codex agent | **OPEN** — multimodal integration |
| [#18393](https://github.com/openai/codex/pull/18393) | **Auto-review handles `request_permissions`** | Unblocks permission flows in automated review mode | **OPEN** — UX cleanup pending |
| [#18599](https://github.com/openai/codex/pull/18599) | **Disable skills message in guardian thread** | Guardian review session hardening | **OPEN** — security/reliability |
| [#17980](https://github.com/openai/codex/pull/17980) | **AgentAssertion downstream wiring** | Feature-gated agent identity support, reduced from oversized original PR | **OPEN** — multi-agent infrastructure |
| [#17978](https://github.com/openai/codex/pull/17978) | **Persist and prewarm agent tasks** *(CLOSED)* | Session state persistence for agent task reuse; task lifecycle isolation | **CLOSED** — merged |
| [#18493](https://github.com/openai/codex/pull/18493) | **Filter Windows sandbox roots from SSH config** *(CLOSED)* | ACL hygiene on Windows; prevents over-permissioning | **CLOSED** — merged |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Remote/SSH development parity** | [#10450](https://github.com/openai/codex/issues/10450) (573 👍), worktree location config [#10599](https://github.com/openai/codex/issues/10599) | 🔥 Critical gap vs. VS Code |
| **Hierarchical/multi-agent orchestration** | [#18557](https://github.com/openai/codex/issues/18557), agent task prewarm [#17978](https://github.com/openai/codex/pull/17978), goal mode stack | 🚀 Active development |
| **Queueing/interleaving commands** | `/compact` [#14588](https://github.com/openai/codex/issues/14588), `/review` [#14286](https://github.com/openai/codex/issues/14286), `/fast` [#14081](https://github.com/openai/codex/issues/14081), undo/redo [#2379](https://github.com/openai/codex/issues/2379) | 🔄 UX polish in progress |
| **Image generation integration** | [#8758](https://github.com/openai/codex/issues/8758) (50 👍, CLOSED) | ❓ Status unclear; closed without clear resolution |
| **Notification/telemetry hooks** | [#3247](https://github.com/openai/codex/issues/3247) (33 👍, CLOSED), [#18512](https://github.com/openai/codex/issues/18512) (CLOSED) | ⚠️ Partially addressed, regressions noted |

---

## 6. Developer Pain Points

| Category | Symptoms | Severity |
|----------|----------|----------|
| **MCP process lifecycle** | Zombies [#12491](https://github.com/openai/codex/issues/12491), Playwright leaks [#17832](https://github.com/openai/codex/issues/17832), orphaned pairs with 13.6GB RSS | 🔴 **Critical** — production stability |
| **Sandbox approval fatigue** | bwrap spam [#14936](https://github.com/openai/codex/issues/14936), tool-call blocking [#15824](https://github.com/openai/codex/issues/15824) | 🔴 **High** — daily friction |
| **Context/agent coherence** | Wrong-message replies [#8648](https://github.com/openai/codex/issues/8648), stream disconnects [#9544](https://github.com/openai/codex/issues/9544)/[#14063](https://github.com/openai/codex/issues/14063) | 🟡 **High** — trust erosion |
| **Rate limit economics** | Review errors burning quota [#18194](https://github.com/openai/codex/issues/18194), upgrade path while limited [#17950](https://github.com/openai/codex/issues/17950) | 🟡 **High** — direct cost |
| **Windows TUI quality** | Rendering corruption [#13686](https://github.com/openai/codex/issues/13686), perf regression [#16335](https://github.com/openai/codex/issues/16335), PowerShell language mode [#7777](https://github.com/openai/codex/issues/7777) | 🟡 **Medium-High** — platform equity gap |
| **Update/control autonomy** | Forced app updates [#18546](https://github.com/openai/codex/issues/18546), telemetry removal [#18512](https://github.com/openai/codex/issues/18512) | 🟢 **Emerging** — enterprise/policy needs |

---

*Digest compiled from 50 issues and 50 PRs updated 2026-04-19. Data: github.com/openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-20

## Today's Highlights

No new releases dropped in the last 24h, but community activity remains intense with **50 issues** and **29 PRs** updated. The standout themes: AST-aware tooling is gaining traction as a major architectural direction, while contributors are aggressively patching edge cases around extension lifecycle, session management, and SSH/remote workflows. Several high-quality community PRs landed for UX polish like hostname display and `/restart` commands.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads, search, and mapping** | EPIC investigating whether tree-sitter style AST tooling can reduce token waste and misaligned reads. Could fundamentally improve agent precision on large codebases. | 5 comments, maintainer-only; seen as high-potential architecture bet |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | **Permission prompts repeat on same file** | Core trust/UX friction — "allow for all future sessions" intermittently fails, breaking flow state. | 3 comments; user-reported, no 👍 yet but high annoyance factor |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell commands hang with "Waiting input"** | Terminal state machine bug — simple commands falsely appear to await input. Blocks agent autonomy. | 2 comments, 2 👍; reproducibility makes it critical |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | **Model scatters tmp scripts across directories** | Workspace hygiene nightmare when shell execution is restricted; complicates clean commits. | 2 comments; workflow-blocking for git-centric users |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after MAX_TURNS** | Silent failure mode — interrupted agents look successful, corrupting trust in results. | 2 comments, 2 👍; reliability concern |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores settings.json overrides** | Configuration system leakage — registry reads settings but agent doesn't respect them. | 2 comments; breaks user expectations for control |
| [#25216](https://github.com/google-gemini/gemini-cli/issues/25216) | **Crash on temp path `A:\`** | Windows-specific `realpath` failure on directory-like paths. Blocks Windows adoption. | 1 comment; edge case but hard crash |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | **Memory routing: global vs. project** | Defines long-term memory architecture — user preferences vs. codebase-specific knowledge. | 1 comment, 2 👍; foundational for personalization |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | **Agent should discourage destructive behavior** | Safety guardrail gap — `git reset --force` and DB modifications without warnings. | 1 comment, 1 👍; trust/safety priority |
| [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) | **SSH sessions scramble text** | Terminal emulator incompatibility over SSH breaks remote workflows entirely. | 1 comment; blocks cloudtop/remote dev use case |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| [#25670](https://github.com/google-gemini/gemini-cli/pull/25670) | **Remove duplicate `initialize` call on agents refresh** | Eliminates redundant `loadAgents()` during `/agents reload`, cutting startup latency and potential race conditions. | Open |
| [#25666](https://github.com/google-gemini/gemini-cli/pull/25666) | **Gemma 4 integration (Apr 19)** | Model backend update — likely adds Gemma 4 support (summary sparse, tracking branch). | Open, P1 |
| [#25663](https://github.com/google-gemini/gemini-cli/pull/25663) | **Add hostname to footer status bar** | Surfaces `hostname` in persistent footer — critical for users juggling multiple SSH/VM/container sessions. | Open |
| [#25662](https://github.com/google-gemini/gemini-cli/pull/25662) | **Silently skip `GEMINI.md` directories (EISDIR)** | Fixes noisy warning when `GEMINI.md` exists as directory; defensive memory discovery. | Open, P2, help wanted |
| [#25660](https://github.com/google-gemini/gemini-cli/pull/25660) | **Add `delete` alias for `/extensions uninstall`** | UX micro-fix — matches user intuition, reduces friction. One-liner. | Open, help wanted |
| [#25657](https://github.com/google-gemini/gemini-cli/pull/25657) | **Add `/restart` slash command** | Graceful process restart with automatic session resume; solves post-update "restart required" pain. Closes #16124. | Open, P2, help wanted |
| [#25654](https://github.com/google-gemini/gemini-cli/pull/25654) | **Preserve extension rollback, end startup phase** | Fixes extension update failures losing rollback target + ensures profiling always completes. Closes #21560. | Open, P1 |
| [#25163](https://github.com/google-gemini/gemini-cli/pull/25163) | **Prevent restart loop on IDE trust mismatch** | Stops infinite boot loop when IDE trust state diverges from CLI settings. | Open, P1 |
| [#25653](https://github.com/google-gemini/gemini-cli/pull/25653) | **Copy extension examples to dist during build** | Fixes `gemini extensions new` failure in published packages — missing templates. | Open, P1 |
| [#25649](https://github.com/google-gemini/gemini-cli/pull/25649) | **Strip `CI_*` env vars in dev mode** | Prevents `is-in-ci` from hanging interactive `npm run start` when CI variables present. | Open, help wanted |

---

## Feature Request Trends

1. **AST-aware tooling for agent precision** — Multiple issues (#22745, #22746) explore tree-sitter integration for bounded reads and codebase mapping. Direction: reduce token burn and misalignment.

2. **Structured memory architecture** — Global vs. project-scoped memory (#22819) plus proactive memory writes (#22809) show push for persistent, contextual user modeling.

3. **Remote/SSH-native experience** — Hostname display (#25663), SSH detection helpers (#24546), and terminal corruption fixes (#24202) indicate multi-machine workflows are a priority use case.

4. **Agent safety & observability** — Destructive behavior guards (#22672), subagent approval mode awareness (#23582), and honest interruption reporting (#22323) reflect maturation beyond "demo reliability."

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Permission fatigue** | #24916 (repeated prompts), #23582 (approval mode gaps) | High — breaks flow |
| **Terminal state corruption** | #25166 (hanging shell), #24935 (editor exit corruption), #24202 (SSH scramble) | High — makes tool unusable |
| **Extension lifecycle fragility** | #25654 (rollback lost), #25653 (missing templates), #21560 (update failures) | High — core to ecosystem |
| **Windows path edge cases** | #25216 (`A:\` crash), #24973 (Windows CI mock failures) | Medium — adoption barrier |
| **Silent failures / false success** | #22323 (MAX_TURNS → GOAL), #22267 (ignored settings) | High — erodes trust |
| **Streaming/rendering glitches** | #25218 (incremental table breaks), #24470 (scroll jumps) | Medium — polish gap |
| **Configuration not respected** | #22267 (Browser Agent), #25163 (trust mismatch loops) | Medium — control illusion |

---

*Digest compiled from google-gemini/gemini-cli public activity. For full context, follow the linked issues and PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-20

## 1. Today's Highlights

No new releases shipped in the last 24 hours, but community activity remains intense with **36 updated issues** focused heavily on **rate limiting transparency**, **model availability parity with VS Code**, and **HTTP/2 networking reliability**. The most engaged discussions center on enterprise users hitting authorization edge cases and power users demanding better visibility into quota consumption.

---

## 2. Releases

**None** — No releases in the last 24 hours. The latest stable version remains **v1.0.32**.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#1703](https://github.com/github/copilot-cli/issues/1703) | Copilot CLI does not list all org-enabled models (e.g. Gemini 3.1 Pro) while VS Code Copilot does | **Critical parity gap**: Organizations paying for multi-model access can't use enabled models in CLI despite identical auth context. Undermines CLI as a first-class interface. | 23 comments, 34 👍 — highly upvoted; users confirming repro across orgs |
| [#2725](https://github.com/github/copilot-cli/issues/2725) | GPT-5.4 /model picker hides "Extra High" effort level | UI inconsistency hides functional capability; power users who know `xhigh` works are frustrated by discoverability failure | 22 comments, 18 👍; active workaround sharing |
| [#2421](https://github.com/github/copilot-cli/issues/2421) | HTTP/2 GOAWAY race condition causes cascading retry failures | **Infrastructure stability**: Consolidates 5 prior issues. Silent premium request waste directly costs users quota. Deep technical analysis provided. | 6 comments, 16 👍; praised for root-cause depth |
| [#2760](https://github.com/github/copilot-cli/issues/2760) | Implement proper HTTP retry logic for 429 responses | Aggressive retry loops (20+/min) without backoff amplify rate limit pain; violates HTTP standards | 6 comments, 2 👍; marked with ⭐ by author |
| [#2336](https://github.com/github/copilot-cli/issues/2336) | Strange rate limit message on moderate tasks | Opaque error messaging breaks trust; "moderate task" failure suggests quota accounting is opaque or buggy | 17 comments, 6 👍; multiple users sharing similar patterns |
| [#1897](https://github.com/github/copilot-cli/issues/1897) | "You are not authorized" despite Copilot Pro + CLI enabled | **Recurring auth regression**: Intermittent enterprise policy enforcement blocking paid individual subscribers | 12 comments, 1 👍; weekly recurrence pattern noted |
| [#2078](https://github.com/github/copilot-cli/issues/2078) | Add `/btw` command | Feature parity request matching other CLI tools (e.g., Claude Code, Warp) for quick context switching | 6 comments, 26 👍 — highest feature request upvotes |
| [#2282](https://github.com/github/copilot-cli/issues/2282) | Not Able to connect to MCP servers | MCP integration is a strategic differentiator; Windows/Winget install path broken for server connectivity | 5 comments, 1 👍; blocking adoption of agentic workflows |
| [#2840](https://github.com/github/copilot-cli/issues/2840) | Rate limit aborts subagents | **Agentic workflow breakage**: Auto-model fallback fails for spawned subagents, forcing manual intervention | 2 comments, 1 👍; filed today, emerging pattern |
| [#2839](https://github.com/github/copilot-cli/issues/2839) | Rate Limit display is completely off | Quota reporting diverges across CLI instances and GitHub web UI (0% vs 33% vs 60.6%); destroys user trust in limits | 2 comments, 1 👍; same reporter as #2336, escalating |

---

## 4. Key PR Progress

**No Pull Requests updated in the last 24 hours.**

This is notable — with 36 active issue discussions and zero PR activity, the community is in a **"reporting-heavy, resolution-light"** phase. The maintainers appear focused on internal stabilization (v1.0.32 shipped recently) rather than merging external contributions.

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Rate limit observability** | #2827, #2828, #2839, #2797, #2787 | 🔥 Critical mass — users demand real-time quota dashboards, not just blocking warnings |
| **Command parity with competitors** | #2078 (`/btw`), #2837 (behavioral postures), #2830 (custom themes) | Growing — CLI lagging behind Claude Code, Cursor on UX affordances |
| **MCP/agent ecosystem maturity** | #2282, #2838, #2833, #2840 | Early but strategic — MCP server reliability, agent eventing, fleet dispatch ordering |
| **Enterprise auth reliability** | #1897, #2306, #2818 | Persistent — session/token expiration handling doesn't match enterprise SLA expectations |
| **Model access parity** | #1703, #2725 | High — CLI treated as secondary to VS Code for model rollout |

---

## 6. Developer Pain Points

### 🔴 Rate Limiting: The Dominant Frustration
- **Six distinct issues** in 24h touch quota systems: misleading percentages (#2839, #2797), unhelpful error messages (#2336, #2787), weekly reset failures (#2769, #2828), subagent breakage (#2840), and retry logic that makes it worse (#2760)
- **Core ask**: Predictable, transparent, consistently-reported quota accounting across all surfaces

### 🟡 Enterprise/Pro Tier Confusion
- Auth errors (#1897, #2306) hit **paid individual subscribers** with enterprise policy language
- Session token expiration (#2818) breaks long-running autonomous workflows — counter to "autopilot" value prop

### 🟢 Model Availability as Second-Class Citizen
- CLI model picker lags VS Code (#1703) and hides valid configurations (#2725)
- Suggests CLI release pipeline decoupled from Copilot platform model enablement

### ⚪ Infrastructure Reliability Under Load
- HTTP/2 GOAWAY race (#2421) and 429 retry storms (#2760) indicate connection pooling and backpressure need architectural attention before scale

---

*Digest compiled from github.com/github/copilot-cli public issue tracker. For corrections or additions, comment on this gist or open a discussion.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-20

## 1. Today's Highlights

The community is actively refining subagent behavior with three interconnected PRs addressing working directory inheritance and MCP config propagation. A new hook capability for transparent command rewriting landed, while authentication and protocol compatibility issues surfaced as immediate user blockers.

---

## 2. Releases

**No releases in the last 24 hours.**

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#1903](https://github.com/MoonshotAI/kimi-cli/issues/1903) | 400 error on kimi-for-coding model | Blocking basic API usage for macOS users on v1.34.0; indicates potential model endpoint regression | 6 comments, active triage ongoing |
| [#1939](https://github.com/MoonshotAI/kimi-cli/issues/1939) | ACP protocol mismatch in kimicode | Breaks external tool integrations expecting `command + args` structure; affects automation workflows | 2 comments, cross-language report (CN/EN) |
| [#1931](https://github.com/MoonshotAI/kimi-cli/issues/1931) | Subagent ignores parent's working directory | Breaks git worktree workflows where context depends on `cd` operations; core agent orchestration bug | 2 comments, has linked fix PR |
| [#1927](https://github.com/MoonshotAI/kimi-cli/issues/1927) | Subagent infinite loop on file reads | Severe resource waste and hang risk; subagent reads same file hundreds of times | 1 comment, needs reproduction details |
| [#1936](https://github.com/MoonshotAI/kimi-cli/issues/1936) | Incomplete `work_dir` override implementation | Follow-up to #1933: Shell tool and AGENTS.md context still use session directory, not override | 1 comment, technical debt tracking |
| [#1940](https://github.com/MoonshotAI/kimi-cli/issues/1940) | Auth failures in VS Code/Cursor extensions | Affects IDE extension users specifically; marketplace version v0.5.3 incompatible with auth flow | 0 comments, newly reported |
| [#1873](https://github.com/MoonshotAI/kimi-cli/issues/1873) | Admin privileges required for Windows install | Enterprise deployment blocker; regression from earlier versions that supported user-level install | 1 comment, long-standing request |
| [#1938](https://github.com/MoonshotAI/kimi-cli/issues/1938) | Push notifications for Kimi-CLI-Web | Mobile workflow enablement; user wants Safari/macOS notifications when web sessions complete | 0 comments, feature request |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#1942](https://github.com/MoonshotAI/kimi-cli/pull/1942) | MCP config propagation to subagents + immediate resume | Fixes two critical gaps: subagents now inherit MCP tool configs, and resumed sessions restore them without restart | Open, freshly submitted |
| [#1933](https://github.com/MoonshotAI/kimi-cli/pull/1933) | `work_dir` override for subagent dispatch | Enables subagents to operate in directories other than `KIMI_WORK_DIR`; fixes #1931 | Open, merged conceptually, follow-up in #1936 |
| [#1935](https://github.com/MoonshotAI/kimi-cli/pull/1935) | `updatedInput` support in PreToolUse hooks | 34-line addition enabling transparent command rewriting; aligns with existing Beta hook documentation | Open, small surface area |
| [#1549](https://github.com/MoonshotAI/kimi-cli/pull/1549) | Configurable compaction providers | Allows dedicated compaction model via `loop_control.compaction_model`; reduces cost/quality tradeoffs for long contexts | Open, month-old, awaiting review |

---

## 5. Feature Request Trends

- **Notification infrastructure**: Push/webhook support for async completion (#1938) — users want Kimi to work across devices without polling
- **Enterprise deployment**: Permission-less installation (#1873) and Windows enterprise compatibility
- **Context management**: Dedicated compaction models (#1549) for cost-efficient long conversations
- **Hook extensibility**: Transparent command rewriting (#1935) suggests ecosystem demand for middleware-like customization

---

## 6. Developer Pain Points

| Category | Frequency | Description |
|----------|-----------|-------------|
| **Subagent reliability** | 3 issues + 2 PRs | Working directory inheritance, infinite loops, and MCP config propagation all point to immature agent orchestration |
| **Authentication fragility** | 2 issues | Breaks across CLI versions (#1903) and IDE extensions (#1940); suggests auth layer needs stability investment |
| **Protocol compatibility** | 1 issue | ACP protocol mismatch (#1939) indicates external integration testing gaps |
| **Enterprise lockout** | 1 issue | Admin privilege requirement (#1873) blocks corporate adoption; regression from earlier versions |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity through 2026-04-20 00:00 UTC.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-20

## Today's Highlights

OpenCode shipped two patch releases (v1.14.17–v1.14.18) restoring the native ripgrep backend and fixing Docker build permission preservation, while the community grapples with a major version numbering confusion (1.4.x → 1.14.x) and fresh reports of UI rendering failures on macOS 26.4. Security concerns also surfaced with a disclosed sandbox evasion vulnerability and a now-patched MCP permission bypass.

---

## Releases

| Version | Key Changes |
|---------|-------------|
| **v1.14.18** | Restored native ripgrep backend for reliable file search and file listing; docs contribution from @ariane-emory documenting `--dangerously-skip-permissions` CLI flag ([release](https://github.com/anomalyco/opencode/releases/tag/v1.14.18)) |
| **v1.14.17** | Preserved executable permissions before Docker builds; reduced unnecessary plugin reinstalls; defaulted Anthropic Bedrock Opus 4.7 requests to `display: summarized`; improved attachment type detection from file contents ([release](https://github.com/anomalyco/opencode/releases/tag/v1.14.17)) |

---

## Hot Issues

| # | Title | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | Memory Megathread | Centralized tracking for memory leaks; maintainers explicitly requesting heap snapshots (not LLM-generated fixes) | 60 comments, 36 👍 — highest engagement, community actively collecting diagnostics |
| [#5937](https://github.com/anomalyco/opencode/issues/5937) | Custom provider docs incorrect | Documentation drift blocking onboarding for self-hosted/OpenAI-compatible providers | 23 comments, 13 👍 — persistent since Dec 2025, users still hitting stale `/connect` flow |
| [#7030](https://github.com/anomalyco/opencode/issues/7030) | Ollama qwen2.5-coder: phantom tool execution | Critical reliability bug — tool calls report success but silently fail to write files, breaking `/init` and code editing workflows | 18 comments, 18 👍 — strong parity between comments and upvotes indicates severity |
| [#8501](https://github.com/anomalyco/opencode/issues/8501) | Expand pasted text summaries | UX friction in prompt editing — collapsed paste blocks prevent review/modification | 17 comments, **141 👍** — highest upvoted open issue, clear demand |
| [#11532](https://github.com/anomalyco/opencode/issues/11532) | AGENTS.md not loaded after `/new` | Breaks agent context continuity; users expect project rules to persist across session resets | 16 comments, 10 👍 — workflow disruption for agent-heavy users |
| [#22630](https://github.com/anomalyco/opencode/issues/22630) | Blank window on macOS 26.4 (Tahoe) | Total UI failure on upcoming macOS beta; blocks adoption for Apple developers on preview channel | 10 comments, 1 👍 — early-adopter blocker, likely to escalate as Tahoe nears GA |
| [#22444](https://github.com/anomalyco/opencode/issues/22444) | Azure OpenAI models broken in latest update | Enterprise regression — GPT-5.x-Codex models all failing with identical errors | 10 comments, 4 👍 — enterprise deployment risk |
| [#23211](https://github.com/anomalyco/opencode/issues/23211) | 1.4.7+ fails to render UI, loses all config | Data loss scenario — config, logins, and session state wiped on upgrade | 7 comments, 1 👍 — severe but lower visibility; may be under-reported |
| [#23045](https://github.com/anomalyco/opencode/issues/23045) | MCP tools bypass agent permission filtering | **Security fix merged** — MCP tools ignored agent-level permission prefixes, allowing unauthorized tool access | 7 comments, 0 👍 — quickly closed with root cause identified in `prompt.ts` |
| [#23419](https://github.com/anomalyco/opencode/issues/23419) | 1.4.x→1.14.x version jump confusion | Community trust issue — aggressive release cadence with "incomprehensible bugs" sparking questions about stability strategy | 5 comments, 10 👍 — meta-concern about project maturity |

---

## Key PR Progress

| # | Title | Feature/Fix | Status |
|---|-------|-------------|--------|
| [#22927](https://github.com/anomalyco/opencode/pull/22927) | Add NVIDIA to popular providers | Surfaces NVIDIA models.dev integration in UX with docs and attribution headers | Open |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | Mobile Touch Optimization | Full mobile/touch device support for OpenCode App while preserving desktop experience | Open |
| [#13854](https://github.com/anomalyco/opencode/pull/13854) | Stop streaming markdown after message completes | Fixes TUI table rendering bug where completed messages skip final rows | Open, needs issue |
| [#23447](https://github.com/anomalyco/opencode/pull/23447) | Terminal notifications via OSC escape sequences | Replaces macOS Script Editor alerts with native terminal notifications, adds click-to-focus | **Merged** |
| [#23456](https://github.com/anomalyco/opencode/pull/23456) | Global config and rules file editor | In-app editing for `opencode.jsonc` and global rules files | Open |
| [#23451](https://github.com/anomalyco/opencode/pull/23451) | x-session-affinity header for Fireworks AI | Fixes prompt cache misses by enabling per-replica session affinity | Open |
| [#23335](https://github.com/anomalyco/opencode/pull/23335) | Remove model ID blocklist from reasoning variants | Eliminates hardcoded exclusions (DeepSeek, GLM) for reasoning model detection | Open |
| [#12050](https://github.com/anomalyco/opencode/pull/12050) | Align plugin tool types with built-in capabilities | Exposes `ToolContext` fields (`callID`, `extra`) to plugins for parity with native tools | Open, contributor |
| [#17401](https://github.com/anomalyco/opencode/pull/17401) | Handle PDFs in tool results for Amazon Bedrock | Fixes Bedrock tool result media support gap for non-image attachments | Open, contributor |
| [#23441](https://github.com/anomalyco/opencode/pull/23441) | Clarify prompt supports multiple file references | Docs improvement for agent `prompt` field multi-file reference syntax | Open |

---

## Feature Request Trends

1. **Agent Workflow Ergonomics** — Expanding paste summaries (#8501), persistent AGENTS.md across `/new` (#11532), and YOLO mode for auto-approving permissions (#11831) all point to demand for smoother, less interrupt-driven agent interactions.

2. **Enterprise & Self-Hosted Provider Maturity** — Azure OpenAI (#22444), NVIDIA (#22927), Kimi K2.6 (#22408), and LM Studio (#23445, #15774) integrations receiving sustained attention; enterprise reliability is a growing theme.

3. **Terminal/PTY Integration** — Request for integrated terminal PTY usage (#23449) and ongoing TUI polish (notifications, numpad Enter, streaming fixes) indicate the terminal experience is central to user workflows.

4. **Agent Teams & Orchestration** — Direct question about agent-teams timeline (#15035) and plugin tool capability gaps (#12050, #21383) suggest users want more sophisticated multi-agent architectures.

---

## Developer Pain Points

| Category | Description | Key Issues |
|----------|-------------|------------|
| **Version Stability & Trust** | Aggressive release cadence with breaking changes and confusing version jumps (1.4.x → 1.14.x) eroding confidence; config loss on upgrade | #23419, #23211 |
| **TUI/Rendering Reliability** | Multiple independent reports of blank windows, UI failures, and session corruption across macOS versions and desktop builds | #22630, #23211, #19130 |
| **Memory & Performance** | Persistent memory leaks requiring manual heap snapshot collection; no automated diagnostics | #20695 |
| **Tool Execution Integrity** | Silent failures in file operations (Ollama), phantom generations (LM Studio), and streaming truncation undermining trust in agent outputs | #7030, #23445, #15774 |
| **Permission & Security Model** | MCP bypass (#23045), sandbox evasion (#23423), and "ask" permission hangs (#16367) reveal gaps in the security boundary; users want clearer control | #11831, #16367, #23045, #23423 |
| **Documentation Accuracy** | Stale docs for custom providers, agent prompts, and commands causing onboarding friction and misconfiguration | #5937, #20356, #18987 |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-20

## Today's Highlights

The Pi ecosystem saw intense activity around **cloud code assist reliability** and **provider extensibility**, with multiple fixes landing for JSON schema sanitization in Google Cloud Code Assist proxy flows. Meanwhile, community momentum is building behind **OpenRouter attribution** and **local LLM provider improvements**, signaling Pi's expanding footprint across both enterprise and self-hosted deployment scenarios.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#3214](https://github.com/badlogic/pi-mono/issues/3214) | Cloud code assist API 400 error from schema meta-declarations | **Critical fix path**: Claude via Antigravity fails on `$schema`, `anyOf`, `const` in MCP tool schemas. Blocks enterprise users relying on jcodemunch tools and TypeBox unions. | 11 comments; spawned [#3411](https://github.com/badlogic/pi-mono/issues/3411), [#3412](https://github.com/badlogic/pi-mono/pull/3412), [#3410](https://github.com/badlogic/pi-mono/pull/3410) |
| [#2070](https://github.com/badlogic/pi-mono/issues/2070) | Numpad printable characters not recognized | **Long-tail input bug**: Windows users with numeric keypads get garbled output (``), breaking basic data entry. | 10 comments; merged fix confirmed |
| [#3344](https://github.com/badlogic/pi-mono/issues/3344) | Aborted tool calls corrupt conversation state | **Data integrity**: Ctrl+C during tool execution permanently poisons session with unclosed `tool_use`/`tool_result` pairs. No recovery path. | 7 comments; high severity acknowledged |
| [#3208](https://github.com/badlogic/pi-mono/issues/3208) | Custom thinking levels per model | **Extensibility gap**: Hardcoded thinking levels break Shift+Tab for models with non-standard reasoning tiers (e.g. Qwen, DeepSeek variants). Extension API needs parity. | 6 comments, 6 👍; author volunteered to implement |
| [#534](https://github.com/badlogic/pi-mono/issues/534) | Config folder violates XDG spec on Linux | **Platform hygiene**: `$HOME` pollution alienates Linux power users. 11 👍 shows sustained demand. | 6 comments; reopened/closed cycle suggests ongoing negotiation |
| [#3388](https://github.com/badlogic/pi-mono/issues/3388) / [#3425](https://github.com/badlogic/pi-mono/issues/3425) | Missing/partial assistant `usage` after compaction | **Accounting correctness**: Post-compaction messages with incomplete usage crash APIs or inject `NaN` into token tracking. | 5 + 1 comments; verified pi-only repro |
| [#3414](https://github.com/badlogic/pi-mono/issues/3414) | OpenRouter attention (rankings feature) | **Ecosystem visibility**: Adding `X-OpenRouter-Title` header would surface Pi in OpenRouter traffic rankings—marketing/telemetry intersection. | 4 comments; draft PR in progress |
| [#3357](https://github.com/badlogic/pi-mono/issues/3357) | Official local LLM provider extension | **Self-hosted UX**: Dynamic model list fetching from `{baseUrl}/models` eliminates manual `models.json` editing for llama.cpp/Ollama/LM Studio users. | 4 comments; Julien Chaumond (Hugging Face) authored |
| [#3051](https://github.com/badlogic/pi-mono/issues/3051) | Bash tool records grep/diff exit 1 as `isError: true` | **Unix semantics**: Treats "no matches" as failure, causing false-positive error loops in coding agent workflows. | 4 comments; fix merged |
| [#3367](https://github.com/badlogic/pi-mono/issues/3367) | Introductory hint doesn't work | **Onboarding friction**: First-run promise ("Pi can explain its own features") fails against local Ollama models, damaging trust. | 6 comments; likely docs/context gap |

---

## Key PR Progress

| # | PR | Status | What It Does |
|---|-----|--------|--------------|
| [#3431](https://github.com/badlogic/pi-mono/pull/3431) | Add fork position and duplicate session option | **OPEN** | Simpler implementation of [#2962](https://github.com/badlogic/pi-mono/issues/2962); enables session branching for experimentation without losing context |
| [#3427](https://github.com/badlogic/pi-mono/pull/3427) | OpenRouter attribution headers by default | **OPEN** | Implements [#3414](https://github.com/badlogic/pi-mono/issues/3414); blocked on telemetry-gated header injection design—privacy vs. visibility tension |
| [#3417](https://github.com/badlogic/pi-mono/pull/3417) | Avoid duplicate symlinked skills in config | **OPEN** | Deduplicates skills via `realpathSync` canonical path resolution; preserves precedence ordering. Fixes [#3405](https://github.com/badlogic/pi-mono/issues/3405) |
| [#3421](https://github.com/badlogic/pi-mono/pull/3421) | Replace stale OpenRouter Llama 4 Maverick test with Scout | **OPEN** | CI hygiene: switches to available model endpoint to unblock test suite |
| [#3409](https://github.com/badlogic/pi-mono/pull/3409) | Allow overriding OAuth callback bind host | **OPEN** | `PI_OAUTH_CALLBACK_HOST` env var replaces hardcoded `127.0.0.1`; enables remote/headless auth flows. Closes [#3396](https://github.com/badlogic/pi-mono/issues/3396) |
| [#3412](https://github.com/badlogic/pi-mono/pull/3412) / [#3410](https://github.com/badlogic/pi-mono/pull/3410) | Strip JSON schema meta keys for cloud code assist | **CLOSED** | Dual fixes for [#3214](https://github.com/badlogic/pi-mono/issues/3214): removes `$schema`, `anyOf`, `const` from tool params before Antigravity submission |
| [#3408](https://github.com/badlogic/pi-mono/pull/3408) | 'Remember for session' option in safe-guard prompts | **CLOSED** | UX upgrade: three-choice confirm (Yes / Yes, remember / No) with session-scoped `Set` deduplication. Reduces repetitive safety prompts |
| [#3403](https://github.com/badlogic/pi-mono/pull/3403) | Support `--agents-file` context override | **CLOSED** | CLI flag to override `AGENTS.md`/`CLAUDE.md` discovery; enables multiple context presets per repo. Closes [#3404](https://github.com/badlogic/pi-mono/issues/3404) |
| [#3400](https://github.com/badlogic/pi-mono/pull/3400) / [#3402](https://github.com/badlogic/pi-mono/pull/3402) | Bedrock maxTokens/endpoint fixes | **CLOSED** | Eliminates token quota waste from aggressive `maxTokens` defaulting; respects `model.baseUrl` for VPC/custom endpoints. GovCloud support in [#3359](https://github.com/badlogic/pi-mono/issues/3359) |
| [#3424](https://github.com/badlogic/pi-mono/pull/3424) | ChatGPT device code login method | **CLOSED** | Headless/SSH-compatible OAuth flow for ChatGPT Plus/Pro; bypasses localhost callback requirement |

---

## Feature Request Trends

1. **Provider-level customization** — Thinking levels per model ([#3208](https://github.com/badlogic/pi-mono/issues/3208)), dynamic model lists for local LLMs ([#3357](https://github.com/badlogic/pi-mono/issues/3357)), and cache control format negotiation ([#3392](https://github.com/badlogic/pi-mono/issues/3392)) all point to demand for **provider self-description** rather than hardcoded capability matrices.

2. **Session ergonomics** — Named sessions ([#3416](https://github.com/badlogic/pi-mono/issues/3416)), forking/duplication ([#3431](https://github.com/badlogic/pi-mono/pull/3431)), and graceful abort recovery ([#3344](https://github.com/badlogic/pi-mono/issues/3344)) show users treating Pi sessions as **durable workspaces**, not ephemeral chats.

3. **TUI polish and accessibility** — Custom spinners ([#3413](https://github.com/badlogic/pi-mono/issues/3413)), non-sticky headers ([#3415](https://github.com/badlogic/pi-mono/issues/3415)), focus-aware cursors ([#3380](https://github.com/badlogic/pi-mono/issues/3380)), and terminal resize handling ([#3406](https://github.com/badlogic/pi-mono/issues/3406)) reflect **professional terminal dwell time**—users live in Pi for hours.

4. **Enterprise auth and deployment** — OAuth callback host override ([#3396](https://github.com/badlogic/pi-mono/issues/3396)/[#3409](https://github.com/badlogic/pi-mono/pull/3409)), device code flows ([#3424](https://github.com/badlogic/pi-mono/pull/3424)), and GovCloud Bedrock ([#3359](https://github.com/badlogic/pi-mono/issues/3359)) signal **air-gapped, headless, and regulated environments** as growth targets.

---

## Developer Pain Points

| Theme | Manifestation | Frequency Signal |
|-------|-------------|----------------|
| **JSON Schema portability** | Cloud proxies (Antigravity, Google Code Assist) rejecting valid MCP tool schemas with `anyOf`/`$schema`/`const` | 3 issues, 2 PRs, 11+ comment thread; affects TypeBox, Zod, and hand-written schemas equally |
| **Session corruption on interrupt** | Ctrl+C during tool calls → unrecoverable `tool_use`/`tool_result` mismatch; no CLI repair command | [#3344](https://github.com/badlogic/pi-mono/issues/3344) with 7 comments; "permanently unusable" |
| **Windows terminal fidelity** | Numpad input ([#2070](https://github.com/badlogic/pi-mono/issues/2070)), backspace/delete regressions ([#2733](https://github.com/badlogic/pi-mono/issues/2733)), scroll jumps on resize ([#3406](https://github.com/badlogic/pi-mono/issues/3406)) | Recurring across versions; suggests insufficient Windows CI coverage |
| **Silent failures** | Images dropped for non-vision models ([#3429](https://github.com/badlogic/pi-mono/issues/3429)), sessions dying post-tool-call with no error ([#3423](https://github.com/badlogic/pi-mono/issues/3423)) | User confusion from missing feedback; "silently" appears in multiple issue titles |
| **OAuth friction in remote/headless contexts** | Hardcoded `127.0.0.1`, no device code path for ChatGPT until now | [#3396](https://github.com/badlogic/pi-mono/issues/3396), [#3424](https://github.com/badlogic/pi-mono/pull/3424); SSH and container workflows blocked |

---

*Digest compiled from [badlogic/pi-mono](https://github.com/badlogic/pi-mono) activity 2026-04-19.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-20

---

## 1. Today's Highlights

The Qwen Code team shipped **v0.14.5-nightly** with critical ACP integration improvements and compact mode UX optimizations, while the community is grappling with a **widespread 401 authentication crisis** affecting dozens of users across OAuth and token refresh flows. Simultaneously, the VSCode Companion is undergoing a major authentication overhaul as the project pivots away from the discontinued Qwen OAuth system toward Coding Plan and API Key-based access.

---

## 2. Releases

### [v0.14.5-nightly.20260419.a623655c8](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.5-nightly.20260419.a623655c8)

| Change | Author | PR |
|--------|--------|-----|
| **feat(acp): Complete hooks support for ACP integration** | @DennisYu07 | [#3248](https://github.com/QwenLM/qwen-code/pull/3248) |
| **feat: Optimize compact mode UX** — shortcuts, settings sync, and safety improvements | @chiga0 | [#3100](https://github.com/QwenLM/qwen-code/pull/3100) |
| **feat(hooks): HTTP hooks infrastructure** | — | — |

> **Note:** The release notes appear truncated for the HTTP hooks feature. This nightly focuses on enterprise ACP (Agent Communication Protocol) readiness and CLI ergonomics.

---

## 3. Hot Issues

### 🔴 Critical: Mass 401 Authentication Failures

A **cluster of 10+ identical reports** indicates a systemic token management failure in v0.14.x:

| Issue | Reporter | Reactions | Key Detail |
|-------|----------|-----------|------------|
| [#3425](https://github.com/QwenLM/qwen-code/issues/3425) | @eleitorlibertario | 👍×2 | "Login reports success, but every request 401s" — **most detailed reproduction** |
| [#3443](https://github.com/QwenLM/qwen-code/issues/3443) | @rockygorden | 👍×2 | Fresh reinstall + `/login` success → immediate 401; 0% context usage shown |
| [#3453](https://github.com/QwenLM/qwen-code/issues/3453) | @moussa8747-collab | — | "This message bothered me" — user frustration evident |
| [#3449](https://github.com/QwenLM/qwen-code/issues/3449) | @SCUliujiacheng | — | v0.14.5 on Windows, Qwen OAuth auth |
| [#3446](https://github.com/QwenLM/qwen-code/issues/3446) | @RtCoder1337 | — | WSL2 environment, OAuth |
| [#3440](https://github.com/QwenLM/qwen-code/issues/3440) | @secford | — | v0.14.2 on Linux, persistent across versions |
| [#3437](https://github.com/QwenLM/qwen-code/issues/3437) | @yar3333 | — | **Different error**: 400 invalid messages payload with local qwen3.6 + image |
| [#3435](https://github.com/QwenLM/qwen-code/issues/3435) | @iyaminrtg | — | v0.14.4, all prompts fail post-login |
| [#3432](https://github.com/QwenLM/qwen-code/issues/3432) | @rayaadhary | — | v0.13.1, issue spans multiple versions |
| [#3418](https://github.com/QwenLM/qwen-code/issues/3418) | @ZakharD | — | VSCode Companion specific, v0.14.4 |

**Community reaction:** Escalating frustration. Users report the "successful login → immediate 401" pattern suggests **token caching/refresh logic is broken**, not user error. The concentration of reports on 2026-04-18/19 points to a backend or certificate change. Workaround: none confirmed; some users attempting reinstalls without success.

---

### Other Notable Issues

| Issue | Reporter | Why It Matters |
|-------|----------|----------------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) **OAuth Free Tier Policy Adjustment** | @pomelo-nwu | **102 comments** — proposed reduction from 1,000→100 requests/day and eventual free tier closure. Highly contentious; impacts accessibility for hobbyist developers. |
| [#2786](https://github.com/QwenLM/qwen-code/issues/2786) **Agent思维链阻塞用户紧急输入** | @linhaosunny | Core UX flaw: agent's chain-of-thought processing blocks real-time user intervention. Safety-critical for production use. |
| [#3447](https://github.com/QwenLM/qwen-code/issues/3447) **上下文爆满不自动压缩** | @ltx-2000 | Long-running task degradation; `/compress` non-functional. Regression in context management. |
| [#3282](https://github.com/QwenLM/qwen-code/issues/3282) **MiniMax-2.7 上下文压缩报错** | @wwsinagogogo | 100% reproducible token counting bug with third-party model. Tagged `welcome-pr`. |
| [#2251](https://github.com/QwenLM/qwen-code/issues/2251) **VSCode extension connection errors** | @skushneryuk | Persistent IDE connectivity issues; `/ide enable` fails to resolve. |

---

## 4. Key PR Progress

### VSCode Companion Authentication Overhaul
| PR | Author | Description | Status |
|----|--------|-------------|--------|
| [#3398](https://github.com/QwenLM/qwen-code/pull/3398) | @yiliang114 | **Replace OAuth with Coding Plan / API Key provider setup** — interactive QuickPick flow mirroring CLI `/auth` | 🔥 Critical path |
| [#2593](https://github.com/QwenLM/qwen-code/pull/2593) | @yiliang114 | Support `/insight` command in VSCode Companion with ACP progress streaming | 0.15.0 milestone |
| [#2592](https://github.com/QwenLM/qwen-code/pull/2592) | @yiliang114 | Support `/export` session command with IDE-native save UX | 0.15.0 milestone |
| [#2548](https://github.com/QwenLM/qwen-code/pull/2548) | @yiliang114 | Expose `/skills` as slash command with secondary picker | 0.15.0 milestone |
| [#3450](https://github.com/QwenLM/qwen-code/pull/3450) | @yiliang114 | **Fix split stream message ordering** — prevents timeline corruption in streamed responses | Fresh |

### Core & CLI Improvements
| PR | Author | Description | Status |
|----|--------|-------------|--------|
| [#3292](https://github.com/QwenLM/qwen-code/pull/3292) | @reidliu41 | **Session rewind and restore flows** — browse history, pick previous prompts to restore state | Active review |
| [#3448](https://github.com/QwenLM/qwen-code/pull/3448) | @yiliang114 | **`--bare` startup mode** — explicit-only path for CI/scripted usage, skips all auto-discovery | Fresh |
| [#3451](https://github.com/QwenLM/qwen-code/pull/3451) | @yiliang114 | **Normalize Windows PATH for MCP stdio servers** — fixes VSCode-hosted environment conflicts | Fresh |
| [#3160](https://github.com/QwenLM/qwen-code/pull/3160) | @wenshao | **PDF text extraction fallback + Jupyter notebook parsing** — enables text-only models to handle PDFs via extraction; structured `.ipynb` reading | Active |
| [#3214](https://github.com/QwenLM/qwen-code/pull/3214) | @scrollDynasty | **Replace fdir with `git ls-files` + ripgrep fallback** — respects `.gitignore`, massive performance win for large repos | Active |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Authentication flexibility** | [#2134](https://github.com/QwenLM/qwen-code/issues/2134), [#3398](https://github.com/QwenLM/qwen-code/pull/3398), [#1855](https://github.com/QwenLM/qwen-code/issues/1855) | 🔥🔥🔥 Critical — OAuth deprecation driving urgency |
| **VSCode Companion parity with CLI** | [#1985](https://github.com/QwenLM/qwen-code/issues/1985), [#2593](https://github.com/QwenLM/qwen-code/pull/2593), [#2592](https://github.com/QwenLM/qwen-code/pull/2592), [#2548](https://github.com/QwenLM/qwen-code/pull/2548) | 🔥🔥🔥 Major 0.15.0 theme |
| **Agent interruptibility & real-time control** | [#2786](https://github.com/QwenLM/qwen-code/issues/2786), [#1816](https://github.com/QwenLM/qwen-code/issues/1816) (Agent Swarm) | 🔥🔥 Safety and ergonomics priority |
| **Enterprise/self-hosted deployment controls** | [#3444](https://github.com/QwenLM/qwen-code/issues/3444) (disable slash commands), [#3018](https://github.com/QwenLM/qwen-code/issues/3018) (`/doctor` diagnostic) | 🔥🔥 Growing admin/ops demand |
| **Multimodal input (voice/image)** | [#2392](https://github.com/QwenLM/qwen-code/pull/2392), [#1232](https://github.com/QwenLM/qwen-code/pull/1232), [#3437](https://github.com/QwenLM/qwen-code/issues/3437) | 🔥🔥 Accessibility + debugging use cases |
| **Session management & observability** | [#3292](https://github.com/QwenLM/qwen-code/pull/3292), [#3394](https://github.com/QwenLM/qwen-code/pull/3394) (Arena comparison) | 🔥 Productivity tooling maturation |

---

## 6. Developer Pain Points

### P0: Authentication System Reliability
> **"Login successful → 401 on every request"**

The dominant failure mode suggests **token lifecycle desync** between frontend state and backend validation. Affects:
- OAuth session handoff to Coding Plan (#1855, now closed but pattern persists)
- Token refresh on VSCode Companion (#3418, #3452)
- Cross-version persistence (#3432 on v0.13.1, #3440 on v0.14.2)

**Root hypothesis:** OAuth deprecation without clean migration path; token storage format change; or backend certificate rotation.

### P1: Context Management at Scale
- **Auto-compression failures** (#3447): Long sessions degrade without `/compress` working
- **MiniMax-2.7 token counting bug** (#3282): Third-party model integration fragility
- **Context window exhaustion UX**: No graceful degradation path visible to users

### P2: IDE Extension Stability
- Connection errors post-OAuth (#2251)
- Hook execution inconsistency between CLI and VSCode (#3205, closed but related)
- Stream ordering bugs (#3450 fix in progress)

### P3: Policy Uncertainty
- Free tier reduction proposal (#3203, 102 comments) creates **adoption risk** for individual developers and open-source contributors
- No clear communicated timeline for OAuth sunset vs. migration tooling availability

---

*Digest compiled from github.com/QwenLM/qwen-code activity on 2026-04-19/20. For real-time updates, monitor [#3398](https://github.com/QwenLM/qwen-code/pull/3398) (auth overhaul) and the [401 authentication meta-issue cluster](https://github.com/QwenLM/qwen-code/issues?q=is%3Aissue+401+invalid+access+token).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*