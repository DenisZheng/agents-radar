# AI CLI Tools Community Digest 2026-08-29

> Generated: 2026-08-29 05:09 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison — 2026-08-29

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **enterprise-governed platforms** (Claude Code, GitHub Copilot CLI, OpenAI Codex) and **community-driven, model-agnostic frameworks** (OpenCode, Pi, Qwen Code, DeepSeek TUI, Gemini CLI). Security hardening has become a universal priority—every major tool shipped or is actively developing fail-closed trust boundaries, OAuth IdP mix-up protection, and MCP sandboxing. Windows stability remains a cross-cutting blocker for desktop apps, while web-based shells (Qwen Web Shell, Codex Remote, Copilot CLI TUI) are converging as the primary interface for remote and collaborative workflows. Release cadences vary dramatically: OpenAI Codex pushed five alphas in 24 hours, while Claude Code and Copilot CLI favor slower, compliance-gated patches.

---

## 2. Activity Comparison (2026-08-29)

| Tool | Issues Tracked (Hot) | PRs Tracked (Key) | Release Status | Release Version |
|------|---------------------|-------------------|----------------|-----------------|
| **Claude Code** | 10 | 1 | Stable patch | v2.1.251 |
| **OpenAI Codex** | 10 | 10 (all automation) | Alpha series | 0.151.0-alpha.12 |
| **Gemini CLI** | 10 | 10 | Nightly | v0.59.0-nightly.20260829 |
| **GitHub Copilot CLI** | 10 | 1 | Stable patch | v1.0.82-1 |
| **Kimi Code CLI** | 3 | 1 | None | — |
| **OpenCode** | 10 | 10 | Stable patch | v1.18.25 |
| **Pi** | 10 | 10 | Stable | v0.84.4 |
| **Qwen Code** | 10 | 10 | Stable + Nightly | v0.22.3 / nightly |
| **DeepSeek TUI** | 6 | 10 | Pre-release | v0.9.12 (milestone) |

*Notes: Issue/PR counts reflect "Hot Issues" and "Key PR Progress" sections in each digest (top 10 each). Actual repository totals are higher. OpenAI Codex PRs are all from `copyberry[bot]` (internal automation).*

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Demanding | Specific Needs |
|-------------|----------------|----------------|
| **Windows Desktop Stability** | Claude Code, OpenAI Codex, GitHub Copilot CLI, OpenCode, Qwen Code | Stealth-update orphan processes (0x80070020), WSL/PTY failures, rendering regressions, sandbox incompatibilities (Win 25H2), AltGr input loss |
| **Session/Context Integrity** | All 9 tools | Compaction reliability (auto-compaction failures at 100%+ context), token accounting accuracy (cache_read billing without cache_creation), resumability after sleep/crash, subagent turn-limit false successes |
| **MCP/Extension Security & Ergonomics** | All 9 tools | Fail-closed workspace trust (Gemini), MCP server filtering in restricted mode, secret-file guard bypass via MCP (Kimi critical vuln), plugin hot-reload & proactive discovery (DeepSeek, OpenCode, Pi), extension breakage on upgrade (Pi, Qwen) |
| **Enterprise Auth & Data Residency** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Qwen Code | CVP-approved org false positives, GHEC tenant-endpoint routing, Advanced Account Security login loops, Bailian token sync, Daytona/cloud-agent auth gating |
| **Remote/Cloud-Native Workflows** | Claude Code, OpenAI Codex, GitHub Copilot CLI, OpenCode, Qwen Code, DeepSeek TUI | Cross-device session visibility, SSH/remote execution (`codex --ssh`), Web Shell parity (Qwen), cloud-agent dispatch (DeepSeek Daytona), live streaming subagent calls (Claude Remote Control) |
| **Model Efficiency & Cost Control** | OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Pi, Qwen Code | Token amplification from serialized calls (Codex 27–45% waste), structured on-demand memory recall (Qwen), separate compaction thinking budget (Pi), model-agnostic tool deferral (Copilot), native batching |
| **TUI/UX Polish as Table Stakes** | All 9 tools | Command output visibility (Codex #39903 65👍), mouse/click navigation, adaptive truncation vs. crash on narrow terminals (Pi), search UX, spinner/status density, autocomplete ranking |
| **Multi-Provider Parity** | OpenAI Codex, Gemini CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI | Native web search for non-OpenAI/Anthropic providers (DeepSeek, Qwen, Kimi, Z.AI), Ollama/vLLM compaction fixes, Bedrock Mantle support, provider-agnostic config examples |

---

## 4. Differentiation Analysis

| Dimension | Enterprise-Governed | Community/Model-Agnostic |
|-----------|---------------------|--------------------------|
| **Primary Focus** | Compliance, security governance, enterprise integration | Extensibility, local-first, model freedom, web-native UX |
| **Target Users** | Regulated industries, GitHub/Anthropic/OpenAI subscribers, large orgs | OSS contributors, self-hosters, multi-model power users, automation builders |
| **Technical Approach** | Proprietary desktop apps, managed services, gated releases | Open-core, TUI-first, web shells via daemon, SST/Cloudflare deployment |
| **Security Posture** | Cyber safeguard (Claude), data residency (Copilot), Advanced Account Security (Codex) | Fail-closed trust (Gemini), NTFS short-name mitigation, hook trust boundaries (Qwen), per-session runtime isolation (DeepSeek) |
| **Differentiating Features** | Model-switch hooks (Claude), Code Mode/Computer Use (Codex), Agent Plugins 1.0 (Copilot) | Structured memory recall (Qwen), headless PR review + GitHub posting (DeepSeek), terminal capability overrides (Pi), Azure CLI auth without Bun (OpenCode) |
| **Release Philosophy** | Slow, compliance-gated, Windows desktop app parity | Fast nightlies, beta web auto-deploy, notarized macOS binaries (Qwen CUA driver) |

**Notable Outliers**:  
- **Kimi Code** — Chinese-market focus, acute security/quota pain points, provider config fragility.  
- **Gemini CLI** — Uniquely aggressive supply-chain hardening (OAuth RFC 9207, async DNS, SSE flush).  
- **DeepSeek TUI** — Only tool with first-class Daytona cloud-agent dispatch and headless PR review bot.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Velocity / Rapid Iteration** | **OpenAI Codex**, **Pi**, **Qwen Code**, **OpenCode** | Codex: 5 alphas/24h + 10 automation PRs. Pi: 48 issues, 18 PRs, 1 release/24h. Qwen: Stable + nightly + 10 PRs including Web Shell cutover. OpenCode: Beta web auto-deploy via SST, 10 PRs. |
| **Enterprise Stable / Compliance-Gated** | **Claude Code**, **GitHub Copilot CLI** | Low PR counts (1 each), patches target specific enterprise blockers (CVP false positives, GHEC data residency, auth error visibility). High-severity issues persist (Windows 0x80070020 since 2024). |
| **Security-First Hardening** | **Gemini CLI** | 4/10 key PRs are pure security (fail-closed trust, OAuth IdP mix-up, NT

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-08-29 | Source: anthropics/skills*

---

## 1. Top Skills Ranking (Most Community Attention)

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **skill-creator evaluation system** ([#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)) | Core infrastructure: runs description-optimization loops (`run_eval.py`, `run_loop.py`, `improve_description.py`) | **Critical bug**: `run_eval.py` reports 0% recall for all skills ([#556](https://github.com/anthropics/skills/issues/556), 12 comments, 7 👍). Windows subprocess/encoding failures block evaluation entirely. Multiple PRs attempting fixes in parallel. | 🔴 **Open** (3 concurrent PRs) |
| 2 | **claude-api skill** ([#1607](https://github.com/anthropics/skills/pull/1607), [#1487](https://github.com/anthropics/skills/issues/1487)) | Manages Claude model IDs, pricing, capabilities | **Context-window exhaustion**: eagerly injects ~156k tokens in single call ([#1487](https://github.com/anthropics/skills/issues/1487)). Retired model IDs still listed as active. | 🔴 **Open** (PR + Issue) |
| 3 | **mcp-builder** ([#1602](https://github.com/anthropics/skills/pull/1602), [#1390](https://github.com/anthropics/skills/issues/1390)) | Builds MCP servers; includes evaluation harness | **Evaluation broken**: `TextContent` not JSON-serializable, causing 0/N scores against real MCP servers ([#1390](https://github.com/anthropics/skills/issues/1390)). PR #1602 addresses serialization + encoding bugs. | 🔴 **Open** (PR + Issue) |
| 4 | **Hivemind: Zero-Cost Multi-Agent Orchestration** ([#1628](https://github.com/anthropics/skills/pull/1628)) | Delegates mechanical work to headless `opencode` workers (free models); Claude stays planner/reviewer/merger | Novel cost-optimization architecture: "expensive model's context is the scarce resource, not its intelligence." Early-stage, high-concept. | 🔴 **Open** (new, Aug 2026) |
| 5 | **self-audit: Mechanical Verification + Reasoning Quality Gate** ([#1367](https://github.com/anthropics/skills/pull/1367)) | Pre-delivery audit: Step 0 verifies file existence; Steps 1–4 run adversarial reasoning review (correctness, completeness, clarity, safety) | Universal, stack-agnostic quality gate. Tied to proposal [#1385](https://github.com/anthropics/skills/issues/1385) (Reasoning Quality Gate Pipeline, 4 comments). | 🔴 **Open** |
| 6 | **ServiceNow Platform Skill** ([#568](https://github.com/anthropics/skills/pull/568)) | Broad platform assistant: ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, SecOps, Vulnerability Response, IntegrationHub | Long-running PR (Mar–Aug 2026). Enterprise demand for ServiceNow automation. Covers 9+ modules. | 🔴 **Open** (5 months) |
| 7 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | Comprehensive testing stack: Testing Trophy, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing | Fills gap: no existing skill covers full testing philosophy → implementation. | 🔴 **Open** |
| 8 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | Prevents orphans, widows, numbering misalignment in AI-generated documents | "Affects every document Claude generates. Users rarely ask for good typography but notice when it's bad." | 🔴 **Open** |

> **Note**: All PRs show `Comments: undefined` in raw data; ranking uses **linked Issue engagement** (comments/👍), **infrastructure criticality**, and **PR longevity** as proxies.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Representative Issues |
|-------|----------|----------------------|
| **Skill distribution & trust security** | Highest-engagement issue (43 comments, 2 👍) | [#492](https://github.com/anthropics/skills/issues/492): Community skills masquerade under `anthropic/` namespace → trust boundary abuse |
| **Organizational skill sharing** | 2nd highest engagement (16 comments, 8 👍) | [#228](https://github.com/anthropics/skills/issues/228): Need org-wide library / direct sharing links (current: manual .skill file transfer) |
| **Evaluation & quality infrastructure** | Multiple high-engagement issues + 3 concurrent PRs | [#556](https://github.com/anthropics/skills/issues/556) (12c/7👍): 0% trigger rate; [#1390](https://github.com/anthropics/skills/issues/1390): MCP eval scores 0/N; [#1385](https://github.com/anthropics/skills/issues/1385): Reasoning Quality Gate proposal |
| **Context-window efficiency** | Acute pain for bundled skills | [#1487](https://github.com/anthropics/skills/issues/1487): `claude-api` injects 156k tokens; [#1329](https://github.com/anthropics/skills/issues/1329): `compact-memory` proposal for symbolic state notation |
| **Duplicate / packaging hygiene** | 9 👍 on duplicate-skill issue | [#189](https://github.com/anthropics/skills/issues/189): `document-skills` + `example-skills` install identical content → context pollution |
| **Enterprise platform skills** | Long-lived PRs, broad scope | [#568](https://github.com/anthropics/skills/pull/568) (ServiceNow); [#486](https://github.com/anthropics/skills/pull/486) (ODT); [#514](https://github.com/anthropics/skills/pull/514) (typography) |
| **Agent governance & safety** | Closed but discussed | [#412](https://github.com/anthropics/skills/issues/412): `agent-governance` skill (policy enforcement, threat detection, audit trails) |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land Soon)

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| [#1607](https://github.com/anthropics/skills/pull/1607) | **claude-api: mark retired models** | Simple, targeted fix for documented bug; references [#1603](https://github.com/anthropics/skills/issues/1603); low risk |
| [#538](https://github.com/anthropics/skills/pull/538) | **pdf: case-sensitive file refs** | 8 concrete filename fixes; breaks on Linux/CI; trivial merge |
| [#541](https://github.com/anthropics/skills/pull/541) | **docx: w:id collision fix** | Prevents document corruption; root-cause identified (shared OOXML ID space); 1-line conceptual fix |
| [#539](https://github.com/anthropics/skills/pull/539) | **skill-creator: YAML special-char warning** | Prevents silent description truncation; pre-parse validation; improves author DX |
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | Addresses 25% community-health score ([#452](https://github.com/anthropics/skills/issues/452)); single highest-impact doc addition |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive, well-scoped; fills universal gap; no blocking issues |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel (retro game dev)** | Niche but complete; MCP server integration (`pyxel-mcp`); clear trigger conditions |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is not for new domain skills, but for **trustworthy skill distribution, reliable evaluation infrastructure, and context-window discipline**—the foundational layer that makes every other skill usable, shareable, and safe.**

---

# Claude Code Community Digest — 2026-08-29

## Today's Highlights
Claude Code v2.1.251 shipped with new **model-switch hooks** (`PreModelSwitch`/`PostModelSwitch`) that let developers block, confirm, or annotate model transitions, plus live streaming of foreground subagent tool calls to Remote Control. Meanwhile, the Windows desktop app continues to struggle with stealth-update orphaned processes (0x80070020) and cyber safeguard false positives are blocking authorized work for CVP-approved organizations.

---

## Releases

### v2.1.251
**Added:**
- `PreModelSwitch` and `PostModelSwitch` hook events — intercept model switches to block, confirm, or annotate
- `SessionStart` resume hooks now receive session staleness and estimated re-cache cost
- Live streaming of foreground subagent tool calls/results to Remote Control

[View release](https://github.com/anthropics/claude-code/releases/tag/v2.1.251)

---

## Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#84352](https://github.com/anthropics/claude-code/issues/84352) | **CVP-approved org still receives cyber safeguard blocks** | Verified organizations are being incorrectly blocked; Verification Portal shows "Under review" despite prior approval email | 164 comments, 25 👍 — highest engagement in period |
| [#53247](https://github.com/anthropics/claude-code/issues/53247) | **Claude Desktop fails to launch on Windows — orphaned Silo/Job Object after crash** | Requires logoff/reboot to recover; HRESULT 0x80070020 in AppModel-Runtime | 30 comments, 19 👍 — long-standing Windows blocker |
| [#61682](https://github.com/anthropics/claude-code/issues/61682) | **GitHub connector shows "Connected" but exposes no tools in Cowork (Windows)** | Connector appears healthy but provides zero tools; blocks Cowork workflows | 27 comments, 24 👍 |
| [#34835](https://github.com/anthropics/claude-code/issues/34835) | **[CLOSED] Queue messages via asking user for further info** | Feature request for interactive clarification flow in TUI | 20 comments, 27 👍 — closed but high interest |
| [#77071](https://github.com/anthropics/claude-code/issues/77071) | **Dispatch tab completely missing from Desktop sidebar (Windows)** | Entire sidebar section absent on Pro plan; limits session management | 18 comments, 2 👍 |
| [#11627](https://github.com/anthropics/claude-code/issues/11627) | **[CLOSED] .NET 9/10 SDK support for web runtime** | Long-requested runtime support for modern .NET | 15 comments, 75 👍 — highest 👍 count |
| [#88405](https://github.com/anthropics/claude-code/issues/88405) | **Symlinked files in `.claude/rules/` not auto-loaded (contradicts docs)** | Docs claim symlink support; reality differs — breaks shared rule workflows | 7 comments, 4 👍 |
| [#88094](https://github.com/anthropics/claude-code/issues/88094) | **Remote Control enabled by default on Windows** | Unexpected remote access surface; privacy/security concern | 6 comments, 8 👍 |
| [#89680](https://github.com/anthropics/claude-code/issues/89680) | **Stealth update leaves orphaned processes; new version unlaunchable until reboot** | Same 0x80070020 root cause as #53247; silent update breaks sessions | 5 comments |
| [#90509](https://github.com/anthropics/claude-code/issues/90509) | **Context silently loses 157K tokens, prompt cache thrashes 17 min** | No compaction record; massive token loss + cache thrash degrades performance | 0 comments (new), high severity |

---

## Key PR Progress

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#87079](https://github.com/anthropics/claude-code/pull/87079) | `fix(security-guidance): make ** glob patterns match zero-depth paths` | Open | Security rules: `**/*.ts` now correctly matches top-level `.ts` files (previously required literal `/` due to `fnmatch` delegation) |

*Only 1 PR updated in the last 24h.*

---

## Feature Request Trends

1. **Usage visibility** — Persistent usage bars/indicators in Desktop (#83092, #80261, #80732); programmatic `/usage` access for automation
2. **TUI polish** — Mouse support/click navigation (#87769), message queuing for clarification (#34835), agent view resize handling (#80123)
3. **Session/group management** — Auto-assign child sessions to parent's sidebar group (#82788), better Recents/pinning for scheduled tasks (#78229)
4. **Platform parity** — .NET 9/10 SDK (#11627), Windows ConPTY ANSI fixes (#68465), MSIX install reliability (#74170)
5. **Remote/VM workflows** — Sleep/resume handling for remote sessions (#67840), cross-device session visibility (#85285)

---

## Developer Pain Points

| Area | Recurring Themes |
|------|------------------|
| **Windows Desktop stability** | Stealth updates orphan processes (0x80070020) → require reboot; MSIX install failures (0x80073CF9); Silo/Job Object leaks after crash; Dispatch tab missing; Remote Control on by default |
| **Cyber safeguard false positives** | CVP-approved orgs blocked; legitimate work halted (citation verification, DB collision resolution, queue verification); Opus 4.8 flagging model; "session-halted" severity |
| **Session/state integrity** | Token loss without compaction records; cache thrashing; symlinked rules not loaded; trailing-whitespace path trust mismatch; Ctrl+B backgrounding breaks resumability |
| **Cross-platform TUI** | ConPTY ANSI corruption (raw unframed output, input bleed); stale terminal width on resize; no mouse support |
| **Remote/VM workflows** | 600s phantom denial on laptop sleep; child sessions not inheriting sidebar groups; live macOS sessions missing from iOS/Dispatch API |

---

*Digest generated from GitHub data (anthropics/claude-code) for 2026-08-29. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-29

---

## 1. Today's Highlights

The Codex team shipped five rapid-fire alpha releases (0.151.0-alpha.7.1 → alpha.12) in 24 hours, signaling an imminent stable release. Windows stability dominates community discourse: a cluster of high-engagement issues report code-mode handshake failures, blank UIs, WSL terminal regressions, and Chrome native-host breakdowns after recent updates. Meanwhile, a heavily upvoted request (#39903, 65 👍) asks for a toggle to disable the TUI’s “Ran N commands” collapsing—developers want full command visibility by default.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `0.151.0-alpha.12` | Alpha | Latest in the 0.151.0 series |
| `0.151.0-alpha.11` | Alpha | |
| `0.151.0-alpha.10` | Alpha | |
| `0.151.0-alpha.9`  | Alpha | |
| `0.151.0-alpha.7.1`| Alpha | |

**Summary**: Five alpha builds in one day indicate active stabilization of the 0.151.0 line. No changelogs are attached to these automated releases; expect a consolidated release note when the stable version lands.

---

## 3. Hot Issues (Top 10 by Community Impact)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **#39903** Add option to disable “Ran N commands” collapsing | TUI hides executed commands by default; developers lose audit trail and debug context. | 44 comments, **65 👍** — highest engagement in the set. |
| **#41049** Windows: code-mode host exited during handshake (5.6 model) | Blocks Code Mode entirely on Windows; regression in 26.820.71523. | 36 comments, 1 👍 — active workaround discussion. |
| **#35050** GPT-5.6 serializes independent Code Mode calls; batching cuts usage 27–45% | Model behavior inflates token usage; explicit batching recovers significant cost. | 29 comments, **40 👍** — strong signal for model-side fix. |
| **#25271** Computer Use cannot determine Chrome URL on Windows | Breaks browser automation on Windows; persists across versions. | 26 comments, 8 👍 — long-standing (since May). |
| **#37104** Windows WSL: integrated terminal silently fails before PTY startup | WSL developers cannot use bottom/side panels; core workflow blocked. | 23 comments, 9 👍 — regression in 26.730.8199.0. |
| **#33192** Windows 10: DWM Composition handles leak after tool calls | Resource leak degrades system stability over long sessions. | 15 comments, 10 👍 — reproducible with 5 calls. |
| **#40611** Auth loop after enrolling in Advanced Account Security | Locks out macOS users completely; blocks Pro 20x subscribers. | 12 comments — zero-workaround severity. |
| **#40002** Android Remote fails to verify trusted Windows projects (case-sensitive paths) | Cross-platform remote development broken for mixed-case paths. | 11 comments, 8 👍. |
| **#40878** Windows 26.820.7780.0: blank client area; `--disable-direct-composition` works | Rendering regression; workaround exists but degrades performance. | 9 comments, 1 👍. |
| **#41450** Code Mode: one AGENTS.md rule cuts cumulative input by 81.6% | Demonstrates massive token amplification; actionable mitigation shared. | 3 comments, fresh (today) — high technical value. |

---

## 4. Key PR Progress (Notable Merges)

All 20 shown PRs are from `copyberry[bot]` (internal automation) and closed today. High-impact changes:

| PR | Change | Impact |
|----|--------|--------|
| **#41467** Refresh TUI model picker from app server | Fixes stale model catalog in picker; now fetches live list on open. | Ensures model list matches account entitlements. |
| **#41464** Preserve permissions when updating session metadata | Prevents sandbox policy reset on client name/version updates. | Avoids spurious permission prompts mid-session. |
| **#41461** Source async user message descriptions from model catalog | Uses catalog metadata for `send_user_message_async` tool descriptions. | Consistent tool docs across model switches. |
| **#41457** Source proactive multi-agent instructions from model catalog | Moves Ultra reasoning proactive prompts into catalog; fallback to built-in. | Decouples prompt logic from code; easier iteration. |
| **#41456** Support app targets in executor plugin hooks | Admits curated Browser plugin’s `Stop`/`SubagentStop` hooks with trusted routing. | Enables clean browser/computer-use cleanup on subagent boundaries. |
| **#41454** Block goals after repeated execution host failures | Tracks failed `exec` attempts; blocks goal after 3 qualifying failures. | Prevents runaway retry loops on broken hosts. |
| **#41452** Report code mode host request durations | Measures host execute/wait/terminate latency excluding client idle time. | Improves observability for Code Mode performance. |
| **#41436** Respond to terminal queries from TTY subprocesses | Intercepts and replies to PTY queries (window size, cursor, DEC modes). | Fixes hangs in programs that block on terminal queries. |
| **#41421** Support per-tool MCP output limits | Adds `output_token_limit` per MCP tool; applies most restrictive policy. | Fine-grained control over MCP token costs. |
| **#41413** Optimize history item lookups | Lazy indexing for large threads; linear scan for reverse search. | Reduces latency in long conversations. |

---

## 5. Feature Request Trends

1. **Windows parity & stability** — 7 of the top 10 issues are Windows-specific (handshake, rendering, WSL, Chrome native host, DWM leaks, pets, Android Remote path case-sensitivity).
2. **TUI/CLI output control** — #39903 (65 👍) demands configurable command collapsing; developers want raw visibility.
3. **Model efficiency** — #35050 (40 👍) and #41450 highlight token amplification from serialized independent calls; community wants native batching.
4. **Remote/SSH execution** — #9923 (13 👍, open since Jan) requests `codex --ssh user@host:/path` for sandboxed remote tool execution.
5. **Computer Use reliability** — Chrome URL detection, native host versioning, and click/typing failures block browser automation on Windows.
6. **Auth robustness** — #40611 shows Advanced Account Security breaks login flow; zero-downtime auth is expected for Pro users.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence |
|------------|----------|
| **Windows Desktop regressions per update** | Blank UI (#40878), headless start (#41059), handshake failures (#41049, #41241), WSL terminal death (#37104, #41290), pet drag broken (#34309, #41267), DWM handle leak (#33192). |
| **Chrome native host version skew** | #40118, #40228, #40048 — extension reads but cannot click/type; uninstall fails; “out of date” error despite passing diagnostics. |
| **Command output hidden by default** | #39903 (65 👍) — “Ran N commands” collapsing obscures executed commands; no toggle exists. |
| **Model serializes parallelizable calls** | #35050 — GPT-5.6 runs independent Code Mode calls sequentially; manual batching saves 27–45% weighted usage. |
| **Auth/account security breaks CLI/App** | #40611 — Advanced Account Security enrollment triggers logout loop on macOS; no recovery path. |
| **Computer Use fragile on Windows** | #25271 (3 months open), #40048, #41281 — URL detection fails, JS kernel timeouts, official plugin missing from directory. |
| **Remote/Android trust verification** | #40002 — case-sensitive path lookup breaks Windows project verification from Android. |

---

*Data sourced from `github.com/openai/codex` — releases, issues, and PRs updated 2026-08-28 → 2026-08-29.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-29

## 1. Today's Highlights
The project shipped a nightly release (v0.59.0-nightly) with a critical security hardening: fail-closed workspace trust enforcement and filtering of repository-defined MCP servers in restricted mode. Simultaneously, the PR queue shows a strong focus on supply-chain and platform hardening—OAuth IdP mix-up protection, NTFS short-name traversal mitigation, insecure config loading fixes, and SSE stream robustness. On the issue side, long-standing agent reliability bugs (subagent turn-limit misreporting, generalist agent hangs, shell “awaiting input” stalls) remain top of mind for contributors.

## 2. Releases
**v0.59.0-nightly.20260829.g0bd1d4397**  
- **Security**: Enforce fail-closed workspace trust resolution; filter out `mcpServers` defined in repo config when running in untrusted/restricted environments. Prevents unintended process execution at server startup.  
- **PR**: [#29099](https://github.com/google-gemini/gemini-cli/pull/29099) (merged)  
- **Changelog**: [compare](https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260828.g3c311beac...v0.59.0-nightly.20260829.g0bd1d4397)

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after `MAX_TURNS` reported as `GOAL` success | Masks real failures; subagents claim success despite hitting turn limits before any work. | 13 comments, 2 👍 — P1, needs retest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | Core workflow blocker; simple folder creation stalls for hours unless subagents disabled. | 8 comments, 8 👍 — P1, needs retest |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model’s bash affinity via Zero-Dependency OS Sandboxing | Strategic: align tooling with Gemini 3’s native POSIX-tool training for faster, cheaper exploration. | 8 comments, 1 👍 — P2, large effort |
| [#28004](https://github.com/google-gemini/gemini-cli/issues/28004) | Duplicate tool results for completed shell calls | Deterministic repro; wastes tokens & confuses model. | 7 comments — P2 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess AST-aware file reads, search, mapping | Epic to evaluate precision gains (method-bound reads, token reduction, navigation). | 7 comments, 1 👍 — P2 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini under-uses custom skills & sub-agents | UX gap: model ignores relevant skills unless explicitly instructed. | 6 comments — P2 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | Background extractor loops on unread transcripts, wasting cycles. | 5 comments — P2 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell execution stuck at “Waiting input” after command completes | Frequent UX regression; CLI shows active command that already finished. | 4 comments, 3 👍 — P1, medium effort |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Browser agent: automatic session takeover & lock recovery | Current fail-fast on locked profile breaks persistent sessions. | 4 comments — P3 |
| [#29122](https://github.com/google-gemini/gemini-cli/issues/29122) | `hooks migrate` copies Claude `timeout` (seconds→ms unit mismatch) | New today; migrated hooks get 1000× shorter timeouts silently. | 1 comment — P2, small |

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#29099](https://github.com/google-gemini/gemini-cli/pull/29099) | Fail-closed workspace trust + MCP server filtering in restricted mode | **Merged** — shipped in tonight’s nightly |
| [#29115](https://github.com/google-gemini/gemini-cli/pull/29115) | Prevent insecure system-wide config loading (Windows ACLs, POSIX perms) | Open — blocks local privilege escalation / cross-user RCE |
| [#29117](https://github.com/google-gemini/gemini-cli/pull/29117) | OAuth IdP mix-up protection (RFC 9207 `iss` validation in MCP auth) | Open — prevents token leakage to wrong auth server |
| [#29116](https://github.com/google-gemini/gemini-cli/pull/29116) | Mitigate NTFS 8.3 short-name (SFN) path traversal & blocklist bypass | Open — hardens `AllowedPathChecker` on Windows |
| [#28955](https://github.com/google-gemini/gemini-cli/pull/28955) | Dependency updates, MCP config, ECC bundle integration | Open — large maintenance/feature bundle |
| [#28971](https://github.com/google-gemini/gemini-cli/pull/28971) | Keep truncated MCP tool names unique (injectivity fix) | Open — avoids registry collisions after 30+30 char truncation |
| [#29120](https://github.com/google-gemini/gemini-cli/pull/29120) | Async DNS validation + Undici connector for web fetch (TLS + direct bind) | Open — SSRF hardening & connection routing |
| [#29106](https://github.com/google-gemini/gemini-cli/pull/29106) | Flush final SSE event on EOF without trailing blank line | Open — recovers `finishReason`/usage on truncated streams |
| [#29114](https://github.com/google-gemini/gemini-cli/pull/29114) | Guard against duplicate `handleExit` on spawn failure | Open — fixes double-cleanup race in shell service |
| [#29118](https://github.com/google-gemini/gemini-cli/pull/29118) | Fix extension repo parsing: only strip trailing `.git` suffix | Open — preserves names like `blog.github.io` |

## 5. Feature Request Trends
1. **Agent Orchestration Maturity** — Subagent lifecycle (turn limits, recovery, trajectory sharing [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), skill discovery [#21968](https://github.com/google-gemini/gemini-cli/issues/21968), and browser-agent resilience [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) are recurring themes.
2. **Native Tool Alignment** — Strong push to exploit Gemini 3’s bash/POSIX affinity via sandboxing [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) and AST-aware tooling [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746).
3. **Memory System Reliability** — Auto Memory extraction quality, redaction timing, inbox quarantine, and retry loops [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525).
4. **Platform & Extensibility Hardening** — Symlink agent support [#20079](https://github.com/google-gemini/gemini-cli/issues/20079), tool-count scaling [#24246](https://github.com/google-gemini/gemini-cli/issues/24246), hook migration fidelity [#29122](https://github.com/google-gemini/gemini-cli/issues/29122).

## 6. Developer Pain Points (High-Frequency Frustrations)
- **Agent Hangs & False Successes** — Generalist stalls [#21409](https://github.com/google-gemini/gemini-cli/issues/21409), subagent turn-limit masquerading as success [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), shell “awaiting input” ghost state [#25166](https://github.com/google-gemini/gemini-cli/issues/25166).
- **Tooling Friction** — Duplicate tool results [#28004](https://github.com/google-gemini/gemini-cli/issues/28004), tmp-script sprawl [#23571](https://github.com/google-gemini/gemini-cli/issues/23571), destructive git/db commands [#22672](https://github.com/google-gemini/gemini-cli/issues/22672).
- **Configuration & Migration Gotchas** — Symlink agents ignored [#20079](https://github.com/google-gemini/gemini-cli/issues/20079), hook timeout unit mismatch [#29122](https://github.com/google-gemini/gemini-cli/issues/29122), browser-agent settings ignored [#22267](https://github.com/google-gemini/gemini-cli/issues/22267).
- **Observability Gaps** — Bug reports lack subagent context [#21763](https://github.com/google-gemini/gemini-cli/issues/21763), subagent trajectories not shareable [#22598](https://github.com/google-gemini/gemini-cli/issues/22598), terminal resize flicker [#21924](https://github.com/google-gemini/gemini-cli/issues/21924).

---

*Digest generated from GitHub data (releases, issues, PRs updated 2026-08-28 → 2026-08-29). Links point to live GitHub items.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-29

## Today's Highlights
A patch release (v1.0.82-1) ships a targeted fix for authentication error visibility, while the issue tracker surfaces a critical **TUI freeze caused by a runaway FileWatch loop** that can balloon debug logs to 13 GB. Meanwhile, enterprise users report **regressions in GHEC data-residency prompt mode** and **Windows 25H2 sandbox incompatibility**, and several fresh regressions landed in v1.0.81 (chroma-mcp breakage, missing `/model` command, AltGr input loss on Windows).

---

## Releases
### v1.0.82-1
**Fixed** — Authentication failures now surface the specific HTTP error (e.g., `401 Bad credentials`) instead of silently redirecting to `/login`.  
🔗 [Release v1.0.82-1](https://github.com/github/copilot-cli/releases/tag/v1.0.82-1)

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **#4612** | [Runaway FileWatch host-event loop freezes TUI and grows debug log to 13 GB](https://github.com/github/copilot-cli/issues/4612) | **Critical stability bug** — long-running sessions enter a tight `FileWatch` loop, freezing the terminal UI and exhausting disk. Blocks any extended interactive workflow. | 7 comments, 👍 1, **open** |
| **#4480** | [Atlassian MCP OAuth fails with “Incompatible authorization server” on 1.0.79](https://github.com/github/copilot-cli/issues/4480) | **Enterprise integration blocker** — regression from 1.0.71 breaks OAuth discovery for Atlassian’s remote MCP server. | 7 comments, 👍 6, **closed** (fix likely in 1.0.82-1) |
| **#4527** | [`copilot -p` fails with 401 on GHEC data residency since 1.0.81-1](https://github.com/github/copilot-cli/issues/4527) | **Enterprise prompt-mode regression** — non-interactive mode hits `api.githubcopilot.com` instead of tenant endpoint, while interactive mode works. | 2 comments, 👍 4, **open** |
| **#4165** | [`copilot --resume` hangs at “Resuming session” on Windows cold start](https://github.com/github/copilot-cli/issues/4165) | **Windows UX regression** — session resume deadlocks in PowerShell; workaround requires extra steps. | 5 comments, 👍 1, **open** |
| **#4533** | [Terminal UI stops consuming events when a turn spawns parallel subagents](https://github.com/github/copilot-cli/issues/4533) | **Agent parallelism breaks TUI** — input/scroll dead while runtime continues; affects prerelease 1.0.81-4/5. | 4 comments, 👍 0, **open** |
| **#1392** | [OmniSharp LSP needs configurable `initializeTimeout` for large C# solutions](https://github.com/github/copilot-cli/issues/1392) | **Long-standing language-server gap** — default timeout too short for enterprise monorepos; blocks language-aware analysis. | 3 comments, 👍 5, **open** |
| **#4652** | [Sandboxing “not supported on this host” on Windows 25H2](https://github.com/github/copilot-cli/issues/4652) | **New OS incompatibility** — latest Windows Insider build rejects `--sandbox` flag, limiting secure execution. | 1 comment, 👍 0, **open** |
| **#4647** | [v1.0.81 broke compatibility with chroma-mcp](https://github.com/github/copilot-cli/issues/4647) | **Ecosystem regression** — popular vector-store MCP server fails to connect after CLI upgrade. | 1 comment, 👍 0, **open** |
| **#4648** | [Input field background renders black with near-invisible text mid-session](https://github.com/github/copilot-cli/issues/4648) | **Accessibility/UX bug** — only the command input loses contrast; terminal `reset` ineffective, points to CLI rendering bug. | 1 comment, 👍 0, **open** |
| **#4649** | [Tool search enabled on Grok but defers nothing; Gemini never enables it](https://github.com/github/copilot-cli/issues/4649) | **Model-specific token-cost regression** — follow-up to #4588; Grok/Gemini families left behind after GPT fix. | 0 comments, 👍 0, **open** |

---

## Key PR Progress
| # | PR | Summary | Status |
|---|----|---------|--------|
| **#4497** | [Handle fork PR associations in invalid-label writer](https://github.com/github/copilot-cli/pull/4497) | Fixes CI labeling for fork PRs when GitHub omits workflow-run PR association; uses trusted metadata fallback. | **Closed** (merged 2026-08-29) |

*Only one PR updated in the last 24 h; the backlog is issue-heavy.*

---

## Feature Request Trends
1. **Local-first memory & context** — #2930 (👍 3) requests agent-initiated local memory without remote storage, critical for orgs that disable Copilot Memory.
2. **Configurable LSP timeouts** — #1392 (👍 5) underscores demand for per-server timeout tuning in `lsp-config.json`.
3. **Enterprise-grade auth routing** — #4527, #4654, #4650 show consistent need for correct tenant-endpoint resolution in GHEC/data-residency scenarios.
4. **Model-agnostic tool deferral** — #4649 highlights expectation that tool-search/deferral work uniformly across all model families (GPT, Grok, Gemini).
5. **Agent plugin discoverability** — #4655 signals early adoption friction for Agent Plugins 1.0 custom agents.

---

## Developer Pain Points (Recurring Themes)
| Pain Point | Evidence |
|------------|----------|
| **Session/resume instability on Windows** | #4165 (cold-start hang), #4645 (model param ignored on resume) |
| **TUI fragility under load** | #4612 (FileWatch loop), #4533 (parallel subagents freeze UI), #4648 (input contrast loss) |
| **Enterprise auth & endpoint mismatches** | #4480 (Atlassian MCP), #4527 (GHEC prompt mode), #4654 (model list URL), #4650 (`-p`/`--agent` auth) |
| **MCP ecosystem breakage on minor releases** | #4647 (chroma-mcp), #4189 (MCP tool-schema reporting) |
| **Platform-specific input/rendering bugs** | #4653 (AltGr on Windows), #4614 (macOS MallocStackLogging noise), #4652 (Win 25H2 sandbox) |
| **Noisy/aggressive CLI side-effects** | #4658 (shell completions reinstalled on every launch, even headless) |

---

*Digest generated from github.com/github/copilot-cli data as of 2026-08-29. Links point to live issues/PRs for full context.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-29

## Today's Highlights
A critical security vulnerability (#2625) was disclosed and closed within hours: MCP tool calls bypass the CLI’s built-in secret-file guards, enabling arbitrary file reads in auto-approve mode. Simultaneously, a paying subscriber reports severe quota amplification (#2626) where `cache_read` is billed every turn with zero `cache_creation`, draining ~40% of a 5-hour window in minutes. A dependency update (#2622) patches two `asyncssh` CVEs in the `pykaos` workspace.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|---------------------|
| [#2625](https://github.com/MoonshotAI/kimi-cli/issues/2625) | **Security: MCP tool calls bypass built-in secret-file guards (arbitrary file read demonstrated)** | **Critical.** The CLI’s `Read` tool blocks sensitive files (`.env`, SSH keys, credential stores), but MCP servers invoked via tool calls are *not* subject to this content-level guard. In auto-approve mode the approval prompt is also skipped, creating a direct path for secret exfiltration. | Closed same-day by maintainers; 1 comment (likely triage/fix coordination). Zero 👍 suggests quiet urgency. |
| [#2626](https://github.com/MoonshotAI/kimi-cli/issues/2626) | **Abnormal quota consumption: cache_read billed every turn with cache_creation always 0 (>10x amplification)** | **High impact for paying users.** Subscriber on annual plan lost ~40% of a 5-hour quota in minutes of light use. `cache_read` tokens are charged every turn while `cache_creation` stays at 0, indicating a caching logic bug or metering misconfiguration. | 0 comments, 0 👍 — fresh report; likely to attract attention from other subscribers. |
| [#2624](https://github.com/MoonshotAI/kimi-cli/issues/2624) | **docs: openai_legacy hosted /v1 example (not openai_responses, not /login)** | **Docs gap.** The `providers.md` page covers `openai_legacy` for Chat Completions hosts, but three common misconfigurations (`type` value, wire protocol, auth path) are undocumented, causing integration friction. | Filed by `cursor[bot]` (automated/docs bot); 0 comments/👍 — maintenance item. |

---

## Key PR Progress

| # | Title | Description | Status |
|---|-------|-------------|--------|
| [#2622](https://github.com/MoonshotAI/kimi-cli/pull/2622) | **deps: bump asyncssh to 2.23.1 in pykaos (GHSA-2wxc-x7rj-hg8f)** | Updates `asyncssh` from 2.21.1 → 2.23.1 in `packages/kaos/pyproject.toml` to address **GHSA-2wxc-x7rj-hg8f** and **GHSA-qr67-gv47-xwwh** (both SSH protocol vulnerabilities). `uv.lock` updated accordingly. | Open; awaits review/merge. |

---

## Feature Request Trends
*Insufficient new issues in the last 24h to extract trends.*  
Recent historical patterns (not in this window) show demand for:  
- **MCP sandboxing/guardrails** (now urgent post-#2625)  
- **Transparent token accounting & cache controls** (amplified by #2626)  
- **Provider-agnostic config examples** (per #2624)

---

## Developer Pain Points
1. **MCP security surface** — Built-in file guards are bypassed by design when tools delegate to external MCP servers; auto-approve mode removes the last human checkpoint.  
2. **Quota opacity** — `cache_read` billing without corresponding `cache_creation` makes cost prediction impossible; users cannot audit or disable the behavior.  
3. **Provider config fragility** — Subtle differences between `openai_legacy` vs `openai_responses`, endpoint paths (`/v1` vs `/login`), and `type` values cause silent failures.  

---

*Digest generated from GitHub data (last 24h). Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-29

## Today's Highlights
OpenCode v1.18.25 shipped a targeted fix for Azure CLI authentication, removing the Bun dependency for sign-in flows. Meanwhile, the contributor team landed a wave of internal refactors—bounding job history, isolating tool-call identities, and hardening the MCP server config merge—alongside a beta web deployment via SST. On the issue front, the long-standing GPT-model latency complaint (#29079, 119 comments) was closed, while a critical TUI tmpfs leak (#42700) remains open and unaddressed.

---

## Releases
**v1.18.25** — *Core Bugfix*  
- **Azure auth fixed**: Azure CLI sign-in now works without requiring Bun.  
[Release Notes](https://github.com/anomalyco/opencode/releases/tag/v1.18.25)

---

## Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#29079](https://github.com/anomalyco/opencode/issues/29079) | GPT models take minutes to respond intermittently | Highest-comment issue (119); affects core UX for paid-model users | 52 👍, closed today — likely mitigated in recent releases |
| [#42700](https://github.com/anomalyco/opencode/issues/42700) | TUI leaks ~21 MB `.so` per launch into `/tmp` | Fills tmpfs, breaks TUI startup after repeated launches; Linux blocker | 7 comments, 0 👍, **still OPEN** — no fix visible in today’s PRs |
| [#29397](https://github.com/anomalyco/opencode/issues/29397) | Unexplained slowness + Esc interrupt unreliable | Broad model slowness + broken escape handling; 7 👍 | 6 comments, closed — may overlap with #29079 |
| [#23461](https://github.com/anomalyco/opencode/issues/23461) | `opencode upgrade` fails 403 behind proxy/VPN (ignores `GITHUB_TOKEN`) | Breaks automated/CI upgrades; 2 👍 | 5 comments, **OPEN** — auth token not passed to GitHub API |
| [#46088](https://github.com/anomalyco/opencode/issues/46088) | ECONNRESET with custom models after reading files | New session works, then fails consistently; context well under limit | 3 comments, **OPEN (created today)** — regression risk |
| [#38366](https://github.com/anomalyco/opencode/issues/38366) | Bun segfault/SIGTRAP on concurrent TUI launches (macOS arm64) | 6–8 parallel instances crash reliably; blocks parallel workflows | 2 comments, **OPEN** — Bun 1.3.14 bundled |
| [#22792](https://github.com/anomalyco/opencode/issues/22792) | Compaction loops with local vLLM + Qwen3-Coder | Pathological compaction on trivial inputs; local-model blocker | 6 comments, 3 👍, closed |
| [#34223](https://github.com/anomalyco/opencode/issues/34223) | Web UI file-tree toggle hidden by `desktop()` gate | File tree unusable in browser; gated incorrectly | 5 comments, closed |
| [#15680](https://github.com/anomalyco/opencode/issues/15680) | Expose worktree lifecycle events to plugins | Plugins blind to create/remove/reset; 3 👍 | 4 comments, closed — API gap addressed? |
| [#46059](https://github.com/anomalyco/opencode/issues/46059) | Model stuck in text-only reasoning loop (prints “Let me grep…” instead of calling tools) | Tool-use regression; model hallucinates tool calls as plain text | 2 comments, closed today |

---

## Key PR Progress (Top 10 by Impact)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#46086](https://github.com/anomalyco/opencode/pull/46086) | feat(infra) | **Deploy `beta.opencode.ai` via SST** — beta web app now auto-deployed on v2 promotion. **CLOSED** |
| [#46087](https://github.com/anomalyco/opencode/pull/46087) | fix(core) | **Bound consumed job history** to 100 jobs / 16 MiB output — prevents unbounded memory growth. **OPEN** |
| [#46084](https://github.com/anomalyco/opencode/pull/46084) | fix(ai) | **Isolate response tool-call identities** — uses stable `call_id`, avoids collisions from optional item IDs. **OPEN** |
| [#46085](https://github.com/anomalyco/opencode/pull/46085) | fix(shell) | **Bound Windows post-exit pipe draining** — stops descendant processes from blocking shell completion. **OPEN** |
| [#46089](https://github.com/anomalyco/opencode/pull/46089) | refactor(util) | **Make layer graphs opaque & composable** — fixes service-override erasure and hoisted-half contracts. **OPEN** |
| [#44938](https://github.com/anomalyco/opencode/pull/44938) | feat(tui) | **Paste primary selection on middle-click (Linux)** — restores traditional X11/Wayland gesture. **CLOSED** |
| [#32370](https://github.com/anomalyco/opencode/pull/32370) | feat(tui) | **`linux_clipboard_selection` config** — primary/both modes + `wl-copy` MIME fix; supersedes #6370. **OPEN** |
| [#46076](https://github.com/anomalyco/opencode/pull/46076) | fix(codemode) | **Reject `Object.assign` cycles** — closes interpreter guard bypass. **OPEN** |
| [#46072](https://github.com/anomalyco/opencode/pull/46072) | refactor(core) | **Merge defaults for selected MCP servers** — avoids discarded work on duplicate-name resolution. **CLOSED** |
| [#36068](https://github.com/anomalyco/opencode/pull/36068) | fix(ai) | **Accept Ollama `reasoning` field** in OpenAI chat deltas — was silently dropped by schema. **CLOSED** |

---

## Feature Request Trends
1. **Linux clipboard parity** — Primary selection + middle-click paste (#6370, #32370, #44938) is a multi-PR effort; users expect terminal-native behavior.
2. **MCP server config ergonomics** — Project-level MCP config without manual `opencode.json` edits (#30933), plus default merging (#46072).
3. **Plugin observability** — Worktree lifecycle events (#15680), skill-file hot-reload (#34443), and session-handle parity (#46077).
4. **Web/Desktop UI polish** — File-tree visibility (#34223), Settings access on macOS (#34507), session-history migration (#34445).
5. **Local-model workflow fixes** — Compaction control (#34510), vLLM/Ollama compatibility (#22792, #36068), temperature passthrough (#25755).

---

## Developer Pain Points (Recurring Themes)
- **Model latency & reliability** — Intermittent multi-minute delays (#29079, #29397), reasoning loops (#46059), and ECONNRESET on custom endpoints (#46088) erode trust.
- **TUI resource leaks** — The 21 MB/launch `.so` leak (#42700) is a hard blocker for Linux users running many sessions.
- **Upgrade friction** — `opencode upgrade` ignores `GITHUB_TOKEN` (#23461), hitting rate limits behind proxies/VPNs.
- **Data-loss on updates** — SQLite migration wiped `~/.local/share/opencode` without session migration (#34445).
- **Platform-specific regressions** — Windows panel clipping (#46090), macOS Settings inaccessible (#34507), Bun crashes on concurrent macOS launches (#38366).
- **Tool-call integrity** — Duplicate/missing call IDs (#5750, #46084) and compaction loops (#22792) indicate fragile agent orchestration.

---

*Generated from anomalyco/opencode GitHub data (issues, PRs, releases) updated 2026-08-29.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-29

## Today's Highlights
Pi **v0.84.4** shipped with terminal capability overrides (hyperlink, image, truecolor) and new extension UI prompt events. The team closed the high-impact auto-compaction bug (#6879) that let context exceed 100% until provider rejection, and fixed a startup crash on narrow terminals (80–88 cols). Multiple TUI polish PRs landed: adaptive line truncation, search UX improvements, a prettier "Working…" spinner, and a refined alt-mode scrollbar.

---

## Releases
### v0.84.4
- **Terminal capability overrides** — Force-enable or disable hyperlink, image, and truecolor support regardless of terminal detection. [Docs](https://github.com/earendil-works/pi/blob/v0.84.4/packages/coding-agent/docs/terminal-setup.md#capability-overrides)
- **Extension UI prompt events** — New hooks for extensions to react to UI dialog lifecycle.

---

## Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Signal |
|---|-------|----------------|--------|
| [#6879](https://github.com/earendil-works/pi/issues/6879) | Auto-compaction never triggers past 100% context | Sessions could run 2+ hours uncompacted until API 400; fixed in #8782 | 24 💬, 20 👍 |
| [#8584](https://github.com/earendil-works/pi/issues/8584) | TUI row corruption: assistant text streams one word/line after long tool output | Renders assistant output unreadable; frequent after wide tool output (e.g., `sed` on wide files) | 22 💬, 9 👍 |
| [#2870](https://github.com/earendil-works/pi/issues/2870) | Follow XDG Base Directory spec | Pi clutters `$HOME`; should use `$XDG_CONFIG_HOME`/`$XDG_DATA_HOME` | 20 💬, 52 👍 |
| [#7128](https://github.com/earendil-works/pi/issues/7128) | Default `PI_*` guideline biases agent to run `env` bash calls unnecessarily | System prompt instructs agent to inspect `PI_*` vars, causing pointless shell invocations | 11 💬, 13 👍 |
| [#8620](https://github.com/earendil-works/pi/issues/8620) | 0.84.3 bundled CLI: global extensions fail with "Cannot find module '@earendil-works/pi-coding-agent'" | Breaks all user extensions on upgrade; module resolution regression | 6 💬 |
| [#7553](https://github.com/earendil-works/pi/issues/7553) | Configurable thinking level/model for compaction | Compaction reuses session thinking budget; users want separate budget for summarization | 9 💬 |
| [#7153](https://github.com/earendil-works/pi/issues/7153) | `/scoped-models` stalls ~5 min awaiting catalog refresh | Command blocks UI synchronously; no loading state or timeout | 8 💬, 4 👍 |
| [#8166](https://github.com/earendil-works/pi/issues/8166) | Custom message mid-tool-batch breaks `tool_calls`→`tool` adjacency (DeepSeek 400) | Extension `sendMessage(triggerTurn:false)` corrupts message chain; breaks subsequent turns | 11 💬 |
| [#8806](https://github.com/earendil-works/pi/issues/8806) | TUI crashes on narrow terminals (80–88 cols) — long skill lines exceed width | Hard crash at startup; fixed in #8805 via adaptive truncation | 2 💬 |
| [#8808](https://github.com/earendil-works/pi/issues/8808) | Prompt image attachments bypass resize pipeline; >20 oversized images bricks Anthropic sessions | Retina screenshots stored at full size; Anthropic rejects requests after ~20 images | 1 💬 |

---

## Key PR Progress (Top 10)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#8812](https://github.com/earendil-works/pi/pull/8812) | Flush extension provider registrations before initial model resolution | Fixes fresh sessions ignoring `defaultProvider`/`defaultModel` from extension-registered providers | ✅ Closed |
| [#8811](https://github.com/earendil-works/pi/pull/8811) | Startup composer — input during startup, shared UI/terminal | Allows project trust checks, selection, and input dialogs during boot; editor state capture/restore extended | ✅ Closed |
| [#8805](https://github.com/earendil-works/pi/pull/8805) | Adaptive truncate instead of crash on narrow terminals | Replaces hard throw with visible-width truncation; fixes startup crash on 80–88 col terminals | ✅ Closed |
| [#8782](https://github.com/earendil-works/pi/pull/8782) | Compact before post-tool model requests | Runs threshold compaction before next provider request; closes #6879 | ✅ Closed |
| [#6848](https://github.com/earendil-works/pi/pull/6848) | Retry logic for compaction summarization (exponential backoff) | Transient mid-stream socket deaths no longer fail entire compaction | ✅ Closed |
| [#8786](https://github.com/earendil-works/pi/pull/8786) | Match skill commands by bare name in slash autocomplete | `/idea` now ranks `skill:research-idea` over `skill:deep-research` | ✅ Closed |
| [#8784](https://github.com/earendil-works/pi/pull/8784) | Per-model `max_tokens` cap for MiniMax-M3 via OpenRouter/GMICloud | Caps at 524,288 to match provider limit; avoids HTTP 400 | ✅ Closed |
| [#8800](https://github.com/earendil-works/pi/pull/8800) | Search improvements: `Ctrl+Shift+F` toggles, `Esc` closes, alt-mode UI polish | Better discoverability and keyboard parity | 🟢 Open |
| [#8799](https://github.com/earendil-works/pi/pull/8799) | Prettier "Working…" spinner in input border, matches thinking color, handles retry | Visual polish for agent working state | 🟢 Open |
| [#8572](https://github.com/earendil-works/pi/pull/8572) | Amazon Bedrock Mantle support (GPT-5.x via new API surface) | Unblocks models routed via Mantle instead of Converse; WIP awaiting API key perms | 🟢 Open |

---

## Feature Request Trends
1. **Compaction control** — Separate thinking budget/model for summarization (#7553), pre-request compaction (#8782), retry resilience (#6848).
2. **Extension ecosystem maturity** — Provider registration timing (#8812), UI dialog events (#7147), changelog support (#8790), editor history preservation on `/reload` (#8798), model runtime exposure (#8791).
3. **TUI/UX polish** — Autocomplete ranking (#8786, #8807), search UX (#8800), spinner/status line density (#8794, #8799), scrollbar aesthetics (#8801), mouse selection editing (#8678).
4. **Provider/model ergonomics** — `/model` default to user-configured models (#8478), scoped models async loading (#7153), per-model token caps (#8784), Bedrock Mantle (#8572).
5. **Standards compliance** — XDG directories (#2870), keybinding respect (#8797), pnpm `minimumReleaseAge` (#8792).

---

## Developer Pain Points
- **Extension breakage on upgrade** — Module resolution failures for `@earendil-works/pi-*` packages in global extensions (v0.84.3 regression, #8620).
- **Context/compaction opacity** — Auto-compaction silently failing past threshold (#6879), no visibility into compaction thinking budget (#7553), summarization stream failures killing sessions (#6848).
- **TUI fragility on edge terminals** — Hard crashes on narrow widths (#8806), streaming corruption after wide tool output (#8584), autocomplete misranking (#8813, #8786).
- **Provider integration quirks** — Bedrock strict schema validation (#8804), OpenAI Responses API `tool_choice` without tools (#8774), MiniMax-M3 token cap mismatch (#8784), Mistral GLM-5.2 tool parsing (#8387).
- **Session state loss** — Editor prompt history dropped on `/reload` with custom editors (#8798), custom continuations undetectable in `agent_end` (#8349).
- **Unwanted agent behavior** — System prompt biasing `env` bash calls (#7128), success tokens without artifact verification (#8796).

---

*Generated from github.com/badlogic/pi-mono — 48 issues, 18 PRs, 1 release in last 24h*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-29

## 1. Today's Highlights
The v0.22.3 stable release ships **owner-scoped named sessions in Channels** (up to 8 persistent tasks per chat), daemon extension installs now accept absolute local paths, and the CUA driver reaches v0.20.2 with notarized macOS binaries. Concurrently, the Web Shell UI cutover (#9811) and structured memory recall (#10183) are advancing through review, while multiple Web Shell regressions (pinned sessions, session-switch overlay, infinite re-renders) are being hotfixed.

---

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| **[v0.22.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.22.3)** | Stable | • Owner-scoped named sessions in Channels (8 persistent tasks/chat) • Daemon extension installs: absolute local paths allowed, relative rejected • `cua-driver-rs` v0.20.2: notarized universal macOS app, unsigned Linux/Win/ARM64, Node.js package `@qwen-code/cua-driver` |
| **[v0.22.3-nightly.20260829.e5cb60ad48](https://github.com/QwenLM/qwen-code/releases/tag/v0.22.3-nightly.20260829.e5cb60ad48)** | Nightly | Web Shell: git state hints beside branch picker actions (PR #10397) |

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| Issue | Category | Why It Matters | Community Signal |
|-------|----------|----------------|------------------|
| **[#10075](https://github.com/QwenLM/qwen-code/issues/10075)** `edit/write_file` silently disappear with `permissions.allow` | Tools/Settings (P1) | Allowlist config causes non-allowlisted tools to vanish from session entirely — blocks core editing. | 4 comments, **closed** but flagged “please smoke-test releases” |
| **[#10435](https://github.com/QwenLM/qwen-code/issues/10435)** Crash on local llama-server: “failed to parse grammar” | Core/Inference | v0.22.3 breaks code review against local llama-server (400 sampler init error). | 3 comments, `ready-for-human` |
| **[#10380](https://github.com/QwenLM/qwen-code/issues/10380)** Auto-compaction doesn’t recover on HTTP 413 | Token/Session Mgmt | Long sessions become permanently unusable behind reverse proxies with body limits. | 3 comments, P2 |
| **[#8124](https://github.com/QwenLM/qwen-code/issues/8124)** Startup banner missing top lines on first paint (Windows) | UI/Rendering | Intermittent TUI regression; first `stdout` write already truncated. | 11 comments, `welcome-pr` |
| **[#10391](https://github.com/QwenLM/qwen-code/issues/10391)** Pinned sessions excluded from group sections (shows “· 0”) | Web Shell/Session | Sidebar groups appear empty; sessions fall into “Ungrouped” after restart. | 3 comments |
| **[#10406](https://github.com/QwenLM/qwen-code/issues/10406)** Infinite re-render loop via `connection.error` + inline `onError` | Web Shell/UI | Daemon unreachable → persistent error → effect refires every render → lockup. | 3 comments |
| **[#10405](https://github.com/QwenLM/qwen-code/issues/10405)** Session-switch overlay permanently locked while daemon unreachable | Web Shell/UI | History dropdown selection during outage leaves webview frozen until reload. | 3 comments |
| **[#10373](https://github.com/QwenLM/qwen-code/issues/10373)** Webview hardcodes `lang="en"` breaks `readLanguage()` for zh-CN | VS Code/Web Shell | i18n broken in embedded webview; follow-up from PR #9811 review. | 3 comments |
| **[#10441](https://github.com/QwenLM/qwen-code/issues/10441)** Review filter-screen: include directives can hide repo-local filter | Security/Review | `git config --file` doesn’t expand `include.path`/`includeIf`; origin-file resolution needed. | 3 comments, `ready-for-agent` |
| **[#8432](https://github.com/QwenLM/qwen-code/issues/8432)** Bailian Personal Token Plan models out of sync; image/video gen fails | Auth/Provider | Built-in model list stale vs. Bailian console; blocks multimodal use. | 5 comments, 1 👍, `ready-for-human` |

---

## 4. Key PR Progress (Top 10 by Significance)

| PR | Status | Summary |
|----|--------|---------|
| **[#10183](https://github.com/QwenLM/qwen-code/pull/10183)** `feat(memory): add structured on-demand recall` | Open | Replaces flat memory prompt with push/pull protocol: two-level ref/title tree on corpus change, query-focused metadata subtree, dedicated recall tool. |
| **[#9811](https://github.com/QwenLM/qwen-code/pull/9811)** `refactor(vscode-ide-companion): complete WebShell UI cutover` | Open (autofix/takeover) | Moves VS Code companion from legacy WebUI to Web Shell; workspace-scoped `qwen serve` daemon, per-process auth token. |
| **[#10121](https://github.com/QwenLM/qwen-code/pull/10121)** `perf(review): dedup candidates against carried ledger before verify shard` | **Closed** | New `qwen review dedup-candidates` subcommand eliminates re-derived findings early; addresses #10105. |
| **[#10432](https://github.com/QwenLM/qwen-code/pull/10432)** `feat(web-shell): add Local Control QR code entry to pane header` | **Closed** | QR popover in chat header (main + split-view) for Local Control pairing; copyable URL. |
| **[#10007](https://github.com/QwenLM/qwen-code/pull/10007)** `fix(core): keep no-follow reads protected where O_NOFOLLOW missing` | Open | Cross-platform `openNoFollow`/`openSyncNoFollow` helper; secures symlink-sensitive read paths. |
| **[#10122](https://github.com/QwenLM/qwen-code/pull/10122)** `feat(autofix): consume review convergence signals — circuit breaker` | Open (autofix/takeover) | Publishes machine-readable convergence codes (`recommendations.code`) so takeover loop can exit cleanly. |
| **[#10416](https://github.com/QwenLM/qwen-code/pull/10416)** `fix(web-shell): keep pinned sessions visible in sidebar group sections` | Open | Pinned sessions were dropped from group rendering; now appear in both Pinned section and original group. |
| **[#10427](https://github.com/QwenLM/qwen-code/pull/10427)** `fix(hooks): close four trust-boundary holes in hook execution` | Open (autofix/takeover) | HTTP hooks no longer follow redirects; repo config can’t trigger arbitrary code exec or network egress. Reopens #8396. |
| **[#10024](https://github.com/QwenLM/qwen-code/pull/10024)** `feat(web-shell): share HTML artifacts through managed hosting` | Open (autofix/takeover) | Guided provider flow (Cloudflare → Vercel → Netlify) for public HTML artifact sharing from Web Shell. |
| **[#10455](https://github.com/QwenLM/qwen-code/pull/10455)** `fix(cli): don't crash startup when output-language file unwritable` | Open | Guards advisory config write at startup; prevents crash on read-only `$HOME` or root-owned leftovers. |

---

## 5. Feature Request Trends
1. **Structured, queryable memory** — #10183 (on-demand recall), #9894 (explicit `project`/`user` scopes for daemon memory tasks).
2. **Session lifecycle control** — #8927 (`sessionRotation` with `maxTurns`/`maxAge` bounds), #10399 (workspace sidebar: inline overview, full menu, per-workspace endpoint).
3. **Review pipeline efficiency** — #10105/10121 (pre-verify dedup), #10106 (autofix thread-resolution observability), #10122 (convergence circuit breaker).
4. **Web Shell parity & extensibility** — #10024 (managed HTML sharing), #10425 (PR closing references → session issue bindings), #10432 (Local Control QR).
5. **Extension/install hardening** — #9724 (safe in-archive symlinks for older Git), daemon absolute-path installs (shipped in v0.22.3).

---

## 6. Developer Pain Points (Recurring Themes)
| Pain Point | Evidence |
|------------|----------|
| **Web Shell regression cluster** | 6+ issues in 24h: pinned sessions (#10391), session-switch overlay (#10405), infinite re-render (#10406), i18n hardcode (#10373), message-edit index mismatch (#10385), group counts (#10391) — all traced to PR #9811 cutover. |
| **Permission/allowlist breakage** | #10075 (P1): `permissions.allow` hides non-allowlisted tools silently; #10448: `.git` check blocks submodule workflows. |
| **Local model integration fragility** | #10435: v0.22.3 crashes llama-server (grammar parse); #8432: Bailian model list stale; #10380: 413 from proxies kills auto-compaction. |
| **CLI help/docs drift** | #8897: `--approval-mode`/`--auth-type` missing from `--help` (closed but symptomatic). |
| **CI/CD flakiness** | #10442: ECS runner fleet update failed silently post-release; #10036: Linux jobs need ECS routing; #10123: review workflow `cancel-in-progress` discards in-flight runs. |
| **Test coverage gaps** | #10430: `AppContainer` tests never exercise queued-submission drain via rendered component; #10456: native directory picker probed at assertion time (flaky). |

---

*Data sourced from `github.com/QwenLM/qwen-code` — releases, issues, and PRs updated 2026-08-28 to 2026-08-29.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-29

## 1. Today's Highlights
The project is in active pre-release stabilization for **v0.9.12** (tracking issue #5573), with 16 P0/P1 items targeted. Major architectural work continues on **TUI crate decomposition** (EPIC-005, #5316), while the plugin system is being brought to parity with Claude Code (#5579, #5663). A new **headless PR review** capability with GitHub posting landed (#5706), and **Daytona cloud-agent dispatch** was added for remote execution offload (#5701).

## 2. Releases
No new releases in the last 24 hours. The v0.9.12 milestone is actively tracked in [#5573](https://github.com/Hmbown/CodeWhale/issues/5573) with a working branch `codex/v0912-integration-20260823`.

## 3. Hot Issues (Top 6 from last 24h)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) **EPIC-005: TUI Crate Decomposition** | Umbrella epic for breaking the monolithic TUI crate into focused modules; foundational for maintainability and parallel development. | 18 comments, ongoing since Aug 10 — core architectural investment. |
| [#5573](https://github.com/Hmbown/CodeWhale/issues/5573) **v0.9.12 Milestone Tracker** | Central coordination for the next release; lists 16 must-fix items across safety, UX, and reliability. | 16 comments, updated today — release gatekeeper. |
| [#5579](https://github.com/Hmbown/CodeWhale/issues/5579) **Plugin UX Parity with Claude Code** | User-driven ask for proactive plugin recommendations, hot-reload, and discoverability — key differentiator for agent UX. | 3 comments, closed but work continues via PRs (#5663). |
| [#4402](https://github.com/Hmbown/CodeWhale/issues/4402) **Attention UX: Focus-Aware Notifications** | Addresses notification noise by making completion feedback terminal-focus-aware and adding action-required title state. | 2 comments, long-standing (Jul 16) — polish for daily drivers. |
| [#5668](https://github.com/Hmbown/CodeWhale/issues/5668) **Add `/copy` for Last Model Output** | Direct quality-of-life command to copy the most recent assistant response without manual selection. | 2 comments, new (Aug 27) — high-impact small feature. |
| [#5681](https://github.com/Hmbown/CodeWhale/issues/5681) **Extend Provider-Native Web Search** | Adds first-party web search for DeepSeek, Qwen, Kimi, Z.AI/BigModel, MiMo — closes parity gap with OpenAI/Anthropic/xAI. | 0 comments, new (Aug 28) — strategic provider expansion. |

## 4. Key PR Progress (Top 10 by Impact)

| PR | Type | Summary |
|----|------|---------|
| [#5706](https://github.com/Hmbown/CodeWhale/pull/5706) | **Feature** | `codewhale review --pr N [--post]` — headless advisory review with optional GitHub COMMENT posting via dedicated bot identity. |
| [#5701](https://github.com/Hmbown/CodeWhale/pull/5701) | **Feature** | `codewhale dispatch` / `/dispatch` — first-class Daytona cloud-agent offload against GitHub/CNB/Gitee remotes with confirmation gating. |
| [#5703](https://github.com/Hmbown/CodeWhale/pull/5703) | **Feature** | Aligns `cw operate` to landed CWC `OperateRecord` (camelCase fields, new runtime API endpoints for pace/plan/cancel). |
| [#5663](https://github.com/Hmbown/CodeWhale/pull/5663) | **Feature** | Plugin suggestions now toast proactively from the prompt (e.g., mention Supabase → suggest plugin) — delivers #5579 UX. |
| [#5704](https://github.com/Hmbown/CodeWhale/pull/5704) | **Fix** | Unified login path storing account session + Daytona slot; adds `/login` to TUI; fixes logout leaving stale tokens. |
| [#5686](https://github.com/Hmbown/CodeWhale/pull/5686) | **Feature** | Native web search for Moonshot/Kimi (K3 fibers, K2.6 `$web_search`, Kimi Code `/search`) with round/tool-call bounds. |
| [#5699](https://github.com/Hmbown/CodeWhale/pull/5699) | **Feature** | Background shells promoted to first-class work-strip group (`▾ Shells N`), navigable, cancellable via `/jobs cancel`. |
| [#5702](https://github.com/Hmbown/CodeWhale/pull/5702) | **Refactor** | Route Contract Phase 1: wires `RouteResolver`, deletes 47-arm `ProviderArg` mirror, accepts any catalog route ID via `--provider`. |
| [#5700](https://github.com/Hmbown/CodeWhale/pull/5700) | **Infra** | Adopts General Translation (GT) as single website/docs i18n pipeline; seeds local `gt-catalog/{en,zh}.json`. |
| [#5634](https://github.com/Hmbown/CodeWhale/pull/5634) | **Fix** | Scopes runtime thread store per session (`$CODEWHALE_HOME/sessions/<id>/runtime`) — fixes multi-process collision (#5630). |

*Dependency/maintenance PRs also merged: schemaui 0.12.4 (#5695), rio-vt 0.5.26 (#5694), TypeScript 7.0.2 (#5671), Next.js 16.3.3 (#5673), Tailwind 4.3.3 (#5670), dead-code sweep −143 LOC (#5705).*

## 5. Feature Request Trends
1. **Agent-grade plugin UX** — Proactive discovery, hot-reload, prompt-contextual suggestions (Claude Code parity).
2. **Multi-provider parity** — Native web search, tool calling, and routing for DeepSeek, Qwen, Kimi, Z.AI, MiMo alongside OpenAI/Anthropic.
3. **Headless/CI integration** — PR review posting, cloud-agent dispatch, GitHub App bot identity for automation.
4. **Session/workspace isolation** — Per-session runtime stores, first-class shell/subagent management on work strip.
5. **Attention-aware notifications** — Focus-aware completion, action-required title state, return recap for context switching.

## 6. Developer Pain Points
- **Plugin friction**: Users must manually invoke `/plugin suggest`; no proactive nudge when context implies a plugin (addressed in #5663).
- **Copy-paste friction**: No built-in way to grab the last model output — forces terminal text selection (#5668).
- **Provider fragmentation**: Non-OpenAI/Anthropic routes fall back to separate search backends instead of native tools (#5681).
- **Auth/session leakage**: Logout didn’t clear Daytona tokens; no TUI `/login` command (#5704).
- **Multi-process conflicts**: Shared `~/.codewhale/tasks/runtime` caused collisions (#5630 → #5634).
- **Release hygiene**: Marketing pages (pricing, legal) returned 404s or stale content (#5639, #5647).

---

*Data source: github.com/Hmbown/CodeWhale (DeepSeek-TUI) — Issues & PRs updated 2026-08-28 to 2026-08-29.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*