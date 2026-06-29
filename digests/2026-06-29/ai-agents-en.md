# OpenClaw Ecosystem Digest 2026-06-29

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-29 00:40 UTC

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

# OpenClaw Project Digest — 2026-06-29

---

## 1. Today's Overview

OpenClaw is in a **high-activity stabilization phase** on the `2026.6.11-beta` track. The last 24h saw ~500 issues and ~500 PRs updated, with a release published today (**v2026.6.11-beta.2**). The dominant engineering theme is a large-scale **session/transcript storage migration to SQLite** (Path 3 / PR #96625) and a broad push to fix **UTF-16 truncation bugs** surfaced across every major channel plugin. The queue remains deep — 438 open issues, 434 open PRs — with many P1 items aging past 30–60 days.

---

## 2. Releases

**v2026.6.11-beta.2** (published 2026-06-29) [openclaw/openclaw releases](https://github.com/openclaw/openclaw/releases)

Key changes in this beta:

- **More capable channel control** — Slack relay mode, native Mattermost `/oc_queue`, and per-DM model overrides (#94707, #95546, #95120). Thanks @sjf-oa, @amknight, @xydigit-zt, @thomaszta, @gandalf-at-lerian.
- **Richer operation** *(details truncated in source)*

**Migration note:** Operators should verify Mattermost and Slack relay configurations after upgrading; channel-plugin configs have been extended.

---

## 3. Project Progress

### Merged / Closed Today (PRs with high signal)

| PR | Status | Change |
|----|--------|--------|
| [#97450](https://github.com/openclaw/openclaw/pull/97450) | Closed | Preserve structured tool-result text across providers |
| [#97594](https://github.com/openclaw/openclaw/pull/97594) | Open (just filed) | Cap Codex native-subagent completion delivery retries (fixes #97593) |
| [#97591](https://github.com/openclaw/openclaw/pull/97591) | Open (ready) | Preserve compactionSummary in limitHistoryTurns |

### Features Advancing

- **UTF-16 boundary truncation fixes** are sweeping the codebase — today saw ready or open PRs fixing the same root cause across Discord ([#97600](https://github.com/openclaw/openclaw/pull/97600)), Feishu ([#97595](https://github.com/openclaw/openclaw/pull/97595)), Tlon ([#97599](https://github.com/openclaw/openclaw/pull/97599)), iMessage ([#97598](https://github.com/openclaw/openclaw/pull/97598)), Mattermost ([#97597](https://github.com/openclaw/openclaw/pull/97597)), and Matrix ([#97596](https://github.com/openclaw/openclaw/pull/97596)). All by @llagy009 — a single systematic fix.
- **Slack alternate Web API roots** ([#97157](https://github.com/openclaw/openclaw/pull/97154), @RomneyDa) — decoupling Slack from the monolithic channel-extensibility PR.
- **Slack/Mattermost/per-DM model overrides** shipped in beta.2.

### Closed Issues (signal)

- [#88838](https://github.com/openclaw/openclaw/issues/88838) — SQLite migration path tracker (36 comments) remains open but consolidating.

---

## 4. Community Hot Topics

### By comment volume

| # | Thread | Type | Comments | Core Need |
|---|--------|------|----------|-----------|
| 1 | [#88838](https://github.com/openclaw/openclaw/issues/88838) | SQLite migration | 36 | Replace sessions.json with SQLite; fix session-state bugs at the source |
| 2 | [#77598](https://github.com/openclaw/openclaw/issues/77598) | Dev-agent behavior watch | 22 | Observability into autonomous agent runs |
| 3 | [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex app-server stall | 18 | Regression in turn completion on ChatGPT Plus |
| 4 | [#79902](https://github.com/openclaw/openclaw/issues/79902) | Companion-friendly SQLite seam | 13 | SDK/API stability for external consumers |
| 5 | [#78308](https://github.com/openclaw/openclaw/issues/78308) | Channel-mediated MCP approval | 13 | Same `/approve` pipeline for MCP shell exec |
| 6 | [#74484](https://github.com/openclaw/openclaw/issues/74484) | Gateway pairing scope deadlock | 12 | Auth UX deadlock blocks CLI approval |

### By reactions (👍)

- [#79077](https://github.com/openclaw/openclaw/issues/79077) — **Telegram guest-bots & bot-to-bot** (👍 8) — highest-liked feature.
- [#77467](https://github.com/openclaw/openclaw/issues/77467) — MiniMax Portal OAuth can't auto-refresh (👍 3).
- [#88312](https://github.com/openclaw/openclaw/issues/88312) — Codex app-server stall (👍 4).
- [#83184](https://github.com/openclaw/openclaw/issues/83184) — Heartbeat-driven replies block subsequent heartbeats (👍 3).

### Active PRs drawing attention

- [#96625](https://github.com/openclaw/openclaw/pull/96625) (implied, the active SQLite flip — referenced from #88838): refactor sessions/transcripts to SQLite storage.
- [#87449](https://github.com/openclaw/openclaw/pull/87449): fix Mattermost draft preview text-block boundaries (backed by real-behavior proof, ready for review).
- [#87552](https://github.com/openclaw/openclaw/pull/87552): keep ambiguous Codex delivery attempts recoverable.

**Underlying need analysis:** Three dominant currents — (1) **storage reliability** (sessions.json OOM, SQLite migration, orphan pruning), (2) **regression recovery** (Codex stalls, heartbeat blocking, lane retention, `/new` persona regression), (3) **platform extensibility** (Telegram bot-to-bot, Slack alternate roots, MCP approval envelopes, i18n slash commands).

---

## 5. Bugs & Stability

### P1 / Crash / Data-loss

| Severity | Issue | Symptom | Fix PR |
|----------|-------|---------|--------|
| 🔴 P1 crash-loop | [#55334](https://github.com/openclaw/openclaw/issues/55334) | sessions.json unbounded growth → gateway OOM (50–100 MB/min) | → SQLite migration ([#96625](https://github.com/openclaw/openclaw/pull/96625)) |
|  P1 data-loss / crash | [#78493](https://github.com/openclaw/openclaw/issues/78493) | `sudo openclaw update` → mixed root/user ownership, doctor hits EACCES | None open |
|  P1 crash-loop | [#76171](https://github.com/openclaw/openclaw/issues/76171) (closed) | Stale worker process accumulation, host load 25–31 | Closed |
| 🔴 P1 regression | [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex app-server turn-completion stalls ("Codex stopped before confirming…") | Linked to #85107; needs new fix for 2026.5.27 regression |
| 🔴 P1 message-loss | [#83184](https://github.com/openclaw/openclaw/issues/83184) (closed) | Heartbeat turns leave `pendingFinalDelivery` stuck → subsequent heartbeats blocked | Closed |
| 🔴 P1 auth | [#74484](https://github.com/openclaw/openclaw/issues/74484) | Gateway pairing scope deadlock — CLI can't approve/reject over-scoped repair | None open |
|  P1 security | [#73182](https://github.com/openclaw/openclaw/issues/73182) | Claude reasoning silently flipped on → doubles cost, leaks thinking blocks | None open |
|  P1 regression | [#77930](https://github.com/openclaw/openclaw/issues/77930) (stale) | Discord channel not loaded since 2026.5.4-beta.2 | None open |
| 🟠 P1 data-loss | [#77642](https://github.com/openclaw/openclaw/issues/77642) (stale) | lossless-claw duplicate answers + synthetic "missing tool result" errors | None open |
|  P1 security / crash | [#76038](https://github.com/openclaw/openclaw/issues/76038) | Stuck Session Recovery double-failure → gateway blocked → systemd kill | None open |
| 🟡 P2 crash-loop | [#94147](https://github.com/openclaw/open94147) (filed 6/17) | macOS CLLocationManager rebuilt every second → TCC spam ~45 req/10s | None open |
| 🟡 P2 stale workers (related) | [#75380](https://github.com/openclaw/openclaw/issues/75380) | provider-payload.jsonl / cache-trace.jsonl grow unbounded, no rotation policy | None open |
| 🟡 regression | [#77136](https://github.com/openclaw/openclaw/issues/77136) | WebChat fails to render some assistant messages (TUI fine, transcript intact) | None open |

### P2 / Behavioral (orig-meta)

- [#79902](https://github.com/openclaw/openclaw/issues/79902) / [#79904](https://github.com/openclaw/openclaw/issues/79904) / [#79903](https://github.com/openclaw/openclaw/issues/79903) / [#79905](https://github.com/openclaw/openclaw/issues/79905) — bundled companion-API requests for transcript lineage, cursor reads, typed projections, and a rebuild contract on top of SQLite.
- [#79077](https://github.com/openclaw/openclaw/issues/79077) — Telegram bot-to-bot + guest-bots; backed by 👍8 and linked open.
- [#78308](https://github.com/openclaw/openclaw/issues/78308) — MCP consent envelope channel-mediated approval.
- [#78431](https://github.com/openclaw/openclaw/issues/78431) — Discord `messages.statusReactions` lifecycle (only Telegram today).
- [#79047](https://github.com/openclaw/openclaw/issues/79047) — Preserve conversation context across cross-backend model switches.
- [#77467](https://github.com/openclaw/openclaw/issues/77467) — MiniMax Portal OAuth refresh not**Prioritize:** The Codex app-server regression ([#88312](https://github.com/openclaw/openclaw/issues/88312)), the Slack/WhatsApp extensibility decoupling ([#97154](https://github.com/openclaw/openclaw/pull/97154)), the codex/keep-OpenClaw-exec fix ([#92294](https://github.com/openclaw/openclaw/pull/92294)), and the Mattermost text-block boundary fix ([#87449](https://github.com/openclaw/openclaw/pull/87449)) appear to be the best candidates for early inclusion — most have proofs or clear scope.

---

## 6. Feature Requests & Roadmap Signals

### Likely next-version candidates (2026.6.11 GA or 2026.6.18)

1. **Slack relay + alternate Web API roots** — ships in beta.2, GA expected shortly.
2. **Per-DM model overrides** — ships in beta.2.
3. **UTF-16 boundary truncation sweep** — all "ready for maintainer look" PRs could batch into next patch.
4. **Codex subagent completion retry cap** ([#97594](https://github.com/openclaw/openclaw/pull/97594)) — directly resolves a P1-like outage, high GA value.

### Mid-term signals

- **SQLite storage flip** ([#96625](https://github.com/openclaw/openclaw/pull/96625), tracked via [#88838](https://github.com/openclaw/openclaw/issues/88838)) — active implementation PR; will resolve at least 5 P1/P2 issues. Likely the headline feature of the next major stable.
- **MCP consent envelope / channel-mediated approval** ([#78308](https://github.com/openclaw/openclaw/issues/78308)) — security review; fits the broader MCP-authorization story.
- **Gateway-lite mode (no AI harness)** ([#86881](https://github.com/openclaw/openclaw/issues/86881)) — notable demand for deterministic webhook/cron deployments.
- **Telegram guest-bots & bot-to-bot** ([#79077](https://github.com/openclaw/openclaw/issues/79077)) — highest-liked issue; Telegram platform parity.
- **Prepared runtime resolution migration** ([#77700](https://github.com/openclaw/openclaw/issues/77700)) — maintainer-tracked perf refactor.
- **i18n for slash commands / Control UI** ([#79458](https://github.com/openclaw/openclaw/issues/79458), [#79034](https://github.com/openclaw/openclaw/issues/79034)) — accessibility demand.

---

## 7. User Feedback Summary

**Pain points**

- **Storage/memory reliability:** sessions.json OOM ([#55334](https://github.com/openclaw/openclaw/issues/55334)), worker accumulation ([#76171](https://github.com/openclaw/openclaw/issues/76171)), stuck recovery ([#76038](https://github.com/openclaw/openclaw/issues/76038)), mixed-ownership updates ([#78493](https://github.com/openclaw/openclaw/issues/78493)). Users are hitting hard crash-loop boundaries on long-running installs.
- **Codex regression outage:** Multi-tool turns silently stall on the ChatGPT Plus app-server ([#88312](https://github.com/openclaw/openclaw/issues/88312)). Multiple users upgrading from 2026.5.26 are affected.
- **Message routing surprises:** Heartbeats blocking each other ([#83184](https://github.com/openclaw/openclaw/issues/83184)), Android node events sent before handshake ([#79552](https://github.com/openclaw/openclaw/issues/79552)), Telegram replies going to DM instead of group ([#79308](https://github.com/openclaw/openclaw/issues/79308)).
- **Silent double-spending (reasoning-on-by-default)** ([#73182](https://github.com/openclaw/openclaw/issues/73182)) — users see doubled Anthropic invoices with no config change.
- **Multi-account startup order** ([#77429](https://github.com/openclaw/openclaw/issues/77429)) — no priority mechanism for primary vs. specialist Discord bots.
- **Plugin loader silent failures** ([#78301](https://github.com/openclaw/openclaw/issues/78301)) — legacy plugin contracts fail opaquely, costing hours of debugging.

**Use cases exercised**

- Long-running autonomous agents (24h watch, [#77598](https://github.com/openclaw/openclaw/issues/77598))
- Subagent hierarchies with completion delivery ([#75593](https://github.com/openclaw/openclaw/issues/75593), [#78055](https://github.com/openclaw/openclaw/issues/78055))
- Multi-provider model switching between backends ([#79047](https://github.com/openclaw/openclaw/issues/79047))
- Deterministic deployments without a model ([#86881](https://github.com/openclaw/openclaw/issues/86881))

**Satisfaction signals**

- 👍8 on Telegram bot-to-bot feature request demonstrates demand.
- 👍3 on Codex regression and worker accumulation indicate intensity.
- Closed worker/heartbeat issues suggest some responsiveness; still, aging P1s erode trust.

---

## 8. Backlog Watch

These items have been open and active for weeks/months with significant impact but lack

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report — 2026-06-29

---

## 1. Ecosystem Overview

The open-source personal AI agent landscape in mid-2026 is characterized by ** rapid, parallel development across 12+ active projects**, with a clear bifurcation between large-platform plays (OpenClaw, Hermes Agent, ZeroClaw) integrating dozens of messaging channels and external services, and focused Nano/Nano-class projects (NanoBot, NanoClaw, PicoClaw, ZeptoClaw) prioritizing lean architectures and specific integration depth. The dominant engineering themes across the ecosystem are **storage backends migrating to SQLite**, **multi-agent orchestration**, **security hardening** (symlink containment, IDOR fixes, sandbox escapes), and **Windows/desktop UX parity**. Notably, **no project has achieved a stable v1.0** — all remain in beta or pre-1.0 iteration, reflecting the immaturity of the category. Release cadence is inconsistent: some projects push weekly betas (OpenClaw), while others show months of PR accumulation without a release cut (LobsterAI, Hermes).

---

## 2. Activity Comparison

| Project | Issues (Δ24h) | PRs (Δ24h) | Open Issues | Open PRs | Latest Release | Health Score |
|---------|---------------|------------|-------------|---------|---------------|:---:|
| **OpenClaw** | ~500 updated | ~500 updated | 438 | 434 | v2026.6.11-beta.2 | 🟢 High |
| **Hermes Agent** | 50 updated | 50 updated | 42 open / 8 closed | 46 open / 4 closed | v0.17.0 | 🟡 Medium |
| **ZeroClaw** | 50 updated | 50 updated | 40 open / 10 closed | 47 open / 3 closed | v0.8.1 | 🟡 Medium |
| **NanoBot** | 7 touched | 23 updated | 6 open / 1 closed | 13 open / 10 closed | v0.2.2 | 🟢 High |
| **IronClaw** | 3 updated | 42 updated | — | 5 open / 17 merged | None recent | 🟢 High |
| **NanoClaw** | 1 new | 6 updated | — | 5 open / 1 merged | v2.1.1 | 🟡 Medium |
| **CoPaw** | 5 updated | 6 open | 4 open | 6 open | — | 🟡 Medium |
| **LobsterAI** | 5 updated | 5 touched | 1 open / 4 closed | 2 open / 3 closed stale | None | 🔴 Low |
| **Moltis** | 1 active | 2 open | — | 2 open | None | 🟡 Medium |
| **PicoClaw** | 1 closed | 2 updated | 0 | 1 open | None | 🟡 Medium |
| **NullClaw** | 1 closed | 0 | 0 | 0 | None | 🔴 Dormant |
| **TinyClaw** | 0 | 0 | — | — | — | ⚪ Inactive |
| **ZeptoClaw** | 0 | 0 | — | — | — | ⚪ Inactive |

**Scoring rationale:** Health score weighs release cadence, PR merge ratio (vs. stale closures), backlog aging, P1 bug resolution rate, and community engagement quality. 🟢 = shipping regularly + responsive to critical bugs; 🟡 = active development but accumulating backlog or stalled releases; 🔴 = sustained inactivity or critical unfixed issues; ⚪ = no observable activity.

---

## 3. OpenClaw's Position

**Advantages over peers:**

| Dimension | OpenClaw Advantage | Peer Comparison |
|-----------|-------------------|-----------------|
| **Channel breadth** | 10+ native integrations (Discord, Slack, Matrix, Telegram, Mattermost, iMessage, Feishu, Tlon, WhatsApp under Hermes) | Hermes has similar breadth; NanoBot/NanoClaw focus on fewer channels |
| **Release cadence** | Regular beta pushes (beta.2 on day of report) | LobsterAI, Moltis, and PicoClaw have gone months without releases |
| **Issue throughput** | ~500 issues + ~500 PRs in 24h — an order of magnitude above most peers | NanoBot (23 PRs) and IronClaw (42 PRs) are next closest |
| **Storage migration** | Leading the ecosystem's move to SQLite with PR #96625 actively replacing sessions.json | NanoBot, ZeroClaw, and CoPaw also reference SQLite but with less implementation progress |
|**Community scale** | Largest contributor base and issue volume; 👍8 on feature requests shows engagement quality | Hermes has strong engagement but lower reaction counts; PicoClaw/NullClaw show minimal engagement |

**Technical approach differences:**

- OpenClaw uses a **monolithic plugin architecture** where each channel is a plugin within a single Rust/Node codebase. Hermes mirrors this. In contrast, **Moltis** (Rust) and **ZeroClaw** are pursuing a **modular/gateway-split** approach with WASM-based plugin systems (ZeroClaw RFC #6943) to enable sandboxed extensions.
- **Nano-class projects** (NanoBot, NanoClaw, PicoClaw) favor **minimal core + extension** designs. NanoClaw uses containerized agents with explicit Coolify deployment; NanoBot emphasizes a "keep it tiny" philosophy.
- **OpenClaw** and **Hermes** are both investing in **desktop GUI experiences** (TUI/WebUI), while NanoBot, PicoClaw, and ZeptoClaw are CLI/protocol-first.

**Community size:** OpenClaw's 438 open issues and 434 open PRs dwarf all peers, suggesting either the largest user base or the most fragmented requirement set. Hermes (42 open/46 open PRs) and ZeroClaw (40/47) are next-tier in activity volume. NanoBot's 10 merges in 24h with only 13 open PRs indicates a leaner but more efficient contributor funnel.

---

## 4. Shared Technical Focus Areas

The following needs appear across **3 or more projects**, revealing ecosystem-wide requirements:

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **SQLite storage migration** | OpenClaw, NanoBot, ZeroClaw, CoPaw | Replace JSON-file sessions with structured SQLite; fix concurrent read/write; enable transcript lineage and cursor reads (OpenClaw #96625, #79902; ZeroClaw #8386) |
| **Security hardening** | OpenClaw, Hermes, NanoClaw, ZeroClaw | IDOR fixes (Hermes #52355), symlink containment (NanoClaw #2828), silent MCP scoping no-op (ZeroClaw #7733), command injection prevention (NanoBot #4562), reasoning-mode cost leak (OpenClaw #73182) |
| **Multi-agent orchestration** | NanoBot, CoPaw, ZeroClaw | A2A delegation with depth guards (NanoBot #4571), per-subagent model routing (NanoBot #4570), cross-agent loop detection (CoPaw #5204), agent team collaboration |
| **Windows/desktop UX** | Hermes, OpenClaw, ZeroClaw | Console flashing (Hermes #54220), IME input bugs (Hermes #39025), GBK encoding crashes (Hermes #53065), macOS keybinding discoverability (ZeroClaw #7800) |
| **Codex/ChatGPT integration stability** | OpenClaw, NanoClaw, NanoBot | Turn completion stalls (OpenClaw #88312), stale token reconnection (NanoClaw #2878), app-server regression |
| **Channel parity (Telegram/Discord)** | OpenClaw, Hermes, NanoClaw, ZeroClaw, PicoClaw | Prompt caching bypass on Telegram (ZeroClaw #6360, OpenClaw UTF-16 sweep), button action parsing (NanoClaw #2881), typing indicator race (Hermes #28004), WebSocket completion signal (PicoClaw #2984) |
| **Cost optimization / context management** | NanoBot, IronClaw, OpenClaw, Hermes | Prefix cache preservation (NanoBot #4222, #4568), progressive tool disclosure cutting 25.8k tokens/call (IronClaw #5149), image downscaling (Moltis #1138), context compaction (Hermes #54525) |
| **Image/vision pipeline hardening** | Moltis, NanoBot, NanoClaw, OpenClaw | Oversized image token overflow (Moltis #1138), image compression (PicoClaw #2964 — closed stale), MCP image artifacts vs base64 (NanoBot #4542) |
| **Memory/search architecture** | OpenClaw, LobsterAI, CoPaw | Local embedding fallback (LobsterAI #2216), memory reranker two-stage retrieval (CoPaw #5588), SQLite FTS defaults (ZeroClaw #8386) |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Key Architectural Distinctive |
|---|---|---|---|
| **OpenClaw** | Full-featured multi-channel gateway provider | Power users running agents across 10+ platforms | Monolithic plugin arch; SQLite-first storage; P1 regression responsiveness |
| **Hermes Agent** | Desktop GUI + messaging gateway | Non-technical users wanting a polished desktop experience | TUI/WebUI-first; Ollama integration; i18n (15 languages) |
| **ZeroClaw** | WASM plugin runtime + security | Security-conscious self-hosters | wasmtime component-model host; SOP engine; RFC-driven governance |
| **NanoBot** | Lean, extensible agent core | Minimalist CLI users who value "keep it tiny" | Subdirectory skills; A2A delegation; cost-optimized prefix caching |
| **NanoClaw** | Containerized agent deployment | ML engineers needing process isolation | Docker-first; Coolify deploy; symlink containment; sandbox model |
| **IronClaw** | Low-latency production agent | Production users hitting timeout limits | Progressive tool disclosure; capability policy (RBAC); Live QA canary |
| **CoPaw** | Multi-agent collaboration on IM | Teams using DingTalk/Matrix for agent coordination | Scroll context manager (SQLite); DingTalk enterprise features |
| **LobsterAI** | Self-hosted all-in-one platform | Users wanting offline-first local LLM stack | Local embedding focus; scheduled tasks; artifact preview pipeline |
| **Moltis** | Rust-based modular gateway | Rust developers needing a lightweight channel gateway | Cargo feature decoupling; image pre-flight normalization |
| **PicoClaw** | Constrained/embedded scenario agents | IoT/edge/protocol integrators | WebSocket protocol API; simplex channel; minimal resource footprint |
| **NullClaw** | Experimental/embedded agent | Microcontroller/ESP32 tinkerers | Extremely minimal core; dormant |
| **TinyClaw / ZeptoClaw** | Niche research projects | — | No active development |

---

## 6. Community Momentum & Maturity

### Tier 1 — Rapid Iteration (daily/weekly releases, high throughput)
| Project | Signals |
|---|---|
| **OpenClaw** | Beta.2 shipped today; ~500-issue/PR churn; UTF-16 sweep across 7 channels in single-day batch |
| **IronClaw** | 17 PRs merged in 24h; Reborn refactor driving massive parallel PR stacks; Nightly E2E concern |
| **NanoBot** | 10 merges in 24h across 6 contributors; efficient review-to-merge ratio |

### Tier 2 — Active Stabilization (regular PR activity, accumulating backlog)
| Project | Signals |
|---|---|
| **Hermes Agent** | 50/50 issue/PR movement but low merge ratio; Windows Desktop bugs dominating |
| **ZeroClaw** | 50/50 movement but only 3 merges; ballooning open-PR queue; RFC governance overhead |
| **CoPaw** | 6 open PRs from Agentscope 2.0 adaptation; test coverage push |
| **NanoClaw** | 6 PRs with security focus; symlink vulnerability being patched in real-time |

### Tier 3 — Maintenance / Low Activity
| Project | Signals |
|---|---|
| **Moltis** | 2 open PRs (decoupling, image fix); rust ecosystem; no release signaling |
| **PicoClaw** | 1 stale PR closed; 1 feature PR pending; low engagement |
| **LobsterAI** | 0 merges in observation window; 80+ day stale PRs; critical embedding bug unaddressed; 3-month release gap |
| **NullClaw** | Effectively dormant; only historical issue |
| **TinyClaw / ZeptoClaw** | No activity detected |

---

## 7. Trend Signals

Trends extracted from community feedback and cross-project pattern analysis, ordered by signal strength:

### 1. SQLite as the De Facto Standard Storage Backend
**Confidence: Very High** — OpenClaw's migration is the largest, but CoPaw, NanoBot, ZeroClaw, and Hermes all have SQLite-related work. JSON-based session storage is being abandoned across the ecosystem due to OOM, corruption, and concurrency issues. **Implication for developers:** Expect SQLite (or libsql/Firecracker-FS) as the baseline persistence story; build transcript lineage, cursor reads, and WAL-mode concurrency into your architecture from day one.

### 2. Multi-Agent Orchestration Is the Next Feature Frontier
**Confidence: High** — Active PRs in NanoBot (#4571 A2A delegation), CoPaw (#5204 loop detection), ZeroClaw (#8226 per-agent env vars), and IronClaw (#5149 context management for agent pipelines) all point to agents coordinating with other agents as a primary use case. Supervisor→Researcher→Writer topologies are becoming standard.

### 3. Security Hardening as a Competitive Moat
**Confidence: High** — 7+ distinct security issues surfaced in this single digest (IDOR, symlink escape, command injection, CVE-unpatched baileys, MCP silent no-op, reasoning-mode cost leak, Docker sandbox escape). Projects that systematically address these (NanoClaw's rapid symlink fix, OpenClaw's P1 stacking) will win enterprise/self-hosted adoption. **Critical gap:** Most projects lack Windows CI, leaving entire bug surfaces undetected.

### 4. Cost-Awareness Is a User Retention Issue
**Confidence: High** — Prefix caching (#4222), token overflow from images (#1138), and context reduction (#5149) are repeated pain points. LobsterAI's users are hitting OpenAI quota walls. IronClaw's context management PR explicitly references 120-second timeouts from excessive token counts. **Users are treating agent cost as a first-class feature requirement, not a nice-to-have.**

### 5. Desktop UX Parity Is Lagging Backend Capability
**Confidence: Medium-High** — Hermes (#54473) explicitly notes "30× feature velocity of Desktop vs. TUI" with regressions. OpenClaw's WebChat rendering gaps (#77136), macOS keybinding issues (ZeroClaw #7800), and GBK console crashes (Hermes #53065) all indicate that the ecosystem is backend-heavy and frontend-starved. **Opportunity for differentiation.**

### 6. Channel Fragmentation Is a Universal Pain Point
**Confidence: Medium-High** — Every multi-channel project (OpenClaw, Hermes, NanoClaw, ZeroClaw, PicoClaw) has channel-specific bugs: Telegram prompt caching bypass, Discord button parsing, Mattermost text-block boundaries, WebSocket completion signals. The pattern suggests **channel plugin testing is uniformly inadequate** and that the marginal cost of each new channel integration is higher than teams estimate.

### 7. Local-First / Offline Embedding Is an Emerging Demand Signal
**Confidence: Medium** — LobsterAI's #2216 (memory search hard-locked to OpenAI) and the broader self-hosting ethos across the ecosystem indicate that users expect local embedding fallback. ZeroClaw's SQLite-default-without-embedding-model (#8386) is a symptom of this gap. NanoBot and Moltis have local model support but lack local retrieval-augmented generation.

### 8. Governance & Project Operations Are Maturing
**Confidence: Medium** — ZeroClaw has 5+ active RFCs (#6808, #6943, #8226, #8396, #8424) steering IronClaw-scale architecture decisions. This formalization is unique in the ecosystem and may become a template for other projects at similar scale. The contrast with NullClaw/Lobst

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-29

---

## 1. Today's Overview

NanoBot is experiencing a **high-activity development day** with 23 PRs updated (13 open, 10 merged/closed) and 7 issues touched (6 open, 1 closed) in the last 24 hours. The project shows strong contributor momentum, with multiple contributors pushing fixes across the WebUI, session management, context caching, security, and subagent subsystems. No new releases were published today, but the volume of merged PRs suggests a release candidate may be coalescing. The project remains in active iteration on v0.2.x with no major version bump imminent.

---

## 2. Releases

**None.** No new releases were published in the reporting window. The latest known version remains **v0.2.2**.

---

## 3. Project Progress

### Merged / Closed PRs (10)

| PR | Author | Summary |
|---|---|---|
| **[#4575](https://github.com/HKUDS/nanobot/pull/4575)** | jfq3301 | Added repository guidelines (contributor docs) |
| **[#4569](https://github.com/HKUDS/nanobot/pull/4569)** | m11y | Hardened tool-call path against malformed relay responses — prevents crashes from broken upstream tool-use payloads |
| **[#4566](https://github.com/HKUDS/nanobot/pull/4566)** | axelray-dev | Repaired corrupt legacy-stem session files in `list_sessions()` — fixes silent session drops |
| **[#4565](https://github.com/HKUDS/nanobot/pull/4565)** | axelray-dev | Fixed WebUI stuck streaming after reconnect + improved stop reliability (closes [#4500](https://github.com/HKUDS/nanobot/issues/4500)) |
| **[#4564](https://github.com/HKUDS/nanobot/pull/4564)** | yorkhellen | Guarded cron public APIs against unavailable store |
| **[#4542](https://github.com/HKUDS/nanobot/pull/4542)** | codedragoncom | MCP image content now delivered as artifacts instead of serialized base64 blobs |
| **[#4504](https://github.com/HKUDS/nanobot/pull/4504)** | goodtiding5 | Skills now support subdirectory organization under `~/.nanobot/workspace/skills/` |
| **[#2120](https://github.com/HKUDS/nanobot/pull/2120)** | keep-in-mind-ai | Added CONTRIBUTORS.md and updated README with contributor section |

**Key themes:** Stability hardening (malformed relay responses, corrupt sessions, stuck streaming), MCP artifact handling, and contributor experience improvements.

---

## 4. Community Hot Topics

### Most Active / Commented Issues

| Issue | 👍 | Comments | Topic |
|---|---|---|---|
| **[#4010](https://github.com/HKUDS/nanobot/issues/4010)** | 2 | 2 | **Text-to-speech / voice output** — User wants the agent to "speak" on channels that support voice notes, closing the conversational loop |
| **[#4500](https://github.com/HKUDS/nanobot/issues/4500)** | 0 | 2 | **WebUI stuck streaming after self-restart** — Now closed via PR [#4565](https://github.com/HKUDS/nanobot/pull/4565) |

### Notable Open PRs Gaining Traction

| PR | Topic | Significance |
|---|---|---|
| **[#4571](https://github.com/HKUDS/nanobot/pull/4571)** | Native A2A peer delegation with cross-delegation depth guard | Major feature — enables multi-agent team collaboration (Supervisor → Researcher → Writer) |
| **[#4570](https://github.com/HKUDS/nanobot/pull/4570)** | Per-subagent model override on `spawn` tool | Implements [#4231](https://github.com/HKUDS/nanobot/issues/4231) — high-demand feature for routing tasks to different models |
| **[#4581](https://github.com/HKUDS/nanobot/pull/4581)** | Reduce context usage / input tokens per turn | Cost optimization — directly addresses user concerns about API costs |
| **[#4568](https://github.com/HKUDS/nanobot/pull/4568)** | Block-aligned replay-window eviction for prefix cache warmth | Fixes [#4222](https://github.com/HKUDS/nanobot/issues/4222) — prompt caching optimization |
| **[#4562](https://github.com/HKUDS/nanobot/pull/4562)** | Security: validate each shell segment against `exec.allowPatterns` | Fixes command injection via chained payloads (reported in [#4521](https://github.com/HKUDS/nanobot/issues/4521)) |

**Underlying needs:** Users want **multi-agent orchestration**, **cost control**, **security hardening**, and **richer I/O modalities** (voice, images). The A2A delegation PR signals a strategic shift toward agent teams.

---

## 5. Bugs & Stability

### Active Bugs (Ranked by Severity)

| Severity | Issue / PR | Status | Description |
|---|---|---|---|
| 🔴 **High** | [#4222](https://github.com/HKUDS/nanobot/issues/4222) | Fix PR open ([#4568](https://github.com/HKUDS/nanobot/pull/4568)) | `max_messages` truncation and microcompact continuously invalidate prefix/prompt caching — causes cost spikes and latency |
| 🔴 **High** | [#4521](https://github.com/HKUDS/nanobot/issues/4521) (referenced) | Fix PR open ([#4562](https://github.com/HKUDS/nanobot/pull/4562)) | Shell command injection via chained payloads bypassing `exec.allowPatterns` |
| 🟡 **Medium** | [#4500](https://github.com/HKUDS/nanobot/issues/4500) | ✅ **Fixed** via [#4565](https://github.com/HKUDS/nanobot/pull/4565) | WebUI stuck in "processing" after gateway self-restart; stop button non-functional |
| 🟡 **Medium** | [#4567](https://github.com/HKUDS/nanobot/pull/4567) | PR open | WeChat channel missing streaming support due to pydantic silently dropping config field |
| 🟢 **Low** | [#4566](https://github.com/HKUDS/nanobot/pull/4566) | ✅ **Fixed** | Corrupt legacy-stem session files silently dropped in `list_sessions()` |

**Stability assessment:** The project is actively addressing high-severity issues. The prompt caching invalidation bug ([#4222](https://github.com/HKUDS/nanobot/issues/4222)) is the most impactful open bug, affecting all users with long conversations. The security fix for shell injection is critical and should be prioritized for the next release.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features (Open Issues)

| Issue | Request | Likelihood of Next Version |
|---|---|---|
| **[#4010](https://github.com/HKUDS/nanobot/issues/4010)** | Text-to-speech / voice output | 🟡 Medium — popular request but no PR yet |
| **[#3938](https://github.com/HKUDS/nanobot/issues/3938)** | Message buffering / debounce for group chats | 🟡 Medium — pain point for Feishu/Telegram group users |
| **[#4231](https://github.com/HKUDS/nanobot/issues/4231)** | Per-subagent model override on `spawn` | 🟢 **High** — PR [#4570](https://github.com/HKUDS/nanobot/pull/4570) already open |
| **[#4580](https://github.com/HKUDS/nanobot/issues/4580)** | Conda/virtualenv support for subprocesses | 🟡 Medium — common need for ML/scientific users |
| **[#4579](https://github.com/HKUDS/nanobot/issues/4579)** | Session timestamps in sidebar + markdown export | 🟢 **High** — small UX wins, aligns with "keep it tiny" philosophy |

### Predicted Next Release Features
Based on merged and open PRs, the next release (likely **v0.2.3**) will likely include:
- ✅ Per-subagent model override (`spawn` tool)
- ✅ Block-aligned prefix cache eviction
- ✅ MCP image artifact delivery
- ✅ Skills subdirectory support
- ✅ WebUI streaming/stability fixes
- ✅ Shell command injection security fix
- 🔮 Native A2A multi-agent delegation (if [#4571](https://github.com/HKUDS/nanobot/pull/4571) merges)

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Sentiment |
|---|---|---|
| **WebUI reliability** | [#4500](https://github.com/HKUDS/nanobot/issues/4500) — stuck streaming, broken stop button | 😤 Frustrated — especially on mobile browsers |
| **Cost / context bloat** | [#4222](https://github.com/HKUDS/nanobot/issues/4222), [#4581](https://github.com/HKUDS/nanobot/pull/4581) | 😐 Concerned — users want longer conversations without cost spikes |
| **Group chat UX** | [#3938](https://github.com/HKUDS/nanobot/issues/3938) — rapid-fire messages trigger redundant agent turns | 😐 Annoyed — works great 1:1 but noisy in groups |
| **Subagent flexibility** | [#4231](https://github.com/HKUDS/nanobot/issues/4231) — can't route tasks to different models | 😤 Blocking — prevents common multi-model workflows |
| **Environment isolation** | [#4580](https://github.com/HKUDS/nanobot/issues/4580) — no virtualenv support for exec | 😐 Inconvenient — manual workarounds needed |

### Positive Signals
- The "keep it tiny" philosophy is resonating — users explicitly praise minimal, high-value changes ([#4579](https://github.com/HKUDS/nanobot/issues/4579))
- Strong contributor engagement: 8+ unique contributors active in 24h
- Security-conscious community actively reporting and fixing vulnerabilities ([#4562](https://github.com/HKUDS/nanobot/pull/4562))

---

## 8. Backlog Watch

### Long-Unanswered Items Needing Maintainer Attention

| Issue/PR | Age | Status | Risk |
|---|---|---|---|
| **[#3938](https://github.com/HKUDS/nanobot/issues/3938)** — Message buffering for group chats | ~40 days | Open, 1 comment | Growing pain as group chat adoption increases; no assignee |
| **[#4010](https://github.com/HKUDS/nanobot/issues/4010)** — Voice output | ~34 days | Open, 2 comments | Popular request (2 👍) but no implementation traction |
| **[#4534](https://github.com/HKUDS/nanobot/pull/4534)** — Reliability layer for agent loop | 2 days | Open, unreviewed | Large, ambitious PR covering Codex integration, verification, exec services — needs maintainer triage |
| **[#4554](https://github.com/HKUDS/nanobot/pull/4554)** — Dream duplicate skill write guard | 2 days | Open, unreviewed | Prevents skill pollution from Dream agent — small but useful |
| **[#4574](https://github.com/HKUDS/nanobot/pull/4574)** — Refactor `RetentionResult` from bare tuple | 1 day | Open, unreviewed | Code quality improvement — low risk, should be easy to merge |

### Recommendations
1. **Prioritize review of [#4534](https://github.com/HKUDS/nanobot/pull/4534)** — large PRs tend to stagnate without early maintainer feedback
2. **Acknowledge [#3938](https://github.com/HKUDS/nanobot/issues/3938)** — even a "help wanted" label would signal the issue is on the radar
3. **Fast-track [#4562](https://github.com/HKUDS/nanobot/pull/4562) security fix** — command injection vulnerabilities should not wait for a release cycle

---

*Digest generated 2026-06-29 | Data source: [HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub repository*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-29

---

## 1. Today's Overview

Hermes Agent remains in a high-activity development phase with **50 issues and 50 PRs updated in the last 24 hours**, indicating a very large and active contributor base. The project shows a heavy skew toward **bug fixes and stability work**, particularly around the **Windows Desktop GUI** (console window flashing, IME input, GBK encoding crashes) and **gateway security** (IDOR vulnerabilities, session isolation). No new releases were published today, suggesting the team is accumulating fixes for a future release. The open-to-closed ratio on issues (42 open vs. 8 closed) and PRs (46 open vs. 4 merged) signals a growing backlog that may need triage attention.

---

## 2. Releases

**No new releases today.** The latest tagged release remains at **v0.17.0** (referenced in issue #54049). Given the volume of Windows-specific fixes and security patches in the pipeline, a v0.17.1 or v0.18.0 patch release appears likely in the near term.

---

## 3. Project Progress

### Merged/Closed Items (Last 24h)

| # | Type | Item | Status |
|---|------|------|--------|
| 1 | Bug (P2) | [#53370](https://github.com/NousResearch/hermes-agent/issues/53370) — Suppress console window flash when spawning `gh auth token` on Windows | **Closed** |
| 2 | Bug (P2) | [#53957](https://github.com/NousResearch/hermes-agent/issues/53957) — PseudoConsoleWindow flicker from subprocess on Windows | **Closed** |
| 3 | Bug (P2) | [#53065](https://github.com/NousResearch/hermes-agent/issues/53065) — GBK crash loop & terminal window flood on Chinese Windows | **Closed** |
| 4 | Bug (P3) | [#53433](https://github.com/NousResearch/hermes-agent/issues/53433) — Terminal pane flickers 3-4× on launch/session switch (regression from `1f950e189`) | **Closed** |
| 5 | Bug (P2) | [#54410](https://github.com/NousResearch/hermes-agent/issues/54410) — QQAdapter.connect() unexpected keyword argument `is_reconnect` | **Closed** |

### Key Open PRs Advancing

- **[#54517](https://github.com/NousResearch/hermes-agent/pull/54517)** — Multi-terminal panel with VS Code-style tab rail for Desktop (new feature)
- **[#54530](https://github.com/NousResearch/hermes-agent/pull/54530)** — Vision support for local Ollama models not in models.dev
- **[#54525](https://github.com/NousResearch/hermes-agent/pull/54525)** — Persist compression backoff across session resume
- **[#54524](https://github.com/NousResearch/hermes-agent/pull/54524)** — Per-credential `base_url` for multi-account same-provider rotation
- **[#52355](https://github.com/NousResearch/hermes-agent/pull/52355)** — **P1 security fix**: Scope `/resume` and `/sessions` to caller's origin (IDOR vulnerability)
- **[#54522](https://github.com/NousResearch/hermes-agent/pull/54522)** — Wire GatewayEventDispatcher + Slack native plan/task cards

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

| Issue | 👍 | Comments | Topic |
|-------|-----|----------|-------|
| [#3002](https://github.com/NousResearch/hermes-agent/issues/3002) | 4 | 12 | **NeuTTS installation fails** — `venv/bin/python: No module named pip` during setup. A persistent pain point for TTS users across 3+ months. |
| [#28004](https://github.com/NousResearch/hermes-agent/issues/28004) | 0 | 7 | **Telegram typing indicator stuck indefinitely** — Race condition in `_keep_typing` cleanup loop. Affects UX on the most popular messaging gateway. |
| [#44456](https://github.com/NousResearch/hermes-agent/issues/44456) | 0 | 6 | **Desktop `/compress` built-in command broken** — TUI `command.dispatch` doesn't redirect built-ins to `slash.exec`. Core Desktop functionality regression. |
| [#54220](https://github.com/NousResearch/hermes-agent/issues/54220) | 0 | 6 | **Windows console window flashing** — Umbrella tracking issue for the most-reported active bug. Multiple subprocess spawns flash black console windows. |
| [#3846](https://github.com/NousResearch/hermes-agent/issues/3846) | 0 | 6 | **Telegram bot 401 errors** — "No cookie auth credentials found" — Authentication fallback confusion. |

### Underlying Needs Analysis

1. **Windows Desktop stability is the #1 user pain point** — console flashing, IME input, and GBK encoding form a cluster of Windows-specific issues that suggest insufficient CI/testing on Windows.
2. **Telegram gateway reliability** — typing indicator and auth errors indicate the most-used messaging platform needs dedicated QA resources.
3. **TTS pipeline fragility** — NeuTTS install failures have persisted for 3 months with 4 upvotes, suggesting the setup experience needs a more robust dependency management approach.

---

## 5. Bugs & Stability

### Critical / P1

| Issue | Severity | Description | Fix Status |
|-------|----------|-------------|------------|
| [#52355](https://github.com/NousResearch/hermes-agent/pull/52355) | 🔴 P1 | **IDOR vulnerability**: `/resume` and `/sessions` endpoints accessible across users/rooms | **Fix PR open** (awaiting merge) |
| [#44983](https://github.com/NousResearch/hermes-agent/issues/44983) | 🔴 Security | **Critical CVE** in `@whiskeysockets/baileys` (GHSA-qvv5-jq5g-4cgg) — message spoofing & app state corruption in WhatsApp bridge | Open, unfixed |

### High / P2

| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#54220](https://github.com/NousResearch/hermes-agent/issues/54220) | Windows console window flashing (umbrella tracking) | Multiple fix PRs: [#53370](https://github.com/NousResearch/hermes-agent/issues/53370) closed, [#54297](https://github.com/NousResearch/hermes-agent/pull/54297) open |
| [#28004](https://github.com/NousResearch/hermes-agent/issues/28004) | Telegram typing indicator stuck (race condition) | No fix PR yet |
| [#51976](https://github.com/NousResearch/hermes-agent/issues/51976) | Cron tool can schedule gateway restart loops | Open |
| [#54447](https://github.com/NousResearch/hermes-agent/issues/54447) | Docker sandbox file tools use un-sanitized host cwd | Open |
| [#54049](https://github.com/NousResearch/hermes-agent/issues/54049) | DeepSeek streaming broken by custom httpx transport | Open |
| [#54147](https://github.com/NousResearch/hermes-agent/issues/54147) | CLI `hermes chat -m <model>` uses stale `api_mode` → 404 errors | Open |
| [#54461](https://github.com/NousResearch/hermes-agent/issues/54461) | Matrix multi-profile rooms bypass allowed-room isolation | Open |

### Medium / P3 & Regressions

| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#39025](https://github.com/NousResearch/hermes-agent/issues/39025) | Chinese IME Enter key doesn't submit on Windows Desktop | Open |
| [#39651](https://github.com/NousResearch/hermes-agent/issues/39651) | IME composition causes send button to show as voice button | Open |
| [#53641](https://github.com/NousResearch/hermes-agent/issues/53641) | Dashboard chat input/output invisible in long sessions (xterm.js scrollback drift) | Open |
| [#46135](https://github.com/NousResearch/hermes-agent/issues/46135) | Remote TTS audio renders as 0-second file on Desktop | Open |
| [#53817](https://github.com/NousResearch/hermes-agent/issues/53817) | Desktop model picker doesn't show MoA/BeastMode from remote gateway | Open |

---

## 6. Feature Requests & Roadmap Signals

### Likely Candidates for Next Release

| Feature | Issue/PR | Signal Strength |
|---------|----------|-----------------|
| **Multi-terminal panel for Desktop** | [#54517](https://github.com/NousResearch/hermes-agent/pull/54517) | 🟢 PR open, active development |
| **Ollama vision model support** | [#54530](https://github.com/NousResearch/hermes-agent/pull/54530), [#54520](https://github.com/NousResearch/hermes-agent/pull/54520) | 🟢 Two competing PRs, high chance of merge |
| **Credential pool per-account base_url** | [#54524](https://github.com/NousResearch/hermes-agent/pull/54524) | 🟢 PR open, addresses multi-account providers |
| **Slack native plan/task cards** | [#54522](https://github.com/NousResearch/hermes-agent/pull/54522) | 🟢 PR open, wires existing infrastructure |
| **Desktop i18n (15 languages)** | [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) | 🟡 Long-running PR, synced with upstream skeleton |
| **Cron session auto-pruning** | [#39383](https://github.com/NousResearch/hermes-agent/pull/39383) | 🟡 Addresses state.db bloat (1717+ sessions reported) |
| **API pagination for sessions/messages** | [#38942](https://github.com/NousResearch/hermes-agent/pull/38942) | 🟡 Performance improvement for long sessions |

### Community-Requested Features (No PR Yet)

| Issue | Request | Upvotes |
|-------|---------|---------|
| [#45779](https://github.com/NousResearch/hermes-agent/issues/45779) | Multi-gateway connections with per-gateway tabs in Desktop | 2 👍 |
| [#31597](https://github.com/NousResearch/hermes-agent/issues/31597) | Background memory review at session boundaries | 0 👍 |
| [#54463](https://github.com/NousResearch/hermes-agent/issues/54463) | Edge-based vertical packs for PM/analyst workflows | 0 👍 |
| [#17062](https://github.com/NousResearch/hermes-agent/issues/17062) | Safe customer-support deployment profile (RFC) | 0 👍 |

---

## 7. User Feedback Summary

### Pain Points

1. **Windows Desktop is the primary source of frustration** — Users report the app is "nearly unusable" on non-English Windows due to GBK crash loops, console window flooding, and IME input bugs. The console flashing alone has spawned a tracking issue with 6+ comments and multiple duplicate reports ([#54220](https://github.com/NousResearch/hermes-agent/issues/54220), [#54506](https://github.com/NousResearch/hermes-agent/issues/54506), [#53065](https://github.com/NousResearch/hermes-agent/issues/53065)).

2. **Desktop app parity gap with CLI/TUI** — Issue [#54473](https://github.com/NousResearch/hermes-agent/issues/54473) argues that Desktop shipped with 30× the feature velocity of TUI but introduced regressions in core functionality (e.g., `/compress` broken). Users expect feature parity.

3. **Setup experience is fragile** — NeuTTS installation fails because the venv lacks pip ([#3002](https://github.com/NousResearch/hermes-agent/issues/3002)), and Ollama Cloud model picker shows local models instead of cloud models ([#52599](https://github.com/NousResearch/hermes-agent/issues/52599)). First-run experience needs hardening.

4. **Telegram gateway reliability** — Auth errors with confusing fallback messages ([#3846](https://github.com/NousResearch/hermes-agent/issues/3846)) and stuck typing indicators ([#28004](https://github.com/NousResearch/hermes-agent/issues/28004)) degrade trust in the most popular integration.

### Positive Signals

- Active community contributing PRs for vision support, multi-terminal, i18n, and security fixes
- Detailed root cause analyses from users (e.g., [#53957](https://github.com/NousResearch/hermes-agent/issues/53957), [#54049](https://github.com/NousResearch/hermes-agent/issues/54049)) show sophisticated user base
- Feature requests for multi-gateway, vertical packs, and deployment profiles indicate enterprise/team use cases emerging

---

## 8. Backlog Watch

### Long-Unanswered Issues Needing Maintainer Attention

| Issue | Age | Description | Risk |
|-------|-----|-------------|------|
| [#3002](https://github.com/NousResearch/hermes-agent/issues/3002) | **~3.5 months** | NeuTTS install fails (No module named pip) — 4 👍, 12 comments | Setup friction for new users |
| [#3846](https://github.com/NousResearch/hermes-agent/issues/3846) | **~3 months** | Telegram 401 auth errors with confusing messaging | User trust in core gateway |
| [#27804](https://github.com/NousResearch/hermes-agent/issues/27804) | **~1.5 months** | Email gateway lacks subject-based session isolation | Data leakage risk |
| [#44983](https://github.com/NousResearch/hermes-agent/issues/44983) | **~1.5 months** | Critical CVE in WhatsApp baileys dependency | **Unpatched security vulnerability** |
| [#17062](https://github.com/NousResearch/hermes-agent/issues/17062) | **~2 months** | RFC for safe customer-support deployment profile | Enterprise adoption blocker |
| [#36046](https://github.com/NousResearch/hermes-agent/issues/36046) | **~1 month** | Kanban artifact not created/deleted properly | Workflow reliability |

### Stale PRs Needing Review

| PR | Age | Description |
|----|-----|-------------|
| [#17376](https://github.com/NousResearch/hermes-agent/pull/17376) | **~2 months** | Isolate OpenClaw skill directories (cross-app pollution) |
| [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) | **~25 days** | Desktop i18n with 15 languages — large PR, needs review bandwidth |
| [#39383](https://github.com/NousResearch/hermes-agent/pull/39383) | **~25 days** | Cron session retention config — addresses state.db bloat |
| [#38942](https://github.com/NousResearch/hermes-agent/pull/38942) | **~25 days** | API pagination for sessions/messages — performance fix |
| [#40425](https://github.com/NousResearch/hermes-agent/pull/40425) | **~23 days** | Keep recalled memory off customer/downstream paths |

---

### Health Assessment

| Metric | Status | Notes |
|--------|--------|-------|
| **Activity** | 🟢 High | 100 items updated in 24h |
| **Stability** | 🟡 Moderate | Windows Desktop is the main regression hotspot |
| **Security** | 🔴 Attention needed | P1 IDOR fix + critical CVE unpatched |
| **Release Cadence** | 🟡 Stalled | No release today; fixes accumulating |
| **Backlog** | 🟡 Growing | 42 open issues vs. 8 closed; PR review bandwidth constrained |
| **Community** | 🟢 Active | Quality bug reports, multiple feature PRs from contributors |

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-29

---

## 1. Today's Overview

PicoClaw saw modest activity over the past 24 hours, with one issue closed and two PRs updated (one merged/closed, one newly opened). The project appears to be in a steady maintenance phase, with no new releases in the pipeline. Community contributions remain active but sparse, with a new feature PR for a simplex channel type currently awaiting review. The closed issue and stale PR suggest some backlog grooming is underway, though response times on older items remain a concern.

---

## 2. Releases

**No new releases** in the reporting period. The project has no tagged releases listed in the current data window.

---

## 3. Project Progress

- **PR #2964 — [CLOSED] Feat/image input compression** ([link](https://github.com/sipeed/picoclaw/pull/2964))
  - **Author:** afjcjsbx | Created: 2026-05-28 | Closed: 2026-06-28
  - This PR introduced configurable inbound image compression for PicoClaw's vision pipeline, adding a multi-level compression policy before building model payloads. The PR was closed (marked stale) after ~30 days without merge. **Status unclear** — it is not confirmed whether the changes were merged or abandoned. If abandoned, this represents a lost contribution around an important optimization (preventing oversized payloads in the vision pipeline).

- **PR #3193 — [OPEN] Added simplex channel type** ([link](https://github.com/sipeed/picocaw/pull/3193))
  - **Author:** dim | Created: 2026-06-27 | Updated: 2026-06-28
  - A new feature PR adding a "simplex channel type" to the project. Still in early stages with no maintainer comments yet. This could expand PicoClaw's communication channel abstractions.

---

## 4. Community Hot Topics

| Item | Type | Engagement | Status |
|------|-------|-----------|--------|
| [#2984](https://github.com/sipeed/picocaw/issues/2984) — Add explicit turn completion signal for Pico WebSocket clients | Issue | 4 comments, 👍 2 | Closed (stale) |
| [#2964](https://github.com/sipeed/picocaw/pull/2964) — Image input compression | PR | 0 reactions | Closed (stale) |

**Analysis:**
- **Issue #2984** was the most engaged item, with 4 comments and 2 reactions. The underlying need is clear: external WebSocket clients consuming the Pico Protocol lack a deterministic signal for when the agent has fully finished processing a turn. Currently, clients must infer completion from a combination of `message.create`, `message.update`, `typing.start`, and `typing.stop` events — a fragile pattern. This is a **protocol design gap** that affects any third-party client or integration built on top of PicoClaw's WebSocket API. The fact that it was closed as stale (rather than resolved) suggests this need remains unmet and may resurface.

---

## 5. Bugs & Stability

**No new bug reports, crash reports, or regressions** were filed in the 24-hour window.

**Known concern:** The closure of PR #2964 (image compression) without confirmed merge means the vision pipeline may still be vulnerable to oversized inbound image payloads — a potential stability risk under heavy media load. No fix PR is currently open for this.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood |
|---------|--------|------------|
| Explicit turn completion signal for WebSocket clients | [#2984](https://github.com/sipeed/picocaw/issues/2984) | **Medium-High** — clear use case, community demand (👍2, 4 comments), but closed stale. May need a champion to re-open or implement. |
| Simplex channel type | [#3193](https://github.com/sipeed/picocaw/pull/3193) | **Medium** — PR already submitted; adoption depends on maintainer review. |
| Configurable image compression policy | [#2964](https://github.com/sipeed/picocaw/pull/2964) | **Low (in current form)** — PR closed stale; would need re-submission or maintainer-led implementation. |

**Prediction:** If PR #3193 gains traction, the next minor release (if one materializes) may include the simplex channel type. The turn completion signal is a stronger candidate for a protocol-level addition but requires maintainer prioritization.

---

## 7. User Feedback Summary

- **Pain point — Protocol ambiguity:** WebSocket client developers need deterministic turn-completion signals. The current event-based heuristic (`typing.stop` + `message.update`) is insufficient for production-grade integrations. This is the clearest user-expression of dissatisfaction in the dataset.
- **Pain point — Vision pipeline efficiency:** The image compression PR (#2964) highlights that users are pushing media-heavy workloads and need configurable compression to avoid payload bloat. The closure of this PR without resolution may frustrate users with bandwidth or latency constraints.
- **Satisfaction signal:** The existence of community PRs (#2964, #3193) indicates an engaged contributor base willing to improve the project, even if maintainer bandwidth to review appears limited.

---

## 8. Backlog Watch

| Item | Age | Risk | Recommendation |
|------|-----|------|----------------|
| [#2984](https://github.com/sipeed/picocaw/issues/2984) — Turn completion signal | 27 days (closed stale) | **High** — affects all WebSocket integrations; closed without resolution | Re-open or create a tracking issue; consider for next protocol iteration |
| [#2964](https://github.com/sipeed/picocaw/pull/2964) — Image compression | 32 days (closed stale) | **Medium** — optimization lost; vision pipeline remains uncompressed | Maintainer should clarify status: merge, request changes, or close with explanation |
| [#3193](https://github.com/sipeed/picocaw/pull/3193) — Simplex channel | 2 days (open) | **Low** — very recent | Needs initial maintainer review to prevent going stale |

**Overall health signal:** The pattern of PRs and issues being closed as "stale" rather than resolved or merged is the primary concern. It suggests **maintainer bandwidth constraints** relative to community contribution volume. Proactive triage (even a "we'll revisit in Q3" comment) would reduce contributor attrition and keep the backlog actionable.

---

*Digest generated: 2026-06-29 | Data source: github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-29

---

## 1. Today's Overview

NanoClaw shows moderate activity with 6 PRs updated in the last 24 hours (5 open, 1 closed) and 1 new issue reported. The project is in a stabilization phase: no new releases have been cut recently, and the open PR queue is dominated by bug fixes and security hardening rather than major feature work. A notable cluster of PRs addresses a symlink-escape vulnerability (CWE-59, issue #2828), indicating active security response. Community contributions span multiple adapters (Discord, Telegram, Codex) and deployment tooling (Coolify), reflecting a broadening integration surface. The lack of new releases despite several merged fixes suggests a release may be accumulating.

---

## 2. Releases

No new releases in the reporting window. The latest known version referenced by users is **2.1.1** (per issue #2876). Several merged and open PRs (security fixes, adapter bugs) are likely candidates for the next patch release.

---

## 3. Project Progress

**Merged / Closed PRs:**

- **PR #2879** — `fix(agent-to-agent): containment-check target inbox in forwardAttachedFiles (#2828)` by johnmathews. Closed (merged). Adds symlink-containment checks to A2A attachment forwarding, mirroring the existing defensive pattern in `saveAttachments()`. This is a direct security fix for CWE-59.

**Open PRs advancing:**

- **PR #2880** — `fix(security): contain inbox symlink escapes in attachment writes (#2828)` by johnmathews. A companion/expanded fix for the same CWE-59 class, covering both inbound file-write paths. Likely to be the more complete replacement or supplement to #2879.
- **PR #2881** — `fix(discord): decode custom_id delimiter before parsing button actions` by jeevesforjoel. Fixes a Discord adapter bug where the `\n` delimiter in button `custom_id` strings caused incorrect parsing (`'0\n0'` vs `'0'`), breaking button action resolution.
- **PR #2878** — `fix(codex): allow reconnect when OneCLI already has a stale OpenAI secret` by glifocat. Addresses a UX failure where Codex agents fail mid-conversation with stale/revoked tokens because `runCodexAuthStep()` treated any existing secret as valid.
- **PR #2877** — `feat(telegram): native rich rendering via Bot API 10.1 sendRichMessage` by robbyczgw-cla. New feature adding rich message rendering to the Telegram adapter.
- **PR #2875** — `Deploy/coolify` by zczDief. Deployment/operational skill for Coolify integration.

---

## 4. Community Hot Topics

| Item | Type | Author | Signal |
|------|------|--------|--------|
| **#2828** (symlink escape) | Underlying issue | — | **Highest urgency** — spawned 2 PRs (#2879 merged, #2880 open) in rapid succession. Indicates a serious security concern with active maintainer/contributor attention. |
| **#2876** — OpenAI provider crash | Issue | MJDemarcus | New report; CLI accepts `--provider openai` but container crashes on agent spawn. No comments yet. |
| **#2877** — Telegram rich rendering | PR | robbyczgw-cla | New feature leveraging Bot API 10.1; signals demand for richer messaging UX. |
| **#2875** — Coolify deploy | PR | zczDief | Operational/deployment skill; reflects community interest in easier self-hosted deployment. |

**Analysis:** The dominant theme is **security hardening** around container/session isolation. The symlink-escape issue (#2828) is the clear focal point, with two contributors racing to patch it. Beyond security, the community is pushing for **broader provider support** (OpenAI native), **richer channel UX** (Telegram rich messages), and **deployment simplicity** (Coolify).

---

## 5. Bugs & Stability

| Severity | Issue / PR | Description | Fix Status |
|----------|-----------|-------------|------------|
| 🔴 **High (Security)** | #2828 / PR #2879, #2880 | Symlink-follow → arbitrary host file write via session dirs mounted into agent containers (CWE-59). | Fix merged (#2879); expanded fix open (#2880). |
| 🟠 **Medium** | #2876 | OpenAI provider: CLI config update succeeds but container crashes on agent spawn. | No fix PR yet. Needs triage. |
| 🟡 **Medium** | PR #2878 | Codex agents fail mid-conversation when OneCLI has a stale/revoked OpenAI secret; auth step falsely reports success. | Fix open, not yet merged. |
| 🟡 **Low** | PR #2881 | Discord button `custom_id` delimiter not decoded before parsing; button actions resolve incorrectly. | Fix open, not yet merged. |

**Stability assessment:** The security issue is the most critical item and is being actively addressed. The OpenAI provider crash (#2876) is a regression-like bug that breaks a documented workflow and should be prioritized for the next patch.

---

## 6. Feature Requests & Roadmap Signals

- **Native OpenAI provider support** (#2876) — The CLI already exposes `--provider openai`, suggesting this is a partially-implemented feature. The crash on spawn indicates the plumbing is incomplete. Likely to be stabilized in the next patch.
- **Telegram rich rendering** (PR #2877) — Leverages Bot API 10.1's `sendRichMessage`. Signals investment in richer, more native-feeling messaging across adapters.
- **Coolify deployment** (PR #2875) — Operational skill for one-click/self-hosted deployment. Reflects demand for easier onboarding.
- **Codex reconnection resilience** (PR #2878) — Improves reliability of the Codex/OneCLI auth flow.

**Prediction for next release (likely v2.1.2 or v2.2.0):** Security patches for #2828, the Discord button fix, the Codex auth fix, and a fix for the OpenAI provider crash. Telegram rich rendering may land if review is fast.

---

## 7. User Feedback Summary

- **Pain point — OpenAI provider is broken in practice:** A user reports that the documented `--provider openai` workflow silently accepts configuration but crashes at runtime. This is a trust/UX issue: the CLI gives no validation feedback, and the failure mode (container crash) is opaque.
- **Pain point — Codex token refresh failures:** Implied by PR #2878; users experience mid-conversation failures when tokens expire, with no automatic recovery.
- **Satisfaction signal — active security response:** The rapid turnaround on #2879/#2880 suggests the maintainers are responsive to security reports, which is a positive signal for enterprise/self-hosted adopters.
- **Deployment friction:** The Coolify PR indicates users want simpler deployment paths beyond manual Docker setups.

---

## 8. Backlog Watch

| Item | Age / Status | Concern |
|------|-------------|---------|
| **#2876** — OpenAI provider crash | Created 2026-06-28, 0 comments | No maintainer response yet. Breaks a documented feature. Needs triage and likely a fix PR. |
| **PR #2875** — Coolify deploy | Created 2026-06-27, updated 2026-06-28 | No comments/review. Operational skills may have lower review priority but add deployment value. |
| **PR #2877** — Telegram rich rendering | Created 2026-06-28 | No comments yet. New feature PRs may need more review cycles. |

**Recommendation for maintainers:** Prioritize triage of #2876 (OpenAI crash) — it's a same-day report of a broken documented workflow and will likely attract more user reports quickly. The Coolify and Telegram PRs would benefit from an initial review comment to signal whether they're aligned with project direction.

---

*Data source: github.com/qwibitai/nanoclaw | Digest generated: 2026-06-29*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-29

**Project:** [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. Today's Overview

NullClaw experienced minimal activity over the past 24 hours, with one issue closed and no pull requests submitted or merged. The project appears to be in a low-activity maintenance phase, with no new releases in recent memory. Community engagement remains sparse, as evidenced by near-zero reaction counts on issues. There are no open issues or PRs requiring immediate attention, signaling either a quiet period or limited maintainer bandwidth. Overall, the project's public momentum is subdued.

---

## 2. Releases

No current releases exist; therefore there are no release notes or migration guidance available.

---

## 3. Project Progress

No pull requests were merged or closed in the last 24 hours. There are no measurable feature advances or bug fixes to report for this period.

---

## 4. Community Hot Topics

- **[#50 – Can this run on an Esp32?](https://github.com/nullclaw/nullclaw/issues/40)**
  4 comments · 👍 0 · Closed (2026-06-28)
  A user inquired about ESP32 compatibility, making this the sole — and most commented — issue in the repository. While it is already **closed**, no positive reactions were recorded, suggesting limited community traction. The underlying signal here points to **embedded/IoT use cases**: users are exploring whether NullClaw can run on constrained hardware. There is likely unmet interest in microcontroller-class deployments, even if only one person has voiced it publicly.

---

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours. There are no open bug reports or fix PRs to document.

---

## 6. Feature Requests & Roadmap Signals

- **Embedded hardware support (ESP32):** The only signal in the issue log. While niche, this request hints at demand for lightweight, edge-device compatibility. **Prediction:** Low likelihood of near-term implementation given project activity levels; ESP32 support would require significant architectural consideration (memory, stack size, etc.), and the maintainer capacity to address it is unclear.

---

## 7. User Feedback Summary

- **Current pain point:** The lone reviewer wants to host NullClaw on a microcontroller, indicating hardware/compatibility gaps.
- **Satisfaction:** No reaction data available (`👍: 0`); the absence of positive feedback does not imply dissatisfaction but signals under‑engagement. The community size is too small to draw broader conclusions.
- **Dominant use case observed:** One user is experimenting with constrained environments rather than conventional cloud/server deployments.

---

## 8. Backlog Watch

No open PR backlog is recorded. The repository appears to be inactive overall, with a single historical issue already resolved. **This is a soft watch flag:** whenever activity resumes, revisiting ESP32 demand (issue #50, now closed) would be the logical next community checkpoint.

---

### Project Health Summary

| Metric | Value |
|---|---|
| Open Issues | **0** |
| Open PRs | **0** |
| Activity (last 24h) | **1 issue closed, 0 PRs** |
| Community Engagement | **Low (👍: 0 on only issue)** |

> **⚠️ Watch Flag:** Persistent low output (fluctuating metrics may suggest data errors). If this continues, contributors should treat the project as effectively dormant until a release emerges.

*Digest generated: 2026-06-29*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest  
**Date:** 2026-06-29

---

## 1. Today's Overview
IronClaw shows **intense engineering velocity**: 42 PRs updated in 24h (17 merged/closed, 25 still open) and 3 issue updates. A large chunk of today's activity is clearly the **big Reborn core refactor + integration test framework marathon** — multiple stacked integration-test slices (#5149, #5392) and race-condition/approval fixes (#5306). Activity looks more feature/stability focused than release churn (no new releases). The Nightly E2E bot is still red (#4108), but several quality/canary PRs are trying to surface exactly this kind of regression earlier (#5354).

---

## 2. Releases
None.

---

## 3. Project Progress (merged/closed PRs today)
| PR | Summary |
|----|---------|
| [5393](https://github.com/nearai/ironclaw/pull/5393) | Throwaway `/benchmark` build validation against current ironclaw (toml_parser lock). |
| [5386](https://github.com/nearai/ironclaw/pull/5386) | STOP-scope verdict: embeddings-fake slice unreachable (no real seam). |
| [5387](https://github.com/nearai/ironclaw/pull/5387) | Integration-test slice 4: URL/method-keyed HTTP matcher + richer egress assertion API. |
| [5388](https://github.com/nearai/ironclaw/pull/5388) | Fix Reborn WebUI Google SSO `id_token` decode after `jsonwebtoken` 10.x bump; canonicalize OAuth base URL for Railway preview domains. |
| [5236](https://github.com/nearai/ironclaw/issues/5236) | Closed: stop committing WebUI v2 dist bundle artifacts. |

**What advanced:**  
- **Reborn integration-test framework** is being built in slices (HTTP matcher, egress assertions, OAuth/refresh, LibSql matrix) — [5392](https://github.com/nearai/ironclaw/pull/5392).  
- **Google SSO** on Reborn WebUI fixed for real Google RS256 tokens — [5388](https://github.com/nearai/ironclaw/pull/5388).  
- **WebUI v2 dist bundle** no longer committed to repo — [5236](https://github.com/nearai/ironclaw/issues/5236).

---

## 4. Community Hot Topics
| Item | Why it's hot |
|------|--------------|
| [5385](https://github.com/nearai/ironclaw/issues/5385) — Add Capability Policy | User wants fine-grained owner/admin/member roles via env vars. Directly tied to [5394](https://github.com/nearai/ironclaw/pull/5394) (capability policy e2e). |
| [5306](https://github.com/nearai/ironclaw/pull/5306) — ask-each-time approval resume loop | Core fix for Reborn approval gating; touches security-sensitive capability lease logic. |
| [5149](https://github.com/nearai/ironclaw/pull/5149) — Context management / progressive tool disclosure | Cuts ~25.8k tokens/call × 4 re-sends → directly addresses NEAR AI 120s timeout. |
| [5354](https://github.com/nearai/ironclaw/pull/5354) — Reborn WebUI v2 live QA canary | New Playwright lane against live LLM/tool integrations. |
| [5362](https://github.com/nearai/ironclaw/pull/5362) — Harden Slack pairing activation flows | Fixes stale/expired code handling, thread isolation for pairing continuation. |

**Underlying needs:**  
- **Security & multi-tenancy** (capability policy, approval gating).  
- **Latency/timeout reduction** (context management).  
- **Reliability of external integrations** (Slack pairing, Google SSO, Exa web fetch).  
- **CI confidence** (live canary, integration-test framework).

---

## 5. Bugs & Stability
| Severity | Item | Status |
|----------|------|--------|
| 🔴 High | [4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failed | Open since 2026-05-27, still failing. No fix PR linked yet. |
| 🟠 Medium | [5306](https://github.com/nearai/ironclaw/pull/5306) — ask-each-time approval resume loop | Open fix PR. |
| 🟠 Medium | [5388](https://github.com/nearai/ironclaw/pull/5388) — Google SSO decode regression | Closed/fixed today. |
|  Low | [5395](https://github.com/nearai/ironclaw/pull/5395) — Web Access Exa content fetch | Open fix PR. |
|  Low | [5252](https://github.com/nearai/ironclaw/pull/5252) — Slack host conversation bindings persistence | Open fix PR. |

**Stability signal:** The Nightly E2E red streak is the most concerning item; the team is clearly investing in canary + integration-test infrastructure to catch these earlier.

---

## 6. Feature Requests & Roadmap Signals
| Request | Likelihood of next version |
|---------|----------------------------|
| Capability Policy (owner/admin/member) — [5385](https://github.com/nearai/ironclaw/issues/5385) + [5394](https://github.com/nearai/ironclaw/pull/5394) | **High** — e2e PR already open. |
| Progressive tool disclosure / context management — [5149](https://github.com/nearai/ironclaw/pull/5149) | **High** — directly addresses production timeouts. |
| Reborn integration-test framework (slices 3–9) — [5392](https://github.com/nearai/ironclaw/pull/5392) | **High** — actively being merged. |
| WebUI v2 live QA canary — [5354](https://github.com/nearai/ironclaw/pull/5354) | **Medium** — CI infrastructure. |
| FailureLane classifier + two-bucket enforcement — [5390](https://github.com/nearai/ironclaw/pull/5390) | **Medium** — error recoverability audit follow-up. |

---

## 7. User Feedback Summary
- **Pain point:** NEAR AI requests timing out at 120s because every model call ships ~25.8k tokens × 4 re-sends ([5149](https://github.com/nearai/ironclaw/pull/5149)).  
- **Pain point:** Google SSO on Reborn WebUI broke after `jsonwebtoken` 10.x bump — real Google RS256 tokens failed to decode ([5388](https://github.com/nearai/ironclaw/pull/5388)).  
- **Pain point:** Slack pairing flows had edge cases with stale/expired codes and thread isolation ([5362](https://github.com/nearai/ironclaw/pull/5362)).  
- **Desire:** Fine-grained capability/role policy for multi-user setups ([5385](https://github.com/nearai/ironclaw/issues/5385)).  
- **Satisfaction signal:** Active hackathon fork ([4787](https://github.com/nearai/ironclaw/pull/4787)) indicates community onboarding interest, though it's a NO MERGE fork.

---

## 8. Backlog Watch
| Item | Age | Why it needs attention |
|------|-----|------------------------|
| [4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failed | ~33 days | Longest-standing open issue; indicates CI instability. |
| [4002](https://github.com/nearai/ironclaw/pull/4002) — Dependabot actions group (16 updates) | ~36 days | Stale dependency updates; may conflict with newer changes. |
| [4032](https://github.com/nearai/ironclaw/pull/4032) — Dependabot wasm group | ~35 days | Same as above. |
| [4498](https://github.com/nearai/ironclaw/pull/4498) — serde_yml bump | ~25 days | Serialization dependency; low risk but stale. |
| [4787](https://github.com/nearai/ironclaw/pull/4787) — Barcelona Hackathon fork | ~17 days | NO MERGE, but signals community onboarding needs. |

---

**Overall Health:** 🔥 **High activity, strong feature momentum, but CI stability needs attention.** The Reborn refactor is clearly the main effort, with security (capability policy), latency (context management), and reliability (SSO, Slack, E2E) as top priorities.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-29

---

## 1. Today's Overview

LobsterAI is a moderately active open-source project maintained by NetEase Youdao, currently experiencing a quieter phase with no new releases and relatively low daily activity. In the past 24 hours, **5 issues** were updated (1 open, 4 closed as stale) and **5 PRs** were touched (2 remain open, 3 closed as stale—all auto-closed by GitHub's stale bot after prolonged inactivity). The community continues to surface meaningful bug reports and feature requests, but the majority of contributions from April remain unmerged due to prolonged review gaps. The absence of releases and maintainer responsiveness over the past ~3 months raises questions about current development velocity.

---

## 2. Releases

**No new releases in the version history available.** The project has not shipped a version since at least early 2026, and the most recent activity on the default branch appears to have stagnated. No migration notes or changelog updates are available for the current period.

---

## 3. Project Progress

All PRs updated today were closed as **stale** after sitting idle since April 2026. No PRs were merged in the last 24 hours. This ongoing pattern of PRs closing without merging—without evidence of rejection—suggests a resource or priority constraint within the core team rather than technical disagreement. Notable PRs that were lost to inactivity:

- **[PR #1441](https://github.com/netease-youdao/LobsterAI/pull/1441)** — Extensible HTML/React/Mermaid preview pipeline for artifacts (a conflict-resolved revival of PR #1011, accompanied by 5 verified bug fixes from runtime testing).
- **[PR #1445](https://github.com/netease-youdao/LobsterAI/pull/1445)** — Fixes duplicate skill import and ZIP directory naming anomalies.
- **[PR #1488](https://github.com/netease-youdao/LobsterAI/pull/1488)** — [STILL OPEN] Scheduled task module UI overhaul: card grid layout, search/filter, historical task queries.
- **[PR #1494](https://github.com/netease-youdao/LobsterAI/pull/1494)** — [STILL OPEN] Session-isolated skill selection state (per-conversation persistence).

What this reveals: the project's feature backlog contains well-scoped, clearly documented contributions that improve UX (preview pipelines, skill management, scheduling). The gap is in review bandwidth, not in code quality. If LobsterAI wants to signal to the community that it remains active, a dedicated maintainer sprint to triage the April–June PR queue should be the immediate priority.

---

## 4. Community Hot Topics

Today's most active discussions cluster around three recurring themes that have persisted since early April:

| # | Item | Comments | Link |
|---|------|----------|------|
| 1 | OpenClaw v2026.3.24 breaking change — upgrade failures after breaking API change | 3 | [Issue #1443](https://github.com/netease-youdao/LobsterAI/issues/1443) |
| 2 | **Memory Search locked to OpenAI provider** — cannot switch to local embedding; DB lock (EBUSY) blocks index rebuild | 1 (new) | [Issue #2216](https://github.com/netease-youdao/LobsterAI/issues/2216) |
| 3 | Deactivated skills still callable in conversations | 2 | [Issue #1439](https://github.com/netease-youdao/LobsterAI/issues/1439) |
| 4 | Scheduled task creation silently fails (no error feedback) | 2 | [Issue #1437](https://github.com/netease-youdao/LobsterAI/issues/1437) |
| 5 | Agent skill tags disappear after conversation round, reappear on session switch | 2 | [Issue #1442](https://github.com/netease-youdao/LobsterAI/issues/1442) |

The top two topics signal more than isolated defects — they expose systemic rigidity. The OpenClaw incompatibility combined with the hard-coded OpenAI reliance for embeddings both point to a deeper dependency-coupling problem. Related feature work already exists in the form of open PRs (session-state decoupling for skills, UI improvements), but the review inactivity means none can ship.

---

## 5. Bugs & Stability

Today’s bug reports raise the importance of coupling between external services and local operation. A single new issue, **#2216**, captures the highest-severity problem: when OpenAI returns 429 (quota exhaustion), the memory search feature completely fails because no local fallback is available. The same report also identifies a SQLite **EBUSY error** during index rebuild, pointing to a concurrency or transaction-locking issue in the local database layer. Together, these create a cascading reliability problem that affects any user without unlimited OpenAI credits.

**Severity ranking:**

1. **🔴 High — Memory Search hard-locked to OpenAI provider** ([Issue #2216](https://github.com/netease-youdao/LobsterAI/issues/2216))
   - **Impact:** Memory Search completely unavailable when OpenAI quota is exhausted (429). Additionally, EBUSY (database lock) blocks index rebuild on Windows, further degrading search capability.
   - **Affected platforms:** Windows 11 (confirmed); potentially any OS with write-lock contention.
   - **Fix status:** No fix PR open. Root cause: provider selection in settings UI is locked/disabled; no fallback embedding provider (e.g., local ONNX/transformers.js) is wired.

2. **🟡 Medium — Scheduled task creation silently fails** ([Issue #1437](https://github.com/netease-youdao/LobsterAI/issues/1437))
   - **Impact:** User clicks "Create Task" with non-repeating schedule; button produces no response, no error toast, no console log. Users cannot create any non-repeating scheduled task.
   - **Fix status:** No fix PR. Possibly related to frontend form validation or null calendar state.

3. **🟡 Medium — Deactivated skills remain invokable** ([Issue #1439](https://github.com/netease-youdao/LobsterAI/issues/1439))
   - **Impact:** After deactivating a chatbot skill via settings, typing the skill's keyword in conversation still triggers it. This is a UX trust issue — users reasonably expect deactivation to be a hard stop.
   - **Fix status:** No fix PR.

4. **🟡 Medium — Agent skill tags disappear after conversation** ([Issue #1442](https://github.com/netease-youdao/LobsterAI/issues/1442))
   - **Impact:** Selected skills vanish from the input bar's skill list after a message round-trip, reappearing only when switching agents. Unclear expected behavior.
   - **Related improvement:** [PR #1494](https://github.com/netease-youdao/LobsterAI/pull/1494) (open, stale) proposes per-session skill persistence — directly addresses this symptom but has not been reviewed in ~3 months.

5. **🟢 Low — OpenClaw v2026.3.24 upgrade breaks LobsterAI** ([Issue #1443](https://github.com/netease-youdao/LobsterAI/issues/1443))
   - **Impact:** Users upgrading OpenClaw independently encounter a breaking change; LobsterAI fails to start. This affects users who manage OpenClaw as a separate dependency.
   - **Fix status:** No fix PR. Requires LobsterAI to update its OpenClaw integration layer.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood of near-term inclusion |
|--------|--------|----------------------------------|
| Local/offline embedding provider for Memory Search | [Issue #2216](https://github.com/netease-youdao/LobsterAI/issues/2216) — user demand driven by OpenAI quota exhaustion | **Medium-High** (clear pain, aligns with self-hosted ethos) |
| Per-session skill selection persistence | [PR #1494](https://github.com/netease-youdao/LobsterAI/pull/1494) — code already written | **Medium** (exists, needs merge approval) |
| Scheduled task UI: card grid, search, history | [PR #1488](https://github.com/netease-youdao/LobsterAI/pull/1488) — code already written | **Medium** (exists, needs merge approval) |
| Extensible artifact preview (HTML/React/Mermaid) | [PR #1441](https://github.com/netease-youdao/LobsterAI/pull/1441) — code already written, 5 bugs fixed | **Medium** (exists, needs merge approval) |
| OpenClaw v2026.3.24+ compatibility | [Issue #1443](https://github.com/netease-youdao/LobsterAI/issues/1443) | **Low-Medium** (no PR yet; may be deprioritized) |
| Hard-stop deactivation for skills | [Issue #1439](https://github.com/netease-youdao/LobsterAI/issues/1439) | **Low** (no PR yet) |

**Prediction for next release (if any):** If the team unfreezes PR reviews, the most likely first-release candidates are the skill-selection UX fix (PR #1494 + PR #1494) and the scheduled-task UI overhaul (PR #1488), followed by the embedding-provider fallback. The preview pipeline (PR #1441) is feature-complete but may require additional QA. Until reviews resume, none are shippable.

---

## 7. User Feedback Summary

The community's signal is consistent across reports: LobsterAI is valued as a self-hosted AI agent platform, but users are now hitting friction from its upstream dependencies. The most critical theme is **service coupling**. When OpenAI credits run out, a local-only feature like memory search shuts down, which contradicts the expectation of an open-source assistant. The same theme appears in the OpenClaw issue, where upgrading a dependency breaks the entire stack. Beyond that, usability gaps compound the frustration: disabled skills activating, scheduled-task buttons doing nothing, and skill tags disappearing all erode trust. These are not niche complaints—they affect daily workflows for anyone managing their agents actively.

**Emerging needs/opportunities users are implicitly signaling:**
- **Self-hosted/local-first mode:** Users want to run LobsterAI entirely without external API dependencies (local LLM + local embedding).
- **Graceful degradation:** When an external API fails, the UI should communicate status clearly rather than silently breaking.
- **Session state persistence:** Users work across multiple conversations and expect per-session state to be managed correctly.
- **Scheduled tasks as a growth area:** Three separate issues/PRs touch scheduled tasks, suggesting this feature is becoming a power-user workflow.

---

## 8. Backlog Watch

The following items have been unanswered or unreviewed for **80+ days** and represent meaningful value if addressed:

| Item | Age | Status | Why it matters |
|------|-----|--------|----------------|
| [PR #1494](https://github.com/netease-youdao/LobsterAI/pull/1494) — Per-session skill selection persistence | ~84 days | Open (stale) | Directly fixes a user-reported bug ([Issue #1442](https://github.com/netease-youdao/LobsterAI/issues/1442)); clean, scoped diff |
| [PR #1488](https://github.com/netease-youdao/LobsterAI/pull/1488) — Scheduled task UI overhaul | ~84 days | Open (stale) | Comprehensive UX upgrade for a frequently-used feature |
| [PR #1441](https://github.com/netease-youdao/LobsterAI/pull/1441) — Artifact preview pipeline | ~86 days | Closed (stale, unmerged) | Significant feature addition; contributor did extra work to resolve conflicts and fix bugs — effort was wasted |
| [Issue #2216](https://github.com/netease-youdao/LobsterAI/issues/2216) — Memory Search local embedding | 1 day | **Open (new)** | Highest-stability issue currently; intersects with self-hosted user demand |
| Issue Scheduled Task button silently fails | ~87 days | Closed (stale) | Regression; no fix merged |

**Recommended maintainer actions (by priority):**
1. **Triage the 3 open/stale PRs** — at minimum, post a status comment (merge, request changes, or close with explanation). The lack of feedback in 3 months may be deterring new contributors.
2. **Assign [Issue #2216](https://github.com/netease-youdao/LobsterAI/issues/2216)** to a maintainer — it's the highest-severity open bug and aligns with the project's self-hosted positioning.
3. **Un-stale [PR #1441](https://github.com/netease-youdao/LobsterAI/pull/1441)** — a contributor invested significant effort; a re-open or re-submission would signal that the project welcomes contributions.

---

*Data source: github.com/netease-youdao/LobsterAI | Generated: 2026-06-29 | Analysis window: trailing 24h*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — June 29, 2026

---

## 1. Today's Overview

Moltis saw modest activity over the past 24 hours with **1 active issue** and **2 open pull requests**, and **no new releases**. The project appears to be in a stabilization/maintenance phase: both open PRs target concrete bugs rather than new features, signaling the team (or a very active contributor) is focused on improving reliability. There is no release cadence data available from this snapshot, though the absence of any latest release on file is itself notable — it may indicate a versioning/distribution gap that warrants attention alongside code-level improvements.

---

## 2. Releases

No new releases are available. The "Latest Releases" field is empty, and no new versions were published in the last 24 hours. This section is omitted as instructed.

---

## 3. Project Progress

**No PRs were merged or closed in the last 24 hours.** However, two PRs opened recently represent meaningful in-progress work:

- **[PR #1139](https://github.com/moltis-org/moltis/pull/1139)** — *fix(gateway): don't force-enable matrix-sdk via the metrics feature*
  Addresses a Cargo dependency-selection bug where the gateway's `metrics` feature hard-requires `moltis-matrix` (and transitively the heavyweight `matrix-sdk`) even when the Matrix channel is disabled. Fixing this reduces build times and binary sizes for deployments that don't need Matrix.

- **[PR #1138](https://github.com/moltis-org/moltis/pull/1138)** — *fix(agents): downscale oversized images before they enter model context*
  Tackles a hard failure mode: a single 4032×3024 phone image embedded as inline base64 consumes ~350K tokens — exceeding entire context budgets — and crashes prompt submission because text compaction can't reduce image data. This fix is critical for any user sending photos from mobile devices.

Both PRs are still open and unreviewed as of this digest.

---

## 4. Community Hot Topics

Activity is low, so there is limited signal for "hot topics." The items with the most engagement:

| Item | Type | Comments | Reactions | Focus |
|---|---|---|---|---|
| [Issue #1137](https://github.com/moltis-org/moltis/issues/1137) — Apple Container ID exceeds name limit | Issue (bug) | 1 | 0 | Platform compatibility |
| [PR #1138](https://github.com/moltis-org/moltis/pull/1138) — Image downscaling fix | PR | 0 | 0 | Core UX reliability |
| [PR #1139](https://github.com/moltis-org/moltis/pull/1139) — Metrics feature decoupling | PR | 0 | 0 | Build/dependency hygiene |

**Underlying need**: The open issue and the two PRs together point to a theme of **cross-platform and proxy-environment robustness** — Moltis is being run in constrained/proxy settings (Apple Containers, base64 image passthrough) where assumptions about resource availability don't hold. A fix PR already exists for the image-overflow failure mode.

---

## 5. Bugs & Stability

### Reported Today

| Severity | Issue | Status |
|---|---|---|
| 🟡 Medium | **[#1137 — Apple Container ID exceeds name limit](https://github.com/moltis-org/moltis/issues/1137)** — Docker-style container IDs generated on macOS Apple Container runtime exceed an internal naming/path length limit, causing failures. 1 comment. | Open, no linked PR |

### Fix PRs in Flight (addressing related stability bugs)

- **[PR #1138](https://github.com/moltis-org/moltis/pull/1138)** — Fixes the oversized-image context-overflow crash (high severity for mobile users).
- **[PR #1139](https://github.com/moltis-org/moltis/pull/1139)** — Fixes an unwanted `matrix-sdk` dependency pull-in (medium severity for build/deploy hygiene).

**Assessment**: The project's bug surface is narrow but each issue is sharp — name-length limits and image token explosions are "works on my machine until it doesn't" class failures that erode user trust quickly. Both fix PRs address high-impact pain points.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed in the last 24 hours, and no roadmap issues are visible in this snapshot. If PR #1139 doesn't merge before this digest, I recommend surfacing a separate tracking issue for "feature decoupling" as a possible Roadmap item.

**Predicted near-term direction based on open PRs**:
- **Reduced dependency footprint** — The matrix-sdk decoupling in PR #1139 suggests a push toward a leaner core and opt-in channel modules, possibly a 2.0-era modularization.
- **Image handling hardening** — PR #1138's downscaling logic may expand into a broader "pre-flight input normalization" pipeline (audio chunking, document splitting) in future releases.

---

## 7. User Feedback Summary

**Pain points surfaced in the last 48 hours:**

1. **Apple Container compatibility** — Users running Moltis in Apple's native container runtime hit a hard name-length limit. This indicates Moltis is being adopted by macOS-native developers, whose container IDs follow a different naming convention than Linux Docker. *(Issue [#1137](https://github.com/moltis-org/moltis/issues/1137))*

2. **Mobile image uploads silently failing** — A real use case: a user takes a photo on their phone, sends it to Moltis, and the prompt is rejected on every turn due to token overflow. This is a high-friction experience because the error is opaque from the user's perspective. *(PR [#1138](https://github.com/moltis-org/moltis/pull/1138) addresses this.)*

3. **Unwanted dependency bloat** — Although surfaced via a PR rather than an issue, someone identified that enabling metrics pulls in the full Matrix SDK. This suggests users care about build time and deployment size, pointing to a self-host or CI/CD-heavy user base.

**Overall sentiment**: No positive praise or broad dissatisfaction is visible in this 24-hour window. The tone of filed items is constructive and technically precise.

---

## 8. Backlog Watch

With only 1 issue and 2 PRs visible, there is minimal backlog depth in this snapshot. However:

- **[Issue #1137](https://github.com/moltis-org/moltis/issues/1137)** — Apple Container ID name limit — is a platform-compatibility blocker with **no linked PR** and only 1 comment. For users on macOS with Apple Container runtime, this is a hard blocker on deployment. It deserves a maintainer triage, reproducible test, and at minimum a response time estimate, since it silences a platform without a known workaround.

- **Missing release tracking**: Given the critical fix PRs in flight (#1138, #1139), users will need to know when to expect them in a published version. If a Roadmap or release tracking issue doesn't already exist, one should be opened to communicate timelines — especially for the image-overflow fix, which directly breaks mobile workflows.

---

*Data window: last 24 hours as of 2026-06-29. Digest generated automatically. For corrections, open an issue at the digest repository or tag @moltis-org.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest  
**Date:** 2026-06-29  
**Repository:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

## 1. Today's Overview

Last 24 hours surface a healthy, PR‑driven push on test coverage and a few real‑world channel UX gaps. Issues activity is moderate (5 updated, 4 open) with one recent closed bug already fixed upstream. There were no new releases, but six open PRs signal active development: two first‑time‑contributor features and four Agentscope 2.0‑adapted unit‑test sprint PRs are stacked up, while a follow‑on PR to support `@mention` in proactive sends is on the heels of a matching enhancement request. The closed infinite‑loop bug suggests the runtime is becoming more mature around multi‑Agent coordination.

---

## 2. Releases

No new releases recorded in the observed window.

---

## 3. Project Progress

No PRs were merged/closed in the tracked 24‑hour snapshot (all 6 remain open). Alongside the open PRs, several closed issues point to recent work; the most visible win is the closed **#5204** — an infinite cross‑Agent wake loop in Matrix communications.

---

## 4. Community Hot Topics

- **[#5204] [Bug] 两个 QwenPaw Agent 通过 Matrix 互聊时陷入无限循环** (closed, 3 comments)  
  A concrete cross‑Agent feedback loop on the Matrix channel. Its resolution is a highlight of the period.  
  → [Issue link](https://github.com/agentscope-ai/CoPaw/issues/5204)

- **[#5564] [Feature] Support DingTalk `@mention` in proactive sends** (open, 2 comments) → complemented by **PR #5590**  
  Multi‑Agent coordination in DingTalk groups needs visible `@`-mentions, and the community is already implementing it.  
  → [Issue link](https://github.com/agentscope-ai/CoPaw/issues/5564) | [PR link](https://github.com/agentscope-ai/CoPaw/pull/5590)

- **[#5587] [Bug] Qwen-Image Tool install error** (open, 1 comment) — early report on a fresh version (v1.1.12.post2).  
  → [Issue link](https://github.com/agentscope-ai/CoPaw/issues/5587)

Underlying needs: richer notification semantics in enterprise IM, better stability when mixing tools/images, and test‑backed refactors for the Agentscope 2.0 port.

---

## 5. Bugs & Stability

| Severity | Item (link) | Status | Notes |
|----------|--------------|--------|-------|
| High | [#5204] Matrix infinite wake loop ([link](https://github.com/agentscope-ai/CoPaw/issues/5204)) | Closed 2026-06-28 | Resolved; confirms recent runtime hardening. |
| Medium | [#5587] Qwen-Image Tool install error ([link](https://github.com/agentscope-ai/CoPaw/issues/5587)) | Open, new | Reported on v1.1.12.post2; no linked fix PR yet. Worth triagging quickly as it may affect new‑user setup and tool install flows. |
| Low (quality) | [#5243‑class] Older context/compaction threshold bugs (link not active here but indicates history) | — | PR #5586 may address similar symptoms by respecting runtime model overrides. |

---

## 6. Feature Requests & Roadmap Signals

- **DingTalk `@mention`** ([#5564](https://github.com/agentscope-ai/CoPaw/issues/5564) + PR [#5590](https://github.com/agentscope-ai/CoPaw/pull/5590)) – already in PR and aligned with multi‑Agent visibility needs; likely for next minor.  
- **Continuous multi‑skill selection in `/` menu** ([#5589](https://github.com/agentscope-ai/CoPaw/issues/5589)) – quick UX win; would reduce friction in multi‑skill workflows.  
- **Memory reranker / two‑stage retrieval** ([#5588](https://github.com/agentscope-ai/CoPaw/issues/5588)) – signals an “enterprise memory” maturity path beyond single vector search; may be a candidate for 1.1.13+.  
- **Scroll context manager** ([#5321](https://github.com/agentscope-ai/CoPaw/pull/5321), under review) – durable SQLite history + REPL recall is a major UX/feature addition that could change how long‑running agents manage context.

---

## 7. User Feedback Summary

- Pain points: inability to `@mention` agents in DingTalk groups ([5564](https://github.com/agentscope-ai/CoPaw/issues/5564)), single‑use `/` skill selection interrupting flow ([5589](https://github.com/agentscope-ai/CoPaw/issues/5589)), and classic embedding‑only memory recall satisfaction drop as the memory store grows ([5588](https://github.com/agentscope-ai/CoPaw/issues/5588)).  
- Multi‑Agent collaboration (Matrix and DingTalk) is a dominant use case; stability improvements (closed #5204) are directly felt by early adopters.  
- Tool‑install reliability (Qwen-Image Tool error) will heavily influence first‑run satisfaction and should be fixed promptly.

---

## 8. Backlog Watch

- **PR #5586** – fix(context): prioritize runtime model over static config for compaction threshold ([link](https://github.com/agentscope-ai/CoPaw/pull/5586)) – relevant if compaction bugs reappear; monitor for merge to avoid divergence.  
- **Test‑suite PRs** (#5321, #5423, #5422, #5581) have been open several days and carry “first‑time‑contributor” tags; gentle acceleration on review would keep contributors engaged and improve base quality.  
- **Memory search → reranker PR** is not yet in PR; the absence of a linked PR for [#5588](https://github.com/agentscope-ai/CoPaw/issues/5588) makes this the most strategically significant open request with no visible pickup. Consider prioritizing or documenting a reference design so contributors can pick it up.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-29

---

## 1. Today's Overview

ZeroClaw remains in a high-activity pre-release churn phase with **zero new releases** but intense issue and PR traffic: 50 issues updated in the last 24 hours (40 still open, 10 closed) and 50 PRs touched (47 open, only 3 merged/closed). The open-PR queue is ballooning relative to throughput, suggesting either maintainer bandwidth constraints or that large stacked PRs (#8430, #8420, #8384, #8368) are holding up the pipeline. A clear pattern emerges: the project is deep in a multi-track v0.8.2/v0.8.3/v0.9.0 parallel rollout spanning **WASM plugins, SOP engine hardening, security/auth, CI hardening, and channel expansion**, with multiple governance RFCs (#6808, #6943, #8226, #8396, #8424) steering the architecture. No production release shipped today, so this is pure continuation work from current beta versions (current tag mentioned: **0.8.1**).

---

## 2. Releases

**No new releases in the reporting window.** The latest known release referenced in open issues is **0.8.1**, with v0.8.2 skills and v0.8.3 runtime/WASM/observability lanes actively being tracked but not yet cut. Several CI and packaging fixes landed (#8432 closed, #8275 closed) that likely feed the next release.

---

## 3. Project Progress (Merged / Closed Today)

| # | Item | Type | Significance |
|---|------|------|-------------|
| 1 | **#8446** fix(telegram): stay silent for unauthorized senders in group chats | PR (merged) | Privacy fix — stops the operator-approval pairing prompt from spamming shared Telegram groups and leaking the `bind-telegram` command. Directly addresses group-chat UX pain. |
| 2 | **#8432** bug(ci): package publish tokens fail late when push access is missing | Issue (closed) | CI reliability — prevents Homebrew/Scout publish jobs from proceeding before discovering insufficient token scope. |
| 3 | **#8275** Scoop manifest does not register zerocode | Issue (closed) | Installer fix — `zerocode.exe` is now properly registered as a Scoop shim. |
| 4 | **#8366** Heartbeat engine reads HEARTBEAT.md from data_dir instead of agent workspace | Issue (closed) | Corrects workspace path resolution for the heartbeat worker. |
| 5 | **#6360** Prompt Caching does not work with Telegram | Issue (closed) | Log noise/degraded caching path on Telegram (re-processes full prompt); closed today. |
| 6 | **#7878** add size/date/retention rotation to zeroclaw-log persistence | Issue (closed) | Observability improvement accepted and closed. |
| 7 | **#7996** configurable temporary-file cleanup | Issue (closed as wontfix | Storage-constrained env feature rejected — useful signal on scope discipline. |
| 8 | **#7852** v0.8.2 skills platform tracker | Issue (closed) | Skills lane declares done and closes substantive features/fixes shipped** in the Telegram privacy, CI token validation, and Scoop installer areas. The skills platform tracker closing signals v0.8.2 skills work landing.

---

## 4. Community Hot Topics

Ranked by comment count and community engagement:

1. **#6808** — RFC: Work Lanes, Board Automation, and Label Cleanup (12 comments, RFC rev. 5, accepted, in-progress)
   — Governance automation refactor; aims to reduce maintainer manual routing. Longest-running active RFC (since May 20). Shows demand for **project-operations tooling** and better contributor triage.
   — https://github.com/zeroclaw-labs/zeroclaw/issues/6808

2. **#6360** — [Bug] Prompt Caching does not work with Telegram (4 comments, closed today)
   — LLM prompt cache is bypassed on Telegram channel, causing higher costs and latency. **Provider-channel parity** is a recurring theme.
   — https://github.com/zeroclaw-labs/zeroclaw/issues/6360

3. **#6943** — RFC: Deconflict Plugin System Goals in FND-001 (4 comments, risk:high)
   — Proposes replacing Extism with a **direct wasmtime component-model host** targeting `wasm-wasip2`. Architectural direction-setting; will shape the entire plugin program.
   — https://github.com/zeroclaw-labs/zeroclaw/issues/6943

4. **#2128** — [Bug] Cron and heartbeat delivery still send NO_REPLY sentinel text (4 comments)
   — Long-lived (since Feb 27) bug where scheduled tasks literally deliver "NO_REPLY" to Telegram. **Agent signaling vs. channel delivery** layer conflation.
   — https://github.com/zeroclaw-labs/zeroclaw/issues/2128

5. **#8226** — [RFC]: per-agent custom environment variables configuration (4 comments, risk:high, needs-author-action)
   — Multi-tenancy and per-agent secrets/runtime context. Blocks on author response.
   — https://github.com/zeroclaw-labs/zeroclaw/issues/8226

6. **#8368** — feat(plugins): wasmtime component-model host (risk:high, size:XL, PR open)
   — The concrete implementation PR that RFC #6943 calls for. Supersedes #7928 and #8144. **Largest architectural PR** in the queue.
   — https://github.com/zeroclaw-labs/zeroclaw/pull/8368

7. **#8384** — feat(inkbox): native Inkbox channel (email/SMS/voice/iMessage) with Quickstart (risk:high, size:XL)
   — Major new channel with onboarding wizard. Adds **persistent multi-modal identity** for agents.
   — https://github.com/zeroclaw-labs/zeroclaw/pull/8384

**Underlying needs across hot topics:** architectural clarity (plugin system direction), channel parity (Telegram/Matrix feature gaps), agent-runtime security boundaries, and contributor workflow automation. The project is transitioning from "working prototype" to "production-operable system," and the tension shows in the volume of RFCs vs. concrete deliverables.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Notes |
|----------|-------|--------|---------|-------|
| **High** | **#7733** `mcp_bundles` parsed in Config but never enforced at runtime — per-agent MCP scoping is a silent no-op | Open, in-progress | ⚠️ Not yet | **Security isolation field is a silent no-op.** Maintainers may want to bump severity. |
| **High** | **#7462** 74 test failures on Windows — Unix-only commands, path semantics, console encoding | Open, accepted | ❌ | Windows parity completely broken on master. CI only runs Linux. |
| **Medium** | **#2128** Cron/heartbeat deliver literal "NO_REPLY" sentinel text to Telegram | Open, in-progress | ❌ | 4-month-old bug, still open. |
| **Medium** | **#7800** ZeroCode keybindings misleading or unreachable (macOS) | Open, accepted | ❌ | UX blocker on macOS especially. |
| **Medium** | **#8386** SQLite is default memory backend but quickstart never requires embedding model — hybrid search silently degrades to keyword-only | Open (P1) | ❌ | Silent-quality regression for default users. Onboarding gap. |
| **Medium** | **#8432** CI package publish tokens fail late when push access missing | **Closed** today | ✅ | Fixed. |
| **Low** | **#8275** Scoop manifest missing zerocode shim | **CLOSED** today | ✅ | Fixed. |

**Stability assessment:** Windows test suite is essentially red on master (#7462), which is a notable gap for a project targeting broad personal-AI use. The MCP scoping silent-no-op (#7733) is the most concerning active security-adjacent bug — config suggests isolation that does not exist. Three other medium-severity issues have been open 1–4 months.

---

## 6. Feature Requests & Roadmap Signals

**High-confidence next-version candidates (v0.8.3 / v0.9.0):**

- **WASM/plugin system rewrite** — RFC #6943 + PR #8368. The Extism→wasmtime-component-model migration is both an accepted RFC and has an XL PR open. This will likely anchor v0.9.0's breaking changes.
- **SOP engine hardening** — PRs #8430 (step routing enforcement) and #8420 (step schema enforcement), plus tracker #8288 (SOP to 5/5). Multiple stacked PRs with size:XL suggest this is the most active feature lane right now.
- **Auth, security, gateway refactor** — Tracker #7432 explicitly targets v0.9.0. 111 open items at last refresh. This is the **current top-level version theme**.
- **Matrix streaming drafts** — PR #8443 + newer issue #8442, just landed. Signals active Matrix channel investment.
- **Telegram channel multi-message mode** — Issue #8445 opened today (June 29). The pattern of Telegram feature requests (prompt caching, rich messages #8415, group behavior #8446) suggests a **Telegram lane** is forming.
- **Inkbox channel (email/SMS/voice/iMessage)** — PR #8384, large. If merged, a significant expansion beyond text-chat channels.
- **CI/security hardening** — PRs #8157 (Semgrep + CodeQL), #8056/#8057 (cargo audit, CodeQL, Trivy, SBOM). #8157 still open; #8056/#8057 in-progress. Security gate maturity is clearly a v0.9.0 preparatory track.

**Predicted next release target:** A **v0.8.3** patch/minor collecting CI fixes, Telegram fixes, and possibly Matrix streaming, with **v0.9.0** reserved for the WASM plugin breaking change + SOP + auth refactor bundle.

---

## 7. User Feedback Summary

**Pain themes from live issues:**

- **Channel parity frustration** — Telegram users are repeatedly reporting gaps vs. CLI: prompt caching (#6360), rich message formatting (#8415), single vs multi-message delivery (#8445), and unauthorized-sender spam (#8446, now fixed). Matrix users want better streaming UX (#8442). This is the loudest category.
- **Windows is a second-class platform** — 74 test failures (#7462), console encoding issues (code page 936), Unix-only test commands. Users on Windows hit real bugs that CI never catches.
- **Onboarding silently produces degraded setups** — SQLite memory backend default doesn't prompt for embedding models, so users get keyword-only search and don't know (#8386). Quickstart promises more than it delivers.
- **macOS UX opacity** — ZeroCode help/keybinding discoverability is specifically called out as misleading on macOS (#7800).
- **Storage-constrained deploys** — Temp file accumulation feature request (#7996) was closed `wontfix`. Users on low-end devices may be underserved.
- **Group chat behavior** — Multiple issues around Telegram/WhatsApp group handling (mention gating, passive context #8379, unauthorized senders). Real-world multi-user deployments are surfacing edge cases.

**Sentiment signal:** Issues are specific and technically detailed (good signal quality), but several medium-severity bugs have aged 2–4 months without resolution, which can erode contributor/user trust. The maintainer team (notably `@Audacity88` active across ~12 of the 30 top issues) is shipping fixes on installers/CI but bandwidth appears strained on core runtime bugs.

---

## 8. Backlog Watch — Items Needing Attention

| Priority | Item | Age | Why it matters |
|----------|------|-----|---------------|
| 🔴 | **#2128** Cron/heartbeat "NO_REPLY" sentinel delivery | **~4 months** (Feb 27) | Scheduled-task UX is broken; literal sentinel text delivered to users. P2, accepted, no fix PR. |
| 🔴 | **#6074** audit: track 153 commits lost in bulk revert c3ff635 | **~2 months** (Apr 24) | 153 reviewed/merged commits lost. No recovery PR despite `help wanted` label. Risk of silently missing fixes. |
| 🔴 | **#7733** `mcp_bundles` silent no-op — per-agent MCP scoping | **~2 weeks**, but security-relevant | Config promises runtime isolation that doesn't execute. Accepted, in-progress, but no linked PR visible. |
|  | **#7462** 74 Windows test failures | **~3 weeks** | Windows completely untested in CI. P1 but stuck on accepted with no fix. |
| 🟡 | **#7800** ZeroCode keybinding/help UX (macOS) | **~2 weeks** | User-facing discoverability. Mild but macOS is a major dev platform. |
| 🟡 | **#8386** SQLite default + no embedding prompt | **~2 days**, P1 | Hits every default quickstart user with silent degradation. Quick to fix, high impact. |
|  | **#8226** RFC per-agent env vars / runtime context | **~1 week**, needs-author-action | Author engagement required or RFC stalls. Risk:high, tagged for multi-tenancy. |
|  | **#8396** RFC: Wire-Protocol-First Provider Model | **~2 days**, needs-maintainer-review | Architectural alternative framing for providers; early review could prevent rework. |
| 🟢 | **#8424** RFC: .ignore File Mechanism for Workspace File Protection | **1 day** | Fresh RFC, no comments yet. Workspace security granularity is valuable; early maintainer feedback helps. |
| 🟢 | **#8384** feat(inkbox) native channel + Quickstart (size:XL PR) | **2 days** | Large, risky, multi-component. Needs timely review or it will go stale. |

**Maintainer recommendations:**
1. **Recover or formally close** the 153 lost commits (#6074) — the uncertainty is a liability.
2. **Add a Windows CI job** or at minimum document #7462 as a known gap; 74 failing tests on master undermines release confidence.
3. **Triage the MCP silent-no-op** (#7733) — either fix runtime enforcement or remove the config field to avoid false security expectations.
4. **Fast-pick #8386** (SQLite default + embedding prompt) — high user impact, likely small fix.
5. **Move the stacked SOP PRs** (#8430, #8420) and **#8368 (wasmtime)** toward review or merge; they are high-risk and long-lived, and other work likely depends on them.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*