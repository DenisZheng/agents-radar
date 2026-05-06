# AI CLI Tools Community Digest 2026-05-01

> Generated: 2026-05-01 01:49 UTC | Tools covered: 8

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
**Analysis Date: 2026-05-01**

---

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing a post-hype maturation phase, characterized by aggressive feature expansion colliding with billing and reliability regressions. All major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code, OpenCode, Pi, and Qwen Code—ship multiple patches weekly, but server-side changes frequently introduce cost-accounting bugs, session-state fragility, and cross-platform inconsistencies. The community is increasingly vocal about transparency failures (opaque token counting, hidden sub-agent costs) and demanding granular permission controls, persistent memory, and IDE-ecosystem interoperability through protocols like ACP. Tools are converging on agent-oriented architectures with sub-agent orchestrators, while diverging in their approach to authentication, provider support, and desktop integration.

---

## 2. Activity Comparison

| Tool | Hot Issues | Active PRs | Release Status | Notable Signal |
|------|-----------|-----------|----------------|----------------|
| **Claude Code** | 10 (top 10) | 3 | Stable v2.1.118 (stale) | 7 billing/cost bugs, memory regression |
| **OpenAI Codex** | 10 | 10 | Stable rust-v0.128.0 + alpha | `/goal` workflows shipped; `/undo` removal most-upvoted issue (168👍) |
| **Gemini CLI** | 10 | 10 | Patches v0.40.1 + v0.41.0-preview.1 | Subagent reliability crisis; heavy community PR contributions |
| **GitHub Copilot CLI** | 10 | 1 | Triple patch v1.0.40-1/2/3 | `client_credentials` OAuth; Alpine segfault (7mo unfixed) |
| **Kimi Code** | 10 (tracked) | 10 | v1.41.0 | Community-driven clipboard fix; ACP protocol gaps |
| **OpenCode** | 10 | 10 | Stable v1.14.30 | Major Effect-based refactor; memory megathread (41👍) |
| **Pi** | 10 (of 50) | 10 (of 25) | v0.71.0 (breaking) | Provider shakeup; security fixes; highest PR throughput |
| **Qwen Code** | 10 | 10 | v0.15.6 + nightly + preview | 5s latency bug; desktop packaging in progress |

**Observation**: Pi and OpenCode show the highest engineering velocity (10+ active PRs). Claude Code has the lowest PR throughput (3) and faces systemic billing trust issues. OpenAI Codex has the strongest community engagement signal (168 upvotes on `/undo`).

---

## 3. Shared Feature Directions

### Sub-Agent Transparency & Observability
- **Claude Code** (#55121): Token counter omits sub-agent consumption
- **OpenAI Codex** (#1322): Show subagent tool call details
- **Qwen Code** (#3758, #3763): Full step-by-step thinking display
- **Gemini CLI**: Multiple subagent reliability issues (#22323 false success)

### Granular Permission / Auto-Approval Systems
- **GitHub Copilot CLI** (#1973, #1995): Per-tool whitelists (read-only vs. destructive)
- **Kimi Code** (#2114): File-scoped auto-approve rules (PR open)
- **Claude Code**: Implicit need for finer control (HERMES.md billing bug)

### Session Persistence & Undo/Recovery
- **OpenAI Codex** (#9203, 168👍): `/undo` removal causes real file loss
- **GitHub Copilot CLI** (#1381): Rewind requires git repository
- **Kimi Code** (#1283): Memory system for persistent context
- **Qwen Code** (#3762): Message edit/rewind in VSCode extension

### Cross-IDE / Protocol Interoperability
- **Kimi Code** (#2127): ACP `session/list`/`session/get` missing for Zed
- **Qwen Code** (#3778): Desktop app with ACP SDK
- **OpenCode** (#25125): Local Ollama missing in GUI
- **Pi** (#4025, #4024): Environment-variable parity for CI/CD

### Cost / Usage Transparency
- **Claude Code** (#55133): Display cache read/write token consumption
- **OpenAI Codex** (#19585): Pro tier usage depleting abnormally fast
- **Kimi Code** (#1994): Quota uses tokens not API calls (K2.6 long CoT)
- **Gemini CLI**: Implicit need (subagent cost invisible)

---

## 4. Differentiation Analysis

### Feature Focus
| Tool | Primary Strength | Target User |
|------|-----------------|-------------|
| **Claude Code** | Deep reasoning, large context (Opus 4.7) | Power users, large codebases |
| **OpenAI Codex** | Skills ecosystem, `/goal` workflows | Platform users, multi-session |
| **Gemini CLI** | Sub-agent architecture, AST-aware tools | Autonomous workflow developers |
| **GitHub Copilot CLI** | MCP integration, headless auth | Enterprise, CI/CD pipelines |
| **Kimi Code** | Plugin system, ACP protocol | Editor-ecosystem developers |
| **OpenCode** | Effect-based architecture, refactoring | Framework-aware developers |
| **Pi** | Provider-agnostic, local LLM support | Self-hosters, security-conscious |
| **Qwen Code** | Review pipeline, desktop packaging | Growing Windows/IDE users |

### Technical Approach
- **Claude Code** & **OpenAI Codex**: Heavy server-side logic; billing and context management controlled by backend → unpredictable for users
- **Gemini CLI** & **Pi**: Open-source, community-driven; Pi has highest PR throughput from external contributors
- **GitHub Copilot CLI**: Tight GitHub ecosystem integration; MCP-first strategy
- **Kimi Code** & **Qwen Code**: Emerging Chinese ecosystem tools with strong plugin/IDE focus

### Platform Support
- **Linux**: All tools supported; Claude Code has memory leak (#54200); Gemini CLI has SSH/Scramble issues
- **Windows**: **Copilot CLI** best supported; **Qwen Code** has `/quit` hang; **Claude Code** resize crash (#6481, 9 months open); **Pi** detached-process fix (#4013)
- **macOS**: **Copilot CLI** re-auth bug (#3057); **OpenAI Codex** Intel Mac rendering bug (#18341); **Claude Code** multi-user crash (#52814)

---

## 5. Community Momentum & Maturity

### High Momentum / Rapid Iteration
- **OpenCode**: Effect-based refactoring (5 PRs/day), memory debugging collective (41👍 megathread)
- **Pi**: 25 PRs total, breaking changes shipped (v0.71.0), security vulnerability patched same-day
- **Gemini CLI**: 10+ active PRs, strong community contributor presence (ixchio fixes UI jank, env coercion)

### Established but Stressed
- **Claude Code**: Stale release (v2.1.118), low PR velocity, but highest community engagement (177👍 on billing bug). Trust erosion from cost surprises.
- **OpenAI Codex**: Strong community (168👍 on `/undo`), `/goal` workflows shipped, but usage opacity concerns

### Growing / Emerging
- **Kimi Code**: v1.41.0 with community fixes; ACP protocol gaps suggest early-stage editor ecosystem play
- **Qwen Code**: Desktop packaging in progress; review pipeline expansion; nightly/preview cadence indicates acceleration

### Fragile / Niche
- **GitHub Copilot CLI**: Triple-patch day indicates bug density; Alpine segfault (7 months) suggests limited musl/container investment; only 1 PR active

---

## 6. Trend Signals

### 1. **Agent Cost Accounting Crisis**
All major tools face billing/usage transparency backlash. Claude Code's 7 billing issues in one week and OpenAI Codex's Pro tier depletion bug signal that server-side cost models are not keeping pace with agentic usage patterns (multi-subagent, high-turn, long-context). **For developers**: Expect pricing model changes; demand per-turn cost breakdowns and hard spending caps.

### 2. **Sub-Agent Arms Race with Observability Gap**
Every tool is shipping sub-agent/orchestrator architectures, but none provide adequate observability. Claude Code's token undercount, OpenAI Codex's opaque subagent tool calls, and Gemini CLI's false-success bug point to an industry-wide gap. **For developers**: Factor 1.5-3x cost overhead for sub-agent workflows; demand telemetry parity with main-thread operations.

### 3. **Permission Granularity as Competitive Moat**
GitHub Copilot CLI's per-tool whitelist requests (13👍, 9 comments) and Kimi Code's granular auto-approval PR signal user demand for nuanced trust models. The binary allow-all/deny-all model is dead. **For developers**: Tool-level permission configuration is table stakes; expect this to become a purchasing criterion.

### 4. **Terminal/SSH/Windows Parity Still Lags**
Nine-month-old bugs (Claude Code resize crash, Gemini CLI scrambled text) persist. Qwen Code's `/quit` hang and Pi's detached-process fix show Windows/SSH users remain second-class. **For developers**: If you work on non-macOS, non-Linux-desktop environments, budget for workaround maintenance.

### 5. **Protocol-Led Ecosystem Play (ACP)**
Kimi Code's ACP gap for Zed and Qwen Code's ACP SDK packaging signal that agent communication protocols are becoming strategic. Tools that lock into proprietary sub-agent formats risk editor/IDE fragmentation. **For developers**: Prefer tools with documented, open agent communication protocols for long-term portability.

### 6. **Local-First as Differentiation**
Pi shipping official local-LLM provider extensions (llama.cpp, LM Studio, vLLM, Ollama) while others focus on cloud API monetization creates a clear segmentation. OpenCode's Ollama GUI missing complaint shows demand. **For developers**: Evaluate local-model support if cost transparency or offline capability is critical.

---

*Data sourced from public GitHub repositories and community digest summaries dated 2026-05-01. Analysis reflects a single-day snapshot and may not capture longer-term trends.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of: 2026-05-01 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following Pull Requests have attracted the most community discussion and attention:

| # | Skill PR | Description | Discussion Highlights | Status |
|---|----------|-------------|----------------------|--------|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | Typographic quality control for generated documents — prevents orphan word wrap, widow paragraphs, numbering misalignment | Significant interest in solving persistent AI document formatting issues; aligns with high-quality output demands | **Open** |
| 2 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | Comprehensive testing stack coverage: Testing Trophy model, unit/React component/integration/E2E testing patterns | Strong demand for structured testing guidance; community wants a canonical skill for Claude-driven test generation | **Open** |
| 3 | **[sensory (macOS AppleScript)](https://github.com/anthropics/skills/pull/806)** | Native macOS automation via `osascript` — two-tier permission system, direct app scripting, Accessibility API usage | Novel approach to desktop automation; replaces screenshot-based computer use with native scripting | **Open** |
| 4 | **[ServiceNow platform](https://github.com/anthropics/skills/pull/568)** | Broad ServiceNow assistant covering ITSM, ITOM, ITAM, FSM, HRSD, SecOps, CSDM, IntegrationHub | Enterprise platform gap filled; significant discussion on scope management and domain coverage | **Open** |
| 5 | **[skill-creator warnings](https://github.com/anthropics/skills/pull/539)** | Pre-parse validation for unquoted YAML descriptions with special characters | Tooling improvement addressing silent parsing failures; maintenance-focused discussion | **Open** |
| 6 | **[HADS (Human-AI Document Standard)](https://github.com/anthropics/skills/pull/616)** | Lightweight Markdown convention for dual human/AI technical documentation | Cultural shift in documentation philosophy; enthusiastic response from community | **Open** |
| 7 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | Persistent memory system for AI agents — cross-conversation context via `proactive_context` | Addresses fundamental limitation of statelessness in Claude sessions | **Open** |
| 8 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | 10-step workflow for orphaned code detection, documentation gaps, infrastructure bloat | Systematic approach to codebase health; discussion focuses on output standardization | **Open** |

---

## 2. Community Demand Trends

From the most-discussed Issues, the community is signaling clear demand in these areas:

| Trend | Evidence | Key Issue |
|-------|----------|-----------|
| **Skill management & sharing** | #228 (9 comments) — org-wide skill sharing, #62 (10 comments) — skill disappearance bugs | [Issue #228](https://github.com/anthropics/skills/issues/228) |
| **Security & trust boundaries** | #492 (4 comments) — namespace impersonation risks, #412 (4 comments) — agent governance patterns | [Issue #492](https://github.com/anthropics/skills/issues/492) |
| **Tooling reliability** | #556 (6 comments) — `run_eval.py` 0% trigger rate, #202 (8 comments) — skill-creator best practice update | [Issue #556](https://github.com/anthropics/skills/issues/556) |
| **Enterprise integration** | #532 (2 comments) — API key requirement blocking SSO/enterprise, #29 (4 comments) — Bedrock compatibility, #406 (2 comments) — upload failures | [Issue #532](https://github.com/anthropics/skills/issues/532) |
| **Duplicate content** | #189 (5 comments) — identical skills across plugins causing context window waste | [Issue #189](https://github.com/anthropics/skills/issues/189) |

**Key takeaway:** The community is outgrowing the current file-based distribution model — they need **sharing, governance, and reliability infrastructure** more than they need new skill content.

---

## 3. High-Potential Pending Skills

These PRs are actively discussed, not yet merged, and likely to land soon:

| Skill | PR | Why It's Likely to Merge | Risk Factors |
|-------|-----|--------------------------|--------------|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | Addresses universal pain point in AI output quality | Scope creep; needs clear boundary with existing document skills |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Fills a clear gap; community consensus on need | Length; must avoid duplicating framework-specific guidance |
| **sensory (AppleScript)** | [#806](https://github.com/anthropics/skills/pull/806) | Novel approach, clear value prop, well-scoped | Permission complexity; macOS-only audience |
| **HADS (doc standard)** | [#616](https://github.com/anthropics/skills/pull/616) | Lightweight, addresses real documentation pain | Requires adoption buy-in; behavioral change for users |
| **skill-creator fixes (various)** | [#538](https://github.com/anthropics/skills/pull/538), [#539](https://github.com/anthropics/skills/pull/539), [#541](https://github.com/anthropics/skills/pull/541) | Bugfix PRs with high maintainer incentive; low risk | Minor scope; may be deprioritized for feature work |

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **tooling and infrastructure for skill lifecycle management** — sharing, validation, deduplication, and enterprise-grade reliability — over the creation of new domain-specific skills.

---

# Claude Code Community Digest — 2026-05-01

## Today's Highlights

The community is experiencing a spike in billing and cost-related bugs this week, with 7 of the top 30 issues touching on usage limits, session window depletion, and opaque token counting. The top-voted issue (#53262, 👍177) reveals a bizarre bug where the string "HERMES.md" in git history causes requests to route to extra usage billing instead of plan quota—burning $200+ for one user. Meanwhile, a five-hour session squeeze bug (#55053) and sub-agent token undercounting (#55121) suggest server-side cost accounting changes around April 29.

## Releases
No new releases in the last 24 hours. The latest stable version remains **2.1.118**, though a memory regression was introduced (see #54200).

---

## Hot Issues

### 1. [Bug] `HERMES.md` string in git commits causes extra usage billing (#53262 — CLOSED)
**👍177 · 81 comments**
A case-sensitive string detection bug: any repository with `HERMES.md` in recent commit history routes API calls to "extra usage" billing instead of Max plan quota. The reporter burned $200 in extra credits while their Max 20x plan sat unused. **Closed**, but no public root-cause explanation yet.
🔗 https://github.com/anthropics/claude-code/issues/53262

### 2. [Bug] Max subscription silently downgraded to Free plan (#41581 — OPEN)
**👍8 · 35 comments**
Users report their paid Max subscription reverting to Free tier without notification or action. Two weeks without a resolution, affecting paying customers' trust.
🔗 https://github.com/anthropics/claude-code/issues/41581

### 3. [Bug] Session window depleting 5–10× faster since April 29 (#55053 — OPEN)
**👍8 · 19 comments**
A sudden behavioral change: the 5-hour session window now burns through 20–25% in under an hour for light editing. Sonnet sub-agents are suspected. Multiple users confirming the same timeline points to a server-side regression.
🔗 https://github.com/anthropics/claude-code/issues/55053

### 4. [Bug] Token counter omits sub-agent consumption (#55121 — OPEN)
**👍0 · 4 comments**
Desktop app shows only main-thread token usage; sub-agents' API calls are invisible to the counter, leading to up to 10× undercount. Complicates budget tracking for agent-heavy workflows.
🔗 https://github.com/anthropics/claude-code/issues/55121

### 5. [Bug] Opus 4.7 context capped at 500K despite 1M plan (#53872 — OPEN)
**👍5 · 11 comments**
Max x20 plan users see context capped at half the advertised capacity. Server-side enforcement persists across fresh installs due to a stale `org_level_disabled` flag. Affects large-codebase power users.
🔗 https://github.com/anthropics/claude-code/issues/53872

### 6. [Bug] Window resize crashes on Windows (#6481 — OPEN)
**👍30 · 23 comments**
A long-standing (Aug 2025) issue: resizing the terminal window in Claude Code CLI causes display corruption or crashes on Windows. 23 comments with no fix in 9 months signals a tricky TUI architecture problem.
🔗 https://github.com/anthropics/claude-code/issues/6481

### 7. [Bug] Memory leak since v2.1.118 on Linux (#54200 — OPEN)
**👍0 · 5 comments**
RAM grows uncontrollably—10GB in 30 seconds on a fresh session, project-specific. Symptoms suggest a file-watcher or context-caching regression. Developers unable to diagnose without internal tooling.
🔗 https://github.com/anthropics/claude-code/issues/54200

### 8. [Bug] `claude --upgrade` downgrades Claude (#54966 — OPEN)
**👍0 · 3 comments**
Running the upgrade command installs an older version. Version pinning or CDN cache inconsistency suspected. Potentially affects CI/CD pipelines.
🔗 https://github.com/anthropics/claude-code/issues/54966

### 9. [Bug] OAuth refresh fails after early 401, forcing re-login (#54443 — OPEN)
**👍0 · 3 comments**
Server rejects tokens before their local `expiresAt` time, and the OAuth refresh endpoint returns 400. Users on shared machines or concurrent sessions hit repeated `/login` prompts.
🔗 https://github.com/anthropics/claude-code/issues/54443

### 10. [Bug] Desktop crash on multi-user Mac: `/tmp` ownership collision (#52814 — CLOSED)
**👍0 · 2 comments**
Settings file in `/tmp` causes crashes when multiple macOS users share a machine. Closed—suggests a fix is in flight.
🔗 https://github.com/anthropics/claude-code/issues/52814

---

## Key PR Progress

### 1. Statusline Script with Context & Rate Limit Bars (#55098 — OPEN)
**Author: DGDrago**
A community-contributed Bash/Node.js statusline display showing model name, context window fill, session cost, and a 5-hour rate-limit bar. Color-coded warnings for approaching limits. Useful for developers who want real-time resource visibility without a desktop GUI.
🔗 https://github.com/anthropics/claude-code/pull/55098

### 2. Fix: Prevent ipset duplicate entry in devcontainer firewall (#19871 — OPEN)
**Author: jmsbtlr111**
Adds `-exist` flag to `ipset` commands to suppress duplicate IP errors during devcontainer startup. Fixes a postStartCommand failure when DNS returns duplicate IPs for the same domain (e.g., marketplace.visualstudio.com).
🔗 https://github.com/anthropics/claude-code/pull/19871

### 3. Fix: Replace hand-rolled YAML parser in hookify (#54873 — OPEN)
**Author: adelaidasofia**
Fixes two silent bugs in the hookify system: a custom YAML parser that double-escapes backslashes, and a missing `new_text` field on Write operations. Discovered via a 39-test regression harness.
🔗 https://github.com/anthropics/claude-code/pull/54873

*(Only 3 PRs updated in the last 24 hours—limited selection this digest.)*

---

## Feature Request Trends

### 1. Change working directory mid-session (#3473)
**👍71 · 23 comments · OPEN (since Jul 2025)**
The top-voted feature request: allow `cd` during an active Claude session. Currently, the tool is bound to the spawn directory. Users working across monorepos or multiple projects must restart sessions.
🔗 https://github.com/anthropics/claude-code/issues/3473

### 2. Allow Claude to write/update project files (#16550)
**👍38 · 21 comments · OPEN (since Jan 2026)**
Users want Claude to have write access to `.claude` config, `CLAUDE.md`, and project scaffolding files—not just read. Current permissions prevent self-configuration.
🔗 https://github.com/anthropics/claude-code/issues/16550

### 3. Expose configurable memory & CLAUDE.md paths in Cowork mode (#44098)
**👍4 · 4 comments**
Cowork mode inherits host session memory, which may not be appropriate. Users want per-mode memory configurations.
🔗 https://github.com/anthropics/claude-code/issues/44098

### 4. Display cache read/write token consumption (#55133)
**👍0 · 3 comments**
Current usage UI shows output tokens only. Cache reads—often the dominant cost—are invisible. A new feature request with high potential impact as users try to optimize API spend.
🔗 https://github.com/anthropics/claude-code/issues/55133

### 5. See Claude's thinking ("chain-of-thought") (#24285)
**👍26 · 7 comments**
Users on Windows and Linux report "thinking" output no longer displays. Whether this is a bug or intentional UX change is unclear, but the community considers it a critical transparency feature.
🔗 https://github.com/anthropics/claude-code/issues/24285

---

## Developer Pain Points

### 1. Cost & Billing Surprises (High urgency)
**7 issues this week** touch on billing: phantom extra-usage billing (#53262), plan downgrades (#41581), session window squeezes (#55053), sub-agent undercounting (#55121), and reset day drift (#55150). The April 29 server-side changes appear to have introduced systemic cost accounting bugs. Developers are losing real money and trust.

### 2. Session/State Management Fragility
**Issues #55053, #54200, #54314, #55162** describe sessions that become wedged, crash on resume, or permanently contaminated by bad state (e.g., pasting an image with Enter). The resume crash (#55162) specifically crashes on null `split()` in the diff renderer when file-creation results are in the conversation history.

### 3. Platform Fragmentation
- **macOS:** Desktop crashes on multi-user machines (#52814), "Git is required" false negative (#44297), SIGILL on older Intel Macs (#50466, #37065)
- **Windows:** Window resize crashes (#6481), input lag from 88MB LocalStorage sync (#55149)
- **Linux:** Memory leak (#54200), OAuth refresh failures (#54443)
- **WSL:** Resume crash on file-creation results (#55162)

### 4. Authentication & Session Reliability
**Issues #54443, #52871** report OAuth flow breakage: early token expiry, trailing-slash bugs breaking Entra ID auth, and concurrent session conflicts. For enterprise users with SSO, this blocks adoption.

### 5. Context Window & Model Capability Confusion
**Issue #53872** reveals that Max plan users get only half the promised context window (500K vs 1M) for Opus 4.7, with a stale server-side flag persisting across reinstalls. Combined with the invisible token counting (#55121), developers cannot accurately gauge what resources they're consuming.

---

*Generated from `github.com/anthropics/claude-code` — Data snapshot: 2026-05-01*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-01

## Today's Highlights

The biggest news this week is the stable release of **rust-v0.128.0**, which ships the long-awaited **persisted `/goal` workflows** — a major quality-of-life improvement for sustained development sessions. However, the community is sounding alarms over **Pro tier weekly usage limits depleting abnormally fast on GPT-5.5**, with unstable context compaction making matters worse. On the Windows front, bundled `browser-use` and Node.js components are triggering antivirus false positives and permission errors, creating friction for an otherwise promising skills ecosystem.

## Releases

- **[rust-v0.128.0](https://github.com/openai/codex/releases/tag/rust-v0.128.0)**: Stable release featuring persisted `/goal` workflows with app-server APIs, model tools, runtime continuation, and TUI controls (create, pause, resume, clear). Also includes `codex update` command, configurable TUI keymaps, plan-mode nudges, and action-required indicators.
- **[rust-v0.129.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.1)** & **[rust-v0.128.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.128.0-alpha.1)**: Pre-release alpha versions with no documented changelog.

## Hot Issues

1. **[#18258 — "Computer Use plugin unavailable" on macOS despite bundled plugin files](https://github.com/openai/codex/issues/18258)**  
   *Comments: 32 | 👍: 36*  
   A top-voted bug where the macOS app reports the Computer Use plugin as missing even when the files are present. Workarounds include enabling `features.apps = true` and repairing the plugin cache path. High engagement signals this is a widespread blocker for app users.

2. **[#9203 — Please make "/undo" back](https://github.com/openai/codex/issues/9203)**  
   *Comments: 31 | 👍: 168*  
   By far the most upvoted issue in the tracker. The removal of `/undo` has caused real pain — users report unrecoverable file deletions and uncommitted modifications. The 168 reactions indicate this is a top-priority quality-of-life regression.

3. **[#19585 — Pro weekly usage limit depletes unusually fast on 5.5, worsened by unstable context compaction](https://github.com/openai/codex/issues/19585)**  
   *Comments: 23 | 👍: 9*  
   A critical billing/cost issue. Pro ($200) users report their weekly quota draining far faster than expected when using GPT-5.5, with unstable context compaction cited as a compounding factor. This could erode trust in usage transparency.

4. **[#18341 — Blurred/translucent overlay below composer on Intel Mac (macOS 15.0.1)](https://github.com/openai/codex/issues/18341)**  
   *Comments: 23 | 👍: 9*  
   A persistent UI rendering bug on Intel Macs, where a translucent overlay obscures the composer area. Impacts usability on non-Apple Silicon hardware.

5. **[#20161 — Codex asks for phone number on SSO login](https://github.com/openai/codex/issues/20161)**  
   *Comments: 13 | 👍: 6*  
   An authentication flow regression where SSO login triggers an unexpected phone number requirement. Causes account lockouts for users who never added a phone number.

6. **[#11014 — TUI scrolling broken over SSH with iOS client apps (v0.98.0)](https://github.com/openai/codex/issues/11014)**  
   *Comments: 13 | 👍: 2*  
   A long-standing terminal compatibility issue affecting developers who access Codex CLI remotely from iOS devices. Has remained open since February 2026.

7. **[#4218 — Shift+Enter regression: sends prompt instead of inserting line break (macOS)](https://github.com/openai/codex/issues/4218)**  
   *Comments: 13 | 👍: 13*  
   A classic regression of a previously fixed bug (#545). Shift+Enter — the standard macOS shortcut for multi-line input — no longer inserts line breaks. Frustrating for power users composing complex prompts.

8. **[#20315 — `browser-client.mjs` flagged as trojan by Windows Defender](https://github.com/openai/codex/issues/20315)**  
   *Comments: 7 | 👍: 4*  
   A false-positive antivirus detection on the browser-use skill, blocking automated web tasks on Windows. Requires either Microsoft exclusion or a Codex-side mitigation.

9. **[#19271 — Bundled `node.exe` fails with "Access is denied" on Windows, breaking Node REPL and Browser Use](https://github.com/openai/codex/issues/19271)**  
   *Comments: 6 | 👍: 6*  
   MSIX packaging restrictions on Windows prevent the bundled Node.js from executing, disabling the Node REPL and browser-use workflows. A core infrastructure issue for the Windows app.

10. **[#19910 — Goals: active goal state lost after mid-turn compaction](https://github.com/openai/codex/issues/19910)**  
    *Comments: 2 | 👍: 0*  
    A critical bug in the newly shipped `/goal` feature: context compaction can silently wipe the active goal prompt and audit trail. Directly undermines the feature's primary value proposition of persistent task tracking.

## Key PR Progress

1. **[#20545 — app-server: move transport into dedicated crate](https://github.com/openai/codex/pull/20545)**  
   A major architectural refactor extracting transport logic from `codex-app-server` into a separate crate, reducing dependency surface and enabling independent evolution of transport protocols.

2. **[#20265 — Key remote plugin cache by account](https://github.com/openai/codex/pull/20265)**  
   Scopes the remote plugin cache to the ChatGPT account, preventing stale cross-account data and thread-safety issues during `/plugins/installed` refreshes.

3. **[#20540 — Move apply-patch file changes into turn items](https://github.com/openai/codex/pull/20540)**  
   Unifies file-change lifecycle by moving `apply-patch` events into the core `TurnItem` stream. V2 clients can now consume a single, consistent item lifecycle without app-server-specific remapping.

4. **[#20298 — Surface admin-disabled remote plugin status](https://github.com/openai/codex/pull/20298)**  
   Adds `PluginAvailabilityStatus` to the app-server protocol, allowing clients to see and reject installs for remotely disabled plugins — important for enterprise and managed deployments.

5. **[#20281 — Use selected turn environments for runtime context](https://github.com/openai/codex/pull/20281)**  
   Makes selected environments the source of truth for session runtime CWD and MCP environment selection. Adds coverage for duplicate environments and edge cases.

6. **[#20341 — app-server: switch remote control to protocol v3 segmentation](https://github.com/openai/codex/pull/20341)**  
   Upgrades the remote-control WebSocket protocol to v3, enabling explicit wire-level message chunking, acknowledgment, replay, and reassembly for large payloads.

7. **[#20150 — Add remote plugin skill read API](https://github.com/openai/codex/pull/20150)**  
   Introduces a `plugin/skill/read` endpoint that fetches skill markdown from remote plugins without requiring local installation — enabling previews and discovery.

8. **[#19631 — Color TUI statusline from active theme](https://github.com/openai/codex/pull/19631)**  
   Addresses the "visually flat" TUI complaint by making the statusline reflect the active theme. Users can keep the monotone look if preferred.

9. **[#20488 — Add Computer Use requirements support](https://github.com/openai/codex/pull/20488)**  
   Adds configurable Computer Use policies: `allow_persistent_approval`, and macOS `allowed_bundle_ids`/`denied_bundle_ids` for granular control over which applications can be automated.

10. **[#20113 — fix(exec_policy): heredoc parsing file_redirect](https://github.com/openai/codex/pull/20113)**  
    Fixes a security regression where heredoc commands could bypass approval rules by embedding file redirects. Adds scenario tests to prevent future regressions.

## Feature Request Trends

The most requested feature directions from recent issues center on three themes:

1. **Session and workflow persistence** — The overwhelming demand for `/undo` (168 👍), combined with the brand-new `/goal` workflows, shows users want durable, recoverable sessions that survive mistakes, compactions, and restarts.

2. **On-the-fly configuration** — Developers increasingly want to change model parameters (reasoning effort, model selection, temperature) without restarting sessions. The ask for a `/reasoning` or `/effort` slash command captures this desire for interactive control.

3. **Account management UX** — Multiple requests for in-app account switching (mirroring web capabilities), SSO flow improvements, and phone-optional authentication indicate growing friction as users manage multiple workspaces or face authentication barriers.

## Developer Pain Points

Several recurring frustrations stand out from the issue tracker:

- **Unreliable undo/recovery** — The inability to revert unintended file operations (especially deletions outside git tracking) remains the single most painful gap, as evidenced by #9203's 168 upvotes and 31 comments.

- **Windows ecosystem instability** — Between MSIX permission issues (#19271), Windows Defender false positives (#20315), WSL path mismatches (#19052), and UI freezes (#20214, #20544), Windows users face a disproportionately buggy experience.

- **Usage limit opacity and cost surprises** — The GPT-5.5 usage depletion bug (#19585) reflects a broader trust issue: users feel they cannot accurately predict or audit their consumption, especially at the $200 Pro tier.

- **Context compaction breaking state** — Both the goals feature (#19910) and general session state (#19585) suffer from compaction-induced data loss. For a tool marketed on "keep going," losing context mid-task undermines the core value proposition.

- **Terminal emulator regression fragility** — Repeated regressions in key input handling (Shift+Enter on macOS #4218, Alt+Enter on WSL #20501, iOS SSH scrolling #11014) suggest the TUI's input layer lacks sufficient cross-platform test coverage.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-01

## Today's Highlights
Two patch releases (v0.40.1 and v0.41.0-preview.1) went out to backport a critical fix, while core engineering continues to tackle subagent reliability problems—most notably a bug where agents falsely report success after hitting turn limits. The community is actively contributing fixes for UI jank, terminal compatibility, and MCP lifecycle management, signaling strong engagement from external developers.

## Releases

**v0.40.1** and **v0.41.0-preview.1** — Both are patch releases cherry-picking commit `2194da2` to address an unspecified but urgent issue in the previous release candidates. The coexistence of stable (v0.40.x) and preview (v0.41.x) tracks suggests active parallel development streams.

- [v0.40.1 Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.40.1)
- [v0.41.0-preview.1 Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.41.0-preview.1)

## Hot Issues

1. **[#22323 – Subagent recovery after MAX_TURNS falsely reports GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** — A critical agent reliability bug where `codebase_investigator` claims success despite hitting turn limits with zero analysis completed. This undermines trust in autonomous workflows. (👍 2)

2. **[#22745 – AST-aware file reads, search, and codebase mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** — An EPIC investigating whether AST-aware tools can reduce token waste and improve precision when reading method boundaries. If successful, this would significantly reduce turn counts. (👍 1)

3. **[#25166 – Shell command execution gets stuck "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** — A persistent hang after simple CLI commands finish. High community interest (👍 3) because it breaks core workflow flow.

4. **[#24916 – Gemini CLI keeps asking for permissions on the same file](https://github.com/google-gemini/gemini-cli/issues/24916)** — Permission grants fail to persist across sessions, creating friction for users running repetitive tasks.

5. **[#23571 – Model creates tmp scripts in random directories](https://github.com/google-gemini/gemini-cli/issues/23571)** — When restricted from shell execution, the model generates scattered edit scripts, making cleanup painful for commits.

6. **[#24246 – 400 error with >128 tools enabled](https://github.com/google-gemini/gemini-cli/issues/24246)** — The API rejects requests when too many tools are declared. Calls for smarter tool scoping rather than arbitrary limits.

7. **[#22819 – Memory routing: global vs. project-level storage](https://github.com/google-gemini/gemini-cli/issues/22819)** — Memory subagent needs to distinguish between user preferences (global) and codebase-specific knowledge (project). (👍 2)

8. **[#22672 – Agent should discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** — Model occasionally uses `git reset --force` when safer alternatives exist. The community wants guardrails for dangerous operations. (👍 1)

9. **[#22267 – Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)** — Configurations like `maxTurns` are read correctly but not applied to browser agent runtime behavior.

10. **[#24546 – Helper to detect SSH sessions](https://github.com/google-gemini/gemini-cli/issues/24546)** — Created in response to the scrambled-text bug (#24202). Indicates growing Windows/SSH usage that needs first-class support.

## Key PR Progress

1. **[#26306 – Prevent infinite retry loop on persistent backend errors](https://github.com/google-gemini/gemini-cli/pull/26306)** — Fixes a liveness failure where the CLI hangs indefinitely during service outages or quota exhaustion. Essential for production robustness.

2. **[#26305 – Add /mcp remove slash command](https://github.com/google-gemini/gemini-cli/pull/26305)** — Completes the MCP lifecycle by adding interactive server removal without leaving the session. Closes a long-standing UX asymmetry.

3. **[#26073 – Fix bulk of remaining issues with generalist profile](https://github.com/google-gemini/gemini-cli/pull/26073)** — A major cleanup PR for the generalist agent profile, resolving issue #26072.

4. **[#26303 – Improve nuanced conflict detection in bot system prompts](https://github.com/google-gemini/gemini-cli/pull/26303)** — Enhances the bot's ability to identify architectural conflicts while avoiding premature deletion of complementary workflows.

5. **[#26189 – Prevent Windows bash backspace from triggering delete-word](https://github.com/google-gemini/gemini-cli/pull/26189)** — Fixes a terminal compatibility bug where Backspace in Git Bash/MSYS2 incorrectly deletes entire words instead of single characters.

6. **[#25352 – Fix massive logs causing scrolling lag](https://github.com/google-gemini/gemini-cli/pull/25352)** — Adds search and level-based filtering to the debug console to handle high-volume log output without UI degradation.

7. **[#25643 – Throttle text output updates to prevent UI jank](https://github.com/google-gemini/gemini-cli/pull/25643)** — Community contribution (ixchio) fixing React re-render storms during high-volume shell output like test suites.

8. **[#25641 – Coerce env var strings to booleans and numbers in settings](https://github.com/google-gemini/gemini-cli/pull/25641)** — Community PR (ixchio) fixing Zod schema validation when env vars resolve to string `"true"` instead of boolean `true`.

9. **[#26287 – Insert voice transcription at cursor position](https://github.com/google-gemini/gemini-cli/pull/26287)** — Fixes voice input always appending to the end of the buffer, ignoring cursor location.

10. **[#26292 – Behavioral eval for file creation and write_file tool selection](https://github.com/google-gemini/gemini-cli/pull/26292)** — Adds automated behavioral tests to ensure the model correctly chooses between file creation and write_file tools.

## Feature Request Trends

- **AST-aware code navigation** (#22745, #22746) — Multiple issues explore using AST parsing to improve file reading precision and codebase mapping, potentially reducing token waste and turn counts.
- **Memory architecture improvements** (#22819, #22809) — Strong demand for proper memory routing (global vs. project-level) and proactive memory writes by the agent.
- **MCP lifecycle management** (#26305) — Users want full interactive control over MCP servers (add, remove, enable/disable) without editing config files.
- **Voice input enhancements** (#26287, #18499) — Community contributors are actively building on the voice input feature, requesting cursor-position-aware transcription and pluggable backends.
- **Behavioral evaluation framework** (#24353, #23897, #26292) — Systematic expansion of automated evals for subagents, tool selection, and tool call rejection handling.

## Developer Pain Points

1. **Agent reliability under constraints** — Multiple issues (#22323, #24246, #23571) show agents breaking when hitting turn limits, tool count limits, or approval boundaries. The "false success" bug (#22323) is particularly dangerous as it masks failures.

2. **Terminal and TTY compatibility** — Windows/SSH environments suffer from scrambled text (#24202), broken backspace behavior (#26189), and hanging shell commands (#25166). The SSH detection helper (#24546) is a direct response to this cluster.

3. **Permission and settings persistence** — Users report permissions not sticking across sessions (#24916) and settings overrides being ignored (#22267), creating a trust gap in the configuration system.

4. **UI rendering during streaming** — Incremental table rendering (#25218), scroll jank in long chats (#24470), and UI freezes from high-volume output (#25643, #25352) degrade the interactive experience for power users.

5. **Destructive operations without guardrails** (#22672) — The model's occasional use of forceful git operations and risky shell commands highlights the need for better safety heuristics, especially in production environments.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**2026-05-01**

---

## Today's Highlights

Three patch releases (v1.0.40-1 through v1.0.40-3) shipped today, headlined by a major headless authentication breakthrough for MCP servers via `client_credentials` OAuth grant. The `/research` command now uses an orchestrator/subagent architecture, while session history and `/chronicle` command exited beta to all users. Community noise is dominated by permissions granularity requests and a stubborn Alpine Linux segfault that remains unresolved after 7 months.

---

## Releases

### v1.0.40-3 (latest)
[Release](https://github.com/github/copilot-cli/releases/tag/v1.0.40-3)

**Added**
- Support for `client_credentials` OAuth grant type for MCP servers — enables fully headless authentication without a browser

**Improved**
- "Exiting…" now prints to stderr immediately on Ctrl+C during prompt mode, making shutdown progress visible
- `/research` now uses an orchestrator/subagent model internally

### v1.0.40-2
[Release](https://github.com/github/copilot-cli/releases/tag/v1.0.40-2)

**Fixed**
- `/update` no longer re-submits the original `-i` prompt after restarting

### v1.0.40-1
[Release](https://github.com/github/copilot-cli/releases/tag/v1.0.40-1)

**Added**
- Azure DevOps repository detection — auto-disables the GitHub MCP server
- Session history, file tracking, and `/chronicle` command rolled out to all users
- Skills available as slash commands in ACP clients, matching CLI experience

**Improved**
- CLI startup speed

---

## Hot Issues

1. **#107 – Segmentation Fault on Alpine Linux** ([link](https://github.com/github/copilot-cli/issues/107))
   *14 comments | 👍 4*
   Any tool call triggers a segfault inside Alpine Linux Docker containers. Issue opened Sept 2025, last updated yesterday — 7 months with no fix. Critical blocker for containerized/CI workflows on musl-based systems.

2. **#1973 – Tool Whitelist for Interactive Mode** ([link](https://github.com/github/copilot-cli/issues/1973))
   *9 comments | 👍 13*
   Users want persistent approval for safe read-only tools (grep, cat, git log) without needing `/allow-all` which also permits destructive operations. This is the top-voted open feature request.

3. **#2769 – Pro+ Weekly Rate Limit Not Resetting** ([link](https://github.com/github/copilot-cli/issues/2769))
   *9 comments | 👍 3*
   Paying Copilot Pro+ subscribers hit rate limits that don't reset at the expected weekly boundary. Closed with no fix visible — community frustration is palpable.

4. **#1799 – How to Turn Off Alt-Screen Views** ([link](https://github.com/github/copilot-cli/issues/1799))
   *8 comments | 👍 4*
   The new alt-screen rendering mode (full-screen terminal takeover) has no opt-out. Users want a configuration toggle to revert to inline output.

5. **#1322 – Show Subagent Tool Call Details** ([link](https://github.com/github/copilot-cli/issues/1322))
   *3 comments | 👍 10*
   Subagent activity is opaque — only status and duration shown, unlike VS Code Copilot Chat which allows drill-down into each subagent tool call. High upvote ratio indicates strong demand for observability.

6. **#1082 – Copilot Hangs on `sudo` Commands** ([link](https://github.com/github/copilot-cli/issues/1082))
   *2 comments | 👍 10*
   CLI hangs indefinitely when running commands requiring `sudo` — never prompts for password. Blocks package installation, system config, and other privileged operations.

7. **#2795 – `--agent` + `--plugin-dir` + `-p` Flag Broken** ([link](https://github.com/github/copilot-cli/issues/2795))
   *3 comments | 👍 7*
   Combining `--agent`, `--plugin-dir`, and `-p` prompt flags causes the CLI to search the wrong directories for the agent definition. Works without `-p`, prompting speculation the non-interactive path has a lookup bug.

8. **#1995 – Per-Tool Permission Settings** ([link](https://github.com/github/copilot-cli/issues/1995))
   *1 comment | 👍 7*
   Users want persistent per-tool approval (e.g., always allow `read_file` but prompt for `shell`). Complements #1973; both point to a systemic permissions UX gap.

9. **#2995 – Can't Use DeepSeek API** ([link](https://github.com/github/copilot-cli/issues/2995))
   *2 comments | 👍 5*
   Setting `COPILOT_PROVIDER_TYPE="openai"` with DeepSeek base URL fails. Model provider flexibility remains constrained — relevant as DeepSeek gains traction.

10. **#1381 – Rewind Requires Git Repository** ([link](https://github.com/github/copilot-cli/issues/1381))
    *1 comment | 👍 4*
    `Rewind` (session rollback) fails with "not in a git repository," excluding users of Mercurial, Jujutsu, or other VCS. VS Code Copilot doesn't have this restriction.

---

## Key PR Progress

*Only one PR was active in the last 24 hours; no further PRs to report.*

**#1968 – Install: Retry Without Token When Authenticated Requests Fail** ([link](https://github.com/github/copilot-cli/pull/1968))
*Created: 2026-03-11 | Updated: 2026-04-30*
Fixes `copilot install` failures when `GITHUB_TOKEN` is set but not SSO-authorized. Download helper tries with token first, then falls back to unauthenticated. Essential for GitHub Enterprise/SSO organizations. Still open after 50 days.

---

## Feature Request Trends

1. **Granular tool permissions (meta-theme)** — Issues #1973, #1995, #3028 cluster around the same gap: users need persistent, per-tool permission policies (trust `read_file` and `grep`, prompt for `shell` and `write_file`). The current binary allow-all/deny-all model is inadequate for production use.

2. **Subagent transparency** — #1322 and rising interest in `/research` subagent behavior indicate users want the same observability Copilot Chat offers in VS Code. The new orchestrator architecture in v1.0.40-3 may address this, but documentation is sparse.

3. **Headless/MCP authentication** — #3028 (MCP permissions) and today's `client_credentials` OAuth release suggest a push toward automating MCP server auth for CI/CD pipelines. Community wants configurable tool allow-lists for MCP servers matching the CLI's own tool model.

4. **Session and memory improvements** — #3049 (checkpoints lost after compaction), #3060 (memory fails for non-GitHub origins), and #1381 (rewind requires git) all point to session persistence being brittle, especially for non-standard workflows.

5. **Plugin/agent composition** — #3061 requests agent inheritance (`extends`) to share base prompts across specialist agents. Combined with #3056 (temperature control for plugin skills), plugin developers are asking for richer metadata and configuration.

---

## Developer Pain Points

- **Alpine Linux segfault (#107)** — Unresolved for 7 months, blocks Docker-based and CI workflows on the second-most-popular container OS.
- **Rate limit opacity (#2769, #2828)** — Pro+ subscribers hit weekly limits without clear reset times or actionable suggestions. The "wait 2 minutes" error message is perceived as dismissive.
- **Authentication friction (#3057)** — macOS users report forced re-authentication on every session, suggesting a credential caching bug in the Homebrew-installed binary.
- **Cross-platform clipboard breakage (#3062)** — OSC 52 clipboard on Windows/WSL produces garbled CJK characters due to UTF-8/UTF-16LE encoding mismatch. Blocks shell command copy-paste on Windows.
- **Non-GitHub origin friction (#3060, #3059)** — Azure DevOps, GitLab, and other VCS hosts face broken `store_memory`, and the deprecation of `.vscode/mcp.json` forces users to maintain two MCP configurations.
- **`sudo` deadlock (#1082)** — CLI cannot prompt for `sudo` passwords, making elevated commands a dead end. No fix or workaround documented.
- **Plugin update state drift (#3058)** — `copilot plugin update` updates files but doesn't sync the version field in `config.json`, causing inconsistency between on-disk state and metadata.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-01

## Today's Highlights
Version 1.41.0 ships with clipboard paste support on headless Linux over SSH and plugin installation from `.zip` URLs — both community-contributed fixes. A cluster of shell UX performance PRs landed today addressing input latency, focus event leaks, and toolbar git polling overhead. Meanwhile, the ACP protocol gap blocking Zed integration gained traction with a new fix PR.

## Releases
**v1.41.0** — [Release](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.41.0)
- Fix: Clipboard paste on headless Linux over SSH ([#2115](https://github.com/MoonshotAI/kimi-cli/pull/2115))
- Fix: Plugin install from `.zip` URLs ([#2126](https://github.com/MoonshotAI/kimi-cli/pull/2126))

## Hot Issues

1. **[#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) — Memory System for persistent context**  
   Long-standing enhancement request (open since Feb) for auto/manual memory across sessions. 5 comments, no upvotes yet — community interest remains but implementation hasn't started.

2. **[#1617](https://github.com/MoonshotAI/kimi-cli/issues/1617) — Ctrl-V image paste broken on Windows Terminal**  
   Opened late March, still unresolved. Windows users hitting this daily — a mirror of the headless Linux fix that landed in 1.41.0.

3. **[#2131](https://github.com/MoonshotAI/kimi-cli/issues/2131) — CLI pollutes env vars, crashes Kimi Desktop**  
   CLOSED — environment variable leakage from the CLI process causes the Electron-based desktop app to crash on startup. High severity, yet only 1 comment; fix appears to be deferred.

4. **[#2127](https://github.com/MoonshotAI/kimi-cli/issues/2127) — ACP protocol missing `session/list`/`session/get`**  
   Zed editor users cannot load conversation history. Zero comments so far, but a matching PR (#2132) was opened same day.

5. **[#1994](https://github.com/MoonshotAI/kimi-cli/issues/1994) — kimiCode quota calculation uses tokens, not API calls**  
   Billing confusion: 2 tasks consumed 2-hour quota due to K2.6's long chain-of-thought tokens. 4 upvotes — the highest community signal this cycle.

6. **[#2122](https://github.com/MoonshotAI/kimi-cli/issues/2122) — Shell mode hardcodes `/bin/sh`**  
   Users on zsh/fish can't use aliases or shell-specific features. Zero comments but clearly a UX reg for non-bash users.

7. **[#2121](https://github.com/MoonshotAI/kimi-cli/issues/2121) — Shift+Enter for newline instead of Ctrl+J**  
   Small ergonomic ask mirroring other CLI tools. No comments yet, but reflects UI consistency expectations.

8. **[#2114](https://github.com/MoonshotAI/kimi-cli/pull/2114) — Granular auto-approval rules** (PR, tracked as issue-like)  
   Feature parity with Claude Code's auto-approval config. Still open but already has test coverage.

9. **[#1972](https://github.com/MoonshotAI/kimi-cli/pull/1972) — Visual context progress bar** (PR, tracked as issue-like)  
   Replaces plain-text `context: 0.0%` with a color-coded Unicode bar. Open since April 21, awaiting merge.

10. **[#2129](https://github.com/MoonshotAI/kimi-cli/pull/2129) — `KIMI_SHARE_DIR` respect for plan files**  
    Plan files were hardcoded to `~/.kimi/plans` regardless of env var. Fix now in review.

## Key PR Progress

1. **[#2136](https://github.com/MoonshotAI/kimi-cli/pull/2136) — Reduce hidden modal input latency**  
   Skips completion startup when input buffer is hidden; switches to idle refresh interval. Focused tests added.

2. **[#2135](https://github.com/MoonshotAI/kimi-cli/pull/2135) — Throttle toolbar git metadata**  
   Caches git branch/status per prompt session to avoid polling on every keystroke. Significant performance win for large repos.

3. **[#2134](https://github.com/MoonshotAI/kimi-cli/pull/2134) — Ignore xterm focus events**  
   Registers focus-in/focus-out as `Keys.Ignore` to prevent `[I`/`[O` leaking into input. Prevents stray characters in shell prompt.

4. **[#2133](https://github.com/MoonshotAI/kimi-cli/pull/2133) — Include `AGENTS.md` for custom prompts**  
   Ensures custom agent prompts receive merged instructions without duplication. Fixes a gap in the custom prompt pipeline.

5. **[#2132](https://github.com/MoonshotAI/kimi-cli/pull/2132) — Replay ACP session history on load**  
   Persists wire history for ACP runs; replays user/assistant/thought/tool events during `session/load`. Direct fix for [#2127](https://github.com/MoonshotAI/kimi-cli/issues/2127).

6. **[#2114](https://github.com/MoonshotAI/kimi-cli/pull/2114) — Granular auto-approval rules in config**  
   Adds file-scoped auto-approve rules to `config.toml`, similar to Claude Code. Authored by community contributor.

7. **[#2129](https://github.com/MoonshotAI/kimi-cli/pull/2129) — `KIMI_SHARE_DIR` for plan files**  
   Removes hardcoded path; uses `get_share_dir() / "plans"`. Supersedes earlier closed PR [#2064](https://github.com/MoonshotAI/kimi-cli/pull/2064).

8. **[#1972](https://github.com/MoonshotAI/kimi-cli/pull/1972) — Visual context progress bar**  
   Color-coded Unicode block bar replacing plain-text percentage. Visually aligns with claude-hud plugin.

9. **[#2126](https://github.com/MoonshotAI/kimi-cli/pull/2126) — Plugin install from `.zip` URL** (merged)  
   Streams via `httpx` then extracts. Checks zip branch before git-URL heuristic.

10. **[#2115](https://github.com/MoonshotAI/kimi-cli/pull/2115) — Clipboard paste on headless Linux** (merged)  
    Handles `DISPLAY` absence gracefully. Community contributor fix shipping in 1.41.0.

## Feature Request Trends
- **Memory/Persistence**: [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) — cross-session context memory remains the top unaddressed feature. High conceptual appeal, zero implementation progress.
- **ACP Protocol Completeness**: [#2127](https://github.com/MoonshotAI/kimi-cli/issues/2127) — Zed integration blocked on missing session API endpoints. Early signal of editor ecosystem demand.
- **IDE-First Ergonomics**: [#2121](https://github.com/MoonshotAI/kimi-cli/issues/2121) (Shift+Enter), [#2122](https://github.com/MoonshotAI/kimi-cli/issues/2122) (default shell) — Users expect CLI to respect host shell and common UI conventions.
- **Visual Feedback**: [#1972](https://github.com/MoonshotAI/kimi-cli/pull/1972) — Progress bars and richer status indicators are a recurring pattern.

## Developer Pain Points
- **Quota/Billing Confusion**: [#1994](https://github.com/MoonshotAI/kimi-cli/issues/1994) — Token-based usage for long-thinking models (K2.6) depletes quota much faster than users expect from "per-request" marketing. 4 upvotes signal widespread frustration.
- **Windows Parity**: [#1617](https://github.com/MoonshotAI/kimi-cli/issues/1617) — Image paste still broken while Linux fix shipped. Windows users feel deprioritized.
- **Env Pollution**: [#2131](https://github.com/MoonshotAI/kimi-cli/issues/2131) — Session variables leaked crashing unrelated software (Kimi Desktop). Critical bug resolved only with a comment, not a code fix.
- **Shell Integration**: [#2122](https://github.com/MoonshotAI/kimi-cli/issues/2122) — Hardcoded `/bin/sh` breaks advanced shell users. Small fix but impacts daily productivity for zsh/fish users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-01

## Today's Highlights

The OpenCode team is deep in a major **Effect-based instance context refactor**, with Kit Langton landing five refactoring PRs today to phase out legacy `Instance` ALS reads. Meanwhile, the community is rallying around the **Memory Megathread (#20695)** as the central hub for heap snapshot collection and memory debugging. Several model-specific bugs continue to surface, particularly around DeepSeek V4 thinking mode, GPT-5.5 context limits, and Bedrock provider compatibility.

## Releases

No new releases in the last 24 hours. The latest available versions remain v1.14.30 (CLI/TUI) and matching desktop builds.

---

## Hot Issues — 10 Noteworthy

### 1. [#20695 — Memory Megathread (OPEN)](https://github.com/anomalyco/opencode/issues/20695)
> **Hot / Perf / Core** — The central collection point for memory leak reports. The maintainers explicitly ask users to **not** have LLMs suggest solutions, and instead request manual heap snapshots. With **70 comments** and **41 👍**, this reflects a top-of-mind stability concern. The community is actively contributing snapshots, and the thread is driving compaction fixes across multiple PRs.

### 2. [#25148 — Free BYOK request cap exceeded (CLOSED)](https://github.com/anomalyco/opencode/issues/25148)
> **Bug** — A user hit the free BYOK tier limit unexpectedly. Closed quickly (16 comments, 14 👍), but reveals ongoing confusion about OpenCode Go subscription tiers vs. OpenRouter BYOK limits.

### 3. [#24648 — Problem with AWS Bedrock (OPEN)](https://github.com/anomalyco/opencode/issues/24648)
> **Bug / Core** — Mixing Opus and Sonnet across plan/build agents fails with `undefined` errors. Active debugging with 8 comments; often indicates a provider routing bug in multi-model configs.

### 4. [#24751 — GPT-5.5 context limits not respected (CLOSED)](https://github.com/anomalyco/opencode/issues/24751)
> **Bug / Core** — Hardcoded context limits for GPT-5.5 override user config, traced to PR #24212. Has been fixed but exemplifies friction when model-specific overrides aren't documented or toggleable.

### 5. [#23464 — Opus 4.7 failing tool calls (OPEN)](https://github.com/anomalyco/opencode/issues/23464)
> **Bug / Core** — Intermittent `invalid_type` errors on the `question` tool. With 5 comments and 0 👍, low community engagement but high impact for users on Opus 4.7. Points to a schema validation mismatch.

### 6. [#23566 — Docs say LSP is enabled by default, but it's not (OPEN)](https://github.com/anomalyco/opencode/issues/23566)
> **Bug / Docs** — 6 comments, 6 👍. A documentation gap: PR #23416 intentionally disables LSP by default, but official docs still claim auto-install. New users are confused why LSP doesn't light up.

### 7. [#20261 — Colors render incorrectly after editor mode (OPEN)](https://github.com/anomalyco/opencode/issues/20261)
> **Bug / OpenTUI** — UI colors dim/shift after exiting editor mode. 7 comments, 6 👍. A visual regression in the TUI that's been open since March—affects daily UX for terminal users.

### 8. [#25125 — Local Ollama missing under providers in GUI (OPEN)](https://github.com/anomalyco/opencode/issues/25125)
> **Bug / Web** — Desktop users can't find a way to add local Ollama without CLI configuration. 4 comments. Represents a recurring request for first-class local model support in the GUI.

### 9. [#25168 — Jinja template error after compaction with Qwen3 + LM Studio (OPEN)](https://github.com/anomalyco/opencode/issues/25168)
> **Bug / Core** — Compaction crashes with `"No user query found in messages"`. 2 comments. A critical user-facing crash that blocks multi-turn with Qwen3 — likely a message shape mismatch post-compaction.

### 10. [#25202 — GPT-5.5 visible token count not dropping mid-session (OPEN)](https://github.com/anomalyco/opencode/issues/25202)
> **Core** — User reports GPT-5.5 has different visible token behavior vs. GPT-5.4, reaching compaction sooner. 2 comments. Signals a potential bug in how token counting (or compaction threshold) interacts with GPT-5.5's architecture.

---

## Key PR Progress — 10 Important

### 1. [#25207 — refactor(session): yield instance context in system prompt](https://github.com/anomalyco/opencode/pull/25207) *(CLOSED)*
Kit Langton moves system prompt environment generation into an Effect so it can yield `InstanceState.context`. Eliminates synchronous ALS reads, aligning session prompt assembly with the new effect-driven architecture.

### 2. [#25205 — refactor(file): yield instance context in watcher](https://github.com/anomalyco/opencode/pull/25205) *(CLOSED)*
Same refactor pattern applied to the file watcher — heavily involved in real-time file change detection. Ensures watcher roots, protected paths, and git directory lookup use effect-provided context.

### 3. [#25206 — refactor(sync): capture instance context for publish](https://github.com/anomalyco/opencode/pull/25206) *(CLOSED)*
Captures instance context in sync/replay paths before publishing to GlobalBus. Required for dual-context (ALS + Effect) compatibility.

### 4. [#25204 — refactor(project): yield instance context in bootstrap](https://github.com/anomalyco/opencode/pull/25204) *(CLOSED)*
Replaces legacy `Instance` ALS reads in project bootstrap with `InstanceState.context`. A key piece of the architecture change since bootstrap runs on startup.

### 5. [#25200 — refactor(session): yield instance context in llm](https://github.com/anomalyco/opencode/pull/25200) *(CLOSED)*
LLM prompt path’s direct `Instance.project` read replaced with `InstanceState.context` for opencode provider headers. Also updates workflow model approval callback to support dual context.

### 6. [#25114 — fix(desktop): Prevent model response interruption when opening settings](https://github.com/anomalyco/opencode/pull/25114) *(CLOSED)*
Fixes a desktop bug (#24859) where opening the Settings dialog interrupts an active model response because `SettingsGeneral` mounts and fires `createResource` call. Simple but impactful UX fix.

### 7. [#25201 — Pass CORS options to HttpApi backend](https://github.com/anomalyco/opencode/pull/25201) *(CLOSED)*
Forward server CORS options into the Effect HttpApi backend (not just Hono). Adds shared CORS options type and a regression test — important for multi-platform server deployment.

### 8. [#24512 — Refactor v2 session events as schemas *(BETA)*](https://github.com/anomalyco/opencode/pull/24512) *(OPEN)*
Major refactor of v2 session events from class-based to schema-based definitions. Adds shared prompt attachment schemas and updates stepper matching. Core infrastructure change.

### 9. [#25198 — fix: fix AI refusing to commit](https://github.com/anomalyco/opencode/pull/25198) *(OPEN)*
Removes disruptive prompt-policy lines that caused AI agents to refuse explicit commit requests (fixes #17157). Small change with outsized impact on developer workflow.

### 10. [#25194 — fix(opencode): strip reasoning in compaction and cross-model export](https://github.com/anomalyco/opencode/pull/25194) *(OPEN)*
Adds `stripReasoning` path for turning stored messages into provider messages during compaction and cross-model export. Critical for interop between models that output reasoning blocks and those that don't.

---

## Feature Request Trends

The most-requested feature directions observed across this digest's issues:

1. **Configurable Timeouts** — [#15080](https://github.com/anomalyco/opencode/issues/15080): Users want configurable timeout on the Task tool for subagents. Subagents hang indefinitely, blocking the entire session — this is the #1 feature gap for reliability.
2. **Terminal / Bash Management** — [#6375](https://github.com/anomalyco/opencode/issues/6375): Better active/background terminal management. Request for `spawn()` with TTY allocation (not just piped stdio), inherited shell state, and proper SIGINT/SIGTERM handling.
3. **UI Customization** — [#25142](https://github.com/anomalyco/opencode/issues/25142): Control content area max-width / horizontal padding in the TUI. Users find wide terminals underutilized due to fixed padding.
4. **Markdown Preview Toggle** — [#13705](https://github.com/anomalyco/opencode/issues/13705): Request for a Markdown preview/source toggle in the file editor. Low urgency but consistent community interest.
5. **Mobile Touch Optimization** — [#18767](https://github.com/anomalyco/opencode/pull/18767): The open PR for mobile touch optimization continues to collect interest.

---

## Developer Pain Points

Several recurring frustrations are evident from the 50+ issues active today:

1. **Model-specific quirks killing multi-turn** — Multiple reports across DeepSeek V4 ([#24803](https://github.com/anomalyco/opencode/issues/24803), [#25134](https://github.com/anomalyco/opencode/issues/25134)), GPT-5.5 ([#24751](https://github.com/anomalyco/opencode/issues/24751), [#25202](https://github.com/anomalyco/opencode/issues/25202)), Opus 4.7 ([#23464](https://github.com/anomalyco/opencode/issues/23464)), and Qwen3 ([#25168](https://github.com/anomalyco/opencode/issues/25168)). Each model has unique quirks around thinking/reasoning, context limits, and message shapes that break multi-turn usage.

2. **Memory & compaction fragility** — The Memory Megathread (#20695) plus multiple compaction-related crashes (Jinja errors (#25168), reasoning stripping failure (#25194)) indicate the compaction pipeline is still fragile, especially for models with non-standard message formats.

3. **Provider integration gaps** — AWS Bedrock ([#24648](https://github.com/anomalyco/opencode/issues/24648)), local Ollama in GUI ([#25125](https://github.com/anomalyco/opencode/issues/25125)), and OpenRouter BYOK tier caps ([#25148](https://github.com/anomalyco/opencode/issues/25148)) create friction. Users expect first-class support for major providers, not just OpenAI/Anthropic.

4. **Documentation vs. reality** — LSP being documented as on-by-default but actually disabled-by-default ([#23566](https://github.com/anomalyco/opencode/issues/23566)) erodes trust. The OpenAI-compatible provider key mismatch also caught users ([#23623](https://github.com/anomalyco/opencode/pull/23623)).

5. **Desktop UX regressions** — The archive-button-too-easy-to-hit ([#25176](https://github.com/anomalyco/opencode/issues/25176)) and settings-interrupts-active-response ([#25114](https://github.com/anomalyco/opencode/pull/25114)) show that desktop GUI polish still has room for improvement.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-01

## Today's Highlights

**v0.71.0** ships with a major provider shakeup: Google Gemini CLI and Google Antigravity support have been removed, while Cloudflare AI Gateway is added as a new first-party provider. A flurry of security-conscious PRs landed today (auth-in-memory env vars, tool-argument injection fix), and a wave of `inprogress` bugs around tool-calling reliability, duplicate sessions, and provider compat regressions saw active triage.

## Releases

**v0.71.0** — [Release](https://github.com/badlogic/pi-mono/releases/tag/v0.71.0)

- **Breaking:** Removed built-in Google Gemini CLI and Google Antigravity provider support. Existing configs using those providers must migrate to a supported alternative.
- **New:** Cloudflare AI Gateway provider support (`CLOUDFLARE_API_KEY`, `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_GATEWAY_ID` environment variables).

## Hot Issues (10 selected, of 50 total)

1. **[#3942] `pi update --self` fails with custom npm prefix** — [Issue](https://github.com/badlogic/pi-mono/issues/3942)  
   Self-update introduced in v0.70.3 breaks when pi is installed via `npm --prefix` (common on Nix). 7 comments, open. Community frustration around PNPM/Bun/Nix edge cases is growing.

2. **[#3959] Mistral API error (404) for multiple models** — [Issue](https://github.com/badlogic/pi-mono/issues/3959)  
   Two different API keys fail with 404 for `mistral-large`, `small`, `codestral`. 7 comments, closed. Likely a model-ID endpoint mapping mismatch; flagged `possibly-openclaw-clanker`.

3. **[#3462] Auto-refreshing Bedrock bearer tokens** — [Issue](https://github.com/badlogic/pi-mono/issues/3462)  
   Proposal to provide per-invocation bearer token callbacks for corporate contexts where tokens expire mid-session. 7 comments, closed. Highly relevant for enterprise SSO setups.

4. **[#4035] Restrict auth credentials from extension context** — [Issue](https://github.com/badlogic/pi-mono/issues/4035)  
   Opt-in "restricted mode" to prevent extensions from accessing `authStorage`/`apiKeys` via `ctx.modelRegistry`. 6 comments, closed. Aligns with today's security-focused PRs.

5. **[#4018] `grep` tool RCE via `rg --pre` argument injection** — [Issue](https://github.com/badlogic/pi-mono/issues/4018)  
   Critical: ripgrep argv built without `--` separator allows LLM-controlled `pattern` to inject `--pre=<path>`, enabling arbitrary command execution. 3 comments, closed `inprogress`. Immediate security patch expected.

6. **[#4022] Antigravity models "no longer supported"** — [Issue](https://github.com/badlogic/pi-mono/issues/4022)  
   Users hitting the removal wall in v0.71.0. 3 comments, closed. Echoes the breaking change announcement.

7. **[#4001] Agent steering not observable at tool boundaries** — [Issue](https://github.com/badlogic/pi-mono/issues/4001)  
   Queued steering corrections only drain after a full tool-call batch, leaving stale tool calls in flight. 4 comments, closed. Safety concern for embedded/autonomous agent use.

8. **[#4016] Fireworks Kimi K2.5/K2.6 still emit `eager_input_streaming`** — [Issue](https://github.com/badlogic/pi-mono/issues/4016)  
   Bundled model definitions missing `compat` flags, causing 400 errors on Fireworks Anthropic-compatible endpoint. 4 comments, closed. Workaround merged via PR #3678.

9. **[#4026] openai-codex-responses: low verbosity regresses tool-calling** — [Issue](https://github.com/badlogic/pi-mono/issues/4026)  
   Default `text.verbosity = "low"` causes Codex models to emit commentary text instead of tool calls, ending turns early. 4 comments, closed `inprogress`.

10. **[#3946] v0.70.6 install fails — missing provenance attestation** — [Issue](https://github.com/badlogic/pi-mono/issues/3946)  
    Dependency `@mariozechner/clipboard@0.3.3` missing npm provenance attestation, blocking aube/npm installs. 3 comments, closed `inprogress`.

## Key PR Progress (10 selected, of 25 total)

1. **[#4040] fix(openai-completions): honor compat.supportsTools=false** — [PR](https://github.com/badlogic/pi-mono/pull/4040)  
   Merged. OpenAI-compatible models with `supportsTools: false` now correctly omit tool definitions from request payload. Fixes silent 400 errors for non-tool models.

2. **[#4039] fix: regenerate package-lock.json for sandbox example** — [PR](https://github.com/badlogic/pi-mono/pull/4039)  
   Merged. Resolves npm install failures for the sandbox extension example on clean checkouts.

3. **[#4037] fix: handle shift+enter in legacy terminals** — [PR](https://github.com/badlogic/pi-mono/pull/4037)  
   Merged. Treats legacy SS3 M as Shift+Enter in known terminal emulators, fixing newline insertion.

4. **[#4025] feat(coding-agent): support `PI_CODING_AGENT_AUTH_JSON`** — [PR](https://github.com/badlogic/pi-mono/pull/4025)  
   Merged. Pass auth credentials in-memory via environment variable, bypassing `auth.json` files. Deletes env var immediately after capture. Closes #4030.

5. **[#4024] feat(coding-agent): support `PI_CODING_AGENT_SESSION_DIR`** — [PR](https://github.com/badlogic/pi-mono/pull/4024)  
   Merged. Adds env variable equivalent to `--session-dir` flag for consistency in CI/automation contexts.

6. **[#4013] fix(coding-agent): remove `detached: true` on Windows for pwsh** — [PR](https://github.com/badlogic/pi-mono/pull/4013)  
   Merged. Fixes PowerShell stdout/stderr piping on Windows by removing `detached: true` flag. Closes #4012.

7. **[#4005] feat(ai): add Xiaomi MiMo provider** — [PR](https://github.com/badlogic/pi-mono/pull/4005)  
   Open. Adds Xiaomi MiMo as a built-in OpenAI-compatible provider. Likely low community adoption but expands coverage.

8. **[#4007] feat(coding-agent): official local-LLM provider extensions** — [PR](https://github.com/badlogic/pi-mono/pull/4007)  
   Merged. Ships four official custom-provider extensions: llama.cpp, LM Studio, vLLM, Ollama. Key for offline/self-hosted workflows.

9. **[#3955] fix(coding-agent): report edit access failures correctly** — [PR](https://github.com/badlogic/pi-mono/pull/3955)  
   Merged. Distinguishes between file-not-found and permission-denied errors in edit tool, returning correct error messages. Closes #3894.

10. **[#3868] refactor(coding-agent): migrate syntax highlighting to Shiki** — [PR](https://github.com/badlogic/pi-mono/pull/3868)  
    In-progress. Replaces terminal and HTML export code highlighting with Shiki, adds first-class `syntaxTheme` support to Pi themes. Significant UX upgrade.

## Feature Request Trends

- **Provider expansion** is the dominant theme: Cloudflare AI Gateway shipped, Xiaomi MiMo is incoming, and requests for Grok 3.5, Mistral Medium 3.5, and refreshed model definitions continue (Issues #4036, #4009).
- **Environment variable parity** for CLI flags (`SESSION_DIR`, `AUTH_JSON`) has strong momentum from automation/cI use cases (Issues #4027, #4030). Community is pushing for "no filesystem footprint" deployments.
- **Extension safety controls** are emerging: restricting auth credential access from extensions (Issue #4035) and making agent steering observable at tool boundaries (Issue #4001) signal a shift toward secure, auditable extension models.
- **Model-provider disable knobs** (Issue #3977) reflect a desire for leaner model lists and simpler configuration in multi-provider setups.

## Developer Pain Points

1. **Package-manager installation fractures** — `pi update --self` fails under npm custom prefix, bun, and PNPM setups (Issues #3942, #3980, #3946). The community is frustrated by inconsistent self-update paths across runtimes/package managers.
2. **Provider compat regressions on every release** — `eager_input_streaming`, `cache_control`, and `compat.supportsTools` flags repeatedly cause 400 errors when bundled model definitions fall out of sync with provider API changes (Issues #4016, #3575, #4032). The release process lacks automated provider-integration tests.
3. **Tool-calling reliability degrades under default settings** — The `openai-codex-responses` verbosity change (Issue #4026) and the `grep` argument-injection vulnerability (Issue #4018) highlight that default configurations and shell-arg handling are not hardened for production use.
4. **Session management quirks** — Duplicate entry IDs hanging `/tree` (Issue #3930), incorrect session-cwd on resume (Issue #4006), and broken skill provenance in `pi config` (PR #4028) erode daily workflow trust.
5. **Tool-call interception rendering bugs** — Blocked edits rendered twice (Issue #3830) and `setThinkingLevel()` not refreshing UI borders (Issue #3888) suggest the TUI extension-hook layer lacks comprehensive rendering lifecycle tests.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date: 2026-05-01**

---

## Today's Highlights

The team shipped **v0.15.6** with notable performance improvements (FileReadCache) and CLI stability fixes. The community is actively reporting latency issues around auto-memory recall (5s delays per turn) and requesting better transparency for sub-agent operations, while the PR pipeline shows strong progress on telemetry infrastructure, desktop packaging, and review tooling.

---

## Releases

**[v0.15.6](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.6)** — *Latest Stable*
- **Performance**: `FileReadCache` and short-circuit for unchanged reads (PR [#3717](https://github.com/QwenLM/qwen-code/pull/3717))
- **CLI fixes**: Proxy setting now honored properly; sticky todo panel retained; SubAgent display height bounded to prevent flicker
- **Memory fix**: "Dream" feature uses project transcript path correctly

**[v0.15.6-nightly.20260501.8b6b0d64f](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.6-nightly.20260501.8b6b0d64f)** — *Nightly*
- Same fixes as stable plus nightly CI release.

**[v0.15.6-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.6-preview.0)** — *Preview*
- Pre-release cut containing the same core fixes.

---

## Hot Issues

1. **[#3652](https://github.com/QwenLM/qwen-code/issues/3652) — InternalError on long conversations** (8 comments)
   - *Input length exceeds 983,616 token limit.* High-signal bug: users restarting chats repeatedly to avoid the cap. Community is frustrated. PR [#3698](https://github.com/QwenLM/qwen-code/pull/3698) addresses this with auto-compression before model sends.

2. **[#3000](https://github.com/QwenLM/qwen-code/issues/3000) — Memory diagnostics missing** (3 comments)
   - P3 request for V8 heap analysis, leak detection, and memory pressure monitoring. Growing concern as users run longer sessions.

3. **[#3738](https://github.com/QwenLM/qwen-code/issues/3738) — Download connection failure** (3 comments)
   - Chinese-language user report: download fails on connection error. Unclear network region or firewall issue.

4. **[#2251](https://github.com/QwenLM/qwen-code/issues/2251) — VSCode extension connection errors** (3 comments, closed)
   - "Internal error" with "Connection error" after OAuth. `/ide enable` workaround known. Now closed, but users still encounter.

5. **[#2394](https://github.com/QwenLM/qwen-code/issues/2394) — `/skills` unavailable in VSCode Companion** (3 comments, closed)
   - Slash commands not routed to skills in IDE extension. Feature gap noted.

6. **[#3185](https://github.com/QwenLM/qwen-code/issues/3185) — Windows `/quit` hang** (2 comments)
   - CLI stuck after exit; `ansiRegex3 is not a function` error. Windows-specific blocking issue for some users.

7. **[#3730](https://github.com/QwenLM/qwen-code/issues/3730) — Auto-stop after update** (P1, 1 comment)
   - User reports Qwen Code self-terminates tasks without ESC or user action after v0.15.x update. Critical for long-running agent workflows.

8. **[#3678](https://github.com/QwenLM/qwen-code/issues/3678) — Light theme for `/export` HTML** (1 comment, 👍3)
   - Feature request: add light theme toggle to exported HTML. Popular ask (3 upvotes), plus a preview screenshot shows work in progress.

9. **[#3426](https://github.com/QwenLM/qwen-code/issues/3426) — VSCode: compression settings ignored** (1 comment)
   - `contextPercentageThreshold: 0.75` and `contextWindowSize: 220000` not honored; no compression at 165k tokens. Critical for long-session users.

10. **[#3759](https://github.com/QwenLM/qwen-code/issues/3759) — Auto-memory recall blocks every turn for 5s** (1 comment, fresh)
    - *New critical bug*: memory recall selector times out, delaying each user turn by ~5 seconds. Filed by power user `tanzhenxin`. PR [#3769](https://github.com/QwenLM/qwen-code/pull/3769) in progress.

---

## Key PR Progress

1. **[#3774](https://github.com/QwenLM/qwen-code/pull/3774) — Enforce prior read before Edit/WriteFile** *(feat/core)*
   - `wenshao`: Leverages new `FileReadCache` (from v0.15.6) to verify model has seen current file bytes before mutation. Safety improvement.

2. **[#3769](https://github.com/QwenLM/qwen-code/pull/3769) — Isolate fast model side queries** *(fix/core)*
   - `LaZzyMan`: Routes auto-memory recall and other side queries to the correct fast model. Addresses latency bug #3759.

3. **[#3778](https://github.com/QwenLM/qwen-code/pull/3778) — Desktop app package with ACP SDK** *(feat/desktop)*
   - `DragonnZhang`: New `packages/desktop/` package integrating Qwen ACP SDK. Signals move toward a native desktop client.

4. **[#3762](https://github.com/QwenLM/qwen-code/pull/3762) — VSCode: message edit/rewind + metadata UI** *(feat/vscode)*
   - `DragonnZhang`: Adds full message editing, rewind, and metadata display in the VSCode extension. Major UX improvement for IDE users.

5. **[#3754](https://github.com/QwenLM/qwen-code/pull/3754) — Expand review pipeline + CLI subcommands** *(feat/review)*
   - `wenshao`: 9 parallel agents (3 personas), iterative reverse audit, plus new `qwen review` CLI commands. Significant review automation upgrade.

6. **[#3749](https://github.com/QwenLM/qwen-code/pull/3749) — Fix double-wrapped API errors in `-p` mode** *(fix/cli)*
   - `umut-polat`: Non-interactive mode now prints exactly one clean error line instead of three + stack trace. Fixes #3748.

7. **[#3743](https://github.com/QwenLM/qwen-code/pull/3743) — Prevent file paths as slash commands** *(fix/cli)*
   - `yiliang114`: Slash-prefixed file paths (e.g., `/Users/...`) no longer consumed as unknown commands. Fixes #1804.

8. **[#3741](https://github.com/QwenLM/qwen-code/pull/3741) — MCP health pill in footer** *(feat/cli)*
   - `wenshao`: Shows MCP server connectivity status in CLI footer. Helps users detect dropped connections without running `/mcp`.

9. **[#3698](https://github.com/QwenLM/qwen-code/pull/3698) — Run auto compression before ACP model sends** *(fix/acp)*
   - `Jerry2003826`: Fixes #3652 (token limit error). Compresses chat before ACP sends; re-reads active chat after compression.

10. **[#3771](https://github.com/QwenLM/qwen-code/pull/3771) — Restore SubAgent shortcut focus** *(fix/cli)*
    - `yiliang114`: Fixes #3763 — Ctrl+E/F now work on running SubAgents again, after focus gate regression in v0.15.6.

---

## Feature Request Trends

1. **Sub-agent visibility** — Multiple requests ([#3758](https://github.com/QwenLM/qwen-code/issues/3758), [#3763](https://github.com/QwenLM/qwen-code/issues/3763)) for full step-by-step thinking display, not just tool call lists.
2. **Fast model / side query isolation** ([#3760](https://github.com/QwenLM/qwen-code/issues/3760), [#3765](https://github.com/QwenLM/qwen-code/issues/3765), [#2791](https://github.com/QwenLM/qwen-code/issues/2791)) — Users want reasoning disabled on fast model queries and per-model settings honored independently.
3. **Light theme for exports** ([#3678](https://github.com/QwenLM/qwen-code/issues/3678)) — Simple but popular (👍3): `/export` HTML should have a light theme option.
4. **Desktop application** — PR [#3778](https://github.com/QwenLM/qwen-code/pull/3778) signals this is now in active development.
5. **Memory diagnostics** ([#3000](https://github.com/QwenLM/qwen-code/issues/3000)) — P3 but growing interest as long-running sessions become common.

---

## Developer Pain Points

- **5s latency on every turn** ([#3759](https://github.com/QwenLM/qwen-code/issues/3759)) — Auto-memory recall timeout blocks user input. *Highest-impact bug this week.*
- **Long conversation token limit** ([#3652](https://github.com/QwenLM/qwen-code/issues/3652)) — 983k cap hit; users forced to restart chats. PR [#3698](https://github.com/QwenLM/qwen-code/pull/3698) offers a fix in review.
- **VSCode settings not honored** ([#3426](https://github.com/QwenLM/qwen-code/issues/3426)) — `contextPercentageThreshold` and `contextWindowSize` silently ignored in IDE.
- **Windows-specific issues** ([#3185](https://github.com/QwenLM/qwen-code/issues/3185)) — `/quit` hang and ANSI regex error blocking clean exit.
- **Self-terminating agents** ([#3730](https://github.com/QwenLM/qwen-code/issues/3730), P1) — Critical regression causing task auto-abort without user action.
- **Non-interactive error noise** ([#3748](https://github.com/QwenLM/qwen-code/issues/3748)) — Triple-printing and stack trace in `-p` mode makes scripting unreliable. Fix in [#3749](https://github.com/QwenLM/qwen-code/pull/3749).
- **Proxy configuration** ([#3742](https://github.com/QwenLM/qwen-code/issues/3742), closed) — `settings.json`'s `proxy` key not read by CLI. Fixed in v0.15.6.
- **Nightly version regression** ([#3756](https://github.com/QwenLM/qwen-code/issues/3756)) — Nightly `v0.15.3-nightly.*` < stable `v0.15.5`, confusing auto-update logic.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*