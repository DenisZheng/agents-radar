# OpenClaw Ecosystem Digest 2026-07-09

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-09 01:50 UTC

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

# OpenClaw Project Digest — 2026-07-09

## Today's Overview

OpenClaw continues to show extreme community engagement with **500 issues and 500 PRs updated in the last 24 hours**, though **no new releases** were cut today. The project faces serious maintenance challenges: **458 of 500 issues remain open**, and **414 of 500 PRs are still open**, indicating a widening gap between community contributions and maintainer review capacity. High-severity defects around message routing, session isolation, agent orchestration, and data integrity dominate the backlog, with multiple "diamond lobster" (highest severity) issues showing **P1 priority** and remaining unresolved for weeks or months. The project is functionally stable for single-session personal use but remains **brittle for multi-agent, multi-channel production deployments**.

## Releases

**No new releases were published today.** The latest available versions remain from earlier in 2026 (notably 2026.3.x series), as reflected in issue reports referencing builds like `2026.3.11`, `2026.3.13`, and `2026.5.20`. Users are reporting regressions between patch releases (e.g., Issue [#85333](#) shows `openclaw doctor --fix` slowing from 55s to 229s+ between 5.19 and 5.20), suggesting the release pipeline may be deprioritizing stable patch cuts in favor of feature work.

---

## Project Progress

**86 PRs were merged or closed today.** Notable cleanups and fixes that advanced:

- **Critical discard fix**: PR [#102329](#) (fix: drop image blocks from tool results for text-only Anthropic models) — directly addresses a 400 error blocking text-only model users (linked to Issue [#102324](#)).
- **Replay deduplication**: PR [#99365](#) (fix: persistent replay dedupe + bounded durable replay) — prevents duplicate agent runs after gateway restart or channel reconnect across Discord, LINE, Mattermost, and WhatsApp.
- **Provider failover improvement**: PR [#102280](#) (fix: avoid retrying permanent provider errors) — prevents 3x redundant retries when a permanent failure is detected.
- **Slack branding fix**: PR [#102340](#) (fix: allow configuring Slack App Home copy) — lets branded Slack apps replace default OpenClaw copy in the Home tab.
- **Codex compatibility**: PR [#102343](#) (fix: remote app servers can read OpenClaw skills) — fixes path resolution for distributed Codex deployments.
- **OAuth tool availability**: PR [#102003](#) (fix: OAuth-only xAI tools missing from CLI-backend sessions) — restores `x_search` and `code_execution` for non-web sessions.
- **Memory leak fixes (3 PRs)**: PRs [#101705](#), [#101745](#), [#101643](#) cap unbounded Set/Map growth in warning deduplication caches across config, codex, and session-maintenance paths.

---

## Community Hot Topics

### Most Active Issues (by comment count)

1. **Issue [#25592](#) "Text between tool calls leaks to messaging channels"** (35 comments, P1 diamond lobster) — Users report internal processing acknowledgments, error messages, and narration appearing as visible messages in Slack, iMessage, etc. This has been open since **February 24** and affects all channels. **Underlying need**: A reliable output filter layer that distinguishes internal agent commentary from user-facing responses.

2. **Issue [#44925](#) "Subagent completion silently lost"** (21 comments, P1 diamond lobster) — Subagent orchestration has **three distinct failure modes** where task results are never delivered and never retried. The author provided precise error codes (E31, E42, E45). **Underlying need**: Formal subagent lifecycle tracking with guaranteed result delivery and observable failure alerts.

3. **Issue [#48003](#) "Steer mode does not inject messages mid-turn"** (15 comments, P1 diamond lobster, 3 👍) — The `messages.queue.mode: "steer"` feature, intended for real-time user intervention, is broken by a March commit that introduced `KeyedAsyncQueue`. **Underlying need**: True mid-turn injection capability for interactive steering — a foundational UX requirement for conversational AI.

4. **Issue [#85333](#) "openclaw doctor --fix 4-5x slower"** (15 comments, P1 platinum hermit) — A session snapshot path traversal bottleneck introduced in 5.20 causes severe performance regression. **Underlying need**: Better regression testing for infrastructure commands and a revert/fix cadence.

5. **Issue [#39604](#) "Add tools.web.fetch.allowPrivateNetwork"** (13 comments, P2 diamond lobster, **11 👍**) — Most upvoted feature request today. Users need `web_fetch` to access private networks (localhost, 10.x, 192.168.x). **Underlying need**: Permissive defaults are blocking legitimate internal tooling use cases; community wants an opt-in escape hatch.

### Most Active PRs

- PR [#102329](#) (fix(anthropic): drop image blocks for text-only models) — **P1, diamond lobster**, ready for maintainer look. Directly unblocks a 400 error class.
- PR [#99365](#) (fix: persistent replay dedupe) — **P1, platinum hermit**, ready for maintainer look. Broad channel coverage (Discord, LINE, Mattermost, WhatsApp).
- PR [#99221](#) (feat: GitHub Enterprise data-residency Copilot auth) — **P0, diamond lobster**, ready for maintainer look. Enterprise feature with significant security boundary considerations.

---

## Bugs & Stability

### Critical (P0 / Diamond Lobster)

| Issue | Description | Fix PR? | Status |
|-------|-------------|---------|--------|
| [#43661](#) | Session hangs indefinitely on compaction timeout → duplicate message storm | None | Open since March 12 |
| [#48920](#) | Live docs ahead of release — heartbeat `IsolatedSessions` referenced but not shipped | None | Docs inconsistency |
| [#94228](#) | Native Anthropic: `Invalid signature in thinking block` 400 bricks long tool-use sessions permanently | None | Open since June 17 |

### High Severity (P1)

- **Message leakage** (Issue [#25592](#)): Text between tool calls still leaks to channels — **no fix PR linked**.
- **Subagent silent loss** (Issue [#44925](#)): No retry or notification on subagent timeout — **no fix PR linked**.
- **Steer mode broken** (Issue [#48003](#)): Mid-turn injection fails — **no fix PR linked**.
- **Telegram routing** (Issue [#41165](#)): DMs land in main session despite isolation fix — **linked PR open**.
- **Session bloat** (Issue [#45718](#)): `skillsSnapshot` and `systemPromptReport` accumulate unbounded — **linked PR open**.
- **Simulated tool calls** (Issue [#45049](#)): Agent responds with text descriptions instead of executing tools — **no fix PR linked** (security concern).
- **Heartbeat wrong session** (Issue [#99912](#)): Agent heartbeat routes to default agent instead of configured session — **no fix PR linked**.

### Regressions Reported Today

- **Performance regression**: `openclaw doctor --fix` (Issue [#85333](#)) — 4-5x slower since 5.20. Root cause identified as session snapshot path traversal.
- **Memory leak waves**: Three PRs (Issues [#101705](#), [#101745](#), [#101643](#)) today all target unbounded warning deduplication caches — suggests a systematic memory growth problem in the gateway under sustained use.

### Stability Assessment

The stability posture is **concerning**. Zero critical bugs (P0 diamond lobster issues) have been resolved in the last 24 hours. Multiple P1 issues have been open for **3-5 months** with no fix PR linked. The Anthropic thinking block bricking issue [#94228](#) permanently disables long tool-use sessions with no workaround. Developers planning production deployments with multi-agent orchestration, A2A communication, or long-running sessions should expect failures.

---

## Feature Requests & Roadmap Signals

### Strongest Demand (by reactions + discussion depth)

1. **Private network access for web_fetch** (Issue [#39604](#), 11 👍, 13 comments, P2) — Users need `tools.web.fetch.allowPrivateNetwork` for internal tooling. **Prediction**: Likely next minor release due to high votes and a clear, low-risk implementation path.

2. **MathJax/LaTeX in Control UI** (Issue [#42840](#), 9 👍, 8 comments, P2) — Needed for scientific/mathematical communication. **Prediction**: Community could land a PR quickly; maintainer willingness unclear.

3. **Pre-reset memory flush** (Issue [#45608](#), 4 👍, 11 comments, P2) — `/new` and daily reset should trigger the same agentic memory flush as compaction. **Prediction**: Modest effort, addresses data-loss class bug — plausible near-term.

4. **Per-agent cost budget enforcement** (Issue [#42475](#), 1 👍, 12 comments, P2 diamond lobster) — Daily/monthly spending caps at the gateway level. **Prediction**: Unlikely urgent given low votes, but critical for multi-user deployments.

### Architectural Signals

- **Distributed Agent Runtime** (Issue [#42026](#), 3 👍, 7 comments) — RFC proposing splitting gateway into separate control plane and agent runtime. Signals community pain around monolithic architecture.
- **Multi-Session Architecture RFC** (Issue [#48874](#), 0 👍, 7 comments) — Shared LLM with isolated sessions and public knowledge base. Suggests users need resource sharing without compromising session isolation.
- **Gateway lifecycle hooks** (Issue [#43454](#), 1 👍, 7 comments) — Event-driven hooks for subagent completion, tool call thresholds. Community wants programmatic agent orchestration.

### What Might Ship Next

Given the fix PR momentum, expect these in the next release:
- Anthropic text-only model image filtering (PR [#102329](#))
- Permanent provider error retry avoidance (PR [#102280](#))
- Slack App Home brand configuration (PR [#102340](#))
- Github Enterprise Copilot auth (PR [#99221](#) — P0 feature)
- Bounded durable message replay deduplication (PR [#99365](#))

---

## User Feedback Summary

### Pain Points (Frequency & Intensity)

1. **"Invisible failures"** — Silent subagent timeouts, lost completions, undelivered media. Multiple issues ([#44925](#), [#86034](#), [#45494](#)) describe scenarios where the system reports success but the work is lost.

2. **"Session chaos"** — Memory management inconsistency across users (Issue [#43747](#)); session bloat on every run ([#45718](#)); orphaned lock files on restart ([#49603](#)); routing to wrong sessions ([#99912](#), [#41165](#)).

3. **"It works but I can't see it"** — Multiple users report correct agent behavior (tool calls, completion, file generation) that produces no visible output, or delivers to the wrong channel.

4. **"Slower every upgrade"** — The doctor command regression (Issue [#85333](#)) is a concrete example of a broader perception that each release adds more overhead.

### Satisfaction Signals

- **High engagement**: 500 issues and PRs updated in 24h indicates a large, active user base willing to file detailed bug reports with reproduction steps, error codes, and proposed fixes.
- **Contributor quality**: PRs today include thorough testing instructions, evidence screenshots, and detailed root cause analysis — a healthy contributor ecosystem.
- **Feature demand specificity**: Users propose concrete config keys (`tools.web.fetch.allowPrivateNetwork`, `session.resetPrompt`, `agents.defaults.compaction.maxActiveTranscriptBytes`) rather than vague requests — deep platform understanding.

### Use Cases Emerging

- **Multi-agent teams**: Multiple issues reference multiple agents, subagent orchestration, A2A communication — production deployments are scaling beyond single-session.
- **Enterprise branded deployments**: Slack App Home customization (PR [#102340](#)), GitHub Enterprise auth (PR [#99221](#)) — commercial users want white-label.
- **Financial/regulated use**: Cost budgeting (Issue [#42475](#)), audit events (PR [#97189](#)), backup exclusions (Issue [#40786](#)) — compliance-sensitive adoption is growing.

---

## Backlog Watch

### Issues Desperately Needing Maintainer Attention

| Issue | Age | Severity | Why Urgent |
|-------|-----|----------|------------|
| [#25592](#) "Text between tool calls leaks" | 135 days | P1 diamond lobster | Affects all channels; causes data leakage; no fix PR after 4.5 months |
| [#44925](#) "Subagent completion silently lost" | 118 days | P1 diamond lobster | Core orchestration failure with three distinct exploit patterns |
| [#39327](#) (2 similar reports) "Cannot convert undefined or null to object" | 125 days | P1 diamond lobster | Bricked google-vertex/gemini-3.1-pro users since March |
| [#94228](#) "Invalid signature in thinking block" 400 | 22 days | P1 platinum hermit | Bricks all native Anthropic sessions permanently — growing rapidly |
| [#45314](#) "Early abort response templates not populated" | 118 days | P2 diamond lobster | User-facing output broken; template variables silent |

### PRs Stuck in Review

- PR [#98321](#) (P0 Github Enterprise auth — **ready for maintainer look since July 2**) — Enterprise blocker.
- PR [#99365](#) (P1 replay dedupe — **ready for maintainer look since July 3**) — Fixes duplicate message storms across 4 channels.
- PR [#95419](#) (P2 cron delivery failure reporting — **ready for maintainer look since June 20**) — Prevents successful runs from being marked as failures.
- PR [#101705](#), [#101745](#), [#101643](#) (memory leak fixes — all **ready for maintainer look**) — These three cap unbounded caches; together they fix a systemic memory growth issue.

### General Assessment

The backlog is **accumulating faster than it's being cleared**. 458 open issues with 414 open PRs creates a review bottleneck. Many high-severity bugs (P1 diamond lobster) have no fix PR linked at all, suggesting either maintainer bandwidth shortage or unresolved design disagreements. The project would benefit from a stabilization sprint focused on the top 10-15 diamond lobster issues identified in this digest.

---

*Digest generated 2026-07-09 from openclaw/openclaw GitHub activity (24h window: 2026-07-08 12:00 UTC → 2026-07-09 12:00 UTC). All links prefixed with `openclaw/openclaw Issue` or `openclaw/openclaw PR` per the source data.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Open-Source Ecosystem

## 1. Ecosystem Overview

The personal AI assistant open-source landscape in mid-2026 is characterized by **intense, community-driven development** across a dozen+ projects, with the ecosystem collectively processing over 700 issues and 700 PRs daily. The field is bifurcating into **general-purpose agent frameworks** (OpenClaw, ZeroClaw, CoPaw) with broad channel/tool ecosystems, and **specialized or lightweight alternatives** (Hermes Agent for research, NanoBot for security-conscious deployments, TinyClaw for minimal footprint). A critical tension has emerged between feature velocity and stability: multiple projects show growing backlogs of high-severity bugs (particularly around session isolation, context management, and provider interoperability) that are not being resolved at the same rate as new features are introduced. The community is increasingly demanding **production-grade reliability** — silent failures, data loss, and context management regressions are the dominant pain points across all major projects.

## 2. Activity Comparison

| Project | Open Issues | Open PRs | Merged/Closed (24h) | Release (24h) | Health Score | Key Signal |
|---------|-------------|----------|---------------------|---------------|--------------|------------|
| **OpenClaw** | 458 | 414 | 86 | None | ⚠️ **Strained** | Growing gap between community contributions and maintainer capacity |
| **ZeroClaw** | 40 | 37 | 23 | None | ✅ **Healthy** | Strong RFC engagement, architectural refactoring underway |
| **CoPaw** | 14 | 32 | 15 | ✅ v2.0.0-beta.4 | ✅ **Active** | Beta stabilization sprint with 136 new tests |
| **Hermes Agent** | 44 | 46 | 4 | None (v0.18.2 on Jul 7) | ⚠️ **Strained** | Maintainers at capacity; 10+ fix PRs opened today |
| **NanoBot** | — | 17 | 10 | None | ✅ **Healthy** | Security hardening phase, rapid vulnerability response |
| **LobsterAI** | 2 | 3 | 10 | None | ✅ **Stable** | Targeted bug-fix sprint, multi-agent isolation fixes |
| **IronClaw** | 15 | 39 | 11 | None | ⚠️ **High churn** | Major NEA-25 refactor, upstream provider saturation |
| **PicoClaw** | 2 | 0 | 3 | None | ✅ **Stable** | Low activity but closing technical debt |
| **TinyClaw** | 0 | 0 | 1 | None | ✅ **Maintenance** | Quiescent, security audit completed |
| **NanoClaw** | 2 | 24 | 4 | None | ⚠️ **Core-driven** | Heavy internal development, low community engagement |
| **Moltis** | 0 | 1 | 0 | None | 🟢 **Dormant** | Minimal activity |
| **NullClaw / ZeptoClaw** | — | — | — | — | ⚪ **Inactive** | No activity |

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Largest community and contributor base** by a wide margin — 500 issues/PRs updated in 24h, compared to ~100 for next-closest (ZeroClaw, CoPaw)
- **Deepest multi-channel support** covering Discord, LINE, Mattermost, WhatsApp, Slack, Telegram, and more — broader than any peer
- **Robust feature surface** with distributed agent runtime, A2A communication, Codex compatibility, and provider failover — architectural sophistication rivals ZeroClaw

**Technical approach differences:**
- OpenClaw uses a **monolithic gateway architecture** (issue #42026 RFC proposes splitting this), while ZeroClaw is moving toward **WASM plugin-based runtime** and NanoClaw prefers **CLI-first design with server-side rendering**
- More **permissive defaults** than peers — issues like `tools.web.fetch.allowPrivateNetwork` highlight that OpenClaw prioritizes ease-of-use over security-by-default, whereas NanoBot and ZeroClaw are hardening security posture

**Community size comparison:**
- OpenClaw's 458 open issues + 414 open PRs dwarfs all peers (ZeroClaw: 40+37, CoPaw: 14+32, Hermes: 44+46)
- However, this reflects a **maintainer bottleneck** — the review pipeline cannot keep pace. ZeroClaw and CoPaw maintain healthier open/closed ratios
- OpenClaw's "diamond lobster" severity issues (P1, open 3-5 months without fix PRs) suggest the community rate is **outpacing maintainer capacity**, unlike NanoBot or LobsterAI which resolve critical bugs within 24 hours

## 4. Shared Technical Focus Areas

| Focus Area | Affected Projects | Specific Needs |
|------------|-------------------|----------------|
| **Session Isolation** | OpenClaw, Hermes, LobsterAI, ZeroClaw | Multi-agent setups cause data leakage, session collapse, incorrect routing. Cross-project pattern: session management is the #1 source of silent failures |
| **Context Management** | CoPaw, OpenClaw, ZeroClaw, Hermes | Context compression causing data loss, infinite loops, forgotten tasks. CoPaw's scroll mechanism, OpenClaw's compaction timeout bugs |
| **Provider Interoperability** | OpenClaw (Anthropic thinking block), ZeroClaw (DashScope, Xiaomi), CoPaw (DeepSeek), LobsterAI (qwen3.5) | Thinking/reasoning content fields, 400 errors on exotic models, credential propagation gaps. Fragile across every project |
| **Multi-Agent Orchestration** | OpenClaw (subagent silent loss), LobsterAI (delegated collaboration), CoPaw (agent teams), ZeroClaw (model_switch) | Subagent lifecycle guarantees, task result delivery, delegation graphs — growing demand, none have fully reliable implementations |
| **Security Hardening** | NanoBot (WebUI bootstrap tokens), ZeroClaw (WASM plugins, workspace .ignore), TinyClaw (channel auth allowlists), CoPaw (rm -rf bypass) | SSRF protection, file access controls, authentication middlewares — escalating priority across the board |
| **Performance / Memory** | OpenClaw (doctor slowdown), Hermes (checkpoint GC race), ZeroClaw (channels supervisor crashloop), CoPaw (browser streaming lag) | Unbounded cache growth, regression test gaps, resource management in long-running sessions |

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | CoPaw | Hermes Agent | NanoBot | LobsterAI |
|-----------|----------|----------|-------|--------------|---------|-----------|
| **Target User** | General developers, power users | Advanced users, enterprise | Chinese market, beta testers | ML researchers, Nous ecosystem | Security-conscious operators | Multi-agent developers |
| **Primary Channel** | Multi-platform (10+) | Multi-platform + web | Chinese IM (Feishu, QQ) | Matrix, Discord, WhatsApp | CLI, WebUI | Multi-agent collaboration |
| **Architecture** | Monolithic gateway | WASM plugin (in-progress) | Scroll context manager | Kanban-based orchestration | Auth-first, security-hardened | Agent workspace isolation |
| **Language Support** | English-dominant | English + Chinese | Chinese-dominant | English | English | Chinese + English |
| **Maturity Phase** | Feature velocity >> stability | Architectural refactoring | Beta stabilization | Research-grade, high churn | Security consolidation | Bug-fix focused |
| **Community Model** | Community-driven, maintainer bottleneck | RFC-driven, collaborative | Chinese community, strong core | Small research community | Core-team dominated | Niche but responsive |

**Key insight:** OpenClaw is the "broadest" platform but is paying for that breadth with reliability debt. ZeroClaw is making the most architecturally ambitious bet (WASM plugins) that could leapfrog OpenClaw in deployability. CoPaw has the most focused user base (Chinese market) and is using beta feedback to stabilize aggressively. Hermes Agent is the most research-oriented, with Kanban-driven agent orchestration that no other project offers.

## 6. Community Momentum & Maturity

**Tier 1: Rapidly Iterating (high activity, significant change)**
- **OpenClaw**: 500+ daily issue/PR updates, but stability is declining. Releasing frequently (2026.3.x, 5.19, 5.20) but with regressions. **High risk / high reward**.
- **CoPaw**: v2.0 beta with 136 new tests in 24h, rapid fix turnaround for critical bugs. **Most disciplined release cycle** among active projects.
- **ZeroClaw**: Strong RFC culture (multiple accepted today), architectural refactoring. **Most thoughtful roadmap** but carrying dormant high-severity bugs.
- **Hermes Agent**: 50 issues + 50 PRs in 24h, 14 fix PRs opened today. **Bursty activity** but maintainers may be nearing burnout.

**Tier 2: Stabilizing (focused on consolidation)**
- **NanoBot**: Security hardening phase, 24h vulnerability response. **Low feature velocity but high reliability confidence**.
- **LobsterAI**: Targeted bug-fix sprint (10 PRs merged), multi-agent isolation fixes. **Responsive to scoped issues** but unresolved critical regression (4.1 gateway crash).
- **NanoClaw**: Core-team driven, heavy internal development on scheduled tasks. **Low community engagement** but systematic execution.

**Tier 3: Maintenance / Dormant**
- **PicoClaw**: Low activity, closing old PRs. **Stable but not growing**.
- **TinyClaw**: Zero open issues/PRs, security audit completed. **Highest signal-to-noise ratio** but potentially low visibility.
- **Moltis, NullClaw, ZeptoClaw**: No meaningful activity. **Dormant or abandoned**.

## 7. Trend Signals

**1. "Reliability over features" is the unspoken demand.**
   - Every major project has unresolved S0/S1 bugs that have persisted for months (OpenClaw's text leakage, ZeroClaw's user message loss, CoPaw's context infinite loops). The community is reporting detailed reproduction steps and root causes — they *want* the projects to succeed — but maintainer bandwidth is the bottleneck. **Implication for developers**: Factor in a 2-4 week latency for critical bug fixes when evaluating any of these platforms. Plan for workarounds.

**2. Multi-agent is the next frontier — and it's not production-ready.**
   - Every project touching multi-agent orchestration (OpenClaw's subagent silent loss, LobsterAI's delegated collaboration, CoPaw's agent teams) has documented failure modes. Session isolation, task result delivery, and delegation lifecycle are unsolved problems. **Implication for developers**: Single-agent deployments are stable; multi-agent setups require custom reliability overlays or acceptance of data loss risk.

**3. Chinese-language contributors are a major force.**
   - CoPaw, LobsterAI, and portions of ZeroClaw are Chinese-dominant. Bug reports, feature requests, and documentation in Chinese outnumber English for these projects. Global developers should account for potential language barriers in issue hunting and documentation consumption.

**4. Security is being taken seriously — but retroactively.**
   - NanoBot's 24h vulnerability response (WebUI bootstrap token), TinyClaw's comprehensive security audit, and ZeroClaw's WASM plugin architecture all signal a shift from "move fast and break things" to "move fast and secure things." However, most projects are *reacting* to disclosed vulnerabilities rather than proactively scanning. **Implication for developers**: Treat all projects as having undiscovered security gaps until proven otherwise — audit inbound webhooks, token issuance, and file access controls.

**5. WASM and runtime plugins are the emerging architectural pattern.**
   - ZeroClaw's tracker #8850 (moving compile-time flags to runtime WASM plugins) is the most ambitious, but OpenClaw's distributed agent runtime RFC and NanoClaw's harness capability toggles suggest a shared recognition that monolithic binaries don't scale. **Implication for developers**: Evaluate whether projects commit to plugin architectures now (ZeroClaw, NanoClaw) or will need to refactor later (OpenClaw, CoPaw).

**6. Context management is the common unsolved problem.**
   - CoPaw's scroll compression, OpenClaw's compaction timeout bugs, ZeroClaw's context overflow hallucination — every project is struggling to bound conversation history without losing critical context. No project has a clean solution. **Implication for developers**: Expect to configure context windows conservatively and monitor for "forgetting" behavior in production. Consider stateless agent patterns if context reliability is critical.

**7. The ecosystem is fragmenting along language/cultural lines.**
   - OpenClaw (English), CoPaw (Chinese), LobsterAI (bilingual), ZeroClaw (English + growing Chinese) — the "AI assistant" concept is culturally mediated. Chinese users expect Feishu/QQ/WeCom integration; Western users expect Discord/Slack/WhatsApp. **Implication for developers**: Choose the project whose target language and channel set matches your user base. International deployments may need to run multiple projects in parallel.

---

**Bottom line for technical decision-makers:** If you need *broadest platform support and community available*, choose **OpenClaw** — but budget for workarounds on session management and silent failures. If you need *most reliable release cycle and responsive maintainers*, choose **CoPaw** (for Chinese market) or **NanoBot** (for security-sensitive Western deployments). If you want *architectural future-proofing*, watch **ZeroClaw's** WASM plugin path closely — it may become the reference architecture within 6 months. For *single-agent, single-channel use cases*, any of the Tier 2 projects (LobsterAI, NanoClaw) are sufficient; for multi-agent production deployments across multiple channels, the entire ecosystem remains immature.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-09

## Today's Overview
NanoBot saw a high-activity day driven by security patch cycles and infrastructure improvements. 27 pull requests were updated (17 open, 10 merged/closed), and 8 issues were resolved (all closed). The project remains in a security hardening phase: three related WebUI bootstrap token vulnerabilities were disclosed, fixed, and merged within 24 hours. No new releases were cut today. The community focus has shifted from feature velocity to consolidation—reaping zombie processes, tightening auth middleware, and improving MCP reconnect stability. The "stale" label made a reappearance on two architectural issue threads.

## Releases
No releases were published today.

## Project Progress
The following pull requests were merged or closed today, representing meaningful forward movement:

- **Fix(webui): gate bootstrap API token issuance** (#4859, merged) — Addresses three disclosed security advisories (Issues #4825, #4826, #4827) by splitting WebSocket tokens from REST API tokens and requiring `tokenIssueSecret` or static `token` verification.
- **Feature: non-interactive config refresh with 'nanobot onboard --refresh'** (#4852, merged) — Resolves Issue #4851, adding a `--refresh` flag to the onboard command for automated configuration updates.
- **Fix(slack): add missing aiohttp dependency** (likely associated with Issue #4829, merged) — Fixes Slack plugin activation failure.
- **Refactor(agent): extract turn hook assembly** (#4848, merged) — Clean split of per-turn hook logic from `AgentLoop` into a dedicated `turn_hooks` module, improving maintainability.
- **Docs: improve search entry pages** (#4850, merged) — README restructuring and new documentation entry pages for chat apps, configuration, Python SDK, and MCP.

## Community Hot Topics
[🌱 Issue #4851](https://github.com/HKUDS/nanobot/issues/4851) — **Non-interactive config refresh** (1 comment, resolved in 24h) reflects a clear operational need from users running automated updates. The maintainer accepted and merged the companion PR (#4852) same-day.

[🛡️ Issue #4825](https://github.com/HKUDS/nanobot/issues/4825) / #4826 / #4827 — **Three related security advisories** on WebUI bootstrap token issuance (3, 2, and 2 comments respectively). All were filed, triaged, and fixed within 24 hours. The reporter identified that unauthenticated localhost processes could mint API bearer tokens via `/webui/bootstrap`. The fix PR (#4856) reopened an adjacent PR to restore intended localhost bootstrap behavior while blocking remote abuse.

[🔧 Issue #4078](https://github.com/HKUDS/nanobot/issues/4078) — **OpenAI-compatible /v1/chat/completions accepts unauthenticated requests** (2 comments). Despite being open since May, this is only now being closed—suggesting the security response was batched with the WebUI fixes.

[🐧 Issue #2450](https://github.com/HKUDS/nanobot/issues/2450) — **minimax-m2.7 via Ollama Cloud fails on 2nd+ request** (4 comments). A long-standing bug now marked as stale and closed; the root cause may be upstream.

## Bugs & Stability
| Issue | Severity | Status | Notes |
|---|---|---|---|
| **WebUI bootstrap token issuance to unauthenticated localhost** (#4825, #4826, #4827) | **High** (Security) | Fixed | Three advisories, fix merged in #4856. Remote bootstrap now blocked without secret. |
| **OpenAI-compatible API accepts unauthenticated requests** (#4078) | **High** (Security) | Closed | No auth middleware on `/v1/chat/completions`; closed as part of today's security sweep. |
| **MCP reconnect gateway crash on stale stack cleanup** (#4843, OPEN) | **Medium** (Crash) | Fix PR open | Deferred `AsyncExitStack` cleanup until shutdown to prevent crash during reconnection. Related PR #4764 also open with an alternative fix. |
| **Zombie processes from subprocess exit paths** (#4840, OPEN) | **Medium** (Resource leak) | Fix PR open | `_kill_process()` only handled timeout/cancel; all exit paths now use `_reap_pid()` with `os.waitpid(WNOHANG)`. |
| **aiohttp missing in Slack dependencies** (#4829) | **Medium** (Plugin broken) | Fixed | Missing dependency in `pyproject.toml` prevented Slack plugin activation. |
| **Broad BaseException catch in tool execution** (#4816, OPEN) | **Medium** (Logic error) | Fix PR open | Catches `KeyboardInterrupt`, `SystemExit`, `MemoryError`, etc. and misrepresents them as conversational errors. |
| **minimax-m2.7 via Ollama Cloud fails on 2nd+ request** (#2450) | **Low** (Stale) | Closed | Upstream issue, marked as stale. |

## Feature Requests & Roadmap Signals
- **Non-interactive config refresh** (Issue #4851 → PR #4852, merged) — Users with self-updating deployments need a headless `nanobot onboard --refresh`. Merged same-day; will likely appear in next release.
- **RTK command rewriter** (PR #4854, OPEN) — Opt-in `tools.exec.rtk` config for rewriting exec commands. Signals interest in more secure sandbox execution pipelines.
- **File edit diff progress view in WebUI** (PR #4828, OPEN) — GitHub-like unified diff rendering with collapsed-by-default large diffs. A quality-of-life enhancement for users reviewing agent file edits.
- **nano_timer core tool** (PR #4853, OPEN) — Requested by users needing timezone-aware agent interactions (UTC, local time, calendar fields). Likely to land in next minor release.
- **Cron job model presets** (PR #4622, OPEN) — Allows specifying `model_preset` per cron job, with per-run provider/model overrides. Addresses a long-standing request (#4378) from batch users.

## User Feedback Summary
- **Security concerns** dominated today: three identical-pattern advisories about WebUI token issuance were reported by the same researcher. The team's rapid response (fix merged within 24h) suggests a proactive security posture. However, the fact that Issue #4078 (unauthenticated OpenAI-compatible API) sat for 40 days before closure indicates potential gaps in vulnerability triage velocity.
- **Operational pain point**: The `nanobot onboard` interactive flow is a barrier for automated deployments. The `--refresh` flag directly addresses this, and its rapid acceptance shows the maintainers are listening to infrastructure/DevOps use cases.
- **Slack integration reliability**: The missing `aiohttp` dependency bug (#4829) reveals fragility in the plugin dependency declaration system. Users building from source would have encountered a silent failure.
- **Zombie process concerns**: The zombie-reaping fix (#4840) reflects real user pain with resource management in multi-step agent workflows.

## Backlog Watch
| Item | Created | Updated | Status | Notes |
|---|---|---|---|---|
| **MCP reconnect crash (alternative fix)** | PR #4764 | 2026-07-08 | **OPEN** (198 days) | An alternative fix to PR #4843's approach. Neither has been merged—maintainer attention needed to pick one path forward. |
| **Discord forwarded message normalization** | PR #2873 | 2026-07-08 | **OPEN** (94 days) | Preserves forwarded messages' body and attachments. Open since April; not yet merged despite test coverage. Needs maintainer review. |
| **Chore: bump to node 24** | PR #4460 | 2026-07-08 | **CLOSED** (merged) | Resolved today—finally merged after 16 days. |
| **Architectural: prompt prefix mismatch** | Issue #2463 | 2026-03-25 | **CLOSED** (stale) | Closed as stale after 105 days. The underlying issue (persisted history ≠ actual prompt prefix) remains unsolved, but no user escalations followed. |

**Key observation**: The MCP reconnect stability issue has two competing fix PRs (#4764 from July 5, #4843 from July 8) with no clear maintainer guidance on which approach is preferred. This risks duplicate effort or merge conflicts. A decision note would help.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-09

## 1. Today's Overview

Hermes Agent is experiencing a period of *exceptionally high* activity, with 50 issues and 50 PRs updated in the last 24 hours, nearly all of them still open. A patch release (v0.18.2) landed on July 7 to fix a build-blocking dependency pin. The community is highly engaged, but the sheer volume of open work (44 open issues, 46 open PRs) suggests maintainers are **operating at or beyond capacity**. Notably, one contributor (slow4cyl) has opened a batch of 10+ tightly scoped Kanban and agent fixes today alone, indicating coordinated cleanup work underway. The project's release cadence remains healthy, but triage velocity is lagging behind issue creation rate.

**Activity assessment:** Very high — borderline unsustainable without more maintainer bandwidth.

---

## 2. Releases

### v0.18.2 (v2026.7.7.2) — July 7, 2026
[GitHub Release](https://github.com/nousresearch/hermes-agent/releases/tag/v2026.7.7.2)

Same-day patch on top of v0.18.1. **Single change:**
- **fix(whatsapp):** unpin Baileys from a git commit hash, now using published `7.0.0-rc13`

**Breaking changes:** None. This is a build-only patch.

**Migration notes:** Docker users who build from the `v2026.7.7.1` tag should update to this tag. No config or data migration required.

---

## 3. Project Progress

No PRs were *merged* in the 24-hour window — the closed/merged count of 4 appears to reflect earlier merges or automated closures (e.g., duplicate issues). However, **many fix PRs were opened today** and are awaiting review:

| PR | Fix Area | Status |
|----|----------|--------|
| [#61221](https://github.com/nousresearch/hermes-agent/pull/61221) | Background process venv inheritance | Open, new |
| [#61224](https://github.com/nousresearch/hermes-agent/pull/61224) | Python 3.14 compatibility (3 fixes) | Open, new |
| [#61227](https://github.com/nousresearch/hermes-agent/pull/61227) | Checkpoint GC race condition | Open, new |
| [#61228](https://github.com/nousresearch/hermes-agent/pull/61228) | Context-window overflow handling | Open, new |
| [#61229](https://github.com/nousresearch/hermes-agent/pull/61229) | Kanban goal turn budget ENV override | Open, new |
| [#61230](https://github.com/nousresearch/hermes-agent/pull/61230) | Kanban_create assignee validation | Open, new |
| [#61231](https://github.com/nousresearch/hermes-agent/pull/61231) | Kanban DB concurrent init lock | Open, new |
| [#61232](https://github.com/nousresearch/hermes-agent/pull/61232) | Kanban child task priority inheritance | Open, new |
| [#61233](https://github.com/nousresearch/hermes-agent/pull/61233) | Kanban worker clean-exit retry logic | Open, new |
| [#61234](https://github.com/nousresearch/hermes-agent/pull/61234) | Worker TMPDIR routing | Open, new |
| [#61235](https://github.com/nousresearch/hermes-agent/pull/61235) | Kanban model_override flag pass-through | Open, new |
| [#61223](https://github.com/nousresearch/hermes-agent/pull/61223) | Guarded Codex CLI exec bridge (feature) | Open, new |
| [#61236](https://github.com/nousresearch/hermes-agent/pull/61236) | Session-scoped model lock API (feature) | Open, new |
| [#60829](https://github.com/nousresearch/hermes-agent/pull/60829) | Desktop webapp hardening | Open |

These 14 PRs represent a significant batch of targeted bugfixes and two new features, likely part of a coordinated sprint. None have been reviewed yet.

---

## 4. Community Hot Topics

### Most commented issues (last 24h)

1. **[#13891 — Matrix gateway decryption failure](https://github.com/nousresearch/hermes-agent/issues/13891)** (10 comments, CLOSED)
   - Reproducible issue: after extended Matrix room usage, the bot becomes unable to decrypt messages. Only fix is room recreation. *Closed without resolution visible in summary.*

2. **[#39691 — Tool output compression via headroom-ai](https://github.com/nousresearch/hermes-agent/issues/39691)** (9 comments, 12 👍)
   - Feature request with strong community support. Proposes replacing LLM-based context summarization with a specialized compression library. *High engagement suggests this is a pain point for many users.*

3. **[#59224 — Classic `/resume` hides non-CLI sessions](https://github.com/nousresearch/hermes-agent/issues/59224)** (8 comments)
   - Session management UX bug: the CLI `/resume` listing only shows CLI-tagged sessions, hiding Desktop and WebUI sessions.

4. **[#39534 — Chinese text truncation in Desktop on Windows](https://github.com/nousresearch/hermes-agent/issues/39534)** (7 comments)
   - User-visible rendering bug: Chinese characters cut off in the chat input/composer area. Affects v0.15.1+.

5. **[#58646 — QQ bot adapter parameter mismatch](https://github.com/nousresearch/hermes-agent/issues/58646)** (7 comments)
   - Gateway code passes `is_reconnect=True` but QQAdapter doesn't accept it. Marked duplicate.

### Most upvoted
- **#39691** (12 👍) — headroom-ai integration
- **#569** (9 👍) — Agent Client Protocol (ACP) server mode
- **#18241** (4 👍) — TUI chronological ordering of thinking/tool blocks
- **#28260** (2 👍) — Self-signed cert SSL fix (CLOSED)

**Underlying needs:** Users want (a) better context management without expensive LLM calls, (b) cross-platform session management, (c) IDE integration via ACP, and (d) non-English language support.

---

## 5. Bugs & Stability

### P1 (Critical) — 2 new today

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#60955](https://github.com/nousresearch/hermes-agent/issues/60955) | Fallback bug report (CLOSED, insufficient detail) | None visible |
| [#61145](https://github.com/nousresearch/hermes-agent/pull/61145) | Gateway session-hygiene auto-compress **DELETES history** instead of archiving — potential **silent data loss** | No fix PR yet |

### P2 (High) — 6 new today

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#61220](https://github.com/nousresearch/hermes-agent/issues/61220) | Session expiry finalization doesn't set `end_reason`, causing stale recovery to reopen expired sessions with full history | No |
| [#61207](https://github.com/nousresearch/hermes-agent/issues/61207) | `/plan` command no longer writes `plan.md` file | No |
| [#61211](https://github.com/nousresearch/hermes-agent/issues/61211) | WeCom file upload fails on Windows due to percent-encoded filename exceeding `MAX_PATH` | No |
| [#61228](https://github.com/nousresearch/hermes-agent/pull/61228) | Context-window overflow on strict endpoints (vLLM) causes rejection | **PR open** |
| [#61221](https://github.com/nousresearch/hermes-agent/pull/61221) | Background processes inherit wrong venv | **PR open** |
| [#61227](https://github.com/nousresearch/hermes-agent/pull/61227) | Checkpoint GC race condition causes dangling refs | **PR open** |

### P3 — 13 new today

Several WeCom/Windows path issues, Desktop attachment caching, OpenRouter "Unknown" app label, Kanban fallback provider gap, and a duplicate of #61211.

**Notable:** The **session data loss** bug (#61145) at P1 is the most serious stability concern. The fix appears straightforward (soft-archive instead of delete) but has no PR yet.

---

## 6. Feature Requests & Roadmap Signals

### Strong community signals (≥12 👍 or high comment count)

| Request | Support | Likely for next release? |
|---------|---------|--------------------------|
| **[headroom-ai tool output compression](https://github.com/nousresearch/hermes-agent/issues/39691)** | 12 👍, 9 comments | **Likely** — strong demand, clear technical path |
| **[Agent Client Protocol (ACP) server mode](https://github.com/nousresearch/hermes-agent/issues/569)** | 9 👍, 2 comments | **Possible** — would unlock IDE ecosystem, PR activity visible |
| **[TUI chronological thinking/tool ordering](https://github.com/nousresearch/hermes-agent/issues/18241)** | 4 👍, 2 comments | **Speculative** — community desire but not prioritized |

### New feature PRs opened today

- **[PR #61236](https://github.com/nousresearch/hermes-agent/pull/61236)** — **Session-scoped model lock API**: allows API clients (browser extensions, IDE plugins) to request a specific provider+model per turn. Backend either routes or hard-fails. *This directly supports ACP-style integration* and could be a precursor to IDE support.
- **[PR #61223](https://github.com/nousresearch/hermes-agent/pull/61223)** — **Guarded Codex CLI exec bridge**: exposes a `codex_exec` tool that delegates repository work to the Codex CLI with sandboxing. *Enables Hermes agents to leverage Codex for code-specific tasks.*

**Prediction:** The next minor release (v0.19.x) will likely include the session model lock API and possibly the Codex bridge, as both are authored by community contributors with high-quality PRs. The headroom-ai compression feature (#39691) might land in v0.20 due to its complexity.

---

## 7. User Feedback Summary

### Pain Points (expressed through bugs+feature requests)

1. **Session management is fragile:**
   - "Only solution is to recreate the room" — Matrix users (#13891)
   - "Stale recovery reopens expired sessions" (#61220)
   - "Desktop can't see CLI or TUI sessions" — workflow fragmentation (#59224)
   - "Session hygiene DELETES history" — data loss risk (#61145)

2. **Non-English/international users are underserved:**
   - "Chinese characters cut off in chat window" on Windows (#39534)
   - "WeCom file upload fails with Chinese filenames" (#61211, #61212)

3. **Kanban/cron system shows design friction:**
   - Multiple reports of workers ignoring fallback providers (#61048)
   - Tasks stuck with wrong priorities (#61232)
   - `/plan` stopped writing output (#61207)

4. **Desktop app UX gaps:**
   - "Can't see full terminal command output" (#61193)
   - "Reasoning panel auto-collapses — want it to stay open" (#53617)
   - "Composer caches stale file/URL attachments across sessions" (#61191)

### Satisfaction signals
- **12 users** upvoted the headroom-ai compression request — indicates satisfaction with the concept but frustration with current LLM-based approach
- **9 users** want ACP/IDE support — suggests Hermes is being used as a coding agent, not just a chat bot
- Many bugs are being reported with clear reproduction steps → user base is sophisticated and invested

---

## 8. Backlog Watch

### Issues needing maintainer attention (old, important, unanswered)

| Issue | Age | Status | Concern |
|-------|-----|--------|---------|
| [#5254](https://github.com/nousresearch/hermes-agent/issues/5254) | **3 months** (Apr 5) | OPEN, P2 | Tool calls repeating with LM-Studio — fragments dozens of calls. Only 4 comments, no maintainer response visible. *Affects local model users.* |
| [#569](https://github.com/nousresearch/hermes-agent/issues/569) | **4 months** (Mar 7) | OPEN | ACP server mode (9 👍). No PR exists for the core feature despite high demand. Author is core contributor (teknium1). |
| [#3356](https://github.com/nousresearch/hermes-agent/issues/3356) | 3.5 months (Mar 27) | CLOSED | TTFT cold-start bottleneck — closed but referenced as "after the current fixes." Needs follow-up to verify. |
| [#18241](https://github.com/nousresearch/hermes-agent/issues/18241) | 2+ months (May 1) | OPEN, P3 | TUI chronological ordering. 4 👍. No movement. |
| [#35419](https://github.com/nousresearch/hermes-agent/issues/35419) | 40 days (May 30) | OPEN, P2 | Silent fallback activation — users don't know when provider switches. No fix PR. |
| [#39838](https://github.com/nousresearch/hermes-agent/issues/39838) | 34 days (Jun 5) | OPEN, P2 | `notification_sources` config documented but never read by gateway code — *documented feature that doesn't work*. |

### Most concerning

**Issue #39838** — a documented feature (`notification_sources`) that is completely non-functional. The gateway code never reads the config key. This has been open for over a month with only 2 comments. If users are following documentation to configure cross-profile notifications, they are silently failing.

---

*Generated 2026-07-09 from GitHub activity data. All links point to the [Hermes Agent repository](https://github.com/nousresearch/hermes-agent).*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Based on the GitHub data provided for **PicoClaw (github.com/sipeed/picoclaw)** , here is the project digest for **2026-07-09**.

---

## PicoClaw Project Digest

### 1. Today's Overview
The PicoClaw project shows moderate activity, with a focus on closing technical debt and integrating new features. In the last 24 hours, three pull requests (PRs) were merged, indicating a shift toward stabilization following a period of feature development. No new releases were published today, but the merging of a critical bug fix for the Anthropic provider suggests a patch release may be imminent. The project maintains two open issues, one of which is a confirmed bug regarding OpenAI GPT compatibility on the NanoKVM platform, requiring maintainer attention.

### 2. Releases
**None** – No new releases were published in the last 24 hours.

### 3. Project Progress (Merged PRs)
Three pull requests were merged/closed today, advancing several areas:

- **Gateway Reliability (PR #2278)** : Merged a 3-month-old PR that improves gateway startup reliability. It introduces a fallback policy where, if binding to a loopback interface fails, the gateway falls back to a wildcard bind restricted by a CIDR allowlist. This is a significant stability enhancement for edge deployments.
- **New Integration: Grafana Alertmanager (PR #2251)** : Merged a new `grafana_alertmanager` input-only channel. This allows PicoClaw to receive alerts from Grafana Alertmanager via a webhook, parse them into readable messages, and trigger specific agent skills. This expands PicoClaw’s utility in DevOps and monitoring workflows.
- **Critical Bug Fix for Anthropic Vision (PR #3234)** : Merged a fix where the `anthropic_messages` provider was dropping image media from user messages. Vision models (e.g., Claude) would respond "can't see" because `buildRequestBody` only sent text content. This fix embeds image media, restoring vision functionality.

### 4. Community Hot Topics
The most active discussion revolves around a critical compatibility issue:

- **Issue #3195 – OpenAI GPT does not work on NanoKVM** (Updated 2026-07-08, 2 comments): This open bug describes a failure where attempts to use `gpt-5.4` on the NanoKVM platform (a new feature introduced in NanoKVM 2.4.0) return errors despite following the official configuration docs. The user is likely hitting a transport or configuration parsing issue specific to the NanoKVM’s resource constraints. This is the most urgent topic, as it directly blocks a key use case (running an AI assistant on a low-cost KVM device).

### 5. Bugs & Stability
- **Critical Bug – OpenAI GPT on NanoKVM (Issue #3195)** : A confirmed bug blocking the use of OpenAI models on the NanoKVM platform. No fix PR is attached yet. This is the highest severity issue currently open, as it affects a prominent hardware integration. Root cause is unknown but may relate to TLS or HTTP client configuration differences on the NanoKVM’s lightweight environment.
- **Fixed Bug – Anthropic Vision Media Dropped (PR #3234)** : A critical bug affecting vision capabilities was fixed and merged today. Images attached to user messages were silently dropped by the Anthropic provider. Since this PR is now closed, the fix will be included in the next release.

### 6. Feature Requests & Roadmap Signals
- **Streaming for QQ Channel (Issue #3201)** : User `YsLtr` requests streaming output support for the QQ channel, similar to what Telegram and WebSocket channels already support via the `StreamingCapable` interface. This is a quality-of-life feature that reduces latency perception for users in the QQ ecosystem. Given that the pattern already exists in other channels, this is a likely candidate for a future minor release (v2.5.x).
- **Grafana Alertmanager Channel (PR #2251)** : Although just merged, this represents a roadmap signal toward expanding input channels for DevOps integrations. Future iterations may include support for other monitoring tools (e.g., Prometheus, Datadog webhooks).

### 7. User Feedback Summary
- **Pain Point – Configuration Difficulty on NanoKVM**: The user in Issue #3195 followed official docs but still hit a roadblock, indicating that documentation or the default configuration for NanoKVM may be incomplete or requires an explicit override (e.g., a proxy or API base URL adjustment). This suggests dissatisfaction with the out-of-box experience on constrained devices.
- **Pain Point – Missing Feature for QQ Users**: The request for streaming on QQ highlights that users on non-Telegram channels feel the experience is laggy or incomplete compared to other platforms, leading to a desire for parity.
- **Satisfaction – Anthropic Vision Fix**: The swift merge of PR #3234 (created and merged on the same day) reflects responsiveness to a clear user-facing bug, which should improve satisfaction for users relying on vision models.

### 8. Backlog Watch
- **Issue #3195 (Open, 9 days old, no assignee, no fix PR)** : This is the most critical item needing maintainer attention. It blocks a key use case (NanoKVM + OpenAI) and has seen only 2 comments, suggesting the community is waiting for a maintainer to reproduce or triage the bug.
- **PR #2278 (Closed after 98 days)** : While closed today, this PR sat open for over 3 months. This signals that complex or risky infrastructure changes may suffer from long review cycles, which could bottleneck urgent fixes in the future.
- **Issue #3201 (Open, 8 days old, low activity)** : Though tagged `[stale]`, this feature request has not been addressed or labeled. If the project aims for QQ channel parity, this should be prioritized or formally declined to set user expectations.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-09

## 1. Today's Overview

NanoClaw is experiencing **heavy development activity** today, with **28 pull requests** updated in the last 24 hours—an unusually high volume. The project has **2 open issues** and **4 merged/closed PRs**, while **24 PRs remain open** across various tracks. The core team is actively pushing forward on scheduled tasks infrastructure, CLI improvements, and credential/approval systems. Project health is **strong**, with rapid iteration on multiple concurrent feature trains and a disciplined approach to fixing bugs before they accumulate. No new releases were cut today.

## 2. Releases

No new releases were published today.

---

## 3. Project Progress

**4 PRs merged/closed today:**

- **#2980** — [CLOSED] `ncl CLI`: verb-level args, deep help, server-rendered human view. This PR (part 1/6 of the scheduled-tasks train) adds strict argument validation with fix-carrying error messages, deep `--help` output, and a server-rendered human-friendly view mode. (https://github.com/nanocoai/nanoclaw/pull/2980)

- **#2978** — [CLOSED] CI: auto-label PRs from core team members. Extends `label-pr.yml` workflow with an author allowlist so core-team PRs automatically receive the `core-team` label. (https://github.com/nanocoai/nanoclaw/pull/2978)

- **#1702** — [CLOSED] Fix: break for-await loop on result to prevent IPC message loss. A long-standing fix finally merged after ~3 months in review. (https://github.com/nanocoai/nanoclaw/pull/1702)

- **#2981** — [OPEN, but updated] Scheduled tasks: `ncl tasks` control plane, isolated sessions, script gate. Part 2/5 of the scheduled-tasks train. (https://github.com/nanocoai/nanoclaw/pull/2981)

**Key feature advances today (new open PRs):**

- **#2983** — Per-group harness capability toggles: agent-teams & workflow off by default, continuing the principle of disabling harness builtins in favor of NanoClaw's own equivalents. (https://github.com/nanocoai/nanoclaw/pull/2983)

- **#2982** — Fix agent-runner's Claude tool allowlist to match pinned CLI version (2.1.197), plus adds a drift guard. Removes references to `Task`, `TodoWrite`, `TeamCreate`, `TeamDelete`, `ToolSearch` that don't exist on the pinned CLI. (https://github.com/nanocoai/nanoclaw/pull/2982)

- **#2979** — Bump `@chat-adapter/*` + chat to 4.32.0, fixing Discord bare URLs no longer being wrapped as masked links. (https://github.com/nanocoai/nanoclaw/pull/2979)

---

## 4. Community Hot Topics

Activity is **core-team dominated** today, with limited community discussion. No issues or PRs have comments or reactions.

**Most notable open PRs by topic interest:**

- **#2742** — "PR Factory" recipe: a published recipe for turning every PR into a reviewed, test-planned Slack thread with dedicated worker agents. This represents a significant community-facing automation capability. (https://github.com/nanocoai/nanoclaw/pull/2742)

- **#2941** — Reject-with-reason on OneCLI credential cards, extending approval-card machinery to credential flows. Addresses a real user pain point where credential approvals lacked explanation. (https://github.com/nanocoai/nanoclaw/pull/2941)

- **#2909** — Template setup flow in the wizard with first-agent stamping (part 2 of 2 for agent templates). Directly impacts new-user onboarding experience. (https://github.com/nanocoai/nanoclaw/pull/2909)

**Underlying pattern:** The community is quiet while the core team is executing a coordinated push across scheduled tasks, credential flows, and CLI ergonomics. The PR Factory recipe (#2742) hints at enterprise/team usage patterns gaining traction.

---

## 5. Bugs & Stability

**Critical severity:**
- **#2985** — [OPEN] `opencode provider`: silent no-reply when final text snapshot misses `session.idle`. The messaging bot fails silently on long agentic turns—agent completes, produces full answer, but nothing is delivered and no error is raised. This is a **data loss bug** that could cause users to believe the bot ignored them. No fix PR yet. (https://github.com/nanocoai/nanoclaw/issues/2985)

**Medium severity (fix PRs exist):**
- **#2982** — Claude tool allowlist mismatch with pinned CLI version (2.1.197). Five non-existent tools referenced. Fix PR open with drift guard. (https://github.com/nanocoai/nanoclaw/pull/2982)

- **#2979** — Discord bare URLs wrapped as masked links. Fix PR open bumping chat adapter dependency. (https://github.com/nanocoai/nanoclaw/pull/2979)

- **#2878** — Codex reconnect failure when OneCLI already has a stale OpenAI secret. Mid-conversation failures with stale credentials. Fix PR open. (https://github.com/nanocoai/nanoclaw/pull/2878)

- **#2770** — Codex image generation events not delivered to chat (poll-loop doesn't consume `file` events). Fix PR open. (https://github.com/nanocoai/nanoclaw/pull/2770)

**Lower severity:**
- **#2913** — WhatsApp Cloud bridge collides with native Baileys adapter due to hardcoded `name = "whatsapp"`. Fix PR open. (https://github.com/nanocoai/nanoclaw/pull/2913)

---

## 6. Feature Requests & Roadmap Signals

**User-requested features (from Issues):**
- **#2984** — Auto-rename Discord threads by topic. User requests that the agent be able to rename session threads from default date-stamped names (`Thread 7/8/2026, 3:28 PM`) to concise topic names for scanability. This is a small, well-scoped request. (https://github.com/nanocoai/nanoclaw/issues/2984)

**Core-team roadmap signals:**
- The **scheduled-tasks train** (parts 1–5, #2980–#2981 and more) is clearly a major roadmap initiative, adding full task lifecycle management, isolated sessions, and script gates.
- **Per-group harness capability toggles** (#2983) suggest increasing operational control for administrators.
- **Agent templates with setup wizard** (#2909) point toward improving first-time user experience.
- **Teams-CLI-first credentials flow** (#2958) modernizes Microsoft Teams integration, moving away from manual Azure portal steps.

**Prediction for next release:** Likely includes scheduled tasks control plane, agent templates wizard, and the Teams credential flow rewrite. The Discord thread rename feature (#2984) may also land if a core-team member picks it up.

---

## 7. User Feedback Summary

**Observed pain points:**
- **Silent failures in opencode provider** (#2985): A serious user experience issue where users send messages that appear to be ignored—no error feedback, no delivery confirmation. This erodes trust in the bot's reliability.
- **Discord thread naming** (#2984): Busy servers become impossible to navigate with default date-stamped thread names, indicating NanoClaw is being used in production environments with significant multi-thread activity.
- **Credential staleness in Codex** (#2878): Mid-conversation failures due to stale tokens interrupt workflows and require manual re-authentication.

**Satisfaction indicators:**
- The PR Factory recipe (#2742) suggests power users are building automation on top of NanoClaw.
- High core-team throughput (28 PRs updated in 24h) indicates strong maintainer investment.

---

## 8. Backlog Watch

**Long-standing open PRs needing attention:**
- **#2742** — PR Factory recipe. Open since June 11 (28 days). A significant community-facing feature that could benefit from maintainer review or merge guidance. (https://github.com/nanocoai/nanoclaw/pull/2742)
- **#1702** — IPC message loss fix. **Merged today!** (Was open for ~3 months before closure.)

**Other aging items (open >2 weeks):**
- **#2798** — Changelog expansion for v2.1.17. Open since June 17 (22 days). Documentation-only, but lack of merge may delay release notes. (https://github.com/nanocoai/nanoclaw/pull/2798)
- **#2770** — Codex file event delivery fix. Open since June 14 (25 days). Has core-team label, affecting image generation workflows. (https://github.com/nanocoai/nanoclaw/pull/2770)
- **#2909** — Template setup wizard. Open since July 2 (7 days). Part 2 of a 2-part feature; part 1 (#2890) likely landed, making this the block on templating being fully usable.

**No long-unanswered community Issues** — the two open issues are fresh (created yesterday).

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-09

## Today's Overview

IronClaw is in an extremely active development cycle, with 50 pull requests updated in the last 24 hours (39 open, 11 merged/closed) and 21 issues updated (15 open, 6 closed). The project is undergoing a major architectural refactor codenamed NEA-25 — a sweeping reorganization of the extension surface model that touches Slack integration, tool manifests, and channel discovery across a 7-PR stacked chain. A new daily failure taxonomy report (Issue #5859) was published today, noting that upstream provider rate-limiting saturated the entire pinchbench suite — a significant stability signal. No new releases were cut today, but the volume of PR activity indicates the team is heads-down on both refactoring and bug-bash remediation.

## Releases

No new releases were published in the last 24 hours.

## Project Progress

No PRs were merged in the last 24 hours, but 11 PRs were closed. Notable open PRs that represent significant feature advancement:

- **NEA-25 Extension Surface Model** (PRs #5833, #5839, #5842, #5845, #5847, #5848, #5849, #5850) — An 8-PR stacked refactor that redefines extensions from a product-type taxonomy to a unified surface model. Key change: channels, tools, and auth are now capabilities of a single "extension" concept, not separate product types. The Slack extension is the validation case, with `slack_bot` and `slack_personal` retired into a single `slack` extension (PR #5845). Net -900 lines in the channel registry (PR #5842).
- **Tool Install for Non-Admin Users** (PR #5525) — Part 2 of the private tool install initiative, allowing SSO users to install tools privately from the Extensions Registry without admin intervention.
- **API Capacity Performance** (PR #5857) — Caches system skill bundle filesystem descriptors to reduce pre-model latency for concurrent API users.
- **Real-time Streaming** (PR #5821) — Streams assistant text through the Reborn/WebUI projection SSE path, adding provider-level NEAR AI Chat SSE support so text is forwarded as deltas arrive.
- **Trace Commons Enrollment** (PR #5858) — Adds CLI support for instance-wide Trace Commons enrollment and hosted-user account login links, closing two usability gaps.

## Community Hot Topics

The most active discussions this period center on the bug-bash findings and the daily failure taxonomy:

- **Issue #5702** (4 comments) — GitHub issue search/create returns HTTP 403 errors. Users report the agent's GitHub integration is configured but completely non-functional for issue operations. This is a P2 bug-bash finding with no workaround identified.
- **Issue #5705** (2 comments) — Terminal icon in chat UI has no disable option. Users who don't use the terminal feature are forced to display the icon with no toggle to hide it.
- **Issue #5557** (2 comments) — Logs deep link requires two clicks to load the selected conversation. Users opening Logs links from routine runs see "Select conversation" instead of the linked thread on first click.
- **Issue #5859** (0 comments but significant signal) — Daily failure taxonomy reports that today's pinchbench run was saturated by upstream provider rate-limiting — essentially every LLM call returned a 429 or 503. This is an infrastructure dependency issue rather than a code defect.

**Underlying needs:** The bug-bash issues reveal users are frustrated with core integration reliability (GitHub 403, routine run failures) and UI friction (non-dismissable terminal icon, broken deep links). The failure taxonomy highlights a growing dependency risk on LLM provider capacity.

## Bugs & Stability

**P2 (High Severity)** — Multiple bugs from the bug-bash, all reported 2026-07-08:

1. **Issue #5702** — GitHub issue search/create fails with HTTP 403 (`operation_failed`). No fix PR identified. Agent cannot interact with GitHub issues despite integration being configured.
2. **Issue #5837** — Routine run action buttons ("Open run", "Logs") are not clickable. Users cannot inspect failed run details or logs. No fix PR identified.
3. **Issue #5838** — Runs fail with context compaction error after successful tool execution. Multi-step runs complete tool calls but then crash during context compaction. No fix PR identified.
4. **Issue #5836** — Scheduled routine runs fail with "No thread attached" error on every execution (0% success rate). Systemic issue with routine thread attachment. No fix PR identified.
5. **Issue #5834** — Slack disconnect request incorrectly rejected by agent. Agent claims it cannot perform the action and returns unrelated content. No fix PR identified.

**P3 (Medium Severity)** — UI and usability issues:

- **Issue #5705** — Terminal icon cannot be disabled (no setting/toggle)
- **Issue #5557** — Logs deep link requires two clicks
- **Issue #5835** — "Jump to latest" button appears unnecessarily, positioned too high
- **Issue #5838** (also P2) — Context compaction failure errors

**Closed Bugs:**
- **Issue #5768** — Reborn Projects page incomplete i18n (hardcoded English labels when language set to Chinese) — CLOSED
- **Issue #5787** — Flaky Slack pairing test (`slack_pairing_redeem_rejects_expired_code`) due to tokio clock vs chrono wall-clock TTL race — CLOSED

**Infrastructure Signal:** Issue #5859 documents that today's entire pinchbench suite (44 non-pass) was saturated by upstream LLM provider rate-limiting — a critical stability dependency concern.

## Feature Requests & Roadmap Signals

Based on active issues and PRs, the following features are predicted for the next release:

1. **Unified Extension Model (NEA-25)** — The 7+ PR stacked refactor is extremely likely to land soon, fundamentally changing how extensions, channels, and tools are registered and discovered. This is architectural, not user-facing directly.
2. **Private Tool Install for SSO Users** (PR #5525) — Non-admin users will be able to install tools privately from the registry, an enterprise multi-tenancy feature.
3. **Real-time Streaming** (PR #5821) — Assistant text sent as provider deltas arrive via SSE, improving perceived responsiveness.
4. **WebChat Attachment Limits** (Issue #5820) — User requested raising the 10-file cap and surfacing overflow errors instead of silently dropping files. Likely P3 fix.
5. **Admin API Token Re-issuance** (Issue #5856) — Admin panel missing ability to issue new credentials for existing users; current API tokens are one-time at user creation.

**Less Likely for Next Release:**
- Rename automations (Issue #5419) — Closed but no feature implemented
- File count limit raise (Issue #5820) — Open enhancement request

## User Feedback Summary

**Pain Points:**
- **Integration Reliability:** Users hit HTTP 403 on GitHub issues (Issue #5702), cannot disconnect Slack through the agent (Issue #5834), and scheduled routines fail to start (Issue #5836) — core integrations are unreliable.
- **UI Friction:** Terminal icon cannot be hidden (Issue #5705), Logs deep link broken (Issue #5557), "Jump to latest" button obstructs content (Issue #5835), and routine action buttons are non-clickable (Issue #5837).
- **Workflow Interruption:** Runs completed successfully but fail during context compaction (Issue #5838), and multi-file attachment silently drops files beyond the 10-file cap (Issue #5820).
- **i18n Gaps:** Chinese UI still shows English labels on Projects summary cards (Issue #5768, now closed).

**Satisfaction Signals:**
- The admin user management API (Issue #5779 follow-up) and tool permission controls (Issue #5770) are being actively improved, showing responsiveness to administrator feedback.
- The daily failure taxonomy reports (Issues #5788, #5859) indicate the team is actively monitoring and classifying test failures.

## Backlog Watch

**Open Issues Needing Maintainer Attention:**

1. **Issue #5702** (P2, 4 comments, updated 2026-07-08) — GitHub integration HTTP 403, no fix PR or workaround identified. Critical for users relying on GitHub workflows.
2. **Issue #5856** (updated 2026-07-08) — Admin panel missing API token re-issuance; orphaned "Create Token" button with no mechanism to actually create tokens. No comments from maintainers.
3. **Issue #5828, #5827, #5826** (updated 2026-07-08) — Three issues by italic-jinxin for cleaning up legacy v1 test references, fixtures, and binaries. No comments or assignees.
4. **Issue #5838** (P2, updated 2026-07-08) — Context compaction failure despite successful tool execution. No fix PR identified despite being a runtime crash.
5. **Issue #5836** (P2, updated 2026-07-08) — 0% success rate on scheduled routines due to "No thread attached" error. Systemic scheduled-routine failure.

**Stale/Dormant Issues:**
- **Issue #3535** (CLOSED) — UI timestamp bug from May 2026, now closed but took ~2 months to resolve.
- **Issue #5419** (CLOSED) — No rename-automation option from June 2026, closed without feature implementation.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-09

## Today's Overview
The project is in a **high-activity** state, with 13 PRs updated in the last 24 hours and a strong focus on **bug fixes and stability improvements**. The maintainer team (btc69m979y-dotcom, fisherdaddy) pushed through a significant batch of critical fixes addressing multi-agent workspace isolation, memory search defaults, and IM session scoping. However, the community is reporting **two high-impact regressions** (a 4.1 gateway crash loop and a USER.md overwrite bug) that are actively disrupting users. The open issue count (2 active) is low, but the underlying severity is high. No new releases were shipped today.

## Releases
**None** — No new releases on 2026-07-09. The most recent release remains unspecified; pending fixes for the 4.1 gateway issue suggest an imminent patch release.

## Project Progress
**10 PRs merged/closed** in the last 24 hours, marking a significant bug-fix sprint:

### Fixed & Merged
- **PR #2298** — `fix(im): scope channel session mappings by agent` — Resolves a cross-agent IM conversation deduplication bug where sessions could collapse across different agents.
- **PR #2297** — `fix(openclaw): default memory search to local FTS` — Ensures local full-text search (FTS) works even when embedding search is disabled; includes a gateway-startup migration for existing users.
- **PR #2296** — `feat(cowork): add minimizable permission prompts` — Adds UX improvement for cowork permission prompts, allowing minimize/restore and proper session scoping.
- **PR #2295** — `fix(agent): scope USER.md bootstrap file per agent workspace` — **Directly addresses Issue #2293**: USER.md was previously shared across all agents; now each agent has an isolated `USER.md` file.
- **PR #2285** — `feat(agents): support delegated subagent collaboration` — Major feature: enables configuring which agents can be delegated to, materializing runs as Cowork child sessions.

### Remaining Open PRs (3)
- **PR #1346** — `Feat/skills management` (open 3+ months) — Stalled feature awaiting merge.
- **PR #1347** — `feat(scheduledTask): Cron custom scheduling & agent selector` (open 3+ months) — Still open despite PR #1404 finalizing time-picker UX.
- **PR #2294** — `docs: add TakoAPI directory badge` — Low-priority documentation addition.

## Community Hot Topics

### Most Active Issue
**Issue #2293** [OPEN] — "重启后，多个agent下的USER.md被覆盖替换的BUG？" (Reboot overwrites USER.md across agents)  
👤 Author: yepcn | 💬 1 comment | Created: 2026-07-07 | Updated: 2026-07-08  
[🔗 GitHub](https://github.com/netease-youdao/LobsterAI/issues/2293)

**Analysis**: A clear data-loss bug affecting users with multiple agents. The user discovered that modifying one agent's "About You" or `USER.md` propagates to all others, and the issue persists across restarts. **Underlying need**: Proper multi-agent data isolation — users want distinct identities/prompts per agent.  
**Fix status**: **Resolved today via PR #2295**, merged and closed on 2026-07-08. The fix scopes `USER.md` reads/writes per agent workspace.

### Stale but Active Issues
- **Issue #1400** [CLOSED] — "4.1版本严重bug，网关反复启动失败" (4.1 gateway crash-loop) — 7 comments, high severity. Closed as stale but the underlying problem remains unaddressed.
- **Issue #1348** [OPEN] — "定时任务名称重复没有校验" (Scheduled task duplicate name validation missing) — Open for 3+ months, low attention.

## Bugs & Stability

### 🔴 Critical
- **Issue #1400** — **Gateway crash-loop on 4.1** (repeated restart failure, infinite loop).  
  👤 Author: danielmonlite | Updated: 2026-07-08  
  [🔗 GitHub](https://github.com/netease-youdao/LobsterAI/issues/1400)  
  **Status**: Closed as stale (no fix merged). User reports upgrading from 3.30 to 4.1 causes the gateway to never stabilize. Also reports a secondary bug: `qwen3.5-plus` LLM fails with "web-extractor cannot start without web-search". User provided contact info but there is no evidence of maintainer outreach.  
  **Severity**: Highest — core functionality completely broken for some upgrade paths. **No fix PR exists.**

- **Issue #2293** — **USER.md cross-agent overwrite bug** (data loss for multi-agent setups).  
  **Severity**: High — confuses agent isolation. **Resolved by PR #2295 today.**

### 🟡 Medium
- **Issue #1348** — **Scheduled task duplicate name validation missing**.  
  **Severity**: Low-medium — data integrity risk. No fix PR.

### 🟢 Low
- **PR #1401** — Fixed request ID predictability (security: Math.random() → crypto.randomUUID()).
- **PR #1403** — Fixed missing `delete` i18n key (Chinese UI showed English word).
- **PR #1402** — Fixed multi-select file attachment bug (only last file was kept).
- **PR #1406** — Fixed empty IM channel list when no platform toggled.

## Feature Requests & Roadmap Signals

### Recent Features Delivered
1. **Delegated Subagent Collaboration** (PR #2285) — Major new capability allowing agents to delegate tasks to other agents, with persisted conversation history. Likely a foundation for multi-agent workflows.
2. **Minimizable Cowork Permission Prompts** (PR #2296) — Usability improvement for long-running cowork sessions.
3. **Cron Custom Scheduling** (PR #1347, still open) — Advanced scheduling with visual builder and raw expression mode.

### Predicted Next-Version Features
- **Scheduled Task Agent Selector** (PR #1347) — Binding agents/models to tasks. High community value.
- **Skills Management** (PR #1346) — A mature, long-awaited feature stalled since April 2026. Likely blocks broader platform extensibility.
- **Security hardening** — PR #1401's UUID fix suggests maintainers are aware of request-level security issues.

## User Feedback Summary

### Pain Points
- **Gateway crash on upgrade** (Issue #1400): "Completely paralyzed" — the most severe user report. No fix or acknowledgement.
- **Multi-agent isolation broken** (Issue #2293): Clear data-locality bug causing confusion. **Now fixed.**
- **LLM compatibility**: `qwen3.5-plus` fails with dependency chain errors (web-extractor → web-search). Suggests configuration validation gaps.
- **Scheduled task UX** (PR #1347, #1404): Time picker and dropdown styling issues, now partially addressed.

### Satisfaction Signals
- **PR #2294** (TakoAPI badge): External directory listing suggests growing community recognition.
- High PR merge rate (10/13) indicates responsive maintenance for scoped bugs.

### Key User Need Pattern
Users are increasingly running **multiple specialized agents** but hitting isolation bugs (data overwrite, session collisions). The agent collaboration feature (PR #2285) and isolation fixes (PR #2295, #2298) directly address this emerging use case.

## Backlog Watch

### 🔴 Needs Immediate Maintainer Attention
- **Issue #1400** — Gateway crash-loop in 4.1 (stale-closed but unresolved).  
  [🔗 GitHub](https://github.com/netease-youdao/LobsterAI/issues/1400)  
  **Why**: User explicitly provided contact info; no outreach or fix exists. Likely affecting other silent users. Risk of reputational damage.

### 🟡 Moderate Priority
- **Issue #1348** — Scheduled task duplicate name validation (open 3+ months).  
  [🔗 GitHub](https://github.com/netease-youdao/LobsterAI/issues/1348)  
  **Why**: Simple validation gap that could cause data confusion.

### 🟢 Low Priority / Stale
- **PR #1346** — Skills management (open 3+ months, no updates).  
  [🔗 GitHub](https://github.com/netease-youdao/LobsterAI/pull/1346)  
  **Why**: Major feature, but no maintainer engagement. Likely needs rebase.
- **PR #1347** — Cron scheduling (open 3+ months). Active PR #1404 partially overlaps. May conflict.

---

**Project Health Summary**: The team is **responsive to scoped, reproducible bugs** but has **not addressed the highest-severity regression** (4.1 gateway crash). Multi-agent feature development is accelerating, but the user base is hitting real isolation pain points faster than fixes are shipped. The project would benefit from a **patch release (4.1.1)** to resolve the gateway issue before continuing feature work.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

Here is the **TinyClaw Project Digest** for **2026-07-09**.

---

## TinyClaw Project Digest – 2026-07-09

### 1. Today's Overview
The project is in a **maintenance and review phase** with no new issues or releases today. Activity was limited to a single PR closure, indicating a focus on finalizing security hardening rather than new features. The lack of open issues or PRs suggests the project maintainers have cleared the active backlog, but the low community engagement volume (0 new issues) may signal either high stability or reduced contributor activity. The **security-focused PR #44** represents the most significant recent work, addressing a comprehensive audit-based hardening pass.

### 2. Releases
**None.** No new releases were published in the last 24 hours. The most recent prior release remains the current stable version.

### 3. Project Progress
**1 PR merged/closed today:**

- **PR #44 – Harden channel auth, file safety, and update integrity** (closed 2026-07-08, authored by coreyone)  
  *Summary:* This large security/code-review audit set enforces sender allowlists (default-on) across Telegram, Discord, WhatsApp, and queue processing, restricts outbound file handling, and hardens bundle update/install integrity.  
  **Link:** [PR #44](https://github.com/TinyAGI/tinyagi/pull/44)

### 4. Community Hot Topics
There were **no active discussions** with significant reactions or comments in the last 24 hours. The only activity was the closure of PR #44, which received zero reactions. This suggests the community may be in a quiet period following the security audit completion.

### 5. Bugs & Stability
**No new bugs, crashes, or regressions reported today.** The project appears stable, with the hardened security measures in PR #44 likely preempting common attack vectors. No fix PRs were opened today.

### 6. Feature Requests & Roadmap Signals
**No new feature requests were submitted today.** Given the recent focus on security hardening, the next likely version may include:
- Enforced sender allowlists for all chat channels (now merged)
- Further file safety constraints based on the audit
- Potential update integrity verification improvements

### 7. User Feedback Summary
**No user feedback (pain points, use cases, satisfaction/dissatisfaction) was recorded in the last 24 hours.** The absence of complaints or requests could reflect either user satisfaction or low active community engagement.

### 8. Backlog Watch
**No long-unanswered issues or PRs currently require maintainer attention.** The active queue is completely clear (0 open issues, 0 open PRs). The project maintainer should monitor for new incoming submissions to maintain this clean state.

---

**Project Health Score:** *Maintenance/Stable* – Low activity, but zero outstanding work. Minimal community interaction suggests either high quality or low visibility.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-09

## Today's Overview
Development activity on Moltis was minimal over the past 24 hours, with zero issues updated and only one open pull request moving forward. No new releases were published. The single PR, #1145, addresses a potential panic bug in the CalDAV crate related to non-ASCII datetime parsing, indicating ongoing stability work. Overall, the project appears to be in a low-activity phase with a focus on reliability rather than new features today.

## Releases
No new releases were published today. The project currently has no tagged releases available in the data.

## Project Progress
No pull requests were merged or closed today. The one open PR, #1145, continues to await review or action but represents a targeted fix for a panic condition.

## Community Hot Topics
The sole active item is:
- **PR #1145** — [fix(caldav): avoid panic on non-ASCII datetime in normalise_datetime](https://github.com/moltis-org/moltis/pull/1145) (Author: Osamaali313, 0 comments, 0 reactions). This PR aims to fix a panic that occurs when `normalise_datetime` receives non-ASCII datetime values from remote CalDAV servers. The low engagement suggests this is a narrow, technical fix rather than a broadly discussed community topic.

## Bugs & Stability
**High Severity** — *Panic in `normalise_datetime` (CalDAV crate)*: A panic bug exists in `crates/caldav/src/ical.rs` where the DATE branch uses byte-index slicing without a full ASCII check for the entire input. While the code guards against non-ASCII digits in the DATE path, the TIME and DATETIME branches may fail on values containing non-ASCII characters (e.g., special UTF-8 sequences). A fix PR (#1145) is open but not yet merged.

## Feature Requests & Roadmap Signals
No new feature requests were filed in the past 24 hours. The sole activity (PR #1145) is a bug fix rather than a feature addition, so no clear roadmap signals are evident from today’s data.

## User Feedback Summary
With no issues, comments, or user interactions in the past 24 hours, there is no new user feedback to summarize. The single PR suggests a developer-identified bug rather than a user-reported problem, indicating limited active engagement from the user community.

## Backlog Watch
No long-unanswered issues or PRs appear in today’s data, as the only open item (#1145) was created yesterday (2026-07-08). There are no items requiring maintainer attention beyond the normal review of this pending PR.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-09

## 1. Today's Overview

CoPaw shows **high activity** with 38 issues and 47 PRs updated in the last 24 hours, signaling strong community engagement and rapid development velocity. The project released **v2.0.0-beta.4**, a significant milestone that includes scroll context management fixes and version bumps. Closed issue count (24) slightly exceeds open/active issues (14), indicating maintainers are keeping pace with incoming reports. However, 32 open PRs versus 15 merged/closed suggests a growing review backlog. The community is actively testing v2.0 beta features and reporting real-world regressions, particularly around context handling, tool approval flows, and IM channel reliability.

## 2. Releases

### v2.0.0-beta.4 — Released 2026-07-08

**What's Changed:**
- Version bump to `2.0.0b4` (@rayrayraykk)
- **Scroll context fix:** Protects the active conversation turn during eviction compression, adds graduated pressure relief to prevent abrupt context loss, and makes recall failures unmistakable in the UI (@niceIrene, PR #5837)

**Breaking Changes:** None documented in the release notes.

**Migration Notes:**
- Users upgrading from v1.x should be aware that the `scroll` context manager is the default in v2.0. The new protective banner ensures the currently active turn is never evicted — users may notice slightly different context retention behavior but should experience fewer "lost task" incidents.
- No database migration or config format changes required for this release.

## 3. Project Progress

### Merged/Closed PRs Today (15 total)

| PR # | Title | Impact |
|------|-------|--------|
| #5864 | fix(mcp): apply runtime approval level to driver policy | **Critical:** MCP tools now respect Console's runtime approval level, preventing policy bypass |
| #5792 | fix(agents): stop dropping self-paired tool messages during sanitation | **Important:** Prevents valid AgentScope 2.0 self-paired tool calls from being stripped |
| #5869 | feat(console, tui): expose system commands in slash autocomplete | **Enhancement:** `/new`, `/history`, `/plan` and more now autocomplete across all UIs |

### Notable Open PRs Advancing Today

- **#5871** — `fix(scroll): anchor the live turn with a seam banner` — Adds visual separator in eviction index so models can distinguish archived context from current request
- **#5870** — `fix(model): default preserve_thinking to false` — Flips reasoning replay default to prevent chain-of-thought infinite loops (directly addresses #5860 and #5328)
- **#5848** — `fix(scroll): label un-headlined evicted spans` — Fixes legacy v1.x conversation history rendering in scroll compression index
- **#5866** — `fix(security): split rm detection/extraction to prevent ${HOME} bypass` — Hardens `rm -rf` protection against env variable injection (#5090)
- **#5844** — `ci: add real-behavior-proof gate` — New CI policy requiring external contributors to include validation evidence in PR bodies

### Regression Test Suite Expansion

A coordinated test push (#5809, #5810, #5813) added **136 new unit tests** targeting:
- Inbox module (64 tests) — catches corrupted JSON crash bug
- Console session API (29 tests) — large session regression coverage
- Runtime/security/install (43 tests) — pins 4 production issues including install, tool-call, timeout, and rm-bypass

## 4. Community Hot Topics

### Most Discussed Issues

**[#5757] [Bug]: 飞书信息不回复情况 (Feishu messages not replied)** — 12 comments
- Platform: Feishu (Lark) channel, Docker deployment
- **Symptom:** First message is replied, subsequent messages show "received" but no response
- Needs: Investigation into channel message pipeline for IM platforms
- [Link](https://github.com/agentscope-ai/QwenPaw/issues/5757)

**[#5846] [Bug]: v2.0.0b3 关闭审批模式仍弹出弹窗 (Approval popup despite disabled mode)** — 10 comments ✅ CLOSED
- Severity: High — blocks fully autonomous operation
- Resolution: Fixed by MCP runtime approval level PR #5864
- [Link](https://github.com/agentscope-ai/QwenPaw/issues/5846)

**[#5171] [Bug]: 上下文压缩导致信息完全丢失 (Context compression causes total data loss)** — 9 comments ✅ CLOSED
- Root cause: Agent profile tokens exceeding retention threshold causes total context wipe
- Likely addressed by v2.0.0-beta.4 scroll improvements
- [Link](https://github.com/agentscope-ai/QwenPaw/issues/5171)

**[#5379] [Bug]: Internal Server Error on startup** — 8 comments
- Fresh install fails with `get_remote_addr(transport)` error
- Could be environment-specific or config issue
- [Link](https://github.com/agentscope-ai/QwenPaw/issues/5379)

**[#5860] [Bug]: v2.0 频繁对话丢失和无限循环 (v2.0 frequent context loss and infinite loops)** — 3 comments 🔴 NEW
- **Critical:** v2.0.0-beta.3 — agent loses track of current question, randomly switches to old tasks; also enters infinite reply loops
- **Fix status:** Addressed by #5870 (thinking reflow fix) and #5871 (scroll seam banner)
- [Link](https://github.com/agentscope-ai/QwenPaw/issues/5860)

### Most Active PRs

- **#5869** — Slash command autocomplete (new contributor, under review)
- **#5801** — Zalo Bot channel for Vietnam market (new contributor, 100M+ users)
- **#5751** — Fix slash command priority conflict, `/new` vs `/news`
- **#5692** — Memory search reranker on reme0.4 (under review, long-running)

## 5. Bugs & Stability

### Critical Severity

| Issue # | Symptom | Status | Fix Available? |
|---------|---------|--------|----------------|
| #5860 | v2.0 context loss + infinite reply loops | **OPEN** | Partial (#5870, #5871) |
| #5746 | Scroll compression folds active task | **CLOSED** | ✅ v2.0.0-beta.4 (#5837) |
| #5868 | Matrix channel token auth failure | **OPEN** | 🔍 Under investigation |

### High Severity

| Issue # | Symptom | Status | Fix Available? |
|---------|---------|--------|----------------|
| #5846 | Approval popup bypasses "closed mode" | **CLOSED** | ✅ PR #5864 |
| #5866 | `rm -rf ${HOME}` bypass | **OPEN PR** | ✅ PR #5866 |
| #5259 | Windows vector index not persisted | **OPEN** | 🔍 Needs investigation |
| #5379 | Internal Server Error on fresh install | **OPEN** | 🔍 Need repro instructions |

### Medium/Low Severity

- **#5784** — Frontend compression threshold shows wrong value for cross-provider models
- **#5863** — Coding session image display shows binary instead of rendered image
- **#5859** — DeepSeek model fails during auto memory search (missing `reasoning_content` field)
- **#5725** — Browser lag during streaming output (Chrome-specific)

### Stability Assessment

The v2.0 beta cycle is surfacing **context management** as the primary stability concern. Users report three distinct failure modes:
1. **Context loss** — Agent forgets current task mid-execution
2. **Infinite loops** — Model repeats user query + tool call cycle indefinitely
3. **Time-travel replies** — Agent responds to old messages as if current

The scroll compression fixes in beta.4 and pending PRs #5870/#5871 represent significant mitigation, but these issues suggest the compression algorithm may need broader testing across different conversation patterns.

## 6. Feature Requests & Roadmap Signals

### High-Probability for Next Release

| Feature | Issue/PR | Evidence |
|---------|----------|----------|
| **Slash command autocomplete everywhere** | PR #5869 | Merged today, expands UX across Console + TUI |
| **Memory search reranker** | PR #5692 | Under review, adds post-retrieval reranking stage |
| **Windows desktop GUI automation** | PR #5187 | Long-running, adds UIA + Tauri control mode |
| **Zalo Bot channel** | PR #5801 | New contributor, Vietnam market expansion |

### Community-Requested Features

| Feature | Issue # | Votes/Comments | Analysis |
|---------|---------|----------------|----------|
| **System notification on task complete / approval needed** | #5852 | 2 comments | Multiple users want auditory feedback when not watching screen |
| **Agent team/swarm collaboration** | #5139 | 4 comments | Enterprise users requesting multi-agent orchestration |
| **Minimize to system tray** | #5312 | 3 comments | Desktop usability request (Windows) |
| **Collapsible tool approval blocks** | #5107 | 2 comments | UI clutter reduction after decision |
| **Task completion notification sounds** | #3302 | 2 comments | Recurring request since April |

### Roadmap Prediction

The pattern of issues suggests v2.0 stabilization will be the immediate priority, with:
1. **Next beta (beta.5)** likely to include the scroll seam banner (#5871), thinking reflow fix (#5870), and MCP approval hardening (#5864)
2. **v2.0 stable** expected within 2-3 weeks if current regression velocity slows
3. **Post-v2.0** candidates: memory reranker (#5692), Windows automation (#5187), and the multiple IM channel improvements (#5801 Zalo, #5868 Matrix fix)

## 7. User Feedback Summary

### Pain Points

- **中文用户占主导 (Chinese users dominate)** — The majority of bug reports are in Chinese, suggesting the largest user base is in China. Translation/summarization support may be needed for non-Chinese maintainers.
- **v2.0 context management is the #1 complaint** — Multiple users report tasks being "forgotten" mid-execution, especially with long-running or tool-heavy workflows. The scroll compression algorithm, while innovative, is causing real workflow disruption.
- **IM channel reliability is inconsistent** — Feishu (#5757), QQ (#5776), and Matrix (#5868) all have reported message-dropping or session-stale issues. This affects the "always-on assistant" use case.
- **DeepSeek/third-party model compatibility** — Several reports (#5416, #5328, #5859) specifically mention issues with non-Qwen models, particularly around thinking/reasoning content fields. The recently defaulted `preserve_thinking: false` should help.

### Satisfaction Signals

- **Active beta testing community** — Users are eagerly testing v2.0 beta and filing detailed reports with logs/screenshots
- **Quick resolution of high-severity bugs** — #5846 (approval popup bypass) was closed same-day with a fix PR
- **New contributor momentum** — Multiple first-time contributors submitting features (Zalo channel, slash commands, security fixes) suggests good onboarding experience

### Use Case Patterns

1. **Autonomous agent operation** — Users want "fire and forget" with agent executing multi-step tasks without human intervention (approval popups are seen as blockers)
2. **Cron/heartbeat workflows** — Automated daily knowledge extraction and file processing (several reports about cron limitations)
3. **Multi-platform assistant** — Users running agents across Feishu, QQ, Matrix simultaneously expect consistent behavior

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue # | Age | Subject | Why It Matters |
|---------|-----|---------|----------------|
| #5379 | 16 days | Internal Server Error on startup | Blocks new users from deploying; no maintainer response visible |
| #5259 | 21 days | Windows vector index persistence | Windows users lose memory search on every restart |
| #5725 | 6 days | Browser lag during streaming | Degrades user experience but no investigation started |
| #5784 | 3 days | Frontend compression threshold display bug | Incorrect UI values mislead user configuration |

### Stale PRs Needing Review

| PR # | Age | Subject | Why It Matters |
|------|-----|---------|----------------|
| #5187 | 24 days | Windows GUI automation | Major feature, complex, needs careful review |
| #5692 | 7 days | Memory search reranker | Enhances core memory feature, under review since July 1 |
| #4171 | 60 days | Memory-distill tool plugin | Longest-open feature PR, may need rebase or decision |

### Risk Indicators

- **#5868** (Matrix channel) — Regression from v1.1.5 to latest, suggests channel infrastructure changes may have broken auth
- **#5416** (thinking content empty) — Still open despite 5 comments, affects any model using `reasoning_content` field
- **#5860** (v2.0 infinite loops) — Highest severity new issue, if not resolved could delay v2.0 stable release

### Maintainer Response Time Assessment

- **Critical bugs:** Same-day to 1-day response (e.g., #5846 → PR #5864 within hours)
- **Feature requests:** 3-7 days for initial triage
- **UI/UX bugs:** 5-14 days, longer for cross-platform issues (Windows/macOS)
- **Stale items:** 16-60 days with no response indicates prioritization toward v2.0 stability over feature development or non-blocking bugs

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-09

## Today's Overview
ZeroClaw shows **high development activity** with 50 issues and 50 PRs updated in the last 24 hours, though no new releases were published. The project maintains a **healthy but strained** state: 40 open/active issues (10 closed) and 37 open PRs (13 merged/closed). Community engagement is strong, with several architecturally significant RFCs moving to accepted or in-progress status. **Persistent concerns** include multiple high-severity bugs around provider interoperability, UTF-8 truncation, and MCP tool filtering that have accumulated with longer staleness periods. A notable architectural shift is underway — moving compile-time feature flags to runtime WASM plugins — which could materially reduce binary size and deployment friction.

## Releases
**No releases in the last 24 hours.**

The latest available release remains the prior version; no changelog, breaking changes, or migration notes apply.

## Project Progress
**10 issues closed** and **13 PRs merged/closed** in the last 24 hours.

**Merged/closed PRs of note:**
- [#8861](https://github.com/zeroclaw-labs/zeroclaw/pull/8861) — **fix(providers)**: Resolved alias credential for model-catalog so native `/models` list works for credentialed providers (xAI/Grok, Groq, DeepSeek, etc.) — impacts ZeroCode, gateway, and CLI model dropdowns.
- [#8639](https://github.com/zeroclaw-labs/zeroclaw/pull/8639) — **feat(zerocode)**: Implemented TodoWrite tracker with RPC + ACP + durable persistence, enabling a live read-only task tracker in ZeroCode (style of Claude Code / OpenCode).
- [#8795](https://github.com/zeroclaw-labs/zeroclaw/pull/8795) — **fix(web)**: Added Skills nav entry to left sidebar, fixing a discoverability gap where the `/skills` page was unreachable from navigation.
- [#7690](https://github.com/zeroclaw-labs/zeroclaw/pull/7690) — **feat(provider)**: Added test coverage for responses-wire option propagation.
- [#7737](https://github.com/zeroclaw-labs/zeroclaw/pull/7737) — **bug(channels)**: Fixed approval attribution to use per-request state instead of a global side channel.
- [#4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873) — [Closed] Bug: Feishu integration only calling LLM instead of Agent.
- [#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) — [Closed] Bug: model_switch tool not persisting across turns.
- [#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334) — [Closed] Bug: `skills install/list/remove` targeting wrong `data_dir` in multi-agent setups.
- [#8553](https://github.com/zeroclaw-labs/zeroclaw/issues/8553) — [Closed] Bug: Agent could not use environment variables as http_request secrets.

**Key open PRs pushing boundaries:**
- [#8854](https://github.com/zeroclaw-labs/zeroclaw/pull/8854) — Major refactor of all provider constructors to typed builders, eliminating 7 anti-patterns — across 15+ providers.
- [#8863](https://github.com/zeroclaw-labs/zeroclaw/pull/8863) — Host-mediated outbound WebSocket support for channel plugins, a foundational piece for the WASM plugin architecture.
- [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) — Centralized deferred-MCP access policy, fixing a correctness surface from Issue #8054.
- [#8819](https://github.com/zeroclaw-labs/zeroclaw/pull/8819) — Corrected `tool_filter_groups` for real MCP tools, which were previously a total no-op.

## Community Hot Topics
**Most active issues (by comment count):**

1. **#5862** — [Bug]: zeroclaw does not know it can add cron (13 comments)  
   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)  
   *Analysis:* Core usability gap — the agent cannot self-discover the `zeroclaw cron` capability. This reflects a broader need for **self-describing tool inventory** built into the agent's action space.

2. **#6034** — [Bug]: User messages lost in single and multi-turn dialogues (7 comments)  
   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6034)  
   *Analysis:* Critical data loss — user messages disappearing in provider communication. The error trace implicates `custom:http` provider with Qwen3.5-35B, suggesting a serialization or message ordering bug in the runtime/daemon.

3. **#8424** — RFC: `.ignore` File Mechanism for Workspace File Protection (7 comments)  
   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)  
   *Analysis:* Users need to protect sensitive files (config, credentials) inside the workspace from AI agent access. Current `forbidden_paths` only blocks *external* paths. The strong engagement suggests this is a **high-priority security ergonomics gap**.

4. **#8850** — Move optional channels/tools from compile-time features to runtime plugins (4 comments)  
   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)  
   *Analysis:* The **most architecturally significant issue** tracked today — it proposes shrinking the default binary dramatically and enabling channel/tool acquisition without recompilation. Already moved to `status:in-progress`.

5. **#6002** — Not clearly addressed to the assistant (5 comments)  
   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6002)  
   *Analysis:* Telegram channel message routing ambiguity when using local llama.cpp. User expectation vs. actual behavior mismatch on message addressing.

## Bugs & Stability

### Critical/High Severity
| Issue | Severity | Summary | Has Fix PR? |
|-------|----------|---------|-------------|
| [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | S1 - workflow blocked | **User message loss** in multi-turn with custom providers (400 Bad Request) | No |
| [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | S0 - data loss | `reasoning_content` not forwarded in tool-call loops with Xiaomi thinking models | No |
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | S1 - workflow blocked | **macOS app** fails to detect granted permissions, shows empty page, window disappears | No |
| [#8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094) | S0 - data loss/security risk | Anthropic provider added in Quickstart unavailable in chat until dashboard reset | No |
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Crashloop | Channels supervisor crashloops when all channels have `enabled=false` | No |
| [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | S0 - data loss | Provider error (405 Method Not Allowed) for custom DashScope endpoint | No |

### Medium Severity
| Issue | Summary | Status |
|-------|---------|--------|
| [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) | Context overflow causes hallucination/topic drift | Blocked, needs repro |
| [#7828](https://github.com/zeroclaw-labs/zeroclaw/issues/7828) | Audit byte-limited string truncation for UTF-8 safety (tracker) | Accepted — PR [#8873](https://github.com/zeroclaw-labs/zeroclaw/pull/8873) posted |
| [#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911) | Android Termux installation fails (unknown Linux aarch64 binary) | Needs author action |
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | Agent cannot self-discover cron capabilities | Blocked, stale candidate |

### Fixed/Closed Today
- [#8553](https://github.com/zeroclaw-labs/zeroclaw/issues/8553) — Environment variables as http_request secrets (fixed)
- [#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334) — Skills install targeting wrong data_dir (fixed)
- [#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) — model_switch tool persistence (fixed)
- [#7737](https://github.com/zeroclaw-labs/zeroclaw/issues/7737) — Approval attribution side-channel bug (fixed)

## Feature Requests & Roadmap Signals

**High-priority requests under active development:**
- **RFC #8603** — OpenAI Chat Completions compatibility adapter (accepted, no-stale) – allows Open WebUI, LobeChat integrations
- **Tracker #8850** — WASM plugin system for channels/tools (in-progress) – the most significant architectural change on the roadmap
- **RFC #8424** — `.ignore` file mechanism for workspace file protection – addresses security gap exposed by many users
- **Issue #8226** — Per-agent custom environment variables (accepted, blocked) – needed for multi-tenancy and MCP identity isolation
- **Feature #7543** — Multi-session support in web chat UI (accepted) – session sidebar with new/switch/rename/delete
- **RFC #7673** — Native context compression as provider pipeline decorator (blocked) – could mitigate context overflow bugs (#6517)
- **Feature #8602** — Enhanced `file_read` (accepted, no-stale) – line caps, charset detection, paged PDF, notebook awareness
- **Tracker #7831** — Discord interaction-surface parity — embeds, typed slash options, components, voice

**Predicted for next release:** The TodoWrite tracker (#8639, merged today) and the provider builder refactor (#8854, open) are strong candidates. The plugin WASM path (#8850/#8863) may land incrementally.

## User Feedback Summary

**Pain points expressed:**
1. **Provider interoperability friction** — Multiple users report providers failing silently (Qwen, DashScope, Xiaomi thinking models), losing messages, or not appearing in chat after configuration.
2. **Agent self-awareness gaps** — ZeroClaw cannot discover its own capabilities (e.g., cron scheduling) leading to "I don't have tools to do that" responses.
3. **Security/compliance concerns** — Users explicitly request workspace-internal file protection (.env, credentials) and SSRF guards on file downloads.
4. **Installation and platform issues** — macOS app is non-functional; Android/Termux installs fail; the multi-platform support has gaps.
5. **Missing workflow glue** — The `model_switch` tool didn't persist across turns; channel supervisor crashloops on disabled configs — indicators of edge case brittleness.

**Satisfaction signals:**
- Strong engagement with RFCs and architectural discussions indicates a sophisticated, invested user base.
- Large refactors (provider builders, plugin system) are being collaboratively reviewed with detailed feedback.
- Quick turnaround on several high-impact bugs (env secrets, skills install path, approval attribution).

## Backlog Watch

**Issues requiring maintainer attention (long-dormant or stale):**

| Issue | Age (days) | Summary | Stale Flag |
|-------|------------|---------|------------|
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | 82 | Agent cannot self-discover cron capabilities | `stale-candidate` |
| [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | 55 | reasoning_content not forwarded in tool-call loops | `stale-candidate` |
| [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | 59 | Provider error for DashScope endpoint | `stale-candidate` |
| [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) | 62 | Context overflow hallucination/topic drift | `stale-candidate` |
| [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) | 78 | Telegram message addressing ambiguity | Needs author action |
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | 54 | Channels supervisor crashloops | Needs author action |
| [#7215](https://github.com/zeroclaw-labs/zeroclaw/pull/7215) | 35 | Quickstart missing webhook port field (PR) | `stale-candidate`, needs author action |
| [#8267](https://github.com/zeroclaw-labs/zeroclaw/pull/8267) | 15 | RobotConfig test coverage (PR) | `stale-candidate`, needs author action |
| [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) | 54 | Delete unneeded branches from repository | Blocked |
| [#7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431) | 30 | Pre-turn routing intent extraction | Blocked |

**Notable:** Four issues carry `stale-candidate` + `blocked` labels, suggesting maintainers may need to make go/no-go decisions soon. The S0/S1 severity bugs (#6034, #6672) without fix PRs should be prioritized given their data-loss classification.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*