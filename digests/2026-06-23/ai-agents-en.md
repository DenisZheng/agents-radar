# OpenClaw Ecosystem Digest 2026-06-23

> Issues: 265 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-23 00:39 UTC

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

# OpenClaw Project Digest — 2026-06-23

---

## 1. Today's Overview

OpenClaw is experiencing a period of exceptionally high community activity. In the last 24 hours, **265 issues** were updated (178 still open, 87 closed) and **500 pull requests** were updated (436 open, 64 merged/closed), indicating a massive influx of bug reports, feature requests, and community contributions following the recent v2026.6.10-beta.2 release. The project is clearly in a stabilization sprint: many of the top issues are P0/P1 regressions around session state, message loss, memory leaks, and provider-specific breakage. The PR pipeline is active, with contributors working on memory subsystem fixes, channel plugin improvements, CI optimization, and security hardening. Overall the project is healthy but under significant strain from the breadth of the regression surface in recent releases.

---

## 2. Releases

### v2026.6.10-beta.2 (latest beta)

**Highlights:**
- **Automatic fast mode for talks:** OpenClaw can now enable fast mode for short conversational turns, then return to normal mode for longer runs, with bounded fallback and delivery behavior. (#85104)
- **More reliable model routing:** (details truncated in release notes — likely addresses ongoing provider routing issues seen in #88657, #95612, #95489)

**Migration / Breaking Changes:** None explicitly called out, but the memory store relocation behavior introduced in v2026.6.9 (#95495) remains a live regression, suggesting the migration story is still being stabilized.

---

## 3. Project Progress — Merged & Closed PRs (Selected)

| PR | Status | Summary |
|---|---|---|
| [#95614](https://github.com/openclaw/openclaw/pull/95614) | Merged | **fix(memory-wiki):** preserve human notes block on source re-ingest — prevents user-edited `## Notes` sections from being destroyed when a memory-wiki page is regenerated. |
| [#95218](https://github.com/openclaw/openclaw/pull/95218) | Merged | **fix(agents):** bound provider JSON response reads — caps success body parsing at 16 MiB to match the binary path, preventing OOM on malformed provider responses. |
| [#95880](https://github.com/openclaw/openclaw/pull/95880) | Merged | **ci:** generalize QA profile evidence workflow — allows generating evidence for any taxonomy-backed QA profile, not just `release`. |
| [#68936](https://github.com/openclaw/openclaw/pull/68936) | Merged | **feat(autofix):** add PR review autofix pipeline + Windows daemon — uses Claude Agent SDK to auto-address review comments. |
| [#95723](https://github.com/openclaw/openclaw/pull/95723) | Open | **fix(control-ui):** exclude disabled cron jobs from Overview failed count — addresses misleading UI failure indicators. |
| [#94493](https://github.com/openclaw/openclaw/pull/94493) | Open | **fix(anthropic):** strip thinking blocks from completed prior assistant turns — targets the "Invalid signature in thinking block" 400 error that bricks long-lived Anthropic sessions. |
| [#95896](https://github.com/openclaw/openclaw/pull/95896) | Open | **fix(model-catalog):** stripPrefixes over-strips when prefix has whitespace — fixes model resolution failures from whitespace in provider prefixes. |
| [#95769](https://github.com/openclaw/openclaw/pull/95769) | Open | **fix(memory-lancedb):** surface memory ID in recall content — fixes the recall→forget handoff where the model can list memories but can't delete them. |

**Themes:** Memory subsystem hardening (memory-wiki, memory-core, memory-lancedb), provider response safety, and UI correctness fixes are the dominant merged-PR themes.

---

## 4. Community Hot Topics

### Top Issues by Engagement

1. **[#88838](https://github.com/openclaw/openclaw/issues/88838)** — Track core session/transcript SQLite migration via accessor seam (34 comments, 👍1)
   - **Underlying need:** The migration from file-backed to SQLite-backed session storage is a multi-path effort that the community wants tracked transparently. Users are encountering edge cases (lock timeouts, delivery failures) and want a single source of truth for migration status.

2. **[#88312](https://github.com/openclaw/openclaw/issues/88312)** — Codex app-server turn-completion stall regression (17 comments, 👍4)
   - **Underlying need:** Multi-tool agent turns on the Codex app-server (ChatGPT Plus sub) reliably fail with "Codex stopped before confirming the turn was complete" starting in v2026.5.27. This is a regression of a previously fixed issue (#84076), indicating the fix was incomplete or reverted.

3. **[#86538](https://github.com/openclaw/openclaw/issues/86538)** — Session write-lock timeouts block subagent delivery lanes (13 comments, 👍1)
   - **Underlying need:** Session JSONL write-lock timeouts silently block main, cron-nested, and subagent lanes, surfacing as delivery/lifecycle failures without actionable diagnostics. Users need better observability and automatic recovery.

4. **[#91588](https://github.com/openclaw/openclaw/issues/91588)** — Gateway memory leak: RSS grows from 350MB to 15.5GB over days (13 comments, 👍1)
   - **Underlying need:** A severe memory leak in the gateway process causes OOM kills and restart cycles. This is a critical stability issue for long-running deployments (servers, VPS).

5. **[#92201](https://github.com/openclaw/openclaw/issues/92201)** — Embedded runner: Anthropic thinking signatures intermittently invalid on replay (12 comments, 👍1)
   - **Underlying need:** The embedded agent runner (Slack plugin) intermittently persists Anthropic thinking blocks with invalid signatures. The recovery wrapper never fires because error text is genericized, leaving sessions unrecoverable.

6. **[#90370](https://github.com/openclaw/openclaw/issues/90370)** — Support PostgreSQL as alternative to SQLite (11 comments, 👍2)
   - **Underlying need:** The hard-coded SQLite architecture decision creates resource waste, data silos, and operational complexity for teams already running PostgreSQL. This is a significant architectural feature request.

7. **[#95495](https://github.com/openclaw/openclaw/issues/95495)** — v2026.6.9 silently relocates memory store with no migration (7 comments, 👍1)
   - **Underlying need:** The upgrade from v2026.6.8 to v2026.6.9 silently moved the memory vector store path, forcing a full re-embed of 1,499 files with zero warning. Users need migration safeguards and upgrade-time notifications.

---

## 5. Bugs & Stability

### Critical / P0

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| **[#91588](https://github.com/openclaw/openclaw/issues/91588)** | 🔴 Critical | Gateway memory leak: RSS 350MB→15.5GB in days, OOM kills, restart loops | None yet |
| **[#95623](https://github.com/openclaw/openclaw/issues/95623)** | 🔴 Critical | tool_use.id sanitizer misses OpenAI composite IDs on cross-provider failover → Anthropic 400 bricks session | None yet |

### P1 — High Priority Regressions

| Issue | Description | Fix PR? |
|---|---|---|
| **[#88312](https://github.com/openclaw/openclaw/issues/88312)** | Codex app-server turn-completion stall (regression of #84076) | None yet |
| **[#86538](https://github.com/openclaw/openclaw/issues/86538)** | Session write-lock timeouts block subagent delivery lanes | None yet |
| **[#92201](https://github.com/openclaw/openclaw/issues/92201)** | Anthropic thinking signatures invalid on replay; recovery never fires | None yet |
| **[#95495](https://github.com/openclaw/openclaw/issues/95495)** | v2026.6.9 silently relocates memory store, forces full re-embed | None yet |
| **[#91363](https://github.com/openclaw/openclaw/issues/91363)** | Isolated cron consistently fails with "LLM request failed" | None yet |
| **[#88657](https://github.com/openclaw/openclaw/issues/88657)** | DeepSeek V4 Flash incomplete turn in v2026.5.27/28 | None yet |
| **[#95833](https://github.com/openclaw/openclaw/issues/95833)** | Subagent abort-settle fails to release .jsonl.lock, permanently breaking session | None yet |
| **[#95489](https://github.com/openclaw/openclaw/issues/95489)** | claude-cli out-of-credits error bypasses model fallback chain | None yet |
| **[#95612](https://github.com/openclaw/openclaw/issues/95612)** | cli-backend agent returns 401 auth_failed while identical shell invocation works | None yet |
| **[#95760](https://github.com/openclaw/openclaw/issues/95760)** | NVIDIA Build provider stream cuts mid-tool-calls (GLM 5.1, MiniMax M2.7) | None yet |
| **[#94251](https://github.com/openclaw/openclaw/issues/94251)** | Ollama remote provider streaming not consumed — model_call:started never progresses | None yet |
| **[#87996](https://github.com/openclaw/openclaw/issues/87996)** | Vertex beta INVALID_ARGUMENT wedges long sessions without recovery | None yet |
| **[#85743](https://github.com/openclaw/openclaw/issues/85743)** | pendingFinalDelivery heartbeat replay loops forever — no TTL on orphan sessions | None yet |
| **[#85773](https://github.com/openclaw/openclaw/issues/85773)** | After reinstall (v2026.5.20), agents ignore workspace files and skills | None yet |

### Notable Fix PRs in Progress

- **[#94493](https://github.com/openclaw/openclaw/pull/94493)** — Strips thinking blocks from completed Anthropic turns to prevent signature-related 400s (addresses #94228, related to #92201)
- **[#95218](https://github.com/openclaw/openclaw/pull/95218)** — Bounds provider JSON response reads (merged)
- **[#95896](https://github.com/openclaw/openclaw/pull/95896)** — Fixes model ID whitespace stripping (open)

**Stability Assessment:** The regression surface is broad and heavily concentrated in session state management, provider interaction, and the memory subsystem. The gateway memory leak (#91588) and the cross-provider thinking block issue (#95623) are the most urgent unaddressed items.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Description | Signal Strength |
|---|---|---|
| **[#90370](https://github.com/openclaw/openclaw/issues/90370)** | PostgreSQL as alternative to SQLite backend | 🟡 Medium — 11 comments, 👍2; architectural change, but user demand is clear for enterprise deployments |
| **[#8299](https://github.com/openclaw/openclaw/issues/8299)** | Config option to suppress sub-agent announce | 🟡 Medium — 7 comments; quality-of-life improvement for power users |
| **[#53638](https://github.com/openclaw/openclaw/issues/53638)** | Per-channel/per-group/per-DM model override in config | 🟡 Medium — 6 comments, 👍2; closed but may be revisited as model routing improves |
| **[#54794](https://github.com/openclaw/openclaw/issues/54794)** | Telegram Inline Query support | 🟠 Low-Medium — 6 comments, 👍2; stale since March, but inline queries are a common Telegram pattern |
| **[#43564](https://github.com/openclaw/openclaw/issues/43564)** | ACP Session Skill Context Injection | 🟠 Low — 4 comments; would allow skills to be injected into Codex/Pi/OpenCode sessions |
| **[#78431](https://github.com/openclaw/openclaw/issues/78431)** | Discord messages.statusReactions lifecycle | 🟠 Low — 5 comments; docs say it works but implementation is Telegram-only |

**Prediction for next release:** The automatic fast mode (#85104) and model routing improvements in v2026.6.10-beta.2 suggest the team is focused on **performance and reliability** for the next stable release. PostgreSQL support (#90370) is too large for a patch release but may appear as an experimental flag. Sub-agent announce suppression (#8299) and per-channel model overrides (#53638) are likely candidates for a minor release given their bounded scope.

---

## 7. User Feedback Summary

### Pain Points

1. **Silent failures dominate the experience.** Multiple issues (#86538, #85822, #86034, #95833) describe failures that occur without adequate logging, error messages, or recovery paths. Users are frustrated by "silent" lane blocks, delivery failures that look like generation failures, and sessions that break permanently without explanation.

2. **Upgrade regressions erode trust.** The memory store silent relocation (#95495), the Codex turn-completion stall regression (#88312), and the agents-ignoring-workspace regression (#85773) all represent cases where upgrades broke previously working behavior. Users need better migration safeguards and regression testing.

3. **Provider-specific issues are multiplying.** Anthropic thinking block signatures (#92201, #95623), DeepSeek V4 Flash (#88657), NVIDIA Build stream cuts (#95760), Ollama streaming (#94251), Vertex beta (#87996), and Bedrock inference profiles (#87318) all have active issues. The multi-provider surface area is growing faster than test coverage.

4. **Memory subsystem complexity.** The memory-wiki re-ingest issue (#95614, now fixed), memory-lancedb recall→forget gap (#95769), duplicate vector stores for shared workspaces (#95724), and the QMD backend path mangling on Windows (#92302) all point to a memory subsystem that is powerful but fragile.

5. **Gateway stability under sustained load.** The memory leak (#91588), the Telegram polling crash loop (#93375, now closed), and the release_lane no-op (#95248, now closed) all affect users running OpenClaw as a long-lived service.

### Satisfaction Indicators

- The fast mode feature (#85104) is a direct response to user complaints about latency (e.g., #85822, #84783), showing the team is listening to performance feedback.
- The active PR pipeline (500 PRs updated in 24h) suggests a highly engaged contributor community.
- Closed issues like #93375 (Telegram crash loop) and #95248 (stuck lane release) show the team is resolving critical stability issues.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

These issues are high-impact, have been open for weeks or months, and lack clear resolution paths:

| Issue | Age | Why It Matters |
|---|---|---|
| **[#91588](https://github.com/openclaw/openclaw/issues/91588)** — Gateway memory leak (350MB→15.5GB) | 14 days | 🔴 Critical: affects every long-running deployment; no fix PR |
| **[#95623](https://github.com/openclaw/openclaw/issues/95623)** — Cross-provider tool ID sanitizer gap | 1 day (but bricks sessions permanently) | 🔴 Critical: cross-provider failover is a core feature; no fix PR |
| **[#88838](https://github.com/openclaw/openclaw/issues/88838)** — SQLite migration tracking | 22 days | 🟠 High: the migration is "mostly done" but the tracking issue is the coordination point for remaining work |
| **[#86538](https://github.com/openclaw/openclaw/issues/86538)** — Session write-lock timeouts | 28 days | 🟠 High: blocks subagent delivery; no diagnostics for owners |
| **[#92201](https://github.com/openclaw/openclaw/issues/92201)** — Anthropic thinking signature replay | 12 days | 🟠 High: related fix PR #94493 is open but not yet merged |
| **[#90370](https://github.com/openclaw/openclaw/issues/90370)** — PostgreSQL backend support | 19 days | 🟡 Medium: architectural request; needs maintainer decision (accept/design/reject) |
| **[#85743](https://github.com/openclaw/openclaw/issues/85743)** — Orphan session heartbeat replay loop | 30 days | 🟠 High: no TTL on orphan sessions; wastes resources and can loop forever |
| **[#89095](https://github.com/openclaw/openclaw/issues/89095)** — Sub-agent timeout doesn't notify parent | 22 days | 🟡 Medium: affects users relying on sub-agent orchestration |
| **[#92516](https://github.com/openclaw/openclaw/issues/92516)** — Containerized deploys can't use externalized channel plugins | 11 days | 🟡 Medium: affects self-hosted/container users; security review needed |
| **[#54794](https://github.com/openclaw/openclaw/issues/54794)** — Telegram Inline Query support | 88 days (stale) | 🟠 Low: stale since March; needs triage (close or schedule) |

---

**Summary:** OpenClaw is in a high-activity stabilization phase. The v2026.6.10-beta.2 release introduced welcome performance improvements (fast mode) but the regression surface around session state, provider interactions, and the memory subsystem remains the dominant concern. The two unaddressed critical issues — the gateway memory leak (#91588) and the cross-provider thinking block brick (#95623) — should be the highest priority for the next patch release. The community is highly engaged (500 PRs in 24h), and several well-targeted fix PRs (#94493, #95218, #95896) are progressing through review.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**AI Agent & Personal AI Assistant Open-Source Landscape — 2026-06-23**

---

## 1. Ecosystem Overview

The personal AI agent open-source ecosystem is in a period of rapid expansion and intense competition. Twelve tracked projects span a spectrum from lightweight messaging bridges (PicoClaw, NanoClaw) to full-stack agent platforms (OpenClaw, Hermes Agent, IronClaw, ZeroClaw). The dominant theme across the ecosystem is **stabilization under growth**: most projects are simultaneously adding new channel integrations and provider support while grappling with session state management, memory subsystem reliability, and cross-platform compatibility regressions. Community engagement is exceptionally high — OpenClaw alone processed 500 PRs in 24 hours — signaling that these tools are moving from experimental to production-grade adoption. The competitive landscape is fragmenting along architectural lines: TypeScript/Node.js stacks (NanoBot, NanoClaw), Rust-native platforms (IronClaw, ZeroClaw), Python-based agents (Hermes Agent, CoPaw), and multi-language monoliths (OpenClaw) each target different developer personas.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Open Issues | Open PRs | Latest Release | Health Score |
|---|---|---|---|---|---|---|
| **OpenClaw** | 265 | 500 | 178 | 436 | v2026.6.10-beta.2 | ⚠️ Strained — high volume, broad regression surface |
| **Hermes Agent** | 50 | 50 | 41 | 34 | None recent | ⚠️ Active but strained — growing backlog |
| **ZeroClaw** | 50 | 50 | 42 | 48 | None (v0.9.0 pending) | ⚠️ Active — accumulating integration queue |
| **CoPaw** | 20 | 50 | 17 | ~45 | 1.1.12.post1 | ⚠️ Moderately healthy — 3 critical bugs open |
| **NanoBot** | 4 | 27 | ~few | 15 | v0.2.2 prep (imminent) | ✅ Healthy — focused stabilization sprint |
| **PicoClaw** | 2 | 44 | ~few | 10 | v0.3.0-nightly | ✅ Healthy — high velocity, backlog cleanup |
| **IronClaw** | 18 | 23 | ~many | ~many | None (Reborn rewrite) | ⚠️ Active but strained — critical regression at HEAD |
| **LobsterAI** | 0 new | 14 | 5 (all 80+ d old) | 8 | None recent | ⚠️ Integration-focused — stale bug backlog |
| **NanoClaw** | 0 new | 6 | 0 new | 5 | v2.1.1 | ✅ Stable — build cycle, low issue inflow |
| **NullClaw** | 0 new | 2 | 0 new | 2 | None recent | ✅ Stable — low activity, maintenance mode |
| **TinyClaw** | 0 | 0 | — | — | — | 🔇 Inactive |
| **Moltis** | 0 | 0 | — | — | — | 🔇 Inactive |
| **ZeptoClaw** | 0 | 0 | — | — | — | 🔇 Inactive |

**Health Score Key:** ✅ Healthy | ⚠️ Strained/Active | 🔴 Critical | 🔇 Inactive

---

## 3. OpenClaw's Position

### Advantages vs Peers

- **Dominant community scale**: OpenClaw's 500 PRs and 265 issues in 24 hours dwarfs all other projects combined. This creates a powerful contributor flywheel — more eyes on bugs, more fix PRs, faster iteration.
- **Breadth of provider support**: No other project matches OpenClaw's coverage of LLM providers (Anthropic, OpenAI, DeepSeek, NVIDIA Build, Ollama, Vertex, Bedrock, and more). This makes it the de facto "universal" agent platform.
- **Plugin ecosystem maturity**: The channel plugin architecture (Telegram, Slack, Discord, DingTalk, etc.) is the most mature in the ecosystem, with active contributors building and maintaining integrations.
- **Rapid response capability**: The team shipped a fix for the memory-wiki re-ingest bug (#95614) and bounded provider response reads (#95218) within the same day, demonstrating strong operational velocity.

### Technical Approach Differences

| Dimension | OpenClaw | Peers |
|---|---|---|
| **Architecture** | Monolithic TypeScript with plugin seams | IronClaw/ZeroClaw: Rust-native; NanoBot: lightweight TS; Hermes: Python |
| **Session storage** | SQLite migration in progress (from file-backed) | IronClaw: PostgreSQL-native; ZeroClaw: custom durable state; NanoBot: simpler store |
| **Memory subsystem** | Most advanced (memory-wiki, memory-lancedb, vector stores) — but also most fragile | CoPaw: scroll context manager; Hermes: Honcho OAuth; Others: minimal/no memory |
| **Multi-provider routing** | Most comprehensive, but regression-prone | IronClaw: focused provider set; NanoBot: simpler routing |
| **Deployment model** | CLI + gateway + WebUI | IronClaw: Reborn architecture with tenant/user model; ZeroClaw: Wasm-first; NanoBot: daemon-focused |

### Community Size Comparison

OpenClaw's open PR count (436) alone exceeds the total active PRs of the next 5 projects combined (~150). This 3:1 advantage in active contribution volume creates a significant moat in terms of feature velocity, bug fix throughput, and ecosystem breadth. However, it also creates a coordination challenge — the project is under "significant strain" managing the regression surface.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging as **ecosystem-wide priorities**, tracked by project:

### 4.1 Session State & Memory Management
- **OpenClaw**: SQLite migration (#88838), memory store silent relocation (#95495), memory-wiki re-ingest (#95614), memory-lancedb recall→forget gap (#95769)
- **CoPaw**: Context compaction freeze (#5218), scroll context manager (#5321), disabled skills re-enable on upgrade (#5262)
- **Hermes Agent**: state.db corruption from SIGTERM (#30636), session resume losing tool-loop state (#51089)
- **IronClaw**: Reborn regression — tasks hang at init with 0 LLM calls (#5139)
- **ZeroClaw**: Default 32k context budget exceeded on iteration 1 (#5808), history pruning refactor (#8196)

**Core need**: Durable, recoverable session state that survives restarts, supports large context windows, and doesn't silently corrupt.

### 4.2 Multi-Provider Compatibility
- **OpenClaw**: Anthropic thinking block signatures (#92201, #95623), DeepSeek V4 Flash (#88657), NVIDIA Build stream cuts (#95760), Ollama streaming (#94251)
- **Hermes Agent**: Anthropic OAuth `Bearer None` (#23370), Photon iMessage auth (#50755)
- **NanoBot**: Duplicate tool_use IDs from Anthropic (#4443), MCP enabledTools bypass (#4436)
- **CoPaw**: Custom provider function calling (#5345), Zhipu model test failures (#5330)
- **ZeroClaw**: MCP tools missing from TUI sessions (#8193), Kimi Code dead endpoint (#8154)

**Core need**: A robust abstraction layer that handles provider-specific quirks (thinking blocks, tool call formats, auth flows) without breaking sessions.

### 4.3 Gateway & Runtime Stability
- **OpenClaw**: Gateway memory leak 350MB→15.5GB (#91588), session write-lock timeouts (#86538), orphan session heartbeat loops (#85743)
- **NanoBot**: Gateway crash on MCP reconnection (#4441), SIGINT/SIGTERM handling (#4454, merged)
- **Hermes Agent**: launchd shutdown corruption (#30636), gateway update not restarting profiles (#38053)
- **IronClaw**: Nightly E2E failing for 26 days (#4108), critical regression at HEAD (#5139)
- **CoPaw**: Cron scheduler silently stops dispatching (#5398), startup crash (#5379)

**Core need**: Long-running process reliability — memory leak prevention, graceful shutdown, automatic recovery, and observable failure modes.

### 4.4 Channel Integration Expansion
- **NanoClaw**: Telegram merged (#2831), IMAP/SMTP email open (#1235)
- **NanoBot**: Mattermost in progress (#4459), DingTalk improvements (#4446)
- **PicoClaw**: SimpleX/Tox requested (#3093), Android ADB tool (#3157)
- **IronClaw**: Telegram channel requested (#5124)
- **LobsterAI**: DingTalk, Lark/Feishu, WeCom, POPO maintained via OpenClaw plugin compatibility

**Core need**: Universal messaging hub capability — users want one agent platform that connects to every communication channel they use.

### 4.5 Approval, Permission & Security Models
- **IronClaw**: Per-tool permission overrides (#5062), auto-approve settings (#5063), capability-based model
- **CoPaw**: Security keychain isolation (#5028), ToolGuard governance refactor (#5301)
- **NanoClaw**: Approval "reject with reason" (#2832)
- **ZeroClaw**: Supply-chain signing RFC (#8177), Wasm-first plugin security (#8135)
- **Hermes Agent**: Multiplexer credential leak (#51029), OAuth credential routing (#23370)

**Core need**: Fine-grained, user-friendly permission controls that enable autonomous agent action while maintaining security boundaries — especially critical for multi-tenant and multi-profile deployments.

---

## 5. Differentiation Analysis

### Feature Focus Matrix

| Project | Primary Focus | Secondary Focus | Target User |
|---|---|---|---|
| **OpenClaw** | Universal multi-provider agent platform | Channel plugin ecosystem, memory subsystem | Power users, self-hosters, multi-provider operators |
| **Hermes Agent** | Cross-platform agent with desktop app | Computer_use (Linux/Windows), Honcho memory | Desktop-first users, macOS/iOS ecosystem |
| **IronClaw** | Enterprise-grade Reborn architecture | Permission/approval model, multi-tenant | Enterprise teams, Rust-native deployments |
| **ZeroClaw** | Security-hardened agent framework | Wasm-first plugins, supply-chain signing | Security-conscious operators, compliance use cases |
| **CoPaw** | Full-featured agent console | Mobile responsiveness, context management | Developers wanting a polished UI, mobile users |
| **NanoBot** | Lightweight, fast agent daemon | Multi-channel, MCP integration | Developers wanting simplicity, server deployments |
| **PicoClaw** | Embedded/edge agent | IoT/mobile device control, skills system | Hardware hackers, Raspberry Pi/edge users |
| **NanoClaw** | Minimal agent with approval workflows | Email integration, multi-agent governance | Small teams, approval-heavy workflows |
| **LobsterAI** | OpenClaw-compatible enterprise layer | Plan mode, analytics dashboard | Chinese enterprise market, OpenClaw extenders |
| **NullClaw** | Matrix bridge agent | Channel reliability | Matrix community users |

### Technical Architecture Spectrum

```
Lightweight ◄────────────────────────────────────────────► Full-Stack
   NanoClaw    NanoBot    PicoClaw    CoPaw    Hermes    OpenClaw    IronClaw    ZeroClaw
   (minimal)   (daemon)   (edge)    (Python)  (Python)  (TS mono)   (Rust)      (Rust+Wasm)
```

### Target User Personas

- **OpenClaw**: "I need one agent that works with every LLM provider and every messaging platform."
- **IronClaw**: "I need an enterprise-grade agent platform with proper multi-tenant permissions."
- **ZeroClaw**: "I need a security-hardened agent with supply-chain guarantees."
- **NanoBot**: "I want a lightweight daemon that just works — Telegram, Slack, done."
- **Hermes Agent**: "I want a desktop app that controls my computer and automates my workflows."
- **CoPaw**: "I want a polished web console I can use on my phone."
- **PicoClaw**: "I want an agent on my Raspberry Pi that controls my hardware."

---

## 6. Community Momentum & Maturity

### Activity Tiers

**Tier 1 — Hyperactive (>40 PRs/24h, critical mass of contributors)**
- **OpenClaw**: 500 PRs, 265 issues. In stabilization sprint. Regression surface is broad but fix velocity is high. Risk: contributor burnout, quality control at scale.
- **ZeroClaw**: 50 PRs, 50 issues. In feature accumulation phase for v0.9.0. Architectural decisions (Wasm-first, supply-chain signing) are being actively debated and ratified.
- **Hermes Agent**: 50 PRs, 50 issues. Active but strained — 41 open issues, several P1 bugs unresolved for weeks. Telegram gateway is the most bug-prone surface.
- **CoPaw**: 50 PRs, 20 issues. Feature-stabilization sprint with a mobile responsiveness blitz (8 PRs from one contributor). 3 critical bugs are concerning.

**Tier 2 — Active (10-40 PRs/24h, focused development)**
- **PicoClaw**: 44 PRs, 2 issues. Exceptionally high velocity with backlog cleanup. Approaching v0.3.0 milestone. Healthy contributor engagement.
- **IronClaw**: 23 PRs, 18 issues. Deep in Reborn rewrite. Critical regression at HEAD (#5139) is the main risk — bisection needed urgently.
- **LobsterAI**: 14 PRs, 0 new issues. Focused on OpenClaw compatibility. Stale bug backlog (5 issues, all 80+ days) is a concern.

**Tier 3 — Steady (<10 PRs/24h, maintenance or early stage)**
- **NanoBot**: 27 PRs, 4 issues. Focused stabilization sprint. v0.2.2 imminent. Healthy and well-managed.
- **NanoClaw**: 6 PRs, 0 issues. In "build" cycle. Telegram merged, email integration pending. Stable but small community.
- **NullClaw**: 2 PRs, 0 issues. Maintenance mode. Small but reliable contributor base.

**Tier 4 — Inactive (0 PRs/24h)**
- TinyClaw, Moltis, ZeptoClaw — no activity in the tracking window.

### Maturity Assessment

| Project | Maturity Level | Evidence |
|---|---|---|
| **OpenClaw** | Production-grade, stabilization phase | Massive user base, broad regression surface, active fix pipeline |
| **IronClaw** | Pre-production (Reborn rewrite) | Daily dogfooding, critical regression, architectural overhaul |
| **ZeroClaw** | Maturing toward v0.9.0 | RFC-driven development, supply-chain hardening, integration QA |
| **Hermes Agent** | Production-grade, feature expansion | Desktop app, computer_use, cross-platform — but accumulating bugs |
| **CoPaw** | Production-grade, UX polish | Mobile responsiveness push, security fixes, but 3 critical bugs |
| **NanoBot** | Approaching production readiness | v0.2.2 imminent, focused scope, high fix velocity |
| **PicoClaw** | Active development, pre-1.0 | Nightly builds, v0.3.0 milestone, experimental features (ADB, remote) |
| **NanoClaw** | Early stage, stable | Small scope, low issue count, building core features |
| **LobsterAI** | Mature (integration layer) | OpenClaw compatibility focus, stale backlog |
| **NullClaw** | Maintenance mode | Minimal activity, small scope |

---

## 7. Trend Signals

### 7.1 The "Context Window War" Is the New Baseline
Projects are rapidly raising default context windows — NanoBot went from 65K→200K (#4448), OpenClaw supports 1M+ tokens via custom endpoints, and CoPaw is building a scroll context manager to bypass native compaction limits. **Implication**: Users now expect to work with full conversation histories, not truncated summaries. Projects that don't invest in context management will fall behind.

### 7.2 Memory Subsystems Are the Differentiator — and the Bottleneck
Every major project is investing in persistent memory (OpenClaw's memory-wiki, CoPaw's scroll context + recency ranking, Hermes' Honcho integration, IronClaw's skill extraction). But memory is also the #1 source of bugs: silent relocations, re-ingest corruption, recall→forget gaps. **Implication**: The project that solves reliable, user-controllable memory will have a significant competitive advantage.

### 7.3 Multi-Provider Support Is Table Stakes, but Fragility Is the Norm
Users routinely operate across Anthropic, OpenAI, DeepSeek, Ollama, and custom endpoints. No project has achieved truly robust multi-provider reliability — thinking block signatures, tool call format mismatches, and auth flow bugs are universal. **Implication**: Provider abstraction layers need formalized conformance testing, not just ad-hoc bug fixes.

### 7.4 Security Is Moving from Afterthought to Architecture
ZeroClaw's Wasm-first plugin system, supply-chain signing RFC, and CoPaw's keychain isolation fix represent a shift toward "secure by design." IronClaw's per-tool permission model (#5062, #5063) is the most granular in the ecosystem. **Implication**: Enterprise adoption will require demonstrable security posture — expect more projects to follow ZeroClaw's lead on supply-chain and Wasm-based sandboxing.

### 7.5 Mobile and Multi-Platform Are No Longer Optional
CoPaw's mobile responsiveness blitz (8 PRs), NanoBot's PWA support (#4458), and Hermes' cross-platform computer_use (Linux merged, Windows in progress) show that users expect agent platforms to work everywhere. **Implication**: Projects that remain desktop-only or CLI-only will lose users to platforms offering mobile and cross-platform experiences.

### 7.6 Approval Workflows and Agent Governance Are Emerging
NanoClaw's "reject with reason" (#2832), IronClaw's per-tool permission model (#5062), and CoPaw's ToolGuard governance refactor (#5301) all point to a need for human-in-the-loop governance as agents become more autonomous. **Implication**: The next wave of features will focus on agent autonomy controls — not just what agents can do, but how humans approve, audit, and constrain their actions.

### 7.7 The "Daemon-ization" of Agent Platforms
Users increasingly want to run agents as long-lived background services (NanoBot's daemon gateway issue #1461, OpenClaw's gateway memory leak #91588, Hermes' launchd integration). **Implication**: Production-grade process management (auto-restart, log rotation, resource limits, health monitoring) is becoming a core requirement, not a nice-to-have.

---

*Report generated by OWL — ZOO Company | Data snapshot: 2026-06-23 | Sources: GitHub project repositories as listed*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-23

---

## 1. Today's Overview

NanoBot is experiencing a **high-activity development day** with 27 PRs updated (15 open, 12 merged/closed) and 4 issues touched in the last 24 hours. The project is clearly in a **stabilization sprint** ahead of or following the v0.2.2 release, with a heavy concentration of bug fixes targeting gateway shutdown reliability, WebUI rendering races, and MCP transport lifecycle management. New channel integrations (Mattermost) and developer experience improvements (Node 24 bump, PWA support) are advancing in parallel. No new releases were published today, but the v0.2.2 preparation PR was merged yesterday, suggesting a release is imminent.

---

## 2. Releases

**No new releases today.** The most recent release preparation — `chore(release): prepare v0.2.2` ([#4454](https://github.com/HKUDS/nanobot/pull/4454)) — was merged on 2026-06-22. The release bundles multiple stability fixes (gateway shutdown, WebUI fork replay, MCP transport cleanup) and a default context window increase from 65K → 200K tokens. Users should watch for the tagged release shortly.

---

## 3. Project Progress

### Merged / Closed PRs (12 items)

| # | PR | Summary |
|---|-----|---------|
| [#4456](https://github.com/HKUDS/nanobot/pull/4456) | fix(gateway) | Tolerate cancelled channel tasks during shutdown — fixes remaining foreground gateway shutdown failures after #4454 |
| [#4454](https://github.com/HKUDS/nanobot/pull/4454) | fix | Stabilize gateway shutdown (SIGINT/SIGTERM handling) and WebUI fork replay race |
| [#4455](https://github.com/HKUDS/nanobot/pull/4455) | fix(webui) | Preserve fork replies during canonical history refresh — prevents assistant replies from disappearing |
| [#4453](https://github.com/HKUDS/nanobot/pull/4453) | fix(webui) | Follow active turn output after send; distinguish programmatic vs. user scroll |
| [#4451](https://github.com/HKUDS/nanobot/pull/4451) | fix(webui) | Stabilize sent turn layout and dev reloads; route sends through user-prompt anchor |
| [#4450](https://github.com/HKUDS/nanobot/pull/4450) | fix | Close MCP stdio transports from the agent task that opened them, avoiding AnyIO cancel-scope errors |
| [#4448](https://github.com/HKUDS/nanobot/pull/4448) | chore(config) | **Default context window raised from 65,536 → 200,000 tokens**; adds 200K as a WebUI/API option |
| [#4445](https://github.com/HKUDS/nanobot/pull/4445) | chore(release) | Prepare v0.2.2 — version bump, README news, ruff cleanup |

**Key takeaways:**
- **Gateway/WebUI stability blitz**: 5 of 12 merged PRs target shutdown correctness and WebUI rendering races. This is clearly the team's top priority.
- **MCP transport hardening**: Proper lifecycle management for stdio and streamable_http transports is being addressed across multiple PRs.
- **Context window increase**: The jump from 65K → 200K default is a significant UX improvement for users working with longer conversations or larger tool outputs.

### Notable Open PRs (active development)

| # | PR | Summary |
|---|-----|---------|
| [#4459](https://github.com/HKUDS/nanobot/pull/4459) | feat(channel) | **Mattermost channel support** — WebSocket + REST API with streaming responses |
| [#4460](https://github.com/HKUDS/nanobot/pull/4460) | chore | Bump to Node 24 |
| [#4458](https://github.com/HKUDS/nanobot/pull/4458) | feat(webui) | PWA support for mobile home screen installation |
| [#4446](https://github.com/HKUDS/nanobot/pull/4446) | feat(dingtalk) | Gate private chats + mention sender in group replies |
| [#4439](https://github.com/HKUDS/nanobot/pull/4439) | feat(tools) | Read-only `search_history` tool for memory recall |
| [#4443](https://github.com/HKUDS/nanobot/pull/4443) | fix | Guard against duplicate `tool_use` IDs in streamed responses (Anthropic) |
| [#4441](https://github.com/HKUDS/nanobot/pull/4441) | fix(mcp) | Force-close streamable_http generator on reconnect failure |
| [#4436](https://github.com/HKUDS/nanobot/pull/4436) | fix(tools) | Gate MCP resource/prompt registration behind `enabledTools` |
| [#4452](https://github.com/HKUDS/nanobot/pull/4452) | codex | Enforce MCP `enabledTools` for resources and prompts (alternative to #4436) |
| [#4291](https://github.com/HKUDS/nanobot/pull/4291) | feat(spawn) | Configurable model presets for subagents |

---

## 4. Community Hot Topics

### Most Discussed Issues

1. **[#1461](https://github.com/HKUDS/nanobot/issues/1461)** — *"Provide a unified daemon gateway semantic layer for multi-platform users"* (4 comments, closed)
   - **Underlying need**: Users want nanobot to run as a managed background daemon with standard `restart/status/logs` control, similar to `pm2` or `systemd` wrappers. This reflects demand for production-grade deployment ergonomics, especially from users running nanobot on servers or containers who don't want to manage raw process lifecycle.

2. **[#4413](https://github.com/HKUDS/nanobot/issues/4413)** — *"Telegram Bot API 10.1 rich messages"* (2 comments, open)
   - **Underlying need**: Telegram's new rich message formatting (expanded markdown entities) is not supported. Users sending formatted content through Telegram lose fidelity. This is a channel-capability gap that will grow as Telegram clients adopt the new rendering.

3. **[#4376](https://github.com/HKUDS/nanobot/issues/4376)** — *"User-friendly wizard"* (1 comment, 👍1, closed)
   - **Underlying need**: The `nanobot onboard --wizard` assumes too much technical knowledge. Non-technical users hit a wall during initial setup. This signals a **discoverability and onboarding friction** problem that could limit adoption beyond developer audiences.

### Analysis
The community is split between **platform expansion** (new channels, richer messaging) and **operational maturity** (daemon management, onboarding). The daemon gateway issue (#1461) has been open since March with no resolution — a signal that this architectural change is non-trivial or deprioritized.

---

## 5. Bugs & Stability

### Active Bug Reports & Fixes

| Severity | Issue / PR | Description | Status |
|----------|-----------|-------------|--------|
| 🔴 **Critical** | [#4443](https://github.com/HKUDS/nanobot/pull/4443) | Duplicate `tool_use` IDs in Anthropic streamed responses permanently brick sessions (HTTP 400 loop) | Fix PR open |
| 🔴 **Critical** | [#4441](https://github.com/HKUDS/nanobot/pull/4441) | Gateway crash: `RuntimeError: Attempted to exit cancel scope in a different task` on MCP reconnection failure | Fix PR open |
| 🟠 **High** | [#4436](https://github.com/HKUDS/nanobot/pull/4436) / [#4452](https://github.com/HKUDS/nanobot/pull/4452) | MCP `enabledTools` allowlist bypass — resources/prompts leak through deny-all config | Two competing fix PRs open |
| 🟠 **High** | [#4397](https://github.com/HKUDS/nanobot/pull/4397) | LLM ignores mid-turn user messages during tool chain execution | Fix PR open (labeled `[invalid]` — may need rework) |
| 🟡 **Medium** | [#4433](https://github.com/HKUDS/nanobot/pull/4433) | Pairing store silently denies valid sender IDs due to type coercion (int vs. str) | Fix PR open |
| 🟡 **Medium** | [#4456](https://github.com/HKUDS/nanobot/pull/4456) | Cancelled channel tasks cause gateway shutdown to fail | **Merged** ✅ |
| 🟡 **Medium** | [#4454](https://github.com/HKUDS/nanobot/pull/4454) | Foreground gateway doesn't handle SIGINT/SIGTERM properly | **Merged** ✅ |

### Stability Assessment
The project is in an **active bug-fix cycle**. The most severe issues (session-bricking duplicate tool_use IDs, gateway crashes on MCP reconnection) have open fix PRs but are not yet merged. The MCP `enabledTools` bypass has two competing PRs (#4436, #4452), which could indicate design disagreement — maintainers should consolidate. Overall, the velocity of fixes being merged is healthy.

---

## 6. Feature Requests & Roadmap Signals

### Likely in Next Release (v0.2.2 or v0.2.3)
- **Mattermost channel support** ([#4459](https://github.com/HKUDS/nanobot/pull/4459)) — PR is fresh, well-structured, and fills a clear gap alongside existing Slack/Discord/Telegram channels.
- **PWA support for WebUI** ([#4458](https://github.com/HKUDS/nanobot/pull/4458)) — Low-risk, high-UX-value addition for mobile users.
- **DingTalk private chat gating + group mention** ([#4446](https://github.com/HKUDS/nanobot/pull/4446)) — Incremental channel improvement, likely to merge quickly.

### Medium-Term Candidates
- **`search_history` tool** ([#4439](https://github.com/HKUDS/nanobot/pull/4397)) — Addresses a core memory/recall gap. Useful for agents that need to reference past conversations.
- **Subagent model presets** ([#4291](https://github.com/HKUDS/nanobot/pull/4291)) — Allows subagents to run on different models than the parent. Important for cost/performance optimization in multi-agent workflows.

### Longer-Term / Architectural
- **Daemon gateway semantic layer** ([#1461](https://github.com/HKUDS/nanobot/issues/1461)) — Open since March. Requires significant architectural work. No active PR.
- **Telegram rich messages** ([#4413](https://github.com/HKUDS/nanobot/issues/4413)) — Depends on upstream Telegram Bot API adoption curve.
- **User-friendly onboarding wizard** ([#4376](https://github.com/HKUDS/nanobot/issues/4376)) — Closed without resolution. Needs design work, not just engineering.

---

## 7. User Feedback Summary

### Pain Points
1. **Initial setup is too technical** — The `onboard --wizard` assumes CLI fluency and knowledge of providers, tokens, and config schemas. Non-technical users are blocked at step one. ([#4376](https://github.com/HKUDS/nanobot/issues/4376))
2. **Gateway process management is manual** — Users running nanobot in production want daemon-level lifecycle management (auto-restart, log rotation, status checks) without wrapping it in external tools. ([#1461](https://github.com/HKUDS/nanobot/issues/1461))
3. **MCP configuration is leaky** — The `enabledTools` allowlist not covering resources and prompts is a security/usability gap for users who want fine-grained control over MCP server capabilities. ([#4436](https://github.com/HKUDS/nanobot/pull/4436))
4. **Telegram formatting is stale** — Rich message support is table-stakes for users who rely on Telegram as their primary interface. ([#4413](https://github.com/HKUDS/nanobot/issues/4413))

### Satisfaction Signals
- High PR merge velocity (12 merged in 24h) suggests maintainers are responsive and the release cadence is healthy.
- The default context window increase to 200K ([#4448](https://github.com/HKUDS/nanobot/pull/4448)) directly addresses a common complaint about truncation in longer sessions.
- Multiple channel integrations in active development (Mattermost, DingTalk improvements) show the project is expanding its platform reach.

### Use Cases Observed
- **Multi-channel deployment**: Users are running nanobot across Telegram, Slack, DingTalk, and (soon) Mattermost — indicating team/enterprise use.
- **MCP-heavy workflows**: Multiple MCP-related bugs and fixes suggest users are actively integrating MCP servers, making transport stability critical.
- **Subagent orchestration**: The configurable model presets PR ([#4291](https://github.com/HKUDS/nanobot/pull/4291)) indicates advanced users are building multi-agent pipelines with cost/latency tradeoffs.

---

## 8. Backlog Watch

### Issues / PRs Needing Maintainer Attention

| # | Item | Age | Risk | Recommendation |
|---|------|-----|------|----------------|
| [#1461](https://github.com/HKUDS/nanobot/issues/1461) | Daemon gateway semantic layer | **4+ months** (Mar → Jun) | High — stale feature request from a user wanting production deployment support | Needs a design decision: either scope the work, provide a workaround (e.g., systemd unit template), or close with explanation |
| [#4291](https://github.com/HKUDS/nanobot/pull/4291) | Subagent model presets | 12 days | Medium — feature PR with no maintainer review | Needs review or status update; useful feature that's been waiting |
| [#4397](https://github.com/HKUDS/nanobot/pull/4397) | Mid-turn user message hint | 5 days | Medium — labeled `[invalid]` but the underlying problem (LLM ignoring interruptions) is real | Maintainer should clarify what's invalid — the approach or the problem statement |
| [#4413](https://github.com/HKUDS/nanobot/issues/4413) | Telegram rich messages | 4 days | Low — recent, but will grow in importance as Telegram clients adopt new rendering | Good candidate for a community PR; low implementation complexity |
| [#4436](https://github.com/HKUDS/nanobot/pull/4436) vs [#4452](https://github.com/HKUDS/nanobot/pull/4452) | Competing MCP `enabledTools` PRs | 2 days | Medium — two PRs solving the same problem could cause confusion | Maintainers should pick one approach and close the other to avoid fragmentation |

---

*Data snapshot: 2026-06-23 | Source: [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-23

---

## 1. Today's Overview

Hermes Agent remains in a high-activity phase with **50 issues** and **50 PRs** updated in the last 24 hours, indicating a large and engaged contributor base pushing rapid iteration. No new releases were published today, but the volume of merged/closed PRs (16) and closed issues (9) suggests active maintenance and bug-fix throughput. The project is grappling with platform-specific stability issues (Telegram, Windows, macOS launchd), cross-platform feature parity (computer_use on Linux/Windows), and security concerns around credential scoping in multi-profile setups. Overall project health is active but strained — the backlog of open issues (41) and open PRs (34) is growing, and several P1/P2 bugs remain unresolved for weeks.

---

## 2. Releases

**None.** No new versions were published on 2026-06-23.

---

## 3. Project Progress

### Merged / Closed PRs (selected highlights)

| PR | Summary |
|---|---|
| **#51115** [OPEN] | `fix(gateway): use get_secret for platform tokens in multiplexer scope` — addresses the credential-leak bug in multiplexed profiles (see §5). Not yet merged but opened today in direct response to issue #51029. |
| **#50952** [CLOSED] | `fix(models): fall back to canonical provider for context window on custom endpoints` — fixes incorrect 200k default context window for custom-endpoint models (e.g., Claude Opus 4 at 1M tokens). |
| **#48180** [CLOSED] | `feat(computer-use): add Linux backend` — delivers first-class Linux `computer_use` support via a linux-computer-use MCP driver, closing feature request #41044. |
| **#51103** [CLOSED] | `fix(desktop): manual tool previews via status stack` — stops auto-opening HTML/localhost previews on tool events; surfaces preview artifacts as status-stack links instead. |
| **#44335** [CLOSED] | `feat(memory): Honcho OAuth connect — desktop and CLI flows + token refresh` — adds one-click Honcho OAuth 2.1 PKCE flow, eliminating manual API key copy-paste. |
| **#50469** [CLOSED] | `fix(api): allow hermes update for git/pip installs inside containers` — unblocks the update API for git/pip installs running in containers (e.g., bind-mounted checkouts). |
| **#51111** [CLOSED] | `Feat/tui message events` — TUI message event handling improvements. |
| **#51104** [CLOSED] | `test: guard split web backend routing` — adds regression tests for SearXNG + Firecrawl split routing. |
| **#51087** [OPEN] | `feat(computer-use): add optional Windows backend` — opt-in Win32/PowerShell backend for `computer_use`, complementing the newly merged Linux backend. |

**Key themes:** Cross-platform `computer_use` expansion (Linux merged, Windows in progress), credential/auth hardening, and desktop UX polish.

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

1. **#48648** — [fix(telegram): Infinite streamed message duplication loop during 4096-char overflow](https://github.com/NousResearch/hermes-agent/issues/48648) — 4 comments, 👍1
   - **Underlying need:** Telegram's 4096-char limit is a hard boundary that the streaming logic doesn't handle gracefully. Users need reliable long-form response delivery on Telegram without infinite loops.

2. **#30636** — [state.db corruption from SIGTERM during launchd shutdown under high load](https://github.com/NousResearch/hermes-agent/issues/30636) — 4 comments
   - **Underlying need:** Data integrity during abrupt shutdowns. macOS users running Hermes as a launchd service need graceful SIGTERM handling to prevent `state.db` corruption — a critical reliability issue.

3. **#23370** — [Anthropic provider sends `Bearer None` to /chat/completions instead of /v1/messages with OAuth credential](https://github.com/NousResearch/hermes-agent/issues/23370) — 4 comments
   - **Underlying need:** Correct OAuth credential routing for Anthropic. Users with Claude Code OAuth tokens are silently falling back to a broken auth path.

4. **#50755** — [Photon iMessage: AuthenticationError on sendText after project secret rotation](https://github.com/NousResearch/hermes-agent/issues/50755) — 3 comments
   - **Underlying need:** Secret rotation should not break established iMessage DM sessions. PR #51075 is actively addressing this.

5. **#45323** — [Telegram rich tables rewritten into bullets by shared formatter](https://github.com/NousResearch/hermes-agent/issues/45323) — 3 comments
   - **Underlying need:** Platform-native rich formatting preservation. Telegram supports native table rendering, but the shared formatter was flattening tables to bullets.

### Most Reacted Issues

- **#46515** — 👍3 — [Telegram: final message falls back to MarkdownV2 instead of rich path](https://github.com/NousResearch/hermes-agent/issues/46515) — Users want the final persisted message to match the rich preview they saw during streaming.
- **#41044** — 👍1 — [computer_use should support Windows](https://github.com/NousResearch/hermes-agent/issues/41044) — Now addressed by PR #48180 (Linux) and PR #51087 (Windows).
- **#48648** — 👍1 — Telegram infinite loop (above).

**Analysis:** The dominant community pain points cluster around **Telegram reliability** (streaming, rich formatting, credential multiplexing) and **cross-platform parity** (computer_use on Linux/Windows, launchd/systemd handling). The Telegram gateway is clearly the most complex and bug-prone surface area.

---

## 5. Bugs & Stability

### Ranked by Severity

#### P1 — Critical

| Issue | Description | Fix PR |
|---|---|---|
| **#30636** | `state.db` corruption from SIGTERM during launchd shutdown (macOS, reproducible) | None open |
| **#23370** | Anthropic OAuth sends `Bearer None` — complete auth failure for OAuth users | None open |
| **#50090** [CLOSED] | Windows: bootstrap-installer kills Gateway without respawning — Telegram bot silently dead | Fixed (closed 2026-06-22) |

#### P2 — High

| Issue | Description | Fix PR |
|---|---|---|
| **#48648** | Telegram infinite message duplication loop on 4096-char overflow | None open |
| **#51029** | Multiplexer: secondary profile's platform token leaks from default profile | **#51115** (opened today) |
| **#51030** | Multiplexer: same-token collision detection dead for Telegram | None open |
| **#51089** | Session resume can lose in-progress tool-loop or compression state | None open |
| **#50199** | `delegation.base_url` ignored at runtime — cross-host delegation broken | None open |
| **#38053** | macOS launchd: `hermes update` doesn't restart all profile gateways | None open |
| **#50713** | Missing chat text after reopening sessions across multiple deployments | None open |
| **#50991** | Orphaned `_keep_typing` task persists Telegram typing indicator after idle eviction | None open |
| **#51009** | `/whoami` and other slash commands return "unknown command" in Desktop/TUI | None open |
| **#51053** | Image turns lose visual context on Codex app-server — agent drifts to unrelated context | None open |
| **#51051** | Cron job provider drift causes unintended paid inference spend ($7.73 incident) | **#51051** (PR open) |

#### P3 — Medium / Low

| Issue | Description | Fix PR |
|---|---|---|
| **#50755** | Photon iMessage `AuthenticationError` after secret rotation | **#51075** (open) |
| **#44183** | Desktop session lost after sleep/wake — WS orphan reap grace (20s) too short | None open |
| **#51099** | Honcho memory provider activates even when `honcho-ai` dependency missing | None open |
| **#51033** [CLOSED] | Linux: `list_windows` returns 0 despite apps running | Fixed (closed 2026-06-23) |
| **#42448** | Hermes Desktop OIDC login fails to trigger WebAuthn/Passkey/Touch ID | None open |
| **#51045** | Nous Portal: `openai/gpt-5.5` returns Azure 500 error since June 20 | None open |

**Stability assessment:** The multiplexer credential-leak bugs (#51029, #51030) are particularly concerning as they affect multi-profile security boundaries. PR #51115 is a timely response. The Telegram gateway continues to accumulate P2 bugs with no dedicated owner visible. The `state.db` corruption issue (#30636) has been open since May 22 with no fix — this is a data-loss risk for macOS users.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Description | Likelihood of near-term delivery |
|---|---|---|
| **#51087** / **#48180** | `computer_use` Windows + Linux backends | **High** — Linux merged, Windows PR open |
| **#49037** | First-class Projects with backend-authoritative session tree | **Medium** — large structural PR, open since June 19 |
| **#48644** | Cross-profile `delegate_task` with `profile` parameter | **Medium** — open PR, addresses #41889 |
| **#50680** | Snapshot channel context files for sessions | **Medium** — open PR, useful for Discord/thread workflows |
| **#51046** | i18n support for Telegram BotCommand menu descriptions | **Low** — marked duplicate, lightweight but no owner |
| **#51069** | Support project-local `.mcp.json` MCP server configs | **Low** — marked duplicate, but aligns with #51114 (project-local skills) |
| **#51114** | Project-local skills scoped to current repo/cwd | **Low-Medium** — opened today, no PR yet, but aligns with direction of #49037 |
| **#50885** | Button to create/delete workspace folders remotely in Desktop | **Low** — no PR, UX enhancement |
| **#41044** [CLOSED] | `computer_use` Windows support | **Delivered** — closed June 23 |

**Prediction for next release (likely v0.18.0):** Cross-platform `computer_use` (Linux + Windows), Honcho OAuth, desktop tool preview fixes, and context-window fixes for custom endpoints are strong candidates. The Projects rearchitecture (#49037) is too large for a patch release and may anchor a minor version bump.

---

## 7. User Feedback Summary

### Pain Points

- **Telegram is the #1 source of frustration:** Infinite loops on long messages (#48648), rich formatting lost on final send (#46515), tables flattened to bullets (#45323), typing indicator stuck forever (#50991), and credential leaking across profiles (#51029, #51030). Users on Telegram feel the experience is unreliable for production use.
- **Multi-profile / multiplexer is broken:** Two separate bugs (#51029, #51030) reveal that the multiplexer's credential isolation is fundamentally flawed — secondary profiles inherit the default profile's tokens, and collision detection is non-functional for Telegram.
- **Cross-host delegation is silently broken:** Issue #50199 reports that `delegation.base_url` is ignored, blocking a legitimate multi-machine workflow.
- **Data loss on macOS:** `state.db` corruption (#30636) from SIGTERM is a recurring, reproducible issue that erases user state.
- **Photon iMessage secret rotation breaks outbound:** Users who rotate secrets (a security best practice) find that iMessage sending breaks (#50755).
- **Cron jobs can cause unexpected spend:** A real $7.73 incident (#44585 / PR #51051) from provider drift in unpinned cron jobs.

### Satisfaction Signals

- The rapid merge of the Linux `computer_use` backend (#48180) and the immediate opening of a Windows counterpart (#51087) shows the team is responsive to cross-platform parity demands.
- Honcho OAuth (#44335) eliminates a significant UX friction point (manual API key handling).
- The desktop tool preview fix (#51103) addresses a specific UX regression that users reported.

### Use Cases Observed

- Multi-machine delegation (primary agent → remote worker model)
- Multi-profile Telegram bots (separate bots per profile on one gateway)
- Cron-scheduled autonomous jobs with strict cost controls
- iMessage integration via Photon for personal automation
- Desktop app as primary interface with workspace/project management

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Age | Severity | Notes |
|---|---|---|---|
| **#30636** — `state.db` corruption from SIGTERM | 32 days (May 22) | **P1** | Reproducible data-loss bug on macOS. No PR, minimal maintainer response despite 4 comments. |
| **#23370** — Anthropic `Bearer None` OAuth | 44 days (May 10) | **P1** | Complete auth failure for OAuth users. Closed June 22 but reopened — fix may be incomplete. |
| **#38053** — `hermes update` doesn't restart all launchd gateways | 20 days (Jun 3) | **P2** | Multi-profile macOS users must manually restart gateways after updates. |
| **#42448** — OIDC/WebAuthn/Passkey login fails in Desktop | 15 days (Jun 8) | **P3** | Blocks passwordless auth for custom OIDC providers (e.g., Authentik). |
| **#44183** — Desktop session lost after sleep/wake | 12 days (Jun 11) | **P3** | 20s orphan reap grace too short for normal Mac sleep/wake cycles. |
| **#46515** — Telegram rich message fallback to MarkdownV2 | 8 days (Jun 15) | **P2** | 👍3 — most upvoted active issue. Rich preview works but final send doesn't. |
| **#51045** — Nous Portal `gpt-5.5` Azure 500 since June 20 | 1 day | **P3** | Provider-side regression affecting all `openai/gpt-5.5` users through Nous Portal. |

### PRs Needing Maintainer Attention

| PR | Age | Notes |
|---|---|---|
| **#49037** — First-class Projects rearchitecture | 4 days | Large structural change; needs review bandwidth. |
| **#43950** — Gemma 4 reasoning token normalization | 12 days | UI rendering fix for local LLM users; low priority but easy win. |
| **#48644** — Cross-profile `delegate_task` | 5 days | Enables multi-machine delegation workflows. |
| **#51051** — Cron fail-closed for provider drift | 1 day | Addresses real financial incident; should be fast-tracked. |
| **#51115** — Multiplexer credential leak fix | 0 days (today) | Direct fix for #51029; security-adjacent, should be reviewed urgently. |

---

*Data source: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — snapshot 2026-06-23. All links reference the `NousResearch/hermes-agent` repository.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-23

---

## 1. Today's Overview

PicoClaw is in a period of exceptionally high development velocity. In the last 24 hours the project saw **44 PRs updated** (10 still open, 34 merged or closed) alongside **2 new open issues** and a fresh **nightly release** (`v0.3.0-nightly.20260622.287853ab`). The volume of closed/merged PRs — many of which are stale PRs from weeks ago finally being resolved — suggests the maintainers are doing a significant backlog cleanup pass. The project is clearly iterating rapidly toward a v0.3.0 milestone, with active work spanning provider compatibility, tool infrastructure, sandboxing, and new platform support (Android ADB, remote WebSocket mode).

---

## 2. Releases

- **Nightly Build: `v0.3.0-nightly.20260622.287853ab`** — Automated nightly build tagged on 2026-06-22. This is an unstable development snapshot. The full changelog spans all changes between `v0.3.0` and `main`, reflecting the broad set of fixes and features merged over recent weeks. Users should exercise caution in production.

---

## 3. Project Progress

A large batch of PRs was merged or closed today, many of which had been stale for 1–4 weeks. Key areas of progress:

**Bug Fixes & Hardening**
- **PR #3053** — Fixed unchecked `sync.Map.LoadOrStore` type assertion in `pkg/evolution/store.go` that could cause panics. Adds proper `ok` check with atomic fallback.
- **PR #3091** — Fixed discarded `ok` from type assertion on `native_search` in the OpenAI-compat provider, which could silently disable native search.
- **PR #2906** — Fixed message bus backpressure handling: publish operations now use bounded waiting instead of unbounded blocking on saturated queues, with per-stream drop statistics and health visibility.
- **PR #2907** — Fixed JSONL store metadata drift after crash by improving write ordering between `.jsonl` data and `.meta.json`.
- **PR #2913** — Fixed hot-path cloning and TTL refresh semantics in the JSONL session index, eliminating unnecessary full-index clones on cache hits.

**Features & Enhancements**
- **PR #3152** — Enhanced `picoclaw skills search` output to include installation instructions for discovered skills.
- **PR #3155** — Added `direct_reply` parameter with `SkipInboundTurn` support to the spawn tool, resolving duplicate message delivery when async callbacks both deliver to channel and trigger the main agent.
- **PR #2915** — Added `CommonModels` for the MiMo provider (`mimo-v2.5` multimodal, `mimo-v2.5-pro` text-only), improving WebUI model recommendations for vision-capable models.

**Dependency Updates (closed)**
- **PRs #3101, #3105** — Bumped `vite` to 8.0.16 and `eslint` to 10.4.1 in `/web/frontend`.

---

## 4. Community Hot Topics

- **[Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)** — *"I need SimpleX or tox"* (3 comments, 👍1). User requests gateway support for SimpleX, Wire, or Tox messaging protocols. This reflects demand for privacy-first communication channels beyond the currently supported platforms. No maintainer response visible yet.
- **[Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)** — *"Volcengine Doubao Seed tool calls occasionally leak as `<seed:tool_call>` text"* (0 comments). A concrete provider compatibility bug with a fix PR already opened (see §5). The underlying need is robust handling of non-standard tool call formats from various LLM providers.
- **[PR #3118](https://github.com/sipeed/picoclaw/pull/3118)** — *"Add remote Pico WebSocket mode to picoclaw agent"*. Enables `picoclaw agent --remote ws://...` for remote agent operation. This is a significant architectural extension, decoupling the agent from local execution.
- **[PR #3157](https://github.com/sipeed/picoclaw/pull/3157)** — *"Add Android ADB remote operations tool"*. Experimental tool for Android device interaction (screenshots, UI hierarchy, tap/swipe/input). Expands PicoClaw's device control surface to mobile.

---

## 5. Bugs & Stability

| Severity | Issue / PR | Status |
|----------|-----------|--------|
| 🔴 **High** | [Issue #3153](https://github.com/sipeed/picoclaw/issues/3153) — Doubao Seed tool calls leak as raw `<seed:tool_call>` XML text instead of being executed | **Fix PR open**: [#3154](https://github.com/sipeed/picoclaw/pull/3154) — recovers leaked tool calls from content via regex parsing |
| 🟡 **Medium** | [PR #3131](https://github.com/sipeed/picoclaw/pull/3131) — Missing `ok` checks for tool schema type assertions in `pkg/tools/registry.go` | Open, stale; could cause silent misconfiguration |
| 🟡 **Medium** | [PR #3128](https://github.com/sipeed/picoclaw/pull/3128) — Unhandled `resp.Body.Close()` errors in web search providers (Bing, Tavily, Sogou, Perplexity) | Open, stale; minor correctness issue |
| 🟢 **Low** | [PR #3158](https://github.com/sipeed/picoclaw/pull/3158) — Test coverage for sandbox filesystem Windows path handling | Open; test-only addition |

The Doubao Seed tool call leak is the most pressing user-facing bug and is actively being addressed. The pattern of unchecked type assertions across the codebase (evolution store, openai_compat provider, registry) suggests a systemic code quality concern that the community is incrementally fixing.

---

## 6. Feature Requests & Roadmap Signals

- **Messaging protocol expansion** ([#3093](https://github.com/sipeed/picoclaw/issues/3093)): SimpleX, Wire, or Tox gateway support. Given PicoClaw's existing multi-platform gateway architecture, this is a natural extension but no maintainer has signaled prioritization.
- **Remote agent mode** ([#3118](https://github.com/sipeed/picoclaw/pull/3118)): WebSocket-based remote agent execution. This is a significant feature that would enable headless/server deployments and is likely a candidate for v0.3.0.
- **Android ADB tool** ([#3157](https://github.com/sipeed/picoclaw/pull/3157)): Mobile device control. Experimental and disabled by default, but signals expansion into IoT/mobile automation.
- **Per-turn LLM token usage** ([#3156](https://github.com/sipeed/picoclaw/pull/3156)): Emitting real token consumption per assistant message. Important for cost tracking and quota management; likely high-value for production users.

**Prediction**: The remote WebSocket agent mode and token usage tracking are strong candidates for inclusion in v0.3.0, given their architectural significance and active PR status. The Android ADB tool may remain experimental for longer.

---

## 7. User Feedback Summary

- **Provider compatibility pain**: The Doubao Seed tool call leak ([#3153](https://github.com/sipeed/picoclaw/issues/3153)) highlights that users are running PicoClaw with a diverse set of LLM providers, and non-standard output formats from models like Doubao Seed are a real friction point. Users need the system to gracefully handle provider-specific quirks.
- **Messaging platform gaps**: At least one user ([#3093](https://github.com/sipeed/picoclaw/issues/3093)) needs privacy-focused messaging protocols (SimpleX/Tox), suggesting PicoClaw's user base includes privacy-conscious operators who need alternatives to mainstream platforms.
- **Skills discoverability**: The merged PR [#3152](https://github.com/sipeed/picoclaw/pull/3152) adding installation instructions to skills search output indicates users were confused about how to act on search results — a UX friction point now being addressed.
- **Overall satisfaction signal**: The high volume of community PRs (many from external contributors like `chengzhichao-xydt`, `danmobot`, `SiYue-ZO`) and the responsiveness of maintainers in merging stale PRs suggests a healthy, engaged contributor community.

---

## 8. Backlog Watch

- **[Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)** — *"I need SimpleX or tox"* — Open since 2026-06-10, 3 comments, no maintainer response. A clear user need with no visible prioritization.
- **[PR #3118](https://github.com/sipeed/picoclaw/pull/3118)** — *"Add remote Pico WebSocket mode"* — Open since 2026-06-12, stale. This is a substantial feature PR that would benefit from maintainer review or feedback, as it changes the agent execution model.
- **[PR #3131](https://github.com/sipeed/picoclaw/pull/3131)** — *"Fix registry type assertions"* — Open since 2026-06-15, stale. A straightforward correctness fix that should be low-risk to merge.
- **[PR #3128](https://github.com/sipeed/picoclaw/pull/3128)** — *"Fix resp.Body.Close() errors in web search"* — Open since 2026-06-15, stale. Minor cleanup, low risk.
- **[PR #3104](https://github.com/sipeed/picoclaw/pull/3104)** — *"Bump shadcn 4.7.0 → 4.11.0"* — Open since 2026-06-11, stale. Dependency update with potential frontend improvements; needs review or closure.

Several stale PRs from the `chengzhichao-xydt` contributor (type assertion fixes across evolution, openai_compat, and registry packages) have been open for 1–2 weeks. These are small, defensive fixes that could be batch-approved to reduce backlog clutter.

---

*Data source: [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw) | Digest generated for 2026-06-23*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-23

---

## 1. Today's Overview

NanoClaw shows moderate activity today with **6 PRs updated** (5 open, 1 closed) and **zero new issues**, indicating a stable but not idle period. The project is clearly in an active feature-expansion phase: contributors are pushing significant new integrations (IMAP/SMTP email, Telegram) alongside quality-of-life improvements (approval UX, poll-loop bugfix). The absence of new open issues and zero closed issues in the last 24h suggests the community is in a "build" cycle rather than a "report" cycle — a generally healthy sign. No new releases have been tagged recently, implying the team is accumulating features for a future versioned drop.

---

## 2. Releases

**No new releases today.** The latest release activity appears to have stalled while multiple feature PRs are still in-flight. The Telegram integration PR (#2831) references verification on **v2.1.1**, suggesting that is the most recent published version.

---

## 3. Project Progress

**Merged/Closed PRs today:**

- **[#2831 (CLOSED)] feat: add Telegram integration** — [Link](https://github.com/nanocoai/nanoclaw/pull/2831)
  - Author: aarchh | Created & closed on 2026-06-22
  - Adds Telegram as a new channel integration, verified working on v2.1.1. This is a significant milestone, expanding NanoClaw's messaging surface beyond existing channels. The fact that it was merged within hours of being opened suggests either a well-prepared PR or a high-priority integration.

**Open PRs advancing:**

- **[#1235] feat: add IMAP/SMTP email integration** — [Link](https://github.com/nanocoai/nanoclaw/pull/1235)
  - A substantial feature adding email as both a channel (inbox polling → agent messages) and a toolset (6 MCP tools via `imap-mcp-stdio`). This has been open since March 18, making it a long-running effort that may be nearing completion.

- **[#2832] feat(approvals): reject with reason** — [Link](https://github.com/nanocoai/nanoclaw/pull/2832)
  - Adds a third "Reject with reason…" button to approval cards, allowing approvers to relay context back to the requesting agent. This improves agent autonomy and reduces back-and-forth.

- **[#2830] fix(setup): reap dead peer service registrations** — [Link](https://github.com/nanocoai/nanoclaw/pull/2830)
  - Fixes a real operational pain point: deleting a NanoClaw checkout without uninstalling leaves orphaned launchd/systemd entries pointing at deleted binaries. On one test machine, 6 dead registrations accumulated.

- **[#2531] fix(poll-loop): suppress duplicate text when send_message fires mid-turn** — [Link](https://github.com/nanocoai/nanoclaw/pull/2531)
  - Addresses a message duplication bug in the poll loop, open since May 18 — a candidate for backlog attention (see Section 8).

- **[#2795] feat: add /add-clidash — read-only CLI-derived dashboard skill** — [Link](https://github.com/nanocoai/nanoclaw/pull/2795)
  - A utility skill adding a read-only dashboard derived from CLI data, open since June 17.

---

## 4. Community Hot Topics

With **zero new issues** and **no comments or reactions** recorded on any of the active PRs, there is no measurable "hot topic" by engagement metrics today. However, the **thematic signal** is clear:

- **Multi-channel expansion** is the dominant community priority. Two major channel PRs (Telegram merged, IMAP/SMTP email open) indicate users want NanoClaw to be the universal agent communication hub.
- **Agent autonomy & UX polish** — the "reject with reason" PR (#2832) signals that multi-agent approval workflows are a real use case, and users want richer feedback loops.

The lack of comments/reactions across the board is itself notable — it may indicate the project is still in a phase where contributors are building rather than debating, or that community engagement channels (Discord, Discussions) are more active than GitHub.

---

## 5. Bugs & Stability

| Severity | Issue / PR | Status | Fix PR |
|----------|-----------|--------|--------|
| **Medium** | Dead peer service registrations accumulating after uninstall (launchd/systemd orphans) | Open | [#2830](https://github.com/nanocoai/nanoclaw/pull/2830) — fix submitted |
| **Low** | Duplicate text in poll loop when `send_message` fires mid-turn | Open | [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) — fix submitted, open since May 18 |

No crashes, regressions, or data-loss bugs reported today. Both known bugs have associated fix PRs, which is a positive indicator of responsive maintenance.

---

## 6. Feature Requests & Roadmap Signals

Based on in-flight PRs and community activity, the following features are likely candidates for the **next release (v2.2.0 or v2.1.2)**:

1. **Telegram integration** — Already merged (#2831). Will be a headline feature.
2. **IMAP/SMTP email channel + toolset** — The largest open PR (#1235), touching both channel infrastructure and MCP tooling. Likely a marquee feature when merged.
3. **Approval workflow enhancements** — "Reject with reason" (#2832) suggests a broader investment in multi-agent governance UX. Expect follow-ups (e.g., approval templates, escalation chains).
4. **CLI dashboard skill** (#2795) — Smaller utility, likely to ship as a community skill rather than core.

**Predicted next release contents:** Telegram + Email integrations, approval UX improvements, poll-loop stability fix, and dead-registration cleanup.

---

## 7. User Feedback Summary

**Pain points identified:**
- **Uninstall hygiene** (#2830): Users are deleting checkouts without running uninstallers, creating orphaned system services. This suggests the uninstall process is either not well-documented or not prominent enough in the user journey.
- **Message duplication** (#2531): The poll-loop bug has been open for over a month, meaning users may be experiencing confusing duplicate responses during normal use.
- **Approval opacity** (#2832): Agents receiving a flat "declined" with no context is a workflow friction point, especially in multi-agent setups.

**Satisfaction signals:**
- The rapid merge of the Telegram PR (#2831) — same-day open and close — suggests a smooth contributor experience and responsive maintainers.
- The breadth of integrations being contributed (Telegram, Email, CLI dashboard) indicates an enthusiastic and invested contributor base.

**Dissatisfaction signals:**
- PR #2531 has been open for **35+ days** with a fix available but unmerged — this risks contributor frustration.
- PR #1235 (email integration) has been open for **97+ days** — a very long cycle for a feature PR, which may indicate scope creep, review bandwidth constraints, or architectural disagreements.

---

## 8. Backlog Watch

These items have been open an unusually long time and may need maintainer triage:

| PR | Days Open | Author | Summary | Risk |
|----|-----------|--------|---------|------|
| **[#1235](https://github.com/nanocoai/nanoclaw/pull/1235)** — IMAP/SMTP email integration | **97 days** | aronjanosch | Major channel + toolset feature | High — longest open PR; contributor may lose motivation; merge conflicts likely accumulating |
| **[#2531](https://github.com/nanocoai/nanoclaw/pull/2531)** — poll-loop duplicate text fix | **35 days** | cfis | Bug fix with a clear PR | Medium — users still affected; simple fix that should be merged or explicitly deferred |
| **[#2795](https://github.com/nanocoai/nanoclaw/pull/2795)** — /add-clidash skill | **6 days** | leetwito | Utility skill | Low — recently opened, but worth acknowledging |

**Recommendation:** Prioritize a decision on #1235 (merge, request changes, or close) and merge or comment on #2531. Long-open PRs with no maintainer response are the top risk to community momentum.

---

*Generated by OWL — Project Digest for NanoClaw (github.com/nanocoai/nanoclaw) — 2026-06-23*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for 2026-06-23.

---

# NullClaw Project Digest — 2026-06-23

## 1. Today's Overview

NullClaw saw modest activity on 2026-06-23, with no new issues reported and no releases published. Two pull requests remain open and were last updated within the past 24 hours, indicating ongoing but low-intensity contributor engagement. The project appears to be in a maintenance and incremental-improvement phase rather than a feature-expansion sprint. No critical incidents or regressions were flagged today. Overall project health is stable, with a small but active contributor base chipping away at reliability and dependency hygiene.

## 2. Releases

No new releases were published on or around 2026-06-23. The latest release information is not available in today's data window.

## 3. Project Progress

No PRs were merged or closed today. However, two open PRs represent meaningful forward progress:

- **PR #968 — fix(matrix): persist `next_batch` across restart + test env isolation** ([nullclaw/nullclaw#968](https://github.com/nullclaw/nullclaw/pull/968)) — This PR addresses a reliability gap in the Matrix channel integration where the `/sync` cursor (`next_batch`) was stored only in RAM, causing every restart to trigger a full initial sync. Persisting this cursor to disk would eliminate redundant sync cycles and reduce homeserver load. The PR also includes test environment isolation improvements, which strengthens CI reliability.

- **PR #956 — ci(deps): bump alpine from 3.23 to 3.24** ([nullclaw/nullclaw#956](https://github.com/nullclaw/nullclaw/pull/956)) — A routine Dependabot-driven Docker base-image update. Keeping the Alpine base current ensures security patches and toolchain improvements flow into the build pipeline.

## 4. Community Hot Topics

With zero issues and only two open PRs (neither with comments or reactions), there is no discernible community "hot topic" today. PR #968 is the most substantive contribution and would benefit from maintainer review and community testing, particularly from users running the Matrix channel integration in production.

## 5. Bugs & Stability

- **Matrix `next_batch` not persisted across restarts** — *Severity: Medium.* Every NullClaw restart forces a full initial `/sync` against the Matrix homeserver, which is wasteful and can cause message-processing delays. This is tracked and actively being fixed in [PR #968](https://github.com/nullclaw/nullclaw/pull/968). No workaround is documented; users on the Matrix channel should monitor this PR for merge timing.

No crashes, regressions, or data-loss bugs were reported today.

## 6. Feature Requests & Roadmap Signals

No new feature requests were filed today. The dominant signal in the open-PR queue is **reliability and infrastructure hardening** — specifically, persisting channel state across restarts (PR #968) and keeping build dependencies current (PR #956). This suggests the project's near-term roadmap is focused on operational stability rather than new capabilities. If the Matrix cursor-persistence fix lands, it may unlock more confident use of NullClaw as a long-running Matrix bridge, which could in turn surface feature requests around richer Matrix feature support (e.g., reactions, threads, E2EE).

## 7. User Feedback Summary

No new user feedback (issues, comments, or reactions) was recorded today. The Matrix sync-cursor bug fixed in PR #968 implies a latent pain point for users running NullClaw as a persistent Matrix integration — restarts are disruptive and inefficient. Once merged, this should meaningfully improve satisfaction for that user segment.

## 8. Backlog Watch

- **PR #956 — Alpine 3.23 → 3.24 bump** ([nullclaw/nullclaw#956](https://github.com/nullclaw/nullclaw/pull/956)) — Created 2026-06-15, last updated 2026-06-22. This Dependabot PR has been open for 8 days with no maintainer action. While low-risk, it should be merged or closed promptly to prevent dependency drift and keep the Dependabot queue clean.

- **PR #968 — Matrix `next_batch` persistence** ([nullclaw/nullclaw#968](https://github.com/nullclaw/nullclaw/pull/968)) — Created and last updated 2026-06-22. This is the highest-value open PR. It addresses a real reliability gap and includes test improvements. Maintainer review and merge should be prioritized.

---

*Data source: github.com/nullclaw/nullclaw — snapshot 2026-06-23.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-23

---

## 1. Today's Overview

IronClaw remains in a high-activity development phase with **18 issues** and **23 pull requests** updated in the last 24 hours. The project is deep in the "Reborn" rewrite cycle, with significant work on approval/permission models, automation lifecycle, performance investigation, and a large-scale crate decomposition effort. No new releases were published today. The overall health signal is **active but strained**: a critical regression on `main` is causing task hangs (Issue #5139), nightly E2E is failing (Issue #4108), and several large architectural PRs are in-flight simultaneously, creating merge-conflict risk.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours.

---

## 3. Project Progress

The following PRs were merged or closed today, representing concrete feature advancement:

| PR | Summary |
|---|---|
| **#5085** [CLOSED] | **Concurrent turn execution** — Reborn runtime moves from strictly serial `TurnRunnerWorker` to a `TurnRunScheduler` with per-user/per-type concurrency caps. This is a major throughput improvement for multi-user deployments. |
| **#5063** [CLOSED] | **Per-turn auto-approve resolution** — DB-backed per-`(tenant, user)` global "auto-approve eligible tools" setting store (`AutoApproveSettingStore`) with in-memory and filesystem (CAS-versioned) backends. No restart required to change approval behavior. Closes #4959. |
| **#5062** [CLOSED] | **Per-tool permission override model** — Adds `CapabilityPermissionState` / `CapabilityPermissionOverride` types serialized as `always_allow`, `ask_each_time`, and `disabled`. Implements `CapabilityPermissionOverrideStore` keyed by `(tenant, user, capability)`. Closes #4958. |
| **#5140** [CLOSED] | **Trigger input error surfacing** — Fixes opaque `builtin.trigger_create` invalid-input failures by carrying structured, sanitized repair details through runtime and loop-visible capability failures. |
| **#5081** [CLOSED] | **Hosted single-tenant Postgres profile** — Adds `hosted-single-tenant` Reborn profile keeping local-dev product/runtime surface while using PostgreSQL-backed durable state. Narrow hosted preview path. |
| **#5116** [CLOSED] | **Dependency bump (Rust)** — 43 updates including `agent-client-protocol` 0.10.4→0.15.0, `refinery` 0.8.16→0.9.2. |
| **#5135** [CLOSED] | **God-crate decomposition (superseded)** — Closed in favor of incremental PR #5137. |
| **#4985** [CLOSED] | **Engine V2 LLM usage persistence** — `GET /api/admin/usage` now returns data on Engine V2 deployments. |

**Key takeaway:** The approval/permission system landed two major PRs (#5062, #5063) that together deliver a complete per-tool, per-user permission model with a global auto-approve toggle — a significant UX milestone for Reborn. Concurrent turn execution (#5085) addresses a known scalability bottleneck.

---

## 4. Community Hot Topics

**Most commented issues:**

- **Issue #4879** — *IronClaw Reborn Local Dogfooding Findings 06/15–06/21* (2 comments) — The team is systematically dogfooding Reborn locally. This is the prior week's tracking issue; the new week's issue is #5119. [nearai/ironclaw#4879](https://github.com/nearai/ironclaw/issues/4879)

- **Issue #5139** — *Reborn regression: web/research tasks hang at init (0 LLM calls) on main HEAD* (1 comment) — **This is the most critical active issue.** Since `main` advanced 10 commits (2b2ccc55→704fcd43), Reborn wedges at task init on web/research tasks with zero LLM/tool calls. 21/147 PinchBench tasks zeroed today. [nearai/ironclaw#5139](https://github.com/nearai/ironclaw/issues/5139)

- **Issue #5129** — *[Reborn] Investigate Always approve not working for outbound_delivery_target_set* (1 comment) — Suggests the newly-merged auto-approve system (#5063) may have a coverage gap for certain tool types. [nearai/ironclaw#5129](https://github.com/nearai/ironclaw/issues/5129)

**Underlying needs analysis:** The community is converging on **Reborn stability and polish** as the critical path. The regression at HEAD (#5139) is blocking reliable evaluation (PinchBench), and the "always approve" gap (#5129) suggests the permission model needs broader integration testing. The performance tracking issues (#5125–#5128) signal that perceived slowness is becoming a first-class concern as the team shifts from feature-building to daily-driver usage.

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| 🔴 **Critical** | [#5139](https://github.com/nearai/ironclaw/issues/5139) | Reborn regression: web/research tasks hang at init, 0 LLM calls, 21/147 PinchBench tasks failed | None yet — needs bisection of 10 commits |
| 🔴 **Critical** | [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed (ongoing since 05/27, last failure 06/22) | None visible |
| 🟡 **Medium** | [#5129](https://github.com/nearai/ironclaw/issues/5129) | "Always approve" not working for `outbound_delivery_target_set` | Likely related to #5063 which just landed — needs verification |
| 🟡 **Medium** | [#5120](https://github.com/nearai/ironclaw/issues/5120) | Inconsistent gate declined semantics (`Declined` vs `Deny` vs `Canceled`) across auth, approval, and activity projection | None yet |
| 🟢 **Low** | [#4925](https://github.com/nearai/ironclaw/issues/4925) | NEAR AI MCP shows "SETUP NEEDED" despite being ready — **CLOSED** | Fixed |

**Action needed:** Issue #5139 requires immediate bisection. The 10-commit window (2b2ccc55→704fcd43) likely includes one of today's merged PRs (#5085, #5063, #5062, #5140, #5081) as the culprit.

---

## 6. Feature Requests & Roadmap Signals

**Open feature-tracking issues created today:**

- **Issue #5124** — *Support Telegram channel for IronClaw Reborn* — Telegram inbound/outbound through the Reborn channel/ProductAdapter path instead of legacy v1. [nearai/ironclaw#5124](https://github.com/nearai/ironclaw/issues/5124)

- **Issue #5122** — *Add Reborn automation delete support* — DELETE route + WebUI v2 control for Reborn automations. PR #5133 is already open. [nearai/ironclaw#5122](https://github.com/nearai/ironclaw/issues/5122)

- **Issue #5121** — *Add Reborn automation pause/resume support* — Pause/resume across trigger repository, host-runtime, product facade, WebUI v2. PR #5131 is already open. [nearai/ironclaw#5121](https://github.com/nearai/ironclaw/issues/5121)

- **Issue #5123** — *[Reborn] Automations Findings 06/22–06/28* — Weekly automation dogfooding tracker.

**In-flight feature PRs:**

- **PR #5061** — *Skill extraction & self-evolution with activation controls* — Hermes-style background skill distillation from successful turns. [nearai/ironclaw#5061](https://github.com/nearai/ironclaw/pull/5061)

- **PR #5094** — */v1/models, model validation, external-tool gate foundation* — OpenAI-compatible surface. [nearai/ironclaw#5094](https://github.com/nearai/ironclaw/pull/5094)

- **PR #5137** — *Extract ironclaw_reborn_http_kit (1/N)* — Incremental decomposition of the ~132k-line `ironclaw_reborn_composition` god-crate. [nearai/ironclaw#5137](https://github.com/nearai/ironclaw/pull/5137)

**Prediction:** The next release (or pre-release) will likely include the automation lifecycle (delete/pause/resume), the Telegram channel, and the god-crate decomposition. Skill extraction (#5061) and the OpenAI-compatible `/v1/models` surface (#5094) are medium-term bets.

---

## 7. User Feedback Summary

**Pain points from dogfooding (Issues #4879, #5119):**
- Reborn WebUI startup and first-run usability problems remain a friction point
- Model-provider setup is still not smooth for local development
- Perceived slowness during local usage is now being formally tracked (#5125–#5128)

**Permission/approval UX (Issues #4958, #4959, #5129):**
- Users want a simple global "auto-approve" toggle — now delivered via #5063
- Per-tool granularity (`always_allow`/`ask_each_time`/`disabled`) is now delivered via #5062
- However, edge cases like `outbound_delivery_target_set` suggest the model doesn't cover all tool types yet

**Satisfaction signals:**
- The team is dogfooding Reborn daily, which is a strong commitment signal
- Rapid PR turnaround (multiple XL PRs merged today) suggests healthy review throughput
- The shift from "building features" to "performance and polish" (#5125) indicates growing maturity

---

## 8. Backlog Watch

Items needing maintainer attention:

| Item | Age | Risk | Note |
|---|---|---|---|
| **Issue #4108** — Nightly E2E failed | **26 days** (since 05/27) | 🔴 High | E2E has been failing for over a month. This is a project health red flag — either the tests are flaky or `main` has been broken. Needs triage. [nearai/ironclaw#4108](https://github.com/nearai/ironclaw/issues/4108) |
| **Issue #5139** — Reborn regression at HEAD | 1 day | 🔴 High | Zero-LLM-call hang on web/research tasks. Needs immediate bisection. [nearai/ironclaw#5139](https://github.com/nearai/ironclaw/issues/5139) |
| **PR #4032** — WASM dependency bump | 28 days | 🟡 Medium | Stale dependabot PR for `wit-component`/`wit-parser`. Low risk but accumulating drift. [nearai/ironclaw#4032](https://github.com/nearai/ironclaw/pull/4032) |
| **PR #4787** — Barcelona Hackathon fork | 11 days | 🟢 Low | Marked `[NO MERGE]`. Stability fork for hackathon. Should be closed or archived after the event. [nearai/ironclaw#4787](https://github.com/nearai/ironclaw/pull/4787) |
| **PR #4712** — Move Slack setup into WebUI | 13 days | 🟡 Medium | Large PR, core contributor. Needs review bandwidth. [nearai/ironclaw#4712](https://github.com/nearai/ironclaw/pull/4712) |

---

*Generated by OWL — 2026-06-23*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-23

## 1. Today's Overview

LobsterAI is in a high-activity phase on the integration side: 14 PRs touched in the last 24 hours (6 closed/merged, 8 still open), while 5 stale issues from early April received updates but remain unresolved. All closed PRs today are authored by the same contributor (`btc69m979y-dotcom`) and cluster tightly around OpenClaw compatibility and documentation — suggesting a focused effort to keep pace with upstream OpenClaw releases (v2026.6.1). No new releases shipped today. The issue tracker is accumulating stale bugs (all 5 open issues are 80+ days old), indicating that the team's development bandwidth is currently consumed by infrastructure and integration work rather than bug triage.

## 2. Releases

None. No new releases in the last 24 hours.

## 3. Project Progress

**6 PRs were merged/closed today**, advancing two major themes:

### OpenClaw v2026.6.1 Compatibility & Plugin Infrastructure
- **[PR #2185](https://github.com/netease-youdao/LobsterAI/pull/2185)** — Fix: added missing `GetReplyOptions.cwd` field to the OpenClaw v2026.6.1 run-cwd patch, resolving plugin SDK declaration generation breakage.
- **[PR #2186](https://github.com/netease-youdao/LobsterAI/pull/2186)** — Fix: compile NIM plugin runtime entry via shared TypeScript plugin preparation scripts, ensuring Bee and NIM channel plugins are built reproducibly before OpenClaw CLI installation.
- **[PR #2182](https://github.com/netease-youdao/LobsterAI/pull/2182)** — Fix: upgraded preinstalled OpenClaw IM plugins (DingTalk, Lark/Feishu, WeCom, POPO) and added support for OpenClaw 2026.6.1 plugin install layouts under both `extensions/` and `npm/projects/` paths.

### Testing & Documentation Alignment
- **[PR #2187](https://github.com/netease-youdao/LobsterAI/pull/2187)** — Test: aligned renderer model defaults and history reconciliation tests with updated OpenClaw metadata expectations (146 Vitest tests passed).
- **[PR #2184](https://github.com/netease-youdao/LobsterAI/pull/2184)** — Docs: refreshed `AGENTS.md` to reflect current Cowork/OpenClaw architecture, added Codex instruction scope and quality gate documentation.

### New Feature: Plan Mode in Cowork
- **[PR #2183](https://github.com/netease-youdao/LobsterAI/pull/2183)** — Feat: added **Plan Mode** to the Cowork composer. Users can now propose, review, copy, download, expand, and approve plans as separate interactive blocks before execution, preventing tool mutations during the planning phase.

## 4. Community Hot Topics

All 5 open issues and 6 open PRs are stale (80+ days old, last updated in the past 24h but created in early April). None have significant reactions or multiple comments. The most notable items by substance:

- **[Issue #1411](https://github.com/netease-youdao/LobsterAI/issues/1411)** — **Profile page "Usage Overview" time-dimension filter unresponsive**: The "Past 30 days" dropdown on the `#/profile` page shows a pointer cursor but is non-functional. This is a core analytics UI blocker affecting all desktop users. No fix PR exists yet.

- **[Issue #1414](https://github.com/netease-youdao/LobsterAI/issues/1414)** — **"Total Sessions" always shows 0**: Despite API call counts and credit usage populating correctly, session count is broken. This suggests a missing query or aggregation bug in the stats pipeline.

- **[PR #1420](https://github.com/netease-youdao/LobsterAI/pull/1420)** — **Cron pollOnce concurrency fix**: Addresses reentrancy and ghost events in the cron service — a stability issue that could cause event storms.

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Link | Fix PR |
|----------|-------|------|--------|
| **High** | Profile "Total Sessions" counter always 0 — data integrity issue | [#1414](https://github.com/netease-youdao/LobsterAI/issues/1414) | None |
| **High** | CronJobService pollOnce reentrancy / ghost events — can cause event storms | — | [#1420](https://github.com/netease-youdao/LobsterAI/pull/1420) ⏳ open |
| **High** | OpenClaw Token Proxy has no request body size limit — OOM risk | — | [#1407](https://github.com/netease-youdao/LobsterAI/pull/1407) ⏳ open |
| **Medium** | Profile "Usage Overview" time filter non-functional on desktop | [#1411](https://github.com/netease-youdao/LobsterAI/issues/1414) | None |
| **Medium** | MCP Bridge handleRequest ignores Promise returns — potential hangs | — | [#1408](https://github.com/netease-youdao/LobsterAI/pull/1408) ⏳ open |
| **Medium** | Scheduled tasks fire but don't generate history records (cross-day) | [#1409](https://github.com/netease-youdao/LobsterAI/issues/1409) | None |
| **Medium** | Profile page UI layout broken after switching to English | [#1416](https://github.com/netease-youdao/LobsterAI/issues/1416) | None |
| **Low** | Skills display in prompt input bar becomes unwieldy with many skills | [#1413](https://github.com/netease-youdao/LobsterAI/issues/1413) | None |
| **Perf** | SqliteStore.set() syncs to disk on every write — blocks event loop during streaming | — | [#1410](https://github.com/netease-youdao/LobsterAI/pull/1410) ⏳ open |

**Key observation**: 4 open PRs from April (#1407, #1408, #1410, #1415, #1419, #1420) have been stale for 80+ days — they include real security (OOM) and stability (cron concurrency) fixes that need maintainer review.

## 6. Feature Requests & Roadmap Signals

**Plan Mode (shipped today):** The newly merged Plan Mode workflow ([PR #2183](https://github.com/netease-youdao/LobsterAI/pull/2183)) signals investment in structured agent interaction — letting users approve execution plans before tool calls fire.

**SQLite write batching:** Multiple stale PRs (#1410, #1415, #1421) focus on database write optimization, caching for memory queries, and migration reliability. These suggest the team is aware of performance bottlenecks in the storage layer but hasn't prioritized merging the fixes. Expect these to surface in a future maintenance release.

**Internationalization polish:** Issue #1416 (English UI overlap on profile page) indicates incomplete i18n support for longer-language strings — a known debt item.

## 7. User Feedback Summary

The 5 active issues paint a consistent picture of **accumulated desktop client UX debt**:

- **Profile/Analytics page is broken in multiple ways**: broken filter, zeroed counter, language-switch layout breakage. This is a user-facing dashboard that is essentially non-functional for English users and partially broken for Chinese users.
- **Cron/Scheduled task reliability**: Cross-day scheduled tasks execute but leave no audit trail (Issue #1409), undermining trust in automation features.
- **Security-conscious users are filing PRs, not just issues**: Contributors like `liulingfeng` and `choyuenga` submitted well-written fix PRs for OOM protection, Promise handling, sqlite concurrency, and IM mappings — but these have languished for months. The community is willing to fix problems but is not getting maintainer engagement.

## 8. Backlog Watch

These stale PRs and issues have been open since **early April 2026** (80+ days) with substantive fixes or clear bug reports but no maintainer response:

1. **[PR #1407](https://github.com/netease-youdao/LobsterAI/pull/1407)** — OpenClaw Token Proxy OOM protection (`liulingfeng`, +10MB body limit). **Security fix. Review urgently.**
2. **[PR #1420](https://github.com/netease-youdao/LobsterAI/pull/1420)** — Cron pollOnce concurrency & ghost events (`choyuenga`). **Stability fix. Review urgently.**
3. **[PR #1408](https://github.com/netease-youdao/LobsterAI/pull/1408)** — MCP Bridge uncaught Promise rejection (`liulingfeng`). Prevents Node.js crashes.
4. **[PR #1419](https://github.com/netease-youdao/LobsterAI/pull/1419)** — NIM group type enum mapping fix (`choyuenga`). Fixes group name resolution.
5. **[Issue #1411](https://github.com/netease-youdao/LobsterAI/issues/1411)** — Profile time-dimension filter unresponsive. Deserves an official response or assignment.
6. **[Issue #1414](https://github.com/netease-youdao/LobsterAI/issues/1414)** — Total Sessions always 0. Likely needs a hotfix.

**Health indicator**: The project has strong developer-side velocity (6 focused PRs merged today, all in OpenClaw integration) but a growing gap on bug triage and stale PR review. Breaking the 80-day backlog on critical PRs would significantly improve community contributor retention and product stability.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-23

**Repository:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

## 1. Today's Overview

CoPaw is in a high-activity development phase with **20 issues** and **50 pull requests** updated in the last 24 hours, signaling a very active contributor base and rapid iteration cycle. No new releases were published today, but the project is clearly in a feature-stabilization sprint — a large wave of mobile responsiveness PRs, context/memory management improvements, and bug fixes are all in-flight simultaneously. The volume of open bugs (17 of 20 issues are still open) and the presence of several regressions in the current `1.1.12.post1` release suggest the team is playing catch-up on stability while also pushing new capabilities. The project health is **moderately healthy**: development velocity is strong, but the backlog of unresolved bugs and the absence of a new release to ship accumulated fixes is a concern.

---

## 2. Releases

**No new releases today.** The latest published version remains `1.1.12.post1`. Multiple merged PRs (see Section 3) have accumulated that would logically feed into a `1.1.13` or `1.2.0` release, including security fixes, mobile UI adaptations, and context management improvements.

---

## 3. Project Progress

The following PRs were merged or closed in the last 24 hours:

| # | PR | Author | Summary |
|---|-----|--------|---------|
| [#5028](https://github.com/agentscope-ai/CoPaw/pull/5028) | `fix(security): isolate keychain master key per install` | ekzhu | **Security fix** — previously every CoPaw install on the same machine shared the same OS keychain master key, creating a cross-install secret leakage risk. Now each install derives a unique key scoped to its `SECRET_DIR`. |
| [#5027](https://github.com/agentscope-ai/CoPaw/pull/5027) | `feat(acp): stop backend-warmup sessions from polluting the console; add session resume` | ekzhu | **UX cleanup** — the TUI's throwaway warm-up session was persisting as junk chats in the console. Now warm-up sessions are ephemeral, and session resume capability is added. |

**Notable open PRs under active review:**

- **[#5321](https://github.com/agentscope-ai/CoPaw/pull/5321)** — `feat(context): scroll context manager — durable history + recall REPL`: A major new context management strategy that persists full conversation history to SQLite and lets the model recall past turns on demand via a Python REPL, as an alternative to native compression. This directly addresses the context compaction freeze bug ([#5218](https://github.com/agentscope-ai/CoPaw/issues/5218)).
- **[#5325](https://github.com/agentscope-ai/CoPaw/pull/5325)** — `feat(memory): add optional recency-aware ranking for memory_search daily notes`: Adds exponential temporal decay ranking to memory search, improving relevance of recalled daily notes.
- **[#5396](https://github.com/agentscope-ai/CoPaw/pull/5396)** — `fix(runtime): respect configured workspace prompt files`: Fixes system prompt assembly to honor the agent's configured `system_prompt_files` list instead of always loading default files.
- **[#5357](https://github.com/agentscope-ai/CoPaw/pull/5357)** — `fix(#5354): release session switch lock on embedded mode completion`: Fixes the session-switching deadlock reported in [#5354](https://github.com/agentscope-ai/CoPaw/issues/5354).
- **[#5297](https://github.com/agentscope-ai/CoPaw/pull/5297)** — `feat(models): batch test & batch delete models`: Adds parallel batch testing and batch deletion for provider models.
- **[#5399](https://github.com/agentscope-ai/CoPaw/pull/5399)** — `feat(providers): support custom model ordering within providers`: Drag-and-drop model reordering in the model management modal.

**Mobile responsiveness blitz:** A remarkable **8 PRs** from first-time contributor `yaozy2020` are adding mobile-responsive layouts across nearly every console page (Models, Environments, Workspace, CronJobs, Sessions, Channels, MCP, ACP). This is a coordinated effort to address the long-standing mobile UX gap noted in [#5360](https://github.com/agentscope-ai/CoPaw/issues/5360).

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

1. **[#5218](https://github.com/agentscope-ai/CoPaw/issues/5218)** — **子Agent触发上下文压缩时QwenPaw进程冻结无响应** (17 comments)
   - **Severity:** Critical — complete process freeze requiring manual restart.
   - **Underlying need:** Users running multi-agent or sub-agent workflows hit context compaction and lose the entire session. This is a core reliability blocker for advanced agent usage patterns. The `scroll` context manager PR [#5321](https://github.com/agentscope-ai/CoPaw/pull/5321) may offer an alternative path forward.

2. **[#5262](https://github.com/agentscope-ai/CoPaw/issues/5262)** — **每次升级之后，被禁用的内置技能又会重新变回启用** (9 comments)
   - **Severity:** Medium — regression that has persisted across multiple versions (1.1.9→1.1.10→1.1.11). Previously reported as [#4807](https://github.com/agentscope-ai/CoPaw/issues/4807) but not yet fixed.
   - **Underlying need:** Users who disable built-in skills (e.g., `docx`, `xlsx`) to prevent unwanted tool calls lose their preferences on every upgrade. This is a configuration persistence bug that erodes user trust in the upgrade process.

3. **[#5354](https://github.com/agentscope-ai/CoPaw/issues/5354)** — **消息发送队列容易串台；切换对话时切不回去** (4 comments, now CLOSED)
   - **Status:** Fix PR [#5357](https://github.com/agentscope-ai/CoPaw/pull/5357) is under review.
   - **Underlying need:** The new message queue feature introduced cross-agent message routing bugs — messages intended for Agent A were delivered to Agent B after switching. This is a data isolation issue in multi-agent setups.

4. **[#5370](https://github.com/agentscope-ai/CoPaw/issues/5370)** — **send_file_to_user ended up with http 404** (5 comments, now CLOSED)
   - **Underlying need:** File sharing via `send_file_to_user` generates `file://` URLs that the frontend incorrectly resolves, stripping the absolute path. This breaks file delivery to users.

### Key Signals

- **Context management** is the #1 pain point — the freeze bug has the most comments and has been open for a week without resolution.
- **Upgrade regressions** are a recurring theme — users are frustrated that settings don't survive version bumps.
- **Multi-agent isolation** is an emerging concern as more users adopt sub-agent and multi-agent workflows.

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 Critical | [#5218](https://github.com/agentscope-ai/CoPaw/issues/5218) | Sub-agent context compaction causes complete process freeze | Indirect: [#5321](https://github.com/agentscope-ai/CoPaw/pull/5321) (alternative context strategy) |
| 🔴 Critical | [#5398](https://github.com/agentscope-ai/CoPaw/issues/5398) | Cron scheduler stops dispatching enabled jobs while app remains alive | None yet |
| 🔴 Critical | [#5379](https://github.com/agentscope-ai/CoPaw/issues/5379) | Internal Server Error on startup after pip install (`get_remote_addr` crash) | None yet |
| 🟠 High | [#5333](https://github.com/agentscope-ai/CoPaw/issues/5333) | Agent hangs after submitting command; UI shows submit button instead of stop | None yet |
| 🟠 High | [#5358](https://github.com/agentscope-ai/CoPaw/issues/5358) | TypeError crash in ui-vendor bundle during session switch | None yet |
| 🟠 High | [#5373](https://github.com/agentscope-ai/CoPaw/issues/5373) | Shell command execution fails to parse special characters (pipes, redirection) | None yet |
| 🟡 Medium | [#5262](https://github.com/agentscope-ai/CoPaw/issues/5262) | Disabled built-in skills re-enabled after every upgrade (regression, previously reported) | None yet |
| 🟡 Medium | [#5345](https://github.com/agentscope-ai/CoPaw/issues/5345) | Custom OpenAI-compatible providers don't support function calling | None yet |
| 🟡 Medium | [#5330](https://github.com/agentscope-ai/CoPaw/issues/5330) | Zhipu provider: API test passes but all model tests fail | None yet |
| 🟡 Medium | [#5378](https://github.com/agentscope-ai/CoPaw/issues/5378) | Custom model endpoint auto-filled into search box, making model page unusable | None yet |
| 🟡 Medium | [#5317](https://github.com/agentscope-ai/CoPaw/issues/5317) | Tauri desktop: Python not found, skills can't run Python scripts | None yet |
| 🟢 Low | [#5374](https://github.com/agentscope-ai/CoPaw/issues/5374) | Drag-and-drop file upload broken on Chrome for Mac | None yet |

**Stability assessment:** The project has **3 critical bugs** with no direct fix PRs, including a complete process freeze and a startup crash. The cron scheduler silently failing is particularly dangerous as users won't notice missed jobs. The overall bug-to-fix ratio is concerning — 17 open issues vs. only a handful of fix PRs in the pipeline.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood of near-term implementation |
|-------|---------|----------------------------------------|
| [#2969](https://github.com/agentscope-ai/CoPaw/issues/2969) | Personal knowledge base integration (2 👍) | Medium — aligns with memory/context investment trajectory |
| [#5392](https://github.com/agentscope-ai/CoPaw/issues/5392) | Decouple agents from workspaces; agent reuse across workspaces | Medium — architectural improvement that enables multi-agent workflows |
| [#5387](https://github.com/agentscope-ai/CoPaw/issues/5387) | Recall-aware signals for dream memory consolidation | Medium — fits with PR [#5325](https://github.com/agentscope-ai/CoPaw/pull/5325) on recency-aware memory ranking |
| [#5254](https://github.com/agentscope-ai/CoPaw/issues/5254) | Import config from OpenClaw / Hermes Agent | Low-Medium — migration tooling, but growing user demand from competing platforms |
| [#5360](https://github.com/agentscope-ai/CoPaw/issues/5360) | Stabilize core app before adding new features | N/A — meta-request reflecting community sentiment |

**Prediction for next release (likely 1.1.13):** The accumulated mobile responsiveness PRs (8 from `yaozy2020`), the security keychain fix ([#5028](https://github.com/agentscope-ai/CoPaw/pull/5028)), the session warm-up cleanup ([#5027](https://github.com/agentscope-ai/CoPaw/pull/5027)), and the workspace prompt fix ([#5396](https://github.com/agentscope-ai/CoPaw/pull/5396)) are all strong candidates. The batch model operations ([#5297](https://github.com/agentscope-ai/CoPaw/pull/5297)) and custom model ordering ([#5399](https://github.com/agentscope-ai/CoPaw/pull/5399)) are also likely. The `scroll` context manager ([#5321](https://github.com/agentscope-ai/CoPaw/pull/5321)) may be held for a feature release (1.2.0) given its scope.

---

## 7. User Feedback Summary

**Pain points (dissatisfaction):**
- **Upgrade fatigue:** Users are repeatedly frustrated by regressions after upgrades — disabled skills re-enabling ([#5262](https://github.com/agentscope-ai/CoPaw/issues/5262)) is a recurring complaint that was previously reported and never fixed.
- **Process freezes:** The context compaction freeze ([#5218](https://github.com/agentscope-ai/CoPaw/issues/5218)) is a showstopper for users running complex agent workflows, requiring full app restarts.
- **Multi-agent isolation:** Users with multiple agents are hitting cross-agent message routing bugs ([#5354](https://github.com/agentscope-ai/CoPaw/issues/5354)) and session switching deadlocks, indicating the multi-agent experience is not yet mature.
- **Shell tool limitations:** The inability to use pipes, redirection, and other shell syntax ([#5373](https://github.com/agentscope-ai/CoPaw/issues/5373)) significantly limits the agent's utility for power users.
- **Mobile experience:** Multiple issues ([#5360](https://github.com/agentscope-ai/CoPaw/issues/5360), [#5374](https://github.com/agentscope-ai/CoPaw/issues/5374)) highlight that the console is essentially unusable on mobile, which is being addressed by the current PR wave.

**Use cases observed:**
- Multi-agent setups with sub-agents (context compaction, session switching)
- Custom model provider integration (OMLX, Zhipu, OpenAI-compatible APIs)
- Cron-scheduled automated jobs (memory updates, daily tasks)
- File sharing and document processing workflows
- Tauri desktop app usage (Windows, macOS)

**Satisfaction signals:**
- Positive reception of the message queue feature (despite bugs) — users called it "a great improvement"
- Active first-time contributors (8 mobile PRs from one contributor) suggests a welcoming community
- Users are providing detailed bug reports with logs and screenshots

---

## 8. Backlog Watch

The following important issues and PRs have gone without resolution and need maintainer attention:

| Item | Age | Why it matters |
|------|-----|----------------|
| [#5218](https://github.com/agentscope-ai/CoPaw/issues/5218) — Context compaction freeze | 7 days, 17 comments | Critical bug affecting core agent functionality; most-commented issue |
| [#5262](https://github.com/agentscope-ai/CoPaw/issues/5262) — Skills re-enable after upgrade | 6 days, 9 comments | **Previously reported as [#4807](https://github.com/agentscope-ai/CoPaw/issues/4807)** and still not fixed; erodes upgrade confidence |
| [#2969](https://github.com/agentscope-ai/CoPaw/issues/2969) — Personal knowledge base | 79 days old | Long-standing feature request with community upvotes; aligns with memory investment |
| [#5345](https://github.com/agentscope-ai/CoPaw/issues/5345) — Custom provider function calling | 3 days | Blocks users of non-standard model providers (OMLX, etc.) from using tool calling |
| [#5330](https://github.com/agentscope-ai/CoPaw/issues/5330) — Zhipu model test failures | 3 days | Affects all users of a built-in provider; likely a model routing bug |
| [#4889](https://github.com/agentscope-ai/CoPaw/issues/4889) — Tauri plugin loader not starting | 20 days (now CLOSED) | Was closed but indicates Tauri desktop stability concerns |
| [#5321](https://github.com/agentscope-ai/CoPaw/pull/5321) — Scroll context manager PR | 4 days open | Major feature PR that could address the critical context freeze; needs review |
| [#5301](https://github.com/agentscope-ai/CoPaw/pull/5301) — ToolGuard governance refactor | 4 days open | Security-related refactor; needs maintainer review |

**Priority recommendations for maintainers:**
1. **Triage [#5218](https://github.com/agentscope-ai/CoPaw/issues/5218)** — determine if [#5321](https://github.com/agentscope-ai/CoPaw/pull/5321) is the right fix or if a targeted patch is needed for the current release.
2. **Fix [#5262](https://github.com/agentscope-ai/CoPaw/issues/5262)** — this is a repeated regression that damages user trust; a config migration/persistence fix should be straightforward.
3. **Review [#5321](https://github.com/agentscope-ai/CoPaw/pull/5321)** — the scroll context manager is a significant architectural addition that needs timely review to avoid stalling.
4. **Address [#5398](https://github.com/agentscope-ai/CoPaw/issues/5398)** — silent cron job failure is a high-severity reliability issue that could affect automated workflows without users noticing.

---

*Generated by OWL — ZOO Company*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-23

---

## 1. Today's Overview

ZeroClaw is in a period of exceptionally high activity with **50 issues and 50 PRs updated in the last 24 hours**, signaling a project in active expansion across security hardening, CI/CD maturation, and architectural evolution. No new releases were published today, but the volume of open work (42 open issues, 48 open PRs) indicates the project is accumulating a significant integration queue ahead of what appears to be a v0.9.0 milestone (tracked in #7432). The dominant themes today are **supply-chain security**, **Wasm-first architecture**, **plugin system redesign**, and **runtime stability fixes** — all high-risk, high-complexity work that suggests the project is maturing from a functional agent framework toward a production-hardened platform.

---

## 2. Releases

**No new releases today.** The project appears to be in a feature-accumulation phase. The v0.9.0 tracker (#7432) lists 134 open items, suggesting the next release is still some distance away.

---

## 3. Project Progress

### Merged/Closed PRs (2)

| PR | Summary |
|---|---|
| **#7853** [CLOSED] | **fix(update): repair Windows self-update and harden the update pipeline** — Fixed a fundamental breakage where `zeroclaw update` failed on Windows because the swap/rollback logic used remove-then-copy semantics incompatible with Windows file locking. This was a significant reliability fix for Windows users. |
| **#7999** [CLOSED] | **fix(zerocode): surface active config directory in Config header** — Minor UX improvement so users can identify which config directory is active when using `--config-dir` or `$ZEROCLAW_CONFIG_DIR`. |

### Closed Issues (8, notable)

- **#7420** — RFC: Native Dynamic-Library Plugin System (6 comments) — Closed after discussion; appears superseded by the Wasm-first plugin direction.
- **#7674** — RFC: WebAssembly-first, eliminate Node.js (5 comments) — Closed as a parent RFC, with scope split into focused sub-RFCs (#8132, #8135).
- **#8013** — Bug: disabling an agent does not stop its bound Discord channel (3 comments) — Closed, likely resolved by a related PR.
- **#6037** — Bug: Cron jobs can be launched repeatedly while still running (1 comment) — Closed after ~2 months.

---

## 4. Community Hot Topics

### Most Discussed Issues

1. **#7420** — [RFC: Native Dynamic-Library Plugin System](https://github.com/zeroclaw-labs/zeroclaw/issues/7420) (6 comments, CLOSED)
   - **Underlying need:** Users want extensibility without the monolithic compile-everything model. The RFC was closed, but the architectural conversation has shifted to Wasm-based plugins (#8135, #8132), suggesting the community's plugin-system energy is being channeled into the Wasm-first direction.

2. **#7674** — [RFC: WebAssembly-first, eliminate Node.js](https://github.com/zeroclaw-labs/zeroclaw/issues/7674) (5 comments, CLOSED)
   - **Underlying need:** Supply-chain security and reducing the Node.js attack surface. This parent RFC was deliberately split into focused sub-RFCs (#8132 for the web UI rewrite, #8135 for the Wasm plugin runtime), indicating a methodical, phased approach to a major architectural migration.

3. **#5808** — [Bug: Default 32k context budget exceeded on iteration 1](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) (4 comments, OPEN, P1)
   - **Underlying need:** The default configuration is broken out-of-the-box — system prompt + tool definitions alone exceed the 32k budget by ~3.3x. This is a critical onboarding blocker that has been open since April 16 with no resolution.

4. **#8193** — [Bug: MCP tools missing from TUI sessions](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) (3 comments, OPEN, P1)
   - **Underlying need:** MCP tool discovery works at the gateway level but doesn't propagate to Zerocode TUI sessions. PR #8199 appears to directly address this by fixing `initialize_mcp = false` in the Chat TUI session path.

5. **#8059** — [Policy cleanup: deny.toml advisory tracking](https://github.com/zeroclaw-labs/zeroclaw/issues/8059) (3 comments, OPEN, P2)
   - **Underlying need:** Cargo audit policy hygiene — cleaning up ignored advisories and wildcard dependencies that represent latent supply-chain risk.

### Most Discussed PRs

- **#8023** — [fix(mcp): stop leaking stdio child processes per heartbeat tick](https://github.com/zeroclaw-labs/zerocaw/pull/8023) — Fixes a resource leak in MCP tool process management.
- **#8196** — [refactor(history): rip out history pruning/compression](https://github.com/zeroclaw-labs/zeroclaw/pull/8196) — A large-scale refactor replacing the sprawling 6-phase history pruner with a single whole-turn trim function. This is a significant architectural simplification.
- **#8200** — [QA integration branch for all open PRs](https://github.com/zeroclaw-labs/zeroclaw/pull/8200) — A throwaway integration branch merging all open PRs for system-level QA testing, indicating the project is approaching a release candidate phase.

---

## 5. Bugs & Stability

### Critical / S1 Bugs (Workflow Blocked)

| Severity | Issue | Component | Status | Fix PR |
|---|---|---|---|---|
| **S1** | [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) — Default 32k context budget exceeded on iteration 1 | runtime/daemon | OPEN, P1, in-progress (since Apr 16) | None visible |
| **S1** | [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) — MCP tools missing from TUI sessions | zerocode/tui, gateway | OPEN, P1 | **#8199** (likely fix) |
| **S1** | [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) — Native/MCP tools unavailable on OpenAI/Anthropic turns | provider | OPEN, P1 | None visible |
| **S1** | [#8154](https://github.com/zeroclaw-labs/zeroclaw/issues/8154) — Kimi Code Moonshot endpoint returns 404 (dead URL) | provider:moonshot | OPEN, P1 | None visible |

### High-Risk Bugs

| Issue | Component | Status |
|---|---|---|
| [#8013](https://github.com/zeroclaw-labs/zeroclaw/issues/8013) — Disabling agent doesn't stop Discord channel | channel:discord | **CLOSED** (fix likely merged) |
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) — 74 test failures on Windows | ci, tests | OPEN, P1 |
| [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) — Prompt caching broken on Telegram | channel:telegram | OPEN, P2 |

### Notable Fix PRs in Flight

- **#8023** — Fixes MCP stdio child process leak (resolves #5903)
- **#8127** — Redacts Telegram bot token from error logs (security)
- **#8126** — Refreshes system prompt on tool dispatcher swap
- **#7865** — Strips orphaned tool_use on max-iterations exit (closes #7863)
- **#8009** — Wires HMAC tool receipts through all agent turn paths

---

## 6. Feature Requests & Roadmap Signals

### Likely Candidates for v0.9.0

Based on the tracker (#7432) and the volume of RFCs and PRs in flight:

1. **Wasm-first plugin system** — RFCs #8135 and #8132, plus the closed parent RFCs #7420 and #7674, indicate this is the defining architectural shift for the next major version. The direction is clear: signed, capability-declaring Wasm modules replacing both native dynamic libraries and the Node.js-based web UI.

2. **Supply-chain signing and SLSA provenance** — RFC #8177 proposes hardware-backed PGP keys, multi-party quorum, and container image signing. Combined with the CI security PRs (#8056, #8057, #8059), this is a coordinated push toward supply-chain hardening.

3. **History management refactor** — PR #8196 is a large-scale refactor replacing the complex pruning/compression subsystem. This is likely a prerequisite for the v0.9.0 context management improvements.

4. **AuthProvider expansion** — #8076 requests a local username/password auth provider for IdP-less browser login, filling a gap in the auth seam established by RFC #7141.

5. **Telegram webhook mode** — #8046 requests optional webhook ingress as an alternative to long-polling, which would improve deployment flexibility.

### Quickstart/Onboarding Improvements

- **#8125** — Auto-apply `yolo` risk preset during quickstart to prevent users from unintentionally restricting themselves.
- **#8134** — Implement `session_ttl_hours` for automatic session history truncation.

---

## 7. User Feedback Summary

### Pain Points

- **Broken defaults:** The 32k context budget (#5808) has been broken since at least April, making the default configuration unusable for many users. This is the most concerning open issue — it's a P1 that directly impacts the first-run experience and has lingered for over two months.

- **Windows support gaps:** 74 test failures on Windows (#7462) and the broken self-update (#7853, now fixed) indicate Windows is a second-class platform. The project's CI only tests on Linux, allowing Windows regressions to accumulate.

- **MCP tool visibility:** Multiple users report MCP tools not appearing in TUI sessions (#8193) and on certain provider turns (#7756). MCP is a core extensibility mechanism, and these gaps undermine user confidence in the tool ecosystem.

- **Kimi Code regression:** The Moonshot/Kimi Code endpoint URL is dead (#8154), blocking users of that provider. This is a recent regression that needs urgent attention.

- **Security surface area:** Multiple issues and PRs (#8127, #8128, #8137) address credential leakage, SSRF, and raw environment access — suggesting the project is in an active security-hardening phase in response to real or anticipated threats.

### Satisfaction Signals

- The project is actively splitting large RFCs into focused, actionable sub-RFCs (#7674 → #8132, #8135), indicating responsive maintainer leadership.
- The integration QA branch (#8200) suggests disciplined release management.
- Multiple contributors are submitting focused, well-scoped PRs with clear testing requirements, indicating a healthy contributor culture.

---

## 8. Backlog Watch

### Long-Unanswered Critical Items

| Issue | Age | Risk | Note |
|---|---|---|---|
| **[#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)** — Default 32k context budget exceeded | **68 days** (Apr 16) | 🔴 Critical | P1, in-progress, but no visible fix. This is the #1 onboarding blocker. |
| **[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)** — 74 test failures on Windows | **43 days** (Jun 10) | 🟠 High | P1, accepted, but no fix PR. Windows CI coverage is absent. |
| **[#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360)** — Prompt caching broken on Telegram | **50 days** (May 4) | 🟡 Medium | P2, accepted. Degraded but not blocking. |
| **[#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037)** — Cron job duplicate launch | **61 days** (Apr 23) | 🟠 High | **CLOSED** today — finally resolved. |
| **[#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756)** — MCP tools unavailable on OpenAI/Anthropic | **7 days** (Jun 16) | 🔴 Critical | P1, very recent, no fix yet. |

### PRs Needing Maintainer Attention

| PR | Note |
|---|---|
| **#8196** — History pruning refactor (XL) | Large architectural refactor; needs careful review. |
| **#8177** — Supply-chain signing RFC | Strategic direction-setting; needs maintainer alignment. |
| **#8135** — Wasm-first plugin runtime RFC | Core architecture decision; blocks multiple dependent PRs. |
| **#8043** — Retire aardvark-sys crate RFC | Dependency cleanup; low controversy but needs a ratification vote. |

---

*Data source: github.com/zeroclaw-labs/zeroclaw — Snapshot 2026-06-23. All links reference the zeroclaw-labs/zeroclaw repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*