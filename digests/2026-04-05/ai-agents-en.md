# OpenClaw Ecosystem Digest 2026-04-05

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-04-05 00:11 UTC

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

# OpenClaw Project Digest — 2026-04-05

## 1. Today's Overview

OpenClaw shows **extremely high development velocity** with 500 issues and 500 PRs updated in the last 24 hours—indicative of a rapidly evolving codebase with active community engagement. The project is in a **stabilization phase following recent major releases**, with zero new versions published today but substantial maintenance activity. Community demand remains strong for cross-platform desktop apps (Linux/Windows), internationalization, and MCP protocol support. The maintainer team appears focused on ACP (Agent Communication Protocol) refinements, plugin SDK hardening, and localization improvements. However, **regression density is elevated**, with multiple reports of features breaking between 2026.3.28 and 2026.3.31.

---

## 2. Releases

**No new releases** (v2026.4.4 appears to be current based on PR references).

---

## 3. Project Progress

### Merged/Closed PRs Today (Key Items)

| PR | Description | Impact |
|:---|:---|:---|
| [#61088](https://github.com/openclaw/openclaw/pull/61088) | Fix plugin-sdk test boundary + stabilize agents assertions | Test reliability |
| [#54302](https://github.com/openclaw/openclaw/pull/54302) | Recognize bare "new" and "reset" as session commands | Slack/Discord UX fix |
| [#59231](https://github.com/openclaw/openclaw/pull/59231) | ACP session handback with auto-detect runtime type | **Major ACP workflow improvement** |
| [#59230](https://github.com/openclaw/openclaw/pull/59230) | Inject workspace bootstrap files into ACP task string | ACP agent context fix |
| [#57910](https://github.com/openclaw/openclaw/pull/57910) | Telegram DM conversation handoff with bind:here | Channel reliability |
| [#57732](https://github.com/openclaw/openclaw/pull/57732) | Resolve agent profile alias to harness ID | ACP crash fix |
| [#61061](https://github.com/openclaw/openclaw/pull/61061) | Avoid Telegram config import side effects | Plugin SDK purity |
| [#60394](https://github.com/openclaw/openclaw/pull/60394) | Dedicated loading style for Cron refresh button | UI polish |
| [#61021](https://github.com/openclaw/openclaw/pull/61021) | Configurable compaction, skill cache, subagent guidance | **New configuration surface** |

### Open PRs in Active Review

| PR | Description | Status |
|:---|:---|:---|
| [#61090](https://github.com/openclaw/openclaw/pull/61090) | Exclude `.git` and `node_modules` when copying skills | Ready |
| [#61087](https://github.com/openclaw/openclaw/pull/61087) | Discord upload-file action advertisement | Ready |
| [#61081](https://github.com/openclaw/openclaw/pull/61081) | **ACP spawn lifecycle improvements** (alias resolution, workspace injection, DM binding, session handback) | Large, active |
| [#61086](https://github.com/openclaw/openclaw/pull/61086) | Preserve timezone in cron job patches | Bug fix |
| [#58014](https://github.com/openclaw/openclaw/pull/58014) | Restore strict9 tool-call-id mode for Mistral | Regression fix |
| [#61085](https://github.com/openclaw/openclaw/pull/61085) | Gemini multimodal fallback before registry hydration | Startup fix |
| [#61084](https://github.com/openclaw/openclaw/pull/61084) | Load `gateway.env` compatibility fallback | Ubuntu install fix |
| [#61082](https://github.com/openclaw/openclaw/pull/61082) | Telemetry, replay harness, degraded state diagnostics | **Large observability feature** |
| [#41158](https://github.com/openclaw/openclaw/pull/41158) | Retry global rate limits at attempt boundary | **Reliability architecture** |
| [#61023](https://github.com/openclaw/openclaw/pull/61023) | **Harden extension package boundaries** (XL refactor) | Architecture |

---

## 4. Community Hot Topics

### Top Issues by Engagement

| Issue | Comments | 👍 | Topic | Analysis |
|:---|:---:|:---:|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | 119 | 7 | **i18n/Localization Support** | **#1 community request**—maintainers acknowledge bandwidth constraints; likely blocked on core team capacity |
| [#75](https://github.com/openclaw/openclaw/issues/75) | 70 | 67 | **Linux/Windows Desktop Apps** | Strong demand for platform parity with macOS/iOS; 67 upvotes signals commercial/user readiness |
| [#44851](https://github.com/openclaw/openclaw/issues/44851) | 36 | 5 | Kimi web_search 401 auth error | Chinese market integration pain point; resolved (closed) |
| [#40631](https://github.com/openclaw/openclaw/issues/40631) | 18 | 0 | Execution stall: assistant confirms but no action | **Critical reliability bug**—false "started" state |
| [#59098](https://github.com/openclaw/openclaw/issues/59098) | 14 | 0 | Ollama timeout while direct API works | Local LLM integration friction |
| [#29053](https://github.com/openclaw/openclaw/issues/29053) | 14 | 16 | **MCP Client native support** | **Strategic inflection point**—community wants standard protocol over OpenClaw-specific tools; 16 upvotes |
| [#59510](https://github.com/openclaw/openclaw/issues/59510) | 12 | 0 | Simplify exec approval process | UX friction in security workflows |

### Underlying Needs Analysis

- **Standardization over customization**: MCP support (#29053) represents desire to avoid vendor lock-in
- **Enterprise readiness**: i18n (#3460) and desktop apps (#75) block organizational adoption
- **Trust/safety**: Execution approval UX (#59510, #27843) creates friction for power users
- **Local AI**: Ollama integration issues (#59098, #59916) reflect on-premise deployment demand

---

## 5. Bugs & Stability

### Critical/Severe (Fix PRs Needed or Unknown)

| Issue | Severity | Description | Fix Status |
|:---|:---:|:---|:---|
| [#40631](https://github.com/openclaw/openclaw/issues/40631) | 🔴 **Critical** | Execution state bug: false "started" → no progress | No PR linked |
| [#53959](https://github.com/openclaw/openclaw/issues/53959) | 🔴 **Critical** | `gpt-5.3-codex` zero tool execution (regression 2026.3.23-2) | No PR linked |
| [#58941](https://github.com/openclaw/openclaw/issues/58941) | 🔴 **Critical** | Discord exec approvals broken (2026.3.31 regression) | No PR linked |
| [#41330](https://github.com/openclaw/openclaw/issues/41330) | 🟠 **High** | iMessage infinite loop: agent replies re-ingested | No PR linked |
| [#59098](https://github.com/openclaw/openclaw/issues/59098) | 🟠 **High** | Ollama timeout (qwen2.5:1.5b) | No PR linked |
| [#59916](https://github.com/openclaw/openclaw/issues/59916) | 🟠 **High** | Stuck at "Wake up, my friend" with Gemma4:26b | No PR linked |
| [#59330](https://github.com/openclaw/openclaw/issues/59330) | 🟠 **High** | Control UI Raw mode permanently disabled (2026.3.31 regression) | No PR linked |
| [#55304](https://github.com/openclaw/openclaw/issues/55304) | 🟠 **High** | Telegram channels fail silently after gateway restart | No PR linked |

### Regressions Cluster (2026.3.28 → 2026.3.31)

Multiple reports of features working in 2026.3.28 breaking in 2026.3.31:
- Discord exec approvals (#58941)
- Control UI Raw mode (#59330)
- General stability degradation

### Fixed Today

| Issue | Fix PR | Description |
|:---|:---|:---|
| #44851 | Closed | Kimi web_search 401 auth |
| #5440 | Closed | Windows 11 CMD install error |
| #29445 | Closed | `/new` command timeout |
| #59085 | Closed | Matrix plugin security block |
| #25059 | Closed | Plugin ID mismatch warnings |
| #29757 | Closed | Cron job duplicate execution |
| #49228 | Closed | Web UI cron job layout overflow |
| #59847 | Closed | "Allow always" popup persistence |

---

## 6. Feature Requests & Roadmap Signals

### Likely Next Version (High Confidence)

| Feature | Signal Strength | Evidence |
|:---|:---:|:---|
| **ACP spawn lifecycle completion** | ⭐⭐⭐⭐⭐ | [#61081](https://github.com/openclaw/openclaw/pull/61081) active, multiple merged PRs building toward this |
| **Extension package boundary hardening** | ⭐⭐⭐⭐⭐ | [#61023](https://github.com/openclaw/openclaw/pull/61023) XL refactor in progress |
| **Configurable compaction/subagent guidance** | ⭐⭐⭐⭐⭐ | [#61021](https://github.com/openclaw/openclaw/pull/61021) merged today |
| **Gemini Context Caching** | ⭐⭐⭐⭐☆ | [#51372](https://github.com/openclaw/openclaw/issues/51372) open, cost pressure evident |

### Medium-Term Roadmap Candidates

| Feature | Community Demand | Technical Readiness |
|:---|:---:|:---:|
| **MCP Client native support** | Very High (#29053, 16 👍) | Unknown—no PR yet |
| **Linux/Windows Desktop Apps** | Very High (#75, 67 👍) | Blocked on team bandwidth |
| **i18n/Localization** | Very High (#3460, 119 comments) | Blocked on team bandwidth |
| **Adaptive Memory (built-in)** | Medium (#59095) | Proposal stage |
| **Per-candidate retry for model fallback** | Medium (#59413) | No PR yet |
| **Typecast TTS provider** | Low-Medium (#10356) | PR open since Feb 6 |

---

## 7. User Feedback Summary

### Pain Points

| Category | Specific Issues | Severity |
|:---|:---|:---:|
| **Security UX friction** | Per-command approvals tedious (#59510), allowlist bypasses with complex args (#27843), "Allow always" doesn't persist (#59847—fixed today) | High |
| **Local LLM reliability** | Ollama timeouts (#59098, #59916), Gemma4 stuck loading | High |
| **Cross-platform gaps** | No Linux/Windows apps (#75), Windows install issues (#5440, #25282) | High |
| **Gateway stability** | Execution stalls (#40631), cron job issues (#29757, #57250), restart recovery (#30043) | Critical |
| **Channel-specific bugs** | Discord (#26108, #58941), Telegram (#55304, #57910), iMessage (#41330), Teams (#24148) | Medium-High |

### Positive Signals

- ACP workflow improvements showing rapid iteration
- Security model proactive (blocked malicious Matrix plugin #59085)
- Active localization work (#61080, #61073, #61075)

### Use Case Patterns

- **Multi-channel deployments**: Users running Discord + Telegram + Slack simultaneously
- **Local-first AI**: Strong Ollama/Gemma adoption despite friction
- **Enterprise automation**: Cron jobs, skill systems, subagent delegation
- **Chinese market**: Kimi/Moonshot integration actively used

---

## 8. Backlog Watch

### Stale Important Issues (Needs Maintainer Decision)

| Issue | Age | Status | Action Needed |
|:---|:---:|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | ~2 months | Open, 119 comments | **Decision**: Accept community i18n PRs or document timeline |
| [#75](https://github.com/openclaw/openclaw/issues/75) | ~3 months | Open, 67 👍 | **Decision**: Linux/Windows app roadmap commitment |
| [#29053](https://github.com/openclaw/openclaw/issues/29053) | ~1 month | Open, 16 👍 | **Decision**: MCP support priority relative to native tools |
| [#26108](https://github.com/openclaw/openclaw/issues/26108) | ~1 month | Open, stale | Discord voice regression—re-triage after #58941 |
| [#17890](https://github.com/openclaw/openclaw/issues/17890) | ~1.5 months | Open, stale | macOS PATH detection—skill system architecture question |
| [#28565](https://github.com/openclaw/openclaw/issues/28565) | ~1 month | Open, stale | Cron narration leak to Slack—messaging architecture |

### PRs Needing Review

| PR | Size | Status |
|:---|:---:|:---|
| [#61023](https://github.com/openclaw/openclaw/pull/61023) | XL | Extension boundaries—architectural review needed |
| [#41158](https://github.com/openclaw/openclaw/pull/41158) | XL | Rate limit retry logic—merged? (updated today) |
| [#10356](https://github.com/openclaw/openclaw/pull/10356) | L | Typecast TTS—stale since Feb 6 |
| [#29488](https://github.com/openclaw/openclaw/pull/29488) | XL | Discord proxy/temp dir—stale since Feb 28 |

---

## Project Health Assessment

| Metric | Status | Notes |
|:---|:---:|:---|
| Development velocity | 🟢 Healthy | 500 PRs/issues/day |
| Release stability | 🟡 Concerning | Multiple 2026.3.31 regressions |
| Community engagement | 🟢 Strong | High comment counts, detailed reports |
| Maintainer responsiveness | 🟡 Mixed | Rapid ACP fixes, but i18n/desktop apps blocked |
| Technical debt | 🟡 Accumulating | Extension boundaries, test stabilization ongoing |

**Recommendation**: Prioritize regression fixes for 2026.3.31 before next feature release; consider hotfix release for Discord exec approvals and Control UI Raw mode.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
*Date: 2026-04-05*

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing **intense fragmentation and rapid iteration**, with 9+ active projects competing across multiple technical vectors. The space has evolved beyond simple chatbots toward **multi-channel agent orchestration platforms**, with heavy investment in protocol interoperability (MCP, A2A, AG-UI), local/self-hosted deployment, and enterprise security hardening. **Provider diversification** has become urgent due to platform risk (Anthropic policy changes), driving parallel efforts to support OpenAI Codex, OpenCode SDK, and local LLMs. Desktop and mobile deployment remain unsolved gaps across the ecosystem, with most projects prioritizing server/cloud architectures.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Assessment |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | No release (v2026.4.4 current) | 🟡 Concerning | Extreme velocity but regression density elevated; stabilization phase |
| **NanoBot** | 15 | 26 | No release (v0.1.4.post6) | 🟢 Healthy | Active maintenance, strong validation vs. competitors |
| **PicoClaw** | 12 | 32 | Nightly only (v0.2.5-nightly) | 🟡 Concerning | Pre-release stabilization; 5 fresh bugs, review bottleneck |
| **NanoClaw** | 4 | 20 | No release | 🟡 Mixed | High community velocity, critical security PRs pending review |
| **NullClaw** | 4 | 11 | No release (v2026.3.21) | 🟢 Healthy | Strong merge ratio (11:1), production-focused fixes |
| **IronClaw** | 6 | 43 | No release | 🟡 Mixed | Feature-heavy phase; 2 production blockers, AI-generated code entering |
| **LobsterAI** | 6 | 15 | No release | 🟢 Healthy | UX polish sprint; coordinated quality initiative |
| **Moltis** | 6 | 2 | No release | 🟡 Stagnant | Moderate activity, no merges, provider subsystem bugs |
| **CoPaw** | 22 | 15 | Beta prep (v1.0.2b1) | 🟡 Mixed | Strong engagement, critical idle CPU bug unassigned |
| **TinyClaw** | — | — | No activity | ⚪ Inactive | — |
| **ZeptoClaw** | — | — | No activity | ⚪ Inactive | — |
| **EasyClaw** | — | — | No activity | ⚪ Inactive | — |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw Advantage | Evidence |
|:---|:---|:---|
| **Scale** | 10-25x issue/PR volume vs. nearest competitor | 500 items/day vs. NanoBot's 41, PicoClaw's 44 |
| **Protocol leadership** | ACP (Agent Communication Protocol) native implementation | [#61081](https://github.com/openclaw/openclaw/pull/61081) spawn lifecycle, session handback |
| **Channel breadth** | Most mature multi-channel (Discord, Telegram, Slack, iMessage, Teams, Matrix) | Active fixes across all channels today |
| **Skill ecosystem** | Plugin SDK with marketplace (ClawHub) | Extension boundary hardening [#61023](https://github.com/openclaw/openclaw/pull/61023) |
| **Enterprise features** | Cron jobs, subagent delegation, configurable compaction | [#61021](https://github.com/openclaw/openclaw/pull/61021) merged |

### Technical Approach Differences
| Aspect | OpenClaw | Peers |
|:---|:---|:---|
| **Architecture** | Monolithic core with plugin SDK | NanoBot: modular tool registry; NullClaw: Zig-based systems language; IronClaw: Rust + WASM |
| **Protocol strategy** | Native ACP + evaluating MCP | NullClaw: A2A + AG-UI aggregation; Moltis: MCP HTTP transport; NanoClaw: provider abstraction layer |
| **Deployment target** | Server-first, Docker-centric | PicoClaw: K3s/kubernetes; NanoClaw: OneCLI "batteries included"; NullClaw: NULLCLAW_HOME portable |
| **Security model** | Per-command approval with "Allow always" | IronClaw: ZK proofs (proof_of_claw); NanoBot: aggressive SSRF protection; NullClaw: sandbox isolation |

### Community Size Comparison
OpenClaw operates at **ecosystem-defining scale**: 119 comments on i18n request, 67 upvotes on desktop apps demand. Nearest engagement: NanoClaw's 56 upvotes on multi-provider support (existential driver), CoPaw's 7-comment threads on critical bugs. OpenClaw's community is **1-2 orders of magnitude larger** but proportionally more demanding on maintainer bandwidth.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **MCP (Model Context Protocol) support** | OpenClaw [#29053](https://github.com/openclaw/openclaw/issues/29053), Moltis [#555](https://github.com/moltis-org/moltis/pull/555), NullClaw (implied), IronClaw [#2009](https://github.com/nearai/ironclaw/pull/2009) | Native client implementation; avoid vendor lock-in; standardize tool discovery |
| **Multi-provider / model fallback** | NanoClaw [#80](https://github.com/qwibitai/nanoclaw/issues/80), NanoBot [#2800](https://github.com/HKUDS/nanobot/pull/2800), OpenClaw [#41158](https://github.com/openclaw/openclaw/pull/41158), PicoClaw [#2342](https://github.com/sipeed/picoclaw/issues/2342) | Rate-limit retry, provider health checks, cost arbitrage, Anthropic platform risk mitigation |
| **Desktop / cross-platform apps** | OpenClaw [#75](https://github.com/openclaw/openclaw/issues/75), Moltis [#549](https://github.com/moltis-org/moltis/issues/549), NanoBot (Windows primary) | Linux/Windows parity with macOS, OAuth flows on desktop, offline capability |
| **Security hardening** | NanoClaw [#1630](https://github.com/qwibitai/nanoclaw/pull/1630), [#1629](https://github.com/qwibitai/nanoclaw/pull/1629), NullClaw [#678](https://github.com/nullclaw/nullclaw/pull/678), IronClaw [#1591](https://github.com/nearai/ironclaw/pull/1591), PicoClaw "Agent Shield" | Container escape prevention, public server deployment safety, sandboxed execution |
| **Token / context management** | NanoBot [#2343](https://github.com/HKUDS/nanobot/issues/2343), [#2638](https://github.com/HKUDS/nanobot/issues/2638), OpenClaw configurable compaction [#61021](https://github.com/openclaw/openclaw/pull/61021), PicoClaw 6-phase compression [#2333](https://github.com/sipeed/picoclaw/pull/2333) | Context window enforcement, history truncation, memory consolidation, cost control |
| **Observability / production readiness** | NullClaw [#693](https://github.com/nullclaw/nullclaw/pull/693) OTEL, OpenClaw telemetry [#61082](https://github.com/openclaw/openclaw/pull/61082), NanoClaw Sentry [#1631](https://github.com/qwibitai/nanoclaw/pull/1631) | Distributed tracing, channel attribution, replay harness, degraded state diagnostics |

---

## 5. Differentiation Analysis

| Project | Core Differentiation | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Ecosystem scale + ACP protocol leadership | Power users, multi-channel automation, enterprise | TypeScript/Node, plugin SDK, ClawHub marketplace |
| **NanoBot** | Stability-first, "beats OpenClaw" reliability | Windows desktop users, local-first deployments | Python, aggressive sandboxing, MCP tool caching |
| **PicoClaw** | Enterprise/self-hosted hardening, K3s deployment | DevOps, institutional self-hosting | Python, "Agent Shield" security model, Kubernetes-native |
| **NanoClaw** | Provider diversification urgency, security policy engine | Anthropic-hedging users, multi-tenant teams | TypeScript, OneCLI deployment, Matrix/Signal E2EE |
| **NullClaw** | Multi-protocol gateway (A2A, AG-UI, MCP), Zig systems | Protocol-agnostic integrators, frontend developers | Zig, unified channel runtime, OTEL-first |
| **IronClaw** | ZK proofs, decentralized identity, "agent teams" | Crypto-native, audit/compliance, multi-agent orchestration | Rust + WASM, ClawHub skills, commitments system |
| **LobsterAI** | Superior UX vs. Alibaba HiClaw, China IM ecosystem | China enterprise, Feishu/DingTalk users | TypeScript/Electron, v4.3 multi-instance IM |
| **CoPaw** | Claude Code parity, agent team coordination | Multi-agent workflow users, China market | Python, Agentscope lineage, `[SPLIT]` messaging |
| **Moltis** | Fine-grained agent configuration, streamable MCP | Tinkerers, per-agent customization | Python, agent-level loopback/timeout settings |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (Velocity >40 items/day)
| Project | Character | Risk |
|:---|:---|:---|
| **OpenClaw** | Stabilization after major release | Regression density, maintainer burnout |
| **IronClaw** | Feature-heavy, AI-generated code entering | Production blockers unpatched, review quality |

### Tier 2: Active Growth (Velocity 15-45 items/day)
| Project | Character | Trajectory |
|:---|:---|:---|
| **NanoBot** | Validated stability, scaling challenges | Healthy consolidation |
| **PicoClaw** | Pre-release crunch, enterprise push | Quality vs. speed tension |
| **NanoClaw** | Security-critical, review bottleneck | Risk: contributor attrition |
| **CoPaw** | v1.0 stabilization, Windows gaps | Beta release imminent |
| **LobsterAI** | UX polish sprint, quality initiative | Merge queue buildup |

### Tier 3: Maintenance/Stabilization (Velocity <15 items/day)
| Project | Character | Need |
|:---|:---|:---|
| **NullClaw** | Production-hardened, protocol expansion | Documentation fixes, AG-UI implementation |
| **Moltis** | Bug triage, no merges | Maintainer attention, subsystem refactor |

### Tier 4: Inactive
| Project | Status |
|:---|:---|
| **TinyClaw, ZeptoClaw, EasyClaw** | No 24h activity |

---

## 7. Trend Signals

| Trend | Evidence | Implication for Developers |
|:---|:---|:---|
| **Platform risk → provider diversification** | NanoClaw #80 (56 👍), simultaneous Codex/OpenCode PRs | Build abstraction layers; avoid single-provider dependency; implement health-checked fallbacks |
| **Protocol consolidation (MCP/A2A/AG-UI)** | Universal demand across OpenClaw, Moltis, NullClaw, IronClaw | Design for protocol interoperability; avoid proprietary tool ecosystems |
| **Security as differentiator** | Container escapes, public server exposure, ZK proofs | Assume hostile deployment environments; sandbox all tool execution; audit supply chain |
| **Desktop/mobile deployment gap** | OpenClaw #75 (67 👍), Moltis macOS OAuth broken, Android automation requests | Opportunity for Electron/Tauri-based clients; bridge server-first architectures to local compute |
| **Observability → production readiness** | OTEL, Sentry, replay harnesses across projects | Treat agents as distributed systems; implement tracing from day one |
| **Agent teams / multi-agent orchestration** | IronClaw #1736 commitments, CoPaw #2922, OpenClaw subagent guidance | Design for delegation patterns; manager-worker abstractions becoming standard |
| **Local-first / edge deployment** | Ollama timeouts, Gemma4 issues, CoPaw Local, PicoClaw Pi Zero | Optimize for constrained compute; implement graceful degradation |
| **China market specialization** | LobsterAI Feishu/DingTalk, CoPaw OneBot/QQ, NanoBot Xiaozhi voice | Regional IM integration as competitive moat; compliance requirements |

---

*Report compiled from 2026-04-05 community digests across 12 projects. Data sources: GitHub issue/PR activity, maintainer communications, user feedback patterns.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-05

## 1. Today's Overview

NanoBot shows **high development velocity** with 41 items updated in 24 hours (15 issues, 26 PRs), indicating an active maintenance period. The project is experiencing growing pains around **token management, retry logic, and security guardrails** — common scaling challenges for agent frameworks. Community engagement is strong with multilingual participation (Chinese, English, Vietnamese). No new release was cut today, suggesting the team is accumulating changes for a larger release. The codebase is undergoing significant refactoring, particularly in tool registration and agent loop architecture.

---

## 2. Releases

**No new releases** (v0.1.4.post6 remains latest as of 2026-04-04).

---

## 3. Project Progress

### Merged/Closed PRs Today (12 total)

| PR | Description | Significance |
|:---|:---|:---|
| [#2754](https://github.com/HKUDS/nanobot/pull/2754) | Built-in `grep` and `glob` search tools | **Major UX improvement** — eliminates shell dependency for file discovery |
| [#2788](https://github.com/HKUDS/nanobot/pull/2788) | GPT-5 model family support | Keeps provider compatibility current; handles `max_completion_tokens` vs `max_tokens` API change |
| [#2779](https://github.com/HKUDS/nanobot/pull/2779) | Jinja2 templating for agent responses | Enables customizable agent personality and memory consolidation output |
| [#2722](https://github.com/HKUDS/nanobot/pull/2722) | Stabilize tool prefix caching under MCP churn | **Performance fix** — reduces LLM costs by improving prompt cache hit rates |
| [#2786](https://github.com/HKUDS/nanobot/pull/2786) | Restore `reasoning_content` and `extra_content` in messages | Regression fix from large refactor (commit fbedf7a) |
| [#2789](https://github.com/HKUDS/nanobot/pull/2789) | Fix Telegram threaded DM metadata copying | UX fix for conversation threading |
| [#2790](https://github.com/HKUDS/nanobot/pull/2790) → superseded by [#2791](https://github.com/HKUDS/nanobot/pull/2791) | `ask_user` tool for interactive confirmation | New human-in-the-loop capability |
| [#2780](https://github.com/HKUDS/nanobot/pull/2780) | Streamline Tool class methods | Code quality improvement |
| [#1700](https://github.com/HKUDS/nanobot/pull/1700) | Fix Docker npm build for SSH git deps | Build reliability |
| [#2777](https://github.com/HKUDS/nanobot/issues/2777) | Fixed via PR — custom model reasoning content bug | Closed with resolution |

**Key Advancement**: The `grep`/`glob` tools (#2754) address a fundamental gap — agents can now search codebase contents natively without shell escapes, improving security and reliability.

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#2343](https://github.com/HKUDS/nanobot/issues/2343) | 15 | Context window overflow in `run_agent_loop` | **Critical infrastructure gap**: No `contextWindowTokens` enforcement; users need configurable history truncation strategies |
| [#2760](https://github.com/HKUDS/nanobot/issues/2760) | 9 | Retry amplification with stacked app+SDK retries | Production reliability — need for coordinated retry policies to prevent upstream overload |
| [#2774](https://github.com/HKUDS/nanobot/issues/2774) | 5 | Comparison with OpenClaw (stability praise) | **Validation of architectural decisions** — users value NanoBot's stability over competitor's fragility |
| [#2638](https://github.com/HKUDS/nanobot/issues/2638) | 3 | Unbounded session history growth | Memory management hardening when consolidation fails |

### Most Active PRs

| PR | Focus | Strategic Value |
|:---|:---|:---|
| [#2801](https://github.com/HKUDS/nanobot/pull/2801) | Heartbeat + `evaluate_notification` tools | Foundation for proactive agent behavior |
| [#2800](https://github.com/HKUDS/nanobot/pull/2800) | Provider fallback on rate-limit | **Operational resilience** — critical for free-tier API users |
| [#2724](https://github.com/HKUDS/nanobot/pull/2724) | Crawl4AI integration | Web scraping capability expansion |
| [#2584](https://github.com/HKUDS/nanobot/pull/2584) | Xiaozhi voice gateway (ESP32) | Hardware/IoT expansion — significant market expansion |

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **High** | [#2343](https://github.com/HKUDS/nanobot/issues/2343) | Context window exceeded — hard crash on 32K+ token requests | **Open**, needs token counting implementation |
| **High** | [#2638](https://github.com/HKUDS/nanobot/issues/2638) | Unbounded memory growth when consolidation fails | **Open**, no fix PR |
| **High** | [#2760](https://github.com/HKUDS/nanobot/issues/2760) | Retry amplification — can 3x upstream load | **Open**, PR #2800 addresses related provider fallback |
| **Medium** | [#2796](https://github.com/HKUDS/nanobot/issues/2796) | Exec tool blocks all localhost access — breaks local service integrations (PinchTab) | **Open**, PR [#2784](https://github.com/HKUDS/nanobot/pull/2784) adds `allowInternalUrls` config |
| **Medium** | [#2795](https://github.com/HKUDS/nanobot/issues/2795) | Telegram shows "thinking" content post-upgrade | **Open**, UX regression |
| **Medium** | [#2775](https://github.com/HKUDS/nanobot/issues/2775) | Tool calls fail — only text output | **Open**, possible tool dispatch bug |
| **Medium** | [#2802](https://github.com/HKUDS/nanobot/issues/2802) | `python-olm` build failure (Matrix E2E) | **Open**, dependency issue |
| **Medium** | [#2797](https://github.com/HKUDS/nanobot/issues/2797) | Heartbeat task never marked complete — infinite re-trigger | **Open**, PR #2801 may address |
| **Low** | [#2799](https://github.com/HKUDS/nanobot/issues/2799) | Documented config `groupAllowFrom`/`groupPolicy:"allowList"` not in code | **Closed** — docs/code sync issue |

**Pattern**: Token/context management and security guardrails are the primary stability risks. The project is actively trading off security (SSRF protection) against usability (local service access).

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Unified cross-platform sessions** | [#2798](https://github.com/HKUDS/nanobot/issues/2798) | High | Simple config toggle; high user value for multi-platform deployments |
| **Dedicated vision provider support** | [#2339](https://github.com/HKUDS/nanobot/issues/2339) | Medium | Architecture change needed; 2 upvotes, clear production use case |
| **Configurable tool limits** | [#2767](https://github.com/HKUDS/nanobot/pull/2767) | High | PR exists, addresses hardcoded constants |
| **Provider fallback on rate-limit** | [#2800](https://github.com/HKUDS/nanobot/pull/2800) | High | PR exists, solves production pain point |
| **Xiaozhi voice/ESP32 support** | [#2584](https://github.com/HKUDS/nanobot/pull/2584) | Medium | Large PR, hardware integration complexity |
| **Crawl4AI web scraping** | [#2724](https://github.com/HKUDS/nanobot/pull/2724) | Medium | Space tradeoff (Chromium), may need config flag |
| **Vietnamese localization** | [#1164](https://github.com/HKUDS/nanobot/pull/1164) | Low | Documentation PR, backlog since Feb 25 |

**Emerging Theme**: "Agent autonomy" features — heartbeat (#2801), notification evaluation, proactive behavior — suggest roadmap toward less reactive, more autonomous agents.

---

## 7. User Feedback Summary

### Pain Points
- **Token management**: Users hitting hard context limits with no graceful degradation [#2343](https://github.com/HKUDS/nanobot/issues/2343)
- **Security/usability tension**: SSRF protection too aggressive for legitimate local development workflows [#2796](https://github.com/HKUDS/nanobot/issues/2796), [#2669](https://github.com/HKUDS/nanobot/issues/2669)
- **Upgrade fragility**: Breaking changes in Telegram output format [#2795](https://github.com/HKUDS/nanobot/issues/2795)

### Validation
> *"NanoBot very stable, completely beats OpenClaw. OpenClaw reinstalled countless times, infected twice, often unresponsive or crashes; NanoBot consistently stable, now well-trained."* — [#2774](https://github.com/HKUDS/nanobot/issues/2774)

This feedback validates architectural decisions around sandboxing and error handling versus competitors.

### Use Cases
- **Windows desktop deployment** (primary platform for vocal users)
- **Multi-platform messaging** (Discord + Telegram cross-session need [#2798](https://github.com/HKUDS/nanobot/issues/2798))
- **Local service integration** (browser automation, Tailscale networks)
- **Long-running background tasks** (spawn tool usage [#2775](https://github.com/HKUDS/nanobot/issues/2775))

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1164](https://github.com/HKUDS/nanobot/pull/1164) Vietnamese README | ~5 weeks | Low community inclusion | Simple merge or close decision |
| [#2339](https://github.com/HKUDS/nanobot/issues/2339) Vision provider support | 2 weeks | Medium — blocking multimodal deployments | Architecture review, provider routing design |
| [#2343](https://github.com/HKUDS/nanobot/issues/2343) Context window enforcement | 2 weeks | **High** — crashes in production | Priority fix, token counting implementation |
| [#2638](https://github.com/HKUDS/nanobot/issues/2638) Unbounded session growth | 1 week | **High** — resource exhaustion | Hard limit + circuit breaker design |

**Maintainer Attention**: The context window (#2343) and session growth (#2638) issues represent **resource exhaustion attack vectors** that could affect hosted deployments. These should be prioritized over feature work.

---

*Digest compiled from 41 GitHub items updated 2026-04-04. Project health: **Active development, scaling challenges, strong community validation.***

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-05

## 1. Today's Overview

PicoClaw shows **high development velocity** with 32 PRs and 12 issues updated in the last 24 hours, indicating an active pre-release stabilization period for v0.2.5. The project is experiencing significant community growth around enterprise/self-hosted deployment scenarios, with heavy focus on authentication hardening, channel integrations (Mattermost, Teams, Grafana), and security architecture ("Agent Shield"). However, **bug density is elevated** — 9 open issues include 5 fresh bug reports from v0.2.5/nightly users, suggesting the release cycle may be ahead of testing coverage. The merge rate (4/32 PRs closed) indicates maintainer throughput constraints relative to contribution volume.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| **[v0.2.5-nightly.20260404.84e42d69](https://github.com/sipeed/picoclaw/compare/v0.2.5...main)** | Nightly | Automated build; explicitly marked **unstable**. No detailed changelog — users should expect regressions. |

**⚠️ Migration Note:** Multiple bug reports (#2319, #2334, #2342) reference this nightly. Production users should remain on v0.2.5 stable.

---

## 3. Project Progress

### Merged/Closed Today (4 items)

| PR/Issue | Type | Summary | Link |
|----------|------|---------|------|
| **#41** | Feature | **Signal channel integration** — privacy-focused messaging now supported | [Issue #41](https://github.com/sipeed/picoclaw/issues/41) |
| **#652** | Bugfix | **Skill-creator workspace fix** — corrected broken `scripts/init_skill.py` reference | [Issue #652](https://github.com/sipeed/picoclaw/issues/652) |
| **#2283** | Bugfix | **Newline encoding in file tools** — resolved `\n` auto-conversion bug in `write_file`/`edit_file` | [Issue #2283](https://github.com/sipeed/picoclaw/issues/2283) |
| **#2320** | Bugfix | **JSON escape semantics** — clarified nested-JSON escaping with tests (superseded by #2338) | [PR #2320](https://github.com/sipeed/picoclaw/pull/2320) |

### Significant Advances

- **Authentication modernization**: PRs #2317/#2318/#2339 replace "token-in-logs" auth with **bcrypt-backed HTTP login flow** — major UX improvement for self-hosted users
- **Enterprise channels**: Active development on Mattermost (#1586), Microsoft Teams (#2244), and Grafana Alertmanager (#2251) integrations
- **Security hardening**: "Agent Shield" multi-PR effort (#2313, #2327) adding multi-user support, skills whitelisting, and K3s deployment manifests (#2326)

---

## 4. Community Hot Topics

### Most Active by Engagement

| # | Topic | Comments/👍 | Analysis |
|---|-------|-------------|----------|
| **#2236** | Docker port remapping breaks Web UI | 7 comments | **Deployment friction**: Users customizing ports hit hardcoded assumptions in frontend/backend coupling. Signals need for configuration validation. |
| **#41** | Signal channel (now closed) | 4 comments, 7 👍 | **Privacy demand validated**: Strong community interest in E2E-encrypted channels. Closed successfully — pattern for WhatsApp/others? |
| **#292** | Android device automation | 4 comments | **Mobile agent expansion**: "Botdrop-like" functionality requested; bridges LLMs to smartphone UIs. High roadmap priority given Zepan's (maintainer?) authorship. |

### Underlying Needs
- **Simpler self-hosting**: Docker/port issues (#2236) + auth complaints (#2317) reveal onboarding friction
- **Enterprise compliance**: Mattermost/Teams + security hardening PRs suggest B2B/institutional adoption push

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **High** | [#2319](https://github.com/sipeed/picoclaw/issues/2319) | **WebSocket connect fail** in v0.2.5 | No PR linked; blocks real-time channels |
| 🔴 **High** | [#2342](https://github.com/sipeed/picoclaw/issues/2342) | **Provider ERROR 400** — all OpenAI/Groq/OpenRouter models broken | No PR linked; likely API schema drift |
| 🔴 **High** | [#2334](https://github.com/sipeed/picoclaw/issues/2334) | **Model fallbacks don't work** — config ignored | No PR linked; reliability regression |
| 🟡 **Medium** | [#2236](https://github.com/sipeed/picoclaw/issues/2236) | Docker port remapping disables Web UI | No PR linked; workaround: use default ports |
| 🟡 **Medium** | [#2335](https://github.com/sipeed/picoclaw/issues/2335) | Android/Termux adaptation issues | No PR linked; mobile platform gap |
| 🟢 **Low** | [#2337](https://github.com/sipeed/picoclaw/issues/2337) | Escape semantics docs provider-specific | **Fix PR #2338 open** |

**Pattern**: 3 of 5 high/critical bugs lack linked fixes. Provider ecosystem fragility (OpenAI schema changes, fallback logic) is emerging as systemic risk.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood v0.2.6 | Rationale |
|---------|--------|-------------------|-----------|
| **Provider-level model management** | [#2321](https://github.com/sipeed/picoclaw/issues/2321) | High | Reduces config redundancy; aligns with multi-model trends |
| **Structured context compression (6-phase)** | [#2333](https://github.com/sipeed/picoclaw/pull/2333) | High | Active PR; token optimization critical for cost control |
| **Short-term memory engine (LCM/Seahorse)** | [#2285](https://github.com/sipeed/picoclaw/pull/2285) | Medium | SQLite-based DAG summaries; large PR needs review bandwidth |
| **Android device automation** | [#292](https://github.com/sipeed/picoclaw/issues/292) | Medium | Maintainer-authored; depends on mobile architecture decisions |
| **Agent Skills standard compliance** | [#2315](https://github.com/sipeed/picoclaw/issues/2315) | High | Marketing/standards alignment; trivial implementation |

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | Quote/Signal |
|-------|-----------|--------------|
| **Authentication UX** | Repeated | "token-in-logs" → "non-standard, error-prone" (#2317) |
| **Provider reliability** | Surging | "any request go to this e[rror]" — complete provider failure (#2342) |
| **Documentation gaps** | Steady | Escape semantics confusion (#2337, #2320, #2283) |
| **Mobile/edge deployment** | Growing | Android Termux, Pi Zero 2 W (#2335, #2345) |

### Satisfaction Signals
- **Signal integration** closed with community celebration (7 👍)
- **Security hardening** PRs show institutional user investment
- **MCP ecosystem** adoption: Engram memory server guide contributed (#2345)

---

## 8. Backlog Watch

| Age | Item | Risk | Action Needed |
|-----|------|------|---------------|
| **~3 weeks** | [#1586](https://github.com/sipeed/picoclaw/pull/1586) Mattermost channel | Merge conflict, bitrot | Rebase or close; enterprise demand exists |
| **~2 weeks** | [#292](https://github.com/sipeed/picoclaw/issues/292) Android automation | Scope creep | Clarify MVP vs. full "Botdrop" parity |
| **~1 week** | [#2215](https://github.com/sipeed/picoclaw/pull/2215) Hooks enhancement | Review backlog | Documentation-complete; needs maintainer review |

**Maintainer Capacity Signal**: 28 open PRs vs. 4 closed suggests **review bottleneck** may be constraining release quality. Consider triage automation or co-maintainer expansion.

---

*Digest generated from GitHub activity 2026-04-04 → 2026-04-05. Data source: sipeed/picoclaw public repository.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-05

---

## 1. Today's Overview

NanoClaw shows **high community velocity** with 20 PRs and 4 issues updated in the last 24 hours, though no new releases were cut. The project is experiencing **intense activity around provider diversification** (OpenAI Codex, OpenCode SDK) driven by Anthropic's policy changes that now bill OAuth usage as "extra usage" rather than subscription allowance. Security hardening is also a major theme with multiple PRs addressing container escape risks and public server deployment pitfalls. The maintainer review queue appears strained with 14 open PRs needing attention, including several long-running channel skill additions. Overall project health is **active but bottlenecked at review/merge stage**.

---

## 2. Releases

**No new releases** (v0.0.0 or latest unchanged).

---

## 3. Project Progress

### Merged/Closed Today (6 PRs)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#1634](https://github.com/qwibitai/nanoclaw/pull/1634) | gavrielc | Skill migration tooling for NanoClaw | Operational infrastructure |
| [#1633](https://github.com/qwibitai/nanoclaw/pull/1633) | gavrielc | Migration skill from OpenClaw | Operational infrastructure |
| [#1632](https://github.com/qwibitai/nanoclaw/pull/1632) | gavrielc | Auto-prune stale session artifacts | **Reliability/ops** — prevents disk bloat |
| [#1627](https://github.com/qwibitai/nanoclaw/issues/1627) | TimHorstisTomHirst | Rebase fork on upstream (prerequisite for #14-17) | **Blocked work unblocked** |
| [#1625](https://github.com/qwibitai/nanoclaw/pull/1625) | shin902 | Import PlaceType/ActorRole types from VRC-AI-Bot | Architecture foundation for context-aware behaviors |
| [#1622](https://github.com/qwibitai/nanoclaw/pull/1622) | oferkirsh | Setup branch (closed without merge) | — |

**Key advances:** Session lifecycle management improved with automatic cleanup; type system expanded for richer context modeling; prerequisite rebase completed enabling blocked feature work.

---

## 4. Community Hot Topics

### Most Active Discussion

| Item | Activity | Core Tension |
|:---|:---|:---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) — Multi-provider support | **31 comments, 56 👍** | **Existential risk mitigation**: Users report Anthropic shutting down subscriptions for "OpenClaw usage," creating urgent need for provider alternatives |

**Underlying need:** The community is **hedging against platform risk**. Anthropic's policy shift (extra billing for OAuth, subscription terminations) has transformed multi-provider support from "nice-to-have" to **critical infrastructure**. The simultaneous filing of [#963](https://github.com/qwibitai/nanoclaw/pull/963) (OpenAI Codex) and [#1628](https://github.com/qwibitai/nanoclaw/pull/1628) (OpenCode SDK) shows convergent community effort.

### High-Visibility New Issues

| Issue | Comments | Signal |
|:---|:---|:---|
| [#1608](https://github.com/qwibitai/nanoclaw/issues/1608) — OAuth setup confusion | 2 | Documentation gap causing real auth failures |
| [#1620](https://github.com/qwibitai/nanoclaw/issues/1620) — OAuth bills as extra usage | 1 | **Policy change broke cost model**; users need migration path to API keys |

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#1630](https://github.com/qwibitai/nanoclaw/pull/1630) | Container escape: agent can modify own runner source via R/W mount + bypassPermissions | **PR open, needs review** |
| 🔴 **Critical** | [#1629](https://github.com/qwibitai/nanoclaw/pull/1629) | OneCLI exposes PostgreSQL/gateway on 0.0.0.0, bypassing UFW on public servers | **PR open, needs review** |
| 🟡 **High** | [#1623](https://github.com/qwibitai/nanoclaw/pull/1623) | 30-minute deadlock when messages piped to active container | **PR open** |
| 🟡 **High** | [#1617](https://github.com/qwibitai/nanoclaw/pull/1617) | Scheduled tasks enqueued under wrong JID, breaking delivery | **PR open** |
| 🟡 **High** | [#954](https://github.com/qwibitai/nanoclaw/pull/954) | OpenRouter non-Anthropic model routing broken | **PR open since March 11** |
| 🟢 **Medium** | [#1608](https://github.com/qwibitai/nanoclaw/issues/1608) | OAuth setup undocumented, `ANTHROPIC_API_KEY=placeholder` injection causes auth failures | No fix PR |

**Assessment:** Two **critical security issues** filed today with fixes pending review. The container escape and public server exposure represent deployment risks for production users.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Evidence | Likelihood in Next Release |
|:---|:---|:---|
| **OpenAI Codex backend** | [#963](https://github.com/qwibitai/nanoclaw/pull/963) — "opt-in alternative agent engine" | **High** — directly addresses #80, community priority |
| **OpenCode SDK backend** | [#1628](https://github.com/qwibitai/nanoclaw/pull/1628) — "second agent runner alongside Anthropic" | **High** — same driver, competitive with #963 |
| **Matrix channel (E2EE)** | [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) — full implementation with Rust crypto | **Medium** — complete PR, needs review bandwidth |
| **Signal channel** | [#1121](https://github.com/qwibitai/nanoclaw/pull/1121) — since March 16, "needs review" | **Medium** — mature but stalled |
| **Mattermost channel** | [#546](https://github.com/qwibitai/nanoclaw/pull/546) — since Feb 26, "blocked" | **Low** — longest stalled, architecture questions |
| **Security policy engine** | [#1605](https://github.com/qwibitai/nanoclaw/pull/1605) — deterministic gating, tool restrictions | **Medium** — supersedes #1360, maintainer feedback incorporated |
| **Memory upgrade (LanceDB Pro)** | [#1283](https://github.com/qwibitai/nanoclaw/pull/1283) — hybrid BM25+vector | **Medium** — significant improvement, needs review |
| **Sentry integration** | [#1631](https://github.com/qwibitai/nanoclaw/pull/1631) | **Medium** — observability skill |
| **Telegram topic isolation** | [#1626](https://github.com/qwibitai/nanoclaw/pull/1626) | **Medium** — incremental channel improvement |

**Prediction:** Next release will likely include **at least one alternative agent backend** (Codex or OpenCode) given the urgency of #80. Security hardening PRs [#1630](https://github.com/qwibitai/nanoclaw/pull/1630) and [#1629](https://github.com/qwibitai/nanoclaw/pull/1629) should merge given critical severity.

---

## 7. User Feedback Summary

### Pain Points

| Issue | Source | User Impact |
|:---|:---|:---|
| **Anthropic billing/policy hostility** | [#80](https://github.com/qwibitai/nanoclaw/issues/80), [#1620](https://github.com/qwibitai/nanoclaw/issues/1620) | Subscription terminations, unexpected extra usage charges |
| **OAuth setup "confusing and undocumented"** | [#1608](https://github.com/qwibitai/nanoclaw/issues/1608) | Auth failures, time lost debugging `placeholder` injection |
| **Public server deployment footguns** | [#1629](https://github.com/qwibitai/nanoclaw/pull/1629) | Security exposure despite UFW configuration |
| **Review bottleneck** | Multiple PRs stalled 20+ days | Contributor frustration, feature delays |

### Use Cases Emerging

- **Multi-tenant/team deployments**: Security policy engine [#1605](https://github.com/qwibitai/nanoclaw/pull/1605) and hardening PRs suggest production/enterprise adoption
- **Privacy-conscious messaging**: Matrix E2EE [#1624](https://github.com/qwibitai/nanoclaw/pull/1624), Signal [#1121](https://github.com/qwibitai/nanoclaw/pull/1121) indicate demand beyond Telegram
- **Cost-optimized operations**: Migration from OAuth to API keys, provider switching for price arbitrage

### Satisfaction Signals

- High engagement (56 👍 on #80) shows **strong community investment**
- Skill ecosystem growing (Sentry, Signal, Matrix, NapCat/QQ) indicates healthy extensibility model

---

## 8. Backlog Watch

### Long-Stalled Items Needing Maintainer Attention

| Item | Age | Blocker | Risk |
|:---|:---|:---|:---|
| [#546](https://github.com/qwibitai/nanoclaw/pull/546) Mattermost channel | **38 days** | "Blocked" — architecture review? | Contributor attrition, duplicate effort |
| [#954](https://github.com/qwibitai/nanoclaw/pull/954) OpenRouter fix | **25 days** | Clean replacement of #951, still unreviewed | OpenRouter users experiencing regressions |
| [#1121](https://github.com/qwibitai/nanoclaw/pull/1121) Signal channel | **20 days** | "Needs review" | Mature implementation, easy win |
| [#1283](https://github.com/qwibitai/nanoclaw/pull/1283) Memory upgrade | **17 days** | Review bandwidth | Performance improvement stalled |

### Important Unanswered Issues

| Issue | Age | Why It Matters |
|:---|:---|:---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) Multi-provider | **60 days** | Strategic platform risk, 56 👍, now urgent due to Anthropic policy changes |

**Recommendation:** Project would benefit from explicit triage of security PRs [#1630](https://github.com/qwibitai/nanoclaw/pull/1630), [#1629](https://github.com/qwibitai/nanoclaw/pull/1629) and decision on competing backend PRs [#963](https://github.com/qwibitai/nanoclaw/pull/963) vs [#1628](https://github.com/qwibitai/nanoclaw/pull/1628) to prevent contributor fragmentation.

---

*Digest generated from GitHub activity 2026-04-04 to 2026-04-05.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-05

## 1. Today's Overview

NullClaw shows **strong maintenance velocity** with 11 merged/closed PRs against 1 open PR, indicating active code review and integration. The project is in a **stabilization phase** following recent feature releases (v2026.3.17-v2026.3.21), with today's focus on bug fixes, observability improvements, and infrastructure hardening. No new releases were cut today, suggesting maintainers are accumulating changes for the next minor version. The 4:4 open-to-closed issue ratio indicates healthy triage, though 3 fresh bugs reported on 2026-04-04 warrant attention. Community interest is growing in protocol interoperability (AG-UI, A2A, Anthropic native API) and deployment reliability (Docker, configuration).

---

## 2. Releases

**No new releases today.**  
Latest production version remains **v2026.3.21** (released 2026-03-21).

---

## 3. Project Progress

### Merged/Closed PRs (11 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#693](https://github.com/nullclaw/nullclaw/pull/693) | manelsen | **OTEL enhancements**: channel/bot attribution, delegation tracing, skill load spans | Production observability; closes [#690](https://github.com/nullclaw/nullclaw/issues/690) |
| [#678](https://github.com/nullclaw/nullclaw/pull/678) | shkarlsson | **Sandbox isolation** for shell tool execution | Security hardening; `security.sandbox` now active |
| [#687](https://github.com/nullclaw/nullclaw/pull/687) | vernonstinebaker | **Configurable gateway limits**: `max_body_size_bytes`, `request_timeout_seconds` | Operational flexibility for multi-modal workloads |
| [#677](https://github.com/nullclaw/nullclaw/pull/677) | manelsen | **Unified channel loops**: Telegram/Signal routed through shared `ChannelRuntime` | Code deduplication, reliability improvement |
| [#676](https://github.com/nullclaw/nullclaw/pull/676) | manelsen | **Inbound debouncing** (3000ms default) for Telegram/Discord/CLI | UX fix for rapid-fire messages; closes [#618](https://github.com/nullclaw/nullclaw/issues/618) |
| [#673](https://github.com/nullclaw/nullclaw/pull/673) | manelsen | **Shell timeout enforcement**, ignore stdin for TUI commands | Fixes gateway hangs on `htop`/`btop`; closes [#644](https://github.com/nullclaw/nullclaw/issues/644) |
| [#692](https://github.com/nullclaw/nullclaw/pull/692) | realrubberduckdev | **Respect `NULLCLAW_HOME`** in cron.zig | Docker deployment fix; closes [#691](https://github.com/nullclaw/nullclaw/issues/691) |
| [#686](https://github.com/nullclaw/nullclaw/pull/686) | vernonstinebaker | **A2A multi-modal support**: agent card capability, `inlineData`, vision probe | Protocol advancement for image workflows |
| [#685](https://github.com/nullclaw/nullclaw/pull/685) | vernonstinebaker | **Error classification**: handle `msg` field, image+not-supported pattern | Provider compatibility (infini-ai, etc.) |
| [#681](https://github.com/nullclaw/nullclaw/pull/681) | juslintek | **Custom-url model resolution** through provider routing | Configuration reliability |
| [#679](https://github.com/nullclaw/nullclaw/pull/679) | shkarlsson | **Markdown timestamp parsing**, temporal decay, sandbox field re-add | Memory system fixes |

**Key Themes**: Observability (OTEL), security (sandbox), protocol maturity (A2A multi-modal), deployment reliability (Docker, cron), and UX polish (debouncing, shell timeouts).

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#690](https://github.com/nullclaw/nullclaw/issues/690) → [#693](https://github.com/nullclaw/nullclaw/pull/693) | 2 comments, closed with PR | **OTEL as first-class concern**: Users need production-grade tracing for multi-channel, multi-agent deployments. Channel attribution specifically addresses debugging complexity in routed conversations. |
| [#618](https://github.com/nullclaw/nullclaw/issues/618) → [#676](https://github.com/nullclaw/nullclaw/pull/676) | 1 comment, "wife safe solution" meme | **Real-world UX friction**: Rapid-fire messaging is a genuine domestic use case. The playful framing masks a real need for conversational batching in consumer deployments. |
| [#768](https://github.com/nullclaw/nullclaw/issues/768) | New, 0 comments | **AG-UI protocol support**: Emerging industry standard (DataRobot, CopilotKit). NullClaw's A2A endpoint success is driving requests for additional protocol endpoints. |

**Underlying Needs**: 
- **Enterprise/production readiness** (observability, configurability)
- **Consumer accessibility** (tolerating informal interaction patterns)
- **Protocol ecosystem expansion** (positioning as universal agent gateway)

---

## 5. Bugs & Stability

| Issue | Severity | Status | Details |
|:---|:---|:---|:---|
| [#765](https://github.com/nullclaw/nullclaw/issues/765) | **Medium-High** | Open, unassigned | `onboard --interactive` generates malformed/minified `config.json` in v2026.3.21 — first-run experience degradation |
| [#766](https://github.com/nullclaw/nullclaw/issues/766) | **Medium** | Open, unassigned | Custom OpenAI-compatible providers fail with 404 when `/chat/completions` unavailable — provider flexibility regression |
| [#767](https://github.com/nullclaw/nullclaw/issues/767) | **Medium** | Open, unassigned | Native Anthropic API keys non-functional for TRANSLATOR agent — documentation gap or implementation bug? |
| [#644](https://github.com/nullclaw/nullclaw/issues/644) | **High** | **Fixed** via [#673](https://github.com/nullclaw/nullclaw/pull/673) | Gateway hang on interactive commands (`htop`, `btop`) — resolved with timeout enforcement |
| [#691](https://github.com/nullclaw/nullclaw/issues/691) | **Medium** | **Fixed** via [#692](https://github.com/nullclaw/nullclaw/pull/692) | `cron.zig` ignores `NULLCLAW_HOME` — Docker deployment blocker resolved |

**Stability Assessment**: Two critical fixes merged (shell hangs, Docker cron). Three fresh bugs from 2026-04-04 suggest v2026.3.21 release stress; onboarding and provider compatibility need immediate attention.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **AG-UI protocol endpoint** | [#768](https://github.com/nullclaw/nullclaw/issues/768) | **High** | Follows established pattern from A2A implementation; explicit user request with technical specification |
| **Native Anthropic API support** | [#767](https://github.com/nullclaw/nullclaw/issues/767) | **Medium-High** | User unable to configure; may be documentation or implementation gap; competitive parity need |
| **Custom provider endpoint flexibility** | [#766](https://github.com/nullclaw/nullclaw/issues/766) | **Medium** | Part of ongoing OpenAI-compatible provider hardening; fits existing roadmap |
| **Configuration format fixes** | [#765](https://github.com/nullclaw/nullclaw/issues/765) | **High** | Regression in current release; likely hotfix priority |

**Emerging Pattern**: NullClaw is becoming a **protocol aggregation layer** (A2A, AG-UI, MCP, custom OpenAI-compatible). Next major features likely revolve around protocol discovery, unified agent cards, and frontend integration tooling.

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Context | Emotional Tone |
|:---|:---|:---|
| [#765](https://github.com/nullclaw/nullclaw/issues/765) | First-time setup | Frustration: "bad formatting...very hard to read" |
| [#767](https://github.com/nullclaw/nullclaw/issues/767) | Anthropic API integration | Confusion: "I cannot make it work...Am I missing something?" |
| [#618](https://github.com/nullclaw/nullclaw/issues/618) | Spouse's chat habits | Amusement masking genuine UX need: "wife safe solution" |
| [#644](https://github.com/nullclaw/nullclaw/issues/644) | Running system tools | Alarm: "gateway hangs, needs to be killed with -9" |

### Positive Signals
- **Debouncing** ([#676](https://github.com/nullclaw/nullclaw/pull/676)) directly addresses real household deployment
- **Sandboxing** ([#678](https://github.com/nullclaw/nullclaw/pull/678)) shows security consciousness for tool use
- **OTEL improvements** ([#693](https://github.com/nullclaw/nullclaw/pull/693)) indicate production user investment

### Use Case Evolution
| Segment | Evidence | Needs |
|:---|:---|:---|
| **Home/personal** | #618, wife's bot | Tolerance for informal interaction, simple deployment |
| **Small team/startup** | #690, OTEL tracing | Observability, multi-channel routing |
| **Enterprise/platform** | #768, AG-UI request | Protocol standards, frontend integration |

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#675](https://github.com/nullclaw/nullclaw/pull/675) | 14 days open | **Staleness** | Gemini CLI 0.34 ACP handshake alignment — protocol compatibility fix awaiting review |
| — | — | — | No other long-unanswered critical items; maintainer responsiveness appears strong |

**Assessment**: Single at-risk PR. The 11:1 merged-to-open PR ratio suggests healthy review velocity. No significant backlog accumulation.

---

## Project Health Score: **B+**

| Dimension | Grade | Notes |
|:---|:---|:---|
| Velocity | A | 11 PRs merged, rapid bug-fix turnaround |
| Stability | B | 3 fresh bugs in current release, but fixes shipping |
| Community | B+ | Growing protocol ecosystem interest, responsive to edge cases |
| Documentation | C+ | Onboarding regression (#765), Anthropic confusion (#767) |
| Roadmap Clarity | A- | Clear direction toward multi-protocol gateway |

**Recommendation**: Prioritize hotfix for #765 (onboarding regression) and clarify Anthropic configuration (#767) to maintain release quality reputation.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-05

## 1. Today's Overview

IronClaw shows **high development velocity** with 43 PRs updated in the last 24 hours (31 open, 12 merged/closed) and 6 active issues. The project is in a **feature-heavy phase** with multiple large-scope PRs targeting core infrastructure: workspace entities, structured collections, commitments system, and new channel integrations (Matrix, WeChat). No new releases were cut today, suggesting maintainers are accumulating changes before a version bump. Notably, **AI-generated code is entering the codebase**—three PRs (#2020, #2022, #2024) from contributor `793383996` explicitly mark "create by 5.3 Codex," with two already closed and one open, indicating maintainer caution around AI-authored changes.

---

## 2. Releases

**No new releases** — version unchanged.

---

## 3. Project Progress

### Merged/Closed PRs Today (12 total, notable items)

| PR | Title | Significance |
|:---|:---|:---|
| [#2011](https://github.com/nearai/ironclaw/issues/2011) | Engine v2 threads advertise mission_create without exposing it as callable action | **Bug fix closed** — Engine v2 capability advertisement/execution mismatch resolved |
| [#2016](https://github.com/nearai/ironclaw/pull/2016) | feat: add proof_of_claw crate to ironclaw workspace | **Closed** — ZK proof integration for agent execution; likely superseded by [#2021](https://github.com/nearai/ironclaw/pull/2021) |
| [#1912](https://github.com/nearai/ironclaw/pull/1912) | feat: nearai mcp by env | **Closed** — Environment-derived MCP server; superseded by [#2009](https://github.com/nearai/ironclaw/pull/2009) with persisted bootstrap approach |
| [#2020](https://github.com/nearai/ironclaw/pull/2020), [#2022](https://github.com/nearai/ironclaw/pull/2022) | fix(agent,workspace): harden compaction consistency | **Closed duplicates** — AI-generated PRs, likely closed due to process/policy |

### Advancing Features (Open PRs with momentum)

- **[#1738](https://github.com/nearai/ironclaw/pull/1738)** — Routine result injection into agentic loop (agent review system)
- **[#1937](https://github.com/nearai/ironclaw/pull/1937)** — Structured collections/typed CRUD for agent workspaces (addresses fragmentation pain point)
- **[#1736](https://github.com/nearai/ironclaw/pull/1736)** — Commitments tracking system (9 SKILL.md files, no Rust changes—pure skill-layer feature)
- **[#2019](https://github.com/nearai/ironclaw/pull/2019)** — Native Matrix channel with E2E encryption support
- **[#1666](https://github.com/nearai/ironclaw/pull/1666)** — WeChat WASM channel (WIP, QR login, long-poll)

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Type | Heat | Analysis |
|:---|:---|:---|:---|
| [#1996](https://github.com/nearai/ironclaw/issues/1996) | Issue | 🔥 **Critical PROD bug** | "Task Cannot Complete — Tools Disabled" in routine runs. **Root cause**: tools explicitly disabled in routine execution context. Blocks production deployments using routines. |
| [#2010](https://github.com/nearai/ironclaw/issues/2010) | Issue | 🔥 **Regression** | `AGENT_AUTO_APPROVE_TOOLS=true` ignored in Engine V2. Root cause identified (commit 4c9a985b). Silent behavior change breaking automation workflows. |
| [#1738](https://github.com/nearai/ironclaw/pull/1738) | PR | High complexity | XL-sized routine agent review system—architectural change to message sourcing. |

### Underlying Needs Analysis

- **Production reliability**: [#1996](https://github.com/nearai/ironclaw/issues/1996) and [#2010](https://github.com/nearai/ironclaw/issues/2010) reveal Engine V2 maturity gaps—feature parity with V1 not yet achieved
- **Deterministic workflows**: [#2017](https://github.com/nearai/ironclaw/issues/2017) (SOP engine request) + [#1736](https://github.com/nearai/ironclaw/pull/1736) (commitments) show demand for structured, repeatable agent behavior beyond ad-hoc tool calling

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|:---|:---|:---|:---|
| **P0 — Production blocker** | [#1996](https://github.com/nearai/ironclaw/issues/1996): Routine runs fail with "Tools Disabled" on PROD | Open, active | ❌ No linked fix |
| **P1 — Regression** | [#2010](https://github.com/nearai/ironclaw/issues/2010): `AGENT_AUTO_APPROVE_TOOLS=true` ignored in Engine V2 | Open | ❌ No linked fix (root cause known) |
| **P2 — Security** | [#1591](https://github.com/nearai/ironclaw/pull/1591): TOCTOU race in approval processing | Open PR | ✅ Fix in review |
| **P2 — Data integrity** | [#2024](https://github.com/nearai/ironclaw/pull/2024): Workspace compaction consistency | Open (AI-generated) | ⚠️ Under review |

**Stability Assessment**: Engine V2 path has **two confirmed regressions** affecting automation reliability. The "Tools Disabled" bug suggests architectural tension between routine isolation and tool availability. No emergency patches released.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Kubernetes runtime** | [#2023](https://github.com/nearai/ironclaw/issues/2023) | Medium-High | Operational necessity for non-Docker deployments; aligns with enterprise adoption curve |
| **Deterministic SOP engine** | [#2017](https://github.com/nearai/ironclaw/issues/2017) | Medium | Complements existing routine system; may be skill-layer implementable |
| **DID-based secure orchestration** | [#2018](https://github.com/nearai/ironclaw/issues/2018) | Lower | Architectural shift requiring WASM isolation + identity infrastructure; more 6-12 month horizon |
| **Matrix channel** | [#2019](https://github.com/nearai/ironclaw/pull/2019) | **High** | PR already open, feature-complete with E2E encryption |

**Emerging Theme**: "Agent Teams" and multi-agent orchestration appearing across [#2018](https://github.com/nearai/ironclaw/issues/2018) and [#1734](https://github.com/nearai/ironclaw/pull/1734) (workspace sharing) suggest next major release may focus on collaborative agent patterns.

---

## 7. User Feedback Summary

### Pain Points (Explicit)

| Source | Pain Point | Frequency |
|:---|:---|:---|
| [#1996](https://github.com/nearai/ironclaw/issues/1996) | Routines fail silently in production due to tool restrictions | Production blocker |
| [#2010](https://github.com/nearai/ironclaw/issues/2010) | Environment variables behave inconsistently across engine versions | Configuration confusion |
| [#1937](https://github.com/nearai/ironclaw/pull/1937) description | Document fragmentation: "creates a new document every time (fragmenting the list)" | Common UX failure |
| [#2023](https://github.com/nearai/ironclaw/issues/2023) | Docker-in-Docker "operationally fragile" on Kubernetes | Infrastructure limitation |

### Use Cases Surfacing

- **Personal task management**: [#1736](https://github.com/nearai/ironclaw/pull/1736) commitments system targets "active intake for personal AI assistant"
- **Enterprise audit/compliance**: [#2017](https://github.com/nearai/ironclaw/issues/2017) SOP engine request explicitly mentions "financial audits"
- **Decentralized/decentralized-adjacent**: [#2018](https://github.com/nearai/ironclaw/issues/2018) DID proposal, [#2021](https://github.com/nearai/ironclaw/pull/2021) 0G integration show crypto-native user segment

### Satisfaction Signals

- Rich skill ecosystem (ClawHub) with opt-out capability ([#1594](https://github.com/nearai/ironclaw/pull/1594))
- Multiple first-party channel integrations (Matrix, WeChat, CLI, Web) indicate platform breadth investment

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1470](https://github.com/nearai/ironclaw/pull/1470) | 16 days | Medium | Routine notification normalization—ready for final review? |
| [#1594](https://github.com/nearai/ironclaw/pull/1594) | 13 days | Low | CLAWHUB_ENABLED flag—scope creep across 15+ modules may need decomposition |
| [#1666](https://github.com/nearai/ironclaw/pull/1666) | 10 days | Medium | WeChat channel marked WIP—needs maintainer direction on WASM channel architecture |
| [#1734](https://github.com/nearai/ironclaw/pull/1734) | 7 days | **High** | First-class workspace entities—XL scope, high risk, core architectural change; needs active maintainer pairing |

**Maintainer Attention Recommended**: [#1734](https://github.com/nearai/ironclaw/pull/1734) workspace entities PR is both high-impact and high-risk; 7 days without merge suggests either careful review or architectural discussion needed. [#1996](https://github.com/nearai/ironclaw/issues/1996) PROD bug lacks assigned fix—priority escalation warranted.

---

*Digest generated from IronClaw GitHub activity 2026-04-04 to 2026-04-05. All links: https://github.com/nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-05

## 1. Today's Overview

LobsterAI shows **high development velocity** with 15 PRs updated in the last 24 hours, though only 1 merged/closed. The project is experiencing an **intensive UX polish sprint**, with 6 new issues and 9 related PRs all targeting data loss prevention through unsaved-change confirmations. A single contributor (@MaoQianTu) filed 5 critical UX bugs and immediately submitted matching fixes, indicating either a coordinated bug bash or internal QA push. No new releases were cut. The 14:1 open-to-merged PR ratio suggests a potential review bottleneck despite active development.

---

## 2. Releases

**None** — No new releases published.

---

## 3. Project Progress

### Merged/Closed Today

| PR | Description | Impact |
|:---|:---|:---|
| [#797](https://github.com/netease-youdao/LobsterAI/pull/797) | Fixed OpenClaw gateway crash loop when `openclaw-weixin` plugin uninstalled | **Stability fix** — prevents gateway restart failures due to invalid channel config |

### Active Development (Open PRs)

| PR | Description | Status |
|:---|:---|:---|
| [#1464](https://github.com/netease-youdao/LobsterAI/pull/1464) | IM multi-instance duplicate validation (DingTalk, Feishu, QQ) | Under review |
| [#1480](https://github.com/netease-youdao/LobsterAI/pull/1480) | Auto-refresh skills list + toast after install | Ready |
| [#1481](https://github.com/netease-youdao/LobsterAI/pull/1481) | Scrollable active skill chips in prompt bar | Ready |
| [#1479](https://github.com/netease-youdao/LobsterAI/pull/1479) | Reject duplicate skill folder on install | Ready |
| [#1467](https://github.com/netease-youdao/LobsterAI/pull/1467) | macOS shortcut display fix (⌘ vs Ctrl) | Ready |
| [#1466](https://github.com/netease-youdao/LobsterAI/pull/1466) | MCP modal scroll fix — keeps close button accessible | Ready |
| [#1465](https://github.com/netease-youdao/LobsterAI/pull/1465) | Fix ghost cron sessions after task deletion | Ready |
| [#1463](https://github.com/netease-youdao/LobsterAI/pull/1463) | Truncate long modal titles with tooltip | Ready |

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) — Per-agent model binding + multi-agent collaboration | 1 comment, 0 👍 | **Highest strategic value**. User explicitly compares to Alibaba's HiClaw, positioning LobsterAI as superior in UX but lacking advanced orchestration. Signals demand for: (1) model-agnostic agent configuration, (2) hierarchical agent teams with manager/worker patterns. This is a competitive differentiation request. |

The remaining 5 issues (#1468-#1472) are **zero-engagement UX bugs** filed by a single author with immediate PR fixes—likely internal rather than organic community demand.

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR | Description |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#1472](https://github.com/netease-youdao/LobsterAI/issues/1472) | [#1477](https://github.com/netease-youdao/LobsterAI/pull/1477) | **Silent data loss**: Re-editing history message overwrites unsent input without confirmation |
| 🔴 **Critical** | [#1471](https://github.com/netease-youdao/LobsterAI/issues/1471) | [#1476](https://github.com/netease-youdao/LobsterAI/pull/1476) | **Silent data loss**: 300ms debounce causes draft loss on rapid navigation |
| 🔴 **Critical** | [#1470](https://github.com/netease-youdao/LobsterAI/issues/1470) | [#1475](https://github.com/netease-youdao/LobsterAI/pull/1475) | **Silent data loss**: MCP server config lost on Escape/overlay click |
| 🔴 **Critical** | [#1469](https://github.com/netease-youdao/LobsterAI/issues/1469) | [#1474](https://github.com/netease-youdao/LobsterAI/pull/1474) | **Silent data loss**: Agent settings lost on panel close |
| 🔴 **Critical** | [#1468](https://github.com/netease-youdao/LobsterAI/issues/1468) | [#1473](https://github.com/netease-youdao/LobsterAI/pull/1473) | **Silent data loss**: Create Agent form lost on modal close |
| 🟡 **Medium** | [#1465](https://github.com/netease-youdao/LobsterAI/pull/1465) | Self-fixing | Ghost cron sessions resurrect after restart |
| 🟡 **Medium** | [#1478](https://github.com/netease-youdao/LobsterAI/pull/1478) | Self-fixing | Memory leak in CopyButton unmounted timer |
| 🟡 **Medium** | [#797](https://github.com/netease-youdao/LobsterAI/pull/797) | ✅ Merged | Gateway crash loop on missing WeChat plugin |

**Pattern**: Five critical data-loss bugs share root cause—**absence of dirty-state tracking across modal/panel components**. All have matching PRs from the same author who reported them, suggesting this is a **coordinated quality initiative** rather than reactive bug fixing.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release |
|:---|:---|:---|
| **Per-agent model binding** | [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) | **High** — Architectural foundation exists (v4.3 multi-instance IM); extends existing pattern |
| **Multi-agent collaboration / "agent rooms"** | [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) | **Medium** — Requires new orchestration layer; competitor (HiClaw) has it but UX criticized |
| **Manager-worker agent scheduling** | [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) | **Medium** — Depends on above; "room" abstraction needed first |

No other feature requests in today's data. The project appears **feature-complete for current scope**, focusing on polish over expansion.

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | User Impact |
|:---|:---|:---|
| **Unsaved work loss** | 5/6 issues | **Severe** — Users lose agent configs, MCP settings, draft messages silently |
| **Modal UX friction** | Multiple PRs | **Moderate** — Long titles overflow, close buttons scroll away, shortcuts wrong on Mac |
| **Skill/IM management** | 3 PRs | **Moderate** — Duplicate entries allowed, no visual feedback on install |

### Satisfaction Signals
- User in [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) explicitly states LobsterAI has **better UX than Alibaba HiClaw**
- v4.3 multi-instance IM feature praised as "very practical" (很实用)

### Use Cases Emerging
- **Enterprise IM integration**: Heavy focus on DingTalk/Feishu/QQ multi-instance suggests B2B deployment
- **MCP ecosystem adoption**: Active MCP server configuration work indicates Model Context Protocol integration is live and used

---

## 8. Backlog Watch

| Risk | Item | Days Open | Action Needed |
|:---|:---|:---|:---|
| 🟡 **Review bottleneck** | 14 open PRs vs. 1 merged | — | Maintainer review capacity may be constrained; all 9 UX-fix PRs from @MaoQianTu are ready for batch review |
| 🟡 **Unvalidated feature request** | [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) multi-agent | 1 day | Needs maintainer response on roadmap alignment; competitive pressure from HiClaw |

**No stale issues** — all activity is <24 hours old. Project health indicator: **strong momentum, potential merge queue buildup**.

---

*Digest generated from GitHub activity 2026-04-04 to 2026-04-05*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-05

## 1. Today's Overview

Moltis shows **moderate community activity** with 6 fresh issues and 2 new pull requests opened in the last 24 hours, though no releases or merged code. The project appears to be in a **bug triage phase** with 5 of 6 new issues being bug reports—primarily around provider/model management and OAuth flows. Notably, user `bsarkisov` contributed 4 of the 6 issues, suggesting either a power user stress-testing the system or potential regressions in recent builds. No maintainer merges or releases indicate possible **review backlog or pre-release stabilization period**.

---

## 2. Releases

**No new releases** (v0.0.0 or previous version remains current).

---

## 3. Project Progress

**No merged or closed PRs today.** Both active PRs remain open awaiting review:

| PR | Author | Description | Status |
|:---|:---|:---|:---|
| [#555](https://github.com/moltis-org/moltis/pull/555) | volfco | Add streamable HTTP MCP server support (closes #294) | 🟡 Open |
| [#550](https://github.com/moltis-org/moltis/pull/550) | BLumia | Optional channel-level proxy for Telegram (addresses #548) | 🟡 Open |

**Technical significance:** PR #555 implements [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) streamable HTTP transport—an emerging standard for AI agent tool integration. This positions Moltis for broader ecosystem compatibility.

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Issue/PR | Activity | Analysis |
|:---|:---|:---|:---|
| 1 | [#549](https://github.com/moltis-org/moltis/issues/549) MacOS Desktop App OAuth flow broken for Codex | 1 comment | **Platform-specific auth regression**—blocks OpenAI Codex adoption on macOS; user `c0bra` engaged with maintainer |
| 2 | [#554](https://github.com/moltis-org/moltis/issues/554) "Service unavailable" error when probing providers | 1 comment | **Connectivity reliability**—false negatives in health checks damage user trust in provider configuration |

### Underlying Needs
- **OAuth reliability**: Desktop app authentication flows remain fragile across platforms
- **Provider health check accuracy**: Users need confidence that "unavailable" means actually unavailable, not a probing bug

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---:|
| 🔴 **High** | [#549](https://github.com/moltis-org/moltis/issues/549) | macOS OAuth flow fails for Codex—**complete blocker** for OpenAI integration on desktop | ❌ No |
| 🟡 **Medium** | [#554](https://github.com/moltis-org/moltis/issues/554) | Erroneous "Service unavailable" errors—**erodes trust** in provider management | ❌ No |
| 🟡 **Medium** | [#552](https://github.com/moltis-org/moltis/issues/552) | Cannot add multiple models per provider—**workflow limitation** | ❌ No |
| 🟡 **Medium** | [#551](https://github.com/moltis-org/moltis/issues/551) | "Detect all models" only probes existing, doesn't discover new—**UX confusion** | ❌ No |
| 🟢 **Low** | [#556](https://github.com/moltis-org/moltis/issues/556) | Mistral/Qwen vision capabilities not respected—**feature gap** | ❌ No |

**Pattern**: All bugs relate to **provider/model lifecycle management**—suggesting this subsystem needs architectural attention. No fix PRs linked yet.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Prediction |
|:---|:---|:---|
| [#553](https://github.com/moltis-org/moltis/issues/553) | Per-agent loopback and timeout settings | **Likely v-next**: Agent-level configuration is a natural evolution of Moltis's multi-agent architecture; low implementation complexity |
| [#555](https://github.com/moltis-org/moltis/pull/555) | MCP streamable HTTP server support | **In progress**: Critical for 2025-2026 agent ecosystem interoperability; PR open |
| [#550](https://github.com/moltis-org/moltis/pull/550) | Telegram channel-level proxy | **Merge candidate**: Small scope, addresses specific deployment need (#548) |

**Emerging theme**: Users need **fine-grained control** over agent behavior and network configuration—moving beyond "it works" to "it works *my way*."

---

## 7. User Feedback Summary

### Pain Points (verbatim patterns)
> *"forced to select one"* [#552](https://github.com/moltis-org/moltis/issues/552) — **Model selection rigidity**
> *"doesn't detect all models, just probing existing ones"* [#551](https://github.com/moltis-org/moltis/issues/551) — **Discovery vs. verification confusion**
> *"Service unabailable"* [sic] [#554](https://github.com/moltis-org/moltis/issues/554) — **False negatives in health checks**

### Use Cases Surfacing
- **Multi-model provider workflows**: Users expect to configure GPT-4o + o3-mini + Codex from single OpenAI key
- **Vision-enabled agents**: Mistral/Qwen vision support gap blocks multimodal use cases
- **Enterprise/networked deployments**: Telegram proxy settings indicate corporate/region-locked usage

### Satisfaction Signal
Users follow preflight checklists and provide structured reports → **engaged, patient community** despite friction points.

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#294](https://github.com/moltis-org/moltis/issues/294) (closed by #555) | ~2+ months | ✅ Addressed | Review/merge PR #555 |
| [#548](https://github.com/moltis-org/moltis/issues/548) | ~1 day | 🟡 Fresh | Review/merge PR #550 |
| **All 6 new issues** | 1-2 days | 🟡 Unacknowledged | Triage assignment needed |

**Maintainer attention required**: No maintainer comments on any of today's 8 new items. With 6 bugs concentrated in provider management, a **thematic bug bash or subsystem refactor** may be warranted.

---

*Digest generated from github.com/moltis-org/moltis data as of 2026-04-05.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-05

## 1. Today's Overview

CoPaw shows **elevated community activity** with 22 issues and 15 PRs updated in the last 24 hours, indicating a growing user base actively stress-testing the v1.0.1 release. The project is in a **stabilization phase** with no new releases, but significant bug reports around core functionality—particularly provider integrations, idle resource consumption, and UI/UX friction—suggest the v1.0.x series needs patch attention. First-time contributors are notably active, submitting 4 PRs including WhatsApp channel support and multi-message features. The maintainer team appears responsive with 4 issues and 8 PRs closed, though several critical bugs lack assigned fixes. Overall project health is **moderate-to-healthy** with strong community engagement but accumulating technical debt in provider abstractions and Windows platform support.

---

## 2. Releases

**No new releases.** Current stable remains **v1.0.1** (released prior to this period). A version bump PR to **v1.0.2b1** was merged ([PR #2942](https://github.com/agentscope-ai/CoPaw/pull/2942)), suggesting a beta release is imminent.

---

## 3. Project Progress

### Merged/Closed PRs (8 items)

| PR | Description | Significance |
|:---|:---|:---|
| [#2889](https://github.com/agentscope-ai/CoPaw/pull/2889) | Support CoPaw Local Update + fix parse error with MAX_REPETITION_THRESHOLD | **Major** — Enables self-hosted model updates, fixes config parsing |
| [#2942](https://github.com/agentscope-ai/CoPaw/pull/2942) | Bump version to 1.0.2b1 | Release preparation |
| [#2938](https://github.com/agentscope-ai/CoPaw/pull/2938) | Restrict model discovery to local providers only | UX improvement — reduces confusion for cloud provider users |
| [#2940](https://github.com/agentscope-ai/CoPaw/pull/2940) | Support `[SPLIT]` delimiter for multiple messages | **New feature** — enables human-like multi-message responses |
| [#2870](https://github.com/agentscope-ai/CoPaw/pull/2870) | Add OneBot v11 channel (NapCat/QQ integration) | **Major** — expands China IM ecosystem support |
| [#2804](https://github.com/agentscope-ai/CoPaw/pull/2804) | Fix dark mode rendering on cron jobs table | UI polish |
| [#2920](https://github.com/agentscope-ai/CoPaw/pull/2920) | Automated fix for #2459 | Community tooling test (Agora Farm bot) |
| [#2928](https://github.com/agentscope-ai/CoPaw/pull/2928) | WhatsApp channel via neonize (superseded by #2946) | Closed in favor of cleaner implementation |

### Key Advances
- **Channel ecosystem expansion**: OneBot v11 (QQ/NapCat) landed; WhatsApp pending review
- **Local model UX**: Self-update capability for llama.cpp-based deployments
- **Message formatting**: `[SPLIT]` delimiter enables more natural conversational flows

---

## 4. Community Hot Topics

| Rank | Item | Comments | Analysis |
|:---|:---|:---|:---|
| 1 | [#2888](https://github.com/agentscope-ai/CoPaw/issues/2888) — High CPU usage when idle (busy loop in AnyIO) | 7 | **Critical infrastructure bug**. Root cause identified: AnyIO cancellation handling creates busy polling. Affects all deployments—impacts battery life, cloud costs, user trust. Needs immediate maintainer assignment. |
| 2 | [#2923](https://github.com/agentscope-ai/CoPaw/issues/2923) — Feishu newlines not rendered | 7 | **Active investigation**. Author self-corrected root cause analysis (from `_build_post_content` to `_collapse_embedded_newlines`). Fix PR [#2924](https://github.com/agentscope-ai/CoPaw/pull/2924) already submitted. Enterprise China users blocked. |
| 3 | [#2919](https://github.com/agentscope-ai/CoPaw/issues/2919) — Volcengine provider TypeError | 3 | **Closed** — Custom provider breakage with `provider_id` parameter. Indicates provider abstraction fragility. |

**Underlying Needs**: 
- **Resource efficiency** — users running CoPaw on laptops/cloud are sensitive to idle consumption
- **Enterprise China IM fidelity** — Feishu/DingTalk formatting bugs block production adoption
- **Provider ecosystem stability** — rapid provider additions creating maintenance burden

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| **P0 — Critical** | [#2888](https://github.com/agentscope-ai/CoPaw/issues/2888) 100% CPU idle busy loop | Open, unassigned | None |
| **P1 — High** | [#2947](https://github.com/agentscope-ai/CoPaw/issues/2947) Gemma4 infinite tool call loops | Open, 2 comments | None |
| **P1 — High** | [#2934](https://github.com/agentscope-ai/CoPaw/issues/2934) Browser use process leaks (chromium zombie processes) | Open, 1 comment | None |
| **P1 — High** | [#2930](https://github.com/agentscope-ai/CoPaw/issues/2930) Tool call parsing failure + config reset | Open, 1 comment | None |
| **P2 — Medium** | [#2943](https://github.com/agentscope-ai/CoPaw/issues/2943) `copaw init` hangs on Windows Python 3.13 | Open, 1 comment | None |
| **P2 — Medium** | [#2933](https://github.com/agentscope-ai/CoPaw/issues/2933) CMD window popups on Windows shell execution | Open, 1 comment | None |
| **P2 — Medium** | [#2931](https://github.com/agentscope-ai/CoPaw/issues/2931)/[#2932](https://github.com/agentscope-ai/CoPaw/issues/2932) Agent skill config auto-selects all | One closed, one open | None |
| **P3 — Low** | [#2948](https://github.com/agentscope-ai/CoPaw/issues/2948) Missing audio download button | Open, 1 comment | None |

**Regression Pattern**: Windows platform support showing systemic gaps (init hangs, console popups, config persistence). Model-specific bugs (Gemma4, local llama.cpp) indicate insufficient abstraction testing across provider matrix.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in v1.0.2+ | Rationale |
|:---|:---|:---|:---|
| **Multi-message / human-like pacing** | [#2939](https://github.com/agentscope-ai/CoPaw/issues/2939), [#2940](https://github.com/agentscope-ai/CoPaw/pull/2940) merged | **High** — shipped | Already implemented via `[SPLIT]` |
| **WhatsApp channel** | [#2946](https://github.com/agentscope-ai/CoPaw/pull/2946) | **High** — pending review | Clean replacement PR, addresses feedback |
| **Agent team / multi-agent coordination** | [#2922](https://github.com/agentscope-ai/CoPaw/issues/2922) | Medium | Requested for Claude Code parity; architectural complexity |
| **Conversation pinning / window management** | [#2936](https://github.com/agentscope-ai/CoPaw/issues/2936), [#2937](https://github.com/agentscope-ai/CoPaw/issues/2937) | Medium | UI/UX enhancement, moderate implementation effort |
| **Structured memory file browser** | [#2929](https://github.com/agentscope-ai/CoPaw/issues/2929) | Low-Medium | Niche power-user feature |
| **GUI approve button vs. text input** | [#2945](https://github.com/agentscope-ai/CoPaw/issues/2945) | High — quick win | Usability fix, frequent complaint |

**Prediction**: v1.0.2 will likely include WhatsApp channel, the `[SPLIT]` multi-message feature, and Windows stability fixes. Agent team functionality may slip to v1.1.0 given architectural scope.

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Category | Quote/Paraphrase | Frequency |
|:---|:---|:---|
| **Installation/Upgrade confusion** | "使用 install.sh 安装的，怎么升级啊" [#2925](https://github.com/agentscope-ai/CoPaw/issues/2925) | Recurring |
| **Provider connectivity** | "第三方代理的模型服务商无法使用" [#2941](https://github.com/agentscope-ai/CoPaw/issues/2941) | Common |
| **UI friction** | "approve键入命令改成按钮...经常输入无效，重复让我输入" [#2945](https://github.com/agentscope-ai/CoPaw/issues/2945) | Specific but sharp |
| **Session management** | "同一智能体每次参与协作就会单独生成一个对话窗口" [#2937](https://github.com/agentscope-ai/CoPaw/issues/2937) | Multi-agent users |
| **Observability** | "如何查看所有调用大模型API的请求？是否有日志存储？" [#2926](https://github.com/agentscope-ai/CoPaw/issues/2926), [#2927](https://github.com/agentscope-ai/CoPaw/issues/2927) | Debugging need |

### Use Case Signals
- **China enterprise deployment**: Heavy Feishu/DingTalk/QQ integration demand
- **Self-hosted/local-first**: Strong interest in CoPaw Local, llama.cpp, Ollama providers
- **Multi-agent workflows**: Users comparing to Claude Code's agent teams, finding CoPaw's coordination "生硬" (rigid/stiff)

### Satisfaction/Dissatisfaction
- ✅ **Positive**: Active maintainer response, rapid feature integration (WhatsApp, OneBot), open to community PRs
- ❌ **Negative**: v1.0.1 stability issues on Windows, opaque upgrade paths, config persistence bugs

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#2888](https://github.com/agentscope-ai/CoPaw/issues/2888) CPU busy loop | 2 days | **Critical** — affects all platforms | Assign core maintainer, prioritize for v1.0.2 |
| [#2523](https://github.com/agentscope-ai/CoPaw/pull/2523) .gitattributes cross-platform | 6 days | Low — infrastructure | Merge or close to reduce queue noise |
| [#2453](https://github.com/agentscope-ai/CoPaw/pull/2453) Heartbeat OK control | 8 days | Medium — reliability feature | Review for v1.0.2 inclusion |
| [#2448](https://github.com/agentscope-ai/CoPaw/pull/2448) MiniMax OAuth | 8 days | Medium — provider expansion | Review, may conflict with #2941 provider issues |
| [#1192](https://github.com/agentscope-ai/CoPaw/pull/1192) OpenRouter provider | 26 days | Medium — community PR | Stale, needs rebase or maintainer decision |
| [#2432](https://github.com/agentscope-ai/CoPaw/pull/2432) Chat timestamps | 9 days | Low — UX polish | Review for merge |

**Recommendation**: The CPU busy loop (#2888) requires immediate triage. The growing provider PR backlog (#1192, #2448, #2453) suggests need for a provider integration maintainer or clearer contribution guidelines to prevent reviewer bottleneck.

---

*Digest generated from GitHub activity 2026-04-04 to 2026-04-05. Data source: agentscope-ai/CoPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*