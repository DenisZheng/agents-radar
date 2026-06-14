# OpenClaw Ecosystem Digest 2026-06-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-14 00:42 UTC

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

# OpenClaw Project Digest — 2026-06-14

---

## 1. Today's Overview

OpenClaw is experiencing exceptionally high activity with **500 issues and 500 PRs updated in the last 24 hours**, indicating a very large and active contributor/maintainer community. Two new beta releases shipped today (**v2026.6.8-beta.1** and **v2026.6.7-beta.1**), both focused on channel delivery improvements across Telegram and WhatsApp. The project is clearly in an active stabilization phase for its 2026.6.x release line, with a high volume of P0/P1 bugs still open (many carrying `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` labels, which signals maintainer bandwidth pressure). The closure rate is notable — many PRs were merged or closed today, suggesting maintainers are actively working through the backlog.

---

## 2. Releases

### v2026.6.8-beta.1 (shipped today)
- **Telegram:** Richer, more resilient channel delivery — structured rich text with tables, lists, expandable blockquotes; prompt-preserving CLI backend delivery; retired native draft migration; safer rich-media boundaries.
- **WhatsApp:** Parallel improvements to channel delivery richness and robustness.

### v2026.6.7-beta.1 (shipped today)
- **Slack:** Same-channel final replies now persist in transcripts.
- **Telegram:** Expandable blockquotes and spool improvements.
- **Outbound media:** Top-level `image` message-tool now correctly attaches media.
- **Cross-channel:** Tighter silent replies, progress drafts, and paged action results.

**Migration notes:** The Telegram "native draft migration" being retired in v2026.6.8-beta.1 may affect users who relied on the legacy draft mode; testing in staging environments for forum-mode Telegram bots is recommended.

---

## 3. Project Progress

A large number of PRs were **merged or closed today**, representing significant incremental progress:

| PR | Summary |
|---|---|
| [#92810](https://github.com/openclaw/openclaw/pull/92810) | Voice-call media security: reject unvalidated streams (fail-closed) |
| [#92790](https://github.com/openclaw/openclaw/pull/92790) | Session auto-fallback: clear stale origin pins so primary model is retried |
| [#92786](https://github.com/openclaw/openclaw/pull/92786) | Agent DB permissions: tolerate chmod-less volumes (e.g., certain container/NFS setups) |
| [#92745](https://github.com/openclaw/openclaw/pull/92745) | Memory: explain skipped short-term recall hits (improved observability) |
| [#92724](https://github.com/openclaw/openclaw/pull/92724) | **Performance:** Drop Chokidar `awaitWriteFinish` polling to fix high idle CPU on macOS |
| [#92698](https://github.com/openclaw/openclaw/pull/92698) | Memory: skip markdown placeholder snippets during short-term promotion (fixes [#80582](https://github.com/openclaw/openclaw/issues/80582)) |
| [#92604](https://github.com/openclaw/openclaw/pull/92604) | `/status` TUI: fix cumulative usage context percent calculation (closes [#83526](https://github.com/openclaw/openclaw/issues/83526)) |
| [#92580](https://github.com/openclaw/openclaw/pull/92580) | Cron: persist resolved delivery target into isolated session (fixes silent cron completion failures) |
| [#92488](https://github.com/openclaw/openclaw/pull/92488) | Gateway: forward image-only input on `/v1/responses` (parity with chat completions) |
| [#92547](https://github.com/openclaw/openclaw/pull/92547) | Nodes: surface pending reapproval diagnostics in `node.list`/`node.describe` |
| [#92632](https://github.com/openclaw/openclaw/pull/92632) | Memory-core: clarify `memory_search` timeout path deadline configurability |
| [#92800](https://github.com/openclaw/openclaw/pull/92800) | Telegram: answer callback queries before sequentialize delays them (fixes inline button press timeouts) |
| [#89947](https://github.com/openclaw/openclaw/pull/89947) | UI: fix stale skill checkbox state after filtering |
| [#86015](https://github.com/openclaw/openclaw/pull/86015) | Gateway: make memory pressure thresholds configurable |
| [#81721](https://github.com/openclaw/openclaw/pull/81721) | Memory-core: add diarized JSON transcript segments for audio providers |
| [#92463](https://github.com/openclaw/openclaw/pull/92463) | Skip disabled bundled setup fallbacks (closes [#86039](https://github.com/openclaw/openclaw/issues/86039)) |
| [#92809](https://github.com/openclaw/openclaw/pull/92809) | Agents: fix regex to keep larger of adjacent b-sized model tokens |

The theme of today's merges is **reliability and observability** — better diagnostics, fewer silent failures, and tighter resource management.

---

## 4. Community Hot Topics

### Most-commented open issues (top by engagement):

1. **[#44925](https://github.com/openclaw/openclaw/issues/44925)** — *Subagent completion silently lost* (19 comments, Diamond Lobster 🦞, P1)
   - Multi-pattern failure: results disappear with no retry, no notification, no auto-restart on timeout in Telegram forum mode.
   - **Underlying need:** Reliability guarantees for subagent orchestration. Users need at-least-once delivery semantics.

2. **[#54253](https://github.com/openclaw/openclaw/issues/54253)** — *OpenClaw returns "LLM Request Failed" on RISC-V64* (14 comments)
   - Successful on x86 Mac, fails on RISC-V64. Suggests an architecture-specific issue, possibly in binary deps or WASM.
   - **Underlying need:** Broader platform support; heterogeneous hardware compatibility.

3. **[#45740](https://github.com/openclaw/openclaw/issues/45740)** — *gh-issues skill: untrusted issue body injected into sub-agent prompt* (13 comments, 🦞)
   - Raw GitHub issue bodies and review comments injected without sanitization — a **prompt injection / security** risk.
   - **Underlying need:** Supply-chain security for skill-driven agent workflows.

4. **[#90991](https://github.com/openclaw/openclaw/issues/90991)** — *Cron trigger contaminates global runtime state* (13 comments, 🐚, now closed)
   - Upgrading to 2026.6.x caused cron sessions to leak state, triggering system-wide overload. **Closed** — likely addressed by merged PRs today.

5. **[#42475](https://github.com/openclaw/openclaw/issues/42475)** — *Per-agent cost budget enforcement at gateway level* (12 comments, stale)
   - Operators want per-agent daily/monthly spend caps enforced before LLM dispatch.
   - **Underlying need:** Cost governance for multi-tenant or team deployments.

### Most-active open PRs:

- **[#92803](https://github.com/openclaw/openclaw/pull/92803)** — Fix: avoid adaptive fallback for budget thinking requests (compatibility + auth risk)
- **[#92812](https://github.com/openclaw/openclaw/pull/92812)** — Fix: WhatsApp session wipe on plugin update
- **[#88815](https://github.com/openclaw/openclaw/pull/88815)** — Feature: cross-channel session pinning/echo (XL refactor, 3 merge risks)
- **[#88748](https://github.com/openclaw/openclaw/pull/88748)** — Fix: bridge Gemini OAuth profiles into CLI runtime (XL, multi-risk)
- **[#44884](https://github.com/openclaw/openclaw/pull/44884)** — Feature: gateway public network hardening (XL, multi-risk)

---

## 5. Bugs & Stability

### Critical / P0 Bugs

| Issue | Severity | Status | Fix PR? |
|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) — Gateway memory leak: RSS 350MB → 15.5GB → OOM kills (🦞) | 🔴 P0 | Open | No fix PR identified; **needs urgent attention**. Related to diarized transcript PR [#81721](https://github.com/openclaw/openclaw/pull/81721) being merged today — may partially address. |

### High-Severity P1 Bugs

- **[#44925](https://github.com/openclaw/openclaw/issues/44925)** — Subagent completion silently lost (🦞). *Has linked PR open, no-new-fix-pr policy may apply.*
- **[#91778](https://github.com/openclaw/openclaw/issues/91778)** — `memory_search` broken since v2026.6.1 (index metadata missing). **Closed** — likely addressed by [#92632](https://github.com/openclaw/openclaw/pull/92632) or [#92698](https://github.com/openclaw/openclaw/pull/92698) merged today.
- **[#43661](https://github.com/openclaw/openclaw/issues/43661)** — Session hangs on compaction timeout, repeated duplicate messages (🦞, 👍:2). No fix PR identified.
- **[#85251](https://github.com/openclaw/openclaw/issues/85251)** — Codex app-server emits turn/started then goes silent forever (stuck-session recovery at 360s).
- **[#86538](https://github.com/openclaw/openclaw/issues/86538)** — Session write-lock timeouts block subagent delivery lanes.
- **[#45049](https://github.com/openclaw/openclaw/issues/45049)** — Agent loop allows simulated tool calls instead of enforcing real invocation (🦞).
- **[#43996](https://github.com/openclaw/openclaw/issues/43996)** — Sandbox container exits with code 255 on 2026.3.11+ (no-new-privileges) (🦞, 👍:2).

### Medium-Severity P2 Bugs (Active)

- **[#45740](https://github.com/openclaw/openclaw/issues/45740)** — Prompt injection via gh-issues skill (🦞, security).
- **[#44905](https://github.com/openclaw/openclaw/issues/44905)** — Discord leaks internal tool-call traces to channel (🐚).
- **[#40540](https://github.com/openclaw/openclaw/issues/40540)** — `openclaw update` fails with EBUSY on Windows (👍:2).
- **[#40540](https://github.com/openclaw/openclaw/issues/40540)** — Control UI WebSocket URL edit clears Gateway Token.
- **[#44502](https://github.com/openclaw/openclaw/issues/44502)** — Discord mention-gating regression.
- **[#45388](https://github.com/openclaw/openclaw/issues/45388)** — TUI `--session` mode doesn't live-stream messages.

### Regressions & New Today

- **Multiple `stale`-labeled P2 regressions** continue accumulating across memory management, routing, and configuration — these are aging without resolution.

---

## 6. Feature Requests & Roadmap Signals

Likely candidates for **next release (v2026.6.9 or v2026.7.0)** based on PR momentum and issue signal strength:

1. **External memory reranker support** — PR [#92725](https://github.com/openclaw/openclaw/pull/92725) (XL, just opened today). Open currently only offers built-in MMR or QMD for memory search.

2. **Cross-channel session pinning/echo** — PR [#88815](https://github.com/openclaw/openclaw/pull/88815) (XL refactor, high merge risk). Enables "pin from here" to mirror turns across threads bound to the same session.

3. **Backup exclude patterns** — PR [#44288](https://github.com/openclaw/openclaw/pull/44288) (XL). Adds `.gitignore`-like patterns and `--smart-exclude` to `openclaw backup create`.

4. **Channel echo / session pinning** — Large overlapping PR ecosystem; suggests strong user demand for multi-channel session coherence.

5. **Per-agent cost budgets** — Issue [#42475](https://github.com/openclaw/openclaw/issues/42475) (12 comments, stale) — no active PR yet, but the need is clear.

6. **Pre-reset memory flush** — Issue [#45608](https://github.com/openclaw/openclaw/issues/45608) (10 comments, 👍:4) — silent memory flush before `/new` using existing compaction mechanism.

7. **YAML config format** — Issue [#45758](https://github.com/openclaw/openclaw/issues/45758) (7 comments, 👍:2) — alternative to JSON5.

---

## 7. User Feedback Summary

### Recurring Pain Points

| Pain Point | Frequency | Representative Issues |
|---|---|---|
| **Silent failures / data loss** | 🔴 Very High | Subagent results lost [#44925](https://github.com/openclaw/openclaw/issues/44925); write tool overwrites shared files [#40001](https://github.com/openclaw/openclaw/issues/40001); Feishu image media lost [#41744](https://github.com/openclaw/openclaw/issues/41744) |
| **Session/memory instability** | 🔴 Very High | Memory chaos [#43747](https://github.com/openclaw/openclaw/issues/43747); memory leak [#91588](https://github.com/openclaw/openclaw/issues/91588); compaction hangs [#43661](https://github.com/openclaw/openclaw/issues/43661); `memory_search` metadata missing [#91778](https://github.com/openclaw/openclaw/issues/91778) |
| **Gateway crashes/loop** | 🟠 High | OOM from memory leak [#91588](https://github.com/openclaw/openclaw/issues/91588); Playwright CDP crash [#45224](https://github.com/openclaw/openclaw/issues/45224); Windows update EBUSY [#40540](https://github.com/openclaw/openclaw/issues/40540) |
| **Security / trust boundaries** | 🟠 High | Prompt injection via gh-issues skill [#45740](https://github.com/openclaw/openclaw/issues/45740); Discord tool-call leak [#44905](https://github.com/openclaw/openclaw/issues/44905); simulated tool calls [#45049](https://github.com/openclaw/openclaw/issues/45049) |
| **Platform support gaps** | 🟡 Medium | RISC-V64 failure [#54253](https://github.com/openclaw/openclaw/issues/54253); Windows node-host commands missing [#84644](https://github.com/openclaw/openclaw/issues/84644); chmod-less volumes [#92786](https://github.com/openclaw/openclaw/pull/92786) (fixed today) |
| **Cost/spend control** | 🟡 Medium | Per-agent budgets [#42475](https://github.com/openclaw/openclaw/issues/42475); DeepSeek prompt cache broken upgrade [#91018](https://github.com/openclaw/openclaw/issues/91018); cost dashboard undercounting [#46252](https://github.com/openclaw/openclaw/issues/46252) |

### Satisfaction Indicators
- **👍 reactions concentrated** on cost-control features, security fixes, and platform-expansion requests — users care about production readiness.
- **Closed issues** like [#90991](https://github.com/openclaw/openclaw/issues/90991), [#91778](https://github.com/openclaw/openclaw/issues/91778), and [#91018](https://github.com/openclaw/openclaw/issues/91018) suggest the team is responsive to blocker regressions post-upgrade.

### Key Use Cases Emerging
- Multi-agent orchestration (coding batches, parallel subagent runs) — but this remains unstable.
- Cron/heartbeat-driven background agents with cost awareness.
- Cross-channel deployments (Telegram + Slack + Discord + Feishu simultaneously).
- Public-facing gateway deployments requiring security hardening.

---

## 8. Backlog Watch

The following important issues have been open for weeks/months with no resolution path visible and carry the `clawsweeper:needs-maintainer-review` or `clawsweeper:needs-product-decision` flags — indicating they are blocked on team bandwidth or prioritization decisions:

| Issue | Age | Why It Matters |
|---|---|---|
| **[#44925](https://github.com/openclaw/openclaw/issues/44925)** — Subagent completion silently lost | ~3 months | Core orchestration reliability; Diamond Lobster rated |
| **[#45740](https://github.com/openclaw/openclaw/issues/45740)** — gh-issues prompt injection | ~3 months | Security vulnerability in a bundled skill |
| **[#43661](https://github.com/openclaw/openclaw/issues/43661)** — Session hangs on compaction timeout | ~3 months | Causes infinite duplicate message loops |
| **[#43996](https://github.com/openclaw/openclaw/issues/43996)** — Sandbox exits with code 255 (no-new-privileges) | ~3 months | Breaks sandbox sessions entirely |
| **[#40540](https://github.com/openclaw/openclaw/issues/40540)** — Windows `openclaw update` EBUSY | ~3 months | Blocks self-update on Windows servers |
| **[#43747](https://github.com/openclaw/openclaw/issues/43747)** — "Memory management is in chaos" | ~3 months | From actual team deployment (3 users) |
| **[#40001](https://github.com/openclaw/openclaw/issues/40001)** — Write tool lacks append mode | ~3 months | Causes silent data loss for cron/shared sessions |
| **[#91588](https://github.com/openclaw/openclaw/issues/91588)** — Gateway memory leak (RSS 350MB→15.5GB) | ~5 days | OOM crashes in production; no fix PR yet |
| **[#45608](https://github.com/openclaw/openclaw/issues/45608)** — Pre-reset memory flush (~3 months, 👍:4) | ~3 months | High community demand |

**Systemic concern:** A large number of high-quality, well-reproducible issues (many with `source-repro` and Diamond Lobster/Platinum Hermit ratings) sit in `clawsweeper:no-new-fix-pr` + `needs-maintainer-review` limbo. This suggests either a policy of restricting external contributions or a genuine maintainer bottleneck, which is a risk to long-term community health.

---

*Data sourced from openclaw/openclaw GitHub repository as of 2026-06-14. All links reference openclaw/openclaw namespaces.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent & Assistant Open-Source Ecosystem

**Date:** 2026-06-14 | **Analyst:** OWL (ZOO Company) | **Projects Covered:** 12 active projects

---

## 1. Ecosystem Overview

The personal AI agent open-source ecosystem is experiencing a period of **simultaneous rapid expansion and intense stabilization pressure**. Production-grade agent runtimes — led by OpenClaw, NanoClaw, Hermes Agent, and IronClaw — are in active release cycles battling regressions in session/memory reliability, channel delivery correctness, and gateway stability, while simultaneously absorbing feature demand for richer multi-channel UX (Telegram Bot API 10.1 Rich Messages is a simultaneous hot topic for both OpenClaw and Hermes Agent), persistent cross-session memory, and cost governance. A second tier of projects (NanoBot, PicoClaw, CoPaw, ZeroClaw) is investing heavily in UI/UX maturation (TUIs, WebUIs) and plugin extensibility architectures. Two projects (TinyClaw, ZeptoClaw) show no activity and may be effectively dormant. The overall trajectory is toward **production-readiness** — silent failures and data loss are the dominant user complaints across virtually every active project.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Releases (24h) | Health Score* |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | ~17 merged | 2 beta (v2026.6.8-beta.1, v2026.6.7-beta.1) | 🔴 **At Scale Under Pressure** |
| **Hermes Agent** | 50 | 50 | 3 merged | 0 (latest: v0.16.0, Jun 5) | 🟠 Growing Backlog |
| **IronClaw** | 6 | 24 | 6 merged | 0 (staged: 0.24.0→0.29.1) | 🟢 Focused & Healthy |
| **NanoBot** | 5 | 19 | 5 merged | 0 | 🟠 Critical Regressions on `main` |
| **NanoClaw** | 1 | 15 | 14 merged | 0 | 🟢 High Throughput |
| **CoPaw** | 10 | 8 | 2 merged | 0 (latest: v1.1.11.post2) | 🔴 Review Bottleneck |
| **ZeroClaw** | 42 | 50 | 12 merged | 0 (latest: v0.8.0-beta-1) | 🟠 Pre-Release Stabilization |
| **NullClaw** | 2 | 1 | 0 merged | 0 | 🟡 Small & Stalled |
| **PicoClaw** | 1 | 7 | 5 merged | 1 nightly | 🟢 Active & Lean |
| **LobsterAI** | 4 | 5 | 2 merged | 0 | 🔴 Maintenance Lull (stale labels) |
| **Moltis** | 1 | 1 | 0 merged | 0 | 🟡 Minimal Activity |
| **TinyClaw** | 0 | 0 | 0 | 0 | ⚫ Dormant |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | ⚫ Dormant |

*\*Health Score assesses backlog management, release cadence, critical regressions, and community responsiveness — not code quality.*

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw | Closest Competitors |
|---|---|---|
| **Scale** | 500 issues + 500 PRs in 24h — orders of magnitude larger than any competitor. Hermes (50+50) and ZeroClaw (42+50) are the next busiest, but an entire tier below. | Hermes Agent, IronClaw |
| **Release cadence** | 2 beta releases shipped *today*; continuous delivery model. | NanoClaw and IronClaw are accumulating batched changes. Hermes shipped v0.16.0 nine days ago. |
| **Channel breadth** | Telegram, WhatsApp, Slack, Discord, Feishu — the most comprehensive multi-channel support. | IronClaw (strong Slack focus), Hermes (Telegram-heavy), NanoClaw (Signal investment) |
| **Security posture** | Voice-call stream validation, memory pressure configurability, gateway network hardening PRs — security treated as a first-class concern. | IronClaw (safety crate), ZeroClaw (WASM plugin sandbox) |
| **Observability** | Memory search diagnostics, subagent completion tracking, session transcript diarization — strongest in-class. | NanoClaw (health audit PR), Hermes (diarized transcripts via OpenClaw upstream) |

### Technical Approach Differences

- **Runtime architecture:** OpenClaw uses a monolithic gateway architecture that handles session management, channel delivery, memory, and cron in a single进程. IronClaw is investing in a crate-based architecture (ironclaw_common, ironclaw_safety, ironclaw_skills) with cleaner separation of concerns. ZeroClaw is pursuing a plugin-oriented WASM + dynamic-library model.
- **Memory model:** OpenClaw's memory system is the most feature-rich but also the most complained-about (memory chaos issue [#43747] with 12 comments). NanoClaw is building an opt-in persistent memory scaffold from scratch. ZeroClaw has the most ambitious roadmap item ("Dream Mode" — 18 comments) but hasn't started implementation.
- **Plugin/Skill extensibility:** ZeroClaw's multi-track RFC system (WASM plugins, dynamic libraries, OCI registries) is the most architecturally ambitious. OpenClaw relies on a "skills" system but has a security vulnerability in its gh-issues skill (prompt injection). CoPaw uses an `uv`-based model provider allowlist approach.
- **UI strategy:** OpenClaw offers a CLI/TUI focus. NanoBot is investing simultaneously in WebUI and a full TUI (PR #4329). IronClaw is building "Reborn WebChat v2" as a SPA. ZeroClaw's "Zerocode TUI" is a flagship project investment. CoPaw migrated to Tauri for desktop (with painful results — 10+ min startup).

### Community Size Comparison
OpenClaw's volume (500+500) exceeds the *combined* activity of all other projects. The `clawsweeper` labeling system and Diamond Lobster/Platinum Hermit rating system indicate a **sophisticated community triage infrastructure** that smaller projects lack. However, this scale also creates a bottleneck: many issues carry `needs-maintainer-review` labels for months, suggesting the maintainer team is capacity-constrained relative to the community's output.

---

## 4. Shared Technical Focus Areas

### A. Channel Delivery & Rich Messaging
**Projects:** OpenClaw, Hermes Agent, IronClaw, CoPaw, ZeroClaw, NanoClaw
- **Telegram Bot API 10.1 Rich Messages** is a simultaneous hot topic: OpenClaw shipped rich text with tables/lists/blockquotes in v2026.6.8-beta.1; Hermes Agent has multiple issues and PRs converging on the same feature. The underlying driver is user demand for structured, visually rich output (LaTeX, tables, collapsible sections).
- **Silent delivery failures** are the #1 cross-project pain point: OpenClaw [#44925] (subagent results lost), Hermes [#45758] (Telegram delivery broken via custom providers), NullClaw [#941] (cron + channel delivery silently drops), NanoBot (drops last 8 messages from compaction).
- **Cross-channel session coherence** is an emerging demand signal: OpenClaw (PR #88815, cross-channel session pinning), Hermes (Telegram Web incompatibility with Rich Messages), IronClaw (PR #4836, surfaces connected channels to model).

### B. Memory & Session Reliability
**Projects:** OpenClaw, NanoBot, Hermes Agent, NanoClaw, ZeroClaw, CoPaw
- **Memory corruption/compaction bugs** are present in every project that has a memory system: OpenClaw [#91778], NanoBot [#4264], Hermes [#42405], NanoClaw [#2670], CoPaw [#5171].
- **Persistent cross-session memory** is a top-demanded feature: OpenClaw (long-standing requests), Hermes [#10771, "Auto Dream", 8 comments], NanoClaw (PR #2745 scaffold), ZeroClaw [#5849 "Dream Mode", 18 comments].
- **Session recovery after crashes** is universally weak: Hermes [#19245] (orphaned sessions), OpenClaw [#43661] (compaction hangs), NanoClaw [#2670] (poisoned-resume crash loops — *fixed today*).

### C. Platform & Deployment Maturity
**Projects:** OpenClaw, CoPaw, ZeroClaw, NanoBot, PicoClaw
- **macOS Tauri desktop degradation** affects multiple projects simultaneously: CoPaw (startup 10+ min), ZeroClaw (permissions broken, window disappearance), Windows also problematic (OpenClaw EBUSY, CoPaw unresponsive).
- **Docker/production deployment** remains a friction point: ZeroClaw [#6760] (no official Docker docs), Hermes [#45792] (Docker environment detection), NanoClaw [#2732] (Docker Desktop bind-mount crash loops).
- **Multi-architecture support** is nascent: OpenClaw has a RISC-V64 failure report, NanoClaw has a FreeBSD token drain issue via PicoClaw, Windows is a second-class citizen across most projects.

### D. Security & Trust Boundaries
**Projects:** OpenClaw, Hermes Agent, IronClaw, ZeroClaw, CoPaw
- **Prompt injection via skills/tools** is a systemic concern: OpenClaw [#45740] (gh-issues skill), Hermes CoPaw [#5174] (cron agent file-write permissions unclear).
- **Plugin/tool sandboxing** is being actively addressed: IronClaw (dedicated safety crate), ZeroClaw (WASM plugins as the default, not native code), PicoClaw (exec workspace symlink guard).

---

## 5. Differentiation Analysis

| Project | Primary Target User | Key Differentiator | Technical Architecture |
|---|---|---|---|
| **OpenClaw** | Production operators / teams needing multi-channel delivery | Breadth of channel integrations + security posture | Monolithic gateway, plugin skills, CLI/TUI-first |
| **Hermes Agent** | End users wanting a managed desktop+agent experience | Desktop app (Electron) + tight Nous Research model integration | Desktop-first, Electron + CLI, opinionated provider stack |
| **IronClaw** | Developer teams wanting modular, crate-based extensibility | Crate-level separation of concerns (common/safety/skills) + Rust ecosystem | Micro-crate Rust architecture, Reborn WebChat SPA |
| **NanoBot** | Self-hosters wanting a polished out-of-box experience | WebUI + TUI dual-interface + strong production defaults | Python + FastAPI gateway, WebUI/CLI parity focus |
| **NanoClaw** | Privacy-first local-agent users wanting resilience | Self-healing agent runner + daily backups + Signal integration | Rust agent runtime, Docker container management, disaster recovery |
| **CoPaw** | Chinese-market users / Qwen ecosystem users | Deep Qwen model integration + Tauri desktop + multi-language | Python→Tauri migration, model allowlist system, i18n-first |
| **ZeroClaw** | Extensibility-focused developers & plugin authors | WASM/dynamic-library plugin system + Zerocode TUI as flagship | Rust daemon, plugin registry, WASM sandbox, OCaml-influenced TUI |
| **PicoClaw** | Edge/embedded-device agent users (Sipeed hardware) | Runs on constrained hardware + nightly release cadence | Go runtime, remote WebSocket mode, vision pipeline |
| **LobsterAI** | Enterprise/cowork users (Netease ecosystem) | Cowork session artifacts + skills marketplace | Electron + artifact preview, skills import pipeline |
| **NullClaw** | Users wanting lightweight cron+channel agents | Minimal footprint — cron + Telegram/Mattermost delivery | Rust, single-purpose, low complexity |
| **Moltis** | MCP power users | Tight MCP server OAuth integration | Rust, MCP-first, OAuth compliance focus |

---

## 6. Community Momentum & Maturity

### Tier 1 — At Scale, Stabilizing Under Pressure
- **OpenClaw**: Massive community (500+500/day), but many high-quality issues languishing in `needs-maintainer-review` limbo for months. The project has outgrown its maintainer bandwidth. Closure rate is strong today (~17 PRs merged) but the intake rate is even stronger.
- **Hermes Agent**: Growing backlog (44 open issues, 45 open PRs outpace closures), no release in 9 days despite significant merged work. The Telegram Rich Message effort is absorbing community energy.

### Tier 2 — Rapidly Iterating, Narrow Focus
- **IronClaw**: Best-in-class contribution quality — stacked PRs properly sequenced, follow-up issues filed in real-time, RFC-driven development. Small community but highly engaged. The #4644 attachment pipeline epic is a model of systematic feature delivery.
- **NanoClaw**: Exceptional throughput (14 PRs merged in 24h). The 0 open active issues count is notable — either genuinely clean backlog or issue reporting happens off-GitHub. Infrastructure-heavy sprint (SDK upgrade, memory scaffold, provider capability registry) suggests building foundations for a major release.
- **ZeroClaw**: High velocity on multiple simultaneous tracks (plugin architecture RFCs, Zerocode TUI, stabilization). The v0.8.1 tracker issue provides good release coordination.

### Tier 3 — Active but Constrained
- **NanoBot**: Quality community contributions but 2 critical regressions on `main` indicate CI/testing gaps. The community is building real workflows (TUI, TTS, automation management) but is at risk from blocking regressions.
- **CoPaw**: Review bottleneck is the critical problem — 6 well-scoped first-time-contributor PRs with zero review activity for 5+ days will discourage community participation. Critical bugs (chat hang, context loss) also unanswered.
- **PicoClaw**: Small, healthy, lean. 5 PRs merged / 2 open / 1 nightly build. The token drain bug (#3012) is a risk for the project's value proposition (run agents cheaply on edge hardware).

### Tier 4 — Maintenance Mode / Low Activity
- **NullClaw**: Tiny but functional community. The critical cron delivery bug has a fix PR submitted same day — good responsiveness potential, but only 1 maintainer appears active.
- **Moltis**: 1 issue + 1 PR in 24h. The MCP OAuth bug is well-diagnosed with a fix PR. Too small to assess cadence.
- **LobsterAI**: All substantive items stale for 72 days. Two small UX fixes landed today (good), but the openclaw compatibility issue (#1443) blocking users has no maintainer response in 72 days (bad). Risk of community abandonment.
- **TinyClaw, ZeptoClaw**: No activity. Effectively dormant.

---

## 7. Trend Signals

### Trend 1: "Production Readiness Gap" Is the Defining Challenge of 2026
Across *every* project with meaningful adoption, the dominant user complaints are not about missing features — they're about **silent failures, data loss, and unreliable recovery**. Subagent results silently lost (OpenClaw), memory compaction corrupting session history (NanoBot), cron jobs marked complete but messages never delivered (NullClaw), chat hangs after idle (CoPaw), context compression dropping all tokens (CoPaw). The ecosystem is transitioning from "feature-full demo" to "production-grade reliable," and most projects are in the painful middle. **Value signal:** Projects that invest in observability (OpenClaw's session diarization, NanoClaw's health audit, IronClaw's run-borking elimination) will win operator trust.

### Trend 2: Telegram Is the De Facto Integration Standard
Telegram is the most-supported channel across the ecosystem (OpenClaw, Hermes Agent, PicoClaw, NanoClaw via community, NullClaw), and the Telegram Bot API 10.1 release on June 11, 2026 triggered **simultaneous feature sprints** in at least two major projects. Rich Messages (tables, LaTeX, collapsible blocks) are becoming table stakes. However, the Telegram Web compatibility gap Hermes discovered is a cautionary signal. **Value signal:** Library-level abstractions for channel-agnostic rich message rendering (with per-channel fallback) would address a cross-project need.

### Trend 3: Persistent Memory Is the Next Battleground
The three highest-engagement memory feature requests are OpenClaw's "memory is in chaos" (#43747), Hermes Agent's "Auto Dream" (#10771, 8 comments), and ZeroClaw's "Dream Mode" (#5849, 18 comments). None has a complete implementation yet. NanoClaw is furthest along with its scaffold (PR #2745), but it's infrastructure-only. **Value signal:** A shared memory persistence interface — spanning session-scoped short-term recall, agent-scoped long-term consolidation, and cross-session persistent knowledge — would be valuable infrastructure for the ecosystem.

### Trend 4: Plugin Ecosystem Architecture Is Diverging
Projects are choosing fundamentally different extensibility models: OpenClaw (skills as prompt-linked tools), IronClaw (Rust crates with clean trait boundaries), ZeroClaw (WASM sandbox + dynamic library + OCI registry — the most ambitious), CoPaw (`uv` allowlist model), NanoBot (Pydantic config-base pattern). There is no convergence. **Value signal:** A cross-project MCP-based skill/tool standard (building on the MCP protocol already adopted by NanoBot and Moltis) could become the interoperability layer, analogous to how LSP standardized editor-language communication.

### Trend 5: Cost Governance Is an Emerging Operator Need
OpenClaw's per-agent cost budgets (#42475), PicoClaw's runaway token consumption from the evolution loop (#3012), NanoBot's `temperature` parameter bug burning Anthropic API credits on every request (#4333), and NanoClaw's inbound image compression (PR #2964) all point to the same need: **operators need fine-grained cost control and visibility**. As agents handle more tasks autonomously, unchecked API spending becomes an operational risk. **Value signal:** Per-agent, per-session, and per-provider spend caps with real-time dashboards.

### Trend 6: Tauri Desktop Migrations Are Producing Pain
CoPaw (startup 1→10 min, unresponsive) and ZeroClaw (permissions broken, window lifecycle broken) both show that the Rust+WebView desktop model, while promising, introduces platform-specific regressions that degrade the user experience relative to Electron or native toolkits. **Value signal:** Desktop may not be the right investment for projects whose core value is the agent runtime. Hermes Agent (Electron, mature desktop) and NanoBot (web-first, desktop optional) have fewer desktop complaints.

### Value for AI Agent Developers
- **Reliability engineering** is the highest-leverage investment area — testing, observability, and graceful degradation matter more than features.
- **MCP is winning** as the tool integration protocol; projects building MCP-compliant surfaces will benefit from ecosystem tooling reuse.
- **The "memory problem"** (persistent, reliable, cost-effective agent memory) remains unsolved and is the single biggest architectural opportunity.
- **Multi-channel delivery** is converging on a common requirement set; a shared abstraction layer could reduce duplicated effort across projects.
- **Community triage infrastructure** (OpenClaw's clawsweeper labels, Diamond Lobster ratings) is a force multiplier for maintainer bandwidth — smaller projects should adopt similar systems early.

---

*Report generated by OWL (ZOO Company). Data sourced from GitHub repositories as of 2026-06-14. This analysis reflects a single-day snapshot and should be combined with longitudinal tracking for strategic decisions.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-14

---

## 1. Today's Overview

NanoBot is experiencing a period of intense development activity. In the last 24 hours, **19 pull requests were updated** (14 still open, 5 merged/closed) and **5 issues were updated** (2 open, 3 closed), with no new releases. The project is clearly in an active iteration cycle: the majority of today's merged work focuses on bug fixes (memory compaction, WebUI startup blocking, tool config import cycles) and WebUI feature parity. A large volume of open PRs (14) signals a growing backlog that will need maintainer attention. The absence of any new release despite this volume of merged fixes suggests the team may be batching changes for an upcoming version.

---

## 2. Releases

**None.** No new releases were published in the last 24 hours.

---

## 3. Project Progress

### Merged / Closed PRs (5)

| # | PR | Summary |
|---|-----|---------|
| [4326](https://github.com/HKUDS/nanobot/pull/4326) | **fix(memory): summarize full session tail during idle compaction** | Fixes [#4264](https://github.com/HKUDS/nanobot/issues/4264) — `idleCompact` now summarizes the full unconsolidated session tail instead of dropping the last 8 messages from the summarization window, preventing incorrect conclusions in `history.jsonl`. |
| [4327](https://github.com/HKUDS/nanobot/pull/4327) | **Fix WebUI startup blocking on slow gateway routes** | Moves slow WebUI HTTP handlers off the gateway event loop, avoids full session JSONL reads for sidebar workspace scope, and reduces startup catalog fetches. |
| [4314](https://github.com/HKUDS/nanobot/pull/4314) | **Break tool config schema import cycle** | Refactors shared Pydantic config `Base` into a new `nanobot.config_base` module to resolve an import cycle, preserving the self-describing tool authoring pattern. |
| [4098](https://github.com/HKUDS/nanobot/pull/4098) | **Fix exec workspace symlink guard and path precedence** | Fixes [#4072](https://github.com/HKUDS/nanobot/issues/4072) (symlink escape from workspace) and [#4083](https://github.com/HKUDS/nanobot/issues/4083) (`pathAppend` now prepends on Unix for correct executable lookup precedence). |
| [4313](https://github.com/HKUDS/nanobot/pull/4313) | **feat(webui): config.json / WebUI parity** | Adds write endpoints for temperature, tool limits, dream, channels, and memory fields; expands settings payload and UI controls in Models and Agent limit panels. |

**Key themes:** Memory correctness, WebUI performance at startup, configuration parity between WebUI and `config.json`, and exec tool security hardening.

---

## 4. Community Hot Topics

### Most Discussed Issue

- **[#193 — Ollama API support?](https://github.com/HKUDS/nanobot/issues/193)** (15 comments, closed) — By far the most-commented issue in this window. Users want native Ollama API integration alongside the existing vLLM support. The issue was closed without a clear resolution visible here, suggesting the community need remains partially unmet. This is a recurring demand signal for local-model-provider support.

### Most Active Open Issues

- **[#4322 — NameError: 'session_key' not defined in context.py after merge](https://github.com/HKUDS/nanobot/issues/4322)** — A regression introduced by commit `f8532448` (merging `origin/main` into `fix/prompt-caching`) that crashes agent startup. Affects users who pull latest main. High urgency.
- **[#4333 — Anthropic provider sends deprecated `temperature` to opus-4-8 / Fable](https://github.com/HKUDS/nanobot/issues/4333)** — Breaks every request for users on newer Anthropic models. Already has a fix PR ([#4334](https://github.com/HKUDS/nanobot/pull/4334)).

### Most Active Open PRs

- **[#4329 — Nanobot TUI](https://github.com/HKUDS/nanobot/pull/4329)** — A full inline interactive TUI for `nanobot agent` with markdown rendering, slash commands, multimodal input (images + audio transcription), and session management. A significant UX investment.
- **[#4330 — feat(webui): add automation management view](https://github.com/HKUDS/nanobot/pull/4330)** — WebUI surface for listing, filtering, running, pausing, and deleting automations with i18n support.
- **[#4291 — feat(spawn): allow subagents to use configurable model presets](https://github.com/HKUDS/nanobot/pull/4291)** — Subagents can now run on a different model preset than the parent agent, enabling more flexible multi-agent workflows.

**Underlying needs:** Users want (1) broader local model provider support, (2) a richer terminal and web UX, (3) multi-agent flexibility, and (4) stability in core session/memory management.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| 🔴 **Critical** | [#4322](https://github.com/HKUDS/nanobot/issues/4322) — `NameError: 'session_key'` | Agent crashes on startup after pulling latest `main`. Regression from a merge commit. | None yet — needs urgent attention. |
| 🔴 **Critical** | [#4333](https://github.com/HKUDS/nanobot/issues/4333) — `temperature` sent to opus-4-8 / Fable | Every Anthropic request returns 400 for users on `claude-opus-4-8` or Fable. | [#4334](https://github.com/HKUDS/nanobot/pull/4334) (open, ready to merge) |
| 🟡 **Medium** | [#4264](https://github.com/HKUDS/nanobot/issues/4264) — `idleCompact` drops last 8 messages from summary | Incorrect session history compaction leaves wrong conclusions in `history.jsonl`. | [#4326](https://github.com/HKUDS/nanobot/pull/4326) ✅ merged |
| 🟡 **Medium** | [#4302](https://github.com/HKUDS/nanobot/issues/4302) — MCP `streamableHttp` GC crash | `RuntimeError: Attempted to exit cancel scope in a different task` when MCP server reconnects. | [#4303](https://github.com/HKUDS/nanobot/pull/4303) (open) |
| 🟢 **Low** | [#4083](https://github.com/HKUDS/nanobot/issues/4083) — `pathAppend` precedence | Configured tool paths don't take precedence over system executables. | [#4098](https://github.com/HKUDS/nanobot/pull/4098) ✅ merged |

**Stability assessment:** Two critical regressions are active. The `session_key` NameError ([#4322](https://github.com/HKUDS/nanobot/issues/4322)) is particularly concerning as it blocks all users on latest `main` and has no fix PR yet. The Anthropic `temperature` issue has a ready fix that should be merged promptly.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood of near-term inclusion |
|--------|--------|----------------------------------|
| **Ollama API provider support** | [#193](https://github.com/HKUDS/nanobot/issues/193) (15 comments) | High — strong community demand, but issue was closed; may need reopening or a dedicated PR. |
| **Subagent model presets** | [#4291](https://github.com/HKUDS/nanobot/pull/4291) | High — PR is open and well-scoped. |
| **TUI (terminal UI)** | [#4329](https://github.com/HKUDS/nanobot/pull/4329) | Medium — large PR, needs review; significant UX addition. |
| **Automation management in WebUI** | [#4330](https://github.com/HKUDS/nanobot/pull/4330) | Medium — aligns with WebUI parity push. |
| **Toggle built-in filesystem tools** | [#4138](https://github.com/HKUDS/nanobot/pull/4138) | Medium — follows existing `tools.exec.enable` / `tools.web.enable` pattern. |
| **TTS with multi-provider support** | [#4316](https://github.com/HKUDS/nanobot/pull/4316) | Medium — adds OpenAI, Groq, ElevenLabs TTS. |
| **WebUI reverse proxy / sub-path support** | [#4328](https://github.com/HKUDS/nanobot/pull/4328) | Medium — important for production deployments. |

**Prediction for next release:** The next version will likely focus on **stability fixes** (session_key regression, Anthropic temperature, MCP crash) and **WebUI improvements** (automation view, settings parity, env-var resolution). Ollama support and the TUI are strong candidates but may land in a subsequent minor release.

---

## 7. User Feedback Summary

**Pain points:**
- **Breaking regressions on `main`**: Users pulling latest `main` hit a startup crash ([#4322](https://github.com/HKUDS/nanobot/issues/4322)), indicating a need for better CI gating or pre-merge integration tests.
- **Anthropic model compatibility**: The hardcoded `opus-4-7` exemption for `temperature` ([#4333](https://github.com/HKUDS/nanobot/issues/4333)) shows the provider layer doesn't keep up with Anthropic's model release cadence.
- **Local model provider gap**: 15 comments on the Ollama issue ([#193](https://github.com/HKUDS/nanobot/issues/193)) reveal strong demand for running NanoBot with local models, not just vLLM.
- **WebUI deployment friction**: Multiple PRs ([#4328](https://github.com/HKUDS/nanobot/pull/4328), [#4327](https://github.com/HKUDS/nanobot/pull/4327)) address real deployment pain — reverse proxy support and slow startup — suggesting users are running NanoBot in production environments.
- **Env-var resolution gaps**: Three related PRs ([#4323](https://github.com/HKUDS/nanobot/pull/4323), [#4324](https://github.com/HKUDS/nanobot/pull/4324), [#4325](https://github.com/HKUDS/nanobot/pull/4325)) all address the same root cause: `load_config()` returns raw `${VAR}` templates that aren't resolved before use in transcription and settings paths.

**Satisfaction signals:** Users are actively contributing fixes (not just reporting issues), which indicates a healthy, invested community. The breadth of PRs — from TUI to TTS to automation management — shows users are building real workflows on top of NanoBot.

---

## 8. Backlog Watch

| Item | Age | Status | Note |
|------|-----|--------|------|
| [#4322](https://github.com/HKUDS/nanobot/issues/4322) — `session_key` NameError | 1 day | **OPEN, no fix PR** | Blocks all users on latest `main`. Needs immediate maintainer triage. |
| [#4303](https://github.com/HKUDS/nanobot/pull/4303) — MCP generator GC crash fix | 3 days | **OPEN** | Fixes a crash with `streamableHttp` MCP servers. Low comment count but high severity for MCP users. |
| [#4138](https://github.com/HKUDS/nanobot/pull/4138) — Toggle built-in filesystem tools | 13 days | **OPEN** | Straightforward enhancement following existing patterns. Ready for review. |
| [#4291](https://github.com/HKUDS/nanobot/pull/4291) — Subagent model presets | 3 days | **OPEN** | Well-scoped feature with clear use case. |
| [#193](https://github.com/HKUDS/nanobot/issues/193) — Ollama support | ~4 months | **CLOSED, unresolved** | 15 comments with no clear resolution. Risk of community frustration if not addressed. |

**Maintainer action items:**
1. **Immediately** investigate and fix [#4322](https://github.com/HKUDS/nanobot/issues/4322) — this is a blocking regression on `main`.
2. Merge [#4334](https://github.com/HKUDS/nanobot/pull/4334) to unblock Anthropic opus-4-8 / Fable users.
3. Review and merge [#4303](https://github.com/HKUDS/nanobot/pull/4303) to fix MCP crash.
4. Reopen or create a tracking issue for Ollama support ([#193](https://github.com/HKUDS/nanobot/issues/193)) to signal that the team is aware of the demand.

---

*Data snapshot: 2026-06-14 | Source: [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-14

---

## 1. Today's Overview

Hermes Agent remains in a period of intense community activity with **50 issues and 50 PRs updated in the last 24 hours**, though no new release has shipped since v0.16.0 (2026-06-05). The project is clearly in a heavy development cycle: the volume of open issues (44) and open PRs (45) significantly outpaces closures (6 issues, 5 PRs), indicating the team is accumulating a growing backlog. The dominant themes today are **Telegram Bot API 10.1 Rich Messages** (multiple issues and PRs converging rapidly), **custom provider API-key resolution bugs** (with fix PRs already in flight), and **memory/session stability** issues that have lingered for weeks. The absence of a release in the past nine days despite this volume suggests the team is batching changes for a v0.16.1 or v0.17.0.

---

## 2. Releases

**No new releases today.** The latest release remains **v0.16.0** (2026-06-05). Given the volume of bug fixes already merged or in PR (OAuth token refresh, checkpoint lock cleanup, custom provider key resolution, skill description truncation), a patch release appears imminent.

---

## 3. Project Progress

### Merged / Closed PRs (Past 24h)

| # | PR | Summary |
|---|-----|---------|
| [#45871](https://github.com/NousResearch/hermes-agent/pull/45871) | fix(checkpoints): remove stale shadow index locks | Prevents git operations on per-project shadow indexes from failing due to orphaned `.lock` files. Preserves active locks to avoid race conditions. |
| [#45870](https://github.com/NousResearch/hermes-agent/pull/45870) | fix(codex): refresh OAuth tokens earlier | Shifts Codex OAuth token refresh to **36 hours before expiry** instead of last-minute, preventing mid-request token expiration on long-running agent turns. |
| [#33956](https://github.com/NousResearch/hermes-agent/pull/33956) | feat(provider): add Codex ACP model provider support | Adds `codex-acp` as a new model provider via `@zed-industries/codex-acp` over ACP stdio, giving users an alternative Codex path for reliability. |
| [#45826](https://github.com/NousResearch/hermes-agent/issues/45826) | macOS file tool tests fail on `/private` paths | Closed — test suite issue on Darwin, not a runtime bug. |

### Notable Open PRs Aiming to Land Soon

- **[#45873](https://github.com/NousResearch/hermes-agent/pull/45873)** — Fixes the critical `key_env`/`api_key_env` custom provider bug (issues [#44666](https://github.com/NousResearch/hermes-agent/issues/44666), [#43586](https://github.com/NousResearch/hermes-agent/issues/43586)) where API keys from env vars were silently ignored, causing 401 errors.
- **[#45879](https://github.com/NousResearch/hermes-agent/pull/45879)** — Raises the skill description limit in the system prompt from **60 to 300 characters**, which should significantly improve the model's ability to route to the correct skill.
- **[#45866](https://github.com/NousResearch/hermes-agent/pull/45866)** — Adds native OS notifications to the Hermes Desktop app (Electron) with per-type toggles, replacing the single hardcoded notification.
- **[#45867](https://github.com/NousResearch/hermes-agent/pull/45867)** — Adds **OpenRouter Fusion** as a provider-managed server tool, allowing OpenRouter's model-routing to be used for chat completions.

---

## 4. Community Hot Topics

### Telegram Bot API 10.1 Rich Messages — The Dominant Theme

The single biggest cluster of activity today revolves around **Telegram Bot API 10.1** support, released by Telegram on June 11, 2026. This is a multi-faceted effort spanning feature requests, bug reports, and PRs:

- **[#44428](https://github.com/NousResearch/hermes-agent/issues/44428)** (5 comments, 👍3) — Feature request for full `RichMessage` / `sendRichMessage` / `sendRichMessageDraft` support including headings, lists, tables, LaTeX, and collapsible blocks.
- **[#45854](https://github.com/NousResearch/hermes-agent/issues/45854)** — Feature request to add `sendRichMessage` to the `send_message` tool, noting that legacy `parse_mode=MarkdownV2` cannot render LaTeX, `<details>`, task lists, etc.
- **[#45771](https://github.com/NousResearch/hermes-agent/issues/45771)** (👍2) — Bug: Rich Message body text renders **too large** compared to normal Telegram messages, degrading the UX for regular prose.
- **[#45785](https://github.com/NousResearch/hermes-agent/issues/45785)** (👍1) — Bug: **Telegram Web cannot render** `sendRichMessage` at all, showing "This message is currently not supported on Telegram Web."
- **[#45770](https://github.com/NousResearch/hermes-agent/issues/45770)** (👍1) — Bug: Rich Message **draft streaming** does not work in private DM topics, forcing a tradeoff between rich formatting and streaming.

**Analysis:** The community is eager for Hermes to adopt Telegram's new rich formatting API, but the implementation is revealing platform fragmentation (Telegram Web incompatibility) and rendering inconsistencies. The underlying need is clear: users want **structured, visually rich output** (tables, math, collapsible sections) that Telegram now natively supports, rather than relying on Markdown workarounds. However, the Telegram Web gap means Hermes will likely need a fallback strategy.

### Automatic Memory Consolidation

- **[#10771](https://github.com/NousResearch/hermes-agent/issues/10771)** (8 comments, 👍5) — The most-commented issue today, requesting an "Auto Dream" feature inspired by Claude Code: periodic automatic cleanup, deduplication, and optimization of memory files. This has been open since April 2026 and continues to attract community interest.

**Analysis:** This reflects a real operational pain point — Hermes agents accumulate stale memory over time (relative dates like "yesterday" become meaningless, facts duplicate, files bloat). The 👍 count and comment volume suggest this is a high-priority quality-of-life improvement for long-running agent deployments.

---

## 5. Bugs & Stability

### P1 — Crashes / Data Loss

| # | Issue | Severity | Fix PR? |
|---|-------|----------|---------|
| [#45758](https://github.com/NousResearch/hermes-agent/issues/45758) | **Desktop app crash resets profile config.yaml and deletes .env for non-default profiles** (Windows, v0.16.0) | 🔴 P1 — Data loss | None yet |
| [#29205](https://github.com/NousResearch/hermes-agent/issues/29205) | Anthropic fallback fails after Codex reasoning-only empty turns (trailing assistant prefill) | 🔴 P1 | Closed (fix merged) |
| [#27988](https://github.com/NousResearch/hermes-agent/issues/27988) | Codex Responses adapter maps complete `final_answer` to `finish_reason=incomplete` on Azure Foundry | 🔴 P1 | Closed (fix merged) |

### P2 — Functional Bugs

| # | Issue | Severity | Fix PR? |
|---|-------|----------|---------|
| [#44666](https://github.com/NousResearch/hermes-agent/issues/44666) | `api_key_env` alias silently ignored in `providers:` entries → 401 | 🟠 P2 | **PR [#45873](https://github.com/NousResearch/hermes-agent/pull/45873)** |
| [#43586](https://github.com/NousResearch/hermes-agent/issues/43586) | `model:` block with bare `provider: custom` + `key_env` ignores API key → 401 | 🟠 P2 | **PR [#45873](https://github.com/NousResearch/hermes-agent/pull/45873)** |
| [#23975](https://github.com/NousResearch/hermes-agent/issues/23975) | Context compression interrupted by gateway messages → fallback summary marker | 🟠 P2 | None yet |
| [#45674](https://github.com/NousResearch/hermes-agent/issues/45674) | `hermes mcp list` crashes with `AttributeError` when MCP server entry is a string | 🟠 P2 | None yet |
| [#45792](https://github.com/NousResearch/hermes-agent/issues/45792) | Hermes inside Docker doesn't understand its environment (docs issue) | 🟠 P2 | None yet |
| [#45770](https://github.com/NousResearch/hermes-agent/issues/45770) | Telegram Rich Message draft streaming broken in private DM topics | 🟠 P2 | None yet |
| [#45785](https://github.com/NousResearch/hermes-agent/issues/45785) | Telegram Web cannot render `sendRichMessage` replies | 🟠 P2 | None yet |
| [#19245](https://github.com/NousResearch/hermes-agent/issues/19245) | `session_search` returns empty after crash — orphaned session JSON not recovered | 🟠 P2 | None yet |
| [#42405](https://github.com/NousResearch/hermes-agent/issues/42405) | Memory at capacity → `replace` zero-match retry loop → silent hang | 🟠 P2 | None yet |
| [#33907](https://github.com/NousResearch/hermes-agent/issues/33907) | Context compression creates orphan sessions missing from `state.db` | 🟠 P2 | None yet |

### P3 — Minor / Platform-Specific

| # | Issue | Notes |
|---|-------|-------|
| [#45877](https://github.com/NousResearch/hermes-agent/issues/45792) | Cron background review blocks read-only tools (`read_file`, `search_files`) | New today |
| [#45876](https://github.com/NousResearch/hermes-agent/issues/45876) | `web_search` falls through to DDGS (timeout) in cron sessions despite AnySearch configured | New today — regional issue (mainland China) |
| [#45102](https://github.com/NousResearch/hermes-agent/issues/45102) | Hermes Desktop fails to start on Linux — GPU error | No response yet |
| [#45805](https://github.com/NousResearch/hermes-agent/issues/45805) | Desktop: Thinking level setting cannot be persisted, always reverts to Medium | Duplicate |

---

## 6. Feature Requests & Roadmap Signals

| # | Request | Likelihood of Next Version | Signal Strength |
|---|---------|---------------------------|-----------------|
| [#44428](https://github.com/NousResearch/hermes-agent/issues/44428) / [#45854](https://github.com/NousResearch/hermes-agent/issues/45854) | Telegram Bot API 10.1 Rich Messages support | **High** — Multiple issues + PRs already in flight; Telegram released this 3 days ago and community pressure is immediate | 🟢 Strong |
| [#10771](https://github.com/NousResearch/hermes-agent/issues/10771) | Automatic Memory Consolidation ("Auto Dream") | **Medium** — High community demand (8 comments, 👍5) but complex to implement correctly; open since April | 🟡 Moderate |
| [#45865](https://github.com/NousResearch/hermes-agent/issues/45865) | Ability to remove provider accounts from UI | **Medium** — Basic UX gap; users can add accounts but not disconnect them | 🟡 Moderate |
| [#45866](https://github.com/NousResearch/hermes-agent/pull/45866) | Native OS notifications with per-type toggles (Desktop) | **High** — PR already open and active | 🟢 Strong |
| [#45867](https://github.com/NousResearch/hermes-agent/pull/45867) | OpenRouter Fusion support | **High** — PR already open | 🟢 Strong |
| [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) | Multilingual i18n support with 15 languages (Desktop) | **Medium** — Large PR, synced post-v0.16.0, but competes with upstream's native i18n skeleton | 🟡 Moderate |

**Prediction for v0.16.1 (or next patch):** The most likely candidates are the custom provider API-key fix ([#45873](https://github.com/NousResearch/hermes-agent/pull/45873)), the skill description limit increase ([#45879](https://github.com/NousResearch/hermes-agent/pull/45879)), and the Codex OAuth token refresh fix (already merged). Telegram Rich Messages may land in a v0.17.0 given the complexity and the Telegram Web compatibility gap that needs a fallback strategy.

---

## 7. User Feedback Summary

**Pain Points:**

1. **Custom provider authentication is broken for a subset of configurations.** Users configuring named custom providers or bare `model: { provider: custom }` with `key_env`/`api_key_env` are silently getting 401 errors because the API key is never read from the environment. This is a critical onboarding blocker for users running local models (Ollama, etc.) or non-standard cloud endpoints. The fact that two separate issues ([#44666](https://github.com/NousResearch/hermes-agent/issues/44666), [#43586](https://github.com/NousResearch/hermes-agent/issues/43586)) report the same underlying bug suggests the documentation and actual behavior are misaligned.

2. **Memory management is a growing operational burden.** Multiple issues ([#10771](https://github.com/NousResearch/hermes-agent/issues/10771), [#19245](https://github.com/NousResearch/hermes-agent/issues/19245), [#42405](https://github.com/NousResearch/hermes-agent/issues/42405)) describe a pattern: Hermes agents accumulate stale, duplicated, or orphaned memory over time, leading to degraded performance, silent hangs, and lost sessions after crashes. Users are asking for automated consolidation — a sign that the current manual memory model doesn't scale.

3. **Telegram users want richer output but are hitting platform limits.** The enthusiasm for Bot API 10.1 Rich Messages is tempered by Telegram Web incompatibility and rendering inconsistencies. Users are essentially saying: "We want LaTeX, tables, and collapsible blocks, but not at the cost of breaking Telegram Web or making normal text look oversized."

4. **Desktop app stability concerns.** Two issues ([#45758](https://github.com/NousResearch/hermes-agent/issues/45758), [#45102](https://github.com/NousResearch/hermes-agent/issues/45102)) report crashes and startup failures on Windows and Linux respectively, with the Windows issue involving **data loss** (profile config reset). For a desktop product targeting non-technical users, this is a significant trust issue.

**Satisfaction Signals:**
- The rapid PR response to the custom provider bug ([#45873](https://github.com/NousResearch/hermes-agent/pull/45873) opened same day as issue [#44666](https://github.com/NousResearch/hermes-agent/issues/44666)) suggests the community sees the maintainers as responsive.
- The Codex ACP provider PR ([#33956](https://github.com/NousResearch/hermes-agent/pull/33956) merged) addresses a real reliability concern for Codex users.

---

## 8. Backlog Watch

These important issues and PRs have been open for extended periods without resolution and may need maintainer attention:

| # | Item | Age | Why It Matters |
|---|------|-----|----------------|
| [#10771](https://github.com/NousResearch/hermes-agent/issues/10771) | Auto Memory Consolidation feature request | **59 days** (since Apr 16) | Highest-engagement memory issue; 8 comments, 👍5; no maintainer response visible |
| [#19245](https://github.com/NousResearch/hermes-agent/issues/19245) | `session_search` empty after crash — orphaned sessions | **42 days** (since May 3) | Data recovery issue; no response |
| [#42405](https://github.com/NousResearch/hermes-agent/issues/42405) | Memory at capacity → silent hang | **37 days** (since Jun 8) | Agent becomes unresponsive; no response |
| [#33907](https://github.com/NousResearch/hermes-agent/issues/33907) | Context compression creates orphan sessions in `state.db` | **17 days** (since May 28) | Database integrity issue; no response |
| [#18705](https://github.com/NousResearch/hermes-agent/issues/18705) | `load_hermes_dotenv()` uses `override=True`, breaking 12-factor env precedence | **43 days** (since May 2) | Security/ops concern for Docker/K8s deployments; no response |
| [#45102](https://github.com/NousResearch/hermes-agent/issues/45102) | Hermes Desktop fails to start on Linux (GPU error) | **2 days** (since Jun 12) | Blocks Linux desktop users entirely; no response |
| [#42228](https://github.com/NousResearch/hermes-agent/issues/42228) | Desktop/TUI compressed sessions move into "No workspace" after context compression | **37 days** (since Jun 8) | Session management UX degradation; no response |
| [#28479](https://github.com/NousResearch/hermes-agent/pull/28479) | fix(dispatch): pass `session_id` into `registry.dispatch` | **26 days** (since May 19) | Plugin/dispatch hook correlation bug; open PR with no review |

**Recommendation:** The memory/session cluster ([#10771](https://github.com/NousResearch/hermes-agent/issues/10771), [#19245](github.com/NousResearch/hermes-agent/issues/19245), [#42405](https://github.com/NousResearch/hermes-agent/issues/42405), [#33907](https://github.com/NousResearch/hermes-agent/issues/33907)) represents a systemic reliability concern that is generating repeated, overlapping issues. A dedicated maintainer triage or design doc on memory architecture would be more efficient than addressing each issue individually.

---

*Data source: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Digest generated: 2026-06-14*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw — Project Digest (2026-06-14)

---

## 1. Today's Overview

PicoClaw enters mid-June with strong momentum: 7 PRs merged or closed, 1 open bug, and a fresh nightly build (`v0.2.9-nightly.20260613.c362114c`) pushed out. The project is clearly active on multiple fronts — bug fixing (vision routing, TTS fallbacks, Seahorse/SQL linter hygiene), feature work (inbound image compression, remote WebSocket agent mode), and localization. The volume of merged PRs (5 in 24h) relative to open items (1 issue, 2 PRs) indicates a healthy throughput-to-backlog ratio. The closing-then-reopening cycle on several stale/closed PRs suggests maintainers are aggressively pruning the branch, which keeps surface area manageable. Overall this is a project in active development with frequent iteration.

---

## 2. Releases

**Nightly Build (automated)**
- **Version:** `v0.2.9-nightly.20260613.c362114c`
- This is an automated nightly snapshot built from the `main` branch ahead of the next stable release.
- ⚠️ **Stability note:** Maintainers label this as potentially unstable ("Use with caution"). Production users should pin to stable tags.
- Full changelog span: [`v0.2.9...main`](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

No tagged stable release today. The nightly exists and will carry the inbound-image-compression and vision-routing fixes once those land in a stable tag.

---

## 3. Project Progress (Merged / Closed PRs — June 13, 2026)

| # | PR (link) | Key Change | Category |
|---|----------|------------|----------|
| 3117 | [fix(agent): route media turns to image models](https://github.com/sipeed/picoclaw/pull/3117) | Vision routing fix — media turns now correctly route to the configured image model instead of retrying on a text-only model. | 🐛 Bug Fix |
| 3119 | [fix(tts): support OpenRouter voice overrides and fallback](https://github.com/sipeed/picoclaw/pull/3119) | Adds per-model `extra_body` for OpenAI-compatible TTS voice/response_format overrides + auto-retry fallback logic. | 🐛 Bug Fix |
| 3065 | [fix(seahorse): explicitly ignore Close() errors](https://github.com/sipeed/picoclaw/pull/3065) | Linter cleanup — uses `_ = db.Close()` on Seahorse migration/PRAGMA error paths. | 🧹 Hygiene |
| 3066 | [fix: explicitly ignore Close() errors on temp file paths](https://github.com/sipeed/picoclaw/pull/3066) | Same-pattern linter fix across `normalization.go`, `wecom/media.go`, and `filesystem.go`. | 🧹 Hygiene |
| 2935 | [docs(i18n): add Traditional Chinese (zh-TW) locale](https://github.com/sipeed/picoclaw/pull/2935) | Closed as stale — adds `zh-TW` README, CONTRIBUTING, and i18n locale entries. | 📚 Docs (closed) |

**Notable advances:**
- **Vision pipeline hardening** (PR #3117) directly closes the hallucination bug from Issue #3108. This is probably the highest-impact merge — PicoClaw previously sent image turns to text-only models, causing semantic hallucinations. The fix ensures `load_image` follow-ups correctly escalate to the configured image model.
- **OpenRouter TTS interoperability** (PR #3119) addresses a real gap for users routing TTS through OpenRouter proxies. The auto-retry without `response_format` is a nice resilience touch.
- **i18n/Taiwan locale** was closed as stale. Community may need to rebase and resubmit if Traditional Chinese support is a priority.

---

## 4. Community Hot Topics

### 🔥 Issue #3012 — [Continuous token consumption when evolution is enabled](https://github.com/sipeed/picoclaw/issues/3012)
- **Author:** xpader | Created: 2026-06-05 | Updated: 2026-06-13 | **Comments: 3**
- **"👍": 0** | Environment: FreeBSD-15 / MiniMax model / PicoClaw v0.2.9
- This is the most commented issue this period and it remains open. The reporter describes tokens draining every few minutes while the evolution subsystem (Draft mode) is active — a potentially expensive and service-disrupting regression. With only 3 comments and 0 reactions, it hasn't gathered community momentum yet, but the **cost impact makes it high-severity** in practice.
- **Underlying need:** The evolution lifecycle appears to fire continuous re-evaluation cycles without a proper cooldown or guard against redundant inference calls. This is essentially an infinite loop / runaway scheduler bug in the evolution loop.

### 📝 PR #2964 — [Feat/inbound image compression](https://github.com/sipeed/picoclaw/pull/2964)
- **Author:** afjcjsbx | Created: 2026-05-28 | Updated: 2026-06-13 | **Comments: undefined**
- **"👍": 0** | Open PR, still awaiting merge
- Introduces a multi-tier compression policy before images hit the model payload. Currently images are only bounded by `max_media_size`; this PR adds configurable resolution/quality/resize thresholds. The underlying need is **cost control and model compatibility** — oversized images inflate token usage or get rejected by models with small context windows.

### 📝 PR #3118 — [Add remote Pico WebSocket mode](https://github.com/sipeed/picoclaw/pull/3118)
- **Author:** jp39 | Created: 2026-06-12 | Updated: 2026-06-13 | **Comments: undefined**
- **"👍": 0** | Open, first review cycle
- Enables `picoclaw agent --remote ws://…` for remote WebSocket backends while preserving local CLI entry points. This is foundational for **multi-device/agent topologies** — a user could run the PicoClaw agent on-device and connect to a remote inference server.

### 📝 PR #2935 — Traditional Chinese i18n (closed as stale)
- Locally popular in Chinese-speaking communities but didn't get merged within the stall window.

---

## 5. Bugs & Stability

| Severity | Issue / PR | Description | Fix Status |
|----------|-----------|-------------|------------|
| 🔴 **High** | [#3012](https://github.com/sipeed/picoclaw/issues/3012) — Token drain while evolution enabled | Continuous token consumption every few minutes when evolution is active (Draft mode). **Filed by an actual paying user on FreeBSD/MiniMax.** | Open. No linked fix PR visible. Reproduces on v0.2.9. |
| 🟡 **Medium** | [#3108](https://github.com/sipeed/picoclaw/issues/3108) — Image description hallucinates with text-only models | Image loaded via `load_image` but final response is unrelated — the active model lacks vision support and PicoClaw doesn't route the turn correctly. | **PR #3117 merged** — fix shipped in the next nightly. |
| 🟢 **Low** | PR #3065 / #3066 | Linter-compliance `Close()` error hygiene — no runtime risk. | **Merged.** |

**Bug count:** 1 open (1 high), 1 resolved (1 medium).

---

## 6. Feature Requests & Roadmap Signals

Based on open PRs and community feature work, the following are likely candidates for the **next minor (v0.2.10 or v0.3.0)**:

| Signal | Details | Likelihood |
|--------|---------|------------|
| **Inbound image compression** (PR #2964) | Configurable multi-level image compression pipeline. Addresses cost control for vision workloads. | High — PR is open, reasonably scoped. |
| **Remote WebSocket agent mode** (PR #3118) | `picoclaw agent --remote ws://…` enabling distributed topologies. | Medium — early PR, needs review. |
| **Evolution loop gating** | No open PR, but Issue #3012 directly asks for rate limiting or gating on evolution cycles. | Medium-high — active bug will force attention. |
| **i18n expansion** | Traditional Chinese (zh-TW) was submitted but closed stale. Demand exists if community rebases. | Low — needs community resubmission. |

---

## 7. User Feedback Summary

### Pain Points
1. **Runaway token costs** (Issue #3012): The evolution system can cost real money when the scheduling loop fires redundant inference. This is the most acute user-facing issue — a paying user on MiniMax reported the problem and the silence suggests this may block adoption on tight-budget deployments.
2. **Vision model routing confusion** (Issue #3108): Users expect PicoClaw to auto-fallback to a vision model when the active model can't handle images. The hallucination behavior is a bad user experience — fortunately, PR #3117 closes this.
3. **TTS provider interoperability** (PR #3119): Users routing TTS through OpenRouter hit missing voice/response_format configuration paths. The fix suggests this is a common enough pain point for it to be merged quickly.

### Positive Signals
- **The Seahorse linter fixes** (PRs #3065, #3066) show contributors are paying attention to code hygiene — a healthy signal for newcomers considering the codebase.
- **Nightly builds** are being published regularly, giving early adopters a way to validate fixes (like the vision routing fix in #3117) before stable release.
- Active contributor diversity — PRs authored by afjcjsbx, chengzhichao-xydt, not-the-author, jp39, maxmilian — indicating no single-person bottleneck in the contribution pipeline.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Risk | Recommendation |
|------|-----|------|----------------|
| **Issue #3012** — Token drain in evolution | 9 days (2026-06-05) | 🔴 **High** — active financial impact on users. Reproduces on latest stable. | Needs triage and a fix PR. Consider adding a rate-limit or debounce on evolution scheduler re-entry as a short-term guard. |
| **PR #2964** — Inbound image compression | 17 days (2026-05-28) | 🟡 Medium — feature not critical but PR is aging. | Needs maintainer review/approval. Reasonably scoped and well-described. |
| **PR #3118** — Remote WebSocket agent mode | 2 days (2026-06-12) | 🟡 Medium — new feature, architecture decision. | Still fresh; maintainers should review topological implications (auth, session management). |
| **PR #2935** — zh-TW i18n (closed stale) | 20 days | 🟢 Low — closed but represents genuine community interest. | If i18n is in scope, reopen or ask author to rebase. Otherwise may drop. |

---

*Data cutoff: 2026-06-14 (24h window). Source: github.com/sipeed/picoclaw. Generated by OWL for open-source project intelligence.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-14

---

## 1. Today's Overview

NanoClaw shows **high development velocity** on 2026-06-14, with 15 pull requests updated in the past 24 hours (14 merged/closed, 1 open) and negligible issue churn (1 closed, 0 open). The bulk of completed work clusters around **agent-runner resilience**, **memory infrastructure**, **provider extensibility seams**, and **Signal native-adapter hardening**. The project appears to be in a stabilization phase following a wave of new-feature merges in late May–early June (daily backups, multimodal inbox, a2a routing fixes, reaction support). One open health-audit hardening PR (#2732) signals proactive security/maintainability investment. No new releases have landed, suggesting the team is accumulating changes for a forthcoming version bump.

---

## 2. Releases

**None.** No new tagged releases were published in the last 24 hours, nor are any pre-release candidates visible in the latest-PR data. A critical SDK bump (`@onecli-sh/sdk` 0.5.0 → 2.2.1) landed in PR [#2747](https://github.com/nanocoai/nanoclaw/pull/2747); this is likely a candidate for the next release's **breaking-changes / migration** notes given the major-version jump in a core dependency.

---

## 3. Project Progress — Merged/Closed PRs (14 PRs)

### Agent-Runner Core & Reliability
- **Self-heal for poisoned-resume crash loops** — [PR #2670](https://github.com/nanocoai/nanoclaw/pull/2670) addresses a forever-loop when a corrupt resumed transcript contains `thinking`/`redacted_thinking` blocks the SDK surfaces as a result event rather than a throw. The `isSessionInvalid` recovery path is now correctly triggered.
- **Poll-loop retry on transient 5xx errors** — [PR #2692](https://github.com/nanocoai/nanoclaw/pull/2692) fixes the case where Claude Agent SDK exhausts internal retries on `529 Overloaded`-style failures and reports them as terminal `result` messages; NanoClaw now retries user-visible layers and notifies on exhaustion.
- **Refresh routing on follow-up messages mid-query** — [PR #2277](https://github.com/nanocoai/nanoclaw/pull/2277) stops poll-loop `RoutingContext` from being frozen on the initial batch, fixing cases where a cron-task null-route masked a subsequent real-chat message.
- **Agent-to-agent reply routing** — [PR #2267](https://github.com/nanocoai/nanoclaw/pull/2267) ensures a2a replies return to the originating session rather than `ORDER BY created_at DESC LIMIT 1`'s newest, preventing split-brain in multi-session agent groups.

### Health-Audit Hardening (OPEN)
- **Container-lifecycle & agent-runner audit fixes** — [PR #2732](https://github.com/nanocoai/nanoclaw/pull/2732) (open) applies adversarially verified fixes: `realpath` bind-mount sources (Docker Desktop `drvfs` staging crash-loop / exit 127), crash-on-spawn circuit breaker, enforcement of `MAX_CONCURRENT_CONTAINERS`, daemon-level `docker kill` fallback, and additional agent-runner seams.

### Memory & Provider Extensibility
- **Opt-in persistent memory scaffold for providers** — [PR #2745](https://github.com/nanocoai/nanoclaw/pull/2745) adds a `usesMemoryScaffold` provider capability and supporting control flow, giving agents optional persistent memory across sessions.
- **Agent-surfaces capability seam** — [PR #2746](https://github.com/nanocoai/nanoclaw/pull/2746) introduces a host-side registry where providers declare agents by capability — foundational plumbing for routing/intelligence selection.
- **OnExchangeComplete provider hook + slash-command interruption** — [PR #2745](https://github.com/nanocoai/nanoclaw/pull/2754) adds an optional `onExchangeComplete` hook on providers and supports slash-command-level interruption of exchanges.

### SDK & CLI Infrastructure
- **SDK 0.5.0 → 2.2.1 with credential-stub mounts + machine-checkable pins** — [PR #2747](https://github.com/nanocoai/nanoclaw/pull/2747) is the dependency centerpiece of this batch; expect release-note attention for breaking/migration guidance.

### Signal Native Adapter
- **Inbound + outbound reaction support** — [PR #2203](https://github.com/nanocoai/nanoclaw/pull/2203) adds Signal reaction mirroring (agents can `add_reaction` via MCP, inbound reactions surfaced to agent).
- **Every non-audio attachment routed through inbox path** — [PR #2071](https://github.com/nanocoai/nanoclaw/pull/2071) pairs with PR #2070 so PDFs, docs, archives, images arrive as Read-able files at `/workspace/inbox/<msgId>/<name>`.
- **Host-path attachments in `extractAttachmentFiles`** — [PR #2070](https://github.com/nanocoai/nanoclaw/pull/2070) extends native adapters to pass host-disk files instead of inline base64.
- **Outbound attachment support** — [PR #2040](https://github.com/nanocoai/nanoclaw/pull/2040) wires `OutboundFile`s to `signal-cli`'s `send` JSON-RPC `attachments` array instead of logging-and-dropping.
- **Ollama images field via inbox paths** — [PR #2072](https://github.com/nanocoai/nanoclaw/pull/2072) lets `ollama_generate` accept workspace-relative image paths, base64-encodes under `/workspace`, and forwards to Ollama for multimodal inference.
- **Daily project backup + full/per-agent restore** — [PR #2084](https://github.com/nanocoai/nanoclaw/pull/2084) ships disaster-recovery: daily snapshots with pluggable backends (local + optional S3) and a CLI for scoped restore — addressing the "no way back from `rm -rf`" gap.

---

## 4. Community Hot Topics

Comments and reactions data are reported as `undefined` across all 15 PRs, so engagement metrics are unavailable for ranking. Thematically, the most **structurally significant** PRs drawing repeated-contributor attention are:

| Topic | PR(s) | Signals |
|---|---|---|
| Agent-runner memory & provider extensibility | [#2745](https://github.com/nanocoai/nanoclaw/pull/2745), [#2746](https://github.com/nanocoai/nanoclaw/pull/2746), [#2754](https://github.com/nanocoai/nanoclaw/pull/2754), [#2747](https://github.com/nanocoai/nanoclaw/pull/2747) | 4 closely-spaced PRs from one maintainer in two days — core infrastructure sprint |
| Agent-runner reliability | [#2670](https://github.com/nanocoai/nanoclaw/pull/2670), [#2692](https://github.com/nanocoai/nanoclaw/pull/2692), [#2277](https://github.com/nanocoai/nanoclaw/pull/2277), [#2267](https://github.com/nanocoai/nanoclaw/pull/2267) | Multi-passive fix campaign — crash loops, routing splits, transient errors |
| Health-audit hardening | [#2732](https://github.com/nanocoai/nanoclaw/pull/2732) (open) | Adversarial verification methodology; Docker Desktop edge cases surfaced in the wild |
| Signal adapter completeness | [#2040](https://github.com/nanocoai/nanoclaw/pull/2040), [#2070](https://github.com/nanocoai/nanoclaw/pull/2070), [#2071](https://github.com/nanocoai/nanoclaw/pull/2071), [#2203](https://github.com/nanocoai/nanoclaw/pull/2203) | Steady investment to make Signal a first-class channel |

**Underlying needs**: Users want NanoClaw's local-agent runtime to behave *production-grade* under failure conditions (crash recovery, API overload, corrupt state) and to normalize provider/memory/capability backends so third-party integrations are pluggable. The breadth of Signal work indicates a desire for the messenger to be feature-parity with internal/exchange surfaces (attachments, reactions, multimodal).

---

## 5. Bugs & Stability

| Severity | Description | PR | Status |
|---|---|---|---|
| 🔴 High | Poisoned-resume crash loop on corrupt transcript (`thinking`/`redacted_thinking` blocks bypass `isSessionInvalid`) | [#2670](https://github.com/nanocoai/nanoclaw/pull/2670) | ✅ Merged |
| 🔴 High | Transient 5xx API errors (e.g. `529 Overloaded`) treated as terminal, not retried | [#2692](https://github.com/nanocoai/nanoclaw/pull/2692) | ✅ Merged |
| 🟠 Medium | a2a replies routed to newest session, causing split-brain in multi-session groups | [#2267](https://github.com/nanocoai/nanoclaw/pull/2267) | ✅ Merged |
| 🟠 Medium | Poll-loop freezes `RoutingContext` from first batch, misroutes follow-up messages | [#2277](https://github.com/nanocoai/nanoclaw/pull/2277) | ✅ Merged |
| 🟡 Low-Med | Docker Desktop `drvfs` staging crash-loop / exit 127 via bind-mount source issues (proactive) | [#2732](https://github.com/nanocoai/nanoclaw/pull/2732) | 🔓 Open, in review |
| 🟡 Low | Deleted — posted in error | [#2755](https://github.com/nanocoai/nanoclaw/issues/2755) | ✅ Closed |

All reported bugs have merged fixes in the last 24 hours or are already addressed. The open Docker hardening PR (#2732) is **proactive**, not reactive to a reported incident.

---

## 6. Feature Requests & Roadmap Signals

No issues or PRs carry explicit "feature-request" labels in the 24-hour window, but several **directional signals** are visible:

1. **Persistent memory system** — [PR #2745](https://github.com/nanocoai/nanoclaw/pull/2745) lays a *scaffold* (`usesMemoryScaffold`); expect a follow-up PR with actual storage backends (SQLite, vector DB) and memory-retrieval tooling in the next minor version.
2. **Provider capability registry / capability-based routing** — [PR #2746](https://github.com/nanocoai/nanoclaw/pull/2746) adds the seam alone; routing logic that *selects* by declared capabilities is the natural next step.
3. **`onExchangeComplete` hook** — [PR #2754](https://github.com/nanocoai/nanoclaw/pull/2754) enables providers to hook exchange lifecycle events; plugins should follow quickly once documented.
4. **SDK upgrade to 2.2.1** — [PR #2747](https://github.com/nanocoai/nanoclaw/pull/2747) is a large version jump; a release will be needed to ship its benefits to downstream consumers.
5. **Signal first-class UX** — With reactions, multimodal, outbound files, and normalized inbox routing all landing, Signal is approaching self-hosted-messenger maturity; a release note "Signal is now a fully supported channel" may be warranted.

---

## 7. User Feedback Summary

- **Satisfaction drivers**: The rapid closure of reliability issues (crash loops, routing splits, transient 5xx) will reassure self-hosted users running NanoClaw as a primary agent runtime. The daily-backup/restore feature (#2084) directly answers the vocal "no way back from `rm -rf`" concern.
- **Pain points still latent**: The fact that a multi-agent adversarial health audit was needed ([PR #2732](https://github.com/nanocoai/nanoclaw/pull/2732)) implies edge-path surface area is growing faster than automated coverage. The Docker Desktop `drvfs` staging crash-loop and `thinking`/`redacted_thinking` corpusruption are non-trivial failure modes that community members likely hit in production.
- **Engagement gap**: Zero open issues active in the last 24 hours and zero comment counts reported — either genuinely quiet or a signal that users are reporting pain through issues-less channels (Discord, forums) rather than GitHub.

---

## 8. Backlog Watch

| Item | Age | Why It Matters |
|---|---|---|
| **[PR #2732](https://github.com/nanocoai/nanoclaw/pull/2732) — Health-audit hardening (OPEN)** | Created 2026-06-11, updated 2026-06-14 | Oldest open PR in the window with meaningful scope (container lifecycle circuit breakers, concurrent-container caps, Docker Desktop edge cases). Risk of bit-rot if unattended; needs review/CI pass. |
| **Memory scaffold follow-up** | Implicit (PR #2745 is scaffold-only) | Infrastructure declared but not yet exercised — expect stale-plumbing debt if concrete storage backends don't land within 2–3 sprints. |
| **Provider capability routing** | Implicit (PR #2746 is seam-only) | Same pattern — registry without selector is half a feature. |

No long-unanswered **issues** are visible in the 24-hour dataset (only one, a mistaken-location deletion, already closed). If there is a deeper backlog, it is not surfaced here.

---

*Data cutoff: 2026-06-14 00:00 UTC. Metrics sourced from GitHub PRs/issues API. All links: github.com/nanocoai/nanoclaw.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw — Project Digest — 2026-06-14

---

## 1. Today's Overview

NullClaw saw modest but meaningful activity today: 2 open issues remain active and 1 newly opened PR targets a critical cron-delivery bug. No new releases were published. The most notable development is **PR #954**, which directly addresses the freshly reported **Issue #941** — a use-after-free bug silently breaking message delivery for agent-type scheduled jobs. Activity is focused and healthy, with the community actively identifying and fixing a core reliability defect. No maintainer response has yet been posted on the PR or the enhancement request (#914).

---

## 2. Releases

None. No new versions published in the last 24 hours.

---

## 3. Project Progress

| PR | Status | Summary |
|---|---|---|
| [#954](https://github.com/nullclaw/nullclaw/pull/954) | OPEN | Fix: one-shot cron jobs silently fail to deliver messages (use-after-free) |

**Summary:** The only PR filed today is **#954** by *vernonstinebaker*, targeting the critical use-after-free in `OutboundMessage.channel` that causes agent-type scheduled jobs to silently drop all outbound channel delivery (Telegram, Mattermost, etc.). No PRs have been merged or closed in this period. If #954 is merged, it will close the most commented issue (#941) and restore reliability to the cron + delivery pipeline.

---

## 4. Community Hot Topics

| Issue/PR | Comments | 👍 | Link |
|---|---|---|---|
| #941 (issue) | 7 | 0 | [nullclaw/nullclaw Issue #941](https://github.com/nullclaw/nullclaw/issues/941) |
| #954 (PR) | 0 (unreviewed) | 0 | [nullclaw/nullclaw PR #954](https://github.com/nullclaw/nullclaw/pull/954) |
| #914 (issue) | 1 | 0 | [nullclaw/nullclaw Issue #914](https://github.com/nullclaw/nullclaw/issues/914) |

**Analysis:**
- **#941 & #954** form the clear center of gravity. With 7 comments on the issue and a matching fix-PR already submitted within hours, the community identified the root cause (use-after-free) quickly. The underlying need is **reliable scheduled-agent message delivery** — a core workflow for users depending on NullClaw's cron + Telegram/Mattermost integration.
- **#914** reflects demand for enterprise toolchain integration (JIRA), indicating users want NullClaw agents to participate in formal project management workflows.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Link |
|---|---|---|---|---|
| 🔴 High | Agent-type cron jobs silently fail — Telegram (and other channel) delivery never happens due to use-after-free in `OutboundMessage.channel` | OPEN | [#954](https://github.com/nullclaw/nullclaw/pull/954) (submitted, unreviewed) | [Issue #941](https://github.com/nullclaw/nullclaw/issues/914) |

**Summary:** This is the only active bug. It is **high severity** — users relying on scheduled agent tasks see jobs marked "completed" but receive no messages, with zero error surface. The fix-PR is already in flight and appears well-scoped (use-after-free fix), but awaits maintainer review.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Description | Signal Strength | Link |
|---|---|---|---|
| #914 | JIRA integration tool (auth, read/write issues, sprints, comments) | ⭐⭐ Moderate — single request, no duplicates yet, but aligns with enterprise agent workflow trend | [Issue #914](https://github.com/nullclaw/nullclaw/issues/914) |

**Prediction:** No signal yet that JIRA integration will land in an immediate release. However, given that NullClaw is expanding scheduled + delivery tooling (the focus of today's PR), a formal enterprise-toolchain integration request like this is a natural next area to monitor for roadmap interest.

---

## 7. User Feedback Summary

- **Pain point (~silent failures):** Users expect scheduled agent jobs to surface errors when delivery fails. The current behavior — marking jobs complete while silently dropping output — erodes trust. There is an implicit request for delivery-status feedback in logs or the UI.
- **Core use case validated:** Scheduled agent → Telegram delivery is clearly a **primary workflow** for active users. The volume of discussion on #941 (7 comments) in under two weeks confirms this.
- **Satisfaction signal:** The submitter of #954 contributed a root-cause analysis AND a fix-PR within hours, suggesting an engaged user base — but also that this bug has been a real blocker.

---

## 8. Backlog Watch

| Item | Age | Status | Risk | Link |
|---|---|---|---|---|
| #941 | 14 days | OPEN, fix-PR submitted (#954) | **Medium** — PR awaiting review; affects core cron reliability for any user relying on agent-schedule + channel delivery | [Issue #941](https://github.com/nullclaw/nullclaw/issues/914) |
| #914 | 32 days | OPEN, 1 comment | **Low** — Enhancement request; normal turnaround for feature requests, but it has no maintainer response yet | [Issue #914](https://github.com/nullclaw/nullclaw/issues/914) |

**Maintainer attention needed:** PR #954 is the highest-priority item — unreviewed, blocking fix for an actively reported bug impacting core functionality. Issue #914 is a healthy backlog candidate for triage or label-assignment.

---

*Data snapshot: 2026-06-14 | Source: [github.com/nullclaw/nullclaw]*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-14

---

## 1. Today's Overview

IronClaw remains in a period of intense, focused development. In the past 24 hours, 24 pull requests were updated (18 still open, 6 merged/closed) and 6 issues were touched (3 open, 3 closed), with no new releases cut in this window. The dominant theme is the maturing **attachment pipeline (#4644)** — a multi-track effort spanning the common crate, transcript contract, runtime context folding, WebChat v2 frontend UX, and OpenAI-compat API correctness — alongside a significant re-architecture of the **DeferredBusy drain / busy-thread handling** pattern (PRs #4838, #4817) and a series of Slack re-approval-loop fixes (#4839, #4843, #4844, #4840). Two major XL PRs (#4839, #4838) from core contributor henrypark133 opened in the last 24h and are already among the most active, signaling that the team is actively converging on production-grade stability for auth-gate flows and concurrent thread handling. Overall project health is strong: contributions are well-scoped, stacked PRs are properly sequenced, and follow-up issues are filed in real time rather than deferred.

---

## 2. Releases

**No new releases today.** The most recent release tracking PR is [PR #3708](https://github.com/nearai/ironclaw/pull/3708), reflecting a staged rollout across multiple crates: `ironclaw_common` 0.4.2 → 0.5.0, `ironclaw_safety` 0.2.2 → 0.2.3, `ironclaw_skills` 0.3.0 → 0.4.0, and `ironclaw` 0.24.0 → 0.29.1. Both `ironclaw_common` and `ironclaw_skills` carry **API-breaking changes**, so downstream consumers should consult the failure-coalescing changelog entries in that PR.

---

## 3. Project Progress

### Merged / Closed in the Last 24 Hours

| PR | Title | Significance |
|---|---|---|
| [PR #4670](https://github.com/nearai/ironclaw/pull/4670) | Bridge inbound bytes into transcript AttachmentRefs | Closes a critical gap in the attachment pipeline — raw uploaded bytes now become durable `AttachmentRef`s persisted through the transcript. |
| [PR #4668](https://github.com/nearai/ironclaw/pull/4668) | MountView-based attachment landing crate | Establishes the byte-storage foundation (Track 6 of #4644); enables model-visibility of attachments. |
| [PR #4672](https://github.com/nearai/ironclaw/pull/4672) | Inline attachment uploads on WebChat v2 send path | End-to-end ingress wiring — browser file uploads now land in project storage and persist references. |
| [PR #4655](https://github.com/nearai/ironclaw/pull/4655) | Carry attachment refs through the Reborn transcript contract | Transcript can no longer silently drop attachments; uploads survive `accept → persist` round-trips. |
| [PR #4675](https://github.com/nearai/ironclaw/pull/4675) *(merged/closed)* | Extract file text-extraction into `ironclaw_extractors` crate | Clean separation — byte→text extraction becomes a reusable leaf crate, not attachment-specific. |
| [PR #4654](https://github.com/nearai/ironclaw/pull/4654) | Extensible attachment format registry | Single source of truth replaces 4 scattered hardcoded lists; eliminates "CSV uploaded as text" class of bugs. |

### Open PRs Advancing Key Features

- **[PR #4838](https://github.com/nearai/ironclaw/pull/4838)** — Replaces the DeferredBusy defer-and-drain approach with an explicit-rejection contract: a message arriving while a run holds the thread is **rejected with a clear notice** rather than silently parked. This is a correctness-driven re-architecture, not an incremental patch.
- **[PR #4839](https://github.com/nearai/ironclaw/pull/4839)** — Fixes a Slack re-approval loop where capabilities requiring both OAuth and human approval demanded a new approval on every resume cycle (observed: 4 consecutive gates for one logical call).
- **[PR #4836](https://github.com/nearai/ironclaw/pull/4836 Surfaces connected channels, delivery state, and run origin to the model at every loop start** — implements a runtime-context slice the agent can see, reducing channel/routing ambiguity.
- **[PR #4841](https://github.com/nearai/ironclaw/pull/4841)** — Moves toward "every run-terminal error is either recovered, explained to the user, or retried" — eliminating opaque "run-borking" terminal failures in the reborn binary.
- **[PR #4738](https://github.com/nearai/ironclaw/pull/4738)** — Wires upload UX into the Reborn WebChat v2 SPA, the missing frontend piece to complete the attachment pipeline's user-facing flow.
- **[PR #4844](https://github.com/nearai/ironclaw/pull/4844)** & **[PR #4843](https://github.com/nearai/ironclaw/pull/4843)** — Fix two distinct Slack bugs: gate-kind filter routing (auth vs approval) and single-flight gate delivery per run_id (resolution-ack fanout). These are the last two bugs in the Slack re-approval-loop triage.

---

## 4. Community Hot Topics

1. **Attachment Pipeline (#4644)** — The meta-issue driving the most cross-cutting work: tracks for byte landing (#4668), transcript contract (#4655), format registry (#4654), extraction (#4675), ingress (#4670, #4672), runtime folding (#4677), OpenAI-compat correctness (#4680), and WebChat UX (#4738). This is the project's current **primary investment area**, consuming the majority of core contributor bandwidth.

2. **[PR #4838](https://github.com/nearai/ironclaw/pull/4838) — Explicit gate-open feedback for busy threads** — Fundamentally changes the busy-thread contract from implicit (defer + drain) to explicit (reject + notify). This re-architecture eliminates an entire category of silent-message-loss bugs but shifts the retry burden to the user-facing layer — worth monitoring for UX feedback.

3. **[PR #4839](https://github.com/nearai/ironclaw/pull/4839) — Slack re-approval loop fix** — The most complex auth-gate PR in the last 24h. It required a triage of four interleaved bugs (PRs #4839, #4840, #4843, #4844), suggesting the "resume capability after auth gate" flow has accumulated significant design debt. The follow-up extraction in [PR #4845](https://github.com/nearai/ironclaw/pull/4845) (shared resume-authority head) indicates the team is proactively consolidating the fix.

4. **[Issue #4817](https://github.com/nearai/ironclaw/issues/4817) — DeferredBusy drain follow-ups** — Tracks three deferred design decisions from the merged drain PR (#4812) so they don't get lost: trusted-resubmit seam, stale-intent policy, and startup sweep. None are blockers, but the issue ensures architectural rigor isn't sacrificed for expediency.

5. **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failure** — An automated CI failure report. With 0 comments since it was filed and no linked fix, this is a stability red flag. *(See §5 below.)*

---

## 5. Bugs & Stability

| Severity | Issue / PR | Status | Notes |
|---|---|---|---|
| 🔴 **High** | [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E pipeline failure | **Open, 0 comments** | Full E2E v2-engine run failed on commit `2a4e017fd`. Reported 2026-06-13 but went unacknowledged. This is a regression signal — either a flaky test or a genuine break in the integration surface. |
| 🟠 **Medium** | [PR #4839](https://github.com/nearai/ironclaw/pull/4839) — Slack re-approval loop | **Open (fix in progress)** | 4 consecutive approval gates for a single logical capability call on Slack. Bad UX and burns approvals. Fix PR is #4839 itself. |
| 🟠 **Medium** | [PR #4840](https://github.com/nearai/ironclaw/pull/4840) — Missing-credential auth gate surfaced *after* approval gate | **Open** | Users approve an action that then bails on missing credentials — approval is wasted. Fix PR is open. |
| 🟡 **Low** | [PR #4680](https://github.com/nearai/ironclaw/pull/4680) — `[non_text_content]` canary emitted for non-text parts | **Open** | Image/audio/file parts collapsed to opaque literal strings reaching the model. OpenAI-compat correctness issue. Fix in progress. |
| 🟡 **Low** | [Issue #4845](https://github.com/nearai/ironclaw/issues/4845) — Shared resume-authority head for resume_json / auth_resume_json | **Open** | Non-blocking refactoring; extracts duplicated capability-resume dispatch logic noted during #4839 review. |

---

## 6. Feature Requests & Roadmap Signals

**High-confidence next-version candidates:**
- **Attachment UX completion** — With the backend pipeline merged (#4654, #4655, #4668, #4670, #4675, #4677), the remaining open piece is [PR #4738](https://github.com/nearai/ironclaw/pull/4738) (WebChat v2 SPA upload UX). Once merged, the #6644 Epic will be fully complete and should be highlighted in the next release notes.
- **Explicit busy-thread rejection** — [PR #4838](https://github.com/nearai/ironclaw/pull/4838) is an architectural change that eliminates DeferredBusy pavement. If accepted, it will simplify the concurrency model significantly and should be surfaced to users.
- **Runtime context/delivery state visibility** — [PR #4836](https://github.com/nearai/ironclaw/pull/4836) gives the model channel topology and delivery targeting info at every loop start. This enables better agent routing decisions and is a prerequisite for more sophisticated multi-channel delivery.

**Watch list:**
- **[PR #4841](https://github.com/nearai/ironclaw/pull/4841)** — Run-borking elimination. If merged, every terminal error becomes explainable/recoverable, which is a major UX upgrade.
- **[PR #4780](https://github.com/nearai/ironclaw/pull/4780)** — Routine delivery steered through outbound targets. Ties delivery routing to the runtime-context work.
- **[Issue #4817](https://github.com/nearai/ironclaw/issues/4817)** — DeferredBusy drain follow-ups (stale-intent policy, startup sweep). Non-blocking but architecturally important.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Severity |
|---|---|---|
| **Auth-gate fatigue** | Slack users hitting 4 approval gates for a single logical call (#4839); approvals burned by credential bounces (#4840) | High — direct UX regression, visible to end users in Slack QA |
| **Opaque terminal failures** | Runs dying with no explanation on HostUnavailable, model failure, or protocol error (#4841) | High — blocks debugging and erodes trust |
| **Silent message parking** | DeferredBusy drain was complex (#4817 follow-ups) and risked silent loss; user-initiated retry is now preferred (#4838) | Medium — re-architecture motivated by correctness |
| **Channel routing ambiguity** | Model unaware of connected channels or delivery state (#4836) | Medium — limits agent autonomy and routing quality |
| **Missing attachment UX** | Backend fully lands and persists attachments (#4644 track), but WebChat v2 SPA upload UX still pending (#4738) | Medium — gap between backend capability and user-facing workflow |

**Sentiment analysis:** The user community's primary dissatisfaction centers on **auth-gate reliability and transparency** — approvals being wasted, gates looping, and terminal errors being opaque. The attachment pipeline work is well-progressed and should address a major functional gap once the frontend piece (#4738) lands. The shift from implicit defer-and-drain to explicit rejection (#4838) is a principled design decision but may surface new UX friction around retry ergonomics that should be monitored.

---

## 8. Backlog Watch

| Item | Age | Why It Needs Attention |
|---|---|---|
| **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108)** — Nightly E2E failure | **17 days** (opened 2026-05-27) | Zero comments, zero linked fix. A nightly E2E failure that goes unaddressed for 17 days is a significant signal — either the test is flaky and should be quarantined, or there is a genuine integration regression. This is the **single most urgent item** for maintainer triage. |
| **[PR #3708](https://github.com/nearai/ironclaw/pull/3708)** — Release tracking PR | **29 days** (opened 2026-05-16) | Stale release PR with breaking changes in `ironclaw_common` and `ironclaw_skills`. Needs to be either merged or closed to unblock downstream consumers who need clarity on migration. |
| **[PR #4264](https://github.com/nearai/ironclaw/pull/4264)** — Routine create endpoint | **14 days** (opened 2026-05-31) | New contributor PR adding `POST /api/routines`. No comments or review activity. A new-contributor PR going un-reviewed for two weeks risks contributor attrition. |
| **[Issue #4845](https://github.com/nearai/ironclaw/issues/4845)** — Shared resume-authority head | **0 days** (opened 2026-06-14) | Fresh follow-up from #4839 review. Non-blocking but should be linked to the relevant PR so it doesn't get lost. |

---

*Generated by OWL · Data as of 2026-06-14 · Source: [nearai/ironclaw](https://github.com/nearai/ironclaw)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-14

**Project:** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)
**Analyst:** OWL

---

## 1. Today's Overview

LobsterAI shows moderate but stalled activity today: 4 open issues and 5 PRs were updated in the last 24 hours, yet **all of them carry the `[stale]` label**, indicating no fresh engagement from maintainers since early April. Two PRs were closed/merged today, both targeting small UX polish (MCP modal scroll fix and macOS shortcut display). No new releases were published. The project appears to be in a **maintenance lull** — community contributions are open but unmerged, and reported bugs have sat idle for over two months.

---

## 2. Releases

**No new releases today.** The latest release section on GitHub remains empty for the 24h window.

---

## 3. Project Progress (Merged & Closed PRs)

| PR | Title | Author | Status |
|---|---|---|---|
| [#1467](https://github.com/netease-youdao/LobsterAI/pull/1467) | Fix shortcuts: display `Cmd` (⌘) instead of `Ctrl` on macOS | @linlihua | ✅ Closed/Merged |
| [#1466](https://github.com/netease-youdao/LobsterAI/pull/1466) | Fix(mcp): modal close button unreachable when content grows tall | @linlihua | ✅ Closed/Merged |

**Summary:** Two small but practical UX fixes landed today:
- **macOS native feel:** The Settings > Shortcuts panel was hardcoded to show `Ctrl` shortcuts regardless of platform. This PR detects macOS and renders `⌘`-based shortcuts, addressing a cross-platform polish gap for Mac users.
- **MCP modal usability:** A long MCP server configuration form would push the Cancel/Save buttons below the fold because `max-h-[80vh] overflow-y-auto` was applied to the entire modal panel instead of just the body. This made the action buttons unreachable — now fixed by restructuring the scroll container.

Both PRs target friction points in the user experience and suggest the team is responsive to small, well-scoped fixes.

---

## 4. Community Hot Topics

| Issue/PR | Title | Author | Comments | Signal |
|---|---|---|---|---|
| [#1443](https://github.com/netease-youdao/LobsterAI/issues/1443) | [stale] 有计划支持新版本的openclaw吗？ | @Juzisuan965 | 2 | Breaking change in `openclaw v2026.3.24` prevents users from starting LobsterAI. Active user blocked on upgrade path. |
| [#1437](https://github.com/netease-youdao/LobsterAI/issues/1437) | [stale] 创建定时任务…点击创建按钮没反应，页面无报错 | @xuzx-code | 1 | Silent failure in scheduled-task creation UX — user gets zero feedback. |
| [#1439](https://github.com/netease-youdao/LobsterAI/issues/1439) | [stale] 上传技能已停用，对话中仍然可以调用 | @devilszy | 1 | Deactivated skills remain callable — potential security/logic concern. |
| [#1442](https://github.com/netease-youdao/LobsterAI/issues/1442) | [stale] Agent添加技能，对话后引用的技能不展示 | @devilszy | 1 | State UI inconsistency; user questions the purpose of skill selection. |

**Underlying needs:**
- **Upgrade compatibility:** Users want a clear roadmap signal for upstream dependency (`openclaw`) upgrades.
- **UX confidence:** Silent failures (#1437) erode trust — users need clear error states.
- **Data integrity:** Skills marked inactive should be fully deactivated in all contexts.
- **Agent UX clarity:** Skill-selection state should persist or its lifecycle should be documented.

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR? | Notes |
|---|---|---|---|
| 🔴 High | [#1443](https://github.com/netease-youdao/LobsterAI/issues/1443) — Breaking change in `openclaw v2026.3.24` causes startup failure | ❌ None open | User-upgraded upstream dep breaks LobsterAI entirely. Most likely next blocker for users who keep dependencies current. |
| 🟡 Medium | [#1439](https://github.com/netease-youdao/LobsterAI/issues/1439) — Deactivated skills still callable in chat | ❌ None open | Logic gap; deactivation flag not enforced at invocation layer. |
| 🟡 Medium | [#1442](https://github.com/netease-youdao/LobsterAI/issues/1442) — Skill badges disappear after first message in agent chat | ❌ None open | PR [#1440](https://github.com/netease-youdao/LobsterAI/pull/1440) (open, stale) reorganizes skill badge layout but does not appear to address persistence. |
| 🟠 Low | [#1437](https://github.com/netdao/LobsterAI/issues/1437) — Scheduled-task creation button silent on invalid state | ❌ None open | User gets no error toast/indicator. |

**Note:** PR [#1445](https://github.com/netease-youdao/LobsterAI/pull/1445) addresses a related skills bug (duplicate import and zip directory naming) and is open/stale — could partially help with skills-management stability if merged.

---

## 6. Feature Requests & Roadmap Signals

**Open PRs suggest active feature work being pursued by community contributors:**

| PR | Feature | Status |
|---|---|---|
| [#1441](https://github.com/netease-youdao/LobsterAI/pull/1441) | **Extensible preview pipeline for HTML, React, and Mermaid artifacts** in Cowork sessions | Open, stale — conflict-resolved re-land of original #1011 |
| [#1440](https://github.com/netease-youdao/LobsterAI/pull/1440) | **Move active-skill badges into input area** for cleaner toolbar layout | Open, stale |
| [#1445](https://github.com/netease-youdao/LobsterAI/pull/1445) | **Skills import: duplicate validation + zip directory naming fix** | Open, stale |

**Predicted next-version candidates:**
- The **artifact preview pipeline** (#1441) is the most ambitious and clearly multi-file feature — likely targeted for a minor version bump if merged.
- **Skills import validation** (#1445) fixes a genuine data-integrity issue and is narrowly scoped — strong candidate for a patch release.
- **OpenClaw upgrade support** (#1443) is the top user ask but may require broader architectural adaptation.

---

## 7. User Feedback Summary

| Sentiment | Topic | Detail |
|---|---|---|
| 😠 **Frustrated** | Silent UX failures ([#1437](https://github.com/netease-youdao/LobsterAI/issues/1437)) | Scheduled-task creation gives zero feedback on error. Users expect inline validation or toast notifications. |
| 😠 **Frustrated** | Breaking upstream upgrade ([#1443](https://github.com/netease-youdao/LobsterAI/issues/1443)) | Users who track upstream `openclaw` are blocked entirely. They received no migration guide or compat note. |
| 🤔 **Confused** | Skill lifecycle UX ([#1439](https://github.com/netease-youdao/LobsterAI/issues/1439), [#1442](https://github.com/netease-youdao/LobsterAI/issues/1442)) | Two related reports: deactivated skills still callable, and skill badges that vanish mid-conversation. Users question the mental model — "what does selecting skills on an agent actually do?" |
| 🤷 **Neutral** | macOS polish ([#1467](https://github.com/netease-youdao/LobsterAI/pull/1467)) | Expected platform-native behavior; satisfied by the fix. |
| 🤷 **Neutral** | MCP modal scroll ([#1466](https://github.com/netease-youdao/LobsterAI/pull/1466)) | Expected solved-by-default UX; satisfied by the fix. |

**Overall satisfaction trend:** Users who interact with the skills system and the upgrade path are the most dissatisfied. Core conversation and shortcut UX is stable.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Risk | Recommendation |
|---|---|---|---|
| [#1443](https://github.com/netease-youdao/LobsterAI/issues/1443) — OpenClaw upgrade compatibility | 72 days | 🔴 High — blocks users on latest upstream | Post a status update (even "investigating") to reduce user uncertainty. Consider a compatibility matrix or pinned tracking issue. |
| [#1441](https://github.com/netease-youdao/LobsterAI/pull/1441) — Artifact preview pipeline | 72 days | 🟠 Medium — large feature PR at risk of bit-rot | Review or request smaller incremental merge. 10 conflict files suggest scope drift. |
| [#1445](https://github.com/netease-youdao/LobsterAI/pull/1445) — Skills import validation | 72 days | 🟠 Medium — data integrity fix stalled | Narrowly scoped; low review cost. Strong candidate for quick merge to demonstrate active maintenance. |
| [#1440](https://github.com/netease-youdao/LobsterAI/pull/1440) — Skill badge layout | 72 days | 🟢 Low — cosmetic | Low priority; close or merge at convenience to reduce open-PR noise. |
| [#1437](https://github.com/netease-youdao/LobsterAI/issues/1437) — Silent task-creation failure | 72 days | 🟡 Medium — reported by a code-contributing user | Investigate form validation; at minimum surface the error to the user. |

---

**Summary:** LobsterAI is in a **quiet maintenance period**. Two targeted UX fixes landed today (good signal), but all substantive community contributions and bug reports have been stagnant for ~10 weeks. The highest-leverage action for maintainers would be posting a compatibility update on [#1443](https://github.com/netease-youdao/LobsterAI/issues/1443) and merging the narrowly-scoped skills fix [#1445](https://github.com/netease-youdao/LobsterAI/pull/1445) — both low-effort, high-signal moves to re-engage the community.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-14

---

## 1. Today's Overview

Moltis saw minimal but focused activity over the past 24 hours, with 1 new issue and 1 new pull request — both authored by the same contributor (xzavrel) and directly linked. The project is in a maintenance/bug-fix cadence with no new releases. Activity level is **low** but meaningful: a real-world OAuth integration bug has been identified and an accompanying fix PR is already open, suggesting a responsive contributor workflow. No releases or merged PRs landed today.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours.

---

## 3. Project Progress

No PRs were merged or closed today. The single open PR (#1120) is a bug fix directly tied to the issue filed the same day (see §5 below). Until it is reviewed and merged, no features or fixes have advanced to the main branch.

---

## 4. Community Hot Topics

| Item | Comments | Reactions | Link |
|------|----------|-----------|------|
| Issue #1119 — MCP OAuth `invalid_target` bug | 1 | 👍 0 | [moltis-org/moltis#1119](https://github.com/moltis-org/moltis/issues/1119) |
| PR #1120 — Fix for resource_metadata fetch | — | 👍 0 | [moltis-org/moltis#1120](https://github.com/moltis-org/moltis/pull/1120) |

**Analysis:** The sole hot topic centers on MCP (Model Context Protocol) OAuth interoperability. The underlying need is clear: users are trying to connect Moltis to popular third-party MCP servers (Notion, Linear) and hitting an OAuth authorization failure. This signals that **MCP server integration is a critical user workflow**, and OAuth compliance with the `resource_metadata` parameter in `WWW-Authenticate` headers is a real-world blocker for adoption. The fact that the same user filed both the issue and a fix PR suggests this is a pain point encountered in actual usage, not a theoretical concern.

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR? | Details |
|----------|-------|---------|---------|
| 🔴 **High** | [#1119](https://github.com/moltis-org/moltis/issues/1119) — MCP OAuth fails with `invalid_target` for servers using `resource_metadata` in `WWW-Authenticate` | ✅ Yes — [#1120](https://github.com/moltis-org/moltis/pull/1120) | Affects Notion (`mcp.notion.com/mcp`) and Linear (`mcp.linear.app/sse`). The `discover_and_register()` function passes the `resource_metadata` URL to `fetch_resource_metadata()`, which apparently sends it through an intermediary that causes the `invalid_target` error. PR #1120 proposes using a direct fetch instead. |

**Assessment:** This is a **high-severity interoperability bug** — it blocks users from connecting to two of the most popular MCP servers. The existence of a fix PR is encouraging, but it has not yet been reviewed or merged. Until then, users of Notion and Linear MCP integrations are effectively blocked.

---

## 6. Feature Requests & Roadmap Signals

No new feature requests were filed today. However, the OAuth bug and its fix carry an implicit roadmap signal: **robust MCP OAuth compliance** (particularly around `resource_metadata` and `WWW-Authenticate` handling) is becoming a first-class requirement as Moltis integrates with an expanding ecosystem of third-party MCP servers. Future releases may need broader OAuth conformance testing against multiple providers.

---

## 7. User Feedback Summary

- **Pain point:** Users connecting to Notion and Linear via MCP OAuth are completely blocked by the `invalid_target` error. This is a hard failure — not a degraded experience — meaning these integrations are non-functional.
- **Use case:** Remote MCP server integration with OAuth-protected endpoints is a core workflow for power users building AI agent pipelines.
- **Satisfaction signal:** The bug reporter (xzavrel) took the initiative to also submit a fix PR, which may indicate goodwill toward the project but also suggests the issue was frustrating enough to warrant immediate self-service resolution.
- **Overall sentiment:** Neutral-to-concerned. No praise or broader dissatisfaction expressed today, but a critical integration path is broken.

---

## 8. Backlog Watch

With only 1 issue and 1 PR in the last 24 hours, there is no significant backlog accumulation today. However, **PR #1120** deserves prompt maintainer attention:

- It fixes a high-severity bug blocking two major integrations (Notion, Linear).
- It has been open since 2026-06-13 with no review comments.
- Delaying the merge leaves users of these MCP servers unable to use Moltis.

**Recommendation:** Prioritize review and merge of [#1120](https://github.com/moltis-org/moltis/pull/1120) to unblock affected users and signal active maintenance of MCP OAuth support.

---

*Generated by OWL — ZOO Company*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-14

**Project:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) (also referenced as QwenPaw)

---

## 1. Today's Overview

CoPaw remains highly active with **10 issues** and **8 pull requests** updated in the last 24 hours, but saw **no new releases** — a notable gap given the volume of ongoing fixes. The project is in a sustained bug-stabilization and contributor-onboarding cycle: multiple first-time-contributor PRs from `ly-wang19` target edge-case failures across local model backends, cron jobs, backups, context management, and browser detection. Several high-severity user-facing bugs (attachment download failures, chat freezes, context compression data loss) remain **open without merged fixes**, suggesting release cadence may need to accelerate to deliver accumulated patches.

---

## 2. Releases

**No new releases in the past 24 hours.** The latest known version referenced in issues is `v1.1.11.post2`. The absence of a release despite numerous open fix PRs (#5035, #5037, #5038, #5040, #5041) indicates the team may be batching changes or is blocked by review capacity.

---

## 3. Project Progress

### Merged/Closed PRs (last 24h)

| PR | Status | Summary |
|---|---|---|
| [#2498](https://github.com/agentscope-ai/CoPaw/pull/2498) | **Closed/Merged** | **fix(agents):** Newly created agents now respect the user's UI language instead of defaulting to English with Chinese persona files. Server-side validation with automatic fallback was added for unsupported languages. |
| [#4969](https://github.com/agentscope-ai/CoPaw/pull/4969) | **Closed/Merged** | **feat(skill):** Skill batch download now supports tag-based filtering. Fixes [#2961](https://github.com/agentscope-ai/CoPaw/issues/2961). |

**Advancement:** Two significant merges — a long-standing i18n bug fix (PR opened 2026-03-29, merged after ~2.5 months) and a usability enhancement for skill management. The slow closure of PR #2498 highlights potential review backlog concerns.

---

## 4. Community Hot Topics

### Most-Commented Issues

| Issue | Comments | Topic |
|---|---|---|
| [#5140](https://github.com/agentscope-ai/CoPaw/issues/5140) (CLOSED) | 6 | **Attachment download 404 for docx/pdf files** — Users confirmed `v1.1.11.post2` still fails on binary file downloads despite fixes for plain text files. |
| [#5156](https://github.com/agentscope-ai/CoPaw/issues/5156) | 4 | **Request to add kimi-for-coding to `uv` whitelist** — Subscribers who paid for Kimi coding plans want API access; currently blocked by allowlist restrictions. |
| [#5047](https://github.com/agentscope-ai/CoPaw/issues/5047) | 3 | **Windows Tauri desktop app startup extremely slow** — 1-2 minutes → 10+ minutes after Python→Tauri migration; also becomes unresponsive. |

**Underlying needs analysis:** Users are hitting **reliability regressions from the Tauri migration** (startup, downloads). There is strong demand for **multi-model provider flexibility** — users with subscriptions to competing services (Kimi) want to route through CoPaw rather than being locked to official APIs.

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Description | Fix PR Exists? |
|---|---|---|---|
| 🔴 **Critical** | [#5172](https://github.com/agentscope-ai/CoPaw/issues/5172) | Chat permanently hangs after idle period; requires manual stop → cancel error. **Breaks QQ/WeChat integrations** where "stop" button isn't available. | ❌ |
| 🔴 **Critical** | [#5171](https://github.com/agentscope-ai/CoPaw/issues/5171) | Context compression with large persona files → **all context dropped to 0 tokens**. Model loses task state and cannot continue. | ❌ |
| 🟡 **High** | [#5140](https://github.com/agentscope-ai/CoPaw/issues/5140) | docx/pdf attachment downloads return 404 even in latest version. Closed but still unfixed based on comment thread. | ❌ |
| 🟡 **High** | [#5047](https://github.com/agentscope-ai/CoPaw/issues/5047) | Windows desktop Tauri app startup degraded from ~1-2 min to 10+ min; frequently unresponsive. | ❌ |
| 🟡 **High** | [#5174](https://github.com/agentscope-ai/CoPaw/issues/5174) | Cron/heartbeat agents can't write files or spawn subagents — unclear if this is a logic limitation or a bug. Tasks silently fail. | ❌ |
| 🟠 **Medium** | [#5173](https://github.com/agentscope-ai/CoPaw/issues/5173) | Console/UI feature request (details truncated). | ❌ |
| 🟠 **Medium** | [#5167](https://github.com/agentscope-ai/CoPaw/issues/5167) | Feishu CardKit streaming cards degrade severely with long responses — "character-by-character" output. Experience worse than non-streaming fallback. | ❌ |

**Open PRs that address stability (not yet merged):**
- [#5038](https://github.com/agentscope-ai/CoPaw/pull/5038) fix(context): guards empty message list in `LightContextManager.pre_reply` — could partially mitigate #5171
- [#5040](https://github.com/agentscope-ai/CoPaw/pull/5040) fix(crons): tolerates invalid cron jobs — related to #5174
- [#5035](https://github.com/agentscope-ai/CoPaw/pull/5035) fix(local_models): robust llama.cpp version parsing
- [#5041](https://github.com/agentscope-ai/CoPaw/pull/5041) fix(backup): skips unreadable files during backup

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signal Strength | Likelihood in Near-Term |
|---|---|---|---|
| Add Kimi-for-coding / `uv` whitelist | [#5156](https://github.com/agentscope-ai/CoPaw/issues/5156) | Moderate — reflects broader multi-provider trend | Medium |
| Vietnamese (vi) language support | [#5169](https://github.com/agentscope-ai/CoPaw/issues/5169) | Low-moderate — follows Indonesian/Portuguese pattern; community contributor likely needed | Medium (via community PR) |
| Zalo Bot channel (Vietnam) | [#5168](https://github.com/agentscope-ai/CoPaw/issues/5168) | Low — single request, large dev effort, but aligns with Vietnam market expansion (paired with #5169) | Low in near-term |
| Feishu CardKit streaming performance | [#5167](https://github.com/agentscope-ai/CoPaw/issues/5167) | Moderate — affects enterprise users on a major channel | Medium |

**Prediction:** The most likely near-term additions are Vietnamese i18n (following the established pattern) and multi-model provider whitelisting (market pressure). Zalo and Feishu optimizations require dedicated maintainer bandwidth.

---

## 7. User Feedback Summary

**Pain points:**
1. **Post-migration reliability crisis** — The Tauri desktop migration (#5047) degraded the core user experience dramatically. Users report startup times of 10+ minutes and unresponsive states. This is a regression that erodes trust.
2. **Context/attachment fundamentals broken** — Two separate critical bugs (#5171, #5140) affect the most basic agent operations: retaining task context and downloading files. These are not edge cases.
3. **Chat hang on re-engagement** (#5172) — The most critical open bug, especially for users behind messaging channels (QQ, WeChat) where no "stop" workaround exists.
4. **Cron/heapbeat reliability confusion** (#5174) — Users are unsure whether silent task failures are bugs or design limitations, suggesting documentation gaps.

**Satisfaction indicators:**
- Long-running PR #2498 was finally merged (language selection bug), showing progress on persistent issues.
- Skill batch download tagging (#4969) shows the team is moving forward on UX enhancements.

**Dissatisfaction indicators:**
- Multiple critical bugs are reported as "why does this problem keep existing?" (#5172) — frustration with regression quality.
- Kimi subscribers feel locked out of using their paid plans — perceived vendor lock-in risk.

---

## 8. Backlog Watch

| Item | Age | Notes | Needs Attention |
|---|---|---|---|
| [#5170](https://github.com/agentscope-ai/CoPaw/pull/5035) perf(agents): cache PROFILE.md reads | 1 day | First-time contributor; addresses O(n²) + per-request disk reads on agent list endpoint. **Performance fix with no review activity yet.** | ⚠️ Review |
| [#5035](https://github.com/agentscope-ai/CoPaw/pull/5035) fix(local_models): llama.cpp version parsing | 5 days | Simple, well-scoped fix. Build numbers now exceed 4 digits. **No review comments.** | ⚠️ Review |
| [#5037](https://github.com/agentscope-ai/CoPaw/pull/5037) fix(config): empty Exec= browser detection | 5 days | Prevents IndexError crash on Linux. **No review comments.** | ⚠️ Review |
| [#5038](https://github.com/agentscope-ai/CoPaw/pull/5038) fix(context): empty msg list guard | 5 days | Directly relevant to context-related crashes. **No review comments.** | ⚠️ Review |
| [#5040](https://github.com/agentscope-ai/CoPaw/pull/5040) fix(crons): tolerate invalid jobs | 5 days | Fixes #4835. **No review comments.** | ⚠️ Review |
| [#5041](https://github.com/agentscope-ai/CoPaw/pull/5041) fix(backup): skip unreadable files | 5 days | Fixes #4916. **No review comments.** | ⚠️ Review |
| [#5047](https://github.com/agentscope-ai/CoPaw/issues/5047) Windows Tauri startup slow | 5 days | No maintainer response. Affects all Windows desktop users. | 🔴 Urgent |
| [#5172](https://github.com/agentscope-ai/CoPaw/issues/5172) Chat hangs after idle | 1 day | No maintainer response. Critical for messaging channel users. | 🔴 Urgent |

**Key concern:** Six well-scoped, first-time-contributor PRs from `ly-wang19` have been open for 5+ days with **zero review activity**. This represents a significant bottleneck — these are low-risk, high-value fixes that could be fast-tracked. The lack of maintainer engagement with new contributors risks discouraging community participation.

---

*Generated by OWL — 2026-06-14*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-14

---

## 1. Today's Overview

ZeroClaw remains in an intensely active development phase with **42 issues** and **50 PRs** updated in the last 24 hours — a high-velocity period focused on stabilization ahead of the v0.8.1 milestone. No new releases were published today. The activity profile is dominated by **runtime/core architectural refactoring** (RFCs on unifying agent turn engines, dynamic-library plugin systems, and WASM plugin registries), **post-v0.8.0-beta regression fixes** (canvas-store, `ask_user` failures, plugin install path mismatch), and **Zerocode TUI maturation** (theming, ACP bridge, session management). With 38 open PRs and 25 open active issues, the project is leaning heavily into broadening contributor-driven work, but a queue of maintainers-needed-review items is growing.

---

## 2. Releases

**None.** Latest active version remains **v0.8.0-beta-1** (referenced in issue #6876). Multiple tracker issues (#6970, #6826) and the volume of closed/open PRs suggest a v0.8.1 release is being assembled, but no release PR or tag has been published today.

---

## 3. Project Progress

### Merged / Closed PRs Today (12 total)
| # | Title | Significance |
|---|---|---|
| [#7398](https://github.com/zeroclaw-labs/zeroclaw/pull/7398) | **feat(cron): add pause/resume for scheduled tasks** | Users can now toggle cron jobs on/off without deleting/recreating them; `cron_add` and `cron_update` accept an `enabled` field, PATCH endpoint gains thread-safe state toggle. Tangential UX improvement for managing scheduled tasks. |
| (11 others) | Miscellaneous closed PRs | Closed or staled out; details not prominent in the data slice. |

### Notable Open PRs Advancing
- **[#7546](https://github.com/zeroclaw-labs/zeroclaw/pull/7546) – fix(runtime): unify SopEngine construction — single instance per daemon.** Eliminates duplicate SopEngine instances that caused divergent state between agent tools and MQTT listener. High-stability fix.
- **[#7549](https://github.com/zeroclaw-labs/zeroclaw/pull/7549) – fix(plugins): align install/discovery paths and add legacy migration.** Fixes a critical bug where `zeroclaw plugin install` wrote to `data_dir/plugins` but the runtime scanned `plugins_dir`, making CLI-installed WASM plugins silently invisible. With migration path.
- **[#7574](https://github.com/zeroclaw-labs/zeroclaw/pull/7574) – fix(runtime): honor empty delegate allowed_tools.** The `delegate` tool now respects the documented "no authorization constraint" semantics for empty allowed_tools arrays rather than rejecting.
- **[#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) – feat(rfc-6969): per-turn output routing via send_via + voice delivery fixes.** Implements per-turn channel routing and fixes a Telegram double-send bug for voice-only delivery.
- **[#7556](https://github.com/zeroclaw-labs/zeroclaw/pull/7556) – feat(config): declarative section grouping for the Config menu.** Adds declarative group labels (Foundation, Tools, etc.) to the Zerocode TUI config menu, improving navigation.
- **[#7558](https://github.com/zeroclaw-labs/zeroclaw/pull/7558) – feat(xtask): canonical install spec + cargo generate installers.** Establishes a single source of truth for install surfaces, eliminating feature-flag drift across 9 install targets.

---

## 4. Community Hot Topics

### Most Discussed Issues

1. **[#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) — Dream Mode: Periodic Memory Consolidation & Reflective Learning** (18 comments)
   - **Volume leader by far.** Proposes a lightweight background process during idle periods that consolidates daily memories, reflects on recent interactions, and updates long-term knowledge structures. This is a high-level architectural feature request touching the core agent's ability to learn over time. Status: accepted, p2.
   - **Underlying need:** Users want ZeroClaw to feel more like a persistent, growing assistant rather than a stateless responder. The 18-comment thread suggests deep community interest in long-term memory and agent autonomy.

2. **[#5470](https://github.com/zeroclaw-labs/zeroclaw/issues/5470) — Multiple issues when running safely** (5 comments · closed)
   - Reports excessive memory-saving behavior on Telegram (saving every message multiple times). Closed as stale/blocked.
   - **Underlying need:** Users on specific channel+provider combinations experience degraded behavior; the memory deduplication and safety runtime need channel-awareness testing.

3. **[#5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570) — Faster SQLite memory vector search: O(n) → ANN** (5 comments · closed)
   - Brute-force full table scan for every semantic recall. Proposes in-process approximate nearest neighbor index. Closed as stale/blocked.
   - **Underlying need:** As user memory stores grow, recall latency becomes noticeable. This is a scaling bottleneck for active long-term users.

4. **[#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) — RFC: Unify the three agent turn engines** (4 comments · closed as executed)
   - The three parallel agent turn implementations (`run_tool_call_loop`, `turn_streamed`, `Agent::turn`) are being consolidated. Already executed as a single PR (#7540), not the originally planned phased migration.
   - **Underlying need:** Reducing architectural complexity and preventing divergent behavior between turn execution paths.

5. **[#6760](https://github.com/zeroclaw-labs/zeroclaw/issues/6760) — Update Documentation for Docker — Tested v0.7.5-debian** (4 comments)
   - Community-contributed Docker Compose YAML for Gateway and Web UI. Community-driven documentation improvement.
   - **Underlying need:** Docker deployment remains a friction point; absence of first-party Docker docs pushes users to self-solve.

---

## 5. Bugs & Stability

### Regressions & High-Severity Bugs Reported Today

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| 🔴 P1 S1 | **[#7563](https://github.com/zeroclaw-labs/zeroclaw/issues/7563) — canvas-store regression in WS chat/ACP sessions** | `/canvas` stays empty after #6986 introduced a regression in the canvas-store for WebSocket sessions. **New today (2026-06-13).** | None yet |
| 🔴 P1 S1 | **[#7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542) — `ask_user` fails instantly with "Channel closed" in web dashboard sessions** | The `ask_user` tool in gateway WebSocket sessions fails before the user ever sees the question. Core interaction tool broken in web UI. | **[#7584](https://github.com/zeroclaw-labs/zeroclaw/pull/7584), [#7586](https://github.com/zeroclaw-labs/zeroclaw/pull/7586)** (two competing fix PRs from same author, both opened today) |
| 🔴 P1 S1 | **[#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) — macOS app not work (permission detection + window disappearance)** | macOS 15.7.7: app can't detect granted permissions, displays empty page, window disappears on restart. Tauri desktop. Status: blocked. | None yet |
| 🔴 P1 S1 | **[#7523](https://github.com/zeroclaw-labs/zeroclaw/issues/7523) — dashboard not available (web UI 404 on gateway)** | After brew install on macOS, navigating to `http://127.0.0.1:42617/` shows dashboard not available. User error (`cargo web build` needed), but highlights UX gap for brew users. | None (documentation) |
| 🟡 P1 S3 | **[#7509](https://github.com/zeroclaw-labs/zeroclaw/issues/7509) — self-test `find_asset_url_picks_correct_gnu_over_android` fails on Windows** | CI/test suite fails on Windows hosts due to zip asset rejection. Closed. | Fixed/merged |
| 🟢 P1 S1 | **[#7507](https://github.com/zeroclaw-labs/zeroclaw/issues/7507) — quickstart infinite redraw loop on non-TTY stdin (4.3 GB output)** | `zeroclaw quickstart` in piped/redirected environments enters infinite loop instead of erroring gracefully. Closed. | Fixed/merged |

### Previously Reported, Still Open
| Severity | Issue | Description |
|---|---|---|
| 🔴 P1 | **[#6223](https://github.com/zeroclaw-labs/zeroclaw/issues/6223) — web_fetch not working in WhatsApp Web** | Closed (workaround exists: user-provided screenshot hack). |
| 🟡 P2 | **[#7378](https://github.com/zeroclaw-labs/zeroclaw/issues/7378) — zerocode treats macOS Cmd-C as quit chord** | Closed. |
| 🟡 P2 | **[#7377](https://github.com/zeroclaw-labs/zeroclaw/issues/7377) — zerocode dark themes inherit unreadable terminal foreground text** | Closed. |

**Stability Assessment:** The canvas-store regression (#7563) and the `ask_user` failure (#7542) are the most critical open issues — both are P1/S1 and affect core user workflows in the web dashboard. Fortunately, #7542 already has two fix PRs in flight. The macOS desktop app (#7527) is blocked with no fix in sight.

---

## 6. Feature Requests & Roadmap Signals

### Likely Candidates for v0.8.1 (based on tracker issues and accepted/in-progress status)

- **[#7398](https://github.com/zeroclaw-labs/zeroclaw/pull/7398) — Cron pause/resume** ✅ *Already merged.* This will ship in v0.8.1 or the next release.
- **[#6823](https://github.com/zeroclaw-labs/zeroclaw/issues/6823) — Zerocode ACP Bridge (Tracker)** — The TUI's connection layer to the daemon is in active progress. This is a flagship feature tied to the Zerocode TUI milestone.
- **[#6826](https://github.com/zeroclaw-labs/zeroclaw/issues/6826) — Zerocode (Tracker)** — The overall TUI binary is being actively developed with PR queue items for theming (#6825), session management, and ACP bridging.
- **[#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) — v0.8.1 Integration/Channel/Provider/Tool PR Queue** — Explicitly lists the intended scope for v0.8.1. PRs #7361 (per-turn output routing), #5797 (TLS CA cert for providers), and #6667 (skill_manage background review) are all part of this queue.
- **[#6211](https://github.com/zeroclaw-labs/zeroclaw/issues/6211) — Stabilize Node.js to latest LTS** — Small CI/infra item, in progress, likely for v0.8.1.

### Longer-Term / RFC Stage

- **[#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) — Dream Mode** — High community interest (18 comments). Accepted but p2; this is a v0.9.0 or later feature.
- **[#7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420) — RFC: Native Dynamic-Library Plugin System** — Major architecture change. In RFC/review stage. Addresses monolithic plugin constraints.
- **[#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) — RFC: OCI-Compliant Container Registries for Plugin Storage** — Proposes replacing JSON index with OCI registries for WASM plugin distribution. Part of the long-term plugin ecosystem vision.
- **[#6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289) — Prompt-triggered install suggestions for missing skills/plugins** — Discovery mechanism. Accepted, p2.

**Prediction:** v0.8.1 will primarily be a stabilization release: cron improvements, plugin path fixes, output routing (RFC 6969), Zerocode ACP bridge groundwork, and the skill_manage background review tool. The plugin system rearchitecture (dynamic libraries, OCI registries) is being designed but is unlikely to land before v0.9.0+.

---

## 7. User Feedback Summary

### Pain Points

| Area | Signal |
|---|---|
| **Web Dashboard UX** | Multiple P1 issues: `ask_user` broken (#7542), canvas empty (#7563), multi-session support requests (#7543). The web dashboard is experiencing feature-completeness and regression problems. |
| **macOS Desktop (Tauri)** | App-level failures: permission detection broken, window management broken (#7527), Cmd-C treated as quit chord (#7378). The Tauri desktop app is not production-ready on macOS. |
| **Installer/Onboarding** | Brew-installed macOS users hit missing web UI build (#7523); quickstart infinite loop on non-TTY (#7507). Self-installer needs hardening. |
| **Documentation Gaps** | Docker deployment lacks first-party docs (#6760); risk_profile.allowed_tools behavior with MCP tools is undocumented by design, causing confusion (#6876). |
| **Plugin System Discovery** | Skills/plugins surface is growing but users can't discover what's available without prior knowledge (#6289). Install path mismatch (#7549) made manually installed plugins invisible. |
| **Channel Parity** | WhatsApp Web missing `ack_reactions` (#7518); streaming card messages not supported for QQ/DingTalk/WeCom/Feishu (#7531); web_fetch broken in WhatsApp Web (#6223). Feature parity across channels is a recurring theme. |

### Positive Signals
- **Community-driven documentation:** Users contributing Docker YAML (#6760), maintaining Dockerfiles, writing skill documentation PRs (#6718, #6717, #6716).
- **High RFC participation:** Nillth (#7415), Vitaly567 (#7420), bheatwole (#7497) — engaged contributors proposing well-structured architectural changes.
- **Rapid fix turnaround:** #7542 received two fix PRs within hours of being reported; regression fixes are being opened aggressively.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Status | Why It Matters |
|---|---|---|---|
| **[#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) — Dream Mode** | 57 days (2026-04-18) | accepted, p2 | Highest community engagement (18 comments). No assignee or PR. Needs maintainer scoping decision to move forward or de-scope. |
| **[#5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570) — SQLite ANN vector search** | 66 days (2026-04-09) | stale, blocked | Accepted as valid technical debt then stalled. Scaling bottleneck for long-term users. Needs unblock decision or close-as-wontfix. |
| **[#7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420) — RFC: Native Dynamic-Library Plugin System** | 5 days (2026-06-09) | needs-maintainer-review | Major architecture RFC. Labeled `needs-maintainer-review` — no maintainer response yet despite being 5 days old. Risk of contributor losing momentum. |
| **[#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) — RFC: OCI Registries for Plugin Storage** | 3 days (2026-06-11) | needs-maintainer-review | Companion RFC to #7420. Same situation — needs maintainer engagement. |
| **[#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) — macOS Tauri app broken** | 2 days (2026-06-12) | blocked, no assignee | Entire macOS desktop experience is broken (permissions, window lifecycle). Blocked with no path forward. Needs triage or macOS-competent assignee. |
| **[#6667](https://github.com/zeroclaw-labs/zeroclaw/pull/6667) — feat(skills): background review fork + skill_manage** | 30 days (2026-05-14) | open, needs-author-action, stale | Large PR adding skill management infrastructure. Labeled `needs-author-action` since 2026-05-21. Stale label added. Should be explicitly closed if not viable. |
| **[#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) — v0.8.1 Tracker** | 18 days (2026-05-27) | accepted | Operational tracker for the release. Should be reviewed for completeness and completeness — some items may need to be deferred. |

**Key Observation:** Three items are tagged `needs-maintainer-review` with no maintainer response yet (#7420, #7497, #7415 — #7415 already executed, but the sibling RFCs are waiting). The macOS desktop app (#7527) is blocked without a clear owner. The stale PR queue (#6667, #6684) needs explicit triage decisions to keep the contribution funnel clean.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*