# OpenClaw Ecosystem Digest 2026-04-17

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-17 00:26 UTC

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

**OpenClaw Project Digest – April 17, 2026**

### **Today’s Overview**
OpenClaw remains highly active with 500 issues and 500 PRs updated in the last 24 hours, indicating sustained development momentum. The project released two new versions (v2026.4.15 and v2026.4.15-beta.2), both bundling Anthropic Claude Opus 4.7 enhancements and Google Gemini TTS integration into the core `google` plugin. Despite high activity, the ratio of merged PRs to open ones suggests healthy triage—180 closed today vs. 320 open issues. Overall, the project shows strong contributor engagement but faces recurring stability challenges around onboarding, UI regressions, and provider-specific bugs.

---

### **Releases**
**v2026.4.15 & v2026.4.15-beta.2**  
- Added **Gemini text-to-speech support** to the bundled `google` plugin, including voice selection and WAV output.
- Upgraded **Anthropic models**: defaulted to Claude Opus 4.7, introduced `opus` aliases, set CLI defaults, and enabled bundled image understanding for Opus 4.7.
- No breaking changes reported; these are additive improvements targeting multimodal and TTS capabilities.

---

### **Project Progress**
Today saw significant progress in UI modernization, memory infrastructure, and cross-platform support:
- **PR #67840**: End-to-end plan-mode integration bridge wired with mutation gates and session patches.
- **PR #67721**: Mode switcher + clickable plan cards + channel-aware delivery added to webchat UI.
- **PR #67836**: Memory v2 foundation landed—SQLite sidecar, ingest, and rerank pipelines (default-off).
- **PR #66898**: Windows native wrapper and hardened installer initiative launched.
- **PR #67860**: Chat scroll behavior tightened for smoother auto-follow release.

These advances reflect a focus on UX refinement, extensibility, and platform parity.

---

### **Community Hot Topics**
Top discussions highlight urgent needs for accessibility, localization, and platform expansion:
1. **[#75] Linux/Windows Clawdbot Apps** (82 comments, 68 👍): Users strongly desire native desktop apps for Linux/Windows to match macOS functionality—critical for broader adoption.
2. **[#3460] Internationalization (i18n) & Localization Support** (120 comments, 7 👍): High demand for multilingual support, though acknowledged as bandwidth-intensive.
3. **[#53135] Control UI assets not found** (7 comments, 3 👍): Regression affecting build/deployment workflows; impacts developer experience.
4. **[#52532] Cognitive Memory Layer** (8 comments, 1 👍): Proposal for persistent semantic memory with decay modeling—aligns with long-term roadmap signals.

Underlying themes: **cross-platform parity**, **localization**, and **developer tooling reliability**.

---

### **Bugs & Stability**
Several regressions emerged post-v2026.4.14, particularly around onboarding and UI rendering:
- **[#67291] Onboarding crashes with "Cannot read properties of undefined (reading 'trim')"** (CLOSED): Fixed after identifying incomplete bundled setup plugin metadata.
- **[#67035] Windows chat UI regression**: Input text swallowed, replies invisible until refresh—active investigation (#67035).
- **[#53959] openai-codex tools not executing** after 2026.3.23-2 update—regression confirmed; fix under review.
- **[#66633] Cloudflare 403 on OpenRouter requests** post-upgrade—likely SSRF or auth header misconfiguration.
- **[#63510] Completion cache crashes on missing qa/scenarios/index.md**—resolved via fallback or config guard.

Fixes were rapidly deployed for critical crash scenarios, but behavioral regressions persist in edge channels (Feishu, WhatsApp).

---

### **Feature Requests & Roadmap Signals**
User-driven features point toward next-quarter priorities:
- **Dynamic model discovery** (#10687): Requested for OpenRouter and beyond—suggests move from static catalogs.
- **Message Bus for Agent Communication** (#52290): Multi-agent coordination infrastructure gaining traction.
- **Cognitive Memory Layer** (#52532): Semantic memory with forgetting curves signals shift toward persistent agent states.
- **Gateway restart notifications** (#51130): Improves observability—low-effort win for reliability.

Combined with recent PRs (e.g., Memory v2, plan-mode), these indicate **memory systems**, **agent orchestration**, and **enhanced observability** as key themes.

---

### **User Feedback Summary**
Users report **frustration with instability** following recent updates, especially on Windows and during onboarding. Pain points include:
- Silent failures in tool execution (OpenRouter, Azure Foundry).
- Microphone access blocked by Permissions-Policy headers.
- Duplicate/truncated messages in Feishu streaming mode.
- Context engine errors causing unresponsiveness.

Positive signals include appreciation for **Gemini TTS integration** and **UI improvements** (mode switcher, plan cards). However, satisfaction is dampened by **lack of clear communication** about breaking changes and insufficient backward compatibility guards.

---

### **Backlog Watch**
Two longstanding items require maintainer attention:
1. **[#75] Linux/Windows Clawdbot Apps**: Over 150 days old; no progress since initial request. Risk: alienating non-macOS users.
2. **[#10687] Fully dynamic model discovery**: Critical for scalability; stalled since February. Affects providers like OpenRouter with fast-changing catalogs.

Both represent **strategic gaps** that could hinder ecosystem growth if unaddressed.

---

## Cross-Ecosystem Comparison

**Cross-Project Comparison Report: Personal AI Assistant Open-Source Ecosystem (April 17, 2026)**

---

### **1. Ecosystem Overview**

The personal AI agent open-source ecosystem in April 2026 is characterized by intense specialization and rapid iteration across multiple architectural paradigms. Projects range from monolithic frameworks like OpenClaw and IronClaw to modular microkernels such as ZeroClaw, reflecting divergent design philosophies on extensibility versus out-of-the-box functionality. A strong emphasis on cross-platform channel integration (Slack, Telegram, WhatsApp, Matrix), provider flexibility (OpenAI, Anthropic, Gemini, Groq), and persistent memory systems unifies the landscape. Simultaneously, emerging trends toward multi-agent orchestration, self-hosted tooling (LM Studio, Ollama), and enterprise-grade observability signal maturation beyond simple chatbots into operational agent platforms.

---

### **2. Activity Comparison**

| Project       | Issues (24h) | PRs (24h) | Merged/Closed PRs (24h) | Release Status             | Health Score* |
| :------------ | :----------- | :-------- | :---------------------- | :------------------------- | :------------ |
| OpenClaw      | 500          | 500       | 180                     | v2026.4.15 + beta          | High          |
| NanoBot       | 13           | 56        | 31                      | No release                 | High          |
| Hermes Agent  | 50           | 50        | 16                      | v0.10.0                    | Medium-High   |
| PicoClaw      | 12           | 27        | 3                       | Nightly only               | Medium        |
| NanoClaw      | N/A          | 17        | 6                       | No release                 | Medium        |
| NullClaw      | 13           | 14        | 11                      | Stable v2026.4.9; dev builds | High          |
| IronClaw      | 50           | 50        | 4                       | No release                 | Medium        |
| LobsterAI     | Minimal      | 8         | 6                       | No release                 | Low-Medium    |
| TinyClaw      | None         | None     | None                    | Stagnant                   | Low           |
| Moltis        | 10           | 18        | 13                      | v20260416.02               | High          |
| CoPaw         | 50           | 50        | 4                       | v1.1.2-beta.2              | Medium        |
| ZeptoClaw     | None         | None     | None                    | Stagnant                   | Low           |
| ZeroClaw      | 40           | 50        | 4                       | v0.6.9 (v0.7.0 prep)       | Medium-High   |

\*Health Score: High = Strong triage, rapid fixes, active roadmap; Medium = Moderate activity with some regressions; Low = Stagnant or declining engagement.

---

### **3. OpenClaw's Position**

**Advantages vs Peers:**  
OpenClaw leads in sheer velocity and community scale (500 issues/PRs daily), backed by deep integrations (Claude Opus 4.7, Gemini TTS) and a mature plugin architecture. Its "plan-mode" execution and bundled UI components provide an end-to-end agent experience unmatched by lighter frameworks like NanoBot. Unlike Hermes Agent’s paid-tier tool gateway or IronClaw’s focus on Routines, OpenClaw emphasizes broad accessibility and extensibility through its core `google` plugin and cross-platform support roadmap.

**Technical Approach Differences:**  
While many projects adopt minimalist designs (e.g., NanoBot’s lightweight tooling), OpenClaw leans into feature-richness at the cost of complexity—evident in recurring stability challenges around onboarding and Windows UI rendering. Its memory v2 foundation with SQLite sidecars and rerank pipelines also signals investment in long-term context management, aligning with cognitive memory trends seen in NanoClaw (#1256) and CoPaw (#3470).

**Community Size Comparison:**  
OpenClaw’s issue volume dwarfs peers: NanoBot (13 issues), Moltis (10), and others operate at <20 issues/day. This reflects both broader adoption and higher bug surface area. However, Hermes Agent and ZeroClaw show stronger per-issue engagement density, indicating more focused user bases.

---

### **4. Shared Technical Focus Areas**

Several requirements recur across multiple projects:

- **Provider Compatibility & Schema Sanitization**:  
  Moltis (#746, #751), NullClaw (#806), NanoBot (#3220), and IronClaw (#2491) all grapple with API inconsistencies (OpenRouter, Grok, MiniMax). Standardizing tool schemas and fallback logic is critical for multi-provider deployments.

- **Channel Integration Robustness**:  
  WhatsApp LID migration (#2540, PicoClaw), Discord slash command limits (#10259, Hermes), and Matrix E2EE (#8174, Hermes; #4657, ZeroClaw) reveal fragile messaging layer implementations requiring hardened error handling and platform-specific abstractions.

- **Memory Persistence & Context Management**:  
  Beyond OpenClaw’s Memory v2, NanoClaw (#1256), Moltis (#737), and CoPaw (#3470) explore graph-enhanced memory, configurable context windows, and semantic summarization to combat staleness in large sessions.

- **Observability & Diagnostics**:  
  OTEL tracing (#5716, ZeroClaw), CLI history persistence (#802, NullClaw), and admin tooling (#829, NullClaw) reflect demand for operational transparency—especially in production agent workflows.

---

### **5. Differentiation Analysis**

| Project       | Feature Focus                          | Target Users                     | Technical Architecture          |
| :------------ | :------------------------------------- | :------------------------------- | :------------------------------ |
| **OpenClaw**  | End-to-end agent UX, multimodal TTS    | Developers, power users          | Monolithic with plugin extensibility |
| **NanoBot**   | Lightweight tool orchestration         | Researchers, small teams         | Minimalist, event-driven        |
| **Hermes**    | Managed tool ecosystems (paid tier)   | Enterprise/Nous Portal subscribers | Gateway-centric, skill-based    |
| **ZeroClaw**  | Microkernel modularity, enterprise ops | DevOps, infra-focused teams      | Microkernel + workspace modules |
| **IronClaw**  | Routine automation, secret scanning    | Productivity-focused enterprises | Engine V2 with safety layers    |
| **Moltis**     | Configurable reasoning, code indexing  | Developer tooling enthusiasts    | Provider-agnostic, config-first |
| **CoPaw**      | Multi-agent collaboration, ACP support | IDE-integrated workflows         | ReMe memory + ACP protocol      |

Key differentiators:
- **Hermes** monetizes advanced tool access, creating a freemium gap.
- **ZeroClaw** prioritizes infrastructure reliability via microkernel redesign.
- **Moltis** targets developer ergonomics with reasoning toggles and FTS5 code search.
- **IronClaw** uniquely enforces routine authoring cadence and secret scanning parity between v1/v2.

---

### **6. Community Momentum & Maturity**

- **Rapid Iteration Tier**:  
  OpenClaw, NanoBot, and Moltis demonstrate high-frequency, stable delivery with >80% PR closure rates and proactive schema hardening.

- **Stabilization Phase**:  
  NullClaw and ZeroClaw are refining production readiness—NullClaw through security patches (Docker sandbox, UTF-8 fixes), ZeroClaw via CI/CD overhauls ahead of v0.7.0.

- **Maturation Signals**:  
  Hermes Agent’s Tool Gateway release marks transition from pure FOSS to managed offering. IronClaw and CoPaw show strong enterprise traction but face UX friction that could stall adoption without addressing auth flows and session isolation.

- **Stagnant Projects**:  
  TinyClaw and ZeptoClaw lack recent activity, suggesting either resource constraints or strategic pivots not yet reflected in public repos.

---

### **7. Trend Signals**

Industry trends extracted from community feedback and feature requests:

1. **Shift Toward Persistent Agent States**:  
   Cognitive memory with decay modeling (#52532, OpenClaw), graph-based recall (#1256, NanoClaw), and tiered retention (#3227, NanoBot) indicate demand for agents that remember beyond single conversations.

2. **Enterprise-Grade Observability Becomes Standard**:  
   OTEL integration, token usage metrics, and cron job alerts (#783, NullClaw; #5716, ZeroClaw) reflect operational maturity expectations from day one.

3. **Multi-Agent Orchestration Gains Traction**:  
   Message Bus (#52290, OpenClaw), ACP protocol (#1059, CoPaw), and swarm briefing (#886, NanoClaw) suggest next frontier beyond single-agent chat.

4. **Local Inference & Privacy-First Tooling Expand**:  
   LM Studio easy connect (#28, PicoClaw), Ollama/MCP support (#1802, NanoClaw), and Matrix native channels (#2019, IronClaw) signal growth in self-hosted deployments.

5. **Provider Abstraction Critical for Scalability**:  
   Dynamic model discovery (#10687, OpenClaw), per-model startup args (#3107, NanoBot), and custom gateway support (#3107, NanoBot) underscore need for resilient LLM routing.

For AI agent developers, these trends emphasize building with modularity, observability, and cross-provider compatibility—priorities most evident in OpenClaw, Moltis, and ZeroClaw architectures.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest — April 17, 2026**

---

### 1. **Today’s Overview**  
NanoBot remains highly active with strong development momentum: 56 pull requests updated in the past 24 hours (31 merged/closed), reflecting rapid iteration on core agent infrastructure, provider integrations, and channel support. Issue volume is moderate (13 total), dominated by stability concerns around LLM provider compatibility and memory handling. No new releases were published today, but multiple critical fixes and enhancements are nearing completion.

---

### 2. **Releases**  
No new releases published today.

---

### 3. **Project Progress**  
**Merged/Closed PRs (last 24h):**
- [#3222](https://github.com/HKUDS/nanobot/pull/3222): Implemented SSE streaming for `/v1/chat/completions` — enables real-time response delivery.
- [#3179](https://github.com/HKUDS/nanobot/pull/3179): Enhanced WebSocket tooling, session lifecycle tracking, and reasoning content forwarding across channels.
- [#3177](https://github.com/HKUDS/nanobot/pull/3177): Added `MyTool` for runtime self-inspection (model config, token usage, etc.).
- [#3219](https://github.com/HKUDS/nanobot/pull/3219): Fixed cross-channel session persistence for cron jobs — now properly uses target user’s session history.
- [#3171](https://github.com/HKUDS/nanobot/pull/3171): Added Discord channel filtering via `allowChannels` configuration.

These advances strengthen observability, multi-agent coordination, and platform-specific customization.

---

### 4. **Community Hot Topics**  
Top community discussions reflect demand for **interoperability** and **robustness**:
- [#3220](https://github.com/HKUDS/nanobot/issues/3220) ([PR #3225](https://github.com/HKUDS/nanobot/pull/3225)): Infinite loop from non-compliant API gateways injecting `tool_calls` under invalid `finish_reason`. Quickly addressed with defensive guard logic.
- [#3227](https://github.com/HKUDS/nanobot/issues/3227): Long-term memory staleness in large projects — users seek smarter consolidation or tiered retention. Underlying need: scalable context management.
- [#3030](https://github.com/HKUDS/nanobot/pull/3030): Web App & Mobile APIs channel — signals expansion beyond chat platforms toward broader AI agent ecosystems.
- [#3217](https://github.com/HKUDS/nanobot/issues/3217): Discord bot-to-bot communication blocked by hardcoded `author.bot` filter — highlights desire for multi-bot collaboration.

---

### 5. **Bugs & Stability**  
**Critical Issues (ranked):**
1. **[CRITICAL]** [#3190](https://github.com/HKUDS/nanobot/issues/3190): Regression after v0.1.5 → v0.1.5.post1 due to memory format incompatibility. Closed but requires urgent patch to restore functionality.
2. **[HIGH]** [#3215](https://github.com/HKUDS/nanobot/issues/3215): Email auto-reply loop when SMTP configured — infinite feedback cycle risks spam abuse.
3. **[MEDIUM]** [#3213](https://github.com/HKUDS/nanobot/issues/3213): `GroqTranscriptionProvider` ignores `apiBase` config — breaks self-hosted Whisper setups.
4. **[LOW]** [#3206](https://github.com/HKUDS/nanobot/issues/3206): Gemini auth error due to duplicate credentials passed to API.

Fixes in progress: #3215 likely addressed by message deduplication logic; #3213 targeted by #3226.

---

### 6. **Feature Requests & Roadmap Signals**  
User-requested capabilities indicating near-term priorities:
- Configurable LLM fallbacks (#3107)
- Per-model startup args (`--model`) (#3107)
- Timeout control for LLM requests (#3107)
- Multi-provider custom gateway support (#3107)
- LM Studio native provider (#3185)

Additionally, #3221 (OAuth device flow + `nanobot auth` command) suggests a push toward secure, first-class provider authentication — potentially enabling SSO and managed deployments.

---

### 7. **User Feedback Summary**  
Users appreciate NanoBot’s **clean architecture** and **lightweight design**, citing ease of extension and learning value. However, recurring pain points include:
- **Memory fragility**: Large sessions lose nuance; users want semantic summarization beyond static `.md` dumps.
- **Provider brittleness**: API inconsistencies across vendors (MiniMax, Gemini, Groq) cause frequent errors.
- **Observability gaps**: Lack of status clarity during long tasks frustrates debugging (#3107).
- **Platform lock-in**: Hardcoded behaviors (Discord bot filtering, email loops) limit composability.

Overall sentiment leans constructive but urgent around stability — especially post-update regressions.

---

### 8. **Backlog Watch**  
- [#2220](https://github.com/HKUDS/nanobot/issues/2220): `ContextVar` for task-local tool routing — proposed over 6 weeks ago. Async-safety hardening could prevent subtle race conditions in concurrent agents. Requires maintainer review.
- [#2373](https://github.com/HKUDS/nanobot/issues/2373): MiniMax API parameter validation errors persist despite retries — open since March, affecting enterprise WeChat deployments. Needs provider-level schema validation or fallback strategy.
- [#3107](https://github.com/HKUDS/nanobot/issues/3107): Feature wishlist with 5+ sub-items — represents consolidated user needs for configurability and transparency. High potential impact if prioritized.

--- 

*Data snapshot as of 2026-04-17 00:00 UTC. All links point to GitHub issues/PRs in HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest – April 17, 2026**

---

### **Today's Overview**  
Hermes Agent remains highly active with 100 total updates (50 issues + 50 PRs) in the last 24 hours, indicating sustained development momentum. The project released v0.10.0 featuring Tool Gateway support for paid Nous Portal subscribers—enabling web search, image generation, TTS, and browser automation without additional API keys. With 34 open PRs and 40 unresolved issues, the team is balancing rapid feature delivery with critical bug stabilization, particularly around messaging gateways and model compatibility.

---

### **Releases**  
**v0.10.0 (April 16, 2026)** introduces the **Tool Gateway**, a major monetization and usability milestone. Paid Nous Portal users can now access integrated third-party tools (web search, image gen, TTS, browser automation) via their existing subscription—eliminating the need for separate API keys. This release reflects Hermes’ shift toward a managed ecosystem for advanced agentic workflows.

> No breaking changes noted; backward compatibility maintained.

---

### **Project Progress**  
- **Merged/Closed PRs**: 16 today, including fixes for Discord voice RTP padding (#11283), Matrix invite handling (#10725), and Windows cron job robustness (#10680).  
- **Key advancements**:  
  - Slack Connect file retrieval enabled (#11111)  
  - Telegram message formatting now uses native `MessageEntity` instead of MarkdownV2 (#11287)  
  - File-sync teardown logic hardened to salvage remote changes (#11291)  
- **Notable merges**: Fix for MiniMax/Claude `/v1` endpoint duplication on mid-session model switches (#11286).

---

### **Community Hot Topics**  
Top community-engaged items reflect demand for **messaging platform expansion** and **self-hosted privacy**.  
1. **[Matrix Protocol Support](https://github.com/NousResearch/hermes-agent/issues/73)** – 9 comments/👍: Users advocate for native Matrix support as a privacy-focused alternative to centralized platforms. Suggests alignment with decentralized AI values.  
2. **[Rocket Chat Support](https://github.com/NousResearch/hermes-agent/issues/3725)** – 4 comments: Enterprise users request Rocket Chat integration for internal collaboration workflows.  
3. **[Microsoft Teams Gateway](https://github.com/nousresearch/hermes-agent/issues/9512)** – 2 comments: Office suite adoption trend signals enterprise interest in unified agent messaging.  

These threads indicate strong user desire for **open, interoperable gateway standards** over proprietary silos.

---

### **Bugs & Stability**  
Critical bugs reported focus on **gateway reliability** and **model switching edge cases**:  
1. **High**: `/model switch` fails to reload MemoryStore, causing stale context until compression (#10880) – *no fix PR yet*.  
2. **High**: Matrix encrypted rooms broken post-migration to `mautrix-python` (#8174) – *fixed in #10725*.  
3. **Medium**: Discord slash command payload exceeds 8KB limit (#10259) – *no fix PR*.  
4. **Medium**: macOS launchd re-poisons `TERMINAL_CWD`, wasting tokens (#10817) – *closed*.  

Stability efforts are concentrated on gateway integrations, especially Matrix and Discord voice paths.

---

### **Feature Requests & Roadmap Signals**  
User-driven signals point to:  
- **Multimodal nativization**: Request to pass images directly to Kimi K2.5 instead of via `vision_analyze` tool (#7641) → suggests upcoming native vision model support.  
- **Brokerage integration**: IBKR + Telegram approval flow (#11196) signals expansion into financial agent use cases.  
- **Self-hosting tooling**: Nix-darwin support (#9782) and umask fixes (#9279) show growing infra maturity needs.  
Predicted next release (v0.11.0): Enhanced gateway extensibility, improved multimodal handling, and expanded TTS providers (Gemini).

---

### **User Feedback Summary**  
Users express **frustration with opaque error messages** (e.g., “system dependency not met” for missing FAL_KEY in image gen #9516) and **fragmented toolchains**. Positive feedback centers on **Tool Gateway value**—paid users report seamless integration of external tools. Pain points include:  
- Over-reliance on external bridges for platforms like QQbot and Rocket Chat  
- Poor diagnostics during setup (install.sh missing xz-utils #11197)  
- Mid-session model switching instability  

Overall sentiment leans constructive but urges clearer documentation and proactive error handling.

---

### **Backlog Watch**  
Long-unresolved items requiring maintainer attention:  
- **[Matrix Protocol Support (#73)](https://github.com/NousResearch/hermes-agent/issues/73)** – Open since February; high strategic value for privacy-first deployments.  
- **[Discord Slash Command Size Limit (#10259)](https://github.com/NousResearch/hermes-agent/issues/10259)** – Affects 80+ default skills; no fix in sight despite clear impact.  
- **[Model Switch Memory Bug (#10880)](https://github.com/NousResearch/hermes-agent/issues/10880)** – Directly impacts core agent functionality; urgent for production users.  

These represent **high-priority technical debt** that could block adoption if unaddressed in Q2 2026.

--- 

*Data snapshot: 2026-04-17 | Source: [NousResearch/Hermes-Agent](https://github.com/NousResearch/hermes-agent)*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – April 17, 2026**

---

### **Today's Overview**  
PicoClaw remains highly active with 12 issues and 27 pull requests updated in the last 24 hours. The project shows strong development momentum, particularly around authentication flows, channel integrations (especially WhatsApp), and frontend enhancements. A new nightly build (v0.2.6-nightly.20260416) was released, reflecting ongoing stabilization efforts ahead of a potential stable release. Overall, activity indicates healthy community engagement and rapid iteration cycles.

---

### **Releases**  
A new **nightly build** is available:  
- **v0.2.6-nightly.20260416.f32b303d**  
This is an automated, potentially unstable build intended for testing. No stable release occurred today. Full changelog: [GitHub Compare](https://github.com/sipeed/picoclaw/compare/v0.2.6...main).

---

### **Project Progress**  
Merged/closed PRs today include critical fixes and infrastructure improvements:
- **Fix cron job session isolation** ([PR #2474](https://github.com/sipeed/picoclaw/pull/2474)): Prevents cross-run interference in scheduled tasks.
- **Improve network error classification & fallback** ([PR #2547](https://github.com/sipeed/picoclaw/pull/2547)): Enhances resilience by properly classifying TLS/connection errors for smarter retries.
- **Remove noisy backend logs for platform tokens** ([PR #2500](https://github.com/sipeed/picoclaw/pull/2500)): Cleans up verbose output without functional changes.

These merges reflect a focus on stability, observability, and robustness in background task handling.

---

### **Community Hot Topics**  
Top-discussed issue (#28) seeks **easy LM Studio integration**, highlighting demand for broader LLM provider support beyond OpenAI/Gemini. With 14 comments and 1 upvote, this request signals strong interest in local inference tooling.  

Other notable discussions:
- **Authentication UX friction**: Multiple threads (#2533, #2550) critique mandatory browser popups during OAuth login—users want `--no-browser` flags for headless/cloud deployments.
- **WhatsApp group mention filtering broken**: Deep technical thread (#2541) reveals four compound bugs in `whatsapp_native`, indicating fragile channel logic under real-world conditions.

---

### **Bugs & Stability**  
Critical bugs reported today involve **auth persistence**, **channel message routing**, and **provider config conflicts**:

1. **Multiple auth credentials error** (#2548): Users report duplicate credential entries causing runtime errors—likely a config merge bug. No fix PR yet.
2. **WhatsApp LID-migration drops messages** (#2540): Silent message loss affects Linked-Device accounts; severity high due to lack of logging.
3. **Web UI re-auth loops** (#2302): Frequent credential expiry breaks usability—ongoing since early April.
4. **Group trigger broken in WhatsApp** (#2541): Four intertwined defects disable `mention_only` functionality entirely.

Fix PRs are in progress but not yet merged for most critical items.

---

### **Feature Requests & Roadmap Signals**  
Key requested features suggest upcoming directions:
- **OAuth 2.1 + PKCE support for MCP servers** (#2546): Targets non-technical users adding secure connectors via dashboard—aligns with trend toward plug-and-play AI agents.
- **LM Studio easy connect** (#28): Indicates growing need for local model support.
- **Headless auth options** (#2533, #2549): Reflect deployment diversity (cloud VMs, containers) demanding CLI-friendly workflows.

These point toward v0.3.x focusing on extensibility, security, and accessibility.

---

### **User Feedback Summary**  
Users express frustration with:
- **Auth complexity**: Mandatory browser flows hinder automation and remote setup.
- **Silent failures**: WhatsApp message drops and cron session leaks show poor observability.
- **Config fragility**: Duplicate credential errors suggest inadequate validation.

Positive signals include appreciation for parallel agent processing (from recent PR merges) and proactive maintainer responsiveness—e.g., rapid triage of WhatsApp regression within hours of report.

---

### **Backlog Watch**  
Two long-standing items require attention:
- **Issue #28 (LM Studio Easy Connect)**: Open since February; needs contributor with deep Go/LM Studio expertise or clear implementation plan.
- **Issue #1067 (Integrate Authula)**: Proposes formal auth framework; valuable for enterprise use cases but lacks specification details.

Both represent high-impact opportunities if resourced.

--- 

*Data compiled from GitHub activity as of 2026-04-17. All links verified.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

## NanoClaw Project Digest – April 17, 2026

### 1. Today’s Overview  
NanoClaw shows robust development momentum with **17 PR updates** (6 merged/closed) and active issue triage over the last 24 hours. The project continues its rapid expansion into multi-platform agent orchestration, persistent memory, and architectural layering, evidenced by new skills for Telegram UX redesign, OpenAI-compatible API exposure, and a full 7-layer capability framework. No new releases were published today, but multiple high-impact features reached closure or review-ready status. Overall activity reflects strong maintainer engagement and growing community contribution.

---

### 2. Releases  
*No new releases published today.*

---

### 3. Project Progress  
**Merged/Closed PRs (6 total):**  
- **#1799, #1798, #1797**: All variants of `/add-api-server` skill merged—exposes NanoClaw agents as OpenAI-compatible HTTP endpoints (`POST /v1/chat/completions`, `GET /v1/models`). Single-file implementation leverages existing container auth; zero external dependencies.  
- **#1793**: Security fix applying 1MB body size limit to trust gateway `readBody()` to prevent DoS via oversized payloads.  
- **#1794, #1786**: Full implementation of Layer 4–5 from the “7-layer scope expansion” roadmap (webhook triggers, browser watchers, LLM pre-validation).  

These advances solidify NanoClaw’s shift toward modular, extensible agent infrastructure with improved security and observability.

---

### 4. Community Hot Topics  
**Most discussed items lack public comments yet**, indicating early-stage exploration rather than debate. However, **#1801 (Telegram UX redesign)** stands out for its ambition: transforming flat text output into an “agentic operations panel” via 17 new modules including message classification, batcher, and status indicators—directly addressing user frustration with opaque long-running tasks (see Issue #1805 below).  
**Underlying need**: Users demand real-time visibility into agentic workflows across channels, especially during extended processing (>10 min). This signals maturation beyond simple chat bots toward operational agent platforms.

---

### 5. Bugs & Stability  
**Issue #1805** reports a critical UX failure: **no typing indicator during 11-minute agent processing on Telegram**, creating false impressions of bot freeze/failure. Though not a crash, this erodes trust in reliability.  
- **Severity**: High (user-facing stability perception)  
- **Fix status**: No associated PR exists yet—maintainers should prioritize integrating status signaling into the ongoing Telegram UX redesign (#1801).

No crashes or regressions reported.

---

### 6. Feature Requests & Roadmap Signals  
Three major requests signal near-term direction:  
1. **Multi-workspace Slack support** (#1804): Enables enterprise use by allowing concurrent Slack instances without token conflicts.  
2. **Persistent graph-enhanced memory** (#1256): Reuses existing Qdrant + Neo4j infra via Mem0—aligns with trend toward contextual, long-term agent memory.  
3. **Atomic Chat MCP tool integration** (#1802): Extends local model support beyond Ollama, suggesting focus on hybrid cloud-local inference.  

Given active development on Telegram UX (#1801) and multi-channel registry patterns (#1804), expect **cross-platform agent orchestration** to dominate next release cycles.

---

### 7. User Feedback Summary  
**Pain point**: Agents appear frozen during long operations without feedback (Telegram #1805).  
**Use case**: Enterprise teams require isolated Slack workspaces per deployment (#1804).  
**Satisfaction**: Positive reception of API server skill (#1799–1797)—users value OpenAI compatibility for integration.  
**Dissatisfaction**: Silent failures undermine confidence in agent reliability, especially in production settings.

---

### 8. Backlog Watch  
- **#1256 (add-mem0-graph)**: Stale since March 19; despite clear reuse of existing vector/graph DBs, lacks reviews. Maintainer attention needed to finalize persistent memory offering.  
- **#1624 (Matrix channel)**: Since April 4; implements full E2EE support but pending integration testing. Critical for privacy-focused users.  
- **#886 (news briefing swarms)**: Over 3 weeks old; involves complex multi-agent coordination—high-value but may require prioritization.  

All three represent strategic capabilities that could define NanoClaw’s competitive edge if accelerated.

---  
*Sources: [GitHub Issues](https://github.com/qwibitai/nanoclaw/issues), [Pull Requests](https://github.com/qwibitai/nanoclaw/pulls)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest – April 17, 2026**

---

### 1. **Today’s Overview**  
The project shows robust development activity with 14 PR updates and 13 issue updates in the last 24 hours. While no new releases were published today, a strong rhythm of fixes—particularly around sandboxing, provider compatibility, and CLI diagnostics—indicates focused stabilization efforts ahead of a potential release cycle. The high volume of merged PRs (11/14) reflects efficient triage and integration velocity.

---

### 2. **Releases**  
No new releases published today. Latest stable version remains v2026.4.9; users are currently on "dev" builds from source.

---

### 3. **Project Progress**  
**Merged PRs (11):**  
- #823: Full migration to Zig 0.16 (stdlib API updates, websocket refactor)  
- #805: Security hardening for Linux sandbox auto-detection (reject non-functional firejail/bubblewrap)  
- #806: Fix OpenAI-compatible provider fallback to Responses API on /chat/completions 404 (#766)  
- #803: Restore local container hostname support for OTEL HTTP endpoints (#800)  
- #804: Correct session routing so unbound sessions land on main agent instead of first subagent (#793)  
- #802: Persist CLI agent turns into SQLite history store (#797)  
- #801: Initialize Docker sandbox mount args via factory to prevent "invalid empty volume spec" errors (#779, #784, #799)  
- #807: Web security hardening—expire pairing tokens, tighten provider/browser boundaries  
- #810: Add SysVinit fallback for service installation on legacy init systems  
- #790: Fix Responses API tool schema format mismatch and null error handling (#773)  
- #824: Fix UTF-8 truncation bugs in history compaction across 6 code locations  

**Open PRs (3):**  
- #829: Admin CLI tools (`config show --json`, `models summary --json`)  
- #828: Clarify `nullclaw doctor` output for CLI-only channels  
- #783: Cron job engine with JSON output, TZ support, and operator alerts  

---

### 4. **Community Hot Topics**  
**#820 [CLOSED] How to install Zig on Debian?** (3 comments)  
Users report confusion over Zig installation requirements, specifically whether Docker is mandatory. This signals a gap in developer setup documentation.  

**#821 [CLOSED] Version command shows "dev" instead of semantic version** (3 comments)  
Affects users building from source, who expect identifiable version metadata. Highlights need for better dev/release hygiene.  

**#826 [OPEN] How to use nullclaw gateway with Tailscale?**  
User seeks guidance integrating gateway mode with Tailscale mesh networking—suggests growing enterprise use case requiring secure remote access patterns.  

Underlying need: clearer docs for production deployments involving networking layers like Tailscale or container orchestration.

---

### 5. **Bugs & Stability**  
**High-Severity:**  
- **Docker sandbox "invalid empty volume spec"** (#799, #779, #784) → Fixed by #801  
  *Root cause:* Uninitialized `mount_arg_buf` led to empty `-v` flag in `docker run`. Critical for all Linux users relying on sandboxed execution.  

- **OTEL endpoint rejection for local container names** (#800) → Fixed by #803  
  Regressed after HTTPS enforcement; affects observability setups in containerized environments.  

**Medium-Severity:**  
- **CLI session history missing in SQLite backend** (#797) → Fixed by #802  
  Users reported successful agent replies but empty `history list/show`. Indicates improper session binding in CLI agent path.  

- **Custom provider 404 on non-standard /chat/completions** (#766) → Fixed by #806  
  Despite fallback logic existing, logic wasn’t triggered due to duplicated path handling.  

All critical sandbox and provider bugs have been resolved.

---

### 6. **Feature Requests & Roadmap Signals**  
- **Cron job scheduler** (#783) appears as a major upcoming feature—includes DB-backed runs, JSON output, and delivery routing. Likely targeted for next minor release.  
- **Admin CLI enhancements** (#829) suggest move toward operational tooling maturity (config inspection, model summaries), aligning with enterprise adoption signals.  
- Documentation gaps (Zig install, Tailscale gateway) indicate roadmap may include “production readiness” tracks.

---

### 7. **User Feedback Summary**  
**Pain Points:**  
- Frustration with opaque version strings ("dev") and unclear install paths.  
- Breakage from recent security changes (HTTPS enforcement, token expiry) disrupted existing observability and sandbox workflows.  
- Lack of guidance for hybrid environments (e.g., Tailscale + gateway).  

**Satisfaction Indicators:**  
- Quick fix turnaround on Docker sandbox and provider issues shows responsive maintainer team.  
- Multi-language PR titles (Chinese) reflect global contributor base.  
- Strong validation of fixes via comment threads suggests community engagement.

---

### 8. **Backlog Watch**  
- **#783 (Cron engine)**: Open since April 7, no reviews yet. High complexity but clearly valued—may require architecture deep dive.  
- **#826 (Tailscale gateway)**: No responses beyond initial report. Maintainers should clarify if this use case is supported or out-of-scope.  
- Long-running test failure #599 (downloadToFile proto config) finally addressed in PR #790 closure—shows backlog cleanup ongoing.

--- 

*Data-driven snapshot confirms active stabilization phase with strong backward-compatibility focus and emerging operational tooling needs.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – April 17, 2026**

### 1. Today's Overview  
IronClaw shows sustained development momentum with 50 issues and 50 PRs updated in the last 24 hours. The project remains highly active across core areas: agent orchestration (especially Engine V2), channel integrations (Slack, Telegram, WASM), tool schema ergonomics, and safety/secret scanning. No new releases were published today. Overall health appears strong, though recurring bugs around UI state management, OAuth flows, and secret handling suggest ongoing refinement needs.

---

### 2. Releases  
No new releases deployed since the last update.

---

### 3. Project Progress  
**Closed PRs:**  
- **#2551**: Fixed routine setup resume state in web gateway UI (core contributor) — resolves UX fragmentation during onboarding.  
- **#2515**: Unified gateway onboarding, auth gates, and pairing flows (core contributor, DB migration) — consolidates chat/settings extension workflows.  
- **#2512**: Fixed Slack relay OAuth callback state lookup (core contributor) — addresses broken Slack integration post-refactor.  
- **#2552**: Added thread_id, effective_rate, and error codes to notification_send (experienced contributor).  

**Key Advances:**  
Engine V2 now includes inbound secret scanning (#2494), aligning it with v1 safety guarantees. Routine authoring cadence is now mandatory (#2547), preventing silent misconfigurations.

---

### 4. Community Hot Topics  
Top-discussed items reflect urgent operational and security concerns:

- **Google Sheets OAuth Blocked** (#2229): Users report persistent 400 errors during OAuth flow; 9 comments indicate widespread impact on Google Suite extensions.  
- **Telegram Bot Token Save Fails** (#2411): Critical regression where token persistence silently fails — affects channel authentication at scale.  
- **Engine V2 Bypasses Secret Scanning** (#2491): High-severity security flaw confirmed — secrets sent directly to LLM without detection. A fix is under review (#2494).  

Underlying need: **Reliable, secure extension onboarding** remains a top pain point across platforms.

---

### 5. Bugs & Stability  
**Critical Issues (P1/P2):**  
1. **Engine V2 Secret Leak** (#2491, P1): User tokens bypass scanning → immediate security risk. *Fix PR #2494 submitted*.  
2. **Google Sheets OAuth Failure** (#2229, P2): Blocks core productivity workflow. No fix PR yet.  
3. **WASM Channels Auto-Start Inactive** (#2556, P2): Startup performance drain and unintended behavior. Open for triage.  
4. **Dashboard Infinite Refresh Loop** (#2410, P1): Web UI instability causing data loss. *Fix PR #2415 submitted*.  
5. **Slack Connect Flow Broken** (#1998, P1): Auth confusion leads to non-functional bots. Linked to #2411.  

Stability regressions concentrated in web gateway state management and channel activation logic.

---

### 6. Feature Requests & Roadmap Signals  
Long-running enhancement themes signal near-term priorities:

- **Tool Schema Discovery Improvements** (#1338, #1337, #1334, #1331): Unified, context-aware tool documentation for MCP/WASM/builtin tools — likely next sprint focus.  
- **Routines UX Modernization** (#1325, #1324, #1322): First-class create/edit flows, readable summaries, CLI alignment — indicates major routines revamp incoming.  
- **Aliyun Coding Plan Support** (#1446): New LLM provider added — shows multi-cloud LLM strategy expansion.  
- **Matrix Native Channel** (#2019): Full Matrix SDK integration with E2EE option — signals growth in messaging platform coverage.  

Predicted next release focus: **Routines UI overhaul + tool discovery polish**.

---

### 7. User Feedback Summary  
**Pain Points:**  
- Confusing extension setup flows (Slack/Google Sheets) due to inconsistent auth states.  
- Web UI loses chat history on refresh or tab switch — breaks conversational continuity.  
- Engine V2 feels less secure than v1 despite claims of parity.  
- Tool schemas are opaque — model struggles with complex inputs (e.g., `create_job`, HTTP policies).  

**Satisfaction Indicators:**  
- Positive reception to execution obligation (#2539) — prevents false capability promises.  
- Appreciation for native Matrix support and Aliyun LLM integration.  

Overall sentiment leans toward **frustration with reliability**, but confidence in technical direction remains high among contributors.

---

### 8. Backlog Watch  
Items requiring maintainer attention beyond 30 days:

- **Add IronClaw Slack App to Marketplace** (#1997): Blocking user adoption — no progress since March 3.  
- **Google Slides Integration Failed** (#1503): Visual evidence of failure; unresolved.  
- **Tool Schema Enhancements** (#1338, #1337, #1334, #1331): All marked "on hold" — critical for usability but deprioritized.  

These represent **high-value, low-effort wins** if resourced.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – April 17, 2026**

**1. Today's Overview**  
LobsterAI shows steady development activity with 8 pull requests updated in the last 24 hours—six merged and two still open—indicating focused maintenance and incremental improvements. No new releases were published today, and issue volume remains minimal, reflecting a stable release cycle. The project appears to be in an active stabilization phase, with efforts concentrated on renderer, main process reliability, and integrations (e.g., WeCom). Overall health is positive, with no urgent blockers reported.

**2. Releases**  
No new releases were published today. The last known tagged version remains unreleased as of this report.

**3. Project Progress**  
Six PRs were merged today, covering bug fixes, infrastructure cleanup, and minor enhancements:
- **PR #1702**: Upgraded OpenClaw framework (renderer/main/cowork areas) to align with release/2026.04.14 branch.
- **PR #1705**: Unified `powerSaveBlocker` usage across the main process to prevent app suspension inconsistencies.
- **PR #1704**: Suppressed leaked `HEARTBEAT_OK` replies in Cowork sessions when OpenClaw heartbeats cause false positives.
- **PR #1703**: Restored accidentally deleted icon imports (`SearchIcon`, `PencilIcon`, etc.) in McpManager after a merge conflict.
- **PR #1706**: Added `uuid` and `userId` query parameters to update-check requests for better telemetry tracking.
- **PR #1670**: Enhanced WeCom (WeChat Work) support for multiple robots and fixed notification timing bugs.

These changes improve system stability, user experience, and backend observability.

**4. Community Hot Topics**  
The most notable active discussion is **#1707** (open), addressing inconsistent input persistence across agents: users expect the home page input field to clear when switching between agents, but shared Redux state (`draftPrompts['__home__']`) retains previous content. This reflects a core UX friction point in multi-agent workflows. While not heavily commented yet, it signals a growing need for session isolation per agent context.

**5. Bugs & Stability**  
Today’s merged fixes address several low-to-moderate severity issues:
- **McpManager crash** due to missing icon imports (fixed in #1703).
- **Leaked heartbeat messages** causing noise in Cowork sessions (#1704).
- **Power save blocker inconsistency** across processes (#1705).

All critical stability concerns appear resolved promptly. No high-severity crashes or regressions reported.

**6. Feature Requests & Roadmap Signals**  
A stale feature request (**#438**, "Feat/add aihubmix provider") reappeared after 20+ days, suggesting renewed interest in expanding LLM provider support—likely driven by user demand for alternative model backends. Combined with recent focus on WeCom integration (#1670), this hints at an upcoming roadmap emphasis on enterprise-ready extensibility and multi-provider compatibility.

**7. User Feedback Summary**  
Primary pain points center around **input state management** during agent switches—users expect clean context transitions but encounter residual text/attachments. This reveals a gap in session-scoped UI state handling. Satisfaction is otherwise implied through rapid resolution of reported issues, indicating responsive maintenance. Enterprise users benefit from improved WeCom reliability and power management.

**8. Backlog Watch**  
- **#438** (“Feat/add aihubmix provider”): Stale for over a month; lacks maintainer engagement despite relevance to provider expansion. Requires prioritization or closure.
- **#1707** (input clearing fix): Active but uncommented—needs validation/testing from community before merge to avoid regressions.

Both items warrant maintainer attention to sustain momentum on extensibility and UX polish.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – April 17, 2026**

---

### **Today's Overview**  
The Moltis project shows robust development momentum with 18 PR updates and 10 issue updates in the last 24 hours. A new release (20260416.02) was published, indicating active maintenance and feature integration. The team is focused on stabilizing core infrastructure—particularly around provider configuration, schema sanitization, and code indexing—while simultaneously expanding developer tooling (e.g., Nix flake support). Issue closure rate (7/10) and merged PRs (13/18) reflect efficient triage and delivery.

---

### **Releases**  
A new release was deployed: **20260416.02**. While no detailed changelog is provided in the data, the volume of merged fixes suggests critical stability improvements:
- Fixes for Windows crypto provider initialization (#749)
- Schema sanitization enhancements for OpenRouter/Grok compatibility (#746, #751)
- Nostr channel panic resolution (#742)

Users should upgrade to benefit from provider reliability and cross-platform stability.

---

### **Project Progress**  
Key merged PRs advancing core functionality:
- **Configurable context windows + oldest-first compaction** (#737): Unified config system for per-model context limits, resolving long-loop agent degradation.
- **Reasoning effort toggle UI** (#750): Adds sparkles icon in chat toolbar for Off/Low/Medium/High reasoning tiers (for models like Grok, o1).
- **Schema canonicalization fixes** (#740, #751): Restores type annotations stripped during JSON Schema normalization; prunes invalid `required` fields.
- **Nostr fix**: Replaced tokio RwLock with std RwLock to prevent runtime panics (#742).
- **Grok reasoning detection**: Now correctly identifies grok-3/4 as reasoning-capable (#741).

Ongoing work includes a 4-PR stack implementing a built-in SQLite+FTS5 code-index backend with incremental reindexing (#753–#756).

---

### **Community Hot Topics**  
Most engaged issue by reactions/comments:
- **Docker-in-Docker mount bug (#102)**: Closed after 4 comments and 5 upvotes. Users struggled with workspace mounting when running Moltis inside nested containers—highlighting deployment complexity for CI/CD or self-hosted users.

Emerging pain point:
- **Attachment UX (#533)**: Requested “+” button for message attachments lacks traction (2 comments, 0 votes), suggesting low user demand or alternative workflows exist.

No highly debated PRs today; the Nix flake proposal (#745) is new and awaiting review.

---

### **Bugs & Stability**  
Three high-severity bugs reported today:
1. **Podman breakage on Ubuntu 24.04/26.04 (#757)** – Regression from recent Docker-in-Docker fix (#102). Likely due to shared mount namespace handling. *No fix PR yet*.
2. **Windows crypto panic (#744)** – Fixed in #749 via early rustls provider registration.
3. **Attio tools rejected by OpenAI (#743)** – Caused by draft-07 schema not being sanitized. Resolved in #746 via pre-processing `$schema` stripping.

All other bugs were either trivial or already addressed.

---

### **Feature Requests & Roadmap Signals**  
Strong signals toward:
- **Developer experience**: Nix flake support (#745) and code-index backend stack indicate investment in reproducible dev environments and IDE-like code search.
- **Provider flexibility**: Per-model reasoning effort (#750) and context window overrides (#737) show deep integration with evolving LLM APIs (OpenRouter, xAI, etc.).

Less clear priority:
- Attachment UI (#533) and retry prompts (#748) are isolated requests without community backing—likely low-priority unless tied to specific use cases.

Predicted next version focus: Code indexing MVP completion (via #753–#756) and expanded provider reasoning controls.

---

### **User Feedback Summary**  
Real-world pain points:
- **Deployment fragility**: Nested container setups break due to incorrect path mounts (#102).
- **API inconsistency**: OpenRouter’s strict validation exposes schema normalization gaps (#747).
- **Platform parity**: Windows crypto crashes disrupt local development (#744).

Positive trends:
- Rapid bug resolution (e.g., #744 fixed within hours).
- Proactive schema hardening (#746) prevents widespread provider failures.

Users appreciate configurability (context windows, reasoning effort) but demand smoother out-of-box experiences across Linux, macOS, and Windows.

---

### **Backlog Watch**  
One long-standing issue warrants attention:
- **#102 (Docker-in-Docker mount bug)**: Created Feb 13, 2026; closed only after regression triggered by #706 fix. Indicates recurring infrastructure fragility—maintainers should audit all container-boundary assumptions.

No stalled feature PRs today; the code-index stack is actively progressing through granular reviews.

--- 

*Data sources: [moltis-org/moltis GitHub](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – April 17, 2026**

---

### 1. Today's Overview  
CoPaw remains highly active with 100 total updates in the last 24 hours (50 issues, 50 PRs), indicating strong development momentum and community engagement. The project released **v1.1.2-beta.2**, focusing on stability fixes for background task management in AgentApp workflows. With a balanced mix of bug reports, feature requests, and ongoing enhancements—particularly around multi-agent collaboration, channel integrations, and console UX—the project demonstrates healthy evolution while maintaining backward compatibility.

---

### 2. Releases  
**v1.1.2-beta.2** was released today with minor internal improvements:
- Fixed a critical issue where `AgentApp` dispatched tasks could be canceled prematurely due to improper registration with `TaskTracker`.
- Bumped version string to align with release pipeline expectations.
*No breaking changes or migration notes required.*

> [Release Details](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.2-beta.2)

---

### 3. Project Progress  
Today’s merged/closed PRs reflect stabilization efforts:
- **#3438**: Completed vLLM `tool_choice="auto"` compatibility fix across all model wrappers.
- **#2994**: Preserved channel connections during hot-reload to prevent messaging downtime.
- **#2995**: Enabled reply-to quoting for WhatsApp and Signal channels with user-configurable toggle.
- **#3494**: Added warnings for free-tier LLM usage to guide users toward appropriate model selection.

These advances strengthen reliability, especially for long-running agent sessions and third-party integrations.

---

### 4. Community Hot Topics  
Top discussions reveal key concerns:

- **QwenPaw vs CoPaw confusion post-v1.1.0** (#3309): Users report path misalignment (`~/.qwenpaw` vs `~/.copaw`) and duplicate app installations after upgrade. This suggests a need for clearer installation paths and documentation to distinguish between CLI tools and GUI consoles.

- **MCP Configuration Failures** (#3445): Despite GUI setup, MCP servers fail to connect due to architectural gaps—two internal MCP systems exist without proper synchronization. Users expect seamless configuration persistence.

- **Self-Evolution Features** (#3470): Interest in Hermes-like autonomous agent improvement is growing, signaling demand for meta-learning or feedback-driven skill refinement within CoPaw.

> Most active: [Issue #3309](https://github.com/agentscope-ai/QwenPaw/issues/3309) (11 comments)

---

### 5. Bugs & Stability  
Critical bugs reported today include:

| Issue | Severity | Description | Fix Status |
|-------|----------|-----------|------------|
| #3506 | High | `/api/console/chat` crashes with `AttributeError: 'AgentRequest' has no attribute 'channel'` | Open (PR #3497 may resolve related tooling issue) |
| #3481 | Medium | `/api/tools` returns 500 when builtin tools have `icon=null`, breaking WebUI tool panel | **Fixed by PR #3497** |
| #3435 | Medium | File download URLs contain double `/api/files/preview` path segments | Open |
| #1563 | Medium | `write_file` truncates large (>30KB) content (~19% written) | Long-standing; no recent progress |

A recurring theme: **API contract mismatches** (e.g., null icons, missing attributes) cause cascading UI failures. Several fixes are already merged or under review.

---

### 6. Feature Requests & Roadmap Signals  
User-driven features gaining traction:

- **ACP (Agent Communication Protocol) Support** (#1059, revived via PR #3487): Enables IDE integration (Zed, OpenCode). Likely to land soon given active implementation.

- **Natural Language-Driven Multi-Agent Teams** (#3224): Proposal for self-organizing agent teams with emergent roles—aligns with CoPaw’s ReMe memory foundation. High potential for v1.2.

- **Batch Skill Management** (#3503, #3504): Frontend lacks bulk enable/disable for skills—low effort, high UX impact.

- **Kimi Code API Integration** (#3437): Direct support requested; currently fails despite manual attempts.

These signals suggest **IDE/plugin ecosystem expansion** and **multi-agent orchestration** as next major themes.

---

### 7. User Feedback Summary  
Real pain points from today’s activity:

- **Installation & Path Confusion**: Post-upgrade, users find `.copaw` and `.qwenpaw` directories split configurations—breaking assumptions about unified storage.

- **Memory Persistence Gaps**: Even when MCP/database solutions are documented, new conversations ignore prior context unless manually repeated (#3453).

- **Tool Reliability Issues**: Large file writes, timeout errors during streaming (Anthropic API), and inconsistent icon handling degrade trust in core utilities.

Satisfaction appears mixed: users appreciate rapid feature delivery (Signal, WhatsApp channels) but frustrated by regression bugs and inconsistent behavior across versions.

---

### 8. Backlog Watch  
Items needing maintainer attention:

- **#3309** (v1.1.0 migration chaos): Unanswered since Apr 13; impacts multiple users daily. Should be addressed before GA release.

- **#1563** (`write_file` truncation): Affects core functionality; no resolution since March 16. Consider prioritizing over cosmetic enhancements.

- **#3445** (MCP config mismatch): Architecture-level gap requiring design decision—either unify internal MCP systems or clarify documentation.

All three require cross-team coordination (backend, docs, installer logic) and should be triaged in next sprint planning.

--- 

*Data compiled from GitHub activity on 2026-04-17. All links verified against agentscope-ai/QwenPaw repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest — 2026-04-17**

**1. Today's Overview**
The ZeroClaw project shows strong development momentum with 90 total updates in the last 24 hours (40 issues, 50 PRs), indicating active contributor engagement and rapid iteration cycles. While no new releases were published today, the codebase is undergoing significant architectural transformation toward a microkernel design starting v0.7.0, accompanied by extensive CI/CD and documentation overhauls. The high volume of security-focused and observability-related changes suggests heightened focus on production readiness and enterprise-grade reliability.

**2. Releases**
No new releases were published today. The latest stable version remains v0.6.9; however, multiple PRs (#5805, #5812) are preparing for the upcoming v0.7.0 release following the workspace refactoring (#5559).

**3. Project Progress**
Today saw several important merges and closures:
- **PR #5801**: Added CONVENTIONS.md to clarify development philosophy and contribution expectations
- **PR #5716**: Fixed OpenTelemetry span parenting to enable proper trace correlation across agent invocations
- **PR #5798**: Resolved critical webhook channel initialization failure when used as sole channel
- **PR #5784**: Standardized Matrix media download error handling for consistent fallback behavior

These advances reflect progress on observability infrastructure, contributor experience, and core channel stability ahead of the v0.7.0 milestone.

**4. Community Hot Topics**
Top community discussions center on architectural evolution and operational friction:
- **RFC: Intentional Architecture — Microkernel Transition** (#5574): A comprehensive RFC outlining the shift from monolithic to modular architecture for v0.7.0→v1.0.0, emphasizing intentional design decisions and long-term maintainability.
- **Matrix Channel Friction Tracker** (#4657): An umbrella issue tracking persistent pain points in Matrix integration, including E2EE OTK retry loops that break encrypted rooms.
- **Engineering Infrastructure — CI/CD Pipeline Automation** (#5579): Proposes standardized release automation to support the upcoming workspace decomposition and ensure reliable deployments.

These topics reveal community demand for clearer architectural vision, improved developer tooling, and more robust messaging platform integrations.

**5. Bugs & Stability**
Critical bugs reported today include:
- **[S0] Context Spillage from Chat to Schedule** (#5415): Unauthorized context leakage between Discord chats and scheduled tasks poses data privacy risks—no fix yet.
- **[S1] CLI Channel Factory Not Registered** (#5685): Agent mode crashes on startup due to missing channel registration—under investigation.
- **[S1] Web Dashboard Still Not Available** (#4866): Persisting UI build requirement blocks user access despite repeated fixes—still open.
- **[S2] Dockerfile.debian Build Failures** (#5541): Local builds broken by dependency resolution issues—now closed after corrections.
- **[CI] Root Crate Publish Broken Post-Split** (#5811): Workspace refactoring broke crates.io publishing pipeline—addressed in companion PR #5812.

Two high-severity bugs remain unresolved, requiring immediate maintainer attention.

**6. Feature Requests & Roadmap Signals**
User-requested features signaling future roadmap priorities:
- **Multi-query Keyword Expansion for Memory Retrieval** (#2472): Enhances long-message comprehension via secondary recall queries—now implemented and closed.
- **Mattermost Oncall Mode Support** (#3100): Request for cross-channel notification capability—active but stale; may resurface post-microkernel.
- **Azure OpenAI Integration via Custom Auth** (#2555): Workaround exists but lacks native support—likely to be prioritized in provider abstraction layer during microkernel transition.
- **TOML i18n Replacement with Mozilla Fluent** (#5787): Modernization push for internationalization infrastructure aligned with documentation RFCs.

Strong signals point toward enhanced provider flexibility, memory system improvements, and infrastructure standardization in v0.7.0.

**7. User Feedback Summary**
Real-world pain points highlighted today:
- **Build/Deployment Friction**: Users struggle with web dashboard builds, Docker image creation, and binary downloads (especially aarch64 under QEMU).
- **Provider Limitations**: GitHub Copilot missing from onboard wizard, Azure OpenAI auth mismatches, and lack of Anthropic-compatible endpoint support frustrate enterprise users.
- **Documentation Fragmentation**: Translated setup guides referencing obsolete install.sh flags create confusion; i18n strategy overhaul needed.
- **Observability Gaps**: Operators report incomplete OpenTelemetry traces and missing token usage metrics hinder debugging and cost tracking.

Overall sentiment reflects appreciation for rapid feature delivery but growing frustration with stability regressions and inconsistent documentation quality.

**8. Backlog Watch**
Long-pending items needing maintainer action:
- **Issue #2503**: "Where is napcat channel?" – Stale since March 2; likely requires revisiting channel discovery UX post-workspace split.
- **Issue #2467**: Webhook Transform Support – Stale since March 2; may gain traction once core channel framework stabilizes.
- **Issue #4851**: GitHub Copilot Provider Missing – Active but unresolved; involves provider registry logic that may change with microkernel.
- **Issue #5574 + #5576 + #5577 + #5579 + #5615**: Series of governance and architecture RFCs created within days of each other—collectively outline v0.7.0 planning but require active curation and prioritization.

Maintainers should allocate time to review these RFCs and provide clear roadmaps to align community efforts with strategic direction.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*