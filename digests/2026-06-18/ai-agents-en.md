# OpenClaw Ecosystem Digest 2026-06-18

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-18 00:44 UTC

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

# OpenClaw Project Digest — 2026-06-18

---

## 1. Today's Overview

OpenClaw is experiencing extraordinary activity with **500 issues** and **500 PRs** updated in the last 24 hours — both hitting the platform's display ceiling, suggesting true volume is even higher. Of these, 491 issues remain open (9 closed) and 441 PRs remain open (59 merged/closed), indicating a significant backlog accumulation that far outpaces maintainer throughput. The project is operating at a scale where triage infrastructure (the "clawsweeper" label system) is heavily relied upon, with the vast majority of issues flagged as needing maintainer review or product decisions. No new releases shipped today. The project is deep in active development across security hardening, multi-platform support, session/memory subsystem refinement, and channel-level feature expansion (Telegram, Discord, WhatsApp, Feishu, Slack).

---

## 2. Releases

**No new releases today.** The latest activity is entirely in the issue tracker and PR pipeline.

---

## 3. Project Progress

Two PRs were closed/merged today:

- **PR #93993** — *fix(cron): persist overflow catch-up deferral IDs on state to survive read RPCs*: Fixes a bug where cron job catch-up overflow deferrals were silently reset when read RPCs (e.g., `cron list`/`status`) ran. This improves cron scheduling reliability.
- **PR #93713** — *fix: route deleted-agent session purge through lifecycle seam*: Routes deleted-agent session-entry purge through the proper storage-boundary operation established by PR #93704, tightening session lifecycle management.

Several noteworthy open PRs are at advanced stages:
- **PR #94253** — `openclaw doctor --explain` for plain-English diagnostics output. Read-only, no side effects. P3, medium size, compatibility risk flagged.
- **PR #91988** — Fixes preseeded workspaces so user-provided `BOOTSTRAP.md` isn't deleted by bootstrap auto-completion. P1, ready for maintainer review.
- **PR #78303** — Channel-mediated approval gate for MCP tool calls (consent envelope), analogous to exec-approvals. P1, large size, flagged with security-boundary and message-delivery merge risks.
- **PR #18860** — Exposes tool schemas via a new `after_tools_resolved` hook, enabling plugins to discover agent tools. P2, ready for maintainer review.

---

## 4. Community Hot Topics

The most commented issues reveal the community's deepest pain points:

1. **[Issue #75](https://github.com/openclaw/openclaw/issues/75)** — *Linux/Windows Clawdbot Apps* (109 comments, 👍79). The most-discussed issue in the dataset by a wide margin. macOS, iOS, and Android have companion apps; users on Linux and Windows are currently second-class citizens. The 79 upvotes and sustained discussion since January signal this is a top priority for platform parity.

2. **[Issue #25592](https://github.com/openclaw/openclaw/issues/25592)** — *Text between tool calls leaks to messaging channels* (32 comments, P1, security + message-loss impact). Internal agent narration/error handling text surfaces to Slack, iMessage, etc. as visible messages. This is a significant UX and security concern — users are seeing raw agent internals they shouldn't.

3. **[Issue #88838](https://github.com/openclaw/openclaw/issues/88838)** — *Track core session/transcript SQLite migration via accessor seam* (30 comments, P0). A major architectural refactor request to migrate session/transcript state to SQLite incrementally via branch-by-abstraction. This would be a foundational change affecting how all session data is persisted.

4. **[Issue #9443](https://github.com/openclaw/openclaw/issues/9443)** — *Prebuilt Android APK releases* (25 comments). Users want precompiled APKs in GitHub releases rather than building from source. A significant onboarding friction point for mobile users.

5. **[Issue #39604](https://github.com/openclaw/openclaw/issues/39604)** — *Add `tools.web.fetch.allowPrivateNetwork` config* (13 comments, 👍9). Opt-in flag to allow `web_fetch` to reach internal/private network addresses. Strong demand from self-hosters and enterprise users.

---

## 5. Bugs & Stability

**Critical/High severity bugs (P0/P1):**

| Severity | Issue | Impact | Fix PR? |
|----------|-------|--------|---------|
| **P0** | [#88838](https://github://github.com/openclaw/openclaw/issues/88838) Session/transcript SQLite migration | Session-state | No |
| **P1** | [#25592](https://github.com/openclaw/openclaw/issues/25592) Inter-tool text leaks to channels | Message-loss, security | No |
| **P1** | [#22676](https://github.com/openclaw/openclaw/issues/22676) Signal daemon race condition — orphaned processes on restart | Message-loss, crash-loop | Linked PR open |
| **P1** | [#29387](https://github.com/openclaw/openclaw/issues/29387) Bootstrap files in agentDir silently ignored | Session-state, security | No |
| **P1** | [#62505](https://github.com/openclaw/openclaw/issues/62505) Coding Agent never completes anything (regression) | Session-state, message-loss | Linked PR open |
| **P1** | [#31583](https://github.com/openclaw/openclaw/issues/31583) `exec` tool doesn't inherit skills env vars (regression) | Security, auth-provider | No |
| **P1** | [#32473](https://github.com/openclaw/openclaw/issues/32473) Control UI requires device identity / HTTPS | Security, auth-regression | No |
| **P1** | [#38327](https://github.com/openclaw/openclaw/issues/38327) "Cannot convert undefined or null to object" with gemini-3.1-pro-preview | Auth, crash-loop | No |
| **P1** | [#92201](https://github.com/openclaw/openclaw/issues/92201) Anthropic thinking signatures invalid on replay; recovery wrapper fails | Session-state | No |
| **P1** | [#40001](https://github.com/openclaw/openclaw/issues/40001) Write tool lacks append mode — cron sessions destroy shared files | Data-loss, session-state | Linked PR open |
| **P1** | [#57901](https://github.com/openclaw/openclaw/issues/57901) Safeguard compaction ignores compaction.model config | Session-state | Linked PR open |
| **P1** | [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked secrets to prevent agent access to raw API keys | Security | Linked PR open |
| **P1** | [#6731](https://github.com/openclaw/openclaw/issues/6731) Safe/unsafe ClawdBot mode (sandbox rewrite in Rust) | Security, data-loss | No |
| **P1** | [#37634](https://github://github.com/openclaw/openclaw/issues/37634) Sandbox workspaceAccess none makes workspaces read-only (👍7) | Security, session-state | No |
| **P1** | [#31331](https://github.com/openclaw/openclaw/issues/31331) Docker + sandbox can't bind workspace properly | Security, session-state | No |
| **P1** | [#75593](https://github.com/openclaw/openclaw/issues/75593) Subagents list empty after spawn (regression, continuation of #71495) | Session-state | Linked PR open |

**Pattern:** The dominant categories are **session-state management** (SQLite migration, bootstrap file loading, compaction, subagent tracking), **security hardening** (secret masking, exec sandboxing, device identity), and **multi-platform gaps** (Docker volume mounting, Windows/Linux missing apps). Several are regressions from recent versions (2026.3.x, 2026.4.x), suggesting recent refactors introduced regressions faster than the triage pipeline can absorb.

---

## 6. Feature Requests & Roadmap Signals

Strong signals for near-term delivery:

| Feature | Issue | Signal Strength |
|---------|-------|-----------------|
| **Linux/Windows desktop apps** | [#75](https://github.com/openclaw/openclaw/issues/75) | 🔥 Highest — 109 comments, 79 👍, 5+ months open |
| **Masked secrets** | [#10659](https://github.com/openclaw/openclaw/issues/10659) | 🔥 High — P1, linked PR, security-critical |
| **Append mode for write tool** | [#40001](https://github.com/openclaw/openclaw/issues/40001) | 🔥 High — P1, linked PR, data-loss impact |
| **Private network web_fetch** | [#39604](https://github.com/openclaw/openclaw/issues/39604) | 📈 Medium — 9 👍, P2, clear use case |
| **MCP tool consent envelope** | [#78303](https://github.com/openclaw/openclaw/pull/78303) | 📈 Medium — P1 PR already in progress |
| **Prebuilt Android APKs** | [#9443](https://github.com/openclaw/openclaw/issues/9443) | 📈 Medium — 25 comments, reduces onboarding friction |
| **Slack Block Kit support** | [#12602](https://github.com/openclaw/openclaw/issues/12602) | 📊 Lower — P2, no linked PR |
| **Telegram Business Bot** | [#20786](https://github.com/openclaw/openclaw/issues/20786) | 📊 Lower — P2, linked PR open, 6 👍 |
| **Session snapshots (save/load)** | [#13700](https://github.com/openclaw/openclaw/issues/13700) | 📊 Lower — P2, no linked PR |
| **Disk/restore utility** | [#13616](https://github.com/openclaw/openclaw/issues/13616) | 📊 Lower — P2, operational necessity |

**Prediction for next release:** Likely a patch/minor focused on: (1) masked secrets / secret hardening delivery, (2) write tool append mode, (3) exec env var inheritance regression fix, and (4) cron state persistence. The Linux/Windows desktop app gap and SQLite session migration are too large for a patch cycle and likely targeted for a future minor or major release.

---

## 7. User Feedback Summary

**Top pain points:**

- **Security surface area** is the dominant concern. Users are vocal about agents leaking internal processing text ([#25592](https://github.com/openclaw/openclaw/issues/25592)), accessing raw API keys ([#10659](https://github.com/openclaw/openclaw/issues/10659)), vulnerable to memory poisoning ([#7707](https://github.com/openclaw/openclaw/issues/7707)), and the Control UI refusing to work without HTTPS ([#32473](https://github.com/openclaw/openclaw/issues/32473)). The project's user base skews toward security-conscious self-hosters and professionals (finance, operations) who need hard gates, not soft prompt instructions.

- **Multi-platform parity** is a major friction point. Linux and Windows users feel like afterthoughts ([#75](https://github.com/openclaw/openclaw/issues/75)), Docker users hit workspace mounting bugs ([#31331](https://github.com/openclaw/openclaw/issues/31331)), and Android users can't get prebuilt APKs ([#9443](https://github.com/openclaw/openclaw/issues/9443)). The macOS-first development is increasingly at odds with the user base.

- **Sandboxing incompleteness** comes up repeatedly: workspace read-only in sandbox mode ([#37634](https://github.com/openclaw/openclaw/issues/37634)), binary-level allowlists instead of path-scoped permissions ([#39979](https://github.com/openclaw/openclaw/issues/39979)), no denylist support ([#6615](https://github.com/openclaw/openclaw/issues/6615)), and the suggestion of a full Rust rewrite for memory safety ([#6731](https://github.com/openclaw/openclaw/issues/6731)).

- **Session reliability** problems are widespread: cron sessions destroying files due to overwrite-only write ([#40001](://github.com/openclaw/openclaw/issues/40001)), bootstrap files ignored when using agentDir ([#29387](://github.com/openclaw/openclaw/issues/29387)), subagent list returning empty ([#75593](://github.com/openclaw/openclaw/issues/75593)), and a coding agent regression where agents stopped completing tasks entirely ([#62505](://github.com/openclaw/openclaw/issues/62505)).

- **Positive signals:** The clawsweeper triage label system and issue-rating taxonomy (🌊 tidepool, 🦞 diamond lobster, 🐚 platinum hermit) indicate a mature, self-organizing community. Contributors are submitting PRs with clear sizing labels, merge-risk assessments, and proof status — suggesting the contributor onboarding pipeline is working well even if maintainer review bandwidth is the bottleneck.

---

## 8. Backlog Watch

The following high-impact items have been open for extended periods without resolution and need maintainer attention:

- **[Issue #75](https://github.com/openclaw/openclaw/issues/75)** — *Linux/Windows Clawdbot Apps* (Open since 2026-01-01, **5.5 months**). Highest-engagement issue. No linked PR. Labeled `needs-maintainer-review` and `needs-product-decision`. This is becoming a credibility issue — the community has been asking since January.

- **[Issue #62505](https://github.com/openclaw/openclaw/issues/62505)** — *Coding Agent never completes* (Open since 2026-04-07, **2+ months**). Marked as a regression in 2026.4.x. Users report agents producing only vague status updates and then apologizing. This degrades the core product experience. Linked PR exists but is still open.

- **[Issue #88838](https://github.com/openclaw/openclaw/issues/88838)** — *Session/transcript SQLite migration* (Open since 2026-06-01). P0 rated, labeled `maintainer`. This is an architectural initiative that likely needs a dedicated maintainer to drive the branch-by-abstraction approach. 30 comments with active discussion.

- **[Issue #37634](://github.com/openclaw/openclaw/issues/37634)** — *Sandbox workspaceAccess none → read-only* (Open since 2026-03-06, **3+ months**). 7 upvotes. No linked PR. Users enabling strict sandbox isolation find their agents unable to write files — defeating the purpose.

- **[Issue #31331](https://github.com/openclaw/openclaw/issues/31331)** — *Docker sandbox workspace bind failure* (Open since 2026-03-02, **3.5 months**). 4 upvotes. Affects all Docker-based deployments. No linked PR.

- **[Issue #13616](https://github.com/openclaw/openclaw/issues/13616)** — *Backup/restore utility* (Open since 2026-02-10, **4+ months**). No linked PR. Operational necessity for production deployments. 8 comments.

- **[PR #18889](https://github.com/openclaw/openclaw/pull/18889)** — *Agent and tool lifecycle boundaries* (Open since 2026-02-17, **4 months**). Waiting on author but touches core observability infrastructure. May need maintainer intervention or adoption.

- **[PR #18778](https://github.com/openclaw/openclaw/pull/18778)** — *Discord Canvas support* (Open since 2026-02-17, **4 months**). Waiting on author. Large size, multi-category (docs, discord, gateway, agents).

- **Systemic concern:** The 500-issue / 500-PR ceiling being hit means the visible backlog is a subset of reality. The `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` labels dominate, indicating that the bottleneck is not community contribution but **maintainer and product decision-making bandwidth**. The project may need more maintainer grants, a product decision-maker for community features, or a structured RFC process to triage the 500+ items needing decisions.

---

## Cross-Ecosystem Comparison

# AI Agent & Personal AI Assistant Open-Source Ecosystem — Cross-Project Comparison Report

**Date:** 2026-06-18 | **Projects Analyzed:** 14 | **Generated by:** OWL

---

## 1. Ecosystem Overview

The open-source personal AI agent landscape in mid-2026 is experiencing explosive fragmentation and rapid iteration, with at least **11 actively maintained projects** competing across overlapping use cases. The ecosystem orbits around **OpenClaw** as the dominant community reference, with a long tail of derivatives, reimplementations, and platform-specific variants (NanoBot, CoPaw, IronClaw) grafting different architectures onto similar messaging-channel-plus-agent-loop foundations. Two projects (TinyClaw, ZeptoClaw) show no activity and may be effectively dormant. The dominant currents are: **security hardening** (secret masking, SSRF prevention, sandbox escapes), **session/transcript reliability** (compaction correctness, SQLite migration, playback fidelity), and **channel coverage wars** (Telegram, Discord, WhatsApp, Feishu, WeChat, Slack). Community engagement is deep but maintainer bandwidth is a systemic bottleneck, with most projects hitting or exceeding their triage capacity.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Releases Today | Health Score |
|---|---|---|---|---|---|
| **OpenClaw** | 500 ⚠️ | 500 ⚠️ | 9 issues / 59 PRs | None | 🟠 High activity, critical backlog |
| **Hermes Agent** | 50 | 50 | Several merged | None | 🟢 Strong, fast turnaround |
| **IronClaw** | 48 | 50 | 22 issues / 17 PRs | None | 🟢 Strong, feature-ship mode |
| **CoPaw** | 45 | 50 | 34 PRs merged | ✅ 2 (v1.1.12 + v2.0.0a1) | 🟢 Excellent velocity |
| **NanoBot** | 10 | 30 | 3 issues / 18 PRs | None | 🟢 Strong, fast triage |
| **NanoClaw** | 5 | 19 | 1 issue / 3 PRs | ✅ 2 (v2.1.0 + v2.1.17) | 🟡 Stabilization phase |
| **ZeroClaw** | 50 | 50 | 10 PRs | None | 🟠 High activity, batched release |
| **PicoClaw** | 4 | 10 | 2 issues / 6 PRs | ✅ 1 (nightly) | 🟢 Excellent, responsive |
| **Moltis** | 4 | 1 | 1 issue / 0 PRs | None | 🟡 Low velocity, needs bandwidth |
| **NullClaw** | 3 | 1 | 0 | None | 🟡 Low activity, constrained |
| **LobsterAI** | 0 | 13 | 13 PRs | ✅ 1 (v2026.6.15) | 🟢 Strong, polish phase |
| **TinyClaw** | 0 | 0 | — | None | 🔴 No activity |
| **ZeptoClaw** | 0 | 0 | — | None | 🔴 No activity |

*Note: OpenClaw's 500/500 hit GitHub display ceilings — true volume is higher. ZeroClaw's numbers may reflect similar ceiling effects.*

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**

- **Largest community by an order of magnitude.** The 500-issue/PR ceiling hit dwarfs all competitors. No other project approaches this volume of simultaneous community engagement. This creates a rich plugin ecosystem, extensive channel support, and rapid model-provider compatibility fixes.
- **Broadest channel coverage.** OpenClaw supports Telegram, Discord, WhatsApp, Feishu, Slack, Signal, and iMessage — more first-class channels than any competitor. Hermes and IronClaw are next closest.
- **Most mature triage infrastructure.** The "clawsweeper" label system, issue-rating taxonomy (🌊 tidepool, 🦞 diamond lobster, 🐚 platinum hermit), and structured PR metadata (size labels, merge-risk assessments, proof status) reflect an unusually mature community operating procedure.
- **Security-first posture from the ground up.** Masked secrets, exec-approval gates, sandbox workspace controls, and the MCP consent envelope are community-demanded features driven by OpenClaw's professional/finance user base.

**Technical Approach Differences:**

| Dimension | OpenClaw | Closest Peers |
|---|---|---|
| **Architecture** | Monolithic TypeScript/Node gateway | NanoClaw uses managed-fleet tripwire model; ZeroClaw uses stacked/cascading PR series for large refactors |
| **Session storage** | In-progress SQLite migration via branch-by-abstraction (#88838) | Others less explicit about storage layer abstraction |
| **Desktop strategy** | Native macOS/iOS/Android apps; Linux/Windows missing (key gap) | Hermes invests heavily in Electron desktop; CoPaw leverages Tauri; IronClaw has desktop-first packaging |
| **Plugin model** | `after_tools_resolved` hooks, MCP consent envelopes | ZeroClaw pursuing WASM plugin lifecycle hooks (#7822); IronClaw using ProductAdapter pattern |

**Community Size Comparison:** OpenClaw's single most-discussed issue (#75, Linux/Windows apps) has 109 comments and 79 upvotes — more engagement than entire smaller projects (NullClaw, Moltis, PicoClaw) generate in aggregate. The projects closest in engagement are ZeroClaw and Hermes Agent, but both operate at roughly 10% of OpenClaw's visible volume.

**Vulnerabilities:** OpenClaw's scale is also its weakness. The maintainer bandwidth bottleneck is the most severe in the ecosystem. The 500-item backlog ceiling, the 5.5-month-old unaddressed Linux/Windows desktop issue, and multiple regressions lingering for 2+ months suggest the project is growing faster than its governance structure can absorb. By contrast, smaller projects like NanoBot and PicoClaw demonstrate same-day bug turnaround.

---

## 5. Differentiation Analysis

### Key Feature Focus by Project

| Project | Primary Differentiator | Target User | Technical Architecture |
|---|---|---|---|
| **OpenClaw** | Security-hardened, multi-channel, self-hosted agent gateway | Security-conscious professionals, self-hosters, finance/ops | TypeScript/Node; monolithic gateway; SQLite session migration in progress |
| **NanoBot** | Lightweight, broad provider support, fast iteration | Developers wanting a "just works" agent quickly | Rust/TypeScript; workspace-first; fast merge cadence |
| **Hermes Agent** | Desktop-first Electron app, xAI/Grok integration | Non-technical users wanting GUI, macOS/Windows desktop | TypeScript/Electron; desktop + CLI dual-mode |
| **CoPaw** | AgentScope ecosystem integration, Chinese market focus (XiaoYi, Feishu) | AgentScope users, Chinese-market deployments | Python (Tauri desktop); migrating AgentScope 1.x → 2.0 backend |
| **IronClaw** | Reborn stack refactor, Projects abstraction, NEAR AI Cloud integration | NEAR ecosystem users, Rust-first developers | Rust-centric; stacked PR methodology; Reborn component architecture |
| **NanoClaw** | Managed-fleet deployment model, immutable-image orchestration | Enterprise/DevOps deploying at scale | TypeScript; upgrade-tripwire model; appliance-like deployment |
| **ZeroClaw** | Cascading/stacked refactoring, A2A agent discovery, WASM plugins | Developers wanting an extensible, forward-looking platform | Rust/TypeScript; stacked PR series; plugin-first road |
| **PicoClaw** | Embedded/edge orientation, multi-protocol gateway, Matrix support | Privacy-conscious users, embedded deployments | Rust; nightly release cadence; privacy-protocol focus (vodozemac) |
| **LobsterAI** | Computer Use (desktop interaction), realtime ASR, Cowork collaboration | Users wanting multimodal, persistent, collaborative AI agents | TypeScript; integrates OpenClaw gateway; ASR/voice core |
| **Moltis** | Voice-first/live mode, speech pipeline | Voice-centric self-hosted assistant users | Unclear from data; voice pipeline is differentiator |
| **NullClaw** | Minimal/simple CLI agent | Developers wanting lightweight terminal agent | Rust/CLI-first; REPL-focused |

### Architectural Axes of Differentiation

**Deployment model spectrum:**
- *Managed-fleet / appliance:* NanoClaw (upgrade tripwire, immutable images)
- *Self-hosted gateway:* OpenClaw, NanoBot, ZeroClaw, PicoClaw, Hermes
- *Desktop application:* Hermes (Electron), CoPaw (Tauri), IronClaw (desktop binary)
- *Voice appliance:* Moltis, LobsterAI

**Language/runtime preference:**
- *TypeScript/Node-dominant:* OpenClaw, Hermes, NanoClaw, NullClaw, LobsterAI
- *Rust-first:* IronClaw, NanoBot (partial), PicoClaw, ZeroClaw (partial)
- *Python:* CoPaw (with Tauri)

**Platform reach priority:**
- *Cross-platform ambition:* OpenClaw (but with Linux/Windows gaps), ZeroClaw, NanoBot
- *Mobile-first:* OpenClaw (iOS/Android apps), Hermes (desktop-focused but mobile gap acknowledged)
- *Chinese-market specific:* CoPaw (XiaoYi), IronClaw (WeChat via Hermes port)

---

## 4. Shared Technical Focus Areas

The following requirements are emerging simultaneously across multiple projects, indicating ecosystem-wide maturity inflection points:

### A. Security Hardening (All 11+ active projects)

| Topic | Projects Affected | Specific Needs |
|---|---|---|
| **Secret/API key masking** | OpenClaw (#10659), NanoClaw (CVE-2026-29611, CWE-22), ZeroClaw (#7902 SSRF) | Agents must never access raw credentials; path traversal in CLI commands; SSRF prevention on external-facing tools |
| **Sandboxing maturity** | OpenClaw (#37634, #31331, #6731 Rust rewrite talk), ZeroClaw (#7821 sandbox policy schema) | Docker workspace mounting, read-only vs. write path confinement, binary allowlists — not prompt-level instructions |
| **Tool approval UX** | OpenClaw (MCP consent #78303), IronClaw (#4764, #5028), ZeroClaw (#7901 shell approval loops) | Denied approvals must clear state reliably; approval attribution must be race-free |
| **Encryption library maintenance** | PicoClaw (#3088 libolm → vodozemac) | Unmaintained crypto deps (libolm, postgres RUSTSEC) need migration paths |

### B. Session / Compaction Correctness

| Topic | Projects Affected | Specific Needs |
|---|---|---|
| **Context compaction freezing/crashing** | OpenClaw (#57901), CoPaw (#5218, #5171), NanoClaw (#2796 delivery stall) | Hard timeouts on compaction LLM calls; graceful degradation instead of full-process freeze |
| **Transcript/session storage architecture** | OpenClaw (#88838 SQLite migration), ZeroClaw (stacked refactors) | Need durable, queryable, incrementally migratable session storage beyond ad-hoc JSON/flat files |
| **Write tool append mode** | OpenClaw (#40001) | Overwrite-only writes destroy shared/cron files; append mode is a baseline reliability requirement |

### C. Channel & Messaging Reliability

| Topic | Projects Affected | Specific Needs |
|---|---|---|
| **Feishu channel fixes** | NanoBot (#4381 streaming cards, #4380 path guards), CoPaw (A2A dual-WebSocket) | Streaming card lifecycle, path-guard false positives |
| **Discord enhancements** | ZeroClaw (#7844 slash commands, #7833 rich embeds), NanoClaw (Canvas support #18778) | Rich rendering parity across channels |
| **WhatsApp reliability** | NanoBot (#4354 read receipts) | Read receipt delivery guarantees |
| **WeChat/Chinese market** | IronClaw (#3582 porting to Reborn), OpenClaw (no native WeChat yet) | WeChat ecosystem integration is a competitive gap |

### D. Desktop & Installation Experience

| Topic | Projects Affected | Specific Needs |
|---|---|---|
| **Electron/packaging failures** | Hermes (#40187, #47917, #46260 — 4+ overlapping issues) | electron-builder is the single largest source of user-facing failures |
| **Linux/Windows platform parity** | OpenClaw (#75 — 5.5 months unaddressed); Hermes (#48061 Linux pipx) | These platforms are currently second-class across the ecosystem |
| **Self-update reliability** | Hermes (#48122, #48117 git autostash crash loops), ZeroClaw (#7853 Windows swap logic) | Update pipelines that corrupt state on merge conflicts are critical fragility |

### E. Multi-Agent & Orchestration

| Topic | Projects Affected | Specific Needs |
|---|---|---|
| **A2A protocol support** | Hermes (#514 — highest community engagement item), ZeroClaw (#7763 gateway agent catalog), CoPaw (#5274 XiaoYi A2A) | Agent-to-agent interoperability is the next competitive frontier |
| **Cron gateway integration** | ZeroClaw (#6954 RFC to route through orchestrator), CoPaw (#5064 silent cron failures), OpenClaw (cron catch-up overflow #93993) | Scheduled tasks need direct-model-access-quality context, not a degraded execution path |
| **Subagent tracking** | OpenClaw (#75593 empty subagent list), NanoBot (#4205 mailbox-backed subagent results) | Observability into spawned child agents |

---

## 6. Community Momentum & Maturity

### Tier 1: High-Velocity, Feature Shipping
*Projects with strong throughput, active releases, and clear direction*

- **CoPaw** — The standout performer today. Two releases (v1.1.12 + v2.0.0a1 alpha), 34 PRs merged, AgentScope 2.0 migration initiated. Demonstrates the most disciplined release cadence and forward-looking architecture planning in the ecosystem.
- **PicoClaw** — Nightly build pipeline, 6 PRs merged from 10 touched, all critical bugs resolved same-day. The most operationally responsive project.
- **NanoBot** — 18/30 PRs merged, fast bug turnaround, diverse contributor base. Strong momentum without the governance overhead of larger projects.
- **IronClaw** — 5-stack Projects feature shipped, agent-loop no-progress detection series completed (3/3), 17 PRs merged. Clearly in feature-ship mode for v0.8.x cycle.

### Tier 2: Active but Backlog-Constrained
*High community engagement outpacing maintainer capacity*

- **OpenClaw** — Unmatched community scale but the most severe maintainer bottleneck. The 500-item ceiling masking true volume, combined with critical issues open for 5+ months, signals a governance crisis. The project needs either more maintainers, a product decision-maker, or an RFC process to triage the mountain of decisions needed.
- **ZeroClaw** — High activity (50/50) but no releases today. Stacked PR methodology is impressive but users are waiting. Multiple long-unanswered issues (GitHub channel #2079, NO_REPLY #2128) suggest acknowledgment gaps.
- **Hermes Agent** — Fast on fixes (several P0/P1 bugs resolved same-day) but the desktop install/update pipeline is a hemorrhage of user trust. 4+ overlapping electron-builder issues represent a categorical failure in build system reliability.

### Tier 3: Stabilization / Maintenance Mode
*Post-feature-release refinement, or limited maintainer bandwidth*

- **NanoClaw** — Post-v2.1.x regression patching (delivery isolation, managed-fleet auth). Healthy contributor responsiveness but the breaking-change tripwire suggests v2.1 was under-tested. Now in cleanup mode.
- **LobsterAI** — v2026.6.15 shipped (Computer Use, ASR, post-compaction continuity), 13 PRs merged, zero open issues. In a polish/maturity phase after major feature rollout. The cleanest signal of a project completing a development cycle.

### Tier 4: Low Activity / At Risk
*Constrained communities or potentially dormant*

- **Moltis** — Only 4 issues and 1 PR updated. The echo cancellation retrigger (#1129) is a critical voice-mode bug with zero maintainer response. Needs a maintainer infusion or risks user base erosion.
- **NullClaw** — 3 issues, 1 PR. The scheduler auth bug (#915) has been open 34 days with no fix. Small but functional; at risk if maintainers step away.
- **TinyClaw / ZeptoClaw** — No activity. Should be classified as dormant absent outreach from maintainers.

---

## 7. Trend Signals

### For AI Agent Developers: What the Community Is Telling Us

1. **Security is no longer optional — it's the product.** Every active project has CVE-class issues in flight. Users (especially in finance, enterprise, self-hosted deployments) are auditing dependency trees, demanding secret masking at the platform level, and rejecting prompt-instruction-based sandboxing. The projects that sandbox in Rust (PicoClaw's vodozemac push, IronClaw's Rust-first architecture, OpenClaw's #6731 Rust rewrite discussion) are signaling where the industry must go.

2. **Compaction is the new "memory leak."** Freeze-on-compaction bugs are the single most critical stability category across OpenClaw, CoPaw, and NanoClaw simultaneously. As agent sessions grow longer and context windows expand, compaction is no longer a convenience feature — it's a reliability-critical process that needs hard timeouts, progress guarantees, and graceful degradation.

3. **Desktop onboarding is where users are lost.** Hermes Agent's 4+ overlapping electron-builder failures, OpenClaw's 5.5 months without Linux/Windows apps, and NanoClaw's Managed Frac tripwire breaking immutable images all point to the same truth: **the packaging and installation layer is underinvested relative to agent runtime sophistication.** For developers building on these platforms, invest in CI/CD for desktop packaging and multi-platform CI as heavily as agent logic.

4. **A2A protocol adoption is imminent.** Hermes's A2A issue (#514) has the highest combined engagement (18 👍 + 22 comments) of any feature request in the dataset. ZeroClaw and CoPaw are both building A2A support. Agent-to-agent communication is the next platform-level capability — the project that gets A2A right with good UX will capture the multi-agent orchestration use case.

5. **The "cron problem" is systemic.** Across OpenClaw, ZeroClaw, and CoPaw, scheduled tasks are second-class execution contexts that lack session context, fail silently, and bypass orchestrator safety. Any developer building scheduling into an agent platform must treat it as a first-class pipeline with full observability, not an afterthought.

6. **Chinese market demand is a strategic gap.** Feishu channel fixes (NanoBot, CoPaw), WeChat integration demand (IronClaw), and CoPaw's XiaoYi A2A implementation all point to significant unmet demand in Chinese-language and China-platform deployments. OpenClaw has no native WeChat support. This is a market access opportunity and a competitive vulnerability.

7. **The ecosystem is bifurcating: appliance vs. gateway.** NanoClaw's managed-fleet tripwire, PicoClaw's nightly embedded builds, and LobsterAI's Computer Use feature represent an "appliance" model where the agent is a deployed artifact with upgrade semantics. OpenClaw, NanoBot, and Hermes represent a "gateway" model where the agent is a long-running service. Developers should decide which model fits their deployment context early — the architectural implications (state management, update mechanisms, observability) diverge sharply.

---

*Report compiled by OWL, ZOO Company. Data sourced from GitHub public repositories as of 2026-06-18. Health scores reflect activity patterns, backlog management, and release cadence — not code quality audits.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-18

---

## 1. Today's Overview

NanoBot shows **high development velocity** today with 30 PRs updated (18 merged/closed, 12 still open) and 10 issues touched (7 open, 3 closed). The project is in an active stabilization-and-feature-shipping phase: the majority of merged PRs are bug fixes and correctness patches, while open PRs target meaningful new capabilities (Feishu QR login, configurable microcompaction, delivery-context preservation). No new release was published today, suggesting the team is accumulating changes for an upcoming version bump. Overall project health is strong — fast merge cadence, responsive issue triage, and broad contributor participation.

---

## 2. Releases

**No new releases today.** The latest release information was not included in the data provided. The high volume of merged bug fixes and feature PRs (especially around Feishu streaming, Anthropic tool-ID sanitization, proxy handling, and memory consolidation) hints that a patch or minor release is likely imminent.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Area | Summary |
|---|---|---|
| [#4381](https://github.com/HKUDS/nanobot/pull/4381) | Feishu channel | Recover failed Feishu streaming card updates by reopening `streaming_mode` before retry; close blank/broken cards as fallback |
| [#4380](https://github.com/HKUDS/nanobot/pull/4380) | Shell safety | Allow git commands in workspace subdirectories — fixes path-guard false positives when `cwd` is a nested subdirectory |
| [#4367](https://github.com/HKUDS/nanobot/pull/4367) | Providers | Disable proxy for local endpoints (Ollama/llama.cpp/vLLM); respect env proxy for cloud — fixes [#4366](https://github.com/HKUDS/nanobot/issues/4366) |
| [#4385](https://github.com/HKUDS/nanobot/pull/4385) | Agent runner | Log primary model error before attempting fallback, improving debuggability of model failover |
| [#4356](https://github.com/HKUDS/nanobot/pull/4356) | Anthropic | Sanitize `tool_use`/`tool_result` IDs to match Anthropic's `^[a-zA-Z0-9_-]+$` pattern, preventing 400 errors |
| [#4354](https://github.com/HKUDS/nanobot/pull/4354) | WhatsApp bridge | Send read receipts (blue ticks) for incoming WhatsApp messages |
| [#4351](https://github.com/HKUDS/nanobot/pull/4351) | Providers | Better Mistral support — handle `reasoning_effort` strict values, other API differences |
| [#4350](https://github.com/HKUDS/nanobot/pull/4350) | Web search | Add **Keenable** as a built-in web search provider |
| [#4349](https://github.com/HKUDS/nanobot/pull/4349) | Session | Preserve user turns in replay-window history to prevent LLM replay from starting mid-turn |
| [#4347](https://github.com/HKUDS/nanobot/pull/4347) | MyTool | Fix model preset switching with clearer success/error output |
| [#4283](https://github.com/HKUDS/nanobot/pull/4283) | WebUI | Correct activity duration display — use final assistant turn latency instead of early reasoning timing |
| [#4202](https://github.com/HKUDS/nanobot/pull/4202) | Filesystem | Clarify and fix workspace write policy — `extra_allowed_dirs` treated as read-only, explicit write-path config added |
| [#4053](https://github.com/HKUDS/nanobot/pull/4053) | Tools | Keep read-only roots out of write paths; add regression tests for workspace restriction |

**Key themes:** Provider compatibility (Mistral, Anthropic, proxy), Feishu/WhatsApp channel polish, filesystem security hardening, and session/memory correctness.

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

1. **[#4360](https://github.com/HKUDS/nanobot/issues/4360)** — *"end of file unexpected" during installer* (9 comments, closed)
   - **Pip install fails** in a fresh `debian:13` Docker container with a JSON syntax error. Likely a `pyproject.toml` or generated config parsing issue. High comment count indicates multiple users hit this. **Status:** Closed (fix likely via installer PR).

2. **[#4389](https://github.com/HKUDS/nanobot/issues/4389)** — *Per-model `contextWindowTokens` for fallback models* (1 comment, open)
   - When a fallback model has a smaller context window than the primary, nanobot does not trim the prompt. This is a real usability gap for multi-model setups.

3. **[#4388](https://github.com/HKUDS/nanobot/issues/4388)** — *iOS Safari WebUI zoom on input focus* (1 comment, open)
   - Despite prior mobile UI fixes, tapping the input field still triggers auto-zoom and UI distortion on iOS 26.5 Safari. A persistent front-end annoyance.

4. **[#4376](https://github.com/HKUDS/nanobot/issues/4376)** — *User-friendly wizard for onboarding* (1 comment, 👍1, open)
   - `nanobot onboard --wizard` assumes too much technical knowledge. Request for a guided, beginner-friendly setup flow.

5. **[#936](https://github.com/HKUDS/nanobot/issues/936)** — *Multi-tenant gateway for multiple agents* (1 comment, open since Feb 2026)
   - Running multiple agents currently requires separate gateway containers. A single-instance multi-agent gateway would reduce resource overhead. Long-standing request.

### Underlying Needs Analysis
- **Installation friction** is a recurring pain point (Docker, proxy, wizard complexity) — the project risks losing non-technical users at the first step.
- **Multi-model / multi-agent orchestration** is a power-user demand that keeps resurfacing (fallback context windows, multi-tenant gateway, cron-level model switching).
- **Mobile WebUI polish** remains incomplete despite prior fixes.

---

## 5. Bugs & Stability

| Severity | Issue / Bug | Status | Fix PR |
|---|---|---|---|
| 🔴 **High** | [#4360](https://github.com/HKUDS/nanobot/issues/4360) Installer aborts with JSON parse error in Docker | Closed | Likely resolved by installer fix |
| 🔴 **High** | [#4322](https://github.com/HKUDS/nanobot/issues/4322) `NameError: 'session_key'` crash after merge (prompt-caching branch) | Closed | Fixed upstream |
| 🟠 **Medium** | [#4388](https://github.com/HKUDS/nanobot/issues/4388) iOS Safari auto-zoom breaks WebUI layout | **Open** | None yet |
| 🟠 **Medium** | [#4389](https://github.com/HKUDS/nanobot/issues/4389) Fallback model doesn't respect smaller context window | **Open** | None yet |
| 🟡 **Low** | [#4366](https://github.com/HKUDS/nanobot/issues/4366) Local model servers broken by proxy env vars | Closed | [#4367](https://github.com/HKUDS/nanobot/pull/4367) merged |
| 🟡 **Low** | Feishu streaming card failures | Closed | [#4381](https://github.com/HKUDS/nanobot/pull/4381) merged |
| 🟡 **Low** | Anthropic 400 on invalid tool IDs | Closed | [#4356](https://github.com/HKUDS/nanobot/pull/4356) merged |

**Assessment:** Critical bugs are being resolved quickly. The two open medium-severity issues (iOS Safari, fallback context window) are quality-of-life problems that affect specific user segments but are not blockers.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signal Strength | Likelihood in Next Version |
|---|---|---|---|
| **Per-model context window tokens** | [#4389](https://github.com/HKUDS/nanobot/issues/4389) | Medium — clear technical gap, affects multi-model users | ⭐⭐⭐ High (well-defined fix) |
| **User-friendly onboarding wizard** | [#4376](https://github.com/HKUDS/nanobot/issues/4376) | Medium — 👍 vote, aligns with growth goals | ⭐⭐ Medium (UX effort, may be phased) |
| **Multi-tenant gateway** | [#936](https://github.com/HKUDS/nanobot/issues/936) | Low-Medium — open since Feb, single comment | ⭐ Low (architectural change) |
| **Cron-level model/preset switching** | [#4378](https://github.com/HKUDS/nanobot/issues/4378) | Low — discussion-linked, no direct issue traction | ⭐ Low |
| **On-demand heartbeat trigger** | [#3437](https://github.com/HKUDS/nanobot/issues/3437) | Low — RFC-stage, niche debugging use case | ⭐ Low |
| **Multi-instances UX** | [#4390](https://github.com/HKUDS/nanobot/issues/4390) | Low — just filed, overlaps with #936 | ⭐ Low |

**Prediction:** The next release will likely include the per-model `contextWindowTokens` fix and continued provider/channel polish. The onboarding wizard may appear as a follow-up release given its UX scope.

---

## 7. User Feedback Summary

**Pain Points:**
- **Installation is fragile** — Docker users hit JSON parse errors ([#4360](https://github.com/HKUDS/nanobot/issues/4360)), proxy misconfiguration breaks local model servers ([#4366](https://github.com/HKUDS/nanobot/issues/4366)). First impressions matter.
- **Non-technical users feel excluded** — the wizard assumes deep technical knowledge ([#4376](https://github.com/HKUDS/nanobot/issues/4376)).
- **Mobile experience is incomplete** — iOS Safari zoom issue persists despite prior fixes ([#4388](https://github.com/HKUDS/nanobot/issues/4388)).
- **Multi-model workflows are underserved** — fallback context window mismatch ([#4389](https://github.com/HKUDS/nanobot/issues/4389)) and lack of per-cron model switching ([#4378](https://github.com/HKUDS/nanobot/issues/4378)) frustrate advanced users.

**Positive Signals:**
- Fast bug turnaround — most reported bugs today were closed the same day.
- Active community with diverse contributors (Feishu, WhatsApp, Anthropic, Mistral, Keenable).
- Rich feature pipeline (QR-code Feishu login, configurable microcompaction, mailbox-backed subagents).

**Overall Sentiment:** Cautiously positive. Users appreciate the responsiveness but want smoother onboarding and better mobile/multi-model support.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age / Status | Why It Matters |
|---|---|---|
| **[#936](https://github.com/HKUDS/nanobot/issues/936)** Multi-tenant gateway | Open since **Feb 2026** (4 months), 1 comment | Architectural feature request with no maintainer response. Risk of community frustration if not acknowledged. |
| **[#3437](https://github.com/HKUDS/nanobot/issues/3437)** On-demand heartbeat trigger | Open since **Apr 2026** (2 months), 1 comment | RFC-stage; needs triage (accept/close/defer). |
| **[#4388](https://github.com/HKUDS/nanobot/issues/4388)** iOS Safari zoom | Open 1 day, no response yet | Mobile UX is a recurring weak spot; quick acknowledgment would help. |
| **[#4389](https://github.com/HKUDS/nanobot/issues/4389)** Per-model context window | Open 1 day, no response yet | Well-defined technical fix; likely low effort, high impact. |
| **[#4205](https://github.com/HKUDS/nanobot/pull/4205)** Mailbox-backed subagent results | Open since **Jun 5** (12 days), no comments | Non-trivial architectural PR that needs review bandwidth. |
| **[#4021](https://github.com/HKUDS/nanobot/pull/4021)** Dedup reasoning items for Codex | Open since **May 27** (21 days), AI-assisted | Stale PR closing a real bug (#3633); needs review or closure. |

**Recommendation:** Prioritize triaging the stale PRs (#4205, #4021) and acknowledging the long-open issues (#936, #3437) to maintain community trust. The fresh issues (#4388, #4389) are good candidates for quick wins.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent — Project Digest
**Date:** 2026-06-18

---

## 1. Today's Overview

Hermes Agent remains under intense development activity with **50 issues and 50 PRs updated in the last 24 hours** each. No new releases were published today, but the project is in a highly active stabilization and iteration cycle — particularly around the Desktop/Electron build pipeline, gateway reliability, and plugin/cron subsystem fixes. The volume of newly opened bugs (many tied to macOS/Windows desktop compilation and update loops) suggests the v0.16.0 release surface is still being hardened. Maintainer throughput on fixes is strong, with several high-priority PRs already merged or in review on the same day they were filed.

---

## 2. Releases

**None today.** No new tagged releases were published. The project appears to be accumulating fixes from the v0.16.0 cycle ahead of a maintenance patch.

---

## 3. Project Progress

### Merged / Closed PRs Today

| # | PR | Summary | Significance |
|---|-----|---------|-------------|
| 48122 | [fix(desktop): retry the self-update rebuild once so the app relaunches](https://github.com/NousResearch/hermes-agent/pull/48122) | Fast-follow to #48091 — ensures desktop app relaunches after self-update rebuild | Fixes user-facing update UX regression on macOS/Windows desktop |
| 48117 | [fix(update): guard gateway import chain and self-heal autostash-poisoned trees](https://github.com/NousResearch/hermes-agent/pull/48117) | Resolves crash-loop from merge-conflict markers left by git autostash in gateway code | Critical reliability fix for desktop install/update flow |
| 48109 | [fix(agent): dampen empty-name phantom tool-call loop](https://github.com/NousResearch/hermes-agent/pull/48109) | Stops weak models from dumping full tool catalog on phantom XML tool calls | Fixes the 3–4x token burn and context corruption reported in #47967 |
| 48108 | [fix(xai): native web_search swap + incomplete guard for OAuth Responses](https://github.com/NousResearch/hermes-agent/pull/48108) | Salvage of #44341 — fixes xAI/grok-composer web-research failures and context-window misreport | Consolidates a previously stalled fix for xAI OAuth users |
| 44341 | [fix(xai): OAuth Responses native web_search, incomplete guard, grok-composer 262k context](https://github.com/NousResearch/hermes-agent/pull/44341) | Closed (superseded by #48108) | — |

**Key takeaway:** The team is executing a focused "stabilization sprint" — tightening the desktop update pipeline (#48122, #48117), closing agent-execution correctness gaps (#48109), and salvaging provider-specific fixes that had stalled (#48108 superseding #44341).

---

## 4. Community Hot Topics

These are the most discussed and most reacted-to items updated in the last 24 hours:

### Most Commented

- **[Issue #514: A2A (Agent-to-Agent) Protocol Support](https://github.com/NousResearch/hermes-agent/issues/514)** (22 comments, 👍18) — The most engaged discussion points to community demand for **agent interoperability**. This request is about supporting Google's A2A open standard for inter-agent discovery and communication, complementary to MCP. The high comment count and strong support signal this is a strategic gap in the roadmap.

- **[Issue #3725: Rocket Chat Support](https://github.com/NousResearch/hermes-agent/issues/3725)** (10 comments, 👍8) — Users want Rocket Chat as a messaging gateway/channel alongside existing Discord/WhatsApp integrations. Signals demand for **broader enterprise/team chat platform support**.

- **[Issue #40187: Desktop fails to compile on macOS (`hermes update` / `hermes desktop` electron-builder error)](https://github.com/NousResearch/hermes-agent/issues/40187)** (9 comments, 👍1) — Active troubleshooting thread around the macOS Electron build pipeline.

- **[Issue #47917: Desktop build fails after update — `electronDist` does not exist (cache invalidated)](https://github.com/NousResearch/hermes-agent/issues/47917)** (8 comments, 👍1) — Post-PR #47276 regression report on the same macOS electron-builder cache issue.

### Most Reacted

- **[Issue #38602: Desktop Client-Only Installation](https://github.com/NousResearch/hermes-agent/issues/38602)** (5 comments, 👍17) — The highest-reaction feature request. Users want to use Hermes Desktop as a **thin client connecting to a remote Hermes server**, rather than bootstrapping a local runtime. This addresses users who run Hermes on a remote machine/server but want the Desktop GUI locally (e.g., laptops, low-resource dev machines).

- **[Issue #514: A2A Protocol Support](https://github.com/NousResearch/hermes-agent/issues/514)** (👍18 — highest) — Confirmed as both the most discussed and most supported community request.

**Analysis:** The community's top energy is split between (a) **strategic/ecosystem expansion** (A2A protocol, Rocket Chat, thin-client desktop) and (b) **frustration with desktop install/update reliability** across macOS and Windows. The install/updates pain cluster represents multiple overlapping reports of the same root cause (electron-builder/Electron packaging), suggesting a single architectural fix could resolve many issues.

---

## 5. Bugs & Stability

Ranked by severity (P1 → P3), based on labels and user impact:

### P1 — Critical / Data Loss Risk

| # | Issue | Component | Fix PR? | Summary |
|---|-------|-----------|---------|---------|
| 47555 | [Supervised gateway crash-loop in Docker (NS-505)](https://github.com/NousResearch/hermes-agent/pull/47555) | Docker/Gateway | 🔧 **PR #47555 (OPEN)** | s6 container gateway lacks `--replace` flag, causing crash-loops when stray gateway processes exist |
| 48061 | [Linux pipx install sends empty model/provider at runtime](https://github.com/NousResearch/hermes-agent/issues/48061) | Agent/CLI | ❌ | Requests fail with `max_retries_exhausted` due to empty model/provider on pipx Linux installs |
| 27555 | [Vision `fallback_chain` silently broken — wrong kwargs in `_resolve_single_provider`](https://github.com/NousResearch/hermes-agent/issues/27555) | Agent/Vision | ❌ | TypeError silently swallowed; entire vision provider fallback chain fails to initialize |

### P2 — Significant Impact

| # | Issue | Component | Fix PR? | Summary |
|---|-------|-----------|---------|---------|
| 47917 | [`electronDist` cache invalidated after update](https://github.com/NousResearch/hermes-agent/issues/47917) | Desktop/CLI | ❌ | Re-emerged regression of the macOS electron-builder failure |
| 46260 | [Installer fails at "desktop" stage — npm exit code 1 on Windows 10](https://github.com/NousResearch/hermes-agent/issues/46260) | CLI/Docker/Installer | ❌ | Windows installer crashes during desktop compilation step |
| 43913 | [macOS install loop — system python3 used instead of bundled venv](https://github.com/NousResearch/hermes-agent/issues/43913) | Desktop/CLI | ❌ | Hermes Desktop stuck in permanent install loop on macOS Apple Silicon |
| 48133 | [Gateway timestamp strip fails on Windows multi-word timezone names](https://github.com/NousResearch/hermes-agent/issues/48133) | Gateway | 🔧 **PR #48134 (OPEN)** | Windows `strftime("%Z")` returns multi-word names, breaking timestamp regex |
| 48043 | [Cron jobs lose plugin hooks (pre_tool_call, post_tool_call)](https://github.com/NousResearch/hermes-agent/issues/48043) | Cron/Plugins | 🔧 **PR #48132 (OPEN)** | `discover_plugins()` not called before cron agent construction |
| 48127 | [Long-lived gateway uses stale `max_turns` after config change](https://github.com/NousResearch/hermes-agent/pull/48127) | Gateway | 🔧 **PR #48127 (OPEN)** | Runtime turn cap not refreshed from updated `config.yaml` |
| 48055 | [`/new` does not reset model after session-only `/model` switch](https://github.com/NousResearch/hermes-agent/issues/48055) | Agent/CLI | ❌ | Session model override persists across `/new` — unexpected behavior |

### P3 — Minor / Cosmetic

| # | Issue | Summary |
|---|-------|---------|
| 48098 | Desktop shows stale "Summarizing thread" status after compaction resumes |
| 48100 | Windows installer "Access Denied" on `pythonw.exe` during auto-update (duplicate of #44873, now closed) |
| 40692 | macOS Desktop composer typing lag with long conversation histories (30+ exchanges) |
| 44873 | Windows `RotatingFileHandler.doRollover()` PermissionError spam (**CLOSED**) |

**Overall Stability Signal:** The desktop packaging pipeline remains the single biggest source of user-facing failures, with **4+ overlapping issues** across macOS and Windows related to electron-builder, `electronDist` path resolution, and npm workspace hoisting. This cluster needs a unified architectural fix rather than per-issue patches.

---

## 6. Feature Requests & Roadmap Signals

| # | Request | 👍 / Comments | Likelihood of Next Version | Rationale |
|---|---------|:---:|:---:|-----------|
| 514 | A2A Protocol Support | 18 / 22 | 🟡 Medium | High community engagement; aligns with industry trend (Google/LF standard); significant integration scope |
| 38602 | Desktop Thin Client / Client-Only Install | 17 / 5 | 🟡 Medium-High | Clear UX improvement; requested by multiple users; architectural but bounded scope |
| 3725 | Rocket Chat Support | 8 / 10 | 🟢 High | Comparable in scope to existing gateway implementations (Discord, WhatsApp); community-provided |
| 32497 | Agent self-modifies skills/prompts (guardrail needed) | 0 / 4 | 🟢 High | Correctness/security concern; likely needs a quick flag/setting to prevent |
| 41190 | Unified plugin route selector for per-turn provider/model override | 0 / 3 | 🟡 Medium | Architectural improvement mentioned alongside #23739 |
| 23739 | `pre_llm_call` plugins override model/provider/system_prompt at runtime | 0 / 2 | 🟡 Medium | Partially overlaps with #41190; needs design coordination |
| 47199 | Claude Code subscription MCP provider (no API keys) | 0 / 2 | 🔵 Low | Business-model complexity; requires Anthropic partnership or reverse engineering |
| 6715 | `agentmemory` memory provider plugin | 5 / 3 | 🔵 Low | Community contribution; depends on external library |
| 33376 | CLI `balance` command for Nous Portal credits | 0 / 2 | 🔵 Low | Nice-to-have; Nous-specific |

**Prediction for v0.16.x:** The next point release will likely prioritize **stabilization over new features** — desktop install/update fixes, the xAI OAuth fix (#48108), and plugin/cron reliability (#48132). The thin-client desktop request (#38602) and A2A protocol (#514) are strong candidates for a v0.17.x roadmap.

---

## 7. User Feedback Summary

### Pain Points

1. **Desktop onboarding is broken across platforms.** Multiple macOS and Windows users report being unable to complete installation or update due to electron-builder failures. This is the **#1 friction point** — it's where new users first encounter the product, and it's failing repeatedly (#40187, #47917, #46260, #43913, #48060/#48059 duplicates). The sentiment is one of frustration: users who successfully installed once are then locked out of updates.

2. **Silent agent correctness failures.** Users report Hermes silently modifying its own skills/prompts (#32497), vision fallback chains silently failing (#27555), and phantom tool calls from weak models burning 3–4x tokens (#47967). These erode trust in the agent's reliability without clear error messages.

3. **Session management UX is confusing.** `/new` not resetting the model (#48055) and desktop showing stale statuses (#48098) are small but frequent confusion points that accumulate into a perception of poor polish.

4. **Linux pipx users feel like second-class citizens.** The empty model/provider bug (#48061) on pipx-installed Linux appears to be a regression, and Linux users report feeling overlooked compared to macOS/Windows desktop focus.

### Satisfaction Signals

- **A2A protocol enthusiasm** (Issue #514 has 18 upvotes and 22 comments) indicates users see Hermes Agent as a platform-level tool and want it to interoperate with other agents — a sign of deep engagement, not casual use.
- **Rocket Chat request** (#32497 + comments) shows enterprise/团队协作 adoption patterns.
- **Desktop thin client** (#38602) suggests users want to deploy Hermes in a client-server architecture — a more advanced use case signaling production intent.

---

## 8. Backlog Watch

These important issues and PRs have been open for extended periods without resolution:

| # | Item | Age | Priority | Why It Matters |
|---|------|:---:|:---:|-----------|
| 43913 | [macOS install loop — system python3 vs bundled venv](https://github.com/NousResearch/hermes-agent/issues/43913) | ~1 week | P2 | Blocks macOS Apple Silicon users from even launching the desktop app; no maintainer response in thread |
| 27555 | [Vision `fallback_chain` silently broken](https://github.com/NousResearch/hermes-agent/issues/27555) | ~1 month | P1 | A silent failure in a core capability (vision); wrong kwargs is a one-line fix but it has been open since May |
| 32497 | [Agent self-modifies own skills/prompts](https://github.com/NousResearch/hermes-agent/issues/32497) | ~3 weeks | P2 | Trust/correctness issue; no maintainer engagement despite being a data-integrity concern |
| 40692 | [macOS Desktop composer lag with long conversations](https://github.com/NousResearch/hermes-agent/issues/40692) | ~2 weeks | P3 | Performance regression impacting daily usability; no response |
| 514 | [A2A Protocol Support](https://github.com/NousResearch/hermes-agent/issues/514) | ~3.5 months | Feature | Highest community engagement item; needs maintainer signal on whether/when this enters roadmap |
| 6715 | [agentmemory plugin integration](https://github.com/NousResearch/hermes-agent/issues/6715) | ~2.5 months | Feature | Community member contributed a working plugin; needs review/blessing |
| 15435 | [Mock systemd preflight in gateway tests](https://github.com/NousResearch/hermes-agent/pull/15435) | ~2 months | Test PR | Simple, non-controversial CI improvement; stalled in review |
| 41190 | [Unified plugin route selector](https://github.com/NousResearch/hermes-agent/issues/41190) | ~11 days | Feature | Architectural; overlaps with #23739 — needs design decision from maintainers |

**Recommendation:** The top two items needing immediate staffing are **#27555** (vision fallback — a one-line kwargs fix that's been silently broken for a month) and **#43913** (macOS install loop — actively blocking new users). The **A2A protocol issue (#514)** is the most impactful community request and deserves at least a maintainer comment on roadmap fit.

---

*Digest generated by OWL for 2026-06-18. All links reference github.com/NousResearch/hermes-agent.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-18

---

## 1. Today's Overview

PicoClaw is in a highly active development phase, with **10 PRs updated** (6 merged/closed, 4 still open) and **4 issues updated** (2 open, 2 closed) in the last 24 hours. A new **nightly build** (`v0.3.0-nightly.20260617.a16a1e15`) was published, indicating the project is iterating rapidly toward a v0.3.0 release. The activity profile today is dominated by **security hardening** (OneBot SSRF fix), **provider compatibility** (Gemini 3.5 Flash, NEAR AI Cloud), and **UI/UX polish** (Web session history, Sogou search parsing). The project health is strong: bugs are being closed the same day they're reported, and stale PRs are being cleaned up.

---

## 2. Releases

- **Nightly Build — `v0.3.0-nightly.20260617.a16a1e15`**
  - Automated nightly build; may be unstable. Use with caution.
  - Full changelog: [v0.3.0...main](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)
  - This nightly incorporates all merged PRs from today, including the Gemini thought_signature fix, OneBot SSRF patch, Sogou search fix, and NEAR AI Cloud provider addition.

---

## 3. Project Progress

### Merged/Closed PRs (6)

| # | PR | Summary |
|---|-----|---------|
| [#3136](https://github.com/sipeed/picoclaw/pull/3136) | **fix(gemini)** | Added both `camelCase` and `snake_case` `thought_signature` fields in tool call request bodies, restoring compatibility with Gemini 3.5 Flash's agentic reasoning requirements. |
| [#3140](https://github.com/sipeed/picoclaw/pull/3140) | **fix(onebot)** | Blocked private/internal network address fetches from attacker-controlled OneBot inbound media URLs, closing a server-side request forgery (SSRF) vulnerability. |
| [#3139](https://github.com/sipeed/picoclaw/pull/3139) | **fix(web)** | Updated Sogou WAP search HTML parsing regex to match new page structure (`resultLink` quoting, `clamp2` class changes). |
| [#2917](https://github.com/sipeed/picoclaw/pull/2917) | **feat(provider)** | Added **NEAR AI Cloud** as a first-class OpenAI-compatible LLM provider with TEE-capable model suggestions and catalog fetch support. |
| [#2990](https://github.com/sipeed/picoclaw/pull/2990) | **fix(web)** | Fixed Web UI session history to display full conversation history instead of only the last user message (issue [#2796](https://github.com/sipeed/picoclaw/issues/2796)). |
| [#3138](https://github.com/sipeed/picoclaw/pull/3138) | **feat** | Added a review feature (리뷰기능 추가). |

### Still Open / In Progress (4)

| # | PR | Summary |
|---|-----|---------|
| [#3092](https://github.com/sipeed/picoclaw/pull/3092) | **fix(skills_install)** | Adds `ok` checks for type assertions on `version` and `force` args to prevent silent zero-value fallbacks. |
| [#3141](https://github.com/sipeed/picoclaw/pull/3141) | **fix(web_search)** | Adds diagnostic logging for Brave Search API returning HTTP 200 with zero results. |
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) | **feat** | DeltaChat gateway integration (new messaging channel). |
| [#3142](https://github.com/sipeed/picoclaw/pull/3142) | **fix(spawn)** | Clears `ForUser` in sub-turn `ToolResult` to prevent duplicate message delivery on async sub-agent completion. |

---

## 4. Community Hot Topics

### 🔐 [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) — Replace libolm with vodozemac
- **Author:** pbsds | **Priority:** High | **👍: 2** | **Comments: 1**
- **Underlying need:** libolm is unmaintained and has known security vulnerabilities. The community is pushing for migration to **vodozemac**, the official Rust-based replacement. This is a security-critical infrastructure change that affects Matrix/encryption support. The suggestion to make libolm optional at compile time indicates a desire for a gradual migration path rather than a hard break.

### 🔒 [Issue #3070](https://github.com/sipeed/picoclaw/issues/3070) — OneBot SSRF (CLOSED — fixed by [#3140](https://github.com/sipeed/picoclaw/pull/3140))
- **Author:** YLChen-007 | **Status:** Closed
- **Underlying need:** A real security vulnerability was reported and **patched within 8 days**. This demonstrates responsive security handling by the maintainers.

### 🤖 [Issue #3111](https://github.com/sipeed/picoclaw/issues/3111) — Gemini 3.5 Flash tool execution failure (CLOSED — fixed by [#3136](https://github.com/sipeed/picoclaw/pull/3136))
- **Author:** Giordano10 | **Status:** Closed
- **Underlying need:** Rapid model iteration by Google (Gemini 3.5 Flash introducing agentic reasoning with `thought_signature`) broke compatibility. Fixed same-day.

### 🔌 [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093) — Request for SimpleX/Tox/Wire gateway
- **Author:** Damian-o2 | **Status:** Open, Stale
- **Underlying need:** Users want PicoClaw to integrate with **privacy-first messaging protocols** beyond the currently supported channels. This aligns with the DeltaChat gateway PR ([#3063](https://github.com/sipeed/picoclaw/pull/3063)) already in progress.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Status | Details |
|----------|----------|--------|---------|
| 🔴 **Critical** | [#3070](https://github.com/sipeed/picoclaw/issues/3070) — OneBot SSRF | ✅ **Fixed** by [#3140](https://github.com/sipeed/picoclaw/pull/3140) | Attacker-controlled media URLs could trigger arbitrary host-side fetches to private addresses. Patched same-day. |
| 🟠 **High** | [#3111](https://github.com/sipeed/picoclaw/issues/3111) — Gemini 3.5 Flash tool failure | ✅ **Fixed** by [#3136](https://github.com/sipeed/picoclaw/pull/3136) | Missing `thought_signature` (snake_case) caused 400 Bad Request. Patched same-day. |
| 🟡 **Medium** | [#3139](https://github.com/sipeed/picoclaw/pull/3139) — Sogou search parsing | ✅ **Fixed** | HTML structure change on Sogou WAP broke result extraction. |
| 🟡 **Medium** | [#2990](https://github.com/sipeed/picoclaw/pull/2990) — Web UI session history | ✅ **Fixed** | Only last user message was displayed in multi-turn conversations. |
| 🟢 **Low** | [#3142](https://github.com/sipeed/picoclaw/pull/3142) — Duplicate messages on sub-agent completion | 🔧 **Fix open** | `ForUser` field in sub-turn `ToolResult` causes double delivery. |
| 🟢 **Low** | [#3141](https://github.com/sipeed/picoclaw/pull/3141) — Brave empty results silent failure | 🔧 **Fix open** | Diagnostic logging added; no functional breakage. |

**Stability assessment:** All critical and high-severity bugs reported in the last 24h have been resolved. The project demonstrates excellent turnaround time on security and compatibility issues.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in v0.3.0 | Notes |
|---------|--------|----------------------|-------|
| **DeltaChat gateway** | [PR #3063](https://github.com/sipeed/picoclaw/pull/3063) (open) | 🟡 Medium | PR is active but stale; needs review. Aligns with user demand for more messaging channels. |
| **vodozemac replacing libolm** | [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) | 🟢 Low (v0.3.0) / 🔵 Planned | High-priority security request but likely a larger migration effort. Compile-time optional flag suggested as interim step. |
| **SimpleX/Tox/Wire gateway** | [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093) | 🔵 Future | No active PR; community interest exists but no implementation started. |
| **NEAR AI Cloud provider** | [PR #2917](https://github.com/sipeed/picoclaw/pull/2917) ✅ merged | ✅ **Shipped in nightly** | Already merged; will appear in next stable release. |
| **Skills install robustness** | [PR #3092](https://github.com/sipeed/picoclaw/pull/3092) (open, stale) | 🟡 Medium | Minor fix; likely to be picked up in a cleanup pass. |

---

## 7. User Feedback Summary

**Pain points identified:**
- **Model compatibility fragility:** Users are affected when LLM providers (Google Gemini) introduce breaking schema changes with new model versions. The Gemini 3.5 Flash issue ([#3111](https://github.com/sipeed/picoclaw/issues/3111)) shows users expect PicoClaw to keep pace with upstream API changes rapidly.
- **Messaging channel gaps:** Users want broader protocol support — DeltaChat, SimpleX, Tox, Wire — indicating PicoClaw is being used in **privacy-conscious environments** where mainstream channels are insufficient.
- **Encryption library concerns:** The libolm deprecation request ([#3088](https://github.com/sipeed/picoclaw/issues/3088)) signals that security-aware users are auditing the dependency stack and expect modern, maintained crypto libraries.
- **Web UI completeness:** The session history bug ([#2796](https://github.com/sipeed/picoclaw/issues/2796)) suggests users rely on the Web UI for reviewing past conversations, not just real-time interaction.

**Satisfaction indicators:**
- Security vulnerabilities are reported responsibly and patched within days.
- The project ships nightly builds, giving eager users early access to fixes.
- Multi-language contributions (Korean PR [#3138](https://github.com/sipeed/picoclaw/pull/3138)) suggest an international user base.

---

## 8. Backlog Watch

| Item | Age | Risk | Recommendation |
|------|-----|------|----------------|
| **[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)** — libolm → vodozemac migration | 9 days open, high priority, 2 👍 | 🔴 **Security risk** if deferred | Should be triaged and assigned. Even if full migration is deferred, the compile-time optional flag could be implemented as a stopgap. |
| **[PR #3063](https://github.com/sipeed/picoclaw/pull/3063)** — DeltaChat gateway | 10 days open, stale | 🟡 **Community contribution at risk of abandonment** | Needs maintainer review or feedback. Aligns with user demand in [#3093](https://github.com/sipeed/picoclaw/issues/3093). |
| **[PR #3092](https://github.com/sipeed/picoclaw/pull/3092)** — skills_install type assertion fix | 8 days open, stale | 🟢 Low risk | Minor correctness fix; low priority but easy to merge. |
| **[Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)** — SimpleX/Tox request | 8 days open, stale | 🟡 **Unmet user need** | No active implementation. Consider closing with a "contributions welcome" label or linking to the DeltaChat PR as partial fulfillment. |

---

*Data source: [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw) | Digest generated: 2026-06-18*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-18

---

## 1. Today's Overview

NanoClaw is in a high-intensity stabilization phase following the v2.1.x rollup releases. Activity over the past 24 hours is heavy: **19 PRs touched** (16 open, 3 merged/closed) and **5 issues updated** (4 open, 1 closed), with **2 new releases** (v2.1.0 and v2.1.17). The dominant theme is **post-v2 breaking-change fallout** — multiple contributors are racing to patch regressions in setup skills, CLI commands, security validators, and the managed-fleet upgrade tripwire that shipped with v2.1.0. The project is healthy in terms of contributor responsiveness (most issues filed yesterday already have corresponding fix PRs), but the volume of breakage suggests the v2→v2.1 transition was under-tested for edge-case deployment topologies.

---

## 2. Releases

### v2.1.17 (latest)
**Rollup release** aggregating every `package.json` bump since v2.1.0.

- **[BREAKING] `@onecli-sh/sdk` upgraded 0.5.0 → 2.2.1** — requires a OneCLI server with the `/v1` API. Older servers will 404 on every SDK call. The sanctioned gateway and CLI versions are now pinned. Users on older OneCLI backends must upgrade their server before updating NanoClaw.

### v2.1.0
**Rollup release** aggregating every `package.json` bump since v2.0.64.

- **[BREAKING] Startup now requires an upgrade marker** — the host refuses to boot unless `data/upgrade-state.json` records that this install reached the current version through a sanctioned upgrade path. This is a tripwire to prevent unsupported in-place upgrades. **Managed-fleet / immutable-image deployments** that bake NanoClaw into a VM image are affected; the opt-out env var `NANOCLAW_DISABLE_UPGRADE_TRIPWIRE=1` was added in PR #2780 (merged).

**Migration notes:** Users upgrading from v2.0.x should ensure the upgrade-state file is present. Managed-fleet operators should set `NANOCLAW_DISABLE_UPGRADE_TRIPWIRE=1` or adopt the sanctioned upgrade path. OneCLI server operators must confirm `/v1` API availability before updating.

---

## 3. Project Progress

Three PRs were merged/closed in the last 24 hours:

| PR | Description |
|---|---|
| **#2797** [CLOSED/MERGED] | **fix(delivery): isolate per-session failures** — `pollActive`/`pollSweep` now wrap each session's delivery in its own try/catch, so one unhealthy session's `outbound.db` read failure no longer aborts the entire delivery tick for all agents. Fixes #2796. |
| **#2794** [CLOSED/MERGED] | **fix(providers): restore env-var gateway auth for managed fleets** — resolved a 401 "No credentials config" regression on `main` (v2.1.17) where managed-fleet agents baked into immutable VM images could no longer authenticate to the LLM gateway. |
| **#2780** [CLOSED/MERGED] | **feat(upgrade-state): env opt-out for startup tripwire** — adds `NANOCLAW_DISABLE_UPGRADE_TRIPWIRE=1` to let managed-fleet deployments bypass the v2.1.0 upgrade marker requirement. |

**Net result:** The two most critical regressions introduced by v2.1.0 (delivery isolation and managed-fleet auth) are now fixed on main. The managed-fleet upgrade tripwire opt-out is also in.

---

## 4. Community Hot Topics

**Security hardening surge — multiple CWE-class fixes in flight:**

- **PR #2799** — [fix(security): confine `send_file` reads to /workspace (CVE-2026-29611)](https://github.com/nanocoai/nanoclaw/pull/2799). A prompt-injected or compromised agent could read any container-visible file. This is the highest-severity open PR.
- **PR #2800** — [fix(security): enforce folder validator in `ncl groups create` (CWE-22 path traversal)](https://github.com/nanocoai/nanoclaw/pull/2800). The CLI `groups create --folder ../../etc` path was persisting paths that escape `GROUPS_DIR`.

**Underlying need:** The NanoClaw community is actively auditing the CLI and tool-call surface for sandbox escape vectors. The concentration of security PRs from the same author (`sturdy4days`) in a single day suggests a coordinated security review was triggered — possibly by the CVE-2026-29611 disclosure.

**Agent-to-agent governance:**

- **PR #2793** — [feat(agent-to-agent): per-message approval policies on connected agents](https://github.com/nanocoai/nanoclaw/pull/2793). Adds an optional directed per-message require-approval gate on agent-to-agent connections. Backward compatible (no policy = free flow).

**Underlying need:** As users deploy multi-agent topologies, they need inter-agent access control. This is a signal that NanoClaw's user base is moving beyond single-agent setups into orchestrated agent workflows.

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue / PR | Status |
|---|---|---|
| 🔴 **Critical** | **#2796** — One unhealthy session stalls message delivery for all agents (unhandled throw aborts delivery tick) | ✅ Fixed by PR #2797 (merged) |
| 🔴 **Critical** | **CVE-2026-29611** (PR #2799) — `send_file` reads any container-visible file, no root restriction | 🟡 Fix PR open, not yet merged |
| 🔴 **Critical** | **CWE-22** (PR #2800) — `ncl groups create` allows path traversal via `--folder` | 🟡 Fix PR open, not yet merged |
| 🟠 **High** | **PR #2804** — `ncl messaging-groups create` always throws `NOT NULL constraint failed: messaging_groups.instance` (CLI create path completely dead) | 🟡 Fix PR open |
| 🟠 **High** | **PR #2802** — `ncl` socket client has no request timeout or response-size cap (can hang forever) | 🟡 Fix PR open |
| 🟡 **Medium** | **PR #2801** — `safeParseContent` returns non-object JSON primitives, causing `undefined` on `.text`/`.sender` accessors | 🟡 Fix PR open |
| 🟡 **Medium** | **PR #2805** — Claude OAuth token parsing fails when output is captured through a PTY that wraps long lines | 🟡 Fix PR open |
| 🟡 **Medium** | **#2791** — `add-imessage` Step 2 redirection fails if `src/channels/` doesn't exist | ✅ Fix PR #2792 open |
| 🟢 **Low** | **#2789, #2787, #2785** — Setup/init-onecli/migrate-nanoclaw skill docs are stubs or have structural issues | ✅ Fix PRs #2790, #2788, #2786 open |

---

## 6. Feature Requests & Roadmap Signals

- **Per-message agent-to-agent approval policies** (PR #2793) — This is the most significant feature PR. It introduces a governance layer for multi-agent communication. Given the project's trajectory toward multi-agent orchestration, this is very likely to land in the next minor release.
- **`/add-clidash` skill** (PR #2795) — A read-only CLI-derived dashboard skill. Utility skill, low risk, likely to merge soon.
- **Atlas Cloud as OpenAI-compatible LLM backend** (PR #2717) — Documentation-only addition. Open since June 9, recently updated. Low controversy, likely to merge once review bandwidth is available.
- **Stale `outbound.db` journal recovery** (PR #2750) — Fixes container SIGKILL edge cases (#2516, #2640). Open since June 12, recently updated. Important for production stability; likely candidate for next release.

**Prediction for next version (v2.1.18 or v2.2.0):** Security fixes (CVE-2026-29611, CWE-22), the `messaging-groups create` NOT NULL fix, and the `outbound.db` journal recovery are the most likely candidates for the next patch. The agent-to-agent approval feature may land in a minor release if it gets review traction.

---

## 7. User Feedback Summary

**Pain points from today's issues:**

1. **Setup experience is fragile and under-documented.** Multiple issues (#2789, #2787, #2785, #2791) filed by the same contributor (`specterslient95-lgtm`) reveal that the Claude-assisted setup skills are either too terse (600-byte stub), reference ports without declaring them, or fail on fresh checkouts. This suggests new-user onboarding is a significant friction point.

2. **Breaking changes in v2.1.x are catching managed-fleet operators off guard.** The upgrade tripwire (#2780) and the OneCLI SDK bump both broke immutable-image deployments. The project is responsive (fixes merged same-day), but the release notes may not have adequately called out the operational impact.

3. **CLI reliability concerns.** The `messaging-groups create` command is completely broken (NOT NULL constraint), and the socket client can hang indefinitely. Users relying on the CLI for automation are affected.

**Satisfaction signals:** Contributors are filing detailed, well-scoped issues with clear reproduction steps. The rapid PR response time (most issues have fix PRs within hours) indicates a healthy maintainer-contributor feedback loop.

---

## 8. Backlog Watch

| Item | Age | Note |
|---|---|---|
| **PR #2750** — Recover stale `outbound.db` journals after container kills | 6 days (updated yesterday) | Fixes two long-standing issues (#2516, #2640). Important for production deployments that experience container kills. Needs review. |
| **PR #2717** — Add Atlas Cloud as LLM backend option | 9 days (updated yesterday) | Documentation-only, low risk. Unclear why it's still open — possibly waiting for maintainer review bandwidth. |
| **PR #2793** — Per-message agent-to-agent approval policies | 1 day | Significant feature. Needs design review and likely discussion about the policy schema. |

**No long-unanswered critical issues** are currently in the backlog — all high-severity issues filed in the last 24 hours have corresponding fix PRs. The main risk is that the security PRs (#2799, #2800) remain unmerged despite addressing CVE-class vulnerabilities. Maintainers should prioritize merging these.

---

*Data source: [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) · Digest generated by OWL for 2026-06-18*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-18

---

## 1. Today's Overview

NullClaw saw modest but focused activity over the past 24 hours, with 3 open issues receiving updates and 1 new pull request submitted. No releases were published, and no PRs were merged or closed during this window. The project appears to be in a maintenance-and-polish phase, with contributors targeting quality-of-life fixes (CLI input handling) and users surfacing recurring pain points around scheduler authentication and Web UI accessibility. Overall project health is stable but the backlog of long-open issues suggests maintainer bandwidth may be constrained.

---

## 2. Releases

No new releases in the last 24 hours. The latest release information is unavailable in the current dataset.

---

## 3. Project Progress

No PRs were merged or closed today. The sole active PR is:

- **[PR #960](https://github.com/nullclaw/nullclaw/pull/960)** — `fix(cli): handle arrow keys in agent REPL` by **vernonstinebaker** (opened 2026-06-17). This PR introduces a small allocation-free line editor for the interactive `nullclaw agent` REPL, enabling POSIX raw-mode TTY input so that arrow keys, history navigation, cursor movement, backspace/delete, Home/End, and word-left/right sequences work correctly instead of printing control characters. This directly addresses Issue #865.

---

## 4. Community Hot Topics

| # | Item | Comments | Signal |
|---|------|----------|--------|
| 1 | [Issue #915](https://github.com/nullclaw/nullclaw/issues/915) — Scheduler unauthorized | 2 | Users running NullClaw with external Ollama hosts face scheduler auth failures across all channels (Telegram, etc.) |
| 2 | [Issue #865](https://github.com/nullclaw/nullclaw/issues/865) — CLI arrow key control characters | 2 | Core CLI UX broken for interactive REPL sessions |
| 3 | [Issue #861](https://github.com/nullclaw/nullclaw/issues/861) — Web UI on headless VPS | 1 | Documentation gap for deploying Web UI behind tunnels |

**Analysis:** The two most-commented issues reveal distinct user segments — power users running distributed setups (Ollama on GPU servers) hitting auth edge cases, and CLI-first users whose daily workflow is degraded by broken terminal input. The Web UI question from Issue #861, while only having 1 comment, signals a broader onboarding friction: the project's documentation assumes familiarity with tunneling/browser-relay concepts that many VPS users lack.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 **High** | [#915](https://github.com/nullclaw/nullclaw/issues/915) — Scheduler unauthorized | Scheduler completely non-functional when using external Ollama host; affects Telegram and other channels. LLM and general tool calling work, but scheduled tasks fail. | ❌ No |
| 🟡 **Medium** | [#865](https://github.com/nullclaw/nullclaw/issues/865) — CLI arrow key control characters | Interactive REPL prints raw control characters instead of handling navigation, breaking the primary CLI workflow. | ✅ Yes — [PR #960](https://github.com/nullclaw/nullclaw/pull/960) |

**Note:** The scheduler auth bug (#915) is the more severe issue as it silently breaks a core feature (scheduled agent tasks) and has been open for over a month with no linked fix. The CLI bug (#865) has a ready PR that should resolve it once reviewed and merged.

---

## 6. Feature Requests & Roadmap Signals

- **Scheduler authentication for remote/external LLM hosts** — Issue #915 implicitly requests that the scheduler component properly propagate auth credentials or tokens when the LLM backend is on a separate machine. As NullClaw adoption grows among users with dedicated GPU servers, this is likely to become a higher priority.
- **Web UI deployment simplification** — Issue #861 signals demand for a streamlined, documented path to expose the Web UI on headless servers (e.g., via built-in tunnel support or clearer reverse-proxy instructions). This could manifest as a docs improvement or a CLI flag in a future release.
- **CLI REPL enhancements** — PR #960's line editor is a strong signal that the team is investing in the interactive CLI experience. Future work may extend this to syntax highlighting, tab-completion, or multi-line editing.

**Prediction:** The next release (if imminent) will likely include the arrow-key fix from PR #960 and possibly scheduler auth improvements, given the age and severity of #915.

---

## 7. User Feedback Summary

**Pain Points:**
- **Scheduler silently failing** — Users with distributed setups (Ollama on a separate RTX 3090 machine) report that the scheduler is completely broken, with no clear error messaging. This is a trust issue: the rest of the system works, making the scheduler failure confusing.
- **CLI is barely usable interactively** — Arrow key garbage in the REPL makes the CLI agent experience frustrating for anyone relying on terminal-based interaction.
- **Web UI docs are impenetrable** — A user explicitly states they understand only ~30% of the Web UI setup documentation, indicating a significant onboarding barrier for non-expert users.

**Use Cases Observed:**
- Self-hosted NullClaw on Ubuntu with remote Ollama (Qwen3.6:27b on RTX 3090) — a common power-user configuration.
- Headless VPS deployment with Web UI access via tunneling.
- Interactive CLI agent sessions as a primary interface.

**Satisfaction:** Mixed. Core LLM integration and tool calling are reported as working well, but auxiliary features (scheduler, CLI UX, Web UI setup) are causing friction that likely dampens overall user satisfaction and retention.

---

## 8. Backlog Watch

| Issue | Age | Risk | Recommendation |
|-------|-----|------|----------------|
| [#915](https://github.com/nullclaw/nullclaw/issues/915) — Scheduler unauthorized | 34 days (opened 2026-05-15) | 🔴 High — core feature broken for distributed setups | Needs triage and root-cause analysis; consider adding diagnostic logging for scheduler auth flow |
| [#865](https://github.com/nullclaw/nullclaw/issues/865) — CLI arrow keys | 56 days (opened 2026-04-23) | 🟡 Medium — PR #960 exists and should resolve | Prioritize review and merge of PR #960 |
| [#861](https://github.com/nullclaw/nullclaw/issues/861) — Web UI on headless VPS | 57 days (opened 2026-04-22) | 🟡 Medium — docs gap affecting onboarding | Add a step-by-step "Web UI on a VPS" guide or FAQ entry |

**Maintainer Attention Needed:** Issue #915 is the most critical long-open item — a core feature (scheduler) is non-functional for a common deployment pattern, and it has been open for over a month without a linked fix PR. Issue #861, while lower severity, represents a documentation debt that compounds over time as more users hit the same confusion. Both would benefit from a maintainer response, even if only to set expectations on timeline.

---

*Generated by OWL — ZOO Company — 2026-06-18*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-18

---

## 1. Today's Overview

IronClaw remains in a period of intense Reborn-stack development with very high throughput: **48 issues** (26 open, 22 closed) and **50 PRs** (33 open, 17 merged/closed) updated in the last 24 hours. No new releases were published. The dominant theme is the **Reborn Projects feature** — a 5-stack PR series (PRs #5015–#5019) landed today, representing a major new first-class entity in the Reborn stack. A parallel stream of agent-loop no-progress detection PRs (#4993 → #5000 → #5022) has been merging steadily. The project is clearly in active feature-ship mode with heavy contributor overlap from core maintainers.

---

## 2. Releases

**None today.** The most recent release was via PR #3708 (closed 2026-06-17), which bumped `ironclaw` from 0.24.0 → 0.29.1 with breaking changes in `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0). No new release PRs are currently open.

---

## 3. Project Progress

### Major Feature: Reborn Projects (5-Part Stack)
The flagship deliverable today is the **Projects** feature for the Reborn stack, delivered as a stacked PR series by `ilblackdragon`:

| Stack | PR | Status | Description |
|-------|----|--------|-------------|
| 1/5 | [#5015](https://github.com/nearai/ironclaw/pull/5015) | OPEN | `ironclaw_projects` crate — `Project`/`ProjectMember` records, `ProjectRole` (Owner>Editor>Viewer) |
| 2/5 | [#5016](https://github.com/nearai/ironclaw/pull/5016) | OPEN | `ProjectService` trait + facade port in `ironclaw_product_workflow` |
| 3/5 | [#5017](https://github.com/nearai/ironclaw/pull/5017) | OPEN | Composition wiring — `RebornProjectService` adapter, role gating, factory integration |
| 4/5 | [#5018](https://github.com/nearai/ironclaw/pull/5018) | OPEN | WebChat v2 HTTP endpoints — 9 routes for project CRUD + membership |
| 5/5 | [#5019](https://github.com/nearai/ironclaw/pull/5019) | OPEN | Frontend wiring — real API client functions, page rewiring |

### Agent-Loop No-Progress Detection (Merged)
- [#5022](https://github.com/nearai/ironclaw/pull/5022) — **MERGED**: Output-aware no-progress detection (PR3 of 3). Builds on #5000 (content-digest plumbing, also merged) and #4993 (PR1, previously merged). This completes a significant agent-loop reliability improvement.

### Other Merged PRs
- [#5035](https://github.com/nearai/ironclaw/pull/5035) — **MERGED**: Live tool arguments in Activity view (closes [#4852](https://github.com/nearai/ironclaw/issues/4852)). Tool parameters now display while the tool is still running, not only after completion.
- [#5052](https://github.com/nearai/ironclaw/pull/5052) — **MERGED**: Live Slack OAuth path structural DM-parity fix (closes [#5009](https://github.com/nearai/ironclaw/issues/5009)).

---

## 4. Community Hot Topics

### 🔥 WeChat Channel Integration
- **[#1584](https://github.com/nearai/ironclaw/issues/1584)** (3 comments, 👍3) — A WeChat plugin for OpenClaw now exists on npm (`@tencent-weixin/openclaw-weixin`). Community member `think-in-universe` flagged that IronClaw needs its own WeChat plugin. This was closed but spawned **[#3582](https://github.com/nearai/ironclaw/issues/3582)** (OPEN) to port WeChat to the Reborn ProductAdapter. **Underlying need**: IronClaw's channel ecosystem must keep pace with OpenClaw to remain competitive in the Chinese market.

### 🔥 Reborn Production Readiness
- **[#3026](https://github.com/nearai/ironclaw/issues/3026)** (3 comments) — Epic-level issue on production wiring and cutover readiness for Reborn. Covers how the production graph is built, validated, and prevented from serving traffic when services are missing. **Underlying need**: Reborn is approaching production maturity but lacks a clear cutover story.

### 🔥 Tool Approval UX Inconsistencies
- **[#4764](https://github.com/nearai/ironclaw/issues/4764)** (2 comments) — Denying shell approval leaves tool invocation pending with no user feedback. Closed today, but related follow-up **[#5028](https://github.com/nearai/ironclaw/issues/5028)** (OPEN) requests stable, explicit IDs for denied activities. **Underlying need**: The approval-deny flow has subtle identity and ordering bugs that degrade trust in the safety system.

---

## 5. Bugs & Stability

### 🔴 High Severity

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#5058](https://github.com/nearai/ironclaw/issues/5058) | AWS Bedrock unreachable from `ironclaw-reborn` binary; Converse tool-schema rejects top-level combinators | [#5059](https://github.com/nearai/ironclaw/pull/5059) (OPEN) |
| [#5044](https://github.com/nearai/ironclaw/issues/5044) | `NEARAI_MODEL=auto` rejected with HTTP 400 by cloud-api.near.ai — desktop app ships this default | [#5043](https://github.com/nearai/ironclaw/pull/5043) + [#5045](https://github.com/nearai/ironclaw/pull/5045) (OPEN) |
| [#4824](https://github.com/nearai/ironclaw/issues/4824) | `cargo-deny` CI failing repo-wide due to new RUSTSEC advisories against postgres crates (DoS vectors) | None yet |

### 🟡 Medium Severity

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#3729](https://github.com/nearai/ironclaw/issues/3729) | Denied `tool_install` calls shown as successful after page refresh (state corruption) | None |
| [#4986](https://github.com/nearai/ironclaw/issues/4986) | Recurring automation permanently blocked waiting for tool approval | None |
| [#4961](https://github.com/nearai/ironclaw/issues/4961) | "Working" indicator persists after agent finishes responding | None |
| [#5007](https://github.com/nearai/ironclaw/issues/5007) | Skills validation error does not clear after required fields are filled | None |

### 🟢 Low Severity (UI Polish)

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#4723](https://github.com/nearai/ironclaw/issues/4723) | Composer hover state only highlights top border | None |
| [#4974](https://github.com/nearai/ironclaw/issues/4974) | Duplicate "..." action buttons on tool rows | None |
| [#5004](https://github.com/nearai/ironclaw/issues/5004) | Automations failure summary card not actionable (no drill-down) | None |
| [#4988](https://github.com/nearai/ironclaw/issues/4988) | Recent runs visualization (colored dots) difficult to understand | None |
| [#4980](https://github.com/nearai/ironclaw/issues/4980) | Automations empty state lacks creation guidance | None |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Likelihood of Next Version | Notes |
|--------|---------------------------|-------|
| **Reborn Projects** | ✅ Very High | 5-stack PR series already in review; this is clearly the next major feature ship |
| **Read-only agent filesystem viewer** | ✅ High | PR [#5057](https://github.com/nearai/ironclaw/pull/5057) (XL, core contributor) — standalone WebChat v2 feature |
| **WeChat channel for Reborn** | 🟡 Medium | Issue [#3582](https://github.com/nearai/ironclaw/issues/3582) is open with a porting guide; depends on community/core bandwidth |
| **Scalable Agent Task Service** | 🟡 Medium | Issue [#5036](https://github.com/nearai/ironclaw/issues/5036) (parent: [#4878](https://github.com/nearai/ironclaw/issues/4878)) — ambitious infrastructure goal for agent-driven engineering workflows |
| **Slack connect card i18n** | 🟢 Low | Issue [#5031](https://github.com/nearai/ironclaw/issues/5031) — English-only Slack connect card; minor UX gap |

---

## 7. User Feedback Summary

**Pain Points:**
- **Model configuration fragility**: The `NEARAI_MODEL=auto` default shipped by the desktop app is rejected by cloud-api.near.ai (Issue [#5044](https://github.com/nearai/ironclaw/issues/5044)). This is a first-run experience blocker — users get HTTP 400 with no clear guidance. Two fix PRs are already open.
- **Approval-deny feedback gap**: Multiple users (`sunglow666` filed 6+ issues) report that denying tool approvals leaves the UI in a confusing state — pending indicators, missing feedback, inconsistent activity ordering. This erodes trust in the safety system.
- **Automations UX is opaque**: Users cannot identify which automation failed or why (Issue [#5004](https://github.com/nearai/ironclaw/issues/5004)). The empty state provides no onboarding guidance (Issue [#4980](https://github.com/nearai/ironclaw/issues/4980)). The recent-runs dot visualization is cryptic (Issue [#4988](https://github.com/nearai/ironclaw/issues/4988)).
- **Onboarding blocks Extensions/Automations**: Fresh installs redirect away from Extensions and Automations until a provider is configured (Issue [#4793](https://github.com/nearai/ironclaw/issues/4973)), creating a chicken-and-egg problem.

**Satisfaction Signals:**
- Active community engagement with WeChat integration (👍3 on #1584) shows demand for broader channel support.
- The engineering productivity meta-issue [#4878](https://github.com/nearai/ironclaw/issues/4878) signals that sophisticated users want to use IronClaw to build IronClaw — a strong product-market fit signal.

---

## 8. Backlog Watch

These important items have been open for extended periods without resolution:

| Issue | Age | Why It Matters |
|-------|-----|----------------|
| [#3729](https://github.com/nearai/ironclaw/issues/3729) — `tool_install` denied calls shown as successful after refresh | ~33 days | **Data integrity bug**: UI state contradicts actual tool state. Could lead to false confidence in installed tools. |
| [#4824](https://github.com/nearai/ironclaw/issues/4824) — `cargo-deny` CI failing on RUSTSEC advisories | ~6 days (but blocking all PRs) | **CI/CD blocker**: Every open PR and main-branch build is failing. This needs immediate attention to unblock the 33 open PRs. |
| [#4191](https://github.com/nearai/ironclaw/issues/4191) — WeCom Channel Validation Findings | ~21 days | Staging validation for v0.29.0 WeCom channel found several important issues still open. |
| [#4115](https://github.com/nearai/ironclaw/issues/4115) — Channel Removal Flow UI Issues | ~22 days | Remove button visibility bug in WeChat channel — looks disabled until hover. |
| [#3582](https://github.com/nearai/ironclaw/issues/3582) — Port WeChat to Reborn ProductAdapter | ~36 days | Important for channel parity; has a porting guide but no assignee. |

**⚠️ Action needed**: Issue [#4824](https://github.com/nearai/ironclaw/issues/4824) (cargo-deny CI failure) is actively blocking all PR merges and should be triaged immediately. The RUSTSEC advisories affect postgres crates with known DoS vectors, so this is both a CI and a security concern.

---

*Data source: github.com/nearai/ironclaw | Digest generated: 2026-06-18*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026-06-18**

---

### 1. **Today's Overview**  
LobsterAI shows strong development momentum with 13 pull requests merged or closed in the last 24 hours and one new release (v2026.6.15). No new issues were opened, indicating a focus on stabilizing recent features rather than surfacing new bugs. The activity is heavily concentrated in the **Cowork** (collaborative AI workspace) and **renderer** (UI) layers, with multiple fixes targeting voice input, session continuity, and UI responsiveness. This suggests the team is refining core user-facing workflows ahead of broader adoption.

---

### 2. **Releases**  
**New Release: LobsterAI 2026.6.15** ([Release Notes](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.15))  
Key additions:
- **Computer Use**: Enables agent-driven desktop interaction (e.g., clicking, typing), a major step toward autonomous task execution.
- **Realtime ASR Voice Input**: Adds low-latency speech-to-text in Cowork mode, improving hands-free usability.
- **Post-Compaction Context Continuity**: Enhances context preservation after chat history compression, reducing agent disorientation in long sessions.

No breaking changes or migration steps were noted. These updates align with LobsterAI’s trajectory toward multimodal, persistent AI assistants.

---

### 3. **Project Progress**  
All 13 closed PRs were merged, advancing stability and UX:
- **Cowork UX Polish**: Fixed scroll-to-bottom alignment (#2174), rail navigation jank in long sessions (#2171), and user message rendering (#2173).
- **Voice & Streaming Reliability**: Resolved voice input cancel guards post-merge (#2162), preserved model metadata for stopped streams (#2154), and prevented premature chat sends on aborted turns (#2147).
- **Infrastructure Hardening**: Raised OpenClaw gateway heap limits to mitigate OOM crashes (#2149) and improved model selection logic for same-name packages (#2153).
- **Auth & Sharing**: Updated portal fallback URLs (#2144) and restored HTML shares closed due to quota limits (#2172).

These reflect a maturation phase—shifting from feature delivery to robustness and edge-case handling.

---

### 4. **Community Hot Topics**  
No active issues or high-engagement PRs were observed today. The most commented PR (#1463, fixing long modal titles) was closed after 2+ months, suggesting backlog cleanup. Current work is driven internally rather than community feedback, with contributors like `@liuzhq1986` dominating recent merges.

---

### 5. **Bugs & Stability**  
All reported bugs were resolved via merged PRs:
- **High Severity**: OOM crashes in OpenClaw gateway under load → fixed by explicit V8 heap limits (#2149).
- **Medium Severity**: Voice input state corruption after merge conflicts → resolved with guard preservation (#2162).
- **Low Severity**: UI glitches (scroll misalignment, modal overflow) → addressed in #2174 and #1463.

No open crash reports or regressions remain. Stability appears significantly improved post-release.

---

### 6. **Feature Requests & Roadmap Signals**  
While no explicit feature requests surfaced today, the **Computer Use** addition in v2026.6.15 signals investment in agent autonomy. Combined with realtime ASR and context continuity work, the roadmap likely prioritizes:
- **Persistent, multimodal agents** that maintain state across sessions.
- **Enterprise-grade reliability** (heap management, model routing).
- **Seamless human-AI collaboration** via voice and shared artifacts.

Future versions may expand computer use capabilities or integrate deeper with external tools.

---

### 7. **User Feedback Summary**  
No direct user feedback was recorded today. However, fixes like restoring quota-limited shares (#2172) and improving post-compaction continuity (#2145) address known pain points around **session longevity** and **resource constraints**. The focus on renderer diagnostics (#2154, #2171) also suggests efforts to reduce opaque failures that frustrate power users.

---

### 8. **Backlog Watch**  
- **PR #1463** (closed): Took 74 days to merge despite being a simple UI fix—highlights potential review bottlenecks for non-critical items.
- **No stale issues remain open**, indicating effective triage. However, the absence of community issues may also reflect limited external engagement or robust internal testing.

Maintainers should monitor whether the rapid pace of Cowork changes introduces integration debt, especially around voice and streaming state machines.

---

**Project Health**: 🟢 **Strong**  
High merge velocity, zero open issues, and targeted stability fixes indicate a healthy, actively maintained project entering a refinement phase after major feature rollouts.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-18

---

## 1. Today's Overview

Moltis saw moderate activity over the past 24 hours, with **4 issues** and **1 pull request** updated. Of the 4 issues, 1 was closed and 3 remain open, indicating a community member (khimaros) is an active contributor surfacing bugs and enhancement ideas. No new PRs merged or releases shipped today; the single open PR (#1130) is a straightforward configuration addition. Project velocity appears steady but not rapid — the backlog of open issues (3) with minimal comment engagement suggests the maintainers may need more bandwidth for triage and response.

---

## 2. Releases

**None.** No new releases were published in the last 24 hours.

---

## 3. Project Progress

**No PRs merged today.** The sole open PR:

- **#1130 — `feat: make webui rpc timeout configurable`** by khimaros
  — Addresses issue #1127 by making the WebUI RPC timeout a configurable value. It has not yet been reviewed or merged and currently shows no comments, so maintainer attention is still pending.
  — 🔗 https://github.com/moltis-org/moltis/pull/1130

---

## 4. Community Hot Topics

| # | Item | Type | Comments | 👍 | Link |
|---|------|------|----------|----|------|
| 1 | #1126 — Allow configuring TTS output format | Enhancement | 3 | 0 | [Issue #1126](https://github.com/moltis-org/moltis/issues/1126) |
| 2 | #1128 — Transcription errors with self-hosted whisper.cpp | Bug | 1 | 0 | [Issue #1128](https://github.com/moltis-org/moltis/issues/1128) |
| 3 | #1129 — Lack of echo cancellation causes agent to retrigger in live mode | Bug | 0 | 0 | [Issue #1129](https://github.com/moltis-org/moltis/issues/1129) |
| 4 | #1131 — Add copy + export as Markdown | Enhancement | 0 | 0 | [Issue #1131](https://github.com/moltis-org/moltis/issues/1131) |

**Analysis:** The most active discussion is **#1126 (TTS format configuration)**, with 3 comments — users want finer control over the audio/textual output from Moltis's TTS pipeline. **#1128 (whisper.cpp transcription errors)** also emerged quickly and has already drawn a response but was ultimately closed, suggesting it may have been resolved or deprioritized. Overall, the community signals two clear needs: (1) **greater configurability of I/O formats** (TTS, Markdown export), and (2) **improved reliability of voice/audio pipelines** — consistent with Moltis's positioning as a voice-enabled, self-hosted AI assistant.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Description | Fix PR? |
|----------|-------|--------|-------------|--------|
| 🔴 High | [#1129 — Echo cancellation missing in live mode](https://github.com/moltis-org/moltis/issues/1129) | OPEN | Agent retriggers itself due to its own output being picked up by the microphone — a critical UX blocker for live/voice mode users. | No |
| 🟡 Medium | [#1128 — Transcription errors with self-hosted whisper.cpp](https://github.com/moltis-org/moltis/issues/1128) | CLOSED | Incorrect transcriptions when using a local whisper.cpp backend. Issue was closed within hours but without visible comments or a linked fix PR — cause and resolution are unclear. | No visible PR |

**Takeaway:** Issue #1129 represents the most pressing stability risk. It directly impacts the core live/voice experience and currently has no fix or maintainer response. Recommend prioritization.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Analyst Signal |
|-------|---------|----------------|
| [#1126](https://github.com/moltis-org/moltis/issues/1126) | Configurable TTS output format | **Likely candidate for next release** — has early community engagement (3 comments), is scoped clearly, and aligns with user demand for I/O control. |
| [#1131](https://github.com/moltis-org/moltis/issues/1131) | Copy & export chat as Markdown | **Strong user need** but unvalidated (0 comments). If community develops a habit of sharing sessions or using them in workflows, this becomes high-value. |
| PR [#1130](https://github.com/moltis-org/moltis/pull/1130) | Configurable WebUI RPC timeout | **High probability of merging soon** — small, self-contained config change with a clear issue (#1127) as justification. Low risk. |

**Prediction:** The next release will likely be a patch version incorporating PR #1130 (webui timeout) and potentially #1126 (TTS format) if the maintainers evaluate its scope as manageable.

---

## 7. User Feedback Summary

**Key Pain Points:**

1. **Voice pipeline brittleness:** Two of the four issues (#1128, #1129) relate to the audio/voice stack — transcription accuracy and live-mode echo cancellation. Users running self-hosted backends (whisper.cpp) appear particularly affected. This suggests that the voice-centric experience, which is core to Moltis's identity, still needs hardening.

2. **Output format rigidity:** Users want Markdown export (#1131) and TTS format configuration (#1126), indicating that Moltis is increasingly being used in multi-tool workflows where chat output must integrate with external note-taking or content pipelines.

3. **Configuration-driven fixes:** PR #1130 and its parent issue #1127 reflect a recurring pattern: users want toggles for internal timeouts and limits rather than waiting for code-level improvements. This is healthy — it signals a mature user base that understands trade-offs.

**Satisfaction Signals:** The fact that #1128 (whisper bug) was created and closed on the same day suggests either quick maintainer response or a user-side resolution. Positive, but ambiguous.

---

## 8. Backlog Watch

| Item | Age | Risk | Note |
|------|-----|------|------|
| [#1129 — Echo cancellation in live mode](https://github.com/moltis-org/moltis/issues/1129) | < 1 day | 🔴 **Monitor closely** | Zero comments/replies from maintainers. Affects the flagship live mode. Needs acknowledgement or a reproduction path. |
| [#1126 — TTS format configuration](https://github.com/moltis-org/moltis/issues/1126) | 2 days | 🟡 Moderate | Already has 3 comments from the community. If a maintainer doesn't respond soon, the discussion may lose momentum. |
| [#1127 — (parent of PR #1130)](https://github.com/moltis-org/moltis/issues/1127) | — | 🟢 Covered | Fix PR #1130 is open and just needs review/merge. |

**High-Priority Recommendation:** Maintainers should acknowledge **#1129** (echo cancellation retrigger) as soon as possible. Even a "confirmed — investigating" comment would reduce user frustration and signal that the voice mode is a priority area.

---

*This digest is generated by **OWL**, based on publicly available GitHub data as of 2026-06-18. All links point to their respective issues/PRs on [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-18

---

## 1. Today's Overview

CoPaw is in a highly active development phase with **45 issues** and **50 PRs** updated in the last 24 hours, signaling a large and engaged contributor base. Two releases shipped today — **v1.1.12** (stable) and **v1.1.12-beta.2** — alongside a major milestone: the version was bumped to **2.0.0a1** for the AgentScope 2.0 backend migration. The project shows strong momentum on bug fixes (34 PRs merged/closed) but also carries a heavy open issue burden (26 active), with several critical stability bugs around context compaction, crashes on macOS, and channel routing errors demanding urgent attention.

---

## 2. Releases

### v1.1.12 (Stable) — [PR #5280](https://github.com/agentscope-ai/QwenPaw/pull/5280)

**Console / UI:**
- **Models Page Overhaul**: Provider aggregation, unified card UI, and layout redesign ([#5203](https://github.com/agentscope-ai/QwenPaw/pull/5203))
- **Simple Mode**: Flat navigation with session list sorted by update time ([#5222](https://github.com/agentscope-ai/QwenPaw/pull/5222))
- Session filter by title ([#5178](https://github.com/agentscope-ai/QwenPaw/pull/5178))

**Bug Fixes:**
- Plugin dependency installation crash loops on Tauri desktop (frozen PyInstaller sidecar routing) ([#5260](https://github.com/agentscope-ai/QwenPaw/pull/5260))
- XiaoYi channel refactored to dual WebSocket connections, aligning with official A2A protocol ([#5274](https://github.com/agentscope-ai/QwenPaw/pull/5274))
- Backup failures on Windows from unreadable browser cache files ([#5041](https://github.com/agentscope-ai/QwenPaw/pull/5041))
- Session file path duplication when `user_id` equals `session_id` ([#5026](https://github.com/agentscope-ai/QwenPaw/pull/5026))
- ChromaDB Rust binding SIGSEGV crash on macOS — async subprocess probe added ([#5271](https://github.com/agentscope-ai/QwenPaw/pull/5271))
- Desktop port configuration via environment variable ([#5272](https://github.com/agentscope-ai/QwenPaw/pull/5272))

### v1.1.12-beta.2
- Performance: Removed unnecessary deep copy operations in agent config ([#5240](https://github.com/agentscope-ai/QwenPaw/pull/5240))

### ⚠️ Breaking Change Signal: v2.0.0a1 — [PR #5281](https://github.com/agentscope-ai/QwenPaw/pull/5281)
- Backend migration from **AgentScope 1.x** (`agentscope==1.0.20` + `agentscope-runtime==1.1.6`) to **AgentScope 2.0** has entered alpha. This will involve new architecture, APIs, and runtime model. Users tracking the `main` branch should expect instability. See tracking issue [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727).

---

## 3. Project Progress

### Key Merged/Closed PRs (Today)

| PR | Description |
|---|---|
| [#5280](https://github.com/agentscope-ai/QwenPaw/pull/5280) | v1.1.12 stable release |
| [#5281](https://github.com/agentscope-ai/QwenPaw/pull/5281) | v2.0.0a1 alpha bump (AgentScope 2.0 migration) |
| [#5274](https://github.com/agentscope-ai/QwenPaw/pull/5274) | XiaoYi channel dual-WebSocket refactor — fixes long-standing channel usability |
| [#5271](https://github.com/agentscope-ai/QwenPaw/pull/5271) | ChromaDB async runtime probe — prevents macOS SIGSEGV crashes |
| [#5260](https://github.com/agentscope-ai/QwenPaw/pull/5260) | Tauri desktop plugin dependency install fix |
| [#5272](https://github.com/agentscope-ai/QwenPaw/pull/5272) | Desktop port configuration via env var |
| [#5041](https://github.com/agentscope-ai/QwenPaw/pull/5041) | Backup skip unreadable files instead of total failure |
| [#5026](https://github.com/agentscope-ai/QwenPaw/pull/5026) | Session filename deduplication fix |
| [#4995](https://github.com/agentscope-ai/QwenPaw/pull/4995) | Preserve renderer tool output when `show_tool_details` is disabled |
| [#5176](https://github.com/agentscope-ai/QwenPaw/pull/5176) | Console approval command text wrapping fix |
| [#3839](https://github.com/agentscope-ai/QwenPaw/pull/3839) | XiaoYi A2A protocol implementation and tests |

### Notable Open PRs Under Review

| PR | Description |
|---|---|
| [#5287](https://github.com/agentscope-ai/QwenPaw/pull/5287) | Fix compaction crash when summary exceeds schema `maxLength` |
| [#5276](https://github.com/agentscope-ai/QwenPaw/pull/5276) | `qwenpaw migrate openclaw` CLI tool for OpenClaw→CoPaw config migration |
| [#5242](https://github.com/agentscope-ai/QwenPaw/pull/5242) | Timeout protection for `agent.reply()` in `_compact_context` |
| [#5241](https://github.com/agentscope-ai/QwenPaw/pull/5241) | Increase cron `misfire_grace_seconds` from 60→3600 |
| [#5210](https://github.com/agentscope-ai/QwenPaw/pull/5210) | `qwenpaw cron update` CLI command for modifying existing cron jobs |
| [#5263](https://github.com/agentscope-ai/QwenPaw/pull/5263) | Agent avatar upload and display |
| [#5275](https://github.com/agentscope-ai/QwenPaw/pull/5275) | Prevent cache pollution in `load_agent_config()` |

---

## 4. Community Hot Topics

### Most Discussed Issues

1. **[#1911](https://github.com/agentscope-ai/QwenPaw/issues/1911)** — *XiaoYi (小艺) channel replies not reaching mobile client* (22 comments, closed)
   - **Underlying need**: Users integrating with Huawei's XiaoYi platform need reliable bidirectional messaging. The issue was closed after the dual-WebSocket refactor in [#5274](https://github.com/agentscope-ai/QwenPaw/pull/5274) and [#3839](https://github.com/agentscope-ai/QwenPaw/pull/3839), but the long comment thread suggests this was a persistent pain point for months.

2. **[#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218)** — *Sub-agent context compaction freezes QwenPaw process* (16 comments, **OPEN**)
   - **Underlying need**: Context compaction is a critical reliability feature. When it fails, the entire process becomes unresponsive with no recovery path. This is arguably the most impactful open bug. PR [#5242](https://github.com/agentscope-ai/QwenPaw/pull/5242) is a direct fix attempt.

3. **[#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)** — *Agent-created scheduled tasks fail to trigger* (12 comments, **OPEN**)
   - **Underlying need**: Users rely on agents to autonomously create cron jobs. Silent failures with no error feedback erode trust in agent autonomy. PR [#5241](https://github.com/agentscope-ai/QwenPaw/pull/5241) addresses the misfire grace period.

4. **[#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)** — *Migrate backend to AgentScope 2.0* (11 comments, **OPEN**, 👍2)
   - **Underlying need**: The community recognizes the strategic importance of this migration. The 👍 reactions and sustained discussion signal strong interest. The v2.0.0a1 bump today is a concrete milestone.

5. **[#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140)** — *Attachment download fails for docx/pdf (404 error)* (7 comments, **OPEN**)
   - **Underlying need**: File handling is a core workflow. Users generating documents via agents expect seamless download. This is a regression from earlier versions.

---

## 5. Bugs & Stability

### 🔴 Critical

| Issue | Description | Fix Status |
|---|---|---|
| [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | Context compaction freezes entire QwenPaw process (sub-agent trigger) | PR [#5242](https://github.com/agentscope-ai/QwenPaw/pull/5242) open |
| [#5243](https://github.com/agentscope-ai/QwenPaw/issues/5243) | macOS SIGSEGV crash loop from ChromaDB Rust bindings (48 restarts in 2 days) | ✅ Fixed in [#5271](https://github.com/agentscope-ai/QwenPaw/pull/5271), shipped in v1.1.12 |
| [#5209](https://github.com/agentscope-ai/QwenPaw/issues/5209) | macOS Tauri desktop crash loop (same ChromaDB root cause) | ✅ Fixed via [#5271](https://github.com/agentscope-ai/QwenPaw/pull/5271) |
| [#5181](https://github.com/agentscope-ai/QwenPaw/issues/5181) | Plugin pip install causes infinite cmd.exe popup loop on Windows | ✅ Fixed in [#5260](https://github.com/agentscope-ai/QwenPaw/pull/5260), shipped in v1.1.12 |

### 🟠 High

| Issue | Description | Fix Status |
|---|---|---|
| [#5266](https://github.com/agentscope-ai/QwenPaw/issues/5266) | MCP/ACP config saves return 201 but don't persist to `agent.json` | ✅ Closed today (root cause addressed) |
| [#5264](https://github.com/agentscope-ai/QwenPaw/issues/5264) | Feishu group chat replies routed to private chat instead of group | **OPEN** — no fix PR yet |
| [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) | Context compaction drops all context when persona file exceeds token threshold | **OPEN** — related to [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) |
| [#5208](https://github.com/agentscope-ai/QwenPaw/issues/5208) | Assistant message count mismatch with `reasoning` vs `thinking` block types | **OPEN** — affects LongCat-2.0-Preview users |
| [#5284](https://github.com/agentscope-ai/QwenPaw/issues/5284) | ChromaDB `_probe` collection name triggers `InvalidArgumentError` (underscore prefix) on v1.1.12 | **OPEN** — regression in latest release |

### 🟡 Medium

| Issue | Description | Fix Status |
|---|---|---|
| [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) | docx/pdf attachment download returns 404 | **OPEN** |
| [#5259](https://github.com/agentscope-ai/QwenPaw/issues/5259) | Windows vector index not persisted across restarts | **OPEN** |
| [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) | Disabled built-in skills re-enabled after every upgrade | **OPEN** — previously reported as [#4807](https://github.com/agentscope-ai/QwenPaw/issues/4807), not yet resolved |
| [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) | Agent-created cron jobs silently fail to trigger | PR [#5241](https://github.com/agentscope-ai/QwenPaw/pull/5241) open |
| [#5237](https://github.com/agentscope-ai/QwenPaw/issues/5237) | DingTalk channel non-functional with uv installation on Windows | **OPEN** |

---

## 6. Feature Requests & Roadmap Signals

| Request | Signal Strength | Likelihood in Next Version |
|---|---|---|
| **OpenClaw config migration tool** — [#5276](https://github.com/agentscope-ai/QwenPaw/pull/5276) | 🔥 Active PR, addresses ecosystem migration demand | **High** — PR is open and functional |
| **`cron update` CLI command** — [#5210](https://github.com/agentscope-ai/QwenPaw/pull/5210) | 🔥 Active PR, closes [#4939](https://github.com/agentscope-ai/QwenPaw/issues/4939) | **High** — straightforward addition |
| **Agent avatar upload/display** — [#5263](https://github.com/agentscope-ai/QwenPaw/pull/5263) | 🔥 Active PR | **Medium-High** — UI enhancement, low risk |
| **UI Font Scaling & File Path Hyperlinks** — [#4077](https://github.com/agentscope-ai/QwenPaw/issues/4077) | 📋 Open issue, 2 comments | **Low** — no PR, no maintainer response |
| **AgentScope tracing integration** — [#4057](https://github.com/agentscope-ai/QwenPaw/issues/4057) | ✅ Closed today | Shipped or addressed |
| **AgentScope 2.0 backend migration** — [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) | 🔥 Alpha released (v2.0.0a1) | **In progress** — major v2 milestone |

---

## 7. User Feedback Summary

**Pain Points:**
- **Context compaction is the #1 stability concern**: Multiple users report complete process freezes ([#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218), [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171), [#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162)) with no graceful degradation. This directly impacts long-running agent sessions.
- **File handling regressions frustrate power users**: Attachment downloads broken for binary formats ([#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140)), `send_file_to_user` not providing download links ([#5258](https://github.com/agentscope-ai/QwenPaw/issues/5258)). Users who depend on agents to generate documents are blocked.
- **Upgrade fatigue**: Users are tired of re-disabling built-in skills after every update ([#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262)) and dealing with packaging issues ([#5165](https://github.com/agentscope-ai/QwenPaw/issues/5165)).
- **Channel reliability**: Feishu group routing ([#5264](https://github.com/agentscope-ai/QwenPaw/issues/5264)), DingTalk uv installs ([#5237](https://github.com/agentscope-ai/QwenPaw/issues/5237)), and XiaoYi ([#1911](https://github.com/agentscope-ai/QwenPaw/issues/1911)) show that multi-channel support remains fragile across different deployment environments.

**Satisfaction Signals:**
- The XiaoYi channel fix (dual WebSocket, A2A protocol alignment) shipped in v1.1.12 after months of community reports — this will significantly improve satisfaction for Huawei ecosystem users.
- The OpenClaw migration tool ([#5276](https://github.com/agentscope-ai/QwenPaw/pull/5276)) signals that the project is actively lowering barriers for users migrating from competing platforms.
- Rapid response to the ChromaDB SIGSEGV crash (issue reported, fix merged, and shipped within ~24 hours) demonstrates strong maintainer responsiveness on critical issues.

---

## 8. Backlog Watch

These important items have been open for extended periods without resolution or maintainer engagement:

| Issue | Age | Risk |
|---|---|---|
| **[#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262)** — Disabled skills re-enabled on upgrade | Recurring (originally [#4807](https://github.com/agentscope-ai/QwenPaw/issues/4807)) | **User trust erosion** — persistent across multiple versions |
| **[#5259](https://github.com/agentscope-ai/QwenPaw/issues/5259)** — Windows vector index not persisted | 1 day (but fundamental) | **Memory feature effectively broken on Windows** |
| **[#5264](https://github.com/agentscope-ai/QwenPaw/issues/5264)** — Feishu group→private chat routing error | 1 day (but no fix PR) | **Active channel bug affecting Feishu users** |
| **[#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)** — Cron jobs silently fail to trigger | 8 days | **Undermines agent autonomy** — PR [#5241](https://github.com/agentscope-ai/QwenPaw/pull/5241) exists but unmerged |
| **[#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140)** — docx/pdf download 404 | 6 days | **Regression** — worked in earlier versions |
| **[#5237](https://github.com/agentscope-ai/QwenPaw/issues/5237)** — DingTalk + uv install broken | 2 days | **Installation method fragmentation** — works with installer but not uv |
| **[#4077](https://github.com/agentscope-agentscope-ai/QwenPaw/issues/4077)** — UI Font Scaling & File Links | 43+ days | **Accessibility concern** — no maintainer response |

---

*CoPaw is shipping fast and fixing critical bugs rapidly, but the growing backlog of medium-severity issues — particularly around file handling, channel reliability, and upgrade experience — risks accumulating technical debt that could slow the v2.0 migration. The context compaction freeze ([#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218)) remains the most urgent open stability issue.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest — 2026-06-18**

---

### 1. Today's Overview

ZeroClaw remains in a high-activity development phase with **50 issues** and **50 pull requests** updated in the last 24 hours, though no new releases were published. The project is deep into the **v0.8.x stabilization cycle**, with multiple milestone trackers (v0.8.1–v0.8.3, v0.9.0) actively coordinating work across channels, runtime, security, and plugin infrastructure. A notable volume of **stacked/cascading PRs** (e.g., the 8-part #7175/#7468 series) signals significant refactoring underway. One bug fix PR was closed today (#7563), and 10 PRs were merged or closed overall. The absence of new releases despite heavy PR activity suggests the team is batching changes for an upcoming v0.8.1 or v0.8.2 release.

---

### 2. Releases

**No new releases today.** The project appears to be accumulating changes across multiple stacked PR series ahead of a coordinated release, likely v0.8.1 or v0.8.2 based on active milestone trackers ([#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970), [#7852](https://github.com/zeroclaw-labs/zeroclaw/issues/7852)).

---

### 3. Project Progress

**Merged/Closed PRs today:**

| PR | Description |
|---|---|
| [#7563](https://github.com/zeroclaw-labs/zeroclaw/issues/7563) (Issue, closed) | Canvas-store regression in WS chat/ACP sessions — root cause identified and fix merged via [#7678](https://github.com/zeroclaw-labs/zeroclaw/pull/7678) |
| [#7678](https://github.com/zeroclaw-labs/zeroclaw/pull/7678) | Fixed `CanvasStore` threading into WS chat and ACP agent sessions so `/canvas` renders correctly after chat tool use |
| [#7684](https://github.com/zeroclaw-labs/zeroclaw/pull/7684) | ACP: surface history-pruner and turn-cancel as visible system events instead of raw bot output |
| [#7840](https://github.com/zeroclaw-labs/zeroclaw/pull/7840) | Config: `rename_with_cascade` for aliased entries (part 6 of 8 stacked series) |

**Key features advancing:**
- **A2A agent discovery surface** ([#7763](https://github.com/zeroclaw-labs/zeroclaw/pull/7763)) — gateway-level agent catalog, targeted at v0.8.2
- **Discord channel enhancements** — typed slash-command options ([#7844](https://github.com/zeroclaw-labs/zeroclaw/pull/7844)) and rich embed rendering ([#7833](https://github.com/zeroclaw-labs/zeroclaw/pull/7833))
- **Security hardening** — SSRF protection for `http_request` tool ([#7902](https://github.com/zeroclaw-labs/zeroclaw/pull/7902)), sandbox policy config schema ([#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821))
- **Windows self-update repair** ([#7853](https://github.com/zeroclaw-labs/zeroclaw/pull/7853)) — fundamentally broken swap logic fixed

---

### 4. Community Hot Topics

**Most-discussed issues (by comment count):**

1. **[#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)** — *RFC: Computer-use support for desktop screen interaction* (6 comments)
   - **Underlying need:** Users want ZeroClaw agents to capture screenshots and send mouse/keyboard events, matching capabilities in OpenAI Codex and similar tools. This is a high-risk, high-value feature for desktop automation workflows.

2. **[#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079)** — *Restore GitHub as a native channel* (6 comments)
   - **Underlying need:** Users want first-class GitHub integration (issues, PRs, reviews) without custom glue code for webhooks, auth, and event routing. This has been open since February 2026, indicating persistent demand.

3. **[#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067)** — *Make channel reply-intent precheck configurable* (5 comments)
   - **Underlying need:** The `classify_channel_reply_intent` call blocks the full agent turn on the main model. Users want a lighter model, timeout, and timing visibility to reduce latency and cost.

4. **[#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)** — *RFC: Route scheduled tasks through the orchestrator message pipeline* (4 comments)
   - **Underlying need:** Cron jobs bypass the orchestrator, causing a cluster of related bugs. Users want scheduled tasks to benefit from the same safety, context, and history management as regular messages.

5. **[#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128)** — *Cron and heartbeat delivery still send NO_REPLY sentinel text* (4 comments)
   - **Underlying need:** The literal string "NO_REPLY" is being sent to channels (e.g., Telegram) when agents intend silence, creating noise in conversations.

---

### 5. Bugs & Stability

**Active bugs ranked by severity:**

| Severity | Issue | Description | Fix PR |
|---|---|---|---|
| **S1** | [#7563](https://github.com/zeroclaw-labs/zeroclaw/issues/7563) | Canvas-store regression broke `/canvas` after WS chat sessions | ✅ Fixed by [#7678](https://github.com/zeroclaw-labs/zeroclaw/pull/7678) |
| **S2** | [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) | Agent lacks context of the cron job it's running (blocked) | 🔗 Root cause addressed by [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) RFC |
| **S2** | [#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) | Cron/heartbeat sends literal "NO_REPLY" to channels | ❌ No fix PR yet |
| **S2** | [#7737](https://github.com/zeroclaw-labs/zeroclaw/issues/7737) | Approval attribution race condition with concurrent approvals | ❌ No fix PR yet |
| **S2** | [#6698](https://github.com/zeroclaw-labs/zeroclaw/issues/6698) | Fluent locale files lag English app-strings (in-progress) | ❌ No fix PR yet |
| **S2** | [#7819](https://github.com/zeroclaw-labs/zeroclaw/pull/7819) | Missing-skill suggestions based on wrong tool set | 🔧 Fix PR open |

**Notable stability concerns:**
- **Windows self-update** was fundamentally broken ([#7853](https://github.com/zeroclaw-labs/zeroclaw/pull/7853)) — fix PR is open but unmerged
- **SSRF vulnerability** in `http_request` tool ([#7902](https://github.com/zeroclaw-labs/zeroclaw/pull/7902)) — fix PR open, high risk
- **Shell approval loops** can repeat indefinitely ([#7901](https://github.com/zeroclaw-labs/zeroclaw/pull/7901)) — fix PR open

---

### 6. Feature Requests & Roadmap Signals

**Likely candidates for v0.8.1 (based on active tracker [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)):**
- Channel reply-intent precheck configurability ([#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067))
- Cron `delivery.mode = "announce"` — final-message-only option ([#6510](https://github.com/zeroclaw-labs/zeroclaw/issues/6510))
- Slack thread context hydration ([#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055))

**Likely candidates for v0.8.2 (based on tracker [#7852](https://github.com/zeroclaw-labs/zeroclaw/issues/7852)):**
- Skills platform unification (skills + plugins + A2A as one surface)
- WASM plugin lifecycle hooks ([#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822))
- A2A agent discovery surface ([#7763](https://github.com/zeroclaw-labs/zeroclaw/pull/7763))

**Longer-term / v0.9.0 signals:**
- Computer-use desktop interaction ([#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)) — RFC accepted, high risk
- GitHub native channel ([#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079)) — accepted but no timeline
- Agent evaluation harness ([#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065)) — `zeroclaw eval` with replay + live modes
- Zero-downtime config reload ([#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897)) — security policy and channel config

---

### 7. User Feedback Summary

**Pain points:**
- **Windows experience is poor** — self-update is broken ([#7853](https://github.com/zeroclaw-labs/zeroclaw/pull/7853)), shell host defaults to `cmd.exe` with no PowerShell option ([#7089](https://github.com/zeroclaw-labs/zeroclaw/issues/7089))
- **Cron/heartbeat noise** — agents send "NO_REPLY" literally to channels ([#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128)), and cron jobs lack context ([#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105))
- **Slack thread friction** — users must re-@mention the bot for every message in a thread ([#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055))
- **Config validation gaps** — users hit runtime errors from provider/incompatible settings that quickstart doesn't catch ([#6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416))
- **CI slow** — 15–20 minute PR CI cycles even for small changes ([#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108))

**Use cases driving demand:**
- Desktop automation (computer-use RFC)
- GitHub-native agent workflows
- Multi-model routing with llama.cpp ([#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539))
- Image generation via RunPod/ComfyUI ([#7875](https://github.com/zeroclaw-labs/zeroclaw/issues/7875))

---

### 8. Backlog Watch

**Long-unanswered important items needing maintainer attention:**

| Issue | Age | Risk | Note |
|---|---|---|---|
| [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) — GitHub native channel | ~4 months | High | Accepted, 6 comments, no assigned PR. Persistent demand. |
| [#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) — NO_REPLY sentinel leak | ~4 months | Medium | Accepted, 4 comments, no fix PR. Simple fix, high annoyance. |
| [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) — Cron job context | ~2 months | High | Blocked, but root cause RFC [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) is accepted. Needs prioritization. |
| [#6698](https://github.com/zeroclaw-labs/zeroclaw/issues/6698) — Fluent locale lag | ~1 month | Medium | In-progress but no PR. Affects non-English users. |
| [#6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714) — Skill audit false positives | ~1 month | High | Remote markdown link block rejects legitimate skills. |
| [#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) — llama.cpp model router | ~1 week | Medium | Local model users want quick model switching. |

---

*Data source: [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) — snapshot 2026-06-18.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*