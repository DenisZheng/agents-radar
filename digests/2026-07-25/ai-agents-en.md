# OpenClaw Ecosystem Digest 2026-07-25

> Issues: 463 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-25 02:04 UTC

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

# OpenClaw Project Digest — 2026-07-25

## 1. Today's Overview
OpenClaw exhibits **exceptionally high velocity** with 463 issues and 500 PRs updated in the last 24 hours. The merge rate is remarkable: **297 PRs merged/closed** versus 203 still open, indicating a strong throughput pipeline. No new release was cut today, but the volume of merged fixes (many targeting P0/P1 stability bugs, provider integrations, and session-state integrity) suggests a release candidate is imminent. The issue backlog shows a heavy concentration of **session-state bugs, provider regressions, and compaction/timeout pathologies** — the core reliability surface. Community engagement is deep: top issues carry 10–16 comments each, with maintainers actively triaging (`clawsweeper` labels everywhere).

## 2. Releases
**No new releases published today.** The last release cycle appears to be the 2026.7.x series (referenced in issues #107220, #111519, #112906). Given 297 PRs merged today — including critical fixes for gateway crash-loops (#107220), SQLite snapshot integrity (#113306/#113459), Anthropic OAuth refresh (#113395), and MCP schema compatibility (#113162) — a **2026.7.3 or 2026.7.2 stable** release is likely within days.

## 3. Project Progress (Merged/Closed PRs Today)
297 PRs merged/closed. Highlights from the visible set (all merged/closed today per data):

| PR | Scope | Impact |
|----|-------|--------|
| [#113450](https://github.com/openclaw/openclaw/pull/113450) | `feat(ui): render chat notice rows as markdown` | UX polish for Control UI system notices |
| [#113226](https://github.com/openclaw/openclaw/pull/113226) | `fix: workflow sanity audit passes on main` | CI unblock — prevents spurious workflow failures |
| [#112631](https://github.com/openclaw/openclaw/pull/112631) | `fix(uninstall): remove shell-completion block` | Clean uninstall hygiene |
| [#112452](https://github.com/openclaw/openclaw/pull/112452) | `fix(hooks): kill gog process tree on gmail-watcher shutdown` | Prevents orphaned child processes |
| [#98528](https://github.com/openclaw/openclaw/pull/98528) | `[Bug]: Tool output returns empty after first call` | **P1 regression fix** (2026.6.11 →) for exec/web_fetch/web_search |
| [#107220](https://github.com/openclaw/openclaw/pull/107220) | `2026.7.1 gateway crash-loop: legacy memory sidecar conflicts` | **P0 crash-loop fix** — auto-resolve `meta`/`chunks` like `files` |
| [#110950](https://github.com/openclaw/openclaw/pull/110950) | `Everything is a cron — unify heartbeat, watchers, scheduled automation` | **Architectural feature** — cron unification (closed, likely merged) |

*Many more merged PRs not individually listed (297 total) — the visible sample shows a bias toward **stability, provider hardening, and session-state correctness**.*

## 4. Community Hot Topics (Most Active Issues/PRs)

| Issue | Comments | 👍 | Core Pain Point |
|-------|----------|-----|-----------------|
| [#102020](https://github.com/openclaw/openclaw/issues/102020) | 16 | 1 | **Cross-channel session init conflict**: 2nd message fails with "reply session initialization conflicted" (Signal, Discord) |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) | 14 | 2 | **Active Memory + Codex path**: severe latency, hook timeouts, startup aborts, gateway event-loop stalls — 🦞 *diamond lobster* |
| [#94228](https://github.com/openclaw/openclaw/issues/94228) | 14 | 2 | **Native Anthropic `thinking` block replay bricks long tool threads** — `Invalid signature` 400 — 🐚 *platinum hermit* |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) | 13 | 3 | **180s compaction timeout is a single wall-clock** — no partial progress reuse, converts slow compaction into permanent failure — 🦞 *diamond lobster* |
| [#107220](https://github.com/openclaw/openclaw/issues/107220) | 10 | 1 | **Gateway crash-loop on upgrade** — legacy `meta`/`chunks` conflicts fatal vs `files` auto-resolve — **P0** 🦞 *diamond lobster* |
| [#110950](https://github.com/openclaw/openclaw/issues/110950) | 10 | 2 | **Unify automation around cron** — heartbeat, watchers, scheduled jobs → single primitive — 🌊 *off-meta tidepool* |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | 10 | 2 | **Session context bloat**: bootstrap files re-injected every turn, wasting 20–30% tokens — 🦞 *diamond lobster* |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | 10 | 4 | **Filesystem sandboxing config** (`tools.fileAccess`) — security hardening — 🦞 *diamond lobster* |

**Underlying needs**: 
- **Session reliability** (init conflicts, compaction timeouts, state corruption on upgrade) dominates.
- **Provider-specific pathologies** (Anthropic `thinking` blocks, Codex/OAuth fallbacks, Active Memory latency) are acute.
- **Token efficiency** (bootstrap re-injection) and **security sandboxing** are high-value feature asks.

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? | Summary |
|----------|-------|--------|---------|---------|
| **P0** | [#107220](https://github.com/openclaw/openclaw/issues/107220) | CLOSED | Likely merged | Gateway crash-loop on 2026.7.1 upgrade: legacy `meta`/`chunks` conflicts fatal |
| **P0** | [#90378](https://github.com/openclaw/openclaw/issues/90378) | OPEN | [#95333](https://github.com/openclaw/openclaw/pull/95333) (open) | Cron store migrated to SQLite silently; new jobs default to `delivery.mode=announce` causing channel errors — 🐚 *platinum hermit* |
| **P1** | [#86996](https://github.com/openclaw/openclaw/issues/86996) | OPEN | — | Active Memory + Codex: latency, timeouts, startup aborts, event-loop stalls — 🦞 *diamond lobster* |
| **P1** | [#94228](https://github.com/openclaw/openclaw/issues/94228) | OPEN | — | Native Anthropic `thinking` block replay bricks long tool threads — 🐚 *platinum hermit* |
| **P1** | [#92043](https://github.com/openclaw/openclaw/issues/92043) | OPEN | — | 180s compaction timeout = single wall-clock, no partial reuse — 🦞 *diamond lobster* |
| **P1** | [#102020](https://github.com/openclaw/openclaw/issues/102020) | OPEN | — | 2nd message in session fails: "reply session initialization conflicted" (cross-channel) |
| **P1** | [#111519](https://github.com/openclaw/openclaw/issues/111519) | OPEN | — | Telegram DM replies fall back after stale DM-scope cleanup (2026.7.2-beta.3 regression) — 🦐 *gold shrimp* |
| **P1** | [#111498](https://github.com/openclaw/openclaw/issues/111498) | OPEN | — | Main agent blocked by persistent workspace-state migration after Anthropic auth recovery — 🦐 *gold shrimp* |
| **P1** | [#94251](https://github.com/openclaw/openclaw/issues/94251) | OPEN | — | Ollama remote provider streaming not consumed — `model_call:started` never progresses — 🐚 *platinum hermit* |
| **P1** | [#45494](https://github.com/openclaw/openclaw/issues/45494) | OPEN | — | Cron jobs silently time out during sustained LLM API outages instead of fast-failing — 🐚 *platinum hermit* |
| **P1** | [#47975](https://github.com/openclaw/openclaw/issues/47975) | OPEN | — | Subagent sessions persist after completion, main session unresponsive — 🐚 *platinum hermit* |
| **P1** | [#45224](https://github.com/openclaw/openclaw/issues/45224) | OPEN | — | Unhandled Playwright assertion in `CRSession._onMessage` crashes Gateway — 🐚 *platinum hermit* |
| **P2** | [#98528](https://github.com/openclaw/openclaw/issues/98528) | CLOSED | Merged today | Tool output (exec, web_fetch, web_search) returns empty after first call per turn (2026.6.11 regression) |
| **P2** | [#67419](https://github.com/openclaw/openclaw/issues/67419) | OPEN | — | Bootstrap files re-injected every turn, wasting 20–30% tokens — 🦞 *diamond lobster* |
| **P2** | [#57256](https://github.com/openclaw/openclaw/issues/57256) | OPEN | — | `openclaw status` falsely reports `openclaw-mem0` unavailable when gateway plugin works — 🐚 *platinum hermit* |
| **P2** | [#96007](https://github.com/openclaw/openclaw/issues/96007) | OPEN | — | Discord: subsequent message content truncated after inline error text — 🐚 *platinum hermit* |
| **P2** | [#112906](https://github.com/openclaw/openclaw/issues/112906) | OPEN | — | ```` ` renders broken in v2026.7.1 (rich messages regression) |
| **New P1** | [#113306](https://github.com/openclaw/openclaw/issues/113306) | OPEN | [#113459](https://github.com/openclaw/openclaw/pull/113459) (open) | SQLite snapshot restore lacks end-to-end crash/identity guarantees — 🦪 *silver shellfish* |

**Pattern**: Session-state corruption (upgrade migrations, compaction, subagent cleanup), provider-specific regressions (Anthropic, Codex, Ollama), and silent failures (cron timeouts, status misreporting) are the dominant stability risks.

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signal | Likelihood for Next Version |
|-------|----------|--------|----------------------------|
| [#110950](https://github.com/openclaw/openclaw/issues/110950) | P2 | **Unify all automation around cron** — heartbeat, watchers, scheduled jobs → single primitive with dynamic cadence, HEARTBEAT.md as per-job scratch | **High** — closed today, likely merged; architectural shift |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | P2 | **Filesystem sandboxing config** (`tools.fileAccess.allowedPaths/denyPaths`) — security hardening | **High** — 🦞 *diamond lobster*, 4 👍, needs security review |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | P2 | **Fully dynamic model discovery** (OpenRouter + beyond) — replace static catalog | **High** — maintainer-labeled, 3 👍, auth-provider impact |
| [#7524](https://github.com/openclaw/openclaw/issues/7524) | P2 | **groupScope option** to consolidate group sessions into main (like `dmScope: "main"`) | **Medium** — 4 👍, session-state impact, recovery-stuck |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | P3 | **YAML config support** alongside JSON5 — readability, DevOps alignment | **Medium** — 2 👍, stable, ux-friction |
| [#12219](https://github.com/openclaw/openclaw/issues/12219) | P2 | **Skill Permission Manifest Standard** (`skill.yaml`) — declare permissions, informed consent | **Medium** — security, needs security review |
| [#38520](https://github.com/openclaw/openclaw/issues/38520) | P2 | **Pre-compaction agent notification** + structured handoff window + deferral mechanism | **Medium** — session-state, recovery-stuck |
| [#47597](https://github.com/openclaw/openclaw/issues/47597) | P2 | **streamTo="parent" for runtime="subagent"** (currently only ACP) | **Low-Medium** — 0 👍, specific workflow |
| [#6599](https://github.com/openclaw/openclaw/issues/6599) | P3 | **`/models test-fallback` command** to verify fallback chain without real failure | **Low** — recovery-stuck, auth-provider |
| [#10944](https://github.com/openclaw/openclaw/issues/10944) | P2 | **Telegram `parseMode` config** (Markdown/HTML/plain) | **Low** — ux-friction, 0 👍 |
| [#8724](https://github.com/openclaw/openclaw/issues/8724) | P2 | **Per-model generation timeout config** (stop Gemini Flash thinking loops) | **Low** — auth-provider, ux-friction |
| [#9637](https://github.com/openclaw/openclaw/issues/9637) | P2 | **Accessibility config** to disable emojis/unicode in TUI (screenreader support) | **Low** — ux-friction, 0 👍 |
| [#46812](https://github.com/openclaw/openclaw/issues/46812) | P2 | **Pinned context panel in Control UI** for persistent facts | **Low** — ux-friction, 1 👍 |
| [#46058](https://github.com/openclaw/opencl

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant OSS Ecosystem (2026-07-25)

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source landscape shows **bimodal maturity**: a cluster of high-velocity projects (OpenClaw, IronClaw, ZeroClaw, CoPaw, LobsterAI, Hermes Agent, NanoBot) pushing toward 1.0-class releases with architectural unification, and a long tail of specialized or early-stage forks (PicoClaw, NanoClaw, ZeptoClaw, Moltis) focusing on niche channels or embedded use cases. **Session-state reliability, provider integration hardening, and Windows desktop distribution** are the dominant cross-cutting concerns. Release cadences are accelerating—four projects cut releases in the last 48 hours—while governance processes (RFCs, ADRs, AI-assisted review) are formalizing in the largest repos. Community engagement remains maintainer-driven; external contributor volume is low outside OpenClaw and CoPaw.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Release Status | Health Score (1–5) |
|---------|--------------|-----------|---------------|----------------|-------------------|
| **OpenClaw** | 463 | 500 | 297 | Imminent (2026.7.x) | 5 — Exceptional throughput, deep triage |
| **IronClaw** | 32 | 50 | 19 | v1.0.0-rc prep | 5 — Launch-blocker closure, architectural epics |
| **ZeroClaw** | 47 | 50 | 10 | v0.9.0 milestone | 5 — High velocity, stacked PRs, RFC governance |
| **CoPaw (QwenPaw)** | 50 | 36 | ~15 | **v2.0.1 shipped today** | 4 — Rapid iteration but critical regressions |
| **LobsterAI** | 19* | 50 | 43 | **2026.7.23 (2 days ago)** | 4 — Fast fixes, stale backlog, security debt |
| **Hermes Agent** | 50 | 50 | 8 PRs / 18 issues | v0.19.0 (stale) | 4 — Windows crisis cluster, encoding debt |
| **NanoBot** | 2 resolved | 24 | 20 | v0.3.0 prep | 4 — WebUI-first polish, architectural debt |
| **PicoClaw** | 3 | 8 | 7 | v0.3.1 (stable) | 3 — Steady maintenance, stale-closure risk |
| **NanoClaw** | 0 | 7 | 1 (wrong PR) | Stable | 3 — Internal refinement, no community signal |
| **ZeptoClaw** | 1 | 2 | 1 | None | 3 — Low volume, high impact, CI broken |
| **Moltis** | 0 | 2 | 0 | None | 2 — Dormant feedback loop |
| **NullClaw** | 0 | 0 | 0 | None | 1 — Inactive |
| **TinyClaw** | 0 | 0 | 0 | None | 1 — Inactive |

*LobsterAI: 19 open issues updated recently; total issue count not specified.

**Health Score Rubric**: 5=High velocity + release discipline + community triage; 4=High velocity but stability/regression risk; 3=Steady maintenance, low external engagement; 2=Quiet, reviewer bottleneck; 1=Inactive.

---

## 3. OpenClaw's Position

**Advantages vs. Peers**
- **Scale of throughput**: 463 issues / 500 PRs / 297 merges in 24h dwarfs all others (next: IronClaw/ZeroClaw at ~50/50/10–20).
- **Triage maturity**: `clawsweeper` labels, P0/P1 classification, and 10–16 comment threads on top issues indicate a **professionalized incident process** absent in most peers.
- **Provider & channel breadth**: Native fixes for Anthropic `thinking` blocks, Codex/OAuth, Ollama, Telegram, Discord, Signal, Slack—most projects support 2–3 channels max.
- **Architectural scope**: Cron unification (#110950), session-state compaction, gateway memory sidecars, SQLite snapshot integrity—OpenClaw is solving **platform-level primitives** others build workarounds for.

**Technical Approach Differences**
- **Monolithic core with plugin boundaries** vs. IronClaw/ZeroClaw’s "everything is a plugin" (Wasmtime/WIT) or NanoBot’s WebUI-first agent loop.
- **Session-state as first-class citizen**: Compaction, bootstrap re-injection, cross-channel init conflicts are explicit engineering targets; peers treat session as ephemeral.
- **Upgrade safety**: Auto-resolution of legacy `meta`/`chunks` conflicts (#107220) vs. Hermes/IronClaw’s catastrophic Windows update failures.

**Community Size**
- **Largest active contributor base** (implied by comment depth, `clawsweeper` bot, 297 merges/day).
- Only project with **sustained external triage participation** (10+ comment threads with non-maintainers).
- CoPaw has high issue volume but driven by single-user feature batches; OpenClaw’s issues are diverse, user-reported regressions.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Session-state reliability** | OpenClaw, Hermes, CoPaw, ZeroClaw, IronClaw | Compaction timeouts (OpenClaw #92043), subagent cleanup (OpenClaw #47975), context serialization (CoPaw #6407), state.db corruption (Hermes #68474), cron delivery (ZeroClaw #9340) |
| **Provider integration hardening** | OpenClaw, NanoBot, Hermes, LobsterAI, CoPaw, ZeptoClaw | Anthropic `thinking` replay (OpenClaw #94228), Ollama streaming (OpenClaw #94251, NanoBot #4867), DeepSeek/Ali BaiLian schema (LobsterAI #1813, #1988), MCP tool resolution (CoPaw #6405, NanoBot #4858) |
| **Windows desktop distribution** | Hermes, LobsterAI, IronClaw, OpenClaw | Unsigned binary Smart App Control block (Hermes #50210, LobsterAI #2327), installer failures (ZeroClaw #9290, Hermes #60144), AV false positives (LobsterAI #2326) |
| **Encoding/Unicode correctness** | Hermes, ZeroClaw, NanoBot | BOM handling (Hermes #10878, #65123), cp1252 vs UTF-8 (Hermes #42785), MQTT TLS defaults (PicoClaw #3246) |
| **MCP/ACP ecosystem maturity** | OpenClaw, NanoBot, Hermes, CoPaw, ZeroClaw, IronClaw | Lazy loading (Hermes #66473), lifecycle extraction (NanoBot #4858), resource/blob exchange (ZeroClaw #9195), tool budgeting (IronClaw #6524) |
| **Security sandboxing & supply chain** | OpenClaw, PicoClaw, ZeptoClaw, ZeroClaw, IronClaw | Filesystem sandbox config (OpenClaw #7722), subprocess env scrubbing (ZeptoClaw #645), cargo-deny/Clippy baseline (ZeptoClaw #646, ZeroClaw #8519), SSRF gates (ZeroClaw #8713) |
| **Streaming UX parity across channels** | NanoBot, PicoClaw, ZeptoClaw, ZeroClaw, IronClaw | Markdown reveal (NanoBot #4696), QQ streaming (PicoClaw #3201), Telegram progressive edits (ZeptoClaw #648), DingTalk streaming (ZeroClaw #8228), tool panel timing (IronClaw #6649) |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architectural Signature |
|---------|---------------|-------------|-------------------------|
| **OpenClaw** | **Universal agent platform** — multi-channel, multi-provider, session-state correctness | Power users, self-hosters, platform builders | Monolithic Go core, SQLite session store, cron unification, gateway sidecars |
| **IronClaw** | **Verifiable, auditable agent runtime** — error recoverability, hermetic testing, Manifest V3 | Enterprise/near-mainnet, security-sensitive deployments | Rust workspace, Wasmtime plugins, capability/journey testing, attested signing |
| **ZeroClaw** | **Governed extensibility** — RFC/ADR process, unified plugin catalog, wire-protocol providers | Teams needing auditability & plugin ecosystem | Go + Wasmtime, SOP/Goal control plane, config-as-code, A2A boundaries |
| **CoPaw (QwenPaw)** | **AI OS / Mini-app platform** — PawApp SDK, Kanban, Creator, Computer-Use | Chinese-market developers, GUI automation, multi-model ensembles | TypeScript/Tauri console, Python backend, ReAct agents, plugin marketplace |
| **LobsterAI** | **Enterprise IM integration** — WeCom, DingTalk, Feishu, scheduled tasks | Chinese enterprise teams, IM bot operators | Electron/React desktop, OpenClaw fork, Windows installer hardening |
| **Hermes Agent** | **Local-first desktop assistant** — TTS/voice, skills, memory, Windows/macOS/Linux | Desktop power users, voice-first workflows | Python + Tauri, ACP/MCP, skill manifests, cron automation |
| **NanoBot** | **WebUI-first local agent** — smooth streaming, onboarding, subagent consultation | Local-model enthusiasts, WebUI users | TypeScript/React WebUI, Go gateway, inline subagents, model presets |
| **PicoClaw** | **Lightweight multi-channel bot** — Discord, QQ, Telegram, WebSocket, MQTT | Embedded/IoT, Chinese messaging ecosystems | Go, minimal deps, channel adapters, rune-based splitting |
| **ZeptoClaw** | **Minimal secure gateway** — Telegram streaming, subprocess hardening, CI discipline | Security-focused self-hosters | Rust, async streaming primitives, cargo-deny supply chain |
| **NanoClaw** | **Multi-tenant agent hosting** — per-group timezone, opencode parity, template context | SaaS operators, multi-tenant deployments | Go, container configs, migration-based schema |
| **Moltis** | **Slack-centric bot framework** — Block Kit, reactions, reconnect supervision | Slack workspace admins | Go, Slack SDK, reaction-based ack |
| **NullClaw / TinyClaw** | Inactive / undefined | — | — |

---

## 6. Community Momentum & Maturity

**Tier 1: Rapid Iteration / Pre-1.0 Convergence** (High velocity + release discipline + architectural bets)
- **OpenClaw**, **IronClaw**, **ZeroClaw** — All three show 80–100+ items/day, stacked PRs, RFC governance, and imminent milestone releases (2026.7.x, v1.0.0-rc, v0.9.0). Maintainer teams are scaling review via bots (OpenClaw) or AI-assisted review RFCs (ZeroClaw).

**Tier 2: Feature-Complete Polish / Regression Management** (High velocity but user-facing breakage)
- **CoPaw**, **LobsterAI**, **Hermes Agent**, **NanoBot** — Shipping releases (CoPaw v2.0.1, LobsterAI 2026.7.23) but each has **critical regression clusters**: CoPaw’s 2s latency + MCP breakage, Hermes’ Windows data loss + encoding, LobsterAI’s security PRs stale since April, NanoBot’s MCP lifecycle debt.

**Tier 3: Steady Maintenance / Niche Focus** (Low external engagement, maintainer-driven)
- **PicoClaw**, **NanoClaw**, **ZeptoClaw**, **Moltis** — Healthy code quality (PicoClaw’s allocation reductions, ZeptoClaw’s security PRs

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-25

## 1. Today's Overview

NanoBot shows **high development velocity** with 24 PRs merged/closed and 2 issues resolved in the past 24 hours. The project is in active feature-polish mode ahead of a v0.3.0 release (PR #5081), with major WebUI improvements, agent architecture refinements, and provider fixes landing simultaneously. No new release published today, but the release-preparation PR signals imminent shipping. Community engagement remains modest on issues (0–1 👍), while PR activity is driven by core maintainers.

## 2. Releases

**No new releases published today.**  
Release preparation is underway: [PR #5081](https://github.com/HKUDS/nanobot/pull/5081) bumps version to **v0.3.0** (from 0.2.2) and includes composer model-badge fixes and preset-switcher UX polish. Expect release within days.

## 3. Project Progress — Merged/Closed PRs Today (20)

| PR | Type | Summary |
|----|------|---------|
| [#5080](https://github.com/HKUDS/nanobot/pull/5080) | Brand/Chore | Migrate README & WebUI assets to SVG; remove PNG covers |
| [#5079](https://github.com/HKUDS/nanobot/pull/5079) | Enhancement | Add nanobot logo (SVG) at `images/nanobot_logo.svg` |
| [#5078](https://github.com/HKUDS/nanobot/pull/5078) | Feature (P1) | **Launch first-time setup in WebUI** — desktop installers now open WebUI onboarding; gateway stays in setup mode until model configured |
| [#5075](https://github.com/HKUDS/nanobot/pull/5075) | Feature/Test (P2) | Carry authorized tasks through verification; reserve confirmation for irreversible actions |
| [#5074](https://github.com/HKUDS/nanobot/pull/5074) | Feature/Test (P1) | **Inline subagent consultation** — `spawn` tool gains `wait` argument for synchronous subagent results |
| [#5073](https://github.com/HKUDS/nanobot/pull/5073) | Fix/Test (P1) | **Preserve multimodal tool outputs** — text/image/file blocks from tools no longer serialized to inert JSON |
| [#5076](https://github.com/HKUDS/nanobot/pull/5076) | Fix (P1) | WebUI honors custom gateway port with Vite dev server |
| [#5077](https://github.com/HKUDS/nanobot/pull/5077) | Feature | **Switch model presets from composer** — long-press + vertical drag to cycle presets |
| [#4963](https://github.com/HKUDS/nanobot/pull/4963) | Feature | Polish agent output & app discovery — unified activity language, Streamdown rendering, native tool-call display |
| [#4567](https://github.com/HKUDS/nanobot/pull/4567) | Fix | WeChat channel: stream LLM calls + buffer replies to dodge non-stream relay bug |
| [#5049](https://github.com/HKUDS/nanobot/pull/5049) | Fix/Test (P1) | Deliver non-streamed finalization responses (regression fix) |
| [#5031](https://github.com/HKUDS/nanobot/pull/5031) | Fix | Avoid mobile welcome composer overlap |
| [#5050](https://github.com/HKUDS/nanobot/pull/5050) | Feature/Test (P2) | Surface xAI hosted X Search activity in WebUI |
| [#5053](https://github.com/HKUDS/nanobot/pull/5053) | Chore (P2) | Pin migration TODOs to v0.2.4 (legacy `maxMessages`, channel entry-point warnings) |
| [#5071](https://github.com/HKUDS/nanobot/pull/5071) | Fix | Show quoted context after follow-up send in WebUI |
| [#5060](https://github.com/HKUDS/nanobot/pull/5060) | Fix | Polish responsive layouts & settings search |
| [#5072](https://github.com/HKUDS/nanobot/pull/5072) | Revert | Revert "fix: preserve pending message runtime context" (#4665) — stale pre-`RuntimeContextProvider` impl |

**Key advances:** WebUI-first onboarding, inline subagents, multimodal tool output fidelity, smoothed streaming Markdown (#4696 still open), preset switching UX, and WeChat streaming reliability.

## 4. Community Hot Topics

| Item | Type | Comments | 👍 | Analysis |
|------|------|----------|-----|----------|
| [#4867](https://github.com/HKUDS/nanobot/issues/4867) | Issue (Closed) | 23 | 0 | **Ollama caching performance** — extra 60s/turn due to prompt prefix mutation; critical for local-model users. Closed via PR (likely #5073 or related). High technical friction. |
| [#4637](https://github.com/HKUDS/nanobot/issues/4637) | Issue (Closed) | 4 | 0 | **Telegram long-message rendering** — markdown trunks fail to render before final trunk. UX blocker for Telegram power users. |
| [#4858](https://github.com/HKUDS/nanobot/issues/4858) | Issue (Open) | 2 | 0 | **Refactor MCP lifecycle out of AgentLoop** — architectural debt; tool-provider lifecycle leaking into core loop. P2 priority. |
| [#4064](https://github.com/HKUDS/nanobot/issues/4064) | Issue (Open) | 1 | 1 | **Pending mid-turn messages lose runtime context** — sender/channel/chat metadata dropped. Reverted fix (#5072) indicates design flux. |
| [#4696](https://github.com/HKUDS/nanobot/pull/4696) | PR (Open) | — | 0 | **Smooth WebUI streaming Markdown reveal** — buffered rAF scheduler, reading-speed pacing, tail animation. Major UX polish, still open. |

**Underlying needs:** Local-model performance (Ollama), multi-platform message fidelity (Telegram/WeChat), architectural separation of concerns (MCP), and streaming UX parity with commercial chat UIs.

## 5. Bugs & Stability

| Severity | Issue/PR | Status | Fix PR |
|----------|----------|--------|--------|
| **High** | [#4867](https://github.com/HKUDS/nanobot/issues/4867) Ollama +60s/turn | Closed | Likely addressed by multimodal-preserve work (#5073) |
| **High** | [#5049](https://github.com/HKUDS/nanobot/pull/5049) Non-streamed finalization responses dropped | Fixed (merged) | #5049 |
| **Medium** | [#4637](https://github.com/HKUDS/nanobot/issues/4637) Telegram markdown trunk rendering | Closed | Unclear — may need follow-up |
| **Medium** | [#4567](https://github.com/HKUDS/nanobot/pull/4567) WeChat non-stream relay drops tool_use fields | Fixed (merged) | #4567 |
| **Medium** | [#4064](https://github.com/HKUDS/nanobot/issues/4064) Pending messages lose runtime context | Open | Reverted (#5072); needs re-design |
| **Low** | [#5031](https://github.com/HKUDS/nanobot/pull/5031) Mobile welcome composer overlap | Fixed (merged) | #5031 |
| **Low** | [#5060](https://github.com/HKUDS/nanobot/pull/5060) Responsive layout/settings search polish | Fixed (merged) | #5060 |

**Stability note:** Two regressions fixed today (#5049, #5072 revert). The reverted PR (#5072) suggests context-propagation design is still settling.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for v0.3.x |
|--------|--------|----------------------|
| **WebUI-first onboarding** (desktop installers → WebUI setup) | #5078 (merged) | ✅ Landed |
| **Inline subagent consultation** (`spawn wait=true`) | #5074 (merged) | ✅ Landed |
| **Model preset switching from composer** (long-press drag) | #5077 (merged) | ✅ Landed |
| **Smooth streaming Markdown reveal** (rAF scheduler, tail animation) | #4696 (open) | 🟡 High — UX flagship |
| **MCP lifecycle extraction from AgentLoop** | #4858 (open, P2) | 🟡 Medium — architectural |
| **Globalping MCP preset** | #4383 (open, conflict) | 🟢 Low — preset addition |
| **xAI X Search activity surfacing** | #5050 (merged) | ✅ Landed |
| **Quoted context in follow-ups** | #5071 (merged) | ✅ Landed |

**Prediction:** v0.3.0 will ship with WebUI onboarding, inline subagents, preset switching, and xAI search. #4696 (streaming Markdown) is the strongest candidate for v0.3.1 or v0.4.0. MCP refactor (#4858) likely v0.4+.

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Ollama unusable latency** | #4867: "totally unusable with Ollama and 32 GB VRAM" | 😡 Critical |
| **Telegram markdown broken** | #4637: screenshots showing truncated trunks | 😕 Frustrated |
| **WeChat tool_use drops** | #4567: upstream relays drop `id`/`name`/`input` | 😕 Technical blocker |
| **Mobile WebUI layout issues** | #5031, #5060: composer overlap, settings rail | 😐 Annoyance |
| **Desire for WebUI onboarding** | #5078 merged — "launch directly from desktop installers" | 😊 Positive direction |
| **Subagent workflow friction** | #5074: "inline consultation" vs. async spawn | 😐 Workflow gap |

**Overall:** Power users on local models (Ollama) and multi-channel deployments (Telegram/WeChat) face sharp edges. WebUI experience rapidly improving for desktop users.

## 8. Backlog Watch — Stale/Needing Attention

| Item | Age | Type | Why It Matters |
|------|-----|------|----------------|
| [#4858](https://github.com/HKUDS/nanobot/issues/4858) | 16 days | Refactor (P2) | MCP lifecycle leak in AgentLoop; blocks clean provider architecture. Assigned to `chengyongru`. |
| [#4064](https://github.com/HKUDS/nanobot/issues/4064) | 57 days | Bug | Pending-message context loss; fix reverted (#5072). Needs design consensus on `RuntimeContextProvider`. |
| [#4696](https://github.com/HKUDS/nanobot/pull/4696) | 21 days | PR (Open) | Major streaming Markdown UX polish. Large diff, needs review bandwidth. |
| [#4383](https://github.com/HKUDS/nanobot/pull/4383) | 38 days | PR (Open, conflict) | Globalping MCP preset. Conflict label suggests merge friction. |
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) | (referenced) | Enhancement | Original Ollama caching issue — #4867 is followup. Verify fully resolved. |

**Maintainer action suggested:** Prioritize #4696 review (UX flagship), resolve #4858 design (architectural), and close #4064 with new context-propagation approach.

---

*Digest generated from GitHub API data for HKUDS/nanobot on 2026-07-25. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-25

---

## 1. Today's Overview

Hermes Agent shows **high velocity maintenance activity** with 100 total updates (50 issues, 50 PRs) in the last 24 hours, but **no new release** since the last version. The project is in a stabilization phase: 18 issues closed and 8 PRs merged/closed today indicate active bug-fixing, particularly around Windows compatibility, encoding handling, TTS/voice subsystem, and session persistence. Open PR count (42) significantly exceeds merged (8), suggesting a backlog of pending reviews. Core themes: **Windows platform robustness**, **encoding/Unicode correctness**, **session state integrity**, and **developer experience polish**.

---

## 2. Releases

**No new releases today.** The latest version remains v0.19.0 (referenced in issue #68474). Users on v0.18.0–v0.19.0 should watch for hotfixes addressing the Windows `state.db` corruption (#68474) and unsigned executable Smart App Control block (#50210).

---

## 3. Project Progress — Merged/Closed PRs Today (8)

| PR | Area | Summary |
|----|------|---------|
| [#70535](https://github.com/NousResearch/hermes-agent/pull/70535) | TTS/CLI | Batch synchronous provider playback; avoids pauses between synthesis requests |
| [#70601](https://github.com/NousResearch/hermes-agent/pull/70601) | TTS/CLI | Serialize batch TTS playback to prevent audio overlap via single queue worker |
| [#70851](https://github.com/NousResearch/hermes-agent/pull/70851) | TTS/CLI | Carry leftover bytes for misaligned PCM streaming chunks (OpenAI `response_format=pcm`) |
| [#70497](https://github.com/NousResearch/hermes-agent/pull/70497) | TTS/CLI | Prevent duplicate TTS response rendering when token streaming already renders |
| [#70586](https://github.com/NousResearch/hermes-agent/pull/70586) | Desktop/Session | Fix session reopen crash on `async_delegation_complete` messages (`'task_count' in <string>` TypeError) |
| [#68369](https://github.com/NousResearch/hermes-agent/issues/68369) | Skills/Windows | Fix `hermes skills check` crash on Chinese Windows — `HubLockFile.load()` now uses explicit UTF-8 |
| [#50210](https://github.com/NousResearch/hermes-agent/issues/50210) | Install/Windows | **Closed** (not fixed): Windows bootstrap installer produces unsigned `Hermes.exe` blocked by Smart App Control — requires code signing pipeline |
| [#68474](https://github.com/NousResearch/hermes-agent/issues/68474) | Desktop/State | **Closed** (not fixed): `state.db` zeroed (95 MB null bytes) during desktop update to v0.19.0 on Windows — root cause under investigation |

**Key advancement:** TTS/voice subsystem received 4 merged fixes in one day, resolving streaming alignment, overlap, duplication, and synchronous provider batching. Desktop session restore crash fixed. Two critical Windows issues closed without fix — signaling need for deeper engineering investment.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | 👍 | Core Need |
|------|----------|----|-----------|
| [#60144](https://github.com/NousResearch/hermes-agent/issues/60144) Desktop boot fails when platform adapter import or MCP registration exceeds 15s readiness timeout | 6 | 0 | **Startup reliability** — users with many MCP servers/adapters hit hard timeout; need configurable or async initialization |
| [#50210](https://github.com/NousResearch/hermes-agent/issues/50210) Windows bootstrap installer produces unsigned `Hermes.exe` blocked by Smart App Control | 5 | 1 | **Windows trust/distribution** — unsigned binary blocks adoption on Windows 11; requires code signing infrastructure |
| [#68474](https://github.com/NousResearch/hermes-agent/issues/68474) `state.db` zeroed (95 MB null bytes) during desktop update to v0.19.0 on Windows | 5 | 0 | **Data integrity** — catastrophic session loss on update; erodes trust in desktop auto-update |
| [#66473](https://github.com/NousResearch/hermes-agent/issues/66473) MCP Smart Loading — Lazy Connection, Tool Budget, Per-Session Scoping & On-Demand Servers | 4 | 0 | **MCP scalability** — connecting all enabled MCP servers at startup causes slow boot, tool namespace pollution, no per-session control |
| [#69230](https://github.com/NousResearch/hermes-agent/issues/69230) Desktop app: Remote gateway reachability check fails despite server being healthy | 3 | 0 | **Desktop↔Gateway connectivity** — false-negative health probe blocks remote gateway usage |

**Underlying signal:** Windows desktop users face a **cluster of critical blockers** (unsigned binary, DB corruption, boot timeout, gateway probe) that collectively make the desktop app unreliable on Windows. MCP architecture needs lazy/on-demand loading to scale.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical** | [#68474](https://github.com/NousResearch/hermes-agent/issues/68474) `state.db` zeroed during Windows update — 95 MB null bytes, total session loss | Closed (no fix) | ❌ |
| **Critical** | [#50210](https://github.com/NousResearch/hermes-agent/issues/50210) Unsigned `Hermes.exe` blocked by Windows Smart App Control | Closed (no fix) | ❌ |
| **High** | [#60144](https://github.com/NousResearch/hermes-agent/issues/60144) Desktop boot fails when MCP registration > 15s timeout | Closed | ❌ (workaround: reduce MCP servers) |
| **High** | [#69559](https://github.com/NousResearch/hermes-agent/issues/69559) Agent hangs indefinitely after tool call completes (3 providers/models, fresh Ubuntu) | Open | ❌ |
| **High** | [#69230](https://github.com/NousResearch/hermes-agent/issues/69230) Desktop remote gateway reachability false negative | Open | ❌ |
| **Medium** | [#10878](https://github.com/NousResearch/hermes-agent/issues/10878) `memory_tool _read_file` doesn't strip BOM — invisible `\ufeff` enters system prompt | Open | ❌ |
| **Medium** | [#10879](https://github.com/NousResearch/hermes-agent/issues/10879) Non-UTF-8 `MEMORY.md` raises uncaught `UnicodeDecodeError` — agent starts with empty memory | Closed | ❌ (duplicate of encoding cluster) |
| **Medium** | [#38119](https://github.com/NousResearch/hermes-agent/issues/38119) Copilot ACP fs read/write shim omits explicit UTF-8 encoding | Closed | ❌ |
| **Medium** | [#49451](https://github.com/NousResearch/hermes-agent/issues/49451) `read_file` shows phantom empty last line for files ending in newline | Open | ❌ |
| **Medium** | [#71026](https://github.com/NousResearch/hermes-agent/issues/71026) `/insights` crashes: `TypeError: unsupported operand type(s) for -: 'str' and 'int'` | Open | ❌ |
| **Medium** | [#42384](https://github.com/NousResearch/hermes-agent/issues/42384) `no_agent` cron stdout silently dropped on Windows (pythonw) when output contains emoji/UTF-8 | Open | ❌ |
| **Medium** | [#42785](https://github.com/NousResearch/hermes-agent/issues/42785) Cron `no_agent` stdout decoded with platform default (cp1252), mangling non-ASCII | Closed | ❌ |
| **Medium** | [#65123](https://github.com/NousResearch/hermes-agent/issues/65123) UTF-8 BOM in `.env` silently drops first key (e.g., API key) | Closed | ❌ |
| **Medium** | [#47107](https://github.com/NousResearch/hermes-agent/issues/47107) `write_file`/`patch` blocks agent from writing to own `~/.hermes/.env` | Open | ❌ |

**Pattern:** **Encoding/Unicode bugs dominate** (BOM handling, UTF-8 vs locale default, silent data loss). Windows is disproportionately affected. Several are duplicates of a systemic "no explicit encoding / no error handling" pattern across `read_text()`/`write_text()` calls.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|----------------------------|
| [#66473](https://github.com/NousResearch/hermes-agent/issues/66473) MCP Smart Loading (lazy, tool budget, per-session scoping) | High community interest (4 comments), architectural — addresses startup perf & tool sprawl | 🟡 Medium (needs design decision, labeled `needs-decision`) |
| [#69128](https://github.com/NousResearch/hermes-agent/issues/69128) Integrate Microsoft Agent Governance Toolkit (AGT) as optional plugin | Consolidates 53+ governance issues; strong maintainer signal (`needs-decision`, 1 👍) | 🟢 High if governance becomes priority |
| [#26709](https://github.com/NousResearch/hermes-agent/issues/26709) `agents.defaults.skills` / `gateway.auto_skills` for per-session auto-injection | Recurring request for proactive skill injection; low friction config | 🟢 High (small scope, clear value) |
| [#39173](https://github.com/NousResearch/hermes-agent/issues/39173) Desktop cron: delivery target dropdown hardcoded, not dynamic | UX polish; blocks extensibility for custom delivery targets | 🟢 High (frontend-only, low risk) |
| [#60313](https://github.com/NousResearch/hermes-agent/issues/60313) Dual `config.yaml` sources cause confusing MCP OAuth behavior | Architectural clarity; affects CLI vs Desktop config parity | 🟡 Medium (requires config hierarchy decision) |

**Prediction:** Next patch (v0.19.1) will likely include encoding fixes, TTS stabilization, and the `config show/edit` PRs (#71125–#71127). MCP Smart Loading and AGT integration are v0.20+ candidates.

---

## 7. User Feedback Summary — Real Pain Points

| Theme | Representative Voices |
|-------|----------------------|
| **Windows desktop is unusable** | "Desktop boot fails on every launch" (#60144); "state.db completely destroyed — 99 MB null bytes" (#68474); "unsigned Hermes.exe blocked by Smart App Control" (#50210); "skills check crashes on Chinese Windows" (#68369) |
| **Silent data corruption** | "UTF-8 BOM in .env silently drops first key — no parse error, no warning" (#65123); "memory silently disabled for entire session, zero log output" (#57754); "cron stdout silently dropped when emoji present" (#42384) |
| **Encoding minefield** | 6+ issues in 24h about BOM, UTF-8, locale defaults, cp1252 — users hit this editing files on Windows with Notepad |
| **MCP startup penalty** | "Hermes connects every enabled MCP server at startup… slow boot, tool namespace pollution" (#66473) |
| **Config confusion** | "Two config.yaml files, unclear priority — Studio reads AppData, CLI reads ~/.hermes" (#60313); "config show doesn't show model_routes, mcp_servers, plugins" (#71126) |
| **TTS/voice instability** | 4 PRs merged today fixing overlap, duplication, streaming alignment, synchronous batching — indicates recent regression cluster |

**Satisfaction signal:** Windows users are **highly dissatisfied** (data loss, unsigned binary, locale crashes). Linux/macOS users report fewer blockers but hit encoding and MCP scaling issues. Developers want **explicit encoding defaults**, **lazy MCP**, and **config clarity**.

---

## 8. Backlog Watch — Long-Unanswered Important Items Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#50210](https://github.com/NousResearch/hermes-agent/issues/50210) Windows unsigned executable blocked by Smart App Control | 34 days (created 2026-06-21) | **Blocks Windows 11 adoption entirely**; requires code signing pipeline / certificate investment |
| [#68474](https://github.com/NousResearch/hermes-agent/issues/68474) `state.db` zeroed on Windows update | 4 days | **Catastrophic data loss**; root cause unknown — could recur on v0.19.1 |
| [#66473](https://github.com/NousResearch/hermes-agent/issues/66473) MCP Smart Loading (umbrella) | 8 days | **Architectural debt** — 7 MCP servers + 21 adapters at startup is unsustainable; needs design review |
| [#60313](https://github.com/NousResearch/hermes-agent/issues/60313) Dual config.yaml sources confuse MCP OAuth | 18 days | **Config parity break** between Desktop and CLI; affects OAuth flow reliability |
| [#69128](https://github.com/NousResearch/hermes-agent/issues/69128) Microsoft AGT governance plugin integration | 3 days | **Consolidates 53+ issues**; strategic decision needed on governance direction |
| [#47107](https://github.com/NousResearch/hermes-agent/issues/47107) Agent cannot write own `~/.hermes/.env` | 9 days | **Self-management broken** — agent can't update its own API keys via tools |
| [#62849](https://github.com/NousResearch/hermes-agent/issues/62849) Dockerfile fails on Podman/buildah | 14 days | **CI/CD exclusion** — Fedora/RHEL/rootless users cannot build; Dockerfile not engine-agnostic |

**Recommendation:** Maintainers should prioritize **Windows code signing** (#50210) and **state.db corruption root cause** (#68474) as P0 blockers. The encoding cluster (BOM, UTF-8, locale) warrants a **cross-cutting fix** — audit all `read_text()`/`write_text()` calls for explicit `encoding="utf-8"` and `errors="replace"`/`"strict"` policy.

---

*Digest generated from GitHub data as of 2026-07-25. All links point to NousResearch/hermes-agent repository.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-25

## 1. Today's Overview
PicoClaw saw moderate maintenance activity today with **8 PRs processed** (7 merged/closed, 1 open) and **3 issues updated** (2 closed as stale, 1 new bug opened). The project is in a **steady maintenance phase** — no new release, but a healthy stream of code-quality improvements (security hardening, allocation reductions, i18n additions) and a fresh user-reported performance regression (high CPU on input focus) that already has a fix PR (#3293) merged. The two closed issues were marked `stale`, suggesting the triage bot is actively cleaning the backlog. Overall project health: **stable, with active contributor engagement on internals and localization**.

---

## 2. Releases
**No new releases today.** Current latest remains **v0.3.1** (per issue #3292 environment).

---

## 3. Project Progress — Merged/Closed PRs (2026-07-24 to 2026-07-25)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3293](https://github.com/sipeed/picoclaw/pull/3293) | 🐞 Bug fix | **Fix high CPU usage when input box focused** in chat interface (web channel). | Directly resolves the new issue #3292; user-facing performance win. |
| [#3246](https://github.com/sipeed/picoclaw/pull/3246) | 🔒 Security hardening | MQTT: enable TLS cert verification by default; OAuth: add timeouts; bound search reads. | Eliminates insecure defaults, reduces attack surface. |
| [#3245](https://github.com/sipeed/picoclaw/pull/3245) | ⚡ Refactor | `escapeXML` in skills loader: single-pass `strings.NewReplacer` (was 3 allocations). | Micro-optimization, zero behavior change. |
| [#3244](https://github.com/sipeed/picoclaw/pull/3244) | ⚡ Refactor | Seahorse summary XML assembly: 5-pass → 1-pass escape via `NewReplacer`. | Reduces allocations on hot compaction path. |
| [#3243](https://github.com/sipeed/picoclaw/pull/3243) | ⚡ Refactor | Seahorse compaction helpers: `strings.Builder` instead of `+=` (O(n²) → O(n)). | Significant allocation reduction for large contexts. |
| [#3247](https://github.com/sipeed/picoclaw/pull/3247) | ✨ i18n | Add Czech translations for code-wrap toggle keys (`chat.enableCodeWrap`, `chat.disableCodeWrap`). | Completes Czech locale for v0.3.1 UI strings. |
| [#323](https://github.com/sipeed/picoclaw/pull/323) | 🐞 Bug fix | Discord: rune-based message splitting (fix 400 errors), maintain typing status during processing. | Improves reliability & UX for long responses on Discord. |

**Open PR carried forward:**  
- [#3261](https://github.com/sipeed/picoclaw/pull/3261) (stale) — Add `zh-TW` locale with Taiwanese terminology across WebUI & docs. Awaiting review/merge.

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [Issue #3292](https://github.com/sipeed/picoclaw/issues/3292) — **High CPU when input focused** (0 comments, created & updated today) | New bug, immediate fix PR #3293 merged same day. | Users on Debian/Firefox experience noticeable CPU drain simply by focusing the chat input — a regression that degrades laptop battery life and perceived responsiveness. |
| [Issue #2796](https://github.com/sipeed/picoclaw/issues/2796) — **History shows only last user message per conversation** (7 comments, closed stale) | Multi-message conversation history collapsed; users expect full visibility. | Core UX gap: message compaction (for LLM context) incorrectly applied to user-facing history. Need separation of *storage* vs *display* layers. |
| [Issue #3201](https://github.com/sipeed/picoclaw/issues/3201) — **Streaming output for QQ channel** (4 comments, closed stale) | Parity request: Telegram & WebSocket already stream; QQ users wait for full response. | Channel consistency — real-time token streaming is now expected baseline for all connectors. |
| [PR #3261](https://github.com/sipeed/picoclaw/pull/3261) — **zh-TW locale** (open, stale label) | Localization contributor adding full Traditional Chinese (Taiwan) translation. | Expands accessibility for Taiwanese users; signals demand for regional variants beyond `zh-CN`. |

---

## 5. Bugs & Stability — Today’s Reports

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** (user-facing perf regression) | [#3292](https://github.com/sipeed/picoclaw/issues/3292) — CPU spikes to high % when chat input focused (Web, Firefox, Debian) | **Open** (created today) | ✅ **Fixed & merged** via [#3293](https://github.com/sipeed/picoclaw/pull/3293) |
| **Medium** (data visibility) | [#2796](https://github.com/sipeed/picoclaw/issues/2796) — History only shows last user message per conversation | **Closed (stale)** | ❌ No fix PR; root cause likely in history rendering logic (compaction leak) |
| **Low** (security hygiene) | MQTT `InsecureSkipVerify: true` default | **Fixed** via [#3246](https://github.com/sipeed/picoclaw/pull/3246) | ✅ Merged |

> **Note:** The stale closure of #2796 does not mean the bug is resolved — it fell off the radar. Maintainers should re-open or link a tracking issue.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Streaming output for QQ channel** | [#3201](https://github.com/sipeed/picoclaw/issues/3201) | **High** — architecture (`StreamingCapable` interface) exists; only QQ adapter missing. |
| **Full conversation history visibility** (decouple compaction from UI) | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | **Medium** — requires refactor of history store/render; no active PR. |
| **Traditional Chinese (Taiwan) locale** | [#3261](https://github.com/sipeed/picoclaw/pull/3261) | **High** — PR ready, stale label may be auto-applied; needs maintainer merge. |
| **Discord message splitting & typing status** | [#323](https://github.com/sipeed/picoclaw/pull/323) | **Done** — merged today, will ship in next release. |

**Prediction:** Next patch (v0.3.2) will likely include: CPU fix (#3293), Discord fixes (#323), security hardening (#3246), and the Czech i18n (#3247). zh-TW (#3261) and QQ streaming are strong candidates if reviewed promptly.

---

## 7. User Feedback Summary

- **Pain point:** *“Just focusing the input box makes my CPU fan spin.”* — Debian/Firefox user (#3292). Immediate fix merged shows responsive triage.
- **Frustration:** *“I can’t see my earlier messages in history — only the last one.”* — Multiple users (7 comments on #2796). Indicates a **trust/reliability** issue for power users who rely on conversation review.
- **Expectation parity:** *“Telegram streams, why not QQ?”* — Channel consistency is now a baseline expectation (#3201).
- **Localization appetite:** Active PR for `zh-TW` (#3261) and completed Czech (#3247) show community willingness to expand language coverage.

Overall sentiment: **Appreciative of rapid fixes, but concerned about stale issues lingering without resolution.**

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [Issue #2796](https://github.com/sipeed/picoclaw/issues/2796) — History message loss | **79 days** (created 2026-05-07) | Core UX bug; closed stale but **not fixed**. Re-open or create tracking issue. |
| [PR #3261](https://github.com/sipeed/picoclaw/pull/3261) — zh-TW locale | **9 days** open, marked stale | Ready-to-merge localization; stale label may discourage contributor. Review & merge. |
| [Issue #3201](https://github.com/sipeed/picoclaw/issues/3201) — QQ streaming | **24 days** | Feature parity gap; architecture ready. Assign to channel maintainer or accept community PR. |
| [PR #3246](https://github.com/sipeed/picoclaw/pull/3246) — Security hardening | Merged today | **Verify** MQTT TLS default change doesn’t break existing self-signed cert deployments (document migration if needed). |

---

**Bottom line:** PicoClaw is actively maintained with a focus on code quality, security, and incremental UX fixes. The **high-CPU regression was resolved in hours** — a strong signal of project responsiveness. The main risk is **stale issues masking real bugs** (especially #2796). Recommended: triage stale-closed issues weekly, and prioritize the zh-TW merge to reward contributor effort.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-25

## 1. Today's Overview
NanoClaw showed **steady maintenance velocity** with 7 pull requests updated in the last 24 hours (6 open, 1 closed), but **no issue activity or new releases**. The PR queue is dominated by core-team fixes and incremental improvements—agent-runner silence handling, opencode compatibility, chat typing indicators, MCP server reporting, and template context handling—plus one new feature (per-agent-group timezone override). The single closed PR (#3123) was a mistaken submission. Overall, the project is in a **healthy refinement phase** with active core-team engagement and no signs of stagnation or critical incidents.

## 2. Releases
**No new releases** in the last 24 hours. The project continues on its current stable version.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Author | Status | Summary |
|----|-------|--------|--------|---------|
| [#3123](https://github.com/nanocoai/nanoclaw/pull/3123) | Pacific changes. Wrong PR. | iamarunkumark | **Closed** (not merged) | Author explicitly marked as wrong PR; no code changes merged. |

*No PRs were merged today.* All other active PRs remain open and under review.

## 4. Community Hot Topics — Most Active PRs
| PR | Type | Author | Updated | Key Focus |
|----|------|--------|---------|-----------|
| [#3126](https://github.com/nanocoai/nanoclaw/pull/3126) | Fix (agent-runner) | glifocat | 2026-07-24 | Prevent delivery of silence when a nudged chat turn stays bare |
| [#3122](https://github.com/nanocoai/nanoclaw/pull/3122) | Fix (opencode) | glifocat | 2026-07-24 | Main compatibility, custom-endpoint transport, memory parity |
| [#3125](https://github.com/nanocoai/nanoclaw/pull/3125) | Feature (core) | Koshkoshinsk | 2026-07-24 | Per-agent-group IANA timezone override (migration 020) |
| [#3093](https://github.com/nanocoai/nanoclaw/pull/3093) | Fix (chat) | amit-shafnir | 2026-07-24 | Keep typing indicator active for processing turns |
| [#3124](https://github.com/nanocoai/nanoclaw/pull/3124) | Fix (MCP) | shixi-li | 2026-07-24 | Report unavailable MCP servers |
| [#3090](https://github.com/nanocoai/nanoclaw/pull/3090) | Fix (templates) | amit-shafnir | 2026-07-24 | Prepend all top-level context Markdown |

**Underlying needs:**  
- **Reliability polish** — Eliminating silent/empty responses (#3126), fixing typing indicator race conditions (#3093), surfacing MCP failures (#3124).  
- **Integration parity** — Bringing opencode transport & memory in line with main branch (#3122).  
- **Multi-tenancy ergonomics** — Timezone overrides per agent group (#3125) signals growing demand for per-tenant configuration.  
- **Context fidelity** — Ensuring full Markdown context reaches templates (#3090).

## 5. Bugs & Stability — Today’s Reports
No new **issues** were filed in the last 24 hours. All bug-related work appears in the open PRs above:

| Severity | PR | Area | Status |
|----------|----|------|--------|
| Medium | [#3126](https://github.com/nanocoai/nanoclaw/pull/3126) | Agent-runner: silent delivery on bare nudged turns | Open, fix proposed |
| Medium | [#3093](https://github.com/nanocoai/nanoclaw/pull/3093) | Chat: typing indicator drops during processing | Open, fix proposed |
| Low | [#3124](https://github.com/nanoclaw/pull/3124) | MCP: unavailable servers not reported | Open, fix proposed |
| Low | [#3122](https://github.com/nanocoai/nanoclaw/pull/3122) | Opencode: transport & memory parity gaps | Open, fix proposed |

*No crashes, regressions, or high-severity incidents reported today.*

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Per-agent-group timezone override** (IANA, stored in `container_configs`, migration 020) | [PR #3125](https://github.com/nanocoai/nanoclaw/pull/3125) (core-team) | **High** — core-team authored, includes migration, CLI (`ncl groups config update --timezone`), approval-gated |
| **Opencode main-branch parity** (custom-endpoint transport, memory) | [PR #3122](https://github.com/nanocoai/nanoclaw/pull/3122) (core-team) | **High** — core-team, addresses integration drift |
| **Full top-level context in templates** | [PR #3090](https://github.com/nanocoai/nanoclaw/pull/3090) (core-team) | **Medium** — improves developer experience, low risk |

The timezone override is the clearest **net-new feature** nearing readiness; the others are parity/fixes.

## 7. User Feedback Summary
No direct user issues or comments captured in the last 24 hours (0 issues, PR comments not provided). The PR authors are all core-team or frequent contributors, indicating **internally driven refinement** rather than community-reported pain points today. Historical context (from PR templates) shows recurring themes:
- **Silent/empty agent responses** → addressed by #3126  
- **Typing indicator flakiness** → addressed by #3093  
- **MCP server visibility** → addressed by #3124  
- **Template context completeness** → addressed by #3090  

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [PR #3090](https://github.com/nanocoai/nanoclaw/pull/3090) — Prepend all top-level context Markdown | 6 days (created 2026-07-19) | Low–Medium | Stalled despite core-team author; may block template-heavy workflows |
| [PR #3093](https://github.com/nanocoai/nanoclaw/pull/3093) — Keep typing active for processing turns | 6 days (created 2026-07-19) | Medium | UX regression in chat; core-team authored but unmerged |
| [PR #3122](https://github.com/nanocoai/nanoclaw/pull/3122) — Opencode compatibility & memory parity | 2 days | Medium | Integration drift risk; core-team authored |
| [PR #3125](https://github.com/nanocoai/nanoclaw/pull/3125) — Per-agent-group timezone override | 1 day | Low (feature) | New migration (020); needs review for schema & approval flow |

**Recommendation:** Prioritize review of #3090 and #3093 (oldest, UX-impacting), then #3122 (integration health), then #3125 (feature with migration).

---

*Data sourced from GitHub API for nanocoai/nanoclaw; covers 2026-07-24 00:00 – 2026-07-25 00:00 UTC.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-25

## 1. Today's Overview

IronClaw is in a **high-velocity pre-v1.0 stabilization phase** with 82 total GitHub items updated in the last 24 hours (32 issues, 50 PRs). The project shows **intense launch-blocker triage**: 6 issues closed today were explicitly tagged `[v1-launch-checklist]` covering Slack OAuth persistence, CLI availability on staging, upgrade guards, and binding resolution. Simultaneously, the team is executing **architectural epics** — error recoverability contracts, hermetic testing infrastructure, skill discovery/routing, and WebUI performance optimization. No releases were cut today; the codebase appears to be converging on `1.0.0-rc.x` candidates with release automation PRs (#5598) already updating internal crate versions. Activity is heavily core-contributor driven (serrrfirat, ilblackdragon, BenKurrek, zmanian, sergeiest) with dependabot handling routine dependency hygiene.

---

## 2. Releases

**No new releases published today.**  
The most recent release automation PR (#5598, opened 2026-07-03, updated today) shows pending version bumps with breaking changes:
- `ironclaw_common`: 0.4.2 → 0.5.0 (API breaking)
- `ironclaw_skills`: 0.3.0 → 0.4.0 (API breaking)
- `ironclaw_safety`: 0.2.2 → 0.2.3 (compatible)

These version bumps suggest a **coordinated crate release is imminent** but blocked on launch-checklist closure.

---

## 3. Project Progress — Merged/Closed PRs Today (19 items)

| PR | Title | Area | Status |
|----|-------|------|--------|
| #6664 | test(e2e): count capability coverage per outcome, not per capability | Evaluation/CI | **Closed** |
| #6663 | Default `cargo run` to WebUI serve | DX/CLI | **Closed** |
| #6637 | Document Reborn storage landscape and target relational model | Architecture/Docs | **Closed** |
| #6656 | Disable upgrade for version before v1.0.0 | Launch/Guard | **Closed** (Issue #6656) |
| #6521 | ironclaw CLI not available on agent staging | Launch/Infra | **Closed** (Issue #6521) |
| #6614 | Slack personal OAuth binding stays unresolved | Auth/Launch | **Closed** (Issue #6614) |
| #6544 | No UI/CLI to configure `IRONCLAW_REBORN_SLACK_PERSONAL_OAUTH_REDIRECT_URI` | Auth/Launch | **Closed** (Issue #6544) |
| #6482 | Epic: Pluggable Memory Providers | Memory/Architecture | **Closed** |
| #6490 | Define Manifest V3 contract, compatibility, and migration | Extensions/Architecture | **Closed** |

**Key advances:**
- **Launch blockers resolved**: OAuth redirect URI persistence, CLI availability on staging, pre-v1 upgrade guard, Slack binding resolution — all closed today.
- **Testing integrity fixed**: #6664 corrects a false-positive coverage metric (123/123 tested was misleading).
- **Developer experience**: `cargo run` now defaults to `serve` (WebUI), aligning with shipping product.
- **Architecture documentation**: Storage landscape and Manifest V3 contracts documented, enabling provider-neutral memory and extension migration paths.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | Issue (Epic) | 5 | **Error recoverability contract** — every mid-run error must survive, be visible to model with cause+remedy, give model a turn to act, never report non-success. Foundational for agent reliability. |
| [#6544](https://github.com/nearai/ironclaw/issues/6544) | Issue (Launch) | 4 | **Slack OAuth redirect URI persistence** — no UI/CLI to configure critical hosted env var; caused 530 on auth. **Closed today** but reveals config-surface gaps. |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | Issue (Epic) | 3 | **Hermetic capability/journey testing platform** — cannot mechanically answer "does every capability/journey have deterministic coverage?" Blocking release confidence. |
| [#6616](https://github.com/nearai/ironclaw/pull/6616) | PR (XL) | — | **Shrink composition extension host** — moving generic host glue to `ironclaw_extension_host`, retiring product workflow facades. Core architectural simplification. |
| [#6659](https://github.com/nearai/ironclaw/pull/6659) | PR (XL) | — | **Trace replay: bind results by exact tool_call_id + JSON Pointer** — replaces heuristic lookup with precise fixture markers for deterministic replay. |
| [#6665](https://github.com/nearai/ironclaw/pull/6665) | PR (XL) | — | **Actionable capability failure diagnostics** — typed `ModelDiagnostic` with scrubbing, fencing, mission field. Directly supports #6284 recoverability. |

**Underlying theme:** The team is **hardening the agent runtime contract** (errors, traces, diagnostics, testing) while **simplifying the extension host architecture** — both prerequisites for a trustworthy v1.0.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P1 (Critical)** | [#6645](https://github.com/nearai/ironclaw/issues/6645) | Slack `send_message` reports success but DM never delivered; `outbound_delivery_tracking` shows sent but user receives nothing. | No |
| **P1 (Critical)** | [#6644](https://github.com/nearai/ironclaw/issues/6644) | Telegram replies delivered to wrong user message — response association broken after newer message sent. | No |
| **P1 (Critical)** | [#6643](https://github.com/nearai/ironclaw/issues/6643) | Telegram messages accepted but never processed after pairing — bot goes silent, no processing state shown. | No |
| **P1 (Critical)** | [#6646](https://github.com/nearai/ironclaw/issues/6646) | Agent ignores Google Sheets action, only summarizes inbox; admits never writing to sheet after 26 tool calls. | No |
| **P1 (Critical)** | [#6650](https://github.com/nearai/ironclaw/issues/6650) | Agent fabricates AQI data (reported CT AQI 199 vs live sources) — hallucination from mixed/cached web sources. | No |
| **P2 (High)** | [#6649](https://github.com/nearai/ironclaw/issues/6649) | Tool activity panel renders *after* assistant response — no real-time execution visibility. | No |
| **P2 (High)** | [#6648](https://github.com/nearai/ironclaw/issues/6648) | Tool failure messages duplicated with inconsistent wording — confusion on error count. | No |
| **P2 (High)** | [#6651](https://github.com/nearai/ironclaw/issues/6651) | Agent repeats question text after responding — UI shows duplicate user input in thread. | No |
| **P2 (High)** | [#6642](https://github.com/nearai/ironclaw/issues/6642) | `ironclaw models list` shows stale provider/model after TUI switch; config.toml priority comment inverted from code behavior. | No |
| **P2 (High)** | [#6623](https://github.com/nearai/ironclaw/issues/6623) | Chat failure messages hard-coded in English — ignore selected application language (i18n regression). | No |

**Pattern:** **Multi-channel delivery failures** (Slack, Telegram, Google Sheets) and **UI/UX regressions** (tool panel timing, duplicate messages, i18n) dominate today's bug bash. No fix PRs linked yet — these appear freshly triaged.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Skill self-creation module** | [#6641](https://github.com/nearai/ironclaw/issues/6641) (Design doc) | High — explicit design doc authored, follows architectural patterns |
| **Reliable skill discovery/routing/activation** | [#6565](https://github.com/nearai/ironclaw/issues/6565) (Epic) | High — corrected diagnosis 2026-07-25, P1 suggested |
| **Hermetic capability/journey testing platform** | [#6524](https://github.com/nearai/ironclaw/issues/6524) (Epic) | High — launch-blocking for confidence |
| **Error recoverability endgame** | [#6284](https://github.com/nearai/ironclaw/issues/6284) (Epic) | High — foundational contract, active PRs (#6665) |
| **WebUI bundle/loading performance** | [#6628](https://github.com/nearai/ironclaw/issues/6628) (Epic) + #6629/#6630/#6631 | Medium — route splitting, compression, streaming markdown optimization |
| **Process journal kernel → `ironclaw_processes`** | [#6666](https://github.com/nearai/ironclaw/issues/6666) | Medium — architectural cleanup, proven concept |
| **Docker image build restore in CI** | [#6635](https://github.com/nearai/ironclaw/issues/6635) | Medium — infra parity, documented gap |
| **Pluggable memory providers** | [#6482](https://github.com/nearai/ironclaw/issues/6482) (Closed epic) | Done — provider-neutral surface landed |
| **Manifest V3 contract/migration** | [#6490](https://github.com/nearai/ironclaw/issues/6490) (Closed) | Done — schema + migration path defined |

**Prediction:** Next version (v1.0.0) will ship with **skill self-creation**, **hermetic testing**, **error recoverability contract**, and **Manifest V3** as headline features. WebUI performance and Docker CI are post-v1 polish.

---

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **"Slack auth gives 503 — redirect URL not saved"** | [#6544](https://github.com/nearai/ironclaw/issues/6544) | Blocks hosted agent onboarding; no UI/CLI workaround |
| **"Agent fabricates data (AQI 199) and doubles down when challenged"** | [#6650](https://github.com/nearai/ironclaw/issues/6650) | Trust erosion; hallucination from cached/mixed sources |
| **"Telegram bot goes silent after pairing — messages vanish"** | [#6643](https://github.com/nearai/ironclaw/issues/6643) | Channel unusable; no error visibility |
| **"Slack send_message lies — says sent, never delivered"** | [#6645](https://github.com/nearai/ironclaw/issues/6645) | Silent failure; user believes action completed |
| **"Tool panel shows after response — can't watch execution"** | [#6649](https://github.com/nearai/ironclaw/issues/6649) | Debugging blind; breaks mental model of agent transparency |
| **"Error messages in English despite language setting"** | [#6623](https://github.com/nearai/ironclaw/issues/6623) | i18n regression; non-English users see raw errors |
| **"CLI not available on staging SSH (`ironclaw: command not found`)"** | [#6521](https://github.com/nearai/ironclaw/issues/6521) | Operator workflow broken; **fixed today** |

**Sentiment:** **High frustration on channel reliability and truthfulness** — users experience silent failures, hallucinations, and UI that obscures agent behavior. Launch-checklist items show the team recognizes these as ship-blockers.

---

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#4058](https://github.com/nearai/ironclaw/pull/4058) | Opened 2026-05-25 (61 days) | **KMS curve-capability fail-closed** for custodial-mainnet ship gate — security-critical signing hardening. Updated today but no merge. | **Open (XL, low risk)** |
| [#4060](https://github.com/nearai/ironclaw/pull/4060) | Opened 2026-05-25 (61 days) | **Attested signing continuation assertions** + whole-stack review follow-up. Blocks signing substrate coherence. | **Open (M, low risk)** |
| [#4104](https://github.com/nearai/ironclaw/pull/4104) | Opened 2026-05-27 (59 days) | **Grant expiry + binding tenant-key + retryable consistency** — durable store follow-ups from review. Multi-tenant isolation dependency. | **Open (XL, low risk)** |
| [#4055](https://github.com/nearai/ironclaw/pull/4055) | Opened 2026-05-25 (61 days) | **TrustEnrollment ceremony + connected-wallet trust registration** — external wallet unblocker. | **Open (XL, low risk)** |
| [#4054](https://github.com/nearai/ironclaw/pull/4054) | Opened 2026-05-25 (61 days) | **Multi-tenant operating model + cross-tenant isolation tests** — makes tenant dimension explicit. | **Open (L, low risk)** |
| [#5563](https://github.com/nearai/ironclaw/pull/5563) | Opened 2026-07-02 (23 days) | **WebUI design system tokens + /playground** — foundation for autonomous AI-implemented improvements. Design leadership priority. | **Open (XL, low risk)** |
| [#6530](https://github.com/nearai/ironclaw/pull/6530) | Opened 2026-07-22 (3 days) | **Bounded pre-termination warning turns** — converts `NoProgressDetected`/`IterationLimit` to typed host-authored warning with checkpointing. Supports #6284. | **Open (XL, medium risk)** |
| [#6531](https://github.com/nearai/ironclaw/pull/6531) | Opened 2026-07-22 (3 days) | **Apply admin OAuth config at runtime** — resolves Manifest V3 OAuth creds from tenant-scoped admin config revision. Fail-closed. | **Open (XL, medium risk)** |
| [#6364](https://github.com/nearai/ironclaw/pull/6364) | Opened 2026-07-20 (5 days) | **Telegram/Slack channel attachments via restricted egress** — vendor protocol confined to extension, host-mediated egress. Slack fails closed intentionally. | **Open (XL, low risk)** |

**Critical cluster:** The **attested signing / multi-tenant / trust enrollment** PRs (#4054, #4055, #4058, #4060, #4104) have been open for **~60 days** with continuous updates. They represent the **custodial security substrate** and are likely gating mainnet readiness. Maintainer review bandwidth appears to be the bottleneck.

---

## Project Health Assessment

| Dimension | Signal | Assessment |
|-----------|--------|------------|
| **Velocity** | 82 items/24h, 19 PRs closed | 🟢 Very high — launch crunch |
| **Launch Readiness** | 6/6 launch-checklist issues closed

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-25

---

## 1. Today's Overview
LobsterAI shows **high development velocity** with 50 PRs updated in the last 24h (43 merged/closed) and a new patch release (2026.7.23) shipped two days ago. The merged PRs focus heavily on **Windows installer hardening, Cowork session stability, scheduled-task reliability, and build/signing pipeline fixes**. However, the issue backlog remains stubborn: 19 open issues updated recently, many stale since April–May, covering model-provider regressions, connection drops, UI/UX gaps, and a confirmed security vulnerability. The project is shipping fixes fast but struggling to close the feedback loop on user-reported blockers.

---

## 2. Releases
### **2026.7.23** (2026-07-23)
| Change | PR | Type |
|--------|----|------|
| Improve AI skin creation flow | [#2361](https://github.com/netease-youdao/LobsterAI/pull/2361) | `feat(skin)` |
| Support browser multi-comment attachments in Cowork | [#2366](https://github.com/netease-youdao/LobsterAI/pull/2366) | `feat(cowork)` |
| Add explicit channel entry points for Wind (build) | — | `feat(build)` |

**Breaking changes / migration notes:** None documented. Patch-level release; safe to upgrade.

---

## 3. Project Progress — Merged / Closed PRs (Last 24h)
| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2382](https://github.com/netease-youdao/LobsterAI/pull/2382) | Cowork | Model timeout → 330s; distinguish timeout vs network failure; long-wait hint at 30s | **Stability**: reduces false “engine lost” errors |
| [#2327](https://github.com/netease-youdao/LobsterAI/pull/2327) | Build (Windows) | Sign every Windows binary (exe, uninstaller, installer) via internal service | **Security/Install**: fixes AV false-positives & install hangs |
| [#2326](https://github.com/netease-youdao/LobsterAI/pull/2326) | Installer (Windows) | Self-heal interrupted `win-resources.tar` extraction; watchdog fallback | **Reliability**: recovers from AV-blocked installs |
| [#2314](https://github.com/netease-youdao/LobsterAI/pull/2314) | Scheduled-task | Preserve WeCom/DingTalk group ID casing; fix cron false `delivered=true` | **Correctness**: fixes IM group message delivery |
| [#2328](https://github.com/netease-youdao/LobsterAI/pull/2328) | Browser/Skills | Serialize concurrent browser launch/search to stop Chrome leaks | **Resource leak fix** |
| [#2264](https://github.com/netease-youdao/LobsterAI/pull/2264) | Cowork | Reduce collapsed tool-result formatting 64K→16K; add diagnostics ZIP export | **Perf + Debuggability** |
| [#2299](https://github.com/netease-youdao/LobsterAI/pull/2299) | Cowork | Sync subagent child tool history; recover orphan tool results | **Subagent visibility** |
| [#2261](https://github.com/netease-youdao/LobsterAI/pull/2261) | Cowork | Repair subagent panel timestamps; guard against invalid timestamps | **UI correctness** |
| [#2306](https://github.com/netease-youdao/LobsterAI/pull/2306) | Scheduled-task | Repair IM group task routing; normalize legacy announce jobs | **IM automation** |
| [#2231](https://github.com/netease-youdao/LobsterAI/pull/2231) | Scheduled-task | Restore gateway-backed run history; fix empty-state on startup | **History reliability** |
| [#2309](https://github.com/netease-youdao/LobsterAI/pull/2309) | Build | ES2020-compatible null-byte stripping; trigger CI on shared TS changes | **Build hygiene** |
| [#2340](https://github.com/netease-youdao/LobsterAI/pull/2340) | — | Revert “fix: fixed model not allowed” ([#2337](https://github.com/netease-youdao/LobsterAI/pull/2337)) | **Rollback** of problematic change |

**Theme:** The team is systematically hardening the **Windows distribution pipeline**, **Cowork session rendering**, and **IM/scheduled-task reliability** — all high-user-impact surfaces.

---

## 4. Community Hot Topics
| Issue | Comments | 👍 | Core Need | Status |
|-------|----------|-----|-----------|--------|
| [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) DeepSeek V4 “provider rejected request schema” | 7 | 0 | **Model compatibility** — users blocked on popular provider | Stale since Apr 24 |
| [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) Infinite `NO_REPLY` / mid-stream cutoff on follow-up | 3 | 0 | **Streaming reliability** — task marked complete while model still outputting | Stale since Apr 28 |
| [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) WeChat IM bot: no verification-code input UI after QR scan | 3 | 0 | **IM onboarding** — latest WeChat requires 6-digit code entry in client | Stale since Apr 30 |
| [#1797](https://github.com/netease-youdao/LobsterAI/issues/1797) Batch conversation deletion for context hygiene | 1 | 1 | **Context management** — users need to purge stale chats | Stale since Apr 23 |
| [#1836](https://github.com/netease-youdao/LobsterAI/issues/1836) Full UI redesign request (“too ugly vs competitors”) | 2 | 0 | **UX polish** — perceived as major adoption blocker | Stale since Apr 27 |
| [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) **Security**: Email SKILL path-traversal in `imap.js` | 1 | 0 | **Vulnerability** — unsanitized attachment names allow `../../` writes | Stale since May 6 |

**Analysis:** Top pain points cluster around **model-provider integration** (DeepSeek, Ali BaiLian), **streaming/connection stability**, and **IM bot onboarding**. The security issue (#1885) has had a fix PR ([#1831](https://github.com/netease-youdao/LobsterAI/pull/1831)) open since April but remains unmerged.

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Symptom | Fix PR? |
|----------|-------|---------|---------|
| **Critical** | [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) Path traversal in email SKILL | Arbitrary file write via attachment name | [#1831](https://github.com/netease-youdao/LobsterAI/pull/1831) (stale, security-focused) |
| **High** | [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) DeepSeek V4 schema rejection | Complete provider failure | None |
| **High** | [#1993](https://github.com/netease-youdao/LobsterAI/issues/1993) AI engine connection lost (desktop) | Desktop app unusable; IM bot works | None |
| **High** | [#1796](https://github.com/netease-youdao/LobsterAI/issues/1796) Write/Edit tools always fail | File operations broken for days | None |
| **High** | [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) Ali BaiLian qwen3.6-plus forced to NetEase model | Config overridden; quota errors | None |
| **Medium** | [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) Infinite `NO_REPLY` / mid-stream cutoff | Follow-up questions break | None |
| **Medium** | [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) WeChat verification code UI missing | IM bot setup impossible | None |
| **Medium** | [#2017](https://github.com/netease-youdao/LobsterAI/issues/2017) Local dev: “OpenClaw runtime not detected” | Contributors cannot run locally | None |
| **Medium** | [#1971](https://github.com/netease-youdao/LobsterAI/issues/1971) Chat scroll broken with long Mermaid elements | Virtual list height thrash | None |
| **Low** | [#2039](https://github.com/netease-youdao/LobsterAI/issues/2039) Dreaming switch config lost on gateway restart | Requires manual schema patch | None (upstream OpenClaw) |

**Note:** 4 security-hardening PRs ([#1831](https://github.com/netease-youdao/LobsterAI/pull/1831), [#1832](https://github.com/netease-youdao/LobsterAI/pull/1832), [#1833](https://github.com/netease-youdao/LobsterAI/pull/1833), [#1835](https://github.com/netease-youdao/LobsterAI/pull/1835)) have been open since **April 27** — they address log sanitization, store IPC authorization, `shell.openExternal` scheme allowlist, and duplicate error messages. Merging these would close the critical vulnerability and reduce attack surface.

---

## 6. Feature Requests & Roadmap Signals
| Request | Issue/PR | Likelihood for Next Version | Rationale |
|---------|----------|-----------------------------|-----------|
| **Kimi K3 support** | [#2381](https://github.com/netease-youdao/LobsterAI/pull/2381) (open PR) | **High** — active PR, model-provider work is ongoing |
| **Conversation deletion (batch)** | [#1797](https://github.com/netease-youdao/LobsterAI/issues/1797) | **Medium** — 1 👍, clear UX need, low complexity |
| **Skeleton screen for Cowork init** | [#1920](https://github.com/netease-youdao/LobsterAI/issues/1920) | **Medium** — UI consistency, straightforward |
| **Richer empty states (Skills, History)** | [#1921](https://github.com/netease-youdao/LobsterAI/issues/1921) | **Medium** — design system alignment |
| **Hermes Agent integration (Open WebUI style)** | [#1880](https://github.com/netease-youdao/LobsterAI/issues/1880) | **Low** — architectural

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-25

## 1. Today's Overview
Moltis saw **zero issue activity** and **two open pull requests** updated in the last 24 hours, both authored by `penso` and focused on Slack integration enhancements. No PRs were merged, no releases shipped, and no community discussions (comments/reactions) were recorded. The project is in a **quiet maintenance phase** with incremental Slack bot improvements staged for review.

## 2. Releases
**None** — no new versions published today.

## 3. Project Progress
**No PRs merged or closed today.** Two feature PRs remain open and under review:
- **#1165** — Adds Slack acknowledgment reactions + reaction triggers; fixes a threaded-reply bug.  
- **#1166** (stacked on #1165) — Implements eight further Slack improvements: phased reactions, reconnect supervision, Block Kit support, and a premature-ack bugfix in `chat.send`.

Both PRs originated 2026-07-24 and have not yet received reviewer feedback.

## 4. Community Hot Topics
**No active discussions.** Both open PRs have **0 comments and 0 reactions**, indicating no community engagement or maintainer review yet. The top items by default are the two Slack PRs:
- [PR #1165](https://github.com/moltis-org/moltis/pull/1165) — Slack ack reactions & triggers
- [PR #1166](https://github.com/moltis-org/moltis/pull/1166) — Phase reactions, reconnect, Block Kit, bugfix

*Underlying need:* Contributors are iterating on Slack UX parity (typing indicators via reactions, richer payloads) but lack reviewer bandwidth.

## 5. Bugs & Stability
**No new bug reports or regressions filed today.**  
One **confirmed bug fix** is bundled in PR #1165 (wrong-message bug in threaded replies) and another in PR #1166 (premature-ack in `chat.send`). Both fixes are **pending merge**; no standalone bug issues exist.

## 6. Feature Requests & Roadmap Signals
**No new feature requests** (issues) opened today.  
The two open PRs signal the **near-term roadmap**:
1. **Slack reaction-based acknowledgments** (merged into #1165) — addresses missing typing indicator.
2. **Block Kit & reconnect supervision** (#1166) — modernizes message rendering and resilience.
3. **Phased reactions** (#1166) — finer-grained progress feedback.

Given the stacked nature, these will likely land together in the next minor release.

## 7. User Feedback Summary
**No user-reported pain points, use cases, or satisfaction signals** captured in the last 24 h (zero issues, zero PR comments). Feedback loop appears dormant.

## 8. Backlog Watch
**No long-unanswered issues** (issue count = 0).  
**Two PRs awaiting first review** (both opened 2026-07-24):
- [PR #1165](https://github.com/moltis-org/moltis/pull/1165) — 24 h without review
- [PR #1166](https://github.com/moltis-org/moltis/pull/1166) — 24 h without review

*Maintainer attention needed:* Assign reviewers to unblock the Slack integration stack.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-07-25

---

## 1. Today's Overview

CoPaw (QwenPaw) is in a **high-velocity stabilization phase** following the v2.0.0 major release. The project shipped **v2.0.1** and **v2.0.1-beta.3** today, focusing on the new PawApp mini-app platform (Kanban board) and console performance fixes. However, the community is actively reporting **critical regressions**: a ~2-second fixed latency overhead per reply vs v1.x, missing SSH/Profiles features returning 404s, and MCP tool resolution failures. With 50 issues and 36 PRs updated in 24h, maintainers are triaging a mix of v2.0 migration blockers, performance regressions, and a wave of new feature requests (RAG, multi-model agents, agent isolation). The project health is **active but fragile** — rapid iteration is introducing user-facing breakage that needs urgent patching.

---

## 2. Releases

### v2.0.1 (Stable) & v2.0.1-beta.3
| Version | Type | Key Changes | Links |
|---------|------|-------------|-------|
| **v2.0.1** | Stable | • **PawApp Platform**: New mini-app SDK + built-in **Kanban task board** app for project management (#6150)<br>• Plugin architecture for rich interactive UIs on top of QwenPaw | [Release Notes](https://github.com/agentscope-ai/QwenPaw/pull/6150) |
| **v2.0.1-beta.3** | Beta | • `perf(console)`: Stabilize chat options memo, reduce SSE re-parsing (#6393)<br>• Version bump & date update (#6404) | [PR #6393](https://github.com/agentscope-ai/QwenPaw/pull/6393), [PR #6404](https://github.com/agentscope-ai/QwenPaw/pull/6404) |

**Migration Notes / Breaking Changes** (from v1.x → v2.0):
- SSH Offline & Profiles endpoints return **404** — features not yet ported ([#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980))
- MCP tool naming changed to `[mcp-key]__[tool_name]` causing "Tool not found" errors ([#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405))
- ReAct Agent context serialization breaks OpenAI-compatible API (tool_result mixed into assistant role) ([#6407](https://github.com/agentscope-ai/QwenPaw/issues/6407))
- Cron task "Tool Execution Safety Check" defaults to **OFF** — safety regression ([#6458](https://github.com/agentscope-ai/QwenPaw/issues/6458))

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Title | Area | Status | Impact |
|----|-------|------|--------|--------|
| [#6393](https://github.com/agentscope-ai/QwenPaw/pull/6393) | `perf(console)`: stabilize chat options memo, reduce SSE re-parsing | Console Performance | Merged (v2.0.1-beta.3) | Directly addresses v2.0 latency overhead |
| [#6404](https://github.com/agentscope-ai/QwenPaw/pull/6404) | `chore`: bump version to v2.0.1 | Release | Merged | Version cut |
| [#6401](https://github.com/agentscope-ai/QwenPaw/issues/6401) | Cron task reusing session overwrites history | Core/Backend | Closed | Data loss bug acknowledged |
| [#6341](https://github.com/agentscope-ai/QwenPaw/issues/6341) | Deleted channel persists as default for new agents | Console/UI | Closed | UX fix |
| [#6451](https://github.com/agentscope-ai/QwenPaw/issues/6451) | Switch Brains Mid-Conversation: Assistant Picker | Enhancement | Closed (review-later) | Deferred to backlog |
| [#6450](https://github.com/agentscope-ai/QwenPaw/issues/6450) | Web-Search Toggle on Chat Box | Enhancement | Closed (review-later) | Deferred to backlog |
| [#6449](https://github.com/agentscope-ai/QwenPaw/issues/6449) | Per-Chat Sampling & Parameter Overrides | Enhancement | Closed (review-later) | Deferred to backlog |
| [#6448](https://github.com/agentscope-ai/QwenPaw/issues/6448) | Embedded Mini-Apps in Sidebar | Enhancement | Closed (review-later) | **Partially delivered** via PawApp/Kanban in v2.0.1 |
| [#6447](https://github.com/agentscope-ai/QwenPaw/issues/6447) | Built-in Notes with AI Superpowers | Enhancement | Closed (review-later) | Deferred |
| [#6446](https://github.com/agentscope-ai/QwenPaw/issues/6446) | One-Click OCR for Images & PDFs | Enhancement | Closed (review-later) | Deferred |
| [#6445](https://github.com/agentscope-ai/QwenPaw/issues/6445) | Built-in Image Generation | Enhancement | Closed (review-later) | Deferred |
| [#6444](https://github.com/agentscope-ai/QwenPaw/issues/6444) | Built-in Translation Panel | Enhancement | Closed (review-later) | Deferred |
| [#6443](https://github.com/agentscope-ai/QwenPaw/issues/6443) | Instant Startup with Lazy Agent Loading | Performance | Closed (review-later) | Deferred |
| [#6442](https://github.com/agentscope-ai/QwenPaw/issues/6442) | Parallel Sub-Agents | Architecture | Closed (review-later) | Deferred |
| [#6441](https://github.com/agentscope-ai/QwenPaw/issues/6441) | Bundled MCP Runtimes & One-Click Install | MCP/DevEx | Closed (review-later) | Deferred |

**Key Insight**: 14 enhancement issues from a single user (Hazemaan) were batch-closed as "Close-and-review-later" — signaling maintainers are **protecting focus** on v2.0 stabilization over new features. The Kanban mini-app (#6150) delivered on the "Embedded Mini-Apps" vision.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | Core Need | Link |
|------|------|----------|-----------|------|
| **#5980** | Issue | 7 | **v1.x feature parity**: SSH Offline & Profiles missing (404) — blocking workflows | [View](https://github.com/agentscope-ai/QwenPaw/issues/5980) |
| **#6307** | Issue | 7 | **Performance regression**: ~2s fixed overhead per reply vs v1.x — architectural | [View](https://github.com/agentscope-ai/QwenPaw/issues/6307) |
| **#2999** | Issue | 3 | **MCP stability**: Repeated `list_tools()` on every request causes `CancelledError` | [View](https://github.com/agentscope-ai/QwenPaw/issues/2999) |
| **#6405** | Issue | 3 | **MCP tool resolution**: Tools renamed to `[key]__[name]` but "not found" at runtime | [View](https://github.com/agentscope-ai/QwenPaw/issues/6405) |
| **#6407** | Issue | 2 | **ReAct Agent + OpenAI API**: Context serialization produces invalid message format | [View](https://github.com/agentscope-ai/QwenPaw/issues/6407) |
| **#6461** | Issue | 1 | **Agent isolation**: Cross-agent memory leakage in multi-bot deployment (privacy critical) | [View](https://github.com/agentscope-ai/QwenPaw/issues/6461) |
| **#6460** | Issue | 1 | **High CPU on Edge/Wayland**: Large result sets / WebSocket push triggering render issues | [View](https://github.com/agentscope-ai/QwenPaw/issues/6460) |
| **#6323** | PR | — | **Staged compaction & durable task continuity** — major Scroll redesign | [View](https://github.com/agentscope-ai/QwenPaw/pull/6323) |
| **#6284** | PR | — | **QwenPaw Creator app**: Script→assets→storyboard→video workflow | [View](https://github.com/agentscope-ai/QwenPaw/pull/6284) |
| **#6424** | PR | — | **Native computer-use**: Desktop GUI automation (Windows/macOS accessibility + Tauri) | [View](https://github.com/agentscope-ai/QwenPaw/pull/6424) |

**Underlying Themes**:
1. **v2.0 Migration Pain** — Users expect feature parity; SSH, Profiles, MCP tooling broken
2. **Performance & Architecture** — 2s overhead suggests request pipeline serialization or cold-start issues
3. **Multi-tenant/Production Hardening** — Agent isolation (#6461), Cron safety defaults (#6458), auth for plugin ops (#6428)
4. **Platform Ambition** — PawApp/Kanban, Creator, Computer-Use, third-party agent integrations (Codex, Qoder) show push toward **AI OS** vision

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Description | Fix PR / Status |
|----------|-------|-------------|-----------------|
| **🔴 Critical** | [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461) | **Cross-agent memory leakage** — Group bot accesses private 1-on-1 agent memory & settings | No PR yet; needs architectural isolation |
| **🔴 Critical** | [#6407](https://github.com/agentscope-ai/QwenPaw/issues/6407) | **ReAct Agent context corrupts OpenAI API** — `tool_result` merged into `role:assistant` → 400 error | No PR yet; serialization bug |
| **🟠 High** | [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | **~2s fixed latency overhead** per reply vs v1.x — architectural change in request pipeline | Partially addressed in [#6393](https://github.com/agentscope-ai/QwenPaw/pull/6393) (SSE memo) |
| **🟠 High** | [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) | **SSH Offline & Profiles return 404** — features missing from v2.0 | No PR; feature gap |
| **🟠 High** | [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) | **MCP tools "not found"** despite correct `[key]__[name]` format | No PR; registration/resolution bug |
| **🟡 Medium** | [#2999](https://github.com/agentscope-ai/QwenPaw/issues/2999) | **MCP `list_tools()` on every request** → `CancelledError` on slow servers | No PR; needs connection pooling/caching |
| **🟡 Medium** | [#6401](https://github.com/agentscope-ai/QwenPaw/issues/6401) | **Cron task overwrites session history** when `share_session: true` | Closed (acknowledged), fix pending |
| **🟡 Medium** | [#6458](https://github.com/agentscope-ai/QwenPaw/issues/6458) | **Cron "Tool Safety Check" defaults OFF** — unsafe default for scheduled tasks | No PR; config default change needed |
| **🟢 Low** | [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | **High CPU on Edge/Wayland** — large result sets / WS push render thrashing | No PR; frontend optimization needed |
| **🟢 Low** | [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258) | **OpenAI `max_output_tokens` ignored** | No PR; provider config bug |

**Fix PRs in Progress**:
- [#6459](https://github.com/agentscope-ai/QwenPaw/pull/6459) — `fix(history)`: Harden SQLite persistence, backup, restore (addresses data integrity)
- [#6409](https://github.com/agentscope-ai/QwenPaw/pull/6409) — `fix(local-models)`: Ignore non-object tool call JSON (parser hardening)
- [#6410](https://github.com/agentscope-ai/QwenPaw/pull/6410) — `fix(providers)`: Strip annotated null Gemini schemas (schema compat)
- [#6412](https://github.com/agentscope-ai/QwenPaw/pull/6412) — `fix(shell)`: Preserve multiline for Windows PowerShell (cross-platform fix)
- [#6428](https://github.com/agentscope-ai/QwenPaw/pull/6428) — `fix(auth)`: Require auth for plugin install/upload even on localhost (security)

---

## 6. Feature Requests & Roadmap Signals

| Feature | Demand Signal | Likelihood (Next Version) | Notes |
|---------|---------------|---------------------------|-------|
| **Agent Isolation / Multi-tenancy** | [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461) (privacy leak), production deployments | **High** | Critical for server deployments; architectural |
| **Built-in RAG / Knowledge Base** | [#6432](https://github.com/agentscope-ai/QwenPaw/issues/6432) — "single most-requested capability" | **Medium-High** | Aligns with PawApp platform; memory/reranker PRs active ([#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692), [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399)) |
| **Multi-model per Agent (ensemble)** | [#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) — "run ds, qwen, kimi independently & aggregate" | **Medium** | Third-party agent PR ([#6397](https://github.com/agentscope-ai/QwenPaw/pull/6397)) enables backend diversity |
| **Undo/Redo Last Turn** | [#6408](https://github.com/agentscope-ai/QwenPaw/issues/6408) — Cherry Studio parity | **Medium** | History DB exists; needs UI + `/undo` command |
| **Web Search Toggle in Chat** | [#6450](https://github.com/agentscope-ai/QwenPaw/issues/6450) — closed but "review-later" | **Low-Medium** | Deferred; PawApp could surface as mini-app |
| **Per-Chat Parameter Overrides** | [#6449](https://github.com/agentscope-ai/QwenPaw/issues/6449) — sampling, thinking budget, JSON schema | **Low-Medium** | Deferred; high UX value |
| **Native Computer-Use (GUI Automation)** | [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) — Windows/macOS accessibility + Tauri | **High** | Large PR open; flagship v2.x

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-07-25

## 1. Today's Overview
ZeptoClaw saw focused maintenance and feature delivery in the last 24 hours. One high-priority chore issue (#646) was opened to address CI regressions introduced by Rust 1.97.1 (new Clippy warnings and vulnerable dependency versions flagged by cargo-deny). Simultaneously, a Telegram streaming feature (#647/#648) was completed and merged, adding real-time progressive message edits for gateway responses. An open security-focused PR (#645) aims to scrub subprocess environments and properly reap timed-out process trees. No new releases were published. Overall activity is low-volume but high-impact, targeting CI health, security hardening, and UX polish.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress
| PR / Issue | Status | Summary |
|------------|--------|---------|
| [#648](https://github.com/qhkm/zeptoclaw/pull/648) | **Merged / Closed** | Implements Telegram gateway response streaming: channel-neutral cumulative outbound stream phases, progressive message edits with bounded cadence, UTF-16-safe overflow splitting, HTML final rendering, forum-topic/reply routing preservation, and fallback on preview failure. |
| [#647](https://github.com/qhkm/zeptoclaw/issues/647) | **Closed** | Feature issue tracking the Telegram streaming work; closed upon PR #648 merge. |
| [#645](https://github.com/qhkm/zeptoclaw/pull/645) | **Open** | Security/runtime fix: scrubs subprocess environment to prevent provider keys/credentials leakage into model-authored shell commands; ensures timed-out commands terminate and reap descendant process trees (including Docker containers). |

## 4. Community Hot Topics
| Item | Activity | Analysis |
|------|----------|----------|
| [#646](https://github.com/qhkm/zeptoclaw/issues/646) | 2 comments, P1-critical | **CI baseline breakage** after Rust 1.97.1 upgrade. Five new Clippy warnings in existing code (channels, providers, binary plugins) + cargo-deny blocks on `quick-xml 0.39.2` and `lopdf 0.40.0` (vulnerable versions). Maintainer qhkm is scoping a fix; this blocks clean CI and signals dependency drift. |
| [#648](https://github.com/qhkm/zeptoclaw/pull/648) | Merged same-day, 0 comments | **Telegram streaming** delivered rapidly (issue → PR → merge in <24h). Indicates mature contributor workflow and clear design (reuse existing `StreamEvent` path). No community discussion visible—likely internal feature. |

*Underlying needs*: CI reliability (blocking merges), supply-chain security (cargo-deny), and real-time UX for Telegram gateway users.

## 5. Bugs & Stability
| Severity | Item | Description | Fix Status |
|----------|------|-------------|------------|
| **Critical (P1)** | [#646](https://github.com/qhkm/zeptoclaw/issues/646) | CI fails on current toolchain: 5 new Clippy warnings + 2 vulnerable dependencies (`quick-xml`, `lopdf`). Blocks all PR validation. | **Open** — issue filed, fix not yet submitted. |
| **High (Security)** | [#645](https://github.com/qhkm/zeptoclaw/pull/645) | Subprocesses inherit full process env → secrets leakage; timeout logic doesn’t reap child process trees (zombie/Docker leaks). | **PR open** — under review, not merged. |
| — | — | No crash reports, regressions, or user-facing bugs filed today. | — |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Telegram response streaming** (progressive edits, UTF-16 safety, continuations) | [#647](https://github.com/qhkm/zeptoclaw/issues/647) / [#648](https://github.com/qhkm/zeptoclaw/pull/648) | **Delivered** — merged today. |
| **CI baseline restoration** (Clippy + cargo-deny on Rust 1.97.1) | [#646](https://github.com/qhkm/zeptoclaw/issues/646) | **Very high** — P1-critical, blocks all merges. |
| **Subprocess security hardening** (env scrubbing, process-tree reaping) | [#645](https://github.com/qhkm/zeptoclaw/pull/645) | **High** — security-related, PR ready for review. |
| **Channel-neutral streaming primitives** | PR #648 adds cumulative outbound stream phases | **Foundational** — may enable streaming for other channels (Discord, Slack, etc.) next. |

*Prediction*: Next patch/minor release will bundle CI fixes (#646), subprocess security (#645), and the Telegram streaming feature (#648). Watch for streaming abstraction reuse in other channel PRs.

## 7. User Feedback Summary
No external user feedback (issues, comments, reactions) visible in the last 24 hours. All activity originates from maintainer **qhkm** (author of both issues, both PRs). Project appears maintainer-driven with low community contribution volume. Pain points inferred from code: CI fragility on toolchain upgrades, subprocess credential exposure risk, and lack of real-time Telegram UX (now addressed).

## 8. Backlog Watch
| Item | Age | Risk | Notes |
|------|-----|------|-------|
| [#646](https://github.com/qhkm/zeptoclaw/issues/646) | 2 days | **High** — CI red on main toolchain; blocks all contributions. Needs Clippy fixes + dependency upgrades (quick-xml, lopdf). | P1-critical, assigned to maintainer. |
| [#645](https://github.com/qhkm/zeptoclaw/pull/645) | 2 days | **Medium** — Security fix pending review. No reviewer assigned visible. | Should be prioritized for merge post-CI fix. |
| *No other long-stale items surfaced in 24h window.* | | | |

---

**Health Indicators**  
✅ Feature velocity (streaming delivered fast)  
⚠️ CI baseline broken (P1)  
⚠️ Security PR awaiting review  
📉 Low external community engagement  

*Next check*: Monitor #646 resolution and #645 merge; watch for streaming abstraction reuse in other channel PRs.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-25

## 1. Today's Overview
ZeroClaw shows **high velocity with 97 total updates** (47 issues, 50 PRs) in the last 24 hours, reflecting a project in active feature development and stabilization phase. The absence of new releases suggests the team is accumulating changes for a significant v0.9.0 milestone focused on auth, security, gateway boundaries, and breaking changes (tracked in #7432). Activity spans RFC governance (#6808, #8396, #9323), security hardening (landlock sandbox, SSRF, verifiable intent), plugin architecture unification (#6489), and multi-channel improvements (Telegram, Discord, DingTalk, ACP/MCP). The 10 merged/closed PRs indicate steady integration throughput despite several large stacked PRs awaiting review.

## 2. Releases
**No new releases** in the last 24 hours. Current latest: **v0.8.3** (referenced in #9290). The v0.9.0 milestone (#7432) appears to be the next target, coordinating auth, security hardening, gateway boundaries, A2A/multi-agent boundaries, tool policy, and breaking-change work.

---

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#9305](https://github.com/zeroclaw-labs/zeroclaw/pull/9305) | `chore(deps): bump anchore/sbom-action from 0.17.9 to 0.24.0` | CI/Supply Chain | SBOM generation updated; dependabot-merged |
| [#8679](https://github.com/zeroclaw-labs/zeroclaw/pull/8679) | `docs(sop): clarify boolean condition comparisons` | SOP/Docs | Clarifies JSON boolean → string conversion in conditions |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | `audit: track 153 commits lost in bulk revert c3ff635` | Governance | **Closed** — recovery tracking complete |
| [#8834](https://github.com/zeroclaw-labs/zeroclaw/issues/8834) | `config set can't create new aliases outside providers.*` | Config | **Closed** — alias creation limitation addressed |
| [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | `Shell tool calls refused at autonomy level=full` | Runtime/Security | **Closed** — tool_dispatch reachability fixed |
| [#9204](https://github.com/zeroclaw-labs/zeroclaw/issues/9204) | `Landlock sandbox restricts ZeroClaw daemon itself` | Security/Sandbox | **Closed** — daemon self-lock resolved |
| [#9236](https://github.com/zeroclaw-labs/zeroclaw/issues/9236) | `Fresh Telegram aliases dropped after config reload` | Config/Channel | **Closed** — alias persistence fixed |
| [#9240](https://github.com/zeroclaw-labs/zeroclaw/issues/9240) | `save_dirty silently drops writes with dot in map key` | Config | **Closed** — model-id dots (gpt-4.1, etc.) now handled |
| [#7623](https://github.com/zeroclaw-labs/zeroclaw/issues/7623) | `Delegate to Codex/OAuth sub-agent fails — API key bleed` | Runtime/Delegate | **Closed** — provider resolution fixed post-#7266 |
| [#9116](https://github.com/zeroclaw-labs/zeroclaw/issues/9116) | `ACP console splits thinking into 1-2 word entries` | Web/UI | **Closed** — thought stream rendering fixed |

**Pattern:** Recent closures cluster around **config persistence bugs** (alias creation, dot-in-key, Telegram reload), **sandbox/security fixes** (landlock self-lock, shell tool dispatch), and **delegate/sub-agent provider resolution** — all critical for v0.9.0 stability.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) RFC: Work Lanes, Board Automation, Label Cleanup | 14 | Governance RFC | **Reduce maintainer toil** — automate work routing, eliminate manual label management; accepted, rollout in progress |
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) "Everything is a plugin" — unified plugin catalog | 4 | Architecture RFC | **Collapse Integrations + Plugins** into single catalog; high-risk, phased path from channels/providers/tools → Wasmtime/WIT components |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) RFC: Wire protocol first-class in provider construction | 3 | Architecture RFC | **Standardize provider onboarding** via wire protocol; avoid config-toggle fragmentation |
| [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) RFC: AI-assisted PR pre-review and re-review | 1 | CI/Governance | **Leverage CI results for AI review** while keeping human approval risk-based; reduce 48h review latency |
| [#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) Tracker: Restore ADR baseline & audit RFC decisions | 2 | Docs/Governance | **Close RFC→ADR gap** — many accepted RFCs lack decision records; restore mdBook ADR baseline |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) Tracker: v0.9.0 auth, security, gateway, breaking-change queue | 2 | Release Tracking | **v0.9.0 coordination surface** — auth, security hardening, gateway boundaries, A2A, tool policy |

**Underlying signals:** 
- **Governance maturation** — RFC process is active (5 RFCs in flight), ADR discipline needs catching up
- **Architectural consolidation** — "Everything is a plugin" (#6489) and wire-protocol-first providers (#8396) signal platform unification
- **Review scalability** — AI-assisted review RFC (#9330) addresses growing PR volume (50 updated today)

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Component | Status | Fix PR |
|----------|-------|-----------|--------|--------|
| **S0** Security/Data Loss | [#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) Shell tool workspace boundary bypass via symlinks | Tools/Shell | Open | — |
| **S1** Workflow Blocked | [#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) Windows installer fails: missing `TaskDialogIndirect` | Desktop/Tauri | Open | — |
| **S1** Workflow Blocked | [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) CLI cron jobs: delivery hardcoded to `none` | Cron/CLI | Open | [#9350](https://github.com/zeroclaw-labs/zeroclaw/pull/9350) |
| **S1** Workflow Blocked | [#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198) Discord typing indicator stuck after daemon reload | Channel/Discord | In Progress | — |
| **S2** Degraded | [#9285](https://github.com/zeroclaw-labs/zeroclaw/issues/9285) Nested `set_prop` masks invalid values as unknown props | Config | In Progress | — |
| **S2** Degraded | [#7904](https://github.com/zeroclaw-labs/zeroclaw/issues/7904) `always-inject` SKILL.md frontmatter broken in compact mode | Agent/Skills | Open | — |
| **S3** Minor | [#9116](https://github.com/zeroclaw-labs/zeroclaw/issues/9116) ACP console splits thinking into 1-2 word entries | Web/UI | **Closed** | — |
| **S3** Minor | [#7872](https://github.com/zeroclaw-labs/zeroclaw/issues/7872) QQ group replies need `msg_id` for passive reply | Channel/QQ | Open (Tracker) | — |

**Critical watch:** 
- **#9247 (S0)** — Symlink bypass in shell tool is a security boundary failure; no fix PR yet
- **#9290 (S1)** — Windows desktop completely blocked; likely Tauri/Windows API version mismatch
- **#9340 + #9350** — Cron delivery fix PR opened same day; good responsiveness

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for v0.9.0 | Notes |
|---------|--------|----------------------|-------|
| **Unified Plugin Catalog** ("Everything is a plugin") | [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | Medium | High-risk, phased; requires collapsing Integrations + Wasmtime plugins; tracked as RFC |
| **Wire-Protocol-First Provider Onboarding** | [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | High | Accepted RFC; directly enables provider unification; security-relevant |
| **Goal/SOP Control Plane (5/5 capabilities)** | [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) | High | Tracker shows 13 capabilities; stacked PRs #8687/#8688/#8689/#8746/#8996 in review |
| **ACP/MCP Resource.Blob Exchange** | [#9195](https://github.com/zeroclaw-labs/zeroclaw/pull/9195), [#9196](https://github.com/zeroclaw-labs/zeroclaw/pull/9196) | High | Binary resource support for ACP + MCP; stacked, depends on #9178 |
| **Verifiable Intent Credential Chain Verification** | [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | Medium | Security hardening; fix PR [#9327](https://github.com/zeroclaw-labs/zeroclaw/pull/9327) open |
| **Crusoe Managed Inference Provider** | [#9338](https://github.com/zeroclaw-labs/zeroclaw/pull/9338) | High | First-class OpenAI-compatible provider; 8-file convention; ready to merge |
| **Models.dev Context Window Catalog** | [#9347](https://github.com/zeroclaw-labs/zeroclaw/pull/9347) | High | Uses existing catalog download; fills missing `limit.context` |
| **DingTalk Streaming Messages** | [#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228) | Medium | Channel parity feature; reduces latency for long completions |
| **AI-Assisted PR Pre-Review** | [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) | Low (v0.9.0) | RFC just filed; CI integration needed; post-v0.9.0 likely |

**Strongest signals for v0.9.0:** Goal/SOP control plane (multiple stacked PRs), provider unification foundations (wire protocol, Crusoe, models.dev), ACP/MCP resource support, and security hardening (verifiable intent, landlock fixes).

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Config system fragility** | #8834, #9236, #9240, #9285 — alias creation, persistence, dot-in-key, nested validation all failing | Users cannot reliably configure channels/providers/models; silent drops erode trust |
| **Sandbox/self-lock breaks daemon** | #9204 (closed), #9114 (open PR) — landlock restricts ZeroClaw itself | Daemon instability; requires manual policy tuning; blocks shell tool usage |
| **Windows desktop unusable** | #9290 — installer fails at launch (`TaskDialogIndirect` missing) | Complete blocker for Windows users on v0.8.3 |
| **Cron output discarded silently** | #9340 — CLI jobs hardcoded `delivery=none`, runs show `ok` but no output | Users schedule jobs expecting results; nothing indicates failure |
| **Delegate/sub-agent auth bleed** | #7623 (closed) — Codex/OAuth sub-agents received coordinator's API key | Security risk in multi-agent workflows; fixed but indicates pattern |
| **ACP console UX degradation** | #9116 (closed) — thinking stream split into 1-2 word chunks | Debugging agent reasoning impaired; fixed in web dashboard |
| **Telegram file download retry waste** | #9315 — 400 errors consume full 3-attempt budget | Unnecessary latency; PR #9314 added retry but needs classification |

**Positive signals:** Rapid fix turnaround for config bugs (multiple closed same week), active RFC process for structural issues, stacked PRs showing coordinated feature work.

---

## 8. Backlog Watch — Stalled/Needs Maintainer Attention

| Item | Age | Type | Why It Matters |
|------|-----|------|----------------|
| [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) `fix(tools): add allowed_private_hosts opt-in to file_download SSRF gate` | 21 days | Security PR (XL, needs-author-action) | **3rd SSRF surface** from July audit; `file_download` had no host classifier; high-risk, large PR awaiting review |
| [#8857](https://github.com/zeroclaw-labs/zeroclaw/pull/8857) `feat(plugins): add scoped secrets and encrypted state` | 17 days | Feature PR (XL, needs-author-action) | **Plugin security foundation** — portable secret grammar, encrypted state; enables "everything is a plugin" (#6489) |
| [#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687) `feat(runtime): add goal controller and verifier` | 21 days | Feature PR (XL, needs-author-action) | **Core of SOP/Goal system** — stacked with #8688, #8689, #8746, #8996; 5 PRs blocked on this base |
| [#8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746) `fix(goal): stop active goal self-resume loops` | 20 days | Bug PR (XL, needs-author-action) | **Goal system stability** — prevents runaway loops; depends on #8689 |
| [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) `Reconcile cargo-audit ignores and remediate wasmtime-wasi CVEs` | 26 days | Security Issue (in-progress) | **Supply chain drift** — `audit.toml`/`deny.toml` divergence; wasmtime-wasi CVEs outstanding |
| [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) RFC: AI-assisted PR pre-review | 1 day | Governance RFC (new) | **Review scalability** — just filed; needs maintainer sponsorship to advance |
|

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*