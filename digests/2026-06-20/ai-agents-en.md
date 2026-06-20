# OpenClaw Ecosystem Digest 2026-06-20

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-20 00:39 UTC

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

# OpenClaw Project Digest — 2026-06-20

---

## 1. Today's Overview

OpenClaw remains in a period of exceptionally high activity, with **500 issues** and **500 PRs** updated in the last 24 hours — a volume that signals both a rapidly growing user base and a project under significant maintenance pressure. Of those, 442 issues and 457 PRs remain open, indicating the team is struggling to keep pace with incoming reports. A new beta release, **v2026.6.9-beta.1**, shipped today with a focus on Telegram delivery improvements. The project is clearly in a stabilization phase following the major v2026.6.x series rollout, with many regressions and migration pain points still being triaged.

---

## 2. Releases

### v2026.6.9-beta.1 (2026-06-20)

**Highlights:**
- **Richer Telegram delivery:** Telegram now sends rich HTML, preserves rich markdown and sticker paths, renders progress drafts and command output more faithfully, and keeps mentions and spooled handlers on the correct delivery path. This addresses multiple regressions introduced in the v2026.6.x series (PRs #93286, #93164, #93124, #93364, #9313x).

**Context:** This beta directly responds to user-reported Telegram breakage (see Issue #93794, #93905) and continues the pattern of incremental fixes following the large v2026.6.1 migration wave.

---

## 3. Project Progress

No PRs are explicitly marked as merged/closed in today's data window, but several are in **"ready for maintainer look"** status and close to landing:

| PR | Description | Status |
|---|---|---|
| [#94369](https://github.com/openclaw/openclaw/pull/94369) | fix(memory-wiki): exclude durable reference pages from stale report | 👀 Ready for maintainer |
| [#94038](https://github.com/openclaw/openclaw/pull/94038) | fix(matrix): recognize MiniMax mm: namespaced reasoning tags in monitor replies | 👀 Ready for maintainer |
| [#95129](https://github.com/openclaw/openclaw/pull/95129) | fix(cron): persist failure alert delivery status | 👀 Ready for maintainer |
| [#95128](https://github.com/openclaw/openclaw/pull/95128) | fix(compaction): count user-message image blocks in cut-point estimator | 👀 Ready for maintainer |
| [#94096](https://github.com/openclaw/openclaw/pull/94096) | fix(usage): reject inverted startDate-endDate range in usage.cost | 👀 Ready for maintainer |
| [#93926](https://github.com/openclaw/openclaw/pull/93926) | fix(matrix): recognize MiniMax mm: namespaced reasoning tags in monitor suppression | 👀 Ready for maintainer |

Several new PRs opened today target **Claude ACP session stability** (#95130), **lossless-claw LLM policy auto-population** (#95140), **Ollama thinking level discovery** (#95139), **per-DM model overrides** (#95120), and **Telegram forum topic display** (#95134) — all reflecting active community contribution.

---

## 4. Community Hot Topics

The most-discussed issues reveal a project grappling with the consequences of rapid architectural migration:

1. **[#88838](https://github.com/openclaw/openclaw/issues/88838)** — *Track core session/transcript SQLite migration via accessor seam* (31 comments, 👍1)
   The highest-engagement issue. Users and maintainers are debating how to safely migrate session/transcript state to SQLite without a risky big-bang rewrite. This is the meta-issue underlying many of the session-state bugs below.

2. **[#85333](https://github.com/openclaw/openclaw/issues/85333)** — *openclaw doctor --fix 4-5x slower on 2026.5.20* (13 comments, 👍1)
   A performance regression in the doctor command caused by session snapshot path traversal bottleneck. Stale-tagged but still painful for affected users.

3. **[#91588](https://github.com/openclaw/openclaw/issues/91588)** — *Gateway Memory Leak — RSS grows from 350MB to 15.5GB* (12 comments, 👍1, **P0**)
   A critical stability issue. The gateway process grows without bound over days, triggering OOM kills and restart cycles. No fix PR linked.

4. **[#63829](https://github.com/openclaw/openclaw/issues/63829)** — *Per-agent memory-wiki vault configuration* (10 comments, 👍9)
   The most upvoted feature request. Multi-agent setups need isolated knowledge wikis rather than a shared global vault. High community demand.

5. **[#92043](https://github.com/openclaw/openclaw/issues/92043)** — *180s compaction timeout too aggressive* (8 comments, 👍1)
   The lowered default timeout from 900s→180s causes legitimate long compactions to fail every turn with no partial progress reuse.

**Underlying pattern:** The v2026.6.x series introduced SQLite-backed session storage, new compaction defaults, and cron store migration — all of which generated cascading regressions. The community's core need is **stability and predictability** after major infrastructure changes.

---

## 5. Bugs & Stability

Ranked by severity:

### 🔴 Critical (P0)

| Issue | Description | Fix PR? |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway memory leak: 350MB → 15.5GB, OOM crashes | ❌ None linked |
| [#90378](https://github.com/openclaw/openclaw/issues/90378) | Cron store silently migrated to SQLite; new jobs default to `delivery.mode=announce` causing channel errors | ❌ None linked |

### 🟠 High (P1)

| Issue | Description | Fix PR? |
|---|---|---|
| [#90325](https://github.com/openclaw/openclaw/issues/90325) | Matrix channel dispatch broken in v2026.6.1 — TypeError on every inbound message | ❌ None linked |
| [#92415](https://github.com/openclaw/openclaw/issues/92415) | Session model snapshot never refreshed after `/model` switch — affects context window, reasoning, branch summary | ❌ None linked |
| [#91931](https://github.com/openclaw/openclaw/issues/91931) | Preseeded SOUL.md/IDENTITY.md causes bootstrap to auto-complete and delete BOOTSTRAP.md before first run | ❌ None linked |
| [#92076](https://github.com/openclaw/openclaw/issues/92076) | Subagent completion delivery fails when requester session is inactive and transcript is locked | ❌ None linked |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse hook spawns CPU-bound processes, stalls gateway RPC | ❌ None linked |
| [#90840](https://github.com/openclaw/openclaw/issues/90840) | Subagent completion delivered as raw worker output instead of parent summary (regression) | ❌ None linked |
| [#90082](https://github.com/openclaw/openclaw/issues/90082) | active-memory circuit breaker too aggressive; fallback prompt pollutes main session | ❌ None linked |
| [#92094](https://github.com/openclaw/openclaw/issues/92094) | message tool action=send returns "unsupported channel: telegram" | ❌ None linked |

### 🟡 Medium (P2)

| Issue | Description | Fix PR? |
|---|---|---|
| [#91223](https://github.com/openclaw/openclaw/issues/91223) | Active memory injection breaks prompt cache hit rate (99.9% → 22%) | ❌ None linked |
| [#91212](https://github.com/openclaw/openclaw/issues/91212) | delivery-recovery fails after gateway restart — recovery starts before channel transport ready | ❌ None linked |
| [#93928](https://github.com/openclaw/openclaw/issues/93928) | drive list/info ignore pagination; false "File not found" past page 1 | ❌ None linked |
| [#90711](https://github.com/openclaw/openclaw/issues/90711) | launchd plist StandardErrorPath hardcoded to /dev/null, hides all gateway stderr | ❌ None linked |

**Notable fix PRs in progress:**
- [#95128](https://github.com/openclaw/openclaw/pull/95128) — Compaction cut-point estimator now counts image blocks (addresses [#90639](https://github.com/openclaw/openclaw/issues/90639))
- [#95129](https://github.com/openclaw/openclaw/pull/95129) — Cron failure alert delivery status persistence
- [#95130](https://github.com/openclaw/openclaw/pull/95130) — Claude ACP primitive adapter frame fix

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signals |
|---|---|---|
| **Per-agent memory-wiki vault** | [#63829](https://github.com/openclaw/openclaw/issues/63829) (👍10) | Highest-demand feature; multi-agent isolation is a clear gap |
| **Per-channel/per-DM model override** | [#53638](https://github.com/openclaw/openclaw/issues/53638) (👍2) | PR [#95120](https://github.com/openclaw/openclaw/pull/95120) just opened adding `directUserId` support — likely in next release |
| **Topic-session families** | [#90916](https://github.com/openclaw/openclaw/issues/90916) | Named context lanes per assistant; no PR yet |
| **Webchat inline button support** | [#46656](https://github.com/openclaw/openclaw/issues/46656) | Buttons work on Telegram but silently dropped in Webchat |
| **Bounded pre-compaction memory flush** | [#90354](https://github.com/openclaw/openclaw/issues/90354) | Guardrails for append size and validation |
| **External reranker for memory-core** | [#92725](https://github.com/openclaw/openclaw/pull/92725) (PR open) | Large PR; would enable hybrid search with external rerankers |

**Prediction for next release (v2026.6.10 or v2026.7.0):** Expect per-DM model overrides, compaction image-block fixes, cron alert persistence, and continued Telegram/Matrix delivery hardening. The memory-wiki per-agent vault is the most-requested feature but likely requires more design work.

---

## 7. User Feedback Summary

**Dominant pain points:**

- **Migration whiplash:** The v2026.6.x series introduced SQLite-backed sessions, new compaction defaults, and cron store changes that broke workflows silently. Users upgrading from 5.28/5.12 to 6.1+ experienced Matrix dispatch failures, cron delivery mode changes, and bootstrap deletion — all without clear migration guidance.
- **Session stability:** Memory leaks, compaction timeouts, subagent delivery failures, and model-switch stale snapshots are the most critical user-facing issues. These affect core functionality and erode trust.
- **Telegram regressions:** Multiple reports of broken Telegram Web support, missing usage footers, and message delivery issues. The v2026.6.9-beta.1 release directly addresses some of these.
- **Performance:** The `doctor --fix` slowdown (4-5x), active-memory cache hit rate collapse (99.9% → 22%), and gateway slowdown under multi-session load are significant operational concerns.
- **Positive signal:** The community is actively contributing PRs — 15+ new PRs in the last 24 hours — indicating strong engagement despite the frustration.

---

## 8. Backlog Watch

These important issues have been open for weeks/months with no resolution and limited maintainer response:

| Issue | Age | Description | Risk |
|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 11 days | **P0** Gateway memory leak to 15.5GB | Production outages |
| [#90325](https://github.com/openclaw/openclaw/issues/90325) | 16 days | **P1** Matrix channel completely broken since 6.1 | Channel unusable |
| [#63829](https://github.com/openclaw/openclaw/issues/63829) | 72 days | Per-agent memory-wiki vault (most upvoted) | Multi-agent users blocked |
| [#90711](https://github.com/openclaw/openclaw/issues/90711) | 15 days | launchd stderr discarded — hides all diagnostics | Debugging impossible on macOS |
| [#90082](https://github.com/openclaw/openclaw/issues/90082) | 16 days | active-memory circuit breaker pollutes session | Silent data corruption |
| [#78640](https://github.com/openclaw/openclaw/issues/78640) | 14 days | EPERM on Windows memory index — no fallback | Windows users blocked |
| [#92057](https://github.com/openclaw/openclaw/issues/92057) | 9 days | Gateway slow/timeout under multi-session load | Scalability ceiling |

**Recommendation:** The gateway memory leak (#91588) and Matrix dispatch breakage (#90325) are the two most urgent items — one causes production outages, the other renders a major channel completely unusable. Both are P0/P1 with no linked fix PRs and deserve immediate maintainer attention.

---

*Data source: OpenClaw GitHub (github.com/openclaw/openclaw), snapshot 2026-06-20. All links reference openclaw/openclaw issues and PRs.*

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Report: Personal AI Agent & Assistant Open-Source Landscape

**Date:** 2026-06-20 | **Projects Analyzed:** 10 | **Generated by OWL**

---

## 1. Ecosystem Overview

The personal AI agent and assistant open-source ecosystem is in a period of explosive growth and intense competition. Ten tracked projects span a spectrum from lightweight, single-device agents (PicoClaw, NullClaw) to full-featured multi-platform orchestration platforms (OpenClaw, ZeroClaw, Hermes Agent). The dominant theme in 2026 is the **migration to SQLite-backed session storage, multi-model provider compatibility, and cross-platform channel delivery** — all of which are generating significant regression surface as projects scale. Community expectations have risen sharply: users demand Telegram/Discord/Slack reliability, per-agent memory isolation, and enterprise-grade security features like OIDC auth and credential proxying. Projects that shipped major releases in the past 48 hours (OpenClaw v2026.6.9-beta.1, Hermes v0.17.0, ZeroClaw v0.8.1) are now in triage mode, while others (IronClaw, CoPaw) are accumulating features for upcoming milestones.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Open Issues | Open PRs | Latest Release | Health Score |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 442 | 457 | v2026.6.9-beta.1 | ⚠️ Strained — high volume, many P0/P1 bugs open |
| **Hermes Agent** | 50 | 50 | 40 | 34 | v0.17.0 ("The Reach Release") | 🟡 Active — post-release triage, strong responsiveness |
| **ZeroClaw** | 50 | 50 | 42 | 47 | v0.8.1 | 🟡 Active — stabilization phase, review backlog |
| **CoPaw** | 11 | 16 | 10 | 10 | v1.1.12.post1 | 🟢 Healthy — fast fix turnaround, good close ratio |
| **NanoBot** | 9 | 33 | — | — | None (v0.2.x dev) | 🟢 Healthy — aggressive feature expansion |
| **IronClaw** | 5 | 30 | 4 | 18 | None (Reborn rewrite) | 🟢 Healthy — coordinated architectural rollout |
| **PicoClaw** | 4 | 7 | — | — | v0.3.0-nightly.20260619 | 🟡 Moderate — stale PRs, review bottleneck |
| **NanoClaw** | 0 | 5 | — | — | None | 🟡 Quiet — no releases, PRs awaiting review |
| **LobsterAI** | — | — | — | — | 2026.6.18 | 🟡 Stable — release-driven, low PR throughput |
| **NullClaw** | 2 | 1 | — | — | None | 🔴 Slow — 100-day-old issues, minimal activity |

**Health Score Key:** 🟢 Healthy | 🟡 Active/Moderate | ⚠️ Strained | 🔴 At Risk

---

## 3. OpenClaw's Position

### Advantages vs Peers

- **Largest community footprint:** 500 issues and 500 PRs in 24 hours dwarfs all other projects combined. This signals the largest installed base and the most active contributor ecosystem.
- **Broadest channel coverage:** Telegram, Matrix, Discord, Slack, and more — OpenClaw is the de facto multi-channel agent platform. The v2026.6.9-beta.1 Telegram rich-delivery fixes demonstrate continued investment.
- **Most ambitious infrastructure migration:** The SQLite-backed session storage, cron store migration, and compaction overhaul represent a genuine architectural evolution — peers are watching this as a reference implementation.
- **Highest visibility for multi-agent patterns:** Per-agent memory-wiki vaults (Issue #63829, 👍10), per-DM model overrides, and topic-session families are the most-requested features across the entire ecosystem.

### Technical Approach Differences

| Dimension | OpenClaw | Peers |
|---|---|---|
| **Session storage** | SQLite-backed (migrating) | Hermes: session replays; ZeroClaw: SOP run-store; NanoBot: legacy path files |
| **Compaction** | Aggressive defaults (180s timeout) | CoPaw: scroll context manager; Hermes: headroom-ai compression (requested) |
| **Channel delivery** | Rich HTML/Markdown per channel | ZeroClaw: Discord components/modals; NanoBot: basic multi-channel |
| **Multi-agent** | Per-agent vaults, topic sessions | PicoClaw: agent collaboration bus; NanoBot: subagent model overrides |
| **Memory architecture** | Global vault + active memory circuit breaker | CoPaw: ChromaDB vector index; ZeroClaw: memory dominance complaints |

### Community Size Comparison

OpenClaw's 500-issue/500-PR daily volume is approximately **10x Hermes Agent** (50/50), **10x ZeroClaw** (50/50), and **50x CoPaw** (11/16). However, raw volume is a double-edged sword: OpenClaw also has the highest ratio of unresolved P0/P1 bugs (12+ critical issues with no fix PRs), suggesting community growth is outpacing maintainer bandwidth.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging simultaneously across multiple projects, indicating ecosystem-wide needs:

### 4.1 Multi-Provider LLM Compatibility
- **Projects affected:** Hermes Agent, OpenClaw, CoPaw, ZeroClaw, NanoBot
- **Specific need:** Users expect uniform behavior across OpenAI, Ollama, DeepSeek, Zhipu, Gemini, and custom OpenAI-compatible providers. Metadata leaking to strict providers (#47868, #48523 in Hermes), Zhipu connection test failures (#5330 in CoPaw), and Gemini history ordering violations (#6302 in ZeroClaw) all stem from the same root cause: the OpenAI-completions abstraction leaks under non-OpenAI providers.

### 4.2 Context Window & Compaction Management
- **Projects affected:** All 10
- **Specific need:** As agents accumulate long sessions, every project is grappling with context overflow. Approaches range from aggressive compaction (OpenClaw's 180s timeout), to scroll-based retrieval (CoPaw's #5321), to external compression services (Hermes's headroom-ai request #39691). The 37GB ChromaDB index in CoPaw (#4795) and OpenClaw's compaction image-block miscount (#95128) show this is an unsolved problem at scale.

### 4.3 Channel Delivery Reliability
- **Projects affected:** OpenClaw, ZeroClaw, NanoBot, Hermes Agent, PicoClaw
- **Specific need:** Telegram rich formatting, Discord 2000-char chunking (NanoClaw #2812), Slack thread hydration (ZeroClaw #6055), and message delivery recovery after gateway restarts (OpenClaw #91212) are all recurring themes. Users expect channel delivery to be as reliable as local chat.

### 4.4 Security Hardening for Multi-User Deployments
- **Projects affected:** Hermes Agent, ZeroClaw, PicoClaw, OpenClaw
- **Specific need:** Credential proxy daemons (Hermes #4656), OIDC authentication (ZeroClaw #7141), Telegram permission tiers by chat type (PicoClaw #3114), and SSRF guard enhancements (PicoClaw #3143) all point to a shared transition from single-user to multi-user/team deployment models.

### 4.5 Memory Isolation & Agent State Management
- **Projects affected:** OpenClaw, CoPaw, ZeroClaw, PicoClaw
- **Specific need:** Per-agent memory-wiki vaults (OpenClaw #63829), ChromaDB index maintenance (CoPaw #4795), memory dominance in prompts degrading agent quality (ZeroClaw #5844), and agent "memory loss" (PicoClaw #3150) all reflect the challenge of persistent, isolated agent state.

---

## 5. Differentiation Analysis

### Feature Focus Matrix

| Project | Primary Focus | Secondary Focus | Target User |
|---|---|---|---|
| **OpenClaw** | Multi-channel orchestration, session infrastructure | Multi-agent, knowledge wikis | Power users, multi-platform operators |
| **Hermes Agent** | Desktop app UX, broad platform integrations | Security hardening, provider compatibility | Desktop-first users, privacy-conscious |
| **ZeroClaw** | Multi-agent runtime, daemon architecture | Enterprise auth (OIDC), SOP durability | Enterprise teams, multi-agent operators |
| **CoPaw** | Memory subsystem (ChromaDB), context management | Mobile UX, multi-model ordering | Daily-driver users, mobile access |
| **NanoBot** | Subagent model overrides, channel relay | TUI mode, human-in-the-loop (SuspendTurn) | Developers, REPL-oriented users |
| **IronClaw** | Reborn rewrite (Rust), hosted platform | Feature flags, concurrent turn execution | Hosted SaaS, performance-sensitive |
| **PicoClaw** | Embedded/edge agent (Go), collaboration bus | Cross-platform (Windows), security (SSRF) | IoT/edge, resource-constrained environments |
| **NanoClaw** | Approval workflows, permission inheritance | Apple Container runtime, macOS-native | macOS developers, approval-heavy workflows |
| **LobsterAI** | Multi-format collaboration (Word/PPT/Excel) | Voice input, AI Collaborator platform | Enterprise collaboration, non-technical users |
| **NullClaw** | Minimalist Zig-based agent | Cross-platform (Android/Termux) | Mobile developers, minimalists |

### Technical Architecture Spectrum

```
Lightweight / Single-Purpose          Heavyweight / Platform
◄──────────────────────────────────────────────────────────►
NullClaw → PicoClaw → NanoBot → NanoClaw → CoPaw → Hermes → ZeroClaw → OpenClaw → IronClaw
(Zig)     (Go)       (Python)  (Rust?)    (Python) (Python) (Rust)    (TypeScript) (Rust)
```

- **Zig/Go projects** (NullClaw, PicoClaw) prioritize minimal resource footprint and cross-platform compilation.
- **Python projects** (OpenClaw, Hermes, CoPaw, NanoBot) prioritize rapid iteration, broad library ecosystems, and accessibility.
- **Rust projects** (IronClaw, ZeroClaw, NanoClaw) prioritize performance, memory safety, and long-term maintainability.

---

## 6. Community Momentum & Maturity

### Activity Tiers

**Tier 1 — Hyperactive (>40 issues + >40 PRs/day):**
- **OpenClaw:** 500/500 — ecosystem leader by volume, but struggling with quality control. 12+ P0/P1 bugs open without fix PRs.
- **Hermes Agent:** 50/50 — just shipped v0.17.0 (800 merged PRs, 245 contributors), now in rapid triage. Strong maintainer responsiveness.
- **ZeroClaw:** 50/50 — v0.8.1 patch cycle with 207 commits, 45 contributors. Stabilization mode.

**Tier 2 — Active (10–40 issues + PRs/day):**
- **CoPaw:** 11/16 — best-in-class fix turnaround. 6 PRs merged today, critical ChromaDB issue resolved. Healthy contributor ratio.
- **IronClaw:** 5/30 — low issue count but high PR velocity. Coordinated Reborn rewrite with stacked PRs. No user-facing release yet.
- **NanoBot:** 9/33 — aggressive feature expansion. Subagent overrides, TUI mode, Discord overhaul all in flight.

**Tier 3 — Moderate (1–10 issues + PRs/day):**
- **PicoClaw:** 4/7 — stale PR bottleneck. 4 PRs open >10 days without review. Agent collaboration bus (#2937) open 57 days.
- **NanoClaw:** 0/5 — quiet day, but PRs have been open 4+ weeks without maintainer engagement.
- **LobsterAI:** Release-driven — shipped 2026.6.18 but no PR activity. UX bugs closed stale.

**Tier 4 — Slow (<5 issues + <5 PRs/day):**
- **NullClaw:** 2/1 — two issues open 57–100 days. Minimal maintainer presence. Android/Termux user segment underserved.

### Maturity Assessment

| Stage | Projects |
|---|---|
| **Pre-release / Early dev** | NullClaw, NanoClaw, TinyClaw*, Moltis*, ZeptoClaw* |
| **Active feature development** | NanoBot, IronClaw, PicoClaw |
| **Post-release stabilization** | OpenClaw, Hermes Agent, ZeroClaw |
| **Mature with incremental updates** | CoPaw, LobsterAI |

*No activity in the last 24 hours.

---

## 7. Trend Signals

### 7.1 The "Provider-Agnostic" Gap Is the #1 User Pain Point
Across Hermes Agent, CoPaw, ZeroClaw, and OpenClaw, the most consistent complaint is that "works with OpenAI, breaks with everything else." As the ecosystem diversifies beyond OpenAI-native users, **provider compatibility testing is becoming a first-class engineering requirement**, not an afterthought. Projects that solve this (via abstraction layers, provider-specific adapters, or conformance test suites) will capture the fastest-growing user segments.

### 7.2 Memory Architecture Is the Next Battleground
Every project is hitting memory-related crises: unbounded index growth (CoPaw 37GB), memory dominance degrading agent quality (ZeroClaw), agent "amnesia" (PicoClaw), and per-agent isolation demands (OpenClaw). The winning architecture will likely combine **vector search + recency decay + per-agent isolation + automatic maintenance** — no project has this fully solved yet.

### 7.3 Enterprise Security Is Table Stakes
OIDC auth (ZeroClaw), credential proxy daemons (Hermes), SSRF guards (PicoClaw), and approval workflows (NanoClaw) are all being demanded simultaneously. The ecosystem is transitioning from hobbyist/individual use to **team and enterprise deployment**, and security features are no longer optional differentiators — they're baseline requirements.

### 7.4 The Compaction / Context Problem Has No Winner
OpenClaw's aggressive 180s timeout, CoPaw's scroll context manager, Hermes's headroom-ai compression request, and ZeroClaw's context budget exceeded on turn 1 all represent different bets on the same unsolved problem. **Context management is the hardest technical problem in personal AI agents today**, and the project that solves it elegantly will have a significant competitive advantage.

### 7.5 Multi-Agent Orchestration Is Moving from Feature Request to Architecture
Per-agent memory vaults (OpenClaw), agent collaboration buses (PicoClaw), subagent model overrides (NanoBot), SOP run-stores (ZeroClaw), and concurrent turn execution (IronClaw) all point to a future where **single-agent is the exception, not the rule**. The ecosystem is converging on multi-agent orchestration as the default deployment model.

### 7.6 Mobile and Edge Are Underserved
NullClaw's Android/Termux struggles, PicoClaw's Windows path separator bug (71 days open), and CoPaw's mobile UX complaints all signal that **the ecosystem is desktop/laptop-centric**. As AI agents move to phones, IoT, and edge devices, there's a significant gap in cross-platform testing and optimization.

---

*Report generated by OWL · Data sourced from GitHub snapshots, 2026-06-20 · All issue/PR references link to respective project repositories.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-20

## 1. Today's Overview

NanoBot shows active development momentum with 33 PRs touched and 9 issues updated in the last 24 hours, though no new release was cut. The project is in an aggressive feature-expansion phase: subagent overrides, better CI reliability, a TUI mode, and substantial channel improvements for Discord, Feishus, and XAML are all pending. Three open bug reports spell out concrete regressions in the v0.2.x line (premature heartbeat messaging, image-strip side effects, LLM stream stalls), and two resolved design gaps around context-window awareness signal meaningful maturity in the fallback and provider-compat layers.

## 2. Releases

None today.

## 3. Project Progress

Ten PRs were closed or merged in the last 24 hours, all of which either landed fixes or tidied up long-running feature work:

- **`delete_session` synchronisation** (PR #4246): removes legacy path files when a session is deleted, directly fixing a resurfacing bug where history revived itself via the legacy directory (`~/.nanobot/sessions/`).
- **OpenAI image-reference edits** (PR #4394): routes requests with reference images to `/images/edits`, adds multipart upload for `image[\]`, and rejects incompatible combinations with a clean error.
- **Feishu WebSocket card parsing** (PR #4342): corrects three structural mismatches between the WebSocket card format and the parsing code, which was rendering cards as `[Card]` placeholders.
- **Discord overhaul Phase 1** (PR #2655): complete rewrite from a raw WebSocket loop to `discord.py 2.x`, adding slash commands and interactive UI components. Closed as invalid after months, clearing the queue.
- **MCP streamable-HTTP `httpx` timeout** (PR #4230): restores httpx default timeout protection, removing an edge case where TCP-reachable but unresponsive servers could stall startup indefinitely.
- **Gateway method preservation** (PR #4373): ensures `_channel_delivery` messages survive proactive memory replay and consolidation routing, so channel-bound delivery context is not lost.

These merges clean up long-standing bugs and open the subagent subsystem for the override and aggregation work still in PR.

## 4. Community Hot Topics

- **Subagent model override and aggregation** (PRs #4415, #4414): two fresh branches that add per-spawn model selection and an optional `aggregated` result mode. These land together and suggest the team is prioritising multi-model flexibility.
- **Per-model context-window for fallbacks** (Issue #4389): the clearest statement of a gap where `contextWindowTokens` is globally set and breaks when a fallback model has a smaller window — currently a silent prompt-overflow risk.
- **Heartbeat result delivery to originating channel** (Issue #4418): a correctness fix for HEARTBEAT.md jobs broadcasting results to the wrong chat session.
- **`SuspendTurn` sentinel for async-human-in-the-loop** (PR #4411): tools can now end a turn cleanly without producing a final message; the conversation resumes on the next inbound message. This is the shortest path to human-approval workflows.
- **Inline TUI for `nanobot agent`** (PR #4329): offers an interactive terminal UI for agent sessions, lowering the friction for developers who prefer REPL-style interaction over WebUI.
- **`tools.filesystem.enable` toggle** (PR #4138): closes a parity gap with `tools.exec.enable` and `tools.web.enable`, useful for remote-sandbox setups.

## 5. Bugs & Stability

Three open issues describe regressions in the recent v0.2.x line. They should be triaged for a patch release:

1. **LLM stream stall exceeds 90 seconds** (Issue #4013, open but raised 2026-05-26) — a hard-coded timeout surfaces after upgrade from v0.1.5post2; the user perceives this as "the LLM never responds", killing any real work.
2. **Heartbeat cron job now sends empty "nothing to report" messages** (Issue #4410, created 2026-06-19) — introduced by the cron-session-binding refactor (a326ba40). The agent/loop.py lines 1008-1009 always delivers the response. PR #4412 already proposes the fix.
3. **Image-strip fallback leaks file path and re-prompts without image** (Issue #4345, closed 2026-06-19) — the corrected fallback appends text that can imply the model saw the image it never received, and it exposes the source file path.

Closed bugs resolved no MCP progress notifications (Issue #4052) — now fixed in tree.

## 6. Feature Requests & Roadmap Signals

Requests that should appear on a v0.2.2 or v0.3 watchlist:

- **`contextWindowTokens` per model for fallbacks** (Issue #4389) — given the active multi-model fallback work, this is a natural follow-up.
- **`spawn` model override** (PR #4415) — already in tree, likely to merge in the current batch.
- **`subagentResultMode: aggregated`** (PR #4414) — flagged for a use case that needs combined turn-in results, likely agentsOps workflows.
- **`SuspendTurn` for async and human-in-the-loop** (PR #4410) — future work on pause/await can build on this sentinel.
- **`tools.filesystem.enable` config flag** (PR #4138) — closes gap in the toggle trio and enables locked-down MCP-only deployments.

## 7. User Feedback Summary

Dissatisfaction in the past 24h centres on post-upgrade regressions: a silent LLM stream stall (#4013), the forcing of unrequested messages from cron jobs (#4410), and the endpoint name change that left some users confused. Satisfaction is implicit in the correction work — the image-reference edit landing and the deletion fix show responsiveness. The perceived value is in the multi-model and channel-relay work, with users pushing for more granular per-model overrides and correct channel-bound routing.

## 8. Backlog Watch

These older, quieter items deserve a second look:

- **XMPP channel PR (#1945)** — updated as recently as 2026-06-19 but still open, with the offer "it works for me, might work for you too". Either needs a maintainer to shepherd it close or a clear decision to close (last call).
- **CLI inline TUI (#4329)** — a 2026-06-13 PR with real surface area; the feedback on UX polish is probably useful now before it drifts further from `main`.
- **Memory consolidation with delivery context (#4373)** — now open, referencing a separate refactor. Should be re-validated after the pending delivery changes above.
- **Rich Telegram messaging API 10.1 (Issue #4413)** — filed in 2026-06-19 it has no PR yet; this is a relatively small markdown-to-Telegram-format work item, but users are pushing it so a quick win exists if someone converts the converter fast.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-20

---

## 1. Today's Overview

Hermes Agent is in a period of intense post-release activity following the launch of **v0.17.0 "The Reach Release"** on June 19. The project shows exceptional vitality: ~1,475 commits and ~800 merged PRs went into v0.17.0 alone, with 245 community contributors. Today's numbers remain high — 50 issues and 50 PRs updated in the last 24 hours (40 open/active issues, 34 open PRs). The volume of incoming bug reports, feature requests, and community PRs indicates a rapidly growing and highly engaged user base. Maintainer responsiveness appears solid, with 10 issues and 16 PRs already closed today despite the v0.17.0 release being only one day old.

---

## 2. Releases

### v0.17.0 — "The Reach Release" (Published 2026-06-19)

| Metric | Value |
|---|---|
| Commits since v0.16.0 | ~1,475 |
| Merged PRs since v0.16.0 | ~800 |
| Files changed | 1,693 |
| Lines added / deleted | 235,390 / 50,730 |
| Issues closed | 300+ |
| Community contributors | 245 |

**Context:** v0.16.0 ("put Hermes on your desktop") was the Desktop launch release. v0.17.0 is labeled "The Reach Release," suggesting a focus on extending Hermes into new environments, platforms, or capabilities. The sheer scale of changes (~800 PRs) implies significant feature additions, refactors, and ecosystem expansion. Early user reports (see Bugs & Stability below) are already surfacing regressions — consistent with a release of this magnitude.

**Migration note:** Users upgrading from v0.16.0 should review configuration changes carefully, particularly around model provider settings, gateway session handling, and desktop app consent flows, as multiple open issues report regressions in these areas.

---

## 3. Project Progress (Closed/Merged PRs Today)

| PR | Status | Summary |
|---|---|---|
| [#49243](https://github.com/NousResearch/hermes-agent/pull/49243) | ✅ Merged | Fix: prevent infinite restart loop on session resume after gateway crash/shutdown |
| [#49240](https://github.com/NousResearch/hermes-agent/pull/49240) | ✅ Merged | Fix: silence raft platform plugin's periodic WARNING log spam |
| [#45296](https://github.com/NousResearch/hermes-agent/pull/45296) | ✅ Merged | Feature: language-aware session titles with pinned language support (Claude Code-inspired) |
| [#49287](https://github.com/NousResearch/hermes-agent/pull/49287) | ✅ Merged | Fix: log CLI memory-provider shutdown hook failures |
| [#49282](https://github.com/NousResearch/hermes-agent/pull/49282) | ✅ Merged | Fix: prevent model whitelist from stripping prompt/source images in FAL image tool |

**Key takeaway:** Today's merged PRs are heavily focused on **stability and regression fixes** — the team is actively triaging v0.17.0 fallout. The most critical fix is [#49243](https://github.com/NousResearch/hermes-agent/pull/49243), which resolves an infinite boot-loop that could render the gateway unusable after a session interruption. The session title feature merged today also signals ongoing UX polish inspired by Claude Code's latest releases.

---

## 4. Community Hot Topics

### Most Discussed Issues

| # | Issue | Comments | 👍 | Core Need |
|---|---|---|---|---|
| [#4656](https://github.com/NousResearch/hermes-agent/issues/4656) | Credential proxy daemon — zero-knowledge HTTP/HTTPS broker | 11 | 1 | **Security**: Users want a hardened credential management layer that prevents child processes from accessing secrets |
| [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) | Integrate headroom-ai for tool output compression | 6 | 9 | **Cost/efficiency**: Community wants smarter context compression that reduces token waste from verbose tool outputs |
| [#38478](https://github.com/NousResearch/hermes-agent/issues/38478) | Camofox browser screenshots cropped | 6 | 0 | **Reliability**: Browser tool regression blocking web automation workflows |
| [#41625](https://github.com/NousResearch/hermes-agent/issues/41625) | MCP tools discovered but not exposed to agent in TUI mode | 5 | 1 | **Integration**: MCP tool discovery broken in TUI path — now closed |
| [#39281](https://github.com/NousResearch/hermes-agent/issues/39281) | Hermes fails with gemma4 on ollama backend | 4 | 0 | **Provider compatibility**: Gemma4 token limit handling — now closed but reopened as #49297 |

### Analysis of Underlying Needs

1. **Security hardening** is a recurring demand. Issue #4656 builds on earlier work (#3628 env scoping, #4432 PID namespace isolation) and calls for a credential proxy daemon — users want enterprise-grade secret management baked in.
2. **Token/cost optimization** is the highest-demand feature category. The headroom-ai compression request (#39691, 9👍) and the context compression bug (#49307, P1) together show users are hitting context window limits and want smarter compression, not just summarization.
3. **Provider compatibility** remains fragile — Ollama/OpenCode Go backends generate multiple issues (#39281, #49297, #47868, #48523), suggesting Hermes's OpenAI-completions abstraction leaks with non-OpenAI providers.
4. **MCP ecosystem** integration is maturing but has timing race conditions (#41625 closed, #47121 closed) that teams are actively resolving.

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 Critical (P1)

| Issue | Description | Fix PR? |
|---|---|---|
| [#49307](https://github.com/NousResearch/hermes-agent/issues/49307) | Context compression causes answer repetition + new instruction loss | ⚠️ None yet |
| [#49260](https://github.com/NousResearch/hermes-agent/issues/49260) | Signal live adapter silent delivery failure — cron jobs "delivered" but messages never arrive | ✅ Closed (today) |

### 🟠 High (P2)

| Issue | Description | Fix PR? |
|---|---|---|
| [#49332](https://github.com/NousResearch/hermes-agent/issues/49332) | `delegate_task` model override ignored — subagents use wrong model | ⚠️ None |
| [#49297](https://github.com/NousResearch/hermes-agent/issues/49297) | Gemma4 + ollama still broken after v0.17.0 upgrade (regression from closed #39281) | ⚠️ Reopened |
| [#47868](https://github.com/NousResearch/hermes-agent/issues/47868) | Per-message `timestamp` metadata leaked to OpenAI chat completions, rejected by strict providers | ⚠️ None |
| [#48523](https://github.com/NousResearch/hermes-agent/issues/48523) | Same metadata leak via gateway session replays (duplicate root cause of #47868) | ⚠️ None |
| [#41625](https://github.com/NousResearch/hermes-agent/issues/41625) | MCP tools missing in TUI (timing race — 0.75s timeout vs ~6s discovery) | ✅ Closed |
| [#48991](https://github.com/NousResearch/hermes-agent/issues/48991) | Vision `provider=auto` doesn't inherit `base_url`/`api_key` for custom providers | ⚠️ None |
| [#47121](https://github.com/NousResearch/hermes-agent/issues/47121) | Same MCP timing race (duplicate of #41625) | ✅ Closed |
| [#49293](https://github.com/NousResearch/hermes-agent/issues/49293) | File browser doesn't follow profile switch (race condition) | ⚠️ None |

### 🟡 Medium (P3)

| Issue | Description | Fix PR? |
|---|---|---|
| [#47795](https://github.com/NousResearch/hermes-agent/issues/47795) | Desktop chat scroll jumps/bounces erratically | ⚠️ None |
| [#23802](https://github.com/NousResearch/hermes-agent/issues/23802) | CLI `plugins enable/list` filters out entry-point-discovered plugins | ⚠️ None |
| [#49075](https://github.com/NousResearch/hermes-agent/issues/49075) | `skills_list`/`skill_view` missing from idempotent tool names — loops undetected | ⚠️ None |
| [#49336](https://github.com/NousResearch/hermes-agent/issues/49336) | "raft CLI not found" warning even when raft platform disabled | PR merged (#49240) |

**Stability assessment:** The release of v0.17.0 triggered a wave of regression reports. Two patterns stand out: (1) **metadata leaking to strict OpenAI-compatible providers** (#47868, #48523) — this is likely a systemic issue introduced in session-handling refactors, and (2) **context compression correctness** (#49307 P1) — users report the compressor is repetitive and loses instructions, which could be a significant regression. The infinite restart loop (#49243) was caught and merged rapidly — good responsiveness from the team.

---

## 6. Feature Requests & Roadmap Signals

| Request | Signals | Likelihood in Next Release |
|---|---|---|
| **Credential proxy daemon** (#4656) | 11 comments, builds on prior security PRs, advanced security request | 🟡 Medium (complex, needs design) |
| **Headroom-ai context compression** (#39691) | 9👍, highest-liked feature request, directly relevant to cost complaints | 🟢 High — token efficiency is a top priority area |
| **Zulip platform adapter** (#49229) | Already has a PR (#3335) marked as working | 🟢 High — implementation already exists |
| **Ordered failover chains for web search** (#32159) | 2 comments, practical reliability improvement | 🟡 Medium |
| **Structural send-gate config** (#49331 PR) | Open PR, addresses deployment safety for organizations | 🟢 High — orthogonal, low-risk addition |
| **GLM-5.x reasoning support** (#49279) | Open PR, extends existing OpenCode Go profile | 🟢 High — small, targeted |
| **Multilingual i18n (15 languages)** (#38846 PR) | Large open PR, 861 keys | 🟡 Medium-High — aligns with global user base |
| **Self-hosted katana web crawl** (#49333 PR) | Open PR, no API key needed | 🟡 Medium |
| **First-class Projects** (#49037 PR) | Major PR replacing git-branch model, significant refactoring | 🟡 Medium-High — large scope but addresses core UX |

**Prediction:** The next minor release (likely v0.17.1 or v0.18.0) will prioritize: strict-provider metadata cleanup, context compression fixes, Zulip integration, and GLM-5.x support. The Projects refactoring (#49037) may ship as a beta feature given its scope.

---

## 7. User Feedback Summary

### Pain Points Frustrating Users Most

1. **"Works with OpenAI, breaks with everything else"** — Multiple issues (#47868, #48523, #39281, #49297, #48991) report failures with non-OpenAI backends (Ollama, OpenCode Go, Fireworks, custom providers). Users feel Hermes's "provider-agnostic" promise doesn't hold up in practice.

2. **Context management is unreliable** — The P1 issue (#49307) and the compression feature request (#39691) together reveal deep frustration: users are losing work to context window limits, and the current summarization compressor is producing repetitive, low-quality output.

3. **Desktop app UX regressions** — Scroll bouncing (#47795), Chinese input method conflicts (#49332), file browser not updating on profile switch (#49293), and consent gate not recognizing chat consent (#49283) suggest the desktop app needs dedicated QA as it matures rapidly.

4. **Plugin discovery is confusing** — Issue #23802 highlights that `hermes plugins enable/list` silently hides plugins discovered via entry points, even though they load correctly. This confuses users who install plugins via pip and wonder why they don't appear.

### What Users Appreciate

- Rapid release cadence and high contributor count (245 contributors in v0.17.0)
- Security-conscious design (credential isolation, PID namespace, env scoping)
- Breadth of platform integrations (BlueBubbles, WhatsApp, Matrix, Signal, soon Zulip)
- Claude Code-inspired UX improvements (session titles, projects)

---

## 8. Backlog Watch (Items Needing Maintainer Attention)

These items have been open for weeks/months, are important, but have limited maintainer engagement:

| Item | Age | Days Open | Why It Matters |
|---|---|---|---|
| [#4656](https://github.com/NousResearch/hermes-agent/issues/4656) — Credential proxy daemon | Apr 2 | ~79 days | Security architecture discussion; 11 comments but no maintainer response visible |
| [#23802](https://github.com/NousResearch/hermes-agent/issues/23802) — Plugin CLI filters out entry-point plugins | May 11 | ~40 days | Breaks plugin UX for pip-installed plugins; straightforward fix |
| [#32159](https://github.com/NousResearch/hermes-agent/issues/32159) — Ordered failover chains for web backends | May 25 | ~26 days | Reliability improvement for web-dependent workflows |
| [#25106](https://github.com/NousResearch/hermes-agent/issues/25106) — CLI model switch doesn't persist `base_url`/`api_mode` | May 13 | ~38 days | Config persistence bug affecting custom provider users |
| [#33327](https://github.com/NousResearch/hermes-agent/issues/33327) — BlueBubbles webhook conflicts | May 27 | ~24 days | Message duplication/interruption for BlueBubbles users |
| [#46199](https://github.com/NousResearch/hermes-agent/issues/46199) — Windows portable/isolated deployment docs | Jun 14 | ~6 days | Security-conscious enterprise users need deployment guidance |

**Recommendation:** The metadata leak issues (#47868, #48523) likely share a root cause and should be consolidated and prioritized — they affect all strict OpenAI-compatible providers and will generate increasing support burden as Hermes's user base grows beyond OpenAI-native users. The plugin CLI bug (#23802) is a quick win that would improve community goodwill.

---

*Generated by OWL · Data source: github.com/NousResearch/hermes-agent · 2026-06-20*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-20

---

## 1. Today's Overview

PicoClaw shows moderate but healthy development activity with 4 open issues and 7 PRs touched in the past 24 hours, plus a fresh nightly release (`v0.3.0-nightly.20260619`). The project is in an active v0.3.0 development cycle, with contributors focusing on security hardening (SSRF fixes), cross-platform compatibility (Windows path handling), and new infrastructure (agent collaboration bus). Most new PRs are stale, suggesting a backlog review bottleneck. One PR was merged/closed today, indicating steady but not rapid throughput.

---

## 2. Releases

**🆕 Nightly Build: `v0.3.0-nightly.20260619.287853ab`**
- Automated nightly build from `main` branch.
- Full changelog: [v0.3.0...main](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)
- ⚠️ This is an automated build and may be unstable. Use with caution.

No stable or beta tagged releases were published today.

---

## 3. Project Progress

**Merged/Closed Today:**

| PR | Author | Description |
|---|---|---|
| [#2956](https://github.com/sipeed/picoclaw/pull/2956) | yuxuan-7814 | **fix: preserve channel enabled state when merging security.yml** — Fixed a bug where channels set to `enabled: true` in `config.json` were being silently disabled after loading `.security.yml`. This is a meaningful config correctness fix that could have affected any user with split config files. |

**Open PRs Advancing Key Features:**

- **Agent Collaboration Bus** ([#2937](https://github.com/sipeed/picoclaw/pull/2937)) — Introduces durable inter-agent communication with per-agent mailboxes, collaboration threads with isolated session history, structured message envelopes, and permission-aware delivery. This is the largest architectural PR currently open and signals a major new capability direction.
- **SSRF Guard Enhancement** ([#3143](https://github.com/sipeed/picoclaw/pull/3143)) — Blocks private IPv4 embeds in ISATAP IPv6 literals within `web_fetch`, closing a described SSRF bypass vector from issue [#3074](https://github.com/sipeed/picoclaw/issues/3074). Timely security work.

---

## 4. Community Hot Topics

| Item | 💬 Comments | 👍 Reactions | Summary |
|---|---|---|---|
| [#2472](https://github.com/sipeed/picoclaw/issues/2472) — `list_dir` Windows path separator bug | 6 | 1 | `list_dir` fails on Windows because backslashes are passed to Go's `fs.FS`/`os.Root`, which requires forward slashes. Long-standing cross-platform issue. |
| [#348](https://github.com/sipeed/picoclaw/issues/348) — General Attachment Support | 4 | 0 | Request to process files, documents, and media across IM channels (Telegram, Discord). High-priority roadmap item. |
| [#3150](https://github.com/sipeed/picoclaw/issues/3150) — Agent memory loss ("失忆") | 2 | 0 | User reports the agent "made itself forget" — a fresh issue suggesting context/session persistence problems. |
| [#3114](https://github.com/sipeed/picoclaw/issues/3114) — Telegram permission tiers by chat type | 1 | 1 | Request for role-based access control distinguishing private chats, groups, and channels on Telegram. |

**Underlying Needs Analysis:**
- **Cross-platform reliability** is a recurring theme — Windows users hit real blockers like path separators.
- **Security boundaries** are increasingly important as PicoClaw is deployed in group/channel contexts where not all users should have full bot access.
- **Agent memory and context persistence** is an emerging concern, with users experiencing what appears to be session amnesia.
- **Rich media support** remains a top-requested enhancement, reflecting real-world use cases where users want to share logs, configs, and media files with the agent.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|---|---|---|---|
| 🔴 **High** — Security | [#3074 (referenced)](https://github.com/sipeed/picoclaw/issues/3074) SSRF bypass via ISATAP IPv6 literals | Fix open in [#3143](https://github.com/sipeed/picoclaw/pull/3143) | ✅ PR pending review |
| 🟠 **Medium** — Cross-platform | [#2472](https://github.com/sipeed/picoclaw/issues/2472) `list_dir` fails on Windows (path separator) | Open since Apr 10, stale | ❌ No fix PR |
| 🟠 **Medium** — Memory/State | [#3150](https://github.com/sipeed/picoclaw/issues/3150) Agent "失忆" (memory loss) | Open, just reported | ❌ No fix PR |
| 🟡 **Low** — Config | [#2956](https://github.com/sipeed/picoclaw/pull/2956) Channel enabled state overwritten by security.yml merge | **Merged today** | ✅ Fixed |

**Stability Assessment:** The SSRF fix is the most critical item — it addresses a known security bypass vector and should be prioritized for merge. The Windows path bug has been open for over 2 months and is stale, indicating it may need a dedicated contributor.

---

## 6. Feature Requests & Roadmap Signals

| Request | Likelihood of v0.3.0 | Rationale |
|---|---|---|
| Agent Collaboration Bus ([#2937](https://github.com/sipeed/picoclaw/pull/2937)) | **High** | Large, well-structured PR already open; clearly a planned architectural addition |
| General Attachment Support ([#348](https://github.com/sipeed/picoclaw/issues/348)) | **Medium** | Labeled as high-priority roadmap item; likely scoped for v0.3.x |
| Telegram permission tiers ([#3114](https://github.com/sipeed/picoclaw/issues/3114)) | **Medium** | Aligns with the security hardening direction; may be bundled with broader RBAC |
| Windows path normalization ([#2472](https://github.com/sipeed/picoclaw/issues/2472)) | **Low** | Stale for 2+ months; may be deferred to a platform-specific patch release |

---

## 7. User Feedback Summary

**Pain Points:**
- **Windows users are hitting real blockers** — the `list_dir` path separator issue has been open since April with no resolution, suggesting Windows is a second-class platform currently.
- **Agent reliability concerns** — the "失忆" (memory loss) report, while new and lacking detail, points to potential context management issues that could affect trust in production use.
- **Security anxiety in group deployments** — users want fine-grained control over what the bot can do in groups vs. private chats, indicating PicoClaw is being deployed in more complex multi-user scenarios.

**Positive Signals:**
- Active contributor ecosystem with PRs addressing real issues (SSRF, config merging, type assertion safety).
- The agent collaboration bus PR suggests ambitious, well-architected new capabilities are in development.
- Nightly builds are being published regularly, giving adventurous users early access to new features.

**Overall Satisfaction:** The project appears to be in a growth phase with increasing adoption in diverse environments (Windows, Telegram groups, multi-agent setups). The main dissatisfaction signals are around platform parity and agent reliability — both solvable but requiring dedicated attention.

---

## 8. Backlog Watch

These items have been open for extended periods and may need maintainer triage:

| Item | Age | Why It Matters |
|---|---|---|
| [#2472](https://github.com/sipeed/picoclaw/issues/2472) — Windows `list_dir` bug | **71 days** | Stale, cross-platform blocker. Either needs a fix PR or a maintainer decision to officially support/test Windows. |
| [#3091](https://github.com/sipeed/picoclaw/pull/3091) — `native_search` type assertion | **10 days, stale** | Simple, low-risk fix. Should be easy to merge or close. |
| [#3053](https://github.com/sipeed/picoclaw/pull/3053) — `lockStoreFile` unchecked type assertion | **12 days, stale** | Prevents a potential panic. Low-hanging fruit. |
| [#3048](https://github.com/sipeed/picoclaw/pull/3048) — MCP flag parsing | **13 days, stale** | Edge case fix for `mcp add` argument parsing. |
| [#3045](https://github.com/sipeed/picoclaw/pull/3045) — Matrix `allow_from` colon parsing | **13 days, stale** | Fixes a real bug for Matrix users with standard user ID format. |
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) — Agent Collaboration Bus | **57 days, stale** | Large architectural PR that may need review bandwidth or scope discussion. |

**Maintainer Recommendation:** The stale PRs (#3091, #3053, #3048, #3045) are all small, well-scoped fixes that could be batch-reviewed and merged quickly, clearing the backlog and signaling to contributors that their work is valued. The agent collaboration bus (#2937) likely needs a dedicated review session given its size.

---

*Generated by OWL — Project Digest for 2026-06-20*
*Data source: [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-20

---

## 1. Today's Overview

NanoClaw shows healthy contributor momentum with **5 pull requests updated in the last 24 hours**, though none have been merged yet. No new issues were opened or closed, and no new releases were published. The project is in an active development phase with contributors working on platform-specific fixes (Discord), approval workflow correctness, Apple Container runtime support, and permission inheritance. The absence of any closed issues or merged PRs today suggests the maintainers are still reviewing this batch of contributions.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours.

---

## 3. Project Progress

No PRs were merged or closed today. The following 5 open PRs represent the current frontier of work:

| # | PR | Author | Focus |
|---|-----|--------|-------|
| [#2820](https://github.com/qwibitai/nanoclaw/pull/2820) | fix(approvals): persist delivery target on pending_approvals rows | caburi00 | Approval workflow correctness |
| [#2605](https://github.com/qwibitai/nanoclaw/pull/2605) | feat: inherit parent agent permissions via OneCLI | guyb1 | Permission model enhancement |
| [#2812](https://github.com/qwibitai/nanoclaw/pull/2812) | fix(discord): chunk replies over 2000 chars instead of truncating | axnjxn415 | Discord channel reliability |
| [#2809](https://github.com/qwibitai/nanoclaw/pull/2809) | feat(apple-container): Apple Container runtime + remote OneCLI gateway | hidenwalker | macOS/container infrastructure |
| [#2819](https://github.com/qwibitai/nanoclaw/pull/2819) | Add MseeP.ai badge | mseep-ai | README/security badge |

---

## 4. Community Hot Topics

All 5 open PRs have **0 comments and 0 reactions** at this time, indicating they are freshly submitted and have not yet attracted community discussion. The most substantive PRs by scope are:

- **[#2809 — Apple Container runtime + remote OneCLI gateway](https://github.com/qwibitai/nanoclaw/pull/2809):** This is the most architecturally significant PR, adding first-class support for Apple's native Container runtime on macOS and enabling remote OneCLI gateway configurations. It signals growing demand for macOS-native development workflows and remote agent deployments.

- **[#2820 — Persist delivery target on pending_approvals](https://github.com/qwibitai/nanoclaw/pull/2820):** Addresses a data integrity gap in the approval system where delivery metadata (channel_type, platform_id, platform_message_id) is never recorded, making audit trails and approval management unreliable.

- **[#2605 — Inherit parent agent permissions via OneCLI](https://github.com/qwibitai/nanoclaw/pull/2605):** The oldest open PR in this batch (created 2026-05-24), this addresses permission propagation for child agents — a common pain point in multi-agent setups.

---

## 5. Bugs & Stability

| Severity | Issue | PR | Status |
|----------|-------|-----|---------|
| **Medium** | Discord replies over 2000 chars are silently truncated instead of being split across messages | [#2812](https://github.com/qwibitai/nanoclaw/pull/2812) | Fix PR open, unmerged |
| **Medium** | `pending_approvals` rows lack delivery metadata (channel_type, platform_id, platform_message_id always NULL), breaking `approvals list` and audit functionality | [#2820](https://github.com/qwibitai/nanoclaw/pull/2820) | Fix PR open, unmerged |

Both bugs affect core platform functionality — Discord message delivery and approval workflow auditing — and both have fix PRs awaiting review. No crashes or regressions were reported today.

---

## 6. Feature Requests & Roadmap Signals

- **Apple Container runtime support ([#2809](https://github.com/qwibitai/nanoclaw/pull/2809)):** Strong signal that the user base is expanding to macOS-native development environments. The env-gated approach (`CONTAINER_RUNTIME=container`) suggests a non-breaking, opt-in rollout strategy. Likely candidate for the next minor release.

- **Remote OneCLI gateway ([#2809](https://github.com/qwibitai/nanoclaw/pull/2809)):** Paired with the Apple Container PR, this enables remote agent gateway configurations — a significant infrastructure capability for teams running NanoClaw in distributed environments.

- **Parent agent permission inheritance ([#2605](https://github.com/qwibitai/nanoclaw/pull/2605)):** This PR has been open for ~4 weeks without merge, suggesting it may need more review cycles or has open questions. It addresses a real multi-agent orchestration need.

**Prediction:** The Discord chunking fix (#2812) and approvals persistence fix (#2820) are the most likely candidates for the next patch release due to their focused scope and bug-fix nature.

---

## 7. User Feedback Summary

Direct user feedback is limited today (no issues, no PR comments). However, the PR content reveals clear pain points:

- **Discord users** are losing message content when replies exceed Discord's 2000-character limit — a silent failure mode that degrades user experience without obvious errors.
- **Approval workflow users** cannot reliably audit or manage pending approvals because delivery metadata is never persisted, making the `approvals list` command effectively broken.
- **macOS developers** want first-class Apple Container support rather than relying on Docker, indicating platform diversity in the user base.
- **Multi-agent operators** need child agents to inherit parent permissions, suggesting increasingly complex agent topologies in production use.

---

## 8. Backlog Watch

| PR | Age | Risk | Notes |
|----|-----|------|-------|
| [#2605](https://github.com/qwibitai/nanoclaw/pull/2605) — feat: inherit parent agent permissions via OneCLI | ~4 weeks old (2026-05-24) | **Stale** | Oldest open PR in today's batch. No comments or reactions. Needs maintainer attention — either review, request changes, or close with explanation. |
| [#2819](https://github.com/qwibitai/nanoclaw/pull/2819) — Add MseeP.ai badge | 1 day old | **Low priority** | Third-party security badge addition. Common in open-source projects; typically low-effort to review but also low urgency. |

**Action needed:** PR #2605 has been open for nearly a month with no visible maintainer engagement. If this feature is desired, it needs review feedback. If not, closing it with a clear explanation would help the contributor and keep the backlog clean.

---

*Data source: [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) | Digest generated: 2026-06-20*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-20

**Source:** [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. Today's Overview

NullClaw saw modest but focused activity over the past 24 hours, with **2 open issues** and **1 new pull request** and **no new releases**. The project remains in an active maintenance and incremental-improvement cadence rather than a feature-release cycle. The single new PR targets a concrete platform-specific networking failure on Android/Termux (aarch64), suggesting the contributor base is actively diverse-device-testing and filing fixes. Both open issues have been alive for weeks to months with relatively low engagement (≤3 comments each), indicating a backlog of lower-priority items that have not yet attracted maintainer attention or community traction. Overall health appears stable but surface-level throughput is slow.

---

## 2. Releases

**None** — No new tagged releases were published in the last 24 hours, nor are there any recent releases documented in the provided data. The project appears to be between release cycles.

---

## 3. Project Progress

No PRs were merged or closed today. The sole PR is fresh and still under review:

- **PR [#966](https://github.com/nullclaw/nullclaw/pull/966)** — *"fix(http): route stdlib HTTP through curl on aarch64-linux-android"* by @vernonstinebaker
  - **What it does:** Works around `std.http.Client` failing with `error.NameServerFailure` on Android/Termux (Zig 0.16 stdlib's `getaddrinfo()` path via `link_libc=true`) by routing HTTP through `curl` instead.
  - **Status:** Open, just opened on 2026-06-19; awaiting review and CI results.
  - **Impact:** If merged, this would unblock NullClaw's HTTP functionality for all Android/Termux users on aarch64 — a non-trivial quality-of-life fix for mobile developers.

---

## 4. Community Hot Topics

| Issue/PR | Age | Comments | Signal |
|---|---|---|---|
| **[#484](https://github.com/nullclaw/nullclaw/issues/484)** — 飞书无法联网查询 (Feishu/Lark network query failure) | ~100 days | 3 | Platform integration pain point for Chinese-language users relying on Feishu connectors. |
| **[#966](https://github.com/nullclaw/nullclaw/pull/966)** — aarch64 Android HTTP via curl fix | 1 day | 0 (new) | New, technically substantive PR — likely to attract attention quickly given its cross-platform relevance. |
| **[#868](https://github.com/nullclaw/nullclaw/issues/484)** — Zig build fails on Android/Termux (aarch64) with `AccessDenied` on `options.zig` linkat | ~57 days | 2 | Directly related to the same aarch64 challenge; pairs with PR #966 as a compound signal of Android-on-Zig friction. |

**Underlying need analysis:** Both open issues converge on a single theme — **poor out-of-box Android/Termux and non-mainstream-platform support**. This suggests NullClaw's user base includes developers working on constrained or mobile environments, and these users are hitting build-time and networking walls. PR #966 partially addresses the networking half; the `zig build` failure (#868) remains unaddressed by a corresponding fix PR.

---

## 5. Bugs & Stability

| # | Severity | Item | Fix PR? |
|---|---|---|---|
| 1 | **Medium** | **[#868](https://github.com/nullclaw/nullclaw/issues/868)** — `zig build` fails on Android/Termux/aarch64 with `AccessDenied` on `options.zig` `linkat`. Blocks building NullClaw entirely on this platform. | ❌ None |
| 2 | **Medium** | **[#484](https://github.com/nullclaw/nullclaw/issues/484)** — Feishu/Lark integration cannot perform network queries, breaking a major connector for Chinese enterprise users. | ❌ None |
| 3 | **Medium** | **std.http.Client failure on aarch64-linux-android** (addressed by PR #966) — DNS resolution fails due to missing `/etc/resolv.conf` on Termux. Blocks all HTTP operations. | ✅ [PR #966](https://github.com/nullclaw/nullclaw/pull/966) (open) |

**Summary:** All three known issues are medium-severity platform-specific blockers. Two of three have no fix in flight. The project's Android/Termux story is the weakest link in its stability profile right now.

---

## 6. Feature Requests & Roadmap Signals

No new feature requests appeared in the last 24 hours. However, existing items reveal demand vectors:

- **Better non-Linux platform support:** Both #868 and the motivation behind PR #966 signal that Android/Termux is a real (if niche) deployment target. If the maintainers choose to officially support it, doc updates and CI matrix expansion for aarch64-linux-android would be expected next steps.
- **Feishu connector hardening:** Issue #484 indicates the Feishu (Lark) integration has networking gaps. A likely next-version item would be either a connector fix or a broader integration-test suite for chat-platform plugins.
- **Predicted next release focus:** Given the volume of aarch64 Android pain, a patch release (if one is cut before the next minor) should include PR #966 plus a resolution or documented workaround for #868.

---

## 7. User Feedback Summary

**Pain points:**
- **Mobile/ARM developers are hitting hard walls.** The zig build failure (#868) means NullClaw is simply *unbuildable* on a popular developer-on-the-go setup (Termux on Redmi Note 9 / LineageOS). This is a first-impression-killer — if it doesn't compile, adoption stops immediately.
- **Feishu users are flying blind.** Issue #484 describes a network query failure with no maintainer update in 100 days, which frustrates Chinese-enterprise users relying on Lark integration.
- **Slow triage cadence.** Both open issues have been open for weeks/months with ≤3 comments, suggesting either under-maintained triage or low visibility.

**Use cases indicated by feedback:**
- On-the-go / mobile-first AI agent development on Android (Termux).
- Enterprise AI agent deployment connected to Feishu/Lark messaging platforms.

**Sentiment:** Neutral-to-frustrated. No hostility, but a clear pattern of "I tried to use this and it didn't work, and nobody responded."

---

## 8. Backlog Watch

These items have been open an unusually long time for their apparent severity and deserve maintainer triage:

| Item | Open Since | Days Open | Note |
|---|---|---|---|
| **[#484](https://github.com/nullclaw/nullclaw/issues/484)** — 飞书无法联网查询 | 2026-03-13 | ~100 days | Platform integration completely broken; 3 comments, no labeled assignee. |
| **[#868](https://github.com/nullclaw/nullclaw/issues/868)** — Zig build fails on Android/Termux aarch64 | 2026-04-23 | ~57 days | Total build blocker for a user segment; 2 comments, no linked fix PR. |

**Action recommended:** Even a triage label ("confirmed," "will-fix," "needs-investigation," "wontfix") would reduce user uncertainty. Issue #484 in particular risks being perceived as abandoned given its four-month dormancy.

---

*Digest generated by OWL · 2026-06-20 · Data as of GitHub snapshot*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

## IronClaw Project Digest — 2026-06-20

---

### 1. Today's Overview

IronClaw is in a period of intense, high-velocity development on its **Reborn** rewrite. In the last 24 hours the project saw **30 PRs updated** (18 open, 12 merged/closed) and **5 issues updated** (4 open, 1 closed), with no new releases. The activity is overwhelmingly concentrated on the Reborn stack — feature flags, external tool round-tripping, Slack/Telegram ingress, concurrent turn execution, and CI hardening. The volume of stacked/sequential PRs (many explicitly "stacked on" earlier PRs) indicates a tightly coordinated core team working through a large architectural rollout in phases. No new user-facing release has shipped yet, suggesting the team is accumulating changes for a future milestone.

---

### 2. Releases

**None.** No new versions were published in the reporting window.

---

### 3. Project Progress

The following PRs were merged or closed today, representing concrete forward progress:

| PR | Summary |
|---|---|
| **#5019** [CLOSED] | **Projects page fully wired (5/5 stack)** — Final slice of the Reborn Projects rollout; real `/api/webchat/v2/projects` CRUD + membership endpoints connected to the WebChat v2 frontend. |
| **#5064** [CLOSED] | **Projects leftover review fixes** — Addressed unaddressed review comments on the already-merged Projects crates (#5015, #5016): typed timestamps, DTO/facade cleanup. |
| **#5095** [CLOSED] | **Reborn QA recorded fixtures** — Added committed LLM trace fixtures for connection, routine, and web-fetch scenarios with HTTP exchange recording/replay support. |
| **#5096** [CLOSED] | **QA benchmark port** — Ported 7 `automation-workflows/v1/project-setup` benchmarks from `nearai/benchmarks` into the Reborn QA recorded trace harness. |
| **#5097** [CLOSED] | **Reborn QA guidance docs** — Added AGENTS.md rules for cross-layer/user-visible Reborn behavior tests and load-bearing comment conventions. |
| **#5090** [CLOSED] | **CI perf: mold linker extended** — Extended the mold linker optimization (proven ~40% improvement in #5089) to remaining Reborn Rust CI jobs. |
| **#5092** [CLOSED] | **CI perf: sccache A/B experiment** — Added a non-blocking experimental workflow to A/B test sccache (GHA cache) vs. `Swatinem/rust-cache` on a heavy Reborn build. |

**Key takeaway:** The Projects feature has completed its 5-slice rollout stack and is now fully wired end-to-end. The team is simultaneously investing heavily in QA infrastructure (recorded fixtures, benchmark ports) and CI performance (mold linker, sccache experiments), signaling preparation for broader testing and release.

---

### 4. Community Hot Topics

**Most commented/impactful items:**

- **[Issue #5078](https://github.com/nearai/ironclaw/issues/5078)** — *Approval modal difficult to review with large tool commands* (closed today). The approval dialog now shows the actual command being executed, but long shell commands dominate the modal, obscuring action details and approval controls. **Underlying need:** Better UX for command truncation/collapsing in approval flows — a readability and safety concern.

- **[Issue #1012](https://github.com/nearai/ironclaw/issues/1012)** — *Alibaba Coding Plan (Qwen) fails in `openai_compatible` mode* with HTTP 405 errors. Received 1 👍 and 1 comment. **Underlying need:** Broader LLM provider compatibility; users expect the `openai_compatible` endpoint to work uniformly across providers that advertise OpenAI compatibility.

- **[Issue #5091](https://github.com/nearai/ironclaw/issues/5091)** — *Unified feature-flag system for Reborn*. Currently feature gating is ad-hoc `std::env::var` checks — deployment-wide binary, read once at startup, with no per-tenant/per-user targeting, gradual rollout, or A/B support. **Underlying need:** Enterprise-grade feature management for a multi-tenant hosted product.

- **[PR #5099](https://github.com/nearai/ironclaw/pull/5099)** — *External-tool Responses round-trip (Phase 4b-4f)*. Completes the OpenAI-compatible Responses external-tool flow: declare client tools, surface parked tool calls as `function_call`, and resume from submitted outputs. This is a significant API surface expansion.

- **[PR #5061](https://github.com/nearai/ironclaw/pull/5061)** — *Skill extraction & self-evolution with activation controls*. Adds Hermes-style skill distillation from successful turns into reusable `SKILL.md` files with safety scanning. A notable AI-agent autonomy feature.

---

### 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|---|---|---|---|
| **Medium** | [#5088](https://github.com/nearai/ironclaw/issues/5088) — Shell approval prompt misleadingly asks to approve `reads` commands | OPEN, new today | None yet |
| **Medium** | [#5078](https://github.com/nearai/ironclaw/issues/5078) — Approval modal UX broken by large shell commands | **CLOSED** today | Likely addressed (closed without explicit PR link in data) |
| **Medium** | [#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E suite failing since 2026-05-27 | OPEN, long-running | None visible; CI hardening PRs (#5098, #4829) may help |
| **Low** | [#1012](https://github.com/nearai/ironclaw/issues/1012) — Alibaba/Qwen `openai_compatible` 405 error | OPEN since March | None yet |

**Assessment:** The most pressing stability concern is the **long-running nightly E2E failure** (#4108), open for nearly a month with no visible fix. The new `reads` approval labeling bug (#5088) is a UX correctness issue that could confuse users during security-sensitive approval flows. The closed #5078 suggests the team is responsive to approval-UX bugs.

---

### 6. Feature Requests & Roadmap Signals

- **Unified feature flags** ([#5091](https://github.com/nearai/ironclaw/issues/5091)) — This is a foundational infrastructure request. Given the volume of in-flight Reborn work and the explicit targeting/rollout requirements, this is likely a **near-term priority** (next 1-2 release cycles).

- **One-shot scheduled triggers** ([PR #5065](https://github.com/nearai/ironclaw/pull/5065)) — Already in PR. Adds `TriggerSchedule::Once { at, timezone }` alongside recurring cron. Likely to merge soon.

- **Concurrent turn execution** ([PR #5085](https://github.com/nearai/ironclaw/pull/5085)) — Replaces strictly serial turn execution with a `TurnRunScheduler` + per-user/per-type caps. This is a significant performance/scalability improvement for multi-user hosted deployments.

- **Hosted single-tenant Postgres profile** ([PR #5081](https://github.com/nearai/ironclaw/pull/5081)) — Enables PostgreSQL-backed durable state for hosted preview deployments. Signals movement toward a hosted SaaS offering.

- **Telegram + Slack ingress from extension state** ([PR #5100](https://github.com/nearai/ironclaw/pull/5100), [PR #5093](https://github.com/nearai/ironclaw/pull/5093)) — Both are XL, low-risk, and stacked. These extend Reborn's multi-channel reach.

**Prediction for next release:** The most likely candidates to land are the **Projects completion** (already merged), **one-shot triggers**, **concurrent turn execution**, and the **external-tool Responses round-trip** — forming a coherent "Reborn hosted platform" milestone.

---

### 7. User Feedback Summary

**Pain points identified:**

1. **Approval UX at scale** — Users are hitting friction when approval modals display very long shell commands (#5078, now closed) and when the approval prompt uses confusing terminology like `reads` (#5088). These are **safety-adjacent UX issues**: if users can't clearly review what they're approving, the approval mechanism loses its value.

2. **LLM provider compatibility gaps** — The Alibaba/Qwen `openai_compatible` failure (#1012, open since March) indicates that users expect broader out-of-box provider support. This is a **friction point for users in China/Asia** or those using cost-effective alternative providers.

3. **Nightly E2E reliability** — The persistent nightly failure (#4108) is reported by a bot, but it signals to contributors and users that the CI pipeline is not fully trustworthy, which can mask real regressions.

**Satisfaction signals:** The rapid closure of #5078 and the dense PR activity suggest an engaged, responsive core team. The QA infrastructure investment (#5095, #5096, #5097) shows awareness of quality concerns.

---

### 8. Backlog Watch

These items have been open for extended periods and may need maintainer attention:

| Item | Age | Risk |
|---|---|---|
| **[#1012](https://github.com/nearai/ironclaw/issues/1012)** — Alibaba/Qwen `openai_compatible` 405 | **~3.5 months** (2026-03-12) | User-blocking for Qwen users; only 1 👍 but affects a significant user segment |
| **[#4108](https://github.com/nearai/ironclaw/issues/4108)** — Nightly E2E failure | **~3.5 weeks** (2026-05-27) | CI reliability; may hide real regressions; no comments or owner visible |
| **[#4829](https://github.com/nearai/ironclaw/pull/4829)** — Retire dormant CI, add Reborn suites to nightly deep CI | **1 week** (2026-06-12) | Important CI consolidation; overlaps with #5098 which may supersede parts of it |

**Recommendation:** The Qwen compatibility issue (#1012) deserves a triage response — even if the fix is non-trivial, acknowledging the issue and documenting a workaround would reduce user frustration. The nightly E2E failure (#4108) needs an owner assigned or should be auto-closed with a tracking issue if it's an infrastructure flake.

---

*Data source: [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw) | Digest generated by OWL for 2026-06-20*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-20

---

## 1. Today's Overview

LobsterAI shipped a new release (2026.6.18) today, indicating active development cadence. The release focuses on two meaningful changes: expanded artifact sharing support for common document formats and a voice-input simplification. Three previously reported UI/UX bugs were closed as stale, suggesting either user abandonment or workarounds in place. One new feature request was filed proposing a major architectural shift toward an "AI Collaborator" platform. No PRs were opened or merged in the last 24 hours, pointing to a release-driven rather than PR-driven workflow cycle.

---

## 2. Releases

### LobsterAI 2026.6.18 (2026-06-18)

**New Features:**
- **Expanded Artifact Sharing** — Artifact sharing now supports Word, PPT, Excel, PDF, Markdown, and Mermaid file types. This broadens the collaboration surface significantly, covering the most common productivity and documentation formats. ([PR #2159](https://github.com/netease-youdao/LobsterAI/pull/2159))

**Fixes:**
- **Voice Input Simplification** — The voice-input module was trimmed to retain only realtime ASR, removing presumably less reliable or redundant ASR pathways. This likely improves stability at the cost of input mode flexibility.

**Breaking Changes:** None explicitly called out. The voice-input change could be a minor breaking change for users relying on non-realtime ASR modes — worth monitoring community feedback.

**Migration Notes:** No migration steps documented. Artifact sharing changes should be backward-compatible (additive).

---

## 3. Project Progress

No PRs were merged or closed in the last 24 hours. The release appears to have been cut from the merged PR #2159 (artifact sharing). The three closed issues (#1487, #1471, #1472) were all marked **stale**, meaning they were auto-closed due to inactivity rather than being actively resolved. This is a neutral signal — the bugs may have been implicitly fixed in prior releases, or users may have moved on.

---

## 4. Community Hot Topics

| # | Issue | Activity | Link |
|---|-------|----------|------|
| 1 | **AI Collaborator Form: Natural Language Command Bar & Task Dispatch Console** | New (0 comments, filed 2026-06-19) | [Issue #2180](https://github.com/netease-youdao/LobsterAI/issues/2180) |
| 2 | **Input box draft loss on session/view switch** (debounce race condition) | Closed stale, 2 comments | [Issue #1471](https://github.com/netease-youdao/LobsterAI/issues/1471) |
| 3 | **Editing history message silently overwrites unsent input** | Closed stale, 2 comments | [Issue #1472](https://github.com/netease-youdao/LobsterAI/issues/1472) |

**Analysis:** The two most-commented closed issues (#1471, #1472) both relate to **input state management** in the Cowork session view — specifically, user-authored content being silently discarded. These are high-friction UX bugs that erode trust. Their stale closure without explicit resolution is a mild concern; if the underlying debounce and state-overwrite logic hasn't been addressed, users will continue to hit these issues.

The new feature request (#2180) is ambitious — proposing a natural language command bar, task dispatch console, cross-model orchestration, and project-level memory. This signals a user segment that views LobsterAI as a platform for complex, multi-step AI workflows rather than a simple chat interface.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Link |
|----------|-------|--------|------|
| 🔴 **High** | Python script execution fails in sessions with local 30B model (works in Claude Code CLI and other environments) | Closed stale | [Issue #1487](https://github.com/netease-youdao/LobsterAI/issues/1487) |
| 🟠 **Medium** | Input draft lost when switching sessions/views within 300ms debounce window | Closed stale | [Issue #1471](https://github.com/netease-youdao/LobsterAI/issues/1471) |
| 🟠 **Medium** | Editing a history message silently overwrites unsent input box content | Closed stale | [Issue #1472](https://github.com/netease-youdao/LobsterAI/issues/1472) |

**Fix PRs:** None identified. All three were closed via stale-bot, not merged fixes. The Python execution bug (#1487) is the most concerning from a functionality standpoint — local model users relying on Python tool calls are blocked. No fix PR is linked.

---

## 6. Feature Requests & Roadmap Signals

| Priority | Request | Signal Strength | Likelihood in Next Release |
|----------|---------|----------------|---------------------------|
| 🔵 **Strategic** | AI Collaborator platform: natural language command bar, task dispatch console, cross-model orchestration, project-level memory ([Issue #2180](https://github.com/netease-youdao/LobsterAI/issues/2180)) | Single proposal, detailed spec attached | Low for full scope; individual components (command bar, memory) may appear incrementally |
| 🟢 **Incremental** | Broader artifact sharing formats (Word, PPT, Excel, PDF, Markdown, Mermaid) | **Shipped in 2026.6.18** ✅ | — |

**Prediction:** The artifact sharing expansion in this release suggests the team is investing in **collaboration and output portability**. The voice-input simplification suggests a parallel effort to **reduce complexity and improve reliability** of input modalities. The next release may continue along these axes — possibly adding more export/sharing destinations or refining the realtime ASR pipeline. The AI Collaborator proposal is too large for a single release but elements of it (especially project-level memory) could surface as experimental features.

---

## 7. User Feedback Summary

**Pain Points:**
- **Silent data loss** is the dominant theme. Two of the three closed issues involve user-authored content being discarded without warning — either through debounce race conditions (#1471) or silent overwrites from history editing (#1472). These are trust-eroding bugs.
- **Local model compatibility gaps** — the Python execution failure with a local 30B model (#1487) suggests the tool execution layer may not be fully validated across all model backends, which matters for users who prioritize data privacy or cost control via local inference.

**Use Cases Observed:**
- Users are treating LobsterAI as a **multi-format collaboration hub** (hence the demand for Word/PPT/Excel/PDF/Mermaid sharing).
- At least one power user envisions it as a **workflow orchestration platform** with cross-model dispatch and persistent project memory — a significantly more advanced use case than simple chat.

**Satisfaction Signal:** Mixed. The team is shipping features and the project is active, but the stale-closure pattern for UX bugs without acknowledgment risks alienating engaged users who took the time to file detailed reports.

---

## 8. Backlog Watch

| Issue | Age | Concern | Recommendation |
|-------|-----|---------|----------------|
| [Issue #1487](https://github.com/netease-youdao/LobsterAI/issues/1487) — Python script execution fails with local 30B model | ~75 days (opened 2026-04-05) | Core functionality broken for local-model users; no fix linked | Reopen or create a tracking issue; validate tool execution across model backends |
| [Issue #1471](https://github.com/netease-youdao/LobsterAI/issues/1471) — Draft loss on session switch (debounce race) | ~76 days (opened 2026-04-04) | Recurring UX trust issue; likely still present | Add a unit test for the debounce-on-unmount edge case; consider flush-on-unmount pattern |
| [Issue #1472](https://github.com/netease-youdao/LobsterAI/issues/1472) — Silent overwrite of unsent input on history edit | ~76 days (opened 2026-04-04) | Same trust theme as #1471 | Implement confirmation dialog when input buffer is non-empty; low effort, high UX impact |
| [Issue #2180](https://github.com/netease-youdao/LobsterAI/issues/2180) — AI Collaborator platform proposal | 1 day (opened 2026-06-19) | Ambitious; needs triage | Acknowledge and label (e.g., `roadmap`, `discussion`); break into sub-issues if there's alignment |

**Maintainer Attention Needed:** The stale-closed bugs (#1471, #1472) are low-effort, high-impact fixes that would meaningfully improve user trust. Even a brief comment acknowledging them (e.g., "tracked in #XXXX for next sprint") would reduce community friction. The local model Python execution bug (#1487) deserves a dedicated investigation — it may surface more frequently as local inference adoption grows.

---

*Data source: [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) | Digest generated 2026-06-20*

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

# CoPaw Project Digest — 2026-06-20

**Repository:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

## 1. Today's Overview

CoPaw saw high activity on 2026-06-20 with **11 issues** (10 open, 1 closed) and **16 pull requests** (10 open, 6 merged/closed) updated in the last 24 hours. No new releases were published. The project is in an active development cycle following the v1.1.12 release, with the community rapidly surfacing regressions and the maintainer team responding with fix PRs at a strong pace. Several contributors (notably `lecheng2018` and `nguyenthanhthe`) are driving a concentrated push on stability fixes, UI improvements, and memory subsystem hardening. The overall health is good — the project shows a healthy close-to-open ratio and fast turnaround on reported bugs.

---

## 2. Releases

**None.** No new releases were published in the last 24 hours. The latest known version referenced in issues is **v1.1.12.post1**.

---

## 3. Project Progress

### Merged / Closed PRs (6)

| # | PR | Author | Summary |
|---|-----|--------|---------|
| [#5332](https://github.com/agentscope-ai/CoPaw/pull/5332) | `fix(memory): add index maintenance and timeout protection for ChromaDB` | lecheng2018 | Addresses the critical ChromaDB unbounded index growth (Issue [#4795](https://github.com/agentscope-ai/CoPaw/issues/4795)). Adds `compact_index()`, `purge_index()`, `get_index_stats()`, auto-compact strategy with configurable threshold (default: 1000 writes), and timeout protection for `memory_search`. |
| [#5337](https://github.com/agentscope-ai/CoPaw/pull/5337) | `fix(providers): use plain string content for check_model_connection` | nguyenthanhthe | Fixes Zhipu AI model-level connection tests failing (Issue [#5330](https://github.com/agentscope-ai/CoPaw/issues/5330)). Root cause: structured multimodal list content not supported by Zhipu's text model endpoint. |
| [#5338](https://github.com/agentscope-ai/CoPaw/pull/5338) | `fix(providers): use plain string content for check_model_connection` (duplicate) | nguyenthanhthe | Duplicate/close-and-review-later variant of the Zhipu fix. |
| [#5242](https://github.com/agentscope-ai/CoPaw/pull/5242) | `fix(compaction): add timeout protection to agent.reply() in _compact_context` | lecheng2018 | Prevents the entire QwenPaw process from freezing when the LLM API hangs during context compaction. |
| [#5241](https://github.com/agentscope-ai/CoPaw/pull/5241) | `fix(cron): increase default misfire_grace_seconds from 60 to 3600` | lecheng2018 | Prevents APScheduler from silently skipping cron jobs when QwenPaw is busy processing a long-running task at the scheduled fire time. |
| [#5179](https://github.com/agentscope-ai/CoPaw/pull/5179) | `fix(skills): expand multi-agent collaboration skill trigger keywords` | nguyenthanhthe | Adds missing trigger keywords (e.g., "团队协作") to the `multi_agent_collaboration` SKILL.md so the agent responds correctly on the first attempt. |

### Open PRs Under Active Review (10)

| # | PR | Author | Summary |
|---|-----|--------|---------|
| [#5321](https://github.com/agentscope-ai/CoPaw/pull/5321) | `feat(context): scroll context manager — durable history + recall REPL` | niceIrene | **First-time contributor.** Introduces a new retrieval-driven context management strategy as an alternative to native compression. |
| [#5334](https://github.com/agentscope-ai/CoPaw/pull/5334) | `feat(ui): allow switching agent in collapsed sidebar mode` | lecheng2018 | Makes the collapsed sidebar's `Bot` icon clickable with a popover agent switcher — directly addresses Issue [#5329](https://github.com/agentscope-ai/CoPaw/issues/5329). |
| [#5336](https://github.com/agentscope-ai/CoPaw/pull/5336) | `feat(providers): support custom model ordering within providers` | lecheng2018 | Adds `sort_order` field to `ModelInfo` and `reorder_models()` API — addresses Issue [#5267](https://github.com/agentscope-ai/CoPaw/issues/5267). |
| [#5339](https://github.com/agentscope-ai/CoPaw/pull/5339) | `fix(providers): use plain string content for check_model_connection` | nguyenthanhthe | Alternate fix for Issue [#5330](https://github.com/agentscope-ai/CoPaw/issues/5330). |
| [#5335](https://github.com/agentscope-ai/CoPaw/pull/5335) | `fix(console): yield failed response event on exception to prevent stuck UI` | nguyenthanhthe | Fixes the UI getting stuck in a waiting state with an active input field after model execution errors — addresses Issue [#5333](https://github.com/agentscope-ai/CoPaw/issues/5333). |
| [#5331](https://github.com/agentscope-ai/CoPaw/pull/5331) | `feat(console): real-time SSE push-message notifications with voice beep` | nguyenthanhthe | Replaces polling latency (~1–3s) with sub-500ms SSE push delivery for console channel notifications — addresses Issue [#5322](https://github.com/agentscope-ai/CoPaw/issues/5322). |
| [#5326](https://github.com/agentscope-ai/CoPaw/pull/5326) | `feat: minimize window to system tray on close` | nguyenthanhthe | Adds system tray minimization on window close with a tray icon and right-click menu. |
| [#5325](https://github.com/agentscope-ai/CoPaw/pull/5325) | `feat(memory): add optional recency-aware ranking for memory_search daily notes` | nguyenthanhthe | Implements exponential temporal decay ranking for daily memory files in `memory_search`. |
| [#5324](https://github.com/agentscope-ai/CoPaw/pull/5324) | `fix(files): use inline content-disposition for file preview` | nguyenthanhthe | Fixes `send_file_to_user` image display regression in v1.1.12 caused by `FileResponse` defaulting to `content_disposition_type="attachment"` — addresses Issue [#5320](https://github.com/agentscope-ai/CoPaw/issues/5320). |
| [#5323](https://github.com/agentscope-ai/CoPaw/pull/5323) | `feat(plan): add native todo_write progress panel for multi-step agent tasks` | nguyenthanhthe | Adds a native `TodoWrite` tool and auto-opening plan progress panel in the frontend console. |

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

1. **[#5329](https://github.com/agentscope-ai/CoPaw/issues/5329)** — *"Add agent switch button in collapsed sidebar"* (3 comments)
   - **Underlying need:** Mobile and narrow-viewport users cannot switch agents without expanding the sidebar. This is a UX accessibility issue for the growing mobile user base. **Fix PR already open:** [#5334](https://github.com/agentscope-ai/CoPaw/pull/5334).

2. **[#4795](https://github.com/agentscope-ai/CoPaw/issues/4795)** — *"Vector index unbounded growth to 37GB causing memory_search crashes"* (3 comments)
   - **Underlying need:** Long-term users need automatic index maintenance. The 37GB growth over ~3 months of normal use is a serious data hygiene problem. **Fix PR already merged:** [#5332](https://github.com/agentscope-ai/CoPaw/pull/5332).

3. **[#5267](https://github.com/agentscope-ai/CoPaw/issues/5267)** — *"Model list custom ordering within providers"* (2 comments)
   - **Underlying need:** Power users with many models per provider need to prioritize frequently used models. **Fix PR already open:** [#5336](https://github.com/agentscope-ai/CoPaw/pull/5336).

4. **[#5328](https://github.com/agentscope-ai/CoPaw/issues/5328)** — *"Agent freezes during DeepSeek thinking, requires manual stop+continue"* (2 comments)
   - **Underlying need:** Compatibility with DeepSeek's reasoning/thinking mode streaming behavior. No fix PR yet — this appears to be a model-provider streaming integration issue.

5. **[#5317](https://github.com/agentscope-ai/CoPaw/issues/5317)** — *"Python not found in Windows Tauri after conda changes"* (2 comments)
   - **Underlying need:** Skill authors who rely on Python scripts need a reliable Python path resolution, especially after environment changes. No fix PR yet.

### Notable PR Activity

- **PR [#5321](https://github.com/agentscope-ai/CoPaw/pull/5321)** — The "scroll context manager" by first-time contributor `niceIrene` is the most architecturally significant open PR, introducing an entirely new context management strategy. This could be a major feature addition if merged.

---

## 5. Bugs & Stability

### Ranked by Severity

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **Critical** | [#4795](https://github.com/agentscope-ai/CoPaw/issues/4795) | ChromaDB index grows to 37GB, `memory_search` crashes repeatedly | ✅ **Fixed** — PR [#5332](https://github.com/agentscope-ai/CoPaw/pull/5332) merged |
| 🔴 **Critical** | [#5333](https://github.com/agentscope-ai/CoPaw/issues/5333) | Agent appears stuck after submitting input; UI shows submit button instead of stop button | 🔧 **Fix PR open** — [#5335](https://github.com/agentscope-ai/CoPaw/pull/5335) |
| 🟠 **High** | [#5320](https://github.com/agentscope-ai/CoPaw/issues/5320) | `send_file_to_user` images not displayed in chat after v1.1.12 upgrade (regression) | 🔧 **Fix PR open** — [#5324](https://github.com/agentscope-ai/CoPaw/pull/5324) |
| 🟠 **High** | [#5330](https://github.com/agentscope-ai/CoPaw/issues/5330) | Zhipu provider: provider-level connection test passes but all model-level tests fail | ✅ **Fixed** — PR [#5337](https://github.com/agentscope-ai/CoPaw/pull/5337) merged |
| 🟡 **Medium** | [#5328](https://github.com/agentscope-ai/CoPaw/issues/5328) | Agent freezes during DeepSeek thinking phase across all channels (web, console, Tauri) | ⚠️ No fix PR yet |
| 🟡 **Medium** | [#5317](https://github.com/agentscope-ai/CoPaw/issues/5317) | Python not found in Windows Tauri after conda environment changes | ⚠️ No fix PR yet |
| 🟢 **Low** | [#5319](https://github.com/agentscope-ai/CoPaw/issues/5319) | Console channel always shows "Answers have stopped" | ✅ **Closed** — resolved by reinstall/restart |

### Stability Assessment

The v1.1.12 release introduced at least two regressions (image display [#5320](https://github.com/agentscope-ai/CoPaw/issues/5320) and potentially the stuck UI [#5333](https://github.com/agentscope-ai/CoPaw/issues/5333)), both of which have fix PRs already open. The DeepSeek thinking freeze [#5328](https://github.com/agentscope-ai/CoPaw/issues/5328) is a cross-channel issue affecting all interfaces and may require deeper investigation into streaming response handling.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features (Today)

| Issue | Request | Signal Strength | Likelihood in Next Version |
|-------|---------|----------------|---------------------------|
| [#5329](https://github.com/agentscope-ai/CoPaw/issues/5329) | Agent switch in collapsed sidebar | ✅ **Fix PR already open** | **Very High** |
| [#5267](https://github.com/agentscope-ai/CoPaw/issues/5267) | Custom model ordering within providers | ✅ **Fix PR already open** | **Very High** |
| [#5327](https://github.com/agentscope-ai/CoPaw/issues/5327) | Agent Office: add chat button + session switching on agent cards | No PR yet | Medium |
| [#5322](https://github.com/agentscope-ai/CoPaw/issues/5322) | Real-time UI update + voice notification for API messages | ✅ **Fix PR already open** | **High** |
| [#5318](https://github.com/agentscope-ai/CoPaw/issues/5318) | Native todo_write progress panel for multi-step tasks | ✅ **Fix PR already open** | **High** |
| [#5316](https://github.com/agentscope-ai/CoPaw/issues/5316) | Recency-aware ranking for memory_search daily notes | ✅ **Fix PR already open** | **High** |
| [#5312](https://github.com/agentscope-ai/CoPaw/issues/5312) | Minimize to system tray on close | ✅ **Fix PR already open** | **High** |

### Roadmap Prediction

The next release (likely **v1.1.13** or **v1.1.12.post2**) is shaping up to be a **stability and UX polish release** with the following likely inclusions:
- ChromaDB index maintenance and timeout protection (already merged)
- Zhipu provider connection fix (already merged)
- Image display regression fix (PR open)
- Stuck UI fix (PR open)
- Collapsed sidebar agent switching (PR open)
- Custom model ordering (PR open)
- System tray minimization (PR open)
- Real-time SSE push notifications (PR open)
- Recency-aware memory ranking (PR open)
- Native todo_write progress panel (PR open)

The "scroll context manager" ([#5321](https://github.com/agentscope-ai/CoPaw/pull/5321)) is a larger architectural addition that may target a later minor version.

---

## 7. User Feedback Summary

### Pain Points

1. **Mobile UX is underserved.** User `bob-geek11` reported multiple issues ([#5329](https://github.com/agentscope-ai/CoPaw/issues/5329), [#5328](https://github.com/agentscope-ai/CoPaw/issues/5328), [#5333](https://github.com/agentscope-ai/CoPaw/issues/5333)) from mobile browser access, indicating a growing mobile user base that the current UI doesn't fully support. The collapsed sidebar agent switching fix is a direct response to this.

2. **DeepSeek compatibility is a recurring friction point.** Multiple users report agent freezing during DeepSeek's thinking/reasoning phase ([#5328](https://github.com/agentscope-ai/CoPaw/issues/5328), [#5333](https://github.com/agentscope-ai/CoPaw/issues/5333)), suggesting the streaming response handling for reasoning models needs dedicated attention.

3. **Long-term data hygiene is a concern.** The 37GB ChromaDB index growth ([#4795](https://github.com/agentscope-ai/CoPaw/issues/4795)) shows that users run CoPaw as a daily driver for months, and the system needs built-in maintenance mechanisms.

4. **v1.1.12 regressions eroded trust.** The image display regression ([#5320](https://github.com/agentscope-ai/CoPaw/issues/5320)) and potential stuck UI ([#5333](https://github.com/agentscope-ai/CoPaw/issues/5333)) are both regressions from the latest upgrade, which can frustrate users who expect upgrades to be safe.

5. **Windows Tauri environment detection is fragile.** The Python path resolution issue ([#5317](https://github.com/agentscope-ai/CoPaw/issues/5317)) suggests that skill authors need more robust environment handling, especially when conda environments change.

### Satisfaction Signals

- Users are actively filing detailed, well-reproducible bug reports with version numbers, platform info, and screenshots.
- The multi-agent collaboration skill fix ([#5179](https://github.com/agentscope-ai/CoPaw/pull/5179)) shows the team is paying attention to Chinese-language users and team collaboration workflows.
- The Agent Office feature request ([#5327](https://github.com/agentscope-ai/CoPaw/issues/5327)) indicates users are managing multiple agents and want better operational visibility.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Why It Needs Attention |
|-------|-----|----------------------|
| [#4795](https://github.com/agentscope-ai/CoPaw/issues/4795) — ChromaDB 37GB index | 22 days (created 2026-05-29) | Critical data loss/crash risk for long-term users. **Now fixed** via PR [#5332](https://github.com/agentscope-ai/CoPaw/pull/5332), but should be verified in next release. |
| [#5328](https://github.com/agentscope-ai/CoPaw/issues/5328) — DeepSeek thinking freeze | 1 day | Cross-channel issue (web, console, Tauri) with no fix PR yet. Affects a major model provider. Needs investigation into streaming/reasoning mode handling. |
| [#5317](https://github.com/agentscope-ai/CoPaw/issues/5317) — Python not found in Windows Tauri | 2 days | Blocks skill authors from running Python scripts. No fix PR yet. May need documentation updates or path resolution logic changes. |
| [#5327](https://github.com/agentscope-ai/CoPaw/issues/5327) — Agent Office chat + session switching | 1 day | No fix PR yet. This is a significant UX improvement for multi-agent workflows. Worth prioritizing given the active multi-agent skill development. |

### PRs Awaiting Review

- **[#5321](https://github.com/agentscope-ai/CoPaw/pull/5321)** — "Scroll context manager" by first-time contributor `niceIrene`. This is a substantial architectural contribution that deserves careful review. It introduces a new context management strategy that could be a major differentiator for CoPaw.

---

*Generated by OWL — 2026-06-20*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-20

---

## 1. Today's Overview

ZeroClaw is in a highly active stabilization phase following the v0.8.0 release. Today saw **50 issues and 50 PRs updated in the last 24 hours**, with the community rallying around the **v0.8.1 patch release** (207 commits, 45 contributors). The project pipeline is heavily loaded: 42 open/active issues and 47 open PRs indicate strong contributor momentum, but also a significant review backlog. Activity is concentrated in **channels (Discord/Slack/Telegram), runtime stability, and security hardening** for the upcoming v0.9.0 milestone. Overall project health is **good but strained** — the velocity is high, but the maintainer review bandwidth is clearly a bottleneck.

---

## 2. Releases

### v0.8.1 — Patch Release (Latest)
- **Scope:** First patch on the v0.8.x line, stabilizing the multi-agent runtime, channels, and provider stack from v0.8.0.
- **Stats:** 207 commits from 45 contributors — 123 bug fixes, 46 new features.
- **Focus areas:** Channel runtime reliability, provider stack stabilization, multi-agent runtime bug fixes. No documented breaking changes (patch semver).

> **Note:** Despite v0.8.1 being released, **Issue [#7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787)** reports that prebuilt v0.8.0 binaries shipped without Slack/Discord channel features — a regression from v0.7.x. Users should verify they are on v0.8.1 prebuilt binaries or compile from source.

---

## 3. Project Progress

Several meaningful fixes and features were merged or closed today:

- **[#6970 (CLOSED)](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)** — The v0.8.1 integration/channel/provider/tool queue tracker is closed, confirming the v0.8.1 release deliverables landed.
- **[#5618 (CLOSED)](https://github.com/zeroclaw-labs/zeroclaw/issues/5618)** — Phase 2 daemon architecture callback refactor completed (replaced `DaemonSubsystems` with typed Registry API).
- **[#6271 (CLOSED)](https://github.com/zeroclaw-labs/zeroclaw/issues/6271)** — V3 `SwarmConfig` schema + runtime implementation closed, unblocking the swarm v2→v3 migration path.
- **[#6826 (CLOSED)](https://github.com/zeroclaw-labs/zeroclaw/issues/6826)** — The `zerocode` TUI tracker completed, establishing the standalone terminal interface as a separate binary.
- **[#8031 (CLOSED)](https://github.com/zeroclaw-labs/zeroclaw/issues/8031)** — Administrative NOOP closed.

**Currently advancing in open PRs:**
- **[PR #8033](https://github.com/zeroclaw-labs/zeroclaw/pull/8033)** — Chat-based conversational setup assistant reviving `zeroclaw onboard` as the default onboarding flow (ported from OpenClaw's modern onboard).
- **[PR #7965](https://github.com/zeroclaw-labs/zeroclaw/pull/7965)** — Discord interaction components (buttons, selects, modals, buttoned approval, autocomplete) — size XL, high risk.
- **[PR #8001](https://github.com/zeroclaw-labs/zeroclaw/pull/8001)** — SOP run-state store trait + in-memory backend scaffold for durable multi-agent operations.

---

## 4. Community Hot Topics

The most discussed issues reveal clear community pain points:

| # | Issue | Signals | Underlying Need |
|---|-------|---------|-----------------|
| **[#7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787)** | Prebuilt v0.8.0 binaries missing Slack/Discord | 6 👍, 6 comments, high/p1 | Release pipeline quality — users can't rely on prebuilt binaries for channel features. Signals a **CI/CD build configuration gap** where channel features aren't compiled into release artifacts. |
| **[#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)** | Too much emphasis on memory | 6 comments, high/p1 | Agent prompt engineering — memories dominate context, degrading agent quality especially in cron jobs. Needs system prompt rebalancing. |
| **[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** | OIDC Authentication Provider support | 5 comments, high/p1, RFC | Enterprise adoption blocker — pluggable auth (OIDC) is critical for v0.9.0 security posture. |
| **[#5221](https://github.com/zeroclaw-labs/zeroclaw/issues/5221)** | Cost not captured for schedules/CLI/web agents | 5 comments, high/p2 | Observability gap — users can't track LLM spend across all interaction modes. Closed (likely resolved in v0.8.1). |
| **[#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067)** | Channel reply-intent precheck configurability | 5 comments, medium/p2 | Performance/usability — the precheck model blocks full agent turn. Users want lightweight models with timeouts. |

**Key takeaway:** The community's top concerns are **release reliability**, **agent prompt/context quality**, and **enterprise security** (OIDC). These align with the v0.8.x and v0.9.0 roadmap priorities.

---

## 5. Bugs & Stability

### Critical / High Severity (P1)

| Issue | Severity | Status | Fix Available |
|-------|----------|--------|---------------|
| **[#7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787)** — Slack/Discord missing from prebuilt binaries | Regression, workflow-blocked | Open (v0.8.1 should resolve) | Likely fixed in v0.8.1; needs verification |
| **[#7907](https://github.com/zeroclaw-labs/zeroclaw/issues/7907)** — Agent rename can move owned state before config persistence | S1 (data loss risk) | Open, just reported | No fix PR yet |
| **[#7941](https://github.com/zeroclaw-labs/zeroclaw/issues/7941)** — Agent delete purges state before persistence (mirror of #7907) | S1 (data loss risk) | Open, just reported | No fix PR yet |
| **[#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302)** — Gemini 400: assistant tool_call emitted before first user turn | High, provider compat | Open, accepted | No fix PR |
| **[#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)** — Default 32k context budget exceeded on iteration 1 | S1 (workflow blocked), 3 months old | Open, accepted | No fix PR |
| **[#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037)** — Cron jobs can be launched repeatedly while still running | High, duplicate execution | Open, accepted | No fix PR |
| **[#7996](https://github.com/zeroclaw-labs/zeroclaw/issues/7996)** — No configurable temp-file cleanup for storage-constrained devices | New today | Open (feature-as-bug) | No fix PR |

### Medium Severity — Notable Fixes Landing

| Issue | Fix PR | What |
|-------|--------|------|
| **[#8004](https://github.com/zeroclaw-labs/zeroclaw/pull/8004)** | [PR #8004](https://github.com/zeroclaw-labs/zeroclaw/pull/8004) | Budget config reloadable instead of frozen at boot |
| **[#8014](https://github.com/zeroclaw-labs/zeroclaw/pull/8014)** | [PR #8014](https://github.com/zeroclaw-labs/zeroclaw/pull/8014) | Stop duplicating streamed narration before native tool calls |
| **[#8009](https://github.com/zeroclaw-labs/zeroclaw/pull/8009)** | [PR #8009](https://github.com/zeroclaw-labs/zeroclaw/pull/8009) | Wire HMAC tool receipts through all agent turn paths |
| **[#7982](https://github.com/zeroclaw-labs/zeroclaw/pull/7982)** | [PR #7982](https://github.com/zeroclaw-labs/zeroclaw/pull/7982) | Fix Telegram voice static_voice_peers caching |
| **[#7983](https://github.com/zeroclaw-labs/zeroclaw/pull/7983)** | [PR #7983](https://github.com/zeroclaw-labs/zeroclaw/pull/7983) | Handle EMFILE in IPC accept loop (daemon stability) |

### 🆕 Critical Alert: #7907 & #7941
Two brand-new S1-severity bugs reported within hours of each other describe a **state persistence ordering defect** in the gateway API: `rename_agent_cascade()` and `delete_agent_cascade()` mutate owned state *before* config is durably persisted. If the process crashes between mutation and persistence, agents lose state. These are **awaiting fix PRs** and should be prioritized for v0.8.2.

---

## 6. Feature Requests & Roadmap Signals

### Likely in v0.8.x (near-term)

| Feature | Issue | Rationale |
|---------|-------|-----------|
| Cron pause/resume via API + shell-command agent scoping | [PR #7666](https://github.com/zeroclaw-labs/zeroclaw/pull/7666) | PR already open, scoped work |
| Discord interaction components (buttons, modals, autocomplete) | [PR #7965](https://github.com/zeroclaw-labs/zeroclaw/pull/7965) | Large PR, active development, tracker #7831 |
| Chat-based conversational onboarding | [PR #8033](https://github.com/zeroclaw-labs/zeroclaw/pull/8033) | Fresh PR, fills onboarding gap |
| Model context window bar in all chat surfaces | [PR #7946](https://github.com/zeroclaw-labs/zeroclaw/pull/7946) | Cross-cutting UX improvement |
| SOP run-store scaffold | [PR #8001](https://github.com/zeroclaw-labs/zeroclaw/pull/8001) | Foundation for durability work |

### Likely in v0.9.0 (mid-term)

| Feature | Issue | Rationale |
|---------|-------|-----------|
| OIDC Authentication Provider | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | Explicitly tagged v0.9.0, already has tracking issue |
| Auth middleware refactoring | [#6250](https://github.com/zeroclaw-labs/zeroclaw/issues/6250) | Security hardening, accepted |
| Multi-database session backends (Postgres, Oracle, MySQL, Db2) | [PR #6893](https://github.com/zeroclaw-labs/zeroclaw/pull/6893) | Enterprise fleet need, feature-gated |
| Unify slash-command registries across surfaces | [#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) | RFC, architectural cleanup |
| Pluggable auth per v0.9.0 tracker | [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | Explicit v0.9.0 milestone |

---

## 7. User Feedback Summary

### Pain Points

- **"Slack doesn't work out of the box"** — The most-upvoted issue today. Users downloading official prebuilt binaries find Slack and Discord non-functional, forcing them to downgrade to v0.7.5 or compile from source. This erodes trust in the release process. ([Issue #7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787))

- **"Memory dominance degrades agent quality"** — Long-running users (especially cron job operators) report that injected memories overwhelm the current prompt context, causing agents to ignore immediate instructions. This has been open for 2+ months with no resolution. ([Issue #5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844))

- **"Context budget exceeded on first turn"** — Users with default 32k context settings experience immediate context overflow from system prompt + tool definitions alone, causing perpetual trimming behavior. A 2-month-old P1. ([Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808))

- **"Telegram doesn't route to the right provider for images"** — Multimodal vision provider config is silently ignored, images routed to fallback provider instead. ([Issue #6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841))

- **"Agent conversation history breaks Gemini"** — History serialization places assistant tool_calls before user turns, violating Gemini's strict ordering requirements. ([Issue #6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302))

### Positive Signals
- Strong contributor engagement (45 contributors in v0.8.1 cycle)
- Active Discord/Slack channel development indicates user demand for multi-platform support
- `zerocode` TUI shipped (closed tracker), showing investment in operator experience
- Multiple automated fix PRs from maintainers showing responsive bug triage

---

## 8. Backlog Watch

These important, high-signal items are **idle or stagnant** and need maintainer attention:

| Priority | Issue | Age | Status | Risk of Neglect |
|----------|-------|-----|--------|-----------------|
| 🔴 | **[#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)** — Context budget exceeded on iteration 1 | 2+ months | Open, accepted, no PR | Users on default config get broken agent behavior from turn 1. Default config should work. |
| 🔴 | **[#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)** — Memory too dominant in prompts | 2+ months | Open, accepted, no PR | Subtle quality degradation across all memory-using deployments. |
| 🟡 | **[#4721](https://github.com/zeroclaw-labs/zeroclaw/issues/4721)** — Logging to stdout instead of stderr | 3 months | Open, help wanted, no-stale | Blocks piping CLI output. Low effort fix. |
| 🟡 | **[#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)** — Telegram sends duplicate images per request | 2+ months | Open, help wanted | Multimodal UX broken on Telegram. |
| 🟡 | **[#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869)** — RUSTSEC advisory cluster from rumqttc | 2 months | Blocked (upstream dependency) | Security debt; 4 advisories. Needs upstream bump or mitigation doc. |
| 🟡 | **[#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055)** — Slack thread context hydration on first mention | 2 months | Open, accepted, no PR | Slack users lose thread context. |
| 🟠 | **[#5221](https://github.com/zeroclaw-labs/zeroclaw/issues/5221)** — Model cost not captured for schedules/CLI/web | 2+ months | **Closed — verify fix landed** | Cross-cutting observability; need confirmation fix is in v0.8.1. |
| 🟠 | **[#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067)** — Channel reply-intent precheck configurability | 2 months | Open, accepted, no PR | Performance issue; blocks full agent turn. |

**Recommendation:** Address #5808 and #4721 as quick wins for v0.8.2 — both are clearly scoped, have community interest (comments/age), and (#5808) directly affects out-of-box experience. #5869 needs a maintainer decision on whether to wait for upstream rumqttc or fork/patch.

---

*Generated by OWL · ZeroClaw Community Digest · 2026-06-20*
*Data source: github.com/zeroclaw-labs/zeroclaw · 50 issues + 50 PRs sampled*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*