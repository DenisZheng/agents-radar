# OpenClaw Ecosystem Digest 2026-04-10

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-04-10 00:13 UTC

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

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-04-10

## 1. Today's Overview

OpenClaw shows **exceptionally high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a mature project under active development with substantial community engagement. The project released **v2026.4.9** with significant memory/dreaming infrastructure improvements, alongside a critical regression wave affecting npm global installs due to missing `@buape/carbon` dependency. The community is actively debating **agent identity verification standards** (ERC-8004/W3C DID integration), while maintainers are pushing substantial architectural refactors including gateway seam splitting and browser tool consolidation. Stability concerns persist around memory leaks, Windows path handling, and provider authentication regressions.

---

## 2. Releases

### [v2026.4.9](https://github.com/openclaw/openclaw/releases/tag/v2026.4.9) — Stable
**Memory/Dreaming Infrastructure Overhaul**
- **Grounded REM backfill lane**: Historical `rem-harness --path` for replaying old daily notes into Dreams
- **Diary commit/reset flows**: Cleaner durable-fact extraction workflows
- **Live short-term promotion integration**: Eliminates need for second memory stack when promoting historical notes to durable memory

### [v2026.4.9-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.4.9-beta.1) — Beta
Same changes as stable; no breaking changes noted. Migration: automatic via `openclaw update`.

---

## 3. Project Progress

### Merged/Closed PRs (Selected High-Impact)

| PR | Description | Impact |
|:---|:---|:---|
| [#63965](https://github.com/openclaw/openclaw/pull/63965) | Fix inter-session completion delivery on `ANNOUNCE_SKIP` | **Critical fix**: Prevents message loss during session handoffs |
| [#63964](https://github.com/openclaw/openclaw/pull/63964) | MS Teams SSO support (`signin/tokenExchange`, `signin/verifyState`) | **Enterprise feature**: Native Microsoft tenant SSO |
| [#63963](https://github.com/openclaw/openclaw/pull/63963) | MS Teams typing indicator during long tool chains | **UX fix**: Prevents 30s+ timeout drops |
| [#63679](https://github.com/openclaw/openclaw/pull/63679) | `readQaScenarioPack` returns null vs throwing on missing files | **Stability**: Fixes npm global install crashes |

### Active Development (Open PRs)

| PR | Description | Status |
|:---|:---|:---|
| [#63975](https://github.com/openclaw/openclaw/pull/63975) | **XL**: Gateway startup/runtime seam split | Major architectural refactor |
| [#63977](https://github.com/openclaw/openclaw/pull/63977) | **XL**: Browser `/act` route unification | Eliminates duplicate code paths |
| [#63957](https://github.com/openclaw/openclaw/pull/63957) | **XL**: Browser helper facade consolidation | Technical debt reduction |
| [#41158](https://github.com/openclaw/openclaw/pull/41158) | **XL**: Rate-limit retry before failover | Reliability improvement |
| [#63891](https://github.com/openclaw/openclaw/pull/63891) | **XL**: Security hardening (axios pin, dependency denylist) | Supply chain security |

---

## 4. Community Hot Topics

### [#49971: RFC: Native Agent Identity & Trust Verification](https://github.com/openclaw/openclaw/issues/49971)
- **77 comments** | Open | Author: MoltyCel (MolTrust/CryptoKRI GmbH)
- **Proposal**: ERC-8004 + W3C DID/VC standard integration for cryptographically verifiable agent identities
- **Underlying need**: Enterprise multi-agent deployments require trust boundaries, auditability, and compliance frameworks. This signals OpenClaw's expansion toward regulated/enterprise environments.

### [#62994: Install 4.8 failed: Cannot find module '@buape/carbon'](https://github.com/openclaw/openclaw/issues/62994)
- **29 comments, 8 👍** | Open | Regression affecting npm/pnpm installs
- **Root cause**: Dependency `@buape/carbon` not properly bundled in distribution
- **Impact**: Blocking new installations; multiple duplicates (#62272, #62446, #63127)

### [#45064: Memory Leak - OOM on basic commands](https://github.com/openclaw/openclaw/issues/45064)
- **28 comments** | Open | v2026.3.12 regression
- **Severity**: CLI unusable for affected users; no confirmed fix PR yet

### [#46049: LLM request timeout ignores configured settings](https://github.com/openclaw/openclaw/issues/46049)
- **25 comments, 8 👍** | **CLOSED** today
- **Resolution**: Fixed; timeout configuration now properly respected across agent/channel/tool layers

### [#61899: ESM URL scheme error on Windows](https://github.com/openclaw/openclaw/issues/61899)
- **22 comments** | **CLOSED** today
- **Fix**: Windows absolute path handling corrected for ESM loader

---

## 5. Bugs & Stability

### 🔴 Critical (Blocking/Regression)

| Issue | Description | Fix PR |
|:---|:---|:---|
| [#62994](https://github.com/openclaw/openclaw/issues/62994) | `@buape/carbon` missing in npm dist — install fails | [#63679](https://github.com/openclaw/openclaw/pull/63679) (partial) |
| [#63510](https://github.com/openclaw/openclaw/issues/63510) | v2026.4.9: completion cache crashes on missing `qa/scenarios/index.md` | [#63679](https://github.com/openclaw/openclaw/pull/63679) |
| [#63541](https://github.com/openclaw/openclaw/issues/63541) | Global npm install: `qa/scenarios/index.md` missing from published dist | [#63679](https://github.com/openclaw/openclaw/pull/63679) |
| [#45064](https://github.com/openclaw/openclaw/issues/45064) | Memory leak/OOM on basic CLI commands (v2026.3.12) | None confirmed |

### 🟡 High (Functional Regression)

| Issue | Description | Fix PR |
|:---|:---|:---|
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | Coding Agent never completes (worked in 2026.4.2) | None |
| [#54844](https://github.com/openclaw/openclaw/issues/54844) | `github-copilot/gpt-5-mini` fails with 400 invalid_request_body | None |
| [#61726](https://github.com/openclaw/openclaw/issues/61726) | WhatsApp media sends falsely succeed, attachment dropped | None |
| [#60390](https://github.com/openclaw/openclaw/issues/60390) | LosslessClaw compaction fails due to auth handling | None |

### 🟢 Medium (Platform/Edge Cases)

| Issue | Description |
|:---|:---|
| [#63127](https://github.com/openclaw/openclaw/issues/63127) | Windows npm global install runtime missing modules |
| [#51056](https://github.com/openclaw/openclaw/issues/51056) | OpenRouter 401 auth header not sent |
| [#37623](https://github.com/openclaw/openclaw/issues/37623) | `openai-codex/gpt-5.4` configurable but not wired at runtime |

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Feature | Likelihood in Next Version |
|:---|:---|:---|
| [#49971](https://github.com/openclaw/openclaw/issues/49971) | Native Agent Identity (ERC-8004/W3C DID) | **Medium** — Enterprise demand, but standards evolving |
| [#62801](https://github.com/openclaw/openclaw/pull/62801) | Native detached subagent spawn (`runtime.subagent.spawnDetached`) | **High** — PR open, additive API |
| [#56511](https://github.com/openclaw/openclaw/pull/56511) | Serper (Google Search API) provider | **High** — PR open, completes search provider matrix |
| [#25322](https://github.com/openclaw/openclaw/issues/25322) | `ssrfPolicy` config for `web_fetch` tool | **Medium** — Parity with browser tool requested |
| [#27732](https://github.com/openclaw/openclaw/issues/27732) | Prefix caching optimization for local models | **Low-Medium** — Performance niche, closed without merge |

**Emerging theme**: Multi-agent orchestration (detached subagents, identity verification, memory namespace isolation) suggests v2026.5.x may focus on **enterprise multi-agent deployments**.

---

## 7. User Feedback Summary

### Pain Points
| Category | Specific Issues | Sentiment |
|:---|:---|:---|
| **Installation reliability** | npm global installs repeatedly broken by missing bundled dependencies (`@buape/carbon`, `qa/scenarios/index.md`) | 😠 Frustrated — "fresh Debian install fails" |
| **Windows parity** | Path handling, ESM URL schemes,

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent Ecosystem
## 2026-04-10 Community Digest Analysis

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem shows **intense, parallel development** across 10+ active projects, with aggregate activity exceeding 1,000 daily updates. The landscape has bifurcated into **mature, enterprise-facing platforms** (OpenClaw, IronClaw, CoPaw) and **lightweight, rapidly iterating alternatives** (NanoBot, NullClaw, Moltis). All projects are converging on multi-agent orchestration, reasoning model support, and production reliability as core differentiators. The absence of TinyClaw and ZeptoClaw activity suggests consolidation around fewer, better-resourced codebases.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* | Notes |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | v2026.4.9 (stable) | ⭐⭐⭐⭐⭐ | Exceptional velocity; mature release cadence |
| **CoPaw** | 50 | 50 | v1.0.2 (stable) + hotfix beta | ⭐⭐⭐⭐☆ | Post-release stabilization; website regressions |
| **Hermes Agent** | 50 | 50 | None | ⭐⭐⭐⭐☆ | Feature consolidation; terminal rendering focus |
| **IronClaw** | 24 | 50 | None (v0.19.0 current) | ⭐⭐⭐⭐☆ | V1→V2 migration pressure; XL PR backlog |
| **NanoBot** | 26 | 45 | None (v0.1.5 current) | ⭐⭐⭐⭐☆ | v0.1.5 regression wave; patch imminent |
| **LobsterAI** | 3 | 37 | 2026.04.08 (critical bugs) | ⭐⭐⭐☆☆ | Post-release crisis; startup crashes unpatched |
| **Moltis** | 0 | 23 | 20260409.01 (fresh) | ⭐⭐⭐⭐⭐ | Zero open issues; exceptional triage velocity |
| **PicoClaw** | 16 | 24 | None (v0.2.5 current) | ⭐⭐⭐☆☆ | Community infrastructure gaps; Discord abandonment |
| **NullClaw** | 6 | 16 | None (v2026.3.21) | ⭐⭐⭐⭐☆ | Rapid issue resolution; Linux shell regression |
| **NanoClaw** | 4 | 24 | None | ⭐⭐⭐⭐☆ | Multi-tenant hardening; critical hang bug open |
| **TinyClaw** | 0 | 0 | — | ⭐☆☆☆☆ | No activity |
| **ZeptoClaw** | 0 | 0 | — | ⭐☆☆☆☆ | No activity |

*\*Health Score: Activity volume × release recency × issue resolution rate*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Closest Peer | Gap |
|:---|:---|:---|:---|
| **Scale** | 500 issues/PRs daily | CoPaw/Hermes (50 each) | **10× activity** |
| **Enterprise features** | MS Teams SSO, native identity (ERC-8004/W3C DID) | IronClaw (Slack, Railway) | **Identity verification lead** |
| **Memory architecture** | Grounded REM, dreaming infrastructure, diary flows | NanoBot (basic consolidation) | **Production memory systems** |
| **Release maturity** | Daily stable releases with migration automation | LobsterAI (broken releases) | **Reliable shipping** |

### Technical Approach Differences
- **OpenClaw**: Monolithic, batteries-included with gateway/channel abstraction layers; TypeScript-heavy; explicit enterprise targeting
- **IronClaw**: Rust-based, WASM sandboxing, V1/V2 engine duality; NEAR AI integration; stronger security boundaries
- **NanoBot**: Python-first, Unix philosophy, CLI/channel-native; rapid experimentation over stability
- **Moltis**: Zig codebase, local-first AI workflows, zero-config defaults; minimalism as differentiator

### Community Size
OpenClaw's **500 daily updates** suggests contributor base in **100s**, versus **20-50** for active peers. Only CoPaw approaches comparable engagement (54-comment contribution tracking issue).

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Multi-agent orchestration** | OpenClaw, NanoClaw, IronClaw, Hermes | Detached subagents, session delegation, identity verification, "router" pattern |
| **Reasoning model support** | Moltis, NanoBot, OpenClaw, Hermes | GPT-5.x/Gemini 3.x streaming, `<thought>` block handling, reasoning visibility |
| **Production reliability** | All active projects | Message durability (outbox pattern), cron reliability, graceful degradation, timeout handling |
| **Credential security** | OpenClaw, Hermes, NullClaw, NanoClaw | Zero-knowledge architecture, proxy daemons, per-client rate limiting, secret injection |
| **Local/self-hosted AI** | Moltis, PicoClaw, IronClaw, NullClaw | LM Studio/Ollama first-class support, air-gapped deployment, Podman compatibility |
| **Context/compression management** | NanoBot, IronClaw, OpenClaw | Automatic consolidation, session rotation, 1M+ token model optimization |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Enterprise multi-agent deployments | Regulated industries, MS Teams shops | Gateway/channel abstraction, memory infrastructure |
| **IronClaw** | Security-first WASM sandboxing | Security-conscious self-hosters | Rust + WASM, V2 engine, PID namespace isolation |
| **Moltis** | Zero-friction local AI | Individual developers, privacy-focused | Zig, minimal config, reasoning model parity |
| **NanoBot** | Rapid multi-channel deployment | Small teams, international users (China focus) | Python, Feishu/QQ/WeChat native |
| **CoPaw** | Plugin extensibility + chat UX | Power users, console-centric workflows | Plugin system, skill commands, routing selectors |
| **Hermes Agent** | Terminal-native professional tools | Developers, IDE parity seekers | Rich rendering, diff views, syntax highlighting |
| **NullClaw** | Multi-platform chat reliability | Self-hosted multi-channel bots | Zig, interactive pickers, `.well-known` skills |
| **LobsterAI** | Cowork/collaborative sessions | Team productivity, NetEase ecosystem | Session lifecycle, scheduled automation |
| **PicoClaw** | Constrained environment deployment | Edge devices, Android TV, NAS | Go, minimal resource footprint |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Velocity > Stability)
| Project | Characteristics | Risk |
|:---|:---|:---|
| **Moltis** | 23 PRs, zero open issues, same-day fixes | May lack production battle-testing |
| **NanoBot** | 71 updates, v0.1.5 regression wave | Stability debt accumulating |
| **NullClaw** | 16 PRs, 4/6 issues closed in 24h | Single-contributor dominance (`manelsen`) |

### Tier 2: Feature Consolidation
| Project | Characteristics | Trajectory |
|:---|:---|:---|
| **OpenClaw** | Massive scale, architectural refactors (XL PRs) | Maturing toward enterprise standard |
| **CoPaw** | v1.0.2 shipped, immediate hotfixes needed | Stabilizing post-major release |
| **IronClaw** | V1→V2 migration, 39:11 open:closed PR ratio | Technical debt elimination phase |
| **Hermes Agent** | Terminal rendering stack, 5 stacked PRs | Developer experience investment |

### Tier 3: Crisis/Stagnation
| Project | Status | Concern |
|:---|:---|:---|
| **LobsterAI** | Critical bugs unpatched 48h+ post-release | User trust erosion |
| **PicoClaw** | "Discord abandoned," hostile user feedback | Community infrastructure collapse |
| **TinyClaw, ZeptoClaw** | Zero activity | Effectively deprecated |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **Identity verification as infrastructure** | OpenClaw ERC-8004/W3C DID RFC (#49971, 77 comments) | Build agent-to-agent trust layers early; standards still forming |
| **Reasoning model UX parity** | Moltis, NanoBot, Hermes all adding streaming `<thought>` visibility | Users expect transparency into agent cognition; silent reasoning unacceptable |
| **Cron/scheduler reliability crisis** | Hermes (4 active bugs), NanoClaw (critical hang bug), IronClaw (silent failures) | Scheduling is harder than it appears; invest in observability and idempotency |
| **Local-first AI normalization** | Moltis LM Studio focus, IronClaw Ollama, NullClaw Podman | Cloud dependency is becoming a liability; hybrid architectures preferred |
| **Memory as competitive moat** | OpenClaw dreaming/REM, NanoBot consolidation, IronClaw hindsight guidelines | Long-horizon context management separates toys from tools |
| **Multi-tenancy architecture shift** | NanoClaw session delegation, OpenClaw gateway seam splitting, CoPaw routing | Single-user assumptions breaking down; design for isolation from day one |

### Emerging Capability Gaps
- **Voice input**: Only IronClaw (#2223) actively pursuing Whisper integration
- **Agent marketplaces**: NullClaw `.well-known` skills, CoPaw plugins—no dominant standard
- **Cross-project compatibility**: OpenClaw/LobsterAI gateway integration suggests consolidation pressure

---

*Report generated from 2026-04-10 community digests. Health scores and tier assignments are comparative assessments based on disclosed activity metrics.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-10

## 1. Today's Overview

NanoBot shows **high development velocity** with 71 total updates in 24 hours (26 issues, 45 PRs), indicating an active, rapidly evolving codebase. The project is in a **stabilization phase for v0.1.5**, with multiple critical bug reports emerging from the recent release—including Python path resolution, Feishu channel breakages, and memory corruption issues. Community engagement is strong with substantial discussion on architectural decisions like WebUI adoption and context management. No new release was published today, suggesting maintainers are accumulating fixes before the next patch. The contributor base appears broad with 20+ distinct authors active.

---

## 2. Releases

**No new releases** (v0.1.5 remains current).

Notable context: Multiple regression reports target v0.1.5 specifically, suggesting a patch release (v0.1.6) may be imminent.

---

## 3. Project Progress

### Merged/Closed PRs Today (22 total, selected highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#2953](https://github.com/HKUDS/nanobot/pull/2953) | Full `<thought>` block support for Gemma 4 models | **Major** — extends reasoning model compatibility beyond `<think>` tags |
| [#2973](https://github.com/HKUDS/nanobot/pull/2973) | Strip `<thought>` blocks from Gemma 4 (duplicate fix, closed) | Redundant, indicates rapid parallel development |
| [#2971](https://github.com/HKUDS/nanobot/pull/2971) | Memory consolidation by message count when token budget unused | **Critical fix** — prevents unbounded session growth on 1M+ token models |
| [#2960](https://github.com/HKUDS/nanobot/pull/2960) | Proxy support for Discord channel | Enterprise/region-locked deployment enablement |
| [#2962](https://github.com/HKUDS/nanobot/pull/2962) | `allowed_env_keys` for sandboxed execution | Security + flexibility for tool environments |
| [#2963](https://github.com/HKUDS/nanobot/pull/2963) | Fix streaming channels silently dropping LLM errors | **Reliability** — users now see 429s, timeouts |

### Active Development (Open PRs)

| PR | Description | Status |
|:---|:---|:---|
| [#2972](https://github.com/HKUDS/nanobot/pull/2972) | **Full Web UI implementation** — browser-based management + chat | Major feature under review |
| [#2985](https://github.com/HKUDS/nanobot/pull/2985) | Mid-turn message injection for responsive follow-ups | UX improvement for latency |
| [#2982](https://github.com/HKUDS/nanobot/pull/2982) | Auto session-new with idle detection | Addresses context bloat |
| [#2979](https://github.com/HKUDS/nanobot/pull/2979) | Message-count trigger for consolidation (alternative to #2971) | Competing implementation |
| [#2968](https://github.com/HKUDS/nanobot/pull/2968) | Per-user memory isolation | Multi-tenancy enhancement |

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Issue/PR | Comments | Analysis |
|:---|:---|:---:|:---|
| 1 | [#2949](https://github.com/HKUDS/nanobot/issues/2949) WebUI feature discussion | **8** | **Architectural inflection point**: Community debating whether NanoBot should ship official WebUI vs. remain CLI/channel-focused. PR [#2972](https://github.com/HKUDS/nanobot/pull/2972) now provides concrete implementation. Tension between "Unix philosophy" (do one thing well) and user demand for accessible interface. |
| 2 | [#2892](https://github.com/HKUDS/nanobot/issues/2892) Cron mechanism design questions | **6** | **Core architecture confusion**: Users expect agent-created scheduled tasks to execute without gateway restart. Reveals fundamental design decision (gateway as scheduler vs. agent as scheduler) that may need reconsideration. |
| 3 | [#2798](https://github.com/HKUDS/nanobot/issues/2798) Unified session across channels | **6** | **CLOSED** — User wanted cross-platform conversation continuity. Closed without merge, suggesting maintainers prefer channel-isolated sessions for security/privacy. |
| 4 | [#2927](https://github.com/HKUDS/nanobot/issues/2927) Automatic skill discovery | **5** | **AI-native feature request**: Users want agent to self-improve by recognizing behavior patterns. Aligns with [#2521](https://github.com/HKUDS/nanobot/pull/2521) SelfTool v2 PR. Signals demand for autonomous agent capabilities. |
| 5 | [#2917](https://github.com/HKUDS/nanobot/issues/2917) Python not found after v0.1.5 upgrade | **4** | **Regression pain point**: Breaking change in skill execution environment. |

### Underlying Needs Analysis

- **Accessibility**: Strong demand for non-technical interfaces (WebUI, better Feishu integration)
- **Autonomy**: Users expect agents to self-manage (scheduling, skill creation, context compression)
- **Reliability**: Multi-channel parity (Discord vs. Telegram behavior differences) frustrates deployments

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 Critical** | [#2957](https://github.com/HKUDS/nanobot/issues/2957) | **MEMORY.md completely overwritten/blank** — data loss with no git backup | No fix PR yet; user reports "huge bug" |
| **🔴 Critical** | [#2980](https://github.com/HKUDS/nanobot/issues/2980) | Dream git store initializes **nested repo in workspace/**, overwrites `.gitignore` | No fix PR yet |
| **🟠 High** | [#2970](https://github.com/HKUDS/nanobot/issues/2970) | Feishu channel fails on `nanobot-ai==0.1.5` with `lark-oapi==1.5.3`: `No module named 'lark_oapi.api.bot'` | No fix PR yet; blocks Feishu users |
| **🟠 High** | [#2917](https://github.com/HKUDS/nanobot/issues/2917) | Python not found after v0.1.5 upgrade — skills fail | No fix PR yet |
| **🟠 High** | [#2947](https://github.com/HKUDS/nanobot/issues/2947) | Runtime Context metadata **leaking to users** via channels (WeChat, etc.) | No fix PR yet; regression from v0.1.4.post6 |
| **🟡 Medium** | [#2977](https://github.com/HKUDS/nanobot/issues/2977) | QQ/Weixin: natural language fails, slash commands work; Feishu normal | Channel-specific routing bug |
| **🟡 Medium** | [#2922](https://github.com/HKUDS/nanobot/issues/2922) | Discord replies fall into empty final response (closed) | Fixed via related PRs |
| **🟢 Low** | [#2974](https://github.com/HKUDS/nanobot/issues/2974) | Gemini model configuration broken post-upgrade | Closed — configuration issue |

**Regression Pattern**: v0.1.5 introduced multiple breaking changes in environment handling, channel APIs, and memory management. Recommend patch release with targeted fixes.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| **Official Web UI** | [#2949](https://github.com/HKUDS/nanobot/issues/2949) + [#2972](https://github.com/HKUDS/nanobot/pull/2972) | **85%** | PR exists, high community demand, 8-comment discussion |
| **In-conversation model switching** (`/model` command) | [#2975](https://github.com/HKUDS/nanobot/issues/2975) | **70%** | Reference implementation cited (OpenClaw), Feishu-focused |
| **Automatic context compression** | [#2983](https://github.com/HKUDS/nanobot/issues/2983) + [#2984](https://github.com/HKUDS/nanobot/issues/2984) | **75%** | Two competing PRs (#2971, #2979) address this; 1M+ token models make this urgent |
| **Per-user memory isolation** | [#2968](https://github.com/HKUDS/nanobot/pull/2968) | **60%** | Clean PR exists, multi-tenant deployments need this |
| **Automatic skill discovery** | [#2927](https://github.com/HKUDS/nanobot/issues/2927) | **40%** | Conceptual appeal, complex implementation; SelfTool v2 (#2521) may prerequisite |
| **Mid-turn message injection** | [#2985](https://github.com/HKUDS/nanobot/pull/2985) | **65%** | UX

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-10

## 1. Today's Overview

Hermes Agent shows **high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, indicating an active, rapidly evolving codebase. No new releases were published today, suggesting the project is in a feature consolidation phase. The community is heavily focused on **terminal rendering improvements**, **security hardening**, and **multi-provider reliability** — with significant attention to edge cases in streaming tool calls, credential management, and gateway platform integrations. The 39:11 open-to-closed issue ratio and 36:14 open-to-merged PR ratio indicate healthy throughput but also accumulating technical debt in review queues.

---

## 2. Releases

**No new releases today.**

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Description | Impact |
|:---|:---|:---|
| [#6857](https://github.com/NousResearch/hermes-agent/pull/6857) | API server model name derived from profile name | **Closed** — Multi-user OpenWebUI setups now get distinct model IDs per profile |
| [#6847](https://github.com/NousResearch/hermes-agent/pull/6847) | Detect truncated streaming tool calls before execution | **Closed** — Critical reliability fix; prevents silent execution of broken tool calls |
| [#6776](https://github.com/NousResearch/hermes-agent/pull/6776) | Detect truncated streaming tool calls (original) | **Closed** — Superseded by #6847 |
| [#6855](https://github.com/NousResearch/hermes-agent/pull/6855) | Phoenix Protocol documentation | **Closed** — Self-improvement loop framework documented |
| [#6848](https://github.com/NousResearch/hermes-agent/pull/6848) | Matrix eyes reaction removal | **Closed** — UI polish for Matrix platform |

### Key Advances

- **Streaming reliability**: The truncated tool-call detection fix (#6847) addresses a critical bug where incomplete JSON arguments could execute silently
- **Multi-user API server**: Profile-based model naming enables proper multi-tenant deployments
- **Platform UX**: Matrix reaction handling improved; duplicate message prevention on Signal/GitHub webhooks (#6853)

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#4518](https://github.com/NousResearch/hermes-agent/issues/4518) — Intra-line Diff-View, Syntax Highlighting, Markdown & Theming | **13 comments** | **Highest engagement**. Five stacked PRs building a layered terminal rendering engine. Community wants IDE-grade output formatting in CLI agents — this signals demand for professional developer experience parity with tools like Cursor/Windsurf. |
| [#4656](https://github.com/NousResearch/hermes-agent/issues/4656) — Credential proxy daemon | **8 comments, 0 reactions** | Security-conscious users pushing for zero-knowledge credential architecture. Builds on PID namespace isolation work. Enterprise/advanced user need for credential exfiltration prevention. |
| [#3863](https://github.com/NousResearch/hermes-agent/issues/3863) — Native AWS Bedrock provider | **5 comments, 11 👍** | **Highest voted open issue**. Users want direct AWS integration bypassing OpenRouter latency/cost markup. Strong enterprise signal — VPC endpoints, CloudTrail, negotiated pricing are blockers for corporate adoption. |
| [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) — Anthropic Claude subscription auth "out of extra usage" | **4 comments, 4 👍** | Active authentication bug affecting paid users. Fix PR #6854 in progress. |

**Underlying needs identified:**
- **Professional CLI experience**: Rich rendering, diff views, syntax highlighting (#4518)
- **Enterprise security**: Zero-knowledge credentials, direct cloud provider integration (#4656, #3863)
- **Authentication reliability**: OAuth token lifecycle management (#6475)

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#6638](https://github.com/NousResearch/hermes-agent/issues/6638) | Truncated streaming tool calls silently execute with broken args | **FIXED** by #6847 |
| 🔴 **Critical** | [#6841](https://github.com/NousResearch/hermes-agent/issues/6841) | Tool-calling pipeline corrupts tool names/JSON arguments | **Open** — affects generic tool path, multiple tools |
| 🟡 **High** | [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) | Anthropic OAuth "out of extra usage" error persists | **PR #6854 open** |
| 🟡 **High** | [#6843](https://github.com/NousResearch/hermes-agent/issues/6843) | UnicodeEncodeError on zai provider | **Open** — fresh report |
| 🟡 **High** | [#6677](https://github.com/NousResearch/hermes-agent/issues/6677) | vision_analyze 400 error on valid local images | **Open** — breaks clipboard workflows |
| 🟡 **High** | [#6718](https://github.com/NousResearch/hermes-agent/issues/6718) | Background process notifications not delivered | **Open** — related to cron delivery bugs |
| 🟡 **High** | [#6797](https://github.com/NousResearch/hermes-agent/issues/6797) | Cron jobs silently fail to modify jobs.json | **Open** — Docker/gateway mode |
| 🟡 **High** | [#6709](https://github.com/NousResearch/hermes-agent/issues/6709) | Cron create fails with Model parameter TypeError | **Open** |
| 🟡 **High** | [#6673](https://github.com/NousResearch/hermes-agent/issues/6673) | Cron scheduler missing fallback_model | **Open** — cron jobs have no fallback chain |
| 🟢 **Medium** | [#6729](https://github.com/NousResearch/hermes-agent/issues/6729) | Systemd gateway ignores HERMES_HOME | **Open** |
| 🟢 **Medium** | [#6862](https://github.com/NousResearch/hermes-agent/issues/6862) | hermes model locks to first model on multi-model endpoints | **PR #6863 open** |

**Pattern**: Cron subsystem has **4 active bugs** — scheduling reliability is a stability priority. Tool-call integrity has **2 critical issues** with 1 fixed.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Release |
|:---|:---|:---|
| **Rich terminal rendering** (diffs, syntax highlighting, markdown) | #4518 | **High** — 5 stacked PRs, active development |
| **AWS Bedrock native provider** | #3863 | **Medium-High** — 11 votes, enterprise demand |
| **Credential proxy daemon** | #4656 | **Medium** — security focus, complex architecture |
| **Multi-memory provider support** | #5688 | **Medium** — PR open, architectural change |
| **Slate Agent Hub integration** | #5957 | **Medium** — agent-to-agent messaging platform |
| **Zeroshot multi-agent validation** | #488 | **Low-Medium** — external tool integration |
| **Multi-Agent Council Skill** | #5876 | **Low** — community skill, needs review |

**Prediction**: The terminal rendering stack (#4518) is most likely to ship next given PR maturity. AWS Bedrock provider and credential proxy address enterprise blockers and may follow.

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Impact |
|:---|:---|
| Cron reliability | "At some point any tool call reported success, but nothing was changed" — silent failures destroy trust |
| Authentication fragility | OAuth tokens expire unpredictably; re-login doesn't resolve (#6475, #6671) |
| Vision workflow breakage | Clipboard images unusable, local paths rejected (#6677) |
| Model switching friction | Locked to first model on multi-model endpoints (#6862) |
| Notification delivery | Background tasks complete without waking agent (#6718) |

### Positive Signals
- Strong engagement with advanced features (diff views, credential security)
- Active multi-platform gateway usage (Discord, Telegram, Matrix, Feishu)
- Users building skills and integrations (Zeroshot, Council, Phoenix Protocol)

### Enterprise Readiness Gaps
- AWS direct integration missing
- Credential security needs hardening
- Fallback/reliability chains incomplete in cron subsystem

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#488](https://github.com/NousResearch/hermes-agent/issues/488) — Zeroshot Skill | ~1 month | Stalled | Maintainer review for multi-agent orchestration integration |
| [#3863](https://github.com/NousResearch/hermes-agent/issues/3863) — AWS Bedrock | ~11 days | High priority, no PR | Implementation owner; enterprise blocker |
| [#5237](https://github.com/NousResearch/hermes-agent/issues/5237) — Hindsight memory guidelines | ~5 days | Memory correctness | Architecture decision on document_id scoping |
| [#6209](https://github.com/NousResearch/hermes-agent/issues/6209) — Custom endpoint API protocol selection | ~2 days | Setup UX | Small enhancement, quick win |
| [#4692](https://github.com/NousResearch/hermes-agent/pull/4692) — Ink/React TUI refactor | ~7

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-10

## 1. Today's Overview

PicoClaw shows **high development velocity** with 24 PRs and 16 issues updated in the last 24 hours, though no new release was cut. The project is actively addressing critical provider integrations (OpenAI Codex OAuth, MCP servers) while accumulating technical debt in documentation and configuration transparency. Community frustration is emerging around Discord support gaps and WebSocket reliability, with three related issues filed by the same user cluster. The maintainers appear focused on stability fixes over feature shipping, with 7 PRs merged/closed versus 17 remaining open.

---

## 2. Releases

**No new releases** — v0.2.5 remains the latest stable version, with v0.2.6-launcher available as Docker image.

---

## 3. Project Progress

### Merged/Closed PRs (7 total)

| PR | Description | Impact |
|:---|:---|:---|
| [#2457](https://github.com/sipeed/picoclaw/pull/2457) | Bump modernc.org/sqlite 1.48.0 → 1.48.2 | Database stability |
| [#2420](https://github.com/sipeed/picoclaw/pull/2420) | Provider-agnostic JSON escaping docs | Documentation clarity |
| [#2453](https://github.com/sipeed/picoclaw/pull/2453) | Bump AWS SDK config 1.32.12 → 1.32.14 | Cloud provider maintenance |
| [#2454](https://github.com/sipeed/picoclaw/pull/2454) | Bump telego 1.7.0 → 1.8.0 (Telegram Bot API v9.6) | Telegram channel improvements |
| [#2418](https://github.com/sipeed/picoclaw/pull/2418) | Korean README translation | Internationalization |

**Key advancements:**
- **Codex/OpenAI OAuth reliability**: Multiple PRs (#2462, #2443, #2437) address streaming response handling and empty output bugs for `gpt-5.4`
- **MCP server compatibility**: [#2460](https://github.com/sipeed/picoclaw/pull/2460) fixes nil arguments causing Zod validation failures in TypeScript-based MCP servers
- **Skill system extensibility**: [#2442](https://github.com/sipeed/picoclaw/pull/2442) refactors skill registries to support GitHub-backed discovery

---

## 4. Community Hot Topics

### Most Active by Engagement

| Issue/PR | Activity | Underlying Need |
|:---|:---|:---|
| [#2433](https://github.com/sipeed/picoclaw/issues/2433) | 2 👍, 1 comment | **Governance gap**: Official Discord is "abandoned" per Chinese community; users demand bilingual support parity with WeChat |
| [#2319](https://github.com/sipeed/picoclaw/issues/2319) | 4 comments | **Reliability**: WebSocket connection failures in v0.2.5 blocking production use |
| [#2426](https://github.com/sipeed/picoclaw/issues/2426) | 3 comments, now closed | **Security UX**: File access restrictions need clearer error messaging |

### Analysis
The [#2433](https://github.com/sipeed/picoclaw/issues/2433) complaint reveals structural tension: Sipeed's hardware-focused culture may be underinvesting in PicoClaw's community infrastructure despite its growth potential versus competitors (ZeroClaw, NanoBot). The user explicitly frames PicoClaw as an "accident" for Sipeed that needs dedicated attention.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **Critical** | [#2448](https://github.com/sipeed/picoclaw/issues/2448) | WebUI exposes agent reasoning chain-of-thought merged with user replies | Open, no PR |
| **Critical** | [#2447](https://github.com/sipeed/picoclaw/issues/2447) | Only latest message processed in multi-task sequences | Open, no PR |
| **Critical** | [#2446](https://github.com/sipeed/picoclaw/issues/2446) | Cross-channel message echoing in multi-channel setups | Open, no PR |
| **High** | [#2319](https://github.com/sipeed/picoclaw/issues/2319) | WebSocket connect failures (v0.2.5) | Open, 4 comments |
| **High** | [#2437](https://github.com/sipeed/picoclaw/pull/2437) | Codex streaming returns empty content | **Fix PR open**: [#2437](https://github.com/sipeed/picoclaw/pull/2437) |
| **High** | [#2429](https://github.com/sipeed/picoclaw/issues/2429) | Console double-character input, broken model loading | Open, hostile tone |
| **Medium** | [#2440](https://github.com/sipeed/picoclaw/issues/2440) | Docker `ReadonlyRootfs` incompatible due to undocumented runtime writes | Open, needs docs |
| **Medium** | [#2439](https://github.com/sipeed/picoclaw/issues/2439) | Undocumented `overridePicoToken` breaks external integrations | Open |
| **Medium** | [#2438](https://github.com/sipeed/picoclaw/issues/2438) | `PICOCLAW_GATEWAY_TOKEN` env var behavior misleading | Open |
| **Medium** | [#2377](https://github.com/sipeed/picoclaw/issues/2377) | Unsafe terminal control characters in exec/logs | Open |

**Regression cluster**: Three issues (#2446-2448) from user `zuozhehao`/`s-varenia` suggest v0.2.6-launcher Docker image has **message handling regressions** in multi-channel and WebUI contexts.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version |
|:---|:---|:---|
| [#2444](https://github.com/sipeed/picoclaw/issues/2444) | MCP server secrets in `.security.yml` | **High** — security hardening is active theme |
| [#2376](https://github.com/sipeed/picoclaw/issues/2376) | Disable Enter-to-send in mobile UI | **Medium** — mobile UX gap acknowledged |
| [#2442](https://github.com/sipeed/picoclaw/pull/2442) | GitHub-backed skill discovery | **High** — PR open, architectural investment |

**Emerging pattern**: Configuration management and secrets handling are becoming first-class concerns, likely driven by enterprise/self-hosted adoption.

---

## 7. User Feedback Summary

### Pain Points
| Source | Issue | Sentiment |
|:---|:---|:---|
| [#2433](https://github.com/sipeed/picoclaw/issues/2433) | "Discord is like an ungoverned region" — no official presence | 😠 Abandonment |
| [#2429](https://github.com/sipeed/picoclaw/issues/2429) | "What kind of idiots give this one stars?" — broken core functionality | 😠 Rage-quit |
| [#2440](https://github.com/sipeed/picoclaw/issues/2440)-[#2438](https://github.com/sipeed/picoclaw/issues/2438) | Undocumented token behavior, Docker runtime requirements | 😕 Confusion |

### Positive Signals
- Android TV/Termux deployment working "for about two days" ([#2462](https://github.com/sipeed/picoclaw/pull/2462)) — edge-case platform validation
- Korean translation contribution — growing international contributor base

### Use Case Evolution
Users are deploying PicoClaw in **constrained environments**: Android TV boxes, Synology NAS, multi-channel production setups. This exceeds original "personal AI assistant" scope, exposing scalability gaps.

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#795](https://github.com/sipeed/picoclaw/issues/795) | ~6 weeks | **Resolved** — GLM Coding Plan 500 errors | Closed 2026-04-09 |
| [#2337](https://github.com/sipeed/picoclaw/issues/2337) | ~6 days | Docs debt | Closed via [#2420](https://github.com/sipeed/picoclaw/pull/2420) |

**Current attention gap**: No long-stale critical issues, but **three undocumented behaviors** (#2438-2440) filed simultaneously by `bamnenim-permissionlabs` suggest a **power user hitting integration walls**. These need maintainer response to prevent churn.

**Recommended priority**: Address #2433 (Discord governance) and #2446-2448 (message handling regressions) before v0.2.6 release.

---

*Digest generated from GitHub activity 2026-04-09. All links: https://github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-10

## 1. Today's Overview

NanoClaw shows **high development velocity** with 24 PRs updated in the last 24 hours (14 merged/closed, 10 open) and 4 active issues. The project is in an active stabilization phase following major architectural work: today's merges focused on reliability fixes (IPC message handling, session cleanup, trigger pattern matching) and infrastructure improvements (Slack Socket Mode, multi-tenant session delegation). No new releases were cut, suggesting maintainers are accumulating changes before a version bump. The contributor base appears healthy with diverse authors across fixes and features.

---

## 2. Releases

**None** — No new releases published.

---

## 3. Project Progress

### Merged/Closed PRs (14 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#1713](https://github.com/qwibitai/nanoclaw/pull/1713) | jbaruch | Fix: `chown .claude` session directory for container write permissions | **Critical fix** — resolves permission failures for containerized agents |
| [#1712](https://github.com/qwibitai/nanoclaw/pull/1712) | jbaruch | Fix: Bot message replies/quotes now trigger responses in `requiresTrigger` groups | UX improvement for interactive workflows |
| [#1711](https://github.com/qwibitai/nanoclaw/pull/1711) | jbaruch | Fix: Trigger patterns match anywhere in message, not just start | **Breaking behavioral change** — more natural trigger detection |
| [#1714](https://github.com/qwibitai/nanoclaw/pull/1714) | jbaruch | Fix: Auto-create heartbeat for trigger-required groups | Prevents cross-group message leakage in multi-tenant setups |
| [#1550](https://github.com/qwibitai/nanoclaw/pull/1550) | BorisBozic | Fix: Retry listen on `EADDRINUSE` for crash recovery | Resilience improvement for development restarts |
| [#1710](https://github.com/qwibitai/nanoclaw/pull/1710) | BorisBozic | Feat: Parse `LOCATION:` from ICS into CalendarEvent | Calendar integration enhancement |
| [#1572](https://github.com/qwibitai/nanoclaw/pull/1572) | IYENTeam | Fix: Abort hung SDK queries with `AbortController` idle timeout | **Critical stability fix** — prevents container hangs from rate limits |
| [#1698](https://github.com/qwibitai/nanoclaw/pull/1698) | bitcryptic-gw | Fix: Auto-inject `ANTHROPIC_API_KEY` into new group `settings.json` | **Onboarding fix** — eliminates manual setup step |
| [#1556](https://github.com/qwibitai/nanoclaw/pull/1556) | florin1000 | Documentation improvements | Developer experience |
| [#1709](https://github.com/qwibitai/nanoclaw/pull/1709) | gorillahub | Feat: Log model to Token Usage + enforce allowlist | Cost tracking and governance |
| [#1708](https://github.com/qwibitai/nanoclaw/pull/1708) | dwalthour | Hotfix: Restore channels barrel import | **Regression fix** — unblocks builds |
| [#1715](https://github.com/qwibitai/nanoclaw/pull/1715) | gorillahub | Feat: Task model parameter | Task-level model selection (closed, superseded) |

**Key Themes:** Multi-tenant stability, container permission hardening, trigger system UX refinements, and SDK resilience against hangs.

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|:---|:---|:---|
| [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) — SSL cert invalid on nanoclaw.dev | 15 comments, open since 2026-03-28 | **Infrastructure debt** — documentation site reliability affects project credibility. 12-day duration suggests process gap in cert renewal. |
| [#1620](https://github.com/qwibitai/nanoclaw/issues/1620) — OAuth token billing changes | 6 comments | **Ecosystem alignment** — Anthropic's policy change forces documentation updates. Users need clear migration path from OAuth to API keys to avoid unexpected billing. |

### Emerging High-Value PRs

| PR | Significance |
|:---|:---|
| [#1721](https://github.com/qwibitai/nanoclaw/pull/1721) — Slack Socket Mode + multi-workspace | Enterprise deployment enabler; removes public URL requirement |
| [#1720](https://github.com/qwibitai/nanoclaw/pull/1720) — Multi-tenant session delegation | Architectural foundation for "router" pattern — classifier → specialist agent chains |
| [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) — Matrix channel with E2EE | Privacy-focused deployment option; full Rust crypto store integration |

**Underlying Needs:** Enterprise-ready deployment (no public URLs), sophisticated multi-agent orchestration, and privacy-preserving communication channels.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#1718](https://github.com/qwibitai/nanoclaw/issues/1718) — Missing `.catch()` on `outputChain` causes hang + runaway task re-dispatch | **Open, no fix yet** | None identified |
| 🟡 **High** | [#1719](https://github.com/qwibitai/nanoclaw/issues/1719) — `session-cleanup.ts` hardcodes `/bin/bash`, breaks Windows | **Closed** | [#1719](https://github.com/qwibitai/nanoclaw/issues/1719) — same-day resolution |
| 🟡 **High** | [#1713](https://github.com/qwibitai/nanoclaw/pull/1713) — Container user cannot write to `.claude` dir | **Merged** | [#1713](https://github.com/qwibitai/nanoclaw/pull/1713) |
| 🟡 **High** | [#1572](https://github.com/qwibitai/nanoclaw/pull/1572) — SDK query hangs without timeout | **Merged** | [#1572](https://github.com/qwibitai/nanoclaw/pull/1572) |
| 🟢 **Medium** | [#1702](https://github.com/qwibitai/nanoclaw/pull/1702) — IPC message loss in `for-await` loop | **Open, fix proposed** | [#1702](https://github.com/qwibitai/nanoclaw/pull/1702) |

**Critical Concern:** [#1718](https://github.com/qwibitai/nanoclaw/issues/1718) describes a cascading failure mode where unhandled Promise rejections in `container-runner.ts` can cause:
- `runContainerAgent` to never resolve
- `runTask` scheduler hangs
- `next_run` never advances
- Runaway scheduled task re-dispatch

This is a **production stability risk** requiring urgent attention. The fix is straightforward (add `.catch()` handlers) but not yet implemented.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Likelihood in Next Release | Rationale |
|:---|:---|:---|
| **Slack Socket Mode** ([#1721](https://github.com/qwibitai/nanoclaw/pull/1721)) | **High** | Complete implementation, enterprise demand, removes deployment friction |
| **Multi-tenant session delegation** ([#1720](https://github.com/qwibitai/nanoclaw/pull/1720)) | **High** | Enables core "router" architecture pattern; IPC infrastructure ready |
| **Matrix channel E2EE** ([#1624](https://github.com/qwibitai/nanoclaw/pull/1624)) | **Medium** | Feature-complete but complex (Rust crypto store); may need review cycle |
| **Group-level MCP servers** ([#1515](https://github.com/qwibitai/nanoclaw/pull/1515)) | **Medium** | Extends agent capabilities significantly; open since March 28 |
| **PR pre-flight checks** ([#1716](https://github.com/qwibitai/nanoclaw/pull/1716)) | **Medium** | Contributor quality-of-life; aligns with growing contribution volume |
| **OneCLI proxy for credentials** ([#1717](https://github.com/qwibitai/nanoclaw/pull/1717)) | **Medium** | Security hardening; removes secret injection from CLI |

**Architectural Direction:** The project is clearly evolving toward **multi-tenant, enterprise-deployable agent orchestration** with sophisticated routing, multiple communication channels, and hardened credential management.

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Impact | Frequency |
|:---|:---|:---|
| OAuth token billing surprise ([#1620](https://github.com/qwibitai/nanoclaw/issues/1620)) | Unexpected costs, confusion about "extra usage" | Emerging (policy change) |
| Windows compatibility ([#1719](https://github.com/q

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-10

## 1. Today's Overview

NullClaw shows **strong development velocity** with 16 PRs updated in the last 24 hours (11 merged/closed, 5 open) and 6 issues processed (4 closed, 2 open). The project demonstrates active maintenance with no new releases today, but substantial bug-fixing and feature refinement across core systems including configuration parsing, channel reliability, and onboarding UX. The contributor `manelsen` dominates today's activity with 10 PRs, indicating either a core maintainer or highly active community member driving rapid iteration. Overall project health appears **robust** with quick turnaround on reported issues.

---

## 2. Releases

**No new releases** (v2026.3.21 remains latest).

---

## 3. Project Progress

### Merged/Closed PRs Today (11 items)

| PR | Description | Impact |
|:---|:---|:---|
| [#728](https://github.com/nullclaw/nullclaw/pull/728) | Fix custom provider primary model parsing for Cloudflare AI endpoints | **Critical fix** — resolves config parsing for popular custom providers |
| [#732](https://github.com/nullclaw/nullclaw/pull/732) | QQ delayed reply fallback without msg_id | **Reliability** — fixes message loss on slow AI responses |
| [#731](https://github.com/nullclaw/nullclaw/pull/731) | Retry transient final outbound sends with failure classification | **Infrastructure** — improves channel resilience |
| [#735](https://github.com/nullclaw/nullclaw/pull/735) | Web-discovered skill installs via `.well-known` | **Ecosystem** — enables skill marketplace/discovery |
| [#726](https://github.com/nullclaw/nullclaw/pull/726) | Interactive Telegram `/model` picker with pagination | **UX** — major chat interface improvement |
| [#725](https://github.com/nullclaw/nullclaw/pull/725) | Onboarding: unlimited model catalog, `:free` prioritization | **UX** — removes 20-model cap, better free tier discovery |
| [#724](https://github.com/nullclaw/nullclaw/pull/724) | OpenRouter reasoning traces in stream | **Provider capability** — exposes chain-of-thought |
| [#745](https://github.com/nullclaw/nullclaw/pull/745) | Refactor: shared file/web search helpers | **Code health** — DRY improvements in Zig codebase |
| [#744](https://github.com/nullclaw/nullclaw/pull/744) | Ollama scheduler tool alias normalization | **Bug fix** — tool call reliability |
| [#792](https://github.com/nullclaw/nullclaw/pull/792) | Fix stale wasm3/websocket Nix hashes | **Build stability** — fixes Nix builds after force-push |
| [#794](https://github.com/nullclaw/nullclaw/pull/794) | Pretty JSON config alignment fix | **UX** — fixes [#765](https://github.com/nullclaw/nullclaw/issues/765) malformed config output |

**Key Themes**: Channel reliability (3 PRs), onboarding polish (2 PRs), provider ecosystem expansion (2 PRs), code quality (2 PRs).

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#791](https://github.com/nullclaw/nullclaw/issues/791) Shell fails on physical Linux | 2 comments, **OPEN** | **Critical runtime blocker** — affects core functionality on native Linux deployments. User reports shell tools fail despite permissions. Needs immediate triage. |
| [#793](https://github.com/nullclaw/nullclaw/issues/793) System prompt inherits subagent prompt | 1 comment, **OPEN** | **Architecture bug** — agent composition logic corrupts default agent behavior. Affects multi-agent configurations. |
| [#730](https://github.com/nullclaw/nullclaw/pull/730) Durable outbound delivery outbox | Open, no comments | **Infrastructure investment** — addresses message durability at scale. Large architectural change awaiting review. |
| [#727](https://github.com/nullclaw/nullclaw/pull/727) Interactive multi-provider model picker | Open, no comments | **UX enhancement** — extends [#726](https://github.com/nullclaw/nullclaw/pull/726) to more platforms. Pending review. |

**Underlying Needs**: 
- **Reliability at scale**: Users need message delivery guarantees (#730, #731, #732)
- **Multi-platform UX parity**: Telegram improvements (#726) need extension to Discord/Slack/Lark (#727)
- **Agent composition correctness**: Subagent system needs architectural review (#793)

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| 🔴 **High** | [#791](https://github.com/nullclaw/nullclaw/issues/791) Shell execution broken on native Linux | **OPEN**, 2 days old | None yet |
| 🟡 **Medium** | [#793](https://github.com/nullclaw/nullclaw/issues/793) System prompt corruption via subagent inheritance | **OPEN**, 1 day old | None yet |
| 🟢 **Resolved** | [#765](https://github.com/nullclaw/nullclaw/issues/765) Malformed JSON config output | Closed | [#794](https://github.com/nullclaw/nullclaw/pull/794) |
| 🟢 **Resolved** | [#721](https://github.com/nullclaw/nullclaw/issues/721) Custom provider URL parsing error | Closed | [#728](https://github.com/nullclaw/nullclaw/pull/728) |
| 🟢 **Resolved** | [#722](https://github.com/nullclaw/nullclaw/issues/722) QQ disconnect on slow responses | Closed | [#732](https://github.com/nullclaw/nullclaw/pull/732) |

**Regression Risk**: [#791](https://github.com/nullclaw/nullclaw/issues/791) suggests possible sandboxing or permission model changes that broke native Linux shell execution — needs root cause analysis before next release.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likely Next Version? |
|:---|:---|:---|
| **Cron subagent system** | [#783](https://github.com/nullclaw/nullclaw/pull/783) — DB-backed scheduler, run history, JSON output | ✅ **High probability** — comprehensive implementation, 3 days old |
| **Durable message outbox** | [#730](https://github.com/nullclaw/nullclaw/pull/730) | ✅ **Likely** — pairs with reliability theme |
| **Multi-platform model picker** | [#727](https://github.com/nullclaw/nullclaw/pull/727) | ✅ **Likely** — builds on merged Telegram work |
| **Gateway rate limiting & security** | [#789](https://github.com/nullclaw/nullclaw/pull/789) — public bind safeguards, per-client rate limits | ⚠️ **Possible** — security hardening |
| **Responses API fixes** | [#790](https://github.com/nullclaw/nullclaw/pull/790) — tool schema, null handling | ⚠️ **Possible** — OpenAI compatibility |
| **`.well-known` skill standard** | [#734](https://github.com/nullclaw/nullclaw/issues/735) merged | ✅ **Shipped** — ecosystem alignment |

**Emerging Pattern**: NullClaw is investing heavily in **production reliability** (outbox, retries, cron) and **multi-platform chat UX** (interactive pickers), suggesting maturation toward enterprise/self-hosted deployment scenarios.

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Impact | Frequency |
|:---|:---|:---|
| Shell execution failures on Linux | Blocks core automation use cases | Reported 2x recently (#791) |
| Config file formatting | Developer experience friction | Fixed in #794 |
| QQ message loss on slow AI | Unreliable chat experience | Fixed in #732 |
| Custom provider parsing | Cloudflare/etc. integration broken | Fixed in #728 |

### Positive Signals
- **Rapid issue resolution**: 4/6 issues closed within 24h of update
- **Active skill ecosystem**: `.well-known` adoption shows community standards alignment
- **Multi-platform investment**: Telegram, QQ, Discord, Slack, Lark all receiving attention

### Use Case Evolution
Users appear to be deploying NullClaw for:
- **Self-hosted AI assistants** (Linux native runtime issues)
- **Multi-channel chatbots** (QQ, Telegram reliability needs)
- **Scheduled automation** (cron subagent demand)
- **Custom provider integrations** (Cloudflare, OpenRouter)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#791](https://github.com/nullclaw/nullclaw/issues/791) Shell on Linux | 2 days | 🔴 **Release blocker** | Maintainer triage, reproduction steps |
| [#793](https://github.com/nullclaw/nullclaw/issues/793) System prompt inheritance | 1 day | 🟡 **Architecture risk** | Design review of agent composition |
| [#730](https://github.com/nullclaw/nullclaw/pull/730) Durable outbox | 14 days | 🟡 **Large change** | Code review, performance testing |
| [#727](https://github.com/nullclaw/nullclaw/pull/727) Multi-provider picker | 14 days | 🟢 **Ready** | Final review, merge |
| [#783](https://github.com/nullclaw/nullclaw/pull/

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-10

## 1. Today's Overview

IronClaw shows **high-velocity development** with 50 PRs and 24 issues updated in the last 24 hours, indicating active iteration toward production readiness. The project is experiencing significant architectural transition pressure—simultaneously stabilizing the V2 engine, resolving OAuth integration failures with Google services, and preparing for multi-tenant deployments. No new releases were cut today, suggesting the team is accumulating changes for a larger version bump. The 39:11 open-to-merged PR ratio indicates substantial work-in-progress, with several high-risk XL-sized PRs in flight. Documentation migration and staging infrastructure improvements signal preparation for broader user adoption.

---

## 2. Releases

**No new releases** (v0.19.0 remains current).

Notable migration context: [Issue #1328](https://github.com/nearai/ironclaw/issues/1328) resolved a critical v0.18.0→v0.19.0 upgrade blocker (PostgreSQL migration checksum mismatch), confirming v0.19.0 is now safe to adopt.

---

## 3. Project Progress

### Merged/Closed PRs Today (11 total, key selections):

| PR | Description | Impact |
|:---|:---|:---|
| [#2220](https://github.com/nearai/ironclaw/pull/2220) | Demo/Abound staging merge — tools moved from SKILL.md to WASM binaries | **Production deployment** of financial services demo |
| [#2210](https://github.com/nearai/ironclaw/pull/2210) | Pre-bundle WASM extensions in staging Docker image | Faster cold starts, reduced runtime dependencies |
| [#2195](https://github.com/nearai/ironclaw/pull/2195) | Ship TUI in default binary | Improved local development experience |
| [#2153](https://github.com/nearai/ironclaw/pull/2153) | Dependency batch upgrade (30 crates) | Security/compat maintenance |
| [#2224](https://github.com/nearai/ironclaw/pull/2224) *(new, open)* | Wasmtime 28→43.0.1 upgrade + CI restore | **Critical security** (addresses vulnerable dependency) |

### Feature Advancement:
- **V2 Engine maturation**: [PR #2214](https://github.com/nearai/ironclaw/pull/2214) adds MCP client support in sandboxed containers—unblocks secure third-party tool execution
- **Deployment hardening**: Railway PaaS support ([PR #2219](https://github.com/nearai/ironclaw/pull/2219)), webhook route consolidation ([PR #2159](https://github.com/nearai/ironclaw/pull/2159))
- **Observability foundation**: Prometheus metrics endpoint merged via automated testing workflow ([Issue #2184](https://github.com/nearai/ironclaw/issues/2184))

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#2192](https://github.com/nearai/ironclaw/issues/2192) — "Simplify core abstractions: collapse 7 concepts into 3" | 2 comments, architecture label | **Developer experience crisis**: Contributors struggle with conceptual overhead (Tools/Channels/Signals/Routines/Skills/Extensions/Engines). Signal of maintainability debt requiring leadership decision. |
| [#2193](https://github.com/nearai/ironclaw/issues/2193) — "Remove V1 agent loop, fully migrate to Engine V2" | 2 comments, 35K LOC removal target | **Technical debt elimination**. V2 has 281 unit tests + 2457 LOC E2E; community ready to sunset V1 but needs maintainer coordination. |
| [#902](https://github.com/nearai/ironclaw/issues/902) — Google OAuth blocking | 5 comments, closed | **Enterprise adoption blocker** resolved with fallback provider option. Recurring theme: Google's OAuth policy enforcement breaking self-hosted instances. |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) — Abound demo (XL, 12 scopes) | Ongoing | Live customer deployment driving priority; includes Responses API fixes, credential injection, guardrails. |

**Underlying needs**: Reduced cognitive load for contributors, clean architectural boundaries, and reliable enterprise SaaS integrations.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| **High** | [#2206](https://github.com/nearai/ironclaw/issues/2206) — V2 engine `auth_url` not scheme-sanitized (XSS/SSRF vector) | **OPEN** | None yet |
| **High** | [#2180](https://github.com/nearai/ironclaw/issues/2180) — MCP tools unavailable in sandboxed jobs | **OPEN** | [#2214](https://github.com/nearai/ironclaw/pull/2214) (in progress) |
| **Medium** | [#2087](https://github.com/nearai/ironclaw/issues/2087) — Agent hang during Notion setup | **OPEN** | None |
| **Medium** | [#1998](https://github.com/nearai/ironclaw/issues/1998) — Slack connect flow broken | **OPEN** | None |
| **Medium** | [#1997](https://github.com/nearai/ironclaw/issues/1997) — Slack App unavailable (requires manual app creation) | **OPEN** | None |
| **Medium** | [#2221](https://github.com/nearai/ironclaw/issues/2221) — Empty registry false positive (`~/.cargo/registry` collision) | **OPEN** | [#2222](https://github.com/nearai/ironclaw/pull/2222) (ready) |
| **Low** | [#2201](https://github.com/nearai/ironclaw/issues/2201) — Response API path missing `/api/` prefix | **OPEN** | Needs backward-compat design |

**Regression pattern**: OAuth flows (Google, Slack, Gmail) remain fragile across multiple closed issues today—suggests systemic testing gap in auth integration suite.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version |
|:---|:---|:---|
| Voice note transcription (Whisper Large v3) | [#2223](https://github.com/nearai/ironclaw/issues/2223) | **High** — NEAR AI integration aligns with existing provider strategy |
| Deployment profiles (`IRONCLAW_PROFILE`) | [#2203](https://github.com/nearai/ironclaw/pull/2203) | **High** — PR open, reduces config complexity |
| Prometheus metrics endpoint | [#2184](https://github.com/nearai/ironclaw/issues/2184) | **Shipped** — Merged via automated test |
| Per-channel MCP/tool filtering | [#1378](https://github.com/nearai/ironclaw/pull/1378) | **Medium** — XL PR open since March 18, needs review bandwidth |
| Aliyun Coding Plan support | [#1446](https://github.com/nearai/ironclaw/pull/1446) | **Medium** — International expansion, XL scope |

**Predicted v0.20.0 themes**: V2 engine default, deployment profiles, observability stack, voice input.

---

## 7. User Feedback Summary

### Pain Points
| Source | Issue | Sentiment |
|:---|:---|:---|
| Self-hosted users | Google OAuth repeated failures ([#902](https://github.com/nearai/ironclaw/issues/902), [#1992](https://github.com/nearai/ironclaw/issues/1992), [#1829](https://github.com/nearai/ironclaw/issues/1829)) | 😤 Frustrated — "Access blocked" errors block core functionality |
| Private network deployers | HTTP-only LLM endpoints rejected ([#1754](https://github.com/nearai/ironclaw/issues/1754)) | 😤 Blocked — security policy too restrictive for air-gapped environments |
| New contributors | Missing/fragmented documentation ([#1174](https://github.com/nearai/ironclaw/issues/1174)) | 😕 Confused — resolved by docs migration ([#2188](https://github.com/nearai/ironclaw/issues/2188)) |
| End users | Agent unresponsiveness during tool setup ([#2087](https://github.com/nearai/ironclaw/issues/2087)) | 😟 Uncertain — UI feedback gaps |

### Positive Signals
- TUI inclusion in default binary welcomed by local developers
- Staging promotion automation indicates mature CI/CD
- Documentation consolidation ([#2188](https://github.com/nearai/ironclaw/issues/2188)) addresses long-standing gap

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1446](https://github.com/nearai/ironclaw/pull/1446) Aliyun support | 21 days | XL PR, international market | Maintainer review, conflict resolution |
| [#1378](https://github.com/nearai/ironclaw/pull/1378) Per-channel MCP filtering | 22 days | Core architecture, security | Design review, merge decision |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) Ab

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-10

## 1. Today's Overview

LobsterAI shows **high development velocity** with 37 PRs updated in the last 24 hours (24 open, 13 merged/closed) against only 3 new issues, indicating an active stabilization push. The project is in a **critical bug-fixing phase** following the April 8 release, with multiple crash reports and compatibility issues surfacing. Core infrastructure work dominates: database integrity fixes, gateway configuration hardening, and cowork session reliability improvements. No new releases were cut today, suggesting the team is accumulating fixes before the next version. The high PR-to-issue ratio (12:1) reflects strong maintainer responsiveness to emerging problems.

---

## 2. Releases

**No new releases** — The project remains at version `2026.04.08` (released April 8, 2026). Given the volume of critical fixes in flight, a hotfix release appears imminent.

---

## 3. Project Progress

### Merged/Closed PRs Today (13 total, selected highlights)

| PR | Area | Summary | Impact |
|:---|:---|:---|:---|
| [#1608](https://github.com/netease-youdao/LobsterAI/pull/1608) | `main` | Fix `getConfig()` to read persisted `executionMode` from database instead of hardcoded `'local'` | Resolves config persistence bug |
| [#1609](https://github.com/netease-youdao/LobsterAI/pull/1609) | `main` | Only mark memory migration complete on success | Prevents data loss on failed migrations |
| [#1605](https://github.com/netease-youdao/LobsterAI/pull/1605) | `renderer` | Fix MCP list command text overflow causing key label wrapping | UI polish |
| [#1604](https://github.com/netease-youdao/LobsterAI/pull/1604) | `renderer` | Dark mode fixes: prompt card border and toggle visibility | Visual consistency |
| [#1596](https://github.com/netease-youdao/LobsterAI/pull/1596) | `renderer`, `main`, `openclaw`, `cowork` | Remove `_agentBinding` sentinel from channel config; limit attachment list max-height | **Critical**: Fixes gateway restart loops |

**Key Advances:**
- **OpenClaw gateway stabilization**: Multiple PRs address schema compatibility and restart loop issues
- **Database integrity**: Foreign key constraints enabled, migration reliability improved
- **Cowork reliability**: Session lifecycle, message sequencing, and error handling hardened

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#1611](https://github.com/netease-youdao/LobsterAI/pull/1611) — Fix gateway config schema compatibility | **Highest priority fix** | Addresses critical restart loop affecting all OpenClaw users; removes `_agentBinding` sentinel pattern |
| [#1610](https://github.com/netease-youdao/LobsterAI/pull/1610) — Add session retention duration config | Feature + bugfix combo | 30-day default with hidden UI; also fixes timezone drift in scheduled tasks |
| [#479](https://github.com/netease-youdao/LobsterAI/pull/479) — "Latest version update" | Long-running PR (Mar 18→Apr 9) | Appears to be a version bump PR accumulating changes; may indicate release branch management challenges |

**Underlying Needs:** Users need **stable gateway operation** and **predictable session lifecycle management**. The volume of cowork-related fixes suggests this is a heavily-used feature with edge cases in production.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 Critical** | [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587) | **Crash on first launch after update** — macOS Intel, app闪退 (flash crash) | ❌ No fix PR yet |
| **🔴 Critical** | [#1589](https://github.com/netease-youdao/LobsterAI/issues/1589) | **Session and scheduled task execution failures** — core functionality broken | ❌ No fix PR yet |
| **🟡 High** | [#1611](https://github.com/netease-youdao/LobsterAI/pull/1611) | Gateway restart loop from schema incompatibility | ✅ Fix PR open |
| **🟡 High** | [#1597](https://github.com/netease-youdao/LobsterAI/pull/1597) | Foreign key constraints disabled → orphan data | ✅ Fix PR open |
| **🟡 High** | [#1603](https://github.com/netease-youdao/LobsterAI/pull/1603) | Duplicate error messages and swallowed exceptions in cowork | ✅ Fix PR open |
| **🟢 Medium** | [#1586](https://github.com/netease-youdao/LobsterAI/issues/1586) | Incomplete language switching (Chinese→English) | ❌ No fix PR yet |
| **🟢 Medium** | [#1600](https://github.com/netease-youdao/LobsterAI/pull/1600) | Scheduled task dirty check false positive | ✅ Fix PR open |

**Stability Assessment:** The April 8 release introduced **regressions in core functionality** (startup crashes, session execution). The rapid PR response is positive, but the lack of fixes for #1587 and #1589 is concerning—these block basic usage for affected users.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|:---|:---|:---|
| **Session retention policy controls** | [#1610](https://github.com/netease-youdao/LobsterAI/pull/1610) | **High** — Implementation complete, UI hidden for gradual rollout |
| **Enhanced search (content + cross-agent)** | [#1594](https://github.com/netease-youdao/LobsterAI/pull/1594) | **High** — PR open, addresses clear UX gap |
| **Agent ID generation overhaul** | [#1584](https://github.com/netease-youdao/LobsterAI/pull/1584) | **Medium** — Breaking change, short UUIDs to prevent data resurrection |
| **NetEase Bee secret management** | [#1606](https://github.com/netease-youdao/LobsterAI/pull/1606) | **High** — Security hardening, aligns with other IM channels |
| **Anthropic/Gemini SSE reliability** | [#1607](https://github.com/netease-youdao/LobsterAI/pull/1607) | **High** — Streaming robustness fix |

**Predicted Next Release Focus:** Stability-first hotfix with session management improvements and gateway hardening.

---

## 7. User Feedback Summary

### Pain Points (from issues)
| Issue | User | Core Complaint |
|:---|:---|:---|
| [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587) | @gongfen0121 | **Update broke everything** — cannot launch after update |
| [#1589](https://github.com/netease-youdao/LobsterAI/issues/1589) | @gongfen0121 | **Two core features dead** — sessions and scheduled tasks fail |
| [#1586](https://github.com/netease-youdao/LobsterAI/issues/1586) | @QinGang746 | **Polish gaps** — language switching incomplete in legal/terms sections |

### Satisfaction Indicators
- **Positive:** Rapid maintainer response (same-day PRs for reported issues)
- **Negative:** Release quality control concerns—two critical bugs in one release suggest insufficient testing on macOS Intel

**Use Case Signal:** Heavy reliance on **cowork (collaborative sessions)** and **scheduled automation** — users treating LobsterAI as a production assistant, not just a chat interface.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#479](https://github.com/netease-youdao/LobsterAI/pull/479) — "Latest version update" | 22 days | **High** | Unclear scope; may be blocking release branch. Needs maintainer decision: merge or close. |
| [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587), [#1589](https://github.com/netease-youdao/LobsterAI/issues/1589) | 1 day | **Critical** | No assigned fix PR. Needs immediate triage and likely hotfix release. |

**Recommendation:** The project should prioritize a `2026.04.10` hotfix addressing the startup crash (#1587) and session failures (#1589) before accumulating more changes.

---

*Digest generated from GitHub activity 2026-04-09. All links: [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-10

## 1. Today's Overview

Moltis demonstrated **exceptional engineering velocity** on 2026-04-09 with **23 merged/closed PRs** and **14 resolved issues** against zero open issues, indicating a highly responsive maintenance cycle. The project released **20260409.01** following intensive provider ecosystem hardening, particularly around reasoning model support (GPT-5.x, Gemini 3.x) and critical bug fixes for LM Studio, MiniMax, and Ollama integrations. Activity concentrated on **provider compatibility**, **configuration system robustness**, and **developer experience improvements**—suggesting the project is in a stabilization phase preparing for broader adoption. The single open PR (#604, Dependabot dependency bumps) reflects healthy dependency hygiene rather than technical debt.

---

## 2. Releases

### [20260409.01](https://github.com/moltis-org/moltis/releases/tag/20260409.01)

**Release Date:** 2026-04-09

This release consolidates approximately 23 merged fixes and features from the past 24 hours. Key themes include:

| Category | Changes |
|----------|---------|
| **Provider Ecosystem** | GPT-5.x and Gemini 3.x model support; MiniMax system prompt fix; LM Studio reasoning stream fix; Ollama 404 resolution; Alibaba Cloud Coding Plan provider |
| **Configuration** | Configurable workspace file limits (`workspace_file_max_chars`); wired `ExecConfig` timeout/output limits |
| **Reliability** | BOOT.md injection fix; Podman container detection; inotify watcher scope reduction |
| **Developer Experience** | Visible truncation warnings; Settings sidebar Projects navigation; installation docs fixes |

**Breaking Changes:** None identified in PR summaries.

**Migration Notes:** Users with custom `[tools.exec]` configurations should verify `default_timeout_secs` now takes effect; MiniMax users will see corrected system prompt behavior.

---

## 3. Project Progress

### Merged/Closed PRs (23 total)

#### Provider Ecosystem Hardening
- **[#621](https://github.com/moltis-org/moltis/pull/621)** — Alibaba Cloud Coding Plan provider (9 models, Qwen3 128k context detection)
- **[#622](https://github.com/moltis-org/moltis/pull/622)** — MiniMax system prompt fix + live integration tests for 11 providers; GPT-5 reasoning probe fix
- **[#618](https://github.com/moltis-org/moltis/pull/618)** — Ollama 404 fix: aligned default base URL to `localhost:11434`, added `/api/show` fallback
- **[#605](https://github.com/moltis-org/moltis/pull/605)** — Gemini 3.x model catalog expansion with reasoning support
- **[#611](https://github.com/moltis-org/moltis/pull/611)** — MiniMax system message extraction to top-level field
- **[#620](https://github.com/moltis-org/moltis/pull/620)** — LM Studio `reasoning_content` streaming regression test
- **[#607](https://github.com/moltis-org/moltis/pull/607)** — LM Studio reasoning stream regression coverage
- **[#613](https://github.com/moltis-org/moltis/pull/613)** — `ModelCapabilities` struct for resolved capability metadata

#### Configuration & Tooling Fixes
- **[#617](https://github.com/moltis-org/moltis/pull/617)** — Wired `ExecConfig` timeout and `max_output_bytes` to `ExecTool`
- **[#610](https://github.com/moltis-org/moltis/pull/610)** — Configurable workspace file truncation (6K → 50K default, `workspace_file_max_chars` setting)
- **[#612](https://github.com/moltis-org/moltis/pull/612)** — Surface workspace prompt truncation visibility to humans
- **[#614](https://github.com/moltis-org/moltis/pull/614)** — BOOT.md injection fix: moved from broken hook to system prompt

#### Infrastructure & Reliability
- **[#609](https://github.com/moltis-org/moltis/pull/609)** — Podman container availability detection
- **[#608](https://github.com/moltis-org/moltis/pull/608)** — Narrowed inotify watcher scope for installed skills (fixes exhaustion issue)
- **[#619](https://github.com/moltis-org/moltis/pull/619)** — User-Agent preservation across HTTP client fallback paths

#### UI/UX
- **[#624](https://github.com/moltis-org/moltis/pull/624)**, **[#623](https://github.com/moltis-org/moltis/pull/623)** — Projects added to Settings sidebar navigation
- **[#625](https://github.com/moltis-org/moltis/pull/625)** — Cron schedule field persistence across modal re-renders

#### Documentation
- **[#606](https://github.com/moltis-org/moltis/pull/606)** — Fixed stale Linux install asset URLs, routed through `install.sh`

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#597](https://github.com/moltis-org/moltis/issues/597) — LM Studio `reasoning_content` streaming | 2 comments, resolved | **Real-time reasoning display** is a critical UX need; users expect streaming reasoning visibility for local models |
| [#579](https://github.com/moltis-org/moltis/issues/579) — Session rotation for channel DMs | 2 comments, resolved | **Token limit management** in persistent conversations—users hitting context limits need automatic session management |
| [#596](https://github.com/moltis-org/moltis/issues/596) — inotify exhaustion from disabled skills | 1 comment, resolved | **Resource efficiency** matters at scale; file watching needs to respect enabled/disabled state |

**Underlying Needs:**
- **Local-first AI workflows** (LM Studio, Ollama) require first-class treatment equal to cloud providers
- **Long-running agent sessions** need proactive resource management (tokens, file handles)
- **Silent failures are unacceptable** — community expects visible warnings for truncation, timeouts, and configuration mismatches

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#616](https://github.com/moltis-org/moltis/issues/616) — `exec` tool ignores `default_timeout_secs` config | Closed | [#617](https://github.com/moltis-org/moltis/pull/617) |
| **Critical** | [#594](https://github.com/moltis-org/moltis/issues/594) — BOOT.md hook no-op (content never injected) | Closed | [#614](https://github.com/moltis-org/moltis/pull/614) |
| **High** | [#597](https://github.com/moltis-org/moltis/issues/597) — LM Studio reasoning not streamed | Closed | [#620](https://github.com/moltis-org/moltis/pull/620), [#607](https://github.com/moltis-org/moltis/pull/607) |
| **High** | [#592](https://github.com/moltis-org/moltis/issues/592) — MiniMax system role rejection | Closed | [#622](https://github.com/moltis-org/moltis/pull/622), [#611](https://github.com/moltis-org/moltis/pull/611) |
| **High** | [#615](https://github.com/moltis-org/moltis/issues/615) — Ollama model selection 404 | Closed | [#618](https://github.com/moltis-org/moltis/pull/618) |
| **Medium** | [#596](https://github.com/moltis-org/moltis/issues/596) — inotify watches on disabled skills | Closed | [#608](https://github.com/moltis-org/moltis/pull/608) |
| **Medium** | [#593](https://github.com/moltis-org/moltis/issues/593) — AGENTS.md/TOOLS.md silent truncation | Closed | [#610](https://github.com/moltis-org/moltis/pull/610), [#612](https://github.com/moltis-org/moltis/pull/612) |
| **Medium** | [#588](https://github.com/moltis-org/moltis/issues/588) — Podman ignored in container check | Closed | [#609](https://github.com/moltis-org/moltis/pull/609) |
| **Low** | [#599](https://github.com/moltis-org/moltis/issues/599) — LM Studio rejected by provider-setup | Closed | (implied in provider hardening) |
| **Low** | [#595](https://github.com/moltis-org/moltis/issues/595) — Linux package install docs wrong filenames | Closed | [#606](https://github.com/moltis-org/moltis/pull/606) |

**Stability Assessment:** All reported bugs from the 24-hour window have been resolved. The project shows **zero open issues**, indicating either exceptional triage velocity or possible issue closure automation. No regressions introduced by fixes were reported.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version |
|---------|-------|---------------------------|
| GPT-5.x reasoning support | [#601](https://github.com/moltis-org/moltis/issues/601), [#602](https://github.com/moltis-org/moltis/issues/602) | **Shipped** in 20260409.01 |
| Gemini 3.x catalog expansion | [#603](https://github.com/moltis-org/moltis/issues/603) | **Shipped** in 20260409.01 |
| Session rotation for channel DMs | [#579](https://github.com/moltis-org/moltis/issues/579) | **Medium** — architectural change, user demand confirmed |
| Model capability metadata | (implied by [#613](https://github.com/moltis-org/moltis/pull/613)) | **Shipped** — foundation for future features |

**Emerging Patterns:**
- **Multi-provider reasoning model support** is now table stakes; expect rapid addition of new model families
- **Session/context management** appears to be the next frontier beyond provider compatibility

---

## 7. User Feedback Summary

### Pain Points Addressed
| Pain Point | Evidence | Resolution |
|------------|----------|------------|
| Configuration values silently ignored | [#616](https://github.com/moltis-org/moltis/issues/616) | Fixed with proper wiring + builder pattern |
| Local model UX gaps (streaming, discovery) | [#597](https://github.com/moltis-org/moltis/issues/597), [#615](https://github.com/moltis-org/moltis/issues/615), [#599](https://github.com/moltis-org/moltis/issues/599) | Comprehensive LM Studio/Ollama hardening |
| Resource exhaustion (inotify, tokens) | [#596](https://github.com/moltis-org/moltis/issues/596), [#579](https://github.com/moltis-org/moltis/issues/579) | Scoped watchers, session rotation requested |
| Silent data loss | [#593](https://github.com/moltis-org/moltis/issues/593), [#594](https://github.com/moltis-org/moltis/issues/594) | Visible warnings, functional BOOT.md |

### Use Cases
- **Local/self-hosted AI workflows** (LM Studio, Ollama, Podman) — major investment area
- **Enterprise multi-provider deployments** — Alibaba Cloud, MiniMax, Gemini integrations
- **Long-running autonomous agents** — session management, file watching, configuration durability

### Satisfaction Indicators
- Rapid issue-to-PR-to-merge cycles (same-day resolution for critical bugs)
- Zero open issues suggests either excellent service or aggressive triage
- Comprehensive test coverage added alongside fixes (regression tests for LM Studio, live integration tests for 11 providers)

---

## 8. Backlog Watch

**Status: No actionable backlog identified**

All 14 issues from the 24-hour window are closed. The single open PR ([#604](https://github.com/moltis-org/moltis/pull/604)) is a routine Dependabot dependency update with no maintainer attention required.

**Monitoring Recommendations:**
- Watch for recurrence of [#579](https://github.com/moltis-org/moltis/issues/579) session rotation — if not implemented, users may hit token limits in production
- Track whether [#596](https://github.com/moltis-org/moltis/issues/596) inotify fix fully resolves resource exhaustion at scale
- Verify [#614](https://github.com/moltis-org/moltis/pull/614) BOOT.md fix meets user expectations for session initialization customization

---

*Digest generated from GitHub activity 2026-04-09. All links: https://github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-10

## 1. Today's Overview

CoPaw shows **high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, indicating an active release cycle around v1.0.2. The project just shipped **v1.0.2 stable** alongside a hotfix beta, with the team aggressively reverting problematic website optimizations. Community engagement is strong with 54 comments on the contribution tracking issue, though the 29:21 open-to-closed issue ratio suggests incoming reports slightly outpace resolutions. The focus areas are **plugin extensibility**, **model provider stability**, and **console UX refinements**. Several critical bugs around custom model providers and Docker data persistence were addressed same-day.

---

## 2. Releases

### [v1.0.2](https://github.com/agentscope-ai/CoPaw/releases/tag/v1.0.2) (Stable)
| Aspect | Details |
|--------|---------|
| **Key Additions** | **Plugin system**: Install extensions from workspace `plugins/` folder ([#3101](https://github.com/agentscope-ai/CoPaw/pull/3101), [#3131](https://github.com/agentscope-ai/CoPaw/pull/3131), [#3132](https://github.com/agentscope-ai/CoPaw/pull/3132)); **`copaw task` CLI command** (Ru... truncated) |
| **Breaking Changes** | None documented |
| **Migration Notes** | Plugins now load from `plugins/` folder in workspace—existing plugin paths may need adjustment |

### [v1.0.2-beta.2](https://github.com/agentscope-ai/CoPaw/releases/tag/v1.0.2-beta.2) (Hotfix)
- Emergency reverts of website optimizations ([#3112](https://github.com/agentscope-ai/CoPaw/pull/3112), [#3115](https://github.com/agentscope-ai/CoPaw/pull/3115), [#3116](https://github.com/agentscope-ai/CoPaw/pull/3116)) due to performance regressions
- Suggests v1.0.2 stable release was preceded by deployment issues

---

## 3. Project Progress

### Merged/Closed PRs (32 total, selected highlights)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#1209](https://github.com/agentscope-ai/CoPaw/pull/1209) | vvv214 | **Chat routing selector** — wires `agents.llm_routing` config into chat runtime with header selector for explicit model switching | Core UX feature now end-to-end functional |
| [#1089](https://github.com/agentscope-ai/CoPaw/pull/1089) | vvv214 | **LLM routing configuration** in web/CLI (`copaw models routing show\|config\|disable`) | Model fallback behavior now configurable |
| [#3149](https://github.com/agentscope-ai/CoPaw/pull/3149) | qbc2016 | **MCP tool listing support** | Expands MCP (Model Context Protocol) capabilities |
| [#3150](https://github.com/agentscope-ai/CoPaw/pull/3150) | Leirunlin | **Skill commands** — `/skills` listing and `/<skill> <input>` invocation | Power-user CLI productivity |
| [#3141](https://github.com/agentscope-ai/CoPaw/pull/3141), [#3158](https://github.com/agentscope-ai/CoPaw/pull/3158) | zhaozhuang521 | **Frontend performance**: Vite `manualChunks` splitting + React.memo hover optimization | Addresses console sluggishness |
| [#3079](https://github.com/agentscope-ai/CoPaw/pull/3079) | linhuang0405 | **WeCom attachment fix** for server deployments | Enterprise channel reliability |
| [#2987](https://github.com/agentscope-ai/CoPaw/pull/2987) | shadowabi | **Cancel race condition fix** — resolves "stop button doesn't work" in console chat | Critical UX bug fix |

**Infrastructure**: CI/CD improvements for PyPI publishing ([#3172](https://github.com/agentscope-ai/CoPaw/pull/3172)), environment variable migration to `QWENPAW_*` prefix ([#3171](https://github.com/agentscope-ai/CoPaw/pull/3171)), and release note updates ([#3168](https://github.com/agentscope-ai/CoPaw/pull/3168)).

---

## 4. Community Hot Topics

| Issue/PR | Activity | Underlying Need |
|:---|:---|:---|
| [#2291](https://github.com/agentscope-ai/CoPaw/issues/2291) — "Help Wanted: Open Tasks" | **54 comments**, P0-P2 task tracking | **Contributor onboarding friction** — centralized task board needed for distributed contributors; status updates require manual @mentions |
| [#1911](https://github.com/agentscope-ai/CoPaw/issues/1911) — 小艺 (Huawei Xiaoyi) channel issues | **21 comments** | **Third-party channel reliability** — Huawei ecosystem integration gaps; "network congestion" errors suggest timeout/retry logic needs hardening |
| [#3063](https://github.com/agentscope-ai/CoPaw/issues/3063) — Feishu async lock event loop conflict | **10 comments**, closed | **Async architecture stability** — classic Python `asyncio` event loop binding bug in long-lived connections |
| [#3045](https://github.com/agentscope-ai/CoPaw/issues/3045) — Auto model fetch unavailable | **8 comments** | **Model discovery UX** — "automatic model fetching" feature unclear/broken; needs better error messaging |
| [#2831](https://github.com/agentscope-ai/CoPaw/issues/2831) — Web console `write_file` infinite retry | **7 comments** | **Agent tool failure handling** — missing `path`/`content` parameters cause unkillable loops; stop button state machine broken |

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| **🔴 High** | [#3165](https://github.com/agentscope-ai/CoPaw/issues/3165) — MCP `streamable_http_client` crashes with headers | **Closed** | [#3167](https://github.com/agentscope-ai/CoPaw/pull/3167) |
| **🔴 High** | [#3162](https://github.com/agentscope-ai/CoPaw/issues/3162) — All `aliyun-codingplan` models fail with 422 `scope` required | **Closed** | Same-day fix (unnumbered) |
| **🟡 Medium** | [#3161](https://github.com/agentscope-ai/CoPaw/issues/3161) — Custom provider "connection failed" UI vs. CLI mismatch | **Closed** | — |
| **🟡 Medium** | [#3139](https://github.com/agentscope-ai/CoPaw/issues/3139) — Custom model provider can't fetch models | **Closed** | — |
| **🟡 Medium** | [#3045](https://github.com/agentscope-ai/CoPaw/issues/3045) — Auto model fetch broken | **Open** | None |
| **🟡 Medium** | [#2831](https://github.com/agentscope-ai/CoPaw/issues/2831) — Unstoppable `write_file` retry loops | **Open** | None |
| **🟡 Medium** | [#2911](https://github.com/agentscope-ai/CoPaw/issues/2911) — Windows desktop client auto-crashes after hours | **Open** | None |
| **🟢 Low** | [#2984](https://github.com/agentscope-ai/CoPaw/issues/2984) — Wrong chat window shown after agent switch | **Closed** | [#2982](https://github.com/agentscope-ai/CoPaw/pull/2982) |

**Regression Alert**: Website performance optimizations ([#3067](https://github.com/agentscope-ai/CoPaw/pull/3067)) were **fully reverted** after deployment issues — indicates insufficient staging validation.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **In-chat chart rendering** (line/pie/bar) | [#3124](https://github.com/agentscope-ai/CoPaw/issues/3124) | **High** | Explicitly "对标豆包/ChatGPT" (benchmark against competitors); aligns with data analysis use case |
| **Provider-agnostic conversation history** | [#2314](https://github.com/agentscope-ai/CoPaw/issues/2314) | **Medium** | Core architecture change; comments suggest active design consideration |
| **Session "pinning" within agent** | [#2936](https://github.com/agentscope-ai/CoPaw/issues/2936) | **Medium** | UX pain point from multi-agent collaboration workflows |
| **Magic command `/model` switching** | [#2087](https://github.com/agentscope-ai/CoPaw/issues/2087)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*