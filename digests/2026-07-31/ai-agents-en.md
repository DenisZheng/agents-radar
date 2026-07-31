# OpenClaw Ecosystem Digest 2026-07-31

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-31 02:09 UTC

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

# OpenClaw Project Digest — 2026-07-31

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 500 issues and 500 PRs updated in the last 24 hours — a clear signal of active development and community engagement. However, the **open-to-closed ratio is concerning**: 476 open vs 24 closed issues, and 410 open vs 90 merged/closed PRs, indicating a growing backlog. No new release was published today. The issue landscape is dominated by **critical stability bugs** (memory leaks, crash loops, message loss, session state corruption) alongside **architectural feature requests** (multi-agent collaboration, tiered bootstrap loading, skill ecosystem improvements). Several P0/P1 issues have been open for months with linked PRs but remain unresolved, suggesting maintainer bandwidth constraints.

---

## 2. Releases

**No new releases today.** The latest stable appears to be 2026.3.13 (referenced in issues #47975, #51396). Live documentation is ahead of releases (#48920), creating version skew for operators.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Area | Summary | Status |
|----|------|---------|--------|
| [#116606](https://github.com/openclaw/openclaw/pull/116606) | Setup/Onboarding | Improve local model onboarding; add LM Studio to guided flow; better verification UX | **CLOSED** |
| [#116320](https://github.com/openclaw/openclaw/pull/116320) | macOS | Avoid identity reads during menu rendering (perf) | **CLOSED** |
| [#116610](https://github.com/openclaw/openclaw/pull/116610) | Pairing/Boot | Skip malformed account ID in legacy migration instead of crashing boot | **OPEN** (P0, needs proof) |
| [#116584](https://github.com/openclaw/openclaw/pull/116584) | Agents/Ollama | Preserve thinking for runtime-selected Ollama models (AI-assisted) | **OPEN** (automerge armed) |
| [#116619](https://github.com/openclaw/openclaw/pull/116619) | Agents | Scale requester settle batching for large subagent fan-outs | **OPEN** (ready for maintainer) |
| [#116623](https://github.com/openclaw/openclaw/pull/116623) | Agents | Index swarm scheduler runs to avoid O(n²) teardown | **OPEN** (ready for maintainer) |
| [#116589](https://github.com/openclaw/openclaw/pull/116589) | Meeting Bot | Prevent stalled realtime playback from growing memory (#116201) | **OPEN** (waiting on author) |
| [#116616](https://github.com/openclaw/openclaw/pull/116616) | Exec Tool | Preserve approved exec continuation output (closes #41152) | **OPEN** (needs proof) |
| [#116621](https://github.com/openclaw/openclaw/pull/116621) | Web UI | Show and restore inherited settings defaults | **OPEN** (ready for maintainer) |
| [#116624](https://github.com/openclaw/openclaw/pull/116624) | Gateway | Stabilize session creator facets across row order | **OPEN** (needs proof) |

**Key progress themes:** Performance optimization (Kova diagnostics, scheduler indexing), boot reliability, exec tool output fidelity, and onboarding polish. Most high-impact PRs remain in review limbo.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Issue/PR | Comments | 👍 | Core Problem | Underlying Need |
|----------|----------|-----|--------------|-----------------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 38 | 1 | Text between tool calls leaks to messaging channels (Slack, iMessage) | **UX integrity** — internal processing noise pollutes user-facing channels |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 22 | 1 | Gateway memory leak: 350MB → 15.5GB over days, OOM crashes | **Production stability** — gateway unusable for multi-day deployments |
| [#115326](https://github.com/openclaw/openclaw/issues/115326) | 20 | 0 | Crash-loop breaker suppresses Discord/WhatsApp permanently; recovery fails | **Channel reliability** — documented recovery path broken |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 17 | 0 | Tiered bootstrap file loading for progressive context control | **Token efficiency** — large workspaces waste context window |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | 16 | 1 | Embedded prompt cache breaks across room-event/policy/Responses boundaries | **Cost/performance** — cache misses increase latency and spend |
| [#99551](https://github.com/openclaw/openclaw/issues/99551) | 15 | 1 | Codex worker runaway hardening sprint (tracker) | **Worker reliability** — systemic failure modes in Codex integration |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) | 15 | 2 | Community Skill Development & ClawHub ecosystem gaps | **Ecosystem growth** — skill authoring/install UX far from promise |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | 15 | 4 | Steer mode doesn't inject messages mid-turn for main sessions | **Real-time UX** — user messages queued until turn completes |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | 14 | 5 | Bootstrap files in agentDir silently ignored — only workspace files loaded | **Configuration clarity** — documented feature doesn't work |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) | 13 | 1 | `${XDG_CONFIG_HOME}` not processed when installing a skill | **Standards compliance** — env var expansion broken in skill install |

**Pattern:** Top issues cluster around **session/message reliability** (leaks, loss, crash loops), **gateway resource management** (memory, OOM), and **configuration/ecosystem gaps** (bootstrap, skills, env vars). High comment counts on older issues (#25592 from Feb, #22438 from Feb) indicate persistent pain points without resolution.

---

## 5. Bugs & Stability — Ranked by Severity

### 🔴 P0 / Critical (Production-Blocking)

| Issue | Severity | Description | Fix PR? |
|-------|----------|-------------|---------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | **P0** | Gateway memory leak → 15.5GB RSS → OOM kill → launchd restart loop | ❌ No linked PR |
| [#115326](https://github.com/openclaw/openclaw/issues/115326) | **P0** | Crash-loop breaker permanently suppresses Discord/WhatsApp; `channels.start` recovery fails (WS 1006) | ❌ No linked PR |
| [#116525](https://github.com/openclaw/openclaw/issues/116525) | **P1** | Unrelated session cleanup stops GPT-Live browser broker permanently | ❌ New (Jul 30) |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | **P1** | Realtime voice retains unbounded provider/consult state → memory growth | ✅ PR [#116589](https://github.com/openclaw/openclaw/pull/116589) (waiting on author) |

### 🟠 P1 / High (Session Corruption, Data Loss, Security)

| Issue | Severity | Description | Fix PR? |
|-------|----------|-------------|---------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | **P1** | Inter-tool-call text leaks to messaging channels (security/UX) | ⚠️ Linked PR (clawsweeper:linked-pr-open) |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | **P1** | Steer mode doesn't inject messages mid-turn (regression from 9889c6da5) | ⚠️ Linked PR |
| [#51396](https://github.com/openclaw/openclaw/issues/51396) | **P1** | `clearUnboundScopes` strips operator scopes for non-local token-auth clients | ⚠️ Linked PR |
| [#47910](https://github.com/openclaw/openclaw/issues/47910) | **P1** | Provider fallback doesn't quarantine auth-broken providers | ⚠️ Linked PR |
| [#49876](https://github.com/openclaw/openclaw/issues/49876) | **P1** | Cron sessions hallucinate output on tool failure instead of failing cleanly | ❌ No PR |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) | **P1** | Embedded runner "Network connection lost" on large tool param generation | ❌ No PR |
| [#100778](https://github.com/openclaw/openclaw/issues/100778) | **P1** | Preflight compaction failure locks Composer in "terminated" state permanently | ❌ No PR |
| [#102006](https://github.com/openclaw/openclaw/issues/102006) | **P1** | Aborted `exec` wedges subsequent exec calls in same session (regression from #94412) | ❌ **CLOSED** but issue remains open? |

### 🟡 P2 / Medium (Reliability, UX Friction)

| Issue | Severity | Description | Fix PR? |
|-------|----------|-------------|---------|
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | **P2** | Tiered bootstrap loading for context control | ⚠️ Linked PR |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | **P2** | Embedded prompt cache breaks across boundaries | ❌ No PR |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | **P2** | `agentDir` bootstrap files silently ignored | ⚠️ Linked PR |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) | **P2** | `${XDG_CONFIG_HOME}` not expanded in skill install | ⚠️ Linked PR |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | **P2** | Hardcoded `/Users/wangtao` workspace path in released code | ❌ No PR |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | **P2** | `write` tool lacks append mode → cron sessions destroy shared files | ❌ No PR |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) | **P2** | Subagent sessions persist after completion; main session unresponsive | ❌ No PR |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) | **P2** | `active-memory` plugin blocks replies, overloads multi-agent gateways | ❌ No PR |
| [#69118](https://github.com/openclaw/openclaw/issues/69118) | **P2** | Claude CLI sessions reset every turn in group channels (extraSystemPromptHash drift) | ⚠️ Linked PR |
| [#82662](https://github.com/openclaw/openclaw/issues/82662) | **P2** | Isolated cron `agentTurn` fails with "setup timed out before runner start" | ❌ No PR |
| [#99586](https://github.com/openclaw/openclaw/issues/99586) | **P2** | Runtime tool surface returns blank body after gateway ops | ❌ No PR |
| [#48810](https://github.com/openclaw/openclaw/issues/48810) | **P2** | Compaction retry creates orphan fork in parentId chain | ❌ No PR |
| [#48579](https://github.com/openclaw/openclaw/issues/48579) | **P2** | Context pruning `mode: "off"` doesn't prevent compactions | ❌ No PR |

**Observation:** 14+ P1/P0 issues with **no fix PR** — critical bugs are accumulating faster than fixes. Several have `clawsweeper:linked-pr-open` but remain open for months.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signal | Likelihood for Next Version |
|-------|----------|--------|----------------------------|
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | P2 | Tiered bootstrap loading — progressive context control for large workspaces | **High** — linked PR, clear token-saving value |
| [#35203](https://github.com/openclaw/openclaw/issues/35203) | P2 | Multi-agent: capability profiling, shared blackboard, layered memory, token governance | **Medium** — RFC stage, architectural scope large |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | P2 | Per-agent cost budget enforcement at gateway | **High** — operator demand for spend control, gateway-level natural fit |
| [#27445](https://github.com/openclaw/openclaw/issues/27445) | P2 | `announceTarget` for sub-agent completion routing to parent session | **Medium** — linked PR, enables workflow orchestration |
| [#47597](https://github.com/openclaw/openclaw/issues/47597) | P2 | `streamTo="parent"` support for `runtime="subagent"` | **Medium** — parity with ACP runtime |
| [#80213](https://github.com/openclaw/openclaw/issues/80213) | P2 | Skill author-defined setup hook (run script on install/update) | **High** — closes skill ecosystem gap, linked to #50090 |
| [#20786](https://github.com/openclaw/openclaw/issues/20786) | P2 | Telegram Business Bot support (business_message updates) | **Medium** — niche but growing platform feature |
| [#96675](https://github.com/openclaw/openclaw/issues/96675) | P2 | Owner-signed responsibility gates for memory/actions/skills reuse | **Low** — advanced trust/safety, likely post-stabilization |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | P2 | Per-agent dreaming configuration (avoid memory spikes) | **High** — operational pain (OOM from simultaneous dreaming) |
| [#49259](https://github.com/openclaw/openclaw/issues/49259) | P2 | Prune stale orphaned sessions from Dashboard | **High** — UX hygiene, low complexity |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) | P2 | WhatsApp backfill missed messages after reconnection | **Medium** — reliability for major channel |
| [#33413](https://github.com/openclaw/openclaw/issues/33413) | P

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent & Personal Assistant Ecosystem (2026-07-31)

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape shows **high aggregate velocity but fragmented maturity**. Twelve tracked projects generated 600+ issue/PR updates in 24 hours, yet only **3 projects released** (Hermes v0.19.1, LobsterAI 2026.7.29, OpenClaw none). A clear bifurcation exists: **core frameworks** (OpenClaw, ZeroClaw, CoPaw) carry massive backlogs and architectural debt, while **downstream/distribution projects** (NanoBot, LobsterAI, Moltis, PicoClaw) iterate faster on stability, UX, and integrations. Security hardening, MCP adoption, local-model support, and session/memory hygiene are universal concerns. No project has solved the "reliable multi-day gateway" problem; memory leaks and session corruption remain ecosystem-wide P0s.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | PRs Merged | Release Today | Health Indicator |
|---------|----------------|-------------|------------|---------------|------------------|
| **OpenClaw** | 500 | 500 | ~24 | ❌ | 🟡 High velocity, critical backlog |
| **NanoBot** | 5* | 48 | 31 | ❌ | 🟢 Healthy, stabilizing |
| **Hermes Agent** | 50 | 50 | 2 | ✅ v0.19.1 | 🟡 Review bottleneck, security debt |
| **PicoClaw** | 7 | 17 | 5 | ❌ | 🟡 Active, core stability debt (#3308) |
| **NanoClaw** | 2 | 17 | 5 | ❌ | 🟡 Caution — 2 P0 regressions |
| **LobsterAI** | 0 | 10 | 8 | ✅ 2026.7.29 | 🟢 High throughput, enterprise focus |
| **Moltis** | 2 | 4 | 1 | ❌ | 🟡 Steady, security-first |
| **CoPaw** | 24 | 48 | 25 | ❌ | 🟡 Fast fixes, 2 critical v2.0 regressions |
| **ZeptoClaw** | 0 | 1 | 0 | ❌ | 🟢 Stable, quiet |
| **ZeroClaw** | 14 | 50 | 0 | ❌ | 🟡 Review saturation, RFC stall |
| **NullClaw** | 0 | 0 | 0 | ❌ | ⚫ Inactive |
| **TinyClaw** | 0 | 0 | 0 | ❌ | ⚫ Inactive |
| **IronClaw** | — | — | — | — | ⚫ Data unavailable |

*Inferred from bug reports; NanoBot digest notes "5 new issues opened today."*

---

## 3. OpenClaw's Position

**Advantages vs. Peers**
- **Scale of contribution**: 10× PR volume of nearest peer (ZeroClaw 50, CoPaw 48)
- **Architectural scope**: Only project tackling multi-agent collaboration (#35203), tiered bootstrap (#22438), and skill ecosystem (#50090) at platform level
- **Reference implementation**: Downstream projects (NanoClaw, PicoClaw, LobsterAI) track OpenClaw APIs and regressions

**Technical Approach Differences**
- **Gateway-centric**: OpenClaw's gateway is a distinct, scalable component (memory leaks #91588, session creator facets #116624); peers embed gateway logic or use lighter bridges
- **Session model**: Complex subagent fan-out (#116619, #116623) and cron isolation (#82662) exceed peer requirements
- **Bootstrap/config**: Tiered loading (#22438) and agentDir semantics (#29387) reflect enterprise workspace needs absent in most peers

**Community Size**
- **Largest by activity metrics** (issues+PRs), but **open/closed ratios signal maintainer bandwidth saturation** (476:24 issues, 410:90 PRs). Peer projects show healthier merge rates (NanoBot 31/48, LobsterAI 8/10, CoPaw 25/72).

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Gateway/Resource Stability** | OpenClaw, NanoBot, Hermes, ZeroClaw, Moltis | Memory leak fixes (OpenClaw #91588, NanoBot #5150), OOM prevention, session cleanup, connection pooling |
| **MCP Integration & OAuth** | PicoClaw, NanoClaw, CoPaw, LobsterAI, ZeroClaw | OAuth 2.1+PKCE for zero-config onboarding (PicoClaw #2546/#3302), session recovery (CoPaw #6524), registry drift (NanoClaw #3155) |
| **Local Model Support** | ZeroClaw, PicoClaw, NanoBot, Hermes, CoPaw | Compact profiles (ZeroClaw #5287), Ollama reasoning preservation (OpenClaw #116584), Termux/zoneinfo (NanoBot #5187), effort-based routing (ZeroClaw #7951) |
| **Security Hardening** | All active projects | Webhook auth (ZeroClaw #9565), privileged tool gating (Moltis #1170, ZeroClaw #9568), secret leakage (ZeptoClaw #645), path traversal (LobsterAI #2389), supply-chain (Hermes #75037) |
| **Observability & Eval** | Moltis, ZeroClaw, NanoBot, LobsterAI | OTel/Langfuse instrumentation (Moltis #1174), cross-turn correlation (ZeroClaw #8933), CI stability (NanoBot #5145) |
| **Session/Memory Hygiene** | OpenClaw, CoPaw, Hermes, LobsterAI, NanoClaw | Compaction correctness (OpenClaw #48810, #48579), fork grouping (CoPaw #6559), account isolation (LobsterAI #2409), orphan reconciliation (NanoClaw #3119) |
| **Desktop/Cross-Platform UX** | Hermes, CoPaw, LobsterAI, NanoBot | Windows/macOS updater fixes (Hermes #74942, #74836), global hotkeys (CoPaw #6568), NSIS process cleanup (LobsterAI #2412), Termux support (NanoBot #5187) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | CoPaw | NanoBot | LobsterAI | Moltis | PicoClaw | Hermes |
|-----------|----------|----------|-------|---------|-----------|--------|----------|--------|
| **Primary Focus** | Core platform, multi-agent, enterprise workspaces | Local-first, privacy, minimal runtime | Desktop assistant, v2.0 stabilization | Multi-channel bot, reliability | Enterprise collaboration, cowork | Channel-rich agent, observability | Lightweight, MCP/provider hub | Personal desktop, profiles |
| **Target User** | Operators, platform builders, advanced users | Developers, privacy advocates, edge deploy | Power users, desktop-centric | Bot operators, multi-channel teams | Enterprise teams, knowledge workers | Devs building channel agents | Hobbyists, low-resource, MCP users | Personal users, profile switchers |
| **Architecture** | Gateway + agents + skills (modular) | Rust runtime, plugin providers, no gateway | Tauri desktop, sandboxed execution | Python async, channel adapters | Electron + OpenClaw fork | Go, channel-first, instrumented | Go, minimal deps, provider-centric | Rust + TS, profile isolation |
| **Key Differentiator** | Tiered bootstrap, subagent orchestration, skill hub | `local_small` profile, OpenAI compat, MoA | Computer Use, session tree, theme system | Session locking, WeakValueDictionary, SQLite migration | `/btw` side-chat, account isolation, daily check-in | Block Kit, OTel, per-message ack, Markdown export | Bedrock caching, Converse API, DeltaChat | `--no-browser` auth, Windows PTY, custom providers |
| **Maturity Signal** | High velocity, high debt | RFC-heavy, review stalled | Post-v2.0 patching, performance regression | Stabilizing, CI hardened | Regular releases, enterprise features | Steady, security-first | Active maintenance, architectural audit | Patch cadence, desktop bugs |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration** | OpenClaw, CoPaw, LobsterAI, NanoBot | >10 PRs/day, frequent merges, active triage, release candidates building |
| **Stabilizing** | NanoBot, Moltis, PicoClaw | Bug-fix focus, CI hardening, security patches, pre-release accumulation |
| **Bottlenecked** | ZeroClaw, Hermes Agent | High PR count, near-zero merges, RFC/maintainer review saturation, security fixes unmerged |
| **Quiet/Stable** | ZeptoClaw | Low churn, security-focused PR, no community noise |
| **Inactive** | NullClaw, TinyClaw, IronClaw | No 24h activity |

**Velocity Leaders**: OpenClaw (1000 updates), CoPaw (72), ZeroClaw (64), NanoBot (53).  
**Merge Efficiency Leaders**: NanoBot (65%), LobsterAI (80%), CoPaw (52%), PicoClaw (29%).  
**Release Discipline**: Hermes (10-day patch), LobsterAI (daily-point releases), others batching.

---

## 7. Trend Signals for AI Agent Developers

1. **Security is no longer optional** — Every active project merged or opened auth/sandbox fixes today. Supply-chain (Hermes), webhook verification (ZeroClaw), privilege separation (Moltis), and secret leakage (ZeptoClaw) indicate **production hardening is table stakes**.

2. **MCP is the integration standard** — 6/10 active projects have MCP-related work (OAuth onboarding, session recovery, registry sync). **Zero-config "paste URL" UX** (PicoClaw, NanoClaw) is the user expectation.

3. **Local-model parity drives architecture** — ZeroClaw's `local_small` profile, OpenClaw's Ollama reasoning preservation, NanoBot's Termux support, and CoPaw's Computer Use show **hybrid local/cloud routing** becoming a core requirement, not a niche.

4. **Session hygiene = product quality** — Compaction bugs (OpenClaw), fork flooding (CoPaw), account leakage (LobsterAI), orphan containers (NanoClaw) — **users equate session reliability with agent intelligence**.

5. **Observability shifts from logging to evaluation** — Moltis (Langfuse/OTLP), ZeroClaw (cross-turn OTel), NanoBot (reasoning persistence) — **instrumentation now targets LLM-as-judge and cost attribution**, not just debugging.

6. **Desktop is a distinct battleground** — Hermes (Windows/macOS updater bugs), CoPaw (global hotkey, Computer Use), LobsterAI (NSIS cleanup, sidebar carousel) — **native desktop UX is a key differentiator for personal assistants**.

7. **Enterprise features upstream** — LobsterAI's account isolation, ZeroClaw's MoA provider, OpenClaw's tiered bootstrap — **B2B requirements (multi-tenancy, entitlements, audit) are shaping core frameworks**.

---

**Bottom Line**: The ecosystem is **consolidating around a shared stack** (MCP, local models, session hygiene, security, observability) but **fragmented on distribution model** (gateway vs. embedded, desktop vs. headless, enterprise vs. personal). Projects that resolve the **gateway stability + session correctness** duality while delivering **zero-config MCP + local-model parity** will define the next maturity tier.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-31

## 1. Today's Overview
NanoBot shows **high development velocity** with 48 PRs updated and 31 merged/closed in the last 24 hours — a strong signal of active maintenance and rapid iteration. The project is in a **bug-fix and stabilization phase**, with multiple P1 (priority 1) fixes targeting regressions in agent execution, memory handling, session locking, and CI reliability. Five new issues were opened today, covering audio sending on WhatsApp, tool-call leakage in responses, Termux compatibility, Telegram polling stalls, and a recurring "couldn't produce final answer" error. No new release was cut, suggesting changes are accumulating for a future batch release.

## 2. Releases
**No new releases** published in the last 24 hours. The latest version remains the previously published one. All merged PRs are currently on `main`/development branches, pending a release cut.

---

## 3. Project Progress — Merged/Closed PRs Today (31 total)
Key merged fixes and improvements (all P1 unless noted):

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#5145](https://github.com/HKUDS/nanobot/pull/5145) | **fix(ci): stabilize and speed up CI** | CI/CD, Performance | Replaces flaky timeout test with readiness handshake; batches dependency installs; sequential fallback for channel deps — **major CI reliability win** |
| [#5136](https://github.com/HKUDS/nanobot/pull/5136) | **fix(agent): route finish_reason='length' with blank content to length recovery** | Agent Core, Regression | Fixes misrouting of truncated tool-call responses (closes [#5133](https://github.com/HKUDS/nanobot/issues/5133)) |
| [#5150](https://github.com/HKUDS/nanobot/pull/5150) | **fix(exec): bound buffered session output** | Execution, Performance | Bounds stdout/stderr buffers with head/tail retention; prevents memory blowup during long runs |
| [#5151](https://github.com/HKUDS/nanobot/pull/5151) | **fix(agent): release idle session locks** | Agent Core, Memory | Moves session locks to `WeakValueDictionary`; centralizes lock creation; prevents leak over process lifetime |
| [#5147](https://github.com/HKUDS/nanobot/pull/5147) | **fix(pairing): keep approvals across transient store read failures** | Pairing, Reliability | Stops transient `pairing.json` read errors from wiping all approved senders; fails closed on read, loud on write |
| [#5172](https://github.com/HKUDS/nanobot/pull/5172) | **feat: preserve Responses reasoning state and compact context** | Agent Core, OpenAI Responses API | Replays full opaque output-item chain (including encrypted reasoning) across turns; persists compacted context — **major LLM context upgrade** |
| [#5182](https://github.com/HKUDS/nanobot/pull/5182), [#5181](https://github.com/HKUDS/nanobot/pull/5181) | **refactor/feat(webui): persistent Quick Chat + shared sidebar highlight** | WebUI, UX | Adds always-available Quick Chat entry; unifies selection state across navigation — **UX polish** |
| [#4791](https://github.com/HKUDS/nanobot/issues/4791) (closed) | **DoS: No channel-level message rate limiting** | Security, All Channels | Closed — likely addressed via related fixes or deferred; no linked PR in today's merge list |

**Net progress**: Core stability (CI, memory, locking, session output), agent correctness (length recovery, reasoning persistence), and WebUI usability all advanced significantly.

---

## 4. Community Hot Topics — Most Active Issues/PRs
*No comment counts or reactions were provided in the data (all `undefined`/`0`). Activity inferred from update recency and PR linkage.*

| Item | Type | Why It Matters |
|------|------|----------------|
| [#5171](https://github.com/HKUDS/nanobot/issues/5171) / [#5156](https://github.com/HKUDS/nanobot/pull/5156) | Bug + Fix PR | **Telegram polling stalls silently after network blip** — bot appears alive but stops receiving messages; log is silent; messages pile up server-side. Fix PR adds recovery logic. High user impact for Telegram deployments. |
| [#5185](https://github.com/HKUDS/nanobot/issues/5185) | Bug | **Tool calls leaked into user-facing responses** — raw tool-call code shown to users (screenshot attached). Sudden onset suggests recent regression in response formatting/filtering. |
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) | Bug | **WhatsApp audio sending broken** — receives audio but fails to send; FFmpeg warning in logs. Platform-specific media pipeline issue. |
| [#5187](https://github.com/HKUDS/nanobot/issues/5187) / [#5189](https://github.com/HKUDS/nanobot/pull/5189) | Bug + Fix PR | **Termux incompatibility** — timezone validation fails due to missing `tzdata`. PR installs `tzdata` on all platforms as `zoneinfo` fallback. |
| [#3106](https://github.com/HKUDS/nanobot/issues/3106) | Bug (old, updated) | **"Couldn't produce final answer" on scheduled tasks with GPT** — model-specific; works with other models. Recurring pain point for automation users. |

**Underlying needs**: Users want **reliable background operation** (Telegram, cron, WhatsApp media), **clean UX** (no tool leakage), and **platform inclusivity** (Termux, minimal Linux).

---

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#5171](https://github.com/HKUDS/nanobot/issues/5171) | Telegram polling stalls permanently after transient network failure; no logs, no recovery; messages queue server-side | ✅ [#5156](https://github.com/HKUDS/nanobot/pull/5156) (open) |
| **High** | [#5185](https://github.com/HKUDS/nanobot/issues/5185) | Tool-call JSON/code rendered directly in chat responses — breaks UX, exposes internals | ❌ No PR yet |
| **High** | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | WhatsApp audio send fails (receive works); FFmpeg warning suggests encoding/pipe issue | ❌ No PR yet |
| **Medium** | [#5187](https://github.com/HKUDS/nanobot/issues/5187) | Termux: timezone validation fails (missing `tzdata`) | ✅ [#5189](https://github.com/HKUDS/nanobot/pull/5189) (open) |
| **Medium** | [#3106](https://github.com/HKUDS/nanobot/issues/3106) | Scheduled tasks with GPT models fail with "couldn't produce final answer"; other models work | ❌ No PR yet |
| **Low** | [#5133](https://github.com/HKUDS/nanobot/issues/5133) (closed) | `finish_reason='length'` + tool_calls + blank content misrouted to empty retry | ✅ Fixed via [#5136](https://github.com/HKUDS/nanobot/pull/5136) (merged) |

**Stability note**: 3/6 bugs have open fix PRs; 1 fixed today. The tool-call leakage (#5185) and WhatsApp audio (#5149) are unaddressed regressions needing triage.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Release |
|--------|--------|----------------------------|
| **Session storage migration: JSONL → SQLite** | [#5173](https://github.com/HKUDS/nanobot/pull/5173) (open, large) | High — PR is comprehensive (transactional import, rollback backups, SessionManager routing); foundational for scaling |
| **Telegram custom Bot API base URL + headers** | [#4919](https://github.com/HKUDS/nanobot/pull/4919) (open, P2) | Medium — enterprise/self-hosted demand; well-scoped, has tests |
| **Subagent model presets (spawn with different model)** | [#4291](https://github.com/HKUDS/nanobot/pull/4291) (open, P2) | Medium — advanced agent orchestration; config-gated, low risk |
| **Heartbeat isolated_session config (shared session)** | [#4551](https://github.com/HKUDS/nanobot/pull/4551) (open, P2) | Low-Medium — niche use case (#1899); conflict flag present |
| **Quick Chat + Temporary Chat (WebUI)** | [#5184](https://github.com/HKUDS/nanobot/pull/5184) (open) + [#5181](https://github.com/HKUDS/nanobot/pull/5181) (merged) | High — Quick Chat merged; Temporary Chat in follow-up PR; UX priority |
| **Skills.sh well-known source allowlist** | [#5186](https://github.com/HKUDS/nanobot/pull/5186) (open, P2) | Medium — supply-chain trust for skills; targeted fix |

**Predicted next version theme**: **"Storage & Scale"** — SQLite sessions, hardened Telegram, WebUI polish, and platform robustness (Termux, timezone).

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Silent Telegram failure** | [#5171](https://github.com/HKUDS/nanobot/issues/5171): "bot stops receiving messages permanently while process keeps running and log stays completely silent" | High — production bots go dark without alerts |
| **Tool internals exposed to users** | [#5185](https://github.com/HKUDS/nanobot/issues/5185): screenshot shows raw tool-call JSON in chat | High — breaks trust, confuses non-technical users |
| **WhatsApp media asymmetry** | [#5149](https://github.com/HKUDS/nanobot/issues/5149): receives audio, cannot send | Medium — limits WhatsApp utility |
| **Termux/embedded Linux exclusion** | [#5187](https://github.com/HKUDS/nanobot/issues/5187): timezone validation fails on minimal systems | Medium — blocks hobbyist/edge deployments |
| **Model-specific automation failures** | [#3106](https://github.com/HKUDS/nanobot/issues/3106): GPT fails on scheduled tasks; others work | Medium — forces model switching for cron |
| **DoS vulnerability (closed)** | [#4791](https://github.com/HKUDS/nanobot/issues/4791): no rate limiting on any channel | High (historical) — closed but no linked fix; may still be open |

**Positive signals**: Quick Chat merged ([#5181](https://github.com/HKUDS/nanobot/pull/5181)), CI stabilized ([#5145](https://github.com/HKUDS/nanobot/pull/5145)), reasoning persistence ([#5172](https://github.com/HKUDS/nanobot/pull/5172)) — users get better UX, reliability, and LLM context.

---

## 8. Backlog Watch — Stale but Important Items Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#4819](https://github.com/HKUDS/nanobot/pull/4819) | 25 days | **fix(memory): WeakValueDictionary → plain dict for consolidation locks** — prevents lock loss under GC; marked `conflict` but critical for memory correctness | Open, conflict |
| [#4021](https://github.com/HKUDS/nanobot/pull/4021) | 65 days | **fix(codex): dedup reasoning items, retry on 400** — OpenAI Codex provider breaks on duplicate reasoning IDs; AI-assisted fix | Open, conflict |
| [#4291](https://github.com/HKUDS/nanobot/pull/4291) | 50 days | **feat(spawn): subagent model presets** — enables heterogeneous model routing; foundational for advanced agents | Open, P2 |
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | 35 days | **feat(heartbeat): isolated_session config** — resolves #1899 (shared session for heartbeat); conflict flag | Open, P2 |
| [#3106](https://github.com/HKUDS/nanobot/issues/3106) | 109 days | **Scheduled tasks fail with GPT** — recurring, model-specific, blocks automation workflows | Open, no PR |

**Maintainer action suggested**: Prioritize [#4819](https://github.com/HKUDS/nanobot/pull/4819) (memory safety), [#4021](https://github.com/HKUDS/nanobot/pull/4021) (provider reliability), and triage [#3106](https://github.com/HKUDS/nanobot/issues/3106) (user-facing automation blocker). The `conflict` labels on several PRs suggest merge-order dependencies — a rebase/merge planning session would unblock multiple features.

---

## Project Health Scorecard (2026-07-31)

| Dimension | Score | Trend | Notes |
|-----------|-------|-------|-------|
| **Development Velocity** | 🟢 High | ↑ | 48 PRs updated, 31 merged in 24h |
| **Bug Responsiveness** | 🟡 Medium | → | 3/6 today's bugs have fixes; 2 critical unaddressed |
| **Release Cadence** | 🟡 Medium | → | No release today; changes batching |
| **Community Engagement** | 🟡 Medium | → | Low visible discussion (0 comments/reactions in data) |
| **Technical Debt Paydown** | 🟢 High | ↑ | CI, memory locks, session storage, output bounding all addressed |
| **Platform Inclusivity** | 🟡 Medium | ↑ | Termux fix in PR; WhatsApp audio broken |

**Overall**: **Healthy, stabilizing, pre-release**. Core infrastructure hardening is underway; user-facing bugs on Telegram, WhatsApp, and tool leakage need rapid follow-through before next cut.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-31

## 1. Today's Overview

Hermes Agent continues its rapid development velocity with **50 active issues** and **50 active PRs** updated in the last 24 hours. The project released **v0.19.1 (v2026.7.30)** — a patch release consolidating over 1,000 PRs since v0.19.0 into a stable tagged build for Docker images, hosted deployments, and fresh installs. Despite high activity, only 2 PRs were merged/closed today, suggesting the team is in a heavy review/iteration phase rather than a landing phase. The issue backlog shows concentrated pain points around **Desktop app stability (Windows/macOS)**, **session state management**, **provider/config routing**, and **security boundaries** — all critical for a personal AI assistant handling user data and system access.

## 2. Releases

### v2026.7.30 — Hermes Agent v0.19.1
**Release Date:** July 30, 2026  
**Type:** Patch release (rollup)

> This tag rolls up the ~1,000+ PRs merged since v0.19.0 into a stable tagged release for downstream consumers (Docker images, hosted deployments, fresh installs).

**Key Implications:**
- No breaking changes documented (patch semantic versioning)
- Downstream consumers (Docker, hosted, fresh installs) should pull this tag
- Represents ~10 days of accumulated work since v2026.7.20 (v0.19.0)
- Full changelog truncated in release notes — see PR history for details

[Release Link](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.30)

---

## 3. Project Progress (Merged/Closed PRs Today)

Only **2 PRs merged/closed** in the last 24h (from 50 active). The majority of PRs remain in open/review state. Notable merged work likely includes the v0.19.1 release preparation and critical hotfixes. Open PRs with significant scope:

| PR | Title | Component | Status |
|----|-------|-----------|--------|
| [#71876](https://github.com/NousResearch/hermes-agent/pull/71876) | feat(gateway): add structured safe restart for agent requests | gateway, tools, cron, QQ bot | Open, high complexity |
| [#75037](https://github.com/NousResearch/hermes-agent/pull/75037) | fix(sec): patch vulnerable deps + add publication-age floors and npm script allow-list | config, nix, deps, desktop, CI | Open, security-critical |
| [#72428](https://github.com/NousResearch/hermes-agent/pull/72428) | fix(web): expose Docker-visible cache paths | browser, web, Docker | Open |
| [#72416](https://github.com/NousResearch/hermes-agent/pull/72416) | fix(auth): honor --no-browser for Anthropic OAuth | agent, CLI, auth | Open |
| [#75129](https://github.com/NousResearch/hermes-agent/pull/75129) | fix(model-picker): use config key instead of display-name slug for named custom providers | CLI, config | Open, fixes #75087 |
| [#75113](https://github.com/NousResearch/hermes-agent/pull/75113) | fix(process): verify Windows PTY descendant cleanup | tools, Windows | Open |
| [#75122](https://github.com/NousResearch/hermes-agent/pull/75122) | fix(agent): align iteration-budget default (90→500) and refund api_call_count | agent | Open, fixes #75097 |

---

## 4. Community Hot Topics (Most Active Issues/PRs)

### Top Issues by Comment Count

| Issue | Comments | 👍 | Component | Core Need |
|-------|----------|-----|-----------|-----------|
| [#31584](https://github.com/NousResearch/hermes-agent/issues/31584) | 10 | 0 | agent, memory | **Memory-context treated as authoritative user content** — security/confusion risk; users want it as background context only |
| [#74942](https://github.com/NousResearch/hermes-agent/issues/74942) | 5 | 2 | desktop, Windows, install-update | **Desktop updater false positive** — detects itself as "another instance" via PID check, blocking updates on Windows |
| [#73629](https://github.com/NousResearch/hermes-agent/issues/73629) | 3 | 0 | desktop, Windows, sessions | **Sessions list flicker/jitter on Win11** — sidebar rendering issue during scroll |
| [#74836](https://github.com/NousResearch/hermes-agent/issues/74836) | 3 | 1 | desktop, macOS, install-update | **macOS in-app update permanently broken** — stale `~/.hermes/hermes-setup` binary blocks updates; no version gate |
| [#67375](https://github.com/NousResearch/hermes-agent/issues/67375) | 3 | 0 | desktop, profiles, install-update | **Deep link to launch blank chats in installed profiles** — integration need for local tools |

**Underlying Themes:**
1. **Desktop app reliability** — Windows/macOS update mechanisms, UI rendering, session management are fragile
2. **Memory/context handling** — Users confused by how memory-context is injected; potential prompt injection surface
3. **Profile/config isolation** — Multiple issues around provider routing divergence, config caching, secret isolation

---

## 5. Bugs & Stability (Reported Today, Ranked by Severity)

### 🔴 Critical / Security

| Issue | Severity | Component | Fix PR |
|-------|----------|-----------|--------|
| [#53140](https://github.com/NousResearch/hermes-agent/issues/53140) | **HIGH** — Shell injection via `config.yaml` quick commands; no file ownership validation | CLI, config, security | None yet |
| [#62935](https://github.com/NousResearch/hermes-agent/issues/62935) | **HIGH** — `microsoft-teams-apps` import loads foreign `.env` into every gateway process, breaking profile secret isolation | gateway, auth, config, profiles | None yet |
| [#55274](https://github.com/NousResearch/hermes-agent/issues/55274) | **MEDIUM-HIGH** — BlueBubbles REST helpers buffer JSON responses without cap, enabling DoS via memory exhaustion | gateway, tools | None yet |

### 🟠 High / Stability

| Issue | Severity | Component | Fix PR |
|-------|----------|-----------|--------|
| [#74942](https://github.com/NousResearch/hermes-agent/issues/74942) | **HIGH** — Desktop updater blocks updates on Windows (false PID detection) | desktop, Windows, install-update | [#74904](https://github.com/NousResearch/hermes-agent/pull/74904) |
| [#74836](https://github.com/NousResearch/hermes-agent/issues/74836) | **HIGH** — macOS in-app update permanently broken by stale binary | desktop, macOS, install-update | None yet |
| [#54354](https://github.com/NousResearch/hermes-agent/issues/54354) | **HIGH** — Docker backend: first tool call runs on host (returns local paths) before image pull | tools, file, Docker | None yet |
| [#74570](https://github.com/NousResearch/hermes-agent/issues/74570) | **HIGH** — Pin/unpin silently reverted by `pullRemotePins` race | desktop, sessions | None yet |
| [#75128](https://github.com/NousResearch/hermes-agent/issues/75128) | **HIGH** — Desktop/CLI provider/model routing divergence after config changes | desktop, CLI, config | None yet |
| [#43186](https://github.com/NousResearch/hermes-agent/issues/43186) | **MEDIUM-HIGH** — Intermittent SIGABRT on exit under concurrent `hermes chat -q` subprocesses | CLI, memory | None yet |
| [#53362](https://github.com/NousResearch/hermes-agent/issues/53362) | **MEDIUM-HIGH** — TUI Python process pegs CPU at 99%, becomes unresponsive | TUI | None yet |

### 🟡 Medium / UX

| Issue | Component |
|-------|-----------|
| [#73629](https://github.com/NousResearch/hermes-agent/issues/73629) | Desktop sessions list flicker (Win11) |
| [#53813](https://github.com/NousResearch/hermes-agent/issues/53813) | Sidebar loses session↔project association after context compaction |
| [#50930](https://github.com/NousResearch/hermes-agent/issues/50930) | Untagged plain-text reasoning leaks into cron job output |
| [#52858](https://github.com/NousResearch/hermes-agent/issues/52858) | LSP surfaces old diagnostics after file edit |

---

## 6. Feature Requests & Roadmap Signals

### High-Interest Features (Community-Driven)

| Issue | Votes/Comments | Component | Likelihood for Next Version |
|-------|----------------|-----------|----------------------------|
| [#31584](https://github.com/NousResearch/hermes-agent/issues/31584) | 10 comments | agent, memory | **High** — Security/confusion risk; architectural clarification needed |
| [#39372](https://github.com/NousResearch/hermes-agent/issues/39372) | 3 comments | agent, CLI, cron, delegate, desktop, dashboard, sessions | **Medium** — Background agent runs polluting user session lists; hygiene issue |
| [#34823](https://github.com/NousResearch/hermes-agent/issues/34823) | 2 comments | agent, skills | **Medium** — Semantic/per-message skill retrieval (saves ~800 tokens/call) |
| [#67375](https://github.com/NousResearch/hermes-agent/issues/67375) | 3 comments | desktop, profiles, install-update | **Medium** — Deep link for profile-scoped chats; integration enabler |
| [#43028](https://github.com/NousResearch/hermes-agent/issues/43028) | 3 comments | CLI, Ollama | **Low-Medium** — Quiet mode for slow local providers (spinner timeout) |
| [#51398](https://github.com/NousResearch/hermes-agent/issues/51398) | 1 comment | desktop | **Low** — Show thinking/reasoning duration in UI |
| [#46467](https://github.com/NousResearch/hermes-agent/issues/46467) | 2 comments | TUI | **Low** — Config toggle for macOS copy-on-select |
| [#26785](https://github.com/NousResearch/hermes-agent/issues/26785) | 2 comments | CLI, plugins | **Low** — Plugin API for startup advisories |

### Predictions for v0.19.2 / v0.20.0:
1. **Memory-context rearchitecture** (#31584) — high security/usability impact
2. **Desktop update fixes** (Windows #74942, macOS #74836) — blocking users
3. **Provider/config routing unification** (#75128, #75087) — cross-platform consistency
4. **Session pin sync fix** (#74570) — data integrity
5. **Security hardening** (#53140, #62935, #55274) — likely in patch

---

## 7. User Feedback Summary

### Pain Points (Direct from Issues)

| Area | User Quote | Frequency |
|------|------------|-----------|
| **Desktop Updates** | *"Updater fails because it incorrectly believes another update instance is already running. In reality, the PID detected is the very process performing the check."* (#74942) | 2 critical issues (Win + macOS) |
| **Memory/Context Confusion** | *"The fact that it's [memory-context] emerging as a point of confusion for agents and a potential threat surface if used maliciously"* (#31584) | 10 comments, architectural concern |
| **Session Hygiene** | *"Anything that periodically invokes Hermes as a worker can fill the user's session list with synthetic/background runs"* (#39372) | Integration/users affected |
| **Config/Provider Drift** | *"Desktop keeps failing with 'Unknown provider' while CLI works correctly"* (#75128) | Cross-platform inconsistency |
| **Security Filtering Regression** | *"v0.16: variable name visible. v0.17: completely can't find it, thought Key lost"* (#52551) | UX regression in .env handling |
| **TUI Stability** | *"Python process pegs CPU at 99% and becomes completely unresponsive to any user input"* (#53362) | Blocks terminal users |

### Positive Signals
- Active community filing detailed repros (videos, logs, config snippets)
- Users debugging root causes themselves (e.g., #74836 identified `resolveUpdaterBinary()` flaw)
- Feature requests show deep integration usage (profiles, deep links, cron, ACP)

---

## 8. Backlog Watch (Long-Unanswered, High-Impact)

| Issue | Age | Component | Why It Matters |
|-------|-----|-----------|----------------|
| [#31584](https://github.com/NousResearch/hermes-agent/issues/31584) | **68 days** (2026-05-24) | agent, memory | **Architectural security/usability decision** — memory-context injection model needs explicit design; 10 comments, no maintainer verdict |
| [#39372](https://github.com/NousResearch/hermes-agent/issues/39372) | **57 days** (2026-06-04) | agent, desktop, sessions | **Session store hygiene** — affects all integrations/cron; needs "background session" classification |
| [#53140](https://github.com/NousResearch/hermes-agent/issues/53140) | **35 days** (2026-06-26) | CLI, config, security | **HIGH severity shell injection** — `shell=True` + no file ownership check on `config.yaml`; exploitable via symlink/write |
| [#62935](https://github.com/NousResearch/hermes-agent/issues/62935) | **19 days** (2026-07-12) | gateway, auth, profiles | **Profile secret isolation broken** — Teams plugin imports load foreign `.env` into all gateway processes |
| [#54354](https://github.com/NousResearch/hermes-agent/issues/54354) | **33 days** (2026-06-28) | tools, Docker | **Docker backend broken on cold start** — first tool call runs on host, leaks local paths |
| [#43186](https://github.com/NousResearch/hermes-agent/issues/43186) | **51 days** (2026-06-10) | CLI, memory | **SIGABRT on concurrent chat -q** — core dumps on exit after successful runs; shared `HERMES_HOME` concurrency bug |
| [#36295](https://github.com/NousResearch/hermes-agent/issues/36295) | **60 days** (2026-06-01) | agent, test | **Coverage gap: `background_review.py` at 26.85%** — below 70% threshold; 27+ missing lines |

---

## Project Health Assessment

| Dimension | Status | Notes |
|-----------|--------|-------|
| **Release Cadence** | ✅ Healthy | 10-day patch cycle (v0.19.0 → v0.19.1) |
| **Issue Triage** | ⚠️ Backlogged | 50 active issues, several critical/security >2 weeks old |
| **PR Throughput** | ⚠️ Low merge rate | 2/50 merged today; review bottleneck |
| **Security Posture** | 🔴 At Risk | 3 HIGH-severity vulns open >2 weeks; supply-chain PR (#75037

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-31

## 1. Today's Overview
PicoClaw shows **high maintenance velocity** with 24 total items updated in the last 24 hours (7 issues, 17 PRs). The project is in active development with a focus on dependency updates, provider integrations, and channel enhancements. No new release was cut today. The ratio of open to closed PRs (12:5) indicates ongoing feature work outpacing completion, while 3 stale issues were closed, suggesting backlog grooming. Community engagement remains modest (low comment/reaction counts), but several substantive technical discussions are underway.

## 2. Releases
**No new releases today.** The latest version remains unversioned in this dataset. Maintainers appear to be accumulating changes for a future release cycle.

## 3. Project Progress — Merged/Closed PRs (5)
| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#3163](https://github.com/sipeed/picoclaw/pull/3163) | `feat(bedrock): leverage Converse prompt caching via cache points` | Feature | **Significant cost/latency reduction** for AWS Bedrock users (~90% read cache discount, ~10% write cost). Implements explicit cache points in system/tools/messages per AWS spec. |
| [#3262](https://github.com/sipeed/picoclaw/pull/3262) | `build(deps): bump actions/setup-go from 6 to 7` | Maintenance | CI modernization; Go toolchain updates. |
| [#3263](https://github.com/sipeed/picoclaw/pull/3263) | `build(deps): bump actions/setup-node from 6 to 7` | Maintenance | Frontend CI update; Node.js 20+ baseline. |
| [#3288](https://github.com/sipeed/picoclaw/pull/3288) | `build(deps): bump aws-sdk-go-v2/service/bedrockruntime 1.53.3 → 1.56.0` | Dependency | Enables Bedrock Converse API improvements (superseded by #3305). |
| [#3290](https://github.com/sipeed/picoclaw/pull/3290) | `build(deps): bump aws-sdk-go-v2/config 1.32.25 → 1.32.31` | Dependency | AWS config updates (superseded by #3306). |

**Net progress**: Major Bedrock optimization landed; CI toolchains modernized; AWS SDKs refreshed (two PRs already superseded by newer dependabot runs).

## 4. Community Hot Topics — Most Active Discussions
| Item | Comments | Signals |
|------|----------|---------|
| [#2546](https://github.com/sipeed/picoclaw/issues/2546) **OAuth 2.1 + PKCE for MCP servers** (CLOSED) | 6 | **High demand for zero-config MCP onboarding** — users want Claude.ai-style "paste URL, works" UX for cloud VMs. Closed but duplicated by #3302, indicating persistent need. |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) **Long IRC message handling** (OPEN) | 2 | **Protocol compliance gap** — IRCv3 message splitting breaks PicoClaw's message assembly. Affects reliability on legacy chat networks. |
| [#3258](https://github.com/sipeed/picoclaw/issues/3258) **Process Hook `before_tool` deserialization bug** (CLOSED) | 2 | **Hook pipeline fragility** — `decision` field dropped, args misparsed. Root cause: JSON deserialization mismatch. Fix likely in hook execution path. |
| [#3308](https://github.com/sipeed/picoclaw/issues/3308) **Concurrency hazards, goroutine leaks, memory/speed in SeaHorse/Channel Manager/Hooks** (OPEN) | 0 | **Architectural audit** — comprehensive review flagging systemic issues in core components. High technical depth, zero discussion yet — may need maintainer triage. |

**Underlying needs**: (1) **Reduced friction for MCP adoption** (OAuth/dashboard), (2) **Protocol robustness** (IRC, hook serialization), (3) **Core runtime stability** (concurrency/leaks).

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | [#3308](https://github.com/sipeed/picoclaw/issues/3308) Concurrency hazards, goroutine leaks, memory/speed regressions in SeaHorse, Channel Manager, Hooks | OPEN | No — requires architectural fixes |
| **High** | [#3258](https://github.com/sipeed/picoclaw/issues/3258) Hook `before_tool` decision field discarded, args misparsed (deserialization defect) | CLOSED | Likely fixed in hook pipeline; no linked PR |
| **Medium** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) IRC long-message splitting breaks message cohesion | OPEN | No |
| **Low** | [#3283](https://github.com/sipeed/picoclaw/pull/3283) DingTalk inbound image support (fix) | OPEN (PR) | Yes — PR adds media handling, token caching, graceful fallback |

**Note**: #3308 is the most critical open item — a systemic review of core runtime components. No fix PR exists yet; maintainers should prioritize triage.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **OAuth 2.1 + PKCE for MCP servers (dashboard "Add by URL")** | [#2546](https://github.com/sipeed/picoclaw/issues/2546) (closed), [#3302](https://github.com/sipeed/picoclaw/issues/3302) (open duplicate) | **High** — duplicated, clear UX spec, aligns with "non-technical user" goal |
| **Session list/switch for Telegram & chat channels** | [#3307](https://github.com/sipeed/picoclaw/issues/3307) | **Medium-High** — parity with Web UI session management; low implementation complexity |
| **DashScope TTS + WeChat audio sending** | [#3270](https://github.com/sipeed/picoclaw/pull/3270) (open PR) | **High** — PR ready, adds Chinese TTS provider + WeChat audio file support |
| **Configurable default model fallback chain** | [#3200](https://github.com/sipeed/picoclaw/pull/3200) (open PR) | **High** — PR open since Jul 1, persists fallback chains in UI/backend |
| **Stateless/no-history gateway sessions** | [#3257](https://github.com/sipeed/picoclaw/issues/3257) (closed) | **Low** — closed stale; may resurface if gateway usage grows |
| **Bedrock prompt caching (Converse API)** | [#3163](https://github.com/sipeed/picoclaw/pull/3163) (merged) | **Done** — landed today |

**Predicted next-version highlights**: DashScope TTS/WeChat audio, model fallback chains, MCP OAuth dashboard flow (if #3302 advances), session management for chat channels.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | User Segment |
|------------|----------|--------------|
| **"Add MCP server without CLI/Node.js/shell"** | #2546, #3302 — "same UX as Claude.ai", "works on cloud VMs with public URLs" | Non-technical / cloud-hosted users |
| **Hook pipeline unreliable for tool interception** | #3258 — `decision` field lost, args corrupted; blocks custom pre-tool logic | Advanced users / plugin authors |
| **No session control from chat apps (Telegram, etc.)** | #3307 — Web UI has full session mgmt; chat channels have none | Mobile / chat-first users |
| **IRC message fragmentation breaks context** | #3287 — 512-byte limit splits long messages; PicoClaw treats as separate | IRC power users / bridge operators |
| **Core runtime leaks under load** | #3308 — goroutine leaks, memory growth in SeaHorse/Channel Manager | High-volume / production deployments |

**Satisfaction signals**: Users value PicoClaw's low-resource footprint ("<$10 hardware, <10MB RAM, sub-second boot" — #3308) but hit sharp edges in extensibility (hooks, MCP, sessions) and protocol edge cases.

## 8. Backlog Watch — Stale/Unanswered Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) `refactor(deltachat): cleanup -200LOC` | 28 days (Jul 3) | **Large refactor** — drops legacy, hardcoded relays, password auth; modernizes DeltaChat channel. Stale, no review. |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) `feat(models): configurable default fallback chain` | 30 days (Jul 1) | **User-facing feature** — UI + backend persistence for model fallbacks. Ready but unmerged. |
| [#3163](https://github.com/sipeed/picoclaw/pull/3163) `feat(bedrock): prompt caching` | **Merged today** | Was 38 days stale — now landed. Good precedent for reviewing old PRs. |
| [#3279](https://github.com/sipeed/picoclaw/pull/3279) `fix(seahorse): prevent tool-call format leakage into LLM summaries` | 10 days (Jul 21) | **Correctness fix** — tool-call format leaking into user-visible summaries. Related to #3308 concerns. |
| [#2546](https://github.com/sipeed/picoclaw/issues/2546) OAuth for MCP (closed) | 106 days (Apr 16) | **Closed but duplicated** — #3302 reopened same ask. Indicates unmet need; consider reopening or linking to roadmap. |

**Maintainer action items**: Review #3222 (DeltaChat refactor), #3200 (model fallback chain), #3279 (seahorse leakage fix). Triage #3308 (concurrency/leaks) urgently. Decide on MCP OAuth dashboard (#3302) — duplicate of closed #2546 suggests product decision needed.

---

**Project Health Indicators**  
✅ **Active development** (24 updates/24h)  
✅ **Dependency hygiene** (8 dependabot PRs in 24h)  
✅ **Provider/channel expansion** (Bedrock, DashScope, DingTalk, DeltaChat)  
⚠️ **Core stability debt** (#3308 unreviewed)  
⚠️ **Feature PR backlog** (12 open, several >2 weeks)  
⚠️ **Low community discussion volume** — may indicate high barrier to contribution or silent users

**Next digest recommended**: 2026-08-07 (weekly) or on next release cut.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-31

## 1. Today's Overview
NanoClaw shows **high maintenance velocity** with 17 PRs and 2 issues updated in the last 24 hours. The project is in active stabilization mode: 5 PRs were merged/closed today, focusing on container image hardening, CLI tooling hygiene, and skill-update safeguards. Two critical bugs surfaced — one breaking inbound message reactions/edits on Slack, another causing provider install gates to fail due to registry drift. No new release was cut; the team appears to be batching fixes for a near-term hardened image push.

## 2. Releases
**No new releases today.** The latest merged PR [#3160](https://github.com/nanocoai/nanoclaw/pull/3160) repins the agent image to `hardened-2026-07-30` (611 MB, 8 layers vs. previous 781 MB, 18 layers), reducing largest-layer size from 39% → 27% — a meaningful pull-time improvement for container runners.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3160](https://github.com/nanocoai/nanoclaw/pull/3160) | **Image hardening** | Repin agent image to `hardened-2026-07-30`; 22% size reduction, 55% fewer layers | Faster pulls, smaller attack surface |
| [#3159](https://github.com/nanocoai/nanoclaw/pull/3159) | **CLI hygiene** | Move Vercel CLI from baked-in to opt-in via `/add-vercel` skill | Removes default credential surface; saves ~bytes/image |
| [#3122](https://github.com/nanocoai/nanoclaw/pull/3122) | **OpenCode compat** | Fix main-branch compatibility, custom-endpoint transport, memory parity | Unblocks OpenCode provider on current main |
| [#2682](https://github.com/nanocoai/nanoclaw/pull/2682) | **Skill-update guard** | Skip v1-only skill branches during `update-skills` | Prevents broken upgrades; surfaces skipped list |
| [#3152](https://github.com/nanocoai/nanoclaw/pull/3152) | **Docs** | Link `REQUIREMENTS.md` & `SECURITY.md` from README Architecture section | Improves discoverability of governance docs |

## 4. Community Hot Topics
| Item | Activity | Signal |
|------|----------|--------|
| [Issue #3153](https://github.com/nanocoai/nanoclaw/issues/3153) | 1 comment, 0 👍 | **Critical Slack regression**: `add_reaction`/`edit_message` fail on inbound messages because agent-group suffix isn't stripped from platform message ID. Every attempt returns `message_not_found` → 3 retries → `failed`. Blocks basic bot interactions. |
| [Issue #3155](https://github.com/nanocoai/nanoclaw/issues/3155) | 0 comments, 0 👍 | **Registry drift**: Provider payloads fail their own install gates (`/add-codex` fails at step-4 typecheck). Indicates `providers` branch and `main` have diverged; skill application is brittle. |
| [PR #3119](https://github.com/nanocoai/nanoclaw/pull/3119) | Updated 2026-07-30 | **Container-runner stability**: Reconciles orphan containers to prevent duplicate per-group spawns (observed 3 concurrent containers for one group over 5d uptime). High operational value. |

**Underlying need**: Operators running long-lived agent groups are hitting **state drift** (orphan containers, registry skew) and **platform API contract breaks** (Slack message ID handling). The project needs stronger reconciliation loops and platform-adapter test coverage.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue/PR | Status | Fix PR? |
|----------|----------|--------|---------|
| **P0 — Data loss / function broken** | [#3153](https://github.com/nanocoai/nanoclaw/issues/3153): `add_reaction`/`edit_message` always fail on inbound Slack messages | Open | No fix PR yet |
| **P0 — Install broken** | [#3155](https://github.com/nanocoai/nanoclaw/issues/3155): Provider payloads fail own install gates (registry drift) | Open | No fix PR yet |
| **P1 — Resource leak** | [#3119](https://github.com/nanocoai/nanoclaw/pull/3119): Duplicate container spawns per agent group (orphan reconciliation) | Open PR | **Yes — #3119** |
| **P1 — Symlink hazard** | [#3157](https://github.com/nanocoai/nanoclaw/pull/3157): `materializeTemplateSkills` follows dangling symlinks to container paths | Open PR | **Yes — #3157** |
| **P2 — MCP visibility** | [#3124](https://github.com/nanocoai/nanoclaw/pull/3124): Unavailable MCP servers not reported | Open PR | **Yes — #3124** |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Scheduled-task time context** | [PR #3154](https://github.com/nanocoai/nanoclaw/pull/3154): Pass `current_time` (with weekday) to scheduled tasks | High — merged-ready, core-team tagged |
| **Structured attachment parts** | [PR #3156](https://github.com/nanocoai/nanoclaw/pull/3156): Carry channel attachments to providers as structured parts | High — core-team, follows guidelines |
| **Sigstore-signed image verification** | [PR #3158](https://github.com/nanocoai/nanoclaw/pull/3158): Pin publisher identity, check attestations per arch | Medium — unblocks auto-merge gate |
| **Voice transcription (local/whisper)** | [PR #2317](https://github.com/nanocoai/nanoclaw/pull/2317): `/add-voice-transcription-free-whisper` skill (openai-whisper + whisper.cpp) | Medium — long-open, backend detection built |
| **GitHub polling mode (no webhook)** | [PR #2301](https://github.com/nanocoai/nanoclaw/pull/2301): Mode B polls REST API every 30s for NAT/firewall operators | Low — stale (2+ months), but addresses real constraint |

## 7. User Feedback Summary
- **Pain**: Slack bot operators cannot react to or edit inbound messages — core interaction broken ([#3153](https://github.com/nanocoai/nanoclaw/issues/3153)).
- **Pain**: Skill installation is fragile; registry branches drift from main, causing self-failing install gates ([#3155](https://github.com/nanocoai/nanoclaw/issues/3155)).
- **Pain**: Long-running hosts accumulate orphan containers (3+ per group), wasting resources ([#3119](https://github.com/nanocoai/nanoclaw/pull/3119)).
- **Positive**: Image hardening delivering measurable wins (22% smaller, 55% fewer layers) — operators will notice faster deploys.
- **Ask**: Explicit current-time context for scheduled tasks (weekday-aware) — enables time-based logic ([#3154](https://github.com/nanocoai/nanoclaw/pull/3154)).

## 8. Backlog Watch (Stale but Important)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [PR #2301](https://github.com/nanocoai/nanoclaw/pull/2301) | 86 days | **GitHub polling mode** — only path for operators behind NAT/firewall; embedded adapter, no inbound port. Security warning added for webhook mode. |
| [PR #2317](https://github.com/nanocoai/nanoclaw/pull/2317) | 85 days | **Local voice transcription** — zero-cost Whisper (GPU/CPU backends), pre-flight detection. High user demand for privacy/offline. |
| [PR #2634](https://github.com/nanocoai/nanoclaw/pull/2634) | 64 days | **AWS credential proxy** (`paws4claws`) — mount-from-outside pattern for secure credential injection. Enterprise-relevant. |
| [PR #2537](https://github.com/nanocoai/nanoclaw/pull/2537) | 74 days | **Pre-commit hooks** (prettier, eslint, typecheck, vitest) — contributor DX, prevents CI failures. Low risk, high hygiene value. |
| [PR #2685](https://github.com/nanocoai/nanoclaw/pull/2685) | 57 days | **Signal docs update** — group typing, outbound reactions, quote-reply. Reflects shipped features; docs lag undermines discoverability. |

---

**Health Score**: 🟡 **Caution** — High velocity on hardening/ops, but two P0 regressions (Slack reactions, provider installs) with no fix PRs yet. Backlog contains high-value features stalled >2 months. Recommended: triage #3153/#3155 immediately, merge #3119/#3154/#3156 this week, and schedule backlog review.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-31

## 1. Today's Overview
LobsterAI demonstrated high development velocity in the last 24 hours with **10 PRs updated** (8 merged/closed, 2 stale open) and **zero issue activity**, indicating a maintenance and feature-polishing phase rather than active bug triage. A new point release **2026.7.29** shipped yesterday, delivering cowork side-chat enhancements, Kimi K3 model support, and authentication hardening. The merged PRs cluster around **cowork side-chat UX**, **enterprise auth isolation**, **sidebar/banner carousel**, **Windows process cleanup**, and **email attachment security** — signaling a focus on collaboration features, enterprise readiness, and platform stability.

## 2. Releases
### LobsterAI 2026.7.29 (2026-07-29)
**Key Changes**
- **feat(cowork)**: Selected text tags added to side chat ([#2405](https://github.com/netease-youdao/LobsterAI/pull/2405))
- **feat**: Kimi K3 model support added ([#2381](https://github.com/netease-youdao/LobsterAI/pull/2381))
- **fix(auth)**: Session lifecycle and token refresh hardened (PR reference incomplete in data)

**Breaking Changes / Migration Notes**: None explicitly documented. The auth hardening may affect existing sessions — users should expect re-login after upgrade.

---

## 3. Project Progress (Merged/Closed PRs — 2026-07-30)

| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2412](https://github.com/netease-youdao/LobsterAI/pull/2412) | platform: windows | Re-issue `Stop-Process` on every poll round; log survivor details on timeout | Fixes orphaned process leakage on Windows shutdown |
| [#2411](https://github.com/netease-youdao/LobsterAI/pull/2411) | renderer | Unified sidebar carousel for daily check-in + banner carousel; hides nav for single item | Improves engagement surface; cleaner UI |
| [#2410](https://github.com/netease-youdao/LobsterAI/pull/2410) | renderer | Sites page layout aligned with Skills/MCP management views | Visual consistency across settings pages |
| [#2389](https://github.com/netease-youdao/LobsterAI/pull/2389) | docs, skills | Sanitize attachment filenames; enforce download directory boundaries; add cross-platform tests | **Security fix** — prevents path traversal in email skill |
| [#2397](https://github.com/netease-youdao/LobsterAI/pull/2397) | renderer, docs, main, openclaw, cowork | Isolated `/btw` side chat panel: drag, 8-dir resize, follow-up, isolated history, OpenClaw utility stream | Major cowork UX upgrade — contextual side conversations |
| [#2406](https://github.com/netease-youdao/LobsterAI/pull/2406) | renderer, docs, main, cowork | Accumulate selected text while panel open; remove product-level question length limit; retain safety checks | UX polish for side chat input handling |
| [#2409](https://github.com/netease-youdao/LobsterAI/pull/2409) | renderer, docs, main, openclaw, cowork, artifacts | Account-scoped isolation for auth, media, queued follow-up, sharing, deployment; enterprise entitlements; diagnostics | **Enterprise readiness** — prevents cross-account state leakage |
| [#2408](https://github.com/netease-youdao/LobsterAI/pull/2408) | renderer, docs, main | Native daily check-in in sidebar & account menu; token-safe for signed-in users; login flow for signed-out | Retention feature with secure token handling |

**Velocity Signal**: 8 PRs merged in a single day across 5 contributors — high throughput, multi-area coordination.

---

## 4. Community Hot Topics
No new issues or comments in the last 24h. The two open PRs are **stale** (created 2026-04-01, updated 2026-07-30) with **zero reactions/comments**:

| PR | Title | Author | Stale Since | Underlying Need |
|----|-------|--------|-------------|-----------------|
| [#1228](https://github.com/netease-youdao/LobsterAI/pull/1228) | feat(cowork): Add "Mark as Unread" for sessions | fhraiwxr | ~4 months | User workflow: triage important conversations across multiple sessions |
| [#1231](https://github.com/netease-youdao/LobsterAI/pull/1231) | fix(agent): AgentCreateModal Escape key + form reset on reopen | choyuenga | ~4 months | UX consistency: align modal behavior with rest of app (McpServerFormModal, CoworkSearchModal) |

**Analysis**: Both PRs address **core UX gaps** (session triage, modal consistency) but have languished without maintainer review. The "Mark as Unread" feature is a standard collaboration affordance; the Escape key fix is a low-risk consistency patch. Their stagnation suggests either **review bandwidth constraints** or **prioritization below current roadmap** (cowork/enterprise).

---

## 5. Bugs & Stability
No new bug reports (issues) in the last 24h. However, merged PRs reveal **recently fixed regressions/risks**:

| Severity | Issue | Fix PR | Status |
|----------|-------|--------|--------|
| **High (Security)** | Email attachment path traversal | [#2389](https://github.com/netease-youdao/LobsterAI/pull/2389) | ✅ Merged, tests added |
| **Medium (Stability)** | Windows orphan processes on shutdown | [#2412](https://github.com/netease-youdao/LobsterAI/pull/2412) | ✅ Merged, logging added |
| **Medium (Data Integrity)** | Cross-account async state leakage (auth, media, deployments) | [#2409](https://github.com/netease-youdao/LobsterAI/pull/2409) | ✅ Merged, enterprise entitlements enforced |
| **Low (UX)** | Side chat input length limit; selected text not accumulated | [#2406](https://github.com/netease-youdao/LobsterAI/pull/2406) | ✅ Merged |

**Stability Assessment**: Proactive hardening (auth, process cleanup, account isolation) + security patch = **improving stability posture**.

---

## 6. Feature Requests & Roadmap Signals
### From Merged PRs (Committed Direction)
1. **Cowork Collaboration Depth** — Side chat (`/btw`), selected text tagging, isolated history → **contextual micro-collaboration** is a pillar.
2. **Enterprise Multi-Account Isolation** — Account-scoped state, entitlements, rollback → **B2B/enterprise deployment** is active.
3. **Gamified Retention** — Native daily check-in, banner carousel, credit rewards → **User engagement loop** being built in-app.
4. **Model Expansion** — Kimi K3 support → **Multi-provider model agility** continues.

### From Stale PRs (Deferred Signals)
- **Session Triage** ("Mark as Unread") — Standard for multi-session management tool; likely in backlog for cowork v2.
- **Modal UX Consistency** — Low-effort, high-polish; may ship in a "UI consistency" sweep.

**Prediction for Next Release (2026.8.x)**:
- Cowork: Threaded side-chat replies, @mentions in `/btw`
- Enterprise: SSO/SAML hooks (hinted by entitlements work)
- Sidebar: Check-in streak visualization, banner A/B test framework
- Model: More domestic LLM integrations (Zhipu, DeepSeek, etc.)

---

## 7. User Feedback Summary
**No direct user feedback** (issues, discussions, reactions) in the last 24h. Indirect signals from PR scope:

| Pain Point Addressed | Evidence |
|----------------------|----------|
| **Context switching friction** | Side chat (`/btw`) lets users query on selected text without leaving main conversation ([#2397](https://github.com/netease-youdao/LobsterAI/pull/2397), [#2406](https://github.com/netease-youdao/LobsterAI/pull/2406)) |
| **Account switching corruption** | Enterprise isolation PR explicitly prevents "stale async responses from affecting newly signed-in account" ([#2409](https://github.com/netease-youdao/LobsterAI/pull/2409)) |
| **Windows background process leaks** | NSIS fix re-kills survivors on every poll ([#2412](https://github.com/netease-youdao/LobsterAI/pull/2412)) |
| **Security anxiety (attachments)** | Path traversal fix + cross-platform tests ([#2389](https://github.com/netease-youdao/LobsterAI/pull/2389)) |
| **Engagement transparency** | Native check-in + banner carousel surfaces rewards without token exposure ([#2408](https://github.com/netease-youdao/LobsterAI/pull/2408), [#2411](https://github.com/netease-youdao/LobsterAI/pull/2411)) |

**Satisfaction Proxy**: High merge rate on UX/security/enterprise PRs → team is **responsive to inferred enterprise/collab needs**, but **community feedback loop appears quiet** (0 issues, 0 comments on stale PRs).

---

## 8. Backlog Watch — Stale Items Needing Maintainer Attention

| Item | Type | Age | Risk if Ignored | Suggested Action |
|------|------|-----|-----------------|------------------|
| [#1228](https://github.com/netease-youdao/LobsterAI/pull/1228) | PR (feat) | 121 days | Missing basic session mgmt feature; users lose track of important threads | **Review & merge** — low risk, high UX value; add to cowork milestone |
| [#1231](https://github.com/netease-youdao/LobsterAI/pull/1231) | PR (fix) | 121 days | Inconsistent modal UX frustrates power users; form residue causes errors | **Review & merge** — trivial fix, aligns with existing patterns |
| *No open issues* | — | — | Silent user base may indicate **high barrier to filing issues** or **discord/other channels used** | **Audit feedback channels**; consider GitHub Discussion enablement or in-app feedback widget |

**Health Metric**: 2 stale PRs > 4 months with zero maintainer interaction = **review backlog risk**. Recommend dedicating 1 sprint slot/month to "stale PR triage."

---

## Appendix: Links Index
- Release: [2026.7.29](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.29)
- Merged PRs: [#2412](https://github.com/netease-youdao/LobsterAI/pull/2412) • [#2411](https://github.com/netease-youdao/LobsterAI/pull/2411) • [#2410](https://github.com/netease-youdao/LobsterAI/pull/2410) • [#2389](https://github.com/netease-youdao/LobsterAI/pull/2389) • [#2397](https://github.com/netease-youdao/LobsterAI/pull/2397) • [#2406](https://github.com/netease-youdao/LobsterAI/pull/2406) • [#2409](https://github.com/netease-youdao/LobsterAI/pull/2409) • [#2408](https://github.com/netease-youdao/LobsterAI/pull/2408)
- Stale PRs: [#1228](https://github.com/netease-youdao/LobsterAI/pull/1228) • [#1231](https://github.com/netease-youdao/LobsterAI/pull/1231)

--- 

**Digest Generated**: 2026-07-31 00:00 UTC | **Data Window**: 2026-07-30 00:00 – 2026-07-31 00:00 UTC | **Source**: GitHub REST API (netease-youdao/LobsterAI)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-31

## 1. Today's Overview
Moltis shows steady development velocity with **2 new issues** and **4 active PRs** updated in the last 24 hours, including one merged PR (#1166). The project is actively hardening security (privileged tool gating, vault auth fix) while expanding observability (Langfuse/OTLP instrumentation) and UX (Slack Block Kit, web Markdown export). No releases were cut today, suggesting the team is accumulating changes for a future batch release. Community engagement remains low on new items (0 comments/reactions), but maintainers are responsive — PRs from core contributors (penso, Jonesxq) see rapid iteration.

## 2. Releases
**No new releases published today.** The latest version in the repository remains unchanged. Watch for a release bundling the merged Slack improvements (#1166) and pending security/observability PRs.

## 3. Project Progress
| PR | Status | Summary |
|----|--------|---------|
| [#1166](https://github.com/moltis-org/moltis/pull/1166) | **MERGED** | **Slack: per-message ack reactions, phases, reconnect supervision, Block Kit** — Hardens the acknowledgment lifecycle under queueing, cancellation, retries, and callback bursts; adds phased progress reactions and Block Kit rendering. |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | Open | **Instrumentation & feedback collection** — Backend-neutral agent instrumentation, Langfuse v4 export, OTLP backends, end-user reaction feedback; captures completion-only turns, provider failover attribution, cache-aware token usage, reasoning, tool calls. |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | Open | **Security: gate `/sh` and privileged tools behind per-account operators list** — Separates channel access from privilege; enforces boundary across commands, callbacks, queue replay, chat execution, external triggers. |
| [#1176](https://github.com/moltis-org/moltis/pull/1176) | Open | **Web: Markdown copy & session export** — Preserves original Markdown when copying assistant replies; adds “Save as Markdown” exporting full paginated history with user/assistant text and image references. |

**Key advancement:** Slack channel reliability and UX significantly improved (#1166 merged). Security hardening for privileged operations (#1170) and observability foundation (#1174) are in review.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#1178](https://github.com/moltis-org/moltis/issues/1178) — *Feature: Telegram inline buttons & structured callbacks* | 0 comments, 0 👍 (new) | **Rich interactive agent UX on Telegram** — Users want agents to drive structured flows (menus, confirmations, selections) via inline keyboards and receive typed callback data, moving beyond plain text. |
| [#1177](https://github.com/moltis-org/moltis/issues/1177) — *Bug: Vault unlock/recovery endpoints missing auth (CWE-306)* | 0 comments, 0 👍 (new) | **Critical security gap** — Unauthenticated vault unlock/recovery exposes secrets; likely blocks production deployments until fixed. |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) — *Instrumentation & feedback* | Updated today, 0 comments | **Observability & eval readiness** — Team investing in LLM-as-a-judge, cost tracking, and user feedback loops; signals preparation for systematic agent evaluation. |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) — *Privileged tool gating* | Updated today, 0 comments | **Operational safety** — Separating “who can talk to the bot” from “who can run shell/host tools” is a prerequisite for multi-tenant or shared-instance deployments. |

**Insight:** Security (#1177, #1170) and interactive agent capabilities (#1178) dominate new discussion. The instrumentation PR (#1174) reveals a strategic push toward production-grade observability.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#1177](https://github.com/moltis-org/moltis/issues/1177) — Vault unlock/recovery endpoints missing authentication (CWE-306) | Open, reported today | None yet |
| **High** | Privileged tools (`/sh`, host tools) accessible to any allowed channel sender | Addressed in [#1170](https://github.com/moltis-org/moltis/pull/1170) (open) | **PR #1170** adds per-account `operators` list enforcement |
| **Medium** | Slack acknowledgment lifecycle unsafe under retries/cancellation/callback bursts | **Fixed** in [#1166](https://github.com/moltis-org/moltis/pull/1166) (merged) | **PR #1166** — merged today |

**Note:** The vault auth bug (#1177) is the most severe open issue — unauthenticated secret recovery is a direct breach vector. Prioritize a patch release once a fix lands.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Telegram inline buttons + structured callbacks** | [#1178](https://github.com/moltis-org/moltis/issues/1178) | High — aligns with Slack Block Kit investment (#1166); interactive UX parity across channels |
| **Per-message Markdown copy & full-session Markdown export** | [#1176](https://github.com/moltis-org/moltis/pull/1176) | High — PR open, UX polish, low risk |
| **Agent instrumentation (Langfuse/OTLP) + user feedback collection** | [#1174](https://github.com/moltis-org/moltis/pull/1174) | High — foundational for eval/observability; large PR but strategic |
| **Explicit operator RBAC for privileged tools** | [#1170](https://github.com/moltis-org/moltis/pull/1170) | High — security hardening, near-complete |
| **Slack Block Kit, phased reactions, reconnect supervision** | [#1166](https://github.com/moltis-org/moltis/pull/1166) | **Delivered** — merged today |

**Prediction:** Next release will bundle Slack Block Kit (#1166), operator RBAC (#1170), web Markdown export (#1176), and likely the vault auth fix (once PR exists). Instrumentation (#1174) may follow in a subsequent minor release due to scope.

## 7. User Feedback Summary
- **Pain points:** 
  - **Security anxiety** — Vault endpoints exposed without auth (#1177) makes production deployment risky.
  - **Privilege escalation risk** — Channel allowlist ≠ operator rights; users could trigger host tools unintentionally (#1170 context).
  - **Slack UX friction** — No typing indicator; users lacked progress visibility until ack reactions (#1166).
- **Use cases emerging:**
  - **Structured Telegram workflows** — Agents driving menus/forms via inline keyboards (#1178).
  - **Session portability** — Exporting full chat history as Markdown for documentation/archival (#1176).
  - **Agent observability** — Teams instrumenting for cost, latency, failover, and user satisfaction tracking (#1174).
- **Satisfaction signals:** 
  - Core contributors (penso, Jonesxq) shipping polished features rapidly.
  - Slack reliability improvements (#1166) address a long-standing gap (no typing indicator).
  - Low community noise on new issues suggests either early-stage adoption or quiet production use.

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1177](https://github.com/moltis-org/moltis/issues/1177) — Vault unlock/recovery missing auth | **0 days** (filed today) | **Critical security regression risk**; blocks hardened deployments. Needs immediate fix PR and backport consideration. |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) — Instrumentation & feedback | 4 days (created 2026-07-27) | Large, foundational PR; risks stalling without dedicated review. Enable “Langfuse v4” and OTLP parity — key for enterprise adopters. |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) — Operator RBAC for privileged tools | 5 days (created 2026-07-26) | Security hardening; should merge before/with vault fix. Review for edge cases: queue replay, external triggers, callback paths. |
| [#1178](https://github.com/moltis-org/moltis/issues/1178) — Telegram inline buttons | **0 days** | High-value interactive UX; design discussion needed on callback schema, agent SDK changes, and cross-channel parity. |

**Maintainer action items:** 
1. **Triage #1177 immediately** — assign security label, draft fix, consider emergency patch.
2. **Schedule review for #1174** — split if needed (core instrumentation vs. Langfuse/OTLP backends vs. feedback UI).
3. **Merge #1170 and #1176** — both appear low-risk, high-value; unblock UX and security improvements.
4. **Open design discussion on #1178** — define callback data contract, agent-facing API, and Telegram-specific limits (button count, payload size).

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-31

---

## 1. Today's Overview

CoPaw shows **very high development velocity** with 72 total items updated in the last 24 hours (24 issues, 48 PRs). The project is in active stabilization mode post-v2.0 release: 25 PRs were merged/closed today, primarily addressing regressions, CI failures, and MCP/desktop integration bugs. No new release was cut, but the merge rate suggests a v2.0.2 patch is imminent. Community engagement is strong with multiple first-time contributors landing fixes. Critical pain points center on **v2.0 performance regression (~2s fixed overhead)**, **MCP session resilience**, and **chat session data integrity**.

---

## 2. Releases

**No new releases published today.**  
Latest version remains **v2.0.1** (implied by issue reports). Given 25 merged PRs in 24h — including fixes for CI blocking fork PRs (#6563), MCP session recovery (#6586), tool-name validation (#6561), and agent.json corruption (#6528) — a **v2.0.2 patch release is highly probable within days**.

---

## 3. Project Progress — Merged/Closed PRs Today (Key Items)

| PR | Type | Summary | Linked Issue |
|----|------|---------|--------------|
| [#6562](https://github.com/agentscope-ai/QwenPaw/pull/6562) | Bug fix | Fixed `/mission` TypeError, `spawn_subagent` approval inheritance, and CI fork-PR blocker | #6533, #6506, #6563 |
| [#6486](https://github.com/agentscope-ai/QwenPaw/pull/6486) | Bug fix | Matrix E2EE: probe `vodozemac` backend for Python 3.12 compatibility | #6476 |
| [#6582](https://github.com/agentscope-ai/QwenPaw/pull/6582) | Bug fix | Sandbox cleanup handling | — |
| [#6584](https://github.com/agentscope-ai/QwenPaw/pull/6584) | CI fix | Ensure changes detected in next `reload()` | — |
| [#6556](https://github.com/agentscope-ai/QwenPaw/pull/6556) | Feature | Creator plugin: checkpoints, home redesign, media recovery, export/import, bilingual guide | — |
| [#6256](https://github.com/agentscope-ai/QwenPaw/pull/6256) | Feature | Configurable sandbox-unavailable fallback action | #6250 |
| [#6561](https://github.com/agentscope-ai/QwenPaw/pull/6561) | Bug fix | MCP: ensure exposed tool names start with a letter (fixes Kimi 400 errors) | #6557 |
| [#6586](https://github.com/agentscope-ai/QwenPaw/pull/6586) | Bug fix | MCP: recover stale server sessions after restart/expiry | #6524 |
| [#6567](https://github.com/agentscope-ai/QwenPaw/pull/6567) | Bug fix | Preserve original CJK filenames in upload hints | #6453 |
| [#6528](https://github.com/agentscope-ai/QwenPaw/pull/6528) | Bug fix | Resolve `agent.json` corruption on Windows (BOM/interrupted writes) | #6520 |

**Trend:** Heavy focus on **v2.0 regression fixes** (MCP, CI, session management, file handling) and **first-time contributor onboarding** (7+ PRs tagged `first-time-contributor`).

---

## 4. Community Hot Topics — Most Active Discussions

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | Issue (Performance) | 7 | **v2.0 adds ~2s fixed overhead per reply** vs v1.x — architectural, not model latency. Blocking adoption. |
| [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | Issue (Bug) | 5 | MCP `streamable_http` sessions don't auto-recover after server restart; requires manual `list mcp`. |
| [#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) | Issue (CI) | 4 | `real-behavior-proof.yml` blocks **all fork PRs** — `Resource not accessible by integration`. **Fixed in #6562**. |
| [#6559](https://github.com/agentscope-ai/QwenPaw/issues/6559) | Issue (Enhancement) | 2 | Unwanted session forking floods session list; no parent-child grouping/tree view. |
| [#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555) | Issue (Bug) | 2 | Dream/memory compression loses early-session events if scrolled out before daily MD generation. |
| [#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565) | Issue (Bug) | 1 | `execute_shell_command`: multiline commands collapsed to spaces (syntax errors) + Linux PIPE background hangs. |

**Underlying signals:**  
- **Performance regression** is the #1 blocker for v1.x → v2.0 migration.  
- **MCP reliability** (session recovery, tool naming) is a recurring theme — critical for enterprise/agentic workflows.  
- **Session UX** (forking, grouping, data integrity) is a major daily-driver pain point.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) ~2s fixed overhead per reply in v2.0 | Open | — |
| **Critical** | [#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) CI blocks all fork PRs | **Closed** | [#6562](https://github.com/agentscope-ai/QwenPaw/pull/6562) ✅ |
| **High** | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) MCP session no auto-recovery after server restart | Open | [#6586](https://github.com/agentscope-ai/QwenPaw/pull/6586) (open) |
| **High** | [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) `execute_shell_command` large output freezes UI (main thread) | Open | — |
| **High** | [#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555) Dream compression loses early-session events | Open | — |
| **High** | [#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565) Multiline shell commands broken + PIPE hangs | Open | — |
| **Medium** | [#6557](https://github.com/agentscope-ai/QwenPaw/issues/6557) MCP tool names starting with `-` rejected by strict LLMs (Kimi) | Open | [#6561](https://github.com/agentscope-ai/QwenPaw/pull/6561) ✅ |
| **Medium** | [#6533](https://github.com/agentscope-ai/QwenPaw/issues/6533) `/mission` TypeError (`verification_instructions`) | **Closed** | [#6562](https://github.com/agentscope-ai/QwenPaw/pull/6562) ✅ |
| **Medium** | [#6506](https://github.com/agentscope-ai/QwenPaw/issues/6506) `spawn_subagent` ignores parent `approval_level: OFF` | **Closed** | [#6562](https://github.com/agentscope-ai/QwenPaw/pull/6562) ✅ |
| **Medium** | [#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476) Matrix E2EE broken on Python 3.12 (olm/jsmin) | **Closed** | [#6486](https://github.com/agentscope-ai/QwenPaw/pull/6486) ✅ |
| **Medium** | [#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520) `agent.json` corruption on Windows (BOM/interrupted writes) | — | [#6528](https://github.com/agentscope-ai/QwenPaw/pull/6528) ✅ |

**Stability note:** 9/11 high/medium bugs have fixes merged or open; only the **performance regression (#6307)** and **UI freeze (#6589)** lack visible fix PRs.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for Next Version |
|---------|-------|-----------------------------|
| **Session tree view / parent-child grouping** for forks | [#6559](https://github.com/agentscope-ai/QwenPaw/issues/6559) | High — core UX, 2👍, detailed spec |
| **Global hotkey + floating quick-input** (Doubao/Raycast style) | [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) | Medium — desktop-only, Tauri work needed |
| **Workflow / strong logic flow** (Dify-style) for permission-gated MCP calls | [#6571](https://github.com/agentscope-ai/QwenPaw/issues/6571) | Low — architectural, post-v2.1 |
| **Toggle character-count animation** in chat input | [#6585](https://github.com/agentscope-ai/QwenPaw/issues/6585) | High — trivial UI toggle, 1👍 |
| **Multiline file-drop display** in chat | [#6583](https://github.com/agentscope-ai/QwenPaw/issues/6583) | High — UX polish, 1👍 |
| **Copy/Undo/Stop/Scroll fixes** for chat sessions | [#6560](https://github.com/agentscope-ai/QwenPaw/issues/6560) | High — basic editor features missing |
| **Configurable theme/skin module** | [#6312](https://github.com/agentscope-ai/QwenPaw/pull/6312) (draft PR) | Medium — Task 1 draft, branding push |
| **Computer Use: native desktop automation** (Windows/macOS) | [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) | **In review** — major feature, near merge |

**Prediction:** v2.0.2 will ship MCP/session/ci fixes. v2.1 will likely include **Computer Use merge**, **theme system**, and **session UX overhaul** (tree view, copy/stop/undo).

---

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **v2.0 unusably slow** for simple chats | #6307: "2s fixed overhead per reply", 7 comments, no workaround | Blocks upgrades; users staying on v1.x |
| **Session list chaos** from auto-forks | #6559: "flooded with meaningless forks", no grouping | Daily friction; can't find conversations |
| **MCP breaks silently** after server restart | #6524: "must run `list mcp` manually" | Breaks unattended/agentic workflows |
| **Large command output freezes app** | #6589: "UI completely frozen, must force-close" | Data loss risk; avoids shell tool |
| **Character counter animation distracts** | #6585: "flashing hurts eyes, only need final count" | Accessibility/focus issue |
| **Chinese filenames garbled** in prompts | #6453: "unrecognizable, too long" | Non-English users; #6567 fixes |
| **No copy/stop/undo in chat** | #6560: "basic interactions missing" | Power-user efficiency |
| **Dream memory loses early events** | #6555: "critical ops never written to daily MD" | Reliability of long-term memory |

**Sentiment:** Strong appreciation for project ("非常不错的项目" — #6585), but **v2.0 regression fatigue** is palpable. Users expect rapid patching.

---

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) Performance regression | 10 days | **Top blocker for v2.0 adoption**; no fix PR, no maintainer comment in 24h | 🔴 **Urgent** |
| [#6559](https://github.com/agentscope-ai/QwenPaw/issues/6559) Session tree view | 2 days | High-impact UX; detailed spec ready; no triage label | 🟡 Needs design review |
| [#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555) Dream memory gap | 2 days | Data integrity for long sessions; architectural fix needed | 🟡 Needs architecture input |
| [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) UI freeze on large output | 1 day | Crash-level bug; may need streaming/virtualized rendering | 🔴 **Urgent** |
| [#6312](https://github.com/agentscope-ai/QwenPaw/pull/6312) Theme system (draft) | 10 days | Branding/customization foundation; stalled at draft | 🟡 Needs maintainer direction |
| [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) Computer Use native automation | 7 days | Major differentiator; "ready-for-human-review" but no merge | 🟡 **High value, review bottleneck** |
| [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) Global hotkey floating input | 1 day | Desktop UX parity with competitors; Tauri work tracked | 🟢 Good first issue candidate |

---

**Bottom line:** CoPaw is **shipping fixes fast** but carrying **two critical v2.0 regressions** (performance, UI freeze) without visible fix tracks. The MCP/session/CI fires are being extinguished. Next 48h should reveal whether maintainers prioritize the performance root-cause or cut v2.0.2 with known overhead.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-07-31

## 1. Today's Overview
ZeptoClaw shows low community churn with zero new issues and no releases in the past 24 hours. A single pull request (#645) remains open and was last updated on 2026-07-30, indicating ongoing maintenance work rather than feature velocity. The project appears stable but quiet, with maintainer attention focused on a security-and-reliability fix in the runtime layer. No user-reported regressions or community discussions surfaced today.

## 2. Releases
No new releases published today. The latest version remains whatever was previously tagged; no changelog, breaking changes, or migration notes are available for this period.

## 3. Project Progress
**No PRs were merged or closed today.** The only active movement is PR #645, which has been open since 2026-07-23 and received its latest update on 2026-07-30. This PR addresses two runtime concerns:
- **Secret leakage**: Shell commands spawned by the runtime previously inherited ZeptoClaw’s full process environment, risking exposure of provider API keys and unrelated credentials to model-authored commands.
- **Orphaned processes**: Timeout handling dropped `Command::output()` futures without reliably terminating and reaping descendant processes (including Docker containers), leaving zombie process trees.

The fix introduces environment scrubbing and robust process-tree reaping on timeout. This is a security-and-stability patch rather than a user-facing feature.

## 4. Community Hot Topics
Only one item qualifies: **PR #645** ([qhkm/zeptoclaw#645](https://github.com/qhkm/zeptoclaw/pull/645)).  
- **Activity**: 0 comments, 0 reactions (👍), open for 8 days.  
- **Underlying need**: Hardening the execution sandbox—preventing credential leakage and ensuring clean process cleanup—signals that maintainers are prioritizing supply-chain safety and operational reliability, likely in response to internal audit or CI flakiness rather than external reports.

No issues or discussions generated community engagement today.

## 5. Bugs & Stability
No new bug reports, crashes, or regressions filed in the last 24 hours. The sole open PR (#645) *is* a bug fix targeting:
1. **Secret exposure** (high severity if exploited) — mitigated by environment scrubbing.
2. **Process leakage on timeout** (medium severity, causes resource exhaustion) — mitigated by process-tree reaping.

A fix PR exists and is under review; no user-impacting incidents reported.

## 6. Feature Requests & Roadmap Signals
Zero feature requests or roadmap discussions surfaced today. The only signal comes from PR #645’s scope: future work may include tighter sandboxing (e.g., seccomp profiles, network namespaces) or declarative timeout policies, but no evidence exists in today’s data.

## 7. User Feedback Summary
No user feedback—issues, discussions, or reactions—recorded in the last 24 hours. The project’s user-facing surface appears quiet; pain points and satisfaction signals are absent from today’s dataset.

## 8. Backlog Watch
**PR #645** ([qhkm/zeptoclaw#645](https://github.com/qhkm/zeptoclaw/pull/645)) — open 8 days, last updated 2026-07-30, zero reviewer comments.  
- **Why it matters**: Security fix blocking potential credential leaks and CI flakiness from orphaned containers.  
- **Action needed**: Maintainer review/approval to merge; consider assigning a reviewer or adding CI checks to accelerate.

No stale issues or other long-unanswered PRs detected in today’s snapshot.

---

*Data sourced from GitHub API (issues, PRs, releases) for qhkm/zeptoclaw covering 2026-07-30 → 2026-07-31. Links point to live GitHub objects.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-31

## 1. Today's Overview
ZeroClaw shows **high architectural churn with zero merge velocity** in the last 24 hours: 14 active issues (all RFCs/enhancements/bugs) and 50 open PRs, but **no PRs merged or closed** and no new releases. The workload is dominated by **high-risk RFCs** (memory separation, OpenAI compatibility, MoA provider, realtime Gemini Live) and **critical security fixes** (webhook auth bypass, command allowlist regression). The project is in a "review bottleneck" state — contributors are shipping code, but maintainer bandwidth for review/merge appears saturated.

## 2. Releases
**No new releases** in the last 24 hours. The last release remains unversioned in this dataset.

## 3. Project Progress
**No PRs merged or closed today.** All 50 updated PRs remain open. Notable *in-progress* work includes:
- **Security hardening**: PR #9569 (fail-closed WhatsApp/Linq webhooks), #9568 (case-insensitive command allowlist on Unix), #9410 (disable command audit logging by default) — all addressing S0/S2 bugs filed yesterday.
- **Observability**: PR #9325 (fix streamed user turns misread as log payloads by small models).
- **CI/Infra**: PR #9545 (gate rustdoc warnings), #9211 (consolidate release attestations).
- **Architecture**: PR #8688 (trusted goal tools/delegation boundaries — XL risk), #9126 (typed plugin config validation — XL risk).

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|-----|-----------|
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | RFC | 12 | 0 | **Separate conversation history from agent-curated long-term memory** — implementation still mixes lifecycles; affects runtime, gateway, autosave. High risk, needs maintainer review. |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC | 7 | 0 | **OpenAI Chat Completions compatibility adapter** — enable Open WebUI, LobeChat, custom integrations without custom adapters. In progress. |
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | RFC | 7 | 0 | **Cross-turn conversation correlation in OTel** — carry opaque `conversation.id` through turn lifecycle for observability. |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | Feature | 7 | 2 | **Compact `local_small` runtime profile** — reduce prompt bloat, disable permissive fallback, prevent tool instruction leakage. Accepted, stale. |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | RFC | 5 | 0 | **Realtime speech-to-speech channel for Gemini Live** — native audio-to-audio with turn-taking/barge-in, ZeroClaw supplies tools/memory. |

**Pattern**: Contributors are pushing **integration-layer features** (OpenAI compat, Gemini Live, MoA) and **observability depth** (OTel correlation), while maintainers are stuck on **foundational RFCs** (memory separation, local profile) that block clean implementation.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Component | Status | Fix PR |
|----------|-------|-----------|--------|--------|
| **S0** (data loss/security) | [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565): Webhook handlers (WhatsApp Cloud, Linq, WATI) dispatch attacker-controlled messages **without authentication** | `gateway/api` | Open | [#9569](https://github.com/zeroclaw-labs/zeroclaw/pull/9569) — fail closed when verification secret missing |
| **S2** (degraded behavior) | [#9572](https://github.com/zeroclaw-labs/zeroclaw/issues/9572): Gateway WebSocket turns **overflow default Tokio worker stack** (debug builds) | `gateway/api` | Open | — |
| **S2** | [#9566](https://github.com/zeroclaw-labs/zeroclaw/issues/9566): **Uppercase `allowed_commands` entries never match on Unix** (regression from #4552) | `security/sandbox` | Open | [#9568](https://github.com/zeroclaw-labs/zeroclaw/pull/9568) — case-insensitive match on Unix |
| **S3** (minor) | [#8847](https://github.com/zeroclaw-labs/zeroclaw/issues/8847): `cargo test --doc` fails with **duplicated rustdoc theme flag** on Rust 1.96 | `tooling/ci` | In progress | — |

**Critical note**: Two S0/S2 bugs (#9565, #9566) were filed **yesterday** and already have fix PRs (#9569, #9568) — but none merged. The WATI channel is being removed entirely via [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) as collateral.

## 6. Feature Requests & Roadmap Signals
| Feature | Signal Strength | Likelihood Next Version |
|---------|----------------|-------------------------|
| **OpenAI Chat Completions adapter** ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)) | High (in-progress, 7 comments) | ★★★★☆ — unblocks major UI ecosystems |
| **Mixture-of-Agents (MoA) virtual provider** ([#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)) | Medium (4 comments, RFC) | ★★★☆☆ — architectural ambition, needs design consensus |
| **Realtime Gemini Live channel** ([#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)) | Medium (5 comments, RFC) | ★★★☆☆ — depends on audio pipeline maturity |
| **Compact `local_small` profile** ([#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)) | High (accepted, 2 👍, but stale since April) | ★★☆☆☆ — blocked on prompt-budget contract design |
| **Effort-based local/cloud routing** ([#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951)) | Medium (accepted, 1 comment) | ★★☆☆☆ — requires model capability metadata |
| **Cross-turn OTel correlation** ([#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)) | Medium (7 comments, RFC) | ★★★☆☆ — observability maturity signal |

**Predicted next-version theme**: **"Integration & Observability"** — OpenAI compat, OTel correlation, and webhook security fixes are closest to landing. MoA and Gemini Live are longer-horizon.

## 7. User Feedback Summary
| Pain Point | Source | Context |
|------------|--------|---------|
| **WebChat auto-scroll overrides manual scroll during streaming** | [#9562](https://github.com/zeroclaw-labs/zeroclaw/issues/9562) (Support) | User on Arch Linux v0.8.3 cannot read history while agent replies; references upstream OpenClaw issues. |
| **Small local models (Ollama `llama3.2`) misread streamed user turns as log payloads** | PR [#9325](https://github.com/zeroclaw-labs/zeroclaw/pull/9325) | Streamed path stored user turns as `[timestamp] message` — models answer with protocol commentary. |
| **Ollama endpoint misconfigured in dev templates** | PR [#8953](https://github.com/zeroclaw-labs/zeroclaw/pull/8953) | Base URL placed in `api_key` field with misleading comment; baked into Docker images. |
| **Dangling `peer_groups.*.channel` refs silently fail** | PR [#9311](https://github.com/zeroclaw-labs/zeroclaw/pull/9311) | Typo in channel name (e.g. `telegram.alert` vs `telegram.alerts`) demotes validation to generic boot log. |

**Theme**: **Local-model UX friction** (prompt format, config ergonomics) and **WebChat streaming usability** are top user-visible issues. Operator-facing config validation gaps (peer groups, Ollama) cause silent failures.

## 8. Backlog Watch — Stalled High-Value Items
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) `local_small` profile | **118 days** | Accepted, no-stale, 2 👍 | **Foundational for local-first UX** — reduces prompt bloat, prevents instruction leakage. Blocked on "prompt-budget contract" design. |
| [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) Effort-based routing | **42 days** | Accepted, no-stale | **Enables hybrid local/cloud** — simple turns stay local, hard turns escalate. Needs model capability metadata. |
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) Memory separation RFC | **17 days** | 12 comments, high risk | **Architectural prerequisite** — conversation history vs long-term memory still mixed in runtime/gateway/autosave. |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) OpenAI compat adapter | **29 days** | In-progress, 7 comments | **Highest ecosystem impact** — unblocks Open WebUI, LobeChat, etc. Stalled on maintainer review. |
| [#9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) Recalculate PR risk/size labels | **7 days** | Accepted | **CI hygiene** — manual label maintenance doesn't scale. Low code risk, high process value. |

**Maintainer attention needed**: The **memory separation RFC (#9048)** is the linchpin — it unblocks clean implementation of local profiles, effort routing, and MoA. The **OpenAI compat adapter (#8603)** has highest external demand but sits in "needs-maintainer-review" limbo. Consider dedicating a review sprint to unblock these two.

---

**Project Health Indicator**: 🟡 **Yellow** — High contributor output, zero merge throughput, critical security fixes unmerged, foundational RFCs stalled. Recommend: **triage merge backlog first**, then batch-review high-risk RFCs.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*