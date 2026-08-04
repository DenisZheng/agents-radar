# AI CLI Tools Community Digest 2026-08-04

> Generated: 2026-08-04 01:55 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison — 2026-08-04

---

## 1. Ecosystem Overview

The AI CLI landscape has coalesced around **nine active projects** spanning first-party vendor tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Qwen Code) and community-driven alternatives (OpenCode, Kimi Code, Pi, DeepSeek TUI). All are converging on a common feature set: **multi-session orchestration, human-in-the-loop steering, usage transparency, and protocol-standardized tool integration (MCP/ACP)**. Release cadences range from daily alphas (OpenAI Codex) to weekly stables (Claude Code, GitHub Copilot CLI), with Windows/WSL parity and enterprise readiness now baseline expectations rather than differentiators. The ecosystem is shifting from "single-agent chat" toward **"agent runtime platforms"** with persistent sessions, verifiable tool boundaries, and cross-tool interoperability.

---

## 2. Activity Comparison

| Tool | Hot Issues (Top 10) | PRs Updated (24h) | Release Status (24h) | Top Issue Engagement |
|------|---------------------|-------------------|----------------------|----------------------|
| **Claude Code** | 10 | 2 (docs only) | **v2.1.221** stable | 61 comments, 20👍 (#24798) |
| **OpenAI Codex** | 10 | 12 (merged) | 2 alphas (`0.147.0-alpha.6/.1.2`) | 88 comments, 78👍 (#20214) |
| **Gemini CLI** | 10 | 10 | None | 12 comments, 2👍 (#22323) |
| **GitHub Copilot CLI** | 10 | 0 | **v1.0.78** + patch `v1.0.78-3` | 20👍, 7 comments (#3282) |
| **Kimi Code CLI** | 3 | 8 | None | 15 comments (#1283) |
| **OpenCode** | 10 | 10 | **v1.18.12** stable | 67 comments, 123👍 (#27167) |
| **Pi** | 10 | 10 | None (server backend WIP) | 20 comments (#6187) |
| **Qwen Code** | 10 | 10 | **v0.21.4** stable; v0.21.5 failed CI | 13 comments (#8102) |
| **DeepSeek TUI** | 10 | 10 | v0.9.4 train (77 commits, PR #5135) | 13 comments (#3192) |

**Key signal**: OpenAI Codex and DeepSeek TUI show highest *code velocity* (merged PRs/commits); OpenCode and Claude Code show highest *community gravity* (upvotes/comment depth).

---

## 3. Shared Feature Directions

| Direction | Tools Demanding | Specific Needs |
|-----------|----------------|----------------|
| **Multi-session orchestration** | Claude Code, OpenCode, Gemini CLI, OpenAI Codex, Qwen Code | Inter-session messaging, real-time steering, cross-session hooks, session branching/forking |
| **Usage transparency & cost control** | Claude Code, OpenAI Codex, GitHub Copilot CLI, OpenCode | Quota APIs, per-session token accounting, idle consumption visibility, enterprise billing integration |
| **Human-in-the-loop steering** | Claude Code, DeepSeek TUI, OpenAI Codex, GitHub Copilot CLI | Priority interrupt channels, reliable stop hooks, `/stop` commands, mid-execution course correction |
| **Windows/WSL first-class support** | Claude Code, OpenAI Codex, Kimi Code, Pi, DeepSeek TUI, Qwen Code | Path translation, terminal key mapping, process management, signed binaries, WSL auth flow |
| **Protocol standardization (MCP/ACP)** | DeepSeek TUI, Kimi Code, Qwen Code, OpenAI Codex, Claude Code, GitHub Copilot CLI | ACP registry inclusion, MCP OAuth 2.1, tool exposure controls, provider-agnostic tool calling |
| **Persistent session memory** | OpenCode, Kimi Code, DeepSeek TUI, Qwen Code, Claude Code | Cross-restart context, goal tracking (`/goal`), memory redaction, compaction survival |
| **Local/BYOK model flexibility** | GitHub Copilot CLI, OpenCode, OpenAI Codex, DeepSeek TUI | Multi-model switching mid-session, local provider picker, custom endpoint config, credential helpers |
| **Trustworthy/verifiable runtimes** | Qwen Code, Claude Code, Gemini CLI, DeepSeek TUI | Deterministic tool boundaries, hook reliability, reasoning signature preservation, audit trails |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|---------------|-------------|-------------------|
| **Claude Code** | Enterprise team workflows, VSCode integration, hook-based extensibility | Professional dev teams, orgs needing auditability | Tight Anthropic model coupling; system prompt policy enforcement; Focus View for noise reduction |
| **OpenAI Codex** | Desktop app UX, multi-agent routing (Luna/V1/V2), alpha-speed iteration | Early adopters, Windows-centric users | Rust-based desktop; dual WebSocket transport; Guardian review layer; background Responses API |
| **Gemini CLI** | Agent reliability, evaluation infrastructure, security hardening | Google Cloud shops, safety-critical workflows | Component-level evals (76 tests/6 models); Auto Memory with redaction; Cloud Run Caretaker pipeline |
| **GitHub Copilot CLI** | Terminal-native UX, BYOK/model flexibility, enterprise CI/CD | GitHub ecosystem users, terminal purists | Live tool-duration headers; `/new-worktree`; plugin auto-update; `GITHUB_TOKEN` MCP auth |
| **Kimi Code CLI** | Web UI + CLI duality, persistent memory, ACP compliance | Chinese-market developers, cross-device users | Moonshot Platform integration; `kosong` SDK; Web UI session management; GBK/legacy console fixes |
| **OpenCode** | Session goals, provider flexibility, desktop parity, i18n | Power users wanting "companion" agents | Goal-loop runtime API; `{cmd:}` credential helpers; Simplified Chinese TUI; localhost preview panel |
| **Pi** | WSL/Windows path correctness, compaction reliability, JSON streaming perf | Infrastructure-focused, self-hosted runners | Harness v2 storage abstraction; linear JSON delta streaming; server session backend; symlink-aware discovery |
| **Qwen Code** | Web Shell desktop app, trustworthy runtime boundaries, multimodal | Alibaba Cloud users, async/background workflows | Native Web Shell lifecycle; deterministic tool-execution sandbox; audio bridge; Bailian token integration |
| **DeepSeek TUI** | ACP ecosystem integration, runtime API completeness, autonomous safety | Zed/ACP editor users, Chinese localization | Runtime API (goal/MCP/memory/skills); verifier receipts; universal `/stop`; clippy lint hygiene |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum / Enterprise-Ready** | **Claude Code**, **GitHub Copilot CLI** | Stable weekly releases; highest upvote counts on enterprise blockers (quota API, GitHub connector); v1.x versioning |
| **High Velocity / Rapid Iteration** | **OpenAI Codex**, **DeepSeek TUI**, **Qwen Code** | Daily/alpha releases; 10+ merged PRs/24h; 77-commit release trains; CI stabilization sprints |
| **Strong Community Gravity** | **OpenCode**, **Claude Code** | 100+ 👍 on top issues; 60+ comment threads; users building DIY coordination layers |
| **Emerging / Niche Strength** | **Pi**, **Kimi Code**, **Gemini CLI** | Focused technical debt paydown (Pi JSON streaming, Kimi encoding, Gemini eval infra); smaller but deep engagement |
| **Maturity Signal**: GitHub Copilot CLI (v1.0.78) and Claude Code (v2.1.x) show production hardening; OpenAI Codex (0.147 alpha) and DeepSeek TUI (v0.9.4 train) signal pre-1.0 feature completeness pushes.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Multi-session orchestration is table stakes** | 5/9 tools have high-engagement issues; users building Redis/file/hook workarounds | Tools lacking native session messaging will lose power users; expect protocol standardization (ACP session/prompt) |
| **Usage transparency = enterprise gate

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-08-04 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **skill-creator evaluation fixes** ([#1298](https://github.com/anthropics/skills/pull/1298), [#1323](https://github.com/anthropics/skills/pull/1323), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#1261](https://github.com/anthropics/skills/pull/1261), [#539](https://github.com/anthropics/skills/pull/539)) | Core tooling that generates/optimizes skill descriptions; `run_eval.py` measures trigger recall/precision | **Highest ecosystem impact** — 3 linked issues (#556, #1169, #1061) total 18+ comments; fixes 0% recall bug, Windows subprocess/encoding crashes, trigger detection, and test isolation | Open |
| 2 | **self-audit / reasoning quality gate** ([#1367](https://github.com/anthropics/skills/pull/1367)) | Mechanical file verification → four-dimension reasoning audit (correctness, completeness, safety, clarity) before delivery | Directly implements community proposal [#1385](https://github.com/anthropics/skills/issues/1385); universal, stack-agnostic quality gate | Open |
| 3 | **plan-file-hygiene** ([#1479](https://github.com/anthropics/skills/pull/1479)) | Lifecycle management for planning artifacts (creation, update, archival, cleanup) | Addresses [#1417](https://github.com/anthropics/skills/issues/1417); community-identified "planning artifact accumulation" gap | Open |
| 4 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | Full testing stack: Trophy model, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing | Comprehensive reference skill; covers philosophy → practice across unit/component/integration/E2E | Open |
| 5 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | Prevents orphans, widows, numbering misalignment in AI-generated documents | Solves "every document Claude generates" pain point; practical quality-of-life skill | Open |
| 6 | **color-expert** ([#1302](https://github.com/anthropics/skills/pull/1302)) | Color naming systems (ISCC-NBS, Munsell, XKCD, RAL, CSS), color spaces, accessibility, gradients, palettes | Self-contained expertise skill for any color-related task; recent active discussion (updated 2026-07-21) | Open |
| 7 | **skill-quality-analyzer & skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) | Meta-skills: 5-dimension quality scoring (structure, examples, resources, triggers, maintainability) + security scanning (injection, secrets, permissions) | Addresses trust/safety gaps raised in [#492](https://github.com/anthropics/skills/issues/492); marketplace infrastructure | Open |
| 8 | **ODT skill** ([#486](https://github.com/anthropics/skills/pull/486)) | Create, fill, read, convert OpenDocument Format (.odt, .ods) via pyodf/mcp | ISO-standard document support; triggers on "ODT", "OpenDocument", "LibreOffice" | Open |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence (Issue / Comments / 👍) | Core Ask |
|-------|----------------------------------|----------|
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43💬, 2👍), [#1175](https://github.com/anthropics/skills/issues/1175) | Community skills masquerading under `anthropic/` namespace; need namespace isolation, signing, or verification |
| **Org-Wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16💬, 8👍) | Native shared skill library / direct sharing links in Claude.ai (currently manual file transfer) |
| **skill-creator Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12💬, 7👍), [#1169](https://github.com/anthropics/skills/issues/1169) (3💬), [#1061](https://github.com/anthropics/skills/issues/1061) (3💬, 2👍), [#202](https://github.com/anthropics/skills/issues/202) (8💬) | 0% recall on Windows/Unix; description-optimization loop broken; Windows PATHEXT/encoding/subprocess bugs |
| **Duplicate/Plugin Management** | [#189](https://github.com/anthropics/skills/issues/189) (6💬, 9👍) | `document-skills` and `example-skills` install identical content → context window pollution |
| **Context Window Efficiency** | [#1487](https://github.com/anthropics/skills/issues/1487) (4💬), [#1329](https://github.com/anthropics/skills/issues/1329) (9💬) | `claude-api` injects 156k tokens; need compact-memory / symbolic notation for long-running agents |
| **MCP & Platform Integration** | [#16](https://github.com/anthropics/skills/issues/16) (4💬), [#29](https://github.com/anthropics/skills/issues/29) (4💬) | Expose skills as MCPs; Bedrock/AWS support |
| **Agent Governance & Quality Gates** | [#412](https://github.com/anthropics/skills/issues/412) (6💬), [#1385](https://github.com/anthropics/skills/issues/1385) (4💬) | Policy enforcement, threat detection, audit trails; pre-task calibration → adversarial review → delivery verification pipeline |

---

## 3. High-Potential Pending Skills (Active PRs, Not Yet Merged)

| PR | Skill | Why It’s Poised to Land |
|----|-------|-------------------------|
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | Addresses explicit community gap (#1417); recent (Jul 2026); clear lifecycle model |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit (quality gate)** | Implements approved proposal (#1385); universal applicability; mechanical + reasoning layers |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Self-contained, no external deps; active iteration (updated Jul 21); broad design/dev utility |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive reference skill; fills testing methodology gap; well-structured |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Solves universal AI-doc problem; low complexity, high user visibility |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT skill** | Standards-based format support; MCP integration ready; active maintainer (kitao) |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | Direct response to top security issue (#492); marketplace infrastructure |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel (retro game dev)** | Novel domain (game dev); MCP-backed; active author (kitao/pyxel-mcp) |

*Infrastructure PRs likely to merge first:* **[#1298](https://github.com/anthropics/skills/pull/1298), [#1323](https://github.com/anthropics/skills/pull/1323), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#1261](https://github.com/anthropics/skills/pull/1261)** — unblock skill creation for all contributors.

---

## 4. Skills Ecosystem Insight

> **The community’s most concentrated demand is fixing the

---

# Claude Code Community Digest — 2026-08-04

---

## 1. Today's Highlights

- **v2.1.221 released** with a new VSCode **Focus view** (`Ctrl+Alt+F`) that collapses per-turn tool activity into expandable summaries with a live running-tool indicator, plus Linux sandbox credential masking support.
- **Multi-session coordination** dominates community discussion: three high-engagement issues (#24798, #30492, #76727) converge on the need for inter-session communication, real-time steering, and cross-session hooks — signaling a shift toward team-scale, parallel Claude workflows.
- **Opus 4.8/5.0 model behavior regressions** draw sharp scrutiny: confabulation reports (#67606), silent prompt injections overriding delegation policy (#80988), and forced model migration complaints (#83683) indicate stability concerns in the latest model rollout.

---

## 2. Releases

### v2.1.221
| Change | Details |
|--------|---------|
| **VSCode Focus View** | New chat-menu toggle (`Ctrl+Alt+F` / `Claude Code: Toggle Focus view`) hides tool activity behind per-turn expandable summaries with a live running-tool indicator. Reduces visual noise during long agent runs. |
| **Sandbox Credential Masking (Linux)** | Added `mode: "mask"` for sandbox credential files, improving secrets handling in containerized Linux environments. |

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#24798](https://github.com/anthropics/claude-code/issues/24798) | **Inter-session communication for multi-Claude workflows** | Enables sequencing dependent tasks across parallel sessions — critical for large-project orchestration. | 61 comments, 20 👍 — highest engagement; users describe DIY workarounds (files, Redis, hooks) as fragile. |
| [#30492](https://github.com/anthropics/claude-code/issues/30492) | **Real-time steering: priority message channel for redirecting Claude mid-execution** | Allows human-in-the-loop course correction during long pipelines/refactors without killing the session. | 31 comments, 60 👍 — strongest upvote signal; "essential for production use" sentiment. |
| [#5674](https://github.com/anthropics/claude-code/issues/5674) | **Persistent ECONNRESET on macOS network connections** | Long-standing macOS-only disconnect bug disrupting tasks; unaffected on Windows/Linux same network. | 52 comments, 48 👍 — 1+ year old; users report VPN, firewall, and energy-saver interactions. |
| [#71542](https://github.com/anthropics/claude-code/issues/71542) | **GitHub connector links but cannot access ANY repository content** | Account-wide regression: OAuth succeeds but all repo reads fail (public & private). Blocks GitHub-integrated workflows. | 48 comments, 42 👍 — recent (Jun 26), high urgency; "recent regression" tag suggests v2.1.x correlation. |
| [#13585](https://github.com/anthropics/claude-code/issues/13585) | **Add quota/usage information access to CLI** | No programmatic way to check token consumption, limits, or remaining quota — blind spot for automation & cost control. | 24 comments, 115 👍 — highest upvote count; "blocker for enterprise adoption" cited. |
| [#80988](https://github.com/anthropics/claude-code/issues/80988) | **v2.1.219 `heron_brook` prompt silently overrides delegation policy for Opus 5** | System prompt injects "Do not call AgentTool unless user requested it" with no opt-out, breaking configured agent delegation. | 15 comments, 33 👍 — silent behavior change; users call it "policy violation without consent." |
| [#67606](https://github.com/anthropics/claude-code/issues/67606) | **Opus 4.8 confabulates user messages, fake prompt-injection narratives, fabricated tool facts** | Two independent sessions produced hallucinated conversation history and false security alerts in long runs. | 15 comments, 4 👍 — JSONL-verified; raises trust concerns for autonomous workflows. |
| [#76727](https://github.com/anthropics/claude-code/issues/76727) | **Cross-session coordination for independently-launched sessions** | Shared working tree + multiple sessions = race conditions; only primitive is `PreToolUse deny` hooks with "silent holes." | 9 comments — author invested significant effort documenting hook gaps; practical pain point for power users. |
| [#82506](https://github.com/anthropics/claude-code/issues/82506) | **Claude Max session limit consumed without usage** | Subscription quota drains inexplicably; users report limits hit despite minimal activity. | 12 comments, 6 👍 — billing trust issue; correlates with #65687 (idle token spike). |
| [#83687](https://github.com/anthropics/claude-code/issues/83687) | **Stop hook exit-2 verdict discarded when turn ends on tool result with pending ScheduleWakeup** | Hook enforcement silently fails in specific async boundary condition; no `stop_hook_summary` logged. | 2 comments, new (Aug 4) — subtle but dangerous: validation logic bypassed without visibility. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#83374](https://github.com/anthropics/claude-code/pull/83374) | **docs(plugin-dev): document `MessageDisplay` streaming semantics** | Adds missing `MessageDisplay` hook event to bundled plugin-dev guidance (trigger description, event guidance, quick-ref table). | Open, updated Aug 3 |
| [#77977](https://github.com/anthropics/claude-code/pull/77977) | **docs(plugin-dev): document `skipLfs` marketplace sources** | Documents `skipLfs` option for `github`/`git` marketplace sources with examples for shorthand and generic Git URLs. Refs #63035. | Open, updated Aug 3 |

> **Note**: Only 2 PRs updated in last 24h — both documentation-only. Core engineering focus appears on issue triage and v2.1.221 stabilization.

---

## 5. Feature Request Trends (Distilled from All Issues)

| Trend | Representative Issues | Signal |
|-------|----------------------|--------|
| **Multi-session orchestration** | #24798, #30492, #76727, #82323 | 3 high-engagement issues + hook gaps; users building ad-hoc coordination layers. |
| **Usage transparency & cost control** | #13585 (115 👍), #65687, #82506, #81015 | Highest upvotes; quota API, idle consumption, token scoping all point to "show me what I'm spending." |
| **Human-in-the-loop steering** | #30492 (60 👍), #83687 | Priority channel + hook reliability = demand for interruptible, observable agent runs. |
| **Model behavior stability / opt-out** | #80988, #67606, #83683 | Silent prompt injections, confabulation, forced model migration erode trust. |
| **GitHub/MCP integration reliability** | #71542, #80874, #66010, #76040, #81965 | Connector regressions, OAuth scope mismatches, MCP spec changes breaking servers. |
| **Windows/WSL parity** | #83366, #80468, #80584, #83656 | Agent spawn failures, unsigned binaries, HCS issues, desktop crashes — platform gaps persist. |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Silent behavior changes / no opt-out** | High | #80988 (`heron_brook` injection), #83683 (forced Opus 5), #67606 (model confabulation) — users feel agency removed. |
| **Hook system fragility** | High | #82323 (valid hook never fires), #83687 (stop hook discarded), #76727 (hook "silent holes"), #75081 (schema error disables all hooks). |
| **Quota opacity & anomalous consumption** | High | #13585 (no CLI access), #65687 (idle spike), #82506 (limit consumed unused), #81015 (token scope mismatch). |
| **macOS network instability** | Chronic | #5674 (13 months, 48 👍), ECONNRESET only on macOS — blocks reliable long runs. |
| **GitHub/MCP integration regressions** | Rising | #71542 (total read failure), #80874 (write 403), #66010 (GMail privacy), #76040 (schema $ref), #81965 (stateless MCP breakage). |
| **Windows/WSL second-class support** | Persistent | #83366 (agent spawn hang), #80468 (desktop crash), #80584 (HCS), #83656 (unsigned binary) — basic reliability gaps. |
| **Mobile ↔ desktop session sync failures** | Emerging | #83378 (duplicate sessions), #83677 (401 after token rotation, single-session) — bridge binding not surviving auth rotation. |

---

*Digest generated from GitHub data as of 2026-08-04. Links point to live issues/PRs on `anthropics/claude-code`.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-04

---

## 1. Today's Highlights

Two alpha CLI releases (`0.147.0-alpha.6` and `0.147.0-alpha.1.2`) shipped in the last 24 hours alongside a wave of internal PRs merging improvements to agent identification, MCP conformance, session persistence, and Git process hygiene. Community attention remains focused on Windows stability (freezes, OneDrive disconnects, slow thread switching), multi-agent model routing bugs (Luna/V1/V2 mismatch), and the weekly usage limit draining at the old 5-hour rate. A long-standing RTL support request for Arabic/Hebrew and multi-account authentication continue to gather strong community backing.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.147.0-alpha.6` | Alpha CLI | Incremental alpha; see [release notes](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6) |
| `rust-v0.147.0-alpha.1.2` | Alpha CLI | Incremental alpha; see [release notes](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.1.2) |

*No stable release in the last 24h. Alpha cadence suggests active iteration on the 0.147 series.*

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#20214](https://github.com/openai/codex/issues/20214) | **Codex App frequently freezes/stutters on Windows 11 Pro** | Core desktop usability blocker on Windows; affects Pro/Plus users on modern hardware. | 88 comments, **78 👍** — highest engagement in dataset |
| [#35420](https://github.com/openai/codex/issues/35420) | **Work/Codex stream disconnects on OneDrive-backed workspaces** | Breaks cloud-synced workflows; OneDrive degradation cascades into Codex failures. | 30 comments — active investigation |
| [#33685](https://github.com/openai/codex/issues/33685) | **Weekly limit draining like the old 5-hour limit** | Usage accounting regression; users hit caps far faster than expected post-limit change. | 25 comments, **10 👍** |
| [#19504](https://github.com/openai/codex/issues/19504) | **Add full RTL support for Arabic & Hebrew** | Accessibility/internationalization gap; text renders misaligned in chat & codex panels. | 24 comments, **19 👍** — tagged "Papercuts 2026" |
| [#12098](https://github.com/openai/codex/issues/12098) | **Tabbed interface for parallel chat sessions (VS Code/Cursor)** | Workflow friction: switching chats requires multi-step UI navigation. | 20 comments, **55 👍** — strong IDE-extension demand |
| [#25779](https://github.com/openai/codex/issues/25779) | **Unbounded session/turn state causes freezes, context bloat** | Meta-bug linking memory growth to UI hangs and lost turn control. | 15 comments, **8 👍** |
| [#35097](https://github.com/openai/codex/issues/35097) | **gpt-5.6-luna marked as V1; V2 spawn_agent rejects it** | Multi-agent routing broken: Luna cannot be spawned as child under V2 runtime. | 14 comments, **37 👍** |
| [#12029](https://github.com/openai/codex/issues/12029) | **Ability to use more than one account (personal + corporate)** | Blocker for developers juggling org policies/billing on one machine. | 12 comments, **62 👍** |
| [#28080](https://github.com/openai/codex/issues/28080) | **Desktop thread tools lose handlers (`No handler registered`) on Windows** | Tool-call reliability issue mid-session; Windows-specific. | 12 comments |
| [#29187](https://github.com/openai/codex/issues/29187) | **Codex Desktop thread switching consistently slow on Windows** | UX degradation; impacts multi-thread workflows. | 10 comments, **4 👍** |

---

## 4. Key PR Progress (Notable Merges in Last 24h)

| PR | Area | Summary |
|----|------|---------|
| [#36815](https://github.com/openai/codex/pull/36815) | Agent/Token Budget | Identify agents by canonical path in `<context_window>` metadata; root → `/root`, subagents → their path. |
| [#36812](https://github.com/openai/codex/pull/36812) | Transport | Dual-WebSocket transport for code mode: separates large nested-tool callbacks from session operations. |
| [#36811](https://github.com/openai/codex/pull/36811) | Shell Policy | Honor per-environment `allow_login_shell`; expose `login` arg for shell tools when permitted. |
| [#36810](https://github.com/openai/codex/pull/36810) | MCP Conformance | Regression gate running Codex against pinned official MCP client suite (HTTP/stdio, OAuth, multiple protocol versions). |
| [#36809](https://github.com/openai/codex/pull/36809) | Session Persistence | `exec resume --last` now queries state DB first, avoiding full rollout scan. |
| [#36808](https://github.com/openai/codex/pull/36808) | Session Archive | Archive/delete/unarchive commands resolve targets from SQLite before falling back to rollout scanning. |
| [#36807](https://github.com/openai/codex/pull/36807) | Audio/Utils | New `codex-utils-audio` crate for canonicalizing audio inputs & token estimation. |
| [#36800](https://github.com/openai/codex/pull/36800) | Permissions | Track approved command prefixes separately; emit only new prefixes after exec-policy amendment (avoids reinjecting full permissions blob). |
| [#36796](https://github.com/openai/codex/pull/36796) | Agent Plugins | Parse Agent Plugins v1 `mcp.json` into Codex MCP config (stdio/HTTP, `PLUGIN_ROOT`/`PLUGIN_DATA` expansion). |
| [#36793](https://github.com/openai/codex/pull/36793) | Git Hygiene | Timed-out Git metadata commands now run in dedicated process group (Unix) / Job Object (Windows) to ensure cleanup. |
| [#36792](https://github.com/openai/codex/pull/36792) | Model Capabilities | Gate plugin usage instructions via `include_plugin_usage_instructions` model metadata flag (default false). |
| [#36787](https://github.com/openai/codex/pull/36787) | Model Instructions | Consolidate instructions into `ModelMessages.instructions_template`; remove `ModelInfo.base_instructions`. |
| [#36782](https://github.com/openai/codex/pull/36782) | Guardian/Tests | Add tests for Guardian session reuse (consecutive reviews) and interruption (aborted tool results). |
| [#36781](https://github.com/openai/codex/pull/36781) | MCP Exposure | Per-surface MCP tool exposure controls via `omit_tools_from` (direct, search, code-mode). |
| [#36772](https://github.com/openai/codex/pull/36772) | Codex Apps | Raise host-owned `codex_apps` catalog limit from 2,048 → 8,192 items; standard MCP limit unchanged. |

*Most PRs authored by `copyberry[bot]` — internal automation/merge bot. High volume indicates active stabilization sprint.*

---

## 5. Feature Request Trends (Distilled from Issues)

1. **Multi-account / Multi-org Authentication** — #12029 (62 👍), #30418 (Gmail multi-account). Developers need simultaneous personal + corporate identities with isolated billing/policies.
2. **Parallel Session UX** — #12098 (tabbed chats in IDE), #24224 (workspace leak across concurrent sessions). Demand for true multi-thread/multi-project workflows.
3. **Internationalization & Accessibility** — #19504 (RTL for Arabic/Hebrew), #36819 (Arabic audio → Excel). Growing non-English user base hitting rendering/input gaps.
4. **Usage Transparency & Attribution** — #33685 (weekly limit regression), #32791 (missing 5-hr limit), #28985 (account-wide usage by client/session/timestamp). Users want granular, trustworthy quota dashboards.
5. **Model/Agent Routing Flexibility** — #35097, #36294, #34964 (Luna V1/V2 mismatch), #34700. Multi-agent runtime maturity blocked by static catalog mismatches.
6. **Windows-First Polish** — #20214, #28080, #29187, #28457, #34652, #35393. Cluster of freezes, handler loss, slow switching, sandbox helper missing, SSH approval broken, timeout orphans.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Windows Desktop Instability** | 6+ high-comment issues (#20214, #28080, #29187, #28457, #34652, #35393) covering freezes, handler loss, slow thread switching, missing sandbox binaries, broken SSH approvals, timeout orphans | Blocks daily driver adoption on Windows; "frequently freezes" is the top-voted issue |
| **Usage Limit Opacity & Regression** | #33685 (weekly draining at 5-hr rate), #32791 (5-hr limit vanished), #24818 (drain when idle), #28985 (no attribution) | Users cannot predict or audit consumption; trust erosion |
| **Multi-Agent Routing Broken** | #35097, #36294, #34964, #34700 — Luna cataloged as V1 but V2 runtime expects V2 | Prevents composing agents; "spawn_agent rejects Luna" is a hard block |
| **No Multi-Account Support** | #12029 (62 👍), #30418 — personal vs corporate accounts on one machine | Forces workarounds (multiple machines, browser profiles); cited as "blocker for real-world use" |
| **Session State Bloat & Leaks** | #25779 (unbounded state → freezes), #24224 (workspace leak across projects), #34453 (Full Access reverts on restart) | Long autonomous runs unreliable; context pollution across projects |
| **IDE Extension UX Gaps** | #12098 (no tabs, 55 👍), #10562 (ghost suggestions in CLI, 12 👍) | Friction in core developer loop; "multiple steps to switch chats" |

---

*Digest compiled from GitHub data (issues, PRs, releases) for `openai/codex` as of 2026-08-04. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-04

## 1. Today's Highlights
The project is heavily focused on **agent reliability and infrastructure hardening** this cycle. Key work streams include fixing subagent termination reporting (false "GOAL" success), resolving shell hangs after command completion, and hardening the extensions stack against malformed GitHub API responses. Simultaneously, the team is landing support for **Gemini 3.6 Flash and 3.5 Flash-Lite** models and rolling out Cloud Run deployment automation for the Caretaker evaluation pipeline.

## 2. Releases
No new releases published in the last 24 hours.

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports `GOAL` success after hitting `MAX_TURNS`** | Masks real failures; breaks trust in automated workflows and eval pipelines. | 12 comments, 2 👍 — P1, needs retest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Blocks core delegation path; users must disable subagents to proceed. | 8 comments, 8 👍 — P1, high user pain |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution stuck at “Waiting input” after command finishes** | Frequent, non-deterministic hang on trivial commands; degrades daily UX. | 4 comments, 3 👍 — P1, medium effort |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations (EPIC)** | Scaling eval infra from 76 behavioral tests across 6 models; critical for release confidence. | 7 comments — P1, AIQ/eval infra |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions forever** | Wastes quota/compute; pollutes memory with noise. | 5 comments — P2 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory redaction happens post-context; logging leaks** | Security risk: secrets enter model context before redaction; logs may persist them. | 4 comments — P2, security |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error when >128 tools available** | Tool explosion breaks agent; needs smarter scoping/pruning. | 3 comments — P2 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Model rarely invokes skills/sub-agents autonomously** | Undermines the extensibility model; users must explicitly prompt. | 6 comments — P2 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores `settings.json` overrides (e.g., `maxTurns`)** | Configuration drift; users cannot constrain browser agent behavior. | 3 comments — P2, needs retest |
| [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | **Subagents run without permission since v0.33.0** | Regression: agents spawn despite `agents.mode: disabled` in config. | 3 comments — P2, needs retest |

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Summary | Area |
|---|----|---------|------|
| [#28673](https://github.com/google-gemini/gemini-cli/pull/28673) | **Add Gemini 3.6 Flash & 3.5 Flash-Lite model configs** | New model definitions, capabilities (`thinking`, `multimodalToolUse`), aliases, Code Assist mappings. | `core` |
| [#28671](https://github.com/google-gemini/gemini-cli/pull/28671) | **Resolve context corruption & quota-error fallback** | Defensive history hardening; fixes prefix-continuation bugs when tool calls are interrupted. | `core`, `cli` |
| [#28672](https://github.com/google-gemini/gemini-cli/pull/28672) | **Repair `/compress` session reload & quota-fallback tool response loss** | Two fixes: compression reload crash + tool response loss during model fallback. | `core`, `cli` |
| [#28657](https://github.com/google-gemini/gemini-cli/pull/28657) / [#28663](https://github.com/google-gemini/gemini-cli/pull/28663) | **Harden `fetchJson` against malformed GitHub JSON/stream failures** | Prevents uncaught `JSON.parse` exceptions from crashing extension ops. | `extensions` |
| [#28658](https://github.com/google-gemini/gemini-cli/pull/28658) | **Don’t start voice recording before providers ready** | Fixes race where Whisper/Live socket not ready; prevents dead recordings. | `core`, `extensions` |
| [#28660](https://github.com/google-gemini/gemini-cli/pull/28660) | **Keep SDK `sendStream` alive on malformed tool arguments** | Defensive parsing/validation; turns bad args into structured `functionResponse` errors. | `sdk`, `non-interactive` |
| [#28670](https://github.com/google-gemini/gemini-cli/pull/28670) | **Correct fallback on `MODEL_CAPACITY_EXHAUSTED` (429) for GCA agent mode** | Stops infinite retry loop; enables fallback to Flash models. | `core` |
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | **Refresh MCP OAuth tokens with stored client ID** | Fixes refresh failure that deleted credentials, forcing re-auth every start. | `core`, `security` |
| [#28586](https://github.com/google-gemini/gemini-cli/pull/28586) | **Preserve `thoughtSignature` in `functionCall` parts (fixes 400)** | Regression fix from v0.53.0; required for parallel tool calls. | `core` |
| [#28666](https://github.com/google-gemini/gemini-cli/pull/28666) | **Validate every workspace dir `GlobTool.execute()` will search** | Aligns validation with execution scope; prevents silent permission errors. | `core` |

## 5. Feature Request Trends
1. **Agent Observability & Control** — Strong demand for visible subagent trajectories (`/chat share` #22598), accurate termination reasons (#22323), and config-driven agent constraints (#22267, #22093).
2. **Native Bash/Tool Affinity** — Epic to leverage model’s POSIX tool chaining via zero-dependency sandboxing & post-execution intent routing (#19873, #22745, #22746).
3. **Memory System Maturity** — Auto Memory needs deterministic redaction, quarantine of invalid patches, and smarter session filtering (#26522, #26523, #26525, #26516).
4. **Evaluation Infrastructure** — Scaling component-level evals, behavioral test coverage, and Caretaker Cloud Run deployment (#24353, #28433, #28667, #28529).
5. **Terminal & UX Polish** — Flicker-free resize (#21924), external editor corruption fix (#24935), and TUI testing skill consolidation (#28669).

## 6. Developer Pain Points (Recurring Frustrations)
- **Silent Agent Failures**: Subagents report success while actually hitting turn limits or hanging (#22323, #21409, #21763).
- **Shell/Process Instability**: Commands complete but CLI hangs awaiting input; interactive prompts (Vite, etc.) freeze the agent (#25166, #22465).
- **Configuration Drift**: Agent settings (`maxTurns`, `agents.mode`) ignored at runtime (#22267, #22093, #20079 symlink issue).
- **Tool/Context Explosion**: 400 errors at >128 tools; model creates scattered tmp scripts; context corruption on fallback (#24246, #23571, #28671).
- **Security/Privacy Gaps**: Auto Memory sends unredacted secrets to model; OAuth refresh deletes tokens; MCP consent omits `env`/`cwd`/`headers` (#26525, #28481, #28664).
- **Extension Fragility**: Malformed GitHub JSON crashes extension operations (#28657, #28663).

---

*Generated from `google-gemini/gemini-cli` GitHub data (issues/PRs updated 2026-08-04).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-04

## Today's Highlights
- **v1.0.78 released** with live tool-duration headers (≥5 s), automatic first-party plugin updates at session start, and an experimental `/new-worktree` command for isolated conversations.  
- **Login UX improved**: browser flow now defaults for local desktop; interactive shell shortcut fires on Enter with an inline `$` hint.  
- Community focus remains on **multi-model/BYOK flexibility**, **plugin scoping**, and **terminal rendering polish** across Windows/WSL2.

---

## Releases
### v1.0.78 (2026-08-03)
| Change | Details |
|--------|---------|
| **Tool-duration timeline** | Right-aligned, live-updating headers for tool calls ≥5 s; disable via `/settings showToolDurations` |
| **Plugin auto-update** | First-party plugins refresh to latest at every session start |
| **`/new-worktree` (experimental)** | Creates a new git worktree and starts a fresh conversation in it |
| **Shell shortcut** | Enter launches interactive shell; inline hint appears when `$` is armed |
| **Login flow** | Browser-based authentication now default for local desktop |

[Release notes](https://github.com/github/copilot-cli/releases/tag/v1.0.78) · [v1.0.78-3 patch](https://github.com/github/copilot-cli/releases/tag/v1.0.78-3)

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#3282](https://github.com/github/copilot-cli/issues/3282) | **Multiple BYOK model support** | Users want to switch between custom/local models mid-session without restarting; currently blocked by single `COPILOT_MODEL` env var. | 20 👍, 7 comments |
| [#3709](https://github.com/github/copilot-cli/issues/3709) | **`/model` picker should include BYOK/local providers** | Complements #3282: the model switcher only lists GitHub-hosted models, hiding configured local endpoints. | 20 👍, 3 comments |
| [#1665](https://github.com/github/copilot-cli/issues/1665) | **Project/repo-scoped plugins** | Plugins are global per-user; teams need per-repo plugin sets for consistent tooling. **Closed** (likely shipped or superseded). | 18 👍, 14 comments |
| [#1464](https://github.com/github/copilot-cli/issues/1464) | **Skills beyond position ~32 invisible to model** | Token-budget truncation drops skills alphabetically past ~32; custom skills near position 36 never selected. | 7 👍, 6 comments |
| [#2714](https://github.com/github/copilot-cli/issues/2714) | **Toggle plugins enabled/disabled** | No way to disable a plugin without uninstalling; peers (Gemini, Claude Code) support this. | 11 👍, 2 comments |
| [#4313](https://github.com/github/copilot-cli/issues/4313) | **Scroll conversation history (mouse/PageUp/Down)** | Basic terminal UX gap: users cannot review prior turns without external scrollback. | 3 comments |
| [#2830](https://github.com/github/copilot-cli/issues/2830) | **Custom color themes** | Only `auto`/`dark`/`light` presets; no palette customization for multi-terminal workflows. | 6 👍, 2 comments |
| [#4328](https://github.com/github/copilot-cli/issues/4328) | **Ctrl+H misread as Ctrl+Backspace in WSL2** | `WT_SESSION` leak from Windows Terminal corrupts key decoding; breaks documented `ctrl+h` = delete char. | 2 comments |
| [#4298](https://github.com/github/copilot-cli/issues/4298) | **Sandbox config to selectively enable tools** | Enterprise/security teams need allow-lists for bundled tools in `settings.json`. | 1 👍, 1 comment |
| [#4346](https://github.com/github/copilot-cli/issues/4346) | **MCP registry 403 with `GITHUB_TOKEN` in Actions** | CI workflows using the new PAT-less auth cannot reach non-default MCP servers. | 0 comments (new, high CI impact) |

---

## Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## Feature Request Trends
1. **Multi-model / BYOK orchestration** — #3282, #3709, #4340 (resume with different model/reasoning)  
2. **Plugin lifecycle & scoping** — #1665 (repo-scoped), #2714 (enable/disable), #2286 (Windows symlinks)  
3. **Session & context control** — #1464 (skill visibility), #4334 (stash persistence across sessions), #4351 (cost accounting on compaction)  
4. **Terminal fidelity** — #4313 (scrollback), #4328 (key mapping), #2412/#4347 (table/Markdown rendering), #4352 (OSC progress bars)  
5. **Enterprise/CI hardening** — #4298 (tool sandbox), #4346 (MCP in Actions), #4349 (managed-settings enum validation)

---

## Developer Pain Points
| Area | Recurring Friction |
|------|---------------------|
| **Model switching** | Single BYOK model per session; no in-TUI picker for local providers; resume ignores `--model` flag. |
| **Plugin management** | Global install only; no enable/disable toggle; Windows symlink clones break. |
| **Skill discoverability** | Hard cutoff at ~32 skills; alphabetical ordering penalizes late-named skills. |
| **Terminal UX** | WSL2 key collisions, missing scrollback, table/link reflow during streaming, unwanted OSC progress bars. |
| **CI/CD integration** | `GITHUB_TOKEN` auth blocks MCP registry; managed-settings validation rejects valid enum values. |
| **Session hygiene** | Stashed prompts lost on switch; scheduled prompts clear queue; cost tracking drift on compaction. |

---

*Generated from `github/copilot-cli` data as of 2026-08-04 00:00 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-04

---

## 1. Today's Highlights
The project saw no new releases in the last 24 hours, but active maintenance continues with 8 pull requests updated and 3 issues receiving recent attention. Key fixes address Web UI session-switching hangs, CLI stream deadlocks on Windows, and console encoding crashes on legacy codepages. A long-standing feature request for a persistent **Memory System** (Issue #1283) remains open with 15 comments, signaling strong community interest in cross-session context retention.

---

## 2. Releases
*No new releases published in the last 24 hours.*

---

## 3. Hot Issues

| Issue | Summary | Why It Matters | Community Reaction |
|-------|---------|----------------|-------------------|
| **[#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)** Feature Request: Memory System — Persistent context across sessions | Proposes a comprehensive memory system (auto + manual) to retain project patterns, user preferences, and AI-managed notes across CLI sessions. | High-impact UX improvement; enables true "continuity" for developers working on long-lived projects. | 15 comments, created Feb 2026, updated Aug 3 — sustained discussion indicates strong demand. |
| **[#2573](https://github.com/MoonshotAI/kimi-cli/issues/2573)** Bug: Web UI "Connecting to session..." infinite spinner when switching sessions | Web UI (`kimi web`) hangs indefinitely on session switch; affects macOS 26.4, Chrome 150, CLI v1.48.0. | Blocks core Web UI workflow; Technical Preview users cannot reliably multi-session. | 1 comment, created Aug 1 — recent regression in a preview feature. |
| **[#2582](https://github.com/MoonshotAI/kimi-cli/issues/2582)** Bug: CLI stream hangs indefinitely during generation (Windows) | On Windows (v0.31.1, kimi-k2.7-code), the CLI stream deadlocks mid-generation, rendering the session unusable. | Critical reliability issue on Windows; potential stream/buffer handling bug in the Moonshot Platform integration. | 0 comments, created Aug 3 — fresh report, no workaround yet. |

---

## 4. Key PR Progress

| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| **[#2577](https://github.com/MoonshotAI/kimi-cli/pull/2577)** | Open | Fix crash printing startup banner on legacy consoles (GBK codec) — resolves #2532. | Prevents hard crash on Windows/Chinese locales; improves cross-platform robustness. |
| **[#2575](https://github.com/MoonshotAI/kimi-cli/pull/2575)** | Open | Fire `PostToolUse`/`PostToolUseFailure` hooks via `fire_and_forget_trigger` — resolves #2564. | Fixes dropped hook tasks caused by bare `asyncio.create_task` + weakref GC; ensures hook reliability. |
| **[#2554](https://github.com/MoonshotAI/kimi-cli/pull/2554)** | Open | Count `StrReplaceFile` replacements against running content (not original). | Correctness fix: success message now reflects actual replacements after prior edits in the same session. |
| **[#2530](https://github.com/MoonshotAI/kimi-cli/pull/2530)** | Open | Stop blocking until timeout when detached child holds pipes — resolves #2468. | Fixes shell command hang (e.g., `daemon & echo done`); avoids waiting for EOF on backgrounded processes. |
| **[#2507](https://github.com/MoonshotAI/kimi-cli/pull/2507)** | Open | Signal `QuestionNotSupported` instead of resolving empty answers in ACP — resolves #2495. | Distinguishes "user dismissed" from "unsupported" in ACP protocol; improves model feedback accuracy. |
| **[#2581](https://github.com/MoonshotAI/kimi-cli/pull/2581)** | Closed | Bump `kosong` to 0.56.0 (dependency update + release notes). | Routine dependency maintenance; keeps upstream SDK aligned. |
| **[#2580](https://github.com/MoonshotAI/kimi-cli/pull/2580)** | Closed | Omit empty `anthropic-beta` header when no beta features declared (kosong fix). | Removes spurious header that could cause interop issues with strict Anthropic-compatible endpoints. |
| **[#2535](https://github.com/MoonshotAI/kimi-cli/pull/2535)** | Open | Scope prompt cache keys to Moonshot APIs only — resolves #2534. | Prevents sending Moonshot-specific `prompt_cache_key` to third-party Kimi-compatible endpoints; avoids 400 errors. |

---

## 5. Feature Request Trends
From the issue landscape (including the prominent #1283), the clearest community asks are:

1. **Persistent Memory / Cross-Session Context** — Developers want the CLI to "remember" project conventions, code style, and prior decisions without manual re-prompting. Both automatic (AI-summarized) and manual (user-defined) memory modes are requested.
2. **Web UI Reliability** — As `kimi web` moves through Technical Preview, session management, reconnection logic, and multi-tab support are friction points.
3. **Windows Parity** — Multiple recent issues (#2582, #2577) highlight encoding, stream, and shell execution gaps on Windows.

---

## 6. Developer Pain Points
Recurring frustrations surfaced in the last 24h:

- **Stream/Session Deadlocks** — Both CLI (Windows) and Web UI (session switch) exhibit indefinite hangs with no timeout fallback or recovery path.
- **Hook/Async Task Leaks** — Bare `asyncio.create_task` without retention caused silent hook loss (#2564); a systemic pattern in the codebase.
- **Legacy Console Compatibility** — Emoji/Unicode in banners crashes on GBK/CP936 consoles — a known class of Windows CI/CD failures.
- **Shell Pipe Handling** — Backgrounded commands holding stdout/stderr block the parent until timeout (#2468), breaking common `daemon &` patterns.
- **ACP Protocol Ambiguity** — Empty answer resolution conflated "dismissed" with "unsupported," degrading model decision-making (#2495).

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` — issues and PRs updated 2026-08-03 to 2026-08-04.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-04

## Today's Highlights
- **v1.18.12 released** with a critical fix for Azure GPT-5.5+ completion requests failing when reasoning is enabled, plus desktop improvements reducing composer lag with large pasted images and expanding project search matching.
- **Session lifecycle features dominate community discussion**: the top issue (#27167, 67 comments, 123 👍) requests native `/goal` support for persistent session goals, while #16077 (12 comments) seeks persistent session memory across restarts.
- **Provider connectivity and reliability** are recurring pain points: DeepSeek V4 Flash geo-restriction issues (#39845), certificate connection failures (#40314), and unbounded retries on unreachable providers (#40319, #40330) all surfaced in the last 24h.

---

## Releases
### v1.18.12
| Area | Changes |
|------|---------|
| **Core** | Fixed Azure GPT-5.5+ completion requests failing when reasoning is enabled ([@frederiknsgo](https://github.com/anomalyco/opencode/pull/40265)) |
| **Desktop** | Reduced composer lag when drafts include large pasted images/attachments; project search now matches any known recent project (not just first five) |

---

## Hot Issues (Top 10 by Community Engagement)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#27167](https://github.com/anomalyco/opencode/issues/27167) | **Native session goals with `/goal`** | Adds persistent, first-class goal tracking to sessions — a missing piece for agentic workflows | 67 comments, **123 👍** — highest engagement in dataset |
| [#39845](https://github.com/anomalyco/opencode/issues/39845) | **DeepSeek V4 Flash requires "Enable models hosted in China" opt-in mid-session** | Breaks existing Go subscriptions unexpectedly; geo-restriction surfaced without warning | 13 comments, 22 👍 — subscription reliability concern |
| [#16077](https://github.com/anomalyco/opencode/issues/16077) | **Persistent Session Memory** | Enables continuity across CLI restarts; critical for companion-style usage | 12 comments, 3 👍 — long-standing request (Mar 2026) |
| [#12710](https://github.com/anomalyco/opencode/issues/12710) | **`{cmd:}` config placeholder for credential helpers** | Allows dynamic secrets (1Password, pass, etc.) in config without plaintext storage | 5 comments, 2 👍 — security/hygiene improvement |
| [#38932](https://github.com/anomalyco/opencode/issues/38932) | **Pasting long text (~5k+ chars) freezes Desktop app** | Blocks paste-heavy workflows (logs, specs, code dumps) | 4 comments — regression in input handling |
| [#20600](https://github.com/anomalyco/opencode/issues/20600) | **Desktop v1.3.13 randomly scrolls to middle of conversation** | Disrupts reading/writing flow; intermittent but frequent | 4 comments, 2 👍 — UX regression |
| [#38089](https://github.com/anomalyco/opencode/issues/38089) | **Qwen3.7-plus/max missing from Zen despite docs listing them** | Doc–reality gap; users cannot access advertised models | 3 comments — provider catalog sync issue |
| [#40319](https://github.com/anomalyco/opencode/issues/40319) | **Unbounded retries on unreachable provider (no error surfaced)** | `opencode run` hangs silently >60s on `ECONNREFUSED` | 3 comments — reliability/observability gap |
| [#37096](https://github.com/anomalyco/opencode/issues/37096) | **Web UI session list empty — project auto-registration fails on Windows/WSL** | Blocks Windows/WSL users from new layout features | 3 comments, 5 👍 — platform parity issue |
| [#40321](https://github.com/anomalyco/opencode/issues/40321) | **DeepSeek V4 Flash outputs corrupted "Q" characters during long tool generations** | Model output corruption makes results unusable | 2 comments — provider-specific quality issue |

---

## Key PR Progress (Top 10 by Recent Activity)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#27231](https://github.com/anomalyco/opencode/pull/27231) | **feat** | Add edit button for connected providers (closes #20598) |
| [#36710](https://github.com/anomalyco/opencode/pull/36710) | **fix** | Bound event log compaction with dry-run mode (closes #33356) |
| [#37679](https://github.com/anomalyco/opencode/pull/37679) | **fix** | Drop `undefined` metadata from permission requests (closes #37650) |
| [#40351](https://github.com/anomalyco/opencode/pull/40351) | **feat** | Localize TUI to Simplified Chinese (full UI coverage) |
| [#40337](https://github.com/anomalyco/opencode/pull/40337) | **feat** | **Desktop: localhost browser preview panel** for dev servers (merged) |
| [#40268](https://github.com/anomalyco/opencode/pull/40268) | **fix** | Retry top-level stream request timeouts for OpenAI Responses-compatible providers (closes #39221) |
| [#40144](https://github.com/anomalyco/opencode/pull/40144) | **fix** | Reject unavailable project destinations in TUI picker (closes #39903, merged) |
| [#40198](https://github.com/anomalyco/opencode/pull/40198) | **fix** | Canonical Unicode-equivalence matching in patch `seekSequence()` (closes #31651) |
| [#40340](https://github.com/anomalyco/opencode/pull/40340) | **test** | Cover Azure completion reasoning for GPT-5.5/5.6 (merged) |
| [#40188](https://github.com/anomalyco/opencode/pull/40188) | **feat** | Request-scoped `chat.model` plugin hook for per-request model override (closes #18793, #24006) |

---

## Feature Request Trends
1. **Session persistence & lifecycle** — Native goals (`/goal`), cross-session memory, and workspace continuity are the most-upvoted asks (#27167, #16077, #39779).
2. **Provider flexibility** — Credential helpers (`{cmd:}`), custom OpenAI-compatible endpoints, and model catalog sync (Qwen, DeepSeek) show users want BYO-infrastructure without friction (#12710, #38089, #39845).
3. **Desktop parity with CLI/TUI** — MCP/skill GUI (#31399, #40335), MCP server testing, and localhost preview (#40337) indicate the desktop app is seen as a first-class IDE companion.
4. **Internationalization** — Simplified Chinese TUI localization (#40351) and RTL/bidi fixes (#40286) reflect growing non-English adoption.
5. **Autonomous agent tooling** — Docs for reboot-resume agents (#40320) and subagent background execution (#35233) show maturation of "set-and-forget" workflows.

---

## Developer Pain Points
| Area | Recurring Themes | Representative Issues |
|------|------------------|----------------------|
| **Reliability** | Silent hangs on provider failures, unbounded retries, no timeout errors | #40319, #40330, #40314 |
| **Desktop UX** | Composer lag with images, scroll jumps, paste freezes, theme selector breakage | #38932, #20600, #17996, #40354 |
| **Session/Context** | No persistent memory, no native goals, workspace sync issues | #16077, #27167, #35122 |
| **Provider/Geo** | Sudden geo-restrictions (DeepSeek), missing advertised models (Qwen), cert errors | #39845, #38089, #40314 |
| **Platform Gaps** | Windows/WSL project registration, RTL text, symlink cycles in skills dir | #37096, #40286, #40349 |

---

*Generated from GitHub data (anomalyco/opencode) covering 2026-08-03 → 2026-08-04. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-04

## Today's Highlights
Windows and WSL compatibility remains a dominant theme, with multiple active issues around path handling, login hangs, and process management. The team is actively refactoring core infrastructure: JSON streaming output has been made linear (eliminating quadratic growth), session discovery now supports symlinks, and a new Harness v2 in-memory storage backend is under development. Compaction reliability continues to receive fixes for race conditions and context-window edge cases.

## Releases
No new releases in the last 24 hours.

## Hot Issues
| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#6187](https://github.com/earendil-works/pi/issues/6187) | Pi login hangs in WSL after browser-based GitHub Copilot device authorization | Blocks WSL users entirely; device auth completes but client never detects it. 20 comments indicate widespread impact. | 20 comments, active investigation |
| [#6768](https://github.com/earendil-works/pi/issues/6768) | Compaction using Copilot Enterprise not possible | Enterprise users hit 421/400 errors during compaction across OpenAI and Anthropic paths. High 👍 count shows enterprise urgency. | 17 comments, **18 👍** |
| [#7064](https://github.com/earendil-works/pi/issues/7064) | WSL absolute Windows paths are mishandled | Agent tools (read/write/edit) fail and fall back to CLI; root cause in path translation layer. | 11 comments, 1 👍 |
| [#7161](https://github.com/earendil-works/pi/issues/7161) | anthropic-messages never sends x-client-request-id | Breaks session affinity in proxies/gateways that rely on this header for conversation grouping. | 9 comments, in progress |
| [#7020](https://github.com/earendil-works/pi/issues/7020) | Pi doesn't continue after compaction (closed) | Long-running coordinator sessions stall post-compaction; fixed in #7370/#7540. | 9 comments, 2 👍, **closed** |
| [#7547](https://github.com/earendil-works/pi/issues/7547) | How do you use Pi on Windows? What issues are you seeing? | Meta-issue to catalog Windows variants (WSL, native, PowerShell, Termux) and prioritize fixes/docs. | 6 comments, fresh |
| [#7399](https://github.com/earendil-works/pi/issues/7399) | truncateToWidth() leaves dangling OSC 8 hyperlink | Truncation inside a hyperlink emits broken ANSI; affects all terminal renderers. | 5 comments |
| [#7047](https://github.com/earendil-works/pi/issues/7047) | Gemini 3.x tool-call IDs stripped (closed) | Multi-turn tool conversations broke because `id` fields were dropped in history replay. Fixed. | 5 comments, 1 👍, **closed** |
| [#7444](https://github.com/earendil-works/pi/issues/7444) | WebSocket retry only handles two error codes | Other transient `response.failed` errors hard-stop the turn instead of retrying. | 3 comments |
| [#7560](https://github.com/earendil-works/pi/issues/7560) | xAI Grok 4.5 missing from GitHub Copilot Business model list | New model not surfaced through provider; affects model discovery for Copilot subscribers. | 3 comments, fresh |

## Key PR Progress
| # | Title | Description | Status |
|---|-------|-------------|--------|
| [#7503](https://github.com/earendil-works/pi/pull/7503) | feat(agent): implement harness v2 for in-memory storage | New `SessionStorage`/`SessionRepo` APIs + `InMemorySessionStorage`; foundation for durable server backend. | **Open**, in progress |
| [#7451](https://github.com/earendil-works/pi/pull/7451) | fix(coding-agent): bound model catalog refreshes | Fixes 5 issues (#7027, #7113, #7153, #7418, #7443) around cancellation/queuing of catalog refreshes. | **Closed** |
| [#7339](https://github.com/earendil-works/pi/pull/7339) | DRAFT: add openai background mode responses | Implements OpenAI Responses API `background: true` mode; seeks design feedback. | **Open**, draft |
| [#7571](https://github.com/earendil-works/pi/pull/7571) | feat(ai): add built-in Cortecs provider support | Adds European AI router Cortecs (backed by models.dev) as a new provider. | **Closed** |
| [#7569](https://github.com/earendil-works/pi/pull/7569) | fix(coding-agent): normalize find root results | Replaces hand-rolled path slicing with `path.relative()`; fixes Windows drive-root and selector bugs. | **Closed** |
| [#7568](https://github.com/earendil-works/pi/pull/7568) | Add generic sampling parameters in `models.json` | Allows arbitrary inference params (e.g., `dry_multiplier`, `xtc_probability`) for llama.cpp/vLLM. | **Closed** |
| [#7396](https://github.com/earendil-works/pi/pull/7396) | feat(coding-agent): add server session backend | Durable `@earendil-works/pi-coding-agent/server` backend with JSONL persistence, locking, crash recovery. | **Open** |
| [#7562](https://github.com/earendil-works/pi/pull/7562) | feat(ai): support Anthropic server-side fallbacks | Opt-in fallback payload + beta header; preserves fallback transitions for replay. | **Closed** |
| [#7552](https://github.com/earendil-works/pi/pull/7552) | fix(coding-agent): discover sessions through symlinked directories | Session discovery now follows symlinks under `~/.pi/agent/sessions/`; adds regression tests. | **Closed** |
| [#7394](https://github.com/earendil-works/pi/pull/7394) | fix(coding-agent): make JSON streaming output linear | Delta-only `message_update` in JSON/RPC modes; backpressure; **breaking wire-protocol change**. | **Closed** |

## Feature Request Trends
1. **Windows/WSL first-class support** — Path normalization, process management (`taskkill` on Node 24), terminal compatibility (Kitty, Ghostty, Termux), and install/distribution strategies.
2. **Compaction configurability** — Separate thinking budgets for summarization vs. normal turns (#7553), manual/auto race prevention (#7370), and context-window-aware resumption (#7540).
3. **Provider extensibility** — Opaque API keys for custom Codex-compatible gateways (#7546), generic sampling params (#7568), new providers (Cortecs #7571), and model catalog freshness (#7451).
4. **Session durability & portability** — Harness v2 storage abstraction (#7503), server backend (#7396), symlink-aware discovery (#7552), and transport-specific auth (#7551).
5. **Observability & debugging** — `x-client-request-id` for Anthropic (#7161), structured JSON streaming (#7394), and session protocol versioning (#7551).

## Developer Pain Points
- **WSL ↔ Windows path translation** breaks core tools (`find`, `read`, `write`, `edit`) and causes fallback to slow CLI paths (#7064, #6817, #6104).
- **Login/auth flows hang** in WSL after device authorization completes in the browser (#6187).
- **Compaction is fragile**: races with auto-compaction (#7253), context-length miscalculation (#6378), and post-compaction stalls (#7020).
- **JSON mode performance** degrades quadratically on long responses due to cumulative re-serialization (#7395, #7561).
- **TUI rendering crashes** on line overflow instead of truncating (#7528, #911, #7554), especially in narrow panes (tmux, SSH, Termux).
- **Model catalog stale/missing entries** — Grok 4.5 absent from Copilot (#7560), enterprise compaction blocked (#6768), provider prefix dropped for OpenAI-compatible gateways (#7030).
- **Node.js 24 compatibility** — `spawn("taskkill")` fails with `ENOENT` (#6596).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-04

---

## 1. Today's Highlights

- **v0.21.4 released** — Web Shell graduates to a release-ready desktop app with native lifecycle management, single-instance behavior, and automatic updates ([#8132](https://github.com/QwenLM/qwen-code/pull/8132)).
- **Release pipeline hiccup** — v0.21.5 failed the `quality` gate ([#8476](https://github.com/QwenLM/qwen-code/issues/8476)), prompting immediate follow-up PRs to stabilize CI and review automation.
- **Trust & safety groundwork** — A high-engagement proposal (#8102, 13 comments) argues for deterministic tool-execution boundaries to keep the LLM outside the trust boundary, signaling a strategic shift toward verifiable agent runtimes.

---

## 2. Releases

### v0.21.4 (2026-08-03)
| Change | Details |
|--------|---------|
| **Web Shell desktop app** | Native lifecycle, single-instance enforcement, auto-updates ([#8132](https://github.com/QwenLM/qwen-code/pull/8132)) |
| **History pagination** | Oversized turns now handled gracefully in Web Shell |
| **Rollup** | Includes all fixes since v0.21.3 |

> **Note:** v0.21.5 was tagged but failed CI (`quality` job); see [#8476](https://github.com/QwenLM/qwen-code/issues/8476).

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Title | Why It Matters | Community Pulse |
|---|-------|----------------|-----------------|
| [#8102](https://github.com/QwenLM/qwen-code/issues/8102) | **Deterministic tool-execution boundaries for trustworthy agent runtime** | Architectural proposal to sandbox LLM actions behind a verifiable runtime; touches security, core runtime, and agent trust model. | 13 comments, `need-discussion`, `priority/P3` — active design debate. |
| [#8316](https://github.com/QwenLM/qwen-code/issues/8316) | **Prompt not restored when canceling (Ctrl+C)** | UX regression: aborted prompts vanish, forcing retype. Affects all interactive users. | 7 comments, `needs-triage` — clear pain point. |
| [#8382](https://github.com/QwenLM/qwen-code/issues/8382) | **Duplicate provider tool call id** | Recurring “Duplicate provider tool call id” errors break tool execution flows; needs root-cause analysis. | 6 comments, `need-information`, `need-retesting`, `priority/P2`. |
| [#8470](https://github.com/QwenLM/qwen-code/issues/8470) | **Model name too long with Alibaba Token Plan (mobile/Paseo)** | UI truncation hides model identity on mobile; impacts model selection clarity. | 5 comments, `priority/P2`, screenshot attached. |
| [#8281](https://github.com/QwenLM/qwen-code/issues/8281) | **Add Email channel (IMAP/SMTP)** | First-class async channel request; enables agent interaction via dedicated mailbox. | 5 comments, `roadmap/background-automation`, `need-discussion`. |
| [#7306](https://github.com/QwenLM/qwen-code/issues/7306) | **Harden tool-output budgeting, observability, artifact lifecycle** | Multi-phase effort to bound tool output, improve observability, fix artifact persistence. Phase 1 done; follow-ups ongoing. | 5 comments, long-running tracking issue. |
| [#8317](https://github.com/QwenLM/qwen-code/issues/8317) | **Ctrl+Shift+C not copying in terminal** | Standard terminal copy shortcut broken in CLI; regression affecting daily workflow. | 4 comments, `needs-triage`. |
| [#8326](https://github.com/QwenLM/qwen-code/issues/8326) | **Fork agents inherit sibling directives — context pollution** | Parallel forks leak each other’s function calls via parent’s last message; fixes session isolation. | 4 comments, 1 👍, **CLOSED** (fix merged). |
| [#8432](https://github.com/QwenLM/qwen-code/issues/8432) | **Bailian Token Plan models out of sync; image/video gen fails** | Built-in model list stale vs. Bailian console; breaks multimodal workflows for CN users. | 4 comments, `priority/P2`, `ready-for-human`. |
| [#8330](https://github.com/QwenLM/qwen-code/issues/8330) | **@ completion tab switching broken in Warp (Ctrl+Tab conflict)** | Warp terminal captures `Ctrl+Tab`, making completion categories unreachable. | 4 comments, `priority/P2`, terminal-ux scope. |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | Title | Type | Status | Significance |
|---|-------|------|--------|--------------|
| [#8482](https://github.com/QwenLM/qwen-code/pull/8482) | Fix: never-delivered MCP call is first delivery, not replay | Bugfix | Open | Resolves flaky MCP reconnect test; hardens tool-call semantics. |
| [#8461](https://github.com/QwenLM/qwen-code/pull/8461) | Feat: local `gh` auth for GitHub Channels | Feature | Open | Lets Channels reuse daemon’s `gh auth login`; reduces PAT management. |
| [#8497](https://github.com/QwenLM/qwen-code/pull/8497) | Perf: retire dry chunks & pipeline verification in reverse audit | Perf | Closed | Cuts large-PR review latency (5-round cap → measurable speedup). |
| [#8496](https://github.com/QwenLM/qwen-code/pull/8496) | Feat: run read-only commands (`/stats`, `/context`) mid-turn in Web Shell | Feature | Open | Eliminates “swallowed command” UX gap during streaming turns. |
| [#8332](https://github.com/QwenLM/qwen-code/pull/8332) | Feat: audio bridge for attachments (transcribe via batch voice model) | Feature | Open | Enables audio input for models lacking native audio support. |
| [#8502](https://github.com/QwenLM/qwen-code/pull/8502) | CI: route trusted-author fork PRs to ECS pool | Infra | Open | Faster CI for maintainers; reduces shared-runner contention. |
| [#8417](https://github.com/QwenLM/qwen-code/pull/8417) | Fix: explicit `::selection` for message content in Firefox | Bugfix | Open | Restores text-selection highlight in Firefox (regression from #8214). |
| [#8488](https://github.com/QwenLM/qwen-code/pull/8488) | Fix: harden Qwen 3.8 reasoning effort wire shape | Bugfix | Open | Drops competing thinking knobs (`enable_thinking`, `thinking_budget`) when `reasoning_effort` used. |
| [#8474](https://github.com/QwenLM/qwen-code/pull/8474) | Fix: clean review worktrees after cancellation | Infra | Open | Prevents stale worktrees/branches on self-hosted runners after timed-out reviews. |
| [#8260](https://github.com/QwenLM/qwen-code/pull/8260) | Fix: preserve every reasoning episode’s signature during consolidation | Bugfix | Open | Keeps distinct `thoughtSignature` per parallel tool call; critical for audit trails. |

---

## 5. Feature Request Trends

| Direction | Representative Issues | Signal |
|-----------|----------------------|--------|
| **Async / background channels** | Email (IMAP/SMTP) [#8281](https://github.com/QwenLM/qwen-code/issues/8281), Fleet Shepherd dashboard [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | Growing demand for non-interactive, long-running agent workflows. |
| **Trustworthy / verifiable runtime** | Deterministic tool boundaries [#8102](https://github.com/QwenLM/qwen-code/issues/8102), external tool guard for `serve` [#8125](https://github.com/QwenLM/qwen-code/pull/8125) | Security-first architecture gaining traction; “LLM outside trust boundary” mantra. |
| **Multimodal input parity** | Audio bridge [#8332](https://github.com/QwenLM/qwen-code/pull/8332), video end-to-end [#8183](https://github.com/QwenLM/qwen-code/issues/8183), Bailian image/video sync [#8432](https://github.com/QwenLM/qwen-code/issues/8432) | Push for uniform attachment handling across model capabilities. |
| **Session & history resilience** | Fork-from-any-conversation [#8274](https://github.com/QwenLM/qwen-code/pull/8274), session refresh with daemon auth [#8445](https://github.com/QwenLM/qwen-code/pull/8445), turn recovery after truncation [#8412](https://github.com/QwenLM/qwen-code/issues/8412) | Users treat sessions as first-class artifacts; need branching, recovery, portability. |
| **Terminal UX polish** | Copy shortcut [#8317](https://github.com/QwenLM/qwen-code/issues/8317), Warp tab conflict [#8330](https://github.com/QwenLM/qwen-code/issues/8330), ConEmu flicker [#8385](https://github.com/QwenLM/qwen-code/issues/8385), thinking panel jitter [#8319](https://github.com/QwenLM/qwen-code/issues/8319) | Cross-terminal compatibility and rendering stability are recurring themes. |

---

## 6. Developer Pain Points (High-Frequency Frustrations)

| Pain Point | Evidence | Affected Surface |
|------------|----------|------------------|
| **Prompt loss on abort** | [#8316](https://github.com/QwenLM/qwen-code/issues/8316) (7 comments) — Ctrl+C discards input | CLI / Interactive |
| **Tool-call ID collisions** | [#8382](https://github.com/QwenLM/qwen-code/issues/8382) (6 comments) — “Duplicate provider tool call id” errors | Core / Tool execution |
| **Session disappearance on restart (Windows)** | [#8400](https://github.com/QwenLM/qwen-code/issues/8400) (3 comments) — silent auto-delete after ACP `session/load` failure | Desktop / Windows |
| **Cache thrashing from microcompaction** | [#8452](https://github.com/QwenLM/qwen-code/issues/8452) (3 comments) — size-triggered compaction rewrites cached prefix repeatedly | Core / Performance |
| **MCP tool regression on session resume** | [#8433](https://github.com/QwenLM/qwen-code/issues/8433) (3 comments) — SDK-embedded MCP works once, then fails | MCP / Session management |
| **Model list stale vs. provider console** | [#8432](https://github.com/QwenLM/qwen-code/issues/8432) (4 comments) — Bailian Token Plan out of sync | Auth / Model switching |
| **Release CI instability** | [#8476](https://github.com/QwenLM/qwen-code/issues/8476) — v0.21.5 failed `quality` gate; multiple follow-up PRs to clean worktrees, align timeouts | CI/CD |

---

*Generated from `github.com/QwenLM/qwen-code` data as of 2026-08-04. All links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-04

## 1. Today's Highlights
The v0.9.4 release train (PR #5135) is actively integrating 77 commits, with focused work on runtime API expansion (goal-loop state, MCP server lifecycle, memory endpoints, skill management), Model Studio provider support, and clippy lint cleanup. Community discussion centers on Agent Client Protocol registry inclusion, OpenCode/Zen provider support, and a universal `/stop` command for autonomous workflows. Chinese localization debates continue around "Constitution" translation ("宪法" vs "协作准则").

---

## 2. Releases
**None in the last 24 hours.** The v0.9.4 release train (PR #5135) is in progress but not yet merged.

---

## 3. Hot Issues (Top 10 by Community Engagement)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **#3192** [enhancement] **List on agentclientprotocol/registry** | Enables one-click install in Zed and other ACP-compatible editors. Strategic for ecosystem adoption. | 13 comments, active discussion on registry requirements |
| **#3205** [bug/enhancement] **v0.9.3: Fleet model classes, loadout auto, semantic route roles** | Core architecture for unified model/loadout selection across TUI, CLI, subagents, and Fleet workers. | 11 comments, author (Hmbown) driving design |
| **#1481** [enhancement] **Support OpenCode Go/Zen provider** | OpenCode offers DeepSeek-V4 at low cost; users want native integration. | 10 comments, 1 👍, strong user demand |
| **#4959** [enhancement] **`/stop` command & runtime STOP-word intercept** | Critical for safety: currently YOLO/autonomous modes ignore text stop commands. | 7 comments, high practical urgency |
| **#4949** [discussion] **Chinese translation of "Constitution" — "宪法" vs "协作准则"** | Localization decision with political sensitivity implications; affects all Chinese users. | 7 comments, active bilingual debate |
| **#4022** [docs/enhancement] **v0.9.3: CLI/TUI parity for subagent & runtime control** | Prevents control surfaces from being TUI-only; needed for cloud/remote workbench parity. | 7 comments, architectural importance |
| **#2492** [bug] **No cross-session memory** | Sessions forget prior context on restart; forced memory writes aren't read on reload. | 5 comments, fundamental UX gap |
| **#1917** [enhancement] **Universal PreToolUse/PostToolUse hook layer** | Enables Cancel/Pause/Resume for *any* action type; unifies slash-command lifecycle. | 5 comments, architectural refactor |
| **#2984** [enhancement] **OpenAI Codex/ChatGPT OAuth route verification** | Moves OAuth from preview to supported; validates Responses wire protocol end-to-end. | 5 comments, provider integration milestone |
| **#4785** [cleanup] **Dead-code sweep: 464 `#[allow(dead_code)]` across 143 files** | Compiler cannot detect drift; blocking maintainability. Measured via `cargo check` diffs. | 4 comments, technical debt priority |

---

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| **#5135** | OPEN | **v0.9.4 release train** — 77 commits integrating runtime API, Model Studio, clippy fixes, ACP tools, rail unification. Supersedes #5044. |
| **#5233** | OPEN | **Model Studio: surface reasoning on official chat routes** — Classifies `reasoning_content` as Thinking stream; shapes `enable_thinking`, `preserve_thinking`, `reasoning_effort` controls. |
| **#5133** | OPEN | **Runtime API: persistent goal-loop state & completion controls** — Adds `GET/POST /v1/threads/{id}/goal` for managed clients to drive lifecycle. |
| **#5132** | OPEN | **Runtime API: verifier receipts & evidence** — Three new `/v1/fleet/runs/{run_id}/` endpoints (`receipts`, `evidence`, `summary`) beyond aggregate counter. |
| **#5130** | OPEN | **Runtime API: bounded MCP server config & lifecycle** — `POST/GET/PATCH/DELETE /v1/apps/mcp/servers` replaces direct TOML/JSON edits. |
| **#5131** | OPEN | **Runtime API: memory endpoints** — Bounded inspection & lifecycle under `/v1/memory`, gated by `require_runtime_token`. |
| **#5129** | OPEN | **Runtime API: skill lifecycle** — Install, update, uninstall, trust, audit endpoints; completes TUI parity for managed clients. |
| **#5225** | OPEN | **ACP: expose file/search/git/patch/shell tools over session/prompt** — Enables real code-editing via ACP (Zed, `acp-deepseek-adapter`), not chat-only. |
| **#5231** | CLOSED | **Clear 30 deny-level clippy lints** — Unblocks v0.9.4 train CI; 16 unique lint sites fixed across bin/test targets. |
| **#5229** | OPEN | **Docs: Windows beginner guide (zh-CN)** — New `docs/WINDOWS_BEGINNER.zh-CN.md` with 4 validated screenshots; install, config, model switching, modes, FAQ. |

---

## 5. Feature Request Trends (Distilled from Issues)

1. **Protocol & Ecosystem Integration** — Agent Client Protocol registry (#3192), ACP tool execution (#5225), OpenCode/Zen provider (#1481), MCP OAuth 2.1 (#1409).
2. **Autonomous Workflow Control** — Universal `/stop` command (#4959), hook-based Cancel/Pause/Resume (#1917), permission profiles & nonblocking defaults (#3211).
3. **Runtime API Completeness** — Goal-loop, MCP, memory, skills, verifier receipts — all targeting parity for managed/remote clients (PRs #5130–#5133).
4. **Cross-Session Persistence** — Memory survival across restarts (#2492), compaction survival contract (#4394), config edit/persist from TUI (#3303).
5. **Windows & Localization Polish** — Windows Terminal default launch (#1854), winget package (#1561), Chinese IME support (#2323), garbled output (#1675), translation consensus (#4949).
6. **Subagent & Fleet UX** — CLI/TUI parity (#4022), visual inspection artifacts for browser/UI tasks (#3145), Fleet loadout auto (#3205).
7. **Code Health** — Dead-code sweep (#4785), runtime ownership convergence (#3306), JobManager/TaskManager merge (#4167).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence |
|------------|----------|
| **Autonomous modes ignore stop commands** | #4959: "text commands like `+ stop` or `stop` are ignored… model continues executing tools" |
| **No cross-session memory** | #2492: "每次重新启动，会遗忘上一轮会话的记忆" (every restart forgets prior session) |
| **Chinese IME broken in input fields** | #2323: pinyin hints not hidden; letters turn into pinyin in model/slash input during modals |
| **Config keys documented but not editable in TUI** | #3303: "users cannot reliably discover, edit, validate, and persist them from the TUI" |
| **Windows default launch uses raw `cmd.exe`** | #1854: "rendering is noticeably worse than Windows Terminal — fonts, colors, general feel degraded" |
| **Shell detection mismatch on Windows** | #1754: "AI often defaults to generating commands in one style, while actual runtime may be PowerShell or cmd" |
| **Edit tool lacks read-before-write guardrails** | #3364: "Edit mistakes are one of the fastest ways to make a coding agent feel unreliable" |
| **ACP only streams text, no tool execution** | #5225: "session/prompt only streamed model text — never executed tool calls… chat-only agent" |
| **464 `#[allow(dead_code)]` hide compiler drift detection** | #4785: "compiler structurally unable to report drift" |
| **Constitution translation blocks Chinese release polish** | #4949: bilingual debate over "宪法" (constitution) vs "协作准则" (collaboration guidelines) sensitivity |

---

*Data sourced from `github.com/Hmbown/DeepSeek-TUI` (Issues & PRs updated 2026-08-03).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*