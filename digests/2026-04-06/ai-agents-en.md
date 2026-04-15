# OpenClaw Ecosystem Digest 2026-04-06

> Issues: 500 | PRs: 500 | Projects covered: 11 | Generated: 2026-04-06 00:11 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
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

# OpenClaw Project Digest — 2026-04-06

## 1. Today's Overview

OpenClaw shows **exceptionally high community activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a mature, actively maintained project at scale. The 72% issue closure rate (139/500) and 47% PR merge rate (234/500) demonstrate healthy throughput, though the 266 open PRs suggest a potential backlog forming. Notably, **zero new releases** were published today, despite significant bug-fix activity and feature development continuing in the main branch. The project appears focused on **stability hardening** and **provider integration fixes** rather than major feature launches. Critical regressions in model routing, CLI backends, and channel integrations dominate recent reports, suggesting rapid iteration may be introducing breaking changes.

---

## 2. Releases

**No new releases** — Version 2026.4.1 (released ~April 1) remains current, with development activity concentrated on main branch fixes.

---

## 3. Project Progress

### Merged/Closed PRs Today (Selected Significant Items)

| PR | Title | Impact |
|:---|:---|:---|
| [#60437](https://github.com/openclaw/openclaw/pull/60437) | refactor: share plugin update install args | **Infrastructure** — Unifies plugin installer logic across npm/ClawHub/marketplace; reduces maintenance surface |
| [#61560](https://github.com/openclaw/openclaw/pull/61560) | fix(openai): avoid em dashes in gpt-5 overlay | **Model compatibility** — Fixes tokenization edge case in GPT-5 responses |
| [#61555](https://github.com/openclaw/openclaw/pull/61555) / [#61533](https://github.com/openclaw/openclaw/pull/61533) | Lobster: add managed TaskFlow mode | **Extension capability** — Enables persistent workflow state for Lobster plugin; *closed as duplicate* |
| [#61523](https://github.com/openclaw/openclaw/pull/61523) | Lobster: run workflows in process | **Performance/architecture** — Eliminates subprocess overhead, enables tighter TaskFlow integration |
| [#49916](https://github.com/openclaw/openclaw/pull/49916) / [#49792](https://github.com/openclaw/openclaw/pull/49792) | docs: add NemoSidecar / NovaSpine Memory plugins | **Ecosystem growth** — Community plugin documentation |

### Active Development (Open PRs)

| PR | Title | Significance |
|:---|:---|:---|
| [#38780](https://github.com/openclaw/openclaw/pull/38780) | feat: context-pressure-aware continuation | **Major feature** — Agents self-manage turn continuation and compaction; XL-sized |
| [#60951](https://github.com/openclaw/openclaw/pull/60951) | feat(plugins): session followup turn API | **Platform extension** — Plugins can schedule proactive agent turns |
| [#60984](https://github.com/openclaw/openclaw/pull/60984) | feat(agents): fallback context modes | **Reliability** — Graceful degradation with safe/light context modes on model fallback |
| [#61547](https://github.com/openclaw/openclaw/pull/61547) | feat(memory): add Bedrock embedding provider | **AWS integration** — Native Titan/Cohere embeddings for memory search |
| [#51762](https://github.com/openclaw/openclaw/pull/51762) | feat: configurable default agent ID | **UX** — Eliminates ghost `agents/main/` directory regeneration |

---

## 4. Community Hot Topics

### Highest Engagement Issues

| Issue | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | 120 | i18n/Localization support | **Global accessibility** — Community demand for non-English interfaces; maintainers explicitly declined due to bandwidth constraints, signaling need for community-led contribution model |
| [#49971](https://github.com/openclaw/openclaw/issues/49971) | 68 | RFC: Native Agent Identity & Trust Verification | **Enterprise security** — Decentralized identity (DID/VC) for agent-to-agent trust; indicates demand for production-grade identity infrastructure |
| [#40631](https://github.com/openclaw/openclaw/issues/40631) | 21 | Recurring execution stall | **Reliability** — Critical operational bug where agents falsely confirm action start; affects production deployments |
| [#14593](https://github.com/openclaw/openclaw/issues/14593) | 20 | Docker skill install fails (brew dependency) | **Container deployment** — Skills assume macOS package manager; blocks Linux/Docker adoption |
| [#46049](https://github.com/openclaw/openclaw/issues/46049) | 20 | LLM timeout ignores configuration | **Operational control** — Hardcoded timeouts break long-running tasks |

### Analysis

The **i18n issue's 120 comments** with maintainer closure reveals tension between global user demand and core team capacity. The **Agent Identity RFC** (#49971) suggests enterprise users are pushing OpenClaw toward decentralized, verifiable agent ecosystems—potentially competing with specialized agent identity protocols.

---

## 5. Bugs & Stability

### Critical/High Severity (Production-Impacting)

| Issue | Severity | Description | Fix Status |
|:---|:---|:---|:---|
| [#61093](https://github.com/openclaw/openclaw/issues/61093) | **Critical** | `claude-cli` backend fails to register models after 2026.4.2 update — `model_not_found` for all claude-cli/* | **PR #61555 area** — Active fix in progress |
| [#53959](https://github.com/openclaw/openclaw/issues/53959) | **Critical** | `openai-codex/gpt-5.3-codex` stops executing tools after 2026.3.23-2 | No dedicated PR identified |
| [#54844](https://github.com/openclaw/openclaw/issues/54844) | **High** | `github-copilot/gpt-5-mini` fails with 400 `invalid_request_body` | Regression from 2026.3.24 |
| [#57099](https://github.com/openclaw/openclaw/issues/57099) | **High** | Explicit `api ollama` provider fails with "No API provider registered" after 2026.3.28 | Provider registration regression |
| [#58878](https://github.com/openclaw/openclaw/issues/58878) | **High** | Heartbeat routes to subagent session, corrupting results | Session routing bug |
| [#59598](https://github.com/openclaw/openclaw/issues/59598) | **High** | Embedded run failover due to timeout after 2026.4.1 | New in latest version |

### Medium Severity (Workarounds Exist)

| Issue | Description | Workaround |
|:---|:---|:---|
| [#51056](https://github.com/openclaw/openclaw/issues/51056) | OpenRouter 401 — missing Authorization header | Manual header injection |
| [#40631](https://github.com/openclaw/openclaw/issues/40631) | Execution stall with false "started" state | Restart agent session |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | Tool call text leaks to messaging channels | Filter at channel level |

### Regression Pattern Alert

Multiple issues cite **2026.3.22–2026.3.28** as regression window for:
- Model catalog registration
- Provider API format detection  
- Session routing

This suggests a **refactoring of provider/model resolution** introduced breaking changes.

---

## 6. Feature Requests & Roadmap Signals

### Near-Term Likely (Active PRs + High Demand)

| Feature | Evidence | Predicted Timeline |
|:---|:---|:---|
| **Context-pressure-aware continuation** | PR #38780 (XL, active) | 2026.4.x |
| **Bedrock embedding provider** | PR #61547, PR #61563 | 2026.4.2+ |
| **Configurable default agent ID** | PR #51762, long-standing pain point | 2026.4.x |
| **Lobster in-process workflows** | PR #61523 merged, PR #61566 hardening | Available now |

### Medium-Term (RFCs + Community Demand)

| Feature | Evidence | Blockers |
|:---|:---|:---|
| **Agent-to-Agent Task Delegation Protocol** | Issue [#28106](https://github.com/openclaw/openclaw/issues/28106) — 5 comments | Requires identity/trust infrastructure |
| **Native Agent Identity (DID/VC)** | Issue [#49971](https://github.com/openclaw/openclaw/issues/49971) — 68 comments | Standards alignment, security review |
| **Proactive model fallback** | Issue [#22282](https://github.com/openclaw/openclaw/issues/22282) | Rate limit header standardization |
| **Gemini Context Caching** | Issue [#51372](https://github.com/openclaw/openclaw/issues/51372) — *closed* | Implemented? Verify in release notes |

### Explicitly Deferred

| Feature | Status | Rationale |
|:---|:---|:---|
| **i18n/Localization** | [#3460](https://github.com/openclaw/openclaw/issues/3460) closed | Maintainer bandwidth constraint |

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Category | Issue | Frequency |
|:---|:---|:---|
| **Configuration fragility** | Model fallbacks reset silently; provider configs break on updates | Recurring (#29564, #57099, #61093) |
| **Docker/container gaps** | Brew dependency in Linux containers; proxy env vars ignored | Blocking adoption (#14593, #30075) |
| **Timeout/control loss** | Hardcoded timeouts ignore config; execution stalls | Production-critical (#46049, #40631) |
| **Channel reliability** | Telegram 409 conflicts, WhatsApp Web listener failures, WebSocket 4008 | Multi-channel users affected (#49822, #51558, #30458) |
| **Subagent/orchestration bugs** | ACP sessions die silently; heartbeat misrouting | Advanced users (#52452, #58878) |

### Positive Signals

- **Active iOS TestFlight demand** — [#44074](https://github.com/openclaw/openclaw/issues/44074), [#56265](https://github.com/openclaw/openclaw/issues/56265) show mobile ecosystem interest
- **Community plugin ecosystem** — NovaSpine, NemoSidecar, NovaAdapt plugins being documented
- **Enterprise feature engagement** — Agent identity RFC receiving detailed technical feedback

### Use Case Evolution

Users progressing from **personal assistant** → **multi-agent orchestration** → **decentralized agent economy**, but hitting infrastructure gaps (identity, trust, reliable delegation).

---

## 8. Backlog Watch

### Stale Critical Issues (Last Updated 2026-04-05, But Long-Running)

| Issue | Age | Problem | Action Needed |
|:---|:---|:---|:---|
| [#30075](https://github.com/openclaw/openclaw/issues/30075) | ~37 days | Memory search ignores HTTP_PROXY | Enterprise deployment blocker |
| [#29572](https://github.com/openclaw/openclaw/issues/29572) | ~37 days | `/model` TUI command silently fails | Core UX broken |
| [#30458](https://github.com/openclaw/openclaw/issues/30458) | ~36 days | WebSocket 4008 auth failure | Cloud deployment blocker |
| [#30570](https://github.com/openclaw/openclaw/issues/30570) | ~36 days | Browser profile disconnects | Web automation broken |

### PRs Needing Maintainer Decision

| PR | Age | Status | Risk |
|:---|:---|:---|:---|
| [#10356](https://github.com/openclaw/openclaw/pull/10356) | ~59 days | TTS Typecast provider — open | Feature complete, needs review |
| [#44761](https://github.com/openclaw/openclaw/pull/44761) | ~24 days | OpenRouter vision fix — open | Model compatibility fix pending |

### Maintainer Attention Required

- **Provider registration architecture** — Multiple regressions suggest need for systematic test coverage
- **i18n contribution framework** — Community wants to help; needs maintainer-approved contribution pathway
- **Release cadence** — 5+ days since last release with critical fixes in main; consider patch release

---

*Digest generated from 500 issues and 500 PRs updated 2026-04-05 to 2026-04-06. All links: https://github.com/openclaw/openclaw*

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Report — 2026-04-06

## 1. Ecosystem Overview

The personal AI assistant / agent open-source ecosystem is experiencing **intense, parallel development** across 10+ active projects, with OpenClaw maintaining reference architecture status despite 500+ daily issues/PRs indicating scale strain. Three distinct maturity tiers have emerged: **production-hardened platforms** (OpenClaw, NullClaw, Moltis) prioritizing stability and enterprise features; **rapidly iterating challengers** (NanoBot, NanoClaw, PicoClaw, IronClaw) aggressively expanding channel coverage and backend diversity; and **specialized/early-stage projects** (LobsterAI, CoPaw) targeting specific use cases or platforms. The ecosystem is collectively grappling with **deterministic workflow execution**, **multi-agent trust infrastructure**, and **resource-efficient async runtimes** as users push beyond chatbot paradigms toward autonomous agent orchestration.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Status | Health Score* | Notes |
|:---|:---:|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | 234 (47%) | No release (5+ days) | 🟡 Stable at scale | Backlog forming; 266 open PRs |
| **NanoBot** | 19 | 121 | 25 (21%) | No release (v0.1.4.post6) | 🟡 Regressing | Critical DuckDuckGo hang; post6 instability |
| **PicoClaw** | 16 | 16 | 2 (12%) | v0.2.5-nightly | 🟡 Bottlenecked | Low merge rate; maintainer bandwidth constrained |
| **NanoClaw** | 7 | 41 | 20 (49%) | No release | 🟢 Strong | High velocity; security-focused |
| **NullClaw** | 5 | 14 | 14 (100%) | v2026.4.4 (3 days ago) | 🟢 Excellent | Same-day turnaround; doc sprint active |
| **IronClaw** | 5 | 45 | 16 (36%) | No release | 🟢 Strong | Heavy integration phase; WASM focus |
| **LobsterAI** | 2 | 6 | 0 (0%) | No release (v2026.03.30) | 🔴 Stalled | 0% merge rate; review bottleneck |
| **Moltis** | 6 | 9 | 8 (89%) | v20260405.06 | 🟢 Excellent | Same-day fixes; zero open issues |
| **CoPaw** | 39 | 8 | 3 (38%) | No release | 🟡 Strained | Critical CPU loop bug; Windows friction |
| **TinyClaw** | 0 | 0 | 0 | — | ⚪ Dormant | No activity |
| **ZeptoClaw** | 0 | 0 | 0 | — | ⚪ Dormant | No activity |

*\*Health Score: 🟢 Excellent (responsive, stable), 🟡 Stable/Strained (active but issues), 🔴 Stalled (blockers), ⚪ Dormant*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily | 10-50× higher volume than nearest competitor |
| **Ecosystem maturity** | 72% issue closure rate; plugin marketplace (ClawHub) | Most peers lack equivalent distribution platform |
| **Provider coverage** | Native GPT-5, Claude, Ollama, Bedrock, OpenRouter | NanoBot replacing LiteLLM; others catching up |
| **Documentation** | Community plugins documented (NovaSpine, NemoSidecar) | NullClaw sprinting to close gap; others fragmented |

### Technical Approach Differences
| Aspect | OpenClaw | Peer Alternatives |
|:---|:---|:---|
| **Agent execution** | Probabilistic loops with context-pressure continuation (PR #38780) | IronClaw: WASM sandboxing; NanoClaw: Multi-instance isolation; NullClaw: Routine introspection (#1738) |
| **Memory architecture** | Provider-agnostic with Bedrock embeddings incoming | PicoClaw: Seahorse LCM (SQLite+DAG); NullClaw: Knowledge Graph (#712); IronClaw: Structured collections (#1937) |
| **Workflow determinism** | Lobster in-process workflows merged | IronClaw: `ironclaw-lobster` requested (#2045); NullClaw: Deterministic engine RFC (#778) |
| **Security model** | Plugin-based trust | NanoClaw: bwrap sandboxing + non-root containers; Moltis: SLSA attestations |

### Community Size
OpenClaw operates at **ecosystem-defining scale** (500 daily items) versus nearest active peers (NanoBot 121, IronClaw 45, CoPaw 47). However, **per-capita maintainer responsiveness lags**: NullClaw and Moltis achieve 100% and 89% merge rates respectively, while OpenClaw's 47% suggests resource strain at scale.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Deterministic/Reproducible Workflows** | OpenClaw, IronClaw, NullClaw, NanoBot | OpenClaw: Lobster in-process (#61523); IronClaw: `lobster`-style shell requested (#2045); NullClaw: Workflow engine RFC (#778); NanoBot: A2A protocol (#1368) |
| **Multi-Agent Trust & Identity** | OpenClaw, NanoClaw | OpenClaw: Native Agent Identity RFC (#49971, 68 comments); NanoClaw: GroupType permissions (#1657) |
| **Enterprise Proxy/Deployment** | Moltis, OpenClaw, PicoClaw, NanoBot | Moltis: `upstream_proxy` shipped (#561); OpenClaw: HTTP_PROXY ignored in memory search (#30075, 37 days stale); PicoClaw: Ollama timeout (#430); NanoBot: ARM dependency gaps |
| **Kubernetes/Container-Native** | IronClaw, NanoClaw, OpenClaw | IronClaw: K8s runtime requested (#2023); NanoClaw: Apple Container broken (#1659); OpenClaw: Docker skill install fails (#14593) |
| **Async Runtime Stability** | CoPaw, NanoBot, OpenClaw | CoPaw: 100% CPU idle loop (#2888); NanoBot: DuckDuckGo hang (#2828); OpenClaw: Session routing corruption (#58878) |
| **Structured Memory/RAG** | PicoClaw, NullClaw, IronClaw, CoPaw | PicoClaw: Seahorse LCM (#2285); NullClaw: Knowledge Graph (#712); IronClaw: Typed collections (#1937); CoPaw: Built-in RAG requested (#2969) |
| **Channel Diversity (WhatsApp, Signal, Teams)** | NanoClaw, CoPaw, Moltis, IronClaw | NanoClaw: WhatsApp (#1661), Signal (#1121, 21 days stale); CoPaw: WhatsApp (#2962); Moltis: Teams (#529, 6 days); IronClaw: Slack/Telegram E2E tests |

---

## 5. Differentiation Analysis

| Project | Primary Differentiation | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Reference implementation; plugin marketplace; scale | Power users, plugin developers | Modular plugin system; ClawHub distribution |
| **NanoBot** | Security-first; LiteLLM replacement; sandboxing | Security-conscious self-hosters | bwrap sandboxing; native SDKs; privilege separation |
| **PicoClaw** | Edge/embedded focus; memory optimization | IoT, Pi Zero, resource-constrained | Seahorse LCM; 6-phase context compression |
| **NanoClaw** | Multi-instance isolation; vendor independence | Multi-tenant deployments, Claude-avoiders | `AgentLite.createInstance()`; API-key auth; GroupType permissions |
| **NullClaw** | Reliability engineering; deterministic workflows | Production operators, GitOps workflows | Routine introspection; REST Admin API; structured collections |
| **IronClaw** | WASM-based sandboxing; NEAR ecosystem integration | Web3, sandboxed execution needs | WASM channels; deterministic runtime requests |
| **LobsterAI** | Local-30B-model automation; scheduled tasks | Privacy-first automation users | Electron desktop; cron-style agent triggers |
| **Moltis** | Enterprise polish; rapid response; supply-chain security | Corporate deployments, compliance needs | SLSA attestations; application-level proxy; Teams/Matrix |
| **CoPaw** | Personal assistant UX; Windows-native; Chinese market | Individual users, WeChat integration | AnyIO runtime; browser-use integration; voice UI |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (High Velocity, Architectural Evolution)
| Project | Indicators | Risk |
|:---|:---|:---|
| **NanoClaw** | 49% merge rate; multi-instance + GroupType shipped; security hardening | Review backlog for external contributions (Signal 21 days) |
| **IronClaw** | 45 PRs/24h; WASM E2E testing investment; structured collections | Complexity threshold approaching; Aliyun PR 16 days stale |
| **PicoClaw** | Memory architecture advances (Seahorse, context compression) | 12% merge rate; contributor fatigue risk |

### Tier 2: Production-Hardening (Stability Focus, Enterprise Features)
| Project | Indicators | Risk |
|:---|:---|:---|
| **NullClaw** | 100% merge rate; same-day fixes; doc sprint; REST Admin API | Feature PR accumulation (#712, #711, #709) needs review bandwidth |
| **Moltis** | 89% merge rate; zero open issues; SLSA compliance | Teams PR complexity; ensuring quality at speed |
| **OpenClaw** | 72% issue closure; provider parity; plugin ecosystem | 266 open PRs; 5+ days since release with critical fixes pending |

### Tier 3: Stabilization/Recovery (Addressing Regressions)
| Project | Indicators | Risk |
|:---|:---|:---|
| **NanoBot** | v0.1.4.post6 regressions; DuckDuckGo critical fix merged | Trust erosion from patch release instability |
| **CoPaw** | CPU loop bug; Windows friction; resource leaks | Core runtime assumptions challenged by 24/7 use cases |

### Tier 4: Stalled/At Risk
| Project | Indicators | Risk |
|:---|:---|:---|
| **LobsterAI** | 0% merge rate; 6 open PRs; build fragility | Contributor attrition; enterprise backing may not translate to OSS velocity |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **Deterministic execution demand** | `lobster`-style workflows requested across OpenClaw, IronClaw, NullClaw; LobsterAI's scheduled task focus | Build reproducible, auditable agent pipelines; probabilistic loops insufficient for production automation |
| **Identity/trust infrastructure emergence** | OpenClaw DID/VC RFC (68 comments); NanoClaw GroupType permissions; A2A protocol interest | Agent-to-agent delegation requires cryptographic identity; prepare for verifiable credential standards |
| **Resource efficiency as differentiator** | PicoClaw context compression; CoPaw CPU loop crisis; NanoBot DuckDuckGo hang | Async runtime hygiene (cancellation, timeout guards, connection pooling) is table stakes |
| **Enterprise deployment requirements** | Moltis proxy + attestations; IronClaw K8s request; OpenClaw i18n declined for bandwidth | Self-hosting, compliance, and regional deployment flexibility increasingly gate adoption |
| **Model ecosystem fragmentation** | CoPaw Gemma4/Qwen3 issues; OpenClaw GPT-5 tokenization fix; NanoBot Minimax regression | Prompt engineering and tool formatting must be model-adaptive, not hardcoded |
| **Channel abstraction maturity** | WhatsApp/Signal/Teams/Matrix expansion across all projects | Treat messaging platforms as interchangeable infrastructure; invest in E2E testing patterns |
| **Memory beyond vector search** | Knowledge graphs, structured collections, DAG summaries replacing simple RAG | Agent memory needs relational reasoning and temporal coherence, not just semantic similarity |

---

*Report compiled from 1,200+ issues and PRs across 10 projects. Data current as of 2026-04-06.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-06

## 1. Today's Overview

NanoBot shows **high development velocity** with 121 PRs updated in the last 24 hours (96 open, 25 merged/closed) and 19 issues actively discussed. The project is experiencing **significant stability challenges** following the v0.1.4.post6 release, with multiple regressions reported around embedded platform support, tool calling, and search provider hangs. Security hardening is a major theme, with active work on privilege separation and sandboxing. The community remains engaged with feature requests spanning protocol support (A2A, WebSocket), unified sessions, and expanded status visibility. No new releases were published today.

---

## 2. Releases

**No new releases** — The project remains on v0.1.4.post6, which appears to be the source of several regressions documented below.

---

## 3. Project Progress

### Merged/Closed PRs Today (25 total; key highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#2805](https://github.com/HKUDS/nanobot/pull/2805) | Fix: add asyncio timeout guard for DuckDuckGo search | **Critical stability fix** — resolves indefinite hangs blocking entire sessions |
| [#2794](https://github.com/HKUDS/nanobot/pull/2794) | Streamline hook method calls and enhance error logging | Code quality improvement for agent hooks |
| [#2793](https://github.com/HKUDS/nanobot/pull/2793) | Support threads in Telegram DMs | Enables new Telegram "Threaded Mode" for AI bots |
| [#1940](https://github.com/HKUDS/nanobot/pull/1940) | Sandbox exec calls with bwrap, run container as non-root | **Security milestone** — addresses privilege escalation concerns from #1873 |
| [#239](https://github.com/HKUDS/nanobot/pull/239) | Context window hardening & intelligent tool-result truncation | Reduces failure rate on complex 18+ tool call tasks |
| [#165](https://github.com/HKUDS/nanobot/pull/165) | Replace LiteLLM with native SDKs | Major architectural change for transparency and feature access |
| [#697](https://github.com/HKUDS/nanobot/pull/697) | Add Synthetic provider for open-source model gateway | Expands provider ecosystem |
| [#89](https://github.com/HKUDS/nanobot/pull/89) | Add BM25 and TF-IDF retrievers for agent memory search | Enhanced RAG capabilities |

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Comments | Topic | Underlying Need |
|:---|:---:|:---|:---|
| [#1873](https://github.com/HKUDS/nanobot/issues/1873) — *CLOSED* | 10 | Config/key security via privilege separation | **Enterprise deployment trust** — users need confidence that agent code execution cannot exfiltrate secrets |
| [#2774](https://github.com/HKUDS/nanobot/issues/2774) | 6 | Stability comparison with OpenClaw | **Validation of production readiness** — user seeking reassurance about long-term stability vs. alternatives |
| [#2590](https://github.com/HKUDS/nanobot/issues/2590) | 4 | Minimax provider regression in post6 | **Provider reliability** — breaking changes in patch releases erode trust |
| [#2775](https://github.com/HKUDS/nanobot/issues/2775) | 3 | Tool calling failure (spawn) | **Core functionality reliability** — agent failing to execute basic tool operations |

### Most Active PRs (by community interest)

| PR | Topic | Significance |
|:---|:---|:---|
| [#2831](https://github.com/HKUDS/nanobot/pull/2831) / [#2830](https://github.com/HKUDS/nanobot/pull/2830) | Security: env var isolation + interpolation | **Foundation for secure deployments** — addresses root cause of #1873 |
| [#1368](https://github.com/HKUDS/nanobot/pull/1368) | A2A protocol channel | **Interoperability** — positions NanoBot in emerging agent-to-agent ecosystem |
| [#1341](https://github.com/HKUDS/nanobot/pull/1341) | Web chat channel with SSE streaming | **Accessibility** — reduces barrier to entry for non-technical users |
| [#2600](https://github.com/HKUDS/nanobot/pull/2600) | Microsoft Teams channel | **Enterprise integration** — expands addressable market |

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **Critical** | [#2828](https://github.com/HKUDS/nanobot/issues/2828) — DuckDuckGo hangs entire system | **OPEN** | [#2805](https://github.com/HKUDS/nanobot/pull/2805) merged | System-level freeze requiring force stop; affects Proxmox environments |
| **Critical** | [#2804](https://github.com/HKUDS/nanobot/issues/2804) — DuckDuckGo indefinite hang | **CLOSED** | [#2805](https://github.com/HKUDS/nanobot/pull/2805) | Same root cause as #2828; blocks all session messages |
| **High** | [#2816](https://github.com/HKUDS/nanobot/issues/2816) — Embedded platform (Allwinner H618) broken in post6 | **CLOSED** | Unknown | Regression from post5; affects CLI and Feishu channels |
| **High** | [#2829](https://github.com/HKUDS/nanobot/issues/2829) — Ollama tool calling broken | **OPEN** | None | Models like gemma4:e4b cannot use tools; suspected formatting issue |
| **High** | [#2775](https://github.com/HKUDS/nanobot/issues/2775) — Spawn tool not executing | **OPEN** | None | Agent outputs text description instead of calling tool |
| **High** | [#2796](https://github.com/HKUDS/nanobot/issues/2796) — Exec safety guard blocks localhost | **OPEN** | None | Breaks legitimate local service integrations (PinchTab, etc.) |
| **Medium** | [#2590](https://github.com/HKUDS/nanobot/issues/2590) — Minimax provider broken in post6 | **OPEN** | None | API configuration regression |
| **Medium** | [#2795](https://github.com/HKUDS/nanobot/issues/2795) — Thinking content leaked to Telegram | **OPEN** | None | UX regression showing internal reasoning |

**Pattern**: v0.1.4.post6 introduced multiple regressions across providers, platforms, and core tool execution. The DuckDuckGo hang is particularly severe with system-level impact.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| WebSocket server channel | [#2819](https://github.com/HKUDS/nanobot/issues/2819) | **High** | Complements #1341 (web chat); enables real-time client integrations |
| Unified cross-platform sessions | [#2798](https://github.com/HKUDS/nanobot/issues/2798) | Medium | Strong user value; requires significant session architecture changes |
| Expanded `/status` with search quotas | [#2820](https://github.com/HKUDS/nanobot/issues/2820) / [#2832](https://github.com/HKUDS/nanobot/pull/2832) | **Very High** | PR already submitted; small, well-scoped enhancement |
| Microsoft Teams channel | [#2600](https://github.com/HKUDS/nanobot/pull/2600) | Medium | PR open since March 28; needs review bandwidth |
| HTTP API channel | [#722](https://github.com/HKUDS/nanobot/pull/722) | Medium | Long-standing PR; would enable programmatic integrations |
| A2A protocol support | [#1368](https://github.com/HKUDS/nanobot/pull/1368) | Medium | Strategic for agent ecosystem positioning |

---

## 7. User Feedback Summary

### Positive Signals
- **Stability praise**: [#2774](https://github.com/HKUDS/nanobot/issues/2774) — User reports "very stable, far better than OpenClaw" after extended Windows usage
- **Security engagement**: Active community participation in security hardening discussions (#1873, #2831)

### Pain Points
| Issue | Frequency | Impact |
|:---|:---:|:---|
| v0.1.4.post6 regressions | High | Multiple platform/provider breakages |
| Tool execution reliability | Medium | Core value proposition undermined |
| Search provider fragility | High | DuckDuckGo, Jina, Minimax all problematic |
| Embedded/ARM support gaps | Medium | Platform compatibility concerns |
| Installation dependency issues | Low | [#2818](https://github.com/HKUDS/nanobot/issues/2818) — `oauth-cli-kit` unavailable on ARM |

### Use Cases Emerging
- **Enterprise self-hosting**: Security sandboxing, Teams integration, config isolation
- **Embedded/IoT deployment**: Allwinner H618 and similar platforms
- **Multi-channel personal assistant**: Unified session across Discord/Telegram/etc.

---

## 8. Backlog Watch

| Item | Age | Risk | Notes |
|:---|:---:|:---|:---|
| [#722](https://github.com/HKUDS/nanobot/pull/722) HTTP API channel | ~7 weeks | **High** | Critical for programmatic adoption; stalled despite clean implementation |
| [#1341](https://github.com/HKUDS/nanobot/pull/1341) Web chat channel | ~5 weeks | Medium | Large PR; may need incremental review approach |
| [#1368](https://github.com/HKUDS/nanobot/pull/1368) A2A protocol | ~5 weeks | Medium | Strategic positioning; depends on A2A ecosystem maturity |
| [#1164](https://github.com/HKUDS/nanobot/pull/1164) Vietnamese README | ~6 weeks | Low | Documentation i18n; low maintainer priority |
| [#2546](https://github.com/HKUDS/nanobot/pull/2546) Telegram thread context | ~10 days | Medium | Fix for production Telegram usage; may be superseded by #2793 |

**Recommendation**: The HTTP API PR (#722) represents significant unmet demand for headless/programmatic access and should be prioritized for review.

---

*Digest generated from GitHub activity 2026-04-05 to 2026-04-06*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-06

## 1. Today's Overview

PicoClaw shows **high development velocity** with 16 issues and 16 PRs updated in the last 24 hours, though the merge rate remains low (only 2 of 16 PRs closed/merged). The project released **v0.2.5-nightly.20260405**, indicating active iteration toward a stable v0.2.5. Community engagement is strong with multi-comment discussions on WebUI connectivity, Ollama timeouts, and tool call extraction bugs. However, the growing backlog of 14 open PRs and 13 active issues suggests maintainer bandwidth may be becoming a constraint. Critical stability issues persist in channel connectivity, provider integrations, and session management.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.5-nightly.20260405.71337b6f](https://github.com/sipeed/picoclaw/compare/v0.2.5...main) | Nightly | Automated build; may be unstable. No detailed changelog provided. |

**Status:** Incremental nightly build with no breaking changes documented. Users should exercise caution per standard nightly warnings.

---

## 3. Project Progress

### Merged/Closed PRs (2 items)

| PR | Type | Summary | Significance |
|----|------|---------|------------|
| [#2357](https://github.com/sipeed/picoclaw/pull/2357) | Bug fix | Unauthorized users now receive explicit "You are not authorized" reply instead of silent drop; covers WhatsApp, Telegram, and base channel handler | **UX improvement** — reduces user confusion about bot unresponsiveness |
| [#2285](https://github.com/sipeed/picoclaw/pull/2285) | Enhancement | **Seahorse short-term memory engine (LCM)** — SQLite-based with DAG summary hierarchy, FTS5 search, budget-aware context assembly | **Major architecture advancement** — addresses #1919 for long-context agent memory |

### Notable Open PRs Advancing

| PR | Domain | Progress |
|----|--------|----------|
| [#2267](https://github.com/sipeed/picoclaw/pull/2267) | WebUI/Channel | Fix for WebUI-gateway connection bug (#2213) — addresses critical connectivity regression |
| [#2364](https://github.com/sipeed/picoclaw/pull/2364) | Agent | Session restoration fix — prevents stuck Telegram sessions from dangling tool calls |
| [#2333](https://github.com/sipeed/picoclaw/pull/2333) | Agent | 6-phase structured context compression algorithm — memory optimization at scale |
| [#2339](https://github.com/sipeed/picoclaw/pull/2339) | Config/Launcher | Standard HTTP login/setup/logout flow — major UX simplification for dashboard |

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Issue/PR | Comments | 👍 | Analysis |
|------|----------|----------|-----|----------|
| 1 | [#2213](https://github.com/sipeed/picoclaw/issues/2213) WebUI cannot connect to gateway | 8 | 2 | **Critical regression** — WebUI-launched gateway fails to accept connections. Fix PR #2267 exists but unmerged. **Need:** Reliable local development workflow |
| 2 | [#430](https://github.com/sipeed/picoclaw/issues/430) Ollama local models timeout | 8 | 3 | **CLOSED** — 120s fixed HTTP timeout vs. direct API success. **Underlying need:** Configurable timeouts for local/edge deployments |
| 3 | [#2136](https://github.com/sipeed/picoclaw/issues/2136) Flawed tool call extraction | 4 | 0 | Security researcher flagged; PR submitted but conflicted. **Need:** Robust parsing for adversarial/tool-heavy outputs |

### Emerging Patterns

- **Channel-layer instability**: 4 of top issues involve WebUI, Telegram, WhatsApp connectivity
- **Local AI deployment friction**: Ollama timeout pattern suggests edge/self-hosted users underserved
- **Security-conscious contributors**: Tool extraction and history file issues show security-minded community

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **🔴 Critical** | [#2213](https://github.com/sipeed/picoclaw/issues/2213) | WebUI-gateway connection failure — breaks core developer workflow | PR #2267 open, unmerged |
| **🔴 Critical** | [#2354](https://github.com/sipeed/picoclaw/issues/2354) | WebUI input fields disabled, multi-turn broken | PR #2363 (WebSocket auth fix) may address |
| **🟡 High** | [#2136](https://github.com/sipeed/picoclaw/issues/2136) | Tool call extraction regex flaws — security/functional impact | PR exists, conflicts blocking |
| **🟡 High** | [#2364](https://github.com/sipeed/picoclaw/pull/2364) | Dangling tool calls cause stuck Telegram sessions | PR open, needs review |
| **🟡 High** | [#2334](https://github.com/sipeed/picoclaw/issues/2334) | Model fallbacks non-functional | No PR identified |
| **🟡 High** | [#2342](https://github.com/sipeed/picoclaw/issues/2342) | Provider ERROR 400 across OpenAI, Groq, OpenRouter | No PR identified |
| **🟢 Medium** | [#2368](https://github.com/sipeed/picoclaw/issues/2368) | Android app "not configured" state despite valid settings | No PR identified |
| **🟢 Medium** | [#2234](https://github.com/sipeed/picoclaw/issues/2234) | HistoryFile hardcoded to /tmp — symlink attack, info disclosure | No PR identified |
| **🟢 Medium** | [#1917](https://github.com/sipeed/picoclaw/issues/1917) | Weixin cursor persistence fails (permission denied) | No PR identified |

**Regression Risk:** Multiple channel-layer bugs suggest recent changes to WebSocket/auth handling may have introduced instability.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Feature | Likelihood in v0.2.5 | Rationale |
|----------|---------|----------------------|-----------|
| [#1714](https://github.com/sipeed/picoclaw/issues/1714) | `<think>` tag filter toggle | **High** | Small UI enhancement, clear user value, closed recently |
| [#2126](https://github.com/sipeed/picoclaw/issues/2126) | `silent_processing` for observer agents | **Medium** | Niche but well-scoped; agent architecture maturing |
| [#2349](https://github.com/sipeed/picoclaw/issues/2349) | Debian-slim Docker image + curl | **Medium** | Container hardening request; Alpine friction common |
| [#2352](https://github.com/sipeed/picoclaw/issues/2352) | Telegram inline keyboards | **Medium** | Channel parity feature; structured replies trending |
| [#2351](https://github.com/sipeed/picoclaw/issues/2351) | Skill binary validation | **Medium** | Prevents LLM hallucination of capabilities |
| [#2332](https://github.com/sipeed/picoclaw/pull/2332) | Dynamic SkillManager CRUD | **Medium-High** | Large PR open, enables agent self-improvement |
| [#2333](https://github.com/sipeed/picoclaw/pull/2333) | 6-phase context compression | **Medium-High** | Performance-critical, PR open with tests |

**Roadmap Signal:** Heavy investment in **agent memory** (Seahorse/LCM, context compression) and **skill system** (dynamic creation, validation) suggests v0.3.0 may position PicoClaw as a more autonomous agent platform versus chatbot framework.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Configuration complexity** | [#2368](https://github.com/sipeed/picoclaw/issues/2368) Android "not configured", [#2339](https://github.com/sipeed/picoclaw/pull/2339) login flow PR | High — onboarding friction |
| **Local/edge deployment gaps** | [#430](https://github.com/sipeed/picoclaw/issues/430) Ollama timeout, [#2349](https://github.com/sipeed/picoclaw/issues/2349) Docker image limits | High — self-hosted users struggling |
| **Channel reliability** | [#2213](https://github.com/sipeed/picoclaw/issues/2213), [#2354](https://github.com/sipeed/picoclaw/issues/2354), [#2342](https://github.com/sipeed/picoclaw/issues/2342) | Critical — core functionality unstable |
| **Mobile experience** | [#2367](https://github.com/sipeed/picoclaw/issues/2367) i18n gaps, [#2368](https://github.com/sipeed/picoclaw/issues/2368) config sync | Medium — Android app polish needed |

### Positive Signals

- **Security awareness**: Community proactively reports hardcoded paths, temp file risks
- **Extensibility demand**: Hooks (#2215), skills (#2332), memory systems (#2285) show power-user engagement
- **Cross-platform usage**: Android, Docker, macOS (PicoWatch #2369), Pi Zero (#2345) indicate diverse deployment

---

## 8. Backlog Watch

### Stale Critical Items Needing Maintainer Action

| Item | Age | Issue | Action Needed |
|------|-----|-------|---------------|
| [#2136](https://github.com/sipeed/picoclaw/issues/2136) | 8 days | Tool call extraction security flaw | Merge or rebase contributor's PR; conflicts blocking |
| [#1917](https://github.com/sipeed/picoclaw/issues/1917) | 14 days | Weixin permission errors | Root cause: hardcoded /root path; may share fix with #2234 |
| [#2126](https://github.com/sipeed/picoclaw/issues/2126) | 8 days | Silent observer agents | Well-specified, no PR — candidate for "good first issue" |
| [#2215](https://github.com/sipeed/picoclaw/pull/2215) | 6 days | Hooks documentation + respond action | Docs PR, low risk — should merge to improve plugin ecosystem |
| [#2282](https://github.com/sipeed/picoclaw/pull/2282) | 4 days | TUI model sync fix | Launcher reliability; small scope, ready for review |

### Merge Queue Risk

14 open PRs with 2 maintainers (estimated) suggests **~1 week backlog** at current velocity. Risk of PR staleness and contributor fatigue.

---

**Digest compiled from:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw) GitHub activity 2026-04-05 to 2026-04-06

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-06

---

## 1. Today's Overview

NanoClaw shows **high development velocity** with 41 PRs and 7 issues updated in the last 24 hours, indicating an active pre-release sprint. The project is experiencing **significant architectural maturation**, with core changes to group management (replacing `isMain` with `GroupType`), multi-instance support, and authentication simplification. Community contribution is robust across channel integrations (WhatsApp, Signal, Telegram forums) and alternative agent backends (OpenCode SDK, OpenAI Codex). No new releases were cut, suggesting maintainers are accumulating changes for a larger version bump. The 20 merged/closed PRs versus 21 open indicates healthy review throughput but also a growing backlog requiring attention.

---

## 2. Releases

**No new releases** (v0.x.x remains current).

---

## 3. Project Progress

### Merged/Closed PRs Today (20 total)

| PR | Description | Impact |
|:---|:---|:---|
| [#1644](https://github.com/qwibitai/nanoclaw/pull/1644) | Fix global memory for main agent: correct path and add writable mount | **Critical fix** — resolves broken main agent memory access documented in [#1642](https://github.com/qwibitai/nanoclaw/issues/1642) |
| [#1657](https://github.com/qwibitai/nanoclaw/pull/1657) | Replace `isMain` boolean with `GroupType` enum | **Architecture** — enables override/main/chat/thread group types with per-type tool permissions |
| [#1651](https://github.com/qwibitai/nanoclaw/pull/1651) | Multi-instance support via `AgentLite.createInstance()` | **Major feature** — isolated instances with separate paths, DBs, and message loops |
| [#1654](https://github.com/qwibitai/nanoclaw/pull/1654) | Google Workspace MCP with global `.mcp.json` merge | **Integration** — Gmail, Calendar, Tasks, Drive, Docs, Sheets support |
| [#1653](https://github.com/qwibitai/nanoclaw/pull/1653) | Remove OAuth passthrough, use API key auth | **Simplification** — ~400 lines removed, removes Claude Max dependency |
| [#1656](https://github.com/qwibitai/nanoclaw/pull/1656) | Telegram forum topic/thread support | **Enhancement** — captures `message_thread_id`, passes topic context to agents |
| [#1630](https://github.com/qwibitai/nanoclaw/pull/1630) | Mount agent-runner source read-only inside containers | **Security** — prevents self-modifying runner exploits |
| [#1629](https://github.com/qwibitai/nanoclaw/pull/1629) | Harden OneCLI setup for public servers | **Security** — fixes Docker port exposure bypassing UFW/iptables |
| [#1623](https://github.com/qwibitai/nanoclaw/pull/1623) | Fix 30-min deadlock when messages piped to active container | **Stability** — resolves soft-busy stream deadlock |
| [#1619](https://github.com/qwibitai/nanoclaw/pull/1619) | Replace hardcoded `allowedTools` with configurable registry | **Extensibility** — JSON-configurable tool permissions |
| [#1509](https://github.com/qwibitai/nanoclaw/pull/1509) | Group-local skills and OpenViking second brain integration | **Extensibility** — domain-specific skills per group, knowledge graph integration |
| [#1658](https://github.com/qwibitai/nanoclaw/pull/1658) | Update SKILL.md to use `ONECLI_URL` variable | **Docs** — configuration clarity |
| [#1631](https://github.com/qwibitai/nanoclaw/pull/1631) | Sentry IPC integration (superseded by #1662) | **Observability** — error tracking foundation |

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#1662](https://github.com/qwibitai/nanoclaw/pull/1662) / [#1631](https://github.com/qwibitai/nanoclaw/pull/1631) | Sentry IPC integration (reopened) | **Need**: Production observability for agent failures. The rapid resubmission suggests urgency for error tracking in deployed environments. |
| [#1661](https://github.com/qwibitai/nanoclaw/pull/1661) | WhatsApp channel via Baileys | **Need**: Messaging platform diversity. Baileys (unofficial) vs. official API tension reflects cost/access tradeoffs. |
| [#1628](https://github.com/qwibitai/nanoclaw/pull/1628) | OpenCode SDK as alternative backend | **Need**: Vendor independence and cost optimization. Competes with [#963](https://github.com/qwibitai/nanoclaw/pull/963) (OpenAI Codex) — signals strong demand for multi-LLM support. |
| [#1121](https://github.com/qwibitai/nanoclaw/pull/1121) | Signal channel (open since Mar 16) | **Need**: Privacy-focused messaging. 3+ weeks without merge suggests review bandwidth constraint or architectural concerns with signal-cli dependency. |
| [#1659](https://github.com/qwibitai/nanoclaw/issues/1659) | Apple Container build failures | **Need**: Native macOS container support. Complex interaction between Apple's scanner, Bun bundling, and esbuild — indicates platform portability gaps. |

**Underlying pattern**: Community is aggressively expanding **channel coverage** (WhatsApp, Signal) and **backend flexibility** (OpenCode, Codex, Claude), while core maintainers focus on **security hardening** and **architectural correctness**.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| 🔴 **High** | [#1659](https://github.com/qwibitai/nanoclaw/issues/1659) — Apple Container build fails (scanner reads HOST packages, Bun/esbuild incompatibility) | **Open**, no comments | None — needs investigation |
| 🟡 **Medium** | [#1639](https://github.com/qwibitai/nanoclaw/issues/1639) — Agent-runner source sync only checks `index.ts` mtime, misses other file changes | **Open** | None — fix requires extending mtime check to full directory |
| 🟡 **Medium** | [#1636](https://github.com/qwibitai/nanoclaw/issues/1636) — Sequential channel connection blocks startup if one channel hangs | **Open** | None — needs async/timeout refactoring |
| 🟢 **Low** | [#1641](https://github.com/qwibitai/nanoclaw/issues/1641) — Non-portable shebang `#!/bin/bash` breaks NixOS | **Open** | Trivial fix available (`#!/usr/bin/env bash`) |

**Resolved today**: [#1642](https://github.com/qwibitai/nanoclaw/issues/1642) (main agent global memory), [#1638](https://github.com/qwibitai/nanoclaw/issues/1638) (wrong repo issue, deleted).

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release |
|:---|:---|:---|
| **Cryptographic governance receipts** (`/add-governance`) | [#1655](https://github.com/qwibitai/nanoclaw/issues/1655) | Medium — aligns with security focus, but needs `protect-mcp` coordination |
| **S3 storage skill** | [#744](https://github.com/qwibitai/nanoclaw/pull/744) — blocked since Mar 5 | Low — stalled, may need redesign |
| **Signal channel** | [#1121](https://github.com/qwibitai/nanoclaw/pull/1121) | Medium — implementation complete, pending review |
| **Multi-instance + GroupType + API-key auth** | Merged today | **Shipped** — foundation for v0.next |

**Predicted next version themes**: 
- **Enterprise readiness**: Multi-tenancy (instances), audit trails (governance receipts), observability (Sentry)
- **Platform expansion**: WhatsApp, Signal, Apple Container support
- **Backend diversity**: OpenCode/Codex as first-class alternatives to Claude

---

## 7. User Feedback Summary

| Theme | Evidence | Sentiment |
|:---|:---|:---|
| **Container portability pain** | [#1659](https://github.com/qwibitai/nanoclaw/issues/1659) Apple Container, [#1641](https://github.com/qwibitai/nanoclaw/issues/1641) NixOS shebang | 😤 Frustrated — "works on Docker" assumptions breaking |
| **Security consciousness** | [#1630](https://github.com/qwibitai/nanoclaw/pull/1630) read-only mounts, [#1629](https://github.com/qwibitai/nanoclaw/pull/1629) public server hardening, [#1655](https://github.com/qwibitai/nanoclaw/issues/1655) signed receipts | 😊 Appreciative — proactive hardening valued |
| **Vendor lock-in anxiety** | [#1628](https://github.com/qwibitai/nanoclaw/pull/1628) OpenCode, [#963](https://github.com/qwibitai/nanoclaw/pull/963) Codex, [#1653](https://github.com/qwibitai/nanoclaw/pull/1653) removing Claude Max OAuth | 😰 Cautious — want escape hatches from Anthropic dependency |
| **Documentation drift** | [#1642](https://github.com/qwibitai/nanoclaw/issues/1642) wrong path in CLAUDE.md | 😒 Annoyed — "documented path doesn't match reality" |
| **Review latency** | [#1121](https://github.com/qwibitai/nanoclaw/pull/1121) Signal open 3 weeks, [#744](https://github.com/qwibitai/nanoclaw/pull/744) S3 blocked | 😕 Concerned — contribution friction |

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1121](https://github.com/qwibitai/nanoclaw/pull/1121) Signal channel | 21 days | **Contributor attrition** — brentkearney may abandon | Maintainer review or explicit rejection with feedback |
| [#744](https://github.com/qwibitai/nanoclaw/pull/744) S3 storage skill | 32 days | **Design rot** — may conflict with new group-local skills architecture | Rebase requirement or close as superseded |
| [#963](https://github.com/qwibitai/nanoclaw/pull/963) OpenAI Codex SDK | 26 days | **Duplicate effort** — overlaps with [#1628](https://github.com/qwibitai/nanoclaw/pull/1628) OpenCode | Coordinate with talmosko-code on unified agent backend abstraction |
| [#1659](https://github.com/qwibitai/nanoclaw/issues/1659) Apple Container | 1 day | **Platform gap** — macOS developers blocked | Reproducible test environment needed |

---

**Project Health**: 🟢 **Strong** — High merge velocity, security-conscious, architecturally evolving. Risk: Review backlog for external contributions may deter community growth.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-06

## 1. Today's Overview

NullClaw shows **exceptionally high documentation velocity** with 4 open documentation PRs from a single contributor (`telagod`) alongside active bugfix integration. The project closed 9 issues and merged 14 PRs in 24 hours, indicating strong maintainer responsiveness. Two critical API-related items remain open: a deterministic workflow engine proposal (#778) and an active fix PR for the Responses API tool schema bug (#772 → #773). The release cadence remains steady with v2026.4.4 shipping 3 days ago. Overall project health is **strong** with active community contribution and systematic technical debt reduction.

---

## 2. Releases

### v2026.4.4 (Released 2026-04-03)
| PR | Change | Author |
|:---|:---|:---|
| [#666](https://github.com/nullclaw/nullclaw/pull/666) | **feat(cron):** Wire up `session_target` routing for agent jobs | @sanderdewijs |
| [#668](https://github.com/nullclaw/nullclaw/pull/668) | **fix(ollama):** Avoid empty chat responses by default (修复 Ollama 默认空响应问题) | @manelsen |

**Migration Notes:** No breaking changes. The Ollama fix addresses a default behavior issue where empty responses could occur; users relying on previous empty-response handling should verify output expectations.

---

## 3. Project Progress

### Merged/Closed PRs (14 total)

| PR | Category | Summary | Fixes |
|:---|:---|:---|:---|
| [#716](https://github.com/nullclaw/nullclaw/pull/716) | **Tool** | Calculator tool with 20 mathematical operations | — |
| [#705](https://github.com/nullclaw/nullclaw/pull/705) | **Bugfix** | Routing: "main" as default agent fallback | [#696](https://github.com/nullclaw/nullclaw/issues/696) |
| [#710](https://github.com/nullclaw/nullclaw/pull/710) | **Observability** | Detailed heartbeat tick logging | [#703](https://github.com/nullclaw/nullclaw/issues/703) |
| [#708](https://github.com/nullclaw/nullclaw/pull/708) | **Bugfix** | Wire `file_append` tool into runtime | [#699](https://github.com/nullclaw/nullclaw/issues/699) |
| [#707](https://github.com/nullclaw/nullclaw/pull/707) | **Deployment** | Pushover credentials from process environment | [#698](https://github.com/nullclaw/nullclaw/issues/698) |
| [#706](https://github.com/nullclaw/nullclaw/pull/706) | **Docs** | Clarify no `${VAR}` interpolation in config | [#697](https://github.com/nullclaw/nullclaw/issues/697) |
| [#704](https://github.com/nullclaw/nullclaw/pull/704) | **Feature** | Lark channel reaction emoji support | — |
| [#694](https://github.com/nullclaw/nullclaw/pull/694) | **Bugfix** | Telegram dupes, Bifrost compatibility, tool cache staleness | [#680](https://github.com/nullclaw/nullclaw/issues/680), [#682](https://github.com/nullclaw/nullclaw/issues/682), [#684](https://github.com/nullclaw/nullclaw/issues/684) |
| [#675](https://github.com/nullclaw/nullclaw/pull/675) | **Bugfix** | Gemini CLI ACP handshake alignment v0.34 | [#674](https://github.com/nullclaw/nullclaw/issues/674) |

**Key Advances:**
- **Tool ecosystem expansion:** Calculator tool adds 20 operations; `file_append` finally wired after implementation gap
- **Deployment hardening:** Pushover environment variable support enables GitOps/containerized workflows
- **Multi-channel stability:** Telegram, Lark, and Bifrost gateway fixes improve production reliability

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Type | Engagement | Analysis |
|:---|:---|:---|:---|:---|
| 1 | [#696](https://github.com/nullclaw/nullclaw/issues/696) | Issue | **👍 2** | Telegram subagent routing confusion — **resolved** via [#705](https://github.com/nullclaw/nullclaw/pull/705) |
| 2 | [#778](https://github.com/nullclaw/nullclaw/issues/778) | Issue | New, high-impact proposal | **Deterministic Workflow Engine** — "Lobster-style" implementation requested; signals demand for reproducible agent execution |

### Active Fix PRs Under Review

| PR | Issue | Status | Urgency |
|:---|:---|:---|:---|
| [#772](https://github.com/nullclaw/nullclaw/pull/772) | [#773](https://github.com/nullclaw/nullclaw/issues/773) | Open, ready for merge | **High** — Responses API broken for `api_mode=responses` users |

### Documentation Sprint (telagod)

4 sequential PRs addressing systemic doc debt:
- [#777](https://github.com/nullclaw/nullclaw/pull/777): Archive stale planning docs
- [#776](https://github.com/nullclaw/nullclaw/pull/776): Add MCP, subagents, skills, voice, hardware docs
- [#775](https://github.com/nullclaw/nullclaw/pull/775): Deduplicate CLAUDE.md/AGENTS.md
- [#774](https://github.com/nullclaw/nullclaw/pull/774): Update outdated codebase statistics

**Underlying Need:** Substantial features (MCP: 915 LOC, subagents: multi-file) lack user-facing documentation, creating adoption friction.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#773](https://github.com/nullclaw/nullclaw/issues/773) | Responses API broken: tool schema format mismatch + null error misclassification | **PR [#772](https://github.com/nullclaw/nullclaw/pull/772) open** |
| 🟡 **Resolved** | [#703](https://github.com/nullclaw/nullclaw/issues/703) | Heartbeat logging absent | Fixed in [#710](https://github.com/nullclaw/nullclaw/pull/710) |
| 🟡 **Resolved** | [#699](https://github.com/nullclaw/nullclaw/issues/699) | `file_append` implemented but unwired | Fixed in [#708](https://github.com/nullclaw/nullclaw/pull/708) |
| 🟡 **Resolved** | [#696](https://github.com/nullclaw/nullclaw/issues/696) | Telegram subagent misidentification | Fixed in [#705](https://github.com/nullclaw/nullclaw/pull/705) |
| 🟡 **Resolved** | [#684](https://github.com/nullclaw/nullclaw/issues/684) | Race condition: file_write then file_read on new file | Fixed in [#694](https://github.com/nullclaw/nullclaw/pull/694) |
| 🟡 **Resolved** | [#682](https://github.com/nullclaw/nullclaw/issues/682) | Bifrost gateway HTTPS/endpoint validation | Fixed in [#694](https://github.com/nullclaw/nullclaw/pull/694) |
| 🟡 **Resolved** | [#680](https://github.com/nullclaw/nullclaw/issues/680) | Telegram duplicate/incorrect answer display | Fixed in [#694](https://github.com/nullclaw/nullclaw/pull/694) |
| 🟡 **Resolved** | [#674](https://github.com/nullclaw/nullclaw/issues/674) | Gemini CLI ACP protocol handshake failure | Fixed in [#675](https://github.com/nullclaw/nullclaw/pull/675) |

**Regression Risk:** The [#773](https://github.com/nullclaw/nullclaw/issues/773) Responses API bug affects `api_mode=responses` users specifically; fix PR [#772](https://github.com/nullclaw/nullclaw/pull/772) should be prioritized for next patch release.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Deterministic Workflow Engine** | [#778](https://github.com/nullclaw/nullclaw/issues/778) | Medium | New request, "Lobster-style" references external pattern; may require design discussion |
| **Knowledge Graph Memory** | [#712](https://github.com/nullclaw/nullclaw/pull/712) | **High** | PR open, substantial implementation (SQLite + recursive CTEs), active development |
| **Cross-Agent Memory Sync** | [#711](https://github.com/nullclaw/nullclaw/pull/711) | Medium | "Feat/cross memory" PR open, enables multi-instance synchronization |
| **REST Admin API** | [#770](https://github.com/nullclaw/nullclaw/pull/770), [#771](https://github.com/nullclaw/nullclaw/pull/771) | **High** | Phased implementation (0+1+2+4), zero new dependencies, <30KB binary increase |
| **Session ID + Custom Provider Params** | [#709](https://github.com/nullclaw/nullclaw/pull/709) | Medium | PR open, addresses [#701](https://github.com/nullclaw/nullclaw/issues/701) for provider flexibility |

**Prediction:** v2026.4.x will likely ship with REST Admin API foundation, Knowledge Graph Memory backend, and the [#772](https://github.com/nullclaw/nullclaw/pull/772) Responses API fix.

---

## 7. User Feedback Summary

### Pain Points Resolved
| Issue | User Impact | Resolution |
|:---|:---|:---|
| Config interpolation confusion | Users expected `${VAR}` syntax in `config.json` | [#706](https://github.com/nullclaw/nullclaw/pull/706) clarifies unsupported; explicit `<YOUR_TOKEN>` pattern |
| Container deployment friction | Pushover required `.env` file in workspace | [#707](https://github.com/nullclaw/nullclaw/pull/707) enables native environment variable reading |
| Telegram production reliability | Subagent routing bugs, duplicate messages | [#705](https://github.com/nullclaw/nullclaw/pull/705), [#694](https://github.com/nullclaw/nullclaw/pull/694) comprehensive fixes |
| Gateway compatibility | Bifrost non-HTTPS endpoints rejected | [#694](https://github.com/nullclaw/nullclaw/pull/694) relaxed validation |

### Emerging Use Cases
- **GitOps/Containerized deployments:** Environment variable credential sourcing
- **Multi-gateway setups:** Bifrost compatibility indicates enterprise proxy usage
- **Deterministic/reproducible workflows:** [#778](https://github.com/nullclaw/nullclaw/issues/778) suggests agent orchestration at scale

---

## 8. Backlog Watch

| Item | Age | Status | Action Needed |
|:---|:---|:---|:---|
| [#778](https://github.com/nullclaw/nullclaw/issues/778) Deterministic Workflow Engine | 1 day | Open, no comments | Maintainer design feedback on "Lobster-style" approach |
| [#712](https://github.com/nullclaw/nullclaw/pull/712) Knowledge Graph Memory | 12 days | Open | Code review; 915 LOC implementation ready |
| [#711](https://github.com/nullclaw/nullclaw/pull/711) Cross-Agent Memory | 13 days | Open | Review for architectural fit with [#712](https://github.com/nullclaw/nullclaw/pull/712) |
| [#709](https://github.com/nullclaw/nullclaw/pull/709) Session ID + Custom Params | 13 days | Open | Review; unblocks [#701](https://github.com/nullclaw/nullclaw/issues/701) |
| [#761](https://github.com/nullclaw/nullclaw/pull/761) CLI tool-call markup filtering | 4 days | Open | Regression test included; ready for merge |

**Risk:** 4 substantial feature PRs (#712, #711, #709, #770) accumulating without merge may indicate review bandwidth constraints. The documentation PRs (#774-#777) are lower-risk and could be fast-tracked to reduce contributor friction.

---

*Digest generated from NullClaw GitHub activity 2026-04-05 to 2026-04-06*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-06

## 1. Today's Overview

IronClaw shows **exceptionally high development velocity** with 45 PRs updated in 24 hours and 5 active issues. The project is in a heavy integration and hardening phase, with core team members (`ilblackdragon`, `serrrfirat`) driving multiple parallel workstreams. No new releases were cut, suggesting the team is accumulating changes for a significant version bump. The 29:16 open-to-merged PR ratio indicates substantial pending work, particularly around testing infrastructure, security hardening, and channel integrations (Slack, Telegram). The project appears healthy but approaching a complexity threshold that may require release stabilization.

---

## 2. Releases

**None** — No new releases published.

---

## 3. Project Progress

### Merged/Closed PRs (16 total, selected highlights)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#2035](https://github.com/nearai/ironclaw/pull/2035) | `ilblackdragon` | Dependabot + SHA-pinned GitHub Actions | Supply-chain security hardening |
| [#1867](https://github.com/nearai/ironclaw/pull/1867) | `j-bloggs` | Fix self-repair notification spam for stuck jobs | Reliability: prevents alert fatigue |
| [#2039](https://github.com/nearai/ironclaw/pull/2039) | `ilblackdragon` | Dual-mode live/replay test harness with LLM judge | Testing infrastructure leap |
| [#2041](https://github.com/nearai/ironclaw/pull/2041) | `serrrfirat` | Slack E2E tests, integration tests, smoke runner | Channel reliability |
| [#2036](https://github.com/nearai/ironclaw/pull/2036) | `serrrfirat` | Expand Telegram E2E coverage (12 regression tests) | WASM channel stability |

**Key Advances:**
- **Testing maturity**: Multiple PRs establish comprehensive E2E patterns for WASM channels (Slack, Telegram) with fake API servers
- **Security posture**: Dependabot integration and SHA pinning across 14 workflow files
- **Agent reliability**: Stuck job detection improved; notification deduplication added

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#2045](https://github.com/nearai/ironclaw/issues/2045) — `ironclaw-lobster` Rust workflow shell | New (Apr 5), 0 comments | **Strategic signal**: User `salem221094` requests native Rust port of OpenClaw's deterministic pipeline runtime. Suggests demand for **reproducible, auditable agent workflows** vs. current probabilistic loops. IronClaw's WASM tooling focus makes this a natural expansion vector. |
| [#2023](https://github.com/nearai/ironclaw/issues/2023) — Kubernetes runtime support | New (Apr 4), 0 comments | **Production deployment pain**: Docker-in-Docker fragility on K8s blocking enterprise adoption. Core need: **orchestrator-native isolation** without privileged containers. |
| [#1937](https://github.com/nearai/ironclaw/pull/1937) — Structured collections (typed CRUD tools) | XL PR, multi-scope | **High-velocity contribution** from `standardtoaster`. Addresses fundamental agent limitation (document fragmentation/corruption). The "grocery list" example signals **memory/structured data** as a priority UX gap. |
| [#1738](https://github.com/nearai/ironclaw/pull/1738) — Agent review for routine results | XL PR, multi-scope | **Agentic loop enhancement**: `j-bloggs` injecting routine completions into LLM processing. Enables **self-reflective agents** — routines can trigger reconsideration rather than fire-and-forget. |

**Underlying Needs:**
- Deterministic/reproducible workflows (#2045)
- Enterprise-grade deployment options (#2023)
- Structured memory beyond raw documents (#1937)
- Agent self-monitoring and meta-cognition (#1738)

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **Critical** (resolved) | [#1811](https://github.com/nearai/ironclaw/issues/1811) | Gateway sent `model: "default"` to Anthropic → 404 storm (330 failed calls in 7h) | **CLOSED** — Fixed in prior release |
| **High** (active) | [#2031](https://github.com/nearai/ironclaw/pull/2031) | Compaction consistency and append concurrency — lock-scope optimizations | **OPEN**, XL PR, new contributor |
| **Medium** (active) | [#2040](https://github.com/nearai/ironclaw/pull/2040) | Skills install fails for invalid catalog names | **OPEN**, fix in progress |
| **Medium** (active) | [#2038](https://github.com/nearai/ironclaw/pull/2038) | Gmail OAuth auth prompt not surfacing in chat UI | **OPEN**, first-pass fix |
| **Medium** (active) | [#2033](https://github.com/nearai/ironclaw/pull/2033) | Raw tool-call output leaking in routine Telegram notifications | **OPEN**, regression tests added |

**Stability Assessment:** The #1811 404-storm incident reveals a **configuration validation gap** — literal `"default"` strings reaching production APIs. The open PRs suggest active hardening around concurrency (#2031) and channel polish (#2038, #2033, #2040). No critical unpatched crashes.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Kubernetes runtime** | [#2023](https://github.com/nearai/ironclaw/issues/2023) | Medium | Production blocker for enterprise; aligns with existing sandbox abstraction |
| **`ironclaw-lobster` workflow shell** | [#2045](https://github.com/nearai/ironclaw/issues/2045) | Low-Medium | Strategic fit with WASM/tooling focus, but significant effort; may incubate as plugin |
| **Structured collections** | [#1937](https://github.com/nearai/ironclaw/pull/1937) | **High** | PR already open, XL scope, addresses core UX pain |
| **Agent review/routine introspection** | [#1738](https://github.com/nearai/ironclaw/pull/1738) | **High** | PR open, enables next-generation agent patterns |
| **AWS Bedrock embeddings** | [#1501](https://github.com/nearai/ironclaw/issues/1501) | **Shipped** | Closed — provider parity achieved |
| **Aliyun Coding Plan support** | [#1446](https://github.com/nearai/ironclaw/pull/1446) | Medium | XL PR open since Mar 20, new contributor — may need core team review |

**Predicted v0.24.0 themes**: Structured data tooling, routine introspection, expanded LLM provider coverage, channel E2E reliability.

---

## 7. User Feedback Summary

### Pain Points
| Issue | Evidence | Severity |
|:---|:---|:---|
| Docker-only isolation | [#2023](https://github.com/nearai/ironclaw/issues/2023) | Blocks K8s-native deployments |
| Document fragmentation/corruption | [#1937](https://github.com/nearai/ironclaw/pull/1937) description | Daily UX friction |
| Configuration footguns | [#1811](https://github.com/nearai/ironclaw/issues/1811) (resolved) | Operational incident risk |
| OAuth flow gaps | [#2038](https://github.com/nearai/ironclaw/pull/2038) | Gmail integration friction |

### Use Cases Emerging
- **Enterprise self-hosting**: K8s runtime request, security hardening PRs
- **Deterministic automation**: `lobster`-style workflow requests
- **Multi-channel operations**: Heavy investment in Slack/Telegram E2E testing
- **Developer tooling**: Debug inspector panel (#1873), coding tools with file history (#2025)

### Satisfaction Signals
- Active external contributions (`standardtoaster`, `quchenyuan`, `salem221094`)
- Rapid closure of provider parity requests (Bedrock embeddings)
- Investment in testing infrastructure suggests confidence in long-term maintainability

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1446](https://github.com/nearai/ironclaw/pull/1446) Aliyun support | 16 days | Contributor fatigue | Core team review; XL PR from new contributor |
| [#1873](https://github.com/nearai/ironclaw/pull/1873) Debug inspector panel | 5 days | Merge conflict drift | Web gateway review |
| [#1738](https://github.com/nearai/ironclaw/pull/1738) Agent review for routines | 8 days | Architectural review | Agent loop maintainers |
| [#2023](https://github.com/nearai/ironclaw/issues/2023) Kubernetes runtime | 2 days | Scope definition | Maintainer triage: in-scope or plugin? |
| [#2045](https://github.com/nearai/ironclaw/issues/2045) `ironclaw-lobster` | 1 day | Design discussion | Response from core team on roadmap fit |

**Recommendation**: The Aliyun PR (#1446) risks staleness without maintainer engagement. The Kubernetes and `lobster` requests need explicit scope decisions to manage community expectations.

---

*Digest generated from 45 PRs and 5 issues updated 2026-04-05 to 2026-04-06.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-06

## 1. Today's Overview

LobsterAI shows **moderate development activity** with 6 open PRs submitted in the last 24 hours and 2 issues updated. Notably, **no PRs were merged or closed**, suggesting either a code review bottleneck or maintainers awaiting revisions. The project appears focused on **automation infrastructure** (scheduled tasks, Gmail triggers, model failover) and **UX polish** rather than core AI capabilities. Zero new releases indicates the v2026.03.30 build from late March remains current. Community engagement is light with minimal reactions (👍: 0 across all items), typical of an enterprise-backed open-source project with internal prioritization.

---

## 2. Releases

**None** — No new releases in the last 24 hours. The most recent referenced version is **2026.03.30**, which had Ubuntu build issues now resolved (see #1418).

---

## 3. Project Progress

**No merged or closed PRs today.** All 6 PRs remain open and under review.

However, **#1418** ([CLOSED] [2026.03.30版本-ubuntu构建启动失败](https://github.com/netease-youdao/LobsterAI/issues/1418)) — a critical build failure causing white screen on Ubuntu — was resolved with 5 comments of community debugging. This unblocks Linux desktop users.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#1418](https://github.com/netease-youdao/LobsterAI/issues/1418) | 5 comments, CLOSED | **Build reliability crisis** — Ubuntu users unable to launch. Root cause: packaging/dependency issues in Electron build pipeline. Resolution required manual intervention. |
| [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) | 1 comment, OPEN | **Python skill execution inconsistency** — Skills work in Claude Code CLI but fail in LobsterAI's 30B local model context. Suggests sandboxing or environment isolation gaps. |

**Underlying needs:** Users need **predictable cross-platform builds** and **reliable local model tool execution**. The Python skill issue (#1487) indicates LobsterAI's skill runtime may diverge from standard Python environments, creating friction for developers migrating from other AI coding tools.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **High** | [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) | Python skills fail in-session vs. external tools | ❌ No fix PR |
| **Medium** | [#1482](https://github.com/netease-youdao/LobsterAI/pull/1482) | Scheduled task edits wipe description, force-enable | 🔄 PR open, awaiting merge |
| **Medium** | [#1485](https://github.com/netease-youdao/LobsterAI/pull/1485) | Disabled skills still triggerable in cowork chat | 🔄 PR open, security/policy fix |
| **Resolved** | [#1418](https://github.com/netease-youdao/LobsterAI/issues/1418) | Ubuntu build white screen | ✅ Closed |

**Stability assessment:** Two data-loss/correctness bugs in scheduled tasks (#1482) and skill enforcement (#1485) have fixes pending. The Python execution bug (#1487) lacks a fix and affects core functionality.

---

## 6. Feature Requests & Roadmap Signals

| PR | Feature | Strategic Signal |
|----|---------|----------------|
| [#1488](https://github.com/netease-youdao/LobsterAI/pull/1488) | Scheduled task UI overhaul (cards, search, history) | **Productivity/enterprise readiness** — competing with cron+UI tools like n8n |
| [#1486](https://github.com/netease-youdao/LobsterAI/pull/1486) | "Test Task" button in creation flow | **Developer experience** — reducing iteration friction |
| [#1484](https://github.com/netease-youdao/LobsterAI/pull/1484) | Gmail trigger for agent activation | **Automation parity** — matching OpenClaw's email-triggered workflows |
| [#1483](https://github.com/netease-youdao/LobsterAI/pull/1483) | Automatic model failover | **Reliability engineering** — production deployment readiness |

**Next version prediction:** Given the concentration on **scheduled tasks** (3 PRs) and **automation triggers**, v2026.04.x will likely position LobsterAI as a **local-first alternative to cloud automation platforms** (Zapier, Make, n8n) with AI agent capabilities. Model failover (#1483) suggests enterprise/team deployment scenarios.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Profile |
|------------|----------|--------------|
| **Build/packaging fragility** | #1418 Ubuntu failures | Self-hosting Linux users |
| **Skill environment inconsistency** | #1487 Python works elsewhere, not here | Developers with existing toolchains |
| **Task editing data loss** | #1482 description wiped on edit | Power users of automation features |
| **No quick validation loop** | #1486 "Test Task" request | Iterative workflow builders |

**Satisfaction:** Users appreciate the local-30B-model capability (mentioned in #1487).

**Dissatisfaction:** Tooling reliability gaps between "works in Claude Code" vs. "works in LobsterAI" create migration friction. UI/UX polish lags behind core AI features.

---

## 8. Backlog Watch

| Risk | Item | Age | Action Needed |
|------|------|-----|---------------|
| **Unacknowledged execution bug** | [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) | 1 day | Maintainer triage — is this sandboxing, model-specific, or skill-parser issue? |
| **Review bottleneck** | 6 open PRs, 0 merges | 1 day | Maintainer review capacity or merge criteria unclear |
| **Referenced but unlinked** | #1062 (cited in #1482) | Unknown | Original scheduled task issue may have related unresolved items |

**Recommendation:** The 0% merge rate on 6 PRs warrants investigation — whether due to CI failures, awaiting author updates, or maintainer bandwidth constraints.

---

*Digest generated from GitHub activity 2026-04-05 to 2026-04-06. Data source: netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-06

## 1. Today's Overview

Moltis demonstrates **exceptional project health** with 6 issues and 9 PRs processed in 24 hours—all issues closed, 8 of 9 PRs merged/closed, and a new release shipped. The maintainer team (led by `penso`) shows remarkable velocity with same-day turnaround on bug fixes and feature implementations. Activity centers on **provider reliability**, **multi-channel expansion**, and **security hardening**. Zero open issues from today's batch indicates either rapid resolution or effective triage. The single open PR (Microsoft Teams integration) represents substantial ongoing work rather than stalled development.

---

## 2. Releases

**[20260405.06](https://github.com/moltis-org/moltis/releases/tag/20260405.06)** — Released 2026-04-05

*Note: No detailed changelog provided in source data. Based on merged PRs, this release likely includes:*
- Application-level HTTP proxy support (`upstream_proxy`)
- Multi-model selection in provider setup
- Vision support fixes for Mistral/Qwen models
- Improved provider probe error visibility
- Streamable HTTP MCP server support
- GitHub artifact attestations (SLSA v1.0 Build Level 2)

---

## 3. Project Progress

### Merged/Closed PRs (8 items)

| PR | Title | Author | Key Advancement |
|:---|:---|:---|:---|
| [#562](https://github.com/moltis-org/moltis/pull/562) | ci: add GitHub artifact attestations to release workflow | penso | **Security**: SLSA v1.0 Build Level 2 provenance, Sigstore + GPG signing layers |
| [#561](https://github.com/moltis-org/moltis/pull/561) | feat(config): add upstream_proxy for application-level HTTP proxy support | penso | **Feature**: Enterprise proxy support (http/https/socks5/socks5h) via `moltis.toml` |
| [#560](https://github.com/moltis-org/moltis/pull/560) | fix(providers): rediscover models from /v1/models before probing | penso | **Reliability**: Dynamic model discovery without restart |
| [#559](https://github.com/moltis-org/moltis/pull/559) | fix(providers): surface real error on provider probe failure | penso | **UX**: Eliminates "Service unabailable" generic masking |
| [#558](https://github.com/moltis-org/moltis/pull/558) | fix(providers): default to vision support for unknown models | penso | **Capability**: Mistral/Qwen vision now works; denylist approach |
| [#557](https://github.com/moltis-org/moltis/pull/557) | fix(web): allow multi-model selection during provider setup | penso | **UX**: Select All/Deselect All, explicit Continue button |
| [#555](https://github.com/moltis-org/moltis/pull/555) | Add streamable http mcp server support | volfco | **Protocol**: Closes [#294](https://github.com/moltis-org/moltis/issues/294) — MCP over HTTP |
| [#500](https://github.com/moltis-org/moltis/pull/500) | feat(channels): add Matrix channel integration | penso | **Channel**: Matrix SDK 0.16, DM/room support, streaming edits |

### Open PR
| PR | Title | Author | Status |
|:---|:---|:---|:---|
| [#529](https://github.com/moltis-org/moltis/pull/529) | feat(msteams): comprehensive Teams channel implementation | penso | **In Progress** — JWT verification, retry logic, webhook timeouts; substantial 5-day effort |

---

## 4. Community Hot Topics

**No high-engagement items** — all issues/PRs show 0-1 comments and zero reactions. This suggests:
- **Efficient maintainer response** preventing discussion buildup
- **Small but focused user base** with direct issue reporting
- **Well-scoped PRs** requiring minimal clarification

Most substantively discussed: **[#548](https://github.com/moltis-org/moltis/issues/548)** (proxy support) — 1 comment, rapidly implemented in [#561](https://github.com/moltis-org/moltis/pull/561). Underlying need: **enterprise deployment flexibility** (corporate proxies, regional routing).

---

## 5. Bugs & Stability

| Severity | Issue | Reporter | Fix PR | Description |
|:---|:---|:---|:---|:---|
| **High** | [#554](https://github.com/moltis-org/moltis/issues/554) | bsarkisov | [#559](https://github.com/moltis-org/moltis/pull/559) | "Service unabailable" masked real probe failures — **fixed** |
| **Medium** | [#551](https://github.com/moltis-org/moltis/issues/551) | bsarkisov | [#560](https://github.com/moltis-org/moltis/pull/560) | "Detect all models" only probed existing — **fixed** |
| **Medium** | [#552](https://github.com/moltis-org/moltis/issues/552) | bsarkisov | [#557](https://github.com/moltis-org/moltis/pull/557) | Forced single-model selection — **fixed** |
| **Medium** | [#556](https://github.com/moltis-org/moltis/issues/556) | brunoxylo | [#558](https://github.com/moltis-org/moltis/pull/558) | Mistral/Qwen vision capability ignored — **fixed** |

**Stability Assessment**: All reported bugs resolved same-day. Pattern suggests **mature testing infrastructure** and **responsive maintenance**. Reporter `bsarkisov` filed 3 related bugs—possible **power user stress-testing** provider configuration flows.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Status | Likelihood in Next Release |
|:---|:---|:---|:---|
| Application/channel-level proxy support | [#548](https://github.com/moltis-org/moltis/issues/548) | **Shipped** in [#561](https://github.com/moltis-org/moltis/pull/561) | ✅ Complete |
| Streamable HTTP MCP | [#294](https://github.com/moltis-org/moltis/issues/294) | **Shipped** in [#555](https://github.com/moltis-org/moltis/pull/555) | ✅ Complete |
| Microsoft Teams channel | — | **In Progress** [#529](https://github.com/moltis-org/moltis/pull/529) | 🔶 High (5 days active) |
| Matrix channel | — | **Shipped** in [#500](https://github.com/moltis-org/moltis/pull/500) | ✅ Complete |

**Emerging Pattern**: Heavy investment in **channel diversity** (Matrix shipped, Teams in progress). Next likely targets: Slack enhancements, Discord, or webhook-generic channels.

---

## 7. User Feedback Summary

### Pain Points Addressed
| Issue | Pain Point | Resolution |
|:---|:---|:---|
| [#554](https://github.com/moltis-org/moltis/issues/554) | Opaque error messages | Real errors now surfaced |
| [#552](https://github.com/moltis-org/moltis/issues/552) | Tedious multi-model setup | Batch selection UI |
| [#556](https://github.com/moltis-org/moltis/issues/556) | Vision capability detection gaps | Denylist approach, defaults to enabled |
| [#548](https://github.com/moltis-org/moltis/issues/548) | Corporate proxy requirements | `upstream_proxy` config |

### Use Case Signals
- **Enterprise deployments**: Proxy support, Teams integration, artifact attestations
- **Multi-tenant/provider setups**: Dynamic model discovery, multi-model selection
- **Open-source model adoption**: Ollama, Mistral, Qwen compatibility focus

**Satisfaction Indicator**: Rapid same-day fixes suggest **high maintainer-user alignment**; zero follow-up comments on closed issues implies resolution acceptance.

---

## 8. Backlog Watch

**No critical backlog identified** — all issues from the past month are closed. However, monitoring recommended for:

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#529](https://github.com/moltis-org/moltis/pull/529) Teams PR | 6 days open | Medium | Complex feature; ensure review bandwidth when ready |
| [#294](https://github.com/moltis-org/moltis/issues/294) MCP HTTP | 34 days old | Resolved | Closed by [#555](https://github.com/moltis-org/moltis/pull/555) |

**Health Check**: Issue [#294](https://github.com/moltis-org/moltis/issues/294) took 34 days from request to implementation—reasonable for protocol-level features. No stale `help wanted` or `good first issue` items visible in sample.

---

*Digest generated from GitHub activity 2026-04-05 to 2026-04-06. All links: https://github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-06

## 1. Today's Overview

CoPaw shows **elevated community activity** with 39 issues updated in the last 24 hours (34 active, 5 closed) and 8 PRs in motion (5 open, 3 merged/closed). No new release was published. The project demonstrates **active maintenance** with quick turnaround on critical fixes—three PRs merged today including a security warning hang fix and a token counter patch. However, **stability concerns are accumulating**: multiple reports of CPU spikes, process leaks, and infinite loops suggest resource management needs attention. The community is particularly vocal about Windows-specific issues and model compatibility gaps.

---

## 2. Releases

**No new releases** (v1.0.1 / v1.0.1b1 remain current).

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#2951](https://github.com/agentscope-ai/CoPaw/pull/2951) | octo-patch | **fix(cli): skip security warning prompt when --defaults flag is used** | Resolves [#2943](https://github.com/agentscope-ai/CoPaw/issues/2943) — `copaw init` hang on Windows |
| [#2070](https://github.com/agentscope-ai/CoPaw/pull/2070) | ixiadao | **fix(token): handle list content in CopawTokenCounter** | Fixes silent `MemoryCompactionHook` failures with Anthropic-style content blocks |
| [#2946](https://github.com/agentscope-ai/CoPaw/pull/2946) | joe2643 | ~~feat: WhatsApp channel via neonize~~ **CLOSED** | Superseded by [#2962](https://github.com/agentscope-ai/CoPaw/pull/2962) |

### Active Development

| PR | Author | Status | Description |
|:---|:---|:---|:---|
| [#2962](https://github.com/agentscope-ai/CoPaw/pull/2962) | joe2643 | **NEW** | WhatsApp channel via neonize (clean replacement) — direct WhatsApp Web connection without Meta API |
| [#2950](https://github.com/agentscope-ai/CoPaw/pull/2950) | octo-patch | Open | Windows CMD window suppression for `execute_shell_command` |
| [#2448](https://github.com/agentscope-ai/CoPaw/pull/2448) | TranscendenceLiang | Open, needs review | MiniMax OAuth with Device Code Flow + PKCE — **blocking further development** per [#2907](https://github.com/agentscope-ai/CoPaw/issues/2907) |
| [#2453](https://github.com/agentscope-ai/CoPaw/pull/2453) | TranscendenceLiang | Open | Heartbeat confirmation mechanism (HEARTBEAT_OK) |
| [#2523](https://github.com/agentscope-ai/CoPaw/pull/2523) | TranscendenceLiang | Open | Cross-platform `.gitattributes` improvements |

---

## 4. Community Hot Topics

### Most Active Discussions (by engagement)

| Issue/PR | Comments | Topic | Underlying Need |
|:---|:---:|:---|:---|
| [#2888](https://github.com/agentscope-ai/CoPaw/issues/2888) | **8** | [BUG] High CPU usage when idle — AnyIO busy loop | **Critical resource efficiency** — users running CoPaw 24/7 need idle CPU near zero |
| [#2231](https://github.com/agentscope-ai/CoPaw/issues/2231) | 7 | [BUG] Console voice button disabled (CLOSED) | Frontend state management reliability |
| [#2943](https://github.com/agentscope-ai/CoPaw/issues/2943) | 4 | [BUG] `copaw init` hangs on security warning | **First-run experience** — Windows users blocked at onboarding |
| [#2911](https://github.com/agentscope-ai/CoPaw/issues/2911) | 3 | [BUG] Windows client auto-closes after hours | Long-running session stability |
| [#2947](https://github.com/agentscope-ai/CoPaw/issues/2947) | 3 | [BUG] Gemma4 models trapped in tool call loops | **Model compatibility** — Google's new architecture needs prompt/tool tuning |
| [#2598](https://github.com/agentscope-ai/CoPaw/issues/2598) | 3 | [Q] Qwen3-235B-A22B support | Enterprise users need clarity on non-reasoning model performance |

### Key Insight
The top issue (#2888) reveals a **fundamental async runtime problem** — not a feature request but a core infrastructure defect affecting all platforms. The Gemma4 (#2947) and Qwen3 (#2598) issues signal **model ecosystem expansion pressure** as users adopt cutting-edge open weights.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#2888](https://github.com/agentscope-ai/CoPaw/issues/2888) | 100% CPU idle busy loop (AnyIO cancellation) | **OPEN** — root cause identified, needs patch |
| 🔴 **Critical** | [#2960](https://github.com/agentscope-ai/CoPaw/issues/2960) | MCP client double-initialization on hot reload → CPU spike | **OPEN** — regression from MCP feature |
| 🟡 **High** | [#2959](https://github.com/agentscope-ai/CoPaw/issues/2959) | `ToolResultCompactor` infinite loop at autostart | **CLOSED** today — fixed in patch |
| 🟡 **High** | [#2934](https://github.com/agentscope-ai/CoPaw/issues/2934) | Browser use: chromium process leak (no timeout/force kill) | **OPEN** — resource exhaustion risk |
| 🟡 **High** | [#2947](https://github.com/agentscope-ai/CoPaw/issues/2947) | Gemma4 infinite tool call loops | **OPEN** — model-specific prompt engineering needed |
| 🟡 **High** | [#2911](https://github.com/agentscope-ai/CoPaw/issues/2911) | Windows client silent crash after hours | **OPEN** — likely related to #2888 or #2960 |
| 🟡 **High** | [#2956](https://github.com/agentscope-ai/CoPaw/issues/2956) | Telegram channel unresponsive after extended runtime | **OPEN** — channel connection lifecycle issue |
| 🟢 **Medium** | [#2930](https://github.com/agentscope-ai/CoPaw/issues/2930) | Tool call parsing fails + config reset (llama.cpp) | **OPEN** — local model compatibility |
| 🟢 **Medium** | [#2965](https://github.com/agentscope-ai/CoPaw/issues/2965) | `view_image` corrupts image data for multimodal LLMs | **OPEN** — data pipeline bug |
| 🟢 **Medium** | [#2967](https://github.com/agentscope-ai/CoPaw/issues/2967) | `execute_shell_command` bypasses File Guard | **OPEN** — **security boundary issue** |

**Pattern**: Three distinct **infinite loop/CPU spike** issues (#2888, #2959, #2960) suggest systemic problems with background task lifecycle management. The File Guard bypass (#2967) is a **security concern** requiring audit.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| [#2969](https://github.com/agentscope-ai/CoPaw/issues/2969) | Built-in personal knowledge base (RAG) | **High** | Core differentiator; aligns with "personal AI assistant" positioning |
| [#2763](https://github.com/agentscope-ai/CoPaw/issues/2763) | Chat commands: `/models`, `/model <provider>-<model>` | **High** | Low complexity, high UX impact; 2 👍 reactions |
| [#2961](https://github.com/agentscope-ai/CoPaw/issues/2961) | Skill folder/classification system | **Medium** | Scalability need as skill ecosystem grows |
| [#2966](https://github.com/agentscope-ai/CoPaw/issues/2966) | Custom global fonts | **Low** | Niche UI customization |
| [#2937](https://github.com/agentscope-ai/CoPaw/issues/2937) | Merge multi-agent conversation windows by task ID | **Medium** | UX improvement for complex workflows |
| [#2972](https://github.com/agentscope-ai/CoPaw/issues/2972) | Toggle thinking process display in web panel | **High** | Parity with external channels; simple config extension |

**WhatsApp channel** ([#2962](https://github.com/agentscope-ai/CoPaw/pull/2962)) is actively developed and likely merges soon, expanding channel coverage beyond WeChat/Telegram/QQ.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Intensity |
|:---|:---|:---:|
| **Windows friction** | #2943 (init hang), #2933 (CMD popup), #2911 (crashes), #2970 (input red lines) | 🔴 High |
| **Resource leaks** | #2888 (CPU), #2934 (browser processes), #2960 (MCP client) | 🔴 High |
| **Model compatibility gaps** | #2947 (Gemma4), #2598 (Qwen3), #2930 (local models) | 🟡 Medium |
| **Configuration fragility** | #2930 (config reset), #2931 (skill auto-select), #2964 (WeChat channel sync) | 🟡 Medium |
| **Observability gaps** | #2926 (no API request logging), #2972 (forced thinking display) | 🟡 Medium |

### Positive Signals
- **Quick fix turnaround**: Security warning hang resolved same-day (#2951)
- **Active channel expansion**: WhatsApp PR in progress
- **Enterprise interest**: Qwen3-235B inquiry suggests production deployments

### Use Case Evolution
Users are pushing CoPaw beyond "personal assistant" into **always-on infrastructure** (24/7 runtime, scheduled tasks, multi-agent orchestration), exposing scalability assumptions.

---

## 8. Backlog Watch

### PRs Needing Maintainer Attention

| PR | Age | Blocker | Action Needed |
|:---|:---:|:---|:---|
| [#2448](https://github.com/agentscope-ai/CoPaw/pull/2448) | **9 days** | Unreviewed | **Merge or feedback** — blocking dependent work per [#2907](https://github.com/agentscope-ai/CoPaw/issues/2907) |
| [#2453](https://github.com/agentscope-ai/CoPaw/pull/2453) | 9 days | Unreviewed | Review heartbeat mechanism design |
| [#2523](https://github.com/agentscope-ai/CoPaw/pull/2523) | 7 days | Unreviewed | Low-risk, can batch review |

### Stale Critical Issues

| Issue | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#2888](https://github.com/agentscope-ai/CoPaw/issues/2888) | 3 days | **100% CPU idle** — affects all users | Priority fix; assign core maintainer |
| [#1217](https://github.com/agentscope-ai/CoPaw/issues/1217) | **26 days** | Intermittent `JSONDecodeError` — data loss | Root cause analysis; logging enhancement |
| [#470](https://github.com/agentscope-ai/CoPaw/issues/470) | 33 days | ModelScope install blocked | Platform partnership issue |

### Recommendation
The **AnyIO busy loop** (#2888) and **MCP client cleanup** (#2960) together suggest a **async resource management sprint** is warranted before v1.1.0. The MiniMax OAuth PR (#2448) has explicit downstream dependencies and should be prioritized for review.

---

*Digest generated from GitHub activity 2026-04-05 to 2026-04-06. All links: [github.com/agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*