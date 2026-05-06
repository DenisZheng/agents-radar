# OpenClaw Ecosystem Digest 2026-04-25

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-25 00:15 UTC

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

# OpenClaw Project Digest — 2026-04-25

## 1. Today's Overview

OpenClaw shows **exceptionally high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a mature project with active triage and development. The 478:22 closed-to-open issue ratio and 336:164 merged-to-open PR ratio demonstrate strong maintainer throughput. Four releases shipped (v2026.4.23 stable plus three betas), all centered on image generation capabilities via OAuth and OpenRouter integration. The project appears to be in a **stabilization phase** following the turbulent 2026.3.12 release, with substantial effort directed at closing regression reports from that cycle.

---

## 2. Releases

### v2026.4.23 (Stable)
- **OpenAI Provider**: Image generation and reference-image editing now work through **Codex OAuth** — `openai/gpt-image-2` requires no `OPENAI_API_KEY` ([Release](https://github.com/openclaw/openclaw/releases/tag/v2026.4.23))
- **OpenRouter Provider**: Added `image_generate` support for image generation and reference-image editing

### v2026.4.23-beta.6, beta.5, beta.4
- Identical changelog to stable; iterative beta stabilization before final release

**Breaking Changes / Migration**: None noted. OAuth-based image generation is additive; existing API key workflows remain functional.

---

## 3. Project Progress

### Major Merges (2026-04-24 to 2026-04-25)

| PR | Author | Description | Link |
|:---|:---|:---|:---|
| #71278 | vincentkoc | **Refactor: PDF extraction → plugin architecture** — moves `pdfjs-dist` to bundled `document-extract` plugin, defines generic document extractor contract with SDK subpath | [PR #71278](https://github.com/openclaw/openclaw/pull/71278) |
| #71293 | steipete | **Codex app-server event emission fix** — root fix for terminal chat events in Codex runs, replacing message-less `chat.final` fallback | [PR #71293](https://github.com/openclaw/openclaw/pull/71293) |
| #71161 | Jimmy-xuzimo | **ACP runtime guards** — rejects `model`/`thinking` params with clear errors instead of silent drops | [PR #71161](https://github.com/openclaw/openclaw/pull/71161) |
| #71186 | alexlomt | **Workspace bootstrap detection** — established profiles with `IDENTITY.md`/`USER.md`/`SOUL.md` no longer falsely treated as unbootstrapped | [PR #71186](https://github.com/openclaw/openclaw/pull/71186) |
| #70916 | gm4xgvkx7g-droid | **Claude CLI MCP config merge** — user-registered `mcp.servers` now properly merged into generated `--mcp-config` overlay | [PR #70916](https://github.com/openclaw/openclaw/pull/70916) |
| #71025 | marusan03 | **Slack exec approval routing** — fixes 30-min timeout on interactive approval buttons | [PR #71025](https://github.com/openclaw/openclaw/pull/71025) |
| #70923 | colin-lgtm | **Google Chat startup crash + silent text loss** — resolves `DOMException` and typing indicator cleanup bug | [PR #70923](https://github.com/openclaw/openclaw/pull/70923) |

### Active Development (Open PRs)
- **Streaming multimodal pipeline** (#70380): Phase C implementing streaming STT + parallel TTS output — major infrastructure investment
- **Scoped mention patterns** (#70864): Cross-channel mention policy for multi-agent deployments
- **Control UI context freshness** (#71297): Real-time session metadata merging before full refresh

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

| Issue | Comments | Status | Core Problem | Link |
|:---|:---|:---|:---|:---|
| #44714 `openclaw logs --follow` handshake timeout | 16 | **CLOSED** | Gateway healthy but CLI log streaming broken post-2026.3.12 | [Issue #44714](https://github.com/openclaw/openclaw/issues/44714) |
| #31486 Image tool ignores custom providers | 16 | **CLOSED** | Hardcoded provider list excludes user-configured image models | [Issue #31486](https://github.com/openclaw/openclaw/issues/31486) |
| #44755 `/compact` UI crash (white triangle logo) | 14 | **CLOSED** | Main webchat becomes unrecoverable after compaction command | [Issue #44755](https://github.com/openclaw/openclaw/issues/44755) |
| #44184 Context usage always 0% | 13 | **CLOSED** | Status display regression from 2026.3.11 | [Issue #44184](https://github.com/openclaw/openclaw/issues/44184) |
| #45089 Chat box GUI view problem | 12 | **CLOSED** | Chrome rendering regression | [Issue #45089](https://github.com/openclaw/openclaw/issues/45089) |
| #45046 Agents simulate tool usage | 12 | **CLOSED** | Critical: agents hallucinate tool calls instead of executing | [Issue #45046](https://github.com/openclaw/openclaw/issues/45046) |
| #44906 Context limit icon blocks chat | 12 | **CLOSED** | CSS regression: warning icon fills viewport | [Issue #44906](https://github.com/openclaw/openclaw/issues/44906) |

**Underlying Needs Analysis**: The 2026.3.12 release was a **stability inflection point** — users need reliable CLI-gateway communication, accurate context telemetry, and deterministic tool execution. The high engagement on UI/UX regressions suggests a user base heavily dependent on Control UI for production workflows.

---

## 5. Bugs & Stability

### Severity Ranking (Active/Recent)

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **CRITICAL** | #45046 | Agents simulate tools instead of invoking — breaks core agent reliability | **CLOSED** — fix in 2026.3.12+ |
| **CRITICAL** | #43858 / #44122 / #44964 | Edit/Write tools produce **0-byte files** — data loss risk | **CLOSED** — sandbox FS bridge fix |
| **HIGH** | #44714 / #45127 | `logs --follow` handshake timeout, `--local-time` failure | **CLOSED** |
| **HIGH** | #44755 / #45194 / #45187 | Control UI blank/giant logo crashes — renders main session unusable | **CLOSED** — multiple UI fixes |
| **HIGH** | #45057 / #44718 | `ANTHROPIC_MODEL_ALIASES` initialization crash on gateway start | **CLOSED** |
| **HIGH** | #45110 | Prompt-cache invalidation causing **1000x inference cost increase** | **CLOSED** |
| **MEDIUM** | #45000 | Tool call XML leaks to chat with Ollama | **CLOSED** |
| **MEDIUM** | #44906 / #48252 | Context warning display math (100% vs ~56%, icon scaling) | **CLOSED** via #60649, #45282, #48268, #49113, #45335 |

**Regression Cluster**: 2026.3.11–2026.3.12 introduced **~15 tracked regressions** across sandbox FS, UI rendering, CLI connectivity, and context accounting. Most now resolved; remaining risk appears in edge cases (Ollama tool XML, Telegram proxy media).

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Maturity Signal |
|:---|:---|:---|
| **Multi-agent WebChat UI switcher** | #45086 (7 comments) | Strong demand; PR #71297 addresses context freshness prerequisite |
| **Streaming STT/TTS pipeline** | #70380 (OPEN, Phase C) | In active development — likely 2026.5.x |
| **Browser doctor/health probes** | #62936, #62948 (OPEN) | Infrastructure reliability investment |
| **Document extraction plugin SDK** | #71278 (MERGED) | **Shipped** — enables third-party extractors |
| **Scoped mention patterns** | #70864 (OPEN) | Multi-agent deployment scaling need |
| **WhatsApp voice note delivery** | #68744 (OPEN) | Polish for channel parity |

**Next Version Prediction (2026.5.x)**: Streaming multimodal (#70380) is the flagship in-progress feature. Multi-agent UI switcher (#45086) likely follows given user demand and prerequisite fixes landing.

---

## 7. User Feedback Summary

### Pain Points
- **Context accounting distrust**: Multiple issues (#44184, #48252, #43987, #43767) show users cannot rely on token usage displays for cost/performance decisions
- **Gateway-CLI fragility**: Log streaming, device listing, and local commands fail while gateway reports healthy — "split brain" operational pain
- **Sandbox data loss**: 0-byte file writes (#43858, #44122, #44964) eroded confidence in file manipulation tools
- **Release quality**: 2026.3.12 specifically cited as problematic across numerous regressions

### Positive Signals
- **Rapid triage**: 478/500 issues closed in 24h indicates responsive maintenance
- **OAuth simplification**: Removing API key requirements for image generation reduces friction
- **Plugin extensibility**: Document extraction refactor (#71278) shows architecture maturation

### Use Case Patterns
- **Production multi-channel deployments**: Telegram, Slack, WhatsApp with proxy configurations
- **Local/self-hosted LLMs**: Ollama, LM Studio integration demand persistent
- **Cost-sensitive operations**: Prompt caching (#45110), context compaction (#44755) heavily monitored

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| #70380 Streaming STT/TTS | ~3 days active | **HIGH** — large feature, needs review bandwidth | Maintainer code review for Phase C merge |
| #70864 Scoped mention patterns | ~1 day | MEDIUM — cross-cutting channel change | Architecture review for policy precedence rules |
| #62936 / #62948 Browser doctor | ~17 days | MEDIUM — reliability tooling | Decision on scope: MCP-only vs. full managed browser |
| #68744 WhatsApp `audioAsVoice` | ~6 days | LOW — channel parity | Final review, merge pending |
| #64123 Browser snapshot role fallback | ~15 days | LOW — edge case correctness | Rebase and final test pass |

**Maintainer Attention Needed**: The streaming multimodal PR (#70380) is the highest-impact open item requiring sustained review investment. Browser health diagnostics (#62936/#62948) have stalled despite clear user value for troubleshooting the frequently-reported browser launch failures.

---

*Digest generated from github.com/openclaw/openclaw activity through 2026-04-25. All links reference `https://github.com/openclaw/openclaw`.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent Ecosystem
**Date:** 2026-04-25 | **Analyst:** Senior AI Agent Ecosystem Analyst

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing **unprecedented development velocity** across all major projects, with daily PR counts routinely exceeding 30+ on active repositories. The landscape has bifurcated into **mature stabilization projects** (OpenClaw, NanoBot, CoPaw) grappling with post-major-release regression clusters, and **rapidly maturing challengers** (Moltis, IronClaw, ZeroClaw) building enterprise-ready features from inception. A defining characteristic of this moment is the **universal struggle with reasoning/thinking content handling** across providers—DeepSeek V4 integration failures appear in OpenClaw, PicoClaw, CoPaw, ZeroClaw, and LobsterAI simultaneously, indicating industry-wide API schema immaturity. The ecosystem is also converging on **MCP (Model Context Protocol) as a de facto standard** for tool interoperability, with nearly every project investing in MCP server management or client integration.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Merge/Closed Rate | Health Score* | Phase |
|:---|:---:|:---:|:---|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | v2026.4.23 stable + 3 betas | 478:22 issues, 336:164 PRs | **A-** | Stabilization |
| **NanoBot** | 16 | 41 | None (v0.1.5.post2 current) | 34:7 PRs | **B+** | Pre-release accumulation |
| **Hermes Agent** | 50 | 50 | None | 8:42 PRs | **C+** | Infrastructure strain |
| **PicoClaw** | 12 | 38 | v0.2.7-nightly | 19:19 PRs | **B** | Pre-stable hardening |
| **NanoClaw** | 15 | 37 | None (v2.0.0 current) | 26:11 PRs | **B-** | Post-release stabilization |
| **NullClaw** | 2 | 11 | None (no releases ever) | 0:11 PRs | **D+** | Review bottleneck |
| **IronClaw** | 16 | 50 | None | 7:43 PRs | **C** | Pre-release strain |
| **LobsterAI** | 3 | 42 | 2026.4.24 + 2026.4.23 | 42:0 PRs | **B+** | Rapid iteration |
| **Moltis** | 10 | 31 | None | 29:2 PRs | **A-** | Feature accumulation |
| **CoPaw** | 50 | 50 | v1.1.4 + v1.1.4.post1 | 35:15 PRs | **B+** | Post-release stabilization |
| **ZeptoClaw** | 1 | 1 | None | 0:1 PRs | **C-** | Maintenance |
| **ZeroClaw** | 50 | 50 | None (v0.6.9 current) | 27:23 PRs | **C+** | Active but strained |
| **TinyClaw** | 0 | 0 | None | N/A | **N/A** | Dormant |

*\*Health Score considers merge velocity, issue resolution rate, release cadence, and critical bug backlog. A = excellent, B = good, C = strained, D = at-risk.*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily | 10-50× higher volume than all peers; indicates dominant market position |
| **Release cadence** | 4 releases in 24h | Only CoPaw and LobsterAI match; others release weekly or not at all |
| **Maintainer throughput** | 95.6% issue close rate, 67% PR merge rate | Hermes: 16%, IronClaw: 14%, ZeroClaw: 54% |
| **OAuth integration depth** | Codex OAuth, OpenRouter image generation | Unique among peers; reduces API key friction |
| **Multi-channel maturity** | Telegram, Slack, WhatsApp, Google Chat all actively maintained | Most peers cover subset; ZeroClaw and NanoBot lag in channel breadth |

### Technical Approach Differences
- **Plugin architecture**: OpenClaw's `document-extract` plugin SDK (#71278) represents a more mature extensibility model than NanoBot's lazy imports or Moltis's skill-based approach
- **Control UI investment**: Substantial effort on webchat stability (#44755, #44906) contrasts with IronClaw's mobile-unresponsive UI and NanoClaw's desktop white screens
- **Context management**: Explicit compaction (#44755) and prompt-cache invalidation (#45110) show cost-conscious architecture vs. ZeroClaw's unbounded session growth

### Community Size Comparison
OpenClaw operates at **ecosystem-defining scale**—its daily issue volume exceeds most peers' monthly activity. The only comparable communities are CoPaw (Chinese market strength) and ZeroClaw (broad geographic appeal). Hermes Agent's 89+ skills indicate deep adoption but lower daily engagement suggests more stable production deployments than active development.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Reasoning/thinking content handling** | OpenClaw, PicoClaw, CoPaw, ZeroClaw, LobsterAI, Hermes Agent | DeepSeek V4 `reasoning_content` propagation; prevent leakage to user-facing output; history persistence ordering |
| **MCP ecosystem integration** | OpenClaw, PicoClaw, Moltis, CoPaw, IronClaw | Server management CLI (#2641, #840), client lifecycle (#2664), null-safe tool calls (#2666), TaskGroup hang fixes (#3640) |
| **Multi-agent orchestration** | Hermes Agent, ZeroClaw, Moltis, OpenClaw (#70864) | Parallel/sequential/DAG patterns (#15422), scoped mention policies, agent-to-agent handoff (#2531) |
| **Provider failover/resilience** | NanoBot, ZeroClaw, OpenClaw | Cross-provider retry (#3376), fallback chains (#4647), subscription tier detection (#15080) |
| **Voice/multimodal streaming** | OpenClaw (#70380), Moltis (#303), CoPaw | STT+TTS pipeline, push-to-talk, VAD continuous listening |
| **Enterprise messaging parity** | OpenClaw, NanoBot, CoPaw, ZeroClaw, LobsterAI | DingTalk file handling (#3344, #3742), WeChat limits (#2772), Telegram markdown (#2568), Slack thread isolation (#15421) |
| **Sandbox security vs. utility** | ZeroClaw (#5722, #5809), Moltis (#866 Landlock), NanoClaw (#4 IPC isolation) | Shell command restrictions, filesystem isolation, credential encryption (#867) |
| **Headless/server deployment** | NanoClaw, OpenClaw, PicoClaw, NullClaw | Systemd detection (#1981), Docker group handling (#414), Windows build (#2487), ARM/embedded (#851) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Scale + operational maturity | Production multi-channel deployments | Plugin SDK, Control UI, OAuth-native |
| **NanoBot** | Rapid bug-fix velocity + memory efficiency | Cost-conscious self-hosters | Lazy imports, aggressive timeout guards |
| **Hermes Agent** | Plugin ecosystem depth (89+ skills) | Power users, IDE-integrated workflows | Nix builds, TUI-first, self-evolution experiments |
| **PicoClaw** | Embedded/IoT bridge | Hardware developers, NAS self-hosters | I2C/SPI/UART tools, MQTT channel, Go-based |
| **NanoClaw** | Claude-first managed cloud → pivoting local | Original: SaaS users; Emerging: self-hosters | v2 architecture, group-scoped isolation |
| **NullClaw** | Security-hardened minimalism | Security-conscious, edge deployments | Restricted shell, bilingual docs, A2A protocol |
| **IronClaw** | Blockchain-adjacent (NEAR AI), WASM→skills migration | Web3-adjacent developers, TEE deployments | Engine V2, schema normalization, dual DB backend |
| **LobsterAI** | Chinese enterprise integration velocity | PRC market, code-heavy workflows | NetEase backing, rapid model provider expansion |
| **Moltis** | Enterprise multi-agent with audit trails | Regulated industries, compliance | zkperf witness recording, sub-agent presets, Nix |
| **CoPaw** | Domestic Chinese market + memory innovation | Chinese developers, Qwen ecosystem | CJK-aware tokenization, Electrobun→Tauri migration |
| **ZeroClaw** | Geographic localization (China providers) | China-market enterprise, QQ ecosystem | Multi-agent RFC, HMAC receipts, sandbox policies |
| **ZeptoClaw** | Modular Rust architecture | Systems programmers, enterprise isolation | Cargo feature flags, subprocess worker pattern |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (Daily velocity >30 PRs, releases shipping)
| Project | Momentum Signal | Risk Factor |
|:---|:---|:---|
| **OpenClaw** | 500 PRs/day, 4 releases, 95%+ issue closure | Regression cluster from 2026.3.12 still resolving |
| **LobsterAI** | 42 PRs merged/0 open, 2 releases in 2 days | Release-day bugs (#1813); insufficient integration testing |
| **Moltis** | 93% merge rate, same-day critical fixes | Security vulnerability (#867) exposed, no fix yet |

### Tier 2: Active Stabilization (Post-major-release, high bug-fix priority)
| Project | Stabilization Target | Blocker |
|:---|:---|:---|
| **CoPaw** | v1.1.4 desktop white screens | MCP TaskGroup hang (#3640) unassigned |
| **NanoClaw** | v2.0.0 headless Linux deployment | Systemd/PATH/docker detection failures |
| **NanoBot** | v0.1.5.post2 streaming + memory | OpenAI Codex `_progress` regression (#3426) |

### Tier 3: Infrastructure Strain (High activity, low merge throughput)
| Project | Strain Symptom | Root Cause |
|:---|:---|:---|
| **Hermes Agent** | 8/50 PRs merged, TUI 13GB memory leak | Nix ecosystem friction, experimental architecture (orchestration, self-evolution) consuming review bandwidth |
| **IronClaw** | 7/50 PRs merged, canary failures | Engine V2 migration + Abound demo PR blocking review queue |
| **ZeroClaw** | 27/50 PRs merged, 6 S1 bugs no PRs | PR recursion pattern (close→reopen) indicates review criteria confusion |

### Tier 4: At-Risk / Bottlenecked
| Project | Risk | Intervention Needed |
|:---|:---|:---|
| **NullClaw** | 11 PRs from single contributor, 0 merges in 7+ days | Maintainer review capacity or merge rights expansion |
| **ZeptoClaw** | Minimal activity, no releases | Clarify project status or archive |
| **TinyClaw** | Zero activity | Confirm dormancy |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **Reasoning model integration is immature** | 6+ projects with active DeepSeek V4 bugs; "thinking" content handling lacks standardization | Design provider-agnostic reasoning abstraction; expect 3-6 months of schema churn |
| **MCP is becoming table stakes** | Universal investment across all Tier 1-2 projects | Prioritize MCP server development for tool discoverability; expect client library consolidation |
| **Enterprise messaging = geographic market entry** | DingTalk, WeChat, QQ, Feishu/Lark demand concentrated in China-focused projects | Channel integration is now a market access question, not feature parity |
| **Voice/multimodal streaming is next battleground** | OpenClaw Phase C (#70380), Moltis push-to-talk (#303), CoPaw preparation | Early mover advantage in latency-sensitive applications; infrastructure-heavy |
| **Sandbox security vs. skill utility tension is unresolved** | ZeroClaw FINOS blockage (#5722), Moltis Landlock (#866), NullClaw restricted shell (#167) | Expect "graduated security" models (trusted skill signing, capability declarations) to emerge |
| **Self-hosted/local model demand is accelerating** | NanoClaw local LLM PRs (#1994-#1995), LobsterAI LM Studio (#1787), PicoClaw embedded focus | Vendor-agnostic endpoint configuration becoming competitive requirement |
| **Credential/secret management is emergent gap** | Moltis plaintext keys (#867), IronClaw TEE deployments, NanoClaw SSL cert failure (#1503) | Projects without robust secret management will fail enterprise security review |
| **"Agent team" positioning is marketing differentiator** | Hermes orchestration (#15422), ZeroClaw multi-agent RFC (#5890), Moltis sub-agent presets (#844) | Multi-agent is becoming expected; single-agent architecture will appear limited |

### Strategic Implication

The ecosystem is **transitioning from "single agent that works" to "agent infrastructure that scales"**—observability, multi-tenancy, cost accounting, and security isolation are replacing raw capability as the primary competitive dimensions. Projects still focused on model provider breadth without investing in operational maturity (NullClaw, ZeptoClaw) risk obsolescence as enterprise adoption accelerates.

---

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-25

## 1. Today's Overview

NanoBot showed **exceptionally high development velocity** on 2026-04-24 with **41 PRs updated** (34 merged/closed, 7 open) and **16 issues active** (10 open, 6 closed). The project demonstrates mature engineering practices with rapid bug-fix turnaround—multiple critical issues opened and resolved within hours. Activity spans infrastructure hardening (timeouts, memory optimization), channel expansion (video support, MSTeams fixes), and model provider compatibility. No new release was cut, suggesting maintainers may be accumulating changes for a v0.1.6 or v0.2.0 milestone. The contributor base appears broad and engaged, with specialized expertise across Telegram, MSTeams, WeChat, and enterprise integrations.

---

## 2. Releases

**None today.**  
The last tracked release appears to be v0.1.5.post2 (referenced in issues), with no new version published. The high volume of merged fixes—particularly memory optimization, deadlock prevention, and provider compatibility—suggests a release may be imminent.

---

## 3. Project Progress

### Merged/Closed PRs Today (Key Items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#3428](https://github.com/HKUDS/nanobot/pull/3428) | yorkhellen | **fix(agent): add LLM request timeout to prevent session lock starvation** | Critical reliability fix—prevents hung LLM calls from deadlocking entire sessions |
| [#3429](https://github.com/HKUDS/nanobot/pull/3429) | Re-bin | **feat(channels): add video support for Telegram and WebSocket** | Rich media expansion; Telegram now streams video inline |
| [#3430](https://github.com/HKUDS/nanobot/pull/3430) | Re-bin | **feat(webui): render video media attachments** | WebUI parity with signed media URLs for security |
| [#3423](https://github.com/HKUDS/nanobot/pull/3423) | mvanhorn | **perf(document): lazy-import heavy document parsers** | ~25 MB memory reduction at startup; fixes [#3422](https://github.com/HKUDS/nanobot/issues/3422) |
| [#3427](https://github.com/HKUDS/nanobot/pull/3427) | boogieLing | **Fix session replay token budgeting + DeepSeek payload normalization** | Production stability for long sessions + DeepSeek compatibility |

**Infrastructure & Quality-of-Life:**
- Multiple closed PRs from chengyongru (security defaults, signal handling, command registry refactor, systemd support, multi-instance gateway) received updates, indicating ongoing maintenance of previously merged features.

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|:---|:---|:---|
| [#3376](https://github.com/HKUDS/nanobot/issues/3376) **Provider/Model Failover** | 7 comments, 👍 1 | **Core infrastructure gap.** Users running multi-provider configs hit single points of failure. Requester explicitly notes nanobot only retries within one provider, not across the pool. High-value feature for production deployments; likely requires architectural changes to provider selection logic. |
| [#3421](https://github.com/HKUDS/nanobot/issues/3421) **`nanobot update` CLI command** | 4 comments | **Developer experience friction.** Manual pip/uv upgrades are error-prone given rapid release cadence. Simple UX win; could leverage existing package metadata or GitHub releases API. |
| [#3344](https://github.com/HKUDS/nanobot/issues/3344) **DingTalk file upload handling** | 4 comments | **Enterprise integration polish.** Message parsing gap in Chinese enterprise messaging platform; affects real-world adoption in PRC markets. |
| [#2049](https://github.com/HKUDS/nanobot/issues/2049) **Missing skill creation ability** (closed) | 13 comments total | **Regression resolved.** Skill-creator tool disappeared in upgrade; closed but indicates feature volatility in skills system. |

**Underlying Need:** Production hardening for multi-tenant, multi-provider, long-running deployments. Community is pushing nanobot from "works on my machine" toward enterprise SLA territory.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **🔴 Critical** | [#3424](https://github.com/HKUDS/nanobot/issues/3424) Agent deadlock on hung LLM calls | **CLOSED** | [#3428](https://github.com/HKUDS/nanobot/pull/3428) | Session lock starvation; agent becomes entirely unresponsive. Fixed with wall-clock timeout. |
| **🟠 High** | [#3410](https://github.com/HKUDS/nanobot/issues/3410) Large RAM consumption in v0.1.5.post2 | **OPEN** | [#3423](https://github.com/HKUDS/nanobot/pull/3423) (partial) | 200 MB → 600 MB; suspected "dream" feature. Lazy imports address ~25 MB; remaining growth needs investigation. |
| **🟠 High** | [#3426](https://github.com/HKUDS/nanobot/issues/3426) OpenAI Codex `_progress` streaming regression | **OPEN** | None yet | Streaming UX broken; final response arrives but no progress deltas. Regression range: v0.1.4.post6 → v0.1.5.post2. |
| **🟡 Medium** | [#3417](https://github.com/HKUDS/nanobot/issues/3417) Anthropic `temperature` hardcoded, rejected by Claude Opus 4.7 | **CLOSED** | (implied in closure) | API compatibility; model deprecated parameter entirely. |
| **🟡 Medium** | [#2568](https://github.com/HKUDS/nanobot/issues/2568) Telegram markdown rendering inconsistency | **OPEN** | None yet | Flaky behavior—works intermittently. Suggests race condition or state-dependent parser issue. |
| **🟡 Medium** | [#3390](https://github.com/HKUDS/nanobot/issues/3390) Tool call error loop | **CLOSED** | Unknown | "Sorry, I encountered an error" cascades; tool executes but response path breaks. |

**Stability Assessment:** Two critical-class fixes landed today (deadlock, memory). Open regressions in streaming and memory suggest v0.1.5.post2 introduced meaningful instability. Recommend patch release after [#3426](https://github.com/HKUDS/nanobot/issues/3426) resolution.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Provider/Model Failover** | [#3376](https://github.com/HKUDS/nanobot/issues/3376) | Medium-High | Production-critical; aligns with existing multi-provider config. Requires provider router refactor. |
| **`nanobot update` CLI** | [#3421](https://github.com/HKUDS/nanobot/issues/3421) | Medium | Low complexity, high UX value. Fits existing CLI pattern (see `nanobot service install`). |
| **Per-chat Telegram policies** | [#3309](https://github.com/HKUDS/nanobot/issues/3309) | Medium | Granular access control; community PR possible given clear scope. |
| **DingTalk file threading** | [#3344](https://github.com/HKUDS/nanobot/issues/3344) | Medium | Enterprise blocker; likely small parser change. |
| **WeChat message limit increase** | [#2772](https://github.com/HKUDS/nanobot/issues/2772) | Low | 10-message cap appears architectural (context_token); may require pagination design. |

**Emerging Theme:** Operational tooling (update, failover, monitoring) maturing alongside core AI features.

---

## 7. User Feedback Summary

### Pain Points
- **Reliability under load:** Deadlocks, memory growth, and streaming regressions indicate v0.1.5.post2 stability debt.
- **Provider fragility:** Single-provider failure kills tasks despite multi-provider configs being standard practice.
- **Enterprise messaging edge cases:** DingTalk message splitting, WeChat limits, MSTeams thread handling all show real-world deployment friction.
- **Upgrade friction:** Manual package management; feature regressions between versions (skill creation, markdown rendering).

### Positive Signals
- **Responsive maintainers:** [#3424](https://github.com/HKUDS/nanobot/issues/3424) opened and fixed same day; [#3422](https://github.com/HKUDS/nanobot/issues/3422) → [#3423](https://github.com/HKUDS/nanobot/pull/3423) same-day turnaround.
- **Rich media expanding:** Video support across Telegram/WebSocket/WebUI shows active UX investment.
- **Security posture improving:** Default-deny access controls, skill scanning, signed URLs.

---

## 8. Backlog Watch

| Item | Age | Risk | Notes |
|:---|:---|:---|:---|
| [#2772](https://github.com/HKUDS/nanobot/issues/2772) WeChat 10-message limit | 22 days | **Stale** | Only 1 comment; no maintainer response. Core limitation for Chinese users. |
| [#2568](https://github.com/HKUDS/nanobot/issues/2568) Telegram markdown flakiness | 28 days | **Active but unassigned** | Intermittent bugs are hardest to diagnose; needs reproduction steps or logging enhancement. |
| [#3309](https://github.com/HKUDS/nanobot/issues/3309) Per-chat Telegram policies | 5 days | **Fresh, needs triage** | Well-scoped RFC; awaiting maintainer assessment. |
| [#3433](https://github.com/HKUDS/nanobot/issues/3433) MSTeams stale ref pruning | 0 days | **New, linked to open PR** | [#3432](https://github.com/HKUDS/nanobot/pull/3432) addresses this; likely resolves quickly. |

**Maintainer Attention Needed:** [#2772](https://github.com/HKUDS/nanobot/issues/2772) risks becoming "accepted limitation" without explicit architectural decision. Consider documenting or prioritizing for v0.2.0 if pagination redesign is required.

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-04-24.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-25

## 1. Today's Overview

Hermes Agent shows **very high development velocity** with 100 items updated in the last 24 hours (50 issues, 50 PRs), though the merge rate remains low at only 8 closed/merged PRs versus 42 still open. The project is experiencing significant **infrastructure strain** — Nix build breakages, TUI memory leaks, and provider API compatibility issues are dominating activity. No new releases were cut, suggesting maintainers are prioritizing stabilization over shipping. The community is notably active around multi-platform gateway fixes (Discord, Telegram, Slack, Feishu) and DeepSeek/Anthropic provider integrations, while experimental plugin architecture work (orchestration, self-evolution) signals ambitious architectural expansion.

---

## 2. Releases

**None** — No new releases published.

---

## 3. Project Progress

### Merged/Closed PRs (8 total, notable items):

| PR | Description | Significance |
|:---|:---|:---|
| [#15418](https://github.com/NousResearch/hermes-agent/pull/15418) | Gateway `/resume` now follows compression continuation chains | Fixes broken session restoration after context compression — critical for long-running gateway sessions |
| [#15420](https://github.com/NousResearch/hermes-agent/pull/15420) | Refresh TUI + web `npmDepsHash` to unblock CI | Unblocks all PRs; Nix infrastructure fix |
| [#15419](https://github.com/NousResearch/hermes-agent/pull/15419) | Add `minimax-oauth` provider with PKCE browser flow | Expands provider ecosystem with proper OAuth |

### Advancing Features:
- **Multi-agent orchestration** ([#15422](https://github.com/NousResearch/hermes-agent/pull/15422)): Parallel/sequential/map-reduce/DAG patterns with mailbox system
- **Self-evolution plugin** ([#15426](https://github.com/NousResearch/hermes-agent/pull/15426)): Nightly automated analysis and strategy optimization
- **VSCode extension** ([#15423](https://github.com/NousResearch/hermes-agent/pull/15423)): Native IDE integration
- **Tool call observability** ([#15429](https://github.com/NousResearch/hermes-agent/pull/15429)): `duration_ms` in `post_tool_call` hooks (Claude Code-inspired)

---

## 4. Community Hot Topics

### Most Active by Engagement:

| # | Item | Comments | 👍 | Underlying Need |
|:---|:---|:---:|:---:|:---|
| [#13626](https://github.com/NousResearch/hermes-agent/issues/13626) | Google Workspace skill broken on Nix (closed) | 4 | 0 | **Reproducible environments vs. dynamic dependency management** — Nix purity conflicts with skills that expect `pip` |
| [#11425](https://github.com/NousResearch/hermes-agent/issues/11425) | Skills lifecycle management | 3 | 2 | **Operational hygiene at scale** — 89+ skills installed, no garbage collection |
| [#411](https://github.com/NousResearch/hermes-agent/issues/411) | Migrate Google Workspace to official `gws` CLI | 3 | 0 | **Reduce maintenance burden** — delegate to upstream Google's Rust CLI with auto-generated API surface |
| [#11524](https://github.com/NousResearch/hermes-agent/issues/11524) | "The AI That Remembers You" positioning RFC | 3 | 0 | **Marketing/positioning strategy** — unusual AI-generated community contribution for star milestone (95k→100k) |
| [#15080](https://github.com/NousResearch/hermes-agent/issues/15080) | Claude Max 20x OAuth tokens rejected with HTTP 400 | 3 | 0 | **Enterprise auth compatibility** — subscription tier detection failing |

**Analysis**: The community is split between **infrastructure hardening** (Nix, auth, memory) and **ecosystem expansion** (skills, providers, platforms). The skills lifecycle issue (#11425) with 2 👍 reflects real production pain from Hermes' plugin model success — users have adopted it heavily but now face operational debt.

---

## 5. Bugs & Stability

| Priority | Issue | Description | Fix PR? |
|:---|:---|:---|:---:|
| **P1** | [#15141](https://github.com/NousResearch/hermes-agent/issues/15141) | **TUI native memory leak**: RSS → 13+ GB in ~40 min (Node.js Ink renderer) | ❌ No — regression from Apr 23-24 commits |
| **P1** | [#15314](https://github.com/NousResearch/hermes-agent/issues/15314) | `hermes-tui` `npmDepsHash` out of date (Nix) | ✅ [#15420](https://github.com/NousResearch/hermes-agent/pull/15420) |
| **P1** | [#15213](https://github.com/NousResearch/hermes-agent/issues/15213) | DeepSeek V4 `reasoning_content` missing in cron/auxiliary path | ❌ No |
| **P1** | [#15353](https://github.com/NousResearch/hermes-agent/issues/15353) | DeepSeek V4 thinking mode: 400 on tool-call messages without `reasoning_content` | ✅ Closed |
| **P1** | [#15415](https://github.com/NousResearch/hermes-agent/issues/15415) | Telegram `/cmd@botname` dropped in groups with `require_mention=true` | ✅ [#15417](https://github.com/NousResearch/hermes-agent/pull/15417) |
| **P2** | [#15421](https://github.com/NousResearch/hermes-agent/issues/15421) | Slack top-level messages create isolated sessions; `sessions.json` not persisting | ❌ No |
| **P2** | [#15236](https://github.com/NousResearch/hermes-agent/issues/15236) | Compressed sessions with corrupted `tool_calls.arguments` brick chats | ✅ Closed |
| **P2** | [#14940](https://github.com/NousResearch/hermes-agent/issues/14940) | Alibaba Coding Plan model switching ignores user config | ✅ Closed |

**Critical concern**: The TUI memory leak (#15141) is a **severe regression** with no fix PR yet, affecting daily usability. DeepSeek V4 thinking mode has **two related P1 bugs** showing incomplete reasoning content propagation across code paths.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| **Skills lifecycle management** (usage tracking, stale detection, auto-cleanup) | [#11425](https://github.com/NousResearch/hermes-agent/issues/11425) | Medium | High engagement, clear operational need, but complex to implement safely |
| **Per-user memory isolation** in group chats | [#11430](https://github.com/NousResearch/hermes-agent/issues/11430) | Medium | Privacy-critical for multi-user deployments; gateway architecture change needed |
| **Agent heartbeat jobs** for supervised projects | [#15400](https://github.com/NousResearch/hermes-agent/issues/15400) | High | Recently closed as completed — likely already in pipeline |
| **Multi-agent orchestration plugin** | [#15422](https://github.com/NousResearch/hermes-agent/pull/15422) | Medium-High | Well-scoped PR with 4 workflow patterns; aligns with "AI team" positioning |
| **Self-evolution plugin** | [#15426](https://github.com/NousResearch/hermes-agent/pull/15426) | Medium | Ambitious but isolated; depends on plugin system maturity |
| **VSCode extension** | [#15423](https://github.com/NousResearch/hermes-agent/pull/15423) | Medium | Competitive parity with Claude/Cursor; large surface area |
| **Generic action buttons/inline keyboards** | [#15311](https://github.com/NousResearch/hermes-agent/issues/15311) | Medium | Platform abstraction gap; Telegram-specific workaround exists |

**Prediction**: The next release will likely emphasize **gateway/platform stability** (Discord end-to-end, Telegram/Slack fixes) and **provider compatibility** (DeepSeek, MiniMax, Anthropic OAuth), with orchestration plugin as headline feature if merged.

---

## 7. User Feedback Summary

### Pain Points:
| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Memory/resource management** | TUI 13GB leak (#15141), unbounded skills growth (#11425), external memory sync pollution (#15218) | 🔴 High |
| **Nix ecosystem friction** | `npmDepsHash` drift (#15314, #15272, #15244), Google Workspace skill unusable (#13626) | 🟡 Medium-High |
| **Provider API drift** | DeepSeek reasoning_content (#15213, #15353), Anthropic OAuth (#15080), Alibaba config ignored (#14940) | 🟡 Medium-High |
| **Session/compression integrity** | Slack isolation (#15421), corrupted tool_calls post-compression (#15236), gateway resume broken (#15418) | 🟡 Medium |
| **Platform-specific edge cases** | Telegram @mention handling (#15415), WeCom image decryption (#11447), QQ Bot WebSocket (#11489, #11493) | 🟢 Medium |

### Satisfaction Signals:
- Strong plugin ecosystem adoption (89+ skills, custom providers)
- Active multi-platform deployment (Discord, Feishu, Slack, Telegram, WeCom, QQ)
- Community contributing ambitious architecture (orchestration, self-evolution)

### Dissatisfaction Signals:
- **"Works on my machine" vs. Nix**: Dynamic language ecosystems (Python npm) poorly served by pure builds
- **Gateway session reliability**: Compression, resumption, and cross-platform context management are fragile
- **Thinking/reasoning mode propagation**: DeepSeek V4 integration incomplete across auxiliary/cron paths

---

## 8. Backlog Watch

| Issue | Age | Problem | Action Needed |
|:---|:---|:---|:---|
| [#411](https://github.com/NousResearch/hermes-agent/issues/411) | ~7 weeks | Google Workspace skill migration to official CLI | Decision: accept breaking change or maintain legacy? |
| [#8993](https://github.com/NousResearch/hermes-agent/issues/8993) | ~2 weeks | Tool calling unstable in v0.8.0 (web_search, FireCrawl hallucination) | Repro needed; may be model-specific prompt engineering |
| [#6673](https://github.com/NousResearch/hermes-agent/issues/6673) | ~2 weeks | Cron scheduler missing `fallback_model` | Simple fix; gap vs. gateway/CLI parity |
| [#11420](https://github.com/NousResearch/hermes-agent/issues/11420) | ~1 week | MiniMax vision backend missing in `auxiliary_client.py` | PR exists? Needs triage |
| [#11489](https://github.com/NousResearch/hermes-agent/issues/11489) / [#11493](https://github.com/NousResearch/hermes-agent/issues/11493) | ~1 week | QQ Bot WebSocket timeout (duplicate issues) | Needs repro info; possibly infrastructure not code |
| [#11560](https://github.com/NousResearch/hermes-agent/issues/11560) | ~1 week | `hermes profile --clone-all` RecursionError | Edge case (recursive symlinks); fix likely straightforward |

**Maintainer attention priority**: The TUI memory leak (#15141) is a **regression blocker** requiring immediate investigation. The duplicate QQ Bot issues suggest triage process gaps. Long-standing #411 represents **strategic technical debt** — maintaining custom Google Workspace integration vs. delegating to official tooling.

---

*Digest generated from 50 issues and 50 PRs updated 2026-04-24 to 2026-04-25.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-25

## 1. Today's Overview

PicoClaw shows **high development velocity** with 38 PRs and 12 issues updated in the last 24 hours, split evenly between open and merged/closed items (19 each). The project released a new nightly build (`v0.2.7-nightly.20260424.f4400472`) as it approaches a likely v0.2.7 stable release. Activity is concentrated around **three critical areas**: (1) reasoning/thinking content handling in chat UI and history persistence, (2) MCP (Model Context Protocol) tool ecosystem hardening, and (3) DeepSeek provider compatibility fixes. The 50% merge rate indicates healthy maintainer throughput, though 19 open PRs suggest some review backlog.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [`v0.2.7-nightly.20260424.f4400472`](https://github.com/sipeed/picoclaw/compare/v0.2.7...main) | Nightly | Automated build from `main`; may be unstable. Pre-release testing for imminent v0.2.7. |

**No stable release today.** The changelog comparison suggests v0.2.7 is in final stabilization. Users on `v0.2.6-launcher` (per #2448) should consider upgrading once stable.

---

## 3. Project Progress

### Merged/Closed PRs (5 items)

| PR | Author | Domain | Summary | Impact |
|---|---|---|---|---|
| [#2641](https://github.com/sipeed/picoclaw/pull/2641) | afjcjsbx | tool, config | **MCP CLI management suite** — full CRUD (`show`, `add`, `list`, `remove`, `test`, `edit`) for MCP servers | Major UX improvement for tool configuration |
| [#2487](https://github.com/sipeed/picoclaw/pull/2487) | SiYue-ZO | build, go | **Windows build flow fixed** — removed Unix-only assumptions from Makefiles | Unblocks Windows developers; pairs with #2651 |
| [#2573](https://github.com/sipeed/picoclaw/pull/2573) | shaun0927 | tool, go | **Isolated launcher locale from web-search routing** | Fixes process-wide state mutation bug |
| [#2256](https://github.com/sipeed/picoclaw/pull/2256) | mateea326 | channel, go | **Hardened WebSocket CheckOrigin** — closes CSWSH vulnerability by default | Security hardening |

### Key Advances
- **MCP ecosystem maturing**: CLI management (#2641) + session lifecycle fixes (#2664) + null-safe tool calls (#2666)
- **Reasoning/think content architecture**: Multiple PRs (#2657, #2661, #2659) addressing how chain-of-thought is stored, displayed, and collapsed
- **Cross-platform stability**: Windows build (#2487) and console flash fix (#2654)

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments/Reactions | Topic | Underlying Need |
|---|---|---|---|
| [#2448](https://github.com/sipeed/picoclaw/issues/2448) | 3 comments, closed | Reasoning leaks into user-facing replies | **Trust/UX**: Users need clear separation of agent internals from outputs; this was a Docker deployment on Synology NAS |
| [#2376](https://github.com/sipeed/picoclaw/issues/2376) | 3 comments, 👍1 | Enter key sends message on Android | **Mobile input ergonomics**: Power users need multi-line composition without accidental send |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | 2 comments, 👍1 | Streaming HTTP requests for LLM backends | **Performance/latency**: Parity with standard OpenAI client behavior for real-time UX |
| [#2651](https://github.com/sipeed/picoclaw/issues/2651) | 2 comments | Windows build instructions | **Onboarding friction**: New contributor barrier; partially addressed by #2487 merge |

### Analysis
The top issues reveal a **mobile-first UX gap** and **deployment diversity** (NAS, Windows, Android). The reasoning display problem (#2448) triggered a cascade of fixes, suggesting this was a systemic architecture issue rather than surface-level bug.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|---|---|---|---|---|
| 🔴 **High** | [#2648](https://github.com/sipeed/picoclaw/issues/2648) | Open | #2657 | DeepSeek 400 error: misordered reasoning/content in history after tool calls — breaks conversation continuity |
| 🔴 **High** | [#2650](https://github.com/sipeed/picoclaw/issues/2650) | Open | None yet | DeepSeek-V4-Flash crashes on skill/exec tool calls with reasoning enabled — reproducible, Fedora 34 |
| 🟡 **Medium** | [#2665](https://github.com/sipeed/picoclaw/issues/2665) | Open | None yet | Anthropic model IDs use dots instead of dashes (e.g., `claude-sonnet-4.6` vs `claude-sonnet-4-6`) — dropdown completely non-functional |
| 🟡 **Medium** | [#2616](https://github.com/sipeed/picoclaw/issues/2616) | Closed | #2573 | DuckDuckGo disabled → web_search tool unregistered; international users blocked |
| 🟡 **Medium** | [#2572](https://github.com/sipeed/picoclaw/issues/2572) | Closed | #2573 | Launcher language change leaked into global web_search provider selection |
| 🟢 **Low** | [#2448](https://github.com/sipeed/picoclaw/issues/2448) | Closed | #2661, #2659 | Reasoning concatenated with reply in WebUI |

**Pattern**: DeepSeek provider has **two active, severe bugs** around reasoning content handling. The #2657 fix PR addresses #2648 but may not cover #2650 (skill/exec specific). Anthropic #2665 is a quick fix likely to be patched before v0.2.7.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in v0.2.7+ | Rationale |
|---|---|---|---|
| **Serial/UART tool support** | [#2649](https://github.com/sipeed/picoclaw/issues/2649) | High | Natural extension of existing I2C/SPI tools; aligns with Sipeed's embedded hardware focus |
| **GitHub Copilot provider** | [#2652](https://github.com/sipeed/picoclaw/issues/2652) | Medium | Popular request, but requires OAuth/legal review; may be v0.2.8 |
| **MQTT channel** | [#2653](https://github.com/sipeed/picoclaw/pull/2653) | High | PR already open; IoT integration fits embedded use cases |
| **Streaming HTTP config** | [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Medium | Simple config addition, but may need broader SSE infrastructure |
| **Delegate tool (cross-agent handoff)** | [#2531](https://github.com/sipeed/picoclaw/pull/2531) | Medium | Phase 2 roadmap item (#2148); significant architecture change |
| **Prompt layering** | [#2656](https://github.com/sipeed/picoclaw/pull/2656) | Medium-High | Internal refactoring; enables future extensibility |

**Prediction**: v0.2.7 will likely include MQTT (#2653), prompt layering (#2656), and reasoning UX fixes. Serial tools (#2649) and delegate tool (#2531) target v0.2.8.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|---|---|---|
| **Reasoning visibility control** | #2448, #2648, #2650, #2661, #2659, #2657 | Critical — affects trust and usability |
| **Mobile input broken** | #2376 | Moderate — Android users blocked from multi-line |
| **Windows as second-class** | #2651, #2487, #2654 | Moderate — build and runtime issues |
| **Provider-specific fragility** | #2665 (Anthropic), #2648/#2650 (DeepSeek) | High — each provider needs bespoke handling |

### Use Cases Emerging
- **Embedded/IoT development**: I2C/SPI/UART tools, MQTT channel — PicoClaw positioning as bridge between LLMs and hardware
- **Self-hosted NAS deployments**: Docker on Synology (#2448) — needs robust, headless operation
- **Multi-agent workflows**: Delegate tool (#2531) — power users orchestrating agent teams

### Satisfaction Signals
- Rapid fix for #2448 (closed same day as active PRs)
- MCP CLI (#2641) shows investment in power-user tooling
- Nightly builds indicate active release engineering

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#1780](https://github.com/sipeed/picoclaw/pull/1780) QQ connection stability | 37 days | Stale | Configurable reconnect/retry — nearly complete but unmerged; may conflict with newer channel architecture |
| [#2163](https://github.com/sipeed/picoclaw/pull/2163) Google Antigravity OAuth | 27 days | Stale | Token refresh scope preservation — niche provider, low priority |
| [#2415](https://github.com/sipeed/picoclaw/pull/2415) Config diagnostics | 18 days | Moderate | Rich JSON parsing errors — valuable for onboarding, needs review |
| [#2531](https://github.com/sipeed/picoclaw/pull/2531) Delegate tool | 10 days | Active | Major feature; may need architectural review given #2656 prompt layering overlap |

**Concern**: #1780 and #2163 are approaching "abandoned PR" territory. If unmaintained, they may bit-rot against refactored channel/provider code. Recommend maintainer triage or contributor ping.

---

*Digest generated from GitHub activity 2026-04-24. All links: https://github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-25

## 1. Today's Overview

NanoClaw shows **very high development velocity** with 37 PRs and 15 issues updated in the last 24 hours, reflecting intense post-v2 release stabilization. The project is in a **critical transition period**: v2 (released 2026-04-22) introduced substantial architectural changes that are generating both adoption friction and rapid iterative fixes. Community activity is robust with multi-party contributions across observability, provider flexibility, and setup reliability. However, the volume of v2-specific setup and configuration bugs suggests the release is still maturing for production use. No new release was cut today, indicating maintainers are likely accumulating fixes for a patch release.

---

## 2. Releases

**No new releases** (v2.0.0 remains current as of 2026-04-22).

---

## 3. Project Progress

### Merged/Closed PRs (26 total; notable advances)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#1992](https://github.com/qwibitai/nanoclaw/pull/1992) | Jeffrey-Keyser | Tool call logging for host-side CEO/ops agents via stream-json parsing | **Observability foundation** — enables `/activity` and `/topology` visibility |
| [#1991](https://github.com/qwibitai/nanoclaw/pull/1991) | Jeffrey-Keyser | Alternative implementation: PostToolUse hooks for host-side agents | Same goal as #1992; indicates iterative refinement on approach |
| [#1980](https://github.com/qwibitai/nanoclaw/pull/1980) | glifocat | Docs: Update CLAUDE.md with current schema + slug-scoped service commands | **Documentation accuracy** for v2 maintainers |
| [#1979](https://github.com/qwibitai/nanoclaw/pull/1979) | glifocat | Docs: Refresh stale `trigger_rules`/`response_scope` terminology | Prevents v1→v2 migration confusion |
| [#1978](https://github.com/qwibitai/nanoclaw/pull/1978) | glifocat | Docs: Add historical banners to pre-v2 architecture references | Reduces onboarding friction |
| [#1977](https://github.com/qwibitai/nanoclaw/pull/1977) | glifocat | Chore: Remove pre-v2 group prompt files | **Cleanup** — removes misleading legacy artifacts |
| [#1967](https://github.com/qwibitai/nanoclaw/pull/1967) | IamAdamJowett | Fix per-provider continuations + agent-route file forwarding | **Correctness** for multi-provider routing |
| [#1965](https://github.com/qwibitai/nanoclaw/pull/1965) | danshapiro | Recover or fail conversational turns with no visible reply | **UX reliability** — prevents "silent success" failures |
| [#1963](https://github.com/qwibitai/nanoclaw/pull/1963) | grtwrn | Fix `/manage-channels` wiring with correct engage fields + native JID handling | **Critical fix** — unblocks channel registration workflow |
| [#4](https://github.com/qwibitai/nanoclaw/pull/4) | gavrielc | **Security fix**: Isolate IPC directories per group to prevent cross-group task data leakage | **Security hardening** — addresses information disclosure vulnerability |

**Key themes**: v2 documentation reconciliation, observability infrastructure, security isolation, and messaging channel reliability.

---

## 4. Community Hot Topics

### Most Active Discussion

| Item | Activity | Analysis |
|:---|:---|:---|
| [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) — nanoclaw.dev invalid SSL cert | **18 comments**, open since 2026-03-28 | **Infrastructure trust issue**. Persistent SSL failure on the project domain undermines credibility for a security-sensitive tool. High comment count suggests repeated user reports without resolution. **Need**: Dedicated infrastructure maintainer or automated cert management. |

### Emerging Provider Flexibility Demand

| Item | Activity | Analysis |
|:---|:---|:---|
| [#1984](https://github.com/qwibitai/nanoclaw/issues/1984) — Custom/local OpenAI-compat endpoints for Codex + OpenCode | 3 comments, new today | **Strategic need**: Users want to bypass vendor lock-in (ChatGPT subscription) for local/self-hosted models (LiteLLM, llama.cpp, vLLM). Documentation claims experimental support but implementation gaps exist. |

**Corresponding active PRs**: [#1995](https://github.com/qwibitai/nanoclaw/pull/1995) and [#1994](https://github.com/qwibitai/nanoclaw/pull/1994) by TeeJS directly address this with per-group custom endpoint routing, npm/no-auth/env-API-key flexibility, and a new `/add-local-llama` skill. This suggests **local/self-hosted AI is a priority use case** for the next release cycle.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---|
| **🔴 High** | [#1982](https://github.com/qwibitai/nanoclaw/issues/1982) | **V2 duplicate replies after second channel pairing** — every Telegram message triggers double responses, breaking usability | ❌ No PR yet |
| **🔴 High** | [#1981](https://github.com/qwibitai/nanoclaw/issues/1981) | **Systemd misdetected as absent on headless Linux** — SSH sessions fail v2 setup entirely | ❌ No PR yet |
| **🟡 Medium** | [#414](https://github.com/qwibitai/nanoclaw/issues/414) | Stale docker group detected but not remediated; service starts then fails | ❌ No PR yet (known since Feb 23) |
| **🟡 Medium** | [#1973](https://github.com/qwibitai/nanoclaw/issues/1973) | `register-claude-token.sh` fails with "onecli not found" — PATH not propagated to bash subprocess | ❌ No PR yet |
| **🟢 Low/Fixed** | [#1971](https://github.com/qwibitai/nanoclaw/issues/1971) | v2 setup verify fails for working CLI-only installs (false negative) | ✅ Closed today |

**Stability assessment**: V2 adoption is hitting **systematic environment detection failures** (systemd, PATH, docker groups) that suggest the setup scripts were tested primarily in interactive/GUI environments, not headless/server deployments. The duplicate reply bug indicates event routing architecture issues in the new channel pairing logic.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release |
|:---|:---|:---|
| **Per-agent provider/model configuration** | [#1968](https://github.com/qwibitai/nanoclaw/pull/1968) — OPEN PR by IamAdamJowett | **High** — 5-commit chain, fully chat-driveable, actively reviewed |
| **Local LLM integration (llama.cpp, vLLM, LiteLLM)** | [#1995](https://github.com/qwibitai/nanoclaw/pull/1995), [#1994](https://github.com/qwibitai/nanoclaw/pull/1994), [#1984](https://github.com/qwibitai/nanoclaw/issues/1984) | **High** — multiple converging PRs, clear user demand |
| **Live agent activity observability** | [#1986](https://github.com/qwibitai/nanoclaw/pull/1986), [#1985](https://github.com/qwibitai/nanoclaw/pull/1985), [#1993](https://github.com/qwibitai/nanoclaw/pull/1993), [#1990](https://github.com/qwibitai/nanoclaw/pull/1990) | **High** — Jeffrey-Keyser iterating rapidly, 4 related PRs |
| **Build tool validation before install** | [#1987](https://github.com/qwibitai/nanoclaw/pull/1987) | **Medium-High** — small, well-scoped fix for common failure mode |
| **Per-group container env var wiring** | [#1983](https://github.com/qwibitai/nanoclaw/pull/1983) | **Medium** — correctness fix for declared-but-unimplemented feature |

**Predicted v2.0.1 or v2.1.0 focus**: Local model support, observability GA, setup robustness for headless Linux.

---

## 7. User Feedback Summary

### Pain Points

| Issue | Frequency | User Impact |
|:---|:---|:---|
| **V2 setup failures on headless/cloud Linux** | Multiple reports (#1981, #1973, #1971) | Blocks Hetzner/DigitalOcean/server deployment — core use case for persistent agents |
| **Documentation/implementation gap for custom endpoints** | #1984 + 2 PRs | "Experimental" features don't actually work; advanced users frustrated |
| **SSL cert on project domain** | #1503, 18 comments, month-old | Erodes trust in security claims |
| **Silent/conversational failures** | #1965 (fixed) | Users can't tell if agent is working |

### Positive Signals

- Active multi-contributor ecosystem (10+ distinct authors in 24h)
- Rapid PR iteration (Jeffrey-Keyser: 4 PRs on same feature in one day)
- Security-conscious community (gavrielc's IPC isolation fix)

### Use Case Evolution

Users are pushing NanoClaw beyond its original "Claude subscription + managed cloud" model toward **self-hosted, multi-model, server-deployed agent infrastructure**. The project architecture is adapting but implementation lag creates friction.

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) SSL cert failure | **28 days** | **Critical trust erosion** | Infrastructure owner intervention; likely needs DNS/certbot automation |
| [#414](https://github.com/qwibitai/nanoclaw/issues/414) Docker group stale detection | **60 days** | Setup reliability on Linux | Simple fix (add `newgrp docker` or fail-fast); PR welcome |
| [#1989](https://github.com/qwibitai/nanoclaw/issues/1989) Upgrade nanoclaw fork to v2 | New, but **architecturally significant** | Fork divergence risk | Maintainer guidance on v2 migration path for external forks |
| [#1982](https://github.com/qwibitai/nanoclaw/issues/1982) Duplicate replies | **New, high severity** | Telegram UX broken | Immediate triage; likely event deduplication logic in v2 routing |

**Maintainer attention needed**: The SSL cert issue is the longest-running unresolved item with highest visibility. The duplicate reply bug is the most severe new v2 regression without a fix in flight.

---

*Digest generated from GitHub activity 2026-04-24. All links: https://github.com/qwibitai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-25

## 1. Today's Overview

NullClaw shows **high development velocity with concentrated contributor activity** — 11 open PRs were updated in the last 24 hours, all from a single contributor (manelsen), with zero merged or closed PRs, suggesting an active development push awaiting review. Issue activity is minimal (2 updated, 1 closed, 1 open). No new releases were published. The project appears to be in a **pre-merge accumulation phase** with significant feature development in progress but bottlenecked on code review bandwidth. The absence of merged PRs despite substantial updates indicates potential maintainer review capacity constraints.

---

## 2. Releases

**No new releases.** The project has no published releases to date.

---

## 3. Project Progress

**No PRs were merged or closed today.** All 11 updated PRs remain open. However, substantial development progress is evident across multiple workstreams:

| PR | Focus Area | Status |
|:---|:---|:---|
| [#836](https://github.com/nullclaw/nullclaw/pull/836) | Agent: trigger-based tool prioritization | Open, updated |
| [#844](https://github.com/nullclaw/nullclaw/pull/844) | A2A: progress hint streaming | Open, updated |
| [#837](https://github.com/nullclaw/nullclaw/pull/837) | Config: external tool customizations file | Open, updated |
| [#840](https://github.com/nullclaw/nullclaw/pull/840) | Skills: nested directory discovery | Open, updated |
| [#841](https://github.com/nullclaw/nullclaw/pull/841) | Agent: `--skill` startup flag | Open, updated |
| [#831](https://github.com/nullclaw/nullclaw/pull/831) | Skills: RFC 0.2.0 compliance + hardened web fetch | Open, updated |
| [#835](https://github.com/nullclaw/nullclaw/pull/835) | Tools: `system_prompt` and `enabled` overrides | Open, updated |
| [#843](https://github.com/nullclaw/nullclaw/pull/843) | Onboard: fix `KeyWriteFailed` crash | Open, updated |
| [#842](https://github.com/nullclaw/nullclaw/pull/842) | Agent/Gateway: `--workspace` flag | Open, updated |
| [#834](https://github.com/nullclaw/nullclaw/pull/834) | Config: tool customization schema | Open, updated |
| [#838](https://github.com/nullclaw/nullclaw/pull/838) | Matrix: pantalaimon E2EE proxy | Open, updated |

**Key architectural themes:** Configuration extensibility (4 PRs), agent runtime control (3 PRs), skills ecosystem maturity (2 PRs), and protocol integrations (Matrix, A2A).

---

## 4. Community Hot Topics

### Most Active Discussion

| Item | Comments | Engagement |
|:---|:---|:---|
| [#167](https://github.com/nullclaw/nullclaw/issues/167) — "why cannot use the shell command 'curl and wget'" | **8 comments** | 👍 1 |
| [#851](https://github.com/nullclaw/nullclaw/issues/851) — gateway busy-loop on Raspberry Pi | 4 comments | 👍 0 |

**Analysis:**

- **[#167](https://github.com/nullclaw/nullclaw/issues/167)** (now closed): The high comment count (8) relative to low reaction count suggests a **confused user needing clarification** rather than broad community interest. The core tension: NullClaw's security model deliberately restricts shell command execution (curl/wget are hard-coded as unavailable), but this isn't clearly communicated to users expecting standard Unix tool availability. **Underlying need:** Better documentation of security boundaries and alternative patterns for HTTP operations within NullClaw's tool framework.

- **[#851](https://github.com/nullclaw/nullclaw/issues/851)**: Represents a **production deployment blocker for ARM/embedded use cases**. The detailed `strace` analysis from the reporter indicates sophisticated debugging effort. **Underlying need:** NullClaw gateway needs robust async I/O handling for resource-constrained environments — the `accept4()` EAGAIN busy-loop is a classic epoll/kqueue configuration error suggesting the networking layer lacks proper edge-triggered handling or fd non-blocking setup verification.

---

## 5. Bugs & Stability

| Severity | Issue | Details | Fix PR? |
|:---|:---|:---|:---|
| **🔴 Critical** | [#851](https://github.com/nullclaw/nullclaw/issues/851) | Gateway CPU spin on idle (100% core usage) on Raspberry Pi 5; `accept4()` EAGAIN loop | **No** — open, no linked PR |
| **🟡 Medium** | [#843](https://github.com/nullclaw/nullclaw/pull/843) | Onboard crash: `KeyWriteFailed` at step 8 when config dir unwritable (Docker/common) | **Yes** — PR open, awaiting merge |

**Stability assessment:** The gateway busy-loop is a **runtime stability bug affecting production deployments** on ARM64, with no fix in flight. The onboard crash has a ready fix ([#843](https://github.com/nullclaw/nullclaw/pull/843)) that should be prioritized for merge. No regressions from today's activity.

---

## 6. Feature Requests & Roadmap Signals

**Strong signals for v-next based on open PR cluster:**

| Feature | Evidence | Likelihood |
|:---|:---|:---|
| **Advanced tool configuration system** | 3 interdependent PRs: [#834](https://github.com/nullclaw/nullclaw/pull/834) (schema), [#835](https://github.com/nullclaw/nullclaw/pull/835) (overrides), [#837](https://github.com/nullclaw/nullclaw/pull/837) (external file) | **Very High** — forms coherent feature set |
| **Agent startup control** | [#841](https://github.com/nullclaw/nullclaw/pull/841) (`--skill`), [#842](https://github.com/nullclaw/nullclaw/pull/842) (`--workspace`) | **High** — CLI ergonomics for automation |
| **Skills ecosystem expansion** | [#831](https://github.com/nullclaw/nullclaw/pull/831) (RFC 0.2.0), [#840](https://github.com/nullclaw/nullclaw/pull/840) (nested discovery) | **High** — positions NullClaw as skill platform |
| **A2A protocol progress streaming** | [#844](https://github.com/nullclaw/nullclaw/pull/844) | **Medium** — emerging standard alignment |
| **Matrix E2EE integration** | [#838](https://github.com/nullclaw/nullclaw/pull/838) | **Medium** — privacy-sensitive deployments |

**Predicted next version focus:** Tool customization framework + agent CLI improvements, with skills infrastructure as secondary theme.

---

## 7. User Feedback Summary

### Pain Points

| Source | Issue | User Impact |
|:---|:---|:---|
| [#851](https://github.com/nullclaw/nullclaw/issues/851) | Gateway CPU burn on ARM/embedded | **Blocks IoT/edge deployments**; Raspberry Pi 5 is popular developer platform |
| [#167](https://github.com/nullclaw/nullclaw/issues/167) | Unexpected shell command restrictions | **Onboarding friction**; security model opaque to new users |
| [#843](https://github.com/nullclaw/nullclaw/pull/843) | Silent crash during Docker onboarding | **First-run failure** in containerized environments |

### Use Case Signals

- **Embedded/edge deployment** (Raspberry Pi): Growing but blocked by stability
- **Docker/containerized operation**: Common but poorly supported (permission assumptions)
- **Skill marketplace/discovery**: Active development suggests anticipated user demand

### Satisfaction/Dissatisfaction

- **Positive:** Rapid feature development, bilingual documentation (EN/CN), active contributor (manelsen)
- **Negative:** Review bottleneck (11 PRs stalled), no releases to consume improvements, production stability gaps on non-x86 platforms

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| **11 open PRs from manelsen** | 6-7 days old | **Review starvation** | Maintainer review or delegation; risk of merge conflicts accumulating |
| [#851](https://github.com/nullclaw/nullclaw/issues/851) gateway CPU spin | 5 days, no response | **Production blocker, no owner** | Triage to networking/gateway maintainer; needs `good first issue` label for community pickup |
| [#167](https://github.com/nullclaw/nullclaw/issues/167) | ~2 months | Low (closed) | Documentation follow-up: add explicit "restricted shell commands" section |

**Critical concern:** The entire active development pipeline is bottlenecked on a single contributor's PRs with no merge activity. This creates **bus factor risk** and may indicate:
- Maintainer absence/availability gap
- Undisclosed merge criteria or quality gates
- Need for additional maintainers with merge rights

**Recommended action:** Project leadership should either expedite review of the ready PR batch or communicate expected timeline to prevent contributor fatigue.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-25

## 1. Today's Overview

IronClaw shows **high-velocity development with stability pressure**. With 50 PRs and 16 issues updated in 24 hours, the project is actively shipping toward a major milestone—likely the Engine V2 architecture. However, **live canary failures** (public-smoke and provider-matrix lanes), **TEE deployment regressions** (routines missing, Telegram bots failing post-upgrade), and **config system bugs** suggest the staging environment is under strain. The ratio of 43 open to 7 merged/closed PRs indicates a backlog building, while multiple "bug_bash_P2" QA tickets reveal organized quality sweeps catching real issues before production.

---

## 2. Releases

**No new releases** (0 releases published).

The project appears to be in a **pre-release stabilization phase**, with CI auto-promoting staging builds (see [PR #2940](https://github.com/nearai/ironclaw/pull/2940)) rather than cutting versioned releases. Latest release remains prior to this period.

---

## 3. Project Progress

### Merged/Closed PRs Today (7 total, 3 highlighted)

| PR | Description | Significance |
|---|---|---|
| [#2952](https://github.com/nearai/ironclaw/pull/2952) | Remove `mission_id` from response; add max/min amount validation | Closed—financial tool hardening for Abound demo |
| [#2463](https://github.com/nearai/ironclaw/pull/2463) | Normalize NEAR AI tool schemas with `normalize_schema_strict()` | Closed—schema normalization parity across providers |
| [#1988](https://github.com/nearai/ironclaw/pull/1988) | Char-boundary-safe truncation for MCP tool descriptions | Closed—UTF-8 safety fix preventing panics on CJK/emoji |
| [#2890](https://github.com/nearai/ironclaw/pull/2890) | Fix empty "Fetch available models" for NEAR AI regional endpoints | Closed—private subdomain classification fix |

### Key Advances

- **Engine V2 architecture**: [PR #2868](https://github.com/nearai/ironclaw/pull/2868) continues `available_actions()` callable-only cleanup for blocked providers, consolidating work from three prior PRs
- **Schema system refactor**: [PR #2951](https://github.com/nearai/ironclaw/pull/2951) extracts shared tool-schema shaping into `src/llm/tool_schema.rs`, creating provider-safe `FlattenOnly` policy for NEAR AI while preserving strict OpenAI/Codex behavior
- **Webhook config decoupling**: [PR #2934](https://github.com/nearai/ironclaw/pull/2934) addresses long-standing architectural debt by separating webhook listener bind address from HTTP channel enablement
- **WASM→Skills migration**: [PR #2904](https://github.com/nearai/ironclaw/pull/2904) replaces 11 WASM API-proxy tools with skill-based HTTP declarations, reducing maintenance surface

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|---|---|---|
| [#2950](https://github.com/nearai/ironclaw/issues/2950) | Fresh issue, architectural | **Separation of concerns in schema normalization**—providers need different strictness levels; current bundled behavior causes 400s or over-normalization |
| [#1741](https://github.com/nearai/ironclaw/issues/1741) | Updated today, epic scope | **OS-like kernel/extension architecture**—community wants runtime-extensible system without full recompilation; DB-backed extension state is the proposed path |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) | Updated today, XL size, high risk | **Abound demo readiness**—production Responses API, credential injection, guardrails; this is a flagship integration blocking likely a partnership announcement |
| [#1344](https://github.com/nearai/ironclaw/issues/1344) | Updated today, P1 enhancement | **Mobile UX overhaul**—current sidebar is unusable on phones; hamburger menu with backdrop/dismissal is table stakes for adoption |

**Analysis**: The community is pulling in two directions—**platform stability** (schema handling, config correctness) and **platform expansion** (kernel architecture, new provider integrations). The Abound demo PR's persistent open state with high risk tag suggests it's a release blocker.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|---|---|---|---|
| **Critical** | [#2929](https://github.com/nearai/ironclaw/issues/2929) Live canary: public-smoke failed (Anthropic) | Open, auto-filed | None visible |
| **Critical** | [#2930](https://github.com/nearai/ironclaw/issues/2930) Live canary: provider-matrix openai-compatible failed | Open, auto-filed | None visible |
| **High** | [#2938](https://github.com/nearai/ironclaw/issues/2938) Routines tab missing after TEE upgrade (fierce-bat) | Open, QA-confirmed | None visible |
| **High** | [#2939](https://github.com/nearai/ironclaw/issues/2939) Telegram bot stops responding after TEE upgrade (happy-owl) | Open, QA-confirmed | None visible |
| **High** | [#2946](https://github.com/nearai/ironclaw/issues/2946) `llm_backend` overwritten on every startup | Open | None visible |
| **Medium** | [#2945](https://github.com/nearai/ironclaw/issues/2945) One-time login link returns "Unauthorized" immediately | Open, QA bug bash | None visible |
| **Medium** | [#2943](https://github.com/nearai/ironclaw/issues/2943) Assistant response after tool calls requires page refresh | Open, QA bug bash | None visible |
| **Medium** | [#2944](https://github.com/nearai/ironclaw/issues/2944) Assistant claims success despite failed extraction/search | Open, QA bug bash | None visible |
| **Medium** | [#2942](https://github.com/nearai/ironclaw/issues/2942) Telegram integration shows MTProto developer config, not user-friendly flow | Open, QA bug bash | None visible |
| **Medium** | [#2949](https://github.com/nearai/ironclaw/issues/2949) Platform detection fails for `x86_64-unknown-linux-gnu` in install script | Open | None visible |

**Regression pattern**: TEE deployments on Railway staging are experiencing **post-upgrade breakage**—routines disappearing, Telegram bots dying. The `llm_backend` reset bug suggests **database migration or config initialization logic** is corrupting user settings. Two canary failures indicate **provider integration fragility** at the CI level.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release |
|---|---|---|
| **Kernel/extension architecture** (DB-backed, runtime-loadable) | [#1741](https://github.com/nearai/ironclaw/issues/1741) | Medium—epic scope, but actively maintained |
| **Cmd+K omnisearch command palette** | [#2335](https://github.com/nearai/ironclaw/pull/2335) | High—client-only, Phase 1 ready |
| **Engine V2 migration CLI** (OpenClaw/Hermes import) | [#2728](https://github.com/nearai/ironclaw/pull/2728) | High—gated behind feature flag, low risk |
| **ClawHub registry disable flag** | [#2727](https://github.com/nearai/ironclaw/pull/2727) | High—simple env var, enterprise need |
| **Aliyun Coding Plan provider** | [#1446](https://github.com/nearai/ironclaw/pull/1446) | Medium—XL PR, new contributor, needs review bandwidth |
| **Mobile responsive redesign** | [#1344](https://github.com/nearai/ironclaw/issues/1344) | Medium-P1 tagged but resource-intensive |
| **Database documentation** (PostgreSQL + libSQL dual backend) | [#2948](https://github.com/nearai/ironclaw/pull/2948) | High—docs-only, community contribution |

**Prediction**: Next release will likely include **Engine V2 CLI migration tools**, **Cmd+K search**, and **config decoupling** (webhook/HTTP separation). The kernel architecture remains aspirational for a subsequent cycle.

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Impact | Frequency Signal |
|---|---|---|
| **Installation blocked** | Linux users can't install via official script | Single report, but complete blocker |
| **Config persistence broken** | `llm_backend` resets every boot, ignoring env/file | Source build users affected |
| **Mobile unusable** | Sidebar unopenable, no backdrop, tiny toggle | P1 enhancement, repeated updates |
| **TEE upgrades destructive** | Features vanish, integrations die post-deploy | Staging QA caught, but pattern is worrying |
| **Auth flow broken** | One-time links immediately unauthorized | New user onboarding blocked |
| **Streaming UX broken** | Tool call responses invisible without refresh | Core chat experience degraded |

### Satisfaction Signals

- Active **bug bash program** (P2 QA tickets) shows organized quality investment
- **Skill-based tool replacement** ([PR #2904](https://github.com/nearai/ironclaw/pull/2904)) suggests maintainability focus
- **Provider compatibility fixes** ([PR #2951](https://github.com/nearai/ironclaw/pull/2951), [#2947](https://github.com/nearai/ironclaw/pull/2947)) show responsiveness to integration friction

**Overall**: Users on **hosted staging** are experiencing **regression turbulence** from rapid TEE iteration. **Self-hosters** hit install and config issues. The project is **feature-rich but stabilization-lagging**.

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|---|---|---|---|
| [#1344](https://github.com/nearai/ironclaw/issues/1344) Mobile redesign | 38 days | P1, scope:channel/web | UX design review, frontend bandwidth |
| [#1741](https://github.com/nearai/ironclaw/issues/1741) Kernel architecture | 27 days | Epic, multi-scope | Architectural decision, likely blocked on Engine V2 completion |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) Aliyun provider | 36 days | XL, new contributor, high risk | Maintainer review, CI validation, likely rebase |
| [#1435](https://github.com/nearai/ironclaw/pull/1435) pdf-extract→pdf_oxide | 37 days | XL, dependencies | Performance validation, regression testing on PDF pipeline |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) Abound demo | 26 days | XL, high risk, multi-scope | **Release blocker attention**—needs final review, credential injection security audit |
| [#1989](https://github.com/nearai/ironclaw/pull/1989) Shell workdir fallback | 21 days | L, medium risk | Simple fix, likely review-starved |

**Critical attention needed**: The **Abound demo PR** ([#1764](https://github.com/nearai/ironclaw/pull/1764)) has been open 26 days with high risk tag and multi-scope changes—this is likely gating a business milestone. The **kernel architecture issue** ([#1741](https://github.com/nearai/ironclaw/issues/1741)) is the most-upvoted long-term direction but needs Engine V2 foundation to complete first.

---

*Digest generated from GitHub activity 2026-04-24. All links: https://github.com/nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-25

## 1. Today's Overview

LobsterAI shows **exceptionally high development velocity** with 42 PRs merged/closed in the last 24 hours and zero open PRs, indicating a well-oiled CI/CD pipeline and active maintainer team. The project released two versions in two days (2026.4.23 and 2026.4.24), with the latest adding DeepSeek V4 model support. However, **community issue resolution lags behind code velocity**—3 issues remain open with no closed issues today, including a fresh bug report about DeepSeek V4 failing at runtime despite being added in the latest release. The contributor pattern shows heavy reliance on two core maintainers (`liuzhq1986` and `liugang519`), with `btc69m979y-dotcom` emerging as a significant contributor on skills/memory features.

---

## 2. Releases

### [LobsterAI 2026.4.24](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.24) (Latest)
| Aspect | Details |
|--------|---------|
| **New Models** | Added `deepseek-v4-flash`, `deepseek-v4-pro`, and `kimi-k2.6` provider support via [PR #1812](https://github.com/netease-youdao/LobsterAI/pull/1812) |
| **UI Polish** | Search query whitespace trimming/normalization + clear button in skills/MCP interface via [PR #1811](https://github.com/netease-youdao/LobsterAI/pull/1811) |

**⚠️ Breaking/Regression Risk:** DeepSeek V4 support may have schema compatibility issues—see [Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813) reported same day as release.

### [LobsterAI 2026.4.23](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.23)
| Aspect | Details |
|--------|---------|
| **Auth Fix** | Corrected `UserProfile` fields and added `userId` to update check requests via [PR #1784](https://github.com/netease-youdao/LobsterAI/pull/1784) |
| **Telemetry** | Added version field to update requests via [PR #1785](https://github.com/netease-youdao/LobsterAI/pull/1785) |

---

## 3. Project Progress

### Key Merged PRs (42 total, all closed)

| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#1812](https://github.com/netease-youdao/LobsterAI/pull/1812) | Providers | Added DeepSeek V4 (flash/pro) and Kimi K2.6 models | **Major capability expansion** |
| [#1810](https://github.com/netease-youdao/LobsterAI/pull/1810) | Memory/Settings | Embedding configuration for memory search with remote providers (OpenAI, Gemini) | Enables production memory features |
| [#1815](https://github.com/netease-youdao/LobsterAI/pull/1815) | Skills | Removed `~/.claude/skills` from discovery roots; fixed runtime path mismatch | **Stability fix**—eliminates "skill not found" errors |
| [#1814](https://github.com/netease-youdao/LobsterAI/pull/1814) | Cowork/DiffView | Restored DiffView for edit tool's `edits` array format | Code review UX restored |
| [#1816](https://github.com/netease-youdao/LobsterAI/pull/1816) | Cowork/UI | Aligned quick actions width with homepage input box (max-w-3xl) | Visual consistency |
| [#1803](https://github.com/netease-youdao/LobsterAI/pull/1803) | RPC/Reliability | Increased `chat.send` timeout 30s→90s; added 10s warning threshold | Fixes gateway initialization race condition |
| [#1798](https://github.com/netease-youdao/LobsterAI/pull/1798) | Gateway | Disabled auto-restart on focus/blur events | Reduces unnecessary gateway churn |
| [#1787](https://github.com/netease-youdao/LobsterAI/pull/1787) | Models | LM Studio local model support | Self-hosted model flexibility |
| [#1792](https://github.com/netease-youdao/LobsterAI/pull/1792), [#1794](https://github.com/netease-youdao/LobsterAI/pull/1794) | IM/Bots | Telegram and Discord multi-robot support | Enterprise deployment scaling |

**Thematic focus:** Model provider expansion (DeepSeek, Kimi, LM Studio), IM platform scaling (multi-bot), memory infrastructure maturation, and reliability hardening (RPC timeouts, gateway lifecycle).

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| **[Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813)** — DeepSeek V4 "LLM request failed: provider rejected the request schema or tool payload" | 🔥 **Hottest** — Created and updated 2026-04-24, 1 comment | **Release-day regression**: Newly added DeepSeek V4 models fail with schema/tool payload rejection. Suggests incomplete testing of tool-calling schema compatibility before release. User `Sun-Ke` provided screenshot evidence. |
| **[Issue #38](https://github.com/netease-youdao/LobsterAI/issues/38)** — "有没有节省tokens和请求数量的方法？" (Token/request optimization?) | [stale] Updated 2026-04-24, created 2026-02-22 | **Cost optimization demand** — 2-month-old feature request resurfacing. No maintainer response. Indicates user concern about API costs at scale. |
| **[Issue #41](https://github.com/netease-youdao/LobsterAI/issues/41)** — Playwright skill documentation/code mismatch | [stale] Updated 2026-04-24, created 2026-02-22 | **Documentation debt** — `playwright-cli` documented but `playwright-mcp` used in script. Confuses skill developers. |

**Underlying needs:** (1) Pre-release integration testing for new model providers, especially tool-calling schemas; (2) Cost transparency/optimization features; (3) Documentation accuracy for skill development.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **🔴 Critical** | [Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813): DeepSeek V4 runtime failure — schema/tool payload rejected | **Open, unassigned** | ❌ None yet; introduced by [PR #1812](https://github.com/netease-youdao/LobsterAI/pull/1812) |
| **🟡 Medium** | [PR #1815](https://github.com/netease-youdao/LobsterAI/pull/1815): `~/.claude/skills` path mismatch causing "skill not found" | **Fixed** | ✅ Merged 2026-04-24 |
| **🟡 Medium** | [PR #1814](https://github.com/netease-youdao/LobsterAI/pull/1814): DiffView broken for edit tool's `edits` array format | **Fixed** | ✅ Merged 2026-04-24 |
| **🟢 Low** | [PR #1803](https://github.com/netease-youdao/LobsterAI/pull/1803): Gateway race condition causing 30s timeouts | **Fixed** | ✅ Merged 2026-04-23 |

**Stability assessment:** One **release-day regression** is active and unaddressed. The pattern of "add feature → immediate bug report" for DeepSeek V4 suggests insufficient integration test coverage for new provider schemas. Gateway and skill runtime fixes show proactive reliability work.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Release |
|--------|--------|---------------------------|
| **Token usage optimization/cost controls** | [Issue #38](https://github.com/netease-youdao/LobsterAI/issues/38) | Medium — User demand clear, but no PR activity |
| **Better skill documentation & CLI consistency** | [Issue #41](https://github.com/netease-youdao/LobsterAI/issues/41) | High — Low-effort docs fix, affects developer onboarding |
| **Extended context/memory improvements** | [PR #1810](https://github.com/netease-youdao/LobsterAI/pull/1810) embedding config | **Shipped** — Foundation laid for advanced memory |
| **More local/self-hosted model options** | [PR #1787](https://github.com/netease-youdao/LobsterAI/pull/1787) LM Studio | **Shipped** — Trend toward deployment flexibility |
| **Multi-platform IM expansion** | [PR #1792](https://github.com/netease-youdao/LobsterAI/pull/1792), [#1794](https://github.com/netease-youdao/LobsterAI/pull/1794) | **In progress** — Slack/Teams likely next |

**Predicted near-term roadmap:** Fix DeepSeek V4 schema issue, expand embedding provider ecosystem, add remaining enterprise IM platforms (Slack, Teams, Feishu), and address cost optimization requests.

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | Severity |
|-------|-----------|----------|
| **New model integration fragility** | One clear instance (#1813) | High — blocks adoption of advertised feature |
| **API cost opacity** | One request (#38), likely underreported | Medium — affects sustainable usage |
| **Skill development friction** | One report (#41) | Low-Medium — documentation fixable |
| **Gateway timeout/reliability** | Fixed in #1803 | Improving |

### Use Cases Emerging
- **Enterprise multi-bot deployment**: Telegram/Discord multi-robot PRs suggest LobsterAI is being deployed as organization-wide infrastructure, not personal assistant
- **Hybrid cloud/local AI**: LM Studio + remote embedding configuration shows users want data sovereignty options
- **Code-heavy workflows**: DiffView fixes and cowork features indicate software development as primary use case

### Satisfaction/Dissatisfaction
- ✅ **Satisfied with**: Release cadence, model provider breadth, UI polish responsiveness
- ❌ **Dissatisfied with**: Release quality assurance (Day-0 bugs), documentation accuracy, cost transparency

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [Issue #38](https://github.com/netease-youdao/LobsterAI/issues/38) Token optimization | 62 days | User cost concerns may drive churn | Acknowledge, research token compression strategies or usage dashboards |
| [Issue #41](https://github.com/netease-youdao/LobsterAI/issues/41) Playwright skill docs | 62 days | Developer onboarding friction | Trivial docs fix—should be prioritized |
| [PR #5](https://github.com/netease-youdao/LobsterAI/pull/5) ESLint configuration | 65 days | Code quality tooling debt | Large PR (269 lint issues); may need rebase after 2 months of active development |

**Maintainer attention gap:** 100% of open issues are stale (60+ days) with zero maintainer comments. The rapid PR merge rate (42/day) contrasts with issue neglect, suggesting **process imbalance**—consider triage automation or dedicated issue response time SLAs.

---

*Digest generated from GitHub activity 2026-04-24. All links: https://github.com/netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-25

## 1. Today's Overview

Moltis demonstrated **exceptionally high development velocity** with 31 PRs updated in 24 hours (29 merged/closed, 2 open) and 10 issues processed (7 closed, 3 remaining open). The project shows **strong maintainer bandwidth** with rapid same-day turnaround on critical fixes—particularly the heartbeat re-fire loop (#858/#863) and Fireworks AI compatibility (#848/#862). No new releases were cut, suggesting the team is accumulating changes for a larger version bump. Security hardening is emerging as a priority theme with Landlock sandboxing advancing and a fresh plaintext credential storage concern surfaced. The 93% PR merge rate indicates healthy code review flow with minimal backlog accumulation.

---

## 2. Releases

**No new releases** published as of 2026-04-25.

---

## 3. Project Progress

### Major Features Merged

| PR | Description | Impact |
|:---|:---|:---|
| [#470](https://github.com/moltis-org/moltis/pull/470) | Tool execution witness recording + zkperf-service integration | Audit trail infrastructure for agent accountability |
| [#791](https://github.com/moltis-org/moltis/pull/791) | Extract `moltis-splitter` crate for AST-aware chunking | Modular architecture; 15 language tree-sitter support |
| [#840](https://github.com/moltis-org/moltis/pull/840) | MCP server management skill + post-install recipes | Agent-native DevOps tooling ecosystem |
| [#844](https://github.com/moltis-org/moltis/pull/844) | Default sub-agent presets + session-scoped Modes | Zero-config multi-agent workflows |
| [#865](https://github.com/moltis-org/moltis/pull/865) | Discord channel pattern filtering + per-pattern overrides | Enterprise Discord deployment control |
| [#864](https://github.com/moltis-org/moltis/pull/864) | Layered config (`defaults.toml` + override-only user config) | Breaking config UX change—prevents drift |
| [#303](https://github.com/moltis-org/moltis/pull/303) | Push-to-talk, VAD continuous listening, voice settings | Production voice input parity with competitors |
| [#339](https://github.com/moltis-org/moltis/pull/339) | zh-TW Traditional Chinese locale | APAC accessibility expansion |
| [#745](https://github.com/moltis-org/moltis/pull/745) | Nix Flake support | Reproducible builds; NixOS ecosystem entry |

### Critical Fixes Merged

| PR | Fixes | Description |
|:---|:---|:---|
| [#863](https://github.com/moltis-org/moltis/pull/863) | [#858](https://github.com/moltis-org/moltis/issues/858) | Heartbeat wake cooldown prevents exec re-fire loop |
| [#862](https://github.com/moltis-org/moltis/pull/862) | [#848](https://github.com/moltis-org/moltis/issues/848) | Strip null from enum arrays for Fireworks AI compatibility |
| [#861](https://github.com/moltis-org/moltis/pull/861) | — | Materialize bundled skill scripts to disk (execution fix) |

### Infrastructure & Maintenance
- **4 AutoDoc batches** ([#783](https://github.com/moltis-org/moltis/pull/783), [#789](https://github.com/moltis-org/moltis/pull/789), [#799](https://github.com/moltis-org/moltis/pull/799), [#800](https://github.com/moltis-org/moltis/pull/800), [#802](https://github.com/moltis-org/moltis/pull/802)): 44+ docs audited via "rotisserie" automated system
- Dependency bumps: `openssl` 0.10.75→0.10.78, `rand` updates ([#845](https://github.com/moltis-org/moltis/pull/845))

---

## 4. Community Hot Topics

### Most Active Discussion: [#176](https://github.com/moltis-org/moltis/issues/176) — Add datetime to system prompt context
- **18 comments**, created Feb 17, closed Apr 24
- **Underlying need**: Temporal grounding for agents; users want agents to understand "now" without hallucinating dates. Long discussion suggests this touched on deeper architectural questions about context window management and system prompt injection safety.

### Emerging Technical Debates

| Item | Activity | Signal |
|:---|:---|:---|
| [#869](https://github.com/moltis-org/moltis/pull/869) Obscura browser backend | New, open | Community interest in lightweight browser alternatives to Chromium; sidecar pattern reduces dependency bloat |
| [#866](https://github.com/moltis-org/moltis/pull/866) Landlock FS isolation | New, open | Kernel-level security hardening; signals enterprise readiness push |

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **Critical** | [#858](https://github.com/moltis-org/moltis/issues/858) Heartbeat re-fires in tight loop during exec | **CLOSED** | [#863](https://github.com/moltis-org/moltis/pull/863) | Agent livelock risk; fixed same day with cooldown mechanism |
| **High** | [#867](https://github.com/moltis-org/moltis/issues/867) Voice API keys in plaintext in `moltis.toml` | **OPEN** | — | Security regression; no fix yet. Affects all voice providers (ElevenLabs, OpenAI Whisper) |
| **Medium** | [#848](https://github.com/moltis-org/moltis/issues/848) Fireworks AI JSON Schema `null` enum rejection | **CLOSED** | [#862](https://github.com/moltis-org/moltis/pull/862) | Provider compatibility; strict mode schema generation too aggressive |
| **Medium** | [#857](https://github.com/moltis-org/moltis/issues/857) Silent memory turn saves with wrong dates | **CLOSED** | — | Data integrity issue in memory persistence |
| **Medium** | [#828](https://github.com/moltis-org/moltis/issues/828) Docker sandbox fails on WSL2 missing `/sys/class/dmi` | **CLOSED** | — | Windows/WSL2 compatibility gap |
| **Low** | [#776](https://github.com/moltis-org/moltis/issues/776) `task_list.list` bug | **CLOSED** | — | Minor API surface issue |
| **Low** | [#344](https://github.com/moltis-org/moltis/issues/344) Vault sealed UX is poor | **CLOSED** | — | Error messaging improvement |

**Stability assessment**: Rapid fix velocity is excellent, but [#867](https://github.com/moltis-org/moltis/issues/867) plaintext credential storage is a **live security vulnerability** requiring immediate attention.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Landlock debug logging** | [#868](https://github.com/moltis-org/moltis/issues/868) | High | Complements [#866](https://github.com/moltis-org/moltis/pull/866); observability gap in security feature |
| **Obscura browser backend** | [#869](https://github.com/moltis-org/moltis/pull/869) | High | Zero new Rust deps, sidecar pattern aligns with architecture; community contribution |
| **Credential encryption/secret management** | [#867](https://github.com/moltis-org/moltis/issues/867) | **Critical priority** | Security blocker; likely expedited |
| **Non-auto-scrolling chat** | [#824](https://github.com/moltis-org/moltis/issues/824) | Medium | UX polish; low complexity |
| **Datetime in system prompt** | [#176](https://github.com/moltis-org/moltis/issues/176) | Completed | Shipped (closed as completed) |

**Architectural direction**: Security hardening (Landlock, credential protection), modular browser backends, and voice input maturity are converging toward an enterprise-readiness release.

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Impact | Severity |
|:---|:---|:---|
| Plaintext API keys in config ([#867](https://github.com/moltis-org/moltis/issues/867)) | Blocks security-conscious deployments; compliance risk | **Critical** |
| Heartbeat/exec interaction ([#858](https://github.com/moltis-org/moltis/issues/858)) | Agent instability, CPU thrashing | High (fixed) |
| WSL2 Docker sandbox failure ([#828](https://github.com/moltis-org/moltis/issues/828)) | Windows dev environment friction | Medium (fixed) |
| Fireworks AI incompatibility ([#848](https://github.com/moltis-org/moltis/issues/848)) | Provider lock-in concern, schema portability | Medium (fixed) |

### Positive Signals
- **Config layering** ([#864](https://github.com/moltis-org/moltis/pull/864)) addresses long-standing config drift complaints
- **Sub-agent presets** ([#844](https://github.com/moltis-org/moltis/pull/844)) reduce onboarding friction for multi-agent setups
- **Nix support** ([#745](https://github.com/moltis-org/moltis/pull/745)) and **zh-TW** ([#339](https://github.com/moltis-org/moltis/pull/339)) show community scaling
- **Voice input modes** ([#303](https://github.com/moltis-org/moltis/pull/303)) demonstrate competitive feature parity

### Use Case Expansion
Discord enterprise filtering ([#865](https://github.com/moltis-org/moltis/pull/865)) and MCP server management ([#840](https://github.com/moltis-org/moltis/pull/840)) indicate **platform/agent-as-a-service** deployments beyond personal assistant use.

---

## 8. Backlog Watch

### Requires Immediate Attention

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#867](https://github.com/moltis-org/moltis/issues/867) Plaintext voice API keys | **0 days** (just reported) | Security CVE potential; user trust erosion | Design secret management architecture (keyring? encrypted store? env var override?) |
| [#868](https://github.com/moltis-org/moltis/issues/868) Landlock debug logging | 0 days | Observability gap in security feature | Straightforward; could pair with [#866](https://github.com/moltis-org/moltis/pull/866) merge |

### Monitoring
- No stale high-priority issues detected; 7/10 issues closed within 24h of update suggests healthy triage
- [#869](https://github.com/moltis-org/moltis/pull/869) Obscura backend: evaluate sidecar pattern maintenance burden vs. dependency reduction benefit

---

*Digest generated from github.com/moltis-org/moltis activity through 2026-04-24.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-25

## 1. Today's Overview

CoPaw (QwenPaw) shows **very high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, alongside 2 new releases (v1.1.4 and v1.1.4.post1). The project is actively stabilizing following the v1.1.4 release, with a notable **build system regression** (Vite upgrade reverted) and multiple **critical desktop client issues** (white screen problems) being addressed rapidly. The 28 open vs. 22 closed issues ratio indicates healthy triage, while 35 merged/closed PRs against 15 open shows strong maintainer throughput. The community remains highly engaged with substantial Chinese-language participation, reflecting the project's domestic market strength.

---

## 2. Releases

### [v1.1.4](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.4) — Major Memory System Refactor
**Key Changes:**
- **Memory & Context Refactor** ([#3548](https://github.com/agentscope-ai/QwenPaw/pull/3548)): Complete overhaul of long-term memory with:
  - Pluggable backend architecture
  - Automatic memory summarization every N conversation turns
  - Automatic memory retrieval
  - New context management interface

### [v1.1.4.post1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.4.post1) — Hotfix Release
- **feat(memory)**: CJK-aware query tokenization for memory search — improves Chinese/Japanese/Korean search accuracy ([#3811](https://github.com/agentscope-ai/QwenPaw/pull/3811))
- **Revert**: Vite upgrade from v6 to v8 rolled back due to build stability issues ([#3712](https://github.com/agentscope-ai/QwenPaw/pull/3712))

**⚠️ Breaking Changes / Migration Notes:**
- Memory module API changed significantly; custom memory integrations require updates
- Desktop users on v1.1.4 experiencing white screens should upgrade to v1.1.4.post1 or downgrade to v1.1.3post1

---

## 3. Project Progress

### Merged/Closed PRs Today (35 total, key highlights):

| PR | Author | Description | Impact |
|:---|:---|:---|:---|
| [#3811](https://github.com/agentscope-ai/QwenPaw/pull/3811) | jinliyl | CJK-aware query tokenization for memory search | **High** — Fixes search for East Asian languages |
| [#3812](https://github.com/agentscope-ai/QwenPaw/pull/3812) | zhijianma | Revert Vite v6→v8 upgrade | **Critical** — Fixes build stability regression |
| [#3797](https://github.com/agentscope-ai/QwenPaw/pull/3797) | qbc2016 | Add DeepSeek v4 models | **High** — New model support |
| [#3794](https://github.com/agentscope-ai/QwenPaw/pull/3794) | qbc2016 | Fix empty thinking content in DeepSeek assistant messages | **High** — Fixes multi-turn reasoning failures |
| [#3790](https://github.com/agentscope-ai/QwenPaw/pull/3790) | hongxicheng | Stop exposing local file paths in DingTalk messages | **Security** — Privacy fix |
| [#3778](https://github.com/agentscope-ai/QwenPaw/pull/3778) | hongxicheng | Add `cron_message_type` for DingTalk scheduled messages | **Medium** — Feature parity for cron jobs |
| [#3786](https://github.com/agentscope-ai/QwenPaw/pull/3786) | qbc2016 | Avoid passing file blocks to Anthropic API | **High** — Fixes 400 errors with Claude |
| [#3781](https://github.com/agentscope-ai/QwenPaw/pull/3781) | gnipping | Default shell invasion disable + Windows path support | **Security** — Hardening |
| [#3766](https://github.com/agentscope-ai/QwenPaw/pull/3766) | zhijianma | Async buffered token usage recording | **Performance** — Reduces API call overhead |
| [#3740](https://github.com/agentscope-ai/QwenPaw/pull/3740) | huangrichao2020 | Built-in agent audit workflow skill | **Medium** — Compliance/observability |
| [#3758](https://github.com/agentscope-ai/QwenPaw/pull/3758) | YingchaoX | Normalize missing builtin tool icons | **Fix** — Backward compatibility |
| [#3803](https://github.com/agentscope-ai/QwenPaw/pull/3803) | zhijianma | Version bump to 1.1.5b1 | **Preparation** — Next dev cycle |

**Themes:** Memory system maturation, DeepSeek v4 integration, security hardening, and rapid response to v1.1.4 desktop regressions.

---

## 4. Community Hot Topics

### Most Active Issues by Engagement:

| # | Status | Title | Comments | Analysis |
|:---|:---|:---|:---|:---|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | **OPEN** | 🐾 Help Wanted: Open Tasks — Come Contribute! | **60** | **Meta-coordination hub** — Sustained community onboarding mechanism; indicates healthy contributor growth but also maintainer bandwidth constraints (tasks unclaimed for weeks) |
| [#3753](https://github.com/agentscope-ai/QwenPaw/issues/3753) | OPEN | When will Volcano Coding Plan default support be added? | 7 | **Vendor integration demand** — ByteDance/Volcano engine user; reflects enterprise adoption in China |
| [#3489](https://github.com/agentscope-ai/QwenPaw/issues/3489) | CLOSED | Fix Anthropic-compatible API 400 BadRequestError | 5 | **Ecosystem compatibility** — Third-party Claude providers (Kimi, etc.) message format issues; fixed via [#3786](https://github.com/agentscope-ai/QwenPaw/pull/3786) |
| [#3742](https://github.com/agentscope-ai/QwenPaw/issues/3742) | CLOSED | DingTalk >3500 char markdown failure + cron segmentation | 5 | **Enterprise messaging limits** — DingTalk API constraints; fixed with independent cron message type |
| [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) | OPEN | MCP client TaskGroup exception causing agent hang | 5 | **Critical stability** — Agent deadlock without error; no fix PR yet |

**Underlying Needs:** Enterprise channel integrations (DingTalk, Volcano), MCP ecosystem stability, and clearer contributor pathways.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#3815](https://github.com/agentscope-ai/QwenPaw/issues/3815), [#3807](https://github.com/agentscope-ai/QwenPaw/issues/3807) — Desktop v1.1.4 white screen | **CLOSED** | [#3812](https://github.com/agentscope-ai/QwenPaw/pull/3812) (Vite revert) | Browser + desktop both blank; Uvicorn runs but frontend fails to load. **Root cause:** Vite v8 build issue. Fixed in v1.1.4.post1 |
| 🔴 **Critical** | [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) — MCP client TaskGroup hang | **OPEN** | None yet | Agent becomes unresponsive without error; affects production reliability. **Needs urgent attention** |
| 🟡 **High** | [#3782](https://github.com/agentscope-ai/QwenPaw/issues/3782) — DeepSeek v4 `reasoning_content` not passed back | **CLOSED** | [#3794](https://github.com/agentscope-ai/QwenPaw/pull/3794) | Multi-turn conversations fail with 400 error |
| 🟡 **High** | [#3760](https://github.com/agentscope-ai/QwenPaw/issues/3760) — DingTalk file send leaks path + loses filename | **CLOSED** | [#3790](https://github.com/agentscope-ai/QwenPaw/pull/3790) | Privacy + usability issue |
| 🟡 **High** | [#3818](https://github.com/agentscope-ai/QwenPaw/issues/3818) — Fresh Linux install crashes on first message | **OPEN** | None yet | Installation script completes but runtime fails; may be config initialization |
| 🟡 **High** | [#3702](https://github.com/agentscope-ai/QwenPaw/issues/3702) — Skill pool persistent errors | **OPEN** | None yet | Blocks core functionality |
| 🟢 **Medium** | [#3808](https://github.com/agentscope-ai/QwenPaw/issues/3808) — MCP enables → macOS Dock shows Python icon | **OPEN** | None yet | Branding/UX issue; subprocess identity leak |
| 🟢 **Medium** | [#3555](https://github.com/agentscope-ai/QwenPaw/issues/3555) — Windows Desktop hangs at "Waiting for HTTP ready..." | **OPEN** | None yet | 300s timeout; networking/startup race condition |
| 🟢 **Medium** | [#3775](https://github.com/agentscope-ai/QwenPaw/issues/3775) — VLLM + Qwen3.6-35B-A3B-FP8 premature cutoff | **OPEN** | None yet | Unclear if model, vLLM, or CoPaw issue |

**Regression Pattern:** v1.1.4 desktop release introduced multiple white screen/failure modes; rapid hotfix shows responsive team but insufficient pre-release testing on desktop builds.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| [#3752](https://github.com/agentscope-ai/QwenPaw/issues/3752) — Context menus (right-click) in Desktop/Web | **High** | Simple UX win; console-focused |
| [#2975](https://github.com/agentscope-ai/QwenPaw/issues/2975) — Markdown rendering for user messages | **High** | Symmetry with AI responses; low complexity |
| [#3774](https://github.com/agentscope-ai/QwenPaw/issues/3774) — Console timestamps per message | **High** | PR [#3603](https://github.com/agentscope-ai/QwenPaw/pull/3603) already in progress |
| [#3814](https://github.com/agentscope-ai/QwenPaw/issues/3814) — Workspace sandbox mechanism (like Claude Code) | **Medium** | Security trend; user already prototyped |
| [#2225](https://github.com/agentscope-ai/QwenPaw/issues/2225) — Async agent communication with callbacks | **Medium** | Architecture change; requested since March |
| [#3753](https://github.com/agentscope-ai/QwenPaw/issues/3753) — Volcano Coding Plan default support | **Medium** | Enterprise demand; vendor negotiation likely |
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) — Discord thread creation for cron jobs | **Medium** | Under review; community PR |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) — Semantic skill routing via embeddings | **Medium** | Performance optimization; needs discussion |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) — Tauri 2.x desktop replacement | **Medium** | First-time contributor; replaces Electrobun |

**Emerging Theme:** Desktop experience polish (timestamps, context menus, markdown) and security sandboxing are converging toward a v1.2.0 quality milestone.

---

## 7. User Feedback Summary

### 😤 Pain Points (High Friction)

| Issue | Frequency | User Impact |
|:---|:---|:---|
| Desktop white screen / blank window | **Repeated** (3+ reports in 24h) | Complete inability to use application |
| Fresh install crashes immediately | New in v1.1.4 | Onboarding failure; user attrition risk |
| MCP-related hangs and icon leaks | Growing | Ecosystem integration feels "beta" |
| Skill pool persistent errors | Ongoing | Core value proposition degraded |
| Windows-specific path/file handling | Recurring | Cross-platform parity gaps |

### 😊 Satisfaction Drivers

- **Rapid response to critical issues**: White screen fixed within 24h via hotfix
- **Memory system improvements**: Long-term memory refactor well-received
- **Chinese enterprise integrations**: DingTalk, Volcano, DeepSeek support shows local market commitment
- **Contributor onboarding**: #2291 task list lowers barrier to entry

### Use Case Signals

- **Enterprise automation**: Cron jobs, scheduled reports, multi-channel dispatch (DingTalk priority)
- **Multi-agent orchestration**: Stock monitoring example (#2225) shows financial services interest
- **Local/private deployment**: VLLM + Qwen3.6 self-hosting indicates data sovereignty requirements

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention (>7 days old, high impact)

| # | Age | Issue | Risk if Neglected |
|:---|:---|:---|:---|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | ~1 month | Contributor task coordination | Contributor churn; task duplication |
| [#3555](https://github.com/agentscope-ai/QwenPaw/issues/3555) | ~1 week | Windows Desktop HTTP hang | Windows user segment degradation |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | ~2.5 weeks | Semantic skill routing | Context window optimization blocked |
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | ~1 week | Discord thread cron support | Community PR stagnation; Discord feature gap |
| [#3550](https://github.com/agentscope-ai/QwenPaw/pull/3550) | ~1 week | Scope-aware model routing | LLM routing correctness |
| [#3553](https://github.com/agentscope-ai/QwenPaw/pull/3553) | ~1 week | SSE surrogate text crash | Console stability for edge content |

### 🔥 Urgent: No Fix PR Exists

- [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) — MCP TaskGroup hang (production deadlock)
- [#3702](https://github.com/agentscope-ai/QwenPaw/issues/3702) — Skill pool persistent errors
- [#3818](https://github.com/agentscope-ai/QwenPaw/issues/3818) — Fresh Linux install crash

---

*Digest generated from GitHub activity 2026-04-24. All links reference https://github.com/agentscope-ai/QwenPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-04-25

## 1. Today's Overview

ZeptoClaw showed minimal but focused development activity in the past 24 hours, with **1 active issue and 1 open pull request** receiving updates but no new releases or merged contributions. The project appears to be in a steady maintenance phase with incremental integration work rather than feature velocity. Both active items relate to infrastructure robustness—one expanding CI coverage for optional channels, the other architecting a new subprocess-based worker pattern for Feishu/Lark integration. No community engagement (comments or reactions) was observed on either item, suggesting either low contributor bandwidth or highly technical work that hasn't yet drawn broader review. Overall project health appears stable but would benefit from maintainer attention to clear the small accumulating backlog.

---

## 2. Releases

**No new releases** published.

---

## 3. Project Progress

**No PRs merged or closed today.**

The sole active PR remains in review:

- **[#544 [codex] expand CI coverage for optional integration features](https://github.com/qhkm/zeptoclaw/pull/544)** by @manelsen (open since 2026-04-23, last updated 2026-04-24)

This PR aims to prevent integration regressions by compiling four previously untested optional features in CI: `channel-email`, `google`, `provider-vertex`, and `whatsapp-web`. It includes compatibility fixes needed to make the expanded matrix pass. **Status:** Pending merge; represents incremental infrastructure hardening rather than user-facing progress.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#546 feat(channels): native Feishu long-connection to Nanodio subprocess worker](https://github.com/qhkm/zeptoclaw/issues/546) | 0 comments, 0 reactions | Fresh feature request for enterprise messaging architecture |
| [#544 expand CI coverage for optional integration features](https://github.com/qhkm/zeptoclaw/pull/544) | `undefined` comments, 0 reactions | Infrastructure PR with no visible review discussion |

**Underlying needs detected:**

- **Enterprise messaging isolation**: Issue #546 reveals demand for running Nanodio (likely an AI worker/executor) as a **supervised subprocess** rather than embedded, suggesting operational requirements around crash isolation, resource limits, or independent scaling in Feishu/Lark deployments—common in enterprise self-hosted scenarios.

- **Integration quality assurance**: PR #544's focus on compiling optional features indicates past or anticipated "works on my machine" failures when users enable non-default channels/providers; the project likely has a modular cargo-style feature system with insufficient compile-time verification.

---

## 5. Bugs & Stability

**No bugs, crashes, or regressions explicitly reported today.**

| Severity | Item | Status |
|----------|------|--------|
| N/A | — | — |

*Note: PR #544 contains "two small compatibility fixes" that were prerequisites for CI expansion, suggesting latent build issues in optional features that were previously unexercised. These are **preventive fixes** rather than reported production bugs.*

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|---------|--------|---------------------------|-----------|
| **Subprocess-based Nanodio worker for Feishu** | [#546](https://github.com/qhkm/zeptoclaw/issues/546) | Medium-High | Enterprise-critical; "V1 local host path" suggests planned milestone |
| **WhatsApp Web channel stabilization** | [#544](https://github.com/qhkm/zeptoclaw/pull/544) CI inclusion | Medium | Being pulled into required CI signals maturation intent |
| **Vertex AI provider hardening** | [#544](https://github.com/qhkm/zeptoclaw/pull/544) CI inclusion | Medium | Google Cloud enterprise demand |
| **Email channel reliability** | [#544](https://github.com/qhkm/zeptoclaw/pull/544) CI inclusion | Medium | Infrastructure completeness |

**Architecture prediction**: The subprocess worker pattern in #546, if adopted, may become a template for other channel providers (WhatsApp, email) to achieve similar isolation—potentially a v2.x architectural theme.

---

## 7. User Feedback Summary

**Direct user feedback: None captured today** (no comments, no 👍 reactions, no discussions).

**Inferred pain points from activity:**

| Pain Point | Evidence | User Segment |
|------------|----------|--------------|
| Embedded worker instability/coupling | #546's explicit "instead of embedding Nanodio in-process" | Self-hosted enterprise users |
| Optional feature compilation failures | #544's "compatibility fixes that were already..." | Developers enabling non-default features |
| Review bottleneck | PR open 2+ days with `undefined` comment count, no reactions | Contributors awaiting maintainer time |

**Satisfaction signal**: Absence of urgent bug reports or complaint issues suggests baseline stability for default configurations.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#544 expand CI coverage](https://github.com/qhkm/zeptoclaw/pull/544) | 2 days | Low | Maintainer review/merge to prevent integration debt accumulation |
| [#546 Feishu subprocess worker](https://github.com/qhkm/zeptoclaw/issues/546) | 1 day | Low | Architecture confirmation from maintainers; may need RFC if scope expands |

**No critically stale items** identified; however, the `undefined` comment count on PR #544 suggests possible GitHub API/data quality issue or genuinely empty review thread that could benefit from explicit maintainer acknowledgment.

---

*Digest generated from GitHub activity 2026-04-24 to 2026-04-25. ZeptoClaw repository: https://github.com/qhkm/zeptoclaw*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-25

## 1. Today's Overview

ZeroClaw showed **very high community activity** with 50 issues and 50 PRs updated in the last 24 hours, though with a notable backlog imbalance: 47 issues remain open/active versus only 3 closed, while 23 PRs are still open against 27 merged/closed. No new release was cut, continuing a gap since v0.6.9. The project is experiencing **intensive development velocity** around configuration ergonomics, multi-agent architecture RFCs, and provider compatibility fixes, but **merge throughput is strained** with many PRs requiring author action or stuck in review. The community is actively pushing for enterprise features (multi-agent, i18n, HMAC receipts) while core stability issues—particularly sandbox security policies and provider authentication bugs—remain unresolved.

---

## 2. Releases

**No new releases.** The v0.6.9 release from earlier remains the latest, with downstream pipeline failures still being tracked in [#5498](https://github.com/zeroclaw-labs/zeroclaw/issues/5498).

---

## 3. Project Progress

### Merged/Closed PRs (27 total, selected significant items)

| PR | Description | Impact |
|:---|:---|:---|
| [#6027](https://github.com/zeroclaw-labs/zeroclaw/pull/6027) | Enable MiniMax native tool calling | Provider capability expansion |
| [#5525](https://github.com/zeroclaw-labs/zeroclaw/pull/5525) → **superseded by [#6088](https://github.com/zeroclaw-labs/zeroclaw/pull/6088)** | Telegram media-group batching (original closed, reopened) | UX fix for image albums |
| [#5310](https://github.com/zeroclaw-labs/zeroclaw/pull/5310) → **superseded by [#6087](https://github.com/zeroclaw-labs/zeroclaw/pull/6087)** | Slack env var overrides (original closed, expanded) | Security/credentials management |
| [#5546](https://github.com/zeroclaw-labs/zeroclaw/pull/5546) → **superseded by [#6086](https://github.com/zeroclaw-labs/zeroclaw/pull/6086)** | `allowed_path` config aliases (original closed, refined) | Config ergonomics |
| [#5548](https://github.com/zeroclaw-labs/zeroclaw/pull/5548) → **superseded by [#6085](https://github.com/zeroclaw-labs/zeroclaw/pull/6085)** | Session TTL defaults (original closed, adjusted) | Memory/stability fix |
| [#5298](https://github.com/zeroclaw-labs/zeroclaw/pull/5298) | Stop `reasoning_content` leaking into streamed responses | GLM-5/thinking model compatibility |
| [#5580](https://github.com/zeroclaw-labs/zeroclaw/pull/5580) | Dashboard `/api/channels` endpoint | Admin UI functionality |
| [#3897](https://github.com/zeroclaw-labs/zeroclaw/pull/3897) | Docker default CMD to `daemon` | Deployment fix |
| [#3921](https://github.com/zeroclaw-labs/zeroclaw/pull/3921) | OTP challenge attempt limiting | Security hardening |
| [#5154](https://github.com/zeroclaw-labs/zeroclaw/pull/5154) | Android build + marketplace sync idempotency | Mobile/platform stability |

### Key Pattern: PR Recursion
Multiple PRs (#5525→#6088, #5310→#6087, #5546→#6086, #5548→#6085) show **iterative refinement** where initial implementations were closed due to "needs-author-action" and reopened with expanded scope. This suggests **review friction** but also persistent contributor commitment.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | 👍 | Analysis |
|:---|:---|:---|:---|:---|
| 1 | [#3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059) Aliyun Bailian coding plan support | 9 | 1 | **China cloud ecosystem gap** — users need domestic provider integration for compliance/latency |
| 2 | [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) Napcat/OneBot channel missing | 8 | 0 | **QQ ecosystem fragmentation** — Napcat is the dominant modern OneBot implementation, gap hurts Chinese community adoption |
| 3 | [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) Shell sandbox blocks Python skills | 6 | 0 | **Enterprise skill development blocked** — FINOS-linked project (InvestorClaw) cannot function; security vs. utility tension |
| 4 | [#4830](https://github.com/zeroclaw-labs/zeroclaw/issues/4830) HMAC tool execution receipts | 6 | 0 | **Hallucination detection for regulated industries** — cryptographic verification of tool outputs; closed but conceptually important |
| 5 | [#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) Duplicate assistant messages with narration+tool calls | 6 | 0 | **Native tool dispatch protocol bug** — affects multiple providers |

### Underlying Needs Analysis

- **Geographic localization** (China providers: Aliyun, Z.AI, QQ channels) is a **recurring unmet need** with 4+ active issues
- **Security/auditability** for enterprise deployment (HMAC, sandbox policies) is emerging as a **differentiation battleground**
- **Multi-agent architecture** has formal RFC process active ([#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)) with tracker ([#5891](https://github.com/zeroclaw-labs/zeroclaw/issues/5891))

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Description |
|:---|:---|:---|:---|:---|
| **S1 — Blocked** | [#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051) | Open | ❌ No | Self-test ignores `0.0.0.0` bind config, uses `127.0.0.1` |
| **S1 — Blocked** | [#2324](https://github.com/zeroclaw-labs/zeroclaw/issues/2324) | `in-progress` | ❌ No | `always_ask` tools silently denied in Telegram/non-CLI |
| **S1 — Blocked** | [#5984](https://github.com/zeroclaw-labs/zeroclaw/issues/5984) | Open | ❌ No | `zeroclaw-desktop` crash on "No provider set" |
| **S1 — Blocked** | [#5941](https://github.com/zeroclaw-labs/zeroclaw/issues/5941) | `in-progress` | ❌ No | Tool call output `call_id` mismatch — custom provider failure |
| **S1 — Blocked** | [#5636](https://github.com/zeroclaw-labs/zeroclaw/issues/5636) | Open | ❌ No | Z.AI provider error 1214 after context trim with `glm-5-turbo` |
| **S1 — Blocked** | [#5117](https://github.com/zeroclaw-labs/zeroclaw/issues/5117) | `in-progress` | ❌ No | Mistral tool call ID format rejected |
| **S2 — Degraded** | [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | `in-progress` | ❌ No | Shell sandbox blocks realistic Python patterns |
| **S2 — Degraded** | [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) | `in-progress` | ❌ No | `git -C` blocked by case-insensitive policy (`-c` vs `-C`) |
| **S2 — Degraded** | [#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) | Open | ❌ No | Duplicate assistant messages with narration+tool calls |
| **S2 — Degraded** | [#5285](https://github.com/zeroclaw-labs/zeroclaw/issues/5285) | Open | ❌ No | GLM-5 thoughts merge into final message |
| **S3 — Minor** | [#5556](https://github.com/zeroclaw-labs/zeroclaw/issues/5556) | Open | ❌ No | Ollama summarization 60s timeout too short for small models |
| **S3 — Minor** | [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | Open | ❌ No | Agent unaware of own `cron` capability |

### Critical Concern
**6 S1 (workflow-blocked) bugs are open with no linked fix PRs.** The `in-progress` labels on some appear stale given creation dates. Desktop crash ([#5984](https://github.com/zeroclaw-labs/zeroclaw/issues/5984)) and self-test misconfiguration ([#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051)) are **new regressions** from this week.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Maturity Signal | v0.7.0 Likelihood |
|:---|:---|:---|:---|
| **Multi-agent UX flow** | [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) (RFC), [#5891](https://github.com/zeroclaw-labs/zeroclaw/issues/5891) (tracker), [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) (stale precursor) | RFC in 7-day discussion; formal governance process | **High** — flagship feature, community demand (8 👍 on #2767) |
| **Mozilla Fluent i18n pipeline** | [#5788](https://github.com/zeroclaw-labs/zeroclaw/pull/5788) | XL PR open, implements RFC #5787 | **High** — infrastructure investment |
| **Provider-scoped fallback chains** | [#4647](https://github.com/zeroclaw-labs/zeroclaw/issues/4647) | Open, 2 comments | Medium — architectural, needs RFC |
| **WeCom (WxWork) channel** | [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) | Open since March, reference to OpenClaw extension | Medium — enterprise China market |
| **Multiple model providers** | [#2998](https://github.com/zeroclaw-labs/zeroclaw/issues/2998) | Open, basic question | Medium — may be addressed by multi-agent |
| **HMAC tool receipts** | [#4830](https://github.com/zeroclaw-labs/zeroclaw/issues/4830) | **Closed** without merge | Low — concept validated but not prioritized |
| **Napcat/OneBot11 channel** | [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | Open, 8 comments, no PR | Medium-high — QQ ecosystem critical mass |
| **Configurable `classify_channel_reply_intent`** | [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) | `in-progress`, 3 👍 | High — small UX fix, clear scope |

---

## 7. User Feedback Summary

### Pain Points (Evidence-Based)

| Theme | Source Issues | Severity |
|:---|:---|:---|
| **Configuration discovery/ergonomics** | [#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051), [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809), [#5546](https://github.com/zeroclaw-labs/zeroclaw/issues/5546)→[#6086](https://github.com/zeroclaw-labs/zeroclaw/pull/6086), [#5310](https://github.com/zeroclaw-labs/zeroclaw/issues/5310)→[#6087](https://github.com/zeroclaw-labs/zeroclaw/pull/6087) | **High** — constant source of "workflow blocked" |
| **China-specific provider/channel gaps** | [#3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059), [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503), [#5636](https://github.com/zeroclaw-labs/zeroclaw/issues/5636), [#5285](https://github.com/zeroclaw-labs/zeroclaw/issues/5285), [#5259](https://github.com/zeroclaw-labs/zeroclaw/issues/5259) | **High** — competitive disadvantage vs. OpenClaw |
| **Sandbox security vs. skill utility** | [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722), [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) | **Critical** — blocks real-world skills |
| **Provider compatibility fragility** | [#5289](https://github.com/zeroclaw-labs/zeroclaw/issues/5289), [#5117](https://github.com/zeroclaw-labs/zeroclaw/issues/5117), [#5941](https://github.com/zeroclaw-labs/zeroclaw/issues/5941), [#5636](https://github.com/zeroclaw-labs/zeroclaw/issues/5636), [#5975](https://github.com/zeroclaw-labs/zeroclaw/pull/5975) | **High** — each provider needs bespoke fixes |
| **Session/memory unbounded growth** | [#5548](https://github.com/zeroclaw-labs/zeroclaw/issues/5548)→[#6085](https://github.com/zeroclaw-labs/zeroclaw/pull/6085) | **High** — OOM in production |

### Satisfaction Indicators
- Active contributor retention (singlerider, theonlyhennygod, justjuangui with multiple PRs)
- Enterprise user investment (FINOS-linked InvestorClaw project in [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722))
- Formal RFC process being used ([#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890))

### Dissatisfaction Indicators
- "Needs-author-action" label frequency → review bottleneck
- Multiple PRs needing resurrection after closure
- No release despite accumulating fixes

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (High Risk of Staleness)

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) Multi-Agent Routing | ~7 weeks | **Superseded by RFC but 8 👍 unaddressed** | Close as duplicate or link to #5890/#5891 |
| [#5259](https://github.com/zeroclaw-labs/zeroclaw/issues/5259) WeChat iLink recovery | ~3 weeks | **Code existed, was reverted** | Decision: restore c3ff65 or permanently drop |
| [#5289](https://github.com/zeroclaw-labs/zeroclaw/issues/5289) Bedrock API_KEY header | ~3 weeks | `in-progress` label, no PR | Verify if #6027 or similar fixed; else assign |
| [#5170](https://github.com/zeroclaw-labs/zeroclaw/issues/5170) memory_recall wildcard FTS5 | ~3 weeks | Core memory functionality broken | Triage: SQLite query fix needed |
| [#5498](https://github.com/zeroclaw-labs/zeroclaw/issues/5498) Release pipeline secrets | ~2 weeks | **Blocks reliable releases** | Complete v0.6.9+ release infrastructure |

### PRs at Risk

| PR | Status | Risk |
|:---|:---|:---|
| [#5788](https://github.com/zeroclaw-labs/zeroclaw/pull/5788) i18n pipeline (XL) | Open since Apr 16 | Merge conflicts given touch points; needs priority review |
| [#6035](https://github.com/zeroclaw-labs/zeroclaw/pull/6035) ACP tool output formatting | Open, `risk: high` | Blocks ACP server correctness; urgent review needed |
| Multiple `theonlyhennygod` PRs (#6085-#6088) | Open, same day | Batch review opportunity; low risk, high user value |

---

**Project Health Assessment:** 🟡 **Active but strained.** High contributor energy and ambitious roadmap (multi-agent, i18n, enterprise security) are positive indicators. However, **S1 bug accumulation without fixes**, **release pipeline gaps**, and **review throughput bottlenecks** (evidenced by PR recursion pattern) suggest core maintainer bandwidth is the limiting factor. The project would benefit from a triage-focused release to clear S1 bugs before v0.7.0 feature development accelerates.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*