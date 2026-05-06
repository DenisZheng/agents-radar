# OpenClaw Ecosystem Digest 2026-04-28

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-28 00:19 UTC

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

# OpenClaw Project Digest — 2026-04-28

---

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a large, active community and rapid development cycle. The project released **v2026.4.25** yesterday with major TTS infrastructure upgrades, but this release appears to have introduced or resurfaced significant stability issues—notably a ~3-minute gateway sidecar startup delay regression. The community is actively reporting breakages from recent updates (particularly 2026.4.24→4.25), while maintainers are merging fixes at pace across channels, memory systems, and provider integrations. Overall project health is **mixed**: strong feature velocity and contributor engagement, but recurring regression patterns suggest release stabilization needs attention.

---

## 2. Releases

### [v2026.4.25](https://github.com/openclaw/openclaw/releases/tag/v2026.4.25) — OpenClaw 2026.4.25

| Aspect | Details |
|--------|---------|
| **Release Date** | 2026-04-25 |
| **Type** | Feature + Infrastructure |

#### Highlights
- **Full TTS (Text-to-Speech) system overhaul**:
  - New `/tts latest` command for latest TTS model selection
  - Chat-scoped auto-TTS controls
  - Per-persona TTS configuration
  - Per-agent and per-account provider overrides
  - **7 new provider integrations**: Azure Speech, Xiaomi, Local CLI, Inworld, Volcengine, ElevenLabs v3

#### Contributors
- @leonchui, @zoujiejun, @solar2ain

#### ⚠️ Known Issues Post-Release
- Regression: Channel sidecar startup blocking (~3 min delay) — [Issue #72846](https://github.com/openclaw/openclaw/issues/72846) (recurrence of fixed bug #63450)
- Multiple reports of update failures from 4.23→4.24/4.25 on Intel Macs and Linux VPS deployments

---

## 3. Project Progress

### Merged/Closed PRs (2026-04-27 to 2026-04-28)

| PR | Author | Summary | Status |
|----|--------|---------|--------|
| [#73038](https://github.com/openclaw/openclaw/pull/73038) | @steipete | **DeepInfra provider plugin** — OpenAI-compatible chat/model routing, dynamic discovery, static catalog fallback | ✅ **Merged** |
| [#73093](https://github.com/openclaw/openclaw/pull/73093) | @sanctrl | Surface npm errors on plugin install failures (was opaque "npm install failed:") | ✅ **Merged** |
| [#73084](https://github.com/openclaw/openclaw/pull/73084) | @RasulCheerchiev | Slack ACP bindings honor configuration | ✅ **Merged** (superseded by #73101) |
| [#73063](https://github.com/openclaw/openclaw/pull/73063) | @pashpashpash | Isolate Codex subscription runs from inheriting Gateway `OPENAI_API_KEY` | ✅ **Merged** |
| [#72287](https://github.com/openclaw/openclaw/pull/72287) | @100yenadmin | **Generic plugin host-hook contracts** — major SDK architecture for workflow plugins without core patches | ✅ **Merged** |
| [#43961](https://github.com/openclaw/openclaw/pull/43961) | @happydog-intj | SIGKILL stale gateway process when graceful shutdown times out | ✅ **Merged** |
| [#72076](https://github.com/openclaw/openclaw/pull/72076) | @f-trycua | **Computer plugin** — macOS desktop automation via cua-driver | ✅ **Merged** |
| [#57733](https://github.com/openclaw/openclaw/pull/57733) | @itilys | Non-batch memory embedding concurrency control for slower providers (Ollama) | ✅ **Merged** |

### Active/Open PRs Advancing

| PR | Author | Focus |
|----|--------|-------|
| [#72442](https://github.com/openclaw/openclaw/pull/72442) | @pashpashpash | Codex same-session reply path normalization (XL) |
| [#72548](https://github.com/openclaw/openclaw/pull/72548) | @akoscz | **Pluggable SecretRef sources** via plugin SDK — GCP, AWS, Vault, 1Password, etc. (XL) |
| [#73032](https://github.com/openclaw/openclaw/pull/73032) | @matthewtran172 | xAI Realtime Voice Agent provider for `/voiceclaw/realtime` |
| [#72411](https://github.com/openclaw/openclaw/pull/72411) | @vincentkoc | Feishu WebSocket reconnect/heartbeat repair |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Rank | Issue | Comments | 👍 | Topic | Status |
|------|-------|----------|-----|-------|--------|
| 1 | [#68735](https://github.com/openclaw/openclaw/issues/68735) — LLM request failed: provider rejected schema/tool payload (GitHub Copilot/gpt-5-mini) | 25 | 6 | **Provider API regression** | ✅ Closed |
| 2 | [#29809](https://github.com/openclaw/openclaw/issues/29809) — CORS/origin not allowed via FRP reverse proxy | 15 | 6 | **Deployment/networking** | ✅ Closed |
| 3 | [#29387](https://github.com/openclaw/openclaw/issues/29387) — `agentDir` bootstrap files silently ignored | 13 | 4 | **Agent configuration** | 🔴 Open (stale-adjacent) |
| 4 | [#67035](https://github.com/openclaw/openclaw/issues/67035) — Windows chat UI regression: input swallowed, replies invisible | 13 | 0 | **Windows UI critical** | 🔴 Open |
| 5 | [#72846](https://github.com/openclaw/openclaw/issues/72846) — Sidecar startup blocks ~3min (regression recurrence) | 10 | 3 | **Gateway performance** | 🔴 Open |

### Underlying Needs Analysis

- **Provider ecosystem fragility**: Multiple issues around model provider schema changes (Groq reasoning_effort [#32638](https://github.com/openclaw/openclaw/issues/32638), GitHub Copilot [#68735](https://github.com/openclaw/openclaw/issues/68735), Gemini reasoning leaks [#41494](https://github.com/openclaw/openclaw/issues/41494)) suggest need for more robust provider abstraction testing
- **Windows as second-class citizen**: [#67035](https://github.com/openclaw/openclaw/issues/67035), [#70857](https://github.com/openclaw/openclaw/issues/70857) (session lock 191s), [#72208](https://github.com/openclaw/openclaw/issues/72208) show persistent Windows-specific regressions
- **Self-hosting complexity**: FRP/CORS issues, trusted-proxy auth, SecretRef management indicate deployment friction for non-cloud users

---

## 5. Bugs & Stability

### Critical/Severe (Fix Needed Urgently)

| Issue | Severity | Details | Fix PR? |
|-------|----------|---------|---------|
| [#72846](https://github.com/openclaw/openclaw/issues/72846) — Sidecar startup 3min block | **🔴 Critical** | Recurrence of fixed #63450; gateway effectively unusable on restart | None yet |
| [#72699](https://github.com/openclaw/openclaw/issues/72699) — Gateway crash-loop, 85%+ CPU, D state | **🔴 Critical** | Unhandled rejection on 2026.4.24; unrecoverable | None yet |
| [#71986](https://github.com/openclaw/openclaw/issues/71986) — 2026.4.24 "huge mess": update wrong folder, doctor fails, gateway crashing | **🔴 Critical** | VPS deployment catastrophic failure | None yet |
| [#71761](https://github.com/openclaw/openclaw/issues/71761) — All channel messages injected 2× (double token cost) | **🔴 Critical** | 2026.4.24 regression; financial impact | ✅ Fixed in subsequent release |
| [#67035](https://github.com/openclaw/openclaw/issues/67035) — Windows UI input/rendering broken | **🟠 High** | Core functionality unusable on Windows | None yet |

### High (Significant Impact)

| Issue | Details | Fix PR? |
|-------|---------|---------|
| [#72848](https://github.com/openclaw/openclaw/issues/72848) — Intel Mac update failure 4.23→4.24/4.25 | Gateway timeout on update | None yet |
| [#70857](https://github.com/openclaw/openclaw/issues/70857) — Windows session lock held 191s | Startup/reply latency regression | None yet |
| [#61701](https://github.com/openclaw/openclaw/issues/61701) — Gateway 100% CPU after 2026.4.5 upgrade | Persistent CPU saturation | None yet |
| [#68944](https://github.com/openclaw/openclaw/issues/68944) — CLI hangs at WebSocket handshake | Core CLI functionality broken | None yet |

### Regression Pattern Alert
**2026.4.24 and 2026.4.25 releases show cluster of severe regressions**: duplicate message injection, crash loops, update system failures, sidecar blocking. Recommend **stabilization sprint** before next feature release.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features (High Engagement)

| Issue | 👍 | Request | Likelihood in Next Version |
|-------|-----|---------|---------------------------|
| [#6842](https://github.com/openclaw/openclaw/issues/6842) — A2A (Agent-to-Agent) Protocol Support | **9** | Interoperability with external agent systems | **High** — RFC #28106 closed, PR #72287 (host-hooks) enables plugin architecture |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) — `tools.web.fetch.allowPrivateNetwork` | 4 | Private network access for enterprise | Medium — security-sensitive, needs design |
| [#43015](https://github.com/openclaw/openclaw/issues/43015) | 3 | Reduce `message.send` schema overexposure (GPT auto-population) | Medium — UX improvement |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | 3 | MathJax/LaTeX in Control UI | Medium — web UI enhancement |

### Architecture Signals from Merged Work

- **Plugin SDK maturation**: [#72287](https://github.com/openclaw/openclaw/pull/72287) generic host-hooks + [#72548](https://github.com/openclaw/openclaw/pull/72548) pluggable SecretRef suggest OpenClaw is transitioning from monolithic to **plugin-extensible architecture**
- **Voice/realtime expansion**: xAI Voice Agent PR [#73032](https://github.com/openclaw/openclaw/pull/73032) + TTS overhaul indicates major voice modality investment
- **Computer use**: [#72076](https://github.com/openclaw/openclaw/pull/72076) macOS desktop automation plugin follows industry trend (Claude Computer Use, etc.)

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Category | Specific Complaints | Frequency |
|----------|---------------------|-----------|
| **Update fragility** | "2026.4.24 is a huge mess", "no longer works after update", "wrong folder", "reverted to 4.23 again" | **Very High** |
| **Windows experience** | "input text swallowed", "streamed replies invisible", "session lock held 191s", "global install后卡死" | High |
| **Gateway stability** | "crash-loops", "100% CPU", "not connected to gateway", "D state" | High |
| **Provider configuration** | "No API provider registered", "auth can not complete", "provider rejected schema" | Medium |
| **Deployment complexity** | "origin not allowed", "trusted proxy auth mode", "FRP port forwarding" | Medium |

### Use Cases Emerging
- **VPS/cloud self-hosting** with reverse proxy (FRP, nginx)
- **Multi-channel business bots** (Feishu, Slack, Telegram, Discord, WhatsApp)
- **Local/edge AI** (ARM/Pi 5, Apple Silicon, Ollama)
- **Enterprise/security-conscious**: SecretRef, private network access, cost budgets

### Satisfaction/Dissatisfaction
- ✅ **Satisfied with**: Feature velocity, TTS quality, multi-provider support, active maintainer response
- ❌ **Dissatisfied with**: Release stability, Windows support quality, update mechanism reliability, documentation for self-hosting edge cases

---

## 8. Backlog Watch

### Long-Standing Important Issues Needing Attention

| Issue | Age | Status | Risk |
|-------|-----|--------|------|
| [#29387](https://github.com/openclaw/openclaw/issues/29387) — `agentDir` bootstrap files ignored | ~2 months | 🔴 Open | **Core configuration broken**; workaround (use workspace/) defeats agent isolation |
| [#41494](https://github.com/openclaw/openclaw/issues/41494) — Gemini reasoning leaks into chat | ~7 weeks | 🔴 Open | Privacy/UX; previously "fixed" twice |
| [#41304](https://github.com/openclaw/openclaw/issues/41304) — Agent refuses write tools, hallucinates success | ~7 weeks | 🔴 Open | **Safety-critical**; user thinks action succeeded when it didn't |
| [#41619](https://github.com/openclaw/openclaw/issues/41619) — Google Gemini CLI auth cannot complete | ~7 weeks | 🔴 Open | Blocks Google AI usage entirely |
| [#41744](https://github.com/openclaw/openclaw/issues/41744) — Feishu image media lost before delivery | ~7 weeks | 🔴 Open | Enterprise user broken experience |
| [#43260](https://github.com/openclaw/openclaw/issues/43260) — Per-skill model routing | ~7 weeks | 🔴 Open | Performance/cost optimization blocked |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) — Per-agent cost budget enforcement | ~7 weeks | 🔴 Open | **Enterprise governance**; runaway spend risk |
| [#44202](https://github.com/openclaw/openclaw/issues/44202) — Apple Silicon local memory crashes | ~7 weeks | 🔴 Open | macOS user gateway crashes |

### PRs Needing Maintainer Review/Decision

| PR | Age | Blocker |
|----|-----|---------|
| [#68341](https://github.com/openclaw/openclaw/pull/68341) — "Remediate critical vulnerabilities and logic regressions" | 10 days | Large scope, AI-assisted, needs security review |
| [#72442](https://github.com/openclaw/openclaw/pull/72442) — Codex same-session reply path | 1 day | XL size, core chat logic |
| [#72548](https://github.com/openclaw/openclaw/pull/72548) — Pluggable SecretRef | 1 day | XL size, security architecture |

---

*Digest generated from GitHub activity data for openclaw/openclaw on 2026-04-28.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source Personal AI Agent Ecosystem
## 2026-04-28 Community Digest Analysis

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem exhibits **bifurcated maturity**: established projects (OpenClaw, Hermes Agent, ZeroClaw) grapple with stabilization after rapid feature expansion, while newer entrants (NanoBot, NanoClaw, Moltis) iterate aggressively on architecture and platform coverage. **Voice modality, multi-channel enterprise deployment, and provider abstraction resilience** have emerged as universal battlegrounds. A concerning pattern of **regression cascades**—where major releases introduce critical stability issues—affects multiple projects simultaneously, suggesting industry-wide tension between feature velocity and production readiness. The ecosystem is simultaneously consolidating around plugin-extensible architectures while fragmenting on protocol standards (ACP, MCP, A2A).

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* | Key Indicator |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | v2026.4.25 (3 days ago) | ⚠️ **Mixed** | Extreme volume; regression cluster post-release |
| **NanoBot** | 17 | 37 | None (main-only) | ✅ **Healthy** | 21/37 PRs merged; rapid turnaround |
| **Hermes Agent** | 50 | 50 | None (v0.11.0 current) | ⚠️ **Concerning** | 14% PR resolution; P0 unpatched 15+ days |
| **PicoClaw** | 109 | 120 | Nightly v0.2.7 | ⚠️ **Volatile** | 63 open PRs; significant review backlog |
| **NanoClaw** | 20 | 24 | v2.0.0 (6 days ago) | ⚠️ **Reactive** | Same-day fixes but critical bugs unassigned |
| **IronClaw** | 10 | 33 | None (v0.26.0) | 🔴 **Stressed** | 3 canary failures on single commit; V2 unstable |
| **LobsterAI** | 7 | 38 | 2026.4.25 (3 days ago) | ⚠️ **Improving** | 24/38 PRs merged; security push active |
| **Moltis** | 5 | 15 | None | ✅ **Strong** | 12/15 PRs merged; iterative refinement pattern |
| **CoPaw/QwenPaw** | 50 | 43 | None (patch pending) | 🔴 **Churning** | 50% close rate but state management crisis |
| **ZeroClaw** | 46 | 50 | None (v0.7.3 emergency) | ⚠️ **Recovering** | Post-bulk-revert reconstruction; 39:7 open:closed issue ratio |

*\*Health Score based on merge velocity, regression frequency, critical bug backlog, and release stability*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily | 5-50× higher volume than all peers; indicates dominant market position |
| **Provider ecosystem** | 7 new TTS providers in single release | Hermes/ZeroClaw add providers reactively; NanoBot has 5-6 core providers |
| **Plugin architecture maturity** | Host-hooks SDK (#72287) + pluggable SecretRef (#72548) landing | Moltis modularizing channels; NanoClaw v2 session-per-thread; none match SDK breadth |
| **Voice/realtime investment** | TTS overhaul + xAI Realtime Voice Agent PR | PicoClaw TTS/ASR blocked (#1648); NanoClaw adds transcription (#1326); LobsterAI voice-absent |
| **Cross-platform channel coverage** | 10+ channels (Feishu, Slack, Telegram, Discord, WhatsApp, etc.) | Hermes/CoPaw comparable; Moltis/NanoBot fewer; IronClaw Matrix-heavy |

### Technical Approach Differences
- **OpenClaw**: Monolithic-core → plugin-extensible transition; gateway-sidecar architecture with memory systems, provider routing, and channel adapters as separable concerns
- **NanoBot**: Single-loop ReAct with heartbeat-based autonomy; simpler but architecturally constrained for complex agent delegation
- **Hermes Agent**: Skill/plugin ecosystem with "smart approval" security model; heavier on local tool execution
- **Moltis**: Compile-time feature gating for lean binaries; Rust-based with strong type safety
- **IronClaw**: "Reborn" substrate architecture with explicit capability grants/leases; most formal security model

### Community Size Comparison
OpenClaw's **500 daily items** dwarfs all peers (next: Hermes/CoPaw at 50, ZeroClaw at 96). However, **engagement quality varies**: NanoBot achieves 57% merge rate vs. OpenClaw's implied lower rate given 500 items and known regression patterns. OpenClaw functions as **ecosystem reference point**—peers explicitly benchmark against it (Hermes #8945 "OpenClaw parity", CoPaw #406 "OpenClaw already supports").

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Provider abstraction resilience** | OpenClaw, NanoBot, Hermes, PicoClaw, ZeroClaw, LobsterAI, CoPaw | Schema drift handling (Groq `reasoning_effort`, DeepSeek V4 `reasoning_content`, Gemini reasoning leaks); dynamic discovery with static fallback; timeout normalization |
| **Voice/realtime modality** | OpenClaw, PicoClaw, NanoClaw | TTS provider diversity (7 added in OpenClaw 2026.4.25); ASR integration (NanoClaw #1326 whisper.cpp); streaming audio pipelines; voice agent protocols (xAI Realtime) |
| **Enterprise multi-channel deployment** | OpenClaw, Hermes, CoPaw, PicoClaw, ZeroClaw | Feishu/Slack/Discord/WeChat parity; thread/session isolation; mention-mode routing; authorization card flows |
| **State/configuration persistence** | CoPaw, OpenClaw, ZeroClaw, IronClaw | v1.1.4 config loss cluster (CoPaw #3824/#3817); `agentDir` bootstrap ignored (OpenClaw #29387); schema v3 migration coordination (ZeroClaw #5947); migration data integrity (IronClaw #2982) |
| **Cost/usage observability** | Hermes (#16741), ZeroClaw (#6159), CoPaw (#3366) | Subagent cost rollup; per-turn token recording; real-time consumption display; budget enforcement (#42475) |
| **Security hardening** | LobsterAI, Hermes, Moltis, CoPaw | Log redaction (#1844); smart approval prompt injection (#8876); IPC access control (#1832); circuit breaker security hooks (#894); Tool Guard channel-side approval (#3869) |
| **Plugin/SDK extensibility** | OpenClaw, Moltis, Hermes, NanoBot | Generic host-hooks (#72287); compile-time optional channels (#891/#899); pluggable SecretRef (#72548); MCP/A2A protocol support |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | **Ecosystem breadth & reference status** | Power users, multi-channel operators, plugin developers | Gateway-sidecar with plugin SDK; transitioning from monolith |
| **NanoBot** | **Heartbeat autonomy & rapid fix velocity** | Individual developers, lightweight self-hosters | Single-loop ReAct; Python; heartbeat-driven planning |
| **Hermes Agent** | **Skill ecosystem & local tool execution** | Technical power users, automation-heavy workflows | Plugin-skills with "smart approval"; rich local toolset |
| **PicoClaw** | **Embedded/edge deployment (Sipeed hardware)** | IoT/edge AI, hardware-integrated applications | Go-based; nightly builds; ARM/embedded optimization |
| **NanoClaw** | **Session-per-thread v2 architecture** | Containerized production deployments | TypeScript; Docker-native; session rotation; voice transcription |
| **IronClaw** | **Formal capability security & "Reborn" substrate** | Security-conscious enterprises, protocol integrators | Rust; capability grants/leases; explicit permission architecture |
| **LobsterAI** | **Cowork mode & enterprise integration** | Chinese enterprise, team collaboration | Electron; NetEase-backed; WeChat/Feishu depth |
| **Moltis** | **Compile-time modularity & type safety** | Systems programmers, lean deployment operators | Rust; feature-gated channels; command palette UX |
| **CoPaw/QwenPaw** | **Chinese market channel depth & ACP integration** | Chinese developers, ByteDance/Volcano ecosystem | Python; rapid channel fixes; Tool Guard security |
| **ZeroClaw** | **Matrix-native & E2EE** | Privacy-focused, decentralized communication users | Rust; Matrix protocol depth; WASM skills exploration |

**Key architectural divergence**: OpenClaw, NanoClaw, and CoPaw pursue **runtime plugin extensibility**; Moltis and IronClaw prioritize **compile-time safety and binary size control**; NanoBot optimizes for **simplicity and rapid iteration** at cost of architectural ceiling.

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Velocity, Active Feature Development)
| Project | Trajectory | Risk Factor |
|:---|:---|:---|
| **OpenClaw** | Feature velocity highest in ecosystem; TTS overhaul, voice agent, computer use | **Regression debt accumulating**; stabilization sprint needed |
| **Moltis** | Clean iterative pattern; auto-indexing, command palette, architecture simplification | Small community; single point of failure if core contributors depart |
| **NanoBot** | Exceptional fix turnaround; provider robustness focus | Architectural limitations (#1181 Steering Loop) may cap growth |

### Tier 2: Stabilization/Reconstruction (Post-Major-Change Recovery)
| Project | Trajectory | Risk Factor |
|:---|:---|:---|
| **NanoClaw** | v2 rewrite stabilization; session architecture stress-testing | Critical bugs unassigned; infinite loop (#2048) blocks Telegram |
| **ZeroClaw** | Recovering from 153-commit bulk revert; reconstructing features | Schema v3 migration blocker; onboarding failures cluster |
| **IronClaw** | "Reborn" architecture landing; V2 engine stabilization | **Staging not production-ready**; 3 canary failures; release governance strained |
| **LobsterAI** | Security hardening phase; Windows stability focus | 2-month-old critical failures (#73, #17) unaddressed; macOS neglected |

### Tier 3: Accumulating Backlog (High Activity, Low Resolution)
| Project | Trajectory | Risk Factor |
|:---|:---|:---|
| **Hermes Agent** | Feature parity requests vs. OpenClaw; P0 unpatched | **14% PR resolution rate**; merge velocity crisis; contributor attrition risk |
| **CoPaw/QwenPaw** | Channel expansion (QQ, Feishu); v1.1.4 patch cascade | **State management regressions** undermine trust; cosmetic > fundamental prioritization |
| **PicoClaw** | Nightly builds; provider compatibility fixes | 63 open PRs; stale label prevalence; maintainer attention gaps |

### Tier 4: Dormant/Minimal
| Project | Status |
|:---|:---|
| **NullClaw, TinyClaw, ZeptoClaw** | No activity in 24h; likely experimental or abandoned |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Strategic Implication |
|:---|:---|:---|
| **Voice as table stakes** | OpenClaw 7 TTS providers; NanoClaw transcription; PicoClaw #1648 (23 comments); xAI Realtime integration | Agent developers must plan voice I/O from architecture start, not retrofit |
| **Reasoning model compatibility as moving target** | DeepSeek V4 `reasoning_content` (NanoBot #3469, ZeroClaw #6107, LobsterAI #1813); Gemini reasoning leaks (OpenClaw #41494); Kimi 2.6 context (ZeroClaw #6160) | Provider abstraction must handle **non-standard reasoning fields** dynamically; static schemas fail |
| **Enterprise deployment complexity is universal pain** | FRP/CORS (OpenClaw #29809); reverse proxy OIDC (Moltis #893); LXC/systemd (NanoClaw #2052-2057); Docker-out-of-Docker (Hermes #16703) | "Works on my machine" insufficient; **installation path testing** must cover containerized, air-gapped, and reverse-proxy scenarios |
| **Configuration fragility is systemic** | CoPaw v1.1.4 config loss cluster; OpenClaw `agentDir` ignored; ZeroClaw schema v3 migration; Hermes custom provider ignored | **Structured configuration with validation, migration, and rollback** is core infrastructure, not afterthought |
| **Cost transparency becoming compliance requirement** | Hermes #16741; ZeroClaw #6159; CoPaw #3366; OpenClaw #42475 | Production deployments require **per-session, per-subagent, per-tool cost attribution** |
| **Security model divergence: proactive vs. reactive** | LobsterAI log redaction; Moltis circuit breaker testing; CoPaw Tool Guard; IronClaw capability leases | Developers must choose between **runtime policy enforcement** (CoPaw, OpenClaw) and **compile-time/declarative security** (IronClaw, Moltis) |
| **A2A/ACP/MCP protocol fragmentation** | OpenClaw A2A support (#6842, #72287); ZeroClaw ACP v1 (#6167); CoPaw ACP/MCP interoperability (#3716, #3822); NanoBot MCP capability names (#3468) | **Protocol adapter strategy required**; no single standard dominant; expect 2-3 years of coexistence |
| **"OpenClaw parity" as competitive benchmark** | Hermes #8945, #8950, #8951; CoPaw #406; Moltis implicit comparison | OpenClaw has **market-defining position**; competitors differentiate on stability, specific channels, or architecture philosophy |

### Emerging Use Case Archetypes
1. **Multi-channel business automation**: Feishu/Slack/Discord/WhatsApp enterprise bots with cost tracking
2. **Local-first edge AI**: LM Studio/Ollama integration, ARM optimization, self-upgrade capability
3. **Secure delegated execution**: Sandboxed code execution, smart approval, audit substrates
4. **Team coordination beyond chat**: Kanban (Hermes #16102), task progress hooks (CoPaw #3889), cron scheduling (LobsterAI PR #1519)

---

*Report generated from 10 project digests covering 1,272 GitHub items (2026-04-27 to 2026-04-28). Data sources: community digest summaries.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-28

## 1. Today's Overview

NanoBot saw **exceptionally high activity** on 2026-04-27 with **17 issues updated** (5 open/active, 12 closed) and **37 pull requests** (16 open, 21 merged/closed), indicating a very active development and maintenance cycle despite **zero new releases**. The project demonstrates strong maintainer responsiveness with rapid turnaround on bug fixes—multiple issues opened and resolved same-day. The community is actively expanding platform support (SimpleX, Hugging Face) while core contributors focus on provider stability, session management, and heartbeat reliability. The high merge rate suggests the project is in a healthy, well-governed state with active triage.

---

## 2. Releases

**No new releases** as of 2026-04-28. The project remains on its last published version with all changes landing in `main` via direct merges.

---

## 3. Project Progress

### Merged/Closed PRs Today (21 total)

| PR | Author | Summary | Impact |
|---|---|---|---|
| [#3478](https://github.com/HKUDS/nanobot/pull/3478) | boogieLing | **fix(provider): bound OpenAI-compatible request timeouts** — adds explicit timeout to `OpenAICompatProvider` preventing 10-minute hangs | Critical reliability fix for production deployments |
| [#3480](https://github.com/HKUDS/nanobot/pull/3480) | boogieLing | **fix(codex): stream progress deltas to channels** — restores `_progress=True` channel updates for OpenAI Codex | Fixes regression between v0.1.4.post6 and v0.1.5.post2 |
| [#3479](https://github.com/HKUDS/nanobot/pull/3479) | boogieLing | Duplicate/related Codex streaming fix (closed, likely superseded by #3480) | — |
| [#3458](https://github.com/HKUDS/nanobot/pull/3458) | boogieLing | **fix(provider): normalize DeepSeek non-string message content** | Improves DeepSeek/OpenAI-compatible robustness |
| [#3459](https://github.com/HKUDS/nanobot/pull/3459) | boogieLing | **feat(session): enforce replay/file-cap invariants for history lifecycle** | Prevents context drift and unbounded disk growth |
| [#3389](https://github.com/HKUDS/nanobot/pull/3389) | hussein1362 | **fix(heartbeat): prevent internal reasoning leaks and finalization fallback** | Stops HEARTBEAT.md content leaking to user channels |
| [#3397](https://github.com/HKUDS/nanobot/pull/3397) | Lbin91 | **fix(discord): full thread support with session isolation and allowlist enforcement** | Completes Discord thread handling from prior PR #3171 |
| [#3483](https://github.com/HKUDS/nanobot/pull/3483) | flyzstu | **docs: add OpenCode Go provider entries** | Documentation for new provider aggregation gateway |
| [#3466](https://github.com/HKUDS/nanobot/pull/3466) | LeoFYH | **feat(command): add /history command** | User-facing UX improvement for session review |

**Key advancement areas:** Provider robustness (timeout handling, DeepSeek normalization, Codex streaming), session lifecycle hardening, and heartbeat output sanitization.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Issue/PR | Comments | 👍 | Topic | Link |
|---|---|---|---|---|
| **#2133** — 任务执行期间用户消息入列 | 19 | 0 | Runtime message queueing during agent loops | [Issue #2133](https://github.com/HKUDS/nanobot/issues/2133) |
| **#3376** — Provider/Model Failover | 11 | 1 | Multi-provider automatic failover | [Issue #3376](https://github.com/HKUDS/nanobot/issues/3376) |
| **#1181** — 双层架构（Steering Loop + AgentMessage） | 3 | 9 | Architectural proposal for autonomous agent runtime | [Issue #1181](https://github.com/HKUDS/nanobot/issues/1181) |
| **#3270** — Configurable compaction ratio | 5 | 0 | Memory compaction configurability | [Issue #3270](https://github.com/HKUDS/nanobot/issues/3270) |

### Underlying Needs Analysis

- **#2133** (19 comments, closed): Reveals fundamental tension in NanoBot's single-loop ReAct architecture—users want **bidirectional communication during long-running tasks** without `/stop` interrupts. The "solutions" proposed (prompt engineering in `agent.md`) are workarounds; true async message injection requires runtime changes.
- **#3376** (11 comments, open): **Production hardening demand** — users configuring multiple providers expect cloud-grade failover, not just same-provider retry. The +1 and active discussion suggest this is blocking enterprise adoption.
- **#1181** (9 👍, 3 comments): Despite low comment count, high vote count indicates **silent community agreement** on architectural limitations. The Steering Loop proposal aligns with #2133's underlying need for more autonomous runtime behavior.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR | Status |
|---|---|---|---|---|
| **🔴 High** | [#3473](https://github.com/HKUDS/nanobot/issues/3473) | WebSocket connection failure on 0.0.0.0 binding (remote WebUI access) | None yet | **OPEN** — blocks remote server deployments |
| **🔴 High** | [#3426](https://github.com/HKUDS/nanobot/issues/3426) | OpenAI Codex provider streaming regression | [#3478](https://github.com/HKUDS/nanobot/pull/3478), [#3480](https://github.com/HKUDS/nanobot/pull/3480) | **FIXED** |
| **🟡 Medium** | [#3469](https://github.com/HKUDS/nanobot/issues/3469) | DeepSeek-v4 `reasoning_content` must be passed back | [#3458](https://github.com/HKUDS/nanobot/pull/3458) (related normalization) | **CLOSED** (likely resolved by normalization) |
| **🟡 Medium** | [#3474](https://github.com/HKUDS/nanobot/issues/3474) | DeepSeek v4-pro/v4-flash blank responses | None specific | **CLOSED** (may be provider-side, not NanoBot) |
| **🟡 Medium** | [#3488](https://github.com/HKUDS/nanobot/issues/3488) | Telegram attachments sent as `application.octet-stream` | [#3489](https://github.com/HKUDS/nanobot/pull/3489) | **OPEN** — fix PR pending |
| **🟢 Low** | [#3468](https://github.com/HKUDS/nanobot/issues/3468) | MCP capability names forwarded unsanitized | None yet | **CLOSED** (marked good first issue) |
| **🟢 Low** | [#3435](https://github.com/HKUDS/nanobot/issues/3435) | WeCom media file upload failures | None | **CLOSED** |
| **🟢 Low** | [#3464](https://github.com/HKUDS/nanobot/issues/3464) | Subagent announces route to wrong thread | None | **CLOSED** |

**Notable pattern:** DeepSeek provider issues dominated today's bug reports (#3469, #3474), suggesting **model-specific compatibility fragility** as DeepSeek iterates its API. The rapid fix cycle for Codex streaming (#3426 → #3480 in ~3 days) demonstrates strong regression response.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|---|---|---|---|
| **Provider/Model Failover** | [#3376](https://github.com/HKUDS/nanobot/issues/3376) | **High** | Active discussion, clear production need, fits existing provider abstraction |
| **Session-scoped history** | [#3481](https://github.com/HKUDS/nanobot/pull/3481) | **High** | PR already open; addresses data isolation pain point |
| **Hugging Face Inference Provider** | [#3490](https://github.com/HKUDS/nanobot/pull/3490) | **High** | Clean PR from HF employee, OpenAI-compatible endpoint |
| **SimpleX Channel** | [#3486](https://github.com/HKUDS/nanobot/pull/3486) | **Medium** | Niche but complete implementation; maintainer discretion |
| **LongTaskTool (multi-step subagent)** | [#3460](https://github.com/HKUDS/nanobot/pull/3460) | **Medium** | Significant architectural addition; may need review cycle |
| **Gateway lifecycle hooks** | [#3373](https://github.com/HKUDS/nanobot/pull/3373) | **Medium** | Clean PR, closes #3279, low risk |
| **Per-channel progress controls** | [#3487](https://github.com/HKUDS/nanobot/pull/3487) | **Medium** | Small surface, user-configurable |
| **Automation with context** | [#3484](https://github.com/HKUDS/nanobot/issues/3484) | **Low-Medium** | Unclear scope; may require heartbeat architecture changes |
| **Session-Level Focus Tool** | [#3292](https://github.com/HKUDS/nanobot/issues/3292) | **Low** | Conceptual, no PR, competes with existing `my` tool |
| **Steering Loop architecture** | [#1181](https://github.com/HKUDS/nanobot/issues/1181) | **Low** | Major architectural change, philosophical alignment needed |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|---|---|---|
| **Agent loop monopolization** | #2133, #2915, #3484 | 🔴 High — users cannot interrupt or redirect running agents without `/stop` |
| **Provider single-point-of-failure** | #3376 | 🔴 High — production reliability concern |
| **Session history pollution** | #3481, #3484 | 🟡 Medium — cross-session context bleeding |
| **Heartbeat opacity** | #3389 (fixed), #3484 | 🟡 Medium — users confused by HEARTBEAT.md behavior |
| **DeepSeek API drift** | #3469, #3474 | 🟡 Medium — third-party provider fragility |
| **Remote deployment friction** | #3473 | 🟡 Medium — WebUI binding defaults |

### Satisfaction Indicators

- Rapid fix turnaround (Codex streaming fixed in ~3 days)
- Active community contributions (SimpleX, HF providers, Olostep)
- `/history` command addition shows responsiveness to UX feedback

### Dissatisfaction Indicators

- #2133's 19 comments with 0 👍 suggests **frustration without easy resolution** — users want architectural change, not workarounds
- #1181's 9 👍 with only 3 comments indicates **pent-up demand for autonomy improvements** that maintainers haven't prioritized

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Needs |
|---|---|---|---|
| **#1181** — Steering Loop + AgentMessage | ~2 months | **High** | Maintainer architectural decision; 9 👍 indicates community priority misalignment |
| **#3292** — Session-Level Focus Tool | ~8 days | Medium | Conceptual clarity; may overlap with #3481 session-scoped history |
| **#3484** — Automation with context | 1 day | Medium | Clarification on whether heartbeat or cron should solve this; possible documentation gap |
| **#3405** — Olostep web search | ~4 days | Low | Standard review; clean integration PR |
| **#3373** — Gateway lifecycle hooks | ~5 days | Low | Final review/merge; low complexity |

**Critical concern:** #1181 represents a **growing architectural divergence** between maintainer priorities (stability, provider expansion) and community desires (agent autonomy, dynamic task management). The high vote-to-comment ratio suggests users feel unheard. Without maintainer engagement, this risks community fork pressure or contributor attrition.

---

*Digest generated from HKUDS/nanobot GitHub activity on 2026-04-27.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-28

## 1. Today's Overview

Hermes Agent shows **exceptionally high community activity** with 50 issues and 50 PRs updated in the last 24 hours, though only 1 issue closed and 7 PRs merged/closed indicates a **heavy backlog accumulation**. The project is experiencing active growth pains with zero new releases, suggesting maintainers are focused on stabilization rather than shipping. Critical security work (P0 smart approval hardening) and major platform fixes (Slack, Discord, Feishu) dominate today's activity. The community is notably engaged in cross-platform comparisons with OpenClaw, driving feature parity requests. Overall project health is **moderate-to-high activity with concerning merge velocity**.

---

## 2. Releases

**No new releases** — Version v0.11.0 (2026.04.23) remains current. No migration notes required.

---

## 3. Project Progress

### Merged/Closed PRs Today (7 total, 2 merged + 5 closed per data)

| PR | Status | Summary | Link |
|:---|:---|:---|:---|
| #16740 | **CLOSED** | TUI copilot follow-ups for text selection (fix to #16732) | [PR #16740](https://github.com/NousResearch/hermes-agent/pull/16740) |
| #16732 | **CLOSED** | Mouse + keyboard text selection in composer | [PR #16732](https://github.com/NousResearch/hermes-agent/pull/16732) |
| #1 | **CLOSED** | Terminal tool (historical PR from 2025, finally closed) | [PR #1](https://github.com/NousResearch/hermes-agent/pull/1) |

### Notable Open PRs Advancing

| PR | Focus | Link |
|:---|:---|:---|
| #16741 | **Cost tracking**: Subagent costs now roll up to parent sessions (port from Kilo-Org/kilocode#9448) — fixes under-counting in `delegate_task` | [PR #16741](https://github.com/NousResearch/hermes-agent/pull/16741) |
| #16738 | **Slack regression fix**: `slack:` block without explicit `enabled` now treated as opt-in | [PR #16738](https://github.com/NousResearch/hermes-agent/pull/16738) |
| #16737 | **Compression resilience**: Retries transient transport errors before fallback marker | [PR #16737](https://github.com/NousResearch/hermes-agent/pull/16737) |
| #16736 | **Feishu voice messages**: Adds audio duration for proper voice bubble rendering | [PR #16736](https://github.com/NousResearch/hermes-agent/pull/16736) |
| #16734 | **xAI provider**: Adds to dev-preferred models, refreshes stale curated IDs | [PR #16734](https://github.com/NousResearch/hermes-agent/pull/16734) |
| #16722 | **Discord strict mention mode**: Parity with Slack's mention pattern | [PR #16722](https://github.com/NousResearch/hermes-agent/pull/16722) |
| #8876 | **Security (P0)**: Hardens smart approval guard against prompt injection | [PR #8876](https://github.com/NousResearch/hermes-agent/pull/8876) |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Issue/PR | Comments | 👍 | Analysis |
|:---|:---|:---:|:---:|:---|
| 1 | **#7734** Feishu plugin bugs (authorization card error, topic reply behavior) | 11 | 0 | **Enterprise China market critical** — Feishu is major enterprise IM; broken authorization flow blocks adoption. Topic reply bug degrades group chat UX. | [Issue #7734](https://github.com/NousResearch/hermes-agent/issues/7734) |
| 2 | **#16102** RFC: Kanban multi-profile collaboration board | 6 | 0 | **Workflow/productivity signal** — Users want persistent visual task management across agent profiles; suggests Hermes being used for team coordination, not just personal assistance. PR #16100 attached. | [Issue #16102](https://github.com/NousResearch/hermes-agent/issues/16102) |
| 3 | **#5320** Memory char limit auto-scaling | 5 | 0 | **Long-running session pain** — 2200 char limit hit quickly; users need autonomous memory management, not manual tuning. | [Issue #5320](https://github.com/NousResearch/hermes-agent/issues/5320) |

### High-Reaction Items

| Issue | 👍 | Signal |
|:---|:---:|:---|
| **#8883** Simplified Chinese WebUI localization (100% complete, external project) | **6** | Strong China market demand; community filling i18n gap before official support | [Issue #8883](https://github.com/NousResearch/hermes-agent/issues/8883) |
| **#12700** Gemini `service_tier: flex` support | 2 | Cost optimization for batch workloads — enterprise cron/job scheduling need | [Issue #12700](https://github.com/NousResearch/hermes-agent/issues/12700) |

**Underlying needs**: Enterprise deployment readiness (Feishu, Slack, i18n), cost control at scale, visual workflow management beyond chat interface.

---

## 5. Bugs & Stability

### Critical/High Severity (P0-P2)

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---:|
| **P0** | **#8876/PR** Smart approval prompt injection vulnerability | Auxiliary LLM for command approval vulnerable to prompt injection in `_smart_approve()` | ✅ **PR #8876** open |
| **P1** | **#8965** Tool calls rendered as raw XML (Ollama cloud models) | Ollama proxy/cloud routes fail to execute tools, output raw XML instead | ❌ No fix yet |
| **P1** | **#8919** Custom provider config ignored at runtime | `custom` provider `base_url` not hit; breaks self-hosted/enterprise endpoints | ❌ No fix yet |
| **P2** | **#16682/#16738** Slack adapter silently disabled (regression in a01e767b) | Top-level `slack:` block without `enabled` key kills adapter | ✅ **PR #16738** open |
| **P2** | **#16703** Docker-out-of-Docker code execution fails | `docker version` fails inside DooD setup despite socket mount | ❌ No fix yet |
| **P2** | **#8907** Cron tenant_key fallback collapses thread namespaces | Threaded origins share state incorrectly in cron jobs | ❌ No fix yet |
| **P2** | **#9013** Gateway install uses system Python not venv | systemd service crashes on Amazon Linux 2023 | ❌ No fix yet |
| **P2** | **#16719** Auxiliary tasks ignore custom `base_url` (closed) | Context compression, title gen use default endpoint | ✅ **CLOSED** today |
| **P2** | **#16723** `/config` timeout value ignores env/config | Terminal timeout display mismatch | ❌ No fix yet |

### New Today (Zero-Comment, High Risk)

| Issue | Risk |
|:---|:---|
| **#16744** Slack bot never responds | Fresh report, may relate to #16682 regression or distinct config issue | [Issue #16744](https://github.com/NousResearch/hermes-agent/issues/16744) |
| **#16743** Atomic writes replace symlinked targets | Breaks git-tracked config management, DevOps/declarative setups | [Issue #16743](https://github.com/NousResearch/hermes-agent/issues/16743) |

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Maturity Signal | Next Version Likelihood |
|:---|:---|:---|:---:|
| **Kanban collaboration board** | #16102 + PR #16100 | Has design spec PDF, PR open, RFC active discussion | **High** — structured review in progress |
| **Web-based gateway Control UI/Dashboard** | #8945 | Explicit OpenClaw parity request; no PR yet | Medium — large scope |
| **Tailscale Serve/Funnel integration** | #8951 | OpenClaw parity; security-focused remote access | Medium — niche but complete spec |
| **Additional messaging channels** (IRC, LINE, Nostr, Twitch, QQ) | #8950 | OpenClaw parity table; community interest | Medium — modular but maintenance burden |
| **Gemini Flex tier support** | #12700 | Simple provider parameter addition; cost savings clear | **High** — low effort, high value |
| **Infinite Context Buffer** (delegation pattern) | #16742 | New today, zero comments; architectural pattern | Medium — aligns with existing `delegate_task` |
| **PRD-driven autonomous dev loop** (`prd-hermes` skill) | PR #8882 | PR open, structured 4-phase workflow | Medium — experimental |
| **Willow Kart sandboxed task queue** | PR #11979 | PR open, security-focused execution | Medium — niche but aligned with code-exec safety |
| **xAI/Grok model refresh** | PR #16734 | PR open, stale models 400-ing | **High** — maintenance necessity |
| **Telegram inline keyboards** | PR #8899 | PR open, interactive UI pattern | Medium — platform parity |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Platform integration fragility** | Feishu (#7734, #16736), Slack (#16682, #16744), Weixin (#8921), Discord (#16722, #16739) | High |
| **Configuration system unreliable** | Values ignored (#8919, #16723), env vars not respected (#16719), symlinks broken (#16743) | High |
| **Memory/scale limits** | Char limits too low (#5320), compression failures (#16737), context truncation (#16719) | Medium-High |
| **Enterprise deployment friction** | Docker-in-Docker (#16703), systemd/Python paths (#9013), NixOS (#8873), Windows encoding (#8901, #8898) | Medium |
| **Cost opacity** | Subagent costs hidden until #16741 | Medium |

### Use Cases Emerging

- **Team coordination**: Kanban (#16102), multi-profile collaboration
- **Cost-optimized batch operations**: Gemini flex (#12700), cron jobs
- **China market deployment**: Feishu, Weixin, Simplified Chinese UI (#8883)
- **Secure/auditable execution**: Smart approval hardening (#8876), Willow Kart sandbox (#11979), Novita sandbox (#8902)

### Satisfaction Signals

- Active community localization (#8883, 6 👍)
- Feature parity requests show Hermes is **comparison-shopped against OpenClaw** — perceived as viable alternative
- Rich plugin ecosystem (memory: Hindsight, Honcho; skills: prd-hermes)

---

## 8. Backlog Watch

### Stale Important Items Needing Maintainer Attention

| Issue/PR | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| **PR #8876** (P0 security fix) | 15+ days | **Critical vulnerability unpatched** | Merge or request changes |
| **Issue #7734** Feishu bugs | 17 days | Major platform broken, 11 comments | Assign owner, repro confirmation |
| **PR #8882** prd-hermes skill | 15 days | Novel autonomous dev workflow | Review for experimental merge |
| **PR #11979** Willow Kart tool | 10 days | Security-aligned execution | Review for tool ecosystem expansion |
| **Issue #5320** Memory limits | 23 days | Core scalability, 5 comments | Decision on auto-scale vs. configurable |
| **PR #8894** Windows test infrastructure | 15 days | Platform parity, CI gap | Review for maintainability |
| **Issue #8883** Chinese WebUI | 15 days | Community solution exists, 6 👍 | Official i18n roadmap decision |

### Merge Velocity Concern

- 50 PRs updated, only 7 closed/merged (14% resolution rate)
- 49 of 50 issues remain open (98% backlog growth)
- P0 security fix (#8876) and P1 provider bugs (#8919, #8965) unmerged for 2+ weeks

---

*Digest generated from NousResearch/hermes-agent GitHub activity on 2026-04-28. All links: https://github.com/NousResearch/hermes-agent*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-28

## 1. Today's Overview

PicoClaw shows **exceptionally high activity** with 109 issues and 120 PRs updated in the last 24 hours, indicating a rapidly maturing but still volatile project. The 63 open PRs against 57 merged/closed suggest a significant review backlog. A new nightly build (`v0.2.7-nightly.20260427.39dec354`) was released, signaling active development toward v0.2.7. The project is heavily focused on **provider compatibility fixes**, **web chat UX improvements**, and **enterprise observability features**, while struggling with **configuration fragility** and **authentication gaps** that hinder production deployments.

---

## 2. Releases

### [v0.2.7-nightly.20260427.39dec354](https://github.com/sipeed/picoclaw/compare/v0.2.7...main) — Nightly Build
- **Type:** Automated nightly (potentially unstable)
- **Status:** Pre-release on path to v0.2.7
- **Notable:** No explicit changelog; compare view shows delta from v0.2.7 tag to main
- **Caution:** Users should expect instability; not recommended for production

---

## 3. Project Progress

### Merged/Closed PRs & Advanced Features

| PR | Status | Key Advancement |
|---|---|---|
| [#2587](https://github.com/sipeed/picoclaw/pull/2587) | **OPEN (active)** | **End-to-end streaming for web chat** — major UX rewrite with backend/agent streaming path, frontend scroll behavior rebuild; addresses long-standing [#1950](https://github.com/sipeed/picoclaw/issues/1950) |
| [#2681](https://github.com/sipeed/picoclaw/pull/2681) | **OPEN (active)** | **Gemini MCP tool schema sanitizer** — fixes HTTP 400 crashes with complex JSON schemas via Gemini models |
| [#2603](https://github.com/sipeed/picoclaw/pull/2603) | OPEN | **FreeRide tool** — automated OpenRouter free model rotation with fallback management |
| [#2491](https://github.com/sipeed/picoclaw/pull/2491) | OPEN | **Session management commands** (`/status`, `/compact`, `/new`) — manual context management |
| [#2372](https://github.com/sipeed/picoclaw/pull/2372) | OPEN | **Critical auth/config fixes** — resolves `api_key` silent drop, model lookup failures, fallback chain bugs |
| [#2520](https://github.com/sipeed/picoclaw/pull/2520) | OPEN | **Cron task execution fixes** — resolves creation and runtime failures |
| [#2258](https://github.com/sipeed/picoclaw/pull/2258) | OPEN | **Local image handling** for models without native image support |

**Infrastructure/Tooling:** Multiple PRs by `diegofornalha` (#[2369](https://github.com/sipeed/picoclaw/pull/2369), #[2333](https://github.com/sipeed/picoclaw/pull/2333), #[2332](https://github.com/sipeed/picoclaw/pull/2332), #[2330](https://github.com/sipeed/picoclaw/pull/2330), #[2329](https://github.com/sipeed/picoclaw/pull/2329), #[2328](https://github.com/sipeed/picoclaw/pull/2328)) covering pt-BR translation, WhatsApp group controls, structured context compression, skill management, and error handling hardening — suggesting either a dedicated contributor or automated bulk submissions.

---

## 4. Community Hot Topics

| Issue/PR | 🔥 Heat | Underlying Need |
|---|---|---|
| [#1648](https://github.com/sipeed/picoclaw/issues/1648) Adding TTS and ASR Support | 23 comments | **Multimodal agent interaction** — voice is becoming table-stakes for personal AI; PR #1642 exists but blocked on gateway integration |
| [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio Easy Connect | 16 comments, 👍1 | **Local model accessibility** — users want one-click local LLM setup without manual configuration friction |
| [#2578](https://github.com/sipeed/picoclaw/issues/2578) `openai_compat` provider drops Authorization header | 12 comments | **Production reliability** — silent credential stripping breaks all HTTP-based models; security-critical |
| [#297](https://github.com/sipeed/picoclaw/issues/297) Mantis Shrimp Logo Design | 10 comments, CLOSED | **Project identity/brand** — completed, reflecting community investment in project culture |
| [#1919](https://github.com/sipeed/picoclaw/issues/1919) Seahorse Memory System | 10 comments, CLOSED | **Agent memory architecture** — biologically-inspired short/long-term memory for context management |
| [#629](https://github.com/sipeed/picoclaw/issues/629) LLM call retry on failure | 10 comments | **Resilience for long tasks** — current hang-on-failure breaks automation reliability |
| [#618](https://github.com/sipeed/picoclaw/issues/618) Self-upgrade support | 10 comments, 👍2 | **Operational maintainability** — critical for embedded/IoT deployments (Sipeed's core market) |

**Analysis:** The community is pulling PicoClaw toward **production readiness** (auth, retries, upgrades, observability) while the core team appears focused on **feature breadth** (channels, providers, tools). The tension between these priorities is visible in long-open enhancement requests.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|---|---|---|---|
| 🔴 **Critical** | [#2578](https://github.com/sipeed/picoclaw/issues/2578) `openai_compat` silently drops API key — breaks all HTTP auth | OPEN | [#2372](https://github.com/sipeed/picoclaw/pull/2372) (partial — `api_key` string handling) |
| 🔴 **Critical** | [#2371](https://github.com/sipeed/picoclaw/issues/2371) Agent loop crash `loop.go:2171` | CLOSED | [#2372](https://github.com/sipeed/picoclaw/pull/2372) |
| 🟡 **High** | [#2236](https://github.com/sipeed/picoclaw/issues/2236) Docker port remapping breaks web UI (input disabled) | CLOSED | — |
| 🟡 **High** | [#748](https://github.com/sipeed/picoclaw/issues/748) Groq API tool call format incompatibility | CLOSED | — |
| 🟡 **High** | [#2368](https://github.com/sipeed/picoclaw/issues/2368) Android app: "Model not configured" despite valid config | OPEN | — |
| 🟡 **High** | [#1708](https://github.com/sipeed/picoclaw/issues/1708) REST API endpoints missing in v0.2.3 Gateway | OPEN | — |
| 🟢 **Medium** | [#1058](https://github.com/sipeed/picoclaw/issues/1058) Cron `deliver=false` silently discards LLM responses | CLOSED | [#2520](https://github.com/sipeed/picoclaw/pull/2520) related |
| 🟢 **Medium** | [#2080](https://github.com/sipeed/picoclaw/issues/2080) Windows QQ channel broken | CLOSED | — |

**Regressions:** The `openai_compat` auth header bug (#2578) appears to be a **v0.2.6 regression** — "regardless of where the API key is configured" suggests config system refactoring broke legacy paths. PR #2372 addresses the JSON `api_key` string case but may not cover all config sources.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Request | Likelihood in v0.2.7+ | Blockers |
|---|---|---|---|
| **TTS/ASR voice integration** | [#1648](https://github.com/sipeed/picoclaw/issues/1648) | **High** — PR exists, needs gateway wiring | Gateway architecture review |
| **Web chat streaming** | [#1950](https://github.com/sipeed/picoclaw/issues/1950) | **Very High** — PR #2587 in active review | Frontend stability |
| **OTel GenAI observability** | [#1731](https://github.com/sipeed/picoclaw/issues/1731) | Medium | Enterprise priority unclear |
| **Authula authentication** | [#1067](https://github.com/sipeed/picoclaw/issues/1067) | Medium | Security architecture decision |
| **Mattermost channel** | [#1587](https://github.com/sipeed/picoclaw/issues/1587), 👍2 | Medium | Channel maintainer bandwidth |
| **Self-upgrade** | [#618](https://github.com/sipeed/picoclaw/issues/618), 👍2 | Low-Medium | Packaging infrastructure (deb/winget/opkg) |
| **OpenAI Responses API migration** | [#2171](https://github.com/sipeed/picoclaw/issues/2171) | Low — research phase | API parity gaps |
| **LangSmith tracing** | [#2173](https://github.com/sipeed/picoclaw/issues/2173) | Low — closed without merge | Alternative: OTel path |

**Prediction:** v0.2.7 will likely ship with **streaming web chat**, **Gemini MCP fixes**, and **FreeRide tool**; TTS/ASR may slip to v0.2.8 unless gateway integration is expedited.

---

## 7. User Feedback Summary

### Pain Points
- **Configuration fragility:** Multiple auth/config issues (#2578, #1708, #2368, #2105) suggest the config system is error-prone across Docker, Android, and bare-metal
- **Silent failures:** Auth header dropped without error (#2578), cron responses discarded (#1058), model "not configured" with no diagnostics (#2368)
- **Platform gaps:** Windows QQ broken (#2080), Android app immature (#2368)
- **Operational burden:** No self-upgrade (#618), no task cancellation (#2009), opaque agent execution (#571)

### Use Cases
- **Embedded/edge deployment** (Sipeed hardware users): Need robust, self-maintaining agents
- **Multi-channel business automation:** WhatsApp, Telegram, Feishu, QQ — demanding enterprise reliability
- **Local-first AI:** LM Studio integration (#28), local image handling (#2258)

### Satisfaction Signals
- Strong community engagement (logo design participation, memory system proposals)
- Active nightly builds and rapid issue closure rate (67% of updated issues closed)

### Dissatisfaction Signals
- "Stale" label prevalence on open issues suggests maintainer attention gaps
- Multiple 👍0 issues with high comment counts indicate **frustrated but persistent** users

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|---|---|---|---|
| [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio Easy Connect | ~2.5 months | **User onboarding bottleneck** | Champion/mentor for local LLM UX |
| [#618](https://github.com/sipeed/picoclaw/issues/618) Self-upgrade | ~2 months | **Security/maintenance debt** | Packaging infrastructure decision |
| [#629](https://github.com/sipeed/picoclaw/issues/629) LLM retry on failure | ~2 months | **Automation reliability** | Core agent loop modification |
| [#1067](https://github.com/sipeed/picoclaw/issues/1067) Authula integration | ~2 months | **Production security** | Security architecture review |
| [#1731](https://github.com/sipeed/picoclaw/issues/1731) OTel GenAI | ~1.5 months | **Enterprise adoption** | Observability standards commitment |
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) OpenAI Responses API | ~1 month | **API future-proofing** | Technical spike/POC |

**Maintainer Attention Needed:** The `stale` label appears on 10+ significant issues. The project would benefit from a **triage pass** to either commit to or close aging requests, particularly around authentication (#1067) and operational fundamentals (#618, #629).

---

*Digest generated from GitHub activity 2026-04-27 to 2026-04-28. All links reference `https://github.com/sipeed/picoclaw`.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-28

## 1. Today's Overview

NanoClaw shows **high-velocity development activity** with 20 issues and 24 PRs updated in the last 24 hours, split evenly between open and closed/merged items. The project is in a **post-v2 stabilization phase** following the major v2 rewrite released April 22, with significant effort directed at container hardening, setup reliability, and cross-platform compatibility. No new releases were cut today, suggesting maintainers are accumulating fixes before a patch release. The community is actively stress-testing v2's new session-per-thread architecture, surfacing edge cases in scheduling, routing, and platform adapters. Overall project health appears **robust but reactive**—many issues are being closed same-day, though several critical stability problems remain open without assigned fixes.

---

## 2. Releases

**None today.** Latest release remains v2.0.0 (2026-04-22).

---

## 3. Project Progress

### Merged/Closed PRs (12 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#1326](https://github.com/qwibitai/nanoclaw/pull/1326) | kky | **Channel-agnostic voice transcription skill** — adds `src/transcription.ts` with whisper.cpp (local) and OpenAI Whisper API backends, selectable via `TRANSCRIPTION_BACKEND` | Major feature: enables voice input across all messaging channels without per-channel implementation |
| [#987](https://github.com/qwibitai/nanoclaw/pull/987) | daniil-lyalko | **Session size rotation and pre-death memory flush** — caps transcript growth (~55MB/16K lines threshold), flushes memory before forced rotation, prevents silent context loss | Critical reliability fix for long-running production instances |
| [#2059](https://github.com/qwibitai/nanoclaw/pull/2059) | underscorerootword | Claude/modest mahavira a18170 — skill contribution (details minimal) | Community skill expansion |
| [#2050](https://github.com/qwibitai/nanoclaw/pull/2050) | jsboige | **Fix v2/roosync-inbox**: restore TypeScript source + accept in-container bot identity | Fixes `@-mention` wake end-to-end for RooSync dashboard integration |
| [#2049](https://github.com/qwibitai/nanoclaw/pull/2049) | mrakimide | **Add Telegram channel adapter** using `@chat-adapter/telegram` v4.26.0 with pairing flow for security | Major platform expansion; prevents unsolicited access by requiring chat registration |
| [#1997](https://github.com/qwibitai/nanoclaw/pull/1997) | dim0627 | **Parse SQLite datetime() as UTC in host sweep** | Fixes container-killing bug on non-UTC hosts (60s lifecycle loops) |
| [#1912](https://github.com/qwibitai/nanoclaw/pull/1912) | boskodev790 | Handle empty container stdout with clear error in fallback parser | Better error surfacing for failed container spawns |
| [#1913](https://github.com/qwibitai/nanoclaw/pull/1913) | boskodev790 | Rename `@Andy` trigger references when assistant name changes | Completes identity customization for branded deployments |

**Key advancement**: Voice transcription and Telegram adapter significantly expand NanoClaw's addressable use cases, while session rotation and UTC fixes address production scalability blockers.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments/Reactions | Analysis |
|:---|:---|:---|
| [#2029](https://github.com/qwibitai/nanoclaw/issues/2029) — Configurable container resource limits | 3 comments, 👍 0 | **Infrastructure hardening gap**: Production operators need OOM protection against runaway LLM agents (fork bombs, tool recursion). Currently containers run unconstrained. Underlying need: **multi-tenant safety** for shared-host deployments |
| [#2065](https://github.com/qwibitai/nanoclaw/issues/2065) — Telegram reply-to context | 1 comment, closed | **Context fidelity in threaded conversations**: Users expect agents to understand message threading natively. Fixed quickly, indicating maintainer prioritization of UX polish |
| [#2061](https://github.com/qwibitai/nanoclaw/issues/2061) — Scheduler GC for completed one-shot tasks | 1 comment, closed | **Operational hygiene for unattended systems**: Long-running instances accumulate zombie tasks; need automated lifecycle management |
| [#2048](https://github.com/qwibitai/nanoclaw/issues/2048) — `install_packages` approval triggers infinite a2a loop | 0 comments, 👍 1 | **Most upvoted open bug**: Self-routing logic has systemic fragility; the single 👍 suggests users are hitting this but not vocalizing |

### Underlying Community Needs
- **Production safety**: Resource limits + task GC + loop prevention = operators want "set and forget" reliability
- **Platform parity**: Telegram getting fixes while Google Chat missing from setup (#2058) shows uneven channel maturity
- **v2 architectural stress**: Session-bound scheduling (#2067) reveals fundamental design tension in new architecture

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 Critical** | [#2048](https://github.com/qwibitai/nanoclaw/issues/2048) | `install_packages` approval → infinite a2a self-routing loop, **blocks all Telegram delivery** | **No fix PR**; user reports manual workaround |
| **🔴 Critical** | [#2067](https://github.com/qwibitai/nanoclaw/issues/2067) | v2 scheduled tasks are **session-bound**; `list_tasks`/`cancel_task` blind across threads — breaks centralized task management | **No fix PR** |
| **🟡 High** | [#2051](https://github.com/qwibitai/nanoclaw/issues/2051) | `add_mcp_server` stringifies `args` array → **container startup failure** on next agent wake | **No fix PR** |
| **🟡 High** | [#2047](https://github.com/qwibitai/nanoclaw/issues/2047) | Attachments invisible post-migration (WhatsApp): `data/attachments/` not mounted into container | **No fix PR**; reporter identified fix path |
| **🟡 High** | [#2046](https://github.com/qwibitai/nanoclaw/issues/2046) | OneCLI rejects underscore agent IDs → "Not logged in" on every spawn | **No fix PR**; 1-line fix identified |
| **🟡 High** | [#2044](https://github.com/qwibitai/nanoclaw/issues/2044) | Discord `<URL>` → `[URL](URL)` conversion **inverts** preview suppression intent | **No fix PR** |
| **🟢 Medium** | [#2043](https://github.com/qwibitai/nanoclaw/issues/2043) | Telegram `&apos;` over-escaping apostrophes | **No fix PR** |
| **🟢 Medium** | [#2042](https://github.com/qwibitai/nanoclaw/issues/2042) | `add_reaction` fails silently: 3-part `platformId` breaks Telegram `setMessageReaction` | **No fix PR** |
| **🟢 Medium** | [#2041](https://github.com/qwibitai/nanoclaw/issues/2041) | Emoji shortcode normalization incomplete: Slack shortcodes → Unicode mapping gaps | **No fix PR** |

**PR #2063** ([open](https://github.com/qwibitai/nanoclaw/pull/2063)) directly addresses the a2a routing vulnerability class with caps on message volume between source/target pairs, including self-loops.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Container resource limits** (`--memory`, `--cpus`, `--pids-limit`) | [#2029](https://github.com/qwibitai/nanoclaw/issues/2029) | **High** | Production blocker; clear implementation path; 3 comments show demand |
| **Google Chat setup integration** | [#2058](https://github.com/qwibitai/nanoclaw/issues/2058) | **Medium** | One-line addition to picker; adapter exists but setup flow lags |
| **Third-party API/model support** (Chinese request) | [#1930](https://github.com/qwibitai/nanoclaw/issues/1930) | **Medium** | Internationalization pressure; aligns with v2's modular architecture |
| **Signal outbound attachments** | [#2040](https://github.com/qwibitai/nanoclaw/pull/2040) | **High** | PR already open; completes feature parity with other channels |
| **Docker Sandbox readiness** (proxy, CA cert, DinD) | [#2060](https://github.com/qwibitai/nanoclaw/pull/2060) | **High** | Enterprise deployment enabler; 6-patch PR under review |

**Architectural signal**: The session-bound scheduling complaint (#2067) suggests v2 may need a **global task registry** abstraction, not per-session DB rows, for operational tools to work across threads.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Setup friction on non-standard environments** | LXC detection (#2056), systemd installability (#2057), invisible sudo hangs (#2054), `~/.local/bin` PATH (#2055) — **4 stacked PRs from dooha333** | High — fresh installs failing on Proxmox/LXC, IPv4-only LANs (#2045) |
| **v2 migration breakage** | Attachments (#2047), Discord URL handling (#2044), reaction system (#2042, #2041) — regressions in platform adapter behavior | High — existing users hesitant to upgrade |
| **Silent failures** | Reactions fail silently (#2042), scheduler GC missing (#2061), empty stdout parsing (#1912) | Medium — erodes trust in agent reliability |
| **Identity/auth edge cases** | OneCLI underscore/hyphen mismatch (#2046), bot identity in containers (#2050) | Medium — deployment-specific, blocking when hit |

### Positive Signals
- **Voice transcription** (#1326) and **Telegram adapter** (#2049) show healthy platform expansion
- **Same-day fixes** for Telegram reply-to (#2065) and scheduler GC (#2061) demonstrate responsive maintenance
- **Self-modification tools** (`add_mcp_server`, `install_packages`) indicate ambitious agent autonomy, though currently fragile

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1845](https://github.com/qwibitai/nanoclaw/pull/1845) — Normalize auto-generated timestamps to ISO 8601 | 10 days | **Data integrity**: v2 DB uses `2026-04-18 13:29:12` while channels emit ISO 8601; comparison bugs likely | Review/merge; blocks consistent datetime handling |
| [#1930](https://github.com/qwibitai/nanoclaw/issues/1930) — Third-party API/model support | 5 days | **Community growth**: Chinese-language request, no maintainer response | Acknowledge or redirect; accessibility concern |
| [#2033](https://github.com/qwibitai/nanoclaw/pull/2033) — Defer task messages from follow-up polling | 2 days | **Race condition fix**: One-line change, unreviewed | Quick win; prevents task execution timing bugs |
| [#2040](https://github.com/qwibitai/nanoclaw/pull/2040) — Signal outbound attachments | 1 day | **Feature parity**: PR ready, completes channel capability | Review/merge |
| **dooha333's setup fix stack** (#2052→#2054→#2056→#2057, with #2055 independent) | 1 day | **Install funnel**: 4 dependent PRs for LXC/headless setup reliability | Sequential review required; highest-impact for new user acquisition |

**Maintainer attention most needed on**: The dooha333 setup stack (fresh install reliability) and #2048 (infinite loop blocking Telegram, with user-provided fix context but no PR).

---

*Digest generated from qwibitai/nanoclaw GitHub activity for 2026-04-28.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-28

## 1. Today's Overview

IronClaw shows **high velocity but significant stability pressure** heading into late April. The project processed 33 PR updates and 10 issue updates in 24 hours, with a 79% open rate on PRs suggesting substantial in-flight work. The dominant theme is the **"Reborn" architecture migration** — a major foundational refactor being carefully sliced into reviewable PRs. However, three live canary failures on the same commit (`7404e7d`) and multiple V2 engine bugs indicate **regression risk is elevated** as staging churns rapidly. The automated staging promotion pipeline is running hot with 4 promotions in ~4 hours, suggesting either aggressive CI cadence or instability requiring rapid iteration.

---

## 2. Releases

**No new releases** (v0.26.0 appears to be current, with migration issues noted).

---

## 3. Project Progress

### Merged/Closed PRs Today (7 total, 4 shown with significance)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#2989](https://github.com/nearai/ironclaw/pull/2989) | ilblackdragon | **Fix: timezone-aware `threads_today` reset** — Corrects UTC-vs-local date comparison causing missions to stay exhausted up to 17 hours | Fixes critical daily budget bug ([Issue #1945](https://github.com/nearai/ironclaw/issues/1945)) |
| [#2988](https://github.com/nearai/ironclaw/pull/2988) | serrrfirat | **Reborn foundation crates** — Adds `ironclaw_host_api`, `ironclaw_resources`, `ironclaw_architecture` | First slice of major architecture refactor landed |
| [#2994](https://github.com/nearai/ironclaw/pull/2994) | henrypark133 | **Fix v2 `tool_info` action inventory lookup** | Resolves engine-native action discovery |
| [#2978](https://github.com/nearai/ironclaw/pull/2978) | henrypark133 | **Fix bridge restart approval floor** | Tightens v2 permission semantics for `restart` |

### In-Flight Architecture Work
- **PR #2993** ([zmanian](https://github.com/zmanian)): Durable event/audit substrate — "carved from PR2" per integration plan
- **PR #2996** ([serrrfirat](https://github.com/serrrfirat)): Filesystem substrate — second half of PR2, keeping review surface manageable
- **PR #2999** ([serrrfirat](https://github.com/serrrfirat)): Auth control substrate — PR3 carve with DB migration, capability grants/leases

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| **[#2987](https://github.com/nearai/ironclaw/issues/2987)** — Reborn architecture landing strategy | **7 comments**, high risk, docs scope | **Meta-coordination issue** for entire refactor; reveals maintainer concern about reviewability of stacked PRs. The grouped PR plan (PR0 contract freeze → staging → reborn-integration) suggests lessons learned from previous monolithic merges. Community need: **transparent, incremental architecture evolution** |
| **[#2887](https://github.com/nearai/ironclaw/issues/2887)** — Auth Browser Consent canary failure | 1 comment, persistent since April 23 | **Google bot detection blocking CI** — fundamental tension between automated testing and anti-abuse measures. The `try/except: pass` anti-pattern masking failures indicates technical debt in auth error handling |

**Underlying need**: The project is actively managing **complexity at scale** — both architectural (Reborn) and operational (CI reliability). The high comment count on #2987 versus low engagement elsewhere suggests **internal/core contributor coordination dominates** over external community input.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Notes |
|:---|:---|:---|:---|:---|
| **🔴 Critical** | **[#2975](https://github.com/nearai/ironclaw/issues/2975)** — private-oauth canary failed | OPEN | ❌ No | Dedicated runner failure — infrastructure/auth regression |
| **🔴 Critical** | **[#2976](https://github.com/nearai/ironclaw/issues/2976)** — public-smoke canary failed (Anthropic) | OPEN | ❌ No | Provider lane failure on same commit as #2975 |
| **🔴 Critical** | **[#2977](https://github.com/nearai/ironclaw/issues/2977)** — provider-matrix openai-compatible failed | OPEN | ❌ No | Third lane failure on commit `7404e7d` — **systemic CI regression** |
| **🟡 High** | **[#2991](https://github.com/nearai/ironclaw/issues/2991)** — V2 approval flow broken: unclear prompts, wrong routing, sequential execution | OPEN | ❌ No | Bug bash finding; blocks V2 usability — **no assigned fix yet** |
| **🟡 High** | **[#2982](https://github.com/nearai/ironclaw/issues/2982)** — Routine/Mission migration after 0.26.0 upgrade | OPEN | ❌ No | Data classification corruption for existing chats — **upgrade blocker** |
| **🟡 High** | **[#2887](https://github.com/nearai/ironclaw/issues/2887)** — Google bot detection on CI | OPEN | ❌ No | Auth testing reliability; bare `try/except` masking |
| **🟢 Medium** | **[#2833](https://github.com/nearai/ironclaw/issues/2833)** — Cross-conversation response contamination | OPEN | ❌ No | UX-breaking: reasoning tasks leak between switched conversations |

**Stability assessment**: Three simultaneous canary failures on identical commit suggests **staging is not production-ready**. The V2 engine specifically shows multiple approval/routing/migration defects — likely **not safe for general use** despite being in staging.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|:---|:---|:---|
| **Reborn architecture completion** | #2987, #2988, #2993, #2996, #2999 | **High** — actively sliced and landing; likely 0.27.0 or major minor |
| **Aliyun Coding Plan support** | [PR #1446](https://github.com/nearai/ironclaw/pull/1446) (XL, since March 20) | **Medium** — large PR, new contributor, extensive scope; may slip |
| **Codex base model integration** | [Issue #1697](https://github.com/nearai/ironclaw/issues/1697) | **Medium** — user-confusion on model naming ("Plus", "GPT-5.4 mini") suggests documentation gap, not just code |
| **External tool registrar for forks** | [PR #2871](https://github.com/nearai/ironclaw/pull/2871) | **High** — regular contributor, scoped M, addresses downstream need |
| **Deploy infrastructure (AGENTS_SEED_PATH, etc.)** | [PR #2925](https://github.com/nearai/ironclaw/pull/2925) | **High** — consolidates multiple stale PRs, no user-facing changes = easier merge |

**Prediction**: Next release will likely be **0.27.0** focused on Reborn substrate stabilization, with Aliyun support and deploy infra as secondary features. V2 engine fixes may warrant **0.26.1 hotfix** given migration bugs.

---

## 7. User Feedback Summary

### Pain Points (from issues)

| Issue | User | Core Problem |
|:---|:---|:---|
| **[#1697](https://github.com/nearai/ironclaw/issues/1697)** | YANGTUOMAO | **Model configuration opacity** — "Plus" and "GPT-5.4 mini" don't map to expected `model name` format; CLI gives no guidance |
| **[#2982](https://github.com/nearai/ironclaw/issues/2982)** | sunglow666 | **Upgrade fragility** — 0.24.0→0.26.0 misclassifies existing Routine chats as Missions; **data integrity concern** |
| **[#2991](https://github.com/nearai/ironclaw/issues/2991)** | joe-rlo | **V2 approval UX broken** — "unclear prompts, wrong routing, forces sequential execution" — **workflow disruption** |
| **[#2833](https://github.com/nearai/ironclaw/issues/2833)** | sunglow666 | **Context isolation failure** — conversation switching leaks responses; **trust/expectation violation** |

### Satisfaction Signals
- Active bug bash ([#2991](https://github.com/nearai/ironclaw/issues/2991)) suggests **engaged QA process**
- Rapid fix for #1945 (merged same day as reported) shows **responsive critical bug handling**

### Dissatisfaction Signals
- **No releases** despite high PR velocity — users may perceive stagnation
- Migration bugs suggest **0.26.0 release was premature** or lacked sufficient upgrade testing

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| **[PR #1446](https://github.com/nearai/ironclaw/pull/1446)** — Aliyun Coding Plan | **39 days open**, XL size | **Contributor attrition** | Needs maintainer review prioritization or scope reduction; new contributor may abandon |
| **[Issue #2887](https://github.com/nearai/ironclaw/issues/2887)** — Google bot detection | **5 days**, auth critical path | **CI reliability degradation** | Requires infrastructure decision: dedicated non-CI auth testing, or Google workspace arrangement |
| **[Issue #1697](https://github.com/nearai/ironclaw/issues/1697)** — Codex model naming | **32 days**, 1 comment | **User onboarding friction** | Simple docs/CLI fix; low effort, high user impact — **quick win available** |
| **[PR #2948](https://github.com/nearai/ironclaw/pull/2948)** — Database docs | **4 days**, docs-only | **Documentation debt** | Dual-backend system completely undocumented; blocks contributor onboarding |

**Maintainer attention recommended**: 
- **Immediate**: Triaging three canary failures on `7404e7d` — revert or fix-forward?
- **This week**: #1446 decision (merge, split, or close) and #1697 quick documentation fix
- **Ongoing**: V2 engine stabilization before promoting beyond staging

---

*Digest generated from GitHub activity 2026-04-27 to 2026-04-28. All links reference `https://github.com/nearai/ironclaw`.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-28

## 1. Today's Overview

LobsterAI shows **high development velocity** with 38 PRs updated in the last 24 hours (24 merged/closed, 14 open) and 7 active issues. The project is in a **bug-fixing and stability-hardening phase**, with a major release (2026.4.25) shipping just three days prior. Core themes today include **security hardening** (log redaction, IPC access controls, URL scheme validation), **model provider reliability** (DeepSeek V4 compatibility, custom provider fixes), and **startup/initialization resilience** (timeout increases, diagnostics). Community engagement is moderate with several long-standing issues still awaiting resolution.

---

## 2. Releases

### [LobsterAI 2026.4.25](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.25) (2026-04-25)

| Change | Author | PR |
|--------|--------|-----|
| **Fix**: Restore DiffView for edit tool's `edits-array` input format in cowork mode | @btc69m979y-dotcom | [#1814](https://github.com/netease-youdao/LobsterAI/pull/1814) |
| **Feat**: Add embedding configuration for memory search in settings | @btc69m979y-dotcom | — |

**Assessment**: Minor release focused on cowork mode reliability and memory search configurability. No breaking changes noted. The embedding config addition suggests expanding RAG/memory capabilities.

---

## 3. Project Progress

### Merged/Closed PRs (24 total — selected highlights)

| PR | Author | Focus | Significance |
|----|--------|-------|------------|
| [#1847](https://github.com/netease-youdao/LobsterAI/pull/1847) | @fisherdaddy | **Fix DeepSeek V4 custom provider compatibility** | Resolves model schema rejection issues |
| [#1846](https://github.com/netease-youdao/LobsterAI/pull/1846) | @liuzhq1986 | Startup diagnostics: 15s/10s timeouts, renderer→main logging | Addresses Windows startup failures |
| [#1845](https://github.com/netease-youdao/LobsterAI/pull/1845) | @liuzhq1986 | Prevent session `modelOverride` from normalization rewrite | Fixes parallel session model sharing bug |
| [#1844](https://github.com/netease-youdao/LobsterAI/pull/1844) | @btc69m979y-dotcom | **Security**: Log redaction for API keys, auth tokens (`serializeForLog`) | Major security improvement |
| [#1843](https://github.com/netease-youdao/LobsterAI/pull/1843) | @liuzhq1986 | Persist model override in SQLite at session creation | Data integrity fix |
| [#1842](https://github.com/netease-youdao/LobsterAI/pull/1842) | @liuzhq1986 | Graceful fallback for stale/invalid model references | UX improvement, reduces blocking errors |
| [#1841](https://github.com/netease-youdao/LobsterAI/pull/1841) | @liuzhq1986 | NSIS installer exit code fix (IntCmp vs StrCmp) | Windows installation reliability |
| [#1840](https://github.com/netease-youdao/LobsterAI/pull/1840) | @liuzhq1986 | Fix `updateConfig` read-modify-write race condition | Prevents provider config loss |
| [#1839](https://github.com/netease-youdao/LobsterAI/pull/1839) | @winsan-zhang | Enterprise multi-account OpenClaw config sync | Enterprise feature |
| [#1838](https://github.com/netease-youdao/LobsterAI/pull/1838) | @btc69m979y-dotcom | Stamp `meta` on `openclaw.json` to prevent clobbered snapshots | Fixes config file accumulation bug |
| [#1837](https://github.com/netease-youdao/LobsterAI/pull/1837) | @liugang519 | Gateway restart unified debug logging | Observability improvement |
| [#1834](https://github.com/netease-youdao/LobsterAI/pull/1834) | @btc69m979y-dotcom | Upgrade `openclaw-weixin` 2.1.7→2.1.10, add patches | IM integration stability |

**Key Advancements**: 
- **Model system reliability**: 4 PRs addressing model resolution, persistence, and provider normalization
- **Security posture**: Log redaction, IPC hardening, URL validation (3 PRs)
- **Windows stability**: Installer fixes, startup diagnostics, timeout increases

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Status | Comments | Core Problem |
|-------|--------|----------|--------------|
| [#73](https://github.com/netease-youdao/LobsterAI/issues/73) **"根本用不了" (Completely unusable)** | 🔴 OPEN, stale | **10** | 404 error from Claude agent SDK — fundamental breakage for some users |
| [#100](https://github.com/netease-youdao/LobsterAI/issues/100) **DMG packaging fails** | 🔴 OPEN, stale | 3 | Electron-builder misconfiguration on macOS (`main.js` missing in ASAR) |
| [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) **DeepSeek V4: "provider rejected request schema"** | 🔴 OPEN | 3 | LLM tool payload incompatibility — **fix PR #1847 merged today** |

### Underlying Needs Analysis

- **#73**: Critical reliability gap — users experiencing total failure with cryptic SDK errors. 10 comments with no resolution suggests **escalation needed**.
- **#100**: macOS build pipeline is broken for self-builders; blocks contributor onboarding and custom distribution.
- **#1813**: Rapid response (issue opened 4/24, fix merged 4/27) shows team prioritizes **model provider compatibility** for popular models.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| 🔴 **Critical** | [#73](https://github.com/netease-youdao/LobsterAI/issues/73) | Complete app failure (404 Claude SDK) | ❌ Unresolved, 2+ months stale |
| 🔴 **Critical** | [#17](https://github.com/netease-youdao/LobsterAI/issues/17) | Startup dead loop (skill services) | ❌ Unresolved, 2+ months stale |
| 🟡 **High** | [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) | DeepSeek V4 schema rejection | ✅ **Fixed in #1847** |
| 🟡 **High** | [#100](https://github.com/netease-youdao/LobsterAI/issues/100) | macOS DMG build failure | ❌ Unresolved |
| 🟡 **High** | [#106](https://github.com/netease-youdao/LobsterAI/issues/106) | Custom model invocation fails | ❌ Unresolved, 2+ months stale |
| 🟢 **Medium** | [#955](https://github.com/netease-youdao/LobsterAI/issues/955) | Private-deployed Qwen3 skill failures | ✅ Closed (workaround or fix applied) |
| 🟢 **Medium** | [PR #1846](https://github.com/netease-youdao/LobsterAI/pull/1846) | Windows startup timeouts/races | ✅ Merged (15s timeout + diagnostics) |

**Regression Watch**: The rapid merge of #1847 for DeepSeek V4 suggests this was a **post-release regression** from 2026.4.25 changes. The 4 model-related PRs today indicate systemic model resolution fragility.

---

## 6. Feature Requests & Roadmap Signals

| Source | Request | Likelihood in Next Release |
|--------|---------|---------------------------|
| [#1836](https://github.com/netease-youdao/LobsterAI/issues/1836) **UI redesign** | Professional design overhaul — "too ugly vs competitors" | Medium — high user sentiment, but resource-intensive |
| [PR #1527](https://github.com/netease-youdao/LobsterAI/pull/1527) | **AI diagnosis for email connection failures** | High — open PR, active development |
| [PR #1519](https://github.com/netease-youdao/LobsterAI/pull/1519) | **Custom Cron scheduling for tasks** | High — open PR, well-scoped |
| [PR #1511](https://github.com/netease-youdao/LobsterAI/pull/1511) | Required field indicators in forms | Medium — open PR, UX polish |
| Release 2026.4.25 | Embedding config for memory search | ✅ Shipped — signals **RAG/memory expansion** |

**Predicted Next Release Themes**: 
- Task scheduling enhancements (Cron)
- Email/IM integration robustness with AI-assisted troubleshooting
- Continued security hardening (in-progress PRs #1832, #1833)
- Possible UI/UX investments if #1836 gains traction

---

## 7. User Feedback Summary

### Pain Points

| Issue | Frequency | Sentiment |
|-------|-----------|-----------|
| **Complete unusability** (#73, #17) | Recurring | 😠 Frustrated — no response for months |
| **Model compatibility** (#1813, #106, #955) | Common | 😤 Blocked workflows — mixed resolution speed |
| **Build/packaging** (#100) | Moderate | 😠 Blocks macOS contributors |
| **UI aesthetics** (#1836) | Emerging | 😒 Competitive disadvantage |

### Positive Signals
- **Rapid fix for DeepSeek V4** (#1813 → #1847 in 3 days) shows responsiveness to popular model issues
- **Security investments** indicate enterprise-readiness
- **Cowork mode** improvements (DiffView, model persistence) suggest active refinement of core differentiator

### Use Case Gaps
- Private model deployment (#955, #106) — partially addressed but not fully resolved
- macOS ecosystem support (#100) — neglected vs Windows focus

---

## 8. Backlog Watch

### Critical Attention Needed

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#73](https://github.com/netease-youdao/LobsterAI/issues/73) "根本用不了" | **67 days** | User abandonment, negative word-of-mouth | Triage: SDK version mismatch or auth config? |
| [#17](https://github.com/netease-youdao/LobsterAI/issues/17) Startup dead loop | **67 days** | Core functionality broken | Reproduce with skill services logs |
| [#100](https://github.com/netease-youdao/LobsterAI/issues/100) DMG build failure | **62 days** | macOS contributor exodus | Electron-builder config audit |
| [#106](https://github.com/netease-youdao/LobsterAI/issues/106) Custom model fails | **62 days** | Power user feature broken | Related to #1845/#1843 fixes? Verify |

### Security PRs Awaiting Merge

| PR | Focus | Urgency |
|----|-------|---------|
| [#1833](https://github.com/netease-youdao/LobsterAI/pull/1833) | `shell.openExternal` scheme whitelist | **High** — XSS/Local file exposure |
| [#1832](https://github.com/netease-youdao/LobsterAI/pull/1832) | `store:*` IPC access control | **High** — Token theft risk |
| [#1831](https://github.com/netease-youdao/LobsterAI/pull/1831) | IM/main process log redaction | **High** — Credential leakage |

---

## Project Health Assessment

| Metric | Score | Note |
|--------|-------|------|
| Development Velocity | ⭐⭐⭐⭐⭐ | 38 PRs/day, rapid merges |
| Issue Responsiveness | ⭐⭐⭐☆☆ | Fast for new issues, stale backlog neglected |
| Security Maturity | ⭐⭐⭐⭐☆ | Proactive hardening, but gaps being closed reactively |
| Cross-Platform Support | ⭐⭐⭐☆☆ | Windows-prioritized; macOS issues languishing |
| Community Satisfaction | ⭐⭐⭐☆☆ | Functional when working, but "unusable" reports and UI complaints |

**Verdict**: LobsterAI is **technically active and improving rapidly** but carries **significant reliability debt** in stale issues. The security push this week is commendable and necessary for enterprise credibility. Addressing the 2-month-old critical failures (#73, #17) should be the top priority to prevent user churn.

---

*Digest generated from GitHub activity 2026-04-27. All links: https://github.com/netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-28

## 1. Today's Overview

Moltis demonstrated **exceptionally high development velocity** over the past 24 hours with **15 PRs updated** (12 merged/closed, 3 open) and **5 issues processed** (4 closed, 1 open). No new releases were cut, suggesting the team is in an active integration phase. The activity pattern reveals focused effort on three fronts: **code indexing automation**, **modular channel architecture** (making integrations optional), and **UI/UX polish**. The rapid closure of 4 duplicate/iterative PRs for auto-indexing (#900-#902) indicates iterative refinement of a major feature before finalizing #903. Overall project health appears strong with quick turnaround on bugs and active community contribution from multiple developers.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Major Features Advanced

| PR | Description | Status | Link |
|:---|:---|:---|:---|
| **#903** | **Auto-trigger code indexing with deduplication and file watchers** — Foundation with `IndexJobManager`, per-project job queues, debouncing, file system watchers; eliminates manual index operations | **OPEN** (final iteration) | [moltis-org/moltis#903](https://github.com/moltis-org/moltis/pull/903) |
| **#904** | **Command palette (Cmd+K/Ctrl+K)** — Universal navigation overlay with debounced session search, keyboard-first UX | **OPEN** | [moltis-org/moltis#904](https://github.com/moltis-org/moltis/pull/904) |
| **#899** | **Optional Discord and MS Teams channels** — Compile-time feature gating following Telegram pattern (#891) | **OPEN** | [moltis-org/moltis#899](https://github.com/moltis-org/moltis/pull/899) |

### Merged/Closed PRs (12 items)

| PR | Description | Significance | Link |
|:---|:---|:---|:---|
| #898 | Simplify primary agent/agents architecture | **Breaking architectural change** — removes "primary identity" concept, makes "main" agent a real DB row; implements #774 | [moltis-org/moltis#898](https://github.com/moltis-org/moltis/pull/898) |
| #895 | Stop committing generated frontend assets | **DevEx improvement** — removes ~92K lines from git, adds compile-time checks and unified build script | [moltis-org/moltis#895](https://github.com/moltis-org/moltis/pull/895) |
| #897 | Show RPC error messages in skills UI + auto-trust on install | UX fix for "Failed: [object Object]" bug; streamlines skill installation flow | [moltis-org/moltis#897](https://github.com/moltis-org/moltis/pull/897) |
| #894 | Regression test: hook circuit breaker vs Block actions | Security-critical — proves `Block` (exit 1) never trips circuit breaker; closes #547 | [moltis-org/moltis#894](https://github.com/moltis-org/moltis/pull/894) |
| #893 | Fix Matrix OIDC redirect URI for reverse proxies | Fixes `invalid_redirect_uri` behind reverse proxies; uses `ApplicationType::Web` for non-loopback | [moltis-org/moltis#893](https://github.com/moltis-org/moltis/pull/893) |
| #892 | Restore session name and inline rename in chat toolbar | Regression fix from #886; restores lost UX | [moltis-org/moltis#892](https://github.com/moltis-org/moltis/pull/892) |
| #890, #889, #891 | Make Telegram channel optional (3 duplicate PRs, merged #891) | Modular architecture — reduces binary size/build time when Telegram unused | [moltis-org/moltis#891](https://github.com/moltis-org/moltis/pull/891) |
| #900-#902 | Auto-trigger indexing (iterative drafts) | Superseded by #903 | — |

---

## 4. Community Hot Topics

### Most Active Discussion: Agent Architecture Simplification (#774 / #898)

| Metric | Value |
|:---|:---|
| Issue #774 | [moltis-org/moltis#774](https://github.com/moltis-org/moltis/issues/774) |
| Implementing PR #898 | [moltis-org/moltis#898](https://github.com/moltis-org/moltis/pull/898) |
| Comments | 1 on issue, merged same day |

**Underlying need:** Users find the "primary agent" concept confusing and constraining. The community wants **flexible, first-class multi-agent routing** without special-cased "main" identity. This reflects broader market demand for agent orchestration that scales beyond single-agent patterns.

### High-Visibility UI Regression (#888 / #892)

| Metric | Value |
|:---|:---|
| Issue #888 | [moltis-org/moltis#888](https://github.com/moltis-org/moltis/issues/888) |
| Fix PR #892 | [moltis-org/moltis#892](https://github.com/moltis-org/moltis/pull/892) |
| Turnaround | ~1 day |

**Underlying need:** Users depend on session management for workflow organization. The rapid fix indicates strong maintainer responsiveness to UX regressions.

### Iterative Feature Development: Auto-Indexing (#900-#903)

**4 PRs in 24 hours** for the same feature suggests either:
- Active pair programming / maintainer co-development with contributor `Cstewart-HC`
- CI-driven iteration (failures triggering rapid respins)
- Feature importance justifying focused attention

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status | Link |
|:---|:---|:---|:---|:---|
| **🔴 High** | #896 | Docker build fails: DNS resolution failure for `ports.ubuntu.com` during `apt-get update` | **OPEN** — no fix PR yet | [moltis-org/moltis#896](https://github.com/moltis-org/moltis/issues/896) |
| 🟡 Medium | #888 → #892 | Session name/rename removed in #886 — UI regression | **FIXED** (#892 merged) | [moltis-org/moltis#888](https://github.com/moltis-org/moltis/issues/888) · [moltis-org/moltis#892](https://github.com/moltis-org/moltis/pull/892) |
| 🟡 Medium | #317 | Jinja Exception: "System message must be at the beginning" | **CLOSED** (likely fixed by architecture changes in #898) | [moltis-org/moltis#317](https://github.com/moltis-org/moltis/issues/317) |
| 🟢 Low (security-critical design) | #547 → #894 | Hook circuit breaker may disable security hooks via intentional `exit 1` blocks | **FIXED** — regression test added, design documented | [moltis-org/moltis#547](https://github.com/moltis-org/moltis/issues/547) · [moltis-org/moltis#894](https://github.com/moltis-org/moltis/pull/894) |

### Stability Assessment
- **Positive:** Security hook circuit breaker behavior is now tested and documented (#894)
- **Concern:** Docker build reliability (#896) affects onboarding; likely infrastructure/DNS caching issue but needs attention
- **Pattern:** Rapid regression fixes (#886→#892) suggest UI changes need stronger visual regression testing

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Auto-triggered code indexing** | #903 (open), #900-902 (drafts) | **Very High** | Multiple iterations, foundational infrastructure merged; final PR active |
| **Command palette** | #904 (open) | **High** | Self-contained UX improvement, low risk |
| **Optional Discord/MS Teams** | #899 (open), pattern from #891 | **High** | Follows established pattern; community wants modular builds |
| **Optional channels for all platforms** | #891, #899 | **Trend** | Clear architectural direction toward compile-time feature selection |
| **Agent architecture simplification** | #774, #898 (merged) | **Shipped** | Already merged; documentation needed for migration |

### Predicted Next Release Themes
1. **Developer experience:** Auto-indexing eliminates manual steps
2. **Deployment flexibility:** Smaller binaries via optional channels
3. **Power user UX:** Command palette for keyboard-driven workflows

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Impact | Frequency Signal |
|:---|:---|:---|
| Docker build failures (#896) | Blocks new user onboarding | Single report, but critical path |
| Confusing "primary agent" concept (#774) | Cognitive overhead, limited routing flexibility | Long-standing issue (created 2026-04-17) |
| Jinja template system message ordering (#317) | Breaks prompt templates | Older issue, possibly resolved by architecture changes |
| UI regressions in rapid releases (#888) | Lost functionality, trust erosion | Fast fix mitigates, but pattern concerns |

### Positive Signals
- **Responsive maintainers:** 1-day turnaround on UI regression (#888→#892)
- **Security-conscious design:** Circuit breaker behavior explicitly tested for security hook preservation (#894)
- **Modularity appreciated:** Optional channel pattern being extended indicates user demand for lean deployments

### Use Case Evolution
Users are pushing Moltis toward **production multi-agent deployments** — the architecture simplification (#898) and auto-indexing (#903) both reduce operational complexity at scale.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| **#896 Docker build failure** | 1 day | **🔴 High** — blocks new users, no comments from maintainers | Maintainer triage; likely DNS/networking configuration fix or documentation |
| #774 Agent simplification | 10 days | Resolved by #898 | Close/update issue to reflect merge |
| #547 Circuit breaker security | 24 days | Resolved by #894 | Verify issue auto-close or manual close |

### Maintainer Attention Required
- **#896** needs urgent response — no maintainer comment, only 1 community comment; Docker builds are critical path for adoption
- **Pattern:** The 4 iterative auto-indexing PRs (#900-#903) suggest either contributor coaching needed or CI environment issues causing repeated submissions

---

*Digest generated from GitHub activity data for moltis-org/moltis on 2026-04-28.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-28

## 1. Today's Overview

CoPaw/QwenPaw maintains **very high development velocity** with 50 issues and 43 PRs updated in the last 24 hours, split evenly between open/active and closed items. No new release was cut today, though a version bump to `1.1.4.post3` was merged ([PR #3879](https://github.com/agentscope-ai/QwenPaw/pull/3879)). The project shows strong community engagement with multiple first-time contributors landing fixes across channels (QQ, Feishu) and core infrastructure. However, **stability concerns are mounting**: critical bugs around session persistence, pause functionality, and ChromaDB segfaults remain unresolved, while configuration loss regressions in v1.1.4 continue to generate user reports. The maintainers appear focused on incremental channel fixes and UI polish rather than addressing deeper architectural issues with state management and memory persistence.

---

## 2. Releases

**None today.**

The latest merged version bump ([PR #3879](https://github.com/agentscope-ai/QwenPaw/pull/3879)) to `1.1.4.post3` suggests a patch release is imminent, but no official release notes or GitHub release was published as of 2026-04-28.

---

## 3. Project Progress

### Merged/Closed PRs (25 total; key items)

| PR | Description | Significance |
|:---|:---|:---|
| [#3879](https://github.com/agentscope-ai/QwenPaw/pull/3879) | Version bump to `1.1.4.post3` | Routine patch preparation |
| [#3877](https://github.com/agentscope-ai/QwenPaw/pull/3877) | Fix CI integration test directory path | Infrastructure health |
| [#3874](https://github.com/agentscope-ai/QwenPaw/pull/3874) | Refine model retry logic | Reliability improvement for LLM calls |
| [#3887](https://github.com/agentscope-ai/QwenPaw/pull/3887) | QQ channel: distinguish voice messages from regular audio | **First-time contributor**; fixes message type mapping |
| [#3881](https://github.com/agentscope-ai/QwenPaw/pull/3881) | Website footer: add WeChat and QR code | Community/outreach |
| [#3880](https://github.com/agentscope-ai/QwenPaw/pull/3880) | Rename WeChat display name in CLI channel list | UX consistency |
| [#3872](https://github.com/agentscope-ai/QwenPaw/pull/3872) | QQ channel: reconnect on recoverable WebSocket aborts | **First-time contributor**; fixes WinError 10053/10054/10060 crashes |
| [#3834](https://github.com/agentscope-ai/QwenPaw/pull/3834) | Fix ACP config inheritance in fallback agent profile | Fixes `opencode` command resolution bug |
| [#3726](https://github.com/agentscope-ai/QwenPaw/pull/3726) | Revert "warn when console frontend build is outdated" | Removes noisy startup warning |
| [#3638](https://github.com/agentscope-ai/QwenPaw/pull/3638) | Clean up build directory after pip install in Dockerfile | **First-time contributor**; reduces image size |
| [#3629](https://github.com/agentscope-ai/QwenPaw/pull/3629) | Add progress observing hook and PlanNotebook config (closed) | Task progress tracking infrastructure — **superseded by PR #3889** |

### Open PRs Under Active Review

| PR | Description | Status |
|:---|:---|:---|
| [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) | Async LLM-generated session titles | Under review — replaces placeholder truncation |
| [#3889](https://github.com/agentscope-ai/QwenPaw/pull/3889) | Live inter-agent task progress via ProgressObservingHook | New today — advances monitoring infrastructure |
| [#3882](https://github.com/agentscope-ai/QwenPaw/pull/3882) | Light context manager with compaction fallback | Refactor — addresses memory/state management |
| [#3848](https://github.com/agentscope-ai/QwenPaw/pull/3848) | Harden context compaction fallback handling | **First-time contributor** — prevents destructive compaction failures |
| [#3845](https://github.com/agentscope-ai/QwenPaw/pull/3845) | QQ audio message mapping + SILK format support | **First-time contributor** — expands voice message support |
| [#3890](https://github.com/agentscope-ai/QwenPaw/pull/3890) | Feishu: no-op handlers for reaction events | **First-time contributor** — silences log spam |
| [#3876](https://github.com/agentscope-ai/QwenPaw/pull/3876) | Searchable flat model selector with provider grouping | UX redesign — aligns with Cherry Studio, OpenCode patterns |
| [#3793](https://github.com/agentscope-ai/QwenPaw/pull/3793) | Fix indentation bug in `rebuild_sys_prompt` | **First-time contributor** — fixes premature loop exit |
| [#3885](https://github.com/agentscope-ai/QwenPaw/pull/3885) | Improve backup/restore error logging with stack traces | Observability enhancement |

---

## 4. Community Hot Topics

### Most Active Issues by Comment Count

| Issue | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#3709](https://github.com/agentscope-ai/QwenPaw/issues/3709) | 9 | Safeguard rule `TOOL_CMD_IFS_INJECTION` still blocks after disable | **Trust/control tension**: Users need granular security policy override with clear feedback loops; current UX is opaque |
| [#3753](https://github.com/agentscope-ai/QwenPaw/issues/3753) | 7 | When will Volcano Coding Plan be supported by default? | **Vendor ecosystem expansion**: Users want out-of-box integration with ByteDance/Volcano engine |
| [#3430](https://github.com/agentscope-ai/QwenPaw/issues/3430) | 7 | QwenPaw vs CoPaw relationship — joint maintenance? | **Project identity confusion**: Brand unification/clarification needed; "QwenPaw" appears to be product name, "CoPaw" the open-source project |
| [#3705](https://github.com/agentscope-ai/QwenPaw/issues/3705) | 6 | ACP coding agent operations randomly cancelled | **Orchestration reliability**: External agent delegation is fragile; permission handshake fails silently |
| [#3716](https://github.com/agentscope-ai/QwenPaw/issues/3716) | 6 | OpenCode not working in ACP | **Interoperability**: MCP/ACP protocol compatibility gaps with third-party agents |
| [#3869](https://github.com/agentscope-ai/QwenPaw/issues/3869) | 6 | Channel-side high-risk command approval (not just Web UI) | **Mobile/remote operations**: Tool Guard's Web-only approval breaks channel workflows; need magic-command approval for SSH/Discord/WeChat |

### Key Insight: Configuration Persistence Crisis

Issues [#3824](https://github.com/agentscope-ai/QwenPaw/issues/3824), [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817), and [#3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) form a **cluster of state management failures** in v1.1.4:
- Agent config (language, plan mode, LLM settings) lost on refresh/restart
- Vector model `base_url`/`model_name` reset to empty strings on container restart
- Model settings save causes page freeze on Debian 12 (non-root)

Root cause appears to be **initialization logic overwriting `agent.json`** with empty defaults ~4 seconds after startup ([#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) includes detailed analysis).

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) | ChromaDB Rust binding segfault (SIGSEGV) kills entire process — 45+ times/session | **No fix PR**; needs safer default or graceful fallback |
| 🔴 **Critical** | [#3850](https://github.com/agentscope-ai/QwenPaw/issues/3850) | Web UI pause button only stops frontend SSE rendering; backend Agent continues executing | **No fix PR**; "pause" is cosmetic only |
| 🔴 **Critical** | [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) | Session history disappears, new messages routed to different session | **No fix PR**; data loss scenario |
| 🟡 **High** | [#3871](https://github.com/agentscope-ai/QwenPaw/issues/3871) | Agent infinite "Thinking" state after response complete (SSE stream not closing) | **No fix PR**; requires manual session stop |
| 🟡 **High** | [#3824](https://github.com/agentscope-ai/QwenPaw/issues/3824) | All agent config lost on toggle/refresh/service restart (v1.1.4.post1) | **No fix PR**; regression in latest version |
| 🟡 **High** | [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) | Long-term memory vector model config reset on container restart | **No fix PR**; root cause identified by community |
| 🟡 **High** | [#3822](https://github.com/agentscope-ai/QwenPaw/issues/3822) | MCP causes infinite chat hang — `stateful_client.py` lifecycle error | **No fix PR**; requires manual stop |
| 🟡 **High** | [#3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) | Debian 12: page freeze on model settings save, requires service restart | **No fix PR**; works under root (permission issue suspected) |
| 🟢 **Medium** | [#3499](https://github.com/agentscope-ai/QwenPaw/issues/3499) | API response latency highly variable (`/api/models`) | **No fix PR** |
| 🟢 **Medium** | [#3830](https://github.com/agentscope-ai/QwenPaw/issues/3830) | Console GUI performance degradation on Windows (long chat sessions) | **No fix PR** |
| 🟢 **Medium** | [#3795](https://github.com/agentscope-ai/QwenPaw/issues/3795) | Frequent 422 `MODEL_EXECUTION_FAILED` on complex operations | **No fix PR** |

### Regression Pattern: v1.1.4 Series

Multiple reports indicate **v1.1.4 introduced state persistence regressions** not present in earlier versions. The rapid patch releases (`.post1`, `.post2`, `.post3`) suggest reactive hotfixing without addressing root causes.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| [#3869](https://github.com/agentscope-ai/QwenPaw/issues/3869) | Channel-side high-risk command approval (magic commands) | **High** | Directly impacts channel usability; aligned with PRs #3889 (progress hooks) and #3882/#3848 (context management) |
| [#3804](https://github.com/agentscope-ai/QwenPaw/issues/3804) | Proactive messages to custom channels (Feishu, DingTalk, not just Console) | **Medium-High** | Channel infrastructure is active development area; Feishu/QQ fixes suggest investment |
| [#3366](https://github.com/agentscope-ai/QwenPaw/issues/3366) | Real-time Token consumption display (like HerMES Agent) | **Medium** | Clear UX value; requires instrumentation hooks in LLM providers |
| [#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) | Apple Silicon ARM support for `browser_use` tool | **Medium** | Platform parity; Playwright config change |
| [#406](https://github.com/agentscope-ai/QwenPaw/issues/406) | GitHub Copilot model support | **Low-Medium** | Referenced as "OpenClaw already supports"; may depend on external negotiation |
| [#3753](https://github.com/agentscope-ai/QwenPaw/issues/3753) | Volcano Coding Plan default support | **Unclear** | Vendor-specific; depends on partnership |

### Infrastructure Signals

- **Progress observing hooks** (PRs #3629 → #3889) suggest upcoming task monitoring/observability features
- **Context compaction fallback** (PRs #3882, #3848) indicates memory management is being hardened for longer conversations
- **Searchable model selector** (PR #3876) shows UX alignment with mainstream tools (Cherry Studio, OpenCode)

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Category | Quote/Theme | Frequency |
|:---|:---|:---|
| **Configuration fragility** | "配置信息全部丢掉" / "每次容器重启后...被重置为空字符串" | Very High |
| **False sense of control** | "暂停按钮仅前端止渲染，后端 Agent 继续执行" | High |
| **Session integrity** | "聊天历史突然消失...窗口变成空白新会话" | High |
| **Platform-specific breakage** | "Debian...页面冻结" / "Windows客户端打开白屏" | Medium |
| **Integration complexity** | "MCP造成聊天端无限卡死" / "opencode not working in ACP" | Medium |
| **Performance at scale** | "长会话浏览切换越来越不响应" | Medium |

### Satisfaction Drivers

- **Channel diversity**: Active fixes for QQ, Feishu, WeChat show commitment to Chinese enterprise messaging ecosystems
- **First-time contributor friendliness**: Multiple merged PRs from new contributors (#3887, #3872, #3890, #3638)
- **Rapid patch cadence**: `.post1`, `.post2`, `.post3` releases show responsiveness (though quality control questioned)

### Dissatisfaction Drivers

- **"Cosmetic" features over fundamentals**: Users note Web UI polish while core state management fails
- **Opaque error handling**: 422 errors, segfaults, infinite hangs without actionable diagnostics
- **Security UX friction**: Tool Guard blocks legitimate workflows; disabled rules still enforced

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>7 days old, unresolved, high impact)

| Issue | Age | Problem | Risk if Unaddressed |
|:---|:---|:---|:---|
| [#3430](https://github.com/agentscope-ai/QwenPaw/issues/3430) | 13 days | QwenPaw/CoPaw branding confusion | Community fragmentation; contribution friction |
| [#3499](https://github.com/agentscope-ai/QwenPaw/issues/3499) | 12 days | API latency variability | Perceived unreliability; affects all integrations |
| [#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) | 28 days | No Apple Silicon support for browser automation | Excludes growing Mac developer segment |
| [#406](https://github.com/agentscope-ai/QwenPaw/issues/406) | 56 days | GitHub Copilot model support | Competitive gap vs. OpenClaw |

### PRs Stalled in Review

| PR | Age | Blocker |
|:---|:---|:---|
| [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) | 3 days | Async session title generation — design review pending |
| [#3848](https://github.com/agentscope-ai/QwenPaw/pull/3848) | 2 days | Context compaction fallback — complex state machine needs careful review |
| [#3793](https://github.com/agentscope-ai/QwenPaw/pull/3793) | 4 days | Simple indentation fix — should be quick merge |

---

## Project Health Assessment

| Metric | Score | Note |
|:---|:---|:---|
| **Activity** | ⭐⭐⭐⭐⭐ | 93 items updated in 24h |
| **Contributor Growth** | ⭐⭐⭐⭐⭐ | 5+ first-time contributors active |
| **Release Stability** | ⭐⭐⭐☆☆ | Rapid patches suggest reactive mode |
| **Issue Resolution** | ⭐⭐⭐⭐☆ | 50% close rate, but critical bugs persist |
| **Communication** | ⭐⭐⭐☆☆ | Brand confusion (#3430) unanswered; no release notes |

**Verdict**: CoPaw/QwenPaw is a **high-velocity, high-churn project** with strong community momentum but accumulating technical debt in state management and configuration persistence. The maintainers should prioritize stabilizing v1.1.4's core data layer before adding channel features or UI polish.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-28

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 96 items updated in 24 hours (46 issues, 50 PRs), though the 39:7 open-to-closed issue ratio and 38:12 open-to-merged PR ratio indicate a **growing backlog**. No new release was cut, with v0.7.4 milestone tracking still active after an emergency v0.7.3 ship. The project is in a **stabilization phase** following March's bulk revert of 153 commits (c3ff635), with significant effort directed at recovering lost features and hardening provider integrations. Community engagement is strong with multi-comment discussions on configuration, streaming, and schema migration topics.

---

## 2. Releases

**No new releases.** The v0.7.4 milestone remains in progress ([Issue #5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)), renumbered after the emergency v0.7.3 release caused by "broken tags blowout." No ETA indicated.

---

## 3. Project Progress

### Merged/Closed Items (7 issues, ~12 PRs)

| Item | Type | Summary | Link |
|:---|:---|:---|:---|
| #5584 | Closed bug | **Fixed**: Duplicate consecutive assistant messages when model returns narration alongside tool calls | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) |
| #4878 | Closed bug | **Fixed**: E2EE recovery now downloads room keys from backup—encrypted rooms functional after store reset | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/4878) |
| #6062 | Closed enhancement | **Merged**: Typed enum errors replace stringly-typed session tool validation | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6062) |
| #6160 | Closed bug | **Closed as duplicate**: Kimi 2.6 reasoning_context issue (tracked elsewhere) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6160) |
| #6146 | Closed bug | **Closed**: Anthropic temperature:f64 shape verification (superseded by #6147) | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6146) |
| #6154 | Open PR | **Ready**: Restore web dashboard extraction in `install.sh` prebuilt path | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6154) |
| #6080 | Open PR | **In review**: Enable tool support in `/webhook` endpoint (MCP tools via webhook) | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6080) |
| #6159 | Open PR | **In review**: Record cost/token usage on every gateway turn (fixes #5118, #6001) | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6159) |
| #6107 | Open PR | **In review**: Capture `reasoning_content` from streaming responses (DeepSeek V4 compatibility) | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6107) |

### Key Advances
- **Cost/observability pipeline**: PR #6159 addresses long-standing zero-cost reporting in gateway chat
- **Provider hardening**: Multiple PRs target reasoning_content handling for DeepSeek/Kimi and temperature serialization for Anthropic/Bedrock
- **Install reliability**: PR #6154 fixes broken dashboard deployment via install script

---

## 4. Community Hot Topics

| Rank | Item | Comments | Heat Analysis |
|:---|:---|:---|:---|
| 1 | **[#6123] default_model issue on fresh install** | 14 | **Critical onboarding friction**: Fresh LXC installs fail with provider configuration error. S1 severity, no reactions—suggests users abandon rather than engage. [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) |
| 2 | **[#5877] v0.7.4 milestone tracking** | 6 | **Release coordination bottleneck**: Skills deidentification and other features blocked on milestone governance. Renumbered twice (0.7.2→0.7.3→0.7.4). [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5877) |
| 3 | **[#5600] kimi-code provider streaming error** | 6 | **Provider fragility**: `reasoning_content` missing in assistant tool-call turns breaks Kimi streaming. Pattern matches #6123, #6160—systematic reasoning_content handling gap. [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) |
| 4 | **[#5947] Schema v3 batch migration** | 6 | **Merge blocker**: Coordinated breaking config changes held as "no partial landings." Indicates architectural tension between iteration speed and stability. [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) |
| 5 | **[#6167] ACP protocol v1 implementation** | undefined (new) | **High-risk, high-impact**: XL-sized PR restoring external ACP consumer compatibility with tool-call permissions. Manual risk flag suggests careful review needed. [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6167) |

**Underlying needs**: Configuration discoverability, provider reasoning_content robustness, release predictability, and protocol stability for external integrations.

---

## 5. Bugs & Stability

| Severity | Count | Representative Issues | Fix Status |
|:---|:---|:---|:---|
| **S1 — Workflow blocked** | 5 | #6123 (default_model), #6051 (self-test localhost mismatch), #6149 (config.toml examples stale) | #6154 (install fix) in review; others unassigned |
| **S2 — Degraded** | 6 | #5600 (Kimi streaming), #6001 (zero cost reporting), #5244 (Dashboard crash), #6153 (Matrix voice transcription) | #6159 (cost fix), #6107 (reasoning_content) in review |
| **S3 — Minor** | 3 | #6157 (Nextcloud wrong API), #6156 (Nextcloud 5s timeout), #6073 (Web UI cursor misalignment) | No fixes yet |

### Critical Regressions
- **[#6096] install.sh missing web dashboard** (S2, P0): Binary installs without assets. **Fix PR #6154 ready.**
- **[#6147] Anthropic temperature:f64 may block opus-4-7** (S2, P2): Preemptive issue after Bedrock fix #6095. **No PR yet.**
- **[#6074] 153 commits lost in bulk revert c3ff635**: Audit tracking recovery work. WeChat iLink (#6130, #6166) being reconstructed.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Signal Strength | Likely Version |
|:---|:---|:---|:---|
| **Hybrid WASM + markdown skills** | #6140 | Strong—architecture ticket with clear next-step after markdown skills land | v0.8.0+ |
| **Web UI chat recovery from memory** | #6145 | Moderate—UX gap, unclear technical feasibility | v0.7.x |
| **Channel-native /clear (Telegram/Discord)** | #6150 | Moderate—good first issue, low complexity | v0.7.x |
| **Free model labeling in onboarding** | #6070 | Moderate—cost transparency for OpenRouter users | v0.7.x |
| **MCP tools in delegate sub-sessions** | #6136 | Strong—bug report revealing architecture limitation | v0.7.x |
| **Software factory automation roles** | #6129 | Emerging—CI/automation infrastructure | v0.8.0+ |
| **Prefer skills over dedicated tool code** | #6165 | Philosophical—debates core extensibility model | Long-term |

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Fresh install breakage** | #6123, #6149, #6096, #6051 | Critical—multiple independent S1 issues in onboarding path |
| **Provider-specific fragility** | #5600, #6147, #6160, #6107 | High—reasoning_content/temperature serialization gaps across providers |
| **Cost/observability blindness** | #6001, #5118 | High—production usage impossible without usage tracking |
| **Documentation drift** | #6149 (config examples), #6073 (UI broken) | Moderate—docs not keeping pace with code |

### Use Cases Emerging
- **LXC/containerized self-hosting** (#6123): Homelab/prosumer deployment pattern
- **Local/slow LLM integration** (#6156): LocalAI with Nextcloud Talk—timeout handling inadequate
- **Multi-channel enterprise deployment** (#5356, #6157, #6156): Canvas, Nextcloud, Matrix all showing scaling pains

### Satisfaction Signals
- Active PR contributions from 10+ distinct authors in 24h
- Users filing detailed reproductions (#6001, #6123)
- Community self-organizing around "good first issue" labels

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| **[#5947] Schema v3 migration** | 8 days | **Release blocker**—explicit "no partial landings" policy | Maintainer decision on merge coordination |
| **[#6074] 153-commit revert recovery** | 4 days | **Technical debt**—bug fixes and features still missing | Prioritize which lost PRs to reconstruct; #6130 (WeChat) in progress |
| **[#5244] Dashboard crash on v0.6.8** | 25 days | **Stale but P1**—affects Docker users | Verify fix in v0.7.3 or need patch |
| **[#5125] CPU spikes typing in chat** | 30 days | **S0 misclassified?**—marked data loss/security but likely performance | Re-triage severity, assign owner |
| **[#5835] cancel_tokens memory leak** | 11 days | **Risk: high**—abandoned session resource exhaustion | Review PR readiness, potential security fix |
| **[#6132] Skill prompt injection audit** | 2 days | **Blocked on #5972**—security hardening | Merge dependency PR first |

---

*Digest generated from 96 GitHub items. Activity level: **High**. Backlog health: **Concerning** (39 open issues, 38 open PRs). Recommended focus: unblock schema v3, ship v0.7.4, and reduce S1 onboarding failures.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*