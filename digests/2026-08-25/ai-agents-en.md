# OpenClaw Ecosystem Digest 2026-08-25

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-25 00:54 UTC

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

# OpenClaw Project Digest — 2026-08-25

## 1. Today's Overview
OpenClaw shows **extremely high velocity** with 500 issues and 500 PRs updated in the last 24 hours — a signal of both active development and significant backlog pressure. The 475 open/active issues (vs 25 closed) and 422 open PRs (vs 78 merged/closed) indicate a project in heavy feature/reliability iteration, with many long-standing bugs still unresolved. The new **v2026.8.1-beta.3** release focuses on GPT-5.6 model support, Control UI onboarding improvements, and CDP relay for Chrome pairing — a platform-hardening release rather than a feature drop. Community engagement is strong on reliability-critical issues (message loss, session state, process leaks), while maintainers are actively closing security/onboarding PRs but struggling to keep pace with P1 bug volume.

## 2. Releases
### **v2026.8.1-beta.3** — *2026-08-25*  
**Highlights:**
- **GPT-5.6 family support** (Sol, Terra, Luna, Ultra) across OpenClaw core and Codex runtime — new reasoning model integration
- **Control UI first-run setup** now continues verified model setup into Custodian and optional channel setup — smoother onboarding
- **Puppeteer-compatible CDP relay** for paired Chrome sessions — enables remote browser automation workflows
- Explicit extension/configuration improvements (details truncated)

**Migration Notes:**  
- Beta release; not recommended for production gateways without validation  
- Operators upgrading from beta.2 should run the release validation worksheet (see [#125626](https://github.com/openclaw/openclaw/issues/125626))  
- CDP relay requires Chrome 128+ on the paired machine  

[Release Page](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1-beta.3)

## 3. Project Progress — Merged/Closed PRs Today (78 total; notable items)

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#123975](https://github.com/openclaw/openclaw/pull/123975) | `fix(scripts): clean up tsgo process trees on timeout or signal` | Tooling/Process mgmt | Prevents wedged TypeScript compiler trees; adds `OPENCLAW_TSGO_TIMEOUT_MS` watchdog |
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | `fix(gateway): keep conversation delivery within agent bindings` | Multi-agent/Message delivery | Fixes cross-agent conversation leakage in multi-agent deployments |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | `fix(models): keep Claude CLI OAuth available in Control UI` | Auth/Control UI | Restores Claude CLI OAuth refresh ownership after gateway restart |
| [#126082](https://github.com/openclaw/openclaw/pull/126082) | `Audit exact-bound owner-native lifecycle receipts` | Observability/Session lifecycle | Adds cron/task/flow owner-native receipts for exact-bound tracking |
| [#128937](https://github.com/openclaw/openclaw/pull/128937) | `fix: restore GitHub tools in managed Codex sessions` | Extensions/Codex | Restores GitHub identity/tools in managed Codex sessions |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | `feat(ui): review install policy warnings` | Security/Control UI | Admins can acknowledge install-policy warnings in UI before proceeding |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | `feat(security): require acknowledgement for install policy warnings` | Security/CLI | CLI installs now require explicit confirmation for warned plugins/skills |
| [#77804](https://github.com/openclaw/openclaw/pull/77804) | `doctor returns exit code 0 despite reporting Invalid config` | Diagnostics | Fixes misleading exit code — now returns non-zero on config errors |

**Theme:** Security hardening (install policy), multi-agent correctness, process hygiene, and diagnostic reliability — all foundational work.

## 4. Community Hot Topics — Most Active Issues (by comments)

| Issue | Comments | Labels | Core Pain Point |
|-------|----------|--------|-----------------|
| [#125626](https://github.com/openclaw/openclaw/issues/125626) | 18 | `maintainer`, `release-validation` | **Release validation for beta.2** — community-driven testing worksheet; gate for beta.3 promotion |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | 12 | `P1`, `impact:message-loss`, `🦞 diamond lobster` | **Subagent completion delivery loss** on timeout/drain/orphan — messages silently dropped under load |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 9 | `bug`, `P1`, `impact:crash-loop`, `🦪 silver shellfish` | **Zombie process leak** from hook/tool execution — `openclaw-hooks`, `bash`, `codex` children unreaped |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) | 8 | `enhancement`, `P2`, `impact:session-state` | **Agent-triggered context compaction** — agents want `/compact` without user intervention |
| [#97680](https://github.com/openclaw/openclaw/issues/97680) | 8 | `P1`, `maturity:stable`, `🦞 diamond lobster` | **Beta update leaves official plugins on `latest`** instead of requested beta tag — version skew |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) | 7 | `P1`, `impact:crash-loop`, `🦞 diamond lobster` | **AgentSelectionRequiredError log flood** — explicit multi-agent ownership missing `agentId` in logbook/Control UI/system-agent |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | 7 | `enhancement`, `P2`, `impact:auth-provider`, `🦞 diamond lobster` | **Self-hosted STT/TTS in webchat** — browser Speech API ignores gateway TTS/STT config |
| [#114020](https://github.com/openclaw/openclaw/issues/114020) | 7 | `P1`, `impact:message-loss`, `🦞 diamond lobster` | **Feishu/Telegram dispatch broken** — `runChannelInboundEvent` requires `runDispatchLifecycle` after 2026.7.2-beta.4 |

**Underlying Needs:**  
- **Reliability > Features**: Top issues are all P1 message-loss, crash-loop, or process-leak bugs — operators need stability for production gateways  
- **Multi-agent maturity**: Explicit ownership mode (`agents.ownership: "explicit"`) exposes gaps in session binding, dispatch, and logging  
- **Channel parity**: Telegram/Feishu/Signal/QQBot all have delivery gaps vs WebChat — platform fragmentation is a tax  
- **Observability**: Log floods, silent truncation, missing telemetry make debugging multi-agent deployments painful  

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical (P0)** | [#108520](https://github.com/openclaw/openclaw/issues/108520) | iOS app update breaks Talk Mode & chat — gateway connects but no functionality | ❌ |
| **Critical (P1)** | [#67777](https://github.com/openclaw/openclaw/issues/67777) | Subagent completion delivery lost on direct-announce timeout/drain/orphan prune | ❌ |
| **Critical (P1)** | [#114020](https://github.com/openclaw/openclaw/issues/114020) | Feishu/Telegram channel dispatch fails: `runChannelInboundEvent` requires `runDispatchLifecycle` | ❌ |
| **Critical (P1)** | [#126360](https://github.com/openclaw/openclaw/issues/126360) | `AgentSelectionRequiredError` floods logs under explicit multi-agent ownership | ❌ |
| **Critical (P1)** | [#97680](https://github.com/openclaw/openclaw/issues/97680) | Beta-tagged update leaves official plugins on `latest` instead of beta tag | [#128904](https://github.com/openclaw/openclaw/pull/128904) |
| **High (P1)** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | Unreaped hook/tool child processes → zombie accumulation & runtime degradation | ❌ |
| **High (P1)** | [#126246](https://github.com/openclaw/openclaw/issues/126246) | Telegram durable outbound stuck in `send_attempt_started`, lost on restart | ❌ |
| **High (P1)** | [#125570](https://github.com/openclaw/openclaw/issues/125570) | Skill Workshop `update` overwrites live skill `description` — breaks skill routing | ❌ |
| **High (P1)** | [#77685](https://github.com/openclaw/openclaw/issues/77685) | Feishu streaming card bugs: final text loss, stale content, duplication | ❌ |
| **High (P1)** | [#93917](https://github.com/openclaw/openclaw/issues/93917) | `genericRepeat` circuit-breaker never fires when exec results vary slightly | ❌ |
| **High (P1)** | [#128889](https://github.com/openclaw/openclaw/issues/128889) | Windows Session Host worker bundle hash verification fails (Unix mode bits) | ❌ |
| **High (P1)** | [#128515](https://github.com/openclaw/openclaw/issues/128515) | Config publication doesn't refresh prepared model owners — `/models` broken until restart | [#128608](https://github.com/openclaw/openclaw/pull/128608) |
| **High (P1)** | [#127728](https://github.com/openclaw/openclaw/issues/127728) | Remote extension pairing: gateway rejects `browser.request` ~10ms after relay start | ❌ |
| **High (P1)** | [#126458](https://github.com/openclaw/openclaw/issues/126458) | Custom `openai-completions` omitted `maxTokens` defaults to 8192; thinking truncates tool-call JSON | ❌ |
| **High (P1)** | [#126900](https://github.com/openclaw/openclaw/issues/126900) | `maxActiveTranscriptBytes` loops compaction forever when compacted transcript stays above threshold | ❌ |
| **Medium (P2)** | [#82020](https://github.com/openclaw/openclaw/issues/82020) | Custom provider sharing `baseUrl` with built-in provider broken (regression from 4.29) | ❌ |
| **Medium (P2)** | [#126016](https://github.com/openclaw/openclaw/issues/126016) | Compaction strict identifier extractor treats decimal fragments as exact IDs → `guard_blocked` | ❌ |
| **Medium (P2)** | [#126521](https://github.com/openclaw/openclaw/issues/126521) | `exec` spawns `zsh` with interactive expansions — `echo ===` fails with `== not found` | ❌ |
| **Medium (P2)** | [#126631](https://github.com/openclaw/openclaw/issues/126631) | Sandbox skills bind-mount creates root-owned `/workspace/.openclaw`, locks out uid 1000 | ❌ |
| **Medium (P2)** | [#50677](https://github.com/openclaw/openclaw/issues/50677) | Skills silently truncated when exceeding token budget — no user warning/prioritization | ❌ |

**Pattern:** Message delivery (Telegram/Feishu/Slack), multi-agent session binding, process lifecycle, and config hot-reload are the top instability vectors. Only 2 of 20 critical/high bugs have fix PRs open.

## 6. Feature Requests & Roadmap Signals

| Issue | Votes | Area | Likelihood for Next Version |
|-------|-------|------|----------------------------|
| [#6757](https://github.com/openclaw/openclaw/issues/6757) | 👍 2 | Agent-triggered context compaction (self-compact tool) | **High** — P2, agent-autonomy theme, fits beta cycle |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | 👍 2 | Self-hosted STT/TTS provider support in webchat | **High** — P2, `🦞 diamond lobster`, clear UX gap |
| [#45771](https://github.com/openclaw/openclaw/issues/45771) | 👍 2 | Built-in pace-aware rate limiting for autonomous agents | **Medium** — P3, but growing need with autonomous loops |
| [#77202](https://github.com/openclaw/openclaw/issues/77202) | 👍 1 | Signal channel: live tool-call progress (edit

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Open-Source Ecosystem (2026-08-25)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **high fragmentation with converging technical priorities**. Thirteen active projects span from feature-rich platforms (OpenClaw, Hermes, IronClaw) to specialized toolchains (NanoBot, Moltis, ZeroClaw) and minimalist CLIs (ZeptoClaw, TinyClaw). Most projects are in **active stabilization phases**—prioritizing reliability (message delivery, process lifecycle, session persistence) over new features. A clear trend toward **multi-agent architectures**, **provider neutrality**, **sandbox isolation**, and **standardized APIs (OpenAI Chat Completions, ACP)** is visible across 8+ projects. Daily/weekly release cadences (Moltis, NanoClaw, OpenClaw betas) indicate mature CI/CD, while several projects (NullClaw, PicoClaw, ZeptoClaw) operate at lower velocity with focused scopes.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Velocity Tier |
|---------|--------------|-----------|----------------|--------------|---------------|
| **OpenClaw** | 500 updated (475 open) | 500 updated (422 open) | **v2026.8.1-beta.3** today | 🟡 Active but fragile | **Extreme** |
| **ZeroClaw** | 50 updated (43 open) | 50 updated | No release (last not in window) | 🟡 Active with critical debt | **Very High** |
| **Hermes Agent** | 50 updated (48 open) | 50 updated (39 open) | v0.20.5 (2026-08-19) | 🟡 Active but fragile | **High** |
| **IronClaw** | 24 updated | 35 updated (17 merged) | v1.3.0 stable | 🟢 Healthy active | **High** |
| **NanoClaw** | Not specified | 21 updated (3 merged) | **v2.3.0** (2026-08-24) | 🟢 Healthy active | **High** |
| **Moltis** | 2 closed | 19 updated (16 merged) | **20260824.01** (daily) | 🟢 Healthy active | **High** |
| **NanoBot** | 8 new | 26 updated (12 merged) | Accumulating for batch | 🟢 Healthy active | **High** |
| **PicoClaw** | 2 updated | 3 updated (2 merged) | None recent | 🔵 Stable maintenance | **Moderate** |
| **NullClaw** | 2 new | 1 dependabot | None recent | 🔵 Stable maintenance | **Low** |
| **ZeptoClaw** | 1 new | 0 | None recent | 🔵 Quiet maintenance | **Minimal** |
| **TinyClaw** | 0 | 0 | None | ⚪ Dormant | **None** |
| **LobsterAI** | — | — | — | ⚪ Unknown (summary failed) | — |
| **CoPaw** | — | — | — | ⚪ Unknown (summary failed) | — |

**Velocity Tiers**: Extreme (>100 total updates), High (20–100), Moderate (5–20), Low (<5), Minimal (1), None (0), Dormant (0 sustained).

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Scale & Breadth**: Largest issue/PR volume (500 each/24h) — indicates broadest contributor base and most integration surface (channels, models, runtimes).
- **Multi-Agent Maturity**: Explicit ownership mode (`agents.ownership: "explicit"`) and subagent delivery semantics are production-hardened compared to Hermes/IronClaw's emerging implementations.
- **Channel Parity**: Supports 10+ channels (WebChat, Telegram, Feishu, Slack, Signal, QQBot, etc.) — wider than NanoClaw (Slack/Dial/Mattermost), Moltis (WhatsApp/Slack), or IronClaw (Telegram/Slack/Gmail).
- **Model Agnosticism**: First-class GPT-5.6 family support (Sol/Terra/Luna/Ultra) + Codex + Claude CLI OAuth — broader than provider-specific projects.

### Technical Approach Differences
| Dimension | OpenClaw | Hermes | IronClaw | NanoClaw | Moltis |
|-----------|----------|--------|----------|----------|--------|
| **Architecture** | Gateway + runtime separation; CDP relay for browser | Unified desktop + remote gateway | Rust core + WebUI; sandbox egress proxy | TypeScript/Node; provider abstraction layer | Python; daily releases; OAuth-first providers |
| **Multi-Agent** | Explicit ownership + session binding | Background subagents (R2) | Subagent receipts + healing | Agent templates from chat | Not a focus |
| **Sandbox** | Hook/tool process trees (tsgo watchdog) | Apple Container / Docker / Coder | Manifest-declared credentials via proxy | Apple Container driver (experimental) | Apple Container + Coder + Browserless |
| **API Standard** | Proprietary + CDP relay | ACP (Agent Client Protocol) | Proprietary + IronHub RPC | OpenAI Chat Completions (RFC #8603) | OpenAI-compatible tool schemas |

### Community Size Comparison
- **OpenClaw**: Largest observable community (18 comments on release validation issue, diamond lobster 🦞 label = veteran contributors).
- **Hermes/IronClaw/ZeroClaw**: Strong core teams (XL/distinguished contributor PRs) but fewer public discussion threads.
- **NanoBot/Moltis**: Active external contributors (vendor PRs, community i18n) — healthier external participation ratio.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Provider Neutrality / Abstraction** | OpenClaw, NanoClaw, ZeroClaw, NanoBot, Moltis, IronClaw | Unified provider contracts (NanoClaw #2361, #2337), OAuth for all majors (Moltis xAI, NanoBot QwenCloud), OpenAI Chat Completions compatibility (ZeroClaw RFC #8603), typed usage contracts (NanoBot #5480). |
| **Multi-Agent / Subagent Reliability** | OpenClaw, Hermes, IronClaw, ZeroClaw | Subagent completion delivery (OpenClaw #67777), background mode receipts (IronClaw #7818), TaskRecord lifecycle owner (ZeroClaw #9726), subagent transcript persistence (NanoBot #5291). |
| **Sandbox Isolation & Credential Safety** | Hermes, IronClaw, NanoClaw, Moltis, ZeroClaw | Apple Container driver (NanoClaw #3503, Moltis #1237), manifest-declared egress credentials (IronClaw #7810), filesystem confinement (ZeroClaw #9977), Coder remote workspaces (Moltis #1199). |
| **Session Persistence & Recovery** | OpenClaw, Hermes, NanoBot, ZeroClaw, IronClaw | Crash-safe task ledgers (NanoBot #5511), durable host coordination (NanoClaw #3508), session restore across devices (Hermes #93888), log storage regression fixes (ZeroClaw #10073). |
| **Observability & Debugging** | OpenClaw, NanoBot, ZeroClaw, IronClaw, Hermes | Unified usage backend (NanoBot #5481), provider-call accounting (ZeroClaw #10143), Langfuse tracing (NanoBot #5520), deterministic tool catalogs (Hermes #94277), CI gate traceability (ZeroClaw #9512). |
| **Onboarding / Config UX** | OpenClaw, NanoBot, PicoClaw, IronClaw, ZeroClaw | Control UI first-run (OpenClaw beta.3), schema-driven `/config` TUI/WebUI (NanoBot #5498, #5497), WebUI for non-technical users (PicoClaw #806), per-profile passcode (Hermes #94322), config i18n (ZeroClaw #9363). |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architectural Signature |
|---------|---------------|-------------|-------------------------|
| **OpenClaw** | **Enterprise gateway platform** — multi-tenant, multi-channel, model-agnostic gateway with Control UI | Org operators, platform builders | Gateway/runtime separation; CDP relay; explicit multi-agent ownership; beta release train |
| **Hermes Agent** | **Desktop-first personal agent** — skill auto-creation, remote sync, local-first UX | Power users, developers | Skill auto-creation + sync; ACP protocol; unified deadline layer (architectural); desktop/WebUI dual surface |
| **IronClaw** | **Developer productivity agent** — GSuite/Slack/Telegram integrations, sandbox egress auth, design system | Developers, tech teams | Rust core + WebUI; iron-proxy credential broker; nextest CI; automation preflight; Storybook design system |
| **NanoClaw** | **Multi-channel agent platform** — Slack/Dial/Mattermost parity, provider switching, agent templating | Teams, community managers | Per-agent Slack apps; Codex/Claude parity; Apple Container driver; agent templates from chat |
| **Moltis** | **Daily-release automation bot** — WhatsApp/Slack, browser automation, OAuth providers, i18n | Automation builders, multilingual users | Date-based daily releases; Obscura stealth browser; device-code OAuth (xAI, Codex); zh-TW i18n |
| **NanoBot** | **Local-first agent framework** — SQLite FTS5, conditional triggers, TUI/WebUI unified config | Developers, self-hosters | SQLite session store + FTS5; ConditionalTriggerRuntime (token-free); unified config editor; timezone-aware tests |
| **ZeroClaw** | **Runtime correctness & interoperability** — Chat Completions API, TaskRecord lifecycle, filesystem confinement | Platform integrators, tool builders | RFC-driven (Chat Completions, single-tool rounds); TaskRecord owner-bound settlement; Nix/CI rigor |
| **PicoClaw** | **Lightweight TUI/WebUI agent** — Slack/Telegram, config security, WebUI roadmap | Embedded/IoT, non-technical via WebUI | Security-first config (`.security.yml`); Exa search provider; WebUI as priority roadmap |
| **NullClaw** | **Minimal self-hosted gateway** — Firecrawl search, pairing token observability | Self-hosters, air-gapped | Alpine Docker; hardcoded endpoint removal; pairing token recovery |
| **ZeptoClaw** | **Minimal REPL agent** — CLI ergonomics, safe interrupts | CLI enthusiasts | REPL UX hardening (Ctrl+C/D, `/` help); zero other features |
| **TinyClaw** | (Dormant) | — | — |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (Stabilization Phase)** | OpenClaw, ZeroClaw, Hermes, IronClaw, NanoClaw, Moltis, NanoBot | Daily/weekly releases; 20–500 PRs/day; P1 bug backlogs; architectural RFCs merging; security hardening sprints. |
| **Stable Maintenance** | PicoClaw, NullClaw | Low PR volume; focused bug fixes (config validation, Slack media); high-priority roadmap items (WebUI) with community support but slow execution. |
| **Quiet / Niche** | ZeptoClaw | Single UX issue; no PR activity; maintainer-only. |
| **Dormant / Unknown** | TinyClaw, LobsterAI, CoPaw | No activity or summary failure. |

**Maturity Indicators**:
- **Release Discipline**: Moltis (daily), NanoClaw (major + patches), OpenClaw (beta train) > Hermes (monthly), IronClaw (periodic).
- **CI/CD Investment**: IronClaw (nextest, composite actions), ZeroClaw (Nix, bespoke gates), NanoBot (Windows flake fixes), Moltis (84% merge rate).
- **Governance**: ZeroClaw (RFC tracker #8692), IronClaw (APDD Kit eval), Hermes (maintainer decision queue).

---

## 7. Trend Signals for AI Agent Developers

1. **Standardization Pressure**: 5+ projects implementing **OpenAI Chat Completions compatibility** (ZeroClaw RFC, Moltis OpenAI-safe schemas, NanoClaw provider abstraction) — *build integrations against this interface*.
2. **Multi-Agent is Production Reality**: Explicit ownership, subagent receipts, background healing — *design for agent hierarchies from day one*.
3. **Sandbox = Credential Broker**: Manifest-declared

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-25

## 1. Today's Overview

NanoBot shows **high development velocity** with 26 PRs updated and 8 new issues filed in the last 24 hours. The project is in active feature development and bug-fixing mode, with **12 PRs merged/closed** today alone—indicating strong maintainer throughput. No new release was cut, suggesting changes are accumulating for a future batch release. Activity spans provider integrations (QwenCloud, AnySearch, Codex), WebUI stability, agent resilience (task ledger, conditional triggers), search performance (FTS5), and configuration UX unification.

---

## 2. Releases

**No new releases published today.** The latest changes are landing on `main` via merged PRs; expect a version bump once the current batch of provider, WebUI, and agent-runtime work stabilizes.

---

## 3. Project Progress — Merged / Closed PRs Today (12)

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#5507](https://github.com/HKUDS/nanobot/pull/5507) | **feat(session): SQLite FTS5 full-text search index** | Performance / Search | Near-instant session search; async index build with JSONL fallback. Closes #5509. |
| [#5508](https://github.com/HKUDS/nanobot/pull/5508) | **feat(gateway): ConditionalTriggerRuntime for token-free event pre-filtering** | Automation / Cost | Lightweight condition monitors (file watch, JSON match, HTTP probe) wake LLM only on match—eliminates heartbeat polling waste. Closes #5510. |
| [#5514](https://github.com/HKUDS/nanobot/pull/5514) | **fix(webui): clear stale stream state after Gateway reconnect** | WebUI / Stability | Fixes WebUI “spinning forever” after Gateway restart by subscribing to `onRunStatus`. Closes #5512. |
| [#5506](https://github.com/HKUDS/nanobot/pull/5506) | **fix(agent): honor selected project workspace** | Agent / Workspace | Exposes WebUI-selected project as CWD to model; preserves prompt-cache reuse. |
| [#5496](https://github.com/HKUDS/nanobot/pull/5496) | **fix(agent): time out no-tools model requests** | Agent / Reliability | Adds wall-clock timeout to no-tools requests (recovery, finalization) that previously could stall indefinitely. |
| [#5517](https://github.com/HKUDS/nanobot/pull/5517) | **test(exec): remove Windows process timing races** | CI / Windows | Fixes flaky exec tests on Windows by polling for stdout before exit notification. |
| [#5481](https://github.com/HKUDS/nanobot/pull/5481) | **feat(usage): unified provider usage backend** | Observability | Single usage row per provider attempt (including retries/fallbacks) with normalized token/cache semantics. |
| [#5480](https://github.com/HKUDS/nanobot/pull/5480) | **refactor(providers): typed LLMUsage contract** | Provider / Type Safety | Immutable `LLMUsage` type replaces dynamic dicts; normalizes OpenAI, Anthropic, Bedrock boundaries. |
| [#5291](https://github.com/HKUDS/nanobot/pull/5291) | **fix(agent): persist subagent conversation transcripts** | Agent / Debugging | Full subagent tool-call/result/reasoning history now stored for post-run review. |
| [#5349](https://github.com/HKUDS/nanobot/pull/5349) | **fix(tests): pass timezone_name to record_token_usage** | Tests / Determinism | Fixes 5-hour daily test flake caused by UTC vs local timezone mismatch. |
| [#5344](https://github.com/HKUDS/nanobot/pull/5344) | **fix(agent): warn on repeated identical tool calls** | Agent / Loop Detection | Adds repeat-detection with warning instead of silent `max_iterations` burn. |
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) | **feat(heartbeat): model_override for cheaper heartbeat model** | Cost Optimization | Allows separate, cheaper model for heartbeat/notification evaluation. |

**Net advancement:** Search performance, automation cost reduction, WebUI stability, agent crash-safety, provider observability, and Windows CI reliability all moved forward today.

---

## 4. Community Hot Topics (Most Active Issues / PRs)

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#5350](https://github.com/HKUDS/nanobot/issues/5350) | Issue | 2 | **Backward-compatible QwenCloud provider** alongside DashScope—users have existing DashScope configs/keys/endpoints that must keep working. |
| [#5512](https://github.com/HKUDS/nanobot/issues/5512) | Issue | 1 | **WebUI stalls after Gateway restart**—fixed by #5514 (merged). |
| [#5498](https://github.com/HKUDS/nanobot/pull/5498) | PR | — | **Unified onboarding in Agent TUI**—schema-driven `/config` surface with optimistic revisions & secret-safe snapshots. |
| [#5497](https://github.com/HKUDS/nanobot/pull/5497) | PR | — | **Shared complete editor contract**—transport-neutral config editor with secret redaction/replacement, shared storage with WebUI. |
| [#5505](https://github.com/HKUDS/nanobot/issues/5505) | Issue | 0 (new) | **AnySearch integration**—vendor-proposed web search provider (key-optional, anonymous quota). |

**Signal:** Provider migration paths (DashScope→QwenCloud), configuration UX consolidation, and third-party search integration are top-of-mind for contributors and external vendors.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue / PR | Description | Fix Status |
|----------|------------|-------------|------------|
| **High** | [#5512](https://github.com/HKUDS/nanobot/issues/5512) | WebUI chat spins indefinitely after Gateway restart—no `goal_status: idle` push received. | **Fixed & merged** via [#5514](https://github.com/HKUDS/nanobot/pull/5514). |
| **High** | [#5496](https://github.com/HKUDS/nanobot/pull/5496) | No-tools model requests (recovery/finalization) had no timeout—could stall turn indefinitely. | **Fixed & merged**. |
| **Medium** | [#5516](https://github.com/HKUDS/nanobot/issues/5516) | Telegram rich messages never render when streaming enabled; `sendRichMessage` skipped. | **Open**—needs Bot API 10.1-10.3 draft support. |
| **Medium** | [#5515](https://github.com/HKUDS/nanobot/pull/5515) | Session-reply timeout task failures unobserved—silent discards could mask bus errors. | **Open PR**—adds failure observation + regression test. |
| **Medium** | [#5344](https://github.com/HKUDS/nanobot/pull/5344) | Agent silently spirals on repeated identical tool calls—burns `max_iterations` with no signal. | **Open PR**—adds repeat detection & warning. |
| **Low** | [#5349](https://github.com/HKUDS/nanobot/pull/5349) | Settings tests flaky ~5 hrs/day due to `timezone_name` defaulting to UTC. | **Fixed & merged**. |

**Stability takeaway:** Critical WebUI reconnect bug resolved same-day; agent loop-detection and timeout gaps being actively closed.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **QwenCloud provider (backward-compatible)** | [#5350](https://github.com/HKUDS/nanobot/issues/5350) | High—clear migration path, vendor interest. |
| **AnySearch web search provider** | [#5505](https://github.com/HKUDS/nanobot/issues/5505) | High—vendor-submitted, key-optional, fits `web_search` tool. |
| **Crash-safe task ledger for multi-step agents** | [#5511](https://github.com/HKUDS/nanobot/issues/5511) | Medium—design proposed (`tasks.json` + atomic writes), no PR yet. |
| **Cron results → configurable channels + batch archive** | [#5513](https://github.com/HKUDS/nanobot/issues/5513) | Medium—operational need, no PR yet. |
| **Langfuse tracing for Codex provider** | [#5520](https://github.com/HKUDS/nanobot/pull/5520) | High—PR open, follows existing OpenAI-compatible pattern. |
| **Unified TUI/WebUI config editor** | [#5497](https://github.com/HKUDS/nanobot/pull/5497), [#5498](https://github.com/HKUDS/nanobot/pull/5498) | High—two stacked PRs, 241 tests passing, schema-driven. |

**Roadmap prediction:** Next release will likely ship FTS5 search, ConditionalTriggerRuntime, unified config editor, QwenCloud provider, AnySearch, and Codex Langfuse tracing. Task ledger and cron routing may slip to following cycle.

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence |
|------------------------|----------|
| **WebUI unreliability after Gateway restart** | #5512: “frontend never receives final `goal_status: idle` … turn appears hung.” |
| **Provider lock-in / migration friction** | #5350: Existing DashScope configs/keys/endpoints “still in active use”—need dual-path support. |
| **Telegram rich messaging broken with streaming** | #5516: `rich_messages: true` + `streaming: true` mutually exclusive; final message falls back to legacy HTML. |
| **Automation noise in personal chats** | #5513: Cron results delivered to creation chat—“mixes automation noise into personal conversations.” |
| **Agent progress lost on restart** | #5511: “Gateway restart loses all in-memory progress… users must manually re-state the task.” |
| **Heartbeat polling too expensive** | #5510: “Burns a full LLM turn on every tick, even when nothing meaningful to do.” |
| **Session search slow at scale** | #5509: “Fully scans JSONL store on every query… slow with hundreds of sessions.” |
| **Windows CI flakiness** | #5517: Process timing races causing test failures. |

**Satisfaction signals:** Rapid fix turnaround (#5512→#5514 same day), vendor willingness to contribute (#5505), and consistent test investment suggest engaged, responsive maintainers.

---

## 8. Backlog Watch — Long-Unanswered / Stalled Items Needing Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) **feat(heartbeat): model_override** | Opened 2026-06-26 (60 days) | Open, conflict labels | Cost-saving feature for heartbeat; blocked by conflicts—needs rebase/review. |
| [#5291](https://github.com/HKUDS/nanobot/pull/5291) **fix(agent): persist subagent transcripts** | Opened 2026-08-07 (18 days) | Open, conflict labels | Debugging/audit capability for subagents; ready but conflicted. |
| [#5344](https://github.com/HKUDS/nanobot/pull/5344) **fix(agent): warn on repeated tool calls** | Opened 2026-08-11 (14 days) | Open, conflict labels | Prevents silent budget burn; conflict-labeled, needs maintainer merge. |
| [#5349](https://github.com/HKUDS/nanobot/pull/5349) **fix(tests): timezone_name** | Opened 2026-08-12 (13 days) | **Merged today** | ✅ Resolved. |
| [#5350](https://github.com/HKUDS/nanobot/issues/5350) **QwenCloud provider** | Opened 2026-08-12 (13 days) | Open, 2 comments | Vendor/community request; no PR yet—good first-issue candidate. |
| [#5516](https://github.com/HKUDS/nanobot/issues/5516) **Telegram rich messages + streaming** | Opened 2026-08-24 (1 day) | Open, 0 comments | New but affects Telegram power users; Bot API 10.1-10.3 draft may unblock. |

**Action items for maintainers:**
1. Resolve conflicts on #4549, #5291, #5344 to unblock merged features.
2. Assign/triage #5350 (QwenCloud) and #5516 (Telegram) for implementation.
3. Monitor #5511 (task ledger) and #5513 (cron routing) for community PRs or internal scheduling.

---

*Digest generated from GitHub data as of 2026-08-25 00:00 UTC. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-25

## 1. Today's Overview
Hermes Agent shows **high velocity with 100 total updates** (50 issues, 50 PRs) in the last 24 hours, indicating an actively maintained project. The 48:2 open-to-closed issue ratio and 39:11 open-to-merged PR ratio suggest a growing backlog with steady fix throughput. No new releases were published today. Activity clusters around **session stability**, **desktop reliability**, **update/install safety**, and **architectural timeout fixes** — signaling a stabilization push before the next release.

## 2. Releases
**No new releases today.** The latest version remains v0.20.5 (2026-08-19). Several merged PRs today (#48069, #59499, #94318) contain fixes likely destined for v0.20.6 or v0.21.0.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#48069](https://github.com/NousResearch/hermes-agent/pull/48069) | **Bug Fix** | Skip MCP keepalive during in-flight calls; fail orphaned calls on reconnect | Prevents agent hangs up to `tool_timeout` (hours) when MCP stdio calls race with keepalive |
| [#59499](https://github.com/NousResearch/hermes-agent/pull/59499) | **Bug Fix** | Kanban dispatcher now respects `max_in_progress_per_profile` and `daemon --max` flag | Stops resource exhaustion from concurrent Chrome MCP browser automation tasks |
| [#94318](https://github.com/NousResearch/hermes-agent/pull/94318) | **Feature** | Optional `skill-sync` skill: sync `~/.hermes/skills/` via SSH/Tailscale with guided setup | Enables skill portability across machines — addresses a major user pain point |
| [#92701](https://github.com/NousResearch/hermes-agent/pull/92701) | **Bug Fix** | Docker backend: sanitize `task_id` colons causing `exit 125 "too many colons"` | Unblocks persistent sandbox on Windows where `task_id` contains colons |

**Net progress**: 4 PRs merged/closed today — all high-impact stability or user-experience fixes.

## 4. Community Hot Topics — Most Active Issues/PRs
| Item | Comments | Core Need |
|------|----------|-----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index stale (91 💬) | **Automated freshness probe failing** — skills index 29.8h old (limit 26h). The `/docs/skills` hub depends on `/docs/api/skills-index.json` rebuilt by cron workflows. | **Infrastructure reliability**: Docs/skills discovery broken; blocks new users from finding skills. |
| [#85125](https://github.com/NousResearch/hermes-agent/issues/85125) Unified deadline layer (20 💬) | **Architectural fix for 400+ timeout/hang issues** collapsed into 7 mechanisms. Proposes 4-phase deadline layer to eliminate structural root causes. | **Systemic stability**: Timeout/hang bugs are the #1 backlog category; needs architectural investment. |
| [#25833](https://github.com/NousResearch/hermes-agent/issues/25833) Self-created skills lack guarantees (10 💬) | Auto-created skills have no mechanism-level correctness/execution consistency guarantees. | **Skill trustworthiness**: Core differentiating feature (skill auto-creation) lacks runtime safety. |
| [#93888](https://github.com/NousResearch/hermes-agent/issues/93888) Desktop session restore broken (7 💬) | Desktop sends local 8-char runtime ID to Remote Gateway; stored sessions cannot be restored. | **Remote/desktop sync**: Core multi-device workflow broken on `main`. |
| [#90229](https://github.com/NousResearch/hermes-agent/issues/90229) Desktop file tree stuck on skeleton (6 💬) | Right-sidebar workspace tree renders skeleton indefinitely on Windows 11 boot; refresh button disabled. | **Desktop UX polish**: First-impression breakage on Windows. |

**Pattern**: Top issues are **infrastructure/tooling reliability** (skills index, session restore, file tree) and **architectural debt** (timeout backlog, skill guarantees) — not new feature requests.

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **P1 — Crash/Lockout** | [#94248](https://github.com/NousResearch/hermes-agent/issues/94248) Gateway SIGSEGV 17–72ms after delegate deadlines with Codex SSL reads (macOS arm64) | Open | [#94313](https://github.com/NousResearch/hermes-agent/pull/94313) — defers hard-close during SSL read |
| **P1 — Update Safety** | [#92145](https://github.com/NousResearch/hermes-agent/issues/92145) `hermes update` leaves services on stale `sys.modules` on ImportError abort | Open | [#94287](https://github.com/NousResearch/hermes-agent/pull/94287) — rejects unsafe stash restores |
| **P1 — Update Safety** | [#94264](https://github.com/NousResearch/hermes-agent/issues/94264) Update restores invalid Python, reports success, agents fail every turn | Open | [#94287](https://github.com/NousResearch/hermes-agent/pull/94287) (same PR) |
| **P2 — Session Corruption** | [#94260](https://github.com/NousResearch/hermes-agent/issues/94260) Applying saved layout remounts baked-in session tiles → `ws_orphan_reap` + agent init fail | Open | None yet |
| **P2 — Session Corruption** | [#94258](https://github.com/NousResearch/hermes-agent/issues/94258) SQLite `SystemError` (NULL without exception) not handled by retry path | Open | None yet |
| **P2 — Desktop** | [#93888](https://github.com/NousResearch/hermes-agent/issues/93888) Desktop sends local runtime ID to Remote Gateway → cannot restore sessions | Open | None yet |
| **P2 — Desktop** | [#90229](https://github.com/NousResearch/hermes-agent/issues/90229) File tree stuck on skeleton forever on Windows 11 boot | Open | None yet |
| **P2 — Windows/Terminal** | [#94304](https://github.com/NousResearch/hermes-agent/issues/94304) `init_session` never completes under `hermes acp` on Windows (external binaries hang) | Open | [#94315](https://github.com/NousResearch/hermes-agent/pull/94315) — bounds Git Bash startup probes |
| **P2 — Config** | [#94254](https://github.com/NousResearch/hermes-agent/issues/94254) Email channel cannot be disabled via dashboard | Open | None yet |
| **P3 — Accessibility** | [#93836](https://github.com/NousResearch/hermes-agent/issues/93836) Desktop text contrast below WCAG AA (3.47:1, 2.16:1) | Open | [#93836](https://github.com/NousResearch/hermes-agent/pull/93836) — raises tokens to 4.5:1 |

**Critical cluster**: **Update/install safety** (3 P1s) and **session state corruption** (3 P2s) dominate today's high-severity bugs. Fix PRs exist for 5/10.

## 6. Feature Requests & Roadmap Signals
| Request | Signals | Likelihood for Next Version |
|---------|---------|----------------------------|
| [#85125](https://github.com/NousResearch/hermes-agent/issues/85125) Unified deadline layer (4-phase architectural fix) | 20 comments, labeled `needs-decision`, `innovation`; addresses 400+ timeout issues | **High** — architectural priority, but multi-phase; Phase 1 may land soon |
| [#94322](https://github.com/NousResearch/hermes-agent/pull/94322) Per-profile passcode lock (PR opened today) | Fixes #94028; privacy gate for shared machines; UI-level only | **High** — PR open today, focused scope, clear user need |
| [#94277](https://github.com/NousResearch/hermes-agent/pull/94277) Deterministic tool capability catalog | `needs-decision`; audit/CI diffs, redacted JSON inventory, opt-in probing | **Medium** — depends on design review; useful for enterprise/compliance |
| [#90654](https://github.com/NousResearch/hermes-agent/issues/90654) In-app browser: element picker + agent page actions | RFC stage; closes loop on browser as agent surface | **Medium** — leverages existing seams; desktop-focused |
| [#5114](https://github.com/NousResearch/hermes-agent/issues/5114) Autoresearch skill: autonomous git-based experiment loop | 7 comments; ML optimization/knowledge research use case | **Low** — niche, requires skill system maturity first |
| [#7895](https://github.com/NousResearch/hermes-agent/issues/7895) OpenWebUI image integration (3 👍) | Images generated but not sent via OpenAI protocol | **Medium** — integration parity, community demand |

**Roadmap read**: Next version (v0.20.6/v0.21.0) will likely ship **update safety fixes**, **session stability patches**, **per-profile passcode**, and **skill-sync**. The deadline layer (#85125) is a multi-release effort.

## 7. User Feedback Summary — Pain Points & Use Cases
| Theme | Evidence | Sentiment |
|-------|----------|-----------|
| **Session/remote sync broken** | #93888 (Desktop ↔ Remote Gateway), #94260 (layout restore corrupts sessions), #94001 (cross-session context contamination) | 😡 **High frustration** — core multi-device workflow fails |
| **Update/install fear** | #92145, #94264, #94058 (Linux desktop entry breaks after upgrade) | 😰 **Anxiety** — updates can brick agents or launchers |
| **Desktop polish gaps** | #90229 (file tree skeleton), #91245 (right rail dead at boot), #92818 (layout instability), #82654 (Wayland hotkey) | 😕 **Disappointment** — first-run experience unreliable on Windows/Linux |
| **Skill system trust** | #25833 (auto-skills lack guarantees), #66616 (skills index stale), #94318 (skill-sync merged — positive) | 🤔 **Skepticism → Hope** — skill portability addresses biggest gap |
| **Timeout/hang fatigue** | #85125 (400+ issues), #94305 (wedged poll disables all timers), #48069 (MCP keepalive hangs) | 😮‍💨 **Exhaustion** — systemic, not isolated |

**Notable positive**: #94318 (skill-sync) merged today — direct response to "skills trapped on one machine" pain. #94322 (passcode lock) opened today — addresses shared-machine privacy.

## 8. Backlog Watch — Stale High-Value Items Needing Attention
| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#85125](https://github.com/NousResearch/hermes-agent/issues/85125) Unified deadline layer | 12 days | Eliminates 400+ timeout/hang bugs structurally; 7 root mechanisms identified | `needs-decision` — requires architectural sign-off & phased plan |
| [#25833](https://github.com/NousResearch/hermes-agent/issues/25833) Self-created skill guarantees | 103 days | Core differentiator (auto-skills) lacks correctness/execution consistency | `needs-decision` — needs runtime verification design |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index stale | 38 days | Blocks skill discovery for all users; automated probe failing | Infra/workflow fix — cron vs deploy-site.yml coordination |
| [#5114](https://github.com/NousResearch/hermes-agent/issues/5114) Autoresearch skill | 143 days | Autonomous ML/research loop; high-value for power users | Depends on skill system maturity & git integration |
| [#38072](https://github.com/NousResearch/hermes-agent/issues/38072) Desktop accessibility audit (referenced in #93838) | Unknown | 5 findings fixed in #93838; more may remain | Incremental — a11y PRs landing but audit root issue not in today's data |

**Maintainer action suggested**: 
1. **Triage #85125** — deadline layer is the highest-leverage stability investment.
2. **Resolve #66616** — skills index is user-facing documentation infrastructure.
3. **Review #25833** — skill auto-creation is a flagship feature needing safety rails.

---

**Overall Health**: 🟡 **Active but fragile** — High velocity on fixes, but P1/P2 bugs cluster in update/session/desktop paths that affect every user. Architectural debt (timeouts, skill guarantees) is acknowledged but not yet resourced. Next release quality hinges on landing today's safety PRs (#94287, #94313, #94315) and not regressing desktop/session flows.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-25

## 1. Today's Overview
PicoClaw shows moderate maintenance activity with **2 issues** and **3 pull requests** updated in the last 24 hours. No new releases were published. The project is actively addressing configuration bugs and merging legacy fixes, while a high-priority roadmap item (WebUI) remains in active discussion. One stale PR (Exa search provider) has lingered for a month without review. Overall health appears stable but with a growing backlog of unreviewed contributions.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress
**Merged/Closed PRs today:**
- **#1929** — **Fixed**: Config validation now applies security credentials (`.security.yml`) before validation in web handlers. Resolves false `"channels.pico.token is required"` errors when tokens exist in security store. [[PR #1929](https://github.com/sipeed/picoclaw/pull/1929)]
- **#1551** — **Merged**: Roll-up merge of fixes from PRs #1428, #1422, #1417 (details in linked PRs). [[PR #1551](https://github.com/sipeed/picoclaw/pull/1551)]

**Open PR still active:**
- **#3299** (stale) — Adds native Exa web search provider (`tools.web` / `web_search`) with API key auth and date-range filters. Awaiting review since 2026-07-26. [[PR #3299](https://github.com/sipeed/picoclaw/pull/3299)]

## 4. Community Hot Topics
| Item | Type | Engagement | Signal |
|------|------|------------|--------|
| **#806** | Enhancement / Roadmap | 10 comments, 8 👍 | **Strong demand for WebUI** to lower entry barrier for non-technical users. TUI serves power users; browser-based UI seen as essential for broader adoption. Active discussion on scope and implementation approach. [[Issue #806](https://github.com/sipeed/picoclaw/issues/806)] |
| **#3338** | Bug (Slack) | 1 comment, 0 👍 | Slack media uploads fail due to missing `FileSize` in `UploadFileParameters`. Blocks media-rich Slack integrations. [[Issue #3338](https://github.com/sipeed/picoclaw/issues/3338)] |

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | Slack `SendMedia` fails with `file size cannot be 0` — SDK rejects upload before network call due to unset `FileSize` | Open, unassigned | None yet |
| **Medium** | Web config save (PUT/PATCH `/api/config`) incorrectly validates security-managed fields before credentials are applied | **Fixed** in #1929 | [#1929](https://github.com/sipeed/picoclaw/pull/1929) (closed) |

## 6. Feature Requests & Roadmap Signals
- **WebUI (Issue #806)** — Explicitly tagged `priority: high` and `type: roadmap`. Author notes "Refactoring now", suggesting active work. Likely candidate for next major/minor release.
- **Exa Search Provider (PR #3299)** — Complete implementation with config support. If reviewed/merged, would expand `tools.web` provider options beyond existing ones.

## 7. User Feedback Summary
- **Pain point**: Non-technical users struggle with TUI-only management; WebUI requested as primary onboarding path.
- **Integration breakage**: Slack media sharing is non-functional, impacting teams using PicoClaw for Slack bots.
- **Configuration friction**: Users hit misleading validation errors when secrets live in `.security.yml` (now fixed in #1929).
- **Sentiment**: Positive engagement on WebUI (+8 👍, 10 comments) indicates community alignment with roadmap direction.

## 7. Backlog Watch — Needs Maintainer Attention
| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| **PR #3299** (Exa provider) | 30 days | Stale contribution; feature-complete but unreviewed | Expands search capabilities; contributor may disengage |
| **Issue #806** (WebUI) | 6 months | High-priority roadmap item with active discussion but no linked PR | Core usability initiative; lack of visible progress may erode confidence |
| **Issue #3338** (Slack media) | 8 days | Regression in Slack integration; no fix PR | Affects production Slack bots; simple fix (set `FileSize`) likely |

---

**Data Source**: GitHub API (sipeed/picoclaw) — Issues & PRs updated 2026-08-24 → 2026-08-25.  
**Next Digest**: 2026-08-26.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-25

---

## 1. Today's Overview

NanoClaw shows **high development velocity** with 21 PRs updated and a major v2.3.0 release in the last 24 hours. The project is actively expanding its channel integrations (Slack, Mattermost, Dial), improving durability of host coordination, and addressing platform-specific stability issues. Core team members are driving multiple parallel feature tracks including agent templating, provider abstraction, and macOS update reliability. The closed PRs (#2474, #2475) indicate progress on the Codex/Claude Code provider parity initiative started in May.

---

## 2. Releases

### **v2.3.0** — *Released 2026-08-24*
**[GitHub Release](https://github.com/nanocoai/nanoclaw/releases/tag/v2.3.0)**

**Breaking Change — Slack Experience Redesign**
- **Per-agent provisioned Slack apps** — each agent now gets its own Slack app instead of sharing a single bot
- **Agent spawning from Slack** — users can create new agents directly via Slack interactions
- **UX improvements** across the Slack integration surface

**Migration Notes:**
- Classic single-bot Slack installs **continue working unchanged** — this is an opt-in gate, not a forced migration
- New installs and non-Slack installations default to the new experience
- Existing deployments can migrate at their own pace

---

## 3. Project Progress (Merged/Closed Today)

| PR | Type | Summary |
|----|------|---------|
| [#2474](https://github.com/nanocoai/nanoclaw/pull/2474) | **Feature** | AI-coding-CLI picker — setup flow can now hand off tasks to **Claude Code or OpenAI Codex** (with framework for Aider/Gemini-CLI) |
| [#2475](https://github.com/nanocoai/nanoclaw/pull/2475) | **Feature** | Codex provider parity — Codex agents now receive same **persona + skill catalog** as Claude Code agents |
| [#2767](https://github.com/nanocoai/nanoclaw/issues/2767) | **Fix** (Issue closed) | Telegram legacy-Markdown sanitizer removed — upstream `@chat-adapter/telegram@4.30.0` now uses native MarkdownV2 |

**Key Advancement:** The Codex provider parity work (PRs #2474, #2475, plus ongoing #2361, #2337) represents a **multi-month effort to make provider switching a config change** rather than a content rewrite.

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3508](https://github.com/nanocoai/nanoclaw/pull/3508) `feat(db): durable host-coordination state` | Core-team PR, 0 comments but **architectural significance** | **Operational durability** — survive host restarts without losing approval waiters, delivery retries, stop/respawn intent, stale finishers |
| [#3396](https://github.com/nanocoai/nanoclaw/pull/3396) `feat: create agents from templates in chat` | Core-team, updated 2026-08-24 | **Self-service agent creation** — users want to spawn specialized agents from templates via chat (Slack/Dial) without CLI |
| [#3507](https://github.com/nanocoai/nanoclaw/pull/3507) `feat(channels): add Mattermost installation skill` | Core-team, new channel integration | **Channel parity** — Mattermost joining Slack/Dial as first-class chat surfaces |
| [#3503](https://github.com/nanocoai/nanoclaw/pull/3503) `feat(drivers): Apple Container session driver` | Core-team, macOS microVMs | **Native macOS isolation** — leverage Apple's Container framework as alternative to Docker for session sandboxing |

**Pattern:** Core team is simultaneously advancing **durability**, **multi-channel UX**, **provider neutrality**, and **platform-specific runtime options** — indicating a maturing platform targeting production multi-tenant deployments.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **Critical** | [#3497](https://github.com/nanocoai/nanoclaw/issues/3497) `better-sqlite3 13 segfaults on macOS` | `better-sqlite3@13.0.3` crashes in `new Database()` on Node 22.x < 22.14.0 on macOS. Declared engine `>=22` passes but leaves broken DB layer. Blocks `pnpm test`. | **No fix PR yet** — requires Node version floor bump or dependency workaround |
| **High** | [#3506](https://github.com/nanocoai/nanoclaw/pull/3506) `fix(update): macOS transaction controller` | 6 defects in `/update-nanoclaw` transaction controller on macOS (1 also affects Linux fallback). All hit during real macOS updates. | **Fix PR open** — ready for review |
| **High** | [#3499](https://github.com/nanocoai/nanoclaw/pull/3499) `fix(update): resolve symlinks in path comparisons` | Update controller fails when paths involve symlinks (common on macOS `/var` → `/private/var`). | **Fix PR open** — ready for review |
| **Medium** | [#3505](https://github.com/nanocoai/nanoclaw/pull/3505) `fix: route attachments through selected mailbox mounts` | Attachments not respecting mailbox mount selection. | **Fix PR open** |
| **Medium** | [#3502](https://github.com/nanocoai/nanoclaw/pull/3502) `fix(mattermost): use NanoCo Chat SDK adapter` | Mattermost channel using legacy adapter instead of new SDK. | **Fix PR open** |

**Stability Signal:** macOS update path has **multiple concurrent defects** (#3506, #3499, #3497) — suggests macOS CI coverage gaps. The better-sqlite3 segfault (#3497) is a **release-blocker for macOS users on Node 22.0–22.13**.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Release |
|--------|--------|----------------------------|
| **Agent templates from chat** | [#3396](https://github.com/nanocoai/nanoclaw/pull/3396), [#3428](https://github.com/nanocoai/nanoclaw/pull/3428) | **High** — core-team, Slack flow being ported, template registry design complete |
| **Mattermost as first-class channel** | [#3507](https://github.com/nanocoai/nanoclaw/pull/3507), [#3502](https://github.com/nanocoai/nanoclaw/pull/3502) | **High** — installation skill + SDK adapter both in review |
| **Apple Container driver (macOS microVMs)** | [#3503](https://github.com/nanocoai/nanoclaw/pull/3503) | **Medium** — first overlay for driver seam, experimental but functional |
| **Durable host coordination (DB-backed)** | [#3508](https://github.com/nanocoai/nanoclaw/pull/3508) | **Medium** — "dormant groundwork", seams defined but consumers not yet wired |
| **Codex provider as default alternative** | [#2474](https://github.com/nanocoai/nanoclaw/pull/2474), [#2361](https://github.com/nanocoai/nanoclaw/pull/2361) | **High** — picker merged, provider contracts being tightened |
| **Dial channel visibility in docs** | [#3501](https://github.com/nanocoai/nanoclaw/pull/3501) | **High** — trivial docs update, channel already shipping since #3050 |

**Predicted v2.4.0 themes:** Agent templating UX, Mattermost GA, macOS stability fixes, Codex provider graduation.

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|----------------------|----------|-----------|
| **macOS update failures** | #3506, #3499, #3497 — multiple reporters hitting real update crashes | 😡 **High frustration** — "every defect was hit live while updating a real macOS install" |
| **Node version trap** | #3497 — `better-sqlite3` declares `>=22` but needs `>=22.14.0` | 😕 **Confusion** — engine check passes but runtime fails |
| **Slack UX limitations** | v2.3.0 release notes — "new Slack experience" addresses classic single-bot constraints | 🙂 **Positive** — opt-in migration respects existing deployments |
| **Provider lock-in concern** | #2474, #2475, #2337 — multi-year effort to abstract Claude Code specifics | 🙂 **Relief** — "switching providers becomes a config change" |
| **Channel parity demand** | #3507 (Mattermost), #3501 (Dial docs) — users expect equal treatment across chat platforms | 😐 **Expectation** — "Dial is in setup picker but not in README" |

---

## 8. Backlog Watch (Stale but Important)

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#2361](https://github.com/nanocoai/nanoclaw/pull/2361) `tighten codex provider contracts` | **109 days** (since 2026-05-09) | Blocks Codex provider graduation; replaces stale SDK sketch with current `codex app-server` JSON-RPC contract | Open, core-team authored, no recent movement |
| [#2337](https://github.com/nanocoai/nanoclaw/pull/2337) `surface Claude Code skill catalog to non-Claude providers` | **111 days** (since 2026-05-07) | Foundational for provider neutrality; shared `skill-catalog.ts` helper | Open, core-team authored, no recent movement |
| [#3302](https://github.com/nanocoai/nanoclaw/pull/3302) `fix(onecli): correct default gateway bind address` | **8 days** (since 2026-08-17) | OneCLI gateway binds wrong address — breaks agent↔gateway connectivity in Docker | Open, fixes #2903, needs review |
| [#3432](https://github.com/nanocoai/nanoclaw/pull/3432) `fix(dial): post-merge follow-ups` | **4 days** (since 2026-08-21) | Dial channel credential re-run, step captions, registry CI — cleanup after merge | Open, core-team, blocked on #3396 ordering |

**Maintainer Attention Needed:** The two May PRs (#2361, #2337) are **architectural prerequisites** for the provider abstraction that #2474/#2475 depend on. Their 3.5-month stall suggests either scope creep or review bandwidth constraints.

---

## Health Indicators

| Metric | Assessment |
|--------|------------|
| **Release Cadence** | ✅ Major v2.3.0 with breaking changes shipped |
| **PR Throughput** | ✅ 21 PRs active, 3 closed/merged in 24h |
| **Platform Coverage** | ⚠️ macOS has multiple concurrent update bugs |
| **Technical Debt** | ⚠️ 3-month-old core provider PRs stalled |
| **Documentation Sync** | ✅ Dial channel docs catch-up PR opened same day |
| **Community Contribution** | ✅ External contributors on Mattermost, OneCLI, update fixes |

**Overall:** **Healthy active development** with a **macOS stability regression cluster** needing immediate triage. The provider abstraction work is strategically important but moving slowly.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-25

## 1. Today's Overview
NullClaw saw modest community activity over the past 24 hours with **2 new issues opened** (one enhancement, one bug) and **1 dependabot PR updated**. No releases were published and no PRs were merged. The project remains in active maintenance mode with contributors surfacing real-world usability gaps—particularly around self-hosted integrations and onboarding friction. Overall health appears stable but the backlog of unresolved onboarding issues suggests a need for maintainer triage.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
**No PRs merged or closed today.** The only PR activity is a dependabot update (#956) that remains open.

| PR | Type | Status | Summary |
|----|------|--------|---------|
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | dependencies, docker | OPEN | Bump `alpine` base image from 3.23 → 3.24 in docker-images group (opened 2026-06-15, updated 2026-08-24) |

## 4. Community Hot Topics
**Most active issues today (by recency and potential impact):**

| Issue | Type | Author | Summary | Underlying Need |
|-------|------|--------|---------|-----------------|
| [#993](https://github.com/nullclaw/nullclaw/issues/993) | enhancement | Crymfox | Firecrawl search endpoint hardcoded to `api.firecrawl.dev`; self-hosted instances unusable with native provider | **Self-hosting parity** — users running private Firecrawl deployments need configurable endpoints without forking |
| [#992](https://github.com/nullclaw/nullclaw/issues/992) | bug | heredos | 6-digit pairing token no longer logged to stdout (after #535); only exists in memory, not written to disk | **Onboarding visibility** — operators cannot retrieve pairing code for gateway API setup, blocking configuration |

> **Analysis:** Both issues reflect **operator friction in non-cloud deployments**. #993 is a configuration gap; #992 is a regression in observability introduced by a prior security hardening (#535). These signal growing adoption in self-hosted/air-gapped environments.

## 5. Bugs & Stability
| Issue | Severity | Description | Fix PR? |
|-------|----------|-------------|---------|
| [#992](https://github.com/nullclaw/nullclaw/issues/992) | **High** — blocks gateway API onboarding | Pairing token hidden from logs *and* not persisted to disk; no documented recovery path | No |

> **Note:** This is a **regression** from #535 (which stopped logging secrets). The fix likely requires either: (a) writing token to a configurable file path, (b) adding a `--show-pairing-code` CLI flag, or (c) documenting the in-memory retrieval method.

## 6. Feature Requests & Roadmap Signals
| Issue | Signal | Likelihood for Next Version |
|-------|--------|-----------------------------|
| [#993](https://github.com/nullclaw/nullclaw/issues/993) | **Strong** — single-line config change (`endpoint` constant → env/config variable), high value for self-hosters | **High** — low effort, high impact, aligns with "run anywhere" philosophy |

> **Prediction:** #993 is a strong candidate for the next patch/minor release. #992 may require a patch if it blocks critical deployments.

## 7. User Feedback Summary
| Pain Point | Source | Context |
|------------|--------|---------|
| "Cannot configure Firecrawl for self-hosted instance" | [#993](https://github.com/nullclaw/nullclaw/issues/993) | Hardcoded endpoint forces fork or workaround |
| "Pairing token invisible after security change" | [#992](https://github.com/nullclaw/nullclaw/issues/992) | User spent days debugging; #535 removed stdout logging without alternative |

> **Sentiment:** Frustration with **observability vs. security tradeoff** (#992) and **lack of config flexibility** for enterprise/self-hosted use (#993). No positive feedback captured in this window.

## 8. Backlog Watch
| Item | Age | Type | Why It Needs Attention |
|------|-----|------|------------------------|
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | **71 days** | dependabot PR | Alpine 3.24 update pending; base image bumps should be merged promptly for security/compatibility |
| [#535](https://github.com/nullclaw/nullclaw/issues/535) | *(referenced)* | prior change | Introduced regression (#992); maintainers should audit similar secret-handling changes for observability gaps |

> **Action Items:**
> 1. **Triage #992 urgently** — blocks gateway onboarding
> 2. **Merge #956** — stale dependabot PR with security implications
> 3. **Implement #993** — trivial config change, unblocks self-hosters
> 4. **Audit post-#535 secret handling** — ensure no other tokens/codes are silently dropped

---

*Digest generated from GitHub data as of 2026-08-25. Links point to live issues/PRs on github.com/nullclaw/nullclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-25

## 1. Today's Overview

IronClaw shows **high development velocity** with 35 PRs and 24 issues updated in the last 24 hours. The project is in an active refinement phase with **no new release** but significant progress across CI infrastructure, onboarding suggestions, Telegram integration, and WebUI consistency. A healthy 49% PR merge rate (17/35) indicates steady delivery. Key themes: CI pipeline modernization (multi-track expedite), suggestion flow hardening, Telegram personal account linking gaps, and design system unification. The backlog includes several P0/P1 bugs around error stacking, MCP tool discovery, and sandbox egress auth.

---

## 2. Releases

**No new releases** in the last 24 hours. Current stable appears to be v1.3.0 (referenced in #7742, #7856).

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#7833](https://github.com/nearai/ironclaw/pull/7833) | feat(suggestions): generate over user's no-approval, read-only tools | Onboarding/Suggestions | **Closes #7812** — Suggestions now respect user-level tool permissions and use connected read-only tools (Gmail, etc.) instead of hardcoded allowlist. |
| [#7821](https://github.com/nearai/ironclaw/pull/7821) | ci: single setup-rust composite — toolchain pin, mold, centralized build profiles (T1) | CI/Infrastructure | **Closes #7798** — Replaces 43 scattered `dtolnay/rust-toolchain` invocations with one composite action; exports `RUSTUP_TOOLCHAIN` to eliminate local-vs-CI drift. |
| [#7794](https://github.com/nearai/ironclaw/pull/7794) | refactor(webui): introduce shared page shell and loading primitives | WebUI/Design System | **Closes #7792** — Adds `PageScroll`, `PageStack`, `Skeleton`, `SkeletonList`; migrates Automations, Extensions, Admin, Workspace, Settings. |
| [#7857](https://github.com/nearai/ironclaw/pull/7857) | fix(webui): refresh conversations after starting suggestion | WebUI/Suggestions | Fixes #7845 — Conversation list now refreshes after suggestion-start creates server-side thread. |
| [#7854](https://github.com/nearai/ironclaw/pull/7854) | fix(webui): remove Gateway v2 login eyebrow | WebUI/Login | Removes stale "Gateway v2" badge and unused locale keys across 11 languages. |
| [#7001](https://github.com/nearai/ironclaw/pull/7001) | feat(loop): keep cached system prefix byte-stable across model calls | Agent/Performance | **Closes #6985 (P0)** — Stops mutating prompt prefix (nudges, timestamp, memory retrieval) to enable provider prefix caching. |
| [#7858](https://github.com/nearai/ironclaw/pull/7858) | PROBE: run T1's composite on Windows before merge | CI/Validation | Throwaway probe — validates T1 composite on Windows (excluded from merge_group). |
| [#7852](https://github.com/nearai/ironclaw/pull/7852) | BISECT: isolate T1's E2E failure to profile change | CI/Debugging | Throwaway bisect — T1 failing Reborn WebUI v2 E2E while T2/T3/T4/main green. |
| [#6985](https://github.com/nearai/ironclaw/issues/6985) | Cache: stop mutating prompt prefix | Agent/Performance | Closed via #7001. |
| [#7798](https://github.com/nearai/ironclaw/issues/7798) | CI expedite T1: setup-rust composite | CI/Infrastructure | Closed via #7821. |
| [#7792](https://github.com/nearai/ironclaw/issues/7792) | Introduce shared page-shell and loading primitives | WebUI/Design System | Closed via #7794. |
| [#7812](https://github.com/nearai/ironclaw/issues/7812) | Onboarding suggestions: respect user-level tool permissions | Onboarding/Suggestions | Closed via #7833. |
| [#7742](https://github.com/nearai/ironclaw/issues/7742) | feat(automations): bound creation preflight | Automations | Closed — preflight validation for automation creation. |
| [#7845](https://github.com/nearai/ironclaw/issues/7845) | Activating suggested task fails to create/render thread entry | WebUI/Suggestions | Closed via #7857. |
| [#7851](https://github.com/nearai/ironclaw/issues/7851) | Fix main branch CI failures 20260824 | CI | Closed — CI stabilized. |
| [#7793](https://github.com/nearai/ironclaw/issues/7793) | Migrate Settings/Admin feedback banners to InlineNotice | WebUI/Design System | Closed via #7794 (partially). |
| [#7685](https://github.com/nearai/ironclaw/issues/7685) | Epic: Dogfooding & QA bug fixing 08/17–08/23 | QA/Process | Closed — weekly dogfooding cycle complete. |

**Net advancement**: CI infrastructure modernization (T1 done, T2–T4 in flight), suggestion flow now grounded in user data, WebUI design system primitives shipped, P0 caching bug fixed.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Signals |
|------|----------|---------|
| [#7817](https://github.com/nearai/ironclaw/pull/7817) ci: nextest test pipeline, full-failure signal, PR unthrottle (T2) | High activity (updated 2026-08-25) | **CI Track T2** — Core team investing heavily in test infrastructure; aims to cut wall-clock and give full failure signal. |
| [#7257](https://github.com/nearai/ironclaw/pull/7257) docs(design-system): proposal for WebUI Storybook + design-system catalog | Long-running (since 2026-08-05) | **Design System Epic** — North-star docs for Storybook adoption; spans Epics #7038, #7781. |
| [#7255](https://github.com/nearai/ironclaw/pull/7255) docs(governance): evaluate APDD Kit + propose integration | Long-running (since 2026-08-05) | **Governance Framework** — Evaluating external "Agent Product Design & Development" kit for IronClaw. |
| [#7810](https://github.com/nearai/ironclaw/pull/7810) feat(sandbox): manifest-declared direct-exec credential bindings behind managed proxy | XL, updated 2026-08-24 | **Sandbox Egress Auth** — `gh` CLI credentials mediated via proxy; no real tokens in env/model payload. Precursor to #7825 (retire GitHub carve-out). |
| [#7818](https://github.com/nearai/ironclaw/pull/7818) feat(subagent): background mode — receipt spawns, per-child delivery, activation, healing | XL, updated 2026-08-24 | **Background Subagents (R2)** — Producer half for background agent runs; deployment-gated. |
| [#7853](https://github.com/nearai/ironclaw/issues/7853) Telegram setup offers personal account linking but cannot complete it | 2 comments, updated 2026-08-25 | **Telegram UX Gap** — Workspace bot works; personal account link fails (missing tool). Related: #7862, #7841. |
| [#7297](https://github.com/nearai/ironclaw/issues/7297) Error messages stack up in UI after every failed prompt | 2 comments, P2, QA bug | **UI Bug** — Service errors accumulate at chat bottom, never cleared. Affects perceived stability. |

**Underlying needs**: CI reliability (reduce flakiness, faster feedback), design system convergence (reduce duplication), sandbox security (credential isolation), onboarding completion (Telegram, Slack gaps), and background agent infrastructure.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#7862](https://github.com/nearai/ironclaw/issues/7862) Device link fails with generic "Something went wrong" when `telegram_api_id/api_hash` unconfigured | Telegram device-link card shows unhelpful error; blocks personal account linking. Observed while triaging #7853. | No |
| **High** | [#7853](https://github.com/nearai/ironclaw/issues/7853) Telegram setup offers personal account linking but cannot complete it (missing tool) | Workspace bot works; personal account link dead-ends with "no available tool." | [#7861](https://github.com/nearai/ironclaw/pull/7861) (OPEN) — restores device-link guidance orphaned by #7766 |
| **Medium** | [#7856](https://github.com/nearai/ironclaw/issues/7856) MCP tool discovery silently skips camelCase tool names | Hosted MCP discovery requires snake_case; camelCase tools silently dropped. Affects HTTP/SSE MCP servers. | No |
| **Medium** | [#7297](https://github.com/nearai/ironclaw/issues/7297) Error messages stack up in UI after every failed prompt | Old errors (service_unavailable, heartbeat failures) accumulate at chat bottom, never cleared. | No |
| **Medium** | [#7842](https://github.com/nearai/ironclaw/issues/7842) Generic "invalid result" error during request execution | User-reported via x-ai-product-feedback; generic error lacks actionable detail. | No |
| **Low** | [#7841](https://github.com/nearai/ironclaw/issues/7841) Telegram setup dead-ends on "admin must configure" | User-reported; likely config gap vs. actual bug. | Related to #7853/#7862 |
| **Low** | [#7840](https://github.com/nearai/ironclaw/issues/7840) Slack: connect guidance gap | User-reported; app doesn't clearly guide Slack connection. | No |

**Stability note**: Two high-severity Telegram linking bugs (#7853, #7862) with a fix PR (#7861) open. MCP camelCase silent failure (#7856) is a data-loss risk for integrations. Error stacking (#7297) remains open since Aug 6.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Italian language support** | [#7855](https://github.com/nearai/ironclaw/issues/7855) (sergeiest) | High — straightforward i18n addition; similar to existing locales. |
| **Agent-first GSuite CLI for Google Workspace** | [#7849](https://github.com/nearai/ironclaw/issues/7849) (serrrfirat, v1.4.0, suggested_P1) | High — part of #6879 epic; addresses thin provider mappings (Gmail list/read UX). |
| **Sandbox egress auth: native iron-proxy recipes, retire GitHub carve-out** | [#7825](https://github.com/nearai/ironclaw/issues/7825) (serrrfirat) | Medium — builds on #7810 (merged pattern); generalizes credential broker. |
| **Onboarding suggestions: cumulative net-new work (connect → suggest → thread)** | [#7815](https://github.com/nearai/ironclaw/issues/7815) (rdisandro, epic, v1.3.0) | In progress — #7816 (frontend gaps), #7833 (backend read-only tools) merged. |
| **Automation run capability facts exposure** | [#7850](https://github.com/nearai/ironclaw/pull/7850) (serrrfirat, OPEN) | Medium — adds `builtin.trigger_status` for exact run metadata. |
| **Decompose `lifecycle_product_service` (1,774 lines)** | [#7860](https://github.com/nearai/ironclaw/issues/7860) (henrypark133) | Medium — architecture rule compliance; splits distinct concerns. |
| **Document Gmail terminal-based setup in Extensions > Registry UI** | [#6774](https://github.com/nearai/ironclaw/issues/6774) (sergeiest, since Jul 28) | Low — documentation-only; long-unanswered. |
| **Operator surface for IronHub agent link in WebUI** | [#7516](https://github.com/nearai/ironclaw/pull/7516) (neo-sky, OPEN since Aug 12) | Medium — enables WebUI completion of agent link (currently CLI-only). |

**Predicted next version (v1.4.0) candidates**: GSuite CLI bundle (#7849), Italian i18n (#7855), trigger_status API (#7850), Telegram personal linking fix (#7853/#7861).

---

## 7. User Feedback Summary — Real Pain Points

| Feedback Channel | Pain Point | Frequency |
|------------------|------------|-----------|
| **x-ai-product-feedback** (via sergeiest) | Generic "invalid result" error during execution | 1 report (#7842) |
| **x-ai-product-feedback** | Telegram setup dead-ends on "admin must configure" | 1 report (#7841) |
| **x-ai-product-feedback** | Slack connect guidance gap — unclear how to connect | 1 report (#7840) |
| **Slack (deepak.jangir)** | Gmail requires terminal/CLI setup, not configurable via Extensions UI | 1 report (#6774, Jul 28) |
| **QA/Internal (Railway instance)** | Telegram personal account linking broken (missing tool) | 1 report (#7853) |
| **QA/Internal (Railway instance)** | Device link generic error when API credentials unconfigured | 1 report (#7862) |
| **QA/Internal** | Error messages stack in UI, never cleared | 1 report (#7297, Aug 6) |
| **Community (Kampouse)** | MCP camelCase tools silently skipped | 1 report (#7856) |

**Satisfaction signals**: Users hit onboarding walls (Telegram, Slack, Gmail setup), generic errors erode trust, MCP integration has silent failures. Positive: suggestion flow now uses real user data (#7833), CI fixes landing rapidly.

---

## 8. Backlog Watch — Long-Unanswered / Needs Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#6774](https://github.com/nearai/ironclaw/issues/6774) Document Gmail terminal-based setup in Extensions > Registry UI | **28 days** (since 2026-07-28) | User-reported doc gap; blocks self-serve Gmail setup. Only 1 comment, no PR. |
| [#7257](https://github.com/nearai/ironclaw/pull/7257) Design system proposal (Storybook + catalog) | **20 days** (since 2026-08-05) | Strategic docs for WebUI consistency; spans 3 epics. Stalled? |
| [#7255](https://github.com/nearai/ironclaw/pull/7255) APDD Kit governance evaluation | **20 days** (since 2026-08-05) | Governance framework decision; private repo eval. No recent movement. |
| [#7516](https://github.com/nearai/ironclaw/pull/7516) Operator surface for IronHub agent link | **13 days**

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-25

## 1. Today's Overview

Moltis shipped a daily release **20260824.01** and closed **16 pull requests** in the last 24 hours, reflecting a high-velocity maintenance cycle. The merged work spans provider expansion (xAI Grok OAuth), sandbox hardening (Apple Container name limits, Coder remote workspaces), messaging reliability (WhatsApp media persistence, cron delivery fixes), browser automation (Obscura stealth, Browserless v2), MCP stability, memory backend normalization, and i18n improvements. Only **3 PRs remain open**, including a notable Coder sandbox backend and OpenAI-safe tool schemas. No new critical issues were opened; the two issues updated were both resolved and closed.

## 2. Releases

### **20260824.01** (2026-08-24)
- **Type**: Daily point release (date-based versioning)
- **Scope**: Aggregates the 16 merged PRs below. No separate changelog published; changes are the merged PR summaries.
- **Breaking Changes**: None explicitly noted. Provider additions (`xai-oauth`) and config normalizations (`memory.config` `builtin` value) are additive or backward-compatible.
- **Migration Notes**: 
  - Operators using `memory.config` backend name `sqlite` should update to `builtin` (normalized in #1235).
  - Apple Container sandbox users no longer need manual workarounds for 64-char identifier limits (#1237).
  - WhatsApp inbound media now persists locally for tool access (#1228).
- **Link**: [Release 20260824.01](https://github.com/moltis-org/moltis/releases/tag/20260824.01)

## 3. Project Progress (Merged/Closed PRs Today)

| Area | PR | Summary |
|------|----|---------|
| **Providers** | [#1240](https://github.com/moltis-org/moltis/pull/1240) | Add `xai-oauth` provider for SuperGrok / X Premium+ via RFC 8628 device-code flow; routes through `cli-chat-proxy.grok.com/v1`. Closes [#1239](https://github.com/moltis-org/moltis/issues/1239). |
| **Sandbox / Apple Container** | [#1237](https://github.com/moltis-org/moltis/pull/1237) | Bound container identifiers to 64 chars using SHA-256 suffixes; fixes startup failures. Closes [#1137](https://github.com/moltis-org/moltis/issues/1137). |
| **Messaging / WhatsApp** | [#1228](https://github.com/moltis-org/moltis/pull/1228) | Persist inbound photos & documents (≤20 MB) via session media interface; local tools receive stable `local_path`. |
| | [#1233](https://github.com/moltis-org/moltis/pull/1233) | Bound inbound media downloads while streaming (superseded by #1228). |
| | [#1226](https://github.com/moltis-org/moltis/pull/1226) | Deliver scheduled cron output to originating chat with thread/topic routing preserved. |
| | [#1243](https://github.com/moltis-org/moltis/pull/1243) | Preserve delivered channel context for follow-up questions (WhatsApp/other channels). |
| **Browser / Obscura** | [#1227](https://github.com/moltis-org/moltis/pull/1227) | Enable Obscura `--stealth` by default; new config `tools.browser.obscura_stealth` (default `true`). |
| | [#1229](https://github.com/moltis-org/moltis/pull/1229) | Full Browserless v2 container-protocol support; retains v1 as default. |
| **MCP / Tools** | [#1231](https://github.com/moltis-org/moltis/pull/1231) | Resolve current MCP client after server restart; prevents dispatch through closed instance. |
| | [#1232](https://github.com/moltis-org/moltis/pull/1232) | Make object schemas OpenAI-safe (`additionalProperties=false`, fixed MCP env entries). |
| **Skills** | [#1234](https://github.com/moltis-org/moltis/pull/1234) | Materialize recursive bundled sidecars (fixes `skill-creator` `quick_validate.py` not found in releases/Docker). |
| **Memory** | [#1235](https://github.com/moltis-org/moltis/pull/1235) | Normalize built-in backend config value `sqlite` → `builtin`; unify serialization. |
| | [#1236](https://github.com/moltis-org/moltis/pull/1236) | Bound local GGUF embedding encoder batches to `n_ctx=512`; prevents process termination on oversize chunks. |
| **TTS / Heartbeat** | [#1242](https://github.com/moltis-org/moltis/pull/1242) | Stop treating default Coqui as configured; fixes false “provider not configured” warnings. Closes [#1114](https://github.com/moltis-org/moltis/issues/1114). |
| | [#1241](https://github.com/moltis-org/moltis/pull/1241) | Honor `heartbeat.active_hours`; accept `end=24:00` as end-of-day. |
| **Security / Gateway** | [#1179](https://github.com/moltis-org/moltis/pull/1179) | Verify node pairing signatures; bind `node.pair.verify` to server-issued pending request. |
| **Slack / Shared Channels** | [#1238](https://github.com/moltis-org/moltis/pull/1238) | Allow configured tools in shared Slack channels via `untrusted_audience` / `untrusted_tools` settings (fail-closed defaults). |
| **i18n** | [#1225](https://github.com/moltis-org/moltis/pull/1225) | Major rewrite/expansion of `zh-TW` Traditional Chinese locale (connectors, terminology, consistency). |

## 4. Community Hot Topics

| Item | Activity | Signal |
|------|----------|--------|
| **#1239 / #1240 — xAI Grok OAuth** | Issue: 2 comments • PR: merged same day | Strong demand for subscription-based Grok access without API keys; mirrors existing Codex/Copilot OAuth pattern. Maintainer (SP-937-215) implemented and shipped in <24h. |
| **#1137 / #1237 — Apple Container 64-char limit** | Issue: 1 comment (open since Jun 27) • PR: merged same day | Long-standing blocker for Apple Container sandbox users; fix uses deterministic SHA-256 suffixes. |
| **#1199 — Coder remote workspace sandbox** | Open PR, 9 days old, 0 comments | Significant feature: ephemeral Coder workspaces via REST API + PTY WebSockets. Awaiting review; could unlock enterprise/remote dev workflows. |
| **#1232 — OpenAI-safe tool schemas** | Open PR, 3 days old, 0 comments | Compatibility fix for strict OpenAI tool calling; affects Codex and other OpenAI-compatible endpoints. |

**Underlying needs**: 
- **Provider parity** — users want OAuth for every major LLM subscription (OpenAI, GitHub, now xAI).
- **Sandbox reliability** — Apple Container and Coder support indicate growing demand for isolated, cloud-native execution environments.
- **Messaging fidelity** — WhatsApp media persistence and cron delivery fixes show production usage of multi-channel bots.

## 5. Bugs & Stability (Reported/Fixed Today)

| Severity | Issue / PR | Status | Notes |
|----------|------------|--------|-------|
| **High** | [#1137](https://github.com/moltis-org/moltis/issues/1137) Apple Container ID >64 chars | ✅ Fixed (#1237) | Prevented sandbox startup; affected all Apple Container users. |
| **High** | [#1236](https://github.com/moltis-org/moltis/pull/1236) GGUF embedding OOM / process crash | ✅ Fixed | Local embeddings >512 tokens killed Moltis process; now bounded. |
| **Medium** | [#1114](https://github.com/moltis-org/moltis/issues/1114) False “Coqui not configured” warnings | ✅ Fixed (#1242) | Cosmetic but noisy; default Coqui no longer marked configured. |
| **Medium** | [#1234](https://github.com/moltis-org/moltis/pull/1234) Bundled skill sidecars not found in releases | ✅ Fixed | `skill-creator` `quick_validate.py` missing in Docker/pre-built; now materialized. |
| **Medium** | [#1231](https://github.com/moltis-org/moltis/pull/1231) MCP client stale after server restart | ✅ Fixed | Tools dispatched through closed client until next turn. |
| **Low** | [#1241](https://github.com/moltis-org/moltis/pull/1241) `heartbeat.active_hours` ignored; `24:00` invalid | ✅ Fixed | Config existed but not enforced; chrono parsing fixed. |

**No new bugs reported today** — all 16 merged PRs were fixes or enhancements, not regressions.

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood (Next Release) | Rationale |
|---------|--------|---------------------------|-----------|
| **Coder remote workspace sandbox** | [#1199](https://github.com/moltis-org/moltis/pull/1199) (open) | Medium | Large, well-documented PR; adds new sandbox backend. Needs review cycles. |
| **OpenAI-safe tool schemas** | [#1232](https://github.com/moltis-org/moltis/pull/1232) (open) | High | Compatibility fix; low risk, high value for Codex users. |
| **Preserve cron channel context** | [#1243](https://github.com/moltis-org/moltis/pull/1243) (open) | High | Follow-up to #1226; small, targeted fix. |
| **More OAuth providers (Anthropic, Google, etc.)** | Pattern from #1239/#1240 | Medium | xAI OAuth shipped rapidly; template exists. Community may request others. |
| **Browserless v2 default** | [#1229](https://github.com/moltis-org/moltis/pull/1229) (merged) | Low (config change) | v2 supported but v1 remains default; future flip likely. |

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|----------------------|----------|-----------|
| **“Need Grok without API key”** | [#1239](https://github.com/moltis-org/moltis/issues/1239) — user requests OAuth for SuperGrok/Heavy | 👍 Positive (feature delivered same day) |
| **“Apple Container fails to start”** | [#1137](https://github.com/moltis-org/moltis/issues/1137) — blocker since June | 😐 Neutral→👍 (fixed after 2 months) |
| **“WhatsApp files not accessible to tools”** | [#1228](https://github.com/moltis-org/moltis/pull/1228) — inbound media only metadata | 👍 Fixed; enables local tool processing |
| **“Cron replies lose thread context”** | [#1226](https://github.com/moltis-org/moltis/pull/1226), [#1243](https://github.com/moltis-org/moltis/pull/1243) | 👍 Iterative improvement |
| **“False TTS warnings spam logs”** | [#1114](https://github.com/moltis-org/moltis/issues/1114) — Coqui marked configured by default | 👍 Fixed |
| **“zh-TW translations incomplete/inconsistent”** | [#1225](https://github.com/moltis-org/moltis/pull/1225) — community contribution | 👍 Community-driven polish |

**Overall**: Users are pushing Moltis into production multi-channel (Slack, WhatsApp) and sandboxed (Apple Container, Coder) scenarios. Maintainers respond quickly — median fix time for today’s issues <24h.

## 8. Backlog Watch (Needs Maintainer Attention)

| Item | Age | Why It Matters |
|------|-----|----------------|
| **[#1199](https://github.com/moltis-org/moltis/pull/1199) Coder remote workspace sandbox** | 10 days (opened 2026-08-15) | Major new sandbox backend; 0 comments suggests it hasn’t been reviewed. High value for enterprise/remote teams. |
| **[#1232](https://github.com/moltis-org/moltis/pull/1232) OpenAI-safe tool schemas** | 3 days | Compatibility fix for strict OpenAI tool calling; small but important for Codex users. |
| **[#1243](https://github.com/moltis-org/moltis/pull/1243) Cron channel context preservation** | 1 day | Follow-up to merged #1226; completes the cron→chat delivery loop. |

---

**Project Health Indicators**  
- **Release cadence**: Daily (date-based tags)  
- **PR merge rate**: 16/19 (84%) in 24h — high throughput  
- **Issue backlog**: 0 new open issues; 2 closed  
- **Security focus**: Node pairing verification (#1179), Slack untrusted tool gating (#1238)  
- **Community contributions**: 3/19 PRs from non-core authors (PeterDaveHello, IlyaBizyaev, penso, rubenssoto, tsauvajon, SP-937-215) — healthy external participation  

**Next Watch**: Review of #1199 (Coder sandbox) and #1232 (OpenAI schemas) — both are high-impact, low-risk, and ready for merge.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-08-25

## 1. Today's Overview
ZeptoClaw saw minimal activity in the last 24 hours with **one new issue opened** (#650) and **zero pull requests or releases**. The sole contribution is a feature request targeting the interactive REPL (`zeptoclaw agent`) to improve UX robustness around interrupt handling (`Ctrl+C`/`Ctrl+D`) and the lone `/` command. No merges, closures, or version bumps occurred. The project remains in a quiet maintenance phase with community focus on CLI ergonomics rather than core agent logic.

## 2. Releases
**No new releases** published in the last 24 hours. The latest published version remains unchanged.

## 3. Project Progress
**No PRs merged or closed today.** Zero pull request activity means no features, fixes, or refactors were integrated. The only movement is the newly filed issue #650, which has not yet attracted a PR.

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#650** `feat(cli): REPL UX hardening - safe Ctrl+C/Ctrl+D, lone '/' command table` | Issue | 0 comments, 0 reactions, created & updated 2026-08-24 | [qhkm/zeptoclaw#650](https://github.com/qhkm/zeptoclaw/issues/650) |

**Analysis**: The sole discussion centers on **preventing accidental session loss** in the REPL. Users (or the maintainer acting as user) want `Ctrl+C` to cancel the *current input line* instead of exiting the entire session, and `Ctrl+D` to require confirmation or a second press. The lone `/` keystroke should display the command table rather than error. This signals a desire for **shell-like REPL semantics**—a common expectation for developer-facing CLI agents.

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.** Issue #650 is a UX enhancement, not a defect. Stability appears unchanged.

## 6. Feature Requests & Roadmap Signals
**Single explicit request** from #650:
- **Safe interrupt handling**: `Ctrl+C` → cancel current line; `Ctrl+D` → confirm exit or double-tap.
- **Lone `/` → command table**: Treat bare slash as help shortcut.

**Prediction**: Given the specificity and low implementation risk, this is a **high-probability candidate for the next minor release** (e.g., `v0.x.y+1`). No other roadmap signals present in today’s data.

## 7. User Feedback Summary
- **Pain point**: Accidental REPL exit via `Ctrl+C`/`Ctrl+D` destroys in-progress sessions—frustrating during iterative agent interaction.
- **Use case**: Developers using `zeptoclaw agent` interactively expect readline-style keybindings (cancel line, show help on `/`).
- **Sentiment**: Neutral/constructive; no dissatisfaction expressed, but the filing implies the current behavior violates CLI conventions.

## 8. Backlog Watch
No stale issues or PRs surfaced in today’s dataset. The only open item is the freshly created #650. **Maintainer attention needed**: triage #650, decide on exact keybinding semantics (e.g., double `Ctrl+D` vs. confirmation prompt), and assign or label for implementation.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-25

## 1. Today's Overview
ZeroClaw shows **very high velocity** with 50 issues and 50 PRs updated in the last 24 hours. The project is in active development across multiple fronts: architectural RFCs (Chat Completions profile, single-tool provider rounds), critical security fixes (delegate bypass, cron scoping, Docker non-root enforcement), runtime stability work (context caps, provider fallback bugs, log storage regression), and major UX features (multi-session ZeroCode panes, ACP channel support). No new release was cut today, but several large PRs are nearing merge readiness. The backlog contains 43 open issues — several P1/P2 security and correctness bugs — indicating maintainers are prioritizing correctness over feature velocity.

## 2. Releases
**No new releases today.** The last release information is not included in the 24h window.

## 3. Project Progress — Merged/Closed PRs & Issues (Last 24h)
| Item | Type | Summary | Impact |
|------|------|---------|--------|
| [#10251](https://github.com/zeroclaw-labs/zeroclaw/issues/10251) | Issue (Closed) | Fixed 17 flaky Telegram `listen_*` tests that asserted on wall-clock timeouts | CI stability |
| [#10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) | Issue (Closed) | Fixed exact proxy selectors rejecting supported transcription services (Groq, OpenAI, Deepgram, etc.) | Provider compatibility |
| [#10190](https://github.com/zeroclaw-labs/zeroclaw/issues/10190) | Issue (Closed) | Fixed reasoning fallback classifier matching unrelated compound error clauses in Azure OpenAI | Provider reliability |
| [#10023](https://github.com/zeroclaw-labs/zeroclaw/issues/10023) | Issue (Closed) | Failure logs now show pinned fallback model instead of requested model | Observability |
| [#9590](https://github.com/zeroclaw-labs/zeroclaw/issues/9590) | Issue (Closed) | Fixed concurrent `models refresh` cache loss via read-modify-write race | Data integrity |
| [#10143](https://github.com/zeroclaw-labs/zeroclaw/issues/10143) | Issue (Closed) | Completed provider-call accounting lifecycle (every physical provider leaf represented once) | Observability/accounting |
| [#10224](https://github.com/zeroclaw-labs/zeroclaw/issues/10224) | Issue (Closed) | Fixed custom provider 5xx errors logged as duplicated escaped JSON | Logging clarity |

**Key advancement:** Provider reliability & observability fixes dominate closed work. CI flakiness reduced. Accounting contract completed.

## 4. Community Hot Topics — Most Active Discussions
| Item | Comments | Core Need |
|------|----------|-----------|
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) **RFC: ZeroClaw Chat Completions profile** | 24 | **Interoperability**: Enable OpenAI-compatible clients (Open WebUI, LobeChat, Continue.dev, Aider, LangChain, OpenAI SDK) to use ZeroClaw agents via standard Chat Completions API. Accepted RFC, high risk, cross-cutting (gateway, runtime, architecture). |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) **Tracker: Maintainer decision queue for RFCs/design issues** | 14 | **Governance**: Centralized queue for maintainer attention on RFCs, design issues, release policy. Process scaling need. |
| [#7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431) **Pre-turn tool elicitation hints for NL routing** | 6 | **Usability**: Agents should detect routing requests in natural language and set `send_via` before main LLM call. Accepted, high risk. |
| [#9512](https://github.com/zeroclaw-labs/zeroclaw/issues/9512) **Annotate CI gates with motivating issue/incident** | 5 | **Maintainability**: Bespoke gates (`repo-structure`, `zerocode-rpc-boundary`, `nix-hash-drift`, `installer-drift`) lack traceability. |
| [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) **Config metadata stays English in localized ZeroCode/web** | 4 | **i18n**: Config group headings, section labels, help text not translated despite locale selection. |

**Underlying theme:** Platform maturity — interoperability (OpenAI API), governance scaling, UX polish (NL routing, i18n), and CI traceability.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR | Summary |
|----------|-------|--------|--------|---------|
| **S0 (Security/Data Loss)** | [#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) Independent delegate bypasses `block_high_risk_commands` | Open, In Progress | — | High-risk commands (e.g., `rm`) succeed via independent delegate even when delegate's risk profile blocks them. **Critical sandbox bypass.** |
| **S0/P1** | [#10324](https://github.com/zeroclaw-labs/zeroclaw/issues/10324) Cron manual trigger & run-history reads: check-then-act across agent rename | Open | — | Cross-agent boundary via operator rename race. Same class as #9947. |
| **S2 (Degraded Behavior)** | [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) Interactive session caps context at 32k tokens, ignores `max_context_tokens=131072` | Open, In Progress | — | Hardcoded 32k limit in interactive agent session despite config. |
| **S2** | [#9812](https://github.com/zeroclaw-labs/zeroclaw/issues/9812) Provider fallback carries primary's model ID → fallback never fires, poisons into cooldown | Open, Stale, Needs Repro | — | Fallback asked for primary's model ID; correctly configured fallback can never activate. |
| **S2** | [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) Config metadata remains English in localized surfaces | Open, Accepted | — | ZeroCode/web config headings, labels, help text untranslated. |
| **S2** | [#10232](https://github.com/zeroclaw-labs/zeroclaw/issues/10232) Daemon diagnostics drop underlying error chain | Open, In Progress | — | Supervisor records only `e.to_string()`, loses cause chain. |
| **S2** | [#10178](https://github.com/zeroclaw-labs/zeroclaw/issues/10178) Daemon socket ownership error doesn't identify active owner/recovery path | Open, In Progress | — | Second daemon startup fails with non-actionable error. |
| **S2** | [#10175](https://github.com/zeroclaw-labs/zeroclaw/issues/10175) Google TTS API key header not marked sensitive | Open, In Progress | — | `x-goog-api-key` header leaks in formatted request/header maps. |
| **S2** | [#10023](https://github.com/zeroclaw-labs/zeroclaw/issues/10023) **Closed** Failure logs show requested model, not pinned fallback | Closed | — | Fixed. |
| **S3 (Minor)** | [#10180](https://github.com/zeroclaw-labs/zeroclaw/issues/10180) ZeroCode paste mutates hidden composer while another surface owns input | Open, In Progress | — | Bracketed-paste routed directly, bypassing input-ownership checks. |

**Critical watch:** #10165 (S0 sandbox bypass) and #10324 (cron security) are P1/in-progress. #9812 (fallback broken) is stale but high-risk.

## 6. Feature Requests & Roadmap Signals
| Signal | Evidence | Likelihood for Next Version |
|--------|----------|----------------------------|
| **OpenAI Chat Completions API compatibility** | RFC #8603 accepted (24 comments), high-risk, cross-cutting | **High** — accepted RFC, active design |
| **Multi-session ZeroCode panes with agent sidebar** | PR #9739 (XL, distinguished contributor), builds on merged #9738 | **High** — large feature PR, near merge |
| **Single-tool provider rounds (opt-in)** | RFC #10222, needs maintainer review | **Medium** — RFC stage, architectural change |
| **Pre-turn NL routing detection** | #7431 accepted, high risk | **Medium** — accepted but complex |
| **TaskRecord as single background lifecycle owner** | PR #9726 (XL, distinguished contributor) | **High** — foundational runtime refactor |
| **Filesystem mutation confinement to workspace** | PR #9977 (XL, security, needs maintainer review) | **High** — security hardening, large scope |
| **Exposing configured channels to RPC sessions** | PR #10246 (XL, needs author action) | **Medium** — unblocks channel-backed tools in RPC |
| **Pixel-level image validation for multimodal** | PR #9819 (M, principal contributor) | **High** — prevents corrupt image provider failures |
| **TypeScript gate for web/ in required CI** | #10306 accepted, high risk | **High** — CI stability, web dashboard |
| **Docker Alpine non-root enforcement (65534:65534)** | #10173 in progress | **High** — supply chain security |

**Predicted next-version themes:** Chat Completions API, ZeroCode multi-session, runtime lifecycle ownership (TaskRecord), filesystem confinement, provider reliability fixes.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Source | User Impact |
|------------|--------|-------------|
| **Cannot use ZeroClaw with Open WebUI / LobeChat / Continue.dev / Aider / LangChain / OpenAI SDK** | #8603 (RFC) | Major adoption blocker — standard API clients unsupported |
| **Interactive agent context capped at 32k despite 128k config** | #10068 | Power users hit hard limit; compaction triggers early |
| **Provider fallback silently broken (wrong model ID passed)** | #9812 | Fallback never activates; primary failure → cooldown poison |
| **Config UI not translated (headings, labels, help text)** | #9363 | Non-English users see mixed-language config surfaces |
| **Daemon socket error unactionable (no owner PID, no recovery hint)** | #10178 | Operators cannot resolve "address in use" without manual `lsof` |
| **Cron tools not scoped to calling agent (cross-agent job access)** | #9948 / #10324 | Security: any agent can list/trigger/remove any other agent's cron jobs |
| **Independent delegate ignores sandbox `block_high_risk_commands`** | #10165 | **Critical**: `rm -rf /` works via delegate despite policy |
| **Flaky CI tests (Telegram wall-clock assertions)** | #10251 | Contributors hit false failures on loaded runners |
| **Web dashboard TypeScript errors (75 misleading errors on bare `tsc`)** | #10306 | Contributors confused; CI doesn't gate web/ typecheck |

**Satisfaction signals:** Users actively file detailed bugs with configs/repros. RFC process works (#8603 accepted). Contributors (distinguished/principal) drive large PRs.

## 8. Backlog Watch — Stale/Unanswered Important Items
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#9812](https://github.com/zeroclaw-labs/zeroclaw/issues/9812) Provider fallback carries primary's model ID | 18 days (created 2026-08-07) | **Fallback mechanism fundamentally broken**; poisons fallback into cooldown. Marked `status:stale`, `r:needs-repro`. | **Stale, needs repro** — high risk, no recent activity |
| [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) Tracker: OIDC milestone (canonical principals, inbound auth) | 62 days (2026-06-24) | **AuthZ/AuthN foundation** for multi-tenant, enterprise. Only 1 comment. | **Tracker, low recent activity** |
| [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) Skills: declarative auto-activation with provider switch | 45 days (2026-07-11) | **Stacked on #9563**; large feature (XL), needs rebase. Skills system extensibility. | **Open PR, stacked, needs author action** |
| [#9637](https://github.com/zeroclaw-labs/zeroclaw/pull/9637) CI: guard temporary React Router RSC exception | 24 days (2026-08-01) | **`do-not-merge`**, `needs-author-action`. Temporary exception for GHSA. | **Blocked, needs author action** |
| [#9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) Config: harden Git shell policy arguments | 23 days (2026-08-02) | **Security hardening** (XL), `needs-author-action`. Normalizes shell words at policy boundary. | **Open PR, needs author action** |
| [#9726](https://github.com/zeroclaw-labs/zeroclaw/pull/9726) Runtime: TaskRecord single background lifecycle owner | 21 days (2026-08-04) | **Foundational refactor** (XL), `needs-author-action`, `follow-up`. Persists owner-bound terminal settlement. | **Open PR, needs author action** |
| [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) ZeroCode: multi-session panes, agent sidebar | 21 days (2026-08-04) | **Major UX feature** (XL), `needs-author-action`. Builds on merged #9738. | **Open PR, needs author action** |
| [#9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977) Tools: confine filesystem mutations to workspace | 12 days (2026-08-13) | **Security hardening** (XL), `needs-maintainer-review`. Shared data dir authoritative; symlink safety. | **Open PR, needs maintainer review** |
| [#10073](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) Retire StoragePolicy::Rolling; absorb into Rotating | 7 days (2026-08-18) | **Log storage perf regression** under sustained load. In progress. | **Open, in progress** |
| [#10162](https://github.com/zeroclaw-labs/zeroclaw/issues/10162) Plugin install persists before config-entry seeding (non-retryable) | 5 days (2026-08-20) | **Plugin install not recoverable**; partial state on config save failure. | **Open, in progress, follow-up** |

**Maintainer attention needed:** #9812 (fallback broken, stale), #9977 (security XL PR awaiting review), #9726/#9739 (foundational + UX XL PRs awaiting author action), #9678 (security hardening awaiting author).

---

**Project Health Assessment:** 🟡 **Active but with critical debt**  
-

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*