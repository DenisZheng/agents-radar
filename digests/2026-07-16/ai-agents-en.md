# OpenClaw Ecosystem Digest 2026-07-16

> Issues: 468 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-16 02:01 UTC

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

# OpenClaw Project Digest — 2026-07-16

## 1. Today's Overview
OpenClaw shows **extremely high activity** with 468 issues and 500 PRs updated in the last 24 hours, indicating a project in active crisis response mode. The v2026.7.2-beta.1 release shipped yesterday with remote coding session capabilities, but the 2026.7.1 release has triggered **multiple P0 crash-loop regressions** preventing gateway startup for upgrading users. The issue/PR ratio (300 open issues, 323 open PRs) suggests maintainers are actively triaging and fixing, but the backlog of critical bugs—particularly around legacy state migration, session handling, and provider integrations—remains substantial. Community engagement is high (top issues have 10-113 comments), signaling urgent user impact.

## 2. Releases
### v2026.7.2-beta.1 (2026-07-15)
**Highlights:**
- **Remote coding sessions**: Run Control UI sessions on cloud workers; open Codex and Claude catalog sessions in terminals on their owning hosts; resume OpenCode and Pi sessions directly in a terminal ([#107670](https://github.com/openclaw/openclaw/pull/107670), [#107086](https://github.com/openclaw/openclaw/pull/107086), [#107200](https://github.com/openclaw/openclaw/pull/107200))
- **Native automation and nodes**: (details truncated in source)

**Migration Notes:** Users upgrading from 2026.6.x → 2026.7.1 experienced fatal gateway crash-loops due to legacy memory sidecar conflicts ([#107220](https://github.com/openclaw/openclaw/issues/107220)). The 2026.7.2-beta.1 likely includes fixes for these migration issues—verify `openclaw doctor --fix` resolves conflicts before upgrading production instances.

## 3. Project Progress (Merged/Closed PRs Today)
**177 PRs merged/closed in last 24h** — key fixes delivered:

| PR | Area | Fix Summary |
|----|------|-------------|
| [#108225](https://github.com/openclaw/openclaw/pull/108225) | Config Backup | Allow config backup snapshot retry after transient I/O failure (fixes [#106581](https://github.com/openclaw/openclaw/issues/106581)) |
| [#108177](https://github.com/openclaw/openclaw/pull/108177) | MCP | Preserve image blocks in `normalizeToolCallContent` (fixes [#108082](https://github.com/openclaw/openclaw/issues/108082)) |
| [#107727](https://github.com/openclaw/openclaw/issues/107727) | Gateway | Gateway refuses readiness after 2026.7.1 update due to plugin install metadata conflict — **closed** |
| [#107330](https://github.com/openclaw/openclaw/issues/107330) | Installer | OpenClaw update 2026.7.1 crash on Windows — **closed** |
| [#103734](https://github.com/openclaw/openclaw/issues/103734) | Codex | Usage-limit surfaced as `promptError`, not thrown — model fallback never fires — **closed** |
| [#107683](https://github.com/openclaw/openclaw/issues/107683) | Exec Security | Allow-always script grants survive content changes — **closed** (security fix) |

**Trend:** Fixes cluster around **gateway startup crashes**, **state migration**, **tool result handling**, and **provider integration bugs** — all regressions from 2026.7.1.

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | 👍 | Core Issue | Underlying Need |
|------|----------|-----|------------|-----------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 113 | 81 | No native apps for Linux/Windows (macOS/iOS/Android exist) | **Platform parity** — users want full-feature desktop agents on all OSes |
| [#104721](https://github.com/openclaw/openclaw/issues/104721) Tool results return "(see attached image)" | 17 | 1 | **P0 Regression**: All tool output replaced with placeholder string | **Data integrity** — agents unusable; file reads return literal placeholder |
| [#102020](https://github.com/openclaw/openclaw/issues/102020) Second message fails with session conflict | 14 | 1 | Cross-channel, position-dependent session initialization conflict | **Session reliability** — multi-turn conversations break after first turn |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) Codex hook relay CPU spike | 12 | 2 | `openclaw-hooks` processes consume 100%+ CPU, stall gateway RPC | **Performance/stability** — native hook relay architecture flawed |
| [#107220](https://github.com/openclaw/openclaw/issues/107220) 2026.7.1 gateway crash-loop: legacy memory sidecar conflicts | 8 | 1 | `meta`/`chunks` conflicts fatal while `files` auto-resolve | **Upgrade safety** — inconsistent conflict handling blocks startup |
| [#107694](https://github.com/openclaw/openclaw/issues/107694) Strict startupMigrationWarnings guard on benign skips | 7 | 0 | Gateway fails to start due to over-strict migration warnings | **Operability** — `openclaw doctor` doesn't resolve; no documented remedy |

**Analysis:** Top issues reveal **three systemic pain points**: (1) **Session/state management fragility** (conflicts, overwrites, takeover errors), (2) **Migration/upgrade reliability** (crash-loops, false-positive guards), (3) **Provider/tool output corruption** (placeholders, empty args, schema mismatches).

## 5. Bugs & Stability — Ranked by Severity

### 🔴 P0 / Release Blockers (Active)
| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#104721](https://github.com/openclaw/openclaw/issues/104721) Tool results return "(see attached image)" literal | **Data corruption** — all file/tool output broken | Open | None linked |
| [#107220](https://github.com/openclaw/openclaw/issues/107220) Gateway crash-loop: legacy memory sidecar `meta`/`chunks` conflicts fatal | **Startup failure** — upgrade blocks all users | Open | None linked |
| [#107694](https://github.com/openclaw/openclaw/issues/107694) Gateway fails to start due to strict migration warnings guard | **Startup failure** — benign skips treated as fatal | Open | None linked |
| [#101763](https://github.com/openclaw/openclaw/issues/101763) Hosted Molty: model selector doesn't persist — API receives `claude-opus-4.8` (dot) vs `claude-opus-4-8` (dash) | **API incompatibility** — all agent replies fail | Open | None linked |
| [#107330](https://github.com/openclaw/openclaw/issues/107330) Windows `openclaw update` crash | **Installer crash** | Closed | Likely fixed in 2026.7.2-beta.1 |

### 🟠 P1 / High Impact
| Issue | Area | Status |
|-------|------|--------|
| [#102020](https://github.com/openclaw/openclaw/issues/102020) Second message fails with "reply session initialization conflicted" | Session state | Open |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) Codex PreToolUse hook relay spawns CPU-bound processes | Performance/CPU | Open |
| [#107449](https://github.com/openclaw/openclaw/issues/107449) Cron tool JSON Schema incompatible with llama.cpp (`pattern: "\S"`) | Provider integration | Open |
| [#106779](https://github.com/openclaw/openclaw/issues/106779) Local llama.cpp provider fails: "Unable to generate parser for this template" | Local models | Open |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) WhatsApp 1:1 inbound image wedges main lane ~3min | Channel delivery | Open |
| [#94518](https://github.com/openclaw/openclaw/issues/94518) DeepSeek cache hit rate <10% after 6.x upgrade — boundary-aware caching breaks prefix matching | Provider caching | Open |

### 🟡 P2 / Stability
| Issue | Area |
|-------|------|
| [#90213](https://github.com/openclaw/openclaw/issues/90213) Legacy state migration warnings persist after `doctor --fix` | Migration |
| [#84583](https://github.com/openclaw/openclaw/issues/84583) Cron announce delivery triggers `EmbeddedAttemptSessionTakeoverError` | Cron/sessions |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) Webhook hook sessions don't reuse sessionKey for multi-turn | Webhooks |
| [#93139](https://github.com/openclaw/openclaw/issues/93139) Write tool & exec heredocs insert literal `\n` instead of newlines | Tool execution |
| [#77012](https://github.com/openclaw/openclaw/issues/77012) WebChat session transcript overwritten on every turn (5.2 regression) | Web UI |

## 6. Feature Requests & Roadmap Signals

| Request | Signals | Likelihood for Next Version |
|---------|---------|----------------------------|
| **Linux/Windows native apps** ([#75](https://github.com/openclaw/openclaw/issues/75), 113 comments, 81 👍) | Highest community demand; "help wanted", "needs-product-decision" | Medium — labeled `clawsweeper:needs-product-decision`, no active PR |
| **Multi-turn webhook sessions via sessionKey** ([#11665](https://github.com/openclaw/openclaw/issues/11665)) | Documented but broken; `clawsweeper:linked-pr-open` | High — fix shape clear, linked PR exists |
| **Intelligent multi-LLM router for cost optimization** ([#107686](https://github.com/openclaw/openclaw/issues/107686)) | New feature request (P3); clear ROI narrative | Low — no triage labels, likely backlog |
| **Lifecycle-aware LLM curation for MEMORY.md** ([#87660](https://github.com/openclaw/openclaw/issues/87660)) | Memory management gap; "off-meta tidepool" (exploratory) | Low — exploratory, no fix PR |
| **AI safety/quality observability events** ([#82548](https://github.com/openclaw/openclaw/issues/82548)) | Observability gap; security-labeled | Medium — aligns with enterprise needs |
| **Expose `memory_store` as callable agent tool** ([#84242](https://github.com/openclaw/openclaw/issues/84242)) | Registered but not exposed; 3 👍 | Medium — clear implementation gap |

**Prediction:** Next patch (2026.7.2 stable) will prioritize **crash-loop fixes**, **migration guard relaxation**, and **tool output corruption**. Platform apps (Linux/Windows) and multi-LLM router remain longer-term.

## 7. User Feedback Summary

### Pain Points (from issue descriptions)
- **"Completely broken — actual data replaced with placeholder string"** ([#104721](https://github.com/openclaw/openclaw/issues/104721)) — tool output unusable
- **"Gateway never comes up... crash-looping under launchd"** ([#107227](https://github.com/openclaw/openclaw/issues/107227)) — upgrade blocks all work
- **"Every agent reply fails because API receives model id with dot instead of dash"** ([#101763](https://github.com/openclaw/openclaw/issues/101763)) — hosted instances broken
- **"WebChat transcript overwritten on every turn — on refresh, all previous messages gone"** ([#77012](https://github.com/openclaw/openclaw/issues/77012)) — data loss
- **"Legacy state migration warnings keep appearing even after running `openclaw doctor --fix`"** ([#90213](https://github.com/openclaw/openclaw/issues/90213)) — tooling trust erosion

### Use Cases Revealed
- **Self-hosted production** (usemolty.com, WSL2, macOS, Windows) — upgrade reliability critical
- **Multi-channel deployments** (Telegram, Discord, WhatsApp, Feishu, Zalo, Nextcloud Talk, Signal, Matrix)
- **Local model inference** (llama.cpp, Ollama, Gradium) — parser/template compatibility issues
- **Cron/automation workflows** — isolated sessions, webhook hooks, announce delivery
- **Enterprise/team settings** — multi-account, plugin approvals, audit hooks, config backup

### Satisfaction Signals
- **High engagement on bugs** (10-113 comments) = users invested, not churning
- **Many "regression" labels** = trust in prior versions, frustration with 2026.7.1
- **"help wanted" on platform apps** = community willing to contribute if guided

## 8. Backlog Watch — Long-Unanswered Important Items

| Item | Age | Labels | Why It Matters |
|------|-----|--------|----------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | **198 days** (2026-01-01) | `enhancement`, `help wanted`, `P2`, `needs-product-decision`, `needs-security-review` | **Highest community demand** (113 comments, 81 👍); blocks platform parity |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) Webhook hook sessions should reuse sessionKey | **159 days** (2026-02-08) | `enhancement`, `P2`, `linked-pr-open`, `impact:session-state`, `impact:data-loss`, `impact:security` | **Documented feature broken**; security impact; PR linked but stale |
| [#84583](https://github.com/openclaw/openclaw/issues/84583) Cron announce delivery triggers takeover error | **58 days** (2026-05-20) | `P2`, `linked-pr-open`, `impact:session-state`, `impact:message-loss` | **Cron reliability** — core automation feature; PR linked |
| [#77012](https://github.com/openclaw/opencl

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent / Assistant Open-Source Ecosystem (2026-07-16)

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **bimodal maturity**: a cluster of production-grade platforms (OpenClaw, ZeroClaw, IronClaw, Hermes Agent, CoPaw) operating at high velocity with complex multi-channel, multi-provider architectures, and a long tail of specialized or early-stage projects (PicoClaw, NanoClaw, Moltis, LobsterAI, TinyClaw) addressing niche deployments or specific provider integrations. **Crisis-driven development** characterizes the top tier—OpenClaw and CoPaw both shipped major versions (v2026.7.x, v2.0) that introduced P0 regressions, triggering intense patch cycles. **Architectural rewrites** are underway simultaneously at IronClaw ("Reborn"), ZeroClaw (Schema V4, SOP engine), and Hermes Agent (plugin runtime), signaling a platform consolidation around **platform maturation beyond MVP**. Community engagement is high where user-facing breakage occurs (OpenClaw: 113 comments on platform parity; CoPaw: 5+ comments on memory loss), but **automation/scriptability gaps** persist across projects as a cross-cutting unmet need.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Status | Health Indicator |
|---------|----------------|-------------|----------------|------------------|
| **OpenClaw** | 468 | 500 | v2026.7.2-beta.1 (07-15) | 🔴 Crisis response (P0 crash-loops) |
| **Hermes Agent** | 50 | 50 | None (latest v0.18.2) | 🟡 Yellow (review bottleneck, 50 open PRs) |
| **IronClaw** | 23 | 38 | None (latest v0.29.1) | 🟡 High velocity, architectural transition |
| **ZeroClaw** | 38 | 50 | **v0.8.3** (379 commits, 56 contributors) | 🟢 Strong velocity, growing architectural debt |
| **CoPaw** | 50 | 43 | None (latest v2.0.0.post2) | 🟡 Active stabilization (v2.0 regressions) |
| **NanoClaw** | 2 | 11 | None | 🟢 Healthy (steady merging, clear issue→fix flow) |
| **Moltis** | 1 (updated) | 6 merged | None | 🟢 Strong (high merge velocity, no open PRs) |
| **LobsterAI** | 5 closed | 11 merged | **v2026.7.15** (07-15) | 🟡 Polishing, new ad regression (#2342) |
| **PicoClaw** | 6 | 2 | None (latest v0.3.1) | 🟡 Caution (stale closures, ARM64 gap) |
| **TinyClaw** | 0 | 0 | None | ⚪ Quiet (maintenance phase) |
| **NullClaw** | 0 | 0 | Unknown | ⚪ Inactive |
| **ZeptoClaw** | 0 | 0 | Unknown | ⚪ Inactive |
| **NanoBot** | — | — | Unknown | ⚪ Data unavailable |

*Note: "Updated" = GitHub activity in last 24h (comments, edits, status changes). Merged PRs counted separately where reported.*

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Largest community engagement**: 113 comments on platform parity (#75), 81 👍 — highest user investment signal in ecosystem
- **Broadest channel matrix**: Telegram, Discord, WhatsApp, Feishu, Zalo, Nextcloud Talk, Signal, Matrix — exceeds all peers
- **Remote coding session leadership**: First to ship cloud-worker session resumption (Codex, Claude, OpenCode, Pi) in v2026.7.2-beta.1
- **Enterprise readiness signals**: Config backup, plugin approvals, audit hooks, multi-account — features peers are still designing

### Technical Approach Differences
| Dimension | OpenClaw | Typical Peer Approach |
|-----------|----------|----------------------|
| **Session/state model** | Centralized gateway with memory sidecars, legacy migration complexity | Simpler file/DB state (NanoClaw, Moltis) or distributed (ZeroClaw SOP engine) |
| **Provider abstraction** | Deep per-provider hooks (Codex relay, Molty hosted) | Generic OpenAI-compat + few custom (Hermes, IronClaw) |
| **Upgrade strategy** | In-place migration with `doctor --fix` (currently failing) | Schema version cuts (ZeroClaw V4) or containerized stateless (NanoClaw) |
| **Desktop delivery** | Electron/Tauri apps for macOS/iOS/Android only | Tauri (CoPaw, Hermes), Electron (LobsterAI), or CLI-only (NanoClaw, ZeroClaw) |

### Community Size Comparison
- **OpenClaw**: 300 open issues, 323 open PRs, 10–113 comments on top issues → **largest active contributor/user base**
- **ZeroClaw**: 56 contributors on v0.8.3 release → **largest credited contributor count**
- **CoPaw/Hermes/IronClaw**: 40–50 PRs/day velocity → **comparable core team intensity**
- **Others**: <10 PRs/day → **smaller teams or niche focus**

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Need |
|-------------|-------------------|---------------|
| **Session/state reliability** | OpenClaw (#102020, #107220), Hermes (#64789, #65297, #52514), CoPaw (#6148, #5995), IronClaw (#5834, #5877) | Crash-loop-free upgrades, session resume, cross-turn context retention, no silent message drops |
| **Provider/tool output integrity** | OpenClaw (#104721 placeholder bug), Hermes (#63680 Ollama tools), CoPaw (#6129 thinking blocks), ZeroClaw (#5600 Kimi streaming) | Structured tool results, streaming completeness, reasoning_content preservation |
| **Migration/upgrade safety** | OpenClaw (2026.7.1 crash-loops), ZeroClaw (Schema V4 cut), IronClaw (v1→Reborn), LobsterAI (model migration) | Automated config migration, rollback capability, backward-compatible schema evolution |
| **Scriptable/automation surfaces** | Hermes (#23359 model inventory, #3326 JSON output), OpenClaw (implied by MCP), ZeroClaw (RFC #6641 OTel), CoPaw (MCP env migration) | CLI `--output-format json`, programmatic model/channel management, CI/CD integration |
| **Security hardening** | ZeroClaw (forbid unsafe, OIDC, audit pipeline), IronClaw (OAuth scope ceiling, backup staging), Hermes (backup perms, approval flows), CoPaw (editable install leak) | Supply-chain, authZ, audit trails, pluggable enforcement |
| **Multi-provider fallback/routing** | NanoClaw (#3057 Claude→Codex), OpenClaw (#103734 Codex fallback broken), Moltis (#574 per-topic routing), ZeroClaw (idle-bound SSE) | Quota-aware failover, task-type routing, unified token accounting |
| **Desktop/container lifecycle** | Hermes (PPID=1 leak, console flash), PicoClaw (ARM64 binary), LobsterAI (update overlay), IronClaw (WebUI modals) | Clean shutdown, cross-platform binaries, non-blocking updates, resource cleanup |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Technical Architecture |
|---------|---------------|-------------|------------------------|
| **OpenClaw** | **Multi-channel gateway + hosted SaaS parity** | Teams, self-hosters, enterprise | Centralized gateway, memory sidecars, plugin system, remote session workers |
| **ZeroClaw** | **SOP-driven automation + security/audit** | DevOps, platform engineers, air-gapped envs | Daemon-owned SOP control plane, WASM plugin host, Git forge channels, Schema V4 |
| **IronClaw** | **Reborn: unified extension runtime + WebUI** | Power users, internal tooling teams | Generic extension runtime, ACP agent registry, tier-2 fault-injection testing |
| **Hermes Agent** | **Plugin ecosystem + desktop reliability** | Developers, plugin authors, local-first users | Plugin interface expansion, AsyncSessionDB, desktop app (Tauri), checkpoint/restore |
| **CoPaw** | **Multi-agent collaboration + Chinese enterprise OS** | Chinese enterprise/govt, multi-agent researchers | ReMe memory, leader/sub-agent delegation, Galaxy Kylin/Win7 support, Chrome extension |
| **NanoClaw** | **Containerized provider runtime + memory** | Self-hosters, multi-provider users | Per-agent containers, persistent memory tree, one-command deploy, OpenCode/Codex/Claude |
| **Moltis** | **Provider/agent aggregation + routing** | Polyglot LLM users, Copilot/Codex heavy | ACP auto-detection (13 agents), JWT token expiry handling, MiniMax/China providers |
| **LobsterAI** | **Desktop UX polish + cowork features** | Chinese knowledge workers, IM integration | Electron, IM session management, quick-action scenarios, GPT-5.6/Grok defaults |
| **PicoClaw** | **Lightweight gateway + Chinese LLM support** | Edge/RPi, Doubao/Volcengine users | DeltaChat bridge, process hooks, ARM64 gap, OAuth provider matrix |
| **TinyClaw** | **CLI team/agent management** | Small teams, CLI workflows | Team/agent CRUD, leader election, minimal dependencies |
| **NanoBot** | *Unknown* | *Unknown* | *Unknown* |
| **NullClaw/ZeptoClaw** | *Inactive* | *Unknown* | *Unknown* |

**Key Architectural Spectrum**:
- **Gateway-centric** (OpenClaw, PicoClaw, Moltis) → single entry point, multi-channel
- **Runtime-centric** (NanoClaw, ZeroClaw, IronClaw) → container/daemon per agent, SOP control
- **Desktop-centric** (Hermes, CoPaw, LobsterAI) → local app, session persistence, UI polish
- **CLI/Tool-centric** (TinyClaw, NanoClaw deploy) → automation-first, minimal UI

---

## 6. Community Momentum & Maturity

### Tier 1: **Rapid Iteration / Crisis Response** (High velocity, active regressions)
- **OpenClaw**: 968 items/24h, P0 crash-loops, 177 PRs merged — *highest raw activity, lowest stability*
- **CoPaw**: 93 updates, 31 issues closed, 22 PRs merged — *post-v2.0 stabilization sprint*
- **ZeroClaw**: 88 updates, v0.8.3 major release — *consolidation phase, architectural debt rising*
- **IronClaw**: 61 updates, 92-commit Reborn reconciliation — *architectural migration in flight*

### Tier 2: **Steady Feature Delivery** (Consistent merging, clear roadmaps)
- **Hermes Agent**: 100 updates, 22 issues closed (mostly `implemented-on-main`) — *review bottleneck, fixes unreleased*
- **NanoClaw**: 13 updates, 4 PRs merged — *healthy issue→fix→merge cycle*
- **Moltis**: 6 PRs merged in batch — *high merge velocity, provider/agent expansion*

### Tier 3: **Polishing / Niche Focus** (Lower velocity, specific domains)
- **LobsterAI**: 11 PRs

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-16

## 1. Today's Overview
Hermes Agent shows **very high development velocity** with 100 items (50 issues + 50 PRs) updated in the last 24 hours. The project is in an active stabilization and feature-expansion phase: 22 issues were closed (mostly as duplicates or "implemented-on-main"), while 50 PRs remain open awaiting review. No new release was cut today. The dominant theme is **plugin infrastructure hardening** (tracking issue #64182 with 12 comments), **desktop app reliability** (session drift, image paste, backup failures), and **security hardening** (backup staging, model cache permissions, approval flows). The zero merged PRs despite 50 open suggests a review bottleneck or batch-merge cadence.

## 2. Releases
**No new releases today.** Current latest remains v0.18.2 (referenced in multiple issues).

## 3. Project Progress — Key Closed Items (Last 24h)
| Item | Type | Summary | Resolution Signal |
|------|------|---------|-------------------|
| [#63911](https://github.com/NousResearch/hermes-agent/issues/63911) | Bug | Telegram DM topic mode silently swallowed kanban wake events | Closed: `cannot-reproduce` + `sweeper:risk-session-state` |
| [#64201](https://github.com/NousResearch/hermes-agent/issues/64201) | Bug | Subagent results lost during main agent streaming | Closed: `sweeper:implemented-on-main` |
| [#64089](https://github.com/NousResearch/hermes-agent/issues/64089) | Feature | `delegate_subagent`/`delegate_task` timeout now configurable | Closed: `duplicate` + `sweeper:implemented-on-main` |
| [#63698](https://github.com/NousResearch/hermes-agent/issues/63698) | Bug | Windows console windows flashing despite `windows_hide_console: true` | Closed: `sweeper:implemented-on-main` |
| [#63712](https://github.com/NousResearch/hermes-agent/issues/63712) | Bug (P0) | `AsyncSessionDB` methods silently dropped without `await` → lost writes | Closed: `sweeper:implemented-on-main` |
| [#63724](https://github.com/NousResearch/hermes-agent/issues/63724) | Bug | Telegram 409 Conflict infinite loop, bot silently deaf for days | Closed: `sweeper:implemented-on-main` |
| [#63805](https://github.com/NousResearch/hermes-agent/issues/63805) | Bug | Linux desktop launch failure: missing `node-pty` linux-x64 binary | Closed: `duplicate` + `sweeper:implemented-on-main` |
| [#63923](https://github.com/NousResearch/hermes-agent/issues/63923) | Feature | Preserve user customizations across desktop updates | Closed: `sweeper:implemented-on-main` |
| [#64079](https://github.com/NousResearch/hermes-agent/issues/64079) | Bug | Studio auto-update misses pip deps in embedded Python (2nd occurrence) | Closed: `sweeper:implemented-on-main` |
| [#64121](https://github.com/NousResearch/hermes-agent/issues/64121) | Bug | CLI duplicate command description for `/compress` and `/compact` | Closed: `sweeper:implemented-on-main` |

**Pattern:** Most closures are marked `sweeper:implemented-on-main`, indicating fixes already landed on `main` branch but not yet released. The sweeper bot is actively cleaning up tracked issues.

## 4. Community Hot Topics (Most Comments/Reactions)

| Item | Comments | 👍 | Core Need |
|------|----------|-----|-----------|
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) **Plugin Interface Expansion — Tracking** | 12 | 0 | **Community-driven plugin API redesign** — contributors with queued PRs need stable, publishable interfaces. Teknium (lead) distilling Discord thread into reference plan. |
| [#63911](https://github.com/NousResearch/hermes-agent/issues/63911) **Telegram DM topic mode swallows events** | 5 | 0 | **Gateway reliability** — root-lobby gate drops kanban wake events when `thread_id` empty; affects multi-thread Telegram workflows. |
| [#23359](https://github.com/NousResearch/hermes-agent/issues/23359) **Provider/model inventory lacks scriptable surface** | 4 | 0 | **Automation gap** — 4 internal ways to list models, none scriptable; blocks CI/MCP/Symphony integrations. Open since May. |
| [#3326](https://github.com/NousResearch/hermes-agent/issues/3326) **CLI `--output-format json` for structured output** | 2 | 5 | **Programmatic orchestration** — highest user reaction (5👍); needed for CI pipelines, MCP servers, Conductor. Open since March. |
| [#37935](https://github.com/NousResearch/hermes-agent/issues/37935) **Delegate-task: preserve approval context (Security)** | 1 | 0 | **CVSS 6.5–7.0** — executor submissions lose approval context; medium/high severity auth bypass risk. |

**Underlying signal:** Contributors want **stable, extensible plugin APIs** (#64182) and **scriptable/automatable surfaces** (#23359, #3326). Security hardening is proactive (multiple security PRs open).

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Component | Fix PR? |
|----------|-------|-----------|---------|
| **P0** | [#63712](https://github.com/NousResearch/hermes-agent/issues/63712) `AsyncSessionDB` silent drops without `await` → lost writes + RuntimeWarning | Agent/Session DB | ✅ Fixed on `main` (`sweeper:implemented-on-main`) |
| **P2** | [#65297](https://github.com/NousResearch/hermes-agent/issues/65297) Desktop image paste broken — session ID drift between `image.attach` and `prompt.submit` | Desktop/Vision | ❌ Open (created today) |
| **P2** | [#64789](https://github.com/NousResearch/hermes-agent/issues/64789) Desktop `prompt.submit` targets stale runtime A when route/session point to B | Desktop/Session | ❌ Open |
| **P2** | [#52514](https://github.com/NousResearch/hermes-agent/issues/52514) Checkpoint restore fails: "target user message no longer in session history" | Desktop/Checkpoint | ❌ Open (since June) |
| **P2** | [#65034](https://github.com/NousResearch/hermes-agent/issues/65034) Dashboard Full Backup fails silently — CLI argument syntax mismatch | Dashboard/Backup | ❌ Open |
| **P2** | [#44771](https://github.com/NousResearch/hermes-agent/issues/44771) Curator LLM review 4-hr loop on symlinked skills, 91M tokens consumed | Agent/Skills | ❌ Open (since June) |
| **P2** | [#63680](https://github.com/NousResearch/hermes-agent/issues/63680) Tool definitions not sent to `provider: custom` (Ollama) — `tool_turns` always 0 | Agent/Provider | ❌ Closed `cannot-reproduce` |
| **P3** | [#63698](https://github.com/NousResearch/hermes-agent/issues/63698) Windows console flash despite `windows_hide_console: true` | CLI/Windows | ✅ Fixed on `main` |
| **P3** | [#63805](https://github.com/NousResearch/hermes-agent/issues/63805) Linux desktop launch fails: missing `node-pty` linux-x64 | Desktop/Linux | ✅ Fixed on `main` |
| **P3** | [#64079](https://github.com/NousResearch/hermes-agent/issues/64079) Studio auto-update misses pip deps in embedded Python (2nd time) | Desktop/Update | ✅ Fixed on `main` |

**Stability insight:** Desktop app has **multiple session-state drift bugs** (#64789, #65297, #52514) suggesting a systemic issue in runtime/session synchronization. Backup and checkpoint features are fragile. Several critical fixes already on `main` but unreleased.

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for Next Version | Rationale |
|---------|-------|----------------------------|-----------|
| **Plugin Interface Expansion** | [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) | **High** | Lead maintainer tracking; 3 Phase PRs already open (#64188, #64189, #64178) |
| **Scriptable Provider/Model Inventory** | [#23359](https://github.com/NousResearch/hermes-agent/issues/23359) | **Medium** | Long-standing (May), blocks 4 PRs + 4 issues; no PR yet |
| **CLI `--output-format json`** | [#3326](https://github.com/NousResearch/hermes-agent/issues/3326) | **Medium** | High user demand (5👍), simple scope; open since March |
| **Configurable Delegate Timeout** | [#64089](https://github.com/NousResearch/hermes-agent/issues/64089) | **High** | Already implemented on `main` per sweeper |
| **Preserve Customizations Across Updates** | [#63923](https://github.com/NousResearch/hermes-agent/issues/63923) | **High** | Implemented on `main` |
| **OpenAI Image Endpoint/Credential Config** | [#65309](https://github.com/NousResearch/hermes-agent/issues/65309) | **Medium** | New today; clear config gap for vision pipeline |
| **MCP Per-Run Metadata Propagation** | [#64890](https://github.com/NousResearch/hermes-agent/issues/64890) | **Medium** | Enterprise/integration need; no PR yet |
| **MiniMax High-Speed Variants** | [#11367](https://github.com/NousResearch/hermes-agent/issues/11367) | **Low** | Simple model list addition; open since April |
| **Config Flags to Suppress System Messages** | [#63555](https://github.com/NousResearch/hermes-agent/issues/63555) | **High** | Implemented on `main` per sweeper |

**Prediction:** Next release (v0.18.3 or v0.19) will likely include: plugin interface Phase 0/1 fixes, delegate timeout config, desktop customization preservation, system message suppression, Windows/Linux desktop fixes, and backup security hardening.

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Desktop session instability** | #64789 (stale runtime), #65297 (image paste drift), #52514 (checkpoint restore), #63516 (new sessions disappear) | High — core desktop workflow broken for project-based work |
| **Backup/checkpoint unreliability** | #65034 (silent backup failure), #52514 (checkpoint restore error) | High — data loss risk, no trust in recovery |
| **No scriptable automation surface** | #23359 (4 internal APIs, none scriptable), #3326 (JSON output for CI) | Medium — blocks CI/CD, MCP, orchestration tools |
| **Telegram gateway silent failures** | #63911 (swallowed events), #63724 (409 loop for 4 days) | Medium — bot goes deaf without alerts |
| **Windows UX regressions** | #63698 (console flash), #64079 (auto-update breaks Python) | Medium — Windows users hit repeatedly |
| **Provider integration gaps** | #63680 (Ollama custom endpoint tools), #65309 (OpenAI image config), #11367 (MiniMax models) | Low-Medium — power users with custom infra |

**Positive signals:** Users invest heavily in customization (#63923 — Islamic features, prayer times, branding), indicating deep daily usage. Community actively proposes plugin ideas (Discord thread → #64182).

## 8. Backlog Watch — Stalled Items Needing Maintainer Attention

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#23359](https://github.com/NousResearch/hermes-agent/issues/23359) **Scriptable model inventory** | 67 days | Blocks 4 PRs + 4 issues; CI/MCP integration gap | No PR; needs design decision on CLI vs API surface |
| [#3326](https://github.com/NousResearch/hermes-agent/issues/3326) **CLI `--output-format json`** | 111 days | Highest user demand (5👍); simple, high-leverage | No PR; low complexity but unassigned |
| [#44771](https://github.com/NousResearch/hermes-agent/issues/44771) **Curator token burn on symlinks** | 34 days | 91M tokens/4hrs = real cost; infinite loop risk | Needs curator symlink handling fix; no PR |
| [#52514](https://github.com/NousResearch/hermes-agent/issues/52514) **Checkpoint restore failure** | 21 days | Data loss fear; desktop core feature | No PR; session history sync issue |
| [#46778](https://github.com/NousResearch/hermes-agent/issues/46778) **Desktop pool backend leak (PPID=1)** | 31 days | Resource leak; orphaned Python processes | No PR; Electron/process management |
| [#11367](https://github.com/NousResearch/hermes-agent/issues/11367) **MiniMax high-speed models** | 90 days | Trivial model list addition | No PR; maintenance overhead low |
| [#37935](https://github.com/NousResearch/hermes-agent/issues/37935) **Delegate approval context (Security)** | 43 days | CVSS 6.5–7.0; auth bypass potential | No PR; security-sensitive, needs review |

**Maintainer action items:**
1. **Triage #23359 & #3326** — high leverage, low effort, long wait
2. **Assign curator symlink fix (#44771)** — cost/reliability impact
3. **Review security PR #64205 (backup hardening), #64202 (cache perms), #64175 (uninstall approval)** — all open security PRs
4. **Batch-merge `sweeper:implemented-on-main` fixes** — 10+ issues fixed on `main` but unreleased
5. **Address desktop session drift cluster** (#64789, #65297, #52514) — systemic, user-visible

---

**Project Health Score: 🟡 Yellow** — High velocity but review bottleneck (50 open PRs, 0 merged), multiple unreleased fixes, and systemic desktop session bugs. Strength: active community, clear roadmap (plugin expansion), proactive security. Risk: desktop stability eroding trust; automation gaps limiting enterprise adoption.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-16

## 1. Today's Overview
PicoClaw shows moderate maintenance activity with **6 issue updates** and **2 open PRs** in the last 24 hours, but **no merged PRs or new releases**. Three bugs were closed as stale (Volcengine tool-call leakage, Codex/Antygravity OAuth failures), while three new issues surfaced: an ARM64 launcher absence, a process-hook deserialization defect, and a gateway stateless-mode request. The two open PRs are a documentation tweak for parallelization and a DeltaChat refactor (-200 LOC). Overall velocity is low; the project is in a bug-triage/refactor phase rather than feature delivery.

## 2. Releases
**None** — no new version published today. Current latest remains **v0.3.1** (build 2026-07-03).

## 3. Project Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#3259](https://github.com/sipeed/picoclaw/pull/3259) | Open | Docs: add note about better parallelization in project description | Low — marketing/docs only |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | Open | Refactor(deltachat): drop legacy code, hard-coded relay list, password config; rename invite fields; add full docs section | Medium — reduces surface area, improves security hygiene, but unmerged since 2026-07-03 |

**No PRs merged today**; both open PRs await review.

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#3153](https://github.com/sipeed/picoclaw/issues/3153) (closed stale) | 4 comments | **Volcengine Doubao Seed tool-call leakage** — raw `<seed:tool_call>` XML shown to users instead of execution; affects production workflows on v0.2.8. |
| [#3197](https://github.com/sipeed/picoclaw/issues/3197) / [#3196](https://github.com/sipeed/picoclaw/issues/3196) (closed stale) | 2 comments each | **Codex & Antygravity OAuth login broken** on v0.2.9 — blocks cloud IDE integration. |
| [#3260](https://github.com/sipeed/picoclaw/issues/3260) | 0 comments, new | **ARM64 launcher missing** from picoclaw.io downloads — blocks Raspberry Pi / aarch64 adoption. |
| [#3258](https://github.com/sipeed/picoclaw/issues/3258) | 0 comments, new | **Process hook `before_tool` broken** — `decision` field dropped, args misparsed due to deserialization bug; breaks custom tool middleware. |
| [#3257](https://github.com/sipeed/picoclaw/issues/3257) | 0 comments, new | **Stateless gateway sessions** — CLI supports `--session` but gateway derives session from channel/chat, preventing fresh conversations per request. |

**Signal**: Users hitting provider-specific tool-call formats (Volcengine), OAuth regressions, and ARM64 distribution gaps. Gateway-mode ergonomics also emerging as a friction point.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#3260](https://github.com/sipeed/picoclaw/issues/3260) | ARM64 launcher not published — entire aarch64 user base (RPi, ARM servers) cannot install from official site. | No |
| **High** | [#3258](https://github.com/sipeed/picoclaw/issues/3258) | `before_tool` hook deserialization defect — `decision` field discarded, args misparsed; breaks security/validation middleware. | No |
| **Medium** | [#3153](https://github.com/sipeed/picoclaw/issues/3153) | Volcengine Doubao tool calls leak as raw XML (closed stale, but root cause likely persists in v0.3.1). | No |
| **Medium** | [#3197](https://github.com/sipeed/picoclaw/issues/3197) / [#3196](https://github.com/sipeed/picoclaw/issues/3196) | Codex & Antygravity OAuth login broken (closed stale, no fix merged). | No |
| **Low** | [#3257](https://github.com/sipeed/picoclaw/issues/3257) | Gateway lacks stateless/no-history mode — UX gap, not a crash. | No |

**Zero bug-fix PRs open** — all regressions currently unattended.

## 6. Feature Requests & Roadmap Signals
| Request | Issue | Likelihood for Next Release |
|---------|-------|-----------------------------|
| Stateless/no-history gateway sessions | [#3257](https://github.com/sipeed/picoclaw/issues/3257) | Medium — aligns with CLI parity, low implementation cost |
| ARM64 binary publishing (CI/CD fix) | [#3260](https://github.com/sipeed/picoclaw/issues/3260) | High — distribution blocker, likely hotfix |
| DeltaChat modernization (cleanup, security) | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | High — PR open 13 days, -200 LOC, maintainers may prioritize |
| Volcengine tool-call parsing hardening | [#3153](https://github.com/sipeed/picoclaw/issues/3153) | Medium — provider-specific, but growing Chinese LLM adoption |
| OAuth provider matrix update (Codex, Antygravity) | [#3197](https://github.com/sipeed/picoclaw/issues/3197) | Low — closed stale, no champion |

## 7. User Feedback Summary
- **Pain points**:  
  - **Installation**: ARM64 users cannot get binaries from official site (#3260).  
  - **Provider compatibility**: Volcengine tool-call format not handled; Codex/Antygravity OAuth broken.  
  - **Extensibility**: Hook system (`before_tool`) silently drops critical fields (#3258).  
  - **Gateway UX**: No way to start fresh conversation per request (#3257).  
- **Use cases**: Raspberry Pi edge deployment, gateway-as-a-service for multi-tenant bots, Chinese LLM (Doubao) integration, DeltaChat bridge.  
- **Sentiment**: Frustration on distribution (ARM64) and silent data-loss bugs (hooks, tool-calls). Stale closures without fixes erode trust.

## 8. Backlog Watch — Stale / Unanswered Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 13 days open | Large refactor (-200 LOC), security improvements (secret handling), docs — ready for review/merge. |
| [#3153](https://github.com/sipeed/picoclaw/issues/3153) | 24 days (closed stale) | Volcengine tool-call leak likely still present; needs triage + fix, not stale-close. |
| [#3197](https://github.com/sipeed/picoclaw/issues/3197) / [#3196](https://github.com/sipeed/picoclaw/issues/3196) | 16 days (closed stale) | OAuth regressions for popular providers; no fix, no reopen. |
| [#3260](https://github.com/sipeed/picoclaw/issues/3260) | 1 day | ARM64 release blocker — should trigger emergency CI/CD fix. |
| [#3258](https://github.com/sipeed/picoclaw/issues/3258) | 1 day | Hook deserialization bug — silent data corruption in middleware. |

---

**Health Score**: 🟡 **Caution** — Active bug inflow, zero merges, stale closures without fixes, distribution gap for ARM64. Immediate priorities: merge #3222, ship ARM64 binary, fix hook deserialization (#3258), re-open/triage Volcengine & OAuth regressions.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-16

## 1. Today's Overview
NanoClaw shows **high development velocity** with 13 total updates (2 issues, 11 PRs) in the last 24 hours. The project is actively addressing reliability gaps in message delivery, expanding provider support (OpenCode, Codex), and improving container lifecycle management. No new release was cut, but four PRs were merged/closed, indicating steady progress toward the next version. The open/closed ratio (7 open PRs vs 4 closed) suggests a healthy pipeline of work in review.

## 2. Releases
**No new releases published today.** The latest version remains the previous stable release. All merged changes will accumulate for the next cut.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3056](https://github.com/qwibitai/nanoclaw/pull/3056) | **Feature** | Adds **OpenCode** as a new agent provider (container runner, MCP config translation, idle-timeout handling) | Expands provider ecosystem; users can now run OpenCode-backed agents in NanoClaw |
| [#3055](https://github.com/qwibitai/nanoclaw/pull/3055) | **Ops/Tooling** | Adds `deploy.sh` for one-command remote redeploys (git pull, pnpm install, build, service restart) | Simplifies production deployments; reduces ops toil |
| [#3013](https://github.com/qwibitai/nanoclaw/pull/3013) | **Feature** | Implements Codex `SessionStart` hook for provider-agnostic persistent memory (load on startup/clear/compact) | Completes memory system for Codex; enables cross-provider context sharing |
| [#3012](https://github.com/qwibitai/nanoclaw/pull/3012) | **Feature** | Scaffolds provider-neutral persistent memory tree (`memory/index.md`, `memory/system/definition.md`) | Foundation for long-term agent memory across Claude/Codex/OpenCode |
| [#3054](https://github.com/qwibitai/nanoclaw/issues/3054) | **Bug Fix (Issue closed)** | Identified FK cleanup gaps in `agent_message_policies` on group delete / CLI destination remove | Prevents orphaned policy rows blocking group deletion; fix likely in follow-up PR |

**Net progress**: Provider expansion (OpenCode), memory system completion (Codex), deployment automation, and a data-integrity bug surfaced.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3058](https://github.com/qwibitai/nanoclaw/issues/3058) — *Transient outbound failures permanently dropped after 3 retries* | 1 comment, 0 👍 | **Reliability**: Users losing agent replies on brief network blips; need exponential backoff + permanent/transient classification |
| [#3059](https://github.com/qwibitai/nanoclaw/pull/3059) — *Fix for #3058* | Just opened, linked to issue | **Immediate mitigation**: PR implements transient/permanent distinction and retry logic; likely to merge fast |
| [#3057](https://github.com/qwibitai/nanoclaw/pull/3057) — *Claude→Codex quota fallback + Telegram/WhatsApp channels* | Large feature PR, 0 comments yet | **Multi-provider resilience + channel expansion**: Automatic failover when Claude hits quota; new messaging channels for broader reach |
| [#3040](https://github.com/qwibitai/nanoclaw/pull/3040) — *Unify approval holds behind one lifecycle contract* | Core-team PR, open | **Architecture cleanup**: Consolidate approval logic to prevent inconsistent hold states across providers |

**Signal**: Reliability (delivery retries) and provider/channel breadth are the top community concerns.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **High** | [#3058](https://github.com/qwibitai/nanoclaw/issues/3058) | Transient network errors (timeout, 429, 5xx) cause permanent message drop after 3 fast retries (~3s) | **Fix PR open**: [#3059](https://github.com/qwibitai/nanoclaw/pull/3059) implements classification + backoff |
| **Medium** | [#3054](https://github.com/qwibitai/nanoclaw/issues/3054) | `agent_message_policies` rows orphaned on group delete / CLI destination remove → FK violation on re-create | Issue closed (root cause identified); fix PR expected |
| **Medium** | [#3053](https://github.com/qwibitai/nanoclaw/pull/3053) | Agent-runner containers never exit idle; linger until 30-min SIGTERM (exit 143) | **Fix PR open**: clean shutdown on idle |
| **Low** | [#3052](https://github.com/qwibitai/nanoclaw/pull/3052) | `host.docker.internal` resolution fails on Colima/Lima/Rancher Desktop (macOS VM runtimes) | **Fix PR open**: add `--add-host` for VM-based runtimes |
| **Low** | [#2591](https://github.com/qwibitai/nanoclaw/pull/2591) | User ID namespacing uses bare colon (`:`) causing parsing ambiguity | Open since May; needs review |

**Stability note**: The delivery retry bug (#3058) is the only user-facing data-loss issue; its fix (#3059) is already submitted.

## 6. Feature Requests & Roadmap Signals
| Feature | Evidence | Likelihood for Next Version |
|---------|----------|----------------------------|
| **Automatic Claude→Codex quota fallback** | [#3057](https://github.com/qwibitai/nanoclaw/pull/3057) — large PR with channel adapters | **High** — core logic + adapters built; pilot activation module included |
| **Telegram & WhatsApp channel adapters** | Same PR (#3057) | **High** — bundled with fallback feature |
| **OpenCode provider** | [#3056](https://github.com/qwibitai/nanoclaw/pull/3056) — **merged today** | **Done** — will be in next release |
| **Provider-agnostic persistent memory** | [#3012](https://github.com/qwibitai/nanoclaw/pull/3012), [#3013](https://github.com/qwibitai/nanoclaw/pull/3013) — **both merged** | **Done** — foundation + Codex hook complete |
| **Unified approval lifecycle** | [#3040](https://github.com/qwibitai/nanoclaw/pull/3040) — core-team PR | **Medium** — architectural, may wait for review cycle |
| **One-command deploy script** | [#3055](https://github.com/qwibitai/nanoclaw/pull/3055) — **merged today** | **Done** — ops improvement |

**Prediction**: Next release will likely ship OpenCode provider, memory system, deploy script, and the quota-fallback/channel-expansion feature (#3057) if it passes review.

## 7. User Feedback Summary
| Pain Point / Use Case | Source | Sentiment |
|------------------------|--------|-----------|
| **Message loss on transient network errors** | #3058 | 😡 Frustrated — "permanently drops an agent's reply" |
| **Container resource waste (idle containers not exiting)** | #3053 | 😐 Operational annoyance — containers ride to 30-min kill |
| **Deployment friction** | #3055 (merged) | 😊 Relief — "one-command redeploys" welcomed |
| **Multi-provider quota exhaustion** | #3057 | 🤔 Proactive request — "Claude hits quota mid-turn" |
| **FK errors on group teardown** | #3054 | 😐 Blocker for clean re-creation of groups |

**Overall**: Users are pushing for **production hardening** (reliability, cleanup, ops) while the team delivers **breadth** (providers, channels, memory).

## 8. Backlog Watch — Stale/Important Items Needing Attention
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#2591](https://github.com/qwibitai/nanoclaw/pull/2591) — *Namespace user IDs by channel-type prefix* | **~2 months** (opened 2026-05-22) | Prevents ID collision/parsing bugs across channels; foundational for multi-channel support | **Assign reviewer**; blocks clean channel expansion |
| [#3040](https://github.com/qwibitai/nanoclaw/pull/3040) — *Unify approval holds lifecycle* | 2 days (core-team) | Inconsistent approval states cause stuck messages; architectural debt | **Prioritize review** — core-team authored, high leverage |
| [#3051](https://github.com/qwibitai/nanoclaw/pull/3051) — *Preflight provider config before save* | 1 day | Prevents invalid provider configs persisting; UX + data integrity | **Quick review** — small fix, high safety value |
| [#3052](https://github.com/qwibitai/nanoclaw/pull/3052) — *Colima/Lima/Rancher host gateway* | 1 day | macOS developers on VM runtimes can't resolve host services | **Test & merge** — affects growing non-Docker-Desktop segment |

---

**Health Indicator**: 🟢 **Healthy** — Active merging, clear issue-to-fix flow (#3058→#3059), provider/memory roadmap executing, ops tooling improving. Main risk is the 2-month stale PR (#2591) blocking channel-layer hygiene.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-16

## 1. Today's Overview
IronClaw shows **high development velocity** with 38 PRs and 23 issues updated in the last 24 hours. The project is in a **major architectural transition** ("Reborn") — replacing the v1 runtime with a unified generic extension runtime, hardening OAuth/auth flows, and expanding tier-2 integration test coverage. **Slack integration remains the top user-facing bug family**, with 5+ open issues spanning disconnect, DM delivery, misrouted notifications, and auth-state corruption. No new releases were cut today; the last release (0.29.1) included breaking changes in `ironclaw_common` and `ironclaw_skills`.

---

## 2. Releases
**No new releases today.**  
The most recent release (v0.29.1, from PR #5598) introduced breaking API changes in `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0). Teams upgrading should review the [release notes](https://github.com/nearai/ironclaw/pull/5598) for migration guidance.

---

## 3. Project Progress — Merged / Closed PRs (Last 24h)

| PR | Title | Scope | Impact |
|----|-------|-------|--------|
| [#6135](https://github.com/nearai/ironclaw/pull/6135) | **fix(reborn): recover Slack host after OAuth activation** | auth, extensions | Critical fix for Slack reconnect flow; prevents broken auth state after OAuth |
| [#6128](https://github.com/nearai/ironclaw/pull/6128) | **fix(auth): audit + review blockers — scope ceiling, Notion refresh, fan-out retryability, removal/callback race** | auth, security | Hardens OAuth lifecycle; addresses scope ceiling, token refresh, race conditions |
| [#6084](https://github.com/nearai/ironclaw/pull/6084) | **feat(webui): replace native confirmations with a shared modal** | UI, design-system | Replaces `confirm()` for chat/automation/extension deletion with Reborn modal |
| [#6082](https://github.com/nearai/ironclaw/pull/6082) | **fix(webui-v2): render extension registry without enrichment delay** | UI, performance | Eliminates 10s skeleton loading; renders catalog immediately, enriches progressively |
| [#6055](https://github.com/nearai/ironclaw/pull/6055) | **test(reborn): StaleSurface same-run refresh + extension-remove channel-cleanup** | testing, integration | Adds integration coverage for extension removal and surface refresh paths |
| [#6044](https://github.com/nearai/ironclaw/pull/6044) | **[bug_bash_P2] Enter key sometimes does not submit message in WebUI** | UI, regression | Fixes intermittent Enter-key submission failure after assistant response |
| [#6087](https://github.com/nearai/ironclaw/pull/6087) | **Extension catalog load failures are shown as an empty state** | UI, error-handling | Distinguishes network failure from genuinely empty catalog |
| [#6085](https://github.com/nearai/ironclaw/pull/6085) | **Admin user details expose a broken Create token action** | Admin UI, auth | Removes non-functional "Create token" button (no backend reissue endpoint) |
| [#5886](https://github.com/nearai/ironclaw/pull/5886) | **[bug_bash_P2] Pending approval blocks subsequent automation runs** | automation, scheduler | Allows independent scheduled runs to proceed while one awaits approval |

**Key theme:** UI polish (modals, loading states, error surfaces) + auth/Slack hardening + test coverage expansion.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Type | Comments | Summary | Underlying Need |
|------|------|----------|---------|-----------------|
| [#6105](https://github.com/nearai/ironclaw/issues/6105) | Issue | 3 | **Extension/channel lifecycle state-machine test** (install→connect→disconnect→reconnect→uninstall) + canary lanes | **Systematic regression prevention** — Slack lifecycle bugs have regressed across 4 QA waves despite multiple fixes |
| [#5834](https://github.com/nearai/ironclaw/issues/5834) | Issue | 3 | **Slack disconnect request incorrectly rejected by agent** | Agent claims it cannot disconnect; no UI path to disconnect |
| [#3533](https://github.com/nearai/ironclaw/issues/3533) | Issue | 3 | **[QA] Telegram in v0.28.1 does not automatically setup from UI** | Legacy Telegram pairing flow broken; directions outdated |
| [#6116](https://github.com/nearai/ironclaw/pull/6116) | PR | — | **feat(reborn): unified generic extension runtime + Option A honest state machine** (XL, 92-commit reconciliation) | **Core architectural migration** — reconciling main into unified runtime; blocks v1 retirement |
| [#6123](https://github.com/nearai/ironclaw/pull/6123) | PR | — | **refactor(reborn): remove retired v1 runtime** (XL, DB MIGRATION, high risk) | **Final v1 cleanup** — converts root to Reborn parity harness; adds architecture guardrails |

**Analysis:** The community (internal QA + core team) is laser-focused on **channel lifecycle reliability** (especially Slack) and **completing the Reborn migration**. The 4 QA bug-bash waves revealing repeated regressions (#5834, #5877, #5882, #5943, #5944) signal that **ad-hoc fixes are insufficient** — hence the push for a state-machine test suite (#6105) and canary lanes.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR / Status |
|----------|-------|-------------|-----------------|
| **Critical** | [#5877](https://github.com/nearai/ironclaw/issues/5877) | **Slack notification delivered to wrong user** — sensitive workflow results sent to unrelated recipient | Open; no fix PR linked |
| **Critical** | [#5882](https://github.com/nearai/ironclaw/issues/5882) | **Repeated Slack reconnect leaves auth flow broken** — "Waiting for Slack..." indefinitely; requires reinstall | Open; [#6135](https://github.com/nearai/ironclaw/pull/6135) *merged* (recovers host post-OAuth) |
| **High** | [#5943](https://github.com/nearai/ironclaw/issues/5943) | **Slack DM posts to current channel instead of user DM** — bot posts summaries to shared QA channel | Open; no fix PR |
| **High** | [#5944](https://github.com/nearai/ironclaw/issues/5944) | **Slack DM delivery silently fails but run reports success** — green checkmark, no message arrives | Open; no fix PR |
| **High** | [#5834](https://github.com/nearai/ironclaw/issues/5834) | **Slack disconnect request rejected by agent** — agent responds with unrelated content about delivery targets | Open; no fix PR |
| **Medium** | [#6125](https://github.com/nearai/ironclaw/issues/6125) | **User message rejected with "busy" error while routine runs** — locks user out of conversation | Open; no fix PR |
| **Medium** | [#6127](https://github.com/nearai/ironclaw/issues/6127) | **Routine shows "Previous run still in progress" on first execution** — UI status mismatch | Open; no fix PR |
| **Medium** | [#6126](https://github.com/nearai/ironclaw/issues/6126) | **First message in new chat has no loading/streaming state** — UI appears frozen | Open; no fix PR |
| **Medium** | [#5741](https://github.com/nearai/ironclaw/issues/5741) | **builtin.http.save fails with OutputTooLarge instead of saving large responses** | Closed; fix likely in [#6129](https://github.com/nearai/ironclaw/pull/6129) (word-boundary marker + caps) |
| **Low** | [#6052](https://github.com/nearai/ironclaw/issues/6052) | **Extensions Registry takes up to 10s to load** — skeleton placeholders only | Closed; fixed in [#6082](https://github.com/nearai/ironclaw/pull/6082) |

**Pattern:** Slack integration accounts for **5/10 top bugs** — all P1/P2 from recent bug-bashes. The OAuth recovery fix (#6135) addresses one root cause (#5882), but DM routing, disconnect, and silent-failure bugs remain open.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Per-user secrets management in Admin UI** | [#6118](https://github.com/nearai/ironclaw/issues/6118) — backend API exists, frontend missing | **High** — straightforward frontend work; admin pain point |
| **Channel lifecycle state-machine tests + canary lanes** | [#6105](https://github.com/nearai/ironclaw/issues/6105) — 5 critical transitions identified | **High** — PR [#6113](https://github.com/nearai/ironclaw/pull/6113) already open with tests |
| **Tier-2 harness: compound fault-injection (denied-gate + HTTP-egress-error)** | [#6138](https://github.com/nearai/ironclaw/issues/6138) — gap found in extension plan | **High** — PR [#6134](https://github.com/nearai/ironclaw/pull/6134) adds provider-error + compound-denial scenarios |
| **SSE wire-contract fixture round-trip test for WebChatV2Event** | [#6136](https://github.com/nearai/ironclaw/issues/6136) — 3 variants are dead code | **High** — PR [#6133](https://github.com/nearai/ironclaw/pull/6133) adds test; may reveal cleanup |
| **Workspace UI: localized region names + human-readable file sizes** | [#6117](https://github.com/nearai/ironclaw/issues/6117) | **Medium** — polish item; low risk |
| **Mixed-batch gate resume: non-first gated call never redispatched** | [#6137](https://github.com/nearai/ironclaw/issues/6137) | **Medium** — core orchestration bug; fix likely in current sprint |

**Prediction:** Next version (likely 0.30.0) will ship **Reborn as default**, **v1 runtime removed**, **Slack lifecycle fixes**, **Admin secrets UI**, and **tier-2 test harness expansions**.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Slack integration unreliable** | 5 open P1/P2 bugs in 7 days (#5834, #5877, #5882, #5943, #5944) | Users cannot trust DM delivery, disconnect, or notification routing; sensitive data misdelivery risk |
| **No visibility into background routines** | #6125 (busy lockout), #6127 (false "previous run" status), #6126 (no loading state) | Users locked out or confused during automation; appears frozen |
| **Admin cannot manage user secrets** | #6118 — backend ready, UI missing | Admins forced to use CLI/API for credential provisioning |
| **Extension catalog feels broken** | #6052 (10s load), #6087 (failures look empty) | Users think extensions unavailable; distrust marketplace |
| **Destructive actions use ugly native dialogs** | #6083 → fixed in #6084 | Inconsistent UX; browser-modal blocking |

**Positive signals:** Rapid fix turnaround for UI issues (confirmation modals, registry loading, Enter key) — all closed within 1-2 days. Core team responsive to QA findings.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#3533](https://github.com/nearai/ironclaw/issues/3533) | **65 days** (created 2026-05-12) | Medium | Telegram pairing broken on staging; "directions not up-to-date" — may indicate docs drift or deprecated flow |
| [#5834](https://github.com/nearai/ironclaw/issues/5834) | 8 days | High | Slack disconnect completely non-functional; no workaround; user-facing dead end |
| [#5877](https://github.com/nearai/ironclaw/issues/5877) | 7 days | **Critical** | **Data leakage** — notifications sent to wrong user; security/compliance risk |
| [#6116](https://github.com/nearai/ironclaw/pull/6116) | 1 day | High | **92-commit reconciliation PR** — core Reborn migration; "parked" per #6128; blocks v1 removal (#6123) |
| [#6123](https://github.com/nearai/ironclaw/pull/6123) | 1 day | **High** | **v1 runtime removal** (DB MIGRATION, XL, high risk) — needs careful review; architecture guardrails added |
| [#6130](https://github.com/nearai/ironclaw/pull/6130) | 1 day | High | **OAuth flow-lifecycle hygiene** — supersede-on-start, durable PKCE, expiry-honest projections; lands independently of #6116 |

**Action items for maintainers:**
1. **Triage #5877 immediately** — potential data leak.
2. **Assign owners for Slack DM bugs** (#5943, #5944, #5834) — consider a dedicated "Slack lifecycle" sprint.
3. **Review #6116 + #6123 together** — they are coupled (reconciliation → v1 removal).
4. **Merge #6130** — OAuth fixes are user-facing and independent of Reborn branch.
5. **Close or update #3533** — 65-day stale QA issue suggests either fixed silently or abandoned flow.

---

*Digest generated from GitHub data as of 2026-07-16. All links point to live GitHub items.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-16

## 1. Today's Overview
LobsterAI shipped a new release **v2026.7.15** on 2026-07-15, delivering a batch of UI polish, settings reorganization, update-flow improvements, and new model defaults. The day saw **11 PRs merged/closed** and **5 stale issues from April closed en masse**, while **1 new user-facing issue** (#2342) surfaced complaining about an un-dismissible bottom-left advertisement. Dependency-update PRs (Dependabot) remain open from June, and a few April PRs linger in stale state. Overall velocity is high on the renderer/main process, with a clear focus on stability and onboarding polish.

## 2. Releases
### **v2026.7.15** (2026-07-15) — [Release PR #2341](https://github.com/netease-youdao/LobsterAI/pull/2341)
| Change | PR | Author | Notes |
|--------|-----|--------|-------|
| Optimize file card UI | [#2322](https://github.com/netease-youdao/LobsterAI/pull/2322) | @fisherdaddy | Visual/layout improvements for file attachments |
| Add opt-in Windows web installer target | [#2323](https://github.com/netease-youdao/LobsterAI/pull/2323) | @fisherdaddy | New distribution channel for Windows users |
| Revamp homepage quick-action scenarios (cowork) | (in release notes) | — | Streamlined entry points for common tasks |
| Group General settings into labeled cards | [#2336](https://github.com/netease-youdao/LobsterAI/pull/2336) | @fisherdaddy | Basics / Notifications / Data & Privacy sections; merged duplicate toggles |
| Refine blocking update overlay | [#2338](https://github.com/netease-youdao/LobsterAI/pull/2338) | @liuzhq1986 | Centered progress, scrollable release notes, error recovery, focus trap |
| Block app interactions during user-initiated updates | [#2333](https://github.com/netease-youdao/LobsterAI/pull/2333) | @liuzhq1986 | Lightweight overlay with cancellation/failure restore |
| Add GPT-5.6 & Grok 4.5 default models | [#2332](https://github.com/netease-youdao/LobsterAI/pull/2332) | @fisherdaddy | Versioned model migration to avoid duplicates |
| Restore IM session loading state (cowork) | [#2334](https://github.com/netease-youdao/LobsterAI/pull/2334) | @liuzhq1986 | Subscribe to gateway lifecycle; ignore cron/desktop/stale events |
| Fix content copy bug | [#2335](https://github.com/netease-youdao/LobsterAI/pull/2335) | @fisherdaddy | Artifact/clipboard regression fix |
| Align update card header content | [#2339](https://github.com/netease-youdao/LobsterAI/pull/2339) | @liuzhq1986 | Full titles, responsive in narrow sidebars |

**Breaking changes / migration notes**: None explicitly listed. The model migration in #2332 is backward-compatible (matches by normalized ID). Settings reorganization is UI-only.

## 3. Project Progress (Merged/Closed PRs — 2026-07-15)
| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2341](https://github.com/netease-youdao/LobsterAI/pull/2341) | release | Cut v2026.7.15 | Delivery |
| [#2340](https://github.com/netease-youdao/LobsterAI/pull/2340) | renderer, main, openclaw, cowork | Revert #2337 "fix: fixed model not allowed" | Quick rollback of a faulty model-permission fix |
| [#2339](https://github.com/netease-youdao/LobsterAI/pull/2339) | renderer | Update card header alignment | Polish |
| [#2338](https://github.com/netease-youdao/LobsterAI/pull/2338) | renderer | Blocking update overlay UX | Reliability & UX |
| [#2336](https://github.com/netease-youdao/LobsterAI/pull/2336) | renderer, main | Settings regrouping | Discoverability |
| [#2335](https://github.com/netease-youdao/LobsterAI/pull/2335) | renderer, artifacts | Content copy bug fix | Data integrity |
| [#2334](https://github.com/netease-youdao/LobsterAI/pull/2334) | renderer, main | IM session loading state restore | Cowork stability |
| [#2333](https://github.com/netease-youdao/LobsterAI/pull/2333) | renderer | Update interaction block | Safety during updates |
| [#2332](https://github.com/netease-youdao/LobsterAI/pull/2332) | renderer, main, openclaw | New default models (GPT-5.6, Grok 4.5) | Model freshness |
| [#1372](https://github.com/netease-youdao/LobsterAI/pull/1372) | renderer | Multi-file selection fix (stale, closed) | Closes #1384 |

**Net advancement**: Settings UX, update flow robustness, cowork IM reliability, and model catalog refresh — all shipped in a single day.

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Core Need |
|------|------|----------|-----------|-----------|
| [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) | Issue (OPEN) | 1 | 0 | **Remove bottom-left ad permanently**; user cannot find a setting to disable it. First reported on release day. |
| [#1382](https://github.com/netease-youdao/LobsterAI/issues/1382) | Issue (CLOSED stale) | 3 | 0 | Export log uses red color (looks like error) — visual affordance confusion. |
| [#1381](https://github.com/netease-youdao/LobsterAI/issues/1381) | Issue (CLOSED stale) | 2 | 0 | Cron tasks spawn new session windows instead of reusing one — session clutter. |
| [#1383](https://github.com/netease-youdao/LobsterAI/issues/1383) | Issue (CLOSED stale) | 2 | 0 | WeChat bot deduplicates identical messages — user expects each send to appear. |
| [#1384](https://github.com/netease-youdao/LobsterAI/issues/1384) | Issue (CLOSED stale) | 2 | 0 | Multi-file upload only shows last file — fixed in #1372. |
| [#1385](https://github.com/netease-youdao/LobsterAI/issues/1385) | Issue (CLOSED stale) | 2 | 0 | Deleted WeChat session history reappears on new message — cleanup not persistent. |

**Analysis**: The five stale issues (all from 2026-04-03) were bulk-closed today, suggesting a backlog cleanup. The only *live* community signal is **#2342** — a monetization/UI intrusion complaint that appeared *immediately after* the v2026.7.15 drop. This is a high-signal early warning: users noticed a new ad surface with no off-switch.

## 5. Bugs & Stability
| Severity | Issue / PR | Status | Fix PR | Notes |
|----------|------------|--------|--------|-------|
| **High** | [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) — Unclosable bottom-left ad | OPEN | None yet | User-facing regression; no setting to disable. Could trigger churn. |
| **Medium** | [#2337](https://github.com/netease-youdao/LobsterAI/pull/2337) — "fix: fixed model not allowed" | REVERTED (#2340) | N/A | The fix itself introduced a regression; reverted same day. |
| **Medium** | [#1384](https://github.com/netease-youdao/LobsterAI/issues/1384) — Multi-file upload keeps only last file | CLOSED stale | [#1372](https://github.com/netease-youdao/LobsterAI/pull/1372) (closed stale) | Fix exists but PR went stale; verify if merged in today's release. |
| **Low** | [#1382](https://github.com/netease-youdao/LobsterAI/issues/1382) — Red export-log banner looks like error | CLOSED stale | None | Cosmetic; color semantics. |
| **Low** | [#1385](https://github.com/netease-youdao/LobsterAI/issues/1385) — WeChat session history not fully cleaned | CLOSED stale | None | Data hygiene; may need server-side cleanup. |

**Stability takeaway**: The only *new* regression is the ad (#2342). The reverted PR #2337 shows healthy self-correction. Stale bug fixes (#1372) should be audited for inclusion in v2026.7.15.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Permanent ad disable toggle** | [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) (user demand) | **High** — trivial to add a setting; PR likely within days. |
| **Cron tasks reuse single session** | [#1381](https://github.com/netease-youdao/LobsterAI/issues/1381) | Medium — requires session-routing refactor; not in current batch. |
| **WeChat bot message deduplication opt-out** | [#1383](https://github.com/netease-youdao/LobsterAI/issues/1383) | Low — edge case; closed stale. |
| **Export log color semantics fix** | [#1382](https://github.com/netease-youdao/LobsterAI/issues/1382) | Low — cosmetic; closed stale. |
| **Dependency updates (Electron 43, Actions v6, etc.)** | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277), [#2165](https://github.com/netease-youdao/LobsterAI/pull/2165), [#2166](https://github.com/netease-youdao/LobsterAI/pull/2166), [#2167](https://github.com/netease-youdao/LobsterAI/pull/2167), [#2164](https://github.com/netease-youdao/LobsterAI/pull/2164) | **High** — Dependabot PRs open since June; security/maintenance pressure. |
| **True LRU cache for LLM memory judge** | [#1322](https://github.com/netease-youdao/LobsterAI/pull/1322) | Low — stale since April; performance optimization. |

**Prediction**: Next patch will likely address #2342 (ad toggle) and merge a subset of Dependabot updates. Session-reuse for cron (#1381) is a quality-of-life item that may wait for a minor version.

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Intrusive advertising** | #2342: "Can the bottom-left ad be closed permanently? No setting found." | 😠 Negative — trust erosion on first sight of v2026.7.15. |
| **Session proliferation from cron** | #1381: "Every cron run opens a new session window; short intervals create clutter." | 😐 Frustrated — workflow friction for automation users. |
| **WeChat bot message loss** | #1383: "Identical messages deduplicated; only one appears." | 😕 Confused — unexpected deduplication behavior. |
| **Multi-file upload broken** | #1384: "Select multiple files, only last shows." | 😡 Blocked — core attachment flow broken (fixed in #1372). |
| **History not purged on session delete** | #1385: "Deleted session messages reappear on new message." | 😟 Privacy concern — data retention mismatch. |
| **Red success banner looks like error** | #1382: "Export log uses red; red usually means failure." | 😕 Cognitive load — color semantics mismatch. |

**Satisfaction signals**: None explicit in today's data. The rapid closure of 5 stale issues suggests maintainers are cleaning house, but the new ad complaint (#2342) is a **net negative signal** on release day.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Electron 40→43, electron-builder update | 105 days | Security, compatibility, performance; blocks modern Chromium features. | **Prioritize review/merge**; test on all platforms. |
| [#2165](https://github.com/netease-youdao/LobsterAI/pull/2165) — actions/checkout v4→v6 | 31 days | CI breaking changes; v6 requires Node 20+. | Merge after Node 20 baseline confirmed. |
| [#2166](https://github.com/netease-youdao/LobsterAI/pull/2166) — dorny/paths-filter v3→v4 | 31 days | Path filtering API changes; may break workflow logic. | Validate workflow files, then merge. |
| [#2167](https://github.com/netease-youdao/LobsterAI/pull/2167) — actions/stale v9→v10 | 31 days | St

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw (TinyAGI) Project Digest — 2026-07-16

## 1. Today's Overview
TinyClaw shows **minimal activity** in the last 24 hours: zero issue updates, zero merged PRs, and no new releases. The only movement is a single open pull request (#295) addressing a CLI bug in team leader removal logic. This suggests the project is in a **maintenance/stability phase** with low contributor velocity today. The repository appears healthy but quiet—no regressions, crashes, or community fires reported.

## 2. Releases
**No new releases** published today. The latest version remains whatever was last tagged (not provided in data). No breaking changes, migration notes, or changelog entries to report.

## 3. Project Progress
**No PRs merged or closed today.** The sole open PR (#295) is a targeted bug fix for the CLI's `teamRemoveAgent` command—it corrects a logic error where the "New leader" success message was never printed after promoting a replacement leader. This fix is **not yet merged**, so no user-facing changes have landed today.

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#295** | PR (open) | 0 comments, 0 👍, author: Osamaali313 | [TinyAGI/tinyagi#295](https://github.com/TinyAGI/tinyagi/pull/295) |

**Analysis:** The only active thread is a **single-contributor bug fix** with no discussion or reactions. No community questions, feature debates, or design reviews are visible today. Underlying need: **CLI reliability for team management workflows**—specifically, ensuring operators see confirmation when leadership transfers occur.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Low** | `teamRemoveAgent` prints no "New leader" note after promoting a replacement leader (logic error: condition always false) | Open, unmerged | [#295](https://github.com/TinyAGI/tinyagi/pull/295) |

**No crashes, regressions, or data-loss bugs reported today.** The single bug is a **UX/logic defect** in a CLI subcommand—non-blocking, but confusing for operators. Fix exists but awaits review/merge.

## 6. Feature Requests & Roadmap Signals
**No new feature requests or roadmap signals today.** No issues opened, no PRs proposing features, no discussion labels (e.g., `enhancement`, `roadmap`) active.  
**Prediction:** Given the current fix, the next patch release will likely include this CLI correction. No evidence of upcoming major features (e.g., multi-agent orchestration, plugin system, LLM provider expansion) from today's data.

## 7. User Feedback Summary
**No user feedback captured today**—no issues filed, no comments on PRs, no reactions. Cannot assess pain points, use cases, or satisfaction. The silence may indicate:
- Stable, working experience for current users
- Low user base or low GitHub engagement
- Feedback channels elsewhere (Discord, Discourse, email) not reflected here

## 8. Backlog Watch
**No long-unanswered issues or PRs surfaced in today's data.** However, the repository's broader backlog (not provided) should be scanned for:
- PRs open > 14 days with no review
- Issues labeled `bug` or `help wanted` with no assignee
- Stalled `good first issue` candidates

**Action for maintainers:** Review and merge **#295** promptly—it's a trivial, tested fix that improves CLI clarity. Consider triaging older PRs/issues if any exist beyond this 24h window.

---

**Data Source:** GitHub API (issues, PRs, releases) for TinyAGI/tinyagi, 2026-07-15 to 2026-07-16.  
**Next Digest:** 2026-07-17 (will capture any merges, new issues, or releases).

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-16

## 1. Today's Overview
Moltis showed **high merge velocity** on 2026-07-15 with **6 PRs merged/closed** and zero open PRs remaining from that batch. All merged work focused on provider integrations, token handling, external-agent detection, and CLI robustness—no new releases were cut. The only active issue (#574) is a feature request for per-topic model routing, updated recently but still awaiting implementation. Overall project health appears strong: dependencies are current, provider support is expanding, and core stability fixes are landing rapidly.

## 2. Releases
**No new releases** published in the last 24 hours. The merged PRs represent incremental improvements likely destined for the next patch or minor release.

## 3. Project Progress — Merged/Closed PRs (2026-07-15)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#1151](https://github.com/moltis-org/moltis/pull/1151) | **feat(providers)** | Added **MiniMax M3** model support alongside existing M2.7; registered context/image capabilities and documented global/China endpoints. | Expands provider matrix for Chinese-market LLMs. |
| [#1152](https://github.com/moltis-org/moltis/pull/1152) | **fix(providers)** | Derive `openai-codex` token expiry from JWT `exp` claim instead of storing `expires_at: null`, eliminating ~10-day forced re-login. | **High-severity stability fix**—restores unattended session longevity. |
| [#1150](https://github.com/moltis-org/moltis/pull/1150) | **fix(providers)** | Centralized context-window fallback mappings; parse live GitHub Copilot metadata for dynamic limits. | Improves token-budget accuracy across Copilot/Codex providers. |
| [#1149](https://github.com/moltis-org/moltis/pull/1149) | **feat(external-agents)** | Auto-detect **13 ACP agents** (Copilot, Codex, Claude, Pi, opencode, Gemini, Augment, Kiro, OpenClaw, OpenHands, Kimi, Stakpak, fast-agent) via documented stdio commands. | Major UX upgrade—zero-config external agent onboarding. |
| [#1153](https://github.com/moltis-org/moltis/pull/1153) | **fix(cli)** | Added Linux service fallback (user-owned supervisor script) for containers lacking `systemd --user` (Coder/devbox). | Unblocks containerized deployments; improves CI/CD reliability. |
| [#1148](https://github.com/moltis-org/moltis/pull/1148) | **chore(deps)** | Bumped `esbuild` & `vite` in `/crates/web/ui` and `/docs` via Dependabot. | Routine security/maintenance hygiene. |

## 4. Community Hot Topics
| Item | Activity | Signal |
|------|----------|--------|
| [Issue #574](https://github.com/moltis-org/moltis/issues/574) — *Model Routing Per Topic* | 1 👍, 1 comment, last updated 2026-07-15 | Users want **context-aware model selection** (e.g., route coding tasks to Codex, creative writing to Claude). Indicates demand for **routing rules engine** or per-topic provider profiles. |

*No PRs attracted comments or reactions in the last 24h—review cycles appear internal/automated.*

## 5. Bugs & Stability
| Severity | Issue | Fix Status |
|----------|-------|------------|
| **High** | `openai-codex` tokens expired silently after ~10 days (`expires_at: null`) → forced re-login | ✅ Fixed in [#1152](https://github.com/moltis-org/moltis/pull/1152) (merged) |
| **Medium** | Incorrect context-window defaults for dynamic Copilot/Codex models | ✅ Fixed in [#1150](https://github.com/moltis-org/moltis/pull/1150) (merged) |
| **Low** | CLI service install failed in systemd-less containers | ✅ Fixed in [#1153](https://github.com/moltis-org/moltis/pull/1153) (merged) |

*No new bug reports filed in the last 24h.*

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **Per-topic model routing** (route by task type, project, or user rule) | [Issue #574](https://github.com/moltis-org/moltis/issues/574) | **Medium** — high user value, but requires routing DSL/UI; may slip to minor version. |
| **ACP agent auto-detection** (13 agents) | [PR #1149](https://github.com/moltis-org/moltis/pull/1149) | ✅ **Already merged** — will ship in next release. |
| **MiniMax M3 support** | [PR #1151](https://github.com/moltis-org/moltis/pull/1151) | ✅ **Already merged** — expands China-region provider coverage. |

## 7. User Feedback Summary
- **Pain point**: Codex sessions dying after ~10 days without warning (resolved by #1152).
- **Pain point**: Unable to run Moltis background service in lightweight containers (resolved by #1153).
- **Desire**: “Just work” onboarding for external agents—addressed by #1149’s auto-detection.
- **Desire**: Smarter model routing per task/context (open in #574).
- **Sentiment**: Positive—rapid fix turnaround, expanding provider/agent ecosystem, no regressions reported.

## 8. Backlog Watch
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [Issue #574](https://github.com/moltis-org/moltis/issues/574) — Model Routing Per Topic | Open since 2026-04-06 (101 days) | **Stalled enhancement** — 1 👍, 1 comment, no linked PR. Core workflow feature; needs design decision (routing syntax, UI, persistence). Maintainer attention recommended to unblock or close with rationale. |

---
*Digest generated from GitHub API data as of 2026-07-16. All links point to live GitHub items.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-16

## 1. Today's Overview
CoPaw (QwenPaw) shows **very high development velocity** with 93 total issue/PR updates in the last 24 hours (50 issues, 43 PRs). The project is in active post-v2.0 stabilization: 31 issues closed and 22 PRs merged/closed indicate rapid bug-fix throughput. No new release was cut today, but multiple "ready-for-human-review" PRs target critical v2.0 regressions (memory loss, thinking-block formatting, doom-loop tuning, multimodal image stripping). Community engagement is strong — several issues have 5+ comments, and first-time contributors are landing fixes.

## 2. Releases
**No new releases today.** The latest published version remains **v2.0.0.post2** (per issue reports). Multiple hotfix PRs are queued; expect a v2.0.1 or v2.0.0.post3 soon.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#6142](https://github.com/agentscope-ai/QwenPaw/pull/6142) | `fix(console): require auto_memory_interval as int >= 0, disallow empty` | Bug fix | Allows `0` to disable auto-memory (fixes [#6132](https://github.com/agentscope-ai/QwenPaw/issues/6132)); validation + i18n across 7 locales |
| [#6140](https://github.com/agentscope-ai/QwenPaw/pull/6140) | `fix(utils): add errors='replace' to _run_command for GBK compatibility` | Bug fix | Windows GBK encoding crashes resolved |
| [#6147](https://github.com/agentscope-ai/QwenPaw/pull/6147) | `feat(website): add blog view/like counts and switch GA to QwenPaw property` | Feature | Website analytics & engagement metrics |
| [#6143](https://github.com/agentscope-ai/QwenPaw/pull/6143) | `ci: pass Supabase config to website build` | CI/CD | Enables Supabase-backed blog features |
| [#6137](https://github.com/agentscope-ai/QwenPaw/pull/6137) | `fix(loop): fine-tune doom loop limits and preserve spaces in thinking blocks` | Bug fix | Dual fix: doom-loop thresholds (warn@3, stop@4) + thinking-block whitespace preservation |
| [#6039](https://github.com/agentscope-ai/QwenPaw/pull/6039) | `fix(mcp): resolve ${VAR} env references in legacy driver migration` | Bug fix | MCP credential migration now expands `${VAR}` (fixes Wind MCP auth) |

## 4. Community Hot Topics (Most Commented Issues/PRs)
| Item | Comments | Core Need |
|------|----------|-----------|
| [#2911](https://github.com/agentscope-ai/QwenPaw/issues/2911) (CLOSED) | 6 | Windows client auto-closes after hours — stability/reliability |
| [#6129](https://github.com/agentscope-ai/QwenPaw/issues/6129) (OPEN) | 5 | **Thinking blocks lose spaces/newlines mid-stream** — UX regression in v2.0 |
| [#6125](https://github.com/agentscope-ai/QwenPaw/issues/6125) (OPEN) | 5 | **Galaxy Kylin (政企国产OS) support** — enterprise/ govt deployment demand |
| [#2969](https://github.com/agentscope-ai/QwenPaw/issues/2969) (CLOSED) | 5 | Personal knowledge base integration — 3 👍 |
| [#2930](https://github.com/agentscope-ai/QwenPaw/issues/2930) (CLOSED) | 4 | Tool-call parse failures + config reset on restart (llama.cpp + Flash-9B) |
| [#6148](https://github.com/agentscope-ai/QwenPaw/issues/6148) (OPEN) | 2 | **Severe "amnesia" in v2.0**: forgets context, `/compact` appears broken — 2 👍 |

**Underlying signals**:  
- **v2.0 quality gate**: Multiple users report memory/context regression (#6148, #6155), thinking-block rendering (#6129), and embedding config bugs (#6155).  
- **Enterprise adoption**: Galaxy Kylin request (#6125) + Win7 non-Tauri variant (#6076) show demand for offline/legacy/approved OS support.  
- **Knowledge/agent ecosystem**: Knowledge base (#2969), agent templates (#4259), multi-agent collaboration (#6136) are recurring themes.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#6148](https://github.com/agentscope-ai/QwenPaw/issues/6148) — v2.0 "amnesia": context loss, `/compact` no-op, "truncated" artifacts | OPEN | [#6123](https://github.com/agentscope-ai/QwenPaw/pull/6123) (context limits & compaction recovery) |
| **Critical** | [#6124](https://github.com/agentscope-ai/QwenPaw/issues/6124) — Editable install: 36 ReMe background loops, 48 GB+ RAM, never completes | OPEN | — |
| **High** | [#6141](https://github.com/agentscope-ai/QwenPaw/issues/6141) — `MODEL_EXECUTION_ERROR` after `/mission` abort; tool-call role mismatch breaks session | OPEN | — |
| **High** | [#6155](https://github.com/agentscope-ai/QwenPaw/issues/6155) — Embedding mapping bug (`pass_dimensions` missing) + Auto-Memory issues | OPEN | Partially in [#6153](https://github.com/agentscope-ai/QwenPaw/pull/6153) (ReMe config + dimension pass-through) |
| **High** | [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) — Messages silently dropped when session busy (no queue, no error) | OPEN | — |
| **Medium** | [#6129](https://github.com/agentscope-ai/QwenPaw/issues/6129) — Thinking blocks missing spaces/line feeds mid-stream | OPEN | [#6139](https://github.com/agentscope-ai/QwenPaw/pull/6139) (preserve whitespace) |
| **Medium** | [#5790](https://github.com/agentscope-ai/QwenPaw/issues/5790) — Loading spinner persists after agent response | OPEN | — |
| **Medium** | [#6132](https://github.com/agentscope-ai/QwenPaw/issues/6132) — Auto-memory interval cannot be set to 0 | CLOSED | [#6142](https://github.com/agentscope-ai/QwenPaw/pull/6142) ✅ |
| **Medium** | [#2930](https://github.com/agentscope-ai/QwenPaw/issues/2930) — Tool-call parse failure + config reset (llama.cpp) | CLOSED | — |
| **Low** | [#6107](https://github.com/agentscope-ai/QwenPaw/pull/6107) — WKWebView caches stale console frontend (desktop) | MERGED | [#6107](https://github.com/agentscope-ai/QwenPaw/pull/6107) ✅ |

## 6. Feature Requests & Roadmap Signals
| Request | Issue | Likelihood for Next Version |
|---------|-------|----------------------------|
| **Per-session model overrides** | [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) (PR open) | High — PR adds Settings modal + chat header selector |
| **Chrome extension plugin** | [#6157](https://github.com/agentscope-ai/QwenPaw/pull/6157) (PR open) | High — "official Chrome extension" with native messaging bridge |
| **Agent templates / presets** | [#4259](https://github.com/agentscope-ai/QwenPaw/issues/4259) (closed) | Medium — Strong demand, but design work needed |
| **Knowledge base / RAG integration** | [#2969](https://github.com/agentscope-ai/QwenPaw/issues/2969) (closed) | Medium — ReMe memory work ([#6153](https://github.com/agentscope-ai/QwenPaw/pull/6153)) is foundation |
| **Galaxy Kylin / 国产OS support** | [#6125](https://github.com/agentscope-ai/QwenPaw/issues/6125) | Medium — Enterprise demand; may need CI/CD pipeline addition |
| **Non-Tauri / Win7 variant** | [#6076](https://github.com/agentscope-ai/QwenPaw/issues/6076) | Low — Niche, but vxkex hook path exists |
| **Zulip channel integration** | [#2921](https://github.com/agentscope-ai/QwenPaw/issues/2921) (closed) | Low — Community PR possible |
| **Background tool-call offload with UI controls** | [#6151](https://github.com/agentscope-ai/QwenPaw/pull/6151) (PR open) | High — Dual-deadline architecture addresses #6056 |

## 7. User Feedback Summary
**Pain Points (from issues):**
- **v2.0 regression cluster**: "Amnesia" (#6148), broken `/compact`, embedding config bug (#6155), thinking-block formatting (#6129), message drops under load (#5995).
- **Windows desktop instability**: Auto-close after hours (#2911), UAC prompts on every launch (#6127), WKWebView cache stale UI (#6107).
- **Multi-agent UX**: Leader agent rarely delegates autonomously (#6136); users must explicitly invoke sub-agents.
- **Enterprise/legacy OS gaps**: No Galaxy Kylin package (#6125), Tauri blocks Win7 (#6076).
- **Developer friction**: Editable install memory leak (#6124), MCP env-var migration broken (#6039), no per-session model switch (now in PR #5992).

**Positive Signals:**
- First-time contributors landing fixes (#5992, #6039).
- Active maintainer triage: "ready-for-human-review" labels, quick closes on validated fixes.
- Community asks for *productization* (templates, knowledge base, Chrome extension) — indicates growing adoption beyond early adopters.

## 8. Backlog Watch — Stale/High-Value Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) — Messages silently dropped when session busy | 4 days open | Data-loss risk in multi-user channels (Feishu/DingTalk); no queue/backpressure |
| [#6124](https://github.com/agentscope-ai/QwenPaw/issues/6124) — Editable install ReMe memory leak (48 GB+) | 1 day open | Blocks contributors; may indicate deeper ReMe integration flaw |
| [#6148](https://github.com/agentscope-ai/QwenPaw/issues/6148) — v2.0 amnesia / broken compact | 1 day open | Core UX regression; multiple users affected; PR #6123 targets it but unmerged |
| [#6136](https://github.com/agentscope-ai/QwenPaw/issues/6136) — Leader agent fails to delegate autonomously | 1 day open | Multi-agent value prop unmet; needs prompt/architecture tuning |
| [#6076](https://github.com/agentscope-ai/QwenPaw/issues/6076) — Non-Tauri / Win7 variant | 2 days open | Enterprise/legacy requirement; architectural decision needed |
| [#6125](https://github.com/agentscope-ai/QwenPaw/issues/6125) — Galaxy Kylin support | 1 day open | Govt/enterprise procurement blocker; needs build pipeline + signing |

---

**Health Assessment**: 🟡 **Active Stabilization** — High velocity, but v2.0 shipped with notable regressions (memory, formatting, embedding config). The next 1–2 patch releases will define user trust. Maintainer responsiveness is strong; community is shifting from "does it work?" to "make it enterprise-ready."

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-16

## 1. Today's Overview

ZeroClaw is in a **high-velocity consolidation phase** following the v0.8.3 release (379 commits, 56 contributors). The project shows strong maintenance momentum with **50 PRs and 38 issues updated in 24 hours** — a 57% closure rate on PRs (12 merged/closed) and 53% on issues (20 closed). Activity centers on three pillars: **SOP engine maturation** (daemon-owned control plane), **security hardening** (OIDC auth, pluggable enforcement, audit pipeline), and **provider/runtime stability** (streaming fixes, tool gating, WASM host). The volume of RFC-tracking issues (#7141, #7142, #9086) signals architectural work targeting v0.9.0.

---

## 2. Releases

### v0.8.3 — Major Consolidation Release
**Link:** [zeroclaw-labs/zeroclaw/releases/tag/v0.8.3](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.3)  
**Scope:** 379 commits, 56 contributors

**Key Deliverables:**
| Area | Highlights |
|------|------------|
| **SOP Engine** | Daemon-owned SOP control plane; 13 capabilities tracked via #8288 |
| **WASM Plugin Host** | WebAssembly runtime for user-defined tools/policies |
| **Git Forge Channel** | Native GitHub/GitLab/Gitea integration for PR/issue workflows |
| **Security** | `forbid(unsafe_code)` workspace-wide (#7130), cargo-audit reconciliation (#8519) |
| **Providers** | Idle-bound SSE streaming (#8838), malformed tool-call normalization (#9060) |
| **Runtime** | Live session rebuild on `model_provider` edits (#8845), delegate OAuth fix (#8571) |

**Breaking Changes:** Schema V4 cut (#8754) removes retired channels, SaaS/CLI tools, and `summary_model` cruft — config migration required.  
**Migration Notes:** See PR #8754 for schema diff; `zeroclaw doctor` validates config post-upgrade.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#9062](https://github.com/zeroclaw-labs/zeroclaw/pull/9062) | **Fix** | Gate `execute_pipeline` sub-tools by per-agent `ToolAccessPolicy` | Closes security bypass (was #7960) |
| [#9060](https://github.com/zeroclaw-labs/zeroclaw/pull/9060) | **Fix** | Normalize malformed `tool_calls[].function.arguments` on outbound for OpenAI-compat providers | Prevents 400 errors from upstream |
| [#8838](https://github.com/zeroclaw-labs/zeroclaw/pull/8838) | **Fix** | Idle-bound SSE streaming on shared transport | Stalls no longer hang agent turns |
| [#8845](https://github.com/zeroclaw-labs/zeroclaw/pull/8845) | **Fix** | Rebuild live sessions on `agents.<alias>.model_provider` edits | Config changes take effect without restart |
| [#9070](https://github.com/zeroclaw-labs/zeroclaw/pull/9070) | **Fix** | Flush open `tool_use` block at Anthropic `message_stop` | Completes streaming tool calls |
| [#9071](https://github.com/zeroclaw-labs/zeroclaw/pull/9071) | **Fix** | Log ACP `session/new` agent init failures | Debugging misconfigured agents |
| [#8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672) | **Feature** | Multi-user auth providers (peercred, native, ssh-key, OIDC) + permission profiles | Implements RFC #7141 |
| [#8754](https://github.com/zeroclaw-labs/zeroclaw/pull/8754) | **Breaking** | Schema V4 cut: skills, inert tunable, retired channels/tools | Config migration required |
| [#8901](https://github.com/zeroclaw-labs/zeroclaw/pull/8901) | **Chore** | Strip comment bureaucracy + CI gate | Codebase hygiene |
| [#9098](https://github.com/zeroclaw-labs/zeroclaw/pull/9098) | **CI** | Raise release build timeout to 90 min (darwin leg) | Unblocks release pipeline |

**Net Velocity:** 12 PRs closed — 6 fixes, 2 features, 1 breaking, 2 CI/chore, 1 doc.

---

## 4. Community Hot Topics (Most Commented)

| Issue/PR | Comments | Core Need |
|----------|----------|-----------|
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) **Bug** | 12 | **Kimi provider streaming broken** — `thinking` enabled but `reasoning_content` missing; blocks workflow (S1, P1) |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) **RFC** | 7 | **OIDC auth provider support** — tracking for v0.9.0 multi-user auth (now merged in #8672) |
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) **Feature** | 6 | **Turn-level OTel trace correlation** — nest `llm.call`/`tool.call`/`memory.*` under single turn trace |
| [#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) **RFC** | 6 | **Move i18n files to git submodule** — isolate translation churn |
| [#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) **RFC** | 5 | **A2A agent discovery** (`.well-known/agent-card.json`) for multi-agent installs |
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) **RFC** | 5 | **Pluggable security enforcement provider interface** — trait for audit/incident response |
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) **RFC** | 5 | **Air-gapped execution mode** — offline agent + online daemon over unix socket (blocked) |
| [#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) **Feature** | 4 | **ComfyUI/Comfy Cloud as media provider** — remote workflows, future `gen_video` tool |

**Pattern:** Security/architecture RFCs dominate discussion (#7141, #7142, #7218, #6293, #9086). Provider bugs (#5600) and observability (#6641) are top operational pain points.

---

## 5. Bugs & Stability (Reported/Updated Today)

| Severity | Issue | Component | Status | Fix PR |
|----------|-------|-----------|--------|--------|
| **S1 (blocked)** | [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) Kimi streaming: `reasoning_content` missing | Provider | Open | — |
| **S1 (blocked)** | [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) Web dashboard: agent stops on chat exit | Web/UI | Open | — |
| **S1 (blocked)** | [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) Stopping agent mid-work erases tool calls/thinking | Runtime/Daemon | Open | — |
| **S1 (blocked)** | [#9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085) Nested panic in `try_enable_pgvector` (pgvector + Tokio) | Memory/Postgres | Open | — |
| **S2 (degraded)** | [#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) `browser_open` hangs on headless (unbounded wait) | Tools/Hardware | **Closed** | #8560 merged |
| **S2 (degraded)** | [#9078](https://github.com/zeroclaw-labs/zeroclaw/issues/9078) Serial transport desync after non-matching response ID | Hardware | Open | — |
| **S2 (degraded)** | [#9089](https://github.com/zeroclaw-labs/zeroclaw/issues/9089) Tool output `[AUDIO:]` markers not parsed | Provider/Multimodal | Open | — |
| **S2 (degraded)** | [#9092](https://github.com/zeroclaw-labs/zeroclaw/issues/9092) ZeroCode TUI keystroke lag in long sessions (full history render) | ZeroCode/TUI | Open | — |

**Critical Cluster:** Web dashboard + runtime interaction bugs (#8559, #8794) suggest **session persistence** and **interrupt handling** need architectural review. PGVector panic (#9085) blocks Postgres memory backend users.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for v0.9.0 |
|--------|--------|----------------------|
| **OIDC / multi-user auth** | #7141, #8672 (merged) | ✅ **Delivered** — 4 providers + permission profiles |
| **Pluggable security enforcement** | #7142 (RFC) | 🟡 High — trait design tracked, needs implementation |
| **Structured audit pipeline** | #9086 (RFC, new) | 🟡 High — Merkle logger exists, needs wiring |
| **A2A agent discovery** | #7218 (RFC) | 🟡 Medium — interop groundwork |
| **Air-gapped mode (enclave)** | #6293 (RFC, blocked) | 🔴 Low — architecture split, needs daemon redesign |
| **Turn-level OTel tracing** | #6641 (in-progress) | ✅ Likely — follow-up to #6009/#6190 |
| **ComfyUI media provider + `gen_video`** | #6563 | 🟡 Medium — provider abstraction exists |
| **Telegram webhook mode** | #8046 | 🟡 Medium — alternative to long-polling |
| **Separate conversation history from LTM** | #9048 (RFC, new) | 🟡 High — architectural cleanup |
| **CI for firmware protocol crate** | #9092 | ✅ Likely — isolated fix |

**v0.9.0 Theme:** "Production Hardening" — auth, audit, observability, multi-agent interop.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Web dashboard loses context on interrupt** | #8559, #8794 — "stops the loop", "erases tool calls and thinking" | 2 S1 reports |
| **Provider streaming failures** | #5600 (Kimi), #8838 (SSE stall), #9070 (Anthropic flush) | 3 provider families |
| **Tool execution hangs** | #8560 (`browser_open`), #9078 (serial) | Hardware-dependent |
| **TUI performance degradation** | #9092 — "keystroke lag in long sessions" | ZeroCode users |
| **Config changes require restart** | #8845 fixed for `model_provider`; other keys may persist | Partial fix |
| **No audit trail in production** | #9086 — "three security modules not wired" | Security teams |
| **Translation files pollute main repo history** | #7184 — i18n churn | Maintainers |

**Satisfaction Signals:** Rapid fix turnaround (#8560, #8838, #8845, #9060, #9062 closed same week). Schema V4 migration (#8754) communicated clearly.

---

## 8. Backlog Watch (Stale/Needs Attention)

| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) **RFC: Air-gapped mode** | 74 days | High | Blocked; architecture split needed for enclave support |
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) **Kimi streaming bug** | 97 days | Critical | S1, P1, `no-stale` — provider workflow blocked |
| [#9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085) **PGVector panic** | 1 day | Critical | New regression; blocks Postgres + pgvector users |
| [#9086](https://github.com/zeroclaw-labs/zeroclaw/issues/9086) **RFC: Audit pipeline** | 1 day | High | Security modules exist but unwired; needs design review |
| [#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358) **ZeroRelay milestone** | 20 days | Medium | Tracker for nominated relay; no recent movement |
| [#7960](https://github.com/zeroclaw-labs/zeroclaw/pull/7960) **Fix: `execute_pipeline` tool gating** | 27 days | High | Security bypass; superseded by #9062 (merged) but review pending |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) **OpenAI Chat Completions endpoint** | 17 days | Medium | Gateway interop; large PR (XL), needs review |
| [#8880](https://github.com/zeroclaw-labs/zeroclaw/pull/8880) **SOP approval broker** | 7 days | High | Part of #8288 milestone; stacked on #8848 |

**Maintainer Action Items:**  
1. Triage #9085 (PGVector panic) — new S1 regression  
2. Review #8486 (OpenAI endpoint) — high-value interop  
3. Unblock #6293 or close with decision — long-stalled RFC  
4. Assign #9086 (audit pipeline) — security-critical, fresh RFC  

---

## Health Indicators

| Metric | Value | Trend |
|--------|-------|-------|
| **Issue closure rate (24h)** | 53% (20/38) | 🟢 Healthy |
| **PR closure rate (24h)** | 24% (12/50) | 🟡 Moderate (many open XL PRs) |
| **S1/P1 bugs open** | 5 | 🔴 Needs triage |
| **RFCs in progress** | 7 (#7141, #7142, #7218, #6293, #6641, #9048, #9086) | 🟡 High architectural load |
| **Contributors (v0.8.3)** | 56 | 🟢 Strong community |

**Overall:** **Strong velocity with growing architectural debt.** The v0.8.3 consolidation delivered well, but S1 bugs (#5600, #8559, #8794, #9085) and 7 concurrent RFCs signal need for focused stabilization before v0.9.0 feature work.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*