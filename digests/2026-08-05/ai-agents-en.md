# OpenClaw Ecosystem Digest 2026-08-05

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-05 01:54 UTC

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

# OpenClaw Project Digest — 2026-08-05

## 1. Today's Overview
OpenClaw shows **very high activity** with 500 issues and 500 PRs updated in the last 24 hours. The project closed 44 issues and merged/closed 119 PRs, indicating healthy throughput despite a large open backlog (456 active issues, 381 open PRs). No new release was published today. The issue landscape is dominated by **P1 stability bugs** around session state, message loss, provider authentication, and main-thread performance — many tagged `clawsweeper:needs-maintainer-review` and `clawsweeper-recovery-stuck`, signaling maintainer bandwidth constraints. Community engagement is strong on critical regressions (DeepSeek silent failure, crash-loop breaker, subagent completion loss), while feature requests (YAML config, LaTeX rendering, self-hosted voice) accumulate in the "off-meta tidepool" priority tier.

## 2. Releases
**No new releases today.** The latest version remains `2026.7.2` (beta.7 `dabe191` per #118846). Several open PRs target release-blocking fixes (e.g., #119326, #119379, #119023) but none have merged into a tagged release yet.

## 3. Project Progress
**119 PRs merged/closed in 24h** — notable merged/closed work inferred from issue closures and PR statuses:
- **#116277 (Closed)** — DeepSeek v4 Flash silent reply failure addressed (fallback path fixed)
- **#115326 (Closed)** — Crash-loop breaker Discord/WhatsApp suppression + `channels.start` WebSocket 1006 recovery resolved
- **#52249 (Closed)** — ACP parent session stuck on child completion fixed via transcript relay fix
- **PR #119379** (ready for review) — MCP stdio stdout frame parsing guard against oversized-buffer crash
- **PR #113257** (ready for review) — QA Lab UI asset version hashing strengthened
- **PR #111070** (ready for review) — QA Channel canonical thread action fields honored
- **PR #111638** (ready for review) — MS Teams malformed OAuth token envelope rejection
- **PR #119278** (ready for review) — ClickClack opt-in bot-to-bot inbound dispatch
- **PR #110415** (ready for review) — Pairing legacy `allowFrom` filename account-key normalization

*Many open PRs carry `status: 📣 needs proof` or `⏳ waiting on author`, indicating review bottleneck.*

## 4. Community Hot Topics
| Issue | Comments | Priority | Core Need |
|-------|----------|----------|-----------|
| **[#116277](https://github.com/openclaw/openclaw/issues/116277)** DeepSeek v4 Flash silent reply failure | 104 | P1 🦞 | **Reliability**: Model fails silently → generic fallback; users lose trust in provider routing |
| **[#116201](https://github.com/openclaw/openclaw/issues/116201)** Realtime voice unbounded provider/consult state | 59 | P1 🦞 | **Resource bounds**: Slow/bursty clients retain superseded work, large frames, pre-ready audio → OOM/main-thread stall |
| **[#115326](https://github.com/openclaw/openclaw/issues/115326)** Crash-loop breaker permanently suppresses Discord/WhatsApp | 25 | P1 🦞 | **Recoverability**: Documented `channels.start` recovery fails (WS 1006); operators need reliable reset |
| **[#44925](https://github.com/openclaw/openclaw/issues/44925)** Subagent completion silently lost (no retry/notify/restart) | 23 | P1 🦞 | **Observability + Guarantees**: Completion announce fails (E31/E42/E45); results vanish without trace |
| **[#48788](https://github.com/openclaw/openclaw/issues/48788)** Centralized filename encoding utility (multi-encoding Content-Disposition) | 20 | P3 🐚 | **Internationalization**: Feishu Chinese filenames (UTF-8/Latin-1) + Shift-JIS/EUC-KR/GB18030 across all adapters |

**Underlying theme**: Users demand **hard guarantees** (not best-effort) for message delivery, session recovery, and resource bounds — especially in multi-channel, multi-provider production deployments.

## 5. Bugs & Stability (Ranked by Severity)
| Issue | Severity | Status | Fix PR? | Key Symptom |
|-------|----------|--------|---------|-------------|
| **[#116201](https://github.com/openclaw/openclaw/issues/116201)** Realtime voice unbounded state | **Critical** | Open | No | Main-thread saturation, OOM risk under bursty load |
| **[#118846](https://github.com/openclaw/openclaw/issues/118846)** Gateway main thread 100% at boot (plugin-metadata + fs stat) | **Critical** | Open | No | Local RPC dies at `ws_upgrade` (1006); accept loop starved |
| **[#115908](https://github.com/openclaw/openclaw/issues/115908)** Session transcript projection livelock under sustained writes | **Critical** | Open | No | Main thread stalls tens of seconds; all channel transports stall |
| **[#97616](https://github.com/openclaw/openclaw/issues/97616)** Unreaped hook/tool child processes → zombie accumulation | **High** | Open | No | Runtime degradation over time; `openclaw-hooks`, `bash`, `codex` zombies |
| **[#119263](https://github.com/openclaw/openclaw/issues/119263)** Agent DB v14→v15 migration fails: `no such column: entry_valid` | **High** | Open | No | Gateway refuses to start; `openclaw doctor --fix` rolls back |
| **[#116277](https://github.com/openclaw/openclaw/issues/116277)** DeepSeek v4 Flash silent reply failure | **High** | **Closed** | Likely | "No reply generated" fallback posted; message loss |
| **[#115326](https://github.com/openclaw/openclaw/issues/115326)** Crash-loop breaker suppresses Discord/WhatsApp permanently | **High** | **Closed** | Likely | `channels.start` recovery fails with WebSocket 1006 |
| **[#44925](https://github.com/openclaw/openclaw/issues/44925)** Subagent completion silently lost | **High** | Open | No | Multiple failure modes (E31/E42/E45); no retry/notify/auto-restart |
| **[#67777](https://github.com/openclaw/openclaw/issues/67777)** Subagent completion delivery lost on timeout/drain/orphan prune | **High** | Open | No | Direct announce fails → conditional queue fallback fails → cleaned up silently |
| **[#92433](https://github.com/openclaw/openclaw/issues/92433)** Subagent completion dropped when announce steers into ending requester run | **High** | Open | No | `maybeSteerSubagentAnnounce` returns `steered` but requester run ends before processing |
| **[#115700](https://github.com/openclaw/openclaw/issues/115700)** `chat.send` rejected "thread switched branches" — stale `expectedLeafEntryId` | **High** | Open | **#116404** (open) | Post-model-completion sends fail persistently (2026.7.2) |
| **[#111498](https://github.com/openclaw/openclaw/issues/111498)** Main agent blocked by persistent workspace-state migration after Anthropic auth recovery | **High** | Open | No | TUI/CLI probe stops at legacy workspace-state; credential reported effective but unused |
| **[#91363](https://github.com/openclaw/openclaw/issues/91363)** Isolated cron fails "LLM request failed" at `model-call-started` | **High** | Open | No | Usage.input=0; manual `cron run` works; probe never reaches provider |
| **[#43747](https://github.com/openclaw/openclaw/issues/43747)** Memory management chaos — inconsistent chunking/embedding/storage across users | **Medium** | Open | No | Three users, three different memory behaviors (SQLite paths, chunking, embedding) |
| **[#107873](https://github.com/openclaw/openclaw/issues/107873)** Embedded prompt-lock session takeover aborts WebChat turns after tool failure | **Medium** | Open | No | `EmbeddedAttemptSessionTakeoverError` aborts instead of retrying |
| **[#116010](https://github.com/openclaw/openclaw/issues/116010)** All persistent sessions capped at 128k context regardless of model/config | **Medium** | Open | No | `contextTokens` ignored; hard 128k limit applied universally |

**Pattern**: Session-state corruption, message-loss silent failures, and main-thread contention dominate. Several P1 bugs have **open fix PRs** (#116404 for #115700, #119379 for MCP crash, #119326 for history limits) but await maintainer review.

## 6. Feature Requests & Roadmap Signals
| Issue | Priority | Signals | Likelihood for Next Version |
|-------|----------|---------|----------------------------|
| **[#45758](https://github.com/openclaw/openclaw/issues/45758)** YAML config support | P3 🌊 | 9 comments, 2 👍; DevOps alignment (K8s, Docker Compose) | **Medium** — low-risk, high usability; but "off-meta" |
| **[#42840](https://github.com/openclaw/openclaw/issues/42840)** MathJax/LaTeX in Control UI | P2 🌊 | 9 comments, **10 👍** (highest reaction count); scientific/math user base | **Medium-High** — visible UI enhancement, clear spec |
| **[#45508](https://github.com/openclaw/openclaw/issues/45508)** Self-hosted STT/TTS in WebChat (route via gateway) | P2 🦞 | 7 comments, 2 👍; privacy/enterprise demand | **High** — aligns with provider abstraction; P1 rating |
| **[#9016](https://github.com/openclaw/openclaw/issues/9016)** Expose OpenRouter usage cost to agent runtime | P2 🌊 | 7 comments, 1 👍; cost-aware agent behaviors | **Low-Medium** — niche provider, but growing |
| **[#71736](https://github.com/openclaw/openclaw/issues/71736)** Control UI plugin contribution slots (RFC) | P2 🌊 | 9 comments, 1 👍; SDK surface for Plan Mode, approval cards | **Medium** — architectural, enables extensibility |
| **[#44395](https://github.com/openclaw/openclaw/issues/44395)** Heading-aware chunking + entity extraction for memory | P2 🌊 | 6 comments, 2 👍; semantic memory search quality | **Medium** — improves core memory retrieval |
| **[#45501](https://github.com/openclaw/openclaw/issues/45501)** `session.resetPrompt` — configurable startup message | P2 🌊 | 6 comments, 1 👍; persona/customization UX | **High** — tiny scope, high user visibility |
| **[#119278](https://github.com/openclaw/openclaw/issues/119278)** ClickClack opt-in bot-to-bot inbound dispatch | P2 🐚 | PR ready for review; multi-bot workflows | **High** — PR #119278 at `👀 ready for maintainer look` |
| **[#46058](https://github.com/openclaw/openclaw/issues/46058)** Chat-first Android surface (discussion) | P2 🌊 | 6 comments, 1 👍; independent fork validation | **Low** — discussion only, not upstreaming fork |

**Prediction**: `session.resetPrompt` (#45501), self-hosted voice routing (#45508), and ClickClack bot-to-bot (#119278) have the clearest path — small scope, P1/P2 rating, and/or PRs in review. YAML config (#45758) and LaTeX (#42840) are strong community asks but sit in "

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal Assistant OSS Ecosystem (2026-08-05)

## 1. Ecosystem Overview
The personal AI agent open-source landscape is bifurcated into **high-velocity core platforms** (OpenClaw, IronClaw, Hermes Agent, CoPaw) processing 50–500+ daily issue/PR updates, and **specialized or early-stage projects** (NanoBot, PicoClaw, NanoClaw, LobsterAI) with focused feature work. A third tier (NullClaw, Moltis, TinyClaw, ZeptoClaw) shows minimal or maintenance-only activity. No project shipped a stable release today; all are in pre-release hardening (beta/RC) or continuous integration cycles. The dominant theme across active projects is **production hardening**—session reliability, provider isolation, resource bounds, and security—over new feature development.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Issues Closed | PRs Merged/Closed | Latest Release | Release Status | Health Score* |
|---------|----------------|-------------|---------------|-------------------|----------------|----------------|---------------|
| **OpenClaw** | 500 | 500 | 44 | 119 | `2026.7.2` (beta.7) | Pre-release, backlog-heavy | 🟡 High activity, review bottleneck |
| **IronClaw** | 50 | 50 | ~10 | ~12 | `v1.1.0-rc.1` (imminent) | RC prep, architecture consolidation | 🟢 High velocity, systematic gates |
| **Hermes Agent** | 50 | 50 | ~5 | 6 | `v0.19.1` | Bug-fix/refactor cycle | 🟡 High maintenance, architectural debt |
| **CoPaw** | 28 | 49 | 12 | 21 | `v2.1.0-beta.1` | Beta verification, critical regressions | 🟢 High velocity, beta stabilization |
| **NanoBot** | 5 | 26 | ~3 | 18 | None shown | Refactoring/stabilization | 🟢 Strong PR throughput, security debt |
| **LobsterAI** | ~3 | 13 | ~2 | 10 | `2026.8.3` (merged to main) | Post-release, security blocker | 🟡 Moderate, critical stale security issue |
| **PicoClaw** | 3 | 4 | 1 | 2 | None | Continuous integration | 🟢 Steady, focused bug fixes |
| **NanoClaw** | 0 | 5 | 0 | 1 | None | Feature development (Dial channel) | 🟡 Moderate, review-bound |
| **NullClaw** | 0 | 0 | 0 | 0 | None | Quiet maintenance | 🔴 Stalled, PR unreviewed 7 days |
| **Moltis** | 0 | 1 (bot) | 0 | 0 | None | Maintenance-only | 🔴 Inactive |
| **TinyClaw** | 0 | 0 | 0 | 0 | None | No activity | 🔴 Dormant |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | None | No activity | 🔴 Dormant |

*Health Score: 🟢 Healthy velocity & throughput • 🟡 Active but bottlenecked • 🔴 Stalled/Inactive*

---

## 3. OpenClaw's Position

**Advantages vs. Peers**
- **Scale of throughput**: 119 PRs merged/closed in 24h exceeds all peers combined; demonstrates unmatched maintainer/community capacity for volume.
- **Multi-channel/provider maturity**: Deep integration across Discord, WhatsApp, Matrix, Feishu, MS Teams, WebChat—broader than any peer.
- **Observability tooling**: `clawsweeper` auto-triage labels (`needs-maintainer-review`, `recovery-stuck`) reveal sophisticated process automation absent elsewhere.

**Technical Approach Differences**
- **Session-state centrality**: OpenClaw’s P1 bugs cluster on transcript projection, session migration, and subagent completion—reflecting a **stateful, long-running session model** vs. NanoBot/Hermes’ more request/turn-oriented flows.
- **Main-thread architecture**: Critical bugs (#116201, #118846, #115908) expose a **single-threaded gateway bottleneck**; peers (IronClaw’s crate-based, Hermes’ async runtime) avoid this via architectural partitioning.
- **Provider abstraction depth**: OpenClaw’s “off-meta tidepool” feature tier (YAML config, LaTeX, self-hosted voice) shows a **platform-extensibility** strategy vs. NanoBot’s provider-per-PR or IronClaw’s capability-gate model.

**Community Size Comparison**
- **Issue/PR volume** (500/500 daily updates) suggests the largest active contributor base.
- **Comment depth** on hot issues (104 on DeepSeek failure, 59 on voice state) indicates highly engaged production users.
- **No peer matches** the combination of breadth (channels/providers) and depth (session guarantees) in community demand signals.

---

## 4. Shared Technical Focus Areas (Cross-Project Requirements)

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Provider credential isolation & security** | **NanoBot** (#4784 critical), **LobsterAI** (#1202 critical), **Hermes Agent** (multi-tenant #34352), **OpenClaw** (provider auth P1s) | Per-provider key scoping, zero-trust env handling, audit trails; NanoBot’s `os.environ` leak is a class-wide pattern risk. |
| **Session/message delivery guarantees** | **OpenClaw** (#116277, #44925, #67777), **Hermes Agent** (#34352, #16004), **CoPaw** (#6696, #6695), **IronClaw** (#6284 epic closed) | Exactly-once semantics, retry/notify/restart on subagent completion, headless approval flows, crash-loop recovery. |
| **Resource bounds & main-thread protection** | **OpenClaw** (#116201, #118846, #115908), **Hermes Agent** (#78942, #78974), **CoPaw** (#6697, #6698) | Backpressure, circuit-breakers, timeout/cancel for MCP/tools, memory/CPU quotas per session. |
| **Prompt-cache / context optimization** | **OpenClaw** (#116010 128k cap), **Hermes Agent** (#79017, #79012, #79014), **CoPaw** (#6649, #6699), **PicoClaw** (#3251, #3317) | Cross-session cache scoping, token-aware chunking, on-demand skill loading, prompt-cache telemetry. |
| **Multi-channel approval & human-in-the-loop** | **CoPaw** (#6655, #6695, #6696), **OpenClaw** (crash-loop breaker), **NanoClaw** (#3185 Discord), **IronClaw** (#7193, #7194) | Headless/CLI approval rendering, channel-native confirmations, async approval with TTL, audit logging. |
| **Desktop/packaging reliability (Windows)** | **CoPaw** (#6697, #6698), **IronClaw** (#7200, #7197), **LobsterAI** (Windows installer fixes), **OpenClaw** (TUI/CLI probes) | Env isolation (PYTHONHOME), native messaging stability, installer signing, CI smoke tests per platform. |
| **Skill/capability modularity & discovery** | **IronClaw** (#6565, #6941), **NanoClaw** (#3186 host seams), **Hermes Agent** (#64182 plugin API), **CoPaw** (#6699 on-demand) | Capability declaration, lazy loading, versioned contracts, marketplace/install UX (IronHub). |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | Hermes Agent | NanoBot | CoPaw | LobsterAI | PicoClaw | NanoClaw |
|-----------|----------|----------|--------------|---------|-------|-----------|----------|----------|
| **Core Architecture** | Monolithic gateway, single-threaded event loop | Crate-based (Rust), layered architecture gates | Plugin/hook-based, multi-tenant memory | Modular provider/channel adapters (Python) | AgentScope-integrated, multi-model orchestration | Electron/React desktop-first | Lightweight core, provider-centric | Skill-owned capabilities, channel wizard |
| **Target User** | Production multi-channel operators, enterprise gateways | Platform builders, WASM tool authors, Nostr natives | Multi-tenant SaaS, VS Code/gateway autonomy | Self-hosters, privacy-focused, CLI power-users | Chinese-market desktop/mobile, multi-model | End-user desktop app, credit-campaign UX | Embedded/edge, headless CI, cost-optimizers | Omnichannel (SMS/voice) customer-facing bots |
| **Differentiating Feature** | Session guarantees at scale, `clawsweeper` automation | Hermetic capability testing, error-recoverability model | Plugin interface expansion, lifecycle hooks | Provider isolation security, metasearch (mst-python) | On-demand skill loading, GPT-5.6 prompt caching | Native credit-reward, artifact auto-preview | Exa web search, prompt-cache token capture | Dial channel (SMS + AI voice), skill wizard |
| **Extensibility Model** | Provider/channel adapters, YAML config (pending) | WASM tools, Nostr host functions, skill marketplace | Plugin API + hook taxonomy (stabilizing) | Provider/channel PRs, custom Bot API bases | Skill pool, reranker memory, multi-model merge | Settings toggles, campaign artwork bundles | Provider PRs, unified cache logging | Skill-owned host seams, channel picker |
| **Maturity Signal** | High throughput, deep backlog, P1 stability focus | RC gates, architecture enforcement, epic closures | Architectural debt (multi-tenancy, plugins) | Security debt, rapid PR velocity | Beta stabilization, critical desktop regressions | Post-release, stale critical security issue | Steady bug fixes, community provider PRs | Feature PRs stale 22 days, low review engagement |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration / Pre-Release Hardening** | **IronClaw**, **CoPaw**, **NanoBot** | Systematic gate enforcement (IronClaw), beta verification checklist (CoPaw), PR-a-day velocity with security/refactor focus (NanoBot). All targeting RC/GA within weeks. |
| **High-Volume Stabilization** | **OpenClaw**, **Hermes Agent** | Massive backlog throughput but review-bound; architectural decisions (`needs-decision`) stall contributors. OpenClaw’s scale unique; Hermes’ plugin/multi-tenancy blockers are structural. |
| **Feature-Complete / Post-Release Polish** | **LobsterAI**, **PicoClaw** | LobsterAI merged release branch but blocked by stale security issue; PicoClaw merges focused fixes, community adds providers. |
| **Early Feature Development** | **NanoClaw**, **NullClaw** | NanoClaw’s Dial channel (22 days open) and skill-capability refactor show ambition but low review engagement; NullClaw’s single PR unreviewed 7 days. |
| **Maintenance-Only / Dormant** | **Moltis**, **TinyClaw**, **ZeptoClaw** | Only Dependabot activity (Moltis) or zero updates. No signals of active roadmap. |

**Key Insight**: The ecosystem’s **center of gravity** is shifting from feature expansion to **production-grade guarantees**—delivery semantics, resource isolation, security boundaries, and cross-platform reliability. Projects with explicit gate-driven release processes (IronClaw, CoPaw) are advancing faster toward shippable milestones than those relying on maintainer bandwidth (OpenClaw, Hermes).

---

## 7. Trend Signals for AI Agent Developers

1. **Session durability is the new table stakes**  
   Silent message loss (OpenClaw #116277, #44925), subagent completion drops (Hermes #34352), and WeChat token consumption (CoPaw #6696) show users **reject best-effort delivery**. Agents must implement **idempotent operations, persistent outbox patterns, and explicit acknowledgment chains**.

2. **Provider isolation is a security baseline, not a feature**  
   NanoBot’s `os.environ` leak (#4784) and LobsterAI’s key exposure (#1202) reveal a **class vulnerability** in multi-provider gateways. Expect **per-provider credential managers, capability-based sandboxing, and audit logs** to become mandatory for enterprise adoption.

3. **Prompt-cache economics drive architecture**  
   OpenClaw’s 128k hard cap (#11

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-05

## 1. Today's Overview
NanoBot shows **high development velocity** with 26 PRs updated and 18 merged/closed in the last 24 hours, alongside 5 active issues. The project is in a heavy refactoring and stabilization phase—particularly around the WebUI, provider integrations (Anthropic, Telegram, Matrix, Mattermost), and agent memory/tooling. No new release was cut today, but the volume of merged fixes suggests a point release is imminent. Security (issue #4784) and MCP error-handling (#5237) remain the most critical open risks.

## 2. Releases
**No new releases published today.** The last release is not shown in the provided data; the current activity indicates a release candidate is being stabilized.

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Area | Summary |
|----|------|---------|
| [#5236](https://github.com/HKUDS/nanobot/pull/5236) | Provider (Anthropic) | **Critical fix**: Added Opus 5 effort controls & adaptive thinking; replaced hard-coded exclusions with model-family version thresholds. Closes #5235. |
| [#5233](https://github.com/HKUDS/nanobot/pull/5233) | Channel (Mattermost) | Added `groupPolicyInThread` config + WebUI exposure for separate thread/channel mention policies. |
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) | WebUI / Security | Opt-in trusted-proxy bootstrap auth for `/webui/bootstrap` (Cloudflare Tunnel/Access support). |
| [#5239](https://github.com/HKUDS/nanobot/pull/5239) | WebUI / DX | `nanobot webui --dev` — one-command Vite HMR dev mode with gateway readiness checks. |
| [#5223](https://github.com/HKUDS/nanobot/pull/5223) | Channel (WeCom) | Fallback when filename sanitization strips to empty string (prevents directory write). |
| [#5222](https://github.com/HKUDS/nanobot/pull/5222) | Channel (Telegram) | Preserves fenced code blocks when language tag contains special chars (`c++`, `html+django`). |
| [#5244](https://github.com/HKUDS/nanobot/pull/5244) | WebUI | Markdown rendering in prompt-rail hover previews (assistant snippets). |
| [#5245](https://github.com/HKUDS/nanobot/pull/5245) | WebUI | Unified timestamp tooltip styling; keyboard-accessible full timestamps. |
| [#5240](https://github.com/HKUDS/nanobot/pull/5240) | WebUI | Centralized floating-surface styling (menus, popovers, comboboxes). |
| [#5243](https://github.com/HKUDS/nanobot/pull/5243) | WebUI | Automation trigger marker moved to footer beside timestamp with tooltip. |
| [#5242](https://github.com/HKUDS/nanobot/pull/5242) | Commands | Reject malformed slash commands; suggest closest match for typos. |
| [#5241](https://github.com/HKUDS/nanobot/pull/5241) | WebUI | Refined inline token highlights (solid accent, semibold, removed glow). |
| [#1776](https://github.com/HKUDS/nanobot/pull/1776) | Channel (Telegram) | **Long-standing**: Added missing `group_mode` field to `TelegramConfig` (was silently ignored). |

*Total merged/closed: 13 visible in top-20 list; data reports 18 total.*

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Signal |
|------|------|----------|-----|--------|
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) | Issue (Security) | 2 | 0 | **API keys leaked across providers via global `os.environ` mutation** — affects all gateway providers; open since 2026-07-06. |
| [#5235](https://github.com/HKUDS/nanobot/issues/5235) | Issue (Bug) | 1 | 0 | Opus 5 temperature handling — **fixed by #5236** (merged). |
| [#5237](https://github.com/HKUDS/nanobot/issues/5237) | Issue (Bug) | 1 | 0 | MCP “data not found” envelope with `isError=false` silently swallowed; agent times out. |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | PR (Feature) | — | 0 | **New provider**: `mst-python` metasearch (RRF across DDG, Google, Brave, Bing…). |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | PR (Feature) | — | 0 | Telegram custom Bot API base URL + extra headers (self-hosted/enterprise). Open 22 days. |

**Underlying needs**:  
- **Provider isolation & security** (#4784) — users expect keys to be scoped per-provider, not process-global.  
- **MCP robustness** (#5237) — agents must surface business errors, not hang.  
- **Enterprise/self-hosted flexibility** (#4919, #5210) — proxy, custom endpoints, trusted auth.  
- **Richer search** (#5234) — single-engine search is insufficient; users want aggregated results.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical (Security)** | [#4784](https://github.com/HKUDS/nanobot/issues/4784) Provider API keys leaked via `os.environ` mutation | **OPEN** (30 days) | None yet |
| **High (Agent hang)** | [#5237](https://github.com/HKUDS/nanobot/issues/5237) MCP error envelope ignored → tool_timeout | **OPEN** (1 day) | None yet |
| **High (Integration)** | [#5247](https://github.com/HKUDS/nanobot/issues/5247) Matrix auto-join fails on Continuwuity (empty POST body) | **OPEN** | [#5248](https://github.com/HKUDS/nanobot/pull/5248) (open) |
| **Medium (Data loss risk)** | [#5223](https://github.com/HKUDS/nanobot/issues/5223) WeCom filename sanitization → directory write | **CLOSED** | [#5223](https://github.com/HKUDS/nanobot/pull/5223) ✅ |
| **Medium (Silent failure)** | [#5156](https://github.com/HKUDS/nanobot/pull/5156) Telegram polling stalls silently after network blip | **OPEN** (7 days) | [#5156](https://github.com/HKUDS/nanobot/pull/5156) (open) |
| **Low (UX)** | [#5222](https://github.com/HKUDS/nanobot/pull/5222) Telegram fenced code corruption with special-char languages | **CLOSED** | [#5222](https://github.com/HKUDS/nanobot/pull/5222) ✅ |
| **Low (Config)** | [#5235](https://github.com/HKUDS/nanobot/issues/5235) Opus 5 temperature always sent | **CLOSED** | [#5236](https://github.com/HKUDS/nanobot/pull/5236) ✅ |

**Action needed**: #4784 is the oldest and most severe — a security regression affecting all gateway providers. #5237 blocks reliable MCP tool use. #5248 should be reviewed/merged quickly to unblock Matrix users on Continuwuity.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Metasearch provider (mst-python)** | [#5234](https://github.com/HKUDS/nanobot/pull/5234) (PR open) | **High** — PR has tests, adds rich multi-engine search; aligns with “provider extensibility” theme. |
| **Telegram custom Bot API base URL + headers** | [#4919](https://github.com/HKUDS/nanobot/pull/4919) (PR open, 22 days) | **High** — enterprise/self-hosted demand; minimal scope, ready for review. |
| **WebUI Quick Chat & Temporary Chat** | [#5184](https://github.com/HKUDS/nanobot/pull/5184) (PR open, 6 days) | **Medium** — UX improvement, but larger surface (new session types, in-memory history). |
| **WebUI visual consistency refactor** | [#5249](https://github.com/HKUDS/nanobot/pull/5249) (PR open) | **Medium** — design system work; may wait for post-release. |
| **Mattermost thread-group policy** | [#5233](https://github.com/HKUDS/nanobot/pull/5233) (merged) | **Done** — will ship in next release. |
| **Vite dev mode (`nanobot webui --dev`)** | [#5239](https://github.com/HKUDS/nanobot/pull/5239) (merged) | **Done** — DX improvement for contributors. |
| **Trusted-proxy bootstrap auth** | [#5210](https://github.com/HKUDS/nanobot/pull/5210) (merged) | **Done** — enables Cloudflare Access deployments. |
| **Memory `.gitignore` fix** | [#5246](https://github.com/HKUDS/nanobot/issues/5246) (issue open) | **Low** — housekeeping; easy follow-up. |

**Prediction**: Next patch release will include #5236, #5233, #5210, #5239, #5223, #5222, #5244, #5245, #5240, #5243, #5242, #5241, #1776. #5248 (Matrix) and #5234 (mst) are strong candidates if reviewed in time.

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Credential leakage across providers** | #4784 — “gateway providers overwrite `os.environ`” | Security/compliance blocker for multi-provider setups. |
| **MCP errors invisible to agent** | #5237 — “business error envelope with `isError=false` treated as success” | Agents hallucinate success; waste turns & hit timeouts. |
| **Matrix on Continuwuity broken** | #5247 — “empty POST body rejected, invite callback fires but join fails” | Matrix channel unusable on that homeserver. |
| **Telegram polling dies silently** | #5156 — “after network blip, bot stops receiving messages, no logs” | Production reliability issue; requires process restart. |
| **Opus 5 requests rejected** | #5235 — “temperature param deprecated, still sent” | Direct API errors for latest Anthropic model (fixed). |
| **WeCom media download crashes** | #5223 — “sanitized filename empty → write to directory” | Media

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-05

---

## 1. Today's Overview

Hermes Agent shows **high maintenance velocity** with 50 issues and 50 PRs updated in the last 24 hours (6 PRs merged/closed). No new release was cut today. The project is in a **heavy bug-fix and refactoring cycle** addressing cross-cutting concerns: prompt-cache scoping regressions, Windows platform stability, cron lifecycle-guard hardening, Telegram adapter decomposition, and multi-tenant memory isolation. Several P0/P2 security and caching bugs were filed and fixed within hours, indicating an active triage process. The backlog includes long-standing architectural issues (multi-tenancy, plugin interface) that remain open but are actively discussed.

---

## 2. Releases

**No new releases today.** The latest tagged release remains `v0.19.1` (referenced in several bug reports).

---

## 3. Project Progress — Merged / Closed PRs (Last 24h)

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#78866](https://github.com/NousResearch/hermes-agent/pull/78866) | refactor(telegram): shard adapter.py wave 1 — polling, inbound, delivery, rich mixins (−6,014 lines) | Refactor | **Closed (superseded)** by #79010; first wave of Telegram god-file decomposition |
| [#79008](https://github.com/NousResearch/hermes-agent/pull/79008) | fix(whatsapp): clear the typing indicator when a turn ends | Bug | **Closed (duplicate)** of #46343; stops stale "typing…" indicator |
| *4 other merged/closed PRs* | (not individually listed in top-20) | — | Likely minor fixes / dependency updates |

**Net progress:** The Telegram adapter refactor (#79010, open) consolidates waves 1+2 into a single 10-mixin PR, reducing `adapter.py` from 10,147 → 1,390 lines — a major maintainability win. WhatsApp typing-indicator leak now has two duplicate fixes (#46343, #79008), indicating the issue is recognized but not yet merged.

---

## 4. Community Hot Topics (Most Comments / Reactions)

| Item | Comments | 👍 | Core Need |
|------|----------|----|-----------|
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) Plugin Interface Expansion — Tracking | 21 | 0 | **Stabilize & extend plugin API** so long-queued community PRs can land without breaking changes; needs lifecycle-event catalog first |
| [#64231](https://github.com/NousResearch/hermes-agent/issues/64231) Lifecycle-event catalog & hook taxonomy | 17 | 0 | **Standardize hook acceptance** before merging dozens of pending `VALID_HOOKS` PRs; batch triage instead of one-offs |
| [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) Solving the Multi-Tenant Hermes Problem | 14 | 2 | **Memory operations bypass hooks**, making tenant isolation impossible without forking core; production workaround exists but upstream fix needed |
| [#16004](https://github.com/NousResearch/hermes-agent/issues/16004) Configurable bounded auto-continue on max tool iterations | 9 | 1 | **Autonomy for long-running sessions** (VS Code, gateway) — avoid human unblock when iteration budget exhausted |
| [#54204](https://github.com/NousResearch/hermes-agent/issues/54204) Move/rescope sessions across projects | 8 | 3 | **Project reorganization UX** — critical for users who create sessions in wrong workspace |

**Signal:** The top 3 issues are **architectural** (plugin system, multi-tenancy, hook taxonomy) and have been open 2–3 months. Contributors are blocked on maintainer decisions (`needs-decision` label). The community wants **stable extension points** before investing more PR effort.

---

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)

| Severity | Issue | Component | Fix PR? | Notes |
|----------|-------|-----------|---------|-------|
| **P0** | [#79017](https://github.com/NousResearch/hermes-agent/issues/79017) `prompt_cache_key` loses continuity across context-compression session rotation | `agent`, `provider/openai`, `area/compression` | [#78959](https://github.com/NousResearch/hermes-agent/pull/78959) (open) | Cross-session cache bucket sharing; affects cost & correctness |
| **P0** | [#79012](https://github.com/NousResearch/hermes-agent/issues/79012) Auxiliary Codex calls still derive `prompt_cache_key` content-only, no session scope | `agent`, `provider/openai` | [#78959](https://github.com/NousResearch/hermes-agent/pull/78959) | Same root cause as #79017; compression/flush_memories/MoA/session_search |
| **P0** | [#79014](https://github.com/NousResearch/hermes-agent/issues/79014) xAI Responses: top-level `prompt_cache_key` override doesn’t propagate to `extra_body` | `agent`, `provider/xai` | [#78959](https://github.com/NousResearch/hermes-agent/pull/78959) | xAI reads only `extra_body["prompt_cache_key"]` |
| **P2** | [#78942](https://github.com/NousResearch/hermes-agent/issues/78942) `lifecycle_guard` crashes on NUL-bearing candidate path (`ValueError`) | `cron`, `tool/terminal` | [#79019](https://github.com/NousResearch/hermes-agent/pull/79019), [#79022](https://github.com/NousResearch/hermes-agent/pull/79022) | Incomplete fix from #76762; crashes entire terminal tool |
| **P2** | [#78980](https://github.com/NousResearch/hermes-agent/issues/78980) `lifecycle_guard` false-positives on Python scripts with `~/...` literals | `cron`, `tool/terminal` | [#79020](https://github.com/NousResearch/hermes-agent/pull/79020) | Blocks legitimate `--no-agent` cron jobs |
| **P2** | [#78974](https://github.com/NousResearch/hermes-agent/issues/78974) `lifecycle_guard` crashes when `HOME` unresolvable (`RuntimeError`) | `cron`, `tool/terminal` | — | Breaks **all** terminal commands until `HOME` set |
| **P2** | [#78406](https://github.com/NousResearch/hermes-agent/issues/78406) OpenAI transport not rebuilt until retry budget exhausted → `RemoteProtocolError` spikes (161/day) | `agent`, `provider/openai` | — | Production multi-tenant Feishu gateway impacted |
| **P2** | [#75801](https://github.com/NousResearch/hermes-agent/issues/75801) OpenCode Go `gpt-5.6-luna` omits `finish_reason` → 4 fake continuations; Desktop strips answer | `agent`, `tui`, `desktop` | — | Streaming parsing regression with new model |
| **P2** | [#78975](https://github.com/NousResearch/hermes-agent/issues/78975) Feishu cron delivery fails: `receive_id_type="thread_id"` invalid per API | `gateway`, `cron`, `platform/feishu` | — | 100% failure on DM thread deliveries |
| **P3** | [#77950](https://github.com/NousResearch/hermes-agent/issues/77950) Root `overrides` pins `brace-expansion@5.0.8` (GHSA-rgw5-rvv9-x895, DoS) | `dependencies`, `javascript` | — | `npm audit fix` no-op; build-time only but noisy |

**Pattern:** A cluster of **cron/lifecycle-guard** regressions (#78942, #78980, #78974) and **prompt-cache scoping** bugs (#79017, #79012, #79013, #79014) were filed and partially fixed today. The cache issues are all addressed by a single PR (#78959) that introduces a logical `cache-scope` concept.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for Next Version | Rationale |
|---------|-------|-----------------------------|-----------|
| **Plugin interface expansion & hook taxonomy** | [#64182](https://github.com/NousResearch/hermes-agent/issues/64182), [#64231](https://github.com/NousResearch/hermes-agent/issues/64231) | **High** | 21+17 comments; maintainer-authored tracking issues; batch PR triage planned |
| **Multi-tenant memory isolation** | [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) | **Medium** | 14 comments, 2 👍; production workaround exists but requires core change; `needs-decision` |
| **Auto-continue on iteration limit** | [#16004](https://github.com/NousResearch/hermes-agent/issues/16004) | **Medium** | 9 comments, 1 👍; impacts autonomous VS Code / gateway sessions |
| **Move sessions across projects (Desktop)** | [#54204](https://github.com/NousResearch/hermes-agent/issues/54204) | **Medium** | 8 comments, 3 👍; UX gap in “Projects Paradigm” |
| **Telegram Bot API 10.2 parity** | [#78791](https://github.com/NousResearch/hermes-agent/issues/78791) | **High** | Meta-issue coordinating multiple sub-issues/PRs; adapter refactor (#79010) unblocks |
| **Desktop: subscription/token usage in status bar** | [#78997](https://github.com/NousResearch/hermes-agent/issues/78997) | **Low–Medium** | New today (1 comment); niche but low-effort |
| **Disable auto project/repo discovery** | [#64615](https://github.com/NousResearch/hermes-agent/issues/64615), [#53328](https://github.com/NousResearch/hermes-agent/issues/53328) | **Medium** | 1+3 comments; home-directory scan on every launch is a perf/privacy pain point |

**Prediction:** The **plugin interface expansion** and **Telegram parity** work are closest to landing (maintainer-driven, active PRs). **Multi-tenancy** and **auto-continue** need design decisions (`needs-decision`). **Desktop scanning disable** is a quick config flag but unassigned.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Windows 11 25H2: `hermes dashboard --status` false negative** | [#75791](https://github.com/NousResearch/hermes-agent/issues/75791) (5 comments) | Windows native installer users |
| **Desktop scans entire `$HOME` for git repos on every launch** | [#53328](https://github.com/NousResearch/hermes-agent/issues/53328) (3 comments, 1 👍), [#64615](https://github.com/NousResearch/hermes-agent/issues/64615) | Desktop users with large home dirs |
| **Portable/isolated Windows deployment guidance missing** | [#46199](https://github.com/NousResearch/hermes-agent/issues/46199) (7 comments, 2 👍) | Security-conscious / enterprise Windows users |
| **Folder attachment + message overwrites folder path** | [#78847](https://github.com/NousResearch/hermes-agent/issues/78847) (1 comment) | Desktop chat users |
| **Feishu cron deliveries fail 100% (invalid `thread_id`)** | [#78975](https://github.com/NousResearch/hermes-agent/issues/78975) (1 comment) | Feishu/Lark gateway operators |
| **OpenAI-compatible gateway: 161 connection drops/day** | [#78406](https://github.com/NousResearch/hermes-agent/issues/78406) (1 comment) | High-volume multi-tenant deployments |
| **`npm audit` noise from pinned vulnerable `brace-expansion`** | [#77950](https://github.com/NousResearch/hermes-agent/issues/77950) (2 comments) | All JS/TS contributors & CI |

**Satisfaction signals:** Users run **multi-tenant agents in production** (#34352) and **long-coding sessions** (#78997), indicating real-world adoption. Dissatisfaction centers on **Windows UX**, **Desktop resource usage**, and **platform-specific delivery bugs** (Feishu, WhatsApp typing indicator).

---

## 8. Backlog Watch — Long-Unanswered Important Items

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) Multi-Tenant Hermes Problem | **~2 months** (2026-05-29) | Open, `needs-decision`, 14 comments | Blocks SaaS / multi-tenant deployments; core memory hook bypass |
| [#16004](https://github.com/NousResearch/hermes-agent/issues/16004) Configurable auto-continue | **~3.5 months** (2026-04-26) | Open, `needs-decision`, 9 comments | Autonomy for VS Code / gateway; simple config flag but no decision |
| [#46199](https://github.com/NousResearch/hermes-agent/issues/46199) Portable Windows deployment docs | **~1.5 months** (2026-06-14) | Open, 7 comments | Security/enterprise adoption blocker; no official guidance |
| [#53328](https://github.com/NousResearch/hermes-agent/issues/53328) Desktop scans entire `$HOME` | **~1.5 months** (2026-06-26) | Open, 3 comments, 1 👍 | Perf/privacy; easy fix (config flag) but unassigned |
| [#41290](https://github.com/NousResearch/hermes-agent/pull/41290) Scan skill index for prompt injection | **~2 months** (2026-06-07) | Open PR, `type/security`, P2 | **Security**: skill descriptions concatenated into system prompt unsanitized |
| [#69196](https://github.com/NousResearch/hermes-agent/pull/69196) Escape-aware JSON redaction | **~2 weeks** (2026-07-22) | Open PR, `type/security`, P2 | **Security**: log redaction breaks on embedded quotes |
| [#77950](https://github.com/NousResearch/hermes-agent/issues/77950) `brace-expansion` DoS vulnerability | **2 days** (2026-08-03) | Open, `type/security`, P3 | Build-time only but `npm audit fix` blocked; easy version bump |

**Maintainer attention needed:** The two **security PRs** (#41290, #69196) have been open 2+ weeks with no review. The **multi-tenancy** and **auto-continue** issues carry `needs-decision` but no maintainer response in weeks. The **Windows portable docs** and **Desktop scan disable** are low-effort documentation/config gaps affecting adoption.

---

## TL;DR Health Indicators

|

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-05

## 1. Today's Overview
PicoClaw shows steady maintenance activity with 4 PRs and 3 issues updated in the last 24 hours. Two bug-fix PRs were merged (OAuth auth hardening and Anthropic prompt-cache token capture), while two feature PRs remain open (native Exa web search provider and extended LLM response logging). The issue tracker highlights three active bugs: a Web UI input lag with long chat histories, an MCP server failure that hangs the agent loop, and a stale Android service-launch issue now closed. No new release was published today, indicating the project is in a continuous-integration phase rather than a release cut.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress (Merged / Closed PRs)
| PR | Title | Status | Impact |
|----|-------|--------|--------|
| [#3280](https://github.com/sipeed/picoclaw/pull/3280) | `fix(auth): make browser OAuth login survive real-world callback conditions` | **Closed** | Hardens the OAuth flow for headless/remote setups; prevents burned auth codes and repeated consent prompts. |
| [#3251](https://github.com/sipeed/picoclaw/pull/3251) | `fix(providers): capture the prompt cache token usage in Anthropic providers` | **Closed** | Exposes `cache_read`/`cache_write` token metrics for both Anthropic SDK and Messages API providers, enabling cost/performance monitoring of prompt caching. |

Both PRs address observability and reliability gaps in authentication and provider telemetry.

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Core Need |
|------|------|----------|-----------|-----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Issue (BUG) | 3 | 👍 1 | **Web UI responsiveness** — input latency grows with chat history length; users need virtualized rendering or incremental DOM updates. |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | Issue (BUG) | 3 | 👍 1 | **Agent-loop resilience** — MCP server disconnects freeze the entire chat; requires timeout/circuit-breaker and graceful degradation. |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | PR (FEAT) | 0 | 0 | **Native Exa search** — community request for a first-class `web_search` provider using Exa’s highlights API. |
| [#3317](https://github.com/sipeed/picoclaw/pull/3317) | PR (FEAT) | 0 | 0 | **Unified cache-token logging** — extend debug output to surface `prompt_cache_tokens` from any provider (DeepSeek, Cloudflare, etc.). |

The two open bugs (#3281, #3269) have the strongest community signals (comments + reactions), indicating they directly block daily workflows.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP server connection failure hangs the agent loop → chat stops replying. Affects all users with MCP tooling. | No |
| **Medium** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input becomes very laggy once session history grows. Impacts long-running coding sessions. | No |
| **Low (Stale)** | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android service launch failure + path-setting permission issue. Closed as stale; may resurface on Android updates. | No |

**No open fix PRs** yet for the two active high/medium bugs.

## 6. Feature Requests & Roadmap Signals
1. **Native Exa web search provider** ([#3299](https://github.com/sipeed/picoclaw/pull/3299)) — ready-to-merge PR adding `tools.web`/`web_search` via Exa API; likely to land in next minor release.
2. **Universal prompt-cache token logging** ([#3317](https://github.com/sipeed/picoclaw/pull/3317)) — extends observability beyond Anthropic; aligns with cost-tracking demands.
3. **Web UI virtualization / incremental rendering** (implied by #3281) — no PR yet, but strong user pain suggests a forthcoming issue or internal spike.
4. **MCP resilience patterns** (implied by #3269) — timeout, retry, and fallback UX will likely be prioritized after the bug is triaged.

## 7. User Feedback Summary
- **Pain points**:  
  - Web UI becomes unusable after ~50+ messages (input lag).  
  - MCP tooling is brittle — a single flaky server kills the whole agent session.  
  - Android app still has path-permission and service-start issues (though stale).  
- **Positive signals**:  
  - OAuth auth flow now works in headless/CI environments (#3280).  
  - Anthropic prompt-cache metrics finally visible (#3251).  
  - Community contributors actively adding providers (Exa) and telemetry (#3299, #3317).
- **Use cases**: Long-running coding agents, headless CI auth, multi-provider cost optimization, mobile/Android companions.

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | 16 days | High-severity agent hang; no assignee, no fix PR. Blocks reliable MCP usage. |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 15 days | Web UI regression affecting power users; needs frontend perf investment. |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 10 days | Feature-complete Exa provider awaiting review; expands built-in tool ecosystem. |
| [#3317](https://github.com/sipeed/picoclaw/pull/3317) | 1 day | Small but high-leverage observability PR; easy merge candidate. |

**Maintainer attention recommended** on #3269 and #3281 to prevent user churn; #3299 and #3317 are low-risk merges that add immediate value.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-05

## 1. Today's Overview
NanoClaw shows **moderate development activity** with 5 pull requests updated in the last 24 hours (4 open, 1 merged) and zero issue activity. The project is actively expanding its channel ecosystem with a new Dial integration (SMS + AI voice calls) and improving core agent scheduling reliability. No releases were published today. The merged PR addresses a time-handling bug in scheduled tasks, while open PRs focus on architectural refactoring and a critical Discord approval flow fix.

## 2. Releases
**No new releases** published today.

## 3. Project Progress
### Merged / Closed Today
| PR | Title | Summary | Link |
|----|-------|---------|------|
| **#3154** | `fix(agent-runner): give scheduled tasks current run time` | Ensures scheduled tasks receive the correct execution timestamp (`process_after`) with weekday context, falling back to creation time for legacy rows. Generated `current_time` at agent pickup improves scheduling accuracy. | [#3154](https://github.com/nanocoai/nanoclaw/pull/3154) |

### Open PRs Updated Today (Active Development)
| PR | Type | Summary | Author | Link |
|----|------|---------|--------|------|
| **#3186** | Refactor | Adds **host seams for skill-owned capabilities** — foundational work to let skills declare and own runtime capabilities via host-provided interfaces. | zvi-fried | [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) |
| **#3050** | Feature / Skill | Adds **Dial to channel picker + wizard/skills** (`runChannelSkill` model) — user-facing integration for the Dial channel. | OmriBenShoham | [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) |
| **#3041** | Feature / Skill | Implements **Dial channel adapter (SMS + AI voice calls)** — core channel integration with `SKILL.md`. | OmriBenShoham | [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) |
| **#3185** | Bugfix | **Discord: strip `\n` delimiter in webhook `custom_id`** — fixes approval cards always resolving to "Reject" due to parsing error in Chat SDK bridge. | omerh | [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) |

## 4. Community Hot Topics
No GitHub Issues were updated today. Among PRs, **#3041** and **#3050** (Dial channel) have the longest open duration (22 days since 2026-07-14) and represent a **major feature initiative** — adding SMS and AI voice call support. The lack of comments/reactions (`undefined`, 0 👍) across all PRs suggests **low community discussion visibility**; maintainers may want to encourage review engagement.

**Underlying need**: Expanding communication channels beyond text/chat into **voice and telephony** — a strong signal for enterprise/omnichannel use cases.

## 5. Bugs & Stability
| Severity | PR / Issue | Description | Fix Status |
|----------|------------|-------------|------------|
| **High** | [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) | **Discord approval flow broken**: every button click on `ask_question`/approval cards resolves to "Reject" due to `\n` in `custom_id` parsing. Affects all Discord webhook interactions. | **Fix PR open** (awaiting review/merge) |
| **Medium** | [#3154](https://github.com/nanocoai/nanoclaw/pull/3154) | Scheduled tasks lacked correct runtime timestamp (`process_after`), causing timing drift; legacy rows fell back to creation time. | **Merged** ✅ |

No crashes or regressions reported via Issues today.

## 6. Feature Requests & Roadmap Signals
| Signal | Evidence | Likelihood for Next Version |
|--------|----------|-----------------------------|
| **Dial / SMS / Voice channel** | Two coordinated PRs (#3041 adapter + #3050 wizard/picker) open 22 days; feature-complete per checklists | **High** — core adapter ready, integration polishing |
| **Skill-owned capability model** | #3186 refactors host seams to let skills declare capabilities — architectural shift toward **skill autonomy** | **Medium-High** — foundational, may land behind flag |
| **Agent scheduling precision** | #3154 merged — adds `current_time` with weekday at agent pickup | **Done** — in current main |

**Prediction**: Next release will likely include **Dial channel** and **scheduled-task time fix**; skill-capability refactor may follow in a minor version.

## 7. User Feedback Summary
- **No user-facing Issues** filed today — limited direct feedback channel visibility.
- **Pain point inferred from #3185**: Discord users experience **silent failure on approvals** (always rejected), eroding trust in human-in-the-loop flows.
- **Use case signal**: Demand for **voice/SMS channels** (Dial) suggests users are building **customer-facing assistants** requiring telephony.
- **Satisfaction**: Hard to gauge — no Issue discussions, but rapid PR iteration on Dial indicates internal priority.

## 8. Backlog Watch
| Item | Days Open | Risk | Action Needed |
|------|-----------|------|---------------|
| **[#3041](https://github.com/nanocoai/nanoclaw/pull/3041)** Dial channel adapter | 22 | **Medium** — large feature, no recent review activity | Request review; verify test coverage for SMS/voice paths |
| **[#3050](https://github.com/nanocoai/nanoclaw/pull/3050)** Dial wizard / channel picker | 22 | **Medium** — user-facing, depends on #3041 | Coordinate merge with #3041; update docs |
| **[#3186](https://github.com/nanocoai/nanoclaw/pull/3186)** Host seams for skill capabilities | 1 | **Low** — early refactor, design discussion may be needed | Initiate design review; clarify capability ownership model |
| **[#3185](https://github.com/nanocoai/nanoclaw/pull/3185)** Discord approval bug | 1 | **High** — production-breaking for Discord users | **Prioritize review/merge**; consider hotfix backport |

---

**Project Health Indicator**: 🟡 **Active but review-bound** — meaningful features in flight (Dial, skill capabilities), but multiple PRs stale >2 weeks with no community engagement. Recommend maintainers triage review queue and encourage contributor feedback loops.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-05

---

## 1. Today's Overview
NullClaw shows **minimal activity** over the past 24 hours: zero issues updated, zero PRs merged/closed, and no new releases. The sole active change is **PR #981**, an open feature PR adding a `grok-cli` provider for xAI’s Grok CLI. The project appears in a **quiet maintenance phase** with no community-reported bugs, feature requests, or discussions surfacing today.

---

## 2. Releases
**No new releases** published today. The latest release information is not provided in the data snapshot.

---

## 3. Project Progress
**No PRs merged or closed today.** The only movement is the continued development of PR #981 (see Community Hot Topics below).

---

## 4. Community Hot Topics
| Item | Type | Status | Activity | Link |
|------|------|--------|----------|------|
| **#981** | PR | OPEN | Created 2026-07-29, updated 2026-08-04, 0 👍, 0 comments | [nullclaw/nullclaw#981](https://github.com/nullclaw/nullclaw/pull/981) |

**Analysis**: PR #981 introduces a **new optional provider** (`grok-cli`) that spawns the local `grok` CLI (xAI Grok) per request, mirroring the existing `codex-cli`, `gemini-cli`, and `claude-cli` patterns. The PR has been open for ~7 days with **no reviewer engagement** (zero comments, zero reactions). This suggests either:
- Maintainer bandwidth is constrained
- The change is considered low-risk and may be batched with other provider additions
- Contributor may need to ping for review

**Underlying need**: Expanding the provider ecosystem to support xAI’s Grok CLI, giving users another local CLI-backed LLM option without API keys.

---

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.** Zero issues updated in the last 24h.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **grok-cli provider** | PR #981 (open, 7 days) | **High** — follows established provider pattern; only missing review/merge |
| **Additional CLI providers** | Implicit (existing codex/gemini/claude-cli) | **Medium** — pattern is established; more CLIs may be added as they mature |

**Prediction**: The `grok-cli` provider is the clearest near-term addition. No other feature signals appear in today’s data.

---

## 7. User Feedback Summary
**No user feedback captured today** — zero issues, zero comments on PRs, zero reactions. The project’s user-facing channels (issues, discussions) are silent in this window.

---

## 8. Backlog Watch
| Item | Age | Concern | Link |
|------|-----|---------|------|
| **#981** | 7 days open, 0 reviews | Stalled feature PR; no maintainer acknowledgment | [nullclaw/nullclaw#981](https://github.com/nullclaw/nullclaw/pull/981) |

**Recommendation**: Maintainers should triage PR #981 — either review/merge, request changes, or close with rationale. A week without any interaction on a straightforward provider addition may discourage future contributors.

---

*Data sourced from GitHub API snapshot for nullclaw/nullclaw covering 2026-08-04 to 2026-08-05.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-05

## 1. Today's Overview

IronClaw shows **exceptionally high velocity** with 100 combined issue/PR updates in the last 24 hours (50 each). The project is in a heavy **architecture consolidation and pre-release hardening phase** targeting `v1.1.0-rc.1`. Activity clusters around: (a) the "Reborn" crate restructuring (Waves 0–4 consolidation), (b) fixing CI/lint regressions blocking merges, (c) hardening the 1.0.0→1.1.0 migration path, and (d) polishing Windows compatibility for the upcoming release candidate. No new releases shipped today, but multiple release-blocking PRs are in flight.

---

## 2. Releases

**No new releases published today.**  
The team is actively preparing `ironclaw-v1.1.0-rc.1` (see [#7178](https://github.com/nearai/ironclaw/issues/7178) and [#7198](https://github.com/nearai/ironclaw/pull/7198)). Breaking changes are expected in `ironclaw_common` (0.4.2→0.5.0) and `ironclaw_skills` (0.3.0→0.4.0) per the staged release PR [#5598](https://github.com/nearai/ironclaw/pull/5598).

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Scope | Outcome |
|----|-------|---------|
| [#7167](https://github.com/nearai/ironclaw/pull/7167) | CI: clippy on bin-only crates | **Merged** — fixed `--lib` flag error on `ironclaw_reborn_cli`; CI now passes per-package clippy |
| [#7200](https://github.com/nearai/ironclaw/pull/7200) | Windows: `icacls` stdout pollution | **Merged** — fourth Windows blocker cleared for `v1.1.0-rc.1` |
| [#7197](https://github.com/nearai/ironclaw/pull/7197) | CI: Windows identity vars in smoke test | **Merged** — unblocks release preflight |
| [#7156](https://github.com/nearai/ironclaw/pull/7156) | Architecture enforcement gates | **Merged** — four sabotage-tested gates (same-layer edges, composition LOC ceiling, vendor census, ratchet slack) now meaningful |
| [#7161](https://github.com/nearai/ironclaw/pull/7161) | WS10: path-keyed → inventory gates | **Merged** — loud gates converted before crate moves |
| [#7160](https://github.com/nearai/ironclaw/pull/7160) | WS3: sandbox/mcp port consolidation | **Merged** — drops `ironclaw_resources` dependency |
| [#7148](https://github.com/nearai/ironclaw/issues/7148) | Architecture checklist gap | **Closed** — identified unowned exception in layer matrix |
| [#7119](https://github.com/nearai/ironclaw/issues/7119) | Clippy package-set regression | **Closed** — main was red for `{ironclaw, ironclaw_reborn_config}` set |
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | Epic: error-recoverability endgame | **Closed** — model recovers from 100% of observed errors |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | Epic: hermetic capability/journey testing | **Closed** — deterministic coverage platform landed |
| [#7168](https://github.com/nearai/ironclaw/issues/7168) | Agent-installed skills invisible | **Closed** — skill_install write/discovery mismatch fixed |

**Key theme:** The "Reborn" restructuring (Waves 0–4) is **landing in batches** with rigorous gate enforcement. Windows release blockers are being systematically cleared.

---

## 4. Community Hot Topics — Most Active Discussions

| Item | Comments | Signal |
|------|----------|--------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) Epic: error-recoverability endgame | 15 | **Closed** — flagship reliability milestone achieved; model now survives, sees, understands cause, gets a turn, and never reports false success for every mid-run error |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) Epic: hermetic testing platform | 4 | **Closed** — answers "does every capability/journey have deterministic coverage?" mechanically |
| [#7119](https://github.com/nearai/ironclaw/issues/7119) Clippy package-set regression | 4 | **Closed** — exposed latent CI gap; main failed on a package-set no PR had previously produced |
| [#6752](https://github.com/nearai/ironclaw/issues/6752) Instance deletion fails / "Loading your agents..." stuck | 3 | **Open** — user-reported regression blocking instance lifecycle; reproduction steps from Slack feedback |
| [#7145](https://github.com/nearai/ironclaw/issues/7145) WS2: extension_host → loops re-layer sizing | 3 | **Open** — architectural follow-up; previous sizing metric (file count) proven wrong |
| [#7194](https://github.com/nearai/ironclaw/issues/7194) Outbound: admin shared-channel as delivery target | 2 | **Open** — capability gap: agents can post to Slack channels but cannot address them as delivery targets |
| [#7193](https://github.com/nearai/ironclaw/issues/7193) Automations: run-now (manual fire) | 2 | **Open** — missing "execute now" across model, WebUI, product surface |
| [#7192](https://github.com/nearai/ironclaw/issues/7192) WebUI: optimistic messages render below agent output | 2 | **Open** — UX regression: conversation reads out of order during concurrent turns |
| [#7191](https://github.com/nearai/ironclaw/issues/7191) builtin.time: relative offset arithmetic | 2 | **Open** — production failure: "24 hours ago" parsing broken; opaque errors |
| [#6565](https://github.com/nearai/ironclaw/issues/6565) Epic: reliable skill discovery/routing/activation | 2 | **Open** — 21 acceptance criteria; split into subset epic [#6941](https://github.com/nearai/ironclaw/issues/6941) |

**Underlying needs:**  
- **Reliability completion**: The two closed epics (#6284, #6524) represent major trust milestones.  
- **Architecture integrity**: Multiple issues (#7145, #7147, #7151, #7146) reveal ongoing tension between restructuring velocity and measurement accuracy.  
- **User-facing polish**: WebUI message ordering (#7192), automation manual trigger (#7193), and outbound delivery completeness (#7194) are direct product gaps reported by internal champions.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Release-blocking** | [#7178](https://github.com/nearai/ironclaw/issues/7178) | 1.0.0-rc.1 → 1.1.0-rc.1 startup migration **not lossless**; threads, messages, channel roots, OAuth, extensions at risk | Yes: [#7198](https://github.com/nearai/ironclaw/pull/7198) (open, XL) |
| **Release-blocking** | [#7200](https://github.com/nearai/ironclaw/pull/7200) | `icacls` writes to CLI stdout on Windows → breaks JSON output | **Fixed & merged** |
| **Release-blocking** | [#7197](https://github.com/nearai/ironclaw/pull/7197) | Windows identity vars missing in release smoke test | **Fixed & merged** |
| **High** | [#6752](https://github.com/nearai/ironclaw/issues/6752) | Instance deletion fails; "Loading your agents..." stuck on re-login | No PR yet |
| **High** | [#7168](https://github.com/nearai/ironclaw/issues/7168) | Agent-installed skills invisible (write/discovery path mismatch) | **Fixed & closed** |
| **Medium** | [#7192](https://github.com/nearai/ironclaw/issues/7192) | WebUI: optimistic user messages render below agent output (conversation order broken) | No PR yet |
| **Medium** | [#7191](https://github.com/nearai/ironclaw/issues/7191) | `builtin.time.parse("24 hours ago")` fails with opaque `input_error()` | No PR yet |
| **Medium** | [#7104](https://github.com/nearai/ironclaw/issues/7104) | Extractors report "no text found" as **Failed** not **Empty** → model misinformed | No PR yet |
| **Medium** | [#7103](https://github.com/nearai/ironclaw/issues/7103) | Latency-trace field computed even when tracing disabled (wasted JSON bytes) | No PR yet |
| **Medium** | [#7146](https://github.com/nearai/ironclaw/issues/7146) | 121 tracing sites use `target = "..."` (field) instead of `target: "..."` (metadata) → events invisible to filters | No PR yet |
| **Low** | [#7115](https://github.com/nearai/ironclaw/issues/7115) | Docker entrypoint gates legacy-Slack migration on dead env var → docs skip migration | No PR yet |
| **Low** | [#6947](https://github.com/nearai/ironclaw/issues/6947) | `classify-test-scope.sh` mis-buckets `ironclaw_product` as legacy-only (glob stale) | No PR yet |

**Stability note:** Three Windows release blockers resolved today (#7197, #7200, plus preflight #30962170467). The migration losslessness (#7178/#7198) is the **last known release gate**.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for v1.1.0 |
|---------|--------|----------------------|
| **Per-user LLM model selection** (currently admin-only) | [#7183](https://github.com/nearai/ironclaw/issues/7183) — Champions weekly (marketing) | Medium — config scope, low risk |
| **Automation "run now" (manual fire)** | [#7193](https://github.com/nearai/ironclaw/issues/7193) — product gap across model/WebUI/surface | Medium — enhancement, size L, touches trigger domain |
| **Admin shared-channel as outbound delivery target** | [#7194](https://github.com/nearai/ironclaw/issues/7194) — extensions scope, risk high | Low — high risk, needs delivery layer redesign |
| **Nostr host functions for WASM tools** | [#7184](https://github.com/nearai/ironclaw/pull/7184) — PR open, XL, core contributor | Medium — already in PR, reborn sandbox feature |
| **Dedicated identity/session & payments service** | [#7105](https://github.com/nearai/ironclaw/issues/7105) — user feedback, p2 | Low — architectural extraction, post-1.1 |
| **IronHub integration (marketplace for tools/skills)** | [#6731](https://github.com/nearai/ironclaw/issues/6731) — epic, v1.1.0 | High — epic scoped to v1.1.0, docs PR [#6965](https://github.com/nearai/ironclaw/pull/6965) open |
| **Reliable skill discovery/routing/activation** | [#6565](https://github.com/nearai/ironclaw/issues/6565) / [#6941](https://github.com/nearai/ironclaw/issues/6941) — epic, suggested_P1 | Partial — subset epic [#6941] targeted, but 21 ACs span multiple owners |
| **Deferred tool retrieval: schema-aware ranked search** | [#7177](https://github.com/nearai/ironclaw/issues/7177) — reborn, performance, suggested_P2 | Low — P2, improvement over current name/description scoring |

**Predicted v1.1.0 inclusions:** IronHub integration (#6731), lossless migration (#7178), Windows fixes, error-recoverability & hermetic testing epics (already closed). Per-user model selection (#7183) and Nostr WASM functions (#7184) are strong candidates. Automation run-now (#7193) and outbound shared-channel (#7194) likely slip to 1.2.

---

## 7. User Feedback Summary — Real Pain Points

| Feedback | Source | Impact |
|----------|--------|--------|
| **Memory not reliably recalled across conversations** | [#7185](https://github.com/nearai/ironclaw/issues/7185) — Champions weekly (legal, relayed) | High — core agent value prop; context loss breaks trust |
| **Web scraping hit-or-miss: agent uses `http` tool instead of `web_search`** | [#7180](https://github.com/nearai/ironclaw/issues/7180) — Champions weekly (builder ops) | High — tool selection failure; no clear pattern for users |
| **Instance deletion fails; "Loading your agents..." stuck** | [#6752](https://github.com/nearai/ironclaw/issues/6752) — Slack product feedback | High — blocks instance lifecycle management |
| **Agent-installed skills invisible after `builtin.skill_install`** | [#7168](https://github.com/nearai/ironclaw/issues/7168) — local-dev WebUI reproduction | High — skill installation appears to succeed but skill unusable |
| **Optimistic user messages render below agent output** | [#7192](https://github.com/nearai/ironclaw/issues/7192) — WebUI | Medium — conversation reads out of order during concurrent turns |
| **"24 hours ago" parsing fails in production automation** | [#7191](https://github.com/nearai/ironclaw/issues/7191) — real thread `5a2e3160...` | Medium — blocks time-relative automations (GitHub→Slack reports) |
| **No per-user LLM model selection (admin-only)** | [#7183](https://github.com/nearai/ironclaw/issues/7183) — Champions weekly (marketing) | Medium — limits user autonomy in multi-tenant workspaces |
| **Skill discovery: "candidate existed but wasn't chosen" vs "chosen and changed answer" logging needed** | [#7199](https://github.com/nearai/ironclaw/issues/7199) — external builder (FaceSeek) | Low — observability gap for skill routing debugging |

**Satisfaction signal:** Champions weekly (2026-07-23) surfaced **four distinct user-facing regressions** (#7185, #7180, #7183, #6752) — indicating the product is in active dogfooding but has visible rough edges. The external suggestion (#7199) validates the skill routing observability gap.

---

## 8. Backlog Watch — Long-Unanswered / Stale Important Items

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#3773](https://github.com/nearai/ironclaw/issues/3773) Epic: Land Target Crate Architecture | **~80 days** (2026-05-19) | **North-star architecture epic** — 10 ownership families, 7-layer enforcement, CI gates, contributor guidance. All current Wave work

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-05

## 1. Today's Overview
LobsterAI showed moderate maintenance activity today with **13 PRs updated** (10 merged/closed, 3 open) but **no new release** published. The majority of closed PRs cluster around the **2026.8.3 release** (merged today via #2430), which delivered native credit-reward activities, login-flow improvements, Artifact auto-preview controls, and Windows installer reliability fixes. A **critical security issue (#1202)** regarding model-key leakage remains open and marked stale since April, with no fix PR visible today. Dependency-upgrade PRs from Dependabot (Electron, React, HeadlessUI) were also closed today after sitting since April. Overall, the project is in a **post-release stabilization phase** with an outstanding security debt item.

## 2. Releases
**No new release published today.** The `release/2026.8.3` branch was merged into `main` via **#2430** (closed 2026-08-04), but no GitHub Release artifact appears in the feed. Key changes in that release (per #2430 summary):
- Native credit-reward activities (startup campaign)
- Streamlined first-run login experience
- Artifact auto-preview toggle (user-controllable)
- Model-overload error classification separate from rate-limit
- Windows installer reliability improvements
- *No breaking changes or migration notes documented in the PR.*

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Change Type | Summary |
|----|------|-------------|---------|
| [#2430](https://github.com/netease-youdao/LobsterAI/pull/2430) | renderer, main, cowork, windows | **Release** | Merged `release/2026.8.3` → `main` (see Release section) |
| [#2429](https://github.com/netease-youdao/LobsterAI/pull/2429) | renderer, cowork | **Chore** | Login page optimization |
| [#2428](https://github.com/netease-youdao/LobsterAI/pull/2428) | renderer, main | **Fix** | Complete startup credit campaign analytics fields (login redirect URL, error messages, IPC contract) |
| [#2427](https://github.com/netease-youdao/LobsterAI/pull/2427) | renderer, cowork | **Feat** | Bundle startup credit campaign artwork locally; server controls availability/timing |
| [#2426](https://github.com/netease-youdao/LobsterAI/pull/2426) | renderer, main | **Fix** | Classify model capacity overload separately from rate limit; prevents misleading retry prompts |
| [#2425](https://github.com/netease-youdao/LobsterAI/pull/2425) | renderer, cowork | **Feat** | Add Artifact auto-preview toggle in Settings |
| [#2424](https://github.com/netease-youdao/LobsterAI/pull/2424) | renderer, main, cowork | **Fix** | Restore active credits campaign (revert accidental removal) |
| [#1282](https://github.com/netease-youdao/LobsterAI/pull/1282) | deps | **Chore** | Bump `@headlessui/react` 1.7.19 → 2.2.9 (stale since Apr) |
| [#1283](https://github.com/netease-youdao/LobsterAI/pull/1283) | deps | **Chore** | Bump `react` 18.3.1 → 19.2.4 (stale since Apr) |
| [#1284](https://github.com/netease-youdao/LobsterAI/pull/1284) | deps | **Chore** | Bump `react-syntax-highlighter` 15.6.6 → 16.1.1 (stale since Apr) |

**Net advancement**: Release 2026.8.3 shipped; credit campaign & artifact UX polished; dependency debt reduced.

## 4. Community Hot Topics
| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) | **Issue (Security)** | 1 comment, updated today, **stale since Apr** | **Critical**: Agent leaks model API keys via config/env introspection. Users expect zero-trust key handling. |
| [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | **PR (Open)** | Updated today, 0 comments | **UX**: Permanent “hide sidebar ad banner” toggle (Settings → General) addressing #2342. Users want persistent ad control, not per-session dismiss. |
| [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) | **PR (Open, Stale)** | Updated today, 0 comments | **Stability**: Show error toast when session rename fails (currently silent swallow). Improves error visibility. |

**Signal**: Security (#1202) and ad/UX control (#2374) are the only live community discussions; everything else is internal release work.

## 5. Bugs & Stability
| Severity | Item | Status | Fix PR? |
|----------|------|--------|---------|
| **Critical** | [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) – Model key leakage via agent introspection | **Open (stale)** | ❌ No fix PR linked |
| **Medium** | Session rename fails silently (no toast, input closes) | **Open (stale PR #1205)** | ✅ PR #1205 exists but unmerged since Apr |
| **Low** | Dependency upgrades (Electron 40→43, React 18→19, HeadlessUI 1→2) | **Closed today** | ✅ Merged via #1277, #1282–#1284 |

**Action needed**: #1202 requires immediate triage and a security patch release.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood Next Version |
|---------|--------|-------------------------|
| Permanent sidebar ad-banner hide toggle | [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) (PR open) | **High** – PR ready, addresses tracked issue #2342 |
| Artifact auto-preview toggle | [#2425](https://github.com/netease-youdao/LobsterAI/pull/2425) | **Delivered** – Already in 2026.8.3 |
| Model-overload error classification | [#2426](https://github.com/netease-youdao/LobsterAI/pull/2426) | **Delivered** – Already in 2026.8.3 |
| Session rename error toast | [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) | **Medium** – Stale PR, needs rebase/review |
| Key leakage protection | [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) | **Urgent** – Security blocker, should gate next patch |

## 7. User Feedback Summary
- **Pain points**:  
  - Ads/banners cannot be permanently dismissed (#2342 → #2374)  
  - Silent failures on session rename (no toast, lost input)  
  - **Security anxiety**: Agent exposes configured model keys/env vars (#1202)  
- **Positive signals**:  
  - Credit campaign artwork & flow polished (#2427, #2428)  
  - Login UX streamlined (#2429)  
  - Artifact preview now user-controllable (#2425)  
- **No explicit satisfaction/dissatisfaction metrics** in today’s data (no new issue comments, reactions).

## 8. Backlog Watch (Stale / Needs Maintainer Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) | **126 days** (since 2026-04-01) | **Critical security bug**; labeled `stale` but updated today – indicates lingering risk. |
| [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) | **126 days** | UX fix for silent rename failure; ready but unmerged. |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | **125 days** | Electron 40→43 upgrade; closed today but may need regression testing. |
| [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | **15 days** | User-facing ad-control feature; open, awaiting review/merge. |

**Recommendation**: Prioritize #1202 security patch → merge #2374 & #1205 → cut 2026.8.4 patch release.

---

*Data source: GitHub Issues/PRs updated 2026-08-04 (appearing in 2026-08-05 digest). All links point to netease-youdao/LobsterAI.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-05

## 1. Today's Overview
Moltis shows **minimal activity** over the past 24 hours: zero issue updates, zero merged/closed PRs, and no new releases. The sole change is a Dependabot-initiated PR (#1184) bumping the development dependency `undici` from 7.28.0 to 7.29.0 in the `/website` directory. This indicates the project is currently in a **maintenance-only** phase with no active feature workstreams.

## 2. Releases
No new releases published today. The latest release information is not available in the provided data.

## 3. Project Progress
No PRs were merged or closed today. The only open PR is a routine dependency update:
- **#1184** `chore(deps-dev): bump undici from 7.28.0 to 7.29.0 in /website` — Dependabot[bot]  
  Updates the Node.js HTTP client `undici` to its latest minor version. No functional changes to Moltis core; limited to the website build tooling.

## 4. Community Hot Topics
No issues or PRs with comments or reactions in the last 24h. The only active item is the automated dependabot PR (#1184), which has zero community interaction.

## 5. Bugs & Stability
No bug reports, crashes, or regressions filed or updated today. No fix PRs are present.

## 6. Feature Requests & Roadmap Signals
No new feature requests or roadmap discussions captured in the last 24h. The absence of issue activity suggests either a stable period or a lull in community engagement.

## 7. User Feedback Summary
No user feedback, pain points, or use-case reports surfaced today via GitHub issues or PR discussions.

## 8. Backlog Watch
No long-unanswered issues or PRs highlighted in the current dataset. With zero open issues updated recently, there are no stale items requiring immediate maintainer triage based on this snapshot.

---

**Health Indicator**: 🟡 **Low Activity / Maintenance Mode**  
The project appears quiet with only automated dependency maintenance occurring. No human-driven development, bug fixing, or community interaction detected in the last 24h. Maintainers may wish to monitor for stagnation or confirm this is an expected calm period.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-05

## 1. Today's Overview
CoPaw (QwenPaw) shows **high velocity** with 77 total items (28 issues, 49 PRs) updated in the last 24 hours. The project is in active **beta stabilization** for v2.1.0-beta.1 (released 2026-08-03), with maintainers and contributors closing 12 issues and merging/closing 21 PRs. Activity spans **multi-model provider support, channel reliability, memory/compression bugs, desktop packaging regressions, and security hardening**. No new release today, but the beta verification checklist (Issue #6656) indicates imminent RC.

---

## 2. Releases
**None today.** Latest: **v2.1.0-beta.1** (2026-08-03, Beta).  
Release verification tracking: **Issue #6656** — four-platform install checks (Windows/macOS/Linux Tauri, pip, Docker, Homebrew).  
*Watch for RC once all checkpoints green.*

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Area | Status |
|----|-------|------|--------|
| #6685 | `fix(timestamp): improve timestamp handling in agentscope_msg_to_message` | Core: timezone conversion | **Closed** (fixes #6301) |
| #6682 | `fix(console): sync legacy max_iters when saving iteration limit` | Console: loop config | **Closed** |
| #6678 | `fix(ci): install Playwright Chromium for the integration suite` | CI: browser tests | **Closed** |
| #6686 | `test(integration): fix chrome contract mismatches and add missing p-tier markers` | CI: test gating | **Closed** |
| #6679 | `test(integration): align import-local with #6487 and widen flaky poll window` | CI: import-local tests | **Closed** |
| #6628 | `fix(scroll): use SystemMsg for compressed memory placeholder in _rebuild_context` | Memory: scroll compression | **Closed** (fixes #6541) |
| #6309 | `fix(chats): convert session timestamps across timezones` | Core: timestamp TZ | **Closed** (fixes #6301) |
| #6618 | `fix(console): remove forced UTC timestamp normalization in session list` | Console: timestamps | **Closed** |
| #6673 | Frontend conversation window display issue | Console: UI | **Closed** |
| #6633 | Skills/Skill Pool pages fail on slow networks (MB payload, 30s timeout) | Console: API perf | **Closed** |
| #6374 | Token usage persistence does not retry after transient write failure | Core: token accounting | **Closed** |
| #6656 | Release Duty: v2.1.0-beta.1 Installation Verification | Release ops | **Closed** (tracking) |
| #5906 | 防重复功能异常触发 (anti-repeat false positive) | Console: UX | **Closed** |
| #6301 | Incorrect timestamp timezone conversion (naive UTC treated as local) | Core: timestamps | **Closed** |
| #6655 | Console channel doesn't render security approval prompts | Channels: console | **Closed** |
| #6642 | Drag-drop files: avoid upload-copy, read original path | Console: file handling | **Closed** |
| #6583 | Drag-drop many files: multi-line filename display | Console: UI | **Closed** |
| #4947 | ADD Kanban Board for Playground Multi-agents | Console: playground | **Closed** |
| #6693 | DELETE (spam) | — | **Closed** |

**Key advances:**  
- **Timezone correctness** across session storage, display, and AgentScope interop (#6301, #6309, #6618, #6685).  
- **Memory/compression pipeline** fixed: scroll auto-compression now triggers `summarize_when_compact` (#6628, #6629).  
- **CI stability**: Playwright Chromium installed, p-tier markers added, flaky windows widened (#6678, #6686, #6679).  
- **Console UX**: iteration limit sync, skill page payload optimization, file drag-drop UX, approval rendering.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| **#6649** [enhancement] Support GPT-5.6 prompt caching parameters in Responses API | 13 | Provider | **Cost/latency optimization** for multi-turn agents via `prompt_cache_key`, `prompt_cache_options`, `prompt_cache_breakpoint`. |
| **#6655** [question] Console channel doesn't render security approval prompts → silent timeout | 12 | Channel/UX | **Headless/CLI usability**: approval prompts invisible in console channel, causing 300s timeout. |
| **#6643** [enhancement] Task artifacts: per-task subdirectories under `media/` | 6 | Core/Storage | **Workspace hygiene**: avoid flat `media/` dump; isolate outputs per task. |
| **#6667** DeepSeek thinking mode fails in multi-turn: `reasoning_content` missing after OpenAI formatter skips `ThinkingBlock` | 5 | Provider/Model | **Reasoning fidelity** for DeepSeek V4 Pro via DashScope; retry hack only works once. |
| **#6642** [enhancement] Drag-drop files: read original path directly (no upload-copy) | 5 | Console/UX | **Frictionless file input**: match desktop-agent UX (Claude, Cursor); avoid media clutter. |
| **#6696** WeChat iLink: one-time `context_token` consumed by typing indicator → replies rejected (ret=-2) | 2 | Channel/WeChat | **Channel reliability**: typing indicator burns the single-use token, breaking replies. |
| **#6695** Approval prompts unreachable in WeChat-only mode (console-only dialog, 5-min auto-deny) | 2 | Channel/UX | **Headless approval flow**: no way to approve gated commands (rm, kill) via WeChat. |
| **#6697** v2.1.0b1 desktop injects `PYTHONHOME` → every python subprocess crashes (`ModuleNotFoundError: encodings`) | 2 | Desktop/Packaging | **Desktop regression**: Tauri/PyInstaller env leak breaks all Python subprocesses on Windows. |
| **#6699** [Feature] On-Demand Skill Loading (27+ skills = 8-10k tokens = 25-30% system prompt) | 1 | Core/Skills | **Token budget**: lazy-load skill descriptions; current all-skills-in-prompt unsustainable. |
| **#6698** v2.1.0b1 browser SDK: `open()` always fails `WireProtocolError: Target crashed` (isolated Playwright) | 1 | Desktop/Browser | **Browser tool broken** in beta desktop on Windows 11. |

**Underlying themes:**  
1. **Production hardening** for v2.1.0 — desktop packaging, channel retries, approval flows.  
2. **Token efficiency** — prompt caching, on-demand skills, reasoning content preservation.  
3. **Headless/CLI parity** — console & WeChat channels need first-class approval & file UX.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | **#6697** | v2.1.0b1 desktop injects `PYTHONHOME` → all Python subprocesses crash (`encodings ModuleNotFoundError`) on Windows. Blocks desktop beta. | ❌ No PR yet |
| **Critical** | **#6698** | Browser SDK `open()` fails `WireProtocolError: Target crashed` (isolated Playwright session) on Windows 11. Browser tool unusable. | ❌ No PR yet |
| **High** | **#6696** | WeChat iLink: typing indicator consumes one-time `context_token` → replies rejected (ret=-2), "working" stuck. | ❌ No PR yet |
| **High** | **#6695** | WeChat-only: approval prompts impossible to approve (console-only dialog, 5-min auto-deny). Security gating broken. | ❌ No PR yet |
| **High** | **#6667** | DeepSeek thinking mode: `reasoning_content` missing after OpenAI formatter skips `ThinkingBlock` in multi-turn. | ❌ No PR yet |
| **Medium** | **#6624** | Auto-compression (Scroll) doesn't trigger `summarize_when_compact`; manual `/compact` works. | ✅ **#6629** (open, under review) |
| **Medium** | **#6683** | App Center install `qwenpaw-creator` fails: `No module named 'utils.env'` (plugin top-level import conflict). | ✅ **#6688** (open, first-time contributor) |
| **Medium** | **#6687** | OpenRouter multimodal probe overwrites documented capabilities with `false`. | ❌ No PR yet |
| **Medium** | **#6690** | `cron pause/resume` doesn't persist `enabled` state; lost on restart. | ✅ **#6691** (open) |
| **Low** | **#6655** | Console channel: security approval prompts not rendered → silent 300s timeout. | ✅ Closed (fix implied) |
| **Low** | **#6301** | Naive UTC timestamps treated as user-local time. | ✅ **#6309**, **#6685** closed |

**Critical path for v2.1.0 RC:** #6697, #6698 (desktop), #6696, #6695 (WeChat channel), #6624/#6629 (memory).

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signals / Likelihood for Next Version |
|---------|-------|----------------------------------------|
| **GPT-5.6 prompt caching** | #6649 | 13 comments, explicit provider enhancement. High priority for cost-sensitive multi-turn workloads. **Likely in 2.1.x**. |
| **On-Demand Skill Loading** | #6699 | 8-10k token overhead quantified; architectural impact. **High-value, medium effort** — expect design discussion, maybe 2.2. |
| **Per-task artifact directories** | #6643 | Simple storage reorg; UX win. **Likely 2.1.x**. |
| **Channel startup retry** | #6684 / PR #6689 | PR #6689 open (exponential backoff for Matrix). **Very likely 2.1.x**. |
| **Multi-model per agent** | #6455 | "Run DS v4 Pro, Qwen 3.7 Max, Kimi K3 independently, merge results." Complex orchestration. **Roadmap 2.2+**. |
| **Global rules (`.agent`/`.claude` style)** | #6694 | Persistent system prompt override. **Low effort, high UX** — candidate for 2.1.x. |
| **Free-tier rate-limit handling** | #6674 | DeepSeek-v4-flash 429s interrupt tasks. Needs retry/backoff/fallback policy. **Likely 2.1.x**. |
| **Volcengine Agent Plan + Xiaomi MiMo providers** | #6490 | Two new built-in providers. **Likely 2.1.x** (provider additions are routine). |
| **Kanban Board for Playground** | #4947 | Closed (maybe deferred or done elsewhere). |
| **Reranker for ReMe memory search** | PR #6398 | Backend PR open; adds `RerankerConfig`, candidate multiplier. **Likely 2.1.x**. |

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Desktop beta broken on Windows** | #6697 (PYTHONHOME), #6698 (browser SDK) | Blocks adoption of v2.1.0b1; users cannot run Python tools or browser automation. |
| **WeChat channel unusable for approvals** | #6695, #6696 | Headless deployments (common in CN) cannot approve risky commands; typing indicator breaks replies. |
| **Token budget pressure from skills** | #6699 (27 skills = 8-10k tokens) | Power users hit context limits; every request pays full skill tax. |
| **Console/headless approval UX missing** | #6655 (12 comments) | CLI users see silent 300s timeout; no visible prompt. |
| **File drag-drop UX friction** | #6642, #6655, #6583 | Upload-copy step surprises users; multi-file display truncated. |
| **Memory/compression silent failures** | #6624, #6629 | Auto-summarize not triggering; users lose long-context continuity. |
| **Provider reasoning fidelity** | #6667 | DeepSeek thinking mode loses `reasoning_content` in multi-turn. |
| **Cron state not persisted** | #6690 | Scheduled tasks revert on restart; ops burden. |
| **Skill page load failures** | #6633 (closed) | MB-level payloads timeout on slow nets; fixed via pagination/compression. |

**Positive signals:**  
- Active first-time contributors (#6331, #6615, #6688, #6618).  
- Release duty automation (#6656) shows maturing ship process.  
- Provider ecosystem expanding (OpenRouter, Volcengine, Xiaomi, DashScope/DeepSeek).

---

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| **#4267** `feat(security): Mac OS file path white list` (PR) | Open since 2026-05-13 (84 days) | Sandbox/exec hardening for macOS; security-critical, long review cycle. |
| **#6331** `chore(console): specify Node.js version requirement` (PR) | Open since 2026-07-22 (14 days) | Low-hanging DX; unblocks local builds. |
| **#6615** `fix(agentscope): resolve compatibility and config loading` (PR) | Open since 2026-07-31 (5 days) | AgentScope interop; first-time contributor. |
| **#6398** `feat: add reranker support for ReMe memory search` (PR) | Open since 2026-07-23 (13 days) | Memory quality upgrade; backend ready, needs review. |
| **#6492** `fix(files): preserve uploaded filenames in hints` (PR) | Open since 2026-07-27 (9 days) | UX polish for file handling. |
| **#6657** `fix(sandbox): report constraints the backend cannot enforce` (PR) | Open since 2026-08-03 (2 days) | Security transparency; silent gaps in `deny_paths`, `mounts`, etc. |
| **#6669** `fix(desktop): stabilize Chrome native messaging and Windows restore locking` (PR) | Open since 2026-08-04 (1 day) | Desktop startup reliability; pairs with #6697/#6698. |
| **#6674** Free-tier rate-limit handling (Issue) | Open since 2026-08-04 (1 day) | Common user pain; needs product decision (retry/fallback/alert). |

---

## Summary Metrics (24h)

| Metric | Count |
|--------|-------|
| Issues updated | 28 |
| ‑ Open/active | 16 |
| ‑ Closed | 12 |
| PRs updated | 49 |
| ‑ Open | 28 |
| ‑ Merged/closed | 21 |
|

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*