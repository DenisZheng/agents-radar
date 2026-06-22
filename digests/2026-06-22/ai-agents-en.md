# OpenClaw Ecosystem Digest 2026-06-22

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-22 00:43 UTC

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

# OpenClaw Project Digest — 2026-06-22

---

## 1. Today's Overview

OpenClaw remains in a period of exceptionally high activity, with **500 issues** and **500 PRs** updated in the last 24 hours — a volume that signals both a large, engaged user base and a project under significant maintenance pressure. Two new releases shipped today: **v2026.6.9** (stable) and **v2026.6.10-beta.1**, both focused on session-state reliability and Telegram delivery improvements. Despite the release cadence, the open issue count (478) and open PR count (479) remain very high, with many items carrying `clawsweeper:needs-product-decision` and `clawsweeper:needs-maintainer-review` labels — indicating a bottleneck in maintainer bandwidth rather than a lack of community contribution. The project is clearly in active development on core infrastructure (session management, compaction, subagent orchestration) while simultaneously fielding a wave of regressions from recent releases.

---

## 2. Releases

### v2026.6.9 (Stable)
**Focus: Richer Telegram delivery**

- Telegram channel now sends **rich HTML**, preserves rich markdown and sticker paths, renders progress drafts and command output more faithfully, normalizes HTML tables safely, and keeps mentions and spooled handlers on the correct delivery path. ([#93286](https://github.com/openclaw/openclaw/issues/93286))

### v2026.6.10-beta.1
**Focus: More reliable agent turns and session state**

- Preserves **pending subagent completion announcements**, keeps chat history transcripts non-empty, maintains media index alignment, restarts dormant follow-up drains, and resolves compaction model aliases consistently. ([#94](https://github.com/openclaw/openclaw/issues/94))

**Migration notes:** No breaking changes announced. However, users on v2026.6.9 should note the memory store relocation issue ([#95495](https://github.com/openclaw/openclaw/issues/95495)) — upgrading silently moves the memory vector store path with no migration warning, forcing a full re-embed. Plan for re-embedding time if upgrading across this boundary.

---

## 3. Project Progress

Only **21 PRs merged/closed** out of 500 updated, suggesting a significant review backlog. Notable closed/merged items:

- **PR #95618** — *Fix retry success runtime state reconciliation* ([link](https://github.com/openclaw/openclaw/pull/95618)): Addresses a race condition where successful final handoffs after transient errors could be overwritten by stale terminal projections, causing incorrect session state.

Several large, high-impact PRs remain open and awaiting review:
- **PR #95604** — *feat(discord): show subagent progress* ([link](https://github.com/openclaw/openclaw/pull/95604)): Would give Discord users visible feedback during long-running subagent turns.
- **PR #78857** — *perf(agents): trim agent tool helper queues* ([link](https://github.com/openclaw/openclaw/pull/78857)): Performance hot-path optimization replacing `shift()` array chains across Slack, Telegram, and OpenAI WebSocket streaming.
- **PR #78226** — *fix: Node allowlist writeback can restore revoked exec approvals* ([link](https://github.com/openclaw/openclaw/pull/78226)): Security-critical race fix for exec approval revocation.

---

## 4. Community Hot Topics

The most-commented issues reveal a clear pattern: **session-state reliability and message delivery correctness** are the dominant pain points.

| Issue | Comments | Signal |
|---|---|---|
| [#86538](https://github.com/openclaw/openclaw/issues/86538) Session write-lock timeouts block subagent delivery lanes | 12 | Core concurrency bug — write-lock contention cascades into delivery failures across main, cron-nested, and subagent lanes |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) Agent repeats identical replies 2-10x on Telegram after 5.20 update | 10 | Regression in Telegram idempotency; partially fixed in 5.22 but not resolved |
| [#90354](https://github.com/openclaw/openclaw/issues/90354) Add bounded/validated append semantics for pre-compaction memory flush | 8 | Feature request for guardrails on memory flush size and validation |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) 180s compaction timeout fails legitimately-long compactions every turn | 8 | Timeout lowered from 900s→180s in #91361 breaks slow/local providers |
| [#92460](https://github.com/openclaw/openclaw/issues/92460) Isolated cron completion announcer drops explicit delivery.channel | 8 | Cron announce path ignores explicitly configured channel |

**Underlying needs analysis:** The community is hitting fundamental reliability limits in OpenClaw's session management layer. The top issues all trace back to **transient state not being preserved across async boundaries** — subagent completions lost when requester sessions are inactive, compaction timeouts that don't account for provider latency, and delivery channels that aren't respected through fallback paths. Users need the system to be more resilient to timing variations and session lifecycle transitions, not just functionally correct in the happy path.

---

## 5. Bugs & Stability

### 🔴 Critical / P1 — Active Regressions

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| [#95495](https://github.com/openclaw/openclaw/issues/95495) | 🔴 Data loss | v2026.6.9 silently relocates memory store, forces full re-embed of 1499 files with no warning | None yet |
| [#95248](https://github.com/openclaw/openclaw/issues/95248) | 🔴 Crash loop | `release_lane` is a no-op when claim held by live worker; Telegram inbound events block until gateway restart | None yet |
| [#93375](https://github.com/openclaw/openclaw/issues/93375) | 🔴 Crash loop | Telegram polling enters silent crash loop after network timeout; health monitor restarts fail identically | None yet |
| [#90325](https://github.com/openclaw/openclaw/issues/90325) | 🔴 Regression | Matrix channel dispatch broken in v2026.6.1 — TypeError on every inbound message | None yet |
| [#92057](https://github.com/openclaw/openclaw/issues/92057) | 🔴 Performance | Gateway becomes slow/times out under multi-session/multi-agent load | None yet |

### 🟠 High / P1 — Core Functionality Broken

| Issue | Description | Fix PR? |
|---|---|---|
| [#92415](https://github.com/openclaw/openclaw/issues/92415) | `AgentSession.this.model` never refreshed after `/model` switch — affects contextWindow, reasoning, thinkingLevelMap | None yet |
| [#92076](https://github.com/openclaw/openclaw/issues/92076) | Subagent completion delivery fails when requester run is inactive and transcript is locked | None yet |
| [#92433](https://github.com/openclaw/openclaw/issues/92433) | Subagent completion silently dropped when announce steers into requester run that ends before processing | None yet |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | Isolated cron consistently fails with "LLM request failed" — model requests never reach provider | None yet |
| [#91931](https://github.com/openclaw/openclaw/issues/91931) | Preseeded SOUL.md/IDENTITY.md causes OpenClaw to auto-complete bootstrap and delete BOOTSTRAP.md before first run | None yet |

### 🟡 Medium / P2 — Degraded Experience

| Issue | Description |
|---|---|
| [#91223](https://github.com/openclaw/openclaw/issues/91223) | Active memory injection breaks prompt cache hit rate (99.9% → 22%) |
| [#90711](https://github.com/openclaw/openclaw/issues/90711) | launchd plist `StandardErrorPath` hardcoded to `/dev/null`, hides all gateway stderr |
| [#92582](https://github.com/openclaw/openclaw/issues/92582) | `openclaw doctor` falsely warns local memory embeddings not ready |
| [#92094](https://github.com/openclaw/openclaw/issues/92094) | `message` tool `action=send` returns "unsupported channel: telegram" |

---

## 6. Feature Requests & Roadmap Signals

**Likely candidates for upcoming releases based on issue labels, linked PRs, and maintainer activity:**

1. **Subagent progress visibility on Discord** — PR [#95604](https://github.com/openclaw/openclaw/pull/95604) is open and implements this directly. High community demand given multiple subagent delivery issues.

2. **Bounded/validated memory flush semantics** — [#90354](https://github.com/openclaw/openclaw/issues/90354) (8 comments, feature request). The pre-compaction memory flush currently has no guardrails on append size or post-write validation. This is a natural companion to the compaction reliability work in v2026.6.10-beta.1.

3. **Topic-session families** — [#90916](https://github.com/openclaw/openclaw/issues/90916) (7 comments). One assistant with multiple named topic lanes sharing durable memory. This is a significant architectural feature that would address context pollution across conversations.

4. **Kubernetes documentation overhaul** — [#91455](https://github.com/openclaw/openclaw/issues/91455) (7 comments, P3). The current docs are described as "awkward." Low engineering effort, high community goodwill.

5. **Configurable compaction timeout** — [#92043](https://github.com/openclaw/openclaw/issues/92043) (8 comments). The 180s default is breaking users with slow/local providers. A config override is a straightforward fix.

6. **Dreaming language localization** — PR [#95620](https://github.com/openclaw/openclaw/pull/95620) already open, adding `dreaming.language` config option. Small, self-contained, likely to merge quickly.

---

## 7. User Feedback Summary

**Dominant pain points:**

- **Silent failures and data loss** are the most damaging category. Users report memory stores relocating without warning ([#95495](https://github.com/openclaw/openclaw/issues/95495)), subagent completions being silently dropped ([#92433](https://github.com/openclaw/openclaw/issues/92433)), and delivery recovery reporting "0 recovered" after gateway restarts ([#91212](https://github.com/openclaw/openclaw/issues/91212)). The common thread: **failures are invisible until the user notices missing output**.

- **Telegram is the most problematic channel** by volume of issues — duplicate replies ([#86519](https://github.com/openclaw/openclaw/issues/86519)), silent crash loops ([#93375](https://github.com/openclaw/openclaw/issues/93375)), stuck lane claims ([#95248](https://github.com/openclaw/openclaw/issues/95248)), and message tool failures ([#92094](https://github.com/openclaw/openclaw/issues/92094)). The v2026.6.9 Telegram improvements are a direct response, but the volume of open Telegram issues suggests deeper architectural issues remain.

- **Cron/isolated session reliability** is a recurring theme. Multiple users report isolated cron jobs that never successfully call the LLM ([#91363](https://github.com/openclaw/openclaw/issues/91363)), completion announcers that drop delivery channels ([#92460](https://github.com/openclaw/openclaw/issues/92460)), and subagent orchestration that fails because the orchestrator terminates before collecting results ([#92369](https://github.com/openclaw/openclaw/issues/92369)).

- **Performance under load** is a growing concern. Users with many sessions report gateway slowdowns and timeouts ([#92057](https://github.com/openclaw/openclaw/issues/92057)), and the active-memory plugin's circuit breaker is too aggressive ([#90082](https://github.com/openclaw/openclaw/issues/90082)).

- **Positive signal:** Users are actively contributing PRs (500 updated in 24h), and the project is shipping releases at a steady cadence. The community is engaged and willing to do the work — the bottleneck is clearly in review/merge capacity.

---

## 8. Backlog Watch

These important items have been open for extended periods without resolution and carry high community impact:

| Issue | Age | Why It Matters |
|---|---|---|
| [#86538](https://github.com/openclaw/openclaw/issues/86538) Session write-lock timeouts block subagent delivery | 28 days | 12 comments, P1, diamond lobster — core concurrency issue with no fix PR |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) Telegram duplicate replies regression | 28 days | 10 comments, P1 — partially mitigated but not resolved; affects all Telegram users |
| [#86214](https://github.com/openclaw/openclaw/issues/86214) Codex app-server client closes mid-turn with large logs | 29 days | 7 comments, P1 — data loss during image/tool requests |
| [#80176](https://github.com/openclaw/openclaw/issues/80176) JSONL session-replay harness (Codex×Pi parity Phase 5) | 43 days | Tracking issue for testing infrastructure; blocked on Phase 1 |
| [#67915](https://github.com/openclaw/openclaw/issues/67915) Local assistant attachments shown as "Unavailable" | 66 days | P2, stale-labeled — correct config being rejected by path validation |
| [#90325](https://github.com/openclaw/openclaw/issues/90325) Matrix channel dispatch broken in v2026.6.1 | 18 days | P1 regression, 7 comments — **completely broken channel with no fix PR** |
| [#91455](https://github.com/openclaw/openclaw/issues/91455) Kubernetes documentation update | 14 days | P3 but 7 comments — low effort, high goodwill, no maintainer response |

**PRs needing maintainer attention:**

| PR | Age | Why It Matters |
|---|---|---|
| [#78226](https://github.com/openclaw/openclaw/pull/78226) Node allowlist writeback race (security) | 47 days | Security-critical: revoked exec approvals can be restored by race condition |
| [#67080](https://github.com/openclaw/openclaw/pull/67080) Narrow gateway route loads from manifests | 38 days | P1, affects plugin architecture scalability |
| [#68986](https://github.com/openclaw/openclaw/pull/68986) Normalize visible assistant output before delivery | 34 days | Fixes Gemma leaking internal text into Discord; has regression tests |
| [#94299](https://github.com/openclaw/openclaw/pull/94299) Keep root memory in bootstrap context | 5 days | Fixes Codex suppressing MEMORY.md; ready for author follow-up |

---

*Data source: OpenClaw GitHub (github.com/openclaw/openclaw), snapshot 2026-06-22. Issue/PR counts reflect items updated in the last 24 hours.*

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report — 2026-06-22

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape in mid-2026 is characterized by **high fragmentation and rapid parallel iteration** across at least 12 active projects. The ecosystem is coalescing around a common architecture — provider-agnostic LLM routing, multi-channel messaging, session management, and plugin/skill systems — but each project occupies a distinct niche in terms of deployment target, user persona, and technical philosophy. **OpenClaw** serves as the de facto reference implementation with the largest community by volume, while projects like **PicoClaw** (embedded/IoT), **NanoClaw** (container-first security), and **ZeptoClaw** (binary-size-constrained) represent deliberate trade-offs away from OpenClaw's generality. The overall trajectory is toward production-grade reliability, with session durability, multi-agent orchestration, and mobile UX emerging as the next competitive battlegrounds.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Releases (24h) | Health Score |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 21 | v2026.6.9, v2026.6.10-beta.1 | 🟡 High volume, review bottleneck |
| **NanoBot** | 10 | 35 | 5 | None | 🟢 Responsive, self-healing |
| **Hermes Agent** | 50 | 50 | ~10* | None | 🟡 Batch-inflated, genuine activity strong |
| **PicoClaw** | 5 | 32 | 29 | v0.3.0-nightly | 🟢 Very high throughput |
| **NanoClaw** | 2 | 6 | 3 | None | 🟢 Security-focused, low volume |
| **NullClaw** | 1 | 0 | 0 | None | 🔴 Minimal activity |
| **IronClaw** | 3 | 29 | 14 | None | 🟢 Disciplined, high merge rate |
| **LobsterAI** | 15 | 0 | 0 | None | 🔴 Stale backlog cleanup only |
| **CoPaw** | 16 | 32 | 2 | None | 🟡 Mobile sprint, review backlog |
| **ZeptoClaw** | 1 | 1 | 1 | None | 🟢 Stable, maintainer-driven |
| **ZeroClaw** | 41 | 50 | 10 | None | 🟡 High velocity, growing queue |
| **TinyClaw** | 0 | 0 | 0 | None | ⚪ No activity |
| **Moltis** | 0 | 0 | 0 | None | ⚪ No activity |

*Hermes Agent PR count inflated by batch-overlay campaign; genuine human PRs estimated ~10.

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Largest community by raw volume**: 500 issues + 500 PRs in 24h dwarfs all competitors. This creates a rich feedback loop and a de facto standard for plugin/channel architecture.
- **Broadest channel support**: Telegram, Discord, Slack, Matrix, and others — Hermes Agent's community explicitly references "platform parity with OpenClaw" as a goal (#8950).
- **Most mature release cadence**: Two releases in a single day (stable + beta) signals disciplined versioning that most peers have not yet achieved.
- **Subagent orchestration**: OpenClaw's subagent system, despite its current reliability issues, is more architecturally developed than any competitor's equivalent.

**Technical Approach Differences:**
- OpenClaw is a **monorepo-style gateway** managing sessions, channels, compaction, and tool dispatch in a single process. By contrast, **NanoClaw** is explicitly container-first with A2A (agent-to-agent) as a first-class concern; **PicoClaw** targets embedded hardware with serial tool support; **ZeptoClaw** enforces a 7.5MB binary budget as a strategic constraint; **IronClaw** is building a Rust-based "Reborn" learning system with concurrent turn execution.
- OpenClaw's compaction and session management is the most feature-rich but also the most bug-prone — the 180s compaction timeout regression (#92043) and write-lock contention (#86538) have no direct equivalents in simpler architectures like PicoClaw or ZeptoClaw.

**Community Size Comparison:**
OpenClaw's 500/500 issue/PR volume is ~10× ZeroClaw (41/50), ~15× NanoBot (10/35), and ~50× PicoClaw (5/32). However, PicoClaw's 29 merged PRs in 24h suggests a smaller but extremely efficient contributor base, while OpenClaw's 21 merges out of 500 signals a significant review bottleneck.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging simultaneously across multiple projects, indicating ecosystem-wide convergence:

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Session-state reliability** | OpenClaw, NanoBot, CoPaw | Write-lock contention (OpenClaw #86538), duplicate tool_use IDs bricking sessions (NanoBot #4442), session switch locks stuck (CoPaw #5354). All three need durable async state preservation across agent turn boundaries. |
| **Subagent/multi-agent orchestration** | OpenClaw, CoPaw, NanoClaw | Subagent completion delivery failures (OpenClaw #92076, #92433), message queue cross-talk (CoPaw #5354), A2A attachment trust boundaries (NanoClaw #2828). The multi-agent pattern is outpacing the tooling. |
| **Telegram channel hardening** | OpenClaw, NanoBot, Hermes Agent | Duplicate replies (OpenClaw #86519), crash loops (OpenClaw #93375), rich message rendering (NanoBot #4422, Hermes Agent #47048). Telegram is the most-used and most-problematic channel across the ecosystem. |
| **Security: MCP trust boundaries** | NanoBot, NanoClaw, Hermes Agent | MCP allowlist bypass leaking resources/prompts (NanoBot #4435), approval smuggling in add_mcp_server (NanoClaw #2827), MCP config persistence attack surface (Hermes Agent #50476). MCP's rapid adoption has outpaced security auditing. |
| **Mobile/web UX responsiveness** | CoPaw, PicoClaw, LobsterAI | Collapsed sidebar agent switching (CoPaw #5329), Safari <16.4 panel breakage (PicoClaw #3090), Redux state sync gaps (LobsterAI #1500/1502). Mobile access is a growing use case that most projects are under-serving. |
| **Memory system maturity** | OpenClaw, Hermes Agent, ZeroClaw | Bounded/validated pre-compaction flush (OpenClaw #90354), self-hosted Mem0 support (Hermes Agent, 7 PRs merged), memory consolidation via tool-calling (ZeroClaw #4760). Memory is the next competitive differentiator after channel support. |
| **Provider compatibility robustness** | ZeroClaw, OpenClaw, Hermes Agent | MiniMax context compression drops tool calls (ZeroClaw #6361), custom provider config ignored (Hermes Agent #8919), OpenRouter free model 404s (Hermes Agent #49983). The OpenAI-compatible adapter surface is a universal pain point. |

---

## 5. Differentiation Analysis

| Project | Target User | Key Differentiator | Technical Architecture |
|---|---|---|---|
| **OpenClaw** | Power users, multi-channel operators | Broadest channel + plugin ecosystem; reference architecture | Monorepo gateway, TypeScript, session-centric |
| **NanoBot** | Developers wanting quick setup | Fast iteration, responsive community, TTS + rich Telegram | Python-based, provider-agnostic, WebUI-first |
| **Hermes Agent** | Nous Research community, multi-platform | Mem0 self-hosting, browser tool, skills verification | Plugin-heavy, CLI-first, Electron desktop app |
| **PicoClaw** | Embedded/IoT developers (Sipeed hardware) | Serial tool support, factory reset, V3 config schema | Lightweight, web UI, hardware-integrated |
| **NanoClaw** | Security-conscious, container-first operators | A2A protocol, approval flows, sandboxed execution | Container-native, socket-based CLI, security-audited |
| **IronClaw** | NEAR ecosystem, Rust developers | Reborn learning system, concurrent turns, Composio | Rust core, WASM channels, hosted Postgres path |
| **ZeroClaw** | CLI power users, local-first advocates | Local-first mode, OTel tracing, skill registries | Rust + TypeScript, ACP protocol, board automation |
| **CoPaw (QwenPaw)** | Qwen ecosystem users, mobile web | Qwen model integration, message queue, Agent Office | Python backend, responsive web console, Tauri desktop |
| **ZeptoClaw** | Resource-constrained / robotics | 7.5MB binary budget enforced in CI, minimal footprint | Rust, stripped binary, CI-gated size budget |
| **LobsterAI** | Netease/Popo IM ecosystem (China) | Popo IM integration, Chinese-language skills, Redux UI | Web-first, IM-bot-oriented, China-market focused |
| **NullClaw** | Minimal/lightweight use cases | Simplicity, low resource | Minimal architecture, limited channel support |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly Iterating (High Velocity, Active Merging):**
- **PicoClaw**: 29/32 PRs merged in 24h. The most efficient project by merge rate. Approaching v0.3.0 stable.
- **IronClaw**: 14/29 PRs merged, disciplined stacking (WS-1/2/3 learning system). Strong contributor workflow.
- **NanoBot**: 5/32 PRs merged, same-day fix PRs for critical bugs. Excellent community self-healing.

**Tier 2 — High Volume, Review-Bottlenecked:**
- **OpenClaw**: 21/500 PRs merged. Massive community contribution but clear maintainer bandwidth constraint. The `clawsweeper:needs-maintainer-review` label is pervasive.
- **ZeroClaw**: 10/50 PRs merged. Growing queue, governance RFCs in progress, needs triage scaling.
- **CoPaw**: 2/32 PRs merged. Mobile sprint generating PRs faster than they can be reviewed.

**Tier 3 — Stabilizing / Maintenance Mode:**
- **Hermes Agent**: Genuine activity is strong (Mem0 self-hosting, security PRs) but release cadence has stalled at v00.16.0. Accumulating fixes for next patch.
- **NanoClaw**: Low volume but high-quality security disclosures. Container networking and setup reliability fixes landing steadily.
- **ZeptoClaw**: Minimal but disciplined. Binary size governance now enforced. Stable baseline.

**Tier 4 — At Risk / Dormant:**
- **LobsterAI**: 14/15 issues closed as stale without resolution. New security advisory (#2181) unaddressed. Contributor trust eroding.
- **NullClaw**: Near-zero activity. One open bug with no maintainer response.
- **TinyClaw / Moltis**: No detectable activity in 24h window.

---

## 7. Trend Signals

**For AI Agent Developers — Key Industry Directions:**

1. **Session durability is the new reliability frontier.** The era of "it works in the demo" is over. OpenClaw's write-lock timeouts, NanoBot's bricked sessions, and CoPaw's cross-talk all point to the same conclusion: **async session state management across agent boundaries is the hardest unsolved problem in production agent systems.** Developers should invest in crash-consistent session stores, bounded compaction with provider-aware timeouts, and explicit subagent completion delivery guarantees.

2. **MCP security is an emerging attack surface.** Three independent projects (NanoBot, NanoClaw, Hermes Agent) received security disclosures about MCP trust boundaries within the same 24-hour window. The pattern: allowlist enforcement is incomplete, approval flows hide critical parameters, and agent-to-agent state is insufficiently sandboxed. **Expect MCP security auditing to become a standard requirement**, not an afterthought.

3. **Mobile is the next platform battle.** CoPaw's 10+ mobile PRs, PicoClaw's Safari compatibility issue, and LobsterAI's web-first architecture all signal that **users increasingly expect full agent management from phone browsers.** Projects that don't invest in responsive design will lose a growing user segment.

4. **Memory systems are differentiating.** Hermes Agent shipped 7 PRs for Mem0 self-hosting in a single day. OpenClaw is working on bounded compaction flush. ZeroClaw is exploring tool-calling-based consolidation. **The quality of the memory layer — not just the LLM — is becoming the primary determinant of agent usefulness over long horizons.**

5. **Binary size and deployment footprint matter for embedded/edge.** ZeptoClaw's 7.5MB CI gate and PicoClaw's serial tool support reflect a growing segment of **agent-on-the-edge** use cases. Not every agent runs in the cloud; the ability to deploy on constrained hardware is a genuine competitive advantage.

6. **Provider adapter robustness is table stakes.** ZeroClaw, OpenClaw, and Hermes Agent all have S1 bugs related to OpenAI-compatible provider adapters. As the LLM provider landscape fragments (MiniMax, DeepSeek, Groq, OpenRouter, local Ollama), **the adapter layer is where most production failures occur.** Structured output via tool-calling (vs. prompt-constrained JSON) is the emerging best practice.

7. **Governance and project scaling are converging concerns.** ZeroClaw's work lanes RFC (#6808), OpenClaw's `clawsweeper` labeling system, and IronClaw's merge-queue E2E gating all represent **the same organizational challenge: how to scale maintainer throughput to match community contribution volume.** Projects that solve this will pull ahead; those that don't will accumulate backlogs and lose contributors.

---

*Report generated by OWL — ZOO Company · Data snapshot: 2026-06-22 · Sources: GitHub repositories as cited per project digest.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project digest for 2026-06-22.

---

# NanoBot Project Digest — 2026-06-22

---

## 1. Today's Overview

NanoBot is experiencing a period of exceptionally high community activity, with **35 PRs updated** and **10 issues touched** in the last 24 hours — a clear signal of a rapidly growing contributor base and maturing codebase. The project is in a heavy bug-fix and hardening phase: multiple security advisories, concurrency bugs, and provider-specific regressions surfaced today, and the community responded with an almost equal volume of fix PRs. No new releases were published, suggesting the team is accumulating fixes for a forthcoming patch. The overall health is **active and responsive**, with most critical issues receiving same-day PR attention.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours.

---

## 3. Project Progress

The following PRs were merged or closed today, representing tangible progress:

| # | PR | What Advanced |
|---|---|---|
| [4323](https://github.com/HKUDS/nanobot/pull/4323) | `fix(transcription): resolve env vars before transcription config lookup` | Transcription silently failed when API keys used `${VAR}` templates; now resolved before lookup. |
| [4324](https://github.com/HKUDS/nanobot/pull/4324) | `fix(webui): resolve env-var templates in settings read paths` | WebUI settings page now correctly reads provider credentials that use env-var templates. |
| [4325](https://github.com/HKUDS/nanobot/pull/4325) | `fix(webui): resolve env-var templates in settings update paths` | Settings update endpoints no longer compare raw `${VAR}` strings against user input, fixing silent update failures. |
| [4316](https://github.com/HKUDS/nanobot/pull/4316) | `feat(tts): add TTS configuration system with multi-provider support` | New text-to-speech system supporting OpenAI, Groq (Orpheus), and ElevenLabs, configurable via WebUI. |
| [4422](https://github.com/HKUDS/nanobot/pull/4422) | `feat(telegram): Add Bot API 10.1 sendRichMessage support` | Telegram channel now supports native rich messages (tables, task lists, collapsible details, math blocks). |

**Key takeaway:** A cluster of env-var template resolution bugs across transcription and WebUI settings were closed in a single batch — likely the same author (`tobrien`) doing a cleanup pass. The TTS feature and Telegram rich messages are notable new capabilities landing in the codebase.

---

## 4. Community Hot Topics

### 🔥 Security: MCP `enabledTools` Allowlist Bypass
- **Issues:** [#4435](https://github.com/HKUDS/nanobot/issues/4435), [#4434](https://github.com/HKUDS/nanobot/issues/4434) (both opened 2026-06-21 by `YLChen-007`)
- **PRs:** [#4436](https://github.com/HKUDS/nanobot/pull/4436)
- **Analysis:** Two security advisories report that `enabledTools: []` (deny-all) still leaks MCP resources and prompts to the model. The allowlist was only enforced for `session.list_tools()`, not for `list_resources()` or `list_prompts()`. A fix PR (#4436) is already open. This is a **high-priority trust boundary issue** for anyone using MCP servers with sensitive resources.

### 🔥 Duplicate `tool_use` IDs Bricking Sessions
- **Issue:** [#4442](https://github.com/HKUDS/nanobot/issues/4442) (opened 2026-06-21)
- **PRs:** [#4443](https://github.com/HKUDS/nanobot/pull/4443), [#4444](https://github.com/HKUDS/nanobot/pull/4444)
- **Analysis:** When a streaming Anthropic-family provider yields the same `tool_use` block twice, the duplicate is persisted into session history, causing every subsequent turn to fail with HTTP 400 — permanently bricking the session. Two independent fix PRs were opened the same day, indicating this is a **painful, real-world production bug** affecting users on Anthropic streaming.

### 🔄 Concurrency Safety of `Nanobot.run()` Hooks
- **Issue:** [#4408](https://github.com/HKUDS/nanobot/issues/4408) (closed 2026-06-21)
- **Analysis:** `Nanobot.run()` mutates shared `self._loop._extra_hooks`, making concurrent runs clobber each other's hooks. This was closed (likely by a fix PR), but it signals that **multi-agent or concurrent-session deployments** are an emerging use case that the core loop wasn't originally designed for.

### 💡 Telegram Bot API 10.1 Rich Messages
- **Issue:** [#4413](https://github.com/HKUDS/nanobot/issues/4413) (opened 2026-06-19)
- **Analysis:** A feature request to add markdown-to-Telegram-rich-format conversion. The related PR #4422 was already merged/closed, suggesting this need was met quickly.

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | # | Bug | Fix PR | Status |
|---|---|---|---|---|
| 🔴 Critical | [#4442](https://github.com/HKUDS/nanobot/issues/4442) | Duplicate `tool_use` IDs permanently brick Anthropic sessions | [#4443](https://github.com/HKUDS/nanobot/pull/4443), [#4444](https://github.com/HKUDS/nanobot/pull/4444) | Fix PRs open |
| 🔴 Critical | [#4435](https://github.com/HKUDS/nanobot/issues/4435) / [#4434](https://github.com/HKUDS/nanobot/issues/4434) | MCP `enabledTools` allowlist bypass — resources/prompts leak | [#4436](https://github.com/HKUDS/nanobot/pull/4436) | Fix PR open |
| 🟠 High | [#4441](https://github.com/HKUDS/nanobot/issues/4441) | Gateway crash on MCP server reconnect failure (`RuntimeError: cancel scope`) | [#4441](https://github.com/HKUDS/nanobot/pull/4441) | Fix PR open |
| 🟡 Medium | [#4408](https://github.com/HKUDS/nanobot/issues/4408) | `Nanobot.run()` per-run hooks not concurrency-safe | — | Closed (fix likely merged) |
| 🟡 Medium | [#4420](https://github.com/HKUDS/nanobot/issues/4420) | Redundant tiktoken encoding of tool definitions every turn | — | Closed (fix likely merged) |
| 🟢 Low | [#4433](https://github.com/HKUDS/nanobot/issues/4433) | Pairing store silently denies valid sender IDs due to type coercion | [#4433](https://github.com/HKUDS/nanobot/pull/4433) | Fix PR open |

**Assessment:** Today's bug report quality is notably high — reporters included root-cause analysis and reproduction steps. The community is effectively self-healing with same-day fix PRs for the two most critical issues.

---

## 6. Feature Requests & Roadmap Signals

| # | Request | Likelihood of Next Version | Rationale |
|---|---|---|---|
| [#4440](https://github.com/HKUDS/nanobot/issues/4440) | Read-only `search_history` tool for `memory/history.jsonl` | **High** — PR [#4439](https://github.com/HKUDS/nanobot/pull/4439) already open | Directly complements the eager consolidation PR (#4402); fills a gap in the memory recall UX. |
| [#4431](https://github.com/HKUDS/nanobot/issues/4431) | Heartbeat-specific model override | **Medium** | Cost optimization for heartbeat runs; simple config addition, no architectural change. |
| [#4413](https://github.com/HKUDS/nanobot/issues/4413) | Telegram rich message markdown conversion | **Already shipped** | PR #4422 merged. |
| [#4392](https://github.com/HKUDS/nanobot/pull/4392) | Configurable tool microcompaction | **Medium** | Addresses cache-sensitive deployments; PR is open and multi-file. |
| [#4225](https://github.com/HKUDS/nanobot/pull/4225) | Cron silent mode + `lock_recipient` | **Medium** | Background monitoring use case; PR open with clear motivation. |
| [#4271](https://github.com/HKUDS/nanobot/pull/4271) | Read-only sessions (skip LLM for info panels) | **Medium** | Enables welcome pages, config guides, announcements without wasted LLM calls. |

**Prediction:** The next release will likely include the `search_history` tool, the heartbeat model override, and the cron silent mode — all of which have open PRs with clear, bounded scope.

---

## 7. User Feedback Summary

**Pain Points:**
- **Session durability:** Users are hitting hard-to-debug session-bricking bugs (duplicate `tool_use` IDs, [#4442](https://github.com/HKUDS/nanobot/issues/4442)) that silently kill agents with no recovery path. This is the #1 source of user frustration.
- **Security trust boundary:** The MCP `enabledTools` bypass ([#4435](https://github.com/HKUDS/nanobot/issues/4435), [#4434](https://github.com/HKUDS/nanobot/issues/4434)) undermines user confidence in the allowlist model — users who set `[]` expected zero capabilities.
- **Performance at scale:** The redundant tiktoken encoding issue ([#4420](https://github.com/HKUDS/nanobot/issues/4420)) was discovered by a user building a production "digital employee" (nanobee), indicating real-world latency pain.
- **Env-var template resolution:** A cluster of bugs ([#4323](https://github.com/HKUDS/nanobot/pull/4323)–[#4325](https://github.com/HKUDS/nanobot/pull/4325)) where `${VAR}` templates weren't resolved before use, causing silent failures in transcription and WebUI settings.

**Use Cases Emerging:**
- Multi-agent / concurrent-session deployments (hooks concurrency bug, [#4408](https://github.com/HKUDS/nanobot/issues/4408))
- Background monitoring via cron with suppressed notifications ([#4225](https://github.com/HKUDS/nanobot/pull/4225))
- Read-only info panels in downstream apps like Cloud Demo and Squad ([#4271](https://github.com/HKUDS/nanobot/pull/4271))
- Self-hosted Mattermost as a privacy-respecting alternative to Discord/Telegram/Slack ([#1011](https://github.com/HKUDS/nanobot/issues/1011), stale)

**Satisfaction Signal:** The speed of community response (multiple same-day fix PRs for critical bugs) suggests a healthy, engaged contributor base. Users are filing detailed, actionable reports — a sign of investment in the project.

---

## 8. Backlog Watch

These items have been open for extended periods and may need maintainer attention:

| # | Item | Age | Why It Matters |
|---|---|---|---|
| [#1011](https://github.com/HKUDS/nanobot/issues/1011) | Mattermost Bot support | **4+ months** (Feb 2026) | 👍: 4 — highest reaction count in today's batch. Users want a self-hosted, privacy-respecting channel alternative. Marked stale but demand persists. |
| [#4092](https://github.com/HKUDS/nanobot/pull/4092) | Fix OpenAI-compatible tool call parsing | **~3 weeks** (May 29) | Fixes two issues (#4059, #4061) with OpenAI-compatible providers. Affects a large user base. |
| [#3869](https://github.com/HKUDS/nanobot/pull/3869) | DeepSeek message hardening | **~5 weeks** (May 16) | Addresses null content 400 errors and placeholder leakage for DeepSeek v4-pro/v4-flash. Important for users on that provider. |
| [#4059](https://github.com/HKUDS/nanobot/issues/4059) / [#4061](https://github.com/HKUDS/nanobot/issues/4061) | OpenAI-compatible tool call parsing bugs | **~3 weeks** | Referenced by PR #4092; if the PR stalls, these issues remain open. |

**Recommendation:** The Mattermost request (#1011) has organic demand (4 upvotes) and aligns with NanoBot's self-hosted ethos — even a community-contributed channel plugin would be welcome. The OpenAI-compatible parsing PR (#4092) is the oldest open PR with real user impact and should be prioritized for review.

---

*Data source: [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot) · Generated: 2026-06-22*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent — Project Digest

**Date:** 2026-06-22

---

## 1. Today's Overview

Hermes Agent recorded extremely high issue and PR velocity — 50 issues and 50 PRs updated in the last 24 hours combined — but this surface volume is heavily inflated by a coordinated batch-PR campaign (see §3). Genuine user-facing activity remains vigorous: the community is reacting to the Google Gemini CLI sunset (June 18), surfacing security issues around MCP persistence and Matrix E2EE gaps, and pushing multiple self-hosting and multi-channel expansion features forward. No new release landed today; the project is in an active pre-release accumulation phase with a thick backlog of ready-to-merge PRs, especially around Mem0 memory provider self-hosting and security hardening.

**Activity Assessment: 🔴 Very High (batch-inflated)**
*Genuine human activity is strong; the 2,448-line overlay campaign accounts for a disproportionate share of the raw PR count.*

---

## 2. Releases

**No new releases.** The latest tagged version remains `v00.16.0`. Several closed bugs and security fixes (§4, §5) suggest a `v0.16.1` patch may be imminent.

---

## 3. Project Progress

### Closed / Merged PRs (Highlights)

| # | Title | Area |
|---|---|---|
| [50479](https://github.com/NousResearch/hermes-agent/pull/50479) | fix(mem0): add self-hosted support via `MEM0_HOST` | plugins/memory |
| [49623](https://github.com/NousResearch/hermes-agent/pull/49623) | fix(mem0): httpx wrapper for self-hosted instances | plugins/memory |
| [27200](https://github.com/NousResearch/hermes-agent/pull/27200) | feat(cli): support self-hosted mem0 setup | cli/plugins |
| [21601](https://github.com/NousResearch/hermes-agent/pull/21601) | feat(memory): self-hosted Mem0 REST backend | plugins/memory |
| [30902](https://github.com/NousResearch/hermes-agent/pull/30902) | fix(doctor): recognize self-hosted Mem0 without API key | cli/plugins |
| [13377](https://github.com/NousResearch/hermes-agent/pull/13377) | feat(mem0): add self-hosted `MEM0_HOST` host config | plugins/memory |
| [9488](https://github.com/NousResearch/hermes-agent/pull/9488) | feat(memory): add mem0 HTTP provider | plugins/memory |
| [20185](https://github.com/NousResearch/hermes-agent/pull/20185) | feat(plugins): local self-host mode for mem0 | plugins/memory |
| [31209](https://github.com/NousResearch/hermes-agent/pull/31209) | feat(mem0): self-hosted OSS server support | plugins/memory |
| [15008](httpshttps://github.com/NousResearch/hermes-agent/pull/15008) | fix(tools): escalate SIGTERM→SIGKILL on browser daemon | tools/browser |

**Batch overlay PRs (tracking PR coverage of the v0.16.0→HEAD delta):**
- [50484](https://github.com/NousResearch/hermes-agent/pull/50484), [50111](https://github.com/NousResearch/hermes-agent/pull/50111) — meta/tracking PRs labeling residual code lines as covered. Not code-feature PRs.

### Key Themes from Closed Work
1. **Mem0 self-hosting is now fully supported.** Seven merged PRs landed in rapid succession, closing a gap where the memory plugin could only reach `api.mem0.ai`. Users can now point it at a self-hosted Mem0 stack via `MEM0_HOST` / `host` config, with CLI-setup and doctor-check support.
2. **Browser daemon reliability improved.** PR #15008 adds SIGTERM→SIGKILL escalation and periodic orphan reaping for zombie browser processes, addressing long-standing flakiness in the browser tool on agent restart/upgrade.

---

## 4. Community Hot Topics

### Most Commented Issues

| # | Issue | 💬 | 👍 | Signal |
|---|---|---|---|---|
| [#45500](https://github.com/NousResearch/hermes-agent/issues/45500) | Matrix text messages bypass E2EE encryption | 6 | 0 | **Security** — P1; text path lacks `is_encrypted()` check that file attachments already have. |
| [#8950](https://github.com/NousResearch/hermes-agent/issues/8950) | Add missing messaging channels: IRC, Google Chat, LINE, Nostr, Twitch, QQBot | 5 | 2 | **Platform parity** vs. OpenClaw. |
| [#14327](https://github.com/NousResearch/hermes-agent/issues/14327) | Per-platform model configuration | 4 | 2 | Users want Feishu on one model, Telegram on another — currently single global default. |
| [#44637](https://github.com/NousResearch/hermes-agent/issues/44637) | Runtime-enforced verification gates for Skills | 4 | 0 | Skills' "Verification" section is prompt-only; users want deterministic enforcement for high-stakes tasks. |
| [#29294](https://github.com/NousResearch/hermes-agent/issues/29294) | Google Gemini CLI/provider sunsets for consumer tiers (June 18) | 3 | 8 | **Highest-reaction issue** — breaks core provider for many users. Duplicate bugs #49701, #49705 also closed. Underlying need: Antigravity CLI migration or AI Studio endpoint replacement. |

### Most Commented / Active PRs (Open, Human-Submitted)

| # | PR | Area |
|---|---|---|
| [50476](https://github.com/NousResearch/hermes-agent/pull/50476) | Harden MCP-config persistence attack surface (remove `--insecure` dashboard bypass) | security |
| [50483](https://github.com/NousResearch/hermes-agent/pull/50483) | Prevent orphaned `tool_calls` on Ctrl+C (fixes HTTP 400 on DeepSeek/Anthropic) | agent |
| [50482](https://github.com/NousResearch/hermes-agent/pull/50482) | Per-server MCP connection circuit breaker (fixes restart storm) | mcp |

### Underlying Need Analysis
- **Post-Google-sunset provider gaps** dominate reactions. The community needs a fast Antigravity CLI adapter or a Google AI Studio HTTP endpoint provider.
- **Per-channel model routing** is the most-requested multi-platform UX improvement.
- **Security hardening** around MCP and Matrix are both newly surfaced P1 issues that have community momentum.

---

## 5. Bugs & Stability

### New / Active Bugs Ranked by Severity

| Severity | # | Bug | Fix PR? |
|---|---|---|---|
| **P1 🔴** | [#45500](https://github.com/NousResearch/hermes-agent/issues/45500) | Matrix text messages bypass E2EE — file path encrypts, text path does not | None yet |
| **P1 🔴** | [#8919](https://github.com/NousResearch/hermes-agent/issues/8919) | Custom provider config ignored at runtime — gateway doesn't hit custom base URL | Closed 2026-06-21 (fix presumed merged) |
| **P1 🔴** | [#39706](https://github.com/NousResearch/hermes-agent/issues/39706) | `hermes update` crashes `ValueError: too many values to unpack` during dependency install | Closed (sweeper:implemented-on-main) |
| **P1 🔴** | [#14073](https://github.com/NousResearch/hermes-agent/issues/14073) | Browser orphan reaper trusts `/tmp` PID files → can SIGTERM arbitrary same-user processes | Closed 2026-06-21 |
| **P1 🔴** | [#49609](https://github.com/NousResearch/hermes-agent/issues/49609) | Desktop app UI freezes post-update — session recovery 404 with no fallback | Closed (sweeper:implemented-on-main) |
| **P1 🔴** | [#48234](https://github.com/NousResearch/hermes-agent/issues/48234) | Gateway exits on cron-triggered LLM IndexError; second crash leaves Feishu websocket dead | Closed (sweeper:implemented-on-main) |
| **P1 🔴** | [#50090](httpshttps://github.com/NousResearch/hermes-agent/issues/50090) | Windows bootstrap-installer kills Gateway without respawning — Telegram bot silently dead | Closed 2026-06-21 (fix presumed merged) |
| **P1 🔴** | [#8637](https://github.com/NousResearch/hermes-agent/issues/8637) | WhatsApp bridge crashes on bare phone numbers — missing JID normalization | Closed 2026-06-21 (fix presumed merged) |
| **P2 🟡** | [#49983](https://github.com/NousResearch/hermes-agent/issues/49983) | OpenRouter free models fail HTTP 404 — tool calling not supported on `:free` tier | None yet |
| **P2 🟡** | [#50449](https://github.com/NousResearch/hermes-agent/issues/50449) | Desktop Thinking toggle snaps back on — writes stranded top-level config key | None yet |
| **P2 🟡** | [#50438](https://github.com/NousResearch/hermes-agent/issues/50438) | TUI sessions don't record cwd — Desktop groups them all under default workspace | None yet |
| **P2 🟡** | [#47048](https://github.com/NousResearch/hermes-agent/issues/47048) | Telegram rich-message final reply double-renders with legacy MarkdownV2 | Closed 2026-06-21 |
| **P2 🟡** | [#47759](https://github.com/NousResearch/hermes-agent/issues/47759) | Matrix E2EE install error on Windows (`pip install "hermes-agent[matrix]"`) | Needs repro |
| **P2 🟡** | [#49701](https://github.com/NousResearch/hermes-agent/issues/49701) | Gemini CLI provider broken after June 18 sunset (duplicate of #29294) | Closed as duplicate |
| **P3 🟢** | [#49614](https://github.com/NousResearch/hermes-agent/issues/49614) | Desktop refText crash on session switch breaks view | Closed 2026-06-21 |

### Quick Take
**Stability is improving.** Eight P1 bugs were closed in the last 24h, many via the `sweeper:implemented-on-main` label (bot-verified fix on main branch). The remaining open P1 (Matrix E2EE bypass) has no PR yet and is the most critical unfixed issue. Open P2s are clustered around Desktop UX polish and OpenRouter tier errors.

---

## 6. Feature Requests & Roadmap Signals

### Top User-Requested Features

| # | Feature | 💬 | 👍 | Probability in Next Release |
|---|---|---|---|---|
| [#8950](https://github.com/NousResearch/hermes-agent/issues/8950) | Add IRC, Google Chat, LINE, Nostr, Twitch, QQBot messaging channels | 5 | 2 | **Medium** — platform parity with OpenClaw is a strong demand signal; large scope |
| [#14327](https://github.com/NousResearch/hermes-agent/issues/14327) | Per-platform model configuration | 4 | 2 | **High** — clean, well-scoped config change; directly unblocks multi-platform users |
| [#44637](https://github.com/NousResearch/hermes-agent/issues/44637) | Runtime-enforced verification gates for Skills | 4 | 0 | **Low-Medium** — architecturally complex; needs design discussion |
| [#20140](https://github.com/NousResearch/hermes-agent/issues/20140) | Cron: per-job opt-in to send_message tool | 2 | 0 | **High** — narrow scoped; blocked only by scheduler architecture |
| [#50240](https://github.com/NousResearch/hermes-agent/issues/50240) / [#50293](https://github.com/NousResearch/hermes-agent/issues/50293) | Self-escalation: dynamic thinking toggle per turn | 2 | 0 | **Low** — interesting but speculative; duplicate filed within hours suggests individual demand, not broad need |
| [#16216](https://github.com/NousResearch/hermes-agent/issues/16216) | Honor per-request model override via API adapter header | 1 | 1 | **High** — directly useful for routing dashboards; clean spec |
| [#41180](https://github.com/NousResearch/hermes-agent/issues/41180) | Strategy: Desktop app risks watering down power-user harness | 1 | 0 | **Meta** — discussion-only; needs-decision label |

**Predicted for v0.16.1 / next minor:** Per-platform model config and cron send_message opt-in are the highest-probability additions given community demand and implementation simplicity. Channel expansion to IRC/Google Chat is a medium-term campaign.

---

## 7. User Feedback Summary

### Pain Points
1. **Google Gemini CLI provider is dead** — multiple users confirmed total breakage post-June 18 sunset (👍 8 on #29294, the highest-reaction issue). Users are confused about migration to Antigravity CLI and feel the transition was under-communicated.
2. **Windows install/update reliability** — `hermes update` crash (#39706), Gateway not respawning after bootstrap-installer (#50090), and Matrix E2EE install error on Windows (#47759) form a pattern of Windows-second-class-citizen frustrations.
3. **Desktop app instability** — UI freezes post-update (#49609), Thinking toggle state corruption (#50449), refText session-switch crash (#49614), and TUI cwd not recorded (#50438) suggest Desktop/Electron quality needs focused attention.
4. **Custom provider is a minefield** — #8919 confirmed custom OpenAI-compatible endpoints are silently ignored at runtime. Users running local LLMs (Ollama, vLLM) or proxy layers are most affected.
5. **MCP security anxiety** — PR #50476 explicitly references a "live unsecured instance" being exploited. The community is alert to supply-chain-style attacks via MCP config persistence.

### Satisfaction Signals
- **Mem0 self-hosting push** — seven users independently submitted PRs and issues around the same gap, and all were merged/closed rapidly. This is a healthy contributor-response loop.
- **Sweeper bot effectiveness** — multiple P1 bugs closed with `sweeper:implemented-on-main` label, suggesting automated fix verification is working and users are getting fast resolutions.

### Use Cases Observed
- Multi-platform deployments (Feishu + Telegram + DingTalk) with per-channel model routing needs.
- Self-hosted memory stacks (Mem0 OSS + local vector DB) for privacy-conscious users.
- Cron-scheduled messaging to WhatsApp/Discord/Slack groups (currently blocked).
- Dashboard/routing layers in front of Hermes that need per-request model override headers.

---

## 8. Backlog Watch

### Long-Unanswered Issues Needing Maintainer Attention

| # | Issue | Age | Why It Matters |
|---|---|---|---|
| [#8950](https://github.com/NousResearch/hermes-agent/issues/8950) | Add missing messaging channels (IRC, Google Chat, LINE, Nostr, Twitch, QQBot) | **70 days** (Apr 13) | High community interest (💬5, 👍2); no maintainer response visible; blocks platform parity with OpenClaw |
| [#14327](https://github.com/NousResearch/hermes-agent/issues/14327) | Per-platform model configuration | **60 days** (Apr 23) | Clean, well-scoped; directly unblocks multi-platform users; no maintainer triage comment |
| [#41180](https://github.com/NousResearch/hermes-agent/issues/41180) | Strategy: Desktop app risks watering down power-user harness | **46 days** (Jun 7) | Labeled `needs-decision`; strategic direction question that blocks Desktop feature prioritization |
| [#44637](https://github.com/NousResearch/hermes-agent/issues/44637) | Runtime-enforced verification gates for Skills | **10 days** (Jun 12) | Newer but architecturally significant; needs design input before implementation PRs can proceed |
| [#16216](https://github.com/NousResearch/hermes-agent/issues/16216) | Per-request model override via API adapter header | **57 days** (Apr 26) | Clean spec, 👍1; directly useful for routing dashboard users; no maintainer response |

### Stale PRs at Risk of Going Stale

| # | PR | Age | Risk |
|---|---|---|---|
| [50049](https://github.com/NousResearch/hermes-agent/pull/50049) | Guard subdirectory-hint expansion against `~unknownuser` tokens | 1 day | Low — just opened, but small and easy to merge |
| [49612](https://github.com/NousResearch/hermes-agent/pull/49612) | feat(dingtalk): enable file delivery via OAPI media upload | 2 days | Low — new, focused |
| [49339](https://github.com/NousResearch/hermes-agent/pull/49339) | i18n(zh-CN): complete Chinese dashboard translation | 2 days | Low — new, large but self-contained |

**Recommendation:** The two oldest feature requests (#8950 at 70 days, #14327 at 60 days) are the most overdue for a maintainer triage comment — even a "planned / needs-design / wontfix" label would reduce community uncertainty. The `needs-decision` issue #41180 is a strategic blocker for Desktop contributors and should be prioritized for a maintainer call.

---

*Generated by OWL — ZOO Company*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-22

---

## 1. Today's Overview

PicoClaw is in a period of intense, sustained development activity. Over the last 24 hours, **32 PRs were updated (29 merged/closed, only 3 remaining open)** and **5 issues moved (3 active, 2 closed)**, representing a very high throughput for a project of this scale. A new **nightly build** was also published for `v0.3.0`, signaling that the project is iterating toward a major version bump. The overwhelming majority of merged work is authored by a single contributor (`SiYue-ZO`), pointing to a focused sprint — likely closing out a milestone ahead of a stable v0.3.0 release.

---

## 2. Releases

| Version | Type | Date |
|---|---|---|
| [v0.3.0-nightly.20260621.287853ab](https://github.com/sipeed/picoclaw/tree/nightly) | Nightly | 2026-06-21 |

- **Nightly Build** — Automated, unstable, use with caution.
- **Full Changelog**: [v0.3.0 → main](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)

No stable tagged release was published today. The nightly indicates ongoing pre-release stabilization for v0.3.0.

---

## 3. Project Progress

Today's merged/closed PRs paint a picture of a project that simultaneously **polishes the existing v0.2.x codebase** while **landing major new features for v0.3.0**:

**🔧 Core Runtime & Stability Fixes**
- [PR #2906](https://github.com/sipeed/picoclaw/pull/2906) — Fix message bus backpressure handling; bounded waiting replaces unbounded blocking, with per-stream drop stats and dedicated saturation events.
- [PR #2905](https://github.com/sipeed/picoclaw/pull/2905) — Fix fallback-chain context handling so expired contexts short-circuit immediately instead of pointlessly trying later candidates.
- [PR #2907](https://github.com/sipeed/picoclaw/pull/2907) — Fix JSONL store metadata drift after crash (crash-consistency gap in memory store).
- [PR #2913](https://github.com/sipeed/picoclaw/pull/2913) — Fix JSONL session index hot-path cloning and TTL refresh semantics.

**🆕 New Features Landed**
- [PR #2891](https://github.com/sipeed/picoclaw/pull/2891) — "Reset to Factory Defaults" feature with config backup and credential preservation.
- [PR #2915](https://github.com/sipeed/picoclaw/pull/2915) — Add MiMo provider models (`mimo-v2.5`, `mimo-v2.5-pro`) with vision capability awareness.
- [PR #2673](https://github.com/sipeed/picoclaw/pull/2673) — Cross-platform serial tool support (Linux, macOS, Windows).
- [PR #2607](https://github.com/sipeed/picoclaw/pull/2607) — Feishu group chat `mention_only` trigger + random emoji response frontend config.
- [PR #2661](https://github.com/sipeed/picoclaw/pull/2661) — Thought visibility toggle with localStorage persistence.
- [PR #2831/2832/2833](https://github.com/sipeed/picoclaw/pull/2831) — Major model configuration workflow overhaul (provider selection, model form, fetch, catalog, test connection).
- [PR #2587](https://github.com/sipeed/picoclaw/pull/2587) — End-to-end web chat streaming with rebuilt scroll UX.
- [PR #2766](https://github.com/sipeed/picoclaw/pull/2766) — Full docs sync to V3 config schema (`api_keys` array, `channel_list`, version 2→3).
- [PR #2908](https://github.com/sipeed/picoclaw/pull/2908) — Restore provider logo fallbacks on models page after refactor.

**🐛 Bug Fixes**
- [PR #2659](https://github.com/sipeed/picoclaw/pull/2659) — Isolate thought bubble collapse state (per-bubble instead of global).
- [PR #2663](https://github.com/sipeed/picoclaw/pull/2663) — Improve config save/restart feedback across all settings pages.
- [PR #2487](https://github.com/sipeed/picoclaw/pull/2487) — Fix Windows build flow (remove Unix-only assumptions).
- [PR #2654](https://github.com/sipeed/picoclaw/pull/2654) — Hide Windows child-process console flashes.
- [PR #2607](https://github.com/sipeed/picoclaw/pull/2607) — Feishu uniqueness constraint handling.

---

## 4. Community Hot Topics

| # | Item | Activity | Signal |
|---|---|---|---|
| 1 | **Continuous token consumption when evolution is enabled** [#3012](https://github.com/sipeed/picoclaw/issues/3012) | 5 comments | Critical UX/efficiency issue |
| 2 | **Requesting SimpleX / Tox / Wire gateway support** [#3093](https://github.com/sipeed/picoclaw/issues/3093) | 2 comments, 1 👍 | User wants more channel backends |
| 3 | **Safari <16.4 panel incompatibility** [#3090](https://github.com/sipeed/picoclaw/issues/3090) | 2 comments | Web UI compatibility pain |

**Analysis**: The community's most pressing concern is **resource waste** — the token consumption bug (#3012) directly hits users' API bills and undermines confidence in the evolution feature. The SimpleX/Tox request (#3093) reflects growing user diversity, with privacy-conscious users wanting decentralized channel backends. Safari compatibility (#3090) suggests the web frontend may be using newer CSS/JS features without adequate fallbacks for older mobile Safari.

---

## 5. Bugs & Stability

| Severity | Description | Issue | Fix Status |
|---|---|---|---|
| 🔴 **High** | Continuous token consumption every minute when evolution is enabled | [#3012](https://github.com/sipeed/picoclaw/issues/3012) | **No fix PR yet** — 5 comments, still open |
| 🟡 **Medium** | `allow_from` fails for Matrix user IDs containing colon — messages silently rejected | [#3044](https://github.com/sipeed/picoclaw/issues/3044) | **Closed** as stale |
| 🟡 **Medium** | `mcp add` mis-parses global flags (DisableFlagParsing), breaks HTTP/SSE adds | [#3041](https://github.com/sipeed/picoclaw/issues/3041) | **Closed** as stale |
| 🟢 **Low** | Panel does not work on Safari iOS <16.4 | [#3090](https://github.com/sipeed/picoclaw/issues/3090) | No fix PR yet, marked stale |

**Assessment**: The token consumption bug is the most severity-critical issue — it has active discussion and represents a real cost to users. The two closed-as-stale bugs (#3044, #3041) were legitimate but fell through the cracks, suggesting the project may need better automation or triage to prevent valid bugs from being auto-closed.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood of Inclusion |
|---|---|---|
| **SimpleX / Tox / Wire channel gateway** | [#3093](https://github.com/sipeed/picoclaw/issues/3093) | Medium — depends on community implementation capacity and protocol maturity |

**Predicted next-version themes based on merged PRs:**
1. **V3 config migration completion** — Docs are synced; expect the stable v0.3.0 release to make V3 schema the default.
2. **Web UI maturity** — Streaming, model catalog, factory reset, and provider logos suggest a push toward a polished, self-service web experience.
3. **Multi-provider resilience** — Fallback chain fixes and crash-consistency work indicate investment in production-grade reliability.
4. **Hardware/IoT expansion** — Serial tool support signals broader embedded/IoT ambitions from Sipeed.

---

## 7. User Feedback Summary

| Sentiment | Topic | Evidence |
|---|---|---|
| 😠 **Frustrated** | Token consumption bug is burning API credits silently | [#3012](https://github.com/sipeed/picoclaw/issues/3012) — reported 17 days ago, still unfixed |
| 😐 **Neutral/Requesting** | Want privacy-focused chat backends (SimpleX, Tox) | [#3093](https://github.com/sipeed/picoclaw/issues/3093) |
| 😐 **Neutral/Minor annoyance** | Safari on older iOS versions can't access the panel | [#3090](https://github.com/sipeed/picoclaw/issues/3090) |
| 🙏 **Hopeful but lost** | Matrix colon-quoting and MCP flag-parsing bugs closed without resolution | [#3044](https://github.com/sipeed/picoclaw/issues/3044), [#3041](https://github.com/sipeed/picoclaw/issues/3041) |

Overall satisfaction is likely **mixed**: users are excited by the rapid pace of features (streaming, catalog, factory reset), but the token consumption bug and stale closures of valid reports erode trust. The project is shipping fast but triage/responsiveness needs attention.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Priority | Item | Days Open | Risk |
|---|---|---|---|
| 🔴 | **Token consumption bug when evolution enabled** [#3012](https://github.com/sipeed/picoclaw/issues/3012) | 17 days | Actively costing users money; 15+ days without fix or linked PR |
| 🟡 | **SimpleX/Tox/Wire gateway request** [#3093](https://github.com/sipeed/picoclaw/issues/3093) | 12 days | Community contributor may be willing to implement — needs maintainer response to de-duplicate effort |
| 🟡 | **Safari iOS <16.4 panel breakage** [#3090](https://github.com/sipeed/picoclaw/issues/3090) | 12 days | Affects mobile web users; may be a simple polyfill fix |
| 🟡 | **Matrix `allow_from` colon bug** [#3044](https://github.com/sipeed/picoclaw/issues/3044) | Closed stale | Legitimate security/functional issue — needs reopening or re-filing |
| 🟡 | **MCP `add` flag-parsing regression** [#3041](https://github.com/sipeed/picoclaw/issues/3041) | Closed stale | Functional regression in MCP tool management — needs reopening or re-filing |

**Actionable recommendation**: The top priority is assigning ownership to the token consumption bug (#3012) given its 17-day open window and direct financial impact on users. The two stale-closed bugs (#3044, #3041) should be evaluated for reopening or re-ticketing — they represent real regressions that were lost to automation.

---

*Digest generated by OWL · 2026-06-22 · Source: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-22

---

## 1. Today's Overview

NanoClaw shows **moderate, security-focused activity** today: 2 new open issues (both security advisories from the same researcher), 6 pull requests touched, 3 of which have been merged or closed. No new releases shipped. The project is in a bug-fix and hardening phase rather than a feature-ship cycle. The concentration of two independent security vulnerability disclosures from a single researcher (YLChen-007) within hours of each other suggests a coordinated security audit or responsible disclosure process is underway. Day-one community engagement on these issues is zero comments and zero reactions, which is expected given their recency but worth monitoring as the severity appears high.

---

## 2. Releases

**No new releases today.** No versions have been published within the last 24 hours. The project's release cadence appears to be driven by accumulated fixes and security patches rather than a time-based schedule; today's security advisories and merged fix PRs may motivate a near-term release.

---

## 3. Project Progress

Three PRs were closed or merged today, advancing setup reliability and container networking:

- **PR [#2825](https://github.com/nanocoai/nanoclaw/pull/2825) — `fix(setup)`: wait for the host socket before failing the first chat** *(merged/closed)*
  Fixes a race condition where the setup wizard's "first chat" step probes `data/cli.sock` before the host process has finished binding it. The fix makes the first-chat step retry-wait rather than immediately fail, directly improving first-run onboarding reliability.

- **PR [#2168](https://github.com/nanocoai/nanoclaw/pull/2168) — `fix(container)`: pin `host.docker.internal` to OneCLI's bridge IP in rootless Docker** *(merged/closed)*
  A long-standing fix (opened May 1) that resolves container hostname resolution when OneCLI runs on the default `bridge` Docker network. Falls back gracefully to the original `host-gateway` method. This quiet merge eliminates an entire class of Docker networking issues.

- **PR [#2829](https://github.com/nanocoai/nanoclaw/pull/2829) — `[follows-guidelines] eee` *(closed)*
  Appears to have been closed without merge, likely a test/draft PR.

---

## 4. Community Hot Topics

Today's activity is sparse on engagement (zero comments and zero reactions across all items). The most noteworthy items by nature of severity are:

- **[Issue #2828](https://github.com/nanocoai/nanoclaw/issues/2828) — [Security] A2A attachment forwarding follows a symlinked inbox, writes outside the target session root**
  A prompt-injected or compromised target agent can replace its `inbox/` with a symlink, causing the sender agent to write files to arbitrary locations on disk. This is a path traversal / arbitrary write vulnerability.

- **[Issue #2827](https://github.com/nanocoai/nanoclaw/issues/2827) — [Security] `add_mcp_server` approval flow hides runtime `args` and `env`, enabling approval smuggling**
  A self-modification approval card for adding MCP servers only shows the server name and base URL, hiding the runtime arguments and environment variables. An attacker controlling the request surface can smuggle malicious runtime configuration past human reviewers.

> **Underlying signal:** Both disclosures point to the same fundamental class of problem — **insufficient sanitization of agent-to-agent state** (symlink trust boundaries) and **incomplete audit surfaces for security-sensitive approvals**. An agent-to-agent trust model is clearly a core architectural concern for NanoClaw.

- **PR [#2795](https://github.com/nanocoai/nanoclaw/pull/2795) — `feat: add /add-clidash` read-only CLI-derived dashboard skill**
  Open since June 17, this is the oldest active PR requesting attention. It introduces a utility skill with no source changes (SKILL.md only), representing low-risk community value.

---

## 5. Bugs & Stability

**Security bugs reported today (ranked by severity):**

| Severity | Issue | Fix PR? |
|----------|-------|---------|
| 🔴 **High** | [#2828](https://github.com/nanocoai/nanoclaw/issues/2828) — Arbitrary file write via symlinked inbox in A2A attachment forwarding | No fix PR yet |
| 🔴 **High** | [#2827](https://github.com/nanocoai/nanoclaw/issues/2827) — Approval smuggling in `add_mcp_server` flow | No fix PR yet |

Both are zero-day disclosures with no mitigation PRs filed yet. Given both arrived from the same researcher within the same day, there is a reasonable chance a coordinated fix batch may follow.

**Stability fixes merged today:**
- [#2825](https://github.com/nanocoai/nanoclaw/pull/2825) — First-chat socket race condition → **merged**
- [#2168](https://github.com/nanocoai/nanoclaw/pull/2168) — Rootless Docker `host.docker.internal` pinning → **merged**

**Open stability PRs awaiting review:**
- [#2830](https://github.com/nanocoai/nanoclaw/pull/2830) — Reap dead peer service registrations (launchd/systemd plist cleanup)

---

## 6. Feature Requests & Roadmap Signals

- **[PR #2795](https://github.com/nanocoai/nanoclaw/pull/2795) — `/add-clidash`**: A read-only CLI-derived dashboard skill offers operators a live view into agent state at negligible integration cost. As a pure utility skill with no source changes, this is the fastest-to-merge feature candidate and could land in the next release cycle.

- **[PR #2826](https://github.com/nanocoai/nanoclaw/pull/2826) — Skills auto-update nudge**: Reframes `/update-nanoclaw` skill updates from "optional" to actively encouraged, with container rebuild-on-reapply. This is a policy-behavior change to the update UX, not new functionality, but it addresses a real gap where users silently miss channel/provider skill fixes.

**Prediction:** The two high-severity security issues (#2828, #2827) are likely to be prioritized ahead of features. If follow-up fix PRs materialize quickly, expect a **security patch release** incorporating #2828 + #2827 fixes alongside #2830 and #2825/#2168 rather than a feature release.

---

## 7. User Feedback Summary

- **Onboarding reliability**: The merged fix in #2825 reveals a real user pain point — users are hitting a race condition during very-first setup, causing an immediate failure impression. This is particularly damaging because the "first chat" step is a brand-new-user moment.

- **Docker networking**: PR #2168 (opened May 1, merged today) was a long-pending fix for rootless Docker users. The month-long gap before merge suggests this was either deprioritized or complex to validate, but its eventual merge indicates maintainers recognized it was blocking a non-trivial user segment.

- **Security review experience**: Both security issues were filed by the same external researcher (YLChen-007) with zero community discussion so far. No maintainer response has been posted. The professional detail in the issue write-ups (both follow an advisory template) signals this is a structured responsible-disclosure process, which is a positive signal for project maturity.

- **Skill ecosystem growth**: PR #2795's `/add-clidash` represents community interest in observability/dashboard tooling, suggesting operators want more visibility into agent state.

---

## 8. Backlog Watch

| Priority | Item | Age | Status | Risk |
|----------|------|-----|--------|------|
| 🔴 **Immediate** | [#2828](https://github.com/nanocoai/nanoclaw/issues/2828) — Symlink inbox arbitrary write | 1 day | Open, unassigned | Data integrity, privilege boundary |
| 🔴 **Immediate** | [#2827](https://github.com/nanocoai/nanoclaw/issues/2827) — MCP server approval smuggling | 1 day | Open, unassigned | Supply-chain / config injection |
| 🟡 **Soon** | [#2830](https://github.com/nanocoai/nanoclaw/pull/2830) — Reap dead peer service registrations | 1 day | Open PR | Accumulated orphaned launchd/systemd units |
| 🟡 **Soon** | [#2826](https://github.com/nanocoai/nanoclaw/pull/2826) — Update-skills nudge & rebuild | 1 day | Open PR | Users missing upstream skill fixes |
| 🟢 **Waiting** | [#2795](https://github.com/nanocoai/nanoclaw/pull/2795) — `/add-clidash` dashboard skill | 5 days | Open PR, no review | Low risk, pure utility skill |

**Key concern:** The two security issues have no maintainer response or fix PRs yet. Given their severity (arbitrary file write, approval flow bypass), these should be triaged and acknowledged promptly. The 5-day-old PR #2795 is a low-effort community contribution that could be reviewed to maintain contributor goodwill while security work proceeds.

---

*Data snapshot: 2026-06-22 | Source: [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-22

---

## 1. Today's Overview

NullClaw shows **low activity** today with no code changes or releases. One issue saw continued discussion over the past 24 hours. The project appears to be in a **maintenance/bug-fix phase** rather than active feature development. The lack of new PRs and releases suggests short-term stability but also limited immediate responsiveness to recent bug reports.

---

## 2. Releases

**None.** No new versions deployed in the past 24 hours.

---

## 3. Project Progress

- **No PRs merged or closed** today. Features and fixes have not advanced recently, and no code changes are visible.

---

## 4. Community Hot Topics

Most discussed issue:

- [Issue #967](https://github.com/nullclaw/nullclaw/issues/967) — **[bug] error: NoResponseContent**
  - `👍`: 0 | Comments: 1
  - **Underlying need**: A user on Windows 11 using `Agnes-2.0-Flash` reports frequent `NoResponseContent` errors that break agent workflows. They compare behavior to `picocla…` (truncated), seeking a fix or workaround. This points to reliability concerns with specific model integrations.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|-----------|--------|--------|--------|
| 🟠 **Medium-High** | [Issue #967](https://github.com/nullclaw/nullclaw/issues/967) — `NoResponseContent` error with `Agnes-2.0-Flash` | Open, recently commented | None |

- **Crash/regression**: Not confirmed yet, but error occurs in **>50% of interactions** (12 of 21 conversations), indicating high reproducibility.
- **No fix PR exists**; maintainer attention is needed.

---

## 6. Feature Requests & Roadmap Signals

- **No explicit feature requests** appeared in the last 24 hours.
- Implicit signal: Users appear to use NullClaw with various models (e.g., `Agnes-2.0-Flash`). Better **multi-model support** or error resilience for third-party models may be a future focus.

---

## 7. User Feedback Summary

- **Pain point**: `NoResponseContent` errors break agent workflows on Windows with certain model configurations.
- **Satisfaction**: No positive or negative trends from recent PR/issue activity to assess.
- **Use case**: Users run NullClaw with local/third-party LLMs (`Agnes-2.0-Flash`); model compatibility is important to them.

---

## 8. Backlog Watch

- [Issue #967](https://github.com/nullclaw/nullclaw/issues/967) — **Recently updated, no maintainer comment yet**, but shows clear reproduction info and high impact. This may escalate if unaddressed.

---

*Data cut-off: 2026-06-22. Source: [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-22

---

## 1. Today's Overview

IronClaw is in a period of intense development activity, with **29 PRs updated in the last 24 hours** (15 open, 14 merged/closed) and 3 issues touched. The project is clearly in a heavy iteration cycle around the **Reborn** subsystem — spanning learning systems, OAuth token management, concurrent turn execution, and CI/CD hardening. No new releases were published today. The volume of closed PRs (14) indicates a highly productive day with significant throughput on both feature work and infrastructure fixes. The project health signal is strong: contributors are shipping, merging, and stacking PRs in a disciplined manner.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours.

---

## 3. Project Progress

### Merged / Closed PRs (14 items)

| # | PR | Key Detail |
|---|-----|-----------|
| [5118](https://github.com/nearai/ironclaw/pull/5118) | ci(reborn): share one Rust cache across the closure | Fixed per-crate cache LRU eviction that caused ~30+ GB of competing caches and flaky re-downloads |
| [5115](https://github.com/nearai/ironclaw/pull/5115) | ci(reborn): retry crates.io network failures | Added `CARGO_NET_RETRY` to the 64-crate closure to mitigate transient registry SSL/HTTP2 failures |
| [5113](https://github.com/nearai/ironclaw/pull/5113) | ci: extract cross-cutting jobs into `platform-and-compat.yml` | Refactored CI by extracting platform/compatibility jobs from `test.yml` into a standalone workflow |
| [5065](https://github.com/nearai/ironclaw/pull/5065) | feat(triggers): one-shot scheduled triggers | Shipped `TriggerSchedule::Once { at, timezone }` — first-class one-shot (fire-once) scheduled triggers alongside recurring Cron |
| [2927](https://github.com/nearai/ironclaw/pull/2927) | fix(channels): wire `load_startup_active_channels` for first-run fallback | Fixed clean-install boot where WASM channels stayed inactive despite setup wizard selection |
| [4990](https://github.com/nearai/ironclaw/pull/4990) | fix(reborn): NEAR AI MCP ready state projection | Stopped projecting NEAR AI MCP runtime credentials as browser-managed extension requirements |
| [4876](https://github.com/nearai/ironclaw/pull/4876) | build(deps): bump everything-else group (43 updates) | Major dependency bump including `agent-client-protocol` 0.10.4→0.14.0, `refinery` 0.8.16→0.9.2 |
| [4499](https://github.com/nearai/ironclaw/pull/4499) | build(deps): bump tokio-ecosystem group (3 updates) | Updated `tokio-tungstenite`, `tokio-postgres-rustls`, `hyper` |
| [4830](https://github.com/nearai/ironclaw/pull/4830) | ci: run Reborn E2E in the merge queue | Added `merge_group` trigger to `reborn-e2e.yml` so Reborn changes now gate on deterministic Rust contract + Playwright smoke tests before merge |

**Key themes shipped today:**
- **CI/CD hardening** dominated the merge queue — 4 PRs specifically targeting CI reliability (caching, network retries, workflow extraction, merge-queue E2E gating). This is a direct response to the recurring nightly E2E failures tracked in [#4108](https://github.com/nearai/ironclaw/issues/4108).
- **One-shot triggers** landed as a first-class feature, completing the automations surface.
- **Channel boot reliability** fixed for first-run experiences — a long-standing issue (opened April 24) finally resolved.

---

## 4. Community Hot Topics

### Most Active PRs (by update recency and scope)

1. **[#4975](https://github.com/nearai/ironclaw/pull/4975) — reborn(learning) WS-3: lightweight reflection service** (OPEN, size: XL)
   - Third in the Reborn learning system stack (WS-1 → WS-2 → WS-3). Adds background reflection that turns failures/corrections into learning signals. This is the capstone of a multi-PR learning architecture.

2. **[#5109](https://github.com/nearai/ironclaw/pull/5109) — feat(reborn): read-only + gated-write connector route (Composio)** (OPEN, size: XL)
   - Adds Composio connector routes to the IronClaw Desktop Workbench for live data population. A new contributor (`abbyshekit`) is driving this — signals ecosystem expansion.

3. **[#5085](https://github.com/nearai/ironclaw/pull/5085) — feat(reborn): concurrent turn execution via TurnRunScheduler** (OPEN, size: XL)
   - Moves Reborn from strictly serial turn execution to concurrent with per-user/per-type caps. This is a significant runtime performance improvement.

4. **[#5081](https://github.com/nearai/ironclaw/pull/5081) — Add hosted single-tenant Postgres profile** (OPEN, size: XL, DB MIGRATION)
   - Enables a hosted preview path with PostgreSQL-backed durable state. Critical for the hosted deployment story.

**Underlying needs:** The community is clearly pushing toward **Reborn maturity** — learning systems, concurrency, hosted deployment, and third-party integrations (Composio). The stacked PR pattern (WS-1/2/3) suggests a deliberate, architectural approach rather than ad-hoc feature work.

---

## 5. Bugs & Stability

### Issues Updated Today

| Severity | Issue | Status | Description |
|----------|-------|--------|-------------|
| 🔴 **High** | [#5071](https://github.com/nearai/ironclaw/issues/5071) — Proactively refresh Google OAuth tokens before expiry | **CLOSED** | Google OAuth access tokens expiring every hour forced reauthentication. The durable credential should be the refresh token. *No linked fix PR visible in today's data — likely resolved by a PR not in the top 20 list.* |
| 🟡 **Medium** | [#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failed | **OPEN** (since May 27) | Recurring nightly E2E failures. Multiple CI hardening PRs merged today (#5118, #5115, #5113, #4830) directly address root causes. |
| 🟢 **Low** | [#5117](https://github.com/nearai/ironclaw/issues/5117) — Automations: add "Completed" summary card | **OPEN** | Enhancement request for a COMPLETED card in the Automations summary strip. Pairs with the Completed filter tab from PR #5065. |

**Stability assessment:** The high-severity OAuth issue was closed today — good signal. The chronic E2E flakiness is being attacked on multiple fronts (caching, retries, merge-queue gating). No new crash or regression bugs were reported today.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood | Signal |
|---------|-------|------------|--------|
| Automations "Completed" summary card | [#5117](https://github.com/nearai/ironclaw/issues/5117) | **High** | Natural companion to PR #5065 (one-shot triggers + Completed filter tab). The 6th grid cell is explicitly noted as "currently empty." |
| Reborn learning system (WS-1/2/3) | [#4937](https://github.com/nearai/ironclaw/pull/4937), [#4975](https://github.com/nearai/ironclaw/pull/4975) | **Very High** | Actively in progress, stacked PRs being reviewed. "Learn from mistakes, never repeat" — Hermes parity goal. |
| Concurrent turn execution | [#5085](https://github.com/nearai/ironclaw/pull/5085) | **High** | Open PR, addresses a clear performance bottleneck (serial execution). |
| Hosted single-tenant Postgres | [#5081](https://github.com/nearai/ironclaw/pull/5081) | **High** | Open PR with DB migration, explicitly framed as the "hosted preview path." |
| Composio connector integration | [#5109](https://github.com/nearai/ironclaw/pull/5109) | **Medium-High** | Draft PR from new contributor, expands Workbench ecosystem. |

**Predicted next release themes:** Reborn learning system completion, concurrent execution, one-shot triggers (already merged), and CI/CD stability improvements. The hosted Postgres profile may land in a preview/beta channel first.

---

## 7. User Feedback Summary

**Pain points identified today:**

1. **OAuth token churn** — Users were forced to reauthenticate every hour when Google OAuth access tokens expired. The expectation is that refresh tokens should handle this transparently. *(Issue [#5117](https://github.com/nearai/ironclaw/issues/5117) closed — fix shipped.)*

2. **First-run channel activation failure** — On clean installs, WASM channels selected during setup remained inactive at boot. This is a critical onboarding friction point. *(PR [#2927](https://github.com/nearai/ironclaw/pull/2927) merged — fixed.)*

3. **CI/CD unreliability** — Recurring nightly E2E failures and flaky CI runs due to cache eviction and network issues. While not a direct user-facing bug, this slows feature delivery and erodes contributor confidence. *(Multiple PRs merged today to address.)*

4. **Automations UX gap** — Users want visibility into completed (one-shot) automations via a summary card, not just a filter tab. The data exists; the UI surface is incomplete. *(Issue [#5117](https://github.com/nearai/ironclaw/issues/5117) open.)*

**Satisfaction signals:** The rapid closure of the high-severity OAuth bug and the channel boot fix suggest responsive maintenance. The disciplined PR stacking and merge cadence indicates a healthy contributor workflow.

---

## 8. Backlog Watch

| Item | Age | Risk | Recommendation |
|-----|-----|------|----------------|
| **[#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failed** | 26 days (since May 27) | **High** — Chronic CI flakiness blocks confident merging | Multiple fix PRs merged today. Monitor if nightly runs stabilize over the next week. Consider closing if 5 consecutive green runs occur. |
| **[#4002](https://github.com/nearai/ironclaw/pull/4002) — build(deps): bump actions group (16 updates)** | 29 days (since May 24) | **Medium** — Stale dependency bump, includes `actions/checkout` 4→7 (major version jump) | Needs review/merge or close. Major version bumps in GitHub Actions carry workflow compatibility risk. |
| **[#4032](https://github.com/nearai/ironclaw/pull/4032) — build(deps): bump wasm group (2 updates)** | 28 days (since May 25) | **Low** — `wit-component` and `wit-parser` updates | Low risk, but stale. Review and merge or close. |
| **[#4498](https://github.com/nearai/ironclaw/pull/4498) — build(deps): bump serde_yml 0.0.12→0.0.13** | 48 days (since Jun 5) | **Low** — Serialization dependency | Very stale for a minor bump. Close or merge promptly. |
| **[#2927](https://github.com/nearai/ironclaw/pull/2927) — fix(channels): first-run fallback** | 59 days (since Apr 24) | **Resolved** — Merged today | ✅ No longer needs attention. |

**Maintainer action items:**
- Review and merge or close the 3 stale dependabot PRs (#4002, #4032, #4498) — they're accumulating merge conflict risk.
- Monitor [#4108](https://github.com/nearai/ironclaw/issues/4108) for resolution confirmation after this week's CI hardening.
- Prioritize review of the stacked Reborn learning PRs (#4937 → WS-2 → #4975) to unblock the learning system feature.

---

*Data source: GitHub nearai/ironclaw, snapshot 2026-06-22. Analysis by OWL.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-22

---

## 1. Today's Overview

LobsterAI had a quiet day on the code-merge front: **no pull requests** were opened, merged, or closed in the last 24 hours, and **no new releases** were published. However, **15 issues were updated**, of which **14 were closed** (all marked `[stale]`) and **1 new open issue** appeared. The bulk of the closed issues are carry-over bugs and feature requests from early April 2026 that were auto-closed inactivity, reflecting a **large stale backlog finally being cleaned up**. The single new open item is a **security advisory**, which immediately raises the day's risk profile.

---

## 2. Releases

**None.** No new versions were shipped on 2026-06-22. There are no breaking changes, migration notes, or changelog items to report.

---

## 3. Project Progress

**No PRs merged or closed today.** The project's progress in the last 24 hours is limited to issue triage/cleanup — 14 stale issues were closed without resolution. No feature development or bug fixes were integrated into the main branch.

---

## 4. Community Hot Topics

The issues with the most comments (each with 3 comments) are:

| Issue | Title | Comments | Link |
|-------|-------|----------|------|
| #1509 | Skills 文件长时间生成阻塞无法感知，中间态过程无展示 | 3 | [github.com/netease-youdao/LobsterAI/issues/1509](https://github.com/netease-youdao/LobsterAI/issues/1509) |
| #1500 / #1502 / #1506 / #1512 / #1516 | Various skill/IM/UI issues | 2 each | [github.com/netease-youdao/LobsterAI/issues/1500](https://github.com/netease-youdao/LobsterAI/issues/1500), [1502](https://github.com/netease-youdao/LobsterAI/issues/1502), [1506](https://github.com/netease-youdao/LobsterAI/issues/1506), [1512](https://github.com/netease-youdao/LobsterAI/issues/1512), [1516](https://github.com/netease-youdao/LobsterAI/issues/1516) |

The most commented issue (#1509) reveals a core UX pain point: **the skills generation process provides no intermediate feedback or thinking-state visibility**, leaving users blind to whether the agent is working or stuck. Multiple other issues trace back to a common underlying need — **real-time state synchronization between UI panels and Redux store** (e.g., activeSkillIds not reflecting disabled skills, Agent settings changes not propagating to the current session). The community is effectively asking for a more responsive, state-consistent UI layer.

---

## 5. Bugs & Stability

### 🔴 High — Security
| Severity | Issue | Status | Link |
|----------|-------|--------|------|
| **High** | #2181: LobsterAI restores private-network browser access by default and weakens the bundled OpenClaw SSRF guard | **OPEN** | [github.com/netease-youdao/LobsterAI/issues/2181](https://github.com/netease-youdao/LobsterAI/issues/2181) |

This is a newly filed security advisory (created 2026-06-21, 0 comments so far) describing two risks: (1) browser proxy defaults re-enabling private-network access, and (2) a weakened SSRF guard in the bundled OpenClaw component. **No fix PR exists.** This warrants urgent maintainer attention.

### 🟡 Medium — Functional Bugs (all closed as stale)
| Issue | Summary | Link |
|-------|---------|------|
| #1500 | Disabled skills remain in `activeSkillIds` and continue to be injected into prompts — Redux state bug in `skillSlice.ts` | [Link](https://github.com/netease-youdao/LobsterAI/issues/1500) |
| #1502 | Agent settings panel saves skills list but current session's `activeSkillIds` doesn't sync until switching agents | [Link](https://github.com/netease-youdao/LobsterAI/issues/1502) |
| #1504 | IM bot (Popo) AES Key field missing required validation — saves successfully while empty | [Link](https://github.com/netease-youdao/LobsterAI/issues/1504) |
| #1506 | Scheduled tasks allow IM notification channel selection without picking a session — silent delivery failure at runtime | [Link](https://github.com/netease-youdao/LobsterAI/issues/1506) |
| #1512 | QQ Bot group allowlist UI has no input box to add group IDs — allowlist mode is non-functional | [Link](https://github.com/netease-youdao/LobsterAI/issues/1512) |
| #1516 | Closing Settings panel during GitHub Copilot OAuth polling doesn't abort it — token silently lost if auth succeeds after panel close | [Link](https://github.com/netease-youdao/LobsterAI/issues/1516) |
| #1518 | CI: `labeler.yml` workflow fails with permission error; lint `--max-warnings=0` strategy not documented | [Link](https://github.com/netease-youdao/LobsterAI/issues/1518) |

All were auto-closed as stale but represent **real functional regressions** that should be re-opened or tracked explicitly, particularly the skill state sync bugs (#1500, #1502) which compound the core UX complaint.

---

## 6. Feature Requests & Roadmap Signals

All closed as stale, but the clustering suggests high user demand:

| Issue | Feature Request | Predicted Priority |
|-------|---------------|-------------------|
| #1525 | Session color-coding/annotation for visual differentiation | High — frequently requested in productivity tools |
| #1528 | Batch export of multiple sessions (currently only batch delete) | High — data backup/migration is a fundamental need |
| #1532 | Local usage statistics panel in Settings (total sessions, messages, daily activity) | Medium — nice-to-have for power users |
| #1537 | Message bookmarking/starring within long conversations | High — directly addresses #1509's complaint about information retrieval in long chats |
| #1541 | Session tagging and label-based filtering | High — natural companion to #1525 and #1528 |

**Prediction:** The strongest roadmap signals point toward **session management enhancements** (color labels, tags, batch export, usage stats) forming a cohesive "power user" update. The **message bookmarking** feature (#1537) could also serve as a partial remedy for the skills-generation opacity issue (#1509), as it reflects a broader need for better information management within conversations.

---

## 7. User Feedback Summary

**Dominant pain points:**

1. **Blind agent execution (Issue #1509):** The most-discussed issue. Users cannot observe intermediate thinking states during long-running operations (e.g., skill generation). No progress indicators, no error surface — the user is left waiting with zero feedback. This fundamentally undermines trust in the agent loop.

2. **UI state inconsistency (Issues #1500, #1502):** Skills disabled in the manager still activate in conversations. Saving agent settings doesn't propagate until the agent is switched. The Redux store and UI are drifting out of sync, creating a "did it actually save?" anxiety.

3. **Validation gaps leading to silent failures (Issues #1504, #1506):** Empty required fields (AES Key) save successfully. Scheduled tasks with no delivery target are created without warning. Users discover failures only at runtime, with no error messaging.

4. **Inconsistent IM bot configuration UX (Issue #1512):** QQ Bot's group allowlist lacks the input controls that Feishu and DingTalk already have, creating an uneven cross-platform experience.

**User archetype:** The most active reporters (MaoQianTu, xuzx-code, jimmy-xz) appear to be **advanced users** integrating LobsterAI with multiple IM platforms and building custom skills — exactly the power-user cohort whose workflow polish should be prioritized.

**Satisfaction signal:** Low 👍 counts across all issues suggest either a small community or passive dissatisfaction. The closure of 14 legitimate issues as "stale" without resolution risks further eroding contributor trust.

---

## 8. Backlog Watch

The following items deserve proactive re-engagement from maintainers:

| Item | Concern | Recommended Action |
|------|---------|-------------------|
| [#2181 (OPEN)](https://github.com/netease-youdao/LobsterAI/issues/2181) | Security advisory — SSRF guard weakening + private-network browser access re-enabled by default | **Immediate:** Acknowledge, assess severity, and publish a security patch or advisory response |
| [#1500](https://github.com/netease-youdao/LobsterAI/issues/1500), [#1502](https://github.com/netease-youdao/LobsterAI/issues/1502) | Skill state sync bugs — likely same root cause in `skillSlice.ts` | Re-open, label as confirmed, batch into a single fix PR |
| [#1509](https://github.com/netease-youdao/LobsterAI/issues/1509) | Most-commented issue; core UX gap (no intermediate thinking-state visibility) | Prioritize for the next sprint — this is the #1 user-facing frustration |
| [#1518](https://github.com/netease-youdao/LobsterAI/issues/1518) | CI infrastructure failures (labeler permissions, lint config) | Low effort fix that improves contributor experience; should not remain closed |

> ⚠️ **Key risk:** The stale-closure of 14 issues without triage or resolution, combined with a new unfixed security advisory, paints a picture of **limited maintainer bandwidth**. Community contributors who filed these issues (especially MaoQianTu, who filed 6) may disengage if their contributions are silently discarded. A proactive triage label (e.g., "confirmed," "backlog," "wontfix-with-explanation") would be far healthier than automated stale closure.

---

*Data cut-off: 2026-06-22 00:00 UTC. Source: github.com/netease-youdao/LobsterAI*

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

# CoPaw Project Digest — 2026-06-22

**Repository:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) (QwenPaw)

---

## 1. Today's Overview

CoPaw (QwenPaw) is experiencing a **high-activity development day** with 16 issues updated (13 open, 3 closed) and 32 pull requests updated (30 open, 2 closed/merged). The project is clearly in a **mobile responsiveness sprint** — a remarkable ~10 open PRs in the last 24h target mobile layout fixes across nearly every console page (Channels, Sessions, CronJobs, Security, Agent Config, Skill Pool, Models, Chat header). No new releases were published today. The volume of open PRs (30) significantly outpaces merged ones (2), suggesting the project may be accumulating a review backlog. Several regressions from the v1.1.12 release remain active and unresolved.

---

## 2. Releases

**No new releases today.** The latest known version referenced in issues is **v1.1.12.post1**. Multiple open bugs are explicitly tied to regressions introduced in v1.1.12.

---

## 3. Project Progress

### Merged / Closed PRs (2)

| # | PR | Summary |
|---|-----|---------|
| [#5365](https://github.com/agentscope-ai/CoPaw/pull/5365) | ~~feat(console): mobile responsive layout for Agent Config page~~ | **Closed** (superseded by #5366) |
| [#5359](https://github.com/agentscope-ai/CoPaw/pull/5359) | ~~feat(console): enhance PR #5350 with marquee and centered menu~~ | **Closed** (likely folded into #5350 or replaced) |

### Key Open PRs Advancing

| # | PR | Significance |
|---|-----|-------------|
| [#5324](https://github.com/agentscope-ai/CoPaw/pull/5324) | fix(files): use inline content-disposition for file preview | **Fixes regression #5320** — `send_file_to_user` images not displaying after v1.1.12 switched to `FileResponse` |
| [#5334](https://github.com/agentscope-ai/CoPaw/pull/5334) | feat(ui): allow switching agent in collapsed sidebar mode | **Addresses #5329** — agent switching in compact/mobile sidebar |
| [#5357](https://github.com/agentscope-ai/CoPaw/pull/5357) | fix(#5354): release session switch lock on embedded mode completion | **Fixes #5354** — session switching getting stuck in embedded mode |
| [#5321](https://github.com/agentscope-ai/CoPaw/pull/5321) | feat(context): scroll context manager — durable history + recall REPL | **New feature** — alternative context management strategy to native compression |
| [#5193](https://github.com/agentscope-ai/CoPaw/pull/5193) | feat(channels): add Slack channel support with Socket Mode and streaming | **New feature** — Slack channel integration |
| [#5347](https://github.com/agentscope-ai/CoPaw/pull/5347) | fix(crons): drop invalid jobs.json entries on startup (migration) | **Fixes #4835** — cron job migration robustness |

---

## 4. Community Hot Topics

### Most Commented Issues

| # | Issue | Comments | Topic |
|---|-------|----------|-------|
| [#5329](https://github.com/agentscope-ai/CoPaw/issues/5329) | Add agent switch button in collapsed sidebar (mobile) | 5 | Mobile UX — agent switching and new-chat button inaccessible in compact sidebar on mobile browsers |
| [#5353](https://github.com/agentscope-ai/CoPaw/issues/5353) | Feishu group chat always requires @ mention to respond | 3 | Feishu channel configuration — mention-required setting not respected |
| [#5345](https://github.com/agentscope-ai/CoPaw/issues/5345) | Custom OpenAI-compatible providers don't support function calling | 3 | Provider compatibility — OMLX and similar custom providers lack tool/function calling |
| [#5322](https://github.com/agentscope-ai/CoPaw/issues/5322) | Real-time UI update and voice notification for API messages | 2 | API-to-UI real-time sync — messages via `POST /api/console/chat` don't appear without page refresh |
| [#5344](https://github.com/agentscope-ai/CoPaw/issues/5344) | `/api/console/chat` returns 200 but silently drops messages when agent busy | 2 | API reliability — silent message loss with no error feedback |
| [#5354](https://github.com/agentscope-ai/CoPaw/issues/5354) | Message queue cross-talk between agents; session switch stuck | 2 | Message routing — new message queue feature causes messages to route to wrong agent |

### Analysis of Underlying Needs

1. **Mobile-first UX is the dominant theme.** The sheer volume of mobile-related PRs and issues (sidebar agent switching, page responsiveness across 6+ pages) signals that a significant portion of the user base accesses QwenPaw via mobile browsers. The project is playing catch-up on mobile support.

2. **Multi-agent workflow pain.** Issues #5354 (cross-talk), #5329 (agent switching), and #5327 (agent office chat button) all point to users managing **multiple agents simultaneously** and needing better orchestration UX.

3. **API reliability and real-time feedback.** Issues #5344 and #5322 reveal that programmatic API users (agent-to-agent communication, external integrations) lack reliable delivery guarantees and real-time UI updates.

---

## 5. Bugs & Stability

### Ranked by Severity

| Severity | # | Bug | Fix PR? |
|----------|---|-----|---------|
| 🔴 **High** | [#5344](https://github.com/agentscope-ai/CoPaw/issues/5344) | `/api/console/chat` silently drops messages (HTTP 200 but lost) | None yet |
| 🔴 **High** | [#5354](https://github.com/agentscope-ai/CoPaw/issues/5354) | Message queue cross-talk between agents + session switch stuck | [#5357](https://github.com/agentscope-ai/CoPaw/pull/5357) open |
| 🔴 **High** | [#5353](https://github.com/agentscope-ai/CoPaw/issues/5353) | Feishu group chat ignores mention-required config (closed but may need verification) | Closed, fix TBD |
| 🟠 **Medium** | [#5320](https://github.com/agentscope-ai/CoPaw/issues/5320) | `send_file_to_user` images not displaying after v1.1.12 upgrade | [#5324](https://github.com/agentscope-ai/CoPaw/pull/5324) open |
| 🟠 **Medium** | [#5345](https://github.com/agentscope-ai/CoPaw/issues/5345) | Custom OpenAI-compatible providers lack function calling | None yet |
| 🟠 **Medium** | [#5328](https://github.com/agentscope-ai/CoPaw/issues/5328) | Agent hangs during DeepSeek thinking phase | None yet |
| 🟠 **Medium** | [#5333](https://github.com/agentscope-ai/CoPaw/issues/5333) | Agent stuck but UI shows submit instead of stop button | None yet |
| 🟡 **Low** | [#5358](https://github.com/agentscope-ai/CoPaw/issues/5358) | TypeError in ui-vendor bundle during session switch (intermittent) | None yet |
| 🟡 **Low** | [#5330](https://github.com/agentscope-ai/CoPaw/issues/5330) | Zhipu provider: supplier test passes but all model tests fail | None yet |

### Regression Watch

Three bugs (#5320, #5328, #5333) are explicitly tied to the **v1.1.12 upgrade**, indicating that release introduced regressions in file sending, DeepSeek compatibility, and UI state management.

---

## 6. Feature Requests & Roadmap Signals

| # | Request | Likelihood of Next Version |
|---|---------|---------------------------|
| [#5329](https://github.com/agentscope-ai/CoPaw/issues/5329) | Agent switch button in collapsed sidebar | **High** — PR [#5334](https://github.com/agentscope-ai/CoPaw/pull/5334) already open |
| [#5327](https://github.com/agentscope-ai/CoPaw/issues/5327) | Agent Office: direct chat + session switch from agent cards | **Medium** — no PR yet, but aligns with multi-agent UX push |
| [#5351](https://github.com/agentscope-ai/CoPaw/issues/5351) | Automatic model failover in `model_factory.py` | **Medium** — `RoutingChatModel` code exists but is never instantiated; low-effort activation |
| [#5316](https://github.com/agentscope-ai/CoPaw/issues/5316) | Recency-aware ranking for `memory_search` daily notes | **Low-Medium** — nice-to-have enhancement |
| [#5342](https://github.com/agentscope-ai/CoPaw/issues/5342) | Hard cap on tool result size at execution layer | **Medium** — defense-in-depth for context explosion; no PR yet |
| [#5193](https://github.com/agentscope-ai/CoPaw/pull/5193) | Slack channel support | **High** — PR already open and active |

**Prediction:** The next release (likely v1.1.13 or v1.2.0) will focus on **mobile responsiveness**, **v1.1.12 regression fixes** (file sending, DeepSeek hangs), and **Slack channel support**. The mobile PR blitz (10+ PRs) suggests this is being batched for a coordinated release.

---

## 7. User Feedback Summary

### Pain Points

- **Mobile experience is broken.** Users accessing via mobile browser cannot switch agents (#5329), buttons overflow off-screen, and most console pages are unusable on narrow viewports. This is the single most impactful UX gap.
- **v1.1.12 regressions eroded trust.** Image sending broke, DeepSeek thinking hangs appeared, and the stop button disappeared. Users on the upgrade path hit multiple regressions simultaneously.
- **Multi-agent workflows are fragile.** The new message queue (#5354) introduced cross-talk between agents, and session switching gets stuck. Users managing multiple agents are the most affected.
- **Silent failures are frustrating.** API messages returning HTTP 200 but being silently dropped (#5344) is a critical reliability issue for programmatic users.
- **Custom provider support is incomplete.** Users with OpenAI-compatible providers (OMLX) get text-only responses without function calling (#5345), despite the API supporting it.

### Satisfaction Signals

- Users are **actively contributing PRs** (many first-time contributors in today's batch), indicating a healthy and welcoming community.
- The message queue feature in v1.1.12 was acknowledged as "a great improvement" (#5354) despite its bugs.
- Mobile users are **resourceful** — accessing the backend via phone browser and filing detailed issues with screenshots.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| # | Issue | Age | Why It Needs Attention |
|---|-------|-----|----------------------|
| [#5344](https://github.com/agentscope-ai/CoPaw/issues/5344) | Silent message drop on `/api/console/chat` | 2 days | **No PR, no response.** Silent data loss is a critical reliability bug. Needs acknowledgment and prioritization. |
| [#5345](https://github.com/agentscope-ai/CoPaw/issues/5345) | Custom OpenAI providers lack function calling | 2 days | **No PR, no response.** Blocks users with custom model providers. Likely a configuration or routing issue. |
| [#5328](https://github.com/agentscope-ai/CoPaw/issues/5328) | DeepSeek thinking hang | 3 days | **No PR, no response.** Affects a popular model provider across all platforms (web, console, Tauri). |
| [#5330](https://github.com/agentscope-ai/CoPaw/issues/5330) | Zhipu model-level connection failures | 3 days | **No PR, no response.** Affects all Zhipu models despite supplier-level test passing. |
| [#5351](https://github.com/agentscope-ai/CoPaw/issues/5351) | Model failover never instantiated | 1 day | **Quick win** — the code exists but is wired up nowhere. Could be a small fix. |

### PRs Aging Without Review

| # | PR | Age | Notes |
|---|-----|-----|-------|
| [#5040](https://github.com/agentscope-ai/CoPaw/pull/5040) | fix(crons): tolerate invalid jobs in jobs.json | 13 days | Superseded by #5040→#5347 approach; needs closure decision |
| [#5097](https://github.com/agentscope-ai/CoPaw/pull/5097) | fix(security): Shield icon centering | 11 days | Trivial CSS fix, no review activity |
| [#5193](https://github.com/agentscope-ai/CoPaw/pull/5193) | feat(channels): Slack channel support | 7 days | Significant feature PR, no review comments |

---

**Overall Project Health:** 🟡 **Moderate** — High development velocity with strong community contributions, but accumulating PR review backlog, multiple unaddressed regressions from v1.1.12, and critical bugs without maintainer response. The mobile responsiveness push is commendable and necessary, but stability issues should be prioritized before the next feature release.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-06-22

---

## 1. Today's Overview

ZeptoClaw saw minimal but meaningful activity in the last 24 hours, with one issue and one pull request both closed/merged on June 21 (updated within the 24h window). No new issues or PRs remain open — a quiet day indicating the previous round of work landed cleanly. The project has been squarely focused on **binary size governance** in its CI pipeline, a concern the team has flagged as strategic ("6MB binary is THE strategic moat — does this still fit on a robot?"). No new releases have shipped. Overall project health appears stable with disciplined CI tooling maintenance.

---

## 2. Releases

No new releases in the reporting window.

---

## 3. Project Progress

- **PR #611** — *chore(ci): promote binary-size to PR gate at 7.5MB* — **Merged/Closed** on 2026-06-21.
  This PR transforms the existing `binary-size` CI job from a limited push-to-main check into a **gate on every PR**, and slightly raises the threshold from the originally discussed 7 MB to 7.5 MB. Coupled with Issue #537 (same-day close), this completes a focused effort: ZeptoClaw now actively rejects PRs whose release-stripped binary exceeds the budget.

  🔗 [qhkm/zeptoclaw PR #611](https://github.com/qhkm/zeptoclaw/pull/611)

---

## 4. Community Hot Topics

Activity was very thin today. Both the sole issue (#537) and sole PR (#611) carry **0 comments and 0 reactions**, suggesting these were straightforward maintainer-driven housekeeping items rather than community disputes or discussions.

- **Issue #537** — *[chore, P1-critical] chore(ci): binary size budget gate (fail PR if zeptoclaw > 7MB stripped)* — Created 2026-04-23, closed 2026-06-21. This was the original tracking ticket that motivated PR #611.

  🔗 [qhkm/zeptoclaw Issue #537](https://github.com/qhkm/zeptoclaw/issues/537)

---

## 5. Bugs & Stability

**No bugs, crashes, or regressions** were reported in the last 24 hours.

---

## 6. Feature Requests & Roadmap Signals

**No user-facing feature requests** landed during this window. The project-level signal points toward **infrastructure/CI maturity** as the current priority:

- The recent #537 → #611 sequence (April issue, June resolution) suggests the team is methodically hardening CI guardrails before feature velocity would ramp up.
- With binary size now enforced per-PR, future releases may lean on this constraint to keep the "robot-footprint" narrative credible — expect upcoming release notes referencing this as a stable baseline.

---

## 7. User Feedback Summary

No community feedback (pain points, use-case reports, or satisfaction signals) was captured in this reporting window. The closed items were authored by **qhkm** (project maintainer), indicating this was internal project hygiene rather than user-motivated work.

---

## 8. Backlog Watch

- **Issue #537** — Opened **2026-04-23** (~2 months ago) before closing on 2026-06-21. This arrived with a **P1-critical** label but went without comments for two months. The fact it ultimately closed via a merged PR is good hygiene — but the latency (60 days) could signal maintainer bandwidth constraints. Consider flagging if P1-tickets routinely sit unanswered for months.
- No other backlog items surfaced in today's data slice.

---

*Owl monitoring ZeptoClaw daily. Next digest: 2026-06-23.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest — 2026-06-22**

---

### 1. Today's Overview

ZeroClaw is experiencing high development velocity with significant community contribution. Over the past 24 hours, the project saw **41 issues updated** (30 open, 11 closed) and **50 pull requests** (40 open, 10 merged/closed) — indicating a healthy, active contributor base with strong maintainer throughput. The dominant themes are **provider compatibility** (OpenAI-compatible adapters, Anthropic, Groq, Gemini), **testing/coverage expansion**, and **CI/infrastructure hardening**. No new releases were published today; the project appears to be in a pre-release development cycle toward v0.8.0. The volume of open PRs (40) suggests a growing integration queue that may need triage attention.

---

### 2. Releases

No new releases in the past 24 hours. Per the top issue (#6808), the current version is **0.8.0**, with governance RFCs and label cleanup still being rolled out.

---

### 3. Project Progress

The following PRs were merged or closed today:

| PR | Summary | Risk | Author |
|----|---------|------|--------|
| [#7835](https://github.com/zeroclaw-labs/zeroclaw/pull/7835) | `git_operations`: Added recovery hint and path context to non-repository error message | High | ZOOWH |
| [#8096](https://github.com/zeroclaw-labs/zeroclaw/pull/8096) | `install`: Fixed ARM64/Intel Mac detection for prebuilt target triple (critical install fix) | Low | JordanTheJet |
| [#7845](https://github.com/zeroclaw-labs/zeroclaw/pull/7845) | Test: Added regression for poisoned mutex recovery in tool execution | Low | ZOOWH |
| [#7859](https://github.com/zeroclaw-labs/zeroclaw/pull/7859) | Test: Covered blank-input turn rejection in Agent runtime | Low | Pick-cat |
| [#7724](https://github.com/zeroclaw-labs/zeroclaw/pull/7724) | Lark/Feishu: Respect `ack_reactions` config before sending fast-ack | Medium | dwc1997 |
| [#7687](https://github.com/zeroclaw-labs/zeroclaw/pull/7687) | Test: Runtime blank-input turn rejection coverage | Medium | Audacity88 |
| [#7740](https://github.com/zeroclaw-labs/zeroclaw/pull/7740) | Fix: Skill suggestions now base on effective tool set, not raw registry | High | Audacity88 |
| [#7807](https://github.com/zeroclaw-labs/zeroclaw/pull/7807) | Fix: Approval overlay inheriting terminal background instead of ZeroCode theme | Medium | Audacity88 |
| [#7907](https://github.com/zeroclaw-labs/zeroclaw/pull/7907) | Fix: Agent rename persistence ordering — state mutation before config write | High | Audacity88 |
| [#7810](https://github.com/zeroclaw-labs/zeroclaw/pull/7810) | Fix: git_operations low-context error outside repository | High | Audacity88 |

**Notable fix**: PR #8096 resolves a critical installation regression where Intel Macs incorrectly received ARM64 binaries — a direct user-facing blocker. The strong focus on merged test coverage PRs (#7845, #7859, #7687) reflects an ongoing campaign to close coverage gaps identified by a repository-wide audit (#7685).

---

### 4. Community Hot Topics

**Issues with the most engagement (comments + reactions):**

**[#6808 — RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** (11 comments)
The highest-discussion item today. This governance RFC proposes automated work routing via GitHub board lanes and label cleanup to reduce manual maintainer overhead. It signals the project is scaling its organizational processes to match contributor volume. The acceptance and in-progress rollout status suggests this will land in the 0.8.x cycle.

**[#2503 — [Feature]: where is napcat channel](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)** (9 comments, created March 2)
A long-standing community demand for **OneBot/NapCat channel integration**, primarily driven by Chinese-language QQ messenger users. Open since March with consistent engagement but no maintainer commitment — represents an underserved market segment.

**[#2467 — [Feature]: Webhook transforms](https://github.com/zeroclaw-labs/zeroclaw/issues/2467)** (6 comments, created March 2)
Requests custom webhook path mapping with payload transformation to support arbitrary webhook senders (e.g., GitHub, generic HTTP). Accepted but still open — users need more flexible webhook ingress for CI/CD and automation integrations.

**[#4760 — [Feature]: use tool-calling for memory consolidation](https://github.com/zeroclaw-labs/zeroclaw/issues/4760)** (4 comments, created March 26)
Proposes replacing prompt-constrained JSON output for memory consolidation with structured tool-calling (internal `save_memory` tool). This is a reliability/accuracy improvement for the core memory system. Accepted, aligns with the broader "Local-First Mode" push (#5287).

**[#6289 — [Feature]: Prompt-triggered install suggestions](https://github.com/zeroclaw-labs/zeroclaw/issues/6289)** (4 comments, created May 2)
Suggests suggesting installable skills/plugins when a user asks for an unavailable capability — a **discoverability** improvement that lowers the learning curve for ZeroClaw's growing plugin ecosystem.

**Underlying pattern**: Community demand centers on **channel expansion** (QQ, better webhooks), **local-first reliability** (compact model support, structured output), and **experience polish** (skill discovery, tool suggestions).

---

### 5. Bugs & Stability

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **S1** (workflow blocked) | [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) | MCP tools unavailable on OpenAI Responses/reasoning + Anthropic turns; model-dependent tool delivery failure | None |
| **S1** | [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | Context compression drops `assistant(tool_calls)` and `tool(result)` for OpenAI-compatible providers (MiniMax), causing tool loops and invalid role errors | None |
| **S1** | [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | Gemini CLI OAuth not working; rate-limited immediately after auth | None |
| **S1** | [#7898](https://github.com/zeroclaw-labs/zeroclaw/issues/7898) | rust_native browser snapshots and @ref selectors broken under WebDriver (two adjacent breakages) | None |
| **S1** | [#8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094) 📅 new | Anthropic provider added in Quickstart unavailable in chat until daemon reset | None |
| **S1** | [#7907](https://github.com/zeroclaw-labs/zeroclaw/issues/7907) | Agent rename moves owned state before config persistence (data integrity) | **Fixed** ✅ |
| **S2** | [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) | Prompt caching broken on Telegram channel (full reprocessing each turn) | None |
| **S2** | [#7896](https://github.com/zeroclaw-labs/zeroclaw/issues/7896) | Groq native tool messages missing `name` field | None |
| **S2** | [#4721](https://github.com/zeroclaw-labs/zeroclaw/issues/4721) | zeroclaw logs to stdout instead of stderr, polluting CLI output | None |

**Critical concern**: Issues #7756 and #6361 represent **core runtime failures** in multi-turn tool-calling with popular providers (MiniMax, OpenAI reasoning, Anthropic). These are accepted but lack fix PRs and affect fundamental agent functionality. Issue #4879 (Gemini OAuth) has been open since March and is a dedicated S1 blocker for Gemini users. Issue #8094 is brand-new today and affects Quickstart UX — a bad first-impression bug for new users.

---

### 6. Feature Requests & Roadmap Signals

**Likely candidates for the next version based on acceptance status, activity, and strategic alignment:**

| Feature | Issue | Signal Strength |
|---------|-------|----------------|
| Work Lanes / Board Automation | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 🟢 Accepted, rollout in progress — will land in 0.8.x |
| Local-First Mode (compact prompting, strict parsing) | [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | 🟡 Accepted, in-progress — aligns with provider robustness push |
| Memory consolidation via tool-calling | [#4760](https://github.com/zeroclaw-labs/zeroclaw/issues/4760) | 🟡 Accepted, adjacent to local-first work |
| OTel turn-level trace correlation | [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) | 🟡 Accepted, in-progress — observability investments clustering |
| Webhook transforms | [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) | 🟡 Accepted, needs implementation owner |
| Stronger pairing codes | [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) | 🟡 Accepted, P1 security concern |
| Slack outbound attachments | [#7170](https://github.com/zeroclaw-labs/zeroclaw/pull/7170) | 🟢 PR open for 20 days, awaiting review |
| Extra skill registries (user-configured) | [#7827](https://github.com/zeroclaw-labs/zeroclaw/pull/7827) | 🟢 PR open with maintainer validation merged |

**Strategic prediction**: The 0.8.x cycle will likely focus on **provider robustness** (tool-calling fixes, local-first mode), **observability** (OTel correlation), and **developer experience** (skill registries, board automation). Channel expansion (NapCat/QQ) remains a community wish but shows no maintainer signals.

---

### 7. User Feedback Summary

**Pain points:**

- **Provider compatibility is the #1 frustration vector**: Users are hitting workflow-blocking bugs with Gemini OAuth (#4879), MiniMax tool-call context loss (#6361), Groq message format (#7896), and MCP tool delivery (#7756). The OpenAI-compatible adapter surface is a significant source of instability.
- **Installation friction on macOS**: Intel Macs silently received ARM64 binaries (#8095/#8096) — a basic platform detection failure affecting a non-trivial user segment. Now fixed.
- **Telegram prompt caching broken** (#6360): Users on Telegram pay significantly higher token costs than CLI users due to cache bypass — a silent degradation.
- **Discovery of skills/plugins**: Users don't know what they're missing (#6289), especially as the plugin surface grows.
- **Localization gaps**: Telegram channel is being requested by Chinese users (#2503), and even Lark/Feishu outbound media had to be recently restored (#8113) — suggesting international channel support needs dedicated attention.

**Satisfaction signals:**
- The "Local-First Mode" request (#5287) has 2 👍 and describes a compelling use case: users running small local models who need compact prompts, strict parsing, and no system-prompt leakage. This is a growing segment.
- RSA/NapCat request (#2503) has 9 comments over 3+ months with no resolution — sustained unmet demand.
- The RFC process (#6808) is working well: 11 comments of structured discussion leading to acceptance and rollout.

---

### 8. Backlog Watch

These important issues have been open for extended periods without resolution or visible maintainer attention:

| Issue | Age | Risk | Description |
|-------|-----|------|-------------|
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | 112 days | Medium | NapCat/OneBot channel — sustained community demand, 9 comments, no owner |
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) | 112 days | High | Webhook transforms — accepted but unimplemented for 3+ months |
| [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | 86 days | High | Gemini CLI OAuth broken — S1, no fix PR in 3 months |
| [#4721](https://github.com/zeroclaw-labs/zeroclaw/issues/4721) | 88 days | Medium | Logging to stdout instead of stderr — 3 comments, simple fix, no PR |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | 59 days | High | Recovery tracking for 153 commits lost in bulk revert — audit infrastructure |
| [#4760](https://github.com/zeroclaw-labs/zeroclaw/issues/4760) | 88 days | High | Memory consolidation tool-calling — accepted, changes core memory behavior |
| [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) | 6 days | High | MCP tools missing on OpenAI/Anthropic turns — very new but S1, no owner yet |
| [#7926](https://github.com/zeroclaw-labs/zeroclaw/pull/7926) | 4 days | High | Restore `SKILL.md always: true` — important regression fix, awaiting review |
| [#7098](https://github.com/zeroclaw-labs/zeroclaw/pull/7098) | 20 days | High | Mattermost WebSocket mode — large PR, needs author action |

**Recommendation**: Issues #4879 (Gemini OAuth) and #2503 (NapCat) are the longest-open high-interest items whose continued inaction risks community frustration. PR #7926 and issue #7756 need rapid review as they address recent regressions.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*