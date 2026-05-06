# OpenClaw Ecosystem Digest 2026-05-01

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-01 01:49 UTC

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

Here is the OpenClaw project digest for 2026-05-01.

---

## OpenClaw Project Digest — 2026-05-01

### 1. Today's Overview
Project activity remains extremely high, with 500 issues and 500 PRs updated in the last 24 hours. The community is actively testing a wave of five new releases (v2026.4.29 stable and four betas). While the core team is pushing forward with significant messaging and memory improvements, the project is experiencing notable stability friction: a high volume of regression bugs related to CPU-bound event loops, plugin loading failures, and gateway startup hangs are being reported against the v2026.4.26 lineage. The "ClawSweeper" bot and several maintainers are actively closing bugs, with 16 issues and 20 PRs resolved in the last day.

### 2. Releases
Five new versions were released today, led by **v2026.4.29 (stable)** and four beta iterations (beta.1 through beta.4).

**Key Changes:**
- **Messaging & Automation:** Active-run steering is now enabled by default. This includes visible-reply enforcement, spawned subagent routing metadata, and opt-in follow-up commitments for heartbeat-delivered reminders.
- **Memory:** The "Memory grows i" (likely "incrementally") feature is being stabilized, indicating work on a more efficient, segmented memory architecture.

**Breaking Changes & Migration Notes:** No explicit breaking changes were documented in the release highlights. However, given the high volume of regressions reported against the v2026.4.26 line (which is the base for these releases), users upgrading from v2026.4.22 or earlier should monitor for gateway CPU spikes, plugin loading issues, and Discord/Slack reply duplication.

### 3. Project Progress
20 PRs were merged or closed today. Key advances include:
- **Harden Discord Rate Limits (PR #75338):** fix(discord) merges a comprehensive rate-limit retry strategy, handling 429s with route buckets and consistent header parsing. *(Merged)*
- **Exec Safe Bin Optimization (PR #66890):** Replaces a complex prefix map with a simple `startsWith` for long-option abbreviation resolution. *(Closed)*
- **MCP Tools Fix (Issue #74844 -> fix):** The bug causing MCP server tools (Gmail, Outlook) to be missing from the agent’s request body was resolved, correctly exposing them to the model.
- **Codex Commitments (PR #75347):** A fix for the commitments extractor ensures the correct configured model (e.g., `openai-codex/gpt-5.5`) is used instead of a default. *(Open, targeted for automerge)*
- **Plugin Runtime Deps (PR #75183):** A large refactor to simplify bundled runtime dependency repair, aiming reduce gateway startup blocks. *(Open)*

### 4. Community Hot Topics
The community is highly engaged, with several deep, long-running discussions and high-priority bugs dominating the conversation.

- **Gateway CPU Lockup (Issue #74328, 7 comments, 3 👍):** A major regression. The gateway main thread pegs at ~100% CPU due to an `fs.stat` storm in the microtask queue. This is a critical performance blocker for many users on macOS and Windows.
- **Plugin Blocking Startup (Issue #74209, 5 comments, 2 👍):** Users report that default bundled plugins, especially `bonjour`, can completely block the gateway from starting after a version upgrade.
- **Active Memory Timeouts (Issue #73306, 11 comments, 2 👍):** A persistent, multi-release issue where the Active Memory plugin consistently times out after 15 seconds, degrading agent performance.
- **A2A Duplicate Messages (Issue #39476, 8 comments):** A design-level discussion about a protocol flaw where Agent-to-Agent message passing can produce duplicate responses in the user's channel.
- **Control UI Duplicate Replies (Issue #71992, 6 comments):** A frustrating UX bug where every AI reply appears twice in the web chat interface.
- **"Blind Spot" Vision Failures (Issue #51857, 8 comments):** A deep investigative issue (*Driftnet*) tracking silent failures in image and media processing where the agent reports success but operates on empty/no data.

### 5. Bugs & Stability
The project is dealing with a significant stability regression window. The most critical bugs reported today, ranked by severity, are:

**Critical / Blocker:**
- **Gateway Event Loop Block (Issue #75330):** The gateway event loop is blocked for up to 32 seconds on agent prep, causing all API requests to hang. *Reported on v2026.4.29.*
- **Main Thread CPU-Lock (Issue #74328):** ~100% CPU from an `fs.stat` storm. *Regression from v2026.4.22.*
- **Plugin Runtime Mirror Blocks (Issue #75069):** Every agent invocation triggers a synchronous walk of plugins, blocking the main thread for 80-90 seconds. *Regression in v2026.4.22+.*
- **Gateway Startup Hang (Issue #73303):** Restart can take 3-4 minutes.

**High Severity:**
- **MCP Tools Missing (Issue #74844):** Tools configured via MCP servers were not appearing in the agent's request. *(Closed/fixed today)*
- **Bundled Plugin Startup Block (Issue #74209):** Default plugins prevent gateway from starting.
- **Active Memory Timeout (Issue #73306):** Plugin consistently fails on a 15-second timeout.
- **Control UI Duplicate Replies (Issue #71992):** Every assistant reply appears twice.
- **Plugins Command Handler Crash (PR #75353 / Issue #74800):** Guards against undefined plugin command handler results. *(Fix in review)*

**Lower Severity (but notable):**
- **Slack Silent Preview (Issue #74358):** Streaming preview is silent when `toolProgress` is false.
- **`agent/` Mount Path Rejection (Issue #39497):** Sandboxed sessions reject valid read-only workspace mounts.

### 6. Feature Requests & Roadmap Signals
Several strong feature signals emerged from the community today:

- **Multi-Slot Memory Architecture (Issue #60572, 5 comments, 3 👍):** A highly upvoted request to replace the single `memory` plugin slot with multiple, purpose-specific memory providers. Given the "Memory grows" highlight in the latest release, this concept is likely being actively explored but not yet delivered.
- **YAML Config Support (Issue #45758, 6 comments, 1 👍):** Users want YAML as an alternative to JSON5 for configuration files.
- **Reversible Sensitive Data Sanitization (PR #72733):** A new, large PR from the community proposes a "Security Guardrail" using a local LLM to sanitize sensitive data (API keys) before sending context to public cloud models. This is a strong signal for enterprise-grade safety features.
- **Multi-session Teams Bots (Issue #71058, 4 comments):** A request to support multiple Azure/Teams bots on a single Gateway instance.
- **Built-in Auto-Update (Issue #12855):** Despite existing primitives, users want a fully managed auto-update workflow with scheduling and confirmation.
- **Token-Cost Scaling in Multi-Agent (Issue #72629):** Users are requesting design input on solving quadratic token cost growth in conversational multi-agent systems.

**Prediction for v2026.5.x:** The "Memory grows" feature will be fully stabilized. A fix for the main-thread blocking (`fs.stat` storm, plugin mirror) is the highest priority and will likely ship in a hotfix. The reversible sanitization layer (PR #72733) has significant potential for inclusion.

### 7. User Feedback Summary
User sentiment is mixed. There is deep satisfaction with the platform's capabilities (multi-agent, extensibility), but high frustration with the current stability of the v2026.4.x branch.

- **Pain Points:**
    - "Gateway hangs/crashes" is the #1 pain point.
    - "Plugins break on update" (MCP, Active Memory, onboarding) is a close second.
    - "Slow startup / high CPU" is impacting productivity on macOS and Linux.
    - "Duplicated messages" in Slack, Discord, and the Control UI erode trust in the UX.
- **Use Cases:**
    - Heavy use of Automation/Heartbeat features for recurring tasks.
    - Multi-agent conversational coordination for complex tasks.
    - Slack and Discord integration for team collaboration.
    - Sandboxed execution for code generation and data processing.
- **Satisfaction:** The release of "active-run steering" and subagent routing metadata is well-received, indicating that users rely heavily on orchestration. The community contributions (e.g., PR #72733 on security) show a highly engaged and technically sophisticated user base.

### 8. Backlog Watch
Several long-unanswered issues continue to gather comments without a clear resolution path, needing maintainer attention:

- **The Blind Spot Problem (Issue #51857 - Opened March 21):** A definitive issue on silent media/vision failures. No official response from maintainers is visible. This is a critical reliability gap.
- **clearUnboundScopes Strips Operators (Issue #51396 - Opened March 21):** A regression that breaks backend clients relying on operator scopes. Needs a targeted fix.
- **Docker Sandbox Name Collision (Issue #51363 - Opened March 21):** Multiple instances on the same host fail due to container name collisions. A fundamental deployment issue.
- **Multi-Instance Plugin Runtime Deps (PR #75048 - Opened April 30):** A fix for Windows multi-instance deployments is open and needs review/merging to address a critical `ENOENT` error.
- **Honoring Env Proxy (PR #72480 - Opened April 27):** A fix to make provider-fetched calls respect environment proxy variables. This has been open for several days without merge.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-01

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing a **hyper-growth phase**, characterized by intense architectural innovation rivaling commercial platforms like OpenAI's Agents SDK. Projects are converging on core capabilities—autonomous agent loops, memory management, multi-channel integration, and MCP tooling—while diverging significantly in implementation philosophy, from monolithic reference implementations (OpenClaw) to lightweight specialists (NanoBot) to architecture-first systems (IronClaw). The ecosystem shows healthy **cross-pollination**: fixes for similar bugs (reasoning token handling, gateway CPU lockups, tool-call loops) appear simultaneously across projects, indicating a shared engineering culture. However, this rapid iteration is exacting a **stability tax**: across all tracked projects, the dominant user pain point is regression-induced instability after major releases, with gateway hangs, plugin failures, and duplicated messages recurring across codebases.

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases (Last 7d) | Health Score | Key Signal |
|---------|---------------------|-------------------|-------------------|--------------|------------|
| **OpenClaw** | 500 | 500 | 5 (v2026.4.29 stable + 4 betas) | ⚠️ High activity, high regression | Core reference, but stability friction |
| **Hermes Agent** | 100 | 100 | 1 (v0.12.0 "Curator") | 🟢 Very high activity, post-release | Major architectural milestone |
| **ZeroClaw** | 50 | 50 | 0 | 🟢 High velocity, pre-release | Schema v3 migration in flight |
| **NanoClaw** | 8 | 46 | 0 | 🟢 Bug-fix intensive | OpenCode provider broken |
| **PicoClaw** | 37 | 38 | 2 (v0.2.8 stable + nightly) | 🟡 Healthy, stale backlog | WhatsApp critical bugs |
| **IronClaw** | 26 | 38 | 0 | 🟢 Intense architecture migration | Reborn EPIC in execution |
| **CoPaw** | 33 | 21 | 1 (v1.1.5.post1) | 🟢 High-velocity maintenance | Security fix shipped |
| **Moltis** | 10 | 21 | 1 (build 20260430.01) | 🟢 Feature-rich, UI regressions | Multi-provider expansion |
| **LobsterAI** | 1 | 21 | 0 | 🟡 Stable, technical debt | WeChat auth flow broken |
| **NullClaw** | 0 | 9 | 0 | 🟢 Lean, focused | Zig 0.16 migration stabilized |
| **NanoBot** | 15 | 27 | 0 | 🟢 Strong community | "Ultra-lightweight" contradiction persists |
| **TinyClaw** | 0 | 0 | 0 | ⚪ Inactive | No activity in 24h |
| **ZeptoClaw** | 0 | 0 | 0 | ⚪ Inactive | No activity in 24h |

**Health Score Legend:** 🟢 Healthy / 🟡 Needs Attention / ⚠️ Critical / ⚪ Inactive

## 3. OpenClaw's Position

**OpenClaw remains the ecosystem's reference implementation** and the primary proving ground for new agent capabilities. Its advantages include:

- **First-mover on critical features:** Active-run steering, subagent routing, and "Memory grows" (incremental memory architecture) were deployed before any peer project.
- **Largest community scale:** 500+ daily issue/PR updates, 5 simultaneous release tracks — 2-5x the activity of any other project.
- **Most rigorous testing:** Five active beta tracks allow the community to surface regressions before they hit stable, though the current regression window (v2026.4.26 lineage) is unusually wide.

**Key differences from peers:**
- **Architecture approach:** OpenClaw favors a **bundled, "batteries-included" philosophy** with default plugins for everything (bonjour, Active Memory, MCP tools). This creates the plugin-related startup bugs seen in #74209 and #75069. In contrast, **NullClaw** and **NanoBot** take a **minimal-core** approach, deferring capabilities to optional skills or plugins.
- **Memory system:** OpenClaw's memory system is monolithic (single `memory` plugin slot), whereas **Hermes Agent** (v0.12.0) has a more sophisticated self-maintaining memory loop. Community request #60572 explicitly asks for OpenClaw to match Hermes's multi-slot memory architecture.
- **Performance vs. features:** OpenClaw's CPU lockup (#74328) and 90-second plugin walks (#75069) suggest feature accretion has outpaced performance optimization. **PicoClaw** and **NanoBot** are significantly leaner on resource consumption.

**Community size comparison:**
| Metric | OpenClaw | Hermes Agent | NanoBot | ZeroClaw |
|--------|----------|--------------|---------|----------|
| Daily PR/Issue updates | ~1,000 | ~200 | ~42 | ~100 |
| Release cycle | Multiple/day | ~Monthly | ~Weekly | ~Biweekly |
| Contributors (last cycle) | Not disclosed | 213 | ~50 (est.) | Not disclosed |

OpenClaw's community is **3-5x larger** than the next most active project (Hermes Agent), but its regression burden is also proportionally higher.

## 4. Shared Technical Focus Areas

The following requirements are emerging **independently across multiple projects**, signaling genuine ecosystem needs:

| Focus Area | Projects | Specific Needs |
|------------|----------|----------------|
| **Multi-provider resilience** | OpenClaw (#74844), PicoClaw (#2408), Moltis (#266), ZeroClaw (#6120, #6206) | Auto-rotate API keys on rate limits; support for custom/cloud endpoints; provider-agnostic routing |
| **Memory architecture evolution** | OpenClaw (#60572, "Memory grows"), Hermes Agent (v0.12.0 self-maintenance), PicoClaw (#2515), NanoBot (#3546) | Multi-slot memory providers; persistent context across sessions; self-pruning/reorganizing memory |
| **Security & authorization** | OpenClaw (#72733), Hermes Agent (#8152, #18125), PicoClaw (#2377), NanoBot (#979), CoPaw (#3955), ZeroClaw (#6207) | Reversible data sanitization; authorization frameworks for autonomous agents; sandbox escaping fixes |
| **Channel reliability & consistency** | OpenClaw (#71992, #39476), NanoBot (#3546, #3553), PicoClaw (#2540, #2541), LobsterAI (#1878), CoPaw (#2757) | Duplicate message prevention; consistent behavior across channels (Matrix, WhatsApp, Discord, WeChat) |
| **Gateway/host performance** | OpenClaw (#74328, #75069, #75330), NanoClaw (#2147), NullClaw (#873), CoPaw (#3976) | Event loop CPU lockups; thread-blocking operations; 10+ second startup hangs |
| **Local model support** | NanoBot (#2298, #3554), PicoClaw (#2482), NanoClaw (#2148-2150), ZeroClaw (#6123) | Tool-calling loops with small models; reasoning token handling; configurable timeouts for slow inference |
| **Documentation & onboarding** | Hermes Agent (#6122, #5524), ZeroClaw (#6123, #5994), PicoClaw (#2225) | Cross-platform documentation gaps; fresh install failures; geographical accessibility |

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | NanoBot | PicoClaw | ZeroClaw | IronClaw | NullClaw |
|-----------|----------|--------------|---------|----------|----------|----------|----------|
| **Target user** | Power users, integrators | Agents-as-services | Lightweight deployers | ARM/edge device users | Full-stack developers | Enterprise architects | Minimalists |
| **Core philosophy** | "Batteries included" | "Self-maintaining agent" | "Ultra-lightweight" | "Runs anywhere" | "Every component customizable" | "Contract-first architecture" | "Minimal, correct, fast" |
| **Language** | Node.js/TypeScript | Python | Python | Go | Rust | Rust | Zig |
| **Memory model** | Single plugin slot | Autonomous curator | Basic conversation | Plugin-based | SQLite + extensible | Reborn native service | Minimal |
| **Release cadence** | Multiple daily | Monthly | Weekly | Biweekly | Biweekly | Monthly | Ad-hoc |
| **Primary channel support** | Discord, Slack, Web | Discord, Terminal, Web | Feishu, Matrix, Web | WhatsApp, Feishu, Web | Slack, Telegram, Web | NEAR, Web IDE | Mattermost, Web |
| **Security posture** | Reactive (bugs first) | Reactive (but #8152 signals shift) | Reactive (rm bypass unfixed) | Reactive (WhatsApp data loss) | Proactive (HMAC receipts incoming) | Architecture-level (sandbox) | 3-tier risk model (in review) |
| **Key innovation** | Active-run steering | Autonomous self-maintenance | Multi-agent mailbox channel | MCP Zod compatibility | Schema v3 migrations | WASM component model | Trigger-based tool prioritization |

**Notable differentiation:** 
- **IronClaw** is the only project pursuing a **WASM component model** architecture, which is philosophically distinct from all others.
- **NullClaw** (Zig) and **ZeroClaw** (Rust) represent the systems-language end of the spectrum, prioritizing correctness and performance over feature velocity.
- **NanoBot** and **PicoClaw** are the only projects explicitly targeting **low-resource environments** (Raspberry Pi, Android TV, Termux).
- **Hermes Agent** is the only project where the agent **maintains itself** — its v0.12.0 "Curator" release is a philosophical step that no other project has attempted.

## 6. Community Momentum & Maturity

### Tier 1: Massively Active, High-Risk (500+ daily updates)
- **OpenClaw** — Reference implementation with the largest community, but currently experiencing a regression crisis that erodes user trust. The high-volume beta track suggests awareness but slow resolution.

### Tier 2: Very Active, Post-Major Release (50-200 daily updates)
- **Hermes Agent** — Just shipped its most ambitious release (v0.12.0). The 213-contributor cycle and philosophical shift toward self-maintenance suggest long-term leadership potential.
- **ZeroClaw** — Heavy RFC and schema migration activity suggests a major release (v0.6.x) is imminent. High investment in architecture quality.
- **PicoClaw** — Healthy maintenance cadence but the stale backlog (23/37 issues stale) and critical WhatsApp bugs risk user churn.
- **IronClaw** — The Reborn EPIC (43 comments in 3 days) signals a transformative release. Community PRs waiting 4-6 weeks for review are a risk signal.
- **CoPaw** — Rapid security response (path traversal fixed same-day) and WeCom reliability work show strong operational maturity.

### Tier 3: Active, Stable (20-50 daily updates)
- **NanoClaw** — In an intensive bug-fix sprint for OpenCode provider issues. Three concurrent high-severity bugs make this feature path effectively broken.
- **Moltis** — Feature-rich release with strong provider expansion, but four new UI regressions suggest testing gaps.
- **LobsterAI** — Stable maintenance, but 11 stale issues (security, performance) represent growing technical debt.
- **NullClaw** — Lean, focused project with excellent responsiveness (all PRs <2 days old). The Zig 0.16 migration regressions were fixed within 48 hours.
- **NanoBot** — Strong community contribution velocity, but the unresolved "ultra-lightweight" branding contradiction (#660) and persistent tool-loop bugs (#2298) are credibility risks.

### Tier 4: Inactive (0 daily updates)
- **TinyClaw, ZeptoClaw** — No activity in 24h. May be dormant or in long development cycles.

## 7. Trend Signals

### For AI Agent Developers

1. **Security is the next differentiator.** Multiple projects are independently building authorization frameworks, data sanitization layers, and sandbox hardening — often without coordination. The OpenClaw reversible sanitization PR (#72733), Hermes Agent's IBA authorization (#8152), ZeroClaw's HMAC tool receipts (#6214), and NullClaw's 3-tier risk model (#875) all point to an ecosystem recognizing that **trust is the bottleneck for production deployment**.

2. **"Self-maintaining agents" is the emerging paradigm.** Hermes Agent's v0.12.0 "Curator" release is the first production-grade implementation, but OpenClaw's "Memory grows" and the /ralph-loop request (#3972) in CoPaw suggest users want agents that **debug, optimize, and evolve themselves**. This shifts the engineering challenge from "build features" to "build the system that builds features."

3. **Channel inconsistency is the #1 user frustration.** The same features work differently on Discord vs. Slack vs. WhatsApp vs. WeChat, with duplicate messages, silent drops, and permission mismatches. The ecosystem needs a **channel abstraction layer** — a project that solves this could become infrastructure. The OpenClaw/Moltis/CoPaw experience suggests this is harder than it looks: even standardization efforts introduce regressions.

4. **Local model support is the wedge for adoption.** NanoBot, PicoClaw, and NanoClaw all have critical bugs in local model tool-calling loops, reasoning token handling, and timeout configurability. As open-weight models improve (e.g., DeepSeek V4, GLM 5.1), users want to **escape API costs** — but the agent software isn't ready. The project that first achieves parity with cloud models on local hardware will capture the "cost-conscious practitioner" segment.

5. **Observability is under-invested.** Hermes Agent users report being blind to in-flight gateway sessions (#18127). ZeroClaw users struggle to debug cron jobs. Only Moltis (telemetry via #935) and NullClaw (minimal logs) have any instrumentation. The ecosystem still sells agents as **black boxes**, which conflicts with the transparency requirements of production environments.

6. **Cross-platform documentation is a hidden blocker.** Every project has at least one "install fails on [OS/architecture]" issue. Terminal-not-found bugs, path separator issues, and firewall blocks recur across codebases. The community is ready to contribute translations and guides (ZeroClaw's zh-CN PRs, Hermes Agent's Raspberry Pi guide), but there's no ecosystem-level documentation infrastructure.

**Bottom line:** The ecosystem is mature enough for **composite projects** (tools that span multiple agents) but still unstable enough that **production deployments require dedicated engineering support**. The next 3-6 months will likely see consolidation around a few key patterns (self-maintenance, multi-provider routing, channel abstraction), with the projects that survive having the strongest security and local-model stories.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-01

## 1. Today's Overview

NanoBot is seeing a burst of community activity, with 15 issues and 27 pull requests updated in the last 24 hours. The project maintains a healthy balance of contributions, with 8 issues closed and 9 PRs merged or closed. No new releases were published today, but the development pipeline is highly active with 18 open PRs. The community is deeply engaged around long-standing architectural concerns, particularly regarding the project's "ultra-lightweight" claim and persistent tool-calling reliability issues with smaller models.

## 2. Releases

**None.** No new releases were published on 2026-05-01.

## 3. Project Progress

Nine pull requests were merged or closed today, including several important fixes:

- **Matrix channel fixes**: PR #3562 and #3565 (identical fix by bstaeheli) address empty message spam in Matrix rooms caused by empty `reasoning_content` chunks from providers like DeepSeek. The fix moves the empty-delta check earlier in the stream processing pipeline.

- **Cross-platform polish**: PR #3556 (orkapodavid) adds `.gitattributes` to pin text files to LF line endings and mark binaries explicitly, preventing CRLF churn on Windows. PR #3550 (same author) replaces POSIX-only `/tmp/...` paths in documentation with portable equivalents.

- **Feature completions**: PR #3557 (dannylty, "lunarpixie") and PR #1007 (aliucrazy, Kimi coding plan support) were closed. PR #3433 (T3chC0wb0y) for auto-pruning stale MSTeams conversation refs was also completed.

- **Bug squashes**: PR #3533 (CashSoldier) fixed forced `reply_in_thread` in group chats on Feishu, allowing the `replyToMessage` config to be respected. PR #3506 (allanpk716) resolved a Windows-specific Matrix channel crash caused by colons in nio store file paths.

## 4. Community Hot Topics

The most active discussions reveal deep community concerns about reliability and architecture:

- **#660** (5 👍, 11 comments) — **[OPEN] "Ultra-lightweight" contradiction**: User besoeasy points out that NanoBot's Dockerfile requires both Python *and* Node.js, contradicting its "ultra-lightweight" branding. This issue, tagged as a good first issue and feature request, has persisted since February and now has a "to-nightly" label, suggesting maintainer acknowledgment.

- **#3546** (6 comments) — **[CLOSED] NanoBot memory loss**: User EddiePengg reported that disabling `reply_in_thread` on Feishu causes the bot to "lose memory" in group chats, treating each message as a new conversation. This reveals a fundamental tension between threading configurations and conversational continuity.

- **#2298** (4 comments) — **[OPEN] Endless tool calling loops**: User alekwo describes a critical issue where smaller/local models enter infinite loops repeating the same tool call. This is a deep reliability concern affecting real-world deployment of NanoBot with cost-effective models.

- **#979** (4 comments) — **[OPEN] AI bypassing `rm` execution prevention**: User xingzhan2012 demonstrates that NanoBot's protection against `rm` commands is trivially bypassed, raising serious security questions about the agent's command execution sandbox.

- **#3559** (2 comments) — **[OPEN] WebSocket vs Webhook for proactive delivery**: User ivelin argues that the recently added WebSocket channel cannot replace webhooks for scenarios requiring proactive message delivery (cron, heartbeat, multi-tenant). This is a well-reasoned architectural critique.

## 5. Bugs & Stability

Five critical bug reports emerged today, ranked by severity:

- **HIGH — #3554 [OPEN] DeepSeek-V4 `reasoning_content` error on v0.1.5.post3**: User e16a reproduces a previously-reported error on the latest patch version with WebUI + exec tool on Windows. A fix PR #3560 (JiajunBernoulli) is already submitted, adjusting the reasoning mode detection condition.

- **HIGH — #3551 [OPEN] OpenAI-compatible streaming closes early for tool-backed requests**: User ppx260 reports that SSE streams terminate prematurely when tools are invoked with `stream=true`. PR #3555 (boogieLing) provides a fix by correcting the stream lifecycle handling for multi-phase paths.

- **MEDIUM — #3553 [OPEN] Matrix channel reads old messages on startup**: User escoand reports that `/restart` causes Matrix to re-process old messages, creating unwanted loops. No fix PR yet.

- **MEDIUM — #3533 [CLOSED] Feishu forced threading**: Fixed in production as a closed bug, but the issue exposed deeper problems with message context continuity in group chats.

- **LOW — #3506 [CLOSED] Windows Matrix path colon error**: Fixed, but highlights gaps in cross-platform testing for nio store paths.

## 6. Feature Requests & Roadmap Signals

Several PRs and issues suggest the next release's likely direction:

- **Typed-event hook system** (PR #3564, aiguozhi123456): A major refactor replacing the AgentHook pattern with a `HookCenter` plugin system supporting `entry_points` distribution. This would enable third-party hook plugins without core modifications — a platform-maturity signal.

- **Manifest LLM router** (PR #3568, SebConejo): Adds Manifest as a built-in provider gateway, expanding supported model routing options. Likely to merge given clear `ProviderSpec` structure.

- **Model presets** (PR #3358, chengyongru): Named bundles of model + generation parameters for quick switching. Still open after 9 days; could be a v0.2.0 feature.

- **OpenTelemetry tracing** (PR #3173, Chen-zexi): Traces for LLM calls and tools with Langfuse/LangSmith support. Open for 16 days but moving toward production-grade observability.

- **Sender identity injection** (PRs #3549, #3552): Two independent PRs add sender context to prompts for Feishu and general group chat scenarios. This addresses a top community pain point (see #3546).

## 7. User Feedback Summary

**Positive signals:**
- Strong community contribution velocity (27 PRs/day)
- Cross-platform users (Windows, macOS, Linux) actively contributing fixes (PRs #3506, #3550, #3556)
- Plugin ecosystem interest: Multi-agent mailbox channel (PR #3461), hook plugins (PR #3564)

**Pain points:**
- **Reliability gap for local models**: Endless tool loops (#2298), hardcoded subagent timeouts (#970), reasoning token handling issues (#3554) — users running smaller models face persistent stability problems
- **Channel inconsistency**: Each channel has unique quirks (Feishu threading, Matrix startup re-reading, Windows nio crashes) that erode the "drop-in replacement" promise
- **Security anxiety**: The `rm` bypass (#979) shows that execution sandboxing remains a concern, especially for users deploying NanoBot with file system access
- **Documentation friction**: Cross-platform documentation gaps (#3550) and complex configuration for local models (#603) suggest the docs need modernization

## 8. Backlog Watch

Several important items need maintainer attention:

- **#660 [OPEN, since Feb 14]**: The "ultra-lightweight" contradiction issue has 5 community upvotes and 11 comments. Tagged "to-nightly" but no PR yet. Could be resolved by documenting the Node.js requirement or splitting Dockerfiles.

- **#1385 [OPEN, since March 1]**: PR by zerone0x for preserving `reasoning_details` for multi-turn tool calling with OpenRouter reasoning models. This fix for issue #1247 has been open for two months with no merge, while similar reasoning-handling bugs continue to surface (#3554).

- **#2298 [OPEN, since March 20]**: Endless tool calling loops with small models — no maintainer response visible. Given the rising popularity of local models, this could become a blocker for adoption.

- **#979 [OPEN, since Feb 22]**: The `rm` bypass demonstration has no maintainer comment. This is a security issue that should at minimum receive an acknowledgment or a configuration recommendation.

- **PR #3173 [OPEN, since April 15]**: OpenTelemetry tracing is a significant infrastructure improvement, but has no reviewer activity. If merged, it would substantially improve debugging for production deployments.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — May 1, 2026

## 1. Today's Overview

Hermes Agent shows **extraordinary activity** for a single day, with 100 issues and PRs updated in the last 24 hours — a clear signal of a vibrant, fast-moving project entering a new phase after the v0.12.0 "Curator" release. The project closed 3 issues and merged/closed 8 pull requests today, while maintaining 47 open issues and 42 open PRs. A notable pipeline of features, bug fixes, and infrastructure hardening is flowing through with contributions from 213 community members in the v0.12.0 cycle alone. The release's headline feature — an autonomous background loop that maintains the agent itself — represents a philosophical milestone for the project and is already generating significant follow-on work.

## 2. Releases

**Hermes Agent v0.12.0 (v2026.4.30) — "The Curator Release"**

This is a major release with 1,096 commits, 550 merged PRs, and contributions from 213 community members over the v0.11.0 cycle.

**Key Capabilities:**
- **Autonomous self-maintenance:** An unsupervised background loop that runs maintenance skills, upgrades config, prunes memory, and evolves prompts without user intervention
- **1,270 files changed, 217,776 insertions** — substantial expansion of the codebase

**No documented breaking changes or migration notes** were included in the release announcement. Given the scale of changes (217K+ insertions), users upgrading from v0.11.0 should expect potential regressions in gateway platforms, CLI behavior, and provider integrations — several of which are already surfacing in today's issues.

## 3. Project Progress

**Merged/Closed PRs Today (8 total):**

| PR | Title | Type |
|---|---|---|
| #18150 | Add shared-home skill locking | Feature — cross-process skill write lock |
| #17333 | Enable prompt caching for MiniMax on anthropic_messages transport | Bug fix |
| #17425 | Enable Anthropic prompt caching for MiniMax's own models | Bug fix |
| #17211 | Add local_command TTS provider | Feature — generic TTS bridge |

**Key Advances:**
- **MiniMax provider maturity:** Two PRs were merged to enable prompt caching for MiniMax models on the Anthropic-compatible transport, reducing API costs for users of these models
- **Skill locking infrastructure:** #18150 adds cross-process skills write locking, resolving a class of race conditions in multi-process deployments
- **TTS extensibility:** The new `local_command` TTS provider (PR #17211) allows users to bridge any command-line TTS engine without core dependency bloat

## 4. Community Hot Topics

**Most Active Issues:**

1. **#8152 — Authorization layer / IBA Intent Bound Authorization** (6 comments)
   [NousResearch/hermes-agent Issue #8152](https://github.com/NousResearch/hermes-agent/issues/8152)
   *Underlying need:* A user is proposing a formal authorization framework for the agent's most powerful capabilities (autonomous learning, cron scheduling, skill creation). This signals that as Hermes gains autonomy, the community is thinking seriously about **security boundaries and governance** — a natural evolution for a self-maintaining agent.

2. **#6122 — Zsh completion script broken with `eval`** (4 comments)
   [NousResearch/hermes-agent Issue #6122](https://github.com/NousResearch/hermes-agent/issues/6122)
   *Underlying need:* A documentation-prompted shell integration workflow is fundamentally broken. Users following the recommended setup path hit a hard error. This is a **first-impression quality issue** that affects onboarding.

3. **#5504 — Dual queue: Alt+Enter follow-up + steering** (3 comments, 1 👍)
   [NousResearch/hermes-agent Issue #5504](https://github.com/NousResearch/hermes-agent/issues/5504)
   *Underlying need:* Users want **non-blocking interaction patterns** — being able to queue messages while the agent is still responding. This is a workflow efficiency feature for power users.

4. **#16671 — `session_search` extremely slow on long sessions** (2 comments, 2 👍)
   [NousResearch/hermes-agent Issue #16671](https://github.com/NousResearch/hermes-agent/issues/16671)
   *Underlying need:* A non-programmer user reports a core usability feature degrades to unusable as sessions grow. The fact that a non-technical user is reporting this speaks to Hermes's expanding user base beyond developers.

5. **#5495 — Official MongoDB memory provider** (1 comment, 1 👍)
   [NousResearch/hermes-agent Issue #5495](https://github.com/NousResearch/hermes-agent/issues/5495)
   *Underlying need:* Users want **production-grade external memory backends** for multi-agent or high-availability deployments. MongoDB support would be a significant infrastructure milestone.

**Most Active PRs:**

1. **#15997 — Fix CLI rejecting invalid argv in pytest context** (open, 2 days old)
   [NousResearch/hermes-agent PR #15997](https://github.com/NousResearch/hermes-agent/pull/15997)
   Affects developer experience — the CLI crashes when imported inside pytest with certain flags.

2. **#18125 — Fix Discord gateway allowing unauthorized slash commands (P0 severity)** (open, 1 day old)
   [NousResearch/hermes-agent PR #18125](https://github.com/NousResearch/hermes-agent/pull/18125)
   A **security-critical** fix: Discord slash commands bypass all allowlist gates. This is the highest-severity actionable work today.

## 5. Bugs & Stability

**P0 (Critical):**
- **#18125 (PR) — Discord slash commands bypass allowlist auth** — Users invoking slash commands on Discord can circumvent all `DISCORD_ALLOWED_*` authorization gates. Fix PR exists and is under review.
  [NousResearch/hermes-agent PR #18125](https://github.com/NousResearch/hermes-agent/pull/18125)

**P1 (High):**
- **#5518 — Recurring cron jobs silently skip** — Jobs with null `next_run_at` are silently dropped with no logging. Undocumented data loss for scheduled tasks.
  [NousResearch/hermes-agent Issue #5518](https://github.com/NousResearch/hermes-agent/issues/5518)
- **#18139 (PR) — Silent-empty responses from reasoning models** — Ollama-hosted GLM 5.1 and other reasoning models can return structurally valid but logically empty responses, causing agents to misbehave silently. Fix PR exists.
  [NousResearch/hermes-agent PR #18139](https://github.com/NousResearch/hermes-agent/pull/18139)

**P2 (Medium):**
- **#17908 (CLOSED) — Install fails due to invalid `exclude-newer` date format** — `pyproject.toml` uses `"7 days"` instead of an ISO date, blocking `uv pip install`. Already fixed and closed.
- **#18106 — IMAP fetch: 'int' object has no attribute 'decode'** — Email gateway crashes on malformed IMAP server responses. Fix PR #18146 exists.
  [NousResearch/hermes-agent Issue #18106](https://github.com/NousResearch/hermes-agent/issues/18106)
- **#5544 — Memory provider tools auto-injected regardless of platform_toolsets config** — 10x latency penalty on local models because memory tools can't be excluded even when explicitly configured.
  [NousResearch/hermes-agent Issue #5544](https://github.com/NousResearch/hermes-agent/issues/5544)
- **#18101 — Background process updates leak into wrong Slack thread** — Cross-thread contamination in Slack gateway. Fix needs review.
  [NousResearch/hermes-agent Issue #18101](https://github.com/NousResearch/hermes-agent/issues/18101)
- **#18110 — `hermes status` reports sudo disabled when passwordless sudo works** — False negative in status reporting.
  [NousResearch/hermes-agent Issue #18110](https://github.com/NousResearch/hermes-agent/issues/18110)

**P3 (Low):**
- #18140 — Opencode Zen always falls back to Claude despite configuration
- #5537 — Email/Matrix gateways can't send files
- #5695 — `/plugins install` with GitHub URL doesn't install plugins

## 6. Feature Requests & Roadmap Signals

**High-Signal Feature Requests (likely near-term):**

1. **Runtime extension hooks** (#18148) — Python-level hooks to intercept, rewrite, and block agent behavior at critical points. This is a natural evolution from the shell-hook system and would enable a rich plugin ecosystem.
   [NousResearch/hermes-agent Issue #18148](https://github.com/NousResearch/hermes-agent/issues/18148)

2. **Per-skill model routing** (#5508) — Route different tasks to different LLM models via `delegate_task(model=...)`, skill frontmatter `model:` fields, and supervisor/execution model config. Would be a **game-changer for cost optimization**.
   [NousResearch/hermes-agent Issue #5508](https://github.com/NousResearch/hermes-agent/issues/5508)

3. **Dual message queue** (#5504) — Non-blocking follow-up queue via Alt+Enter with LIFO recall. Likely to appear in v0.13.0 given the number of related TUI feature requests from the same author.
   [NousResearch/hermes-agent Issue #5504](https://github.com/NousResearch/hermes-agent/issues/5504)

4. **Observability for gateway sessions** (#18127) — No way to observe in-flight gateway agent progress. Filed against v0.12.0, suggesting the new release shipped without adequate session monitoring.
   [NousResearch/hermes-agent Issue #18127](https://github.com/NousResearch/hermes-agent/issues/18127)

5. **Autonomous evolution engine (GASP Loop)** (#18092) — A production-grade self-improvement system beyond prompt-only optimization. While ambitious, this aligns with the "Curator" philosophy of v0.12.0.
   [NousResearch/hermes-agent Issue #18092](https://github.com/NousResearch/hermes-agent/issues/18092)

**Prediction for v0.13.0:** Expect the dual queue features (#5504-5512) — all filed by the same author in a coordinated batch — to land as a consolidated TUI upgrade. The per-skill model routing (#5508) is architecturally significant and may be partially implemented.

## 7. User Feedback Summary

**Pain Points:**

- **Onboarding friction:** The recommended shell completion setup (`eval "$(hermes completion zsh)"`) crashes on startup (#6122). Installation on fresh machines fails due to invalid `pyproject.toml` date format (#17908). A user in China cannot even download the install script due to connectivity (#5524).

- **Performance regressions for local models:** `session_search` becomes unusably slow on long sessions (#16671). Memory provider tools are auto-injected regardless of config, causing 10x latency for local model users (#5544). These affect non-developer users disproportionately.

- **Gateway reliability:** Cross-platform issues — IMAP crashes (#18106), Slack thread leaks (#18101), Matrix file sending broken (#5537), Discord auth bypass (#18125) — suggest the gateway layer needs hardening, especially after the large v0.12.0 changeset.

- **Autonomy without observability:** Users running gateway agents report being blind to agent progress (#18127), which is particularly acute for the new autonomous maintenance features.

**Satisfaction Signals:**

- **High engagement:** 213 contributors in one release cycle, 100 issues/PRs updated in a single day, and thoughtful feature proposals (IBA authorization, GASP loop) indicate a deeply invested community.
- **Non-developer users emerging:** Reports from non-programmers (#16671, #5524) suggest the project is expanding beyond its developer-centric roots — a healthy sign for adoption.

## 8. Backlog Watch

**Issues Needing Maintainer Attention:**

1. **#5495 — Official MongoDB memory provider** (1 month old, 1 👍)
   [NousResearch/hermes-agent Issue #5495](https://github.com/NousResearch/hermes-agent/issues/5495)
   A natural ask given Hermes's first-class memory architecture. Community member has expressed willingness to contribute. Unanswered.

2. **#5518 — Recurring cron jobs silently skip** (P1, 25 days old)
   [NousResearch/hermes-agent Issue #5518](https://github.com/NousResearch/hermes-agent/issues/5518)
   No commentary from maintainers despite being a P1 bug affecting scheduled task reliability — a core value prop of the project.

3. **#5537 — Email/Matrix gateways can't send files** (25 days old)
   [NousResearch/hermes-agent Issue #5537](https://github.com/NousResearch/hermes-agent/issues/5537)
   User successfully configured gateways but hit a fundamental capability gap. No maintainer response.

4. **#5687 — Anthropic OAuth test failure** (24 days old)
   [NousResearch/hermes-agent Issue #5687](https://github.com/NousResearch/hermes-agent/issues/5687)
   A test consistently fails under pytest due to `getpass` interacting with stdout capture. Blocks CI for OAuth-related changes. No acknowledged fix.

5. **#5524 — Install script blocked by network connectivity (China)** (25 days old)
   [NousResearch/hermes-agent Issue #5524](https://github.com/NousResearch/hermes-agent/issues/5524)
   Unanswered. Geographical accessibility gaps should be documented at minimum.

**PRs Needing Review:**

- #15997 (CLI/pytest conflict, P2) — Open 5 days, no review
- #5489 (Telegram per-topic skill binding, feature) — Open 25 days
- #16091 (Email skill docs update) — Open 5 days, straightforward documentation fix

---

**Project Health Assessment:** Hermes Agent is in a **high-growth phase** with excellent community engagement and a steady pipeline of features and fixes. The v0.12.0 release represents a significant philosophical step (self-maintaining agents) that will generate months of follow-on work. Key risks are: (a) **security surface expansion** from autonomous features without corresponding authorization frameworks, (b) **onboarding friction** that may cap non-developer adoption, and (c) **gateway reliability** as the project supports more platforms. The maintainer team should prioritize triaging the P0 Discord auth issue and responding to the backlog of unanswered user reports.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-01

## 1. Today's Overview
PicoClaw shows **sustained high activity** with 37 issues, 38 PRs updated in the last 24 hours, and **two new releases**, including stable **v0.2.8**. The project remains community-driven with strong contributor engagement across provider support, channel integrations, and MCP tooling. Many PRs from a core set of frequent contributors (notably `badgerbees`, `loafoe`) indicate healthy ongoing maintenance. However, 23 of 37 issues bear the `stale` label, suggesting a growing backlog of unresolved items needing triage. The overall project health appears good but the backlog warrants attention.

---

## 2. Releases
### v0.2.8 (Stable) — Released 2026-05-01
- **New MCP CLI commands**: `show`, `add`, `list`, `remove`, `test`, `edit` for managing MCP servers from the command line
- **Critical fix**: Sends `{}` instead of `null` for empty tool call arguments in MCP, fixing compatibility with Zod-based MCP servers
- **Build fix**: Resolves a build regression (#2723)

**Migration Notes**: No breaking changes reported. Users relying on `null` argument serialization for MCP tools should update to v0.2.8 to ensure compatibility with TypeScript-based MCP servers.

### nightly build (v0.2.8-nightly.20260501.6e1fab80)
- Automated nightly build from main branch; may be unstable. Includes all changes merged to main since v0.2.8.

- **Full v0.2.8 Changelog**: https://github.com/sipeed/picoclaw/compare/v0.2.8...main

---

## 3. Project Progress
**Merged/closed PRs in last 24h: 6** (plus 32 open)

Key advancements visible in active PRs:
- **Slack webhook channel** (PR #2719, by `loafoe`): New output-only Slack integration with Block Kit formatting and markdown-to-mrkdwn conversion; targets multiple webhooks
- **Native audio input** (PR #2626, by `webhtb`): Adds support for multimodal LLM audio input (e.g. Gemini 1.5) via data URLs
- **Web chat streaming** (PR #2587, by `SiYue-ZO`): Full end-to-end streaming UX for Pico web chat with rebuilt frontend rendering
- **Streaming usage** (PR #2522, by `badgerbees`): Adds `stream_options.include_usage` support for OpenAI-compatible endpoints
- **Security hardening** (PR #2313, by `stevef1uk`): Multi-user support, "Agent Shield" security suite integration, skill whitelisting

**Dependency updates**: `larksuite/oapi-sdk-go` (v3.5.4→v3.6.1), `aws/aws-sdk-go-v2/config` (1.32.16→1.32.17) via Dependabot.

---

## 4. Community Hot Topics
| Issue/PR | Comments | Reactions | Topic |
|---|---|---|---|
| [#2408](https://github.com/sipeed/picoclaw/issues/2408) | **10** | 0 👍 | **LLM Account Stacking**: Auto-rotate API keys on rate limits/quotas—strong interest in multi-key resilience |
| [#2225](https://github.com/sipeed/picoclaw/issues/2225) | **9** | 0 👍 | **Ollama Cloud credentials**: User needs authentication support for cloud Ollama deployments |
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) | **9** | 0 👍 | **OpenAI Responses API migration**: Refactor from Chat Completions to Responses API; work partially done |
| [#2468](https://github.com/sipeed/picoclaw/issues/2468) | **7** | 0 👍 | **Cron task execution failure**: Tool execution error for scheduled commands—blocks automation use cases |
| [#2465](https://github.com/sipeed/picoclaw/issues/2465) | **6** | 0 👍 | **SMTP email channel**: Feature request for email notification via SMTP in cron tasks |
| [#2377](https://github.com/sipeed/picoclaw/issues/2377) | **6** | 0 👍 | **Unsafe terminal control characters**: Security concern—exec tool emits raw ANSI/bidi chars |

**Underlying needs**: A strong demand for **multi-provider resilience** (key rotation, redundant accounts), **cloud-hosted model support** (Ollama cloud), and **better notification/cron integration** (SMTP, scheduled task reliability) reflects enterprise/automation usage patterns.

---

## 5. Bugs & Stability

**High Severity**:
| Issue | Summary | Severity | Fix PR(s) |
|---|---|---|---|
| [#2377](https://github.com/sipeed/picoclaw/issues/2377) | `exec` tool emits raw ANSI/Unicode bidi control characters—security risk for operators | **High** | None yet |
| [#2438](https://github.com/sipeed/picoclaw/issues/2438) | `PICOCLAW_GATEWAY_TOKEN` env var doesn't control WebSocket auth—misleading config | **Medium** | None yet |
| [#2472](https://github.com/sipeed/picoclaw/issues/2472) | `list_dir` fails on Windows due to path separator mismatch | **Medium** | None yet |
| [#2482](https://github.com/sipeed/picoclaw/issues/2482) | Tool calls fail with open-weight models via mlx-lm | **Medium** | None yet |
| [#2460](https://github.com/sipeed/picoclaw/issues/2460) | MCP sends `null` arguments—breaks Zod-based TypeScript servers (fixed in v0.2.8) | **High** | PR #2460 (merged in v0.2.8) |
| [#2483](https://github.com/sipeed/picoclaw/issues/2483) | "Start Gateway" button non-functional in UI | **Medium** | None yet |
| [#2478](https://github.com/sipeed/picoclaw/issues/2478) | Multiple `/use <skill>` calls in equipment mode overwrite—potential design flaw | **Medium** | None yet |
| [#2540](https://github.com/sipeed/picoclaw/issues/2540) | WhatsApp native channel silently drops messages from LID-migrated accounts | **High** | None yet |
| [#2541](https://github.com/sipeed/picoclaw/issues/2541) | WhatsApp group_trigger.mention_only completely non-functional (4 compounded defects) | **High** | None yet |

**Notable**: Multiple **WhatsApp-native channel** defects surfaced (PR #2540, #2541), making mention-only mode and LID-migrated accounts fully broken. These are high-severity for users relying on WhatsApp integration.

---

## 6. Feature Requests & Roadmap Signals
**Likely in next release (v0.2.9)**:
- **Slack webhook channel** (PR #2719)—nearly ready, clear implementation
- **Native audio input** (PR #2626)—provides multimodal audio support
- **Web chat streaming** (PR #2587)—major UX improvement
- **OpenAI Responses API migration** (PR #2171)—strategic API alignment

**Candidate for v0.3.0 or later**:
- **LLM Account Stacking** (#2408)—complex but highly requested multi-key rotation
- **Memory system integration** (#2515)—mem0, Supermemory, HydraDB connectors
- **OAuth 2.1 + PKCE for MCP servers** (#2546)—dashboard-based MCP addition
- **Multiple Feishu app support** (#2493)—enterprise multi-tenant requirement
- **WhatsApp native fixes** (#2540, #2541)—critical if WhatsApp is strategic

**Active PRs pushing toward next release** (not yet merged): Slack webhook, audio input, web streaming, streaming usage, security hardening.

---

## 7. User Feedback Summary
**Positive signals**:
- Active Chinese-speaking community requesting Feishu/飞书 enhancements (#2580, #2464, #2465)
- Users deploying on diverse hardware (Raspberry Pi Zero 2, Android TV boxes, Termux)
- Contributors willing to self-patch and submit PRs for complex bugs (WhatsApp, streaming)

**Pain points**:
- **Cron automation broken** (#2468): Scheduled tasks fail—critical for unattended operation
- **Multi-channel message processing bugs** (#2447, #2446, #2464): Echoing, dropped messages, only last message processed
- **Windows path issues** (#2472): `list_dir` fails on Windows
- **Frequent re-authentication** (#2302): WebUI credentials expire too quickly
- **Build inclusion gaps** (#2625): WhatsApp support missing from default ARM64 builds
- **Terminal safety** (#2377): Raw control chars in exec/logs—trust/security concern

One user (#2429) expressed **high dissatisfaction** with crashes and double-character input in console mode.

**Use case diversity**: Self-hosted automation (cron), enterprise notification chains (SMTP), multi-account management (Feishu, WhatsApp), low-power edge devices (Raspberry Pi, Android TV).

---

## 8. Backlog Watch
**Issues needing maintainer attention** (stale, important, unanswered):

| Issue | Age (days since created) | Stale Duration | Priority |
|---|---|---|---|
| [#1763](https://github.com/sipeed/picoclaw/issues/1763) — aarch64 .deb not install | **44 days** | 42 days stale | **High** — blocks ARM Debian users |
| [#2225](https://github.com/sipeed/picoclaw/issues/2225) — Ollama Cloud credentials | **31 days** | 30 days stale | **High** — popular request with 9 comments |
| [#2280](https://github.com/sipeed/picoclaw/issues/2280) — SiliconFlow API crash + QQ config missing | **29 days** | 28 days stale | **High** — service crash |
| [#2302](https://github.com/sipeed/picoclaw/issues/2302) — Frequent re-auth in WebUI | **28 days** | 27 days stale | **Medium** — persistence bug |
| [#2377](https://github.com/sipeed/picoclaw/issues/2377) — Unsafe terminal control chars | **25 days** | 24 days stale | **High** — security |
| [#2408](https://github.com/sipeed/picoclaw/issues/2408) — LLM Account Stacking | **24 days** | 23 days stale | **Medium** — fan request |
| [#2468](https://github.com/sipeed/picoclaw/issues/2468) — Cron task fails | **21 days** | 21 days stale | **High** — reliability |
| [#2482](https://github.com/sipeed/picoclaw/issues/2482) — Open-weight tool call failure | **19 days** | 19 days stale | **Medium** — provider compatibility |
| [#2540](https://github.com/sipeed/picoclaw/issues/2540) — WhatsApp LID migration drop | **15 days** | 14 days stale | **Critical** — data loss |
| [#2541](https://github.com/sipeed/picoclaw/issues/2541) — WhatsApp mention_only broken | **15 days** | 14 days stale | **Critical** — feature non-functional |

The **10 most stale important issues** average 25 days without a maintainer response, and most are tagged `stale`. The WhatsApp-native channel issues (#2540, #2541) are particularly concerning due to silent data loss and feature breakage. Active PRs exist for some items (#2460 merged) but the maintainer team should prioritize triaging the stale queue.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-01

## Today's Overview

NanoClaw shows **very high activity** today with 46 PRs updated in the last 24 hours (37 merged/closed) and 8 issues updated (5 still open). The project is in an **intensive bug-fixing and stabilization phase** following a large v2 setup overhaul, with major security hardening underway. Three critical or high-severity security issues were closed today (#458, #457), while several new OpenCode provider bugs and a host-sweep persistence bug were opened. The flurry of stacked setup-flow PRs from `alipgoldberg` and `gabi-simons` (PRs #2145–#2158) indicates the team is pushing toward a polished v2 setup experience. Despite zero new releases, the sheer volume of merged fixes suggests a release may be imminent.

## Releases

**None.** No new releases were published today.

## Project Progress

**37 PRs were merged or closed** in the last 24 hours, reflecting significant forward momentum across multiple areas:

- **Security Hardening:** PR #2001 (merged) prevents host file read/delete via container-controlled outbox paths. PR #2053 (merged) applies the same outbox path-confinement to inbound attachments. Security issues #458 (network restrictions) and #457 (command injection in `stopContainer()`) were both closed without public fix PRs visible in this batch—possibly fixed atomically in other PRs.

- **Setup Flow Overhaul:** A large chain of stacked PRs from `gabi-simons`, `alipgoldberg`, and `dooha333` landed:
  - PR #2055: Injects `~/.local/bin` into PATH so `onecli` is reachable post-install
  - PR #2111: Deletes scratch agent after ping-pong, simplifies agent creation flow
  - PR #2155: Adds root user warning gate to Linux setup
  - PR #2157: Refactors setup to per-step env var reuse instead of upfront all-or-nothing
  - PR #2158: Adds "under-the-sea lobster splash" boot screen
  - PR #2154: Moves URL fallback into the open-browser prompt
  - PR #2146: Labels headless URL fallback with "Get started:"
  - PR #2107: Implements `resolveChannelName` for Slack and Telegram (enables channel-approval flow)
  - PR #2105: Richer channel-approval flow with agent selection and free-text naming

- **Channel & Integration Fixes:**
  - PR #2040 (merged): Signal adapter now supports outbound attachments via `signal-cli` JSON-RPC
  - PR #2112 (merged): Telegram adapter now wires `maxTextLength` to the message splitter
  - PR #2142 (merged): Fixes `schedule_task` routing data loss in delivery pipeline
  - PR #2141 (merged): Feishu decision bridge via IPC (dota-bridge module)

- **Scheduling & Polling Fixes:**
  - PR #2114 (merged): Pre-task scripts now apply to follow-up injections too
  - PR #2033 (merged): Task messages from follow-up polling deferred to main loop

- **Other:** PR #1502 (PR hygiene check in CLAUDE.md) and PR #2027 (host-actions container skill) also merged.

## Community Hot Topics

**Most Active Issues:**
- **#2150** (OpenCode provider: `wrapPromptWithContext` sends literal `@./...md` lines) — 1 comment, opened today. Silent context loss means agents operate without instructions. High severity.
- **#2159** (OneCLI `ensureAgent` fails: underscores in agent group IDs rejected) — Opened today, 0 comments yet. Validates `[a-z0-9-]` only, but v2 generates `ag_f249a3521081`.
- **#2148** (OpenCode provider: `proc.kill('SIGKILL')` leaks binary, holding port 4096) — High severity, compounds with timeout issue.
- **#2147** (Host sweep: orphan `processing_ack` rows survive `kill-ceiling`, loops forever) — High severity, locks sessions out of message processing.

**Most Active PRs (by comment count):** The PRs listed are all merged/closed; many had comments but the data shows `undefined` for comment counts. The stacked PR chains (#2101–#2158) from `gabi-simons` and `alipgoldberg` appear to be the community's main focus, as these directly affect the user-facing setup experience.

**Underlying Needs:** The OpenCode provider issues (#2148, #2149, #2150) signal growing demand for local-model/provider flexibility. Users are hitting real pain points as they try to deploy NanoClaw with non-Anthropic backends. The OneCLI identifier validation bug (#2159) suggests rapid v2 iteration is outpacing validation contract updates.

## Bugs & Stability

**High Severity (5 issues):**

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| #2150 | OpenCode: `wrapPromptWithContext` sends literal `@./...md` lines — agent runs without instructions | None yet |
| #2148 | OpenCode: `proc.kill('SIGKILL')` leaks binary, holds port 4096 — container becomes unusable | None yet |
| #2147 | Host sweep: orphan `processing_ack` rows survive `kill-ceiling`, locking sessions (persists after #209061f) | None yet |
| #458 | *Closed* — Agent containers had unrestricted network access (risk with `bypassPermissions` mode) | Closed without visible fix PR |
| #457 | *Closed* — Command injection via shell string interpolation in `stopContainer()` | Closed without visible fix PR |

**Medium Severity (1 issue):**

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| #2149 | OpenCode: hardcoded 90s idle timeout breaks local-model setups (silent breakage on slow inference) | None yet |

**Low/Other (2 issues):**
- #1973 (Closed): PATH not propagated to bash subprocess — fixed by PR #2055
- #2159 (Open): OneCLI identifier validation rejects underscores — no fix yet

**Stability Assessment:** The OpenCode provider has *three* concurrent high/medium bugs (#2148, #2149, #2150), making it effectively broken for production use. The host sweep persistence bug (#2147) is a serious operational concern that requires manual DB intervention. The security fixes from #458 and #457 appear to have been resolved, but the fix mechanism is not clearly visible in this data—this could indicate fixes landed in the container runtime PRs or via internal commits.

## Feature Requests & Roadmap Signals

**Explicit Feature Requests (based on opened issues):**
- **OpenCode/local-model support** (#2148, #2149, #2150): Users want to run with local/alternative LLM providers. The three bugs filed today are all in the OpenCode provider, suggesting this is an actively developed feature path.
- **Configurable idle timeouts** (#2149): The hardcoded 90-second timeout is a concrete ask for configurability.
- **Container network restrictions** (#458, closed): Formalized security hardening for agent containers.

**Predictions for Next Version:**
1. **OpenCode provider stabilization** — The three bugs filed today will likely be the top priority, as they represent a major feature path that's currently broken.
2. **Setup flow completion** — The stacked PR chain from `gabi-simons`/`alipgoldberg` (PRs #2101–#2158) is nearing landing. Once merged, v2 setup will have per-step env var reuse, root-user warnings, agent auto-deletion, and polished UI splash screens.
3. **OneCLI identifier validation fix** — The underscore vs `[a-z0-9-]` mismatch (#2159) will need a quick fix, likely moving to underscore-compatible validation or changing ID generation.
4. **Host sweep escalation fix** — The orphan `processing_ack` issue (#2147) is a production blocker; expect a fix PR within days.

## User Feedback Summary

**Pain Points Expressed in Issues:**
- **"Agent operates without instructions"** (#2150) — Silent context loss from OpenCode provider is the most serious user-facing bug.
- **"Container becomes unusable"** (#2148) — Port 4096 leak from SIGKILL makes the OpenCode provider fail permanently after one timeout.
- **"Locks a session out of all message processing"** (#2147) — Manual DB edit required; this is a showstopper for production deployments.
- **"Setup fails silently"** (#1973, closed) — PATH propagation issue caused "onecli not found" errors on fresh installs. Now fixed by PR #2055.

**Satisfaction Signals:**
- High PR merge velocity (37 closed) suggests responsive maintainers
- Security issues #458/#457 were acknowledged and closed, showing commitment to hardening
- The stacked setup PRs indicate polish-focused development — the team cares about first-run experience

**Dissatisfaction Signals:**
- Four open high-severity bugs (three OpenCode, one host sweep) suggest quality regressions in the providers branch
- The OpenCode provider, if it's a new feature, was released with significant defects

## Backlog Watch

**Issues requiring maintainer attention (no activity, high impact):**

1. **#2147** (Host sweep: orphan `processing_ack` rows) — Opened today, 0 comments, high severity. Blocks all message processing. Needs immediate triage.
2. **#2148** (OpenCode: port leak via SIGKILL) — Opened today, 0 comments, high severity. Makes OpenCode provider unusable after one timeout.
3. **#2149** (OpenCode: hardcoded 90s timeout) — Opened today, 0 comments, medium severity. Breaking for local models.
4. **#2150** (OpenCode: literal `@./...md` lines) — Opened today, 1 comment, high severity. Silent context loss.
5. **#2159** (OneCLI identifier validation) — Opened today, 0 comments. Blocks agent creation in v2.

**Long-standing items:**
- None visible in this data; the issues are all from the last 2 days (April 24–30) or resolved.

**Recommendation:** The maintainers should prioritize a coordinated fix for the OpenCode provider (issues #2148, #2149, #2150) followed by the host sweep persistence issue (#2147), as these directly impact production usability. The OneCLI validation fix (#2159) is a simple validation regex vs ID generation mismatch that should be a quick follow-up.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Based on the provided GitHub data for NullClaw (source: github.com/nullclaw/nullclaw), here is the project digest for **2026-05-01**.

---

### NullClaw Project Digest — 2026-05-01

**1. Today's Overview**
The NullClaw project is in a **high-activity stabilization and feature delivery phase**. While there were zero new issues or releases in the last 24 hours, the team merged **6 pull requests** and has **3 new open PRs** under review. The majority of activity centers on fixing critical regressions introduced by the Zig 0.16 migration, specifically around HTTP/1.1 keep-alive blocking and Mattermost channel functionality. Simultaneously, the project is delivering major architectural enhancements, including a new trigger-based tool prioritization system and an updated Agent Skills RFC 0.2.0 support. Overall project health appears strong, with a clear focus on both fixing production bugs and expanding the agent framework.

**2. Releases**
**None.** No new releases were published today. The previous release remains the latest stable version.

**3. Project Progress (Merged/Closed PRs)**
Six PRs were merged or closed today, representing a mix of new features and critical bug fixes:

- **Agent Behavior (High Priority):** [#836](https://github.com/nullclaw/nullclaw/pull/836) *feat(agent): trigger-based tool prioritization* — Merged. The agent turn loop now automatically injects priority hints (`[PRIORITY: Please call the {tool} tool immediately]`) into the LLM context based on user trigger keywords.
- **Tool Customization (Architecture):** [#835](https://github.com/nullclaw/nullclaw/pull/835) *feat(tools): implement system_prompt and enabled overrides* — Merged. Extended the `Tool` struct to support dynamic prompt overrides and config-based tool disabling.
- **Configuration Schema:** [#834](https://github.com/nullclaw/nullclaw/pull/834) *feat: add tool customization config schema* — Merged. Added `ToolCustomization` struct and expanded `ToolsConfig` with new fields for fine-grained control.
- **Skills System:** [#831](https://github.com/nullclaw/nullclaw/pull/831) *fix(skills): support Agent Skills RFC 0.2.0 and harden web skill fetch* — Merged. Updated web skill discovery to RFC 0.2.0, adding `sha256:` digest verification and `.tar.gz` support.
- **HTTP Compatibility:** [#876](https://github.com/nullclaw/nullclaw/pull/876) *fix(compat): replace readSliceShort with readVec in Stream.read* — Merged. Fixed a blocking bug where HTTP/1.1 keep-alive clients (curl) would hang after headers.
- **Network Stability:** [#873](https://github.com/nullclaw/nullclaw/pull/873) *fix: Zig 0.16 Mattermost empty-body POST and gateway accept-loop CPU spin* — Merged. Addressed two production regressions: 100% CPU spin and silent Mattermost messaging failures.

**4. Community Hot Topics**
- **High-Severity Regression Discussion:** PR [#873](https://github.com/nullclaw/nullclaw/pull/873) was the most critical piece of community attention this cycle. It flagged a **"High-severity regression"** affecting all Mattermost-connected agents. The community's underlying need is clear: **production reliability following major language migrations** (Zig 0.16). Users running daemon-mode agents were experiencing 100% CPU usage and complete silent failures.
- **Feature Consensus:** The batch of PRs from *manelsen* ([#834](https://github.com/nullclaw/nullclaw/pull/834), [#835](https://github.com/nullclaw/nullclaw/pull/835), [#836](https://github.com/nullclaw/nullclaw/pull/836)) generated no comments but represent a high demand for **configurable agent behavior** (tool prioritization and customization).

**5. Bugs & Stability**
- **[CRITICAL - FIXED]** *100% CPU Spin on Gateway Thread* — Addressed in PR [#873](https://github.com/nullclaw/nullclaw/pull/873). The `accept-loop` on the gateway thread was busy-spinning on EAGAIN after the Zig 0.16 migration, causing total CPU utilization on daemon-mode agents.
- **[CRITICAL - FIXED]** *Silent Mattermost Messaging Failure* — Addressed in PR [#873](https://github.com/nullclaw/nullclaw/pull/873). Every POST request to Mattermost was sending an empty body due to a `toArrayList()` ordering bug in the allocating writer.
- **[HIGH - FIXED]** *HTTP/1.1 Keep-Alive Blocking* — Addressed in PR [#876](https://github.com/nullclaw/nullclaw/pull/876). `curl` clients would hang indefinitely after headers because `readSliceShort` blocked on a full buffer, failing to handle HTTP keep-alive behavior.
- **[HIGH - OPEN]** *POSIX thread.sleep OS-level suspension* — PR [#878](https://github.com/nullclaw/nullclaw/pull/878) is open. The current `thread.sleep()` call issues a cooperative yield instead of actually suspending the OS thread, potentially causing high CPU usage in polling scenarios.
- **[MEDIUM - OPEN]** *Mattermost writer buffer ordering* — PR [#877](https://github.com/nullclaw/nullclaw/pull/877) is open. A similar `toArrayList()` ordering issue exists in the Mattermost channel implementation, risking continued silent body failures.

**6. Feature Requests & Roadmap Signals**
- **Trigger-Based Tool Prioritization (Delivered):** PR [#836](https://github.com/nullclaw/nullclaw/pull/836) introduces a system where specific keywords in user input can force the agent to call a specific tool. This addresses the user need for **deterministic agent behavior** in critical workflows.
- **3-Tier Security Risk Model (In Review):** PR [#875](https://github.com/nullclaw/nullclaw/pull/875) proposes a new security risk tier for network-capable commands (`curl`, `wget`, `scp`). This is likely for the next release, addressing user complaints (closes #167) about `curl` being unusable even in supervised mode.
- **Agent Skills RFC 0.2.0 (Delivered):** PR [#831](https://github.com/nullclaw/nullclaw/pull/831) signals a commitment to interoperability. Users can now install skills from published `.tar.gz` artifacts with SHA256 verification.
- **Prediction for Next Version:** Expect the **3-tier security classification** (PR #875) to be merged, along with the **Mattermost writer fix** (PR #877) and the **POSIX thread.sleep fix** (PR #878).

**7. User Feedback Summary**
- **Pain Points:**
    - *Production Instability:* The Zig 0.16 migration introduced silent, high-severity bugs. Users running Mattermost agents or using `curl` to interact with the agent experienced complete failure or 100% CPU usage without clear error messages.
    - *Tool Flexibility:* Users wanted the ability to disable specific tools (`enabled: false`) and force the agent to use a particular tool via trigger keywords. These needs are now addressed in PRs #834, #835, and #836.
- **Satisfaction Indicators:**
    - The rapid merging of fixes (PRs #873 and #876 were opened and closed within 2-3 days) indicates strong maintainer responsiveness to production issues.
    - The security community appears engaged, with PR #875 directly addressing a previously closed issue (#167) regarding `curl` usability.

**8. Backlog Watch**
- **No long-ignored items detected.** The most critical issue (#167, tool risk classification) has an open PR (#875) from yesterday. The oldest open PRs (#877, #878, #875) were all created on April 30, 2026—only **1 day old**. The project appears to be keeping its backlog very short and responsive.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-01

## Today's Overview

The IronClaw project is in an intense **architecture migration phase**, with 38 pull requests updated and 26 issues touched in the last 24 hours. The dominant theme is the **Reborn architecture landing**, a massive architectural overhaul tracked in EPIC #2987 that is now executing across dozens of grouped PRs and sub-issues. Activity is very high, with 20 PRs merged/closed and 18 remaining open, while 25 issues remain active. The project is simultaneously experiencing **live canary failures** and new user-reported bugs, suggesting the Reborn migration is introducing some instability. There are no new releases today.

## Releases

**No new releases** in the last 24 hours. The project is operating from source/main during the Reborn migration.

## Project Progress

**20 PRs merged or closed today**, reflecting significant forward momentum:

**Reborn Architecture (core contributors):**
- **PR #3120** (merged) — Made host runtime cancel and health real, replacing stubs with real process cancellation and runtime backend health probes
- **PR #3117** (merged) — Test-only follow-up covering WASM runtime failure edges (malformed bytes, valid core WASM rejected as non-component-model)
- **PR #3095** (merged) — Added the **host runtime contract facade** (`ironclaw_host_runtime`), a contract-first API for upper Reborn layers
- **PR #3098** (merged) — Added **shared runtime HTTP egress**, moving DNS/SSRF checks, limits, and redaction out of WASM-only code
- **PR #3130** (closed, superseded by #3131) — Trace Commons client addition (reopened as improved #3131)

**CI & Infrastructure (core contributors):**
- **PR #3119** (merged) — Disabled canary issue creation to reduce noise from known failures
- **PR #3104** (open) — Cutting over workflows for main merge queue, replacing old staging-first rollout

**Community Contributions:**
- **PR #3124** and **#3125** (closed) — Abound demo updates: empty notifications and silent success contract
- **PR #3105** (open) — Telegram channel fallback using WASM channels for headless servers (new contributor)
- **PR #1446** (open, updated) — Aliyun Coding Plan support (new contributor)
- **PR #1479** (open, updated) — NEAR OneClick WASM tool for token swaps (new contributor)

## Community Hot Topics

**Most Active Issues:**

1. **#2987 — [EPIC] Track Reborn architecture landing strategy** (43 comments)  
   The central coordination issue for the entire Reborn migration. 43 comments in 3 days demonstrates intense planning and execution activity. This is the project's top priority.  
   https://github.com/nearai/ironclaw/issues/2987

2. **#3067 — Reborn vertical-slice integration test suite** (10 comments)  
   Testing strategy for the new architecture, indicating awareness of quality risks.  
   https://github.com/nearai/ironclaw/issues/3067

3. **#3103 — High ASCII TUI display issue** (7 comments)  
   User reporting a regression in the new build's TUI, showing visible impact on end users.  
   https://github.com/nearai/ironclaw/issues/3103

**Most Active Pull Requests:**
- **#3131** — Trace Commons client (XL size, core contributor): Adding usage tracking infrastructure  
- **#3104** — CI merge queue cutover (core): Infrastructure modernization  
- **#3129** — Reasoning trace plumbing (M size): Adds chain-of-thought emission for multiple model providers

## Bugs & Stability

**High Severity:**
- **#3116, #3115, #3113** — Live canary failures (public-smoke, persona-rotating, provider-matrix anthropic)  
  Three independent canary lanes failing on the same commit (`2a65da7c`). The `persona-rotating` lane failure suggests either a regression in agent loop behavior or an upstream API issue. PR #3119 (merged) disabled automatic issue creation for these, but the underlying failures remain unaddressed.  
  https://github.com/nearai/ironclaw/issues/3116  
  https://github.com/nearai/ironclaw/issues/3115  
  https://github.com/nearai/ironclaw/issues/3113

**Medium Severity:**
- **#3142** — Mission creation fails with integer type error: `'cooldown_secs' must be an integer, got "120"`  
  A string-wrapped integer is not being parsed, indicating a regression in the mission API input validation.  
  https://github.com/nearai/ironclaw/issues/3132

- **#3108** — Web IDE API keys return 401 "Session not found"  
  Authentication regression in the gateway, potentially affecting all web IDE users.  
  https://github.com/nearai/ironclaw/issues/3108

**Low Severity:**
- **#3103** — High ASCII TUI display broken in new build  
  Visual regression in terminal UI, scrolling issues on some TTYs.  
  https://github.com/nearai/ironclaw/issues/3103

- **#3128** — Gmail extension authentication returns 502 on callback  
  Intermittent OAuth flow failure, works through settings but not chat assistant.  
  https://github.com/nearai/ironclaw/issues/3128

- **#3133** — Email mission fails with Gmail  
  Mission cannot use Gmail, likely related to #3128's authentication issues.  
  https://github.com/nearai/ironclaw/issues/3133

## Feature Requests & Roadmap Signals

The **Reborn architecture** dominates the roadmap (see EPIC #2987, with ~18 sub-issues filed in the last 3 days). Key upcoming features visible in open issues/PRs:

**Likely Next Version (v1.x / post-Reborn):**
- **Configuration-as-Code** (#3036) — Declarative tenant blueprints and use-case harnesses for operators
- **Reborn memory storage/search service** (#3118) — Native Reborn memory subsystem replacing legacy workspace adapters
- **Separate `ironclaw-reborn` binary** (#3069) — Co-shipping a standalone Reborn executable
- **Product-surface migration** (#3031) — Preserving v1 user behavior on Reborn interfaces

**Longer-term roadmap signals:**
- **Scalable capability permission UX** (#3127) — Policy resolver design for multi-tenant deployments
- **AgentLoopDriver and run-class profiles** (#3107) — Supporting multiple execution models (chat, coding, routine)
- **Trace Commons integration** (PR #3131) — Usage tracking and credit accounting infrastructure

## User Feedback Summary

**Pain Points:**
- Web IDE authentication broken (#3108): API keys returning 401 — blocks all gateway-dependent workflows
- TUI rendering regression (#3103): High ASCII display issues make the terminal experience poor
- Gmail integration flaky (#3128, #3133): OAuth callback 502 errors and mission failures
- Mission creation type error (#3132): A simple type validation bug breaks mission automation

**Satisfaction Signals:**
- The high number of community PRs (5 from non-core contributors) indicates active community engagement
- New contributor PRs for Aliyun support (#1446), NEAR OneClick (#1479), and Telegram channel improvements (#3105) show broadening ecosystem interest

**Use Cases Visible in Issues:**
- Automated email missions (#3133) — recurring business workflow
- Gmail integration via chat assistant (#3128) — personal productivity
- Terminal-based operation on headless servers (#3105) — server/DevOps use case
- Developer web IDE workflows (#3108)

## Backlog Watch

**Long-unanswered issues requiring attention:**

1. **#1764 — Abound demo PR (open since 2026-03-30)**  
   XL-size PR with Responses API, credential injection, skills, guardrails. Has been open 31 days with no recent maintainer activity. Valuable integration work that may be blocked by Reborn migration priorities.  
   https://github.com/nearai/ironclaw/pull/1764

2. **#1446 — Aliyun Coding Plan support (open since 2026-03-20)**  
   New contributor PR adding a major cloud provider integration. 41 days without merge. Could set precedent for more regional cloud provider contributions.  
   https://github.com/nearai/ironclaw/pull/1446

3. **#1479 — NEAR OneClick WASM tool (open since 2026-03-20)**  
   DeFi integration for token swaps on NEAR. Updated recently (2026-04-30), suggesting the contributor is still active.  
   https://github.com/nearai/ironclaw/pull/1479

**Observation:** Several community PRs have been open for 4-6 weeks with no maintainer feedback. While the Reborn migration is an understandable priority, the lack of attention to community contributions risks contributor churn. A "community PR triage" day or explicit Reborn migration status communication would help manage expectations.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for 2026-05-01.

---

## LobsterAI Project Digest — 2026-05-01

### 1. Today's Overview
The project maintains high activity, with **21 pull requests** updated in the last 24 hours, including **9 closures/merges** and **12 open**. The single active issue signals a specific usability blocker that may require immediate UI attention. The maintainer team, led primarily by `liuzhq1986`, has driven a significant cleanup of technical debt, fixing race conditions, Windows-specific file-handling bugs, and UI overflow issues. While no new releases were created, the volume of fixes indicates preparation for a stable release candidate. Overall project health appears strong, with frequent contributions and a focused response to both internal code quality and external user-facing bugs.

### 2. Releases
**None** — No new versions were published on this date.

### 3. Project Progress
Nine pull requests were merged or closed in the last 24 hours, covering key stability and UX improvements:

- **#1868** — Fix: WeChat image size was too large and lacked a click-to-preview feature. Now constrained in Markdown rendering for IM channels.
- **#1869** — Fix: Gateway could hang forever on failed LLM requests, blocking subsequent messages. Now sends `chat.abort` before cleanup to prevent session deadlock.
- **#1857** — Fix: Switching models on the home page caused a hard gateway restart, which could terminate active conversations.
- **#1855** — Fix: Long model names in the ModelSelector UI were breaking the header layout; now truncated with ellipsis.
- **#1851** — Fix: On Windows, deleting a skill directory could fail because file watchers were still active. Watchers are now released before deletion.
- **#1841** — Fix: NSIS installer used string comparison for exit codes; now uses integer comparison and adds better diagnostic output.
- **#1840** — Fix: Config updates were overwriting stored provider settings with stale defaults if `init()` had previously failed to load from the store.
- **#1864** — Feature: Upgraded the YoudaoNote skill (internal functionality).
- **#1829** — Fix: Removed an inaccurate "auto-restart" hint from the update installer’s UI state.

### 4. Community Hot Topics
The only active issue (and thus the community’s primary focus) is:

- **#1878** — ["IM机器人 微信接口 配置扫码后无法输入验证码"](https://github.com/netease-youdao/LobsterAI/issues/1878) (Open, 1 comment) — The user reports that WeChat scanning now requires inputting a 6-digit verification code, but the LobsterAI client provides no UI field for it. This blocks the entire WeChat IM bot configuration.
  - **Underlying need**: The user expects a simple authentication flow. The lack of an input prompt is a fundamental UX gap for WeChat channel integration. A small patch to add a modal or input field is likely the necessary fix.

**Note**: All 20 top PRs have zero comments and zero reactions, indicating that community discussion is minimal; most engagement appears to be behind the scenes between contributors.

### 5. Bugs & Stability
**High Severity**:
- **#1878** – WeChat IM authentication flow is broken; users cannot complete setup. No fix PR exists yet. This is the most critical user-facing bug reported.
- **#1869** (closed) – Session deadlock on gateway retries was a critical stability issue; the fix was successfully merged today.

**Medium Severity**:
- **#1868** (closed) – WeChat images rendered at full size were blocking chat readability; now fixed.
- **#1851** (closed) – Deletion of skill directories on Windows could fail silently on Windows due to locked file handles; now fixed.

**Low Severity**:
- **#1855** (closed) – UI header overflow from long model names; fixed.
- **#1840** (closed) – Config loss on failed initial load; fixed.

**Unfixed Stale Bugs** (see Backlog Watch):
- **#828** – Path traversal vulnerability in `localfile://` handler.
- **#826** – Missing URL protocol validation for `shell.openExternal`.

### 6. Feature Requests & Roadmap Signals
A substantial cache of **stale but notable features** is now visible from late March. These suggest the community and contributors are pushing for more advanced, enterprise-grade capabilities:

- **#835** – Batch MCP server creation via JSON paste (Claude Desktop config format support).
- **#838** – Per-channel IM model override (e.g., different models for WeChat vs. Telegram).
- **#842** – Security environment scanning with a friendly UI (skill isolation, permissions management).
- **#830** – SQLite performance optimization (WAL mode, cache tuning) for faster local database operations.
- **#827** – Duplicate skill installation prevention.
- **#836** – Smart handling of skill imports (fingerprint-based identity detection).

**Prediction**: The per-channel IM model override (#838) and SQLite optimization (#830) are likely candidates for the next minor release, as they directly address common performance and multi-tenancy needs.

### 7. User Feedback Summary
- **Pain Point (critical)**: WeChat verification code input field missing — user is completely blocked from using the feature.
- **Pain Point (UX)**: WeChat images were too large and non-previewable (fixed today).
- **Satisfaction**: The volume of closed PRs in a single day suggests a responsive team that values polish and stability.
- **Known dissatisfaction (latent)**: Several security and performance PRs have been stale since March, with no maintainer comment. Users who submitted these may feel ignored.

### 8. Backlog Watch
The following issues/PRs are **high-importance but have received no maintainer response** in over a month:

- **#826** [Security] – URL protocol validation for `shell.openExternal` (Stale since 2026-03-25).
- **#828** [Security] – Path traversal in `localfile://` protocol (Stale since 2026-03-25).
- **#827** [Feature] – Duplicate skill prevention (Stale).
- **#830** [Performance] – SQLite database optimization (Stale).
- **#835** [Feature] – JSON paste for MCP servers (Stale).
- **#836** [Bug/Feature] – Duplicate skill import handling with fingerprinting (Stale).
- **#838** [Feature] – Per-channel model override for IM bots (Stale).
- **#841** [Stability] – Overlapping runtime poll cycles (Stale).
- **#842** [Feature] – Security environment scanning (Stale).
- **#847** [Bug] – Markdown: single tilde ranges rendered as strikethrough (Stale).
- **#848** [Performance] – Batch config writes in transactions (Stale).

**Risk**: These 11 stalled items represent a growing maintenance mountain. If left unaddressed, the project may accumulate technical debt in security, performance, and features that will be harder to resolve later.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-01

## 1. Today's Overview

Moltis shows **intense activity** today with 21 PRs updated (18 merged/closed) and 10 issues cycled (6 closed). The team released **build 20260430.01** and merged major feature work including remote sandbox support, four new provider integrations (DeepInfra, OpenCode Zen, Google Gemini, and 9router compatibility), multi-SDK foundations, and telemetry infrastructure. However, **four new chat-related UI bugs were opened** in the last 24 hours—two by user `vvuk`—suggesting a regression in the chat layout and scrolling subsystem. Developer velocity is high, but the burst of UI bugs warrants close monitoring.

## 2. Releases

**New release: `20260430.01`**

- **Delivery**: Published 2026-04-30.
- **Scope**: No explicit changelog was provided in the release payload; however, based on merged PRs preceding this release, it likely includes the multi-provider expansion (Zen, Google Gemini, DeepInfra), the sandbox architecture revamp, SDK foundation code, telemetry for skills usage, and the chat scrolling fix for Issue #922.
- **Breaking changes**: Not documented in release data.
- **Migration notes**: None provided.

## 3. Project Progress

Today **18 PRs were merged or closed**, spanning infrastructure, UI, providers, and developer experience:

### Providers & Model Routing
- **PR #944 (OPEN)** — Adds Zen (opencode.ai) multi-protocol provider (GPT, Claude, Gemini via single API key).
- **PR #33 (CLOSED)** — Google Gemini provider with API key + OAuth support and tool calling.
- **PR #934 (CLOSED)** — DeepInfra provider (8-model catalog) + sandbox GPU passthrough.
- **PR #266 (CLOSED)** — Feature request for Native 9router support (issue closed; PR likely forthcoming).

### Sandbox & Infrastructure
- **PR #942 (OPEN)** — Remote & multi-backend sandbox (Vercel, Daytona, Firecracker) — critical for cloud deployments without Docker-in-Docker.
- **PR #940 (CLOSED)** — Graceful SIGTERM handling for Docker and systemd shutdown.
- **PR #921 (CLOSED)** — Auto-trigger code indexing on file changes (Spec 007, Phase 1+2).

### Telemetry & Insights
- **PR #935 (CLOSED)** — Per-skill usage telemetry persisted to `skills-usage.json`; surfaced in `/insights` and Web UI.

### UI/UX
- **PR #932 (CLOSED)** — Message action bar (Copy, Retry, Fork) on assistant responses.
- **PR #943 (OPEN)** — Hide voice buttons when STT/TTS disabled.
- **PR #933 (CLOSED)** — Auto-generate session titles from conversation (lightweight LLM call).
- **PR #926 (CLOSED)** — Five new slash commands: `/btw`, `/fast`, `/insights`, `/steer`, `/queue`.

### SDKs
- **PR #288 (CLOSED)** — TypeScript, Python, and Go SDK foundations with GraphQL schema and CI.
- **PR #259 (CLOSED)** — CI migration to Blacksmith runners (faster GitHub Actions execution).

### Dependency & Maintenance
- **PR #928 (CLOSED)** — Bump `marked` npm dependency.
- **PR #925 (CLOSED)** — Removed scroll-hijacking ResizeObserver (fixes #922).

## 4. Community Hot Topics

| Item | Type | Comments | Reactions | Underlying Need |
|------|------|----------|-----------|-----------------|
| **Issue #922** — Chat scrolling isn't working | Closed Bug | 3 | 0 | Users lost ability to scroll up during streaming; **fixed in PR #925**. |
| **Issue #266** — Native 9router support | Closed Feature Request | 2 | 0 | Users want a universal AI proxy/router to switch between providers seamlessly without separate setup. |
| **PR #942** — Remote & multi-backend sandbox | Open PR | 🔥 High activity | — | Community contributors need cloud-compatible sandboxing (DigitalOcean, Fly.io, Render). |
| **PR #944** — Zen provider | Open PR | Active | — | Demand for cost-effective, zero-retention model proxy with multi-model access. |

**Analysis**: The 9router request (#266) and Zen provider PR (#944) signal strong community interest in **provider-agnostic routing** and **cost optimization**—users want to freely switch between models without managing multiple API keys or providers.

## 5. Bugs & Stability

### High Severity
- **Issue #947** (OPEN) — Unspecified bug (empty description). **No fix PR yet**. ⚠️ Needs maintainer triage.
- **Issue #946** (OPEN) — Chat does not auto-scroll when at end. User `vvuk`. **No fix PR yet**. ⚠️ Regression from scrolling fixes.
- **Issue #945** (OPEN) — Chat layout broken (too wide). User `vvuk`. **No fix PR yet**. ⚠️ Layout regression.

### Medium Severity
- **Issue #937** (OPEN) — Settings/terminal tmux error. **No fix PR yet**.

### Resolved
- **Issue #922** — Chat scrolling fixed by **PR #925** (removed ResizeObserver).
- **Issue #938** — System-notice text overflow fixed by **PR #941** (reduced border-radius).
- **Issue #939** — SIGTERM not handled; fixed by **PR #940** (graceful shutdown).
- **Issue #919** — Model discovery timeout fixed by **PR #931** (lightweight catalog check).
- **Issue #927** — MCP page missing re-authenticate button fixed (PR not identified in data).

**Assessment**: Three open UI bugs (#945, #946, #947) require immediate attention—they impact the core chat experience. The `vvuk` reports indicate a potential regression from the scroll fixes (#925) or the new message action bar (#932).

## 6. Feature Requests & Roadmap Signals

### What's Likely in Next Release
- **Native 9router support** (#266 closed as feature request) — Expect a provider PR soon.
- **Zen provider** (#944 OPEN) — Multi-model proxy likely to land in next build.
- **Voice UI polish** (#943 OPEN) — Hide voice buttons when disabled.
- **Remote sandbox GA** (#942 OPEN) — Critical for cloud deployments.

### User-Requested Features (Backlog)
- **Issue #946** — Auto-scroll at end of chat (regression).
- **Issue #937** — Tmux integration in settings/terminal.

### Roadmap Signal
The merged SDK PR (#288) and TUI onboarding flow (#201) suggest Moltis is investing in **developer ecosystem** (SDK support) and **first-run experience** (TUI onboarding), moving beyond web-only UX toward full CLI/TUI parity.

## 7. User Feedback Summary

### Pain Points
- **"Chat scrolling isn't working"** (#922) — Resolved, but #946 suggests residual issues.
- **"Chat layout broken — too wide"** (#945) — Immediate usability blocker.
- **"Settings/terminal tmux error"** (#937) — Terminal workflow friction for power users.
- **"Model discovery fails after 30 seconds"** (#919) — Resolved via lightweight probe (#931).

### Satisfaction Signals
- High velocity of PR merges indicates responsive maintainers.
- New providers (Zen, DeepInfra, Gemini) address user demand for model choice and cost savings.
- SDK foundations (TypeScript, Python, Go) welcomed by developer community.

### Use Cases Emerging
- **Self-hosted on cloud platforms** — Remote sandbox PR (#942) directly addresses DigitalOcean/Fly.io users.
- **Multi-provider power users** — 9router interest + Zen + DeepInfra = strong demand for provider switching.
- **Session management** — Auto-generated titles + action bar (Copy/Retry/Fork) improve long-session workflows.

## 8. Backlog Watch

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| **Issue #266** — 9router support (CLOSED Feb 28 → reopened/updated Apr 30) | 2+ months | Closed as feature request (not implemented) | High community interest; expect PR soon. |
| **PR #259** — Blacksmith CI migration (Feb 28 → merged Apr 30) | 2 months | **Delayed** — Took 2 months to merge. Pipeline reliability may be impacted. | Build speed improvement now active. |
| **Issue #937** — Tmux error (OPEN, no comments) | 1 day (but no triage) | No assignee, no fix | Terminal users blocked on settings page. |
| **Issue #947** — Empty bug report (OPEN) | Created today, 0 comments | Needs triage | Cannot assess severity without description. |

**Maintainer attention needed**: **Issue #947** (empty bug) and **Issue #946/#945** (chat layout regressions) require immediate triage. The `vvuk` reports suggest a blocking regression in core UX—should be prioritized above feature work.

---

*Data snapshot: 2026-05-01. Sources: github.com/moltis-org/moltis Issues, PRs, Releases.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for **CoPaw** (formerly QwenPaw, tracked at `github.com/agentscope-ai/CoPaw`) for **2026-05-01**.

---

## CoPaw Project Digest — 2026-05-01

### 1. Today's Overview
The project is in a **high-velocity maintenance and stabilization phase**, closing 33 issues and merging 13 PRs in the last 24 hours. A patch release **v1.1.5.post1** was shipped, primarily to address a critical **path traversal security vulnerability** (#3955) and to introduce interactive approval cards for the Feishu channel. Community activity is intense, with significant attention on **WeCom (WeChat Work) reliability**, **frontend performance on long conversations**, and **workspace/identity management**. The maintainer team is responsive, merging hotfixes rapidly, though several open issues highlight growing complexity around multi-agent workflows and cross-channel integration.

### 2. Releases
**New Release: v1.1.5.post1**
- **Changelog Highlights:**
    - **Security Fix:** Rejects absolute static file paths to prevent path traversal (Windows server arbitrary file read, fix PR #3973).
    - **New Feature:** Introduced `FeishuCardHandler` — tool_guard approval upgraded from text commands to interactive buttons (PR #3941 & #3982).
    - **Bug Fixes:** Migrated deprecated Ant Design v5 APIs to eliminate console warnings.
- **Upgrade Notice:** Users on v1.1.4 or v1.1.5 are strongly recommended to upgrade immediately due to the security fix (CVE-like severity for path traversal).
- **Migration Notes:** No breaking configuration changes; users of the Feishu approval flow will find the new interactive card enabled after upgrade.

### 3. Project Progress (Merged/Closed PRs)
**13 PRs merged or closed today**, indicating a healthy fix-forward velocity:
- **Security & Stability:**
    - `#3973`: Path traversal mitigation.
    - `#3978` & `#3300`: WeCom cross-loop runtime error fixes (asyncio event loop conflicts).
    - `#3963`: WeCom double-reconnect race condition fix.
    - `#3950`: WeCom "Thinking..." stuck state prevented by keeping placeholder streams alive.
- **Console/Frontend:**
    - `#3958` & `#3959` (first-time contributors): Fixed chat session loss on agent switching and page navigation — addresses a long-standing user complaint (#2034).
    - `#3960`: Fixed CodeMirror line wrapping in tool call input/output blocks.
    - `#3981`: Cleaned up 5 of 11 deprecated antd API warnings in the chat page.
- **Integration & Features:**
    - `#3948`: Added `share_session_in_group` toggle for WeCom group chats.
    - `#3941`: Feishu interactive card handler for tool approval.
    - `#3982`: Feishu approval card now links to docs on how to subscribe `card.action.trigger`.
- Identity fix (#3605) for WeChat/Weixin channel remains **open** under review.

### 4. Community Hot Topics
| Issue/PR | Type | Comments | Underlying Need |
|----------|------|----------|-----------------|
| [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) | Security Bug | 12 | Urgent: Windows arbitrary file traversal. Fix immediately in v1.1.5.post1. |
| [#3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) | Bug | 10 | Debian/GNU/Linux 12: Page freeze on saving model settings under non-root users. Root cause unclear but reproducible. |
| [#2757](https://github.com/agentscope-ai/QwenPaw/issues/2757) | WeCom Disconnection | 7 | Chronic WeCom channel disconnect requiring manual re-save. Multiple fix PRs in flight (#3963, #3950). |
| [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) | Performance | 6 | Severe scroll lag after 200+ turn conversations — users building entire projects in a single session. Requests frontend virtualization. |
| [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) | Identity Bug | 5 | Agent workspace identity confusion via DingTalk channel — critical for multi-agent setups. |

**Analysis:** The most urgent community concerns cluster around **channel stability** (WeCom disconnects, Discord identity mixing) and **long-session frontend performance**. There is a clear pattern of users pushing CoPaw to its limits as a full-day development assistant, not just a chat tool.

### 5. Bugs & Stability
**Severity: Critical**
- **Path Traversal (#3955):** Arbitrary file read on Windows servers. **Fixed** in v1.1.5.post1. Users on earlier versions should upgrade immediately.
- **Session Cancelation (#3976):** `UnifiedQueueManager` incorrectly kills active task after 10-minute idle timeout. Result: AI work is lost. **No fix PR in flight yet** — high risk for long-running tasks.

**Severity: High**
- **Workspace Identity Confusion (#3957):** Agent receiving messages from another agent via DingTalk channel changes its own workspace. Causes "who am I?" confusion in multi-agent setups.
- **Background Service on Windows (#3979):** Closing the desktop client kills the backend service. Users want a system tray minimization mode.
- **Memory Search Crash (#3977):** `memory_search` errors out with `AttributeError: 'list' object has no attribute 'get'`. Blocks knowledge retrieval.

**Severity: Medium**
- **Debian Save Freeze (#3853):** UI freeze under non-root user. Workaround exists (run as root).
- **Running Config Returns 404 (#3980):** New API endpoint `/api/workspace/running-config` is not wired correctly in v1.1.5.

### 6. Feature Requests & Roadmap Signals
**Most Likely Next Version:**
- **Separate Workspace & User Data (#3967):** Users want a clean distinction between core agent configuration (skills, tools, memory) and user documents. Currently, mis-deletion breaks the agent. This is a high-demand UX improvement.
- **Agent Self-Evolution / Hermes Integration (#3516):** A philosophical question about agent autonomous improvement. The maintainer response will signal the project’s long-term architectural direction.
- **/ralph-loop Magic Command (#3972):** A self-referential task loop for autonomous iteration until completion. Four thumbs up already — strong signal from power users.
- **Wide-screen Chat Mode (#3146):** Ability to expand chat area horizontally for better table/code viewing.

**Lower Priority (but vocal):**
- Real-time timestamps in chat UI (#3038).
- Clipboard paste support for images/files in Console Web (#2434).
- Extended file preview (PDF, DOCX) (#3966).

### 7. User Feedback Summary
- **Pain Points (Repeated):**
    - WeCom channel instability remains the #1 source of frustration (#3937, #2757, #3296).
    - Long conversations cause browser lag (scroll, render) — users feel forced to start new sessions, losing context (#3350, #2890).
    - Workspace management is confusing for non-technical users (#3967).
- **Satisfaction Signals:**
    - Quick turnaround on the path traversal security fix was well-noted.
    - Feishu interactive approval cards received early positive feedback for reducing friction.
- **Use Case Deepening:**
    - Users are increasingly using CoPaw for **multi-hour project-level code generation** (from scratch to v1, v2, etc.), which demands better session state persistence and performance.

### 8. Backlog Watch
| Item | Age | Status | Risk |
|------|-----|--------|------|
| [#3605](https://github.com/agentscope-ai/QwenPaw/pull/3605) — Unify WeChat/Weixin identifier | 11 days | Open, Under Review | Medium — identity bugs in WeChat channel persist without this fix. |
| [#3846](https://github.com/agentscope-ai/QwenPaw/pull/3846) — GitHub Copilot model provider support | 5 days | Open, Under Review | High value — would expand user base significantly. First-time contributor; needs maintainer review. |
| [#3886](https://github.com/agentscope-ai/QwenPaw/issues/3886) — ACP compatibility with Hermes Agent | 3 days | Closed | Resolved quickly, but similar integration issues may surface as multi-agent ecosystem grows. |
| [#2034](https://github.com/agentscope-ai/QwenPaw/issues/2034) — Chat history lost on refresh | 41 days | Closed (PR #3959) | Finally fixed after over a month. This was a major UX blocker for new users. |

**Maintainer Attention Needed:**
1. The **10-minute idle session kill** bug (#3976) needs an immediate hotfix — losing long-running tasks is a top-tier stability issue.
2. **WeCom channel stability** is being patched incrementally (#3963, #3950, #3978) but a systemic cleanup PR would reduce patch fatigue.
3. The **GitHub Copilot provider** PR (#3846) is a low-risk, high-impact feature that should be merged to attract new users.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-01

## Today's Overview

ZeroClaw shows **high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, indicating an extremely active project in a heavy development sprint. The vast majority of issues remain open (49 active vs. 1 closed), suggesting the team is prioritizing triage and discussion over immediate resolution. No new releases were cut today, consistent with the ongoing work on **schema v3 migrations**, **Multi-agent UX flow**, **web onboarding parity**, and **critical bug fixes**. The project continues to mature rapidly with multiple large PRs (XL size) in flight and a strong focus on **security, multi-instance support, and internationalization**. Community engagement is robust, with complex RFC discussions and many detailed bug reports from users.

## Releases

No new releases today. The project appears to be in a consolidation phase ahead of a likely v0.6.x release, given the volume of breaking changes being batched (schema v3, config migrations, ACP protocol updates).

## Project Progress

**Merged/Closed PRs (12 total in last 24h):** Notable closures include:
- **#3468** — `bug(build): matrix-sdk 0.16 fails to compile on Rust 1.94+` — Closed after resolution, unblocking Matrix E2EE builds for users on latest Rust
- The 11 other merged/closed PRs represent steady progress in bug fixing and incremental improvements

**Key open PRs advancing features:**
- **PR #6179** ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/6179)) — *feat(gateway,web,cli): web onboarding parity via per-property CRUD endpoints* — Major architectural change (XL size, high risk) adding HTTP CRUD surface that unifies config management across dashboard, CLI, and third-party tools
- **PR #6167** ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/6167)) — *fix(channels/acp): implement ACP protocol v1* — Critical fix (XL size, high risk) restoring connectivity with Nori and external ACP consumers; includes tool-call permission and back-channel support
- **PR #6164** ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/6164)) — *feat(cron): manually trigger cron from webui* — New user-facing capability adding `POST /api/cron/{id}/run` endpoint
- **PR #6247** ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/6247)) — *Feat/sop webhook dispatch* — Large, multi-component PR touching nearly every subsystem (agent, channel, config, cron, daemon, gateway, provider, skills, tools)

## Community Hot Topics

**Most Active Issues:**

1. **#6123** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)) — *[Bug]: default_model issue on fresh install* — **15 comments**, S1 severity. Fresh installs on LXC containers fail to detect Ollama models across hosts. A critical onboarding blocker that likely affects many first-time users.

2. **#5890** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)) — *RFC: Multi-agent UX flow — design* — **7 comments**. Now past its 7-day discussion period, awaiting core team vote. This RFC could fundamentally shape ZeroClaw's architectural direction.

3. **#5947** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/5947)) — *[Feature]: schema v3 — batch breaking field migrations* — **6 comments**. Marked as "Merge blocker" — all pending breaking config changes must land together. This is the project's highest-priority infrastructure work.

4. **#6153** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6153)) — *[Bug]: Matrix: voice transcription failed* — **6 comments**. Affects all Matrix users on Element Web/Android with voice messages. The error message is cryptic ("Unsupported audio format '.'").

5. **#5862** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)) — *[Bug]: zeroclaw does not know it can add cron* — **6 comments**. An agent awareness issue: the AI agent doesn't know it can use its own `zeroclaw cron` CLI tool.

**Underlying needs:** Users consistently struggle with (1) first-time setup and provider configuration, (2) multi-agent interactions needing formal UX design, (3) channel-specific issues (Matrix, Telegram, WhatsApp, Discord), and (4) the agent's lack of self-awareness about its own capabilities.

## Bugs & Stability

**Critical (S1) Bugs — Workflow Blocked:**

| Issue | Component | Summary | Fix PR? |
|-------|-----------|---------|---------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | provider | `default_model` fails on fresh install across LXC | None yet |
| [#6036](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) | runtime | Infinite tool-call loop on Termux/Android | Needs repro |
| [#6237](https://github.com/zeroclaw-labs/zeroclaw/issues/6237) | channel:slack | `bot_token` must be in config, not env var | None yet |
| [#6224](https://github.com/zeroclaw-labs/zeroclaw/issues/6224) | channel:whatsapp | Cron jobs can't dispatch to WhatsApp | None yet |
| [#6223](https://github.com/zeroclaw-labs/zeroclaw/issues/6223) | channel:whatsapp | `web_fetch` fails in WhatsApp Web | None yet |
| [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) | gateway, security | WebSocket bypasses ApprovalManager for supervised tools | Needs maintainer review |
| [#6206](https://github.com/zeroclaw-labs/zeroclaw/issues/6206) | provider:compatible | Onboarding fails with custom OpenAI-compatible endpoint | None yet |
| [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) | provider:openai | Onboarding asks for wrong API key type (Codex vs OpenAI) | None yet |

**High (S2) Bugs — Degraded Behavior:**
- [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) — Matrix voice transcription fails
- [#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233) — DeepSeek V4 reasoning_content dropped in multi-turn
- [#6229](https://github.com/zeroclaw-labs/zeroclaw/issues/6229) — Telegram `mention_only` doesn't suppress media responses
- [#6227](https://github.com/zeroclaw-labs/zeroclaw/issues/6227) — `zeroclaw status` hardcodes service name for multi-instance

**Notable:** The security-critical #6207 (ApprovalManager bypass) is marked `needs-maintainer-review` and should be treated as urgent, as it affects all supervised-mode deployments.

**PRs that fix related issues:**
- PR #6221 ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/6221)) — Fixes canvas store not shared across daemon subsystems (affects Telegram/Discord/Slack)
- PR #6220 ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/6220)) — Chat input lock and stop button (UX improvement/fix for #5999)
- PR #6216 ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/6216)) — Fixes cancel token leak when session deleted mid-turn

## Feature Requests & Roadmap Signals

**High-Interest Features Under Development:**
- **Multi-agent UX flow** (#5890) — RFC nearing core team vote; would define how multiple ZeroClaw agents interact
- **Schema v3** (#5947, #6017) — Breaking config changes batch, includes SQLite migration for new `[memory.postgres]` shape
- **Web onboarding parity** (PR #6179) — CRUD endpoints so web UI, CLI, and tools share config management
- **Manual cron triggers from WebUI** (PR #6164) — User-requested convenience feature
- **Smart Truncation for Telegram** (#6225) — Respect Markdown structure when splitting long messages

**Predicted for Next Release:**
- Schema v3 migration tooling (multiple blocking issues reference this)
- ACP protocol v1 stabilization (PR #6167)
- Web dashboard UX improvements (PRs #6220, #6218, #6217, #6101)
- Internationalization (PRs #6242, #6170 — zh-CN, fr, ja, es)
- HMAC tool receipts (PR #6214) — security feature already wired in core

## User Feedback Summary

**Pain Points (recurring themes):**
1. **Onboarding friction** — Multiple S1 bugs report fresh install failures. Users want a smooth "works out of the box" experience.
2. **Agent self-awareness** — The AI doesn't know about its own tools (cron, web_fetch in WhatsApp). Users expect the agent to use all available capabilities.
3. **Channel inconsistencies** — Features work in one channel but not another (canvas tool in web UI vs Telegram, cron dispatch to WhatsApp). This fragmentation frustrates users.
4. **Telegram media handling** — `mention_only` flag doesn't filter media messages, causing unwanted bot responses in groups.
5. **Multi-instance confusion** — Named instances report "stopped" status due to hardcoded service names.

**Satisfaction Signals:**
- Users actively contributing fixes (e.g., #6224, #6223 have user-submitted workarounds included in issue reports)
- Community members submitting localization PRs (zh-CN) and comprehensive documentation (Raspberry Pi setup guide in PR #6203)
- Detailed bug reports with reproduction steps indicate engaged, technically savvy user base

## Backlog Watch

**Issues Needing Maintainer Attention:**
- **#5890** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)) — *Multi-agent UX flow RFC* — Awaiting core team vote per process (#5577 §8.2). This is a major architectural decision that could stall if not voted soon.
- **#6207** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6207)) — *WebSocket bypasses ApprovalManager* — `needs-maintainer-review` security bug. Critical for supervised deployments.
- **#5994** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/5994)) — *Official documentation website* — `needs-maintainer-review`. Documentation fragmentation is a recurring user pain point.
- **#6036** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6036)) — *Infinite tool-call loop on Termux/Android* — `needs-author-action`, but if reproducible, is a critical S1 bug for mobile users.
- **#3468** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/3468)) — *matrix-sdk compile failure on Rust 1.94+* — NOW CLOSED after 47 days open. Good resolution, but highlights the need for faster build compatibility fixes.

**Aging PRs:**
- **PR #5943** ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/5943)) — *Inworld TTS/STT providers* — Open since April 20, needs review. Adds valued voice capabilities.
- **PR #5945** ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/5945)) — *Honor tool_timeout_secs for HTTP SSE* — Open since April 20. Simple fix with medium risk, should be unblocked soon.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*