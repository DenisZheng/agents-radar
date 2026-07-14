# OpenClaw Ecosystem Digest 2026-07-03

> Issues: 195 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-03 01:51 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-07-03

## Today's Overview

OpenClaw is in a **high-activity maintenance phase** with 195 issues and 500 PRs updated in the last 24 hours, indicating a strong development cadence. The project recently shipped **v2026.7.1-beta.1** featuring GPT-5.6 support and external harness attachment, while the community is heavily focused on **session state stability, message delivery reliability, and security hardening**. With 123 open issues (72 closed today) and 436 open PRs (64 merged/closed), the maintainers are processing a significant backlog while the community actively reports regressions from the late-June releases. Several **diamond lobster-rated** (critical-severity) bugs remain open without fix PRs, suggesting sustained investment in the reliability track for July.

---

## Releases

### **v2026.7.1-beta.1** (New — released 2026-07-03)

**Key Changes:**
- **OpenAI GPT-5.6 model family support** — integrated across catalog, capability, and runtime selection paths (PR #98333)
- **External harness attachment** — `openclaw attach` now launches an external harness against an existing Gateway session

**Migration Notes:**
- No breaking changes documented
- GPT-5.6 users should verify their API key has access to the new model family
- External harness attachment requires Gateway version parity

---

## Project Progress

Today saw **64 merged/closed PRs** and **72 closed issues**, reflecting active resolution efforts.

### Notable Merges & Fixes:

| PR # | Description | Impact |
|------|-------------|--------|
| #99187 | Resolve `node execPath` before forking embedding worker | Fixes ENOENT after Homebrew Node upgrades; **XL-sized fix** |
| #98236 | Refactor: flip sessions/transcripts to SQLite storage (⚠️ do not merge — still in review) | Major architectural shift; **XL-sized** |
| #98749 | Consolidate provider loaders and enforce lazy runtime helpers (6/6 series) | Maintainability improvement across 15+ extensions |
| #98832 | Support configurable `containerWorkdir` for OpenShell media paths | Fixes sandbox path normalization for Docker users |
| #98868 | Refresh iOS onboarding setup flow | UX improvement for new users |

### Features Advanced:
- **Signal channel**: Target aliases PR (#95738) ready for maintainer review
- **Control UI**: Cron calendar timeline view (#41892) still waiting on author
- **iOS**: Liquid Glass UI and Dynamic Island support (#40874) still in author queue
- **Google/Gemini**: Typed CLI auth boundary PR (#98343) needs proof of real behavior

---

## Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | 👍 | 
|-------|----------|-----|
| [#25592] Text between tool calls leaks to messaging channels | 33 | 1 |
| [#88312] Codex app-server turn-completion stall regression | 19 | 5 |
| [#92201] Anthropic thinking signatures invalid on replay | 18 | 1 |
| [#73148] Image tool: opaque "Failed to optimize image" | 14 | 3 |
| [#38327] "Cannot convert undefined or null to object" with Gemini 3.1 | 10 | 3 |

**Analysis:**
The community is most engaged with **message delivery issues** and **model-specific regressions**. The top issue (#25592) — text between tool calls leaking to channels — has been open since February and remains the most discussed, signaling a persistent UX pain point. The Codex turn-completion stall (#88312, 19 comments, 5 👍) is a high-impact regression affecting ChatGPT Plus subscribers, with users expressing frustration about a "fixed" issue resurfacing. There's also significant attention on **Anthropic block signature invalidation** (#92201), which affects Slack plugin reliability.

### Most Reacted Issues

- **#88312** (5 👍) — Codex turn-completion stall — clear user frustration with regression of a previously-fixed bug
- **#98416** (5 👍) — Published dist missing reentrancy guard — deployment reliability concern
- **#73148** (3 👍) — Image tool sharp dependency — impacts users without native packages
- **#38327** (3 👍) — Gemini 3.1 regression — affects Google Cloud users

### Underlying Needs
1. **Reliability over features** — Users are prioritizing session stability and message delivery working consistently
2. **Clearer error messages** — Opaque failures ("Failed to optimize image", "turn-completion stall") frustrate debugging
3. **Channel parity** — Differences between Telegram, Discord, iOS, and WebChat behavior cause confusion

---

## Bugs & Stability

### Critical (P1) Bugs Reported Today

| Issue | Description | Fix PR? | Severity |
|-------|-------------|---------|----------|
| [#99253] | Assistant self-inserted fabricated user turn and answered it | ❌ No PR | **🦞 Diamond Lobster** — security/safety |
| [#99252] | Assistant response contains fabricated timestamped user line | ❌ Closed as superseded by #99253 | Security |
| [#99120] | OpenAI OAuth refresh false-green falls back to invalidated credential | ❌ No PR | Message-loss, auth |
| [#99186] | Tool results with Cyrillic UTF-8 rendered as image attachment | ❌ No PR | Message-loss |
| [#99183] | Embedding worker fork fails with ENOENT after Node upgrade | ✅ #99187 (merged) | Session-state |
| [#99168] | Large tool output poisons subsequent results as "(no output)" | ❌ No PR | Message-loss |

### Regressions

| Issue | Description | First Seen |
|-------|-------------|------------|
| #98672 | Sessions breaking constantly (closed) | 2026-07-01 |
| #98614 | `sessions_spawn` missing scope `operator.write` | 2026-7.1 (regression 2026.6.1→6.11) |
| #98790 | Concurrent agent-to-agent turn session tree poisoning | 2026-06-10 |

### iOS/Android Stability

| Issue | Platform | Impact |
|-------|----------|--------|
| #99093 | iOS Voice Wake crash during mic tap reinstall | Crash-loop |
| #99046 | iOS photos permission not recognized in Limited Access | Feature loss |
| #99071 | Android Codex plugin discovery causing excessive disk I/O | Performance |
| #92737 | Android camera privacy indicator on app open | Privacy |

---

## Feature Requests & Roadmap Signals

### High-Impact Community Requests

| Issue | Feature | Votes | Predict Next Version |
|-------|---------|-------|---------------------|
| #35203 | Multi-Agent Collaboration: capability profiling + shared blackboard | 0 👍 (9 comments) | **Unlikely** — complex RFC, needs product decision |
| #32530 | Auto-discovery of agent configs from external workspaces | 1 👍 | Possible in v2026.8 — high utility |
| #77165 | Auto-generate session titles via AI summarization | 2 👍 | Likely P3, not near-term |
| #81084 | MSTeams opt-out from per-thread sessions | 1 👍 | Possible in v2026.7.x |
| #11623 | Floating agent bubbles (Clawi) for macOS | 1 👍 | P3, unlikely near-term |

### Roadmap Predictions

- **Short-term (v2026.7.x):** GPT-5.6 follow-up fixes, SQLite storage flip (#98236) if approved, EACCES handling in doctor (#99300)
- **Medium-term (v2026.8):** Multi-agent collaboration enhancements (#35203) may see initial RFC implementation, iOS UX overhaul (#40874)
- **Long-term:** Floating bubbles (#11623), auto-discovery (#32530), but significant backlog of P1 bugs may delay

---

## User Feedback Summary

### Pain Points

1. **"My session broke after update"** — Multiple users report regressions after incremental updates (e.g., #98672, #98614, #87744). The v2026.5.27 and v2026.6.11 releases appear particularly troublesome.
   
2. **"I can't tell what's happening"** — Opaque error messages are a recurring theme: "Failed to optimize image" (#73148), "Codex stopped before confirming the turn was complete" (#88312), and tool output appearing as "(no output)" (#99168).

3. **"My data got lost"** — Message loss across channels (Telegram #90962, iOS #97983, Android #79552) and fabricated transcript entries (#99253) erode user trust.

4. **"Update broke my workflow"** — The SQLite migration (#98236) and OAuth changes (#91352, #98702) create instability for power users.

### Satisfaction Signals

- **Positive:** GPT-5.6 support was well-received; 1 👍 on release PR #98333
- **Positive:** iOS onboarding refresh (#98868) addresses an acknowledged UX gap
- **Neutral/Mixed:** Users appreciate the SQLite storage direction but express concern about migration risks (#98236 explicitly marked "do not merge")

### Use Cases Observed

- **Telegram bots** — Heavy usage, but inter-tool commentary and rich message handling are broken (#90962)
- **Android/WebChat** — "Personal assistant" use on mobile, but turn reliability is inconsistent (#97983)
- **Multi-agent setups** — Enterprise/power users running subagents (#75593, #92433) and cron jobs (#94846)
- **OAuth-based logins** — Teams using OpenAI Codex integrations, hit by token refresh issues (#99120, #91352)

---

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Severity | Why Stalled |
|-------|-----|----------|-------------|
| [#25592] Text leaks between tool calls | 130 days | **🦞 Diamond Lobster** | Requires product decision, security review, and linked PR |
| [#35203] Multi-agent collaboration RFC | 120 days | P2 | Needs product decision; high comment count but low votes |
| [#40880] Sandbox MEDIA_MAX_BYTES hardcoded | 115 days | P2 | Needs security review and product decision |
| [#47910] Provider fallback by failure class | 108 days | P1 | Needs live repro; has linked PR (#43469) |
| [#70024] Channel stop timeout leaves channel dead | 72 days | P1 | Has fix shape clear and linked PR |
| [#72015] Active-memory blocks replies | 68 days | P1 | Needs product decision and security review |
| [#81084] MSTeams per-thread sessions opt-out | 52 days | P2 | Needs product decision |
| [#92201] Anthropic thinking signatures | 22 days | P1 | Has PR #95738 related but not directly linked |

### PRs Stuck in "Needs Proof" or "Waiting on Author"

| PR # | Age | Size | Status | Issue |
|------|-----|------|--------|-------|
| #43951 | 112 days | M | Needs proof | hooks agent accountid normalization |
| #41067 | 114 days | L | Needs proof | Dashboard chat recovery |
| #42617 | 113 days | M | Needs proof | Configurable pairingMessage |
| #41375 | 115 days | M | Waiting on author | Hook replies on replyable surfaces |
| #41892 | 113 days | XL | Waiting on author | Control UI cron calendar |
| #43469 | 113 days | L | Waiting on author | Markdown skill injection scanning |
| #40874 | 114 days | L | Waiting on author | iOS Liquid Glass UI |

**Risk:** These long-stalled PRs (all 110+ days) represent significant engineering investment that may need maintainer triage or closure to reduce technical debt. Particularly concerning is #43469 (security scanning for injection threats) which directly relates to the fabricated transcript safety issue (#99253) reported today.

---

*Generated 2026-07-03 from openclaw/openclaw GitHub data. Ratings: 🦞 Diamond Lobster = critical impact, 🐚 Platinum Hermit = high severity, 🦐 Gold Shrimp = notable, 🦪 Silver Shellfish = minor.*

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digest summaries for **2026-07-03**.

---

## Cross-Project Comparison Report: Personal AI Assistant Ecosystem
**Date:** 2026-07-03

### 1. Ecosystem Overview
The open-source personal AI assistant ecosystem is in a **high-velocity stabilization phase**, characterized by heavy investment in reliability, security hardening, and provider compatibility rather than novel feature development. The ecosystem is bifurcating between **reference/framework projects** (OpenClaw, CoPaw) that drive core protocol standards, and **specialized implementations** (ZeroClaw, Moltis, NanoBot) targeting specific deployment paradigms (privacy-first, enterprise, lightweight). A clear industry pattern is the shift toward **hardening production pathways** (session state, message delivery, OAuth) after a period of rapid feature expansion, with user feedback heavily prioritizing consistency over novelty.

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | New Release (Today) | Health Score | Key Signal |
|---------|----------------------|-------------------|---------------------|--------------|------------|
| **OpenClaw** | 195 | 500 | ✅ v2026.7.1-beta.1 | **High Activity / Critical Bug Load** | 500 PRs, 72 issues closed, but 3 Diamond Lobster bugs open |
| **NanoBot** | 98 | 63 | ❌ No | **High Activity / Reactive Fix** | Batch fix strategy (#4648); rapid response to MCP crashes |
| **Hermes Agent** | ~50 | ~50 | ❌ No | **High Activity / Legacy Integration** | 27 PRs merged; focus on gateway stability vs. new features |
| **IronClaw** | 23 | 50 | ❌ No | **Elevated Activity / Stabilization** | QA bug bash ongoing; 21 PRs merged; release PR #5311 pending |
| **CoPaw** | 23 | 50 | ⚠️ v2.0.0-beta.2 (Jul 2) | **High Activity / Beta Churn** | 27 PRs merged; memory leak + context collapse bugs |
| **ZeroClaw** | 37 | 50 | ❌ No | **Elevated Activity / Architectural Shift** | 19 PRs merged; MCP tool gap + WSL2 OOM critical |
| **PicoClaw** | 2 | 25 | ❌ No | **Moderate Activity / Dependency Cycle** | 24/25 PRs are Dependabot bumps; 2 critical bugs unfixed |
| **LobsterAI** | N/A | 8 | ❌ No | **Stable / Bug Fix Sprint** | 7 PRs merged; no new issues; 5 stale issues unresolved |
| **Moltis** | 0 | 3 | ❌ No | **Stable / Focused Enhancement** | Critical WhatsApp delivery fix merged; 2 open PRs |
| **NanoClaw** | 4 | 14 | ❌ No | **High Activity / Feature Integration** | Agent templates merged; WhatsApp collision bug open |
| **NullClaw** | 0 | 0 | ❌ No | **Inactive** | No activity in 24h |
| **TinyClaw** | 0 | 0 | ❌ No | **Inactive** | No activity in 24h |
| **ZeptoClaw** | 0 | 0 | ❌ No | **Inactive** | No activity in 24h |

### 3. OpenClaw's Position

| Dimension | OpenClaw | Peer Context |
|-----------|----------|--------------|
| **Community Size** | Largest: 195 issues, 500 PRs in 24h; 123 open issues | ZeroClaw (37/50), CoPaw (23/50) — 5-10x smaller activity volume |
| **Release Cadence** | Fast (beta releases every ~7 days) | Most peers are in a holding pattern (no releases today) |
| **Technical Approach** | Reference implementation: broadest provider support (GPT-5.6, Anthropic, Gemini) + SQLite migration | CoPaw focuses on Qwen/MiniMax; NanoBot on lightweight MCP; ZeroClaw on privacy-first Rust |
| **Stability Reputation** | Volatile: 3 Diamond Lobster bugs (fabricated transcripts, OAuth refresh) | NanoBot resolved MCP crash in hours; CoPaw has memory leaks; ZeroClaw has S0 OOM |
| **Key Advantage** | Breadth of ecosystem: Telegram, Discord, iOS, WebChat, Codex integration | Competitors have deeper single-platform focus (e.g., Moltis on WhatsApp; PicoClaw on Matrix) |
| **Key Vulnerability** | Reliability regressions after updates (v2026.5.27, v2026.6.11 broken workflows) | CoPaw beta users expect instability; ZeroClaw has architectural debt (auth middleware) |

**Advantage Summary:** OpenClaw commands the largest developer mindshare and fastest iteration, but carries significant reliability risk for production users. Peers like ZeroClaw (Rust-based) offer better memory safety guarantees, while CoPaw (Qwen ecosystem) provides deeper integration with Chinese AI providers.

### 4. Shared Technical Focus Areas

| Focus Area | Affected Projects | Specific Need |
|------------|-------------------|---------------|
| **Session State Reliability** | OpenClaw, ZeroClaw, CoPaw | Persistent session crashes, context compression errors, OOM conditions |
| **Message Delivery Consistency** | OpenClaw, Moltis, NanoBot | Silent drops on WhatsApp, Telegram, and Codex integrations |
| **MCP (Model Context Protocol) Stability** | ZeroClaw, NanoBot, Hermes Agent | Tool visibility gaps, crash on malformed output, zombie processes |
| **Provider Compatibility / OAuth** | OpenClaw, CoPaw, NanoBot | Anthropic thinking signatures, GPT temperature issues, OAuth refresh failures |
| **Security Hardening** | All | Key sanitization, rate limiting, prompt injection defense, fabricated transcript prevention |
| **WhatsApp Integration** | Moltis, ZeroClaw, PicoClaw, NanoClaw | LID migration passkey gates, adapter collisions, delivery failures |
| **Windows Build Reliability** | ZeroClaw, CoPaw | Missing CRT, 74 test failures, bash compatibility |
| **Data Privacy / Memory Isolation** | Hermes Agent, ZeroClaw, CoPaw | Memo visibility across users, workspace leakage, vector index bloat |

### 5. Differentiation Analysis

| Axis | Project | Key Differentiator |
|------|---------|-------------------|
| **Target User** | **OpenClaw** | Broad: from ChatGPT power users to bot developers |
| | **ZeroClaw** | Privacy-conscious, WSL2/Linux, Rust ecosystem |
| | **CoPaw** | Chinese market: Qwen/MiniMax, Feishu integration |
| | **NanoBot** | Lightweight MCP-first: Anthropic/OpenAI compatibility |
| | **Moltis** | WhatsApp-first: enterprise messaging reliability |
| **Technical Architecture** | **OpenClaw** | Polyglot (Go/TS/Python), SQLite migration |
| | **ZeroClaw** | Rust-native with TUI, OTel observability |
| | **CoPaw** | Python/ChromaDB, Qwen ecosystem |
| | **PicoClaw** | Go backend, Dependabot-driven dependency cycle |
| **Release Philosophy** | **OpenClaw** | Fast beta cadence, high churn |
| | **IronClaw** | Feature-complete Reborn stack, QA-driven |
| | **LobsterAI** | Conservative: merged fixes, stalled feature requests |
| **Community Engagement** | **ZeroClaw** | High: 14 comments on MCP bug, RFC-driven governance |
| | **Hermes Agent** | Moderate: 5+ comments on shell injection, desktop UX |
| | **PicoClaw** | Low: 0 comments on any issue today |

### 6. Community Momentum & Maturity

**Tier 1: High Velocity (Active Iteration)**
- **OpenClaw** — 500 PRs in 24h; processing 72 issues/day; beta releases weekly. This is the engine room of the ecosystem.
- **CoPaw** — 27 PRs merged; v2.0.0-beta.2 released yesterday; first-time contributors active. High risk/reward.
- **ZeroClaw** — 19 PRs merged; 6 new bugs reported; Windows fixes landing. Architectural shifts (auth middleware, MCP) indicate maturation.

**Tier 2: Stabilization Phase (Bug Fix Focus)**
- **NanoBot** — Batch fix strategy; resolved MCP crash in hours. Good hygiene but no new features.
- **Hermes Agent** — 27 legacy fixes merged; 42 open issues. Cleaning technical debt.
- **IronClaw** — QA bug bash: 4 bugs closed, 21 PRs merged. Pre-release stabilization.

**Tier 3: Maintenance / Low Activity**
- **Moltis** — 3 PRs; focused WhatsApp LID migration. Healthy but niche.
- **LobsterAI** — 7 PRs merged; no new issues; 5 stale. Low community engagement.
- **PicoClaw** — 24/25 PRs are bot-driven; critical bugs unfixed. Minimal developer attention.

**Tier 4: Dormant**
- **NullClaw, TinyClaw, ZeptoClaw** — No activity. These projects may be abandoned or seasonal.

### 7. Trend Signals

1. **Reliability > Features:** Across all active projects, users are demanding stable session state, message delivery, and error diagnostics over new capabilities. OpenClaw's fabricated transcript bug and ZeroClaw's MCP tool gap are the most discussed issues.

2. **Security Hardening is Not Optional:** Fabricated transcripts (OpenClaw), prompt injection bypasses (Hermes Agent), and credential leakage (CoPaw, NanoBot) are driving a cross-project push for OAuth, rate limiting, and output sanitization.

3. **MCP is the New Plugin Standard:** ZeroClaw, NanoBot, and Hermes Agent are all investing in MCP integration, but tool visibility gaps and crash-on-malformed-output bugs suggest the protocol is still immature.

4. **Windows and WSL2 Are Pain Points:** ZeroClaw (OOM, 74 test failures) and CoPaw (memory leak) report the most Windows-specific bugs. The ecosystem is still Linux-first, but user demand for desktop parity is growing.

5. **WhatsApp is Under Pressure:** Meta's LID migration and passkey gates are breaking multiple projects simultaneously (Moltis, ZeroClaw, PicoClaw, NanoClaw). This is a systemic risk for WhatsApp-dependent deployments.

6. **Context Windows Are Bounding:** IronClaw (Reborn step-cost regression), CoPaw (context compression collapses active turn), and OpenClaw (ChromaDB index bloat to 37GB) all signal that long-session context management is a hard problem not yet solved.

7. **Value for AI Agent Developers:**
   - **If you need stability:** Use NanoBot or Moltis (low churn, focused maintenance).
   - **If you need breadth:** OpenClaw remains the best integration surface (GPT-5.6, all channels), but expect regressions.
   - **If you need memory safety/Windows:** ZeroClaw is the only Rust-native option, but WSL2 OOM is a blocker.
   - **If you need Chinese market:** CoPaw is the only option with deep Qwen/MiniMax/Feishu support.
   - **If you need production observability:** ZeroClaw's OTel integration and IronClaw's QA taxonomy are industry-leading.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest for 2026-07-03**

### 1. Today's Overview
The NanoBot project is in a period of extremely high activity, with a major push to resolve a backlog of validated bugs, security issues, and refactoring debt. In the last 24 hours, 98 issues were updated (95 active), and 63 pull requests were updated (35 open, 28 merged/closed). Notably, one large batch PR (#4648) was closed, which appears to have spawned a series of focused, smaller fixes. Zero new releases were published today, indicating that the development team is consolidating fixes into the `main` branch before a potential upcoming release. The project health can be characterized as **highly reactive to bug reports**, with a clear "fix batch" strategy underway.

### 2. Releases
No new releases were created on 2026-07-03.

### 3. Project Progress
A significant number of PRs were merged or closed today. The most notable is PR **#4648** (closed), titled "Fix validated issue batch," which was a large composite fix addressing approximately 13 validated issues. This was likely broken up into smaller, more manageable PRs for specific fixes. Key features and fixes that advanced today include:
- **Security Fix:** PR **#4668** (open) – Enforces message outbound policy, adding authorization hooks to prevent the `message` tool from sending to unauthorized targets (fixes #4076).
- **MCP Stability:** PR **#4666** (open) – Fixes a crash when MCP tool calls return malformed results, wrapping exceptions as structured tool errors (fixes #4652).
- **Provider Compatibility:** PR **#4685** (open) – Omit the `temperature` parameter for Anthropic's `claude-sonnet-5` to prevent 400 errors (fixes #4683).
- **New Provider Support:** PR **#4686** (open) – Adds canonical support for the OpenCode Zen provider, keeping the Go provider compatible.
- **SSRF Protection:** PR **#4671** (open) – Pins DNS lookups to validated IPs for web fetching and MCP HTTP probes (fixes #4611).
- **Administrative Fixes:** PR **#4669** (open) now requires an API key for the `serve` command, and PR **#4684** (open) guards token refresh in the Copilot provider with an `asyncio.Lock` to prevent race conditions.

### 4. Community Hot Topics
The most active discussions reveal a community focused on quality-of-life improvements and ensuring reliable agent behavior.
- **Issue #4657 (5 comments):** "Nanobot Radar Finding" – A tracking issue listing 13 confirmed bugs without open PRs. This reflects a community effort to systematically identify and track unresolved issues, signaling a desire for more structured bug management.
- **Issue #3344 (5 comments):** "DingTalk Group Can not Seed file to Nanobot Agent" – A persistent integration pain point with DingTalk. Users are seeking a solution for file uploads that are sent in separate messages.
- **Issue #4604 (5 comments):** "Anthropic OAuth" – High demand for user-friendly OAuth authentication for Anthropic, moving away from API keys. PR #4632 is working on this.
- **Issue #4419 (5 comments):** "Automatic reasoning effort escalation" – A feature request for dynamic control of reasoning model depth. This indicates an advanced user base looking to optimize cost and response quality.
- **Issue #4253 (5 comments):** "support overriding model per conversation" – Users want the ability to switch between models (e.g., local vs. cloud) based on task sensitivity.
- **Issue #2231 (5 comments):** "Plugin system for agent extensibility" – A long-standing feature request for a plugin system similar to Copilot CLI or Claude Code. This remains a top wish among the community.

### 5. Bugs & Stability
Several critical and moderate bugs were reported in the last 24 hours, with most having immediate fix PRs.
- **Critical:** **Issue #4652** – "Nanobot process crashes directly when MCP tool call exception." Severity: **Highest**. A crash on malformed MCP output. **Fix exists:** PR #4666 merged today.
- **Critical:** **Issue #4683** – "temperature parameter not omitted for claude-sonnet-5 (causes 400 invalid_request_error)." Severity: **High**. Users of the new Sonnet model cannot use it. **Fix exists:** PR #4685 opened today.
- **Moderate (Platform-Specific):** **Issue #4544** – "exec uses cmd.exe for single-line and PowerShell for multi-line commands on Windows." Inconsistent shell behavior is a moderate blocker for Windows users running automation scripts. PR #4648 was a batch fix for this and other validated issues.
- **Moderate:** **Issue #4061** – "OpenAI-compatible text-format tool calls are not parsed into structured tool calls." Allows providers to silently fail to execute tools. **Fix exists:** PR #4662 opened today.
- **Low (Regulatory/Privacy):** **Issue #2836** – "Add support for separate workspace per WhatsApp chat_id." A privacy concern where user data is not isolated. This issue was opened months ago but was re-updated, indicating ongoing concern.

### 6. Feature Requests & Roadmap Signals
The community is actively shaping NanoBot's future, with a focus on flexibility, extensibility, and platform parity.
- **High Priority (Likely Soon):** **Anthropic OAuth** (Issue #4604, PR #4632). Given the active development, support for Claude subscription users via OAuth likely targets the next minor release.
- **Medium Priority:** **Plugin System** (Issue #2231). Despite being open since March, the need for extensibility is a recurring theme. The recent "Radar" bug tracking suggests a focus on core stability, but this remains a top feature request.
- **Medium Priority:** **Per-conversation Model Override** (Issue #4253) and **Automatic Reasoning Escalation** (Issue #4419). These point to a community of power users who want fine-grained control over model behavior.
- **Low Priority (Niche):** **Mattermost Channel Support** (PR #4459) and **Voice Output** (Issue #4010). These are features for specific user segments, progressing slowly but steadily.

### 7. User Feedback Summary
User sentiment is mixed but trending positive due to the high fix velocity. Users are expressing **dissatisfaction** with regressions and platform-specific bugs (e.g., DingTalk file upload, Windows shell issues, Telegram long poll hangs). However, the rapid response from maintainers (e.g., fixing MCP crashes and Sonnet model incompatibilities within hours) is likely generating **satisfaction** among the core developer community. Common pain points include:
- **Reliability:** "The nanobot process crashes immediately when an MCP tool call returns an error." (Issue #4652).
- **Platform Parity:** "Feishu channel doesn't show progress notifications even when enabled." (Issue #3166).
- **Usability:** "How to push/send a message from an API session to another channel?" (Issue #3074), highlighting a lack of documentation or clear API patterns.
- **Performance:** "Pipeline latency metrics for voice interactions… End-to-end latency feels slow." (Issue #3257), indicating a need for observability tooling.

### 8. Backlog Watch
Several significant issues remain unanswered despite being critical to certain user groups.
- **Issue #2231 (Plugin System):** Created 2026-03-18. This is the #1 feature request by comment count but has no dedicated PR. It risks alienating advanced users who want to extend the agent.
- **Issue #2829 (Ollama Tool Calling):** Created 2026-04-05. A critical integration bug with the Ollama provider. The latest update includes a detailed analysis of the root cause, yet there is no direct PR addressing it.
- **Issue #3626 (Telegram Long Polling Hangs):** Created 2026-05-05. A silent failure mode that makes the bot appear dead. This is a major reliability concern for Telegram users.
- **Issue #3074 (API Session to Channel Messaging):** Created 2026-04-12. Users report a silent failure when using the message tool to send cross-channel messages. No official resolution or workaround has been provided.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for **Hermes Agent** on **2026-07-03**.

---

## Hermes Agent Project Digest — 2026-07-03

### 1. Today's Overview
Today marks a period of **high maintenance activity** with approximately **50 issues** and **50 pull requests** updated in the last 24 hours. However, a significant portion of this activity is concentrated on **merging legacy fixes** (over 27 PRs closed/merged, many authored by `wesleysimplicio`), suggesting a focused effort to clear a backlog of stable bug fixes rather than a surge in new feature development. The project released **no new versions** today. The community remains highly engaged, with 42 open issues actively discussed, though the types of reports indicate **ongoing stability challenges** in the gateway, desktop client, and agent session management layers.

### 2. Releases
**No new releases today.**

### 3. Project Progress
A total of **27 pull requests** were merged or closed today, indicating a strong push to resolve outstanding issues. Key areas of advancement include:

- **Gateway Stability:** Multiple core fixes were merged to improve connection robustness, including preventing TOCTOU race conditions in the OpenRouter client ([PR #24734](https://github.com/NousResearch/hermes-agent/pull/24734)), ensuring clean exits under systemd when duplicate instances are detected ([PR #22391](https://github.com/NousResearch/hermes-agent/pull/22391)), and fixing Feishu platform message parsing ([PR #25757](https://github.com/NousResearch/hermes-agent/pull/25757)).
- **Agent Model Handling:** Critical fixes corrected client initialization issues for Qwen providers ([PR #22624](https://github.com/NousResearch/hermes-agent/pull/22624)) and handled non-numeric API cost values that would previously crash the agent ([PR #22746](https://github.com/NousResearch/hermes-agent/pull/22746)).
- **Miscellaneous Stability:** Fixes included guarding against malformed checkpoint data in process recovery ([PR #22544](https://github.com/NousResearch/hermes-agent/pull/22544)), rejecting long foreground sleep commands that would block the agent ([PR #22670](https://github.com/NousResearch/hermes-agent/pull/22670)), and adding CJK-aware entity extraction to the holographic memory plugin ([PR #24558](https://github.com/NousResearch/hermes-agent/pull/24558)).

### 4. Community Hot Topics
The community is most vocal about **reliability and user experience regressions**:

- **Shell / Steer Injection Conflicts:** Issue [#36934](https://github.com/NousResearch/hermes-agent/issues/36934) ("/steer flagged as prompt injection") has garnered 8 comments. This is a high-priority (P1) bug where legitimate user steering input is flagged by high-resistance models as a prompt injection attack. The core issue is a collision between tool delivery channels and injection defense logic, causing a severe UX degradation for power users.
- **Desktop Client Limitations:** Feature request [#38602](https://github.com/NousResearch/hermes-agent/issues/38602) ("Desktop Client-Only Installation") is the **most upvoted** item today (37 👍 ) with 8 comments. Users are frustrated that the desktop app forces a full local runtime installation, preventing a thin-client setup connecting to a remote Hermes server.
- **Desktop Profile Management:** Bug [#47368](https://github.com/NousResearch/hermes-agent/issues/47368) ("Delete profile silently fails") has 4 comments. Users report that deleting a profile from the UI merely hides it while the process and data persist, which is confusing and disrupts workflow.

### 5. Bugs & Stability
Today’s reports highlight several platform-specific and systemic stability issues.

**Critical / High (P1-P2):**
- **Desktop UI Loop (P3, High Impact):** Issue [#53049](https://github.com/NousResearch/hermes-agent/issues/53049) describes the left menu constantly refreshing, causing high CPU usage. This is a regression from a recent update and is highly disruptive.
- **Linux Capture Crash (P2):** Issue [#56704](https://github.com/NousResearch/hermes-agent/issues/56704) reports that `computer_use` capture fails with a `TypeError` on Linux/WSL when the `list_windows` tool returns `null` values for `pid` or `window_id`. The code does not handle this edge case.
- **Subagent Fallback Configuration Bug (P2):** Issue [#24782](https://github.com/NousResearch/hermes-agent/issues/24782) details that when a subagent falls back to a secondary model, it incorrectly uses the parent agent’s `base_url` instead of the fallback’s configured URL, breaking API calls for enterprise setups.
- **MCP Server Zombie Processes (P2):** Issue [#57355](https://github.com/NousResearch/hermes-agent/issues/57355) reports that MCP server subprocesses accumulate as zombies on connection retries, as the system fails to kill previous failed instances.
- **LiteLLM Context Size (P2):** Issue [#8465](https://github.com/NousResearch/hermes-agent/issues/8465) remains open with a high number of reactions (5 👍 ), highlighting a long-standing bug where LiteLLM integration fails to detect the correct context window size, defaulting to 128k.

**Medium (P3):**
- **Python 3.14 Compatibility:** Issue [#57381](https://github.com/NousResearch/hermes-agent/issues/57381) reports that `hermes-setup` crashes due to the removal of `distutils.version` in Python 3.12+.
- **Desktop Model Selector Crash:** Issue [#57405](https://github.com/NousResearch/hermes-agent/issues/57405) reports a crash ("'dict' object has no attribute 'lower'") when clicking the model selector on macOS.

### 6. Feature Requests & Roadmap Signals
The community is pushing for **enterprise-grade configurability and security**:

- **Thin-Client Desktop Mode (P3):** The most popular request ([#38602](https://github.com/NousResearch/hermes-agent/issues/38602)) suggests a fundamental architectural change to allow the desktop app to operate purely as a thin client. This is likely a significant feature for the next major version.
- **OAuth Broker (P3):** Issue [#23944](https://github.com/NousResearch/hermes-agent/issues/23944) proposes a generic OAuth broker to handle single-use rotating refresh tokens across multiple runtimes. This is a clear signal for enterprise multi-instance deployments.
- **Vertex AI GUI Support (P3):** Issue [#56687](https://github.com/NousResearch/hermes-agent/issues/56687) requests UI support for the GCP Vertex provider and Service Account JSON upload, which is currently only configurable via CLI.
- **Pricing Overrides (P3):** Issue [#9403](https://github.com/NousResearch/hermes-agent/issues/9403) calls for a user-facing custom pricing catalog and contract pricing override system, signaling a need for better cost management in enterprise use.

### 7. User Feedback Summary
User satisfaction is being impacted by **stability and configuration friction**:

- **Pain Points:**
    - **Session Registry Blindness:** Users interacting via Telegram ([#38270](https://github.com/NousResearch/hermes-agent/issues/38270)) feel the system is "deaf" to their active chats, as the desktop app does not reflect the live session until a restart.
    - **Command Confusion:** The lack of a `/queue cancel` command ([#32474](https://github.com/NousResearch/hermes-agent/issues/32474)) leads to accidental queueing of prompts with no way to abort them.
    - **Configuration Persistence:** The `--global` model switch failing to persist `base_url` and `api_mode` ([#25106](https://github.com/NousResearch/hermes-agent/issues/25106)) creates a frustrating cycle of re-configuration.
- **Satisfaction:** The community is highly engaged, with users actively reporting detailed bugs and upvoting strategic feature requests. The high volume of merged PRs (27) likely resolves several ongoing pain points, though the sheer volume of open bugs suggests stability is the primary concern of the community right now.

### 8. Backlog Watch
Several long-standing and high-importance items require maintainer attention:

- **LiteLLM Support (P2):** Issue [#8465](https://github.com/NousResearch/hermes-agent/issues/8465) (opened 2026-04-12) is a high-impact bug affecting a wide range of users leveraging custom model providers. Despite its age, it has seen a recent comment today but remains unassigned.
- **Stream Reconnection (P2):** Issue [#53773](https://github.com/NousResearch/hermes-agent/issues/53773) (closed today) details a critical bug where long-running `delegate_task` operations block the WebSocket event loop, causing disconnects. While closed, this is a strong indicator of a fundamental architectural constraint that may resurface.
- **Secrets Management Phase 4 (P3):** Issue [#3630](https://github.com/NousResearch/hermes-agent/issues/3630) (opened 2026-03-28) proposes adding advanced security features (ephemeral secrets, external vaults). This is a long-dormant feature request with no recent activity, suggesting it is deprioritized.
- **Generic OAuth Broker (P3):** Issue [#23944](https://github.com/NousResearch/hermes-agent/issues/23944) (opened 2026-05-11) is a relatively new but important architectural feature. A proposal exists, but it lacks maintainer response or assignment.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-03

## Today's Overview
PicoClaw shows **moderate activity** today with 25 PRs updated in the last 24 hours and 2 open issues. The project is in a **dependency refresh cycle** — 24 of the 25 updated PRs are Dependabot-driven version bumps for both Go backend and TypeScript frontend dependencies. Two critical bugs remain unresolved: a v2→v3 config migration failure (#3206) that blocks fresh installations, and a Matrix sync loop that silently dies after network disruption (#3203). No new releases were published today, though the high volume of merged dependency PRs suggests an upcoming release may be near.

---

## Releases
**No new releases today.** The latest stable release remains **v0.2.9** (git 2992...).

---

## Project Progress
### Merged/Closed PRs Today (14 total)
**Notable feature/security advances:**

- **#3063** (closed) — **DeltaChat gateway** added (new messaging protocol support)
- **#3160** (closed) — **Cross-site request forgery fix** for launcher auth setup
- **#3161** (closed) — **Security hardening** for `exec` deny-pattern enforcement (deny patterns now remain active even when custom allow rules match)
- **#3158** (closed) — **Windows path handling** regression tests for sandbox filesystem

**Key dependency upgrades (merged):**
- Copilot SDK bumped from v0.2.0 → v1.0.4 (#3177)
- Anthropic SDK bumped from v1.50.2 → v1.55.1 (#3209)
- `golang.org/x/crypto` bumped from v0.51.0 → v0.53.0 (#3210)
- Various frontend dependency bumps (eslint, react-i18next, shadcn, TypeScript ESLint, Vite React plugin)

---

## Community Hot Topics
*No issues or PRs have user comments today.* The two open issues are new (created 2026-07-02) and have not yet attracted discussion. The community engagement is currently low, likely because these issues were just filed.

**Most notable PRs by nature (not by comments):**
- [#3063 — DeltaChat Gateway](https://github.com/sipeed/picoclaw/pull/3063) (major feature addition, closed)
- [#3207 — Copilot SDK major bump from 0.2.0 to 1.0.5](https://github.com/sipeed/picoclaw/pull/3207) (breaking change candidate, still open)

---

## Bugs & Stability
### High Severity
1. **#3206 — v2→v3 config migration fails** on fresh installs with `unknown field(s): build_info, session.dm_scope`
   - **Status:** Open, 0 comments, no fix PR yet
   - **Impact:** Blocks new users from running *any* PicoClaw command
   - [GitHub](https://github.com/sipeed/picoclaw/issues/3206)

2. **#3203 — Matrix sync loop has no reconnection logic**
   - **Status:** Open, 0 comments, no fix PR yet
   - **Impact:** Silent failure after network/server disruption; systemd `Restart=on-failure` does not trigger since main process stays alive
   - [GitHub](https://github.com/sipeed/picoclaw/issues/3203)

### Moderate/Low Severity (fixed)
- **#3160** — Cross-site launcher setup requests (fixed)
- **#3161** — `exec` deny patterns bypassed by custom allow rules (fixed)
- **#3171** — LINE channel `sync.Map` type assertion potential panic (still open, fix PR exists)

---

## Feature Requests & Roadmap Signals
**Probable near-term additions (within next 1-2 releases):**
- **DeltaChat gateway** (#3063) — already merged, will be in next release
- **Updated Copilot SDK integration** — with Copilot SDK going from v0.2.0 → v1.0.5 (major version jump), expect breaking changes and new capabilities in the integration

**Frontend modernizations:**
- shadcn UI library bumped from 4.7.0 → 4.12.0
- Vite plugin updates (6.0.1 → 6.0.3) suggest active frontend development

---

## User Feedback Summary
*No direct user feedback was recorded in today's data.* The absence of comments on any issues or PRs suggests either:
- Users are not yet affected by the reported bugs (possibly low adoption of v0.2.9)
- Community discussion occurs outside GitHub (Matrix/ Discord)

The two critical bugs (#3206 and #3203) represent significant pain points if users are encountering them — config migration failure is a complete blocker, and silent Matrix disconnection is hard to diagnose without logs.

---

## Backlog Watch
### Issues/PRs Needing Maintainer Attention
1. **#3171 — LINE channel type assertion fixes** (stale since 2026-06-25, 8 days without review)
   - Fix for potential panic in `sync.Map` type assertions
   - [GitHub](https://github.com/sipeed/picoclaw/pull/3171)

2. **#3165 — OpenAI-compat Seed XML tool call recovery** (stale since 2026-06-24)
   - Volcengine Doubao Seed compatibility fix
   - [GitHub](https://github.com/sipeed/picoclaw/pull/3165)

3. **#3207 — Copilot SDK v0.2.0 → v1.0.5 major bump** (still open)
   - Needs careful review for breaking API changes
   - [GitHub](https://github.com/sipeed/picoclaw/pull/3207)

4. **#3208 — mautrix Go library v0.27.0 → v0.28.1** (still open)
   - May fix or relate to the Matrix reconnection bug (#3203)
   - [GitHub](https://github.com/sipeed/picoclaw/pull/3208)

---

**Project Health Score: ⚠️ Moderate concern** — Two critical bugs with no fix PRs, high dependency churn without corresponding release, and low community engagement on blocking issues. The fixed security issues (#3160, #3161) are encouraging signs of active maintenance focus on security hardening.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the NanoClaw project digest for July 3, 2026.

---

## NanoClaw Project Digest — 2026-07-03

### 1. Today's Overview
Activity remains high, with a strong focus on resolving critical integration bugs and advancing the agent templating system. Four new issues were filed, including two high-priority bugs concerning WhatsApp infrastructure, while the pull request queue grew to 14 items, with 2 being merged. The core team is actively reviewing a stack of fixes for the WhatsApp Cloud channel, which has been identified as having a collision with the native WhatsApp adapter. Overall, the project is in a robust state of development, with maintainers responsive to both regressions and new feature work.

### 2. Releases
**No new releases** were published in the last 24 hours.

### 3. Project Progress
Two pull requests were merged today, representing improvements to infrastructure and performance:
- **[PR #2890](https://github.com/nanocoai/nanoclaw/pull/2890) (Merged):** The first part of the agent templates feature was landed. This introduces a local template loader and the `ncl groups create --template` command, allowing users to stamp out agent groups from a template without needing to run the setup wizard.
- **[PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771) (Merged):** A performance improvement for containerized agents. This adds a configurable `--shm-size` (defaulting to 1g) and the `--init` flag to Docker run commands, significantly improving stability for agents running headless Chromium.

### 4. Community Hot Topics
The most active discussion centers on **WhatsApp channel infrastructure**, specifically the collision between the native Baileys path and the Business Cloud API:
- **[Issue #2911](https://github.com/nanocoai/nanoclaw/issues/2911) (High Priority):** Details how the WhatsApp Cloud bridge registers under the same key (`whatsapp`) as the native adapter, causing silent disabling and misrouting. This issue is directly addressed by **[PR #2913](https://github.com/nanocoai/nanoclaw/pull/2913)**, which registers the bridge under a distinct `whatsapp-cloud` key.
- **[Issue #2912](https://github.com/nanocoai/nanoclaw/issues/2912) (Medium Priority):** A downstream consequence of the registration collision, this reports that user IDs (JID vs. bare wa_id) diverge between the two paths, meaning roles and permissions do not carry over.

### 5. Bugs & Stability
Two significant bugs were reported today, both related to WhatsApp:
- **High: [Issue #2911](https://github.com/nanocoai/nanoclaw/issues/2911)** — Adapter registry collision between WhatsApp Cloud and native WhatsApp. **Fix PR exists:** [#2913](https://github.com/nanocoai/nanoclaw/pull/2913) is open for review.
- **Medium: [Issue #2912](https://github.com/nanocoai/nanoclaw/issues/2912)** — Divergent user IDs between WhatsApp paths prevent cross-path role/membership. This is a downstream effect of the registry collision and is likely resolved by the fix for #2911.

Additional stability work is happening via **[PR #2823](https://github.com/nanocoai/nanoclaw/pull/2823)**, which removes a `CLAUDE.md` file that the host system deletes on startup, preventing user confusion, and **[PR #2915](https://github.com/nanocoai/nanoclaw/pull/2915)**, which fixes a bug causing recurring tasks to fork into duplicate parallel executions.

### 6. Feature Requests & Roadmap Signals
The feature landscape is clearly trending toward **Operator Experience** and **Multi-Provider support**:
- **Agent Templates:** The landscape for new users is improving. With the merge of PR #2890, the next part of this feature—**[PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909)**—seeks to integrate template selection directly into the setup wizard.
- **Codex Provider Support:** **[PR #2908](https://github.com/nanocoai/nanoclaw/pull/2908)** is critical for making agent templates work with the Codex provider, implementing persona prepend and git-independent skill discovery. This suggests Codex is becoming a first-class provider.
- **Instance-Wide Defaults:** **[PR #2906](https://github.com/nanocoai/nanoclaw/pull/2906)** proposes a `DEFAULT_AGENT_PROVIDER` environment variable, allowing operators to set the LLM provider once for all new agent groups rather than per-group.

### 7. User Feedback Summary
- **Pain Point (WhatsApp):** Users configuring WhatsApp Cloud alongside native WhatsApp are experiencing silent failures and broken permissions (Issues #2911, #2912). This is a high-friction integration blocker.
- **Pain Point (Recurring Tasks):** A user experienced “fork bombs” where recurring tasks duplicated themselves, causing unexpected load and behavior (PR #2915).
- **Pain Point (Container Setup):** The merge of PR #2771 addresses prior silent failures and crashes from headless browsers running out of shared memory.
- **Satisfaction Feature:** The ongoing work on **Agent Templates** (PRs #2890, #2909) and a new **web-search-plus skill** (PR #2725) indicate strong community desire for creating and sharing reusable agent configurations.

### 8. Backlog Watch
Several older Fix PRs submitted by *CutSnake01* remain open without merge after nearly two weeks:
- **[PR #2823](https://github.com/nanocoai/nanoclaw/pull/2823) (Opened 2026-06-20):** Fix for the host deleting `CLAUDE.md` on startup.
- **[PR #2824](https://github.com/nanocoai/nanoclaw/pull/2824) (Opened 2026-06-20):** Removal of a stale "Global Memory" instruction from the main seed prompt.
- **[PR #2822](https://github.com/nanocoai/nanoclaw/pull/2822) (Opened 2026-06-20):** Refactor to remove a dead `/workspace/global` container mount.

These are straightforward housekeeping fixes that have not yet garnered maintainer review or approval.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-03

## 1. Today's Overview
IronClaw saw elevated activity with **23 issues updated** and **50 PRs updated** in the last 24 hours, indicating a high-velocity development cycle. The project is currently in a **stabilization and feature-completion phase** for the Reborn stack, with significant churn around OAuth integration, tool configuration, and QA bug remediation. **19 open issues** remain active, with a notable concentration of `bug_bash_P2` and `qa-bug` tickets from recent QA runs. Four bugs were closed today, including a critical Exa search throttling issue (#5571) that had cascaded across five test cases. No new releases were cut today, though a major release PR (#5311) continues to accumulate changes.

## 2. Releases
**No new releases today.** A pending release PR (#5311, open since June 26) has accumulated API-breaking changes across `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0), suggesting a larger release is imminent once QA blockers are resolved.

## 3. Project Progress
21 PRs were merged or closed today, advancing several key initiatives:

- **[CLOSED] Slack Personal OAuth Flow** (#5502, #5501): Sergeiest implemented a browser-based OAuth Connect flow for personal Slack tokens, replacing the manual `xoxp-` token paste workflow. A companion fix (#5501) ensures OAuth token exchange responses skip leak-sanitization, critical for credential exchange.
- **[CLOSED] Exa MCP SSE Parsing Fix** (#5573): Serrrfirat fixed the Exa-hosted MCP initialization to accept both raw JSON and SSE-wrapped JSON-RPC bodies, addressing the upstream IP throttling crash (#5571).
- **[CLOSED] Test Coverage Expansion**: Henrypark133 merged two PRs (#5547, #5548) adding Tier-2 coverage for skill lifecycle (C-SKILL), durable error handling (C-DURABLE, C-ERRORS), and turn-event sink/attachment read-port coverage (C-TRACECAP, C-ATTACH).
- **[CLOSED] Architecture Sprawl Checks** (#5559): BenKurrek added automated grep-able architecture smell checks to `scripts/pre-commit-safety.sh`, enforcing rules against unannotated `#[allow(clippy::too_many_arguments)]` and other patterns.

## 4. Community Hot Topics
The most active discussions revolved around **agent capability gaps** and **feature configurability**:

- **#5522** [OPEN] *"[QA] Reborn routine fails — no Slack read capability"* — 2 comments. This critical bug exposes a fundamental gap: the Reborn agent loop lacks a `read_slack_dms` capability, causing routines to fail and enter a `capability_info` retry loop. The underlying need is for a comprehensive capability inventory and graceful fallback behavior.
- **#5459** [OPEN] *"Configurable skills and tools"* — 2 comments. Authored by zetyquickly, this umbrella issue tracks admin/user installation of WASM tools, credential provisioning, and skill auto-activation. It's generating three parallel PRs (#5499, #5513, #5525) and represents the most significant feature expansion underway.
- **#5460** [OPEN] *"[QA] Memories visible to every user in workspace"* — 1 comment. A critical privacy/security issue where stored memories leak across workspace users. This is a fundamental data isolation problem in the WebUI workspace model.
- **#5537** [OPEN] *"Daily ironclaw failure taxonomy — 2026-07-02"* — 0 comments but high signal. This automated taxonomy tracked 65 non-passing PinchBench tests, identifying provider-400 invalidation patterns and step-cost regression as systemic issues.

## 5. Bugs & Stability

### Critical / P1
- **#5522** *(Open, QA-Bug)* — Reborn routine fails when task requires reading Slack DMs. No read capability exists, causing `status=Failed` with `capability_info` retry loop. **No fix PR yet.**
- **#5571** *(Closed, P1)* — `web-access.search` failed on Railway QA due to Exa upstream IP throttling (`invalid_output` aborted entire turn, cascading across 5 test cases). **Fixed by PR #5573** (SSE parsing fix to handle Exa responses).

### High / P2
- **#5504** *(Open)* — Routine creation hangs indefinitely without returning result or error.
- **#5552** *(Open)* — Run fails with generic "invalid result" after multiple tool failures — no tool-level error visibility in UI.
- **#5508** *(Open)* — Slack delivery target "not found" despite active Slack connection, requires reconnection.
- **#5551** *(Open)* — Automation posts intermediate progress messages to Slack instead of final result.
- **#5558** *(Open)* — Vision model hallucinates image contents and accepts false user corrections without re-analysis.
- **#5553** *(Open)* — Approval notifications disappear instead of remaining in notification history.
- **#5555** *(Open)* — Terminal floating button overlaps chat composer on desktop.

### Medium / P3
- **#5554** *(Open)* — Mobile chat layout breaks with horizontal overflow.
- **#5556** *(Open)* — Active chat remains highlighted in sidebar after navigation away.
- **#5557** *(Open)* — Logs deep link requires opening twice to load selected conversation.
- **#5509** *(Open)* — Chat creation latency scales with accumulated conversation history.

### Infrastructure / Seam Failures
- **#5572** *(Open)* — `HookedLoopCheckpointPort` fails to forward critical checkpoint payload methods, causing hooks-enabled coordinator turns to fail at Checkpoint stage.
- **#5527** *(Open)* — `FilesystemSessionThreadService` has write/read scope mismatch — idempotency writes use `owner` scope but reads use `system` scope, making early replay-before-policy dead in production.
- **#5530** *(Closed)* — Skill criteria-based auto-activation unreachable from TurnCoordinator path (dead code issue).

## 6. Feature Requests & Roadmap Signals

### Active Feature Development
The **Configurable Skills and Tools** initiative (#5459) is the dominant roadmap item, spanning three concurrent PRs:
- **#5499** (Open) — WASM tool install from ZIP + env-provisioned tenant-shared credentials
- **#5513** (Open) — Admin UI for tenant-shared tool credentials
- **#5525** (Open) — Private installs of tools for SSO users

These collectively address a major pain point: admins and users need granular control over which tools/skills are available and to whom.

### Upcoming Features
- **OAuth Auth-Relay** (#5570, Enhancement) — A stable OAuth callback relay for per-PR preview deployments, enabling Google SSO testing without fixed-URI registration. Likely to ship in the next release.
- **Onboarding/NUX Demo** (#5565) — Achalvs has submitted a 13-commit handoff-ready onboarding experience with intent-URL → sign-in → agentic-chat flow. Signals investment in user acquisition funnel.
- **Design System Tokens** (#5563) — A token-based design system for the WebUI, enabling AI-autonomous UI improvements. Indicates maturing frontend architecture.
- **Final-Answer Nudge** (#5568, Open) — Enables dormant final-answer steering for interactive and scheduled-trigger runs (off for subagents). A performance optimization to reduce step count.

### Predicted Next Version Contents
Based on the release PR (#5311) accumulating changes and the volume of P1/P2 fixes, the next release (likely v0.30.x) should include: Slack OAuth connectivity, Exa search fix, skill auto-activation fixes, and the private tool installation feature.

## 7. User Feedback Summary

### Expressed Pain Points (from QA/Issue Reports)
- **"Invisible tool failures"** (#5552): Runs fail with generic "invalid result" after multiple tool errors — no indication of which tool failed or why.
- **"Routine creation is unreliable"** (#5504, #5505): The agent creates routines that hang indefinitely or embed self-referential instructions.
- **"Slack integration is confusing"** (#5508): Users with active Slack connections get told to reconnect, breaking trust in the integration.
- **"Memory privacy leak"** (#5460): Stored memories visible to all workspace users — a clear security concern for collaborative environments.
- **"Vision model is gullible"** (#5558): Model hallucinates image contents and accepts false corrections, undermining reliability for visual tasks.
- **"Mobile experience broken"** (#5554): Horizontal overflow on mobile makes the app unusable on smaller screens.
- **"Cost/performance regression"** (#5537, #5574): Reborn is 1.4–6× more expensive than openclaw on data-analysis tasks, driven by higher step counts.

### Positive Signals
- The **Slack OAuth flow** (#5502, #5501) directly addresses a long-standing friction point (manual token paste → one-click Connect).
- The **design system investment** (#5563) and **NUX onboarding** (#5565) suggest the team is prioritizing user experience maturation.
- The **Trace Commons** PR (#5280) for instance-wide enrollment and per-user profiles indicates growing enterprise/sophisticated user needs.

## 8. Backlog Watch

### Long-Open Issues Needing Attention
- **#4108** *(Open, since May 27)* — Nightly E2E continuously failing. Last updated July 2 (bot comment), but no targeted fix PR. This has been failing for **37 days** — may indicate a chronic infrastructure or flakiness issue.
- **#5280** *(Open, since June 26)* — Trace Commons with DB migration — 7 days without merge, despite being tagged `DB MIGRATION` and touching 20+ package scopes. Large PR risk.

### Stale/Blocked PRs
- **#5311** *(Open, since June 26)* — Release PR blocked for 7 days, accumulating breaking changes. No maintainer activity.
- **#5084** *(Open, since June 18)* — Automations page redesign — 15 days old, from a new contributor (achalvs). Design leadership feedback being resolved.

### Critical Technical Debt
- **#5527** *(Open)* — FilesystemSessionThreadService write/read scope mismatch — described as "dead in production" by the reporter (henrypark133). This is an active data integrity bug that may corrupt idempotency replay for some users.
- **#5572** *(Open)* — HookedLoopCheckpointPort forwarding gap — any hook-enabled coordinator turn fails at checkpoint. For a hooks-based architecture (Reborn), this cripples a core extension mechanism.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for **2026-07-03**.

---

## LobsterAI Project Digest — 2026-07-03

### 1. Today's Overview
The project saw moderate activity on 2026-07-03, with a strong focus on bug fixes and documentation updates. While no new releases were published, the team merged **7 pull requests** (out of 8 total), indicating a productive cycle addressing both user-facing crashes and core infrastructure issues. The issue tracker remains quiet with **5 open, stale items**, all created in early April 2026, suggesting that maintainer bandwidth is currently directed toward code stability rather than triaging older reports. Overall project health is stable, with active engineering on renderer stability and DeepSeek integration.

### 2. Releases
**None.** No new versions were cut on this date.

### 3. Project Progress
The following **7 PRs were merged/closed** today, advancing several areas:

- **Feat(cowork): Unified startup experience** — PR [#2257](https://github.com/netease-youdao/LobsterAI/pull/2257) unifies the engine startup, renderer init, and window display into a single continuous splash screen, eliminating a perceived spinner handoff for users.
- **Chore: Optimize engine failure overlay** — PR [#2259](https://github.com/netease-youdao/LobsterAI/pull/2259) polishes the error overlay shown when the engine fails to load.
- **Fix(openclaw): DeepSeek prompt cache stability** — PR [#2258](https://github.com/netease-youdao/LobsterAI/pull/2258) disables aggregate tool-result rewriting on the live prompt path to keep history byte-stable for provider prefix caches, fixing long-session degradation.
- **Fix(renderer): Scheduled task "不通知" not taking effect** — PR [#2255](https://github.com/netease-youdao/LobsterAI/pull/2255) resolves a bug where switching a scheduled task's notification channel to "不通知" failed to stick due to a `patch-merge` limitation in the OpenClaw gateway.
- **Fix(renderer): White screen when deleting active custom model** — PR [#2252](https://github.com/netease-youdao/LobsterAI/pull/2252) fixes an async race condition that crashed the Settings view when a currently selected custom provider was deleted.
- **Chore: Update README and main page image** — PRs [#2253](https://github.com/netease-youdao/LobsterAI/pull/2253) and [#2254](https://github.com/netease-youdao/LobsterAI/pull/2254) updated project documentation.

One PR remains **open**:
- **Fix(#2256): Scheduled-task none-delivery & settings model-delete fix** — PR [#2256](https://github.com/netease-youdao/LobsterAI/pull/2256) combines two distinct fixes (notification channel persistence and white screen deletion). This is a pending consolidation of the two fixes that were merged separately.

### 4. Community Hot Topics
All current issues are stale (last updated in April 2026), with no new community discussion on this date. The most active items by comment count are:

- **#1354** [Open] [Stale] "Lobster crashes to blue screen after launching Pageant" — 2 comments, 0 reactions. [Link](https://github.com/netease-youdao/LobsterAI/issues/1354)
- **#1357** [Open] [Stale] "Pageant launch reports success but does not start" — 1 comment, 0 reactions. [Link](https://github.com/netease-youdao/LobsterAI/issues/1357)
- **#1358** [Open] [Stale] "Scheduled task click shows no interaction feedback" — 1 comment, 0 reactions. [Link](https://github.com/netease-youdao/LobsterAI/issues/1358)
- **#1359** [Open] [Stale] "Deleted tasks reappear after restart" — 1 comment, 0 reactions. [Link](https://github.com/netease-youdao/LobsterAI/issues/1359)
- **#1360** [Open] [Stale] "No duplicate name validation for custom agents" — 1 comment, 0 reactions. [Link](https://github.com/netease-youdao/LobsterAI/issues/1360)

**Analysis:** These issues center on three core pain points: **reliability of system actions** (Pageant launch), **task lifecycle management** (deletion persistence, UI feedback), and **input validation** (duplicate agent names). The lack of new comments suggests users may have found workarounds or are awaiting a bundled fix release.

### 5. Bugs & Stability
No new bugs were filed today. However, the **two merged fixes** directly address two critical stability issues:

| Severity | Bug | Fix PR | Status |
|----------|-----|--------|--------|
| **High** | White screen crash when deleting the active custom model in Settings | [#2252](https://github.com/netease-youdao/LobsterAI/pull/2252) | Merged |
| **Medium** | Scheduled task "不通知" notification channel not persisting after save | [#2255](https://github.com/netease-youdao/LobsterAI/pull/2255) | Merged |

No new regressions or crashes were reported.

### 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed today. Roadmap signals are derived from merged work:

- **Unified startup screen** (PR #2257) signals a UX polish push for the cowork/agent onboarding flow.
- **DeepSeek prompt cache stability** (PR #2258) indicates continued investment in long-session reliability for LLM providers, likely targeting power users with extended cowork sessions.
- **Scheduled task UI fix** (PR #2255) suggests that the task scheduling feature is being hardened for production use.

**Prediction:** The next minor release will likely bundle the startup splash, the two renderer crash fixes, and the scheduled task UI fix. DeepSeek cache improvements may be gated behind configuration or a follow-up release.

### 7. User Feedback Summary
Today's feedback is silent, but the **5 stale issues** represent persistent user dissatisfaction:

- **"Lobster causes my computer to blue screen when launching Pageant"** — A severe reliability concern (Issue #1354).
- **"Pageant says 'already running' but never starts"** — A false success response erodes trust in agent confirmation (Issue #1357).
- **"Deleted tasks reappear after restart"** — Task lifecycle data is not persisted correctly, causing data integrity confusion (Issue #1359).
- **"Scheduled task click gives no feedback"** — Users are unsure if an action was registered, indicating a UI/UX gap (Issue #1358).
- **"Duplicate agent names allowed"** — A data quality issue that could cause confusion in the agent management UI (Issue #1360).

**Overall sentiment:** Users are encountering reliability and data persistence issues in automation and task management features. The UI fixes merged today (notably #2255 and #2252) directly address two of these pain points.

### 8. Backlog Watch
All **5 open issues** remain untouched by maintainers for over 3 months (last updated 2026-07-02, created 2026-04-02). These are **stale** and require triage:

| Issue | Summary | Age (months) | Priority |
|-------|---------|--------------|----------|
| [#1354](https://github.com/netease-youdao/LobsterAI/issues/1354) | Blue screen on Pageant launch | ~3 | High (crash) |
| [#1357](https://github.com/netease-youdao/LobsterAI/issues/1357) | Pageant launch reports success but fails | ~3 | High (logic error) |
| [#1358](https://github.com/netease-youdao/LobsterAI/issues/1358) | No UI feedback on scheduled task click | ~3 | Medium (UX) |
| [#1359](https://github.com/netease-youdao/LobsterAI/issues/1359) | Deleted tasks reappear on restart | ~3 | Medium (data integrity) |
| [#1360](https://github.com/netease-youdao/LobsterAI/issues/1360) | No duplicate name validation for agents | ~3 | Low (data quality) |

**Recommendation:** The two Pageant-related issues (#1354, #1357) should be prioritized for investigation, as they involve system-level crashes and false-positive responses, which are high-impact for user trust. The remaining issues are quality-of-life improvements that could be bundled into a minor release milestone.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-03

## Today's Overview
The Moltis project shows moderate development activity today, with 3 pull requests updated in the last 24 hours and no new issues or releases. The team is actively working on WhatsApp integration improvements, particularly around the LID (Login ID) addressing migration that WhatsApp is enforcing. One PR was successfully merged/closed, indicating forward progress on a critical bug fix. No new issues were filed, suggesting the project is in a stable maintenance and enhancement phase rather than a crisis-response mode. Overall, project health appears solid with focused engineering effort on core messaging reliability and provider extensibility.

## Releases
No new releases were published today. The last release predates the current observation window.

## Project Progress
One pull request was merged/closed today:
- **[PR #1116 (CLOSED)](https://github.com/moltis-org/moltis/pull/1116) — fix(whatsapp): deliver replies to @lid chats via PN JID rewrite** — This fix addresses a silent message delivery failure where replies to privacy-enabled senders with @lid chats were being dropped on WhatsApp. The gateway would successfully process the reply (visible in web UI) and call the outbound sender, but the message never reached the user and no Delivered receipt was received. The fix involves rewriting the JID for push notifications, ensuring delivery completes. This resolves a high-impact WhatsApp delivery bug that was open since June 12.

Two PRs remain open and under active development:
- **[PR #1144 (OPEN)](https://github.com/moltis-org/moltis/pull/1144) — feat(whatsapp): bump whatsapp-rust 0.5 → 0.6 with LID-native addressing** — Upgrades the critical `whatsapp-rust` dependency to version 0.6, which introduces native LID (Login ID) addressing. This is necessary because version 0.5 predates LID addressing, causing inbound messages from privacy-migrated peers to fail resolution. The PR pins to a specific merge commit that includes a DM LID-migration gate.

- **[PR #1143 (OPEN)](https://github.com/moltis-org/moltis/pull/1143) — Add Requesty as an OpenAI-compatible provider** — Adds support for Requesty (router.requesty.ai), an OpenAI-compatible LLM router, following the existing OpenRouter integration pattern. This expands the set of supported LLM backends available to Moltis agents.

## Community Hot Topics
No issues exist in the observed window. Among the open PRs, both received no comments or reactions today, suggesting the community has not yet engaged with these changes at scale. The most significant in terms of technical weight is **PR #1144** (whatsapp-rust LID migration), which touches a fundamental messaging infrastructure component and could generate discussion once more community members test it.

## Bugs & Stability
No new bugs were reported today. The most significant recent bug was resolved by **[PR #1116](https://github.com/moltis-org/moltis/pull/1116)** (merged today), which fixed a **critical-severity** silent delivery failure for @lid chat replies. This bug had the following impact:
- **Severity: Critical** — Messages were silently dropped with no error visible to users
- **Symptoms**: Reply visible in web UI but never delivered to WhatsApp user; no Delivered receipt
- **Root cause**: JID not being properly rewritten for push notification delivery in privacy-enabled chats
- **Status**: ✅ Fixed in today's merge

No other stability issues, crashes, or regressions were reported.

## Feature Requests & Roadmap Signals
The two open PRs signal clear roadmap directions:

1. **WhatsApp LID Migration Support** ([PR #1144](https://github.com/moltis-org/moltis/pull/1144)) — This is likely the highest priority item. WhatsApp is actively migrating devices to LID-based addressing, and without this upgrade, inbound messages from migrated peers fail. Expect this in the next release as a critical compatibility update.

2. **Expanded LLM Provider Support** ([PR #1143](https://github.com/moltis-org/moltis/pull/1143)) — Adding Requesty follows the pattern of making Moltis provider-agnostic. This suggests a roadmap goal of supporting multiple routing/API providers beyond the current set, likely to reduce vendor lock-in and offer cost optimization through routing.

No community feature requests were filed as new issues today.

## User Feedback Summary
No direct user feedback, comments, or reactions were captured in the data for today's window. However, the existence and resolution of PR #1116 (silent message drop) implies user pain around unreliable WhatsApp delivery. The active work on LID migration (PR #1144) suggests that users with privacy-enabled WhatsApp contacts were experiencing service degradation. The Requesty integration (PR #1143) indicates user demand for more flexible and cost-effective LLM routing options.

## Backlog Watch
No issues exist in the backlog. Among open PRs:
- **[PR #1144](https://github.com/moltis-org/moltis/pull/1144)** (opened July 2) — Requires maintainer review and merge, as this is a time-sensitive dependency bump for WhatsApp LID support.
- **[PR #1143](https://github.com/moltis-org/moltis/pull/1143)** (opened July 2) — Also needs review; as a straightforward provider addition following an established pattern, it should be low-risk for fast-tracking.

No long-unanswered items were identified. The project's issue and PR hygiene appears strong with active triage.

---

**Project Health Summary**: Moltis is in a stable, actively-maintained state with focused work on WhatsApp protocol compliance (LID migration) and ecosystem expansion (Requesty provider). The silent delivery bug fix demonstrates responsive maintenance. The zero-issue count indicates users are not encountering blocking problems at scale, and the team is keeping pace with upstream changes.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest
**Date:** 2026-07-03

---

## Today's Overview
CoPaw (QwenPaw) is in an active development sprint, with **23 issues** and **50 PRs** updated in the last 24 hours, signaling a high-velocity engineering cadence. The project released **v2.0.0-beta.2** (tag: `v2.0.0-beta.2`) on July 2, marking the second beta for the forthcoming 2.0 major release, alongside ongoing stabilization work on the v1.1.x stable line. The community is highly engaged: 9 issues were closed, 27 PRs were merged/closed, and several first-time contributors submitted patches. Overall health is **good but under pressure** — activity is driven by both the v2.0 beta launch and a steady stream of production bugs from the v1.1.x user base.

---

## Releases

### v2.0.0-beta.2 — Released 2026-07-02
[Release Page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0-beta.2)

| Detail | Value |
|--------|-------|
| **Version** | `v2.0.0-beta.2` |
| **Status** | Beta — not recommended for production |
| **Notable change** | `feat(cli): add cron up` (partial changelog published) |

⚠️ **Breaking Change Warning:** This is an early beta for QwenPaw 2.0.0; it may contain breaking changes and instability. Intended for developers and early adopters only.

📄 **Migration Notes:** No formal migration guide published yet.

**Key signals:**
- Release duty verification issue ([#5733](https://github.com/agentscope-ai/QwenPaw/issues/5733)) shows automated installation verification is being conducted across platforms (deadline: 2026-07-02 13:02 UTC).
- Previous beta.1 release ([#5571](https://github.com/agentscope-ai/QwenPaw/issues/5571)) was already closed — this is a rapid iteration.

---

## Project Progress

### Merged/Closed PRs (27 total for the day): Highlights

| PR | Title | Description & Impact |
|----|-------|----------------------|
| [#5287](https://github.com/agentscope-ai/QwenPaw/pull/5287) | fix(context): don't crash compaction when summary exceeds schema maxLength | 🛠️ First-time contributor fix; prevents auto-compaction crashes when model output exceeds schema length caps. |
| [#5533](https://github.com/agentscope-ai/QwenPaw/pull/5533) | Avoid treating content safety image errors as media capability failures | 🔍 Prevents MiniMax content-safety errors (e.g., `new_sensitive`/`(1026)`) from being misclassified as media rejection, protecting vision capability learning. |
| [#5620](https://github.com/agentscope-ai/QwenPaw/pull/5620) | refactor(agents-page): improve table readability | 🎨 UI/UX: optimized column widths, row heights, description display in Settings → Agents page. |
| [#5738](https://github.com/agentscope-ai/QwenPaw/pull/5738) | feat(auth): enhance rate limiting with multi-dimensional protection | 🔐 Account-level + IP-level rate limiting with brute-force protection (failure limits + frequency + dictionary attack guard). |
| [#5743](https://github.com/agentscope-ai/QwenPaw/pull/5743) | fix(ci): guard empty extra_flags expansion for bash 3.2 on macOS | 🧪 CI fix for macOS build failures due to unbound variable in bash 3.2. |

**Key advances:**
- **Security hardening:** Rate limiting (IP + account) merged; dialog token redaction is in open PRs.
- **Memory stability:** Context compaction crash fix merged.
- **Vision reliability:** Content-safety misclassification fixed.

---

## Community Hot Topics

### Most Active Issues by Comments (last 24h)

| Issue | Title | Comments | Analysis |
|-------|-------|----------|----------|
| [#5630](https://github.com/agentscope-ai/QwenPaw/issues/5630) | Support custom BaseURL for Telegram channel | 8 (CLOSED) | Strong need from users in restricted-network regions (China, corporate firewalls). Now closed — feature likely implemented. |
| [#5403](https://github.com/agentscope-ai/QwenPaw/issues/5403) | Browser autofill hijacks search input in Model Configuration | 7 (CLOSED) | UX bug affecting model selection flow; autofill behavior was interfering with provider search. |
| [#5705](https://github.com/agentscope-ai/QwenPaw/issues/5705) | Secret key sanitization & secure storage | 6 (OPEN) | Top security concern — encompasses environment variable fallback gaps and log leakage. |
| [#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725) | Console streaming causes browser lag | 3 (OPEN) | Performance complaint: streaming output causes Chrome stutter until completion (v1.1.12.post2). |
| [#5273](https://github.com/agentscope-ai/QwenPaw/issues/5273) | v2.0.0 Pre-release Bug Tracker | 4 (OPEN) | Central tracking hub for v2.0 beta bugs. |

**Community trends:**
- 🌐 **Geographic constraints:** Custom Telegram BaseURL (China/restricted network) — resolved.
- 🔒 **Security awareness:** Users are proactively requesting key management improvements.
- 🐌 **Performance sensitivity:** Streaming lag in browser is a recurring complaint.

---

## Bugs & Stability

### Critical Bugs Reported in Last 24h

| Severity | Issue | Title | Status | Fix PR? |
|----------|-------|-------|--------|---------|
| 🔴 **Critical** | [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) | **Memory leak** (v1.1.12.post2, Windows 10) — 150MB→580MB in 64 mins | OPEN | No |
| 🔴 **Critical** | [#5746](https://github.com/agentscope-ai/QwenPaw/issues/5746) | **Context compression collapses active turn** (v2.0.0b2 scroll) → model replies to old messages | OPEN | ✅ [#5747](https://github.com/agentscope-ai/QwenPaw/pull/5747) |
| 🟠 **High** | [#5748](https://github.com/agentscope-ai/QwenPaw/issues/5748) | **Agent hangs indefinitely** when tool call fails; typing indicator spins forever | OPEN | ✅ [#5749](https://github.com/agentscope-ai/QwenPaw/pull/5749) |
| 🟠 **High** | [#5717](https://github.com/agentscope-ai/QwenPaw/issues/5717) | **Malformed tool-call history** causes endless repeated tool execution (Runtime 2.0) | OPEN | No |
| 🟡 **Medium** | [#5721](https://github.com/agentscope-ai/QwenPaw/issues/5721) | Feishu shared sessions lose per-message sender identity | OPEN | No |
| 🟡 **Medium** | [#5708](https://github.com/agentscope-ai/QwenPaw/issues/5708) | Feishu interactive card messages not parsed | OPEN | No |
| 🟡 **Medium** | [#5709](https://github.com/agentscope-ai/QwenPaw/issues/5709) | Feishu bot messages hard-dropped (`is_bot` misinterception) | CLOSED | Likely fixed |
| 🟢 **Low** | [#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725) | Console streaming browser lag | OPEN | No |

### Critical Regression: ChromaDB Index Bloat
- [#4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) (CLOSED): Vector index grew to **37GB** over 3 months of normal use, causing `memory_search` crashes. Root cause: ChromaDB `link_lists` accumulated. Deletion of `file_store/` resolved it. This is a **long-term structural issue** that may resurface.

### Fix PRs Worth Noting
- [#5747](https://github.com/agentscope-ai/QwenPaw/pull/5747): "Protect active turn from scroll context eviction" — addresses the critical v2.0 beta bug.
- [#5749](https://github.com/agentscope-ai/QwenPaw/pull/5749): "Add consumer timeout and typing auto-stop" — fixes agent hang on tool failure.

---

## Feature Requests & Roadmap Signals

### Recently Opened Feature Requests

| Issue | Title | Votes | Likelihood for Next Release |
|-------|-------|-------|----------------------------|
| [#5718](https://github.com/agentscope-ai/QwenPaw/issues/5718) | **Auto-switch model** on quota/error | 👍 0 | **High** — complimentary to [#5597](https://github.com/agentscope-ai/QwenPaw/pull/5597) (model fallback PR in review) |
| [#5737](https://github.com/agentscope-ai/QwenPaw/issues/5737) | **Enhance CLI** for non-GUI operation | 👍 0 | **Medium** — aligns with batch/automation use cases |
| [#5712](https://github.com/agentscope-ai/QwenPaw/issues/5712) | **Select text in chat** + auto-copy | 👍 0 | **Low** — UX polish; [#5739](https://github.com/agentscope-ai/QwenPaw/pull/5739) is a draft PR |
| [#5705](https://github.com/agentscope-ai/QwenPaw/issues/5705) | **Secret key sanitization** (env var + log redaction) | 👍 0 | **Very High** — two PRs submitted ([#5740](https://github.com/agentscope-ai/QwenPaw/pull/5740), [#5741](https://github.com/agentscope-ai/QwenPaw/pull/5741)) |

### Prediction: v2.0.0-beta.3 Contents
1. **Model fallback** — [#5597](https://github.com/agentscope-ai/QwenPaw/pull/5597) is likely to merge soon.
2. **Secret security** — Environment variable config references (`${ENV_VAR}`) and dialog log redaction (multiple PRs).
3. **Context compression fix** — [#5747](https://github.com/agentscope-ai/QwenPaw/pull/5747) to prevent active-turn eviction.
4. **Agent hang protection** — [#5749](https://github.com/agentscope-ai/QwenPaw/pull/5749).
5. **Vision fallback** — [#5726](https://github.com/agentscope-ai/QwenPaw/pull/5726) for text-only models.

---

## User Feedback Summary

### Positive Signals
- ✅ **Telegram Custom BaseURL** closed — demonstrating responsiveness to geographically constrained users.
- ✅ **Rate limiting** merged (v1.1.x) — security improvements shipping.
- ✅ **First-time contributors** are active: 5+ merge-ready PRs from new contributors in 24h.

### Pain Points (Unresolved)
| Pain Point | User Voice | Severity |
|------------|------------|----------|
| **Memory leak** on Windows | "进程运行大约64分钟后，内存从正常的150MB持续涨到580MB" | 🔴 High |
| **Streaming performance** in browser | "DeepSeek 网页版流式输出不会卡顿" | 🟠 Medium |
| **Cannot select text** in chat | "clicking a message triggers a handler and prevents text selection" | 🟢 Low |
| **Tool approval bypass** | "关闭所有工具审批后，还是总弹出审批窗口" | 🟡 Medium (sandbox unavailable) |
| **Feishu card message** not parsed | "卡片消息的 content 字段无法解析成可读文本" | 🟡 Medium |

### Dissatisfaction Signals
- **v2.0 beta users** are encountering real regressions (context compression errors, malformed tool-calls) — the beta is still rough.
- **Sandbox detection** on restricted containers causes false-positive tool approval prompts (#5703).
- **No progress on auto model switching** despite user request (#5718) — likely the most-requested feature for production reliability.

---

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Title | Age | Comments | Why Important |
|-------|-------|-----|----------|---------------|
| [#4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) | Vector index grows to 37GB (ChromaDB) | ~35 days | CLOSED, but ChromaDB root cause unresolved | A permanent fix for `link_lists` accumulation in ChromaDB is needed — this will recur. |
| [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) | Memory leak (v1.1.12.post2, Windows) | 1 day | OPEN | Detailed root cause analysis provided (async task leak + HTTP session leak). No PR yet. |
| [#5273](https://github.com/agentscope-ai/QwenPaw/issues/5273) | v2.0.0 Pre-release Bug Tracker | 16 days | OPEN | Central tracking — low activity; many v2.0 bugs are being filed separately. |

### Open PRs Needing Review

| PR | Title | Age | Notes |
|----|-------|-----|-------|
| [#5597](https://github.com/agentscope-ai/QwenPaw/pull/5597) | Model fallback with safe retry boundaries | 4 days | High impact; waiting for review |
| [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) | Add reranker for memory search (reme0.4) | 2 days | Memory improvement; marked "Under Review" |
| [#5734](https://github.com/agentscope-ai/QwenPaw/pull/5734) | Switch desktop release to Tauri | 1 day | Strategic shift — replaces legacy conda-pack |

### Security Items
- [#5745](https://github.com/agentscope-ai/QwenPaw/pull/5745) (redact secrets in dialog artifacts) and [#5740](https://github.com/agentscope-ai/QwenPaw/pull/5740) (env var references in config) are **first-time contributor PRs** targeting the same issue (#5705). Need review coordination.

---

*Generated from GitHub data for CoPaw (agentscope-ai/QwenPaw) on 2026-07-03. All links are to `github.com/agentscope-ai/QwenPaw`.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-03

## Today's Overview

ZeroClaw shows **elevated development activity** with 37 issues and 50 PRs updated in the last 24 hours. The project has a strong merge cadence (19 merged/closed PRs today) and is processing critical stability and feature work in parallel. Community momentum remains high, with 33 open issues receiving continued discussion. No new releases were cut today; the project appears focused on landing the v0.8.3 observability/CI/deps tracker (#8073) and the v0.9.0 auth/security tracker (#7432) before the next stable cut. The **most critical signal** is a **S1 workflow-blocked MCP tool visibility bug** (#8193) that continues to affect TUI sessions — this has drawn 14 comments and remains unresolved.

## Releases

**No new releases** were published today. The latest stable versions remain the previous release train. The project's release pipeline appears paused while high-priority fixes and architectural RFCs (especially around MCP, auth middleware, and Windows compatibility) land on `master`.

## Project Progress

**19 PRs were merged or closed today**, advancing several critical areas:

- **MCP Tooling**: #8305 (CLOSED) fixed the web dashboard MCP tools invisibility bug — MCP servers now surface discovered tools in the `/api/tools` response.
- **Security & Auditing**: #8547 (OPEN) removes the `rag-pdf` feature to clear RUSTSEC-2026-0192 (`ttf-parser` vuln). #8543 (OPEN) adds audit-policy governance docs and drops cleared RUSTSEC ignores.
- **Memory Architecture**: #8570 (OPEN, size XL) adds a durable memory store seam with supersede, dedup, and budget enforcement — a foundational piece for persistent memory.
- **Channel Expansion**: #8609, #8611, #8618 (stacked PRs, OPEN) introduce a new Git forge channel (GitHub + Gitea/Forgejo providers) with SOP ingress, replacing a monolithic 6.4k-line PR with reviewable slices.
- **Build Fixes**: #8604 (OPEN) statically links MSVC CRT on Windows to fix missing runtime DLL errors.
- **Skills Engine**: #8335 (OPEN) makes `skills install/list/remove` bundle-aware, fixing the multi-agent data_dir target mismatch. #8616 (OPEN) restores the `always: true` frontmatter flag for compact prompt mode.

## Community Hot Topics

- **#8193 — MCP tools missing from TUI sessions** (14 comments, 0 👍)  
  [zeroclaw-labs/zeroclaw Issue #8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)  
  Two users report that MCP servers connect and expose tools to the gateway, but Zerocode TUI sessions never receive them. This is an **S1 workflow-blocked** severity with no fix PR yet. The community is actively debugging the runtime vs. TUI synchronization gap.

- **#6808 — RFC: Work Lanes, Board Automation, Label Cleanup** (13 comments, 0 👍)  
  [zeroclaw-labs/zeroclaw Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)  
  A governance RFC in rollout since May. The community is engaging on label taxonomy and board automation rules to reduce maintainer overhead.

- **#7462 — 74 test failures on Windows** (7 comments, 0 👍)  
  [zeroclaw-labs/zeroclaw Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)  
  Windows CI gap remains unaddressed. Community members are asking whether the new MSVC CRT static linking (#8604) will help.

- **#5542 — Consecutive OOM in WSL2** (6 comments, 0 👍)  
  [zeroclaw-labs/zeroclaw Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)  
  **S0 severity** — memory killer kills the daemon. Still lacks a reproducer (`r:needs-repro`). This is the highest-severity open bug.

## Bugs & Stability

| Bug | Severity | Status | Fix PR? |
|---|---|---|---|
| **#8631** — Headless SOP engine records steps Completed without executing | S2 (false-green audit trail) | OPEN, reported today | None yet |
| **#8632** — Source install with `embedded-web` fails before generated API client exists | S1 (workflow blocked) | OPEN, reported today | None yet |
| **#8627** — WhatsApp Web device linking broken by new passkey gate | S1 (workflow blocked) | OPEN, reported today | None yet |
| **#8615** — Compatible provider silently deletes content via unconditional `<think>` tag stripping | S2 (invisible data loss) | OPEN, reported today | None yet |
| **#8334** — `skills install/list/remove` targets wrong data_dir for multi-agent | S2 (broken headline flow) | OPEN, accepted | ✅ #8335 |
| **#8193** — MCP tools missing from TUI (gateway sees them, TUI doesn't) | S1 (workflow blocked) | OPEN, accepted | None yet |
| **#8302** — Configured MCP server tools not shown in web tools list | S2 | OPEN, in-progress | ✅ #8305 (merged) |
| **#5542** — Consecutive OOM in WSL2 | S0 (data loss) | OPEN, needs-repro | None |

**New bugs today (2026-07-02/03):** 6 new bugs filed, of which 3 are S1 or S0 severity. The WhatsApp Web breakage (#8627) and the embedded-web build failure (#8632) are particularly urgent for new users.

## Feature Requests & Roadmap Signals

**High-interest new features filed today:**

- **#8603 — RFC: OpenAI Chat Completions compatibility adapter** — 1 comment, filed by REL-mame. Proposes exposing agent capabilities via OpenAI-compatible REST endpoint for Open WebUI/LobeChat compatibility. Related to #8550 which is blocked.
- **#8600 — Easy per-chat model switching for multi-model providers** — User migrating from moltis wants to switch models within a provider (e.g., OpenRouter) without per-model config entries.
- **#8602 — Enhance `file_read` with line cap, charset detection, paged PDF, notebook awareness** — Battle-tested patterns from Claude Code's `Read` tool.
- **#8626 — zerocode should receive full RPC spec from daemon and validate against it** — Remove hand-typed constant shadowing in wire layer.

**Likely for next version (v0.8.3 or v0.9.0):** OTel content policy (#8567) is close to merge. Memory durable store (#8570) is a large PR with high risk — likely targets v0.9.0. The OpenAI-compatible endpoint RFC (#8603) could shape the v0.9.0 release if accepted.

## User Feedback Summary

- **Pain Points:**
  - MCP tool visibility gap between gateway and TUI is the #1 blocker for users running MCP-based agents (#8193, #8302).
  - Windows users face 74+ test failures and missing MSVC CRT on clean installs (#7462, addressed by #8604).
  - New WhatsApp Web channel is now completely broken due to Meta's passkey requirement (#8627).
  - Users migrating from moltis miss easy per-chat model switching without deep config changes (#8600).
  - Skill installation flow is broken for multi-agent setups — skills go to `/data/skills/` but agents read from bundles (#8334, fix landing in #8335).

- **Satisfaction Signals:**
  - Community is actively contributing PRs for MCP fixes, Windows builds, and new channels.
  - The Git forge channel (GitHub + Gitea) with SOP ingress is a highly anticipated feature, now split into reviewable PRs.
  - Memory architecture improvements (#8570) are welcomed as a foundation for persistent memory.

## Backlog Watch

| Item | Age | Status | Why It Matters |
|---|---|---|---|
| **#5542 — Consecutive OOM in WSL2** | 85 days (since Apr 9) | OPEN, `r:needs-repro` | **S0 severity** — daemon killed by kernel OOM killer. Stalled due to no reproducer. |
| **#6250 — Extract `require_auth` to route-layer middleware** | 62 days (since May 1) | OPEN, `status:accepted`, `no-stale` | Security hardening for v0.9.0; multiple `/api/config` and `/api/onboard` endpoints have ad-hoc auth. |
| **#6302 — Gemini 400 on first non-system turn** | 60 days (since May 3) | OPEN, `status:accepted` | Blocks users from using Gemini models. History serializer invariant violation. |
| **#7462 — 74 Windows test failures** | 23 days (since Jun 10) | OPEN, `status:accepted` | Windows CI gap means every Windows build is untested. No maintainer action visible. |
| **#7952 — Full-channel prebuilt assets alongside default** | 14 days (since Jun 19) | OPEN, `status:blocked`, `needs-maintainer-review` | Users configuring non-default channels hit errors; maintainer review needed to unblock. |
| **#8226 — Per-agent custom environment variables** | 10 days (since Jun 23) | OPEN, `status:blocked`, `type:rfc` | RFC for multi-tenancy across shared MCP instances; no maintainer decision yet. |
| **#8550 — OpenAI-compatible chat completions endpoint** | 3 days (since Jun 30) | OPEN, `status:blocked`, `type:rfc` | Duplicates #8603; needs dedup and maintainer direction. |

**Notable stalled item:** #5542 (OOM in WSL2, S0) is the longest-unresolved critical bug. The community cannot reproduce reliably, and no diagnostic instrumentation has been proposed. This is the project's biggest risk to production users on WSL2.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*