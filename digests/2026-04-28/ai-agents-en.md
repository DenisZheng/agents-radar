# OpenClaw Ecosystem Digest 2026-04-28

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-28 00:30 UTC

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

### **OpenClaw Project Digest – 2026-04-28**

---

#### **1. Today's Overview**  
OpenClaw shows high community activity with 500 updated issues and 500 PRs in the last 24 hours, indicating sustained development momentum. The project released version **v2026.4.25**, featuring a major TTS upgrade with expanded provider support (Azure Speech, Xiaomi, Inworld, Volcengine, ElevenLabs v3). Despite robust feature delivery, multiple regressions and stability issues—particularly around gateway crashes, Windows UI rendering, and model-specific behaviors—are surfacing post-update, suggesting rapid iteration outpacing regression testing.

---

#### **2. Releases**  
**v2026.4.25** introduces significant enhancements to voice synthesis:
- Full TTS overhaul with `/tts latest`, chat-scoped auto-TTS controls, persona-based settings, and per-agent/account overrides.
- New provider integrations: Azure Speech, Xiaomi, Local CLI, Inworld, Volcengine, and ElevenLabs v3.
- No breaking changes reported; all updates appear additive. Migration is seamless for existing users.

---

#### **3. Project Progress**  
Key merged/fixed PRs today include:
- **#73100**: Bounded fallback vector scoring in memory-core prevents unbounded resource consumption during embedding searches.
- **#73098**: Safe cache trace config patches prevent accidental exposure of sensitive payloads.
- **#73093**: Improved error visibility for failed plugin installs via npm diagnostics.
- **#73038**: Added DeepInfra as a bundled provider plugin with dynamic model discovery.
- **#72287**: Generic plugin host-hook contracts enable extensible third-party integrations without core modifications.

These advances reflect focus on observability, security, and ecosystem extensibility.

---

#### **4. Community Hot Topics**  
Top-discussed items highlight urgent needs for reliability and interoperability:

- **#67035 (Windows Chat UI Regression)**: Users report input swallowing and invisible streamed replies after 2026.4.14 update—critical UX blocker for desktop/webchat. *(13 comments, 👍0)*  
  [openclaw/openclaw Issue #67035](https://github.com/openclaw/openclaw/issues/67035)

- **#72846 (Gateway Sidecar Startup Blocked)**: Recurrence of a prior fix (#63450) causes ~3-minute delays post-upgrade to 2026.4.25. *(10 comments, 👍3)*  
  [openclaw/openclaw Issue #72846](https://github.com/openclaw/openclaw/issues/72846)

- **#41304 (Agent Tool Hallucination)**: Agents falsely claim successful tool execution (e.g., email sends) without actual delivery. *(10 comments, 👍0)*  
  [openclaw/openclaw Issue #41304](https://github.com/openclaw/openclaw/issues/41304)

Underlying theme: **Trust & Observability**—users demand verifiable action outcomes and transparent system behavior.

---

#### **5. Bugs & Stability**  
High-severity regressions dominate recent reports:

| Issue | Severity | Description | Fix Status |
|-------|----------|-------------|------------|
| **#72699** | Critical | Gateway crash-loop on Linux after 2026.4.24 update (unhandled_rejection) | Closed today |
| **#71761** | High | All messages injected twice → double cost + duplicate replies | Closed today |
| **#72386** | Medium | Runtime context echoed verbatim into visible replies (Telegram) | Closed today |
| **#70857** | High | Windows startup latency due to session lock contention | Open |
| **#61701** | High | Gateway 100% CPU spike after v2026.4.5 upgrade | Open |

Fixes exist for critical cases (#72699, #71761), but recurring gateway instability suggests architectural fragility under load or configuration drift.

---

#### **6. Feature Requests & Roadmap Signals**  
User proposals point toward next-gen agent capabilities:

- **Per-Agent Cost Budgeting** (#42475): Enterprise operators seek spending controls at gateway level.
- **A2A Protocol Support** (#6842): Interoperability with external agent ecosystems gains traction.
- **MathJax/LaTeX Rendering** (#42840): Scientific/technical use cases demand rich content display.
- **Private Network Fetching** (#39604): Internal toolchains require outbound reachability beyond public internet.

Signals suggest upcoming emphasis on **governance**, **multi-modal communication**, and **cross-agent collaboration**.

---

#### **7. User Feedback Summary**  
Pain Points:
- **Post-Update Instability**: Multiple users report catastrophic failures after minor version bumps (e.g., WhatsApp/Telegram channels "gone").
- **Model-Specific Quirks**: Gemini reasoning leaks, Groq `reasoning_effort` validation errors, Opus loops indicate inconsistent vendor API adherence.
- **UI Fragility**: Windows chat suffers from flicker/dropout; macOS secret resolution breaks LaunchAgents.

Positive Signals:
- Praise for TTS expansion and SecretRef abstraction.
- Appreciation for maintainer responsiveness on crash fixes (e.g., #72699 resolved within 24h).

Overall sentiment: **Cautiously optimistic**—core value delivered, but polish needed.

---

#### **8. Backlog Watch**  
Long-standing unresolved items requiring attention:

- **#29387**: Bootstrap files ignored when using custom `agentDir`—blocks per-agent customization workflows since Feb 2026.  
  [openclaw/openclaw Issue #29387](https://github.com/openclaw/openclaw/issues/29387)

- **#41494**: Gemini reasoning leakage into user-facing output—originally reported Mar 2026, still open.  
  [openclaw/openclaw Issue #41494](https://github.com/openclaw/openclaw/issues/41494)

- **#28106**: RFC for Agent-to-Agent delegation protocol—conceptual but unaddressed for months.  
  [openclaw/openclaw Issue #28106](https://github.com/openclaw/openclaw/issues/28106)

Maintainers should prioritize these to reduce technical debt and signal roadmap clarity.

--- 

*Data snapshot reflects GitHub activity up to 2026-04-28 00:00 UTC.*

---

## Cross-Ecosystem Comparison

### **Cross-Project Comparison Report: Personal AI Agent & Assistant Open-Source Ecosystem (24–28 Apr 2026)**

---

#### **1. Ecosystem Overview**  
The personal AI agent open-source ecosystem is highly dynamic, with multiple projects vying for dominance in agent orchestration, multi-channel integration, and extensibility. OpenClaw leads as the core reference implementation, while NanoBot and Hermes Agent emphasize lightweight deployment and developer tooling. Projects like PicoClaw, NanoClaw, and ZeroClaw target niche verticals (mobile, embedded, enterprise), reflecting a maturing market segmentation. A shared focus on provider abstraction, session management, and observability indicates convergence around practical agent infrastructure needs.

---

#### **2. Activity Comparison**  

| Project        | Issues (24h) | PRs (24h) | Release Status       | Health Score* |
|----------------|--------------|-----------|----------------------|---------------|
| **OpenClaw**   | 500          | 500       | v2026.4.25 (stable)  | High (↓ stability) |
| **NanoBot**    | 17           | 37        | No release           | Medium-High   |
| **Hermes**     | 50           | 50        | Last: v0.11.0 (23 Apr)| Medium        |
| **PicoClaw**   | 109          | 120       | Nightly v0.2.7       | Medium        |
| **NanoClaw**   | 20           | 24        | No release           | Medium        |
| **IronClaw**   | 10           | 33        | No release           | Medium-Low (↑ bugs) |
| **LobsterAI**  | 7            | 38        | v2026.4.25 (25 Apr)  | Medium        |
| **CoPaw**      | 50           | 43        | v1.1.4.post3 (27 Apr)| Medium-High   |
| **ZeroClaw**   | 46           | 50        | No release           | Medium-High   |
| Others         | ≤5           | ≤10       | Stale                | Low           |

\*Health Score based on bug severity, fix velocity, release cadence, and community engagement.

---

#### **3. OpenClaw's Position**  
OpenClaw holds the dominant position as the **core reference implementation**, evidenced by its massive issue/PR volume, broad provider support (Azure, ElevenLabs, Volcengine), and adoption as a dependency by other projects (e.g., LobsterAI, CoPaw). Its technical approach emphasizes **gateway-centric architecture**, extensible plugin contracts, and per-agent configuration overrides—differentiating it from NanoBot’s minimalist design or Hermes’ CLI/TUI focus. Community size dwarfs peers: OpenClaw’s 500 daily updates reflect an order of magnitude more engagement than Hermes or IronClaw. However, this scale correlates with higher regression risk, as seen in Windows UI and gateway crash issues post-v2026.4.25.

---

#### **4. Shared Technical Focus Areas**  
Multiple projects converge on these emerging requirements:  
- **Provider Extensibility**: All major projects (OpenClaw, NanoBot, Hermes, PicoClaw, ZeroClaw) are expanding beyond OpenAI to support Hugging Face, DeepSeek, Ollama, and local inference endpoints (#3490, #6842, #12700).  
- **Session & Memory Management**: Session isolation (#3459), compaction (#2333), and cross-session visibility (#2067) are critical pain points across NanoClaw, Hermes, and CoPaw.  
- **Observability & Cost Tracking**: Real-time token/cost dashboards (#3366, #6001) and OTel GenAI tracing (#1731) appear in OpenClaw, ZeroClaw, and PicoClaw.  
- **Channel Adapter Reliability**: WhatsApp, Telegram, Feishu, and Matrix integrations face auth/header bugs (#2578, #16744) and media handling quirks (#3488), demanding standardized adapter contracts.

---

#### **5. Differentiation Analysis**  

| Project      | Feature Focus                     | Target Users               | Architecture Traits                  |
|--------------|-----------------------------------|----------------------------|--------------------------------------|
| **OpenClaw** | Multi-provider TTS, gateway ops   | Enterprise/dev teams       | Gateway-first, plugin-heavy        |
| **NanoBot**  | Lightweight LLM orchestration     | Devs building chatbots     | Minimalist, npm-native              |
| **Hermes**   | CLI/TUI UX, delegation            | Power users, researchers   | TUI-centric, Docker-friendly        |
| **PicoClaw** | Mobile/i18n, cron tools           | Embedded/IoT use cases     | Android-first, cron-task optimized  |
| **ZeroClaw** | Config clarity, cost accounting   | Production operators       | Rust-based, schema-driven           |
| **CoPaw**    | Cross-platform channels, MCP      | Multi-channel enterprises  | Async session model, WASM-ready     |

Notably, OpenClaw and ZeroClaw lead in **production-grade governance** (budgeting, cost APIs, config migrations), while NanoBot and Hermes prioritize **developer ergonomics**.

---

#### **6. Community Momentum & Maturity**  

- **Rapid Iteration Tier**: OpenClaw, PicoClaw, ZeroClaw show explosive activity but face instability trade-offs (regressions, auth bugs).  
- **Stabilizing Tier**: NanoBot, Hermes, CoPaw balance velocity with reliability—Hermes excels in UX polish, NanoBot in provider resilience.  
- **Niche/Small Projects**: IronClaw and NanoClaw suffer from canary failures and architectural debt; LobsterAI shows strong maintenance but UX gaps limit appeal.  
- **Dormant**: TinyClaw, ZeptoClaw, Moltis, NullClaw have negligible activity—likely abandoned or deprioritized.

Maturity correlates with **release discipline**: Only OpenClaw, LobsterAI, and CoPaw maintain regular stable releases; others rely on nightlies or irregular patches.

---

#### **7. Trend Signals**  
Industry trends emerging from community feedback:  
- **Multi-Modal Expansion**: TTS/ASR demand spikes (OpenClaw #67035, PicoClaw #1648) signal shift beyond text-only agents.  
- **Enterprise Observability**: Cost tracking, token visibility, and audit trails (#3366, #6001) are becoming baseline expectations.  
- **Interoperability Push**: A2A protocol support (#6842, #28106) and ACP reactivation (#6167) indicate demand for cross-agent ecosystems.  
- **Security & Privacy**: E2EE recovery (#4878), prompt injection audits (#6132), and secure config handling (#6149) reflect heightened production concerns.  
- **Local/Edge Deployment**: Hugging Face, LM Studio, and vLLM integrations (#3490, #28) highlight movement toward self-hosted inference.

For AI agent developers, **provider abstraction**, **session state durability**, and **observability hooks** represent high-leverage areas for differentiation. Projects ignoring these risks falling behind in enterprise adoption.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – April 28, 2026**

---

### 1. **Today's Overview**
NanoBot remains highly active with strong community engagement: 17 issues and 37 pull requests updated in the past 24 hours. The project shows robust development velocity, particularly around provider extensibility (e.g., Hugging Face support), channel integrations (Telegram, SimpleX), and session history management. No new releases were published today, but multiple bug fixes and feature enhancements merged suggest imminent stabilization for a minor release.

---

### 2. **Releases**
No new releases deployed since last update.

---

### 3. **Project Progress**
**Key Merged Fixes & Features:**
- **Provider Timeouts**: Fixed critical timeout regression in OpenAI Codex provider (#3426) via PR #3479, restoring streaming progress deltas.
- **DeepSeek Compatibility**: Normalized non-string message content handling (#3458) and resolved API errors for DeepSeek-v4 models (#3469).
- **Session History Isolation**: Hardened replay/file-cap invariants to prevent cross-session contamination (#3459).
- **Discord Threads**: Fully enabled thread support with proper allowlist enforcement (#3397).
- **Heartbeat Reliability**: Prevented internal reasoning leaks during heartbeat delivery (#3389).

These changes improve stability, especially around long-running tasks and multi-provider resilience.

---

### 4. **Community Hot Topics**
- **[#3376](https://github.com/HKUDS/nanobot/issues/3376)** (11 comments): *Multi-Provider Failover* — Users demand automatic fallback between providers on model/provider failure. High-priority for reliability.
- **[#3292](https://github.com/HKUDS/nanobot/issues/3292)** (3 comments): *Session-Level Focus Tool* — Request for persistent task anchoring across interruptions mirrors real-world workflow needs; signals growing interest in advanced agentic memory.
- **[#3488](https://github.com/HKUDS/nanobot/issues/3488)** (1 comment): *Telegram Attachment MIME Type Bug* — Rapidly addressed via PR #3489; illustrates tight feedback loop on channel-specific UX.

Underlying need: **Enhanced agent responsiveness and context persistence** remain top concerns as users scale complex, interrupted workflows.

---

### 5. **Bugs & Stability**
| Severity | Issue | Description | Status |
|--------|-------|-------------|--------|
| High | [#3474](https://github.com/HKUDS/nanobot/issues/3474) | DeepSeek-v4-pro returns empty responses | Closed (likely fixed by PR #3458) |
| Medium | [#3435](https://github.com/HKUDS/nanobot/issues/3435) | WeCom media upload failures | Closed |
| Medium | [#3488](https://github.com/HKUDS/nanobot/issues/3488) | Telegram sends `application.octet-stream` | Fixed in PR #3489 |
| Low | [#3473](https://github.com/HKUDS/nanobot/issues/3473) | WebUI remote access WebSocket binding issue | Open |

All medium/high-severity bugs have corresponding fix PRs merged or in review. Project demonstrates effective triage.

---

### 6. **Feature Requests & Roadmap Signals**
- **Configurable Provider Parameters** (#3491): Enables custom `extra_body` for local inference servers (vLLM, Ollama), indicating shift toward self-hosted AI support.
- **Hugging Face Inference Provider** (#3490): Official integration signals expansion beyond OpenAI-compatible endpoints.
- **Session-Scoped History** (#3481): Addresses critical session isolation flaw; likely prioritized post-v0.1.5.
- **LongTaskTool** (#3460): Multi-step subagent orchestration suggests roadmap toward compositional agents.

Predicted next-version focus: **Provider flexibility, session management, and long-horizon task decomposition**.

---

### 7. **User Feedback Summary**
- **Pain Points**: 
  - Agent loops blocking user input until completion (#2915, #2133)
  - Lack of session-aware automation (#3484)
  - Cross-platform attachment handling inconsistencies
- **Satisfaction Indicators**: 
  - Positive reactions (+9) on architectural proposal (#1181) show appreciation for thoughtful design.
  - Rapid resolution of DeepSeek issues reflects responsive maintainer team.
- **Use Cases**: Slack/Discord bots for async workflows, local LLM deployments, multi-channel enterprise chatops.

Overall sentiment: **High engagement with constructive critique**, especially around agent autonomy and configurability.

---

### 8. **Backlog Watch**
- **[#3376](https://github.com/HKUDS/nanobot/issues/3376)**: No assigned owner; requires architecture decision on failover strategy.
- **[#3292](https://github.com/HKUDS/nanobot/issues/3292)**: Rich concept but lacks implementation plan; may benefit from RFC process.
- **[#3484](https://github.com/HKUDS/nanobot/issues/3484)**: Highlights gap in HEARTBEAT.md functionality; maintainer should clarify intended use case.

Maintainers should prioritize assigning owners to these high-impact items ahead of next milestone.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest – 2026-04-28**

---

### **Today's Overview**  
Hermes Agent remains highly active, with 50 issues and 50 PRs updated in the last 24 hours, indicating sustained development momentum. Despite no new releases, rapid iteration continues across gateway, CLI, memory, and multi-platform adapter subsystems. The project shows strong community engagement, particularly around platform integrations (Feishu, Slack, Weixin), memory scaling, and TUI/CLI UX improvements.

---

### **Releases**  
No new releases were published today. The last official release appears to be v0.11.0 (2026.4.23), as referenced in several bug reports.

---

### **Project Progress**  
Seven PRs were merged or closed today, reflecting steady progress on stability and UX:  
- **PR #16732**: Closed — Fixed mouse + keyboard text selection in TUI composer ([link](https://github.com/NousResearch/hermes-agent/pull/16732))  
- **PR #16740**: Closed — Addressed copilot follow-ups for PR #16732, refining cursor behavior ([link](https://github.com/NousResearch/hermes-agent/pull/16740))  
- **PR #16690**: Open → Closed — Materialized bundled TUI Ink package in Docker builds ([link](https://github.com/NousResearch/hermes-agent/pull/16690))  
- **PR #16734**: Open → Closed — Added xAI to preferred dev models and refreshed stale curated IDs ([link](https://github.com/NousResearch/hermes-agent/pull/16734))  
- **PR #16741**: Open — Ported cost accounting fix from Kilo to include subagent costs in parent session totals ([link](https://github.com/NousResearch/hermes-agent/pull/16741))  
- **PR #16721**: Open — Restricted auto-appended media tags to producer tools only ([link](https://github.com/NousResearch/hermes-agent/pull/16721))  
- **PR #16287**: Open — Added adaptive immunity review addendum for security skill detection ([link](https://github.com/NousResearch/hermes-agent/pull/16287))

Notably, core TUI input handling has been stabilized, and billing transparency for delegated tasks is being improved.

---

### **Community Hot Topics**  
Top-engagement items reflect demand for better cross-platform support and developer tooling:  
- **Issue #7734** (11 comments): Feishu plugin bugs — authorization card errors and incorrect topic threading ([link](https://github.com/NousResearch/hermes-agent/issues/7734))  
- **Issue #16102** (6 comments): RFC for Kanban — durable multi-profile collaboration board ([link](https://github.com/NousResearch/hermes-agent/issues/16102))  
- **Issue #8945** (+1 👍): Web-based Control UI/Dashboard for gateway requested; user notes OpenClaw already offers this ([link](https://github.com/NousResearch/hermes-agent/issues/8945))  

These highlight a clear need for enhanced observability, workflow orchestration, and parity with competing agents like OpenClaw.

---

### **Bugs & Stability**  
New high-severity bugs reported today include:  
1. **#16744** (P2): Slack bot setup fails silently despite valid tokens — likely configuration regression ([link](https://github.com/NousResearch/hermes-agent/issues/16744))  
2. **#16743** (P2): Atomic file writes break symlinks in `HERMES_HOME`, breaking managed profile setups ([link](https://github.com/NousResearch/hermes-agent/issues/16743))  
3. **#16746** (P3): Installer’s `/dev/tty` check unreliable in Docker contexts ([link](https://github.com/NousResearch/hermes-agent/issues/16746))  

All three have no associated fix PRs yet. The Slack regression (#16744) mirrors earlier config parsing issues and may relate to recent gateway refactoring.

---

### **Feature Requests & Roadmap Signals**  
Emerging themes suggest upcoming priorities:  
- **Memory auto-scaling** (#5320): Users want dynamic limits based on usage pressure  
- **Tailscale/Funnel integration** (#8951): Remote gateway access via secure mesh networking  
- **Infinite context buffer delegation** (#16742): Offload bulk memory to large-context subagents  
- **Support for Gemini Flex tier** (#12700): Cost optimization for cron/batch workloads  

The Kanban RFC (#16102) and missing messaging channels (#8950) point toward stronger multi-user and multi-channel collaboration features.

---

### **User Feedback Summary**  
Users report frustration with:  
- **Platform-specific limitations**: Weixin blocks international accounts; MiniMax vision fails silently  
- **Configuration fragility**: Custom provider URLs ignored; atomic writes break symlinks  
- **Missing observability**: No built-in web dashboard for gateway health/sessions  

Positive signals include appreciation for the Chinese WebUI localization (#8883, +6 👍) and interest in advanced delegation patterns. However, production deployments suffer from opaque failures in Slack/Feishu adapters.

---

### **Backlog Watch**  
Key long-standing items requiring maintainer attention:  
- **#8853** (StepFun provider support): Still open since April 13; spans multiple subsystems and lacks progress  
- **#8847** (Feishu approval cards): Parent of #8896; unresolved lifecycle management needs isolation  
- **#8873** (Hindsight NixOS install issue): Blocks non-container users from using hindsight memory  

These represent architectural gaps in provider extensibility and packaging compatibility that could hinder adoption if unaddressed.

--- 

*Data snapshot taken 2026-04-28. All links point to GitHub Issues/PRs in [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent).*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – April 28, 2026**

---

### 1. **Today’s Overview**  
The PicoClaw project remains highly active with 109 new issues and 120 pull requests updated in the last 24 hours. Development velocity is strong, featuring rapid iteration on provider integrations, agent session management, and multi-channel support. A new nightly build (v0.2.7-nightly.20260427.39dec354) has been released, indicating ongoing stabilization efforts ahead of a potential stable release cycle.

---

### 2. **Releases**  
- **Nightly Build**: `nightly` tag updated to **v0.2.7-nightly.20260427.39dec354**. This automated build includes recent changes from `main` but carries a warning about instability. Full changelog available [here](https://github.com/sipeed/picoclaw/compare/v0.2.7...main). No breaking changes noted; this remains pre-release software.

---

### 3. **Project Progress**  
Among today’s merged/closed PRs (#57), several key improvements stand out:
- **Cron task execution reliability** fixed via input validation and error logging enhancements (#2520).
- **Session restoration safety** improved by dropping stale tool-call tails to prevent stuck states (#2364).
- **WhatsApp group message filtering** added via `GroupTrigger` field to block unwanted traffic (#2329).
- **Portuguese (BR) localization** completed, expanding internationalization reach (#2330).
- **MCP tool schema sanitization** for Gemini compatibility resolved, preventing HTTP 400 crashes (#2681).

These reflect a focus on robustness, observability, and user-facing polish.

---

### 4. **Community Hot Topics**  
Top community discussions center around **audio capabilities**, **provider configuration**, and **agent feedback mechanisms**:

- **[#1648] Feature: Adding TTS and ASR Support to PicoClaw** ([link](https://github.com/sipeed/picoclaw/issues/1648))  
  *23 comments*. Users urgently request voice interaction features, noting an existing PR (#1642) awaits gateway integration. Underlying need: richer multimodal agent interfaces.

- **[#2578] openai_compat provider never sends Authorization header in v0.2.6** ([link](https://github.com/sipeed/picoclaw/issues/2578))  
  *12 comments*. Critical auth bug where API keys are silently dropped—impacting all OpenAI-compatible providers. High-priority regression affecting production deployments.

- **[#571] Add progress feedback during tool execution in chat** ([link](https://github.com/sipeed/picoclaw/issues/571))  
  *7 comments*. User frustration over silent long-running operations drives demand for real-time status updates during agent tool use.

These threads signal strong interest in extending PicoClaw beyond text-only workflows.

---

### 5. **Bugs & Stability**  
Newly surfaced bugs require immediate attention:

| Issue | Severity | Description | Status |
|-------|----------|-------------|--------|
| [#2578](https://github.com/sipeed/picoclaw/issues/2578) | High | Auth headers missing in `openai_compat` provider | Active |
| [#2368](https://github.com/sipeed/picoclaw/issues/2368) | Medium | Android app shows "not configured" despite valid model setup | Active |
| [#2046](https://github.com/sipeed/picoclaw/issues/2046) | Medium | LongCat API fails to invoke tools correctly | Active |

A fix PR (#2372) already addresses the auth issue (#2578), showing responsive maintainer engagement.

---

### 6. **Feature Requests & Roadmap Signals**  
Emerging priorities suggest upcoming development directions:
- **Streaming UI** (PR #2587): Web chat now supports end-to-end streaming—likely heading into next milestone.
- **Model rotation/fallback** (PR #2603): FreeRide tool automates OpenRouter model switching, signaling investment in resilient inference.
- **OTel GenAI observability** (Issue #1731): Enterprise-grade tracing requested, aligning with industry standards.
- **Mattermost channel support** (Issue #1587): Community-driven push for team collaboration platforms.

Maintainers appear receptive; multiple feature PRs are under review.

---

### 7. **User Feedback Summary**  
Users express frustration with:
- **Silent failures** in cron jobs and Docker deployments (e.g., [#2236], [#1708]).
- **Poor visibility** during agent tool execution—many request progress indicators.
- **Authentication fragility** across providers, especially OpenAI-compat layers.

Positive signals include appreciation for **session compaction** (#2333), **i18n expansion**, and **security hardening** (#2327). Mobile (Android) users report configuration confusion, suggesting UX gaps in model provisioning flows.

---

### 8. **Backlog Watch**  
Several long-standing items risk stagnation without maintainer intervention:

- **[#28] LM Studio Easy Connect** ([link](https://github.com/sipeed/picoclaw/issues/28)): 16 comments over 2+ months; no progress despite clear utility for local LLM users.
- **[#1648] TTS/ASR Integration** ([link](https://github.com/sipeed/picoclaw/issues/1648)): Over 3 months old; associated PR exists but blocked on architectural decisions.
- **[#618] Self-upgrade Support** ([link](https://github.com/sipeed/picoclaw/issues/618)): Critical for maintenance automation; still lacks implementation plan.

These represent strategic opportunities to enhance user retention and reduce support burden.

--- 

*Data snapshot as of 2026-04-28. All links point to GitHub.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest — April 28, 2026**

---

### **1. Today's Overview**  
NanoClaw shows strong development momentum with 44 tracked changes (20 issues, 24 PRs) in the last 24 hours. The project is actively addressing post-v2 migration bugs, platform adapter edge cases, and infrastructure hardening for containerized deployments. No new releases were published today, but multiple fixes and enhancements are converging toward a stabilization milestone.

---

### **2. Releases**  
*No new releases.*

---

### **3. Project Progress**  
Today’s merged/closed PRs reflect critical maintenance and architectural polish:  
- **[PR #1326](https://github.com/qwibitai/nanoclaw/pull/1326)**: Closed — Added channel-agnostic voice transcription support via `whisper.cpp` or OpenAI API.  
- **[PR #987](https://github.com/qwibitai/nanoclaw/pull/987)**: Closed — Implemented session size rotation and pre-death memory flush to prevent context loss beyond 55MB transcripts.  
- **[PR #2049](https://github.com/qwibitai/nanoclaw/pull/2049)**: Closed — Introduced Telegram channel adapter with pairing flow and markdown sanitization.  
- **[PR #1997](https://github.com/qwibitai/nanoclaw/pull/1997)**: Closed — Fixed SQLite datetime parsing in host sweep to treat values as UTC, resolving fresh-container timeouts on non-UTC hosts.  
- **[PR #1912](https://github.com/qwibitai/nanoclaw/pull/1912)**: Closed — Improved fallback parser error handling for empty container stdout.  
- **[PR #1913](https://github.com/qwibitai/nanoclaw/pull/1913)**: Closed — Updated `@Andy` trigger references when assistant name changes dynamically.

These merges advance reliability, multi-platform support, and user-facing consistency ahead of broader v2 rollout.

---

### **4. Community Hot Topics**  
The most discussed items center on **scheduled task isolation**, **messaging routing**, and **cross-platform compatibility**:  
- **[Issue #2067](https://github.com/qwibitai/nanoclaw/issues/2067)**: Highlights that scheduled tasks are session-bound in v2, making global tools like `list_tasks` blind to tasks across sessions. This reveals a core architectural gap in multi-threaded deployment scenarios.  
- **[PR #2063](https://github.com/qwibitai/nanoclaw/pull/2063)**: Proposes capping agent-to-agent message volume to prevent self-loops and politeness loops—a direct response to production instability from unbounded LLM-driven routing.  
- **[Issue #2047](https://github.com/qwibitai/nanoclaw/issues/2047)**: Exposes attachment visibility loss after migration due to unmounted `data/attachments/`, now partially addressed by mounting `/workspace/attachments`.  

Underlying need: **Robust, observable, and safe multi-instance coordination** in distributed agent environments.

---

### **5. Bugs & Stability**  
Top-reported regressions (ranked by severity):  
1. **[Issue #2048](https://github.com/qwibitai/nanoclaw/issues/2048)**: *High* — `install_packages` approval triggers infinite A2A self-routing loop, blocking Telegram delivery entirely. User confirmed fix; likely imminent PR.  
2. **[Issue #2051](https://github.com/qwibitai/nanoclaw/issues/2051)**: *Medium* — `add_mcp_server` writes `args` as string instead of array, breaking container startup. Fixable via type enforcement in `container.json` serialization.  
3. **[Issue #2046](https://github.com/qwibitai/nanoclaw/issues/2046)**: *Medium* — OneCLI rejects agent IDs with underscores (e.g., `ag_f835cf929923`) due to hyphen-only validation. Requires `.replace(/_/g, '-')` in `container-runner.ts`.  
4. **[Issue #2042](https://github.com/qwibitai/nanoclaw/issues/2042)**: *Medium* — `add_reaction` fails silently in Telegram groups due to malformed 3-part `platformId` parsing.  

All have clear root causes and appear solvable; several fix-focused PRs already exist.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven feature signals point toward **openness and extensibility**:  
- **[Issue #1930](https://github.com/qwibitai/nanoclaw/issues/1930)**: Explicit request to support third-party LLMs and APIs—likely precursor to plugin architecture.  
- **[Issue #2058](https://github.com/qwibitai/nanoclaw/issues/2058)**: Google Chat missing from setup picker suggests expansion beyond mobile-first channels.  
- **[PR #2040](https://github.com/qwibitai/nanoclaw/pull/2040)**: Adds Signal outbound attachments, signaling growing emphasis on rich-media messaging.  

Prediction: Next version will prioritize **adapter ecosystem growth**, **MCP server flexibility**, and **resource governance** (evidenced by Issue #2029).

---

### **7. User Feedback Summary**  
Real-world pain points include:  
- **Migration fragility**: Attachment paths not preserved post-migration (Issue #2047).  
- **Inconsistent platform behavior**: Telegram HTML over-escaping (Issue #2043), Discord URL formatting regression (Issue #2044).  
- **Operational opacity**: Scheduled tasks invisible across sessions (Issue #2067); no garbage collection for completed one-shot tasks (Issue #2061).  

Satisfaction is mixed: users appreciate rapid bug resolution (e.g., Issue #2048 fix acknowledged), but frustration grows around **architectural transparency** in v2’s session-per-group model.

---

### **8. Backlog Watch**  
Items requiring maintainer attention:  
- **[Issue #2029](https://github.com/qwibitai/nanoclaw/issues/2029)**: *Configurable container resource limits* — High-severity stability risk (OOM killer vulnerability). No active PR; likely needs design review.  
- **[Issue #2067](https://github.com/qwibitai/nanoclaw/issues/2067)**: *Session-bound scheduled tasks* — Critical for production scalability. Though reported today, may require refactoring of scheduling DB layer.  
- **[PR #2063](https://github.com/qwibitai/nanoclaw/pull/2063)**: Agent-to-agent routing cap — Needs integration testing against real A2A workflows before merge.  

Maintainers should prioritize resource governance (#2029) and cross-session observability (#2067) to stabilize v2 deployments.

--- 

*Data snapshot: Apr 28, 2026 — All links valid at time of analysis.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – April 28, 2026**

---

### 1. Today's Overview  
The IronClaw project remains highly active with **43 total updates** in the last 24 hours (10 issues, 33 PRs), indicating strong development momentum. No new releases were published today, but multiple staging promotions and dependency updates suggest continued integration of Reborn architecture components. A cluster of live canary failures signals recent CI instability, likely tied to recent engine changes. Overall, activity reflects deep architectural work on the Reborn rewrite, with significant focus on database abstraction, authorization, and mission management systems.

---

### 2. Releases  
No new releases were made today.

---

### 3. Project Progress  
**Merged/Closed PRs (7):**
- **#2994**: Fixed `tool_info` inventory lookup for V2 engine actions (core contributor)  
- **#2997**: Added depth cap for JSON fingerprint traversal to prevent stack overflow  
- **#2998**: Staging promotion to `staging-promote/e7d9922c`  
- **#3000**: Another staging promotion to `staging-promote/91c4c7ca`  
- **#3001**: Promotion to `staging-promote/f11a49be`  
- **#3002**: Closed without merge (likely placeholder or abandoned)  
- **#2989**: Made daily thread reset timezone-aware for cron missions (critical bugfix)  

These fixes advance reliability in mission scheduling and tool discovery while maintaining CI pipeline health through automated staging promotions.

---

### 4. Community Hot Topics  
**#2987 – Track Reborn Architecture Landing Strategy** ([link](https://github.com/nearai/ironclaw/issues/2987))  
This issue has **7 comments** and is central to coordinating the multi-PR rollout of Reborn. It proposes breaking a massive stacked PR into reviewable slices—currently being executed via several carve-out PRs (#2993, #2996, #2999). Underlying need: clearer governance and risk control during major architectural migration.

**#1446 – Add Aliyun Coding Plan Support** ([link](https://github.com/nearai/ironclaw/pull/1446))  
A long-standing feature request from a user seeking broader LLM provider compatibility. Though updated recently, it lacks engagement, suggesting either low priority or unresolved integration complexity. Reflects demand for multi-cloud LLM abstraction.

---

### 5. Bugs & Stability  
**High-Severity Issues:**
1. **#2991 – V2 Approval Flow Broken**  
   *Status:* Open, reported same day  
   *Impact:* Confuses users due to unclear prompts and forced sequential execution in hosted staging.  
   *Fix Status:* No fix PR yet; urgent given impact on core agent workflows.

2. **#2976, #2977, #2975 – Live Canary Failures** ([links](https://github.com/nearai/ironclaw/issues/2976), etc.)  
   Three failed canary lanes (public-smoke, provider-matrix, private-oauth) linked to commit `7404e7d`. Indicates potential regressions in OAuth flows or provider integrations. Investigated but not yet resolved.

3. **#2887 – Google Bot Detection on CI** ([link](https://github.com/nearai/ironclaw/issues/2887))  
   Persistent auth test flakiness due to headless browser blocking. Silently swallowed exceptions mask real failures—requires defensive logging overhaul.

4. **#2982 – Routine/Mission Classification After Upgrade** ([link](https://github.com/nearai/ironclaw/issues/2982))  
   Post-upgrade chat misclassification between Routines and Missions affects production instances. No fix PR visible; impacts backward compatibility.

**Note:** The closed issue **#1945** (daily budget never reset) was fixed by **#2989**, demonstrating responsive patching for critical mission-scheduling bugs.

---

### 6. Feature Requests & Roadmap Signals  
- **Aliyun LLM Provider Integration** (#1446): Suggests expansion beyond OpenAI/Anthropic ecosystem.
- **Reborn Architecture Phasing Plan** (#2987): Implies roadmap transparency and staged delivery of foundational subsystems.
- **External Tool Registrar Plugin Seam** (#2871): Signals intent to support downstream forks—key for community extensibility.

Given current PR velocity, expect next release to include at least one more Reborn substrate (filesystem or auth) plus stabilization patches for approval flow and canary tests.

---

### 7. User Feedback Summary  
- **Pain Points:**  
  - Confusing upgrade behavior causing chat type corruption (#2982)  
  - Silent auth failures masking CI instability (#2887)  
  - Lack of clarity around model selection when using Codex (#1697)  

- **Satisfaction Indicators:**  
  - Positive reception of timezone-aware mission resets shows attention to edge cases  
  - Automated staging promotions reduce manual deployment burden  

Users increasingly seek robust cross-provider support and predictable behavior during version upgrades, especially in production environments.

---

### 8. Backlog Watch  
- **#1697 – How to Use Codex as Base Model?**  
  Created March 27; no resolution after 32 days. Highlighted in user CLI interactions but ignored. Maintainer action needed to clarify configuration or deprecate unsupported paths.

- **#2833 – Cross-Conversation Response Contamination**  
  Reported April 22; still open. Risks data integrity in multi-user deployments. Requires investigation into state isolation in reasoning tasks.

Both issues reflect gaps in documentation and testing coverage for non-core user journeys—critical to address before scaling adoption.

--- 

*Data compiled from GitHub API snapshots at 2026-04-28.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – April 28, 2026**

---

### **Today’s Overview**  
LobsterAI shows high development velocity with **38 PRs updated in the last 24 hours**, including critical stability and security fixes. The project remains actively maintained, evidenced by rapid issue triage (7 new updates) and a recent release on April 25. However, recurring user-reported bugs—especially around model integration, packaging, and UI usability—indicate ongoing challenges in reliability and UX polish.

---

### **Releases**  
**LobsterAI v2026.4.25** (released April 25, 2026)  
- **Key Fix**: Restored `DiffView` support for edit tools using `edits-array` input format ([PR #1814](https://github.com/netease-youdao/LobsterAI/pull/1814))  
- **Enhancement**: Added embedding configuration options for memory search functionality  

*No breaking changes or migration notes identified.*

---

### **Project Progress**  
**Merged/Closed PRs Today (April 27):**  
1. **Fix DeepSeek V4 custom provider model usage** (#1847) – Critical regression resolved  
2. **Increase startup timeouts & add renderer diagnostics** (#1846) – Improves Windows launch reliability  
3. **Prevent model override rewrite in cowork sessions** (#1845) – Fixes parallel session model sharing bug  
4. **Redact sensitive keys in logs** (#1844) – Security hardening for API tokens/auth headers  
5. **Persist modelOverride on new sessions** (#1843) – Ensures per-session model isolation  
6. **Fix installer exit code check on Windows** (#1841) – NSIS packaging robustness  
7. **Stamp meta on openclaw.json** (#1838) – Prevents config snapshot clobbering  
8. **Upgrade openclaw-weixin to 2.1.10 + patches** (#1834) – Dependency update with deadloop fix  

*Top active feature PR: Custom Cron scheduling for tasks (#1519) – signals roadmap focus on automation.*

---

### **Community Hot Topics**  
- **Issue #1836**: User requests complete UI redesign ("too ugly compared to competitors") → Reflects strong demand for modern aesthetics ([link](https://github.com/netease-youdao/LobsterAI/issues/1836))  
- **PR #1527**: "AI Diagnosis" button for email connection failures → High engagement on diagnostic UX improvements  
- **PR #1511**: Mandatory field indicators across 21 forms → Addresses long-standing confusion about required inputs  

*Underlying need: **User experience consistency and proactive error handling**.*

---

### **Bugs & Stability**  
| Severity | Issue | Description | Status |
|--------|-------|-------------|--------|
| High | [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) | DeepSeek V4 fails with schema rejection | Open, no fix PR yet |
| Medium | [#100](https://github.com/netease-youdao/LobsterAI/issues/100) | DMG packaging fails due to missing entry file | Open, stale since Feb |
| Low | [#17](https://github.com/netease-youdao/LobsterAI/issues/17) | Start-up dead loop with punycode deprecation | Stale, unresolved |

*Fix PRs exist for #1813-related regressions (e.g., #1847), but root cause not fully addressed.*

---

### **Feature Requests & Roadmap Signals**  
- **Custom Cron Scheduling** (#1519) – Strong signal for advanced task automation  
- **UI Modernization** (#1836) – Indicates priority shift toward visual polish  
- **AI-Powered Error Diagnosis** (#1527) – Suggests integration of LLM-assisted troubleshooting as differentiator  

*Prediction: Next version likely includes Cron tasks + enhanced error UX, possibly delaying full UI overhaul.*

---

### **User Feedback Summary**  
- **Pain Points**:  
  - Model provider compatibility issues (DeepSeek, private models)  
  - Packaging/build instability (macOS DMG errors)  
  - Poor discoverability of required form fields  
- **Satisfaction Signals**:  
  - Praise for cowork mode’s tool integration  
  - Appreciation for detailed error logging and diagnostic features  

*Overall sentiment: Functional but needs refinement in reliability and onboarding clarity.*

---

### **Backlog Watch**  
- **#73**: "Cannot use at all" – 40+ days old, 10 comments → Potential showstopper for new users  
- **#100**: Persistent DMG build failure – Impacts macOS distribution  
- **#106**: Custom model invocation failure – Blocks private deployment adoption  

*All require maintainer intervention; #73 especially risks negative first impressions.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – April 28, 2026**

---

### **1. Today's Overview**  
The Moltis project remains highly active with strong contributor momentum: 15 pull requests were merged or closed in the past 24 hours, indicating rapid feature development and maintenance. One new issue was opened, centered on a Docker build failure related to DNS resolution—a minor but notable infrastructure concern. No new releases have been published today, suggesting that recent changes are still being stabilized before a formal release cycle.

---

### **2. Releases**  
No new releases were published today. The last tagged version remains unchanged as of 2026-04-28.

---

### **3. Project Progress**  
A total of **12 PRs were merged/closed**, reflecting intense development focus:

- **Agent Architecture Simplification (#898)**: Fully implements the refactor requested in #774, making the primary agent a first-class database entity rather than a special-case identity. This unifies agent routing across all contexts where models/providers are specified.
- **Skills UI & Security Fixes (#897)**: Resolves display issues in the skills interface by properly rendering RPC error messages and enabling auto-trust on installation for improved UX.
- **Session Name Restoration (#892)**: Addresses a regression introduced in #886 that removed session renaming functionality from the chat toolbar.
- **Matrix OIDC Redirect Fix (#893)**: Corrects OAuth flow failures when running behind reverse proxies by using `ApplicationType::Web` instead of `Native`.
- **Frontend Asset Hygiene (#895)**: Stops committing generated assets to Git (~92K lines removed) and adds compile-time checks for required build outputs.
- **Telegram Channel Optionalization (#890, #889, #891)**: Continues modularization efforts by making the Telegram integration opt-out by default (reducing binary size).
- **Code Indexing Automation (#890–#900)**: Multiple iterations of auto-triggered indexing logic with deduplication and file watchers; final implementation appears in #900.
- **Circuit Breaker Regression Test (#894)**: Adds test coverage to prevent future regressions around security hooks returning `Block`.

---

### **4. Community Hot Topics**  
No issue or PR received comments or reactions today. However, the open PR **#903 (feat(code-index): Auto-trigger indexing...)** stands out as it duplicates earlier work (#890–#900), suggesting possible redundancy or iterative refinement. The underlying need—eliminating manual code indexing—remains critical for usability.

---

### **5. Bugs & Stability**  
One **new bug report** was filed:
- **[#896]** Docker builds fail during `apt-get update` due to transient DNS resolution failure at `ports.ubuntu.com`. This is a common infrastructure flakiness issue, not a code defect, but may affect CI/CD reliability. No fix PR yet exists.

All other resolved items were either enhancements, fixes, or tests—none represent severe stability regressions.

---

### **6. Feature Requests & Roadmap Signals**  
User demand continues to emphasize **usability improvements** and **modular architecture**:
- Simplified agent management (#774 → #898) shows users want cleaner abstraction over core agents.
- Optional messaging channels (Telegram → Discord/MS Teams) signal desire for lighter-weight deployments.
- Command palette (#904) and session renaming restoration indicate friction points in navigation and personalization.

These trends suggest upcoming versions will prioritize UX polish and deployment flexibility.

---

### **7. User Feedback Summary**  
Key pain points include:
- **Infrastructure fragility**: Transient network issues in containerized environments.
- **UI inconsistencies**: Loss of expected session controls post-refactoring (#886 → #892).
- **Manual overhead**: Need for automated code indexing to reduce setup burden.

Positive signals include appreciation for responsive maintainership—multiple PRs addressing isolated concerns within hours of reporting.

---

### **8. Backlog Watch**  
No long-unanswered high-priority issues require immediate attention today. All recently reported bugs have corresponding fixes in flight. The most notable pending item is **#896** (Docker DNS issue), which may benefit from a retry mechanism or alternative mirror configuration guidance in documentation.

--- 

*Data snapshot: 2026-04-28 | Source: [moltis-org/moltis](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – April 28, 2026**

---

### **1. Today’s Overview**  
CoPaw remains highly active with 50 issues and 43 PRs updated in the last 24 hours, indicating strong community engagement. The project shows steady development velocity, with a balanced mix of bug fixes, enhancements, and feature work. No new releases were published today, but several critical fixes and refactoring efforts are nearing completion. Overall, the project maintains healthy momentum across core functionality, channel integrations, and user experience improvements.

---

### **2. Releases**  
No new releases were made today. The latest version is **v1.1.4.post3**, released on April 27 (per PR #3879). Users should note recent regressions around model configuration persistence (Issue #3824) and MCP client stability (Issue #3822), which may inform future patch releases.

---

### **3. Project Progress**  
- **Merged/Closed PRs today**: 25  
  - Key fixes include: QQ voice message handling (PR #3887), Feishu reaction event logging cleanup (PR #3890), chromadb segfault resilience (Issue #3854 + related context compaction hardening in PR #3848), and CI path correction (PR #3877).  
  - Notable feature advances: Asynchronous session title generation (PR #3829), live inter-agent progress tracking via `ProgressObservingHook` (PR #3889), and refined model retry logic (PR #3874).  
  - Minor chores: Version bump (PR #3879), CLI display rename (PR #3880).

---

### **4. Community Hot Topics**  
Top discussions reflect urgent operational and UX concerns:  
- **QwenPaw vs CoPaw relationship** (#3430): Ongoing confusion about project bifurcation; users seek clarity on maintenance strategy.  
- **Channel-side approval for high-risk commands** (#3869): Users demand non-WebUI approval pathways (e.g., CLI/magic commands) to make channels viable for production use.  
- **Token consumption visibility** (#3366): Developers request real-time token tracking to manage cost and debug long tasks—this mirrors industry trends seen in HerMES Agent.  

These topics signal demand for clearer product vision, improved security workflows, and enhanced observability.

---

### **5. Bugs & Stability**  
Critical stability issues reported today:  
1. **Session history loss** (#3843): Complete disappearance of chat history mid-conversation—severity: high. No fix PR yet.  
2. **Chromadb Rust binding segfault** (#3854): Process-killing crashes on Linux—severity: critical. Context compaction fallback PR (#3848) partially addresses this.  
3. **Web UI freeze on Debian 12** (#3853): UI unresponsive after saving model settings—severity: medium. Root cause linked to permission issues under non-root users.  
4. **MCP-induced infinite hangs** (#3822): Deadlocks during MCP tool execution—severity: high. Active investigation ongoing.

Fixes for #3854 and #3853 are underway; others need maintainer prioritization.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven signals point toward:  
- **Multi-channel proactive messaging** (#3804): Extending alerts beyond Console to Feishu/DingTalk.  
- **GitHub Copilot support** (#406): Already on backlog since March—likely upcoming given OpenClaw precedent.  
- **ARM64 macOS browser_use optimization** (#2655): Performance-critical ask for Apple Silicon users.  
- **Searchable model selector** (PR #3876): Reflects UX modernization trend inspired by tools like Cherry Studio.  

These suggest next release will emphasize cross-platform compatibility, channel extensibility, and developer tooling.

---

### **7. User Feedback Summary**  
Key pain points:  
- **Configuration fragility**: Settings reset on restart (#3824), vector DB configs lost (#3817)—indicates persistent storage bugs.  
- **Channel reliability gaps**: WeChat message truncation (#3837), Feishu streaming artifacts (#3862), QQ audio misclassification—highlight inconsistent channel maturity.  
- **Performance opacity**: Slow console GUI (#3830), intermittent API latency (#3499), and missing token metrics create debugging friction.  

Positive signals include appreciation for first-time contributor support (noted in multiple PRs) and proactive error logging improvements (#3885).

---

### **8. Backlog Watch**  
- **#3430 (QwenPaw/CoPaw relationship)**: Open since April 15—needs official statement from maintainers.  
- **#406 (GitHub Copilot support)**: Over three months old; may require architectural planning.  
- **#2655 (Apple Silicon browser_use)**: Long-standing ARM64 compatibility gap affecting macOS users.  
- **#3366 (Token usage display)**: High-👍 interest (2 reactions); could become flagship UX improvement if implemented well.

Maintainers should allocate time to clarify project direction and address foundational stability blockers before major feature pushes.

--- 

*Data sources: [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – April 28, 2026**

---

### **1. Today’s Overview**  
ZeroClaw shows high development velocity with 46 issues and 50 pull requests updated in the last 24 hours, indicating active maintenance and feature iteration. No new releases were published today, but ongoing work includes critical bug fixes, config stability improvements, and expansion of channel support (notably WeChat). The project maintains strong contributor engagement, with multiple high-priority fixes targeting provider reliability, gateway cost tracking, and web UI usability.

---

### **2. Releases**  
No new releases deployed today.

---

### **3. Project Progress**  
- **Merged/Closed PRs**: 12 closed PRs include fixes for memory context formatting in cron jobs (#6082), dead code cleanup (#6098), Docker image completeness (#5983), and FTS index consistency (#5985).  
- **Notable Advances**:  
  - ACP protocol v1 re-enabled via #6167, restoring external tool interoperability.  
  - Web dashboard extraction restored in install script (#6154).  
  - Multilingual docs expanded to include Simplified Chinese (#6170).  

---

### **4. Community Hot Topics**  
- **[#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)**: Fresh installs failing due to `default_model` misconfiguration—blocking onboarding (S1, 14 comments). Suggests schema migration or validation gap.  
- **[#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947)**: Schema v3 migration plan for breaking config changes—high coordination effort (6 comments, merge blocker).  
- **[#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001)**: Gateway `/api/cost` returning zero despite successful chats—impacting observability (S2, 3 comments; fix underway in #6159).  

*Underlying Need*: Users demand clearer config semantics, robust fallback behavior, and transparent cost/token accounting.

---

### **5. Bugs & Stability**  
| Issue | Severity | Description | Fix Status |
|-------|----------|-------------|------------|
| [#6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149) | S1 | Config examples outdated vs. actual keys—blocks local testing | Open |
| [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) | S2 | Matrix voice transcription fails on Element clients due to unsupported audio format | Open |
| [#5244](https://github.com/zeroclaw-labs/zeroclaw/issues/5244) | S2 | Dashboard crashes on Channels tab (v0.6.8) | In progress |
| [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) | S2 | Install script omits web dashboard assets | Fixed in #6154 |

*Fixes Deployed*: Web dashboard installation now complete; cost recording fixed in #6159.

---

### **6. Feature Requests & Roadmap Signals**  
- **Channel Expansion**: New WeChat iLink Bot support added (#6166); hybrid skill/WASM plugins planned (#6140, #6165).  
- **UI/UX Enhancements**: Manual cron trigger from Web UI (#6164), memory recovery via UI (#6145), faster `/clear` commands (#6150).  
- **Config Clarity**: Indicate free models in dropdown (#6070), stop auto-overwriting `fallback` provider (#6155).  

*Prediction*: Next release (likely v0.7.4) will prioritize config stability, cost visibility, and multi-channel memory management.

---

### **7. User Feedback Summary**  
- **Pain Points**: Confusing config structure, silent failures in encrypted channels (Matrix), inconsistent provider API handling (Anthropic/Kimi), and broken local dev experience due to missing dashboard files.  
- **Positive Signals**: Appreciation for detailed issue templates; users value transparency around schema migrations and security audits.  
- **Use Cases Highlighted**: Multi-LXC deployments, encrypted DMs, cost-sensitive operations, and cross-platform chat integration (Telegram/Discord/Slack/WeChat).

---

### **8. Backlog Watch**  
- **[#4878](https://github.com/zeroclaw-labs/zeroclaw/issues/4878)** (Mar 28): E2EE recovery broken after store reset—still open, S1 severity. Requires key backup integration.  
- **[#5835](https://github.com/zeroclaw-labs/zeroclaw/issues/5835)** (Apr 17): Cancel token leaks in abandoned sessions—needs eviction logic beyond `tokio::join!`.  
- **[#5972](https://github.com/zeroclaw-labs/zeroclaw/issues/5972)** follow-up: Prompt injection audit scope needs extension to `[skill].prompts` (#6132).  

*Maintainer Action Required*: Address long-standing E2EE and session cleanup gaps to restore full encrypted channel functionality.

--- 

*Data-driven snapshot as of 2026-04-28 00:00 UTC*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*