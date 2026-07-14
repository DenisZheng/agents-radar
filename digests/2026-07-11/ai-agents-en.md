# OpenClaw Ecosystem Digest 2026-07-11

> Issues: 431 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-11 01:28 UTC

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

# OpenClaw Project Digest — 2026-07-11

## Today's Overview

OpenClaw is experiencing **high activity** with **431 issues and 500 PRs updated in the last 24 hours**, maintaining a roughly balanced ratio of open-to-closed items. No new releases were published today. The project continues to address critical stability concerns—particularly around memory leaks, session-state integrity, and message delivery reliability—while simultaneously pushing forward substantial feature work including a portable table presentation system and a gateway browser panel for the web Control UI. The maintainer team appears focused on hardening the infrastructure ahead of an upcoming release (see release handoff PR #104032), with particular attention to memory-wiki concurrency, Telegram delivery correctness, and embedded session continuity.

## Releases

**No new releases today.** The previous release remains `v2026.5.18` (referenced in Issue #83959). A release handoff PR for `2026.7.1` (#104032) was opened and closed today, suggesting the team is preparing a near-term release but has not yet published it.

---

## Project Progress

**Merged/Closed PRs today (selected high-impact):**

| PR | Description | Significance |
|---|---|---|
| [#104022](https://github.com/openclaw/openclaw/pull/104022) | Prevent empty Telegram sends for cron summaries | Fixes silent delivery failures when cron produces non-empty summary but Telegram rejects empty text payload |
| [#103496](https://github.com/openclaw/openclaw/pull/103496) | Reject invalid proposal list limits in skill_workshop | Validation hardening for agent skill interactions |
| [#103408](https://github.com/openclaw/openclaw/pull/103408) | Prevent partial failures during concurrent memory-wiki writes | **Critical fix**—addresses race condition where simultaneous agent writes could corrupt wiki vault state |
| [#100333](https://github.com/openclaw/openclaw/pull/100333) | Fix duplicate assistant messages in Telegram context | Reduces token waste and prevents model confusion from repeated entries |
| [#102259](https://github.com/openclaw/openclaw/pull/102259) | Strip Markdown formatting in Telegram conversation-context dedup | Companion fix to dedup logic |
| [#103746](https://github.com/openclaw/openclaw/pull/103746) | Coverage for ClickClack tail cursor fallback | Testing infrastructure improvement |
| [#104032](https://github.com/openclaw/openclaw/pull/104032) | Harden and accelerate 2026.7.1 release handoff | Release engineering; fixes crash window in Telegram spool recovery |

**Notable open PRs nearing completion:**
- [#103583](https://github.com/openclaw/openclaw/pull/103583) — **Portable table presentation blocks** (closes #12602 for Slack Block Kit support)
- [#104012](https://github.com/openclaw/openclaw/pull/104012) — **Gateway browser panel with annotate-to-prompt** in web Control UI
- [#104026](https://github.com/openclaw/openclaw/pull/104026) — Fixes config validation error messages in packaged builds (long-standing UX frustration)
- [#103880](https://github.com/openclaw/openclaw/pull/103880) — Keeps hot reload subsystems consistent during channel deferral

---

## Community Hot Topics

### Most Discussed Issues

1. **[#99241](https://github.com/openclaw/openclaw/issues/99241) — Tool outputs render as unreadable image attachments** (20 comments, 🔥)
   - *Analysis:* A **platinum-tier** issue affecting long-running workflows. When tool results collapse into image placeholders, agents lose access to critical text evidence. Community frustration is high because this breaks autonomous debugging loops. The issue requires a product decision on whether to preserve raw text alongside attachments or prevent the collapse entirely.

2. **[#102175](https://github.com/openclaw/openclaw/issues/102175) — Embedded prompt cache breaks across room-event/policy/Responses boundaries** (16 comments)
   - *Analysis:* A **diamond-tier regression** in embedded sessions. Prompt-cache continuity failures waste tokens and degrade response quality. The complexity of cross-boundary caching suggests this will need architectural changes rather than a simple fix.

3. **[#10659](https://github.com/openclaw/openclaw/issues/10659) — Masked Secrets for API key protection** (15 comments, 👍4)
   - *Analysis:* Long-running feature request (since Feb 2026) with strong community support. Users are increasingly concerned about prompt injection extracting credentials. This has security review blockers but no fix PR yet.

4. **[#91588](https://github.com/openclaw/openclaw/issues/91588) — Gateway memory leak: 350MB→15.5GB RSS growth over days** (15 comments)
   - *Analysis:* **P0 critical issue** causing repeated OOM crashes and `launchd-handoff` restart cycles. This is one of the most severe stability issues in the project—affects all users running the gateway continuously. No fix PR identified.

### Highest Reacted

- **[#63829](https://github.com/openclaw/openclaw/issues/63829) — Per-agent memory-wiki vault configuration** (CLOSED, 👍10)
   - *Analysis:* Closed today. High demand for multi-agent isolation in memory persistence. The closing of this long-standing feature signals the fix has been implemented (related to concurrent write fix PR #103408).

- **[#8508](https://github.com/openclaw/openclaw/issues/8508) — Configurable ack reaction emojis** (👍6)
   - *Analysis:* Small UX enhancement with surprising popularity. Users find the fixed 👀 reaction robotic in group chats and want contextual emoji selection.

---

## Bugs & Stability

### Critical (P0)

| Issue | Description | Status |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway memory leak: RSS 350MB→15.5GB over days, OOM crashes | Open, **no fix PR** |
| [#101763](https://github.com/openclaw/openclaw/issues/101763) | Hosted Molty: model selector doesn't persist—API receives dotted model id | Open, needs info from reporter |

### High Severity (P1)

| Issue | Description | Status |
|---|---|---|
| [#99241](https://github.com/openclaw/openclaw/issues/99241) | Tool outputs become unreadable image attachments | Open, needs product decision |
| [#84569](https://github.com/openclaw/openclaw/issues/84569) | WhatsApp session stalls on long model_call, reply never delivered | Open, linked PR exists |
| [#83959](https://github.com/openclaw/openclaw/issues/83959) | Codex app-server startup retries exhaust before replacement ready | Open, linked PR exists |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | Gateway heap grows to 1073MB+ at idle on macOS, cron fails silently | Open, stale, needs info |
| [#99681](https://github.com/openclaw/openclaw/issues/99681) | Discord plugin fails to auto-reconnect after WS 1006 close | **CLOSED** — fix merged |
| [#85714](https://github.com/openclaw/openclaw/issues/85714) | Agent's final message stranded when LLM forgets delivery tool | CLOSED |
| [#68691](https://github.com/openclaw/openclaw/issues/68691) | Sandbox zombie processes accumulate under PID 1 | CLOSED |
| [#44749](https://github.com/openclaw/openclaw/issues/44749) | Concurrent allow-always approvals lose entries (race condition) | CLOSED |

### Regressions & Data Loss

- **[#102175](https://github.com/openclaw/openclaw/issues/102175)** — Embedded prompt cache regression across session boundaries (P2, open)
- **[#78362](https://github.com/openclaw/openclaw/issues/78362)** — Control UI CSP blocks Zod Function() constructor (CLOSED)
- **[#91283](https://github.com/openclaw/openclaw/issues/91283)** — `minSecurity` inverted—`full` treated as most restrictive instead of least (CLOSED)

### Stability Trends

The **gateway memory leak** (#91588) and **heap growth at idle** (#87109) remain the two most concerning unresolved stability issues. Both affect long-running gateway instances and can cause silent cron job failures before triggering OOM kills. The Discord reconnection fix (#99681) was a positive step, but the underlying pattern of channel-specific session failures (WhatsApp #84569, Telegram file deadlock #27984) suggests a systemic fragility in session lifecycle management.

---

## Feature Requests & Roadmap Signals

### Likely to Ship in Next Release (v2026.7.x)

Based on recently closed issues and PR activity:

1. **Portable Table Presentation Blocks** (#12602, PR #103583) — Slack Block Kit support for rich tabular responses. The PR is large (XL) but touches all major channels.
2. **Gateway Browser Panel in Web Control UI** (PR #104012) — Brings native browser capabilities (annotate-to-prompt, element inspect) to non-macOS platforms.
3. **Per-Agent Memory-Wiki Vault Configuration** (#63829, CLOSED) — Feature completed; multi-agent memory isolation.

### Under Active Discussion

| Feature | Issue | Latest Activity |
|---|---|---|
| **Masked Secrets** (API key protection) | [#10659](https://github.com/openclaw/openclaw/issues/10659) | Updated today, needs security review |
| **Filesystem Sandboxing Config** | [#7722](https://github.com/openclaw/openclaw/issues/7722) | Stale since Feb, needs maintainer review |
| **Multi-lane concurrency for sub-agents** | [#10467](https://github.com/openclaw/openclaw/issues/10467) | Open since Feb, no PR |
| **Batch API for background tasks** | [#9865](https://github.com/openclaw/openclaw/issues/9865) | Cost-saving feature, low urgency |
| **Streaming TTS for voice calls** | [#8355](https://github.com/openclaw/openclaw/issues/8355) | P2, UX improvement for voice pipeline |
| **Private Mode for demos** | [#7403](https://github.com/openclaw/openclaw/issues/7403) | Updated today, needs security review |
| **Webhook session reuse (multi-turn)** | [#11665](https://github.com/openclaw/openclaw/issues/11665) | Updated today, linked PR open |

### Roadmap Signals

The cluster of features around **session isolation and security** (masked secrets, filesystem sandboxing, private mode, per-agent vaults) suggests the project is prioritizing enterprise/security-conscious users. The **voice call improvements** (#8355 streaming TTS) and **WhatsApp sticker/call support** (#7476, #7540) indicate continued investment in communication channel parity. The **batch API support** (#9865) and **multi-lane sub-agent concurrency** (#10467) point toward scaling for production workloads.

---

## User Feedback Summary

### Pain Points

1. **Memory & Stability**: Users report frustration with silent failures—cron jobs that fail without notification (#87109), sessions that stall without error (#84569), and deadlocks that lock entire chats (#27984). The memory leak (#91588) is generating the most concern as it affects all long-running deployments.

2. **Token Waste**: Duplicate messages in Telegram context (#100333, #102175) and prompt-cache failures (#102175) are costing users real money in API fees. Multiple comments mention "doubling token usage" as a primary complaint.

3. **Configuration Friction**: Installing plugins requires multi-step manual config (#6792). The silence of cron delivery config (#9155) forces repetitive per-job setup. Users want "set and forget" defaults.

4. **Accessibility**: Screenreader users report the TUI is nearly unusable due to emoji and unicode box-drawing characters (#9637). This has been open since February with no fix PR.

### Satisfaction Signals

- **Per-agent memory vault** (#63829, 10 reactions) was closed—high user satisfaction expected.
- **Table presentation blocks** (#12602, 14 comments) addresses a long-standing request for richer Slack messages.
- **Config validation error fixes** (#104026) will fix a frustrating "Invalid input" vs meaningful error message gap.

### Use Case Highlights

- **Content creators** want Private Mode (#7403) to demo OpenClaw without exposing personal data
- **Enterprise users** need Masked Secrets (#10659) and Filesystem Sandboxing (#7722) for compliance
- **Multi-agent workflows** require queue visibility (#9797) and concurrency controls (#10467) for reliable orchestration

---

## Backlog Watch

### High-Impact Issues Needing Maintainer Attention

| Issue | Days Open | Impact | Notes |
|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) — Gateway memory leak (P0) | 32 days | Critical—OOM crashes | **No fix PR exists.** Most severe unresolved issue. |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) — Gateway heap growth (P1) | 45 days | High—silent cron failures | Marked stale; needs info from reporter |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) — Masked Secrets (P1) | 155 days | Security—credential leaks | Blocked on security review; high community demand |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) — Filesystem Sandboxing (P2) | 159 days | Security—file access control | Needs product decision and security review |
| [#9637](https://github.com/openclaw/openclaw/issues/9637) — TUI accessibility (P2) | 157 days | Accessibility—screenreader UX | Needs product decision |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) — Sub-agent announce suppression (P2) | 159 days | UX—frequent workflow blocker | Updated today but no product decision |
| [#7403](https://github.com/openclaw/openclaw/issues/7403) — Private Mode (P2) | 160 days | Demo/content creation use case | Needs security review |
| [#6792](https://github.com/openclaw/openclaw/issues/6792) — configPatch in plugin manifest (P2) | 160 days | DevEx—plugin installation friction | Stalled on security review |
| [#6890](https://github.com/openclaw/openclaw/issues/6890) — Ralph Loop max iterations config (P2) | 160 days | Agent control | Needs product decision |
| [#7006](https://github.com/openclaw/openclaw/issues/7006) — Expose model used/cost for OpenRouter (P2) | 160 days | Transparency—cost visibility | Needs maintainer review |

### Stale Issues (No Update >30 Days)

- [#86330](https://github.com/openclaw/openclaw/issues/86330) — Not in top 50 but referenced; many issues have `stale` label
- The backlog contains **multiple P1/P2 issues from Feb 2026** that have not received maintainer triage or product decisions, suggesting a capacity constraint in the maintainer team

---

*Generated from OpenClaw GitHub data snapshot on 2026-07-11. Data covers the 24-hour window ending 2026-07-11.*

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date:** 2026-07-11

---

## 1. Ecosystem Overview

The personal AI agent open-source ecosystem is undergoing a **major maturation phase**, characterized by two simultaneous trends: foundational stability hardening and architectural scale-up toward multi-agent, multi-tenant deployments. Projects are prioritizing **session reliability, security isolation, and production-grade observability** over novel features, while simultaneously investing in agent-to-agent delegation protocols and configurable runtime policies. The ecosystem shows a clear bifurcation between established reference implementations (OpenClaw, IronClaw) with massive community engagement and emerging specialized agents (PicoClaw, NanoClaw, CoPaw) targeting specific deployment niches. A critical undercurrent is the **tension between rapid feature iteration and regression stability**, visible across all projects.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases Today | Health Score | Status |
|---|---|---|---|---|---|
| **OpenClaw** | 431 | 500 | None | ⚠️ High | Active development, significant backlog |
| **IronClaw** | 36 | 50 | None | ✅ High | Rapid iteration, responsive team |
| **CoPaw** | 44 | 49 | **v2.0.0 stable** | 🟢 Very High | Major release milestone |
| **ZeroClaw** | 19 | 50 | None | ✅ High | Large feature pipeline |
| **NanoClaw** | ~3 | 25 | None | ✅ Good | Focused sprint, architectural refactor |
| **Hermes Agent** | 50 | 50 | None | ✅ High | Heavy security/bugfix cycle |
| **PicoClaw** | 3 | 18 | None | 🟢 Good | Security hardening + features |
| **NanoBot** | 9 | 42 | None | ✅ Good | Healthy development cycle |
| **LobsterAI** | ~5 | 17 | **2026.7.10** | 🟢 Good | Cowork feature stabilization |
| **NullClaw** | 2 | 0 | None | 🔴 Low | Stalled, security gap |
| **Moltis** | 0 | 1 | None | 🟡 Minimal | Dormant, only model updates |
| **TinyClaw** | 0 | 0 | None | ⚫ Inactive | No activity |
| **ZeptoClaw** | 0 | 0 | None | ⚫ Inactive | No activity |

**Key Observations:**
- **OpenClaw dominates** sheer volume (431 issues, 500 PRs) but with a backlog-to-merged ratio suggesting review bottleneck
- **CoPaw** achieved the ecosystem's only major release today (v2.0.0) with breaking architecture changes
- **IronClaw** shows the best responsiveness-to-volume ratio—16 PRs merged from 50 updated
- **NullClaw, Moltis, TinyClaw, ZeptoClaw** represent a "long tail" of minimal or stalled activity

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Sheer community mass**: 431 issues + 500 PRs in 24h dwarfs all competitors (IronClaw, next largest, has ~10x less volume)
- **Reference implementation status**: GitHub.com/openclaw/openclaw is the ecosystem's primary reference project
- **Breadth of channel support**: Telegram, WhatsApp, Discord, Slack, WebUI—unmatched integration surface
- **Maturity of infrastructure**: Memory-wiki, per-agent vaults, table presentation, browser panel—deep feature set

### Technical Approach Differences
- **Release cadence**: More conservative release cycle vs IronClaw's continuous deployment; OpenClaw handoff PRs (#104032) show structured release engineering
- **Architecture**: Less focused on Reborn-style runtime migration (IronClaw) or AgentScope 2.0 rewrite (CoPaw)—more incremental evolution
- **Community management**: Higher tolerance for open issues; backlog has critical P0 bugs (gateway memory leak #91588) without fix PRs for 32+ days

### Community Size Comparison
| Metric | OpenClaw | IronClaw | ZeroClaw | NanoBot |
|---|---|---|---|---|
| Daily Issues | 431 | 36 | 19 | 9 |
| Daily PRs | 500 | 50 | 50 | 42 |
| Open Issues (backlog) | Very large | Managed | 17 | Moderate |
| Critical fixes (P0) | **Unresolved** | Resolved same-day | In progress | Security gap (#4776) |

**Verdict**: OpenClaw is the **ecosystem's dominant player by volume** but faces **capacity constraint challenges**—critical bugs linger while feature development continues. Its position is strongest for **multi-channel consumer deployments**, weakest for **rapid security incident response**.

---

## 4. Shared Technical Focus Areas

### Requirements Emerging Across Multiple Projects

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Memory & Context Management** | OpenClaw, NanoClaw, CoPaw, Hermes | Persistent memory trees, provider-agnostic storage, memory-wiki vault isolation, compaction recovery |
| **Model Provider Flexibility** | NanoBot, ZeroClaw, Moltis, PicoClaw | Per-conversation model override, per-subagent routing, Ollama caching, GPT-5.6 support |
| **Security & Credential Protection** | OpenClaw, Hermes, IronClaw, ZeroClaw, PicoClaw | Masked secrets, terminal snapshot credential leaks, MQTT TLS, A2A token isolation |
| **Multi-Agent Orchestration** | CoPaw, ZeroClaw, NanoBot, IronClaw, PicoClaw| Subagent delegation, A2A protocol, SOP approval brokers, agent collaboration bus |
| **Session/Channel Reliability** | OpenClaw, IronClaw, PicoClaw, NullClaw | WebSocket reconnect, idle timeout handling, message dedup, cron delivery correctness |
| **Observability & Diagnostics** | ZeroClaw, IronClaw, CoPaw, LobsterAI | OTel session_id tracking, run failure classification, error badges, compaction logging |
| **Windows/Desktop Stability** | CoPaw, OpenClaw, ZeroClaw | Sandbox crashes, icacls recursion, pty exec issues, NVIDIA driver compatibility |

### Cross-Cutting Pain Point: Silent Failures
- **OpenClaw**: Cron jobs fail without notification (#87109), gateway OOM kills without warning (#91588)
- **IronClaw**: Slack DM success reported on undelivered messages (#5944)
- **NanoClaw**: CLI group creation silently fails to create DB rows (#2415)
- **CoPaw**: MCP allow/deny config ineffective without error (#5947)

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | CoPaw | ZeroClaw | NanoBot | PicoClaw |
|---|---|---|---|---|---|---|
| **Target User** | General/Enterprise | Developer/Production | Enterprise/Chinese market | Developer/Dogfooder | Developer/CLI user | Edge/Raspberry Pi |
| **Primary Channel** | Multi-channel (any) | Slack/GitHub | WeCom/DingTalk | Telegram/Web | CLI/WebUI | WhatsApp/Telegram |
| **Architecture** | Monolithic reference | Reborn runtime (Rust) | AgentScope 2.0 (Python) | Rust + plugin system | Python CLI | Go bridge |
| **Release Strategy** | Structured milestones | Continuous deployment | Major versioned | Tracker-driven | Feature branches | Batch accumulation |
| **Community Model** | Large, slow triage | Fast incident response | Chinese-language core | Active dogfooding | Contributor-friendly | Corporate-backed |
| **Key Strength** | Breadth & stability | Responsiveness | User experience | Plugin extensibility | Edit reliability | Channel parity |
| **Key Weakness** | Backlog bottleneck | Breaking changes | Windows sandbox | ZeroCode UX polish | Ollama performance | Multi-agent immaturity |

### Architectural Split: Rust vs Python vs Go
- **Rust ecosystems**: IronClaw (Reborn runtime), ZeroClaw—highest performance, targeting production deployments
- **Python ecosystems**: CoPaw (AgentScope 2.0), NanoBot—best for rapid prototyping, research integration
- **Go ecosystems**: PicoClaw—edge deployment optimization, ARM builds, lightweight footprint
- **Mixed/Node**: OpenClaw—largest community, most channel integrations

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (High Velocity, Responsive)
- **IronClaw** — 50 PRs/day, 16 merged, critical bug (#5966) fixed same-day. Most responsive in ecosystem.
- **ZeroClaw** — 50 PRs/day, large feature pipeline (SOP approval, plugin catalog). Active dogfooding culture.
- **CoPaw** — Major v2.0.0 release with 44 issues and 49 PRs. Post-release bugfixes flowing fast.
- **Hermes Agent** — 50 PRs/day, heavy security focus, structured feature PRs with validation.

### Tier 2: Stabilizing (High Volume, Managing Backlog)
- **OpenClaw** — Highest absolute volume but critical bugs aging (32+ days). Adding features faster than fixing.
- **NanoBot** — Healthy 42 PRs/day, good merge rate, but security issues (#4776) unresolved.

### Tier 3: Steady State (Moderate Activity)
- **PicoClaw** — 18 PRs/day, focused hardening (Go toolchain, OAuth, MQTT TLS). Ready for release.
- **NanoClaw** — 25 PRs/day, architectural refactor (channel defaults, memory system). Sprint mode.
- **LobsterAI** — 17 PRs/day, Cowork feature stabilization. Post-release polish cycle.

### Tier 4: Stalled or Dormant
- **NullClaw** — Low activity, critical security issue (#974) with no response
- **Moltis** — Only model registration updates
- **TinyClaw, ZeptoClaw** — Zero activity in 24h period

---

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

1. **Multi-tenant, Multi-agent deployments are becoming the norm**, not the exception. Demand for per-agent memory isolation, per-conversation model routing, user-specific vaults, and subagent delegation protocols signals that users are moving beyond single-agent chatbots to complex orchestration patterns.

2. **Cost management is the new frontier.** The obsession with prompt cache preservation (NanoBot #4867), batch API support (OpenClaw #9865), token compression (NanoBot #4588), and context compaction triggers (Hermes #513) shows that as agents scale, API costs dominate user concerns. Projects that solve "pay less for same intelligence" will win adoption.

3. **Security is finally being taken seriously across the ecosystem.** Credential leaks in terminal snapshots (Hermes #62336), default MQTT MITM vulnerabilities (PicoClaw #3246), zero-authorization restart commands (NanoBot #4776), and shared A2A bearer tokens (NullClaw #974) indicate a maturing threat model. Users are demanding secrets management, sandboxing, and access control.

4. **Channel parity is table stakes, not differentiation.** Every major project supports Telegram, WhatsApp, Slack—the gap is now in *quality* (typing presence, image handling, reconnection logic) rather than *presence*. PicoClaw's WhatsApp typing indicator (#3242) and OpenClaw's Telegram empty-send guard (#104022) exemplify this shift.

5. **CLI vs GUI tension is unresolved.** While WebUI improvements continue (syntax highlighting, landing pages, browser panels), CLI users remain underserved—from missing commands (NanoBot #4860) to silent failures (NanoClaw #2415). The most productive users still prefer terminal workflows.

6. **Windows remains the Achilles' heel.** CoPaw's sandbox pwsh explosion (#5951) and Hermes' NVIDIA driver crashes (#40077) highlight that cross-platform stability, particularly on Windows, lags far behind macOS/Linux. This is a significant barrier to mainstream consumer adoption.

### Value for AI Agent Developers

- **Choose OpenClaw** for maximum channel support and ecosystem compatibility—but plan for operational overhead managing memory and gateway stability.
- **Choose IronClaw** for production-grade performance and fast incident response—but prepare for breaking changes during Reborn migration.
- **Choose CoPaw** for Chinese-market enterprise deployments the best WeCom/DingTalk support—but verify Windows stability before production use.
- **Choose ZeroClaw** for cutting-edge plugin development and Rust performance—but accept a less polished user experience.
- **Choose NanoBot** for CLI-heavy workflows and edit reliability—but test Ollama caching before committing to local model workflows.
- **Choose PicoClaw** for edge/Raspberry Pi deployments—but beware the limited multi-agent capabilities.

**The takeaway for decision-makers**: No single project dominates all dimensions. The ecosystem is fragmenting by language (Rust vs Python vs Go), deployment target (desktop vs edge vs enterprise), and geography (China vs global). The most strategic investment is in **protocol-level interoperability** (A2A, MCP, OTel standards) rather than betting on a single platform.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-11

## 1. Today's Overview

NanoBot shows **high activity** with 42 PRs and 9 issues updated in the last 24 hours, including 17 merged/closed PRs and 2 closed issues. The project is in a **healthy development cycle**, with significant progress across memory consolidation, subagent delegation, WebUI polish, and CLI fixes. No new releases were published today, but multiple feature branches are converging toward a stable next version. The community is actively contributing fixes for performance regressions and security concerns, while maintainers are shepherding several long-running PRs through review.

---

## 2. Releases

**No new releases** today. The project remains at its previous version.

---

## 3. Project Progress

**Merged/Closed PRs (17 total)** — Key highlights:

| PR | Title | Summary |
|----|-------|---------|
| [#4877](https://github.com/HKUDS/nanobot/pull/4877) | feat(webui): highlight file previews and diffs | Adds Prism syntax highlighting to unified diffs and file previews with language inference from file paths |
| [#4876](https://github.com/HKUDS/nanobot/pull/4876) | feat(webui): guide queued prompt with second Enter | Lets a second Enter key guide the prompt queued during active response; safely disarms on chat changes |
| [#4832](https://github.com/HKUDS/nanobot/pull/4832) | fix(cli): handle CSI-u Shift+Enter instead of dumping raw escapes | Fixes terminal regression where Shift+Enter dumped raw escape sequences on certain terminals |
| [#4635](https://github.com/HKUDS/nanobot/pull/4635) | fix(tools): enforce exact edit_file line hints | Treats `line_hint` as exact consistency guard, rejects edits when no `old_text` match covers hinted line |
| [#4623](https://github.com/HKUDS/nanobot/pull/4623) | feat(subagent): allow spawn model override | Adds optional `model` parameter to `spawn` tool for subagent model override (closed/merged) |

**Notable closed issues:**
- [#4634](https://github.com/HKUDS/nanobot/issues/4634) — `edit_file` disambiguation fix went in with PR #4635
- [#4835](https://github.com/HKUDS/nanobot/issues/4835) — WebUI landing message routing bug fixed

---

## 4. Community Hot Topics

**Most active issues by activity:**
- [#4867](https://github.com/HKUDS/nanobot/issues/4867) — *Preserve exact prompt prefix to enable caching in Ollama* (3 comments, filed today) — User reports 60-second extra delay per turn with Ollama due to cache-miss; calls UX "totally unusable with 32GB VRAM"
- [#4253](https://github.com/HKUDS/nanobot/issues/4253) — *Support overriding model per conversation* (6 comments, oldest open enhancement) — Wants to switch between OpenRouter (fast) and local llama.cpp (private) based on task sensitivity
- [#4231](https://github.com/HKUDS/nanobot/issues/4231) — *Add model parameter to spawn tool for subagent override* (2 comments) — Already addressed by merged PR #4623
- [#4634](https://github.com/HKUDS/nanobot/issues/4634) — *edit_file wrong-occurrence failures* — Dominant failure mode in edit benchmarks; closed after PR #4635 merge

**Hot PRs:**
- [#4879](https://github.com/HKUDS/nanobot/pull/4879) — *Gate sustained-goal behind opt-in flag* (feature, P2) — Addresses user blocking during long-running tasks
- [#4844](https://github.com/HKUDS/nanobot/pull/4844) — *Require slash authorization for sustained goals* (P1) — Security hardening for goal commands
- [#4855](https://github.com/HKUDS/nanobot/pull/4855) — *Add guided setup flows for channels* — Productized onboarding with validation and official links

**Underlying needs:** Users are demanding (1) **performance optimization** for local models (Ollama caching, token compression), (2) **model flexibility** per-conversation and per-subagent, and (3) **better edit reliability** in file operations.

---

## 5. Bugs & Stability

**Critical severity:**
- [#4776](https://github.com/HKUDS/nanobot/issues/4776) — **Security: `/restart` command has zero authorization** — Any paired user can DoS the entire process; dispatched before session lock acquired. **No fix PR yet.**
- [#4860](https://github.com/HKUDS/nanobot/issues/4860) — **Stale bug: missing `onboard` and `webui` commands** — New install via `uv tool install` shows no such commands despite documentation. Unclear if installation regression or doc mismatch.

**High severity (fix PRs exist):**
- [#4862](https://github.com/HKUDS/nanobot/pull/4862) — **Fix exec session manager isolation** — Separates per-loop managers to prevent cross-contamination; in review
- [#4842](https://github.com/HKUDS/nanobot/pull/4842) — **Fix: catch CancelledError in MCP shutdown** — Prevents crash when browser-agent subprocess doesn't terminate within timeout; P1 priority
- [#4843](https://github.com/HKUDS/nanobot/pull/4843) — **Fix: defer stale stack cleanup during MCP reconnect** — Avoids gateway crash on reconnect; P1

**Medium severity:**
- [#4835](https://github.com/HKUDS/nanobot/issues/4835) — **WebUI message routing bug** (closed, fixed)
- [#4872](https://github.com/HKUDS/nanobot/issues/4872) — **Dream creates empty git commits** — Each run creates a commit even with no changes; PR #4873 addresses this

---

## 6. Feature Requests & Roadmap Signals

**Likely in next release:**
- **Per-conversation model override** ([#4253](https://github.com/HKUDS/nanobot/issues/4253)) — High user demand, related PRs already merged
- **Subagent model override** ([#4231](https://github.com/HKUDS/nanobot/issues/4231)) — Already merged via PR #4623
- **Cron job model presets** ([#4378](https://github.com/HKUDS/nanobot/issues/4378)) — PR #4622 merged
- **Ollama caching support** ([#4867](https://github.com/HKUDS/nanobot/issues/4867)) — High pain point, likely prioritized

**Speculative next features:**
- **A2A peer delegation** (PR [#4571](https://github.com/HKUDS/nanobot/pull/4571)) — Native agent-to-agent protocol with registry and cross-delegation depth guard; still open with conflicts
- **Auto-discovery for hooks** (PR [#4878](https://github.com/HKUDS/nanobot/pull/4878)) — Mirroring existing channel/tool patterns; simplifies adding custom hooks
- **Aggregated subagent results** (PR [#4624](https://github.com/HKUDS/nanobot/pull/4624)) — Buffer completed subagent results per session, publish combined message

---

## 7. User Feedback Summary

**Pain points:**
- **Ollama performance**: [#4867](https://github.com/HKUDS/nanobot/issues/4867) — "60 seconds added to every single turn" with local models, deemed "totally unusable" even with 32GB VRAM. Underlying cause: prompt prefix not preserved for cache hits.
- **Installation confusion**: [#4860](https://github.com/HKUDS/nanobot/issues/4860) — New user reports `nanobot onboard` and `nanobot webui` commands don't exist despite website documentation.
- **Security concerns**: [#4776](https://github.com/HKUDS/nanobot/issues/4776) — "Zero authorization" on `/restart` command allows any paired user to DoS entire process.
- **Model switching friction**: [#4253](https://github.com/HKUDS/nanobot/issues/4253) — Wants to alternate between local/cloud models based on task privacy/speed needs; currently only global setting.

**Positive signals:**
- Active community contributions — 17 merged/closed PRs in 24 hours
- Contributors submitting both bug fixes and features (alekwo, chengyongru, yu-xin-c, KANG99)

---

## 8. Backlog Watch

**Issues needing maintainer attention:**
- [#4776](https://github.com/HKUDS/nanobot/issues/4776) — **Security: /restart authorization** (created Jul 6, 5 days ago) — Critical security issue with **no fix PR** or maintainer response; only 1 comment
- [#4860](https://github.com/HKUDS/nanobot/issues/4860) — **Missing commands after install** (created Jul 9, 2 days ago) — User blocked from basic usage; needs triage to determine if installation regression
- [#4253](https://github.com/HKUDS/nanobot/issues/4253) — **Per-conversation model override** (created Jun 8, 33 days ago) — Oldest open enhancement; high community engagement (6 comments) but no clear assignment

**Stale PRs needing review (open > 30 days):**
- [#4205](https://github.com/HKUDS/nanobot/pull/4205) — *Mailbox-backed subagent results* (Jun 5, 36 days) — Marked as conflict; foundational change affecting subagent communication
- [#4571](https://github.com/HKUDS/nanobot/pull/4571) — *A2A peer delegation* (Jun 28, 13 days) — Large feature with conflicts; has merge conflicts unresolved
- [#4588](https://github.com/HKUDS/nanobot/pull/4588) — *Token compression for tool outputs* (Jun 29, 12 days) — Performance optimization marked as conflict; addresses the Ollama cache issue indirectly

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the Hermes Agent project digest for July 11, 2026.

---

## Hermes Agent Project Digest — 2026-07-11

### 1. Today's Overview
The Hermes Agent project is in a state of **high activity**, with 50 issues and 50 PRs updated in the last 24 hours. Activity is heavily weighted towards **bug fixing and stability**, particularly around security hardening (credential leaks), terminal and gateway reliability, and session state corruption. Several high-priority PRs are already open to address today's most critical bugs, indicating a responsive maintainer team. While no new releases were cut today, the volume of incoming patches suggests a release may be imminent to address a backlog of regressions.

### 2. Releases
**No new releases** were published in the last 24 hours. The latest stable version remains v0.18.1 (noted in recent issues).

### 3. Project Progress
Two PRs were merged or closed today:
- **PR #62200** ([closed](https://github.com/NousResearch/hermes-agent/pull/62200)): `fix(gateway): notify home channels after supervisor restart` — Ensures that when the gateway is restarted by a system supervisor, users receive a "back online" message, preventing the gateway from appearing dead.
- **PR #55677** ([closed](https://github.com/NousResearch/hermes-agent/issues/55677)): Bug regarding context compaction failing with a Jinja template error has been resolved, restoring session continuity.

### 4. Community Hot Topics
The following issues and PRs generated the most community engagement (comments + reactions):

- **#513** ([Feature: Two-Phase Context Management](https://github.com/NousResearch/hermes-agent/issues/513)) — 4 comments, 0 reactions. A high-profile feature request from a core contributor (teknium1) asking for a cheaper, LLM-free pruning phase before full compaction. **PR #62389** was opened today specifically implementing this, validating the community’s influence on the roadmap.
- **#32107** ([Multiple users per agent](https://github.com/NousResearch/hermes-agent/issues/32107)) — 1 comment, 7 👍. This is the most upvoted open feature request, reflecting strong demand from startups and small teams for multi-tenant deployments.
- **#36656** ([Volatile skills](https://github.com/NousResearch/hermes-agent/issues/36656)) — 2 comments, 2 👍. Users want skills to load content for one turn only to avoid bloating context windows.

**Underlying Need:** The community is demanding **lower cost and better context management** (two-phase pruning, volatile skills) and **multi-user/multi-tenant support** for production use cases.

### 5. Bugs & Stability
Several critical bugs were reported today, many with fix PRs already submitted:

| Severity | Issue | Summary | Fix PR Exists? |
|----------|-------|---------|----------------|
| **High** | #62170 | [TUI shows stale session content after switching sessions](https://github.com/NousResearch/hermes-agent/issues/62170) | No |
| **High** | #62383 | [Weixin iLink cron delivery fails with stale context_token](https://github.com/NousResearch/hermes-agent/issues/62383) | Yes ([#62386](https://github.com/NousResearch/hermes-agent/pull/62386)) |
| **High** | #62336 | [Terminal snapshots capture credential env vars to disk](https://github.com/NousResearch/hermes-agent/issues/62336) — Security vulnerability | Yes ([#62346](https://github.com/NousResearch/hermes-agent/pull/62346)) |
| **Medium** | #62324 | [Desktop app loses execute bit on node-pty's spawn-helper](https://github.com/NousResearch/hermes-agent/issues/62324) — Terminal fails to start | No |
| **Medium** | #62341 | [Cron UI shows 'No runs yet' for no_agent jobs](https://github.com/NousResearch/hermes-agent/issues/62341) | No |
| **Low** | #62388 | [Verifier temp file cleanup triggers dangerous-command detector](https://github.com/NousResearch/hermes-agent/issues/62388) | Yes ([#62379](https://github.com/NousResearch/hermes-agent/pull/62379)) |

**Key observation:** Security is a major theme today, with two open PRs (#61352, #62346) directly addressing credential leaks from terminal snapshots and environment dumps.

### 6. Feature Requests & Roadmap Signals
The following features were requested today, indicating the likely direction of the next release:

- **Per-tab browser concurrency** (#62339, #62338): Enables multiple agents to operate on different tabs within the same browser profile without collisions. Likely for v0.19.
- **Prune-first compression** (#513 → PR #62389): Already implemented today; will likely be a configurable (opt-in) feature in the next release.
- **Per-subagent model overrides** (#58731): Users want to route different delegation roles to different LLM models.
- **Bounded resumable attachment uploads** (#62375 → PR #62382): Fixes desktop crashes on large file uploads.
- **Volatile skills** (#36656): Likely investigation phase; not yet implemented.
- **Multi-user per agent** (#32107): High community demand but no PR yet; likely a Phase 2 roadmap item.

**Prediction:** The next minor release (v0.19) will likely include the prune-first compression, browser tab routing, and a collection of security hardening patches.

### 7. User Feedback Summary
**Real pain points expressed today:**
- "Desktop feels broken when remote profiles are unreachable" — Users report 45-second stalls in session loading.
- "UI stays stuck in busy state after task completes" — Especially when the final assistant response is empty.
- "Security: my API keys are being written to disk in terminal snapshots" — Multiple users flagged this.
- "Cannot set email subject for outbound messages" — Hardcoded subjects frustrate automation use cases.
- "Non-git project folders show duplicate lanes" — A regression from the recent Projects Paradigm overhaul.

**Overall sentiment:** Users are satisfied with the project's rapid iteration but are frustrated by regressions in UI/UX (stale sessions, long stalls) and are increasingly vocal about security gaps.

### 8. Backlog Watch
The following long-unanswered issues and PRs need maintainer attention:

- **#10835** ([Closed] Expose memory via MCP server): Closed but with 5 comments — the community is eager for a solution to share persistent memory between agents via MCP. The feature remains unimplemented in the MCP server.
- **#3630** ([feat(secrets): Phase 4 — Advanced Security](https://github.com/NousResearch/hermes-agent/issues/3630)): Open since March 28, 2026 (over 3 months). Depends on Phase 3 (#3629) which also appears stalled. Users awaiting ephemeral secrets and external vault integration.
- **#28156** ([Bedrock+Claude wizard accepts Bearer-only setup, runtime fails](https://github.com/NousResearch/hermes-agent/issues/28156)): Open for nearly 2 months with 5 comments and no assignee. A significant usability blocker for AWS Bedrock users.
- **#40077** ([Desktop app crashes on NVIDIA 580+ drivers](https://github.com/NousResearch/hermes-agent/issues/40077)): Open for over a month on Ubuntu 24.04. A major stability issue for Linux gamers/researchers with modern GPUs.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-11

## 1. Today's Overview
Project activity is **moderate-to-high**, with 18 pull requests and 3 issues updated in the last 24 hours. A security-focused Go toolchain bump (1.25.11 → 1.25.12) and three targeted hardening PRs from `corporatepiyush` signal a near-term focus on reliability and vulnerability remediation. Two new feature branches by `greencabe`—OAuth concurrency fixes and WhatsApp typing presence—address well-documented community pain points. While no releases shipped today, the volume of open PRs (17) suggests a significant batch of changes is accumulating toward a future v0.3.x release.

## 2. Releases
**None.** No new releases were published today. The last tagged version remains v0.3.1 (implied by Czech locale PR #3247 referencing missing v0.3.1 keys).

## 3. Project Progress
**1 PR merged/closed today:**
- [#3179 [CLOSED] fix(whatsapp): reconnect after websocket drops](https://github.com/sipeed/picoclaw/pull/3179) — *Merged.* Implements async message dispatch, read deadlines, and ping/pong handlers for WhatsApp bridge stability. Directly addresses the stale WhatsApp timeout bug (#3178).

**Key open PRs advancing features:**
- [#3242 [OPEN] feat(whatsapp): add native typing presence](https://github.com/sipeed/picoclaw/pull/3242) — Implements `channels.TypingCapable` for WhatsApp, sending composing/paused signals.
- [#3241 [OPEN] fix(auth): make OAuth refresh provider-correct and concurrency-safe](https://github.com/sipeed/picoclaw/pull/3241) — JSON body for OpenAI, form for others; 30s HTTP timeout; scope omission during refresh.
- [#3248 [OPEN] fix: bump Go to 1.25.12 to remediate stdlib vulnerabilities](https://github.com/sipeed/picoclaw/pull/3248) — Fixes `crypto/tls` and `os` CVEs reported by `govulncheck`.
- [#3246 [OPEN] fix: security and robustness hardening (MQTT TLS, OAuth timeouts, bounded search reads)](https://github.com/sipeed/picoclaw/pull/3246) — Three hardening fixes: enforce MQTT TLS verification, add OAuth HTTP timeouts, limit database search reads.

## 4. Community Hot Topics

### Most Active Discussion
- **#3178 [CLOSED] WhatsApp Websocket Timeout** — *2 comments.* The stale bug that spurred the merged fix PR #3179. Community reported unhandled read failures causing silent disconnection. Now resolved.

### Feature PRs with Cross-Interest
- **#2937 [OPEN] Feat/agent collaboration** — *Author: afjcjsbx.* Long-running (since May) ambitious PR introducing an inter-agent collaboration bus with mailboxes, session isolation, and permission-aware dispatch. No recent comments but updated today, indicating ongoing maintainer activity.
- **#3240 [OPEN] Add typing presence to WhatsApp native replies** — *Author: greencabe.* Zero comments but directly solves a user experience pain point: no feedback during multi-second reply generation.
- **#3239 [OPEN] OAuth refresh requests use incompatible provider semantics and can race** — *Author: greencabe.* Highlights a subtle concurrency bug where simultaneous OAuth checks can corrupt tokens. Companion fix PR #3241 exists.

**Analysis:** The WhatsApp and OAuth threads reveal a community that relies on PicoClaw for production multi-channel deployments. The agent collaboration PR (#2937) signals interest in multi-agent architectures, likely for enterprise or complex automation workflows.

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Exists? |
|----------|----------|-------------|-------------|
| **High** | [#3248](https://github.com/sipeed/picoclaw/pull/3248) | Go stdlib vulnerabilities (`crypto/tls` + `os`) in CI | ✅ PR #3248 open |
| **High** | [#3239](https://github.com/sipeed/picoclaw/issues/3239) | OAuth refresh race condition — can corrupt tokens across providers | ✅ PR #3241 open |
| **High** | [#3246](https://github.com/sipeed/picoclaw/pull/3246) | MQTT broker TLS verification disabled by default (`InsecureSkipVerify: true`) | ✅ Same PR |
| **Medium** | [#3240](https://github.com/sipeed/picoclaw/issues/3240) | No typing presence in WhatsApp — users see silence during processing | ✅ PR #3242 open |
| **Low** | [#3178](https://github.com/sipeed/picoclaw/issues/3178) | WhatsApp websocket timeout (stale, now closed) | ✅ Merged in #3179 |

**Note:** The MQTT TLS issue (#3246) is particularly concerning—every broker connection was vulnerable to MITM attacks by default. The fix enforces certificate verification.

## 6. Feature Requests & Roadmap Signals

### Likely for Next Release (v0.3.2 or v0.4.0)
- **WhatsApp typing presence** — PR #3242 is clean, small, and addresses a clear UX gap. High merge probability.
- **OAuth refresh fix** — PR #3241 is a correctness fix, likely to be prioritized before any major release.
- **Go toolchain bump** — PR #3248 is a straightforward security patch.
- **Czech locale completion** — PR #3247 adds missing keys for v0.3.1, trivial merge.

### Longer-Term Signals
- **Agent collaboration bus** — PR #2937 is still open after 7 weeks. If merged, this would be a major architectural addition enabling multi-agent workflows.
- **Simplex channel** — PR #3193 adds a new communication channel type. Indicates interest in federated/private messaging beyond mainstream platforms.
- **9router gateway support + ARMv7 builds** — PR #3205 addresses Raspberry Pi users, suggesting growing interest in edge deployment.
- **Configurable fallback chain** — PR #3200 would let users define model fallback order in the web UI, important for reliability in production.

## 7. User Feedback Summary

**Pain Points (from Issues & PR descriptions):**
- **Whatsapp UX silence:** "Users see no feedback between sending a message and receiving the bot reply, even when processing takes several seconds" (#3240).
- **OAuth provider incompatibility:** "OpenAI OAuth refresh expects a JSON request body rather than the generic form payload" (#3239), causing hard-to-debug authentication failures.
- **Raspberry Pi deployment barriers:** No ARM build target for launcher, and 9router's non-standard OpenAI-compatible responses break parsing (#3205).
- **Missing locale entries:** Czech users hit missing translation keys after v0.3.1 upgrade (#3247).

**Satisfaction Indicators:**
- WhatsApp reconnect fix (#3179) was merged, addressing a recurring community issue.
- Three allocation-optimization PRs from `corporatepiyush` (#3243, #3244, #3245) suggest active community contribution focused on performance, a sign of maturing maturity.

## 8. Backlog Watch

### Stale PRs Needing Maintainer Attention
| PR | Age | Issue |
|----|-----|-------|
| [#1951](https://github.com/sipeed/picoclaw/pull/1951) — Move installation scripts | 15 weeks | Open since March, no recent activity. Blocks documentation consolidation. |
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) — Agent collaboration | 7 weeks | High-impact feature but stalled. No comments from maintainers in the review. |
| [#3205](https://github.com/sipeed/picoclaw/pull/3205) — 9router + ARMv7 build | 9 days | Two concrete fixes for edge deployment; no maintainer response yet. |
| [#3211](https://github.com/sipeed/picoclaw/pull/3211) — ESLint bump | 9 days | Automated dependency bump, stale. |

### Unanswered Issues
- **#3240** and **#3239** are zero-comment issues filed yesterday; maintainers have not yet acknowledged them, though fix PRs exist for both.

**Recommendation:** PR #2937 (agent collaboration) is the most strategically important item in the backlog. If the maintainers intend to support multi-agent architectures, a review decision—merge, request changes, or close—would reduce community uncertainty.

---

*Digest generated 2026-07-11 from PicoClaw GitHub activity (sipeed/picoclaw).*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the project digest for **NanoClaw**, generated from GitHub data for **2026-07-11**.

---

## NanoClaw Project Digest — 2026-07-11

### 1. Today's Overview
The project is experiencing a high-intensity development cycle, with **25 Pull Requests** updated in the last 24 hours and a significant refactoring push across channels, memory, and delivery systems. While there are no new releases today, the **25 PRs** (10 merged/closed) indicate a major sprint by the core team, particularly around unifying channel configurations and fixing systemic timestamp bugs. However, the **3 active issues** (including a silent skill-update bug raised yesterday) suggest that the rapid pace may be introducing edge cases that require urgent attention. Overall, the project health is **high**, with strong maintainer response and clear architectural direction.

### 2. Releases
**None.** No new versions were published today. The absence of a release despite the high PR volume suggests the team is collecting several features and fixes into a pending milestone.

### 3. Project Progress
**Merged/Closed PRs Today (10 items):**
- **Channel Defaults Refactor (Core):** PRs #3010, #3011, and #3009 (by gavrielc) introduce a major architecture change where adapters declare their own defaults (engage mode, threading, sender policy) instead of relying on core heuristics. This unifies WhatsApp, Slack, and iMessage formatting logic.
- **Timestamp Consistency (ISO Storage / Local Display):** PRs #3006, #3005, and #3007 (by gavrielc) enforce a strict convention: storage in ISO-Z UTC, display in local time. This fixes hours-off timestamps in task rows and chat UI.
- **Memory System (Provider-Agnostic):** PRs #3012 and #3013 (by amit-shafnir) add a persistent memory tree that loads on session start for both NanoClaw and Codex providers.
- **Documentation & Tooling:** PR #3003 (Shufel83) docs an unbounded-wait safety rule for the agent-browser skill; PR #3004 (gavrielc) adds a `context-preview.ts` tool to simulate exact agent scenarios.
- **Fix for WhatsApp SKDM:** PR #3008 (gfnord) removes a cachedGroupMetadata parameter that broke encryption-key distribution in LID-mode groups.
- **Codex Footer Bug:** PR #3000 (tier2tech-tian) fixes a display issue where token counts in the footer used cumulative values instead of per-turn values.

### 4. Community Hot Topics
The most active items are dominated by **core-team architectural PRs**, indicating that the community is currently more focused on internal quality than external requests.

- **#3014** – `fix(agent-runner): bound hasIdenticalSend to the turn in flight` (vishnujayvel) – A critical fix for agent-runner deduplication logic. Though it has no comments yet, it touches a high-risk area of message delivery.
- **#2999** – `feat(channels): unify iMessage` (underthestars-zhy) – Unifies local and hosted iMessage backends into a single skill. This is a user-facing simplification that reduces installation friction.
- **#2998 & #2996** – Two fix PRs by glifocat: one for rendering full MCP server payloads on approval cards, another for routing missing-adapter messages into the retry path. Both indicate deep work on message reliability and UI transparency.

**Underlying Need:** The cluster of issues #2415 and #2389 (both now closed) reveal that the CLI (`bin/ncl`) has been dropping rows in the database (no `container_configs`, no `agent_destinations`), causing "silent failures" for users who create groups via the command line. This suggests a need for **CLI-to-DB integration tests** before the next release.

### 5. Bugs & Stability
**Bugs Reported Today (High Severity):**
1. **#3001 [OPEN] – Stale skill copies block symlinks** (glifocat)
   - **Severity:** High
   - **Impact:** Agent groups created before the shared-skills refactor (Apr 21) never receive updates to container skills. The issue is *silent* (no logs). This is a regression for users who upgraded from a pre-refactor install.
   - **Fix Status:** PR #3002 (open) by glifocat adds a warning when a real file blocks the symlink, but does not yet auto-heal the stale copies.

2. **#2415 [CLOSED] – `ncl groups create` skips `container_configs` row**
   - **Severity:** Medium
   - **Resolution:** Closed. Likely fixed by a prior PR (not listed today). The fix prevents the "Container config not found" error on first spawn.

3. **#2389 [CLOSED] – `bin/ncl` wirings don't create destinations**
   - **Severity:** Medium
   - **Resolution:** Closed. This bug caused agents to "silently" drop replies. The root cause (missing `agent_destinations` rows) is now fixed.

**Regressions:** Issue #3001 is the most concerning regression—it is a **stale-data** bug with no user-facing diagnostics. Users may believe they are running up-to-date skills when they are not.

### 6. Feature Requests & Roadmap Signals
The following features from today's PRs are likely candidates for the next release (v0.x):
- **Provider-Agnostic Memory** (#3012, #3013) – A memory tree shared across agents, loading on session start, with explicit exclusion of resume. This is a foundational feature for persistent context.
- **Unified Channels Branch** (#2999, #3009, #3010, #3011) – iMessage unification, channel-declared defaults, and removal of trunk-based formatting skills. This reduces duplication across adapters.
- **Tasks: One-Door Delivery** (#2988) – Forces all task output to go through `send_message` with an explicit destination. This is part 3/5 of the scheduled-tasks train, indicating a major feature is being built.

**Prediction:** The next release will likely be a **v0.x channel/memory refactor release** that bundles the unify-iMessage, adapter defaults, and persistent memory features. It will also include the timestamp consistency fixes.

### 7. User Feedback Summary
- **Pain Points (Real User Reports):**
  - CLI automation is fragile: creating groups and wirings via `bin/ncl` has been error-prone, leading to silent message drops (#2415, #2389).
  - Upgrades are not transparent: existing groups silently keep stale skills (#3001) until the user manually deletes them.
- **Satisfaction Signals:**
  - The community is actively submitting skill PRs (Telegram rich rendering #2877, iMessage unify #2999), indicating a motivated developer base.
  - The core team is responsive: the high volume of fix PRs (glifocat, gavrielc, vishnujayvel) suggests maintainers are actively listening to bug reports.

### 8. Backlog Watch
Items that need maintainer attention:
- **#3001 [OPEN] – Stale skill copies** – Priority: **High**. This is a significant data-quality bug that affects a large number of installations (anyone who created a group before April 21). The warning PR #3002 is a step, but an auto-migration script is likely needed.
- **#2877 [OPEN] – Telegram rich rendering via Bot API 10.1** – This PR has been open since June 28 and has 2 approvals. It appears ready to merge. The delay may be due to the channel defaults refactor train (#3010), but it should be re-reviewed after that refactor.
- **#2966 [OPEN] – Log when errored batch is acked** – A monitoring improvement for the agent-runner. Starved of comments; maintainers should triage.

**Attention Required:** The lack of a release despite 10 merged PRs suggests the team may be holding the release for #2988 (Tasks: one-door delivery) to complete the 5-part train. User-facing documentation for the CLI fixes (#2415, #2389) is also pending.

---

*Digest generated via automated analysis of public GitHub data for nanocoai/nanoclaw on 2026-07-11.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for July 11, 2026.

---

# NullClaw Project Digest: 2026-07-11

## Today's Overview
The NullClaw project shows a quiet development phase with no new releases or merged pull requests in the last 24 hours. However, two open issues have seen recent activity, signaling potential stability and security concerns that warrant attention. One long-standing bug related to Telegram channel idle behavior remains unresolved after 11 days, while a newly reported, high-severity security flaw in the A2A (Agent-to-Agent) route was opened yesterday and has no maintainer response yet. Overall activity is low, but the backlog of critical issues suggests the project may need a maintenance cycle to address technical debt and security vulnerabilities.

## Releases
None. There have been no new releases recorded in the last 24 hours.

## Project Progress
No pull requests were merged or closed today. No new PRs were opened. Feature advancement and bug fixes are currently stalled.

## Community Hot Topics
Two issues are driving community discussion:

- **Issue #972 (Open, 2 comments): [bug] telegram channel stop respond after some idle time**  
  *Author: i11010520* | [GitHub Link](https://github.com/nullclaw/nullclaw/issue/972)  
  The reporter describes that the Telegram channel dies after overnight idle periods, while the backend (`nullclaw agent -m "ping"`) continues to work. This pattern suggests a connection or session timeout issue specific to the Telegram channel adapter. The lack of resolution after 11 days may indicate a low priority or a complex root cause.

- **Issue #974 (Open, 0 comments, just reported): [BUG] NullClaw shared bearer A2A route allows cross-caller task and context reuse**  
  *Author: N0zoM1z0* | [GitHub Link](https://github.com/nullclaw/nullclaw/issue/974)  
  This is a newly opened security report describing a critical vulnerability: shared bearer tokens allow one caller (Bob) to read another caller’s (Alice’s) task history and reuse their context, potentially leaking prior downstream results. The issue has no replies yet but represents a significant trust boundary failure in the A2A system.

## Bugs & Stability
**High Severity**
- **Issue #974** – *Cross-caller task and context reuse via shared bearer token* (Severity: Critical). This is a security bug affecting the A2A route. No fix PR exists yet. The architecture does not isolate sessions after bearer validation, allowing vertical privilege escalation between callers sharing the same token.

**Medium Severity**
- **Issue #972** – *Telegram channel stops responding after idle* (Severity: Medium). A recurring stability issue for Telegram users. Likely caused by session expiry or websocket reconnection logic. No fix PR exists.

## Feature Requests & Roadmap Signals
No explicit feature requests were raised in the last 24 hours. However, the underlying need from **Issue #972** (Telegram reconnection) implies a demand for more robust **channel adapter resilience features**, such as automatic reconnection or heartbeat pings. This could appear as a future update to the Telegram integration layer.

## User Feedback Summary
- **Pain Point (Idle Disconnects):** User i11010520 reports frustration with Telegram channels becoming unresponsive after idle periods, while the core agent remains healthy. The desire is for the channel to remain available without manual intervention.
- **Pain Point (Security/Isolation):** User N0zoM1z0 demonstrates a clear dissatisfaction with the shared-token model for multi-user A2A scenarios. The current design violates a reasonable expectation of task and context isolation, which is a trust-breaking issue for deployments with multiple users or tenants.

## Backlog Watch
The following issue requires immediate maintainer attention:

- **Issue #974 – Cross-caller A2A task reuse (Open, 1 day old)**  
  *[GitHub Link](https://github.com/nullclaw/nullclaw/issue/974)*  
  This is a high-severity security issue with zero maintainer response. Without a design fix (e.g., binding tasks to caller identity or adding per-session tokens), any multi-user deployment sharing a bearer token is vulnerable to data leakage.

- **Issue #972 – Telegram idle disconnection (Open, 11 days old)**  
  *[GitHub Link](https://github.com/nullclaw/nullclaw/issue/972)*  
  While not as urgent as the security bug, this issue has been unanswered for over a week and affects the reliability of a primary communication channel. It may be blocking Telegram users from adopting NullClaw in long-running scenarios.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-11

## Today's Overview

High development velocity continues, with 50 PRs and 36 Issues updated in the last 24 hours. The project merged 16 pull requests and closed 8 issues, demonstrating strong momentum. A major boot crash-loop (#5966) was identified and fixed within hours (#5967), showcasing responsive incident handling. The core team is executing on multiple parallel workstreams: loop resilience, MCP registration infrastructure, error classification, and the ongoing Reborn migration. Notably, a *bug_bash* session appears active, surfacing 15+ P2/P3 UI and integration bugs that are driving targeted fixes.

## Releases

No new releases were published today.

## Project Progress

**Merged/Closed PRs (16 total):**

- **#5967** — `fix(reborn): skip invalid available-extension manifests at boot catalog load instead of crash-looping` — Critical fix for #5966 (Railway deployment crash-loop)
- **#5960** — `perf(agent-loop): raise default loop iteration ceiling 32 → 256` — Prevents premature fail-closure on tool-heavy turns
- **#5954** — `feat(turns): RunFailureReason funnel foundation (phase 1 of 4)` — Adds run-failure classification infrastructure (zero behavior change)
- **#5950** — `feat(reborn): expose production LocalDev capability-port assembly to tests (seam PR-A)` — Enables integration harness to reuse production port stack
- **#5916** — `feat(reborn): add per-user MCP registration store` (closed, superseded by #5970 with same feature rebuilt on latest main)
- **#5895** — `Fix compaction failures after tool results` — Closes #5838, makes compaction errors recoverable instead of terminal
- **#5844** — `feat(reborn): tell the agent to compute with tools, not in its head` — Updated default system prompt
- **#5817** — `fix(reborn): don't treat decimal numbers as requested capability ids` — Fixes capability guard false positives
- **#5499** — `feat(reborn): WASM tool install from zip + env-provisioned tenant-shared credentials` — Foundation for configurable tools

**Open High-Impact PRs:**
- **#5970** — Per-user MCP registration store (rebuilt, fold-in of #5916 feedback) — [link](https://github.com/nearai/ironclaw/pull/5970)
- **#5959** — Reborn loop resilience: deep availability retries, iteration backstop, model-visible tool-failure reasons — [link](https://github.com/nearai/ironclaw/pull/5959)
- **#5965** — Recoverable errors reach the model, never kill the run — [link](https://github.com/nearai/ironclaw/pull/5965)
- **#5971** — Fix: carry storage error cause when compaction summary persistence fails — [link](https://github.com/nearai/ironclaw/pull/5971)

## Community Hot Topics

**#5948** (5 comments) — Assistant incorrectly reports GitHub extension as activated when only installed — [link](https://github.com/nearai/ironclaw/issues/5948)  
*Underlying need: Trustworthy extension status reporting; users need accurate "is this ready to use?" feedback without false positives.*

**#5747** (3 comments, CLOSED) — No way to unpair Slack on the built-in host-beta mount — [link](https://github.com/nearai/ironclaw/issues/5747)  
*Underlying need: User agency over connected accounts. Once paired, users had no escape hatch — closed, suggesting a fix landed.*

**#5891** (2 comments) — "Last completed" displays active run timestamp instead of last finished execution — [link](https://github.com/nearai/ironclaw/issues/5891)  
*Underlying need: Accurate run history; users need reliable status indicators for scheduled/background work.*

**#5741** (2 comments) — `builtin.http.save` can fail with OutputTooLarge instead of saving large responses — [link](https://github.com/nearai/ironclaw/issues/5741)  
*Underlying need: Usable web content capture; users expect the "save" tool to handle large pages gracefully.*

**#5598** (undefined comments, but technically active) — Release PR with breaking changes in `ironclaw_common` and `ironclaw_skills` — [link](https://github.com/nearai/ironclaw/pull/5598)  
*Underlying need: Community consumers need stable APIs; this release signals pending breaking changes.*

## Bugs & Stability

### Critical (P0)
- **#5966** (CLOSED) — Boot crash-loop after #5499: stale first-party manifest on persistent volume trips InstalledLocal trust gate — *Fix landed in #5967. Railway deployments were crash-looping at startup, now resolved.*

### High (P1)
- **#5943** — Slack DM action posts to current channel instead of user's direct messages — *Users ask for DMs, get public channel spam. No fix PR yet.* — [link](https://github.com/nearai/ironclaw/issues/5943)

### Moderate (P2)
- **#5836** — Routine fails on every scheduled run with "No thread attached" — *Systemic: 0% success rate on scheduled routines.* — [link](https://github.com/nearai/ironclaw/issues/5836)
- **#5834** — Slack disconnect request is incorrectly rejected by agent — *Agent refuses to disconnect, providing unrelated responses.* — [link](https://github.com/nearai/ironclaw/issues/5834)
- **#5945** — Run fails with generic "model provider was unavailable" after long multi-tool execution — *34-tool runs failing at finish line.* — [link](https://github.com/nearai/ironclaw/issues/5945)
- **#5946** — Assistant mutates Google Sheet before discovering requested trigger is unavailable — *Destructive actions taken before permission/feasibility check.* — [link](https://github.com/nearai/ironclaw/issues/5946)
- **#5944** — Slack DM delivery silently fails but run reports success — *Green checkmark on undelivered messages = trust erosion.* — [link](https://github.com/nearai/ironclaw/issues/5944)
- **#5885** — Approval notification opens action without showing the approval message — *Cannot approve/deny actions.* — [link](https://github.com/nearai/ironclaw/issues/5885)
- **#5955** — Multistep workflow with sub-agents/missions fails — *Missions hit tool-call limit or stop progressing.* — [link](https://github.com/nearai/ironclaw/issues/5955)

### Low (P3)
- **#5948**, **#5891**, **#5889**, **#5947**, **#5835** — UI bugs: false extension status, stale timestamps, non-functional buttons, missing thread list refresh, misplaced "Jump to latest."

### Related Fix PRs
- **#5967** fixes crash-loop (#5966)
- **#5960** raises iteration ceiling to mitigate #5945-style premature failures
- **#5895** (#5838) fixes compaction failures after tool results
- **#5971** fixes lost storage error causes in compaction
- **#5965** makes tool/model failures recoverable (targeting #5945 pattern)

## Feature Requests & Roadmap Signals

**High-probability for next release:**
- **Per-user MCP registration store** (#5970) — Foundation for MCP integration stack; T1 of a multi-phase feature. Likely to land next.
- **RunFailureReason classification** (#5954, phase 1) — Additive infrastructure; no behavior change yet but sets up future error diagnostics.
- **Reborn loop resilience** (#5959) — Deep availability retries, model-visible tool-failure reasons. Direct SWE-bench performance gap response.
- **Queued-message steering** (#5963) + **Budget approval gate** (#5964) — Two of three splits from the large #5279 feature. User-facing: commands queued during busy runs become steering input; budget approval becomes a blocked-resource gate.

**Lower probability / speculative:**
- **Retire v1 runtime** (#5935) — Removing legacy `src/` code; depends on Reborn being fully stable as default.
- **Unified Reborn dropdown styling** (#5938) — UI polish, likely deprioritized behind functional fixes.
- **Admin-installed and private skills** (#5780) — Still open, large PR, no recent merge.

## User Feedback Summary

**Pain points (from bug_bash issues):**
1. **False success signals** — Runs report success but DMs don't arrive (#5944), or error banners persist after successful retries (#5879). Erodes trust in the system.
2. **Slack integration confusion** — Users ask for Slack DMs and get channel posts (#5943), cannot disconnect Slack through the agent (#5834), and have no unpair mechanism (#5747, now closed).
3. **Long-running workflow fragility** — Multi-tool runs fail at the finish line with generic errors (#5945), sub-agent workflows hit tool-call limits (#5955), and compaction errors kill successful runs (#5838, now fixed).
4. **Scheduled routine unreliability** — Routines failing with "No thread attached" (0% success rate, #5836) is a serious reliability blocker for automation use cases.
5. **Destructive pre-check order** — Assistant modifies Google Sheets before verifying trigger availability (#5946) — users lose work due to premature tool execution.
6. **Surfaced SWE-bench gap** — Comparison showing Reborn at 30% vs Hermes 65% on same model attributed to runtime discarding work, not model quality. Active PRs (#5959, #5965) directly targeting this gap.

**Satisfaction signals:**
- Fast incident response — crash-loop (#5966) identified and fixed within hours
- Active investment in error recoverability and resilience (3+ PRs)
- User-contributed issues being taken seriously (36 issues, team responding same-day)

## Backlog Watch

- **#5598** — Release PR (open since July 3) with breaking changes in `ironclaw_common` and `ironclaw_skills`. No official release yet. Consumers may be blocked on this. — [link](https://github.com/nearai/ironclaw/pull/5598)
- **#5780** — Admin-installed and private skills (large PR, open since July 7). No update in 24h. May need review bandwidth. — [link](https://github.com/nearai/ironclaw/pull/5780)
- **#5640** — Harness gap: no RecordingSecurityAuditSink double (open since July 4, 2 comments). Test infrastructure gap, no fix PR identified. — [link](https://github.com/nearai/ironclaw/issues/5640)
- **#5935** — Retire v1 runtime (opened today, no engagement yet). Significant architectural decision that will need maintainer attention. — [link](https://github.com/nearai/ironclaw/issues/5935)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for **2026-07-11**, based on the provided GitHub data.

---

### LobsterAI Project Digest – 2026-07-11

---

### 1. Today's Overview

The LobsterAI project is experiencing **very high activity**, driven by a major release cycle. 17 Pull Requests (10 merged/closed) and 1 new release were processed in the last 24 hours. The core team is focused on stabilizing the "Cowork" feature, fixing multi-agent configuration bugs, and resolving infrastructure issues related to scheduled tasks and message routing. While community issue activity is low, the volume of internal fixes suggests the project is prioritizing reliability and user experience ahead of new features.

### 2. Releases

- **LobsterAI 2026.7.10**
    - **[What's Changed]**
        - **Agents:** Support for "delegated subagent collaboration," indicating a more complex and autonomous agent orchestration framework.
        - **Cowork:** Added "minimizable permission prompts" to improve user workflow, allowing users to minimize prompts instead of being forced to resolve them immediately.

### 3. Project Progress

The following key features and fixes were merged today:

- **Cowork Enhancements:**
    - **Folder Context Attachments (#2310):** Users can now drop or paste folders as context in prompts (instead of just uploading files).
    - **Queued Follow-ups (#2315):** Fixed an issue where queued follow-up tasks were not processed when the app was minimized or across different sessions.
    - **Steer Queue Fix (#2313):** Fixed the logic to submit only the selected queued steer, preserving FIFO order.

- **Scheduled Task & IM Routing Fixes:**
    - **Group ID Casing (#2314):** A critical fix for WeCom and DingTalk integrations, preserving the original case of group IDs to prevent delivery failures.
    - **IM Group Task Routing (#2306):** Repaired the routing for group tasks, filtering targets by the correct agent and normalizing legacy job entries.

- **Memory & Indexing:**
    - **Memory Index Migration (#2311):** Fixed a memory indexer to automatically migrate Full-Text Search (FTS) only indexes for all configured agents, ensuring agent memories remain functional post-upgrade.

### 4. Community Hot Topics

- **#2293 [OPEN] - Multi-Agent USER.md Overwrite Bug**
    - **Link:** [Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293)
    - **Activity:** 3 comments. The most active issue.
    - **Analysis:** A user reports that modifying the “About You” settings or `USER.md` for one agent overwrites the same file for all other agents. The user suspects a regression from a recent update. This is a critical usability bug for users running multiple distinct agents, as it undermines the core purpose of personalization.

### 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
| :--- | :--- | :--- | :--- |
| **Critical** | Multi-agent `USER.md` overwritten on restart (#2293) | Open | None linked |
| **High** | WeCom/DingTalk group ID casing lost in scheduled tasks (#2314 context) | Fixed/Closed | #2314 |
| **Medium** | Cowork follow-up coordinator not processing queued items (#2315 context) | Fixed/Closed | #2315 |
| **Low** | Windows title bar logo compression when sidebar collapsed (#2316) | Fixed/Closed | #2316 |

**Top Priority:** The `USER.md` bug (#2293) is a severe regression. There is no linked fix PR yet, making it the highest-priority unresolved issue.

### 6. Feature Requests & Roadmap Signals

- **UI/UX Enhancement (Likely Next Version):**
    - **Session List Time Grouping (#1337):** A request to group conversation history by "Today," "Yesterday," "This Week," etc., similar to ChatGPT. A corresponding PR (#1338) exists but is currently stale.
    - **Session List Error Badge (#1330/1331):** A request to show a red dot for sessions in an error state. A PR (#1331) exists but is also stale.

- **Infrastructure (Long-term):**
    - **Workdays Schedule Option (#1335):** A common request for scheduled tasks to only run on weekdays.
    - **MCP Custom Server JSON Import (#1336):** Users want to paste JSON configuration to quickly set up MCP servers instead of filling out forms manually.

**Prediction:** Given the high activity on the "Cowork" UI, the session list time grouping (#1337) is a strong candidate for the next minor release, despite the PR being stale. The priority is likely shifting to stability first.

### 7. User Feedback Summary

- **Satisfaction:** Positive feedback is implied by the active development of the Cowork feature and delegation capabilities.
- **Pain Points:**
    - **Data Integrity (#2293):** The `USER.md` overwrite bug is the most significant source of user dissatisfaction, breaking the core multi-agent workflow.
    - **Scheduled Task Reliability (#1392):** A user reported that the toggle switch for some scheduled tasks was unresponsive. While closed, it highlights fragility.
- **Use Cases:** The activity clearly shows users are running multiple agents with custom personalities (`USER.md`) and relying heavily on the Cowork system for complex, asynchronous tasks.

### 8. Backlog Watch

These items are **stale** (2+ months old) and represent unmet user needs that may be blocking features or causing frustration:

- **#1275 & #1276 [OPEN] - Dependency Updates (actions/stale, actions/first-interaction):** Old PRs to update CI dependencies. While invisible to users, these are a health indicator of project maintenance. They should be merged to keep the CI pipeline secure and functional.
- **#1337 [OPEN] - Session List Time Grouping:** This feature request is highly aligned with mainstream AI chat apps and remains unresolved despite a linked PR (#1338). The lack of progress suggests a decision to defer UI improvements for higher-priority backend fixes.
- **#1331 [OPEN] - Session Error Badge:** A small but impactful UX improvement that has been open for over 3 months. This is a low-cost, high-visibility fix that would improve the "Cowork" user experience.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the Moltis project digest for **2026-07-11**.

---

## Moltis Project Digest
**Date:** 2026-07-11

### 1. Today's Overview
Project activity is extremely low today, with **0 closed issues** and **0 new releases** in the last 24 hours. The only signal of ongoing work is a single open Pull Request (#1146) that received an update yesterday. While the repository appears stable with no bug reports, maintenance appears idle. The single active PR suggests a focused effort on updating LLM provider support rather than broad feature development.

### 2. Releases
**No new releases.** The project has no release tags recorded in the last 24 hours. The last known release likely predates this digest.

### 3. Project Progress
**No Pull Requests were merged or closed today.** The only movement is the continued activity on the open PR #1146, but no code has been integrated into the main branch.

### 4. Community Hot Topics
There is **one active discussion** on the repository:

- **[PR #1146: Add GPT-5.6 model support](https://github.com/moltis-org/moltis/pull/1146)** (Author: PeterDaveHello, Updated: 2026-07-10)
  - **Status:** Open, 0 comments, 0 👍.
  - **Analysis:** This PR is the sole point of community attention. It addresses the need to keep the Moltis provider catalog current with the latest OpenAI models (GPT-5.6 Sol, Terra, Luna). Underlying need: Users require up-to-date model registrations to avoid configuration errors and maintain compatibility with OpenAI's rapidly evolving API (specifically the 1.05M context window and 372K Codex limit). The lack of comments may indicate the PR is awaiting review or is uncontroversial.

### 5. Bugs & Stability
**No bugs, crashes, or regressions were reported today.** The repository has zero open issues, indicating a low rate of active user friction or a lack of active usage. No stability concerns to flag at this time.

### 6. Feature Requests & Roadmap Signals
**No new feature requests were filed today.** The only roadmap signal is the GPT-5.6 support in PR #1146. Based on this, the next version will likely include:
- Registration of GPT-5.6 Sol, Terra, and Luna models.
- Updated context window limits (1.05M API, 372K backend).
- Cleaned-up configuration examples removing superseded model names.

### 7. User Feedback Summary
**No explicit user feedback (issues, comments, or reactions) was recorded today.** The project is effectively silent from a user perspective. This could indicate high satisfaction/zero friction, or more likely, low current community engagement.

### 8. Backlog Watch
**No long-unanswered issues or PRs requiring attention.** The only open item (PR #1146) is recent (July 9–10) and does not yet qualify as backlog. No maintainer attention deficits are visible from the open data.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-11

## 1. Today's Overview

CoPaw has reached a major milestone with the **v2.0.0 stable release**, representing a complete runtime migration from AgentScope 1.x to AgentScope 2.0. Activity is extremely high with 44 issues updated (48% closed) and 49 PRs updated (53% merged/closed) in the last 24 hours, indicating robust release-day maintenance. The project is processing significant post-release bug reports, particularly around Windows sandbox instability, memory pipeline issues, and MCP access control, while simultaneously shipping numerous bug fixes and documentation updates. Three new releases were published today (v2.0.0 stable, v2.0.0-beta.7, v2.0.0-beta.6), marking the culmination of a major architectural overhaul.

## 2. Releases

**v2.0.0 (Stable)** — [Release](https://github.com/agentscope-ai/CoPaw/releases/tag/v2.0.0)
- **Core change**: Refactored kernel based on AgentScope 2.0 Runtime (PRs #5078, #4846, #5018)
- **Breaking changes**: Complete migration from AgentScope 1.x APIs; backend dependency upgraded from `agentscope==1.0.20` to AgentScope 2.0
- **No explicit migration guide published yet** — users are requesting this in Issue #5948
- **No stated backward compatibility** for history messages, logs, or memory

**v2.0.0-beta.7** — [Release](https://github.com/agentscope-ai/CoPaw/releases/tag/v2.0.0-beta.7)
- Updated homepage copy and visuals for CoPaw 2.0
- Fixed memory session_id propagation in ReMe summarize tasks

**v2.0.0-beta.6** — [Release](https://github.com/agentscope-ai/CoPaw/releases/tag/v2.0.0-beta.6)
- Unit tests for channels module
- Fix for tool result error state passthrough in envelope handling

**Migration advisory**: Users upgrading from v1.x should be aware that v2.0.0 is a breaking change. No official upgrade guide exists yet (Issue #5948), and several post-migration bugs have already been reported (see Bugs & Stability).

## 3. Project Progress

**Merged/closed PRs today (26 items):**
- **v2.0.0 packaging**: `bump the version to v2.0.0` ([#5942](https://github.com/agentscope-ai/CoPaw/pull/5942)), `update(docs): update docs for qwenpaw 2.0` ([#5932](https://github.com/agentscope-ai/CoPaw/pull/5932))
- **Memory fixes**: `fix(memory): propagate session_id into ReMe summarize tasks` ([#5938](https://github.com/agentscope-ai/CoPaw/pull/5938))
- **Website**: `feat(website): Update homepage copy and visuals for CoPaw 2.0` ([#5940](https://github.com/agentscope-ai/CoPaw/pull/5940))
- **Documentation**: `fix(docs): refine news format` ([#5937](https://github.com/agentscope-ai/CoPaw/pull/5937))
- **Revert**: `Revert "fix: per-message current time injection..."` ([#5936](https://github.com/agentscope-ai/CoPaw/pull/5936))

**Key open PRs advancing features:**
- `fix: use standard truncation hint for scroll-capped tool results` ([#5953](https://github.com/agentscope-ai/CoPaw/pull/5953)) — addresses two critical bugs
- `fix(mcp): apply access policy updates immediately` ([#5949](https://github.com/agentscope-ai/CoPaw/pull/5949)) — fixes MCP allow/deny config not taking effect
- `feat(memory): add reranker for search results on reme0.4` ([#5692](https://github.com/agentscope-ai/CoPaw/pull/5692)) — memory search quality improvement
- `feat(observability): track user/session/version on langfuse traces` ([#5922](https://github.com/agentscope-ai/CoPaw/pull/5922))

## 4. Community Hot Topics

**Most active issues (by comment count):**

1. **[#5401](https://github.com/agentscope-ai/CoPaw/issues/5401)** — Console crash with large tool-use history (closed, 15 comments). Root cause: backend emits `type: "data"` blocks that frontend cannot render. Solution requires frontend rendering layer update.

2. **[#4727](https://github.com/agentscope-ai/CoPaw/issues/4727)** — Breaking change: Migrate backend to AgentScope 2.0 (closed, 12 comments, 3 👍). The foundational architectural change behind today's v2.0.0 release.

3. **[#5273](https://github.com/agentscope-ai/CoPaw/issues/5273)** — v2.0.0 pre-release bug tracker (closed, 11 comments). Central tracking issue for all pre-release regression reports.

4. **[#5951](https://github.com/agentscope-ai/CoPaw/issues/5951)** — Desktop shell sandbox: icacls timeout → pwsh recursive explosion + 20GB memory (open, 5 comments). **Critical severity** — user reports entire tool is unusable after upgrade.

5. **[#5947](https://github.com/agentscope-ai/CoPaw/issues/5947)** — MCP allow/deny tool access settings ineffective in v2.0.0 (open, 4 comments). Fix PR [#5949](https://github.com/agentscope-ai/CoPaw/pull/5949) already submitted.

**Underlying needs**: The community is actively stress-testing v2.0.0's new architecture. Three primary themes emerge: (1) sandbox stability under Windows, (2) memory pipeline reliability with non-English content, and (3) MCP tool access control respecting configured policies immediately.

## 5. Bugs & Stability

**Critical severity:**
- **[#5951](https://github.com/agentscope-ai/CoPaw/issues/5951)** — Desktop shell sandbox: `icacls` timeout silently swallowed → pwsh recursive explosion, 20GB memory consumption, cannot disable sandbox. User forced to rollback to v1.1.12.post3. **No fix PR yet**. Priority: P0.
- **[#5954](https://github.com/agentscope-ai/CoPaw/issues/5954)** — After v2.0.0 update: `Failed to get agent: [Errno 21] Is a directory: '/app/working/workspaces/default/.mcp'` — MCP workspace path treated as directory. Reported 10 hours ago.

**High severity:**
- **[#5947](https://github.com/agentscope-ai/CoPaw/issues/5947)** — MCP tool allow/deny configuration ineffective. Fix PR [#5949](https://github.com/agentscope-ai/CoPaw/pull/5949) submitted.
- **[#5950](https://github.com/agentscope-ai/CoPaw/issues/5950)** — Chinese memory files trigger embedding 400 error: truncation counts characters, not tokens. Affects all non-English embedding workflows.
- **[#5952](https://github.com/agentscope-ai/CoPaw/issues/5952)** — Auto-memory fails: `No module named 'agentscope.tool._builtin._scripts'`. Import path regression in v2.0.0.

**Medium severity:**
- **[#5946](https://github.com/agentscope-ai/CoPaw/issues/5946)** — Tool truncation hint causes agent to issue unnecessary `recall_history` calls for content still in context. Fix PR [#5953](https://github.com/agentscope-ai/CoPaw/pull/5953) submitted.
- **[#5918](https://github.com/agentscope-ai/CoPaw/issues/5918)** — `/mission` mode loops on PRD format error with no way to proceed.
- **[#5856](https://github.com/agentscope-ai/CoPaw/issues/5856)** — Tool_call structure lost during context compaction, causing 400 errors. Affects v1.1.12.post2 users.

**Low severity:**
- **[#5906](https://github.com/agentscope-ai/CoPaw/issues/5906)** — Anti-repetition false positive: marks normal conversation as "doom loop".
- **[#5896](https://github.com/agentscope-ai/CoPaw/issues/5896)** — Iteration counter resets incorrectly in v2.0.0b4.

## 6. Feature Requests & Roadmap Signals

**Formal design proposals submitted:**
- **[#5909](https://github.com/agentscope-ai/CoPaw/issues/5909)** — Configurable theme/skin module (P0 task from #2291). Design proposal with claim comment.
- **[#5943](https://github.com/agentscope-ai/CoPaw/issues/5943)** — Session grouping + import/export (responding to #5903). Design proposal submitted per contributing guide.

**User-requested features with community backing:**
- **[#5903](https://github.com/agentscope-ai/CoPaw/issues/5903)** — Session grouping and import/export (2 comments). Has dedicated design proposal PR, likely for v2.1.0.
- **[#5453](https://github.com/agentscope-ai/CoPaw/issues/5453)** — KaTeX/LaTeX rendering in desktop app (2 comments). Scientific users requesting math formula rendering.

**Predictions for next release (v2.0.1 / v2.1.0):**
- MCP access policy immediate enforcement (fix PR already submitted)
- Windows sandbox stability fix (critical, blocker for Windows users)
- Tool truncation hint improvements (fix PR submitted)
- Chinese/token-aware embedding truncation
- Session management features (grouping + import/export) likely for v2.1.0

## 7. User Feedback Summary

**Satisfaction signals:**
- Positive community reception to v2.0.0 stable release: Issue [#5945](https://github.com/agentscope-ai/CoPaw/issues/5945) — "V2.0.0正式版本,终于发布了!☀" (Finally released!)

**Pain points & dissatisfaction:**
- **Windows sandbox crisis**: User reports v2.0.0 desktop shell is unusable on Windows due to pwsh recursion and 20GB memory consumption, forced to rollback ([#5951](https://github.com/agentscope-ai/CoPaw/issues/5951))
- **No upgrade guide**: Multiple users requesting clear migration documentation for v1.x → v2.0.0 ([#5948](https://github.com/agentscope-ai/CoPaw/issues/5948))
- **MCP configuration broken**: Tool allow/deny settings in MCP do not take effect, violating user security expectations ([#5947](https://github.com/agentscope-ai/CoPaw/issues/5947))
- **Memory pipeline failures**: Auto-memory and embedding pipelines broken for non-English content and certain model configurations (Issues [#5950](https://github.com/agentscope-ai/CoPaw/issues/5950), [#5952](https://github.com/agentscope-ai/CoPaw/issues/5952))
- **Mission mode stuck**: `/mission` workflow enters unrecoverable loop on PRD format validation errors ([#5918](https://github.com/agentscope-ai/CoPaw/issues/5918))

**Use cases observed:**
- Multi-agent workflow with task handoff (Issue #3623)
- API-driven automation (Java services driving CoPaw via REST, PR #5930)
- Chinese Windows environments with GBK encoding (PR #5927)
- Scientific/technical users requiring LaTeX rendering (#5453)

## 8. Backlog Watch

**Critical issues needing maintainer attention:**

1. **[#5951](https://github.com/agentscope-ai/CoPaw/issues/5951)** — Windows sandbox pwsh explosion (opened 2026-07-10). **No fix PR yet**. Affects all v2.0.0 Windows desktop users. Highest priority.

2. **[#5954](https://github.com/agentscope-ai/CoPaw/issues/5954)** — MCP directory treated as file (opened 2026-07-10). New user blocked from using v2.0.0.

3. **[#5950](https://github.com/agentscope-ai/CoPaw/issues/5950)** — Chinese embedding truncation (opened 2026-07-10). Affects all non-English workflows.

**Older issues without recent maintainer response:**

4. **[#3549](https://github.com/agentscope-ai/CoPaw/issues/3549)** — `ValidationError: FunctionCallOutput call_id` on Armbian/ARM systems (opened 2026-04-17, 7 comments). Closed today (2026-07-10) but resolution unclear — may recur on ARM platforms.

5. **[#5453](https://github.com/agentscope-ai/CoPaw/issues/5453)** — KaTeX/LaTeX rendering request (opened 2026-06-23). No maintainer response visible.

**Long-standing enhancement requests:**
- [#3571](https://github.com/agentscope-ai/CoPaw/issues/3571) — Hide top bar for cleaner UI (opened 2026-04-19, closed today)
- [#3569](https://github.com/agentscope-ai/CoPaw/issues/3569) — Scheduled task execution history and versioning (opened 2026-04-19, closed today)
- [#3623](https://github.com/agentscope-ai/CoPaw/issues/3623) — Cross-agent session feedback mechanism (opened 2026-04-20, closed today)

**Note**: Many backlog issues were batch-closed today, likely as part of the v2.0.0 release cleanup. Several may represent fixed or deprecated issues rather than intentional triage.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-11

## Today's Overview

ZeroClaw shows high activity with **50 PRs** and **19 issues** updated in the last 24 hours, indicating a project in active development with significant community engagement. The project currently has **46 open PRs** and **17 open issues**, suggesting a large backlog that maintainers are working through. No new releases were published today, though tracker issues indicate development toward **v0.8.3** is ongoing across observability, policy, and config-driven runtime features. The ratio of merged/closed PRs (4) to open PRs (46) is low, which may indicate either a review bottleneck or a large number of recently opened contributions.

## Releases

*No new releases were published today.*

## Project Progress

**Merged/closed PRs today:** 4 (from the 50 updated PRs)

Notable merged/closed advances visible in the PR list:
- **[PR #8931](https://github.com/zeroclaw-labs/zeroclaw/pull/8931)** — Fix for provider tool-call argument sanitization (OpenAI/OpenRouter/compatible), addressing 400 errors on malformed `tool_calls[].function.arguments` from smaller/reasoning models
- **[PR #8948](https://github.com/zeroclaw-labs/zeroclaw/pull/8948)** — Fix for zombie stdio MCP server processes, adding proper reaping of exited child processes via `SIGCHLD` handling
- **[PR #8947](https://github.com/zeroclaw-labs/zeroclaw/pull/8947)** — Anthropic provider now honors configurable `timeout_secs` instead of hardcoded 120s
- **[PR #8954](https://github.com/zeroclaw-labs/zeroclaw/pull/8954)** — New `Dockerfile.alpine` for multi-arch musl builds (ARM64 + x86-64)

Several large features are advancing through the review pipeline:
- **[PR #8923](https://github.com/zeroclaw-labs/zeroclaw/pull/8923)** — Host-mediated outbound raw TCP/TLS for channel plugins (size XL)
- **[PR #8880](https://github.com/zeroclaw-labs/zeroclaw/pull/8880)** — SOP approval broker with group membership and quorum (size XL)
- **[PR #8909](https://github.com/zeroclaw-labs/zeroclaw/pull/8909)** — Gateway and dashboard plugin capability catalog (size XL)
- **[PR #8638](https://github.com/zeroclaw-labs/zeroclaw/pull/8638)** — Skill install replacement: ClawHub → git-catalog `--skill` selector

## Community Hot Topics

**[Issue #8798](https://github.com/zeroclaw-labs/zeroclaw/issues/8798)** — *RFC: Consolidate /ws/chat and /acp onto a single wire protocol* (2 comments)
- Author NiuBlibing proposes unifying two parallel WebSocket channels. This is an architectural RFC with high risk, touching the gateway's core protocol design.

**[Issue #5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)** — *[Bug]: Agent request appends each subsequent image in each request when sending two or more images on Telegram* (6 comments)
- Long-running bug (since April) with multi-image handling on Telegram. The gateway treats each image as a separate LLM request instead of batching them, causing multiple agent outputs.

**[Issue #8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654)** — *[Bug]: skill-review fork panics* → daemon SIGSEGV (3 comments)
- Critical crash in the skill review subsystem (`review.rs:159`). The panic takes down the entire agent process with SIGSEGV under `panic=abort` after tool-heavy turns. Marked high risk and in progress.

**Key insight:** The community is deeply engaged in architectural improvements (RFC on protocol consolidation) and stability (crash bugs), with a notable lack of "feature request only" issues — most discussion mixes bugs with enhancement proposals.

## Bugs & Stability

### Critical/High Severity
| Issue | Severity | Description | Fix PR |
|-------|----------|-------------|--------|
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | SIGSEGV/crash | skill-review fork panics on out-of-range slice → daemon death | *in progress* |
| [#8934](https://github.com/zeroclaw-labs/zeroclaw/issues/8934) | S1 - blocked | Gemini function calls fail because `thought_signature` dropped from history | None yet |
| [#8950](https://github.com/zeroclaw-labs/zeroclaw/issues/8950) | S2 - degraded | Telegram bot commands fail to register when tools+skills exceed 100 | None yet |

### Medium Severity
| Issue | Severity | Description | Fix PR |
|-------|----------|-------------|--------|
| [#8936](https://github.com/zeroclaw-labs/zeroclaw/issues/8936) | S2 | `loop_detector::hash_value` deep-clones entire tool-args JSON on every call (RSS growth) | None yet |
| [#8952](https://github.com/zeroclaw-labs/zeroclaw/issues/8952) | Medium | Streamed pre-tool narration duplicated when turn text has whitespace | None yet |
| [#8929](https://github.com/zeroclaw-labs/zeroclaw/issues/8929) | S2 | Streamed narration duplicated during tool-use turns | None yet |
| [#8945](https://github.com/zeroclaw-labs/zeroclaw/issues/8945) | S2 | ZeroCode input box blocks macOS text replacements | None yet |
| [#8944](https://github.com/zeroclaw-labs/zeroclaw/issues/8944) | S2 | ZeroCode transcript mouse copy blocks word-level text selection | None yet |

### Bug Fix PRs Submitted Today
- **[PR #8931](https://github.com/zeroclaw-labs/zeroclaw/pull/8931)** — Sanitizes outbound tool-call arguments to prevent 400 errors
- **[PR #8948](https://github.com/zeroclaw-labs/zeroclaw/pull/8948)** — Reaps exited MCP server processes
- **[PR #8751](https://github.com/zeroclaw-labs/zeroclaw/pull/8751)** — Fixes `LocalWhisperConfig` default values (serde defaults vs `#[derive(Default)]` mismatch)
- **[PR #8938](https://github.com/zeroclaw-labs/zeroclaw/pull/8938)** — Removes duplicated `rustdoc` flag breaking `cargo test --doc`
- **[PR #8906](https://github.com/zeroclaw-labs/zeroclaw/pull/8906)** — Security: scans link/image destinations for credential patterns in leak detector

## Feature Requests & Roadmap Signals

### Config/Policy Driven (v0.8.3 Tracker — [#8363](https://github.com/zeroclaw-labs/zeroclaw/issues/8363))
- Per-agent runtime flags, model switching, MCP/tool-policy enforcement
- `uses_memory` flag for cron jobs — now exposed in CLI via [#8397](https://github.com/zeroclaw-labs/zeroclaw/issues/8397) (closed) and web UI via [#8677](https://github.com/zeroclaw-labs/zeroclaw/issues/8677) (closed)

### Observability (v0.8.3 Tracker — [#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073))
- **[#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)** — Add `session_id` to OTel export as `gen_ai.conversation.id` (high priority signal for LLM observability standards)
- Per-agent in-flight prompt counter on dashboard ([PR #8905](https://github.com/zeroclaw-labs/zeroclaw/pull/8905))

### Media/Provider Extensions
- **[#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563)** — ComfyUI as shared media provider (includes `gen_video` groundwork)
- **[#8958](https://github.com/zeroclaw-labs/zeroclaw/issues/8958)** — ACP multi-agent selection via `?agent=` query parameter (real-world integration feedback from Thunderbolt client)

### Plugin Ecosystem
- **[PR #8949](https://github.com/zeroclaw-labs/zeroclaw/pull/8949)** — Webhook GET + challenge-echo for plugin verification
- **[PR #8923](https://github.com/zeroclaw-labs/zeroclaw/pull/8923)** — Outbound raw TCP/TLS for channel plugins
- **[PR #8909](https://github.com/zeroclaw-labs/zeroclaw/pull/8909)** — Plugin capability catalog on gateway API

**Prediction:** v0.8.3 will likely ship within 2-3 weeks given the volume of tracker work, with emphasis on config-driven runtime behavior, SOP approval workflows, and plugin ecosystem expansion.

## User Feedback Summary

**Pain Points:**
1. **Telegram usability** — Multi-image handling broken (Issue #5514), command menu fails beyond 100 tools (Issue #8950), documentation incomplete for setup (Issue #8810). Telegram appears to be a primary channel for many users but has accumulated several frustrating bugs.
2. **Gemini integration broken** — `thought_signature` dropped from assistant history blocks Gemini function calling entirely (Issue #8934, S1 severity). This is a workflow blocker for Google AI users.
3. **MacOS ZeroCode experience** — Text replacements don't work (Issue #8945), mouse selection is intercepted by copy behavior (Issue #8944). These are polished-based complaints from active dogfooders.
4. **Provider configuration** — Anthropic timeout hardcoded (PR #8947 fix), OpenRouter/Cohere tool-call argument issues (PR #8931 fix), Whisper config defaults wrong (PR #8751 fix).

**Satisfaction Signals:**
- External client integration testing with Thunderbird's Thunderbolt (Issue #8958) shows external ecosystem interest
- Active dogfooding by core contributors (Audacity88, metalmon, JordanTheJet) producing detailed UX reports
- Multiple community members submitting high-quality PRs (wangmiao0668000666, tzy-17, Nillth)

## Backlog Watch

| Issue/PR | Age | Status | Concern |
|----------|-----|--------|---------|
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | 3+ months | Open, accepted | Telegram multi-image bug; 6 comments, no fix PR. Long-standing accepted bug without resolution. |
| [#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) | 2 months | Open, accepted | ComfyUI media provider feature request; 2 comments, no PR. Could signal unmet demand for media generation. |
| [#8139](https://github.com/zeroclaw-labs/zeroclaw/pull/8139) | 19 days | Open | Channel TTL session cleanup PR; no maintainer review comments yet. |
| [#8905](https://github.com/zeroclaw-labs/zeroclaw/pull/8905) | 2 days | Open, needs-author-action | Per-agent in-flight counter — stalled waiting for author updates. |
| [#8638](https://github.com/zeroclaw-labs/zeroclaw/pull/8638) | 8 days | Open, size L | Major skill install refactor; no recent maintainer engagement visible. |

**Maintainer attention needed:** The Telegram multi-image bug (#5514) is the most concerning backlog item — accepted for months, high user visibility, and no assignee or fix in progress. The skill catalog replacement PR (#8638) is a breaking change (`!`) that may need maintainer sign-off before further stacked work can land.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*