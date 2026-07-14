# OpenClaw Ecosystem Digest 2026-07-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-14 08:37 UTC

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

# OpenClaw Project Digest — 2026-07-14

## 1. Today's Overview
OpenClaw released **v2026.7.1** today, a major update featuring Control UI/onboarding overhauls, updated iOS/Android/macOS apps, and expanded model support (GPT-5.6, Tencent Hy3, Meta Muse Spark 1.1). The project shows **extremely high velocity**: 500 issues and 500 PRs updated in 24 hours, with 283 issues and 330 PRs still open. The backlog contains numerous regressions from the 6.x series (session corruption, message loss, provider auth failures) alongside active security/architecture work (masked secrets, memory trust tagging). Maintainer bandwidth appears strained — many high-impact bugs carry `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` labels.

---

## 2. Releases
### **v2026.7.1** — *Released today*
**Key Changes**
- **Control UI & Onboarding**: Major overhaul of the web-based control interface and first-run experience
- **Official Apps**: Significant updates to iOS, Android, and macOS native clients
- **Model/Provider Expansion**: 
  - GPT-5.6 compatibility
  - Tencent Hy3 support
  - Meta Muse Spark 1.1 support
- **Codex & Coding Agents**: Stronger Codex integration and connected coding-agent workflows

**Breaking Changes / Migration Notes**
- Legacy state migration warnings persist post-upgrade ([#90213](https://github.com/openclaw/openclaw/issues/90213)) — `openclaw doctor --fix` does not fully resolve
- `models list` crashes on Sonnet-5 cost parsing ([#106914](https://github.com/openclaw/openclaw/issues/106914)) — regression in 2026.7.1
- llama.cpp local provider fails with parser generation error ([#106779](https://github.com/openclaw/openclaw/issues/106779))
- Codex parent binding incorrectly retired when creating dashboard child ([#106778](https://github.com/openclaw/openclaw/issues/106778), fix in [#106932](https://github.com/openclaw/openclaw/pull/106932))

> **Recommendation**: Test staging upgrade thoroughly; several P0/P1 regressions reported within hours of release.

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Summary |
|----|------|---------|
| [#107298](https://github.com/openclaw/openclaw/pull/107298) | Infra | Unified JSON5 fallback parsing across config, state migration, plugin activation |
| [#107296](https://github.com/openclaw/openclaw/pull/107296) | Ollama | Trimmed 8 dead internal exports (knip ratchet) |
| [#87711](https://github.com/openclaw/openclaw/issues/87711) | Telegram | Empty assistant delivery on first turn after `/new` — **closed** (stale) |
| [#90325](https://github.com/openclaw/openclaw/issues/90325) | Matrix | Channel dispatch broken in v2026.6.1 — **closed** (stale) |
| [#87938](https://github.com/openclaw/openclaw/issues/87938) | Feishu | DM sessions rebuilt after restart — **closed** (stale) |
| [#103076](https://github.com/openclaw/openclaw/issues/103076) | Migration | Legacy-state migration sources blocking gateway startup — **closed** |
| [#92057](https://github.com/openclaw/openclaw/issues/92057) | Gateway | Multi-session/agent load performance — **closed** (stale) |
| [#92451](https://github.com/openclaw/openclaw/issues/92451) | Prompts | System prompt bloat degrading small models — **closed** (stale) |
| [#86342](https://github.com/openclaw/openclaw/issues/86342) | Agents | MissingAgentHarnessError race during plugin cache cycle — **closed** (stale) |
| [#90094](https://github.com/openclaw/openclaw/issues/90094) | Providers | openai-responses transport sends null content — **closed** (stale) |
| [#89549](https://github.com/openclaw/openclaw/issues/89549) | Sessions | sessions_spawn child fails with 401 Missing scopes — **closed** (stale) |
| [#88856](https://github.com/openclaw/openclaw/issues/88856) | Agents | Silent subagent drop (~3.8% rate) — **closed** (stale) |
| [#88230](https://github.com/openclaw/openclaw/issues/88230) | CLI | `openclaw message send` hangs after delivery — **closed** (stale) |
| [#91285](https://github.com/openclaw/openclaw/issues/91285) | Tools | Tool lifecycle/gateway recovery field report — **closed** (stale) |
| [#90665](https://github.com/openclaw/openclaw/issues/90665) | macOS | Remote Gateway UX alignment — **closed** (stale) |
| [#48229](https://github.com/openclaw/openclaw/issues/48229) | Auth | operator.write scope not granted for WS with LAN bind — **closed** (stale) |
| [#50442](https://github.com/openclaw/openclaw/issues/50442) | Backup | Large .tmp files left on timeout — **closed** |

> **Note**: Many closures are `stale` — issues auto-closed due to inactivity, not necessarily fixed. Verify fixes in linked PRs before assuming resolution.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Issue/PR | Comments | 👍 | Type | Core Need |
|----------|----------|-----|------|-----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 112 | 81 | Enhancement | **Linux/Windows native apps** — parity with macOS/iOS/Android; 2.5 years open |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | 14 | 4 | Security | **Masked secrets** — agents use API keys without seeing them; prevents leaks/injection |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 17 | 0 | Security | **Memory trust tagging** — tag memory by source (user/web/

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Ecosystem (2026-07-14)

---

## 1. Ecosystem Overview

The open-source personal AI agent landscape is **highly fragmented but vigorously active**, with 13 tracked projects showing divergent specialization strategies. **OpenClaw** operates at massive scale (500+ daily issue/PR velocity) as the de facto reference implementation, while **NanoBot**, **Hermes Agent**, **IronClaw**, **ZeroClaw**, and **CoPaw** maintain high-velocity maintenance cycles (30–50+ daily updates). A clear bifurcation exists: **platform-scale projects** (OpenClaw, IronClaw, ZeroClaw) targeting multi-channel, enterprise-ready deployments with complex runtime governance; and **focused tools** (NanoBot, PicoClaw, Moltis, NullClaw) optimizing for developer ergonomics, local-first execution, or specific channel integrations. **No consolidation trend is visible** — each project pursues distinct architectural bets (Rust vs Go vs Python, plugin models, sandboxing approaches), suggesting the ecosystem remains in a **Cambrian exploration phase** rather than convergence.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Today | Health Score* | Maturity Tier |
|---------|--------------|-----------|---------------|---------------|---------------|
| **OpenClaw** | 500 | 500 | ✅ v2026.7.1 | 🟡 Strained | Platform-scale |
| **NanoBot** | 13 | 54 | ❌ (v0.2.3 imminent) | 🟢 Excellent | High-velocity |
| **Hermes Agent** | 50 | 50 | ❌ | 🟢 High | Stabilizing |
| **PicoClaw** | 5 | 5 | ❌ | 🟡 Moderate | Maintenance |
| **NanoClaw** | — | — | — | ⚠️ Unknown | Failed digest |
| **NullClaw** | 0 | 4 | ❌ | 🟡 Yellow | Pre-merge |
| **IronClaw** | 48 | 50 | ❌ (release PR open) | 🟢 High | Transition |
| **LobsterAI** | 4 (stale-closed) | 6 | ❌ | 🟢 Steady | Hardening |
| **TinyClaw** | 0 | 0 | ❌ | ⚫ Dormant | Inactive |
| **Moltis** | ~5 | 11 (7 merged) | ❌ | 🟢 Healthy | Stabilizing |
| **CoPaw** | 50 (29 closed) | 50 (34 merged) | ✅ v2.0.0.post1 | 🟡 Strained | Post-release |
| **ZeptoClaw** | 0 | 0 | ❌ | ⚫ Dormant | Inactive |
| **ZeroClaw** | 50 | 50 | ❌ (v0.8.3 closeout) | 🟢 High | Release-closeout |

*Health Score: 🟢 = strong merge velocity + bug fix latency; 🟡 = active but maintainer bandwidth constrained; 🟡 Strained = high volume + open P0 regressions; ⚫ = no recent activity.

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Scale & Breadth**: Only project with native iOS/Android/macOS apps + web Control UI + 10+ channel integrations (Telegram, Matrix, Feishu, Slack, WhatsApp, Email, Discord, etc.)
- **Model/Provider Leadership**: First to ship GPT-5.6, Tencent Hy3, Meta Muse Spark 1.1 support; Codex/coding-agent workflows are production-grade
- **Ecosystem Gravity**: 2.5-year-old issue #75 (Linux/Windows native apps) with 81 👍 shows unmatched community pull; downstream forks (LobsterAI, CoPaw) backport fixes

### Technical Approach Differences
| Dimension | OpenClaw | Peer Norm |
|-----------|----------|-----------|
| **Language** | Go (core) + Swift/Kotlin/SwiftUI (apps) | Rust (IronClaw, NullClaw, ZeroClaw, Moltis), Python (NanoBot, Hermes), Go (PicoClaw) |
| **Runtime** | Monolithic gateway + plugin agents | Modular: Reborn (IronClaw), Wasm plugins (ZeroClaw), MCP-first (Moltis, NanoBot) |
| **Sandboxing** | Landlock/SELinux via `claw-sandbox` | Landlock (ZeroClaw, CoPaw), Docker (LobsterAI), per-agent policy (CoPaw v2) |
| **State** | Centralized session/gateway DB | Distributed: SQLite per session (NanoBot), `state.db` (Hermes), file-based (PicoClaw) |

### Community Size
- **Open issues**: 283 (vs 8–50 for active peers)
- **Open PRs**: 330 (vs 4–37)
- **Stale burden**: High — many closures are auto-stale, not fixes
- **Maintainer signal**: `clawsweeper:needs-maintainer-review` labels on P0 bugs indicate **bandwidth saturation**

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Streaming/timeout reliability** | NanoBot (#4795 fixed), OpenClaw (session corruption), CoPaw (agent loop hangs), ZeroClaw (20s model probe timeout) | Wall-clock timeouts, cancellation propagation, partial result recovery |
| **Provider parity & cost optimization** | OpenClaw (GPT-5.6, Hy3, Muse), PicoClaw (Anthropic `cache_control`, Gemini `thought_signature`), IronClaw (OpenAI-compat routing), Moltis (GPT-5.6 catalog), ZeroClaw (Responses vision) | Prompt caching, OpenAI-compat compliance, token accounting accuracy (Hermes Xiaomi fix), model routing |
| **Channel/transport hardening** | NanoBot (Telegram custom API, Feishu download), Hermes (WhatsApp video, Matrix recovery key, Telegram topic mode), ZeroClaw (Slack thread hydration, LINE parity), PicoClaw (Feishu native media, DingTalk preview), LobsterAI (Windows installer, notifications) | Multi-instance channel ownership (NanoBot #4908), thread/context hydration, native message types, signed binaries |
| **Sandboxing & supply-chain security** | ZeroClaw (Landlock `/dev/null` Fedora fix, SSRF gates), CoPaw (sandbox toggle, Windows restricted token), IronClaw (v1 retirement, skill guardrails), NullClaw (Android curl fallback), OpenClaw (masked secrets #10659, memory trust tagging #7707) | Landlock portability, per-agent policy, credential isolation, WASM plugin sandboxing |
| **Session/memory lifecycle** | NanoBot (unbounded `Session.messages` #4787), OpenClaw (legacy migration #90213, session corruption), Hermes (Dreaming #25309), ZeroClaw (conversation vs long-term memory RFC #9048), Moltis (main session undeletable #1132), CoPaw (session grouping #5903) | Bounded retention, migration tooling, background consolidation, archive/delete UX |
| **Developer experience & observability** | NanoBot (config repo #4918, output tiering #1500), IronClaw (trigger→run correlation #6076, live-test scenarios), ZeroClaw (OpenAI-compat gateway #8486, lifecycle events #8916), Hermes (cron CLI #43031, workspace switching #42525), LobsterAI (Electron 43 upgrade #1277) | Config atomicity, verbosity control, debugging correlation, runtime introspection |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architectural Signature |
|---------|---------------|-------------|-------------------------|
| **OpenClaw** | **Universal platform** — multi-device, multi-channel, multi-model | Power users, teams, downstream forks | Go gateway + native apps; centralized state; plugin agents |
| **NanoBot** | **Developer ergonomics & channel depth** — Telegram/Feishu/Slack excellence | Devs building channel bots, automation | Python async; channel-owned runtime; MCP-first tools |
| **Hermes Agent** | **Memory/skill autonomy** — background consolidation, self-improvement | Researchers, long-horizon agent users | Python; SOUL memory; skill genome; "Dreaming" cron |
| **PicoClaw** | **Lightweight Go gateway** — Matrix/Feishu/DingTalk focus, security migration | Self-hosters, Chinese enterprise channels | Go; libolm→vodozemac; provider standards compliance |
| **NullClaw** | **Minimalist Rust core** — REPL, approval flows, Matrix persistence | CLI purists, security-focused devs | Rust; zero-allocation line editor; structured approval protocol |
| **IronClaw** | **Reborn runtime transition** — v1→v2 migration, coding tool guardrails | NEAR ecosystem, coding agents | Rust workspace; Reborn LLM loop; skill disciplines (Verify Before Finish) |
| **LobsterAI** | **Desktop-first Chinese UX** — Windows hardening, Electron polish | Chinese desktop users, OpenClaw downstream | Electron + Go; OpenClaw backport discipline; signed Windows builds |
| **Moltis** | **Local-first & STT sovereignty** — FunASR, context injection, CalDAV | Privacy-focused, offline-capable deployments | Rust; MCP OAuth; `context_command` pre-turn injection |
| **CoPaw** | **Sandboxed agent safety** — v2.0 gate system, tool guards, channel rendering | Chinese devs, enterprise safety requirements | Rust + Tauri; GoalTurnGate/DoomLoopGate; split channel controls |
| **ZeroClaw** | **Multi-tenant gateway** — per-sender RBAC, plugin channels, OpenAI-compat API | Platform builders, SaaS deployments | Rust; Wasm channel plugins; `zerocode` no-code; mirror-channel plugins |
| **TinyClaw / ZeptoClaw** | (Inactive) | — | — |

---

## 6. Community Momentum & Maturity

### **Tier 1: Platform-Scale, High Volume, Maintainer-Strained**
- **OpenClaw**: 1000+ daily items; releasing monthly; P0 regressions in current release
- **ZeroClaw**: 100 daily items; v0.8.3 closeout; 3 S1 bugs landed today
- **CoPaw**: 100 daily items; v2.0.0.post1 today; critical serialization regressions
- **IronClaw**: ~100 daily items; v1 retirement in flight; breaking crate changes

### **Tier 2: High-Velocity, Healthy Merge Latency**
- **NanoBot**: 54 PRs, 36 merged; most critical bugs fixed same-day; architectural refactors in flight
- **Hermes Agent**: 50 PRs, 13 merged + 42 issues closed; desktop UX polish wave
- **Moltis**: 11 PRs, 7 merged; all critical bugs fixed today; small but responsive

### **Tier 3: Steady Maintenance, Bandwidth-Constrained**
- **NullClaw**: 4 PRs open 15–26 days; review-ready but zero merges today
- **PicoClaw**: 5 PRs open 1–35 days; security-critical #3088 stalled 35 days
- **LobsterAI**: 6 PRs merged (hardening focus); 4 stale-closed user bugs untriaged; Electron 43 PR stale 103 days

### **Tier 4: Dormant**
- **TinyClaw**, **ZeptoClaw**: No 24h activity
- **NanoClaw**: Digest generation failed

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **MCP as universal tool substrate** | NanoBot (channel-owned MCP), Moltis (MCP OAuth fixes), IronClaw (Reborn MCP tools), Hermes (MCP discovery), ZeroClaw (WasmChannel plugins) | **Invest in MCP server quality** — becoming the de facto integration layer across projects |
| **Sandboxing fragmentation → policy standardization** | CoPaw (per-agent policy tracking issue #6023), ZeroClaw (Landlock + SSRF gates), NullClaw (approval protocol), OpenClaw (masked secrets) | **Expect convergence on OPA/Rego or similar** for tool/agent policy; Landlock portability (Fedora `/dev/null`) is a real blocker |
| **Local-first / privacy sovereignty demand** | Moltis (FunASR/SenseVoice STT), PicoClaw (vodozemac E2EE), NanoBot (config repo secret safety), Hermes (Dreaming local consolidation) | **Offline-capable, audit-able pipelines** are a differentiating feature — not niche |
| **Channel parity as moat** | Every active project investing in Telegram/Slack/Feishu/DingTalk/Line native features (thread hydration, native media, forum topics, custom API bases) | **Channel SDK quality determines adoption** — projects with poor Matrix/Slack/Feishu UX lose enterprise users |
| **Session/memory lifecycle as unsolved problem** | 7/10 active projects have open issues on unbounded history, migration failures, archive/delete UX, context injection | **No standard solution exists** — opportunity for a shared library (SQLite + vector + TTL + compaction) |
| **Desktop app maturity = Electron + signed binaries** | LobsterAI (Windows signing, installer self-heal), CoPaw (Tauri, Win7 gap), OpenClaw (native Swift/Kotlin), Hermes (Desktop scroll/workspace fixes) | **Windows code-signing + installer resilience** are table stakes for non-technical users |
| **v2.0 transitions are breaking trust** | CoPaw v2.0.0 (sandbox, serialization, SSH regression), IronClaw v1 retirement, OpenClaw 6.x regressions | **Migration tooling and feature parity** must ship *with* major versions — not after |

---

## Strategic Takeaways

1. **OpenClaw remains the ecosystem anchor** but its maintainer bandwidth is a systemic risk — downstream projects (LobsterAI, CoPaw) effectively act as stabilization forks.

2. **Rust is winning the core runtime layer** (IronClaw, NullClaw, ZeroClaw, Moltis, CoPaw) while **Python owns channel/integration velocity** (NanoBot, Hermes) and **Go holds the lightweight gateway niche** (OpenClaw core, PicoClaw).

3. **The next 6 months will test whether architectural bets converge** (MCP, Landlock, Wasm plugins, OpenAI-compat gateway) or further diverge. Projects investing in **interop surfaces** (ZeroClaw's OpenAI endpoint, Moltis's MCP OAuth, NanoBot's channel-owned MCP) are best positioned for composability.

4. **Enterprise readiness signals are clear**: per-sender RBAC (ZeroClaw), signed Windows builds (LobsterAI), config secret safety (NanoBot), audit logging (Hermes), private vuln reporting (IronClaw gap). Projects lacking these will stall at team-adoption ceiling.

5. **Developer experience is the new differentiator** — REPL quality (NullClaw), context injection (Moltis), workspace switching (Hermes), session grouping (CoPaw), output tiering (NanoBot) — these UX details drive daily productivity more than raw model access.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-14

---

## 1. Today's Overview

NanoBot shows **very high development velocity** with 54 PRs updated in the last 24 hours (36 merged/closed) and 13 issues updated (10 closed). The project is in active maintenance mode with a strong focus on **stability fixes** (streaming timeouts, Windows UTF-16 handling, resource leaks), **architecture refactoring** (channel ownership, config persistence, WebUI runtime centralization), and **developer experience improvements** (documentation reorganization, test coverage expansion). No new release was cut today, but the volume of merged fixes suggests a patch release (v0.2.3+) is imminent. Community engagement remains healthy with multiple contributors addressing both long-standing bugs and new feature requests.

---

## 2. Releases

**No new releases published today.**  
The last release appears to be **v0.2.2** (from PR #4445, merged 2026-06-22). Given 36 PRs merged/closed today — including multiple P1 priority fixes — a **v0.2.3 patch release is likely within days**.

---

## 3. Project Progress — Merged/Closed PRs Today (Highlights)

| PR | Type | Summary | Priority |
|----|------|---------|----------|
| [#4902](https://github.com/HKUDS/nanobot/pull/4902) | **Bug Fix (P1)** | Added wall-clock timeout for streaming LLM requests — fixes #4795 where streaming calls could run indefinitely | P1 |
| [#4842](https://github.com/HKUDS/nanobot/pull/4842) | **Bug Fix (P1)** | Catch `asyncio.CancelledError` in MCP shutdown — prevents hangs when stdio subprocesses don't terminate in time | P1 |
| [#4916](https://github.com/HKUDS/nanobot/pull/4916) | **Docs (P2)** | Reorganized documentation around user workflows; WebUI setup now primary path | P2 |
| [#4920](https://github.com/HKUDS/nanobot/pull/4920) | **Docs** | Expanded `CLAUDE.md` into standalone guide for AI-assisted development | — |
| [#4769](https://github.com/HKUDS/nanobot/pull/4769) | **Refactor (P1)** | Centralized native runtime access in WebUI — engine restart, diagnostics, folder picking | P1 |
| [#4771](https://github.com/HKUDS/nanobot/pull/4771) | **Feature (P2)** | WebUI document attachment support with ingress safeguards (MIME, size, count limits) | P2 |
| [#4453](https://github.com/HKUDS/nanobot/pull/4453) | **Fix** | WebUI: follow active turn output after send; distinguish programmatic vs user scroll | — |
| [#3965](https://github.com/HKUDS/nanobot/pull/3965) | **Test** | CLI Apps tests now platform-neutral; Windows CI coverage added | — |
| [#4887](https://github.com/HKUDS/nanobot/pull/4887) | **Fix** | Dev extra now includes `lark-oapi` for Feishu tests | — |
| [#3950](https://github.com/HKUDS/nanobot/pull/3950) | **Docs** | Added comprehensive FAQ section | — |

**Additional merged fixes** (from closed issues): Windows PowerShell UTF-16 corruption (#4881), Dream content diff false positives (#4882), Dream log/restore filtering (#4893), Telegram long-message rendering (#4637), duplicate assistant messages (#2376).

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Activity | Core Need |
|------|----------|-----------|
| [#4908](https://github.com/HKUDS/nanobot/pull/4908) **PR** — *refactor(channels): move setup/instance ownership to channels* | Updated 2026-07-14, follow-up to #4855 | **Architecture decoupling**: Channels should own their setup/validation/runtime naming — critical for Feishu multi-instance and future channel plugins |
| [#4911](https://github.com/HKUDS/nanobot/issues/4911) **Issue** — *Guarded tool gateway for channels* | Created 2026-07-13 | **Real-time voice channels** need to invoke agent tools (e.g., `function_calling`) but channels only receive `(config, bus)` with text — requires a secure tool gateway seam |
| [#4787](https://github.com/HKUDS/nanobot/issues/4787) **Issue** — *Resource leak: Session.messages unbounded* | Updated 2026-07-14, 1 comment | **Long-running sessions** (especially unified) accumulate messages indefinitely; `FILE_MAX_MESSAGES` only limits replay, not storage — memory growth risk |
| [#4918](https://github.com/HKUDS/nanobot/pull/4918) **PR** — *refactor(config): centralize file persistence in repository* | Created 2026-07-14 | **Config security & clarity**: Prevent resolved secrets (`${VAR}`) from being written back; atomic writes, validation, revisions |
| [#1500](https://github.com/HKUDS/nanobot/issues/1500) **Issue** — *Forced information-flow output* | Updated 2026-07-13, 👍:1 | **User control over verbosity**: LLM cannot control output mode; cron jobs leak execution logs — needs message tiering (info/warn/error) |

**Underlying theme**: Contributors are pushing for **modular, secure architecture** (channel ownership, config repo, tool gateway) while users demand **runtime control** (output verbosity, resource bounds).

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#4795](https://github.com/HKUDS/nanobot/issues/4795) Streaming LLM calls bypass wall-clock timeout entirely | ✅ **Fixed** | [#4902](https://github.com/HKUDS/nanobot/pull/4902) merged |
| **High** | [#4881](https://github.com/HKUDS/nanobot/issues/4881) Windows ExecTool corrupts PowerShell UTF-16 output (NUL bytes) | ✅ **Fixed** | Merged (no PR linked in data) |
| **High** | [#4787](https://github.com/HKUDS/nanobot/issues/4787) Session.messages list unbounded — memory leak in long sessions | 🔴 **Open** | No fix PR yet |
| **High** | [#4864](https://github.com/HKUDS/nanobot/issues/4864) Endless loop: `complete_goal` parses `recap` as string not JSON | 🔴 **Open** | No fix PR yet |
| **Medium** | [#4637](https://github.com/HKUDS/nanobot/issues/4637) Telegram long-message splits — prior trunks fail to render | ✅ **Fixed** | Merged |
| **Medium** | [#2376](https://github.com/HKUDS/nanobot/issues/2376) Two assistant messages at end of list — LLM rejection | ✅ **Fixed** | Merged |
| **Medium** | [#4882](https://github.com/HKUDS/nanobot/issues/4882) Dream diff reports unchanged empty files as modified | ✅ **Fixed** | Merged |
| **Low** | [#4893](https://github.com/HKUDS/nanobot/issues/4893) `/dream-log` & `/dream-restore` show non-Dream commits | ✅ **Fixed** | Merged |

**Stability signal**: 8/9 bugs from today's batch are **already fixed and merged** — excellent turnaround. The two open high-severity issues (#4787, #4864) need immediate attention.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Guarded tool gateway for channels** (enable real-time voice, function calling from channels) | [#4911](https://github.com/HKUDS/nanobot/issues/4911) | **High** — architectural enabler, P1 refactor (#4908) in progress |
| **Custom Telegram Bot API base URL + headers** (self-hosted/enterprise) | [#4919](https://github.com/HKUDS/nanobot/pull/4919) | **High** — PR open, implements #4702 |
| **Telegram forum topic threads** (`message_thread_id` propagation) | [#2628](https://github.com/HKUDS/nanobot/pull/2628) | **Medium** — long-open PR (since Mar), marked `conflict` |
| **Message tiering / output verbosity control** (info/warn/error, LLM-controlled) | [#1500](https://github.com/HKUDS/nanobot/issues/1500) | **Medium** — user pain point, 👍:1, no PR yet |
| **WebUI document attachments** (MIME/size/count safeguards) | [#4771](https://github.com/HKUDS/nanobot/pull/4771) | **Done** — merged today |
| **Config file persistence repository** (atomic writes, secret safety) | [#4918](https://github.com/HKUDS/nanobot/pull/4918) | **High** — P1 PR open today |
| **Session message cap** (bound `Session.messages` to prevent leaks) | [#4787](https://github.com/HKUDS/nanobot/issues/4787) | **High** — critical for production stability |

**Predicted next version (v0.2.3)**: Streaming timeout fix, Windows UTF-16 fix, Telegram custom API, config repository, WebUI doc attachments, Dream log filtering. **v0.3.0 candidates**: Tool gateway, channel ownership refactor, message tiering, session bounds.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Uncontrollable verbosity** — execution logs leak even when LLM intends silence (cron jobs) | [#1500](https://github.com/HKUDS/nanobot/issues/1500) | High — breaks automation UX, 👍:1 |
| **Session memory growth** — unbounded message list in long-running/unified sessions | [#4787](https://github.com/HKUDS/nanobot/issues/4787) | High — production reliability risk |
| **Windows PowerShell output corruption** — UTF-16 decoded as UTF-8 → NUL bytes | [#4881](https://github.com/HKUDS/nanobot/issues/4881) | High — Windows users blocked |
| **Telegram long-message rendering broken** — split trunks don't render | [#4637](https://github.com/HKUDS/nanobot/issues/4637) | Medium — messaging UX |
| **Feishu file download fails** — bot opens browser instead of using API | [#2352](https://github.com/HKUDS/nanobot/issues/2352) | Medium — enterprise channel gap |
| **`complete_goal` parsing bug** — gateway sends string not JSON | [#4864](https://github.com/HKUDS/nanobot/issues/4864) | High — agent loop failure |

**Positive signals**: Users actively file detailed bugs with reproduction steps; contributors respond rapidly with fixes. The project is **production-used** (cron jobs, Feishu/Telegram enterprise, Windows, long sessions).

---

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2628](https://github.com/HKUDS/nanobot/pull/2628) **PR** — Telegram forum topic threads | 3.5 months (since Mar 29) | Marked `conflict`; enables threaded group chats — key Telegram feature |
| [#4787](https://github.com/HKUDS/nanobot/issues/4787) **Issue** — Session.messages unbounded | 8 days | **No fix PR yet**; memory leak in production long-running sessions |
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) **Issue** — `complete_goal` JSON parsing bug | 5 days | **No fix PR yet**; breaks agent goal completion loop |
| [#1500](https://github.com/HKUDS/nanobot/issues/1500) **Issue** — Forced output verbosity | 4 months | User pain point with 👍; needs message tiering design |
| [#2352](https://github.com/HKUDS/nanobot/issues/2352) **Issue** — Feishu file download | 3.5 months | Enterprise channel gap; bot falls back to browser scraping |
| [#1304](https://github.com/HKUDS/nanobot/issues/1304) **Issue** — Can't use Codex | 4.5 months | Closed but no resolution visible; integration gap |

**Maintainer action recommended**: Prioritize #4787 and #4864 (production stability), triage #2628 (resolve conflicts), design #1500 (UX), investigate #2352 (Feishu API vs scraping).

---

## Health Indicators Summary

| Metric | Signal |
|--------|--------|
| **Merge velocity** | 🟢 Excellent — 36 PRs merged/closed in 24h |
| **Bug fix latency** | 🟢 Excellent — most critical bugs fixed same-day |
| **Architectural investment** | 🟢 High — channel ownership, config repo, tool gateway in flight |
| **Windows/Enterprise support** | 🟡 Improving — UTF-16 fixed, Telegram custom API in PR, Feishu gaps remain |
| **Technical debt** | 🟡 Moderate — session leak (#4787), output tiering (#1500) unresolved |
| **Community responsiveness** | 🟢 Strong — detailed issues, rapid PR turnaround, multi-contributor |

**Overall**: NanoBot is in a **healthy, high-velocity maintenance phase** with architectural modernization underway. The next patch release will be stability-focused; the following minor release may deliver the channel/tool gateway enabling real-time voice and richer integrations.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-14

## 1. Today's Overview

Hermes Agent shows **high maintenance velocity** with 92 total items (50 issues + 50 PRs) updated in the last 24 hours. The project is in a **stabilization phase** — 42 issues and 13 PRs were closed/merged today, indicating active triage and backlog clearing. No new release was published, suggesting the team is consolidating fixes for an upcoming version. The open issue count remains low (8 active), while 37 PRs remain open, reflecting ongoing feature development across desktop, gateway, provider integrations, and core agent logic.

---

## 2. Releases

**No new releases published today.** The latest release data shows none. The high volume of merged PRs (13) and closed issues (42) suggests a release candidate may be in preparation.

---

## 3. Project Progress — Merged/Closed PRs & Key Fixes

| PR | Type | Component | Summary |
|----|------|-----------|---------|
| [#41668](https://github.com/NousResearch/hermes-agent/pull/41668) | Bug | CLI, Gateway | Fixed macOS `launchd` domain mismatch (`user/<uid>` vs `gui/<uid>`) causing gateway service mis-detection |
| [#43023](https://github.com/NousResearch/hermes-agent/pull/43023) | Bug | Providers | MiniMax provider overlays now default to `/anthropic` base URL, fixing 401 on model validation |
| [#43019](https://github.com/NousResearch/hermes-agent/pull/43019) | Bug | Gateway, WhatsApp | Exposed inbound video cache paths so model receives real file paths instead of placeholders |
| [#42780](https://github.com/NousResearch/hermes-agent/issues/42780) | Bug | Auth, Docker | `HERMES_DASHBOARD_PUBLIC_URL` now respected for self-hosted OIDC callback behind reverse proxy |
| [#42617](https://github.com/NousResearch/hermes-agent/issues/42617) | Bug | Provider/Xiaomi | Fixed `state.db` token accounting: `input_tokens` no longer 3.9× inflated; `cache_read_tokens` now recorded |
| [#42557](https://github.com/NousResearch/hermes-agent/issues/42557) | Bug | Desktop | Reply auto-scroll restored; new messages no longer appear mid-chat |
| [#42479](https://github.com/NousResearch/hermes-agent/issues/42479) | Bug | Desktop, Gateway | UI running state now clears after stop button clicked (button, statusbar, sidebar dots) |
| [#42468](https://github.com/NousResearch/hermes-agent/issues/42468) | Bug | Desktop | Sidebar session "Copy ID" fixed (nested Radix menu conflict resolved) |
| [#42431](https://github.com/NousResearch/hermes-agent/issues/42431) | Bug | Desktop, TUI | Files panel now uses correct remote session `cwd` instead of local filesystem in remote mode |
| [#42366](https://github.com/NousResearch/hermes-agent/issues/42366) | Bug | Desktop, TUI | Chat auto-scroll restored; input prompt no longer disappears during output |
| [#42388](https://github.com/NousResearch/hermes-agent/issues/42388) | Feature | Agent, Memory, Skills | Background-review fork write scope decoupled from spawn triggers — skill self-improvement no longer grants autonomous memory writes |
| [#42483](https://github.com/NousResearch/hermes-agent/issues/42483) | Feature | Web Extract | LLM summarization truncation removed; `MAX_OUTPUT_SIZE` now configurable |
| [#42505](https://github.com/NousResearch/hermes-agent/issues/42505) | Security | Gateway, Matrix | Matrix recovery key no longer logged by default (opt-in via env) |
| [#42758](https://github.com/NousResearch/hermes-agent/issues/42758) | Feature | Desktop | Workspace tree: "Copy file path" added to context menu |
| [#42525](https://github.com/NousResearch/hermes-agent/issues/42525) | Feature | Desktop | Workspace/directory can now be changed from Desktop UI (no config edit + restart needed) |
| [#42663](https://github.com/NousResearch/hermes-agent/issues/42663) | Feature | Plugins, Kanban | Kanban task-block lifecycle hook added for policy plugins |
| [#42696](https://github.com/NousResearch/hermes-agent/issues/42696) | Feature | Telegram | Inline keyboard buttons exposed for agent approval prompts (Allow Once/Session/Always/Deny) |
| [#42647](https://github.com/NousResearch/hermes-agent/issues/42647) | Bug | Models | Gemma4 QAT model output truncation fixed |

**Key theme:** Desktop usability (scrolling, sidebar, workspace switching), provider token accounting accuracy, gateway platform fixes (WhatsApp, Matrix, Telegram, Email), and security hardening.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Reactions | Category | Core Need |
|------|----------|-----------|----------|-----------|
| [#25309](https://github.com/NousResearch/hermes-agent/issues/25309) **Dreaming — Automatic Background Memory Consolidation** | 5 | 0 | Feature (Innovation) | Biological sleep-inspired memory consolidation during quiet hours; long-requested "long-term memory" automation |
| [#42479](https://github.com/NousResearch/hermes-agent/issues/42479) **Desktop: UI running state not cleared after stop** | 5 | 0 | Bug (P2) | Core desktop UX — stop button leaves ghost running state across UI |
| [#63911](https://github.com/NousResearch/hermes-agent/issues/63911) **Telegram DM topic mode: root-lobby gate swallows kanban wake events** | 4 | 0 | Bug (P3) | Telegram gateway silently drops events when `thread_id` missing — breaks kanban in topic mode |
| [#42646](https://github.com/NousResearch/hermes-agent/issues/42646) **Add iFlow Search as native Web Search provider** | 4 | 0 | Feature (P3) | User wants iFlow as first-class web provider (not MCP); closed as not-planned |
| [#42617](https://github.com/NousResearch/hermes-agent/issues/42617) **Xiaomi provider token accounting broken** | 4 | 0 | Bug (P3) | `state.db` unusable for billing — 3.9× inflation + zero cache reads; **fixed in #42617** |
| [#63651](https://github.com/NousResearch/hermes-agent/issues/63651) **Gateway buttons for memory/skills write approval** | 3 | 0 | Feature (P3) | Telegram/gateway users need inline buttons (not commands) to approve pending memory/skill writes |
| [#42801](https://github.com/NousResearch/hermes-agent/issues/42801) **Tool-call Unicode escape fragmentation corrupts non-ASCII** | 3 | 0 | Bug (P2) | Models emit `\u0000e5` instead of `\u00e5` — valid JSON but corrupts chars; closed not-planned |
| [#42525](https://github.com/NousResearch/hermes-agent/issues/42525) **Desktop: change workspace from UI** | 3 | 3 | Feature (P3) | **High user demand** (3 👍) — workspace switching without config edit/restart; **implemented** |
| [#42366](https://github.com/NousResearch/hermes-agent/issues/42366) **Desktop chat no auto-scroll, prompt disappears** | 3 | 3 | Bug (P3) | **High user pain** (3 👍) — core usability; **fixed** |
| [#61778](https://github.com/NousResearch/hermes-agent/issues/61778) **Codex 0-event hang undetectable for >10k tokens** | 2 | 0 | Bug (P3) | Delegation timeout race condition — TTFB exemption + event-idle precondition leave only wall-clock timeout |

**Analysis:** Top discussions center on **desktop UX polish** (scrolling, workspace, stop button), **gateway platform edge cases** (Telegram topic mode, Matrix security), **provider billing accuracy** (Xiaomi), and **memory/skill approval UX** for messaging platforms. The "Dreaming" feature (#25309) represents the most ambitious long-term ask.

---

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Component | Status | Fix PR |
|----------|-------|-----------|--------|--------|
| **P2** | [#64268](https://github.com/NousResearch/hermes-agent/issues/64268) Context-file threat scanner: negation-blind `role_pretend` drops entire persona file | Agent, Skills | **Open** (new today) | — |
| **P2** | [#61778](https://github.com/NousResearch/hermes-agent/issues/61778) Codex 0-event hang undetectable >10k tokens — delegation timeout race | Agent, Delegate, OpenAI | **Open** (needs repro) | — |
| **P2** | [#43018](https://github.com/NousResearch/hermes-agent/pull/43018) Email gateway: `RFC822` fetch marks messages read (should use `BODY.PEEK[]`) | Gateway, Email | **Open PR** | #43018 |
| **P2** | [#42801](https://github.com/NousResearch/hermes-agent/issues/42801) Tool-call Unicode escape fragmentation (`\u00XX` → `\u0000` + hex) | Agent | Closed (not-planned) | — |
| **P3** | [#63911](https://github.com/NousResearch/hermes-agent/issues/63911) Telegram DM topic mode: root-lobby gate swallows kanban wake events | Gateway, Cron, Telegram | **Open** | — |
| **P3** | [#42726](https://github.com/NousResearch/hermes-agent/issues/42726) Desktop skips MCP tool discovery — MCP tools unavailable | Desktop, Agent, MCP | Closed (duplicate) | — |
| **P3** | [#42643](https://github.com/NousResearch/hermes-agent/issues/42643) `/reasoning` in TUI returns `unknown reasoning value: medium` | Gateway, TUI | Closed (cannot reproduce) | — |
| **P3** | [#42593](https://github.com/NousResearch/hermes-agent/issues/42593) File browser hover-reveal blocks scrollbar on right edge | TUI | Closed (cannot reproduce) | — |
| **P3** | [#42401](https://github.com/NousResearch/hermes-agent/issues/42401) Prompts discarded when switching tabs in Desktop | Desktop | Closed (implemented) | — |
| **P3** | [#64020](https://github.com/NousResearch/hermes-agent/issues/64020) Payment method failing on free plan signup | Portal, Billing | Closed (needs repro) | — |

**Critical new bug:** #64268 (threat scanner false positive on negation) — silently drops entire SOUL.md persona files. **No fix PR yet.**

**High-impact unresolved:** #61778 (Codex delegation timeout race) and #63911 (Telegram topic mode kanban breakage) — both affect production workflows.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood | Rationale |
|---------|--------|------------|-----------|
| **Dreaming — Background Memory Consolidation** | [#25309](https://github.com/NousResearch/hermes-agent/issues/25309) | 🟡 Medium | Long-standing innovation issue (since May); inspired by OpenClaw; requires cron + memory + plugin coordination |
| **Gateway buttons for memory/skills write approval** | [#63651](https://github.com/NousResearch/hermes-agent/issues/63651) | 🟢 High | Follows pattern of #42696 (Telegram exec approval buttons — **already implemented**); natural UX extension |
| **Cron show/inspect command** | [#43031](https://github.com/NousResearch/hermes-agent/pull/43031) | 🟢 High | PR open; CLI parity with `cron list`; low complexity |
| **Goal-mode indicator in Desktop status bar** | [#43020](https://github.com/NousResearch/hermes-agent/pull/43020) | 🟢 High | PR open; mirrors Codex UX; trivial frontend change |
| **Auto-title API sessions** | [#63672](https://github.com/NousResearch/hermes-agent/pull/63672) | 🟢 High | PR open; ports existing CLI/gateway behavior to API server |
| **Durable profile-agent orchestration via `agent_control`** | [#43030](https://github.com/NousResearch/hermes-agent/pull/43030) | 🟡 Medium | Restores #18493; ACP-based multi-agent orchestration; architectural significance |
| **Code index & symbol search tools** | [#24399](https://github.com/NousResearch/hermes-agent/pull/24399) | 🟡 Medium | Large PR (May); SQLite-backed code index; "blast-massive" risk flag — needs review bandwidth |
| **Planning, code-review, documentation skills** | [#43035](https://github.com/NousResearch/hermes-agent/pull/43035) | 🟢 High | PR open; curated from community repos; low-risk skill additions |
| **Configurable compression warning threshold** | [#53958](https://github.com/NousResearch/hermes-agent/pull/53958) | 🟢 High | PR open; closes #53876; simple config addition |
| **iFlow Search as native web provider** | [#42646](https://github.com/NousResearch/hermes-agent/issues/42646) | 🔴 Low | Closed as "not-planned"; MCP route preferred |

**Strongest signals for next release:** Cron CLI, Desktop goal-mode badge, API session auto-titling, configurable compression warning, new skills pack. The `agent_control` orchestration layer is the most architecturally significant open PR.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Desktop chat usability broken** — no auto-scroll, prompt disappears, replies appear mid-chat | [#42366](https://github.com/NousResearch/hermes-agent/issues/42366) (3 👍), [#42557](https://github.com/NousResearch/hermes-agent/issues/42557), [#42401](https://github.com/NousResearch/hermes-agent/issues/42401) | **High** — 3+ issues, 6 👍 total |
| **Workspace switching requires config edit + restart** | [#42525](https://github.com/NousResearch/hermes-agent/issues/42525) (3 👍) | **High** — explicit workflow blocker |
| **Stop button leaves UI in "running" state** | [#42479](https://github.com/NousResearch/hermes-agent/issues/42479) | **Medium** — core control loop UX |
| **Telegram topic mode breaks kanban** | [#63911](https://github.com/NousResearch/hermes-agent/issues/63911) | **Medium** — platform-specific but silent failure |
| **Provider token accounting inaccurate (billing)** | [#42617](https://github.com/NousResearch/hermes-agent/issues/42617) (Xiaomi) | **Medium** — affects cost tracking trust |
| **Matrix recovery key logged in plaintext** | [#42505](https://github.com/NousResearch/hermes-agent/issues/42505) | **Security** — fixed, but indicates audit need |
| **File browser hover blocks scrollbar** | [#42593](https://github.com/NousResearch/hermes-agent/issues/42593) | **Low** — edge case, cannot reproduce |
| **MCP tools not loading on Windows Desktop

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-14

## 1. Today's Overview
PicoClaw shows steady community engagement with **5 active issues** and **5 open pull requests** updated in the last 24 hours, though **no PRs were merged and no releases shipped**. Activity centers on provider integrations (Feishu, Anthropic, DingTalk, Gemini), security hardening (vodozemac migration), and infrastructure hygiene (Docker base images, gitignore). The project remains in active maintenance mode with a healthy backlog of community-contributed fixes and feature proposals, but merge velocity appears low — all current PRs are open and several carry the `stale` label, suggesting maintainer bandwidth constraints.

## 2. Releases
**No new releases** published today. The latest version remains **v0.3.1** (per issue context).

## 3. Project Progress
No PRs were merged or closed in the last 24 hours. All 5 open PRs are awaiting review:

| PR | Title | Author | Status | Area |
|----|-------|--------|--------|------|
| [#3256](https://github.com/sipeed/picoclaw/pull/3256) | fix(feishu): send audio and video with native message types | AaronZ345 | Open | Feishu provider |
| [#3228](https://github.com/sipeed/picoclaw/pull/3228) | fix(anthropic-messages): send SystemParts as system blocks with cache_control | AayushGupta16 | Open (stale) | Anthropic provider / prompt caching |
| [#3192](https://github.com/sipeed/picoclaw/pull/3192) | chore(docker): bump goreleaser base images from alpine:3.21 to 3.23 | chengzhichao-xydt | Open (stale) | Docker / CI |
| [#3191](https://github.com/sipeed/picoclaw/pull/3191) | chore: remove duplicate build/ entry in .gitignore | chengzhichao-xydt | Open (stale) | Repo hygiene |
| [#3254](https://github.com/sipeed/picoclaw/pull/3254) | fix(agent): prefer verbatim model matches over provider-alias splits when resolving refs | fabdelgado | Open | Agent model resolution |

## 4. Community Hot Topics
**Most discussed/active items** (by comments + reactions):

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|-----|-----------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | Issue | 8 | 2 | **Security migration**: Replace unmaintained `libolm` with `vodozemac` for Matrix E2EE. High priority, help wanted. |
| [#3228](https://github.com/sipeed/picoclaw/pull/3228) | PR | — | 0 | **Anthropic prompt caching**: Enable per-block `cache_control` on system messages to reduce token costs in agentic workflows. |
| [#3229](https://github.com/sipeed/picoclaw/issues/3229) | Issue | 1 | 0 | **Conversation cache breakpoints**: Rolling cache strategy for long conversation histories on Anthropic. |
| [#3230](https://github.com/sipeed/picoclaw/issues/3230) | Issue | 1 | 0 | **Gemini API compat**: Missing `thought_signature` when calling Gemini via OpenAI-compat format (Cloudflare AI Gateway). |
| [#3231](https://github.com/sipeed/picoclaw/issues/3231) | Issue | 1 | 0 | **SearXNG auth**: Need BasicAuth header support (not URL-embedded credentials). |

**Underlying themes**:  
- **Provider parity & standards compliance** (Feishu native media, Anthropic caching, Gemini OpenAI-compat, DingTalk preview, SearXNG auth)  
- **Security debt reduction** (libolm → vodozemac)  
- **Agentic cost optimization** (prompt caching, conversation history management)

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#3230](https://github.com/sipeed/picoclaw/issues/3230) | Gemini API returns `missing thought_signature` error when called via OpenAI-compat format through Cloudflare AI Gateway. Affects tool-use workflows. | No |
| **Medium** | [#3255](https://github.com/sipeed/picoclaw/issues/3255) | DingTalk chat list preview shows static "PicoClaw" instead of message content (SimpleReplyMarkdown title). Content renders correctly inside chat. | No |
| **Low** | [#3254](https://github.com/sipeed/picoclaw/pull/3254) | Model resolution logic incorrectly prefers provider-alias splits over verbatim matches, causing wrong model selection. | **Yes** (#3254) |

No crashes or regressions reported today.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|-----------------------------|-----------|
| **vodozemac migration** (replace libolm) | [#3088](https://github.com/sipeed/picoclaw/issues/3088) | High | Security-critical, labeled `priority: high` + `help wanted`, 8 comments, 2 👍. Official libolm successor. |
| **Anthropic prompt caching (SystemParts + cache_control)** | [#3228](https://github.com/sipeed/picoclaw/pull/3228), [#3229](https://github.com/sipeed/picoclaw/issues/3229) | High | PR ready, addresses costly agentic token reuse. Stale but technically complete. |
| **Feishu native audio/video message types** | [#3256](https://github.com/sipeed/picoclaw/pull/3256) | Medium | PR open, improves UX (playable vs downloadable). Small scope. |
| **SearXNG BasicAuth header support** | [#3231](https://github.com/sipeed/picoclaw/issues/3231) | Medium | Simple auth enhancement, no PR yet. |
| **DingTalk chat list preview fix** | [#3255](https://github.com/sipeed/picoclaw/issues/3255) | Medium | Visible UX bug, fresh report (today). |
| **Docker base image bump (alpine 3.21 → 3.23)** | [#3192](https://github.com/sipeed/picoclaw/pull/3192) | Low | Routine maintenance, stale PR. |

## 7. User Feedback Summary
**Pain points expressed:**
- **Security anxiety**: "libolm is unmaintained and insecure" — users want vodozemac now ([#3088](https://github.com/sipeed/picoclaw/issues/3088))
- **Provider friction**: Gemini OpenAI-compat broken via Cloudflare Gateway ([#3230](https://github.com/sipeed/picoclaw/issues/3230)); SearXNG auth method unsupported ([#3231](https://github.com/sipeed/picoclaw/issues/3231))
- **UX polish**: DingTalk preview shows bot name not content ([#3255](https://github.com/sipeed/picoclaw/issues/3255)); Feishu media delivered as files not playable messages ([#3256](https://github.com/sipeed/picoclaw/pull/3256))
- **Cost concerns**: Anthropic caching unavailable for conversation history ([#3229](https://github.com/sipeed/picoclaw/issues/3229))

**Use cases visible:** Agentic workflows (tool use, long conversations), multi-channel deployments (Feishu, DingTalk, Matrix), AI gateway integrations (Cloudflare), self-hosted search (SearXNG).

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | 35 days | **Security-critical**, high priority, help wanted. Blocked on maintainer direction for optional libolm compile-time flag. |
| [#3228](https://github.com/sipeed/picoclaw/pull/3228) | 8 days | **High-impact PR** for Anthropic cost savings. Stale — needs review/merge. |
| [#3192](https://github.com/sipeed/picoclaw/pull/3192) | 17 days | **Dependency hygiene**. Simple, low-risk. Stale. |
| [#3191](https://github.com/sipeed/picoclaw/pull/3191) | 17 days | **Trivial cleanup**. Stale. |
| [#3254](https://github.com/sipeed/picoclaw/pull/3254) | 1 day | **Correctness fix** for model resolution. Fresh but un-reviewed. |

---

**Health Indicator**: 🟡 **Moderate** — Active community contributions but low merge throughput. Security debt (#3088) and high-value provider fixes (#3228, #3256) are queued. Recommend maintainer triage to unblock stale PRs and prioritize vodozemac migration.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-14

---

## 1. Today's Overview
NullClaw shows **steady maintenance activity** with four open pull requests updated within the last 24 hours, all authored by core contributors. No new issues, releases, or merged changes were recorded today, indicating the project is in a **pre-merge integration phase** — likely validating several significant refactors before landing them. The PRs span CLI ergonomics, agent approval flows, Matrix persistence, and Android network resilience, suggesting a focus on **multi-platform stability and human-in-the-loop control**.

---

## 2. Releases
**No new releases** published today. The project appears to be accumulating changes for a future version bump.

---

## 3. Project Progress
**No PRs merged or closed today.** All four active PRs remain open and under review. Progress is visible in the form of **recent commits and CI updates** on each PR (last push: 2026-07-13), but no code has landed in `main` since the last digest window.

---

## 4. Community Hot Topics
All four PRs are authored by maintainers/core team; no external community issues or discussions surfaced today. The most technically substantive threads:

| PR | Focus | Why It Matters |
|----|-------|----------------|
| **[#970](https://github.com/nullclaw/nullclaw/pull/970)** `fix(cli): handle arrow keys in agent REPL` | Adds a zero-allocation line editor with raw-mode TTY support — arrow keys, history, cursor movement, word jumps, Home/End. | Directly improves **daily developer UX** for the interactive agent; eliminates control-character garbage. |
| **[#969](https://github.com/nullclaw/nullclaw/pull/969)** `feat(agent): structured approval_request / approval_response flow` | Two-turn approval protocol for tools (e.g., shell) that raise `error.ApprovalRequired`; SSE event channel renders UI, user responds, agent resumes. | Foundational for **safe human-in-the-loop automation**; enables future policy engines and audit trails. |
| **[#968](https://github.com/nullclaw/nullclaw/pull/968)** `fix(matrix): persist next_batch across restart + test env isolation` | Persists Matrix `/sync` cursor (`next_batch`) to disk; fixes initial-sync flood on restart; adds test isolation. | Critical for **reliable Matrix bridging** — prevents duplicate message processing and state desync after crashes/upgrades. |
| **[#966](https://github.com/nullclaw/nullclaw/pull/966)** `fix(http): secure buffered curl fallback on Android` | Full-request curl fallback on `aarch64-linux-android` (Termux) when Zig stdlib DNS fails; preserves headers/body/redirects. | Unblocks **Android/Termux users** — a known pain point for mobile contributors and edge deployments. |

**Underlying theme:** The team is hardening **cross-platform reliability** (Android, Matrix) and **interactive safety** (REPL, approvals) — signals of a project preparing for broader adoption beyond core developers.

---

## 5. Bugs & Stability
No new bug reports or regressions filed today. The open PRs **address known stability gaps**:

| Severity | Area | PR | Status |
|----------|------|----|--------|
| **High** | Matrix sync regression on restart (full re-sync, duplicate events) | [#968](https://github.com/nullclaw/nullclaw/pull/968) | Fix ready, awaiting review |
| **Medium** | Android/Termux DNS resolution failure in stdlib HTTP | [#966](https://github.com/nullclaw/nullclaw/pull/966) | Fix ready, awaiting review |
| **Low** | REPL prints raw escape sequences for arrow keys | [#970](https://github.com/nullclaw/nullclaw/pull/970) | Fix ready, awaiting review |

All fixes are implemented and CI-green; merge latency is the only blocker.

---

## 6. Feature Requests & Roadmap Signals
No user-facing feature requests today. However, **PR #969 (approval flow)** is a **roadmap-level feature** — it introduces a generic approval protocol that can extend beyond the shell tool. Expect:
- Policy-driven auto-approval rules (next quarter)
- Audit logging integration
- Multi-user approval workflows (for team deployments)

The REPL editor (#970) and Android curl fallback (#966) are **quality-of-life enablers** that lower friction for contributors — likely precursors to a **v0.12+ "usability" release**.

---

## 7. User Feedback Summary
No direct user feedback (issues, discussions, reactions) captured in the last 24h. The PR authors are internal; **external signal is absent**. This suggests either:
- Stable usage with no blockers, or
- Feedback channels (Discord, Matrix, Discussions) not reflected in GitHub data.

**Recommendation:** Monitor Matrix/Discord for Android/Termux user reports — #966 fixes a known Termux pain point that may not surface as GitHub issues.

---

## 8. Backlog Watch
| Item | Age | Risk | Notes |
|------|-----|------|-------|
| **[#968](https://github.com/nullclaw/nullclaw/pull/968)** Matrix `next_batch` persistence | 22 days (opened 2026-06-22) | **High** — affects all Matrix bridge users on restart | Core infra fix; test isolation added. Should be prioritized for merge. |
| **[#966](https://github.com/nullclaw/nullclaw/pull/966)** Android curl fallback | 25 days (opened 2026-06-19) | **Medium** — blocks Termux users | Security-sensitive (full request buffering); needs thorough review. |
| **[#969](https://github.com/nullclaw/nullclaw/pull/969)** Approval flow | 26 days (opened 2026-06-28) | **Medium** — new protocol surface | Design looks solid; ensure fuzzing/contract tests cover edge cases. |
| **[#970](https://github.com/nullclaw/nullclaw/pull/970)** REPL line editor | 15 days (opened 2026-06-29) | **Low** — UX polish | Low risk, high user visibility. Good "quick win" to land. |

**Maintainer action needed:** All four PRs are review-ready. A focused review sprint could clear the backlog and unblock a minor release.

---

> **Health Score: 🟡 Yellow** — Active development, zero merge throughput today, but high-quality fixes queued. Risk of **merge debt accumulation** if review bandwidth stays low. Prioritize #968 and #966 for stability; #970 for contributor morale.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-14

## 1. Today's Overview

IronClaw shows **high development velocity** with 48 issue updates and 50 PR updates in the last 24 hours. The project is in a **transition phase**: actively retiring the legacy v1 runtime (`src/`, `ironclaw` binary, `ironclaw_gateway`, `ironclaw_tui`) while hardening the Reborn runtime. A significant "bug bash" effort is underway (12+ `bug_bash_P2/P3` issues), targeting UI/UX polish, extension lifecycle, automation triggers, and conversation history reliability. No new releases were published today; the last automated release PR (#5598) shows multiple crate version bumps with breaking changes in `ironclaw_common` and `ironclaw_skills`.

---

## 2. Releases

**No new releases today.**  
The open release PR [#5598](https://github.com/nearai/ironclaw/pull/5598) (created 2026-07-03, updated today) proposes:
- `ironclaw_common`: 0.4.2 → 0.5.0 (**breaking API changes**)
- `ironclaw_safety`: 0.2.2 → 0.2.3 (compatible)
- `ironclaw_skills`: 0.3.0 → 0.4.0 (**breaking API changes**)
- `ironclaw`: 0.24.0 → 0.29.1

> **Migration note:** Consumers of `ironclaw_common` and `ironclaw_skills` will need to adapt to breaking changes before upgrading.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#5911](https://github.com/nearai/ironclaw/pull/5911) | fix: load older chat history pages | WebUI / History | Fixes "Load older messages" button non-functional (#5889) |
| [#5912](https://github.com/nearai/ironclaw/pull/5912) | fix: record security audit events in harness | Testing / Security | Closes harness gap (#5640); wires `RecordingSecurityAuditSink` |
| [#5907](https://github.com/nearai/ironclaw/pull/5907) | fix: clear stale chat run failure banner | WebUI / UX | Clears error banner on successful follow-up (#5879) |
| [#5975](https://github.com/nearai/ironclaw/pull/5975) | Detect prompt-cache breaks and stop doomed compaction loops | Reborn / LLM Loop | Addresses KV-cache collapse (82%→29% hit rate) on long runs |
| [#5985](https://github.com/nearai/ironclaw/pull/5985) | feat(reborn): route caller-requested model on OpenAI-compatible API (Phase 2) | Reborn / API | Makes `model` field actually route the LLM call |
| [#5961](https://github.com/nearai/ironclaw/pull/5961) | skills/coding: add Verify Before You Finish discipline | Skills / Coding | Adds verification step to reduce post-edit regressions |
| [#5979](https://github.com/nearai/ironclaw/pull/5979) | Surface new post-edit check diagnostics on reborn coding edits | Skills / Coding | Pushes new diagnostics (baseline→diff, type-check) to model after edits |

**Key advances:** History pagination fixed, security audit harness parity achieved, stale error banners cleared, prompt-cache break detection added, OpenAI-compatible model routing enabled, and coding tool guardrails strengthened.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#5948](https://github.com/nearai/ironclaw/issues/5948) | 5 | Bug (P3) | Assistant misreports GitHub extension as "activated" when only installed — **extension lifecycle visibility** |
| [#5889](https://github.com/nearai/ironclaw/issues/5889) | 2 | Bug (P3) | "Load older messages" button broken — **history pagination** (fixed in #5911) |
| [#5640](https://github.com/nearai/ironclaw/issues/5640) | 2 | Test Gap | Harness missing `RecordingSecurityAuditSink` — **test/production parity** (fixed in #5912) |
| [#6050](https://github.com/nearai/ironclaw/issues/6050) | 2 | Bug (P3) | "Failed to load conversation history" banner persists despite success — **error UX** |
| [#5741](https://github.com/nearai/ironclaw/issues/5741) | 2 | Bug | `builtin.http.save` fails with `OutputTooLarge` on large pages — **output size handling** (PR #5915 open) |
| [#5836](https://github.com/nearai/ironclaw/issues/5836) | 2 | Bug (P2) | Scheduled routine fails with "No thread attached" — **automation threading** |
| [#5885](https://github.com/nearai/ironclaw/issues/5885) | 2 | Bug (P2) | Approval notification opens action but hides approval card — **approval UX** (PR #5910 open) |
| [#6000](https://github.com/nearai/ironclaw/issues/6000) | 1 | Process | No `SECURITY.md`, private vulnerability reporting disabled — **security reporting channel** |
| [#6029](https://github.com/nearai/ironclaw/issues/6029) | 1 | Bug | GitHub extension cannot be deactivated/reconfigured/uninstalled after activation — **extension lifecycle management** |
| [#6076](https://github.com/nearai/ironclaw/issues/6076) | 0 | Feature | Automations expose no trigger→thread/run correlation — **observability for triggers** |

**Underlying themes:**  
- **Extension lifecycle** (install/activate/deactivate) is incomplete in UI and backend  
- **Automation/trigger observability** lacks correlation IDs for debugging  
- **Error/History UX** has stale banners, broken pagination, misleading states  
- **Security process** needs a private reporting channel

---

## 5. Bugs & Stability (Reported Today, Ranked by Severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **P2 — Systemic** | [#5836](https://github.com/nearai/ironclaw/issues/5836) | Scheduled routine (`ironclaw-issues-slack-summary`) fails every run with "No thread attached" — 0% success rate | — |
| **P2 — UX/Blocking** | [#5885](https://github.com/nearai/ironclaw/issues/5885) | Approval notification opens action but approval card missing; user cannot approve/deny | [#5910](https://github.com/nearai/ironclaw/pull/5910) (open) |
| **P2 — UX** | [#5879](https://github.com/nearai/ironclaw/issues/5879) | Stale error banner persists after successful follow-up | [#5907](https://github.com/nearai/ironclaw/pull/5907) **merged** |
| **P2 — UX** | [#6044](https://github.com/nearai/ironclaw/issues/6044) | Enter key intermittently fails to submit message in WebUI | — |
| **P3 — Data Integrity** | [#5741](https://github.com/nearai/ironclaw/issues/5741) | `builtin.http.save` fails with `OutputTooLarge` instead of saving large responses | [#5915](https://github.com/nearai/ironclaw/pull/5915) (open) |
| **P3 — Misleading State** | [#5948](https://github.com/nearai/ironclaw/issues/5948) | Assistant claims GitHub extension "activated" when only installed | [#5952](https://github.com/nearai/ironclaw/pull/5952) (open) |
| **P3 — History** | [#6050](https://github.com/nearai/ironclaw/issues/6050) | "Failed to load conversation history" banner shows despite successful response | — |
| **P3 — Performance** | [#6052](https://github.com/nearai/ironclaw/issues/6052) | Extensions Registry takes up to 10s to load (skeleton only) | — |
| **P3 — Routine UI** | [#5891](https://github.com/nearai/ironclaw/issues/5891) | "Last completed" shows active run timestamp instead of last finished | — |
| **P3 — Tool UX** | [#5860](https://github.com/nearai/ironclaw/issues/5860) | Tool activity details only appear after completion, not during run | — |

**Stability note:** The "No thread attached" routine failure (#5836) and approval card loss (#5885) are **blocking for automation and human-in-the-loop workflows** respectively. Both are P2 and lack merged fixes.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **v1 Runtime Retirement** | [#6077](https://github.com/nearai/ironclaw/issues/6077), [#6078](https://github.com/nearai/ironclaw/issues/6078), [#6079](https://github.com/nearai/ironclaw/issues/6079), [#6080](https://github.com/nearai/ironclaw/issues/6080) | **Very High** — 4 tracking issues created today; migration dependency audit underway |
| **Extension Lifecycle Management** | [#6029](https://github.com/nearai/ironclaw/issues/6029), [#5948](https://github.com/nearai/ironclaw/issues/5948), [#5952](https://github.com/nearai/ironclaw/pull/5952) | **High** — PR #5952 addresses inactive extension distinction; deactivate/reconfigure still open |
| **Trigger→Run Correlation** | [#6076](https://github.com/nearai/ironclaw/issues/6076), [#6066](https://github.com/nearai/ironclaw/pull/6066) | **High** — PR #6066 adds active-hold visibility for gate-parked automations |
| **Security Reporting Channel** | [#6000](https://github.com/nearai/ironclaw/issues/6000) | **Medium** — No `SECURITY.md`, private reporting disabled; process gap |
| **Prompt Cache Break Detection** | [#5975](https://github.com/nearai/ironclaw/pull/5975) (merged) | **Delivered** — KV-cache collapse detector + compaction loop guard landed |
| **Coding Tool Guardrails** | [#5978](https://github.com/nearai/ironclaw/pull/5978), [#5979](https://github.com/nearai/ironclaw/pull/5979) | **High** — Read-before-edit, stale-edit rejection, post-edit diagnostics (3/4 merged) |
| **Live-Test QA Scenarios** | [#6067](https://github.com/nearai/ironclaw/issues/6067)–[#6074](https://github.com/nearai/ironclaw/issues/6074) | **Ongoing** — 8 new recorded-behavior scenarios filed today (web_search, memory, skills, approvals, CI fix) |

**Predicted next version focus:** v1 retirement completion, extension deactivation UI, trigger observability, and continued Reborn hardening (cache, coding tools, live-test coverage).

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **"Extension activated" false positive** | [#5948](https://github.com/nearai/ironclaw/issues/5948) — Assistant lists capabilities for installed-but-inactive GitHub extension | Users attempt unavailable actions; trust erosion |
| **Approval flow broken** | [#5885](https://github.com/nearai/ironclaw/issues/5885) — Notification opens action but no approval card | **Blocker** for human-in-the-loop; cannot approve/deny |
| **Routine scheduling unreliable** | [#5836](https://github.com/nearai/ironclaw/issues/5836) — 0% success, "No thread attached" every 5 min | Automations silently fail; no alerting |
| **History/Error UX confusing** | [#6050](https://github.com/nearai/ironclaw/issues/6050), [#5879](https://github.com/nearai/ironclaw/issues/5879) — Stale banners, false error impressions | Users think conversation broken when it works |
| **Large response handling** | [#5741](https://github.com/nearai/ironclaw/issues/5741) — `builtin.http.save` fails on large pages instead of saving | Cannot save web content > output limit |
| **No private security reporting** | [#6000](https://github.com/nearai/ironclaw/issues/6000) — Researcher cannot disclose privately | **Security process gap**; responsible disclosure blocked |
| **Enter key flaky in WebUI** | [#6044](https://github.com/nearai/ironclaw/issues/6044) — Intermittent submit failure | Frustrating core interaction; workaround needed |
| **Extensions Registry slow** | [#6052](https://github.com/nearai/ironclaw/issues/6052) — 10s skeleton load | Perceived as broken; poor first impression |

**Positive signals:** Prompt-cache collapse fixed (#5975), model routing works (#5985), coding tools gaining Claude Code–grade guardrails (#5978/#5979), history pagination fixed (#5911).

---

## 8. Backlog Watch (Long-Unanswered / Needing Maintainer Attention)

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#4088](https://github.com/nearai/ironclaw/issues/4088) | Since 2026-05-26 (49 days) | Track decomposition of oversized Reborn integration files (4+ files > review threshold) | Open, no recent activity |
| [#6000](https://github.com/nearai/ironclaw/issues/6000) | 3 days | **No `SECURITY.md`, private reporting disabled** — security researchers have no channel | Open, 1 comment, no maintainer response |
| [#5836](https://github.com/nearai/ironclaw/issues/5836) | 6 days | Routine scheduler 0% success — systemic automation failure | Open, P2, no fix PR |
| [#5640](https://github.com/nearai/ironclaw/issues/5640) | 10 days | Harness/test parity gap (security audit sink) — **fixed in #5912 (merged)** | **Resolved today** |
| [#5948](https://github.com/nearai/ironclaw/issues/5948) | 4 days | Extension activation misreporting — PR #5952 open, needs review | Open, P3 PR |
| [#5885](https://github.com/nearai/ironclaw/issues/5885) | 5 days | Approval card missing — PR #5910 open, needs review | Open PR |
| [#5741](https://github.com/nearai/ironclaw/issues/5741) | 8 days | `builtin.http.save` OutputTooLarge — PR #5915 open, needs review | Open PR |
| [#6075](https://github.com/nearai/ironclaw

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-14

## 1. Today's Overview
LobsterAI showed **moderate maintenance activity** today with **6 PRs merged/closed** and **4 stale issues resolved**, but **no new releases** or active feature development. The merged PRs focus on stability, Windows installer hardening, notification upgrades, and an upstream OpenClaw backport — indicating a **stabilization and platform-hardening sprint** rather than new feature work. The single open PR is a dependabot Electron upgrade (40.2.1 → 43.1.0) pending review. Overall project health appears **steady with strong attention to desktop reliability**.

## 2. Releases
**No new releases** published today. The latest pinned runtime remains `v2026.6.1` (referenced in PR #2330).

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Area | Summary | Link |
|----|------|---------|------|
| **#2330** | `openclaw`, `main`, `docs` | **Backport OpenClaw fix**: stop agent loop after aborted tool run; adds patch validation & LobsterAI regression coverage. Critical for agent reliability. | [#2330](https://github.com/netease-youdao/LobsterAI/pull/2330) |
| **#2329** | `renderer`, `cowork` | **Fix conversation scroll jumps**: respects manual scrolling during streaming, cancels pending auto-scroll. UX polish for long chats. | [#2329](https://github.com/netease-youdao/LobsterAI/pull/2329) |
| **#2328** | `build`, `openclaw`, `skills` | **Serialize concurrent browser launch/search** to stop Chrome leaks. Addresses resource exhaustion in skill execution. | [#2328](https://github.com/netease-youdao/LobsterAI/pull/2328) |
| **#2327** | `build`, `windows` | **Sign Windows app binary via internal service**: fixes unsigned `LobsterAI.exe` causing security-software hangs on first run. | [#2327](https://github.com/netease-youdao/LobsterAI/pull/2327) |
| **#2318** | `renderer`, `main`, `cowork`, `docs` | **Upgrade desktop notifications**: rename `TaskCompletionNotifier` → `DesktopNotificationManager`; add waiting/permission/foreground modes; track resolved requests. | [#2318](https://github.com/netease-youdao/LobsterAI/pull/2318) |
| **#2326** | `installer`, `windows`, `openclaw`, `cowork` | **Self-heal interrupted `win-resources.tar` extraction**: tries system `tar.exe` first, falls back to bundled extractor with 10-min watchdog; recovers from killed installs. | [#2326](https://github.com/netease-youdao/LobsterAI/pull/2326) |

**Open PR (needs review):**
- **#1277** `dependabot`: Bump Electron 40.2.1 → 43.1.0 + electron-builder updates. [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (open since 2026-04-02, updated 2026-07-13)

## 4. Community Hot Topics
**All 4 issues updated today were `[stale]`-closed** (created 2026-04-03, auto-closed 2026-07-14). No active community discussions or high-engagement threads today. The stale issues represent **historical pain points** that may still affect users:

| Issue | Pain Point | Link |
|-------|------------|------|
| **#1389** | Language selector shows English labels for Chinese when UI language is English | [#1389](https://github.com/netease-youdao/LobsterAI/issues/1389) |
| **#1386** | Share → long-image truncates long conversations | [#1386](https://github.com/netease-youdao/LobsterAI/issues/1386) |
| **#1388** | Email config “Test Connection” hangs indefinitely (even with bad password) | [#1388](https://github.com/netease-youdao/LobsterAI/issues/1388) |
| **#1390** | Scheduled-task edit → “Update” button occasionally unresponsive | [#1390](https://github.com/netease-youdao/LobsterAI/issues/1390) |

**Underlying need**: Users expect **robust i18n**, **reliable long-content export**, **non-blocking network validation**, and **deterministic CRUD for scheduled tasks**. None have fix PRs linked.

## 5. Bugs & Stability — Today’s Reports (All Stale-Closed)
*Ranked by user-visible severity (no new bugs filed today):*

| Severity | Issue | Symptom | Fix PR? |
|----------|-------|---------|---------|
| **High** | #1388 | Email test-connection hangs UI indefinitely; survives restart | ❌ |
| **High** | #1328 (merged today) | Chrome leaks from concurrent browser launches — fixed in **#2328** | ✅ #2328 |
| **Medium** | #1386 | Share long-image truncates conversation history | ❌ |
| **Medium** | #1390 | Scheduled-task update button intermittently dead | ❌ |
| **Low** | #1389 | i18n: Chinese language shown as “Chinese” in English UI | ❌ |
| **Low** | #2329 (merged today) | Conversation auto-scroll fights manual scroll — fixed in **#2329** | ✅ #2329 |
| **Low** | #2327 (merged today) | Unsigned `LobsterAI.exe` triggers AV hangs on first run — fixed in **#2327** | ✅ #2327 |
| **Low** | #2326 (merged today) | Interrupted installer extraction leaves corrupt state — fixed in **#2326** | ✅ #2326 |

**Key insight**: 4/8 high/medium bugs are **stale-closed without fixes**; 4/8 were **fixed today via merged PRs**. The project is actively resolving desktop/installer stability but leaving older UX/logic bugs untriaged.

## 6. Feature Requests & Roadmap Signals
No new feature requests today. Signals from merged work suggest **near-term roadmap**:

| Signal | Likely Next-Step |
|--------|------------------|
| Electron 43 upgrade PR (#1277) open 3+ months | **Major version bump** once validated — may bring WebContentsView, V8 12.8, security fixes |
| Notification system overhaul (#2318) | **Rich interactive notifications** (actions, replies) in next minor |
| OpenClaw backport discipline (#2330) | **Tighter upstream sync cadence** for agent-core fixes |
| Windows installer hardening (#2326, #2327) | **Signed portable/zip artifacts**; CI gate for signature verification |

## 7. User Feedback Summary
**Pain points** (from stale issues, still relevant):
- **i18n inconsistency**: Users see english labels for my own language** (#1389)
- **Can’t share full conversation** — long-image export cuts off (#1386)
- **Email setup feels broken** — test hangs, no timeout/error (#1388)
- **Scheduled tasks feel flaky** — edit→update sometimes no-ops (#1390)

**Positive signals** (from PRs merged today):
- Scroll behavior now respects user agency (#2329)
- Installer survives AV interference (#2326, #2327)
- Notifications become actionable, not just “task done” (#2318)
- Agent loop respects abort boundaries (#2330)

**Satisfaction proxy**: No new issues/PRs from community today → **low visible friction**, but stale closure may hide unresolved frustration.

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| **#1277** (dependabot: Electron 40→43) | 103 days | Major runtime upgrade; unblocks V8/security/features; blocks Windows ARM64, WebContentsView | **Assign reviewer**; run full e2e suite; plan major-version release |
| **#1388** (Email test hang) | 102 days | Core integration broken; users cannot validate config; survives restart → likely main-process deadlock | **Reopen & triage**; add timeout + cancellation; write regression test |
| **#1386** (Share truncation) | 102 days | Sharing is key viral loop; long chats = power users | **Reopen**; investigate canvas/puppeteer capture limits; consider paginated PDF fallback |
| **#1390** (Scheduled-task update flake) | 102 days | Automation reliability; “occasional” = hard to reproduce | **Reopen**; add integration test with clock mock; check race in task-store write |
| **#1389** (i18n label mismatch) | 102 days | Polish; low effort, high visibility | **Quick fix**: use native language names in selector (CLDR data) |

---

**Bottom line**: LobsterAI is in a **desktop-hardening phase** — installer, notifications, agent-loop, and browser-leak fixes shipped today. The **Electron 43 upgrade (#1277)** is the biggest pending lever for capability uplift. **Four stale-closed user bugs** (#1386, #1388, #1389, #1390) likely still affect users and deserve re-triage before next release.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-14

## 1. Today's Overview
Moltis shows **healthy maintenance velocity** with 11 PRs updated and 7 merged/closed in the last 24 hours, indicating active development and rapid bug resolution. The project is in a **stabilization phase** — most merged PRs are targeted fixes (browser tooling, MCP OAuth, CalDAV, model registration) rather than new features. No new release was cut today, but the volume of merged fixes suggests a patch release is imminent. Community engagement remains low on individual issues (0–1 comments each), signaling a core-contributor-driven workflow.

## 2. Releases
**No new releases published today.** The last release version is not included in the provided data. Given 7 merged PRs since the last release (mostly bug fixes and compatibility improvements), a **patch release (e.g., v0.x.y+1)** is likely within days.

## 3. Project Progress — Merged/Closed PRs (7)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#1120](https://github.com/moltis-org/moltis/pull/1120) | fix(mcp): use direct fetch for `resource_metadata` URL from WWW-Authenticate | MCP/OAuth | **High** — Fixes OAuth for Notion, Linear, and other servers using `resource_metadata` (closes #1119) |
| [#1136](https://github.com/moltis-org/moltis/pull/1136) | fix(agents): coerce stringified scalar tool args before validation | Agent tooling | **High** — Resolves breakage with smaller local models (Gemma 4, oMLX) emitting stringified scalars |
| [#1098](https://github.com/moltis-org/moltis/pull/1098) | fix(browser): tolerate null optional params in browser tool calls | Browser automation | **Medium** — Prevents deserialization errors from models sending explicit `null` for optional fields |
| [#1145](https://github.com/moltis-org/moltis/pull/1145) | fix(caldav): avoid panic on non-ASCII datetime in `normalise_datetime` | CalDAV integration | **Medium** — Fixes crash on internationalized datetime values from remote servers |
| [#1139](https://github.com/moltis-org/moltis/pull/1139) | fix(gateway): don't force-enable matrix-sdk via metrics feature | Build/CI | **Low** — Removes unwanted `matrix-sdk` dependency pull when only metrics are enabled |
| [#1089](https://github.com/moltis-org/moltis/pull/1089) | Cap persisted tool results before rehydration | Session history | **Medium** — Prevents context-window overflow during history rehydration across multiple chat paths |
| [#1146](https://github.com/moltis-org/moltis/pull/1146) | Add GPT-5.6 model support (Sol, Terra, Luna) | LLM catalog | **Medium** — Registers new OpenAI models with correct context windows (1.05M API / 372K ChatGPT) |

**Net progress**: Strong focus on **robustness for local/smaller models** (stringified args, null params) and **external integration reliability** (MCP OAuth, CalDAV, browser automation).

## 4. Community Hot Topics
| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#1132](https://github.com/moltis-org/moltis/issues/1132) | Bug | 1 comment, updated today | **Session lifecycle control** — Users cannot delete/archive the "main" session, blocking workspace hygiene and multi-project workflows |
| [#1102](https://github.com/moltis-org/moltis/issues/1102) | Feature | 1 comment, updated today | **Local STT sovereignty** — Request for FunASR/SenseVoice (offline, multilingual) as alternative to cloud STT; license clarification added 2026-07-14 |
| [#1124](https://github.com/moltis-org/moltis/pull/1124) | PR (open) | Updated today | **Automated context injection** — `chat.context_command` runs before each turn to inject runtime context (e.g., git status, env vars) without manual pasting |

**Pattern**: Users want **more control over session persistence** and **offline-capable, privacy-preserving pipelines** (STT, context injection).

## 5. Bugs & Stability — Reported Today
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#1119](https://github.com/moltis-org/moltis/issues/1119): MCP OAuth `invalid_target` for Notion/Linear | **Closed** | Fixed by [#1120](https://github.com/moltis-org/moltis/pull/1120) (merged) |
| **Medium** | [#1132](https://github.com/moltis-org/moltis/issues/1132): "main" session can't be deleted/archived | **Open** | No fix PR yet |
| **Low** | CalDAV panic on non-ASCII datetime | **Closed** | Fixed by [#1145](https://github.com/moltis-org/moltis/pull/1145) (merged) |
| **Low** | Browser tool calls fail on explicit `null` optional params | **Closed** | Fixed by [#1098](https://github.com/moltis-org/moltis/pull/1098) (merged) |
| **Low** | Agent validation fails on stringified scalar args from small models | **Closed** | Fixed by [#1136](https://github.com/moltis-org/moltis/pull/1136) (merged) |

**Stability signal**: All critical-path bugs (MCP OAuth, CalDAV panic, browser/agent tooling) have **fixes merged today**. Only remaining open bug is session-management UX (#1132).

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **FunASR/SenseVoice local STT engine** | [#1102](https://github.com/moltis-org/moltis/issues/1102) | Medium — License clarified; implementation non-trivial (toolkit, not single checkpoint) |
| **`chat.context_command` for pre-turn context injection** | [#1124](https://github.com/moltis-org/moltis/pull/1124) | High — PR open, schema/validation done; solves real deployment pain |
| **Per-channel/user activity log visibility** | [#1093](https://github.com/moltis-org/moltis/pull/1093) | Medium — PR open, granular settings designed; improves noise control |
| **Auto-screenshot after browser actions** | [#1135](https://github.com/moltis-org/moltis/pull/1135) | Medium — PR open; useful for debugging/visual history |
| **CalDAV `list_events` honor time range via server query** | [#1147](https://github.com/moltis-org/moltis/pull/1147) | High — PR open; fixes documented-but-broken behavior |

**Roadmap inference**: Next minor version will likely include **context commands**, **CalDAV range fix**, and **activity log controls**. Local STT remains a larger effort.

## 7. User Feedback Summary
- **Pain points**: 
  - Inability to manage "main" session (#1132) — blocks clean workspace separation
  - MCP OAuth broken for popular services (Notion, Linear) — now fixed
  - Small local models (Gemma 4, oMLX) emit non-standard tool calls — now handled
  - CalDAV crashes on international dates — now fixed
- **Use cases emerging**:
  - Deployments needing **automated per-turn context** (git, env, secrets) via `context_command`
  - **Offline/private STT** for sensitive audio (FunASR/SenseVoice)
  - **Visual browser automation traces** (auto-screenshots) for debugging agents
- **Satisfaction**: High responsiveness — 7 fixes merged same-day as reporting for critical bugs. Low community commentary suggests either small user base or issues resolved before escalation.

## 8. Backlog Watch — Needing Maintainer Attention
| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#1132](https://github.com/moltis-org/moltis/issues/1132) "main" session can't be deleted/archived | 26 days (created 2026-06-18) | **Medium** — UX dead end; blocks multi-project workflows; no PR yet |
| [#1102](https://github.com/moltis-org/moltis/issues/1102) FunASR/SenseVoice local STT | 40 days (created 2026-06-04) | **Low-Medium** — Complex integration; license clarified but no implementation started |
| [#1124](https://github.com/moltis-org/moltis/pull/1124) `chat.context_command` | 29 days (created 2026-06-15) | **Low** — PR open, feature-complete; needs review/merge |
| [#1093](https://github.com/moltis-org/moltis/pull/1093) Activity log visibility settings | 41 days (created 2026-06-03) | **Low** — PR open, well-designed; stale but valid |

**Recommendation**: Prioritize **#1132** (session management) and **#1124** (context command) for next sprint — both are high-value, low-complexity, and unblock real workflows.

---

*Data source: GitHub API (moltis-org/moltis) — issues/PRs updated 2026-07-13 → 2026-07-14. Digest generated 2026-07-14.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-07-14

---

## 1. Today's Overview

CoPaw (QwenPaw) is in a **high-velocity post-release stabilization phase** following the v2.0.0 launch. In the last 24 hours, the repository processed **50 issue updates (29 closed)** and **50 PR updates (34 merged/closed)**, indicating intense triage and bug-fix activity. The v2.0.0.post1 patch release shipped today addressing a browser autofill regression and legacy session handling. Dominant themes: **v2.0.0 regressions** (tool-message serialization breaking OpenAI API calls, sandbox over-restriction, goal/completion gate state leaks), **channel rendering granularity**, and **session lifecycle management**. Community feedback is loud but constructive—users are hitting real workflow blockers, and maintainers are responding with rapid fixes.

---

## 2. Releases

### v2.0.0.post1 (2026-07-14)
| Change | Details |
|--------|---------|
| **Version bump** | `chore: bump version to 2.0.0.post1` ([#6007](https://github.com/agentscope-ai/QwenPaw/pull/6007)) |
| **Bug fix** | `fix(models): prevent browser autofill on provider search input` ([#6011](https://github.com/agentscope-ai/QwenPaw/pull/6011)) |
| **Bug fix** | `fix: fix legacy session l…` (truncated in feed; likely session migration) |

**Migration notes**: Post-release patch only—no breaking changes. Users on v2.0.0 should upgrade to resolve the autofill UX issue and any legacy session deserialization problems.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Type | Summary | Linked Issue |
|----|------|---------|--------------|
| [#6093](https://github.com/agentscope-ai/QwenPaw/pull/6093) | **Bug fix** | Reset stop gates (`GoalTurnGate`, loop counters, doom-loop history) on `/new` and `/clear` — fixes stale `TERMINATE` bleeding into new conversations | [#6082](https://github.com/agentscope-ai/QwenPaw/issues/6082) |
| [#6069](https://github.com/agentscope-ai/QwenPaw/pull/6069) | **Bug fix** | Prevent TUI crash when clicking streaming assistant output (Textual 8.2.8 compositor race) | [#6008](https://github.com/agentscope-ai/QwenPaw/issues/6008) |
| [#6021](https://github.com/agentscope-ai/QwenPaw/pull/6021) | **Perf** | Batch session history migration writes (single SQLite transaction per session) — cuts large migration from minutes to seconds | — |
| [#6060](https://github.com/agentscope-ai/QwenPaw/pull/6060) | **Chore** | Update `reme-ai` dependency to 0.4.1.0 | [#5950](https://github.com/agentscope-ai/QwenPaw/issues/5950) |
| [#5953](https://github.com/agentscope-ai/QwenPaw/pull/5953) | **Bug fix** | Unify scroll-mode tool result truncation under `ToolResultPruningMiddleware` — fixes duplicate recall prompts & `ToolResultLimiter` scroll issues | [#5946](https://github.com/agentscope-ai/QwenPaw/issues/5946), [#5929](https://github.com/agentscope-ai/QwenPaw/issues/5929), [#6009](https://github.com/agentscope-ai/QwenPaw/issues/6009) |
| [#6091](https://github.com/agentscope-ai/QwenPaw/pull/6091) | **Bug fix** | MCP driver migration: convert `${VAR}` header refs to env credential refs (was sending literal `${VAR}` → 401s) | [#6029](https://github.com/agentscope-ai/QwenPaw/issues/6029) |

**Velocity signal**: 34 PRs merged/closed in 24h — majority are v2.0.0 regression fixes and infrastructure hardening.

---

## 4. Community Hot Topics (Most-Commented Issues/PRs)

| Item | Comments | Core Need |
|------|----------|-----------|
| [#5996](https://github.com/agentscope-ai/QwenPaw/issues/5996) **CLOSED** — `MODEL_EXECUTION_ERROR` in 2.0.0 conversations | 11 | **Tool-message serialization bug**: `_hint.py` creates assistant message with `ToolResultBlock` but no `tool_calls`; OpenAI formatter emits `role=tool` without preceding `tool_calls` → 400. Blocking all OpenAI-compatible providers. |
| [#5879](https://github.com/agentscope-ai/QwenPaw/issues/5879) **CLOSED** — Add sandbox toggle | 7 | **Sandbox over-restriction**: v2.0.0 enforces sandbox on trusted/self-hosted devices, blocking `pip install`, system libs. Users need **opt-out or per-agent sandbox policy**. |
| [#5961](https://github.com/agentscope-ai/QwenPaw/issues/5961) **OPEN** — v2.0.0 agent write/delete loop with qwen3.7-plus | 7 | **Agent loop regression**: Agent repeats write→delete→write→delete indefinitely on simple tasks. Suggests tool-calling or loop-gate logic broken in 2.0.0. |
| [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) **OPEN** — SSH Offline & Profiles 404 in v2.0.0 | 6 | **Feature regression**: Critical v1.1.12 features (SSH Offline, Profiles) return 404 in Desktop app. Migration path missing. |
| [#6055](https://github.com/agentscope-ai/QwenPaw/issues/6055) **OPEN** — Env vars not passed to agents (Docker) + frontend config sync broken | 5 | **Config propagation failure**: `SUMMARIZE_WHEN_COMPACT=false` via docker-compose ignored; frontend doesn't read local config. |
| [#6087](https://github.com/agentscope-ai/QwenPaw/issues/6087) **CLOSED** — Real-time user message injection into agent loop | 4 | **Interruption UX**: Users want to correct agent mid-iteration without waiting for full turn completion. Architectural change needed. |
| [#6023](https://github.com/agentscope-ai/QwenPaw/issues/6023) **OPEN** (Tracking) — Sandbox & Tool Guard Overhaul | 3 👍2 | **Meta-issue**: Collecting feedback to redesign sandbox/tool-guard for usability without sacrificing safety. **High maintainer attention**. |

**Underlying pattern**: v2.0.0 introduced **safety-by-default** (sandbox, tool guards, goal gates) that broke **power-user workflows** (SSH, local dev, long-running shells). Community is asking for **granular controls**, not removal.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#5996](https://github.com/agentscope-ai/QwenPaw/issues/5996) `MODEL_EXECUTION_ERROR`: `tool` message without preceding `tool_calls` — breaks all OpenAI-compatible providers | **Closed** | Likely fixed in [#5953](https://github.com/agentscope-ai/QwenPaw/pull/5953) (unified pruning middleware) or pending |
| **Critical** | [#6082](https://github.com/agentscope-ai/QwenPaw/issues/6082) `/goal` completion leaves `TERMINATE` gate active → blocks all subsequent chat | **Closed** | [#6093](https://github.com/agentscope-ai/QwenPaw/pull/6093) merged |
| **Critical** | [#5961](https://github.com/agentscope-ai/QwenPaw/issues/5961) Agent write/delete infinite loop on qwen3.7-plus | **Open** | No fix PR yet |
| **High** | [#6055](https://github.com/agentscope-ai/QwenPaw/issues/6055) Docker env vars not propagated to agents; frontend config desync | **Open** | No fix PR yet |
| **High** | [#6049](https://github.com/agentscope-ai/QwenPaw/issues/6049) Multi-turn → `Model 'unknown' execution failed: invalid params, 400` | **Closed** | Likely same root as #5996 |
| **High** | [#6056](https://github.com/agentscope-ai/QwenPaw/issues/6056) Background offload kills subprocess immediately — ignores LLM `timeout` | **Open** | No fix PR yet |
| **Medium** | [#6008](https://github.com/agentscope-ai/QwenPaw/issues/6008) TUI crash on mouse click during streaming | **Closed** | [#6069](https://github.com/agentscope-ai/QwenPaw/pull/6069) merged |
| **Medium** | [#5979](https://github.com/agentscope-ai/QwenPaw/issues/5979) Electron CLI fails in sandbox (runs as root, `--no-sandbox` blocked) | **Closed** | Workaround needed; no PR linked |
| **Medium** | [#6042](https://github.com/agentscope-ai/QwenPaw/issues/6042) Sandbox shell misses venv `PATH` injection → `python`/`pip` resolve to system | **Closed** | No fix PR yet |
| **Medium** | [#6074](https://github.com/agentscope-ai/QwenPaw/issues/6074) Switching agents in Console loses session context | **Open** | No fix PR yet |

**Stability takeaway**: v2.0.0 has **multiple critical regressions** in core message serialization, gate state management, and config propagation. Patch velocity is high but several blockers remain open.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for v2.1? | Rationale |
|---------|-------|-----------|-----------|
| **Sandbox toggle / per-agent policy** | [#5879](https://github.com/agentscope-ai/QwenPaw/issues/5879) | **High** | 7 comments, closed but tracking issue [#6023](https://github.com/agentscope-ai/QwenPaw/issues/6023) created for overhaul |
| **Session grouping + import/export** | [#5903](https://github.com/agentscope-ai/QwenPaw/issues/5903) | **Medium** | 5 comments; UX gap for power users managing many sessions |
| **Split channel controls: tool calls vs. outputs** | [#5976](https://github.com/agentscope-ai/QwenPaw/issues/5976) | **High** | PR [#6096](https://github.com/agentscope-ai/QwenPaw/pull/6096) **open today** — actively being built |
| **Real-time user message injection into agent loop** | [#6087](https://github.com/agentscope-ai/QwenPaw/issues/6087) | **Low** | Architectural change; closed as feature request but signals demand for interruptible agents |
| **SSH Offline / Profiles restoration** | [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) | **High** | Regression from v1.1.12; 404s break existing workflows |
| **Windows sandbox (restricted token)** | [#5931](https://github.com/agentscope-ai/QwenPaw/pull/5931) | **Medium** | PR open since 07-10; new backend for non-Landlock Windows |
| **Generic webhook channel** | [#5716](https://github.com/agentscope-ai/QwenPaw/pull/5716) | **Medium** | PR open since 07-02; generic integration point requested since [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) |
| **Win7 / non-Tauri variant** | [#6076](https://github.com/agentscope-ai/QwenPaw/issues/6076) | **Low** | Niche but vocal; Tauri drops Win7 — may need Electron fallback |

**Roadmap prediction**: Next minor (v2.1) will likely ship **sandbox policy granularity**, **channel rendering split**, **session grouping**, and **SSH/Profile restoration**. Interruptible agent loop is a v3.0 candidate.

---

## 7. User Feedback Summary

| Sentiment | Evidence |
|-----------|----------|
| **Frustration with v2.0.0 regressions** | "升级到2.0版后出现了很多意想不到的情况" ([#6034](https://github.com/agentscope-ai/QwenPaw/issues/6034)) — WeChat/Feishu internal errors, hallucinated tool calls, `MODEL_EXECUTION_ERROR` spam |
| **Sandbox feels paternalistic** | "沙盒严重限制了agent的能力，且无法关闭" ([#5879](https://github.com/agentscope-ai/QwenPaw/issues/5879)) — Trusted self-hosted users blocked from `pip install`, system access |
| **Missing migration path for v1 features** | SSH Offline, Profiles → 404 ([#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980)) — "Critical for my workflow" |
| **Config system unreliable** | Docker env vars ignored; frontend reads stale config ([#6055](https://github.com/agentscope-ai/QwenPaw/issues/6055)) |
| **Appreciation for rapid fixes** | Multiple issues closed same-day; tracking issue [#6023](https://github.com/agentscope-ai/QwenPaw/issues/6023) shows maintainers listening |
| **Power-user depth** | Requests for session grouping, webhook channels, Win7 support, real-time injection — indicates **advanced production usage** |

**Net**: Users **value the agent engine** but **v2.0.0 broke trust** on stability and configurability. Goodwill preserved by fix velocity.

---

## 8. Backlog Watch (Stale / High-Impact Items Needing Attention)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) **In-chat observability for running shell commands** (kill/extend timeout) | Open since 2026-05-12 | **UX gap**: Users blind to long-running commands; approval card only pre-execution. 3 👍, no PR. |
| [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) **Windows computer-use (UIA + Tauri Control Mode)** | Open since 2026-06-14 | **Major feature**: Desktop automation. Large PR, needs review. |
| [#5882](https://github.com/agentscope-ai/QwenPaw/pull/5882) **OMP workflow modes bundle (UltraQA, Ralph, Autopilot, Team)** | Open since

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-14

## 1. Today's Overview
ZeroClaw showed **very high velocity** today with **50 issues** and **50 PRs** updated in 24 hours. The project is in a **release-closeout phase for v0.8.3** — six child trackers have closed, final validation remains. Active work clusters around: **security hardening** (SSRF gates, Landlock sandbox fixes, OAuth credential isolation), **channel parity** (Slack thread hydration, mirror-channel plugins, LINE feature coverage), **observability/gateway** (OpenAI-compatible endpoint, in-flight prompt counters, lifecycle events), and **core runtime stability** (provider diagnostics, Windows signal handling, model-cache writes). No new release shipped today.

## 2. Releases
**No new releases** published today. The v0.8.3 milestone is feature-frozen; `CHANGELOG-next.md` was added in [#9054](https://github.com/zeroclaw-labs/zeroclaw/pull/9054) summarizing 379 non-merge commits since v0.8.2. Final release validation and publication are the last open steps ([#7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320)).

## 3. Project Progress — Merged / Closed PRs Today
| PR | Area | Change |
|----|------|--------|
| [#8961](https://github.com/zeroclaw-labs/zeroclaw/pull/8961) | doctor/runtime | 20s timeout on model probing; partial results shown on hang |
| [#8939](https://github.com/zeroclaw-labs/zeroclaw/pull/8939) | web | Eliminate horizontal scrollbar on left sidebar rail |
| [#9044](https://github.com/zeroclaw-labs/zeroclaw/pull/9044) | tools/google_workspace | Fix camelCase method validation (batchUpdate) |
| [#7694](https://github.com/zeroclaw-labs/zeroclaw/pull/7694) | memory/tests | Deterministic storage-reader timestamp/ordering coverage |
| [#7693](https://github.com/zeroclaw-labs/zeroclaw/pull/7693) | zerocode/tests | Cover insecure-TLS confirmation flow |
| [#7690](https://github.com/zeroclaw-labs/zeroclaw/pull/7690) | provider/tests | responses-wire option propagation coverage |
| **Trackers closed** | v0.8.3 | [#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) observability/CI/docs, [#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071) runtime/agent/tools, [#8360](https://github.com/zeroclaw-labs/zeroclaw/issues/8360) provider serialization, [#8362](https://github.com/zeroclaw-labs/zeroclaw/issues/8362) channel parity, [#8070](https://github.com/zeroclaw-labs/zeroclaw/issues/8070) gateway/web/ZeroCode, [#8363](https://github.com/zeroclaw-labs/zeroclaw/issues/8363) config-driven policy |

## 4. Community Hot Topics (Most Comments / Reactions)
| Issue | Comments | 👍 | Core Need |
|-------|----------|----|-----------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) RFC: Work Lanes, Board Automation, Label Cleanup | 14 | 0 | **Governance**: Automate work routing without manual board maintenance; accepted, rollout in progress since 0.8.0-beta-1 |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) Per-sender RBAC for multi-tenant deployments | 10 | 0 | **Security/MT**: Isolate workspaces, tool sets, rate limits, system prompts per user class (customers/operators/devs) |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) RFC: Lighter core via external integrations (skills/MCP/CLI) | 9 | 0 | **Architecture**: Move long-tail integrations out of core; define safe replacement paths |
| [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) Slack: hydrate thread context on first mention | 7 | 0 | **UX**: Backfill prior thread history via `conversations.replies` so first @-mention has context |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) Local-First Mode for small models | 5 | 2 | **Local LLM**: Compact no-tools prompt, strict parser, no prompt leakage — solves real pain for small local models |

**Signal**: Contributors are pushing **multi-tenancy**, **core lean-ness**, and **channel UX parity** — all accepted RFCs with active implementation.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)
| Issue | Severity | Component | Status | Fix PR |
|-------|----------|-----------|--------|--------|
| [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) Landlock blocks shell access to `/dev/null` on Fedora | **S1** (workflow blocked) | runtime/daemon | Accepted, high risk | — |
| [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) Docker Compose gateway loopback-bound behind published port | **S1** | runtime/daemon | Accepted, high risk | — |
| [#9052](https://github.com/zeroclaw-labs/zeroclaw/issues/9052) `channel-line` omitted from `channels-full` & CI coverage | **S1** | tooling/ci | Accepted, high risk | [#9053](https://github.com/zeroclaw-labs/zeroclaw/pull/9053) ✅ |
| [#9046](https://github.com/zeroclaw-labs/zeroclaw/issues/9046) `models_cache.json` read but never written | **S2** | channel | Accepted | — |
| [#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028) Ctrl+C on Windows forces exit (code 1073741510) | **S2** | runtime/channel:cli | Accepted, high risk | — |
| [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) Channel runtime replies bypass Fluent localization | **S3** | channel | Accepted, medium risk | — |
| [#9019](https://github.com/zeroclaw-labs/zeroclaw/issues/9019) OpenAI Responses provider vision capability | **P1** | provider:openai | Needs author action | [#9029](https://github.com/zeroclaw-labs/zeroclaw/pull/9029) |

**Note**: Three S1 bugs landed today; two already have fix PRs open.

## 6. Feature Requests & Roadmap Signals
| Issue / PR | Signal | Likelihood for v0.8.3 / Next |
|------------|--------|------------------------------|
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) Per-sender RBAC | **Multi-tenant foundation** — high priority, accepted, high risk | Likely **v0.8.4+** (large surface) |
| [#8855](https://github.com/zeroclaw-labs/zeroclaw/pull/8855) / [#8857](https://github.com/zeroclaw-labs/zeroclaw/pull/8857) Mirror built-in channels via plugin `provides` | **Plugin parity** — owner-gate + env credential fallback | **v0.8.3** (PRs open, XL/M size) |
| [#8969](https://github.com/zeroclaw-labs/zeroclaw/pull/8969) Slack thread context hydration | Directly implements [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) | **v0.8.3** (XL, needs author action) |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) OpenAI Chat Completions gateway endpoint | **Interop** — enables LangChain, Continue, Aider, OpenAI SDK | **v0.8.3** (XL, needs author action) |
| [#8916](https://github.com/zeroclaw-labs/zeroclaw/pull/8916) Emit agent lifecycle events for channel/daemon turns | **Observability parity** — unblocks Prometheus/OTel/events API | **v0.8.3** (XL) |
| [#9022](https://github.com/zeroclaw-labs/zeroclaw/issues/9022) Slack Events API (HTTP Request URL) for scale-to-zero | **Infra** — alternative to polling/Socket Mode | **Post-v0.8.3** (design discussion) |
| [#8852](https://github.com/zeroclaw-labs/zeroclaw/pull/8852) Run installed WASM channel plugins | **Extensibility** — first real caller for `WasmChannel` | **v0.8.3** (M) |
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) RFC: Separate conversation history from long-term memory | **Architecture** — clean lifecycle split | **v0.8.4+** (new RFC, high risk) |

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Landlock sandbox breaks shell on Fedora** | [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) — `sh` cannot access `/dev/null` | Blocks all shell tool usage on Fedora; S1 |
| **Docker gateway unreachable despite published port** | [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) — loopback bind inside container | Deployment blocker for Compose users; S1 |
| **Windows Ctrl+C kills agent uncleanly** | [#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028) — exit code 1073741510 | Poor CLI UX on Windows; S2 |
| **Slack thread context missing on first mention** | [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) — must re-mention for every message | Forces repetitive @-mentions; workaround exists but tedious |
| **Model cache never written — `zeroclaw models refresh` hint useless** | [#9046](https://github.com/zeroclaw-labs/zeroclaw/issues/9046) — file always absent | Confusing CLI feedback; degraded behavior |
| **google_workspace rejects valid camelCase API methods** | [#9044](https://github.com/zeroclaw-labs/zeroclaw/issues/9044) — `batchUpdate` fails validation | Blocks legitimate Google Workspace API calls |
| **Channel replies hard-coded English despite locale config** | [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) — Fluent bypassed | i18n regression for non-English users |

**Positive signals**: Contributors actively filing detailed bugs with reproduction steps; PRs for fixes appear quickly (e.g., [#9053](https://github.com/zeroclaw-labs/zeroclaw/pull/9053) for [#9052](https://github.com/zeroclaw-labs/zeroclaw/issues/9052) same day).

## 8. Backlog Watch — Long-Open / Stalled Items Needing Maintainer Attention
| Issue / PR | Age | Status | Why It Matters |
|------------|-----|--------|----------------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) RFC: Work Lanes / Board Automation | ~2 months | In-progress, accepted | Governance foundation; unblocks automated triage |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) Per-sender RBAC | ~3 months | Accepted, high risk | Multi-tenant security; no PR yet |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) RFC: Lighter core via external integrations | ~3 months | In-progress, accepted | Architectural direction; affects plugin/skill strategy |
| [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) Slack thread hydration | ~3 months | Accepted | PR [#8969](https://github.com/zeroclaw-labs/zeroclaw/pull/8969) open but XL + needs-author-action |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) Local-First Mode | ~3.5 months | Accepted, high risk | Critical for small-model users; no implementation PR visible |
| [#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358) zerorelay milestone tracker | ~3 weeks | Open, no-stale | Secure transport plane for NAT traversal; coordination tracker |
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) Persistent memory parity tracker | ~5 days | In-progress, needs-maintainer

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*