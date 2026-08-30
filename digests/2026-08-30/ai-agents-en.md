# OpenClaw Ecosystem Digest 2026-08-30

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-30 02:59 UTC

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

# OpenClaw Project Digest — 2026-08-30

## 1. Today's Overview

OpenClaw shows **extremely high development velocity** with 500 issues and 500 PRs updated in the last 24 hours — a volume suggesting either a major release preparation cycle, automated bot activity, or a coordinated triage sprint. The ratio of open-to-closed items (415:85 issues, 331:169 PRs) indicates the project is actively accumulating work faster than resolving it. No new stable release was published today, but a **2026.9.1-beta.1** candidate (PR #130731) and **extended-stable 2026.7.33** (PR #133000) are in preparation. The issue landscape is dominated by **session-state reliability**, **message-loss**, and **memory/performance** regressions — many carrying "diamond lobster" (🦞) and "platinum hermit" (🐚) severity ratings, signaling production-blocking defects in multi-agent gateway deployments.

## 2. Releases

**No new stable releases today.** Two release candidates in flight:
- **2026.9.1-beta.1** (PR #130731) — XL-sized release prep with exact-head CI evidence at commit `94e637a`. Carries Linux installer resilience fixes and broad dependency updates across 80+ extensions/channels.
- **Extended-stable 2026.7.33** (PR #133000) — Backport line from `v2026.7.1-2` incorporating 19,153 non-equivalent commits; low-risk fixes plus cumulative updates.

> ⚠️ **Migration note**: Beta.7 field report (Issue #128067) documents **6 reliability defect classes** in current beta (persistence, delivery, restart-recovery). Operators on beta branches should review before upgrading production gateways.

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Scope | Impact |
|----|-------|--------|
| [#128995](https://github.com/openclaw/openclaw/pull/128995) | **Web UI**: Full session actions (pin, unread, icon, copy ID, move) now available from chat header | UX parity with sidebar |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | **Models**: Fix Claude CLI OAuth persistence across gateway restarts; resolves contradictory `anthropic: missing` row | Auth stability for Anthropic CLI users |
| [#128223](https://github.com/openclaw/openclaw/pull/128223) | **CLI**: Alias resolution now uses write-snapshot target | Prevents stale alias chains |
| [#132894](https://github.com/openclaw/openclaw/pull/132894) | **Web UI**: Fix agent-switch leaking another agent's auth/quota display | Security-boundary fix |
| [#119884](https://github.com/openclaw/openclaw/pull/119884) | **DB**: `ANALYZE` added to post-migration hook (v11→current) | Fixes 15s→30-57s session-op stalls on large stores |

> **169 PRs merged/closed** in 24h — majority appear to be automated dependency updates, release prep, and small fixes. Few high-impact user-facing merges beyond the above.

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | 👍 | Core Signal |
|------|----------|-----|-------------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) **Gateway Memory Leak** — RSS 350MB→15.5GB over days, OOM kills, `launchd-handoff` restart loops | 22 | 1 | **Critical production blocker**; no fix PR linked; `clawsweeper:needs-info` |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) **WhatsApp 1:1 image wedges lane ~3min** — multimodal strand deadlock (`active_reply_work`/`queued_work_without_active_run`) | 14 | 1 | Channel-specific multimodal path regression; needs live repro |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) **Cron agent stalls on DeepSeek** — `[cron:...]` prefix deprioritized by provider edge | 13 | 0 | Provider-specific routing bug; workaround: strip prefix |
| [#74586](https://github.com/openclaw/openclaw/issues/74586) **AM embedded run aborts `memory_search`** — false timeout despite model completion | 13 | 3 | Active-memory plugin timeout logic mismatch |
| [#84516](https://github.com/openclaw/openclaw/issues/84516) **Codex replies silently truncated at ~1K chars** — `stop=null, aborted=false` | 12 | 2 | Silent data loss; no error surface; high user impact |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) **A2A `sessions_send` circular calls → duplicate messages** | 12 | 0 | Protocol design gap; needs idempotency/dedup |
| [#112196](https://github.com/openclaw/openclaw/issues/112196) **`memory_search` transient sync timeout masks as "database not open"** | 10 | 0 | Misleading error UX; provider healthy but gateway reports failure |
| [#132762](https://github.com/openclaw/openclaw/issues/132762) **Overflow retry ends on tool result without final delivery** | 10 | 0 | Compaction/retry path drops assistant response |

**Underlying needs**: Operators running **multi-agent, multi-channel gateways** (Slack, Telegram, WhatsApp, Discord, Teams) are hitting **session-state corruption**, **message loss**, and **resource exhaustion** at scale. The "diamond lobster" (🦞) tag cluster on 15+ issues confirms this is the dominant reliability theme.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **P0 / 🦞** | [#125333](https://github.com/openclaw/openclaw/issues/125333) **totalTokens inflation** — #123065 fix only covers `api==="cli"`, memory-flush path unguarded ratchet | Open | No |
| **P0 / 🦪** | [#124788](https://github.com/openclaw/openclaw/issues/124788) **Beta.2 gateway event loop blocks ~100s every ~10min** (anchored timer, string building + fs scan) | Closed (no fix visible) | No |
| **P1 / 🦞** | [#91588](https://github.com/openclaw/openclaw/issues/91588) **Gateway memory leak** — 350MB→15.5GB, OOM crash loop | Open | No |
| **P1 / 🦞** | [#96834](https://github.com/openclaw/openclaw/issues/96834) **WhatsApp image wedges main lane 3min** | Open | No |
| **P1 / 🦞** | [#84516](https://github.com/openclaw/openclaw/issues/84516) **Codex silent truncation ~1K chars** | Open | No |
| **P1 / 🦞** | [#132762](https://github.com/openclaw/openclaw/issues/132762) **Overflow retry succeeds on tool result, no delivery** | Open | No |
| **P1 / 🦞** | [#96692](https://github.com/openclaw/openclaw/issues/96692) **Slack thread replies generated but not delivered** (origin tuple lost) | Open | Linked PR open |
| **P1 / 🦞** | [#120162](https://github.com/openclaw/openclaw/issues/120162) **Safeguard compaction: qualityGuard audit shares timeout budget, aborted mid-flight** | Open | No |
| **P1 / 🐚** | [#119884](https://github.com/openclaw/openclaw/issues/119884) **Session DB missing ANALYZE post-migration → 30-57s stalls** | Open | Fix in #119884 (merged) |
| **P1 / 🦐** | [#97616](https://github.com/openclaw/openclaw/issues/97616) **Unreaped hook/tool child processes → zombie accumulation** | Open | No |
| **P1 / 🦞** | [#131150](https://github.com/openclaw/openclaw/issues/131150) **Slack DMs silently dropped after restart** (19 accounts, degraded installation identity) | Open | No |
| **P1 / 🦞** | [#132109](https://github.com/openclaw/openclaw/issues/132109) **Telegram infinite retry loop** — "Session changed while starting work" | Closed (no fix visible) | No |
| **P2 / 🦞** | [#54488](https://github.com/openclaw/openclaw/issues/54488) **Followup drain monopolizes session lane 20-30min** | Open | PR #132395 open |
| **P2 / 🦞** | [#120735](https://github.com/openclaw/openclaw/issues/120735) **Telegram stickers arrive as raw file refs, no description, not staged** | Open | No |
| **P2 / 🦪** | [#69242](https://github.com/openclaw/openclaw/issues/69242) **`exec` tool SIGKILLs broad find/grep on Linux** (no OOM evidence) | Open | No |

> **Pattern**: Most P1/P0 bugs lack fix PRs despite months of age. The `clawsweeper:no-new-fix-pr` label appears on 40+ of the top 50 issues.

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signals | Likelihood Next Version |
|---------|-------|---------|-------------------------|
| **Multiple Teams bots per gateway** | [#71058](https://github.com/openclaw/openclaw/issues/71058) (8 💬) | PR #112811 open (XL, needs proof) | **High** — PR active, showcase flag |
| **`/models test-fallback` command** | [#6599](https://github.com/openclaw/openclaw/issues/6599) (11 💬) | P3, needs product decision | Medium — low risk, high ops value |
| **Daily spending allowances per agent** | [#121729](https://github.com/openclaw/openclaw/issues/121729) (6 💬) | P3, consumer-friendly ops | Medium — cost-control demand rising |
| **Discord `messageUpdate`/`messageDelete` support** | [#53654](https://github.com/openclaw/openclaw/issues/53654) (5 💬, 3 👍) | Edit-to-reprocess, delete-to-cancel | Medium — parity with Slack/Telegram |
| **i18n for slash command descriptions** | [#79458](https://github.com/openclaw/openclaw/issues/79458) (6 💬) | P3, Chinese users blocked | Low — platform name-length limits |
| **Kubernetes deploy docs overhaul** | [#91455](https://github.com/openclaw/openclaw/issues/91455) (7 💬) | Helm vs single-container debate | Low — docs-only |
| **Linear Persistent Workspace for blind users** | [#82450](https://github.com/openclaw/openclaw/issues/82450) (5 💬, 1 👍) | Accessibility, daily driver use case | Medium — strong user advocacy |
| **JSONL session-replay harness (Codex×Pi parity)** | [#80176](https://github.com/openclaw/openclaw/issues/80176) (5 💬) | Testing infrastructure | Medium — internal quality investment |

**Predictions**: Multi-Teams-bot support (#112811) and spending allowances (#121729) have strongest momentum. Fallback-test command (#6599) is a quick win if product approves.

## 7. User Feedback Summary

**Pain Points (from issue narratives):**
- **Reliability at scale**: Multi-account Slack (19 accounts, Issue #131150), 6-agent Telegram+WebChat (Issue #128067), heavy cron users — all report **message loss, silent drops, restart loops**.
- **Silent data corruption**: Codex truncation without error (#84516), token inflation without warning (#125333), subagent stale output delivery (#78055).
- **Provider-specific gotchas**: DeepSeek cron prefix deprioritization (#121953), Google Antigravity ban from schema reloads (#44134), WhatsApp multimodal deadlock (#96834).
- **Operational opacity**: No way to test fallback chains (#6599), misleading `memory_search` errors (#112196), no spending guardrails (#121729).
- **Platform gaps**: Windows Scheduled Task instability (#91144), Telegram sticker handling (#120735), Feishu activation mode broken (#50490).

**Positive Signals:**
- Blind user calls OpenClaw "one of the most powerful AI work interfaces I have ever used" (#82450) — strong accessibility foundation.
- Active dogfooding: OpenMeow client exercises SDK happy path (#74704), Scott Hanselman's agent files issues (#124911).
- Community contributes fixes: PR #115960 (cache dirs), #124479 (JSON.parse guard), #125190 (Telegram topic approvals).

## 8. Backlog Watch — Stale High-Impact Items Needing Maintainer Attention

| Item | Age | Severity | Blockers |
|------|-----|----------|----------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) **Gateway memory leak** | 83 days | P0/🦞 | `needs-info`, no repro PR |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) **A2A circular `sessions_send` duplicates** | 175 days | P1/🦞 | `source-repro`, `linked-pr-open` but stalled |
| [#74586](https://github.com/openclaw/openclaw/issues/74586) **AM `memory_search` false timeout** | 123 days | P2/🦪 | `needs-maintainer-review`, 3 👍 |
| [#54488](https://github.com/openclaw/openclaw/issues/54488) **Followup drain lane starvation 20-30min** | 158 days | P1/🦞 | PR #132395 open (bounds drain) |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) **Zombie child process leak** | 62 days | P1/🦐 | `needs-info`, 1 👍 |
| [#87441](https://github.com/openclaw/openclaw/issues/87441) **Memory diagnostic thresholds not wired to config** | 95 days | P2/🦞 | 2 👍, simple config plumbing |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) **Multiple Teams bots** | 128 days |

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-08-30)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **bimodal maturity**: a cluster of 4–5 high-velocity projects (OpenClaw, ZeroClaw, Hermes Agent, NanoClaw, NanoBot) executing weekly stabilization sprints with 40–500 PRs/day, contrasted with 6+ lower-velocity or dormant repos. **No project cut a stable release today** — all are in pre-release stabilization, beta hardening, or backlog-clearing phases. The dominant cross-cutting theme is **production reliability at scale**: memory leaks, message loss, session-state corruption, and provider-specific regressions dominate P0/P1 backlogs. Security hardening (sandbox enforcement, credential handling, dependency hygiene) is the second shared investment. Multi-agent interoperability (A2A protocol) and persistent memory parity are emerging as strategic differentiators for the leading projects.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged PRs (24h) | Release Status | Health Score |
|---------|--------------|-----------|------------------|----------------|--------------|
| **OpenClaw** | 500 | 500 | 169 | 2026.9.1-beta.1 & 2026.7.33-ext in prep | **High** (velocity) / **Concern** (backlog growth) |
| **ZeroClaw** | 18 | 50 | 2 | v0.8.5 stabilization (freeze Aug 4) | **High** (architectural investment) / **Caution** (review bottleneck) |
| **Hermes Agent** | 50 | 50 | 19 | None (milestone-driven) | **High** (balanced fix/feature flow) |
| **NanoClaw** | 5 | 45 | 30 | None (stability sprint) | **High** (core-team merge throughput) |
| **NanoBot** | 2 | 14 | 5 | None (stabilization sprint) | **High** (maintenance velocity) |
| **IronClaw** | 3 | 8 | 1 | None (rolling main) | **Medium-High** (focused hardening) |
| **CoPaw / QwenPaw** | 10 | 7 | 0 | v2.2.0 targeting Hub multi-tenant | **Medium** (engagement high, merge throughput zero) |
| **PicoClaw** | 1 | 3 | 2 | None (merged fixes unreleased) | **Medium** (steady, slow cadence) |
| **LobsterAI** | 1 | 5 | 0 | None (stale PRs from Mar 2026) | **Low** (backlog-clearing only) |
| **Moltis** | 1 | 0 | 0 | None | **Low** (single blocker, no movement) |
| **NullClaw** | 0 | 0 | 0 | None | **Dormant** |
| **TinyClaw** | 0 | 0 | 0 | None | **Dormant** |
| **ZeptoClaw** | 0 | 0 | 0 | None | **Dormant** |

**Health Score Legend**: High = daily merges + architectural investment; Medium = active but bottlenecked; Low = maintenance only; Dormant = no 24h activity.

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Scale of deployment feedback**: 19-account Slack gateways, 6-agent Telegram+WebChat topologies, multi-channel (Slack/Telegram/WhatsApp/Discord/Teams) production operators surface real-world reliability defects (message loss, OOM kills, session corruption) that smaller projects cannot replicate.
- **Extension/channel breadth**: 80+ extensions/channels in beta release prep; broadest provider and chat-platform matrix in the ecosystem.
- **Community dogfooding**: High-profile users (Scott Hanselman, blind accessibility advocates) file detailed regressions; OpenMeow client exercises SDK happy path.

### Technical Approach Differences
- **Gateway-centric architecture**: Central message router with session-state persistence, multi-channel adapters, and A2A protocol support — vs. NanoBot/IronClaw's CLI-first or NanoClaw's skill-centric models.
- **Severity taxonomy**: Unique 🦞/🐚/🦐 emoji severity ratings (diamond lobster, platinum hermit, etc.) for production-blocking defects; enables triage at volume.
- **Release discipline**: Parallel beta + extended-stable tracks with exact-head CI evidence; migration notes with field-reported defect classes.

### Community Size Comparison
- **Largest active contributor base** (500 PRs/24h implies heavy bot + human activity).
- **Most commented issues**: Gateway memory leak (#91588, 22 comments), A2A circular calls (#39476, 12 comments) — indicates deep technical engagement.
- **Accessibility advocacy**: Blind user calls it "one of the most powerful AI work interfaces" (#82450) — unique inclusive-design signal.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Session-state reliability & message delivery** | OpenClaw, Hermes Agent, NanoClaw, ZeroClaw, CoPaw | Message loss on restart (OpenClaw #131150, Hermes #93911), Telegram misdelivery (NanoClaw #10237, Hermes #97557), Ark API history poisoning (CoPaw #7402), A2A duplicate messages (OpenClaw #39476, ZeroClaw #3566 tracker) |
| **Memory/token cost control** | OpenClaw, ZeroClaw, IronClaw, NanoBot | Token inflation (OpenClaw #125333), compaction economics (IronClaw #7824: 4× cost), context compaction ownership (NanoBot #5568), persistent memory parity (ZeroClaw #8891) |
| **Sandbox/security hardening** | NanoBot, ZeroClaw, IronClaw, NanoClaw, PicoClaw | Fail-closed exec (NanoBot #5536 P1), granular sandbox policy RFC (ZeroClaw #6996), Git shell policy (ZeroClaw #9678), Skill HTTP egress binding (ZeroClaw #10369), MCP connection resilience (PicoClaw #3337) |
| **Provider config fidelity across paths** | OpenClaw, Hermes Agent, NanoClaw, CoPaw | `extra_body` dropped on gateway/messaging (Hermes #54922), OAuth persistence (OpenClaw #125471), signal-cli version pin (NanoClaw #3671), MCP credential migration (CoPaw #7301) |
| **Multi-agent / multi-tenant support** | OpenClaw, ZeroClaw, CoPaw, Hermes Agent | Multiple Teams bots (OpenClaw #71058), QwenPaw Hub (CoPaw #7318), A2A protocol (ZeroClaw #3566, OpenClaw #39476), household edge mesh (ZeroClaw #10360) |
| **Observability & cost tracking** | OpenClaw, ZeroClaw, Hermes Agent, NanoClaw | Spending allowances (OpenClaw #121729), `AgentEnd` cost_usd missing (ZeroClaw #8539), usage audit bypass (Hermes #96391), default model/fast tier env (NanoClaw #3664) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | Hermes Agent | NanoClaw | NanoBot | IronClaw | CoPaw/QwenPaw |
|-----------|----------|----------|--------------|----------|---------|----------|---------------|
| **Primary Architecture** | Gateway + session-state + multi-channel adapters | Skill-centric + A2A protocol + memory parity | Desktop/TUI + gateway + background review | Chat SDK bridge + channel adapters + skills | CLI/WebUI + agent runner + provider catalog | Codebase graph + compaction + lifecycle hooks | Multi-tenant Hub + MCP + PowerContext memory |
| **Target User** | Operators running production multi-agent gateways | Developers building interoperable agent ecosystems | Power users wanting desktop/TUI + background curation | Teams needing Slack/Signal/Discord bot deployment | Individual developers wanting multi-provider CLI | Codebase-aware agent users optimizing token cost | Enterprise teams needing RBAC, shared skills, SSO |
| **Unique Technical Bet** | Session-state as source of truth across channels | A2A native + persistent memory categories + edge mesh | Background self-review fork + computer-use integration | `extractRawText` hook for adapter content recovery | Runner-owned context compaction + live OAuth catalog | Pi-style compaction barrier + declarative lifecycle hooks | QwenPaw Hub (multi-tenant) + PowerContext pluggable memory |
| **Release Model** | Beta + extended-stable parallel tracks | Weekly v0.8.x stabilization | Milestone-driven | Continuous main + infrequent cuts | Stabilization sprints toward minor | Rolling main + nightly graph refresh | v2.2.0 major (Hub) |
| **Language/Stack** | TypeScript/Node (gateway), Go (some adapters) | Rust (core), TypeScript (skills) | TypeScript/Electron (Desktop), Go (gateway) | TypeScript (Node/Bun) | TypeScript (Node) | Rust (core), TypeScript (tooling) | TypeScript/Electron |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration + Architectural Investment (Weekly Sprint Cadence)
- **OpenClaw**: Highest raw velocity; beta/release prep dominates; technical debt accumulating (40+ P1 issues with `clawsweeper:no-new-fix-pr`).
- **ZeroClaw**: High velocity on RFCs (sandbox, A2A, memory, edge mesh); **review bottleneck** (7+ XL PRs tagged `needs-maintainer-review`).
- **NanoClaw**: Core-team merging 30+ PRs/day; systematic infra debt paydown (CI, labels, Docker, env parsing); Signal integration fragile.
- **Hermes Agent**: Balanced bug/feature merge rate (19/50); i18n push (Indonesian); background review stabilization.

### Tier 2: Focused Hardening / Pre-Release Stabilization
- **NanoBot**: 5 merges/day; security (fail-closed exec), runner refactor, skill manual-invocation — all foundational.
- **IronClaw**: Compaction economics (measured 4× cost), loop termination, telemetry foundations; macOS DX unblocked.

### Tier 3: Community Engagement but Merge Bottleneck
- **CoPaw/QwenPaw**: 10 issues/7 PRs updated, **0 merges**; two critical unfixed bugs (MCP creds, Ark API); Hub discussion active (14 comments).

### Tier 4: Steady Maintenance / Low Cadence
- **PicoClaw**: 2 high-impact merges (Telegram topics, MCP resilience); 1 critical stale bug (runaway Telegram edits).
- **LobsterAI**: 5 stale PRs from March 2026; zero merges; team-config template (#1145) is highest-impact pending item.

### Tier 5: Minimal / Dormant
- **Moltis**: Single sandbox blocker, no PRs.
- **NullClaw, TinyClaw, ZeptoClaw**: No 24h activity.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence Across Projects | Strategic Implication |
|-------|-------------------------|----------------------|
| **Production reliability > new features** | P0/P1 backlogs dominate OpenClaw, ZeroClaw, Hermes, NanoClaw, CoPaw; no stable releases today | Invest in session-state durability, message idempotency, and graceful degradation *before* scaling channels/agents |
| **Token-cost economics driving architecture** | IronClaw compaction barrier (4× cost), ZeroClaw persistent memory parity, NanoBot runner-owned compaction, OpenClaw token inflation | Context compaction, structured summaries, and cross-session memory are now **core differentiators**, not optimizations |
| **Interoperability via A2A protocol** | ZeroClaw tracker (7👍, 168 days), OpenClaw circular-call bug, Hermes delegation config | A2A v0.3.0+ is becoming the **de facto agent-to-agent standard**; implement early to avoid lock-in |
| **Security hardening as default** | NanoBot fail-closed exec (P1), ZeroClaw sandbox RFC + Git policy + skill egress, IronClaw CodeQL v4, PicoClaw MCP resilience | **Fail-closed sandboxing, credential marking, dependency hygiene** are table stakes for any agent handling external tools/data |
| **Multi-tenant / team deployment demand** | CoPaw Hub (14-comment discussion), OpenClaw multiple Teams bots, ZeroClaw household edge mesh, NanoClaw default model env | **RBAC, shared skills, admin consoles, SSO** — enterprise features now expected in open-source agents |
| **Provider config drift is a systemic risk** | Hermes `extra_body` dropped on gateway, OpenClaw OAuth persistence, NanoClaw signal-cli pin, CoPaw MCP creds | **Single source of truth for provider config** across CLI, gateway, messaging, and delegation paths is a critical architecture requirement |
| **Accessibility as quality indicator** | OpenClaw blind user advocacy, ZeroClaw TUI SGR fixes,

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-30

---

## 1. Today's Overview

NanoBot showed **high maintenance velocity** on 2026-08-30 with **14 PRs updated** (5 merged/closed, 9 still open) and **2 new issues filed**. The merged work spans WebUI polish, provider model discovery, CLI command ergonomics, pane-group persistence, and a security hardening of the execution sandbox. Open PRs continue to address agent runner context compaction, rate-limit state bounding, reasoning-stream cleanup on cancellation, and skill invocation controls. No new release was cut today; the project appears to be in an active stabilization sprint ahead of a likely minor version bump.

---

## 2. Releases

**No new releases published today.** The latest published version remains whatever was shipped prior to 2026-08-30.

---

## 3. Project Progress — Merged / Closed PRs Today

| PR | Title | Area | Key Change |
|----|-------|------|------------|
| [#5599](https://github.com/HKUDS/nanobot/pull/5599) | **fix(cli): stream gateway logs in WebUI launcher** | CLI / WebUI | Terminal now tails the selected instance’s gateway log in real time while `nanobot webui` runs, starting from the current file end; handles missing/truncated files gracefully. |
| [#5596](https://github.com/HKUDS/nanobot/pull/5596) | **feat(providers): discover OAuth model catalogs online** | Providers | Adds live model-catalog discovery for OpenAI Codex, xAI Grok, GitHub Copilot; normalizes & bounds catalog shared by WebUI selector & runtime checks; defaults to Grok 4.6 with offline fallbacks. |
| [#5595](https://github.com/HKUDS/nanobot/pull/5595) | **fix(webui): hide SkillHub install counts** | WebUI / SkillHub | Removes misleading “0 installs” badges from SkillHub rows where marketplace data is sparse. |
| [#5591](https://github.com/HKUDS/nanobot/pull/5591) | **fix(webui): preserve named pane groups** | WebUI / Layout | Prevents custom pane-group titles from being lost when reconciliation dissolves single-pane implicit groups; also fixes active-pane deletion edge case. |
| [#5560](https://github.com/HKUDS/nanobot/pull/5560) | **feat(cli): make nanobot the default agent command** | CLI | `nanobot` (no subcommand) now launches the native terminal agent; root-level flags (`-m`, `--workspace`, `--session`, `--classic`, etc.) accepted directly without duplicating `agent` subcommand. |

**Summary:** Five PRs merged—four WebUI/CLI UX improvements and one provider catalog feature—signal a focus on **operator ergonomics and multi-provider model freshness**.

---

## 4. Community Hot Topics

| Item | Type | Activity | Signal |
|------|------|----------|--------|
| [#5568](https://github.com/HKUDS/nanobot/pull/5568) `refactor(agent): let runner own context compaction` | PR (open, updated today) | 0 comments, 0 👍 | Core architecture refactor: `AgentRunner` now owns request fitting & context compaction before every provider call. Long-running PR (opened 2026-08-27) suggests maintainer review bottleneck. |
| [#5536](https://github.com/HKUDS/nanobot/pull/5536) `[security, p1] fix(exec): fail closed when restricted shell lacks a sandbox` | PR (open, updated today) | 0 comments, 0 👍 | **Highest priority (P1) security fix** for #4072: moves `ExecTool` from path-check allowlist to **fail-closed** when no sandbox is present. Open since 2026-08-25; likely awaiting security review. |
| [#5405](https://github.com/HKUDS/nanobot/pull/5405) `feat(skills): support manual-only invocation` | PR (open, updated today) | 0 comments, 0 👍 | Adds `disable-model-invocation: true` front-matter so side-effect skills (deploy, publish) require explicit user trigger. Open since 2026-08-16—oldest open PR in today’s set. |

**Underlying needs:**  
- **Security hardening** (sandbox enforcement)  
- **Architectural clarity** (runner-owned compaction)  
- **Human-in-the-loop control** for destructive skills  

All three are **foundational** rather than cosmetic, explaining their extended review cycles.

---

## 5. Bugs & Stability — Reported Today

| Severity | Issue / PR | Summary | Fix PR Exists? |
|----------|------------|---------|----------------|
| **P2** | [#5593](https://github.com/HKUDS/nanobot/issues/5593) `Session message rate-limit state retains expired one-shot sessions` | `_sent_at` deque per source session never prunes expired entries unless that same source sends again → unbounded memory growth for one-shot sessions. | **Yes** – [#5594](https://github.com/HKUDS/nanobot/pull/5594) (open, authored by same reporter) bounds & prunes state on each send. |
| **P2** | [#5592](https://github.com/HKUDS/nanobot/issues/5592) `edit_file documentation does not state that match selectors are mutually exclusive` | Doc string & tool contract imply `occurrence`, `line_hint`, `replace_all` can be combined; runtime validates they are exclusive. | **Yes** – [#5598](https://github.com/HKUDS/nanobot/pull/5598) (open) clarifies exclusivity in both doc string & contract. |
| **P2** | [#5600](https://github.com/HKUDS/nanobot/pull/5600) `fix(agent): close native reasoning on cancellation` | Cancelled streaming request leaks `reasoning_end` event → client UI stuck in “thinking” state. | **PR is the fix** (open). |
| **P2** | [#5597](https://github.com/HKUDS/nanobot/pull/5597) `fix(channels): deliver provider retry waits as progress` | `RetryWaitEvent` dropped when progress channel disabled → no visibility into back-off. | **PR is the fix** (open). |
| **P1 (security)** | [#5536](https://github.com/HKUDS/nanobot/pull/5536) `fail closed when restricted shell lacks a sandbox` | Path-check allowlist bypassable via symlinks/shell expansion; now fails closed if no sandbox. | **PR is the fix** (open, P1). |

**Stability takeaway:** Two fresh user-reported bugs (#5593, #5592) already have companion fix PRs; the security issue (#5536) remains the highest-risk open item.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Minor |
|--------|--------|---------------------------|
| **Completion notification sound (opt-in)** | [#5602](https://github.com/HKUDS/nanobot/pull/5602) (new today) | High – small, self-contained, closes #5524. |
| **Manual-only skill invocation** | [#5405](https://github.com/HKUDS/nanobot/pull/5405) | Medium – design settled, needs review bandwidth. |
| **Runner-owned context compaction** | [#5568](https://github.com/HKUDS/nanobot/pull/5568) | Medium – architectural, may wait for test matrix pass. |
| **Live OAuth model catalog discovery** | [#5596](https://github.com/HKUDS/nanobot/pull/5596) (merged) | **Already shipped** – will appear in next release. |
| **Bare `nanobot` launches agent** | [#5560](https://github.com/HKUDS/nanobot/pull/5560) (merged) | **Already shipped** – CLI ergonomics upgrade. |

**Prediction:** Next patch/minor will likely bundle the merged WebUI/CLI/provider work plus the two doc/rate-limit fixes (#5594, #5598). The runner refactor (#5568) and skill manual-mode (#5405) may slip to the following minor unless review accelerates.

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|-----------------------|----------|-----------|
| **WebUI lacks audible cue when turn finishes in foreground** | #5524 → #5602 | 👍 Positive (feature request implemented quickly) |
| **Misleading “0 installs” on SkillHub rows** | #5595 | 👍 Positive (removed promptly) |
| **Custom pane-group titles lost on deletion** | #5591 | 👍 Positive (fixed same day) |
| **`edit_file` selector exclusivity undocumented** | #5592 | 😐 Neutral (doc bug, fix PR ready) |
| **One-shot sessions leak rate-limit state** | #5593 | 😐 Neutral (bug, fix PR ready) |
| **Sandbox bypass via symlinks/shell expansion** | #4072 → #5536 | 😟 Negative (security gap, fix in review) |

Overall: **responsive maintainers** for UX papercuts; **security fix latency** is the only dissatisfaction signal.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5536](https://github.com/HKUDS/nanobot/pull/5536) `fail closed when restricted shell lacks a sandbox` (P1 security) | 5 days open | **Highest severity**; blocks safe `restrict_to_workspace` usage without sandbox. |
| [#5405](https://github.com/HKUDS/nanobot/pull/5405) `feat(skills): support manual-only invocation` | 14 days open | Enables safe deployment/publish skills; design complete, awaits review. |
| [#5568](https://github.com/HKUDS/nanobot/pull/5568) `refactor(agent): let runner own context compaction` | 3 days open | Core runtime change; unblocks future token-budget features. |
| [#5600](https://github.com/HKUDS/nanobot/pull/5600) `close native reasoning on cancellation` | 1 day open | UX regression (stuck “thinking” UI) on cancel; small fix, needs merge. |

**Recommendation:** Prioritize security PR #5536 and cancellation fix #5600 for immediate merge; schedule review slots for #5405 and #5568 this week.

---

*Digest generated from GitHub API data as of 2026-08-30 00:00 UTC. All links point to HKUDS/nanobot repository.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-30

## 1. Today's Overview
Hermes Agent shows **high development velocity** with 50 issues and 50 PRs updated in the last 24 hours. The project is in active maintenance mode with a healthy balance of bug fixes (22 issues closed, 19 PRs merged/closed) and feature work. No new release was published today. Activity centers on **gateway/message delivery reliability**, **provider configuration edge cases**, **desktop/TUI stability**, and **i18n expansion** (Indonesian locale). The backlog contains several long-standing architectural issues around session state persistence and cross-platform compatibility.

## 2. Releases
**No new releases today.** The latest version remains unspecified in the data. Release cadence appears to be driven by milestone completion rather than fixed schedules.

## 3. Project Progress — Merged/Closed PRs Today (19)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#98296](https://github.com/NousResearch/hermes-agent/pull/98296) | Bug fix | Fix QQBot authorization for approval clicks on DM session keys | **High** — unblocks QQ 1:1 messaging |
| [#97783](https://github.com/NousResearch/hermes-agent/pull/97783) | Bug fix | Accept bare duration units (`hour`, `day`) in cron schedule parsing | **Medium** — fixes UI/backend mismatch |
| [#54922](https://github.com/NousResearch/hermes-agent/issues/54922) | Bug fix | `custom_providers[].extra_body` silently dropped on gateway/messaging paths | **High** — provider config reliability |
| [#75091](https://github.com/NousResearch/hermes-agent/issues/75091) | Bug fix | Provider-scoped `extra_body` not re-resolved on failover | **High** — failover correctness |
| [#93911](https://github.com/NousResearch/hermes-agent/issues/93911) | Bug fix | Desktop relay abandons `bot_relay.deliver` after 30s timeout | **High** — long-running bot turns |
| [#64926](https://github.com/NousResearch/hermes-agent/issues/64926) | Bug fix | Skill files auto-modified during conversation; read-only config ignored | **Medium** — data integrity |
| [#93068](https://github.com/NousResearch/hermes-agent/issues/93068) | Bug fix | Computer-use existing-profile grant & browser recovery conflicts | **Medium** — macOS browser automation |
| [#39996](https://github.com/NousResearch/hermes-agent/issues/39996) | Bug fix | Background-review fork advertises full tool schema to local endpoints | **Medium** — local model performance |
| [#40003](https://github.com/NousResearch/hermes-agent/issues/40003) | Bug fix | Background-review fork can't read external files via `skill_manage` | **Low** — curator workflow |
| [#45877](https://github.com/NousResearch/hermes-agent/issues/45877) | Bug fix | Cron background review blocks read-only tools (`read_file`, `search_files`) | **Low** — overly restrictive |
| [#61521](https://github.com/NousResearch/hermes-agent/issues/61521) | Bug fix | Background review fork tool-denial storm starves self-improvement loop | **Medium** — background curation |
| [#65035](https://github.com/NousResearch/hermes-agent/issues/65035) | Bug fix | Delegation config with `base_url` drops `request_overrides/extra_body` | **Medium** — delegation reliability |
| [#51975](https://github.com/NousResearch/hermes-agent/issues/51975) | Bug fix | Desktop advertises natural schedules that `parse_schedule` rejects | **Low** — UX consistency |
| [#97045](https://github.com/NousResearch/hermes-agent/pull/97045) | Bug fix | Curator: refuse un-ledgered terminal writes to skills tree | **Medium** — skill integrity |
| [#44672](https://github.com/NousResearch/hermes-agent/issues/44672) | Feature | Make background self-review tool whitelist configurable | **Low** — extensibility |
| [#41909](https://github.com/NousResearch/hermes-agent/issues/41909) | Feature | Custom responsive fields in CLI status bar | **Low** — CLI UX |
| [#69323](https://github.com/NousResearch/hermes-agent/issues/69323) | Feature | Native Alibaba Cloud Token Plan provider | **Low** — provider coverage |
| [#38710](https://github.com/NousResearch/hermes-agent/issues/38710) | Feature | Add `observe_unmentioned_group_messages` to WhatsApp platform | **Medium** — WhatsApp parity |
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | Feature | Native mobile app (iOS/Android) with voice calling | **Low** — long-term roadmap |

**Key advancement:** Major gateway/message delivery fixes (#93911, #98296), provider config correctness (#54922, #75091, #65035), and background review stability (#39996, #40003, #61521, #45877).

## 4. Community Hot Topics — Most Active Issues/PRs
| Item | Comments | 👍 | Core Need |
|------|----------|-----|-----------|
| [#54922](https://github.com/NousResearch/hermes-agent/issues/54922) `extra_body` silently dropped | 7 | 1 | **Provider config parity** — CLI works but gateway/messaging paths drop custom provider extensions |
| [#64926](https://github.com/NousResearch/hermes-agent/issues/64926) Skills auto-modified, read-only ignored | 6 | 1 | **Immutable skills** — Platform-managed skills need runtime read-only guarantee |
| [#38710](https://github.com/NousResearch/hermes-agent/issues/38710) WhatsApp `observe_unmentioned_group_messages` | 6 | 4 | **Context awareness** — WhatsApp parity with Telegram for group message observation |
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) Native mobile app with voice | 5 | 0 | **Mobile-first UX** — Voice calling as primary interaction mode |
| [#97754](https://github.com/NousResearch/hermes-agent/issues/97754) macOS browser binding CuaDriver conflicts | 5 | 0 | **macOS automation reliability** — Competing runtimes break profile binding |

**Underlying theme:** Users need **configuration fidelity across all code paths** (CLI, gateway, messaging) and **platform parity** for messaging adapters. The `extra_body` issue (#54922) is a canonical example of config drift between entry points.

## 5. Bugs & Stability — Ranked by Severity
### Critical (Session/message loss)
| Issue | Status | Fix PR | Description |
|-------|--------|--------|-------------|
| [#93911](https://github.com/NousResearch/hermes-agent/issues/93911) | Closed | Likely in batch | Desktop relay abandons `bot_relay.deliver` after 30s timeout — long computer-use turns fail |
| [#98292](https://github.com/NousResearch/hermes-agent/issues/98292) | **Open** | [#98296](https://github.com/NousResearch/hermes-agent/pull/98296) | QQBot approval clicks rejected as unauthorized in named-profile sessions |
| [#97557](https://github.com/NousResearch/hermes-agent/issues/97557) | **Open** | — | Explicit Telegram cron delivery target ignored — output lands in wrong session |
| [#98228](https://github.com/NousResearch/hermes-agent/issues/98228) | **Open** | — | Telegram in-flight progress uses retired adapter after reconnect |

### High (Config/data integrity)
| Issue | Status | Fix PR | Description |
|-------|--------|--------|-------------|
| [#54922](https://github.com/NousResearch/hermes-agent/issues/54922) | Closed | In batch | `custom_providers[].extra_body` silently dropped on gateway/messaging |
| [#75091](https://github.com/NousResearch/hermes-agent/issues/75091) | Closed | In batch | Provider `extra_body` not re-resolved on failover — leaks to fallback |
| [#65035](https://github.com/NousResearch/hermes-agent/issues/65035) | Closed | In batch | Delegation config with `base_url` drops `request_overrides/extra_body` |
| [#64926](https://github.com/NousResearch/hermes-agent/issues/64926) | Closed | In batch | Skill files auto-modified despite read-only mount/config |
| [#97754](https://github.com/NousResearch/hermes-agent/issues/97754) | Closed | — | macOS browser binding conflicts with multiple CuaDriver runtimes |

### Medium (UX/correctness)
| Issue | Status | Description |
|-------|--------|-------------|
| [#22894](https://github.com/NousResearch/hermes-agent/issues/22894) | **Open** | TUI: thinking content leaks when `show_reasoning=false` |
| [#93999](https://github.com/NousResearch/hermes-agent/issues/93999) | **Open** | KawaiiSpinner floods terminal on narrow consoles (Windows/PowerShell) |
| [#98295](https://github.com/NousResearch/hermes-agent/issues/98295) | **Open** | `wheelAccel` broken in modern terminals |
| [#87041](https://github.com/NousResearch/hermes-agent/issues/87041) | **Open** | WhatsApp setup guide links to whatsmeow but bridge is Baileys |
| [#96391](https://github.com/NousResearch/hermes-agent/issues/96391) | **Open** | `hermes cron run` bypasses usage audit — manual runs invisible to cost tracking |

### Low / In Progress
- [#98056](https://github.com/NousResearch/hermes-agent/issues/98056) Desktop file browser reads gateway local path instead of SSH backend CWD
- [#98299](https://github.com/NousResearch/hermes-agent/issues/98299) `/v1/runs` bypasses GoalManager (persistent goals)
- [#93068](https://github.com/NousResearch/hermes-agent/issues/93068) Computer-use grant/recovery conflicts (closed)
- Background review tool-denial storms ([#39996](https://github.com/NousResearch/hermes-agent/issues/39996), [#40003](https://github.com/NousResearch/hermes-agent/issues/40003), [#61521](https://github.com/NousResearch/hermes-agent/issues/61521), [#45877](https://github.com/NousResearch/hermes-agent/issues/45877)) — mostly closed

## 6. Feature Requests & Roadmap Signals
| Request | Signals | Likelihood Next Version |
|---------|---------|------------------------|
| [#38710](https://github.com/NousResearch/hermes-agent/issues/38710) WhatsApp `observe_unmentioned_group_messages` | 6 comments, 4 👍, Telegram parity | **High** — Clear parity gap, active discussion |
| [#92336](https://github.com/NousResearch/hermes-agent/pull/92336) Indonesian (id) locale for CLI/gateway/Desktop | PR open, part of #80392 i18n initiative | **High** — PR ready, supersedes closed #26287 |
| [#92192](https://github.com/NousResearch/hermes-agent/pull/92192) Indonesian root docs (README/CONTRIBUTING/SECURITY) | PR open, closes #92191 | **High** — Documentation completeness |
| [#93632](https://github.com/NousResearch/hermes-agent/pull/93632) Seed Bahasa Indonesia Docusaurus locale | PR open, first tranche | **Medium** — Docs infrastructure |
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) Native mobile app (iOS/Android) with voice | 5 comments, long-standing | **Low** — Major product expansion |
| [#98196](https://github.com/NousResearch/hermes-agent/issues/98196) Native iPhone companion app | 2 comments, new | **Low** — Companion to desktop |
| [#69323](https://github.com/NousResearch/hermes-agent/issues/69323) Alibaba Cloud Token Plan provider | 4 comments, 1 👍, closed | **Medium** — Provider gap filled |
| [#48660](https://github.com/NousResearch/hermes-agent/issues/48660) Expose actual provider/credential/fallback per turn | 2 comments, observability need | **Medium** — Debugging aid |
| [#98197](https://github.com/NousResearch/hermes-agent/pull/98197) Deferred plugin questions (SQLite-backed) | New PR, gateway session resilience | **Medium** — Plugin architecture |
| [#90118](https://github.com/NousResearch/hermes-agent/pull/90118) Isolated Desktop instances for named SSH shells | PR open, second product surface | **Medium** — Multi-tenant desktop |

**Predicted next version focus:** i18n (Indonesian), WhatsApp parity, gateway session resilience (deferred questions, bot group chat persistence), and provider observability.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Config not respected across entry points** | #54922 (CLI works, gateway drops `extra_body`), #75091 (failover leaks), #65035 (delegation drops overrides) | Advanced users building custom provider integrations hit silent failures |
| **Skills mutability breaks platform ops** | #64926 (read-only mount ignored, auto-patches) | Teams managing skills centrally cannot guarantee immutability |
| **Message delivery unreliability** | #93911 (30s timeout), #98292 (QQ auth), #97557 (Telegram misdelivery), #98228 (adapter retirement) | Bot/group chat users experience lost messages, frozen sessions |
| **Background review too aggressive** | #39996, #40003, #61521, #45877 (tool denial storms, blocked reads) | Self-improvement loop starves; local models thrash |
| **Desktop/TUI platform quirks** | #22894 (reasoning leak), #93999 (spinner flood), #98295 (wheelAccel), #98056 (SSH path mismatch) | Daily driver friction on Windows/Linux |
| **Cost observability gaps** | #96391 (manual cron runs bypass audit) | FinOps teams cannot track all usage |
| **Documentation drift** | #87041 (WhatsApp guide links wrong bridge) | New users follow stale setup instructions |

**Positive signals:** Active PR engagement on i18n, provider expansion, and session resilience shows community investment in production hardening.

## 8. Backlog Watch — Long-Unanswered / Maintainer Attention Needed
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) Native mobile app | Since 2026-04-18 (4.5 months) | High community interest (5 comments), no maintainer response; strategic product gap |
| [#48

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-30

---

## 1. Today's Overview
PicoClaw showed moderate maintenance activity in the last 24 hours with **1 active issue** and **3 PR updates** (2 closed, 1 new). No new releases were published. The project is in a **steady maintenance phase** — core bug fixes are being merged (Telegram topic handling, MCP connection resilience), while a high-impact Telegram rate-limit bug (#3343) remains open and unattended for over a week. Community contributions continue on i18n polish.

---

## 2. Releases
**No new releases** in the last 24 hours. The project appears to follow a non-continuous release cadence; recent fixes (PRs #3315, #3337) are merged to `main` but not yet packaged.

---

## 3. Project Progress — Merged / Closed PRs Today

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | Support topics in private bot chats | Feature / Bug fix | **Medium** — Fixes Telegram forum topic detection for private bot chats where `Chat.IsForum` is false but `IsTopicMessage` is provided. Unblocks users running bots in topic-enabled private chats. |
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | Fix/mcp failure hangs agent loop | Bug fix / Stability | **High** — Prevents agent loop crash when MCP server connection fails. Previously a broken MCP server would halt all chat responses until restart. Now errors are handled gracefully, preserving availability. |

Both PRs were authored by external contributors (`genuss`, `kuzmichus`) and merged after ~2–3 weeks in review, indicating a **healthy but not rapid** merge velocity.

---

## 4. Community Hot Topics

| Item | Activity | Signal |
|------|----------|--------|
| [#3343](https://github.com/sipeed/picoclaw/issues/3343) — *Tool feedback animation edits Telegram message indefinitely after failed turn* | 1 comment, 0 👍, **open 8 days** | **Critical operational bug**: A runaway `editMessageText` loop generated **228,000+ API calls** over days, triggering Telegram server-side rate limits (`retry_after`). Root cause: animation timer not cleaned up when agent turn stalls/fails. No fix PR yet. High user-impact for Telegram deployments. |
| [#3348](https://github.com/sipeed/picoclaw/pull/3348) — *i18n: complete Czech code wrap labels* | 0 comments, 0 👍, **opened today** | Low-noise i18n contribution. Signals active non-English community but no discussion yet. |

**Underlying need**: Telegram bot operators need **robust API call lifecycle management** — especially cleanup on error paths — to avoid quota exhaustion and bans.

---

## 5. Bugs & Stability

| Severity | Issue / PR | Status | Fix PR? |
|----------|------------|--------|---------|
| **Critical** | [#3343](https://github.com/sipeed/picoclaw/issues/3343) — Runaway `editMessageText` loop (228k+ calls) | Open, stale | ❌ No |
| **High** | [#3337](https://github.com/sipeed/picoclaw/pull/3337) — MCP failure hangs agent loop | **Merged** | ✅ Fixed in #3337 |
| **Medium** | [#3315](https://github.com/sipeed/picoclaw/pull/3315) — Topic handling broken in private bot chats | **Merged** | ✅ Fixed in #3315 |

**Stability note**: Two high-impact stability bugs fixed this week; one critical Telegram API abuse bug remains open without a fix branch.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Telegram topic support in private chats** | PR #3315 (merged) | ✅ Already in `main` |
| **MCP connection resilience** | PR #3337 (merged) | ✅ Already in `main` |
| **i18n completeness (Czech, others)** | PR #3348 (open) | 🟡 Likely — low-risk, community-driven |
| **Animation / feedback lifecycle hardening** | Issue #3343 (open) | 🔴 **Urgent** — should be prioritized before next release |

**Prediction**: Next release will likely bundle the two merged fixes + i18n polish. The runaway animation bug (#3343) *should* block a release but currently has no assignee or fix.

---

## 7. User Feedback Summary

- **Pain point**: Telegram bot operators hitting **rate limits due to internal bugs** (not user traffic). The 228k edit attempts in #3343 represent a **catastrophic failure mode** — users experience silent degradation until Telegram bans the bot.
- **Use case**: Private bot chats with forum topics enabled — a niche but real deployment pattern now supported.
- **Satisfaction**: Contributors `genuss` and `kuzmichus` delivered high-quality fixes; merge latency (~3 weeks) suggests maintainer bandwidth constraints.
- **Dissatisfaction signal**: #3343 marked `[stale]` after 8 days with no triage — indicates **insufficient issue grooming** for critical bugs.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3343](https://github.com/sipeed/picoclaw/issues/3343) — Runaway Telegram edit loop | 8 days | **Critical**: Causes API abuse, rate limits, potential bot bans. No fix, no assignee, marked stale. Should be **P0**. |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) — Private chat topics | 26 days (merged) | Merged but **not released** — users on packaged versions don’t benefit. |
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) — MCP hang fix | 15 days (merged) | Same — critical stability fix stuck in `main` without release. |
| [#3348](https://github.com/sipeed/picoclaw/pull/3348) — Czech i18n | 1 day | Low priority but easy win; risks stalling if not reviewed. |

**Recommendation**: Cut a patch release (e.g., `vX.Y.Z+1`) immediately bundling #3315 + #3337, and assign #3343 to a core maintainer for root-cause fix (timer cleanup on error paths in Telegram feedback animation).

---

*Digest generated from GitHub data as of 2026-08-30. Links point to live GitHub items.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-30

---

## 1. Today's Overview

NanoClaw showed **high maintenance velocity** on 2026-08-29 with 45 PRs updated (30 merged/closed) and 5 issues touched. The project is in an active **stabilization and tooling phase**: core-team members merged a wave of fixes spanning Signal integration bugs, Slack adapter regressions, CI/label automation, Docker build resilience, and environment-parsing consistency. No new release was cut. Three critical Signal-path issues (#3671, #3670, #3669) and a production-blocking SQLite readonly error (#3660) were filed today, indicating upstream dependency and data-layer risks that will likely drive the next patch cycle.

---

## 2. Releases

**No new releases published today.** The last release data is not included in the provided snapshot.

---

## 3. Project Progress — Merged / Closed PRs (2026-08-29)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3668](https://github.com/nanocoai/nanoclaw/pull/3668) | **Fix (core-team)** | Restored missing `slack-raw-text.ts` copy in `add-slack` skill — unblocked typecheck for Slack adapter installs | **High** — restores deployability of Slack skill |
| [#3667](https://github.com/nanocoai/nanoclaw/pull/3667) | **Fix (core-team)** | Copied `slack-raw-text.ts` alongside adapter that imports it | **High** — companion to #3668 |
| [#3666](https://github.com/nanocoai/nanoclaw/pull/3666) | **Feature (core-team)** | Recover pasted tables from raw Slack events via new `extractRawText` hook (depends on #3665) | **Medium** — improves Slack message fidelity |
| [#3665](https://github.com/nanocoai/nanoclaw/pull/3665) | **Feature (core-team)** | Added `extractRawText` hook to `chat-sdk-bridge` so adapters can recover content left in `message.raw` | **Medium** — extensibility for all chat channels |
| [#3664](https://github.com/nanocoai/nanoclaw/pull/3664) | **Feature (core-team)** | Added `NANOCLAW_DEFAULT_MODEL` & `NANOCLAW_FAST_MODE` env knobs for install-wide model default & fast serving tier | **Medium** — operator convenience / cost control |
| [#3663](https://github.com/nanocoai/nanoclaw/pull/3663) | **Chore (core-team)** | Replaced maintainer name placeholder ("Gavriel") with neutral name in examples, fixtures, init scripts | **Low** — polish |
| [#3662](https://github.com/nanocoai/nanoclaw/pull/3662) | **Fix (core-team)** | Pre-task script timeout now reports "timed out" instead of generic "Command failed" | **Low** — observability |
| [#3661](https://github.com/nanocoai/nanoclaw/pull/3661) | **Fix (core-team)** | Dockerfile now retries Bun install instead of failing image build on transient network error | **Medium** — CI reliability |
| [#3659](https://github.com/nanocoai/nanoclaw/pull/3659) | **Fix (core-team)** | Unified `.env` parsing: both readers now strip surrounding quotes consistently | **Medium** — eliminates config drift |
| [#3655](https://github.com/nanocoai/nanoclaw/pull/3655) | **Fix** | `ncl tasks update` rejects empty `--prompt` | **Low** — input validation |
| [#2954](https://github.com/nanocoai/nanoclaw/pull/2954) | **Docs (core-team)** | Added security reporting & triage policy | **Low** — governance |

**Net signal:** 10+ core-team PRs merged in a single day — the project is executing a focused **stability sprint** (Slack regression recovery, Signal path fixes queued, CI/label automation, Docker/environment hardening).

---

## 4. Community Hot Topics — Most Active Items

| Item | Type | Comments | 👍 | Why It Matters |
|------|------|----------|-----|----------------|
| [#3671](https://github.com/nanocoai/nanoclaw/issues/3671) | Issue | 0 | 0 | **Signal-cli 0.14.3 pins a session-hang bug** fixed in 0.14.7 — affects all new-contact flows silently |
| [#3670](https://github.com/nanocoai/nanoclaw/issues/3670) | Issue | 0 | 0 | **Dedicated-number Signal setup grants "owner" to bot account** — approval cards vanish into unwatched self-DM |
| [#3669](https://github.com/nanoclaw/pull/3669) | Issue | 0 | 0 | **`signal-auth` can't find `signal-cli` in `~/.local/bin` under non-login shells** — wizard falls back to QR incorrectly |
| [#3660](https://github.com/nanoclaw/issues/3660) | Issue | 0 | 0 | **Session DB readonly errors blocking ALL message delivery** — production outage since ~12h ago |
| [#3646](https://github.com/nanoclaw/pull/3646) | PR (open) | — | 0 | Makes host-sweep 30-min turn ceiling configurable (fixes #3643) |
| [#3648](https://github.com/nanoclaw/pull/3648) | PR (open) | — | 0 | **CI-04: PR template v2 with token parsing & managed-kind reconcile** — foundation for label automation |
| [#3647](https://github.com/nanoclaw/pull/3647) | PR (open) | — | 0 | **Auto `area/*` from paths + `kind/*` from PR type** — eliminates manual triage |
| [#3644](https://github.com/nanoclaw/pull/3644) | PR (open) | — | 0 | **Adds 4 GitHub issue forms** (bug, skill request, doc correction, security) + contact links |

**Underlying needs:**  
- **Signal integration is fragile** — three distinct bugs filed same day by same reporter (IT-Sage) covering version pin, auth-flow ownership, and PATH resolution.  
- **SQLite readonly corruption** (#3660) is a **P0 data-integrity risk** — no fix PR yet.  
- **CI/label automation** (#3647, #3648, #3644, #3651, #3657) is a coordinated push to **scale triage** as PR volume grows.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR? | Notes |
|----------|-------|--------|---------|-------|
| **P0 — Production Outage** | [#3660](https://github.com/nanoclaw/issues/3660) Session DB readonly — all outbound messages blocked | Open | **No** | Started ~12h ago; affects Discord & all channels. Root cause unknown (filesystem? locking? container restart?). **Urgent.** |
| **P1 — Silent Data Loss** | [#3671](https://github.com/nanoclaw/issues/3671) signal-cli 0.14.3 hangs indefinitely on new-contact session establishment | Open | **No** | Upstream fixed in 0.14.7. Pin must be bumped; `install-signal-cli.sh` is the vector. |
| **P1 — Broken Auth Flow** | [#3670](https://github.com/nanoclaw/issues/3670) Dedicated-number Signal setup assigns ownership to bot, not operator | Open | **No** | Approval cards go to bot self-DM — operator never sees them. Documented path is non-functional. |
| **P2 — Setup Regression** | [#3669](https://github.com/nanoclaw/issues/3669) `signal-auth` misses `signal-cli` in `~/.local/bin` under non-login shells | Open | **No** | Wizard incorrectly falls through to QR linking. PATH resolution needs login-shell awareness or explicit `SIGNAL_CLI_PATH`. |
| **P2 — Deploy Blocker (Resolved)** | [#3668](https://github.com/nanoclaw/pull/3668) Slack adapter missing `slack-raw-text.ts` import | **Closed** | **Yes** (#3668, #3667) | Typecheck failure on any `add-slack` install since 2026-08-29 18:45Z. Fixed same day. |
| **P3 — Observability** | [#3662](https://github.com/nanoclaw/pull/3662) Pre-task script timeout reported as generic "Command failed" | **Closed** | **Yes** (#3662) | Now says "timed out". Merged. |
| **P3 — Build Flakiness** | [#3661](https://github.com/nanoclaw/pull/3661) Bun install fails image build on transient network error | **Closed** | **Yes** (#3661) | Retry logic added. Merged. |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Configurable host-sweep ceiling** | [#3646](https://github.com/nanoclaw/pull/3646) (open PR) | **High** — PR ready, fixes #3643, simple flag |
| **PR template v2 + kind/area auto-labeling** | [#3648](https://github.com/nanoclaw/pull/3648), [#3647](https://github.com/nanoclaw/pull/3647) (open PRs) | **High** — core-team authored, foundational for scaling |
| **Issue forms (bug, skill, doc, security)** | [#3644](https://github.com/nanoclaw/pull/3644) (open PR) | **High** — pairs with PR template work |
| **Install-wide default model & fast tier** | [#3664](https://github.com/nanoclaw/pull/3664) (merged) | **Done** — `NANOCLAW_DEFAULT_MODEL`, `NANOCLAW_FAST_MODE` |
| **Slack raw-text recovery / pasted tables** | [#3665](https://github.com/nanoclaw/pull/3665), [#3666](https://github.com/nanoclaw/pull/3666) (merged) | **Done** — extensibility hook + Slack implementation |
| **Signal-cli version bump to 0.14.7+** | [#3671](https://github.com/nanoclaw/issues/3671) | **High** — P1 bug, trivial version pin change |
| **Dedicated-number Signal ownership fix** | [#3670](https://github.com/nanoclaw/issues/3670) | **Medium** — requires auth-flow redesign |
| **Non-login shell PATH fix for signal-cli** | [#3669](https://github.com/nanoclaw/issues/3669) | **Medium** — `cliPath()` logic or docs workaround |

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Signal integration is unreliable for new deployments** | Three issues filed same day (#3671, #3670, #3669) by experienced user (IT-Sage) detailing silent hangs, broken ownership, PATH misses | Operators cannot trust Signal channel; dedicated-number path documented but broken |
| **Production message delivery halted** | #3660: "Discord and other channels cannot send outbound messages" — SQLite readonly | **Complete outbound outage** for affected instances |
| **Slack skill install broken for ~hours** | #3668: typecheck failure on `add-slack` since 18:45Z | Anyone adding Slack skill today blocked; fixed same day |
| **Docker builds flaky on Bun install** | #3661 merged — transient network failures caused image build failures | CI/CD pipelines randomly red |
| **Env var quoting inconsistency** | #3669 merged — two parsers behaved differently | Subtle config bugs (e.g., `TZ="America/New_York"` parsed differently) |

**Positive signals:**  
- Core-team responsiveness: Slack regression fixed in **hours**, multiple infra fixes merged same day.  
- Active investment in **contributor experience** (templates, labels, issue forms) — lowering friction for future contributions.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#3660](https://github.com/nanoclaw/issues/3660) Session DB readonly | **Hours** (filed today) | **P0 outage** — no fix PR, no root cause identified | **Immediate triage**: check container volumes, SQLite locking, filesystem perms; consider emergency patch release |
| [#3671](https://github.com/nanoclaw/issues/3671) signal-cli 0.14.3 hang | **Hours** | Blocks all new Signal contacts silently | Bump `VERSION` in `install-signal-cli.sh` to 0.14.7+; test session establishment |
| [#3670](https://github.com/nanoclaw/issues/3670) Dedicated-number ownership | **Hours** | Documented alt path is broken; operators misled | Audit `signal-auth.ts` ownership logic; decide: fix or deprecate path with clear warning |
| [#3669](https://github.com/nanoclaw/issues/3669) Non-login shell PATH | **Hours** | Setup wizard gives false negative → QR fallback | Make `cliPath()` invoke login shell or read `SIGNAL_CLI_PATH` env; document |
| [#3646](https://github.com/nanoclaw/pull/3646) Host-sweep ceiling config | 1 day (open) | Simple, tested, fixes #3643 | Review & merge — low risk, high value for operators tuning sweep |
| [#3648](https://github.com/nanoclaw/pull/3648) PR template v2 | 1 day (open) | Foundation for all label automation | Core-team review; merges unlock #3647, #3657 |
| [#3647](https://github.com/nanoclaw/pull/3647) Auto area/kind labels | 1 day (open) | Eliminates manual triage on 45+ PRs/day | Depends on #3648; review together |
| [#95](https://github.com/nanoclaw/issues/95) Raspberry Pi 4B support | **6+ months** (closed today) | Long-standing hardware question; closed without resolution visible | If unresolved, reopen with ARM64 build/test status; if resolved, document |

---

**Bottom line:** NanoClaw is in a **high-velocity stabilization window** — core team is systematically clearing infra debt (CI, labels, Docker, env parsing) while **three Signal-path P1s and a P0 SQLite readonly** demand immediate attention before the next release. The PR template/label automation suite (#3647, #3648, #3644, #3657) signals intent to **scale contribution throughput** — a healthy leading indicator.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-30

---

## 1. Today's Overview

IronClaw shows **high engineering velocity** with 8 PRs updated and 3 issues active in the last 24 hours. The project is in a **stabilization and hardening phase** — no new releases, but significant progress on compaction economics, loop termination guarantees, developer-experience fixes (macOS pre-push), and telemetry foundations. Two epics dominate discussion: **context projection/compaction** (Issue #7824, 5 comments) and **agent lifecycle hooks** (Issue #7770, 4 comments), signaling architectural investment in token efficiency and extensibility. The merged PR #7899 delivers the automation pre-run failure notifications requested in Issue #7873, closing that loop.

---

## 2. Releases

**No new releases** in the last 24 hours. The project continues on its rolling-main development model; the nightly `Codebase Graph Refresh` workflow (PR #7988) keeps the agent’s internal knowledge graph current without a version cut.

---

## 3. Project Progress — Merged / Closed Today

| PR / Issue | Title | Type | Impact |
|------------|-------|------|--------|
| **[#7899](https://github.com/nearai/ironclaw/pull/7899)** (closed/merged) | `feat(notifications): publish automation pre-run failures` | Feature | Implements durable `RunFailed` Inbox notifications for automations that fail before run submission; stable identity from opaque fire reference; decoupled from external notification channels. Closes **#7873**. |
| **[#7873](https://github.com/nearai/ironclaw/issues/7873)** (closed) | Publish automation pre-run failure notifications | Issue | Requirement satisfied by #7899. |

**Net effect**: Automation observability improved — users now receive actionable, durable notifications for configuration/setup failures that previously silently disappeared.

---

## 4. Community Hot Topics

| Item | Activity | Core Need / Signal |
|------|----------|-------------------|
| **[#7824](https://github.com/nearai/ironclaw/issues/7824)** — *Context projection: Pi-style compaction barrier, structured summaries, overflow recovery* | **5 comments**, updated 2026-08-29 | **Token-cost crisis**: Full-history replay costs 4× baseline (227.7M vs 55.1M tokens, $10.31 vs $2.52 on PinchBench). Team is designing a **compaction barrier** (Pi-style), structured summaries, and overflow recovery to bound context without quality loss. High architectural stakes. |
| **[#7770](https://github.com/nearai/ironclaw/issues/7770)** — *Epic: hook the agent lifecycle (after-turn, before-turn, compaction, tool-result seams)* | **4 comments**, updated 2026-08-29 | **Extensibility demand**: Moving “when X happens, do Y” out of core engine into declarative hook registrations. Phased, independently landable. Signals push toward **plugin-style agent customization** without forks. |
| **[#7978](https://github.com/nearai/ironclaw/pull/7978)** — *fix(compaction): bound cumulative summarizer input* | Large PR, active review | Directly addresses #7824’s compaction economics. Bounds summarizer input across cumulative summary + delta, keeps full bodies behind injection/leak scans. **Critical path for token-cost reduction**. |

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Item | Description | Fix Status |
|----------|------|-------------|------------|
| **High** | **[#7977](https://github.com/nearai/ironclaw/pull/7977)** — *fix(loop): terminate on dominant repeated output, cap interactive wall clock* | Default loop family lacks non-progress termination since #7531 removed digest-based terminator. Production run `e3513a4e` ran **593 tool calls over 70 minutes** with no progress. | **PR open (XL, low risk)** — adds dominant-output detection + wall-clock cap. |
| **Medium** | **[#7990](https://github.com/nearai/ironclaw/pull/7990)** — *fix(tool-disclosure): unresolvable tool name ≠ encoding error* | Tool-disclosure bridge misclassifies unresolvable tool names as `FailureKind::InputEncode`, conflating distinct failure modes. | **PR open (M, low risk)** — separates failure kinds. |
| **Low** | **[#7989](https://github.com/nearai/ironclaw/pull/7989)** — *fix(coding): list_dir names the path it could not find* | `list_dir` on missing directory returns generic error without the path, hampering model recovery. | **PR open (S, low risk)** — surfaces the path. |
| **Low (DX)** | **[#7991](https://github.com/nearai/ironclaw/pull/7991)** — *fix(ci): pre-push gate cannot run on macOS* | Two independent fatal issues in test + CI script block macOS developers; hook gets bypassed. | **PR open (XS, low risk)** — unblocks Mac contributors. |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Compaction barrier & structured summaries** | #7824 (epic-scale), #7978 (active PR) | **Very High** — direct cost savings measured; PR #7978 is the first concrete slice. |
| **Agent lifecycle hooks (phased)** | #7770 (epic tracking) | **High** — phased design means incremental landings; first seams (after-turn, before-turn) likely next. |
| **Scoped tenant BI telemetry** | #7961 (XL PR, privacy-bounded) | **Medium-High** — adds hourly activity, model usage, failure, automation, lifecycle records; foundation for product analytics. |
| **Codebase knowledge graph auto-refresh** | #7988 (nightly CI) | **Ongoing** — operational, not user-facing; keeps agent context fresh. |

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence |
|------------------------|----------|
| **Token cost explosion** | #7824: “227.7M input tokens, $10.31 vs baseline 55.1M, $2.52” — users hit hard by full-history replay. |
| **Silent automation failures** | #7873 → #7899: users had no durable signal when automations failed pre-run; now fixed. |
| **Infinite non-progress loops** | #7977: production run stuck 70 min / 593 calls — users experience hangs without timeout. |
| **macOS developer friction** | #7991: pre-push hook fails on Mac, forcing bypass — degrades CI hygiene for Mac contributors. |
| **Opaque tool errors** | #7989, #7990: models get generic errors (“something went wrong”) instead of actionable paths/kinds. |

**Satisfaction signal**: Rapid closure of #7873 via #7899 shows responsive maintainers. Open epics (#7824, #7770) indicate users are pushing boundaries and expect architectural solutions.

---

## 8. Backlog Watch — Needing Maintainer Attention

| Item | Staleness / Risk | Why It Matters |
|------|------------------|----------------|
| **[#7824](https://github.com/nearai/ironclaw/issues/7824)** — Context projection epic | **8 days open**, 5 comments, no linked PR beyond #7978 slice | **Cost blocker** for any non-trivial workload. Needs phased PR plan & review bandwidth. |
| **[#7770](https://github.com/nearai/ironclaw/issues/7770)** — Lifecycle hooks epic | **10 days open**, 4 comments, no PRs yet | **Extensibility foundation**; delayed hooks = continued core-engine edits for customization. |
| **[#7977](https://github.com/nearai/ironclaw/pull/7977)** — Loop termination | **XL PR**, 2 days open, no review comments visible | **Production stability** — infinite loops are silent reliability killers. Needs prompt review. |
| **[#7961](https://github.com/nearai/ironclaw/pull/7961)** — Scoped tenant BI telemetry | **XL PR**, 3 days open, touches privacy/dependencies/docs | **Product analytics backbone**; privacy review & dependency audit required before merge. |

---

*Digest generated from GitHub data as of 2026-08-30. All links point to live GitHub items.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-30

## 1. Today's Overview
LobsterAI shows minimal active development today. In the last 24 hours, only 1 issue and 5 pull requests were updated — all flagged as `[stale]` and originally created on 2026-03-31 (~5 months ago). No new releases were published. The repository appears to be in a maintenance/backlog-clearing phase rather than active feature development. The stale bot likely triggered the "updated" timestamps without substantive new discussion.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
**No PRs merged or closed today.** All 5 open PRs remain in review limbo since March 2026. They represent a batch of UX polish and bug fixes that have not yet been integrated:
- **#1138**: Cowork session UX — tool error highlighting + jump-to-latest button
- **#1142**: Quick skill creation shortcut from Skills management page
- **#1143**: Bug fix — agent default icon persistence inconsistency (sidebar vs. My Agents page)
- **#1144**: Scheduled Tasks UX — show last run timestamp, add running state feedback
- **#1145**: Settings — team config template export/import (JSON with granular apply options)

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#1139** | Issue | 1 comment, 0 👍 | [Agent duplicate-name task record loss](https://github.com/netease-youdao/LobsterAI/issues/1139) |
| **#1138** | PR | 0 comments, 0 👍 | [Cowork: highlight tool errors + jump-to-latest](https://github.com/netease-youdao/LobsterAI/pull/1138) |
| **#1142** | PR | 0 comments, 0 👍 | [Skills: quick-create skill shortcut](https://github.com/netease-youdao/LobsterAI/pull/1142) |
| **#1143** | PR | 0 comments, 0 👍 | [Agent: fix default icon save inconsistency](https://github.com/netease-youdao/LobsterAI/pull/1143) |
| **#1144** | PR | 0 comments, 0 👍 | [Scheduled Tasks: last run time + running state](https://github.com/netease-youdao/LobsterAI/pull/1144) |
| **#1145** | PR | 0 comments, 0 👍 | [Settings: team config template export/import](https://github.com/netease-youdao/LobsterAI/pull/1145) |

**Analysis**: Zero reactions/comments on PRs suggest low community engagement or reviewer bandwidth. The sole issue (#1139) reveals a real workflow bug: creating a same-named agent after deletion breaks task-record loading until manual re-switch. This indicates users actively manage multiple agent iterations and expect seamless state continuity.

## 5. Bugs & Stability
| Severity | Item | Description | Fix PR? |
|----------|------|-------------|---------|
| **Medium** | [#1139](https://github.com/netease-youdao/LobsterAI/issues/1139) | After deleting an agent and creating a new one with the same name, the UI switches to the new agent but fails to load its task records. Requires switching away and back to recover. | No |
| **Low** | [#1143](https://github.com/netease-youdao/LobsterAI/pull/1143) | Agent creation with empty icon: sidebar shows 🦞 fallback, My Agents page shows 🤖 fallback — inconsistency due to `icon.trim() \|\| undefined` dropping empty string. | **Yes (#1143)** |

No crashes or regressions reported today.

## 6. Feature Requests & Roadmap Signals
The 5 stale PRs collectively signal the near-term roadmap:
1. **Cowork observability** (#1138) — error visibility & navigation for multi-agent sessions
2. **Skill authoring friction reduction** (#1142) — one-click skill creation flow
3. **Scheduled Tasks transparency** (#1144) — last-run timestamps, running-state feedback
4. **Team configuration portability** (#1145) — export/import app config as JSON templates (UI, model defaults, providers, cowork options, skills)

**Prediction**: If maintainers clear the backlog, the next release will bundle these UX polish items. The team-config template (#1145) is the most substantial — enabling workspace sharing — and may ship with a minor version bump.

## 7. User Feedback Summary
- **Pain point** (from #1139): Agent lifecycle operations (delete → recreate same name) break task-record continuity. Users expect immediate state consistency.
- **Use case implied**: Iterative agent development — delete old version, create new version with same name, continue conversation history review.
- **No explicit satisfaction/dissatisfaction signals** beyond the bug report. Zero reactions on PRs suggest either low visibility or that these are internal/contributor-driven improvements.

## 7. Backlog Watch — Stale PRs Needing Maintainer Attention
All 5 PRs have been open since **2026-03-31** (~150 days) with no review activity. Priority order for triage:

| PR | Area | Why It Matters |
|----|------|----------------|
| [#1145](https://github.com/netease-youdao/LobsterAI/pull/1145) | Settings / Team config | Highest impact — enables config portability across teams/instances; adds new IPC (`dialog:saveTextFile`) |
| [#1143](https://github.com/netease-youdao/LobsterAI/pull/1143) | Agent creation | Bug fix with clear root cause; trivial to verify & merge |
| [#1138](https://github.com/netease-youdao/LobsterAI/pull/1138) | Cowork UX | Improves debugging multi-agent runs; low risk, high visibility |
| [#1144](https://github.com/netease-youdao/LobsterAI/pull/1144) | Scheduled Tasks | Purely additive UX polish; no logic changes |
| [#1142](https://github.com/netease-youdao/LobsterAI/pull/1142) | Skills workflow | Nice-to-have shortcut; depends on `skill-creator` skill existing |

**Recommendation**: Maintainers should batch-review these 5 PRs this week. The bug fix (#1143) and team-config feature (#1145) are the strongest candidates for immediate merge.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-30

## 1. Today's Overview
Moltis showed minimal repository activity over the last 24 hours: one open bug report (#1246) and no pull-request or release activity. The single issue describes a regression where the sandbox environment fails to start after a new node is added, indicating a potential integration or state-management problem in the node-registration path. With zero merged PRs and no new releases, the codebase is effectively in a holding pattern while this blocker is triaged. Overall project velocity appears low for the day, and the open bug represents the sole actionable signal for maintainers.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
No pull requests were opened, merged, or closed today. Consequently, no features were advanced and no fixes were landed. The only movement is the filing of issue #1246, which has not yet been linked to a fix branch or PR.

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Link |
|------|------|----------|-----------|------|
| #1246 | Bug | 0 | 0 👍 | [moltis-org/moltis#1246](https://github.com/moltis-org/moltis/issues/1246) |

**Analysis**: The sole community touchpoint is a fresh bug report with no discussion yet. The lack of comments or reactions suggests either limited visibility or that the reporter (maop) is the only user currently hitting this sandbox regression. The underlying need is reliable sandbox provisioning after cluster topology changes—a core requirement for developers iterating on multi-node workflows.

## 5. Bugs & Stability
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **High** (blocking sandbox use) | [#1246](https://github.com/moltis-org/moltis/issues/1246) | Sandbox fails to start after a node is added; reporter on latest Moltis version. | No |

No other bugs, crashes, or regressions were reported today. The absence of a fix PR means the issue remains unassigned and untriaged.

## 6. Feature Requests & Roadmap Signals
No feature requests were opened or updated today. The only signal is implicit: the bug in #1246 hints that node-registration and sandbox-bootstrap logic may need hardening before any new multi-node features are shipped.

## 7. User Feedback Summary
- **Pain point**: Developers cannot spin up a sandbox after expanding the cluster with a new node, halting local integration testing.
- **Use case**: Adding a node to an existing Moltis deployment, then attempting to launch the sandbox for validation.
- **Sentiment**: Neutral/technical; the reporter followed the preflight checklist and provided a clean reproduction context, but no workaround or dissatisfaction beyond the blocker is expressed.

## 8. Backlog Watch
No long-unanswered issues or PRs surfaced in today’s data. The only candidate for maintainer attention is the freshly filed #1246, which should be triaged promptly given its high severity for sandbox-dependent workflows.

---

*Data sourced from GitHub API for moltis-org/moltis covering 2026-08-29 → 2026-08-30. Links point to live GitHub items.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-30

## 1. Today's Overview
CoPaw (QwenPaw) shows **high community engagement** with 10 issues and 7 PRs updated in the last 24 hours, though **zero PRs were merged** — indicating a review bottleneck or maintainer capacity constraint. The project is in active pre-2.2.0 development, with the flagship **QwenPaw Hub (multi-tenant edition)** driving discussion (#7318, 14 comments). Bug reports reveal critical stability issues in MCP credential handling (#7301) and Ark Responses API session persistence (#7402), both unpatched. Feature work clusters around UX polish (chat scroll lock, tool-call toggles, theming) and enterprise readiness (DingTalk card layout, PowerContext memory backend).

## 2. Releases
**No new releases** in the last 24 hours. The upcoming **v2.2.0** will introduce QwenPaw Hub (multi-tenant) per #7318.

## 3. Project Progress
**No PRs merged or closed today.** All 7 active PRs remain open:
| PR | Type | Status | Key Change |
|----|------|--------|------------|
| [#7403](https://github.com/agentscope-ai/QwenPaw/pull/7403) | Docs | Open | README update (first-time contributor) |
| [#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401) | Bugfix | Open | Fix Windows ACP agent stall during plugin bootstrap |
| [#7356](https://github.com/agentscope-ai/QwenPaw/pull/7356) | Feature | Open | Chat scroll lock — pause auto-follow during streaming |
| [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357) | Feature | Open | Tool-call visibility toggle in chat UI |
| [#7220](https://github.com/agentscope-ai/QwenPaw/pull/7220) | Bugfix | Open | Reject oversized image dimensions (pixel limits) |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | Feature | Under Review | Configurable MCP tool-call timeout (default 300s) |
| [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | Feature | Under Review | PowerContext long-term memory backend (pluggable) |

## 4. Community Hot Topics
| Item | Activity | Signal |
|------|----------|--------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) QwenPaw Hub 2.2.0 discussion | **14 comments, 1 👍** | **Strong demand for team/multi-tenant features**; users want RBAC, shared skills, admin console, SSO. Roadmap anchor for 2.2.0. |
| [#7301](https://github.com/agentscope-ai/QwenPaw/issues/7301) MCP legacy migration credential bug | 3 comments | **Blocker for MCP users** — every new session fails with `CredentialNotFoundError`. No fix PR yet. |
| [#7402](https://github.com/agentscope-ai/QwenPaw/issues/7402) Ark Responses API empty text block poisoning | 1 comment | **Data-corruption bug**: empty `output_text` blocks in history cause 400 on every subsequent request. Affects Volcengine Ark users. |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) MCP tool-call timeout | Under Review, 0 comments but linked to #6724, #3997 | **Long-standing request** for configurable MCP timeouts; critical for slow tool providers. |

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Impact | Fix PR? |
|----------|-------|--------|---------|
| **Critical** | [#7301](https://github.com/agentscope-ai/QwenPaw/issues/7301) MCP legacy migration leaves dangling credential ref | **All new sessions fail** with `CredentialNotFoundError` for empty-env MCP clients | ❌ No |
| **Critical** | [#7402](https://github.com/agentscope-ai/QwenPaw/issues/7402) Empty `output_text` blocks poison Ark Responses API history | **Every subsequent request returns 400** — session unusable until history cleared | ❌ No |
| **High** | [#7220](https://github.com/agentscope-ai/QwenPaw/pull/7220) Oversized image dimensions bypass byte-limit check | App freezes on large-dimension images (e.g., 10240×6400) despite <2 MiB | ✅ PR #7220 (open) |
| **Medium** | [#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401) Windows ACP agent stalls during bootstrap | Plugin/MCP init blocks event loop for minutes on Windows | ✅ PR #7401 (open) |
| **Low** | [#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770) Chrome tab lifetime not configurable | UX limitation for browser automation; **closed** (may be superseded) | — |

## 6. Feature Requests & Roadmap Signals
| Request | Issue/PR | Likelihood for 2.2.0 | Rationale |
|---------|----------|----------------------|-----------|
| **QwenPaw Hub (multi-tenant)** | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | **High** | Explicitly targeted for 2.2.0; 14-comment discussion shaping scope |
| **Plan Mode** (pre-execution plan view) | [#7405](https://github.com/agentscope-ai/QwenPaw/issues/7405) | Medium | User misses explicit planning step; snapshots insufficient |
| **Official theming** (accent, font, spacing) | [#7406](https://github.com/agentscope-ai/QwenPaw/issues/7406) | Medium | No config/settings/CSS injection; users edit `.app` bundles |
| **`/btw` side-question command** | [#7398](https://github.com/agentscope-ai/QwenPaw/issues/7398) | Medium | Mirrors Claude Code v2.1.72; low implementation cost |
| **DingTalk `card_auto_layout` in Console** | [#7404](https://github.com/agentscope-ai/QwenPaw/issues/7404) | High | Already implemented (#2238), just unexposed — quick win |
| **PowerContext long-term memory** | [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | Medium | Under review; pluggable backend aligns with enterprise needs |
| **Chat scroll lock / tool-call toggle** | [#7356](https://github.com/agentscope-ai/QwenPaw/pull/7356), [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357) | High | UX polish PRs ready; improve daily usability |

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **MCP credential migration broken** | #7301: "every new session fails with CredentialNotFoundError" | 😡 Frustrated — blocks core workflow |
| **Ark API sessions corrupted by empty text blocks** | #7402: "poison every subsequent request" | 😡 Frustrated — data integrity issue |
| **No theming/customization** | #7406: "editing index.html inside .app bundle — every update breaks it" | 😐 Annoyed — workaround fragile |
| **Chat auto-scroll prevents reading during streaming** | #7356: "viewport keeps moving even when user intentionally scrolls away" | 😐 Annoyed — UX friction |
| **Tool-call cards clutter chat history** | #7357: "add noise during normal chat reading" | 😐 Annoyed — readability |
| **Plan mode removed/replaced** | #7405: "plan mode was great to let me see what the model planned to do" | 😐 Missed feature |
| **Windows ACP agent hangs on startup** | #7401: "hang for minutes or fail to respond at all" | 😡 Blocked on Windows |

**Positive signals**: Active discussion on Hub (#7318) shows community investment; first-time contributors submitting PRs (#7403, #7220, #7080).

## 8. Backlog Watch — Stalled Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) Configurable MCP tool-call timeout | **20 days** (opened 2026-08-10) | **Under Review** but stale; addresses #6724, #3997 — critical for production MCP use |
| [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) PowerContext memory backend | **13 days** (opened 2026-08-17) | **Under Review**; enterprise-grade long-term memory, pluggable architecture |
| [#7220](https://github.com/agentscope-ai/QwenPaw/pull/7220) Reject oversized image dimensions | **7 days** (opened 2026-08-23) | Fixes freeze on valid-but-large images; first-time contributor |
| [#7301](https://github.com/agentscope-ai/QwenPaw/issues/7301) MCP credential migration bug | **4 days** (opened 2026-08-26) | **Critical, no PR** — blocks all new MCP sessions for affected users |
| [#7402](https://github.com/agentscope-ai/QwenPaw/issues/7402) Ark API empty-text poisoning | **1 day** (opened 2026-08-29) | **Critical, no PR** — corrupts session history irreversibly |

---

**Project Health Indicator**: 🟡 **Caution** — High feature velocity and community engagement, but **zero merges in 24h** and **two critical unfixed bugs** (#7301, #7402) suggest review bandwidth is the primary bottleneck. Prioritize merging #6874, #7080, #7220, #7356, #7357, #7401 and addressing the two critical bugs before 2.2.0.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-30

## 1. Today's Overview
ZeroClaw shows **high engineering velocity** with 68 total updates (18 issues, 50 PRs) in the last 24 hours, though only 2 PRs were merged/closed — indicating active development and review cycles rather than completion. The project is in a **stabilization phase for v0.8.5** (tracker #9459, intake frozen since Aug 4) while simultaneously advancing major architectural work: A2A protocol interoperability (#3566), persistent memory parity (#8891), granular sandbox policies (#6996), and an opt-in household edge mesh (#10360). Security hardening dominates current PR activity (CodeQL upgrades, Git shell policy, skill HTTP egress binding, memory permission fixes). No new releases were cut today.

## 2. Releases
**No new releases published today.** The v0.8.5 stabilization line (#9459) targets a weekly cut through August 30; the milestone page remains the source of truth for included items.

## 3. Project Progress (Merged/Closed in Last 24h)
Only **2 PRs merged/closed** — both appear to be automated CI/dependency issues rather than feature work:
- **#10427** (closed): Advisory scan failure for yanked crate `chacha20 0.10.0` — likely resolved via `cargo update` in a follow-up.
- **#10447** (open but created today): Same advisory scan failure recurring on 2026-08-29; indicates the yanked crate persists in `Cargo.lock` and needs a proper version bump.

**Closed issues (4)** reflect active bug resolution:
- **#10429** (P1): Deepgram/OpenAI transcription silently drops language hint — non-English voice notes return empty transcripts (Telegram channel).
- **#8309** (P2): Orphaned SkillForge engine removal while preserving manifest provenance compatibility.
- **#10237** (P2): Telegram reply-threads fragment conversation memory into per-thread history buckets.
- **#10427** (P1): CI advisory scan failure (yanked crate).

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Type | Comments | 👍 | Key Signal |
|------|------|----------|-----|------------|
| **[#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)** A2A protocol interoperability tracker | Issue (tracker) | 10 | 7 | **Highest community interest** — native A2A support for cross-agent communication (ZeroClaw, NanoClaw, OpenClaw, LF A2A v0.3.0+). |
| **[#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)** RFC: Granular sandbox policy | Issue (RFC) | 16 | 0 | **Deep technical debate** (16 comments) on unifying application-layer and OS-level sandbox backends (Bubblewrap, Landlock, Seatbelt). |
| **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** Maintainer decision queue for RFCs | Issue (tracker) | 14 | 0 | **Process bottleneck** — central queue for RFC/design decisions needing maintainer attention. |
| **[#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)** Persistent memory parity tracker | Issue (tracker) | 9 | 0 | **Multi-PR rollout coordination** — 7 open items (4 issues, 3 PRs) to bring cross-session memory to peer parity. |
| **[#10348](https://github.com/zeroclaw-labs/zeroclaw/pull/10348)** ci(codeql): align init and analyze on v4 | PR | — | 0 | **Security infra** — CodeQL v4 migration, manual run passed, CI gate passed. |
| **[#10350](https://github.com/zeroclaw-labs/zeroclaw/pull/10350)** ci(tests): measure affected Windows tests | PR | — | 0 | **Platform expansion** — advisory Windows test measurement (not yet required). |

**Underlying needs**: Contributors and users are pushing for **interoperability (A2A)**, **security completeness (sandbox unification)**, and **decision throughput (maintainer queue)**. The maintainer decision tracker (#8692) suggests RFC backlog pressure.

## 5. Bugs & Stability (Reported Today, Ranked by Severity)
| Severity | Issue | Component | Status | Fix PR |
|----------|-------|-----------|--------|--------|
| **S1 — Workflow Blocked** | **[#10063](https://github.com/zeroclaw-labs/zeroclaw/issues/10063)** Anthropic-backed compatible gateways reject `image_url` blocks inside tool results | Provider (compatible) | Open, accepted | **[#10448](https://github.com/zeroclaw-labs/zeroclaw/pull/10448)** (open) adds `tool_result_image_policy` |
| **S2 — Degraded Behavior** | **[#8539](https://github.com/zeroclaw-labs/zeroclaw/issues/8539)** `AgentEnd` event missing `cost_usd`; channel path never emits `AgentEnd` | Channel, Observability | Open, no-stale | No PR yet |
| **S2 — Degraded Behavior** | **[#10432](https://github.com/zeroclaw-labs/zeroclaw/issues/10432)** ElevenLabs TTS API key header not marked sensitive (leaks in logs) | Channel, Security | Open, accepted | No PR yet |
| **S2 — Degraded Behavior** | **[#10437](https://github.com/zeroclaw-labs/zeroclaw/issues/10437)** ZeroCode TUI inserts SGR mouse-wheel reports into composer while scrolling | ZeroCode/TUI | Open, in-progress | **[#10440](https://github.com/zeroclaw-labs/zeroclaw/pull/10440)** (open) reconstructs split SGR input |
| **Medium** | **[#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429)** Deepgram/OpenAI transcription drops language hint → empty Italian transcripts (Telegram) | Provider, Channel:Telegram | **Closed** | Fix likely in provider adapters |
| **Medium** | **[#10237](https://github.com/zeroclaw-labs/zeroclaw/issues/10237)** Telegram reply-threads fragment conversation memory per-thread | Channel:Telegram, Memory | **Closed** | Fix likely in `conversation_history_key` |

**Recurring instability**: Yanked crate `chacha20 0.10.0` triggering advisory scan failures (#10427, #10447) — indicates dependency hygiene gap.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version (v0.8.5/v0.9) |
|--------|--------|------------------------------------------|
| **A2A Protocol Native Support** | [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) (tracker, 7👍, 10 comments) | **High** — active tracker, multiple PRs implied, LF-standard protocol |
| **Persistent Memory Parity** | [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) (tracker, 7 open items) | **High** — multi-PR rollout underway, category-scoped cross-agent grants PR [#10252](https://github.com/zeroclaw-labs/zeroclaw/pull/10252) open |
| **Granular Sandbox Policy (RFC)** | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) (16 comments, needs maintainer review) | **Medium** — RFC stage, high risk, requires OS-backend unification |
| **Gemini Live Speech-to-Speech Broker Channel** | [#10406](https://github.com/zeroclaw-labs/zeroclaw/issues/10406) (accepted #8780, implementation tracker) | **High** — policy accepted, implementation batch coordinated |
| **SSE Streaming for `POST /webhook`** | [#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419) (feature, P2, high risk) | **Medium** — host Path A workers need streaming tokens |
| **Household Edge Mesh (RFC)** | [#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360) (opt-in, pull workers, signed receipts) | **Low-Medium** — RFC, P3, high risk, long-horizon |
| **Skill HTTP Egress Binding** | [#10369](https://github.com/zeroclaw-labs/zeroclaw/pull/10369) (PR open, security hardening) | **High** — PR active, bounds skill HTTP tools (1 MiB, no proxies/redirects) |

**Prediction**: v0.8.5 will likely include **Gemini Live broker channel**, **Skill HTTP egress hardening**, **category-scoped memory grants**, and **A2A protocol groundwork**. Full A2A and persistent memory parity may slip to v0.9.

## 7. User Feedback Summary (Pain Points & Use Cases)
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Non-English voice notes silently fail** | [#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429) — Italian transcripts empty, dropped silently | **High** — breaks multilingual voice workflows on Telegram |
| **Conversation memory fragmentation** | [#10237](https://github.com/zeroclaw-labs/zeroclaw/issues/10237) — Telegram reply threads split history buckets | **Medium** — loses multi-turn context in threaded chats |
| **Cost tracking broken in observability** | [#8539](https://github.com/zeroclaw-labs/zeroclaw/issues/8539) — `AgentEnd` missing `cost_usd`, channel path emits nothing | **Medium** — operators cannot monitor spend per turn |
| **TUI scrolling injects garbage** | [#10437](https://github.com/zeroclaw-labs/zeroclaw/issues/10437) — SGR mouse-wheel reports appear in composer | **Medium** — degrades ZeroCode interactive experience |
| **API key leakage in logs** | [#10432](https://github.com/zeroclaw-labs/zeroclaw/issues/10432) — ElevenLabs `xi-api-key` not marked sensitive | **High (security)** — secrets exposure in request/response logs |
| **Image tool results rejected by compatible gateways** | [#10063](https://github.com/zeroclaw-labs/zeroclaw/issues/10063) — Anthropic-backed gateways fail on tool-result images | **High** — blocks multimodal tool use on OpenAI-compatible endpoints |

**Use cases emerging**: Multi-agent households (edge mesh), cross-agent memory sharing, A2A interoperability, hosted webhook workers needing SSE streaming, multimodal tool results via compatible providers.

## 8. Backlog Watch (Long-Unanswered, Needs Maintainer Attention)
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| **[#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)** RFC: Granular sandbox policy | Since **2026-05-28** (94 days) | Open, in-progress, needs-maintainer-review, high risk | **Core security architecture** — unifies two drifted sandbox layers; 16 comments show complexity; blocks consistent isolation guarantees. |
| **[#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)** A2A protocol interoperability tracker | Since **2026-03-15** (168 days) | Open, accepted, high risk | **Strategic interoperability** — 7👍, 10 comments; enables agent-to-agent ecosystem; tracker coordinates multi-PR work. |
| **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** Maintainer decision queue | Since **2026-07-04** (57 days) | Open, 14 comments | **Process health** — central decision bottleneck; if stale, RFCs/design issues stall. |
| **[#9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678)** fix(config): harden Git shell policy arguments | Since **2026-08-02** (28 days) | Open, needs-author-action, needs-maintainer-review, high risk, XL | **Security hardening** — normalizes command words at policy boundary; prevents injection/escapes; XL size needs review bandwidth. |
| **[#10252](https://github.com/zeroclaw-labs/zeroclaw/pull/10252)** feat(memory): category-scoped cross-agent grants | Since **2026-08-22** (8 days) | Open, needs-maintainer-review, high risk, XL | **Memory architecture** — typed cross-agent grants with category scopes; foundational for persistent memory parity. |
| **[#10091](https://github.com/zeroclaw-labs/zeroclaw/pull/10091)** fix(memory): harden response cache storage permissions | Since **2026-08-18** (12 days) | Open, needs-maintainer-review, do-not-merge | **Security hygiene** — gives response cache owner-only file perms (like audit DB); small but security-relevant. |
| **[#10094](https://github.com/zeroclaw-labs/zeroclaw/pull/10094)** ci(memory): require PostgreSQL backend tests | Since **2026-08-18** (12 days) | Open, needs-author-action, follow-up, high risk | **CI reliability** — makes PG memory tests required on every PR/push; prevents backend regressions. |

**Maintainer bandwidth alert**: 7 items explicitly tagged `needs-maintainer-review` (including 3 XL PRs) plus the decision queue tracker (#8692) suggest **review capacity is a constraint**. The v0.8.5 freeze (Aug 4) may be forcing prioritization, but post-freeze these need resolution.

---

**Project Health Indicators**
- ✅ **Velocity**: High (68 updates/24h)
- ✅ **Security Focus**: Strong (multiple hardening PRs, RFCs, advisory scans)
- ⚠️ **Merge Throughput**: Low (2/50 PRs merged) — review bottleneck
- ⚠️ **Dependency Hygiene**: Recurring yanked crate (`chacha20`)
- ✅ **Roadmap Clarity**: Trackers for v0.8.5, A2A, memory, sandbox, Gemini Live
- 🔴 **Maintainer Review Queue**: 7+ items blocked on review, including XL security PRs

**Next Watch**: v0.8.5 cut (this week), A2A protocol PRs landing, sandbox RFC resolution, maintainer decision queue throughput.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*