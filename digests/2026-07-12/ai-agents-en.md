# OpenClaw Ecosystem Digest 2026-07-12

> Issues: 460 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-12 01:29 UTC

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

# OpenClaw Project Digest — 2026-07-12

## 1. Today's Overview

OpenClaw remains highly active with 460 issues and 500 PRs updated in the past 24 hours, indicating sustained development velocity. The project closed 233 issues and merged/closed 256 PRs in this period, showing strong forward momentum. A new beta release (v2026.7.1-beta.5) shipped with conversational onboarding and security improvements. However, the project is grappling with several high-severity regressions—most critically a P0 bug where all tool results return a literal "(see attached image)" placeholder instead of actual output. The community is deeply engaged, with the oldest open issue (#75, requesting Linux/Windows Clawdbot Apps) still actively discussed after six months with 110 comments.

## 2. Releases

**v2026.7.1-beta.5** (released 2026-07-11 or 12)

**Highlights:**
- **Conversational onboarding:** Crestodian now runs a real agent-loop setup across CLI, web install, and macOS app with AI-guided provider setup
- Model-judged approvals bound to exact operations
- Masked credential prompts for security
- Deterministic fallback when no model is available

**Breaking changes:** Not explicitly documented in the release notes.

**Migration notes:** Users upgrading from earlier beta5 versions may experience MCP binding continuity issues—a fix PR (#104848) is open to address fingerprint encoding mismatches.

## 3. Project Progress

**Key merged/closed PRs and feature advancements:**

- **Slack Block Kit support (#12602):** Closed—agents can now compose rich interactive messages with structured layouts for CRM, database results, and action confirmations
- **Session write-lock timeout fix (#86538):** Closed with a fix for subagent delivery lane blocking
- **Script to restore archived session history (#45003):** Closed—utility now re-indexes `.reset.<timestamp>` archive files from the daily-reset mechanism
- **Gateway crash-loop fix (#63998):** Closed—transcript doomloop causing OOM is now resolved
- **Overflow recovery duplication fix (#66443):** Closed—duplicated `role=user` messages in session JSONL are now prevented
- **Session bloat fix (#45718):** Closed—`skillsSnapshot` and `systemPromptReport` no longer accumulate unboundedly

**Active PRs being worked (high-value):**
- #104834: Folding Skills and Skill Workshop into a unified Plugins hub (Web UI)
- #103679: Typed cross-surface approval actions across all chat channels (Discord, Slack, Telegram, WhatsApp, etc.)
- #103932: Fail-closed plugin tool gates—closing three security gaps in approval timeouts

## 4. Community Hot Topics

**#75** [OPEN, 110 comments, 81 👍] — **Linux/Windows Clawdbot Apps**  
*Link: https://github.com/openclaw/openclaw/issues/75*  
The oldest active issue by far. Users are frustrated that desktop apps exist only for macOS/iOS/Android after six months. Demand is high for parity, and the maintainer label "needs-product-decision" suggests this is still under strategic review.

**#88838** [CLOSED, 37 comments] — **Track core session/transcript SQLite migration via accessor seam**  
*Link: https://github.com/openclaw/openclaw/issues/88838*  
A major infrastructure issue—migrating from JSONL to SQLite for session storage. The active implementation PR (#96625) was the final outstanding lane in this multi-month effort.

**#99241** [OPEN, 21 comments] — **Tool outputs render as image attachments, unreadable to agent**  
*Link: https://github.com/openclaw/openclaw/issues/99241*  
A critical UX issue in long-running ANSI-heavy workflows. The agent cannot read its own tool output, breaking autonomous operation.

**#7707** [OPEN, 17 comments] — **Memory Trust Tagging by Source**  
*Link: https://github.com/openclaw/openclaw/issues/7707*  
Security-conscious users want provenance tracking for memory entries to prevent poisoning attacks. High community interest registered via multiple security-review tags.

**#102175** [OPEN, 16 comments] — **Prompt cache breaks across boundaries**  
*Link: https://github.com/openclaw/openclaw/issues/102175*  
A sophisticated session-state bug where prompt-cache reuse fails across room-event, authorization, and recovery boundaries, causing performance degradation in long-lived sessions.

## 5. Bugs & Stability

### Critical (P0): Tool outputs replaced with "(see attached image)" literal string
- **#104721** [OPEN, 11 comments, 1 👍]  
  *Link: https://github.com/openclaw/openclaw/issues/104721*  
  **Status:** No fix PR yet. This is a regression that completely breaks file read operations—the actual data is replaced with a placeholder. Tagged as a UX release blocker. Related to #99241 (same symptom).

### High Severity (P1):
- **#102175** [OPEN, 16 comments] — Prompt cache breaks across session boundaries  
  *Link: https://github.com/openclaw/openclaw/issues/102175*  
  No fix PR. Affects long-lived embedded sessions with model-visible tool inventory shifting between turns.

- **#91009** [OPEN, 9 comments] — Codex PreToolUse hook relay spawns CPU-bound processes, stalls gateway RPC  
  *Link: https://github.com/openclaw/openclaw/issues/91009*  
  No fix PR. Multiple `openclaw-hooks` processes consume 100%+ CPU each.

- **#104721** (see above) — Same as P0 listing—the regression is severe enough to warrant both classifications.

- **#103917** [OPEN, 5 comments] — Gateway crashes on `FsSafeError` when subagent workspace directory deleted  
  *Link: https://github.com/openclaw/openclaw/issues/103917*  
  No fix PR. Unhandled error crashes the entire gateway.

### Medium Severity (P2):
- **#90213** [OPEN, 8 comments] — Legacy state migration warnings persist after `openclaw doctor --fix`  
  *Link: https://github.com/openclaw/openclaw/issues/90213*  
  Regression from 2026.6.1 upgrade.

- **#94846** [OPEN, 10 comments] — Cron agent turn skips delivery despite successful output  
  *Link: https://github.com/openclaw/openclaw/issues/94846*  
  Early tool error misclassification causes silent delivery failure.

## 6. Feature Requests & Roadmap Signals

### Likely for Next Version:
- **Unified Plugins Hub (#104834):** Active PR to fold Skills, Plugins, and Skill Workshop into one interface. Already in progress with a maintainer-authored PR.
- **Cross-surface durable approvals (#103679, #103921):** Multiple PRs in flight to propagate approvals across sub-agents, ancestors, and native mobile apps. This appears to be a major theme for v2026.7.x.
- **File-read size bounds (10+ PRs by cxbAsDev):** A systematic security hardening effort—bounding reads across identity files, hook manifests, cron quarantine files, and more. These are small, low-risk PRs likely to merge rapidly.

### Under Discussion (Needs Product Decision):
- **Masked Secrets (#10659, 14 comments):** Prevent agents from seeing raw API keys. High security impact.
- **Filesystem Sandboxing (#7722, 10 comments):** Configuration-based path allow/denylists for file access.
- **Distributed Agent Runtime (#42026, 8 comments):** Splitting monolithic gateway into control plane + agent runtime.
- **Linux/Windows desktop apps (#75, 110 comments):** The most requested feature overall.

### Niche but Active:
- **Streaming TTS for voice calls (#8355, 7 comments):** Sentence-level LLM→TTS→audio pipeline to replace batched processing.
- **Private Mode (#7403, 6 comments):** Toggle to suppress workspace context for demos.
- **Batch API support (#9865, 6 comments):** 50% cost savings on background tasks.

## 7. User Feedback Summary

**Common Pain Points:**
- **Tool output invisibility:** Multiple users report that agents cannot read their own tool outputs because they're replaced with image placeholders (#99241, #104721). This is the most urgent UX blocker.
- **Session state fragility:** Users experience silent message loss, session write-lock timeouts, and crash loops in long-running sessions (#86538, #84903, #63998).
- **Onboarding difficulty:** A user reported that clean installs of v2026.5.xx took 5+ minutes versus 20 minutes for earlier versions (#76042)—performance regression during setup.
- **Linux/Windows gap:** Despite strong demand (81 👍), desktop support for non-Apple platforms remains unaddressed (#75).

**Satisfaction Signals:**
- The conversational onboarding (Crestodian) in beta5 is a positive step toward reducing setup friction.
- The SQLite migration (#88838) is nearly complete, promising better session performance and reliability.
- The systematic security auditing (multiple PRs by cxbAsDev) shows active investment in hardening.

**Use Cases Driving Development:**
- **Enterprise/team deployments:** Need for proper approval workflows, cost tracking, and multi-agent orchestration (#103679, #103921, #9016).
- **Voice/call automation:** Streaming TTS pipeline requested for real-time phone agent experiences (#8355).
- **Content creation/demos:** Private Mode to avoid exposing personal workspace data (#7403).

## 8. Backlog Watch

### Critical Backlog Items Needing Maintainer Attention:

- **#75** (6 months, 110 comments) — Linux/Windows Clawdbot Apps  
  *Link: https://github.com/openclaw/openclaw/issues/75*  
  Oldest open issue, highest community engagement. Needs a product decision or timeline commitment.

- **#99241** (10 days, 21 comments) — Tool outputs invisible to agent  
  *Link: https://github.com/openclaw/openclaw/issues/99241*  
  No fix PR despite being open since July 2. Related P0 bug #104721 makes this more urgent.

- **#10659** (5 months, 14 comments) — Masked Secrets  
  *Link: https://github.com/openclaw/openclaw/issues/10659*  
  Needs security review and product decision. High-impact for enterprise adoption.

- **#42026** (4 months, 8 comments) — Distributed Agent Runtime RFC  
  *Link: https://github.com/openclaw/openclaw/issues/42026*  
  Architectural proposal that could reshape the project. No maintainer response visible.

- **#10687** (5 months, 10 comments) — Dynamic model discovery for OpenRouter  
  *Link: https://github.com/openclaw/openclaw/issues/10687*  
  Needed for fast-moving provider catalogs. Multiple tags suggest it's stuck in product-decision limbo.

- **#85358** (2 months, stale) — Bundled plugin load paths injected into config during update  
  *Link: https://github.com/openclaw/openclaw/pull/85358*  
  An open PR needing maintainer review. Could cause configuration corruption during upgrades.

**PRs Awaiting Maintainer Review (Ready for Look):**
- #104824: TUI session switch ordering fix
- #104848: Codex MCP binding preservation after beta5 upgrades
- #103932: Fail-closed plugin tool gates (P0 security fix)
- Multiple small security-bound PRs by cxbAsDev (#101469, #101477, #101772, #101773)

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the July 12, 2026 community digest data.

---

## Cross-Project Comparison Report: AI Agent Ecosystem
**Date:** 2026-07-12

### 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is in a period of **intense maturation and stratification**. While foundational projects like OpenClaw and ZeroClaw continue to dominate in sheer feature velocity and community scale, a clear wave of activity is shifting away from raw feature development toward **production hardening**, **security auditing**, and **architectural refactoring**. A significant number of projects (NanoBot, CoPaw) are currently in high-pain stabilization cycles following major releases, while others (Hermes Agent, IronClaw) are undergoing deep structural changes to their core runtimes. The community is vocal about two primary pain points: **performance with local models** and **reliability of tool execution**, signaling a market moving from "can it work?" to "can it work reliably in my environment?"

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | New Release (24h) | Health Signal |
|---|---|---|---|---|
| **OpenClaw** | 460 | 500 | ✅ (v2026.7.1-beta.5) | High velocity with P0 regression |
| **ZeroClaw** | 50 | 50 | None | Stable, deep v0.8.3 milestone work |
| **Hermes Agent** | 50 | 50 | None | High-activity maintenance, review bottleneck |
| **IronClaw** | 8 | 50 | None | High dev velocity on Reborn architecture |
| **NanoBot** | High (10+ critical) | High (6 merged) | None | Rapid security maturation, post-audit |
| **CoPaw** | 23 | 5 | None | **Stabilization crisis** post-v2.0.0 |
| **NanoClaw** | 2 | 8 | None | Moderate, guard-seam refactor |
| **PicoClaw** | 0 | 3 | None | Steady, low-activity incremental |
| **NullClaw** | 2 | 0 | None | Low activity, maintenance phase |
| **LobsterAI** | 3 | 1 | None | Stale, low activity |
| **Moltis** | 0 | 1 | None | Minimal activity |
| **TinyClaw** | 0 | 0 | None | Inactive (24h) |
| **ZeptoClaw** | 0 | 0 | None | Inactive (24h) |

### 3. OpenClaw's Position

**Advantages:**
- **Dominant community scale:** 460 issues and 500 PRs updated in 24 hours is an order of magnitude larger than any peer. This provides a massive feedback loop and contributor pool.
- **Release velocity:** Shipping beta releases (v2026.7.1-beta.5) with substantial features (conversational onboarding, security improvements) while peers are in freeze or stabilization phases.
- **Breadth of features:** Skills, plugins, cross-surface approvals, MCP binding, Slack Block Kit—OpenClaw is building a complete platform.

**Technical Approach Differences:**
- OpenClaw uses a **monolithic gateway + agent-loop** architecture. Compare to IronClaw's **Reborn modular runtime** or ZeroClaw's **WASM plugin** vision—OpenClaw is betting on integration depth over modular decoupling.
- Embraces **SQLite migration** for session storage (a trend seen in NanoClaw's persistent-memory work), while others (NanoBot) struggle with context prefix stability.

**Community Size Comparison:**
- OpenClaw's single P0 issue (#104721) has more comments (11) than NullClaw's total activity (2 issues). Its oldest open issue (#75) has 110 comments—more than most projects' total recent engagement. This is a **top-tier project** in the ecosystem, comparable only to ZeroClaw in breadth of community investment.

### 4. Shared Technical Focus Areas

The following requirements are emerging across **multiple projects**, signaling ecosystem-wide technical priorities:

- **Context / Prompt Caching Architecture**
  - *NanoBot* (#2463, #4867, PR #4371): Exact prefix preservation for API caching. "Unusable" with Ollama.
  - *OpenClaw* (#102175): Prompt cache breaks across session boundaries.
  - *ZeroClaw* (#5808): Context budget exceeded by system prompt alone.
  - *Hermes Agent* (PRs #60662, #60681): Configurable compression, max tail floor.

- **Human-in-the-Loop / Security Gating**
  - *Hermes Agent* (#35357): Tirith approval gate bypassed by non-shell tools.
  - *OpenClaw* (#103932, #103679): Fail-closed plugin gates, cross-surface durable approvals.
  - *NanoBot* (#4777, #4778, #4779): Authorization bypass via `process_direct()`.
  - *ZeroClaw* (PR #7960): ToolAccessPolicy bypass.
  - *CoPaw* (#5955, #5958): Tool whitelist mode to reduce approval fatigue.

- **Local Model / Edge Inference Performance**
  - *NanoBot* (#4867): 60-second overhead per turn with Ollama.
  - *ZeroClaw* (#5808): 32k context budget exceeded on first turn.
  - *NullClaw* (#975): Users seeking "unmetered" local CLI access via grok-cli.

- **Windows Platform Support**
  - *ZeroClaw* (#5999): `local-dev-yolo` completely broken on Windows.
  - *CoPaw* (#5951): Windows sandbox pwsh recursion, infinite window explosion.
  - *Hermes Agent* (#62884, #52951): Desktop frozen sessions, Alt+Tab crashes.
  - *NanoClaw* (#3017): better-sqlite3 compilation fails on VS 2026.
  - *OpenClaw* (#75): 110 comments demanding Linux/Windows apps (6-month backlog).

- **Security Vulnerability Disclosure Channels**
  - *IronClaw* (#6000): No `SECURITY.md` or private reporting. Real vulnerability exists.
  - *NanoBot* (audit findings): 10+ critical issues disclosed, rapid fix PRs.

### 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | NanoBot | CoPaw | IronClaw |
|---|---|---|---|---|---|
| **Target User** | Developers / power users | Teams / operators | Local-first / privacy | Desktop users | Enterprise / edge |
| **Primary Language** | Python (?) | Rust (?) | Python | Python | Rust |
| **Architecture** | Monolithic gateway + agent-loop | Modular, WASM plugin vision | Context-builder heavy | Desktop app, sandbox | Reborn modular runtime |
| **Key Feature** | Cross-surface approvals, Skills Hub | Goal mode, Kanban, Gateway | Local model focus, audit | Windows desktop, dark mode | Attestation, Reborn runtime |
| **Pain Point** | Tool output invisibility (P0) | Context budget exhaustion | Ollama unusable (60s overhead) | v2.0.0 regression crisis | Windows dev broken |
| **Community Style** | Massive, contributor-driven | Structured, milestone-driven | Audit-driven, rapid fixes | High-frustration engagement | Core-contributor dominated |

**Key Divergence:**
- **NanoBot** is optimizing for **local inference performance** and **security**. It is willing to break architectural assumptions (prefix stability, sustained goals) to fix fundamental UX for Ollama users.
- **ZeroClaw** is pushing toward **production operations**—session TTL, gateway Kanban, daemon stability. Its goal mode is the most novel feature in the ecosystem.
- **CoPaw** is a **bellwether for upgrade risk**—the v2.0.0 rollout shows what happens when data migration and sandbox changes are not adequately tested across platforms.
- **IronClaw** is the **Rust-native outlier**, betting on attestation and a modular "Reborn" runtime for enterprise trust. Its lack of a security channel is a concerning gap.

### 6. Community Momentum & Maturity

**Tier 1: High-Velocity (Rapidly Iterating)**
- **OpenClaw**: Unmatched issue/PR volume. Shipping beta releases. But P0 regression threatens trust.
- **ZeroClaw**: Deep milestone execution (goal mode). Stable velocity. Large active PR set.
- **NanoBot**: Post-audit fire drill. Very high fix velocity, but crisis mode suggests maturity gaps.
- **IronClaw**: High dev velocity on Reborn migration. Core-contributor dominated.

**Tier 2: High-Churn, Consolidating**
- **Hermes Agent**: 50 open PRs, zero merged today. Review bottleneck. Active triage, but code is not landing.
- **CoPaw**: High pain from v2.0.0. Community is engaged but frustrated. Maintainers responsive on UI, but core runtime bugs are piling up.

**Tier 3: Steady, Low Activity**
- **NanoClaw, PicoClaw, NullClaw**: Incremental changes, no crisis. Stable but not growing significantly.
- **LobsterAI**: Stale. PRs and issues open for months. Risk of project dormancy.
- **Moltis**: Minimal activity. Single PR open.
- **TinyClaw, ZeptoClaw**: No activity recorded. Inactive.

**Maturity Signals:**
- **Most mature:** OpenClaw (community scale, release process, but P0 bug). ZeroClaw (structured tracker approach, RFC process).
- **Most vulnerable:** CoPaw (upgrade regression crisis). IronClaw (missing security channel—governance risk).

### 7. Trend Signals

1.  **The "Ollama Tax" Must Be Eliminated.** NanoBot's 60-second overhead and ZeroClaw's context-budget exhaustion show that local model support is still a second-class citizen. Projects that solve this (prefix caching, context compression) will win the self-hosted developer market.

2.  **Security Gates Are No Longer Optional.** Across Hermes Agent, NanoBot, OpenClaw, and ZeroClaw, tool approval bypasses are the #1 security class. The industry is converging on fail-closed, typed approval actions. Expect this to become a standard baseline.

3.  **Windows is the Achilles' Heel.** Every project with a desktop or CLI component has a Windows-specific regression. The ecosystem is macOS-first by default. For enterprise adoption, Windows compatibility is a decisive factor.

4.  **Data Migration Is the Highest-Risk Operation.** CoPaw's v2.0.0 regression crisis is a cautionary tale: changing session storage (SQLite, memory format) without a bulletproof migration path will break trust. OpenClaw's SQLite migration (#88838) was a multi-month effort—correctly prioritized.

5.  **"Unmetered" Access Models Are Emerging.** NullClaw's grok-cli request and broader sentiment around cost control suggest users want to run agents against their own subscriptions (Grok, ChatGPT) via local CLIs, bypassing per-token API costs. This may drive a new class of "provider proxy" features.

6.  **Community Feedback Is Shifting to "Production Reliability."** Users are not asking for more tools; they are asking for context budgets that work out-of-the-box, session persistence that survives daemon restarts, and monitoring that doesn't produce false alarms. The next differentiation axis will be **operational maturity**, not feature count.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project digest for July 12, 2026.

---

## NanoBot Project Digest | 2026-07-12

### 1. Today's Overview

The NanoBot project is in a period of intense activity and rapid security maturation. A significant influx of high-severity bug reports and security vulnerability disclosures—primarily from a single deep-code audit—is driving a wave of urgent fixes. The project shows high responsiveness from maintainers, with multiple critical patches already in review or merged alongside ongoing feature development. While activity volume is very high, the current cycle is clearly dominated by hardening the codebase against architectural weaknesses identified in the audit.

### 2. Releases (No new releases)

No new releases were published today.

### 3. Project Progress

Six pull requests were merged or closed today, reflecting a mix of functional patches and a major refactoring effort:

- **Closed (Merged):**
    - **PR #4891**: Refactored runtime context (time, channel info) to be opt-in and prefix-stable. This directly improves prompt caching efficiency and is a foundational change for better performance.
    - **PR #4764**: Fixed a crash bug where MCP streamable-http server timeouts would crash the gateway during reconnect.
- **Closed (Other):**
    - **PR #4844**: Refactored the sustained-goal/long-task system to use explicit `/goal` commands, moving away from an automatic background loop that blocked user input.
    - **PR #4860, #4302, #4872**: Closed issues include a documentation fix regarding the `onboard`/`webui` commands, the MCP gateway crash bug (fixed by #4764), and an enhancement to prevent empty git commits during the "Dream" process.

### 4. Community Hot Topics

The most active discussions reflect two underlying needs: **performance optimization for local inference** and **architectural correctness for prompt caching**.

- **Issue #2463** (14 comments): An architectural complaint that NanoBot does not preserve the exact prompt prefix it sent to the model. This is a fundamental blocker for server-side caching with APIs like OpenAI.
- **Issue #4867** (4 comments): A follow-up on #2463 specifically for Ollama users. The author states the system is **"totally unusable with Ollama and 32 GB of VRAM,"** adding a full 60-second overhead per turn.
- **PR #4371** (long-standing): A fix that introduces a "breakpoint" in the system prompt to make the stable prefix cacheable. This PR directly addresses the needs raised in the two issues above.

**Analysis:** The community's top friction point is clear: NanoBot's context builder history is causing unacceptably slow performance for local models (Ollama) and preventing API-level caching for remote ones. The solution (PR #4371) has been open since June 16 and is a high-community priority.

### 5. Bugs & Stability

A massive security and stability audit landed on July 6, resulting in a flood of 10+ new issues today alone. The severity is high for many of these.

**Critical Severity (Fix PRs exist):**
- **File Descriptor / Memory Exhaustion (DoS):** Issues #4780, #4781, #4782, #4783, #4788 report zero rate limiting, unbounded queues, and a lack of WebSocket connection limits, all of which can cause crashes or cost explosions.
- **Authorization Bypasses:** Issues #4777, #4778, #4779 detail multiple pathways (e.g., `process_direct()`) where user-imposed channel authorization can be completely bypassed.
- **PR #4888** (Open) aims to fix workspace file corruption from concurrent writes (Issue #4798).
- **PR #4890** (Open), **PR #4880** (Open), and **PR #4889** (Open) are direct fixes for the audit findings related to session lock memory leaks, default workspace restrictions, and destructive command authorization.

**High Severity (Identified today):**
- **Windows UTF-16 corruption (#4881):** The `ExecTool` corrupts PowerShell output by forcing UTF-8 decoding.
- **Dream diff bug (#4882):** The content diff falsely reports empty files as modified, creating noise.
- **API key leak to Jina (#4884):** The `WebFetchTool` sends complete user URLs to a third-party service (Jina AI) through an unauthenticated client.
- **Supply Chain Risk (#4885):** The CLI App registry downloads and executes install commands from an unsigned remote source.
- **Docker Security (#4886):** The default Docker Compose file disables AppArmor and seccomp, undermining container isolation.
- **Test Harness Broken (#4887):** The dev environment cannot run all tests due to a missing dependency (`lark-oapi`).

**Closed Fixes:**
- **Crash on MCP disconnect (#4302):** Fixed by PR #4764.
- **Multimodal `.strip()` crash (#4800/4805):** Fixed by PR #4842 and PR #4837.

### 6. Feature Requests & Roadmap Signals

User requests are shifting from "more features" to "better performance and security."

- **Exact Prompt Prefix Preservation:** The primary feature request is not for new tools, but for **architectural changes to enable caching** (Issues #2463, #4867). This is the #1 blocker for local model users.
- **Opt-in Sustained Goals:** The project is responding to feedback that the "long task" system was too aggressive. PR #4879 and PR #4844 aim to gate this feature behind an explicit user action (`/goal`), preventing the agent from taking over the session.
- **Guided Setup Flows:** PR #4855 introduces a guided WebUI setup, signaling a focus on improving the initial user experience for new adopters.

**Prediction for Next Version:** The next release will likely include the context prefix stability fix (PR #4371) and the refactored sustained-goal system (PR #4844). A major security patch is almost certain, incorporating the fixes from the batch of audit-related PRs (#4880, #4889, #4890).

### 7. User Feedback Summary

- **Pain Point (High Intensity):** Ollama users are experiencing **"unusable"** performance due to a 60-second overhead per turn. This is a critical quality-of-life issue for anyone running local models.
- **Pain Point (Medium Intensity):** New users are confused by missing CLI commands (`nanobot onboard`, `nanobot webui`) that are referenced in documentation (Issue #4860).
- **Satisfaction Signal:** The existence of a deep-code audit (Issue #4815) and the rapid authoring of fix PRs by community contributors (e.g., `hamb1y`, `adabarbulescu`) suggests a healthy, engaged community that cares deeply about the project's reliability.

### 8. Backlog Watch

The following PRs/Issues are critical for performance and stability but remain open and require maintainer attention to unblock:

- **[P1] PR #4371 - Prompt Cache Breakpoint:** Open since June 16. This is the direct solution to the #1 community complaint (slow local inference / broken API caching). It is stalled on merging, likely due to conflicts with other context-related changes.
- **[P1] PR #4021 - Codex Duplicate Reasoning Fix:** Open since May 27. Fixes a hard bug that breaks multi-turn conversations for the Codex provider. Has an "AI-assisted" tag, which may require careful maintainer review.
- **[P2] Issue #4785 - OOM on Large File Read:** While a fix exists in the pipeline, a simple fix (truncating before reading) has not been applied, posing a risk for agents working with large files.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the Hermes Agent project digest for **2026-07-12**.

---

## Hermes Agent Project Digest: 2026-07-12

### 1. Today's Overview
The project is in a **high-activity maintenance phase**, with 50 issues and 50 PRs updated in the last 24 hours. While there were no new releases, the community and automated systems are driving significant triage: 9 issues were closed (including several critical desktop bugs) and 50 PRs remain open with active iteration. The activity is heavily weighted toward bug fixes and reliability improvements, particularly around MCP (Model Context Protocol) tooling, platform plugin governance, and session state security. The project shows a healthy velocity of contribution, though the high number of open PRs (50) with zero merges today suggests a bottleneck in review capacity.

### 2. Releases
**No new releases** were published in the last 24 hours.

### 3. Project Progress
**Merged/Closed PRs:** Zero PRs were merged or closed today. All 50 open PRs remain unmerged, suggesting maintainers are still reviewing or the CI pipeline is backed up.

**Notable closed Issues (9 total):**
- **[#60385]** **MCP server processes leak on reconnect** – Closed. Fix likely addresses a stability issue where MCP stdio processes accumulated over time.
- **[#56058]** **Desktop chat model picker persists to global config** – Closed. Session-scoped overrides are now correctly isolated.
- **[#62884]** **Desktop: New sessions frozen/blank on Windows** – Closed. An infinite backend restart loop that caused blank chat areas has been resolved.
- **[#62916]** **Add native OpenCode Go provider to Hermes One** – Closed. Likely merged or implemented via config enhancement.
- **[#62426]** **Scheduled task disappears after email modification** – Closed (cannot reproduce).
- **[#62905]** **Cron tool calls route to interactive approval after restart** – Closed (cannot reproduce).
- **[#62883]** **Add Edge TTS pitch control from config** – Closed. A minor but widely requested quality-of-life improvement.
- **[#62892]** **Named model.providers entries unusable** – Closed (cannot reproduce).

### 4. Community Hot Topics
The most active discussions and features are centered on **security governance** and **core agent reliability**.

- **[#38240] Skills index is stale or degraded** (21 comments) – The automated *Skills Hub* freshness probe is failing, likely impacting the agent's ability to discover and load up-to-date skills. This is a critical infrastructure issue.
- **[#35357] Tirith approval gate bypassed by non-shell tools** (6 comments) – A significant security gap: `send_message`, `write_file`, and MCP tools bypass the human-in-the-loop gate. This is a high-priority feature request for enterprise deployments.
- **[#9403] Pricing overrides and contract pricing** (5 comments) – Users are demanding enterprise-grade pricing control, including custom catalogs and contract overrides.
- **[#32925] Integrate Microsoft SkillOpt** (11 👍, 2 comments) – This feature request has the highest reaction score, indicating strong community interest in self-evolving agent skills powered by trajectory-driven optimization.

### 5. Bugs & Stability
The project has a **high density of P1 and P2 bugs**, many with active fix PRs.

| Issue | Severity | Description | Fix PR Exists? | Link |
|---|---|---|---|---|
| **#62914** | P2 | `_emit_pending_fallback_notice()` crashes API call with AttributeError | No | [View](https://github.com/NousResearch/hermes-agent/issues/62914) |
| **#62723** | P1 | Config migration v30→v32 silently drops `platforms` sections in multi-profile setups | No | [View](https://github.com/NousResearch/hermes-agent/issues/62723) |
| **#62557** | P1 | Desktop app leaks bracketed-paste markers into user messages | No | [View](https://github.com/NousResearch/hermes-agent/issues/62557) |
| **#62365** | P1 | Context compaction fabricates fake user requests | No | [View](https://github.com/NousResearch/hermes-agent/issues/62365) |
| **#53995** | P2 | Gateway pymalloc memory leak causes hard crashes on Windows | No | [View](https://github.com/NousResearch/hermes-agent/issues/53995) |
| **#52951** | P2 | cua-driver helper process dies on Alt+Tab on Windows | No | [View](https://github.com/NousResearch/hermes-agent/issues/52951) |
| **#60700** | P2 | Anthropic stream fallback crashes on null usage from MiniMax | **Yes** (PR #60700) | [View](https://github.com/NousResearch/hermes-agent/pull/60700) |
| **#60698** | P2 | Memory tool replacement corrupts multi-section entries | **Yes** (PR #60698) | [View](https://github.com/NousResearch/hermes-agent/pull/60698) |
| **#60695** | P2 | Anthropic stream aggregation fails on null usage from MiniMax | **Yes** (PR #60695) | [View](https://github.com/NousResearch/hermes-agent/pull/60695) |
| **#62401** | P2 | Matrix gateway broken on macOS arm64 due to unnecessary E2EE dep | No | [View](https://github.com/NousResearch/hermes-agent/issues/62401) |
| **#13126** | P2 | Slack TTS voice reply never sent | No | [View](https://github.com/NousResearch/hermes-agent/issues/13126) |

**Key takeaway:** The most severe bugs relate to **data integrity** (context compaction fabricating requests, config migration wiping profiles) and **desktop stability** (Windows crashes, bracketed-paste corruption). The MiniMax/Anthropic stream handling failures are actively being fixed via PRs #60700 and #60695.

### 6. Feature Requests & Roadmap Signals
Several features signal the next likely release priorities:

- **Security Gating Overhaul (Likely next version):** PR #60661 fixes a bypass in same-tool failure counters. Combined with [#35357] (Tirith gate bypass), the next release will likely strengthen security guardrails.
- **Desktop Cost Tracker (High confidence):** PR #60673 implements session cost tracking and provider pricing integration, suggesting a major UX upgrade for billing visibility.
- **Configurable Context Compression (Medium confidence):** PRs #60662 (max_tail_message_floor) and #60681 (/set_compression command) indicate heavy iteration on context window management.
- **Platform Plugin Governance (Medium confidence):** PRs #60684 (deferred plugin loaders) and #60658 (plugin dependency graph) point to a push for cleaner plugin architecture.
- **Missing Features:** [#62675] requests native support for the *Context7* MCP server, while [#62927] asks for an `always_preload` option to inject skill bodies into every session. These are likely to be addressed in v0.19.

### 7. User Feedback Summary
- **Pain Point: Desktop Windows stability remains fragile.** Multiple users report frozen sessions, infinite restart loops, and bracketed-paste corruption (Issues #62884, #62557, #56058).
- **Pain Point: Configuration management is error-prone.** Users report that config migrations silently wipe platform settings (Issue #62723) and that custom model providers are difficult to configure (Issue #62892).
- **Use Case: Enterprise pricing and cost tracking.** Several users request contract pricing, custom catalogs, and session-level cost breakdowns (Issues #9403, PR #60673).
- **Satisfaction: Active community contributions.** The high number of submitted PRs (50) and detailed bug reports indicates an engaged, technically sophisticated user base.

### 8. Backlog Watch
The following high-importance issues remain **unresolved** and have not seen maintainer intervention beyond initial triage:

- **#35357** (Tirith gate bypass – P3, 21 days open) – 6 comments, 0 👍. Security gap affecting non-shell tools remains unaddressed.
- **#32925** (Integrate Microsoft SkillOpt – P3, 46 days open) – 11 👍. Highest-voted feature request with no maintainer response.
- **#38240** (Skills index stale – P3, 39 days open) – 21 comments. Automated freshness pipeline is degraded, blocking skill discovery.
- **#62904** (LLM has no internal clock – P3, 1 day open) – While new, this is a recurring complaint about fundamental architectural limitation.
- **#62927** (skills.always_preload config option – P3, <1 day open) – New request, but addresses a common friction point for custom model users.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-12

## 1. Today's Overview
Project activity is moderate, with no new issues or releases in the last 24 hours but three pull requests updated. One PR (#3249) was merged/closed, indicating forward progress on skill management features. Two open PRs remain in review or stale status, suggesting maintainer bandwidth is focused on targeted improvements rather than broad new features. Overall, the project appears in a steady state with incremental enhancements being folded into the codebase.

## 2. Releases
*No new releases today or in the recent reporting window.*

## 3. Project Progress
One pull request was merged/closed today:

- **#3249 — Skill enable/disable state + cron RunNow** (merged/closed)  
  Adds support for toggling skills on/off in the UI and pausing cron jobs. The implementation uses a `workspace/skills/.skills-state.json` file per skill root, leveraging mtime tracking for prompt cache invalidation. Skills in `disabled` state are excluded from the `<skills>` block automatically, without requiring a restart.  
  [GitHub: #3249](https://github.com/sipeed/picoclaw/pull/3249)

## 4. Community Hot Topics
No issues or PRs have generated significant discussion or reactions in the last 24 hours. The three active/updated PRs show zero comments and zero thumbs-up, suggesting either low community engagement on these specific items or that discussion is happening outside GitHub.

- **#3225** — Agent-specific runtime overrides (open, stale, 7 days without activity)  
  Proposes per-agent `max_tokens`, summarization thresholds, and `split_on_marker` overrides in `agents.list` config entries.  
  [GitHub: #3225](https://github.com/sipeed/picoclaw/pull/3225)

- **#3222** — deltachat cleanup and refactor (open, 9 days)  
  Reduces ~200 lines of code by dropping legacy features, hardcoded relay lists, and password-based email config. Renames `invite_link` to `join_invite_link` and adds `show_invite_link`.  
  [GitHub: #3222](https://github.com/sipeed/picoclaw/pull/3222)

## 5. Bugs & Stability
No new bugs, crashes, or regressions were reported in the last 24 hours. The project's stability appears strong, with recent work (PR #3249) focusing on non-breaking feature additions and state management.

## 6. Feature Requests & Roadmap Signals
Based on open PRs, the following features are likely candidates for the next minor release:

- **Per-agent runtime overrides** (PR #3225) — Allows individual agents to have custom `max_tokens` and summarization settings, enabling more granular control without per-agent service restarts.
- **Deltachat integration modernization** (PR #3222) — Simplifies Delta Chat support by removing legacy code, improving documentation, and switching to official relay list references. This suggests a push toward cleaner third-party integrations.
- **Skill UI toggles and cron management** (PR #3249, already merged) — A user-facing feature that lets operators disable skills interactively, likely to be included in the next tagged release.

## 7. User Feedback Summary
With no new issues or comments in the last 24 hours, direct user feedback is absent from this period. The closed PR #3249 suggests an internal or contributor-driven feature request for skill management, possibly originating from a fork or downstream user (referenced as "P6.6 do Ethos"). No pain points or satisfaction signals were captured.

## 8. Backlog Watch
Two open PRs require maintainer attention:

- **PR #3225** — Agent-specific runtime overrides (stale since July 4, last update July 11). No comments or reviews. If maintainers consider this feature valuable, it needs a review or a decision to close.  
  [GitHub: #3225](https://github.com/sipeed/picoclaw/pull/3225)

- **PR #3222** — Deltachat refactor (stale since July 3, last update July 11). No reviewer feedback. The refactor is large (-200 LOC) and touches integration code; it may benefit from a maintainer sign-off to avoid bit-rotting.  
  [GitHub: #3222](https://github.com/sipeed/picoclaw/pull/3222)

Both PRs are at risk of becoming outdated or conflicting with future changes if not reviewed soon.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-12

## 1. Today's Overview

The NanoClaw project shows **moderate activity** today with 2 new open issues and 8 pull requests updated, 2 of which were closed or merged. The team is making significant headway on a major architectural "guard seam" refactor (PR #2986) and a scheduled-tasks delivery pipeline overhaul (PR #2988). Two critical bug-fix PRs targeting agent-runner reliability — a hung-tool watchdog (#3019) and a reply-drop rescue (#3020) — entered review today. The absence of new releases indicates the project is in a consolidation phase, likely preparing for a feature-complete release after the guard-seam and persistent-memory work lands.

## 2. Releases

No new releases are recorded for 2026-07-12.

## 3. Project Progress

Two pull requests were closed today:

- **[#3015 — fix: preserve phase context in live progress](https://github.com/nanocoai/nanoclaw/pull/3015)** (CLOSED, merged)  
  *Author: tier2tech-tian*  
  Fixed a real E2E issue where Claude's first tool event could arrive before the phase explanation, causing a misleading "finished reading" card. Also addressed tool_result 60-character summaries being consumed by warnings. Now use a de-identified, 1,000-character max summary that preserves test counts. Added regression tests for real-world timing and long-warning scenarios. All 1,267 tests pass.

- **[#3018 — RFC: temporal (incognito) sessions](https://github.com/nanocoai/nanoclaw/pull/3018)** (CLOSED, not merged)  
  *Author: RonMizrahi*  
  An RFC/vision share for throwaway, memory-free DM sessions. Closed by the author after feedback; not intended for merge as-is. This signals community interest in ephemeral interaction patterns.

**Key features that advanced today:**
- **Guard seam phase 2 (PR #2986)**: Every privileged action now passes through a single `guard()` decision function (allow | hold | deny). This is a foundational security/control layer.
- **One-door delivery for tasks (PR #2988)**: Task sessions now use only `send_message` as the exit path, with all deliveries requiring explicit `to` destinations. Part 3/5 of the scheduled-tasks train.
- **Persistent memory (PR #3012)**: Provider-agnostic memory tree now shared across agent providers, with live index/definition loading on context start, clear, and compaction.
- **/add-audit skill (PR #2987)**: Opt-in local audit logging for the ncl surface, rebased onto latest guard-seam branch.

## 4. Community Hot Topics

The following issues and PRs drew the most attention today (all have 0 comments, but their content indicates active concern):

- **[Issue #3016 — Rate limit logged as quota error even when "allowed"](https://github.com/nanocoai/nanoclaw/issues/3016)**  
  *Author: glifocat*  
  A regression from PR #2965: `rate_limit_event` is always logged as "Error: Rate limit (retryable: false, quota)" even on successful turns. The reporter found 82 occurrences in a week, all on normally completed deliveries. This is a **noise pollution** bug that erodes trust in monitoring — users can't distinguish real rate-limit problems from false alarms.

- **[Issue #3017 — Windows + VS 2026 + better-sqlite3 v11.10.0 compilation fails](https://github.com/nanocoai/nanoclaw/issues/3017)**  
  *Author: shayshankr*  
  A platform-specific blocking issue: C++ compilation of better-sqlite3 fails on Windows 11 with Visual Studio 2026 (June update) and Node.js 20/24. The user has all required workloads installed. **No response from maintainers yet** — this could block all Windows contributors.

- **[PR #3020 — Rescue undelivered unwrapped replies after re-wrap nudge](https://github.com/nanocoai/nanoclaw/pull/3020)**  
  *Author: robbyczgw-cla*  
  Addresses three linked issues (#2369, #2393, #2404) where model omits the `<message to>` wrapper after long tool chains, causing silent reply drops. This PR rescues those unwrapped replies and suppresses recaps. High-impact fix for a class of silent failures.

## 5. Bugs & Stability

**High Severity:**
- **[#3016 — False "rate limit" error on every turn](https://github.com/nanocoai/nanoclaw/issues/3016)** → Regression from #2965. No fix PR exists yet. Severity: **High** (noise that masks real rate-limit issues, degrades monitoring utility).

**Medium Severity:**
- **[#3017 — Windows + VS 2026 compilation failure](https://github.com/nanocoai/nanoclaw/issues/3017)** → Blocks all Windows development. No fix PR yet. Severity: **High** (platform-blocking, but only affects Windows users).

**Fix PRs in Review:**
- **[#3019 — Stall watchdog for hung in-flight tools](https://github.com/nanocoai/nanoclaw/pull/3019)** — Addresses container kills where heartbeat age hit 30 minutes (the absolute ceiling) with zero SDK activity. A genuine hung-tool bug that caused full container restarts. Fix proposes watchdog to recover stuck in-flight tools.

- **[#3020 — Rescue undelivered unwrapped replies](https://github.com/nanocoai/nanoclaw/pull/3020)** — Fixes silent message drops when model omits the wrapper tag.

## 6. Feature Requests & Roadmap Signals

**User-Requested Feature (from RFC):**
- **Temporal/incognito sessions (PR #3018)**: Throwaway, memory-free DM sessions. While the RFC was closed, it signals real user demand for ephemeral interaction patterns — likely to influence future skill development or a minor release.

**Active Feature PRs (likely to land in next version):**
- **Persistent memory (PR #3012)**: Provider-agnostic memory — almost certainly destined for the next minor release.
- **Guard seam phase 2 (PR #2986)**: Unified `guard()` decision function — foundational for security and will likely be in next release.
- **One-door task delivery (PR #2988)**: Scheduled-tasks pipeline part 3/5 — part of a major scheduled-tasks feature expected in near future.

**Prediction**: Next release (patch) will likely include the stall watchdog (#3019), unwrapped reply rescue (#3020), and the phase-context fix (#3015). The guard-seam and persistent-memory features may land together in a minor release (0.x or 1.x bump).

## 7. User Feedback Summary

- **Pain Point (monitoring noise)**: "Every rate_limit_event is logged as a quota error, even when the status is 'allowed'" — glifocat reports 82 false alarms in a week, undermining trust in agent-runner monitoring.
- **Pain Point (platform compatibility)**: Windows 11 + VS 2026 + better-sqlite3 compilation fails — a specific but growing concern as users adopt newer toolchains.
- **Pain Point (silent drops)**: Linked issues #2369, #2393, #2404 describe repeated cases of replies being silently dropped after long tool chains — addressed by PR #3020.
- **Satisfaction Signal**: The RFC on temporal sessions received enough interest to merit a PR, suggesting the community is engaged and thinking about new use cases.
- **Use Case**: The `/add-audit` skill (PR #2987) is a community-contributed feature for local audit logging — shows users want transparency and compliance capabilities without external services.

## 8. Backlog Watch

- **[Issue #3017 — Windows compilation failure](https://github.com/nanocoai/nanoclaw/issues/3017)**: Zero comments from maintainers in 24+ hours. This is a **blocking issue** for Windows contributors and requires immediate triage — ideally a confirmation of the environment or a workaround note. **Needs maintainer attention.**

- **[Issue #3016 — False rate-limit logging](https://github.com/nanocoai/nanoclaw/issues/3016)**: Also unanswered. While lower urgency than a build failure, the noise pollution is eroding trust. **Needs maintainer attention.**

- **Long-unanswered items**: No evidence of issues older than 24 hours in the provided data. The project appears to be keeping up with most incoming concerns, though the two new issues from July 11 are still awaiting first response.

---

**Overall Health**: Moderate active development with two critical fix PRs in flight. The guard-seam and persistent-memory work represent significant architectural improvements. The main risk is the unaddressed Windows compilation failure, which could deter platform contributors. The false rate-limit logging is a regression that should be prioritized to restore monitoring reliability.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-12

## Today's Overview
NullClaw shows low activity over the past 24 hours, with **2 open issues updated** and **zero PR activity or releases**. The project appears in a maintenance phase, with no new code integrations or merges. Both active issues involve user-facing features and runtime stability, indicating community focus on reliability and provider extensibility. One bug report (Telegram channel going silent after idle periods) and one feature request (grok-cli provider) are the sole items drawing community attention. Overall project health is stable but quiet, with no signs of critical regression or maintainer churn.

## Releases
*No new releases in the report period. The last release date is not available from this data snapshot.*

## Project Progress
- **Merged/Closed PRs today: 0** – No pull requests were updated, merged, or closed. No feature advancements or fixes were integrated.

## Community Hot Topics

1. **[#972 [OPEN] bug: telegram channel stop respond after some idle time](https://github.com/nullclaw/nullclaw/issues/972)** — **3 comments • 0 👍**
   - *Author:* i11010520 | Created: 2026-06-30 | Updated: 2026-07-11
   - *Discussion:* User reports Telegram channel goes silent after overnight idle, despite `nullclaw` backend running normally (`nullclaw agent -m "ping"` works). The issue has been open 12 days with 3 comments, suggesting community investigation is ongoing. No maintainer response is visible in the summary.
   - *Underlying need:* Users require reliable 24/7 multi-channel operation without manual reconnection; likely an integration/connection pool timeout issue.

2. **[#975 [OPEN] Add grok-cli provider (run Grok via the grok CLI's login session, unmetered)](https://github.com/nullclaw/nullclaw/issues/975)** — **1 comment • 0 👍**
   - *Author:* yanggf8 | Created: 2026-07-11 | Updated: 2026-07-11
   - *Discussion:* User requests adding a `grok-cli` provider, following the same subprocess pattern already used for `claude-cli`, `codex-cli`, and `gemini-cli`. References specific code location (`src/provider_probe.zig:43`). Fresh issue with only author comment so far.
   - *Underlying need:* Users want to leverage paid Grok subscriptions via local CLI, mirroring existing patterns — indicates growing demand for xAI integration and "unmetered" access models.

## Bugs & Stability

| Issue | Severity | Summary | Fix PR Exists? |
|---|---|---|---|
| [#972 – Telegram channel stops responding after idle](https://github.com/nullclaw/nullclaw/issues/972) | **Medium** | Telegram integration loses connection after >1 hour idle; backend remains healthy. Affects user availability across time zones. | No |
| *No other bugs reported in this 24h window* | – | – | – |

*Note:* The Telegram bug has been open 12 days without a linked fix PR, suggesting it may be non-trivial (possibly related to Telegram Bot API timeout settings or Python/Go runtime channel handling).

## Feature Requests & Roadmap Signals

- **grok-cli provider (#975)** – Clear pattern-matching request against existing CLI provider architecture. Given the project already supports `claude-cli`, `codex-cli`, and `gemini-cli`, this is highly likely to be accepted if a contributor volunteers implementation. Could land in next minor release (v0.x) if merged.
- **No other feature requests** were updated in the last 24 hours.

## User Feedback Summary

- **Pain point:** Telegram channel unreliability after idle (Issue #972). User explicitly contrasts "backend works fine" with "channel goes dead" — signaling integration-layer frustration, not core engine issues.
- **Use case expansion:** Grok CLI integration request (#975) signals users are running multiple AI providers locally via NullClaw's abstraction layer, seeking cost-effective or subscription-based access.
- **Satisfaction indicators:** No complaints about core agent performance, memory system, or CLI — the backend stability is actually highlighted as a positive in the bug report.

## Backlog Watch

| Issue | Status | Days Open | Requires Maintainer |
|---|---|---|---|
| [#972 – Telegram channel idle bug](https://github.com/nullclaw/nullclaw/issues/972) | Open, no assignee | 12 days | **Yes** – bug impacts daily usability; community has discussed but no resolution path visible. A maintainer triage comment would provide visibility on prioritization. |

*No other long-unanswered issues or PRs were present in the data window.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-12

## Today's Overview

IronClaw is in a period of **high development velocity**, with 50 PRs updated in the last 24 hours (35 open, 15 merged/closed) and 8 active issues. The project is undergoing a **major architectural transition** toward the "Reborn" runtime, as evidenced by the 8-part extension-runtime PR train (#5993–#6000) and multiple PRs porting v1 behavior to the Reborn architecture. Activity is **heavily dominated by core contributors** working on the Reborn migration, with lower-risk bug fixes from `ironloopai[bot]` and community contributors addressing UI/UX defects. **No new releases were published** today, despite a release PR (#5598) remaining open for 9 days, suggesting a deliberate hold to bundle more changes. Project health indicators are mixed: strong forward momentum on architecture, but emerging community frustration around Windows compatibility, security reporting channels, and local development ergonomics.

## Releases

**No new releases today.** A release PR (#5598) has been open since July 3 and remains unmerged. That PR would bump `ironclaw_common` from 0.4.2 → 0.5.0 (breaking changes), `ironclaw_skills` from 0.3.0 → 0.4.0 (breaking changes), and `ironclaw` from 0.24.0 → 0.29.1. The delay likely reflects the team's desire to include the Reborn migration PRs before cutting a release.

## Project Progress

**15 PRs were merged or closed in the last 24 hours.** Key advancements:

| PR # | Title | Impact |
|------|-------|--------|
| #6003 | `ci: route workflows to ci-standard runner` | Infrastructure: Migrated all CI workflows from `ubuntu-latest-8-cores` to `ci-standard` runner, improving artifact build pipeline with caching and error handling |
| #5997 | `test(e2e): address Emulate fixture review` | Testing: Defensive parsing of provider response collections, test-owned Drive file creation |
| #5951 | `fix(llm): recover near.ai streaming tool-call args` | Bug fix: Restored correct tool invocation when reasoning models append trailing tokens to complete arguments objects |

**Top active feature work (open PRs):**
- **Extension runtime train (3/8 PRs active):** #5996 (P2 — adapters, ExtensionHost, dispatch cutover), #5995 (P1 — manifest v3, VendorId, recipes), plus P0 likely merged
- **Queued message steering:** #5981 — Ported to current main, allows busy-thread messages to be queued rather than rejected
- **Responses API coverage:** #5991 — Requires all 16 served Responses API E2E cases in Reborn PR CI
- **Agent documentation rewrite:** #6001 — Complete rewrite of `AGENTS.md` for Reborn-native guidance

## Community Hot Topics

### Most Active Issues

1. **#6000 — Security reporting process** (0 comments, but high sensitivity)
   - *Link:* https://github.com/nearai/ironclaw/issues/6000
   - *Need:* Community reporter has a security finding in Reborn runtime but cannot find private disclosure channel. No `SECURITY.md`, private vulnerability reporting disabled. **This is an urgent governance gap** — the project currently offers no safe way to report sensitive findings.

2. **#5999 — Windows: local-dev-yolo cannot start** (0 comments)
   - *Link:* https://github.com/nearai/ironclaw/issues/5999
   - *Need:* Windows users are blocked entirely from local development. `MountAlias` expects POSIX paths; Windows host paths cause crash. Affects anyone developing on Windows.

3. **#5998 — No local MCP server transport** (0 comments)
   - *Link:* https://github.com/nearai/ironclaw/issues/5998
   - *Need:* `stdio` rejected, `http://127.0.0.1` denied. Developers cannot test local MCP servers at all. Blocks local tool development.

4. **#5992 — Daily failure taxonomy** (0 comments)
   - *Link:* https://github.com/nearai/ironclaw/issues/5992
   - *Need:* Benchmark suite shows ~77 tasks failing due to benchmark defects (not model quality). Top failures: `MathLogic` assertions, `SuperGLUE-CBT` variable overrun.

### Most Active PRs (by size/complexity, as comment counts are undefined)

PRs are not showing comment counts, but size indicators suggest heavy review:
- **#5965** (XL, risk: low) — Recoverable errors now reach model diagnostic channel
- **#5996** (XL, risk: medium) — Extension runtime P2, production composition
- **#5981** (XL, risk: low) — Queued message steering, ported to main

## Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical** | #6000 — No security reporting channel exists; vulnerability finder cannot disclose privately | Open (no comments) | None |
| **High** | #5999 — Windows: `local-dev-yolo` completely broken due to POSIX path assumption | Open | None |
| **High** | #5998 — No transport for local MCP servers; blocks all local tool development | Open | None |
| **Medium** | #5969 — GLM-5.2 missing from default model list (now closed) | **Closed** | ✅ Fixed |
| **Medium** | #5987 — Attestation docs too complex; users want local proxy service | Open | None |
| **Medium** | #5968 — HTTP tool fails on third-party APIs without MCP support | Open | None |

**Stability improvements from merged PRs:**
- #5951 — Fixed streaming tool-call argument corruption with reasoning models (DeepSeek-V4-Flash)
- #5965 (open) — Recoverable errors now carry diagnostic detail to model instead of dropping it

## Feature Requests & Roadmap Signals

**High-probability next features** (already in PR review):
1. **Extension runtime** (#5995, #5996) — Manifest v3, VendorId, recipes, adapters. This is the foundation for third-party plugin support. Likely to land in next week.
2. **Queued message steering** (#5981) — Non-blocking busy threads. Heavy UX improvement for multi-agent scenarios.
3. **Responses API maturity** (#5990, #5991) — Closing HTTP semantics, lifecycle, and tool-resume gaps. Likely a v0.30 milestone.

**User-requested features** (from issues):
- **Local proxy service for private inference** (#5987) — Users want a simple local service that proxies to CVM with attestation verification. This aligns with the "local dev" theme and could be a fast-follow if Reborn stabilizes.
- **Generic HTTP tool for third-party APIs** (#5968) — Users need to connect to services like Attio that lack MCP integrations. Medium complexity; needs auth and egress support.

**Predictions for next release:**
- Extension runtime (P0–P2) will likely merge before release
- Queued message steering and Responses API hardening are strong candidates
- Windows compatibility fix (#5999) may slip unless a community contributor implements it

## User Feedback Summary

**Pain points (explicitly reported):**
- **Windows users are second-class citizens:** `local-dev-yolo` completely broken on Windows (#5999). No workaround mentioned.
- **Local development is overly complex:** Attestation docs too hard (#5987), local MCP servers impossible (#5998). Users want simpler local tooling.
- **Third-party API integration is fragile:** Non-MCP services fail with opaque errors (#5968). Users want automatic failover or generic HTTP support.
- **Security disclosure is impossible:** Contributor found a real security issue but cannot report it (#6000). **This is actively harmful** — it may discourage security researchers and leave vulnerabilities unpatched.

**Satisfaction signals:**
- The Reborn architecture migration is receiving heavy core contributor investment (8-PR train, daily commits from serrrfirat and BenKurrek)
- Bug fix PRs from `ironloopai[bot]` show automated regression coverage for UI issues (approval gates, chat history pagination, tool activity visibility)
- The daily failure taxonomy (#5992) shows active monitoring of benchmark quality

## Backlog Watch

| Priority | Item | Issue | Days Open | Risk |
|----------|------|-------|-----------|------|
| **Urgent** | No security disclosure channel | #6000 | 1 day | **High** — real vulnerability cannot be reported |
| **High** | Release 0.29.1 stalled | #5598 | 9 days | Medium — delays breaking change adoption |
| **Medium** | GLM-5.2 model list fix needed reopening? | #5969 | 2 days (closed) | Low — closed as fixed, but user may need to re-verify |
| **Low** | Automation normalization edge cases | #5906, #5907, #5908, #5909, #5910, #5911, #5914 | 2 days | Low — multiple ironloopai[bot] PRs in review |

**Maintainer attention needed:**
1. **#6000** — Must create a `SECURITY.md` and enable private vulnerability reporting immediately. This is a governance emergency.
2. **#5999, #5998** — Windows and local-MCP issues are blocking developer onboarding. A single contributor (Anubhav-Koul) reported all three, suggesting an engaged community member who may go elsewhere if ignored.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the structured digest for **LobsterAI** based on the data snapshot from **July 12, 2026**.

---

## LobsterAI Project Digest – July 12, 2026

### 1. Today’s Overview
The project shows **low activity** over the last 24 hours, with **3 open issues** and **1 open PR** updated but none closed or merged. There are **no new releases**. All tracked items are marked as stale (last updated over 3 months ago), indicating a potential pause in active development or a maintenance phase. The community, however, continues to engage with existing enhancement requests, notably around user interface improvements for tool calls and error state notifications.

### 2. Releases
**None.**  
No new releases were published in the last 24 hours. The latest available version remains `v2026.4.1` (referenced in Issue #1329).

### 3. Project Progress
**No PRs were merged or closed today.**  
- **PR #1327** remains open (last updated Jul 11). This PR implements the batch collapse/expand feature for tool call blocks. It is linked to Issue #1326 and has not been integrated.

### 4. Community Hot Topics
Two issues and one PR received attention, each with **1 comment** and **0 reactions**:

- **#1326 – ToolUse batch expand/collapse** (updated Jul 11)  
  [Issue Link](https://github.com/netease-youdao/LobsterAI/issues/1326)  
  *PR #1327 is a direct implementation attempt.*  
  **Underlying need:** Users find it tedious to manually expand/collapse multiple tool call blocks in a single AI turn. The request is for a global toggle button to improve workflow efficiency in the Cowork interface.

- **#1329 – Scheduled task notification channels empty** (updated Jul 11)  
  [Issue Link](https://github.com/netease-youdao/LobsterAI/issues/1329)  
  **Underlying need:** A functional bug where new scheduled tasks offer no notification channel options. Users cannot configure alerts beyond "no notification."

- **#1330 – Error status red dot badge** (updated Jul 11)  
  [Issue Link](https://github.com/netease-youdao/LobsterAI/issues/1330)  
  **Underlying need:** Sessions in `error` status are invisible in the sidebar. Users request a red indicator (similar to the existing running/notification indicators) to quickly spot problematic sessions.

### 5. Bugs & Stability
**One active bug report exists, ranked moderate severity:**

- **#1329 – Scheduled task notification channel missing options** (moderate)  
  Users cannot select any notification method for new scheduled tasks—only "no notification" is available. This blocks configuration of automated alerts. **No fix PR has been created.**

No crashes, regressions, or security-related bugs were reported in the last 24 hours.

### 6. Feature Requests & Roadmap Signals
Two feature requests were discussed:

- **ToolUse batch control (#1326/PR #1327)** – A well-structured request with a corresponding PR. Likely to be merged in the next minor release if a maintainer picks it up.
- **Error status red dot badge (#1330)** – A small UI improvement with clear specification (color, glow effect). Low implementation complexity. Could be included in the next UI polish update.

**Prediction:** The batch control feature is the most mature (PR already written) and may appear in `v2026.4.2` or later. The error badge is likely to follow.

### 7. User Feedback Summary
Feedback is limited but focused on **efficiency and visibility**:

- **Pain point:** Expanding/collapsing multiple tool blocks individually is slow and annoying.
- **Pain point:** It is impossible to set up meaningful notification channels for scheduled tasks.
- **Satisfaction indicator:** No negative or positive sentiment was expressed; users are filing structured feature requests rather than complaints, suggesting a constructive user base.

### 8. Backlog Watch
The following items are stale (no activity for >90 days) and require **maintainer attention**:

| Item | Type | Status | Last Update | Reason for Concern |
|------|------|--------|-------------|-------------------|
| [#1326](https://github.com/netease-youdao/LobsterAI/issues/1326) | Issue/Feature | Open | Apr 2 → Jul 11 | Has a ready PR but no merge activity |
| [#1327](https://github.com/netease-youdao/LobsterAI/pull/1327) | PR | Open | Apr 2 → Jul 11 | No review or CI check updates; likely stuck |
| [#1329](https://github.com/netease-youdao/LobsterAI/issues/1329) | Bug | Open | Apr 2 → Jul 11 | Function-breaking bug with no fix in progress |
| [#1330](https://github.com/netease-youdao/LobsterAI/issues/1330) | Issue/Feature | Open | Apr 2 → Jul 11 | Low effort but ignored |

**Recommendation:** Review and merge PR #1327 to close Issue #1326, then address the notification channel bug (#1329) as a priority bug fix.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – 2026-07-12**

---

## 1. Today's Overview
The Moltis project experienced minimal activity in the last 24 hours. No new issues were opened or closed, and no releases were published. A single pull request (#1147) remains open, addressing a functional bug in the CalDAV integration. Overall project health appears stable but quiet, with the development focus currently centered on backend reliability rather than new features.

---

## 2. Releases
**None** – No new versions or release artifacts were published in the last 24 hours.

---

## 3. Project Progress
- **No merged or closed PRs** in the last 24 hours.
- **Open PR #1147** (`fix(caldav): honor time range in list_events via server-side calendar-query`) by thoscut addresses a real functional gap where the `list_events` tool ignored the `start`/`end` parameters, always fetching all events. The fix implements proper CalDAV calendar-query filtering. This is a clear improvement for the CalDAV integration's accuracy and aligns with documented behavior.

---

## 4. Community Hot Topics
- **PR #1147** ([link](https://github.com/moltis-org/moltis/pull/1147)) is the only activity today. Although it has no comments yet, the underlying issue – that a documented parameter had no actual effect – is significant. It signals user reliance on time-range filtering for calendar tools, likely impacting workflows like scheduling assistants, event summarization, or day planning features.

---

## 5. Bugs & Stability
**Medium Severity** – The bug addressed in PR #1147:
- **Issue**: CalDAV `list_events` does not apply the `start`/`end` time range parameters; it fetches all calendar resources unconditionally.
- **Impact**: Users querying large calendars may receive excessive, irrelevant data. This could lead to higher latency or incorrect downstream processing.
- **Fix status**: PR #1147 is open and ready for review. No reports of crashes or regressions were logged today.

---

## 6. Feature Requests & Roadmap Signals
No new feature requests were filed today. However, the fix in PR #1147 suggests that proper CalDAV server-side querying is being prioritized, which could be a precursor to:
- More efficient calendar synchronization
- Support for recurring event expansion
- Faster response times in large calendar contexts

No roadmap updates were published.

---

## 7. User Feedback Summary
No explicit user feedback was recorded today. The existence of PR #1147 implies that at least one user (or contributor) encountered a mismatch between documentation and actual behavior, indicating a pain point around unreliable filtering in calendar tools. This is likely a concern for developers building calendar-aware AI agents that require precise event retrieval.

---

## 8. Backlog Watch
- **No stale issues or PRs** currently require maintainer attention. The only open item (PR #1147) was created yesterday and is recent. No other open issues or PRs appear to have been neglected. Project backlog is clean, but with zero open issues, the community may be waiting for a new release or a broader call for contributions.

---

*Generated from GitHub data for moltis-org/moltis, reflecting activity up to 2026-07-12.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for **CoPaw (agentscope-ai/CoPaw)** for **2026-07-12**.

---

## CoPaw Project Digest: 2026-07-12

### 1. Today's Overview

The CoPaw project is experiencing an **intense stabilization crisis** following the rollout of **v2.0.0**. Over the last 24 hours, the community has surfaced 23 active issues, with the vast majority being critical regressions related to the v2.0.0 upgrade. The most severe reports involve **Windows sandbox failures** (pwsh process explosion), **data incompatibility** (broken session mapping, orphaned tool messages), and **runtime logic errors** (context compression breaking API calls). While the community is actively engaging in debugging (averaging 2+ comments per issue), the maintainers have been **highly responsive on PRs**, merging 4 fixes today, primarily for UI dark-mode contrast issues. The overall signal is a **high-velocity but high-pain release cycle**.

### 2. Releases

**No new releases were cut today.** The last release remains **v2.0.0**. The data suggests this version introduced severe regressions in sandbox execution, memory management, and session state handling.

### 3. Project Progress

Four pull requests were **merged/closed** today. All activity focused on **fixing dark-mode contrast** in the web console:

- **PR #5970** (Closed) – Fix dark mode text contrast (loop templates, chat history).
- **PR #5971** (Closed) – Fix dark mode text contrast (addressed Copilot review suggestions).
- **PR #5973** (Closed) – Fix dark mode text contrast (refined theme variables).
- **PR #5974** (Closed) – Fix dark mode text contrast (improved CSS variable fallback logic).
- **Author**: *Marlin-Phone* contributed all four closed UI fixes.

**Open PRs:**
- **PR #5968** (Open) – Fix `skills page` scroll loading stops after first batch (first-time contributor *feng183046*).
- **PR #5975** (Open) – A newer (likely v2) of the dark-mode fix (still open / pending review).
- **PR #5953** (Open) – Fix truncation for scroll-capped tool results (persists large outputs as artifact files).

### 4. Community Hot Topics

The following issues generated the most discussion (comments) in the last 24 hours:

- **[🔥 #5951] Windows Sandbox: pwsh recursion, ACL pollution, missing creation flags** (7 comments)
    - *Need:* Urgent block. User reports the sandbox is **unusable** on Windows due to infinite `pwsh` window explosion and inability to disable the sandbox after upgrade.
    - *Link:* [Issue #5951](https://github.com/agentscope-ai/QwenPaw/issues/5951)
- **[#4124] Feature: Support OAuth login for OpenAI / Codex** (4 comments)
    - *Need:* Enterprise SSO integration. User requests `hermes auth add openai-codex --type oauth` style support.
    - *Link:* [Issue #4124](https://github.com/agentscope-ai/QwenPaw/issues/4124)
- **[#5788] Bug: Skills list shows only 20 items, scroll-to-load fails** (4 comments)
    - *Need:* UI usability bug. Progressive rendering blocks 'load more'.
    - *Link:* [Issue #5788](https://github.com/agentscope-ai/QwenPaw/issues/5788) *(Fix PR #5968 is open)*
- **[#5961] Bug: v2.0.0 loop execution – agent writes/deletes files repeatedly** (3 comments)
    - *Need:* v2.0.0 regression. Agent gets stuck in a write/delete loop with Qwen3.7-plus model.
    - *Link:* [Issue #5961](https://github.com/agentscope-ai/QwenPaw/issues/5961)
- **[#5952] Bug: auto-memory fails** (`No module named '_scripts'`) (3 comments)
    - *Need:* v2.0.0 regression. Auto-memory summarization completely broken in the Windows desktop app.
    - *Link:* [Issue #5952](https://github.com/agentscope-ai/QwenPaw/issues/5952)

### 5. Bugs & Stability

**Severity: Critical (Blocking)**

1.  **Windows Sandbox Crash Loop (Issue #5951)**
    - *Description:* Shell command execution spawns infinite pwsh windows, exhausting RAM. No way to disable sandbox.
    - *Status:* No fix PR yet. Root cause identified: sandbox init flow missing `CREATE_NO_WINDOW` and recursive process spawning.
    
2.  **Data Migration / Session Breakage (Multiple Issues)**
    - *Description:* Upgrading to v2.0.0 breaks session mapping in `history.db` (#5964), causes orphaned tool messages (#5962, #5956), and fails to parse legacy memory state (#5967).
    - *Impact:* Users cannot continue conversations after upgrade. Downgrade is the only workaround.
    - *Status:* Discussed heavily but no fix PR yet.

3.  **Context Compression Breaks Tool/Result Pairs (Issue #5960)**
    - *Description:* The new split logic in `_split_context_for_compression()` splits `tool_call` from `tool_result` across messages, causing API 400 errors.
    - *Impact:* Affects all users with long conversations using tools.
    - *Status:* Issue open; likely high-priority bug.

**Severity: High (Usability/Degraded)**

4.  **Shell Command Hard-Coded 60s Timeout (Issue #5963)**
    - *Description:* `execute_shell_command` kills any process running >60s, even if `shell_command_timeout` is configured higher. Returns false SUCCESS.
    - *Impact:* Blocks long-running shell scripts (e.g., compilation, data processing).
    - *Status:* Issue open; no fix PR.

5.  **Memory Embedding Fails on Chinese Text (Issue #5950)**
    - *Description:* Truncation uses character count, not token count. Chinese text or long memory files cause 400 errors.
    - *Impact:* Users with Chinese-language memory or long files.
    - *Status:* Issue open; root cause identified.

6.  **Plugin Routes Lost After Workspace Hot-Reload (Issue #5977)**
    - *Description:* Global singleton registry gets corrupted on workspace reload, removing plugin HTTP routes.
    - *Impact:* Plugin services like `dag-dashboard` become inaccessible after a reload.
    - *Status:* Reported today; no fix PR yet.

### 6. Feature Requests & Roadmap Signals

- **OAuth Login (#4124):** User requests first-class OAuth login for OpenAI/Codex providers. This is a common enterprise requirement and signals a direction toward enterprise SSO.
- **Channel Tool Result Control (#5976):** User requests granular control over which tool results are sent to channels (chat apps), and truncation of results (show first/last N lines). This indicates user fatigue with verbose channel messages.
- **Permission System Enhancement (#5955, #5958):** Users are asking for a **tool whitelist** mode (allow once, allow always) to reduce repetitive approval prompts. This is a direct UX improvement request.

**Prediction for v2.1.0:**
- Fix for context compression (#5960) and session data migration (#5964) are **guaranteed** to be included.
- A tool permission whitelist mode (#5955/comment) is likely to be prioritized given community feedback.

### 7. User Feedback Summary

- **Frustration Level:** High. Users describe v2.0.0 as "almost unusable" (#5951), "broken" (#5952), and "endless loops" (#5961).
- **Main Pain Points:**
    1.  **Upgrade breaks existing data:** Users cannot continue conversations after upgrading (#5964, #5967).
    2.  **Sandbox is hostile on Windows:** Desktop app forces a broken sandbox environment (#5951).
    3.  **Context compression degrades API reliability:** New compression logic breaks tool calls (#5960).
    4.  **Permission system is too rigid:** Users feel harassed by repeated approval prompts (#5955, #5958).
- **Bright Spot:** Users are deeply invested in debugging. They are providing detailed root cause analysis (example: #5950, #5960). This indicates a technically sophisticated community that values the project.

### 8. Backlog Watch

The following issues are older but remain **unanswered or without a maintainer response**, posing risk:

- **[Issue #2664 – Intel Mac Support](https://github.com/agentscope-ai/QwenPaw/issues/2664)** (Created: 2026-03-31, Updated: 2026-07-11)
    - *Status:* Open for **3+ months**. Last update was a community comment, no official response.
    - *Risk:* Suggests Mac (Intel) users are a silent but potentially growing segment without official support.
- **[Issue #4124 – OAuth Login for OpenAI/Codex](https://github.com/agentscope-ai/QwenPaw/issues/4124)** (Created: 2026-05-08, Updated: 2026-07-11)
    - *Status:* 2+ months open. No maintainer comment.
    - *Risk:* Delayed enterprise feature may cause users to fork or switch.

**Recommendation:** Maintainers should triage **Issue #2664** (Mac support) and **#4124** (OAuth) to either label as "planned" or provide a timeline to close the loop.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-12

## 1. Today's Overview
ZeroClaw continues at **very high velocity** with 50 issues and 50 PRs updated in the last 24 hours, all 50 open issues remaining active. No new releases were published today. The project is deep in **v0.8.3 milestone execution**, with several large stacked PR series advancing concurrently: the goal-mode implementation split (tracker #8681), gateway Kanban board RFC (#8832), and persistent memory parity (#8891). The PR merge/close rate (4 out of 50) suggests the team is consolidating review readiness rather than landing features today. **Project health is stable but strained** — high-priority (P1) bugs remain open in runtime stability, provider compatibility, and security boundaries, with no closed items in the last 24 hours.

---

## 2. Releases
**None.** No new releases published in the last 24 hours.

---

## 3. Project Progress
**Merged/Closed PRs (4):** No detailed close summaries are available, but the 4 recently-closed items suggest minor maintenance and docs fixes landed. Open PRs show the following major workstreams advancing:

- **Goal Mode (vrurg):** A 4-PR stacked set (#8687, #8688, #8689, #8746, #8996) adding goal controller/verifier, trusted goal tools, channel `/goal` command admission, and fix for running goals across daemon reload. This is the core of tracker #8681.
- **Gateway Improvements:** PR #8173 (in-app upgrade with auto-restart) and PR #8905 (per-agent in-flight prompt counter) are under review. RFC #8832 proposes a Kanban board feature.
- **Provider Fixes:** PR #8838 (idle-bound SSE streaming timeout) and PR #8935 (Gemini thought signature preservation) address P1 provider bugs.
- **Config & Quickstart:** PR #8987 (capability-safe runtime defaults) and PR #8751 (LocalWhisperConfig default fix).
- **Docs & Maintainers:** PR #8924, #9003, #9004 clarify review evidence, fix link references, and stop linking private helpers.
- **Observability:** PR #8928 (active log path in Doctor diagnostics) and PR #8910 (partial doctor results on timeout).

---

## 4. Community Hot Topics
The most active discussions this week:

### Most Commented: Goal Mode Tracker
- **#8681** [[Tracker]: Goal mode implementation split stack](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) — 9 comments. This tracker coordinates splitting the accepted goal-mode implementation into reviewable PRs. The high activity indicates this is the **top architectural priority** right now.

### Tool Availability Mismatch Across Entry Points
- **#8054** [[Bug]: System prompt tool-availability mismatch](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) — 9 comments. A P1 bug where system prompts tell reasoning models "no tools available" while native/MCP tools are present. Affects channels, gateway, WebSocket, multimodal, and `/think` entry points. Fix done for direct runtime path only.

### Default Context Budget Problem
- **#5808** [[Bug]: Default 32k context budget exceeded by system prompt alone](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) — 8 comments. A long-standing P1: first LLM iteration exceeds budget by ~3.3x purely from system prompt + tool definitions. This forces perpetual preemptive trimming.

### Trending Topics with Sustained Discussion
- **#7952** [Publish full-channel prebuilt assets](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) — 6 comments. Community wants optional `channels-full` binary alongside lean default.
- **#8134** [session_ttl_hours auto-truncation](https://github.com/zeroclaw-labs/zeroclaw/issues/8134) — 3 comments. Teams operating through Slack, Telegram etc. need stale session cleanup.
- **#7759** [Decouple gateway WebSocket from agent turn lifecycle](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) — 3 comments. Background turn execution + reconnect resume.
- **#8654** [Skill-review fork panic SIGSEGV](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) — 3 comments. Critical crash after tool-heavy turns.

**Underlying need:** The community is pushing for **production reliability** (context budgets, crash handling, session management) and **richer interfaces** (Kanban, full-channel support, gateway improvements).

---

## 5. Bugs & Stability
**Critical (S1 — workflow blocked):**
- **#5808** — Default 32k context budget exceeded on iteration 1 → perpetual preemptive trim. No linked fix PR. Open since April.
- **#8675** — Malformed native tool-call arguments sent unvalidated to OpenRouter/OpenAI-format providers → provider 400 → empty reply. No linked fix PR.
- **#8642** — MCP/tool-schema cloning drives unbounded RSS growth (OOM risk). No linked fix PR.

**High (S2 — degraded behavior):**
- **#8654** — Skill-review fork panics with SIGSEGV after tool-heavy turn (panic=abort, pod exit 139). No linked fix PR.
- **#8731** — Stdio-based MCP servers accumulate as zombie processes under daemon PID. No linked fix PR.
- **#6350** — WhatsApp Web allowed-numbers bypassed for LID-based contacts → silent drops. No linked fix PR.

**Medium (P2):**
- **#8578** — Daemon fails to terminate process on startup failure → leak. No linked fix PR.
- **#8720** — Bedrock Nova 2 Lite model caching error (feature disable config requested). Discussion open.
- **#7872** — QQ group replies missing msg_id for passive reply sends. Tracker accepted.

**Fix PRs in flight:**
- **PR #8838** — Fixes idle-bound SSE streaming on shared transport (provider stalls). Needs author action.
- **PR #8845** — Fixes live session rebuild on agents.alias.model_provider edits. Needs author action.
- **PR #8751** — Fixes LocalWhisperConfig serde defaults (zeros instead of real values). Needs author action.
- **PR #8759** — Fixes zerocode clipboard screenshot paste reliability. Needs author action.
- **PR #8935** — Fixes Gemini thought signature preservation in tool-call history.
- **PR #8910** — Shows partial doctor results on probe timeout.
- **PR #7960** — Fixes execute_pipeline sub-tool ToolAccessPolicy bypass. Needs author action.

---

## 6. Feature Requests & Roadmap Signals

### Likely for v0.8.3 / near-term:
- **Goal Mode** (tracker #8681) — Stacked PR series (#8687-#8689, #8746, #8996) is clearly the **flagship feature** for the next release. Controllers, verifiers, channel commands, delegation boundaries.
- **Persistent Memory Parity** (tracker #8891) — Multi-PR rollout for curation, relevance, operability. Active since July 9.
- **Discord Interaction Parity** (tracker #7831) — Embeds, typed slash options, components, voice.
- **WASM Plugin Runtime** (tracker #7314, RFCs #8135, #7822, #8187) — Multiple design RFCs in accepted status for Wasm-first plugins, lifecycle hooks, hardware host functions.
- **Gateway Kanban Board** (RFC #8832) — Opt-in Kanban for agent work visualization. 2 comments, RFC stage.

### User-requested features with traction:
- **#8134** — session_ttl_hours auto-truncation. 3 comments, accepted, needs maintainer review.
- **#7952** — Full-channel prebuilt assets. 6 comments, blocked on maintainer review.
- **#7759** — Decouple gateway WebSocket from agent turn lifecycle. 3 comments, accepted P1.
- **#6695** — Skills management in gateway web UI. 1 comment, accepted P2.

---

## 7. User Feedback Summary

**Pain Points:**
- **Context budget exhaustion** (#5808): Default config unusable out-of-box for many models; users must manually tune `max_context_tokens`.
- **Tool availability confusion** (#8054): System prompts lie about available tools depending on entry point; reasoning models get wrong signals.
- **Crash after tool-heavy turns** (#8654): SIGSEGV kills the entire agent process with `panic=abort` — operator must restart.
- **WhatsApp silent drops** (#6350): Allowed-numbers filter silently drops messages from LID-based contacts; no log error.
- **MCP zombie processes** (#8731): Daemon leaks sub-processes over time; memory unbounded.
- **OOM risk** (#8642): Tool-schema cloning grows RSS without bound; requires manual daemon restart.
- **Configuration confusion** (#8720): Users cannot disable caching for Bedrock models that error; workaround needed.
- **Startup failure leak** (#8578): Failed daemon start leaves stale processes.

**Use Cases:**
- Teams running ZeroClaw through Slack/Telegram (need session TTL, #8134).
- Operators behind NAT/CGNAT needing relay access (zerorelay tracker #8358).
- Users wanting self-contained binaries with full channel support (#7952).
- Gateway web UI users wanting more management features (Kanban #8832, skills UI #6695).

**Satisfaction Signals:**
- Active feature development (goal mode) suggests maintainers are investing in advanced agent capabilities.
- Multiple RFCs accepted (WASM, Kanban, relay) indicate responsive governance.

---

## 8. Backlog Watch

### Long-unanswered important items needing maintainer attention:

| Issue | Age | Priority | Last Activity | Notes |
|-------|-----|----------|---------------|-------|
| [#5808] Context budget exceeded | 87 days | P1 | Jul 11 | No fix PR; perpetual trim |
| [#8054] Tool availability mismatch | 22 days | P1 | Jul 11 | Fix exists for one path only |
| [#6350] WhatsApp silent drops | 70 days | P1 | Jul 11 | No fix PR; S2 severity |
| [#7952] Full-channel prebuilt assets | 23 days | P2 | Jul 11 | Blocked; 6 comments supporting |
| [#7759] WebSocket/agent lifecycle decoupling | 26 days | P1 | Jul 11 | Accepted but no implementation PR |
| [#8675] Malformed tool-call arguments | 9 days | P1 | Jul 11 | No fix PR; S1 severity |
| [#8642] MCP/tool-schema OOM growth | 9 days | P1 | Jul 11 | No fix PR; severe memory leak |
| [#8731] MCP zombie processes | 7 days | P1 | Jul 11 | No fix PR yet |
| [#8578] Daemon startup leak | 11 days | P2 | Jul 11 | No fix PR |

### PRs needing maintainer review or author action:
- **PR #7960** — ToolAccessPolicy bypass fix. Needs author action since June 19.
- **PR #8384** — Inkbox channel. Needs maintainer review since June 27.
- **PR #8751** — LocalWhisperConfig defaults. Needs author action since July 6.
- **PR #8759** — Clipboard paste reliability. Needs author action since July 6.
- **PR #8845** — Session rebuild on provider edits. Needs author action since July 8.
- **PR #8838** — SSE streaming timeout. Needs author action since July 8.
- **PR #8905** — In-flight prompt counter. Needs author action since July 9.

**Notable:** The goal mode stacked PRs (#8687, #8688, #8689, #8746, #8996) are all **large (XL size)** with high risk and no `needs-author-action` or `needs-maintainer-review` labels, suggesting they are actively under review. This is the project's top priority workstream.

---

*Generated from GitHub data snapshot for 2026-07-12.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*