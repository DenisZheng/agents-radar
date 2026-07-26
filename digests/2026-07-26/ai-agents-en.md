# OpenClaw Ecosystem Digest 2026-07-26

> Issues: 340 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-26 02:08 UTC

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

# OpenClaw Project Digest — 2026-07-26

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 340 issues and 500 PRs updated in the last 24 hours — a signal of both active development and significant operational friction. The 220 merged/closed PRs indicate strong throughput, but the 280 open PRs (many marked "needs proof" or "waiting on author") and 240 open issues suggest a growing review bottleneck. No new release was cut today. The issue landscape is dominated by **session-state stability** (memory corruption, snapshot restore failures, context bloat), **gateway reliability** (crash loops, heap leaks, startup failures), and **security hardening** (trust tagging, filesystem sandboxing, simulated tool calls). Several P0/P1 regressions in the 2026.7.x line are blocking users.

---

## 2. Releases

**No new releases today.** The latest version appears to be 2026.7.1-2 (referenced in issues #113466, #112906). Users report regressions in this line: `/new` and `/reset` not creating sessions (#113466), rich message rendering broken (#112906), and gateway startup failures (#108435, #109145).

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary | Status |
|----|------|---------|--------|
| [#113952](https://github.com/openclaw/openclaw/pull/113952) | Web UI | Inline stroke attributes via shared `strokeIcon` shell (fixes shadow-DOM icon rendering) | **CLOSED** |
| [#113882](https://github.com/openclaw/openclaw/pull/113882) | Web UI | Keep sidebar selection on archived sessions; show archived notice in composer | **CLOSED** |
| [#113937](https://github.com/openclaw/openclaw/pull/113937) | Doctor/Health | Split 2,211-line health module into scoped contributions | **CLOSED** |
| [#113947](https://github.com/openclaw/openclaw/pull/113947) | Web UI | Hide unusable Chat sidebar controls on read-only boards | **CLOSED** |
| [#113951](https://github.com/openclaw/openclaw/pull/113951) | Web UI | Restore scoped notification navigation (service worker routing) | **CLOSED** |
| [#113957](https://github.com/openclaw/openclaw/pull/113957) | Sessions | Detect external human turns in adopted Pi/OpenCode sessions | **CLOSED** |
| [#113967](https://github.com/openclaw/openclaw/pull/113967) | Gateway/Talk | Split realtime relay (1,647 lines → 6 ownership modules) | **CLOSED** |
| [#113970](https://github.com/openclaw/openclaw/pull/113970) | Meetings | Converge Google Meet probes/parsers with Teams/Zoom shared runtime | **CLOSED** |
| [#113857](https://github.com/openclaw/openclaw/pull/113857) | Auto-QA | Make campaign evidence verifiable (fix flaky detection) | **CLOSED** |

**Theme:** Heavy refactoring/cleanup (splitting god-modules, CSS linting, health checks) and UI polish. Few user-facing bug fixes merged today — most fixes are still in open PRs.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Issue/PR | Comments | 👍 | Core Need |
|----------|----------|----|-----------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging | 21 | 0 | **Security**: Tag memory by source (user/web/skill) to prevent poisoning attacks |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) Channel-mediated MCP approval | 15 | 1 | **Security**: Extend `/approve` flow to MCP tool calls (state-mutating ops) |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) SQLite snapshot restore lacks crash guarantees | 13 | 0 | **Data integrity**: Restore reports success without durable directory linking |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) Gateway fails to start on 2026.7.1 | 11 | 2 | **Regression**: Gateway startup broken across systemd/ollama/manual launch |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) Session context bloat (20-30% tokens) | 10 | 2 | **Cost/Perf**: Bootstrap files re-injected every turn |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) Filesystem Sandboxing Config | 10 | 4 | **Security**: `tools.fileAccess` allow/deny paths not working |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) Dynamic model discovery (OpenRouter) | 10 | 3 | **DX**: Static model catalog can't track fast-moving providers |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) Gateway heap grows to 1GB+ at idle (macOS) | 10 | 1 | **Stability**: Memory leak → cron jobs silently fail |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) Memory management chaos | 10 | 0 | **Consistency**: Three users see three different memory behaviors |
| [#75593](https://github.com/openclaw/openclaw/issues/75593) Subagents list empty after spawn | 10 | 1 | **Regression**: `/subagents list` returns empty despite childSessionKey |

**Underlying needs:** Users are hitting **trust boundaries** (memory, filesystem, MCP), **session reliability** (snapshots, context, subagents), and **gateway stability** (startup, memory, leaks). Security features requested months ago (#7707, #7722 from Feb) remain open with "needs-maintainer-review" — suggesting maintainer bandwidth is the bottleneck.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P0 / Release Blocker** | [#108435](https://github.com/openclaw/openclaw/issues/108435) | Gateway fails to start on 2026.7.1 (systemd, ollama, manual) — `gateway did not start on 127.0.0.1` | No |
| **P0 / Release Blocker** | [#109145](https://github.com/openclaw/openclaw/issues/109145) | Gateway HTTP server listens but accepts no connections (v2026.7.1-beta.5) | No |
| **P0 / Release Blocker** | [#95515](https://github.com/openclaw/openclaw/issues/95515) | Upgrade 2026.6.8→2026.6.9 corrupts email config (spurious `groupAllowFrom`) | No |
| **P0** | [#113466](https://github.com/openclaw/openclaw/issues/113466) | `/new` and `/reset` don't create new sessions in 2026.7.1-2 | No |
| **P1** | [#113306](https://github.com/openclaw/openclaw/issues/113306) | SQLite snapshot restore lacks crash/identity guarantees | No |
| **P1** | [#112423](https://github.com/openclaw/openclaw/issues/112423) | Large SQLite transcript cleanup blocks gateway event loop | No |
| **P1** | [#89445](https://github.com/openclaw/openclaw/issues/89445) | 2026.5.28 fails to start: `agents.list.*: Invalid input` (downgrade works) | No |
| **P1** | [#94251](https://github.com/openclaw/openclaw/issues/94251) | Ollama remote streaming not consumed — `model_call:started` never progresses | No |
| **P1** | [#98435](https://github.com/openclaw/openclaw/issues/98435) | MCP loopback transport doesn't auto-reconnect after gateway restart | No |
| **P1** | [#113315](https://github.com/openclaw/openclaw/issues/113315) | Telegram inbound update permanently lost after offset persistence | No |

**Pattern:** Multiple P0/P1 regressions in the 2026.7.x and 2026.6.x lines with **no linked fix PRs**. The gateway startup path and session lifecycle are fragile.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Votes | Signal | Likelihood for Next Version |
|-------|-------|--------|----------------------------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging | 0 | **Security foundation** — 5-month-old P2, labeled `impact:security`, `clawsweeper:needs-security-review` | Medium (blocked on review) |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) Filesystem Sandboxing | 4 | **Security foundation** — config exists but not enforced | Medium |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) MCP Channel Approval | 1 | **Security/UX** — extends existing approval flow to MCP | High (has `clawsweeper:linked-pr-open`) |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) Dynamic Model Discovery (OpenRouter) | 3 | **DX/Provider parity** — static catalog is a known gap | High (active discussion) |
| [#15032](https://github.com/openclaw/openclaw/issues/15032) Per-spawn Tool Restrictions | 0 | **Security/Subagents** — DMZ web search use case | Low (needs product decision) |
| [#9016](https://github.com/openclaw/openclaw/issues/9016) Expose OpenRouter Usage Cost | 1 | **Observability** — cost tracking for agents | Medium |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) Fallback on Context Length Exceeded | 0 | **Resilience** — fallback exists but not for context overflow | Medium |
| [#12219](https://github.com/openclaw/openclaw/issues/12219) Skill Permission Manifest (skill.yaml) | 0 | **Supply chain security** — informed consent for skills | Low (needs standard) |

**Prediction:** The MCP approval flow (#78308) and dynamic model discovery (#10687) have the clearest path — both have active discussion and partial implementations. Trust tagging and sandboxing are foundational but stalled on security review bandwidth.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Gateway unreliability** | #108435, #109145, #89445, #87109 | Cannot upgrade; forced to pin/downgrade; cron jobs silently fail |
| **Session/session-state corruption** | #113306, #113466, #112423, #92776, #67419 | Lost work, broken `/new`, context bloat, model pinning persists indefinitely |
| **Memory system inconsistency** | #43747, #90414, #43747, #113306 | Three users = three behaviors; search returns "index metadata missing"; snapshots unsafe |
| **Channel message loss** | #113315, #91564, #92186, #96007, #87299 | Telegram/ WhatsApp/ Discord messages silently dropped or truncated |
| **Security features missing** | #7707, #7722, #45049, #12219 | No trust tagging, sandboxing not enforced, simulated tool calls allowed, skills run with full trust |
| **Model/provider gaps** | #10687, #94251, #87325, #95840 | OpenRouter static catalog, Ollama streaming broken, Azure Foundry unsupported, OpenAI cache-ttl pruning disabled |

**Satisfaction signals:** Users are filing detailed repros (logs, configs, version bisects) — they're invested but blocked. The "clawsweeper-recovery-stuck" label on 15+ issues indicates automated triage is stuck waiting for maintainer decisions.

---

## 8. Backlog Watch (Stalled High-Impact Items)

| Item | Age | Labels | Why It Matters |
|------|-----|--------|----------------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging | 5 months | `enhancement, P2, impact:security, clawsweeper:needs-security-review` | Foundational for memory poisoning defense; no movement since Feb |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) Filesystem Sandboxing | 5 months | `enhancement, P2, impact:security, clawsweeper:needs-security-review` | Config exists but unimplemented; 4 👍 |
| [#45049](https://github.com/openclaw/openclaw/issues/45049) Simulated Tool Calls Allowed | 4 months | `P1, impact:security, clawsweeper:needs-security-review` | Agent loops simulate tools instead of invoking — safety gap |
| [#12219](https://github.com/openclaw/openclaw/issues/12219) Skill Permission Manifest | 5 months | `enhancement, P2, impact:security, clawsweeper:needs-security-review` | Supply chain risk; no permission standard for skills |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) Context Bloat (20-30% tokens) | 3 months | `P2, impact:session-state, clawsweeper-recovery-stuck` | Direct cost/perf hit; bootstrap re-injected every turn |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) Gateway Heap Leak (macOS) | 2 months | `stale, P1, impact:crash-loop, impact:message-loss` | 1GB+ at idle → cron starvation; reproducible |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) Memory Management Chaos | 

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Ecosystem (2026-07-26)

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape shows **bimodal velocity**: a top tier (OpenClaw, Hermes, ZeroClaw, IronClaw, NanoBot) pushing 50–500 PRs/day with architectural rewrites, and a second tier (NanoClaw, PicoClaw, Moltis, LobsterAI) iterating steadily on hardening and UX. **No project cut a release today** — the ecosystem is in a collective stabilization window, with NanoBot’s v0.3.0 the only recent major milestone. Security hardening (sandboxing, trust tagging, privilege dropping), multi-protocol gateway reliability, and session-state integrity are the universal preoccupations. Community size correlates with PR throughput: OpenClaw and ZeroClaw show deep contributor benches; CoPaw and Moltis exhibit maintainer bandwidth constraints.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Merged/Closed PRs | Release Status | Health Score |
|---------|----------------|-------------|-------------------|----------------|--------------|
| **OpenClaw** | 340 | 500 | 220 | None (2026.7.1-2 latest) | 🟡 High velocity, review bottleneck, P0 regressions |
| **NanoBot** | 1 | 7 | 7 | **v0.3.0 today** | 🟢 Excellent — release discipline, CI live, WebUI-first |
| **Hermes Agent** | 50 | 50 | 17 | None (imminent) | 🟡 Critical Windows/security bugs, multi-agent work |
| **PicoClaw** | 2 | 3 | 2 | None (v0.3.1) | 🟡 Matrix reconnection bug 24d, Simplex PR 29d stale |
| **NanoClaw** | 2 | 11 | 1 | None | 🟢 Strong hardening sprint, rapid bug fix PRs |
| **NullClaw** | 0 | 0 | 0 | — | ⚪ Inactive |
| **IronClaw** | 11 | 20 | 9 | None (v1 prep, release PR 23d stale) | 🟢 Good fix turnaround, bundle -69%, v1 checklist |
| **LobsterAI** | 9 (8 stale-closed) | 11 | 11 | None | 🟡 Batch UX delivery, 2 backlog items stale-closed |
| **TinyClaw** | 0 | 0 | 0 | — | ⚪ Inactive |
| **Moltis** | 0 | 5 | 2 | None | 🟡 Feature expansion, zero community signals |
| **CoPaw** | 7 | ~6 | 0 (2 closed) | None (v2.0.1) | 🔴 MCP regression (3× dup), Wayland leak, no merges |
| **ZeptoClaw** | 0 | 0 | 0 | — | ⚪ Inactive |
| **ZeroClaw** | 19 | 50 | 2 | v0.8.4 target 7/31 | 🟡 S1 WhatsApp bypass, CI flakiness, XL PR saturation |

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale of operation**: 500 PRs/24h dwarfs all others; 220 merged shows real throughput despite bottleneck
- **Security depth**: Only project with formal trust-tagging (#7707), filesystem sandboxing (#7722), and simulated-tool-call blocking (#45049) tracked as security-review items
- **Session-state sophistication**: SQLite snapshot restore guarantees (#113306), context bloat measurement (20–30% tokens), subagent adoption detection — peer projects are earlier on these
- **Gateway architecture**: Explicit realtime relay split (#113967), MCP loopback transport, multi-launch-mode (systemd/ollama/manual) — IronClaw and ZeroClaw are converging here

**Technical Approach Differences:**
- **Monolithic core + modular gateways** vs. ZeroClaw’s microkernel + WASM plugins, IronClaw’s Cargo workspace + Reborn rewrite, NanoBot’s single-binary WebUI gateway
- **Security-first config**: `tools.fileAccess` allow/deny, memory trust tagging — others treat sandboxing as container-level (NanoClaw, ZeroClaw) or post-hoc
- **Session as first-class durable object**: Snapshot/restore, external adoption (Pi/OpenCode), context bootstrap control — Hermes and ZeroClaw have similar models; PicoClaw/NanoClaw lighter

**Community Size**: Largest by issue/PR volume and “clawsweeper” automated triage labels. 5-month-old security issues with `needs-maintainer-review` indicate **maintainer bandwidth is the limiting factor**, not contributor interest.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Gateway startup/reliability** | OpenClaw (#108435, #109145), Hermes (#71226), ZeroClaw (cron delivery), CoPaw (Platform deploy) | Systemd/container/OLlama launch parity; WebSocket connection stability; health-check endpoints |
| **Session-state durability** | OpenClaw (#113306, #113466), Hermes (#62726), ZeroClaw (verifiable-intent), NanoClaw (#3134) | Crash-safe snapshot restore; cross-tab/session isolation; host-message persistence in agent context |
| **Security sandboxing** | OpenClaw (#7722, #7707), NanoClaw (#2748, #3129), ZeroClaw (#7821, #9137), IronClaw (signed intent) | Filesystem allow/deny enforcement; memory trust tagging; container capability drop; egress policy unification |
| **Multi-protocol channel robustness** | OpenClaw (#113315, #98435), PicoClaw (#3203), Moltis (#1165, #1168), ZeroClaw (#8561, #8443), IronClaw (#6667, #6668, #6671) | Auto-reconnect with backoff; message acknowledgment; provider error surfacing; NIP-29/Buzz parity |
| **Model/provider abstraction** | OpenClaw (#10687), Hermes (#65982), ZeroClaw (#8486, #9200), CoPaw (#3122), LobsterAI (#2381) | Dynamic OpenRouter catalog; Claude Agent SDK OAuth; OpenAI-compat gateway; custom endpoint transport |
| **WebUI performance/UX** | IronClaw (#6632 -69% bundle), NanoBot (#4696 streaming), OpenClaw (shadow-DOM icons), Hermes (focus traps) | Route-level code splitting; frame-coalesced streaming; accessibility (focus management); i18n failure messages |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | IronClaw | Hermes | NanoBot | PicoClaw | NanoClaw | CoPaw | Moltis | LobsterAI |
|-----------|----------|----------|----------|--------|---------|----------|----------|-------|--------|-----------|
| **Primary Focus** | Core reference, session/gateway/security depth | Microkernel + WASM plugins, verifiable intent | Rust workspace, Reborn rewrite, v1 launch | Windows desktop, multi-agent gateway, Buzz | WebUI-first, CI, smooth streaming | Multi-channel bridge (Matrix/Simplex/Email), SBC | Container hardening, OpenCode compat | Browser unification, ReMeLight memory | Nostr/Buzz, Slack hardening, zvec memory | Cowork UI/UX polish, scheduling, Windows |
| **Target User** | Power users, self-hosters, security-conscious | Plugin developers, high-assurance deployments | NEAR ecosystem, TypeScript/Rust devs | Enterprise/desktop, Telegram/WhatsApp users | Desktop/WebUI users, low-friction onboarding | Privacy-focused, edge/SBC deployers | OpenCode migrators, container-native teams | Qwen/Alibaba ecosystem, browser automation | Block/Buzz workspace, Nostr natives | Chinese enterprise, scheduled agents |
| **Architecture** | Monolithic TS core, modular gateways | Microkernel (Rust), Wasmtime/WIT plugins | Cargo workspace (31 crates), Reborn extraction | TS + native deps, s6 supervision | Single binary (Go?), WebUI gateway | Python? Multi-process channels | Container-per-agent, MCP-centric | Electron + browser SDK (CDP/Playwright) | Rust, async actors, pluggable memory | Electron (React), renderer/main split |
| **Key Differentiator** | Session snapshots, trust tagging, doctor/health | Verifiable intent, plugin catalog unification | Error-recoverability contract, code splitting | Dual provider storage, Buzz integration | `nanobot webui` one-command, CI pipeline | Simplex + Matrix + ARMv7, Calendar/Email tools | Cap-drop/no-new-privs defaults, image-tag validation | Unified Browser SDK, ReMeLight reranker | NIP-29 group chat, zvec+redb vector backend | Workdays cron, Kimi K3, time-grouped sessions |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapid Iteration (High Velocity + Active Releases)** | **NanoBot** | v0.3.0 shipped today; 260 PRs/38 contributors since last release; CI green; WebUI auto-open merged same-day |
| **High Velocity, Pre-Release Stabilization** | **OpenClaw, Hermes, ZeroClaw, IronClaw** | 50–500 PRs/day; multiple P0/P1 blockers; architectural epics in flight (recoverability, plugin unification, multi-agent gateway); release cuts imminent |
| **Steady Hardening / Feature Completion** | **NanoClaw, PicoClaw, LobsterAI** | Focused PR batches (security, ARMv7, UX sprint); critical bugs have fix PRs; release cadence slower but predictable |
| **Early / Niche / Maintainer-Constrained** | **Moltis, CoPaw** | Moltis: feature PRs open ≥1 day without review signals; CoPaw: 3× duplicate critical bug, 0 merged PRs, new-user issues unanswered |
| **Inactive** | **NullClaw, TinyClaw, ZeptoClaw** | Zero 24h activity |

**Maturity Indicators**: NanoBot and IronClaw show release discipline (version bumps, changelogs, migration notes). OpenClaw and ZeroClaw have automated triage (`clawsweeper`, risk labels) but suffer maintainer review bandwidth. CoPaw lacks triage (duplicate bugs not deduped).

---

## 7. Trend Signals for AI Agent Developers

1. **Session durability is the new table stakes** — Crash-safe snapshot restore (OpenClaw, ZeroClaw), cross-tab isolation (Hermes), host-message persistence (NanoClaw) are all being built *now*. Projects without durable session state will lose self-hosting operators.

2. **Security is moving from container-level to in-process** — OpenClaw’s trust tagging, ZeroClaw’s verifiable intent, NanoClaw’s cap-drop defaults, IronClaw’s signed intent: the trend is **fine-grained, auditable boundaries inside the agent process**, not just Docker `--cap-drop`.

3. **Multi-protocol gateway = product differentiator** — Matrix reconnection (PicoClaw), NIP-29/Buzz (Moltis, ZeroClaw, Hermes), Telegram/Slack/GitHub onboarding (IronClaw), WhatsApp policy enforcement (ZeroClaw). **Channel reliability (auto-reconnect, acks, error surfacing) > channel count**.

4. **Model abstraction layers are consolidating** — OpenRouter dynamic discovery (OpenClaw), Claude Agent SDK OAuth (Hermes), OpenAI-compat gateway (ZeroClaw), custom endpoints (NanoClaw, CoPaw). Expect **`/model` command parity across projects within 2 releases**.

5. **WebUI is the primary interface** — IronClaw (-69% bundle), NanoBot (auto-open, smooth streaming), OpenClaw (shadow-DOM, notifications), Hermes (focus traps). **Route-level code splitting and streaming UX are now baseline expectations**.

6. **Automated quality gates are becoming mandatory** — NanoBot

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-26

## 1. Today's Overview
NanoBot shipped **v0.3.0** today, a major milestone marking 260 merged PRs and 38 new contributors since the last release. The project is in a high-velocity stabilization phase: 7 PRs were merged/closed and 5 remain open in the last 24 hours, with a strong focus on WebUI polish, CI/CD hardening, and sandbox/runtime fixes. The sole issue updated (#1131) was closed via PR #1284, which introduced the project’s first comprehensive CI pipeline. Overall health is **excellent** — rapid iteration, clear release discipline, and active community contribution.

---

## 2. Releases
### **v0.3.0** — “The agent gained agency”
- **Scope**: 260 PRs merged, 38 new contributors
- **Headline feature**: One-command WebUI launch (`nanobot webui`) — prepares local WebUI, starts gateway, opens browser workbench
- **Breaking changes / migration notes**:  
  - Compatibility cleanups deferred to v0.3.1 (see PR #5083) — legacy session path fallback, `agents.defaults.maxMessages` warning, and legacy config keys remain for this release
  - Version bump from 0.2.2 → 0.3.0 in package and source-tree fallback (PR #5081)
- **Documentation**: README overhauled to make `nanobot webui` the recommended quick-start path, clarify gateway vs. CLI entry points (PR #5082)
- **Links**: [Release v0.3.0](https://github.com/HKUDS/nanobot/releases/tag/v0.3.0) · [PR #5081 (release prep)](https://github.com/HKUDS/nanobot/pull/5081) · [PR #5082 (docs)](https://github.com/HKUDS/nanobot/pull/5082) · [PR #5083 (compat deferral)](https://github.com/HKUDS/nanobot/pull/5083)

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5085](https://github.com/HKUDS/nanobot/pull/5085) | feat/webui | Auto-open WebUI after fresh desktop install (`nanobot webui --yes`); preserves wizard for SSH/headless | **UX critical** — removes friction for new users |
| [#4696](https://github.com/HKUDS/nanobot/pull/4696) | feat/webui | Smooth streaming viewport with frame-coalesced ease-out camera; explicit scroll ownership model | **Polish** — eliminates jank during long agent outputs |
| [#4954](https://github.com/HKUDS/nanobot/pull/4954) | fix/webui | Keep late subagent turns visible — preserve delivery metadata, assign fresh turn IDs, route state via recovered WS | **Correctness** — fixes missing subagent output in WebUI |
| [#5083](https://github.com/HKUDS/nanobot/pull/5083) | chore | Defer 3 compatibility cleanups to v0.3.1; mark v0.3.0 as final compat window | **Release hygiene** |
| [#5082](https://github.com/HKUDS/nanobot/pull/5082) | docs | README restructure: WebUI-first, gateway/CLI clarified | **Onboarding** |
| [#5081](https://github.com/HKUDS/nanobot/pull/5081) | chore/release | Version bump, composer model badge fix, preset switcher sizing | **Release prep** |
| [#1284](https://github.com/HKUDS/nanobot/pull/1284) | ci | **First CI/CD pipeline** — automated tests on push/PR, quality tooling, tool validation tests | **Infra foundation** — closes #1131 |

**Net advancement**: WebUI is now the default happy path; CI exists; subagent streaming works; compatibility debt acknowledged and scheduled.

---

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [PR #1284](https://github.com/HKUDS/nanobot/pull/1284) — CI workflow | 4 comments (on linked issue #1131) | **Automated quality gate** — contributors need confidence that PRs won’t break main; maintainers need signal before merge |
| [PR #4696](https://github.com/HKUDS/nanobot/pull/4696) — WebUI streaming smoothness | Long-lived (opened 7/4, updated today) | **Perceived performance** — users report janky scrolling during token streaming; fix uses requestAnimationFrame coalescing |
| [PR #4954](https://github.com/HKUDS/nanobot/pull/4954) — Subagent visibility | Priority P1, conflict label | **Multi-agent UX** — subagent results were silently dropped; critical for agentic workflows |
| [PR #3035](https://github.com/HKUDS/nanobot/pull/3035) — Cron grace window | Open since 4/11, Chinese comments | **Reliability** — `at` jobs slightly past due (LLM latency) were never scheduled; 10-min grace window proposed |

**Pattern**: WebUI/UX polish and CI/infra dominate attention — the project is transitioning from “core agent works” to “delightful product.”

---

## 5. Bugs & Stability
| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **High** | [#4064](https://github.com/HKUDS/nanobot/issues/4064) — Pending message runtime context lost (channel, chat, sender, metadata) | Open | [PR #5084](https://github.com/HKUDS/nanobot/pull/5084) (open, P1) |
| **High** | Unified session heartbeat routed to wrong channel (disabled/CLI/system) | Open | [PR #4928](https://github.com/HKUDS/nanobot/pull/4928) (open, P1) |
| **Medium** | Late subagent turns invisible in WebUI | Closed | [PR #4954](https://github.com/HKUDS/nanobot/pull/4954) ✅ |
| **Medium** | Cron `at` jobs slightly overdue never run | Open | [PR #3035](https://github.com/HKUDS/nanobot/pull/3035) (open, conflict) |
| **Low** | Config save drops unknown keys (custom providers) | Open | [PR #1073](https://github.com/HKUDS/nanobot/pull/1073) (open, conflict) |

**Note**: Two P1 bug fixes (#5084, #4928) are open and unmerged — these affect message routing reliability and should be prioritized for v0.3.1.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for v0.3.1 |
|--------|--------|----------------------|
| **Extra bwrap bind roots** (expose `~/.local/bin`, `~/.cargo/bin` in sandbox) | [PR #4625](https://github.com/HKUDS/nanobot/pull/4625) (open, 25 days) | **High** — deployment blocker for users with custom toolchains |
| **Preserve unknown config keys** (prevent data loss on save) | [PR #1073](https://github.com/HKUDS/nanobot/pull/1073) (open, 5 months) | **Medium** — conflict label suggests design debate; needed for extensibility |
| **Cron grace window** (10-min tolerance for `at` jobs) | [PR #3035](https://github.com/HKUDS/nanobot/pull/3035) (open, 3.5 months) | **Medium** — reliability fix, but conflict label and Chinese-only discussion may delay |
| **WebUI auto-open on fresh install** | [PR #5085](https://github.com/HKUDS/nanobot/pull/5085) (merged today) | **Done** — shipped in v0.3.0 |
| **Smooth streaming viewport** | [PR #4696](https://github.com/HKUDS/nanobot/pull/4696) (merged today) | **Done** — shipped in v0.3.0 |

**Prediction**: v0.3.1 will likely include the two P1 bug fixes (#5084, #4928), the three deferred compat cleanups (#5083), and possibly the bwrap bind roots (#4625) given its deployment impact.

---

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **“WebUI doesn’t open automatically after install”** | PR #5085 created & merged same day | 🟢 **Resolved** — strong maintainer responsiveness |
| **“Subagent output disappears in WebUI”** | PR #4954 (P1, conflict) | 🟡 **Fixed** — but required deep WebSocket routing changes |
| **“Scrolling is janky during streaming”** | PR #4696 (22-day iteration) | 🟡 **Fixed** — frame-coalesced camera shows UX investment |
| **“Config loses custom provider keys on save”** | PR #1073 (5 months, conflict) | 🔴 **Unresolved** — extensibility blocker |
| **“Cron jobs miss schedule due to LLM latency”** | PR #3035 (3.5 months) | 🟡 **Partial** — grace window proposed but stalled |
| **“No CI — unsure if PRs break things”** | Issue #1131, PR #1284 | 🟢 **Resolved** — pipeline now live |

**Overall**: Users experience a polished WebUI happy path but hit sharp edges in extensibility (config, sandbox) and background reliability (cron, heartbeat routing). Maintainers ship UX fixes fast; infra/extensibility debt lingers.

---

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [PR #1073](https://github.com/HKUDS/nanobot/pull/1073) — Preserve unknown config keys | 5 months | Blocks custom provider configs; silent data loss on save | Resolve conflict: adopt `model_dump(mode='json', by_alias=True, exclude_none=False)` + extra fields preservation pattern |
| [PR #3035](https://github.com/HKUDS/nanobot/pull/3035) — Cron grace window | 3.5 months | Reliability for scheduled agents; LLM latency is real | Merge with tests; 10-min window is reasonable |
| [PR #4625](https://github.com/HKUDS/nanobot/pull/4625) — Extra bwrap bind roots | 25 days | Deployment blocker for Rust/Go/Node toolchains in sandbox | Low-risk config addition; merge for v0.3.1 |
| [PR #4928](https://github.com/HKUDS/nanobot/pull/4928) — Heartbeat routing fix | 12 days | **P1** — unified sessions misroute heartbeats to dead channels | Review & merge urgently; affects multi-channel reliability |
| [PR #5084](https://github.com/HKUDS/nanobot/pull/5084) — Pending message context | 1 day | **P1** — fixes #4064; message metadata loss breaks tool calls | Review & merge urgently; regression risk if delayed |

---

**Bottom line**: NanoBot v0.3.0 delivers a compelling WebUI-first experience with real CI. The project is healthy and moving fast. The next 1–2 weeks should focus on merging the two open P1 fixes (#4928, #5084) and clearing the small but impactful backlog items (#4625, #1073, #3035) to unblock extensibility and reliability for v0.3.1.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-26

## 1. Today's Overview
Hermes Agent shows **very high development velocity** with 50 issues and 50 PRs updated in the last 24 hours. The project is in active maintenance mode with 17 PRs merged/closed today, addressing critical bugs across Windows desktop stability, gateway message delivery, security boundaries, and session management. No new releases were cut, but the volume of fixes suggests a release candidate is imminent. The backlog contains several P0/P1 issues affecting Windows users (boot loops, update failures, path encoding) and cross-platform message delivery regressions.

## 2. Releases
**No new releases today.** The last release version is not specified in the data. Given 17 merged PRs including critical fixes for Windows desktop boot loops (#71226), security vulnerabilities (#22016, #71682, #71687), and gateway message delivery (#71683, #71684), a patch release (likely v0.19.1 or v0.20.0) is expected soon.

## 3. Project Progress — Merged/Closed PRs Today (17)

| PR | Type | Component | Summary |
|----|------|-----------|---------|
| [#71679](https://github.com/NousResearch/hermes-agent/pull/71679) | **Bug Fix** | Desktop/Config | Fixed desktop ignoring configured `reasoning_effort` (defaulted to `medium` silently) |
| [#71672](https://github.com/NousResearch/hermes-agent/pull/71672) | **Bug Fix** | Desktop | `Cmd+T` sessions now named from first message (parity with `Cmd+N`) |
| [#64393](https://github.com/NousResearch/hermes-agent/pull/64393) | **Bug Fix** | CLI/Skills | Curator status no longer mislabels built-in skills as agent-created |
| [#65123](https://github.com/NousResearch/hermes-agent/pull/65123) | **Bug Fix** | CLI/Config | UTF-8 BOM in `.env` no longer silently drops first key (API keys) |
| [#22016](https://github.com/NousResearch/hermes-agent/pull/22016) | **Security** | CLI | `hermes debug share` no longer exposes private prompt data in logs |
| [#71682](https://github.com/NousResearch/hermes-agent/pull/71682) | **Security** | CLI/Docker | Fixed container privilege escalation via s6 gateway log symlink chown |
| [#71687](https://github.com/NousResearch/hermes-agent/pull/71687) | **Security** | CLI/Windows | Managed-uv bootstrap resolves absolute PowerShell path (prevents PATH planting) |

**Key Advances**: Security hardening (3 fixes), Windows desktop stability, config parsing robustness, and curator/skills metadata correctness.

## 4. Community Hot Topics — Most Active Issues/PRs

### Top Issues by Comments
| Issue | Comments | Area | Core Problem |
|-------|----------|------|--------------|
| [#6388](https://github.com/NousResearch/hermes-agent/issues/6388) | 7 | Telegram/Plugins | MarkdownV2 escaping breaks bullet lists (`-` → `\-`) |
| [#62726](https://github.com/NousResearch/hermes-agent/issues/62726) | 7 | Dashboard/Sessions | Cross-tab session bleed + `/new` hang requiring container restart |
| [#71298](https://github.com/NousResearch/hermes-agent/issues/71298) | 6 | CLI/Desktop/Config | Dual provider storage (`providers` vs `custom_providers`) causes CLI/GUI mismatch |
| [#71226](https://github.com/NousResearch/hermes-agent/issues/71226) | 5 | Desktop/Windows | **P1**: Desktop boot loop — WebSocket connects but client disconnects immediately |
| [#67139](https://github.com/NousResearch/hermes-agent/issues/67139) | 4 | Skills/Curator | Legacy local skills lack adoption path into curator management |

### Top PRs by Activity (All Open)
- [#62660](https://github.com/NousResearch/hermes-agent/pull/62660) — **Topic-aware compaction** for multi-topic messaging sessions (feature, closed but high discussion)
- [#62944](https://github.com/NousResearch/hermes-agent/pull/62944) — **Single gateway, multiple agents** (major architecture, rebased from #25660)
- [#71686](https://github.com/NousResearch/hermes-agent/pull/71686) — **Per-agent Buzz identities** (N agents, N workspace members, one gateway)
- [#65982](https://github.com/NousResearch/hermes-agent/pull/65982) — **Claude Agent SDK provider** (first-class runtime under subscription OAuth)
- [#71685](https://github.com/NousResearch/hermes-agent/pull/71685) — **Governed approvals & connector visibility** (Desktop + Dashboard governance page)

**Underlying Needs**: Users want **multi-agent gateway support**, **better session isolation** (cross-tab bleed), **reliable Windows desktop**, and **governance/approval workflows** for enterprise/deployment scenarios.

## 5. Bugs & Stability — Ranked by Severity

### P0 / Critical (Blocking)
| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#71226](https://github.com/NousResearch/hermes-agent/issues/71226) | **P1** — Desktop boot loop on Windows | Open | — |
| [#71491](https://github.com/NousResearch/hermes-agent/issues/71491) | **P2** — Cloud sign-in loop on Windows (401 no_cookie) | Open | — |
| [#70480](https://github.com/NousResearch/hermes-agent/issues/70480) | **P2** — Docker ships WAL-reset-vulnerable SQLite (3.46.1) | Open | — |
| [#22016](https://github.com/NousResearch/hermes-agent/issues/22016) | **P1 Security** — `debug share` exposes private data | **Closed** | Merged |

### P1 / High Impact
| Issue | Area | Status | Fix PR |
|-------|------|--------|--------|
| [#62726](https://github.com/NousResearch/hermes-agent/issues/62726) | Dashboard: cross-tab session bleed + `/new` hang | Open | — |
| [#71298](https://github.com/NousResearch/hermes-agent/issues/71298) | CLI/GUI provider config mismatch | Open | — |
| [#63717](https://github.com/NousResearch/hermes-agent/issues/63717) | Windows update failures (7 correlated root causes) | Open | — |
| [#60447](https://github.com/NousResearch/hermes-agent/issues/60447) | `stage-native-deps.cjs` fails on non-ASCII user paths | Open | — |
| [#39418](https://github.com/NousResearch/hermes-agent/issues/39418) | `/reload-mcp` freezes CLI terminal | Open | — |
| [#48510](https://github.com/NousResearch/hermes-agent/issues/48510) | Windows: `codex.CMD` not found via subprocess | Open | — |

### P2 / Message Delivery & Platform
| Issue | Platform | Status | Fix PR |
|-------|----------|--------|--------|
| [#6388](https://github.com/NousResearch/hermes-agent/issues/6388) | Telegram: MarkdownV2 bullet escaping | Open | — |
| [#42997](https://github.com/NousResearch/hermes-agent/issues/42997) | Email: IMAP marks Gmail unread as read | Open | — |
| [#49793](https://github.com/NousResearch/hermes-agent/issues/49793) | iMessage: streaming cursor shows as white square | Open | [#71683](https://github.com/NousResearch/hermes-agent/pull/71683) |
| [#27300](https://github.com/NousResearch/hermes-agent/issues/27300) | WeChat: Tencent STT garbles non-Chinese | Open | — |
| [#40332](https://github.com/NousResearch/hermes-agent/issues/40332) | Discord: config attachment limits ignored | Open | — |

**Fix PRs Open Today**: [#71683](https://github.com/NousResearch/hermes-agent/pull/71683) (video extensions), [#71684](https://github.com/NousResearch/hermes-agent/pull/71684) (Telegram robustness), [#71676](https://github.com/NousResearch/hermes-agent/pull/71676) (system prompt rebuild on cwd drift), [#71680](https://github.com/NousResearch/hermes-agent/pull/71680) (curator write policy), [#71681](https://github.com/NousResearch/hermes-agent/pull/71681) (browser install on non-Debian).

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Signal Strength | Likely Next Version |
|---------|----------|-----------------|---------------------|
| **Single Gateway → Multiple Agents** | [#62944](https://github.com/NousResearch/hermes-agent/pull/62944), [#71686](https://github.com/NousResearch/hermes-agent/pull/71686) | ★★★★★ (Stacked PRs, rebased from 2025) | v0.20+ (major) |
| **Buzz (Block/Nostr) Platform Adapter** | [#71610](https://github.com/NousResearch/hermes-agent/pull/71610), [#71686](https://github.com/NousResearch/hermes-agent/pull/71686) | ★★★★☆ (New platform, integrated with multi-agent) | v0.20+ |
| **Claude Agent SDK Provider (OAuth)** | [#65982](https://github.com/NousResearch/hermes-agent/pull/65982) | ★★★★☆ (Official SDK, subscription billing) | v0.19.x or v0.20 |
| **Governed Approvals & Connector Visibility** | [#71685](https://github.com/NousResearch/hermes-agent/pull/71685) | ★★★★☆ (Desktop + Dashboard governance page) | v0.19.x |
| **Topic-Aware Context Compaction** | [#62660](https://github.com/NousResearch/hermes-agent/pull/62660) | ★★★☆☆ (Closed but high discussion) | v0.19.x |
| **Curator Legacy Skill Adoption Path** | [#67139](https://github.com/NousResearch/hermes-agent/issues/67139) | ★★★☆☆ (User pain, duplicate) | v0.19.x |
| **Local STT Documentation (MLX/CUDA)** | [#56989](https://github.com/NousResearch/hermes-agent/issues/56989) | ★★☆☆☆ (Docs only) | v0.19.x |
| **Codex Binary Path Config** | [#61360](https://github.com/NousResearch/hermes-agent/issues/61360) | ★★☆☆☆ (Gateway/service contexts) | v0.19.x |

**Roadmap Prediction**: v0.19.x will focus on **Windows stability**, **security**, **message delivery fixes**, and **governance UI**. v0.20+ will deliver **multi-agent gateway**, **Buzz platform**, and **Claude Agent SDK**.

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Windows Desktop Unusable** | [#71226](https://github.com/NousResearch/hermes-agent/issues/71226) boot loop, [#63717](https://github.com/NousResearch/hermes-agent/issues/63717) update failures (7 causes), [#60447](https://github.com/NousResearch/hermes-agent/issues/60447) non-ASCII paths, [#48510](https://github.com/NousResearch/hermes-agent/issues/48510) codex.CMD | **High** — Complete blocker for Windows users |
| **Session State Corruption** | [#62726](https://github.com/NousResearch/hermes-agent/issues/62726) cross-tab bleed, [#31043](https://github.com/NousResearch/hermes-agent/issues/31043) `/new` doesn't refresh context_length | **High** — Data loss, requires container restart |
| **Config Drift Between CLI & GUI** | [#71298](https://github.com/NousResearch/hermes-agent/issues/71298) dual provider storage, [#40332](https://github.com/NousResearch/hermes-agent/issues/40332) Discord config ignored | **Medium** — Silent misconfiguration |
| **Message Rendering Broken** | [#6388](https://github.com/NousResearch/hermes-agent/issues/6388) Telegram bullets, [#49793](https://github.com/NousResearch/hermes-agent/issues/49793) iMessage white square, [#40896](https://github.com/NousResearch/hermes-agent/issues/40896) video broken icon | **Medium** — UX degradation |
| **Security Anxiety** | [#22016](https://github.com/NousResearch/hermes-agent/issues/22016) debug share leaks, [#71682](https://github.com/NousResearch/hermes-agent/pull/71682) Docker symlink escalation, [#71687](https://github.com/NousResearch/hermes-agent/pull/71687) PATH planting | **High** — Trust erosion |
| **Skill/Curator Management Confusion** | [#67139](https://github.com/NousResearch/hermes-agent/issues/67139) legacy skills, [#67140](https://github.com/NousResearch/hermes-agent/issues/67140) write guard conflict, [#64393](https://github.com/NousResearch/hermes-agent/pull/64393) mislabeling | **Medium** — Power users blocked |

**Satisfaction Signals**: Users are filing detailed diagnostics (#63717, #71491 with git bisect) and contributing fixes — indicates **invested community** but **frustration with Windows/desktop stability**.

## 8. Backlog Watch — Stale Important Items Needing Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#6388](https://github.com/NousResearch/hermes-agent/issues/6388) Telegram MarkdownV2 bullets | 109 days | Visible rendering bug on major platform | Assign to platform maintainer; fix in `gateway/platforms/telegram/` |
| [#42997](https://github.com/NousResearch/hermes-agent/issues/42997) Email IMAP marks read | 47 days | Silent data mutation (Gmail) | Use `BODY.PEEK[]` instead of `RFC822`; add test |
| [#27300](https://github.com/NousResearch/hermes-agent/issues/27300) WeChat STT language garbling | 70 days | Non-Chinese users blocked | Route through Hermes STT pipeline; add config flag |
| [#11515](https://github.com/NousResearch/hermes-agent/issues/11515) ACP cwd vs project context | 100 days | IDE integration inconsistency | Align tool execution cwd with context discovery |
| [#48659](https://github.com/NousResearch/hermes-agent/issues/48659) Photon side

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-26

## 1. Today's Overview
PicoClaw shows moderate maintenance activity with **2 active issues** and **3 PRs updated** in the last 24 hours, though no new releases were published. Two PRs were closed (#339, #3205) — one merging a substantial feature bundle (Email, Calendar, System Stats tools) and another fixing ARMv7 support and 9router gateway compatibility. One new feature PR (#3193, Simplex channel) remains open but stale. The project is in a **bug-fix and platform-expansion phase** post-v0.3.1, with critical stability work needed on the Matrix connector.

## 2. Releases
**No new releases** in the last 24 hours. Current latest remains **v0.3.1** (commit `2cf030d`).

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#339](https://github.com/sipeed/picoclaw/pull/339) | Added Email Tool, Calendar Integration and System Stats Overview Tool | **Feature** (closed) | Adds Google Calendar support, enhanced Email channel (polling, content fetching), GitHub tool, and System Stats tool. Expands PicoClaw’s "personal assistant" surface significantly. |
| [#3205](https://github.com/sipeed/picoclaw/pull/3205) | fix: support 9router gateway responses and add Linux ARMv7 build target | **Bug fix + Platform** (closed) | Fixes OpenAI-compat provider parsing for 9router gateway; adds ARMv7 launcher build — enables Raspberry Pi 3 B+ and similar SBCs. |

**Net effect**: Two user-facing capability expansions (Calendar, Email, SysStats, GitHub) and one hardware/platform enablement merged. No breaking changes noted in PR descriptions.

## 4. Community Hot Topics
| Item | Activity | Signal |
|------|----------|--------|
| [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) — *Matrix sync loop has no reconnection logic* | **6 comments, 2 👍**, updated 2026-07-25 | **Highest engagement**. Users report silent, permanent Matrix disconnects after any network hiccup or homeserver restart. Process stays alive → systemd `Restart=on-failure` ineffective. Core reliability blocker for Matrix-dependent deployments. |
| [PR #3193](https://github.com/sipeed/picoclaw/pull/3193) — *Added simplex channel type* | Open since 2026-06-27, updated 2026-07-25 | New protocol support (Simplex Chat) — privacy-focused, decentralized IM. Stalled ~1 month; needs review/merge decision. |
| [Issue #3294](https://github.com/sipeed/picoclaw/issues/3294) — */list models shows only current model* | 0 comments, created 2026-07-25 | UX inconsistency: command name/description promises full list, returns single entry. Low visibility but clear spec violation. |

**Underlying need**: **Multi-channel reliability** (Matrix) and **protocol breadth** (Simplex) — users are pushing PicoClaw into production as a multi-network bridge, exposing gaps in connection lifecycle management.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) Matrix sync loop dies permanently on network/server disruption; no auto-reconnect; systemd restart ineffective | **Open**, 6 comments, 2 👍 | **No** — no linked PR. Requires reconnection backoff + health-check logic in Matrix channel. |
| **Medium** | [#3294](https://github.com/sipeed/picoclaw/issues/3294) `/list models` returns only active model, not all configured | **Open**, 0 comments | **No** — simple command-output bug in Telegram channel handler. |
| **Resolved** | 9router gateway response parsing failure (OpenAI-compat provider) | Fixed in [#3205](https://github.com/sipeed/picoclaw/pull/3205) (closed) | Yes — merged. |
| **Resolved** | Missing ARMv7 build target for launcher | Fixed in [#3205](https://github.com/sipeed/picoclaw/pull/3205) (closed) | Yes — merged. |

**Top priority**: Matrix reconnection logic (#3203) — affects all Matrix users, silent failure mode, no workaround.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Simplex Chat channel** | [PR #3193](https://github.com/sipeed/picoclaw/pull/3193) (open, stale) | **High** — PR exists, implements new channel type; needs maintainer review. |
| **Matrix auto-reconnect / health checks** | [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) | **High** — critical bug, explicit user demand, blocks production use. |
| **`/list models` to show all configured models** | [Issue #3294](https://github.com/sipeed/picoclaw/issues/3294) | **Medium** — low-effort fix, aligns command with docs. |
| **Google Calendar / Email / System Stats / GitHub tools** | [PR #339](https://github.com/sipeed/picoclaw/pull/339) | **Delivered** — already merged. |

**Predicted next version (v0.3.2/v0.4.0)**: Matrix reconnection fix + Simplex channel merge + `/list models` correction. Calendar/Email/SysStats already in `main`.

## 7. User Feedback Summary
- **Pain points**:  
  - Matrix channel **unreliable in real networks** — "silent death" after any disruption (#3203).  
  - CLI/Telegram command **misleads** (`/list models` hides configured models) (#3294).  
  - **ARMv7/SBC support missing** — blocked Raspberry Pi 3 B+ deployments (fixed in #3205).  
  - **9router gateway incompatibility** — OpenAI-compat provider failed on valid responses (fixed in #3205).  
- **Use cases emerging**:  
  - Multi-bridge personal assistant (Telegram + Matrix + Simplex + Email + Calendar).  
  - Edge/SBC deployments (Pi 3 B+, ARMv7).  
  - Privacy-focused stacks (Simplex, 9router local gateway).  
- **Satisfaction**: Mixed — new tools (Calendar, Email, Stats) welcomed, but **core channel stability (Matrix) erodes trust**.

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [PR #3193](https://github.com/sipeed/picoclaw/pull/3193) — *Simplex channel type* | **29 days** (opened 2026-06-27) | Complete feature PR for a new privacy-first protocol. Stalled without review. Merge would expand channel matrix significantly. |
| [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) — *Matrix reconnection logic* | **24 days** (opened 2026-07-02) | Critical reliability bug. No fix PR yet. Should be assigned or triaged for immediate sprint. |
| [Issue #3294](https://github.com/sipeed/picoclaw/issues/3294) — */list models output* | **1 day** (opened 2026-07-25) | Easy win — aligns behavior with command contract. Good "first issue" candidate. |

---

**Health indicator**: 🟡 **Caution** — Active feature delivery but **critical channel stability debt** (Matrix) unaddressed for 3+ weeks. Simplex PR stalled. Recommend: prioritize #3203 fix, review #3193, then cut v0.3.2.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-26

## 1. Today's Overview
NanoClaw saw **moderate, focused activity** on July 26: two new issues were opened and eleven pull requests were updated (one merged/closed). The day’s work clusters around **container security hardening**, **message-flow correctness**, and **operational hygiene** (uninstall cleanup, image-tag validation, mount allow-lists). No new release was cut, but the merged PR #2748 (container capability drop / no-new-privileges / pids-limit) represents a significant defense-in-depth improvement that will ship in the next version. Overall project health appears strong—core-team members are actively triaging, and fixes for the two newly reported bugs already have companion PRs.

## 2. Releases
**No new releases today.**  
The most recent merged security work (PR #2748) will likely be included in the next patch or minor release; watch the [releases page](https://github.com/qwibitai/nanoclaw/releases) for changelog and migration notes.

## 3. Project Progress (Merged / Closed PRs)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#2748](https://github.com/qwibitai/nanoclaw/pull/2748) | **security: harden agent containers (cap-drop, no-new-privileges, pids-limit)** | Container runtime | **High** — Default spawn flags now drop all capabilities, prevent privilege escalation, and limit PIDs to 2048. Overridable per agent group. |

*All other PRs remain open as of this digest.*

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Summary |
|------|------|----------|----|---------|
| [#3134](https://github.com/qwibitai/nanoclaw/issues/3134) | Issue | 0 | 0 | Host-sent messages (approval cards, reject prompts, registration notices) missing from agent context. |
| [#3132](https://github.com/qwibitai/nanoclaw/issues/3132) | Issue | 0 | 0 | Follow-up poll path in `poll-loop.ts` bypasses `trigger=1` gate, accumulating idle messages. |
| [#3122](https://github.com/qwibitai/nanoclaw/pull/3122) | PR | – | 0 | OpenCode compatibility, custom-endpoint transport, memory parity (core-team, multi-comment thread expected). |

*No items have significant comment volume or reactions yet; the two new bugs are the clearest signals of current pain points.*

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Fix PR | Status |
|----------|-------|--------|--------|
| **High** | [#3134](https://github.com/qwibitai/nanoclaw/issues/3134) — Agent loses record of host-sent messages, breaking conversation continuity. | [#3135](https://github.com/qwibitai/nanoclaw/pull/3135) | Open, fix authored same day |
| **Medium** | [#3132](https://github.com/qwibitai/nanoclaw/issues/3132) — Follow-up poller pushes `trigger=0` rows into active query, violating accumulate contract. | [#3133](https://github.com/qwibitai/nanoclaw/pull/3133) | Open, fix authored same day |
| **Low** | [#3124](https://github.com/qwibitai/nanoclaw/pull/3124) — Unavailable MCP servers not reported (affects observability). | #3124 itself | Open |

*Both high/medium bugs have immediate fix PRs, indicating rapid response.*

## 6. Feature Requests & Roadmap Signals
| PR / Issue | Signal | Likelihood for Next Version |
|------------|--------|-----------------------------|
| [#3122](https://github.com/qwibitai/nanoclaw/pull/3122) | OpenCode main compatibility, custom endpoints, memory parity | High — core-team tagged, active iteration |
| [#3128](https://github.com/qwibitai/nanoclaw/pull/3128) | **flight-checkin** container skill (operational) | Medium — follows guidelines, new skill |
| [#2211](https://github.com/qwibitai/nanoclaw/pull/2211) | **tool-visibility** skill (live tool-call previews) | Medium — long-running, resynced after 3 mo production use |
| [#3131](https://github.com/qwibitai/nanoclaw/pull/3131) | Uninstall cleanup for per-agent-group derived images | High — core-team, operational hygiene |
| [#3130](https://github.com/qwibitai/nanoclaw/pull/3130) | Validate `container_configs.image_tag` at write seam | High — security-adjacent, core-team |
| [#3129](https://github.com/qwibitai/nanoclaw/pull/3129) | Block `~/.config/nanoclaw` & `~/.local/bin` as mount roots | High — security, core-team |
| [#3127](https://github.com/qwibitai/nanoclaw/pull/3127) | Sanitize inbox attachment paths to safe charset | Medium — core-team, host hardening |

*Security/ops PRs (#3131, #3130, #3129, #2748) suggest a **hardening sprint** is underway.*

## 7. User Feedback Summary
- **Pain point**: Agents “forget” host-sent messages (#3134), causing confusion when users reply to approval cards or reject prompts.  
- **Pain point**: Idle messages leak into active queries (#3132), potentially polluting context and wasting tokens.  
- **Desire**: First-class OpenCode support with custom endpoints (#3122).  
- **Desire**: Live visibility into tool calls (#2211) — already validated in production fork.  
- **Confidence signal**: Core-team members (gavrielc, glifocat, boazdori) are authoring/reviewing security and ops PRs, indicating maintainer bandwidth is healthy.

## 8. Backlog Watch (Stale / Needs Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2211](https://github.com/qwibitai/nanoclaw/pull/2211) | Open since 2026-05-03 | High-value skill (tool-visibility) with production validation; still awaiting merge. |
| [#2748](https://github.com/qwibitai/nanoclaw/pull/2748) | Opened 2026-06-12, **merged today** | Was the oldest security PR; now closed—good resolution. |
| [#3122](https://github.com/qwibitai/nanoclaw/pull/3122) | Open since 2026-07-23 | Core-team tagged but still open; OpenCode compatibility is a strategic integration. |

*No critical issues are currently unanswered beyond normal review latency.*

---

**Bottom line**: NanoClaw is in a **consolidation & hardening phase**—security defaults tightened, message-flow bugs caught and fixed within hours, and a batch of operational hygiene PRs queued. The next release will likely be a **security/stability patch** with the container hardening and message-flow fixes, followed by the OpenCode integration and new skills.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-26

---

## 1. Today's Overview

IronClaw shows **high-velocity, multi-track development** with 20 PRs and 11 issues updated in the last 24 hours. The project is simultaneously advancing three major workstreams: (a) the **error-recoverability endgame** epic (#6284) to guarantee model-visible, recoverable failures; (b) **WebUI performance hardening** — route-level code splitting has already cut the initial JS bundle from ~1.2 MB to ~376 kB (#6632 merged); and (c) **v1 launch readiness** — fixing integration UX gaps for Telegram, Slack, and GitHub auth (#6667, #6668, #6671). Nine PRs were merged/closed today, indicating strong merge throughput. No new releases were cut, but a staged release PR (#5598) with breaking changes in `ironclaw_common` and `ironclaw_skills` remains open since July 3.

---

## 2. Releases

**No new releases published today.**  
The pending release PR [#5598](https://github.com/nearai/ironclaw/pull/5598) (open since 2026-07-03) proposes:
- `ironclaw_common` 0.4.2 → **0.5.0** — **breaking**: `failure` trait now implements `Copy`
- `ironclaw_skills` 0.3.0 → **0.4.0** — **breaking**: API changes
- `ironclaw_safety` 0.2.2 → 0.2.3 — compatible

Maintainers should evaluate whether to ship this release soon or batch further changes.

---

## 3. Project Progress — Merged / Closed PRs Today

| PR | Scope | Impact |
|----|-------|--------|
| [#6632](https://github.com/nearai/ironclaw/pull/6632) | **perf(webui): route-level code splitting & tree-shaking** | **Major**: initial JS bundle ↓ 69% (1,227 → 377 kB); gzipped ↓ 67% (349 → 116 kB). Lazy-loads Chat, Settings, Admin, Extensions, Automations pages. |
| [#6624](https://github.com/nearai/ironclaw/pull/6624) | **fix(webui): trap & restore focus in extension config modal** | Accessibility fix: focus management for keyboard users; adds regression test. Closes [#6621](https://github.com/nearai/ironclaw/issues/6621). |
| [#6626](https://github.com/nearai/ironclaw/pull/6626) | **fix(webui): preserve automation list during filter changes** | UX: eliminates full-page skeleton flash when switching All/Completed filters. Closes [#6622](https://github.com/nearai/ironclaw/issues/6622). |
| [#6627](https://github.com/nearai/ironclaw/pull/6627) | **fix(webui): preserve active run state when cancellation fails** | Correctness: defers local state clear until backend confirms cancellation; shows localized error. Closes [#6620](https://github.com/nearai/ironclaw/issues/6620). |
| [#6625](https://github.com/nearai/ironclaw/pull/6625) | **fix(webui): localize chat failure messages** | i18n: routes 11 failure copy paths through translation system for all 11 locales. |
| [#6680](https://github.com/nearai/ironclaw/pull/6680) | **fix(webui): preserve workspace tree state across root navigation** | UX: single workspace route preserves expanded tree on breadcrumb navigation. |
| [#6669](https://github.com/nearai/ironclaw/pull/6669) | **refactor: move extension host out of composition** | Architecture: extracts Reborn extension-host modules to `ironclaw_extension_host::reborn`; removes facade re-exports. |
| [#6670](https://github.com/nearai/ironclaw/pull/6670) | **docs: consolidate Reborn guidance, remove 11 stale plans** | Documentation hygiene: single source of truth for ProductSurface & ChannelAdapter. |
| [#6673](https://github.com/nearai/ironclaw/pull/6673) | **test: production struct dead-code ratchet** | CI gate: static scan forbids new test-support fields/methods in prod structs; shrink-only baseline. |

**Net outcome**: WebUI performance + accessibility + correctness fixes shipped; Reborn architecture cleaned up; new CI quality gate installed.

---

## 4. Community Hot Topics

| Item | Activity | Signal |
|------|----------|--------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) **EPIC: error-recoverability endgame** | 6 comments, open since 07-19 | Core architectural contract: every mid-run error must be survivable, model-visible, causal, actionable, and never silently swallowed. Drives PRs [#6677](https://github.com/nearai/ironclaw/pull/6677) (conformance matrix) and [#6674](https://github.com/nearai/ironclaw/pull/6674) (mutation-audit harness). |
| [#6675](https://github.com/nearai/ironclaw/issues/6675) **Centralize shared Rust deps with `[workspace.dependencies]`** | 2 👍, 0 comments | Developer-experience: 31 crates still declare versions independently; centralization would ease upgrades and reduce drift. |
| [#6671](https://github.com/nearai/ironclaw/issues/6671) **Telegram setup dead-ends on "admin must configure"** | 0 comments, v1-launch-checklist | UX gap: only path to admin bot-token setup is Extensions → Channels → bottom; agent & extensions tab give no guidance. |
| [#6668](https://github.com/nearai/ironclaw/issues/6668) **Agent doesn't tell users Slack can be connected** | 0 comments, v1-launch-checklist | Guidance gap: agent claims no path exists for Slack, but Settings → Extensions → Channels → Slack works. |
| [#6667](https://github.com/nearai/ironclaw/issues/6667) **Rejected GitHub PAT loops auth prompt with no error** | 0 comments, v1-launch-checklist | Critical auth UX: silent retry loop on bad PAT; user never sees provider rejection. |

**Underlying need**: The three v1-launch-checklist issues (#6667, #6668, #6671) reveal a **systemic integration-onboarding gap** — the agent and UI don't surface available connections or provider errors, creating dead-ends for first-time users.

---

## 5. Bugs & Stability — Reported Today

| Severity | Issue | Fix PR | Status |
|----------|-------|--------|--------|
| **High** | [#6667](https://github.com/nearai/ironclaw/issues/6667) GitHub PAT rejection loops silently — user never sees error | — | **Open**, no fix PR yet |
| **High** | [#6620](https://github.com/nearai/ironclaw/issues/6620) Failed run cancellation leaves chat in idle state while backend continues | [#6627](https://github.com/nearai/ironclaw/pull/6627) | **Fixed & merged** |
| **Medium** | [#6622](https://github.com/nearai/ironclaw/issues/6622) Automation filter switch flashes full skeleton | [#6626](https://github.com/nearai/ironclaw/pull/6626) | **Fixed & merged** |
| **Medium** | [#6621](https://github.com/nearai/ironclaw/issues/6621) Extension config modal doesn't trap/restore keyboard focus | [#6624](https://github.com/nearai/ironclaw/pull/6624) | **Fixed & merged** |
| **Low** | [#6676](https://github.com/nearai/ironclaw/issues/6676) Daily failure taxonomy — 85 non-pass in clawbench (model shortfalls, not harness) | — | **Open**, observability/benchmark signal |

**Note**: All UI bugs reported on 07-24 were fixed and merged by 07-25 — excellent turnaround. The GitHub PAT bug (#6667) is the only high-severity item without a fix PR.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Error-recoverability contract enforcement** (retry/model-visible/park/terminal classification) | Epic [#6284](https://github.com/nearai/ironclaw/issues/6284), PR [#6677](https://github.com/nearai/ironclaw/pull/6677) | **Very High** — conformance matrix PR open, mutation harness [#6674](https://github.com/nearai/ironclaw/pull/6674) building |
| **Route-level code splitting & bundle optimization** | Issue [#6628](https://github.com/nearai/ironclaw/issues/6628), PR [#6632](https://github.com/nearai/ironclaw/pull/6632) | **Done** — merged today; follow-up image optimization & compression pending |
| **Agent guidance for integrations (Slack, Telegram, GitHub)** | Issues [#6667](https://github.com/nearai/ironclaw/issues/6667), [#6668](https://github.com/nearai/ironclaw/issues/6668), [#6671](https://github.com/nearai/ironclaw/issues/6671) | **High** — tagged `v1-launch-checklist`; blocking v1 |
| **Centralized Cargo workspace dependencies** | Issue [#6675](https://github.com/nearai/ironclaw/issues/6675) | **Medium** — 2 👍, no PR yet; low risk, high maintainability value |
| **Signed intent & per-agent key lifecycle (attested-signing Phase B)** | PR [#6672](https://github.com/nearai/ironclaw/pull/6672) | **High** — large PR open, part of Ledger revival plan |
| **Product command pipeline live (/model, /status) across Slack/Telegram/WebChat** | PR [#6678](https://github.com/nearai/ironclaw/pull/6678) | **High** — XL PR open, zero per-command logic in adapters |

**Prediction**: Next version will likely include the recoverability conformance matrix, centralized deps, and the integration onboarding fixes. The signed-intent work may land in the same or following release.

---

## 7. User Feedback Summary

**Pain points surfaced today** (from issues):
- **Integration onboarding is opaque**: Users asking the agent to "connect Slack/Telegram" get false negatives; GitHub PAT failures produce silent retry loops with no error message (#6667, #6668, #6671).
- **Keyboard accessibility gaps**: Extension config modal was unusable for keyboard-only users (#6621, fixed).
- **Perceived performance regressions**: Filter switches and navigation caused full-page loading flashes (#6622, #6680, fixed).
- **Cancellation trust**: Users couldn't rely on stop button — UI went idle while backend kept running (#6620, fixed).

**Positive signals**: Rapid fix turnaround (all 07-24 UI bugs merged by 07-25), major bundle size reduction visible to users, mutation-testing infrastructure investment shows commitment to correctness.

---

## 8. Backlog Watch — Stale / Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5598](https://github.com/nearai/ironclaw/pull/5598) **chore: release** (breaking changes in `ironclaw_common` & `ironclaw_skills`) | **23 days** (since 07-03) | Blocks downstream consumers; API-breaking release pending. Needs maintainer decision: ship now or accumulate more changes? |
| [#6284](https://github.com/nearai/ironclaw/issues/6284) **EPIC: error-recoverability endgame** | **7 days** | Cross-cutting architectural contract; drives multiple PRs. Risk of scope creep if not time-boxed. |
| [#6675](https://github.com/nearai/ironclaw/issues/6675) **Centralize shared Rust deps** | **1 day** (new) | 2 👍 but no assignee/PR; low-effort high-leverage task. |
| [#6667](https://github.com/nearai/ironclaw/issues/6667) **GitHub PAT silent retry loop** | **1 day** (new) | High-severity auth UX bug; no fix PR yet. Should be prioritized for v1. |
| [#6672](https://github.com/nearai/ironclaw/pull/6672) **feat(signing): signed intent + per-agent key lifecycle** | **1 day** (new) | XL PR, core security feature; needs thorough review. |
| [#6678](https://github.com/nearai/ironclaw/pull/6678) **feat(reborn): product command pipeline live** | **1 day** (new) | XL PR, enables slash commands across all surfaces; review bandwidth needed. |

**Recommendation**: Assign reviewers to the three XL PRs (#6672, #6677, #6678) and the release PR (#5598) immediately. Prioritize a fix for #6667 before v1 tag.

---

*Digest generated from GitHub data as of 2026-07-26 00:00 UTC. All links point to live GitHub items.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-26

## 1. Today's Overview
LobsterAI showed significant repository hygiene activity on 2026-07-25 with **8 stale issues closed** and **11 PRs merged/closed**, most originating from April 2026. The project maintains active development with a focus on UI/UX polish for the Cowork agent interface, MCP configuration improvements, and Windows installer hardening. Only **1 new issue** (#2385) was filed in the last 24h, requesting folder-level file attachment support. No new releases were published.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs (2026-07-25)

| PR | Area | Summary | Link |
|----|------|---------|------|
| #2383 | renderer, build, docs, main, windows | Fix: Windows install root foreign content protection | [#2383](https://github.com/netease-youdao/LobsterAI/pull/2383) |
| #2384 | renderer, build, docs, main, windows | Fix(installer): Harden Windows install and update recovery | [#2384](https://github.com/netease-youdao/LobsterAI/pull/2384) |
| #2381 | renderer, docs, main, openclaw, cowork | Feat: Support Kimi K3 model | [#2381](https://github.com/netease-youdao/LobsterAI/pull/2381) |
| #1335 | scheduledTask | Feat: Add Workdays (Mon–Fri) schedule option with cron `M H * * 1-5` | [#1335](https://github.com/netease-youdao/LobsterAI/pull/1335) |
| #1327 | cowork | Feat: ToolUse bulk expand/collapse toggle (≥2 tool calls) | [#1327](https://github.com/netease-youdao/LobsterAI/pull/1327) |
| #1331 | cowork | Feat: Error-state red dot badge in session list | [#1331](https://github.com/netease-youdao/LobsterAI/pull/1331) |
| #1333 | agent, cowork | Fix: i18n attachment label, Escape to close, delete guard | [#1333](https://github.com/netease-youdao/LobsterAI/pull/1333) |
| #1336 | mcp | Feat: MCP custom server JSON paste import (form/JSON tabs) | [#1336](https://github.com/netease-youdao/LobsterAI/pull/1336) |
| #1338 | cowork | Feat: Session list time-grouped rendering (Pinned/Today/Yesterday/This week/Earlier) | [#1338](https://github.com/netease-youdao/LobsterAI/pull/1338) |
| #1340 | cowork | Feat: User message timestamp (HH:MM, full datetime on hover) | [#1340](https://github.com/netease-youdao/LobsterAI/pull/1340) |
| #1342 | cowork | Feat: Input history navigation via Up/Down keys (50-entry, deduped) | [#1342](https://github.com/netease-youdao/LobsterAI/pull/1342) |

**Key themes advanced**: Cowork session UX (timestamps, history, grouping, error visibility), MCP usability (JSON import), scheduling flexibility (workdays), Windows installer robustness, and new model support (Kimi K3).

## 4. Community Hot Topics
All high-engagement items were **stale-closed on 2026-07-25** with 2 comments each (likely the stale bot + author acknowledgment). No active discussions with significant community debate in the last 24h.

| Item | Type | Comments | Reaction | Underlying Need |
|------|------|----------|----------|-----------------|
| [#1326](https://github.com/netease-youdao/LobsterAI/issues/1326) / [#1327](https://github.com/netease-youdao/LobsterAI/pull/1327) | Issue/PR | 2 | 0 | Bulk tool-call management for multi-step agent runs |
| [#1330](https://github.com/netease-youdao/LobsterAI/issues/1330) / [#1331](https://github.com/netease-youdao/LobsterAI/pull/1331) | Issue/PR | 2 | 0 | At-a-glance error discovery in session sidebar |
| [#1337](https://github.com/netease-youdao/LobsterAI/issues/1337) / [#1338](https://github.com/netease-youdao/LobsterAI/pull/1338) | Issue/PR | 2 | 0 | Temporal organization of growing session history |
| [#1339](https://github.com/netease-youdao/LobsterAI/issues/1339) / [#1340](https://github.com/netease-youdao/LobsterAI/pull/1340) | Issue/PR | 2 | 0 | Message-level timestamps for debugging/review |
| [#1341](https://github.com/netease-youdao/LobsterAI/issues/1341) / [#1342](https://github.com/netease-youdao/LobsterAI/pull/1342) | Issue/PR | 2 | 0 | Terminal-like input history for iterative prompting |
| [#1343](https://github.com/netease-youdao/LobsterAI/issues/1343) | Issue | 2 | 0 | Full-text search across message content (not just titles) |
| [#1345](https://github.com/netease-youdao/LobsterAI/issues/1345) | Issue | 2 | 0 | Markdown export for portability/editing |

**Pattern**: All seven feature requests came from **@MaoQianTu** on 2026-04-02 and were implemented/closed in batch today — indicating a planned UX sprint now delivered.

## 5. Bugs & Stability
**No new bug reports** in the last 24h. The two Windows installer PRs (#2383, #2384) suggest recent instability in install/update flows on Windows, now addressed. No crashes or regressions reported today.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Status | Likelihood for Next Release |
|---------|--------|--------|-----------------------------|
| Folder attachment support (`@` folder like other agents) | [#2385](https://github.com/netease-youdao/LobsterAI/issues/2385) (new, 2026-07-25) | **Open** | High — aligns with agent UX parity |
| Full-text message search | [#1343](https://github.com/netease-youdao/LobsterAI/issues/1343) | Closed (stale), **no PR** | Medium — high user value, needs indexing strategy |
| Markdown export for sessions | [#1345](https://github.com/netease-youdao/LobsterAI/issues/1345) | Closed (stale), **no PR** | Medium — straightforward implementation |
| Workdays (Mon–Fri) scheduling | [#1335](https://github.com/netease-youdao/LobsterAI/pull/1335) | **Merged today** | ✅ Delivered |
| Kimi K3 model support | [#2381](https://github.com/netease-youdao/LobsterAI/pull/2381) | **Merged today** | ✅ Delivered |

**Prediction**: Next version will likely include the merged PRs above plus a fix for #2385 (folder attachment). Full-text search and Markdown export remain backlog candidates.

## 7. User Feedback Summary
- **Pain points** (from stale issues):  
  - Tedious per-tool-block expansion in multi-tool turns  
  - Silent error sessions in sidebar  
  - Unstructured session list at scale  
  - No message timestamps for audit/debug  
  - No input history for iterative prompting  
  - Title-only search misses content matches  
  - Image-only export blocks text reuse  
- **New pain point** (#2385): Inability to attach folders (`@folder`) forces manual file-by-file selection, unlike competing agents.  
- **Satisfaction signals**: Batch delivery of 7 UX features from April shows responsive maintainers; Windows installer fixes indicate stability focus.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#1343](https://github.com/netease-youdao/LobsterAI/issues/1343) Full-text search | 115 days | Medium | High user demand; closed stale without implementation — may need re-open or dedicated PR |
| [#1345](https://github.com/netease-youdao/LobsterAI/issues/1345) Markdown export | 115 days | Low | Straightforward, high utility; closed stale without PR |
| [#2385](https://github.com/netease-youdao/LobsterAI/issues/2385) Folder attachment | 1 day | **High** | **Only open issue**; blocks agent UX parity; active user request |

**Recommendation**: Prioritize #2385 for next sprint. Re-evaluate #1343/#1345 — consider reopening with "help wanted" or assigning to a contributor.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-26

## 1. Today's Overview
Moltis shows focused development activity with **5 pull requests updated** in the last 24 hours (3 open, 2 closed), but **zero issue activity** and **no new releases**. The project is actively extending its platform integrations—particularly Slack and Nostr/Buzz—while also experimenting with a new vector memory backend (zvec). Two documentation/governance PRs were merged, reinforcing contribution standards. Overall, the project appears in a **feature-expansion phase** with healthy PR throughput but limited community discussion signals (no comments/reactions recorded on tracked PRs).

## 2. Releases
**No new releases published today.** The latest release information is not present in the provided data.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Type | Summary |
|----|-------|------|---------|
| [#1165](https://github.com/moltis-org/moltis/pull/1165) | `feat(slack): acknowledge messages with reactions and add reaction triggers` | **Merged** | Adds Slack acknowledgment reactions (since bots lack typing indicators) and inbound reaction triggers; fixes a confirmed wrong-message bug in threaded replies. |
| [#1167](https://github.com/moltis-org/moltis/pull/1167) | `docs: forbid Claude session URLs in commits and PRs` | **Merged** | Extends `CLAUDE.md` git-workflow rules to explicitly disallow `Claude-Session:` / AI-assistant session links in commit messages and PR descriptions. |

**Net effect:** Slack UX reliability improved (acknowledgments + bug fix); contribution hygiene tightened.

## 4. Community Hot Topics
*No issues were updated in the last 24h, and all tracked PRs show **0 reactions** and **undefined comment counts**.*  
The most “active” items by update recency are the three open PRs below, but **no community discussion signal** (comments, 👍, review threads) is visible in the data.

| PR | Title | Author | Updated | Why it matters |
|----|-------|--------|---------|----------------|
| [#1168](https://github.com/moltis-org/moltis/pull/1168) | `feat(nostr): add NIP-29 group chat support for Buzz channels` | penso | 2026-07-26 | Enables Moltis to speak **NIP-29 group chat** over **NIP-42** auth—key for Block’s **Buzz** workspace where AI agents and humans are equal channel members. |
| [#1166](https://github.com/moltis-org/moltis/pull/1166) | `feat(slack): per-message acknowledgment reactions, phases, reconnect supervision, and Block Kit` | penso | 2026-07-25 | Hardens Slack integration: phased feedback, Block Kit rendering, reconnect supervision—addressing real-world queueing/cancellation/delivery-failure scenarios. |
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | `feat(memory): add zvec vector database memory backend` | demyanrogozhin | 2026-07-25 | Experimental **zvec + redb** vector backend (feature-gated behind `zvec` cargo feature), paired with an external llama-cpp embedding server. |

**Underlying needs:**  
- **Multi-protocol agent interop** (Nostr/Buzz)  
- **Production-grade Slack reliability** (acknowledgments, supervision, rich UI)  
- **Pluggable, local-first vector memory** (zvec/redb, decoupled embeddings)

## 5. Bugs & Stability
**No new bug reports, crashes, or regressions** appear in the 24h issue data.  
The only bug fix noted is in merged PR [#1165](https://github.com/moltis-org/moltis/pull/1165): a **wrong-message bug in threaded Slack replies**—now resolved.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **NIP-29 group chat (Buzz) support** | [#1168](https://github.com/moltis-org/moltis/pull/1168) (open) | High—active PR, aligns with “AI agents as equal team members” vision |
| **Slack: phased acks, Block Kit, reconnect supervision** | [#1166](https://github.com/moltis-org/moltis/pull/1166) (open) | High—builds on just-merged acknowledgment work |
| **zvec/redb vector memory backend** | [#1158](https://github.com/moltis-org/moltis/pull/1158) (open) | Medium—experimental, feature-gated, author calls it “vibe-coded” |
| **Stricter contribution metadata rules** | [#1167](https://github.com/moltis-org/moltis/pull/1167) (merged) | Done—already in `CLAUDE.md` |

**Prediction:** Next release will likely ship the Slack hardening (#1166) and possibly the Buzz/Nostr integration (#1168) if review completes; zvec backend may remain feature-gated/experimental.

## 7. User Feedback Summary
**No direct user feedback (issues, comments, reactions) captured in the last 24h.**  
Indirect signals from PR descriptions:
- Slack users **lacked any “message received” signal** (no typing indicator) → drove acknowledgment reactions (#1165, #1166).
- Threaded-reply **wrong-message bug** confirmed and fixed (#1165).
- Developers want **local, embeddable vector stores** with pluggable embedding servers (#1158).
- Maintainers seek **clean git history** free of AI-session metadata (#1167).

## 8. Backlog Watch
*No long-unanswered issues exist in the 24h window (zero issues updated).*  
Among open PRs, the following have gone **≥1 day without visible review activity** (no comments/reactions recorded):

| PR | Age | Risk |
|----|-----|------|
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | 9 days (created 2026-07-17) | Experimental backend may need architectural review before merge |
| [#1166](https://github.com/moltis-org/moltis/pull/1166) | 2 days | Builds on merged #1165; should be prioritized for Slack users |
| [#1168](https://github.com/moltis-org/moltis/pull/1168) | 1 day | New protocol integration; security/auth review advisable |

**Recommendation:** Maintainers should triage #1158 (architecture fit), accelerate #1166 (user-facing reliability), and schedule security review for #1168.

---

*Data source: GitHub REST API (issues, PRs, releases) for moltis-org/moltis, 2026-07-25 → 2026-07-26. Comment/reaction counts were not available in the provided payload.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-07-26

---

## 1. Today's Overview
CoPaw saw **high issue velocity** (7 new/updated issues) but **zero releases** in the last 24 hours. The issue queue is dominated by a **critical MCP transport regression** (filed 3× as duplicates #6470, #6469, #6468) that breaks `streamable_http` servers, plus a **Wayland/Edge CPU leak** (#6460) affecting Linux desktop users. On the PR side, two long-running reranker PRs (#5691, #5692) were closed (likely superseded by #6399), while a major browser unification effort (#6276) and SQLite hardening (#6459) remain in review. No merged PRs today — the project is in a **pre-release stabilization window** with multiple blocker bugs open.

---

## 2. Releases
**No new releases** in the last 24h. The last published version remains **v2.0.1** (per issue reports). Several PRs (#6459, #6399, #6463) target reliability and CI improvements that typically ship in patch releases.

---

## 3. Project Progress — Merged / Closed PRs Today
| PR | Title | Status | Impact |
|----|-------|--------|--------|
| [#5691](https://github.com/agentscope-ai/QwenPaw/pull/5691) | feat(console): add reranker config UI for reme0.4 memory search | **Closed** | UI for reranker configuration — likely superseded by #6399 |
| [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) | feat(memory): add reranker for search results on reme0.4 | **Closed** | Backend reranker support — likely superseded by #6399 |

> **Note**: Both closed PRs are from the same author (lecheng2018) and date to a newer PR (#6399) that combines UI + backend. This suggests a **rebase/consolidation** rather than rejection.

---

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470) + [#6469](https://github.com/agentscope-ai/QwenPaw/issues/6469) + [#6468](https://github.com/agentscope-ai/QwenPaw/issues/6468) | Bug (×3 duplicates) | 1 each | 0 | **MCP `streamable_http` transport broken** — driver hardcodes `sse_client` ignoring YAML `transport` config. Blocks all non-SSE MCP servers. |
| [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | Bug | 2 | 0 | **High CPU on Edge/Wayland** — large result sets / WebSocket push suspected. Linux desktop users blocked. |
| [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | PR (feat) | — | 0 | **Unified Browser SDK** — control/execution plane split, multi-backend. High architectural impact, long review cycle. |

**Analysis**: The MCP transport bug is the **single highest-impact issue** — filed 3× independently, indicating real production breakage. The Wayland CPU leak affects a growing Linux desktop segment. The browser unification PR is a strategic refactor needing maintainer bandwidth.

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 **Critical** | [#6470/#6469/#6468](https://github.com/agentscope-ai/QwenPaw/issues/6470) | MCP driver ignores `transport: streamable_http` → hardcoded `sse_client` → all streamable_http servers fail. Root cause: `mcp_stateful_client.py:~L800` `_setup_transport`. | **No PR yet** — needs code change in MCP client |
| 🟠 **High** | [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | Edge + Wayland: single tab CPU → 100% after idle on QwenPaw pages. Suspected: large result set rendering / WebSocket push. | No |
| 🟡 **Medium** | [#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464) | AgentScope Platform deployment: all model connections fail ("API error"), model dropdown empty. Affects Pro & Free tiers. | No |
| 🟡 **Medium** | [#6459](https://github.com/agentscope-ai/QwenPaw/pull/6459) | SQLite persistence hardening: concurrent writes, WAL lifecycle, schema compat, backup/restore reliability. | **PR open** — under review |

> **Action needed**: The MCP bug (#6470) is a **regression in v2.0.1** and should be hotfixed. No assignee or fix PR visible yet.

---

## 6. Feature Requests & Roadmap Signals
| Request | Issue/PR | Likelihood for Next Version |
|---------|----------|----------------------------|
| **Clickable file/folder path buttons in chat** | [#6466](https://github.com/agentscope-ai/QwenPaw/issues/6466) | 🟡 Medium — UX polish, low backend risk |
| **Reranker UI + backend for ReMeLight memory** | [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | 🟢 High — PR under review, supersedes closed #5691/#5692 |
| **Unified Browser SDK (multi-backend)** | [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | 🔴 Low for patch — major refactor, likely v2.1+ |
| **Native Windows sandbox docs clarification** | [#6462](https://github.com/agentscope-ai/QwenPaw/pull/6462) | 🟢 High — docs-only, quick merge |
| **CI: website deploy from release orchestrator** | [#6463](https://github.com/agentscope-ai/QwenPaw/pull/6463) | 🟢 High — fixes broken auto-deploy |

**Prediction**: Next patch (v2.0.2) will likely include: MCP transport fix, SQLite hardening (#6459), reranker UI (#6399), Windows sandbox docs (#6462), CI deploy fix (#6463). Browser unification (#6276) and clickable paths (#6466) are v2.1+ candidates.

---

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **MCP servers unusable** | 3 duplicate bug reports in 24h; "tools fail to load", "Session terminated" | 😡 Frustrated — production blocker |
| **Linux/Wayland perf regression** | Edge tab CPU runaway, fan spin; "only on QwenPaw pages" | 😟 Annoyed — daily driver impacted |
| **Platform deployment broken** | "All models fail", "dropdown empty" on AgentScope Platform | 😡 Blocked — cannot evaluate |
| **New-user onboarding gaps** | [#6467](https://github.com/agentscope-ai/QwenPaw/issues/6467): "followed video, node shows -1", "no one answers in group" | 😕 Confused — docs/community support lacking |
| **Workflow friction** | "Copy-paste paths to Explorer" (#6466) | 😐 Minor UX — power user request |

> **Signal**: v2.0.1 has **regressions in MCP, Linux desktop, and Platform deploy** — core user paths. Community support channel appears unresponsive (#6467).

---

## 8. Backlog Watch — Stale / Needs Maintainer Attention
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | 6 days | Open, 0 reviews | **Strategic browser refactor** — no maintainer review yet. Blocks future browser features. |
| [#6365](https://github.com/agentscope-ai/QwenPaw/pull/6365) | 4 days | Open | **Windows test fix** — first-time contributor, easy win for CI health. |
| [#6459](https://github.com/agentscope-ai/QwenPaw/pull/6459) | 2 days | Open | **SQLite reliability** — data integrity fix, should gate next release. |
| [#6463](https://github.com/agentscope-ai/QwenPaw/pull/6463) | 1 day | Open | **Website deploy broken** — public site stale since release orchestrator change. |
| [#6467](https://github.com/agentscope-ai/QwenPaw/issues/6467) | 1 day | Open, 1 comment | **New user abandoned** — no maintainer reply, reflects community health. |

---

## Health Scorecard (2026-07-26)
| Dimension | Score | Trend |
|-----------|-------|-------|
| **Release Cadence** | ⚠️ Low | No patch since v2.0.1; blockers accumulating |
| **Bug Triage** | ❌ Critical gaps | 3× duplicate MCP bug, no fix PR assigned |
| **PR Throughput** | 🟡 Slow | 2 closed (consolidation), 0 merged, 6 open >2 days |
| **Community Responsiveness** | ⚠️ Weak | New-user issue unanswered; duplicate bugs not deduped |
| **Architectural Progress** | 🟢 Active | Browser unification, reranker, SQLite hardening in flight |

**Recommendation**: Prioritize **MCP transport hotfix + v2.0.2 cut** this week. Assign triage owner to dedupe issues and respond to new users. Accelerate review on #6459, #6399, #6463, #6462 for patch inclusion.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-26

---

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 69 total updates (19 issues, 50 PRs) in the last 24 hours, but **zero releases** — the project is in a heavy maintenance/feature-development phase targeting v0.8.4 (tracked in #8357, target July 31). Critical security and correctness bugs dominate the issue queue: a WhatsApp Web configuration bypass (#9348, S1 security), a verifiable-intent chain verification gap (#9328, S2), and CI flakiness poisoning test mutexes (#9357, S2). The PR pipeline is saturated with large, cross-cutting changes (plugin architecture unification #6489, OpenAI gateway endpoint #8486, Telegram multi-message streaming #8561, WASM plugin infrastructure #9124/#9125), indicating architectural maturation but also integration risk. Two PRs closed/merged today (#9270 npm audit fix, #9123 plugin route stamping), while 48 remain open — several stalled awaiting author action or maintainer review.

---

## 2. Releases

**No new releases today.** The v0.8.4 maintenance train (#8357) targets **July 31, 2026**. PR #9376 ("chore(release): cut v0.8.4") is open and appears to be the release-cut PR: it renames the root package `zeroclawlabs → zeroclaw`, publishes 18 crates to crates.io (first time since microkernel split #5811), removes 5 crates, and includes changelog generation. **Breaking change:** `cargo install zeroclaw` will now match the binary name; downstream consumers using the old crate name must update.

---

## 3. Project Progress — Merged/Closed Today

| PR / Issue | Type | Summary | Impact |
|------------|------|---------|--------|
| [#9270](https://github.com/zeroclaw-labs/zeroclaw/pull/9270) | **PR Merged** | `fix(web/deps): resolve npm audit advisories` — pins `@redocly/openapi-core@1.34.7`, upgrades `js-yaml@4.3.0`, `brace-expansion@2.1.2` | Resolves 3 high-severity npm audit findings from #9235; unblocks CI green |
| [#9123](https://github.com/zeroclaw-labs/zeroclaw/pull/9123) | **PR Closed** | `fix(plugins): host-stamp channel plugin routes` — adds `PluginChannelEndpoint`, separates routing type from binding alias | Foundational for WASM plugin channel routing; superseded/refactored into #9124/#9125 |
| [#9285](https://github.com/zeroclaw-labs/zeroclaw/issues/9285) | **Issue Closed** | `nested set_prop masks invalid values as unknown properties` — config error misclassification | Fixed via config validation path correction (likely in #9239 or related) |
| [#8962](https://github.com/zeroclaw-labs/zeroclaw/issues/8962) | **Issue Closed** | `zeroclaw-runtime tests flake under parallel execution` | Marked closed; root cause may overlap with #9357 (mutex poisoning) |

**Net progress:** Security hygiene (npm deps) and plugin infrastructure cleanup advanced; runtime test flakiness persists (#9357 reopened/active).

---

## 4. Community Hot Topics — Most Active Discussions

| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) | 6 | **Bug (S1 Security)** | WhatsApp Web `mode=business` ignores `dm_policy`/`group_policy`/`allowed_groups` — config appears restrictive but behaves as fully open. **Operator trust violation.** |
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | 5 | **RFC / Tracker (P2, High Risk)** | Unify "Integrations" and "Plugins" into single plugin catalog. Architectural direction-setting; 14-month old tracker, still active. |
| [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) | 2 | **Bug (P1, CI Flakiness)** | `cargo test -p zeroclaw-runtime --lib` fails 19/20 runs; flaky assertion poisons global mutex, cascading failures. **Blocks reliable CI.** |
| [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) | 2 | **RFC (P2, High Risk)** | AI-assisted PR pre-review/re-review using CI results. Process automation proposal; needs maintainer buy-in. |
| [#9235](https://github.com/zeroclaw-labs/zeroclaw/issues/9235) | 2 | **CI/Security (P1)** | npm audit failure with 3 high/critical findings (now resolved via #9270). |

**Underlying theme:** **Trustworthy configuration** (#9348, #9366) and **reliable automation** (#9357, #9330) are the top community concerns. The plugin unification RFC (#6489) remains a long-term architectural magnet.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Component | Status | Fix PR |
|----------|-------|-----------|--------|--------|
| **S1 — Security** | [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) WhatsApp Web chat policies ignored in `business` mode; `allowed_groups=[]` permits all groups | `channels/whatsapp-web` | **Open** | [#9354](https://github.com/zeroclaw-labs/zeroclaw/pull/9354) (warns when policies cannot take effect) |
| **S2 — Degraded** | [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) `verifiable-intent` evaluates constraints without verifying credential chain | `verifiable_intent/verification` | **Open** | None yet |
| **S2 — Degraded** | [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) Runtime lib tests flake 95%; mutex poisoning cascades | `zeroclaw-runtime`, CI | **Open** | None yet |
| **S2 — Degraded** | [#9373](https://github.com/zeroclaw-labs/zeroclaw/issues/9373) Peer-agent delivery runs without cost-tracking context → budgets unenforced | `runtime/daemon` | **Open** | None yet |
| **S2 — Degraded** | [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) Config metadata remains English in localized ZeroCode/web surfaces | `zerocode/tui`, `web` | **Open** | None yet |
| **S3 — Minor** | [#9374](https://github.com/zeroclaw-labs/zeroclaw/issues/9374) CLI `run()` leaks unbalanced `AgentStart` on 12 exit paths | `runtime/daemon` | **Open** | None yet |
| **S3 — Minor** | [#9366](https://github.com/zeroclaw-labs/zeroclaw/issues/9366) WhatsApp Web accepts `approval_timeout_secs` but never reads it | `channels/whatsapp-web` | **Open** | None yet (split from #9348) |
| **P1 — Config** | [#9239](https://github.com/zeroclaw-labs/zeroclaw/issues/9239) `config patch --json` emits plaintext errors on 2 failure paths | `config` | **Open** | None yet |
| **P1 — Cron** | [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) CLI-created cron jobs hardcode `delivery.mode=none` → output discarded | `cron`, `cli` | **Open** | None yet |

**Critical gap:** Only **#9348** has an active mitigation PR (#9354 adds a warning; does not fix the bypass). All other S1/S2 bugs lack fix PRs.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for v0.8.4 / Next |
|--------|--------|------------------------------|
| **Plugin catalog unification** — collapse Integrations + Plugins into single Wasmtime/WIT component model | [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) (tracker, 14mo active) | **Low for v0.8.4** (high risk, XL size); likely v0.9+ |
| **OpenAI Chat Completions gateway endpoint** — enable LangChain/Continue.dev/Aider compatibility | [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) (XL, needs author action) | **Medium** — high demand, but XL scope; may slip to post-v0.8.4 |
| **Telegram `multi_message` streaming mode** — paced narration drafts | [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) (XL, trusted contributor) | **High** — active review, matches Discord/Matrix parity |
| **Matrix `single_message` progress drafts** — edit progress/reasoning in one message | [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) (XL, principal contributor) | **Medium-High** — architectural precedent for streaming modes |
| **WASM plugin channel component fixture + e2e test** | [#9124](https://github.com/zeroclaw-labs/zeroclaw/pull/9124) / [#9125](https://github.com/zeroclaw-labs/zeroclaw/pull/9125) | **High** — foundational for plugin runtime; CI-blocking |
| **Shared egress policy foundation** (HTTP/WS/TCP/TLS/STARTTLS) | [#9137](https://github.com/zeroclaw-labs/zeroclaw/pull/9137) (XL) | **Low for v0.8.4** — infra groundwork |
| **Atlas Cloud model provider** (OpenAI-compatible) | [#9200](https://github.com/zeroclaw-labs/zeroclaw/pull/9200) (S) | **High** — small, self-contained, needs author action |
| **Chinese (zh) full UI translation** | [#9377](https://github.com/zeroclaw-labs/zeroclaw/pull/9377) (new) | **High** — i18n completion, low risk |
| **ACP JSON-RPC transport smoke test** (`deliver_file`) | [#9370](https://github.com/zeroclaw-labs/zeroclaw/issues/9370) (test) | **Medium** — follows #9195 inbound resource work |

**Prediction:** v0.8.4 will ship **Telegram multi-message**, **Atlas Cloud provider**, **zh translations**, and **WASM plugin test fixtures**. OpenAI gateway and plugin unification are v0.9+ candidates.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **"Config lies to me"** — WhatsApp Web shows restrictive settings but behaves openly | [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) (S1), [#9366](https://github.com/zeroclaw-labs/zeroclaw/issues/9366) | Operators deploy "locked down" bots that actually reply to every DM/group; **trust violation**, potential data leakage |
| **"Tests are unreliable"** — 95% failure rate on runtime lib tests, mutex poisoning | [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) | Contributors cannot trust CI; merge queue stalls; flakiness masks real regressions |
| **"Cron jobs are silent"** — CLI creates jobs with `delivery=none`, output discarded | [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) | Scheduled agent runs appear successful but produce no observable output; **silent data loss** |
| **"Cost tracking is incomplete"** — peer-agent turns run without budget enforcement | [#9373](https://github.com/zeroclaw-labs/zeroclaw/issues/9373) | Multi-agent deployments exceed spend limits undetected |
| **"Localization is skin-deep"** — Config metadata stays English in ZeroCode/web | [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) | Non-English operators cannot navigate config schema; **accessibility gap** |
| **"Plugin architecture is fragmented"** — Integrations vs Plugins duality | [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | Developers face inconsistent extension points; high cognitive load |

**Positive signals:** Active contributor base (trusted/principal contributors on large PRs), RFC process for process changes (#9330), and structured risk classification (p1/p2, risk:high/medium) show mature governance.

---

## 8. Backlog Watch — Stalled High-Value Items Needing Maintainer Attention

| Item | Age | Type | Why It Matters | Blocked On |
|------|-----|------|----------------|------------|
| [#7130](https://github.com/zeroclaw-labs/zeroclaw/issues/7130) `forbid(unsafe_code)` workspace-wide (aardvark-sys carve-out) | 54 days | **Security/Quality (P2)** | Restores memory-safety guarantee; currently unenforced | Maintainer decision on `aardvark-sys` audit |
| [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) `feat(config): add schema struct & risk field` (SandboxPolicyConfig) | 39 days | **Security/Config (XL, High Risk)** | Canonical sandbox policy model; refs #6996 | Author action needed (rarean) |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) OpenAI Chat Completions gateway endpoint | 27 days | **Integration (XL, High Risk)** | Unblocks LangChain/Continue.dev/Aider/IDE integrations | Author action (REL-mame); design review |
| [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) Telegram `multi_message` streaming mode | 26 days | **Channel (XL, Trusted Contributor)** | Feature parity with Discord/Matrix; user-facing | Maintainer review (metalmon) |
| [#9115](https://github.com/zeroclaw-labs/zeroclaw/pull/9115) CI: run compile-heavy jobs on Blacksmith runners | 8 days | **CI/Perf (XS)** | Speeds up Quality Gate (7 Rust jobs); optional faster runners | Maintainer approval (JordanTheJet) |
| [#9124](https://github.com/zeroclaw-labs/zeroclaw/pull/9124) / [#9125](https://github.com/zeroclaw-labs/zeroclaw/pull/9125) WASM plugin channel fixture + listener supervision | 8 days | **Plugin Runtime (XL/M, High Risk)** | Enables real plugin e2e tests; fixes unowned background task | Author action (JordanTheJet) |
| [#9137](https://github.com/zeroclaw-labs/zeroclaw/pull/9137) Shared egress policy foundation | 8 days | **Security/Infra (XL, High Risk)** | Single authorization path for all outbound transports | Author action (JordanTheJet) |
| [#8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357) v0.8.4 maintenance train tracker | 30 days | **Release (Tracker)** | Target: July 31; scope frozen; needs triage for remaining items | Maintainer triage (Audacity88

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*