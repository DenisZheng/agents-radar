# OpenClaw Ecosystem Digest 2026-06-16

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-16 00:49 UTC

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

# OpenClaw Project Digest — 2026-06-16

---

## 1. Today's Overview

OpenClaw remains in a state of extremely high community activity with **500 issues** and **500 PRs** updated in the last 24 hours, though the vast majority remain open (444 issues, 435 PRs). No new releases were published today. The project is clearly in a heavy triage and development phase: many issues carry `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` labels, indicating a significant bottleneck at the maintainer-review stage. Security-tagged issues and PRs are disproportionately represented, suggesting the community is actively hardening the platform. The ratio of open-to-closed items (~9:1) signals a growing backlog that will require sustained maintainer bandwidth to clear.

---

## 2. Releases

**None.** No new versions were published on 2026-06-16. The most recent activity on the release front appears to center on the `2026.6.8-beta.1` and `2026.6.1` cycles, both of which introduced regressions that are currently being tracked and patched (see Bugs & Stability below).

---

## 3. Project Progress

### Merged / Closed PRs (today)

| # | PR | Summary |
|---|-----|---------|
| [#68936](https://github.com/openclaw/openclaw/pull/68936) | **CLOSED** | PR review autofix pipeline + Windows daemon — adds an automated loop using Claude Agent SDK to address review comments, plus a Windows background supervisor for the gateway. |
| [#93418](https://github.com/openclaw/openclaw/pull/93418) | **CLOSED** | Fix: forward Bot API 10.1 `rich_message` content to agent — resolves silent drops of Telegram messages forwarded from other bots using the new Rich Messages format. |

### Notable Open PRs Advancing

- **[#93439](https://github.com/openclaw/openclaw/pull/93439)** — Fix: honor embedded run default model (`agents.defaults.model.primary` / per-agent `model.primary`) when embedded agent runs omit both provider and model. Resolves provider resolution falling back to `openai` for model refs like `anthropic/claude-sonnet-4-6`.
- **[#93445](https://github.com/openclaw/openclaw/pull/93445)** — Fix: preserve user-set behavior overrides (`/think`, `/verbose`, `/reasoning`, `ttsAuto`) across implicit daily session rollovers. Previously these were silently dropped.
- **[#93309](https://github.com/openclaw/openclaw/pull/93309)** — Feat: add `download` / `wait-for-download` actions to the browser tool so agents are notified when a click triggers a file download.
- **[#93442](https://github.com/openclaw/openclaw/pull/93442)** — Feat: expose `tool_use` blocks in `llm_output` / `agent_end` hook payloads, enabling downstream supervisor plugins to inspect tool calls.
- **[#93447](https://github.com/openclaw/openclaw/pull/93447)** — Feat: add word-level timestamps to TTS synthesis via ElevenLabs `/with-timestamps` endpoint.
- **[#93450](https://github.com/openclaw/openclaw/pull/93450)** — Feat: accept structured spec (heading/table/list/details) in Telegram rich messages.
- **[#93449](https://github.com/openclaw/openclaw/pull/93449)** — Fix: dedupe Feishu redelivered text messages by stable retry identity (`sender + chat_id + create_time + content`).
- **[#90122](https://github.com/openclaw/openclaw/pull/90122)** — Fix: collapse non-terminal internal tool errors in Control UI/WebChat to avoid prominent red "Tool error" banners for benign failures (e.g., shell search exiting 1 for no matches).
- **[#90057](https://github.com/openclaw/openclaw/pull/90057)** — Polish: Workboard operations view — card layout, filters, health metrics, auto-refresh, responsive behavior.
- **[#89858](https://github.com/openclaw/openclaw/pull/89858)** — Fix: systemd gateway unit scope conflicts when user-scope and system-scope units coexist after upgrade.

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

| # | Issue | Comments | 👍 | Core Need |
|---|-------|----------|-----|-----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 109 | 79 | **Platform parity** — macOS, iOS, and Android have native apps; Linux and Windows users are demanding equivalent desktop clients. This is the single most-reacted issue in the dataset. |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | Text between tool calls leaks to messaging channels | 32 | 1 | **Agent output hygiene** — internal processing text (error handling, narration) is being routed to Slack/iMessage/etc. as visible messages. A significant UX and security concern. |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | Prebuilt Android APK releases | 25 | 2 | **Distribution friction** — users want downloadable APKs rather than building from source. |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | Tiered bootstrap file loading | 17 | 0 | **Context window efficiency** — users with large workspaces want progressive loading to avoid wasting tokens on unreferenced files in every session. |
| [#32473](https://github.com/openclaw/openclaw/issues/32473) | Control UI requires device identity (HTTPS/localhost) | 17 | 5 | **Deployment accessibility** — VPS/Docker users hit secure-context requirements that block the Control UI. |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal daemon stop() race condition on SIGUSR1 restart | 17 | 0 | **Process lifecycle reliability** — orphaned processes and send failures during gateway restarts. |
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | Agent replies to previous message instead of current | 15 | 1 | **Session context integrity** — conversation misalignment where the agent responds to stale messages. |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | Bootstrap files in agentDir silently ignored | 14 | 5 | **Configuration discoverability** — per-agent `agentDir` bootstrap files (SOUL.md, AGENTS.md, etc.) have no effect; only workspace-level files are loaded. |

### Analysis

The dominant themes are: **(1) platform expansion** (Linux/Windows desktop apps, Android APKs), **(2) agent output control** (preventing internal text from leaking to channels), **(3) context/session management** (tiered loading, session context confusion, bootstrap file scoping), and **(4) deployment friction** (Control UI HTTPS requirements, Docker/VPS issues). The Linux/Windows app request (#75) with 109 comments and 79 reactions is clearly the community's top priority and has been open since January 2026 without resolution.

---

## 5. Bugs & Stability

### Critical / P0

| # | Issue | Severity | Summary | Fix PR? |
|---|-------|----------|---------|---------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 🔴 P0 | **Gateway Memory Leak** — RSS grows from 350MB to 15.5GB over 2-3 days, causing OOM kills and `launchd-handoff` restart cycles. | None yet |

### High / P1 (Regressions & Crashes)

| # | Issue | Severity | Summary | Fix PR? |
|---|-------|----------|---------|---------|
| [#90325](https://github.com/openclaw/openclaw/issues/90325) | 🟠 P1 regression | **Matrix channel dispatch broken** in v2026.6.1 — `TypeError: Cannot read properties of undefined (reading 'run')` on every inbound message. | None yet |
| [#93263](https://github.com/openclaw/openclaw/issues/93263) | 🟠 P1 regression | **Telegram "not supported"** for every reply on `2026.6.8-beta.1` — affects all Telegram clients. **CLOSED** (fix likely in progress). | [#93418](https://github.com/openclaw/openclaw/pull/93418) (related) |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | 🟠 P1 | **Signal daemon race condition** — orphaned processes and send failures on SIGUSR1 restart. | Open PR linked |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | 🟠 P1 regression | **`exec` tool doesn't inherit `skills.entries.*.env`** — secrets not passed to subprocesses. | Open PR linked |
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | 🟠 P1 | **Session context confusion** — agent replies to previous message instead of current. | None yet |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | 🟠 P1 | **Bootstrap files in `agentDir` silently ignored** — only workspace files loaded into system prompt. | None yet |
| [#87327](https://github.com/openclaw/openclaw/issues/87327) | 🟠 P1 | **Isolated agent runs stall** in runtime-plugins phase before execution — recurring across hourly crons on 2026.5.22. | None yet |
| [#91931](https://github.com/openclaw/openclaw/issues/91931) | 🟠 P1 | **Preseeded SOUL.md/IDENTITY.md causes bootstrap auto-completion** — deletes user-provided BOOTSTRAP.md before first run. | Open PR linked |

### Medium / P2 (Significant Bugs)

| # | Issue | Summary | Fix PR? |
|---|-------|---------|---------|
| [#32473](https://github.com/openclaw/openclaw/issues/32473) | Control UI requires HTTPS/localhost — VPS/Docker users blocked. | None yet |
| [#25574](https://github.com/openclaw/openclaw/issues/25574) | Config warnings logged repeatedly on every reload (~10-15s), spamming logs with thousands of duplicates. | Open PR linked |
| [#31331](https://github.com/openclaw/openclaw/issues/31331) | Docker + Sandbox can't `workspaceAccess` — internal container path mismatch. | None yet |
| [#67417](https://github.com/openclaw/openclaw/issues/67417) | `openclaw backup create` fails with ENOENT when session file is cleaned up during backup. | None yet |
| [#75380](https://github.com/openclaw/openclaw/issues/75380) | `provider-payload.jsonl` and `cache-trace.jsonl` grow unbounded — no rotation/max-size policy. | Open PR linked |
| [#44993](https://github.com/openclaw/openclaw/issues/44993) | Heartbeat/Cron "Current time" timestamp is stale — not refreshing between runs. **CLOSED**. | Open PR linked |

### Stability Assessment

The **gateway memory leak (#91588)** is the most critical open issue — a P0 that makes long-running deployments unreliable. The **Matrix dispatch regression (#90325)** introduced in v2026.6.1 is a release-blocking regression for Matrix users. The **Telegram "not supported" regression (#93263)** on `2026.6.8-beta.1` has been closed, suggesting a fix was merged or is imminent. Overall, the project has multiple P1 regressions from recent releases that indicate the release process may need stronger regression testing, particularly around channel adapters (Telegram, Matrix) and the exec tool environment propagation.

---

## 6. Feature Requests & Roadmap Signals

### Strong Community Demand (high 👍 or comments)

| # | Request | Signal Strength | Likely Timeline |
|---|---------|----------------|-----------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows desktop apps | 🔥 109 comments, 79 👍 | High priority but no maintainer commitment visible |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked secrets — prevent agent from reading raw API keys | 13 comments, 4 👍 | Security hardening — likely next minor |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) | Denylist support for exec-approvals | 7 comments, **7 👍** | Security — high per-comment engagement |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | Filesystem sandboxing config (`tools.fileAccess`) | 7 comments, 4 👍 | Security hardening |
| [#20786](https://github.com/openclaw/openclaw/issues/20786) | Telegram Business Bot support | 8 comments, **6 👍** | Channel expansion — strong signal |
| [#28300](https://github.com/openclaw/openclaw/issues/28300) | Theme customization system for Control UI | 6 comments, 5 👍 | UX polish |
| [#27445](https://github.com/openclaw/openclaw/issues/27445) | `announceTarget` for sub-agent completion routing | 11 comments, 5 👍 | Multi-agent orchestration |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | Tiered bootstrap file loading | 17 comments | Context efficiency — likely next minor |
| [#13700](https://github.com/openclaw/openclaw/issues/13700) | Session snapshots (`/session save\|load`) | 6 comments | Session management |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) | Slack Block Kit support | 13 comments | Channel richness |

### Predicted Next Version Focus

Based on the volume and nature of open issues and PRs, the next release cycle will likely prioritize:
1. **Security hardening** — masked secrets (#10659), exec denylist (#6615), filesystem sandboxing (#7722)
2. **Regression fixes** — Matrix dispatch (#90325), exec env inheritance (#31583), Signal race condition (#22676)
3. **Context/session management** — tiered bootstrap loading (#22438), session snapshots (#13700), behavior override persistence across rollovers (#93445)
4. **Channel expansion** — Telegram Business support (#20786), Slack Block Kit (#12602)

---

## 7. User Feedback Summary

### Pain Points

- **Deployment friction**: Multiple users report difficulty running OpenClaw on VPS/Docker setups — the Control UI's HTTPS requirement (#32473) and Docker workspace mounting issues (#31331) are recurring blockers. Users want clearer cloud deployment guides (#13597).
- **Agent output leaking**: The text-between-tool-calls leak (#25592) is a top-3 issue by comments, indicating users are embarrassed by or concerned about internal processing text appearing in their Slack/iMessage channels.
- **Memory and stability**: The gateway memory leak (#91588) makes long-running deployments unreliable. Users on VPS with limited RAM are particularly affected.
- **Configuration discoverability**: Bootstrap files in `agentDir` being silently ignored (#29387) and the onboarding wizard not covering memory/embedding setup (#16670) suggest the configuration model is not intuitive.
- **Token/context waste**: Users with large workspaces are frustrated by the fixed ~3,500 token overhead per session for tool schemas (#14785) and the all-or-nothing bootstrap file loading (#22438).

### Satisfaction Signals

- Strong engagement on feature requests (high 👍 counts on security features, channel expansion, and UX polish) suggests an active, invested user base.
- The volume of PRs (500 updated in 24h) indicates a healthy contributor community willing to submit fixes.
- Closed issues like the Telegram "not supported" bug (#93263) and stale heartbeat timestamp (#44993) show the project is capable of closing the loop on regressions.

### Use Cases Observed

- **Multi-agent orchestration**: Users want sub-agent completion routing control (#27445), post-subagent hooks (#22358), and agent-to-agent communication (#41199).
- **Enterprise/Feishu deployments**: Feishu-specific issues (#13751 sender name resolution, #93449 message deduplication) suggest meaningful adoption in Chinese enterprise environments.
- **Multi-channel operations**: Users are running OpenClaw across Telegram, Slack, Signal, Matrix, Google Chat, WhatsApp, and iMessage simultaneously, driving demand for consistent behavior and rich messaging across all channels.

---

## 8. Backlog Watch

### Long-Standing Issues Needing Maintainer Attention

| # | Issue | Age | Why It Matters |
|---|-----|-----|----------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | **5.5 months** (Jan 1) | Highest community demand (79 👍, 109 comments). No visible maintainer response. Blocks desktop platform parity. |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) | Safe/unsafe ClawdBot (Rust rewrite suggestion) | 4.5 months | Fundamental architecture discussion about sandboxing and memory safety. Needs product decision. |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) | Denylist support for exec-approvals | 4.5 months | 7 👍 on a security feature. Complements existing allowlist. Straightforward to implement. |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory trust tagging by source | 4.5 months | Security-critical for preventing memory poisoning from untrusted content. |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | Filesystem sandboxing config | 4.5 months | 4 👍. Users attempted to configure it and it didn't work as expected. |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked secrets | 4 months | 4 👍. Prevents prompt injection from extracting credentials. |
| [#13616](https://github.com/openclaw/openclaw/issues/13616) | Backup/restore utility | 4 months | Disaster recovery and environment migration. No standardized solution. |
| [#12678](https://github.com/openclaw/openclaw/issues/12678) | Capability-based permissions for skills/tools | 4 months | Default-deny model for high-risk actions. Security hardening. |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) | Pre-response enforcement hooks (hard gates) | 4 months | 2 👍. Critical for quant/finance/security workflows where soft prompt rules are insufficient. |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) | Webhook hook sessions should reuse existing session | 4 months | Multi-turn webhook conversations don't work as documented. |

### PRs Awaiting Maintainer Review (labeled `needs-maintainer-review`)

The vast majority of the 500 open PRs carry the `clawsweeper:needs-maintainer-review` label, indicating a systemic bottleneck. Notable PRs that appear ready:

- **[#91091](https://github.com/openclaw/openclaw/pull/91091)** — fix(memory): do not prune session index from failed directory scan (size: L, ready for maintainer look)
- **[#90122](https://github.com/openclaw/openclaw/pull/90122)** — fix(ui): collapse non-terminal internal tool errors (rating: 🦞 diamond lobster, ready)
- **[#90057](https://github.com/openclaw/openclaw/pull/90057)** — Polish Workboard operations view (rating: 🐚 platinum hermit, ready, video proof supplied)
- **[#75469](https://github.com/openclaw/openclaw/pull/75469)** — fix: same-session inferred commitment starvation (rating: 🐚 platinum hermit, ready)
- **[#89961](https://github.com/openclaw/openclaw/pull/89961)** — fix(plugins): guard manifest suppression metadata (rating: 🐚 platinum hermit, ready)
- **[#89906](https://github.com/openclaw/openclaw/pull/89906)** — fix(googlechat): fall back to text link on media upload 403 (rating: 🦐 gold shrimp, ready)

### Recommendation

The project's most urgent need is **maintainer bandwidth for review and triage**. The 9:1 open-to-closed ratio, the sheer volume of `needs-maintainer-review` labels, and the age of top community requests (4-5 months without resolution) all point to a project that is outpacing its maintainer capacity. Prioritizing the P0 memory leak (#91588), the Matrix regression (#90325), and the Linux/Windows app request (#75) would have the highest impact on community trust and project health.

---

*Data source: OpenClaw GitHub (github.com/openclaw/openclaw), snapshot 2026-06-16. All links reference the openclaw/openclaw repository.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Open-Source Ecosystem

**Date:** 2026-06-16 | **Analyst:** OWL, ZOO Company

---

## 1. Ecosystem Overview

The open-source AI agent and personal assistant landscape is in a period of explosive growth and intense competition, with at least 12 active projects spanning from lightweight embedded gateways to full-featured multi-channel agent platforms. The ecosystem is converging around a shared architecture — gateway-based channel routing, provider-agnostic LLM backends, MCP tool integration, and session/context management — but diverging sharply in target deployment environments, UX philosophy, and maturity. **OpenClaw** remains the dominant reference project by community scale and feature breadth, but challengers like **NanoBot**, **Hermes Agent**, and **CoPaw** are carving out distinct niches in developer experience, enterprise readiness, and desktop-native workflows respectively. The overall trajectory is toward multi-agent orchestration, security hardening, and production-grade reliability, with most projects still in pre-1.0 or early-1.0 release cycles.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Open Ratio | Releases (24h) | Health Score |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | ~9:1 open | None | 🔴 Backlog pressure |
| **NanoBot** | 4 | 35 (16 merged) | ~1.8:1 | None | 🟢 High throughput |
| **Hermes Agent** | 50 | 50 | ~4:1 open | None | 🟡 Active, desktop pain |
| **PicoClaw** | 3 | 12 (2 merged) | ~5:1 open | Nightly only | 🟡 Stale PR bottleneck |
| **NanoClaw** | 0 | 12 (3 merged) | ~4:1 open | None | 🟢 Fix backlog clearing |
| **NullClaw** | 3 | 1 | ~3:1 open | None | 🔴 Low activity |
| **IronClaw** | 47 | 50 (23 merged) | ~1.8:1 open | None | 🟢 Rapid iteration |
| **LobsterAI** | 2 (stale) | 11 (5 merged) | ~2:1 open | None | 🟢 Polish phase |
| **TinyClaw** | 0 | 0 | N/A | None | ⚪ No activity |
| **Moltis** | 0 | 2 (0 merged) | 2:0 open | None | 🟢 Early feature dev |
| **CoPaw** | 50 | 50 (35 merged) | ~1.4:1 open | None | 🟢 High merge rate |
| **ZeptoClaw** | 0 | 0 | N/A | None | ⚪ No activity |
| **ZeroClaw** | 50 | 50 (3 merged) | ~16:1 open | None | 🔴 Massive backlog |

**Health scoring:** Based on open-to-closed ratio, release cadence, critical bug count, and maintainer responsiveness. NanoBot, IronClaw, and CoPaw show the healthiest throughput. OpenClaw and ZeroClaw have the most concerning backlog-to-throughput ratios despite high raw activity.

---

## 3. OpenClaw's Position

### Advantages vs. Peers

- **Scale of community engagement**: 500 issues and 500 PRs in 24 hours is unmatched — roughly 10× the next most active project. This creates a powerful feedback loop and contributor pipeline.
- **Channel breadth**: OpenClaw supports the widest range of messaging channels (Telegram, Slack, Signal, Matrix, WhatsApp, iMessage, Feishu, Google Chat) with the richest feature set per channel (rich messages, TTS, browser tool, etc.).
- **Feature depth**: No other project matches OpenClaw's combination of embedded agent runs, sub-agent delegation, browser automation, TTS synthesis, Workboard operations, and multi-provider model routing.
- **Security focus**: Masked secrets, exec denylist/allowlist, filesystem sandboxing, and capability-based permissions are more advanced than any peer.

### Technical Approach Differences

| Dimension | OpenClaw | Closest Peers |
|---|---|---|
| **Architecture** | Monolithic gateway with plugin system | NanoBot (modular runner), Hermes (daemon + desktop), IronClaw (Reborn v2 runtime) |
| **Session model** | Implicit daily rollovers with behavior persistence | NanoClaw (thread-keyed archives), ZeroClaw (WebSocket dashboard sessions) |
| **Multi-agent** | Sub-agent delegation with `announceTarget` | ZeroClaw (multi-agent routing RFC), Hermes (sister registry) |
| **Desktop** | CLI-first, Linux/Windows apps requested (#75, 109 comments) | Hermes (Electron app, but buggy), CoPaw (desktop-native, most polished GUI), LobsterAI (Electron + cowork) |
| **MCP support** | Present but less emphasized | NanoClaw (remote HTTP/SSE MCP — leading), ZeroClaw (MCP bundles — broken) |

### Community Size Comparison

OpenClaw's 79 👍 on its top issue (#75) exceeds the total reaction count of most peer projects' entire issue trackers. The contributor base is visibly larger and more diverse. However, this scale creates a **maintainer bottleneck** that smaller projects like NanoBot and IronClaw avoid through tighter review loops.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging simultaneously across multiple projects, indicating ecosystem-wide convergence:

### 4.1 Context/Session Management
**Projects:** OpenClaw, NanoBot, Hermes Agent, CoPaw, ZeroClaw
- **Tiered bootstrap loading** (OpenClaw #22438, 17 comments) — progressive context loading to reduce token waste
- **Compaction reliability** (CoPaw #5171 — zero-context bug; NanoBot #4348 — auto-compact suffix preservation; Hermes #11236 — pre-compress hook)
- **Session snapshots** (OpenClaw #13700; NanoClaw #2772 — per-thread archiving)
- **Behavior persistence across rollovers** (OpenClaw #93445 — `/think`, `/verbose` overrides dropped)

### 4.2 Security Hardening
**Projects:** OpenClaw, ZeroClaw, Hermes Agent, NanoClaw
- **Masked secrets** (OpenClaw #10659) — prevent agents from reading raw API keys
- **Exec denylist** (OpenClaw #6615, 7 👍) — complement allowlist with blocklist
- **Filesystem sandboxing** (OpenClaw #7722; Hermes #46917 — agent silence control)
- **MCP tool scoping** (ZeroClaw #7733 — `mcp_bundles` silently ignored, security no-op)
- **Credential isolation** (IronClaw #4939 — owner-scoped vs. thread-scoped credentials)

### 4.3 Multi-Agent Orchestration
**Projects:** OpenClaw, Hermes Agent, ZeroClaw, NanoClaw
- **Sub-agent completion routing** (OpenClaw #27445 — `announceTarget`)
- **Multi-agent routing** (ZeroClaw #2767, 9 👍 — bindings, isolations, multi-account)
- **Sister/persona registry** (Hermes #46942 — 12-sister identity system)
- **Agent-to-agent communication** (OpenClaw #41199; NanoClaw #2627 — cross-channel reactions)

### 4.4 Channel Reliability & Media Handling
**Projects:** OpenClaw, NanoClaw, IronClaw, ZeroClaw, PicoClaw
- **Media delivery** (NanoClaw #2778 — WhatsApp media path mismatch; IronClaw #4871 — image attachments for vision models)
- **Cross-channel rich messaging** (OpenClaw #93450 — Telegram structured spec; CoPaw #5167 — Feishu CardKit streaming)
- **Message deduplication** (OpenClaw #93449 — Feishu redelivery; ZeroClaw #7738 — email Message-ID)

### 4.5 Provider Compatibility & Fallback
**Projects:** OpenClaw, NanoBot, ZeroClaw, Hermes Agent
- **Multi-model failover** (NanoBot #4287 — empty responses not triggering fallback; OpenClaw #93439 — embedded run model resolution)
- **Provider-specific quirks** (NanoBot #4351 — Mistral incompatibilities; ZeroClaw #7616 — Groq reasoning content stripping; Hermes #46946 — Bedrock prompt caching)
- **OAuth/credential management** (Hermes #46675 — Anthropic OAuth 400; IronClaw #4907 — Google OAuth resume failure; ZeroClaw #7745 — email OAuth retry)

---

## 5. Differentiation Analysis

| Project | Primary Target User | Key Differentiator | Technical Architecture | Deployment Model |
|---|---|---|---|---|
| **OpenClaw** | Power users, multi-channel operators | Broadest channel + feature coverage | Monolithic gateway, plugin system | Self-hosted, all platforms (desktop apps pending) |
| **NanoBot** | Developers, API-first integrators | Clean OpenAI-compatible API, high merge velocity | Modular runner, audit module | Self-hosted, CLI |
| **Hermes Agent** | Researchers, multi-persona users | Sister identity registry, self-improvement loop | Daemon + Electron desktop | Desktop app + CLI |
| **PicoClaw** | Embedded/hardware enthusiasts | RISC-V support, lightweight Go binary | Minimal gateway, single-binary | SBCs, embedded Linux |
| **NanoClaw** | DevOps/SRE operators | Remote MCP servers, container-first | Docker-native, CLI tooling | Containerized, cloud |
| **NullClaw** | Enterprise Azure users | Azure OpenAI identity auth focus | Minimal, Docker-based | Cloud, enterprise |
| **IronClaw** | NEAR ecosystem, Web3 users | Reborn v2 WebUI, extension marketplace | ACP-based, WebChat-first | Web + self-hosted |
| **LobsterAI** | Knowledge workers, document-centric users | Artifact sharing (DOCX/PPTX/PDF), voice ASR | Electron desktop, renderer process | Desktop app |
| **Moltis** | Production operators | External agent config, context injection hooks | Config-driven orchestration | Production deployments |
| **CoPaw** | Qwen ecosystem users | Polished desktop GUI, skill market, token visibility | Electron + plugin system | Desktop + cloud |
| **ZeroClaw** | Self-hosted/multi-tenant operators | Multi-agent routing (planned), broad provider support | Gateway + WebSocket dashboard | Self-hosted, web |
| **TinyClaw/ZeptoClaw** | — | No observable activity | — | — |

### Feature Focus Spectrum

```
Lightweight ◄──────────────────────────────────────► Full-Featured
PicoClaw    NanoBot    Moltis    NanoClaw    OpenClaw    CoPaw
NullClaw    ZeroClaw   Hermes    IronClaw    LobsterAI
```

### Target User Spectrum

```
Embedded/HW    Developer    Researcher    Enterprise    Consumer/Desktop
PicoClaw       NanoBot      Hermes        NullClaw      CoPaw
               Moltis       IronClaw      ZeroClaw      LobsterAI
               NanoClaw
```

---

## 6. Community Momentum & Maturity

### Tier 1: High Velocity, Rapid Iteration
- **OpenClaw** — Massive scale but bottlenecked at review. Needs maintainer bandwidth injection.
- **CoPaw** — Highest merge rate (35/50 PRs closed). Responsive team, but post-release regressions are eroding trust.
- **IronClaw** — 23/50 PRs merged, same-day bug closures. Strongest maintainer responsiveness in the dataset.
- **NanoBot** — 16/35 PRs merged, diverse contributors, clean API focus. Best throughput-to-backlog ratio.

### Tier 2: Active Development, Focused Scope
- **Hermes Agent** — Active but desktop app issues are a growing frustration cluster. Agent reliability work is progressing well.
- **NanoClaw** — Zero new issues, all bugs have fix PRs. Healthy contributor backlog, needs faster review.
- **LobsterAI** — Concentrated voice input + document artifact work. Stale skill management bugs need attention.
- **ZeroClaw** — High activity but massive backlog accumulation (16:1 open ratio). Silent security no-op (#7733) is concerning.

### Tier 3: Low Activity / Stabilization
- **PicoClaw** — Nightly builds only, stale PRs, platform-specific bugs (RISC-V, Windows) going unanswered.
- **Moltis** — Only 2 PRs, no issues. Too early to assess momentum.
- **NullClaw** — 3 issues, 1 Dependabot PR. Minimal community engagement.

### Tier 4: Dormant
- **TinyClaw, ZeptoClaw** — No activity in the reporting window.

### Maturity Assessment

| Project | Estimated Maturity | Release Cadence | Stability Signal |
|---|---|---|---|
| OpenClaw | Late beta (2026.6.x) | Frequent betas | Multiple P1 regressions |
| NanoBot | Early v0.2.x | Accumulating for minor | Clean merges, few regressions |
| Hermes Agent | Mid-cycle | Between majors | Desktop instability cluster |
| CoPaw | v1.1.x (most versioned) | ~2 day cadence | Post-release regressions |
| IronClaw | v0.x Reborn | Active dev | Auth/OAuth fragility |
| ZeroClaw | v0.8.x/0.9.0 | Backlog building | Silent security failures |

---

## 7. Trend Signals

### 7.1 Multi-Agent Orchestration Is the Next Battleground
The highest-community-demand features across the ecosystem are all multi-agent related: OpenClaw's `announceTarget` (#27445), ZeroClaw's multi-agent routing (#2767, 9 👍), Hermes's sister registry (#46942), and NanoClaw's inter-agent task submission (#5025). **Implication:** The industry is moving from "one agent, one user" to "multiple agents, multiple channels, shared infrastructure." Projects that solve routing, credential isolation, and inter-agent communication cleanly will gain significant advantage.

### 7.2 Security Is Shifting Left
Masked secrets (OpenClaw), exec denylists (OpenClaw), filesystem sandboxing (OpenClaw, Hermes), MCP tool scoping (ZeroClaw), and capability-based permissions (OpenClaw #12678) are all being requested or built simultaneously. **Implication:** The "prompt injection can read your env vars" era is ending. Users now expect runtime-level security guarantees, not just prompt-level instructions. Projects without a security hardening roadmap will face enterprise adoption barriers.

### 7.3 Context Management Is the #1 Reliability Challenge
Compaction bugs (CoPaw #5171 — data loss), bootstrap token waste (OpenClaw #22438), auto-compact edge cases (NanoBot #4348), and context bleed after restarts (Hermes #46934) are the most painful and hardest-to-fix issues across all projects. **Implication:** Context management is the "memory management" of the AI agent era — a foundational systems problem that no project has fully solved. Expect dedicated context management libraries or services to emerge.

### 7.4 Desktop App Quality Is a Competitive Differentiator
Hermes Agent's desktop app issues (compilation failures, stale state, model dropdown gaps, cron trigger bugs) represent a cluster of frustration that has no equivalent in CLI-first projects. CoPaw and LobsterAI show that a polished desktop experience is achievable but requires dedicated investment. OpenClaw's #75 (109 comments, 79 👍) proves the demand exists. **Implication:** The "CLI-first, GUI-later" approach creates a trust gap with non-developer users. Projects that invest in desktop parity early will capture a broader user base.

### 7.5 MCP Is Becoming the Universal Tool Protocol
NanoClaw's remote HTTP/SSE MCP support (#2776), ZeroClaw's MCP bundles (#7733), Hermes's MCP misconfiguration silence (#31246), and CoPaw's governance/sandbox interface (#5088) all point to MCP becoming the standard tool integration layer. **Implication:** MCP server ecosystem growth (hosted servers, marketplace, discovery) will be a major enabler. Projects that support remote MCP transports and proper tool scoping will integrate more easily with the emerging MCP tool marketplace.

### 7.6 Provider Fragmentation Demands Abstraction Layers
Every project is dealing with provider-specific quirks: Mistral's strict API requirements (NanoBot #4351), Groq's reasoning content rejection (ZeroClaw #7616), Bedrock's prompt caching (Hermes #46675), Azure's identity auth (NullClaw #955), and Ollama's incomplete responses (NullClaw #952). **Implication:** The "write once, run anywhere" promise of the OpenAI API compatibility layer is breaking down. Projects need provider adapter patterns with explicit quirk handling, or a shared provider compatibility library will emerge as critical infrastructure.

### 7.7 Silent Failures Are the Top Trust Eroder
Across projects, the most damaging bugs are silent ones: `mcp_bundles` not enforced (ZeroClaw #7733), empty model responses not triggering fallback (NanoBot #4287), background-review false "Skill created" notifications (Hermes #46897), and budget errors silently dropped (NanoClaw #2751). **Implication:** The community is demanding observability and transparency. Projects that surface errors clearly, provide audit trails (NanoBot #4320), and fail loudly will earn more trust than those that prioritize "clean" UX over honest error reporting.

---

### Strategic Recommendations for AI Agent Developers

1. **Invest in context management first** — it's the hardest problem and the most impactful differentiator.
2. **Design for multi-agent from the start** — routing, credential isolation, and inter-agent protocols are becoming table stakes.
3. **Treat security as a runtime concern, not a prompt concern** — sandboxing, secret masking, and tool scoping must be enforced at the platform level.
4. **Support remote MCP transports** — the ecosystem is moving toward hosted tool servers; stdio-only MCP support will become a limitation.
5. **Build provider adapter layers explicitly** — the OpenAI compatibility illusion is breaking; plan for provider-specific quirk handling.
6. **Fail loudly and observably** — silent failures destroy trust faster than visible errors. Invest in audit trails and transparent error propagation.

---

*Report generated by OWL, ZOO Company. Data sourced from GitHub public repositories, snapshot 2026-06-16. All issue/PR counts reflect activity within the 24-hour reporting window.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-16

---

## 1. Today's Overview

NanoBot is experiencing a period of exceptionally high contributor activity: **35 PRs updated in the last 24 hours** (19 open, 16 merged/closed) alongside 4 issues touched. No new releases have shipped recently, but the volume of merged fixes and feature PRs suggests the project is accumulating a substantial changelog for an upcoming release. The contributor base is notably diverse — at least 12 distinct authors submitted or updated PRs today — indicating healthy community engagement. The project is clearly in an active development sprint, with work spanning provider compatibility, session/context management, WebUI enhancements, and observability.

---

## 2. Releases

**None.** No new tagged releases in the reporting window. The backlog of merged PRs (see Section 3) is building toward what will likely be a significant minor or patch release.

---

## 3. Project Progress

### Merged / Closed PRs (16 total)

| # | PR | Author | Summary |
|---|-----|--------|---------|
| [4310](https://github.com/HKUDS/nanobot/pull/4310) | fix(api): forward real LLM usage in /v1/chat/completions | michaelxer | Closes [#4309](https://github.com/HKUDS/nanobot/issues/4309) — the OpenAI-compatible endpoint now returns actual token counts instead of hardcoded zeros. Critical for billing/metering integrations. |
| [4348](https://github.com/HKUDS/nanobot/pull/4348) | fix(session): keep auto compact suffix on user turn | chengyongru | Ensures idle auto-compaction preserves at least the most recent user turn suffix, preventing partial tool-turn fragments from persisting after compaction. |
| [4315](https://github.com/HKUDS/nanobot/pull/4315) | fix(memory): ignore malformed history entries | yu-xin-c | Hardens `history.jsonl` reads against externally corrupted rows (int cursors, missing fields), adding regression coverage for Dream prompt construction. |
| [4337](https://github.com/HKUDS/nanobot/pull/4337) | fix(runner): ignore empty injected payloads | yu-xin-c | Prevents blank user messages and non-user dict payloads from being injected mid-turn, preserving valid text and multimodal payloads. |

**Key themes from today's merges:**
- **API correctness**: The `/v1/chat/completions` usage-token fix unblocks downstream billing integrations.
- **Session/context robustness**: Three separate fixes (auto-compact suffix, malformed history, empty injections) all harden the agent loop against edge-case data corruption.
- **Memory reliability**: Malformed history handling protects Dream and prompt construction from external data corruption.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| # | Issue | Comments | Signal |
|---|-------|----------|--------|
| [#4287](https://github.com/HKUDS/nanobot/issues/4287) | Empty model responses not triggering fallback | 2 | Users running multi-model setups (e.g., DeepSeek primary) need reliable failover during peak-hour empty responses. Currently classified as "non-fallbackable" — a reliability gap for production deployments. |
| [#4322](https://github.com/HKUDS/nanobot/issues/4322) | NameError: 'session_key' not defined after merge | 1 | Stale-tagged but unresolved. A regression from a merge commit that extracted `_build_memory_context` — suggests the branch/merge workflow needs better CI gating. |
| [#4345](https://github.com/HKUDS/nanobot/issues/4345) | Image-strip fallback leaks file path to model | 0 (new) | Security-adjacent: the fallback strips images but leaks local file paths into the text prompt. Already has a fix PR ([#4346](https://github.com/HKUDS/nanobot/pull/4346)). |

### Most Active PRs (by comment count)

All 35 PRs show `undefined` comment counts in the data, suggesting the data snapshot predates comment activity. By recency and scope, the most significant open PRs are:

| # | PR | Scope |
|---|-----|-------|
| [#4320](https://github.com/HKUDS/nanobot/pull/4320) | feat(audit): add tools.audit config and AuditTool | Agent action observability — a new audit module with zero-overhead-when-off design. |
| [4344](https://github.com/HKUDS/nanobot/pull/4344) | Refactor config and agent loop boundaries | Architectural: decouples tool config models from schema imports, extracts AgentLoop coordinator. |
| [#4313](https://github.com/HKUDS/nanobot/pull/4313) | Feat(webui): config.json/webui parity | Closes the gap between WebUI settings panels and `config.json` — write endpoints for temperature, tool limits, dream, channels, memory. |

**Underlying needs analysis:**
- **Observability & auditability** (#4320): Enterprise/team deployments need to track what agents are doing. This is a maturity signal.
- **WebUI/config parity** (#4313): Users are frustrated by settings that exist in config.json but not in the UI (and vice versa). This is a UX cohesion need.
- **Architectural refactoring** (#4344): The config/schema boundary is being cleaned up, likely to support the growing number of tools and providers without circular import issues.

---

## 5. Bugs & Stability

### Ranked by Severity

| Severity | # | Issue | Status | Fix PR |
|----------|---|-------|--------|--------|
| 🔴 **High** | [#4322](https://github.com/HKUDS/nanobot/issues/4322) | `NameError: 'session_key'` crashes agent on startup | OPEN, stale-tagged | None yet |
| 🔴 **High** | [#4287](https://github.com/HKUDS/nanobot/issues/4287) | Empty model responses don't trigger fallback — silent failures in production | OPEN | None yet |
| 🟡 **Medium** | [#4345](https://github.com/HKUDS/nanobot/issues/4345) | Image-strip fallback leaks local file path to model + model hallucinates unseen image | OPEN | [#4346](https://github.com/HKUDS/nanobot/pull/4346) (open) |
| 🟡 **Medium** | [#4303](https://github.com/HKUDS/nanobot/pull/4303) | MCP `streamableHttp` server reconnection crashes with `RuntimeError: cancel scope` | OPEN (PR) | Self-fix PR open |
| 🟢 **Low** | [#4309](https://github.com/HKUDS/nanobot/issues/4309) | `/v1/chat/completions` returns zero usage tokens | **CLOSED** | [#4310](https://github.com/HKUDS/nanobot/pull/4310) merged |

**Stability assessment:** Two high-severity open issues — one is a startup crash (#4287 is a silent production failure). The startup crash (#4322) is stale-tagged, which is concerning since it blocks users who merge main into feature branches. The image-path leak (#4345) has a fix PR already open and is likely to merge soon.

---

## 6. Feature Requests & Roadmap Signals

### Active Feature PRs (likely candidates for next release)

| # | Feature | Author | Notes |
|---|---------|--------|-------|
| [#4357](https://github.com/HKUDS/nanobot/pull/4357) | feat(cron): silent jobs | franciscomaestre | Scheduled jobs that don't auto-deliver responses — useful for monitoring checks. |
| [#4354](https://github.com/HKUDS/nanobot/pull/4354) | feat(bridge): WhatsApp read receipts | franciscomaestre | Blue ticks for incoming WhatsApp messages. |
| [#4351](https://github.com/HKUDS/nanobot/pull/4351) | feat(providers): better Mistral support | La-Volpe | Fixes 4 incompatibilities in Mistral's API (reasoning_effort, tool IDs, etc.). |
| [#4350](https://github.com/HKUDS/nanobot/pull/4350) | feat(web): Keenable search provider | IlyaGusev | New built-in web search provider. |
| [#4330](https://github.com/HKUDS/nanobot/pull/4330) | feat(webui): automation management view | chengyongru | Full CRUD UI for automations with localization. |
| [#4320](https://github.com/HKUDS/nanobot/pull/4320) | feat(audit): agent action observability | bjoshuanoah | New audit module for enterprise observability. |

**Predicted next release contents (v0.2.2 or v0.3.0):**
- Silent cron jobs, WhatsApp read receipts, Mistral provider fixes, Keenable search, WebUI automation management, and the audit module are all feature-complete PRs that could land in the next release.
- The architectural refactor (#4344) may be held for a minor version bump (v0.3.0) if it touches import boundaries.

---

## 7. User Feedback Summary

### Pain Points

1. **Production reliability with multi-model setups** ([#4287](https://github.com/HKUDS/nanobot/issues/4287)): Users running DeepSeek as a primary model experience silent failures during peak hours when the API returns empty responses. The fallback mechanism doesn't activate, leaving users with no response and no error visibility. This is a critical pain point for production Telegram bot deployments.

2. **Merge-induced regressions** ([#4322](https://github.com/HKUDS/nanobot/issues/4322)): Users who merge `origin/main` into feature branches encounter startup crashes. This suggests the project's merge/CI pipeline needs improvement — users shouldn't encounter broken main.

3. **API compatibility gaps** ([#4309](https://github.com/HKUDS/nanobot/issues/4309), [#4351](https://github.com/HKUDS/nanobot/pull/4351)): The OpenAI-compatible endpoint returned hardcoded zero usage, breaking billing integrations. Mistral's API has strict requirements that the shared OpenAI adapter doesn't handle. Users expect provider-agnostic compatibility but hit edge cases.

4. **Security-adjacent data leakage** ([#4345](https://github.com/HKUDS/nanobot/issues/4345)): The image-stripping fallback leaks local file paths into the model prompt. Users running with local image files don't expect their filesystem paths to be exposed to the LLM.

### Use Cases Observed
- **Telegram bot runtime** with multi-model failover (DeepSeek primary)
- **OpenAI-compatible API serving** with downstream billing/metering
- **WhatsApp bridge** with voice note transcription
- **Scheduled monitoring jobs** that should stay quiet when nothing to report
- **Enterprise deployments** needing agent action audit trails

### Satisfaction Signals
- High PR volume and diverse contributors suggest the project is responsive and welcoming.
- Several issues have fix PRs already open or merged within days, indicating good turnaround.
- The stale-tagging of #4322 is a minor negative signal — users may feel ignored on merge-related regressions.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| # | Issue | Age | Risk | Recommendation |
|---|-------|-----|------|----------------|
| [#4322](https://github.com/HKUDS/nanobot/issues/4322) | NameError: 'session_key' after merge | 3 days, stale-tagged | **High** — startup crash | Unstale and prioritize. This is a regression from a merge commit that likely affects anyone merging main. Needs a targeted fix or at minimum a documented workaround. |
| [#4287](https://github.com/HKUDS/nanobot/issues/4287) | Empty model responses not triggering fallback | 6 days | **High** — silent production failure | Needs triage. The classification of empty responses as "non-fallbackable" may be by design, but users need clarity on whether this is a bug or expected behavior. |
| [#4303](https://github.com/HKUDS/nanobot/pull/4303) | MCP streamableHttp reconnection crash | 5 days | **Medium** — MCP server instability | PR is open and self-fixing. Needs review/merge. MCP server crashes affect users relying on external tool servers. |

### PRs Needing Review

| # | PR | Age | Notes |
|---|-----|-----|-------|
| [#4346](https://github.com/HKUDS/nanobot/pull/4346) | fix: mark stripped images as unviewable | 1 day | Closes #4345 — security-adjacent fix, should be fast-tracked. |
| [#4344](https://github.com/HKUDS/nanobot/pull/4344) | Refactor config and agent loop boundaries | 2 days | Architectural — needs careful review but unblocks future tool additions. |
| [#4320](https://github.com/HKUDS/nanobot/pull/4320) | feat(audit): agent action observability | 4 days | Substantial new feature — needs design review. |

---

*Data source: [HKUDS/nanobot](https://github.com/HKUDS/nanobot) — snapshot 2026-06-16. All links reference the HKUDS/nanobot repository.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent — Project Digest 2026-06-16

---

## 1. Today's Overview

Hermes Agent is experiencing very high community activity with **50 issues and 50 PRs updated in the last 24 hours** — a sign of an intensely engaged open-source contributor base and a rapidly evolving codebase. No new releases were published today; the project appears to be deep in a development cycle accumulating fixes across its gateway, desktop app, agent core, and multi-provider support surfaces. Issue health is mixed: while ~82% of trackable issues remain open, several high-engagement threads are receiving active attention from both community and maintainers, suggesting reasonable responsiveness. The volume of deskop/GUI-related bug reports continues to stand out as the fastest-growing pain point area.

---

## 2. Releases

**None in the last 24 hours.** No new version was tagged or published today. The current stable release cycle appears to be between major iterations.

---

## 3. Project Progress

### Merged / Closed Items (Today's Confirmed Closures)

| Ref | Title | Category | Detail |
|-----|-------|----------|--------|
| PR #46936 / PR #46937 | fix(background-review): verify skill notification loadability | Agent / Skills | Two PRs merged/opened today addressing the high-comment **#46897**: the background review loop now verifies a skill is loadable from the session's search root before announcing "Skill created" to the user. Both PRs target the same root cause — `ContextVar` isolation in daemon threads. |
| PR #46945 | fix(delegation): forward background flag in agent dispatch | Agent / Delegation | Fixes **#46944** — `delegate_task(background=True)` was silently demoted to `queue`, blocking user interrupts. The `background` flag is now correctly forwarded through `AIAgent._dispatch_delegate_task()`. |
| PR #46943 | fix: async subagent background=True drops user interrupts to queue | Agent / Gateway / Delegation | Companion fix for the same underlying issue as **#46945** — ensures busy_input_mode='interrupt' is preserved for background subagents. |
| PR #46946 | fix: reuse Bedrock prompt cache prefixes | Agent / Provider | Optimizes Bedrock API usage by caching Anthropic tool schemas and splitting system prompts into stable/volatile segments for prompt caching. |
| Issue #7237 | `[CLOSED]` Response truncated due to output length limit | Bug (Closed) | Long-running, highly-commented (50 comments, 6 👍) error where long-form responses are mid-stream truncated. Closed today; resolution details likely involve output-streaming or token-limit adjustments. |
| Issue #9148 | `[CLOSED]` `/model` picker shows 0 models for custom_providers | Bug (Closed) | Custom provider models defined via `models:` dict were invisible in the `/model` picker. Closed today. |
| Issues #46889, #46593 | `[CLOSED]` Kanban protocol violation false-positive | Bug (Closed) | Duplicate closures — worker exit without calling `kanban_complete` no longer raises misleading "protocol violation" errors. |

### Actively Developing (Open PRs Worth Watching)

- **PR #46942** — feat(sisters): Introduces a 12-sister identity registry with `hermes sister` CLI commands and delegation-to-sister plumbing. A significant UX expansion for multi-persona workflows.
- **PR #34603** — feat: HTML email delivery for cron jobs and `send_message`. Enables end-to-end HTML email rendering.
- **PR #43929** — fix(whatsapp): Honor group allowlist. Aligns group message filtering with sender allowlist policies.
- **PR #11236** — fix: Wire `on_pre_compress()` into summary prompt. Addresses context loss during compaction — important for long-session reliability.
- **PR #4684** — feat(memory): Configurable background memory/skill notification modes (off/quiet/verbose). Driven by **#46908**.

---

## 4. Community Hot Topics

### 🔥 Highest Engagement (by comments + reactions)

| Rank | Ref | Comments | 👍 | Summary |
|------|------|----------|-----|---------|
| 1 | **#7237** [CLOSED today] | 50 | 6 | `Response truncated due to output length limit` — the single most-discussed issue. Affects long-form output on Telegram, Discord, Slack gateways. Users need overflow-safe streaming. |
| 2 | **#40187** | 8 | 0 | `hermes update / hermes desktop` fails to compile Electron app on macOS. Rolldown bundling errors with `@assistant-ui/tap`. Native-desktop users blocked from upgrading. |
| 3 | **#46897** → PRs #46936, #46937 | 2 | 0 | Background-review self-improvement claims "Skill created" without verifying loadability. Two competing fix PRs merged/opened today. |
| 4 | **#41222** | 3 | 2 | Request to integrate Kanban Board into Desktop App to avoid CLI/desktop context switching for multi-agent workflows. |
| 5 | **#38855** | 4 | 0 | Desktop Working Directory setting overridden by stale `localStorage` — config and UI state are out of sync. |
| 6 | **#40480** | 3 | 0 | Custom provider models work on CLI but disappear from Desktop model dropdown. |

### Underlying Needs Analysis

- **Desktop-app parity** is the dominant theme: users expect feature and model parity between CLI and GUI, and failures in local directory sync, model visibility, and build compilation are eroding trust in the desktop experience.
- **Background process trust**: Users want the self-improvement / background review system to be reliable and honest — false "Skill created" notifications (#46897) and interrupt-dropping behavior for background subagents (#46944/46943) undermine confidence in agent autonomy.
- **Long-running task reliability**: From context bleed after gateway restart (#46934) to response truncation (#7237), the platform is under pressure from users running extended multi-turn sessions.

---

## 5. Bugs & Stability

### Ranked by Severity

#### 🔴 P1 / Critical

| Ref | Description | Status | Fix Available? |
|-----|-------------|--------|----------------|
| **#46675** | Max OAuth requests rejected (HTTP 400) due to single-underscore `mcp_` tool-name prefix | OPEN | No PR yet — affects all Anthropic Claude Max users with MCP tools |

#### 🟠 P2 / High

| Ref | Description | Status | Fix Available? |
|-----|-------------|--------|----------------|
| **#46934** | Stale `resume_pending` sessions bypass idle reset, causing context bleed after gateway restart | OPEN | No PR yet |
| **#46841** | Desktop build fails with Rolldown bundling error (`./react-shim` not exported from `@assistant-ui/tap`) | OPEN | No PR yet |
| **#44888** | Long shell commands truncated in Desktop approval dialog — no way to view full command before approving | OPEN | No PR yet |
| **#32574** | No liveness watchdog for zombie gateway adapter connections (Discord, etc.) | OPEN | No PR yet |
| **#46897** | Background-review falsely reports "Skill created" when skill isn't loadable | OPEN | ✅ PRs #46936, #46937 |
| **#46944** | `delegate_task(background=True)` drops user interrupts to queue | OPEN | ✅ PRs #46945, #46943 |
| **#31246** | MCP server misconfiguration is silent — missing SDK / connection failures only at DEBUG level | OPEN | No PR yet |
| **#46917** | Agent cannot respond with silence — forced response even when zero output is desired | OPEN | No PR yet |
| **#46918** | Desktop cron "Trigger now" button doesn't execute jobs | OPEN | No PR yet |
| **#46941** | Terminal commands truncated in code blocks on Feishu/Lark and other messaging platforms | OPEN | No PR yet |
| **#46756** | MiMo 400 fails with "text is not set" when `web_extract` returns empty content (MCP timeout) | OPEN | No PR yet |
| **#46891** | Credential pool retry-delay parser doesn't handle absolute-datetime rate-limit messages (Z.ai / others) | OPEN | No PR yet |

#### 🟡 P3 / Medium-Low

| Ref | Description | Status |
|-----|-------------|--------|
| **#40187** | macOS desktop build/compilation failure | OPEN |
| **#38855** | Desktop working directory stale `localStorage` override | OPEN |
| **#40480** | Custom provider models missing from Desktop dropdown | OPEN |
| **#46753** | LLM health-check crons silently report "ok" on tool-call errors — needs documentation | OPEN |

---

## 6. Feature Requests & Roadmap Signals

| Ref | Request | Likelihood for Next Version | Rationale |
|-----|---------|---------------------------|-----------|
| **#46908** | Config gate to suppress background-review self-improvement notifications | **High** | Already has companion PR (#4684) implementing `display.memory_notifications` with off/quiet/verbose modes. Issues and PRs are aligned. |
| **#41222** | Integrate Kanban Board into Desktop App | **Medium** | Has community support (3 comments, 2 👍). Clear UX gap — daily multi-agent users forced into CLI/desktop toggle. |
| **#44761** | Global `max_concurrent_usage` lock for self-hosted LLMs | **Medium** | Addresses real operational pain for self-hosters. Low complexity to implement. |
| **#46942** | Sister registry & delegation plumbing | **Medium** | PR is opened and active today, but covers a large surface (12 personas, CLI commands, system prompt wiring). Needs careful review. |
| **#46903** | Document `hard_stop_enabled=false` implications for gateway/server deployments | **Low-Medium** | Documentation-only; easy win but lower urgency. |
| **#46880** | Dual Sub-Agent Model Configuration (per task-type) | **Low** | Niche power-user feature. No maintainer traction signal yet. |
| **#46877** | Per-provider custom HTTP headers in `providers:` config block | **Medium** | Several enterprise-use providers require custom headers; `model.default_headers` global fallback is insufficient. |

### Predicted Next Release Focus
The convergence of background-review fixes (#46936, #46937), notification config (#4684), Bedrock caching (#46946), and delegation forwarding (#46945) suggests the upcoming release will center on **agent reliability and observability** — particularly making background processes honest, making delegation semantics correct, and reducing wasted API costs through prompt caching.

---

## 7. User Feedback Summary

### Satisfaction Signals
- **Issue #7237 closed** after 50 comments and nearly 2 months — high-engagement issue finally resolved. Users who upvoted (6 👍) will see relief.
- Rapid turnaround on **#46897** (skill creation false positive): two PRs opened and one merged on the same day the issue was filed.
- **#9148 closed**: Custom provider model picker fix resolves a long-standing UX frustration (2 months old).

### Pain Points & Frustration Areas
- **Desktop app instability** is the #1 frustration cluster: compilation failures (#40187, #46841), stale workspace state (#38855), model dropdown gaps (#40480), truncation in approval dialogs (#44888), broken cron triggers (#46918), and Explorer refresh bugs (#46068). Users relying on the GUI experience feel second-class compared to CLI users.
- **Silent failures** erode trust: MCP misconfiguration going undetected (#31246), background-review reporting false successes (#46897), health-check crons silently masking errors (#46753). Users request louder, more transparent failure signals.
- **Zombie/stale state** after restarts (#46934) and zombie gateway connections (#32574) indicate the system needs better crash-recovery hygiene.
- **Anthropic OAuth users were hit by a P1** (#46675) that likely affected many users at once without warning — third-party OAuth tokens failing with a 400 is a high-visibility auth regression.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Ref | Age | Category | Why It Needs Attention |
|-----|-----|----------|------------------------|
| **#31246** | ~23 days | MCP / Gateway | Silent MCP server failures with no user-visible error. Affects discoverability of misconfigured MCP. Easy to fix (bubble up to INFO/WARN), no PR exists. |
| **#32574** | ~21 days | Gateway / Reliability | Zombie adapter detection — affects Discord, potentially other platforms. Architectural gap, not a quick fix, but should be designed before users lose trust in gateway uptime. |
| **#46675** | 2 days | Auth / Anthropic | **P1** — single-underscore `mcp_` prefix causes all Anthropic CIaude Max OAuth requests with tools to be rejected. Affects a popular provider. Needs urgent triage. |
| **#46917** | 1 day | Agent / UX | Agent cannot remain silent. Affects "being" users who assign roles with silence expectations. Low severity but signals a deeper agent instruction-fidelity issue. |
| **PR #41640** | 8 days | Gateway / Mattermost | Hardening Mattermost thread routing — stale PR with no maintainer comment. Mattermost users may be siloed. |
| **PR #30529** | 24 days | Gateway / BlueBubbles TTS | Improving voice message uploads for BlueBubbles/iMessage. Long-open PR fixing audio format compatibility. |
| **PR #4684** | ~6 days | Memory / Notifications | Companion to feature request #46908. Config-driven notification suppression for background memory/skill updates. Aligned with community request but awaiting review. |

---

*Data source: github.com/nousresearch/hermes-agent | Digest generated 2026-06-16 | OWL Project Intelligence Report*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-16

---

## 1. Today's Overview

PicoClaw shows sustained community activity with 12 PRs updated and 3 issues addressed in the last 24 hours. The project advanced a nightly build (`v0.2.9-nightly.20260615.13a38bd1`) alongside notable security work and a wave of code-quality fixes from a single contributor. Two PRs were closed/merged, while 10 remain open — most marked stale — suggesting the review bottleneck is the primary constraint on velocity. One critical security issue around launcher access control was resolved, and community contributions continue to surface platform-specific bugs (Windows QQ channel, RISC-V .deb). Overall project health is active but PR throughput may need attention.

---

## 2. Releases

**Nightly Build** — `v0.2.9-nightly.20260615.13a38bd1`
- Automated build flagged as potentially unstable; intended for testing.
- Full changelog: [compare v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
- Likely includes the closed security PR (#3069) and the merged PR #3126 for improved launcher bypass diagnostics. Users should exercise caution in production deployments.

---

## 3. Project Progress (Merged / Closed PRs)

| PR | Contribution |
|---|---|
| [#3069](https://github.com/sipeed/picoclaw/issues/3069) → [#3126](https://github.com/sipeed/picoclaw/pull/3126) | **Security fix: Launcher `allowed_cidrs` bypass diagnostics improved.** Tracks `allow_localhost_bypass` state more precisely (omitted/explicit/null) and emits clearer startup logs when public or non-loopback host bindings can still bypass CIDR restrictions via same-host proxies or tunnels. This partially addresses the underlying architectural issue without a full reverse-proxy-aware redesign. |
| [#3097](https://github.com/sipeed/picoclaw/pull/3097) | **UX: Shift+Enter hint below chat composer.** Adds a visible keyboard shortcut hint for newlines when the user has typed content, reusing localized text and keeping the input layout clean. |

The today-open PRs (#3127–#3132) form a focused hygiene push by `chengzhichao-xydt` — six PRs in one day addressing unchecked type assertions, implicit `Close()` error discards, and panic recovery across core goroutines. These are low-risk, high-value code-quality improvements that should be safe to merge quickly.

---

## 4. Community Hot Topics

### Most active by engagement

| Item | Comments | Analysis |
|---|---|---|
| **Issue [#2887](https://github.com/sipeed/picoclaw/issues/2887)** — .deb on RISC-V non-functional with OpenAI models | 10 | Highest comment count. Reflects a real portability gap: users deploying PicoClaw on RISC-V SBCs (Sipeed's core hardware niche) cannot use OpenAI models out of the box. This is strategically important for the project's embedded-first identity. Closed as stale, so the underlying frustration likely persists. |
| **Issue [#3015](https://github.com/sipeed/picoclaw/issues/3015)** — QQ channel fails on Windows after release build | 3 | Windows users of the QQ bot channel hit token retrieval timeout from `bots.qq.com`. Suggests either a networking/configuration regression in the Windows build or documentation gap. Remains open and stale. |

**Underlying needs:** There is a clear pattern of **platform-specific friction** — RISC-V packaging, Windows networking — that reflects PicoClaw's ambition to be a universal gateway but also reveals gaps in CI/testing coverage for non-Linux-x86_64 environments.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|---|---|---|---|
| 🔴 **High** | [#3069](https://github.com/sipeed/picoclaw/issues/3069) — Launcher `allowed_cidrs` bypassable via same-host reverse proxy (trusts `RemoteAddr`) | ✅ Closed | [#3126](https://github.com/sipeed/picoclaw/pull/3126) merged with diagnostics improvement. Note: improved diagnostics ≠ architectural fix. Full reverse-proxy-aware trust model (e.g., `X-Forwarded-For` parsing) still needed. |
| 🟡 **Medium** | ~~[#2887](https://github.com/sipeed/picoclaw/issues/2887)~~ — .deb on RISC-V broken with OpenAI models (closed stale) | ⚠️ Closed stale | None. Likely unresolved. |
| 🟡 **Medium** | [#3015](https://github.com/sipeed/picoclaw/issues/3015) — QQ channel connection fails on Windows (stale) | ⚠️ Open | None yet. |
| 🟢 **Low** | Multiple unchecked type assertions, implicit Close() discards | Open | PRs [#3127–#3131](https://github.com/sipeed/picoclaw/pulls) address these comprehensively. |
| 🔴 **High** | Unrecoverable goroutine panics on core paths | Open | PR [#3132](https://github.com/sipeed/picoclaw/pull/3132) adds `defer-recover` to critical goroutines. **Recommend fast-tracking.** |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood of inclusion |
|---|---|---|
| **Telegram reply-as-mention** | [PR #2975](https://github.com/sipeed/picoclaw/pull/2975) (stale) | High — natural UX improvement for Telegram group chats. Small scope, clear value. |
| **Shift+Enter hint in chat composer** | [PR #3097](https://github.com/sipeed/picoclaw/pull/3097) ✅ merged | Done. |
| **Full JSONL history for session detail** | [PR #3047](https://github.com/sipeed/picoclaw/pull/3047) (stale) | Medium — useful for debugging and archival. |
| **Full reverse-proxy support in launcher** | Tech debt from #3069/#3126 | Medium — will likely grow in urgency as more users deploy behind proxies/Tailscale/Cloudflare tunnels. |

---

## 7. User Feedback Summary

| Pain Point | Sentiment | Evidence |
|---|---|---|
| RISC-V + OpenAI model incompatibility | 😞 Frustration | 10 comments on #2887, closed as stale without resolution. This directly impacts Sipeed's hardware customer base. |
| Windows QQ channel token timeout | 😞 Frustration | Issue #3015. Windows deployment is fragile. |
| Launcher security posture | 🟡 Concern | Issue #3069 shows savvy users are auditing the security model. Merged diagnostics PR is welcome but partial. |
| General UX (chat composer) | 😊 Positive | Shift+Enter hint (PR #3097) addresses a discoverability gap. |
| Code quality | 🟢 Positive | Wave of hygiene PRs (#3126–#3132) shows contributors are investing in robustness. |

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age / Flag | Why it matters |
|---|---|---|
| **[Issue #3015](https://github.com/sipeed/picoclaw/issues/3015)** — QQ channel Windows failure | Created 2026-06-06, stale | Windows is a major desktop platform; bot channel functionality is core value. Needs triage or reproduction steps request. |
| **[Issue #2887](https://github.com/sipeed/picoclaw/issues/2887)** — RISC-V .deb + OpenAI | Created 2026-05-17, closed stale | Embedded/RISC-V is PicoClaw's identity. Reopen or explicitly track elsewhere. |
| **[PR #2975](https://github.com/sipeed/picoclaw/pull/2975)** — Telegram reply-as-mention | Created 2026-05-30, stale | Small, valuable, clean. Should be reviewed or closed explicitly. |
| **[PR #3047](https://github.com/sipeed/picoclaw/pull/3047)** — Full JSONL session history | Created 2026-06-07, stale | Useful for debugging. Requires review of the custom JSONL reader implementation. |
| **[PR #3054](https://github.com/sipeed/picoclaw/pull/3054)** — LINEChannel sync.Map assertions | Created 2026-06-08, stale | Prevents panics in LINE channel. Low risk, should merge. |

---

*Generated on 2026-06-16 | Data window: last 24h | OWL — AI Agent & Personal AI Assistant Open-Source Project Analyst*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-16

---

## 1. Today's Overview

NanoClaw saw a highly active day with **12 pull requests** updated and **3 merged/closed**, but **zero new issues** filed in the past 24 hours. The project is in a strong execution phase: contributors are aggressively fixing bugs across multiple communication channels (WhatsApp, Signal, Slack), expanding MCP (Model Context Protocol) capabilities, and hardening container infrastructure. The absence of new issues is notable — it may indicate that active contributors are focused on shipping fixes faster than users can report problems, or that the current user base is primarily self-sufficient. No new releases were published, suggesting the merged PRs are accumulating toward an upcoming version bump.

---

## 2. Releases

**None.** No new releases were published today. The 3 closed PRs (including OneCLI gateway version pinning fixes and a Codex archiving bugfix) appear to be candidates for the next release cycle. A changelog clarifying OneCLI gateway upgrade semantics (`#2775`) was also merged, further signaling that a release is being groomed.

---

## 3. Project Progress

Three PRs were merged/closed today:

| PR | Author | Summary | Significance |
|---|---|---|---|
| **[#2774](https://github.com/nanocoai/nanoclaw/pull/2774)** – feat(update-nanoclaw): upgrade OneCLI gateway when pinned version moves | Koshkoshinsk | Ensures the running OneCLI gateway and CLI binaries are upgraded when `versions.json` pin changes, preventing silent version skew | Critical reliability fix — prevents runtime failures after updates |
| **[#2772](https://github.com/nanocoai/nanoclaw/pull/2772)** – fix(codex): per-thread conversation archive (CDX-004) | Koshkoshinsk | Keys conversation archives on thread/continuation ID instead of writing one file per exchange | Fixes fragmented Codex conversation history — data integrity improvement |
| **[#2773](https://github.com/nanocoai/nanoclaw/pull/2773)** – docs(add-codex): drop redundant TTY warning in auth note | Koshkoshinsk | Removes a duplicated sentence from the add-codex skill documentation | Minor documentation cleanup |

The standout merged PR is **#2774** — it closes a real silent-failure gap where `update-nanoclaw` would skip the OneCLI gateway upgrade, causing potential runtime incompatibilities. This was paired with a docs PR (#2775) that reclassified the OneCLI breaking-change notice as operator-driven, reducing user confusion during upgrades.

---

## 4. Community Hot Topics

Most active open PRs by engagement and scope:

| PR | Topic | Analysis |
|---|---|---|
| **[#2776](https://github.com/nanocoai/nanoclaw/pull/2776)** – feat: support remote HTTP/SSE MCP servers | Extends MCP server config beyond stdio to support remote HTTP/SSE endpoints with custom headers | Reflects a broader industry trend toward remote MCP servers; enables integration with hosted tool ecosystems without local process management |
| **[#2778](https://github.com/nanocoai/nanoclaw/pull/2778)** – fix(whatsapp): route inbound media through shared session inbox | Fixes WhatsApp media (images, video, audio, docs) never reaching agents due to path mounting mismatch | A critical UX fix — media delivery is a core expectation for any messaging-integrated AI agent |
| **[#2627](https://github.com/nanocoai/nanoclaw/pull/2627)** – fix(reactions): align MCP add_reaction schema with channel reality | Fixes the `add_reaction` MCP tool which silently failed on most channels expecting unicode emoji vs. Slack shortcodes | Addresses a cross-channel compatibility bug (closes #2569) that affected all platforms except Slack |
| **[#2771](https://github.com/nanocoai/nanoclaw/pull/2771)** – perf(container): --shm-size=1g + --init for agent containers | Adds shared memory and init process to Docker agent containers shipping headless Chromium | Prevents Chromium crashes in sandboxed agents — a performance and stability improvement |

**Underlying needs detected:** The community is heavily invested in **channel reliability** (WhatsApp media, Signal restarts, cross-channel reactions) and **MCP ecosystem extensibility** (remote HTTP/SSE servers, Strava integration). This signals NanoClaw's positioning shifting from a local-tool-focused agent framework toward a broader **integration platform** where the agent must reliably handle media, remote tool servers, and diverse messaging backends.

---

## 5. Bugs & Stability

| Severity | PR / Issue | Description | Status |
|---|---|---|---|
| 🔴 **High** | [#2778](https://github.com/nanocoai/nanoclaw/pull/2778) | WhatsApp inbound media (images, video, audio, docs) never reached the agent — `downloadInboundMedia` wrote to a host path not mounted in agent containers | OPEN — fix proposed, not yet merged |
| 🔴 **High** | [#2626](https://github.com/nanocoai/nanoclaw/pull/2626) | Signal `restartService` silently fails when plist is unloaded — `launchctl kickstart -k` no-ops with `stdio: 'ignore'` (closes #2583) | OPEN — fix proposed |
| 🟡 **Medium** | [#2759](https://github.com/nanocoai/nanoclaw/pull/2759) | Budget/budget-exhausted LLM turns are dropped silently instead of delivered as error turns to the agent (closes #2751) | OPEN — fix proposed |
| 🟡 **Medium** | [#2627](https://github.com/nanocoai/nanoclaw/pull/2627) | MCP `add_reaction` passes emoji verbatim — breaks on all channels except Slack which expects unicode, not shortcodes (closes #2569) | OPEN — fix proposed |
| 🟡 **Medium** | [#2628](https://github.com/nanocoai/nanoclaw/pull/2628) | `--id` flag in `ncl groups create` is silently ignored — IDs overridden by `randomUUID()` (closes #2390) | OPEN — fix proposed |
| 🟢 **Low** | [#2771](https://github.com/nanocoai/nanoclaw/pull/2771) | Agent containers lack adequate shared memory (64MB default) for headless Chromium — risk of renderer crashes | OPEN — fix proposed |

**Key observation:** All six bugs have open fix PRs awaiting review or merge. The project appears to be in a healthy contributor backlog state with fixes written but not yet landing. The WhatsApp media bug (#2778) is the most impactful — it completely breaks media handling on one of NanoClaw's core supported channels.

---

## 6. Feature Requests & Roadmap Signals

| Direction | Evidence | Prediction |
|---|---|---|
| **Remote MCP ecosystem** | PR [#2776](https://github.com/nanocoai/nanoclaw/pull/2776) adds HTTP/SSE transport; PR [#2777](https://github.com/nanocoai/nanoclaw/pull/2777) adds Strava via official MCP endpoint | The next release will likely prominently feature "remote MCP server support" as a headline capability, with Strava as a showcase integration |
| **Multi-channel reliability** | Active PRs fixing WhatsApp media, Signal restarts, cross-channel reactions | A channel-reliability release themed around "messaging channel hardening" should be expected |
| **Operator experience** | PRs #2774 and #2775 clarify OneCLI gateway upgrade semantics | Improved first-run and upgrade UX will be part of the next release narrative |
| **Container stability** | PR [#2771](https://github.com/nanocoai/nanoclaw/pull/2771) for Chromium in containers | Likely to be bundled as part of container/runtime stability improvements in the next release |

---

## 7. User Feedback Summary

Direct user-reported pain points captured in open issues referenced by PRs:

- **Broken media in WhatsApp**: Inbound images, video, audio, and documents silently failed to reach agents — a core functionality regression for any WhatsApp-deployed NanoClaw instance. Reported via PR #2778 fixing the underlying path mismatch.
- **Silent Signal service failures**: After running cleanup or unload operations, setting up Signal again reports success but fails silently (issue #2583). Users would only discover the failure when messages stopped flowing.
- **Reaction cross-platform incompatibility**: Users expected `add_reaction` to work uniformly across WhatsApp, Discord, Telegram, Teams, and Google Chat — it only worked on Slack (issue #2569). This is a significant expectation mismatch.
- **CLI group ID override ignored**: Users passing `--id daily-os` expected it to be used; it was silently discarded in favor of a UUID (issue #2390). This breaks automated setups and scripting.
- **Budget errors invisible**: When an LLM provider returns a budget/token exhausted error, it was silently dropped — the agent never surfaced it to the user, making billing issues hard to diagnose (issue #2751).

**Satisfaction signal**: The fact that all these bugs have fix PRs (many from community contributors, not just maintainers) suggests the user community is actively invested but expects faster review/merge cycles. No explicit complaints about project direction — friction points are operational/practical.

---

## 8. Backlog Watch

Long-unanswered items needing maintainer attention:

| PR / Issue | Age | Description | Risk |
|---|---|---|---|
| **#[2628](https://github.com/nanocoai/nanoclaw/pull/2628)** | 20 days (May 27) | `--id` flag ignored in `ncl groups create` — closes #2390 | Older than most open PRs; blocks scripted/automated setups |
| **#[2627](https://github.com/nanocoai/nanoclaw/pull/2627)** | 20 days (May 27) | Cross-channel `add_reaction` bug fix — closes #2569 | Core MCP tool broken on 5+ channels |
| **#[2626](https://github.com/nanocoai/nanoclaw/pull/2626)** | 20 days (May 27) | Signal `restartService` silent failure — closes #2583 | Silent failures erode trust in the setup wizard |
| **#[2759](https://github.com/nanocoai/nanoclaw/pull/2759)** | 2 days (Jun 14) | Budget errors dropped silently — closes #2751 | Recent but impactful for users monitoring costs |

**Recommendation:** The three May-27 PRs (#2626, #2627, #2628) authored by contributor `eldar702` have been open for 20 days with no visible maintainer review. These are channel-critical fixes (Signal, reactions, CLI). Even a brief maintainer triage comment would reduce contributor uncertainty. PR #2759 (budget errors) is newer but addresses a significant observability gap — billing silences can lead to unexpected charges and user frustration.

---

*Generated by OWL — This digest reflects publicly available data from the NanoClaw open-source project as of 2026-06-16 (US Pacific).*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is a structured analysis of the NullClaw project based on the GitHub data from 2026-06-16.

# NullClaw Project Digest - 2026-06-16

## 1. Today's Overview
NullClaw shows moderate development activity with 3 updated issues and 1 dependency-focused pull request today. The project is in user-facing troubleshooting mode, with the community reporting configuration errors and integration problems with local models (Ollama) and major cloud providers. Notably, the project now has 3 active open issues with no maintainer responses visible in the data, suggesting a potential need for increased conflict resolution capacity. The lack of new releases indicates that development resources are likely focused on stability and infrastructure maintenance rather than innovation.

## 2. Releases
No new releases were reported for today. The project maintenance appears focused on maintaining stability through the open-source pipeline visible in today's dependent pull request.

## 3. Project Progress
- **PR #956**: A routine dependency upgrade of the base Docker Alpine image from 3.23 to 3.24 was submitted by the Dependabot service. This request is still open and awaiting review.

**Status Summary**: Infrastructure maintenance (Docker environment), but no merged code changes.

## 4. Community Hot Topics
1. **[Issue #957: Rate limit issue](https://github.com/nullclaw/nullclaw/issues/957)** (1 comment)
   - **Summary**: A user gets a "config reader hit a rate limit" error when using NullClaw as a JSON-outputting agent runtime without memory.
   - **Needs**: The user wants to understand the configuration governing this limit and how to modify the threshold.
2. **[Issue #952](https://github.com/nullclaw/nullclaw/issues/952)**: **[bug] Local model using ollama returns incomplete answers** (1 comment)
   - **Underlying Need**: This suggests a potential streaming or string truncation problem NullClaw might have when consuming the Ollama API, or specific model behavior differences.

## 5. Bugs & Stability
- **Severity: Medium - Incomplete Responses (Ollama Integration)**
  - **Issue**: [#952 [bug] Local model using ollama returns incomplete answers](https://github.com/nullclaw/nullclaw/issues/952)
  - **Impact**: Affects users attempting to use open source models (Gemma) locally, a critical use case for privacy-focused or offline development.
  - **Fix PR Status**: None identified.
- **Severity: Low-Medium - Configuration Threshold Clarity**
  - **Issue**: [#957: Rate limit issue](https://github.com/nullclaw/nullclaw/issues/957)
  - **Impact**: Generates unexpected errors that block users from operating the tool for general development.
  - **Fix PR Status**: None identified.

## 6. Feature Requests & Roadmap Signals
- **Enhancement Request**: [#955: Identity based authentication support for Azure OpenAI LLM Provider](https://github.com/nullclaw/nullclaw/issues/955)
  - **Details**: Users want to use `DefaultTokenCredential` (Azure CLI login credentials) instead of standard API keys to comply with strict enterprise security policies.
  - **Prediction**: Enterprise-oriented cloud provider authentication is a rapidly growing requirement. If NullClaw targets enterprise users, this feature will be needed very soon.

## 7. User Feedback Summary
- **Pain Points**:
    - **Documentation**: Users struggle with specific configuration thresholds (e.g., rate limits in issue #957).
    - **Integration Compatibility**: Compatibility issues with popular local model managers like Ollama (issue #952).
    - **Enterprise Compliance**: Azure OpenAI integration must support identity-based access, not just API keys (issue #955).
- **Use Cases**: Local LLM usage is critical for some NullClaw users due to high data sensitivity (local development with Gemma on Ollama) and enterprise compliance requirements for Azure OpenAI. Zero tolerance for data leakage at runtime is a recurring theme.

## 8. Backlog Watch
All three issues updated within the last 24 hours remain open and appear to require maintainer intervention:
-   **[Issue #957](https://github.com/nullclaw/nullclaw/issues/957)**: Needs a documentation clarification or code configuration fix.
-   **[Issue #952](https://github.com/nullclaw/nullclaw/issues/952)**: Requires triaging the local Ollama integration for incomplete responses.
-   **[Issue #955](https://github.com/nullclaw/nullclaw/issues/955)**: Needs architectural consideration for Azure OpenAI identity auth. Note how these align with the local model usage (Ollama) and enterprise needs (Azure identity auth) highlighted in the feedback section.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-16

**Repository:** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Today's Overview

IronClaw is in a period of intense active development with **47 issues** (34 open, 13 closed) and **50 pull requests** (27 open, 23 merged/closed) updated in the past 24 hours — one of the highest-activity days visible in the dataset. The project is clearly in a major stabilization and feature-expansion phase for the **Reborn** WebUI v2 runtime, with a dense cluster of bug reports around OAuth/credential scoping, extension lifecycle UX, approval/resume semantics, and authentication flows. No new releases were published today, but several large PRs merged or progressed that address foundational blockers. The volume of new issues from multiple distinct contributors (especially `sunglow666` with 10+ reports) indicates a vigorous QA/testing cycle is underway, with the core maintainers responding rapidly with both fixes and architectural follow-ups.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Project Progress — PRs Merged or Closed Today

| # | PR | Summary |
|---|---|---|
| [#4871](https://github.com/nearai/ironclaw/pull/4871) | `feat(attachments): image attachment support for vision-capable models` | **Key merge.** Images attached in Reborn now reach vision-capable LLMs as real multimodal content instead of text pointers. Closes the gap identified in [#4644](https://github.com/nearai/ironclaw/issues/4644). Follow-up PR [#4945](https://github.com/nearai/ironclaw/pull/4945) already open for post-merge review items. |
| [#4780](https://github.com/nearai/ironclaw/pull/4780) | `Steer routine delivery through outbound targets` | Extends the automation/outbound delivery model so the agent discovers available delivery targets (e.g., Slack) before creating routines — reducing "unavailable" errors. |
| [#4559](https://github.com/nearai/ironclaw/pull/4559) | `feat(traces): agent-driven Trace Commons onboarding via invite link` | Onboarding simplified from ~15 CLI env vars to pasting a single invite link into chat. |
| [#4936](https://github.com/nearai/ironclaw/pull/4936) | `ci(bench): /benchmark now supports ironclaw-reborn framework` | Enables maintainers to trigger reborn-runtime benchmark suites via PR comments. Small but important for CI coverage of the new stack. |

---

## 4. Community Hot Topics — Most Active Issues & PRs

### Issues by Comment Count (most-discussed)

| # | Issue | Comments | Core Tension |
|---|---|---|---|
| [#4825](https://github.com/nearai/ironclaw/issues/4825) | [CLOSED] Reborn: persist "always allow" approvals across threads | 3 | Users expect "always allow" to be durable, but thread-scoping breaks this assumption. Now spawning follow-up work [#4935](https://github.com/nearai/ironclaw/issues/4935), [#4939](https://github.com/nearai/ironclaw/pull/4939). |
| [#4908](https://github.com/nearai/ironclaw/issues/4908) | Google Calendar extension shows "Activate" after already active | 3 | Extension state machine inconsistency between the Installed page and configuration dialog. |
| [#4907](https://github.com/nearai/ironclaw/issues/4907) | Run fails after successful Google OAuth instead of resuming | 2 | The resume-after-auth gate is broken — run terminates rather than continuing. Part of a broader auth-gate family of bugs. |
| [#4880](https://github.com/nearai/ironclaw/issues/4880) | Automate Code Review and review comment resolution | 2 | Community-suggested feature: AI-powered PR review within IronClaw repo itself. Meta-use of the agent on its own codebase. |
| [#4764](https://github.com/nearai/ironclaw/issues/4764) | Denying shell approval leaves tool invocation pending with no feedback | 2 | Approval denial UX leaves users with no indication of what happened — the silents. |
| [#4761](https://github.com/nearai/ironclaw/issues/4761) | Agent stops after repeated tool failures instead of recovering | 2 | Resilience gap — agent gives up rather than retrying or reporting. |
| [#4644](https://github.com/nearai/ironclaw/issues/4644) | Universal attachments across all channels (XL scope) | 2 | Foundational epic spanning v1/v2/Reborn attachment pipeline unification. Being resolved incrementally via PRs [#4871](https://github.com/nearai/ironclaw/pull/4871), [#4902](https://github.com/nearai/ironclaw/pull/4902). |

### PRs to Watch

| # | PR | Why It Matters |
|---|---|---|
| [#4944](https://github.com/nearai/ironclaw/pull/4944) | Fix: surface auth-gate denial to model instead of re-prompt loop | Fixes the infinite-loop-on-deny bug for OAuth gates — directly addresses [#4764](https://github.com/nearai/ironclaw/issues/4764) family. |
| [#4841](https://github.com/nearai/ironclaw/pull/4841) | Eliminate "run-borking" terminal errors — failure explanation + retryable runs | XL initiative to make every run-terminal error recoverable or explained. Major UX improvement for Reborn reliability. |
| [#4939](https://github.com/nearai/ironclaw/pull/4939) | Credentials are owner-scoped, not thread-scoped (A+B+C) | Fixes the root cause family behind [#4825](https://github.com/nearai/ironclaw/issues/4825) — credentials leaking across threads. |
| [#4933](https://github.com/nearai/ironclaw/pull/4933) | Downloadable project files in WebChat v2 | Agents can produce files (CSV, reports) and users can download them. Required for practical agent workflows. |
| [#4876](https://github.com/nearai/ironclaw/pull/4876) | Dependabot: 43 dependency updates | Includes `agent-client-protocol` 0.10.4 → 0.14.0 (breaking). Risk review needed. |

### Underlying Needs Analysis

The dominant theme across all hot threads is **Reborn runtime reliability around the approval/resume and OAuth/credential lifecycle**. Users are hitting a compounded problem: (1) OAuth flows complete but runs don't resume, (2) approvals don't persist across threads, (3) credential scoping is incorrectly thread-scoped, (4) denial gives no feedback, and (5) the extension state machine shows contradictory statuses. These are not isolated bugs — they are symptoms of an incomplete refactoring from a v1 permission model to a v2 owner-scoped model. The core team is aware and responding systematically (see {#4935, #4939, #4944} closing the loop). The secondary theme is **extension UX fragmentation** — users can't tell what to do next after installing an extension, and the setup flow spans 4+ unconnected UI surfaces.

---

## 5. Bugs & Stability — Ranked by Severity

### 🔴 High Severity (data loss, total failure, auth breakage)

| # | Issue | Description | Fix PR? |
|---|---|---|---|
| [#4907](https://github.com/nearai/ironclaw/issues/4907) | Run fails after successful Google OAuth | OAuth succeeds but run terminates instead of resuming. Affects all Google-connected extensions. | Related: [#4944](https://github.com/nearai/ironclaw/pull/4944) (same family) |
| [#4921](https://github.com/nearai/ironclaw/issues/4921) | Gmail extension fails before producing reply after auth | After successful Gmail OAuth, all Gmail prompts immediately fail. Railway QA. | None yet |
| [#4913](https://github.com/nearai/ironclaw/issues/4913) | Google Calendar auth not reused across conversations | Auth stored but new conversations still require re-OAuth. | Fix targeted by [#4939](https://github.com/nearai/ironclaw/pull/4939) |
| [#4825](https://github.com/nearai/ironclaw/issues/4825) | "Always allow" doesn't persist across threads | Closed, but root cause (#4825 family) drives active work. | [#4939](https://github.com/nearai/ironclaw/pull/4939) |
| [#4887](https://github.com/nearai/ironclaw/issues/4887) | MCP tool approval resume fails with stale input_ref | After approving a provider-backed MCP tool (e.g., `nearai.web_search`), resume fails before dispatch. | None yet |

### 🟡 Medium Severity (UX inconsistency, degradation)

| # | Issue | Description | Fix PR? |
|---|---|---|---|
| [#4928](https://github.com/nearai/ironclaw/issues/4928) | Notion OAuth redirects to localhost on Railway | Closed — deployment-specific callback URL misconfiguration. | Closed |
| [#4908](https://github.com/nearai/ironclaw/issues/4908) | Extension shows "Activate" despite being active | State inconsistency between Installed page and config dialog. | None yet |
| [#4942](https://github.com/nearai/ironclaw/issues/4942) | Tool call failures invisible until page reload | Failed tool calls only appear after re-fetch. Real-time feedback gap. | None yet |
| [#4857](https://github.com/nearai/ironclaw/issues/4857) | Clean state shows NEAR AI provider as Active (misleading) | UI shows ACTIVE on a provider with no credentials configured. | None yet |
| [#4761](https://github.com/nearai/ironclaw/issues/4761) | Agent stops after repeated tool failures | No recovery attempt; run silently terminates. | Related to [#4841](https://github.com/nearai/ironclaw/pull/4841) broader initiative |
| [#4764](https://github.com/nearai/ironclaw/issues/4764) | Shell denial gives no feedback | User clicks Deny, tool hangs with no explanation. | Directly addressed by [#4944](https://github.com/nearai/ironclaw/pull/4944) |
| [#4759](https://github.com/nearai/ironclaw/issues/4759) | Workspace path duplication | Closed. File paths like `workspace/workspace/demo/a.txt` created. | Closed |

### 🟢 Low Severity (cosmetic, edge case, resolved)

| # | Issue | Status |
|---|---|---|
| [#4917](https://github.com/nearai/ironclaw/issues/4917) | Automations never run, misleading status numbers | Closed (same-day) |
| [#4807](https://github.com/nearai/ironclaw/issues/4807) | `github.list_issues` returns PRs too | Closed |
| [#4800](https://github.com/nearai/ironclaw/issues/4800) | GitHub tool invocations remain RUN after denial | Closed |

---

## 6. Feature Requests & Roadmap Signals

| # | Request | Signal Strength | Likely Version |
|---|---|---|---|
| [#4880](https://github.com/nearai/ironclaw/issues/4880) | **Automated code review and comment resolution for PRs** | Medium-high — community-suggested meta-use case | Could be next minor if prioritized |
| [#4644](https://github.com/nearai/ironclaw/issues/4644) | **Universal attachments across all channels** | High — actively being implemented in waves (#4871 ✅, #4902 open, #4945 follow-up) | Already shipping incrementally |
| [#4933](https://github.com/nearai/ironclaw/pull/4933) | **Project file download in WebChat v2** | High — PR open, fundamental for agent utility | Next minor |
| [#4941](https://github.com/nearai/ironclaw/pull/4941) | **Slack personal (user-token) tool** | Medium — PR open, complements bot-token Slack tool | Next minor |
| [#4937](https://github.com/nearai/ironclaw/pull/4937) + [#4938](https://github.com/nearai/ironclaw/pull/4938) | **Reborn learning system** (memory documents + `/learn` command + persona) | Medium-high — multi-PR initiative, WS-1 and WS-2 open | Could land in a point release if WS-1 merged |
| [#4922](https://github.com/nearai/ironclaw/issues/4922) | **Extract local-dev capability composition out of hot paths** | Medium — refactoring to keep compilation/runtime clean | Architectural, no user-facing version |

**Prediction:** The next release will likely focus on **credential scoping fixes** (owner-scoped, not thread-scoped), **auth-gate denial surfacing**, and **project file downloads** — these are the highest-impact items with active PRs. The learning system is a strong candidate for a feature release if WS-1 and WS-2 merge cleanly.

---

## 7. User Feedback Summary

### Pain Points (Dissatisfaction)

- **OAuth is a minefield.** Users complete Google OAuth successfully, but the run either fails ([#4907](https://github.com/nearai/ironclaw/issues/4907)), doesn't resume, or requires re-auth in every new conversation ([#4913](https://github.com/nearai/ironclaw/issues/4913)). This is the single most reported category and represents a fundamental trust issue — users feel the system is broken even when it "succeeds."
- **Extension setup is confusing.** After installing an extension, users don't know what to do next ([#4886](https://github.com/nearai/ironclaw/issues/4886), [#4890](https://github.com/nearai/ironclaw/issues/4890)). The flow spans Registry → Installed → Configure → Chat auth with no clear guidance. "AUTH NEEDED" is not actionable.
- **Approval denial is a black hole.** Clicking Deny on a capability approval leaves the tool invocation pending with no feedback ([#4764](https://github.com/nearai/ironclaw/issues/4764)). Users don't know if the denial was registered.
- **UI state is contradictory.** Extensions show as ACTIVE but display "Activate" buttons ([#4908](https://github.com/nearai/ironclaw/issues/4908)). NEAR AI provider shows as ACTIVE with no credentials ([#4857](https://github.com/nearai/ironclaw/issues/4857)). NEAR AI MCP shows "SETUP NEEDED" despite being ready ([#4925](https://github.com/nearai/ironclaw/issues/4925)).

### Use Cases (What Users Want)

- **File production and download:** Users want agents to create files (reports, CSVs) and download them ([#4933](https://github.com/nearai/ironclaw/pull/4933)).
- **Cross-channel attachments:** Users expect attachments to work everywhere, not just on v1 ([#4644](https://github.com/nearai/ironclaw/issues/4644)).
- **Slack user-level actions:** Users want agents to search their personal Slack messages, not just act as a bot ([#4941](https://github.com/nearai/ironclaw/pull/4941)).
- **Automated PR review:** Users want IronClaw to review its own PRs ([#4880](https://github.com/nearai/ironclaw/issues/4880)).

### Satisfaction Indicators

- The core team is closing bugs the same day they're filed ([#4917](https://github.com/nearai/ironclaw/issues/4917), [#4928](https://github.com/nearai/ironclaw/issues/4928), [#4800](https://github.com/nearai/ironclaw/issues/4800)), which signals responsive maintenance.
- Architectural follow-ups are being filed proactively ([#4935](https://github.com/nearai/ironclaw/issues/4935), [#4931](https://github.com/nearai/ironclaw/issues/4931)) rather than just patching symptoms.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| # | Item | Age | Why It Needs Attention |
|---|---|---|---|
| [#4644](https://github.com/nearai/ironclaw/issues/4644) | Universal attachments across all channels | 7 days (still open) | XL-scoped epic with multiple sub-PRs. Needs coordination to ensure all sub-tasks are tracked and nothing falls through. |
| [#4761](https://github.com/nearai/ironclaw/issues/4761) | Agent stops after repeated tool failures | 5 days | Resilience issue with no fix PR yet. Related to [#4841](https://github.com/nearai/ironclaw/pull/4841) but not explicitly covered. |
| [#4887](https://github.com/nearai/ironclaw/issues/4887) | MCP tool approval resume fails with stale input_ref | 1 day | Blocks provider-backed MCP tools (NEAR AI web_search). No fix PR. |
| [#4921](https://github.com/nearai/ironclaw/issues/4921) | Gmail extension fails after auth | 0 days (new) | High severity, no fix PR yet. Affects all Gmail users on Railway. |
| [#4925](https://github.com/nearai/ironclaw/issues/4925) | NEAR AI MCP shows "SETUP NEEDED" incorrectly | 0 days (new) | Undermines trust in the MCP server status UI. |
| [#4876](https://github.com/nearai/ironclaw/pull/4876) | Dependabot: 43 dependency updates | 2 days | Includes `agent-client-protocol` breaking change (0.10.4 → 0.14.0). Needs careful review before merge. |
| [#3705](https://github.com/nearai/ironclaw/pull/3705) | Bump `rand` 0.8.5 → 0.8.6 | 31 days | Stale dependabot PR. Low risk, should be merged or closed. |
| [#3707](https://github.com/nearai/ironclaw/pull/3707) | Bump `jsonwebtoken` 9.3.1 → 10.3.0 | 31 days | Stale dependabot PR. Medium risk (JWT library). Needs review. |
| [#3708](https://github.com/nearai/ironclaw/pull/3708) | Release PR (ironclaw 0.24.0 → 0.29.1) | 31 days | Stale release PR with breaking changes in `ironclaw_common` and `ironclaw_skills`. Needs resolution — either merge or close. |

---

*Generated by OWL — ZOO Company*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-16

---

## 1. Today's Overview

LobsterAI shows **high PR throughput** today with 11 pull requests updated (5 merged/closed, 6 still open), but **zero new releases** and only 2 open issues — both stale. The majority of closed PRs are concentrated in the **voice input / cowork** area, indicating an active push to stabilize and refine the dictation/ASR experience on a release branch. Meanwhile, 5 of the 6 open PRs are **dependabot-driven CI/dependency bumps**, suggesting the project is also keeping its toolchain current. Overall, the project appears to be in a **feature-polish and dependency-maintenance phase** rather than a major release cycle.

---

## 2. Releases

**No new releases today.** The latest activity is branch-level work targeting the `2026.6.11` release branch, with several voice-input fixes merged but not yet published as a tagged version.

---

## 3. Project Progress

Five PRs were merged/closed today, all on 2026-06-15:

| # | PR | Area | Summary |
|---|-----|------|---------|
| 1 | [PR #2159](https://github.com/netease-youdao/LobsterAI/pull/2159) | renderer, docs, main, artifacts | **Document Artifact sharing & preview** — Added support for sharing DOCX, PPTX, XLSX, PDF, CSV, TSV artifacts; improved DOCX pagination, PDF native preview fallback, table auto-width rendering, and pdfjs font/cMap build config. |
| 2 | [PR #2160](https://github.com/netease-youdao/LobsterAI/pull/2160) | renderer, docs, main, cowork | **Voice input: realtime-only ASR** — Removed the short ASR upload flow and `asr:recognize` IPC surface; Cowork voice input now always uses realtime ASR. Legacy config `voiceInput.recognitionMode` stripped. |
| 3 | [PR #2161](https://github.com/netease-youdao/LobsterAI/pull/2161) | renderer | **Chore: update about page** — Minor metadata update. |
| 4 | [PR #2162](https://github.com/netease-youdao/LobsterAI/pull/2162) | renderer, docs, cowork | **Voice input cancel guard fix** — Resolved a merge conflict on the release branch, preserving realtime-only ASR flow while keeping draft ownership, stale callback guards, session-switch cancellation, and diagnostic logging. |
| 5 | [PR #2163](https://github.com/netease-youdao/LobsterAI/pull/2163) | renderer, docs, main, cowork | **Dictation recording UI refinement** — Added in-memory ASR quota slice and shared quota constants so the renderer tracks daily availability and lazy-resets quota state. |

**Key takeaway:** The team is consolidating the **voice input pipeline** around a realtime-only ASR model and simultaneously expanding **document artifact sharing/preview** — two significant UX improvements heading toward the next release.

---

## 4. Community Hot Topics

Today's activity is relatively quiet on the discussion front. The most notable items by engagement:

- **[Issue #1426](https://github.com/netease-youdao/LobsterAI/issues/1426)** — *"No success prompt after uploading local skill; skill list not refreshed"* (1 comment, created 2026-04-03, stale). User pain point: **feedback and state synchronization** in the skill management UI.
- **[Issue #1427](https://github.com/netease-youdao/LobsterAI/issues/1427)** — *"Duplicate skills can be added via local upload"* (1 comment, created 2026-04-03, stale). User pain point: **deduplication logic** missing in skill upload flow.
- **[PR #1428](https://github.com/netease-youdao/LobsterAI/pull/1428)** — *"System notifications when cowork session completes/errors (when window unfocused)"* (stale, created 2026-04-03). This is a **feature contribution** from the community addressing a gap vs. Claude Code / Cursor.

**Underlying needs:** Users want LobsterAI's skill management to feel **responsive and reliable** (confirmation feedback, list refresh, dedup). The cowork notification PR signals demand for **background-aware UX** — users expect to be notified of session outcomes without babysitting the window.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 Medium | [#1426](https://github.com/netease-youdao/LobsterAI/issues/1426) | Uploading a local skill gives no success feedback; skill list doesn't refresh | ❌ None yet |
| 🔴 Medium | [#1427](https://github.com/netease-youdao/LobsterAI/issues/1427) | No dedup check — same skill can be added multiple times, creating duplicates | ❌ None yet |

Both bugs have been open since **April 3, 2026** and are now marked stale. They affect the **skill management workflow** — a core extensibility feature. Neither has an associated fix PR. Given that 5 months have passed without resolution, these likely need explicit maintainer triage.

---

## 6. Feature Requests & Roadmap Signals

- **System notifications for cowork sessions** ([PR #1428](https://github.com/netease-youdao/LobsterAI/pull/1428)) — A community-contributed feature to push native Electron notifications on session completion/error when the window is unfocused. This directly mirrors functionality in Claude Code and Cursor. **Likelihood of adoption:** High, as it's already a complete PR and addresses a clear competitive gap.
- **Document artifact sharing** ([PR #2159](https://github.com/netease-youdao/LobsterAI/pull/2159), merged) — Support for sharing and previewing Office documents and PDFs as artifacts. **Already merged**, likely to appear in the next release.
- **Realtime-only ASR for voice input** ([PR #2160](https://github.com/netease-youdao/LobsterAI/pull/2160), merged) — Simplification of the voice input pipeline. **Already merged**, likely next release.

**Predicted next release themes:** Voice input polish + document artifact sharing + cowork notification support.

---

## 7. User Feedback Summary

| Sentiment | Area | Detail |
|-----------|------|--------|
| 😤 Frustrated | Skill management | Uploading skills feels "silent" — no confirmation, no list refresh. Users can't tell if the action succeeded. |
| 😤 Frustrated | Skill management | Duplicate skills clutter the list with no warning or prevention. |
| 😊 Constructive | Cowork / Notifications | Community member proactively submitted a PR for system notifications, showing engagement and willingness to contribute. |
| 😐 Neutral | Voice input | Multiple PRs suggest the team is iterating heavily on voice input, implying earlier versions had UX rough edges. |

**Core pain points:** The skill upload UX lacks basic **feedback loops** (confirmation, error handling, dedup). This erodes user trust in the extensibility system.

---

## 8. Backlog Watch

These items have gone **unanswered for 2+ months** and need maintainer attention:

| Item | Age | Why It Matters |
|------|-----|----------------|
| [Issue #1426](https://github.com/netease-youdao/LobsterAI/issues/1426) — No success feedback on skill upload | 74 days | Core UX broken; users can't trust the skill system |
| [Issue #1427](https://github.com/netease-youdao/LobsterAI/issues/1427) — Duplicate skill upload | 74 days | Data integrity issue; pollutes user's skill list |
| [PR #1428](https://github.com/netease-youdao/LobsterAI/pull/1428) — System notifications for cowork | 74 days | Complete community PR; competitive feature gap |
| [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Electron 40→42 bump | 74 days | Major version dependency upgrade; security/stability implications |

**Recommendation:** The skill upload bugs (#1426, #1427) are likely quick fixes (add toast notification + dedup check) that would significantly improve perceived quality. The stale community PR (#1428) deserves at least a review response to maintain contributor goodwill.

---

*Data source: [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) | Digest generated by OWL for 2026-06-16*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-16

---

## 1. Today's Overview

Moltis saw modest but focused activity on 2026-06-16, with **2 new pull requests** opened in the last 24 hours and **zero issues** reported. No new releases were published, and no PRs were merged or closed during this window. The project appears to be in an active development phase, with contributor `gptme-thomas` driving two feature-oriented PRs aimed at improving chat orchestration flexibility and external agent configurability. Overall project health signals are stable — no fire-drill bugs, no regressions, and a clear forward-leaning development posture.

---

## 2. Releases

**None.** No new versions were published on or around 2026-06-16. The most recent release information is not available in the current data snapshot.

---

## 3. Project Progress

No PRs were merged or closed today. Two PRs remain **open and under active development**:

| PR | Title | Author | Focus |
|---|---|---|---|
| [#1125](https://github.com/moltis-org/moltis/pull/1125) | Support model and effort selection for external agents | gptme-thomas | External agent configuration |
| [#1124](https://github.com/moltis-org/moltis/pull/1124) | Add `context_command` support for chat turns | gptme-thomas | Runtime context injection |

Both PRs are brand new (created 2026-06-15) and represent meaningful feature additions rather than bug fixes, suggesting the team or core contributors are in a feature-building cycle.

---

## 4. Community Hot Topics

With only 2 open PRs and 0 open issues, community engagement signals are currently low. Neither PR has received comments or 👍 reactions yet (likely because they were created less than 24 hours ago).

- **[PR #1125 — External agent model/effort selection](https://github.com/moltis-org/moltis/pull/1125):** This addresses a real deployment need — operators managing heterogeneous agent backends (e.g., different model providers or reasoning-effort tiers) want a unified `/model` interface. The grouping under `external-agent/<kind>` suggests the project is heading toward a pluggable multi-provider architecture.

- **[PR #1124 — `context_command` for chat turns](https://github.com/moltis-org/moltis/pull/1124):** This resolves a workflow friction point where operators must manually paste runtime context (environment variables, session state, dynamic metadata) into chat sessions. Automating this via a config-driven command hook is a strong DevOps/SRE-oriented improvement.

**Underlying need:** Both PRs point toward a shared demand — **making Moltis more operator-friendly in production deployments** where external tooling, multiple model backends, and ephemeral runtime context are first-class concerns.

---

## 5. Bugs & Stability

**No bugs, crashes, or regressions reported** in the last 24 hours. Zero open issues exist at this time. Stability indicators are green.

---

## 6. Feature Requests & Roadmap Signals

While no formal "feature request" issues exist, the two open PRs serve as strong signals of near-term roadmap direction:

1. **Unified external agent configuration management** (PR #1125) — This expands Moltis from a single-model paradigm to a multi-provider orchestration layer. If merged, expect `/model` to surface `external-agent/<kind>` entries with selectable effort levels.

2. **Automated runtime context injection** (PR #1124) — The `chat.context_command` pattern is extensible. It could later support templating, conditional execution, or integration with secrets managers, making sessions more reproducible and auditable.

**Prediction:** If both PRs pass review, the next minor release (e.g., a hypothetical patch or minor bump) would likely include these two features, marketed around "production deployment flexibility."

---

## 7. User Feedback Summary

No direct user feedback (comments, reactions, issues) was captured in the 24-hour window. However, the nature of the PRs authored by `gptme-thomas` — a consistent contributor — suggests **operator-level pain points** are being addressed:

- **Pain point:** Manually copying context into chat sessions is tedious and error-prone.
- **Pain point:** Switching between external agent providers and effort levels requires non-obvious configuration workarounds.
- **Use case:** Production multi-agent deployments with heterogeneous backends need a clean, config-driven model selection interface.

No dissatisfaction signals detected.

---

## 8. Backlog Watch

| Item | Age | Status | Recommended Action |
|---|---|---|---|
| [PR #1125](https://github.com/moltis-org/moltis/pull/1125) | 1 day | OPEN, no review | Schedule maintainer review — touches core `/model` config surface |
| [PR #1124](https://github.com/moltis-org/moltis/pull/1124) | 1 day | OPEN, no review | Lower risk than #1125 (additive hook), good candidate for fast-track review |

Both PRs are too new to classify as backlog. However, given zero open issues and zero community comments, the project would benefit from community engagement to validate these designs before merge — particularly PR #1125, which modifies the configuration schema.

---

*Generated by OWL · Moltis Digest · 2026-06-16 · Source: [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-16

---

## 1. Today's Overview

CoPaw remains in a high-activity phase with **50 issues updated** (31 still open, 19 closed) and **50 PRs touched** (15 open, 35 merged/closed) in the last 24 hours. Notably, there were **zero new releases**, indicating the project is in a development accumulation cycle between the v1.1.11.post2 release and the next version. The volume of closed PRs (35) relative to open PRs (15) suggests the maintainers are clearing a significant backlog of merged contributions. Community engagement remains intense, with several issues accruing double-digit comments, reflecting both a growing user base and surface-area pain points around stability at the current version.

---

## 2. Releases

**None.** No new releases were published today. The latest known version remains **v1.1.11.post2** (released ~2026-06-14), which introduced the plugin dependency auto-installation system and several UI fixes. Multiple open bugs and regressions are still being tracked against this version.

---

## 3. Project Progress

### Merged/Closed PRs (notable)

| # | PR | Summary |
|---|-----|---------|
| [5192](https://github.com/agentscope-ai/QwenPaw/pull/5192) | fix(desktop): guard against Windows console crash | Prevents Rich console `OSError` on legacy Windows terminals and blocks self-kill commands |
| [5150](https://github.com/agentscope-ai/QwenPaw/pull/5150) | feat(yuanbao): bot message filtering | Adds `accept_bot_messages` config and `_is_bot_message()` detection for the Yuanbao channel |
| [5146](https://github.com/agentscope-ai/QwenPaw/pull/5146) | fix(skill): improve skill-slash-inject display | Fixes raw `SKILL.md` content leaking into chat display; now wraps in `<skill>` tags. Closes [#5031](https://github.com/agentscope-ai/QwenPaw/issues/5031) |
| [5130](https://github.com/agentscope-ai/QwenPaw/pull/5130) | feat(chat): per-turn token/context usage popover | Adds a TokenUsageBadge and context ring indicator per assistant response in Console |
| [5123](https://github.com/agentscope-ai/QwenPaw/pull/5130) | feat(skill): update skill-market | Adds QwenPaw skill market endpoint, category preview, and UI improvements |
| [4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) | feat(console): token usage in conversation | Floating TokenUsageBadge overlay with per-turn provider usage and context-window estimation |
| [4310](https://github.com/agentscope-ai/QwenPaw/pull/4310) | feat(console): show context usage in header | Compact context usage indicator with normal/warning/danger levels in chat header. Closes [#4284](https://github.com/agentscope-ai/QwenPaw/issues/4284) |
| [4495](https://github.com/agentscope-ai/QwenPaw/pull/4495) | fix(cron): return 422 for cron validation | Better error handling: invalid schedule input now returns 422 instead of 500 |

**Key themes advancing today:**
- **Token/context visibility** is being comprehensively addressed across three separate merged PRs, giving users real-time feedback on context window usage — one of the most-requested features.
- **Windows stability** is receiving focused attention with the desktop crash guard landing.
- **Skill system UX** continues to mature with market improvements and slash-command display fixes.

---

## 4. Community Hot Topics

### Most Commented/Active Issues

| # | Issue | Comments | Signal |
|---|-------|----------|--------|
| [#1911](https://github.com/agentscope-ai/QwenPaw/issues/1911) | [channel] 小艺 (Xiaoyi) integration | 22 | User integrated Huawei's Xiaoyi channel successfully on the open-platform test side, but mobile-side responses return generic errors ("开小差"/"网络拥堵"). Conversation history from mobile doesn't appear in CoPaw Console. Unclear if this is a channel-side or CoPaw-side bug — **needs triage and cross-team investigation**. |
| [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) | docx/pdf attachment download returns 404 | 6 | Regressed from v1.1.11 → v1.1.11.post2. Text file download was fixed but binary formats (docx, pdf) still fail. **Critical file-sharing workflow broken** for many users. |
| [#5181](https://github.com/agentscope-ai/QwenPaw/issues/5181) | Plugin pip dependency install causes endless cmd popup loops | 5 | Plugin auto-install introduced in v1.1.11.post2 fires `pip install` with visible cmd windows. When PyPI is unreachable, it retries infinitely, flooding the desktop with cmd.exe windows. **UX catastrophe on poor network connections.** |
| [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) | Context compaction loses all context when persona file is large | 4 | Agent's persona/system prompt exceeds compaction threshold → entire context compressed to 0 tokens → agent can't continue. **Data-loss-level severity** for long-running agents. |
| [#5167](https://github.com/agentscope-ai/QwenPaw/issues/5167) | Feishu CardKit streaming card slow for long responses | 4 | Streaming card updates become character-by-character for long responses, making it slower than non-streaming. Suggests the update frequency or batching strategy needs tuning. |
| [#5161](https://github.com/agentscope-ai/QwenPaw/issues/5161) | QwenPaw stops responding after long conversation | 4 | Agent hangs after many turns or large context. No response at all. Related to compaction or context overflow. |

**Underlying needs analysis:**
- **Context management** is the dominant pain cluster — compaction bugs, visibility, and long-conversation hangs all point to users needing more robust and transparent context lifecycle management.
- **File attachment reliability** is a recurring regression area that erodes trust in the platform.
- **Plugin system stability** (pip install loops) is a new pain point from the latest release that needs an urgent hotfix.

---

## 5. Bugs & Stability

### Ranked by Severity

#### 🔴 Critical (Data Loss / Complete Failure)

| # | Issue | Description | Fix PR? |
|---|-------|-------------|---------|
| [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) | Context compaction zeroes out all context | Persona file larger than compaction threshold → 0 tokens retained → agent task interrupted permanently | ❌ None yet |
| [#5161](https://github.com/agents-ai/QwenPaw/issues/5161) | Agent hangs after long conversation | No response after many turns; likely context overflow or compaction failure | ❌ None yet |
| [#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162) | Agent reasoning enters infinite loop | Dead loop in thinking logic; agent never produces output | ❌ None yet |

#### 🟠 High (Core Feature Broken)

| # | Issue | Description | Fix PR? |
|---|-------|-------------|---------|
| [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) | Binary file attachment download 404 | docx/pdf fail; text files work. Regression from v1.1.11 | ❌ None yet |
| [#5181](https://github.com/agentscope-ai/QwenPaw/issues/5181) | Plugin pip install infinite cmd popup loop | No window suppression + infinite retry on PyPI failure | ❌ None yet |
| [#5138](https://github.com/agentscope-ai/QwenPaw/issues/5138) | Windows client process/memory leak | Processes accumulate, memory reaches 90%+ | ✅ Closed (fix likely in v1.1.11.post2 or pending) |
| [#5122](https://github.com/agentscope-ai/QwenPaw/issues/5122) | Context compaction stats don't match actual API input | UI shows 0.9% usage but actual API payload is tens of KB larger due to skill/MCP metadata | ❌ None yet |

#### 🟡 Medium (UX Degradation)

| # | Issue | Description | Fix PR? |
|---|-------|-------------|---------|
| [#5167](https://github.com/agentscope-ai/QwenPaw/issues/5167) | Feishu streaming card slow for long text | Character-by-character rendering degrades experience | ❌ None yet |
| [#5184](https://github.com/agentscope-ai/QwenPaw/issues/5184) | Local model providers not showing in settings | Feature introduced in v1.1.11 but UI doesn't display them in .post2 | ❌ None yet |
| [#5166](https://github.com/agentscope-ai/QwenPaw/issues/5166) | TeamChat plugin fails on Python 3.13 (`imghdr` removed) | `imghdr` module removed in Python 3.13; plugin dependency not updated | ❌ None yet |
| [#5211](https://github.com/agentscope-ai/QwenPaw/issues/5211) | Desktop UI layout proportions poor | Top nav bar wastes vertical space; low screen utilization | ✅ PR [#5212](https://github.com/agentscope-ai/QwenPaw/pull/5212) open (wide mode toggle) |
| [#5183](https://github.com/agentscope-ai/QwenPaw/issues/5183) | Pet feature broken on Wayland (Niri) | Desktop pet widget doesn't render on Wayland compositors | ❌ None yet |

#### 🟢 Low / Cosmetic

| # | Issue | Description | Fix PR? |
|---|-------|-------------|---------|
| [#5104](https://github.com/agentscope-ai/QwenPaw/issues/5104) | `copaw` → `qwenpaw` rename causes path confusion | Legacy `~/.copaw/` vs `~/.qwenpaw/` directory mismatch | ✅ Closed |

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests

| # | Request | Signals |
|---|---------|---------|
| [#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063) | Integrate Headroom for 60–95% token reduction | Sophisticated context compression; aligns with compaction pain points. **Likely candidate for v1.1.12 or v1.2.** |
| [#5158](https://github.com/agentscope-ai/QwenPaw/pull/5158) | User input queue (like OpenClaw) | PR already open; allows submitting next message before agent finishes. **High user demand** (see [#5103](https://github.com/agentscope-ai/QwenPaw/issues/5103) closed). |
| [#5212](https://github.com/agentscope-ai/QwenPaw/pull/5212) | Wide mode toggle for chat layout | PR open today; addresses desktop screen real estate complaints. |
| [#5203](https://github.com/agentscope-ai/QwenPaw/pull/5203) | Models page overhaul — provider aggregation, glass-morphism UI | Major settings page redesign; adds Aliyun Token Plan (International). |
| [#5210](https://github.com/agentscope-ai/QwenPaw/pull/5210) | `cron update` CLI command | Closes [#4939](https://github.com/agentscope-ai/QwenPaw/issues/4939); previously required delete+recreate. |
| [#5088](https://github.com/agentscope-ai/QwenPaw/pull/5088) | Governance & sandbox interface | Early-stage discussion on agent sandboxing. **Architectural significance.** |
| [#5067](https://github.com/agentscope-ai/QwenPaw/pull/5067) | Agent OS Driver — unified MCP/A2A/ACP abstraction | Closed but represents a major architectural direction for external capability integration. |

### Predicted Next Version Focus (v1.1.12 or v1.1.13)
Based on the volume and severity of open bugs, the next release will likely prioritize:
1. **Context compaction fixes** (zero-context bug, stats accuracy)
2. **Attachment download regression fix** (binary file 404)
3. **Plugin pip install loop fix** (cmd window suppression + retry backoff)
4. **Token/context usage UI** (multiple PRs already merged, likely to ship)
5. **Input queue** (PR open, high community demand)

---

## 7. User Feedback Summary

### Pain Points

- **"I upgraded and things got worse."** — The v1.1.11 → v1.1.11.post2 cycle introduced regressions in attachment downloads and created the plugin pip install loop. Users who upgraded expecting fixes encountered new, more visible bugs. This is eroding confidence in the release process.

- **"I have no idea how much context I'm using until it's too late."** — Multiple users across [#4284](https://github.com/agentscope-ai/QwenPaw/issues/4284), [#4782](https://github.com/agentscope-ai/QwenPaw/issues/4782), [#4647](https://github.com/agentscope-ai/QwenPaw/issues/4647), [#3366](https://github.com/agentscope-ai/QwenPaw/issues/3366), and [#5103](https://github.com/agentscope-ai/QwenPaw/issues/5103) have requested token/context visibility. The good news: this is being actively addressed with three merged PRs. The bad news: it hasn't shipped yet.

- **"My agent just stops working mid-task."** — Long conversation hangs ([#5161](https://github.com/agentscope-ai/QwenPaw/issues/5161)), compaction data loss ([#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171)), and infinite reasoning loops ([#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162)) represent the most frustrating class of bugs: silent failures with no user-facing error.

- **"The desktop experience feels unfinished."** — Layout issues ([#5211](https://github.com/agentscope-ai/QwenPaw/issues/5211)), process leaks ([#5138](https://github.com/agentscope-ai/QwenPaw/issues/5138)), startup delays ([#5153](https://github.com/agentscope-ai/QwenPaw/pull/5153)), and Wayland incompatibility ([#5183](https://github.com/agentscope-ai/QwenPaw/issues/5183)) suggest the desktop client needs a dedicated stabilization sprint.

### Satisfaction Signals

- Token usage visibility PRs being merged rapidly shows the team is responsive to top community requests.
- The skill market improvements and cron CLI enhancements show steady platform maturation.
- Active first-time contributor PRs ([#5210](https://github.com/agentscope-ai/QwenPaw/pull/5210), [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622), [#5041](https://github.com/agentscope-ai/QwenPaw/pull/5041)) indicate a healthy contributor pipeline.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| # | Issue | Age | Why It Needs Attention |
|---|-------|-----|----------------------|
| [#1911](https://github.com/agentscope-ai/QwenPaw/issues/1911) | 小艺 channel integration | 87 days | **Highest comment count (22)**; cross-platform channel issue with no resolution; affects Huawei ecosystem users |
| [#5025](https://github.com/agentscope-ai/QwenPaw/issues/5025) | `submit_to_agent` session file path bug | 8 days | Root cause identified (path generated with wrong session ID) but no fix PR; blocks inter-agent task submission |
| [#5009](https://github.com/agentscope-ai/QwenPaw/issues/5009) | Observability/tracing roadmap (Langfuse/OTel) | 8 days | Strategic question about observability integration; no maintainer response yet; important for enterprise adoption |
| [#5089](https://github.com/agentscope-ai/QwenPaw/issues/5089) | Session recovery failure after new session | 6 days | User can't return to previous session; labeled `invalid` but no explanation — needs clarification or proper closure |
| [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) | Decouple plugin loader from agent startup | 14 days | Critical for PyInstaller/Tauri frozen environments; silently fails to initialize plugins; no review activity |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | DataPaw plugin with 12 BI skills | 25 days | First-time contributor; `Under Review` but no review comments; significant contribution at risk of going stale |

### PRs Aging Without Review

| # | PR | Age | Risk |
|---|-----|-----|------|
| [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) | Plugin loader decoupling | 14 days | Frozen-environment users blocked |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | DataPaw plugin | 25 days | Contributor disengagement risk |
| [#5088](https://github.com/agentscope-ai/QwenPaw/pull/5088) | Governance & sandbox interface | 6 days | Early discussion; needs direction |

---

**Overall Health Assessment:** CoPaw is in a high-velocity development phase with strong community engagement and a healthy PR merge rate. However, the v1.1.11.post2 release introduced regressions that are generating significant user pain, and several critical bugs (context compaction data loss, attachment 404s, plugin install loops) remain unfixed. The project would benefit from a stabilization-focused hotfix release (v1.1.12) before shipping the substantial feature work currently in the pipeline.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-16

---

## 1. Today's Overview

ZeroClaw is in a period of intense development activity with no new releases in the last 24 hours, suggesting the team is accumulating changes toward an upcoming milestone. **50 issues** and **50 PRs** were updated in the last day, of which **47 PRs remain open** and **46 issues are open/active**, indicating a large and growing backlog that outpaces throughput. Activity is heavily concentrated on channel integrations (Slack, Telegram, Lark/Feishu, WhatsApp, email, IRC, Matrix), provider fixes (Azure OpenAI, Groq, Bedrock, Kilo, Ollama), and runtime/security hardening. The absence of recent releases combined with a high volume of accepted-but-unmerged work signals the project is likely mid-cycle through a major versioning sprint (v0.8.1 / v0.9.0 trackers are active).

---

## 2. Releases

**None.** No new releases were published in the last 24 hours. The project has v0.8.1 and v0.9.0 milestone trackers active (#6970, #7432), suggesting a dense release is being assembled.

---

## 3. Project Progress

Three items were merged or closed in the window:

| # | Item | Type | Details |
|---|------|------|---------|
| [#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458) | Add support for local CA certificates | Issue — **CLOSED** (Feb proposal, resolved Jun 15) | Closed after 4 months; local CA cert support for custom inference providers is now complete. |
| [#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) | `skill_manage` patch ignores cooldown | Issue — **CLOSED** (bug fix in progress → closed) | The race condition where `skill_manage patch` allowed unbounded writes without cooldown enforcement is resolved. |
| [#7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542) | `ask_user` fails instantly in gateway web dashboard | Issue — **CLOSED** (P1 bug, reported Jun 12) | The WebSocket "Channel closed before receiving a response" failure for `ask_user` tool in dashboard sessions has been fixed. |

Several open PRs are pushing active fixes toward merge:

- **[#7732](https://github.com/zeroclaw-labs/zeroclaw/pull/7732)** — Fixes `self-test` WebSocket auth probing, resolving false 401 failures in authenticated gateway configurations.
- **[#7616](https://github.com/zeroclaw-labs/zeroclaw/pull/7616)** — Strips assistant reasoning content on outbound replay for Groq's OpenAI-compatible endpoint, preventing request rejection.
- **[#7725](https://github.com/zeroclaw-labs/zeroclaw/pull/7725)** — Prevents `reasoning_content` from leaking into agent response text for models like GLM-5.1 that return null `content` with reasoning traces.
- **[#7720](https://github.com/zeroclaw-labs/zeroclaw/pull/7720)** — Adds `allowed_groups` per-JID group allowlist for WhatsApp Web mode, addressing a significant gap in group-scoped bot operation.
- **[#7745](https://github.com/zeroclaw-labs/zeroclaw/pull/7745)** — Adds retry logic for transient email OAuth2 refresh failures, aligning email with other provider refresh patterns.

---

## 4. Community Hot Topics

| # | Topic | Comments | 👍 | Energy Signal |
|---|-------|----------|-----|---------------|
| [#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458) | Local CA certs for custom inference | 8 | 0 | High discussion — enterprise/self-hosted users need to trust internal PKI. Resolved. |
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | Multi-Agent Routing | 6 | **9** | **Highest community demand.** Users want multiple isolated agents + channel accounts in one Gateway, routed by bindings. Accepted as P2. |
| [#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) | Configurable channel reply-intent precheck | 5 | 0 | Users want faster, smaller models for reply classification with timeouts — blocking on the main route model is painful for latency-sensitive setups. Accepted. |
| [#551](https://github.com/zeroclaw-labs/zeroclaw/issues/551) | Insecure HTTPS for OpenAI-compatible endpoints | 4 | 0 | Self-signed / internal certificates block custom provider use. Blocked. Complements #1458 which was just closed. |
| [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) | `mcp_bundles` is parsed but never enforced at runtime | 1 | 0 | **Silent security no-op** — per-agent MCP tool scoping appears configured but is entirely non-functional. New today, high-severity. |

**Underlying needs analysis**: The community is pressing hard on two axes — (1) **multi-agent/multi-tenant routing** (#2767) for running parallel agent workspaces, and (2) **security hardening** (#7733, #7675, #7674) around supply-chain, runtime isolation, and silent failures. The high reaction count on multi-agent routing (9 👍) makes it the single strongest product signal.

---

## 5. Bugs & Stability

### P1 (Critical / Workflow Blocked)

| # | Bug | Severity | Notes |
|---|-----|----------|-------|
| [#7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542) | `ask_user` fails in WebSocket dashboard sessions | S1 — resolved | **Fixed and closed.** |
| [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) | `mcp_bundles` silently ignored — per-agent MCP scoping is a no-op | S2 (maintainers may bump) | **No fix PR yet.** Per-agent tool isolation via MCP bundles is advertised but has zero enforcement. Security-critical. |

### P2 (Degraded Behavior)

| # | Bug | Severity | Notes |
|---|-----|----------|-------|
| [#7741](https://github.com/zeroclaw-labs/zeroclaw/issues/7741) | Response cache not skipped for multimodal `[IMAGE:...]` markers | S2 | No fix PR. Cache integrity issue for multimodal pipelines. |
| [#7742](https://github.com/zeroclaw-labs/zeroclaw/issues/7742) | Stale system prompt after `set_tool_dispatcher()` swap | S2 | No fix PR. Mid-session dispatcher changes leave tool instructions stale in agent history. |
| [#7740](https://github.com/zeroclaw-labs/zeroclaw/issues/7740) | Missing-skill suggestions based on raw registry, not effective tool set | S2 | No fix PR. Can surface unavailable skills. |
| [#7739](https://github.com/zeroclaw-labs/zeroclaw/issues/7739) | Email OAuth refresh lacks retry/backoff | S2 | **Fix PR: [#7745](https://github.com/zeroclaw-labs/zeroclaw/pull/7745)** (open). |
| [#7738](https://github.com/zeroclaw-labs/zeroclaw/issues/7738) | Random UUID fallback for missing email `Message-ID` — non-stable dedup | S2 | No fix PR. |
| [#6698](https://github.com/zeroclaw-labs/zeroclaw/issues/6698) | Fluent locale files lag English sources (e.g., zh-CN missing `tools.ftl`) | S2 | In progress. |
| [#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) | `skill_manage` patch cooldown bypass | — | **Fixed and closed.** |
| [#7038](https://github.com/zeroclaw-labs/zeroclaw/issues/7038) | `zeroclaw check` — 11/11 websocket 401 despite valid auth | S2 | Blocked, needs reproduction. |

---

## 6. Feature Requests & Roadmap Signals

**High-confidence near-term candidates (accepted, in-progress, or referenced by trackers):**

| # | Feature | Priority | Likelihood next release |
|---|---------|----------|------------------------|
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | Multi-Agent Routing (bindings, isolations, multi-account) | P2, accepted, 9 👍 | **High** — v0.9.0 tracker #7432 explicitly references it |
| [#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) | Configurable reply-intent precheck (light model + timeout) | P2, accepted | Likely v0.8.x or v0.9.0 |
| [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) | v0.8.1 integration/channel/provider/tool queue (tracker) | P2, accepted | Already deferred; some sub-items may land |
| [#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) | A2A agent discovery (`.well-known/agent-card.json`) for multi-agent | P2, RFC, accepted | Medium — prerequisite for broader multi-agent interoperability |
| [#7743](https://github.com/zeroclaw-labs/zeroclaw/issues/7743) | Explicit target-profile authority for delegate handoffs | P2, accepted | Medium — security design dependent on delegation model RFCs |

**Early-stage / needs review:**

| # | Feature | Note |
|---|---------|------|
| [#7673](https://github.com/zeroclaw-labs/zeroclaw/issues/7673) | RFC: Native context compression as `CompressionDecorator` pipeline wrapper | Needs maintainer review |
| [#7674](https://github.com/zeroclaw-labs/zeroclaw/issues/7674) | RFC: WebAssembly-first — eliminate Node.js from build/runtime | Architecture-level, long-term |
| [#7675](https://github.com/zeroclaw-labs/zeroclaw/issues/7765) | RFC: Hardened CI pipeline — supply-chain scanning, provenance, SBOM | Needs maintainer review |

**Prediction**: The next release (likely v0.9.0) will center on **multi-agent routing**, **auth/security hardening** (per the #7432 tracker), and the **MCP scoping fix** (#7733), which is a credibility issue if left unresolved.

---

## 7. User Feedback Summary

**Pain points surfacing repeatedly:**

1. **Silent failures erode trust**: The `mcp_bundles` no-op (#7733) is emblematic — users configure per-agent tool scoping expecting isolation, but it's a silent no-op. Every "config-but-doesn't-enforce" pattern is a high-severity UX security gap.

2. **Custom/self-hosted infrastructure support is incomplete**: Users running internal inference endpoints with self-signed certificates (#551 just blocked, #1458 just closed) or behind internal PKI repeatedly hit walls. Enterprise/self-hosted deployment is clearly a growing use case.

3. **WSGI/WebSocket gateway reliability**: The `ask_user` WebSocket failure (#7542) and `self-test` false 401 issue (#7732) show that gateway-WebSocket auth and tool-calling round-trips remain fragile pain points for web dashboard users.

4. **Multi-agent demand is the loudest signal**: 9 👍, 6 comments, and consistent cross-referencing in RFCs and trackers. Users running multi-account or multi-workspace setups need proper routing.

5. **Localization lag**: The Fluent locale issue (#6698) and bare strings in onboarding (#7005) suggest internationalization is under-resourced relative to the pace of new English-language features.

---

## 8. Backlog Watch

The following impactful items have been open with no visible movement and warrant maintainer attention:

| # | Item | Age | Why it matters |
|---|-----|-----|----------------|
| [#551](https://github.com/zeroclaw-labs/zeroclaw/issues/551) | Allow insecure HTTPS for OpenAI-compatible endpoints | **3+ months**, blocked | Directly complementary to #1458 (just closed). Leaving this blocked while closing the CA cert equivalent leaves a gap for users who need both options. |
| [#7038](https://github.com/zeroclaw-labs/zeroclaw/issues/7038) | `zeroclaw check` — 401 websocket failures | **2 weeks**, blocked, needs repro | Diagnostic tool is broken for authenticated gateways; undermines user confidence in the onboarding/sanity-check flow. |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | 153 commits lost in bulk revert `c3ff635` — recovery audit | **2 months**, in-progress | If code from those 153 commits hasn't been re-merged, known bug fixes and features may be silently missing from the codebase. |
| [#6698](https://github.com/zeroclaw-labs/zeroclaw/issues/6698) | Fluent locale files lag English | **1 month**, in-progress | Localization debt accumulates. zh-CN missing `tools.ftl` means Chinese users see raw keys or English fallbacks for tool strings. |
| [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) | `mcp_bundles` parsed but never enforced — silent security no-op | **<1 day**, no fix PR | This should be an urgent fix. It is a security-relevant configuration that appears functional but does nothing. If users are relying on it for agent isolation, they have a false sense of safety. |

---

**Project Health Summary**: ZeroClaw is in a high-output development cycle with strong community engagement (50/50 issue/PR daily activity). The primary risks are **backlog accumulation** (93+ open items with 7 closures), **silent security failures** (#7733), and the gap between accepted roadmap items (#2767 Multi-Agent Routing at 9 👍) and actual release cadence (0 releases today). The team appears to be targeting a dense v0.9.0 release — timely delivery of that milestone will be critical to maintaining community momentum.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*