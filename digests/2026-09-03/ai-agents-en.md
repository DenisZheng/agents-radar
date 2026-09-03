# OpenClaw Ecosystem Digest 2026-09-03

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-03 02:29 UTC

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

# OpenClaw Project Digest — 2026-09-03

## 1. Today's Overview

OpenClaw shows **very high velocity** with 500 issues and 500 PRs updated in the last 24 hours. The project is in active maintenance mode with a **126 merged/closed PRs** today, indicating strong throughput. However, the **352 open issues** and **374 open PRs** suggest a growing backlog. No new releases were published today. The issue landscape is dominated by **session-state bugs**, **message-delivery failures**, **multi-agent routing regressions**, and **provider-specific streaming issues** — many tagged as `P1` with `🦞 diamond lobster` (high-impact) ratings. The PR queue shows heavy investment in **Control UI polish**, **real-time voice fixes**, **release automation**, and **cross-agent session access**.

---

## 2. Releases

**No new releases today.** The latest version appears to be **2026.8.2** (referenced in issue #136262). Multiple issues (#134570, #134608) report upgrade problems from 2026.7.x → 2026.8.1, suggesting a stabilization period is needed before the next release.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary |
|----|------|---------|
| [#136719](https://github.com/openclaw/openclaw/pull/136719) | Web UI / Gateway | Show linked session participants in hovercards (was collapsed to "N others") |
| [#135934](https://github.com/openclaw/openclaw/pull/135934) | Android / iOS / macOS / Web UI / Gateway | Fix realtime Talk responsiveness through playback/interruption (supersedes #128101) |
| [#128101](https://github.com/openclaw/openclaw/pull/128101) | Android | Make realtime Talk full-duplex on built-in speaker; prove communication-audio ownership |
| [#118625](https://github.com/openclaw/openclaw/pull/118625) | Core | Main-session compaction write-lock timeout causing subagent result loss — **already fixed** |
| [#134055](https://github.com/openclaw/openclaw/pull/134055) | Core | Slack DM thread-scoped sessions regression after 2026.7.1-2 |
| [#134337](https://github.com/openclaw/openclaw/pull/134337) | Memory | `memory_search` dirty maintenance full-reindex under concurrent writes |
| [#135305](https://github.com/openclaw/openclaw/pull/135305) | Slack / Observers | Session observer disables itself after delivery failures, drops Slack messages |
| [#134608](https://github.com/openclaw/openclaw/pull/134608) | Auth | 2026.8.1 auth migration archives JSON without credentials, blocks repair |
| [#124343](https://github.com/openclaw/openclaw/pull/124343) | Sessions | `yield-owned settle-wake` parks completed subagent forever |
| [#96692](https://github.com/openclaw/openclaw/pull/96692) | Slack | Slack thread replies generated but not delivered after origin tuple lost |

**Key themes:** Session lifecycle fixes, realtime voice stability, Slack/Matrix/Telegram delivery reliability, compaction/write-lock contention, auth migration safety.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | 👍 | Core Issue |
|------|----------|-----|------------|
| [#99551](https://github.com/openclaw/openclaw/issues/99551) (Closed) | 17 | 1 | **Codex worker runaway hardening sprint** — tracker for hardening worker failure modes post-incident |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | 13 | 0 | **Cron agent stalls on DeepSeek** — `[cron:]` prefix deprioritized by DeepSeek edge |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | 13 | 6 | **MCP tools not injected into subagent sessions** — `bundle-mcp` + allowlists ignored |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) | 12 | 0 | **AgentSelectionRequiredError floods logs** — logbook, Control UI RPCs, system-agent turns lack `agentId` |
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | 12 | 1 | **MCP loopback transport doesn't auto-reconnect** after gateway restart — `recovered=1` misleading |
| [#127229](https://github.com/openclaw/openclaw/issues/127229) | 11 | 0 | **Telegram watchdog-released durable update falsely tombstoned** before transport tracker settles |
| [#123073](https://github.com/openclaw/openclaw/issues/123073) | 10 | 0 | **`openclaw update` fails on dev channel** — npm vs pnpm `workspace:*` protocol mismatch |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 10 | 1 | **Unreaped hook/tool child processes** — zombie accumulation, runtime degradation |
| [#135835](https://github.com/openclaw/openclaw/issues/135835) | 8 | 0 | **API key exhausted → recharge → cannot recover** (Chinese report) |
| [#136862](https://github.com/openclaw/openclaw/pull/136862) (PR) | — | 0 | **Perf: faster chat deep-link cold load** — compress WS frames, gate transcript warming, warm route chunks at boot |

**Underlying needs:** 
- **Reliability at scale** — zombie processes, write-lock contention, crash loops
- **Multi-agent correctness** — routing, session isolation, cross-agent access
- **Provider interop** — DeepSeek, Gemini, Kimi, OpenAI streaming quirks
- **Upgrade safety** — auth migration, state migration, pnpm/npm toolchain conflicts

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 Critical (P0 / Data Corruption / Crash Loops)
| Issue | Severity | Fix PR? |
|-------|----------|---------|
| [#123327](https://github.com/openclaw/openclaw/issues/123327) | **P0** — Shared state WAL checkpoint copies index pages over SQLite page 1 (database corruption on RPi5/ext4) | ❌ No linked PR |
| [#115424](https://github.com/openclaw/openclaw/issues/115424) | **P1** — Gateway V8 heap OOM → restart-recovery hot-resumes → 7-core-dump loop | ❌ No linked PR |
| [#134570](https://github.com/openclaw/openclaw/issues/134570) | **P1** — 2026.8.1 upgrade: gateway crash-loop + silent dispatch failures (7 blockers, misleading errors) | ❌ No linked PR |
| [#134608](https://github.com/openclaw/openclaw/issues/134608) | **P1** — Auth migration archives credentials, writes success receipt without them, **permanently blocks repair** | ✅ Closed (fixed in #134608) |

### 🟠 High (P1 / Session State / Message Loss)
| Issue | Area | Fix PR? |
|-------|------|---------|
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | Cron agent stalls on DeepSeek (prefix deprioritization) | ❌ |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | MCP tools not injected into `sessions_spawn` subagents | ❌ |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) | `AgentSelectionRequiredError` floods logs (multi-agent explicit ownership) | ❌ |
| [#127229](https://github.com/openclaw/openclaw/issues/127229) | Telegram durable update falsely tombstoned | ❌ |
| [#125570](https://github.com/openclaw/openclaw/issues/125570) | Skill Workshop update overwrites live skill `description`, breaks routing | ❌ |
| [#118185](https://github.com/openclaw/openclaw/issues/118185) | Single claude-cli turn written to transcript **twice** by two writers | ❌ |
| [#120600](https://github.com/openclaw/openclaw/issues/120600) | `AGENTS.md` never reaches model on sandboxed Codex app-server runs | ❌ |
| [#128971](https://github.com/openclaw/openclaw/issues/128971) | Telegram final reply lost when terminal receipt returns `delivery_ambiguous` | ❌ |
| [#136262](https://github.com/openclaw/openclaw/issues/136262) | OpenAI completions stream: bare `text_delta` replays full text → content doubling | ❌ |

### 🟡 Medium (P2 / UX Friction / Regressions)
| Issue | Area |
|-------|------|
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | MCP loopback transport no auto-reconnect after gateway restart |
| [#88079](https://github.com/openclaw/openclaw/issues/88079) | WebChat: `reasoning_content` not streamed for Kimi/DeepSeek (only MiniMax works) |
| [#48709](https://github.com/openclaw/openclaw/issues/48709) | Gemini 2.5 Pro: `textSignature` bloat + think tags + mixed text/tool → session failures |
| [#123652](https://github.com/openclaw/openclaw/issues/123652) | Azure/OpenAI Responses: `runtimeContextCarrier` tail relocation breaks GPT-5.6 prompt cache |
| [#123265](https://github.com/openclaw/openclaw/issues/123265) | `role:"custom"` runtime-context carrier serialized as trailing `role:"user"` on every request |
| [#134055](https://github.com/openclaw/openclaw/issues/134055) | Slack DM threads lost thread-scoped sessions after 2026.7.1-2 |
| [#128637](https://github.com/openclaw/openclaw/issues/128637) | Multi-agent `AgentSelectionRequiredError` on ambient operations |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|----------------------------|
| [#121729](https://github.com/openclaw/openclaw/issues/121729) | **Friendly daily spending allowances** for background agents (P3, `🌊 off-meta tidepool`) | Medium — cost control is a growing ops need |
| [#16555](https://github.com/openclaw/openclaw/issues/16555) | **TTL/Expiry for Delivery Queue Messages** (P1, enhancement) | High — prevents stale message floods on restart |
| [#116615](https://github.com/openclaw/openclaw/issues/116615) | **Config-free pre-mutation guard for `apply_patch`** (P2, security) | Medium — supply-chain security hardening |
| [#77886](https://github.com/openclaw/openclaw/issues/77886) | **Owner-approved flow for protected config changes** (P2, stale) | Low — stalled, needs product decision |
| [#136755](https://github.com/openclaw/openclaw/pull/136755) (PR) | **Enable cross-agent session access by default** (`tools.agentToAgent.enabled=true`, `tools.sessions.visibility=global`) | High — PR open, maintainer review pending |
| [#135654](https://github.com/openclaw/openclaw/pull/135654) (PR) | **Beam snapshots: continue with Team agents** | Medium — PR open, waiting on author |
| [#136079](https://github.com/openclaw/openclaw/pull/136079) (PR) | **Show every mounted local disk in Control UI** | High — PR ready for maintainer look |
| [#136858](https://github.com/openclaw/openclaw/pull/136858) (PR) | **Redesign Devices page** with icons, resource meters, capability chips | High — PR open, large UI investment |

**Roadmap themes emerging:** 
1. **Multi-agent by default** (cross-agent access, session visibility)
2. **Operational visibility** (device metrics, disk diagnostics, spending allowances)
3. **Delivery reliability** (queue TTL, reconnect logic, tombstone fixes)
4. **Provider streaming parity** (reasoning content, text delta handling)

---

## 7. User Feedback Summary

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Upgrade breaks things silently** | #134570 (7 blockers), #134608 (auth migration), #134055 (Slack regression) | High — multiple 2026.8.1 reports |
| **Message loss in chat integrations** | #127229 (Telegram), #126246 (Telegram stuck), #128971 (Telegram), #96692 (Slack), #135305 (Slack) | Very high — every major transport |
| **Multi-agent routing is fragile** | #126360, #128637, #122625 (Matrix), #125570 (Skill routing) | High — explicit ownership mode problematic |
| **Provider streaming inconsistencies** | #88079 (Kimi/DeepSeek), #136262 (OpenAI), #48709 (Gemini), #123652 (Azure) | High — each provider needs custom handling |
| **Zombie processes / resource leaks** | #97616 (10 comments, 1👍), #84983 (event loop saturation) | Medium — runtime degradation over time |
| **Toolchain friction (pnpm vs npm)** | #123073 (dev channel update fails) | Medium — affects contributors |
| **Realtime voice reliability** | #135934, #128101, #136727 (Discord), #123596 (agent-consult timeout) | High — active PR investment |

**Satisfaction signals:** Users are filing detailed repros with commit hashes, config snippets, and logs — indicating **invested users** who want the product to work. The `🦞 diamond lobster` and `🦐 gold shrimp` tags on P1 issues show maintainers recognize severity.

---

## 8. Backlog Watch (Long-Open, High-Impact, Needs Maintainer Attention)

| Issue | Age | Status | Why It Matters |
|-------|-----|--------|----------------|
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | ~3.5 months | Open, P1, 13 comments, 6👍 | **MCP tools broken in subagents** — blocks agent composition, 3 allowlist mechanisms ignored |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | ~2 months | Open, P1, 10 comments, 1👍 | **Zombie process leak** — runtime

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-09-03)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **high fragmentation with convergent technical priorities**. Thirteen tracked projects span from monolithic desktop assistants (OpenClaw, Hermes Agent, IronClaw) to lightweight CLI-first tools (NanoBot, NanoClaw, Moltis) and specialized channel integrations (PicoClaw, CoPaw). **Zero projects released a stable version today** — the ecosystem is in a collective stabilization sprint focused on **session/memory integrity, provider interoperability, multi-agent correctness, and supply-chain security**. Architectural governance (RFC-driven design in ZeroClaw, ABC standardization in Hermes Agent, provider contracts in NanoClaw) has overtaken feature velocity as the primary maintainer concern.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Merged/Closed PRs | Release Today | Health Score* |
|---------|----------------|-------------|-------------------|---------------|---------------|
| **OpenClaw** | 500 | 500 | 126 | ❌ | 🟢 9/10 |
| **Hermes Agent** | ~48 | ~44 | 4 | ❌ | 🟡 7/10 |
| **IronClaw** | 10 | 26 | 10 | ❌ | 🟢 8/10 |
| **ZeroClaw** | 50 | 50 | ~9 (older) | ❌ | 🟡 6/10 |
| **NanoClaw** | 2 | 21 | 3 | ❌ | 🟢 8/10 |
| **CoPaw** | 16 | 35 | 10 | ✅ v2.2.0-beta.7 | 🟢 8/10 |
| **NanoBot** | 2 | 23 | 4 | ❌ | 🟢 8/10 |
| **Moltis** | 2 | 3 | 0 | ✅ 3 patches (20260902.x) | 🟢 8/10 |
| **LobsterAI** | 8 | 10 | 3 | ❌ | 🟡 6/10 |
| **PicoClaw** | 1 | 1 | 1 | ❌ | 🟠 5/10 |
| **NullClaw** | 0 | 0 | 0 | ❌ | ⚫ 0/10 |
| **TinyClaw** | 0 | 0 | 0 | ❌ | ⚫ 0/10 |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ | ⚫ 0/10 |

*Health Score: Velocity (30%) + Merge throughput (25%) + Release cadence (20%) + Bug severity balance (15%) + Community signal quality (10%).  
**Note**: NullClaw, TinyClaw, ZeptoClaw show zero 24h activity — may be dormant or on private repos.

---

## 3. OpenClaw's Position

### Advantages vs Peers
| Dimension | OpenClaw | Nearest Peers |
|-----------|----------|---------------|
| **Scale of operation** | 500+ daily issue/PR updates; 352 open issues, 374 open PRs | Hermes (100), IronClaw (36), ZeroClaw (100) |
| **Multi-surface maturity** | Native Android/iOS/macOS/Web + Slack/Matrix/Telegram/Discord | CoPaw (Desktop + WeChat/WeCom), Hermes (Desktop + Discord/Slack) |
| **Session-state engineering** | Dedicated compaction, write-lock, subagent yield, observer subsystems | NanoBot (AgentRunner compaction), ZeroClaw (RFC #9487), NanoClaw (delivery retry) |
| **Provider streaming parity** | Active fixes for OpenAI, Gemini, Kimi, DeepSeek, Azure, Anthropic | NanoBot (Codex/Copilot OAuth), Hermes (OpenAI Responses), IronClaw (Claude families) |

### Technical Approach Differences
- **Monolithic gateway + plugin architecture** vs. NanoBot/NanoClaw/Moltis's **modular provider/channel contracts**
- **Explicit session ownership model** (main-session, subagent yield, observer tokens) vs. Hermes' **gateway-owned authority** and ZeroClaw's **runtime-owned sessions (RFC #9487)**
- **Diamond-lobster (🦞) severity taxonomy** with P0/P1/P2/P3 + impact tags — more granular than most peers' Critical/High/Medium

### Community Size Comparison
- **OpenClaw**: Largest visible contributor base (126 PRs merged/day implies ~20+ active committers)
- **IronClaw**: 4 core contributors driving parallel workstreams (BenKurrek, henrypark133, italic-jinxin, standardtoaster)
- **CoPaw**: Strong first-time contributor influx during beta
- **ZeroClaw**: Maintainer-driven RFC process with distinguished-contributor gates
- **Others**: 1–3 visible core maintainers each

---

## 4. Shared Technical Focus Areas

| Cross-Project Need | Projects Affected | Specific Manifestations |
|--------------------|-------------------|-------------------------|
| **Session/memory integrity under concurrency** | OpenClaw, NanoBot, Hermes, LobsterAI, ZeroClaw, CoPaw | OpenClaw: compaction write-lock timeout (#118625), WAL corruption (#123327); NanoBot: token accounting undercount (#5402), Dream memory unbounded (#5630); Hermes: SQLite physical corruption (#98077); LobsterAI: IM duplicate sessions (#1099); ZeroClaw: context capped at 32k vs 131k config (#10068); CoPaw: ReMe embedding job fails silently (#7469) |
| **Provider streaming & reasoning parity** | OpenClaw, NanoBot, Hermes, IronClaw, NanoClaw, Moltis | OpenClaw: Kimi/DeepSeek reasoning_content (#88079), OpenAI text_delta doubling (#136262), Gemini think tags (#48709); NanoBot: API-reported prompt tokens vs tiktoken (#5403); Hermes: parallel tool calls merged (#101536); IronClaw: prompt-cache denylist for new Claude (#8044); NanoClaw: Codex `speed→service_tier` pinning (#3593); Moltis: `max` reasoning effort level (#1253) |
| **Multi-agent routing & cross-session access** | OpenClaw, Hermes, ZeroClaw, CoPaw, NanoClaw | OpenClaw: AgentSelectionRequiredError floods (#126360), cross-agent session access PR (#136755); Hermes: Bot Group Chats persist after Desktop close (#97681); ZeroClaw: runtime-owned sessions + ACP adapters (RFC #9487); CoPaw: main agent passivity (#7450), A2A protocol request (#7484); NanoClaw: skill refresh breaks local adapters (#3529) |
| **Delivery reliability & channel reconnect** | OpenClaw, NanoBot, Hermes, NanoClaw, PicoClaw, CoPaw, ZeroClaw | OpenClaw: Telegram tombstone (#127229), Slack thread loss (#96692), MCP loopback no reconnect (#98435); NanoBot: Matrix send_delta suppresses failures (#5637), channel reply fingerprint cache unbounded (#5634); Hermes: Discord typing leak (#101783), Feishu thread fallback (#20548); NanoClaw: delivery wastes retries on disconnected adapters (#3703), Teams MIME type (#3674); PicoClaw: QQ Channel auth failure 401 (#3349); CoPaw: WeCom char-by-char throttle (#7507); ZeroClaw: Matrix homeserver resolution (#9855), verbatim channel send (#10050) |
| **Supply-chain & sandbox security** | OpenClaw, NanoBot, IronClaw, NanoClaw, ZeroClaw, LobsterAI | OpenClaw: auth migration archives credentials (#134608); NanoBot: session key path traversal (#5564), Codex/Copilot OAuth outside data dir (#5446, #5638); IronClaw: 170 @ts-nocheck files (#8032), missing-doc FailureKind mismatch (#8041); NanoClaw: 3-day minimumReleaseAge gate (#2973), mount bypass closure (#3680); ZeroClaw: independent delegate bypasses block_high_risk_commands (#10165), granular sandbox policy RFC (#6996); LobsterAI: MCP stdio/external URL validation (#2590) |
| **Upgrade/migration safety** | OpenClaw, Hermes, LobsterAI, CoPaw, ZeroClaw | OpenClaw: 2026.8.1 gateway crash-loop (#134570), auth migration blocks repair (#134608); Hermes: v0.21.0 conversation history duplication (#101644); LobsterAI: in-app browser reverted (#2597); CoPaw: v2.2.0-beta.x daily cadence, custom provider migration (#7474); ZeroClaw: config init sections across CLI runs (#10147) |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architectural Signature |
|---------|---------------|-------------|-------------------------|
| **OpenClaw** | **Production-grade multi-surface assistant** with enterprise chat integrations | Power users, teams, self-hosted deployments | Monolithic gateway + session ownership + observer pattern; heavy mobile/desktop investment |
| **Hermes Agent** | **Research-oriented agent platform** with voice-first ambition | Researchers, voice-interaction pioneers | Gateway-owned authority + RFC-governed ABC standardization (RealtimeVoiceProvider) |
| **IronClaw** | **Type-safe, CI-optimized desktop agent** with design-system rigor | Developers, Linux/macOS desktop users | Rust/Tauri core + React WebUI; systematic @ts-nocheck elimination; hermetic CI |
| **ZeroClaw** | **Architecturally pristine agent kernel** with formal boundaries | Platform builders, security-sensitive deployments | RFC-driven governance; memory/session/sandbox/provider/channel as decoupled contracts |
| **NanoClaw** | **Contract-enforced provider/channel ecosystem** for gateway deployments | Gateway operators, multi-tenant SaaS | Core-owned instruction rendering; declared provider contracts; supply-chain gates |
| **NanoBot** | **Lightweight, container-friendly agent** with precise token accounting | Developers, containerized deployments | AgentRunner-owned compaction; API-reported tokens; ephemeral context blocks |
| **Moltis** | **Observable agent runtime** with hook/event completeness | Tool builders, observability-focused users | Hook lifecycle (AgentEnd, MessageSending, MessageSent); stable tool_call_id correlation |
| **CoPaw** | **Chinese-market desktop assistant** with WeChat/WeCom/WeCom channels | Chinese knowledge workers, enterprise WeCom users | Tauri + PyInstaller; ReMe long-term memory; Make-Skill v2 approval workflow |
| **LobsterAI** | **Feature-rich desktop client** with OpenClaw backend integration | Chinese desktop users, multi-provider consumers | Electron + OpenClaw gateway; Docker sandbox; in-app browser (reverted) |
| **PicoClaw** | **QQ Channel specialist** on embedded/edge | Chinese QQ ecosystem developers | Go-based; minimal surface; single-channel depth |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating / High Velocity (Stable Core, Active Polish)
| Project | Signal |
|---------|--------|
| **OpenClaw** | 126 PRs merged/day; diamond-lobster triage; multi-platform release automation in progress |
| **IronClaw** | 10 PRs merged/day; systematic debt paydown (TS strictness, CI, UI components); CI cold-compile cut 80% |
| **NanoClaw** | 3 merges/day; architectural cleanup (provider contracts, supply-chain gates) landing atomically |
| **CoPaw** | Daily beta releases (v2.2.0-beta.7); 10 merges/day; first-time contributor surge; security audit triggered |

### Tier 2: Stabilizing / Pre-Release (Focus on Correctness)
| Project | Signal |
|---------|--------|
| **NanoBot** | P1 security + P1 token accounting fixes in review; ephemeral context PR ready; OAuth persistence for containers |
| **Moltis** | 3 same-day patches; hook/event completeness + tool_call_id + reasoning effort in active PRs |
| **Hermes Agent** | Voice ABC convergence (3 PRs → 1 interface); critical SQLite/MCP fixes merged; cloud auth outage unresolved |

### Tier 3: Architectural Refactoring (Velocity Masked by Review Latency)
| Project | Signal |
|---------|--------|
| **ZeroClaw** | 50 PRs updated, 0 merges in top-20; 9 RFCs in flight; S0 security fix (#10188) stalled 14 days on review |
| **LobsterAI** | 6 stale issues closed without fix; 5 ready PRs (#1100, #1101, #1125, #1103, #1102) unmerged for 5 months |

### Tier 4: Critical Regression / Blocked
| Project | Signal |
|---------|--------|
| **PicoClaw** | QQ Channel auth completely broken (401/code 11241); no fix PR; single maintainer visible |

### Tier 5: Dormant / No Signal
| Project | Signal |
|---------|--------|
| **NullClaw, TinyClaw, ZeptoClaw**

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-03

---

## 1. Today's Overview

NanoBot shows **high development velocity** with 23 PRs updated in the last 24 hours (4 merged/closed, 19 open) and 2 active issues. The project is in active maintenance mode with a strong focus on **provider reliability** (Codex, Copilot OAuth persistence), **security hardening** (session path traversal fix), **memory/token accounting accuracy**, and **WebUI/channel polish**. No new releases were cut today. The merged PRs indicate progress on agent runner ownership of context compaction, empty task-group cleanup, and first-run WebUI onboarding improvements.

---

## 2. Releases

**No new releases** published in the last 24 hours.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Type | Summary |
|----|-------|------|---------|
| [#5568](https://github.com/HKUDS/nanobot/pull/5568) | `refactor(agent): let runner own context compaction` | Refactor, Priority: P2 | Moves local request-pressure context compaction into `AgentRunner`; active conversations compact synchronously, idle ones asynchronously. Improves ownership clarity and compaction timing. |
| [#5623](https://github.com/HKUDS/nanobot/pull/5623) | `fix(agent): drop empty active-task groups after tasks finish` | Bug fix, Performance, Priority: P2 | Fixes memory leak in `AgentLoop._active_tasks` where empty task sets remained mapped to session keys indefinitely. |
| [#5625](https://github.com/HKUDS/nanobot/pull/5625) | `feat(webui): guide first-run AI setup` | Feature, WebUI | Replaces "Model not configured" warning with a neutral "Choose your AI" action that opens the existing Models settings — improves first-run UX. |
| [#5568](https://github.com/HKUDS/nanobot/pull/5568) | (same as above) | | |

**Net progress:** Core agent loop refactoring, memory leak plugged, onboarding UX improved.

---

## 4. Community Hot Topics — Most Active Items

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#5586](https://github.com/HKUDS/nanobot/issues/5586) | Issue (enhancement) | 2 | 0 | **Ephemeral runtime-context blocks** — allow context injected for a single turn to *not* persist or replay. Directly addressed by PR [#5627](https://github.com/HKUDS/nanobot/pull/5627). |
| [#5631](https://github.com/HKUDS/nanobot/issues/5631) | Issue (enhancement) | 0 | 0 | **WebUI observability** — show model speed, context length, token usage in UI (like DeepSeek Harness). No PR yet. |
| [#5636](https://github.com/HKUDS/nanobot/pull/5636) | PR (fix, webui) | — | 0 | **Sidebar alignment** — unify native/WebUI sidebar collapse controls, remove duplicate floating toggle. Active review. |
| [#5403](https://github.com/HKUDS/nanobot/pull/5403) | PR (bug, fix, test, Priority: P1) | — | 0 | **Token accounting fix** — use API-reported prompt tokens (not local tiktoken) to trigger memory consolidation. Addresses 30–50% undercount. |
| [#5633](https://github.com/HKUDS/nanobot/pull/5633) | PR (bug, fix, security, Priority: P1) | — | 0 | **Session key path traversal** — reject `../../etc/passwd` style keys before file persistence. Security hardening. |

**Underlying themes:**  
- **Control over context lifecycle** (ephemeral vs. persistent)  
- **Observability** in WebUI for power users  
- **Provider-side token accuracy** for memory management  
- **Security hygiene** in session handling

---

## 5. Bugs & Stability — Reported/Fixed Today

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **P1 (Critical)** | [#5402](https://github.com/HKUDS/nanobot/issues/5402) — Local tiktoken undercounts prompt tokens 30–50%, consolidation never triggers | **Fix merged** | [#5403](https://github.com/HKUDS/nanobot/pull/5403) (open, updated today) |
| **P1 (Security)** | [#5564](https://github.com/HKUDS/nanobot/issues/5564) — Session key path traversal (`../../etc/passwd`) | **Fix PR open** | [#5633](https://github.com/HKUDS/nanobot/pull/5633) |
| **P2 (Regression)** | [#5622](https://github.com/HKUDS/nanobot/pull/5622) side-effect — Dream memory files (SOUL.md, USER.md, MEMORY.md) now unbounded, injected every request | **Fix PR open** | [#5630](https://github.com/HKUDS/nanobot/pull/5630) |
| **P2** | Codex OAuth tokens stored outside Nanobot data dir — not persistent in containers | **Fix PR open** | [#5446](https://github.com/HKUDS/nanobot/pull/5446) |
| **P2** | Copilot OAuth tokens same issue | **Fix PR open** | [#5638](https://github.com/HKUDS/nanobot/pull/5638) |
| **P2** | Matrix `send_delta()` suppresses stream failures, loses final buffers | **Fix PR open** | [#5637](https://github.com/HKUDS/nanobot/pull/5637) |
| **P2** | SDK stream close drops oldest unread event when queue full | **Fix PR open** | [#5635](https://github.com/HKUDS/nanobot/pull/5635) |
| **P2** | Channel reply fingerprint cache unbounded — memory growth in long-running gateways | **Fix PR open** | [#5634](https://github.com/HKUDS/nanobot/pull/5634) |
| **P2** | Empty active-task groups leak in `AgentLoop._active_tasks` | **Fixed** | [#5623](https://github.com/HKUDS/nanobot/pull/5623) (merged) |

**Stability signal:** Multiple P1/P2 fixes in flight; one P1 security fix and one P2 leak already merged. The Dream memory regression (#5630) is a recent regression from a bug fix — high priority to land.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Ephemeral runtime-context blocks** (`ephemeral` flag) | Issue [#5586](https://github.com/HKUDS/nanobot/issues/5586) + PR [#5627](https://github.com/HKUDS/nanobot/pull/5627) | **High** — PR open, addresses explicit user need, minimal scope |
| **WebUI model speed / context / token display** | Issue [#5631](https://github.com/HKUDS/nanobot/issues/5631) | **Medium** — no PR yet, but clear UX ask (DeepSeek Harness parity) |
| **Configurable cron delivery targets + batch archive** | PR [#5620](https://github.com/HKUDS/nanobot/pull/5620) | **High** — PR open with tests, extends scheduling/automation |
| **MiniMax music generation guidance** | PR [#5212](https://github.com/HKUDS/nanobot/pull/5212) (conflict, stale) | **Low** — conflict, older, needs rebase |
| **Langfuse tracing for Codex** | PR [#5520](https://github.com/HKUDS/nanobot/pull/5520) | **Medium** — observability push, but Codex-specific |
| **Shared session via heartbeat `isolated_session=false`** | PR [#4551](https://github.com/HKUDS/nanobot/pull/4551) (very old, conflict) | **Low** — long-stalled, needs design review |
| **Telegram rich message streaming** | PR [#5614](https://github.com/HKUDS/nanobot/pull/5614) (draft) | **Medium** — author using it, but self-marked unreviewed |

**Top candidates for next cut:** Ephemeral context blocks (#5627), cron delivery/archive (#5620), and the P1/P2 bug fixes above.

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence |
|------------------------|----------|
| **"Runtime context pollutes history"** — users want per-turn context that doesn't persist | Issue [#5586](https://github.com/HKUDS/nanobot/issues/5586): "replayed on every later turn… competes for replay token budget" |
| **"Can't see model speed / context usage in WebUI"** | Issue [#5631](https://github.com/HKUDS/nanobot/issues/5631): "直观看到模型的速度和上下文信息" (DeepSeek Harness reference) |
| **"First run feels broken"** — "Model not configured" looks like an error | PR [#5625](https://github.com/HKUDS/nanobot/pull/5625): "replace warning-like state with neutral Choose your AI action" |
| **"OAuth tokens lost in containers"** — Codex/Copilot tokens not in Nanobot data dir | PRs [#5446](https://github.com/HKUDS/nanobot/pull/5446), [#5638](https://github.com/HKUDS/nanobot/pull/5638): "not persistent or writable" |
| **"Memory consolidation never triggers"** — local token count too low | PR [#5403](https://github.com/HKUDS/nanobot/pull/5403): "30–50% lower than API's actual count" |
| **"Dream memory files grow unbounded"** — recent regression | PR [#5630](https://github.com/HKUDS/nanobot/pull/5630): "removed the only existing size cap" |

**Sentiment:** Users are sophisticated (token budgets, OAuth persistence, context replay) and expect **observability**, **control**, and **container-friendly persistence**. The project responds quickly with targeted PRs.

---

## 8. Backlog Watch — Stale / High-Impact Items Needing Attention

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) `feat(heartbeat): isolated_session config` | ~14 months | Enables shared-session heartbeat for multi-user/bridge use cases; fundamental for gateway deployments | Conflict, design review needed |
| [#5212](https://github.com/HKUDS/nanobot/pull/5212) `feat: MiniMax music guidance` | ~1 month | Extends music provider stack; user-facing feature | Conflict, needs rebase |
| [#5403](https://github.com/HKUDS/nanobot/pull/5403) `fix(memory): use API-reported prompt tokens` | ~18 days | **P1** — fixes core memory consolidation logic; affects all long conversations | Awaiting review/merge |
| [#5446](https://github.com/HKUDS/nanobot/pull/5446) `fix(codex): persist OAuth tokens` | ~15 days | **P2** — container deployment blocker for Codex users | Awaiting review |
| [#5611](https://github.com/HKUDS/nanobot/pull/5611) `feat(agent): bound reasoning replay` | ~4 days | Bounds reasoning replay to latest turn — saves prefill tokens, fixes budget pressure | Conflict, needs resolution |
| [#5614](https://github.com/HKUDS/nanobot/pull/5614) `feat(tg): streaming rich messages` | ~4 days | Telegram UX parity; author using in prod but unreviewed | Author plans review this week |

**Recommendation:** Prioritize merging #5403 (P1 token accounting), #5633 (P1 security), #5630 (P2 regression), and #5627 (ephemeral context — user-facing feature with PR ready). Review #5611 and #5614 for next sprint.

---

*Generated from GitHub data as of 2026-09-03. All links point to HKUDS/nanobot repository.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-03

## 1. Today's Overview

Hermes Agent shows **high velocity with 100 combined issue/PR updates** in the last 24 hours, but zero releases — indicating a project in active development/bug-fix mode rather than a release cycle. The open-to-closed ratio (48:2 issues, 44:6 PRs) suggests work is accumulating faster than it's being resolved. Critical stability issues dominate: SQLite corruption under WAL mode (#98077), MCP server poisoning from boolean schemas (#101669), and MCP OAuth generator leaks (#101756) all carry P1/P2 severity. Concurrently, a major architectural effort is underway to standardize realtime voice via an ABC + orchestrator pattern (#77111, #95147, #101808), with four competing PRs converging on a single interface. The project is tackling both deep infrastructure debt and new capability surface simultaneously.

## 2. Releases

**No new releases** in the last 24 hours. The latest version remains v0.21.0 (implied by #101644 referencing it). Users on v0.21.0 should be aware of the conversation history duplication bug (#101644) affecting `/v1/responses` named conversations.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#86599](https://github.com/NousResearch/hermes-agent/pull/86599) | fix(state): drain stale read-only pool after 'file is not a database' self-heal | comp/agent, sessions | Prevents read-only pool exhaustion when sibling process replaces state.db |
| [#87410](https://github.com/NousResearch/hermes-agent/pull/87410) | fix(state): rebuild ordinary B-tree indexes after runtime FTS rebuild | comp/agent, sessions | Fixes silent index corruption after FTS recovery — companion to #98077 |
| [#98583](https://github.com/NousResearch/hermes-agent/pull/98583) | fix(gateway): reconcile unrecorded streaming previews against visible prefix | comp/gateway, message-delivery | Prevents `None` return from `delivered_final_matches()` breaking stream finalization |
| [#52945](https://github.com/NousResearch/hermes-agent/pull/52945) | Dashboard inherits HERMES_WEB_DIST from Desktop, loading wrong frontend | config, desktop, dashboard | Partial fix — gap remains for `HERMES_DESKTOP=1` case (#101748) |

**Net progress**: 4 PRs closed, all bug fixes targeting session state integrity and gateway streaming reliability. No feature PRs merged today.

## 4. Community Hot Topics — Most Active Discussions

| Item | Comments | 👍 | Core Need |
|------|----------|-----|-----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index stale/degraded (automated) | 144 | 0 | **Infra reliability**: Cron job (`skills-index.yml`) running 6/18 UTC exceeds 26h freshness SLA — index is 29.8h old. Blocks skills discovery in dashboard. |
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) Bot Group Chats survive Desktop close | 23 | 0 | **Architecture**: Gateway-owned authority + scoped cross-gateway transport on `main`; need to connect foundation to persistent session routing so bots keep running after Electron quits. |
| [#77111](https://github.com/NousResearch/hermes-agent/issues/77111) RFC: RealtimeVoiceProvider ABC | 22 | 2 | **Governance**: 4 competing duplex-voice PRs → need single interface + orchestrator per AGENTS.md "Footprint Ladder" rule. |
| [#20765](https://github.com/NousResearch/hermes-agent/issues/20765) Voice mode in browser dashboard (WebRTC) | 9 | 6 | **UX**: Mic access unavailable when TUI runs remote (SSH/PTY). Need browser-based WebRTC capture → STT pipeline. |
| [#98077](https://github.com/NousResearch/hermes-agent/issues/98077) SQLite 3.50.4 WAL physical corruption (CLOSED) | 8 | 0 | **Data integrity**: Multi-process WAL corruption beyond FTS — forensic recovery found structural B-tree damage. Fixes in #86599, #87410. |

**Pattern**: Top issues are **infrastructure reliability** (skills index, SQLite corruption, session persistence) and **architectural convergence** (voice ABC, bot persistence). Community energy favors stabilizing foundations over new features.

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

### P1 — Critical / Data Loss / Service Down
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#98077](https://github.com/NousResearch/hermes-agent/issues/98077) | SQLite 3.50.4 WAL physical cross-B-tree corruption; canonical writes continued after malformed detection | Yes: [#86599](https://github.com/NousResearch/hermes-agent/pull/86599), [#87410](https://github.com/NousResearch/hermes-agent/pull/87410) (both closed) |
| [#94558](https://github.com/NousResearch/hermes-agent/issues/94558) | Hermes Cloud agents (sjc): 503 'Auth provider nous unreachable' — survives token refresh & restart | No |
| [#81880](https://github.com/NousResearch/hermes-agent/issues/81880) | MCP stdio orphans accumulate in Desktop → OOM on 16GB Macs (300+ node processes) | No |
| [#101756](https://github.com/NousResearch/hermes-agent/issues/101756) | MCP OAuth: async_auth_flow drops SDK generator without `aclose()`, poisoning `context.lock` — every OAuth MCP server parks permanently | No |

### P2 — Major Functionality Broken
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#101644](https://github.com/NousResearch/hermes-agent/issues/101644) | v0.21.0: named `/v1/responses` conversations duplicate stored history (2 turns → 3→8 messages) | No |
| [#76457](https://github.com/NousResearch/hermes-agent/issues/76457) | `hermes config set` writes list-of-strings as stringified JSON literal instead of YAML list | No |
| [#101669](https://github.com/NousResearch/hermes-agent/issues/101669) | MCP boolean property schema (`properties.x: true`) fails `ListToolsResult` validation, disables entire server | Yes: [#101804](https://github.com/NousResearch/hermes-agent/pull/101804), [#101810](https://github.com/NousResearch/hermes-agent/pull/101810) (open) |
| [#101783](https://github.com/NousResearch/hermes-agent/issues/101783) | Discord typing indicator persists after idle (leaked `_keep_typing` task) | No |
| [#20548](https://github.com/NousResearch/hermes-agent/issues/20548) | Feishu: `root_id` fallback for `thread_id` causes all replies to be threaded | No |
| [#101744](https://github.com/NousResearch/hermes-agent/issues/101744) | `rollback.diff` silently truncates at 4000 chars with no `truncated` flag | No |
| [#101800](https://github.com/NousResearch/hermes-agent/issues/101800) | Rate-limit exit sentinel (code 75) unreachable — quota exhaustion misclassified as protocol violation, crashloops board | Yes: [#101816](https://github.com/NousResearch/hermes-agent/pull/101816) (open) |
| [#101748](https://github.com/NousResearch/hermes-agent/issues/101748) | Dashboard serves Electron renderer when Desktop-spawned (`HERMES_DESKTOP=1` gap in #52945 fix) | No |
| [#101742](https://github.com/NousResearch/hermes-agent/issues/101742) | Opening session lands in sub-agent/branch transcript — `_session_latest_descendant` follows every child unfiltered | No |
| [#101536](https://github.com/NousResearch/hermes-agent/issues/101536) | Parallel tool calls to same tool merged into one slot (Gemini native streaming) | No |
| [#69637](https://github.com/NousResearch/hermes-agent/issues/69637) | Async delegation re-triggers 300s preflight compression timeouts | No |
| [#101568](https://github.com/NousResearch/hermes-agent/issues/101568) | Group Chat rename races in-flight clarify prompt — recreates under old display name | No |
| [#101786](https://github.com/NousResearch/hermes-agent/issues/101786) | Project-level skills not invokable via `/` in project sessions — Desktop `/api/skills` omits project cwd | No |

### P3 — Degraded Experience / Config / UX
| Issue | Summary |
|-------|---------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index 29.8h old (limit 26h) — automated freshness probe failing |
| [#57547](https://github.com/NousResearch/hermes-agent/issues/57547) | Custom endpoint API key written to `config.yaml`, leaks into context when Hermes edits own config |
| [#43598](https://github.com/NousResearch/hermes-agent/issues/43598) | SimpleX Chat: gateway runs but messages to Hermes don't work — setup unclear |
| [#100561](https://github.com/NousResearch/hermes-agent/issues/100561) | Nix package missing `hermes_state_registry` module — gateway fails to start |
| [#79579](https://github.com/NousResearch/hermes-agent/issues/79579) | Desktop quit guard warns about losing work in remote mode where backend outlives app |
| [#101782](https://github.com/NousResearch/hermes-agent/issues/101782) | Preview webview swallows `window.open('_blank')` — multi-tab navigation dies silently |
| [#101811](https://github.com/NousResearch/hermes-agent/pull/101811) | Display-TZ conversion shifts session-start calendar day (fix PR open) |
| [#20140](https://github.com/NousResearch/hermes-agent/issues/20140) | Cron: allow per-job opt-in to `send_message` tool (hard-disabled currently) |

**Observation**: 6 P1/P2 bugs have open fix PRs (#101669, #101800, #101756, #101644, #94558, #81880 lack fixes). MCP and session-state bugs are the dominant instability surface.

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood for Next Version |
|----------|--------|----------------------------|
| [#77111](https://github.com/NousResearch/hermes-agent/issues/77111) + [#95147](https://github.com/NousResearch/hermes-agent/pull/95147) + [#101808](https://github.com/NousResearch/hermes-agent/pull/101808) | **Realtime Voice ABC + Orchestrator + Built-in Provider** — 3 PRs converging on same contract; AGENTS.md mandates ABC when 3+ PRs target same category | **Very High** — architectural mandate + multiple implementations ready |
| [#21504](https://github.com/NousResearch/hermes-agent/pull/21504) | Realtime Discord voice mode (PCM conversion, AudioSource, OpenAI Realtime WS) | High — complements voice ABC, platform-specific |
| [#53836](https://github.com/NousResearch/hermes-agent/issues/53836) | Live multimodal voice mode with real-time interaction | High — user demand (+4 👍), aligns with voice ABC work |
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Bot Group Chats persist after Desktop close | High — foundation on `main`, "remaining production work" to connect |
| [#377](https://github.com/NousResearch/hermes-agent/issues/377) | Shared Memory Pools between sub-agents (CAMEL-AI inspired) | Medium — needs-decision, architectural shift from isolation |
| [#20765](https://github.com/NousResearch/hermes-agent/issues/20765) | Browser dashboard voice mode (WebRTC capture) | Medium — +6 👍, unblocks remote/SSH voice usage |
| [#20140](https://github.com/NousResearch/hermes-agent/issues/20140) | Cron per-job `send_message` opt-in | Low — needs-decision, narrow use case |
| [#53535](https://github.com/NousResearch/hermes-agent/pull/53535) | Streaming reasoning clamp (configurable line limit) | Medium — UX polish, open PR |

**Prediction**: Next version (v0.22.0?) will likely ship the **Realtime Voice Provider ABC + orchestrator + first provider** (#101808) plus the Discord voice mode (#21504) as the headline features, alongside the P1/P2 stability fixes currently in PR review.

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Remote/headless voice unusable** | #20765 (+6 👍): "Voice mode requires microphone access, not available when TUI runs on remote server via SSH or browser dashboard PTY" | Server-hosted Hermes users, SSH/PTY workflows |
| **Desktop app OOM from MCP leaks** | #81880: "300+ node processes, 126 MCP processes on 16GB Mac — jetsam kills other processes (claude)" | macOS Desktop users with MCP servers |
| **Skills discovery broken in projects** | #101786: "Project-level skills not invokable via `/` — Desktop `/api/skills` omits project cwd" | Multi-project developers using Desktop |
| **Session corruption / data loss fear** | #98077: "Production state.db physically corrupted under SQLite 3.50.4 WAL"; #79579: quit guard warns incorrectly in remote mode | All production users, especially multi-process |
| **MCP ecosystem fragility** | #101669: "One boolean schema parks entire MCP server"; #101756: "OAuth generator leak poisons context.lock permanently" | Anyone using MCP servers (esp. OAuth) |
| **Cloud auth outage** | #94558: "Both sjc agents returning 503 'Auth provider nous unreachable' since Aug 25" | Hermes Cloud customers |
| **Config leaks secrets** | #57547: "Custom endpoint API key placed in config.yaml, leaks into context when Hermes updates own config" | Security-conscious users, custom endpoint users |
| **Cron can't send messages** | #20140: "Hard-disables `messaging` toolset — can't send to WhatsApp/Discord/Slack from cron" | Automation users |

**Satisfaction signals**: Strong demand for voice (+6 👍 on #20765, +4 on #53836, +2 on #77111) and bot persistence (#97681). Frustration concentrated on **Desktop stability (MCP, OOM, skills)** and **remote/headless workflows**.

## 8. Backlog Watch — Stale Important Items Needing Maintainer Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-03

---

## 1. Today's Overview
PicoClaw showed moderate maintenance activity over the last 24 hours with **one merged PR** and **one active bug report**. The merged PR (#1349) delivers a significant enhancement to QQ Channel attachment handling, while the open issue (#3349) reveals a critical authentication failure preventing QQ Channel connectivity entirely. No new releases were published. Overall project health appears **stable but with a blocking regression** in the QQ channel integration that requires immediate attention.

---

## 2. Releases
**No new releases** in the last 24 hours.

---

## 3. Project Progress
| PR | Status | Type | Domain | Summary |
|----|--------|------|--------|---------|
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | **Closed (Merged)** | Enhancement | Channel / Go | **feat(qq): support parsing and replying to more attachment types** — Adds parsing for QQ Channel emoji structures; handles incoming voice, image, video, and file messages; supports replying with local voice/image/video/file attachments (upload-before-send); prioritizes Markdown replies with fallback. |

*This PR substantially expands QQ Channel media interoperability and was merged on 2026-09-02.*

---

## 4. Community Hot Topics
| Item | Activity | Analysis |
|------|----------|----------|
| [Issue #3349](https://github.com/sipeed/picoclaw/issues/3349) — **QQ Channel authentication failure (401 / code 11241)** | 2 comments, updated 2026-09-02 | **Critical blocking bug.** Users on both Docker and Linux x86 builds cannot connect to QQ Channel. Gateway logs show `failed to get websocket info: code:401, text:{"message":"请求头Authorization参数格式错误","code":11241,...}`. Indicates an Authorization header format error — likely a token signing or header construction regression. Affects all deployments using QQ Channel. |

*This is the single most impactful community signal today; no workaround reported.*

---

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical (P0)** | [#3349](https://github.com/sipeed/picoclaw/issues/3349) — QQ Channel gateway auth failure (401, code 11241) | Open, unassigned | **No** |
| — | No other bugs reported in the last 24h. | — | — |

**Assessment:** The QQ Channel integration is **non-functional** for all users. This is a regression in the authentication flow (likely token format or header assembly). No fix PR exists yet; maintainers should prioritize investigation.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| Expanded QQ Channel attachment support (emoji, voice, image, video, file send/receive) | Merged PR [#1349](https://github.com/sipeed/picoclaw/pull/1349) | **Delivered** — already in `main` |
| QQ Channel authentication stability | Issue [#3349](https://github.com/sipeed/picoclaw/issues/3349) | **High** — blocking bug will force a hotfix or patch release |
| Markdown-first reply strategy with fallback | PR [#1349](https://github.com/sipeed/picoclaw/pull/1349) | **Delivered** — part of merged enhancement |

*Prediction:* A **patch release (e.g., vX.Y.Z+1)** is likely within days to address the auth regression. The attachment enhancements from #1349 will ship in that same release.

---

## 7. User Feedback Summary
| Pain Point | Context | Sentiment |
|------------|---------|-----------|
| **QQ Channel completely unusable** — "Authorization header format error" on both Docker and native Linux x86 | Issue [#3349](https://github.com/sipeed/picoclaw/issues/3349) | 🔴 **High dissatisfaction** — core channel broken |
| Desire for richer media interaction on QQ Channel (voice, video, files, emoji) | Addressed by PR [#1349](https://github.com/sipeed/picoclaw/pull/1349) | 🟢 **Positive** — feature delivered, but overshadowed by auth failure |

*Users cannot benefit from the new media features until the authentication issue is resolved.*

---

## 8. Backlog Watch
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [Issue #3349](https://github.com/sipeed/picoclaw/issues/3349) — QQ Channel auth failure | 4 days (created 2026-08-30) | Open, 2 comments, no assignee | **Blocking regression** affecting all QQ Channel users. Requires maintainer triage and fix. |
| *No other long-unanswered critical items in the 24h window.* | | | |

---

### Quick Links
- **Merged Enhancement:** [PR #1349](https://github.com/sipeed/picoclaw/pull/1349) — QQ Channel media attachments
- **Critical Bug:** [Issue #3349](https://github.com/sipeed/picoclaw/issues/3349) — QQ Channel auth failure (401)

---

*Digest generated from GitHub data as of 2026-09-03 00:00 UTC. Next digest scheduled for 2026-09-04.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-03

## 1. Today's Overview
NanoClaw shows **high development velocity** with 21 PRs updated in the last 24 hours (18 open, 3 closed/merged) and 2 active issues. The project is in an active refactoring and stabilization phase, with heavy focus on **provider contract enforcement**, **channel delivery reliability**, and **supply-chain security**. No new releases were published today. The PR queue reflects a mature codebase undergoing systematic cleanup (provider contracts, skill refresh logic, container networking) rather than feature expansion.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs Today
Three PRs were closed/merged, all focused on infrastructure hardening:

| PR | Type | Summary |
|----|------|---------|
| [#2973](https://github.com/qwibitai/nanoclaw/pull/2973) | **Fix (Supply-chain)** | Activated `minimumReleaseAge: 4320` (3-day gate) by hoisting it out of the `pnpm:` key in `pnpm-workspace.yaml` — enforces the documented supply-chain protection that was silently ignored. |
| [#3593](https://github.com/qwibitai/nanoclaw/pull/3593) | **Test (Codex provider)** | Pinned `speed → service_tier` rendering for Codex provider (`fast` → `service_tier = "fast"`), ensuring deterministic config.toml output. |
| [#3672](https://github.com/qwibitai/nanoclaw/pull/3672) | **Test (Slack skill)** | Fixed test expectations for `add-slack` skill file copies (slack-raw-text files). |

**Net effect**: Supply-chain gate now enforced; provider contract tests stabilized; skill-install tests corrected.

## 4. Community Hot Topics — Most Active Items
*Comment counts are not provided in the data; activity is inferred from update recency and label breadth.*

| Item | Type | Area | Why It Matters |
|------|------|------|----------------|
| [#3703](https://github.com/qwibitai/nanoclaw/pull/3703) | **PR (Bug)** | `delivery`, `channels`, `core` | **Delivery retry logic fix** — stops wasting 3 attempts on adapters that report `isConnected() = false`. Directly improves reliability for flaky channels. |
| [#3702](https://github.com/qwibitai/nanoclaw/pull/3702) | **PR (Bug)** | `ncl-cli`, `tasks` | **Task run latency fix** — `ncl tasks run` now feeds reconcile queue immediately instead of waiting up to 60s (`SWEEP_INTERVAL_MS`). User-facing latency reduction. |
| [#3529](https://github.com/qwibitai/nanoclaw/issues/3529) | **Issue** | `skills`, `update` | **Skill refresh breaks local adapters** — update logic assumes all `src/channels/index.ts` imports are skill-managed, overwriting or blocking user-written adapters. No opt-out exists. |
| [#3680](https://github.com/qwibitai/nanoclaw/pull/3680) | **PR (Security Fix)** | `containers`, `credentials`, `mount-security` | **Mount bypass closure** — fixes `allowlisted-extra` mount validation bypass in `validateSpec`. Security-relevant for gateway/container deployments. |
| [#3584](https://github.com/qwibitai/nanoclaw/pull/3584) / [#3588](https://github.com/qwibitai/nanoclaw/pull/3588) / [#3591](https://github.com/qwibitai/nanoclaw/pull/3591) | **PRs (Refactor)** | `providers`, `agent-runner`, `core` | **Provider contract unification** — Codex, OpenCode, and host providers moved to declared, validated contracts with core-owned instruction rendering. Cross-cutting architecture cleanup. |

**Underlying need**: Contributors are systematically eliminating **implicit contracts** (hard-coded provider lists, undocumented retry behavior, untyped instruction prose) in favor of **explicit, validated, core-owned schemas**.

## 5. Bugs & Stability — Reported/Fixed Today
| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **High** | Delivery wastes retries on disconnected adapters ([#3703](https://github.com/qwibitai/nanoclaw/pull/3703)) | Open PR | **Yes — #3703** |
| **High** | `ncl tasks run` waits up to 60s before starting ([#3702](https://github.com/qwibitai/nanoclaw/pull/3702)) | Open PR | **Yes — #3702** |
| **Medium** | Skill refresh overwrites/blocks local adapters ([#3529](https://github.com/qwibitai/nanoclaw/issues/3529)) | Open Issue | No PR yet |
| **Medium** | Teams file delivery fails without MIME type ([#3674](https://github.com/qwibitai/nanoclaw/pull/3674)) | Open PR | **Yes — #3674** |
| **Medium** | Gateway proxy blocks host-local MCP servers (`host.docker.internal`) ([#3597](https://github.com/qwibitai/nanoclaw/pull/3597)) | Open PR | **Yes — #3597** |
| **Low** | `send_card` promises callback actions that Chat SDK drops ([#3427](https://github.com/qwibitai/nanoclaw/pull/3427)) | Open PR | **Yes — #3427** |
| **Low** | WhatsApp inbound media staged where container can’t read ([#3113](https://github.com/qwibitai/nanoclaw/pull/3113)) | Open PR (old) | **Yes — #3113** |

**Stability signal**: 7 active bug-fix PRs, 4 opened today — team is aggressively closing runtime reliability gaps.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Gateway-declared credential lane in `validateSpec`** | [#3701](https://github.com/qwibitai/nanoclaw/issues/3701) (Issue, 2026-09-02) | **High** — aligns with current provider-contract refactor; user maintains 24 agent groups on gateway model. |
| **Core-owned `speed` inference property per agent group** | [#3592](https://github.com/qwibitai/nanoclaw/pull/3592) (PR, core-team) | **High** — CLI (`ncl groups config update --speed`), provider-declared vocab, approval-gated. |
| **Provider contract declaration + install verifier** | [#3586](https://github.com/qwibitai/nanoclaw/pull/3586) (PR, core-team) | **High** — replaces hard-coded provider lists with `SKILL.md` frontmatter descriptors. |
| **Core-owned instruction rendering (canon)** | [#3591](https://github.com/qwibitai/nanoclaw/pull/3591) (PR, core-team) | **High** — providers declare typed facts; core renders canonical prose. |
| **AIML API integration request** | [#3573](https://github.com/qwibitai/nanoclaw/pull/3573) (PR, external) | **Medium** — integration PR submitted; depends on review bandwidth. |

**Roadmap prediction**: Next version will ship **provider contract enforcement**, **core-owned `speed` config**, and **credential-lane support for gateway deployments**.

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Skill refresh destroys local work** | [#3529](https://github.com/qwibitai/nanoclaw/issues/3529) — “update thinks every channel import came from a skill… my own adapter blocks the update” | High — blocks updates for users with custom adapters; no opt-out. |
| **Task startup latency (60s)** | [#3702](https://github.com/qwibitai/nanoclaw/pull/3702) — “run waits for periodic resync” | Medium — CLI UX regression for interactive task runs. |
| **Gateway proxy breaks host-local MCP** | [#3597](https://github.com/qwibitai/nanoclaw/pull/3597) — “HTTP MCP server on `host.docker.internal` unreachable” | Medium — breaks common dev/test pattern with gateway provider. |
| **Teams file delivery silently fails** | [#3674](https://github.com/qwibitai/nanoclaw/pull/3674) — “carry a mime type… so Teams accepts them” | Medium — user-visible failure in enterprise channel. |
| **Supply-chain gate documented but not enforced** | [#2973](https://github.com/qwibitai/nanoclaw/pull/2973) — “CLAUDE.md tells contributors… it does not” | Low (now fixed) — trust gap between docs and reality. |

**Satisfaction signal**: Users are filing **structural bugs** (architecture mismatches) not cosmetic issues — indicates production usage at scale.

## 8. Backlog Watch — Stale/Important Items Needing Attention
| Item | Age | Why It Matters | Recommended Action |
|------|-----|----------------|-------------------|
| [#3113](https://github.com/qwibitai/nanoclaw/pull/3113) | **44 days** (opened 2026-07-21) | WhatsApp media staging fix — blocks media in containerized deployments. | Review/merge; test in container env. |
| [#3427](https://github.com/qwibitai/nanoclaw/pull/3427) | **13 days** (opened 2026-08-21) | `send_card` contract mismatch — agents misled about callback support. | Merge; update tool schema docs. |
| [#3529](https://github.com/qwibitai/nanoclaw/issues/3529) | **9 days** (opened 2026-08-25) | Skill refresh breaks local adapters — no opt-out, affects all custom-channel users. | **Priority**: design opt-out flag or heuristic to detect non-skill imports. |
| [#3584](https://github.com/qwibitai/nanoclaw/pull/3584) / [#3588](https://github.com/qwibitai/nanoclaw/pull/3588) / [#3591](https://github.com/qwibitai/nanoclaw/pull/3591) | **7 days** | Provider contract refactor trio — cross-cutting, must land together to avoid partial state. | Coordinate review; ensure atomic merge or feature flag. |

---

**Overall Health**: 🟢 **Healthy — High velocity, focused on correctness**. The project is executing a well-scoped architectural cleanup (provider contracts, supply-chain gates, delivery reliability) with minimal feature churn. Primary risk is the **skill-refresh regression (#3529)** affecting power users; a fix should be prioritized before next release.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-03

## 1. Today's Overview
IronClaw shows **high velocity** with 36 total updates (10 issues, 26 PRs) in the last 24 hours. The project is in a **major refactoring phase** focused on TypeScript strictness (eliminating ~170 `@ts-nocheck` files), UI component standardization, and CI/CD stabilization. No new releases were cut. Core contributors (BenKurrek, henrypark133, italic-jinxin, standardtoaster) are driving parallel workstreams: frontend type safety, channel/progressive-reply reliability, subagent approval flows, and build-performance. The merge rate (10 closed PRs) indicates healthy throughput.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Scope | Key Change |
|----|-------|------------|
| [#8051](https://github.com/nearai/ironclaw/pull/8051) | `fix(reply)` | **Critical UX fix**: Slack/Telegram progressive replies now emit only the *current* model call’s text (previously concatenated all streamed deltas, producing duplicated/narrated output). |
| [#8045](https://github.com/nearai/ironclaw/pull/8045) | `fix(ci)` | CLI smoke tests now wait for actual TCP readiness instead of banner-only checks; deduplicated connection-retry logic. |
| [#8050](https://github.com/nearai/ironclaw/pull/8050) | `ci` | **Major CI speedup**: Reborn lanes stop cold-compiling full dep graph; stable hermetic Cargo home, push-only shared caches, warm in-place mutation gate. |
| [#8042](https://github.com/nearai/ironclaw/pull/8042) | `fix(cli,ci)` | Serve command stays alive when stderr closes; binds before banner; mutant gate judges only named mutants — fixes flakes that ejected #8006. |
| [#8006](https://github.com/nearai/ironclaw/pull/8006) | `feat(channels)` | **Durable progressive replies + native Slack Agent UI** (reply seam, provider-neutral `ReplyDocument`, adapter pattern). |
| [#8018](https://github.com/nearai/ironclaw/pull/8018) | `refactor(webui)` | Settings fields migrated to shared `Input`/`SelectMenu` design-system components. |
| [#8020](https://github.com/nearai/ironclaw/pull/8020) | `refactor(webui)` | Workspace & Logs filters now use shared `SearchField` (compact toolbar size added). |
| [#8019](https://github.com/nearai/ironclaw/pull/8019) | `refactor(webui)` | Automations status banners → shared `InlineNotice`. |
| [#8017](https://github.com/nearai/ironclaw/pull/8017) | `refactor(webui)` | Extension Configure: native password input → `Input`; local messages → `InlineNotice`. |
| [#8003](https://github.com/nearai/ironclaw/pull/8003) | `chore(deps)` | 17 Rust dependency bumps (uuid, base64, toml, etc.). |

## 4. Community Hot Topics (Most Active Items)
| Item | Type | Activity Signal | Underlying Need |
|------|------|-----------------|-----------------|
| [#8032](https://github.com/nearai/ironclaw/issues/8032) | Issue | **170 files / 61.8k LOC** with `@ts-nocheck`; 1,354 TS diagnostics exposed | **Frontend type-safety debt** — team prioritizing systematic removal via typed API boundaries, component props, test infra. |
| [#8010](https://github.com/nearai/ironclaw/pull/8010) | PR (XL) | Session-event transport unification + web-app run-completion notifications (design doc approved) | **Real-time WebUI observability** — unified SSE stream, typed contracts, durable notices for run lifecycle. |
| [#8046](https://github.com/nearai/ironclaw/pull/8046) | PR (L) | Subagent child approval/auth gate surfaces to owner’s inbox (R3 slice 3a) | **Human-in-the-loop for autonomous agents** — previously invisible child-run blocks now notify parent. |
| [#8041](https://github.com/nearai/ironclaw/issues/8041) | Issue | Tool failure `FailureKind` mismatch sends model into unrecoverable state | **Agent resilience** — wrong failure classification (e.g., missing doc → `InputEncode`) breaks model retry logic. |
| [#7985](https://github.com/nearai/ironclaw/pull/7985) | PR (M) | Missing document = domain failure (`NotFound`), not `InputEncode` | Direct fix for #8041’s root cause in `NativeMemoryService::read`. |

## 5. Bugs & Stability — Reported Today
| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **High** | [#8041](https://github.com/nearai/ironclaw/issues/8041) | Wrong `FailureKind` (e.g., `InputEncode` for missing doc) traps model in unrecoverable retry loop | **Fix PR exists**: [#7985](https://github.com/nearai/ironclaw/pull/7985) reclassifies to `NotFound` |
| **High** | [#8051](https://github.com/nearai/ironclaw/pull/8051) | Progressive replies concatenated all model-call deltas → duplicated/narrated answers in Slack/Telegram | **Merged** — now emits only current call’s text |
| **Medium** | [#8042](https://github.com/nearai/ironclaw/pull/8042) | Serve smoke flake: harness killed server when stderr closed; banner-before-bind race; mutant gate over-filtered | **Merged** — three targeted fixes with regression tests |
| **Medium** | [#7989](https://github.com/nearai/ironclaw/pull/7989) | `list_dir` error omitted failing path, forcing model to re-list parents/siblings | **Open PR** — error now includes path |
| **Low** | [#7991](https://github.com/nearai/ironclaw/pull/7991) | Pre-push gate fails on macOS (`readlink -m` GNUism; test & CI script) | **Open PR** — portable replacements |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Subagent approval gates → owner inbox** | [#8046](https://github.com/nearai/ironclaw/pull/8046) (R3 slice 3a) | **High** — core contributor, design-slice approach |
| **Unified WebUI session-event transport (SSE + typed contracts)** | [#8010](https://github.com/nearai/ironclaw/pull/8010) (XL, approved design) | **High** — end-to-end implementation in progress |
| **Durable progressive replies + native Slack Agent UI** | [#8006](https://github.com/nearai/ironclaw/pull/8006) (merged) | **Done** — foundation for richer channel UX |
| **Prompt-cache denylist for new Claude families** | [#8044](https://github.com/nearai/ironclaw/pull/8044) | **High** — prevents silent cache downgrade on new models |
| **Coalesced streamed text updates (O(N·k) → O(N))** | [#8043](https://github.com/nearai/ironclaw/pull/8043) | **High** — measurable perf win, regression-tested |
| **Full `@ts-nocheck` elimination** | [#8032](https://github.com/nearai/ironclaw/issues/8032) + 4 sibling issues/PRs | **Ongoing** — multi-PR campaign, CI ratchet planned |

## 7. User Feedback Summary
- **Pain point**: Slack/Telegram users saw garbled progressive replies (“Let me find the conversation first…”) due to delta concatenation — **fixed in #8051**.
- **Pain point**: Model gets stuck when tool fails with wrong `FailureKind` (e.g., “retry your args” for a missing document) — **fix in review (#7985)**.
- **Pain point**: macOS contributors blocked by pre-push gate — **fix in review (#7991)**.
- **Positive signal**: Native Slack Agent UI + durable replies shipped (#8006) — enables richer, stateful channel interactions.
- **Developer experience**: CI cold-compile times drastically reduced (#8050) — faster feedback loops.

## 8. Backlog Watch — Stale/Needs Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#7835](https://github.com/nearai/ironclaw/pull/7835) | 11 days (updated today) | **Dependabot: 5 GitHub Actions updates** (setup-node 4→7, claude-code-action 1.0.183→1.0.210) — major version bumps need compat review. |
| [#7985](https://github.com/nearai/ironclaw/pull/7985) | 6 days | **Fix for #8041 (High-sev bug)** — reclassifies missing-doc error; awaiting review/merge. |
| [#7991](https://github.com/nearai/ironclaw/pull/7991) | 5 days | **macOS pre-push gate broken** — blocks contributors on non-Linux; two independent causes. |
| [#7989](https://github.com/nearai/ironclaw/pull/7989) | 5 days | **Improves `list_dir` error UX** — small but impacts model debugging flow. |
| [#8049](https://github.com/nearai/ironclaw/pull/8049) | 1 day | **19 Rust dep bumps** (uuid 1.24→1.26, base64, toml, etc.) — low-risk but broad surface. |

---

**Health Indicators**: 🟢 **Strong** — high merge rate, systematic debt paydown (TypeScript, CI, UI components), critical bugs fixed quickly, feature work on approved designs. **Watch**: macOS CI gate (#7991) and Actions major-version bumps (#7835) need maintainer bandwidth.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-03

## 1. Today's Overview
LobsterAI shows **moderate maintenance activity** with 18 total updates (8 issues, 10 PRs) in the last 24 hours, but **no new releases**. The project is actively addressing concurrency bugs, security hardening, and UI polish, while six stale issues from April were closed en masse. Two long-standing open issues (#1096, #1099) and seven open PRs (most from March) indicate a backlog of unfinished work. Overall health: **stable but with accumulated technical debt** in concurrency handling and feature completion.

## 2. Releases
**No new releases** in the last 24 hours. The latest release line appears to be `release/2026.8.31` (referenced in PR #2597).

## 3. Project Progress — Merged/Closed PRs Today
| PR | Area | Summary | Link |
|----|------|---------|------|
| #2598 | renderer | Fix guide window (Windows) | [#2598](https://github.com/netease-youdao/LobsterAI/pull/2598) |
| #2597 | renderer, main, openclaw, cowork, artifacts | Revert in-app browser feature from 2026.8.31 release; feature moved to later window | [#2597](https://github.com/netease-youdao/LobsterAI/pull/2597) |
| #2596 | renderer, docs, cowork | Add analytics tracking for chat login CTA clicks; update usage spec | [#2596](https://github.com/netease-youdao/LobsterAI/pull/2596) |

**Net effect:** UI polish (guide window, analytics), and a deliberate **feature rollback** (in-app browser) to stabilize the release branch.

## 4. Community Hot Topics
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | Issue | 6 | App fails silently after question — no output, no error (critical UX blocker) |
| [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) | Issue | 3 | File uploads not recognized by model — regression vs. previous project-directory approach |
| [#1566](https://github.com/netease-youdao/LobsterAI/issues/1566) | Issue | 3 | Model returns identical response for any input (v2026.4.3) — likely prompt/context corruption |
| [#1099](https://github.com/netease-youdao/LobsterAI/issues/1099) | Issue | 1 | **Concurrency bug**: IM messages create duplicate sessions & lose responses — *has fix PR #1100* |
| [#1100](https://github.com/netease-youdao/LobsterAI/pull/1100) | PR | — | Serializes per-conversation message processing with async mutex — *closes #1099* |

**Analysis:** Users hit **silent failures** (no output), **file-context loss**, and **deterministic wrong outputs** — all high-severity. The concurrency fix (#1100) is ready but unmerged; maintainers should prioritize it.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **Critical** | [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | App accepts input but produces **zero output, zero error** — user stuck | Closed stale, **no fix PR** |
| **Critical** | [#1566](https://github.com/netease-youdao/LobsterAI/issues/1566) | Model replies **identical content for any prompt** (v2026.4.3) | Closed stale, **no fix PR** |
| **High** | [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) | Uploaded files **invisible to model** — regression from project-dir design | Closed stale, **no fix PR** |
| **High** | [#1099](https://github.com/netease-youdao/LobsterAI/issues/1099) | IM concurrency → **duplicate sessions + lost messages** | **Fix PR #1100 open** (stale since Mar) |
| **High** | [#1101](https://github.com/netease-youdao/LobsterAI/pull/1101) | Cross-provider model switch **race condition** → “model service call failed” | **Fix PR open** (stale since Mar) |
| **Medium** | [#1551](https://github.com/netease-youdao/LobsterAI/issues/1551) | Network change → **gateway restart loop** | Closed stale, **no fix PR** |
| **Medium** | [#2590](https://github.com/netease-youdao/LobsterAI/pull/2590) | MCP stdio commands & external URLs **lack validation** — security hardening | **Open PR** (fresh, Sep 1) |
| **Low** | [#1563](https://github.com/netease-youdao/LobsterAI/issues/1563) | Traffic-package terms page has **copy errors** | Closed stale |
| **Low** | [#1096](https://github.com/netease-youdao/LobsterAI/issues/1096) | MD→PDF uses **online service**; opens 3 tabs, shows paywall | Open, stale, **no fix PR** |

**Note:** Six April issues closed as `stale` without resolution — may reappear if root causes persist.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Full-text session search + keyword highlighting** | [PR #1125](https://github.com/netease-youdao/LobsterAI/pull/1125) (feat, Mar) | High — PR complete, adds content search beyond titles |
| **Docker sandbox readiness probe + status UI** | [PR #1103](https://github.com/netease-youdao/LobsterAI/pull/1103) (feat, Mar) | High — read-only probe, no config change, user-facing status |
| **Quick-action buttons in input box** (stop, compress context, help) | [#1567](https://github.com/netease-youdao/LobsterAI/issues/1567) (Apr) | Medium — direct response to “stuck” UX; no PR yet |
| **Tooltip for scheduled-task toggle** | [PR #1102](https://github.com/netease-youdao/LobsterAI/pull/1102) (Mar) | High — trivial i18n+UI polish |
| **In-app browser** | Reverted in [#2597](https://github.com/netease-youdao/LobsterAI/pull/2597) | Deferred — explicitly moved to later release window |

**Prediction:** Next patch will likely merge #1125, #1103, #1102, and the security hardening #2590. Concurrency fixes (#1100, #1101) are overdue and should gate any IM-heavy release.

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Silent failure** — no output, no error, no logs | #1569 (6 comments, screenshots) | 😡 Frustrated |
| **File uploads ignored** — worked before, broken now | #1561 (3 comments) | 😡 Regression anger |
| **Nonsensical output** — same reply to everything | #1566 (3 comments, logs attached) | 😱 Trust loss |
| **Gateway instability** on network flapping | #1551 (2 comments) | 😟 Reliability concern |
| **MD→PDF UX broken** — multiple tabs, paywall | #1096 (1 comment) | 😐 Annoyed |
| **Need emergency controls** when context breaks | #1567 (2 comments) | 🙏 Proactive ask |

**Overall:** Users report **core loop failures** (chat, files, output) in recent versions. Trust dips when basic functions regress. The ask for “stop/compress/help” buttons (#1567) reveals users feel **trapped** when things go wrong.

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Age | Why It Matters | Action |
|------|-----|----------------|--------|
| [#1100](https://github.com/netease-youdao/LobsterAI/pull/1100) | 5 months | Fixes **duplicate sessions & message loss** in IM (closes #1099) | **Merge** — test & ship |
| [#1101](https://github.com/netease-youdao/LobsterAI/pull/1101) | 5 months | Fixes **race on provider switch** → gateway restart mid-request | **Merge** — critical for multi-provider users |
| [#1125](https://github.com/netease-youdao/LobsterAI/pull/1125) | 5 months | **Full-text search** — high-value UX, complete PR | **Merge** — low risk, high impact |
| [#1103](https://github.com/netease-youdao/LobsterAI/pull/1103) | 5 months | **Docker sandbox probe** — enables OpenClaw tools visibility | **Merge** — read-only, safe |
| [#1102](https://github.com/netease-youdao/LobsterAI/pull/1102) | 5 months | Tooltip for scheduled-task toggle — trivial polish | **Merge** — quick win |
| [#2590](https://github.com/netease-youdao/LobsterAI/pull/2590) | 2 days | **Security hardening** for MCP stdio & external URLs | **Review & merge** — fresh, important |
| [#1096](https://github.com/netease-youdao/LobsterAI/issues/1096) | 5 months | MD→PDF uses **external service with paywall** — privacy/UX issue | **Investigate** — replace with local converter or fix integration |
| [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) / [#1566](https://github.com/netease-youdao/LobsterAI/issues/1566) / [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) | 5 months | **Closed stale but unfixed** — may resurface | **Triage** — reproduce on current main; if fixed, close with note; if not, reopen |

---

**Bottom line:** The project is **actively maintained but backlogged**. Critical concurrency and race-condition fixes (#1100, #1101) have sat open for months while user-facing regressions (#1569, #1566, #1561) were closed without public resolution. Merging the five ready PRs (#1100, #1101, #1125, #1103, #1102) plus the new security PR (#2590) would significantly improve stability and UX. A patch release incorporating these is the highest-leverage next step.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-03

## 1. Today's Overview
Moltis shipped three patch releases on 2026-09-02 (20260902.01–.03), indicating rapid iteration on the recent 20260902 baseline. Development activity remains focused: two new issues and three open PRs were updated in the last 24 hours, with **zero PRs merged or closed**, suggesting the team is in a pre-merge review/validation phase. The open PRs directly address the two freshly filed issues (#1255, #1254) and add a new `max` reasoning effort level, showing tight coupling between issue triage and implementation.

## 2. Releases
| Version | Date | Notes |
|---------|------|-------|
| **20260902.03** | 2026-09-02 | Third patch on same day; no changelog provided in data. |
| **20260902.02** | 2026-09-02 | Second patch; no changelog provided. |
| **20260902.01** | 2026-09-02 | Baseline release referenced by both new issues. |

> ⚠️ **Migration note**: No breaking changes or migration guides are visible in the supplied data. Users should consult the official changelog (GitHub Releases) before upgrading.

## 3. Project Progress
**No PRs were merged or closed today.** All three open PRs are work-in-progress:
- **#1257** – Fixes the missing hook dispatches reported in #1255 and adds `tool_call_id` correlation requested in #1254.  
- **#1256** – Dependabot: bumps `browserslist` 4.28.2 → 4.28.8 in `/crates/web/ui` (low-risk dev dependency).  
- **#1253** – Introduces `max` reasoning effort level across schema, model suffix parsing, OpenAI Codex forwarding, and UI selector.

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#1255](https://github.com/moltis-org/moltis/issues/1255) | Bug | 0 comments, 0 👍 | **Hook lifecycle completeness** — `AgentEnd`, `MessageSending`, `MessageSent` declared but never fired, breaking observability/automation pipelines. |
| [#1254](https://github.com/moltis-org/moltis/issues/1254) | Feature | 0 comments, 0 👍 | **End-to-end tool call correlation** — Stable `tool_call_id` across `BeforeToolCall` / `AfterToolCall` / `ToolResultPersist` for tracing & debugging. |
| [#1257](https://github.com/moltis-org/moltis/pull/1257) | PR | 0 comments, 0 👍 | **Unified fix** for both #1255 and #1254; highest leverage PR today. |
| [#1253](https://github.com/moltis-org/moltis/pull/1253) | PR | 0 comments, 0 👍 | **Reasoning UX parity** — Exposes `max` effort level to match provider capabilities (OpenAI Codex). |

*Underlying theme*: Contributors (notably **GTanger**) are hardening the hook/event system and reasoning controls—foundational for agent observability and advanced model steering.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#1255](https://github.com/moltis-org/moltis/issues/1255) | Three declared lifecycle hooks (`AgentEnd`, `MessageSending`, `MessageSent`) never dispatched; silent failures in user automation. | [#1257](https://github.com/moltis-org/moltis/pull/1257) (open) |
| — | — | No crashes, regressions, or data-loss reports today. | — |

## 6. Feature Requests & Roadmap Signals
1. **Stable `tool_call_id` in hook payloads** ([#1254](https://github.com/moltis-org/moltis/issues/1254)) — Already implemented in #1257; likely in next patch.  
2. **`max` reasoning effort level** ([#1253](https://github.com/moltis-org/moltis/pull/1253)) — UI + API plumbing complete; pending merge.  
3. **Hook lifecycle completion** ([#1255](https://github.com/moltis-org/moltis/issues/1255)) — Fix in #1257; unblocks custom agent wrappers.

*Prediction*: Next release (probably 20260903.x) will bundle #1257 + #1253; #1256 will merge independently.

## 7. User Feedback Summary
- **Pain point**: Hook system feels “half-implemented”—events exist in code/docs but don’t fire, forcing workarounds.  
- **Use case**: Users building external loggers, dashboards, or safety gates need reliable `AgentEnd`/`Message*` events and correlatable tool-call IDs.  
- **Sentiment**: Neutral-to-positive; reporter (GTanger) is a contributor filing well-scoped issues with reproduction steps, indicating an engaged, technical user base.

## 8. Backlog Watch
| Item | Status | Age | Why It Matters |
|------|--------|-----|----------------|
| *None in today’s slice* | — | — | All current items have active PRs. Older backlog not provided in data. |

> **Maintainer action**: Prioritize review/merge of **#1257** (unblocks two issues) and **#1253** (user-facing feature). **#1256** is safe to auto-merge after CI pass.

---

*Data source: GitHub API snapshot for moltis-org/moltis (issues, PRs, releases) covering 2026-09-02 → 2026-09-03.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-09-03

## 1. Today's Overview
CoPaw (agentscope-ai/QwenPaw) is in an **intense beta stabilization phase** for v2.2.0, with **v2.2.0-beta.7 released today** and 35 PRs updated in 24h (10 merged/closed). The project shows **high velocity but elevated bug density** — 16 active issues span critical regressions (memory loss, security sandbox breach, cron duplication, session switching lockup) alongside architectural requests (A2A protocol, theming). The beta release cycle is rapid (~daily), indicating aggressive iteration toward a stable v2.2.0. Community engagement is strong with detailed bug reports and multiple first-time contributors.

---

## 2. Releases
### v2.2.0-beta.7 (Released 2026-09-02)
**Changes:**
- **fix(memory)**: Normalize backend-specific embedding dimensions ([#7465](https://github.com/agentscope-ai/QwenPaw/pull/7465))
- **chore**: Version bump to v2.2.0b7 ([#7485](https://github.com/agentscope-ai/QwenPaw/pull/7485))
- **fix(webui)**: Add dark-mode overrides for MCP components

**Breaking Changes / Migration Notes:** None explicitly documented in this beta. The embedding dimension fix may affect users with custom embedding backends — verify vector store compatibility after upgrade.

**Release Verification:** Installation verification issue auto-created ([#7503](https://github.com/agentscope-ai/QwenPaw/issues/7503)) with 4-hour deadline for platform checkpoints.

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#7489](https://github.com/agentscope-ai/QwenPaw/pull/7489) | **Fix** | Preserve PyInstaller multiprocessing runtime hook — fixes macOS Desktop backend restart when StdIO MCP spawns child process | **High** — unblocks macOS Desktop + MCP usage |
| [#7481](https://github.com/agentscope-ai/QwenPaw/issues/7481) | **Fix** (via issue closure) | macOS StdIO MCP spawn child re-enters backend_guard and kills active backend | **High** — same root cause as #7489 |
| [#7471](https://github.com/agentscope-ai/QwenPaw/issues/7471) | **Fix** | MCP clients page white background in dark mode | Medium — UI polish |
| [#7464](https://github.com/agentscope-ai/QwenPaw/issues/7464) | **Fix** | DashScope Embedding index rebuild remains disabled (config detected as unsaved) | Medium — ReMe memory functionality |
| [#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417) | **Fix** | Console stream duplicated text chunks mid-stream | Medium — streaming UX |
| [#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464) | **Fix** | Connection test failed for all models on Platform deployment | **High** — core connectivity |
| [#7483](https://github.com/agentscope-ai/QwenPaw/issues/7483) | **Fix** | Agent cron `share_session=true` reloads primary context each run, timed-out runs leave stuck state | **High** — cron reliability |
| [#7508](https://github.com/agentscope-ai/QwenPaw/pull/7508) | **Feat** (closed duplicate) | Make-Skill v2: approval-driven, script-based skill creation workflow | Medium — developer tooling |
| [#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511) | **Security** (closed) | Security sandbox breach reported — details in Zhihu link | **Critical** — see Bugs section |

**Net Progress:** 10 PRs merged/closed, addressing macOS stability, memory config, streaming UX, model connectivity, and cron reliability. The Make-Skill v2 PR was closed as duplicate (#7509 remains open).

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Core Need | Analysis |
|------|----------|-----------|----------|
| **[#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450)** (7💬) | 7 | **Main agent passivity** — doesn't poll sub-agent status until user asks "progress" | Architectural gap in multi-agent orchestration: missing proactive monitoring/heartbeat mechanism. Users expect autonomous progress tracking. |
| **[#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417)** (6💬) | 6 | **Stream duplication** — SSE replay path sends duplicate chunks, consolidated copy at end | Streaming pipeline regression affecting both Console and backend. Indicates event buffering/replay logic flaw. |
| **[#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443)** (5💬) | 5 | **Security bypass** — dangerous instructions evade governance | References external Zhihu article. Suggests policy evaluation gaps in `governance/policy.py`. |
| **[#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469)** (4💬) | 4 | **ReMe background job failure** — `as_embedding:default` accessed before `start()` | Initialization order bug in long-term memory pipeline. Silent failure = data loss risk. |
| **[#7487](https://github.com/agentscope-ai/QwenPaw/pull/7487)** (PR, active) | — | **Theme token unification** | Large UI refactor addressing [#7406](https://github.com/agentscope-ai/QwenPaw/issues/7406) (theming support) and [#7376](https://github.com/agentscope-ai/QwenPaw/issues/7376) (icon consistency). |

**Underlying Themes:**
1. **Multi-agent autonomy** — users expect proactive coordination, not reactive querying
2. **Streaming reliability** — SSE/event handling remains fragile across frontend/backend
3. **Governance trust** — security model perceived as leaky (sandbox breach + policy bypass)
4. **Desktop/MacOS maturity** — PyInstaller, multiprocessing, StdIO MCP integration pain points

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Description | Fix PR / Status |
|----------|-------|-------------|-----------------|
| **🔴 Critical** | [#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511) | **Security sandbox breached** — external report with PoC (Zhihu link). Closed same day, but no fix PR visible. | **No fix PR linked** — requires immediate maintainer audit |
| **🔴 Critical** | [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) | ReMe background embedding job fails silently — `as_embedding:default` accessed before `start()`. New memories not indexed. | No fix PR yet |
| **🟠 High** | [#7476](https://github.com/agentscope-ai/QwenPaw/issues/7476) | Cron tasks duplicate in `misfire_grace` window — backup script ran 2x, 17-48s apart | No fix PR yet |
| **🟠 High** | [#7480](https://github.com/agentscope-ai/QwenPaw/issues/7480) | Upgrade restart triggers unscheduled cron runs; cancelled tasks don't write inbox; console inbox auto-read | Partially addressed by [#7483](https://github.com/agentscope-ai/QwenPaw/issues/7483) fix |
| **🟠 High** | [#7512](https://github.com/agentscope-ai/QwenPaw/issues/7512) | Cannot switch sessions while agent is thinking/outputting (v2.1.0) | No fix PR yet |
| **🟡 Medium** | [#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447) | Long context: early records **permanently lost** after manual compression cycles (160-page docs, 1M token setting) | No fix PR — potential context truncation bug |
| **🟡 Medium** | [#7496](https://github.com/agentscope-ai/QwenPaw/issues/7496) | CRITICAL-type rules directly rejected instead of triggering approval inquiry (policy.py logic) | No fix PR |
| **🟡 Medium** | [#7510](https://github.com/agentscope-ai/QwenPaw/issues/7510) | `/memory/status` returns 500 on v2.2.0-beta.7 Desktop (Windows/Tauri) | No fix PR — new regression in beta.7 |
| **🟡 Medium** | [#7507](https://github.com/agentscope-ai/QwenPaw/issues/7507) | WeCom channel streams char-by-char (150ms throttle) vs WeChat full segments | No fix PR |
| **🟢 Low** | [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) | Custom provider loading fails post-#7337 (max_tokens → max_output_length migration) | Likely fixed in [#7500](https://github.com/agentscope-ai/QwenPaw/pull/7500) (extra_headers) or related |
| **🟢 Low** | [#7493](https://github.com/agentscope-ai/QwenPaw/issues/7493) | Agent model routing panel not reachable in Console UI (requires `showAdvancedModelControls=true`) | Addressed by [#7501](https://github.com/agentscope-ai/QwenPaw/pull/7501) (adds routing settings) |

**Fix Coverage:** 4/16 active bugs have linked fix PRs (#7501, #7500, #7489, #7483). Critical security and memory bugs lack visible fixes.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Signal Strength | Likelihood for v2.2.0 / v2.3 |
|---------|----------|-----------------|-------------------------------|
| **A2A Protocol Support** | [#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484) | High — architectural commitment in docs, only MCP implemented | **v2.3+** — requires Driver mechanism unification |
| **Official Theming (accent, font, spacing)** | [#7406](https://github.com/agentscope-ai/QwenPaw/issues/7406) + [#7487](https://github.com/agentscope-ai/QwenPaw/pull/7487) | High — active PR (#7487), multiple UI consistency issues | **v2.2.0** — theme token unification PR open |
| **Agent Model Routing Panel** | [#7493](https://github.com/agentscope-ai/QwenPaw/issues/7493) + [#7501](https://github.com/agentscope-ai/QwenPaw/pull/7501) | High — PR #7501 implements sub-agent model config, fallback models, free-model toggle | **v2.2.0** — PR open, addresses gap |
| **Make-Skill v2 (approval-driven workflow)** | [#7509](https://github.com/agentscope-ai/QwenPaw/pull/7509) | Medium — "DO NOT MERGE" label, but substantial work | **v2.3+** — needs review/iteration

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-03

---

## 1. Today's Overview

ZeroClaw shows **high architectural churn** with 50 issues and 50 PRs updated in the last 24 hours, but **zero merges** among the top 20 PRs by activity. The project is deep in a **multi-RFC revision cycle** — 9 of the top 10 issues are RFCs in various states (proposed, accepted, in-progress) — indicating maintainers are reshaping core boundaries around memory, sessions, sandboxing, provider protocols, and channel transports. Three PRs were merged/closed today (not visible in the top-20 list), but the open PR queue is dominated by large, security-sensitive refactors (size:XL/L) awaiting author action or maintainer review. **Health signal**: active governance, but delivery velocity appears blocked on review capacity.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Project Progress (Merged/Closed Today)

| Item | Type | Summary | Link |
|------|------|---------|------|
| #9855 | Bug (Closed) | Matrix channel: fixed homeserver resolution via `.well-known/matrix/client` delegation | [#9855](https://github.com/zeroclaw-labs/zeroclaw/issues/9855) |
| #10193 | Bug (Closed) | Matrix: full reasoning collision with generated thinking status resolved | [#10193](https://github.com/zeroclaw-labs/zeroclaw/issues/10193) |
| #10147 | Bug (Closed) | Config init: explicit sections can now be completed across CLI processes | [#10147](https://github.com/zeroclaw-labs/zeroclaw/issues/10147) |
| #9760 | Bug (Closed) | Web Quickstart: channel descriptor defaults now display correctly | [#9760](https://github.com/zeroclaw-labs/zeroclaw/issues/9760) |
| #10456 | Bug (Closed) | MCP SSE reader: fixed suffix acceptance after oversized event | [#10456](https://github.com/zeroclaw-labs/zeroclaw/issues/10456) |
| #9680 | Enhancement (Closed) | CI: audited remaining CLI/hardware path-label ownership | [#9680](https://github.com/zeroclaw-labs/zeroclaw/issues/9680) |
| #10286 | Bug (Closed) | ZeroCode: restored transcripts no longer omit persisted turns after history trimming | [#10286](https://github.com/zeroclaw-labs/zeroclaw/issues/10286) |
| #10243 | Enhancement (Closed) | Retired/superseded unused legacy HMAC node transport | [#10243](https://github.com/zeroclaw-labs/zeroclaw/issues/10243) |
| #10510 | Docs (Closed) | Upgraded mdBook to 0.5.4 with built-in image zoom | [#10510](https://github.com/zeroclaw-labs/zeroclaw/issues/10510) |

**Note**: All closed items were created earlier (Aug 2–30) and closed/updated today. No merged PRs appear in the top-20 active PR list — the 3 merged/closed PRs are likely smaller or older.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | Core Theme | Underlying Need |
|------|------|----------|------------|-----------------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC (Open) | 32 | Runtime-owned conversation sessions + transport surface adapters (ACP) | **Unify session lifecycle** across web, CLI, ACP; replace fragmented ownership |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | RFC (Accepted) | 25 | Decouple memory lifecycle policy from storage backends | **Clean architecture boundary**: governance ≠ storage |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC (In-Progress) | 22 | Granular sandbox policy — filesystem & network restrictions | **Security hardening**: align app-layer policy with OS sandboxes (Bubblewrap, Landlock, Seatbelt) |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | RFC (Accepted) | 19 | Separate authoritative memory storage from enrichment connectors | **Memory architecture**: single source of truth + optional enrichers |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | RFC (Open) | 19 | Make wire protocol first-class in provider construction | **Provider onboarding**: protocol-aware construction, not ad-hoc |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | RFC (Accepted) | 16 | Computer-use support: desktop screen interaction & input control | **Agent autonomy**: bounded approval, session arming, sidecar trust |
| [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) | Tracker (Open) | 15 | Session-persistence contract ownership & layer ordering | **Coordination**: 4 workstreams touching same contract, no owner |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker (Accepted) | 14 | Maintainer decision queue for RFCs/design issues | **Governance scaling**: triage backlog of high-risk decisions |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | RFC (Accepted) | 13 | Verbatim channel send over gateway without agent turn | **Gateway flexibility**: direct channel injection for automation |
| [#9975](https://github.com/zeroclaw-labs/zeroclaw/issues/9975) | RFC (Accepted) | 12 | Web bundle/daemon compatibility for `web_dist_dir` | **Web deployment**: explicit compatibility contract |

**Pattern**: The top 10 are all RFCs/trackers — **architectural decisions dominate community attention**. Contributors are debating *boundaries* (memory, sessions, sandbox, providers, channels) rather than features.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Component | Status | Fix PR? |
|----------|-------|-----------|--------|---------|
| **S0** (Security/Data Loss) | [#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) | Independent delegate bypasses `block_high_risk_commands` | Open, In-Progress | [#10188](https://github.com/zeroclaw-labs/zeroclaw/pull/10188) (Open, needs-maintainer-review) |
| **S0** (Security/Data Loss) | [#9855](https://github.com/zeroclaw-labs/zeroclaw/issues/9855) | Matrix homeserver resolution bypass | **Closed** | Fixed |
| **S1** (Workflow Blocked) | [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | Web dashboard: agents stop on chat exit | Open, In-Progress | None visible |
| **S2** (Degraded) | [#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523) | Bootstrap file truncation at 6k chars invisible to operator | Open | None |
| **S2** (Degraded) | [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | Interactive session caps context at 32k tokens (ignores 131k config) | Open, In-Progress | Related: [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) (context compaction ratio) |
| **S2** (Degraded) | [#10501](https://github.com/zeroclaw-labs/zeroclaw/issues/10501) | MCP tool-result images 400 on OpenAI-compatible providers | Open, In-Progress | [#10566](https://github.com/zeroclaw-labs/zeroclaw/pull/10566) (Open) |
| **S2** (Degraded) | [#10456](https://github.com/zeroclaw-labs/zeroclaw/issues/10456) | MCP SSE reader accepts suffix after oversized event | **Closed** | Fixed |
| **S3** (Minor) | [#10193](https://github.com/zeroclaw-labs/zeroclaw/issues/10193) | Matrix reasoning collides with thinking status | **Closed** | Fixed |
| **S3** (Minor) | [#9760](https://github.com/zeroclaw-labs/zeroclaw/issues/9760) | Web Quickstart: channel defaults not shown | **Closed** | Fixed |

**Critical gap**: Two S0 bugs (#10165, #9855) — one fixed, one with a fix PR stalled on maintainer review. S1 web dashboard bug (#8559) has no visible fix PR.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Runtime-owned sessions + ACP transport adapters** | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) (RFC Rev 5, 32 comments) | High — active revision, maintainer-driven |
| **Memory lifecycle policy decoupled from storage** | [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) (Accepted) | High — accepted, implementation likely underway |
| **Granular sandbox policy (fs/net)** | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) (In-Progress) | High — in-progress, security-critical |
| **Authoritative memory storage + enrichment connectors** | [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) (Accepted) | High — maintainer takeover revision |
| **Wire protocol as first-class in providers** | [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) (Open, needs review) | Medium — needs maintainer review |
| **Computer-use (desktop screen/input)** | [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) (Accepted) | Medium — accepted, security clarifications done |
| **Verbatim channel send via gateway** | [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) (Accepted) | Medium — accepted, follow-up |
| **Web bundle/daemon compatibility contract** | [#9975](https://github.com/zeroclaw-labs/zeroclaw/issues/9975) (Accepted) | Medium — accepted, web deployment blocker |
| **AI-assisted PR pre-review SOP** | [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) (Accepted) | High — process change, already in pilot |
| **Append-only session event history + deterministic replay** | [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) (New RFC, 3 comments) | Low — very early, needs maintainer review |

**Prediction**: Next version will likely ship **memory architecture split (#6850/#9103)**, **sandbox policy unification (#6996)**, and **session ownership fixes (#9487/#9600)**. Web dashboard multi-chat (#9353) and context compaction ratio (#9535) are also far along in large PRs.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Agents stop working when web chat closed** | [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) (S1, 5 comments) | **Blocks background/long-running tasks** — users cannot leave dashboard |
| **Context capped at 32k despite 131k config** | [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) (S2, 4 comments) | **Silent degradation** — users think they have large context but don't |
| **Bootstrap files silently truncated at 6k chars** | [#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523) (S2, 4 comments) | **Invisible data loss** — AGENTS.md/SOUL.md/IDENTITY.md/USER.md cut without warning |
| **Independent delegates bypass security policy** | [#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) (S0, 6 comments) | **Security hole** — `rm` and high-risk commands execute despite `block_high_risk_commands=true` |
| **MCP tool images fail on OpenAI-compatible providers** | [#10501](https://github.com/zeroclaw-labs/zeroclaw/issues/10501) (S2, 3 comments) | **Breaks multimodal workflows** — image results become 400 errors |
| **Matrix homeserver discovery broken** | [#9855](https://github.com/zeroclaw-labs/zeroclaw/issues/9855) (S0, closed) | **Channel setup fails** — standard `.well-known` delegation ignored |
| **Config init sections can't be completed across CLI runs** | [#10147](https://github.com/zeroclaw-labs/zeroclaw/issues/10147) (S2, closed) | **Onboarding broken** — partial config persists, unrecoverable |

**Satisfaction signals**: Users are filing **detailed, reproducible bugs** with component/severity labels — indicates engaged, technical user base. Dissatisfaction centers on **silent failures** (truncation, context caps, policy bypasses) and **web UX gaps** (background execution, multi-chat).

---

## 8. Backlog Watch (Stalled High-Priority Items)

| Item | Type | Age | Blockers | Why It Matters |
|------|------|-----|----------|----------------|
| [#10188](https://github.com/zeroclaw-labs/zeroclaw/pull/10188) | PR (Fix for S0 #10165) | 14 days | **needs-maintainer-review** | **Critical security fix** — independent delegates bypass `block_high_risk_commands` |
| [#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745) | PR (Memory: per-agent attribution) | 30 days | **needs-author-action**, size:XL | **Knowledge graph security** — mandatory agent ownership, scoped reads |
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) | PR (Tools: per-agent ownership) | 30 days | **needs-author-action**, size:XL | **Session/Discord tools scoping** — closes check/use races |
| [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) | PR (CLI: egress grant ceremony) | 34 days | **distinguished contributor**, size:XL | **Plugin security** — install/list permission grants |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/1039

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*