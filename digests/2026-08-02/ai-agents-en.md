# OpenClaw Ecosystem Digest 2026-08-02

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-02 02:07 UTC

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

# OpenClaw Project Digest — 2026-08-02

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours (460 open issues, 401 open PRs). The project released **v2026.7.2-beta.6** focusing on state safety and recovery infrastructure. The issue landscape is dominated by **P1/P0 stability bugs** — silent model failures, message leakage, unbounded resource retention, crash loops, and database corruption — indicating a release branch under heavy stabilization pressure. PR velocity is strong with many fixes targeting the top-reported issues, though several critical PRs await maintainer review or proof validation.

## 2. Releases

### v2026.7.2-beta.6 (2026-07-02)
**Highlights — State Safety & Recovery:**
- **Quarantine store** protects persisted data against primary-database damage
- **Crash-recoverable SQLite snapshots** with crash-durable filesystem publication
- **Schema-upgrade data-loss rejection** — prevents destructive migrations
- **Rollback-writer snapshot recovery** for automatic state restoration

*No breaking changes or migration notes documented in the release summary. This is a beta release; production users should validate state recovery flows before upgrading.*

## 3. Project Progress (Merged/Closed Today)

| PR | Title | Area | Status |
|----|-------|------|--------|
| [#117733](https://github.com/openclaw/openclaw/pull/117733) | `fix(meeting-bot): bound retained node audio lifecycle` | Realtime voice | **Closed** — addresses #116201 (unbounded state retention) |
| [#117657](https://github.com/openclaw/openclaw/pull/117657) | `fix(ui): decode artifact previews as UTF-8` | Web UI | **Closed** — fixes mojibake in workspace previews |
| [#96311](https://github.com/openclaw/openclaw/pull/96311) | `fix(feishu): replace longer mention keys first` | Feishu channel | Ready for maintainer — fixes mention prefix collision |
| [#99105](https://github.com/openclaw/openclaw/pull/99105) | `fix: active-memory recalls serialize on one shared lane` | Memory core | Ready for maintainer — AI-assisted fix for recall serialization |
| [#117676](https://github.com/openclaw/openclaw/pull/117676) | `fix(memory-core): pass allowTranscriptTurnSnippet` | Memory core | Ready for maintainer — unblocks dreaming recall store |
| [#113902](https://github.com/openclaw/openclaw/pull/113902) | `fix(plugins): prevent uninstalled npm plugins from coming back` | Plugin system | Ready for maintainer — fixes phantom plugin reloads |
| [#113816](https://github.com/openclaw/openclaw/pull/113816) | `fix(memory): avoid false Copilot index mismatch` | Memory/GitHub Copilot | Ready for maintainer — pre-init false mismatch |
| [#114254](https://github.com/openclaw/openclaw/pull/114254) | `fix(usage-cost): cost totals freeze after restart reuses PID` | Usage tracking | Ready for maintainer — **closes #114234** (container PID reuse bug) |
| [#117727](https://github.com/openclaw/openclaw/pull/117727) | `fix: prevent fractional chunk limits from stalling text splitting` | Core text processing | Ready for maintainer — P1, platinum hermit rating |

**Key Advances:** Voice lifecycle bounding, UTF-8 artifact rendering, Feishu mention normalization, memory recall lane serialization, plugin uninstall persistence, usage-cost container bug fix, and text-splitting stall prevention.

## 4. Community Hot Topics (Most Active Issues/PRs)

| Issue | Comments | Labels | Core Need |
|-------|----------|--------|-----------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) **DeepSeek v4 Flash silent reply failure** | 73 | P1, platinum hermit, message-loss, ux-friction | **Model reliability** — silent failure with generic fallback; users lose trust in provider routing |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) **Text between tool calls leaks to channels** | 39 | P1, diamond lobster, security, session-state, linked-PR | **UX/security** — internal reasoning/error text exposed to users; 6-month-old regression |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) **Realtime voice unbounded provider/consult state** | 38 | P1, gold shrimp, session-state | **Resource safety** — no hard bounds on audio frames, consult work; leads to OOM |
| [#99241](https://github.com/openclaw/openclaw/issues/99241) **Tool outputs render as unreadable image attachments** | 26 | P1, platinum hermit, message-loss | **Agent readability** — ANSI-heavy tool output collapses to `(see attached image)` |
| [#115326](https://github.com/openclaw/openclaw/issues/115326) **Crash-loop breaker permanently suppresses Discord/WhatsApp** | 24 | P1, platinum hermit, crash-loop, message-loss | **Channel recovery** — documented `channels.start` fails with WS 1006; channels stuck offline |
| [#101290](https://github.com/openclaw/openclaw/issues/101290) **CLI startup preflight corrupts live state DB** | 14 | P0, diamond lobster, data-loss, stable | **Data integrity** — `openclaw.sqlite` corrupted 4× in 5 days on macOS; vanilla SQLite unaffected |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) **Live Docs ahead of release (Heartbeat IsolatedSessions)** | 11 | P2, diamond lobster, ux-release-blocker | **Docs/release sync** — feature documented but not in 2026.3.13; blocks adoption |

**Underlying Theme:** Users are hitting **compound failures** where one bug (e.g., crash-loop breaker) cascades into channel loss, session corruption, and unrecoverable state — eroding confidence in production readiness.

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 Critical (P0 / Data Loss / Crash Loop)
| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | **P0** | ❌ | CLI `doctor`/`status` corrupts live `openclaw.sqlite` on macOS (4× in 5 days) |
| [#115421](https://github.com/openclaw/openclaw/issues/115421) | **P0** | ❌ | Schema downgrade (v6→v1) quarantines/wipes state DB — **cron jobs lost** |
| [#115424](https://github.com/openclaw/openclaw/issues/115424) | **P1** (crash) | ❌ | V8 heap OOM in main session → restart-recovery creates **7-core-dump loop** |
| [#115326](https://github.com/openclaw/openclaw/issues/115326) | **P1** | ❌ | Crash-loop breaker permanently kills Discord/WhatsApp; `channels.start` fails WS 1006 |

### 🟠 High (P1 / Session State / Message Loss / Security)
| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | P1 | ❌ | DeepSeek v4 Flash silent failure — no reply, generic fallback |
| [#25592](https://github.com/openclaw/openclaw/issues/25592

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-08-02)

---

## 1. Ecosystem Overview

The personal AI assistant / agent open-source landscape comprises **13 tracked projects** spanning three maturity tiers. A **core group of 5 projects** (OpenClaw, NanoBot, Hermes Agent, NanoClaw, IronClaw) demonstrates **high-to-intense daily velocity** (25–500+ issue/PR updates), active release cycles, and production hardening focus. **Four projects** (CoPaw, Moltis, PicoClaw, ZeroClaw) show **moderate or design-phase activity** with clear architectural direction but slower merge cadence. **Three projects** (NullClaw, TinyClaw, ZeptoClaw) registered **zero activity** in the last 24h. **LobsterAI** exhibits **maintenance-mode signals**—stale-bot closures, unreviewed PRs, and critical bugs auto-closed without fixes. The ecosystem is **fragmented but vibrant**: no single project dominates mindshare; instead, distinct architectural philosophies (Rust vs. TypeScript/Go/Python, gateway-centric vs. desktop-first, plugin-heavy vs. contract-driven) coexist, with cross-pollination on provider abstraction, memory architecture, and multi-channel gateway patterns.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Latest Release | Health Score* |
|---------|--------------|-----------|-------------------|----------------|---------------|
| **OpenClaw** | 460 open (500 updated) | 401 open (500 updated) | 9 | v2026.7.2-beta.6 (2026-07-02) | 🟡 **High Activity / Stabilization Crisis** |
| **NanoBot** | 5 updated | 25 updated | 13 | None (staged in `main`) | 🟢 **Strong** |
| **Hermes Agent** | 50 updated | 50 updated | 15 | v0.19.1 (2026-07-30) | 🟢 **Strong** |
| **NanoClaw** | 2 updated | 15 updated | 5 | **v2.1.54** (major rollup) | 🟢 **Strong** |
| **IronClaw** | 11 updated | 24 updated | 8 | None (release PR #5598 open 30d) | 🟡 **High Velocity / Architecture Freeze** |
| **CoPaw (QwenPaw)** | 9 updated | 13 updated | 1 | v2.0.1 (desktop) | 🟡 **High Velocity / Release Stalled** |
| **ZeroClaw** | 50 updated | 50 updated | 0 | None (v0.8.4 PR open) | 🟡 **Design Phase / Zero Merge Velocity** |
| **Moltis** | 0 new | 3 updated | 2 | None | 🟢 **Steady** |
| **PicoClaw** | 1 updated | 2 opened, 1 closed | 0 | v0.2.9 | 🟡 **Caution** |
| **LobsterAI** | 7 updated (6 stale-closed) | 2 open (0 merged) | 0 | None | 🔴 **Maintenance Mode** |
| **NullClaw** | 0 | 0 | 0 | — | ⚪ **Inactive** |
| **TinyClaw** | 0 | 0 | 0 | — | ⚪ **Inactive** |
| **ZeptoClaw** | 0 | 0 | 0 | — | ⚪ **Inactive** |

*Health Score: 🟢 Strong (regular releases, high fix throughput, low critical bugs) | 🟡 Caution (high activity but release stalled, critical bugs, or design-phase) | 🔴 Maintenance Mode (stale closures, unreviewed PRs, critical bugs unfixed) | ⚪ Inactive.

---

## 3. OpenClaw's Position

**Advantages vs. Peers**
- **Scale of investment**: 500+ daily issue/PR updates dwarf all peers (next: ZeroClaw/IronClaw at ~50). Indicates largest dedicated team and/or corporate backing.
- **State-safety infrastructure**: v2026.7.2-beta.6 ships **quarantine store, crash-recoverable SQLite snapshots, schema-upgrade data-loss rejection**—a production-grade durability layer no peer has documented.
- **Multi-channel gateway maturity**: Discord, WhatsApp, Slack, Feishu, Telegram, CLI, WebUI all active; crash-loop breaker, session recovery, and channel lifecycle management are real (if buggy).
- **Plugin ecosystem**: npm plugin system with uninstall persistence fixes (#113902) signals live third-party extension surface.

**Technical Approach Differences**
| Dimension | OpenClaw | NanoBot / Hermes / NanoClaw | IronClaw / ZeroClaw |
|-----------|----------|----------------------------|---------------------|
| **Language** | TypeScript/Node.js | Python (NanoBot), Rust/TypeScript (Hermes), Go (NanoClaw) | Rust (IronClaw, ZeroClaw) |
| **Architecture** | Monolithic gateway + plugin hooks | Modular crates/services (NanoBot), gateway + desktop (Hermes), single binary + channels (NanoClaw) | Contract-driven crate graph (IronClaw), capability-oriented kernel (ZeroClaw) |
| **State/Recovery** | **Quarantine store + crash-durable snapshots** (unique) | File-based session stores, cron state (NanoBot), SQLite (Hermes) | Event-sourced process journal (IronClaw), capability logs (ZeroClaw) |
| **Provider Model** | OpenRouter + direct providers, routing fallback | OpenAI-compat + local (NanoBot), Copilot + OpenRouter (Hermes) | Built-in provider registry + contracts (IronClaw/ZeroClaw) |

**Community Size Comparison**
- **OpenClaw**: Largest visible contributor base (platinum hermit / diamond lobster / gold shrimp labels imply tiered triage), 73-comment issue on DeepSeek failure.
- **NanoBot / Hermes / NanoClaw**: 10–40 comment threads, core-team-dominated but active external PRs (first-time contributors visible).
- **IronClaw / ZeroClaw**: Near-zero external participation; all RFCs/issues authored by core team.
- **CoPaw / Moltis / PicoClaw**: Small but engaged (2–7 comments on top issues).
- **LobsterAI**: Stale-bot dominates; real maintainer engagement absent.

---

## 4. Shared Technical Focus Areas (Cross-Project Requirements)

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Provider abstraction & routing** | OpenClaw, NanoBot, Hermes, NanoClaw, CoPaw, IronClaw, ZeroClaw, PicoClaw | OpenClaw: silent DeepSeek failure (#116277); NanoBot: local provider hijack prevention (#3732); Hermes: OpenRouter xAI tool duplication (#76481); CoPaw: OrcaRouter integration (#6622); ZeroClaw: OpenAI Chat Completions adapter RFC (#8603). |
| **Memory architecture & lifecycle** | OpenClaw, NanoBot, Hermes, NanoClaw, CoPaw, ZeroClaw, Moltis | OpenClaw: recall serialization lane (#99105), dreaming recall store (#117676); NanoBot: malformed timestamp/role hardening (#5153); Hermes: Responses API `function_call_output` stripping (#43757); CoPaw: auto-compression not triggering summarization (#6624); ZeroClaw: conversation vs. durable memory separation RFC (#9048), lifecycle policy decoupling (#6850). |
| **Multi-channel gateway reliability** | OpenClaw, Hermes, NanoClaw, ZeroClaw, Moltis | OpenClaw: crash-loop breaker kills Discord/WhatsApp (#115326), WS 1006; Hermes: Discord reconnect loop + desktop updater conflict (#76435), Telegram media extraction bypass (#60845); NanoClaw: iMessage unification (#2999); ZeroClaw: WhatsApp `allowed_groups=[]` permits all (#9348), approval token leak (#9417); Moltis: operator privilege separation (#1170). |
| **Install/update/launcher robustness (Windows focus)** | OpenClaw, Hermes, NanoClaw | OpenClaw: CLI preflight corrupts SQLite on macOS (#101290); Hermes: bootstrap `EBADENGINE` (#76484), stale launcher not self-healed (#76421), gateway reconnect loop (#76435); NanoClaw: rootless Docker support (#3174). |
| **Credential / secret isolation per profile** | Hermes, ZeroClaw, IronClaw | Hermes: cross-profile credential leak (#51603), profile-scoped kanban notifier (#76482, #76514); ZeroClaw: `KeySource` trait for master-key classification RFC (#9127), pluggable inbound auth RFC (#7141); IronClaw: contract inversion for auth ports (WS2.1). |
| **Observability / eval / tracing** | ZeroClaw, IronClaw, Moltis, CoPaw | ZeroClaw: evaluation framework (6 stacked PRs #9220–#9225), OTel conversation correlation (#8933); IronClaw: changed-coverage gate gaps (#7006); Moltis: Langfuse v4 + OTLP + user feedback (#1174); CoPaw: `loongsuite-python` integration request (#6627). |
| **Sandboxing / tool execution policy** | ZeroClaw, IronClaw, Hermes | ZeroClaw: granular sandbox policy RFC (#6996), per-command confirmation tier (#7155); IronClaw: steering-queue error path fault injection gap (#7006); Hermes: plugin lifecycle with supervised tasks (#64229). |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User / Deployment | Architectural Signature |
|---------|---------------|--------------------------|-------------------------|
| **OpenClaw** | **Production-grade multi-channel gateway** with plugin extensibility | Teams / orgs running persistent agent fleets across Discord, Slack, WhatsApp, Feishu, WebUI | Monolithic TypeScript gateway; SQLite state + quarantine store; npm plugin system; heavy runtime introspection |
| **NanoBot** | **Developer-centric local agent** with cron, memory, multi-session, WebUI | Power users / devs self-hosting on Linux/macOS; uv/Poetry envs | Python async core; file-based session store; OpenAI-compat + local providers; per-sender rate limiting |
| **Hermes Agent** | **Desktop-first multi-profile agent** with Copilot integration & gateway backend | Individual developers (desktop) + gateway operators (headless) | Tauri/Rust desktop + TypeScript gateway; profile-isolated credentials; Copilot token exchange optimization; plugin slots (sidebar/footer) |
| **NanoClaw** | **Single-binary channel aggregator** with skill system & iMessage/Photon | Operators wanting unified CLI/WebUI for iMessage, Slack, Discord, Telegram | Go single binary; channel plugins as skills; `/add-imessage` unification; rootless Docker; credential expiry alerting |
| **IronClaw** | **Contract-driven crate ecosystem** for hosted agent platform | Platform builders / infra teams needing composable, auditable components | Rust crate graph with `ironclaw_product_contracts` as central ABI; inventory-driven CI gates; row-native process journal |
| **ZeroClaw** | **Capability-oriented agent kernel** with security-first design | Security-conscious deployments needing sandboxing, A2A, formal authZ | Rust kernel + capability model; RFC-heavy governance; eval framework first; computer-use drivers; secure relay transport |
| **CoPaw (QwenPaw)** | **Desktop app with multi-agent delegation & memory compression** | End-users wanting Doubao-style UX + powerful agent orchestration | Tauri/TypeScript desktop; ACP protocol for multi-agent; Scroll auto-compression; skill pool UI; plugin-sourced skills |
| **Moltis** | **Observable, operator-controlled channel bot** | Channel operators needing audit trails & privileged tool gating | Go; immutable turn records; Langfuse/OTLP export; per-account operator list; session lifecycle control |
| **PicoClaw** | **Lightweight Matrix bridge + web search providers** | Matrix users wanting LLM/web search in rooms | Python; Matrix `/sync` loop (no reconnect—bug #3203); Exa/OrcaRouter provider additions |
| **LobsterAI** | **OpenClaw-based fork with i18n/UX polish** | Chinese-speaking users / OpenClaw downstream | TypeScript; hardcoded i18n gaps; stale maintenance; critical multimodal bugs unfixed |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (Weekly/biweekly releases, high fix throughput)** | NanoBot, Hermes Agent, NanoClaw, Moltis | NanoBot: 13 PRs merged/day; Hermes: 15 closures/day; NanoClaw: v2.1.54 rollup (36 versions); Moltis: 2 PRs merged, zero bugs. |
| **High Velocity but Release-Stalled / Stabilizing** | OpenClaw, CoPaw, IronClaw | OpenClaw: 500 PRs/day but beta.6 only, P0/P1 flood; CoPaw: 22 updates/day, last release v2.0.1, 3 fix PRs ready; IronClaw: 35 updates/day, release PR open 30d, Wave 1/2 refactor. |
| **Design/Architecture Phase (RFC-heavy, near-zero merges)** | ZeroClaw | 50 issues/PRs updated, 0 merged; 10 RFCs with 8–16 comments each; XL PRs awaiting author action. |
| **Low/Moderate Maintenance** | PicoClaw | 1 bug (31d old), 2 provider PRs, no releases since v0.2.9. |
| **Maintenance Mode / At Risk** | LobsterAI | Stale-bot closed 6 critical bugs; 2 PRs unreviewed (4mo, 15d); no maintainer comments. |
| **Inactive** | NullClaw, TinyClaw, ZeptoClaw | Zero GitHub activity in 24h. |

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence Across Projects | Strategic Value |
|-------|--------------------------|-----------------|
| **Contract-driven crate/service boundaries replacing monoliths** | IronClaw (Wave 1/2 contract inversion), ZeroClaw (capability catalog RFC #6489), Hermes (plugin lifecycle RFC #64229), NanoClaw (channel skills) | Enables independent deployment, versioning, and security auditing of agent components. Invest in **contract definitions (OpenAPI/gRPC/Protobuf) early**. |
| **State durability > raw performance** | OpenC

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-02

## 1. Today's Overview

NanoBot shows **high maintenance velocity** with 25 PRs and 5 issues updated in the last 24 hours. The project is in active bug-fix and feature-refinement mode: 13 PRs were merged/closed (mostly priority P1/P2 fixes), while 12 remain open including several substantial features (cross-session search, trusted-proxy auth, Quick Chat). No new release was cut, suggesting changes are accumulating for a near-future patch or minor release. The closed items resolve regressions in cron state persistence, session consolidation, provider matching, and memory formatting — indicating a focus on hardening core reliability.

## 2. Releases

**No new releases published today.** The latest merged fixes (cron state, session consolidation, provider auth, memory safety) are staged in `main` and will likely ship in the next patch release.

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Type | Priority | Summary |
|----|-------|------|----------|---------|
| [#5183](https://github.com/HKUDS/nanobot/pull/5183) | fix(cron): preserve manual run completion state | Bug fix | P1 | Protects live cron store during manual/scheduled runs; prevents WebUI polling from overwriting completion status. Fixes [#5163](https://github.com/HKUDS/nanobot/issues/5163). |
| [#5153](https://github.com/HKUDS/nanobot/pull/5153) | fix(memory): handle non-string timestamp & missing role in raw_archive | Bug fix | P1 | Hardens `MemoryStore._format_messages` against malformed persisted entries (null/non-string timestamps, missing `role`). Related to [#4801](https://github.com/HKUDS/nanobot/issues/4801). |
| [#5200](https://github.com/HKUDS/nanobot/pull/5200) | fix(exec): preserve wait targets across response truncation | Bug fix | P1 | Ensures `write_stdin(wait_for=...)` targets survive head/tail output bounding. |
| [#5201](https://github.com/HKUDS/nanobot/pull/5201) | fix(session): tolerate malformed persisted session summary | Bug fix | P1 | `AutoCompact.prepare_session()` now gracefully handles missing/invalid `_last_summary` metadata. |
| [#5172](https://github.com/HKUDS/nanobot/pull/5172) | feat: preserve Responses reasoning state and compact context | Feature | — | Adopts OpenAI Responses API opaque output-item chain replay (encrypted reasoning, future item types) without A/B flag. |
| [#5108](https://github.com/HKUDS/nanobot/pull/5108) | fix(channels): add per-sender message rate limiting | Security/Feature | P1 | Introduces per-user/chat rate limiting across all channel adapters to prevent token/tool abuse. |
| [#3732](https://github.com/HKUDS/nanobot/pull/3732) | fix(providers): require api_base before local provider wins on keyword match | Bug fix | — | Prevents silent hijacking of cloud models by local providers claiming same keyword without `api_base`. |
| [#5199](https://github.com/HKUDS/nanobot/pull/5199) | refactor(cli): narrow Pyright suppressions | Refactor | — | Replaces file-level type suppressions with line-level ignores for Typer callbacks and keybindings. |
| [#5209](https://github.com/HKUDS/nanobot/pull/5209) | refactor(webui): reuse sidebar selection highlight | Refactor | — | Extracts reusable highlight component; fixes mask-like flicker on New Topic route. |
| [#5208](https://github.com/HKUDS/nanobot/pull/5208) | fix(dream): advance cursor when durable changes were made | Bug fix | P1 | Dream cron job now advances history cursor on successful edits regardless of stop reason. |
| [#5205](https://github.com/HKUDS/nanobot/issues/5205) | Issue closed: "No module named ensurepip" on plugin enable | Bug fix | — | Root cause: uv-managed Python lacks `ensurepip`; workaround documented. |

**Net progress:** 11 high-priority fixes merged, covering cron reliability, memory safety, provider security, channel hardening, and exec/session robustness. Two notable features landed: Responses API reasoning preservation and per-sender rate limiting.

## 4. Community Hot Topics — Most Active Items

| Item | Type | Comments | Signal |
|------|------|----------|--------|
| [#5185](https://github.com/HKUDS/nanobot/issues/5185) | Issue (Closed) | 4 | **Provider/tool-call leakage** — Nanobot emitted raw tool-call code in responses. Closed as `invalid`/`provider`; likely upstream model/provider misconfiguration. Users need clearer diagnostics when provider returns malformed tool calls. |
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) | Issue (Open) | 1 | **Model switching UX** — User cannot change model per-session via UI or `/model` command; only fallback models work. Signals demand for first-class per-session model selector (like SaaS AI UIs). |
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) | PR (Open) | — | **Cross-session search & `@` mentions** — Adds `search_sessions`/`read_session` tools + WebUI mention palette for referencing other chats. High-value power-user feature; likely to merge soon. |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | PR (Open) | — | **Quick Chat & Temporary Chat** — Persistent Quick Chat (stable session) + ephemeral Temporary Chat (in-memory). Addresses "scratchpad" workflow gap. |
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) | PR (Open) | — | **Trusted-proxy bootstrap auth** — Opt-in auth for `/webui/bootstrap` behind Cloudflare Tunnel/Access. Enterprise deployment enabler; P1 priority. |

**Underlying needs:** (1) Per-session model control parity with commercial UIs, (2) Cross-conversation knowledge reuse, (3) Low-friction ephemeral chats, (4) Zero-trust enterprise auth patterns.

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Status | Fix PR | Notes |
|----------|-------|--------|--------|-------|
| **High** | [#5185](https://github.com/HKUDS/nanobot/issues/5185) Tool-call code leaked in responses | Closed (invalid) | — | Provider-level issue; Nanobot cannot fully guard against upstream malformed tool calls. Consider adding response sanitization layer. |
| **High** | [#5205](https://github.com/HKUDS/nanobot/issues/5205) `ensurepip` missing on plugin enable (uv Python) | Closed | — | Environment issue; uv's Python build excludes `ensurepip`. Docs/workaround needed for plugin installs. |
| **Medium** | [#4801](https://github.com/HKUDS/nanobot/issues/4801) `KeyError` on missing `role` in session history | Closed | [#5153](https://github.com/HKUDS/nanobot/pull/5153) | Fixed: defensive formatting in `MemoryStore._format_messages`. |
| **Medium** | [#5163](https://github.com/HKUDS/nanobot/issues/5163) Cron manual runs lose completion state on WebUI reload | Closed | [#5183](https://github.com/HKUDS/nanobot/pull/5183) | Fixed: store protection during concurrent manual/scheduled runs. |
| **Low** | [#5198](https://github.com/HKUDS/nanobot/issues/5198) Cannot change model per-session | Open | — | UX gap, not a crash. `/model` command appears non-functional for primary model switch. |

**Stability outlook:** Core crash vectors (memory formatting, cron state, exec truncation, session summary) are patched. Remaining open bugs are UX/environment issues.

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood (Next Version) | Rationale |
|---------|--------|---------------------------|-----------|
| **Cross-session search & `@` mentions** | [#5211](https://github.com/HKUDS/nanobot/pull/5211) (PR open) | **High** | PR is feature-complete with tools + UI; addresses power-user workflow. |
| **Quick Chat / Temporary Chat** | [#5184](https://github.com/HKUDS/nanobot/pull/5184) (PR open) | **High** | PR includes persistent + ephemeral modes; fills UX gap for scratchpad use. |
| **Trusted-proxy bootstrap auth** | [#5210](https://github.com/HKUDS/nanobot/pull/5210) (PR open, P1) | **High** | Enterprise deployment blocker; minimal, opt-in, security-reviewed. |
| **Per-session model selector (UI + `/model`)** | [#5198](https://github.com/HKUDS/nanobot/issues/5198) (Issue open) | **Medium** | Clear user demand; requires backend change to decouple primary model from fallback chain. |
| **Model preset for subagents (`spawn` tool)** | [#5207](https://github.com/HKUDS/nanobot/pull/5207) (PR open, P2) | **Medium** | Clean addition; enables specialized subagent personas. |
| **WebUI model preset discoverability** | [#5202](https://github.com/HKUDS/nanobot/pull/5202) (PR open, P2) | **Medium** | UX polish: replaces hidden gesture with dropdown. |
| **Well-known skills.sh sources** | [#5186](https://github.com/HKUDS/nanobot/pull/5186) (PR open, P2) | **Low-Medium** | Fixes skills registry omissions; niche but complete. |
| **DeepSeek message hardening** | [#3869](https://github.com/HKUDS/nanobot/pull/3869) (PR open, conflict) | **Low** | Stalled (conflict, 2.5 months old); provider-specific sanitization. |

**Predicted next release (v0.x.patch):** Cross-session search, Quick Chat, trusted-proxy auth, model preset UI, spawn preset — all have open PRs with test coverage. Per-session model switch needs design decision.

## 7. User Feedback Summary

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Model switching opacity** | [#5198](https://github.com/HKUDS/nanobot/issues/5198): "Clicking model blip allows no change"; `/model` seems ineffective | 1 issue, but mirrors SaaS parity gap |
| **Plugin install friction (uv/ensurepip)** | [#5205](https://github.com/HKUDS/nanobot/issues/5205): `ensurepip` missing in uv-managed Python | 1 issue, but affects all plugin installs on uv |
| **Tool-call leakage in UI** | [#5185](https://github.com/HKUDS/nanobot/issues/5185): Raw tool JSON shown to user | 1 report, closed as provider issue |
| **Cron state confusion** | [#5163](https://github.com/HKUDS/nanobot/issues/5163): WebUI shows `Failed` after successful manual run | 1 report, now fixed |
| **Session history corruption** | [#4801](https://github.com/HKUDS/nanobot/issues/4801): `KeyError` on malformed entries | 1 report, now hardened |

**Positive signals:** Rapid fix turnaround (cron, memory, exec bugs resolved same-day). Users actively file detailed repros (screenshots, logs).

**Unmet needs:** Per-session model control, cross-chat reference, ephemeral chat mode — all have PRs in flight.

## 8. Backlog Watch — Stalled / Needing Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#3869](https://github.com/HKUDS/nanobot/pull/3869) DeepSeek message hardening | 78 days | Open, conflict | Provider-specific sanitization (null content, "(empty)" leakage, assistant text drop). Blocks clean DeepSeek integration. Needs rebase + maintainer review. |
| [#3732](https://github.com/HKUDS/nanobot/pull/3732) Provider keyword match requires `api_base` | 83 days | **Closed today** | Was long-stalled; now merged. Good signal: old security PRs do get landed. |
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) Per-session model switch | 2 days | Open, 1 comment | High user visibility; no PR yet. Needs design: should `/model` set primary or just fallback? |
| [#5139](https://github.com/HKUDS/nanobot/pull/5139) Preserve media paths during session consolidation | 5 days | Open, conflict | Fixes media loss on archive (refs [#5118](https://github.com/HKUDS/nanobot/issues/5118), [#5135](https://github.com/HKUDS/nanobot/issues/5135)). Conflict needs resolution. |
| [#5194](https://github.com/HKUDS/nanobot/pull/5194) WebUI JSONL session list perf | 2 days | Open, P2 | Caching + snapshot index for large histories. Performance-critical for power users. |

**Maintainer action suggested:** (1) Resolve [#5139](https://github.com/HKUDS/nanobot/pull/5139) conflict — media loss is data-loss severity. (2) Decide on [#5198](https://github.com/HKUDS/nanobot/issues/5198) model-switch semantics. (3) Review [#3869](https://github.com/HKUDS/nanobot/pull/3869) for DeepSeek support completeness.

---

**Overall Health: 🟢 Strong** — High fix throughput, feature PRs advancing, no critical regressions unaddressed. Project is tightening reliability while expanding power-user UX. Next patch will be substantial.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-02

## 1. Today's Overview
Hermes Agent shows **high maintenance velocity** with 100 total issue/PR updates in the last 24 hours (50 issues, 50 PRs). The project is in active bug-fix and stabilization mode: 15 issues and 15 PRs were closed/merged today, while 35 each remain open. No new release was cut. Activity clusters around **Windows desktop install/update reliability**, **multi-profile credential isolation**, **gateway session state handling**, and **plugin/dashboard lifecycle gaps**. The volume of P2 (high-priority) bugs across CLI, gateway, and desktop suggests a push to harden the v0.19.x line before the next release.

## 2. Releases
**No new releases published today.** The latest tagged release remains v0.19.1 (v2026.7.30). Several merged PRs today (e.g., #76511, #76484, #76513) contain fixes that will likely roll into a v0.19.2 or v2026.8.x patch.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Area | Summary |
|----|------|---------|
| [#76511](https://github.com/NousResearch/hermes-agent/pull/76511) | `comp/agent`, `provider/copilot`, `area/auth` | **Fixed 4.5 s startup stall** on Copilot token exchange by moving `_is_suppressed()` check before the exchange. |
| [#76484](https://github.com/NousResearch/hermes-agent/pull/76484) | `comp/cli`, `comp/desktop`, `platform/windows`, `area/install-update` | **Resolved bootstrap installer `EBADENGINE` failure** on Windows by aligning Node/npm version requirements. |
| [#76513](https://github.com/NousResearch/hermes-agent/pull/76513) | `comp/gateway`, `platform/discord`, `area/sessions` | **Discord auto-thread sessions** now keyed on `prospective_thread_id` so every thread gets an auto-title/rename (not just the first). |
| [#76482](https://github.com/NousResearch/hermes-agent/pull/76482) | `comp/gateway`, `comp/cron`, `platform/slack`, `area/profiles` | **Kanban notifier** no longer silently skips subscriptions when an adapter-less gateway owns the dispatcher singleton. |
| [#76514](https://github.com/NousResearch/hermes-agent/pull/76514) | `comp/gateway`, `comp/cron`, `area/profiles` | **`hermes kanban notify-subscribe`** stops stamping the invoking shell’s profile; now requires explicit `--notifier-profile`. |
| [#67822](https://github.com/NousResearch/hermes-agent/pull/67822) | `comp/desktop` | **Fenced file lists** in assistant messages now render as code blocks instead of prose. |
| [#67836](https://github.com/NousResearch/hermes-agent/pull/67836) | `comp/agent`, `comp/desktop` | **GitHub link titles** no longer fetch HTML (avoiding soft-404 “Page not found”); PRs/issues labeled `owner/repo#n`. |
| [#76515](https://github.com/NousResearch/hermes-agent/pull/76515) | `comp/gateway`, `platform/telegram`, `tests` | **Test infra**: gateway `conftest.py` now prefers real `python-telegram-bot` over process-wide mock. |

**Net effect**: Windows desktop install/update path unblocked; Copilot startup latency eliminated; Discord threading UX fixed; multi-profile kanban notifications hardened; test reliability improved.

## 4. Community Hot Topics (Most Comments/Reactions)
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#75598](https://github.com/NousResearch/hermes-agent/issues/75598) | Bug (Closed) | 7 | 0 | **Update instability on Windows**: multiple gateway processes conflicting across profiles; profile switching doesn’t deactivate old gateways. |
| [#65274](https://github.com/NousResearch/hermes-agent/issues/65274) | Bug (Open) | 6 | 1 | **Desktop fresh sessions fall back to home dir** on Windows instead of project cwd — breaks project-scoped workflows. |
| [#51603](https://github.com/NousResearch/hermes-agent/issues/51603) | Security (Closed) | 5 | 0 | **Cross-profile credential leak** in multiplex mode: `resolve_anthropic_token()` bypassed profile secret scope. |
| [#60845](https://github.com/NousResearch/hermes-agent/issues/60845) | Bug (Open) | 4 | 0 | **Queued Telegram follow-ups** bypass media extraction — attachments delivered as plain-text paths. |
| [#76352](https://github.com/NousResearch/hermes-agent/issues/76352) | Bug (Closed) | 4 | 0 | **MCP tool result too large** (900k+ chars) exhausts compression retries; inconsistent `agent_close` vs explicit error. |
| [#37566](https://github.com/NousResearch/hermes-agent/issues/37566) | Feature (Closed) | 4 | 5 | **Font selector for Desktop** — users want UI customization parity with web UI. |
| [#64229](https://github.com/NousResearch/hermes-agent/issues/64229) | Feature (Open) | 3 | 0 | **Plugin lifecycle**: registration handles, ownership ledger, `on_unload`, supervised tasks. |
| [#43757](https://github.com/NousResearch/hermes-agent/issues/43757) | Bug (Open) | 3 | 0 | **Responses API `function_call_output` items stripped** from `input` array — tool results lost across turns. |

**Pattern**: Windows desktop reliability and multi-profile isolation dominate. Plugin authors (e.g., `strike-freedom-cockpit`) are blocked by missing dashboard slot renders ([#76381](https://github.com/NousResearch/hermes-agent/issues/76381)).

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)
| Severity | Issue | Area | Fix PR? |
|----------|-------|------|---------|
| **P2 (High)** | [#76505](https://github.com/NousResearch/hermes-agent/issues/76505) Native `image_input_mode` sends full-res images; Qwen3VLProcessor rejects, but text-mode fallback works | `comp/agent`, `provider/qwen` | No |
| **P2** | [#76481](https://github.com/NousResearch/hermes-agent/issues/76481) OpenRouter xAI `:online` duplicates `web_search` tool (client + server) → HTTP 400 | `comp/agent`, `tool/web`, `provider/openrouter`, `provider/xai` | No |
| **P2** | [#76421](https://github.com/NousResearch/hermes-agent/issues/76421) `hermes update` doesn’t self-heal stale `~/.local/bin/hermes` launcher | `comp/cli`, `area/install-update` | No |
| **P2** | [#76435](https://github.com/NousResearch/hermes-agent/issues/76435) Gateway reconnect loop (Discord) + desktop updater opens terminal showing “managed outside” | `comp/gateway`, `platform/discord`, `comp/desktop`, `area/install-update` | No |
| **P2** | [#60845](https://github.com/NousResearch/hermes-agent/issues/60845) Queued Telegram follow-ups deliver attachments as plain-text paths | `comp/gateway`, `platform/telegram` | No |
| **P2** | [#65274](https://github.com/NousResearch/hermes-agent/issues/65274) Desktop fresh sessions fall back to home cwd on Windows | `comp/desktop`, `area/sessions`, `platform/windows` | No |
| **P3 (Med)** | [#76486](https://github.com/NousResearch/hermes-agent/issues/76486) `package.json` `npm: ">=12.0.0"` blocks Node 22 / npm 11 installs (`EBADENGINE`) | `comp/cli`, `area/install-update` | **Yes** — [#76459](https://github.com/NousResearch/hermes-agent/pull/76459) pins Node 26 & managed toolchain |
| **P3** | [#76491](https://github.com/NousResearch/hermes-agent/issues/76491) Desktop terminal executes locally instead of on gateway (Windows → Ubuntu VM) | `tool/terminal`, `comp/desktop`, `platform/windows` | No |
| **P3** | [#76485](https://github.com/NousResearch/hermes-agent/issues/76485) Event hooks registered at gateway startup never invoked in desktop session agent (Windows) | `comp/tui`, `comp/plugins`, `comp/desktop`, `area/sessions` | No |
| **P3** | [#75960](https://github.com/NousResearch/hermes-agent/issues/75960) Desktop IME preedit starts after visible composer placeholder (CJK) | `comp/desktop` | No |

**Critical cluster**: Windows desktop install/update/launcher issues (#76421, #76435, #76484, #76486) + multi-profile gateway conflicts (#75598, #65274). Fix PR #76459 addresses the Node/npm engine block.

## 6. Feature Requests & Roadmap Signals
| Request | Issue | Signal Strength | Likely Next-Version Candidate? |
|---------|-------|-----------------|--------------------------------|
| **Plugin lifecycle** (registration handles, `on_unload`, supervised tasks) | [#64229](https://github.com/NousResearch/hermes-agent/issues/64229) | High (core maintainer `teknium1` authored) | **Yes** — foundational for plugin ecosystem |
| **Email allowlist for self-hosted OIDC dashboard auth** | [#76519](https://github.com/NousResearch/hermes-agent/pull/76519) | Medium (PR open, needs decision) | **Yes** — single-operator deployments |
| **Font selector for Desktop** | [#37566](https://github.com/NousResearch/hermes-agent/issues/37566) | Medium (5 👍, closed but interest clear) | **Likely** — low-effort UX win |
| **`EMAIL_ACCOUNT` env var** (decouple display name from IMAP address) | [#25849](https://github.com/NousResearch/hermes-agent/issues/25849) | Low (old, 3 comments) | Maybe — standards compliance |
| **Policy/audit authorization layer for tool execution** | [#34992](https://github.com/NousResearch/hermes-agent/issues/34992) | Low (external proposal, 1 comment) | Unlikely soon — architectural |
| **Headroom Phase 1 tool-output compression plugin (opt-in)** | [#40322](https://github.com/NousResearch/hermes-agent/pull/40322) | Medium (closed PR, test-only) | **Yes** — behind flag for power users |
| **Native voice turn stream endpoint** | [#35040](https://github.com/NousResearch/hermes-agent/pull/35040) | Medium (closed PR, streaming SSE) | **Yes** — HAL Voice integration |

**Top prediction**: Plugin lifecycle (#64229) + Dashboard email allowlist (#76519) + Headroom compression (#40322) + Voice streaming (#35040) will land in v0.20. Font selector is a quick follow-up.

## 7. User Feedback Summary — Pain Points & Use Cases
| Theme | Representative Voices |
|-------|----------------------|
| **Windows desktop install/update broken** | “Bootstrap `.exe` fails on Windows… `npm` version requirement mismatch (`EBADENGINE`)” — [#76484](https://github.com/NousResearch/hermes-agent/issues/76484); “`hermes update` does not self-heal a stale primary launcher” — [#76421](https://github.com/NousResearch/hermes-agent/issues/76421) |
| **Multi-profile gateway conflicts** | “Multiple gateways running that are conflicting… switching profiles don’t deactivate other stuff” — [#75598](https://github.com/NousResearch/hermes-agent/issues/75598); “Fresh Desktop session falls back to home cwd on Windows” — [#65274](https://github.com/NousResearch/hermes-agent/issues/65274) |
| **Credential isolation anxiety** | “`resolve_anthropic_token()` bypasses profile secret scope — cross-profile credential leak” — [#51603](https://github.com/NousResearch/hermes-agent/issues/51603); “`microsoft-teams-apps` import side effect loads foreign `.env` into every gateway process” — [#62935](https://github.com/NousResearch/hermes-agent/issues/62935) |
| **Plugin/dashboard extensibility gaps** | “Sidebar/footer-* PluginSlot names declared+documented but never rendered in App.tsx” — [#76381](https://github.com/NousResearch/hermes-agent/issues/76381); “Demo/dogfood plugins enabled by default in production builds” — [#76064](https://github.com/NousResearch/hermes-agent/issues/76064) |
| **Media/tool delivery regressions** | “Queued follow-up responses bypass MEDIA extraction — attachment delivered as plain text path” — [#60845](https://github.com/NousResearch/hermes-agent/issues/60845); “OpenRouter xAI `:online` duplicates `web_search` tool” — [#76481](https://github.com/NousResearch/hermes-agent/issues/76481) |
| **CJK/IME UX** | “IME preedit text can begin visually after the composer placeholder” — [#75960](https://github.com/NousResearch/hermes-agent/issues/75960) |

**Sentiment**: Frustration with Windows desktop reliability (install, update, launcher, gateway connect) and multi-profile safety. Plugin authors feel blocked by undocumented/missing slot renders. Positive note: quick turnaround on Copilot startup stall (#76511) and Discord threading (#76513) shows maintainer responsiveness.

## 8. Backlog Watch — Stale/Important Items Needing Attention
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#32887](https://github.com/NousResearch/hermes-agent/issues/32887) `gateway_state.json` heartbeat tick missing — WebUI cross-container liveness fails for idle gateways | 67 days | Blocks containerized WebUI deployments; documented heartbeat not implemented | Open, P3, `needs-decision` |
| [#43757](https://github.com/NousResearch/hermes-agent/issues/43757) Responses API `function_call_output` items stripped from `input` array | 53 days | Breaks multi-turn tool use for Responses API clients | Open, P2 |
| [#64229](https://github.com/NousResearch/hermes-agent/issues/64229) Plugin lifecycle (registration handles, `on_unload`, supervised tasks) | 19 days | Core maintainer proposal; unblocks plugin ecosystem | Open, P3, `needs-decision` |
| [#25849](https://github.com/NousResearch/hermes-agent/issues/25849) `EMAIL_ADDRESS` vs `EMAIL_ACCOUNT` — IMAP standard compliance | 80 days | Long-standing standards gap for email platform | Open, P3 |
| [#34992](https://github.com/NousResearch/hermes-agent/issues/34992) Policy/audit authorization layer for tool execution | 65 days | External integration (Agent_Sudo); architectural | Open, P3, `question` |
| [#76381](https://github.com/NousResearch/hermes-agent/issues/76381) Sidebar/footer-* PluginSlots documented but not rendered in `App.tsx` | 1 day | Blocks first-party (`strike-freedom-cockpit`) and third-party plugins | Open, P3 |
| [#76064](https://github.com/NousResearch

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-02

## 1. Today's Overview
PicoClaw shows **low-to-moderate maintenance activity** over the last 24 hours: one long-standing bug issue received updates, one localization PR was closed, and two new provider-integration PRs were opened. No releases were published. The project’s current focus appears to be **stability hardening (Matrix reconnection)** and **expanding the LLM/web-search provider ecosystem**. Community engagement is modest—most items have few or no reactions/comments—suggesting a small but active contributor base.

## 2. Releases
**No new releases** in the last 24 hours. The latest published version remains **v0.2.9** (per issue #3203 environment note).

## 3. Project Progress (Merged/Closed PRs)
| PR | Title | Author | Status | Summary |
|----|-------|--------|--------|---------|
| [#3261](https://github.com/sipeed/picoclaw/pull/3261) | Add zh-TW locale and Traditional Chinese translations | PeterDaveHello | **Closed** (stale) | Adds Taiwanese terminology across WebUI and documentation. Closed without merge—likely superseded or deemed stale. No maintainer comment visible. |

*No other PRs were merged today.* The two open PRs (#3299, #3309) are new provider additions awaiting review.

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | **Bug** | 7 comments, 2 👍, updated 2026-08-01 | **Critical reliability gap**: Matrix `/sync` long-polling dies silently on any network/homeserver disruption; no auto-reconnect; systemd `Restart=on-failure` ineffective because main process stays alive. Users experience “silent death” of bridge until manual restart. |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | **Feature PR** | 0 comments, opened 2026-07-26, updated 2026-08-01 | **Web-search diversification**: Native Exa provider (`tools.web`/`web_search`) with date-range filters (`d/w/m/y`), highlights, and API-key auth. |
| [#3309](https://github.com/sipeed/picoclaw/pull/3309) | **Feature PR** | 0 comments, opened 2026-08-01 | **Provider ecosystem growth**: First-class OrcaRouter support (OpenAI-compatible, multi-vendor router at `api.orcarouter.ai/v1`, `vendor/model` IDs). |

**Analysis**: The Matrix reconnection bug (#3203) is the **only item with substantive discussion** (7 comments, 2 upvotes), signaling it as the top user-visible pain point. The two provider PRs reflect ongoing demand for **broader model/search integrations** but have not yet attracted community feedback.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) — Matrix sync loop has no reconnection logic; silent death after network/server disruption | **Open**, stale-tagged, last updated 2026-08-01 | **No linked fix PR**. Workaround: manual restart. |

*No new crashes or regressions reported today.* The stale tag on #3203 suggests it may have been triaged but not prioritized.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Exa web search provider** | [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) | **High** — well-scoped, uses existing `tools.web` interface, adds date-range filters. |
| **OrcaRouter (OpenAI-compatible) provider** | [PR #3309](https://github.com/sipeed/picoclaw/pull/3309) | **High** — follows existing provider pattern (`vendor/model` IDs), minimal integration risk. |
| **Traditional Chinese (zh-TW) locale** | [PR #3261](https://github.com/sipeed/picoclaw/pull/3261) (closed) | **Low** — PR closed stale; may be revisited if contributor resubmits. |
| **Matrix auto-reconnect** | [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) | **Medium** — high user impact but no fix PR yet; may require core loop refactor. |

**Prediction**: The two provider PRs (#3299, #3309) are the **most likely to land in the next minor release** (v0.2.10 or v0.3.0) given their low risk and clear user demand for model/search diversity.

## 7. User Feedback Summary
- **Pain point**: Matrix bridge reliability (#3203) — users lose bridging silently after any network hiccup or homeserver restart; no logs/alerts; manual intervention required.  
- **Use cases**:  
  - Multi-provider LLM routing (OrcaRouter) — users want unified access to multiple vendors via one endpoint.  
  - Enhanced web search (Exa) — need for richer highlights and date-filtered results in agent workflows.  
  - Localization — zh-TW request indicates Taiwanese user base, but PR stalled.  
- **Sentiment**: Mixed. Stability concern on core Matrix functionality vs. enthusiasm for expanding provider portfolio. No explicit satisfaction/dissatisfaction metrics beyond the 2 👍 on #3203.

## 8. Backlog Watch (Needs Maintainer Attention)
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) Matrix sync loop no reconnection | **31 days** (opened 2026-07-02) | Core bridge reliability; affects all Matrix users; stale tag may hide urgency. | **Triage**: assign, label `priority:high`, solicit fix PR or implement exponential backoff + health-check restart. |
| [#3261](https://github.com/sipeed/picoclaw/pull/3261) zh-TW locale | 17 days (closed stale) | Localization gap for Taiwanese users; PR had full WebUI + docs coverage. | **Reopen or mentor** contributor to rebase/resubmit; add `help wanted` + `localization` labels. |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) Exa provider | 7 days | First native Exa integration; expands search capabilities. | **Review**: check API compatibility, test date-range filters, merge if CI passes. |
| [#3309](https://github.com/sipeed/picoclaw/pull/3309) OrcaRouter provider | 1 day | Adds multi-vendor router; low-risk OpenAI-compat pattern. | **Fast-track review**: validate endpoint, model ID format, add to provider docs. |

---

**Overall Health Indicator**: 🟡 **Caution** — Core stability issue (#3203) unresolved for a month; provider ecosystem growing healthily but review bandwidth appears limited. Recommended: prioritize Matrix reconnection fix and clear the two provider PRs to unblock contributors.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-02

---

## 1. Today's Overview
NanoClaw shipped a major rollup release **v2.1.54** bundling 36 versions since v2.1.17, headlined by a **breaking unification of iMessage** into a single `imessage` channel with pluggable Local (Chat SDK) and Hosted (Photon) backends. The repo saw **high velocity**: 15 PRs updated and 2 issues touched in 24h, with 5 PRs merged/closed—mostly fixes, a skill removal, and the iMessage feature landing. Active PRs (10 open) cluster around Docker rootless support, egress updates, release safety, and long-standing router/container hardening. Community friction points surfaced in two new issues: a setup flow that incorrectly pushes Claude CLI on non-Claude providers, and two bundled Qodo skills that depend on an unconfigured SaaS integration.

---

## 2. Releases
### **v2.1.54** — Rollup (v2.1.18 → v2.1.54)
- **Breaking Change**: iMessage unified into **one `imessage` channel** with two backends, installed via `/add-imessage`:
  - **Local** — reads this Mac’s `chat.db` via the Chat SDK
  - **Hosted** — native Photon (spectru.m) backend
- Migration: existing iMessage channel configs must be re-added via `/add-imessage`; old channel keys are deprecated.
- Includes all fixes/features from v2.1.18–v2.1.53 (see merged PRs below).
- **Release PR**: #3164 (supersedes #2999 with working registration flow)  
- **Tag**: `v2.1.54` | [GitHub Release](https://github.com/nanocoai/nanoclaw/releases/tag/v2.1.54)

---

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#2999](https://github.com/nanocoai/nanoclaw/pull/2999) | Feature/Skill | **Unify iMessage into single `imessage` channel (Local + Hosted backends)** — core breaking feature for v2.1.54 | ✅ Released |
| [#3164](https://github.com/nanocoai/nanoclaw/pull/3164) | Feature/Skill | Hosted iMessage (Photon): working registration flow, supersedes #2999 | ✅ Released |
| [#3170](https://github.com/nanocoai/nanoclaw/pull/3170) | Fix | Setup: dispatch failure assist to the **picked provider** (not always Claude) | Fixes #3169 |
| [#3168](https://github.com/nanocoai/nanoclaw/pull/3168) | Fix | Release: close post-merge safety gaps | CI/CD hardening |
| [#3167](https://github.com/nanocoai/nanoclaw/pull/3167) | Feature | Credentials: alert when a provider credential expires | Observability |
| [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) | Refactor | **Remove two Qodo skills** (`get-qodo-rules`, `qodo-pr-resolver`) — depend on unconfigured SaaS | Addresses #3171 |

**Net**: iMessage unification shipped; setup provider-mismatch fixed; unused/broken Qodo skills removed; release pipeline hardened; credential expiry alerting added.

---

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3169](https://github.com/nanocoai/nanoclaw/issues/3169) (Closed) + [#3170](https://github.com/nanocoai/nanoclaw/pull/3170) | Issue created & PR merged same day; 0 comments but immediate maintainer action | **Provider-agnostic setup UX** — users picking Codex/other providers shouldn’t be funneled to Claude CLI install/sign-in on failure. |
| [#3171](https://github.com/nanocoai/nanoclaw/issues/3171) (Open) + [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) | Issue filed, removal PR opened same day; 0 comments | **Bundled skill hygiene** — skills requiring external SaaS accounts with no setup path create broken OOTB experience. |
| [#2999](https://github.com/nanocoai/nanoclaw/pull/2999) / [#3164](https://github.com/nanocoai/nanoclaw/pull/3164) | Long-running feature PR (opened 2026-07-10), now merged | **Channel consolidation** — reduce operator cognitive load; single `/add-imessage` entry point for both backends. |

*No high-comment threads today; resolution speed signals maintainers prioritize setup/skill breakage.*

---

## 5. Bugs & Stability — Reported Today
| Severity | Issue / PR | Summary | Fix Status |
|----------|------------|---------|------------|
| **High** | [#3169](https://github.com/nanocoai/nanoclaw/issues/3169) | Setup failure on non-Claude providers incorrectly offers Claude CLI install + Anthropic sign-in | ✅ Fixed in [#3170](https://github.com/nanocoai/nanoclaw/pull/3170) (merged) |
| **Medium** | [#3171](https://github.com/nanocoai/nanoclaw/issues/3171) | Two bundled Qodo skills require `~/.qodo/config.json` API key; nothing sets it up; skills intercept normal coding requests | ✅ Fix PR [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) open (removes skills) |
| **Medium** | [#3166](https://github.com/nanocoai/nanoclaw/pull/3166) | `migrate-v2` calls removed `insertTask` (now `insertTaskRow`) — static ESM import crashes migration | ✅ Fix PR open |
| **Low** | [#2956](https://github.com/nanocoai/nanoclaw/pull/2956) | Agent runner duplicate delivery when `send_message` tool output repeats in final text | Open (since 2026-07-05) |
| **Low** | [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) | Stale `outbound.db` journals after container SIGKILL; hot-journal poll races | Open (since 2026-06-12) |
| **Low** | [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) | Router `safeParseContent` returns non-object for primitive JSON, breaking `.text`/`.sender` access | Open (since 2026-06-17) |

**No new crashes/regressions reported today beyond the two setup/skill bugs (both have fix PRs).**

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Rootless Docker support** | [#3174](https://github.com/nanocoai/nanoclaw/pull/3174) (new PR) | High — explicit fix for agent containers on rootless daemon; maintainers likely to merge soon |
| **Egress configuration update** | [#3173](https://github.com/nanocoai/nanoclaw/pull/3173) | Medium — operational skill, follows guidelines |
| **Reaction delivery best-effort** | [#3121](https://github.com/nanocoai/nanoclaw/pull/3121) | Medium — UX polish for channel interactions |
| **Docs: pairing status blocks** | [#3046](https://github.com/nanocoai/nanoclaw/pull/3046) | Low — documentation only |
| **Credential expiry alerting** | [#3167](https://github.com/nanocoai/nanoclaw/pull/3167) (merged) | ✅ Already in v2.1.54 |

**Prediction**: v2.1.55 will likely include rootless Docker fix (#3174), migrate-v2 import fix (#3166), and possibly egress update (#3173). Qodo skill removal (#3172) may ship as a follow-up patch.

---

## 7. User Feedback Summary
- **Pain Points**:
  - Setup wizard assumes Claude even when operator picks Codex/other providers (#3169).
  - Bundled skills (`get-qodo-rules`, `qodo-pr-resolver`) silently fail and intercept requests because they require an unconfigured Qodo SaaS account (#3171).
  - iMessage channel fragmentation (pre-v2.1.54) forced operators to manage separate Local/Hosted configs.
  - Agent containers fail on rootless Docker without clear error messages (#3174).
  - Migration script (`migrate-v2`) crashes on import error, blocking upgrades (#3166).
- **Positive Signals**:
  - iMessage unification (/add-imessage) directly addresses operator feedback about channel complexity.
  - Credential expiry alerting (#3167) resolves silent failure mode (operator saw only “Reconnecting…”).
  - Rapid turnaround on setup/skill bugs (issue → fix PR merged same day).

---

## 8. Backlog Watch — Long-Unanswered / Stale Items Needing Attention
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) | 51 days | Open | Recovers stale SQLite journals after container kills; fixes two prior issues (#2516, #2640). Critical for reliability on SIGKILL/restart. |
| [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) | 46 days | Open | Router hardening: `safeParseContent` breaks on primitive JSON payloads. Affects all untrusted input paths. |
| [#2956](https://github.com/nanocoai/nanoclaw/pull/2956) | 28 days | Open | Agent runner duplicate message delivery — UX degradation for tool-using agents. |
| [#3090](https://github.com/nanocoai/nanoclaw/pull/3090) | 14 days | Open | Templates: prepend all top-level context Markdown. Template engine fix. |
| [#3121](https://github.com/nanocoai/nanoclaw/pull/3121) | 10 days | Open | Reaction delivery best-effort — prevents channel errors from bubbling on transient failures. |

**Recommendation**: Prioritize #2750 (data integrity), #2801 (security/robustness), and #3166 (upgrade blocker) for next patch cycle.

---

## Links Index
- **Release**: [v2.1.54](https://github.com/nanocoai/nanoclaw/releases/tag/v2.1.54)
- **iMessage Unification**: [#2999](https://github.com/nanocoai/nanoclaw/pull/2999) · [#3164](https://github.com/nanocoai/nanoclaw/pull/3164)
- **Setup Provider Fix**: [#3169](https://github.com/nanocoai/nanoclaw/issues/3169) · [#3170](https://github.com/nanocoai/nanoclaw/pull/3170)
- **Qodo Skills Removal**: [#3171](https://github.com/nanocoai/nanoclaw/issues/3171) · [#3172](https://github.com/nanocoai/nanoclaw/pull/3172)
- **Rootless Docker**: [#3174](https://github.com/nanocoai/nanoclaw/pull/3174)
- **Migrate-v2 Import Fix**: [#3166](https://github.com/nanocoai/nanoclaw/pull/3166)
- **Backlog**: [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) · [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) · [#2956](https://github.com/nanocoai/nanoclaw/pull/2956) · [#3090](https://github.com/nanocoai/nanoclaw/pull/3090) · [#3121](https://github.com/nanocoai/nanoclaw/pull/3121)

--- 

*Digest generated from GitHub data as of 2026-08-02 00:00 UTC. All links point to nanocoai/nanoclaw repository.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-02

## 1. Today's Overview
IronClaw is in a **high-velocity architectural refactoring phase** with 35 total GitHub items updated in the last 24 hours (11 issues, 24 PRs). The project shows **zero new releases** but intense internal activity around "Wave 1/Wave 2" workstreams (WS1–WS5) that restructure crate boundaries, invert dependency directions onto `ironclaw_product_contracts`, and harden CI gates. Eight PRs were merged/closed today, mostly closing Wave 1 tracking issues and completing the first slots of Wave 2. The codebase is undergoing systematic **contract inversion** (moving port definitions from `ironclaw_product` to `ironclaw_product_contracts`), **crate splitting** (`extension_manager` extracted from `extension_host`), and **CI gate modernization** (path-keyed gates rewritten to survive directory restructuring). Performance regression recovery for hosted Postgres (#6973) and libSQL tool-heavy workloads (#6974) remain open critical-path items.

## 2. Releases
**No new releases published today.** The last release PR (#5598) remains open since 2026-07-03, staging breaking changes for `ironclaw_common` 0.5.0 and `ironclaw_skills` 0.4.0.

## 3. Project Progress — Merged/Closed Today (8 PRs)
| PR | Title | Impact |
|----|-------|--------|
| [#6996](https://github.com/nearai/ironclaw/pull/6996) | **ci(gates): close #6963 — inventory-driven discovery + fail-closed across remaining path-keyed gates** | Completes the CI gate rewrite started in #6946; eight defective gates (six silent, two loud) now use inventory-driven discovery that survives `git mv` crate moves. |
| [#6998](https://github.com/nearai/ironclaw/pull/6998) | **refactor(contracts): invert extension_host's product-facing ports onto product_contracts (WS2.1)** | First Wave 2 slot merged — `ironclaw_extension_host` now implements `ironclaw_product_contracts` ports; behavior-free definition move per PROPOSAL §6.1.4. |
| [#6995](https://github.com/nearai/ironclaw/pull/6995) | **docs(target-architecture): Wave 1 truth audit** | Reconciles `docs/reborn/target-architecture/` against merged `main` at `a50ad0638` after seven Wave 1 PRs landed. |
| [#6761](https://github.com/nearai/ironclaw/pull/6761) | **test: cover generic outbound registration** | Adds regression test for generic channel outbound-target provider registration on mutable registry. |
| [#6921](https://github.com/nearai/ironclaw/issues/6921) | **[scope: dependencies, refactoring, reborn] Extract neutral loop, extension, and product contracts and seal evidence minting** | Issue closed — neutral vocabulary moved to `ironclaw_host_api`; authority evidence minting sealed. |
| [#6963](https://github.com/nearai/ironclaw/issues/6963) | **Path-keyed CI gates that survive #6946** | Tracking issue closed by #6996. |
| [#7002](https://github.com/nearai/ironclaw/pull/7002) | **refactor(contracts): invert webui + openai_compat onto product_contracts (WS5)** | Closed (merged into #7005 branch); completes WS5 transport port inversion for webui/openai_compat. |
| [#6996](https://github.com/nearai/ironclaw/pull/6996) also closes the **reborn_registration_pipeline_boundary** gate added during #6963 review. |

**Net effect**: Wave 1 fully merged and audited; Wave 2 slots 1 (WS2.1) and 5 (WS5 transport inversion) complete; CI gate infrastructure now robust against crate relocation.

## 4. Community Hot Topics — Most Active Items
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#6963](https://github.com/nearai/ironclaw/issues/6963) | Issue | 7 | **CI resilience** — eight path-keyed gates broken by crate moves; resolved by inventory-driven discovery in #6996. |
| [#6973](https://github.com/nearai/ironclaw/pull/6973) | PR | (high) | **Postgres capacity regression** — p95 latency 3.74s → 12.0s after row-native process journal (#6696); recovery PR open, XL scope. |
| [#6974](https://github.com/nearai/ironclaw/issues/6974) | Issue | 2 | **libSQL tool-heavy stress** — p95 37–135s post-#6696; nightly suite completes but misses 2.5s SLO. |
| [#6978](https://github.com/nearai/ironclaw/issues/6978) | Issue | 1 | **Reborn-tests.yml dispatch failure** — `critical-mutation` job skipped on `workflow_dispatch` but roll-up requires it; structural workflow bug. |
| [#6780](https://github.com/nearai/ironclaw/pull/6780) | PR | (high) | **IronHub deep-link register/install** — re-port of #5409; public HMAC handshake + private manifest source; XL scope, medium risk. |

**Underlying theme**: The project is **paying down architectural debt** (CI gates, crate boundaries, contract ownership) while simultaneously **recovering performance regressions** introduced by the row-native process journal. Contributors are almost exclusively core team members; external community signal is minimal.

## 5. Bugs & Stability — Regressions & Defects Reported Today
| Severity | Item | Description | Fix Status |
|----------|------|-------------|------------|
| **Critical** | [#6973](https://github.com/nearai/ironclaw/pull/6973) | Hosted Postgres API p95 latency **275ms → 4.78s** (12.0s gate p95); `send_message` path regression after #6696 row-native journal. | PR open (XL, low risk), under review |
| **Critical** | [#6974](https://github.com/nearai/ironclaw/issues/6974) | libSQL tool-heavy stress p95 **37–135s** (SLO 2.5s); nightly suite now completes but wildly over budget. | No fix PR yet; split from #6973 |
| **High** | [#6978](https://github.com/nearai/ironclaw/issues/6978) | `reborn-tests.yml` roll-up fails on `workflow_dispatch` because `critical-mutation` job's `if:` requires `pull_request`/`merge_group`. | No fix PR; workflow logic bug |
| **High** | [#7006](https://github.com/nearai/ironclaw/issues/7006) | Changed-coverage gate flags ~180 lines in steering-queue error paths (CAS conflict, FS errors, serialization) that **integration harness cannot inject faults for**. | No fix PR; architecture gap |
| **Medium** | [#7011](https://github.com/nearai/ironclaw/issues/7011) | Five pre-existing findings in `extension_manager` split (#7003): false `WriteFilesystem` effect, untested lock predicate, missing dispatch tests, dropped causes. | In moved code (0% diff); no fix PR |
| **Medium** | [#6999](https://github.com/nearai/ironclaw/issues/6999) | `reborn_dependency_boundaries` server-lifecycle rule never covered WebChat v2 route surface it documents. | Architecture call needed; not a gate fix |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|------------------------------|
| **OrcaRouter as built-in LLM provider** | [#7009](https://github.com/nearai/ironclaw/issues/7009) (external contributor `jinhaosong-source`) | **High** — providers.json already has 9 multi-provider gateways; single-file addition. |
| **OOBE automation-tasks backend wiring** | [#6993](https://github.com/nearai/ironclaw/issues/6993) + PR [#6994](https://github.com/nearai/ironclaw/pull/6994) (UI prototype) | **High** — UI prototype landed; backend contract (`AUTOMATION-TASKS-CONTRACT.md`) exists. |
| **Explicit Anthropic `cache_control` breakpoints** | [#6997](https://github.com/nearai/ironclaw/pull/6997) (P0 pi-harness adoption) | **Merged/landing** — PR open, closes #6984; companion #7001 (system prefix byte-stability) also open. |
| **Merge-queue failure alerts to live-canary Slack** | [#7007](https://github.com/nearai/ironclaw/pull/7007) | **Medium** — operational tooling; adds workflow contract test. |
| **Split `product_wire.rs` (1,923 lines) in `ironclaw_product_contracts`** | [#7008](https://github.com/nearai/ironclaw/issues/7008) | **Required** — exceeds 1,500-line `large_file` threshold; arch-exempt annotation present. |

**Roadmap inference**: Next version will likely ship **Wave 2 contract inversions** (WS2.2–WS2.4, WS5), **Anthropic caching optimizations**, **OOBE automation backend**, and **OrcaRouter provider**. Performance regressions (#6973, #6974) are blockers for hosted capacity gates.

## 7. User Feedback Summary
**Direct user feedback is absent from today's data** — all 35 items are internal engineering (core team, bots). Pain points inferred from issues:
- **CI/CD friction**: Path-keyed gates break on crate moves (#6963), locale-sensitive `comm` in crate discovery (#6992), workflow_dispatch roll-up failure (#6978).
- **Performance anxiety**: Postgres/libSQL regressions after architectural change (#6696) threaten hosted SLOs.
- **Architectural drift**: Contract ownership unclear (multiple inversion PRs), crate boundaries shifting (extension_manager split), large files accumulating exemptions.
- **Testing gaps**: Integration harness cannot fault-inject steering-queue error paths (#7006); mutation testing skipped on dispatch (#6978).

No end-user issues, feature requests from non-core contributors (except #7009), or satisfaction signals visible.

## 8. Backlog Watch — Stale/Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5598](https://github.com/nearai/ironclaw/pull/5598) | **30 days** | **Release PR** — stages breaking changes for 3 crates; blocked on Wave 1/2 completion? |
| [#5981](https://github.com/nearai/ironclaw/pull/5981) | **22 days** | **Queued-message steering** — XL, medium risk; trips changed-coverage gate (#7006); forward-ported with turn-boundary race fixes. |
| [#5982](https://github.com/nearai/ironclaw/pull/5982) | **22 days** | **Budget approval-as-blocked-gate** — split 2/2, stacked on #5981; adds usage settings tab. |
| [#6780](https://github.com/nearai/ironclaw/pull/6780) | **5 days** | **IronHub deep-link register/install** — XL, medium risk; re-port of community PR #5409; unmerged. |
| [#6917](https://github.com/nearai/ironclaw/pull/6917) | **3 days** | **WebUI workspace file links** — XL, low risk; opens authenticated previews for `/workspace/` and `sandbox:/workspace/` links. |
| [#6973](https://github.com/nearai/ironclaw/pull/6973) | **1 day** | **Postgres capacity recovery** — XL, low risk; critical regression; needs review merge. |

**Maintainer action suggested**: Prioritize #6973 (production regression), #5598 (release unblock), and #6978 (CI structural fix). The stacked Wave 2 PRs (#6998→#7000→#7003→#7004→#7005) should be reviewed in sequence to avoid merge conflicts.

---

**Project Health Indicators**
- 🟢 **Velocity**: Very high (35 updates/24h)
- 🟡 **Stability**: Two critical performance regressions open
- 🟢 **Architecture**: Systematic debt paydown in progress (Waves 1–2)
- 🔴 **Community**: Near-zero external participation
- 🟡 **Release Cadence**: Stalled >30 days

*Data sourced from GitHub API; all links point to nearai/ironclaw.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-02

---

## 1. Today's Overview

LobsterAI shows **low active development velocity** on 2026-08-02. The repository processed 7 issue updates and 2 PR updates in the last 24 hours, but all 6 closed issues were auto-marked `[stale]` (originally created April 2026), indicating a stale-bot cleanup rather than active resolution. Zero PRs were merged. Two PRs remain open (#1224 from April, #2358 from July), suggesting a backlog of unreviewed contributions. No new releases were published. Project health appears **maintenance-mode** with limited maintainer bandwidth for triage and review.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Project Progress

| PR | Status | Summary | Linked Issue |
|----|--------|---------|--------------|
| [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) | Open (stale) | Fixes i18n hardcoded Chinese label in `CoworkPromptInput`, adds Escape key support to Agent modals, adds delete double-click guard. | Closes #1223 |
| [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | Open | Adds localized failure feedback when session rename fails (IPC error handling + toast). | Fixes #670 |

**No PRs merged today.** Both open PRs address UX polish and i18n — valuable but non-critical. The April PR (#1224) has lingered 4 months without review.

---

## 4. Community Hot Topics

| Item | Type | Comments | Reactions | Core Need |
|------|------|----------|-----------|-----------|
| [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | Issue (closed/stale) | 2 | 👍 1 | **Custom MCP (non-SSE) not registered in OpenClaw engine** — blocks self-hosted/private MCP server usage. |
| [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | Issue (closed/stale) | 2 | — | **Large image (3MB) upload crashes UI**, leaves app in broken state until restart — stability blocker for multimodal workflows. |
| [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | Issue (closed/stale) | 2 | — | **False "input too long" error on 2-char prompts** — token counting / validation bug preventing basic usage. |
| [#1302](https://github.com/netease-youdao/LobsterAI/issues/1302) | Issue (closed/stale) | 2 | — | **Code block line numbers** — developer productivity feature (toggle via react-syntax-highlighter). |
| [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) | Issue (open/stale) | 1 | — | **i18n regression + Agent modal UX gaps** (Escape close, delete guard) — already has fix PR #1224. |

**Pattern:** Users hit **core stability bugs** (MCP integration, image upload, token validation) and **developer UX gaps** (line numbers, i18n, modal keyboard support). All high-impact issues were auto-closed stale — maintainers did not engage.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | 3MB long-image upload → permanent UI crash, requires app restart. Blocks multimodal use. | No |
| **Critical** | [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | Token validation falsely rejects 2-char inputs — basic chat broken. | No |
| **High** | [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | Custom MCP (stdio/HTTP) not loaded in OpenClaw; only SSE works. Breaks extensibility. | No |
| **Medium** | [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) | Model provider edit panel becomes read-only after closing another panel — state leak. | No |
| **Low** | [#1305](https://github.com/netease-youdao/LobsterAI/issues/1305) | Deleted scheduled task shows wrong title in history — UI sync bug. | No |

**No fix PRs exist for any of the critical/high bugs.** All were stale-closed without resolution.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| Code block line-number toggle | [#1302](https://github.com/netease-youdao/LobsterAI/issues/1302) | **High** — clear spec, uses existing lib (`react-syntax-highlighter`), low risk. |
| Session rename failure feedback | [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) (PR) | **High** — PR ready, fixes #670, small scope. |
| i18n compliance + Agent modal polish | [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) (PR) | **Medium** — PR stale 4 months; needs rebase/review. |
| Custom MCP (non-SSE) support | [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | **Low** — core architecture change, no PR, stale-closed. |
| Large image upload handling | [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | **Low** — requires backend/storage changes, no PR. |

**Signal:** Maintainers prioritize small UI polish (line numbers, rename toast) over core stability (MCP, uploads, token counting).

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Multimodal broken** | #1296: 3MB image → unrecoverable crash | High — blocks vision use cases |
| **Basic chat unreliable** | #1298: 2-char prompt rejected as "too long" | High — erodes trust |
| **Extensibility limited** | #1293: Only SSE MCP works; custom HTTP/stdin MCP ignored | Medium — power users blocked |
| **i18n leakage** | #1223: Hardcoded Chinese in English prompts | Medium — i18n non-compliant |
| **Modal keyboard traps** | #1223: No Escape close; double-delete risk | Low — UX friction |

**Sentiment:** Frustration with **silent failures** (crashes, false validation) and **stale closures** without fixes. Users report bugs with screenshots; maintainers respond only via stale bot.

---

## 8. Backlog Watch — Needs Maintainer Attention

| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) | 4 months | Fixes i18n bug + Agent modal UX (Escape, double-click guard). Ready to merge. | **Review & merge** — low risk, high polish value. |
| [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | 15 days | Session rename failure feedback (fixes #670). Complete PR. | **Review & merge** — small, user-facing improvement. |
| [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | 4 months | Custom MCP broken — core extensibility gap. | **Triage**: reopen, label `bug`, assign or accept PR. |
| [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | 4 months | Image upload crash — data loss risk, app instability. | **Triage**: reproduce, prioritize fix. |
| [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | 4 months | Token validation false positive — blocks all short prompts. | **Triage**: likely 1-line fix in validation logic. |

---

**Bottom Line:** LobsterAI has **valuable community contributions stalled in review** (#1224, #2358) and **critical bugs auto-closed by stale bot** without fixes. Immediate health improvement: merge the two ready PRs, reopen/triage the 3 critical bugs (#1293, #1296, #1298), and disable or tune stale bot for bug reports.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-08-02

## 1. Today's Overview
Moltis shows focused maintenance activity with three pull requests updated in the last 24 hours—one open and two merged/closed. No new issues were filed, no releases were published, and community discussion remains quiet. The merged work delivers a significant observability foundation (instrumentation, Langfuse v4 export, OTLP backends, user feedback) and a security hardening for channel operators, while the open PR relaxes a long-standing restriction on the `main` session. Overall, the project is in a steady improvement phase with no signs of instability or backlog pressure.

## 2. Releases
*No new releases published today.*

## 3. Project Progress
| PR | Status | Summary |
|----|--------|---------|
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | **Closed/Merged** | Adds backend-neutral agent instrumentation, Langfuse v4 export, operational OTLP backends, and end-user reaction feedback. Records immutable completion-only turns with streaming/non-streaming parity, provider failover attribution, cache-aware token usage, reasoning, and tool-call metadata. |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | **Closed/Merged** | Separates channel *access* from *privilege* by introducing a per-account `operators` list. Gates `/sh` and other privileged tools behind this explicit allowlist, enforcing the boundary across commands, callbacks, queue replay, chat execution, and external integrations. |
| [#1182](https://github.com/moltis-org/moltis/pull/1182) | **Open** | Removes the `main` session guard in `delete_impl` and `is_archivable_entry`, allowing the default session to be deleted and archived like any other. The current-active-channel-session archive restriction remains, and `sessions.clear_all` still preserves `main`/channel-bound sessions. |

## 4. Community Hot Topics
*No issues or PRs with significant comments or reactions in the last 24 hours.* The three PRs above have zero recorded comments or 👍 reactions, indicating low community friction on these changes.

## 5. Bugs & Stability
*No bug reports, crashes, or regressions filed today.* The two merged PRs are feature/security enhancements rather than bug fixes; the open PR (#1182) addresses a UX limitation (inability to delete/archive `main`) rather than a defect.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| Full lifecycle control for the `main` session (delete/archive) | PR #1182 (open, authored by maintainer `shixi-li`) | High – small, targeted change with clear rationale |
| Extended observability (custom exporters, richer feedback UI) | PR #1174 (merged) | Medium – foundational work done; follow-up UI/UX issues likely |
| Granular RBAC for channels (beyond binary operator list) | PR #1170 (merged) | Low–Medium – current model is minimal; future demand may drive roles/permissions |

## 7. User Feedback Summary
*No direct user feedback (issues, discussions, or PR comments) captured in the last 24 hours.* The merged instrumentation work (#1174) implicitly responds to a common need for production-grade observability and user-satisfaction signals, but no explicit pain points were voiced today.

## 8. Backlog Watch
*No long-unanswered issues or stale PRs requiring immediate maintainer attention.* The only open PR (#1182) was created yesterday and is actively maintained by a core contributor. The issue it references (#1132) is not in today’s data set, suggesting it was already tracked and is now being resolved.

---

*Data sourced from GitHub API for moltis-org/moltis; covers activity between 2026-08-01 and 2026-08-02.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-02

---

## 1. Today's Overview

CoPaw shows **high development velocity** with 22 items (9 issues + 13 PRs) updated in the last 24 hours. The project is in active bug-fixing and feature-enhancement mode, with **no new releases** but **one PR merged** (#6598 fixing plugin-sourced skill tags persistence). The majority of activity centers on **memory/compression reliability**, **ACP protocol stability**, **provider integrations**, and **desktop UX improvements**. Community engagement is moderate—most items have 1–2 comments but zero reactions, suggesting issues are being triaged by maintainers rather than debated publicly.

---

## 2. Releases

**No new releases** in the last 24 hours. The latest version remains **QwenPaw 2.0.1** (desktop).

---

## 3. Project Progress — Merged / Closed PRs Today

| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#6598](https://github.com/agentscope-ai/QwenPaw/pull/6598) | **fix(skills): preserve plugin-sourced skill tags across reconcile cycles** | Skills / Persistence | **Merged**. Fixes #6537: skill tags set in Skill Pool UI no longer disappear after restart. Plugin-sourced skills (which lack on-disk directories) are now retained during manifest reconciliation. |

*Only one PR merged today; 12 PRs remain open and under review.*

---

## 4. Community Hot Topics — Most Active Issues & PRs

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) | Issue (enhancement) | 2 | 0 | **Unified cleanup UI** — users accumulate massive data (auto-memory, tool artifacts, backups, multi-agent collaboration debris) with no global way to purge. Request: dedicated cleanup page + automated policies. |
| [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) | Issue (enhancement) | 2 | 0 | **Global hotkey floating input** — "Doubao-style" quick-access mini-window (Option+Space / Alt+Space) to lower friction for ad-hoc queries. Current main-window workflow too heavy. |
| [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) | Issue (question/feedback) | 1 | 0 | **Multi-agent onboarding gap** — user ran 50+ sessions before discovering Default Agent *requires explicit PROFILE.md instructions* to delegate to other agents. Docs describe *how*, not *that it's required*. |
| [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) | Issue (question) | 2 | 0 | **`nohup` / `&` shell commands hang agent** — backgrounded processes never return to idle, blocking the tool loop. |
| [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) | PR (first-time contributor) | – | – | **ACP race condition fix** — notification vs. prompt response ordering loses final text output. High relevance for multi-agent users. |

**Underlying themes**:  
- **Data hygiene** (#6593) — long-term users hit storage/UX walls.  
- **Discoverability** (#6621) — powerful multi-agent features are invisible without "tribal knowledge."  
- **Lightweight access** (#6568) — desktop UX still feels "heavy" for quick tasks.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) | **Crash**: `"ToolCallBlock" object has no field "extra_content"` in `openai_chat_model_compat._parse_stream_response` when streaming Gemini responses with `thought_signature`. Blocks all Gemini tool-use streaming. | ✅ [#6620](https://github.com/agentscope-ai/QwenPaw/pull/6620) (open) |
| **High** | [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) | **ACP data loss**: `delegate_external_agent` returns "completed without text output" when `session/update` notification races `session/prompt` response (same TCP segment). Silent failure, user sees empty result. | ✅ [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) (open) |
| **Medium** | [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) | **Memory regression**: Auto-compression (Scroll) does **not** trigger `summarize_when_compact` memory flow; manual `/compact` **does**. Users lose automatic summarization on context eviction. | ✅ [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) (open) |
| **Medium** | [#6626](https://github.com/agentscope-ai/QwenPaw/issues/6626) | **CI gate false negative**: "Real behavior proof" gate strips fenced code blocks from `## Evidence`, causing valid terminal-transcript-only evidence to be rejected. | ❌ No PR yet |
| **Medium** | [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) | **Shell hang**: `nohup` / trailing `&` commands never return control to agent; process detaches but tool call stays pending. | ❌ No PR yet |
| **Low** | [#6627](https://github.com/agentscope-ai/QwenPaw/issues/6627) | **Documentation gap**: How to integrate `loongsuite-python` for LLM tracing with QwenPaw (docs only cover AgentScope). | ❌ No PR yet |

> **Note**: Three high/medium bugs already have fix PRs authored by contributors (two first-time). Maintainer review latency is the current bottleneck.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|-----------------------------|-----------|
| **Global cleanup / storage management page** | [#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) | 🟡 Medium | High user pain, but requires UI + backend policy engine. May be scoped for 2.1. |
| **Global hotkey floating input (Doubao/Raycast style)** | [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) | 🟢 High | Clear spec, existing Tauri codebase supports global shortcuts; PR groundwork in `console/src-tauri`. Strong UX differentiator. |
| **OrcaRouter as built-in provider** | [#6622](https://github.com/agentscope-ai/QwenPaw/pull/6622) | 🟢 High | Trivial integration (OpenAI-compatible), first-time contributor PR ready. Low risk, high value for router users. |
| **Unified provider discovery & model routing** | [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 🟡 Medium | Large refactor (opened 7/21), touches core model selection. Active but may need more bake time. |
| **Workspace shortcut in desktop sidebar** | [#6306](https://github.com/agentscope-ai/QwenPaw/pull/6306) | 🟢 High | Small desktop-only feature, closes #6083, ready for review. |
| **Tool-card inline images + gallery** | [#5490](https://github.com/agentscope-ai/QwenPaw/pull/5490) | 🟡 Medium | Open since 6/24, UX polish. Depends on console refactor priorities. |
| **Multi-agent onboarding / explicit delegation docs** | [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) | 🟢 High | Documentation-only fix; maintainers can address immediately. |

**Prediction**: Next patch (2.0.2) will likely include the three bug-fix PRs (#6620, #6623, #6629) + OrcaRouter (#6622) + workspace shortcut (#6306). Hotkey floating input (#6568) and cleanup UI (#6593) are strong 2.1 candidates.

---

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Storage bloat & no cleanup tools** | #6593: "long-term use → chaotic, huge space usage; manual cleanup risky" | 1 detailed report (likely represents many silent users) |
| **Multi-agent delegation not automatic** | #6621: 50+ sessions wasted before discovering PROFILE.md requirement | 1 vocal user, but indicates **discoverability failure** |
| **Heavyweight UI for quick queries** | #6568: "must click tray → wait main window → type" | 1 request, aligns with competitor UX (Doubao, Raycast) |
| **Shell background commands hang** | #6480: `nohup`/`&` never returns to idle | 1 report, blocks automation workflows |
| **Gemini streaming crashes** | #6619: every tool-call stream crashes with `extra_content` error | 1 report, but **affects all Gemini tool-use users** |
| **ACP silent text loss** | #6625: race condition loses final output | 1 report, critical for multi-agent reliability |
| **Auto-summarize broken on auto-compress** | #6624: manual `/compact` works, auto doesn't | 1 report, undermines memory feature trust |

**Sentiment**: Users appreciate power (multi-agent, memory, tools) but feel **rough edges on daily workflows** (cleanup, quick access, reliability). The "50 sessions before realizing delegation needs config" comment is a stark onboarding signal.

---

## 8. Backlog Watch — Stale / Unanswered Important Items

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#5490](https://github.com/agentscope-ai/QwenPaw/pull/5490) | **39 days** (opened 2026-06-24) | Inline tool-card images + gallery nav — major console UX upgrade. Stalled despite being feature-complete. | Open, no recent maintainer comment |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | **12 days** (opened 2026-07-21) | Unified provider discovery & model routing — architectural backbone for multi-provider support. Large scope, needs design review. | Open, updated today but no approval |
| [#6306](https://github.com/agentscope-ai/QwenPaw/pull/6306) | **12 days** (opened 2026-07-21) | Desktop workspace shortcut in sidebar — small, closes #6083, ready to merge. | Open, low complexity |
| [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) | **7 days** (opened 2026-07-26) | `nohup`/`&` shell hang — blocks background task workflows. No fix PR yet. | Open, needs investigation |
| [#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) | **2 days** (opened 2026-07-31) | Global cleanup UI — high-impact user request, no PR yet. | Open, needs product/design decision |

**Recommendation**: Maintainers should prioritize merging the three stale but ready PRs (#5490, #6306, #6622) and triage #6480 / #6593 for sprint planning.

---

## Summary Health Indicators

| Metric | Signal |
|--------|--------|
| **Velocity** | 🟢 High (22 updates/24h) |
| **Bug fix throughput** | 🟢 Good (3 fix PRs for today's bugs) |
| **Community contribution** | 🟢 Rising (3 first-time contributor PRs today) |
| **Release cadence** | 🟡 Stalled (no release since 2.0.1) |
| **Onboarding UX** | 🔴 Critical gap (multi-agent delegation invisible) |
| **Technical debt** | 🟡 Visible (storage cleanup, shell handling, CI gate) |

**Bottom line**: CoPaw is actively developed with a healthy contributor pipeline, but the **release train appears paused** while bugs accumulate. A **2.0.2 patch** merging the ready fixes would restore user confidence and unblock Gemini/ACP/memory users. The **next minor (2.1)** should target the two high-value UX features: **global hotkey input** and **storage cleanup UI**.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-02

## 1. Today's Overview
ZeroClaw shows **intense design-phase activity** with 50 issues and 50 PRs updated in the last 24 hours, yet **zero PRs merged** — indicating a project deep in architectural review and RFC deliberation rather than shipping increments. The issue queue is dominated by high-risk RFCs (security, memory architecture, authentication, A2A, sandboxing) mostly tagged `priority:p2` and `risk:high`, while open PRs cluster around evaluation infrastructure, computer-use drivers, secure relay transport, and channel fixes. No new release was cut; the latest version bump PR (#9648, v0.8.4) was opened today but remains unmerged. Project health: **high intellectual throughput, low merge velocity** — typical for a pre-v0.9.0 architecture freeze.

## 2. Releases
**None today.** PR #9648 (`chore(release): bump version to v0.8.4`) is open and targets `master`, but the author notes the translation catalogues must be corrected before publication. No changelog or breaking-change notes are available yet.

## 3. Project Progress (Merged/Closed Today)
**Zero PRs merged or closed in the last 24h.** All 50 updated PRs remain open. Three issues were closed:
- #8568 — Mixture-of-Agents (MoA) virtual model provider (closed, not merged)
- #9550 — Broken LinkedIn link on GitHub org profile (docs fix, closed)
- #9550 — Duplicate entry

No feature completions or bug fixes landed today.

## 4. Community Hot Topics (Most Discussed Issues/PRs)

| Item | Type | Comments | Core Theme | Underlying Need |
|------|------|----------|------------|-----------------|
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | Issue (RFC) | 16 | Separate conversation history from agent-curated long-term memory | **Memory architecture clarity** — runtime currently mixes `MemoryCategory::Conversation` with durable memory; operators need distinct lifecycles, retention, and governance. |
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | Issue (RFC) | 13 | Abstract `KeySource` trait for master-key material classification | **Secrets management maturity** — 93 `#[secret]` fields, 59 credential classes; need to distinguish key *source* (HSM, KMS, file, env) from *class* for rotation, audit, and compliance. |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | Issue (RFC) | 12 | OpenAI Chat Completions compatibility adapter | **Ecosystem interop** — ZeroClaw only exposes WebSocket/webhooks; OpenAI-compatible clients (Open WebUI, LobeChat) cannot connect without custom adapters. |
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | Issue (RFC) | 12 | Cross-turn conversation correlation in OTel export | **Observability depth** — need `gen_ai.conversation.id` across turns for distributed tracing of multi-turn agent sessions. |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | Issue (RFC) | 11 | Per-execution confirmation tier for high-risk shell commands | **Security UX middle ground** — current `auto_approve`/`always allow` is binary; need Claude Code-style `allow/ask/deny` per command pattern. |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | Issue (RFC) | 10 | Separate authoritative memory storage from enrichment connectors (e.g., Lucid) | **Backend taxonomy** — Lucid is modeled as full storage backend but isn't authoritative; blocks pluggable enrichment. |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | Issue (RFC) | 10 | A2A outbound client (`A2ATool`) | **Agent-to-agent autonomy** — inbound A2A server exists (#3566), but agents cannot *call* external A2A agents; forced through chat relay. |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | Issue (RFC) | 9 | Decouple memory lifecycle policy from storage backends | **Governance layer** — consolidation, TTL, retention should not be reimplemented per backend/gateway. |
| [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) | Issue (Bug) | 9 | WhatsApp Web `mode=business` answers every DM/group; `allowed_groups=[]` permits all | **Security regression** — config reads as locked down but behaves open; S1 severity. |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | Issue (RFC) | 8 | Pluggable inbound authentication & canonical principals (Rev 5) | **Identity foundation** — OIDC, mTLS, JWT, API keys need unified principal model for authz across gateway/channels. |

**Pattern:** The top 10 issues are **all RFCs or security bugs** — no pure feature requests. Contributors are solving *architectural debt* (memory, auth, secrets, A2A, observability) before shipping user-facing features.

## 5. Bugs & Stability (Reported/Active Today)

| Severity | Issue | Component | Status | Fix PR |
|----------|-------|-----------|--------|--------|
| **S1 (Security)** | [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) WhatsApp Web `allowed_groups=[]` permits all groups in business mode | `channel:whatsapp` | `in-progress`, `accepted` | [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) (RFC: treat empty as permit-none) |
| **S2 (Degraded)** | [#9417](https://github.com/zeroclaw-labs/zeroclaw/issues/9417) WhatsApp Cloud `request_approval` leaks live approval token on send failure/cancel | `channel:whatsapp` (Cloud API) | `in-progress` | None yet |
| **S3 (Minor)** | [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) Nextcloud Talk uses wrong bot message API URL | `channel:nextcloud-talk` | `in-progress`, `accepted` | None yet |
| **P1 (Functional)** | [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) CLI-created cron jobs discard output (`delivery.mode=none` hardcoded) | `channel:cli`, `cron` | `in-progress`, `accepted` | None yet |

**Observation:** Three WhatsApp-related bugs (two security, one functional) and a cron delivery bug — all `in-progress` but **no fix PRs linked** yet. The WhatsApp `allowed_groups` fix is being handled via RFC #9397 (policy change) rather than a direct patch.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for v0.9.0 |
|--------|--------|----------------------|
| **Evaluation framework** (baselines, regression gating, JUnit XML, LLM-judge grader) | PRs #9220–#9225, #9244, #9248 (IftekharUddin) | **Very High** — 6 stacked PRs, principal contributor, diagnostic-first design |
| **Computer-use tool** (native macOS/Linux/Windows drivers) | PR #9091 (JordanTheJet), RFC #6909 | **High** — XL PR, feature-gated, security-reviewed, desktop capability gap |
| **Secure relay transport** (mutual TLS, CSR issuance, cert ledger, browser enrollment) | PR #9080 (Nillth) | **High** — core to gateway pairing/zerocode, security architecture milestone |
| **A2A outbound client** (`A2ATool`) | RFC #9106 (kingstar001) | **Medium-High** — splits from shipped A2A server, enables multi-agent workflows |
| **OpenAI Chat Completions adapter** | RFC #8603 (REL-mame) | **Medium** — high ecosystem demand, but requires request/response translation layer |
| **Mixture-of-Agents virtual provider** | Issue #8568 (closed, not merged) | **Low** — closed without merge; may return post-v0.9.0 |
| **Gemini Live realtime speech channel** | RFC #8780 (metalmon) | **Medium** — backend-agnostic design, but depends on realtime infra maturity |
| **Slack visible lifecycle progress** | PR #8985 (abhinavmathur-atlan) | **High** — UX polish, near-complete, channel-core |
| **Telegram `allow_groups` + `mention_only` fix** | PR #9634 (Hyye123) | **High** — small, targeted, security-adjacent |

**Prediction:** v0.9.0 will ship **eval framework, computer-use, relay transport, A2ATool, Slack lifecycle, Telegram fix** — the "security/architecture/auth" RFCs (#7141, #9127, #6996, #7142) are likely **blocking** the release but not landing *in* it.

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **"Config looks secure but isn't"** | WhatsApp `allowed_groups=[]` admits all groups (#9348, #9397) — operator believes locked down, agent replies to everything | 2 issues, S1 severity |
| **"Cron jobs run but results vanish"** | CLI cron hardcoded `delivery.mode=none` (#9340) — runs recorded `ok` but output discarded | 1 issue, P1 |
| **"Can't connect OpenAI-compatible clients"** | No Chat Completions adapter (#8603) — Open WebUI, LobeChat users blocked | 1 RFC, 12 comments |
| **"No middle ground for shell approval"** | Binary `auto_approve` vs full allow (#7155) — need per-command `ask` tier | 1 RFC, 11 comments |
| **"Memory backend conflates storage + enrichment"** | Lucid forced as full backend (#9103) — can't plug enrichment without replacing authoritative store | 1 RFC, 10 comments |
| **"Agents can't call other A2A agents"** | Only inbound server exists (#9106) — multi-agent forced through chat relay | 1 RFC, 10 comments |
| **"Nextcloud Talk bot messages fail"** | Wrong API endpoint (#6157) — channel unusable | 1 bug, 8 comments |
| **"WhatsApp approval tokens leak"** | Token exposed on failure/cancel (#9417) — S2 security | 1 bug, 3 comments |

**Satisfaction signals:** No positive feedback issues in top 30. Users are **filing security bugs and architectural RFCs** — indicative of production deployments hitting real boundaries.

## 8. Backlog Watch (Stale/Blocked High-Value Items)

| Item | Age | Status | Why It Matters | Blocker |
|------|-----|--------|----------------|---------|
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) Pluggable inbound auth & canonical principals (Rev 5) | 60 days | `in-progress`, `needs-maintainer-review` | **Foundation for all gateway/channel authz** — OIDC, mTLS, JWT, API keys need unified principal | Maintainer review; security architecture milestone |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) Granular sandbox policy (fs/network) | 66 days | `in-progress`, `needs-maintainer-review` | **OS sandbox (Bubblewrap/Landlock/Seatbelt) + app-layer policy drift** — must align for v0.9.0 | Maintainer review; two policy layers |
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) Runtime-owned security decision pipeline | 60 days | `needs-maintainer-review` | **Restrictive overlays, pluggable providers** — complements #7141 | Maintainer review |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) Decouple memory lifecycle from backends | 72 days | `needs-maintainer-review` | **Governance (TTL, consolidation) shouldn't live in every backend** | Maintainer review |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) Per-model capability & context-window config | 61 days | `needs-maintainer-review` | **Vision, context_window, UI display currently fragmented** — provider defaults misreport | Maintainer review |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Maintainer decision queue tracker | 29 days | `accepted`, `no-stale` | **Meta-tracker for RFC decisions** — 7 comments, active triage | Maintainer bandwidth |
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) Unified capability catalog & plugin migration | 88 days | `in-progress`, `no-stale` | **"Everything is a plugin" north star** — catalog across built-ins, WASM, configured, observed | Cross-team coordination |
| [#9080](https://github.com/zeroclaw-labs/zeroclaw/pull/9080) Relay secure transport & browser enrollment | 18 days | `needs-author-action` | **XL PR, core to gateway pairing/zerocode** — mutual TLS, cert ledger, revocation | Author action (Nillth) |
| [#9091](https://github.com/zeroclaw-labs/zeroclaw/pull/9091) Computer-use native drivers (macOS/Linux/Win) | 18 days | `needs-author-action` | **XL PR, desktop capability gap** — AT-SPI, fail-closed, feature-gated | Author action (JordanTheJet) |
| [#9319](https://github.com/zeroclaw-labs/zeroclaw/pull/9319) Seal engine tool registry as `ScopedToolRegistry` | 10 days | `needs-author-action` | **Refactor turn engine tool registry** — private newtype, affects delegate/file tools | Author action (Nillth) |

**Critical path:** The **auth/security RFCs (#7141, #6996, #7142)** and **memory governance (#6850, #9103)** are the oldest high-risk items blocking v0.9.0. The **XL PRs (#9080, #9091, #9319)** are technically ready but await author action — likely final review/cleanup before merge.

---

**Bottom line:** ZeroClaw is in a **deliberate architecture hardening phase**. The project is not stalled — it's *investing* in foundations (auth, memory, secrets, sandbox, eval, A2A, computer-use) that will enable the next year of feature velocity. Merge velocity will likely spike once the RFC gate closes and XL PRs land. Watch **#8692 (decision queue)** for maintainer triage signals.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*