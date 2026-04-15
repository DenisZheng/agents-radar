# OpenClaw Ecosystem Digest 2026-04-11

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-04-11 01:50 UTC

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

 # OpenClaw Project Digest — 2026-04-11

## 1. Today's Overview

OpenClaw shows **extremely high development velocity** with 500 issues and 500 PRs updated in the last 24 hours, indicating an active, rapidly evolving codebase. The project is in a **stabilization phase** with zero new releases, focusing on bug fixes and quality improvements rather than feature shipping. Community engagement is strong with 406 open/active issues and 301 open PRs under active review. The maintainer team appears responsive with 94 issues and 199 PRs merged/closed. Key themes include **WhatsApp media delivery reliability**, **GPT-5.4/Codex runtime parity**, **multi-agent trust verification**, and **voice conversation infrastructure**. The project demonstrates healthy open-source dynamics with substantial contributor activity across documentation, internationalization, and core platform improvements.

---

## 2. Releases

**No new releases** (2026-04-11).

The project remains on version `2026.4.9` with active development toward the next release. Multiple beta blockers are being tracked, particularly around WhatsApp media delivery and model provider integrations.

---

## 3. Project Progress

### Merged/Closed PRs Today (Selected Significant Items)

| PR | Title | Impact |
|:---|:---|:---|
| [#50575](https://github.com/openclaw/openclaw/pull/50575) | fix(cli): message send delegates to gateway RPC to avoid missing listener | **WhatsApp CLI reliability** — fixes "No active WhatsApp Web listener" errors |
| [#48137](https://github.com/openclaw/openclaw/pull/48137) | fix: add WhatsApp Web listener liveness check | **Connection stability** — adds WebSocket health checks to prevent desync |
| [#53432](https://github.com/openclaw/openclaw/pull/53432) | msteams: add message actions — pin, unpin, read, react, reactions | **Feature parity** — MS Teams reaches Slack/Discord capability level |
| [#64572](https://github.com/openclaw/openclaw/pull/64572) | fix: preserve Telegram topic routing for exec completions | **Reliability** — background tasks stay contextually anchored |
| [#64569](https://github.com/openclaw/openclaw/pull/64569) | fix: emit message_received for queued inbound messages | **Hook system reliability** — preserves message metadata across restarts |

### Active Development (Open PRs)

| PR | Title | Significance |
|:---|:---|:---|
| [#64392](https://github.com/openclaw/openclaw/pull/64392) | feat(octo): coordinate multiple AI coding tools as unified team | **Major architecture** — 229 files, feature-flagged, import-isolated; enables multi-agent orchestration |
| [#64584](https://github.com/openclaw/openclaw/pull/64584) | Claude/optimistic ptolemy | **Core agent improvements** — likely reasoning/execution enhancements |
| [#64562](https://github.com/openclaw/openclaw/pull/64562) | refactor(qa): add shared QA channel contract | **Infrastructure** — hardens E2E testing, decouples QA runner from channel specifics |
| [#62305](https://github.com/openclaw/openclaw/pull/62305) | feat(whatsapp): wire replyToMode with quoted message delivery | **UX improvement** — visual threading for WhatsApp group conversations |
| [#62262](https://github.com/openclaw/openclaw/pull/62262) | feat(reply-threading): add replyToMode auto | **Smart threading** — intelligent context preservation across channels |
| [#64104](https://github.com/openclaw/openclaw/pull/64104) | feat(ui): render assistant directives and add embed tag | **Web UI polish** — structured rendering of media/voice directives |
| [#10356](https://github.com/openclaw/openclaw/pull/10356) | TTS: add Typecast provider | **Voice expansion** — emotion presets, Asian language voices |

---

## 4. Community Hot Topics

### Highest Engagement Issues

| Rank | Issue | Comments | 👍 | Analysis |
|:---|:---|:---:|:---:|:---|
| 1 | [#49971](https://github.com/openclaw/openclaw/issues/49971) RFC: Native Agent Identity & Trust Verification | 79 | 0 | **Foundational architecture discussion** — proposes ERC-8004/W3C DID/VC-based trust layer for agent-to-agent interactions. Signals community demand for decentralized identity in multi-agent systems. |
| 2 | [#7200](https://github.com/openclaw/openclaw/issues/7200) Real-time Voice Conversation Support | 17 | 18 | **High user demand** — Twilio/WebRTC integration for phone-like interactions. Strong vote count indicates product-market fit for voice agents. |
| 3 | [#61773](https://github.com/openclaw/openclaw/issues/61773) Matrix channel syncs but receives no messages | 16 | 0 | **Regression pain** — E2EE decryption failures post-startup affecting production deployments. |
| 4 | [#53959](https://github.com/openclaw/openclaw/issues/53959) gpt-5.3-codex does not execute tools | 16 | 3 | **Model compatibility crisis** — OpenAI Codex tool execution regression blocking users. |
| 5 | [#12590](https://github.com/openclaw/openclaw/issues/12590) `memoryFlush` does not fire reliably | 15 | 0 | **Core reliability** — memory management deduplication logic bug affecting long-running agents. |

### Underlying Community Needs

- **Trust & Verification**: [#49971](https://github.com/openclaw/openclaw/issues/49971) and [#33106](https://github.com/openclaw/openclaw/issues/33106) reveal demand for runtime agent identity verification beyond static code analysis
- **Voice-First Interfaces**: [#7200](https://github.com/openclaw/openclaw/issues/7200) and voice-call related issues show users want natural conversation, not chat
- **Model Provider Resilience**: Multiple issues around GPT-5.4, Codex, Claude indicate users need **fallback chains that actually work** when providers change behavior

---

## 5. Bugs & Stability

### Critical/Severe (Production-Blocking)

| Issue | Severity | Description | Fix Status |
|:---|:---|:---|:---|
| [#53959](https://github.com/openclaw/openclaw/issues/53959) | **Critical** | gpt-5.3-codex tool execution completely broken (regression 2026.3.23-2) | No dedicated PR; [#64227](https://github.com/openclaw/openclaw/issues/64227) tracking parity |
| [#61773](https://github.com/openclaw/openclaw/issues/61773) | **Critical** | Matrix E2EE message loss — "connected but non-functional" | [#64451](https://github.com/openclaw/openclaw/pull/64451) detection improvement in review |
| [#61726](https://github.com/openclaw/openclaw/issues/61726) | **High** | WhatsApp media silently dropped (caption only) | **FIXED** — closed, similar to [#64352](https://github.com/openclaw/openclaw/issues/64352) |
| [#64352](https://github.com/openclaw/openclaw/issues/64352) | **High** | WhatsApp media regression — CLI `--media` fails | Closed as duplicate/fixed |
| [#63126](https://github.com/openclaw/openclaw/issues/63126) | **High** | WhatsApp media send hijacked by legacy shim | **FIXED** — closed |
| [#63510](https://github.com/openclaw/openclaw/issues/63510) | **High** | Completion cache crash on missing QA scenario file | Open, no PR yet |
| [#63214](https://github.com/openclaw/openclaw/issues/63214) | **High** | memory-core dreaming fails with idempotencyKey error | Open, affects 2026.4.8 |

### Medium Priority

| Issue | Description | Notes |
|:---|:---|:---|
| [#37623](https://github.com/openclaw/openclaw/issues/37623) | GPT-5.4 configurable but runtime "Unknown model" | Config drift between UI and runtime |
| [#54844](https://github.com/openclaw/openclaw/issues/54844) | github-copilot/gpt-5-mini 400 invalid_request_body | Regression from 2026.3.24 |
| [#60390](https://github.com/openclaw/openclaw/issues/60390) | LosslessClaw compaction fails — auth handling breaks summarizer | Multi-provider impact |
| [#59205](https://github.com/openclaw/openclaw/issues/59205) | Ollama Cloud 401 after 2026.3.31 update | Authentication regression |
| [#64117](https://github.com/openclaw/openclaw/issues/64117) | voice-call EADDRINUSE — always hits port conflict | WSL2/Linux specific |

### Stability Patterns

- **WhatsApp media delivery** has been a recurring regression theme (4+ related issues closed/merged today)
- **Model provider compatibility** is fragile — OpenAI, GitHub Copilot, MiniMax all have breaking changes
- **Memory subsystem** showing stress: dreaming, compaction, flush reliability issues

---

## 6. Feature Requests & Roadmap Signals

### Likely Near-Term (Active Development)

| Feature | Evidence | Confidence |
|:---|:---|:---:|
| **Multi-agent orchestration ("Octo")** | [#64392](https://github.com/openclaw/openclaw/pull/64392) — 229 files, feature-flagged, in review | Very High |
| **Native voice conversations** | [#7200](https://github.com/openclaw/openclaw/issues/7200) (18 👍), [#10356](https://github.com/openclaw/openclaw/pull/10356) Typecast TTS, voice-call plugin fixes | High |
| **Agent identity/trust verification** | [#49971](https://github.com/openclaw/openclaw/issues/49971) (79 comments), [#33106](https://github.com/openclaw/openclaw/issues/33106), [#63430](https://github.com/openclaw/openclaw/issues/63430) | High |
| **GPT-5.4/Codex full parity** | [#64227](https://github.com/openclaw/openclaw/issues/64227) official tracker, multiple blocking bugs | Very High |

### Medium-Term Signals

| Feature | Evidence | User Demand |
|:---|:---|:---:|
| **Sensitive data masking** | [#64046](https://github.com/openclaw/openclaw/issues/64046) — API keys, tokens, logs | Moderate |
| **Token usage dashboard** | [#49232](https://github.com/openclaw/openclaw/issues/49232) | Moderate |
| **Runtime trust boundaries (PAP protocol)** | [#63430](https://github.com/openclaw/openclaw/issues/63430) | Low (enterprise) |
| **SSRF/proxy compatibility** | [#33086](https://github.com/openclaw/openclaw/issues/33086), [#55176](https://github.com/openclaw/openclaw/pull/55176) | Moderate |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Representative Issues | Severity |
|:---|:---|:---:|
| **WhatsApp reliability** | [#61726](https://github.com/openclaw/openclaw/issues/61726), [#63126](https://github.com/openclaw/openclaw/issues/63126), [#64352](https://github.com/openclaw/openclaw/issues/64352), [#54131](https://github.com/openclaw/openclaw/issues/54131) | Critical |
| **Model fallbacks don't work** | [#35119](https://github.com/openclaw/openclaw/issues/35119), [#63178](https://github.com/openclaw/openclaw/issues/63178), [#53959](https://github.com/openclaw/openclaw/issues/53959) | High |
| **Configuration vs. runtime mismatch** | [#37623](https://github.com/openclaw/openclaw/issues/37623) — "looks supported but isn't" | High |
| **Silent failures** | [#61726](https://github.com/openclaw/openclaw/issues/61726) — "falsely succeed", [#60390](https://github.com/openclaw/openclaw/issues/60390) | High |
| **macOS/iMessage/Apple ecosystem friction** | [#5116](https://github.com/openclaw/openclaw/issues/5116), [#33091](https://github.com/openclaw/openclaw/issues/33091) | Medium |

### Positive Signals

- **Strong multi-channel support**: MS Teams, Slack, Discord, Telegram, WhatsApp, Matrix all actively maintained
- **Responsive maintainer team**: Rapid closure of WhatsApp issues, active PR review
- **Extensibility**: Plugin SDK, hooks system, custom providers well-supported
- **Internationalization**: Chinese CLI docs ([#64422](https://github.com/openclaw/openclaw/pull/64422)) indicate global user base

### Use Cases Emerging

- **AI phone agents** (Twilio + voice-call plugin)
- **Multi-agent coding teams** (Octo feature)
- **Cross-platform personal assistants** (iMessage, Telegram, WhatsApp unified)
- **Enterprise orchestration** (trust boundaries, identity verification)

---

## 8. Backlog Watch

### Stale but Important Issues (Last updated 2026-03-03, still open)

| Issue | Age | Why It Matters | Risk |
|:---|:---:|:---|:---|
| [#33086](https://github.com/openclaw/openclaw/issues/33086) | ~5 weeks | SSRF blocks Discord CDN for proxy users; has PR [#55176](https://github.com/openclaw/openclaw/pull/55176) | User attrition behind corporate proxies |
| [#33229](https://github.com/openclaw/openclaw/issues/33229) | ~5 weeks | `/session` broken in Slack — core functionality | Slack user experience degraded |
| [#33090](https://github.com/openclaw/openclaw/issues/33090) | ~5 weeks | Cron systemEvent skipped on empty HEARTBEAT — closed but pattern exists | Reliability of scheduled tasks |
| [#33180](https://github.com/openclaw/openclaw/issues/33180) | ~5 weeks | Telegram streaming shows as "Pinned Messages" — UX confusion | Polish gap vs. competitors |
| [#33025](https://github.com/openclaw/openclaw/issues/33025) | ~5 weeks | Telegram DM streaming never triggers — feature non-functional | Incomplete feature shipping |

### PRs Needing Maintainer Attention

| PR | Status | Blocker |
|:---|:---|:---|
| [#10356](https://github.com/openclaw/openclaw/pull/10356) | Open since Feb 6 | TTS provider addition — large feature, needs review bandwidth |
| [#57530](https://github.com/openclaw/openclaw/pull/57530) | Open since Mar 30 | MS Teams group management — XL size, complex |
| [#62262](https://github.com/openclaw/openclaw/pull/62262) | Open since Apr 7 | Reply threading auto mode — core UX, needs decision on default behavior |

### Recommendation

The **~40 "stale" issues from early March** represent a significant backlog. Many have partial fixes or PRs in flight. A maintainer triage pass to either close as fixed, merge associated PRs, or explicitly deprioritize would improve signal-to-noise for contributors.

---

*Digest generated from OpenClaw GitHub activity 2026-04-11. Data: 500 issues, 500 PRs updated, 0 releases.*

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Analysis — 2026-04-11

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem demonstrates **exceptional vitality** with 10 active projects showing sustained development velocity. The space has matured beyond experimental prototypes into production-hardened systems competing on reliability, multi-platform deployment, and enterprise integration. A clear **bifurcation** is emerging between "gateway-first" architectures (OpenClaw, Hermes, Moltis) optimized for multi-channel messaging and "runtime-first" systems (NanoBot, NanoClaw, IronClaw) prioritizing code execution and agent orchestration. Voice interfaces, MCP (Model Context Protocol) standardization, and deterministic cost control are becoming table stakes rather than differentiators.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* | Tier |
|:---|:---:|:---:|:---|:---:|:---:|
| **OpenClaw** | 500 | 500 | No release (stabilizing on 2026.4.9) | 🟢 9/10 | Hyperactive |
| **IronClaw** | 38 | 50 | ✅ v0.25.0 shipped | 🟢 8/10 | Hyperactive |
| **NanoBot** | 30 | 48 | No release (v0.1.5 current) | 🟡 7/10 | Very Active |
| **Hermes Agent** | 50 | 50 | No release (v0.8.x expected) | 🟡 6/10 | Very Active |
| **CoPaw** | 29 | 50 | No release (v1.0.2 current) | 🟡 6/10 | Very Active |
| **NanoClaw** | 6 | 19 | No release | 🟢 7/10 | Active |
| **Moltis** | 11 | 16 | ✅ 20260410.01 shipped | 🟢 8/10 | Active |
| **PicoClaw** | 16 | 28 | Nightly only (v0.2.6) | 🟡 5/10 | Active |
| **LobsterAI** | 7 | 20 | No release (post-P0 fix) | 🟡 5/10 | Active |
| **NullClaw** | 2 | 12 | No release (2026.4.9) | 🟢 7/10 | Steady |
| **TinyClaw** | 0 | 1 | No release | 🔴 3/10 | Dormant |
| **ZeptoClaw** | — | — | No activity | ⚫ 0/10 | Inactive |

*Health Score combines velocity, merge ratio, issue resolution rate, and release cadence*

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw | Closest Competitor | Gap |
|:---|:---|:---|:---|
| **Channel breadth** | 15+ platforms (WhatsApp, iMessage, Signal, Matrix, Teams, Slack, Discord, Telegram, Feishu, etc.) | Moltis (8), Hermes (6), NanoBot (5) | 2-3× coverage |
| **Development velocity** | 1,000 items/day | IronClaw (88), NanoBot (78) | 10-12× throughput |
| **Multi-agent architecture** | "Octo" feature-flagged (229 files) | CoPaw (early PR #3215), IronClaw (v2 engine) | 6-12 months lead |
| **Voice infrastructure** | Typecast TTS, Twilio integration, real-time conversation RFC | Moltis (Whisper/STT), CoPaw (basic) | Most mature pipeline |
| **Enterprise trust features** | ERC-8004/DID identity verification RFC | NanoClaw (OAuth hardening), Moltis (dcg-guard) | Architectural lead |

### Technical Approach Differences

- **OpenClaw**: Gateway-centric with **hooks-based extensibility**; treats channels as first-class, agents as plugins
- **NanoBot/NanoClaw**: **Container-native execution**; agents as sandboxed runtimes with MCP skill ecosystems
- **IronClaw**: **WASM extension model** with v2 engine; financial/enterprise workflow specialization
- **Moltis**: **Hook-driven customization** with deterministic cost optimization focus

### Community Size

OpenClaw operates at **scale unmatched**: 406 open issues, 301 open PRs under review, 94 issues + 199 PRs resolved daily. This exceeds **all other projects combined** in raw throughput. However, engagement quality varies—NanoBot and Moltis show higher signal-to-noise in discussions.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **MCP (Model Context Protocol) standardization** | NanoBot, NanoClaw, CoPaw, Moltis, LobsterAI | Server lifecycle management (#3226 leak), OAuth compliance (#636), JSON streamable HTTP (#367), tool deduplication (#2246) |
| **Voice conversation pipelines** | OpenClaw, Moltis, CoPaw, IronClaw | Real-time WebRTC/Twilio (#7200), STT/TTS cost control (#643), streaming responses, emotion presets |
| **Deterministic cost control** | Moltis (#652, #653), NanoClaw (#1493), OpenClaw | Compaction without LLM calls, context compression proxies, token dashboards (#3214, #49232) |
| **Multi-agent orchestration** | OpenClaw (#64392), CoPaw (#3215, #3224), IronClaw (#2277) | Agent-to-agent communication protocols, trust verification, delegation fallback chains |
| **Enterprise identity/trust** | OpenClaw (#49971), NanoClaw (#1163), Moltis | DID/VC verification, OAuth token refresh (#1725), per-user exec policies (#2475) |
| **Windows-native deployment** | NanoBot (#2774), LobsterAI (#1624), PicoClaw (#2472) | WSL elimination, WebView2 integration, native packaging |
| **Channel reliability hardening** | OpenClaw (WhatsApp), Hermes (Feishu), PicoClaw (WebSocket), CoPaw (WeChat/QQ) | Message delivery guarantees, E2EE decryption, media handling, reconnection logic |

---

## 5. Differentiation Analysis

| Project | Core Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Universal channel gateway + multi-agent "Octo" | Power users, multi-platform operators | TypeScript, hooks, plugin SDK |
| **NanoBot** | Windows-native stability + mid-turn injection | Windows-first developers, enterprise | Python, clean codebase, container-optional |
| **NanoClaw** | Hybrid cloud/local execution + database abstraction | DevOps, infrastructure engineers | Container/host-native dual mode, SQLite/PostgreSQL |
| **IronClaw** | Financial workflows + WASM extensions | Fintech, enterprise automation | Rust, WASM, v2 engine, ACP delegation |
| **Hermes Agent** | Remote development + subagent orchestration | Distributed teams, Modal/Daytona users | Python, SSH/remote backends, performance engineering |
| **Moltis** | Deterministic cost control + hook system | Cost-conscious production deployers | Go, hook-driven, compaction-first |
| **CoPaw** | Desktop-native UX + Chinese IM ecosystem | Chinese enterprise, local-first users | Electron, QQ/WeChat/DingTalk depth |
| **PicoClaw** | Scheduled task platform + iMessage/Signal | Privacy-focused, automation-heavy users | Scheduled execution, cron-native |
| **LobsterAI** | NetEase ecosystem integration (POPO, Qianfan) | Chinese NetEase customers | OpenClaw fork, yd-cowork legacy removal |
| **NullClaw** | Security-by-default + cron subagent engine | Security-conscious operators | Zig sandbox, HTTPS telemetry, audit trails |

---

## 6. Community Momentum & Maturity

### Tier 1: Hyperactive Innovation (Rapid Iteration)

| Project | Pattern | Risk |
|:---|:---|:---|
| **OpenClaw** | 1,000 items/day, stabilization phase | Quality at scale—500 PRs in flight risks review depth |
| **IronClaw** | v0.25.0 release, 15+ QA bugs in bug bash | v2 engine reliability before broader adoption |

### Tier 2: Active Consolidation (Feature → Stability)

| Project | Pattern | Risk |
|:---|:---|:---|
| **NanoBot** | Provider config migration, v0.1.5 regression fixes | Channel breakages (Feishu, DingTalk) need patch release |
| **Hermes Agent** | 43:7 open:merged PR ratio, performance engineering | Review bottleneck, Docker build blocker (#6352) |
| **CoPaw** | v1.0.2 teething issues, MCP leak investigation | Silent failures (#3011), resource management immaturity |

### Tier 3: Production Hardening (Stability Focus)

| Project | Pattern | Risk |
|:---|:---|:---|
| **NanoClaw** | OAuth hardening, database abstraction PRs | macOS/Apple Container gaps (#1735) |
| **Moltis** | 75% bug closure rate, deterministic compaction | Remote auth failure (#646) unaddressed |
| **NullClaw** | Zero PR backlog, security-by-default | Fresh critical bugs (#799, #797) without fixes |

### Tier 4: At-Risk / Dormant

| Project | Pattern | Risk |
|:---|:---|:---|
| **PicoClaw** | WebSocket regression blocking release, Discord neglect | Community trust erosion (#2433) |
| **LobsterAI** | P0 fixed but density of regressions post-OpenClaw migration | Quality gaps in engine transition |
| **TinyClaw** | Single open PR, zero issues | Contributor attrition, project health unclear |
| **ZeptoClaw** | No activity | Effectively inactive |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **Voice-first interfaces maturing** | OpenClaw #7200 (18 👍), Moltis voice pipeline, CoPaw STT fixes | Invest in streaming audio architecture; text-only agents face obsolescence |
| **Cost predictability as competitive moat** | Moltis deterministic compaction (#653), NanoClaw context compression (#1493) | LLM-based operations becoming liability; deterministic alternatives differentiate |
| **MCP as de facto standard, but lifecycle immature** | Leaks (#3226), OAuth gaps (#629), deduplication needs (#2246) | Build MCP server pools with process management; don't assume "standard" means "production-ready" |
| **Multi-agent trust/identity becoming prerequisite** | OpenClaw ERC-8004 RFC (79 comments), NanoClaw OAuth hardening | Plan for agent-to-agent authentication now; retrofits will be expensive |
| **Windows-native as underserved market** | NanoBot competitive positioning (#2774), LobsterAI Windows fixes (#1624) | WSL dependency is adoption friction; native Windows support unlocks enterprise segments |
| **Container escape for local tool access** | NanoClaw native runner (#1732), CoPaw shell command failures (#3183) | Pure containerization hits limits; hybrid host/container architectures emerging |
| **Gateway fatigue → runtime consolidation** | LobsterAI yd-cowork removal (#1611), IronClaw v2 engine | "Yet another gateway" projects losing to execution-focused platforms |

### Strategic Implications

1. **For builders**: The window for "yet another chatbot gateway" is closing. Differentiation requires execution environment innovation (WASM, native runners, deterministic cost) or vertical specialization (finance, IoT, enterprise IM).

2. **For enterprises**: OpenClaw offers unmatched channel coverage but requires operational maturity to handle velocity. NanoBot/Moltis offer stability tradeoffs. IronClaw v2 warrants evaluation for financial workflows.

3. **For contributors**: IronClaw and Moltis show highest maintainer responsiveness per capita. OpenClaw offers scale but risks contribution dilution. NanoClaw and NullClaw present opportunities for outsized impact in smaller communities.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

 # NanoBot Project Digest — 2026-04-11

## 1. Today's Overview

NanoBot shows **very high development velocity** with 78 total updates in 24 hours (30 issues, 48 PRs), indicating an active, rapidly evolving codebase. The project is in a **feature-consolidation phase** with significant refactoring work on provider configurations and MCP server architecture. No new release was cut today, suggesting maintainers are accumulating changes before a version bump. The community is notably engaged with **cross-project dialogue** (OpenClaw feature tracking) and **Windows-native deployment** emerging as a competitive differentiator. Stability concerns persist around v0.1.5 with multiple regression reports affecting Feishu, DingTalk, and core memory systems.

---

## 2. Releases

**No new releases** (v0.1.5 remains current).

---

## 3. Project Progress

### Merged/Closed PRs Today (19 total, key items)

| PR | Description | Impact |
|:---|:---|:---|
| [#3025](https://github.com/HKUDS/nanobot/pull/3025) | Provider config migration to list format (closed, superseded by #3026) | Breaking config change preparation |
| [#3022](https://github.com/HKUDS/nanobot/pull/3022) | Custom provider names and extensible commands (closed, superseded by #3023) | User-facing flexibility |
| [#2985](https://github.com/HKUDS/nanobot/pull/2985) | Mid-turn message injection for responsive follow-ups | **UX breakthrough** — no more queue blocking |
| [#2831](https://github.com/HKUDS/nanobot/pull/2831) | Security: prevent exec tool from leaking process env vars | **Critical security hardening** |
| [#2911](https://github.com/HKUDS/nanobot/pull/2911) / [#2946](https://github.com/HKUDS/nanobot/pull/2946) | WebSocket channel foundation + tests | Infrastructure for WebUI (#2949) |
| [#3009](https://github.com/HKUDS/nanobot/pull/3009) | Preserve existing .gitignore in GitStore | Fixes #2980 regression |

**Key architectural advances:**
- **Provider system overhaul**: Migration from single-object to list-based configuration with backward compatibility
- **Security**: Exec tool now runs with sanitized environment (no API key leakage)
- **Real-time UX**: Mid-turn injection eliminates the "locked session" problem where users couldn't interrupt agents

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Issue/PR | Comments | Core Tension |
|:---|:---|:---:|:---|
| 1 | [#2949](https://github.com/HKUDS/nanobot/issues/2949) WebUI feature discussion | 9 👍6 | **CLI vs. web interface strategy** — minimal debug UI exists; community wants full web parity with OpenClaw |
| 2 | [#2927](https://github.com/HKUDS/nanobot/issues/2927) Automatic Skill Discovery | 6 | Passive → active skill system transformation; "agent learns its own patterns" |
| 3 | [#2774](https://github.com/HKUDS/nanobot/issues/2774) / [#1265](https://github.com/HKUDS/nanobot/issues/1265) Windows vs. OpenClaw comparison | 6+5 | **Competitive positioning** — Windows-native deployment as killer feature |

**Underlying needs analysis:**
- **WebUI demand (#2949)**: Users want visual session management, skill marketplace, and non-technical accessibility. The existing `webui/websocket-debug` is insufficient for production use.
- **Skill ecosystem maturity (#2927)**: Manual skill creation creates adoption friction. Users want "agent observes → suggests → refines" automation.
- **Platform strategy**: Windows compatibility is a **documented competitive moat** against OpenClaw's WSL dependency.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **Critical** | [#2970](https://github.com/HKUDS/nanobot/issues/2970) | Feishu channel broken on v0.1.5: `No module named 'lark_oapi.api.bot'` | **OPEN** — dependency/API mismatch |
| **Critical** | [#3018](https://github.com/HKUDS/nanobot/issues/3018) | MCP dual-type config (streamableHttp + Stdio) crashes with cancel scope error | **OPEN** — PR #3019 submitted |
| **High** | [#2980](https://github.com/HKUDS/nanobot/issues/2980) | Dream git store corrupts workspace/.gitignore, nests repos | **FIXED** by #3009 |
| **High** | [#3004](https://github.com/HKUDS/nanobot/issues/3004) | False positive think-tag regex truncates messages mid-content | **FIXED** by #3020 |
| **High** | [#2989](https://github.com/HKUDS/nanobot/issues/2989) | Agent bypasses `append_history()` via exec tool, corrupts history.jsonl | **OPEN** — integrity vulnerability |
| **Medium** | [#3016](https://github.com/HKUDS/nanobot/pull/3016) | DingTalk file downloads missing extensions, overwrite each other | **PR OPEN** |
| **Medium** | [#2944](https://github.com/HKUDS/nanobot/issues/2944) | Gemma 4 thought tags leak to users | **CLOSED** (fixed) |
| **Medium** | [#2966](https://github.com/HKUDS/nanobot/issues/2966) | `/stop` command loses entire turn context | **OPEN** — fix claimed by reporter |

**Regression pattern**: v0.1.5 release introduced multiple channel breakages (Feishu, DingTalk) and memory corruption issues. Recommend patch release or accelerated v0.1.6.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| **Native WebUI** | [#2949](https://github.com/HKUDS/nanobot/issues/2949) | 60% | Infrastructure merged (#2911/#2946), needs product decision |
| **Agent Checkpointing** | [#3027](https://github.com/HKUDS/nanobot/issues/3027) | 40% | Complex; competes with /stop context fix priority |
| **Automatic Skill Discovery** | [#2927](https://github.com/HKUDS/nanobot/issues/2927) | 30% | Architectural shift; may need RFC |
| **Embedding-based context compression** | [#2937](https://github.com/HKUDS/nanobot/issues/2937) | 50% | Complements existing token-budget work; performance win |
| **Intelligent concurrency control** | [#3008](https://github.com/HKUDS/nanobot/issues/3008) | 70% | Simple config change, high user value |
| **SQLite Dream backend** | [#3015](https://github.com/HKUDS/nanobot/pull/3015) | 80% | PR submitted, solves git conflict pain |
| **Claude Code remote sessions** | [#3024](https://github.com/HKUDS/nanobot/issues/3024) | 30% | Niche enterprise use case |

**Predicted v0.1.6 contents**: Provider list config, SQLite Dream backend, think-tag fixes, Feishu/DingTalk channel repairs, concurrency controls.

---

## 7. User Feedback Summary

### Satisfaction Drivers
- **Stability over OpenClaw**: Multiple users (#2774, #1265) report NanoBot "very stable" vs. OpenClaw's "frequent crashes, malware risks, WSL dependency"
- **Windows-native deployment**: "Windows user volume" cited as growth opportunity (#1265)
- **Code quality**: "Python codebase is clean and easy to understand compared to OpenClaw" (#2989)

### Pain Points
| Issue | Frequency | User Impact |
|:---|:---:|:---|
| Silent failures (no API key balance warning) | [#3006](https://github.com/HKUDS/nanobot/issues/3006) | Debugging friction |
| Context loss on /stop | [#2966](https://github.com/HKUDS/nanobot/issues/2966) | Workflow interruption |
| Channel-specific breakages (Feishu, QQ, WeChat) | Multiple | Platform reliability inconsistency |
| Skill installation "occasional problems" | [#1265](https://github.com/HKUDS/nanobot/issues/1265) | Onboarding friction |

### Use Case Signals
- **Enterprise WeChat (WeCom)** image handling (#2999)
- **Multi-tenant WhatsApp** isolation needs (#2836)
- **Email automation** reliability (#2954)
- **Indonesian localization** volunteer offered (#2990)

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#2379](https://github.com/HKUDS/nanobot/pull/2379) NapCat QQ channel | 18 days | **Competitive gap** | Merge or reject; QQ ecosystem important in China |
| [#2475](https://github.com/HKUDS/nanobot/pull/2475) Exec allow/deny patterns by user | 17 days | Security hardening | Review for v0.1.6 |
| [#2836](https://github.com/HKUDS/nanobot/issues/2836) WhatsApp workspace isolation | 5 days | Privacy/compliance | Architecture decision on multi-tenancy |
| [#2927](https://github.com/HKUDS/nanobot/issues/2927) Auto skill discovery | 3 days | Ecosystem growth | Needs maintainer response/RFC |
| [#2954](https://github.com/HKUDS/nanobot/issues/2954) Email handling inconsistency | 3 days | Reliability | Reproduction help requested |

**Maintainer attention recommended**: The NapCat QQ PR (#2379) has been open since March 23 with no resolution — risks contributor attrition and leaves a major messaging platform unsupported.

---

*Digest generated from 78 GitHub events on 2026-04-11. All links: https://github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

 # Hermes Agent Project Digest — 2026-04-11

## 1. Today's Overview

Hermes Agent shows **very high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, though the 43:7 open-to-merged PR ratio indicates a significant review backlog. The project is actively addressing enterprise gateway stability (Feishu/Lark, Discord, Matrix) while simultaneously pushing performance optimizations for remote development workflows. Security concerns have emerged as a new priority cluster with 5 related issues filed today. No new releases were cut, suggesting maintainers are accumulating changes for a larger v0.8.x or v0.9.0 milestone.

---

## 2. Releases

**No new releases** — Last release appears to be v0.8.0 based on Issue #6352 reference.

---

## 3. Project Progress

### Merged/Closed Today (7 items)

| PR/Issue | Description | Significance |
|----------|-------------|------------|
| [#5223](https://github.com/NousResearch/hermes-agent/issues/5223) | `/model` gateway command now shows Hermes-overlay providers (openai-codex) | Fixes provider discovery in chat gateways |
| [#4594](https://github.com/NousResearch/hermes-agent/issues/4594) | Matrix NixOS setup resolved | Platform compatibility |
| [#5502](https://github.com/NousResearch/hermes-agent/issues/5502) | `hermes_logging` module added to pyproject.toml | Fixes NixOS gateway crashes |
| [#4426](https://github.com/NousResearch/hermes-agent/issues/4426) | Profile isolation for `/root` and Docker persistence | Security + data durability |
| [#6908](https://github.com/NousResearch/hermes-agent/issues/6908) | Zombie process cleanup in background tasks | Stability improvement |
| [#4287](https://github.com/NousResearch/hermes-agent/issues/4287) / [#4288](https://github.com/NousResearch/hermes-agent/issues/4288) | CLI prompt response timer | UX enhancement |

### Active Development Patterns

**Performance engineering** is a major theme: [PR #7467](https://github.com/NousResearch/hermes-agent/issues/7467) and [PR #7465](https://github.com/NousResearch/hermes-agent/issues/7465) reduce remote file sync from 13+ minutes to ~30 seconds via tar-pipe bulk operations. [PR #7490](https://github.com/NousResearch/hermes-agent/pull/7490) adds pre-emptive RPM throttling using provider headers.

---

## 4. Community Hot Topics

| Rank | Issue/PR | Comments | 👍 | Analysis |
|------|----------|----------|-----|----------|
| 1 | [#6893](https://github.com/NousResearch/hermes-agent/issues/6893) Feishu/Lark error 200340 | 14 | 3 | **Enterprise blocker** — Command approval flow broken in Chinese enterprise messaging platform; suggests gateway authentication state machine needs review |
| 2 | [#3926](https://github.com/NousResearch/hermes-agent/issues/3926) Ollama Cloud built-in provider | 7 | 19 | **High demand** — 19 upvotes indicate strong desire for simplified local/remote hybrid AI infrastructure; `custom_providers` workaround is insufficient |
| 3 | [#5223](https://github.com/NousResearch/hermes-agent/issues/5223) /model overlay providers | 5 | 0 | Gateway UX polish — closed today |
| 4 | [#346](https://github.com/NousResearch/hermes-agent/issues/346) Structured Memory System | 4 | 1 | **Architectural** — Long-running enhancement for graph-based memory; competes with flat-file simplicity |
| 5 | [#6945](https://github.com/NousResearch/hermes-agent/issues/6945) User-defined provider resolution | 4 | 0 | Config system gap — `/model` picker doesn't respect custom providers |

**Underlying needs**: Enterprise gateway reliability (Feishu), simplified provider onboarding (Ollama Cloud), and memory architecture for long-horizon agents.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 **Critical** | [#6352](https://github.com/NousResearch/hermes-agent/issues/6352) | Docker build broken on main — pip resolver explosion on `[all]` extras | ❌ No — CI red continuously |
| 🔴 **Critical** | [#6893](https://github.com/NousResearch/hermes-agent/issues/6893) | Feishu/Lark command approval fails with error 200340 | ❌ No — 14 comments, no resolution |
| 🟡 **High** | [#6393](https://github.com/NousResearch/hermes-agent/issues/6393) | Startup failure — `tirith` security scanner unavailable | ❌ No — traceback provided |
| 🟡 **High** | [#6945](https://github.com/NousResearch/hermes-agent/issues/6945) | User-defined providers fail via `/model` and `--provider` | ❌ No |
| 🟡 **High** | [#7458](https://github.com/NousResearch/hermes-agent/issues/7458) | `checkpoint_manager` fails on paths with `~` (tilde) | ❌ No — fresh today |
| 🟡 **High** | [#7468](https://github.com/NousResearch/hermes-agent/issues/7468) | WeChat formatting regression — tables → fragmented bubbles | ❌ No — v0.8.0 regression |
| 🟡 **High** | [#7475](https://github.com/NousResearch/hermes-agent/issues/7475) | GLM-4.7/5.1 model selection fails with "model does not exist" | ❌ No |
| 🟢 **Medium** | [#6708](https://github.com/NousResearch/hermes-agent/issues/6708) | Discord bot lacks thread context on first mention | ❌ No |
| 🟢 **Medium** | [#7448](https://github.com/NousResearch/hermes-agent/issues/7448) | Webhook idempotency breaks multi-route fan-out | ✅ [PR #7471](https://github.com/NousResearch/hermes-agent/pull/7471) |

**Stability assessment**: Docker build pipeline failure (#6352) is a release blocker. Feishu gateway issue (#6893) affects enterprise adoption. Multiple provider/model selection bugs suggest config system fragility.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version | Rationale |
|-------|---------|---------------------------|-----------|
| [#3926](https://github.com/NousResearch/hermes-agent/issues/3926) Ollama Cloud built-in | High — 19 upvotes, clear scope | **Likely** | Provider expansion is active theme |
| [#346](https://github.com/NousResearch/hermes-agent/issues/346) Structured Memory System | Graph-based memory architecture | **Medium** | Long-running, architectural; may slip |
| [#2422](https://github.com/NousResearch/hermes-agent/issues/2422) WeChat platform support | Chinese market expansion | **Medium** | WeChat OpenClaw announcement creates urgency |
| [#7489](https://github.com/NousResearch/hermes-agent/issues/7489) / [PR #7490](https://github.com/NousResearch/hermes-agent/pull/7490) RPM throttling | Rate limit intelligence | **Likely** | PR already open, production need |
| [#7481](https://github.com/NousResearch/hermes-agent/issues/7481) Per-delegation fallback chains | Resilient subagent spawning | **Medium** | Reliability enhancement |
| [#5163](https://github.com/NousResearch/hermes-agent/pull/5163) Web Console Skills Hub | GUI parity with CLI | **Likely** | Large PR active, UI modernization |

**Emerging theme**: [PR #7488](https://github.com/NousResearch/hermes-agent/pull/7488) migrates Matrix SDK to `mautrix-python` — suggests gateway SDK consolidation effort.

---

## 7. User Feedback Summary

### Pain Points
- **Enterprise messaging reliability**: Feishu/Lark gateway failures (#6893) block production deployment in Chinese enterprises
- **Configuration complexity**: Custom providers require workarounds (#3926, #6945); model aliases lose parameters (#7075)
- **Remote development friction**: 13-minute file sync times (#7467) before today's optimizations
- **Docker/NixOS stability**: Build failures and missing modules (#6352, #5502, #4594)

### Positive Signals
- Active performance engineering (bulk sync, RPM throttling) shows responsiveness to scale concerns
- Security audit engagement (5 issues today from @DataAdvisory) indicates enterprise readiness focus

### Use Case Evolution
Users are deploying Hermes as:
- **Multi-tenant enterprise gateway** (Feishu/Lark/Discord/Slack simultaneously)
- **Remote development agent** (SSH/Modal/Daytona backends)
- **Subagent orchestration system** (delegation chains, fallback providers)

---

## 8. Backlog Watch

| Issue/PR | Age | Problem | Action Needed |
|----------|-----|---------|---------------|
| [#346](https://github.com/NousResearch/hermes-agent/issues/346) | ~38 days | Structured memory architecture | Maintainer design review |
| [#3926](https://github.com/NousResearch/hermes-agent/issues/3926) | ~12 days | 19-upvote provider request | Implementation decision |
| [#6352](https://github.com/NousResearch/hermes-agent/issues/6352) | ~2 days | Docker build broken | **Urgent**: CI blocker |
| [PR #5163](https://github.com/NousResearch/hermes-agent/pull/5163) | ~6 days | Large Web Console PR | Review bandwidth |
| [PR #7488](https://github.com/NousResearch/hermes-agent/pull/7488) | Today | Matrix SDK migration | NixOS maintainer review |

**Review bottleneck**: 43 open PRs vs. 7 merged suggests maintainer bandwidth constraint. The 5 security issues filed today ([7483](https://github.com/NousResearch/hermes-agent/issues/7483)-[7487](https://github.com/NousResearch/hermes-agent/issues/7487)) need triage priority.

---

*Digest generated from 50 issues and 50 PRs updated 2026-04-11*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

 # PicoClaw Project Digest — 2026-04-11

## 1. Today's Overview

PicoClaw shows **high development velocity** with 28 PRs and 16 issues updated in the last 24 hours. The project is actively iterating on **v0.2.6** with a nightly build released today, indicating rapid stabilization efforts. Community engagement is strong but strained—users are reporting critical WebSocket regressions in v0.2.5-v0.2.6 while maintainers close out Signal integration and iMessage channel PRs. The core tension is between **expanding channel/provider support** and **fixing breaking changes in core communication infrastructure**. Discord community management has emerged as a visible pain point, with users questioning Sipeed's commitment to the project.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| **[v0.2.6-nightly.20260411.748ac58d](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)** | Nightly | Automated build; **use with caution**. Changelog spans v0.2.6→main. |

**No stable release today.** The nightly suggests v0.2.7 may be approaching, but WebSocket bugs (#2319, #2463) may block release.

---

## 3. Project Progress

### Merged/Closed PRs (18 total, selected highlights)

| PR | Description | Impact |
|----|-------------|--------|
| [#2477](https://github.com/sipeed/picoclaw/pull/2477) | Sync (closed) | Repository maintenance |
| [#2473](https://github.com/sipeed/picoclaw/pull/2473) → superseded by [#2474](https://github.com/sipeed/picoclaw/pull/2474) | Cron independent sessions fix | **Critical fix**: Prevents cron job history accumulation across executions |
| [#2467](https://github.com/sipeed/picoclaw/pull/2467) | React version alignment in launcher | Fixes runtime crashes from version mismatch |
| [#2466](https://github.com/sipeed/picoclaw/pull/2466) | Token auth fallback for unsupported platforms | Improves launcher portability |
| [#2449](https://github.com/sipeed/picoclaw/pull/2449) | WebUI tool-call + content sync fix | Resolves [#2427](https://github.com/sipeed/picoclaw/issues/2427) — assistant text now visible with tool calls |
| [#2436](https://github.com/sipeed/picoclaw/pull/2436) | FTS5 query sanitization | Security hardening for search |
| [#2420](https://github.com/sipeed/picoclaw/pull/2420) | Provider-agnostic JSON escaping docs | Reduces provider-specific integration bugs |
| [#2180](https://github.com/sipeed/picoclaw/pull/2180) | Message tool reply fix | Prevents "Processing..." hangs in cross-chat scenarios |
| [#2224](https://github.com/sipeed/picoclaw/pull/2224) | **iMessage channel support** | Major platform expansion (macOS/iOS ecosystem) |
| [#2211](https://github.com/sipeed/picoclaw/pull/2211) | OpenRouter app identification | Enables platform analytics/ranking for PicoClaw |
| [#41](https://github.com/sipeed/picoclaw/issues/41) | **Signal channel integration** | Privacy-focused messaging platform support (closed as completed) |

**Key Advancement**: Multi-channel strategy accelerating—iMessage and Signal now both integrated, complementing existing Telegram/Discord/Feishu support.

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Comments | Topic | Underlying Need |
|-------|----------|-------|---------------|
| [#2408](https://github.com/sipeed/picoclaw/issues/2408) | 8 | **LLM Account Stacking ("Cartridge-Belt")** | Cost optimization & reliability through automatic API key rotation when hitting rate limits. Users operating at scale need failover without manual intervention. |
| [#2319](https://github.com/sipeed/picoclaw/issues/2319) | 7 | **WebSocket connection failure (v0.2.5+)** | **Critical regression blocking core functionality**. Users stuck on v0.2.4. Need stable real-time communication for Pico client. |
| [#41](https://github.com/sipeed/picoclaw/issues/41) | 6 | Signal integration | Privacy-conscious users want E2E-encrypted alternatives to Telegram/WhatsApp for self-hosted AI. |
| [#2433](https://github.com/sipeed/picoclaw/issues/2433) | 3 | **Discord community neglect** | Governance gap—users feel abandoned on international platforms vs. WeChat. Signals need for dedicated community manager or maintainer presence. |

### Active PRs with Traction

| PR | Focus | Significance |
|----|-------|------------|
| [#2475](https://github.com/sipeed/picoclaw/pull/2475) | Native Gemini provider + thought message separation | Addresses [#2448](https://github.com/sipeed/picoclaw/issues/2448); major UX improvement for reasoning visibility |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | Multi-user support + "Agent Shield" security | Enterprise-grade hardening; large in scope, needs review bandwidth |

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **🔴 Critical** | [#2319](https://github.com/sipeed/picoclaw/issues/2319) [#2463](https://github.com/sipeed/picoclaw/issues/2463) — WebSocket failures v0.2.5+ | **Open, no fix merged** | None identified; blocking release |
| **🔴 Critical** | [#2438](https://github.com/sipeed/picoclaw/issues/2438) — `PICOCLAW_GATEWAY_TOKEN` env var misleading | Open | None |
| 🟡 High | [#2377](https://github.com/sipeed/picoclaw/issues/2377) — Terminal control character injection | Open | None |
| 🟡 High | [#2448](https://github.com/sipeed/picoclaw/issues/2448) — WebUI merges reasoning/reply | **Fix in review** | [#2475](https://github.com/sipeed/picoclaw/pull/2475) |
| 🟡 High | [#2472](https://github.com/sipeed/picoclaw/issues/2472) — `list_dir` Windows path separator bug | Open (0 comments) | None |
| 🟡 High | [#2468](https://github.com/sipeed/picoclaw/issues/2468) — Scheduled task execution fails | Open | [#2474](https://github.com/sipeed/picoclaw/pull/2474) addresses related cron session issue |
| 🟡 High | [#2464](https://github.com/sipeed/picoclaw/issues/2464) — Feishu message batching failure | Open (0 comments) | None |
| 🟢 Medium | [#2046](https://github.com/sipeed/picoclaw/issues/2046) — LongCat API tool calling | Open (stale) | None |
| 🟢 Medium | [#2471](https://github.com/sipeed/picoclaw/issues/2471) — NeoMetron/Gemini model fetch failures | Open (0 comments, vague) | None |

**Stability Assessment**: **Concerning**. WebSocket regression is a **release blocker** affecting multiple users. Windows compatibility and cron reliability also need attention.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|---------|-------|---------------------------|-----------|
| **SMTP email channel** | [#2465](https://github.com/sipeed/picoclaw/issues/2465) | **High** | Low complexity ("SMTP is generic interface"), fits cron use case, no blockers |
| **LLM Account Stacking** | [#2408](https://github.com/sipeed/picoclaw/issues/2408) | Medium | High community demand (8 comments), but complex provider architecture changes |
| **Dual-header auth support** | [#2169](https://github.com/sipeed/picoclaw/issues/2169) | Medium | Self-hosted model trend growing; small surface area change |
| **Multi-user/Agent Shield** | [#2313](https://github.com/sipeed/picoclaw/pull/2313) | Medium-High | PR exists, enterprise demand, but large review burden |

**Emerging Pattern**: Users want **PicoClaw as a scheduled task/orchestration platform**, not just chatbot—cron + email + reporting workflows.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **WebSocket reliability** | #2319, #2463, #2438 | Critical—breaks core Pico client |
| **Platform parity gaps** | #2472 (Windows), #2464 (Feishu) | Moderate—expansion friction |
| **Documentation/communication gaps** | #2433 (Discord neglect), #2438 (misleading env var) | Moderate—trust erosion |
| **Reasoning visibility** | #2448, #2427 | Moderate—UX polish |

### Positive Signals
- **Channel diversity valued**: Signal (#41), iMessage (#2224) integrations well-received
- **Security consciousness**: Agent Shield PR (#2313) shows enterprise interest
- **Active self-hosting community**: Multiple issues around custom providers (LongCat, NeoMetron, dual-header auth)

### Satisfaction Divergence
- **Chinese-speaking users**: Active on WeChat, feel supported
- **International users**: Feel neglected on Discord (#2433), documentation lags for non-Chinese workflows

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|-------------|
| [#2169](https://github.com/sipeed/picoclaw/issues/2169) Dual-header auth | 12 days | Stagnant | Provider architecture decision |
| [#2046](https://github.com/sipeed/picoclaw/issues/2046) LongCat API tools | 16 days | Stagnant, provider-specific | Repro verification or close |
| [#2229](https://github.com/sipeed/picoclaw/pull/2229) Structured CLI UI | 11 days | Risk of bit-rot | Review or defer |
| [#2364](https://github.com/sipeed/picoclaw/pull/2364) Stale session fix | 6 days | Active but unmerged | Merge for stability |
| [#2163](https://github.com/sipeed/picoclaw/pull/2163) Google Antigravity OAuth | 13 days | Niche but valid | Token refresh expertise needed |
| [#2415](https://github.com/sipeed/picoclaw/pull/2415) Config diagnostics | 4 days | High value, low risk | Quick win—merge |

**Maintainer Attention Required**: 
1. **WebSocket triage** — assign owner for #2319/#2463
2. **Community response** — address #2433 Discord concerns
3. **PR queue hygiene** — 10 open PRs need review velocity

---

*Digest generated from GitHub activity 2026-04-10 to 2026-04-11. Data source: github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

 # NanoClaw Project Digest — 2026-04-11

## 1. Today's Overview

NanoClaw shows **high development velocity** with 25 tracked items updated in the last 24 hours (19 PRs, 6 issues). No new releases were cut, suggesting the project is in an active integration phase rather than stabilization. The community is heavily focused on **infrastructure hardening**—credential management, container runtime flexibility, and database abstraction—indicating maturation beyond early feature exploration. Notably, 7 PRs merged/closed versus 12 remaining open signals healthy throughput but also a growing review backlog. Cross-cutting themes include OAuth reliability, host-native execution modes, and expanding MCP (Model Context Protocol) integrations.

---

## 2. Releases

**None** — No new releases published today.

---

## 3. Project Progress

### Merged/Closed PRs Today (7 items)

| PR | Description | Significance |
|:---|:---|:---|
| [#1733](https://github.com/qwibitai/nanoclaw/pull/1733) | Direct Ollama credential injection | Fallback path when OneCLI gateway unavailable; enables local LLM provider flexibility |
| [#1729](https://github.com/qwibitai/nanoclaw/pull/1729) | Supermemory integration + session soft-delete | Persistent cross-conversation memory architecture; "matters" data model for long-term agent state |
| [#1730](https://github.com/qwibitai/nanoclaw/issues/1730) | *(Issue closed via fix)* MCP IPC tools host-mode fix | Resolved hardcoded `/workspace/ipc` path breaking host-mode sessions |
| [#1724](https://github.com/qwibitai/nanoclaw/pull/1724) | OAuth token refresh field completeness | Fixed `400 Invalid request format` by adding required `client_id`/`scope` |
| [#1258](https://github.com/qwibitai/nanoclaw/pull/1258) | Tailscale env var passthrough | Network mesh VPN integration for agent containers |
| [#1607](https://github.com/qwibitai/nanoclaw/pull/1607) | LiteLLM MCP skill with 3-layer model discovery | Unified model visibility across direct credentials, LiteLLM, and Ollama |
| [#721](https://github.com/qwibitai/nanoclaw/pull/721) | Comprehensive mount-security tests | 35 tests added to security-critical module (zero coverage → full coverage) |
| [#719](https://github.com/qwibitai/nanoclaw/pull/719) | Streaming output error handling | Fixed silent promise rejections causing group hangs on channel failures |

**Key Advances:** OAuth reliability is now production-grade with automatic refresh (#1725, #1724). The Supermemory integration (#1729) establishes a foundation for persistent agent identity. Security posture improved significantly with mount-security test coverage (#721).

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | 👍 | Analysis |
|:---|:---:|:---:|:---|
| [#1163](https://github.com/qwibitai/nanoclaw/issues/1163) OpenCode/JS SDK vs Claude Code | 2 | 3 | **Provider lock-in anxiety** — enterprise users need multi-LLM support; author already implemented parallel system, offering proven pattern |
| [#1493](https://github.com/qwibitai/nanoclaw/issues/1493) Headroom context compression research | 2 | 0 | **Cost/performance optimization** — transparent proxy for Claude API context compression; signals community interest in running agents at scale |
| [#1665](https://github.com/qwibitai/nanoclaw/issues/1663) `.claude/settings.local.json` gitignore | 1 | 0 | Developer ergonomics; PR #1734 already submitted, rapid response |

### Underlying Needs
- **Multi-provider strategy**: #1163 reveals strategic risk of Anthropic dependency; community wants abstraction layers
- **Cost efficiency at scale**: #1493's context compression proxy addresses token economics for production deployments
- **Developer experience polish**: Small friction points (#1665) get quick fixes, indicating responsive maintenance

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix Available |
|:---|:---|:---|:---:|
| **Critical** | [#1730](https://github.com/qwibitai/nanoclaw/issues/1730) MCP IPC hardcoded path breaks host-mode | Closed | ✅ Merged |
| **High** | [#1735](https://github.com/qwibitai/nanoclaw/pull/1735) Apple Container credential proxy/launchd/PATH bugs | Open | 🔄 PR pending |
| **High** | [#1725](https://github.com/qwibitai/nanoclaw/pull/1725) OAuth token expiration causes 401s | Open | 🔄 PR pending |
| **Medium** | [#719](https://github.com/qwibitai/nanoclaw/pull/719) Streaming output hangs on channel errors | Closed | ✅ Merged |

**Stability Assessment:** Two critical-path authentication issues (#1730, #1724) resolved today. Remaining risks cluster around **macOS/Apple Container support** (#1735) and **long-running session reliability** (#1725). The OAuth fixes suggest the project is hardening for production uptime requirements.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Request | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| **Native runner mode** (host execution) | [#1732](https://github.com/qwibitai/nanoclaw/issues/1732) | High | Blocker for tmux, headed browsers, macOS APIs; strong use-case articulation |
| **Pluggable database layer** | [#1722](https://github.com/qwibitai/nanoclaw/issues/1722) + [#1723](https://github.com/qwibitai/nanoclaw/pull/1723) | **Very High** | PR already open; enables PostgreSQL/enterprise deployments |
| **Matrix channel (E2EE)** | [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) | Medium | Complete implementation pending review; privacy-focused deployment option |
| **Home Assistant MCP** | [#1327](https://github.com/qwibitai/nanoclaw/pull/1327) | Medium | IoT/home automation use case; implementation complete |
| **UnraidClaw MCP** | [#1188](https://github.com/qwibitai/nanoclaw/pull/1188) | Medium | NAS/self-hosted infrastructure integration |
| **Lossless Context Management** | [#1562](https://github.com/qwibitai/nanoclaw/pull/1562) | Medium | Research-oriented; may need architectural review |

**Prediction:** Database adapter (#1723) and native runner (#1732) are strongest candidates for next release—both address production deployment blockers with active PRs.

---

## 7. User Feedback Summary

### Pain Points
| Issue | Source | Impact |
|:---|:---|:---|
| Container isolation too restrictive for local tools | [#1732](https://github.com/qwibitai/nanoclaw/issues/1732) | Blocks tmux workflows, browser automation, macOS-native APIs |
| Claude Code lock-in | [#1163](https://github.com/qwibitai/nanoclaw/issues/1163) | Enterprise procurement friction, vendor risk |
| OAuth token expiration in long sessions | [#1725](https://github.com/qwibitai/nanoclaw/pull/1725) | Production reliability, 401 errors after idle periods |
| Apple Container setup friction | [#1735](https://github.com/qwibitai/nanoclaw/pull/1735) | macOS user onboarding broken end-to-end |

### Positive Signals
- **Rapid fix turnaround**: #1665 reported → #1734 PR same day
- **Security investment**: Mount-security test coverage (#721) shows engineering discipline
- **Ecosystem expansion**: Multiple MCP skills (Home Assistant, Unraid, LiteLLM, Tailscale) indicate healthy integration demand

### Use Case Evolution
Users are pushing NanoClaw from **containerized cloud agents** toward **hybrid deployment** (host-native for local control, containers for isolation) and **enterprise infrastructure integration** (databases, VPNs, home automation, NAS systems).

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---:|:---|:---|
| [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) Matrix channel | 7 days | Medium | Security review of E2EE implementation, crypto store persistence |
| [#1562](https://github.com/qwibitai/nanoclaw/pull/1562) Lossless Context Management | 11 days | Medium | Architectural alignment with #1722 database abstraction |
| [#1188](https://github.com/qwibitai/nanoclaw/pull/1188) UnraidClaw MCP | 25 days | **High** | Maintainer review; infrastructure skill with user demand |
| [#1327](https://github.com/qwibitai/nanoclaw/pull/1327) Home Assistant MCP | 20 days | **High** | IoT integration complete but unmerged; competing priorities |
| [#1163](https://github.com/qwibitai/nanoclaw/issues/1163) OpenCode/JS SDK | 26 days | **High** | Strategic decision on multi-provider roadmap; has implementation reference |

**Action Required:** The MCP skill PRs (#1188, #1327) risk bit-rot despite completeness. #1163 needs maintainer response on provider strategy to retain enterprise-contributor engagement.

---

*Digest generated from GitHub activity 2026-04-10 to 2026-04-11. All links: `github.com/qwibitai/nanoclaw`*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-11

## 1. Today's Overview

NullClaw shows **high development velocity** with 12 PRs updated in the last 24 hours (8 merged/closed, 4 open) and 2 new active issues. The project demonstrates strong maintainer throughput with zero PR backlog accumulation—every PR that received attention today was resolved. Activity centers on **CI hardening**, **provider robustness**, and **cron subsystem expansion**. No new releases were cut, suggesting the project may be batching changes for a larger version bump. The community appears engaged with bilingual contributions (English/Chinese) and cross-platform support efforts (Nix, Docker).

---

## 2. Releases

**No new releases** — version `2026.4.9` remains current.

---

## 3. Project Progress

### Merged/Closed PRs (8 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#744](https://github.com/nullclaw/nullclaw/pull/744) | manelsen | Normalized Ollama scheduler tool aliases (`scheduler_tool`/`schedule_tool` → `schedule`) | **Provider compatibility** — fixes tool call routing for Ollama users |
| [#781](https://github.com/nullclaw/nullclaw/pull/781) | vernonstinebaker | Null-guard `tool_calls` and `choices` in OpenAI/compatible providers | **Stability** — prevents SIGSEGV with GLM-5 (infini-ai) responses |
| [#794](https://github.com/nullclaw/nullclaw/pull/794) | kunalk16 | Fixed pretty JSON alignment in interactive onboarding (depth ≥2) | **UX polish** — resolves [#765](https://github.com/nullclaw/nullclaw/issues/765) |
| [#788](https://github.com/nullclaw/nullclaw/pull/788) | fakhriaunur | Added agent provider validation in `Config.validate()` | **Config safety** — rejects unknown providers at load time |
| [#751](https://github.com/nullclaw/nullclaw/pull/751) | manelsen | 8 unit tests for Sandbox interface/NoopSandbox | **Test coverage** — eliminated zero-coverage gap in security layer |
| [#709](https://github.com/nullclaw/nullclaw/pull/709) | manelsen | Added `session_id` → `user` field mapping + `extra_body_params` for providers | **Extensibility** — closes [#701](https://github.com/nullclaw/nullclaw/issues/701) |
| [#749](https://github.com/nullclaw/nullclaw/pull/749) | manelsen | Fixed Docker Compose onboarding to respect `NULLCLAW_HOME`/`NULLCLAW_WORKSPACE` | **Deployment reliability** — closes [#747](https://github.com/nullclaw/nullclaw/issues/747) |
| [#752](https://github.com/nullclaw/nullclaw/pull/752) | manelsen | Default OTLP endpoint to HTTPS (`https://localhost:4318`) | **Security-by-default** — encrypts telemetry per AGENTS.md mandate |

**Key themes:** Provider ecosystem hardening, security defaults, test coverage expansion, and onboarding reliability.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#798](https://github.com/nullclaw/nullclaw/pull/798) — CI action pinning | Open, 0 comments | **Supply-chain security** emerging as maintainer priority; follows recent industry attacks on compromised actions |
| [#796](https://github.com/nullclaw/nullclaw/pull/796) — Nix flake CI | Open, 0 comments | **Reproducible builds** for NixOS community; signals expansion beyond Docker-centric workflows |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) — Cron subagent engine | Open, 0 comments, updated today | **Major feature** — DB-backed scheduling with history, JSON output, security hardening; likely v2026.5.0 candidate |
| [#782](https://github.com/nullclaw/nullclaw/pull/782) — Telegram interactive menus | Open, 0 comments, updated today | **Chat platform expansion** — skill discovery UX, codex timeout hardening |

**Underlying needs:** 
- **Enterprise readiness**: CI hardening, audit trails (cron history), HTTPS-by-default
- **Multi-platform support**: Nix alongside Docker
- **Chat-native UX**: Telegram as first-class interface, not just CLI

---

## 5. Bugs & Stability

| Issue | Severity | Status | Fix PR |
|:---|:---|:---|:---|
| [#799](https://github.com/nullclaw/nullclaw/issues/799) — Docker sandbox "invalid empty volume spec" | **High** — crashes sandbox initialization | Open, 0 comments | **None yet** |
| [#797](https://github.com/nullclaw/nullclaw/issues/797) — SQLite history empty after successful replies | **Medium** — data loss perception, breaks session continuity | Open, 0 comments | **None yet** |

**Assessment:** Two fresh bugs with no fixes in flight. Both affect core functionality:
- #799 blocks Docker sandbox usage entirely (regression in `detect.zig` struct initialization)
- #797 undermines trust in SQLite memory backend—users see responses but no audit trail

**Recommendation:** Both need maintainer triage; #799 is blocking, #797 is trust-eroding.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|:---|:---|:---|
| **Cron subsystem v1.0** | [#783](https://github.com/nullclaw/nullclaw/pull/783) | **High** — comprehensive PR with DB schema, worker queue, JSON API |
| **Telegram skill marketplace UX** | [#782](https://github.com/nullclaw/nullclaw/pull/782) | **Medium-High** — interactive menus, callback editing |
| **Nix first-class support** | [#796](https://github.com/nullclaw/nullclaw/pull/796) | **Medium** — CI infrastructure, not user-facing |
| **Provider extensibility hooks** | [#709](https://github.com/nullclaw/nullclaw/pull/709) `extra_body_params` | **Shipped** — foundation for custom provider tuning |
| **Enhanced sandbox security** | [#751](https://github.com/nullclaw/nullclaw/pull/751) tests + [#799](https://github.com/nullclaw/nullclaw/issues/799) bug | **Ongoing** — Docker sandbox needs stabilization before expansion |

**Predicted v2026.5.0 highlights:** Cron scheduling, Telegram UX polish, provider robustness fixes.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| **History/sessions unreliable** | [#797](https://github.com/nullclaw/nullclaw/issues/797) — "normal answer, but `history list/show` stays empty" | High — core feature broken |
| **Docker sandbox broken** | [#799](https://github.com/nullclaw/nullclaw/issues/799) — uninitialized mount args | High — blocks containerized workflows |
| **Onboarding friction** | [#794](https://github.com/nullclaw/nullclaw/pull/794), [#749](https://github.com/nullclaw/nullclaw/pull/749) — JSON formatting, path resolution | Medium — addressed in recent merges |
| **Provider compatibility gaps** | [#744](https://github.com/nullclaw/nullclaw/pull/744), [#781](https://github.com/nullclaw/nullclaw/pull/781) — Ollama aliases, GLM-5 null handling | Medium — actively patched |
| **Desire for reproducible deployments** | [#796](https://github.com/nullclaw/nullclaw/pull/796) — Nix flake | Emerging — infrastructure-as-code users |

**Satisfaction drivers:** Fast PR turnaround (8 merges today), bilingual community, security-by-default posture.

**Dissatisfaction risks:** SQLite backend reliability, Docker sandbox regressions—both unaddressed as of today.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#799](https://github.com/nullclaw/nullclaw/issues/799) Docker sandbox crash | 1 day | **Blocking** — affects all Docker users | Maintainer assignment, patch in `detect.zig` |
| [#797](https://github.com/nullclaw/nullclaw/issues/797) SQLite history empty | 1 day | **Trust erosion** — data appears lost | Repro confirmation, backend state investigation |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) Cron subagent | 4 days | **Large feature** — needs review bandwidth | Code review, potential merge for v2026.5.0 |
| [#782](https://github.com/nullclaw/nullclaw/pull/782) Telegram menus | 4 days | **UX feature** — depends on codex stability | Review coordination with #783 |

**Note:** No long-rotting issues (all <1 week). The risk is **fresh critical bugs without assigned fixes** rather than stale backlog. Maintainer attention should prioritize #799 and #797 before feature merges.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-11

## 1. Today's Overview

IronClaw experienced **exceptionally high activity** with 88 total updates (38 issues, 50 PRs) and the successful release of **v0.25.0** after CI unblocking efforts. The project is in active **staging-to-main promotion mode** with multiple infrastructure PRs resolving merge conflicts. A significant **QA bug bash** is underway on hosted-staging ("crab shack"), surfacing 15+ new issues primarily around agent behavior, tool execution, and web UI limitations. The v2 architecture engine remains the dominant development focus, with parallel efforts on abstraction simplification (#2192), extension model unification (#2246), and skill lifecycle management (#2250).

---

## 2. Releases

### [ironclaw-v0.25.0](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.25.0) — 2026-04-11

| Category | Details |
|----------|---------|
| **Major Additions** | Production-grade coding tools with file history and skills system ([#2025](https://github.com/nearai/ironclaw/pull/2025)); extensible deployment profiles via `IRONCLAW_PROFILE` environment variable ([#2203](https://github.com/nearai/ironclaw/pull/2203)); commitments system for skills |
| **Breaking Changes** | `ironclaw_common` 0.1.0 → 0.2.0; `ironclaw` 0.24.0 → 0.25.0 (API breaking per cargo-semver) |
| **Migration Notes** | Users with custom profiles should verify `IRONCLAW_PROFILE` resolution order; WASM extension manifests require updated checksums (auto-generated in [#2308](https://github.com/nearai/ironclaw/pull/2308)) |

---

## 3. Project Progress

### Merged/Closed PRs Today (43 total)

| PR | Author | Impact |
|:---|:---|:---|
| [#2306](https://github.com/nearai/ironclaw/pull/2306), [#2305](https://github.com/nearai/ironclaw/pull/2305) | henrypark133 | **Unblocked v0.25.0 release** — fixed tag filter regex and disabled crates.io publishing for main crate |
| [#2308](https://github.com/nearai/ironclaw/pull/2308) | github-actions[bot] | Auto-updated WASM artifact checksums for registry consistency |
| [#2303](https://github.com/nearai/ironclaw/pull/2303) | henrypark133 | Re-applied Telegram UTF-16 message splitting fix and DB migration labeling |
| [#2301](https://github.com/nearai/ironclaw/pull/2301) | ironclaw-ci[bot] | Staging-to-main promotion (batch 2f2fe30..a53eac5) |
| [#2300](https://github.com/nearai/ironclaw/pull/2300) | henrypark133 | Bumped 5 WASM channel versions; fixed false-positive panic detection in `check_no_panics.py` |
| [#2299](https://github.com/nearai/ironclaw/pull/2299), [#2297](https://github.com/nearai/ironclaw/pull/2297), [#2295](https://github.com/nearai/ironclaw/pull/2295) | henrypark133 | Merge conflict resolution for staging promotion |
| [#2241](https://github.com/nearai/ironclaw/pull/2241) | zetyquickly | Abound demo fixes: removed approval from `send_wire`, introduced `terminal_tools` for JSON responses |
| [#2075](https://github.com/nearai/ironclaw/pull/2075) | ironclaw-ci[bot] | Release automation for v0.25.0 |

**Key Advancements:**
- **CI/CD reliability**: Fixed tag pattern matching that was triggering builds on wrong tags
- **Telegram stability**: UTF-16 encoding fix prevents message truncation with emoji
- **Financial integrations**: Abound demo progressing with two-step wire analysis flow

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#2192](https://github.com/nearai/ironclaw/issues/2192) | 3 | **Architecture simplification**: collapse 7 concepts (Tools, Channels, Skills, Routines, Missions, Extensions, WASM) into 3 | Developer experience; reducing cognitive load for contributors |
| [#2233](https://github.com/nearai/ironclaw/issues/2233) | 1 | Telegram WASM artifact missing in tar.gz | Reliable extension distribution |
| [#2229](https://github.com/nearai/ironclaw/issues/2229) | 1 | Google Sheets OAuth 400 error | Enterprise SaaS integration reliability |
| [#2246](https://github.com/nearai/ironclaw/issues/2246) | 1 | Unify extension model: MCP tools as single-tool extensions | Preventing LLM context flooding from MCP servers; provider deduplication |
| [#2250](https://github.com/nearai/ironclaw/issues/2250) | 1 | Engine v2: tool-aware skill lifecycle | Self-improving agent behavior; skill adaptation/retirement |
| [#2240](https://github.com/nearai/ironclaw/issues/2240) | 1 | Agent retries failing tool calls 50× with no duplicate detection | Robustness against LLM hallucination loops |

**Analysis:** The community is focused on **v2 architecture maturation** — specifically making the system more maintainable (#2192), more reliable with external services, and more intelligent about its own tool usage. The "paranoid architect review" in [#2252](https://github.com/nearai/ironclaw/issues/2252) indicates high scrutiny of production code quality.

---

## 5. Bugs & Stability

### Critical/High Severity (QA Bug Bash Findings)

| Issue | Severity | Description | Fix Status |
|:---|:---|:---|:---|
| [#2240](https://github.com/nearai/ironclaw/issues/2240) | 🔴 **High** | Agent loops on identical failed tool calls (up to 50×) | No PR yet |
| [#2276](https://github.com/nearai/ironclaw/issues/2276) | 🔴 **High** | Orchestrator crashes with HTTP 413 Payload Too Large | No PR yet |
| [#2252](https://github.com/nearai/ironclaw/issues/2252) | 🔴 **High** | **Security/DoS**: Unbounded memory from file history snapshots in #2025 | Under review by @ilblackdragon |
| [#2284](https://github.com/nearai/ironclaw/issues/2284) | 🟡 **Medium** | Staging agent instances die after 1 hour inactivity | No PR yet |
| [#2231](https://github.com/nearai/ironclaw/issues/2231) | 🟡 **Medium** | Multiple chats cannot run in parallel (queue blocking) | No PR yet |
| [#2285](https://github.com/nearai/ironclaw/issues/2285) | 🟡 **Medium** | Chat messages disappear on refresh while bot continues | No PR yet |
| [#2233](https://github.com/nearai/ironclaw/issues/2233) | 🟡 **Medium** | Telegram tool install fails — WASM artifact missing | No PR yet |
| [#2229](https://github.com/nearai/ironclaw/issues/2229) | 🟡 **Medium** | Google Sheets OAuth blocked (Error 400) | No PR yet |

### Agent Behavior Issues (Medium Severity)

| Issue | Problem |
|:---|:---|
| [#2287](https://github.com/nearai/ironclaw/issues/2287) | Wrong API called (convertkit.com/subscribe) instead of parsing invoice |
| [#2286](https://github.com/nearai/ironclaw/issues/2286) | Creates scheduled cron instead of executing immediately |
| [#2282](https://github.com/nearai/ironclaw/issues/2282) | Overrides user instructions — only alerts on failures |
| [#2281](https://github.com/nearai/ironclaw/issues/2281) | Ignores temporal conditions, sends meeting prep immediately |
| [#2280](https://github.com/nearai/ironclaw/issues/2280) | Sends unsolicited cross-channel Telegram messages |
| [#2279](https://github.com/nearai/ironclaw/issues/2279) | Falsely claims success despite shell/open tool errors |

### Fixed Today
- [#2248](https://github.com/nearai/ironclaw/issues/2248) ✅ "Answer mistaken as approval" — closed
- [#2206](https://github.com/nearai/ironclaw/issues/2206) ✅ v2 engine auth_url scheme sanitization — closed
- [#1944](https://github.com/nearai/ironclaw/issues/1944) ✅ Mission cron scheduling broken — closed

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in v0.26 |
|:---|:---|:---|
| [#2277](https://github.com/nearai/ironclaw/issues/2277) | **ACP-backed child thread backends** — delegate to Codex/Droid/OpenCode via Agent Communication Protocol | **High** — aligns with v2 architecture, @serrrfirat assigned |
| [#2274](https://github.com/nearai/ironclaw/issues/2274) | **Streaming of tool calls** for Responses API observability | **Medium-High** — customer-requested, @pranavraja99 involved |
| [#2271](https://github.com/nearai/ironclaw/issues/2271) | `ironclaw profile list` CLI subcommand | **High** — trivial addition, follows #2203 |
| [#2307](https://github.com/nearai/ironclaw/issues/2307) | **Public Generative Language API** for headless/server deployments (bypass Cloud Code API) | **Medium** — infrastructure complexity |
| [#2255](https://github.com/nearai/ironclaw/issues/2255) | System-level context notes for routine notifications | **Medium** — UX improvement |
| [#1325](https://github.com/nearai/ironclaw/issues/1325) | First-class create/edit flows for web routines tab | **Medium** — long-standing enhancement |

**Predicted v0.26 themes:** CLI ergonomics (profile management), observability (streaming, context notes), and external agent delegation (ACP integration).

---

## 7. User Feedback Summary

### Pain Points (from QA bug bash)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Agent instruction following** | 5+ issues where bot ignores explicit instructions (temporal conditions, alert frequency, immediate vs. scheduled execution) | 🔴 Critical for trust |
| **Cross-channel isolation** | [#2280](https://github.com/nearai/ironclaw/issues/2280) unsolicited Telegram messages | 🔴 Privacy concern |
| **Tool execution feedback** | [#2279](https://github.com/nearai/ironclaw/issues/2279) false success claims; [#2240](https://github.com/nearai/ironclaw/issues/2240) infinite retry loops | 🔴 Reliability |
| **Web UI limitations** | [#2283](https://github.com/nearai/ironclaw/issues/2283) no file uploads; [#2285](https://github.com/nearai/ironclaw/issues/2285) message persistence | 🟡 Feature gaps |
| **Integration fragility** | Google OAuth, Telegram WASM artifacts failing | 🟡 Enterprise readiness |

### Positive Signals
- v0.25.0's **production-grade coding tools** and **deployment profiles** address power-user needs
- Active **bug bash process** indicates quality investment
- Rapid CI unblocking shows responsive maintenance

---

## 8. Backlog Watch

### Long-Unanswered Important Items

| Issue/PR | Age | Status | Risk |
|:---|:---|:---|:---|
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | 22 days | **XL PR open** — Aliyun Coding Plan support | Stale; needs rebase, may conflict with v2 changes |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) | 12 days | **XL PR open** — Abound demo (Responses API, credential injection, guardrails) | Active but large; blocks on review |
| [#1503](https://github.com/nearai/ironclaw/issues/1503) | 22 days | Google Slides integration failed | No assignee, no update |
| [#1325](https://github.com/nearai/ironclaw/issues/1325) | 25 days | Routines UX enhancement | Read-only management still unaddressed |

### Maintainer Attention Needed

1. **[#2252](https://github.com/nearai/ironclaw/issues/2252)** — High-severity security review findings on production coding tools; @ilblackdragon tagged
2. **[#2192](https://github.com/nearai/ironclaw/issues/2192)** — Architecture simplification proposal needs decision before v2 solidifies
3. **[#2246](https://github.com/nearai/ironclaw/issues/2246)** + [#2250](https://github.com/nearai/ironclaw/issues/2250) — Related v2 engine design issues; should be resolved together

---

*Digest generated from 38 issues and 50 PRs updated 2026-04-11. Project health: **Active development with quality investment, but v2 stability and agent reliability need attention before broader adoption.***

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

 # LobsterAI Project Digest — 2026-04-11

## 1. Today's Overview

LobsterAI shows **high development velocity** with 20 PRs updated in the last 24 hours (11 merged/closed, 9 open) and 7 active issues, indicating an active release cycle. The team is aggressively stabilizing the OpenClaw gateway after a **critical P0 blocker** (#1626) caused 100% startup failures in the latest version. No new releases were published today, suggesting the team is holding releases until stability issues are resolved. Community engagement is moderate with feature requests for additional AI engines and system notifications gaining traction.

---

## 2. Releases

**No new releases** — The team appears to be in a stabilization period following the 2026.4.3 release, with multiple hotfix PRs targeting packaging and gateway issues before the next version ships.

---

## 3. Project Progress

### Merged/Closed PRs (11 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#1626](https://github.com/netease-youdao/LobsterAI/pull/1626) | xuzx-code | **CRITICAL FIX**: Removes deprecated `skipMissedJobs` field from OpenClaw config, fixes gateway startup failure and dialog flashing | Unblocks all users on latest version |
| [#1625](https://github.com/netease-youdao/LobsterAI/pull/1625) | btc69m979y-dotcom | Skip OpenClaw peerDep auto-install to reduce package size (~738MB → eliminated) | Build optimization |
| [#1624](https://github.com/netease-youdao/LobsterAI/pull/1624) | btc69m979y-dotcom | Fix Windows build failures (Node 24 EINVAL), prune 226MB duplicate SDK | Windows build stability |
| [#1623](https://github.com/netease-youdao/LobsterAI/pull/1623) | btc69m979y-dotcom | Fix Windows packaging from npm v11 compat issues | Cross-platform build reliability |
| [#1619](https://github.com/netease-youdao/LobsterAI/pull/1619) | btc69m979y-dotcom | Install missing channel deps for OpenClaw v2026.4.8 packaging bug | Runtime dependency fix |
| [#1618](https://github.com/netease-youdao/LobsterAI/pull/1618) | btc69m979y-dotcom | Optimize gateway startup: deny 64 unused plugins, disable Bonjour | ~Startup performance |
| [#1610](https://github.com/netease-youdao/LobsterAI/pull/1610) | wulei05 | Add OpenClaw session retention config (default 30 days), fix timezone drift | Session management |
| [#1611](https://github.com/netease-youdao/LobsterAI/pull/1611) | wulei05 | **MAJOR REFACTOR**: Remove yd-cowork legacy engine, consolidate on OpenClaw | Architecture simplification |
| [#1613](https://github.com/netease-youdao/LobsterAI/pull/1613) | nmgwddj | Fix scheduled task dirty state after save | UI state bugfix |
| [#1612](https://github.com/netease-youdao/LobsterAI/pull/1612) | winsan-zhang | Add POPO QR code scan login support | New IM platform integration |
| [#929](https://github.com/netease-youdao/LobsterAI/pull/929) | Angus2333 | Add Baidu Qianfan LLM support | Expanded model provider coverage |

**Key Technical Direction**: The project completed its **engine consolidation** — removing the legacy `yd-cowork` Claude-based engine entirely and standardizing on OpenClaw as the sole AI engine. This reduces maintenance burden but increases pressure on OpenClaw stability.

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627) — Client crashes on complex tasks | 1 comment, new | **Critical stability concern**: User reports client crashes with WebSocket/event loop logs; likely related to OpenClaw resource exhaustion or memory limits |
| [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) — Cannot add custom models | 1 comment, new | **Onboarding friction**: Custom model testing fails, blocking power users from using proprietary endpoints |
| [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) — Request: Hermes-agent engine support | 1 comment | **Engine diversity demand**: User wants alternative to OpenClaw, suggesting community concern about single-engine dependency |
| [#1620](https://github.com/netease-youdao/LobsterAI/issues/1620) / [#1621](https://github.com/netease-youdao/LobsterAI/pull/1621) — System notifications for scheduled tasks | 0 comments, PR exists | **Productivity feature**: Native OS notifications for background task completion; PR already implements with cross-platform support |

**Underlying Needs**: Users want (1) **reliability guarantees** for long-running tasks, (2) **flexibility** in model/provider choice, and (3) **ambient awareness** of agent activity without app focus.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available |
|:---|:---|:---|:---|
| **P0 — Blocker** | [#1626](https://github.com/netease-youdao/LobsterAI/pull/1626) — Gateway fails to start, dialog flashes | **FIXED** (merged) | ✅ PR #1626 merged |
| **P1 — High** | [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627) — Client crashes on complex tasks | Open, investigating | ❌ No fix yet |
| **P1 — High** | [#1566](https://github.com/netease-youdao/LobsterAI/issues/1566) — Model returns identical responses regardless of input | Open, logs attached | ❌ No fix yet |
| **P2 — Medium** | [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) — Custom model addition fails | Open | ❌ No fix yet |
| **P2 — Medium** | [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) — Models cannot access uploaded files (regression from file→project workflow change) | Open | ❌ No fix yet |
| **P2 — Medium** | [#1617](https://github.com/netease-youdao/LobsterAI/issues/1617) — Skill deletion UI state desync, persists after restart | Open | ❌ No fix yet |

**Stability Assessment**: The team responded rapidly to the P0 gateway failure, but **multiple regressions** in core workflows (file upload, custom models, response quality) suggest the OpenClaw migration introduced breaking changes not fully caught in testing.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **System notifications for scheduled tasks** | [#1620](https://github.com/netease-youdao/LobsterAI/issues/1620) + [#1621](https://github.com/netease-youdao/LobsterAI/pull/1621) | **High** | PR already complete, aligns with "ambient agent" product direction |
| **Hermes-agent engine option** | [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) | Low-Medium | Team just consolidated to single engine; counter to current architecture |
| **Improved session export** | [#1615](https://github.com/netease-youdao/LobsterAI/pull/1615) | **High** | PR open with comprehensive improvements (i18n, metadata, copy-to-clipboard) |
| **Onboarding/guided tour** | [#1577](https://github.com/netease-youdao/LobsterAI/pull/1577) | **High** | PR active for 3 days, addresses new user drop-off |
| **Model selector UI refresh** | [#1628](https://github.com/netease-youdao/LobsterAI/pull/1628) | **High** | PR open, improves provider branding and accessibility |

**Predicted v2026.4.x Focus**: Polish features (notifications, onboarding, export) rather than engine expansion, as the team stabilizes OpenClaw.

---

## 7. User Feedback Summary

### Pain Points
- **"Gateway not starting"** — Complete app failure for all users on latest version (now fixed)
- **"Slightly complex tasks crash client"** — Resource/robustness limits for real workloads
- **"Models don't know about my files"** — File upload workflow regression broke RAG use cases
- **"Same response to everything"** — Model degradation or context handling bug

### Use Cases
- **Scheduled automation** — Users want "fire and forget" agent tasks with async notification
- **Multi-model workflows** — Power users need custom endpoints for cost/performance optimization
- **Document-centric work** — File upload → analysis → response loop is core workflow

### Sentiment
Mixed-to-concerned. The rapid P0 fix demonstrates responsive maintenance, but the **density of regressions** (file handling, custom models, response quality) suggests quality gaps in the OpenClaw transition. Users appreciate the POPO integration and Baidu Qianfan support showing active ecosystem expansion.

---

## 8. Backlog Watch

| Item | Age | Issue | Risk |
|:---|:---|:---|:---|
| [#5](https://github.com/netease-youdao/LobsterAI/pull/5) | **50 days** | ESLint configuration and unused variable fixes — 269 lint errors blocking code quality | **Technical debt accumulation**; contributor PR stale since Feb 19 |
| [#367](https://github.com/netease-youdao/LobsterAI/pull/367) | **32 days** | MCP JSON streamable HTTP config import — external tool integration | **Ecosystem lock-out**; blocking MCP server compatibility |
| [#374](https://github.com/netease-youdao/LobsterAI/pull/374) | **31 days** | Async message handler for IM platform timeout — enterprise reliability | **Production reliability**; IM platform timeouts affect SLA |

**Recommendation**: PR #5 (ESLint) should be prioritized or closed decisively — it signals project hygiene to contributors. PRs #367 and #374 address enterprise integration needs and risk competitive disadvantage if unaddressed.

---

*Digest generated from GitHub activity 2026-04-10 to 2026-04-11. Data source: netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw Project Digest — 2026-04-11

## 1. Today's Overview

TinyClaw exhibits minimal activity today with **zero issues** and only **one open pull request** in the 24-hour window. The project appears to be in a stable maintenance phase rather than active feature development. The sole PR addresses a configuration bug where user settings were being silently ignored—a quality-of-life fix rather than a critical security patch. With no releases, no closed PRs, and no community discussion, momentum remains flat. Overall project health reads as **stable but dormant**, awaiting maintainer review cycles to unblock community contributions.

---

## 2. Releases

*No new releases today.*

---

## 3. Project Progress

**No merged or closed PRs today.**

The only activity is an **open, unmerged fix**:

| PR | Status | Description |
|:---|:-------|:------------|
| [#276](https://github.com/TinyAGI/tinyagi/pull/276) | ⏳ Open | Fixes configuration hierarchy bug where `heartbeat.enabled` at root `settings.json` was ignored despite being a valid user expectation |

**Technical significance**: This PR resolves a silent failure pattern—users disabling heartbeat monitoring globally would find agents still emitting health checks, potentially causing unexpected resource usage or log noise. The fix aligns the implementation with the declared `Settings` TypeScript interface.

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#276](https://github.com/TinyAGI/tinyagi/pull/276) | 0 comments, 0 reactions | **Only active thread** — reveals need for clearer configuration documentation and validation. The "undefined" comment count suggests minimal maintainer/community attention. |

**Underlying need**: Users expect intuitive, hierarchical configuration (global → agent-level override). The gap between declared types and runtime behavior indicates insufficient integration testing for config parsing. Community desire for **predictable DevOps experience** with TinyClaw deployments.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Available |
|:---------|:---------|:------------|:-------------|
| **Medium** | [#276](https://github.com/TinyAGI/tinyagi/pull/276) | Configuration ignored: `heartbeat.enabled=false` at top level has no effect; heartbeat starts unconditionally | ✅ **Fix PR open** — awaiting review |

**Risk assessment**: Medium severity due to operational surprise—users configuring explicit resource limits may experience unexpected behavior. No crashes or data loss reported.

---

## 6. Feature Requests & Roadmap Signals

*No explicit feature requests today.*

**Inferred signals from #276**:
- **Configuration validation & schema enforcement** — prevent silent ignores of valid settings
- **Configuration hot-reload** — PR touches heartbeat initialization; future enhancement could allow runtime toggle without restart

**Likely near-term additions**: Given the fix pattern, expect stricter config parsing with warnings for unrecognized/ignored keys in upcoming release.

---

## 7. User Feedback Summary

*No direct user feedback today.*

**Inferred pain points from available data**:
| Pain Point | Evidence | Severity |
|:-----------|:---------|:---------|
| Configuration surprises | #276 fix description | Moderate — "silently ignored" indicates debugging friction |
| Slow review velocity | PR open 1+ days with no comments | Moderate — contributor experience concern |

**Use case implied**: Production deployments requiring fine-grained resource control (disabling heartbeats for serverless/edge environments).

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#276](https://github.com/TinyAGI/tinyagi/pull/276) | 1 day | Low — isolated fix, but signals review bottleneck | Maintainer code review and merge |
| *General observation* | — | **Moderate** — zero open issues suggests either exceptional stability **or** underreporting/quiet community | Maintainer check-in on community health; consider issue templates to lower reporting friction |

**Recommendation**: With no other active items, #276 should be fast-tracked to demonstrate project responsiveness and unblock potential contributor pipeline.

---

*Digest generated from TinyAGI/tinyagi GitHub data — 2026-04-11*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-11

## 1. Today's Overview

Moltis demonstrated **exceptional engineering velocity** with 16 PRs updated and 12 merged/closed in the past 24 hours. The project is in active stabilization mode following the 20260410.01 release, with a clear focus on production reliability: 7 of 11 issues closed were bug fixes addressing Discord voice/image handling, hook system correctness, STT configuration, and OAuth compliance. The remaining 4 open issues span authentication, model provider integration, and voice pipeline edge cases. With 75% closure rate on issues and a single feature release, Moltis shows healthy maintainer responsiveness and disciplined scope management.

---

## 2. Releases

### [20260410.01](https://github.com/moltis-org/moltis/releases/tag/20260410.01)

**Release Date:** 2026-04-10

This appears to be a **timestamp-versioned build** (YYYYMMDDX.XX format) rather than a semantic version. No detailed release notes were provided in the data. Based on merged PRs, this release likely includes:

| Area | Likely Inclusions |
|------|-----------------|
| Voice/Discord | Inbound voice/image attachment support (#649), Whisper config fixes (#643) |
| Hooks | `ToolResultPersist` dispatch (#647), `MessageReceived` mutability fix (#651) |
| MCP/OAuth | Loopback redirect URI normalization (#636) |
| Agent Behavior | Auto-continue suppression fix (#634) |
| Security | `dcg-guard` PATH resolution (#635) |

**Migration Notes:** Users relying on `MessageReceived` hooks should verify behavior changes—hooks now properly honor `Block` and `ModifyPayload` actions (#651). MCP OAuth configurations using `https://localhost` will automatically downgrade to `http` (#636).

---

## 3. Project Progress

### Merged/Closed PRs (12 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#649](https://github.com/moltis-org/moltis/pull/649) | penso | Discord voice/image attachment handling with shared media downloader | **Major** — closes feature gap vs. Telegram/WhatsApp/Teams |
| [#648](https://github.com/moltis-org/moltis/pull/648) | penso | Telegram voice fallback fix — prevents placeholder text reaching LLM | **Stability** — fixes #632 |
| [#651](https://github.com/moltis-org/moltis/pull/651) | penso | `MessageReceived` hook mutability — honors Block/ModifyPayload | **API correctness** — fixes #639 |
| [#650](https://github.com/moltis-org/moltis/pull/650) | penso | Z.AI XML tool parsing + Telegram `/model` deduplication | **Provider compatibility** |
| [#647](https://github.com/moltis-org/moltis/pull/647) | penso | `ToolResultPersist` hook dispatch implementation | **Feature completion** — fixes #638 |
| [#643](https://github.com/moltis-org/moltis/pull/643) | penso | Honor `whisper.model` and `whisper.language` config | **Config correctness** — fixes #631 |
| [#642](https://github.com/moltis-org/moltis/pull/642) | Cstewart-HC | Projects section in Settings sidebar (superseded by #644) | **UI navigation** |
| [#630](https://github.com/moltis-org/moltis/pull/630) | penso | Native `read_skill` tool — removes SKILL.md path leak | **Security + DX** |
| [#636](https://github.com/moltis-org/moltis/pull/636) | penso | OAuth loopback redirect URI `https→http` normalization | **Spec compliance** — fixes #629 |
| [#634](https://github.com/moltis-org/moltis/pull/634) | penso | Suppress auto-continue after substantive answers | **UX quality** — fixes #628 |
| [#635](https://github.com/moltis-org/moltis/pull/635) | penso | `dcg-guard` PATH augmentation + loud missing-dcg warning | **Security/ops** — fixes #626 |
| [#627](https://github.com/moltis-org/moltis/pull/627) | fortuna | Installation command switched to curl | **DX** |

**Key Advancements:**
- **Channel parity**: Discord now matches other platforms for rich media
- **Hook system integrity**: Three PRs fixed documented-but-broken hook behaviors
- **Production hardening**: OAuth, sandbox guards, and voice pipelines all tightened

---

## 4. Community Hot Topics

**Notable finding: Zero comments across all issues and PRs.** This indicates either:
- Extremely rapid maintainer response (same-day merge without discussion)
- Private coordination channels (Discord/Slack)
- Low community size despite high code velocity

### Most Significant Open Items (by technical weight)

| Item | Type | Significance |
|:---|:---|:---|
| [#653](https://github.com/moltis-org/moltis/pull/653) | OPEN PR | **Deterministic compaction** — replaces LLM summarization, major cost/performance win |
| [#652](https://github.com/moltis-org/moltis/pull/652) | OPEN PR | Summary budget discipline — prevents context overflow |
| [#645](https://github.com/moltis-org/moltis/pull/645) | OPEN PR | Channel provenance in hooks — closes #640 |

**Underlying need:** The compaction PRs (#652, #653) reveal user pain around **cost control and predictability** — moving from LLM-based to deterministic operations suggests production scaling concerns.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---|:---|:---|:---|:---|
| 🔴 **High** | [#632](https://github.com/moltis-org/moltis/issues/632) | OPEN | [#648](https://github.com/moltis-org/moltis/pull/648) partially | Empty voice transcription → placeholder → empty TTS reply loop |
| 🟡 **Medium** | [#646](https://github.com/moltis-org/moltis/issues/646) | OPEN | None | Remote deployment login failure — **needs triage** |
| 🟡 **Medium** | [#637](https://github.com/moltis-org/moltis/issues/637) | OPEN | [#650](https://github.com/moltis-org/moltis/pull/650) partially | Z.AI models "enhanced tooling" — unclear scope |
| 🟢 **Fixed** | [#639](https://github.com/moltis-org/moltis/issues/639) | CLOSED | [#651](https://github.com/moltis-org/moltis/pull/651) | `MessageReceived` hook silently dropped actions |
| 🟢 **Fixed** | [#638](https://github.com/moltis-org/moltis/issues/638) | CLOSED | [#647](https://github.com/moltis-org/moltis/pull/647) | `ToolResultPersist` never dispatched |
| 🟢 **Fixed** | [#631](https://github.com/moltis-org/moltis/issues/631) | CLOSED | [#643](https://github.com/moltis-org/moltis/pull/643) | Whisper config ignored |
| 🟢 **Fixed** | [#629](https://github.com/moltis-org/moltis/issues/629) | CLOSED | [#636](https://github.com/moltis-org/moltis/pull/636) | MCP OAuth `https://localhost` rejected |
| 🟢 **Fixed** | [#628](https://github.com/moltis-org/moltis/issues/628) | CLOSED | [#634](https://github.com/moltis-org/moltis/pull/634) | Auto-continue erased messages |
| 🟢 **Fixed** | [#626](https://github.com/moltis-org/moltis/issues/626) | CLOSED | [#635](https://github.com/moltis-org/moltis/pull/635) | `dcg-guard` bypassed via PATH |

**Stability Assessment:** Strong. 7/9 reported bugs resolved. The two open bugs (#632 voice loop, #646 auth) plus unclear #637 represent the current risk surface.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release |
|:---|:---|:---|
| **Deterministic compaction** (zero LLM cost) | [#653](https://github.com/moltis-org/moltis/pull/653) | **High** — actively developed, 36 tests |
| **Summary budget discipline** | [#652](https://github.com/moltis-org/moltis/pull/652) | **High** — pairs with #653 |
| **Channel provenance in hooks** | [#640](https://github.com/moltis-org/moltis/issues/640) / [#645](https://github.com/moltis-org/moltis/pull/645) | **Medium-High** — PR open, closes feature gap |
| **Settings/Projects navigation** | [#644](https://github.com/moltis-org/moltis/pull/644) | **Medium** — UI polish, duplicate PR suggests iteration |

**Predicted 20260411.01 focus:** Cost optimization (compaction), hook system completeness, and UI navigation polish.

---

## 7. User Feedback Summary

### Explicit Pain Points (from issue descriptions)

| User | Pain Point | Context |
|:---|:---|:---|
| dmitriikeler | Hook system "documented but broken" | `ToolResultPersist` undispatched, `MessageReceived` read-only misclassification |
| dmitriikeler | Config schema lying to users | `whisper.model`/`language` ignored despite being in schema |
| Maelgk | OAuth spec non-compliance | `https://localhost` rejected by strict AS (Attio) |
| vvuk | Destructive auto-continue | Long answers overwritten by forced summaries |
| fortuna | Security guard bypass | `dcg-guard` no-op due to PATH issues under systemd |
| krsyoung | **Unresolved: Remote auth broken** | Production deployment blocker |

### Satisfaction Indicators
- ✅ Same-day fix turnaround for 7/7 closed issues
- ✅ Comprehensive test coverage in new PRs (36 tests for compaction)
- ⚠️ No user engagement metrics (comments, reactions) to assess sentiment

---

## 8. Backlog Watch

| Item | Age | Concern | Action Needed |
|:---|:---|:---|:---|
| [#646](https://github.com/moltis-org/moltis/issues/646) | 1 day | **Production auth failure** — only open bug with no linked PR | Triage: repro steps, deployment config, logs |
| [#637](https://github.com/moltis-org/moltis/issues/637) | 1 day | Vague title ("enhanced tooling"), no description details | Clarification: what specific Z.AI behavior is broken? |
| [#632](https://github.com/moltis-org/moltis/issues/632) | 1 day | Voice pipeline edge case — PR #648 addresses Telegram but Discord may share issue | Verify #649 covers empty transcription case |

**Maintainer Attention:** The authentication issue [#646](https://github.com/moltis-org/moltis/issues/646) is the highest-risk open item — remote deployment failures block production adoption and lack any visible investigation.

---

*Digest generated from 11 issues and 16 PRs updated 2026-04-10 to 2026-04-11.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-11

## 1. Today's Overview

CoPaw shows **high development velocity** with 50 PRs and 29 issues updated in the last 24 hours. The project is actively addressing v1.0.2 post-release stabilization, with 34 merged/closed PRs indicating strong maintainer throughput. Key focus areas include **MCP process leak fixes**, **token usage tracking**, **channel reliability** (QQ/WeChat/DingTalk), and **UI/UX improvements** for tool approval workflows. No new release was cut today, suggesting the team is accumulating fixes for a v1.0.3 patch. Community engagement remains strong with multiple first-time contributors landing PRs.

---

## 2. Releases

**No new releases** (v1.0.2 remains current).

---

## 3. Project Progress

### Merged/Closed PRs Today (34 total, key highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#3214](https://github.com/agentscope-ai/CoPaw/pull/3214) | Session-level token usage tracking | Addresses [#3093](https://github.com/agentscope-ai/CoPaw/issues/3093); enables per-agent cost analytics |
| [#3257](https://github.com/agentscope-ai/CoPaw/pull/3257) | Approve buttons for tool guard | Converts `/approve` text command to clickable UI; fixes [#2720](https://github.com/agentscope-ai/CoPaw/issues/2720) |
| [#3255](https://github.com/agentscope-ai/CoPaw/pull/3255) | Fresh execution sessions for cron jobs | Isolates scheduled runs from chat state pollution |
| [#3258](https://github.com/agentscope-ai/CoPaw/pull/3258) | `<thought>` tag parser support | Fixes [#3206](https://github.com/agentscope-ai/CoPaw/issues/3206); handles OpenAI-compatible reasoning formats |
| [#3236](https://github.com/agentscope-ai/CoPaw/pull/3236) | DingTalk SDK migration + emoji reactions | Replaces manual HTTP with official SDK; adds interactive feedback |
| [#3246](https://github.com/agentscope-ai/CoPaw/pull/3246) | QQ instant acknowledgment messages | UX improvement for long-processing QQ bot interactions |
| [#3252](https://github.com/agentscope-ai/CoPaw/pull/3252) | Truncate oversized tool results | Prevents session persistence failures with large outputs |
| [#3120](https://github.com/agentscope-ai/CoPaw/pull/3120) + [#3119](https://github.com/agentscope-ai/CoPaw/pull/3119) | WebView2 auto-install + fail-fast | Eliminates Windows desktop white-screen issues |

**Infrastructure**: [#2457](https://github.com/agentscope-ai/CoPaw/pull/2457) (backup/migration module) remains open but active—critical for data portability.

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Comments | 🔥 Analysis |
|:---|:---|:---|
| [#2868](https://github.com/agentscope-ai/CoPaw/issues/2868) — WeChat incomplete message delivery | 11 comments | **Core channel reliability**: Tool execution summaries not reaching WeChat users indicates message routing/fragmentation issues in multi-step workflows. |
| [#2720](https://github.com/agentscope-ai/CoPaw/issues/2720) — Approve as buttons | 7 comments, 2 👍 | **UX friction in tool guard**: Users find text commands unintuitive; PR [#3257](https://github.com/agentscope-ai/CoPaw/pull/3257) addresses this. |
| [#2734](https://github.com/agentscope-ai/CoPaw/issues/2734) — Linux source build errors | 5 comments | **Build system fragility**: Python 3.12 + make altinstall environments causing runtime chat errors. |
| [#3011](https://github.com/agentscope-ai/CoPaw/issues/3011) — Long tasks silently stop | 4 comments | **Critical execution reliability**: Qwen3 Coder Plus consistently halts before command execution; suggests async/await or timeout handling bugs. |
| [#3226](https://github.com/agentscope-ai/CoPaw/issues/3226) — MCP process leak (chrome-devtools-mcp, tavily-mcp) | 3 comments, 1 👍 | **Memory/Resource management**: Node.js MCP servers spawning 40+ processes, consuming GBs of RAM—production blocker. |

### Underlying Needs
- **Observable execution**: Users need visibility into why agents stop/stall
- **Robust channel adapters**: WeChat/QQ/enterprise IMs have edge cases in message chunking
- **Resource governance**: MCP server lifecycle management is immature

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#3226](https://github.com/agentscope-ai/CoPaw/issues/3226) MCP process leak — memory explosion | Open | None yet |
| 🔴 **Critical** | [#3011](https://github.com/agentscope-ai/CoPaw/issues/3011) Long tasks silently stop (Qwen3) | Open | None yet |
| 🟡 **High** | [#3136](https://github.com/agentscope-ai/CoPaw/issues/3136) QQ/WeChat `stop()` blocks event loop 8-10s | Open | None yet |
| 🟡 **High** | [#3256](https://github.com/agentscope-ai/CoPaw/issues/3256) v1.0.2 startup ~2min40s (Windows) | Open | None yet |
| 🟡 **High** | [#3183](https://github.com/agentscope-ai/CoPaw/issues/3183) `execute_shell_command` fails on Ubuntu (ls not found) | Open | None yet |
| 🟡 **High** | [#3254](https://github.com/agentscope-ai/CoPaw/issues/3254) Race condition: chat UUID missing in console | Open | None yet |
| 🟢 **Medium** | [#3206](https://github.com/agentscope-ai/CoPaw/issues/3206) `<thought>` tags not parsed | **Fixed** | [#3258](https://github.com/agentscope-ai/CoPaw/pull/3258) |
| 🟢 **Medium** | [#3176](https://github.com/agentscope-ai/CoPaw/issues/3176) Scheduled task creation fails | Open | None yet |
| 🟢 **Medium** | [#3211](https://github.com/agentscope-ai/CoPaw/issues/3211) llama.cpp fails in Docker (GLIBC mismatch) | Open | None yet |

**Regression Pattern**: v1.0.2 introduced multiple stability issues (slow startup, custom agent loss [#3190](https://github.com/agentscope-ai/CoPaw/issues/3190), LM Studio LAN config [#3222](https://github.com/agentscope-ai/CoPaw/issues/3222)) — patch release needed.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Agent Teams / Natural-language multi-agent orchestration** | [#3224](https://github.com/agentscope-ai/CoPaw/issues/3224) | Medium | Large design doc; depends on PR [#3215](https://github.com/agentscope-ai/CoPaw/pull/3215) (multi-agent refactor) |
| **Conversation archiving** | [#3187](https://github.com/agentscope-ai/CoPaw/issues/3187) | High | Simple UX win; fits current console work |
| **Feishu CardKit streaming** | [#3001](https://github.com/agentscope-ai/CoPaw/issues/3001) | Medium | Pattern exists (DingTalk PR [#1118](https://github.com/agentscope-ai/CoPaw/pull/1118)); needs Feishu-specific implementation |
| **Skill download/export** | [#3241](https://github.com/agentscope-ai/CoPaw/issues/3241) | High | Complements backup PR [#2457](https://github.com/agentscope-ai/CoPaw/pull/2457); user data ownership theme |
| **Hashline file editing** | [#3234](https://github.com/agentscope-ai/CoPaw/issues/3234) | Medium | Addresses Qwen editing reliability; niche but actionable |
| **Enforced workflow rules** | [#3233](https://github.com/agentscope-ai/CoPaw/issues/3233) | Low-Medium | Requires SOUL.md parser + execution engine changes; architectural |
| **Per-agent token statistics** | [#3093](https://github.com/agentscope-ai/CoPaw/issues/3093) | **In Progress** | PR [#3214](https://github.com/agentscope-ai/CoPaw/pull/3214) merged |

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Silent failures** | [#3011](https://github.com/agentscope-ai/CoPaw/issues/3011) (task stops), [#2707](https://github.com/agentscope-ai/CoPaw/issues/2707) (chat interrupts) | High — breaks trust |
| **v1.0.2 upgrade fragility** | [#3190](https://github.com/agentscope-ai/CoPaw/issues/3190) (custom agents lost), [#3222](https://github.com/agentscope-ai/CoPaw/issues/3222) (LM Studio broken), [#3256](https://github.com/agentscope-ai/CoPaw/issues/3256) (slow startup) | High — migration friction |
| **Channel-specific quirks** | WeChat message truncation [#2868](https://github.com/agentscope-ai/CoPaw/issues/2868), QQ buffering [#3242](https://github.com/agentscope-ai/CoPaw/pull/3242) | Medium — platform parity gaps |
| **Resource leaks** | MCP processes [#3226](https://github.com/agentscope-ai/CoPaw/issues/3226) | Critical — production risk |
| **Enterprise IM gaps** | Feishu streaming [#3001](https://github.com/agentscope-ai/CoPaw/issues/3001), DingTalk SDK migration in progress | Medium — competitive feature |

### Positive Signals
- Strong appreciation for **multi-agent isolation** (work/life separation)
- Active skill-sharing community (requests for download/export prove engagement)
- First-time contributor success (multiple "good first issue" PRs merged)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#2457](https://github.com/agentscope-ai/CoPaw/pull/2457) Backup/migration module | 14 days | **Data loss prevention** | Final review + merge before next release |
| [#3011](https://github.com/agentscope-ai/CoPaw/issues/3011) Silent task stops | 4 days | **Execution reliability** | Repro + root cause analysis; may need async debugging |
| [#3226](https://github.com/agentscope-ai/CoPaw/issues/3226) MCP process leak | 1 day | **Production stability** | MCP server lifecycle audit; consider process pools |
| [#3215](https://github.com/agentscope-ai/CoPaw/pull/3215) Multi-agent refactor | 1 day | **Architecture** | Review scope vs. [#3224](https://github.com/agentscope-ai/CoPaw/issues/3224) roadmap alignment |
| [#3136](https://github.com/agentscope-ai/CoPaw/issues/3136) Event loop blocking | 2 days | **Performance** | Async refactor of channel `stop()` methods |

---

**Project Health**: 🟡 **Active but stabilizing** — High throughput with v1.0.2 teething issues. Priority should be MCP leak fixes, execution reliability, and backup module merge for v1.0.3.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*