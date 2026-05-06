# OpenClaw Ecosystem Digest 2026-04-27

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-27 00:16 UTC

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

# OpenClaw Project Digest — 2026-04-27

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a vibrant but potentially strained development ecosystem. The project released four beta versions on 2026.4.25, all focused on a major TTS (Text-to-Speech) infrastructure upgrade with multi-provider support. With 423 open issues (84.6%) and 416 open PRs (83.2%), the maintainers face significant review backlog pressure. The community is actively engaged with deeply technical discussions around agent lifecycle, sandboxing, and cross-platform stability, though the high open-to-closed ratio suggests either rapid growth or bottlenecks in merge velocity.

---

## 2. Releases

**v2026.4.25-beta.1 through v2026.4.25-beta.4** (4 sequential beta releases)

### Changes
- **Major TTS infrastructure overhaul**: Voice replies receive full TTS upgrade with:
  - `/tts latest` command for latest TTS generation
  - Chat-scoped auto-TTS controls
  - Persona support for voice customization
  - Per-agent and per-account TTS overrides
  - **7 new TTS providers**: Azure Speech, Xiaomi, Local CLI, Inworld, Volcengine, and ElevenLabs v3

### Contributors
- @leonchui, @zoujiejun, @solar2ain

### Notes
- Identical changelog across all four beta tags suggests iterative bugfix releases or CI pipeline adjustments
- No breaking changes or migration notes documented in release notes
- Full release: https://github.com/openclaw/openclaw/releases

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Impact |
|---|---|---|---|
| [#72437](https://github.com/openclaw/openclaw/pull/72437) | vincentkoc | Test hardening: guard cold status snapshots for plugin registry | Prevents accidental runtime imports in plugin discovery paths |
| [#67463](https://github.com/openclaw/openclaw/pull/67463) | isopenclaw | Fix `doctor` SecretRef false positive; normalize task timestamps | Better secret resolution diagnostics |
| [#71964](https://github.com/openclaw/openclaw/pull/71964) | Sanjays2402 | Fix daemon PATH: only emit existing version-manager directories | Reduces PATH pollution, fixes #71944 |

### Notable Open PRs in Active Review

| PR | Author | Summary | Size |
|---|---|---|---|
| [#72435](https://github.com/openclaw/openclaw/pull/72435) | steipete | **Fix compacted session transcript rotation** — successor transcript rotation replacing in-place rewrite | XL |
| [#72436](https://github.com/openclaw/openclaw/pull/72436) | junyeo217 | **Add append-only session recovery log** for best-effort session recovery | XL |
| [#71678](https://github.com/openclaw/openclaw/pull/71678) | sahilsatralkar | Fix memory embeddings issue #71522 | L |
| [#71582](https://github.com/openclaw/openclaw/pull/71582) | SayrWolfridge | Fix heartbeat exec-event delivery source routing | XL |
| [#71573](https://github.com/openclaw/openclaw/pull/71573) | hclsys | Fix update.run restart continuation for post-update agent resume | S |

**Key advancement areas**: Session reliability (transcript rotation, recovery logs), memory system fixes, daemon PATH hygiene, and update/resume continuity.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| # | Issue | Comments | 👍 | Core Need |
|---|---|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | Text between tool calls leaks to messaging channels | 22 | 0 | **UX isolation**: Internal agent processing must not surface to users |
| [#17890](https://github.com/openclaw/openclaw/issues/17890) | macOS app: Skill binary detection doesn't respect `/etc/paths` or Homebrew PATH | 15 | 0 | **macOS integration**: Native app must honor standard Unix PATH conventions |
| [#32473](https://github.com/openclaw/openclaw/issues/32473) | Control UI requires device identity (HTTPS/localhost secure context) | 15 | 4 | **Self-hosted accessibility**: VPS users need workable HTTPS/identity solutions |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | Tiered bootstrap file loading for progressive context control | 13 | 0 | **Cost optimization**: Reduce token waste from unused bootstrap files |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | Bootstrap files in agentDir silently ignored | 12 | 4 | **Agent isolation**: Per-agent config must actually work |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal daemon stop() race condition on SIGUSR1 restart | 12 | 0 | **Reliability**: Clean process lifecycle during config reloads |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | `exec` tool doesn't inherit `skills.entries.*.env` | 11 | 1 | **Secret injection**: Skills environment must propagate to subprocesses |

### Underlying Community Needs Analysis

1. **Agent boundary clarity**: Users need clear separation between internal agent cognition and external communication (#25592, #27445)
2. **Platform-native behavior**: macOS PATH, Windows EBUSY, Docker sandboxing all need first-class treatment
3. **Cost-aware operation**: Token budgets matter — tiered loading (#22438), prefix caching (#40256), and per-hour spending limits (#38248) all signal economic sensitivity
4. **Operational trust**: Secrets, approvals, and environment isolation must work predictably

---

## 5. Bugs & Stability

| Severity | Issue | Type | Fix PR? | Details |
|---|---|---|---|---|
| 🔴 **Critical** | [#72366](https://github.com/openclaw/openclaw/issues/72366) | Crash loop on startup | No | Bonjour/mDNS "CIAO PROBING CANCELED" causes gateway crash-loop; workaround: disable bonjour |
| 🔴 **Critical** | [#22676](https://github.com/openclaw/openclaw/issues/22676) | Race condition / orphaned processes | No | SIGUSR1 restart leaves orphaned signal-cli processes; port/file lock conflicts |
| 🟡 **High** | [#65309](https://github.com/openclaw/openclaw/issues/65309) | Regression: Active Memory 30s timeout | No | Direct-chat turns stall and timeout with Active Memory enabled |
| 🟡 **High** | [#31583](https://github.com/openclaw/openclaw/issues/31583) | Regression: exec env inheritance broken | No | Skills secrets not passed to subprocesses — security/functional impact |
| 🟡 **High** | [#70623](https://github.com/openclaw/openclaw/issues/70623) | Channel issues Telegram/Discord | No | New in 2026.4.21 — message delivery failures |
| 🟡 **High** | [#37591](https://github.com/openclaw/openclaw/issues/37591) | macOS Node missing `system.run.prepare` | No | Blocks `system.run` execution entirely on macOS/iOS |
| 🟢 **Medium** | [#40540](https://github.com/openclaw/openclaw/issues/40540) | `openclaw update` EBUSY on Windows | No | Self-update fails due to file locking |
| 🟢 **Medium** | [#39889](https://github.com/openclaw/openclaw/issues/39889) | Control UI hangs in Chromium/Vivaldi | No | `<openclaw-app>` not rendered; Firefox works |
| 🟢 **Medium** | [#32638](https://github.com/openclaw/openclaw/issues/32638) | Groq + reasoning models 400 error | No | `reasoning_effort` value incompatibility |

**Regression cluster**: Multiple issues tagged `regression` suggest recent releases introduced instability in: cron scheduling (#27996, #71651 fix pending), exec environment (#31583), Active Memory (#65309), and Ollama timeouts (#64710 — closed, fixed).

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version | Rationale |
|---|---|---|---|
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | Tiered bootstrap file loading | **High** | Token cost pressure; architectural fit with existing config system |
| [#22358](https://github.com/openclaw/openclaw/issues/22358) | Post-subagent completion extension hook | Medium | Workflow orchestration demand; clean extension point |
| [#27445](https://github.com/openclaw/openclaw/issues/27445) | `announceTarget` for sub-agent routing | Medium | Related to #22358; multi-agent workflow maturity |
| [#38204](https://github.com/openclaw/openclaw/issues/38204) | Grok 4.2 Multi Model support | Medium | xAI API compatibility; model diversity trend |
| [#20786](https://github.com/openclaw/openclaw/issues/20786) | Telegram Business Bot support | Medium | Enterprise messaging expansion |
| [#38248](https://github.com/openclaw/openclaw/issues/38248) | Per-hour spending ceiling | Medium | Cost control urgency; fits existing failover infrastructure |
| [#39979](https://github.com/openclaw/openclaw/issues/39979) | Path-scoped RWX permissions | Lower | Security model change; needs careful design |
| [#34400](https://github.com/openclaw/openclaw/issues/34400) | Recursive `memory_search` | Higher | Simple, bounded scope; frequent user need |

**Emerging theme**: Agent-to-agent orchestration (hooks, routing, announcements) is maturing beyond simple spawning into sophisticated workflow patterns.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Intensity |
|---|---|---|
| **Silent failures** | [#39695](https://github.com/openclaw/openclaw/issues/39695) exec silently fails, [#29387](https://github.com/openclaw/openclaw/issues/29387) bootstrap silently ignored, [#40001](https://github.com/openclaw/openclaw/issues/40001) write overwrites without warning | High |
| **macOS second-class experience** | [#17890](https://github.com/openclaw/openclaw/issues/17890) PATH issues, [#37591](https://github.com/openclaw/openclaw/issues/37591) missing commands, [#39223](https://github.com/openclaw/openclaw/issues/39223) configure wizard hangs | High |
| **Docker/self-hosted friction** | [#31331](https://github.com/openclaw/openclaw/issues/31331) workspaceAccess in Docker, [#32473](https://github.com/openclaw/openclaw/issues/32473) HTTPS requirement for VPS | High |
| **Cost anxiety** | [#38248](https://github.com/openclaw/openclaw/issues/38248) runaway failover costs, [#22438](https://github.com/openclaw/openclaw/issues/22438) token waste | Medium-High |
| **Update instability** | [#65302](https://github.com/openclaw/openclaw/issues/65302) "Updates Are Killing Your Product" (5 👍, emotional Chinese-language post), [#40540](https://github.com/openclaw/openclaw/issues/40540) update fails on Windows | High |

### Satisfaction Signals
- Deep engagement: Users like @smonett maintain audited feature request bundles (#65824) with workarounds
- Creative community: AI agent "邵小红 (Scarlet)" self-identifies as autonomous operator in #65302
- Platform loyalty: Intensive daily use since 2026.2 reported

### Critical Tension
The project exhibits **innovation velocity vs. stability tension**. Users celebrate capabilities but report regressions and silent failures that erode trust. The emotional weight of #65302 ("self-destruct mode") and its historical analogy (Liu Bang's governance) signals cultural/frustration risk beyond pure technical metrics.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (long-unanswered, high impact)

| Issue | Age | Problem | Why Stalled? |
|---|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | ~2 months | Tool call text leaks to channels | 22 comments, no assignee, no fix PR — architectural UX decision needed |
| [#17311](https://github.com/openclaw/openclaw/issues/17311) | ~2.5 months | SecretsProvider: env, keyring, 1Password | Depends on #16663 merge; interface design question |
| [#29736](https://github.com/openclaw/openclaw/issues/29736) | ~2 months | Exec approvals path ignores state root | State management architecture; cross-platform path handling |
| [#17761](https://github.com/openclaw/openclaw/issues/17761) | ~2 months | Gateway auth dispatcher blocks internal services | Auth mode design: `trusted-proxy` vs. fallback chain |

### PRs at Risk of Bitrot

| PR | Age | Blocker |
|---|---|---|
| [#10356](https://github.com/openclaw/openclaw/pull/10356) | ~2.5 months | TTS Typecast provider — large PR, needs review bandwidth |
| [#56532](https://github.com/openclaw/openclaw/pull/56532) | ~1 month | memory-lancedb timeout/retry — replaces closed PR #56517 |

### Maintainer Action Recommended
- **Triage #25592**: Core UX bug with highest comment count; needs architectural decision on agent/channel boundary
- **Resolve macOS PATH cluster**: [#17890](https://github.com/openclaw/openclaw/issues/17890), [#37591](https://github.com/openclaw/openclaw/issues/37591), [#39223](https://github.com/openclaw/openclaw/issues/39223) — platform-specific quality bar
- **Address #65302 sentiment**: Even if partially emotional, the "updates killing product" narrative can spread; needs community management

---

*Digest generated from GitHub activity data for 2026-04-27. All links reference https://github.com/openclaw/openclaw.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem
## 2026-04-27 Community Digest Analysis

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source ecosystem is experiencing **intense, uneven growth** in mid-2026. A dominant reference implementation (OpenClaw) faces stability-velocity tension with 500+ daily issues/PRs, while newer entrants (NanoBot, ZeroClaw, NanoClaw) iterate aggressively on narrower scopes. The field is consolidating around **multi-provider LLM compatibility**, **containerized agent isolation**, and **enterprise channel integrations** (Slack, Discord, WeChat, Matrix), yet fundamental challenges persist: session reliability, cost control, and cross-platform deployment friction. Several projects show signs of **maintainer bandwidth constraints** relative to community contribution volume, creating merge backlog risks.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Assessment |
|:---|:---:|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 | 500 | 4 betas (4/25) | ⚠️ Strained | Extreme volume; 84% open ratio; innovation/stability tension |
| **NanoBot** | 5 | 124 | None | ✅ Healthy | 25:1 PR:issue ratio; strong velocity; review queue building (104 open) |
| **Hermes Agent** | 50 | 50 | None | ⚠️ Accumulating | High creation, low closure; 49 open issues, 44 open PRs |
| **PicoClaw** | 6 | 10 | 1 nightly | ✅ Active | Pre-release stabilization; focused bug-fix cycle |
| **NanoClaw** | 7 | 26 | None | ⚠️ Infrastructure risk | Strong throughput; external dependency SPOF (`onecli.dev` down) |
| **NullClaw** | 1 | 0 | None | 🔴 Stagnant | Single critical bug; no maintainer response; WSL2 blocker |
| **IronClaw** | 5 | 12 | None | ⚠️ Pipeline broken | 3 canary failures on same commit; security fix unmerged (#1941) |
| **LobsterAI** | 4 | 0 | None | 🔴 Dormant | Zero activity; stale issues; no maintainer engagement |
| **Moltis** | 6 | 10 | 1 (4/26) | ✅ Strong | 80% PR closure; rapid security response; UI regression introduced |
| **CoPaw (QwenPaw)** | 11 | 6 | None | ⚠️ Bottlenecked | Zero merges in 24h; 3 critical bugs unassigned; growing pains |
| **ZeroClaw** | 50 | 50 | None | ⚠️ Stabilizing | 19 merges; 8 S1 issues open; Matrix rewrite blocking release |
| **TinyClaw** | 0 | 0 | None | — | No activity |
| **ZeptoClaw** | 0 | 0 | None | — | No activity |

*Health scoring: ✅ Healthy/Strong | ⚠️ At-risk/Mixed | 🔴 Critical/Dormant*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily | 5-50× higher than any competitor; validates reference status |
| **TTS infrastructure** | 7 providers, persona support, per-agent overrides | NanoBot has basic TTS; others lack comparable depth |
| **Release cadence** | 4 betas in single day | Only Moltis shipped; others in accumulation phase |
| **Cross-platform ambition** | macOS, Windows, Docker, native app | ZeroClaw (Windows fixed), NanoClaw (container focus), CoPaw (Tauri migration) |

### Technical Approach Differences
- **OpenClaw**: Monolithic, batteries-included; "everything to everyone" with corresponding complexity
- **NanoBot**: Modular, zero-core-change plugins; clean architecture for channel extensibility
- **ZeroClaw**: WASM plugin sandbox; Rust-centric; Matrix-first messaging
- **NanoClaw**: Container-native; Claude Code integration; SaaS-leaning
- **Moltis**: Security-first (vault encryption, skill quarantine); enterprise positioning

### Community Size
OpenClaw's issue/PR volume suggests **an order of magnitude more active contributors** than any peer, but the 84.6% open issue rate and emotional posts (#65302 "updates killing your product") indicate **scale without proportional maintainer bandwidth**. NanoBot achieves higher merge velocity with fewer raw contributors; Moltis shows tight maintainer-community coordination.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Multi-provider LLM compatibility** | OpenClaw, NanoBot, Hermes, ZeroClaw, CoPaw, PicoClaw | DeepSeek-V4 reasoning format (#6059 ZeroClaw, #3851 CoPaw), Ollama tool calling (#5962 ZeroClaw), Anthropic auth fragility (#6475 Hermes), Groq reasoning_effort (#32638 OpenClaw) |
| **Session reliability & recovery** | OpenClaw, Hermes, NanoBot, ZeroClaw | Transcript rotation (#72435 OpenClaw), auto-resume (#14954/#14982 Hermes), append-only recovery logs (#72436 OpenClaw), session history loss (#3843 CoPaw) |
| **Cost/token optimization** | OpenClaw, NanoBot, PicoClaw, ZeroClaw | Tiered bootstrap loading (#22438 OpenClaw), token-budgeted replay (#3427 NanoBot), intelligent model routing (#295 PicoClaw), context_compression ignored (#4880 ZeroClaw) |
| **Enterprise channel robustness** | NanoBot, Hermes, ZeroClaw, CoPaw, OpenClaw | Slack thread continuity (#3462 NanoBot), WeCom media (#3435 NanoBot), Matrix E2EE (#4657 ZeroClaw), Telegram threading (#15122 Hermes), Discord (#2024 NanoClaw) |
| **Security/secret management** | Moltis, OpenClaw, Hermes, IronClaw | Vault-backed encryption (#885 Moltis), SecretRef false positives (#67463 OpenClaw), env inheritance (#31583 OpenClaw), credential lifecycle (#6475 Hermes), signet-core audit (#2684 IronClaw) |
| **macOS/Windows parity** | OpenClaw, ZeroClaw, NullClaw, LobsterAI | PATH handling (#17890 OpenClaw), setup.bat (#6118 ZeroClaw), WSL2 accept4 loop (#870 NullClaw), Windows skills (#40 LobsterAI) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Reference comprehensiveness | Power users, multi-platform deployers | TypeScript/Node monolith; plugin registry; native app wrappers |
| **NanoBot** | Operational tooling & Slack/enterprise UX | DevOps, Slack-native teams | Clean plugin architecture; session commands; WebUI polish |
| **Hermes Agent** | Gateway resilience & messaging depth | Telegram/Signal operators | Python; Honcho plugin; gateway auto-resume; TurnContract RFCs |
| **PicoClaw** | Hardware/embedded integration | IoT/edge, Sipeed hardware users | Go; serial tools; MCP/Gemini focus; lightweight |
| **NanoClaw** | Container-native SaaS | Hosted deployment, agent-to-agent workflows | Containers; OneCLI; Claude Code bridge; v2 migration |
| **Moltis** | Enterprise security & local LLM | Security-conscious, self-hosted | Vault encryption; skill quarantine; idle LLM unloading |
| **ZeroClaw** | WASM sandbox & Matrix protocol | Privacy-focused, protocol enthusiasts | Rust; WASM plugins; Matrix-rust-sdk; Fluent i18n |
| **CoPaw** | China-market channels & IDE integration | Chinese users, VS Code operators | Electrobun→Tauri; Copilot provider; WeChat/QQ/XiaoYi |
| **IronClaw** | Cryptographic audit & NearAI integration | Near ecosystem, audit-requirement enterprises | Rust; signet-core; capability-based sandbox; NearAI coupling |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Velocity, Pre-Stabilization)
| Project | Velocity Signal | Risk |
|:---|:---|:---|
| **NanoBot** | 124 PRs/24h, 20 merges | Review queue saturation (104 open); timeout bug unpatched |
| **NanoClaw** | 26 PRs, 10 merges | External SPOF (`onecli.dev`); zero community engagement metrics |
| **ZeroClaw** | 50/50 issues/PRs, 19 merges | 8 S1 issues; Matrix rewrite blocking; cancellation token chain |

### Tier 2: Active Stabilization (Focused Bug-Fix Cycles)
| Project | Signal | Near-term Outlook |
|:---|:---|:---|
| **PicoClaw** | Nightly builds; Codex/Gemini fixes in flight | v0.2.8 likely soon; protocol breaking change (#2680) |
| **Moltis** | Security releases; 80% closure; regression introduced | v0.2.8+ imminent; needs UI governance fix |
| **Hermes Agent** | Auto-resume system merged; TurnContract RFCs | Architectural phase; provider subsystem needs refactor |

### Tier 3: Strained at Scale
| Project | Core Problem |
|:---|:---|
| **OpenClaw** | Innovation velocity vs. stability; 423 open issues; emotional user posts |
| **CoPaw** | Zero merges in 24h despite 6 PRs; 3 critical bugs; first-time contributor backlog |

### Tier 4: Maintenance/Dormant
| Project | Status |
|:---|:---|
| **IronClaw** | Pipeline broken (3 canaries); security fix 24 days unmerged; contributor-heavy, low community |
| **NullClaw** | Single critical bug; no activity; atrophy risk |
| **LobsterAI** | Zero PRs; stale issues; possible internal development or resource reallocation |
| **TinyClaw, ZeptoClaw** | No activity recorded |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **Provider API fragmentation accelerating** | DeepSeek-V4, Kimi K2.5, Groq, Anthropic reasoning formats all diverging | Abstract "reasoning mode" and tool-call correlation in provider layers; avoid hardcoding OpenAI assumptions |
| **Session state = core differentiator** | Transcript rotation, recovery logs, auto-resume, E2EE key backup all actively developed | Invest in append-only, auditable session storage; treat session loss as data loss |
| **Container/sandbox isolation maturing** | NanoClaw v2, IronClaw capability boundaries, ZeroClaw WASM, Moltis vaulting | Plan for resource-constrained execution; assume multi-tenant deployment |
| **Cost control as first-class feature** | Token budgets, tiered loading, idle LLM unloading, per-hour ceilings | Build observability (token logging) before optimization; users demand transparency |
| **"Agent-to-agent" orchestration emerging** | NanoBot mailbox, NanoClaw agent groups, OpenClaw subagent hooks, Hermes TurnContract | Design for multi-agent workflows now; session affinity and routing are hard retrofits |
| **macOS/Windows as second-class persists** | PATH issues, EBUSY locks, WSL2 bugs, setup.bat crises | Prioritize CI on non-Linux; accept platform-specific path/locking logic |
| **TTS/voice as table stakes** | OpenClaw 7-provider overhaul; Moltis vault encryption for voice keys | Plan voice reply architecture; API key security for audio providers |
| **Community trust erosion risk** | "Updates killing your product" (#65302); silent failures; regression clusters | Implement feature flags; invest in rollback; communicate breaking changes explicitly |

---

*Report compiled from 13 project digests covering 1,008 issues and 1,042 PRs updated 2026-04-27.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-27

## 1. Today's Overview

NanoBot shows **exceptionally high development velocity** with 124 PRs updated in the last 24 hours (104 open, 20 merged/closed) against a modest 5 issues. This 25:1 PR-to-issue ratio indicates aggressive feature development and active code review, though the large open PR backlog (104) suggests potential bottlenecks in maintainer bandwidth. No new releases were cut today. The project appears healthy and growing, with strong community contribution across command interfaces, channel plugins, and provider robustness.

---

## 2. Releases

**None** — No new releases published today. Latest version remains `0.1.5-post` (referenced in issue #3435).

---

## 3. Project Progress

### Merged/Closed PRs Today (20 total; key highlights)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#3463](https://github.com/HKUDS/nanobot/pull/3463) | Re-bin | Expose session timestamps in model context | Closes context gap where historical turn timing was invisible to LLM |
| [#3430](https://github.com/HKUDS/nanobot/pull/3430) | Re-bin | Render video media attachments in WebUI | Enables secure signed-URL video streaming; no core changes |
| [#3462](https://github.com/HKUDS/nanobot/pull/3462) | Re-bin | Preserve Slack thread context for proactive replies | Fixes Slack thread continuity for cron-triggered messages |
| [#3427](https://github.com/HKUDS/nanobot/pull/3427) | boogieLing | Token-budgeted session replay + DeepSeek payload normalization + session file caps | **Critical production hardening** — prevents unbounded disk growth and DeepSeek failures |
| [#3456](https://github.com/HKUDS/nanobot/pull/3456) | chengyongru | `create-instance` built-in skill + WebUI remote backend | Agent-driven instance creation; GitHub Pages deployment support |
| [#1148](https://github.com/HKUDS/nanobot/pull/1148) | coldxiangyu163 | Improve agent prompt for user confirmation handling | Reduces re-analysis loops on "yes/好的/go ahead" |
| [#2871](https://github.com/HKUDS/nanobot/pull/2871) | dmagyar | Web chat channel with SSE streaming | Browser-based chat with progressive markdown; zero core changes |
| [#3335](https://github.com/HKUDS/nanobot/pull/3335) | Master-640 | "Sayg system" — final mechanism (undocumented) | Unclear scope; merged without description |
| [#410](https://github.com/HKUDS/nanobot/pull/410) | ghoslin01 | Preserve `reasoning_content` and `tool_calls` in history | Fixes multi-turn failures with reasoning models (Kimi K2.5, DeepSeek-R1) |
| [#3454](https://github.com/HKUDS/nanobot/pull/3454) | Re-bin | WebUI `ask-user` choice cards + model settings page | First-class interactive UI flows |

**Key advancement areas:** Session lifecycle hardening, Slack thread reliability, WebUI media/interactivity, and reasoning-model compatibility.

---

## 4. Community Hot Topics

### Most Active by Engagement (comments/reactions)

| Item | Type | Activity | Analysis |
|:---|:---|:---|:---|
| [#3435](https://github.com/HKUDS/nanobot/issues/3435) | Issue (open) | 1 comment | **WeCom enterprise channel media upload failures** — blocking file/image delivery in production WeChat Work deployments |
| [#3466](https://github.com/HKUDS/nanobot/pull/3466) | PR (open) | New | `/history [n]` command — strong UX demand for session introspection |
| [#3467](https://github.com/HKUDS/nanobot/pull/3467) | PR (open) | New | `/clear` command — complements `/history`, addresses cache/hygiene needs |
| [#3465](https://github.com/HKUDS/nanobot/pull/3465) | PR (open) | Links to #3464 | Thread-session routing fix for subagent announces |

**Underlying needs:** Operators want **session transparency** (`/history`, `/clear`) and **reliable enterprise channel integrations** (WeCom media, Slack threads). The rapid command-UX PRs suggest power users are building operational tooling around NanoBot.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **High** | [#3455](https://github.com/HKUDS/nanobot/issues/3455) | `AsyncOpenAI` client has **no timeout**; hangs up to 600s blocking agent loop | **Open** — no PR yet. Commit `076e416` attempted fix but incomplete |
| **High** | [#3435](https://github.com/HKUDS/nanobot/issues/3435) | WeCom channel: media file upload fails with `[file upload failed: xxxxxx]` | **Open** — no PR yet |
| **Medium** | [#3464](https://github.com/HKUDS/nanobot/issues/3464) | Subagent announces from threaded callers route to channel, not originating thread | **PR available:** [#3465](https://github.com/HKUDS/nanobot/pull/3465) |
| **Medium** | [#3443](https://github.com/HKUDS/nanobot/issues/3443) | `reasoning` field leaks into user-visible content in non-streaming path | **Closed** — fixed (no PR linked in data) |

**Critical concern:** The timeout bug (#3455) is a **production reliability landmine** — any hung LLM request blocks the entire agent for 10 minutes. This needs immediate maintainer attention.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Per-channel `sendProgress`/`sendToolHints` config** | [#3452](https://github.com/HKUDS/nanobot/issues/3452) | High | Tagged `good first issue`; small scope, clear enterprise need |
| **Session management commands** (`/history`, `/clear`) | [#3466](https://github.com/HKUDS/nanobot/pull/3466), [#3467](https://github.com/HKUDS/nanobot/pull/3467) | **Very High** | Both PRs open, well-scoped, zero breaking changes |
| **Multi-agent mailbox channel** | [#3461](https://github.com/HKUDS/nanobot/pull/3461) | Medium | Novel inter-agent communication; needs review for security/loop handling |
| **Long-task meta-ReAct tool** | [#3460](https://github.com/HKUDS/nanobot/pull/3460) | Medium | Complex; touches subagent architecture |
| **Instance creation via conversation** | [#3457](https://github.com/HKUDS/nanobot/pull/3457) | Medium | Depends on #3456 merge strategy (was split) |

**Emerging theme:** NanoBot is evolving from single-agent → **multi-agent orchestration platform** (mailbox, long-task decomposition, instance spawning).

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Voice | Frequency |
|:---|:---|:---|
| **Enterprise channel fragility** | WeCom media uploads fail; Slack threads break | Recurring |
| **Opaque session state** | No way to inspect or reset conversation history | New (addressed by PRs) |
| **Hung requests kill agent** | 10-min timeout on LLM calls is unacceptable for production | Critical |
| **Reasoning model compatibility** | DeepSeek, Kimi K2.5 need special payload handling | Being fixed |

### Positive Signals
- WebUI improvements (video, choice cards, settings) show **investment in end-user experience**
- `/ping` command (#3451) indicates operators want **simple operational health checks**
- Zero-core-change plugins (web channel, mailbox) validate **clean architecture**

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#3331](https://github.com/HKUDS/nanobot/pull/3331) — WeCom WebSocket fix | 7 days | **High** — WeCom channel broken for all users | Maintainer review; fixes `TypeError` in WSClient init |
| [#3455](https://github.com/HKUDS/nanobot/issues/3455) — AsyncOpenAI timeout | 1 day | **Critical** — production reliability | Assign owner; likely 1-line fix (`timeout=...` in provider init) |
| [#3458](https://github.com/HKUDS/nanobot/pull/3458) — DeepSeek content normalization | 1 day | Medium | Split from #3427; needs review to close DeepSeek compatibility gap |
| [#3459](https://github.com/HKUDS/nanobot/pull/3459) — Session replay/file-cap invariants | 1 day | Medium | Hardening follow-up to #3427; prevents context drift |

**Maintainer bandwidth alert:** 104 open PRs with undefined comment counts suggests review queue saturation. Prioritizing timeout fix (#3455) and WeCom fix (#3331) would address the most user-facing pain.

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-04-27.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-27

## 1. Today's Overview

Hermes Agent shows **elevated community activity** with 50 issues and 50 PRs updated in the last 24 hours, though merge velocity remains modest with only 1 issue closed and 6 PRs merged/closed against 49 open issues and 44 open PRs. The project appears to be in an **active development phase with accumulation risk**—high issue/PR creation without corresponding resolution throughput. No new releases were cut today. The most significant activity centers on gateway stability improvements, custom provider configuration fixes, and a cluster of architectural RFCs for the messaging gateway subsystem.

---

## 2. Releases

**No new releases** (0 releases today; no version tags in latest releases list).

---

## 3. Project Progress

### Merged/Closed PRs (6 total)

| PR | Status | Summary | Link |
|:---|:---|:---|:---|
| #15122 | **CLOSED** | Fix: Ignore nonnumeric Telegram reply IDs to prevent synthetic gateway reply IDs from breaking Telegram threading | [NousResearch/hermes-agent#15122](https://github.com/NousResearch/hermes-agent/pull/15122) |
| #14982 | **CLOSED** | Fix: Persist in-flight sessions for restart auto-resume (unclean startup recovery) | [NousResearch/hermes-agent#14982](https://github.com/NousResearch/hermes-agent/pull/14982) |
| #14954 | **CLOSED** | Fix: Auto-resume interrupted sessions after restart with synthetic continuation turns | [NousResearch/hermes-agent#14954](https://github.com/NousResearch/hermes-agent/pull/14954) |
| #13348 | **CLOSED** | Fix: Honor shebang for pre-run cron scripts instead of forcing Python interpreter | [NousResearch/hermes-agent#13348](https://github.com/NousResearch/hermes-agent/pull/13348) |
| #11192 | **CLOSED** | Fix: Reject whitespace-only tool queries in Honcho plugin | [NousResearch/hermes-agent#11192](https://github.com/NousResearch/hermes-agent/pull/11192) |
| #6475 (Issue) | **CLOSED** | Anthropic Claude subscription auth "out of extra usage" error resolved | [NousResearch/hermes-agent#6475](https://github.com/NousResearch/hermes-agent/issues/6475) |

### Key Advancements

- **Gateway resilience**: Three closed PRs form a coherent auto-resume system for interrupted gateway sessions—critical for production messaging deployments
- **Cross-platform robustness**: Cron shebang fix (#13348) and Telegram reply ID hardening (#15122) address real deployment edge cases
- **Plugin input hygiene**: Honcho whitespace fix (#11192) prevents silent tool failures

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | 👍 | Analysis |
|:---|:---|:---|:---|:---|
| 1 | **Issue #6475** — Anthropic Claude "out of extra usage" auth error | 27 | 15 | **[CLOSED]** Subscription billing edge case with Anthropic's metered API; high engagement reflects provider auth fragility as critical path. Users need reliable third-party API credential lifecycle management. | [NousResearch/hermes-agent#6475](https://github.com/NousResearch/hermes-agent/issues/6475) |
| 2 | **Issue #16120** — MiniMax China API 404 in `hermes doctor` | 4 | 0 | Diagnostic tooling assumes `/v1/models` endpoint universally implemented; reveals need for provider-specific health check strategies. Chinese API market divergence from OpenAI spec. | [NousResearch/hermes-agent#16120](https://github.com/NousResearch/hermes-agent/issues/16120) |
| 3 | **Issue #8404** — `gateway.log` never attached in CLI-initiated gateway | 3 | 0 | Idempotency guard prevents proper logging initialization sequence. Architectural initialization order bug affecting observability. | [NousResearch/hermes-agent#8404](https://github.com/NousResearch/hermes-agent/issues/8404) |
| 4 | **Issue #4807** — CLI unreadable on light terminal backgrounds | 3 | 9 | Accessibility/design debt with 9 upvotes; no light mode after multiple built-in skins. User experience blocker for non-dark-terminal users. | [NousResearch/hermes-agent#4807](https://github.com/NousResearch/hermes-agent/issues/4807) |
| 5 | **Issue #9721** — Cannot set custom HTTP headers for custom providers | 3 | 0 | Cloudflare WAF blocking due to missing User-Agent configurability. Security middleware incompatibility with generic OpenAI-compatible providers. | [NousResearch/hermes-agent#9721](https://github.com/NousResearch/hermes-agent/issues/9721) |

### Underlying Needs

- **Provider ecosystem maturity**: Auth, diagnostics, and header customization gaps suggest custom provider support is production-incomplete
- **Observability reliability**: Logging initialization and health check false negatives erode operator trust
- **Accessibility**: CLI theming remains an unaddressed user experience gap despite clear demand

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? | Link |
|:---|:---|:---|:---|:---|
| **P2** | #8404 | `gateway.log` never attached when CLI initializes logging before gateway startup | None open | [NousResearch/hermes-agent#8404](https://github.com/NousResearch/hermes-agent/issues/8404) |
| **P2** | #9721 | Custom provider HTTP headers not configurable — Cloudflare 403 | None open | [NousResearch/hermes-agent#9721](https://github.com/NousResearch/hermes-agent/issues/9721) |
| **P2** | #15765 | Browser automation fails on Linux root/VPS — needs `--no-sandbox`, Chromium auto-detection | None open | [NousResearch/hermes-agent#15765](https://github.com/NousResearch/hermes-agent/issues/15765) |
| **P2** | #16254 | `custom = OpenAI` hardcoded in three redundant code paths; `api_mode` ignored, `key_env` unparsed | None open | [NousResearch/hermes-agent#16254](https://github.com/NousResearch/hermes-agent/issues/16254) |
| **P2** | #16027 | `image_generate` tool permanently excluded due to plugin discovery race at session init | None open | [NousResearch/hermes-agent#16027](https://github.com/NousResearch/hermes-agent/issues/16027) |
| **P2** | #16259 | `/model` auto-detect hijacks `custom:*` providers to OpenRouter | None open | [NousResearch/hermes-agent#16259](https://github.com/NousResearch/hermes-agent/issues/16259) |
| **P2** | #16258 | SMS gateway: bind to `127.0.0.1` by default, retry-after-giving-up loop | None open | [NousResearch/hermes-agent#16258](https://github.com/NousResearch/hermes-agent/issues/16258) |
| **P2** | #9647 | `delegate_task` ignores `max_api_retries` config, uses hardcoded 3 | **PR #9648 open** | [NousResearch/hermes-agent#9647](https://github.com/NousResearch/hermes-agent/issues/9647) |
| **P2** | #9659 | launchd `KeepAlive` conditional on `SuccessfulExit`, misses clean restarts | None open | [NousResearch/hermes-agent#9659](https://github.com/NousResearch/hermes-agent/issues/9659) |
| **P2** | #9679 | CLI `_ensure_runtime_credentials()` overwrites manual `/model` switch | None open | [NousResearch/hermes-agent#9679](https://github.com/NousResearch/hermes-agent/issues/9679) |
| **P2** | #9711 | Named custom providers ignore `api_mode`, always create OpenAI client | None open | [NousResearch/hermes-agent#9711](https://github.com/NousResearch/hermes-agent/issues/9711) |
| **P2** | #9712 | `delegate_task(acp_command=...)` silently ignored under Anthropic parent | None open | [NousResearch/hermes-agent#9712](https://github.com/NousResearch/hermes-agent/issues/9712) |
| **P3** | #4807 | CLI unreadable on light/cream terminal backgrounds | None open | [NousResearch/hermes-agent#4807](https://github.com/NousResearch/hermes-agent/issues/4807) |
| **P3** | #16257 | `google_api.py` crashes on Python 3.9 — missing `from __future__ import annotations` | None open | [NousResearch/hermes-agent#16257](https://github.com/NousResearch/hermes-agent/issues/16257) |
| **P3** | #8120 | `vision_analyze` timeouts on WSL2 local images | None open | [NousResearch/hermes-agent#8120](https://github.com/NousResearch/hermes-agent/issues/8120) |

### Stability Assessment

**Critical pattern**: Multiple P2 bugs share a root cause—**custom provider/auxiliary client architecture has fragmented, redundant code paths** (#16254, #9721, #9711, #9712, #9679). This suggests the provider abstraction layer needs refactoring, not point fixes. The `api_mode` dispatch logic is inconsistently implemented across CLI, gateway, and agent contexts.

---

## 6. Feature Requests & Roadmap Signals

### New Feature Requests (April 26 cluster)

| Issue | Description | Predicted Priority | Link |
|:---|:---|:---|:---|
| #16103-#16109 | **Gateway TurnContract architecture** (7 related RFCs by `yepyhun`): Right-sized context/tool/model profiles, tool capability registry, context budget compiler, deterministic simple-answer renderer, event idempotency/cancellation, first-visible-commitment SLO, split heavy Gateway bundles | **High** — architectural foundation for messaging scalability | [NousResearch/hermes-agent#16103](https://github.com/NousResearch/hermes-agent/issues/16103) through [NousResearch/hermes-agent#16109](https://github.com/NousResearch/hermes-agent/issues/16109) |
| #16077 | **Curator**: Background skill maintenance for agent-created skills (PR #16049) | Medium — merged PR suggests near-term release | [NousResearch/hermes-agent#16077](https://github.com/NousResearch/hermes-agent/issues/16077) |
| #16255 | Sync auto-generated session titles to Telegram forum topics | Low — platform-specific polish | [NousResearch/hermes-agent#16255](https://github.com/NousResearch/hermes-agent/issues/16255) |
| #9656 | Echo inbound voice-message transcript back to user for verification | Low — TTS/UX enhancement | [NousResearch/hermes-agent#9656](https://github.com/NousResearch/hermes-agent/issues/9656) |
| #9673 | Resume interrupted tasks on restart | Medium — partially addressed by closed PRs #14954/#14982 | [NousResearch/hermes-agent#9673](https://github.com/NousResearch/hermes-agent/issues/9673) |
| #8694 | Add AWS Bedrock as first-class provider (SigV4 auth) | Medium — enterprise demand, complex auth | [NousResearch/hermes-agent#8694](https://github.com/NousResearch/hermes-agent/issues/8694) |

### Next-Version Predictions

- **Curator skill maintenance** (#16077 / PR #16049) likely in imminent release given active review request
- **Gateway auto-resume system** (#14954, #14982, #9673) forms coherent feature set for gateway reliability
- **TurnContract RFCs** (#16103-#16109) indicate major architectural initiative; may spawn implementation PRs in coming weeks

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Provider configuration fragility** | #9721, #9711, #9712, #16254, #9679, #6475 | 🔴 High — core functionality unreliable for non-OpenAI providers |
| **Gateway operational reliability** | #8404, #9659, #9673, #15765, #16258 | 🔴 High — logging, process management, SMS, browser automation gaps |
| **Observability/debugging** | #16120, #8404 | 🟡 Medium — false negatives in diagnostics, missing logs |
| **Terminal accessibility** | #4807 (9 👍) | 🟡 Medium — exclusionary default theming |
| **Windows/ cross-platform** | #9653, #8120 | 🟡 Medium — path handling, WSL2 performance |

### Use Cases Emerging

- **VPS/server deployment**: Root browser automation (#15765), SMS gateway (#16258), systemd/launchd integration (#9659)
- **Chinese API ecosystem**: MiniMax integration (#16120)
- **Enterprise/cloud provider diversity**: AWS Bedrock (#8694), Cloudflare-proxied endpoints (#9721)
- **Voice/messaging platforms**: Telegram forum sync (#16255), voice transcript echo (#9656), Signal group V2 (#16260)

### Satisfaction Signals

- Strong engagement on closed auth issue (#6475, 27 comments, 15 👍) suggests responsive maintainer attention to critical blockers
- Active RFC cluster (#16103-#16109) indicates healthy architectural discourse

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Issue | Action Needed | Link |
|:---|:---|:---|:---|:---|
| #4807 | 24 days | CLI light mode — 9 upvotes, no assignee | Design decision on theming system | [NousResearch/hermes-agent#4807](https://github.com/NousResearch/hermes-agent/issues/4807) |
| #8694 | 14 days | AWS Bedrock first-class provider — 1 👍 | Provider roadmap decision; SigV4 implementation complex | [NousResearch/hermes-agent#8694](https://github.com/NousResearch/hermes-agent/issues/8694) |
| #9646 (PR) | 13 days | LanceDB memory provider — open, no merge | Review for memory subsystem expansion | [NousResearch/hermes-agent#9646](https://github.com/NousResearch/hermes-agent/pull/9646) |
| #8404 | 15 days | `gateway.log` initialization — P2 | Architectural fix for logging lifecycle | [NousResearch/hermes-agent#8404](https://github.com/NousResearch/hermes-agent/issues/8404) |
| #8120 | 15 days | WSL2 vision timeout — no reproduction steps confirmed | Environment-specific debugging needed | [NousResearch/hermes-agent#8120](https://github.com/NousResearch/hermes-agent/issues/8120) |
| #9686 | 12 days | Spam: Chinese API reseller advertisement | **Moderation action needed** | [NousResearch/hermes-agent#9686](https://github.com/NousResearch/hermes-agent/issues/9686) |

### Structural Concern

The **custom provider/auxiliary client subsystem** has accumulated ~6 related P2 bugs without a unifying fix. PR #9648 addresses one symptom (`max_api_retries` inheritance). A maintainer should triage whether #16254's proposed "single dispatch table" refactor should supersede individual patches.

---

*Digest generated from GitHub activity data for NousResearch/hermes-agent on 2026-04-27.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-27

## 1. Today's Overview

PicoClaw shows **high development velocity** with 16 items updated in the last 24 hours (6 issues, 10 PRs), indicating an active pre-release stabilization period for the v0.2.7 cycle. The project is processing community contributions rapidly with 9 open PRs under review against 1 merged/closed. A nightly build was published, suggesting ongoing integration testing. The dominant themes are **Codex/ChatGPT OAuth integration fixes**, **MCP/Gemini compatibility**, and **hardware tooling expansion** (serial support). Notably, two PRs address empty-response bugs in the Codex backend, indicating this integration path is a current priority with real user impact.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.7-nightly.20260426.77be169d](https://github.com/sipeed/picoclaw/compare/v0.2.7...main) | Nightly (automated) | Automated build from `main` at commit `77be169d`; explicitly flagged as potentially unstable. No manual changelog provided. |

**⚠️ Caution advised** — nightly builds are not production-ready. Users on v0.2.7 stable should monitor for upcoming patch release given the active bug-fix PRs in flight.

---

## 3. Project Progress

### Merged/Closed Today

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#2672](https://github.com/sipeed/picoclaw/pull/2672) — **CLOSED** | lc6464 | Structured `tool_calls` support for web chat + collapsible assistant blocks + reasoning content display toggle | **Foundation laid** for tool-call UX; closed (not merged), suggesting potential rework or superseded by [#2680](https://github.com/sipeed/picoclaw/pull/2680) |

### Key Open PRs Advancing

| PR | Domain | Progress Signal |
|----|--------|---------------|
| [#2680](https://github.com/sipeed/picoclaw/pull/2680) | Core protocol | **Breaking change**: Unifies message kind handling (`"kind": "thought"` vs `"thought": true`) — indicates v0.2.8+ may have protocol incompatibilities |
| [#2677](https://github.com/sipeed/picoclaw/pull/2677) | Observability | New `pkg/events` runtime infrastructure — major architectural addition for agent monitoring |
| [#2673](https://github.com/sipeed/picoclaw/pull/2673) | Hardware tools | Cross-platform serial tool (Linux/macOS/Windows) — expands PicoClaw's IoT/embedded use cases |

---

## 4. Community Hot Topics

| Rank | Item | Engagement | Underlying Need |
|------|------|-----------|---------------|
| 🔥 1 | [#295](https://github.com/sipeed/picoclaw/issues/295) Intelligent Model Routing | **10 comments**, open since Feb 16 | **Cost control at scale** — users need automatic tiering between cheap/fast and expensive/capable models; currently forced to over-provision |
| 🔥 2 | [#1042](https://github.com/sipeed/picoclaw/issues/1042) `exec` tool guardCommand bug | **5 comments**, open since Mar 4 | **Security vs. usability tension** — regex-based path validation is over-blocking legitimate commands (e.g., `curl` with URL parameters misinterpreted as traversal); needs semantic command analysis |
| 3 | [#2676](https://github.com/sipeed/picoclaw/issues/2676) Exa search provider | 1 comment + reference to closed PR #997 | **Search diversity** — user questioning why solid PR was closed; possible maintainer bandwidth or strategic direction issue |

**Analysis**: The model routing discussion (#295) has sustained engagement without resolution, suggesting it's either architecturally complex or deprioritized. The exec tool safety issue (#1042) represents a **reliability blocker** for automation use cases.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|----------|------|-------------|------------|
| **🔴 High** | [#2674](https://github.com/sipeed/picoclaw/issues/2674) | **Codex OAuth: empty assistant responses** — ChatGPT backend streams via `response.output_item.done`, PicoClaw fails to capture content, shows "empty response" fallback | **Fix in flight**: [#2679](https://github.com/sipeed/picoclaw/pull/2679) addresses `response.output_text.delta` streaming |
| **🔴 High** | [#2681](https://github.com/sipeed/picoclaw/pull/2681) / [#2668](https://github.com/sipeed/picoclaw/issues/2668) | **MCP + Gemini crash (HTTP 400)** — complex JSON Schemas from MCP tools break Gemini function calling | **Fix ready for review**: Schema sanitizer PR open |
| **🟡 Medium** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | `exec` guardCommand false positives on URL parameters | **No fix PR identified** |
| **🟡 Medium** | [#2628](https://github.com/sipeed/picoclaw/issues/2628) — **CLOSED** | v0.2.7 "Think"/"reasoning" UI noise — user confusion about new display elements | Closed; UX fix likely in [#2663](https://github.com/sipeed/picoclaw/pull/2663) (duplicate `showThoughtsAtom` fix) |

**Regression note**: The Codex empty-response bug (#2674) appears to be a **v0.2.7 regression or newly exposed by ChatGPT backend changes**, with two independent PRs targeting the same symptom space.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release | Rationale |
|---------|--------|---------------------------|-----------|
| **Model Router / Intelligent Routing** | [#295](https://github.com/sipeed/picoclaw/issues/295) | Medium-High | Long-running, well-scoped, cost-focused; aligns with v0.2.x optimization theme |
| **Exa Search Provider** | [#2676](https://github.com/sipeed/picoclaw/issues/2676) | High | PR #997 existed; community asking for revival; low implementation cost |
| **Cross-platform Serial Tool** | [#2673](https://github.com/sipeed/picoclaw/pull/2673) | High | PR open, hardware-aligned with Sipeed's embedded focus |
| **Runtime Events/Observability** | [#2677](https://github.com/sipeed/picoclaw/pull/2677) | Medium | Architectural; may target v0.3.0 |
| **Network Retry with Backoff** | [#2669](https://github.com/sipeed/picoclaw/pull/2669) | High | Production reliability essential; PR ready |
| **Pretty-printed Tool Feedback** | [#2670](https://github.com/sipeed/picoclaw/pull/2670) | High | Small UX fix, PR complete with tests |

**Prediction**: v0.2.8 will likely ship with **Codex OAuth fixes**, **Gemini MCP compatibility**, **serial tool**, and **network retry** as headline items.

---

## 7. User Feedback Summary

### Pain Points

| Issue | Frequency Signal | User Impact |
|-------|---------------|-------------|
| Empty responses with ChatGPT Plus/Codex OAuth | New, high severity | **Broken paid integration** — users with ChatGPT subscriptions cannot use PicoClaw |
| HTML-escaped display (`\u0026` for `&&`) | PR #2670 | Tool output readability degraded |
| "Thinking"/"Tools" UI clutter | #2628 | Cognitive load, especially for non-technical users |
| False security blocks on exec tool | #1042 | Automation reliability — simple commands rejected |
| Raspberry Pi support gaps | [#2675](https://github.com/sipeed/picoclaw/issues/2675) | Embedded/edge deployment barrier |

### Satisfaction Signals
- Active contribution culture: multiple community PRs in single day
- Rapid response to v0.2.7 UX feedback (`showThoughtsAtom` fix in #2663)

### Dissatisfaction Signals
- [#2676](https://github.com/sipeed/picoclaw/issues/2676) questioning why Exa PR was closed — **transparency gap**
- Model routing (#295) unresolved for 10+ weeks despite engagement

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#295](https://github.com/sipeed/picoclaw/issues/295) Model Routing | ~10 weeks | **Strategic drift** — competitor projects implementing similar; may lose cost-conscious users | Maintainer decision: commit to milestone or document why deferred |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) exec guardCommand | ~8 weeks | **Security UX debt** — pattern suggests regex approach fundamentally flawed | Needs RFC on command classification vs. path validation |
| [#2239](https://github.com/sipeed/picoclaw/pull/2239) Docker privileged mode | ~4 weeks | **Security vs. hardware access tradeoff** | Review stalled; merge or document alternative |

**Maintainer attention recommended**: The model routing issue (#295) is the longest-running high-engagement item without resolution. A milestone assignment or architectural spike would signal project health to the community.

---

*Digest generated from GitHub activity 2026-04-26. All links: [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-27

## 1. Today's Overview

NanoClaw shows **very high development velocity** with 26 PRs and 7 issues updated in the last 24 hours, indicating active sprint activity likely tied to the v2 release cycle. No new releases were cut today, suggesting the team is stabilizing features before tagging. The majority of closed PRs (10 of 26) focus on v2 setup robustness, container runner hardening, and MCP tooling fixes—critical path items for production readiness. However, **duplicate issues (#2038/#2039) and infrastructure dependency failures (onecli.dev returning 521)** reveal operational strain. The project appears to be in a pre-release stabilization phase with strong contributor throughput but emerging reliability concerns around external dependencies.

---

## 2. Releases

**No new releases today.**

---

## 3. Project Progress

### Merged/Closed PRs (10 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#2037](https://github.com/qwibitai/nanoclaw/pull/2037) | unforced | **New-agent wizard end-to-end** — agent group creation from web UI without Claude Code | 🟢 Major UX unlock for "work easily end-to-end" |
| [#2035](https://github.com/qwibitai/nanoclaw/pull/2035) | gavrielc | Advanced settings flow with remote OneCLI support | 🟢 Setup flexibility; builds on #2030 |
| [#2030](https://github.com/qwibitai/nanoclaw/pull/2030) | evenisse | Remote OneCLI option in setup wizard | 🟢 Gateway/hosted deployment support |
| [#2023](https://github.com/qwibitai/nanoclaw/pull/2023) | KeXin95 | Pass `ANTHROPIC_BASE_URL`/`ANTHROPIC_AUTH_TOKEN` into agent containers | 🟢 Custom endpoint support; fixes 401 errors |
| [#2031](https://github.com/qwibitai/nanoclaw/pull/2031) | jsboige | Heartbeat freshness across tool calls + widened ceiling | 🔴 Critical stability fix for MCP hang→kill loop |
| [#2028](https://github.com/qwibitai/nanoclaw/pull/2028) | jsboige | Dynamic `allowedTools` from configured MCP servers | 🔴 Fixes silent MCP server failures in Claude Code 2.1.116+ |
| [#2024](https://github.com/qwibitai/nanoclaw/pull/2024) | openclaw-shi | Discord bot ID allowlist (`DISCORD_ALLOWED_BOT_IDS`) | 🟡 RSS bot integration support |
| [#1738](https://github.com/qwibitai/nanoclaw/pull/1738) | zxela-claude | **Rename NanoClaw → Argus** (942 substitutions, 100 files) | ⚠️ Breaking; brand transition |
| [#16](https://github.com/qwibitai/nanoclaw/pull/16) | gavrielc | Escape regex in assistant name trigger pattern | 🟡 Security/stability hardening |
| [#12](https://github.com/qwibitai/nanoclaw/pull/12) | Fix `lastAgentTimestamp` update only on success | 🟡 Message reliability on retry |

**Key advancement:** The v2 setup flow is now functionally complete with local, remote, and advanced OneCLI configurations. Container runner stability improved significantly with two critical MCP-related fixes.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#2037](https://github.com/qwibitai/nanoclaw/pull/2037) — New-agent wizard | Closed, high-impact merge | **Underlying need:** Eliminate Claude Code dependency for basic operations; signals push toward self-service SaaS model |
| [#2033](https://github.com/qwibitai/nanoclaw/pull/2033) — Defer task messages from follow-up polling | Open, pairs with #2032 | **Underlying need:** Correct task scheduling semantics; race condition in container lifecycle management |
| [#2002](https://github.com/qwibitai/nanoclaw/pull/2002) — Origin-session threading for agent-to-agent replies | Open, complex routing fix | **Underlying need:** Multi-session agent groups are becoming common; session affinity is a core architectural challenge |

**Note:** No items have comments or reactions (`👍: 0` across all), suggesting either (a) fresh issues/PRs, (b) discussion happening off-GitHub (Discord/Slack), or (c) low community engagement relative to core team velocity.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Details |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#2026](https://github.com/qwibitai/nanoclaw/issues/2026) — `onecli.dev` returning 521 | **Open** | **No** | External dependency down; blocks all fresh installs. **No workaround documented.** |
| 🔴 **Critical** | [#2031](https://github.com/qwibitai/nanoclaw/pull/2031) — Container froze on MCP call, killed by ceiling | **Fixed** | #2031 merged | Heartbeat not refreshed during tool calls; 30-min hang → kill. Mitigated but root cause (mcp-remote bridge hang) may persist. |
| 🟠 **High** | [#2032](https://github.com/qwibitai/nanoclaw/issues/2032) — Scheduled tasks bypass `wakeAgent` gating | **Open** | #2033 open | Security/efficiency issue: LLM invoked when pre-check says skip. |
| 🟠 **High** | [#1973](https://github.com/qwibitai/nanoclaw/issues/1973) — `register-claude-token.sh` fails, `onecli not found` | **Open** | No | PATH propagation bug in bash subprocess; fresh Linux installs blocked. |
| 🟡 **Medium** | [#2025](https://github.com/qwibitai/nanoclaw/issues/2025) — `nanoclaw.sh` hangs on "Installing the basics…" with sudo password | **Open** | No | UX/deadlock issue; no TTY handling for password prompt. |
| 🟡 **Medium** | [#2028](https://github.com/qwibitai/nanoclaw/pull/2028) — Silent MCP server failures | **Fixed** | #2028 merged | Claude Code 2.1.116+ hard whitelist broke previously-working configs. |

**Infrastructure risk:** Two separate issues (#2026, #1973) involve `onecli` availability/discovery. The 521 error on `onecli.dev` is an **external single point of failure** with no apparent fallback or mirror.

---

## 6. Feature Requests & Roadmap Signals

| Item | Signal | Likelihood in Next Version |
|:---|:---|:---|
| [#2029](https://github.com/qwibitai/nanoclaw/issues/2029) — Container resource limits (`--memory`, `--cpus`, `--pids-limit`) | Production hardening; runaway agent containment | **High** — safety-critical, small scope |
| [#2027](https://github.com/qwibitai/nanoclaw/pull/2027) — `host-actions` container skill | Agent self-management capabilities | **Medium-High** — aligns with v2 autonomy goals |
| [#2036](https://github.com/qwibitai/nanoclaw/pull/2036) — Per-group env vars in `ContainerConfig` | Multi-tenancy, secrets isolation | **High** — PR open, follows #2030/#2035 pattern |
| [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) — Matrix E2EE + per-group model/effort config | Privacy-focused enterprise demand | **Medium** — large PR, long-running, needs review bandwidth |
| [#1931](https://github.com/qwibitai/nanoclaw/pull/1931) — v1 → v2 migration flow | Adoption blocker for existing users | **High** — explicitly marked experimental, being iterated |

**Predicted next release focus:** Container safety (#2029), setup completion (#2036, migration), and MCP ecosystem stability.

---

## 7. User Feedback Summary

### Pain Points (from issues, no explicit satisfaction metrics)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Setup friction on fresh systems** | #1973 (PATH), #2025 (sudo hang), #2026 (onecli.dev down) | 🔴 Blocking |
| **Opaque failures / poor error messages** | #2025 hang without feedback, #2026 bare "521" error | 🟠 High |
| **Container resource safety** | #2029 — no limits, OOM risk on shared hosts | 🟠 High |
| **External dependency fragility** | onecli.dev as hard dependency with no fallback | 🔴 Critical |
| **Multi-session routing complexity** | #2002, #2034 — replies land in wrong session | 🟡 Medium |

### Use Cases Emerging
- **SaaS/hosted deployment:** Remote OneCLI (#2030/#2035) + resource limits (#2029) suggest users running NanoClaw on shared infrastructure
- **Discord bot integrations:** #2024 allowlist for RSS bots indicates workflow automation use cases
- **Agent-to-agent workflows:** #2002/#2034 session routing fixes show multi-agent orchestration is active in production

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) — Matrix E2EE + per-group config | 23 days open | **Staleness, merge conflicts** | Maintainer review; large feature PR at risk of bit-rot |
| [#1290](https://github.com/qwibitai/nanoclaw/pull/1290) — Pre-flight credential validation | 38 days open | **Reliability gap** | Simple fix, low attention; causes support burden (#1289) |
| [#1931](https://github.com/qwibitai/nanoclaw/pull/1931) — v1→v2 migration | 4 days open | **Adoption blocker** | Iteration toward non-experimental; critical for user retention |
| [#2020](https://github.com/qwibitai/nanoclaw/pull/2020) — Automated PR review workflow | 1 day open | **Process automation** | Companion PR to external system; may need coordination |

**Critical attention needed:** [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) is the longest-running significant feature PR and aligns with enterprise privacy requirements. Without maintainer review, contributor effort may be lost to conflicts.

---

## Project Health Assessment

| Dimension | Score | Note |
|:---|:---|:---|
| Velocity | ⭐⭐⭐⭐⭐ | 26 PRs in 24h is exceptional |
| Stability | ⭐⭐⭐☆☆ | Critical infra dependency down; MCP hang issues |
| Community | ⭐⭐☆☆☆ | Zero reactions/comments; core-team driven |
| Merge Quality | ⭐⭐⭐⭐☆ | Good closure rate (10/26), focused PRs |
| Operational Maturity | ⭐⭐⭐☆☆ | External SPOF, no release today despite high activity |

**Overall:** NanoClaw is in aggressive pre-release stabilization with strong engineering throughput but exposed infrastructure risk. The `onecli.dev` outage (#2026) is an immediate operational concern that could block new user acquisition.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-27

---

## 1. Today's Overview

NullClaw shows minimal activity over the past 24 hours, with a single active issue receiving an update and no pull request or release activity. The project appears to be in a maintenance phase rather than active feature development. The sole open issue (#870) represents a significant runtime stability concern on WSL2, a common development environment. With zero merged PRs and no releases, velocity remains flat. Overall project health appears stable but stagnant—no regressions were introduced today, yet no progress was made on known issues.

---

## 2. Releases

*No new releases.*

---

## 3. Project Progress

*No merged or closed PRs today.*

No features advanced or were fixed in the last 24 hours. The zero-PR state suggests either maintainer bandwidth constraints or a lull in contributor submissions.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#870 Gateway accept4 busy loop (100% CPU) on WSL2](https://github.com/nullclaw/nullclaw/issues/870) | 1 comment, updated 2026-04-26 | **Underlying need:** Reliable gateway operation on Windows development environments. WSL2 is a primary workflow for many developers; 100% CPU usage renders local development problematic (laptop battery drain, thermal throttling, noisy fans). The `accept4` syscall behavior suggests an event-loop/epoll implementation issue where socket readiness events are being continuously re-triggered without proper handling. This likely affects any non-Linux platform with edge-triggered epoll emulation. |

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#870 Gateway accept4 busy loop (100% CPU) on WSL2](https://github.com/nullclaw/nullclaw/issues/870) | Open, confirmed | None |

**Details:** This is a classic busy-loop bug in network I/O multiplexing. The `accept4` system call (used for accepting connections with flags like `SOCK_NONBLOCK`) appears to be failing or returning a condition that the gateway's event loop misinterprets, causing immediate re-polling. On WSL2, `accept4` behavior can differ from native Linux due to kernel translation layer differences. The reporter notes functionality is preserved—suggesting the loop is on an auxiliary thread (likely the acceptor thread) rather than the main event loop.

**Impact:** Blocks efficient development on Windows/WSL2; may affect Docker Desktop users (which uses WSL2 backend).

---

## 6. Feature Requests & Roadmap Signals

*No feature requests opened today.*

The absence of new feature requests, combined with the single active bug, suggests the community's immediate priority is stability over expansion. If resolved, [#870](https://github.com/nullclaw/nullclaw/issues/870) may prompt:

- Platform-specific CI testing for WSL2
- Migration from edge-triggered to level-triggered epoll, or adoption of `io_uring` with fallback
- Configuration option to select polling backend

---

## 7. User Feedback Summary

| Pain Point | Source | Severity |
|------------|--------|----------|
| 100% CPU usage during idle gateway operation | [#870](https://github.com/nullclaw/nullclaw/issues/870) | High — development workflow disruption |

**Use case:** Running NullClaw gateway for Telegram bot development on WSL2 (Windows 11).

**Satisfaction signal:** Reporter explicitly notes "gateway appears functional" — core features work, but operational characteristics are unacceptable.

**Dissatisfaction pattern:** Silent resource consumption bugs are particularly damaging to developer trust; users may migrate to alternatives if local development experience degrades.

---

## 8. Backlog Watch

| Issue | Age | Risk | Needs |
|-------|-----|------|-------|
| [#870 Gateway accept4 busy loop (100% CPU) on WSL2](https://github.com/nullclaw/nullclaw/issues/870) | 2 days since creation, 1 day since last update | **Escalating** — affects common dev platform, no maintainer response yet | Maintainer triage; platform-specific reproduction; likely fix in socket polling logic |

**Concern:** With only 1 comment and no maintainer engagement visible, this issue risks becoming a "ghost" bug—known but unaddressed. The WSL2 specificity may lead to deprioritization if maintainers lack Windows testing infrastructure.

**Recommended action:** Request `strace`/`perf` output from reporter; consider adding `good first issue` label if root cause is isolated to a single polling check.

---

*Digest generated from nullclaw/nullclaw GitHub data — 2026-04-27*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-27

## 1. Today's Overview

IronClaw shows **high maintenance velocity but mixed health signals** for the 24-hour period ending 2026-04-27. The project generated 12 PR updates (10 still open, 2 closed) and 5 new issues, all remaining open. Notably, **all 5 issues are automated canary failures or infrastructure gaps**, with zero community-reported bugs or feature discussions resolved. The dependency update pipeline is extremely active—Dependabot alone filed 4 substantial PRs—while human-contributed code spans security hardening, cryptographic audit trails, and deployment flexibility. However, **three consecutive live canary failures on the same commit (7404e7d)** suggest a potentially broken staging pipeline or flaky integration tests that demand immediate attention.

---

## 2. Releases

**No new releases** (0 published).

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Status | Summary | Link |
|:---|:---|:---|:---|
| **#2969** | **CLOSED** | `feat(reborn): clean up runtime authority boundaries` — Sealed process resource reservations against caller-supplied ID bypasses; moved dispatch port contracts into `ironclaw_host_api`; eliminated production `ironclaw_capabilities -> ironclaw_dispatcher` dependency | [nearai/ironclaw#2969](https://github.com/nearai/ironclaw/pull/2969) |
| **#2964** | **CLOSED** | `merge upstream changes from 0.26.0` — Massive cross-cutting sync touching 11 scopes (agent, all channels, DB layers, sandbox, docs, dependencies); marked as "New feature" by author chrismcfee but closed same day without merge | [nearai/ironclaw#2964](https://github.com/nearai/ironclaw/pull/2964) |

**Analysis:** PR #2969 represents meaningful security architecture work—removing a dangerous production dependency cycle and hardening resource isolation. PR #2964's closure is ambiguous; its XL size and DB migration tag suggest it may have been superseded, split, or abandoned due to merge conflicts.

---

## 4. Community Hot Topics

**No items with comments or reactions exist in today's dataset.** All 5 issues and 10 open PRs show `Comments: 0` and `👍: 0`, indicating:

- **Low community engagement** on current open items
- Automated tooling (Dependabot, GitHub Actions) dominates visible activity
- Human contributions lack visible peer review momentum

**Most structurally significant open PRs by scope:**

| PR | Significance | Link |
|:---|:---|:---|
| **#2684** — `feat(signing): integrate signet-core for cryptographic tool call audit` (XL, willamhou) | Ed25519 signing + tamper-evident audit logging for all tool calls; zero DB schema changes | [nearai/ironclaw#2684](https://github.com/nearai/ironclaw/pull/2684) |
| **#1120** — `feat(prismer): add Prismer Cloud IM WASM channel` (XL, willamhou) | New WASM channel following Telegram pattern; dual webhook/polling; two-step JWT auth | [nearai/ironclaw#1120](https://github.com/nearai/ironclaw/pull/1120) |

**Underlying need:** Enterprise-grade auditability and multi-channel extensibility are clearly prioritized by regular contributors, but broader community validation is absent.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix PR? |
|:---|:---|:---|:---|
| **🔴 Critical** | **#2966** — `Live canary failed: private-oauth` | Dedicated runner OAuth lane failing; blocks private auth verification | **None identified** |
| **🔴 Critical** | **#2967** — `Live canary failed: provider-matrix anthropic` | Anthropic provider integration failing in CI | **None identified** |
| **🔴 Critical** | **#2968** — `Live canary failed: provider-matrix openai-compatible` | OpenAI-compatible provider lane failing (same run as #2967) | **None identified** |
| **🟡 High** | **#2963** — `Docker Hub image missing` | Published Docker docs reference non-existent `nearai/ironclaw:latest` image; pull access denied | **None identified** |
| **🟡 High** | **#2961** — `fix(llm): honor api_key_required in unusable_reason` (PR) | Self-hosted openai_compatible setups silently demote to NearAI on restart; fixes #2946 | **PR #2961** (open, willamhou) |
| **🟡 High** | **#2960** — `fix(mcp): skip OAuth discovery for stdio/unix transports` (PR) | stdio MCP servers fail activation due to unconditional OAuth pre-flight; fixes #2923 | **PR #2960** (open, willamhou) |
| **🟢 Medium** | **#1941** — `fix(mcp): validate server names with allowlist` (PR) | MCP server name injection vulnerability (shell metacharacters, path traversal); fixes #1882 | **PR #1941** (open, willamhou) |

**Critical pattern:** All three canary failures share **identical commit `7404e7d` and run ID `24946959927`**, suggesting a single bad deploy or infrastructure change rather than independent provider regressions. The `private-oauth` failure is particularly concerning as it indicates dedicated runner degradation.

---

## 6. Feature Requests & Roadmap Signals

| Source | Request | Likelihood in Next Version |
|:---|:---|:---|
| **#2965** (jousby) | **Aurora DSQL support** — Split core/vector DB to allow postgres-compatible serverless databases without pgvector | **Moderate-High** — Cost optimization is a clear user driver; architectural split aligns with existing DB abstraction work |
| **#2970** (drchirag1991) | **Railway source builds** — Build from repo Dockerfile instead of GHCR pull | **High** — Small scope, removes external dependency, deployment flexibility trend |
| **#2684** (willamhou, PR) | **signet-core cryptographic audit** | **Moderate** — Security-sensitive, but XL size may delay review |
| **#1120** (willamhou, PR) | **Prismer Cloud IM channel** | **Moderate** — Large new surface area; WASM channel pattern established but needs validation |

**Architectural signal:** Multiple items (#2965, #2969, #2684) point toward **modularity hardening**—separating concerns (DB, auth, audit, dispatch) for security and deployment flexibility.

---

## 7. User Feedback Summary

### Explicit Pain Points

| User | Issue | Core Problem |
|:---|:---|:---|
| **jousby** | #2965 | **Cost**: Current vector-integrated DB forces expensive always-on infrastructure; needs true scale-to-zero |
| **magnusviri** | #2963 | **Onboarding friction**: Documentation promises Docker Hub image that doesn't exist; first-run experience broken |
| *(implied, #2961)* | #2946 | **Configuration durability**: Self-hosted setups lose provider preference on restart; vendor lock-in pressure |

### Satisfaction/Dissatisfaction Indicators

- **Dissatisfied**: Docker onboarding completely broken for new users
- **Dissatisfied**: Self-hosted users experience preference erosion (silent provider demotion)
- **Satisfied (potential)**: Regular contributor willamhou has 5 active PRs spanning security, LLM, MCP fixes—indicates productive core contributor retention

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| **#1120** — Prismer Cloud IM WASM channel | **44 days** (2026-03-13) | Stale XL feature PR | Maintainer review/merge decision or closure |
| **#2593** — Bump actions group with 14 updates | **10 days** (2026-04-17, updated today) | CI security drift | Merge or conflict resolution; GitHub Actions versions aging |
| **#1941** — MCP server name allowlist | **24 days** (2026-04-03) | Security fix unmerged | CVE-class injection risk; needs priority review |
| **#2964** — Upstream 0.26.0 merge | **Closed same day** | Sync failure | Determine if 0.26.0 changes landed elsewhere or if release branch diverged |

**Maintainer attention most urgently needed on:**
1. **Canary triage** — Three failures on one commit suggest pipeline emergency
2. **#1941** — Security fix languishing while injection risk persists
3. **Docker Hub presence** — Either publish image or correct docs (#2963)

---

*Digest generated from GitHub activity 2026-04-26 to 2026-04-27. All links: [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-27

## 1. Today's Overview

LobsterAI shows minimal active development with **zero pull request activity** and **no new releases**. Four issues received updates in the last 24 hours, but all were stale-issue bumps rather than new engagement—each was originally created in February 2026 and last received meaningful activity at that time. The project appears to be in a **maintenance lull** with no maintainer responses visible on any updated issue. Community interest persists on practical concerns (token limits, Windows path handling, WeChat access, observability), yet the lack of PR merges or releases suggests either a paused development cycle or severely constrained maintainer bandwidth.

---

## 2. Releases

**No new releases.** The project has no published release history in the tracked period.

---

## 3. Project Progress

**No merged or closed PRs today.** Zero pull requests were opened, updated, or resolved in the last 24 hours. No features advanced or bugs received fixes in the public repository.

---

## 4. Community Hot Topics

| Issue | Engagement | Core Concern |
|-------|-----------|--------------|
| [#88: 建议加入使用token统计和日志输出](https://github.com/netease-youdao/LobsterAI/issues/88) | 3 👍, 1 comment | **Observability & debugging infrastructure** |
| [#60: 超出了context length](https://github.com/netease-youdao/LobsterAI/issues/60) | 3 comments | **Context window management** |
| [#40: window版本-SKILLs读取问题](https://github.com/netease-youdao/LobsterAI/issues/40) | 2 comments | **Windows path/installation handling** |
| [#52: 无法访问微信公众号文章](https://github.com/netease-youdao/LobsterAI/issues/52) | 2 comments | **Content access/anti-bot measures** |

**Underlying needs analysis:**
- **#88** resonates strongest with users (3 👍) — custom API users need visibility into failures and cost tracking, indicating LobsterAI is being used beyond default configurations
- **#60** reveals architecture limitation: no automatic context compression or summarization when approaching model limits
- **#40** and **#52** represent deployment friction and content source reliability, typical of early-stage agent platforms

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#60](https://github.com/netease-youdao/LobsterAI/issues/60): Context length overflow crashes requests | Open, stale since Feb | None |
| **High** | [#40](https://github.com/netease-youdao/LobsterAI/issues/40): Windows SKILLs path resolution broken | Open, stale since Feb | None |
| **Medium** | [#52](https://github.com/netease-youdao/LobsterAI/issues/52): WeChat article access failing | Open, stale since Feb | None |

**Critical pattern:** Both high-severity bugs (#60, #40) block core functionality (request completion, skill loading) yet have received **no maintainer acknowledgment** in 2+ months. No fix PRs exist.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version |
|---------|-------|---------------------------|
| Token usage dashboard + logging | [#88](https://github.com/netease-youdao/LobsterAI/issues/88) | **Moderate** — high user demand, infrastructure-level improvement |
| Configurable working directory | [#40](https://github.com/netease-youdao/LobsterAI/issues/40) (implied) | **Low** — no maintainer engagement, OS-specific complexity |
| Context compression / sliding window | [#60](https://github.com/netease-youdao/LobsterAI/issues/60) (implied) | **Low** — requires core architecture changes |

**Prediction:** If development resumes, #88's observability features offer the best effort-to-value ratio and align with production-readiness needs. Context management (#60) is architecturally necessary but more complex.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Profile |
|-----------|----------|-------------|
| **Debugging blindness** | #88: "没有日志很难调试" | Custom API adopters, power users |
| **Unexpected costs/failures** | #60: Token overflow with DeepSeek | Heavy-use agents, long-context workflows |
| **Windows deployment friction** | #40: Path conflicts between install and runtime | Enterprise/Windows-dominant users |
| **Content source fragility** | #52: WeChat access blocked | China-market content workflows |

**Satisfaction signal:** Users continue reporting issues with specific technical details (API error payloads, screenshots, path structures), indicating **continued attempted usage** rather than abandonment. However, the **absence of maintainer responses** risks converting this patience into attrition.

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#88](https://github.com/netease-youdao/LobsterAI/issues/88) | 62 days | Highest community demand (3 👍) | Maintainer triage; label as `enhancement` or `good first issue` |
| [#60](https://github.com/netease-youdao/LobsterAI/issues/60) | 63 days | Core functionality broken | Architecture decision: context compression strategy |
| [#40](https://github.com/netease-youdao/LobsterAI/issues/40) | 64 days | Windows user blocker | Repro confirmation; path configuration spec |
| [#52](https://github.com/netease-youdao/LobsterAI/issues/52) | 63 days | Content ecosystem gap | Clarify: anti-bot handling vs. source deprecation |

**Critical concern:** All four issues are **stale without maintainer comment**. For a NetEase Youdao-backed project, this silence suggests either **resource reallocation** or **internal development occurring outside public GitHub**. Community contributors cannot act without guidance; the project risks fork-or-abandon dynamics if unaddressed through Q2 2026.

---

*Digest based on GitHub activity for netease-youdao/LobsterAI as of 2026-04-27.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-27

## 1. Today's Overview

Moltis demonstrates **high-velocity, well-coordinated development** with 10 PRs and 6 issues processed in 24 hours, yielding an 80% closure rate on PRs (8 merged/closed) and 67% on issues (4 closed). The project shows strong security hygiene with rapid response to two critical vulnerability reports (#867, #881) both patched within 48 hours. However, a **regression introduced by PR #886** (session name editing removed from UI) reveals trade-offs between UI simplification and core functionality. The single release (`20260426.05`) suggests stable cadence, though release notes are minimal. Overall project health is **positive with manageable friction** in UI change review processes.

---

## 2. Releases

### `20260426.05` — 2026-04-26
- **Release page**: [moltis-org/moltis/releases/tag/20260426.05](https://github.com/moltis-org/moltis/releases/tag/20260426.05)
- **Note**: No detailed changelog provided in release metadata. Based on merged PRs, this release likely contains:
  - Voice API key encryption via vault-backed credential store (#885)
  - Local LLM idle timeout unloading (#884)
  - Skill import security fixes (#882, #883)
  - Bundled skill enable/disable config fixes (#877, #878)
  - Chat UI status badge toolbar (#886)
  - Code snippet dark mode fix (#879)
- **Breaking changes**: None explicitly flagged; however, users with existing `moltis.toml` voice API keys should verify automatic migration to `provider_keys.json`
- **Migration**: Monitor for `provider_keys.json.enc` creation on next vault unseal; review skill trust states if previously imported repositories

---

## 3. Project Progress

### Merged/Closed PRs (8 items)

| PR | Author | Summary | Impact |
|---|---|---|---|
| [#885](https://github.com/moltis-org/moltis/pull/885) | penso | **Security**: Voice API keys moved from plaintext `moltis.toml` to encrypted `provider_keys.json` with vault integration | Critical infrastructure hardening |
| [#884](https://github.com/moltis-org/moltis/pull/884) | penso | **Feature**: Local LLM on-demand loading/unloading with idle timeout + lifecycle WebSocket events | Resource optimization for self-hosted deployments |
| [#883](https://github.com/moltis-org/moltis/pull/883) | penso | **Fix**: Per-skill relative paths for marketplace repos (ClaudeCode format) | Fixes #880 — skill import reliability |
| [#882](https://github.com/moltis-org/moltis/pull/882) | penso | **Security**: Remove auto-trust/enable on repository import | Fixes #881 — eliminates malicious skill injection vector |
| [#886](https://github.com/moltis-org/moltis/pull/886) | penso | **Feature**: Chat status badges (sandbox, MCP, Debug, Context) in visible toolbar | UX improvement; **introduced regression #888** |
| [#879](https://github.com/moltis-org/moltis/pull/879) | maop | **Fix**: Code snippet background white-on-dark-mode after stream completion | Polish |
| [#878](https://github.com/moltis-org/moltis/pull/878) | Cstewart-HC | **Fix**: Bundled skill detail view respects `disabled_bundled_categories` | Follow-up to #877 |
| [#877](https://github.com/moltis-org/moltis/pull/877) | Cstewart-HC | **Fix**: Bundled skill disable/enable via config instead of manifest lookup | Fixes #875 |

**Key advancement**: Security posture significantly improved with defense-in-depth for both credential storage and skill supply chain. Local LLM resource management matures toward production readiness.

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|---|---|---|
| [#880](https://github.com/moltis-org/moltis/issues/880) Skill import broken | 1 comment, closed | **Root cause**: Marketplace repo format (non-Skill structure) caused path resolution failure. Indicates growing ecosystem complexity as Moltis integrates with external skill marketplaces (ClaudeCode/Anthropic). |
| [#888](https://github.com/moltis-org/moltis/issues/888) Session names uneditable (regression) | 0 comments, **OPEN** | **Most concerning active issue**: UI simplification (#886) removed `chatMoreModal` without migrating session rename functionality. Suggests need for UI change checklist covering feature parity. |
| [#887](https://github.com/moltis-org/moltis/issues/887) PREAMBLE.md workspace template variable | 0 comments, **OPEN** | Prompt profile extensibility request; builds on #466 template system. Signals power-user demand for customizable agent personas. |

**Underlying needs**: (1) **UI change governance** — toolbar redesigns need feature audit before merge; (2) **Workspace customization** — users want project-specific agent preamble injection; (3) **Third-party ecosystem compatibility** — skill marketplace formats are heterogeneous.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|---|---|---|---|---|
| 🔴 **High** | [#888](https://github.com/moltis-org/moltis/issues/888) Session names uneditable | **OPEN** | None yet | Regression from #886. Core chat functionality broken. **Requires immediate attention.** |
| 🟡 **Medium** | [#875](https://github.com/moltis-org/moltis/issues/875) Can't disable bundled skill via Web | CLOSED | [#877](https://github.com/moltis-org/moltis/pull/877), [#878](https://github.com/moltis-org/moltis/pull/878) | Config/gateway mismatch; two-PR fix suggests architectural complexity in skill state management |
| 🟡 **Medium** | [#880](https://github.com/moltis-org/moltis/issues/880) Skill import from repo broken | CLOSED | [#883](https://github.com/moltis-org/moltis/pull/883) | Path resolution bug for non-standard repo layouts |
| 🔴 **High** | [#881](https://github.com/moltis-org/moltis/issues/881) Malicious skills auto-enabled on import | CLOSED | [#882](https://github.com/moltis-org/moltis/pull/882) | **Security**: Supply chain attack vector. Fixed by removing auto-trust. |
| 🔴 **High** | [#867](https://github.com/moltis-org/moltis/issues/867) Voice API keys in plaintext | CLOSED | [#885](https://github.com/moltis-org/moltis/pull/885) | **Security**: Credential exposure. Fixed with vault encryption. |

**Stability assessment**: Two critical security issues resolved swiftly. Active regression (#888) is the primary stability concern. No crash reports or data loss incidents.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|---|---|---|---|
| **PREAMBLE.md template variable** | [#887](https://github.com/moltis-org/moltis/issues/887) | **High** | Builds on existing #466 template system; low implementation complexity; clear user value |
| **File upload in web chat** | [#876](https://github.com/moltis-org/moltis/pull/876) | **High** | PR already open; matches "major LLM providers" UX pattern; high user demand signal |
| **zh-TW Traditional Chinese locale** | [#339](https://github.com/moltis-org/moltis/pull/339) | **Medium** | 2-month-old PR, recently updated; i18n infrastructure exists; may need review bandwidth |
| **Local LLM lifecycle management** | [#884](https://github.com/moltis-org/moltis/pull/884) | **Shipped** | Already merged; signals investment in self-hosted/edge deployment scenarios |

**Emerging theme**: Moltis is positioning for **enterprise/self-hosted deployments** (local LLM optimization, credential vaulting, skill quarantine) while maintaining **consumer UX parity** (file uploads, i18n, polished chat interface).

---

## 7. User Feedback Summary

### Pain Points
- **Security anxiety**: Users actively audit credential storage (#867) and skill supply chain (#881) — suggests security-conscious, potentially enterprise user base
- **UI regressions frustrate power users**: Session rename removal (#888) breaks established workflows; "More" modal contained critical functions, not just "nice-to-haves"
- **Config/Web UI drift**: Bundled skill disable worked in config but not in UI (#875) — indicates dual control plane confusion

### Use Cases
- **Multi-skill project workspaces**: PREAMBLE.md request (#887) implies users manage distinct agent contexts per project
- **Local/self-hosted LLM operation**: Idle unloading (#884) suggests RAM-constrained environments (laptops, small servers)
- **Third-party skill marketplace integration**: ClaudeCode format support (#880, #883) shows users importing external skills, not just built-in

### Satisfaction Signals
- Rapid security fix turnaround → trust in maintainer responsiveness
- Active feature PRs from community (Cstewart-HC, maop, PeterDaveHello) → healthy contributor ecosystem

### Dissatisfaction Signals
- Zero comments on open issues (#888, #887) may indicate reporting fatigue or lack of triage visibility

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#339](https://github.com/moltis-org/moltis/pull/339) zh-TW i18n | **53 days** | Medium | Review and merge; i18n PRs tend to bit-rot due to string additions; PeterDaveHello is established contributor (likely has CLA, etc.) |
| [#876](https://github.com/moltis-org/moltis/pull/876) File upload | 2 days | Low | Active; likely merges soon |
| [#888](https://github.com/moltis-org/moltis/issues/888) Session name regression | 1 day | **High** | Needs maintainer assignment; either revert #886 partial change or fast-follow with session rename restoration |

**Critical gap**: No long-unanswered *critical* issues, but [#339](https://github.com/moltis-org/moltis/pull/339) represents **diversity/inclusion infrastructure** that should not stall. Recommend maintainer review sprint for i18n PRs.

---

*Digest generated from GitHub activity 2026-04-26. All links: [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-27

## 1. Today's Overview

CoPaw (QwenPaw) shows **elevated community activity** with 11 issues updated and 6 new PRs opened in the last 24 hours, though **zero merged PRs or releases** indicates a potential bottleneck in maintainer review bandwidth. The project appears to be experiencing **growing pains** as a multi-channel AI assistant framework, with critical bugs surfacing in session management, memory persistence, and cross-platform channel integrations. First-time contributors are notably active (4 of 6 PRs), suggesting healthy community growth, but the accumulation of unmerged fixes for production-impacting bugs raises concerns about release velocity. The issue-to-PR ratio (nearly 2:1) and lack of closure activity suggests maintainers may be overwhelmed or focused on a larger release cycle.

---

## 2. Releases

**No new releases** (v1.1.4.post2 remains latest as of 2026-04-26).

---

## 3. Project Progress

**Zero PRs merged or closed today.** All 6 PRs remain open, representing unmerged work across:

| PR | Author | Focus | Status |
|---|---|---|---|
| [#3848](https://github.com/agentscope-ai/QwenPaw/pull/3848) | suntp | Context compaction hardening with fallback handling | Open, awaiting review |
| [#3846](https://github.com/agentscope-ai/QwenPaw/pull/3846) | moarychan | GitHub Copilot model provider support | Open, first-time contributor |
| [#3845](https://github.com/agentscope-ai/QwenPaw/pull/3845) | bxy3045134656 | QQ channel audio fix + speech-to-text | Open, first-time contributor |
| [#3839](https://github.com/agentscope-ai/QwenPaw/pull/3839) | joeyhacker | XiaoYi A2A protocol refactor | Open, pairs with #3840 |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | youngchan1988 | Tauri 2.x desktop app (replacing Electrobun) | Open, 3 days old |
| [#3733](https://github.com/agentscope-ai/QwenPaw/pull/3733) | hlgone | Weixin ops logging | Open, 4 days old |

**Notable advancement signals:** Tauri migration (#3813) suggests architectural modernization; Copilot provider (#3846) expands enterprise IDE integration; XiaoYi fix (#3839) directly addresses a reported production bug.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Issue/PR | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|:---|
| 1 | [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) | 4 | Vector model config reset on container restart | **Docker/state management architecture** — users need configuration durability across deployments |
| 2 | [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) | 2 | Session history disappearance | **Data integrity/CRITICAL** — users losing conversation state unpredictably |
| 3 | [#3852](https://github.com/agentscope-ai/QwenPaw/issues/3852) | 2 | Multi-tab session routing broken | **Multi-tenancy in browser** — power users need parallel independent sessions |

**Analysis:** The top issue (#3817) reveals a fundamental architecture gap—Docker deployments lack persistent state management for vector configurations, suggesting the initialization order needs redesign. Session-related bugs (#3843, #3852) indicate race conditions or state synchronization failures in the WebUI backend, likely impacting daily active users significantly.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? | Risk Assessment |
|:---|:---|:---|:---|:---|
| **🔴 CRITICAL** | [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) | Session history vanishes, messages routed to wrong session | ❌ None | **Data loss** — breaks core UX promise |
| **🔴 CRITICAL** | [#3850](https://github.com/agentscope-ai/QwenPaw/issues/3850) | Pause button frontend-only, backend continues execution | ❌ None | **Safety/control** — users cannot stop runaway agents |
| **🟠 HIGH** | [#3851](https://github.com/agentscope-ai/QwenPaw/issues/3851) | `MODEL_EXECUTION_FAILED` with DeepSeek thinking mode | ❌ None | **Provider compatibility** — breaks popular model |
| **🟠 HIGH** | [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) | Vector model config reset on restart | ❌ None | **Operational fragility** — breaks RAG workflows |
| **🟠 HIGH** | [#3847](https://github.com/agentscope-ai/QwenPaw/issues/3847) | `qwenpaw mission` CLI commands crash (405 + TypeError) | ❌ None | **CLI broken** — mission management unavailable |
| **🟡 MEDIUM** | [#3852](https://github.com/agentscope-ai/QwenPaw/issues/3852) | Multi-tab session continuity lost | ❌ None | **UX degradation** — power user friction |
| **🟡 MEDIUM** | [#3849](https://github.com/agentscope-ai/QwenPaw/issues/3849) | Agent replies disappear mid-sentence (console) | ❌ None | **Perceived reliability** — silent failures |
| **🟡 MEDIUM** | [#3840](https://github.com/agentscope-ai/QwenPaw/issues/3840) | XiaoYi channel reply delivery failure | ✅ [#3839](https://github.com/agentscope-ai/QwenPaw/pull/3839) | Channel-specific, fix pending merge |
| **🟢 LOW** | [#3837](https://github.com/agentscope-ai/QwenPaw/issues/3837) | WeChat multi-message truncation | ❌ None | **Platform limitation** — needs batching logic |
| **🟢 LOW** | [#1426](https://github.com/agentscope-ai/QwenPaw/issues/1426) | Matrix channel receive broken | ❌ Closed today | Historical fix, no recent regression |

**Stability assessment:** **Concerning** — 3 critical/high bugs without fix PRs, 2 involving data/session integrity. The pause button bug (#3850) is particularly alarming as it represents a **safety/control surface failure**. Only one bug has an associated fix PR (#3840/#3839).

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| [#3844](https://github.com/agentscope-ai/QwenPaw/issues/3844) | Auto model listing after provider registration | **High** | Low complexity, high UX impact, aligns with provider expansion trend |
| [#3846](https://github.com/agentscope-ai/QwenPaw/pull/3846) (PR) | GitHub Copilot provider | **Medium-High** | First-time contributor PR, enterprise demand, but needs security review |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) (PR) | Tauri 2.x desktop app | **Medium** | Strategic (Electrobun replacement), but large surface area, 3 days unmerged |
| [#3845](https://github.com/agentscope-ai/QwenPaw/pull/3845) (PR) | QQ channel STT | **Medium** | Niche channel improvement, dependent on maintainer channel priorities |
| [#3837](https://github.com/agentscope-ai/QwenPaw/issues/3837) | Message batching / send delays for WeChat | **Medium** | Platform-specific workaround, common pattern in bot frameworks |

**Emerging pattern:** Strong signal around **provider/model ecosystem expansion** (Copilot, auto-discovery) and **channel robustness** (XiaoYi, QQ, WeChat fixes). The project appears to be in a **platform breadth phase** rather than core stability focus.

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

| Theme | Evidence | Intensity |
|:---|:---|:---|
| **Configuration durability** | "每次容器重启后...配置无法持久化" (#3817) | 🔴 High — production blocker |
| **Session reliability** | "all chat history suddenly disappears" (#3843); "无法保持原对话连续性" (#3852) | 🔴 High — trust erosion |
| **Control/safety illusion** | "暂停功能形同虚设" (#3850) | 🔴 High — safety-critical |
| **Model compatibility gaps** | DeepSeek thinking mode breaks execution (#3851) | 🟠 Medium — popular model |
| **Operational visibility** | Need logs to confirm message delivery (#3733 PR) | 🟡 Medium — ops need |
| **Platform-specific fragility** | WeChat truncation, XiaoYi protocol issues | 🟡 Medium — China-market specific |

### Use Case Signals

- **Docker/self-hosted production deployments** are common (network_mode: host, volume concerns)
- **Multi-channel operation** is expected (users running WeChat, QQ, XiaoYi, Matrix simultaneously)
- **Multi-tasking power users** need parallel sessions across browser tabs
- **Enterprise/IDE integration** emerging (GitHub Copilot PR)

**Satisfaction trajectory:** **Declining** — the concentration of "core promise broken" bugs (session loss, config reset, pause failure) suggests users are hitting friction in fundamental workflows, not edge cases.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) Tauri desktop app | 3 days open | **Strategic drift** — Electrobun replacement stalled | Maintainer architecture review; decide Tauri vs. other frameworks |
| [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) Vector config reset | 3 days, 4 comments | **Production blocker** with user-provided root cause | Assign to core maintainer; user has done debugging work |
| [#3733](https://github.com/agentscope-ai/QwenPaw/pull/3733) Weixin logging | 4 days open | **Trivial merge** — low risk, ops value | Fast-track review; one-line logging change |
| [#1426](https://github.com/agentscope-ai/QwenPaw/issues/1426) Matrix channel | ~6 weeks, closed today | **Verification needed** — was fix verified? | Confirm closure wasn't just stale-bot; document fix if real |

**Maintainer attention gap:** 6 PRs and 10 open issues with zero merges in 24h suggests either:
- Pre-release freeze for major version (possible given Tauri PR)
- Maintainer bandwidth constraint
- Review bar set high for first-time contributors (4 of 6 PRs)

**Recommended priority:** Merge #3733 (trivial ops fix), fast-track #3839/#3840 (paired bug/fix), and assign #3817, #3843, #3850 to core developers as they represent **trust-breaking bugs**.

---

*Digest generated from GitHub activity 2026-04-26 to 2026-04-27. All links reference `agentscope-ai/QwenPaw` repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-27

---

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 50 issues and 50 PRs active in the last 24 hours, yielding a 1:1 issue-to-PR ratio that suggests responsive maintenance. The project is in a **pre-release stabilization phase** — no new versions shipped today, but 19 PRs were merged/closed against 31 open, indicating aggressive integration. Critical activity clusters around **provider compatibility fixes** (DeepSeek-V4, Ollama, Gemini/OpenRouter), **Matrix channel reliability** (major rewrite in progress), and **Windows onboarding polish**. Risk items include a high-severity memory leak in session cancellation tokens and multiple S1-blocked workflow issues affecting fresh installs.

---

## 2. Releases

**None** — No new releases published today. The latest activity suggests maintainers are accumulating fixes for a likely v0.7.x or v0.8.0 milestone rather than shipping patch releases.

---

## 3. Project Progress

### Merged/Closed PRs Today (19 total, notable items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#6144](https://github.com/zeroclaw-labs/zeroclaw/pull/6144) | OmkumarSolanki | Omit Bedrock temperature for Opus 4.7 | Provider-specific fix for AWS Bedrock compatibility |
| [#6099](https://github.com/zeroclaw-labs/zeroclaw/pull/6099) | perlowja | Preserve user-supplied `providers.fallback` through load/save | Fixes config round-trip bug; medium risk |
| [#6124](https://github.com/zeroclaw-labs/zeroclaw/pull/6124) | Audacity88 | Fix mdBook header links pointing to wrong fork | Docs integrity; closes [#6115](https://github.com/zeroclaw-labs/zeroclaw/issues/6115) |
| [#6137](https://github.com/zeroclaw-labs/zeroclaw/pull/6137) | MGSE97 | Fix `setup.bat` Windows installation failures | Closes [#6118](https://github.com/zeroclaw-labs/zeroclaw/issues/6118); S1 blocker resolved |
| [#6141](https://github.com/zeroclaw-labs/zeroclaw/pull/6141) | JordanTheJet | Add `Skill` capability for markdown-only plugin bundles | Expands plugin ecosystem without WASM toolchain |
| [#6142](https://github.com/zeroclaw-labs/zeroclaw/pull/6142) | JordanTheJet | Persist CNAME on every Pages deploy | Prevents docs domain breakage |
| [#6035](https://github.com/zeroclaw-labs/zeroclaw/pull/6035) | tidux | Correct ACP tool output formatting | High-risk memory-related channel fix |
| [#5921](https://github.com/zeroclaw-labs/zeroclaw/pull/5921) | JordanTheJet | Add `image-gen-fal` WASM plugin (fal.ai Flux) | First reference image generation plugin |
| [#6134](https://github.com/zeroclaw-labs/zeroclaw/pull/6134) | thordin9 | "Working yolo mode" | Undocumented; likely auto-approval automation |

**Key advancements:** Plugin ecosystem maturation (image generation, skill bundles), Windows onboarding unblocked, documentation infrastructure hardened. The [#6112](https://github.com/zeroclaw-labs/zeroclaw/pull/6112) Matrix rewrite remains open but represents the largest architectural change.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | 👍 | Analysis |
|:---|:---|:---:|:---:|:---|
| 1 | [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) Matrix friction tracker (CLOSED) | 12 | 2 | **Meta-issue successfully closed** — E2EE OTK retry loop fixed; demonstrates project's ability to resolve complex umbrella issues |
| 2 | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) DeepSeek-V4 API incompatibility | 7 | 1 | **Emerging provider priority** — Thinking/reasoning mode format mismatch; competing APIs (DeepSeek, OpenAI, Anthropic) diverging in "reasoning" payload structure |
| 3 | [#5941](https://github.com/zeroclaw-labs/zeroclaw/issues/5941) Missing tool call for call_id | 6 | 0 | **Runtime reliability** — Custom OpenAI-compatible endpoints failing on tool-call correlation; in-progress |
| 4 | [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) Wrong arch binary on aarch64 | 6 | 0 | **Platform parity gap** — ARM64/Raspberry Pi users blocked from self-updates; long-running |
| 5 | [#6118](https://github.com/zeroclaw-labs/zeroclaw/issues/6118) `setup.bat` failures (CLOSED) | 5 | 0 | **Windows onboarding crisis** — Multiple bugs (overflow, escaping, label resolution); rapidly fixed |

**Underlying needs:** Users need **provider format stability** as the AI API landscape fragments (thinking modes, tool schemas, streaming formats). **ARM64 platform support** is underserved. **Windows developer experience** was critical but now resolved.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---|:---|:---|:---|:---|
| **S1** | [#5941](https://github.com/zeroclaw-labs/zeroclaw/issues/5941) | OPEN, in-progress | — | Tool call ID mismatch blocks all providers |
| **S1** | [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) | OPEN | — | aarch64 update downloads x86_64 binary |
| **S1** | [#6118](https://github.com/zeroclaw-labs/zeroclaw/issues/6118) | **CLOSED** | [#6137](https://github.com/zeroclaw-labs/zeroclaw/pull/6137) | `setup.bat` Windows install broken |
| **S1** | [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | OPEN, in-progress | — | kimi-code provider streaming tool-call error |
| **S1** | [#4878](https://github.com/zeroclaw-labs/zeroclaw/issues/4878) | OPEN | — | E2EE room keys never downloaded from backup — encrypted DMs dead after store reset |
| **S1** | [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) | OPEN | — | Ollama provider fails when tools needed |
| **S1** | [#4827](https://github.com/zeroclaw-labs/zeroclaw/issues/4827) | OPEN | — | Channel mode discards tool-call context in history |
| **S1** | [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | OPEN (new today) | — | Fresh install `default_model` misconfiguration with Ollama |
| **S1** | [#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803) | OPEN | [#6138](https://github.com/zeroclaw-labs/zeroclaw/pull/6138) | Fallback provider ignores `[providers.X]` config |
| **S2** | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | OPEN | — | DeepSeek-V4 API format incompatibility |
| **S2** | [#4880](https://github.com/zeroclaw-labs/zeroclaw/issues/4880) | OPEN | — | `context_compression` never triggers in daemon/channel mode |
| **S2** | [#5244](https://github.com/zeroclaw-labs/zeroclaw/issues/5244) | OPEN, in-progress | — | Dashboard Channels tab crash + Overview render error |

**Critical pattern:** **8 open S1 issues** indicate significant stability debt. The Ollama provider has **two separate S1 bugs** ([#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459), [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)) — native tool calling completely broken. The [#6138](https://github.com/zeroclaw-labs/zeroclaw/pull/6138) PR addresses one S1 but is still open.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood in Next Version |
|:---|:---|:---:|
| [#6112](https://github.com/zeroclaw-labs/zeroclaw/pull/6112) Matrix-rust-sdk 0.16 rewrite | **In progress (XL size, high risk)** — foundational channel reliability | Very High (blocking release?) |
| [#6143](https://github.com/zeroclaw-labs/zeroclaw/pull/6143) Universal skill registry (agentskills.io) | **Open PR** — ecosystem expansion, replaces hardcoded install chain | High |
| [#5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787) Mozilla Fluent i18n (CLOSED RFC) | **Accepted** — TOML i18n deprecated | High |
| [#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) + [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) Configurable reply-intent precheck | **Two related issues, one in-progress** — performance + UX | Medium-High |
| [#5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836) + [#5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837) CancellationToken propagation | **Blocked dependency chain** — runtime safety | Medium |
| [#3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542) Webhook agent mode | **Long-standing** — API parity with chat | Medium |
| [#5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919) Plugin env var allowlist | **Security hardening, in-progress** | Medium |

**Prediction:** Next release will likely be **v0.7.0** featuring the Matrix rewrite, Fluent i18n, and skill registry. CancellationToken work may slip due to dependency complexity.

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **"Fresh install doesn't work"** | [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123), [#6118](https://github.com/zeroclaw-labs/zeroclaw/issues/6118), [#5578](https://github.com/zeroclaw-labs/zeroclaw/issues/5578) | Critical — onboarding is leaky |
| **"Provider X broke again"** | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) DeepSeek, [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) kimi, [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459)/[#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) Ollama, [#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803) fallback config | High — N×M provider compatibility matrix unmaintainable? |
| **"Channels ignore me / too slow"** | [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674), [#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) | Moderate — reply-intent gate over-applied |
| **"ARM64 second-class"** | [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) | Moderate — edge deployment use case |
| **"Encrypted chat dead after reset"** | [#4878](https://github.com/zeroclaw-labs/zeroclaw/issues/4878) | High — data loss scenario |

### Satisfaction Signals
- Rapid closure of Windows setup crisis (same-day fix)
- Successful resolution of Matrix E2EE umbrella issue
- Plugin ecosystem growing (image generation, skills)

---

## 8. Backlog Watch

| Issue | Age | Risk | Why Needs Attention |
|:---|:---|:---|:---|
| [#4878](https://github.com/zeroclaw-labs/zeroclaw/issues/4878) E2EE recovery never downloads room keys | ~30 days | **Data loss** | S1, encrypted DMs permanently broken after store reset; no PR linked |
| [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) Wrong arch binary on aarch64 | ~31 days | **Platform exclusion** | S1, Raspberry Pi users blocked; update infrastructure gap |
| [#4880](https://github.com/zeroclaw-labs/zeroclaw/issues/4880) context_compression ignored in daemon | ~30 days | **Performance degradation** | S2, but causes silent cost/quality degradation in long-running channels |
| [#5835](https://github.com/zeroclaw-labs/zeroclaw/issues/5835) Cancel token memory leak | ~10 days | **Resource exhaustion** | High-risk label, abandoned session entries never cleaned; PR needed |
| [#5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836) CancellationToken in tool execution | ~10 days | **Uncancellable operations** | Blocked by [#5835](https://github.com/zeroclaw-labs/zeroclaw/issues/5835); long-running tools hang |
| [#2998](https://github.com/zeroclaw-labs/zeroclaw/issues/2998) Multiple model providers | ~50 days | **Architecture question** | Closed but referenced; multi-provider config still problematic per [#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803) |

**Maintainer action needed:** The E2EE recovery and aarch64 issues are **month-old S1 bugs without visible progress** — these damage user trust in reliability. The cancellation token chain (#5835→#5836→#5837) requires architectural decisions on session lifecycle management.

---

*Digest compiled from 50 issues and 50 PRs updated 2026-04-26 to 2026-04-27. All links: https://github.com/zeroclaw-labs/zeroclaw*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*