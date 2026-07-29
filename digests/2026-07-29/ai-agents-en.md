# OpenClaw Ecosystem Digest 2026-07-29

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-29 02:00 UTC

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

# OpenClaw Project Digest — 2026-07-29

---

## 1. Today's Overview

OpenClaw shows **exceptionally high velocity** with 500 issues and 500 PRs updated in the last 24 hours — a near 1:1 open/closed ratio indicating rapid iteration. The project released **v2026.7.2-beta.5** today, focused on **state safety and recovery** (quarantine store, crash-recoverable SQLite snapshots, schema-upgrade data-loss rejection). Critical stability issues dominate community attention: a **P0 gateway memory leak** (RSS 350MB → 15.5GB), **crash-loop breaker regressions** suppressing Discord/WhatsApp, and **session transcript corruption** bugs. Maintainers are actively merging fixes across session management, channel integrations, model discovery, and UI polish — with 266 PRs merged/closed today alone.

---

## 2. Releases

### v2026.7.2-beta.5 — *State Safety & Recovery*  
**Released:** 2026-07-29 | [Release Notes](https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.5)

| Change | Impact |
|--------|--------|
| Quarantine store protecting persisted data from primary DB damage | 🛡️ Data durability |
| Crash-recoverable SQLite snapshots | 🔄 Recovery |
| Crash-durable filesystem publication | 💾 Write safety |
| Schema-upgrade data-loss rejection | ⚠️ Migration guard |
| Rollback-writer snapshot recovery | ↩️ Rollback safety |

**Breaking Changes:** None explicitly noted — this is a beta hardening release.  
**Migration Notes:** Operators on ≤2026.6.x should run `openclaw doctor` post-upgrade to repair legacy `agent:<seat>:boot` sessions ([#113207](https://github.com/openclaw/openclaw/pull/113207)).

---

## 3. Project Progress — Merged/Closed PRs Today (266 total)

| PR | Area | Summary | Status |
|----|------|---------|--------|
| [#114439](https://github.com/openclaw/openclaw/pull/114439) | UI/Session | Fix agent selection alignment across session switches (stale agent chip, reconnect state drift) | ✅ Merged |
| [#114441](https://github.com/openclaw/openclaw/pull/114441) | Cron | Fix completed jobs stuck behind slower batch runs; retain run history | ✅ Merged |
| [#114443](https://github.com/openclaw/openclaw/pull/114443) | TUI | Synchronize shared conversations; bound streaming; fix dropped visible responses | ✅ Merged |
| [#114442](https://github.com/openclaw/openclaw/pull/114442) | OpenAI | Restrict device-code retries to transient transport errors (fixes 15-min OAuth abort) | ✅ Merged |
| [#113368](https://github.com/openclaw/openclaw/pull/113368) | Telegram | Persist update offset *after* durable spool write — prevents lost updates on crash | ✅ Merged |
| [#114400](https://github.com/openclaw/openclaw/pull/114400) | Release | Detect missing bundled providers after `npm install` — hardens release gate | ✅ Merged |
| [#114429](https://github.com/openclaw/openclaw/pull/114429) | QA | Harden Mantis Telegram proof harness (toolchain checks, config drift) | ✅ Merged |
| [#114057](https://github.com/openclaw/openclaw/pull/114057) | Docs | Fix broken GitHub Copilot CLI docs URL | ✅ Merged |
| [#113285](https://github.com/openclaw/openclaw/pull/113285) | deps/macOS | Bump `peekaboo` 3.9.6 → 3.9.7 | ✅ Merged |
| [#111301](https://github.com/openclaw/openclaw/pull/111301) | iOS | Apple Watch chat inherits thinking defaults (fixes free-form message failure) | ✅ Merged |

**Theme:** Session stability, channel reliability, release hardening, and cross-platform polish.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Issue/PR | Comments | 👍 | Core Need |
|----------|----------|-----|-----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 115 | 80 | **Platform parity** — macOS/iOS/Android exist; Linux/Windows native apps missing. Highest community demand. |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway Memory Leak (P0) | 20 | 1 | **Critical stability** — RSS 350MB→15.5GB in 2–3 days, OOM kills, `launchd-handoff` restart loops. |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked Secrets | 14 | 4 | **Security** — Agents use API keys without seeing them; prevent leaks & prompt injection. |
| [#115326](https://github.com/openclaw/openclaw/issues/115326) Crash-loop breaker suppresses Discord/WhatsApp | 11 | 0 | **Regression (today)** — Documented recovery (`channels.start`) fails with WS 1006. |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source | 22 | 0 | **Security** — Tag memory by origin (user, web, skills) to prevent poisoning attacks. |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) Denylist for exec-approvals | 10 | 8 | **Security/UX** — "Allow all except X" policies for dangerous commands (`gog gmail send`, `rm -rf`). |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) Dynamic Model Discovery (OpenRouter) | 10 | 3 | **Extensibility** — Static catalog can't keep up with fast-moving provider model lists. |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) Filesystem Sandboxing Config | 9 | 4 | **Security** — Config-driven `allowedPaths`/`denyPaths` for tool file access. |
| [#90098](https://github.com/openclaw/openclaw/issues/90098) Stack-safe Large Attachments | 7 | 2 | **Reliability** — Large PDFs overflow browser/gateway stack via data URLs & regex. |
| [#113251](https://github.com/openclaw/openclaw/issues/113251) Image Viewing in Webchat | 9 | 0 | **UX** — File viewer shows placeholders; need inline image rendering. |

**Underlying Signals:**  
- **Security hardening** (secrets, sandboxing, denylist, trust tagging) is a top community priority.  
- **Platform gaps** (Linux/Windows apps, iOS Watch, Android) block adoption.  

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-07-29)

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape is **fragmented but highly active**, with 11 projects showing significant development velocity in the past 24 hours. Three distinct tiers are emerging: **OpenClaw** as the high-scale reference implementation (500 issues/PRs/day), a **mid-tier of 6 projects** (NanoBot, Hermes, IronClaw, ZeroClaw, CoPaw, NanoClaw) each processing 18–100 daily updates, and a **long tail** of specialized or early-stage efforts. Security hardening, multi-provider model routing, session isolation, and platform parity (Linux/Windows/mobile) are the dominant cross-cutting themes. No project has reached a "stable 1.0" — all are in rapid beta iteration with frequent breaking changes.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs (24h) | Release Today? | Health Score* |
|---------|-------------|-----------|--------------------------|----------------|---------------|
| **OpenClaw** | 500 | 500 | 266 | ✅ v2026.7.2-beta.5 | 🟢 Exceptional |
| **ZeroClaw** | 49 | 50 | 1 (merged) + 7 issues | ❌ | 🟡 High velocity, review bottleneck |
| **IronClaw** | 50 | 50 | 16 | ❌ | 🟢 High velocity, epic-driven |
| **Hermes Agent** | 50 | 50 | 14 issues closed | ❌ | 🟢 High velocity, voice-focused |
| **CoPaw** | 18 | 50 | 14 | ❌ | 🟡 High velocity, regression-heavy |
| **NanoBot** | 7 | 37 | 18 | ❌ | 🟢 High velocity, feature-packed |
| **NanoClaw** | ~1 | 11 | 4 | ❌ | 🟢 Steady, production-hardening |
| **Moltis** | 0 | 8 | 2 | ❌ | 🟢 Focused, internal-driven |
| **PicoClaw** | 4 | 10 | 3 | ❌ | 🟡 Moderate, stale PR backlog |
| **LobsterAI** | 4 | 6 | 6 | ❌ | 🟢 Good, Windows/security focus |
| **NullClaw** | 0 | 0 | 0 | ❌ | 🔴 Inactive |
| **TinyClaw** | 0 | 0 | 0 | ❌ | 🔴 Inactive |
| **ZeptoClaw** | — | — | — | — | ⚠️ Data unavailable |

*Health Score: 🟢 = strong merge throughput + active triage; 🟡 = velocity high but bottlenecks (review, regressions, stale backlog); 🔴 = no recent activity.

---

## 3. OpenClaw's Position

**Advantages vs. Peers**
- **Scale & Velocity**: 10× the daily issue/PR volume of the next project; 266 merges/day indicates mature CI/CD and review bandwidth.
- **State Safety Leadership**: Only project shipping **crash-recoverable SQLite snapshots, quarantine store, schema-upgrade data-loss rejection** (v2026.7.2-beta.5) — production-grade durability primitives.
- **Channel Breadth**: Native Discord, WhatsApp, Telegram, Slack, Feishu, DingTalk, iMessage integrations with active fixes (offset persistence, crash-loop recovery).
- **Community Demand Signal**: Issue #75 (Linux/Windows native apps) has 115 comments / 80 👍 — largest quantified unmet need in the ecosystem.

**Technical Approach Differences**
- **Monolithic core + channel plugins** vs. NanoBot/IronClaw/ZeroClaw's **WASM/plugin architecture** for extensibility.
- **SQLite-first persistence** with snapshot/rollback vs. IronClaw's process-journal DB migration, ZeroClaw's runtime-owned session model.
- **Gateway-centric design** (memory leak P0 shows gateway as central bottleneck) vs. Moltis/NanoClaw's lighter daemon model.

**Community Size Comparison**
- OpenClaw's top issue (#75) has **more engagement (115 comments) than most projects' entire issue queues**. CoPaw's top issue (#6461) has 2 👍; NanoBot's #5000 has 5 comments; IronClaw's #6284 has 15. OpenClaw is the clear community gravity center.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Secrets / Credential Security** | OpenClaw (#10659, #7707, #6615), ZeroClaw (#9127 RFC, #9486 redaction bug), IronClaw (#16461 guard_agent_created), NanoClaw (MiniMax OAuth), PicoClaw (OAuth callback #3280) | Masked secrets from agents, trust tagging by source, denylist for exec approvals, `KeySource` trait classification, OAuth rotation handling |
| **Session Isolation / Multi-Tenancy** | CoPaw (#6461 cross-agent leakage, #6509 sub-agent isolation), OpenClaw (session transcript corruption), ZeroClaw (runtime-owned session RFC #9487), IronClaw (error recoverability epic #6284) | UUID-based workspace isolation, agent privacy boundaries, runtime as single session owner, 100% model error recovery |
| **Multi-Provider Model Routing & Fallback** | NanoClaw (#3057 dual-engine quota fallback, #1350 Copilot SDK), OpenClaw (#10687 dynamic OpenRouter discovery), NanoBot (#5148 image-aware presets), CoPaw (#6302 safe model discovery), ZeroClaw (#9521 MCP image→vision) | Automatic failover on quota exhaustion, dynamic catalog sync, tri-state vision support, provider-agnostic discovery |
| **Platform Parity (Linux/Windows/Mobile)** | OpenClaw (#75 Linux/Windows apps), PicoClaw (#3182 Android service failure), LobsterAI (#2396 PowerShell 5.1 exec default), Hermes (#31015 Termux, #17573 WSL2, #62975 Podman), CoPaw (#6534 Windows installer loop) | Native Linux/Windows desktop, Android service stability, cross-shell exec, containerized deployments |
| **Observability & Debugging** | IronClaw (#6524 hermetic journey testing, #6837 growth stats), Moltis (#1174 Langfuse/OTLP + feedback), NanoBot (#5110 startup diagnostics), ZeroClaw (#9383 npm audit vulns) | Critical journey evidence tiers, backend-neutral instrumentation, actionable `status` commands, supply-chain vuln tracking |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architectural Signature |
|---------|------------------------|-------------|-------------------------|
| **OpenClaw** | Scale, channel breadth, state durability | Power users, self-hosters, multi-channel operators | Monolithic gateway + SQLite snapshots + channel plugins |
| **NanoBot** | WebUI polish, skill marketplace, multi-agent vision | Desktop/Web users, skill authors | CLI core + React WebUI + Python extension platform |
| **Hermes Agent** | Voice/TTS pipeline maturity, Desktop app | Voice-first users, desktop integrators | Local STT/TTS, profile-aware Desktop, gateway RBAC |
| **IronClaw** | Enterprise governance, hermetic testing, extension RBAC | Enterprise/team deployments, platform builders | WASM plugins, tenant extension governance, critical-journey testing |
| **ZeroClaw** | Runtime-owned sessions, WASM plugin migration, secrets taxonomy | Security-focused, plugin architects | RFC-driven, capability-based security, `KeySource` classification |
| **CoPaw** | Computer-use automation, Mission Mode, Chinese enterprise channels | Chinese enterprise, GUI automation users | Native accessibility automation, Feishu/DingTalk, ACP stdio |
| **NanoClaw** | Production hardening, fork-safe updates, provider pluralism | Production fork maintainers, multi-provider ops | Container PID 1 fixes, merge guards, smoke tests, Copilot/Codex/Claude routing |
| **Moltis** | ACP stdio interop, Slack Block Kit, operator privilege model | Evaluators, Slack-heavy teams, interop seekers | ACP agent over stdio, authenticated gateway RPC, least-privilege operators |
| **PicoClaw** | Lightweight, Feishu/DingTalk native, Anthropic caching | Chinese enterprise, resource-constrained | Minimal core, provider-specific optimizations (vodozemac, cache_control) |
| **LobsterAI** | Windows installer security, isolated `/btw` side-chat, OpenClaw wrapper | Windows desktop users, multi-threaded workflows | Electron/Tauri wrapper on OpenCrawl, redirect-hardened updater |
| **NanoBot / Hermes / CoPaw** | **Multi-agent / sub-agent frameworks** | Power users building agent societies | NanoBot: persistent identities; Hermes: nested hooks; CoPaw: Mission Mode spawn |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Velocity Leaders** | OpenClaw, ZeroClaw, IronClaw, Hermes | 50+ issues/PRs/day; epic-driven; multiple concurrent workstreams; review bandwidth is bottleneck (ZeroClaw: 1 merge vs 99 updates) |
| **Feature Factories** | NanoBot, CoPaw | 18–50 PRs/day; shipping major features (skill marketplace, computer-use, LINE channel) alongside P1 regression fixes; CoPaw has 11 bugs reported today, 5 critical |
| **Steady Hardening** | NanoClaw, Moltis, LobsterAI | Low issue count, high merge quality; focused on production reliability (zombie reaping, merge guards, installer security, ACP compliance) |
| **Maintenance Mode** | PicoClaw | Active merging but 6 stale PRs >7 days; Android blocker open 33 days; security migration (vodozemac) tracked not done |
| **Inactive** | NullClaw, TinyClaw, ZeptoClaw | No 24h activity |

**Rapidly Iterating**: OpenClaw, NanoBot, Hermes, CoPaw, ZeroClaw, IronClaw  
**Stabilizing**: NanoClaw, Moltis, LobsterAI (low churn, high merge confidence)

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Multi-provider routing is table stakes** | NanoClaw (Claude→Codex fallback prod-tested), OpenClaw (OpenRouter dynamic discovery), CoPaw (safe model discovery), NanoBot (image-aware presets), ZeroClaw (MCP vision pipeline) | **Build provider-agnostic model routers with automatic quota failover** — users will not tolerate single-provider lock-in. |
| **Session isolation = security boundary** | CoPaw (cross-agent memory leakage = critical), ZeroClaw (runtime-owned session RFC), OpenClaw (transcript corruption), IronClaw (100% error recovery) | **Architect runtime as single session owner**; UUID-isolated workspaces; prevent sub-agent cross-contamination. |
| **WASM/plugins for extensibility** | IronClaw (tenant extension governance), ZeroClaw (channels/tools → WASM RFC), NanoBot (unified Python extension platform), Moltis (ACP stdio agent) | **Adopt WASM/component-model for sandboxed extensions**; separate installation lifecycle from core releases. |
| **Observability as a release gate** | IronClaw (critical-journey evidence tiers, release gates), Moltis (Langfuse/OTLP + user feedback), NanoBot (startup diagnostics) | **Instrument every critical journey**; make observability a merge requirement, not an afterthought. |
| **Windows/Linux parity gaps block adoption** | OpenClaw (115 comments on #75), PicoClaw (Android service broken), LobsterAI (PowerShell 5.1 default breaks exec), Hermes (Podman/WSL2/Termux bugs) | **Invest in native cross-platform builds early**; container-first is not enough for desktop users. |
| **Enterprise governance features emerging** | IronClaw (tenant extension publication, RBAC, policy precedence), Hermes (gateway RBAC tiers), Moltis (operator privilege separation) | **Multi-tenant, role-based access control** is becoming a differentiator for team/enterprise adoption. |
| **Voice/TTS as a first-class modality** | Hermes (8/14 closures voice-related), OpenClaw (gateway memory leak affects voice channels), CoPaw (Mission Mode voice?) | **Design voice pipelines for reliability** (offset persistence, crash recovery, profile-aware config) — not as bolt-on. |

---

**Bottom Line for Decision-Makers**: The ecosystem is **converging on a common architecture**: runtime-owned sessions + WASM/plugin extensions + multi-provider routing + hermetic testing + cross-platform parity. OpenClaw leads on scale and durability primitives; IronClaw/ZeroClaw lead on governance and security architecture; NanoBot/CoPaw/Hermes lead on UX innovation (WebUI, voice, computer-use). **Projects that solve session isolation, provider fallback, and Windows/Linux parity first will capture the next wave of adopters.**

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-29

## 1. Today's Overview
NanoBot shows **exceptionally high development velocity** with 37 pull requests and 7 issues updated in the last 24 hours. The project is in an intense stabilization and feature-expansion phase: 18 PRs were merged/closed today, dominated by regression fixes (session locking, media path preservation, CI stabilization), while 19 open PRs advance major features including a LINE messaging channel, unified extension platform, skill marketplaces in WebUI, and image-aware model presets. No new release was cut, suggesting the maintainers are batching changes for a forthcoming version. Overall health is strong—rapid iteration, active triage, and systematic bug squashing—but the volume of concurrent “priority: p1” fixes hints at recent regressions that needed urgent attention.

## 2. Releases
**No new releases published today.** The latest release remains prior to 2026-07-28. Expect a consolidated release once the current wave of P1 fixes and feature PRs lands.

## 3. Project Progress — Merged / Closed PRs Today (18)
| PR | Area | Summary |
|----|------|---------|
| [#5145](https://github.com/HKUDS/nanobot/pull/5145) | CI/CD | Stabilized & sped up CI: replaced flaky timeout test with stdin handshake, batched dependency installs. |
| [#5144](https://github.com/HKUDS/nanobot/pull/5144) | CI/CD | Scoped PR path detection to head SHA (three-dot range) to avoid false positives from base-branch drift. |
| [#5143](https://github.com/HKUDS/nanobot/pull/5143) | WebUI | Animated reasoning drawer transitions (600 ms ease-out, respects reduced-motion). |
| [#5110](https://github.com/HKUDS/nanobot/pull/5110) | Config | Added actionable startup diagnostics (`nanobot status` now checks env refs, model resolution, provider setup) with WebUI recovery. |
| [#5142](https://github.com/HKUDS/nanobot/pull/5142) | WebUI | Threads now open at latest message without scroll jump; pinned through layout shifts. |

*Other merged PRs (not fully listed) include additional regression fixes for pairing-store null handling, token-usage key validation, session-lock leaks, buffered exec output bounds, and subagent partial-completion metadata.*

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#5000](https://github.com/HKUDS/nanobot/issues/5000) | Issue | 5 comments, opened 2026-07-20 | **Multi-agent collaboration**: User proposes evolving subagents from fire-and-forget tasks to persistent, state-sharing agents with identities—signals demand for true agent societies. |
| [#5](https://github.com/HKUDS/nanobot/issues/5) | Issue | 7 comments, 3 👍, closed today | **uv install docs**: Community wants official `uv`-based install instructions for speed/stability; closed after docs update. |
| [#5116](https://github.com/HKUDS/nanobot/pull/5116) | PR | Feature + test, P1 | **Skill Marketplaces in WebUI**: Discover/install skills from skills.sh & SkillHub with trending lists & install-history sparklines. |
| [#5098](https://github.com/HKUDS/nanobot/pull/5098) | PR | Feature + test, P1, conflict | **Unified Extension Platform**: Native Python extensions to fill gaps skills/Apps/MCP can’t cover; reuses tool/command/hook registries. |
| [#5115](https://github.com/HKUDS/nanobot/pull/5115) | PR | Feature + test, P1 | **LINE Messaging API Channel**: First-class support for Japan/Taiwan/Thailand/Indonesia’s top messenger (webhook + HMAC verification). |

*Underlying theme*: Users & contributors are pushing NanoBot from “single-agent CLI” → **multi-channel, extensible, multi-agent platform** with polished WebUI.

## 5. Bugs & Stability — Reported / Fixed Today
| Severity | Issue / PR | Status | Notes |
|----------|------------|--------|-------|
| **Critical (Data Loss)** | [#5118](https://github.com/HKUDS/nanobot/issues/5118) / [#5120](https://github.com/HKUDS/nanobot/pull/5120) / [#5139](https://github.com/HKUDS/nanobot/pull/5139) | Fix PRs open | Session consolidation drops uploaded media paths stored only in `media[]` → files unrecoverable after archive. Two independent fix PRs (#5120, #5139) target same root cause. |
| **High (Crash/Regression)** | [#5133](https://github.com/HKUDS/nanobot/issues/5133) | Open | `finish_reason='length'` with tool_calls + blank content misrouted to empty-response retry instead of length recovery. |
| **High (Crash/Regression)** | [#5155](https://github.com/HKUDS/nanobot/pull/5155) | Open (P1) | `get_approved` crashes on `"approved": null` in pairing store (`AttributeError: 'NoneType'`). |
| **High (Crash/Regression)** | [#5154](https://github.com/HKUDS/nanobot/pull/5154) | Open (P1) | Responses API parser crashes on primitive/non-dict items in SSE streams (`TypeError` on `vars(item)`). |
| **High (Crash/Regression)** | [#5153](https://github.com/HKUDS/nanobot/pull/5153) | Open (P1) | `MemoryStore._format_messages` fails on non-string/None timestamps or missing `role` in raw_archive. |
| **Medium (Resource Leak)** | [#5151](https://github.com/HKUDS/nanobot/pull/5151) | Open (P1) | `AgentLoop._session_locks` retained every session key for process lifetime → migrated to `WeakValueDictionary`. |
| **Medium (Resource Leak)** | [#5150](https://github.com/HKUDS/nanobot/pull/5150) | Open (P1) | Unbounded buffered session stdout/stderr → now capped with head/tail budget. |
| **Medium (Protocol Pollution)** | [#5138](https://github.com/HKUDS/nanobot/issues/5138) | Open | MCP stdio shutdown emits cancel-scope teardown error + stdout pollution; tracking SDK v2 migration. |
| **Low (Functional)** | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | Open | WhatsApp audio send broken (receive works); ffmpeg warning in logs. |
| **Low (Stale)** | [#1332](https://github.com/HKUDS/nanobot/issues/1332) | Closed (stale) | High token consumption on simple “hello” (5k+ input tokens); closed as stale after 5 months. |

**Takeaway**: A cluster of P1 regressions around session/memory/pairing stores and provider parsers landed recently; fixes are flowing fast but not yet merged.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Multi-agent collaboration framework** (persistent identities, shared state, inter-agent comms) | [#5000](https://github.com/HKUDS/nanobot/issues/5000) | Medium — design discussion started; implementation scope large. |
| **Unified Extension Platform** (native Python extensions) | [#5098](https://github.com/HKUDS/nanobot/pull/5098) | High — PR open with tests, marked P1, conflict flag suggests active review. |
| **Skill Marketplaces in WebUI** (discover, trending, one-click install) | [#5116](https://github.com/HKUDS/nanobot/pull/5116) | High — feature-complete PR, P1, test included. |
| **LINE Messaging API Channel** | [#5115](https://github.com/HKUDS/nanobot/pull/5115) | High — complete implementation with webhook server, HMAC, allow-list. |
| **Image-aware Model Presets** (tri-state `supportsImageInput`, editable default preset) | [#5148](https://github.com/HKUDS/nanobot/pull/5148) | High — migrates legacy config, P1, test included. |
| **Stable Resource Path Aliases** (`<config-dir>/resources/<view-id>/`) | [#5131](https://github.com/HKUDS/nanobot/pull/5131) | Medium — foundational for extensions/skills, marked conflict. |
| **Actionable Startup Diagnostics** (`nanobot status` offline readiness) | [#5110](https://github.com/HKUDS/nanobot/pull/5110) | **Already merged** — will be in next release. |

## 7. User Feedback Summary
| Pain Point / Use Case | Evidence | Sentiment |
|------------------------|----------|-----------|
| **Token cost opacity** — “hello” burns 5k+ tokens; skill install 30k+ | [#1332](https://github.com/HKUDS/nanobot/issues/1332) (closed stale) | 😠 Frustration; stale closure may leave users unheard. |
| **Media/file loss after archive** — uploaded files vanish | [#5118](https://github.com/HKUDS/nanobot/issues/5118) | 😱 Critical data-loss fear; two fix PRs show urgency. |
| **WhatsApp audio send broken** | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | 😕 Functional gap for multimodal users. |
| **Desire for `uv` install** | [#5](https://github.com/HKUDS/nanobot/issues/5) (closed) | ✅ Resolved via docs; community appreciates modern tooling. |
| **Subagent limitations** — want true multi-agent, not task delegation | [#5000](https://github.com/HKUDS/nanobot/issues/5000) | 💡 Forward-looking; power users pushing platform boundaries. |
| **WebUI polish** — scroll jumps, drawer animation | [#5142](https://github.com/HKUDS/nanobot/pull/5142), [#5143](https://github.com/HKUDS/nanobot/pull/5143) | ✅ Actively addressed; UX improving. |

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age / Status | Why It Matters |
|------|--------------|----------------|
| [#5000](https://github.com/HKUDS/nanobot/issues/5000) | 9 days open, 5 comments | Strategic direction: multi-agent architecture decision affects all future agent work. |
| [#5138](https://github.com/HKUDS/nanobot/issues/5138) | 1 day open, 1 comment | MCP stdio shutdown bugs block reliable MCP integration; requires SDK v2 migration planning. |
| [#5098](https://github.com/HKUDS/nanobot/pull/5098) | 3 days open, conflict flag | Extension platform is a major new boundary; conflicts need resolution before merge. |
| [#5131](https://github.com/HKUDS/nanobot/pull/5131) | 1 day open, conflict flag | Resource path aliases underpin extensions/skills; conflict suggests design review needed. |
| [#1332](https://github.com/HKUDS/nanobot/issues/1332) | 5 months, closed stale | Token-cost transparency still a user pain; consider reopening or adding token-estimation UI. |
| [#5118](https://github.com/HKUDS/nanobot/issues/5118) + [#5120](https://github.com/HKUDS/nanobot/pull/5120) + [#5139](https://github.com/HKUDS/nanobot/pull/5139) | 2 days, two competing fix PRs | Data-loss bug with duplicate fixes—maintainer must choose/merge one to unblock users. |

---

**Bottom line**: NanoBot is shipping fixes and features at a **remarkable clip** (≈1.5 PRs/hour). The next release will likely be a **substantial “stability + platform” drop** bundling the P1 regression fixes, LINE channel, extension platform, skill marketplace, and model-preset overhaul. Maintainers should prioritize merging the media-path fix (#5120/#5139), resolving extension-platform conflicts (#5098, #5131), and triaging the multi-agent proposal (#5000) to set architectural direction.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-29

## 1. Today's Overview
Hermes Agent shows **very high development velocity** with 50 issues and 50 PRs updated in the last 24 hours. The project is in active maintenance mode with **no new release** today. A significant portion of activity centers on **voice/TTS stability**, **Desktop app profile configuration bugs**, **gateway authorization gaps**, and **platform-specific quirks** (Windows, macOS, WSL2, Termux, Podman). Fourteen issues were closed today, mostly TTS/voice-related regressions, while 36 remain open. The PR pipeline is dense with features ranging from RBAC gateway permissions to telemetry, new provider integrations (Claude Agent SDK, Kimi, local STT), and platform expansions (iMessage, Discord markdown tables).

---

## 2. Releases
**No new releases published today.** The project continues on the current stable version with ongoing patch/feature work in `main`.

---

## 3. Project Progress — Merged/Closed Today
Fourteen issues closed and at least one PR merged (auto-fix bot). Key resolutions:

| Item | Type | Summary |
|------|------|---------|
| [#46135](https://github.com/NousResearch/hermes-agent/issues/46135) | Bug | Desktop app showing remote TTS audio as 0-second/broken files |
| [#45506](https://github.com/NousResearch/hermes-agent/issues/45506) | Bug | Desktop voice mode using default profile TTS config instead of active profile |
| [#67545](https://github.com/NousResearch/hermes-agent/issues/67545) | Bug | CLI continuous voice: Ctrl+B hotkey ignored during STT/agent processing |
| [#64057](https://github.com/NousResearch/hermes-agent/issues/64057) | Bug | TTS voice selection ignoring mismatched global vs profile config on Desktop (Windows) |
| [#8098](https://github.com/NousResearch/hermes-agent/issues/8098) | Bug/Perf | Local faster-whisper first-run model fetch silent, CLI appears hung at "Transcribing..." |
| [#17573](https://github.com/NousResearch/hermes-agent/issues/17573) | Bug | WSL2 TTS audio routing — playback doesn't reach Windows speakers |
| [#56427](https://github.com/NousResearch/hermes-agent/issues/56427) | Bug | Gateway video/screenshot caches leak files (no cleanup) |
| [#66788](https://github.com/NousResearch/hermes-agent/issues/66788) | Test | Gateway test suite has real-world side effects: speaks via TTS, launches real Chrome |
| [#66012](https://github.com/NousResearch/hermes-agent/issues/66012) | Bug | Desktop ignores per-profile `tts/voice` config; always uses global/default |
| [#31015](https://github.com/NousResearch/hermes-agent/issues/31015) | Bug | `/voice on` fails in Termux despite Termux:API installed |
| [#38831](https://github.com/NousResearch/hermes-agent/issues/38831) | Bug | CLI: auto-play audio from agent's `text_to_speech` tool results |
| [#21088](https://github.com/NousResearch/hermes-agent/issues/21088) | Bug | SyntaxWarning: `return` in `finally` block in `_voice_process_recording` (Python 3.14+) |
| [#73770](https://github.com/NousResearch/hermes-agent/pull/73770) | Chore | `npm run fix` auto-formatting (bot, merged) |

**Pattern:** Today's closures are heavily weighted toward **voice/TTS pipeline fixes** (8/14) and **Desktop profile-config synchronization** (3/14), indicating a focused stabilization sprint on audio and multi-profile UX.

---

## 4. Community Hot Topics — Most Active Discussions
Ranked by comment count + reactions (issues only; PR comments not available in data):

| Rank | Issue | Comments | 👍 | Core Need |
|------|-------|----------|-----|-----------|
| 1 | [#527](https://github.com/NousResearch/hermes-agent/issues/527) **Gateway Permission Tiers — RBAC** | 17 | 10 | **Critical**: Replace binary auth (all/none) with Owner/Admin/User/Guest roles for messenger gateways. Tagged `needs-decision`, `sweeper:risk-security-boundary`. |
| 2 | [#71527](https://github.com/NousResearch/hermes-agent/issues/71527) **Desktop profile query param missing** | 7 | 0 | Desktop stores active profile in localStorage but doesn't pass `?profile=` to `/api/ws`, breaking multi-profile remote sessions. |
| 3 | [#47191](https://github.com/NousResearch/hermes-agent/issues/47191) **Discord home channel notification on goal completion** | 5 | 0 | Native goal-completion webhook to Discord home channel (vs. cron workaround). |
| 4 | [#8993](https://github.com/NousResearch/hermes-agent/issues/8993) **Tool calling unstable / hallucinations (web_search, FireCrawl)** | 4 | 3 | v0.8.0 regression: agent fails to use tools, generates invalid calls (todo:list, terminal:command), returns empty responses. Tagged `needs-repro`. |
| 5 | [#62975](https://github.com/NousResearch/hermes-agent/issues/62975) **Podman install: Node sidecar NPM permission error** | 4 | 0 | Install fails on Podman even with SELinux disabled; permissions issue on Node sidecar dependency. |
| 6 | [#69881](https://github.com/NousResearch/hermes-agent/issues/69881) **Qwen 1M-context models detected as 131K** | 2 | 0 | Premature compaction on `qwen3.7-plus` etc. due to hardcoded context detection. Tagged `sweeper:risk-compatibility`, `area/compression`. |

**Underlying themes:**  
- **Gateway maturity**: RBAC (#527), profile-aware WebSocket (#71527), Discord features (#47191, #27265) signal demand for production-grade multi-tenant messenger deployments.  
- **Tool reliability**: #8993 (hallucinations), #73388 (unnecessary tool_search retries), #51931 (nested hook session_id loss) point to agent loop fragility.  
- **Platform gaps**: Podman (#62975), Termux (#31015), WSL2 (#17573), macOS Desktop crash (#38468) reveal cross-platform rough edges.

---

## 5. Bugs & Stability — Today's Reports (Ranked by Severity Signals)
| Severity | Issue | Component | Status | Fix PR? |
|----------|-------|-----------|--------|---------|
| **High** | [#8993](https://github.com/NousResearch/hermes-agent/issues/8993) Tool calling unstable / hallucinations | Agent, web_search, FireCrawl | Open (`needs-repro`) | No |
| **High** | [#73297](https://github.com/NousResearch/hermes-agent/issues/73297) Memory rollback after `/reset` — FTS not flushed | Gateway, Memory, Telegram | Open (`sweeper:risk-session-state`) | No |
| **High** | [#73388](https://github.com/NousResearch/hermes-agent/issues/73388) Agent retries tool_search/tool_describe on eager-loaded MCP tools | Agent, MCP | Open | No |
| **High** | [#69881](https://github.com/NousResearch/hermes-agent/issues/69881) Qwen 1M-context models misdetected as 131K | Agent, Provider/Qwen, Compression | Open (`sweeper:risk-compatibility`) | No |
| **Medium** | [#71527](https://github.com/NousResearch/hermes-agent/issues/71527) Desktop doesn't pass `?profile=` to WebSocket | CLI, MCP, Profiles | Open | No |
| **Medium** | [#62975](https://github.com/NousResearch/hermes-agent/issues/62975) Podman install: Node sidecar NPM permission error | Plugins, Docker, Install | Open | No |
| **Medium** | [#51931](https://github.com/NousResearch/hermes-agent/issues/51931) Nested tool hooks can't get `session_id` | Agent, Code-exec, Sessions | Open | No |
| **Medium** | [#5214](https://github.com/NousResearch/hermes-agent/issues/5214) Locked/invalid `config.yaml` writes crash or silently fail | CLI, Gateway, Config | Open | No |
| **Medium** | [#6212](https://github.com/NousResearch/hermes-agent/issues/6212) Telegram fresh hello dumps prior context compaction | Gateway, Telegram | Open | No |
| **Medium** | [#26714](https://github.com/NousResearch/hermes-agent/issues/26714) Telegram replies to cron revive stale tasks via quoted context | Gateway, Cron, Telegram | Open | No |
| **Medium** | [#38468](https://github.com/NousResearch/hermes-agent/issues/38468) macOS Desktop remote gateway crashes: `Object has been destroyed` in `getWindowState()` | TUI, Desktop | Open | No |
| **Medium** | [#16461](https://github.com/NousResearch/hermes-agent/issues/16461) `skills.guard_agent_created` defaults to `false` (security) | Skills, Config, Security | Open | No |

**Note:** Many TTS/voice bugs closed today (#46135, #45506, #67545, #64057, #8098, #17573, #31015, #38831, #21088) were **medium-severity regressions** now resolved. The remaining

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-29

## 1. Today's Overview
PicoClaw shows **moderate maintenance activity** with 14 total items updated in the last 24 hours (4 issues, 10 PRs). The project is actively addressing **authentication reliability**, **provider integrations** (Anthropic, Feishu, Exa), and **core agent logic** (model resolution, tool-call handling). Three PRs were merged today, delivering fixes for Feishu media delivery, model reference resolution, and Anthropic prompt caching. No new releases were published. The backlog contains several stale PRs (>7 days) awaiting review, indicating a need for maintainer triage bandwidth.

## 2. Releases
**No new releases** in the last 24 hours. The project appears to follow a continuous delivery model with fixes landing directly on main.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#3256](https://github.com/sipeed/picoclaw/pull/3256) | `fix(feishu): send audio and video with native message types` | Platform Integration | **User-facing fix**: Audio (opus) and video (mp4) sent via Feishu now render as native playable messages instead of generic file downloads. |
| [#3254](https://github.com/sipeed/picoclaw/pull/3254) | `fix(agent): prefer verbatim model matches over provider-alias splits when resolving refs` | Core Agent / Model Resolution | **Stability fix**: Prevents incorrect model selection when a provider-alias split accidentally matches an earlier entry in `model_list`. |
| [#3228](https://github.com/sipeed/picoclaw/pull/3228) | `fix(anthropic-messages): send SystemParts as system blocks with cache_control` | Provider / Anthropic | **Cost/performance enablement**: Unlocks Anthropic prompt caching for the `anthropic_messages` provider by preserving per-block `cache_control` markers. |

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) **CLOSED** — *Use vodozemac instead of libolm* | 10 comments, 2 👍, **high priority**, `help wanted` | **Security & maintenance**: libolm is unmaintained; migration to vodozemac (official replacement) is a security prerequisite. Closed but implementation likely pending. |
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) **OPEN** — *Android service launch failure & path config* | 5 comments, 0 👍, `stale` | **Mobile reliability**: Service fails to start on Android; users cannot change storage path. Blocks mobile deployment. |
| [#3280](https://github.com/sipeed/picoclaw/pull/3280) **OPEN** — *Fix browser OAuth login for real-world callbacks* | 0 comments, `stale` | **Auth robustness**: OAuth flow breaks in headless/remote setups after user consent — authorization codes are burned, forcing full restart. Critical for CI/CD and remote servers. |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) **OPEN** — *Add native Exa web search provider* | 0 comments | **Tooling expansion**: First-class Exa integration (`tools.web`/`web_search`) with highlights, date filters, and API key auth. Signals demand for better web search quality. |

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | [#3182](https://github.com/sipeed/picoclaw/issues/3182) Android service won’t start; path setting ignored | **OPEN** (stale) | No |
| **High** | [#3300](https://github.com/sipeed/picoclaw/issues/3300) Missing `read_file` tool causes conversation deadlock when `AGENT.md` mandates reading `RULES.md` | **CLOSED** (same day) | Likely fixed in core tooling; no linked PR |
| **Medium** | [#3255](https://github.com/sipeed/picoclaw/issues/3255) DingTalk chat list preview shows static “PicoClaw” instead of message content | **CLOSED** | Fixed via PR (not in today’s merged set; likely earlier) |
| **Medium** | [#3279](https://github.com/sipeed/picoclaw/pull/3279) Tool-call format leaks into LLM summaries via seahorse `partsToReadableContent` | **OPEN** (stale) | **PR #3279** open, awaiting review |
| **Low** | [#3280](https://github.com/sipeed/picoclaw/pull/3280) OAuth callback fails in headless/remote environments | **OPEN** (stale) | **PR #3280** open, awaiting review |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Native Exa web search provider** | [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) | **High** — Complete implementation, follows existing provider patterns. |
| **Configurable default model fallback chain** | [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) | **Medium** — UI + backend work done; stale 28 days, needs rebase/review. |
| **Anthropic prompt cache token metrics** | [PR #3251](https://github.com/sipeed/picoclaw/pull/3251) | **Medium** — Observability improvement; low risk, stale 17 days. |
| **Installation scripts moved to main repo** | [PR #1951](https://github.com/sipeed/picoclaw/pull/1951) | **Low** — Open since March; housekeeping, blocked on docs sync. |
| **Project description update (parallelization)** | [PR #3259](https://github.com/sipeed/picoclaw/pull/3259) | **Low** — Docs-only, trivial. |

## 7. User Feedback Summary
- **Android users blocked**: Service startup failure + immutable storage path make mobile unusable ([#3182](https://github.com/sipeed/picoclaw/issues/3182)).
- **DingTalk preview broken**: List view shows bot name, not content — confusing for enterprise users ([#3255](https://github.com/sipeed/picoclaw/issues/3255), now fixed).
- **OAuth pain in automation**: Headless/remote login burns auth codes, forcing manual restart ([#3280](https://github.com/sipeed/picoclaw/pull/3280)).
- **Model selection surprises**: Provider-alias splitting caused wrong model resolution ([#3254](https://github.com/sipeed/picoclaw/pull/3254), fixed).
- **Cost anxiety on Anthropic**: No visibility into prompt cache effectiveness ([#3251](https://github.com/sipeed/picoclaw/pull/3251), [#3228](https://github.com/sipeed/picoclaw/pull/3228)).

## 8. Backlog Watch — Stale Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [PR #1951](https://github.com/sipeed/picoclaw/pull/1951) Move installation scripts from docs repo | **128 days** | Reduces repo fragmentation; blocks streamlined onboarding. |
| [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) Configurable default model fallback chain | **28 days** | UX improvement for multi-model workflows; ready but stalled. |
| [PR #3280](https://github.com/sipeed/picoclaw/pull/3280) OAuth callback robustness | **8 days** | Critical for CI/CD, remote servers, headless deployments. |
| [PR #3279](https://github.com/sipeed/picoclaw/pull/3279) Tool-call leakage in seahorse summaries | **8 days** | Data integrity: raw tool format pollutes LLM context/summaries. |
| [PR #3251](https://github.com/sipeed/picoclaw/pull/3251) Anthropic cache token metrics | **17 days** | Cost observability; low-risk, high-value for Anthropic users. |
| [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) vodozemac migration (closed but `help wanted`) | **50 days** | Security debt; libolm unmaintained. Implementation still open. |

---

**Health Indicators**: 🟢 Active merging (3 PRs today) | 🟡 Stale PR backlog (6 >7 days) | 🔴 Android blocker open 33 days | 🔵 Security migration tracked but not done  
**Recommended Maintainer Actions**: 1) Triage Android issue (#3182), 2) Review/auth-merge OAuth fix (#3280), 3) Batch-review stale provider/core PRs (#3200, #3251, #3279), 4) Assign vodozemac migration (#3088).

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-29

## 1. Today's Overview

NanoClaw shows **high development velocity** with 11 PRs updated in the last 24 hours (7 open, 4 merged/closed), indicating active maintenance and feature work. The project is in a **stabilization and multi-provider expansion phase** — recent merges address container runtime hardening, upstream merge safety, and OAuth provider additions, while open PRs focus on dual-engine quota fallback, webhook configurability, and approval card UX. No new releases were cut today, but the merged PRs suggest a patch release candidate is forming. Community engagement is moderate: one feature request (GitHub Copilot SDK backend) has 8 👍 and 3 comments, signaling strong interest in provider diversity.

---

## 2. Releases

**No new releases today.** The last release is not listed in the data. Given the volume of merged fixes (container init, update-nanoclaw guard, MiniMax OAuth, audit/smoke test), a patch release (e.g., `vX.Y.Z+1`) would be appropriate to ship these stability improvements.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3060](https://github.com/nanocoai/nanoclaw/pull/3060) | **Fix** | Adds `--init` to agent container spawn args so PID 1 reaps zombie processes; corrects docs claim | **High** — prevents zombie accumulation in long-running agent containers |
| [#1255](https://github.com/nanocoai/nanoclaw/pull/1255) | **Feature** | Adds MiniMax OAuth (Coding Plan) as model provider with device-code PKCE flow, token polling, auto-refresh | **High** — expands provider ecosystem; zero Anthropic dependency path |
| [#2197](https://github.com/nanocoai/nanoclaw/pull/2197) | **Fix** | Guards `/update-nanoclaw` merge state to prevent silent single-parent commits on customized forks | **High** — protects fork integrity during upstream sync |
| [#1136](https://github.com/nanocoai/nanoclaw/pull/1136) | **Feature** | Adds auto-merge audit + container smoke test to `/update-nanoclaw` skill | **High** — catches silent code drops during upstream merges (secrets incident precedent) |

**Net progress:** Container runtime hardening, upstream sync safety, and a new OAuth provider landed. The codebase is more robust for production deployments and fork maintainers.

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [Issue #1350](https://github.com/nanocoai/nanoclaw/issues/1350) — *Add GitHub Copilot SDK as alternative AI backend* | 8 👍, 3 comments, open since 2026-03-22, updated today | **Provider diversification** — users want to avoid Anthropic lock-in; Copilot SDK offers GPT-4.1 class models via existing GitHub subscription |
| [PR #3057](https://github.com/nanocoai/nanoclaw/pull/3057) — *Dual-engine quota fallback: Claude→Codex overflow, handoff recaps, proactive quota warning* | Open since 2026-07-15, battle-tested in production since 2026-07-06 on live WhatsApp deployment | **Production resilience** — automatic failover on quota exhaustion, per-agent-group config, migration included; addresses real cost/availability pain |

**Signal:** The community is pushing hard for **multi-provider routing with automatic fallback** — not just choice, but *operational continuity* when primary providers hit limits.

---

## 5. Bugs & Stability — Reported/Fixed Today

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **High** | Zombie processes in agent containers (PID 1 not reaping) | **Fixed** | [#3060](https://github.com/nanocoai/nanoclaw/pull/3060) merged |
| **High** | Silent single-parent commits during `/update-nanoclaw` on forks | **Fixed** | [#2197](https://github.com/nanocoai/nanoclaw/pull/2197) merged |
| **High** | Auto-merge deleting code without conflicts during upstream sync | **Fixed** | [#1136](https://github.com/nanocoai/nanoclaw/pull/1136) merged |
| **Medium** | `WEBHOOK_PORT` from `.env` not honored | **Fix open** | [#3148](https://github.com/nanoclaw/nanoclaw/pull/3148) open |
| **Medium** | Destination reply context leaking across agents | **Fix open** | [#3147](https://github.com/nanoclaw/nanoclaw/pull/3147) open |
| **Medium** | Missing channel destinations for existing wirings (DB gap) | **Fix open** | [#3145](https://github.com/nanoclaw/nanoclaw/pull/3145) open |
| **Low** | Dev scripts rotted against current architecture (`test-v2-host.ts`, etc.) | **Fix open** | [#3146](https://github.com/nanoclaw/nanoclaw/pull/3146) open |
| **Low** | Resolved approval cards losing title/request details | **Fix open** | [#3143](https://github.com/nanoclaw/nanoclaw/pull/3143) open |

**Stability note:** All high-severity bugs have merged fixes. Remaining open PRs are medium/low severity with fixes in review.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|-----------------------------|-----------|
| **GitHub Copilot SDK backend** | [Issue #1350](https://github.com/nanocoai/nanoclaw/issues/1350) (8 👍) | **High** — strong community signal, aligns with MiniMax OAuth addition | Provider pluralism is a clear theme; Copilot SDK is a natural next provider after MiniMax |
| **Dual-engine quota fallback (Claude→Codex)** | [PR #3057](https://github.com/nanocoai/nanoclaw/pull/3057) | **High** — production-tested, migration included, solves real pain | Already running live; just needs review/merge |
| **Configurable webhook bind address (`WEBHOOK_HOST`)** | [PR #3144](https://github.com/nanoclaw/nanoclaw/pull/3144) | **Medium** — simple, backward-compatible, security-relevant | Defaults to `0.0.0.0`; allows locking down to localhost/VPN |
| **Preserve resolved approval card content** | [PR #3143](https://github.com/nanoclaw/nanoclaw/pull/3143) | **Medium** — UX polish for terminal/history view | Improves auditability of human-in-the-loop decisions |

**Prediction:** Next version will likely include **Copilot SDK backend** (or at least a spike PR), **dual-engine fallback**, and the webhook host/port configurability. The MiniMax OAuth merge proves the project accepts new provider integrations rapidly.

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|------------------------|----------|-----------|
| **Anthropic lock-in / cost / quota limits** | Issue #1350 (8 👍), PR #3057 (prod-tested fallback) | 😟 Frustrated → 😐 Hopeful |
| **Fork sync breaking customizations silently** | PR #2197, PR #1136 (secrets incident) | 😨 Fear → ✅ Relieved (fixes merged) |
| **Container instability (zombies, spawn issues)** | PR #3060, PR #3146 (dev script rot) | 😟 Annoyed → ✅ Fixing |
| **Webhook deployment rigidity (hardcoded 0.0.0.0, port)** | PR #3144, PR #3148 | 😐 Neutral → 😊 Improving |
| **Approval card history loss** | PR #3143 | 😐 Minor UX gap → ✅ Fix in review |

**Overall:** Users are **power users running production workloads** (WhatsApp deployment mentioned). They value **operational safety** (merge guards, smoke tests, quota fallback) and **provider choice**. Satisfaction trending up as high-impact fixes land.

---

## 8. Backlog Watch — Stalled / Needing Attention

| Item | Age | Why It Matters | Blocker? |
|------|-----|----------------|----------|
| [Issue #1350](https://github.com/nanoclaw/nanoclaw/issues/1350) — GitHub Copilot SDK backend | 4 months (opened 2026-03-22) | High community demand (8 👍); enables zero-Anthropic path | No PR yet — needs champion or maintainer bandwidth |
| [PR #3057](https://github.com/nanoclaw/nanoclaw/pull/3057) — Dual-engine quota fallback | 14 days open | Production-validated; migration 017 included; solves top pain point | Large diff — needs thorough review; may be stalled on bandwidth |
| [PR #1255](https://github.com/nanoclaw/nanoclaw/pull/1255) — MiniMax OAuth | 4 months (opened 2026-03-18) | **Just merged today** — was long-stalled provider addition | ✅ Resolved |
| [PR #3146](https://github.com/nanoclaw/nanoclaw/pull/3146) — Dev script repair | 1 day open | Low visibility but blocks contributor onboarding/testing | Small, easy win — should merge quickly |

**Maintainer action items:**
1. **Review PR #3057** — highest ROI feature in queue (prod-tested, solves quota pain)
2. **Triangulate Issue #1350** — decide if Copilot SDK is in scope for next minor; if yes, assign or accept community PR
3. **Merge PR #3146** — quick contributor-experience win

---

## Health Indicators

| Metric | Status |
|--------|--------|
| **Merge velocity** | 🟢 High (4 merges in 24h) |
| **Issue responsiveness** | 🟡 Moderate (1 active issue, 4mo old but updated today) |
| **PR review throughput** | 🟢 Good (7 open, 4 merged — several opened today) |
| **Production hardening** | 🟢 Strong (zombie fix, merge guards, smoke test, quota fallback in flight) |
| **Provider ecosystem growth** | 🟢 Accelerating (MiniMax merged, Copilot requested, Codex fallback in PR) |

**Bottom line:** NanoClaw is **actively maintained, production-hardening, and expanding its provider portfolio**. The next release should be a stability + multi-provider milestone.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-29

## 1. Today's Overview
IronClaw shows **very high development velocity** with 100 total issue/PR updates in the last 24 hours (50 issues, 50 PRs). The project is in a **major refactoring and hardening phase** — multiple "epic" issues are driving cross-cutting work on error recoverability, hermetic testing, extension governance, messaging standardization, and the Reborn architecture. No releases were cut today, but 15 PRs were merged/closed, indicating steady integration. The workload skews heavily toward **platform reliability, security hardening, and test infrastructure** rather than user-facing features.

## 2. Releases
**No new releases today.** The last release activity appears in PR #5598 (created 2026-07-03, still open), which proposes breaking changes to `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0). This release PR has been open for 26 days, suggesting the release is blocked on the current epic work.

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Title | Scope | Status |
|----|-------|-------|--------|
| [#6816](https://github.com/nearai/ironclaw/pull/6816) | Centralize channel ingress & scope manifest commands (Slack/Telegram) | Channels, Security | **Closed** |
| [#6729](https://github.com/nearai/ironclaw/pull/6729) | Normalize extension installation persistence into lifecycle records | Extensions, Data Model | **Closed** |
| [#6730](https://github.com/nearai/ironclaw/pull/6730) | Correct memory provider lifecycle capabilities & tool registration | Memory, Providers | **Closed** |
| [#6518](https://github.com/nearai/ironclaw/pull/6518) | Enforce release gates & publish critical-journey health | CI/CD, Release Engineering | **Closed** |
| [#6517](https://github.com/nearai/ironclaw/pull/6517) | Map critical journeys to evidence tiers & close coverage gaps | Testing, Quality | **Closed** |
| [#6516](https://github.com/nearai/ironclaw/pull/6516) | Define canonical critical user journey catalog & ownership | Testing, Process | **Closed** |
| [#6512](https://github.com/nearai/ironclaw/pull/6512) | Define extension policy precedence & locked-user UX | Extensions, RBAC | **Closed** |
| [#6511](https://github.com/nearai/ironclaw/pull/6511) | Build tenant extension publication & governance API/UI | Extensions, Multi-tenancy | **Closed** |
| [#6509](https://github.com/nearai/ironclaw/pull/6509) | Bind per-user credentials to tenant-managed extension config | Extensions, Auth | **Closed** |
| [#6508](https://github.com/nearai/ironclaw/pull/6508) | Synchronize provider events & canonical conversation history | Channels, Conversation Model | **Closed** |
| [#6507](https://github.com/nearai/ironclaw/pull/6507) | Surface channel provenance & external thread context in WebUI | WebUI, Channels | **Closed** |
| [#6506](https://github.com/nearai/ironclaw/pull/6506) | Define canonical external-conversation binding contract | Channels, Data Model | **Closed** |
| [#6502](https://github.com/nearai/ironclaw/pull/6502) | Migrate Slack messaging tools to shared operation profiles | Slack, Messaging | **Closed** |
| [#6501](https://github.com/nearai/ironclaw/pull/6501) | Add manifest opt-in & conformance for messaging operations | Extensions, Messaging | **Closed** |
| [#6500](https://github.com/nearai/ironclaw/pull/6500) | Define provider-neutral messaging operation profiles & schemas | Messaging, Architecture | **Closed** |
| [#6497](https://github.com/nearai/ironclaw/pull/6497) | Add Telegram lifecycle & live-canary release gate | Telegram, Testing | **Closed** |

**Summary**: A **massive batch of 16 PRs closed today**, nearly all tied to four parent epics (#6487, #6486, #6485, #6484, #6483, #6482, #6481). The work establishes:
- **Critical journey testing framework** (release gates, evidence tiers, catalog)
- **Extension governance** (policy precedence, tenant publication, credential binding)
- **Channel/conversation unification** (canonical binding, history sync, WebUI provenance)
- **Standardized messaging operations** (provider-neutral profiles, Slack migration, manifest conformance)
- **Telegram release gate** (live-canary for full lifecycle)

## 4. Community Hot Topics — Most Active Issues/PRs

### Top Issues by Comment Count
| Issue | Comments | Topic | Underlying Need |
|-------|----------|-------|-----------------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | 15 | **Error-recoverability endgame** — model recovers from 100% of errors | **Production reliability**: Every mid-run error must survive, be visible to model with cause+remedy, and give model a turn to act. Multiple workstreams (WS1, WS5, WS9) active. |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | 3 | **Hermetic capability & journey testing platform** | **Test coverage accountability**: Mechanically answer "does every capability/journey have deterministic coverage?" 9 workstreams, several PRs closing today (#6823, #6825, #6828). |
| [#6820](https://github.com/nearai/ironclaw/issues/6820) | 2 | **IronHub: agent reaches unsigned catalog URL** | **Trust boundary**: Discovery fallback leaks unsigned URL — security regression in PR #6780 preview. |
| [#6814](https://github.com/nearai/ironclaw/issues/6814) | 1 | **Third-party skills trip prompt denylist ("API key")** | **Developer experience**: Certified skills exempted (#5258) but third-party skills still blocked by "API key" in description — blocks skill authors. |
| [#6810](https://github.com/nearai/ironclaw/issues/6810) | 1 | **Progressive tool disclosure default-on** | **Token budget / UX**: Large capability surfaces must stay within prompt budget without degrading small-surface usage. |

### Top PRs by Activity (All Open)
| PR | Scope | Significance |
|----|-------|--------------|
| [#6817](https://github.com/nearai/ironclaw/pull/6817) | **Security**: Fix 4 TOCTOU escapes in local filesystem (fd-rooted traversal) | Critical containment fix — pathname check + separate syscall race |
| [#6691](https://github.com/nearai/ironclaw/pull/6691) | **Architecture**: Refactor composition assembly (-9,421 lines) | Massive simplification of Reborn composition factory/runtime |
| [#5659](https://github.com/nearai/ironclaw/pull/5659) | **Security**: Tool-disclosure surface narrowed (3 leak vectors) | Production behavior change — bridge meta-tools, allow-set fixes |
| [#6740](https://github.com/nearai/ironclaw/pull/6740) | **Sandbox**: TLS termination seam for egress proxy | Enables W6 credential swap, unblocks sandbox-docker-tests |
| [#6746](https://github.com/nearai/ironclaw/pull/6746) | **Sandbox**: Docker-connect retry, egress allowlist, shell limits | Slice 1 of 4 — unwires 6 modules from sandbox branch |
| [#6780](https://github.com/nearai/ironclaw/pull/6780) | **IronHub**: Deep-link register/install + private manifest | Stacked on #6754 — re-port of #5409 onto new extension host |
| [#6794](https://github.com/nearai/ironclaw/pull/6794) | **Testing**: Property boundaries & generated lifecycle (fuzzing) | Replaces 6-PR stack; fuzzes Retry-After, auth, rate-limit boundaries |
| [#6696](https://github.com/nearai/ironclaw/pull/6696) | **DB/Architecture**: Collapse lifecycle state into process journal | Row-native journal, transactional cursors, lease-recovery — **DB MIGRATION** |
| [#6831](https://github.com/nearai/ironclaw/pull/6831) | **Messaging**: Standardized framework (host-owned ops, canonical contracts) | 16 core + 13 reserved ops, 11-code error taxonomy, enforced contracts |
| [#6836](https://github.com/nearai/ironclaw/pull/6836) | **WebUI**: Extract design system to `@ironclaw/ui` workspace package | Supersedes #5563, #6830 — clean re-derivation from main |

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P0 / Critical** | [#6815](https://github.com/nearai/ironclaw/issues/6815) | **Turn-state store latches degraded forever after one write-behind flush failure** — libSQL QA instance served 503 for 30+ min until manual restart | No PR yet |
| **P0 / Critical** | [#6805](https://github.com/nearai/ironclaw/issues/6805) | **Instance intermittently returns service_unavailable (~every 30 min)** on Railway QA instance — affects all functions | No PR yet |
| **P1 / High** | [#6835](https://github.com/nearai/ironclaw/issues/6835) | **MCP auth failures never raise re-auth gate** — classified as `Client` not `AuthRequired`; WASM vs MCP lane divergence | No PR yet |
| **P1 / High** | [#6820](https://github.com/nearai/ironclaw/issues/6820) | **IronHub: agent reaches unsigned catalog URL** when discovery disappoints — trust-boundary issue in PR #6780 preview | Related to #6780 |
| **P1 / High** | [#6821](https://github.com/nearai/ironclaw/issues/6821) | **IronHub search: free-text matches read as complete catalog** — agent reports 3 tools vs 18 in signed catalog; lists 21 skills with 20 non-catalog | Related to #6780 |
| **P2 / Medium** | [#6814](https://github.com/nearai/ironclaw/issues/6814) | **Third-party skills trip prompt denylist** on "API key" in description — kills every run on 1.0.0 | No PR yet |
| **P2 / Medium** | [#6833](https://github.com/nearai/ironclaw/issues/6833) | **Notion tool fails to install** — hangs without clear error | No PR yet |
| **P2 / Medium** | [#6834](https://github.com/nearai/ironclaw/issues/6834) | **Slack setup fails** (near.foundation account) — connection flow incomplete | No PR yet |
| **P2 / Medium** | [#6829](https://github.com/nearai/ironclaw/issues/6829) | **Telegram forum-topic delivery has no whole-path coverage** — reply in forum topic must carry `message_thread_id` | No PR yet |
| **P2 / Medium** | [#6807](https://github.com/nearai/ironclaw/issues/6807) | **NetworkTargetPattern: validators not enforced at type level** — 92 construction sites bypass validators | No PR yet |
| **P2 / Medium** | [#6806](https://github.com/nearai/ironclaw/issues/6806) | **Automations don't show in web chat** — user must navigate to Automations page | No PR yet |

**Stability Signal**: Two **P0 incidents on the QA instance** (turn-state latch, periodic 503s) suggest infrastructure/runtime fragility under load. The turn-state issue (#6815) is particularly concerning — a single write-behind failure permanently degrades the instance until restart.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Error recoverability contract** (100% model recovery) | Epic #6284, WS1/WS5/WS9 PRs (#6824, #6826, #6832) | **High** — active workstreams, multiple PRs |
| **Hermetic journey testing platform** | Epic #6524, 9 workstreams, 3 PRs closed today (#6823, #6825, #6828) | **High** — release gates now enforceable (#6518 closed) |
| **Standardized messaging framework** (host-owned ops, canonical contracts) | PR #6831 (XL), epic #6484 | **High** — large PR open, foundational for Slack/Telegram/future |
| **Progressive tool disclosure default-on** | Issue #6810, PR #5659 (security narrowing) | **Medium** — security work done, UX tuning needed |
| **IronHub deep-link register/install + private manifest** | PR #6780 (stacked on #6754) | **Medium** — stacked PRs, depends on #6754 merge |
| **Sandbox egress proxy TLS termination** | PR #6740, #6746 (4 slices) | **Medium** — unblocks W6 credential swap, but 3 more slices |
| **WebUI design system extraction** (`@ironclaw/ui`) | PR #6836 | **Medium** — supersedes prior attempts, clean re-derivation |
| **Growth/usage stats logging** (zero `info!` calls in business logic) | Issue #6837 (created today) | **Low** — newly filed, no implementation yet |

**Predicted Next Version Focus**: The **error recoverability epic (#6284)** and **testing platform (#6524)** are closest to completion with multiple workstream PRs merged/in-review. The **messaging standardization (#6831)** and **IronHub re-port (#6754/#6780)** are large but actively developed. A release will likely wait for the turning of these epics.

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Third-party skill authoring blocked** | #6814: "API key" in description kills every run on 1.0.0 | Skill ecosystem friction — certified skills work, but community skills broken |
| **Notion integration unusable** | #6833: Install fails/hangs without clear error | Popular integration broken |
| **Slack setup broken for real accounts** | #6834: near.foundation account fails | Core channel integration unreliable |
| **Automations invisible in chat** | #6806: Must navigate to separate page to see results | Poor UX for automation users |
| **Instance instability** | #6805: 503 every ~30 min on Railway QA | Erodes trust in hosted offering |
| **IronHub discovery misleading** | #6821: Shows 3 tools vs 18 in catalog; 21 skills with 20 fake | Agent gives wrong answers about capabilities |
| **Telegram forum topics misrouted** | #6829: No whole-path coverage for `message_thread_id` | Messages land in wrong place (supergroup vs topic) |

**Satisfaction Signal**: Users hitting **multiple integration failures** (Notion, Slack, IronHub, Telegram) on basic setup flows. The "bug_bash" labels on #6805/#6806 suggest a focused testing effort surfacing these. The third-party skill denylist (#6814) is a **regression from 1.0.0** that directly blocks community extens

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-29

## 1. Today's Overview
LobsterAI shows **high maintenance velocity** with 6 PRs merged/closed in the last 24 hours and 4 active issues updated. The merged PRs cluster around **installer hardening, runtime safety gates, and a new isolated side-chat feature (`/btw`)** — indicating a focus on Windows delivery reliability and UX experimentation. No new release was cut, suggesting these changes are accumulating for a near-term patch. Community engagement remains low (zero reactions/comments on most items), but two stale issues (#1236, #2071) were bumped, hinting at triage activity.

## 2. Releases
**None** — No new versions published today. The merged PRs (#2402, #2400, #2399, #2398, #2397) are likely staging for a `2026.7.x` patch.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2402](https://github.com/netease-youdao/LobsterAI/pull/2402) | `build`, `docs`, `main` | **Windows installer**: reject HTTP redirects instead of trusting `response.url` — prevents supply-chain redirect attacks during update. | 🔒 Security hardening |
| [#2400](https://github.com/netease-youdao/LobsterAI/pull/2400) | `build`, `docs`, `main`, `openclaw` | **Runtime/config safety-contract gate**: blocks bundled OpenClaw from running without LobsterAI’s managed run-safety policy; retires `prompt-exposure-budget` as terminal kind. | 🛡️ Architecture guardrail — prevents token-burn misfires |
| [#2399](https://github.com/netease-youdao/LobsterAI/pull/2399) | `renderer` | **Hide “Sites” nav entry** outside test mode — cleans production UI. | 🧹 UI polish |
| [#2398](https://github.com/netease-youdao/LobsterAI/pull/2398) | `platform: windows`, `installer` | **Skills backup outcome driven by helper exit codes** (not stdout string match) — fixes false “legacy-restore-backup-missing” degraded state. | 🐛 Installer reliability |
| [#2397](https://github.com/netease-youdao/LobsterAI/pull/2397) | `renderer`, `docs`, `main`, `openclaw`, `cowork` | **Isolated `/btw` side chat**: editable floating panel (drag, 8-dir resize, follow-up), history isolated from main conversation, routed via OpenClaw utility stream. | ✨ New UX primitive for “side-thinking” |

**Net signal**: The team is hardening the Windows delivery pipeline while shipping a novel **isolated side-chat** paradigm — a differentiator for multi-threaded assistant workflows.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#2401](https://github.com/netease-youdao/LobsterAI/issues/2401) — *skill技能* | 1 comment, 0 👍 | **Clarity on skill licensing**: User asks if PDF/DOCS/PPTX/XLSX skills use Anthropic’s official implementation and whether they’re commercially usable. Indicates **enterprise adoption blockers** around IP/licensing. |
| [#2396](https://github.com/netease-youdao/LobsterAI/issues/2396) — *exec tool default shell = PowerShell 5.1 on Windows* | 0 comments, 0 👍 | **Cross-shell compatibility**: Linux commands / inline scripts (`node -e`, `pwsh -Command`) silently fail because exec defaults to legacy PS 5.1. High-impact for **polyglot developer workflows** on Windows. |
| [#1236](https://github.com/netease-youdao/LobsterAI/issues/1236) — *Plugin ID mismatch warning (stale)* | 1 comment, 0 👍 | **Config hygiene**: `mcp-bridge` entry key ≠ manifest ID → startup warning every restart. Low-severity but noisy; shows **plugin config validation gaps**. |
| [#1233](https://github.com/netease-youdao/LobsterAI/pull/1233) — *Model provider official links & API Key guides (stale PR)* | 0 comments, 0 👍 | **Onboarding UX**: Adds clickable vendor links + “Get API Key” shortcuts with i18n. Merged PRs today didn’t include this — still pending review. |

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Fix PR? | Notes |
|----------|-------|---------|-------|
| **High** | [#2396](https://github.com/netease-youdao/LobsterAI/issues/2396) — exec tool defaults to PowerShell 5.1, breaking Linux commands & special-char inline scripts on Windows | ❌ No PR yet | Silent failure → data loss risk; affects all Windows users running non-PS commands. |
| **Medium** | [#1236](https://github.com/netease-youdao/LobsterAI/issues/1236) — Plugin ID mismatch warning on every gateway restart | ❌ No PR yet | Cosmetic but erodes trust in logs; simple manifest/entry alignment fix. |
| **Medium** | [#2071](https://github.com/netease-youdao/LobsterAI/issues/2071) — Scheduled task creation error (v2026.5.27) | ❌ No PR yet | Screenshot attached; reproduction unclear — needs triage. |
| **Low** | [#2398](https://github.com/netease-youdao/LobsterAI/pull/2398) — Skills backup misclassified due to trailing CRLF | ✅ **Merged** | Fixed in today’s installer PR. |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Isolated `/btw` side chat** | [#2397](https://github.com/netease-youdao/LobsterAI/pull/2397) (merged) | ✅ **Already in** — flagship UX addition. |
| **Model provider links & API Key guides** | [#1233](https://github.com/netease-youdao/LobsterAI/pull/1233) (stale PR) | 🟡 High — trivial UI win, i18n ready, only needs review. |
| **Skill licensing clarity** | [#2401](https://github.com/netease-youdao/LobsterAI/issues/2401) | 🟡 Medium — requires legal/docs update, not code. |
| **Exec tool shell auto-detect / config** | [#2396](https://github.com/netease-youdao/LobsterAI/issues/2396) | 🟡 Medium — high user pain, but design decision needed (default to pwsh? user setting?). |
| **Plugin config validation at startup** | [#1236](https://github.com/netease-youdao/LobsterAI/issues/1236) | 🟢 Low effort — could ship as quick patch. |

## 7. User Feedback Summary
- **Windows power users** hit silent exec failures (#2396) — “commands just don’t run, no error.”
- **Enterprise evaluators** blocked by **skill licensing uncertainty** (#2401) — need explicit commercial-use statement.
- **Plugin developers** annoyed by **noisy startup warnings** (#1236) — “every restart spams logs.”
- **No positive feedback signals** (zero 👍/comments on merged PRs) — community visibility low; consider changelog highlights or Discord announcements.

## 8. Backlog Watch (Stale / Needs Maintainer Attention)
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#1233](https://github.com/netease-youdao/LobsterAI/pull/1233) — Model provider links & API Key guide | 120 days | Onboarding polish, i18n done, merges clean, closes #731 | **Review & merge** — 30-min win. |
| [#1236](https://github.com/netease-youdao/LobsterAI/issues/1236) — Plugin ID mismatch | 120 days | Config hygiene, easy fix | Align `entry key` ↔ `manifest id`; add startup validation. |
| [#2071](https://github.com/netease-youdao/LobsterAI/issues/2071) — Scheduled task error | 62 days | User-reported regression, screenshot provided | Triage: reproduce on v2026.5.27 → label or close. |
| [#2401](https://github.com/netease-youdao/LobsterAI/issues/2401) — Skill licensing | 1 day | Enterprise adoption blocker | Add `SKILLS_LICENSE.md` or FAQ entry; ping legal. |

---
**Health Score**: 🟢 **Good** — High merge throughput, security hardening, innovative UX shipped.  
**Risk**: Windows exec regression (#2396) + licensing silence (#2401) could stall Windows/enterprise adoption.  
**Next Watch**: 24–48h for `#2396` fix PR and `#1233` merge; expect `2026.7.x` release within week.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-29

## 1. Today's Overview
Moltis shows **high development velocity** with 8 active PRs updated in the last 24 hours and 1 bug fix merged. The project is actively expanding its integration surface (ACP, Slack, Terminal-Bench), hardening security boundaries (operator gating), and investing in observability (instrumentation, Langfuse, OTLP). No releases were cut today, but the volume of feature-complete PRs suggests a release candidate may be imminent. Community engagement remains low on public issues (0 comments/reactions), indicating development is largely internal or via private channels.

## 2. Releases
**No new releases published today.**

## 3. Project Progress — Merged/Closed PRs
| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#1172](https://github.com/moltis-org/moltis/pull/1172) | `fix(web): hide archived cron sessions by default` | Bug fix / UX | Resolves [#1111](https://github.com/moltis-org/moltis/issues/1111) — archived cron runs now hidden by default with toggle; includes Playwright regression test. |
| [#1171](https://github.com/moltis-org/moltis/pull/1171) | `Move ACP selection into the chat model picker` | UX refactor | Consolidates ACP clients into the model selector, removes legacy header selector and redundant "Built-in LLM agent" option; preserves per-session binding. |

**Net effect:** Two user-facing polish items shipped — cron hygiene and ACP discoverability.

## 4. Community Hot Topics — Most Active PRs (by recency & scope)
| PR | Area | Why It Matters |
|----|------|----------------|
| [#1166](https://github.com/moltis-org/moltis/pull/1166) | Slack integration | Per-message ack reactions, phased feedback, Block Kit rendering, reconnect supervision — addresses Slack's lack of typing indicator with robust delivery semantics. |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | Security / Channels | **Critical boundary:** separates *access* (allowlist) from *privilege* (operators list) for `/sh` and host tools across all entry points (commands, callbacks, queue replay, external API). |
| [#1169](https://github.com/moltis-org/moltis/pull/1169) | ACP / stdio | Exposes Moltis as an **ACP agent over stdio** via `moltis acp` — enables embedding in any ACP-compatible client (e.g., Claude Code, custom tooling) with full session isolation, cancellation, and streaming parity. |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | Observability | Backend-neutral instrumentation + Langfuse v4 + OTLP + user reaction feedback; captures streaming/non-streaming parity, provider failover, cache-aware tokens, reasoning traces. |
| [#1175](https://github.com/moltis-org/moltis/pull/1175) | Eval / Terminal-Bench | Adds `moltis-ctl chat`/`chat-history` over authenticated gateway RPC + Harbor/Terminal-Bench wrapper for per-task session isolation — positions Moltis as a first-class agent eval target. |

**Underlying needs:**  
- **Operational maturity** (observability, reliable notifications, reconnect handling)  
- **Security hardening** (least-privilege operator model)  
- **Ecosystem interop** (ACP, Terminal-Bench, Slack as first-class surfaces)  
- **Eval readiness** (programmatic chat control for benchmarks)

## 5. Bugs & Stability
| Issue/PR | Severity | Status | Notes |
|----------|----------|--------|-------|
| [#1111](https://github.com/moltis-org/moltis/issues/1111) / [#1172](https://github.com/moltis-org/moltis/pull/1172) | Low (UX) | **Fixed & merged** | Archiving a cron session had no visible effect; now hidden by default with toggle + regression test. |
| *No new crash/regression reports today* | — | — | All other PRs are features/refactors; no `bug` labels on open PRs. |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **ACP stdio agent** | [#1169](https://github.com/moltis-org/moltis/pull/1169) | ★★★★★ — Feature-complete, default-on command, extensive test matrix. |
| **Slack Block Kit + phased acks** | [#1166](https://github.com/moltis-org/moltis/pull/1166) | ★★★★☆ — Builds on merged #1165; polishing real-world Slack UX. |
| **Operator privilege separation** | [#1170](https://github.com/moltis-org/moltis/pull/1170) | ★★★★☆ — Security-critical; touches all command paths. |
| **Instrumentation + Langfuse/OTLP + feedback** | [#1174](https://github.com/moltis-org/moltis/pull/1174) | ★★★★☆ — Backend-neutral; enables production observability. |
| **Terminal-Bench / `moltis-ctl chat`** | [#1175](https://github.com/moltis-org/moltis/pull/1175) | ★★★☆☆ — New surface; may need more hardening before default enable. |
| **PWA push reliability** | [#1173](https://github.com/moltis-org/moltis/pull/1173) | ★★★☆☆ — Quality-of-life; privacy-safe, cross-tab deduplication. |

**Predicted next version theme:** *"Ecosystem & Observability"* — ACP stdio, Slack maturity, operator security, and instrumentation stack.

## 7. User Feedback Summary
- **No public issue comments or reactions** in the last 24h (all PRs show `Comments: undefined`, `👍: 0`).  
- **Implicit feedback** via PR scope:  
  - Slack users need **reliable "I got it" signals** without typing indicators → #1166.  
  - Self-hosters need **least-privilege operator model** → #1170.  
  - Evaluators want **programmatic chat control** for Terminal-Bench → #1175.  
  - Operators need **production-grade observability** (Langfuse, OTLP, user feedback) → #1174.  
- **Satisfaction signal:** Rapid closure of #1111 (2 weeks from report to merged fix with test) suggests responsive maintainers.

## 8. Backlog Watch — Stale or High-Impact Items Needing Attention
| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| *No issues/PRs older than 5 days in this dataset* | — | — | All tracked items are fresh (created 2026-07-24 to 2026-07-28). |
| *Historical backlog not provided* | — | — | Recommend querying `is:issue is:open sort:updated-asc` for issues >30d stale. |

**Maintainer action:** Current PR queue is healthy — 6 open PRs, all authored by core team (`penso`, `shixi-li`, `choskeli`), all updated today. Review bandwidth appears sufficient.

---

*Digest generated from GitHub data as of 2026-07-29. Links point to live GitHub items.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-07-29

## 1. Today's Overview
CoPaw (QwenPaw) shows **high development velocity** with 50 PRs and 18 issues updated in the last 24 hours. The project is in active post-2.0.1 stabilization: 14 PRs were merged/closed today addressing critical bugs (Windows installer, MCP session recovery, mission mode TypeError, plugin compatibility), while 36 PRs remain open including major features like computer-use automation, background tool offloading, and safe model discovery. No new release was cut, but version bump to `2.1.0b1` is underway. Community reports multiple regressions from 2.0.1 — particularly around session isolation, agent privacy leakage, and data corruption — indicating urgent need for a patch release.

## 2. Releases
**No new releases today.** Current stable: **QwenPaw 2.0.1 (Desktop)**. Development branch has moved to `2.1.0b1` (see PR #6532). Users on 2.0.1 should expect a patch release soon given the volume of regressions reported.

## 3. Project Progress — Merged/Closed PRs Today (14)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#6532](https://github.com/agentscope-ai/QwenPaw/pull/6532) | **Fix** | Temporarily disable max version check in plugin compat for 2.1.0b1 | Unblocks legacy plugins broken by version bump |
| [#6538](https://github.com/agentscope-ai/QwenPaw/pull/6538) | **Feature** | NocoBase sole user authority | Admin/security improvement |
| [#6330](https://github.com/agentscope-ai/QwenPaw/pull/6330) | **Feature** | Website: fix GA, improve nav/downloads UI, hardcode hero version, expand blog | Marketing/docs polish |
| [#5825](https://github.com/agentscope-ai/QwenPaw/pull/5825) | **Feature** | Add blog section to website | Content infrastructure |
| [#5940](https://github.com/agentscope-ai/QwenPaw/pull/5940) | **Feature** | Homepage refresh for QwenPaw 2.0 (Agent OS, Loop Engineering, Scroll Context, ReMe v0.4, TUI) | Major landing page update |
| [#5758](https://github.com/agentscope-ai/QwenPaw/pull/5758) | **Feature** | Blog: developer day collection + GA tracking | Community content |
| [#6212](https://github.com/agentscope-ai/QwenPaw/pull/6212) | **Fix** | Switch GA tag ID (previous 404), add Jul 17 developer day session | Analytics restoration |
| [#5914](https://github.com/agentscope-ai/QwenPaw/pull/5914) | **Feature** | Update blog contents | Content refresh |
| [#5697](https://github.com/agentscope-ai/QwenPaw/pull/5697) | **Feature** | Add blog section, refactor docs, improve SEO & navigation | Docs/site overhaul |
| [#3332](https://github.com/agentscope-ai/QwenPaw/pull/3332) | **Fix** | Website contributors style (long-open, finally closed) | UI polish |
| [#6501](https://github.com/agentscope-ai/QwenPaw/issues/6501) | **Fix** | (Issue closed) Dev install now includes `test` extra | Contributor DX |
| [#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473) | **Fix** | (Issue closed) Plugin "Agent Kanban" install failure — `qwenpaw.pawapp` module missing | Plugin ecosystem |
| [#6403](https://github.com/agentscope-ai/QwenPaw/issues/6403) | **Feature** | (Issue closed) RobotFramework syntax highlighting in Coding Mode web IDE | IDE language support |
| [#6474](https://github.com/agentscope-ai/QwenPaw/issues/6474) | **Fix** | (Issue closed) `view_video` returns success but video DataBlock dropped before LLM | Critical multimodal bug |

**Key advances:** Plugin compatibility restored for 2.1.0b1; video multimodal pipeline fixed; website/docs significantly modernized; dev environment fixed for contributors.

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Activity | Core Need |
|------|----------|-----------|
| [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461) | 👍 **2**, 2 comments | **Agent isolation / privacy** — User deployed two agents (DM bot + group bot) on same server; group users can access DM agent's memory, settings, and data. **Critical security/privacy regression**. |
| [#6509](https://github.com/agentscope-ai/QwenPaw/issues/6509) | 2 comments | **Sub-agent isolation** — Two issues: (1) Sub-agents can call each other via CLI (multi-tenant leakage), (2) Session contexts share `workspace/media` causing file collision. Requests UUID-based isolation. |
| [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | 3 comments | **MCP session recovery** — After remote MCP server restart, client reuses stale `mcp-session-id` and fails silently until manual `list mcp`. Needs automatic reconnection. |
| [#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520) | 2 comments | **`agent.json` systemic corruption** — BOM headers, missing quotes, double-encoded Chinese across 20+ fields. Complete config failure on Windows. |
| [#6534](https://github.com/agentscope-ai/QwenPaw/issues/6534) | 1 comment | **Windows installer infinite loop** — NSIS "still running" check matches installer process itself, making installation impossible on clean systems. **Release blocker**. |
| [#6151](https://github.com/agentscope-ai/QwenPaw/pull/6151) | Updated today | **Background tool offload** — Dual-deadline architecture (`offload_deadline` + `kill_deadline`) to fix cancel/hint timing bugs. Core infrastructure. |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | Updated today | **Safe model discovery** — Provider model discovery infrastructure (replaces manual model lists). First provider integrations included. |
| [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) | Updated today | **Computer-use automation** — Native desktop GUI automation (Windows/macOS) via accessibility + Tauri control mode. Major new capability. |

**Underlying themes:** 
- **Multi-tenancy/isolation failures** are the top community pain point (issues #6461, #6509, #6506)
- **2.0.1 regressions** across installer, config persistence, MCP, mission mode
- **Enterprise/deployment readiness** gaps (privacy, session management, Windows UX)

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **🔴 Critical** | [#6534](https://github.com/agentscope-ai/QwenPaw/issues/6534) | Windows NSIS installer infinite loop — matches own process, blocks all installs | ❌ No PR yet |
| **🔴 Critical** | [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461) | Agent privacy leakage — cross-agent memory/data/settings access in multi-bot deployment | ❌ No PR yet |
| **🔴 Critical** | [#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520) | `agent.json` systemic corruption (BOM, missing quotes, double-encoding) — total config loss | ❌ No PR yet |
| **🟠 High** | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | MCP client fails to auto-recover after server restart; stale session-id reused | ❌ No PR yet |
| **🟠 High** | [#6533](https://github.com/agentscope-ai/QwenPaw/issues/6533) | `/mission` command `TypeError` — `verification_instructions` kwarg missing in patched function | ✅ [#6535](https://github.com/agentscope-ai/QwenPaw/pull/6535) (CloudPaw fix) |
| **🟠 High** | [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) | Skill tags disappear on restart (regression of #3270) — saved but lost on manifest reconciliation | ❌ No PR yet |
| **🟠 High** | [#6506](https://github.com/agentscope-ai/QwenPaw/issues/6506) | Session `approval_level=OFF` not inherited by `spawn_subagent` children — workers still prompt | ❌ No PR yet |
| **🟠 High** | [#6505](https://github.com/agentscope-ai/QwenPaw/issues/6505) | Mission Mode spawns unbounded sub-sessions — no server-side iteration cap | ❌ No PR yet |
| **🟡 Medium** | [#6510](https://github.com/agentscope-ai/QwenPaw/issues/6510) | Feishu channel: Chinese paths URL-encoded → file not found | ❌ No PR yet |
| **🟡 Medium** | [#6529](https://github.com/agentscope-ai/QwenPaw/issues/6529) | ACP `new_session` response missing `models` field — clients can't discover available models | ❌ No PR yet |
| **🟡 Medium** | [#6512/13/14](https://github.com/agentscope-ai/QwenPaw/issues/6512) | `execute_shell_command` output truncation >30KB — needs auto-file-write or streaming | ❌ No PR yet (duplicate issues) |

**Stability signal:** 11 bugs reported today, 5 critical/high with no fix PRs. The 2.0.1 release has significant regression surface. A **2.0.2 patch is strongly warranted**.

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood for Next Version | Rationale |
|---------|----------|----------------------------|-----------|
| **Agent/Sub-agent complete isolation** | [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461), [#6509](https://github.com/agentscope-ai/QwenPaw/issues/6509) | **High** | Security/privacy critical; multiple users affected; blocks multi-tenant deployments |
| **MCP auto-reconnection** | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | **High** | Core integration reliability; straightforward fix (session validation + retry) |
| **Computer-use (native GUI automation)** | [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) | **High** | Large PR, active, Windows+macOS accessibility-first — flagship 2.1 feature |
| **Safe model discovery infrastructure** | [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | **High** | Foundational for provider ecosystem; reduces manual config burden |
| **Background tool offload (dual-deadline)** | [#6151](https://github.com/agentscope-ai/QwenPaw/pull/6151) | **High** | Fixes UX issues with long-running tools; architectural improvement |
| **Shell command output streaming/file fallback** | [#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512) | **Medium** | Common pain point; duplicate reports show demand |
| **ACP `models` field in `new_session`** | [#6529](https://github.com/agentscope-ai/QwenPaw/issues/6529) | **Medium** | Standard compliance for ACP clients |
| **Feishu Chinese path encoding fix** | [#6510](https://github.com/agentscope-ai/QwenPaw/issues/6510) | **Medium** | Channel-specific but high-impact for Chinese enterprise users |
| **Skill tag persistence fix** | [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) | **Medium** | Regression of previously fixed #3270; low complexity |

**Predicted 2.1.0 scope:** Computer-use, model discovery, background offload, isolation fixes. **Predicted 2.0.2 patch:** Windows installer, MCP recovery, agent isolation hotfix, config corruption, mission mode TypeError.

## 7. User Feedback Summary — Real Pain Points

| User Scenario | Pain Point | Quote/Evidence |
|---------------|------------|----------------|
| **Multi-bot server deployment** | **Cross-agent privacy violation** — Group bot users access DM bot memory, settings, data | "群成员通过@群聊中的qq机器人的方式，居然可以知道我另一个单聊中的智能体中的记忆，甚至可以用对话进行操作...造成隐私泄露" ([#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461)) |
| **Windows desktop user** | **Cannot install 2.0.1** — Installer falsely detects running app, infinite retry loop | "shows a 'QwenPaw Desktop is still running' error dialog on every launch, even when **no QwenPaw application process exists**" ([#6534](https://github.com/agentscope-ai/QwenPaw/issues/6534)) |
| **Config-heavy user (Windows)** | **Total config loss** — `agent.json` corrupted with BOM, broken quotes, double-encoding across 20+ fields | "`agent.json` suffered **systemic, distributed corruption** across ~20+ fields, causing complete system failure" ([#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520)) |
| **MCP integration user** | **Silent failure after server restart** — Must manually run `list mcp` to reconnect | "QwenPaw 仍然复用旧的 `mcp-session-id`...此后 QwenPaw 仍然复用旧的 `mcp-session-id`" ([#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524)) |
| **Mission Mode user** | **Command completely broken** — `TypeError` on every `/mission` invocation | "任意 `/mission` 命令即可触发...handler.py L260 传了 verification_instructions，但动态 patch 的函数签名没接收此参数" ([#6533](https://github.com/agentscope-ai/QwenPaw/issues/6533)) |
| **Plugin developer** | **Legacy plugins blocked by version check** — Implicit max version derivation breaks compat | "Removes the implicit upper-bound derivation...that was silently disabling legacy plugins on QwenPaw 2.0+" ([#6497](https://github.com/agentscope-ai/QwenPaw/pull/6497)) |
| **Heavy CLI user** | **Shell output truncated at ~30KB** — No way to get full logs/reports | "内容在结尾处突然中断；有时甚至触发 `Internal error`；无法获取完整报告/日志/查询结果" ([#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512)) |

**Satisfaction signal:** Strong dissatisfaction with 2.0.1 quality — multiple "regression of #XXXX" reports, privacy/security issues, and install-blocking bugs. Users expect rapid patches.

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|


</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-29

## 1. Today's Overview
ZeroClaw shows **very high development velocity** with 99 items updated in 24 hours (49 issues, 50 PRs). The project is in a heavy architectural refactoring phase: multiple RFCs for credential management, runtime-owned sessions, WASM plugin migration, and attachment unification are actively debated. Seven issues closed today, but only one PR merged—indicating review bottlenecks. No release shipped. Security and stability dominate: high-severity bugs in auth token rotation, config race conditions, daemon crashes, and over-aggressive secret redaction are all `priority:p1`/`risk:high`.

## 2. Releases
**No new releases today.** The last version remains `0.8.3` (per issue #9357).

## 3. Project Progress — Closed / Merged Today
| Item | Type | Summary | Impact |
|------|------|---------|--------|
| [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) | Issue (Closed) | Flaky `cargo test -p zeroclaw-runtime --lib` (19/20 runs fail); mutex poisoning cascades | CI reliability; test suite unblocked |
| [#9474](https://github.com/zeroclaw-labs/zeroclaw/issues/9474) | Issue (Closed) | Auth profile store fails to load—`model_provider` required, no migration from old `provider` field | **S1 workflow blocked**; migration path needed |
| [#9471](https://github.com/zeroclaw-labs/zeroclaw/issues/9471) | Issue (Closed) | Retire dormant `zeroclaw_root_crate` cron test module in `zeroclaw-runtime` | Test hygiene |
| [#9380](https://github.com/zeroclaw-labs/zeroclaw/issues/9380) | Issue (Closed) | Vendored `wit/v0` drift fails only at plugin registration | Plugin compatibility; earlier detection needed |
| [#9178](https://github.com/zeroclaw-labs/zeroclaw/issues/9178) | Issue (Closed) | ACP embedded resource blob + `deliver_file` (uri in tool result) | ACP file delivery feature complete |
| *One PR merged/closed* | PR | Not visible in top-20 list; likely a small fix | Incremental |

## 4. Community Hot Topics — Most Active Discussions
| Item | Comments | Core Need / Debate |
|------|----------|---------------------|
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | 8 | **RFC: `KeySource` trait** — classify master-key material by source/deployment form (security, config). High-risk design decision; needs maintainer review. |
| [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | 6 | **Nextcloud Talk bot API URL wrong** — 3-month-old bug; wrong endpoint construction breaks responses. |
| [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) | 6 | **Flaky runtime tests** — global mutex poisoning; closed but root cause (test isolation) may persist. |
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | 5 | **Skill-review fork panic → daemon SIGSEGV** — out-of-range slice after tool-heavy turns; `panic=abort` kills pod. |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | 4 | **RFC: Move channels/tools to runtime WASM plugins** — shrink binary, enable no-recompile extensibility. Tracker issue. |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | 3 | **RFC: Runtime-owned conversation sessions** — make runtime single owner; WS, dashboard, ACP become transport adapters. |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | 3 | **RFC: Unified attachment architecture** — single model for web chat + channel attachments. |
| [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | 3 | **RFC: Empty WhatsApp `allowed_groups` = permit-none** — current default admits all groups; security hardening. |

**Pattern**: Security hardening (secrets, auth, redaction) and architectural decoupling (runtime ownership, plugin model) dominate discussion. Maintainer review bandwidth is the bottleneck.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? | Summary |
|----------|-------|--------|---------|---------|
| **S1 (blocked)** | [#9492](https://github.com/zeroclaw-labs/zeroclaw/issues/9492) | Open | No | `auth refresh` dead-ends when external client (Codex CLI) rotated shared OpenAI OAuth refresh token. Single-use token rotation not handled. |
| **S1 (blocked)** | [#9474](https://github.com/zeroclaw-labs/zeroclaw/issues/9474) | **Closed** | Likely | Auth profile migration missing: old `provider` → new `model_provider`. |
| **S2 (degraded)** | [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | Open | No | Skill-review fork panic (slice OOB) → daemon SIGSEGV (`panic=abort`). Tool-heavy turns trigger. |
| **S2 (degraded)** | [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) | Open | No | Config flush race: `flush_config` clones under read lock, awaits save — concurrent writes overwritten. |
| **S2 (degraded)** | [#8758](https://github.com/zeroclaw-labs/zeroclaw/issues/8758) | Open | No | Agent returns `idle` after context exhaustion without terminal status; user sees silent stop. |
| **S2 (degraded)** | [#9383](https://github.com/zeroclaw-labs/zeroclaw/issues/9383) | Open | No | `npm audit` fails: 6 high/critical vulns in `@redocly/openapi-core` et al (web deps). |
| **S3 (minor)** | [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | Open | No | Nextcloud Talk bot message API URL malformed; 3 months old. |
| **S3 (minor)** | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Open | No | Empty Signal/Voice Call channel credentials → supervisor crashloop (restarts every ~2s). |
| **S3 (minor)** | [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) | Open | No | High-entropy detector redacts Solana wallet addresses on Telegram; `high_entropy_tokens=false` ignored on channel path. |
| **S3 (minor)** | [#9465](https://github.com/zeroclaw-labs/zeroclaw/issues/9465) | Open | No | Precheck-declined inbound channel message → only emoji reaction, no text feedback; user thinks agent broken. |
| **S3 (minor)** | [#8760](https://github.com/zeroclaw-labs/zeroclaw/issues/8760) | Open | No | Daemon-owned agent output leaks into daemon stdout (pollutes logs, breaks structured output). |

**Fix PRs visible today**: [#9401](https://github.com/zeroclaw-labs/zeroclaw/pull/9401) (shell cwd preservation in sandbox), [#9452](https://github.com/zeroclaw-labs/zeroclaw/pull/9452) (`ask_user` hang on wrong channel), [#9453](https://github.com/zeroclaw-labs/zeroclaw/pull/9453) (context estimation when provider omits tokens), [#9375](https://github.com/zeroclaw-labs/zeroclaw/pull/9375) (SOP fenced JSON recovery), [#9424](https://github.com/zeroclaw-labs/zeroclaw/pull/9424) (reject semantic-empty completions). Most high-sev bugs **lack linked fix PRs**.

## 6. Feature Requests & Roadmap Signals
| Signal | Issue/PR | Likelihood for Next Version |
|--------|----------|----------------------------|
| **Runtime-owned session model** | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) (RFC) | High — architectural keystone; multiple PRs ([#8985](https://github.com/zeroclaw-labs/zeroclaw/pull/8985), [#8969](https://github.com/zeroclaw-labs/zeroclaw/pull/8969), [#9205](https://github.com/zeroclaw-labs/zeroclaw/pull/9205)) build toward it |
| **WASM plugin system for channels/tools** | [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) (RFC, tracker) | Medium — large refactor; `zeroclaw-plugins` repo exists but CI gaps ([#9462](https://github.com/zeroclaw-labs/zeroclaw/issues/9462)) |
| **Unified attachment architecture** | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) (RFC) | Medium — pairs with runtime-owned sessions |
| **KeySource trait for secrets classification** | [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) (RFC) | High — security-critical; 93 `#[secret]` fields, 59 credential classes |
| **WhatsApp `allowed_groups` default deny** | [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) (RFC) | High — simple config default flip; security hardening |
| **Anthropic OAuth alias contract** | [#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) (RFC) | Medium — narrow provider-specific auth path |
| **Execution-tree iteration budget ownership** | [#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323) (RFC) | Low — deep engine change; currently all `None` |
| **ZeroCode modifier semantics decoupled from key chars** | [#9171](https://github.com/zeroclaw-labs/zeroclaw/issues/9171) | Medium — UX polish; macOS Command vs Control |
| **MCP `type:image` → vision pipeline** | [#9521](https://github.com/zeroclaw-labs/zeroclaw/issues/9521) | High — multimodal parity; new issue, clear path |

**Predicted next-version themes**: Runtime session ownership, WASM plugin foundation, secrets classification, auth migration/rotation fixes, attachment unification.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Source | User Impact |
|------------|--------|-------------|
| **Auth broken after token rotation** | [#9492](https://github.com/zeroclaw-labs/zeroclaw/issues/9492) | OpenAI/Codex users cannot refresh; requires manual re-auth |
| **Daemon crashes on skill review** | [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | Tool-heavy coding sessions hard-crash the agent (SIGSEGV) |
| **Empty channel config = crashloop** | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Dashboard users adding channels without credentials get 2s restart loops |
| **Config writes lost silently** | [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) | Concurrent config changes (UI + CLI) overwrite each other |
| **Wallet addresses redacted incorrectly** | [#9486](https://github.com/zer

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*