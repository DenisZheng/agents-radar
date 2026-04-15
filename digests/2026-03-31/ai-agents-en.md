# OpenClaw Ecosystem Digest 2026-03-31

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-31 00:11 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-03-31

## 1. Today's Overview

OpenClaw shows **exceptionally high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a mature, fast-moving project with substantial community engagement. However, **zero new releases** despite this velocity suggests a focus on stabilization over shipping. The issue-to-PR ratio (429 open issues vs. 314 open PRs) reveals a growing backlog, with critical regressions in provider integrations (Kimi k2p5, OpenRouter, Gemini) and channel stability (WhatsApp, Telegram) dominating user pain points. The project appears to be in a **stabilization phase** following the 2026.3.13 release, with maintainers actively merging security and reliability fixes while wrestling with async context routing and session management complexity.

---

## 2. Releases

**No new releases** — Version 2026.3.13 (61d171a) remains current. The absence of releases despite 500 PR updates suggests maintainers are accumulating fixes for a larger point release or addressing blocker-quality issues before tagging.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#57647](https://github.com/openclaw/openclaw/pull/57647) | vincentkoc | Preserve shared-auth rate limits during mixed handshakes | Security hardening for gateway auth |
| [#57652](https://github.com/openclaw/openclaw/pull/57652) | vincentkoc | Keep exec-event runs on non-owner tool surface | Prevents privilege escalation in async execution |
| [#57646](https://github.com/openclaw/openclaw/pull/57646) | vincentkoc | Disconnect active sessions after device token rotation | Security: forces re-auth on token rotation |
| [#57808](https://github.com/openclaw/openclaw/pull/57808) | huluwaaaaaaaa | Feature/merge local work | Maintainer tooling |
| [#52445](https://github.com/openclaw/openclaw/pull/52445) | SolarAquarion | Fix gateway crash loop from missing extension entry points | **Critical stability fix** |
| [#52435](https://github.com/openclaw/openclaw/pull/52435) | warren618 | Fix OpenAI WebSocket stream never terminating | Prevents resource leaks |

### Active Development Areas
- **Gateway security**: 3 merged PRs around auth, rate limiting, and session lifecycle
- **Stream termination fixes**: Addressing hanging connections in OpenAI and Anthropic paths
- **Infrastructure hardening**: Multiple PRs flagging dangerous config combinations (sandbox off, auth none, weak tokens)

---

## 4. Community Hot Topics

| Issue/PR | Comments | 🔥 Analysis |
|:---|:---:|:---|
| [#57523](https://github.com/openclaw/openclaw/issues/57523) — Kimi k2p5 "Unexpected event order" | **52** | **Top blocker**: Anthropic-compatible streaming broken for Moonshot's Kimi k2p5. Regression makes chat unusable. Root cause: message_start/message_stop ordering violation in streaming parser. |
| [#53870](https://github.com/openclaw/openclaw/issues/53870) — Matrix plugin security scan delay | 16 | Closed after resolution; reveals friction in plugin distribution security pipeline |
| [#52037](https://github.com/openclaw/openclaw/issues/52037) — OpenAI Codex OAuth token persistence | 10 | Core auth infrastructure gap: refreshed tokens lost on disk, breaking long-running services |
| [#51085](https://github.com/openclaw/openclaw/issues/51085) — STT mic permissions blocked | 10 | Security headers vs. feature conflict: Permissions-Policy blocks legitimate microphone use |
| [#51056](https://github.com/openclaw/openclaw/issues/51056) — OpenRouter 401 auth failures | 10 | Provider integration regression: Authorization header dropped in requests |

**Underlying Needs**: 
- **Streaming reliability** across provider adapters (Kimi, OpenRouter, Gemini all affected)
- **OAuth/token lifecycle management** for long-running gateway deployments
- **Security/feature balance** — permissive defaults breaking functionality

---

## 5. Bugs & Stability

### Critical (Crash/Data Loss)

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#57523](https://github.com/openclaw/openclaw/issues/57523) | Kimi k2p5 streaming crash — chat unusable | 🔴 **Open**, no PR linked |
| [#52445](https://github.com/openclaw/openclaw/issues/52445) | Gateway crash loop on missing extension entry points | 🟢 **Fixed** by #52445 |
| [#51083](https://github.com/openclaw/openclaw/issues/51083) | `ReferenceError: ANTHROPIC_MODEL_ALIASES` initialization crash | 🔴 **Open** — blocks all CLI commands |
| [#51593](https://github.com/openclaw/openclaw/issues/51593) | HTTP 400 "duplicated tool call id" with moonshot/kimi-k2.5 in WhatsApp groups | 🔴 **Open** — model-specific, group-chat only |

### High (Functionality Broken)

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#52037](https://github.com/openclaw/openclaw/issues/52037) | Codex OAuth tokens not persisting to disk | 🔴 **Open** |
| [#51056](https://github.com/openclaw/openclaw/issues/51056) | OpenRouter 401 — missing Authorization header | 🔴 **Open** |
| [#51085](https://github.com/openclaw/openclaw/issues/51085) | STT mic button silently fails (Permissions-Policy) | 🔴 **Open** |
| [#51012](https://github.com/openclaw/openclaw/issues/51012) | WhatsApp relink succeeds then immediate 401 session drop | 🔴 **Open** — flaky reconnection |
| [#50999](https://github.com/openclaw/openclaw/issues/50999) | Telegram polling stall/restart loop on macOS | 🔴 **Open** |

### Regressions in 2026.3.13

| Issue | Regression From | Impact |
|:---|:---|:---|
| [#52585](https://github.com/openclaw/openclaw/issues/52585) | 2026.2.23 | Plugin install fails: `SafeOpenError` on tarball extraction |
| [#51871](https://github.com/openclaw/openclaw/issues/51871) | Earlier 2026.3.x | Cron jobs not displayed in Control UI dashboard |
| [#51987](https://github.com/openclaw/openclaw/issues/51987) | Earlier versions | Local gateway websocket handshake timeout on 127.0.0.1 |

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood in Next Release |
|:---|:---|:---:|
| [#51372](https://github.com/openclaw/openclaw/issues/51372) | Gemini Context Caching Support (`cachedContents` API) | **High** — cost optimization, parity with Anthropic |
| [#52422](https://github.com/openclaw/openclaw/pull/52422) | `sessions_manage` tool with semantic compaction | **High** — PR open, addresses session bloat |
| [#57987](https://github.com/openclaw/openclaw/pull/57987) | Conversation-history caching for OpenRouter Anthropic | **Medium-High** — PR open, performance win |
| [#57995](https://github.com/openclaw/openclaw/pull/57995) | Matrix thread-isolated sessions | **Medium** — PR open, improves multi-thread UX |
| [#57717](https://github.com/openclaw/openclaw/pull/57717) | Slack Block Kit table send path | **Medium** — PR open, completes feature |
| [#57183](https://github.com/openclaw/openclaw/pull/57183) | `postSearchCommand` for memory result enrichment | **Medium** — extensibility hook |
| [#25157](https://github.com/openclaw/openclaw/issues/25157) | Configurable embedding batch timeout (Ollama) | **Medium** — stale but referenced by active issues |

**Predicted 2026.3.14/2026.4.0 themes**: Session management improvements, Gemini feature parity, provider streaming robustness, Matrix/Slack channel maturity.

---

## 7. User Feedback Summary

### 😤 Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Provider fragility** | Kimi, OpenRouter, Gemini, Claude all have open integration bugs | 🔴 Critical |
| **Session/async routing** | "Blind spot" problem (#51857), lost async completions (#52305), context trimmer splitting tool pairs (#52024) | 🔴 Critical |
| **WhatsApp reliability** | Repeated relink failures, 401 drops, session instability | 🟡 High |
| **macOS-specific issues** | Telegram polling loops (#50999), browser/CLI version mismatches (#57079) | 🟡 High |
| **OAuth/token management** | Codex tokens not persisting, manual refresh required | 🟡 High |

### 😊 Positive Signals

- Active maintainer response on security issues (3 merged auth PRs today)
- Community contributing fixes for edge cases (Windows CI, proxy support)
- Rich plugin ecosystem (Matrix, Discord, Telegram, WhatsApp, Feishu all maintained)

### Use Cases Emerging

- **Multi-account Discord setups** — hitting config management complexity
- **VPS/cloud deployments** — OAuth and systemd integration pain
- **Local/self-hosted AI** — Ollama embedding timeout issues
- **Enterprise-adjacent** — security scanning for plugins, dangerous config flags

---

## 8. Backlog Watch

### Long-Stalled Important Issues

| Issue | Age | Blocker | Needs |
|:---|:---:|:---|:---|
| [#31686](https://github.com/openclaw/openclaw/issues/31686) | ~1 month | Claude ACP session mode fails vs. exec mode | ACP runtime investigation |
| [#29367](https://github.com/openclaw/openclaw/issues/29367) | ~1 month | Subagent workspace inheritance bug | Agent spawning architecture review |
| [#17101](https://github.com/openclaw/openclaw/issues/17101) | ~6 weeks | Telegram voice message transcription | Audio pipeline + STT integration |

### PRs Needing Maintainer Attention

| PR | Status | Risk |
|:---|:---|:---|
| [#51673](https://github.com/openclaw/openclaw/pull/51673) | Open, XL size | vLLM usage display fix — conflicts likely with other token accounting changes |
| [#52422](https://github.com/openclaw/openclaw/pull/52422) | Open, L size | `sessions_manage` tool — high user value, needs review for deferred execution safety |
| [#57991](https://github.com/openclaw/openclaw/pull/57991) | Open, XL size | Swabble logging/health improvements — infrastructure critical |

### Maintainer Capacity Signal

With 314 open PRs and 429 open issues, the project shows **significant review backlog**. The 3 security PRs merged today (all by vincentkoc) suggest focused maintainer bandwidth on auth/gateway stability, with feature PRs potentially queued behind reliability work.

---

*Digest generated from 500 issues and 500 PRs updated 2026-03-31. Data source: github.com/openclaw/openclaw*

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Analysis — 2026-03-31

## 1. Ecosystem Overview

The personal AI assistant / agent open-source ecosystem is experiencing **intense maturation pressure**, with projects bifurcating between "gateway/router" architectures (OpenClaw, IronClaw, PicoClaw) and "embedded agent" frameworks (NanoBot, NanoClaw, CoPaw). The dominant pain point across all projects is **reliability at scale**—memory management, session lifecycle, and provider API fragility dominate issue backlogs. Enterprise adoption signals are strengthening (multi-tenancy, Feishu/Lark/WeChat integrations, security hardening), while the community is aggressively pursuing **local/self-hosted deployment** (Ollama, LM Studio, vLLM) as a hedge against cloud provider instability. The ecosystem shows signs of consolidation around MCP (Model Context Protocol) as a de facto tool interoperability standard.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* | Phase |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | No new release (2026.3.13 current) | B+ | Stabilization |
| **NanoBot** | 19 | 48 | No release (v0.1.4.post6) | B | Feature expansion |
| **PicoClaw** | 28 | 81 | v0.2.4-nightly | B+ | Pre-release stabilization |
| **NanoClaw** | 18 | 50 | No release | B | Active development |
| **NullClaw** | 1 | 4 | No release | A- | Maintenance |
| **IronClaw** | 10 | 50 | No release (v0.24.0 prep) | B+ | Staging-heavy |
| **LobsterAI** | 26 | 50 | **v2026.3.30** | C+ | Rapid iteration / security debt |
| **TinyClaw** | 0 | 2 | No release | B | Maintenance |
| **Moltis** | 1 | 6 | No release | A- | Active development |
| **CoPaw** | 50 | 50 | **v1.0.0 stable** | B+ | Post-release scaling |
| **ZeptoClaw** | 1 | 0 | No release | B- | Maintenance |
| **EasyClaw** | 2 closed | 0 | No release | C+ | Low activity |

*\*Health score combines velocity, issue resolution rate, stability indicators, and community engagement*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily | 10-50x higher volume than all peers |
| **Provider diversity** | 15+ providers with active maintenance | NanoBot: ~8; PicoClaw: ~6; IronClaw: ~5 |
| **Channel coverage** | WhatsApp, Telegram, Matrix, Discord, Feishu, Slack | Broadest in ecosystem |
| **Security investment** | 3 auth/gateway PRs merged daily | Moltis, NanoClaw comparable; others lag |
| **Session architecture** | Advanced async context routing | Unique complexity vs. simpler request-response peers |

### Technical Approach Differences
- **OpenClaw**: Gateway-first, multi-tenant, heavy emphasis on provider abstraction and session state machine complexity
- **NanoBot/PicoClaw**: Lighter-weight, file-based memory, faster iteration cycles
- **IronClaw**: Staging-heavy release process, enterprise workflow focus (routines, benchmarks)
- **CoPaw**: AgentScope-based, background task architecture, Chinese market-optimized

### Community Size
OpenClaw operates at **ecosystem-leading scale**—its daily activity exceeds most peers' monthly volume. However, this creates a **review bottleneck** (314 open PRs vs. 50 for CoPaw, 36 for NanoClaw). The project has transitioned from "fastest mover" to "incumbent maintaining compatibility breadth."

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Streaming reliability** | OpenClaw, NanoBot, IronClaw, LobsterAI, CoPaw | Kimi k2p5 message ordering (#57523), OpenRouter auth drops (#51056), Gemini function calling (#1510) |
| **Memory/scaling** | OpenClaw, NanoBot, NanoClaw, CoPaw | Unbounded history growth (#2638, #2289), context compression (#1493-1495, #2482), semantic compaction (#52422) |
| **MCP protocol support** | Moltis, NanoClaw, LobsterAI, CoPaw | Per-session MCP toggle (#1070), stdio transport timeouts (#2591), server discovery |
| **Local/edge deployment** | NanoBot, PicoClaw, IronClaw, CoPaw | Ollama native provider (#2617), LM Studio (#2193), private network HTTP (#1754) |
| **Enterprise channel integration** | OpenClaw, PicoClaw, IronClaw, CoPaw, LobsterAI | Feishu/Lark pairing (#1673), WeChat file uploads (#2576), DingTalk reliability |
| **Security hardening** | OpenClaw, Moltis, NanoClaw, LobsterAI | Git hook bypass prevention (#455, #1271), vault sealing (#518), SSRF/file read vulns (#1041, #1031) |
| **OAuth/token lifecycle** | OpenClaw, IronClaw, LobsterAI | Codex persistence (#52037), MCP refresh flows (#1767), token rotation session invalidation (#57646) |

---

## 5. Differentiation Analysis

| Project | Core Differentiator | Target User | Architecture |
|:---|:---|:---|:---|
| **OpenClaw** | Universal gateway, maximum provider/channel coverage | Multi-tenant SaaS operators, integrators | Async session state machine, heavy abstraction layers |
| **NanoBot** | Lightweight, fast iteration, Chinese provider focus | Individual developers, edge deployers | File-based memory, simple config |
| **PicoClaw** | Self-update infrastructure, operational maturity | Self-hosters, small teams | Go-based, container-native |
| **NanoClaw** | Container orchestration, Claude Code integration | DevOps/SRE teams, CI/CD automation | Docker-first, sidecar pattern |
| **IronClaw** | Enterprise workflows, financial/DeFi readiness | B2B automation, crypto power users | Routine-based, staging-heavy |
| **LobsterAI** | NetEase ecosystem integration, scheduled tasks | China enterprise, workplace automation | Electron-based, monolithic |
| **CoPaw** | AgentScope foundation, background tasks, v1.0 stability | Professional developers, AIOps | Multi-agent coordination, async execution |
| **Moltis** | Session recall, SSH runtime, skill portability | Infrastructure teams, security-conscious | Vault-based, managed runtimes |
| **TinyClaw** | Visual agent orchestration (3D office, ReactFlow) | Non-technical users, team managers | React-heavy, visualization-first |
| **ZeptoClaw** | Minimal footprint, runtime registry accuracy | Embedded systems, tool developers | Rust-based, correctness-focused |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Velocity, Pre-Stability)
| Project | Indicators | Risk |
|:---|:---|:---|
| LobsterAI | Daily releases, 50 PRs/day, security debt accumulating | Burnout, quality regression |
| CoPaw | v1.0.0 just shipped, 82% PR closure rate | Post-release scaling challenges |
| PicoClaw | 81 PRs, nightly builds, v0.2.4 stabilization | Configuration fragility regressions |

### Tier 2: Active Development (Healthy Velocity, Balanced)
| Project | Indicators | Trajectory |
|:---|:---|:---|
| OpenClaw | Highest absolute activity, stabilization focus | Maturing toward enterprise reliability |
| NanoBot | 2.5:1 PR:issue ratio, CompositeHook merge | Architecture evolution (Graphiti memory) |
| IronClaw | Staging promotions, v0.24.0 prep | Enterprise workflow deepening |
| NanoClaw | Home Assistant integration, security focus | IoT/home automation expansion |
| Moltis | Same-day bug resolution, Matrix integration | Multi-channel infrastructure play |

### Tier 3: Maintenance/Stabilization (Low Velocity, High Stability)
| Project | Indicators | Concern |
|:---|:---|:---|
| NullClaw | 4 PRs, onboarding fixes | Adoption inflection management |
| TinyClaw | 2 PRs, UI polish only | Differentiation sustainability |
| ZeptoClaw | 1 issue, no PRs | Contribution pipeline health |
| EasyClaw | 2 closed issues, zero activity | Project vitality |

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Implication |
|:---|:---|:---|
| **Context window pressure → compression innovation** | [#1493-1495](NanoClaw), [#2482](CoPaw), [#2521](CoPaw) | Native context management becoming core competency; external compression services emerging |
| **MCP as interoperability standard** | Per-session controls (LobsterAI #1070), timeout issues (CoPaw #2591), tool discovery (Moltis #313) | Tool ecosystem fragmentation resolving toward protocol; implement MCP server compatibility |
| **Local-first deployment hedge** | Ollama native providers (NanoBot #2617, PicoClaw #2193), private network demands (IronClaw #1754) | Cloud provider fragility driving edge investment; expect local model management complexity |
| **Multi-agent coordination complexity** | Sub-agent isolation bugs (CoPaw #2569, #2459), workspace inheritance (OpenClaw #29367) | Single-agent architectures hitting limits; distributed state management becoming critical |
| **Enterprise channel reliability as gate** | Feishu/WeChat/DingTalk issues across 5+ projects | B2B adoption blocked by messaging platform fragility; dedicated channel engineering required |
| **Security as first-class concern** | 6 CVE-class issues in LobsterAI, git hook hardening (Moltis, NanoClaw), vault architecture (Moltis) | Agent capabilities outpacing security models; expect compliance requirements to tighten |
| **Visual/embedded agent management** | TinyClaw 3D office, ReactFlow trees | Non-technical user expansion requires UX innovation beyond CLI/chat |

---

**Strategic Recommendation**: Developers choosing a foundation should weigh **OpenClaw** for maximum ecosystem compatibility at complexity cost, **CoPaw** for professional developer experience with v1.0 stability, **Moltis** for security/operational rigor, and **NanoBot** for lightweight iteration. The field is consolidating around MCP, async execution, and memory architecture as the next battlegrounds for differentiation.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-31

## 1. Today's Overview

NanoBot shows **high community activity** with 48 PRs and 19 issues updated in the last 24 hours, indicating a rapidly evolving codebase with active contributor engagement. The project is in a **feature expansion phase** with major work on memory systems, channel integrations (Discord, Telegram, WeChat), and LLM provider diversity. No new releases were cut today, suggesting maintainers are accumulating changes for a larger release. The issue-to-PR ratio (~1:2.5) is healthy, showing good conversion of problems into code solutions. However, **stability concerns are emerging** with multiple critical bug reports around memory leaks, session history unbounded growth, and provider-specific API breakages.

---

## 2. Releases

**No new releases** (v0.1.4.post6 remains latest).

---

## 3. Project Progress

### Merged/Closed PRs Today (14 total, selected highlights)

| PR | Description | Significance |
|:---|:---|:---|
| [#2654](https://github.com/HKUDS/nanobot/pull/2654) | Fix: Strip non-standard message keys for ZhipuAI compatibility | **Critical provider fix** — resolves error 1214 blocking GLM model users |
| [#2615](https://github.com/HKUDS/nanobot/pull/2615) | Add CompositeHook for composable lifecycle hooks | **Architecture improvement** — unblocks extensibility requested in [#2603](https://github.com/HKUDS/nanobot/issues/2603) |
| [#1362](https://github.com/HKUDS/nanobot/pull/1362) | OpenAI-compatible API with session isolation | **Major integration enabler** — allows WeChat bots and other adapters |
| [#1150](https://github.com/HKUDS/nanobot/pull/1150) | File upload support for Discord channel | Feature parity improvement |
| [#3](https://github.com/HKUDS/nanobot/pull/3) | Zhipu API support with glm-4.7-flash default | Provider diversity expansion |
| [#2268](https://github.com/HKUDS/nanobot/pull/2268) | ConversationCallback for LLM tracing | Observability infrastructure |

**Key advancement**: The CompositeHook merge unblocks a long-standing extensibility problem, while the ZhipuAI fix restores functionality for Chinese users.

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Comments | 👍 | Analysis |
|:---|:---:|:---:|:---|
| [#235](https://github.com/HKUDS/nanobot/issues/235) | 10 | 8 | **"No response" bug with DeepSeek/Telegram** — chronic reliability issue affecting production users; suggests race condition or silent failure in message pipeline |
| [#2570](https://github.com/HKUDS/nanobot/issues/2570) | 6 | 0 | Ollama local config 404 errors — documentation/config gap for self-hosted models |
| [#2102](https://github.com/HKUDS/nanobot/issues/2102) | 6 | 0 | Multi-tenant data isolation (Chinese) — enterprise readiness demand |

### Most Significant Open PRs

| PR | Focus | Strategic Value |
|:---|:---|:---|
| [#2636](https://github.com/HKUDS/nanobot/pull/2636) | Graphiti temporal knowledge graph backend | **Next-gen memory architecture** — could obsolete flat-file MEMORY.md |
| [#2655](https://github.com/HKUDS/nanobot/pull/2655) | Discord.py 2.x overhaul with slash commands | Modernizes largest community channel |
| [#2617](https://github.com/HKUDS/nanobot/pull/2617) | Native Ollama provider | Reduces friction for local/edge deployment |
| [#2653](https://github.com/HKUDS/nanobot/pull/2653) | Python SDK facade with session isolation | **Transforms architecture** — library-first usage pattern |

**Underlying needs**: Users want (1) reliable local/self-hosted operation, (2) enterprise multi-tenancy, (3) modern chat platform integrations, and (4) programmable SDK access beyond CLI/gateway.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#2638](https://github.com/HKUDS/nanobot/issues/2638) | Session history unbounded growth → agent unresponsiveness | No fix PR |
| 🔴 **Critical** | [#2635](https://github.com/HKUDS/nanobot/issues/2635) | Memory leak: Task callback logic error (lambda closure bug) | Closed as identified; fix needed |
| 🟡 **High** | [#2639](https://github.com/HKUDS/nanobot/issues/2639) | OpenRouter API key regression in v0.1.4.post6 | No fix PR |
| 🟡 **High** | [#2613](https://github.com/HKUDS/nanobot/issues/2613) | Agent stops mid-command with NoneType error | No fix PR |
| 🟡 **High** | [#2642](https://github.com/HKUDS/nanobot/issues/2642) | Gemini channel 400 errors in Feishu | No fix PR |
| 🟡 **High** | [#2630](https://github.com/HKUDS/nanobot/issues/2630) | Lemonade/model_not_found breaking chat | No fix PR |
| 🟢 **Medium** | [#2651](https://github.com/HKUDS/nanobot/issues/2651) | MCP SSE missing Accept header | No fix PR |
| 🟢 **Medium** | [#87](https://github.com/HKUDS/nanobot/issues/87) | Docker build hangs on Windows (npm) | No fix PR |

**Stability assessment**: Two critical resource exhaustion bugs (memory leak, unbounded history) threaten long-running deployments. Multiple provider-specific regressions suggest insufficient integration testing across the growing provider matrix.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| Disable Heartbeat toggle | [#2647](https://github.com/HKUDS/nanobot/issues/2647) | **High** | Simple config addition; cost-saving demand |
| Skip heartbeat when no active tasks | [#2406](https://github.com/HKUDS/nanobot/issues/2406) | **High** | Token efficiency; PR-ready logic |
| Official subagent configuration docs | [#2599](https://github.com/HKUDS/nanobot/issues/2599) | **Medium** | Documentation gap blocking adoption |
| Matrix E2EE emoji verification | [#2641](https://github.com/HKUDS/nanobot/issues/2641) | **Medium** | Security completeness; tracked post-#2596 |
| Telegram forum topic threads | [#2628](https://github.com/HKUDS/nanobot/pull/2628) | **High** | PR exists; community channel improvement |
| Two-stage memory with Dream consolidation | [#2649](https://github.com/HKUDS/nanobot/pull/2649) | **Medium** | Competes with #2636 Graphiti approach |

**Prediction**: v0.1.5 will likely include heartbeat controls, Telegram forum support, and one memory system overhaul (either #2636 or #2649).

---

## 7. User Feedback Summary

### Pain Points
- **Silent failures**: "I've completed processing but have no response to give" ([#235](https://github.com/HKUDS/nanobot/issues/235)) — debugging opacity
- **Resource exhaustion**: Memory leaks and unbounded history crash long-running instances
- **Configuration complexity**: Subagent setup, Ollama local deployment poorly documented
- **Provider fragility**: Frequent breakages across OpenRouter, Gemini, ZhipuAI integrations

### Use Cases
- **Self-hosted/local-first**: Strong demand for Ollama, edge deployment on Raspberry Pi
- **Enterprise/team**: Multi-tenant isolation, Feishu/Lark workplace integration
- **Automation-heavy**: Cron-driven workflows, SDK programmatic access (not chat-interactive)

### Satisfaction Signals
- Active PR contribution rate suggests engaged developer community
- Rich ecosystem: 4+ channel integrations in active development simultaneously

### Dissatisfaction Signals
- Chronic issue #235 unresolved since February
- Breaking changes in patch releases (OpenRouter regression in post6)

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---:|:---|:---|
| [#235](https://github.com/HKUDS/nanobot/issues/235) — "No response" bug | ~7 weeks | **High** | Core maintainer investigation; reproduction case |
| [#87](https://github.com/HKUDS/nanobot/issues/87) — Docker Windows hang | ~8 weeks | Medium | Windows CI/testing infrastructure |
| [#1627](https://github.com/HKUDS/nanobot/pull/1627) — Decouple history from memory consolidation | ~3 weeks | Medium | Review for truncation safety |
| [#2368](https://github.com/HKUDS/nanobot/pull/2368) — Configured subagents | ~9 days | **High** | Maintainer decision on #2368 vs #2599 approach |
| [#2394](https://github.com/HKUDS/nanobot/pull/2394) — Coalesce consecutive messages | ~8 days | Medium | Architectural review (competes with #2380) |

**Critical gap**: No maintainer response on the #235 silent failure pattern, which affects the most-upvoted production issue. The subagent configuration space has **three competing approaches** (#2368, #2599, #2653 SDK) needing consolidation.

---

*Digest generated from 48 PRs and 19 issues updated 2026-03-30*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-03-31

## 1. Today's Overview

PicoClaw shows **high development velocity** with 81 PRs and 28 issues updated in the last 24 hours, indicating an active pre-release stabilization period for v0.2.4. The project is addressing critical stability issues (high CPU usage, container signal handling) while expanding channel integrations (Telegram, Chatmail/Delta Chat) and provider support (LM Studio, SiliconFlow). Self-update infrastructure landed with PR #2201, closing a long-standing gap. However, **configuration persistence bugs in Telegram and Discord channels** suggest UI/backend sync issues needing attention before stable release.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.4-nightly.20260330.93f4c4a8](https://github.com/sipeed/picoclaw/compare/v0.2.4...main) | Nightly | Automated build; **use with caution**. Precedes anticipated v0.2.4 stable. |

**Breaking Changes Watch**: None explicitly flagged, but PR #2201 (self-updater) introduces new update mechanism that may change deployment workflows.

---

## 3. Project Progress

### Merged/Closed PRs (45 total, key highlights)

| PR | Title | Impact |
|----|-------|--------|
| [#2044](https://github.com/sipeed/picoclaw/pull/2044) | Fix high CPU usage when idle | **Critical stability fix** — resolves 10% idle CPU regression in v0.2.4 (root cause: missing `go` keyword + tight loop) |
| [#1826](https://github.com/sipeed/picoclaw/pull/1826) | Container SIGINT/SIGTERM handling | Docker/podman reliability — fixes containers staying alive after app exit |
| [#1849](https://github.com/sipeed/picoclaw/pull/1849) | GitHub Copilot session creation fix | Provider compatibility |
| [#2088](https://github.com/sipeed/picoclaw/pull/2088) | Security audit for open-by-default bots | **Security hardening** — warns users when `allow_from` is empty |

### Advanced Features (Open PRs)
- **Self-updater** ([#2201](https://github.com/sipeed/picoclaw/pull/2201)): Nightly-default, GitHub API-based with robust extraction
- **LLM rate limiting** ([#2198](https://github.com/sipeed/picoclaw/pull/2198)): Token-bucket per-model RPM limiting to prevent 429 errors
- **Chatmail/Delta Chat channel** ([#2167](https://github.com/sipeed/picoclaw/pull/2167)): Email-based messaging integration

---

## 4. Community Hot Topics

### Most Active by Engagement

| Issue/PR | Comments | Core Need |
|----------|----------|-----------|
| [#618](https://github.com/sipeed/picoclaw/issues/618) Self-upgrade support | 6 comments, 2 👍 | **Operational maturity** — users need seamless updates across package managers (deb, winget, opkg) |
| [#2072](https://github.com/sipeed/picoclaw/issues/2072) Discord token save error | 4 comments | **Configuration reliability** — web UI form validation failing despite apparent data entry |
| [#2030](https://github.com/sipeed/picoclaw/issues/2030) Feishu file download paths | 4 comments | **Enterprise usability** — human-readable file organization vs. hash-based storage |
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) OpenAI Responses API migration | 3 comments | **Future-proofing** — aligning with OpenAI's recommended API evolution |

**Underlying Pattern**: Users are scaling from personal to production deployments, demanding operational features (updates, observability, rate limiting) and enterprise integrations.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **High** | [#2001](https://github.com/sipeed/picoclaw/issues/2001) Idle CPU 10% usage | **CLOSED** | [#2044](https://github.com/sipeed/picoclaw/pull/2044) merged |
| 🔴 **High** | [#2195](https://github.com/sipeed/picoclaw/issues/2195) Telegram token doesn't save | **OPEN** | None — blocks Windows 11 users |
| 🟡 **Medium** | [#2072](https://github.com/sipeed/picoclaw/issues/2072) Discord "field required" error | **CLOSED** | Fix deployed |
| 🟡 **Medium** | [#2191](https://github.com/sipeed/picoclaw/issues/2191) Anthropic `SystemParts` ignored, breaks caching | **OPEN** | None — affects cost optimization |
| 🟡 **Medium** | [#2172](https://github.com/sipeed/picoclaw/issues/2172) `/v1/models` polled every second | **OPEN** | None — unnecessary API load |
| 🟢 **Low** | [#2197](https://github.com/sipeed/picoclaw/issues/2197) Telegram can't read old messages | **OPEN** | [#2199](https://github.com/sipeed/picoclaw/pull/2199), [#2200](https://github.com/sipeed/picoclaw/pull/2200) proposed |

**Regression Risk**: Configuration save failures (#2195, similar to #2072) suggest a systemic web UI/backend sync issue in v0.2.4.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in v0.2.4+ | Rationale |
|---------|----------|----------------------|-----------|
| **Self-updater** | [#618](https://github.com/sipeed/picoclaw/issues/618), [#2201](https://github.com/sipeed/picoclaw/pull/2201) | ✅ **High** | PR ready, closes operational gap |
| **LLM rate limiting** | [#2194](https://github.com/sipeed/picoclaw/issues/2194), [#2198](https://github.com/sipeed/picoclaw/pull/2198) | ✅ **High** | PR ready, production scaling need |
| **LangSmith observability** | [#2173](https://github.com/sipeed/picoclaw/issues/2173) | 🟡 Medium | Debugging pain point, but new dependency |
| **Streaming web chat** | [#1950](https://github.com/sipeed/picoclaw/issues/1950) | 🟡 Medium | Marked roadmap-aligned, low priority |
| **SiliconFlow provider** | [#2045](https://github.com/sipeed/picoclaw/issues/2045) | 🟡 Medium | Chinese market, simple prefix addition |
| **Login page** | [#2179](https://github.com/sipeed/picoclaw/issues/2179) | 🔴 **Blocking** | Commit 6ea364e added auth without UI — **usability regression** |
| **LM Studio local provider** | [#2193](https://github.com/sipeed/picoclaw/pull/2193) | ✅ **High** | PR ready, local AI trend |

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Configuration fragility** | [#2195](https://github.com/sipeed/picoclaw/issues/2195), [#2072](https://github.com/sipeed/picoclaw/issues/2072), [#1491](https://github.com/sipeed/picoclaw/issues/1491) | High — blocks onboarding |
| **Documentation gaps** | [#1830](https://github.com/sipeed/picoclaw/issues/1830), [#1868](https://github.com/sipeed/picoclaw/issues/1868) | Medium — i18n and cron docs missing |
| **Multi-bot Telegram conflicts** | [#1589](https://github.com/sipeed/picoclaw/issues/1589) | Niche — power user scenario |
| **Embedded/RV support** | [#2181](https://github.com/sipeed/picoclaw/issues/2181) | Community ask for Lichee RV |

### Positive Signals
- Active skill marketplace usage (despite [#2135](https://github.com/sipeed/picoclaw/issues/2135) 429 errors)
- Strong channel diversity demand (Feishu, DingTalk, Telegram, Discord, now Chatmail)

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#93](https://github.com/sipeed/picoclaw/issues/93) Gateway ignores config.json with systemd | 45 days | **Deployment blocker** | Clarify working directory/docs |
| [#1791](https://github.com/sipeed/picoclaw/issues/1791) runit service error | 11 days | Niche init system | Repro steps needed |
| [#1883](https://github.com/sipeed/picoclaw/issues/1883) Provider/protocol field ambiguity | 9 days | **Architectural debt** | Design decision on breaking change |
| [#1895](https://github.com/sipeed/picoclaw/issues/1895) Channel not working (Feishu/DingTalk) | 9 days | Integration reliability | Logs analysis, possible dupe of config issues |

**Maintainer Attention**: [#2179](https://github.com/sipeed/picoclaw/issues/2179) (login page) is a **regression from commit 6ea364e** that breaks existing workflows — recommend fast-track or revert.

---

*Digest generated from 28 issues, 81 PRs, and 1 nightly release on 2026-03-31.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-31

---

## 1. Today's Overview

NanoClaw shows **elevated community activity** with 50 PR updates and 18 issue updates in the last 24 hours, though no new releases were cut. The project is experiencing **intensive skill development** from the community (Home Assistant, Tailscale, Unraid integrations) alongside **critical stability work** on session management and container orchestration. A notable pattern emerges: users are actively deploying NanoClaw in production multi-tenant environments, surfacing security hardening and operational reliability as top priorities. The maintainer response rate appears healthy with 14 PRs merged/closed today, though 36 open PRs suggest a growing review backlog.

---

## 2. Releases

**None** — No new releases published today.

---

## 3. Project Progress

### Merged/Closed PRs Today (14 total)

| PR | Description | Significance |
|:---|:---|:---|
| [#169](https://github.com/qwibitai/nanoclaw/pull/169) | Integrate ha-mcp for Home Assistant control (97+ tools) | **Major feature**: IoT/ home automation expansion |
| [#1271](https://github.com/qwibitai/nanoclaw/pull/1271) | Block git hook bypass via PreToolUse hook | **Security hardening** — closes attack vector |
| [#1546](https://github.com/qwibitai/nanoclaw/pull/1546) | Auto-recover from stale Claude Code sessions | **Reliability fix** — ends infinite retry loops |
| [#1552](https://github.com/qwibitai/nanoclaw/pull/1552) | Fix npm audit vulnerabilities (2 moderate, 2 high) | **Security maintenance** |
| [#1556](https://github.com/qwibitai/nanoclaw/pull/1556) | Documentation improvements | Community onboarding |
| [#1544](https://github.com/qwibitai/nanoclaw/pull/1544) | Emoji status tracker with non-main group support | Messaging UX enhancement |
| [#1555](https://github.com/qwibitai/nanoclaw/pull/1555) | "Idea Maze" Reddit pipeline with Tavily enrichment | Research/market intelligence skill |
| [#1551](https://github.com/qwibitai/nanoclaw/pull/1551) | Development branch work | Infrastructure |

**Key Advances**: Session reliability improved via [#1546](https://github.com/qwibitai/nanoclaw/pull/1546) directly addressing [#1531](https://github.com/qwibitai/nanoclaw/issues/1531); security posture strengthened through git hook enforcement and npm audit fixes; IoT ecosystem integration expanded significantly with Home Assistant MCP.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Issue/PR | Comments/Reactions | Analysis |
|:---|:---|:---|
| [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) — Invalid SSL cert on nanoclaw.dev | 5 comments | **Infrastructure credibility issue** — blocks new user onboarding to documentation site |
| [#1492](https://github.com/qwibitai/nanoclaw/issues/1492) — AWS Bedrock auth backend | 2 comments, 👍×3 | **Enterprise adoption blocker** — large orgs need AWS-native Claude access without API key migration |
| [#1554](https://github.com/qwibitai/nanoclaw/issues/1554) — Unbounded log growth (600MB+) | 👍×3 | **Production operations pain** — no log rotation threatens disk space on long-running instances |

### Research Proposals Cluster (3 related issues)

| Issue | Focus | Signal |
|:---|:---|:---|
| [#1493](https://github.com/qwibitai/nanoclaw/issues/1493) | Headroom: API-level context compression | Token cost optimization for long conversations |
| [#1494](https://github.com/qwibitai/nanoclaw/issues/1494) | RTK: CLI output compression | 60-90% compression of tool call outputs |
| [#1495](https://github.com/qwibitai/nanoclaw/issues/1495) | MemStack: Persistent agent memory | Cross-session context and semantic search |

**Underlying Need**: The community is aggressively pursuing **context window efficiency** and **persistent memory** — clear signals that agents are hitting Claude's context limits in real workloads, and that session isolation (a core NanoClaw security feature) is becoming a productivity friction point.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#1487](https://github.com/qwibitai/nanoclaw/issues/1487) — Container self-termination loop | Open | **None** — regression, previously worked |
| 🔴 **Critical** | [#1454](https://github.com/qwibitai/nanoclaw/issues/1454) — Sidecar exits when env vars unset | Open | **None** — architectural race condition |
| 🟡 **High** | [#1531](https://github.com/qwibitai/nanoclaw/issues/1531) — Infinite retry on failed containers | **Closed** | ✅ [#1546](https://github.com/qwibitai/nanoclaw/pull/1546) merged |
| 🟡 **High** | [#1554](https://github.com/qwibitai/nanoclaw/issues/1554) — Unbounded log growth | Open | **None** |
| 🟡 **High** | [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) — SSL cert invalid | Open | **None** — infrastructure |
| 🟢 **Medium** | [#1482](https://github.com/qwibitai/nanoclaw/issues/1482) — Idle state detection race condition | Open | **None** |
| 🟢 **Medium** | [#1522](https://github.com/qwibitai/nanoclaw/issues/1522) — WhatsApp media inaccessible | Open | **None** |

**Stability Assessment**: Two critical container orchestration bugs remain unaddressed. The [#1487](https://github.com/qwibitai/nanoclaw/issues/1487) regression is particularly concerning as it breaks Docker-in-Docker deployments that previously functioned. The sidecar shutdown bug [#1454](https://github.com/qwibitai/nanoclaw/issues/1454) indicates fragile async task management.

---

## 6. Feature Requests & Roadmap Signals

### Likely Near-Term (High Demand + Clear Path)

| Feature | Issue | Confidence |
|:---|:---|:---|
| AWS Bedrock authentication | [#1492](https://github.com/qwibitai/nanoclaw/issues/1492) | **High** — enterprise blocker, SDK already supports |
| Log rotation / size limits | [#1554](https://github.com/qwibitai/nanoclaw/issues/1554) | **High** — trivial fix, production-critical |
| Web dashboard (read-only) | [#1514](https://github.com/qwibitai/nanoclaw/pull/1514) | **Medium-High** — PR exists, needs review |
| Conversational approval flows | [#1537](https://github.com/qwibitai/nanoclaw/issues/1537) | **Medium** — security gap for remote agents |

### Research/Experimental (May Influence Architecture)

| Feature | Issue | Notes |
|:---|:---|:---|
| Graphiti knowledge graph memory | [#1458](https://github.com/qwibitai/nanoclaw/issues/1458) | Replaces file-based memory; addresses token cost linear growth |
| Context compression proxies | [#1493](https://github.com/qwibitai/nanoclaw/issues/1493), [#1494](https://github.com/qwibitai/nanoclaw/issues/1494) | External tooling approach vs. native implementation |
| Credential proxy for OAuth | [#1500](https://github.com/qwibitai/nanoclaw/issues/1500) | Security hardening for prompt injection resistance |

### Infrastructure Modernization

| Feature | Issue | Blocker |
|:---|:---|:---|
| Full containerization of NanoClaw itself | [#1485](https://github.com/qwibitai/nanoclaw/issues/1485) | Current install scripts run on host; supply chain risk |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Operational fragility** | [#1487](https://github.com/qwibitai/nanoclaw/issues/1487), [#1454](https://github.com/qwibitai/nanoclaw/issues/1454), [#1531](https://github.com/qwibitai/nanoclaw/issues/1531) | 🔴 High — container lifecycle management unreliable |
| **Security/tenant isolation** | [#1490](https://github.com/qwibitai/nanoclaw/issues/1490), [#1500](https://github.com/qwibitai/nanoclaw/issues/1500) | 🟡 Medium-High — multi-group deployments need hardening |
| **Context/token efficiency** | [#1493](https://github.com/qwibitai/nanoclaw/issues/1493)-[#1495](https://github.com/qwibitai/nanoclaw/issues/1495), [#1458](https://github.com/qwibitai/nanoclaw/issues/1458) | 🟡 Medium — cost and capability limits |
| **Documentation/SSL** | [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) | 🟢 Medium — first impression damage |

### Use Cases Emerging

- **Smart home orchestration**: Home Assistant integration (#169) signals consumer IoT use case
- **Multi-tenant SaaS**: [#1490](https://github.com/qwibitai/nanoclaw/issues/1490) describes strict isolation requirements across groups
- **Async research workflows**: "Idea Maze" skill (#1555) and Tavily integration show knowledge work automation
- **Messaging-first agents**: WhatsApp (#1522), Telegram (#1537) driving need for non-interactive approval flows

### Satisfaction Indicators

- Strong community skill contribution (Unraid, Instacart, changedetection.io, Tailscale)
- Active security research and proposals
- Frustration with container stability regressions and host-level installation risks

---

## 8. Backlog Watch

### Long-Stalled Important Items

| Item | Age | Blocker | Risk |
|:---|:---|:---|:---|
| [#700](https://github.com/qwibitai/nanoclaw/pull/700) — Rotate oversized JSONL sessions | 27 days | **Blocked** — architectural review needed | Container timeouts in production |
| [#1090](https://github.com/qwibitai/nanoclaw/pull/1090) — Fix EROFS crash on .claude.json | 16 days | **Needs Review** | Silent agent startup failures |
| [#1188](https://github.com/qwibitai/nanoclaw/pull/1188) — UnraidClaw MCP | 14 days | Open | NAS/home server market expansion |
| [#1260](https://github.com/qwibitai/nanoclaw/pull/1260) — Tailscale API integration | 12 days | Open | Zero-trust networking for agents |
| [#1290](https://github.com/qwibitai/nanoclaw/pull/1290) — Pre-flight credential validation | 11 days | Open | Poor first-run experience |

### Maintainer Attention Needed

1. **Infrastructure**: [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) SSL cert — immediate credibility impact
2. **Stability**: [#1487](https://github.com/qwibitai/nanoclaw/issues/1487) container crash regression — bisect and identify breaking change
3. **Architecture**: [#700](https://github.com/qwibitai/nanoclaw/pull/700) session rotation — unblock or provide alternative design

---

*Digest generated from GitHub activity 2026-03-30 to 2026-03-31. Data source: qwibitai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-03-31

## 1. Today's Overview

NullClaw shows **moderate community activity** with 4 PRs and 1 issue updated in the last 24 hours. The project is actively addressing Docker onboarding friction—a critical first-user experience issue—with both a bug report and multiple fix attempts in flight. No new releases were cut, suggesting maintainers are accumulating fixes before tagging. The presence of bilingual documentation PRs (EN/ZH) indicates growing international adoption. Overall health appears stable with responsive issue-to-PR turnaround (same-day fix proposed for reported bug).

---

## 2. Releases

**No new releases** as of 2026-03-31.

---

## 3. Project Progress

### Merged/Closed Today

| PR | Description | Impact |
|:---|:---|:---|
| [#748](https://github.com/nullclaw/nullclaw/pull/748) | docs: Docker onboarding troubleshooting for AccessDenied error | **Superseded** — closed in favor of #749's root-cause fix; provided temporary documentation workaround |

### Active Development (Open PRs)

| PR | Description | Status |
|:---|:---|:---|
| [#749](https://github.com/nullclaw/nullclaw/pull/749) | **fix(onboard): keep Docker Compose onboarding on volume-backed defaults** | Ready for review — addresses root cause of #747 |
| [#750](https://github.com/nullclaw/nullclaw/pull/750) | docs: beginner's guide for non-technical users (EN \| ZH) | Awaiting review — accessibility expansion |
| [#745](https://github.com/nullclaw/nullclaw/pull/745) | refactor(tools): share file and web search helpers | Awaiting review — code quality/DRY improvement |

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#747](https://github.com/nullclaw/nullclaw/issues/747) — Docker compose onboarding failure | 1 issue, 3 related PRs (#748, #749) | **Critical path friction**: Fresh users hitting `AccessDenied`/`workspace` path errors during first Docker run. Indicates onboarding is brittle when `NULLCLAW_HOME`/`NULLCLAW_WORKSPACE` env vars aren't pre-configured. |
| [#750](https://github.com/nullclaw/nullclaw/pull/750) — Bilingual beginner guides | Fresh PR, no comments yet | **Accessibility gap**: Recognition that current docs assume technical proficiency; preemptive move to lower barrier to entry for non-developers |

**Underlying need**: The project is at an **adoption inflection point** — moving from early technical adopters to broader users who need "it just works" onboarding and plain-language documentation.

---

## 5. Bugs & Stability

| Severity | Issue | Fix Status | Details |
|:---|:---|:---|:---|
| 🔴 **High** | [#747](https://github.com/nullclaw/nullclaw/issues/747) — Docker Compose onboarding fails with path/volume errors | **Fix PR open**: [#749](https://github.com/nullclaw/nullclaw/pull/749) | Fresh Docker onboarding drifts to `HOME/.nullclaw/workspace` when config missing, causing permission/volume mount failures. Regression test included in fix. |
| 🟡 **Medium** | AccessDenied errors during onboarding | **Mitigated**: Workaround documented in #748 (closed), root fix in #749 | Docker volume permission issues on step 8 of onboarding flow |

**Stability assessment**: One active regression affecting new user acquisition. Fix is technically sound (respects env vars, adds test coverage). Recommend expedited review of #749.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Release |
|:---|:---|:---|
| **Improved onboarding robustness** | #747, #749 | **High** — critical bug fix |
| **Internationalization (i18n) infrastructure** | #750 (bilingual docs) | **Medium** — may expand to CLI/UI strings if docs prove valuable |
| **Tool refactoring / DRY improvements** | #745 | **Medium** — maintenance win, reduces bug surface |
| **Non-technical user support** | #750 | **Medium-High** — strategic growth vector |

**Prediction**: Next release (likely 0.x or 1.x patch) will prioritize onboarding stability (#749) and may bundle documentation improvements (#750). Tool refactoring (#745) could merge if review bandwidth allows.

---

## 7. User Feedback Summary

### Pain Points
| Source | Issue | User Impact |
|:---|:---|:---|
| #747 | Docker onboarding "doesn't work" out-of-box | **First-run failure** — blocks evaluation entirely |
| #748 (superseded) | AccessDenied at step 8 | Permission confusion, platform-specific Docker behavior |

### Use Case Signals
- **Docker-first adoption**: Users expect `docker compose up` to work without host environment prep
- **Cross-platform needs**: Volume/permission issues suggest Windows/WSL and macOS users in mix
- **Non-technical interest**: #750 explicitly targets "users with no technical background"

### Satisfaction Indicators
- ✅ Same-day PR response to bug report (#747 → #749 in <24h)
- ⚠️ Onboarding friction suggests **retention risk** for evaluators

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| *None flagged* — all active items are same-day | — | — | — |

**Observation**: Current velocity is healthy with no stale items. Monitor #745 (refactor) and #750 (docs) for review latency; both are quality-of-life improvements that could stall if maintainers focus narrowly on #749.

---

**Digest generated**: 2026-03-31  
**Data source**: github.com/nullclaw/nullclaw

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-31

## 1. Today's Overview

IronClaw shows **high development velocity** with 50 PRs and 10 issues updated in the last 24 hours, indicating active maintenance and feature development. The project is in a **staging-heavy phase** with multiple staging-to-main promotions (#1768, #1724, #1726, #1698) and version-bump fixes, suggesting preparation for a significant release. No new releases were cut today, though PR #1745 prepares v0.24.0 with documented breaking API changes. Community engagement is moderate with 7 open issues awaiting resolution, including critical infrastructure gaps (financial execution layer, private network support) and integration problems (Feishu/Lark, Gemini function calling).

---

## 2. Releases

**No new releases today.**

PR [#1745](https://github.com/nearai/ironclaw/pull/1745) prepares **v0.24.0** with breaking changes:
- **Breaking**: Externally-constructible structs add new public fields, requiring existing struct literal construction to be updated
- Migration: Users constructing affected structs directly will need to add new fields or use builder patterns

---

## 3. Project Progress

### Merged/Closed PRs (27 total, key highlights)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#1767](https://github.com/nearai/ironclaw/pull/1767) | henrypark133 | **Fix hosted MCP OAuth refresh flow** — preserves DCR credentials, routes refresh through proxy, adds per-server locks | Critical reliability fix for MCP integrations |
| [#1766](https://github.com/nearai/ironclaw/pull/1766) | henrypark133 | Bump Discord/Slack registry versions (0.2.1→0.2.2) | CI stabilization |
| [#1765](https://github.com/nearai/ironclaw/pull/1765) | henrypark133 | Bump Feishu registry version (0.1.3→0.1.4) | CI stabilization for #1698 |
| [#1726](https://github.com/nearai/ironclaw/pull/1726) | ironclaw-ci[bot] | Staging promotion (2026-03-28 14:09 UTC) | Infrastructure |
| [#1724](https://github.com/nearai/ironclaw/pull/1724) | ironclaw-ci[bot] | Staging promotion (2026-03-28 08:09 UTC) | Infrastructure |
| [#1698](https://github.com/nearai/ironclaw/pull/1698) | ironclaw-ci[bot] | **Major staging promotion** (2026-03-27 07:25 UTC) — 15 scope areas including agent, all channels, tools, DB, LLM, sandbox, pairing | Large feature batch landing |
| [#1716](https://github.com/nearai/ironclaw/pull/1716) | henrypark133 | Track routine verification state across updates | Reliability improvement for autonomous operations |

**Features Advanced:**
- **Async transaction approval** via WalletConnect ([#1759](https://github.com/nearai/ironclaw/pull/1759), open)
- **Tool discovery summaries** for time, HTTP, message, create_job tools ([#1758](https://github.com/nearai/ironclaw/pull/1758), open)
- **Aliyun Coding Plan support** with dedicated provider ([#1446](https://github.com/nearai/ironclaw/pull/1446), open — XL size, 10 days old)
- **Agent review for routines** — inject routine results into agentic loop ([#1738](https://github.com/nearai/ironclaw/pull/1738), open)

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Activity | Analysis |
|:---|:---|:---|
| [#1673](https://github.com/nearai/ironclaw/issues/1673) **Feishu/Lark Channel Stuck in "Awaiting Pairing"** | 2 comments, 👍2 | **Enterprise integration blocker** — Feishu (China's Slack equivalent) pairing flow broken, no pairing code prompt. High priority for APAC users. |
| [#1510](https://github.com/nearai/ironclaw/issues/1510) **Gemini function call missing thought_signature** | 2 comments | **Google AI integration regression** — gemini-3.1-flash-lite-preview fails on tool use with 400 Bad Request. Blocking Gemini users. |
| [#1750](https://github.com/nearai/ironclaw/issues/1750) **HTTP interceptor injection for benchmarks** | 1 comment, **closed today** | Workplace simulation benchmark infrastructure — completed. |

### Underlying Needs
- **Enterprise messaging reliability**: Feishu/Slack/Discord channel stability is critical for B2B adoption
- **Multi-provider LLM resilience**: Gemini, Ollama local models both showing integration friction
- **Financial/DeFi readiness**: Secure execution layer request (#1712) signals user demand for production crypto operations

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|:---|:---|:---|:---|
| **High** | [#1510](https://github.com/nearai/ironclaw/issues/1510) Gemini function call fails with missing `thought_signature` | Open | ❌ No |
| **High** | [#1673](https://github.com/nearai/ironclaw/issues/1673) Feishu/Lark pairing broken | Open | Partial — [#1765](https://github.com/nearai/ironclaw/pull/1765) bumped registry version, may relate |
| **Medium** | [#1672](https://github.com/nearai/ironclaw/issues/1672) Ollama + qwen3.5:9b local HttpError | Open | ❌ No |
| **Medium** | [#1754](https://github.com/nearai/ironclaw/issues/1754) Cannot use private network models (HTTP blocked) | Open | ❌ No — **architectural limitation** |
| **Low** (fixed) | [#1404](https://github.com/nearai/ironclaw/issues/1404) Slack thread replies ignored without @mention | **Closed** | ✅ Fixed |
| **Low** (fixed) | [#1500](https://github.com/nearai/ironclaw/issues/1500) Google auth fails on second tool | **Closed** | ✅ Fixed |

**Regressions**: None reported today. Staging promotions appear stable.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in v0.25+ | Rationale |
|:---|:---|:---|:---|
| **Secure financial execution layer** | [#1712](https://github.com/nearai/ironclaw/issues/1712) | **High** | Core team authored, "risk: high" label, NEAR intents extension already in PR #1622 |
| **Skill-repair learning loop (v2)** | [#1760](https://github.com/nearai/ironclaw/issues/1760) | **High** | Follow-up to merged PR #1557, core team priority |
| **Email/password signup** | [#1494](https://github.com/nearai/ironclaw/issues/1494) | Medium | Auth diversification request, no comments yet |
| **Private network/HTTP model support** | [#1754](https://github.com/nearai/ironclaw/issues/1754) | Medium | Enterprise/self-hosted demand, security policy conflict |
| **Aliyun Coding Plan support** | [#1446](https://github.com/nearai/ironclaw/pull/1446) | **High** | XL PR open 10 days, new contributor, China cloud expansion |

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Context | Sentiment |
|:---|:---|:---|
| [#1754](https://github.com/nearai/ironclaw/issues/1754) Private network blocked | Self-hosted model users, enterprise air-gapped environments | Frustrated — "HTTP is only allowed for localhost" is hardcoded restriction |
| [#1672](https://github.com/nearai/ironclaw/issues/1672) Ollama local failing | Windows users, local AI adopters | Blocked — retry loop fails silently |
| [#1673](https://github.com/nearai/ironclaw/issues/1673) Feishu pairing | China-based teams, enterprise Slack alternative | Stuck — no workaround documented |

### Positive Signals
- **Tool discovery improvements** ([#1758](https://github.com/nearai/ironclaw/pull/1758)) address LLM "guess and retry" frustration
- **Routine verification tracking** ([#1716](https://github.com/nearai/ironclaw/pull/1716)) improves autonomous reliability
- **MCP OAuth refresh fix** ([#1767](https://github.com/nearai/ironclaw/pull/1767)) resolves hosted integration pain

### Use Case Emergence
- **Workplace simulation benchmark** (#1750) indicates IronClaw positioning for executive/enterprise automation
- **WalletConnect async approval** (#1759) signals DeFi/power user segment growth

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1446](https://github.com/nearai/ironclaw/pull/1446) Aliyun Coding Plan | 11 days | **Merge conflict risk** — XL scope, 15 areas touched | Maintainer review for China market readiness |
| [#1050](https://github.com/nearai/ironclaw/pull/1050) CLI gateway lifecycle | 19 days | Feature drift | Gateway management is infrastructure-critical |
| [#1125](https://github.com/nearai/ironclaw/pull/1125) Builder approval context | 18 days | Security — bypassed approvals in autonomous mode | Security review, blocks safe builder use |
| [#1598](https://github.com/nearai/ironclaw/pull/1598) Telegram bot token blocking | 8 days | Security — secrets in chat | Near completion, needs final review |
| [#1599](https://github.com/nearai/ironclaw/pull/1599) Surface extension state to LLM | 8 days | UX — agent asks to reconnect existing extensions | Improves multi-turn reliability |

**Stale Issues Needing Triage:**
- [#1494](https://github.com/nearai/ironclaw/issues/1494) Email/password signup — 11 days, no maintainer response
- [#1712](https://github.com/nearai/ironclaw/issues/1712) Financial execution layer — high-priority design, needs RFC process

---

*Digest generated from IronClaw GitHub activity 2026-03-30 to 2026-03-31. Project health: **Active development, staging-heavy pre-release phase, enterprise integration gaps emerging as adoption blocker.***

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-31

## 1. Today's Overview

LobsterAI shows **exceptionally high development velocity** with 50 PRs and 26 issues updated in the last 24 hours, indicating an active sprint cycle. The project released **v2026.3.30** with scheduled task enhancements and model provider fixes. However, **code quality and stability concerns are emerging**: multiple critical security vulnerabilities (SSRF, arbitrary file read, protocol injection) were disclosed by community auditor @MaoQianTu, alongside race conditions and data integrity defects in core storage layers. The maintainer team is actively merging features but faces mounting technical debt from rapid iteration. Community engagement is strong with detailed bug reports, though several infrastructure issues (internal npm registry dependencies, monolithic architecture) hinder external contributions.

---

## 2. Releases

### [LobsterAI 2026.3.30](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.30) — 2026-03-30

| Change | Author | PR |
|--------|--------|-----|
| ⏰ **Scheduled tasks: hourly granularity + weekly day selection + model choice** | @nmgwddj | [#1017](https://github.com/netease-youdao/LobsterAI/pull/1017) |
| 🔄 **One-click skill update support** | @liuzhq1986 | [#1018](https://github.com/netease-youdao/LobsterAI/pull/1018) |
| 🐛 **Fixed OpenAI & Gemini provider compatibility bugs** | @fisherdaddy | — |

**Breaking Changes / Migration Notes:** None explicitly documented. The scheduled task enhancements are additive; existing cron expressions should continue functioning.

---

## 3. Project Progress

### Merged/Closed Today (9 PRs)

| PR | Description | Significance |
|----|-------------|------------|
| [#1064](https://github.com/netease-youdao/LobsterAI/pull/1064) | Release/2026.03.30 | Release branch merge |
| [#1063](https://github.com/netease-youdao/LobsterAI/pull/1063) | Lock NIM SDK to 10.9.77-alpha.4 | Dependency stability |

### Active Development (41 Open PRs — Key Highlights)

| PR | Feature Area | Status |
|----|--------------|--------|
| [#1070](https://github.com/netease-youdao/LobsterAI/pull/1070) | **Per-session MCP toggle control** | Major UX improvement — allows granular MCP server enablement per conversation |
| [#1079](https://github.com/netease-youdao/LobsterAI/pull/1079) | **"Current Process" side panel with diff view** | Enhances transparency of tool execution |
| [#1078](https://github.com/netease-youdao/LobsterAI/pull/1078) | **IM alerts for scheduled task failures** | Closes notification gap (failure → silent) |
| [#707](https://github.com/netease-youdao/LobsterAI/pull/707) | **GitHub Copilot OAuth integration** | Long-running feature (since 2026-03-23), adds major model provider |
| [#1069](https://github.com/netease-youdao/LobsterAI/pull/1069) | **Refactor: Split 2100-line CoworkSessionDetail** | Addresses maintainability crisis flagged in [#1024](https://github.com/netease-youdao/LobsterAI/issues/1024) |
| [#1065](https://github.com/netease-youdao/LobsterAI/pull/1065) | **Bind scheduled tasks to existing sessions** | Reduces session clutter |

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Comments | Topic | Underlying Need |
|-------|----------|-------|---------------|
| [#205](https://github.com/netease-youdao/LobsterAI/issues/205) | 8 | Installation failures persist | **Distribution/installer reliability** — users frustrated by unresolved setup blockers |
| [#248](https://github.com/netease-youdao/LobsterAI/issues/248) | 2 | DeepSeek/Qwen: 401 token errors despite "test success" | **Provider auth consistency** — test path ≠ runtime path creates false confidence |
| [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) | 1 | Config/workspace files reset on restart | **Configuration persistence** — aggressive template regeneration destroys user customization |

### Analysis

The top issues reveal a **trust gap**: users encounter "works in test, fails in production" scenarios (#248) and configuration loss (#1006), suggesting the need for more robust state management and clearer boundaries between system defaults and user overrides.

---

## 5. Bugs & Stability

### 🔴 Critical (Security / Data Loss / Crash)

| Issue | Severity | Description | Fix PR? |
|-------|----------|-------------|---------|
| [#1041](https://github.com/netease-youdao/LobsterAI/issues/1041) | **CRITICAL** | SSRF via `api:fetch/stream` IPC; `readFileAsDataUrl` arbitrary local file read | ❌ None |
| [#1031](https://github.com/netease-youdao/LobsterAI/issues/1031) | **CRITICAL** | `shell:openExternal` unvalidated protocol → arbitrary protocol execution | ❌ None |
| [#1071](https://github.com/netease-youdao/LobsterAI/issues/1071) / [#1072](https://github.com/netease-youdao/LobsterAI/pull/1072) | **HIGH** | SQLite CASCADE failure, non-atomic writes, init timeout permanent failure | ✅ [#1072](https://github.com/netease-youdao/LobsterAI/pull/1072) |
| [#1051](https://github.com/netease-youdao/LobsterAI/issues/1051) | **HIGH** | Race condition: `ensureGatewayClientReady` → permanent session failure | ❌ None |
| [#1048](https://github.com/netease-youdao/LobsterAI/issues/1048) | **HIGH** | Double `refreshToken` consumption → forced logout | ❌ None |

### 🟡 Medium (Functional / UX)

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#1080](https://github.com/netease-youdao/LobsterAI/issues/1080) | Qwen "no body" error (regression in recent versions) | ❌ None |
| [#1062](https://github.com/netease-youdao/LobsterAI/issues/1062) | Scheduled task time/title mismatch | ❌ None |
| [#1053](https://github.com/netease-youdao/LobsterAI/issues/1053) | Modal close button unresponsive when expanded | ❌ None |
| [#1026](https://github.com/netease-youdao/LobsterAI/issues/1026) | `v2Client` null deref on IM send during reconnect | ❌ None |

### 🟢 Low (Polish / Enhancement)

| Issue | Description |
|-------|-------------|
| [#1022](https://github.com/netease-youdao/LobsterAI/issues/1022) | Agent icon selection only accepts text, not images |
| [#1066](https://github.com/netease-youdao/LobsterAI/issues/1066) | Heartbeat dialogues not filtered from user view |

**Security Audit Note:** @MaoQianTu submitted 6 security-related issues in one day, indicating either a coordinated audit or newly discovered attack surface. The project lacks a `SECURITY.md` or vulnerability disclosure process.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Release | Rationale |
|---------|-------|---------------------------|-----------|
| **Token limit customization** (Xunfei 90K+ support) | [#1023](https://github.com/netease-youdao/LobsterAI/issues/1023) | HIGH | Already supported for some providers; config extension needed |
| **Gateway port customization** | [#1061](https://github.com/netease-youdao/LobsterAI/issues/1061) | MEDIUM | Simple config change; conflicts with OpenClaw are common |
| **Context window increase** (Qwen 200K→1M) | [#1046](https://github.com/netease-youdao/LobsterAI/issues/1046) | MEDIUM | Platform-side limit; may require negotiation or tiered offering |
| **Shortcut keyboard recorder** | [#845](https://github.com/netease-youdao/LobsterAI/pull/845) | HIGH | PR already open, polished UX improvement |
| **Per-session MCP control** | [#1070](https://github.com/netease-youdao/LobsterAI/pull/1070) | HIGH | PR open, addresses clear user pain point |
| **GitHub Copilot integration** | [#707](https://github.com/netease-youdao/LobsterAI/pull/707) | MEDIUM | 7-day-old PR, complex OAuth flow |

---

## 7. User Feedback Summary

### 😤 Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Configuration fragility** | #1006 (reset on restart), #1025/#1015 (internal npm registry blocks builds) | HIGH |
| **Provider compatibility gaps** | #248, #1080 (Qwen/DeepSeek auth & runtime errors), #1023 (token limits) | HIGH |
| **UI/UX inconsistencies** | #1022 (icon input), #1053 (modal bugs), #1062 (task time display) | MEDIUM |
| **Enterprise/auth friction** | #1016 (NetEase employee login fails), #1048 (token refresh races) | MEDIUM |

### 😊 Positive Signals

- **Scheduled tasks** receiving active enhancement (granularity, model selection, failure alerts)
- **MCP ecosystem** maturing with per-session controls and marketplace improvements
- **Skill system** now supports one-click updates

### Use Case Patterns

- **Enterprise teams**: Using LobsterAI for automated workflows (scheduled tasks + IM integration)
- **Developers**: Heavy MCP usage for tool-augmented coding; desire for GitHub Copilot integration
- **Multi-model users**: Frequently switching between Qwen, DeepSeek, OpenAI, Gemini — exposing provider abstraction leaks

---

## 8. Backlog Watch

### Issues Needing Maintainer Response (>7 days old, high impact)

| Issue | Age | Why It Matters |
|-------|-----|--------------|
| [#205](https://github.com/netease-youdao/LobsterAI/issues/205) | 28 days | Installation blocker; 8 comments; user frustration evident |
| [#353](https://github.com/netease-youdao/LobsterAI/issues/353) | 21 days | Performance comparison feedback; opportunity for benchmarking |
| [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) | 2 days | **Critical for user trust** — data loss on restart |

### PRs Stalled Without Review

| PR | Age | Blocker |
|----|-----|---------|
| [#707](https://github.com/netease-youdao/LobsterAI/pull/707) | 8 days | Complex OAuth flow; may need security review |
| [#845](https://github.com/netease-youdao/LobsterAI/pull/845) | 6 days | Ready UX improvement; low risk |

### Architectural Debt

| Issue | Concern |
|-------|---------|
| [#1024](https://github.com/netease-youdao/LobsterAI/issues/1024) | `main.ts` at ~4,600 lines; community member provided full refactor proposal |
| [#1025](https://github.com/netease-youdao/LobsterAI/issues/1025) / [#1015](https://github.com/netease-youdao/LobsterAI/issues/1015) | Hard dependency on internal NetEase npm registry blocks external contributors |

---

## Project Health Assessment

| Metric | Status | Note |
|--------|--------|------|
| **Development Velocity** | 🟢 Strong | 50 PRs/26 issues in 24h |
| **Release Cadence** | 🟢 Healthy | Daily patch releases |
| **Code Quality** | 🟡 Concerning | Multiple race conditions, security flaws, monolithic architecture |
| **Security Posture** | 🔴 Poor | 3+ critical unpatched vulnerabilities disclosed |
| **Community Health** | 🟢 Active | Detailed reports, external contributions, but response latency varies |
| **External Contributor Experience** | 🔴 Blocked | Internal registry dependencies, no build documentation for outsiders |

**Recommendation:** Prioritize security patches (#1041, #1031) and establish a vulnerability disclosure process. Address #1025/#1015 to unblock external contributions before the next major feature push.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-31

## 1. Today's Overview

TinyClaw shows **minimal but focused maintenance activity** on 2026-03-31, with 2 merged/closed PRs and zero open issues or active discussions. The project appears to be in a **stable maintenance phase** rather than active feature development—no new releases, no community-reported bugs, and no pending contributions requiring review. The activity pattern suggests the core team is polishing existing functionality (specifically the "tinyoffice" UI and team management components) without major architectural changes. Overall project health indicators: **low velocity, high stability**, with attention concentrated on UI/UX refinements rather than backend or AI capabilities.

---

## 2. Releases

**No new releases** — Version status unchanged.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Focus | Impact |
|:---|:---|:---|:---|
| [#270](https://github.com/TinyAGI/tinyagi/pull/270) | @jlia0 | **Bug fix**: Removed invalid `pathOptions` prop from `Edge` type in teams module | Type safety improvement; eliminates potential runtime errors in ReactFlow-based team visualizations |
| [#269](https://github.com/TinyAGI/tinyagi/pull/269) | @jlia0 | **Major UI refactor**: Reorganized tinyoffice navigation, routes, and office UI | Significant UX overhaul—sidebar-only layout, improved agent/team cards with ReactFlow trees, enhanced 3D office scene with agent name tags |

**Key Advancement**: The [#269](https://github.com/TinyAGI/tinyagi/pull/269) refactor represents the most substantial visible progress, streamlining the "tinyoffice" application shell into a more focused, visually coherent interface for managing AI agents and teams.

---

## 4. Community Hot Topics

**No active community discussions** — Both merged PRs had **zero comments and zero reactions**, indicating either:
- Low community engagement with these specific changes
- Changes were internally planned/approved before PR submission
- Project may rely on synchronous communication (Discord/Slack) rather than GitHub discussions

**Underlying need signal**: The ReactFlow integration and 3D office visualization improvements suggest user demand for **intuitive, visual team/orchestration management**—a differentiator in the crowded AI agent space.

---

## 5. Bugs & Stability

| Severity | Item | Status | Notes |
|:---|:---|:---|:---|
| Low | [#270](https://github.com/TinyAGI/tinyagi/pull/270) `pathOptions` prop removal | **Fixed** | Type-level cleanup; no user-reported impact |

**No new bugs, crashes, or regressions reported** — Stability profile remains clean.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests** in today's data. Inferred roadmap signals from merged work:

| Signal | Likely Priority | Rationale |
|:---|:---|:---|
| **Visual agent orchestration** | High | Major investment in ReactFlow trees, 3D office scene suggests this is a core differentiator |
| **Simplified UI/UX** | Medium | Sidebar-only layout indicates streamlining for non-technical users |
| **Team management polish** | Medium | Agent name tags, card redesigns show attention to multi-agent workflows |

**Prediction**: Next version likely emphasizes **visual workflow editing** and **team collaboration features** rather than new AI capabilities.

---

## 7. User Feedback Summary

**No direct user feedback captured** in GitHub data today. Absence of issues/complaints suggests:
- Either satisfied user base with stable deployment
- Or limited production usage generating feedback volume

**Monitoring recommendation**: Track whether [#269](https://github.com/TinyAGI/tinyagi/pull/269) UI changes generate post-merge issues—major refactors often surface edge cases in user workflows.

---

## 8. Backlog Watch

**No aging items requiring attention** — Zero open issues and zero open PRs indicates a **clean backlog state**.

**Potential concern**: The complete absence of open contributions (issues, PRs, discussions) may indicate:
- Project is early-stage with limited adoption
- Community engagement happens outside GitHub
- Contribution barriers or unclear roadmap discouraging external participation

---

*Digest generated from TinyAGI/tinyagi repository data — 2026-03-31*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-03-31

## 1. Today's Overview

Moltis shows **strong development velocity** with 6 PRs merged/closed and only 1 new issue opened in the last 24 hours. The project is actively addressing security concerns (vault sealing behavior, git hook bypass prevention) and expanding platform support (Matrix integration, alternative OpenAI providers). No new releases were cut, suggesting the team is accumulating changes for a larger version bump. The 7:6 closed-to-open ratio indicates healthy issue hygiene, though the single open feature request around Discord session naming hints at ongoing UX refinement needs for multi-channel deployments.

---

## 2. Releases

**No new releases** — version unchanged.

---

## 3. Project Progress

### Merged/Closed PRs (6 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#455](https://github.com/moltis-org/moltis/pull/455) | tupe12334 | Adds `block-no-verify` PreToolUse hook to prevent AI agents from bypassing git hooks with `--no-verify` | **Security/Compliance** — closes hook-bypass attack vector for Claude Code agents |
| [#522](https://github.com/moltis-org/moltis/pull/522) | penso | Fixes `crypto.randomUUID()` failure on plain HTTP by falling back to `getRandomValues()`-based UUID v4 | **Bugfix** — unblocks LAN/HTTP deployments; fixes [#520](https://github.com/moltis-org/moltis/issues/520) |
| [#519](https://github.com/moltis-org/moltis/pull/519) | penso | Uses browser `location.port` instead of internal Docker port for node join URLs behind reverse proxies | **Bugfix** — fixes [#426](https://github.com/moltis-org/moltis/issues/426) |
| [#503](https://github.com/moltis-org/moltis/pull/503) | penso | Session recall, managed SSH runtime UX, skill portability bundles, Cursor-compatible context ingestion | **Major Features** — cross-session memory, production SSH hardening, skill import/export |
| [#518](https://github.com/moltis-org/moltis/pull/518) | penso | Allows unencrypted session history access while vault is sealed; removes misleading "Vault is sealed" UI blocker | **Security/UX** — fixes [#428](https://github.com/moltis-org/moltis/issues/428) |
| [#487](https://github.com/moltis-org/moltis/pull/487) | fortunto2 | Adds `openai-oxide` as alternative OpenAI provider (888 lines vs. 5300+ in existing implementation) | **Technical Debt/Performance** — 83% code reduction for OpenAI integration |

**Key Themes:** Security hardening (vault behavior, git hooks), deployment flexibility (HTTP fallback, reverse proxy support), and infrastructure efficiency (leaner OpenAI provider, Matrix support pending).

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#313](https://github.com/moltis-org/moltis/issues/313) Tool search | 7 comments, 2 👍 | **Highest engagement** — Users need discoverability for growing tool ecosystems; closed as completed suggests imminent or shipped feature |
| [#185](https://github.com/moltis-org/moltis/issues/185) Z.AI Coding Plan | 5 comments, 5 👍 | Second-highest engagement; closed recently — structured planning workflows are a priority use case |

**Underlying Needs:** As Moltis scales beyond individual sessions, users need **tool discovery mechanisms** and **structured project planning workflows**. The high 👍:comment ratio on #185 suggests latent demand for coding plan features that may not be fully satisfied yet.

---

## 5. Bugs & Stability

| Issue | Severity | Status | Fix PR |
|:---|:---|:---|:---|
| [#520](https://github.com/moltis-org/moltis/issues/520) Cannot add session (HTTP context) | **High** — blocks core functionality for non-HTTPS deployments | Closed | [#522](https://github.com/moltis-org/moltis/pull/522) |
| [#426](https://github.com/moltis-org/moltis/issues/426) Wrong address in nodes (proxy port) | **Medium** — breaks node joining behind reverse proxies | Closed | [#519](https://github.com/moltis-org/moltis/pull/519) |
| [#428](https://github.com/moltis-org/moltis/issues/428) Chat history visible despite "vault sealed" | **Medium** — security/expectation mismatch | Closed | [#518](https://github.com/moltis-org/moltis/pull/518) |

**Assessment:** All reported bugs from the period have **same-day resolution**. The HTTP UUID fix (#522) is particularly notable for enabling LAN/development deployments without TLS termination complexity.

---

## 6. Feature Requests & Roadmap Signals

| Request | Status | Likelihood in Next Release |
|:---|:---|:---|
| [#523](https://github.com/moltis-org/moltis/issues/523) Rename Discord channel-based sessions | Open, 0 engagement | **High** — trivial UX fix, aligns with Matrix PR (#500) multi-channel work |
| Matrix channel integration | Open PR [#500](https://github.com/moltis-org/moltis/pull/500) | **Very High** — actively developed, cherry-picked from larger feature branch |
| `openai-oxide` provider | Superseded by [#521](https://github.com/moltis-org/moltis/pull/521) | **Very High** — second iteration suggests maintainer interest in provider consolidation |

**Predicted Next Release Themes:** Multi-channel expansion (Discord UX polish + Matrix), provider ecosystem simplification (openai-oxide migration), and continued security hardening.

---

## 7. User Feedback Summary

### Pain Points
- **Deployment friction:** HTTP environments (LAN, internal networks) hit UUID generation failures — now resolved
- **Proxy complexity:** Docker/internal port exposure confused node joining — now resolved
- **Vault UX confusion:** "Sealed" state blocked legitimate session access — behavior corrected

### Use Cases Emerging
- **Multi-channel deployments:** Discord (#523) + Matrix (#500) suggest teams using Moltis as shared infrastructure
- **Compliance-sensitive environments:** Git hook enforcement (#454/#455) indicates enterprise/CI-CD adoption
- **Provider flexibility:** openai-oxide interest suggests cost/performance optimization needs

### Satisfaction Indicators
- Rapid bug closure (same-day for #520, #426, #428)
- Active contributor engagement (penso: 4 PRs; fortunto2: 2 iterations on same feature)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#500](https://github.com/moltis-org/moltis/pull/500) Matrix integration | 3 days | **Low** — active, but unmerged | Final review, merge coordination with Discord channel work |
| [#521](https://github.com/moltis-org/moltis/pull/521) openai-oxide v0.11.1 | 1 day | **Low** — replaces #487 | Decision: supersede built-in OpenAI provider or maintain parallel? |
| [#523](https://github.com/moltis-org/moltis/issues/523) Discord session renaming | 1 day | **Minimal** | Triage — likely quick win for multi-channel UX consistency |

**No critical stale items** — maintainer attention appears well-distributed. The openai-oxide provider decision (#521 vs. #487) is the highest-impact architectural choice pending.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-03-31

## 1. Today's Overview

CoPaw reached **v1.0.0 stable release** today, marking a major milestone after three beta iterations. The project shows **extremely high activity** with 50 issues and 50 PRs updated in 24 hours, yielding an 82% closure rate on PRs (41 merged/closed vs. 9 open). The release cadence accelerated dramatically—four versions shipped in rapid succession from beta.1 through stable. Community engagement is robust with 38 active open issues, though the backlog reveals growing pains around memory management, multi-agent coordination, and enterprise channel integrations. The contributor base is expanding with multiple first-time contributors landing PRs.

---

## 2. Releases

### [v1.0.0](https://github.com/agentscope-ai/CoPaw/releases/tag/v1.0.0) — Stable Release
**Breaking Changes:** None documented; follows beta.3

**Major Additions:**
- **Background Task Support**: Full async execution for inter-agent communication with CLI `--background` flag, task tracking, status polling, and cancellation ([#2345](https://github.com/agentscope-ai/CoPaw/pull/2345))
- **Agent Enable/Disable Toggle**: Runtime agent lifecycle management

### [v1.0.0-beta.3](https://github.com/agentscope-ai/CoPaw/releases/tag/v1.0.0-beta.3)
- Dependency update: `@agentscope-ai/chat` bumped
- Fixed ToolGuard frontend response handling

### [v1.0.0-beta.2](https://github.com/agentscope-ai/CoPaw/releases/tag/v1.0.0-beta.2)
- Style fixes
- `react_agent` configuration path refactor: `recent_max_bytes` moved

### [v1.0.0-beta.1](https://github.com/agentscope-ai/CoPaw/releases/tag/v1.0.0-beta.1)
- Tool parsing: extract tool calls from thinking + text content
- Version bump infrastructure

**Migration Notes:** Users on 0.2.0.post1 should upgrade directly to v1.0.0; beta series was transitional. Note [#2537](https://github.com/agentscope-ai/CoPaw/issues/2537) reports update mechanism failures—manual intervention may be needed.

---

## 3. Project Progress

### Merged/Closed PRs Today (41 total)

| PR | Description | Impact |
|:---|:---|:---|
| [#2585](https://github.com/agentscope-ai/CoPaw/pull/2585) | Version bump to 1.0.0 | Release |
| [#2573](https://github.com/agentscope-ai/CoPaw/pull/2573) | Release notes for v1.0.0 | Documentation |
| [#2574](https://github.com/agentscope-ai/CoPaw/pull/2574) | Prepend summary memory retrieval for chat history | **Core feature** — addresses memory context loss |
| [#2576](https://github.com/agentscope-ai/CoPaw/pull/2576) | WeChat channel: file upload fix + typing indicator | **Critical channel fix** — first-time contributor |
| [#2567](https://github.com/agentscope-ai/CoPaw/pull/2567) | llama.cpp download link update (Aliyun OSS) | Reliability — China accessibility |
| [#2577](https://github.com/agentscope-ai/CoPaw/pull/2577) | Remove stale local provider config | Cleanup |
| [#2581](https://github.com/agentscope-ai/CoPaw/pull/2581) | Google Tag for website analytics | Ops |
| [#2588](https://github.com/agentscope-ai/CoPaw/pull/2588), [#2575](https://github.com/agentscope-ai/CoPaw/pull/2575), [#2582](https://github.com/agentscope-ai/CoPaw/pull/2582) | Homepage/website updates | Branding |
| [#2589](https://github.com/agentscope-ai/CoPaw/pull/2589) | SPA routing fix | UX |
| [#2571](https://github.com/agentscope-ai/CoPaw/pull/2571) | `@agentscope-ai/chat` → 1.1.56 | Dependency |

**Key Advances:**
- **Memory system evolution**: [#2574](https://github.com/agentscope-ai/CoPaw/pull/2574) implements summary memory retrieval—directly responds to [#2289](https://github.com/agentscope-ai/CoPaw/issues/2289) complaints about MEMORY.md performance degradation
- **Channel hardening**: WeChat channel received critical fixes for file/image/video upload (AES encoding, filekey parameter)
- **Infrastructure reliability**: China-specific CDN for local model downloads

---

## 4. Community Hot Topics

### Most Active Issues

| Rank | Issue | Comments | Category | Underlying Need |
|:---|:---|:---:|:---|:---|
| 1 | [#2291](https://github.com/agentscope-ai/CoPaw/issues/2291) "Help Wanted: Open Tasks" | 38 | Contributor onboarding | **Structured contribution pathway** — maintainers need to scale community contributions beyond core team |
| 2 | [#2482](https://github.com/agentscope-ai/CoPaw/issues/2482) "重度copaw用户，码农，提几个痛点" | 13 | Power user feedback | **Production reliability** — deletion, context compression, file reading for professional dev workflows |
| 3 | [#2289](https://github.com/agentscope-ai/CoPaw/issues/2289) "MEMORY.md日益增大，效率降低" | 9 | Performance | **Scalable memory architecture** — text-file-based memory hitting limits at scale |
| 4 | [#2312](https://github.com/agentscope-ai/CoPaw/issues/2312) "无法使用国家超算互联网的api" | 7 | Provider support | **Domestic China AI infrastructure** — SCNet.cn integration |
| 5 | [#2301](https://github.com/agentscope-ai/CoPaw/issues/2301) "关于更新的建议和/approve的更改建议" | 7 | UX enhancement | **One-click operations** — reduce friction for approvals, updates, model failover |

### Analysis
The top issue (#2291) is meta—it's a task board for contributors, indicating the project is actively **scaling beyond maintainer capacity**. The #2 and #3 issues reveal a critical tension: CoPaw is being adopted by **professional developers for serious work** (daily heavy usage, 1500-file batch processing), but the architecture (text-file memory, manual context management) isn't yet enterprise-robust.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#2435](https://github.com/agentscope-ai/CoPaw/issues/2435) | Network instability: 30-60% `execute_shell_command` timeout, gh CLI exit 128, GitHub API <70% success | **No PR** — infrastructure/external |
| 🔴 **Critical** | [#2377](https://github.com/agentscope-ai/CoPaw/issues/2377) | Batch processing fails silently after few files (1500-file job stalls) | **No PR** — relates to #2435 |
| 🟡 **High** | [#2455](https://github.com/agentscope-ai/CoPaw/issues/2455) | Gemini model: "function response parts ≠ function call parts" error | **No PR** — provider API compatibility |
| 🟡 **High** | [#2591](https://github.com/agentscope-ai/CoPaw/issues/2591) | MCP server initialization timeout (`client.connect()`), tools never loaded | **No PR** — stdio MCP transport |
| 🟡 **High** | [#2569](https://github.com/agentscope-ai/CoPaw/issues/2569) | Sub-agent scheduled tasks appear in default agent instead of creator | **No PR** — multi-agent state isolation |
| 🟡 **High** | [#2459](https://github.com/agentscope-ai/CoPaw/issues/2459) | `/approve` fails through inter-agent communication forwarding | **No PR** — multi-agent security flow |
| 🟢 **Medium** | [#2536](https://github.com/agentscope-ai/CoPaw/issues/2536) | Installation failure: cannot access localhost:8088 or :33188 | **No PR** — likely firewall/port conflict |
| 🟢 **Medium** | [#2475](https://github.com/agentscope-ai/CoPaw/issues/2475) | DingTalk CMD: `ValidationError` for `call_id` | **No PR** — channel-specific |
| 🟢 **Medium** | [#2500](https://github.com/agentscope-ai/CoPaw/issues/2500) | File reading truncated, no auto-continuation | **No PR** — tool behavior |

**Regression Alert:** [#2527](https://github.com/agentscope-ai/CoPaw/issues/2527) (WeChat `'recent_max_bytes'` attribute error) was **closed today** via [#2576](https://github.com/agentscope-ai/CoPaw/pull/2576).

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in v1.1 | Rationale |
|:---|:---|:---:|:---|
| **AI-powered context compression** | [#2482](https://github.com/agentscope-ai/CoPaw/issues/2482) | **High** | Critical for power users; competitor feature (Cursor, Claude Code) |
| **Pluggable context compaction strategies** | [#2521](https://github.com/agentscope-ai/CoPaw/issues/2521) | **High** | Enterprise AIOps use case; architectural alignment |
| **Skill tags/indexed retrieval** | [#2323](https://github.com/agentscope-ai/CoPaw/issues/2323) | **Medium** | Clear implementation path; reduces LLM dependency |
| **@ or / command for explicit skill invocation** | [#2270](https://github.com/agentscope-ai/CoPaw/issues/2270) | **Medium** | UX standard (Cursor, Claude Code pattern) |
| **Auto model failover with ranking** | [#2301](https://github.com/agentscope-ai/CoPaw/issues/2301) | **Medium** | Reliability feature; complexity in ranking algorithm |
| **File operation rollback** | [#2590](https://github.com/agentscope-ai/CoPaw/issues/2590) | **Medium** | Safety feature; has volunteer contributor (Task 6 in #2291) |
| **Structured skill output** | [#2535](https://github.com/agentscope-ai/CoPaw/issues/2535) | **Medium** | PPT generation use case; API design needed |
| **Full-duplex message insertion** | [#2548](https://github.com/agentscope-ai/CoPaw/issues/2548) | **Lower** | Architectural change; frontend/backend coordination |
| **Self-reflection/self-evolution** | [#2301](https://github.com/agentscope-ai/CoPaw/issues/2301) | **Lower** | Research-grade feature; undefined scope |
| **Cross-platform message sync** (web ↔ mobile) | [#2301](https://github.com/agentscope-ai/CoPaw/issues/2301) | **Lower** | Infrastructure heavy; unclear priority |

---

## 7. User Feedback Summary

### Pain Points (High Frequency)

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Memory management at scale** | [#2289](https://github.com/agentscope-ai/CoPaw/issues/2289), [#2482](https://github.com/agentscope-ai/CoPaw/issues/2482), [#2521](https://github.com/agentscope-ai/CoPaw/issues/2521) | 🔴 Critical |
| **Batch job reliability** | [#2377](https://github.com/agentscope-ai/CoPaw/issues/2377), [#2435](https://github.com/agentscope-ai/CoPaw/issues/2435) | 🔴 Critical |
| **Update mechanism fragility** | [#2537](https://github.com/agentscope-ai/CoPaw/issues/2537), [#2301](https://github.com/agentscope-ai/CoPaw/issues/2301) | 🟡 High |
| **Multi-agent coordination bugs** | [#2569](https://github.com/agentscope-ai/CoPaw/issues/2569), [#2459](https://github.com/agentscope-ai/CoPaw/issues/2459) | 🟡 High |
| **File reading limitations** | [#2482](https://github.com/agentscope-ai/CoPaw/issues/2482), [#2500](https://github.com/agentscope-ai/CoPaw/issues/2500) | 🟡 High |

### Use Cases Emerging
- **Development assistant**: Daily heavy usage, code reading, debugging context management
- **AIOps operator**: 300+ tool call, hour-long workflows ([#2521](https://github.com/agentscope-ai/CoPaw/issues/2521))
- **Enterprise channel integration**: DingTalk, Feishu, WeChat for team collaboration
- **Content generation**: PPT creation with structured output needs ([#2535](https://github.com/agentscope-ai/CoPaw/issues/2535))

### Satisfaction Signals
- Active daily usage ("重度折腾", "每天频繁使用")
- Willingness to contribute (#2291 engagement)
- Feature sophistication requests (auto-failover, AI compression)

### Dissatisfaction Signals
- "很崩溃" (very崩溃) — context loss destroys work sessions
- Update failures blocking access to new features
- Silent failures in batch processing erode trust

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Problem | Action Needed |
|:---|:---:|:---|:---|
| [#2435](https://github.com/agentscope-ai/CoPaw/issues/2435) | 2 days | Network resilience — blocking core functionality | Infrastructure assessment, retry logic design |
| [#2591](https://github.com/agentscope-ai/CoPaw/issues/2591) | 0 days | MCP server timeout — modern protocol support | MCP transport debugging, timeout configuration |
| [#2459](https://github.com/agentscope-ai/CoPaw/issues/2459) | 2 days | Multi-agent `/approve` forwarding | Security flow redesign |
| [#2141](https://github.com/agentscope-ai/CoPaw/pull/2141) | 7 days | Memory compaction routing to channels | Review stalled PR |
| [#2506](https://github.com/agentscope-ai/CoPaw/pull/2506) | 1 day | Channel testing infrastructure | Review — large PR (11 channels) |

### PRs at Risk
- [#2448](https://github.com/agentscope-ai/CoPaw/pull/2448) (MiniMax OAuth): 3 days old, no comments — provider expansion priority unclear
- [#2506](https://github.com/agentscope-ai/CoPaw/pull/2506): Comprehensive test infrastructure — needs review bandwidth

---

**Project Health Score: B+** — Strong release velocity and community growth, but architectural scaling challenges (memory, network resilience) need immediate attention to prevent power user churn.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-31

---

## 1. Today's Overview

ZeptoClaw shows minimal activity over the past 24 hours, with only one issue receiving updates and no new pull requests or releases. The project appears to be in a maintenance phase with steady but low-volume community engagement. The single active issue addresses a significant architectural disconnect between the CLI's tool listing functionality and the actual runtime registry. Overall project health appears stable, though the lack of merged contributions suggests either a focus on internal development or a temporary lull in external contributions.

---

## 2. Releases

*No new releases in the past 24 hours.*

---

## 3. Project Progress

*No pull requests were merged or closed today.*

No features advanced through the contribution pipeline. The absence of merged PRs indicates either:
- Pending reviews on existing contributions
- Maintainer focus on internal roadmap items not yet visible in public repositories
- A natural gap between issue identification and implementation

---

## 4. Community Hot Topics

### Active Issue: Runtime Registry vs. Hardcoded Tool List

| | |
|:---|:---|
| **Issue** | [#465 rfc(cli): tools list should use runtime registry instead of hardcoded array](https://github.com/qhkm/zeptoclaw/issues/465) |
| **Author** | @stuartbowness |
| **Status** | Open, updated 2026-03-30 |
| **Engagement** | 1 comment, 0 reactions |

**Summary:** The CLI command `zeptoclaw tools list` currently displays tools from a static array of 33 hardcoded `ToolInfo` structs in `src/cli/tools.rs`, which is completely disconnected from the runtime `ToolRegistry` that the agent actually uses. This causes custom tools, plugins, composed tools, and MCP tools to be invisible to users.

**Underlying Need:** This RFC highlights a critical UX gap where the CLI's presentation layer has drifted from the actual system capabilities. The community needs observability into the *effective* toolset, not just the built-in defaults. This suggests users are actively extending ZeptoClaw with custom tools and need proper introspection capabilities.

---

## 5. Bugs & Stability

*No bug reports, crashes, or regressions identified in the past 24 hours.*

---

## 6. Feature Requests & Roadmap Signals

| Feature Signal | Source | Likelihood in Next Version |
|:---|:---|:---|
| **Dynamic tool registry introspection** | #465 | **High** — Architectural debt with clear user impact |
| **MCP tool visibility** | #465 | **High** — Mentioned explicitly as missing |
| **Plugin tool discovery** | #465 | **Medium** — Depends on plugin system maturity |
| **Composed tool listing** | #465 | **Medium** — Requires composition system exposure |

The runtime registry alignment issue (#465) represents the strongest roadmap signal. If addressed, it would likely unlock:
- Better debugging workflows for tool authors
- Improved transparency for AI agent behavior auditing
- Foundation for future CLI enhancements (tool search, filtering, validation)

---

## 7. User Feedback Summary

**Pain Point Identified:**

| Aspect | Detail |
|:---|:---|
| **Core Issue** | CLI "lies" about available tools — displayed list doesn't match runtime reality |
| **Impact** | Users cannot verify what tools are actually available to the agent; debugging custom integrations is difficult |
| **Use Case Affected** | Custom tool development, MCP integration, plugin authoring |
| **Severity** | Moderate-High (architectural/UX debt) |

**Implicit Satisfaction Signals:**
- Community member invested effort in detailed RFC with specific file references (`src/cli/tools.rs`)
- Problem framed constructively with clear technical scope

**Dissatisfaction Indicators:**
- Hardcoded array suggests early-stage technical debt now surfacing as friction
- 33-tool limit implies scalability concerns as ecosystem grows

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#465](https://github.com/qhkm/zeptoclaw/issues/465) | 2 days | Low (fresh) | Maintainer acknowledgment and RFC review |

**Assessment:** The backlog is currently minimal with only one active issue. No long-unanswered critical items require urgent attention. However, #465 would benefit from maintainer response to:
- Confirm architectural direction (registry exposure vs. CLI redesign)
- Indicate priority relative to other CLI improvements
- Potentially tag for contribution if not on core team roadmap

---

*Digest generated from GitHub activity 2026-03-30 to 2026-03-31*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest — 2026-03-31

## 1. Today's Overview

EasyClaw shows minimal activity over the past 24 hours with **2 closed issues** and **zero pull request activity**. The project appears to be in a maintenance phase with no new releases. Both issues closed today relate to the **RivonClaw** component (a proxy/VPN tool within the EasyClaw ecosystem), suggesting focused bug-fixing on network connectivity and API integration stability. The lack of open issues or active PRs indicates either a stable codebase or reduced community engagement. No maintainer commits or community contributions were recorded today.

---

## 2. Releases

**No new releases** — Version 1.7.7 remains the latest available (as referenced in Issue #28).

---

## 3. Project Progress

**No merged or closed PRs today.**

Progress is limited to **issue resolution**:
- Two user-reported problems were closed without visible code changes, suggesting either:
  - Workarounds provided via comments (not visible in data)
  - Issues resolved through external dependency updates
  - Duplicate or invalid reports closed by maintainers

---

## 4. Community Hot Topics

| Issue | Activity | Analysis |
|-------|----------|----------|
| [#30: rivonclaw和QClaw能不能同时使用](https://github.com/gaoyangz77/rivonclaw/issues/30) | Closed 2026-03-30 | **Network stack conflict** — Users need concurrent proxy tools for different use cases (RivonClaw for EasyClaw, QClaw for Tencent services). Root cause: Likely port binding or WinDivert/TUN driver collision. |
| [#28: [Bug] 百炼套餐模型切换后出现 HTTP 400 InvalidParameter 错误](https://github.com/gaoyangz77/rivonclaw/issues/28) | Closed 2026-03-30 | **API compatibility gap** — Model switching from Qwen3.5 to Kimi2.5/GLM5 triggers context window validation errors. Suggests hardcoded token limits or improper context truncation during model handoff. |

**Underlying Needs:**
- Better **multi-proxy coexistence** architecture
- **Dynamic model adapter** with provider-specific parameter validation

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available |
|----------|-------|--------|---------------|
| 🔴 **High** | [#28](https://github.com/gaoyangz77/rivonclaw/issues/28): HTTP 400 on model switch — breaks core LLM functionality | Closed | Unknown — no linked PR |
| 🟡 **Medium** | [#30](https://github.com/gaoyangz77/rivonclaw/issues/30): Proxy conflict with QClaw — affects workflow flexibility | Closed | Unknown — likely workaround, not fix |

**Concerns:** Both issues closed without visible code changes or linked PRs. Resolution methodology unclear; may recur without structural fixes.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests** in today's data. Inferred priorities from bug patterns:

| Predicted Feature | Rationale | Likelihood in Next Version |
|-------------------|-----------|---------------------------|
| **Proxy isolation mode** | Resolve #30-style conflicts | High |
| **Model-agnostic context manager** | Fix #28 token limit issues | High |
| **Concurrent proxy profiles** | User demand for tool coexistence | Medium |
| **Provider-specific parameter presets** | Prevent API validation errors | Medium |

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Segment |
|------------|----------|--------------|
| **Proxy tool incompatibility** | #30 — "rivonclaw的连接就会断掉" | Power users with multiple VPN needs |
| **Fragile model switching** | #28 — Breaks when changing from default Qwen3.5 | AI model power users |
| **Opaque error messages** | #28 — Raw HTTP 400/Algo.InvalidParameter exposed | All users |

**Use Case Pattern:** Windows 11 professionals using EasyClaw as a **unified AI client** with multiple backend providers, requiring stable network tunneling alongside corporate/region-specific tools (QClaw).

**Satisfaction Risk:** Medium — closed issues without transparent resolution may erode trust.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| No open issues or PRs in dataset | — | — | — |

**Observation:** The zero open-issue state is atypical for active open-source projects. Possible explanations:
- Aggressive issue grooming by maintainers
- Migration to Discord/WeChat for support
- Reduced user adoption

**Recommendation:** Monitor for issue creation rate; sustained zero-open-issue state with declining commits may indicate project stagnation.

---

*Digest generated from gaoyangz77/easyclaw and gaoyangz77/rivonclaw repositories — 2026-03-31*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*