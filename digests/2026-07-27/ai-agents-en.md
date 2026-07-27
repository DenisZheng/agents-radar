# OpenClaw Ecosystem Digest 2026-07-27

> Issues: 348 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-27 02:22 UTC

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

# OpenClaw Project Digest — 2026-07-27

## 1. Today's Overview
OpenClaw shows **extremely high velocity** with 348 issues and 500 PRs updated in the last 24 hours (346 PRs merged/closed). The project is in active stabilization mode—no new releases today, but a heavy flow of bug fixes, regressions, and architectural refactors. Core themes: **session reliability** (message loss, compaction timeouts, crash loops), **multi-platform gaps** (Linux/Windows apps, channel regressions), and **provider integration friction** (Codex, OpenAI, Ollama, Azure). The backlog carries several P0/P1 items with `clawsweeper-recovery-stuck` labels indicating persistent production impact.

## 2. Releases
**No new releases today.** The last version mentioned in issues is `2026.7.2-beta.4` (see #113434). Users are testing beta branches; a stable cut is likely pending resolution of the P0/P1 regressions listed below.

## 3. Project Progress (Merged/Closed PRs Today)
346 PRs merged/closed in 24h. High-signal merges:

| PR | Area | Summary |
|----|------|---------|
| [#87254](https://github.com/openclaw/openclaw/pull/87254) | Plugin state / Telegram | Evict current namespace on plugin row cap; raises plugin-wide fuse to 6k, Telegram cache to 3k. |
| [#87781](https://github.com/openclaw/openclaw/pull/87781) | Codex / Supervisor | Prevent false completion stalls during native streams; counts forwarded deltas as activity. |
| [#112871](https://github.com/openclaw/openclaw/pull/112871) | State migration | Fix Voice Wake migration conflict startup loops (legacy JSON vs SQLite). |
| [#113834](https://github.com/openclaw/openclaw/pull/113834) | Web UI | New worktree sessions stay in "Coding" during creation; avoids Threads→Coding jump. |
| [#114230](https://github.com/openclaw/openclaw/pull/114230) | AI / Responses API | Freeze Responses stream processor parity (indexed output routing, reasoning, recovery). |
| [#114236](https://github.com/openclaw/openclaw/pull/114236) | AI / OpenAI compat | Unify OpenAI completions compatibility matrix vs transport endpoint-capability policy. |
| [#114229](https://github.com/openclaw/openclaw/pull/114229) | Meetings (Meet/Teams/Zoom) | Centralize talk-back readiness predicate across meeting plugins. |
| [#111365](https://github.com/openclaw/openclaw/pull/111365) | State / migrations | Run additive column migration before canonical schema assertion (fixes `agent_id` missing on upgrade). |
| [#97166](https://github.com/openclaw/openclaw/pull/97166) | Media | Allow host-read vCard (.vcf) files via MEDIA directive. |
| [#113500](https://github.com/openclaw/openclaw/pull/113500) | Channels (MM/Discord/Slack/Telegram) | Route bundled command replies through channel-turn lifecycle; fixes double/omitted `message_sending`. |

**Pattern:** Heavy focus on migration safety, channel reliability, and provider stream correctness.

## 4. Community Hot Topics (Most Discussed Issues/PRs)

| Item | Comments | 👍 | Core Need |
|------|----------|-----|-----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 115 | 80 | **Top community ask**: native desktop apps for Linux/Windows (macOS/iOS/Android exist). P2, needs product decision, security review. |
| [#99241](https://github.com/openclaw/openclaw/issues/99241) Tool outputs render as unreadable image attachments | 24 | 2 | **P1 session-state**: ANSI-heavy tool results collapse to `(see attached image)`, agent loses stdout/stderr. |
| [#102020](https://github.com/openclaw/openclaw/issues/102020) Second message fails with "reply session initialization conflicted" | 15 | 1 | **P1 cross-channel regression**: first message works, second fails on Signal/Discord. |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) Active Memory + Codex path causes latency/hook timeouts/startup aborts | 13 | 2 | **P1 perf/stability**: specific stack (active-memory + honcho + lossless-claw + GPT-5.4-mini) wedges gateway. |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) Agent repeats identical replies 2–10× on Telegram post-5.20 | 12 | 1 | **P1 regression**: duplicate sends persist through 5.22; partial fix only. |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) 180s compaction timeout is single wall-clock, no partial progress reuse | 12 | 3 | **P1 architecture**: timeout converts slow-but-recoverable compaction into hard failure every turn. |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) Webhook hook sessions should reuse sessionKey for multi-turn | 11 | 0 | **P2 feature**: documented `sessionKey` multi-turn support broken; `resolveCronSession()` always generates new ID. |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) Denylist support for exec-approvals | 9 | 8 | **P2 security**: complement allowlist with "allow all except X" policies (e.g., block `gog gmail send`). |

**Underlying needs:** Users want **production-grade reliability** (session continuity, no message loss, predictable timeouts) and **platform parity** (Linux/Windows apps). Security-conscious deployments need finer-grained approval controls.

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **P0** | [#90378](https://github.com/opencaw/openclaw/issues/90378) Cron store migrated to SQLite silently; new jobs default `delivery.mode=announce` causing channel errors | Open | [#113500](https://github.com/openclaw/openclaw/pull/113500) (related channel routing) |
| **P1** | [#99241](https://github.com/openclaw/openclaw/issues/99241) Tool outputs become unreadable image attachments (ANSI-heavy) | Open | — |
| **P1** | [#102020](https://github.com/openclaw/openclaw/issues/102020) Second message "reply session initialization conflicted" (cross-channel) | Open | — |
| **P1** | [#86996](https://github.com/openclaw/openclaw/issues/86996) Active Memory + Codex stack: latency, hook timeouts, startup aborts, event-loop stalls | Open | — |
| **P1** | [#86519](https://github.com/openclaw/openclaw/issues/86519) Telegram duplicate replies regression (2–10×) post-5.20 | Open | — |
| **P1** | [#92043](https://github.com/openclaw/openclaw/issues/92043) 180s compaction timeout no partial-progress reuse | Open | — |
| **P1** | [#85251](https://github.com/openclaw/openclaw/issues/85251) Codex app-server emits `turn/started` then silence; embedded run wedges 360s | Open | — |
| **P1** | [#94251](https://github.com/openclaw/openclaw/issues/94251) Ollama remote streaming not consumed; `model_call:started` never progresses | Open | — |
| **P1** | [#113315](https://github.com/openclaw/openclaw/issues/113315) Telegram inbound update permanently lost after offset persistence (no ingress/spool/dispatch) | Open | — |
| **P1** | [#113434](https://github.com/openclaw/openclaw/issues/113434) Codex `sessions.reset` reuses retired session ID; catalog scans exhaust Gateway RAM | Open | — |
| **P1** | [#111519](https://github.com/openclaw/openclaw/issues/111519) Telegram DM replies fall back after stale DM-scope cleanup (2026.7.2-beta.3) | Open | — |
| **P1** | [#112423](https://github.com/openclaw/openclaw/issues/112423) Large SQLite transcript cleanup blocks gateway event loop | Open | — |
| **P1** | [#106403](https://github.com/openclaw/openclaw/issues/106403) Terminal-main reconciliation gate resets healthy main session (mtime race) | Open | — |
| **P1** | [#99263](https://github.com/openclaw/openclaw/issues/99263) Gateway crashes `ERR_INVALID_STATE` (FileHandle closed during GC) on Node 26 + inbound images | **Closed** | — |
| **P1** | [#98673](https://github.com/openclaw/openclaw/issues/98673) `sanitizeContentBlocksImages` converts text tool results to image blocks (6.11) | **Closed** | — |

**Observation:** 14 P1/P0 bugs open, many with `clawsweeper-recovery-stuck`—indicating they survive retries and require code fixes. Several are regressions in recent betas (5.20→5.22, 6.11, 7.2-beta.x).

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signal |
|-------|----------|--------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows native apps | P2 | **Highest community demand** (80 👍, 115 comments). Blocked on product decision + security review. |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) Exec-approvals denylist | P2 | 8 👍; security hardening. Complements [#15032](https://github.com/openclaw/openclaw/issues/15032) per-spawn tool restrictions. |
| [#15032](https://github.com/openclaw/openclaw/issues/15032) Per-spawn tool restrictions for sub-agents | P2 | **PR open**: [#78441](https://github.com/openclaw/openclaw/pull/78441) forwards `toolsAllow` from `sessions_spawn`. DMZ web-search use case. |
| [#42026](https://github.com/openclaw/openclaw/issues/42026) Distributed Agent Runtime (control plane ↔ runtime split) | P2 | RFC stage; 9 comments, 3 👍. Architectural direction for scale. |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) Webhook hook sessions reuse `sessionKey` (multi-turn) | P2 | Doc says it works; implementation doesn't. PR linked. |
| [#38520](https://github.com/openclaw/openclaw/issues/38520) Pre-compaction notification, handoff window, deferral | P2 | Safety for long stateful workflows. |
| [#87325](https://github.com/openclaw/openclaw/issues/87325) Azure Foundry GPT Realtime Talk via gateway relay | P2 | Enterprise provider gap. |
| [#7476](https://github.com/openclaw/openclaw/issues/7476) WhatsApp sticker send support | P2 | Inbound works; outbound sends as image not sticker. |
| [#6599](https://github.com/openclaw/openclaw/issues/6599) `/models test-fallback` command | P3 | Operational tooling for fallback chain verification. |
| [#10960](https://github.com/openclaw/openclaw/issues/10960) Mid-stream message injection (soft steer) | P2 | Real-time steer during generation, not just at tool boundaries. |

**Predicted next-version candidates:** Per-spawn tool restrictions (#78441 PR advanced), denylist for exec-approvals, webhook multi-turn fix, compaction timeout redesign (#92043), and Linux/Windows app initiative (if product decision lands).

## 7. User Feedback Summary (Pain Points & Use Cases)

| Theme | Representative Voices |
|-------|----------------------|
| **Session fragility** | "Second message fails with conflict error" (#102020); "Tool outputs become unreadable images" (#99241); "Compaction timeout kills legitimate long runs" (#92043); "Codex thread wedges session permanently" (#86963). |
| **Message loss/duplication** | "Telegram duplicates 2–10× per message" (#86519); "Inbound Telegram update lost after offset advance" (#113315); "Commitment marked sent but never delivered" (#94536). |
| **Provider integration friction** | "Ollama remote streaming never progresses" (#94251); "OpenAI prompt-cache defeated by per-turn injections" (#95610); "Active Memory + Codex = gateway stalls" (#86996). |
| **Platform gaps** | "Linux/Windows apps missing — only macOS/iOS/Android" (#75, 80 👍); "WhatsApp stickers send as images" (#7476); "Discord truncates after inline error" (#96007). |
| **Operational blind spots** | "No way to test fallback chain until real failure" (#6599); "Cron consecutiveErrors inflated by gateway restarts" (#77298); "Auto-update leaves stale hashed bundle imports" (#85844). |
| **Security/control needs** | "Need denylist for exec-approvals" (#6615, 8 👍); "Per-spawn tool restrictions for DMZ sub-agents" (#15032); "Expose plugin approval APIs for external HITL" (#82336). |
| **Positive notes** | PR velocity high; maintainers actively merging fixes; beta testers providing detailed repro (e.g., #113434, #111519). |

## 8. Backlog Watch (Long-Open / Stalled High-Value Items)

| Item | Age | Why It Matters | Blocker |
|------|-----|----------------|---------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | ~7 months | **Top-voted issue** (80 👍). Platform parity gap. | `needs-product-decision`, `needs-security-review`, `needs-maintainer-review` |
| [#42026](https://github.com/openclaw/openclaw/issues/42026) Distributed Agent Runtime RFC | ~4.5 months | Architectural foundation for scale/multi-tenancy. | `needs-product-decision`, `needs-security-review` |
| [#6

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-07-27)

---

## 1. Ecosystem Overview

The open-source personal AI agent ecosystem shows **high aggregate velocity but fragmented maturity**. Thirteen tracked projects generated 547 issue updates and 687 PR updates in 24 hours, yet only 2 of 13 projects (OpenClaw, ZeroClaw) operate at "platform scale" (>50 daily PRs), while 4 show minimal or zero activity. No project shipped a release today—indicating a **cross-ecosystem stabilization phase** where maintainers prioritize regression fixes, security hardening, and migration safety over feature delivery. The dominant architectural pattern is **multi-protocol gateway + pluggable runtime + channel adapters**, with convergence on session reliability, provider interoperability, and sandbox security as shared pain points.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | PRs Merged/Closed | Release Today | Health Score (1–10) | Status |
|---------|----------------|-------------|-------------------|---------------|---------------------|--------|
| **OpenClaw** | 348 | 500 | 346 | ❌ | 8 | Platform-scale stabilization |
| **ZeroClaw** | 50 | 50 | 2 | ❌ (v0.8.4 prep) | 7 | Hardening sprint, crates.io publish imminent |
| **Hermes Agent** | 50 | 50 | 13 | ❌ | 7 | Pre-v1 launch hardening |
| **IronClaw** | 5 | 18 | 6 | ❌ (release PR open 24d) | 6 | Deep refactor, v1 blocked |
| **NanoBot** | 10 | 29 | 24 | ❌ | 7 | Active patch candidates, security focus |
| **CoPaw** | 17 | 9 | 0 | ❌ | 5 | Post-v2.0.1 regression backlog |
| **NanoClaw** | 2 | 8 | 2 | ❌ | 6 | Post-breaking-change migration fallout |
| **Moltis** | 0 | 8 | 0 | ❌ | 5 | Maintainer-driven feature sprint |
| **LobsterAI** | 2 | 8 | 1 | ❌ | 4 | Review bottleneck, critical gateway bug |
| **PicoClaw** | 4 | 7 | 1 | ❌ | 5 | Steady maintenance, low community signal |
| **NullClaw** | 1 | 0 | 0 | ❌ | 3 | Critical aarch64 crash, no fix PR |
| **TinyClaw** | 0 | 0 | 0 | ❌ | 1 | Dormant |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ | 1 | Dormant |

**Health Score Factors**: Merge throughput, critical bug count, release cadence, community engagement, architectural coherence.

---

## 3. OpenClaw's Position

**Advantages vs Peers**
- **Scale & Velocity**: 10× PR throughput of nearest peer (ZeroClaw); 346 merges/day demonstrates industrial-grade CI/CD and review capacity.
- **Platform Parity**: Only project with native apps on macOS, iOS, Android (Linux/Windows blocked on product/security decisions, not engineering).
- **Provider Breadth**: Native integrations for Codex, OpenAI, Ollama, Azure, Anthropic, Gemini—with active Responses API parity work (#114230).
- **Enterprise Features**: Meeting plugins (Meet/Teams/Zoom), cron scheduling, webhook multi-turn, exec-approval policies, distributed runtime RFC.

**Technical Approach Differences**
- **Monolithic Gateway + Plugin Architecture**: Single Node.js/TypeScript process manages all channels, providers, state—contrast with IronClaw/ZeroClaw’s Rust microkernel + WASM sandbox model.
- **Session-Centric State**: SQLite transcript store with compaction, migration tooling, and "active memory" subsystem—vs. file-based (NanoBot) or redb/zvec (Moltis/ZeroClaw) backends.
- **Channel-First Design**: 10+ channel adapters (Discord, Slack, Telegram, Signal, WhatsApp, Matrix, Feishu, DingTalk, Buzz, Nostr) with unified turn lifecycle—most peers support 2–4 channels.

**Community Size**
- **Top-voted issue** (#75 Linux/Windows apps): 80 👍, 115 comments—highest engagement in ecosystem.
- **Beta tester density**: Detailed repros on P1 regressions (e.g., #113434, #111519) indicate active production deployments.
- **Contributor breadth**: 346 merges from mix of core team and community—broader than IronClaw/ZeroClaw (core-team dominated).

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Need |
|-------------|-------------------|---------------|
| **Session Reliability & Message Loss Prevention** | OpenClaw (#99241, #102020, #113315), NanoBot (#5102, #4792, #4064), ZeroClaw (#5514, #6157), CoPaw (#6471, #6474), Hermes (#51184) | Deterministic delivery, no silent drops, multi-turn sessionKey reuse, compaction timeout redesign |
| **Provider Interoperability & Streaming Correctness** | OpenClaw (#94251, #86996, #114230), NanoBot (#5040, #4939), PicoClaw (#3252, #3299), ZeroClaw (#9419, #9423), LobsterAI (#1247) | Unified streaming abstractions, MCP schema normalization, OAuth flows, fallback chain testability |
| **Sandbox & Execution Security** | IronClaw (#6689), ZeroClaw (#9233, #8973), NanoBot (#4625), PicoClaw (#3297), Moltis (#1170) | Landlock/bwrap hardening, credential placeholder registries, per-call approval, origin policies |
| **Multi-Platform Desktop Support** | OpenClaw (#75), LobsterAI (#273), ZeroClaw (#7462), CoPaw (#6239, #6460) | Linux/Windows native apps, Wayland/Edge compatibility, PATH handling, installer localization |
| **Migration Safety & Schema Evolution** | OpenClaw (#111365, #112871), NanoClaw (#3140, #3136), ZeroClaw (#9046), PicoClaw (#3297) | Additive migrations, wiring backfill, config schema versioning, zero-downtime upgrades |
| **Observability & Debugging** | NanoBot (#6342), CoPaw (#6342), ZeroClaw (#9046), LobsterAI (#1243) | Embedding verification, gateway health endpoints, cron delivery confirmation, doctor command accuracy |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw/IronClaw | NanoBot/Moltis | CoPaw/LobsterAI | PicoClaw/NanoClaw |
|-----------|----------|-------------------|----------------|-----------------|-------------------|
| **Target User** | Power users, teams, enterprise self-host | Rust/NEAR ecosystem, WASM-first developers | Privacy-focused, local-first, hackers | Desktop GUI users, Chinese-market, creators | Embedded/IoT, lightweight gateways |
| **Core Language** | TypeScript/Node.js | Rust (microkernel + WASM) | Python (async) + TypeScript UI | TypeScript/Electron + Python plugins | Go |
| **Architecture** | Monolithic gateway + plugins | Microkernel + capability-based sandbox | Single-process + channel adapters | Electron app + plugin runtime | Single-binary gateway |
| **Channel Strategy** | 10+ first-class adapters | Telegram, WhatsApp, Nextcloud, Matrix | WeChat, Feishu, Discord, Slack, Matrix | WeChat, Feishu, Discord, Matrix, Buzz | Discord, Slack, Telegram, Matrix |
| **Provider Model** | Runtime-negotiated, Responses API parity | MCP-first, per-hire discovery | OpenAI-compatible + Codex OAuth | OpenClaw-embedded + local models | OpenAI-compatible + Exa/AI Router |
| **Extensibility** | Plugin system (namespace-scoped) | WASM skills + ACP protocol | Skills + MCP + triggers | PawApp plugins + creator workflow | Provider presets + tool registry |
| **Differentiator** | Breadth of integrations, session maturity | Formal error recoverability contract, signed intent | Memory/dream subsystem, unified-session heartbeats | Visual context compression, video creation app | Security hardening, minimal footprint |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Platform Scale (Rapid Iteration)** | OpenClaw, ZeroClaw | >50 PRs/day, dedicated security/maintenance teams, RFC processes, crates.io/npm publish pipelines |
| **Active Hardening (Pre-Release Sprint)** | Hermes Agent, IronClaw, NanoBot | 10–30 PRs/day, P0/P1 fix focus, release candidates in prep, launch checklists |
| **Stabilizing Post-Breaking-Change** | NanoClaw, CoPaw | Migration regressions dominate, community filing duplicates, first-time contributor influx |
| **Maintainer-Driven Feature Sprints** | Moltis, PicoClaw | 0 community issues, 5–8 PRs/day from core team, experimental backends (zvec, ACP agent) |
| **Bottlenecked / At Risk** | LobsterAI, NullClaw | Stale PRs (>90d), critical bugs without fix PRs, review bandwidth constraints |
| **Dormant** | TinyClaw, ZeptoClaw | Zero 24h activity, no recent releases |

**Key Insight**: Only OpenClaw and ZeroClaw sustain "platform velocity" (>50 PRs/day). The ecosystem bifurcates between **Rust/WASM microkernel** (IronClaw, ZeroClaw, Moltis) and **TypeScript/Node monolith** (OpenClaw, Hermes, CoPaw) architectures—with Go (PicoClaw) and Python (NanoBot) as niche alternatives.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Session Continuity > Raw Model Capability** | 6/13 projects list message loss/session fragility as top pain point; OpenClaw compaction timeout redesign (#92043), NanoBot Dream cursor fixes (#5054), ZeroClaw web dashboard interruption (#8559) | Invest in **deterministic state machines**, partial-progress checkpointing, and multi-turn sessionKey contracts before chasing model upgrades. |
| **MCP as Universal Tool Protocol** | IronClaw (#6683), ZeroClaw (#9418), NanoBot (#5057), Moltis (#1169), CoPaw (#6470), PicoClaw (#3299) all building MCP integrations | **Adopt MCP early**; schema normalization (#5057), stdio multiplexing (#9418), and per-user discovery (#6683) are converging patterns. |
| **Security Hardening as Default, Not Add-On** | Landlock fixes (ZeroClaw #9233, PicoClaw #3297), credential registries (IronClaw #6689), SSRF protection (ZeroClaw), operator-gated tools (Moltis #1170) | **Design sandbox boundaries at architecture level**; retrofitting breaks workflows (see ZeroClaw Landlock self-lock). |
| **Channel Reliability = Product Quality** | Telegram duplicates (OpenClaw #86519, ZeroClaw #5514), WhatsApp owner blindness (NanoClaw #3139), WeChat QR cancel safety (NanoBot #5069), Matrix E2E broken (CoPaw #6476) | **Treat each channel adapter as a production service** with ack/retry, media batching, and owner-visibility guarantees. |
| **Local-First + Cloud-Hybrid Deployments** | NanoBot Raspberry Pi optimization (#5036), ZeroClaw Docker gateway (#9035), OpenClaw Linux/Windows apps (#75), CoPaw Windows PATH (#6239) | **Support air-gapped, ARM, and containerized ops**; provider fallback chains (#6599) and offline skill execution are differentiators. |
| **Formal Error Contracts Emerging** | IronClaw recoverability epic (#6284), ZeroClaw FailureKind unification (#6684), OpenClaw P0/P1 taxonomy | **Define "survivable error" contracts** (model-visible, causal, actionable, never silent)—becoming table stakes for agent platforms. |

---

## Summary for Decision-Makers

- **OpenClaw** remains the **reference implementation** for breadth, velocity, and production session management—but carries technical debt in compaction, migration, and platform gaps.
- **ZeroClaw/IronClaw** represent the **Rust/WASM architectural frontier** with stronger security primitives and formal contracts; watch for v1/crates.io releases

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-27

## 1. Today's Overview

NanoBot shows **high maintenance velocity** with 29 PRs updated (24 merged/closed) and 10 issues updated in the last 24 hours. The project is in active stabilization mode: security hardening for image downloads, provider proxy compliance, channel connection safety, and memory/dream subsystem correctness dominate merged work. No new release was cut today. Three issues remain open/active, including a fresh WebUI cron delivery bug (#5102) and a stale subagent-profiles request (#1012).

---

## 2. Releases

**No new releases today.** The latest published version remains `nanobot-ai==0.2.2` (per issue #5051 context). Several merged PRs (#5095, #5101, #5069, #5054, #5056, #5057, #4625, #5084, #4928, #5088, #5087, #5089) are strong candidates for a near-term patch release.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Area | Summary | Linked Issue |
|----|------|---------|--------------|
| [#5095](https://github.com/HKUDS/nanobot/pull/5095) | **Security (P1)** | Hardened generated image URL downloads: restricted downloader, redirect validation (blocks loopback/private/CGNAT/metadata), DNS pinning, 32 MiB stream cap, image-byte verification. | — |
| [#5101](https://github.com/HKUDS/nanobot/pull/5101) | **Provider (P1)** | Honor provider proxy for image URL downloads; preserve DNS-pinned direct downloads when no proxy configured. | — |
| [#5069](https://github.com/HKUDS/nanobot/pull/5069) | **Channel (P1)** | Ignore QR connection confirmations after user cancels; prevents saving credentials from cancelled WeChat/Feishu sessions. | — |
| [#5054](https://github.com/HKUDS/nanobot/pull/5054) | **Memory/Dream (P1)** | Advance Dream cursor after cleanly completed no-op batches; prevents starvation of later history entries (regression cover for 21-entry Git-backed case). | #5041 |
| [#5056](https://github.com/HKUDS/nanobot/pull/5056) | **Agent (P1)** | Preserve output across length recovery: accumulate contiguous segments, anchor recovery prompts with last 64 chars, keep transcript intact. | #5051 |
| [#5057](https://github.com/HKUDS/nanobot/pull/5057) | **MCP (P1)** | Normalize local schema `$ref`s to `#/$defs/` for strict providers (Kimi/Moonshot); single incompatible tool no longer disables entire model. | #5040 |
| [#4625](https://github.com/HKUDS/nanobot/pull/4625) | **Exec/Sandbox** | Configurable extra bwrap bind roots (`tools.exec.sandbox.bwrap.extra_bind_roots`) for user-level tool dirs (`~/.local/bin`, `~/.cargo/bin`). | #4107 |
| [#5084](https://github.com/HKUDS/nanobot/pull/5084) | **Channel/Agent (P1)** | Preserve pending message runtime context (sender/channel/chat) when draining mid-turn queue; resolves metadata loss. | #4064 |
| [#4928](https://github.com/HKUDS/nanobot/pull/4928) | **Heartbeat/Channel (P1)** | Route unified-session heartbeats to last concrete `channel:chat_id`; persist route in unified-session metadata, reject disabled/CLI/system routes. | #4924 |
| [#5088](https://github.com/HKUDS/nanobot/pull/5088) | **Pairing** | Treat null `approved`/`pending` maps as empty in `pairing.json` (crash fix on `.items()`). | — |
| [#5087](https://github.com/HKUDS/nanobot/pull/5087) | **Triggers** | Treat null `runHistory` as empty when loading triggers (cron already did). | — |
| [#5089](https://github.com/HKUDS/nanobot/pull/5089) | **Feishu Channel** | Tolerate null `multi_url` and list fields in card button extraction. | — |
| [#5100](https://github.com/HKUDS/nanobot/pull/5100) | **WebUI (P1)** | Prevent long messages from widening mobile thread: allow message region to shrink, add grid-item shrink constraint regression test. | — |
| [#4656](https://github.com/HKUDS/nanobot/pull/4656) | **Provider (P2)** | Pass aspect-ratio & size to Gemini Flash image models (Nano Banana / Gemini 3). | — |
| [#4939](https://github.com/HKUDS/nanobot/pull/4939) | **Provider/CLI** | Support Codex OAuth in Quick Start: expose Codex, reuse/start OAuth flow, default to registry-preferred model. | — |
| [#4446](https://github.com/HKUDS/nanobot/pull/4446) | **DingTalk Channel** | `disable_private_chat` flag + group-reply sender mention (markdown H1). | — |
| [#5036](https://github.com/HKUDS/nanobot/pull/5036) | **Agent/Perf (P2)** | Make idle compaction scan interval configurable (helps Raspberry Pi: 30–40% CPU → near-zero when idle). | — |

**Open PRs of note:**
- [#5098](https://github.com/HKUDS/nanobot/pull/5098) — Unified extension platform (conflict, P1): first-class governed extensions, transactional lifecycle, Pi/OpenClaw compat, shared control plane.
- [#4301](https://github.com/HKUDS/nanobot/pull/4301) — Skills loader caching (conflict): cache discovery & frontmatter metadata.
- [#5099](https://github.com/HKUDS/nanobot/pull/5099) — Preserve unprocessed Dream history during compaction (P1): protect entries newer than cursor, retain tail limit, warn on over-retention.

---

## 4. Community Hot Topics

| Item | Type | Comments | Reactions | Signal |
|------|------|----------|-----------|--------|
| [#4924](https://github.com/HKUDS/nanobot/issues/4924) | Bug (Closed) | 4 | 0 | Heartbeat target selection broken for `unifiedSession: true` when no sessions exist. Fixed by #4928. |
| [#1012](https://github.com/HKUDS/nanobot/issues/1012) | Feature (Open, Stale) | 2 | 0 | **Subagent profiles** — configurable tools/skills per subagent type (research vs coding agents). Long-standing request (Feb 2026). |
| [#4107](https://github.com/HKUDS/nanobot/issues/4107) | Enhancement (Closed) | 2 | 1 | Extra bwrap bind mounts — merged via #4625. |
| [#4603](https://github.com/HKUDS/nanobot/issues/4603) | Refactor (Closed) | 2 | 0 | Stop mutating `tool_call.id` for WebUI file-edit progress correlation. |
| [#4792](https://github.com/HKUDS/nanobot/issues/4792) | Bug (Open) | 2 | 0 | `/stop` silently discards pending queue messages — permanent loss. No fix PR yet. |
| [#5102](https://github.com/HKUDS/nanobot/issues/5102) | Bug (Open, **New**) | 0 | 0 | **WebUI cron task push lost**: `lastStatus: "ok"` but no delivery when WebUI tab closed. Channel: websocket. High user-impact. |

**Underlying needs:**  
- **Reliability of async/detached delivery** (cron, WebUI, `/stop` queue drain) — users expect “fire-and-forget” to actually deliver.  
- **Subagent specialization** — power users want to compose agents with distinct tool/skill profiles, not homogeneous clones.  
- **Sandbox flexibility** — advanced deployments need controlled escape hatches (extra bind mounts) without weakening defaults.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | [#5102](https://github.com/HKUDS/nanobot/issues/5102) | WebUI cron push shows `lastStatus: "ok"` but message never delivered when tab closed. Silent data loss. | — |
| **High** | [#4792](https://github.com/HKUDS/nanobot/issues/4792) | `/stop` drains pending queue via `get_nowait()` but never re-publishes — messages lost permanently. | — |
| **High** | [#5051](https://github.com/HKUDS/nanobot/issues/5051) | Length recovery loses earlier continuation segments; only last segment in `final_content`. | [#5056](https://github.com/HKUDS/nanobot/pull/5056) ✅ |
| **High** | [#5040](https://github.com/HKUDS/nanobot/issues/5040) | MCP tool schema with non-`#/$defs/` `$ref` disables entire model on strict providers (Kimi/Moonshot). | [#5057](https://github.com/HKUDS/nanobot/pull/5057) ✅ |
| **Medium** | [#5041](https://github.com/HKUDS/nanobot/issues/5041) | Completed no-op Dream batches don’t advance cursor → same batch re-selected, later history starved. | [#5054](https://github.com/HKUDS/nanobot/pull/5054) ✅ |
| **Medium** | [#4064](https://github.com/HKUDS/nanobot/issues/4064) | Pending mid-turn messages lose sender/channel/chat runtime context. | [#5084](https://github.com/HKUDS/nanobot/pull/5084) ✅ |
| **Medium** | [#4924](https://github.com/HKUDS/nanobot/issues/4924) | `_pick_heartbeat_target_from_sessions` fails with `unifiedSession: true` and no sessions. | [#4928](https://github.com/HKUDS/nanobot/pull/4928) ✅ |

**Note:** 6 of 7 high/medium bugs reported in prior days have fixes merged today. Only #5102 (new) and #4792 (open since Jul 6) lack fix PRs.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood for Next Version |
|---------|----------|-----------------------------|
| **Subagent profiles** (per-agent tools/skills/model) | [#1012](https://github.com/HKUDS/nanobot/issues/1012) | Medium — stale but high-value; conflicts with unified extension platform (#5098) which may supersede. |
| **Unified extension platform** | [#5098](https://github.com/HKUDS/nanobot/pull/5098) | High — P1, conflict state suggests active rebase; first-class extensions are a strategic pillar. |
| **Skills loader caching** | [#4301](https://github.com/HKUDS/nanobot/pull/4301) | Medium — conflict, perf win for large skill sets; may ride with extension platform. |
| **Configurable idle compaction interval** | [#5036](https://github.com/HKUDS/nanobot/pull/5036) ✅ | Done — merged today. |
| **Extra bwrap bind roots** | [#4625](https://github.com/HKUDS/nanobot/pull/4625) ✅ | Done — merged today. |
| **Codex OAuth in Quick Start** | [#4939](https://github.com/HKUDS/nanobot/pull/4939) ✅ | Done — merged today. |
| **DingTalk private-chat gate + mention** | [#4446](https://github.com/HKUDS/nanobot/pull/4446) ✅ | Done — merged today. |

**Prediction:** Next patch (likely `0.2.3`) will bundle security/image fixes (#5095, #5101), Dream/memory corrections (#5054, #5099), length-recovery (#5056), MCP schema normalize (#5057), channel safety (#5069, #5084, #4928), and sandbox/config QOL (#4625, #5036). Extension platform (#5098) may target a minor version (`0.3.0`).

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Silent message loss** (cron, `/stop`, pending queue) | #5102, #4792, #4064 | 😡 Frustrated — “permanent message loss”, “no delivery despite `ok` status” |
| **CPU drain on low-power devices** | #5036 (Raspberry Pi 30–40% idle) | 😕 Annoyed — “always consuming CPU when idle” |
| **Strict provider incompatibility** | #5040 (Kimi/Moonshot reject entire model) | 😟 Blocked — single MCP tool breaks all chat completions |
| **Subagent homogeneity** | #1012 (stale, 5 months) | 😐 Patient but persistent — “no way to define specialized subagent types” |
| **WebUI mobile UX** | #5100 (long messages widen thread) | 😐 Minor — fixed quickly |
| **Sandbox rigidity** | #4107 → #4625 | ✅ Satisfied — “deployments can expose user-level tool directories” |

**Overall:** Users are vocal about **reliability of async flows** (cron, stop, pending messages) and **resource efficiency**. The team responds fast — most critical bugs get fixes within days.

---

## 8. Backlog Watch — Needs Maintainer Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#1012](https://github.com/HKUDS/nanobot/issues/1012) | 5 months | Open, Stale | Subagent profiles are a recurring power-user ask; may conflict/align with extension platform (#5098). Decision needed: build into core or delegate to extensions? |
| [#4792](https://github.com/HKUDS/nanobot/issues/4792) | 21 days | Open | `/stop` message loss is a correctness bug in core message bus. No PR yet. |
| [#5098](https://github.com/HKUDS/nanobot/pull/5098) | 1 day | Open, Conflict | Unified extension platform — large architectural PR. Conflict flag suggests rebase needed; strategic priority. |
| [#4301](https://github.com/HKUDS/nanobot/pull/4301) | 46 days | Open, Conflict | Skills loader caching — perf win, but blocked by conflict. May be subsumed by #5098. |
| [#5099](https://github.com/HKUDS/nanobot/pull/5099) | 1 day | Open | Dream history preservation during compaction — complements #5054. Should land before next release. |
| [#5102](https://github.com/HKUDS/nanobot/issues/5102) | 0 days | Open | **New critical bug**: WebUI cron delivery ghost-success. High user visibility; needs triage + fix PR urgently. |

---

**Digest generated:** 2026-07-27 00:

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-27

## 1. Today's Overview
Hermes Agent shows **very high development velocity** with 50 issues and 50 PRs updated in the last 24 hours. The project is in an active stabilization and feature-expansion phase: 13 PRs were merged/closed today, addressing critical bugs in gateway reliability, cron scheduling, desktop boot readiness, and media delivery across platforms. A major architectural RFC around **profile lifecycle separation (cloning vs. backup/restore)** spawned 7 closed issues/PRs today, signaling an upcoming UX overhaul. No new release was cut, but the volume of merged fixes suggests a patch release (v0.18.3+) is imminent.

## 2. Releases
**No new releases today.** The latest published version remains v0.18.2. Given the 13 merged PRs — including P0/P1 fixes for gateway reconnect wedges, cron multi-profile execution, and desktop boot loops — a point release is likely within days.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#70987](https://github.com/NousResearch/hermes-agent/pull/70987) | Bug (P1) | Gateway reconnect watcher no longer wedges after fatal network errors | **Critical stability** — prevents silent deafness after outages |
| [#70646](https://github.com/NousResearch/hermes-agent/pull/70646) | Bug (P2) | Cron ticker now ticks **every served profile** under `multiplex_profiles` | Fixes silent job failures for secondary profiles |
| [#71104](https://github.com/NousResearch/hermes-agent/pull/71104) | Bug (P2) | Desktop boot readiness probes `/api/health` instead of `/api/status` | Eliminates false-dead detection during cold start |
| [#72170](https://github.com/NousResearch/hermes-agent/pull/72170) | Bug (P2) | Reliable `MEDIA:` file delivery across Discord, Feishu, etc. (6 contributor fixes) | **Cross-platform media delivery** — resolves silent attachment drops |
| [#72192](https://github.com/NousResearch/hermes-agent/pull/72192) | Bug (P2) | `hermes update` restarts supervised & manually-started backends | Improves update UX for production deployments |
| [#71782](https://github.com/NousResearch/hermes-agent/pull/71782) | Bug (P3) | OpenRouter auxiliary calls carry sticky `session_id` routing key | Restores prompt-cache hits for auxiliary calls |
| [#70989](https://github.com/NousResearch/hermes-agent/pull/70989) | Bug (P2) | Cron job workdir scoped to session, not process-global cwd | Prevents session cwd leakage |
| [#67369](https://github.com/NousResearch/hermes-agent/pull/67369) | Bug (P0) | Bootstrap installer decodes localized PowerShell output; refreshes install cache | Fixes Windows install failures on non-UTF-8 systems |
| [#67192](https://github.com/NousResearch/hermes-agent/pull/67192) | Bug (P2) | Batch: `.env` quoting/UTF-16, aux `key_env`, profile-aware system prompt | Hardens config loading edge cases |
| [#65239](https://github.com/NousResearch/hermes-agent/pull/65239) | Bug (P3) | Dashboard TUI redraws after fresh session (`/new`, `/clear`, `/reset`) | Eliminates stale transcript cells |
| [#69796](https://github.com/NousResearch/hermes-agent/pull/69796) | Bug (P2) | Desktop clarify card sanitizes choices — no dead buttons | Fixes render corruption in interactive flows |
| [#72376–#72383](https://github.com/NousResearch/hermes-agent/issues/72376) | Refactor/Feature (P3) | **Profile lifecycle RFC**: separate clone, backup, restore, export, snapshot | **Major UX redesign** — 7 issues closed to formalize contracts |

## 4. Community Hot Topics — Most Active Discussions
| Issue | Comments | 👍 | Core Need |
|-------|----------|----|-----------|
| [#68871](https://github.com/NousResearch/hermes-agent/issues/68871) **Add messaging support for Buzz** | 15 | 13 | **Top community ask** — integrate Block’s self-hosted team workspace (Buzz) as a gateway adapter. High strategic value for team/organization adoption. |
| [#62936](https://github.com/NousResearch/hermes-agent/issues/62936) **Telegram uploads >15 MB timeout** | 7 | 0 | `HERMES_TELEGRAM_HTTP_WRITE_TIMEOUT` ignored for media; PTB `media_write_timeout` never set. Blocks large-file workflows. |
| [#12651](https://github.com/NousResearch/hermes-agent/issues/12651) **.env sanitizer leaves `KEY=***` placeholders** | 5 | 0 | Security/usability: `load_env()` treats `***` as real credentials. Affects setup validation. |
| [#51184](https://github.com/NousResearch/hermes-agent/issues/51184) **Cron false-positive delivery with broken LINE adapter** | 4 | 0 | Cron reports success even when adapter cannot send. Needs health-check gating. |
| [#3506](https://github.com/NousResearch/hermes-agent/issues/3506) **Durable Feedback Routing** | 4 | 0 | Unify memory, skills, follow-up planning for persistent learning — architectural feature request. |
| [#30626](https://github.com/NousResearch/hermes-agent/issues/30626) **Gateway profile-blind at boot** | 3 | 0 | `hermes gateway run` reads `active_profile` once; ignores live switches. Multi-profile ops broken. |
| [#48689](https://github.com/NousResearch/hermes-agent/issues/48689) **`hermes doctor` stale npm vuln + false Gemini key error** | 3 | 0 | Diagnostic noise erodes trust in `doctor`; needs cache refresh and better key validation. |
| [#37501](https://github.com/NousResearch/hermes-agent/issues/37501) **`hermes mcp add` drops all but last `--env`** | 3 | 0 | Silent config loss — multiple env vars not persisted. |
| [#61334](https://github.com/NousResearch/hermes-agent/issues/61334) **`reasoning_effort: minimal/max` silent fallback to `medium`** | 3 | 0 | 6 declared values but only 3 effective on Anthropic-compatible providers. |
| [#56802](https://github.com/NousResearch/hermes-agent/issues/56802) **Kanban notify/wake broken in multi-profile gateways** | 3 | 0 | Notifier coupled to dispatcher; profile resolution errors; wrong wake target. |

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **P0** | [#70987](https://github.com/NousResearch/hermes-agent/issues/70987) Gateway reconnect watcher wedge after fatal error | ✅ Closed | [#70987](https://github.com/NousResearch/hermes-agent/pull/70987) |
| **P0** | [#67369](https://github.com/NousResearch/hermes-agent/issues/67369) Windows bootstrap fails on localized PS output | ✅ Closed | [#67369](https://github.com/NousResearch/hermes-agent/pull/67369) |
| **P1** | [#62936](https://github.com/NousResearch/hermes-agent/issues/62936) Telegram large upload timeout (env var ignored) | 🔴 Open | — |
| **P2** | [#30626](https://github.com/NousResearch/hermes-agent/issues/30626) Gateway ignores live profile switches | 🔴 Open | — |
| **P2** | [#51184](https://github.com/NousResearch/hermes-agent/issues/51184) Cron false-positive with broken LINE adapter | 🔴 Open | — |
| **P2** | [#48689](https://github.com/NousResearch/hermes-agent/issues/48689) `hermes doctor` stale vuln + false Gemini error | 🔴 Open | — |
| **P2** | [#37501](https://github.com/NousResearch/hermes-agent/issues/37501) `hermes mcp add` drops multiple `--env` flags | 🔴 Open | — |
| **P2** | [#42727](https://github.com/NousResearch/hermes-agent/issues/42727) Agent self-config persists redacted credentials | 🔴 Open | — |
| **P2** | [#72391](https://github.com/NousResearch/hermes-agent/issues/72391) Desktop Windows: WebSocket ready race / reconnect loop | 🔴 Open (new) | — |
| **P2** | [#70640](https://github.com/NousResearch/hermes-agent/pull/70640) MCP OAuth scope ceiling not enforced | 🟡 Open PR | [#70640](https://github.com/NousResearch/hermes-agent/pull/70640) |
| **P3** | [#61334](https://github.com/NousResearch/hermes-agent/issues/61334) `reasoning_effort` silent fallback | 🔴 Open | — |
| **P3** | [#55081](https://github.com/NousResearch/hermes-agent/issues/55081) MCP schema renames `definitions` → `$defs` | 🔴 Open | — |
| **P3** | [#67165](https://github.com/NousResearch/hermes-agent/issues/67165) cua-driver macOS: ScreenCaptureKit `display_count=0` | 🔴 Open | — |
| **P3** | [#65265](https://github.com/NousResearch/hermes-agent/issues/65265) Blackbox CLI doc link 404 | 🔴 Open | — |

## 6. Feature Requests & Roadmap Signals
| Signal | Evidence | Likelihood for Next Version |
|--------|----------|----------------------------|
| **Buzz (Block) gateway adapter** | [#68871](https://github.com/NousResearch/hermes-agent/issues/68871) — 15 comments, 13 👍, P3/needs-decision | **High** — strong community pull, strategic for team adoption |
| **Profile lifecycle overhaul** | [#72376](https://github.com/NousResearch/hermes-agent/issues/72376)–[#72383](https://github.com/NousResearch/hermes-agent/issues/72383) — 7 issues closed today formalizing clone vs. backup/restore contracts | **Very High** — RFC complete, implementation PRs likely next |
| **Desktop GUI-only install (remote gateway)** | [#50643](

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-27

## 1. Today's Overview
PicoClaw shows steady maintenance activity with **11 total updates** (4 issues, 7 PRs) in the last 24 hours, though no new release was cut. The project is actively addressing stability regressions (Go 1.25.12 upgrade, `SplitMessage` hang, provider prefix stripping) and expanding provider/tool coverage (Exa web search, AI Router preset). One PR was merged (Go version bump for CVE remediation), while six PRs and three issues remain open — indicating a healthy but backlog-heavy contributor pipeline. Community engagement is low on reactions/comments, suggesting most work is driven by maintainers and a few regular contributors.

## 2. Releases
**No new releases published today.** The latest merged change ([PR #3248](https://github.com/sipeed/picoclaw/pull/3248)) bumps the Go toolchain to 1.25.12 to remediate `GO-2026-5856` (crypto/tls) and `GO-2026-4970` (os) — a security-only patch that will likely ship in the next patch release.

## 3. Project Progress
| PR | Status | Impact |
|----|--------|--------|
| [#3248](https://github.com/sipeed/picoclaw/pull/3248) | **Merged** | Go 1.25.11 → 1.25.12; fixes two stdlib CVEs caught by `govulncheck` in CI. |
| [#3295](https://github.com/sipeed/picoclaw/pull/3295) | Open | Fixes `SplitMessage` infinite loop on oversized fenced-code info strings (regression from #3264). Adds regression test. |
| [#3297](https://github.com/sipeed/picoclaw/pull/3297) | Open | Security hardening: remote prompt/exec boundaries, default-deny exec, per-call approval, origin policy enforcement, config schema v4 migration. |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Open | New native Exa web search provider (`tools.web` / `web_search`) with date-range filters and highlights. |
| [#3267](https://github.com/sipeed/picoclaw/pull/3267) | Open | Antigravity token refresh scope fix (prevents `PERMISSION_DENIED` on refresh). |
| [#3202](https://github.com/sipeed/picoclaw/pull/3202) | Open | Routing ID normalization: strips leading/trailing underscores to match documented regex. |
| [#3296](https://github.com/sipeed/picoclaw/pull/3296) | Open | i18n: completes Czech code-wrap labels. |

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#3265](https://github.com/sipeed/picoclaw/issues/3265) | Issue | 1 comment, stale | Gateway fails to start with `deltachat` error despite no deltachat config — suggests dead code path or config validation gap. |
| [#3264](https://github.com/sipeed/picoclaw/issues/3264) | Issue | 1 comment, stale | `SplitMessage` hangs on large fence info strings — **fixed by #3295** (same day). |
| [#3252](https://github.com/sipeed/picoclaw/issues/3252) | Issue | 2 comments, closed | `splitKnownProviderModel` strips provider prefix incorrectly when model ID contains known alias — root cause in factory parsing logic. |
| [#3298](https://github.com/sipeed/picoclaw/issues/3298) | Issue | 0 comments, new | Feature request: add AI Router as named OpenAI-compatible provider preset (avoids manual `api_base` config). |

**Analysis:** The `SplitMessage` hang (#3264 → #3295) shows rapid turnaround. The deltachat startup failure (#3265) and provider prefix bug (#3252) point to config validation and provider factory debt. AI Router preset (#3298) reflects growing demand for managed router integrations.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#3265](https://github.com/sipeed/picoclaw/issues/3265) Gateway crashes on startup with unknown `deltachat` channel (no config) | Open, stale | None yet |
| **High** | [#3264](https://github.com/sipeed/picoclaw/issues/3264) `SplitMessage` infinite loop on oversized fence header | Open, stale | **[#3295](https://github.com/sipeed/picoclaw/pull/3295)** (ready) |
| **Medium** | [#3252](https://github.com/sipeed/picoclaw/issues/3252) `splitKnownProviderModel` strips prefix incorrectly | Closed (stale) | Not linked — likely fixed in factory.go |
| **Medium** | [#3267](https://github.com/sipeed/picoclaw/pull/3267) Antigravity token refresh fails due to wrong scope | Open, stale | **[#3267](https://github.com/sipeed/picoclaw/pull/3267)** (ready) |
| **Low** | [#3202](https://github.com/sipeed/picoclaw/pull/3202) ID normalization allows leading/trailing underscores | Open, stale | **[#3202](https://github.com/sipeed/picoclaw/pull/3202)** (ready) |

**Note:** Three high/medium bugs have ready-to-merge fix PRs (#3295, #3267, #3202) — maintainer review bandwidth appears to be the bottleneck.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **AI Router as named OpenAI-compatible preset** | [#3298](https://github.com/sipeed/picoclaw/issues/3298) (maintainer-affiliated) | **High** — low effort, high user value, aligned with provider preset pattern |
| **Exa native web search provider** | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | **High** — PR open, complete implementation, extends `tools.web` ecosystem |
| **Security hardening (remote exec boundaries, schema v4)** | [#3297](https://github.com/sipeed/picoclaw/pull/3297) | **Medium-High** — security-focused, but schema migration may require minor version bump |
| **Czech i18n completion** | [#3296](https://github.com/sipeed/picoclaw/pull/3296) | **Medium** — trivial, likely merged with next batch |

**Prediction:** Next patch (v0.x.y+1) will likely include Go 1.25.12, Exa provider, SplitMessage fix, and AI Router preset. Security hardening (#3297) may target a minor version due to config schema change.

## 7. User Feedback Summary
- **Pain points:**  
  - Gateway fails unexpectedly due to dormant deltachat code path (#3265) — users hit this on clean installs.  
  - Provider model parsing breaks when model IDs embed provider aliases (#3252) — affects multi-provider setups.  
  - Antigravity users blocked by token refresh regression (#3267).  
- **Use cases driving contributions:**  
  - Managed router integration (AI Router) for simplified multi-model routing.  
  - Exa search for research-heavy workflows (highlights, date filters).  
  - Security-conscious deployments needing exec isolation (#3297).  
- **Sentiment:** Neutral-to-positive; bugs are acknowledged and fixes proposed quickly, but merge latency on ready PRs (#3202 open since Jul 1) causes friction.

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3202](https://github.com/sipeed/picoclaw/pull/3202) | 26 days | Routing ID normalization fix — blocks consistent agent/account ID handling; ready, small, no review. |
| [#3267](https://github.com/sipeed/picoclaw/pull/3267) | 8 days | Antigravity auth fix — unblocks a provider integration; ready, security-adjacent. |
| [#3265](https://github.com/sipeed/picoclaw/issues/3265) | 8 days | Gateway startup crash — affects all users, no config workaround; needs root-cause investigation. |
| [#3297](https://github.com/sipeed/picoclaw/pull/3297) | 1 day | Security hardening — large scope, schema migration; needs design review before merge. |
| [#3298](https://github.com/sipeed/picoclaw/issues/3298) | 1 day | AI Router preset — easy win for ecosystem growth; maintainer-affiliated, should be fast-tracked. |

**Recommendation:** Prioritize review/merge of #3202, #3267, #3295 (all small, ready). Assign #3265 for investigation. Schedule #3297 for security review sprint. Accept #3298 as low-risk feature.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-27

---

## 1. Today's Overview

NanoClaw shows **high maintenance activity** with 10 total updates (2 issues, 8 PRs) in the last 24 hours, but **zero new releases**. The project is in a **post-breaking-change stabilization phase** following the "explicit-destinations" migration — two critical regressions have been filed (#3140, #3136) where pre-existing chat wirings silently drop agent replies. Six open PRs target fixes for message delivery, channel integrations (WhatsApp, Dial), and core runtime compatibility. Two PRs merged today deliver a timezone override feature and a duplicate-reply fix. Overall health: **active but fragile** — migration fallout is the dominant risk.

---

## 2. Releases

**No new releases published today.**  
The last release cycle introduced the **explicit-destinations breaking change** (every `send_message`/`send_file` now requires a named `to` destination). This migration is actively causing silent message loss in upgraded installations (see Issues #3140, #3136). A patch release is likely imminent once the open fix PRs land.

---

## 3. Project Progress (Merged/Closed Today)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3125](https://github.com/nanocoai/nanoclaw/pull/3125) | **Feature** | Per-agent-group IANA timezone override (migration 020); `ncl groups config update --timezone` | Enables multi-region deployments; groups can now run on local time without global config changes |
| [#3028](https://github.com/nanocoai/nanoclaw/pull/3028) | **Fix** | Avoid duplicate replies after `send_message` by capturing outbound sequence at provider-round start | Eliminates double-reply bug in channel adapters; improves user experience in high-throughput chats |

Both PRs are **core-team approved** and merged. The timezone feature adds a new migration (020) — operators should plan DB upgrades.

---

## 4. Community Hot Topics

| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#3140](https://github.com/nanocoai/nanoclaw/issues/3140) | Issue | Created 2026-07-26, 0 comments, 0 👍 | **Migration safety**: Pre-existing wirings lack `own-chat` destination after explicit-destinations change → all agent replies silently dropped. Blocking for any upgraded install with long-standing groups. |
| [#3136](https://github.com/nanocoai/nanoclaw/issues/3136) | Issue | Created 2026-07-26, 0 comments, 0 👍 | **Routing integrity**: `sendToDestination()` falls back to batch `in_reply_to` when destination has no inbound history, stamping unrelated reply-IDs → breaks a2a return-path routing, messages lost. |
| [#3139](https://github.com/nanocoai/nanoclaw/pull/3139) | PR (open) | Created 2026-07-26 | **WhatsApp shared-number mode**: Owner’s own messages (`fromMe`) were blanket-dropped, silencing the account holder. Fix restores owner visibility. |
| [#3137](https://github.com/nanocoai/nanoclaw/pull/3137) | PR (open, core-team) | Created 2026-07-26 | **Engagement policy control**: Agents need to inspect wirings and request approved policy updates; preserves global task-group selection, validates JS regexes. |

**Underlying theme**: The explicit-destinations migration exposed **implicit assumptions** in wiring initialization and reply-path routing. Users need **zero-downtime migration tooling** and **self-serve wiring diagnostics** — both are now being addressed in #3137 and the fix PRs.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Item | Description | Fix PR? |
|----------|------|-------------|---------|
| **Critical** | [#3140](https://github.com/nanocoai/nanoclaw/issues/3140) | Post-migration: all agent replies in pre-existing groups silently dropped (`Unknown destination` in poll-loop). Affects **every upgraded install with legacy wirings**. | No direct PR yet; likely requires migration script + wiring backfill |
| **Critical** | [#3136](https://github.com/nanocoai/nanoclaw/issues/3136) | `sendToDestination()` stamps foreign `in_reply_to` on outbound rows when destination lacks inbound history → breaks a2a return routing, messages lost silently. | No PR yet; fix in `container/agent-runner/src/poll-loop.ts` needed |
| **High** | [#3139](https://github.com/nanocoai/nanoclaw/pull/3139) | WhatsApp shared-number mode drops `fromMe` messages → owner never sees own messages. | **Yes** — #3139 (open, awaiting review) |
| **Medium** | [#3138](https://github.com/nanocoai/nanoclaw/pull/3138) | Chat SDK: attachment without `fetchData` crashes send; fallback to `fetch(url)` missing. | **Yes** — #3138 (open) |
| **Medium** | [#3126](https://github.com/nanocoai/nanoclaw/pull/3126) | Agent runner delivers empty/`<internal>` thinking messages to channels. | **Yes** — #3126 (open, core-team) |

**Stability signal**: Two critical regressions from the same migration, both silent data loss. No hotfix release yet — operators should **delay upgrades** or prepare manual wiring repair.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Per-group timezone override** | Merged #3125 | ✅ **Done** — in next release |
| **Dial channel integration** | [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) (open, feature-skill) | 🟡 **High** — adds new channel + wizard/skills; follows contributing guide; needs review |
| **OpenCode compatibility & custom endpoints** | [#3122](https://github.com/nanocoai/nanoclaw/pull/3122) (open, core-team) | 🟡 **High** — main branch compatibility, custom transport, memory parity; core-team sponsored |
| **Agent self-serve wiring inspection & engagement policy updates** | [#3137](https://github.com/nanocoai/nanoclaw/pull/3137) (open, core-team) | 🟢 **Very High** — directly addresses migration pain; core-team authored; enables ops autonomy |
| **Duplicate-reply prevention** | Merged #3028 | ✅ **Done** |

**Roadmap prediction**: Next patch (likely `v0.x.y+1`) will bundle: #3125, #3028, #3139, #3138, #3126, #3137. #3050 and #3122 may slip to minor release pending review bandwidth.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Silent message loss after upgrade** | #3140, #3136 — both filed same day as migration landing | **Critical**: Users unaware replies aren't delivering; no logs/alerts; breaks trust in agent reliability |
| **WhatsApp owner blindness** | #3139 — shared-number mode drops `fromMe` | **High**: Account holders can't verify bot behavior; manual workarounds needed |
| **Internal thinking leaking to chat** | #3126 — `<internal>` tags delivered to users | **Medium**: UX pollution; confuses end-users in production channels |
| **Attachment send failures** | #3138 — missing `fetchData` crashes | **Medium**: Blocks file/image workflows in custom adapters |
| **Timezone rigidity** | #3125 (merged) — groups forced to install-global TZ | **Resolved**: Now per-group override; positive signal for multi-tenant ops |

**Satisfaction trend**: Negative this week due to migration regressions. Positive signals: core-team responsiveness (3 core-team PRs open/merged today), clear migration path for timezone feature.

---

## 8. Backlog Watch (Needs Maintainer Attention)

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#3140](https://github.com/nanocoai/nanoclaw/issues/3140) | 1 day | **Open, no assignee, no fix PR** | **Highest priority** — every upgraded install affected; needs migration script or automatic `own-chat` wiring backfill |
| [#3136](https://github.com/nanocoai/nanoclaw/issues/3136) | 1 day | **Open, no assignee, no fix PR** | **Critical routing bug** — silent a2a message loss; fix requires `poll-loop.ts` guard for empty inbound history |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | 13 days | **Open, feature-skill, follows guidelines** | New channel (Dial) + wizard; stale despite compliance — review bandwidth? |
| [#3122](https://github.com/nanocoai/nanoclaw/pull/3122) | 4 days | **Open, core-team, follows guidelines** | OpenCode main compat + custom endpoints; core-team authored but no movement — may need dedicated reviewer |
| [#3137](https://github.com/nanocoai/nanoclaw/pull/3137) | 1 day | **Open, core-team** | Self-serve wiring controls; directly unblocks #3140/#3136 operability — should be fast-tracked |

**Recommendation**: Assign #3140 and #3136 to core-team immediately. Cut a **patch release within 48h** once #3139, #3138, #3126, #3137 land. Consider a **migration advisory** in release notes and docs.

---

*Digest generated from GitHub data as of 2026-07-27 00:00 UTC. All links point to live items on github.com/nanocoai/nanoclaw.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-27

---

## 1. Today's Overview

NullClaw shows **minimal repository activity** over the past 24 hours: one open issue (#976) was updated with new comments, while no pull requests were opened, merged, or closed and no new releases were published. The sole active issue describes a **critical, reproducible crash (SIGSEGV) on every inbound Telegram message** on aarch64 Linux, caused by a ~512 KB stack overflow in the inbound worker thread. This crash forces the systemd service into a restart loop, dropping all incoming messages and rendering the gateway unusable on affected architectures. With zero merged fixes or releases today, the project’s immediate health hinges on triaging and resolving this regression.

---

## 2. Releases

**No new releases** in the last 24 hours. The latest published version remains **v2026.5.29** (referenced in the issue).

---

## 3. Project Progress

- **Merged/Closed PRs today:** 0  
- **Open PRs updated today:** 0  

No code changes landed today. The only movement is discussion on the critical crash issue.

---

## 4. Community Hot Topics

| # | Title | Type | Updated | Comments | Reactions | Link |
|---|-------|------|---------|----------|-----------|------|
| 976 | **SIGSEGV on every inbound Telegram message — inbound worker thread spawned with a ~512 KB stack overflows** | Issue (Open) | 2026-07-26 | 3 | 0 | [#976](https://github.com/nullclaw/nullclaw/issues/976) |

**Analysis:**  
- This is the **only active community thread** and it concerns a **hard blocker** for aarch64 deployments.  
- The three comments likely include reproduction details, stack traces, and possibly workarounds (e.g., increasing thread stack size via `pthread_attr_setstacksize` or adjusting systemd `LimitSTACK`).  
- Zero reactions suggest limited visibility; maintainers should consider labeling it `critical`/`aarch64` and pinging platform maintainers.

---

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **Critical (P0)** | [#976](https://github.com/nullclaw/nullclaw/issues/976) | SIGSEGV on **every** inbound Telegram message on aarch64 Linux (v2026.5.29). Worker thread’s default stack (~512 KB) overflows, causing immediate process termination and message loss. Systemd `Restart=always` creates a crash loop. | **No** open/linked PR as of today. |

**Notes:**  
- Affects **all** inbound traffic on aarch64 — no messages are processed.  
- Regression risk: if the stack usage grew recently (e.g., new dependencies, deeper call chains), bisecting between v2026.5.x releases could pinpoint the commit.  
- Mitigation paths: increase thread stack size at spawn, refactor deep recursion/large stack allocations, or guard with `sigaltstack`.

---

## 6. Feature Requests & Roadmap Signals

**No new feature requests or roadmap discussions** appeared in the last 24 hours. The sole issue is a stability bug, not a feature ask.  
*Prediction:* Once #976 is resolved, the next release (likely a patch `v2026.5.x+1` or minor `v2026.6.x`) will focus on aarch64 stability and may include stack-size hardening for worker threads across platforms.

---

## 7. User Feedback Summary

- **Pain point:** aarch64 users (e.g., Raspberry Pi, ARM servers) **cannot receive Telegram messages at all** — every message crashes the gateway.  
- **Use case:** Self-hosted NullClaw gateway as a systemd service (`Restart=always`).  
- **Sentiment:** Frustrated — messages are silently dropped, users get no replies, and the service appears “up” but is functionally dead.  
- **Workarounds tried:** None documented in the issue yet; users may be downgrading or switching architectures.

---

## 8. Backlog Watch

| Item | Type | Age | Status | Why It Needs Attention |
|------|------|-----|--------|------------------------|
| [#976](https://github.com/nullclaw/nullclaw/issues/976) | Bug (Critical) | 11 days (opened 2026-07-16) | Open, no fix PR | **Blocks aarch64 entirely**; crash loop drops all inbound messages. No maintainer response visible in the last 24h. Should be triaged, labeled, and assigned immediately. |

**Recommendation:**  
- Assign #976 to a maintainer familiar with the Telegram inbound worker and threading model.  
- Add a `regression` label if the crash appeared after a specific version.  
- Consider a hotfix release once a patch is ready, given the severity.

---

*Digest generated from GitHub data as of 2026-07-27. Links point to live items on github.com/nullclaw/nullclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-27

---

## 1. Today's Overview

IronClaw shows **high development velocity** with 18 PRs updated and 5 issues active in the last 24 hours. The project is in a **deep refactoring and hardening phase** — no new releases, but significant architectural work around error recoverability (epic #6284), sandbox credential architecture, and MCP (Model Context Protocol) integration. Six PRs were merged/closed today, primarily dependency updates and the Cranelift log suppression fix. The open PR pipeline is dominated by large, low-risk refactors (XL size) and dependency bumps, indicating a focus on technical debt reduction and infrastructure modernization ahead of v1 launch. Community engagement remains low on individual items (0–8 comments, 0 reactions), suggesting internal/team-driven development.

---

## 2. Releases

**No new releases today.** The latest release PR (#5598, opened 2026-07-03) remains open, proposing breaking changes across `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0). This release appears blocked on the current refactoring wave.

---

## 3. Project Progress — Merged / Closed PRs (Last 24h)

| PR | Title | Scope | Status |
|----|-------|-------|--------|
| [#6679](https://github.com/nearai/ironclaw/pull/6679) | Harden struct ratchet and remove dead Gemini API | `core`, `dependencies` | **Merged** — Replaces line-oriented scanner with `syn` parsing for `cfg_attr`/`impl` headers; adds regression tests |
| [#6640](https://github.com/nearai/ironclaw/pull/6640) | build(deps): bump everything-else group (31 updates) | `dependencies`, `rust` | **Closed** — Superseded by #6687 |
| [#4032](https://github.com/nearai/ironclaw/pull/4032) | chore(deps): bump wasm group (2 updates) | `dependencies`, `rust`, `wasm` | **Closed** — `wit-component` 0.245.1 → 0.253.0 |
| [#5369](https://github.com/nearai/ironclaw/pull/5369) | fix(reborn): suppress Cranelift debug log floods | `reborn`, `logging` | **Merged** — Adds Cranelift/Wasmtime targets to noisy log guard; extends regression test |
| [#6365](https://github.com/nearai/ironclaw/pull/6365) | [reference] P2b: per-user hosted-MCP discovery | `mcp`, `extensions`, `sandbox`, `cli`, `web` | **Closed** — Superseded by clean rebase #6683 |
| [#6677](https://github.com/nearai/ironclaw/pull/6677) | test(reborn): compile-forced recoverability conformance matrix | `reborn`, `testing`, `epic:#6284` | **Closed** — Superseded by #6684 |

**Key advances:**  
- Struct ratchet hardened with proper AST parsing (eliminating false negatives in API compatibility checks)  
- Cranelift/Wasmtime debug log spam eliminated in Reborn runtime  
- Recoverability conformance matrix implemented and test-driven (epic #6284 item 7)  
- Dead Gemini API code removed  

---

## 4. Community Hot Topics

| Item | Type | Comments | 👍 | Core Signal |
|------|------|----------|----|-------------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | **Issue (Epic)** | 8 | 0 | **Error recoverability endgame** — Defines contract: every mid-run error must be survivable, model-visible, causal, actionable, and never silently fail. Drives PRs #6677, #6681, #6684. |
| [#6684](https://github.com/nearai/ironclaw/pull/6684) | **PR (XL)** | — | 0 | **One failure vocabulary** — Collapses 5 failure-kind enums into single `FailureKind` (35 variants) with fate projections; fixes 4 wrongful-terminal bugs. Directly implements epic #6284. |
| [#6683](https://github.com/nearai/ironclaw/pull/6683) | **PR (XL)** | — | 0 | **P2b: per-user hosted-MCP discovery** — Clean rebase of worker-agent MCP connector tools onto post-#6116 `main`; uses scope-free `ToolResolver`. |
| [#6690](https://github.com/nearai/ironclaw/issues/6690) | **Issue (Bug)** | 0 | 0 | **Chat hangs on "thinking…" when out of NEAR AI credits** — No user notification; silent failure. Tagged `v1-launch-checklist`. |

**Underlying needs:**  
- **Reliability contract enforcement** — The team is codifying a formal error-handling contract (survive → observe → diagnose → act → never silent) across the entire stack.  
- **MCP as first-class primitive** — Per-user, per-hire MCP discovery suggests a shift toward multi-tenant, agent-as-a-service architecture.  
- **v1 launch hardening** — Silent credit-exhaustion hang (#6690) is a launch blocker; user-facing error surfacing is a priority.

---

## 5. Bugs & Stability — Reported Today

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High (Launch Blocker)** | [#6690](https://github.com/nearai/ironclaw/issues/6690) | Chat hangs indefinitely on "thinking…" when user exhausts NEAR AI credits; zero notification. User discovers only by logging into dashboard. | **No** — Filed today, no linked PR |
| **Medium** | [#6682](https://github.com/nearai/ironclaw/issues/6682) | Daily failure taxonomy: Clawbench shows 82 non-pass runs dominated by "genuine model-quality partial completions" — agent produces valid, self-verified but incomplete work. | **No** — Taxonomy/analysis only |
| **Low (Dead Code)** | [#6686](https://github.com/nearai/ironclaw/issues/6686) | `DockerProcessSandboxBackend` is dead code (no production constructor, no tests, superseded by persistent sandbox). | **No** — Removal tracked, no PR yet |

**Note:** The recoverability epic (#6284) and its PRs (#6684, #6681) are *proactive* stability investments — not reactions to reported bugs.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Unified model-visible safe text** — Collapse `SafeSummary`, `LoopSafeSummary`, `ToolResultSafeSummary`, `ModelResultPreview` into single screened-core + typed views | [#6688](https://github.com/nearai/ironclaw/issues/6688) (Issue, today) | **High** — Architectural cleanup, low risk, supports recoverability contract |
| **Sandbox credential placeholder registry** — Stable `icsbx_` tokens instead of real secrets in containers; `CredentialSession` minted JIT per invocation | [#6689](https://github.com/nearai/ironclaw/pull/6689) (PR, XL, open) | **High** — Security hardening, unwired but designed |
| **Per-user hosted MCP discovery** — Worker agents get per-hire connector tools via scope-free `ToolResolver` | [#6683](https://github.com/nearai/ironclaw/pull/6683) (PR, XL, open) | **High** — Clean rebase of P2b work, core to multi-tenancy |
| **Signed intent + per-agent key lifecycle** — Cryptographic attestation of agent-crafted transactions (Phase B of Ledger revival) | [#6672](https://github.com/nearai/ironclaw/pull/6672) (PR, XL, open) | **Medium** — Part of larger "Superpowers" spec; may land post-v1 |
| **Mutation audit harness fixes** — Run escape-history targets; fix harness bug that blocked output | [#6681](https://github.com/nearai/ironclaw/pull/6681) (PR, M, open) | **Medium** — Quality infrastructure, enables regression prevention |

**Prediction:** Next version will ship the **recoverability contract implementation** (#6684), **MCP per-user discovery** (#6683), and **credential placeholder registry** (#6689) — all XL, low-risk, core-infrastructure PRs currently open.

---

## 7. User Feedback Summary

**Direct user pain (1 report today):**  
- **Credit exhaustion = silent hang** ([#6690](https://github.com/nearai/ironclaw/issues/6690)) — User sees "thinking…" forever with no error, toast, or fallback. Only discovers cause by leaving the app. This violates the recoverability contract (item **e**: "no non-success is ever reported without user-facing explanation").

**Implicit feedback from failure taxonomy ([#6682](https://github.com/nearai/ironclaw/issues/6682)):**  
- 82 non-pass Clawbench runs → **"genuine model-quality partial completions"** — Agents produce *valid, self-verified* but *incomplete* work. Suggests users experience "almost working" agents that stall before finish line.  
- Root cause framed as **model quality**, not infrastructure — but recoverability contract aims to make these partials *recoverable* (model sees error, gets turn to act).

**No positive/negative sentiment signals** (0 reactions on all items). Development appears internally driven.

---

## 8. Backlog Watch — Stale / Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#5598](https://github.com/nearai/ironclaw/pull/5598) | **24 days** (opened 2026-07-03) | **Release PR** with breaking changes in `ironclaw_common` (0.5.0) and `ironclaw_skills` (0.4.0). Blocked by current refactor wave. | **Open** — Bot-authored, needs maintainer decision: ship pre-refactor or wait? |
| [#5664](https://github.com/nearai/ironclaw/pull/5664) | **22 days** (opened 2026-07-05) | **GitHub Actions deps**: 16 updates including `actions/checkout` 4→7, `claude-code-action` 1.0.88→1.0.183. Security/maintenance. | **Open** — Dependabot, low risk, mergeable |
| [#6672](https://github.com/nearai/ironclaw/pull/6672) | **2 days** (opened 2026-07-25) | **Signed intent + per-agent key lifecycle** (Phase B of Ledger revival). Large (XL), cross-cutting crypto/auth. | **Open** — Core contributor (zmanian), needs review bandwidth |
| [#6652](https://github.com/nearai/ironclaw/pull/6652) | **3 days** (opened 2026-07-24) | **systemd unit fix**: `WorkingDirectory=` quoting bug breaks `ironclaw onboard` on Linux (#6575). User-facing install break. | **Open** — Small (M), low risk, fixes real user issue |
| [#6686](https://github.com/nearai/ironclaw/issues/6686) | **1 day** (opened 2026-07-26) | **Dead code removal**: `DockerProcessSandboxBackend` — no constructor, no tests, superseded. Cleanup reduces attack surface. | **Open** — No PR yet; trivial win |

**Recommendation:** Prioritize merging #6652 (user-facing fix), #5664 (security hygiene), and #6686 (dead code). Decide fate of release PR #5598 — either cut a "pre-recoverability" release or rebase it atop #6684.

---

## Project Health Indicators

| Metric | Signal |
|--------|--------|
| **PR throughput** | 6 merged/closed, 12 open — healthy flow |
| **Issue:PR ratio** | 5:18 — PR-heavy (refactor-driven) |
| **External contributions** | 1 new-contributor PR (#6683), 1 regular (#5369) — modest |
| **Launch readiness** | **Blocked** by #6690 (silent credit failure) and release PR #5598 |
| **Technical debt** | Actively paying down: dead code removal, enum consolidation, log spam, struct ratchet |
| **Architectural clarity** | **Improving** — Recoverability contract + unified failure vocab + MCP scope-free resolver = stronger contracts |

**Bottom line:** IronClaw is in a **disciplined pre-v1 hardening sprint**. The team is systematically eliminating ambiguity in error handling, sandbox security, and agent-tool contracts. Velocity is high, but the release train is paused. The next 1–2 weeks will likely see the recoverability epic land, the MCP rebase merge, and a release cut — *if* the credit-exhaustion bug (#6690) gets a fix.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-27

---

## 1. Today's Overview

LobsterAI shows **moderate maintenance activity** with 10 total updates (2 issues, 8 PRs) in the last 24 hours, but **zero new releases**. The project appears to be in a **feature refinement and bug-fixing phase** with several long-running PRs (created April 2026, updated today) finally receiving attention. Notably, 7 of 8 PRs carry the `[stale]` label, indicating a backlog of contributions awaiting review/merge. The single merged PR (#1325) is a minor UX polish, while the closed issue (#273) reflects ongoing community demand for Linux support. No critical security or regression fixes were shipped today.

---

## 2. Releases

**No new releases published today.**  
The latest version remains **2026.4.1** (referenced in Issue #1243). No release notes, breaking changes, or migration guides to report.

---

## 3. Project Progress

### Merged / Closed Today
| PR / Issue | Type | Summary | Impact |
|------------|------|---------|--------|
| [#1325](https://github.com/netease-youdao/LobsterAI/pull/1325) | **PR Merged** | Added hover tooltips (`title` attribute) to "New Chat" icon buttons in collapsed sidebar across 4 views (`CoworkView`, `CoworkSessionDetail`, `AgentsView`, `McpView`) | Low — UX polish only |
| [#273](https://github.com/netease-youdao/LobsterAI/issues/273) | **Issue Closed** | Feature request: Ubuntu/Linux desktop support | Closed without implementation; signals unmet platform demand |

### Open PRs Updated Today (All `[stale]`, Created 2026-04-01)
| PR | Area | Key Changes |
|----|------|-------------|
| [#1247](https://github.com/netease-youdao/LobsterAI/pull/1247) | **OpenClaw / Model Switching** | Detects runtime `app_config` model/provider changes; restarts/defer-restarts OpenClaw; emits per-agent `model.primary` into `openclaw.json`; migrates session stores across all agent workspaces |
| [#1249](https://github.com/netease-youdao/LobsterAI/pull/1249) | **Cowork / DiffView** | Fixes `DiffView` not rendering for Edit tools — expands tool-name matching to cover Claude SDK (`str_replace_editor`, `TextEditor`) and OpenClaw (`file_editor`) actual tool names |
| [#1252](https://github.com/netease-youdao/LobsterAI/pull/1252) | **Scheduled Tasks / UX** | Adds unsaved-changes confirmation modal (amber warning style, a11y-compliant) on form cancel/back navigation; uses `useMemo` snapshot diff for dirty-check |
| [#1256](https://github.com/netease-youdao/LobsterAI/pull/1256) | **Scheduled Tasks / Natural Language** | Adds natural-language schedule input via LLM-powered `scheduleParser` (converts to cron/timestamp); toggle between natural-language & manual modes; locks mode on edit |
| [#1257](https://github.com/netease-youdao/LobsterAI/pull/1257) | **i18n** | Adds missing `edit` / `delete` translation keys for zh/en (used in `Settings.tsx` memory management buttons) |
| [#1258](https://github.com/netease-youdao/LobsterAI/pull/1258) | **Scheduled Tasks / UX** | Duplicate of #1252 — same unsaved-changes confirmation for task form cancel/back |
| [#1259](https://github.com/netease-youdao/LobsterAI/pull/1259) | **OpenClaw / Gateway** | Optimizes gateway bundling: stub packages for external IM SDKs; patches chalk v4 CJS bundle; injects `LOBSTER_API_KEY` env alias for provider key fallback |

> **Note:** PRs #1252 and #1258 appear to address the same UX issue (unsaved changes confirmation in scheduled task form) by different authors — potential duplication.

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [Issue #1243](https://github.com/netease-youdao/LobsterAI/issues/1243) | **1 comment**, updated today; `[BUG]` `qwen-portal-auth` plugin causes config rewrite loop → OpenClaw gateway restarts every 5–20 min | **Critical stability blocker** — users on Windows 10/11 experience frequent "AI engine starting gateway" popups, making the app unreliable. No fix PR linked yet. |
| [Issue #273](https://github.com/netease-youdao/LobsterAI/issues/273) | **2 comments**, closed today; `[Suggestion]` Ubuntu/Linux version | **Platform expansion demand** — closed without action, but 2 comments indicate sustained interest. May resurface as new issue. |
| [PR #1247](https://github.com/netease-youdao/LobsterAI/pull/1247) | **OpenClaw model-switch recovery** — core architecture change for provider limit handling | **Enterprise/Production readiness** — addresses graceful degradation when providers hit rate limits. High technical complexity. |
| [PR #1259](https://github.com/netease-youdao/LobsterAI/pull/1259) | **Gateway bundling refactor** — stub packages, chalk patch, env var injection | **Build reliability & deployment** — fixes missing named exports from external SDKs, improves gateway startup resilience. |

**Analysis:** The community's loudest pain point is **gateway instability (Issue #1243)**. The `[stale]` PRs cluster around **scheduled-task UX** (#1252, #1256, #1258) and **OpenClaw robustness** (#1247, #1259), suggesting the team is prioritizing "power user" workflows (automation, multi-agent) over core stability fixes.

---

## 5. Bugs & Stability

| Severity | Issue / PR | Status | Fix PR? |
|----------|------------|--------|---------|
| **Critical** | [#1243](https://github.com/netease-youdao/LobsterAI/issues/1243) — `qwen-portal-auth` config loop → gateway restart every 5–20 min (Windows 10/11, v2026.4.1) | **Open**, updated today | ❌ No linked PR |
| **High** | [#1249](https://github.com/netease-youdao/LobsterAI/pull/1249) — `DiffView` fails to render for Edit tools (Claude SDK, OpenClaw) | **Open PR**, stale | ✅ PR #1249 (awaiting review) |
| **Medium** | [#1257](https://github.com/netease-youdao/LobsterAI/pull/1257) — Missing `edit`/`delete` i18n keys causing UI fallback | **Open PR**, stale | ✅ PR #1257 (awaiting review) |
| **Low** | [#1325](https://github.com/netease-youdao/LobsterAI/pull/1325) — Missing hover tooltip on "New Chat" icon | **Merged** | ✅ Fixed |

**Stability Assessment:** One **unresolved critical regression** (gateway restart loop) affects all Windows users on current version. Two high-impact UI bugs have fix PRs stuck in `[stale]` limbo. No evidence of automated regression testing for gateway config changes.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Linux/Ubuntu desktop support** | Issue #273 (closed but 2 comments) | ⚠️ Low — closed without commit, but demand persists |
| **Natural-language scheduling** | PR #1256 (LLM→cron parser, mode toggle) | ✅ High — PR complete, UX polished, aligns with "AI-first" positioning |
| **Unsaved-changes protection in forms** | PRs #1252, #1258 (duplicate) | ✅ High — trivial UX fix, two implementations ready |
| **Per-agent model config in OpenClaw** | PR #1247 (model.primary in openclaw.json) | ✅ High — architectural, enables true multi-agent model switching |
| **Gateway bundling robustness** | PR #1259 (stubs, chalk patch, env fallback) | ✅ High — reduces deployment friction, no UI risk |
| **DiffView support for all Edit tool variants** | PR #1249 | ✅ High — restores core cowork visibility |

**Prediction:** Next version (likely **2026.5.x** or **2026.6.0**) will ship: natural-language scheduling, unsaved-changes modals, DiffView fix, i18n keys, and OpenClaw model-switch improvements. **Linux support and gateway restart bug remain unresolved risks.**

---

## 7. User Feedback Summary

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Gateway instability** — "AI engine starting gateway" popup every 5–20 min, disrupts workflow | Issue #1243: "严重影响使用体验" (severely impacts UX), Windows 10/11, v2026.4.1 | All Windows users on current version |
| **No Linux support** — Cannot run on Ubuntu | Issue #273: "希望能在Linux上运行" | Linux developers / self-hosters |
| **Invisible diffs in cowork** — Edit tool changes show raw JSON only | PR #1249: "用户只能看到原始工具输入/输出文本" | All cowork users (Claude SDK, OpenClaw) |
| **Accidental data loss in task forms** — No confirmation on cancel/back | PRs #1252, #1258: "所有内容立即丢失，无任何确认提示" | Scheduled-task creators/editors |
| **Missing button labels (i18n)** — "edit"/"delete" show as keys | PR #1257: keys used in `Settings.tsx` but undefined | Non-English users, accessibility |

**Satisfaction Signals:** No positive feedback (👍, praise comments) in today's data. Community interaction is purely **problem-reporting and fix-contribution**.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [Issue #1243](https://github.com/netease-youdao/LobsterAI/issues/1243) | **~118 days** (created 2026-04-01) | **Critical** — gateway restart loop blocks production use on Windows | **Urgent:** Assign maintainer to root-cause `qwen-portal-auth` config loop; ship hotfix or workaround |
| [PR #1247](https://github.com/netease-youdao/LobsterAI/pull/1247) | **~118 days** | High — core OpenClaw model-switch logic, complex migration | **Review needed:** Deep architectural change; requires test plan for session-store migration |
| [PR #1249](https://github.com/netease-youdao/LobsterAI/pull/1249) | **~118 days** | High — restores visible diffs for all engine tool variants | **Quick win:** Small, focused fix; merge after CI pass |
| [PR #1259](https://github.com/netease-youdao/LobsterAI/pull/1259) | **~118 days** | Medium — gateway build reliability, affects all deployments | **Review needed:** Chalk patch + stub packages; verify no runtime side effects |
| [PR #1252](https://github.com/netease-youdao/LobsterAI/pull/1252) / [#1258](https://github.com/netease-youdao/LobsterAI/pull/1258) | **~118 days** | Low — duplicate UX fix | **Deduplicate & merge:** Pick one implementation, close other |
| [Issue #273](https://github.com/netease-youdao/LobsterAI/issues/273) | **~480 days** (created 2026-03-05) | Medium — platform gap | **Decision needed:** Reopen with roadmap commitment or close with "wontfix" + rationale |

---

## Summary Metrics (24h)

| Metric | Count |
|--------|-------|
| Issues Updated | 2 |
| PRs Updated | 8 |
| PRs Merged | 1 |
| Issues Closed | 1 |
| Critical Bugs Open | 1 |
| Stale PRs (>90 days) | 7 |
| New Releases | 0 |

**Health Indicator:** 🟡 **Caution** — Active contribution pipeline but **review bottleneck** (7 stale PRs), **one critical unresolved regression**, and **no release cadence**. Recommend: prioritize Issue #1243 triage, batch-merge stale PRs (#1249, #1252/#1258, #1257, #1256), and communicate Linux support stance.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-27

## 1. Today's Overview
Moltis shows **high development velocity** with **8 active pull requests** updated in the last 24 hours, all authored by core maintainers (penso, demyanrogozhin, shixi-li). No issues were filed or updated, and no releases shipped. The PR batch spans **memory backends, PWA reliability, ACP protocol bidirectional support, Slack/Buzz/Nostr integrations, security hardening, and UI polish** — indicating a sprint focused on platform extensibility, multi-protocol interop, and production hardening. Zero merged PRs today suggests these are in review or awaiting CI.

---

## 2. Releases
**No new releases** in the last 24 hours.

---

## 3. Project Progress
**No PRs merged or closed today.** All 8 PRs remain open and were updated today (2026-07-26). Key workstreams advancing:

| PR | Area | Status |
|----|------|--------|
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | Memory: `zvec` + `redb` vector backend (feature-gated) | Open, created 2026-07-17 |
| [#1173](https://github.com/moltis-org/moltis/pull/1173) | PWA: reliable, non-disruptive push notifications (fixes silent replacement bug) | Open |
| [#1171](https://github.com/moltis-org/moltis/pull/1171) | UX: move ACP client selection into chat model picker, remove header selector | Open |
| [#1169](https://github.com/moltis-org/moltis/pull/1169) | ACP: expose Moltis as an **ACP agent** over stdio (new `crates/acp`) | Open |
| [#1166](https://github.com/moltis-org/moltis/pull/1166) | Slack: per-message ack reactions, phases, reconnect supervision, Block Kit | Open |
| [#1172](https://github.com/moltis-org/moltis/pull/1172) | Web: hide archived cron sessions by default + Playwright regression test | Open |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | Security: gate `/sh` and privileged tools behind per-account operators list | Open |
| [#1168](https://github.com/moltis-org/moltis/pull/1168) | Nostr: NIP-29 group chat support for Buzz channels | Open |

---

## 4. Community Hot Topics
**No community issues or discussions** in the last 24h — all activity is maintainer-driven PRs. Zero comments/reactions recorded on any PR. The "hot topics" are effectively the **maintainer roadmap** being executed in parallel:

- **Bidirectional ACP** (#1169 + #1171): Making Moltis both an ACP client *and* agent, plus unifying model/agent selection UX — signals a push to become a first-class node in the ACP ecosystem (Zed, buzz-acp, custom runners).
- **Multi-protocol bridging** (#1168 Nostr/NIP-29, #1166 Slack, #1173 PWA): Moltis is hardening its role as a universal gateway across Slack, Nostr/Buzz, and web push.
- **Security hardening** (#1170): Closing arbitrary command execution via `/sh` in group contexts — critical for multi-tenant deployments.

---

## 5. Bugs & Stability
**No new bug reports** filed today. However, two PRs address known bugs:

| PR | Bug | Severity | Fix Status |
|----|-----|----------|------------|
| [#1173](https://github.com/moltis-org/moltis/pull/1173) | PWA push notifications **silently replace** prior messages in same session (missing `renotify`) — no sound/alert, earlier message lost | **High** (user-facing data loss) | Open, fix implemented |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | `/sh` command executable by **any channel member** passing access gate — arbitrary host command execution in group chats | **Critical** (RCE vector) | Open, authorization gate added |

No crashes or regressions reported.

---

## 6. Feature Requests & Roadmap Signals
All 8 PRs are **maintainer-initiated features** — no external feature requests in this window. Strong signals for next version (v0.x or v1.0):

| Feature | PR | Likelihood |
|---------|-----|------------|
| **Moltis as ACP agent** (stdio) | [#1169](https://github.com/moltis-org/moltis/pull/1169) | ★★★★★ — new crate, strategic |
| **Unified model/agent picker** (ACP + providers) | [#1171](https://github.com/moltis-org/moltis/pull/1171) | ★★★★★ — UX consolidation |
| **Nostr NIP-29 / Buzz interop** | [#1168](https://github.com/moltis-org/moltis/pull/1168) | ★★★★☆ — niche but differentiated |
| **Zvec vector memory backend** | [#1158](https://github.com/moltis-org/moltis/pull/1158) | ★★★☆☆ — experimental, feature-gated |
| **Slack Block Kit + phase acks** | [#1166](https://github.com/moltis-org/moltis/pull/1166) | ★★★★☆ — production hardening |
| **PWA notification reliability** | [#1173](https://github.com/moltis-org/moltis/pull/1173) | ★★★★★ — user-visible fix |
| **Cron session archive UX** | [#1172](https://github.com/moltis-org/moltis/pull/1172) | ★★★☆☆ — polish + test |
| **Operator-gated privileged tools** | [#1170](https://github.com/moltis-org/moltis/pull/1170) | ★★★★★ — security prerequisite |

**Prediction**: Next release will bundle ACP agent mode, unified picker, Slack/Nostr hardening, and the `/sh` security fix — a "platform maturity" milestone.

---

## 7. User Feedback Summary
**No direct user feedback** (issues, discussions, reactions) captured in the last 24h. Inferred pain points from PRs:

- **PWA users** losing notifications in active chats (#1173) — "earlier message gone, no alert"
- **Multi-tenant/guild admins** exposed to arbitrary `/sh` execution (#1170) — "arbitrary host command execution"
- **ACP ecosystem users** (Zed, buzz-acp) unable to use Moltis as agent (#1169) — "inverse did not exist"
- **Buzz/Nostr teams** blocked by missing NIP-29 support (#1168) — "previously spoke only NIP-01 DMs"
- **Cron users** cluttered by archived runs (#1172) — "hidden by default" preference ignored in Cron tab

Satisfaction signal: maintainers are **proactively fixing** known sharp edges before users file issues.

---

## 8. Backlog Watch
**No stale issues or PRs** in the provided data (all 8 PRs updated today). However, watch these if they linger:

| Item | Age | Risk |
|------|-----|------|
| [#1158](https://github.com/moltis-org/moltis/pull/1158) `zvec` memory backend | 10 days (created 2026-07-17) | Experimental, "vibe-coded," feature-gated — may need design review before merge |
| [#1166](https://github.com/moltis-org/moltis/pull/1166) Slack Block Kit + supervision | 3 days | Builds on #1165 (merged) — ensure CI passes reconnect supervision tests |
| [#1168](https://github.com/moltis-org/moltis/pull/1168) Nostr NIP-29 | 2 days | New protocol surface — verify NIP-42 auth + relay interop |

**Maintainer attention needed**: Review queue is full (8 concurrent PRs). Prioritize security fix (#1170) and PWA bug (#1173) for fastest merge; batch ACP agent + picker (#1169, #1171) together.

---

*Data source: GitHub API (moltis-org/moltis) — 2026-07-27 00:00 UTC snapshot*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-07-27

## 1. Today's Overview
CoPaw shows **high community engagement** with 17 issues and 9 PRs updated in the last 24 hours, though **no PRs were merged** and **no releases shipped**. The project is in active bug-fix and feature-development mode post-v2.0.1, with multiple first-time contributors stepping up. Critical infrastructure bugs (MCP transport, cron scheduler, Windows PATH) dominate the issue tracker, while PRs focus on i18n, test coverage, and architectural improvements (unified browser SDK, visual context compression).

---

## 2. Releases
**No new releases today.** Current version remains **v2.0.1** (Windows exe installer). Several open issues (#6470, #6471, #6473, #6474) indicate regressions or gaps in v2.0.1 that will likely drive a patch release.

---

## 3. Project Progress
*No PRs merged or closed today.* All 9 active PRs remain open. Notable work in review:
- **#6456** (Visual Compact) — Adds context compression for long agent histories with profitability gating and exact-content recovery.
- **#6276** (Unified Browser SDK) — Major architectural refactor: control-plane/execution-plane split with socketpair transport.
- **#6387** (Channels on-demand install) — Moves channel SDKs to optional deps with Console-driven installation and version repair.
- **#6284** (qwenpaw-creator app) — New `app`-type plugin for script→assets→storyboard→video workflow.

---

## 4. Community Hot Topics

| Item | Activity | Core Need |
|------|----------|-----------|
| **[#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470)** MCP driver ignores `transport: streamable_http` config (hardcoded SSE) | 4 comments, 3 duplicate issues (#6468, #6469) | **Critical infra bug** — MCP servers using streamable_http are completely broken; users cannot load tools. |
| **[#6342](https://github.com/agentscope-ai/QwenPaw/issues/6342)** How to verify ReMe embedding model is working (no vector files observed) | 3 comments, 1 👍 | **Observability gap** — Users configure embeddings but lack confirmation vectors are generated/stored. |
| **[#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239)** Windows PATH concatenation drops `;` between User+Machine PATH, breaking npm globals | 3 comments | **Windows dev-environment breakage** — Child processes lose access to globally installed tools. |
| **[#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473)** Official "Agent Kanban" plugin fails to install (`No module named 'qwenpaw.pawapp'`) | 2 comments | **Plugin ecosystem breakage** — Flagship plugin unavailable on Desktop 2.0.1. |
| **[#6484](https://github.com/agentscope-ai/QwenPaw/pull/6484)** Traditional Chinese (zh-TW) localization | First-time contributor PR, closes #6478 | **i18n expansion** — Community-driven localization for Taiwan/HK users. |

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | **[#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470)** MCP `streamable_http` transport ignored — hardcoded `sse_client` | Open | **[#6483](https://github.com/agentscope-ai/QwenPaw/pull/6483)** adds regression test (first-time contributor) |
| **High** | **[#6471](https://github.com/agentscope-ai/QwenPaw/issues/6471)** Cron jobs misfire after event loop idle (APScheduler AsyncIOScheduler) | Open | **[#6481](https://github.com/agentscope-ai/QwenPaw/pull/6481)** adds keepalive task (first-time contributor) |
| **High** | **[#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473)** Agent Kanban plugin install fails: `No module named 'qwenpaw.pawapp'` | Open | None |
| **High** | **[#6474](https://github.com/agentscope-ai/QwenPaw/issues/6474)** `view_video` reports success but video DataBlock dropped before reaching LLM | Open | None |
| **Medium** | **[#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239)** Windows PATH concatenation drops `;` separator | Open | None |
| **Medium** | **[#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476)** Matrix E2E encryption unusable (missing `olm`/`vodozemac` wiring) | Open | None |
| **Medium** | **[#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480)** `nohup`/`&` background commands hang agent indefinitely | Open | None |
| **Medium** | **[#6482](https://github.com/agentscope-ai/QwenPaw/issues/6482)** Console UI lags on chat/agent switch, shows stale content | Open | None |
| **Low** | **[#6472](https://github.com/agentscope-ai/QwenPaw/issues/6472)** JSON files lose line numbers in coding mode after 2.0.0→2.0.1 | Open | None |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood for Next Version |
|---------|----------|----------------------------|
| **`notice_after_complete` tool** — async task completion notifications | [#6475](https://github.com/agentscope-ai/QwenPaw/issues/6475) | Medium — clear UX value for long-running tasks |
| **Cron safety defaults & notification granularity** (tool safety check default OFF is dangerous) | [#6458](https://github.com/agentscope-ai/QwenPaw/issues/6458) | High — safety-related, aligns with cron fixes in #6481 |
| **Traditional Chinese (zh-TW) support** | [#6484](https://github.com/agentscope-ai/QwenPaw/pull/6484) | **High** — PR ready, first-time contributor, low risk |
| **Visual context compression** (PawFocus) | [#6456](https://github.com/agentscope-ai/QwenPaw/pull/6456) | Medium — architectural, needs review |
| **Unified browser SDK** (control/execution plane split) | [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | Low for patch — major refactor, likely v2.1+ |
| **qwenpaw-creator app** (video creation workflow) | [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | Medium — plugin-based, isolated risk |

---

## 7. User Feedback Summary

**Pain Points:**
- **MCP broken for streamable_http** — multiple users independently reported, duplicates filed (#6468, #6469, #6470)
- **Plugin installation broken** — official Agent Kanban plugin unusable on Desktop 2.0.1 (#6473)
- **Cron reliability** — scheduled tasks silently skipped after idle periods (#6471)
- **Windows dev environment** — PATH corruption breaks npm/node tooling (#6239)
- **UI performance** — Edge/Wayland high CPU (#6460), Console switch lag (#6482)
- **Video input silent failure** — `view_video` claims success but model never receives frames (#6474)

**Positive Signals:**
- **Active first-time contributors** — 5 PRs from new contributors in 24h (#6481, #6483, #6484, #6479, #6477)
- **Community self-organizing** — users filing detailed diagnostics (e.g., #6470 root cause analysis)
- **i18n momentum** — zh-TW PR opened same day as request (#6478 → #6484)

---

## 8. Backlog Watch (Needs Maintainer Attention)

| Item | Age | Why It Matters |
|------|-----|----------------|
| **[#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239)** Windows PATH `;` drop | 9 days | Blocks Windows developers using npm globals; no PR yet |
| **[#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460)** Edge/Wayland high CPU | 2 days | Linux Desktop users on Wayland + Edge affected; needs profiling |
| **[#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476)** Matrix E2E encryption | 1 day | Security feature completely non-functional; dependency wiring issue |
| **[#6456](https://github.com/agentscope-ai/QwenPaw/pull/6456)** Visual Compact (PawFocus) | 3 days | Large feature PR, no review activity; context compression is strategic |
| **[#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276)** Unified Browser SDK | 7 days | Major architectural PR, "Under Review" but stale; unblocks browser automation |
| **[#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284)** qwenpaw-creator app | 7 days | New app-type plugin pattern; expands plugin ecosystem |

---

**Health Indicators:** 🟡 **Caution** — High bug throughput post-v2.0.1, zero merges today, but strong community contributor influx. Critical MCP and cron bugs have test/fix PRs ready (#6481, #6483) — merging these should be priority for v2.0.2.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-27

## 1. Today's Overview
ZeroClaw shows **intense maintenance activity** with 50 issues and 50 PRs updated in the last 24 hours. The project is in a **stabilization and hardening phase**: no new releases, but significant effort on cross-platform compatibility (Windows/macOS CI), security hardening (Landlock sandbox, SSRF protection, API key leakage), memory/performance fixes (MCP tool-schema cloning, zombie processes), and channel reliability (Telegram, WhatsApp, Nextcloud Talk). Two PRs merged (#9233 fixing Landlock self-locking, #9376 preparing v0.8.4 release). The backlog contains multiple P1/priority:high bugs affecting core workflows, indicating the team is actively tackling technical debt before the next release.

## 2. Releases
**No new releases today.**  
PR #9376 (*chore(release): cut v0.8.4*) is open and preparing the next release: workspace publish to crates.io (18 crates), root package rename `zeroclawlabs` → `zeroclaw`, changelog generation, and crate removals. This will be the first crates.io publish since the microkernel split (#5811).

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Impact |
|----|-------|--------|
| **#9233** (CLOSED) | `fix(runtime/security): Prevent landlock locks zeroclaw itself` | Critical fix: Landlock sandbox was locking the daemon itself after first shell command, causing subsequent commands to fail. Enables secure sandboxing on Linux. |
| **#9376** (OPEN, release prep) | `chore(release): cut v0.8.4 — crates.io publishing, changelog, crate removals` | Release candidate preparing first crates.io publish in months; renames root package to `zeroclaw` for `cargo install zeroclaw` parity. |

## 4. Community Hot Topics (Most Comments/Engagement)

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| **#7462** | Issue | 14 | **Windows support gap**: 74 test failures on Windows (Unicode paths, console encoding, Unix-only commands). CI only runs on Linux. Blocking cross-platform parity. |
| **#9101** | Issue | 7 | **Release signing consolidation**: Three redundant provenance mechanisms (cosign, GitHub attestations, SLSA) doubling CI time and asset count (53 → ~20). |
| **#5514** | Issue | 6 | **Telegram media groups**: Multiple images sent as separate turns instead of one multimodal turn, causing duplicate agent responses. |
| **#6157** | Issue | 6 | **Nextcloud Talk API misuse**: Wrong bot message endpoint causing send failures. PR #9181 addresses this. |
| **#8654** | Issue | 5 | **Skill-review fork panic**: Out-of-bounds slice in `skills/review.rs:159` → daemon SIGSEGV after tool-heavy turns. Memory safety blocker. |
| **#7108** | Issue | 4 | **CI performance**: 15-20 min PR CI; Rust caching and job scheduling need optimization. |
| **#8559** | Issue | 4 | **Web dashboard agent interruption**: Exiting chat window stops agent work (S1 workflow blocked). |
| **#8973** | Issue | 4 | **Landlock blocks `/dev/null`**: Shell tool fails on Fedora when sandbox enabled. PR #9114 in progress. |

**Underlying theme**: Users hit **platform gaps (Windows/mobile), security tooling friction (Landlock, signing), and channel reliability** — all signals of a project scaling beyond its original Linux/CLI niche.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **S1 (workflow blocked)** | #8559: Web dashboard exiting chat stops agent loop | Open, in-progress | — |
| **S1** | #9035: Docker Compose gateway loopback-bound behind published port | Open, in-progress | — |
| **S1** | #9085: Nested runtime panic in `try_enable_pgvector` (gateway/agent startup) | Open, in-progress | — |
| **S1** | #8560: `browser_open` hangs agent turn on headless/no-display hosts | Open, in-progress | — |
| **S2 (degraded)** | #7462: 74 Windows test failures (encoding, paths, Unix cmds) | Open, accepted | — |
| **S2** | #8973: Landlock blocks shell access to `/dev/null` on Fedora | Open, in-progress | **#9114** (open) |
| **S2** | #7808: CLI secret prompts give no feedback after paste | Open, in-progress | — |
| **S2** | #8731: Stdio MCP servers accumulate as zombies | Open, in-progress | — |
| **S2** | #8642: MCP/tool-schema cloning → unbounded RSS growth | Open, in-progress | — |
| **S2** | #9046: `models_cache.json` read but never written | Open, in-progress | — |
| **S3 (minor)** | #5514: Telegram media groups not batched | Open, in-progress | — |
| **S3** | #6157: Nextcloud Talk wrong bot API | Open, in-progress | **#9181** (open) |
| **S3** | #8810: Telegram docs example wrong | Open, in-progress | — |
| **Security/Leak** | #9386: Gemini API key in URL survives sanitizer, posted to chat | Open, accepted | — |
| **Security** | #8519: `cargo-audit` ignores drift, wasmtime-wasi CVEs | Open, in-progress | — |

**Note**: Multiple P1 bugs have open fix PRs (#9114, #9181, #9385, #9424, #9423, #9419, #9418) but await author action or review.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for v0.8.4+ |
|--------|--------|------------------------|
| **Windows/macOS CI matrix** | #7461 (accepted, 2 comments) | High — Lint/Build already run on 3-OS matrix; test job next |
| **Consolidated release attestation** | #9101 (in-progress, P1) | High — Active work to reduce 53→20 assets, cut CI time |
| **Telegram multimodal media groups** | #5514 (in-progress) | Medium — Channel reliability focus |
| **Web dashboard: don't interrupt agent on window close** | #8559 (S1, in-progress) | High — Workflow blocker |
| **Landlock sandbox usability (devices, /dev/null)** | #8973, #9114 | High — Security hardening PR open |
| **MCP stdio multiplexing (no replay)** | #9418 (open) | Medium — Stability fix for concurrent tool calls |
| **Reliable provider: credential rotation on 429** | #9419 (open) | Medium — Resilience improvement |
| **cron shell jobs: raw stdout opt-in** | #8409 (accepted) | Low — Nice-to-have |
| **CLI i18n for `zeroclaw status`** | #7099 (in-progress, P3) | Low — Polish |

**Predicted v0.8.4 scope**: Landlock fixes, Nextcloud Talk fix, release attestation consolidation, crates.io publish, possibly Windows CI enablement.

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Windows is second-class** | #7462 (74 test failures), #7461 (no Windows CI) | Cannot run/test on Windows; CI blind spot |
| **Agent stops when I close browser tab** | #8559 (S1) | Cannot run background tasks via web UI |
| **Docker gateway unreachable** | #9035 (S1) | Container deployment broken |
| **Landlock breaks shell on Fedora** | #8973 (S2) | Security feature unusable on common distro |
| **Telegram sends multiple messages for album** | #5514 | Noisy UX, wasted tokens |
| **Nextcloud Talk replies fail silently** | #6157, #9181 | Channel effectively broken |
| **Secret paste gives no visual feedback** | #7808 | UX friction during onboarding |
| **Gemini API key leaked to chat** | #9386 (security) | Critical credential exposure |
| **MCP servers leak as zombies** | #8731 | Long-running daemon instability |
| **Memory grows unbounded on tool-heavy turns** | #8642 | OOM risk in WSL2/containers |

**Positive signals**: Active PR engagement on fixes; users file detailed bugs with repro steps; community contributes fixes (#9114, #9181, #9385, #9418, #9419).

## 8. Backlog Watch — Stale/Needs-Maintainer Items

| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| **#7462 / #7461** Windows test failures & CI matrix | 47 days | High | Blocks Windows support; CI gap means regressions undetected |
| **#5514** Telegram media groups | 110 days | Medium | Channel UX gap; in-progress but slow |
| **#7828** UTF-8 truncation audit tracker | 40 days | Medium | Recurring panic class; partial fix only |
| **#7870** Provider options leak from first config | 40 days | Medium | Silent misconfiguration risk |
| **#7872** QQ group `msg_id` for passive replies | 40 days | Medium | Channel feature incomplete |
| **#8409** Cron raw stdout opt-in | 29 days | Low | Enhancement, accepted but no PR |
| **#8642** MCP tool-schema RSS growth | 24 days | High | Memory leak in agent loop; split from OOM tracker |
| **#8731** MCP stdio zombies | 22 days | High | Daemon stability over time |
| **#9046** `models_cache.json` never written | 14 days | Medium | `zeroclaw models refresh` hint broken |
| **#9089** Tool output `[AUDIO:]` markers unsupported | 12 days | Medium | Multimodal parity gap |
| **#9386** Gemini API key leak | 1 day | Critical | Security: credentials posted to user chat |
| **#9115** Blacksmith runners for CI | 10 days | Medium | CI speed; needs maintainer enablement |
| **#9388** Retire `CONTRIBUTORS.md` (governance) | 1 day | Low | Policy cleanup; no file exists |

**Top maintainer priorities**: 
1. Merge Landlock fix (#9114) and Nextcloud fix (#9181) — both have PRs
2. Address Gemini key leak (#9386) — security incident
3. Unblock Windows CI (#7461) — strategic platform support
4. Review v0.8.4 release PR (#9376) — shipping milestone

---

**Project Health Indices**: [ZeroClaw GitHub](https://github.com/zeroclaw-labs/zeroclaw) | Issues: 50 updated | PRs: 50 updated (2 merged) | Next release: v0.8.4 in prep (#9376)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*