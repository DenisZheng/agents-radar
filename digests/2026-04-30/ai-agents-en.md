# OpenClaw Ecosystem Digest 2026-04-30

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-30 00:20 UTC

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

# OpenClaw Project Digest — 2026-04-30

---

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a large, active contributor base and rapid iteration cycle. The project is heavily weighted toward open work: 470 active issues (94%) and 372 open PRs (74.4%), suggesting a substantial backlog that may strain review capacity. Only 30 issues and 128 PRs were closed/merged, yielding merge/close rates of 6% and 25.6% respectively—well below typical healthy open-source project throughput. A single release (v2026.4.27) shipped recently with Codex Computer Use and DeepInfra provider integrations, showing continued platform expansion. The volume of regression-tagged issues and Windows/Linux platform gaps indicates the project is in a **growth phase with stability debt accumulating**.

---

## 2. Releases

### [v2026.4.27](https://github.com/openclaw/openclaw/releases/tag/v2026.4.27) — openclaw 2026.4.27

| Category | Details |
|----------|---------|
| **Codex Computer Use** | Ships with status/install commands, marketplace discovery, and **fail-closed MCP checks** for Codex-mode desktop control (security-hardened by default). Contribution by @pash-openai. |
| **DeepInfra Provider** | Added to bundled provider set with model discovery, media generation/editing, TTS, and embeddings support. |

**Migration Notes:** No breaking changes documented. Codex Computer Use users should verify MCP server status with new `status`/`install` commands before enabling desktop control.

---

## 3. Project Progress

### Merged/Closed PRs (128 total; notable items from sample)

| PR | Status | Focus | Impact |
|---|---|---|---|
| [#74677](https://github.com/openclaw/openclaw/pull/74677) | **CLOSED** | Config-aware auth evidence path bugfix | Fixes workspace plugin auth resolution when `workspaceDir` omitted |
| [#74508](https://github.com/openclaw/openclaw/pull/74508) | OPEN | Telegram reasoning message chaining | Prevents stream truncation on Claude CLI extended thinking overflow |
| [#74453](https://github.com/openclaw/openclaw/pull/74453) | OPEN | Voice-call webhook rate limiter | Closes fail-open security path on empty remote address |
| [#74235](https://github.com/openclaw/openclaw/pull/74235) | OPEN | Google Chat thread preservation | Fixes reply threading regression in enterprise deployments |
| [#74366](https://github.com/openclaw/openclaw/pull/74366) | OPEN | Control UI accessibility (slash menu) | WCAG-compliant screen reader support |
| [#52747](https://github.com/openclaw/openclaw/pull/52747) | OPEN | ACP session lane timeout | Critical fix for stuck sessions blocking task queues |
| [#52759](https://github.com/openclaw/openclaw/pull/52759) | OPEN | Tool-call loop detection default-on | Safety feature finally enabled by default |

**Themes:** Channel reliability (Telegram, Google Chat, voice), security hardening, accessibility compliance, and session/orchestration stability dominate today's merge pipeline.

---

## 4. Community Hot Topics

| Rank | Issue/PR | Comments | 👍 | Underlying Need |
|:---:|---|:---:|:---:|---|
| 1 | [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | **101** | 73 | **Platform parity**: macOS/iOS/Android have native apps; Linux/Windows users excluded from full feature set. 5-month-old request with massive demand signals enterprise/self-hosting user base. |
| 2 | [#52875](https://github.com/openclaw/openclaw/issues/52875) Session_send "no session found" | 20 | 0 | **Inter-agent communication regression**: Post-upgrade breakage in agent mesh topology. Critical for multi-agent workflows. |
| 3 | [#12590](https://github.com/openclaw/openclaw/issues/12590) memoryFlush unreliable | 19 | 0 | **Data durability**: Memory compaction dedup logic fails every other cycle—risk of memory loss/corruption. |
| 4 | [#72338](https://github.com/openclaw/openclaw/issues/72338) Gateway CPU spin | 16 | 3 | **Production reliability**: Telegram pipeline stalls, status probes timeout—operational monitoring blind spot. |
| 5 | [#22438](https://github.com/openclaw/openclaw/issues/22438) Tiered bootstrap loading | 14 | 0 | **Cost control**: Token waste from loading irrelevant files into every session/sub-agent/cron context. |

**Analysis:** The #75 gap (Linux/Windows apps) represents the largest unmet user need by engagement volume. The top bugs all involve **session lifecycle, memory consistency, and gateway health**—core infrastructure stability that users depend on for production deployments.

---

## 5. Bugs & Stability

| Severity | Issue | Type | Fix PR? | Details |
|:---:|---|---|---|---|
| 🔴 **Critical** | [#72338](https://github.com/openclaw/openclaw/issues/72338) Gateway CPU spin | Production outage | None listed | Gateway enters high-CPU state; Telegram replies stall; status probes timeout. Requires service restart. |
| 🔴 **Critical** | [#45438](https://github.com/openclaw/openclaw/issues/45438) structuredClone memory leak | Native memory leak | None listed | ~1GB/min leak; RSS hits 4-5GB. V8 GC cannot reclaim. Gateway crash risk. |
| 🟡 **High** | [#52875](https://github.com/openclaw/openclaw/issues/52875) Session_send regression | Inter-agent comms broken | None listed | Post-2026.3.22 upgrade; agents cannot contact peers. |
| 🟡 **High** | [#12590](https://github.com/openclaw/openclaw/issues/12590) memoryFlush unreliable | Data consistency | None listed | Fires every other cycle due to off-by-one-style dedup logic. |
| 🟡 **High** | [#43747](https://github.com/openclaw/openclaw/issues/43747) Memory management chaos | Regression | None listed | Inconsistent memory backends across users (SQLite vs. LanceDB vs. unconfigured). |
| 🟡 **High** | [#44925](https://github.com/openclaw/openclaw/issues/44925) Subagent completion lost | Silent data loss | None listed | No retry, no notification, no auto-restart on timeout. |
| 🟡 **High** | [#45269](https://github.com/openclaw/openclaw/issues/45269) apply_patch policy stripped | Tool execution regression | None listed | Built-in tool treated as plugin-only; agent-routed runs fail. |
| 🟢 **Medium** | [#40540](https://github.com/openclaw/openclaw/issues/40540) `openclaw update` EBUSY Windows | Self-update broken | None listed | File handle lock prevents Windows updates. |
| 🟢 **Medium** | [#39038](https://github.com/openclaw/openclaw/issues/39038) Windows 11 node hang | Startup failure | None listed | Node process hangs after PATH display; cannot connect gateway. |
| 🟢 **Medium** | [#41201](https://github.com/openclaw/openclaw/issues/41201) Control UI avatar broken | UI regression | None listed | Avatar URLs/paths fail to load. |

**Regression Cluster:** 6 of 10 bugs above are tagged `regression`, indicating **quality degradation in recent releases**. The Windows platform has **three distinct failure modes** (update, node startup, general EBUSY), suggesting insufficient Windows CI/testing.

---

## 6. Feature Requests & Roadmap Signals

| Issue | 👍 | Predicted Priority | Rationale |
|---|---|:---:|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 73 | **v2026.5.x** | Overwhelming demand; blocks enterprise adoption; steipete (core contributor) authored |
| [#18160](https://github.com/openclaw/openclaw/issues/18160) Direct Exec Mode for Cron | 9 | **v2026.5.x** | Eliminates LLM overhead for simple cron jobs; reliability win |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) Exec-approval denylists | 6 | **Near-term** | Security hardening; complements existing allowlist |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) MathJax/LaTeX in Control UI | 4 | **Medium** | Academic/technical user segment |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) Tiered bootstrap loading | 0 | **v2026.5.x** | Cost optimization; token efficiency pressure from power users |
| [#147](https://github.com/openclaw/openclaw/issues/147) Brabble voice wake (Clawdis node) | 0 | **Medium** | IoT/Raspberry Pi expansion; steipete project |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) Pre-response enforcement hooks | 2 | **Security release** | Hard gates for finance/ops compliance; high-stakes requirement |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) Slack Block Kit | 0 | **Medium** | Enterprise Slack integration depth |

**Signal:** The combination of [#75](https://github.com/openclaw/openclaw/issues/75) (platform expansion), [#18160](https://github.com/openclaw/openclaw/issues/18160) (cron reliability), and [#22438](https://github.com/openclaw/openclaw/issues/22438) (cost control) suggests **v2026.5.x will focus on operational efficiency and platform maturity** over new AI capabilities.

---

## 7. User Feedback Summary

### Pain Points (Explicit)

| Theme | Evidence | Severity |
|---|---|:---:|
| **Windows as second-class citizen** | #40540, #39038, #40540 (update, hang, EBUSY) | High |
| **Session/orchestration reliability** | #52875, #44925, #47975, #50165, #52249 | Critical |
| **Memory system unpredictability** | #12590, #43747, #43735 (skills not loading) | High |
| **Gateway production readiness** | #72338 (CPU spin), #45438 (memory leak), #50040 (Telegram stalls) | Critical |
| **Documentation drift** | #48920 "Live Docs are ahead of release" | Medium |
| **Skill ecosystem friction** | #50090 (ClawHub gap), #53628 (XDG_CONFIG_HOME), #43735 | Medium |

### Use Cases (Inferred)

- **Multi-agent teams** (session_send, subagent orchestration issues)
- **24/7 autonomous operations** (cron jobs, heartbeat, memory persistence)
- **Enterprise messaging** (Slack, Google Chat, Telegram, Feishu, Discord)
- **Cost-conscious scaling** (tiered bootstrap, tool schema token reduction)

### Satisfaction/Dissatisfaction

- **Satisfied with:** Platform breadth (providers, channels), active development, iOS/macOS app quality, recent Codex/DeepInfra integrations
- **Dissatisfied with:** Windows stability, session reliability guarantees, memory consistency, documentation accuracy, skill marketplace maturity

---

## 8. Backlog Watch

| Issue/PR | Age | Last Update | Risk | Action Needed |
|---|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows apps | 4 months | 2026-04-30 | **User exodus risk** | Maintainer commitment or roadmap date |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) ClawHub ecosystem | 6 weeks | 2026-04-29 | **Ecosystem stagnation** | Dedicated PM or community lead |
| [#50880](https://github.com/openclaw/openclaw/issues/50880) Steer queue silent degradation | 6 weeks | 2026-04-29 | **Core feature broken** | Reproduction + owner assignment |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) Subagent completion lost | 6 weeks | 2026-04-30 | **Silent data loss** | Retry architecture design review |
| [#46637](https://github.com/openclaw/openclaw/issues/46637) oMLX JSON parse error | 6 weeks | 2026-04-30 | **Provider compatibility** | Qwen/oMLX integration test |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) Tool schema token overhead | 2.5 months | 2026-04-30 | **Cost optimization** | Schema compression/lazy loading |
| [#1210](https://github.com/openclaw/openclaw/issues/1210) Discord base64 image bloat | 3+ months | 2026-04-30 | **Context window waste** | URL reference architecture |

**Critical Gap:** The **stale label proliferation** (#50090, #50880, #44925, #46637, #50199, #50165, etc.) indicates a triage process that marks issues without resolution, creating visibility decay. With 470 open issues and 372 open PRs, **maintainer bandwidth is the primary bottleneck**.

---

*Digest generated from GitHub activity data for openclaw/openclaw on 2026-04-30.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent Ecosystem
*Based on community digest data — 2026-04-30*

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing **unprecedented velocity** with over 1,000 combined PRs and issues updated across tracked projects in a single 24-hour period. The landscape has bifurcated into two distinct tiers: **mature platforms** (OpenClaw, ZeroClaw, IronClaw, CoPaw) with 50+ daily items and established user bases, and **emerging or niche projects** (NullClaw, TinyClaw, ZeptoClaw) showing minimal activity. A dominant architectural tension is visible everywhere: projects are racing to support multi-modal, multi-channel, multi-agent deployments while struggling with **review bandwidth bottlenecks**—merge rates below 15% are common even at high-activity projects. The sector is simultaneously maturing toward enterprise reliability and expanding into voice, telephony, and IoT edge deployments.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Status | Health Score* |
|:---|:---:|:---:|:---:|:---|:---:|
| **OpenClaw** | 500 | 500 | 128 (25.6%) | v2026.4.27 shipped | ⚠️ **Stressed** — high volume, low throughput, stability debt |
| **NanoBot** | 12 | 40 | 26 (65%) | v0.1.5.post3 shipped | ✅ **Healthy** — good merge rate, focused scope |
| **Hermes Agent** | 50 | 50 | 6 (12%) | **None** — stalled cadence | ⚠️ **Bottlenecked** — security-responsive but review-starved |
| **PicoClaw** | 12 | 20 | 5 (25%) | Nightly only (v0.2.7-nightly) | ⚠️ **Fragile** — duplicate PRs, provider instability |
| **NanoClaw** | 4 | 50 | 21 (42%) | **None** — release lag | ✅ **Active** — high velocity, reliability-focused, no versioned distro |
| **NullClaw** | 2 | 0 | 0 | **None ever** | 🔴 **Stalled** — minimal activity, mission drift risk |
| **IronClaw** | 28 | 50 | 33 (66%) | v0.27.0 shipped | ⚠️ **Volatile** — ambitious rewrite, canary failures, release quality gaps |
| **LobsterAI** | 1 | 28 | 4 (14%) | 2026.4.29 shipped | ⚠️ **Backlogged** — 24 stale PRs since Mar 25, security unmerged |
| **Moltis** | 6 | 8 | 3 (37.5%) | Two builds (20260429.01/.02) | ✅ **Strong** — rapid security response, feature expansion |
| **CoPaw** | 30 | 22 | 10 (45.5%) | v1.1.5 shipped | ✅ **Healthy** — active Chinese market focus, good contributor flow |
| **ZeroClaw** | 50 | 50 | 1 (2%) | **None** since v0.6.9 | 🔴 **Critical bottleneck** — 98% open PR rate despite high activity |
| **TinyClaw** | 0 | 0 | 0 | No activity | 🔴 **Inactive** |
| **ZeptoClaw** | 0 | 0 | 0 | No activity | 🔴 **Inactive** |

*\*Health Score synthesizes merge rate, release cadence, issue resolution velocity, and stability indicators*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|-----------|----------|---------------|
| **Scale** | 1,000 items/24h — 10× NanoBot, 20× Moltis | Largest community by volume; ZeroClaw matches items but not throughput |
| **Platform breadth** | Native iOS/macOS/Android apps; 15+ channel integrations | Only CoPaw matches Chinese channel depth; ZeroClaw chasing parity |
| **Provider ecosystem** | Codex Computer Use, DeepInfra, 20+ providers | Broadest provider matrix; IronClaw focuses on runtime contracts instead |
| **Enterprise features** | ACP protocol, session lanes, tool-call loop detection | Mature orchestration; NanoClaw's x402 micropayments is novel alternative |

### Technical Approach Differences
- **vs. NanoBot**: OpenClaw is monolithic/TypeScript; NanoBot is Python-based with HookCenter plugin architecture — more extensible but less unified
- **vs. IronClaw**: OpenClaw optimizes for shipping speed; IronClaw pursues formal verification-grade security with "Reborn" WASM/WIT runtime — higher assurance, slower delivery
- **vs. ZeroClaw**: Both TypeScript, similar feature sets, but OpenClaw has 25× merge throughput and established release discipline
- **vs. CoPaw**: OpenClaw is globally distributed; CoPaw is China-optimized (CJK memory, WeCom/Feishu/QQ channels, Volcengine/Qwen providers)

### Community Size
OpenClaw's 500 PRs/500 issues dwarfs all peers except ZeroClaw (matching items, 2% merge rate). However, **engagement quality concerns exist**: 94% open issue rate and "stale label proliferation" suggest triage process decay at scale.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Threaded conversations / session isolation** | NanoBot, OpenClaw, ZeroClaw, CoPaw, Hermes | Feishu topics, Slack threads, Matrix rooms, Telegram groups all need per-thread context boundaries |
| **Voice/TTS/Telephony integration** | OpenClaw, Hermes, Moltis, ZeroClaw, CoPaw | Voice personas (Moltis), interrupt handling (Hermes), STT dispatch (ZeroClaw), QQ `.silk` format (CoPaw) |
| **Provider diversification beyond OpenAI** | All active projects | Gemini (NanoClaw, ZeroClaw, LobsterAI), DeepSeek (PicoClaw, CoPaw), Ollama/local (ZeroClaw, Hermes), Volcengine/Qwen (LobsterAI, CoPaw) |
| **MCP (Model Context Protocol) adoption** | OpenClaw, NanoClaw, Moltis, LobsterAI | HTTP streaming (LobsterAI #857), fail-closed checks (OpenClaw), remote servers (NanoClaw #2131), OAuth re-auth (Moltis #927) |
| **Cost/token optimization** | OpenClaw, Hermes, ZeroClaw, NanoClaw | Tiered bootstrap loading (#22438), lazy tool schema loading (#6839), skill compilation (#5146), context compaction (CoPaw v1.1.5) |
| **Security hardening** | All projects | Credential exfiltration (Hermes #17656), sandbox escape (Moltis #923), file traversal (CoPaw #3955), approval gate violations (Hermes #17619) |
| **Container/edge deployment** | NanoClaw, PicoClaw, NullClaw, ZeroClaw | Environment passthrough (NanoClaw #2138), Docker fixes (PicoClaw #2700), low-resource targets (NullClaw #871), LXC (ZeroClaw #6123) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Scale + platform breadth | Power users, multi-agent teams, enterprises | Monolithic TypeScript, heavy channel/provider matrix |
| **NanoBot** | Plugin ecosystem (HookCenter) | Python developers, customizable deployments | Python, entry_points-based extensibility |
| **Hermes Agent** | Security-first agent runtime | Privacy-conscious, local-model users | Rust/TUI-focused, approval gates, sandboxing |
| **PicoClaw** | Embedded/edge heritage | IoT, Sipeed hardware, resource-constrained | Go, CLI-primary, nightly cadence |
| **NanoClaw** | Agent monetization | API economy, agent-to-agent commerce | TypeScript, x402 micropayments, container-native |
| **IronClaw** | Formal runtime contracts | Enterprise security, compliance | Rust, WASM/WIT "Reborn," capability-based auth |
| **LobsterAI** | Chinese ecosystem integration | China-based developers, Youdao users | Electron, Volcengine/Qwen/Baidu native |
| **Moltis** | Multi-modal orchestration | Voice-first, telephony, call-center | Rust, Twilio integration, voice personas |
| **CoPaw** | Chinese enterprise messaging | WeCom/Feishu/QQ enterprise users | TypeScript, CJK-optimized, approval workflows |
| **ZeroClaw** | Drop-in OpenClaw alternative | Self-hosters, OpenClaw migrants | TypeScript, ACP protocol, web onboarding |

**Key Architectural Divides:**
- **Language**: Python (NanoBot) vs. TypeScript (OpenClaw, ZeroClaw, NanoClaw, CoPaw) vs. Rust (Hermes, IronClaw, Moltis) vs. Go (PicoClaw)
- **Runtime model**: Monolithic (OpenClaw) vs. plugin-based (NanoBot) vs. capability-sandboxed (IronClaw) vs. WASM-isolated (IronClaw Reborn)
- **Deployment target**: Cloud/container (most) vs. edge/embedded (PicoClaw, NullClaw) vs. desktop (Hermes TUI, LobsterAI Electron)

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Velocity, Active Releases)
| Project | Characteristics | Risk |
|:---|:---|:---|
| **NanoBot** | 65% merge rate, regular post-releases, HookCenter architecture | Feishu thread config gap in new release |
| **Moltis** | Same-day security fixes, voice/telephony expansion, slash commands | Reviewer concentration (penso = 50% of PRs) |
| **CoPaw** | v1.1.5 with CJK focus, 45% merge rate, first-time contributors | Security vuln (#3955) needs triage |

### Tier 2: High Volume, Strained Throughput
| Project | Characteristics | Risk |
|:---|:---|:---|
| **OpenClaw** | Massive scale, 25% merge rate, stability debt accumulation | Quality degradation, contributor burnout, Windows neglect |
| **IronClaw** | 66% merge rate but canary failures, ambitious rewrite | Release quality vs. velocity trade-off, integration hell |
| **NanoClaw** | 42% merge rate, no releases, reliability sprint | Versioned distribution gap, container abstraction leaks |

### Tier 3: Bottlenecked/Stalled
| Project | Characteristics | Risk |
|:---|:---|:---|
| **Hermes Agent** | 12% merge rate, no releases, P0-P1 security queue | Community exodus, contributor discouragement |
| **ZeroClaw** | **2% merge rate**, 50 PRs, 1 merge — critical bottleneck | Project death spiral despite high activity |
| **LobsterAI** | 14% merge rate, 24 stale PRs from Mar 25 | Security unpatched, contributor goodwill depletion |
| **PicoClaw** | 25% merge rate, duplicate PRs, provider fragility | Quality control gaps, contributor friction |

### Tier 4: Inactive/Maintenance
| Project | Status |
|:---|:---|
| **NullClaw** | 2 issues, 0 PRs, no releases — mission drift risk |
| **TinyClaw, ZeptoClaw** | Zero activity |

---

## 7. Trend Signals

| Trend | Evidence | Value for AI Agent Developers |
|:---|:---|:---|
| **Voice as first-class channel** | Moltis telephony, Hermes interrupt handling, ZeroClaw speech pipeline, CoPaw QQ voice, OpenClaw Brabble wake | Voice UX is no longer optional; expect telephony integration, TTS consistency, and real-time audio handling as table stakes |
| **Agent-to-agent economic layer** | NanoClaw x402 micropayments, OpenClaw ACP session lanes, IronClaw capability contracts | Monetization and cross-agent trust are emerging; prepare for agent marketplaces and per-call billing |
| **Context/memory as competitive moat** | CoPaw CJK memory search, ZeroClaw memory autosave fixes, Hermes lazy skill retrieval, OpenClaw memoryFlush reliability | Memory quality directly impacts user retention; invest in compaction, deduplication, and cross-session continuity |
| **Security as user-facing feature** | Hermes approval gate audit, Moltis sandbox escape fix, OpenClaw fail-closed MCP, IronClaw trust engine | Users are auditing safety; document security boundaries, provide behavioral transparency |
| **Chinese market specialization** | CoPaw (WeCom/Feishu/QQ), LobsterAI (Volcengine/Qwen/Baidu), NanoBot (minimax) | Global projects must localize channels, providers, and memory systems for China; conversely, Chinese projects may expand internationally |
| **"Reproducible agent" cost pressure** | Tiered bootstrap (#22438), lazy tool loading (#6839), skill compilation (#5146), context compaction | Token economics matter at scale; design for deterministic, minimal-context operations |
| **Container environment transparency** | NanoClaw env passthrough, ZeroClaw Docker issues, PicoClaw Docker fix, NullClaw low-resource targets | Container abstraction is leaky; expose configuration surface or face capability truncation |
| **Approval UX evolution** | CoPaw interactive cards (#3941), Moltis slash commands, Hermes gate violations | Text-based approvals don't scale; invest in one-click, context-rich, non-blocking authorization flows |

---

*Report generated from 13 project digests covering 1,050+ issues/PRs. Health assessments synthesize quantitative metrics with qualitative stability indicators.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-30

## 1. Today's Overview

NanoBot shows **very high development velocity** with 40 PRs updated in the last 24 hours (26 merged/closed, 14 open) and 12 issues processed (8 closed, 4 active). The project just shipped **v0.1.5.post3**, a significant release emphasizing threaded conversation support across platforms. Community activity is robust with diverse contributions spanning channel integrations, provider expansions, and infrastructure improvements. However, the presence of multiple stale/open issues and a bug report about forced thread replies suggests growing pains as the platform scales conversation-centric features.

---

## 2. Releases

### [v0.1.5.post3](https://github.com/HKUDS/nanobot/releases/tag/v0.1.5.post3)
- **57 PRs merged, 12 new contributors**
- **Headline feature**: Threaded conversations as "first-class citizens" — Feishu group topics now get isolated sessions
- **Thematic focus**: If v0.1.5.post2 was "reach and polish," post3 is "conversations becoming first-class citizens of their platform"
- **Migration note**: Users leveraging Feishu group chats should verify `replyToMessage` behavior; thread isolation may change message flow patterns

---

## 3. Project Progress

### Merged/Closed PRs Today (26 total; key highlights)

| PR | Author | Summary |
|:---|:---|:---|
| [#3541](https://github.com/HKUDS/nanobot/pull/3541) | aiguozhi123456 | **HookCenter infrastructure** — centralized named hook points with plugin discovery via Python `entry_points`; supports intercept, mutate, short-circuit, cancel semantics |
| [#3487](https://github.com/HKUDS/nanobot/pull/3487) | boogieLing | **Per-channel progress controls** — `sendProgress`/`sendToolHints` now overrideable per-channel (closes [#3452](https://github.com/HKUDS/nanobot/issues/3452)) |
| [#3508](https://github.com/HKUDS/nanobot/pull/3508) | yorkhellen | **Atomic writes for `history.jsonl`** — prevents corruption on crash/power loss via temp file + `os.replace()` + `fsync()` |
| [#3505](https://github.com/HKUDS/nanobot/pull/3505) | chengyongru | **Olostep web search provider** — new optional backend using official SDK |
| [#3457](https://github.com/HKUDS/nanobot/pull/3457) | chengyongru | **`create-instance` built-in skill** — agents can spawn new bot instances conversationally |
| [#3510](https://github.com/HKUDS/nanobot/pull/3510) | JiajunBernoulli | **Matrix Windows fix** — sanitize `user_id` colons for Windows file paths |
| [#3431](https://github.com/HKUDS/nanobot/issues/3431) | T3chC0wb0y | **MSTeams threaded reply fix** — corrected Bot Framework REST target for `replyToId` |

**Infrastructure maturation**: HookCenter (#3541) signals architectural evolution toward plugin ecosystem. Atomic write fix (#3508) addresses data durability. Multiple AI-assistant workflow PRs from `x804907` (six-stage agent workflows) were closed — possibly experimental or superseded.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#3095](https://github.com/HKUDS/nanobot/issues/3095) | 6 | Custom Anthropic-compatible endpoint | **Provider flexibility** — users want to self-host or use Anthropic API proxies, not just OpenAI-compatible endpoints |
| [#2590](https://github.com/HKUDS/nanobot/issues/2590) | 5 | Minimax provider broken in v0.1.4.post6 | **Regression trust** — provider stability across upgrades; minimax is a Chinese model provider suggesting APAC market importance |
| [#1099](https://github.com/HKUDS/nanobot/issues/1099) | 3, 👍2 | Cron connection pool exhaustion | **Operational scalability** — production deployments hitting Telegram bot connection limits |

**Analysis**: The Anthropic endpoint issue (#3095) reveals a broader pattern — users want **pluggable provider architectures** beyond OpenAI compatibility layers. The minimax regression (#2590) indicates provider maintenance burden is growing. Cron pool issue (#1099) shows production scaling concerns.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **High** | [#3533](https://github.com/HKUDS/nanobot/issues/3533) — `reply_in_thread` forced in Feishu groups | **OPEN** | [#3543](https://github.com/HKUDS/nanobot/pull/3543) (open) | Ignores `replyToMessage` config; breaks expected UX. Fix PR in review. |
| **High** | [#2590](https://github.com/HKUDS/nanobot/issues/2590) — Minimax provider dead | **OPEN** | None identified | Built-in provider fails post-upgrade; user provided `apiBase` attempts. |
| **Medium** | [#1783](https://github.com/HKUDS/nanobot/issues/1783) — Codex 60s timeout, no retry | **CLOSED** | Unknown | Silent cron failures; hardcoded timeout. |
| **Medium** | [#3517](https://github.com/HKUDS/nanobot/pull/3517) — WeChat cron `context_token` missing | **OPEN** | #3517 (open) | Scheduled messages silently dropped; fix uses getconfig API refresh. |
| **Medium** | [#1068](https://github.com/HKUDS/nanobot/issues/1068) — Local models hallucinating | **OPEN, stale** | None | Persistent across models → likely system prompt/tool handling bug. |
| **Low** | [#2341](https://github.com/HKUDS/nanobot/issues/2341) — WebFetchTool always proxies via jina.ai | **CLOSED** | Unknown | Privacy concern; unconditional proxying. |

**Stability assessment**: Two open high-severity bugs with active fixes in flight. The Feishu thread behavior (#3533/#3543) is particularly notable as it directly contradicts the v0.1.5.post3 "conversations first-class" theme — a configuration gap in the new feature.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| Xiaomi model support | [#3518](https://github.com/HKUDS/nanobot/issues/3518) | Medium | Quick provider add; follows pattern of minimax, olostep expansions |
| Per-channel progress controls | [#3452](https://github.com/HKUDS/nanobot/issues/3452) → [#3487](https://github.com/HKUDS/nanobot/pull/3487) | **Shipped** | Merged today |
| Gateway lifecycle commands | [#3538](https://github.com/HKUDS/nanobot/pull/3538) | High | Open PR; operational necessity for deployments |
| Multi-account WeChat | [#3542](https://github.com/HKUDS/nanobot/pull/3542) | High | Open PR; significant refactor with backward compat |
| Upgrade wizard skill | [#3539](https://github.com/HKUDS/nanobot/pull/3539) | Medium | Open PR; "update-setup" builtin → personalized update skill |
| AI contributor docs (`CLAUDE.md`) | [#3534](https://github.com/HKUDS/nanobot/pull/3534) | High | Open PR; signals project embracing AI-assisted development |

**Predicted v0.1.6 themes**: Gateway ops, multi-account messaging, self-upgrading agents, and AI-native contributor experience.

---

## 7. User Feedback Summary

### Pain Points
- **Configuration unpredictability**: "After upgrade to latest commit (unreleased), it started replying to my messages directly" — [#877](https://github.com/HKUDS/nanobot/issues/877); too many questions, capability regression in bleeding edge
- **Silent failures**: Codex timeouts ([#1783](https://github.com/HKUDS/nanobot/issues/1783)), WeChat cron drops ([#3517](https://github.com/HKUDS/nanobot/pull/3517)) — observability gaps
- **Local model reliability**: [#1068](https://github.com/HKUDS/nanobot/issues/1068) — "happens with all models I've tested," persistent hallucination suggests systemic prompt/tool loop issue

### Positive Signals
- **Engagement depth**: "a lot of fun playing around with it and I can only imagine how incredible it will be after some maturation" — [#877](https://github.com/HKUDS/nanobot/issues/877)
- **Enterprise use cases**: Feishu threads, MSTeams fixes, cron jobs, connection pool tuning — production deployments growing

### Use Case Evolution
From personal assistant → team/enterprise agent platform (multi-account, threaded channels, gateway ops)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1068](https://github.com/HKUDS/nanobot/issues/1068) Local hallucinating | ~2 months, stale | **High** — affects all local models, no model-specific workaround | Maintainer triage; likely needs core agent loop investigation |
| [#877](https://github.com/HKUDS/nanobot/issues/877) Unreleased version feedback | ~2 months | Medium — user on nightly, unclear if resolved | Verify against post3; close or escalate |
| [#2867](https://github.com/HKUDS/nanobot/pull/2867) Telegram group allowlist, fallback agents | ~3 weeks | Medium — large PR, no comments, marked invalid | Author needs maintainer guidance; features seem valuable |
| [#2590](https://github.com/HKUDS/nanobot/issues/2590) Minimax provider | ~1 month | Medium — built-in provider, user provided debug info | Assign provider maintainer or deprecate if unmaintained |

**Maintainer attention recommended**: The stale hallucination issue (#1068) is the most concerning — it implies a fundamental bug in local model integration that could block privacy-conscious or cost-sensitive adopters.

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-04-30. All links: https://github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-30

## 1. Today's Overview

Hermes Agent shows **high community velocity but concerning merge throughput**. With 50 issues and 50 PRs updated in the last 24 hours, the project demonstrates strong engagement, yet only 6 PRs were merged/closed versus 44 remaining open—indicating a potential bottleneck in maintainer review capacity. No new releases were published, continuing a pattern of development without versioned distribution. The activity is heavily skewed toward bug reports (48 open issues vs. 2 closed), with several P0-P1 security and stability items requiring urgent attention. The TUI and gateway platform layers are experiencing active churn, suggesting these subsystems are under stress from real-world usage.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs Today (6 total, 4 shown with significant impact)

| PR | Description | Impact |
|:---|:---|:---|
| [#17255](https://github.com/NousResearch/hermes-agent/pull/17255) | `/reload-skills` slash command + `skills_reload` agent tool | **Feature**: Enables mid-session skill cache refresh without gateway restart; closes gap in dynamic skill management |
| [#7659](https://github.com/NousResearch/hermes-agent/pull/7659) | Telegram user-level access control for groups/DMs | **Security fix**: Mirrors WeChat's access control; prevents unauthorized bot usage |
| [#7942](https://github.com/NousResearch/hermes-agent/pull/7942) | Pluggable gateway platform interface (superseded by #17664) | **Architecture**: Foundation for plugin-based platform adapters; salvaged into cleaner implementation |

### Notable Open PRs Advancing

| PR | Description | Status |
|:---|:---|:---|
| [#17659](https://github.com/NousResearch/hermes-agent/pull/17659) | Block `read_file` on credential stores (`auth.json`, `.anthropic_oauth.json`) | **P0 security fix** ready for merge; addresses [#17656](https://github.com/NousResearch/hermes-agent/issues/17656) |
| [#17645](https://github.com/NousResearch/hermes-agent/pull/17645) | Sanitize Codex tool-call history summaries | **P2** fix for max-iteration crashes with orphaned tool results |
| [#6600](https://github.com/NousResearch/hermes-agent/pull/6600) | Voice interrupts + cascading interrupt hang | **P1** stability fix for TTS/STT concurrency |
| [#10169](https://github.com/NousResearch/hermes-agent/pull/10169) | Prevent corrupted session snapshots during terminal init | **P1** fixes exit code 127 regression from malformed `declare -f` filtering |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Issue/PR | Comments | 👍 | Topic | Underlying Need |
|:---|:---:|:---:|:---|:---|
| [#6607](https://github.com/NousResearch/hermes-agent/issues/6607) | 7 | 0 | `checkpoint_manager` `cwd` points to non-existent directory | **Reliability**: Git operations fail silently when working directories are moved/deleted; users need resilient state management |
| [#8552](https://github.com/NousResearch/hermes-agent/issues/8552) | 6 | 4 | Slack Block Kit markdown vs. legacy `mrkdwn` | **Platform parity**: Rich formatting (tables, structured data) increasingly expected in enterprise Slack deployments |
| [#6078](https://github.com/NousResearch/hermes-agent/issues/6078) | 5 | 2 | Unified one-command migration across machines/OS | **Onboarding/ops**: Hermes adoption friction for multi-device users; current migration is fragmented (`claw migrate` + `profile export/import`) |
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | 3 | 7 | Lazy Tool Schema Loading (Two-Pass Tool Injection) | **Cost/performance**: 3,500-5,000 tokens/call overhead is prohibitive for local models and high-volume API users; strong community demand (7 👍) |

### Engagement Pattern Analysis

- **Tool system overhead** (#6839) has highest reaction-to-comment ratio, indicating silent majority demand for token optimization
- **Slack/enterprise platform polish** (#8552, #17054) shows professional deployment maturity gaps
- **Migration/ops** (#6078) reveals Hermes is crossing the chasm from personal to team infrastructure

---

## 5. Bugs & Stability

### Critical (P0-P1)

| Issue | Severity | Component | Description | Fix PR? |
|:---|:---:|:---|:---|:---:|
| [#17656](https://github.com/NousResearch/hermes-agent/issues/17656) | **P0** | `tool/file`, `area/auth` | `read_file` can exfiltrate credentials from `auth.json` and `.anthropic_oauth.json` | ✅ [#17659](https://github.com/NousResearch/hermes-agent/pull/17659) |
| [#6831](https://github.com/NousResearch/hermes-agent/issues/6831) | **P1** | `tool/patch_parser`, `tool/fuzzy_match` | 9 bugs in V4A patch parser: data loss, partial apply, silent errors on files >2000 lines | ❌ |
| [#17648](https://github.com/NousResearch/hermes-agent/issues/17648) | **P1** | `comp/cli`, `comp/gateway`, `platform/matrix` | Matrix messages fail with `ImportError: cannot import name 'cfg_get'` | ❌ |
| [#10169](https://github.com/NousResearch/hermes-agent/pull/10169) | **P1** | `tool/terminal` | Corrupted session snapshots cause exit code 127 | ✅ (PR open) |
| [#6600](https://github.com/NousResearch/hermes-agent/pull/6600) | **P1** | `comp/agent`, `tool/tts` | Voice interrupts cause cascading hang | ✅ (PR open) |

### High (P2)

| Issue | Component | Description | Fix PR? |
|:---|:---|:---|:---:|
| [#17641](https://github.com/NousResearch/hermes-agent/issues/17641) | `platform/whatsapp` | Platform hint says "no markdown" but adapter auto-converts it (contradictory behavior) | ✅ Closed |
| [#17603](https://github.com/NousResearch/hermes-agent/issues/17603) | `comp/tui` | Chinese text rendering: character scattering and ghosting | ❌ |
| [#17602](https://github.com/NousResearch/hermes-agent/issues/17602) | `comp/tui` | Duplicate of above — indicates rapid filing, possible regression spike | ❌ |
| [#17595](https://github.com/NousResearch/hermes-agent/issues/17595) | `comp/gateway`, `platform/weixin` | File/image sending fails with asyncio timeout | ❌ |
| [#12534](https://github.com/NousResearch/hermes-agent/issues/12534) | `tool/terminal`, `backend/docker` | Docker sandbox never receives `docker_forward_env` vars | ❌ |
| [#17619](https://github.com/NousResearch/hermes-agent/issues/17619) | `comp/agent` | Approval gate violated in 92% of sessions (behavioral audit, 129 sessions) | ❌ |

### Stability Assessment

**Concerning trends**: TUI internationalization (Chinese rendering) has multiple duplicate filings suggesting either regression or poor discoverability of existing issues. The approval gate violation (#17619) is a **fundamental safety issue**—if validated, it undermines Hermes's core agentic safety model. The credential exfiltration bug (#17656) was reported and patched same-day, showing responsive security handling.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Category | Predicted Priority | Rationale |
|:---|:---|:---:|:---|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) Lazy Tool Schema Loading | Performance/cost | **High** | 7 👍, concrete token savings, local model imperative |
| [#8552](https://github.com/NousResearch/hermes-agent/issues/8552) Slack Block Kit | Platform/enterprise | **Medium-High** | Professional deployment blocker; competitor parity |
| [#6078](https://github.com/NousResearch/hermes-agent/issues/6078) Unified migration | Ops/onboarding | **Medium** | Reduces support burden; enables team adoption |
| [#6642](https://github.com/NousResearch/hermes-agent/issues/6642) Unified telemetry + analytics | Observability | **Medium** | Complements #6741; enterprise requirement |
| [#6611](https://github.com/NousResearch/hermes-agent/issues/6611) Native Kimi K2.5 vision | Model capability | **Medium** | Moonshot API native support vs. auxiliary vision service |
| [#17649](https://github.com/NousResearch/hermes-agent/issues/17649) Semantic Skill Retrieval (SQLite FTS5) | Performance | **Medium** | 4,485 tokens/turn → on-demand search; scales skill system |
| [#17664](https://github.com/NousResearch/hermes-agent/pull/17664) Pluggable gateway platforms | Architecture | **Medium** | Salvaged from #7942; enables community platform contributions |
| [#6708](https://github.com/NousResearch/hermes-agent/issues/6708) Discord thread context | Platform polish | **Low-Medium** | UX gap vs. Slack adapter |

**Next-version likelihood**: Lazy tool loading (#6839) and pluggable platforms (#17664) have both technical merit and community momentum. Telemetry (#6642/#6741) forms a coherent observability theme with existing instrumentation PRs.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Token/cost overhead** | #6839 (3,500-5,000 tokens/call), #17649 (4,485 tokens/turn skills) | 🔴 High |
| **TUI internationalization broken** | #17602, #17603, #17229 (Chinese rendering, theme layout shifts) | 🔴 High |
| **Approval/safety mechanisms failing** | #17619 (92% gate violation), #17656 (credential exposure) | 🔴 Critical |
| **Platform adapter polish gaps** | #8552 (Slack), #17054 (Slack manifest), #17595 (Weixin), #17648 (Matrix), #6731 (Feishu hardcoded identity) | 🟡 Medium |
| **Migration/backup fragility** | #6078 (no unified migration), #6607 (checkpoint cwd breaks) | 🟡 Medium |
| **Voice/TTS edge cases** | #6600 (interrupt hangs), #17573 (WSL2 audio routing) | 🟡 Medium |

### Use Cases Emerging

- **Enterprise team deployment**: Slack/Discord thread context, access control, migration tools
- **Local model optimization**: Lazy loading, provider concurrency semaphores (#7479), vision native routing
- **Privacy-sensitive workflows**: `/exit --delete` (#17665), session deletion from TUI (#17668)

### Satisfaction Signals

- Active PR contributions for fixes (same-day security patch #17659)
- Community building plugins (agentmemory integration #6715)
- Feature ports from related projects (Cline memory monitoring #17667, Gemini CLI #17665)

---

## 8. Backlog Watch

### Long-Unanswered Important Items

| Issue | Age | Status | Risk |
|:---|:---:|:---|:---|
| [#6607](https://github.com/NousResearch/hermes-agent/issues/6607) `checkpoint_manager` cwd bug | 21 days | Open, 7 comments | **Data loss risk** — checkpoints silently fail when dirs moved |
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) Lazy tool loading | 21 days | Open, 7 👍, no PR | **Competitive disadvantage** — local model users migrating away |
| [#7479](https://github.com/NousResearch/hermes-agent/pull/7479) Provider concurrency semaphore | 19 days | Open | Rate limit mitigation for z.ai/Kimi; blocks reliable multi-request flows |
| [#6242](https://github.com/NousResearch/hermes-agent/issues/6242) `/model provider/model` routing | 22 days | **Closed today** | Was routing to default provider; fixed |

### Maintainer Attention Needed

| Item | Action Required |
|:---|:---|
| [#17619](https://github.com/NousResearch/hermes-agent/issues/17619) Approval gate audit | **Urgent validation** — 129-session behavioral audit claims fundamental safety failure; needs maintainer response or refutation |
| [#6831](https://github.com/NousResearch/hermes-agent/issues/6831) 9 patch parser bugs | Tier 1 data loss bugs; no PR despite detailed report |
| [#17603](https://github.com/NousResearch/hermes-agent/issues/17603) / [#17602](https://github.com/NousResearch/hermes-agent/issues/17602) TUI Chinese rendering | Duplicate filings suggest issue template or search failure; needs consolidation |
| [#17664](https://github.com/NousResearch/hermes-agent/pull/17664) vs [#7942](https://github.com/NousResearch/hermes-agent/pull/7942) | Plugin architecture PR superseded; #7942 should be formally closed to reduce queue noise |

---

## Project Health Assessment

| Metric | Status |
|:---|:---|
| **Activity** | 🟢 High (100 items/24h) |
| **Merge velocity** | 🔴 Low (12% close rate) |
| **Security responsiveness** | 🟢 Good (same-day P0 patch) |
| **Release cadence** | 🔴 Stalled (no releases) |
| **Issue triage** | 🟡 Concerning (48/50 open, duplicates unmerged) |
| **Community contribution** | 🟢 Healthy (external PRs, plugin integrations) |

**Recommendation**: Hermes would benefit from a focused "stability sprint" prioritizing P0-P1 bug merges, TUI internationalization fixes, and establishing a predictable release cadence to capture the active development into distributable versions.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-30

## 1. Today's Overview

PicoClaw shows **high development velocity** with 20 PRs and 12 issues updated in the last 24 hours, indicating an active, fast-moving project. The community is pushing hard on **provider compatibility** (DeepSeek, OpenAI Responses API, Bedrock streaming) and **channel expansion** (Slack webhook, MQTT, WhatsApp builds). However, **quality control concerns emerge**: three duplicate/closed PRs for the same HTTP clipboard fix (#2709, #2711, #2712) suggest contributor coordination friction. The project maintains a **nightly release cadence** (v0.2.7-nightly.20260429.db1bc6a1), but with 11 of 12 issues remaining open, issue resolution lag is notable. DeepSeek integration appears particularly fragile with three related bug reports/PRs in two days.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.7-nightly.20260429.db1bc6a1](https://github.com/sipeed/picoclaw/compare/v0.2.7...main) | Nightly | Automated build from `main`; **unstable**, use with caution. Full changelog compares against v0.2.7 stable. |

**No stable release today.** The nightly suggests ongoing work toward v0.2.8 but no milestone commitment.

---

## 3. Project Progress

### Merged/Closed PRs (5 items)

| PR | Author | Summary | Significance |
|----|--------|---------|------------|
| [#2710](https://github.com/sipeed/picoclaw/pull/2710) | taonyx | **Remove TUI, add CLI support for custom OpenAI-compatible endpoints** | Executes [RFC #2208](https://github.com/sipeed/picoclaw/issues/2208); major architectural shift |
| [#2700](https://github.com/sipeed/picoclaw/pull/2700) | imguoguo | Restore `make docker-build`, fix Go 1.26→1.25 version | Unblocks containerized deployments |
| [#2711](https://github.com/sipeed/picoclaw/pull/2711) | openapphub | *(superseded)* HTTP clipboard fix | Closed in favor of #2712 |
| [#2709](https://github.com/sipeed/picoclaw/pull/2709) | openapphub | *(duplicate)* HTTP clipboard fix | Contributor submitted 3 variants same day |
| [#2714](https://github.com/sipeed/picoclaw/pull/2714) | is-Xiaoen | *(superseded)* Multi-user group chat attribution | Closed, resubmitted as cleaner #2715 |

### Key Advances

- **TUI deprecation executed**: CLI now primary terminal interface
- **Docker build restored** after Go version mismatch blocked builds
- **Feishu channel hardened**: Image download with API fallback, post/interactive card support (#2708)

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | 👍 | Underlying Need |
|------|------|----------|-----|-----------------|
| 1 | [#2171](https://github.com/sipeed/picoclaw/issues/2171) OpenAI Responses API migration | 9 | 0 | **Future-proofing against OpenAI deprecation**; technical debt reduction |
| 2 | [#1042](https://github.com/sipeed/picoclaw/issues/1042) `exec` tool `guardCommand` false positives | 6 | 1 | **Security vs. usability tension**; regex-based path detection breaking legitimate commands |
| 3 | [#2208](https://github.com/sipeed/picoclaw/issues/2208) TUI deprecation RFC *(closed)* | 1 | 8 | **Resource allocation clarity**; community endorsed CLI focus (8 👍 = strongest signal) |
| 4 | [#2548](https://github.com/sipeed/picoclaw/issues/2548) Multiple auth credentials error | 5 | 0 | **Configuration complexity**; `config.json` + `model_list` interaction unclear |

### Analysis

- **#2171** (9 comments): Core maintainer likely resisting breaking change; community wants modern OpenAI API alignment
- **#2208** (8 👍): Strong consensus for TUI removal validates #2710 merge; low comment count suggests agreement, not controversy

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? | Risk |
|----------|-------|-------------|---------|------|
| 🔴 **Critical** | [#2704](https://github.com/sipeed/picoclaw/issues/2704) | DingTalk SDK panic → gateway crash | ❌ None | Production downtime; 6 panics in logs |
| 🟠 **High** | [#2706](https://github.com/sipeed/picoclaw/issues/2706) | DeepSeek v4 `reasoning_content` not persisted → 400 errors | ⚠️ [#2707](https://github.com/sipeed/picoclaw/pull/2707) (partial) | Breaking DeepSeek integration; fix acknowledges overstatement in original report |
| 🟠 **High** | [#2718](https://github.com/sipeed/picoclaw/issues/2718) | DeepSeek `image_url` variant rejection | ✅ [#2717](https://github.com/sipeed/picoclaw/pull/2717) | Multimodal history corruption for strict providers |
| 🟡 **Medium** | [#2621](https://github.com/sipeed/picoclaw/issues/2621) | Session context lost after API timeout | ❌ None | Data loss; duplicate sessions pollute state |
| 🟡 **Medium** | [#2716](https://github.com/sipeed/picoclaw/issues/2716) | SVG→Telegram `SendPhoto` mapping failure | ❌ None | File delivery regression |
| 🟡 **Medium** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | `exec` guard false positive on URLs | ❌ None | Tool reliability |
| 🟢 **Low** | [#2713](https://github.com/sipeed/picoclaw/issues/2713) | Tool feedback animation leak (Feishu) | ✅ [#2713](https://github.com/sipeed/picoclaw/pull/2713) | UI resource leak |

### Stability Assessment

**DeepSeek provider is fragile** (2 bugs, 1 partial fix in 48h). **DingTalk production-unsafe** due to upstream SDK race condition. Session management (#2621) remains unaddressed despite Docker/container context.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in v0.2.8 | Rationale |
|---------|----------|----------------------|-----------|
| OpenAI Responses API | [#2171](https://github.com/sipeed/picoclaw/issues/2171) | Medium | High engagement, but breaking; may slip to v0.3.0 |
| Bedrock streaming | [#2645](https://github.com/sipeed/picoclaw/pull/2645) | **High** | PR open, actively updated; enterprise demand |
| Multi-user chat attribution | [#2715](https://github.com/sipeed/picoclaw/pull/2715) | **High** | Clean resubmission of #2714; closes #2702 |
| Slack webhook output | [#2719](https://github.com/sipeed/picoclaw/pull/2719) | Medium | New channel; Block Kit support is differentiated |
| MQTT channel | [#2705](https://github.com/sipeed/picoclaw/pull/2705) | Medium | IoT use case; overlaps with PicoClaw's embedded/Sipeed roots |
| Intel OpenVINO | [#2703](https://github.com/sipeed/picoclaw/pull/2703) | Medium | Local inference trend; hardware-specific |
| WhatsApp compiled builds | [#2625](https://github.com/sipeed/picoclaw/issues/2625) | Low | Build system complexity; licensing concerns |
| `.env` file for skills | [#2623](https://github.com/sipeed/picoclaw/issues/2623) | Low | Config system redesign needed |
| OpenCode provider | [#2671](https://github.com/sipeed/picoclaw/issues/2671) | Low | Niche provider; no PR |

### Predicted v0.2.8 Scope

**Probable**: Bedrock streaming, multi-user attribution, DeepSeek fixes
**Possible**: Slack webhook, MQTT, OpenAI Responses API (if #2171 resolves)
**Unlikely**: WhatsApp builds, OpenVINO (needs validation)

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Provider fragility** | DeepSeek 400s, auth credential conflicts (#2548, #2706, #2718) | High |
| **Embedded/edge deployment** | Raspberry Pi Zero 2 WhatsApp builds (#2625), Docker fixes (#2700) | Medium |
| **Session reliability** | Timeout → context loss (#2621) | Medium |
| **Security tool false positives** | `curl` blocked by path guard (#1042) | Medium |
| **Frontend HTTPS assumption** | 3 PRs for HTTP clipboard fallback (#2709-2712) | Low (but embarrassing) |

### Use Cases

- **IoT/embedded**: Raspberry Pi deployments needing WhatsApp (#2625)
- **Enterprise messaging**: DingTalk, Feishu, Slack integrations with media handling
- **Multi-tenant group chats**: Discord/Telegram/Slack groups needing per-user history (#2715)

### Satisfaction Signals

- **Strong RFC engagement** (#2208, 8 👍): Community trusts maintainer direction
- **Active contributor base**: Multiple PRs from `loafoe`, `imguoguo`, `is-Xiaoen`

### Dissatisfaction Signals

- **Contributor friction**: 3 duplicate PRs for same fix suggests onboarding/docs gap
- **Stale issues**: 5 of 12 issues tagged `stale`, including #2171 (enhancement) and #2625 (build)

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>7 days, high impact)

| Issue | Age | Blocker | Action Needed |
|-------|-----|---------|---------------|
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) OpenAI Responses API | 31 days | Breaking change decision | Approve/reject migration plan |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) exec guard false positives | 57 days | Security review | Redesign path validation regex |
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) WhatsApp arm64 builds | 8 days | Build system | Evaluate compiler flag inclusion |
| [#2623](https://github.com/sipeed/picoclaw/issues/2623) `.env` file support | 8 days | Config architecture | Clarify skill environment variable design |
| [#2548](https://github.com/sipeed/picoclaw/issues/2548) Multiple auth credentials | 14 days | Config precedence | Document or fix `model_list` + top-level key interaction |

### PRs At Risk of Stagnation

| PR | Age | Risk |
|----|-----|------|
| [#2192](https://github.com/sipeed/picoclaw/pull/2192) Anthropic cache_control fix | 31 days | Stale; fixes prompt caching cost issue |
| [#2624](https://github.com/sipeed/picoclaw/pull/2624) OpenAI-compatible embeddings | 8 days | vLLM ecosystem relevance |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) Channel identification refactor | 14 days | Large refactor; needs architectural review |

---

*Digest generated from GitHub activity 2026-04-29 to 2026-04-30. All links reference `https://github.com/sipeed/picoclaw`.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-30

---

## 1. Today's Overview

NanoClaw shows **exceptionally high development velocity** with 50 PRs updated in the last 24 hours (29 open, 21 merged/closed) against a modest 4 issues. This 12.5:1 PR-to-issue ratio indicates aggressive feature development and proactive bug-fixing rather than reactive firefighting. The project appears healthy with active contributor engagement, though the zero new releases suggests code is accumulating in mainline without versioned distribution. A notable concentration of work centers on container environment passthrough, model provider expansion, and message delivery reliability.

---

## 2. Releases

**No new releases** — versioned distribution remains paused despite substantial code movement.

---

## 3. Project Progress

### Merged/Closed PRs (21 total; key items highlighted)

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #2140 | jbaruch | Added Copilot instructions following project guidelines | [qwibitai/nanoclaw#2140](https://github.com/qwibitai/nanoclaw/pull/2140) |
| #1767 | 0xOsprey | **Skill: `add-agentcash`** — pay-per-call API access via x402 micropayments | [qwibitai/nanoclaw#1767](https://github.com/qwibitai/nanoclaw/pull/1767) |
| #2137 | farooqu | Google Gemini provider support (duplicate/closed in favor of #2136) | [qwibitai/nanoclaw#2137](https://github.com/qwibitai/nanoclaw/pull/2137) |
| #2135 | farooqu | Google Gemini provider support (another iteration, closed) | [qwibitai/nanoclaw#2135](https://github.com/qwibitai/nanoclaw/pull/2135) |
| #2122 | taylorwalton | Shuffle notifications feature (closed) | [qwibitai/nanoclaw#2122](https://github.com/qwibitai/nanoclaw/pull/2122) |
| #2121 | jsboige | **Fail-fast for down MCP remotes** in v2/agent-runner | [qwibitai/nanoclaw#2121](https://github.com/qwibitai/nanoclaw/pull/2121) |

**Key advancements:**
- **Monetization infrastructure**: x402 micropayments integration establishes NanoClaw as a platform for agent-to-agent economic transactions
- **Provider diversification**: Multiple iterations on Google Gemini support show persistence on non-Anthropic model integration
- **Operational hardening**: Fail-fast behavior prevents silent degradation when MCP infrastructure fails

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|:---|:---|:---|
| [#2136](https://github.com/qwibitai/nanoclaw/pull/2136) — Google Gemini provider | 3 duplicate PRs (#2135, #2136, #2137), rapid iteration | Strong demand for model choice beyond Claude; contributor `farooqu` iterating publicly suggests either maintainer feedback loop or self-correction. Pattern matches OpenAI Codex provider architecture, indicating modular design success. |
| [#2139](https://github.com/qwibitai/nanoclaw/issues/2139) — API Error 400 on image processing | 1 comment, user-reported production failure | Image pipeline fragility under real-world load; "worked once, failed on second upload" suggests stateful or rate-limiting issue rather than fundamental capability gap |
| [#1820](https://github.com/qwibitai/nanoclaw/issues/1820) → [#2138](https://github.com/qwibitai/nanoclaw/pull/2138) | Issue closed with matching fix PR same day | Community-driven issue-to-PR pipeline working: `nhod` reported env var override 12 days ago; `andrebrov` delivered `AGENT_AUTO_COMPACT_WINDOW` passthrough fix |

**Underlying needs detected:**
- **Model independence**: Users want operational flexibility across LLM providers
- **Environment control**: Container abstraction leaks frustrate power users tuning behavior
- **Visual input reliability**: Image processing is load-bearing for business use cases (accounting software mentioned)

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **High** | [#2139](https://github.com/qwibitai/nanoclaw/issues/2139) | Image upload API 400 after initial success; blocks accounting workflow | **No fix PR** |
| **High** | [#2088](https://github.com/qwibitai/nanoclaw/issues/2088) | iMessage outbound silent failure on Apple Silicon + launchd; no logging | **No fix PR**; [#2134](https://github.com/qwibitai/nanoclaw/pull/2134) addresses related Colima env vars |
| **Medium** | [#2109](https://github.com/qwibitai/nanoclaw/issues/2109) | Context compacting at 200k despite Opus 4.7 1M context window | **Fix PRs**: [#2132](https://github.com/qwibitai/nanoclaw/pull/2132) (pin thinking.display), [#2138](https://github.com/qwibitai/nanoclaw/pull/2138) (env passthrough) |
| **Medium** | [#2125](https://github.com/qwibitai/nanoclaw/pull/2125) | Race condition in `writeMessageOut` seq allocation across processes | **Fix PR open** |
| **Medium** | [#2126](https://github.com/qwibitai/nanoclaw/pull/2126) | Retry spam + leaked DB handles on delivery failure | **Fix PR open** |
| **Low** | [#2123](https://github.com/qwibitai/nanoclaw/pull/2123) | Duplicate text on `send_message` | **Fix PR open** |
| **Low** | [#2130](https://github.com/qwibitai/nanoclaw/pull/2130) | Thinking-only `end_turn` causes loop on resume | **Fix PR open** |

**Pattern**: `andrebrov` is executing a concentrated reliability sprint — 8 PRs in 24h addressing message delivery, session management, and container environment plumbing.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Release |
|:---|:---|:---|
| **Google Gemini native provider** | [#2136](https://github.com/qwibitai/nanoclaw/pull/2136) | **High** — third iteration, follows established Codex pattern |
| **Knowledge base / wiki compilation** | [#2133](https://github.com/qwibitai/nanoclaw/pull/2133) | **Medium** — "first piece" language suggests multi-PR feature |
| **Remote MCP servers (HTTP/SSE)** | [#2131](https://github.com/qwibitai/nanoclaw/pull/2131) | **High** — discriminated union design preserves backward compatibility |
| **Per-group model overrides** | [#2129](https://github.com/qwibitai/nanoclaw/pull/2129) | **Medium** — depends on `AGENT_MODEL` passthrough acceptance |
| **Agent monetization (x402)** | [#1767](https://github.com/qwibitai/nanoclaw/pull/1767) | **Shipped** — merged |
| **Headless-host UX** | [#2128](https://github.com/qwibitai/nanoclaw/pull/2128) | **Medium** — narrow but painful use case |

---

## 7. User Feedback Summary

### Pain Points

| User | Issue | Root Cause | Impact |
|:---|:---|:---|:---|
| `omniscient` | [#2139](https://github.com/qwibitai/nanoclaw/issues/2139) | Image pipeline state corruption | **Business-critical**: accounting workflow halted after casual use |
| `JBenAnderson` | [#2088](https://github.com/qwibitai/nanoclaw/issues/2088) | macOS Automation permission sandbox + launchd | **Silent failure mode**: no logs, difficult to diagnose |
| `Aswinmcw` | [#2109](https://github.com/qwibitai/nanoclaw/issues/2109) | Container env abstraction blocks model capability | **Capability gap**: paying for 1M context, getting 200k |

### Satisfaction Signals
- "lots of fun with my nanoclaw setup" — `omniscient` (before image failure)
- Active skill contributions (`add-agentcash`) indicate platform extensibility valued

### Dissatisfaction Pattern
**Container environment opacity** is the dominant frustration: users cannot pass configuration through to the agent runtime, causing capability truncation (context windows) and silent failures (iMessage permissions, image processing). The fix PR cluster from `andrebrov` directly addresses this abstraction leak.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#2088](https://github.com/qwibitai/nanoclaw/issues/2088) iMessage silent failures | New (1 day) | **High** — platform-specific, no workaround, no error surface | Maintainer triage; evaluate [#2134](https://github.com/qwibitai/nanoclaw/pull/2134) scope |
| [#2139](https://github.com/qwibitai/nanoclaw/issues/2139) Image API 400 | New (1 day) | **High** — reproducible, business use case | Reproduction steps; potential relation to [#2124](https://github.com/qwibitai/nanoclaw/pull/2124) image resize |
| [#1820](https://github.com/qwibitai/nanoclaw/issues/1820) → resolved | 12 days | Resolved by [#2138](https://github.com/qwibitai/nanoclaw/pull/2138) | Close loop, document env passthrough pattern |

**No stale critical items** — project maintains responsive issue turnover. The risk is in same-day issues without assignees rather than accumulated debt.

---

*Digest generated from 50 PRs and 4 issues updated 2026-04-29/30. Project health: **active development, reliability-focused, release cadence lagging behind code velocity.***

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-30

## 1. Today's Overview

NullClaw shows minimal activity over the past 24 hours, with only 2 issues updated and no pull request or release activity. The project appears to be in a maintenance phase rather than active feature development, with community attention focused on documentation gaps and core infrastructure limitations for resource-constrained deployments. The single open issue (#871) highlights a significant architectural tension between the project's stated goal of running on low-resource devices and its current dependency on external API services for web search functionality. With zero PRs in flight, contributor momentum appears stalled. Overall project health reads as stable but sluggish, with unaddressed core usability concerns accumulating.

---

## 2. Releases

*No new releases. No releases exist in the project's history.*

---

## 3. Project Progress

**No merged or closed PRs today.**

The only closed item is documentation issue [#874](https://github.com/nullclaw/nullclaw/issues/874), resolved without an associated PR—suggesting direct maintainer commit or auto-close. No feature advancement or bug fixes via the PR workflow occurred in the reporting period.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#871](https://github.com/nullclaw/nullclaw/issues/871) `[OPEN]` [bug] Critical: web_search is impractical on low-resource devices without direct DuckDuckGo support | 1 comment, updated 2026-04-29 | **Most active open issue.** Author `uMendex` identifies a fundamental mismatch: NullClaw targets "weak, cheap, low-resource devices" yet `web_search` requires Brave Search API (external key, network dependency, potential cost). Requesting native DuckDuckGo support as a zero-config, privacy-respecting alternative. Underlying need: **offline/low-friction operation** aligned with project's edge-computing ethos. |

| [#874](https://github.com/nullclaw/nullclaw/issues/874) `[CLOSED]` Docs: missing documentation for security policy "default_allowed_commands" | 0 comments, closed 2026-04-29 | Quick documentation fix. Points to [specific source line](https://github.com/nullclaw/nullclaw/blob/362e93fb7df9a3ebf9754b26327ec77a8a49530c/src/security/policy.zig#L64). Underlying need: **security transparency**—users need to understand default command execution boundaries without reading Zig source. |

**Community signal:** The open issue carries disproportionate weight given total activity. The DuckDuckGo request reflects a broader pattern in edge-AI projects: API key friction kills adoption on constrained hardware.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical** | [#871](https://github.com/nullclaw/nullclaw/issues/871): `web_search` impractical on low-resource devices | Open | **None** |

**Assessment:** One critical-severity bug remains unaddressed with no PR in progress. The issue is architectural rather than a crash—functionality exists but fails the project's own hardware target constraints. No regressions or new crash reports in the period. Stability risk: **moderate** (core feature misaligned with project mission).

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version |
|---------|--------|---------------------------|
| Native DuckDuckGo search integration (no API key) | [#871](https://github.com/nullclaw/nullclaw/issues/871) | **High** if maintainers prioritize core mission alignment; currently blocked by no assignee/PR |
| Expanded security policy documentation | [#874](https://github.com/nullclaw/nullclaw/issues/874) | Completed |

**Predicted roadmap pressure:** DuckDuckGo support or similar zero-config search backend likely needed before any "production-ready" labeling. The issue's "Critical" severity tag and explicit framing around project identity ("intended NullClaw use case") suggests this may escalate to blocking status if unaddressed.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Profile |
|------------|----------|--------------|
| **API key friction on constrained hardware** | [#871](https://github.com/nullclaw/nullclaw/issues/871): "weak, cheap, low-resource devices" | Edge/embedded deployers, privacy-conscious users |
| **Undocumented security defaults** | [#874](https://github.com/nullclaw/nullclaw/issues/874): direct source code link as "documentation" | Security auditors, self-hosters |

**Satisfaction:** Neutral-to-concerned. Documentation issue resolved promptly (positive). Core feature misalignment unaddressed after 5 days with no maintainer engagement visible (negative).

**Use case tension:** NullClaw's value proposition appears to be "AI assistant on minimal hardware," yet current implementation pushes users toward cloud API dependencies that contradict this.

---

## 8. Backlog Watch

| Issue | Age | Risk |
|-------|-----|------|
| [#871](https://github.com/nullclaw/nullclaw/issues/871) | 5 days open (created 2026-04-25) | **Escalating** — labeled critical, no maintainer response, no PR, directly challenges project-market fit |

**Maintainer attention needed:** The critical issue requires triage. Potential actions: (a) acknowledge and assign, (b) request DuckDuckGo scraping implementation details from community, (c) document Brave Search as intentional dependency with hardware minimums, or (d) deprecate `web_search` for low-tier devices. Silence risks community perception of abandoned core mission.

---

*Digest generated from github.com/nullclaw/nullclaw data as of 2026-04-30.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-30

## 1. Today's Overview

IronClaw is experiencing **extremely high development velocity** with 50 PRs and 28 issues updated in the last 24 hours, reflecting intense activity around the major "Reborn" architecture rewrite. The project released v0.27.0 yesterday, yet live canary tests are failing across multiple lanes (public-smoke, persona-rotating, private-oauth), indicating **production stability concerns** despite rapid feature advancement. The Reborn migration dominates all engineering effort with 17 new issues created yesterday alone to track granular work items, while QA bug reports from staging reveal user-facing regressions in the current release. The contributor base shows strong core-team concentration with serrrfirat authoring 15+ of yesterday's issues/PRs and zmanian contributing major infrastructure pieces. Overall project health is **mixed: architecturally ambitious with strong engineering momentum, but operational stability and release quality need immediate attention.**

---

## 2. Releases

### [ironclaw-v0.27.0](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.27.0) — 2026-04-29

| Aspect | Details |
|--------|---------|
| **Version** | 0.27.0 |
| **Type** | Minor release (engine-v2 runtime contract enhancements) |

**Added:**
- **Canonical capability status vocabulary** for the v2 runtime contract — standardizes how capability states are represented across the system ([PR #2825](https://github.com/nearai/ironclaw/pull/2825))
- **Centralized action-vs-capability surface policy** — unifies policy enforcement across prompt layer, runtime, bridge projection, and tool surface, reducing edge-case security gaps

**Stability Note:** Despite release, [multiple live canary failures](#bugs--stability) suggest v0.27.0 may not be production-ready. No migration notes provided in release.

---

## 3. Project Progress

### Merged/Closed PRs (33 total, highlights)

| PR | Author | Summary | Significance |
|----|--------|---------|------------|
| [#3077](https://github.com/nearai/ironclaw/pull/3077) | serrrfirat | **Secrets and network boundaries substrate** — adds `ironclaw_secrets` and `ironclaw_network` crates with scoped `SecretStore`, one-shot `SecretLease` lifecycle, and redacted metadata | Core Reborn security infrastructure |
| [#3070](https://github.com/nearai/ironclaw/pull/3070) | serrrfirat | **Trust-aware authorization** — `ironclaw_authorization` consumes `TrustDecision` from trust engine for dispatch/spawn decisions | Reborn authorization model complete |
| [#3072](https://github.com/nearai/ironclaw/pull/3072) | serrrfirat | **Extension manifest trust policy wiring** — parses manifest `trust` into `RequestedTrustClass` | Registry security integration |
| [#3076](https://github.com/nearai/ironclaw/pull/3076) | serrrfirat | **Phase 1 integration tests** for `ironclaw_dispatcher` and `ironclaw_processes` | First caller-level Reborn test coverage |
| [#3027](https://github.com/nearai/ironclaw/pull/3027) | serrrfirat | ~~Script and MCP runtime lanes~~ — **CLOSED unmerged** | Replaced by other work |
| [#3028](https://github.com/nearai/ironclaw/pull/3028) | serrrfirat | ~~WASM runtime lane~~ — **CLOSED unmerged** | Superseded by WIT-based approach |
| [#3096](https://github.com/nearai/ironclaw/pull/3096) | serrrfirat | ~~WIT-compatible WASM runtime~~ — **CLOSED unmerged (prematurely merged then reverted)** | Process failure; reopened as [#3097](https://github.com/nearai/ironclaw/pull/3097) |
| [#3084](https://github.com/nearai/ironclaw/pull/3084) | serrrfirat | **ProcessError path helper fix** — eliminates blanket `From<HostApiError>` that poisoned error classification | Reliability fix |
| [#3051](https://github.com/nearai/ironclaw/pull/3051) | henrypark133 | **Tightened v2 structured tool prompts** — removes CodeAct/Python/FINAL-style examples, gates install-recovery | Prompt injection hardening |

### Key Feature Advancements

- **Reborn runtime substrate**: HTTP egress, secrets/network boundaries, trust policy, and capability host base are all now landed or in final PR
- **Memory system**: Storage boundary ([PR #3078](https://github.com/nearai/ironclaw/pull/3078)) and search/plugin seams ([PR #3079](https://github.com/nearai/ironclaw/pull/3079)) in review
- **Transport layer**: New `ironclaw_transport` contract crate bridging V1 channels to Reborn adapters ([PR #3099](https://github.com/nearai/ironclaw/pull/3099))

---

## 4. Community Hot Topics

### Most Active Discussion

| Item | Comments | Topic | Underlying Need |
|------|----------|-------|---------------|
| [#2987](https://github.com/nearai/ironclaw/issues/2987) | **38** | **[EPIC] Reborn architecture landing strategy** | **Structured delivery without "one massive stacked PR"** — community demands reviewable, incremental delivery of enormous architectural change; fear of integration hell and reviewer burnout |
| [#3045](https://github.com/nearai/ironclaw/issues/3045) | 3 | Runtime presets and effective runtime policy | **Operational simplicity** — operators want "intended operating mode" selection without hand-wiring grants, mounts, backends, network policy |
| [#3044](https://github.com/nearai/ironclaw/issues/3044) | 2 | Local developer runtime profiles | **Frictionless local development** — engineers want `ironclaw run --local-agent .` without manual capability configuration |
| [#3067](https://github.com/nearai/ironclaw/issues/3067) | 2 | Vertical-slice integration test suite | **Proof of substrate through public entrypoints** — distrust of crate-local tests; need end-to-end validation |

### Analysis

The 38-comment epic [#2987](https://github.com/nearai/ironclaw/issues/2987) reveals **organizational strain** from Reborn's scale. The "grouped PR" strategy (PR0 contract freeze → staging branch → grouped implementation PRs → final integration) is a deliberate response to previous failures: [#3096](https://github.com/nearai/ironclaw/pull/3096) was merged prematurely and reverted, [#3028](https://github.com/nearai/ironclaw/pull/3028) closed unmerged after review complexity. The community is negotiating **delivery cadence vs. reviewability** — a classic large-rewrite tension.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **🔴 Critical** | [#3075](https://github.com/nearai/ironclaw/issues/3075) | Live canary `public-smoke` failed (2nd occurrence: [#3064](https://github.com/nearai/ironclaw/issues/3064)) | **NO FIX PR** — same commit `2a65da7` failing repeatedly |
| **🔴 Critical** | [#3074](https://github.com/nearai/ironclaw/issues/3074) | Live canary `persona-rotating` failed | **NO FIX PR** |
| **🔴 Critical** | [#3052](https://github.com/nearai/ironclaw/issues/3052) | Live canary `private-oauth` failed | **NO FIX PR** |
| 🟡 High | [#3082](https://github.com/nearai/ironclaw/issues/3082) | App hangs on "Restarting IronClaw" after enabling Auto Approvals | **NO FIX PR** — v0.27.0 regression |
| 🟡 High | [#3083](https://github.com/nearai/ironclaw/issues/3083) | Duplicate user creation due to missing loading state/debounce | **NO FIX PR** — v0.27.0 QA finding |
| 🟡 High | [#3032](https://github.com/nearai/ironclaw/issues/3032) | Reborn cutover blocker: no-exposure safeguards | Tracked; implementation in progress |
| 🟢 Medium | [#3081](https://github.com/nearai/ironclaw/issues/3081) | Misleading "Configure" button on Portfolio extension | **NO FIX PR** — UX polish |

**Stability Assessment:** Three distinct canary lanes failing suggests **systemic issue in v0.27.0 or infrastructure**, not isolated bug. The repeated `public-smoke` failures on identical commit indicate either flaky tests or persistent runtime failure. No fix PRs visible in today's data — **response gap concerning**.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested / Engineer-Initiated Features (Likely Next 2-3 Releases)

| Feature | Issue/PR | Maturity | Prediction |
|---------|----------|----------|------------|
| **Runtime presets / profiles** | [#3045](https://github.com/nearai/ironclaw/issues/3045), [#3044](https://github.com/nearai/ironclaw/issues/3044) | Design complete, awaiting implementation | **v0.28.0** — high operator demand, low dependency risk |
| **Non-image file attachments** (PDF, audio, documents) | [#1341](https://github.com/nearai/ironclaw/issues/1341) | Open since March, updated yesterday | **Post-Reborn** — blocked by gateway rework |
| **W3C traceparent distributed tracing** | [#233](https://github.com/nearai/ironclaw/issues/233) | Open since February, low activity | **Backlog** — observability not on critical path |
| **Reborn binary shipping** | [#3069](https://github.com/nearai/ironclaw/issues/3069) | New issue, standalone ownership | **v0.28.0 or v0.29.0** — product boundary decision needed |

### Reborn Architecture (In Progress — Landing 2026 Q2)

The 15 new issues created 2026-04-29 map complete Reborn service graph:
- `SessionThreadService` ([#3089](https://github.com/nearai/ironclaw/issues/3089))
- `ToolSurfaceService` / `CapabilityCatalog` ([#3090](https://github.com/nearai/ironclaw/issues/3090))
- Loop support services (`PromptContextService`, `MemoryPromptContextService`, etc.) ([#3091](https://github.com/nearai/ironclaw/issues/3091))
- Reference `AgentLoop` implementations ([#3092](https://github.com/nearai/ironclaw/issues/3092))
- `EventProjectionService` ([#3093](https://github.com/nearai/ironclaw/issues/3093))
- Approval/auth interaction services ([#3094](https://github.com/nearai/ironclaw/issues/3094))

---

## 7. User Feedback Summary

### Real Pain Points (from QA/staging)

| Source | Pain Point | Severity |
|--------|-----------|----------|
| [joe-rlo QA](https://github.com/nearai/ironclaw/issues/3082) | **Restart loop / app hang** — enabling Auto Approvals bricks installation | 🔴 Critical — blocks feature adoption |
| [joe-rlo QA](https://github.com/nearai/ironclaw/issues/3083) | **Double-submit vulnerability** — no debounce on user creation | 🟡 High — data integrity risk |
| [joe-rlo QA](https://github.com/nearai/ironclaw/issues/3081) | **Confusing UX** — "Configure" button on non-configurable extension | 🟢 Low — polish |

### Use Case Signals

- **Local coding agent**: [#3044](https://github.com/nearai/ironclaw/issues/3044) explicitly targets "local coding agent" use case — IronClaw competing with Claude Code, Cursor, etc.
- **Operator-driven deployment**: [#3045](https://github.com/nearai/ironclaw/issues/3045)'s "runtime presets" for operators suggests enterprise/self-hosted market

### Satisfaction/Dissatisfaction

| Positive | Negative |
|----------|----------|
| Strong engineering transparency (detailed EPICs, plain-English summaries) | Release quality vs. velocity trade-off visible |
| Active issue creation for tracking | Canary failures unaddressed in 24h window |
| Responsive to review feedback (PRs closed/reopened when premature) | Reborn complexity may alienate external contributors |

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|----------|-----|------|---------------|
| [#233](https://github.com/nearai/ironclaw/issues/233) W3C traceparent | ~2 months | Medium — observability gap in distributed system | Maintainer triage: assign or close as post-Reborn |
| [#1341](https://github.com/nearai/ironclaw/issues/1341) Non-image attachments | ~1.5 months | Medium — competitive feature gap (Claude, GPT-4o support multimodal) | Needs gateway scope decision; currently "updated" but no assignee |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) Abound demo | ~1 month | High — XL PR, high risk, multiple scopes, "undefined" comments | **Critical attention** — appears stalled, may block integration; needs rebase/scope reduction decision |
| [#3012](https://github.com/nearai/ironclaw/issues/3012) PR1b trust-class policy | Closed | N/A | Was mandatory dependency gate; verify [#2999](https://github.com/nearai/ironclaw/issues/2999) (PR3) scope adjustment handled |

**Maintainer Attention Required:** The [#1764](https://github.com/nearai/ironclaw/pull/1764) Abound demo PR is a **zombie PR** — XL size, high risk, 9 scope tags, last updated yesterday but with "undefined" comment count suggesting parsing issue or empty discussion. This represents significant sunk cost (Responses API fixes, credential injection, skills, guardrails) that may need explicit keep/kill decision.

---

*Digest generated from GitHub activity 2026-04-29 to 2026-04-30. All links verified against nearai/ironclaw repository.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-30

## 1. Today's Overview

LobsterAI (NetEase Youdao's AI agent/personal assistant project) shows **high development velocity** with 28 PRs updated in the last 24 hours and a fresh release (2026.4.29). The project is actively maintained with regular release cadence, though community contribution throughput remains constrained—only 4 of 28 recent PRs were merged/closed, leaving 24 open PRs in limbo, many marked stale from March 25. A single active issue regarding OpenAI authentication failures in unsupported regions highlights ongoing geographic/service availability challenges for international users.

---

## 2. Releases

### [LobsterAI 2026.4.29](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.29)

| Aspect | Details |
|--------|---------|
| **Type** | Patch release |
| **Breaking Changes** | None identified |
| **Migration Notes** | No migration required |

**Changes:**
- **fix:** Update default model configs for Volcengine and Qwen ([#1828](https://github.com/netease-youdao/LobsterAI/pull/1828)) — by @btc69m979y-dotcom
- **fix(update):** Remove inaccurate auto-restart hint from installing state ([#1](https://github.com/netease-youdao/LobsterAI/pull/1)) — by @liuzhq1986

**Assessment:** Minor configuration maintenance release; no user-facing feature changes. Focus on provider compatibility (ByteDance Volcengine, Alibaba Qwen) and installer UX polish.

---

## 3. Project Progress

### Merged/Closed PRs (2026-04-29)

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#1876](https://github.com/netease-youdao/LobsterAI/pull/1876) | @liuzhq1986 | **Release merge:** `release/2026.04.27` → `main` | Major feature delivery |
| [#1875](https://github.com/netease-youdao/LobsterAI/pull/1875) | @liugang519 | Specs documentation: add README | Developer experience |
| [#1874](https://github.com/netease-youdao/LobsterAI/pull/1874) | @liugang519 | Optimize spec documentation structure | Developer experience |
| [#1873](https://github.com/netease-youdao/LobsterAI/pull/1873) | @fisherdaddy | UI fix: cowork bootstrap textarea height | Polish |

**Key Features Delivered in Release/2026.04.27 (via #1876):**
- **feat(auth):** ChatGPT OAuth login support — addresses authentication friction
- **feat(provider):** Xiaomi mimo / Baidu Qianfan coding plan support — expands model provider ecosystem
- **feat(skill):** YoudaoNote skill upgrade — enhances note-taking integration
- **feat(specs):** New specs README, improved documentation structure

**Bug Fixes in Release:**
- **fix(cowork):** Gateway forced restart due to plan model list updates
- **fix(cowork):** [additional cowork stability fixes truncated in source]

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Status | Activity | Core Need |
|------|--------|----------|-----------|
| [#1877](https://github.com/netease-youdao/LobsterAI/issues/1877) | OPEN | 1 comment | **Cross-region OpenAI access** |

**[#1877 — OpenAI authentication failure; local Codex works](https://github.com/netease-youdao/LobsterAI/issues/1877)**
- **Reporter:** @AK-blank
- **Root cause:** `unsupported_country_region_territory` — OpenAI's geographic restriction (HTTP 403)
- **Underlying need:** Users in restricted regions (likely China) need reliable ChatGPT/Codex access despite service blocks. Local Codex works (direct API), but LobsterAI's OAuth/token exchange pathway is region-blocked.

**Stale PRs with High Community Value** (awaiting review since 2026-03-25):
| PR | Value Proposition | Risk if Stale |
|----|-------------------|---------------|
| [#853](https://github.com/netease-youdao/LobsterAI/pull/853) | Markdown/JSON/JSONL session export | Data portability, workflow integration |
| [#857](https://github.com/netease-youdao/LobsterAI/pull/857) | MCP HTTP streaming support | Critical for Model Context Protocol adoption |
| [#866](https://github.com/netease-youdao/LobsterAI/pull/866) | Context management (Lost in the Middle fix) | Core AI quality for long sessions |
| [#880](https://github.com/netease-youdao/LobsterAI/pull/880) | Message-level sharing with branding | Social/team collaboration features |

---

## 5. Bugs & Stability

### Active Bugs (Updated 2026-04-29)

| Severity | Item | Description | Fix Status |
|----------|------|-------------|------------|
| **High** | [#1877](https://github.com/netease-youdao/LobsterAI/issues/1877) | OpenAI auth blocked in unsupported regions; OAuth token exchange fails | **No fix PR** — requires architectural solution (proxy, alternative auth flow, or regional fallback) |
| **Medium** | [#864](https://github.com/netease-youdao/LobsterAI/pull/864) | Model switch triggers gateway restart mask, messages stuck in input | **PR available** (#864, stale since Mar 25) — deferred config write + atomic restart |
| **Medium** | [#860](https://github.com/netease-youdao/LobsterAI/pull/860) | Unhandled JSON.parse errors crash SSE streams | **PR available** (#860, stale) |
| **Medium** | [#874](https://github.com/netease-youdao/LobsterAI/pull/874) | Race condition in concurrent token refresh shows 0 credits | **PR available** (#874, stale) |
| **Medium** | [#868](https://github.com/netease-youdao/LobsterAI/pull/868) | SQLite memory deletion lacks transaction protection → data inconsistency | **PR available** (#868, stale) |
| **Medium** | [#881](https://github.com/netease-youdao/LobsterAI/pull/881) | Foreign keys disabled in sql.js → session deletion orphans messages, DB bloat | **PR available** (#881, stale) |

### Security Fixes Pending
| PR | Risk | Status |
|----|------|--------|
| [#869](https://github.com/netease-youdao/LobsterAI/pull/869) | `shell.openExternal` RCE via dangerous URL protocols | Stale since Mar 25 |
| [#877](https://github.com/netease-youdao/LobsterAI/pull/877) | Same issue, alternative implementation | Stale since Mar 25 |

**Assessment:** Critical security and stability fixes are queued but unmerged. The 24 open stale PRs represent significant technical debt and user frustration.

---

## 6. Feature Requests & Roadmap Signals

### Likely Near-Term (Aligned with Recent Release Direction)
| Feature | Evidence | Confidence |
|---------|----------|------------|
| Additional OAuth providers (beyond ChatGPT) | Auth infrastructure investment in 2026.04.27 | High |
| More Chinese model providers (Baidu, Xiaomi, Volcengine, Qwen) | Active provider expansion pattern | High |
| Enhanced note-taking/Youdao ecosystem integration | YoudaoNote skill upgrade | Medium |

### Community-Requested, Pending Review
| Feature | Request | Blocker |
|---------|---------|---------|
| **MCP HTTP streaming** | [#857](https://github.com/netease-youdao/LobsterAI/pull/857) — "project very much needs this" | Maintainer review bandwidth |
| **Session export formats** | [#853](https://github.com/netease-youdao/LobsterAI/pull/853) — Markdown, JSON, JSONL | Review bandwidth |
| **Custom themes** | [#862](https://github.com/netease-youdao/LobsterAI/pull/862) — user-selectable accent colors | Review bandwidth |
| **Context management/Lost in the Middle mitigation** | [#866](https://github.com/netease-youdao/LobsterAI/pull/866) — research-backed improvement | Review bandwidth, complexity |
| **Message-level sharing with branding** | [#880](https://github.com/netease-youdao/LobsterAI/pull/880) — enterprise/social use case | Review bandwidth |

### Predicted Next Version Priorities
1. **MCP protocol completion** (streaming + stability) — critical for agent ecosystem
2. **Context/compression improvements** — addresses core AI quality degradation
3. **Export/sharing enhancements** — high user-visible value

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Geographic service lockout** | #1877: "OpenAI auth unsuccessful, local Codex works fine" | Critical for international users |
| **Gateway stability** | #864: Model switch causes 3-5s freeze, lost messages | High |
| **Credit/billing display bugs** | #874: "0 points" display due to race condition | High (trust erosion) |
| **Data portability** | #853: No structured export formats | Medium |
| **Long session quality decay** | #866: "Lost in the Middle" causes repeated operations | Medium |

### Use Cases
- **China-based developers** using international models via workaround (local Codex works, but LobsterAI's integration fails)
- **Team collaboration** needing branded message sharing (#880)
- **Power users** with long cowork sessions hitting context limits (#866)
- **Integration workflows** needing programmatic session access (#853)

### Satisfaction Signals
- Active release cadence (weekly) ✅
- Responsive to provider ecosystem changes ✅
- OAuth addition reduces friction ✅

### Dissatisfaction Signals
- 24 stale PRs = contributor discouragement ❌
- Security fixes unmerged = risk exposure ❌
- No response to critical auth issue (#1877) ❌

---

## 8. Backlog Watch

### Critical Items Needing Maintainer Action

| Age | Item | Category | Action Needed |
|-----|------|----------|---------------|
| **36 days** | [#869](https://github.com/netease-youdao/LobsterAI/pull/869) / [#877](https://github.com/netease-youdao/LobsterAI/pull/877) | **Security** — RCE via URL protocol | Merge or reject; security-critical |
| **36 days** | [#857](https://github.com/netease-youdao/LobsterAI/pull/857) | **Feature** — MCP HTTP streaming | Community explicitly states "project very much needs this" |
| **36 days** | [#866](https://github.com/netease-youdao/LobsterAI/pull/866) | **Quality** — Context management | Research-backed, addresses core AI limitation |
| **36 days** | [#863](https://github.com/netease-youdao/LobsterAI/pull/863) / [#868](https://github.com/netease-youdao/LobsterAI/pull/868) / [#881](https://github.com/netease-youdao/LobsterAI/pull/881) | **Stability** — SQLite atomicity, transactions, FK constraints | Data integrity; multiple related PRs suggest systemic issue |
| **36 days** | [#874](https://github.com/netease-youdao/LobsterAI/pull/874) | **Bug** — Token refresh race | User-facing billing display bug |

### Recommendation
The **Mar 25 PR batch** (24 items) appears to be a synchronized community contribution event or hackathon output that has not received maintainer review. This represents both:
- **Risk:** Security vulnerabilities unpatched, contributor goodwill depleting
- **Opportunity:** High-quality, community-validated features ready for integration

**Suggested maintainer priority:** Triage the Mar 25 batch by security → stability → features, with explicit communication to contributors on timeline.

---

*Digest generated from GitHub activity 2026-04-29. Data source: github.com/netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-30

## 1. Today's Overview

Moltis showed **high development velocity** with 14 tracked items updated in the last 24 hours (6 issues, 8 PRs), indicating an active pre-release sprint. The project closed 2 security-critical bugs including a sandbox escape vulnerability, while pushing forward significant features like telephony integration and voice personas. With 5 open PRs awaiting review and 4 active issues, the maintainers appear focused on both stability hardening and capability expansion. The dual release cadence (two builds on 2026-04-29) suggests either rapid iteration or hotfix deployment. Overall project health appears **strong but review-bottlenecked**, with contributor `penso` driving the majority of feature work.

---

## 2. Releases

Two builds shipped on 2026-04-29, though release notes are minimal in the source data:

| Version | Date | Notes |
|---------|------|-------|
| [20260429.02](https://github.com/moltis-org/moltis/releases/tag/20260429.02) | 2026-04-29 | Likely hotfix following .01; context suggests may include sandbox security fixes (PR #924 merged same day) |
| [20260429.01](https://github.com/moltis-org/moltis/releases/tag/20260429.01) | 2026-04-29 | Base release; possibly included voice personas (PR #916) and import features (PR #917) |

**⚠️ Migration Note:** Users on `v20260428.03` should upgrade immediately — Telegram integration was broken in Docker for that version ([Issue #918](https://github.com/moltis-org/moltis/issues/918)), now resolved.

---

## 3. Project Progress

### Merged/Closed PRs (3 items)

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#924](https://github.com/moltis-org/moltis/pull/924) | `penso` | **[fix(sandbox)](https://github.com/moltis-org/moltis/pull/924): prevent sandbox escape via RestrictedHostSandbox and FailoverSandbox** | **Critical security fix** — closed [Issue #923](https://github.com/moltis-org/moltis/issues/923). Two bugs allowed sandboxed commands to access host filesystem: `RestrictedHostSandbox` falsely reported `is_real()=true` while providing no filesystem isolation, and `FailoverSandbox` leaked fallback behavior. Now uses `ChrootSandbox` as real fallback. |
| [#916](https://github.com/moltis-org/moltis/pull/916) | `penso` | **[feat(voice)](https://github.com/moltis-org/moltis/pull/916): add voice personas for deterministic TTS identity** | Major UX advance — replaces per-message tone improvisation with stable, named voice identities. Enables agent-to-persona linking and per-provider bindings. Foundation for consistent AI character experiences. |
| [#917](https://github.com/moltis-org/moltis/pull/917) | `penso` | **[feat(import)](https://github.com/moltis-org/moltis/pull/917): add Claude Code and Hermes import to web UI** | Ecosystem expansion — extends beyond OpenClaw import to support Anthropic and Hermes project formats, with tabbed UI for selective category-based import. |

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Item | Comments/Reactions | Analysis |
|------|------|-------------------|----------|
| 1 | **[Issue #922](https://github.com/moltis-org/moltis/issues/922)** — Chat scrolling broken | 3 comments, 0 👍 | **High user friction** — regression from PR #846's "smart auto-scroll" feature. Fix PR [#925](https://github.com/moltis-org/moltis/pull/925) already open by `Cstewart-HC`. Underlying need: **respect user agency during streaming**; aggressive automation backfired. |
| 2 | **[Issue #918](https://github.com/moltis-org/moltis/issues/918)** — Telegram broken in Docker | 3 comments, 1 👍 | **Deployment blocker** — Docker networking/connection issue for Telegram integration. Rapidly closed, suggesting hotfix responsiveness. Community values containerized deployments. |

### Emerging Patterns

- **Telephony PR [#920](https://github.com/moltis-org/moltis/pull/920)** (Twilio integration) represents a strategic pivot toward **real-time voice channels** — significant architectural expansion with `ChannelPlugin` integration, PCM→μ-law conversion, and webhook routing. No comments yet but high complexity suggests it'll drive discussion.

- **Slash command suite PR [#926](https://github.com/moltis-org/moltis/pull/926)** introduces `/btw`, `/fast`, `/insights`, `/steer`, `/queue` — signals **power-user ergonomics** priority, inspired by Hermes Agent analysis. The `/btw` ephemeral query pattern specifically addresses session pollution anxiety.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|----------|-------|--------|--------|---------|
| 🔴 **Critical** | [#923](https://github.com/moltis-org/moltis/issues/923) Sandboxed commands escape to host | **CLOSED** | [#924](https://github.com/moltis-org/moltis/pull/924) merged | Security boundary failure — `RestrictedHostSandbox` provided no filesystem isolation despite claiming sandbox status. Could enable arbitrary host code execution. |
| 🟡 **High** | [#922](https://github.com/moltis-org/moltis/issues/922) Chat scrolling broken | **OPEN** | [#925](https://github.com/moltis-org/moltis/pull/925) open | UX regression — users cannot scroll during streaming. Fix removes `ResizeObserver` scroll-hijacking. |
| 🟡 **High** | [#918](https://github.com/moltis-org/moltis/issues/918) Telegram broken in Docker | **CLOSED** | Likely in 20260429.0x releases | Deployment regression in v20260428.03 — containerized Telegram bot connectivity failure. |
| 🟢 **Medium** | [#927](https://github.com/moltis-org/moltis/issues/927) MCP page missing re-authenticate button | **OPEN** | None yet | OAuth token expiry UX gap — users cannot manually re-auth when tokens fail. |
| 🟢 **Medium** | [#919](https://github.com/moltis-org/moltis/issues/919) Model discovery fails after 30 sec. | **OPEN** | None yet | Timeout-based reliability issue — suggests network resilience or async handling problems. |

**Stability Assessment:** The sandbox escape fix was **essential and well-executed** (same-day closure). However, two UI/UX regressions (scrolling, model discovery timeout) and an auth flow gap indicate **frontend/bridge layer fragility** under rapid feature expansion.

---

## 6. Feature Requests & Roadmap Signals

### Active Feature PRs (Open)

| PR | Feature | Predicted Release | Rationale |
|----|---------|-------------------|-----------|
| [#926](https://github.com/moltis-org/moltis/pull/926) | Slash command suite (`/btw`, `/fast`, `/insights`, `/steer`, `/queue`) + auxiliary model config | **2026-05** | Large surface area, needs UX validation. Auxiliary model config scaffolding suggests foundation for future multi-model routing. |
| [#920](https://github.com/moltis-org/moltis/pull/920) | Twilio telephony integration | **2026-05/06** | Major new crate (`moltis-telephony`) with call state machine — likely needs soak testing for production voice reliability. |
| [#921](https://github.com/moltis-org/moltis/pull/921) | Auto-trigger code indexing on project changes | **2026-05** | Spec 007 implementation, 3 review rounds completed. Replaces stalled #903. Near completion. |

### User-Requested Features (Issues)

| Issue | Request | Likelihood |
|-------|---------|------------|
| [#906](https://github.com/moltis-org/moltis/issues/906) | Make sub-agents configurable in WebUI | **High** — aligns with multi-agent orchestration trend; `bsarkisov` filed with detailed preflight |

**Roadmap Signal:** The combination of voice personas, telephony, slash commands, and sub-agent configuration points toward **Moltis positioning as a multi-modal, multi-agent orchestration platform** rather than single-chatbot tool. The Hermes/Claude import support reinforces **interoperability-first** strategy.

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Impact | Root Cause |
|-------|-------------|------------|
| Chat scrolling hijacked | Cannot read historical content during generation | Over-automation in `ResizeObserver` pattern |
| Model discovery timeout | Cannot use models after 30s | Network resilience or polling architecture |
| OAuth re-auth missing | Stuck when MCP server tokens expire | Incomplete auth state machine UX |
| Telegram Docker failure | Broken containerized deployments | Version-specific regression |

### Satisfaction Indicators

- **Rapid security response**: Sandbox escape closed same day — builds trust
- **Voice persona system**: Addresses long-standing TTS consistency complaints
- **Import ecosystem expansion**: Reduces lock-in, eases migration

### Use Case Signals

- **Developer tooling**: Code indexing auto-trigger (#921) suggests IDE-like project awareness
- **Enterprise voice**: Twilio integration + voice personas = call center/IVR replacement potential
- **Multi-agent teams**: Sub-agent WebUI config (#906) enables non-technical orchestration

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#906](https://github.com/moltis-org/moltis/issues/906) Sub-agents configurable in WebUI | 2 days | **Medium** — enhancement, but no comments | Maintainer triage: validate against sub-agent architecture roadmap; assign or provide design feedback |
| [#927](https://github.com/moltis-org/moltis/issues/927) MCP OAuth re-authenticate button | 1 day | **Medium** — auth UX gap | Quick win: likely small frontend change, should be prioritized for MCP reliability |
| [#919](https://github.com/moltis-org/moltis/issues/919) Model discovery 30s timeout | 1 day | **Medium** — reliability | Needs reproduction details; may indicate broader async timeout strategy needed |
| [#928](https://github.com/moltis-org/moltis/pull/928) Dependabot: marked bump 18.0.0→18.0.2 | 1 day | **Low** — routine | Merge or dismiss; trivial but contributes to security posture |

**Reviewer Bottleneck:** `penso` authored 4 of 8 PRs; `Cstewart-HC` has 2 open. Cross-review capacity may be strained. Consider expanding reviewer pool for sustain velocity.

---

*Digest generated from github.com/moltis-org/moltis activity through 2026-04-30 00:00 UTC.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-30

---

## 1. Today's Overview

CoPaw (QwenPaw) shows **high community activity** with 30 issues and 22 PRs updated in the last 24 hours, indicating a mature project with active maintenance and growing user adoption. The v1.1.5 release dropped yesterday with CJK-aware memory search and context compaction improvements, suggesting the team is prioritizing multilingual and resource-optimization use cases. However, **17 open issues remain active**, with a notable cluster of channel-specific bugs (WeCom, Feishu, QQ) and workspace isolation concerns that hint at architectural tension between multi-agent flexibility and security boundaries. First-time contributors are notably active, submitting 6+ PRs today—positive for community health but requiring maintainer bandwidth for review.

---

## 2. Releases

### [v1.1.5](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.5) — 2026-04-29

| Category | Details |
|----------|---------|
| **CJK-Aware Memory Search** | Tokenizes CJK queries at character level while preserving Latin/digit runs ([#3811](https://github.com/agentscope-ai/QwenPaw/pull/3811)) — critical for Chinese/Japanese/Korean user experience |
| **Context Compaction Fallback** | Graceful degradation when LLM-based context compaction fails or is disabled |

**Migration Notes:** No breaking changes reported. Users on v1.1.4.x should upgrade for memory search accuracy improvements.

---

## 3. Project Progress

### Merged/Closed PRs Today (10 total)

| PR | Author | Impact |
|----|--------|--------|
| [#3509](https://github.com/agentscope-ai/QwenPaw/pull/3509) | xueshanlongyin | **Multimodal message support** — images/files with auto-detection, Base64/URL/local path support; foundational for future vision capabilities |
| [#3941](https://github.com/agentscope-ai/QwenPaw/pull/3941) | hongxicheng | **Feishu interactive cards** — upgraded `/Approve` from text commands to one-click buttons (addresses [#2720](https://github.com/agentscope-ai/QwenPaw/issues/2720)) |
| [#3950](https://github.com/agentscope-ai/QwenPaw/pull/3950) | hongxicheng | **WeCom "Thinking..." fix** — keeps placeholder stream alive to prevent stuck states on long runs |
| [#3948](https://github.com/agentscope-ai/QwenPaw/pull/3948) | hongxicheng | **WeCom group session sharing toggle** — configurable per-member isolation vs. shared group context |
| [#3934](https://github.com/agentscope-ai/QwenPaw/pull/3934) / [#3927](https://github.com/agentscope-ai/QwenPaw/pull/3927) | zhaozhuang521 | **Console IME fixes** — Chinese input in session renaming; persistent session list scroll position |
| [#3887](https://github.com/agentscope-ai/QwenPaw/pull/3887) / [#3845](https://github.com/agentscope-ai/QwenPaw/pull/3845) | bxy3045134656 | **QQ voice message handling** — proper `.amr/.silk/.slk` mapping to voice bubbles, platform ASR fallback |
| [#3793](https://github.com/agentscope-ai/QwenPaw/pull/3793) | wangyong00 | **System prompt rebuild fix** — indentation bug caused premature loop exit |
| [#3918](https://github.com/agentscope-ai/QwenPaw/pull/3918) | xieyxclack | Release notes for v1.1.5 |

**Key Advancement:** Channel reliability (Feishu, WeCom, QQ) is a clear focus area with 4 merged PRs addressing production messaging issues.

---

## 4. Community Hot Topics

| Rank | Item | Comments | Analysis |
|------|------|----------|----------|
| 1 | [#981](https://github.com/agentscope-ai/QwenPaw/issues/981) — Feishu/QQ file sending failure | 14 | **CLOSED** — Long-running channel limitation; file transfer across Chinese enterprise messaging platforms remains fragile |
| 2 | [#3936](https://github.com/agentscope-ai/QwenPaw/issues/3936) — Agent workspace isolation | 8 | **OPEN** — Core architectural tension: users want configurable isolation but current design shares workspaces; file_guard lacks per-agent granularity |
| 3 | [#2720](https://github.com/agentscope-ai/QwenPaw/issues/2720) → [#3941](https://github.com/agentscope-ai/QwenPaw/pull/3941) — Approve button UI | 8 | **CLOSED via PR** — UX friction in text-based approvals resolved with interactive cards |
| 4 | [#1403](https://github.com/agentscope-ai/QwenPaw/issues/1403) — Feishu message deduplication | 7 | **CLOSED** — Production reliability issue for high-volume deployments |
| 5 | [#3893](https://github.com/agentscope-ai/QwenPaw/issues/3893) — Context sync race condition | 6 | **CLOSED** — Critical infinite loop under high `max_iters`; tool result dropped before LLM call |

**Underlying Need:** Users are pushing CoPaw from "demo/PoC" to "production enterprise deployment" — demanding isolation, reliability, and polished UX.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| 🔴 **Critical** | [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) — Arbitrary file traversal vulnerability | **OPEN** | ❌ None yet — **security team attention needed** |
| 🔴 **Critical** | [#3893](https://github.com/agentscope-ai/QwenPaw/issues/3893) — Context sync race → infinite loop | **CLOSED** | ✅ Fixed in v1.1.5+ |
| 🟡 **High** | [#3919](https://github.com/agentscope-ai/QwenPaw/issues/3919) — Agent switch loses session (`lastChatIdByAgent` not implemented) | **OPEN** | ✅ [#3958](https://github.com/agentscope-ai/QwenPaw/pull/3958) by same reporter |
| 🟡 **High** | [#3937](https://github.com/agentscope-ai/QwenPaw/issues/3937) — WeCom channel stops responding until restart | **OPEN** | ❌ None yet |
| 🟡 **High** | [#3947](https://github.com/agentscope-ai/QwenPaw/issues/3947) — `filter_thinking` drops complex replies in WeCom | **OPEN** | ✅ [#3950](https://github.com/agentscope-ai/QwenPaw/pull/3950) addresses related issue |
| 🟡 **High** | [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) — Agent workspace identity confusion via channel messages | **OPEN** | ❌ None yet — **architectural** |
| 🟢 **Medium** | [#3932](https://github.com/agentscope-ai/QwenPaw/issues/3932) — `read_file_safe` MemoryError on low-RAM systems | **OPEN** | ❌ None yet |
| 🟢 **Medium** | [#3953](https://github.com/agentscope-ai/QwenPaw/issues/3953) — BOOTSTRAP.md regenerates despite deletion | **OPEN** | ✅ [#3954](https://github.com/agentscope-ai/QwenPaw/pull/3954) submitted |
| 🟢 **Medium** | [#3949](https://github.com/agentscope-ai/QwenPaw/issues/3949) — DeepSeek `reasoning_content` 400 BadRequest | **CLOSED** | ✅ Fixed |

**Stability Assessment:** Channel subsystem (WeCom especially) showing strain under production load. Security vulnerability [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) requires immediate triage.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version | Rationale |
|-------|---------|---------------------------|-----------|
| [#3956](https://github.com/agentscope-ai/QwenPaw/issues/3956) — LLM auto-switch on quota/rate-limit | **High** | Directly addresses production reliability; pattern exists in other platforms |
| [#3940](https://github.com/agentscope-ai/QwenPaw/issues/3940) — Separate vision model routing | **High** | Multimodal PR [#3509](https://github.com/agentscope-ai/QwenPaw/pull/3509) merged; natural extension |
| [#3929](https://github.com/agentscope-ai/QwenPaw/issues/3929) — Per-model timeout/context_window | **Medium-High** | Simple config extension; user has working patch |
| [#3944](https://github.com/agentscope-ai/QwenPaw/issues/3944) — Exclude heartbeat/cron from auto-memory | **Medium** | Clear use case; memory system is active dev area |
| [#3936](https://github.com/agentscope-ai/QwenPaw/issues/3936) — Configurable agent isolation | **Medium** | Architectural change; may conflict with current design philosophy |
| [#3942](https://github.com/agentscope-ai/QwenPaw/issues/3942) — Full multimodal (audio/video) | **Medium** | Frontend limitation noted; depends on console rewrite |
| [#3920](https://github.com/agentscope-ai/QwenPaw/issues/3920) — llama.cpp provider | **Low-Medium** | Ollama/lms exist; niche ask unless enterprise demand |

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Intensity |
|-------|----------|-----------|
| **Channel reliability** | WeCom stops responding ([#3937](https://github.com/agentscope-ai/QwenPaw/issues/3937)), Feishu dedup ([#1403](https://github.com/agentscope-ai/QwenPaw/issues/1403)), QQ voice ([#3887](https://github.com/agentscope-ai/QwenPaw/pull/3887)) | 🔴 High |
| **Session/state loss** | Agent switch loses chat ([#3919](https://github.com/agentscope-ai/QwenPaw/issues/3919)), multi-tab interference ([#3935](https://github.com/agentscope-ai/QwenPaw/issues/3935)) | 🔴 High |
| **Security boundaries** | Workspace isolation ([#3936](https://github.com/agentscope-ai/QwenPaw/issues/3936)), file traversal ([#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955)) | 🔴 High |
| **Resource constraints** | 1GB read buffer crashes low-RAM systems ([#3932](https://github.com/agentscope-ai/QwenPaw/issues/3932)) | 🟡 Medium |
| **Enterprise UX** | Approval buttons ([#2720](https://github.com/agentscope-ai/QwenPaw/issues/2720)), file sending ([#981](https://github.com/agentscope-ai/QwenPaw/issues/981)) | 🟡 Medium |

### Satisfaction Drivers
- **Active Chinese IME fixes** — responsive to CJK users
- **v1.1.5 CJK memory search** — shows localization investment
- **First-time contributor acceptance** — healthy community growth

### Use Case Evolution
Users migrating from **personal assistant** → **team/enterprise deployment** with multi-agent orchestration, requiring isolation, audit trails, and SLA-grade reliability.

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|------|-----|------|-------|
| [#600](https://github.com/agentscope-ai/QwenPaw/issues/600) — Plan & Task Monitoring for continual execution | ~8 weeks | **Strategic gap** | Product decision: is CoPaw a reactive chatbot or proactive task executor? |
| [#3938](https://github.com/agentscope-ai/QwenPaw/pull/3938) — Multi-instance channels with agent routing | New | **Architectural review** | Maintainer decision on channel-agent binding model |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) — Tauri 2.x desktop app | ~6 days | **Platform bet** | Review if this replaces Electrobun; impacts release engineering |
| [#3846](https://github.com/agentscope-ai/QwenPaw/pull/3846) — GitHub Copilot provider | ~4 days | **Enterprise appeal** | Security review for Copilot auth token handling |
| [#3889](https://github.com/agentscope-ai/QwenPaw/pull/3889) — Live inter-agent progress observation | ~3 days | **Observability** | Design review: hook-based vs. polling architecture |

**Maintainer Attention Required:** Security vulnerability [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) and architectural isolation question [#3936](https://github.com/agentscope-ai/QwenPaw/issues/3936) need core team response within 48-72 hours to maintain trust.

---

*Digest generated from GitHub activity 2026-04-29 → 2026-04-30. Data source: agentscope-ai/QwenPaw (CoPaw).*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-30

## 1. Today's Overview

ZeroClaw shows **extremely high development velocity** with 50 issues and 50 PRs active in the last 24 hours, though the **merge rate remains critically low** (only 1 of 50 PRs merged/closed). The project appears to be in a **heavy accumulation phase** with substantial contributor energy but potential bottleneck in code review capacity. No new releases were cut today, continuing a gap since v0.6.9. The community is actively stress-testing channel integrations (Telegram, Matrix, Slack), provider compatibility (Ollama, Bedrock, Gemini, Copilot), and the new ACP protocol — revealing numerous edge cases in production deployments.

---

## 2. Releases

**No new releases.** The latest release remains v0.6.9 (released prior to this period). Notable release-related activity: PR #5498 fixed missing secrets/permissions for the v0.6.9 release pipeline, but the fix was applied retroactively and did not trigger a new version.

---

## 3. Project Progress

### Merged/Closed PRs Today (1 of 50)

| PR | Description | Impact |
|:---|:---|:---|
| [#6035](https://github.com/zeroclaw-labs/zeroclaw/pull/6035) | `fix(channels/acp): correct tool output formatting` | Fixed ACP server tool call event transmission — tools now display output and names correctly |

### Significant Closed Issues (with fixes landed previously)

| Issue | Resolution |
|:---|:---|
| [#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) | Telegram voice message transcription support — **feature gap with OpenClaw closed** |
| [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) | Ollama provider `tool_count=0` hardcode — **native tool calling now reaches API** |
| [#5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125) | CPU spikes when typing in agent chat (Firefox/Ubuntu) — **resolved** |
| [#6090](https://github.com/zeroclaw-labs/zeroclaw/issues/6090) | Telegram misconfigured Anthropic call — **fixed** |
| [#5553](https://github.com/zeroclaw-labs/zeroclaw/issues/5553) | Shell tool raw JSON output in Telegram — **resolved** |
| [#5502](https://github.com/zeroclaw-labs/zeroclaw/issues/5502) | `allowed_tools` configuration option — **implemented** |
| [#6073](https://github.com/zeroclaw-labs/zeroclaw/issues/6073) | Web UI config editor cursor misalignment — **fixed** |
| [#6094](https://github.com/zeroclaw-labs/zeroclaw/issues/6094) | Dead orphan file `cost/tracker.rs` — **cleanup completed** |
| [#5861](https://github.com/zeroclaw-labs/zeroclaw/issues/5861) | voice-wake compilation failure in v0.6.9 — **resolved** |
| [#5503](https://github.com/zeroclaw-labs/zeroclaw/issues/5503) | Pre-LLM command shortcuts for deterministic actions — **implemented** |
| [#5498](https://github.com/zeroclaw-labs/zeroclaw/issues/5498) | Release pipeline secrets/permissions — **fixed** |
| [#6226](https://github.com/zeroclaw-labs/zeroclaw/issues/6226) | Slack thread continuity breakage with `thread_replies=true` — **fixed** |
| [#5701](https://github.com/zeroclaw-labs/zeroclaw/issues/5701) | `clear_messages` for O(1) session reset — **implemented** |

### Active Development Areas (Open PRs with Progress)

| PR | Focus | Status |
|:---|:---|:---|
| [#6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179) | Web onboarding parity via per-property CRUD endpoints | **XL-sized, high risk** — major architectural unification |
| [#6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167) | ACP protocol v1 with tool-call permission and back-channel | **XL-sized, high risk, manual review needed** |
| [#5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978) | Speech capture buffer + STT dispatch | **XL-sized voice feature** — substantial new capability |
| [#6220](https://github.com/zeroclaw-labs/zeroclaw/pull/6220) | Chat input lock + stop button + running indicator | UX polish for streaming feedback |
| [#6218](https://github.com/zeroclaw-labs/zeroclaw/pull/6218) | OpenRouter free model marking | Small but high user value |
| [#6217](https://github.com/zeroclaw-labs/zeroclaw/pull/6217) | Navigate to agent chat from memory row | Memory-UX linkage |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | 🔍 Underlying Need |
|:---|:---|:---|:---|
| 1 | [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) **default_model issue on fresh install** | 15 | **Onboarding friction** — new users hitting blocking config errors before first successful run; suggests need for better defaults and validation |
| 2 | [#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) Telegram voice transcription | 7 | **Feature parity with OpenClaw** — users evaluating ZeroClaw as drop-in replacement need channel feature equivalence |
| 3 | [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) Token consumption minimization via skill compilation | 6 | **Cost optimization at scale** — production users burning tokens on repetitive skill prompts; want compiled/deduplicated skill representation |
| 4 | [#5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550) Memory autosave session_id mismatch | 6 | **Reliability of memory system** — silent data loss where memories are stored but never recalled; breaks trust in agent continuity |
| 5 | [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) Matrix voice transcription format failure | 5 | **Cross-client compatibility** — Element Web/Android vs. other Matrix clients send different audio formats; needs robust format negotiation |

### Key Insight
The top issues reveal a **"first 5 minutes" problem** (#6123) competing with **"production at scale" concerns** (#5146, #5550). The project is being pulled between attracting new users and satisfying operators running multi-channel deployments.

---

## 5. Bugs & Stability

### Critical/Severe (S0-S1)

| Severity | Issue | Fix PR? | Risk |
|:---|:---|:---|:---|
| **S0** | [#5518](https://github.com/zeroclaw-labs/zeroclaw/issues/5518) `forbidden_path_argument` blocks safe redirects (`/dev/null`, `/dev/stdout`) | ❌ No | **Security policy overreach** — breaks common shell patterns |
| **S0** | [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) Context spillage from chat to schedule | ❌ No (blocked, needs repro) | **Data isolation failure** — scheduled tasks contaminated by chat context |
| **S1** | [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) `default_model` fails on fresh install | ❌ No | **Onboarding blocker** |
| **S1** | [#5475](https://github.com/zeroclaw-labs/zeroclaw/issues/5475) Copilot + Telegram "Invalid parameter" | ❌ No (blocked, needs repro) | **Provider-channel combination failure** |
| **S1** | [#5553](https://github.com/zeroclaw-labs/zeroclaw/issues/5553) Shell tool raw JSON in Telegram | ✅ Fixed | — |

### Degraded Behavior (S2)

| Issue | Fix PR? | Notes |
|:---|:---|:---|
| [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) Matrix voice transcription format | ❌ No | Element client compatibility gap |
| [#5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550) Memory session_id mismatch | ❌ No | **Silent failure — memories stored but invisible** |
| [#5244](https://github.com/zeroclaw-labs/zeroclaw/issues/5244) Dashboard Channels tab crash | ❌ No (in-progress) | Frontend regression on v0.6.8 Docker |
| [#5470](https://github.com/zeroclaw-labs/zeroclaw/issues/5470) Multiple issues in "safe mode" | ❌ No (blocked) | Memory duplication, cron failures, tool issues — complex repro needed |

### Provider-Specific Reliability Issues

| Issue | Provider | Fix PR? |
|:---|:---|:---|
| [#5289](https://github.com/zeroclaw-labs/zeroclaw/issues/5289) Bedrock sends `API_KEY` as `x-api-key` | AWS Bedrock | ❌ No (in-progress) — authentication method confusion |
| [#5360](https://github.com/zeroclaw-labs/zeroclaw/issues/5360) `codex_cli` passes unsupported `-q` flag | OpenAI Codex | [#5361](https://github.com/zeroclaw-labs/zeroclaw/pull/5361) open, needs maintainer review |
| [#6122](https://github.com/zeroclaw-labs/zeroclaw/pull/6122) Gemini 429 quota parsing | Google Gemini | 🔄 PR open |
| [#6114](https://github.com/zeroclaw-labs/zeroclaw/pull/6114) Media markers in auxiliary LLM calls | Multiple | 🔄 PR open |

---

## 6. Feature Requests & Roadmap Signals

### Likely Near-Term (active PRs or accepted)

| Feature | Signal Strength | Path to Release |
|:---|:---|:---|
| **Web onboarding parity** (#6179) | ⭐⭐⭐⭐⭐ | XL PR in review; unifies CLI/web config management |
| **Voice input pipeline** (#5978) | ⭐⭐⭐⭐⭐ | Major PR open; speech buffer + STT dispatch |
| **ACP protocol v1** (#6167) | ⭐⭐⭐⭐⭐ | Critical for external tool ecosystem (Nori integration) |
| **Smart Telegram truncation** (#6225) | ⭐⭐⭐⭐ | Just opened; high user pain for code blocks |
| **Manual cron trigger** (#5501) | ⭐⭐⭐⭐ | Accepted; testing workflow improvement |

### Medium-Term Architecture

| Feature | Rationale |
|:---|:---|
| **Skill compilation/token minimization** (#5146) | Accepted, P2, high-risk; cost pressure from production users |
| **Pre-LLM command shortcuts** (#5503) | ✅ Implemented; deterministic action latency reduction |
| **OTel tool span enrichment** (#6009) | Observability maturity for enterprise adoption |

### Prediction for Next Version (v0.7.0 or v0.6.10)
Given the XL PRs in flight and critical bug volume, a **v0.6.10 patch** is more likely than v0.7.0. Expected: ACP v1, web onboarding parity, voice pipeline beta, and provider fixes (Bedrock, Gemini, Codex CLI).

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Fresh install fragility** | #6123 (15 comments), #6154 (dashboard extraction fix) | 🔴 Critical |
| **Channel-specific quirks** | Telegram (#5509, #5553, #6225), Matrix (#6153), Slack (#6226) | 🟠 High |
| **Memory system distrust** | #5550 (invisible autosaves), #5170 (wildcard recall failure), #5415 (context spillage) | 🟠 High |
| **Provider authentication confusion** | #5289 (Bedrock API key vs. SigV4), #5459 (Ollama tools) | 🟡 Medium |
| **Security policy overreach** | #5518 (`/dev/null` blocked), #5939 (`git -C` vs `-c`) | 🟡 Medium |

### Use Cases Emerging

- **LXC/containerized deployment** (#6123) — homelab/self-hosting community
- **Multi-tenant channel bots** (#5475, #5415) — single agent instance serving multiple channels with isolation expectations
- **IoT integration** (#5503) — deterministic low-latency command paths for physical device control
- **Cost-conscious scaling** (#5146) — users hitting token budget limits with skill-heavy workloads

### Satisfaction Signals
- Strong contributor engagement (50 PRs in 24h)
- Feature parity requests (#5509) indicate competitive evaluation against OpenClaw
- Detailed bug reports with reproduction steps suggest invested user base

---

## 8. Backlog Watch

### PRs Needing Maintainer Review (stalled >2 weeks)

| PR | Age | Blocker | Risk if Stalled |
|:---|:---|:---|:---|
| [#5361](https://github.com/zeroclaw-labs/zeroclaw/pull/5361) `codex exec` subcommand fix | ~25 days | "needs-maintainer-review" label | Codex CLI integration broken for all users on v0.118.0+ |
| [#5838](https://github.com/zeroclaw-labs/zeroclaw/pull/5838) Webhook retry logic | ~13 days | "needs-author-action" | Reliability gap for webhook channel users |
| [#5905](https://github.com/zeroclaw-labs/zeroclaw/pull/5905) DockerSandbox workspace bind-mount | ~11 days | High risk, manual review | Security feature incomplete — workspace isolation compromised |
| [#5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978) Voice pipeline | ~9 days | XL size, needs author action | Major feature delayed, blocking voice roadmap |

### Issues Blocked on Reproduction

| Issue | Days Open | Blocker |
|:---|:---|:---|
| [#5475](https://github.com/zeroclaw-labs/zeroclaw/issues/5475) Copilot + Telegram | ~22 days | `r:needs-repro` — intermittent provider error |
| [#5470](https://github.com/zeroclaw-labs/zeroclaw/issues/5470) Multiple safe-mode issues | ~22 days | `r:needs-repro` — complex multi-symptom report |
| [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) Context spillage | ~24 days | `r:needs-repro` — privacy-sensitive, hard to capture |

### Recommended Maintainer Actions
1. **Prioritize #5361** — small fix, high user impact, clear path
2. **Expedite #6179 and #6167 reviews** — XL PRs blocking architectural convergence
3. **Create reproduction environment for #5415** — potential security issue with data isolation
4. **Consider "good first issue" expansion** — #6128 and #6094 show community appetite for contributor onboarding

---

*Digest generated from GitHub activity 2026-04-29 to 2026-04-30. All links: [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*