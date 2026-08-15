# OpenClaw Ecosystem Digest 2026-08-15

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-15 00:52 UTC

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

# OpenClaw Project Digest — 2026-08-15

## 1. Today's Overview
OpenClaw shows **very high activity** with 500 issues and 500 PRs updated in the last 24 hours (488 issues open, 12 closed; 404 PRs open, 96 merged/closed). No new release was published today. The project is in active maintenance mode with significant community engagement around critical stability bugs (memory leaks, silent message loss, CPU stalls) and long-standing feature requests (dynamic model discovery, memory trust tagging, cost budgets). The volume of P0/P1 issues with live-repro tags indicates operators are hitting production blockers.

---

## 2. Releases
**No new releases today.** The latest stable channel remains `2026.7.x`; beta channel at `2026.7.2-beta.7`. Several issues (#48920, #123799) note documentation/releases drift — live docs show features not yet in stable.

---

## 3. Project Progress (Merged/Closed PRs Today)
96 PRs merged/closed in the last 24h. Notable closures:

| PR | Area | Summary |
|----|------|---------|
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | security, CLI, gateway | **feat(security):** require acknowledgement for install policy warnings — adds `warn` verdict to `security.installPolicy` with interactive CLI confirmation |
| [#123826](https://github.com/openclaw/openclaw/pull/123826) | gateway, CLI | **fix(status):** keep multi-agent diagnostics owner-safe — fixes `openclaw status` failure for operators with explicit rosters |
| [#123813](https://github.com/openclaw/openclaw/pull/123813) | web-ui | **fix(ui):** page activity indicator matches session rows — aligns activity dot positioning |
| [#123869](https://github.com/openclaw/openclaw/pull/123869) | gateway | **fix(gateway):** keep node worker outcomes consistent under load — prevents false reconciliation failures at launch capacity |

*Most merged PRs are UI polish, security hardening, and gateway reliability fixes. No major feature landings today.*

---

## 4. Community Hot Topics (Most Active Issues)
Ranked by comment count (indicates discussion depth / operator pain):

| Issue | Comments | Priority | Core Need |
|-------|----------|----------|-----------|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | 94 | P0 | **Silent reply failures persist** after #116277 fix — monitoring cron still logs new occurrences; no queued reply payload |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 51 | P2 | **Memory Trust Tagging by Source** — prevent memory poisoning from untrusted content (web, third-party skills) |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 25 | P2 | **Per-agent cost budget enforcement** at gateway level — daily/monthly caps before model dispatch |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 24 | P0 | **Gateway memory leak** — RSS 350 MB → 15.5 GB over 2–3 days, OOM kills, `launchd-handoff` restart loops |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | 20 | P1 | **Codex PreToolUse hook spawns CPU-bound `openclaw-hooks` processes** — stalls gateway RPC |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | 19 | P1 | **Steer mode doesn't inject messages mid-turn** — queued until turn completes (regression from `KeyedAsyncQueue`) |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | 19 | P1 | **Cron agent turns stall on DeepSeek** — `[cron:<jobId>]` prefix deprioritized by DeepSeek edge |

**Pattern:** Operators are hitting **silent data loss** (replies not delivered, messages dropped, cron no-ops) and **resource exhaustion** (memory, CPU) in production. Trust/safety (memory poisoning, cost control) is a recurring theme.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **P0 — Memory Leak / OOM** | [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway RSS grows to 15.5 GB, OOM kills | Open, needs live repro | No |
| **P0 — Data Loss** | [#119270](https://github.com/openclaw/openclaw/issues/119270) File tools strip leading `@` from dest paths → wrong file overwritten/deleted | Open, source repro | No |
| **P0 — Silent Failure** | [#121058](https://github.com/openclaw/openclaw/issues/121058) Silent reply failures recur; no queued payload | Open, 94 comments | No |
| **P1 — CPU Stall** | [#91009](https://github.com/openclaw/openclaw/issues/91009) Codex hook relay spawns 100% CPU processes, stalls gateway RPC | Open, needs live repro | No |
| **P1 — Heap Growth** | [#87109](https://github.com/openclaw/openclaw/issues/87109) Gateway heap 558 MB → 1073 MB+ at idle; cron jobs silently fail under pressure | Open, needs live repro | No |
| **P1 — Session Hang** | [#47975](https://github.com/openclaw/openclaw/issues/47975) Subagent sessions persist after completion; main session unresponsive | Open | No |
| **P1 — Message Loss** | [#92186](https://github.com/openclaw/openclaw/issues/92186) Foreground reply fence cancels delivery of earlier concurrent group replies (WhatsApp) | Open | No |
| **P1 — Silent Cron No-op** | [#113181](https://github.com/openclaw/openclaw/issues/113181) `delivery.mode="none"` + isolated agent → `status=ok, delivered=false`, no error | Open | No |
| **P1 — Image Attachments** | [#123273](https://github.com/openclaw/openclaw/issues/123273) Images fail for named agents — "failed to hydrate structured image attachment" | Open | No |
| **P2 — Config/Upgrade** | [#123073](https://github.com/openclaw/openclaw/issues/123073) `openclaw update` fails on dev channel: `EUNSUPPORTEDPROTOCOL workspace:*` (npm vs pnpm) | Open, fix-shape-clear | No |

**Critical cluster:** Memory leaks (#91588, #87109), silent message loss (#121058, #119270, #92186, #113181), and CPU stalls (#91009) are **production blockers** with multiple operators affected. Most lack fix PRs.

---

## 6. Feature Requests & Roadmap Signals
High-engagement requests likely to shape next versions:

| Issue | Priority | Signal |
|-------|----------|--------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source | P2 | **Security hardening** — 51 comments, needs security/product review; memory poisoning is a real attack vector |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) Per-agent cost budget enforcement | P2 | **Operational control** — linked PR open, gateway-level caps before dispatch |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) Fully dynamic model discovery (OpenRouter+) | P2 | **Provider agility** — static catalog is a pain point; 10 comments, needs product decision |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) Agent-triggered context compaction (self-compact tool) | P2 | **Agent autonomy** — filed by an agent (!); 8 comments, diamond lobster rating |
| [#54373](https://github.com/openclaw/openclaw/issues/54373) Context Provenance: source/volatility metadata | P3 | **Observability** — agents can't distinguish injected context age/source; RFC stage |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) Per-model usage logging for cost tracking | P2 | **FinOps** — 8 comments, off-meta tidepool; session JSONL has data but no aggregation |
| [#73537](https://github.com/openclaw/openclaw/issues/73537) Production-readiness stability label for releases | P2 | **Release trust** — 8 comments; users want clear LTS/stable markers |

**Prediction:** Next release cycle will likely include **cost budgets (#42475)**, **dynamic model discovery (#10687)**, and **memory trust tagging (#7707)** — all have linked PRs or active discussion. Production stability labels (#73537) may arrive as process change.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Theme | Representative Issues | User Sentiment |
|-------|----------------------|----------------|
| **Silent failures / no observability** | #121058, #113181, #92186, #86012 (LINE), #50093 (WhatsApp backfill) | 😡 **Frustrated** — "status=ok but delivered=false", "silently lost", "no error thrown" |
| **Resource exhaustion in prod** | #91588, #87109, #91009, #86119 (orphaned workers) | 😰 **Anxious** — OOM kills, CPU stalls, heap growth require daily restarts |
| **Message/attachment loss** | #120735 (Telegram stickers), #123273 (images for named agents), #48786 (Feishu @ placeholders) | 😞 **Disappointed** — core channel features broken |
| **Upgrade/config friction** | #123073 (dev update fails), #53628 (XDG_CONFIG_HOME ignored), #52186 (TTS voice mismatch) | 😐 **Annoyed** — "worked before, now fails", env vars not respected |
| **UI/UX density** | #75947 (UI redesign), #71142 (5 MB upload limit), #95566 (reply ordering/duplication) | 😕 **Struggling** — "hard to navigate", "feels like AI-generated config" |
| **Positive signal** | #73537 (thank you for family/business assistant) | 🙂 **Loyal** — "genuinely part of daily workflow" |

**Key use cases in the wild:** Family/business assistant (Telegram, cron, Home Assistant), multi-agent coding (WebChat, ACP), WhatsApp/Feishu/LINE/Matrix bots, k3s/Docker deployments.

---

## 8. Backlog Watch (Stale Important Items Needing Maintainer Attention)

| Issue | Age | Priority | Why It Matters |
|-------|-----|----------|----------------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging | 6+ months | P2 | Security architecture gap; 51 comments; needs security/product review |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) Agent self-compact tool | 6+ months | P2 | Agent autonomy; filed by agent; diamond lobster rating |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) Dynamic model discovery | 6+ months | P2 | Provider lock-in; static catalog blocks OpenRouter/fast-moving catalogs |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) Per-model usage logging | 6+ months | P2 | Cost visibility; data exists but no aggregation |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) Live docs ahead of release | 5 months | P0 (ux-release-blocker) | `IsolatedSessions` in docs but not in 2026.3.13; erodes trust |
| [#54373](https://github.com/openclaw/openclaw/issues/54373) Context Provenance RFC | 5 months | P3 | Foundational for memory/rag trust; needs design decision |
| [#73537](https://github.com/openclaw/openclaw/issues/73537) Stability labels for releases | 4 months | P2 | Users explicitly ask for production-readiness markers |

**PRs waiting on author/maintainer (high merge-risk):**
- [#123222](https://github.com/openclaw/openclaw/pull/123222) reject unbound legacy session keys (gold shrimp, security-boundary)
- [#123899](https://github.com/openclaw/openclaw/pull/123899) preserve explicit agent ownership across UI/CLI (gold shrimp, compatibility)
- [#123682](https://github.com/openclaw/openclaw/pull/123682) consolidate sidebar issues (silver shellfish, compatibility)
- [#112811](https://github.com/openclaw/openclaw/pull/112811) Microsoft Teams multi-bot support (platinum hermit, showcase)

---

## Health Indicator Summary
| Dimension | Signal |
|-----------|--------|
| **Velocity** | 🟢 High (500 PRs/24h, 96 merged) |
| **Stability** | 🔴 Critical — multiple P0 memory leaks, silent data loss, no fixes merged today |
| **Security** | 🟡 Active — install policy warnings (#116489), memory trust tagging (#7707) in discussion |
| **Community**

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-08-15)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows a **bimodal distribution**: a top tier of 5–6 projects (OpenClaw, IronClaw, Hermes Agent, NanoBot, CoPaw, LobsterAI) operating at **very high velocity** (50–500+ PR/issue updates/day) with dedicated teams, while the remaining half are in **low-activity maintenance or design phases**. No project cut a release today except LobsterAI (patch 2026.8.14), indicating a **feature-freeze/stabilization window** across the board. Critical production blockers—memory leaks, silent data loss, Windows parity, provider API compatibility—cluster in the top-tier projects, revealing that **operational maturity** is the shared frontier. Architectural RFCs (ZeroClaw, Hermes, IronClaw) signal a shift from feature accretion to **runtime ownership, session/attachment unification, and pluggable auth** as the next abstraction layer.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed PRs | Release Status | Health Score |
|---------|----------------------|-------------------|-------------------|----------------|--------------|
| **OpenClaw** | 500 (488 open) | 500 (404 open) | 96 | Stable `2026.7.x`, Beta `2026.7.2-beta.7` | 🟢 Velocity / 🔴 Stability / 🟡 Security |
| **IronClaw** | 25 | 46 | 23 | v1.2.0 merged to main (Aug 11) | 🟢 Very High Velocity |
| **Hermes Agent** | 50 | 50 | 16 | Last v0.20.0 | 🟢 High Velocity, Stabilizing |
| **NanoBot** | 3 resolved | 22 | 8 | None today | 🟢 Rapid Bug Turnaround / ⚠️ Conflicts / ⚠️ Windows |
| **CoPaw** | 50 | 41 | 15 | v2.1.0 beta 4 | 🟢 High Maintenance / ⚠️ Desktop Gaps |
| **LobsterAI** | 2 | 27 | 22 | **2026.8.14 released yesterday** | 🟢 Strong, Rapid Iteration |
| **ZeroClaw** | 33 | 50 | 3 | v0.8.5 target Aug 30 | 🟡 Moderate (Review Bottleneck) |
| **PicoClaw** | 3 | 9 | 5 | Nightly only | 🟡 Caution (Critical MCP Bug) |
| **Moltis** | 0 | 0 | 0 | None | 🔴 Low Velocity |
| **NullClaw** | 0 | 1 | 1 | None | 🔴 Minimal Activity |
| **TinyClaw** | 0 | 0 | 0 | None | ⚫ No Activity |
| **ZeptoClaw** | 0 | 0 | 0 | None | ⚫ No Activity |
| **NanoClaw** | — | — | — | — | ❓ Data Unavailable |

---

## 3. OpenClaw's Position

**Advantages vs Peers**
- **Scale of Engagement**: 500+ daily issue/PR updates dwarf all peers (next: ZeroClaw 83, IronClaw 71). This reflects the largest operator base hitting production workloads.
- **Multi-Channel Maturity**: Native Telegram/WhatsApp/Feishu/LINE/Matrix/Discord/Slack support with real-world deployments (k3s, Docker, Home Assistant)—most peers cover 1–3 channels.
- **Security Hardening in Flight**: Install policy warnings (#116489), memory trust tagging RFC (#7707), and legacy session key rejection (#123222) show proactive supply-chain thinking absent in smaller projects.

**Technical Approach Differences**
- **Gateway-Centric Architecture**: Central gateway manages multi-agent orchestration, memory, and channel adapters—contrast with NanoBot/Hermes/IronClaw’s more decentralized runtime models.
- **Operator-First Observability**: Issues like silent reply failures (#121058), cost budgets (#42475), and per-model logging (#13219) reflect SaaS-grade operational demands; peers focus on UX/devX.
- **Static Model Catalog → Dynamic Discovery**: OpenClaw’s #10687 (dynamic OpenRouter+ discovery) is a recognized gap; NanoBot and ZeroClaw already ship provider-agnostic model resolution.

**Community Size Comparison**
- **OpenClaw**: Largest by issue volume, comment depth (94 on #121058), and production deployments cited.
- **Hermes/IronClaw/NanoBot**: Strong core teams (10–20 regular contributors) but narrower operator footprint.
- **CoPaw/LobsterAI**: Active Chinese-language communities; LobsterAI shows explicit "v4pro" demand (#2489).
- **ZeroClaw**: High RFC participation (20+ comments on shell safety) but fewer production bug reports.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Memory Safety & Trust** | OpenClaw (#7707, #91588), Hermes (#85622, #85825), ZeroClaw (#9486), PicoClaw (#3279) | Trust tagging by source, CRLF-safe persistence, leak detection, poisoning prevention |
| **Windows Parity** | NanoBot (#5382), Hermes (#83683, #86223), ZeroClaw (#7462), CoPaw (#3045, #6197) | File locking fixes, daemon mode, GPU probe hangs, path/encoding normalization |
| **Provider API Compatibility** | CoPaw (#3002, #944), Hermes (#30449), LobsterAI (#1153), ZeroClaw (#8603) | OpenAI Responses API, Azure gateways, Gemini URL handling, OpenAI-compatible profile |
| **Silent Failure Elimination** | OpenClaw (#121058, #113181), Hermes (#86482), CoPaw (#7011), ZeroClaw (#9421) | Delivery acknowledgments, cron/job outcome visibility, terminal response classification |
| **Cost & Resource Control** | OpenClaw (#42475, #13219), ZeroClaw (eval harness #7065), IronClaw (per-user model #7183) | Per-agent budgets, usage aggregation, model pinning, evaluation benchmarks |
| **Pluggable Auth & Multi-Tenancy** | ZeroClaw (#7141), Hermes (#34352), IronClaw (#7665), CoPaw (implied) | OIDC/canonical principals, hook integration for tenant isolation, origin-scoped OAuth |
| **Session/Attachment Unification** | ZeroClaw (#9487, #9488), Hermes (#85834), IronClaw (#7658), NanoBot (#5358) | Runtime-owned sessions, cross-channel attachment consistency, session collaboration |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | Hermes Agent | NanoBot | ZeroClaw | CoPaw | LobsterAI | PicoClaw |
|-----------|----------|----------|--------------|---------|----------|-------|-----------|----------|
| **Target User** | Operators running multi-channel bots in prod | Teams needing scheduled automations & per-user model control | Researchers/prod teams wanting architectural purity | Developers wanting TypeScript TUI & WebUI polish | Architects designing next-gen runtime primitives | AgentScope ecosystem users, desktop-first | Chinese enterprise/team edition users | Lightweight/embedded deployments (DingTalk, WeChat) |
| **Architecture** | Gateway-centralized, multi-agent orchestration | Extension/runtime split, unbound-turns rewrite | God-file sharding, hook-first runtime | Python gateway + TypeScript CLI/WebUI | RFC-driven, runtime-owned sessions, transport adapters | AgentScope-integrated, plugin channels | Fork of OpenClaw(?) with Team Edition, sidebar UX | Single-binary Go, channel adapters as plugins |
| **Feature Focus** | Stability, cost budgets, memory trust, dynamic models | Automation reliability, per-user models, pluggable memory | Multi-tenancy, Discord Omniscience, skills v2 | Native TUI, MCP v2, session collaboration, i18n | OpenAI API compat, shell safety, eval harness, auth | Auto-update, daemon mode, Responses API, Skills Hub | Sidebar UX, cowork sessions, ad monetization, font/i18n | MCP resilience, tool-call hygiene, TTS providers |
| **Release Cadence** | Channel-based (stable/beta), docs drift issues | v1.2.0 merged, v1.3.0 targeting automation | v0.20.0, Discord campaign slicing | No recent release, major CLI rewrite in flight | v0.8.5 stabilization (Aug 30 target) | v2.1.0 beta, desktop gaps block stable | **Patch yesterday (2026.8.14)**, v4pro demanded | Nightly, no versioned releases |
| **Community Language** | English-dominant, global operators | English, NearAI team-driven | English, NousResearch team-driven | English/Chinese (HKUDS), strong TUI advocates | English, RFC-heavy design discourse | Chinese/English, AgentScope aligned | **Chinese-dominant**, NetEase Youdao backed | Chinese-dominant, Sipeed hardware aligned |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (High Velocity + Feature Shipping)** | **LobsterAI**, **NanoBot**, **IronClaw** | LobsterAI: 22 merges + patch release in 24h; NanoBot: same-day bug fix + TUI/MCP v2 PRs; IronClaw: 23 merges incl. XL architectural lands |
| **Stabilizing / Production Hardening** | **OpenClaw**, **Hermes Agent**, **CoPaw** | OpenClaw: P0 memory leaks/data loss block releases; Hermes: Windows desktop P1s + god-file sharding complete; CoPaw: 53 items resolved but desktop/server gaps persist |
| **Design-Phase / Architectural Investment** | **ZeroClaw**, **Moltis** | ZeroClaw: 15+ RFCs, maintainer review bottleneck; Moltis: 2 deep-integration PRs, zero community noise |
| **Maintenance / Low Velocity** | **PicoClaw**, **NullClaw** | PicoClaw: critical MCP fix ready but stale PRs; NullClaw: single config PR |
| **Dormant** | **TinyClaw**, **ZeptoClaw**, **NanoClaw(?)** | No 24h activity; NanoClaw digest failed |

**Key Insight**: The ecosystem splits between **projects shipping user-visible features weekly** (LobsterAI, NanoBot, IronClaw) and **projects fighting production fires** (OpenClaw, Hermes, CoPaw). ZeroClaw is uniquely investing in **governance-heavy design** before implementation.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence Across Projects | Strategic Value |
|-------|--------------------------|-----------------|
| **Runtime-Owned Sessions > Channel-Owned** | ZeroClaw (#9487), Hermes (profile routing #85834), IronClaw (Telegram 2FA #7658), NanoBot (session collaboration #5358) | **Build session lifecycle in the runtime**; channels become thin transport adapters. Enables true multi-channel continuity. |
| **OpenAI-Compatible API as Integration Standard** | ZeroClaw (#8603), CoPaw (#3002, #944), Hermes (#30449), LobsterAI (#1153) | **Expose Chat Completions profile** to unlock Open WebUI, LobeChat, Continue, Aider, LangChain ecosystems instantly. |
| **Structured Automation Reliability > Ad-Hoc Cron** | IronClaw (#6879 epic + 6 sub-issues), OpenClaw (#113181, #121953), ZeroClaw (eval harness #7065) | **Deterministic preflight, model pinning, semantic outcome persistence** are replacing "schedule and pray." |
| **Memory as a Security Boundary** | OpenClaw (#7707 trust tagging), Hermes (#85622 contract violation), ZeroClaw (#9486 leak detector), PicoClaw (#3279 tool-call leakage) | **Provenance, volatility, and source tagging** for every memory write—agents must distinguish injected vs. derived vs. user context. |
| **Windows as a First-Class Target, Not Afterthought** | NanoBot (#5382), Hermes (#83683, #86223), ZeroClaw (#7462 74 failures), CoPaw (#3045, #6197) | **CI must run Windows**; file locking, console encoding, GPU probes, daemon mode are table stakes for desktop adoption. |
| **Pluggable Auth / Canonical Principals** | ZeroClaw (#7141 Rev 8), Hermes (#34352 multi-tenancy), IronClaw (#7665 origin-scoped OAuth) | **Identity abstraction layer** enabling SSO, role-based Discord/Slack, and tenant isolation without forking core. |
| **Agent Evaluation as CI Gate** | ZeroClaw (#7065 `zeroclaw eval`), IronClaw (perf harness #7592), OpenClaw (#13219 usage logging) | **Replay + live eval with LLM-as-judge** becoming standard for model/prompt regression testing. |
| **Desktop UX Parity with Web** | NanoBot (#4329

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-15

## 1. Today's Overview
NanoBot shows **high velocity** with 22 PRs updated and 3 issues resolved in the last 24 hours. The project is in active feature development across WebUI, provider integrations, session management, and type-safety hardening. Eight PRs were merged/closed today, delivering bug fixes for Anthropic streaming, session persistence, and WebUI polish, while 14 PRs remain open spanning major refactors (TypeScript CLI, MCP SDK v2 migration), WebUI enhancements (drag-and-drop, localization, collaboration), and stability fixes (Windows file locking, stale saves). No new release was published.

---

## 2. Releases
**No new releases** published today.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5392](https://github.com/HKUDS/nanobot/pull/5392) | **Bug Fix (P2)** | Fixed `NANOBOT_STREAM_IDLE_TIMEOUT_S` incorrectly acting as total timeout on Anthropic no-callback stream path; now treats it as inactivity-only. | **High** — Prevents killing long but active Anthropic generations (>90s). |
| [#5395](https://github.com/HKUDS/nanobot/pull/5395) | **Feature (WebUI)** | Refined conversation groups: consistent terminology, full localization, drag-to-group, simplified delete confirmation, shared shape scale. | **Medium** — Improves sidebar UX and group management. |
| [#5393](https://github.com/HKUDS/nanobot/pull/5393) | **Feature (WebUI)** | Polished sidebar hierarchy, connector lines, flatter tabs, folder presentation, session transitions (split from #5358). | **Medium** — UI-only improvements for session navigation. |
| [#5390](https://github.com/HKUDS/nanobot/pull/5390) | **Chore/Feature** | Agent/knowledge graph work (details sparse). | **Unknown** — Early-stage exploration. |
| [#4689](https://github.com/HKUDS/nanobot/pull/4689) | **Feature (Provider)** | OAuth status/expiry warnings across CLI, WebUI, runtime — **closed as invalid**. | **Low** — Approach rejected; may resurface later. |
| [#5018](https://github.com/HKUDS/nanobot/pull/5018) | **Feature (Skills)** | Explicit context loading for skills — **closed with conflicts**. | **Medium** — Blocked; needs rebase/redesign. |

**Closed Issues:**
- [#5391](https://github.com/HKUDS/nanobot/issues/5391) — Anthropic stream timeout bug (fixed by #5392)
- [#5378](https://github.com/HKUDS/nanobot/issues/5378) — Session mutation before archive callback (fix likely in #5271 or follow-up)

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#4329](https://github.com/HKUDS/nanobot/pull/4329) — Native TypeScript Terminal UI | Open since **2026-06-13**, updated today; cross-platform TUI replacing Python CLI | **Strong demand for a modern, performant terminal experience** — preserves Python gateway as sole logic holder. |
| [#5179](https://github.com/HKUDS/nanobot/pull/5179) — MCP SDK v2 Migration | Open since 2026-07-30, P1 priority, legacy SSE/streamable HTTP compat | **Critical infrastructure upgrade** — unblocks modern MCP servers while maintaining backward compatibility. |
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) — Session Collaboration via Mentions | Open, conflict flag; stable `@name` identity, composer mention picker | **Multi-user/session workflows** — users want to reference and collaborate across sessions. |
| [#5309](https://github.com/HKUDS/nanobot/pull/5309) — Marketplace Skills Shadow Builtins | Open, P2; fixes install-button UX for overridden skills | **Skill ecosystem maturity** — workspace skills should seamlessly replace bundled ones. |

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue/PR | Status | Fix PR |
|----------|----------|--------|--------|
| **Critical** | [#5378](https://github.com/HKUDS/nanobot/issues/5378) — Session mutated before archive callback; overflow lost on failure | **Closed** (2026-08-14) | Likely addressed by [#5271](https://github.com/HKUDS/nanobot/pull/5271) (stale save prevention) |
| **High** | [#5391](https://github.com/HKUDS/nanobot/issues/5391) — Anthropic idle timeout kills active long generations | **Closed** (2026-08-14) | Fixed by [#5392](https://github.com/HKUDS/nanobot/pull/5392) ✅ |
| **High** | [#5382](https://github.com/HKUDS/nanobot/pull/5382) — `os.replace()` crashes gateway on transient Windows `PermissionError` (heartbeat cron) | **Open** (P2) | PR #5382 adds retry logic — **needs review/merge** |
| **Medium** | [#5271](https://github.com/HKUDS/nanobot/pull/5271) — Stale background task saves overwrite session after `/new` | **Open** (P0) | PR #5271 serializes `/new` with compaction, rejects invalidated saves — **high priority** |
| **Medium** | [#5152](https://github.com/HKUDS/nanobot/pull/5152) — Subagent partial completion not marked; model infers unfinished results | **Open** (regression) | PR #5152 adds `subagent_remaining_count` metadata — **needs merge** |

---

## 6. Feature Requests & Roadmap Signals

| Feature | Signal Strength | Likely Next Version? |
|---------|-----------------|----------------------|
| **TypeScript/OpenTUI Native CLI** ([#4329](https://github.com/HKUDS/nanobot/pull/4329)) | ★★★★★ Long-running, cross-team priority | **Yes** — major milestone |
| **MCP SDK v2 Migration** ([#5179](https://github.com/HKUDS/nanobot/pull/5179)) | ★★★★★ P1, legacy compat required | **Yes** — infrastructure prerequisite |
| **WebUI Session Collaboration (Mentions)** ([#5358](https://github.com/HKUDS/nanobot/pull/5358)) | ★★★★☆ Conflict flag, UX design done | **Likely** — split from #5358, UI pieces in #5393 |
| **Drag-and-Drop Session Organization** ([#5389](https://github.com/HKUDS/nanobot/pull/5389)) | ★★★★☆ New, conflict flag | **Likely** — builds on #5393 sidebar polish |
| **Agent Activity Localization (10 locales)** ([#5367](https://github.com/HKUDS/nanobot/pull/5367)) | ★★★☆☆ P2, test included | **Yes** — incremental i18n |
| **Skill Marketplace Shadowing** ([#5309](https://github.com/HKUDS/nanobot/pull/5309)) | ★★★☆☆ P2, fixes install UX | **Yes** — skill ecosystem polish |
| **Weather Skill Example** ([#4145](https://github.com/HKUDS/nanobot/pull/4145)) | ★★☆☆☆ Old (Jun), tests added | **Maybe** — documentation/example |

---

## 7. User Feedback Summary

| Pain Point / Use Case | Source | Sentiment |
|------------------------|--------|-----------|
| **Anthropic streams >90s killed incorrectly** | [#5391](https://github.com/HKUDS/nanobot/issues/5391) | 😡 Frustration — fixed same day |
| **Session data loss on archive failure** | [#5378](https://github.com/HKUDS/nanobot/issues/5378) | 😟 Anxiety — mutation before callback is unsafe |
| **Windows gateway crashes on session save** | [#5382](https://github.com/HKUDS/nanobot/pull/5382) | 😤 Blocker — transient `PermissionError` crashes process |
| **Marketplace install button broken for overridden skills** | [#5309](https://github.com/HKUDS/nanobot/pull/5309) | 😕 Confusion — UX inconsistency |
| **Subagent results appear incomplete** | [#5152](https://github.com/HKUDS/nanobot/pull/5152) | 🤔 Uncertainty — model hallucinates completion |
| **Desire for native, fast terminal UI** | [#4329](https://github.com/HKUDS/nanobot/pull/4329) | 😍 Excitement — long-requested, cross-platform |
| **Need to reference other sessions in chat** | [#5358](https://github.com/HKUDS/nanobot/pull/5358) | 💡 Workflow gap — collaboration primitive missing |

---

## 8. Backlog Watch — Stale High-Value Items Needing Maintainer Attention

| Item | Age | Priority | Why It Matters |
|------|-----|----------|----------------|
| [#4329](https://github.com/HKUDS/nanobot/pull/4329) — TypeScript Terminal UI | **63 days** | P1 (implied) | Flagship UX rewrite; blocks modern CLI experience; two leads (pancacake, chengyongru) invested |
| [#5179](https://github.com/HKUDS/nanobot/pull/5179) — MCP SDK v2 Migration | **16 days** | **P1** | Security (SSRF, DNS pinning), compatibility, future-proofing; high complexity |
| [#5271](https://github.com/HKUDS/nanobot/pull/5271) — Stale Save Prevention | **9 days** | **P0** | Data integrity; session corruption risk on `/new`; test included |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) — Subagent Partial Results | **18 days** | Regression | Model behavior correctness; affects automation reliability |
| [#5382](https://github.com/HKUDS/nanobot/pull/5382) — Windows `os.replace()` Retry | **2 days** | P2 | Production crash on Windows; simple fix (retry), high impact |
| [#5018](https://github.com/HKUDS/nanobot/pull/5018) — Explicit Skill Context Loading | **25 days** | Conflict | Skill system extensibility; closed with conflicts, needs redesign |

---

**Project Health Indicators:**
- ✅ **Rapid bug turnaround** (Anthropic timeout fixed same day)
- ✅ **Strong test culture** (most PRs include tests)
- ⚠️ **Conflict-heavy PRs** (5 open PRs flagged `conflict`) — integration bottlenecks
- ⚠️ **Windows stability gaps** (file locking, crashes) — needs dedicated attention
- 🚀 **Major UX investments** (TypeScript CLI, WebUI collaboration, localization) — vNext shaping up

*Data sourced from GitHub API; timestamps UTC. Links point to live items on github.com/HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-15

## 1. Today's Overview
Hermes Agent shows **high velocity with 100 total issue/PR updates in 24 hours** (50 issues, 50 PRs), signaling an active development cycle. The project is in a **stabilization and platform-hardening phase**: a major architectural refactor ("All Gods Must Die") just completed (#78647), while critical Windows desktop regressions (#83683, #86223), memory provider bugs (#85622, #85825), and multi-tenancy gaps (#34352) dominate open issues. The Discord "Omniscience" campaign (#79564) is shipping incremental feature slices with passing test suites. No new release was cut today.

## 2. Releases
**No new releases today.** The last version appears to be v0.20.0 (referenced in #79625, #83683).

## 3. Project Progress — Merged/Closed Today (16 PRs)
| PR | Type | Summary | Link |
|----|------|---------|------|
| #67739 | Test Fix | Fixed `test_execution_flag_detection.py` on macOS (3 Darwin failures) | [#67739](https://github.com/NousResearch/hermes-agent/pull/67739) |
| #67710 | Test Fix | Fixed `test_live_system_guard_self_test.py` on macOS (4 failing) | [#67710](https://github.com/NousResearch/hermes-agent/pull/67710) |
| #67708 | Test Fix | Fixed `test_shutdown_forensics.py` on macOS (1 failing) | [#67708](https://github.com/NousResearch/hermes-agent/pull/67708) |
| #67703 | Test Fix | Fixed `test_gateway_wsl.py` on macOS | [#67703](https://github.com/NousResearch/hermes-agent/pull/67703) |
| #67700 | Test Fix | Fixed `test_systemd_notify.py` on macOS (platform guard) | [#67700](https://github.com/NousResearch/hermes-agent/pull/67700) |
| #65840 | Bug Fix | Desktop: preserve copy image for large media | [#65840](https://github.com/NousResearch/hermes-agent/pull/65840) |
| #65839 | Feature | CLI: let ESC interrupt running responses | [#65839](https://github.com/NousResearch/hermes-agent/pull/65839) |
| #65818 | Bug Fix | ACP: drain late assistant chunks after Copilot prompt result | [#65818](https://github.com/NousResearch/hermes-agent/pull/65818) |
| #65803 | Bug Fix | Agent: steer background review to permitted tools | [#65803](https://github.com/NousResearch/hermes-agent/pull/65803) |
| #65800 | Bug Fix | Agent: load gateway AGENTS.md from HERMES_HOME fallback | [#65800](https://github.com/NousResearch/hermes-agent/pull/65800) |
| #86329 | Test Fix | Error classifier: detect upstream provider 403 errors | [#86329](https://github.com/NousResearch/hermes-agent/pull/86329) |
| #85825 | Bug Fix (Closed Issue) | Memory: CRLF line-ending overwrite on Windows (P0) | [#85825](https://github.com/NousResearch/hermes-agent/issues/85825) |
| #78647 | Epic Complete | **All Gods Must Die**: 20/20 god-files sharded (refactor) | [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) |

**Notable**: The test-fix batch (6 PRs) appears to be a coordinated macOS CI stabilization effort. The god-file sharding epic (#78647) is now **complete** after 11 days and 76 comments.

## 4. Community Hot Topics (Most Comments/Reactions)

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | Epic (Closed) | 76 | 0 | **Architectural debt paydown** — repo-wide god-file sharding mandate ("never reverted") |
| [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) | Feature | 31 | 3 | **Multi-tenancy** — memory ops bypass hooks, making tenant isolation impossible without forking core; production workaround exists |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Bug (Auto) | 31 | 0 | **Skills index freshness** — automated probe detects 29.8h staleness (limit 26h); cron/rebuild pipeline needs attention |
| [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) | Bug (P1) | 27 | 0 | **Windows desktop regression** — restart kills gateway, never relaunches; WeChat/QQ/Telegram go silent |
| [#86223](https://github.com/NousResearch/hermes-agent/issues/86223) | Bug (P1) | 6 | 0 | **Windows desktop broken after 2 updates** — backend exits code 1, WinError 32 lock chain, update pipeline falls back through git |
| [#67798](https://github.com/NousResearch/hermes-agent/issues/67798) | Feature | 10 | 0 | **Lifecycle hooks as shared runtime contract** — currently gateway-owned, needed across CLI/TUI/cron/desktop/plugins |
| [#85622](https://github.com/NousResearch/hermes-agent/issues/85622) | Bug (P3) | 10 | 0 | **External memory provider contract violation** — suppresses built-in MEMORY.md/USER.md injection on new chat |

**Analysis**: The top signals are **platform stability (Windows desktop)**, **architectural consistency (hooks, memory contract)**, and **multi-tenancy readiness** — all blockers for enterprise/team adoption.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P1** | [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) | Desktop restart reaps live gateway, never relaunches (Windows) — messaging silent | ❌ |
| **P1** | [#86223](https://github.com/NousResearch/hermes-agent/issues/86223) | Desktop client broken after 2 updates (Windows) — backend exit 1, WinError 32 lock chain | ❌ |
| **P0** | [#85825](https://github.com/NousResearch/hermes-agent/issues/85825) | Memory replace/remove overwrites entire MEMORY.md on Windows (CRLF mismatch) — **CLOSED** | ✅ Fixed |
| **P2** | [#30449](https://github.com/NousResearch/hermes-agent/issues/30449) | API server: `reasoning_content`/`reasoning_effort` never reach OpenAI-compatible SSE (DeepSeek) | ❌ |
| **P2** | [#84969](https://github.com/NousResearch/hermes-agent/issues/84969) | Persistent Docker reuse ignores immutable config drift (security/compatibility risk) | ❌ |
| **P2** | [#85834](https://github.com/NousResearch/hermes-agent/issues/85834) | Desktop per-profile SSH remote — resume fails "Session not found" (profile routing gap) | ❌ |
| **P2** | [#86482](https://github.com/NousResearch/hermes-agent/issues/86482) | Cron scheduler: `create_execution` failure strands job in running set forever | ❌ |
| **P2** | [#86483](https://github.com/NousResearch/hermes-agent/issues/86483) | Telegram topic migration runs `executescript` inside `BEGIN IMMEDIATE` — breaks atomicity | ❌ |
| **P2** | [#86558](https://github.com/NousResearch/hermes-agent/issues/86558) | Gateway restart crashes on foreign `XDG_RUNTIME_DIR` (su/sudo without login shell) | ✅ [#86563](https://github.com/NousResearch/hermes-agent/pull/86563) |
| **P3** | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index stale/degraded (29.8h > 26h limit) | ❌ |
| **P3** | [#85622](https://github.com/NousResearch/hermes-agent/issues/85622) | External memory provider suppresses built-in injection — contradicts "additive" doc | ❌ |
| **P3** | [#68876](https://github.com/NousResearch/hermes-agent/issues/68876) | Desktop provider/model switch leaves menu, pill, session binding, live request out of sync | ❌ |
| **P3** | [#79625](https://github.com/NousResearch/hermes-agent/issues/79625) | Desktop sessions ignore `checkpoints.enabled` — filesystem checkpoints silently disabled | ❌ |

**Critical cluster**: Two **P1 Windows desktop regressions** (#83683, #86223) + one **P0 memory corruption** (now fixed) indicate a **Windows quality gate gap** in recent releases.

## 6. Feature Requests & Roadmap Signals

| Signal | Issue/PR | Likelihood for Next Version |
|--------|----------|----------------------------|
| **Multi-tenancy hook integration** | [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) (31 comments, 3 👍) | High — production workaround exists, architectural priority |
| **Lifecycle hooks as shared runtime contract** | [#67798](https://github.com/NousResearch/hermes-agent/issues/67798) | High — cross-cutting, enables CLI/TUI/cron/desktop parity |
| **Discord Omniscience campaign** | [#79564](https://github.com/NousResearch/hermes-agent/issues/79564) + 7 sub-issues/PRs today | Very High — actively shipping test-backed slices (I1, I3, I4, V1, W3, R3, M6, M7, T5) |
| **Skills ecosystem overhaul** | [#86562](https://github.com/NousResearch/hermes-agent/pull/86562) (Phase 0+1.3, 1.1) | High — new categories, SKILL.md template, 106 social-media skills |
| **A2A protocol enhancements** | [#86322](https://github.com/NousResearch/hermes-agent/pull/86322), [#86369](https://github.com/NousResearch/hermes-agent/pull/86369) | Medium — custom headers, User-Agent, SendStreamingMessage |
| **ZAI coding-plan provider profile** | [#86560](https://github.com/NousResearch/hermes-agent/pull/86560) | Medium — trivial config addition, unblocks z.ai subscribers |
| **Kanban lifecycle for Discord** | [#86495](https://github.com/NousResearch/hermes-agent/pull/86495) | Medium — exposes existing orchestration via platform toolsets |
| **Skills needs-review tracking** | [#68248](https://github.com/NousResearch/hermes-agent/pull/68248) | Medium — telemetry for curator transitions |
| **Move sessions into Projects** | [#86561](https://github.com/NousResearch/hermes-agent/issues/86561) (duplicate) | Low-Medium — UX gap, but marked duplicate |

**Prediction**: Next version (likely v0.21.0) will ship **Discord Omniscience Phase 2**, **multi-tenancy hook foundation**, **skills registry v2**, and **Windows desktop fixes**.

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Windows desktop unreliable** | #83683, #86223, #85825 (P0/P1) — gateway killed, backend crashes, memory corruption | **High** — daily driver broken for Windows users; messaging bots go silent |
| **Memory contract violated** | #85622 — external provider suppresses built-in MEMORY.md/USER.md | **Medium** — users lose context on new chats; docs promise "additive" |
| **Multi-tenancy requires fork** | #34352 — memory ops bypass hooks; team runs production fork for months | **High for teams** — blocker for SaaS/shared deployments |
| **Skills index stale** | #66616 — automated probe fails (29.8h > 26h) | **Medium** — docs/skills hub shows outdated data |
| **Docker config drift silent** | #84969 — immutable config changes ignored on container reuse | **Security/Compatibility** — unexpected behavior, hard to debug |
| **SSH remote resume broken** | #85834 — transcript loads but "Session not found" | **Medium** — remote desktop workflow broken per-profile |
| **Provider/model switch UI desync** | #68876 — menu, pill, binding, live request out of sync | **Low-Medium** — confusing UX, state inconsistency |
| **Checkpoints silently disabled** | #79625 — desktop ignores `checkpoints.enabled: true` | **Medium** — data loss risk, config not honored |

**Positive signals**: Users are filing detailed bug reports with reproduction steps (e.g., #85825 CRLF analysis, #86558 XDG_RUNTIME_DIR trace). The Discord Omniscience campaign shows **community-driven feature slicing with test evidence**.

## 8. Backlog Watch — Long-Unanswered / Needs Maintainer Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) | **~79 days** (2026-05-29) | Multi-tenancy architectural blocker; production fork exists; 31 comments, 3 👍 | **Open, needs-decision** |
| [#30449](https://github.com/NousResearch/hermes-agent/issues/30449) | **~85 days

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-15

## 1. Today's Overview
PicoClaw shows **moderate-to-high maintenance activity** with 12 total items updated in the last 24 hours (3 issues, 9 PRs). The project is actively addressing a critical agent-loop hang bug (#3269/#3337), cleaning up legacy DeltaChat code (-200 LOC), and hardening tool execution semantics. No new releases were cut, but five PRs were merged/closed, indicating steady progress on stability and provider updates. Community engagement remains modest (low comment/reaction counts), with most discussion centered on the MCP hang and stale automation.

## 2. Releases
**No new releases** published today. The project continues on nightly builds (latest referenced commit: `2cf030d2`).

## 3. Project Progress — Merged / Closed PRs (Last 24h)

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#3303](https://github.com/sipeed/picoclaw/pull/3303) | `build(deps): bump actions/stale from 10 to 11` | Chore (Dependabot) | CI maintenance; no user-facing change. |
| [#3283](https://github.com/sipeed/picoclaw/pull/3283) | `fix(dingtalk): support picture/image message inbound` | Feature / Bugfix | **DingTalk channel** now receives image messages with graceful fallback; adds token caching & media download logic. |
| [#3279](https://github.com/sipeed/picoclaw/pull/3279) | `fix(seahorse): prevent tool-call format leakage into LLM summaries` | Bugfix | Stops internal tool-call markup from leaking into user-visible summaries (Seahorse summarization path). |
| [#3271](https://github.com/sipeed/picoclaw/pull/3271) | `chore(providers): update default model names to 2026-07 latest` | Maintenance | Refreshes default model lists for **9 providers** (OpenAI gpt-5.6-*, Anthropic, etc.) — verified against vendor docs. |
| [#3270](https://github.com/sipeed/picoclaw/pull/3270) | `feat: add DashScope TTS provider and WeChat audio file sending` | Feature | New **DashScope (Alibaba Bailian) TTS** provider + WeChat audio-file send support; expands multilingual voice options. |

**Net effect**: Two channel enhancements (DingTalk images, WeChat audio), one summarization correctness fix, and a broad model-registry refresh — all merged without reported regressions.

## 4. Community Hot Topics

| Item | Activity | Core Need / Signal |
|------|----------|---------------------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) **[BUG] MCP server connection failure hangs agent loop** | 5 comments, 1 👍, updated 2026-08-14 | **Critical reliability gap**: a single unreachable MCP server freezes the entire chat UI. Users expect graceful degradation (timeout + fallback) rather than total stall. |
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) **Fix/mcp failure hangs agent loop** | 0 comments, opened 2026-08-14 | Direct fix for #3269 — adds timeout/error handling in `AgentLoop.Run` so the loop survives MCP init failures. |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) **refactor(deltachat): cleanup implementation, documentation -200LOC** | Updated 2026-08-14, 0 comments | Technical debt reduction: drops legacy password auth, hard-coded relay list, and dead code; aligns with JSON-RPC secrets pattern. |
| [#3319](https://github.com/sipeed/picoclaw/pull/3319) **fix(tools): honor exec timeout and boolean run options** | Updated 2026-08-14, 0 comments | Tool-execution correctness: per-call `timeout`, `background`, `pty` now respected (were ignored/coerced to string). |

**Takeaway**: The MCP hang is the single most visible user-facing defect; the fix PR (#3337) is fresh and un-reviewed — maintainer attention here will unblock affected users.

## 5. Bugs & Stability — Ranked by Severity

| Rank | Issue / PR | Severity | Status | Fix PR? |
|------|------------|----------|--------|---------|
| 1 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) Agent loop hangs on MCP connection failure | **Critical** — total chat UI freeze | Open | **Yes** — [#3337](https://github.com/sipeed/picoclaw/pull/3337) (open, needs review) |
| 2 | [#3279](https://github.com/sipeed/picoclaw/pull/3279) Tool-call markup leaks into LLM summaries (Seahorse) | **Medium** — confusing UX, potential prompt injection surface | **Merged** | Fixed in #3279 |
| 3 | [#3319](https://github.com/sipeed/picoclaw/pull/3319) `exec` tool ignores per-run `timeout`, `background`, `pty` | **Medium** — silent misbehavior for long-running/background commands | Open | Fix ready in #3319 (stale, needs review) |
| 4 | [#3308](https://github.com/sipeed/picoclaw/issues/3308) Concurrency hazards, goroutine leaks in SeaHorse/Channel Manager/Hooks | **Medium** — reported via stale bot, no recent activity | Closed (stale) | No fix PR; may need re-triaging if symptoms persist |

**No new crash reports or regressions** surfaced today beyond the MCP hang.

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Session list/switch/delete via Telegram (and other channels)** | [#3307](https://github.com/sipeed/picoclaw/issues/3307) (closed stale) | **Medium** — parity with Web UI is a recurring theme; likely to resurface. |
| **Configurable default model fallback chain (persisted via API/UI)** | [#3200](https://github.com/sipeed/picoclaw/pull/3200) (open, stale) | **High** — PR exists with UI + backend work; aligns with multi-provider strategy. |
| **DashScope TTS + WeChat audio** | [#3270](https://github.com/sipeed/picoclaw/pull/3270) (merged) | **Done** — shipped today. |
| **DeltaChat modernization (JSON-RPC secrets, official relay list)** | [#3222](https://github.com/sipeed/picoclaw/pull/3222) (open) | **Medium** — cleanup PR ready; reduces maintenance burden. |

**Prediction**: The fallback-chain PR (#3200) and DeltaChat cleanup (#3222) are the strongest candidates for the next merge window, provided they pass review.

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|------------------------|----------|-----------|
| **MCP integration brittleness** — “chat stops replying entirely” when an MCP server is down | #3269 (1 👍, 5 comments) | 😡 High frustration; blocks workflows relying on external tools. |
| **Channel feature parity** — Telegram users lack session management available on Web | #3307 (closed stale, 0 👍) | 😐 Quiet demand; no vocal advocacy yet. |
| **Tool execution reliability** — timeouts/background modes silently ignored | #3319 (0 comments) | 😐 Hidden bug; affects power users scripting long tasks. |
| **Provider freshness** — desire for latest model IDs (GPT-5.6, etc.) | #3271 (merged) | ✅ Satisfied — swift update cycle appreciated. |
| **Voice/TTS diversity** — need for Chinese/Alibaba TTS & WeChat audio | #3270 (merged) | ✅ Satisfied — expands non-English deployments. |

Overall: **critical stability issue** (MCP) dominates sentiment; other requests are incremental.

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) Fix MCP hang | 1 day | Unblocks #3269; critical for production MCP users | **Priority review / merge** — add test for MCP timeout path. |
| [#3319](https://github.com/sipeed/picoclaw/pull/3319) Honor exec timeout/boolean options | 8 days (stale) | Correctness fix for a core tool; low risk | Remove `stale` label, review & merge. |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) DeltaChat cleanup (-200 LOC) | 43 days | Reduces attack surface & config complexity | Review for breaking changes (password auth removal), then merge. |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) Configurable fallback chain | 45 days (stale) | High-value UX for multi-model setups | Re-base if needed; schedule for next minor release. |
| [#3308](https://github.com/sipeed/picoclaw/issues/3308) Concurrency hazards / goroutine leaks | 16 days (closed stale) | Potential resource exhaustion on long runs | Re-open if reproducible; assign for profiling. |

---

**Health Indicator**: 🟡 **Caution** — one critical bug with a ready fix awaiting review, several stale but valuable PRs, and low community discussion volume. Merging #3337 and clearing the stale backlog would shift status to 🟢 Healthy.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-15

---

## 1. Today's Overview
NullClaw showed minimal community activity in the last 24 hours, with zero new or updated issues and a single pull request merged. The merged PR (#986) introduces a configuration option for the SQLite memory database path, addressing deployment flexibility for read-only workspace scenarios. No new releases were published. Overall project velocity appears low today, with maintenance-focused contributions rather than feature development.

---

## 2. Releases
**No new releases** published in the last 24 hours.

---

## 3. Project Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#986](https://github.com/nullclaw/nullclaw/pull/986) | **Merged** | **GEN-548: Make SQLite memory database path configurable** — Adds `memory.database_path` setting for SQLite-backed primary memory engines. Preserves default `<workspace>/memory.db` when unset; resolves relative paths from workspace root and accepts absolute paths to support read-only workspace deployments. Updates documentation. | **Medium** — Improves deployment flexibility (e.g., containerized/read-only environments) without breaking existing defaults. |

**Net change**: One configuration enhancement merged; no bug fixes or new features delivered today.

---

## 4. Community Hot Topics
No issues or PRs received comments or reactions in the last 24 hours. The sole merged PR (#986) had zero comments and zero reactions, indicating limited community discussion around this change.

---

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.**  
No open issues exist in the tracker as of this snapshot.

---

## 6. Feature Requests & Roadmap Signals
No new feature requests filed today. The merged PR (#986) originated from a tracked task (`GEN-548`), suggesting it was a planned improvement rather than a community-driven request. The focus on deployment-path configurability hints at ongoing work to harden NullClaw for production/containerized environments — expect similar infrastructure hardening (e.g., config-driven storage backends, secrets management) in upcoming iterations.

---

## 7. User Feedback Summary
No user-reported pain points, use cases, or satisfaction signals captured in the last 24 hours (no issues, discussions, or PR comments).

---

## 8. Backlog Watch
**No long-unanswered issues or stale PRs** are visible in the provided data snapshot (zero open issues total). Maintainers should ensure the issue tracker reflects the true backlog; if issues exist but were not fetched, a triage pass is recommended.

---

*Data sourced from GitHub API for `nullclaw/nullclaw` covering 2026-08-14 00:00 – 2026-08-15 00:00 UTC. Links point to live GitHub resources.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-15

## 1. Today's Overview

IronClaw shows **very high velocity** with 71 total items updated in 24 hours (25 issues, 46 PRs), indicating an active development sprint. The project is in a **major architectural transition phase** — simultaneously landing the "unbound turns" execution model rewrite (#7562, #7634), hardening scheduled automations reliability (#6879 epic with 6 sub-issues), and conducting a QA bug-bash that surfaced 5+ integration issues. No new release was cut today, but the 1.2.0 release line was merged back to main (#7657). The 50% PR merge rate (23/46) suggests healthy review throughput despite large, stacked changes.

## 2. Releases

**No new releases today.** The 1.2.0 release (tagged 2026-08-11) was merged back to main via #7657, forward-porting startup migrations, Windows filesystem fixes, and release artifact canaries. A forward-port of additional 1.2 fixes without legacy migration is in progress via #7663.

## 3. Project Progress — Merged/Closed PRs Today (23 items)

### Major Architectural Lands
| PR | Scope | Summary |
|----|-------|---------|
| [#7657](https://github.com/nearai/ironclaw/pull/7657) | **XL, release** | Merged `release/2026-08-11` (v1.2.0) back into `main`; forward-ports state-preserving migrations, Windows fixes, artifact canaries |
| [#7562](https://github.com/nearai/ironclaw/pull/7562) | **XL, docs+impl** | Phase 1 of "unbound turns": prepared-context accept door, unbound run lane, kernel binding-ref deletion + design docs |
| [#7668](https://github.com/nearai/ironclaw/pull/7668) | **XL, extensions** | Surface provider auth diagnostics through full stack (WASM → ABI → capability → gate → deny/resume) |
| [#7665](https://github.com/nearai/ironclaw/pull/7665) | **L, auth** | Support origin-scoped hosted MCP OAuth (MKT1 shape: HTTPS `/mcp` endpoint, RFC 9728 resource = bare origin) |
| [#7666](https://github.com/nearai/ironclaw/pull/7666) | **L, extensions** | Fix extension cards/install results truth (device-link → Web UI link step; QA #7660 + install guidance) |
| [#7658](https://github.com/nearai/ironclaw/pull/7658) | **XL, telegram** | Recognize 2FA gate on migrated DCs; clarify where login codes arrive (QR scans by 2FA accounts) |
| [#7655](https://github.com/nearai/ironclaw/pull/7655) | **XS, ci** | Re-pin Slack/Telegram integration coverage floors to observed reality (CI gate alignment) |
| [#7652](https://github.com/nearai/ironclaw/pull/7652) | **XL, perf** | Measure production DB write workloads: 10 capability calls, 11 model attempts, durable events, heartbeats |
| [#7592](https://github.com/nearai/ironclaw/pull/7592) | **Tier 0, perf** | Per-turn DB write measurement harness (pg_stat_statements baseline) — regression harness for write-pressure epic |
| [#7569](https://github.com/nearai/ironclaw/pull/7569) | **UI** | Introduce shared `SearchField` component; migrate Settings, Extensions Registry, Sidebar Threads |
| [#7565](https://github.com/nearai/ironclaw/pull/7565) | **i18n** | Fix missing i18n coverage across exposed WebUI routes (Admin → Configuration loading/errors/headings) |
| [#7532](https://github.com/nearai/ironclaw/pull/7532) | **v1.3.0, automations** | Structured execution specs for reliable scheduled automations (part of #6879) |
| [#7183](https://github.com/nearai/ironclaw/pull/7183) | **v1.3.0, llm+config** | Per-user LLM model selection (was admin-only) |
| [#7520](https://github.com/nearai/ironclaw/pull/7520) | **epic, frontend** | Retire superseded/unreachable WebUI frontend surfaces (v1/engine-v2 code) |
| [#6869](https://github.com/nearai/ironclaw/pull/6869) | **bug, docx** | Fix generated DOCX files unreadable by Word due to corruption |

### Other Closed PRs
- [#7648](https://github.com/nearai/ironclaw/pull/7648) — ACP harness executor (experimental, dev-only yolo)
- [#7628](https://github.com/nearai/ironclaw/pull/7628) — Remove heartbeat journal churn (perf)
- [#7456](https://github.com/nearai/ironclaw/pull/7456) — Make durable storage profile-agnostic (reborn)
- [#7379](https://github.com/nearai/ironclaw/pull/7379) — Deploy public docs from `docs-live` branch (doc-truth 4/5)
- [#7378](https://github.com/nearai/ironclaw/pull/7378) — Doc-fact contract tests for CLI/manifest/Responses (doc-truth 3/5)
- [#7255](https://github.com/nearai/ironclaw/pull/7255) — Evaluate APDD governance kit integration (docs only)
- [#7636](https://github.com/nearai/ironclaw/pull/7636) — Shell tool: clarify model-facing description (takes command line, not primitives)

## 4. Community Hot Topics — Most Active Items

| Item | Type | Activity Signal | Underlying Need |
|------|------|----------------|-----------------|
| [#7562](https://github.com/nearai/ironclaw/pull/7562) / [#7634](https://github.com/nearai/ironclaw/pull/7634) | PR (stacked) | **Base + completion PR for unbound-turns** — 71-clause conformance audit, phase 1 + switchover | **Execution model rewrite**: Move from bound-turn kernel to prepared-context/unbound-turns architecture; critical path for v1.3.0 |
| [#6879](https://github.com/nearai/ironclaw/issues/6879) + 6 sub-issues | Issue (epic) | **Epic + 6 enhancement issues** all created/updated today (#7644–#7647, #7650, #7651) | **Scheduled automation reliability**: "Hit-or-miss" unattended runs; need deterministic suppression, model pinning, preflight grants, structured verification, semantic outcome persistence |
| [#7664](https://github.com/nearai/ironclaw/issues/7664) / [#7661](https://github.com/nearai/ironclaw/pull/7661) | Issue + PR | **Pluggable memory over MCP** — provider crate + tracking issue | **External memory systems** bindable by config (Mnesis Core as first consumer); remove factory-arm coupling |
| [#7414](https://github.com/nearai/ironclaw/issues/7414) | Issue (epic) | **Dogfooding/QA bug-fix epic** (08/10–08/16) — 5 QA bugs filed today | **Quality gate**: Week-long internal dogfooding sprint to surface integration bugs before v1.3.0 |
| [#7660](https://github.com/nearai/ironclaw/issues/7660) / [#7666](https://github.com/nearai/ironclaw/pull/7666) | Issue + PR | **Slack UI shows false "Reconnect/Finish Setup"** despite working connection | **Extension/connection state truth**: UI must reflect actual connection status, not stale cache |
| [#7667](https://github.com/nearai/ironclaw/issues/7667) / [#7658](https://github.com/nearai/ironclaw/pull/7658) | Issue + PR | **Telegram phone-mode 2FA migration** — code hint mismatch, codes not arriving | **Auth UX for migrated DCs**: Correctly signal where login codes land (service chat vs. device) |

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Description | Fix PR Status |
|----------|-------|-------------|---------------|
| **High** | [#7662](https://github.com/nearai/ironclaw/issues/7662) | MP4 attachment fails with `invalid_value (attachments.mime_type)` in Telegram despite correct `video/mp4` | **Open** — no fix PR yet |
| **High** | [#7659](https://github.com/nearai/ironclaw/issues/7659) | Extensions installed by other users visible on Registry page — **state leaking between users** | **Open** — no fix PR yet |
| **High** | [#7667](https://github.com/nearai/ironclaw/issues/7667) | Telegram phone-mode login: `PHONE_MIGRATE_1` re-send succeeds but code not delivered to service chat | **Fixed** via [#7658](https://github.com/nearai/ironclaw/pull/7658) (merged) |
| **Medium** | [#7660](https://github.com/nearai/ironclaw/issues/7660) | Slack shows "Reconnect" + "Finish Setup" despite active working connection | **Fixed** via [#7666](https://github.com/nearai/ironclaw/pull/7666) (merged) |
| **Medium** | [#6869](https://github.com/nearai/ironclaw/issues/6869) | Generated DOCX files corrupted/unreadable by Word | **Fixed** via [#6869](https://github.com/nearai/ironclaw/pull/6869) (merged) |
| **Low** | [#7638](https://github.com/nearai/ironclaw/issues/7638) | Thread deletion failures use blocking `window.alert()` instead of global toast | **Open** — no fix PR yet |

**Pattern**: QA bug-bash (epic #7414) surfaced 5 integration bugs in Slack/Telegram/Extensions in one day — suggests integration test coverage gaps.

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for v1.3.0 | Notes |
|---------|--------|----------------------|-------|
| **Structured automation execution specs** | [#7532](https://github.com/nearai/ironclaw/issues/7532) (closed), sub-issues #7644–#7647, #7650, #7651 | **Very High** — 6 sub-issues + 2 PRs in flight | Core v1.3.0 theme: deterministic scheduled runs |
| **Per-user LLM model selection** | [#7183](https://github.com/nearai/ironclaw/issues/7183) (closed) | **Done** — merged today | Admin-only → user-controlled; marketing-requested |
| **Pluggable memory via MCP** | [#7664](https://github.com/nearai/ironclaw/issues/7664) / [#7661](https://github.com/nearai/ironclaw/pull/7661) | **High** — provider crate drafted, Mnesis as first consumer | Removes factory-arm coupling; config-bound providers |
| **ACP harness executor (claude-code loop)** | [#7624](https://github.com/nearai/ironclaw/issues/7624) / [#7648](https://github.com/nearai/ironclaw/pull/7648) | **Experimental** — dev-only, behind flag | Part of pluggable-loops ladder; v0 validates slot only |
| **Shared UI components (SearchField, InlineNotice)** | [#7569](https://github.com/nearai/ironclaw/issues/7569), [#7639](https://github.com/nearai/ironclaw/issues/7639) | **High** — SearchField done, InlineNotice open | Design-system consolidation; reduces duplication |
| **Typed design-system component boundary** | [#7637](https://github.com/nearai/ironclaw/issues/7637) | **Medium** — open, no PR | TypeScript prop validation without full strict mode |
| **Structured Ask User cards in WebUI** | [#7653](https://github.com/nearai/ironclaw/issues/7653) | **Medium** — open, OMP-inspired | Non-resumable; uses existing `AskUserReply` completion |

**Roadmap prediction**: v1.3.0 = **Automation Reliability + Unbound Turns + Per-User Model Selection**. Pluggable memory and ACP executor are v1.3+ or v1.4 candidates.

## 7. User Feedback Summary

| Pain Point | Source | Context |
|------------|--------|---------|
| **Automation runs "hit-or-miss"** | [#6879](https://github.com/nearai/ironclaw/issues/6879) | Same stored prompt succeeds/fails randomly on small models (DeepSeek V4 Flash); structural pipeline issue, not model noise |
| **No per-user model choice** | [#7183](https://github.com/nearai/ironclaw/issues/7183) | Raised by marketing (Jeremy Koch) in Champions check-in; users blocked by admin-only model config |
| **Telegram login codes not arriving** | [#7667](https://github.com/nearai/ironclaw/issues/7667) | Phone-mode migration (`PHONE_MIGRATE_1`): trace shows `auth.sentCode` OK but user receives nothing in service chat |
| **Slack UI lies about connection state** | [#7660](https://github.com/nearai/ironclaw/issues/7660) | Fully functional connection shows "Reconnect" + "Finish Setup" badges — erodes trust |
| **Extension state leaks across users** | [#7659](https://github.com/nearai/ironclaw/issues/7659) | Registry shows other users' installed extensions as "installed" — privacy/isolation bug |
| **DOCX output corrupted** | [#6869](https://github.com/nearai/ironclaw/issues/6869) | Word cannot open generated files; competitors (ChatGPT, Claude) handle this easily |
| **WebUI strings untranslated** | [#7565](https://github.com/nearai/ironclaw/issues/7565) | Admin → Configuration page bypasses i

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-15

## 1. Today's Overview
LobsterAI shows **high development velocity** with 27 PRs updated in the last 24 hours (22 merged/closed, 5 open) and a new patch release (2026.8.14) shipped yesterday. The merged PRs span UI polish, cowork session UX, OpenClaw skill integration fixes, dependency upgrades, and a major release-branch merge (2026.7.30 → main). Only 2 issues were updated—one stale testing task and a user plea for “v4pro”—indicating the community is currently quiet on new bug reports but eager for the next major version. Overall project health appears strong: active maintenance, rapid iteration, and a clean merge of a large feature branch.

## 2. Releases
### **LobsterAI 2026.8.14** (published 2026-08-14)
| Change | PR | Author |
|--------|-----|--------|
| Sidebar: check-in & banner carousel support | [#2411](https://github.com/netease-youdao/LobsterAI/pull/2411) | @btc69m979y-dotcom |
| Sidebar: multi-agent task activity filter | [#2418](https://github.com/netease-youdao/LobsterAI/pull/2418) | @liuzhq1986 |
| *(additional sidebar changes truncated in feed)* | — | — |

**Breaking changes / migration notes:** None declared in the truncated notes. The release appears to be a **feature-patch** focused on sidebar enhancements. Users on 2026.7.x can upgrade without config migration.

## 3. Project Progress (Merged/Closed PRs Today)
| Area | Key Deliverables |
|------|------------------|
| **Cowork / Session UX** | • Keep turn expanded until answer exists ([#2499](https://github.com/netease-youdao/LobsterAI/pull/2499))<br>• Badge popovers viewport-safe & above later messages ([#2496](https://github.com/netease-youdao/LobsterAI/pull/2496))<br>• Browser-annotation screenshots as numbered artifact cards ([#2490](https://github.com/netease-youdao/LobsterAI/pull/2490))<br>• Session export image & card toggle UI fixes ([#2493](https://github.com/netease-youdao/LobsterAI/pull/2493)) |
| **OpenClaw / Skills** | • Key `skills.entries` by frontmatter `name` (fixes silent UI toggle failure) ([#2491](https://github.com/netease-youdao/LobsterAI/pull/2491), [#2483](https://github.com/netease-youdao/LobsterAI/pull/2483)) |
| **UI / Typography / i18n** | • Default UI/code font-size bump + one-time migration ([#2495](https://github.com/netease-youdao/LobsterAI/pull/2495))<br>• Credits icon redesign & color alignment ([#2494](https://github.com/netease-youdao/LobsterAI/pull/2494), [#2492](https://github.com/netease-youdao/LobsterAI/pull/2492))<br>• Cowork goal/steer copy wording improvements ([#2497](https://github.com/netease-youdao/LobsterAI/pull/2497)) |
| **Release Integration** | • Merged `release/2026.7.30` → `main` (+67 commits, 264 files, Team Edition account/quota flows, Skills & Connectors refresh) ([#2498](https://github.com/netease-youdao/LobsterAI/pull/2498)) |
| **Dependencies** | • `rimraf` 5.0.10 → 6.1.3 ([#2460](https://github.com/netease-youdao/LobsterAI/pull/2460))<br>• `vite` 5.4.21 → 8.2.1 ([#2465](https://github.com/netease-youdao/LobsterAI/pull/2465)) |
| **Stale PRs Finally Closed** | • In-session search (Ctrl+F) ([#1155](https://github.com/netease-youdao/LobsterAI/pull/1155))<br>• “Mark session unread” ([#1228](https://github.com/netease-youdao/LobsterAI/pull/1228))<br>• AgentCreateModal Escape key + form reset ([#1231](https://github.com/netease-youdao/LobsterAI/pull/1231))<br>• Gemini `/v1` URL join fix ([#1153](https://github.com/netease-youdao/LobsterAI/pull/1153)) |

## 4. Community Hot Topics
| Item | Signal | Underlying Need |
|------|--------|-----------------|
| **Issue [#2489](https://github.com/netease-youdao/LobsterAI/issues/2489)** “快更新v4pro！” (1 👍, 1 comment, created & updated today) | **High urgency** – user explicitly demands the next major version (“v4pro”). | Community anticipates a **major feature drop** (likely Team Edition, new agent runtime, or pricing tier) and feels the current patch cadence isn’t enough. |
| **PR [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374)** Permanent “hide sidebar ad banner” setting (open since 2026-07-21, addresses [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342)) | **Persistent UX friction** – users want **ad-free sidebar** without per-banner dismissal. | Monetization UI is perceived as intrusive; a global toggle is a quality-of-life must-have. |
| **Stale PR [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153)** Gemini `/v1` URL bug (open since 2026-03-31) | **Long-standing integration bug** – blocks Google Gemini users. | Provider compatibility is a **retention risk** for multi-model users. |

## 5. Bugs & Stability
| Severity | Bug | Status | Fix PR |
|----------|-----|--------|--------|
| **High** | Turn collapses prematurely mid-wait (empty duration line) | **Fixed & merged** | [#2499](https://github.com/netease-youdao/LobsterAI/pull/2499) |
| **High** | OpenClaw skill toggles silently ineffective (dir vs. frontmatter name mismatch) | **Fixed & merged** (two PRs) | [#2491](https://github.com/netease-youdao/LobsterAI/pull/2491), [#2483](https://github.com/netease-youdao/LobsterAI/pull/2483) |
| **Medium** | Badge popovers overflow viewport / hide under later messages | **Fixed & merged** | [#2496](https://github.com/netease-youdao/LobsterAI/pull/2496) |
| **Medium** | Gemini baseURL ending in `/v1` produces malformed endpoint | **Open (stale)** | [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153) |
| **Low** | Credits icon color inconsistent across themes | **Fixed & merged** | [#2492](https://github.com/netease-youdao/LobsterAI/pull/2492), [#2494](https://github.com/netease-youdao/LobsterAI/pull/2494) |

**No new crash reports or regressions** surfaced in today’s issues.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **v4pro / major release** | Issue [#2489](https://github.com/netease-youdao/LobsterAI/issues/2489) | **Very High** – user pressure + recent Team Edition merge ([#2498](https://github.com/netease-youdao/LobsterAI/pull/2498)) suggests v4pro is imminent. |
| **Permanent sidebar ad hide** | PR [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) (open 25 days) | **High** – trivial toggle, addresses open issue [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342). |
| **In-session Ctrl+F search** | Stale PR [#1155](https://github.com/netease-youdao/LobsterAI/pull/1155) | **Medium** – feature complete but stalled; may ship with v4pro polish. |
| **Unit tests for safety modules** | Issue [#1154](https://github.com/netease-youdao/LobsterAI/issues/1154) (stale) | **Low–Medium** – critical for reliability but no PR movement in 4.5 months. |
| **“Mark session unread”** | Closed PR [#1228](https://github.com/netease-youdao/LobsterAI/pull/1228) | **Delivered** – merged today, will be in next release. |

## 7. User Feedback Summary
- **Pain points**: Sidebar ad intrusiveness (#2342, #2374), Gemini URL breakage (#1153), skill toggle silence (#2440 → #2483/#2491), premature turn collapse (#2499).
- **Delighters**: Browser-annotation artifact preview (#2490), font-size upgrade (#2495), session unread marking (#1228).
- **Sentiment**: **Impatient for v4pro** (explicit demand in #2489), otherwise **satisfied with rapid bug-fix cadence** (22 merges in 24h).

## 8. Backlog Watch (Stale / Needs Maintainer Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| **Issue [#1154](https://github.com/netease-youdao/LobsterAI/issues/1154)** – Vitest coverage for `commandSafety` & `coworkMemoryJudge` | 137 days | Core safety & memory gatekeepers **untested**; false negatives = destructive commands or memory pollution. |
| **PR [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153)** – Gemini `/v1` URL fix | 137 days | Blocks **Google Gemini** users; trivial one-line fix (`slice(0, -3)` → `slice(0, -1)`). |
| **PR [#1155](https://github.com/netease-youdao/LobsterAI/pull/1155)** – In-session Ctrl+F search | 137 days | High-value UX feature **feature-complete** but unreviewed. |
| **PR [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374)** – Permanent ad-banner hide | 25 days | Addresses open issue [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342); simple settings toggle. |
| **Dependabot PRs [#2460](https://github.com/netease-youdao/LobsterAI/pull/2460) (rimraf) & [#2465](https://github.com/netease-youdao/LobsterAI/pull/2465) (vite)** | 5 days | Major version bumps (Vite 5→8); need CI validation before merge. |

---
*Digest generated from GitHub API data captured 2026-08-15 00:00 UTC. All links point to live GitHub items.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-15

## 1. Today's Overview
Moltis shows **low community activity** today with zero issue updates and no merged pull requests. Development momentum is concentrated in **two open feature PRs** (#1195, #1190) authored by maintainer `penso`, both targeting deep integrations (Slack native cards, durable connectors). No releases, bug reports, or user-facing issues appeared in the last 24 hours, indicating a **quiet maintenance day** with work-in-progress on major integration features.

## 2. Releases
*No new releases published today.*

## 3. Project Progress
*No PRs were merged or closed today.*  
Both active PRs remain in **open/review** state:

| PR | Title | Status | Last Update |
|----|-------|--------|-------------|
| [#1195](https://github.com/moltis-org/moltis/pull/1195) | Add Slack native live task cards | Open | 2026-08-15 |
| [#1190](https://github.com/moltis-org/moltis/pull/1190) | Add durable calendar, channel, and email connectors | Open | 2026-08-14 |

**Feature advancement**:  
- **#1195** introduces channel-neutral tool lifecycle updates rendered as Slack native plan/task cards with privacy-preserving opaque run IDs and terminal error cleanup.  
- **#1190** adds provider-neutral connector persistence (CalDAV, Gmail, Himalaya v2, channel history) with atomic snapshots, scheduling, projections, bounded full-text search, and provider-scoped trust boundaries—no credential copying.

## 4. Community Hot Topics
*No issues or PRs with comments/reactions recorded in the last 24h.*  
The two open PRs have **zero comments and zero reactions** so far, suggesting they are early in review or awaiting maintainer bandwidth.

## 5. Bugs & Stability
*No bugs, crashes, or regressions reported today.*  
No issue activity means no stability signals—positive or negative—from the community in this window.

## 6. Feature Requests & Roadmap Signals
The two open PRs **are the roadmap signals**:

| PR | Capability | Likely Target |
|----|------------|---------------|
| [#1195](https://github.com/moltis-org/moltis/pull/1195) | Slack native live task cards, streaming renders, privacy-first run IDs | Next minor release (v0.x+1) |
| [#1190](https://github.com/moltis-org/moltis/pull/1190) | Durable multi-provider connectors (CalDAV, Gmail, Himalaya, channel history), snapshots, search, trust scoping | Next minor release (v0.x+1) |

Both are **maintainer-driven, infrastructure-grade features**—not user-requested via issues—indicating the project is **proactively expanding integration surface** rather than reacting to tickets.

## 7. User Feedback Summary
*No user feedback (issues, discussions, reactions) captured in the last 24h.*  
Absence of community input today limits pain-point analysis. Historical context (not in today’s data) would be needed to assess satisfaction.

## 8. Backlog Watch
*No long-unanswered issues or PRs surfaced in today’s data slice.*  
The two open PRs are **fresh (created 2026-08-11 and 2026-08-15)** and have not yet aged into “stale” territory. Monitor for review latency if they remain open beyond 7–10 days without maintainer comments.

---

**Health Indicators (2026-08-15)**  
- **Velocity**: Low (0 merged, 2 open WIP)  
- **Community Engagement**: None today  
- **Release Cadence**: No release today  
- **Stability Signals**: None (no bug reports)  
- **Strategic Direction**: Clear—deepening Slack + multi-provider connector stack  

*Next digest will reflect review progress on #1190/#1195 and any emerging issue activity.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-15

## 1. Today's Overview
CoPaw shows **high maintenance velocity** with 91 total items updated in the last 24 hours (50 issues, 41 PRs). The project is actively closing legacy items (38 issues closed, 15 PRs merged/closed) while advancing new feature work (26 open PRs). No new release was cut today. Activity spans core runtime, provider/model management, skill system, desktop app, and channel integrations — indicating a broad, multi-front development push likely targeting a 2.1+ milestone.

## 2. Releases
**No new releases published today.** The latest version remains v2.1.0 (beta 4 per issue #6958). Users on v2.0.x report compatibility issues with AgentScope 2.0.4+ (#6612).

## 3. Project Progress — Merged/Closed PRs (15)
| PR | Title | Area | Status |
|----|-------|------|--------|
| [#7031](https://github.com/agentscope-ai/QwenPaw/pull/7031) | feat(skill-system): dynamic skill loading + auto-unload + frontmatter fix | Skills | Closed (superseded by #7033) |
| [#7030](https://github.com/agentscope-ai/QwenPaw/pull/7030) | feat(auto-title-sync): auto-memory linked chat title refresh + observability | Console/Memory | Closed (superseded by #7032) |
| [#6943](https://github.com/agentscope-ai/QwenPaw/pull/6943) | feat(channels): support interactive configurators for plugin channels | Channels | **Merged** |
| [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) | feat(onebot): localize inbound media before agent processing | OneBot/Channels | **Merged** |
| [#2105](https://github.com/agentscope-ai/QwenPaw/pull/2105) | docs: add whisper installation instructions | Docs | **Merged** |

**Key advances:** Plugin channel configurators restored (#6943), OneBot media pipeline aligned with AgentScope 2.0 DataBlock (#6715), Whisper STT docs added (#2105). Two major skill-system PRs (#7031, #7030) were closed in favor of updated versions (#7033, #7032) opened today.

## 4. Community Hot Topics (Most Commented)

| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#3045](https://github.com/agentscope-ai/QwenPaw/issues/3045) | 8 | Bug | Auto model discovery broken on Windows desktop v1.0.1 |
| [#2418](https://github.com/agentscope-ai/QwenPaw/issues/2418) | 7 | Feature | Skills Hub UI for one-click mainstream skill installation |
| [#2846](https://github.com/agentscope-ai/QwenPaw/issues/2846) | 6 | Feature | **Auto-update for desktop app** + Windows taskbar icon fix |
| [#2303](https://github.com/agentscope-ai/QwenPaw/issues/2303) | 6 | Bug | MiniMax provider `check_connection()` fails (calls unsupported `/models`) |
| [#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010) | 6 | Bug | **No true daemon/background mode** — `qwenpaw app` blocks SSH/scripts |
| [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) | 6 | Bug | MCP tools "not found" after v2.0 upgrade (naming: `[mcp-key]__[tool_name]`) |
| [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | 5 | Bug | Console stop request cancels active Feishu session (cross-session leak) |
| [#3002](https://github.com/agentscope-ai/QwenPaw/issues/3002) | 5 | Bug | **OpenAI Responses API incompatibility** — 400 errors on Azure GPT-5.3 |
| [#2763](https://github.com/agentscope-ai/QwenPaw/issues/2763) | 4 (👍2) | Feature | Chat commands `/models` and `/model <provider>-<model>` for in-chat switching |
| [#944](https://github.com/agentscope-ai/QwenPaw/issues/944) | 4 | Feature | Support Responses API-only OpenAI-compatible providers |

**Underlying themes:**  
- **Desktop UX gaps** — auto-update, daemon mode, taskbar icon (#2846, #7010, #3464)  
- **Provider ecosystem fragmentation** — Responses API, MiniMax, MCP naming, Azure gateways (#3002, #2303, #6405, #944)  
- **Skill discoverability** — users want a hub, not manual installs (#2418, #6433)  
- **Session isolation bugs** — cross-channel interference (#7011)

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | Console stop cancels active Feishu session — session identity crosses between UI sessions | — |
| **Critical** | [#3002](https://github.com/agentscope-ai/QwenPaw/issues/3002) | OpenAI Responses API incompatible — all requests 400 on Azure GPT-5.3 | — |
| **High** | [#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010) | No daemon mode — `qwenpaw app` blocks forever on SSH/scripts | — |
| **High** | [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) | MCP tools "not found" post v2.0 — naming scheme `[mcp-key]__[tool_name]` breaks lookup | [#6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) (open) |
| **High** | [#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951) | Scroll compaction hides pre-compaction history on re-entry — only eviction index visible | — |
| **Medium** | [#6958](https://github.com/agentscope-ai/QwenPaw/issues/6958) | FastMCP returns both `content` + `structuredContent` → duplicate tool result entries | [#6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) (open) |
| **Medium** | [#4832](https://github.com/agentscope-ai/QwenPaw/issues/4832) | Shell command flashes `cmd.exe` window on Windows (missing `CREATE_NO_WINDOW`) | — |
| **Medium** | [#6197](https://github.com/agentscope-ai/QwenPaw/issues/6197) | Desktop binary hangs on startup if `nvidia-smi` hangs (Windows) | — |
| **Medium** | [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) | Tool call offload endpoint returns 404 during streaming (`/offload` not found) | — |
| **Low** | [#7040](https://github.com/agentscope-ai/QwenPaw/issues/7040) | Typo: "Stopp Running" in UI | — |

**Note:** #6969 addresses two bugs (#6958, #6405) but remains open.

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signals | Likelihood (Next Version) |
|---------|-------|---------|---------------------------|
| **Auto-update for desktop** | [#2846](https://github.com/agentscope-ai/QwenPaw/issues/2846), [#3464](https://github.com/agentscope-ai/QwenPaw/issues/3464) | 6+3 comments, repeated since April | ★★★★☆ — High priority for desktop UX |
| **Daemon/background mode** | [#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010) | 6 comments, blocks server/SSH deployments | ★★★★☆ — Critical for headless use |
| **Responses API support** | [#3002](https://github.com/agentscope-ai/QwenPaw/issues/3002), [#944](https://github.com/agentscope-ai/QwenPaw/issues/944), [#2737](https://github.com/agentscope-ai/QwenPaw/issues/2737) | 5+4+3 comments, Azure/OpenAI gateway blockers | ★★★★★ — Breaking for enterprise users |
| **Skills Hub UI** | [#2418](https://github.com/agentscope-ai/QwenPaw/issues/2418), [#6433](https://github.com/agentscope-ai/QwenPaw/issues/6433) | 7+2 comments, aligns with dynamic skill PRs (#7033) | ★★★★☆ — Active PR work underway |
| **In-chat model switching (`/model`)** | [#2763](https://github.com/agentscope-ai/QwenPaw/issues/2763) | 4 comments, 👍2, UX convenience | ★★★☆☆ — Low complexity, high value |
| **Provider-agnostic history** | [#2314](https://github.com/agentscope-ai/QwenPaw/issues/2314) | 4 comments, enables cross-provider conversations | ★★★☆☆ — Architectural, may need 2.2 |
| **Session splitting (move messages to new chat)** | [#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436) | 2 comments, long-context management | ★★☆☆☆ — Nice-to-have |
| **Computer Use support** | [#5551](https://github.com/agentscope-ai/QwenPaw/issues/5551), [#7037](https://github.com/agentscope-ai/QwenPaw/pull/7037) | 3 comments, PR #7037 open today | ★★★★☆ — PR actively in review |
| **GGUF local model bundling** | [#6433](https://github.com/agentscope-ai/QwenPaw/issues/6433) | 2 comments, zero-setup local inference | ★★★☆☆ — Long-term, infra-heavy |

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Desktop app feels unpolished** | No auto-update (#2846, #3464), Python taskbar icon (#2846), blocks on `nvidia-smi` (#6197), cmd window flash (#4832) | Windows users forced to uninstall/reinstall; poor first impression |
| **Cannot run headless/server-side** | `qwenpaw app` has no daemon mode (#7010) — blocks SSH, systemd, CI/CD | Blocks production deployments |
| **Provider compatibility minefield** | Responses API broken (#3002, #944), MiniMax 404 (#2303), MCP tool lookup broken (#6405), DashScope audio retry (#7024) | Enterprise/heterogeneous env users hit walls |
| **Session/channel isolation leaks** | Console stop kills Feishu session (#7011), Creator plugin breaks all plugins (#7025) | Data loss risk, plugin ecosystem fragility |
| **History visibility broken after compaction** | Pre-compaction messages invisible on re-entry (#6951) | Users lose trust in transcript integrity |
| **Skill management is manual/invisible** | No hub (#2418), skills static after startup (#7033) | High friction for skill adoption |
| **Positive: Active dev responsiveness** | 15 PRs merged/closed today, maintainers engaging on issues | Community confidence |

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#944](https://github.com/agentscope-ai/QwenPaw/issues/944) | ~5 months | Responses API support — blocks Azure/OpenAI gateway users | Open, 4 comments |
| [#2314](https://github.com/agentscope-ai/QwenPaw/issues/2314) | ~5 months | Provider-agnostic history — architectural enabler for model switching | Open, 4 comments |
| [#2846](https://github.com/agentscope-ai/QwenPaw/issues/2846) | ~4.5 months | Auto-update + taskbar icon — top desktop UX request | Closed (but no fix PR visible) |
| [#3002](https://github.com/agentscope-ai/QwenPaw/issues/3002) | ~4.5 months | Responses API incompatibility — enterprise blocker | Closed (but no fix PR visible) |
| [#6433](https://github.com/agentscope-ai/QwenPaw/issues/6433) | ~3 weeks | Zero-setup GGUF — strategic for local-first users | Closed (but no implementation PR) |
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | ~1 month | Per-session model overrides — core feature for multi-model workflows | **Open, Under Review** |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | ~3 weeks | Unified provider discovery/routing — major refactor | **Open, Under Review** |
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | ~3 days | DataPaw app runtime — new product surface | **Open, first-time contributor** |

---

**Health Indicators:**  
- ✅ High merge/close throughput (53 items resolved today)  
- ✅ Active feature PRs targeting clear pain points (skills, titles, computer use, channels)  
- ⚠️ Critical desktop/server UX gaps unaddressed for months  
- ⚠️ Provider compatibility debt accumulating (Responses API, MCP, MiniMax)  
- ⚠️ Several "Closed" issues lack visible fix PRs — may be duplicates or deferred

**Next-version predictors:** Per-session model overrides (#5992), unified provider routing (#6302), dynamic skills (#7033), auto-title sync (#7032), computer use observations (#7037), DataPaw runtime (#6940). Desktop auto-update and daemon mode remain conspicuous by absence.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-15

## 1. Today's Overview
ZeroClaw shows **intense design-phase activity** with 33 issues and 50 PRs updated in 24 hours, but **no releases**. The project is deep in architectural RFCs — 15+ open RFCs covering security, authentication, channel adapters, runtime ownership, telemetry, and evaluation harnesses. PR velocity is high but most are in review ("needs-author-action" or "needs-maintainer-review"), indicating a **bottleneck at maintainer review capacity**. Windows test failures (74 tests) remain unresolved since June. The v0.8.5 stabilization line (frozen Aug 4) targets Aug 30.

## 2. Releases
**No new releases today.** The v0.8.5 stabilization milestone is tracking toward August 30, 2026.

## 3. Project Progress (Merged/Closed in Last 24h)
| Item | Type | Summary |
|------|------|---------|
| [#6663](https://github.com/zeroclaw-labs/zeroclaw/issues/6663) | Issue (closed) | Telegram: show tool-call progress during partial streaming — **wontfix/closed** |
| [#9982](https://github.com/zeroclaw-labs/zeroclaw/issues/9982) | Issue (closed) | Hosted memory proposal (ViBo Cloud API) — **closed as wontfix** |
| 3 PRs merged/closed | PRs | Details not shown in feed; likely small fixes or doc updates |

**Net progress**: More items opened/updated than closed. The project is **accumulating review debt** — 47 open PRs vs 3 merged.

## 4. Community Hot Topics (Most Commented)

| Rank | Item | Comments | Core Need |
|------|------|----------|-----------|
| 1 | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) RFC: Goal mode v1 — bounded foreground Matrix work | 22 | **Multi-turn agent autonomy** — durable pursuit of user goals across turns without coupling restart handoff, web, async child work |
| 2 | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) RFC: Per-execution confirmation tier for high-risk shell commands | 20 | **Shell safety UX** — Claude Code-style allow/ask/deny policy for dangerous commands |
| 3 | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) RFC: ZeroClaw Chat Completions profile | 19 | **OpenAI-compatible API** — enable Open WebUI, LobeChat, Continue.dev, Aider, LangChain, OpenAI SDK clients |
| 4 | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) RFC: Pluggable inbound authentication & canonical principals (Rev 8) | 16 | **Identity & access unification** — OIDC, pluggable providers, canonical principal model for all ingress |
| 5 | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) 74 test failures on Windows (Unix-only commands, paths, encoding) | 15 | **Windows parity** — CI only runs Linux; 74 failures block Windows users |
| 6 | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) RFC: Runtime-owned conversation sessions & transport surface adapters | 14 | **Channel architecture unification** — runtime owns sessions; adapters (ACP, webhooks, web) become transport surfaces |
| 7 | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) RFC: Unified attachment architecture for web chat & channels | 14 | **Cross-channel attachments** — consistent file/image handling across Telegram, web, ACP, etc. |
| 8 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Tracker: Maintainer decision queue for RFCs | 13 | **Governance backlog** — 15+ RFCs awaiting maintainer accept/reject/defer |

**Pattern**: The top issues are all **RFCs (design decisions)**, not bug reports. The community is debating **fundamental architecture** — authentication, session ownership, API compatibility, shell safety, Windows support. Maintainer attention is the scarcest resource.

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Item | Status | Fix PR? |
|----------|------|--------|---------|
| **S1 — Workflow blocked** | [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) Incomplete terminal responses reported as successful (provider: reliable/anthropic/compatible, tool:delegate) | Open, `status:in-progress` | Likely — `vrurg` authored [#9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999) (classify output-limited terminal responses) |
| **S2 — Degraded behavior** | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) 74 test failures on Windows (path semantics, console encoding, Unix-only commands) | Open, `status:accepted`, `status:no-stale` | No PR linked |
| **S2 — Degraded behavior** | [#9759](https://github.com/zeroclaw-labs/zeroclaw/issues/9759) Quickstart allows duplicate enabled webhook ports (port 8090 default) | Open, `status:accepted` | No PR linked |
| **S3 — Minor** | [#9983](https://github.com/zeroclaw-labs/zeroclaw/issues/9983) Fallback model without vision incorrectly reports error cause | Open | No PR linked |
| **Security leak** | [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) High-entropy detector redacts Solana wallet addresses on Telegram; `high_entropy_tokens=false` ignored on channel path | Open, `status:accepted`, `security:leak-detector` | No PR linked |
| **CI flake** | [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) Cron custom-shell test hits `ETXTBSY` under parallel runtime gate, fails unrelated PRs | Open, `status:accepted` | No PR linked |

**Critical gap**: Windows support (S2, 74 failures) has **no active fix PR** since June 10. The S1 terminal response bug has a likely fix in [#9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999) but it's stacked on [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) (not shown).

## 6. Feature Requests & Roadmap Signals

| Feature | Signal Strength | Likely Next Version? |
|---------|-----------------|----------------------|
| **OpenAI Chat Completions API** ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)) | High — 19 comments, broad client ecosystem demand | **Yes** — enables Open WebUI, LobeChat, Continue, Aider, LangChain |
| **Pluggable auth / canonical principals** ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)) | High — Rev 8, `status:in-progress`, `priority:p1` | **Yes** — security milestone blocker |
| **Runtime-owned sessions + transport adapters** ([#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)) | High — 14 comments, architectural refactor | **v0.9+** — major runtime restructuring |
| **Unified attachment architecture** ([#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)) | Medium — 14 comments, cross-channel consistency | **v0.9+** — depends on [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |
| **Shell confirmation tiers (allow/ask/deny)** ([#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)) | Medium — 20 comments, UX safety | **Yes** — `priority:p1`, `status:accepted` |
| **Agent evaluation harness (`zeroclaw eval`)** ([#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065)) | Medium — `status:in-progress`, `status:accepted` | **Yes** — replay + live modes, LLM-as-judge |
| **Telegram provider-grouped paginated /model picker** ([#9895](https://github.com/zeroclaw-labs/zeroclaw/issues/9895)) | Low-Medium — 5 comments, mobile UX | **Likely** — `status:accepted`, small scope |
| **Discord role-based authorization** ([#9970](https://github.com/zeroclaw-labs/zeroclaw/issues/9970)) | Low — 1 comment, `status:in-progress` | **Likely** — additive to user-ID allowlist |
| **Agent export to portable bundle** ([#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986)) | Low — new PR, `size:XL` | **Maybe** — CLI feature, security-sensitive (secrets) |
| **Staged opt-in telemetry** ([#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621)) | Low — 3 comments, `needs-maintainer-review` | **Uncertain** — privacy-sensitive, operator-reviewed reports |

**Roadmap prediction**: v0.8.5 (Aug 30) will likely ship **shell confirmation tiers, OpenAI Chat Completions profile, pluggable auth, agent eval harness, Telegram model picker, Discord roles**. The session/attachment/runtime ownership RFCs ([#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487), [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)) are v0.9+ architecture.

## 7. User Feedback Summary

| Pain Point | Evidence |
|------------|----------|
| **Windows is second-class** | 74 test failures since June; CI only runs Linux ([#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)) |
| **Shell safety UX missing** | Users want Claude Code-style allow/ask/deny for dangerous commands ([#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)) |
| **Cannot use favorite chat UIs** | No OpenAI-compatible API blocks Open WebUI, LobeChat, Continue, Aider ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)) |
| **Telegram redactions break wallet addresses** | Solana addresses redacted even with `high_entropy_tokens=false` ([#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486)) |
| **No agent evaluation story** | Teams cannot benchmark model/prompt quality at scale ([#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065)) |
| **Discord auth too granular** | Must add user IDs individually; roles unsupported ([#9970](https://github.com/zeroclaw-labs/zeroclaw/issues/9970)) |
| **Quickstart footguns** | Duplicate webhook ports silently accepted ([#9759](https://github.com/zeroclaw-labs/zeroclaw/issues/9759)) |
| **Incomplete responses marked success** | Provider ends turn without final answer; runtime reports success ([#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421)) |

**Satisfaction signals**: Active RFC participation (20+ comments on shell safety) shows **invested users**. The ViBo Cloud memory proposal ([#9982](https://github.com/zeroclaw-labs/zeroclaw/issues/9982)) was closed as `wontfix` — community prefers self-hosted.

## 8. Backlog Watch (Stalled / Needs Maintainer Attention)

| Item | Days Open | Why It Matters | Blocked By |
|------|-----------|----------------|------------|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) Windows 74 test failures | 66 | Blocks Windows users; CI blind spot | No owner; needs Windows CI runner + path/encoding fixes |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Maintainer decision queue | 42 | 15+ RFCs stuck awaiting accept/reject/defer | **Maintainer bandwidth** — single tracker for all design decisions |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) Security posture & universal ingress policy | 80 | Cross-cutting security architecture | Awaits maintainer review (`needs-maintainer-review`) |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) Provenance & conversation binding for cron/autonomous turns | 81 | Autonomous agent accountability | Revision 2 posted Aug 5; needs review |
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) Runtime-owned security decision pipeline | 73 | Security architecture v0.9.0 | Rev 6, `status:accepted` but no implementation PR visible |
| [#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) Unified package/capability/config catalog | 22 | Product-level plugin/integration registry | `status:accepted` but depends on [#8908](https://github.com/zeroclaw-labs/zeroclaw/issues/8908), [#8909](https://github.com/zeroclaw-labs/zeroclaw/issues/8909) |
| [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) Staged opt-in telemetry | 14 | Product usage visibility for maintainers | `needs-maintainer-review`, privacy-sensitive |
| [#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) Restore ADR baseline & audit RFC decisions | 42 | Governance hygiene — decisions not recorded | Cleanup tracker, low priority |
| [#9967](https://github.com/zeroclaw-labs/zeroclaw/issues/9967) Harness evaluation framework tracker | 2 | Benchmark selection, baseline runs | New tracker, needs owner |
| [#9972](https://github.com/zeroclaw-labs/zeroclaw/issues/9972) Eliminate non-localized user-facing output | 2 | i18n compliance | Cleanup tracker, new |

**Systemic risk**: The **maintainer decision queue ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692))** is the central bottleneck. 15+ high-risk RFCs (security, auth, runtime ownership, telemetry, catalog) sit in `needs-maintainer-review` or `status:accepted` without implementation. Windows support has **no champion**. The project needs either **more maintainer capacity** or **delegated RFC ownership** to unblock v0.9 architecture work.

---

**Health Score**: 🟡 **Moderate** — High design velocity but review bottleneck accumulating; critical platform gap (Windows); S1 bug has fix in flight; v0.8.5 scope clear but stabilization window tight (15 days).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*