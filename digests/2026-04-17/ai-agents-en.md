# OpenClaw Ecosystem Digest 2026-04-17

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-17 00:15 UTC

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

# OpenClaw Project Digest — 2026-04-17

---

## 1. Today's Overview

OpenClaw remains a **high-velocity, high-activity** project with 500 issues and 500 PRs updated in the last 24 hours. The release cadence is aggressive, with **v2026.4.15** shipping today alongside a beta.2 prerelease. However, the volume of regressions, onboarding crashes, and provider breakages suggests the project is operating near the edge of its stability envelope. The community is deeply engaged—top issues have 80–120 comments—but maintainers face a significant triage burden as Windows, Linux, and multi-provider support expands faster than platform hardening can keep pace.

---

## 2. Releases

### [v2026.4.15](https://github.com/openclaw/openclaw/releases/tag/v2026.4.15) & [v2026.4.15-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.4.15-beta.2)

| Change | Impact |
|--------|--------|
| **Anthropic/models**: Default selections updated, `opus` aliases added, CLI defaults and bundled image understanding routed to **Claude Opus 4.7** | Users on older Anthropic configs may see behavior shifts; Opus 4.7 is now the default for vision tasks |
| **Google/TTS**: Gemini text-to-speech support added to the bundled `google` plugin, with provider registration, voice selection, and WAV output | New capability; no breaking changes, but requires valid Gemini API credentials |

**Migration notes**: No explicit breaking changes listed. Users relying on prior default Anthropic models should verify agent behavior after update. TTS is opt-in via configuration.

---

## 3. Project Progress

### Notable Merged/Closed PRs (2026-04-16)

| PR | What Advanced / Fixed |
|----|----------------------|
| [#67821](https://github.com/openclaw/openclaw/pull/67821) | **fix(onboard)**: Re-onboarding no longer regenerates the gateway auth token, preventing live session kills with `4001: gateway auth changed` / `1008: token mismatch` |
| [#39361](https://github.com/openclaw/openclaw/pull/39361) | **BlueBubbles**: Forces private API for Tahoe text sends, caches probe results, fixes slow/misrouted iMessage delivery |
| [#42382](https://github.com/openclaw/openclaw/pull/42382) | **BlueBubbles**: Null-safety fix in debounce flush (`text?.trim() ?? ''`), preventing crashes on attachment-only messages |
| [#48685](https://github.com/openclaw/openclaw/pull/48685) | **BlueBubbles**: Prefer iMessage over SMS when both DM threads exist for a contact |
| [#66108](https://github.com/openclaw/openclaw/pull/66108) | **BlueBubbles**: Routes `fetchImpl` through bundled undici on Node 24+, fixing attachment download failures |
| [#66120](https://github.com/openclaw/openclaw/pull/66120) | **BlueBubbles**: Accepts `updated-message` events carrying attachments, fixing silent image/PDF drops |
| [#43961](https://github.com/openclaw/openclaw/pull/43961) | **Gateway**: SIGKILL fallback when graceful shutdown times out, fixing stale process/port-binding issues on restart |
| [#67754](https://github.com/openclaw/openclaw/pull/67754) | Adds `EMBEDDING_MODEL` env var for custom Voyage embedding models |
| [#45861](https://github.com/openclaw/openclaw/pull/45861) | **BlueBubbles**: Status probe now audits webhook health, not just REST ping |

**Theme**: A major sprint on **BlueBubbles reliability** (6 closed PRs) and **gateway/onboarding stability** (2 closed PRs). The BlueBubbles channel is being hardened for production use after earlier webhook and message-drop regressions.

---

## 4. Community Hot Topics

| Issue/PR | Comments | 🔍 Underlying Need |
|----------|----------|-------------------|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) — i18n & Localization Support (closed) | **120** | Massive demand for non-English UX, but maintainers explicitly closed it citing bandwidth constraints. Tension between global growth and core-team capacity. |
| [#75](https://github.com/openclaw/openclaw/issues/75) — Linux/Windows Clawdbot Apps | **82**, 👍 68 | The **most-upvoted open issue**. Users want native desktop parity with macOS. Windows installer PR [#66898](https://github.com/openclaw/openclaw/pull/66898) is now open. |
| [#26322](https://github.com/openclaw/openclaw/issues/26322) — OAuth token refresh race condition | **21**, 👍 14 | Multi-agent OAuth sharing is architecturally fragile. Users need a token-lock or singleton refresh strategy for shared provider credentials. |
| [#53959](https://github.com/openclaw/openclaw/issues/53959) — gpt-5.3-codex tool execution regression | **19**, 👍 3 | Codex provider integration is brittle; model updates upstream break tool-calling pipelines downstream. |
| [#67291](https://github.com/openclaw/openclaw/issues/67291), [#67353](https://github.com/openclaw/openclaw/issues/67353), [#67347](https://github.com/openclaw/openclaw/issues/67347), [#67684](https://github.com/openclaw/openclaw/issues/67684), [#67076](https://github.com/openclaw/openclaw/issues/67076) — Onboarding `trim` crash | **15 + 14 + 8 + 7 + 6** | A **cluster of duplicates** around `Cannot read properties of undefined (reading 'trim')`. Onboarding is the first-run experience and it's on fire. Fix PR [#67821](https://github.com/openclaw/openclaw/pull/67821) addresses one root cause; more fixes likely needed. |

---

## 5. Bugs & Stability

### 🔴 Critical / High Severity

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#67291](https://github.com/openclaw/openclaw/issues/67291) / [#67353](https://github.com/openclaw/openclaw/issues/67353) / [#67684](https://github.com/openclaw/openclaw/issues/67684) | **Onboarding crashes** with `Cannot read properties of undefined (reading 'trim')` — blocks new user setup | Partial: [#67821](https://github.com/openclaw/openclaw/pull/67821) |
| [#66633](https://github.com/openclaw/openclaw/issues/66633) | **openai-codex provider fails with Cloudflare 403** after 2026.4.12 → 2026.4.14 upgrade | None identified |
| [#53959](https://github.com/openclaw/openclaw/issues/53959) | **gpt-5.3-codex executes zero tools** — regression in 2026.3.23-2 | None identified |
| [#26322](https://github.com/openclaw/openclaw/issues/26322) | **OAuth token refresh race condition** causes `refresh_token_reused` failovers | None identified |
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | **Windows chat UI regression**: input swallowed, streamed replies invisible, typing indicator broken | None identified |

### 🟡 Medium Severity

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#66601](https://github.com/openclaw/openclaw/issues/66601) | v2026.4.14 causes repeated **context engine errors** (`lossless-claw` invalid factory) | None identified |
| [#65603](https://github.com/openclaw/openclaw/issues/65603) | **Azure Foundry GPT models** reject request schema / tool payload after 2026.4.11 | None identified |
| [#51056](https://github.com/openclaw/openclaw/issues/51056) | **OpenRouter 401** — Authorization header missing despite valid key | None identified |
| [#67295](https://github.com/openclaw/openclaw/issues/67295) | `openclaw agents add` writes **wrong `baseUrl`s** for OpenRouter, Arcee, OpenAI-Codex, GitHub Copilot | None identified |
| [#67744](https://github.com/openclaw/openclaw/issues/67744) | **Infinite TTS loop** when no TTS provider configured (275 messages in ~10 min) | None identified |

### 🟢 Lower Severity / Niche

| Issue | Description |
|-------|-------------|
| [#51085](https://github.com/openclaw/openclaw/issues/51085) | STT mic button blocked by Permissions-Policy header |
| [#63510](https://github.com/openclaw/openclaw/issues/63510) | Completion cache crash on missing `qa/scenarios/index.md` |
| [#67288](https://github.com/openclaw/openclaw/issues/67288) | `amazon-bedrock-mantle` lacks `config.discovery.enabled` gate |

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood in Next Version |
|----------|---------|---------------------------|
| [#67836](https://github.com/openclaw/openclaw/pull/67836) — **Memory v2 foundation** (sidecar, ingest, rerank) | XL PR open; additive and default-off. Signals a major architectural bet on persistent memory. | **High** — likely to merge after review |
| [#66898](https://github.com/openclaw/openclaw/pull/66898) — **Windows Native Wrapper & Installer** | XL PR open. Addresses the #1 user-requested gap. | **High** — critical for platform expansion |
| [#52532](https://github.com/openclaw/openclaw/issues/52532) — **Cognitive Memory Layer** (Ebbinghaus decay, semantic memory) | Community proposal with detailed spec. Aligns with #67836. | **Medium** — may influence v2 design |
| [#52290](https://github.com/openclaw/openclaw/issues/52290) — **Message Bus for Agent-to-Agent Communication** | Plugin proposal already built externally. | **Medium** — could be adopted as bundled plugin |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) — **Fully dynamic model discovery** (OpenRouter + beyond) | Long-standing maintainer-tracked issue. | **Medium** — needed as catalog velocity increases |
| [#10356](https://github.com/openclaw/openclaw/pull/10356) — **Typecast TTS provider** | Large open PR with emotion presets and Asian-language focus. | **Medium** — TTS is actively being expanded |
| [#63836](https://github.com/openclaw/openclaw/pull/63836) — **SiliconFlow provider** (Qwen, DeepSeek) | Open PR; model-provider expansion is a consistent theme. | **Medium** |
| [#67819](https://github.com/openclaw/openclaw/pull/67819) — **Settings / slash-command UX overhaul** | XL PR open; UI polish is a recurring release theme. | **High** |

---

## 7. User Feedback Summary

### 😤 Top Pain Points

1. **Onboarding is broken** — The `trim` crash cluster is the loudest signal. New users are hitting a wall on first install.
2. **Windows is a second-class citizen** — No native Clawdbot app, UI regressions on Windows (#67035), and CJK encoding issues (#64709).
3. **Provider fragility** — OpenAI Codex, OpenRouter, Azure Foundry, and Venice all have active breakages. Users feel "whack-a-mole" with every update.
4. **OAuth / auth ergonomics** — Race conditions, token refresh, and misleading auth picker labels (#67848) create friction.

### 😊 Positive Signals

- **BlueBubbles channel** is receiving intense hardening attention and users are getting fixes merged.
- **Memory and TTS capabilities** are expanding rapidly (Gemini TTS in release, Typecast PR open, Memory v2 in flight).
- **Community is highly engaged** — 82-comment threads, plugin proposals, and external repos (message bus) show an invested ecosystem.

### Use Cases Emerging

- **Multi-agent enterprise deployments** (OAuth sharing, agent-to-agent messaging)
- **Localized / non-English deployments** (Feishu, CJK Windows, i18n requests)
- **Voice-enabled agents** (STT + TTS pipeline demand)

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Why It Needs Eyes |
|------|-----|-------------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | ~3.5 months | 68 upvotes. The most requested feature. PR [#66898](https://github.com/openclaw/openclaw/pull/66898) is open but unmerged. |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) Dynamic model discovery | ~2.5 months | Maintainer-labeled. Static catalogs are a scaling bottleneck as providers multiply. |
| [#51056](https://github.com/openclaw/openclaw/issues/51056) OpenRouter 401 missing auth header | ~4 weeks | Breaks a popular provider entirely. No fix PR identified. |
| [#51873](https://github.com/openclaw/openclaw/issues/51873) Context caching almost never works | ~4 weeks | Core memory/performance feature is non-functional in Telegram. |
| [#55816](https://github.com/openclaw/openclaw/issues/55816) Custom providers fail after `pi-*` 0.63.0 | ~3 weeks | Regression affecting self-hosted and proxy users. |
| [#67237](https://github.com/openclaw/openclaw/issues/67237) "Does anyone else cant get this thing to do anything correctly?" | 1 day | A vent issue, but 9 comments already. Signals broader reliability sentiment. Needs triage to extract actionable feedback or close politely. |

---

*Digest generated from GitHub activity for openclaw/openclaw on 2026-04-17.*

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Report — 2026-04-17

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing intense, fragmented growth across more than a dozen active projects. The landscape splits into two tiers: high-velocity, full-featured frameworks (OpenClaw, ZeroClaw, CoPaw, IronClaw, Hermes Agent) racing to absorb multi-modal tools, enterprise channels, and memory systems; and smaller, focused projects (NanoBot, PicoClaw, NullClaw, Moltis) optimizing for specific deployment targets or architectural philosophies. No single project dominates on stability, feature breadth, and ease of deployment simultaneously—each makes distinct trade-offs between shipping velocity and production hardening. Community engagement is strongest where projects solve real integration pain points (Slack, WhatsApp, Matrix, voice) rather than abstract agent capabilities.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
|:--------|:-----------:|:---------:|:---------------|:-------------|
| **OpenClaw** | 500 | 500 | **v2026.4.15 + beta.2 shipped** | ⚠️ B+ (high velocity, stability stress) |
| **NanoBot** | 13 | 56 | No release (v0.1.5.post1 latest) | ✅ A- (productive, pre-release consolidation) |
| **Hermes Agent** | 50 | 50 | **v0.10.0 shipped** | ⚠️ B (shipping fast, Matrix regressions) |
| **PicoClaw** | 12 | 27 | v0.2.6 nightly | ✅ B+ (steady, scoped iteration) |
| **NanoClaw** | 3 new | 17 | No release | ⚠️ B- (contributor energy, review friction) |
| **NullClaw** | 13 | 14 | No release | ✅ A- (stabilization sprint, rapid closure) |
| **IronClaw** | 50 | 50 | No release | ⚠️ C+ (critical security bug, UI regressions) |
| **LobsterAI** | 0 | 8 | No release | ⚠️ C (internal-driven, zero community) |
| **Moltis** | 10 | 18 | **20260416.02 shipped** | ✅ A- (strong throughput, clean roadmap) |
| **CoPaw/QwenPaw** | 50 | 50 | **v1.1.2-beta.2 shipped** | ⚠️ B (rapid growth, rebrand turbulence) |
| **ZeroClaw** | 40 | 50 | No release (v0.7.0 prep) | ⚠️ B+ (major architecture transition) |
| **TinyClaw** | — | — | No activity | N/A |
| **ZeptoClaw** | — | — | No activity | N/A |

*\*Health score balances velocity against open/close ratio, severity of unpatched bugs, and community responsiveness.*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Scale and ecosystem gravity**: 10× the daily issue/PR volume of any peer except IronClaw/CoPaw/ZeroClaw (which match in count but not in comment depth). OpenClaw's 80–120 comment threads indicate it is the default reference implementation many users compare against.
- **Fastest provider and model coverage**: Ships Claude Opus 4.7 defaults, Gemini TTS, and OpenRouter/Codex integrations ahead of competitors.
- **Largest channel surface**: BlueBubbles iMessage hardening and native desktop app demand show it is pushing beyond web chat into OS-integrated experiences.

### Technical Approach Differences
- **Plugin-heavy, provider-saturated architecture** vs. NanoBot's leaner core or NullClaw's Zig-based systems programming approach.
- **Aggressive release cadence** (daily/near-daily) vs. Moltis's or PicoClaw's more batched, nightly-based rhythm.
- **JavaScript/TypeScript monorepo** vs. ZeroClaw's Rust microkernel transition or Moltis's Rust+QMD backend.

### Community Size Comparison
OpenClaw operates at roughly **5–10× the engagement depth** of NanoBot, PicoClaw, or NullClaw, and **2–3× the volume** of Hermes Agent or Moltis. Its closest peer in raw activity is IronClaw, but IronClaw's community is more QA-driven and enterprise-Slack focused, whereas OpenClaw spans consumer desktop apps, voice, and creative tools.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:------------|:---------|:-------------|
| **Provider resilience / abstraction** | OpenClaw, NanoBot, Hermes, PicoClaw, NullClaw, IronClaw, Moltis, ZeroClaw | Non-OpenAI gateways (MiniMax, Gemini, OpenRouter, Azure Foundry, Groq) break on schema drift, auth format, or `finish_reason` edge cases. Multiple projects fixed provider fallbacks or schema sanitization today. |
| **Channel expansion (enterprise messaging)** | OpenClaw, NanoBot, Hermes, PicoClaw, IronClaw, CoPaw, ZeroClaw | Teams, Slack, Discord, Matrix (E2EE), WhatsApp, Signal, WeCom, Feishu. Matrix E2EE is a repeated pain point (Hermes, IronClaw, ZeroClaw, NanoClaw). |
| **Memory / context systems** | OpenClaw, NanoBot, NanoClaw, CoPaw, ZeroClaw, Moltis | Persistent memory (mem0, graph, SQLite FTS5), session transcript logging, context compaction, and cross-session continuity for cron/scheduled tasks. |
| **Voice / multi-modal I/O** | OpenClaw, Hermes, CoPaw, NanoBot | TTS (Gemini, Typecast), STT, Discord voice, SIP telephony. Native multimodal input (bypassing `vision_analyze` tool) is requested in Hermes and CoPaw. |
| **OAuth / auth ergonomics** | OpenClaw, PicoClaw, NullClaw, IronClaw, ZeroClaw | Token refresh races, browser-less OAuth for CI/headless, credential collision between env vars and config stores. |
| **Observability / operational safety** | NanoBot, ZeroClaw, NullClaw, IronClaw | OpenTelemetry standardization, infinite-loop guardrails, SMTP self-loops, task status visibility, and graceful degradation. |
| **Windows / local deployment parity** | OpenClaw, PicoClaw, NullClaw, CoPaw, Moltis | Native installers, TLS init on Windows, CJK encoding, local model support (LM Studio, vLLM, llama.cpp). |

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Architecture Signature |
|:--------|:--------------|:-------------|:-----------------------|
| **OpenClaw** | Maximal features, fastest model/provider support, desktop apps | Power users, early adopters, creative professionals | TS monorepo, plugin ecosystem, aggressive releases |
| **NanoBot** | Lean, clean core; production hardening; multi-channel enterprise bots | Small teams, self-hosters, Chinese enterprise (Feishu, MiniMax) | Python, lightweight, heartbeat + spawn tools |
| **Hermes Agent** | Gateway diversity, bundled premium tools (search, image gen, TTS), subscription monetization | Nous Portal subscribers, privacy-conscious (Matrix) | Python, gateway-first, tool-gateway bundling |
| **PicoClaw** | Edge/local deployment, Android, headless OAuth, parallel agent loop | Edge/self-hosters, mobile-first users | Go + React, network-fallback resilience |
| **NullClaw** | Systems-level safety, sandboxing, Zig performance, SQLite history | Security-conscious developers, systems engineers | Zig, explicit sandbox abstractions, microkernel-like separation |
| **Moltis** | Codebase understanding, code indexing, reasoning UI controls | Developers, code-centric agent users | Rust, SQLite+FTS5 indexing, QMD backend |
| **CoPaw/QwenPaw** | Qwen-family model optimization, ACP protocol, voice channels, agent teams | Chinese market, local model deployers, multi-agent experimenters | Python, rebranding in progress, rapid channel accumulation |
| **ZeroClaw** | Microkernel transition, governance RFCs, enterprise observability | Production operators, structured engineering adopters | Rust workspace split, OTEL-first, RFC-driven |
| **IronClaw** | Engine V2, routines, web gateway, Slack marketplace | Enterprise automation, near.ai platform users | Python/TS hybrid, engine abstraction, demo-driven features |
| **LobsterAI** | NetEase Youdao internal product, WeCom enterprise, OpenClaw backend integration | Chinese enterprise customers | Internal fork of OpenClaw patterns, minimal OSS community |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (High Velocity, Some Instability)
- **OpenClaw**: 500 issues/PRs daily. Shipping faster than it can harden. Onboarding and Windows are on fire.
- **CoPaw/QwenPaw**: 50/50 daily. Aggressive channel and feature expansion, but rebrand confusion and silent failures show immaturity.
- **IronClaw**: 50/50 daily. Critical security bug + UI regressions from a bug bash. High output, lower trust.

### Tier 2: Structured Maturation (Balanced Velocity, Improving Stability)
- **ZeroClaw**: 40/50 daily. Major v0.7.0 architecture transition. RFC-driven, closing long-standing issues, but release pipeline at risk.
- **Hermes Agent**: 50/50 daily. Shipping releases (v0.10.0) with clear value, but Matrix migration caused regressions.
- **Moltis**: 10/18 daily. Strongest closure rate relative to size. Code indexing is a bold, coherent bet.

### Tier 3: Stabilization / Consolidation (Lower Volume, Higher Quality Focus)
- **NanoBot**: 13/56. Pre-release batching. Focused on production hardening (SSE, Teams, spawn tools).
- **NullClaw**: 13/14. Exceptional close rate (12/13 issues). Zig 0.16 migration + security fixes.
- **PicoClaw**: 12/27. Steady nightly rhythm. WhatsApp channel needs attention.

### Tier 4: Stalled / Minimal / Internal
- **NanoClaw**: 17 PRs but high duplicate churn, review backlog, stalled memory PRs.
- **LobsterAI**: 8 PRs, zero issues, zero comments. Engineering-driven, not community-driven.
- **TinyClaw, ZeptoClaw**: No activity.

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:------|:---------|:-----------------|
| **Provider fragmentation is the #1 tax on engineering teams** | Every project had active provider breakage today (OpenClaw Codex, NanoBot MiniMax/Groq, Hermes Copilot, Moltis Gemini/OpenRouter/Fireworks, IronClaw Azure). | Invest in **provider-agnostic test harnesses** and graceful fallback pipelines. Static model catalogs are becoming liabilities; dynamic discovery is emerging (OpenClaw #10687, NanoBot #3175). |
| **Enterprise messaging channels are table stakes, not differentiators** | Teams, Slack, Discord, Matrix, WhatsApp, Signal, Feishu, WeCom all actively developed across 6+ projects. | Channel coverage is necessary but not sufficient. **Reliability of auth, E2EE, and media handling** (Matrix OTKs, WhatsApp LID migration) is where projects win or lose. |
| **Memory and context architecture is the next battleground** | OpenClaw Memory v2, NanoBot memory critique, NanoClaw mem0-graph, Moltis code indexing, ZeroClaw multi-query retrieval. | Simple `history.jsonl` + summary approaches are hitting ceilings. Developers should evaluate **structured memory backends** (vector + graph + FTS) early. |
| **Voice and multi-modal I/O is accelerating** | Gemini TTS (OpenClaw), Typecast TTS PR, Discord voice fixes (Hermes), SIP channel (CoPaw). | Text-only agents are becoming legacy. Plan for **streaming STT/TTS pipelines** and native vision input (not tool-call vision). |
| **Observability and safety guardrails are production blockers** | NanoBot SMTP self-loop, infinite tool-call loop; IronClaw Engine V2 secret bypass; ZeroClaw context spillage. | Autonomous agents need **cost/runaway circuit breakers**, secret scanning, and traceable session isolation before enterprise adoption. |
| **Local/edge deployment demand is rising** | LM Studio Easy Connect (PicoClaw #28), vLLM compatibility (CoPaw #3438), llama.cpp uninstall (CoPaw #3507), NullClaw Debian build friction. | Cloud-default architectures alienate a growing privacy/self-host segment. **First-class local model provider onboarding** is a competitive advantage. |
| **Architecture transitions to microkernels / workspace splits** | ZeroClaw microkernel RFC (#5574), NullClaw crate decomposition, Moltis code indexing as standalone subsystem. | Monolithic agent frameworks are hitting compile-time and maintainability limits. Expect **modular, service-oriented agent architectures** to proliferate. |

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-17

## 1. Today's Overview

NanoBot saw **very high development velocity** over the past 24 hours with **56 PRs updated** (31 merged/closed, 25 open) and **13 issues active** (9 open, 4 closed). The project is in a rapid iteration phase with no new release cut, suggesting maintainers are batching changes toward a larger upcoming version. Activity spans core agent behavior, provider resilience, channel expansion (Teams, Discord, WebSocket), memory/transcript systems, and infrastructure (CI/CD). Community engagement is strong, particularly from Chinese-speaking users reporting production bugs and configuration pain points.

---

## 2. Releases

**No new releases** (v0.1.5.post1 remains latest).

Notable context: Issue [#3190](https://github.com/HKUDS/nanobot/issues/3190) reported a **major breakage** when upgrading from v0.1.5 → v0.1.5.post1, which was closed after discussion (likely memory-format related). The absence of a new release today suggests maintainers may be stabilizing before v0.1.6.

---

## 3. Project Progress

### Merged/Closed PRs (selected highlights)

| PR | Description | Significance |
|---|---|---|
| [#3222](https://github.com/HKUDS/nanobot/pull/3222) | **SSE streaming** for `/v1/chat/completions` (`stream=true`) | Long-requested API parity; wires up existing agent-loop callbacks |
| [#3219](https://github.com/HKUDS/nanobot/pull/3219) | **Cross-channel session persistence** for cron jobs | Fixes architectural bug where cron used ephemeral sessions; enables follow-up on scheduled tasks |
| [#3197](https://github.com/HKUDS/nanobot/pull/3197) | **Microsoft Teams channel** reintroduced | Major platform expansion, fully cleaned up from nightly |
| [#3177](https://github.com/HKUDS/nanobot/pull/3177) | **MyTool** — runtime self-inspection tool | Agent can now introspect its own model, tokens, iterations, config |
| [#3171](https://github.com/HKUDS/nanobot/pull/3171) | **Discord channel filtering** (`allowChannels`) | Operational hardening for multi-channel deployments |
| [#3175](https://github.com/HKUDS/nanobot/pull/3175) | **Dynamic LLM providers** from config + cron test fix | Reduces code changes needed for new providers |
| [#3210](https://github.com/HKUDS/nanobot/pull/3210) | **Tool registry definition caching** | Performance optimization preserving prompt cache hit rates |
| [#3179](https://github.com/HKUDS/nanobot/pull/3179) | **WebSocket tooling, session lifecycle, reasoning, `chat_id`** | Real-time channel infrastructure advancement |

---

## 4. Community Hot Topics

### Most Active Threads

| Item | Comments | Topic | Underlying Need |
|---|---|---|---|
| [#3190](https://github.com/HKUDS/nanobot/issues/3190) | 7 | v0.1.5.post1 upgrade failure | **Trust in upgrade safety**; users need migration guides or backward-compatible memory formats |
| [#3143](https://github.com/HKUDS/nanobot/issues/3143) | 6 | Frequent LLM error 1214 ("messages parameter is illegal") | **Token consolidation reliability** at context-window boundaries; MiniMax/gateway compatibility |
| [#3107](https://github.com/HKUDS/nanobot/issues/3107) | 5 | Meta-suggestion list (status visibility, timeout, fallback, multi-provider) | **Operational transparency and resilience** — users running NanoBot in teams need observability and graceful degradation |
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) | *active discussion* | `/stop` loses user message + tool calls | **Session integrity during interruption** |

**Analysis:** The community is heavily focused on **production hardening** — not missing features, but making the agent reliable under real load, multi-user scenarios, and non-OpenAI API gateways.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| 🔴 **High** | [#3220](https://github.com/HKUDS/nanobot/issues/3220) | **Infinite empty tool-call loop** when non-compliant API gateways inject `tool_calls` under wrong `finish_reason` | **Yes:** [#3225](https://github.com/HKUDS/nanobot/pull/3225) open |
| 🔴 **High** | [#3215](https://github.com/HKUDS/nanobot/issues/3215) | **SMTP email self-loop** — agent replies to itself thousands of times when emailing itself | No PR yet |
| 🟡 **Medium** | [#3190](https://github.com/HKUDS/nanobot/issues/3190) | Memory incompatibility crash on v0.1.5.post1 upgrade | Closed; root cause unclear, may need better migration handling |
| 🟡 **Medium** | [#3143](https://github.com/HKUDS/nanobot/issues/3143) | Recurrent LLM error 1214 during token consolidation | Open; likely gateway-specific message-format edge case |
| 🟡 **Medium** | [#2373](https://github.com/HKUDS/nanobot/issues/2373) | **MiniMax API** "invalid function arguments json string" errors | Open; ongoing provider compatibility issue |
| 🟡 **Medium** | [#3206](https://github.com/HKUDS/nanobot/issues/3206) | Gemini provider "Multiple authentication credentials received" | Open; likely conflict between env var and config key passing |
| 🟢 **Low** | [#3213](https://github.com/HKUDS/nanobot/issues/3213) | `GroqTranscriptionProvider` ignores `apiBase` from config | **Yes:** [#3226](https://github.com/HKUDS/nanobot/pull/3226) open (OpenAI symmetry) |

**Stability assessment:** Two **high-severity** bugs without merged fixes yet. The infinite loop and email self-loop are both **autonomous agent safety issues** that could cause runaway cost or spam.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version |
|---|---|---|
| **Per-phase model overrides** in heartbeat (eval vs. exec) | [#3156](https://github.com/HKUDS/nanobot/pull/3156) | **High** — open, well-scoped, cost-optimization feature |
| **LLM provider fallback / circuit breaker** | [#3107](https://github.com/HKUDS/nanobot/issues/3107) (request), [#3205](https://github.com/HKUDS/nanobot/pull/3205) (Responses API circuit breaker) | **High** — PR already open, aligns with resilience theme |
| **Spawn status/cancel tools + spawn params** | [#3223](https://github.com/HKUDS/nanobot/pull/3223) | **High** — multi-agent orchestration is clearly a priority |
| **Git-based memory staleness annotations** | [#3212](https://github.com/HKUDS/nanobot/pull/3212) | **Medium-High** — addresses core memory limitation feedback |
| **Session transcript logging** | [#3224](https://github.com/HKUDS/nanobot/pull/3224) | **Medium-High** — auditability feature, config-gated |
| **OAuth Device Flow (`nanobot auth`)** | [#3221](https://github.com/HKUDS/nanobot/pull/3221) | **Medium** — large UX change, may need more review |
| **LM Studio first-class provider** | [#3185](https://github.com/HKUDS/nanobot/issues/3185) | **Medium** — closed without merge? (issue closed, no linked PR shown) |
| **Discord bot-to-bot responses** | [#3217](https://github.com/HKUDS/nanobot/issues/3217) | **Medium** — small config change, niche use case |

---

## 7. User Feedback Summary

### Pain Points
- **Gateway/provider fragility:** MiniMax, Gemini, Groq, and generic OpenAI-compatible proxies all have format/auth edge cases. Users on non-OpenAI providers experience disproportionate friction.
- **Memory system ceiling:** Issue [#3227](https://github.com/HKUDS/nanobot/issues/3227) articulates a thoughtful critique — `history.jsonl` + `MEMORY.md` + Dream consolidation loses detail in long/large projects. This is **the most upvoted recent issue** (👍 1).
- **Observability black box:** Users want `status` to show task counts, retry visibility, timeout configurability, and spawn visibility ([#3107](https://github.com/HKUDS/nanobot/issues/3107), [#2526](https://github.com/HKUDS/nanobot/pull/2526)).
- **Operational safety:** The SMTP loop and infinite tool-call loop reveal missing guardrails for autonomous edge cases.

### Positive Signals
- Strong appreciation for codebase quality ("整洁、轻巧、容易上手" — clean, lightweight, easy to get started) ([#3227](https://github.com/HKUDS/nanobot/issues/3227)).
- Active multi-platform adoption (Discord, Feishu, MSTeams, Email, WebSocket) indicates NanoBot is being treated as a serious integration layer.

---

## 8. Backlog Watch

### Issues/PRs needing maintainer attention

| Item | Age | Why it matters |
|---|---|---|
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) | ~3 weeks | **Session data loss on `/stop`** — fundamental UX bug in Telegram and likely other channels. High comment activity, still open. |
| [#2220](https://github.com/HKUDS/nanobot/issues/2220) | ~1 month | **ContextVar for task-local tool routing** — async-safety architectural proposal. Small scope but unreviewed. |
| [#2373](https://github.com/HKUDS/nanobot/issues/2373) | ~3+ weeks | **MiniMax breakage** — enterprise user (WeChat Work integration) blocked. |
| [#3107](https://github.com/HKUDS/nanobot/issues/3107) | ~4 days | **Meta-feature request** with partial checkboxes — would benefit from maintainer triage to split into trackable issues. |

**Recommendation:** The project would benefit from a focused **stability sprint** — merging the two high-severity bug fixes, resolving `/stop` session loss, and establishing clearer provider-compatibility testing before expanding channels further.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-17

---

## 1. Today's Overview

Hermes Agent saw **high activity** over the past 24 hours with **50 updated issues** (40 open/active, 10 closed) and **50 updated PRs** (34 open, 16 merged/closed), alongside the **v0.10.0 "Tool Gateway" release**. The project is clearly in an active shipping phase, with substantial community engagement around gateway/messaging integrations, model provider compatibility fixes, and enterprise deployment stability. However, the high ratio of open to closed items suggests maintainer bandwidth may be stretched, and several regressions in Matrix and Discord gateways indicate growing pains from rapid feature expansion.

---

## 2. Releases

### [v0.10.0 — Hermes Agent (2026.4.16)](https://github.com/nousresearch/hermes-agent/releases/tag/v2026.4.16)
**"The Tool Gateway Release"**

| Aspect | Details |
|--------|---------|
| **Headline** | Paid Nous Portal subscribers can now use **web search, image generation, text-to-speech, and browser automation** through their existing subscription — **zero additional API keys required**. |
| **Breaking changes** | None explicitly documented in release notes. |
| **Migration notes** | Users on Nous Portal should verify subscription linkage; no code/API key changes needed for new tool access. |

This release represents a significant monetization and UX milestone, reducing friction for premium users by bundling multi-modal tools behind a single subscription.

---

## 3. Project Progress

### Merged/Closed PRs Today (16 total, selected highlights)

| PR | Author | Summary | Link |
|---|---|---|---|
| #11283 | teknium1 (salvaging malaiwah) | **Discord voice fix**: Strip RTP padding before DAVE/Opus decode — resolves deaf/intermittent STT issues | [PR #11283](https://github.com/nousresearch/hermes-agent/pull/11283) |
| #11272 | malaiwah | Same Discord RTP padding fix (original PR, closed in favor of salvage) | [PR #11272](https://github.com/nousresearch/hermes-agent/pull/11272) |
| #10779 | newarthur | **Google Gemini CLI OAuth PKCE provider** — first-class `google-gemini-cli` auth without API keys | [PR #10779](https://github.com/nousresearch/hermes-agent/pull/10779) |
| #10176 | sliverp | **Google OAuth for Gemini provider** (Authorization Code + PKCE S256) | [PR #10176](https://github.com/nousresearch/hermes-agent/pull/10176) |
| #6745 | Protect | **Gemini CLI OAuth provider** via local Gemini CLI login | [PR #6745](https://github.com/nousresearch/hermes-agent/pull/6745) |
| #10725 | fxfitz | **Matrix auto-join fix**: Register `MembershipEventDispatcher` after `mautrix-python` migration | [PR #10725](https://github.com/nousresearch/hermes-agent/pull/10725) |
| #10094 | yyong-brs | Matrix DM auto-join fix (related to above migration) | [PR #10094](https://github.com/nousresearch/hermes-agent/pull/10094) |

### Features Advanced
- **Google Gemini ecosystem**: Three related OAuth PRs merged, showing coordinated effort to eliminate API-key friction for Gemini users.
- **Discord voice reliability**: RTP padding fix closes a protocol-level bug affecting E2EE voice channels.
- **Matrix gateway recovery**: Post-migration regressions (`mautrix-python` replacing `matrix-nio`) are being actively patched.

---

## 4. Community Hot Topics

### Most Active Issues/PRs by Engagement

| # | Title | Comments | 👍 | Link | Analysis |
|---|-------|----------|-----|------|----------|
| #73 | Matrix Protocol Support for Messaging Gateway | 9 | 9 | [Issue #73](https://github.com/nousresearch/hermes-agent/issues/73) | **Long-standing demand for privacy/self-hosted messaging**. Native Matrix support is a gateway priority; recent `mautrix-python` migration shows investment here. |
| #3725 | Rocket Chat support | 3 | 1 | [Issue #3725](https://github.com/nousresearch/hermes-agent/issues/3725) | Enterprise/self-hosted chat continues to drive gateway requests. |
| #8174 | Switch to mautrix-python breaks matrix gateway encryption | 2 | 3 | [Issue #8174](https://github.com/nousresearch/hermes-agent/issues/8174) | **Closed today** — encryption key generation broken post-migration. High-impact for privacy-focused Matrix users. |
| #10259 | Discord slash command sync fails (50035, >8KB payload) | 2 | 3 | [Issue #10259](https://github.com/nousresearch/hermes-agent/issues/10259) | **Scalability ceiling** — 80+ default skills exceed Discord's command payload limit. Needs architectural fix (pagination or dynamic registration). |
| #10880 | `/model` switch does not call `load_from_disk` — stale memory snapshot | 2 | 0 | [Issue #10880](https://github.com/nousresearch/hermes-agent/issues/10880) | **Closed today** — memory consistency bug on model switching. |
| #7641 | Native multimodal input instead of `vision_analyze` tool | 1 | 4 | [Issue #7641](https://github.com/nousresearch/hermes-agent/issues/7641) | Strong user demand to bypass tool-call overhead for image inputs on multimodal models like Kimi K2.5. |

### Underlying Needs
- **Gateway diversity**: Users want Hermes in *their* infrastructure (Matrix, Rocket.Chat, Teams) — not just SaaS platforms.
- **Performance at scale**: Discord's 8KB limit and vision tool latency reveal friction as the default skill set grows.
- **Memory/model correctness**: Switching models mid-session must not corrupt state.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? | Link |
|----------|-------|-------------|---------|------|
| 🔴 **High** | #11249 | `APIConnectionError` on every call — `httpx.Client` shared due to dict mutation in `_create_openai_client()` | **No** | [Issue #11249](https://github.com/nousresearch/hermes-agent/issues/11249) |
| 🔴 **High** | #11258 | Gateway self-restart exits cleanly into draining state, stays dead under `systemd Restart=on-failure` | **No** | [Issue #11258](https://github.com/nousresearch/hermes-agent/issues/11258) |
| 🟡 **Medium** | #11238 | Matrix bot does not auto-accept invites in v0.9.0 | #10725 merged, but #11238 still open — may need follow-up | [Issue #11238](https://github.com/nousresearch/hermes-agent/issues/11238) |
| 🟡 **Medium** | #10259 | Discord slash command sync fails with 80+ skills (>8KB) | **No** | [Issue #10259](https://github.com/nousresearch/hermes-agent/issues/10259) |
| 🟡 **Medium** | #11129 | ACP Copilot broken: `float()` argument must be string/real number, not `Timeout` | **No** | [Issue #11129](https://github.com/nousresearch/hermes-agent/issues/11129) |
| 🟡 **Medium** | #11233 | Error classifier crashes with `AttributeError` when API returns dict-typed `message` | **No** | [Issue #11233](https://github.com/nousresearch/hermes-agent/issues/11233) |
| 🟡 **Medium** | #10721 | Summary model fallback crashes with `NameError` (wrong args in `_generate_summary`) | **No** | [Issue #10721](https://github.com/nousresearch/hermes-agent/issues/10721) |
| 🟡 **Medium** | #11171 | Delegation with missing tools causes infinite retry loop on Google models | **No** | [Issue #11171](https://github.com/nousresearch/hermes-agent/issues/11171) |
| 🟡 **Medium** | #11284 | QQbot cannot process images — `url_safety` blocks Tencent CDN due to proxy IP flagged as private | **No** | [Issue #11284](https://github.com/nousresearch/hermes-agent/issues/11284) |
| 🟢 **Low** | #11201 | `maybe_auto_title` fires on second exchange despite first-exchange contract | **No** | [Issue #11201](https://github.com/nousresearch/hermes-agent/issues/11201) |
| 🟢 **Low** | #11197 | `install.sh` needs `xz-utils` (silent extraction failure) | **No** | [Issue #11197](https://github.com/nousresearch/hermes-agent/issues/11197) |

**Closed today**: #10880 (memory snapshot stale), #8174 (Matrix encryption), #10817 (macOS launchd `TERMINAL_CWD` poisoning), #11137 (Claude Opus 4-7 thinking type), #11267/#11272/#11283 (Discord RTP padding).

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version | Rationale |
|-------|---------|---------------------------|-----------|
| #73 | Native Matrix protocol support | **High** | Already partially implemented; `mautrix-python` migration complete, bugs being patched. |
| #9512 | Microsoft Teams gateway | Medium | Follows existing gateway pattern; enterprise demand but requires Teams bot framework work. |
| #3725 | Rocket Chat support | Medium | Small scope claimed (<50 lines), but niche compared to Matrix/Teams. |
| #7641 | Native multimodal input (bypass `vision_analyze`) | Medium-High | 4 upvotes; aligns with v0.10.0's multi-modal tool push. Architectural change needed. |
| #11248 | Pod-hop handoff (`/hop` + stateless restart recovery) | Medium | Infrastructure resilience feature; relevant for cloud deployments. |
| #11243 | Native `reasoning_effort` support for Mistral AI | Medium | Provider-compatibility patch; typical of rapid-fire Hermes fixes. |
| #4289 | `/model` slash command in CLI chat | Medium | Small UX gap; community PR likely. |

---

## 7. User Feedback Summary

### Pain Points
- **Gateway reliability**: Matrix migration to `mautrix-python` caused encrypted-room breakage and invite-handling regressions (#8174, #11238). Users on self-hosted platforms feel whiplash.
- **Installation friction**: `install.sh` silently fails without `xz-utils` (#11197); NixOS/darwin support gaps (#9782).
- **Model/provider quirks**: Claude Opus 4-7 thinking types (#11137), Copilot ACP timeouts (#11129), Google model infinite loops (#11171) — provider abstraction layer still leaky.
- **Operational stability**: Systemd deployments can lose gateway permanently after self-restart (#11258); shared `httpx.Client` causes total API failure (#11249).

### Positive Signals
- **v0.10.0 bundled tools** are well-received as a subscription value-add.
- Strong appreciation for **open-source gateway diversity** (Matrix, Telegram, Discord, QQ, etc.).
- Gemini OAuth merges eliminate API-key copy-paste, a recurring UX win.

---

## 8. Backlog Watch

### Long-Unanswered Important Items Needing Maintainer Attention

| # | Title | Age | Why It Matters | Link |
|---|-------|-----|----------------|------|
| #73 | Matrix Protocol Support | ~7 weeks | 9 comments, 9 upvotes; foundational self-hosted messaging request. Partially shipped but still open. | [Issue #73](https://github.com/nousresearch/hermes-agent/issues/73) |
| #4289 | `/model` slash command in CLI chat | ~2.5 weeks | Small UX gap; no maintainer response visible. | [Issue #4289](https://github.com/nousresearch/hermes-agent/issues/4289) |
| #4692 | Feat/ink refactor (React/Ink TUI) | ~2 weeks | Large architectural PR (new terminal UI); high risk/reward, needs review bandwidth. | [PR #4692](https://github.com/nousresearch/hermes-agent/pull/4692) |
| #9039 | Copilot `claude-opus-4.6-1m` (1M context) support | ~4 days | Distinct model ID from `claude-opus-4.6`; users hitting context-window limits need this. | [PR #9039](https://github.com/nousresearch/hermes-agent/pull/9039) |
| #11291 | Remote file sync on teardown (salvage of #8189) | **New** | Complex infrastructure feature; prior attempts stalled. Needs careful review to avoid another stall cycle. | [PR #11291](https://github.com/nousresearch/hermes-agent/pull/11291) |

---

*Digest generated from github.com/nousresearch/hermes-agent data for 2026-04-17.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-17

## 1. Today's Overview

PicoClaw saw **high activity** over the last 24 hours with **12 issues updated** (10 open/active, 2 closed) and **27 pull requests** (18 open, 9 merged/closed). The project released a new **v0.2.6 nightly build**, indicating steady iteration toward the next patch. A significant portion of activity centered on **provider/channel reliability**, **authentication UX**, and **dependency maintenance**. The large volume of dependabot PRs suggests active upkeep of the Go and React frontend stacks. Community engagement is healthy, with several long-standing enhancement requests receiving renewed attention.

---

## 2. Releases

- **v0.2.6-nightly.20260416.f32b303d** — [Nightly Build](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)
  - Automated nightly ahead of `v0.2.6`.
  - **Status:** Potentially unstable; no explicit changelog beyond the [full diff](https://github.com/sipeed/picoclaw/compare/v0.2.6...main).
  - **Notable pre-release signals:** Multiple PRs merged today around network fallback, cron session isolation, and auth hardening likely land in this nightly.

---

## 3. Project Progress

### Merged/Closed PRs Today (9 total)

| PR | Author | Summary | Link |
|---|---|---|---|
| **#2547** | lc6464 | **feat(network):** Adds dedicated `network` failover reason for transport-level failures (TLS, DNS, EOF, connection reset/refused), improving provider fallback reliability. | [PR #2547](https://github.com/sipeed/picoclaw/pull/2547) |
| **#2503** | cytown | **refactor:** Makes the agent loop support **parallel processing** of user messages with correct response routing; documentation updated. | [PR #2503](https://github.com/sipeed/picoclaw/pull/2503) |
| **#2474** | srcrs | **fix(cron):** Isolates cron job executions by giving each run a unique session key (`cron-{jobID}-{timestamp}`), preventing conversation history leakage across runs. | [PR #2474](https://github.com/sipeed/picoclaw/pull/2474) |
| **#2500** | cytown | **chore(build):** Removes useless backend output for `platform-token`. | [PR #2500](https://github.com/sipeed/picoclaw/pull/2500) |

**Key advances:**
- **Provider resilience:** Network errors now correctly trigger model fallback instead of hard failure.
- **Agent architecture:** Parallel message processing landed, a meaningful scalability improvement.
- **Cron reliability:** Fixed a state-bleed bug that could corrupt multi-run scheduled tasks.

---

## 4. Community Hot Topics

### Most Active Discussions

| # | Title | Comments | Link | Underlying Need |
|---|---|---|---|---|
| **#28** | Feat Request: LM Studio Easy Connect | **14** | [Issue #28](https://github.com/sipeed/picoclaw/issues/28) | Users want **local/self-hosted LLM connectivity** with low-friction setup, especially on edge devices (Android). This signals demand for broader local-model provider support beyond cloud APIs. |
| **#1249** | SKILL.md not auto-injected into LLM context when skill is referenced | **3** (closed) | [Issue #1249](https://github.com/sipeed/picoclaw/issues/1249) | Skill activation UX is unintuitive; users expect **implicit skill loading** based on natural language rather than manual invocation. |
| **#2548** | [Error] Multiple authentication credentials received | **2** | [Issue #2548](https://github.com/sipeed/picoclaw/issues/2548) | Config ambiguity when mixing `api_key` fields in `config.json` vs. environment/auth-store causes **credential collision errors**; users need clearer precedence rules. |
| **#2533** | `picoclaw auth login --provider <>` always launches a browser. Add `--no-browser`? | **2** | [Issue #2533](https://github.com/sipeed/picoclaw/issues/2533) | Headless/CI/container deployments need **non-interactive OAuth flows**; browser auto-launch is a deployment blocker. |

**Analysis:** The community is pushing hard on **deployment flexibility** (headless auth, local models) and **cognitive simplicity** (skills that "just work"). These are maturity signals for an agent framework moving from prototype to production use.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| **High** | [#2540](https://github.com/sipeed/picoclaw/issues/2540) | `whatsapp_native`: `allow_from` **silently drops all messages** from LID-migrated accounts due to format mismatch and device-index drift. | **No** |
| **High** | [#2541](https://github.com/sipeed/picoclaw/issues/2541) | `whatsapp_native`: **Four compounded defects** completely break `group_trigger.mention_only`. Author has a local patch but has not yet PR'd. | **No** |
| **Medium** | [#2548](https://github.com/sipeed/picoclaw/issues/2548) | "Multiple authentication credentials received" error when provider config contains both `api_key` and auth-store tokens. | **No** |
| **Medium** | [#2550](https://github.com/sipeed/picoclaw/issues/2550) | `picoclaw auth login --provider google-antigravity` **does not refresh token expiration** unless using browser OAuth. | **No** |
| **Medium** | [#2513](https://github.com/sipeed/picoclaw/issues/2513) | Gateway start abnormal on Debian 13 with `digntalk` channel; process dies shortly after launch. | **No** |
| **Medium** | [#2302](https://github.com/sipeed/picoclaw/issues/2302) | Web UI requires **frequent manual re-authentication** for antigravity API (`PERMISSION_DENIED`). | **No** |
| **Low** | [#2270](https://github.com/sipeed/picoclaw/pull/2270) | Panic in `collectSensitive` when iterating map values containing `SecureString` due to non-addressable reflection values. | **Yes — [PR #2270](https://github.com/sipeed/picoclaw/pull/2270)** (open, ready) |

**Stability assessment:** WhatsApp native channel is experiencing **active reliability issues** with two severe, well-diagnosed bugs. Authentication/token lifecycle remains a recurring friction point across providers. The merged network-fallback PR (#2547) improves systemic resilience.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version |
|---|---|---|
| [#2549](https://github.com/sipeed/picoclaw/pull/2549) | **`--no-browser` flag for OAuth login`** — PR already open by lc6464. | **High** |
| [#2546](https://github.com/sipeed/picoclaw/issues/2546) | **OAuth 2.1 + PKCE for MCP servers**, addable from dashboard. | Medium — aligns with dashboard simplification trend but may need design review. |
| [#1067](https://github.com/sipeed/picoclaw/issues/1067) | **Integrate Authula** for authentication/authorization framework-wide. | Low-Medium — architectural; may be deferred until post-v0.3. |
| [#28](https://github.com/sipeed/picoclaw/issues/28) | **LM Studio Easy Connect** — local model provider onboarding. | Medium — strong community demand, but may depend on provider abstraction roadmap. |
| [#2563](https://github.com/sipeed/picoclaw/pull/2563) | **Frontend file download support** for `pico` web channel attachments. | **High** — PR open, scoped, end-to-end implementation complete. |

**Predicted next-release inclusions:** `--no-browser` OAuth, frontend file downloads, and the parallel agent loop are likely to ship in or shortly after `v0.2.6`.

---

## 7. User Feedback Summary

### Real Pain Points

| Theme | Evidence | Sentiment |
|---|---|---|
| **Authentication friction** | [#2533](https://github.com/sipeed/picoclaw/issues/2533), [#2550](https://github.com/sipeed/picoclaw/issues/2550), [#2302](https://github.com/sipeed/picoclaw/issues/2302), [#2548](https://github.com/sipeed/picoclaw/issues/2548) | 😤 Frustrated — token refresh, browser requirements, and credential conflicts block automation and remote deployment. |
| **WhatsApp channel fragility** | [#2540](https://github.com/sipeed/picoclaw/issues/2540), [#2541](https://github.com/sipeed/picoclaw/issues/2541) | 😤 Frustrated — silent message drops and broken group triggers make the channel unreliable for production bots. |
| **Skill discoverability/activation** | [#1249](https://github.com/sipeed/picoclaw/issues/1249) | 😕 Confused — users expect natural language skill invocation without manual context management. |
| **Local model support** | [#28](https://github.com/sipeed/picoclaw/issues/28) | 🤞 Hopeful — strong interest in running PicoClaw on edge/Android with LM Studio. |
| **Gateway stability** | [#2513](https://github.com/sipeed/picoclaw/issues/2513) | 😰 Concerned — crashes on startup undermine confidence in self-hosting. |

**Overall:** Users are **invested but blocked** by auth UX and channel stability. The framework is attracting production-oriented users, raising the bar for reliability.

---

## 8. Backlog Watch

### Items Needing Maintainer Attention

| # | Title | Age | Why It Needs Attention |
|---|---|---|---|
| **#28** | [Feat Request: LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28) | ~2 months | **14 comments**, highest engagement of any open issue. Represents a major user segment (local/edge deployment). No maintainer response visible in summary. |
| **#1067** | [Integrate Authula into PicoClaw for Authentication/Authorization](https://github.com/sipeed/picoclaw/issues/1067) | ~1.5 months | Addresses the **root cause** of multiple auth-related complaints. Currently unassigned and low-priority; may need roadmap clarification. |
| **#2540 / #2541** | WhatsApp native channel defects | **Same-day** | Two severe, well-diagnosed bugs with **silent failures**. #2541 author claims a working local patch; maintainers should reach out to coordinate a PR. |
| **#2513** | Gateway start abnormal | ~2 days | No comments beyond initial report; startup crash on Debian with a specific channel warrants triage. |
| **#2270** | Fix panic in `collectSensitive` | ~2 weeks | PR is open with regression tests. Ready for review/merge to prevent runtime panics. |

---

*Digest compiled from GitHub activity for `sipeed/picoclaw` on 2026-04-17.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-17

---

## 1. Today's Overview

NanoClaw saw **high community activity** over the last 24 hours with **17 pull requests updated** (11 still open, 6 merged/closed) and **3 new issues opened**, though **zero new releases** were published. The project is experiencing a surge of architectural proposals and skill additions, particularly around agentic UX, memory systems, and API interoperability. However, the high volume of duplicate or rapidly superseded PRs (e.g., three closed `add-api-server` PRs before a final open one) suggests some friction in contribution workflow or review turnaround. No critical security incidents or production outages were reported.

---

## 2. Releases

**No new releases** today.

---

## 3. Project Progress

### Merged/Closed PRs (6 items)

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #1793 | topcoder1 | Added a **1MB body size limit** to `readBody()` in the trust gateway HTTP server, returning 413 for oversized payloads to prevent DoS. | [qwibitai/nanoclaw#1793](https://github.com/qwibitai/nanoclaw/pull/1793) |
| #1794 | topcoder1 | Superseded #1786 — claimed full implementation of **14 remaining items** from the 7-layer scope expansion roadmap (webhooks, LLM validation, browser watchers, etc.). | [qwibitai/nanoclaw#1794](https://github.com/qwibitai/nanoclaw/pull/1794) |
| #1786 | topcoder1 | Earlier iteration of the **7-layer scope expansion roadmap**; closed in favor of #1794. | [qwibitai/nanoclaw#1786](https://github.com/qwibitai/nanoclaw/pull/1786) |
| #1799 | robbyczgw-cla | Closed duplicate of `add-api-server` skill. | [qwibitai/nanoclaw#1799](https://github.com/qwibitai/nanoclaw/pull/1799) |
| #1798 | robbyczgw-cla | Closed duplicate of `add-api-server` skill. | [qwibitai/nanoclaw#1798](https://github.com/qwibitai/nanoclaw/pull/1798) |
| #1797 | robbyczgw-cla | Closed duplicate of `add-api-server` skill. | [qwibitai/nanoclaw#1797](https://github.com/qwibitai/nanoclaw/pull/1797) |

**Notable advances:**
- **Security hardening:** Trust gateway now has basic DoS protection via body size limits.
- **Roadmap execution:** The 7-layer architecture expansion (event bus, executor pool, trust engine, etc.) appears to be landing in large chunks, though the rapid closure/resubmission of #1786 → #1794 warrants scrutiny for review depth.

---

## 4. Community Hot Topics

### Most Active Threads

| # | Item | Author | Activity | Link |
|:---|:---|:---|:---|:---|
| 1 | **#1804** — Multiple concurrent Slack workspaces | davekim917 | 1 comment, active discussion | [qwibitai/nanoclaw#1804](https://github.com/qwibitai/nanoclaw/issues/1804) |
| 2 | **#1795 / #1794 / #1786** — 7-layer capability expansion | topcoder1 | Multiple rapid PRs, high architectural stakes | [qwibitai/nanoclaw#1795](https://github.com/qwibitai/nanoclaw/pull/1795) |
| 3 | **#1801** — Agentic UX redesign for Telegram | topcoder1 | Large PR (17 new modules), no comments yet but high scope | [qwibitai/nanoclaw#1801](https://github.com/qwibitai/nanoclaw/pull/1801) |

**Underlying needs:**
- **Enterprise/multi-tenant Slack support (#1804):** Users want to run one NanoClaw instance across multiple Slack workspaces, but the current `channelType`-keyed registry prevents this. This signals growing production adoption beyond single-workspace hobby deployments.
- **Architectural scalability (#1795):** The 7-layer expansion reflects community pressure to evolve NanoClaw from a script-runner into a robust agent orchestration platform with event-driven decoupling, warm container pools, and trust scoring.
- **Conversational UX polish (#1801):** Telegram users expect visible agent "presence" — status indicators, formatted responses, and interactive elements — not raw text dumps.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---|
| **Medium** | [#1805](https://github.com/qwibitai/nanoclaw/issues/1805) | **Telegram typing indicator missing during long agent processing** — an 11-minute silent processing window caused user confusion and perceived freeze. | **None yet** |
| **Low-Medium** | [#1803](https://github.com/qwibitai/nanoclaw/issues/1803) | **Zero test coverage for IPC authorization boundary** — privilege gate preventing cross-group message injection is untested. | **None yet** |
| **Low (mitigated)** | [#1793](https://github.com/qwibitai/nanoclaw/pull/1793) | Trust gateway `readBody()` was unbounded; now capped at 1MB. | **Merged** |

**Assessment:** No critical crashes or data-loss bugs reported. The Telegram typing indicator issue (#1805) is the most user-facing stability gap — long-running agents without feedback loops directly degrade trust in the system.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **OpenAI-compatible API server skill** | #1800 (robbyczgw-cla) | **High** | After 3 rapid iterations (#1797–1799 closed), the contributor has converged on a clean 208-line implementation. Strong demand for NanoClaw-as-API-backend. |
| **Agentic Telegram UX redesign** | #1801 (topcoder1) | **Medium-High** | Large, well-scoped PR with 17 modules. Aligns with #1805 bug feedback. Risk: review burden may delay merge. |
| **Persistent memory with mem0 + graph** | #1256 (klapom) | **Medium** | Reuses existing Qdrant/Neo4j infra, zero new containers. Mature dependency (mem0, 50k+ stars). Stalled since March; needs maintainer review. |
| **Matrix channel with E2EE** | #1624 (bitcryptic-gw) | **Medium** | Follows established channel patterns. E2EE is a differentiator for privacy-conscious users. Open since April 4. |
| **Multi-workspace Slack support** | #1804 (davekim917) | **Medium** | Clear enterprise need, but requires registry refactoring. May need design consensus before implementation PR. |
| **OpenCode agent provider** | #1776 (talmosko-code) | **Medium** | Expands v2 provider ecosystem. Clean alignment with existing `poll-loop` model. |
| **pnpm migration** | #1771 (meeech) | **Medium** | Infrastructure modernization with broad toolchain changes. Typically merged in quiet periods to avoid conflicts. |
| **Daily news briefing skill** | #886 (singha1337) | **Lower** | Open since March 9, labeled "Needs Review." Swarm architecture is interesting but niche. |

---

## 7. User Feedback Summary

### Real Pain Points

| Issue | Evidence | Implication |
|:---|:---|:---|
| **Silent long-running agents** | #1805: 11-minute Telegram processing with zero status caused owner to believe the bot had frozen | Users need **progress visibility**, not just final outputs |
| **Single-workspace Slack limitation** | #1804: registry keyed by `channelType` prevents multi-tenant Slack usage | NanoClaw is hitting **scaling boundaries** for team/company deployments |
| **Missing test coverage on security boundaries** | #1803: IPC auth gate has no tests | Operators running multi-group instances face **unquantified trust risk** |

### Satisfaction Signals
- Strong contributor energy: 17 PRs in 24h shows healthy ecosystem interest.
- Rapid iteration on `add-api-server` suggests responsive contributors and clear demand.

### Dissatisfaction Signals
- Duplicate PR churn (#1797–1800) implies contributors are struggling to land changes, possibly due to slow CI feedback or unclear submission guidelines.
- "Needs Review" PRs like #886 and #1256 have been open for 5+ weeks with no maintainer engagement.

---

## 8. Backlog Watch

The following items are **important but stalled**, risking contributor burnout and missed roadmap opportunities:

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1256](https://github.com/qwibitai/nanoclaw/pull/1256) — mem0-graph skill | ~4 weeks | High contributor fatigue; large feature with clear value | Maintainer review or explicit feedback on blockers |
| [#886](https://github.com/qwibitai/nanoclaw/pull/886) — AI news briefing skill | ~6 weeks | "Needs Review" label with no movement; signals review backlog | Assign reviewer or close with rationale |
| [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) — Matrix channel with E2EE | ~2 weeks | Privacy/community decentralization demand; technically complete | Code review and merge decision |
| [#1727](https://github.com/qwibitai/nanoclaw/pull/1727) — Unraid credential proxy | ~1 week | Infrastructure/homelab user segment; low conflict risk | Review for merge |
| [#1771](https://github.com/qwibitai/nanoclaw/pull/1771) — pnpm migration | ~3 days | High touchpoint surface area; best merged before other big PRs to avoid rebase hell | Priority review and CI validation |

---

**Digest compiled from GitHub activity for qwibitai/nanoclaw on 2026-04-17.**

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-17

## 1. Today's Overview

NullClaw saw **high maintenance velocity** over the past 24 hours with **11 closed PRs** against **3 open ones**, and **12 of 13 updated issues were resolved**. The project is clearly in a **stabilization sprint**: the bulk of merged work fixes regressions in sandbox detection, Docker mounts, provider routing, and session history persistence. A major infrastructure milestone—**migration to Zig 0.16**—also landed. No new release was cut, suggesting the maintainers may be batching fixes before tagging. The single remaining open issue is a documentation request about Tailscale gateway usage.

---

## 2. Releases

**No new releases** (0).

The project has not published a release since the observed batch of fixes. Users building from source should note that `nullclaw version` still reports `"dev"` ([Issue #821](https://github.com/nullclaw/nullclaw/issues/821)), which complicates pinpointing exactly which commit they are running.

---

## 3. Project Progress

### Merged/Closed PRs (11 items)

| PR | Title | Impact |
|---|---|---|
| [#823](https://github.com/nullclaw/nullclaw/pull/823) | Migrate project to Zig 0.16 | **Infrastructure milestone.** Refactored compat layer into `shared`, `fs`, and `net` modules; updated websocket integration for Zig 0.16 stdlib APIs. |
| [#801](https://github.com/nullclaw/nullclaw/pull/801) | fix(security): initialize docker sandbox mount args via factory | **Critical stability fix.** Closed three Docker-related crash issues (#799, #779, #784) by ensuring `detect.zig` uses the proper factory for mount arguments. |
| [#805](https://github.com/nullclaw/nullclaw/pull/805) | fix(security): require runnable linux sandboxes in auto-detect | Hardened Linux sandbox detection so `firejail`/`bubblewrap` must pass a live sandbox test, not just `--version`. Closes #791. |
| [#804](https://github.com/nullclaw/nullclaw/pull/804) | fix(agent): keep unbound sessions on the main agent | Restored routing contract: sessions without bindings now stay on `main` instead of leaking to the first subagent. Closes #793. |
| [#802](https://github.com/nullclaw/nullclaw/pull/802) | fix(agent): persist cli turns into sqlite session history | Fixed SQLite-backed history appearing empty after successful CLI replies. Closes #797. |
| [#803](https://github.com/nullclaw/nullclaw/pull/803) | fix(config): allow local container hostnames for otel http | Relaxed HTTPS enforcement for local container-network OTEL endpoints (e.g., `otel`, `host.containers.internal`). Closes #800. |
| [#806](https://github.com/nullclaw/nullclaw/pull/806) | fix(provider): fall back to responses on chat endpoint 404 | Custom OpenAI-compatible providers now gracefully fall back to Responses API when `/chat/completions` 404s. Closes #766. |
| [#790](https://github.com/nullclaw/nullclaw/pull/790) | fix(providers): Responses API tool schema and null error handling | Corrected tool schema format and null-error classification for `api_mode=responses`. Closes #773. |
| [#824](https://github.com/nullclaw/nullclaw/pull/824) | fix(compaction): fix UTF-8 truncation in history compaction | Replaced naive byte truncation with `truncateUtf8` across compaction logic; deduplicated helper into `util.zig`. |
| [#807](https://github.com/nullclaw/nullclaw/pull/807) | hardening(web): expire pairing tokens and tighten provider/browser boundaries | Security hardening: added pairing-token expiry, SSRF-safe URL resolution for providers, removed fixed local pairing code. |
| [#810](https://github.com/nullclaw/nullclaw/pull/810) | service: add SysVinit fallback for nullclaw service install | Expanded Linux service-manager support to SysVinit when systemd/OpenRC are absent. |

---

## 4. Community Hot Topics

### Most Active Threads

| Item | Comments | Why It Matters |
|---|---|---|
| [#793](https://github.com/nullclaw/nullclaw/issues/793) | 3 | **System prompt inheritance bug** — subagent prompts were polluting the default agent's system prompt. Indicates architectural tension in the agent-routing layer. |
| [#791](https://github.com/nullclaw/nullclaw/issues/791) | 3 | **Shell failure on native Linux** — users expected sandbox tools to work out-of-the-box without Docker. Underlying need: clearer runtime environment requirements and graceful degradation. |
| [#820](https://github.com/nullclaw/nullclaw/issues/820) | 3 | **Zig on Debian install docs** — friction for source-builders on Debian. Underlying need: better distro-specific build instructions or prebuilt binaries. |
| [#821](https://github.com/nullclaw/nullclaw/issues/821) | 3 | **`nullclaw version` returns `"dev"`** — breaks troubleshooting and bug reporting. Underlying need: reproducible builds with embedded version/commit metadata. |

### Open PRs to Watch

| PR | Status | Notes |
|---|---|---|
| [#829](https://github.com/nullclaw/nullclaw/pull/829) | **OPEN** | Adds admin-oriented `config` and `models` CLI commands with `--json` output. Targets `nullhub` integration needs. |
| [#828](https://github.com/nullclaw/nullclaw/pull/828) | **OPEN** | Clarifies `nullclaw doctor` diagnostics for CLI-only channel configurations. Small UX polish. |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | **OPEN** | Large feature PR: cron subagent engine, JSON CLI output, security hardening. Has been open since April 7; may be waiting for review bandwidth post-Zig-0.16 migration. |

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR | Summary |
|---|---|---|---|
| **High** | [#799](https://github.com/nullclaw/nullclaw/issues/799) / [#779](https://github.com/nullclaw/nullclaw/issues/779) / [#784](https://github.com/nullclaw/nullclaw/issues/784) | [#801](https://github.com/nullclaw/nullclaw/pull/801) | **Docker sandbox crash:** `invalid empty volume spec` broke shell execution for Docker and non-Docker users alike. |
| **High** | [#793](https://github.com/nullclaw/nullclaw/issues/793) | [#804](https://github.com/nullclaw/nullclaw/pull/804) | **Agent routing leak:** unbound sessions inherited the first subagent's system prompt, corrupting behavior. |
| **Medium** | [#797](https://github.com/nullclaw/nullclaw/issues/797) | [#802](https://github.com/nullclaw/nullclaw/pull/802) | **History data loss:** SQLite backend failed to persist CLI turns, making `history list/show` appear empty. |
| **Medium** | [#800](https://github.com/nullclaw/nullclaw/issues/800) | [#803](https://github.com/nullclaw/nullclaw/pull/803) | **OTEL regression:** HTTPS constraint broke local container-network telemetry endpoints. |
| **Medium** | [#766](https://github.com/nullclaw/nullclaw/issues/766) | [#806](https://github.com/nullclaw/nullclaw/pull/806) | **Provider 404s:** custom OpenAI-compatible providers failed when `/chat/completions` was missing. |
| **Medium** | [#773](https://github.com/nullclaw/nullclaw/issues/773) | [#790](https://github.com/nullclaw/nullclaw/pull/790) | **Responses API broken:** wrong tool schema format and misclassified null errors. |
| **Low** | [#791](https://github.com/nullclaw/nullclaw/issues/791) | [#805](https://github.com/nullclaw/nullclaw/pull/805) | **False-positive sandbox detection:** Linux binaries answered `--version` but could not actually sandbox. |

**Assessment:** The project rapidly extinguished a cluster of **high-severity regressions** introduced in recent releases (notably around Docker defaults and agent routing). This suggests the test matrix may need expansion before future releases.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Release |
|---|---|---|
| **Admin/machine-readable CLI** (`config show --json`, `models summary --json`) | [#829](https://github.com/nullclaw/nullclaw/pull/829) | **High** — PR is open, directly supports `nullhub` ecosystem integration. |
| **Cron/scheduling subagent** | [#783](https://github.com/nullclaw/nullclaw/pull/783) | **Medium** — Large, well-scoped feature (DB-backed scheduler, JSON output, run history). Blocked likely on review bandwidth. |
| **SysVinit service support** | [#810](https://github.com/nullclaw/nullclaw/pull/810) | **Shipped** — already merged. |
| **Tailscale gateway documentation** | [#826](https://github.com/nullclaw/nullclaw/issues/826) | **Low/Medium** — Docs-only, but indicates gateway networking gaps (tunnel error: `NotImplemented`). |
| **Version embedding in source builds** | [#821](https://github.com/nullclaw/nullclaw/issues/821) | **Medium** — Repeated user friction; may be addressed in release engineering. |

---

## 7. User Feedback Summary

### Pain Points
- **Runtime environment confusion:** Multiple issues (#791, #779, #784) show users do not understand when NullClaw requires Docker, when it uses native sandboxes, or why shell execution fails on their platform.
- **Source-build friction:** Debian users struggle to install Zig (#820), and source builds report `"dev"` as version (#821), making debugging and issue reporting harder.
- **Gateway/networking limitations:** Tailscale users hitting `NotImplemented` tunnel errors (#826) signals that remote/VPN deployment paths are underdeveloped.

### Positive Signals
- **Responsive maintainers:** 12 of 13 issues were closed within the 24-hour window, many with same-day PRs.
- **Security-conscious culture:** Fixes are explicitly labeled `fix(security)` and include hardening PRs (#807, #805, #801).

---

## 8. Backlog Watch

| Item | Age | Risk | Notes |
|---|---|---|---|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | ~9 days | **Review bottleneck** | Large feature PR (cron subagent). Now that Zig 0.16 migration (#823) is merged, this may need rebase and maintainer review. |
| [#826](https://github.com/nullclaw/nullclaw/issues/826) | 1 day | **Documentation gap + feature gap** | Open. Not just docs—`nullclaw gateway` returns `NotImplemented` for Tailscale tunnels, suggesting the tunnel backend is incomplete. |
| [#821](https://github.com/nullclaw/nullclaw/issues/821) | 1 day | **Release engineering debt** | Closed, but root cause (no version in source builds) remains unaddressed in code. Worth tracking for a permanent fix. |

---

*Digest generated from GitHub activity for nullclaw/nullclaw on 2026-04-17.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-17

## 1. Today's Overview

IronClaw saw **very high activity** in the last 24 hours with **50 issues and 50 PRs updated**, though **zero new releases**. The project is in an intense **stabilization and bug-fix sprint**, with a large QA bug bash (4/16) driving many fresh reports. A critical security vulnerability in Engine V2 bypassing secret scanning has been identified and has an open fix PR. The core team is actively merging gateway, engine, and channel fixes, while several large feature PRs (Matrix channel, Aliyun support, Abound demo) remain in review.

---

## 2. Releases

**No new releases** today.

---

## 3. Project Progress

### Merged/Closed PRs (9 total, highlights)

| PR | Author | Summary |
|---|---|---|
| [#2515](https://github.com/nearai/ironclaw/pull/2515) | henrypark133 | **Unify gateway onboarding, auth gates, and pairing flows** — DB migration; consolidates web gateway onboarding and fixes trust-boundary regressions. |
| [#2512](https://github.com/nearai/ironclaw/pull/2512) | henrypark133 | **Fix Slack relay OAuth callback state lookup** — closes canonical/legacy relay secret key issues. |
| [#2552](https://github.com/nearai/ironclaw/pull/2552) | zetyquickly | Adds `thread_id`, `effective_rate`, and wire error codes to notification/analysis tools. |
| [#2551](https://github.com/nearai/ironclaw/pull/2551) | henrypark133 | **Fix routine setup resume state in web gateway UI** — improves gate-backed routine flow UX. |

### Notable Open PRs Advancing

| PR | Author | Summary |
|---|---|---|
| [#2555](https://github.com/nearai/ironclaw/pull/2555) | henrypark133 | **Fix gateway tool output visibility and timing** — correlates live tool events by `call_id`, bounds active-thread history for performance. |
| [#2517](https://github.com/nearai/ironclaw/pull/2517) | henrypark133 | **Fix gateway thread retention and stale in-progress state** — prevents sidebar from silently dropping active threads. |
| [#2494](https://github.com/nearai/ironclaw/pull/2494) | serrrfirat | **Add inbound secret scanning to Engine V2 path** — critical security fix. |
| [#2539](https://github.com/nearai/ironclaw/pull/2539) | standardtoaster | **Execution obligation** — forces v2 engine to attempt tool calls on explicit user commands, reducing false capability refusals. |
| [#2531](https://github.com/nearai/ironclaw/pull/2531) | serrrfirat | `FINAL`-await support + runaway loop protection in CodeAct scripts. |
| [#2549](https://github.com/nearai/ironclaw/pull/2549) | serrrfirat | Adds `mission_get` action for retrieving mission results in engine v2. |

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Comments | Topic | Underlying Need |
|---|---|---|---|
| [#2229](https://github.com/nearai/ironclaw/issues/2229) | **9** | Google Sheets OAuth blocked (Error 400) | **Reliable extension auth flows** — users need first-party OAuth integrations that don't break due to invalid_request configuration drift. |
| [#2411](https://github.com/nearai/ironclaw/issues/2411) | 1 | Telegram bot token save action does nothing | **Trust in channel configuration UI** — silent failures destroy user confidence in setup flows. |
| [#2491](https://github.com/nearai/ironclaw/issues/2491) | 1 | **Engine V2 bypasses inbound secret scanning** | **Security guarantees across engine versions** — v2 must not regress v1 safety controls. |
| [#1997](https://github.com/nearai/ironclaw/issues/1997) | 1 | Add IronClaw Slack App to marketplace | **Zero-friction Slack onboarding** — users don't want to create and configure their own Slack apps. |
| [#2541](https://github.com/nearai/ironclaw/issues/2541) | 1 | Agent fails to invoke tools for content summarization | **Reliable tool-use in v2 engine** — agents must actually fetch content rather than hallucinating summaries. |

### Large Long-Running PRs Drawing Attention

| PR | Topic | Status |
|---|---|---|
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | Aliyun Coding Plan support | Open since 2026-03-20, contributor is "new", very broad scope |
| [#2019](https://github.com/nearai/ironclaw/pull/2019) | Native Matrix channel | Open since 2026-04-04, large feature with E2EE support |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) | Abound demo — Responses API, credential injection, skills | Open since 2026-03-30, high risk, demo-driven |

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR? | Summary |
|---|---|---|---|
| **P1 — Critical** | [#2491](https://github.com/nearai/ironclaw/issues/2491) | ✅ [#2494](https://github.com/nearai/ironclaw/pull/2494) | **Engine V2 sends secrets directly to LLM** — bypasses `scan_inbound_for_secrets()` |
| **P1 — Critical** | [#2410](https://github.com/nearai/ironclaw/issues/2410) | 🔄 Partially related [#2415](https://github.com/nearai/ironclaw/pull/2415) | Dashboard refreshes in infinite loop, wiping contents |
| **P1 — Critical** | [#1998](https://github.com/nearai/ironclaw/issues/1998) | ✅ [#2512](https://github.com/nearai/ironclaw/pull/2512) (merged) | Slack connect flow broken — bot unresponsive, conflicting status messages |
| **P1 — Critical** | [#1997](https://github.com/nearai/ironclaw/issues/1997) | ❌ No | No IronClaw Slack App in marketplace — users must create own app |
| **P2 — High** | [#2229](https://github.com/nearai/ironclaw/issues/2229) | ❌ No | Google Sheets OAuth blocked (Error 400) |
| **P2 — High** | [#2411](https://github.com/nearai/ironclaw/issues/2411) | ❌ No | Telegram bot token save action silently fails |
| **P2 — High** | [#2541](https://github.com/nearai/ironclaw/issues/2541) | ❌ No | Agent fails to invoke tools for summarization tasks |
| **P2 — High** | [#2285](https://github.com/nearai/ironclaw/issues/2285) | ❌ No | Chat messages disappear on page refresh while bot continues processing |
| **P3 — Medium** | [#2281](https://github.com/nearai/ironclaw/issues/2281) | ❌ No | Bot ignores temporal conditions, sends meeting prep immediately |
| **P3 — Medium** | [#2282](https://github.com/nearai/ironclaw/issues/2282) | ❌ No | Bot overrides user instructions — only alerts on failures |
| **P3 — Medium** | [#2413](https://github.com/nearai/ironclaw/issues/2413) | ❌ No | Transient HTTP 400 / "Provider failed" errors in logs |
| **P3 — Medium** | [#2412](https://github.com/nearai/ironclaw/issues/2412) | ❌ No | "Potential secret leak detected" warnings flooding server logs |

**Regressions noted:** Multiple web gateway state-management regressions (thread retention, dashboard refresh loops, chat message disappearance) suggest recent durable-gateway changes introduced UI stability issues.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Release |
|---|---|---|
| **Tool schema discovery improvements** | Issues [#1338](https://github.com/nearai/ironclaw/issues/1338), [#1337](https://github.com/nearai/ironclaw/issues/1337), [#1334](https://github.com/nearai/ironclaw/issues/1334), [#1331](https://github.com/nearai/ironclaw/issues/1331), [#1330](https://github.com/nearai/ironclaw/issues/1330), [#1332](https://github.com/nearai/ironclaw/issues/1332) | **Medium** — labeled "on hold" and `bug_bash_P3`; blocked by higher-priority stability work |
| **Routines UX: create/edit flows in web UI** | [#1325](https://github.com/nearai/ironclaw/issues/1325) | **Medium** — PR [#2547](https://github.com/nearai/ironclaw/pull/2547) addresses related guardrails |
| **Routines UX: readable trigger/action summaries** | [#1324](https://github.com/nearai/ironclaw/issues/1324) | **Low-Medium** — backlog, no active PR |
| **Routines CLI: align with backend types** | [#1322](https://github.com/nearai/ironclaw/issues/1322) | **Low** — no active PR |
| **Native Matrix channel** | PR [#2019](https://github.com/nearai/ironclaw/pull/2019) | **Medium** — large PR, needs maintainer bandwidth |
| **Aliyun Coding Plan support** | PR [#1446](https://github.com/nearai/ironclaw/pull/1446) | **Uncertain** — new contributor, very broad scope, may need splitting |
| **Abound demo (Responses API, credential injection, skills)** | PR [#1764](https://github.com/nearai/ironclaw/pull/1764) | **Medium** — demo-driven, high risk, likely targeted for specific deployment |
| **Path-based credential matching** | PR [#2168](https://github.com/nearai/ironclaw/pull/2168) | **Medium-High** — clean, backward-compatible security feature |

---

## 7. User Feedback Summary

### Pain Points
- **Setup flows feel broken:** OAuth (Google Sheets), Telegram token save, and Slack connect all fail silently or with cryptic errors. Users cannot trust the channel configuration experience.
- **Web UI instability:** Refresh loops, disappearing messages, and thread sidebar jumps make the gateway feel unreliable.
- **Engine V2 quality gaps:** Agents refuse to use tools, ignore scheduling instructions, override user prompts, and now have a **critical security regression** with secret scanning.
- **Observability noise:** Log flooding from secret-scan warnings and transient LLM provider errors erodes operational confidence.

### Use Cases
- **Content summarization** (social media posts) — blocked by tool-use failures.
- **Scheduled/routine automation** (meeting prep, deployment health) — blocked by temporal logic and instruction-following bugs.
- **Multi-channel bots** (Telegram, Slack, Web) — blocked by auth and persistence issues.

### Satisfaction Assessment
**Low-to-mixed** among staging/QA users. The volume of P1/P2 bugs from a single bug bash indicates the product is not yet ready for general release. However, the core team's **very high merge velocity** (4 significant PRs closed in 24h) and rapid security response are positive signals.

---

## 8. Backlog Watch

| Item | Age | Risk | Why It Needs Attention |
|---|---|---|---|
| [#1446](https://github.com/nearai/ironclaw/pull/1446) Aliyun support | ~4 weeks | **Contributor fatigue / scope rot** | New contributor, XL scope, untouched for weeks. Needs maintainer guidance or splitting. |
| [#2019](https://github.com/nearai/ironclaw/pull/2019) Native Matrix channel | ~2 weeks | **Merge conflict / review bottleneck** | Large, high-risk feature with E2EE. Needs dedicated review pass or milestone assignment. |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) Abound demo | ~2.5 weeks | **Demo deadline risk** | High-risk, broad scope. Likely tied to external deadline; needs prioritization decision. |
| [#1338](https://github.com/nearai/ironclaw/issues/1338) + related schema discovery issues | ~1 month | **Technical debt accumulation** | 6 related issues all "on hold." Tooling ergonomics will degrade without this work. |
| [#1503](https://github.com/nearai/ironclaw/issues/1503) Google Slides integration failed | ~4 weeks | **Extension marketplace credibility** | No comments, no PR. Suggests unmaintained Google Workspace integration. |
| [#1325](https://github.com/nearai/ironclaw/issues/1325) Routines UX: web create/edit | ~1 month | **Feature gap vs. backend capability** | Backend supports rich routines; web UI is read-only. PR [#2547](https://github.com/nearai/ironclaw/pull/2547) is a partial step. |

---

*Digest generated from GitHub activity for nearai/ironclaw on 2026-04-17.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-17

## 1. Today's Overview

LobsterAI saw moderate engineering activity on 2026-04-17 with **8 pull requests updated** (6 merged/closed, 2 open) and **no new issues or releases**. The project appears to be in an active development and stabilization phase, with most merged work focused on bug fixes, internal cleanup, and a feature branch merge. Notably, there were **zero community issues or reactions**, indicating either a tightly controlled internal development cycle or limited external community engagement at this time.

---

## 2. Releases

**No new releases** were published today. The latest work was merged directly into the main branch without a tagged version.

---

## 3. Project Progress

### Merged/Closed PRs (6 items)

| PR | Title | Author | Key Advancement |
|:---|:---|:---|:---|
| [#1706](https://github.com/netease-youdao/LobsterAI/pull/1706) | feat(update): add uuid and userId query params to update check requests | liuzhq1986 | Enhanced telemetry/identification in auto-update infrastructure |
| [#1704](https://github.com/netease-youdao/LobsterAI/pull/1704) | fix(cowork): suppress leaked HEARTBEAT_OK replies | nmgwddj | Fixed background heartbeat noise polluting Cowork session history |
| [#1705](https://github.com/netease-youdao/LobsterAI/pull/1705) | fix(main): unify power save blocker type | nmgwddj | Refactored power management logic, removing duplication |
| [#1670](https://github.com/netease-youdao/LobsterAI/pull/1670) | feat: 企微支持多机器人；修复定时任务通知，企微失败的bug | liugang519 | Added multi-bot support for WeCom enterprise integration; fixed scheduled notification failures |
| [#1703](https://github.com/netease-youdao/LobsterAI/pull/1703) | fix(mcp): restore icon component imports deleted during merge | liuzhq1986 | Fixed MCP manager page crash from missing icon imports |
| [#1702](https://github.com/netease-youdao/LobsterAI/pull/1702) | Feature/upgrade openclaw | nmgwddj | Merged release branch `release/2026.04.14` into main |

**Themes:** Cowork session stability, desktop power management hygiene, enterprise WeCom integration expansion, MCP UI crash recovery, and OpenClaw subsystem upgrade.

---

## 4. Community Hot Topics

**No active community discussions** were observed today. All 8 PRs had **zero reactions and zero comments**, and there were **0 open or closed issues**. This suggests:

- Development may be **primarily internal** to NetEase Youdao
- External contributor engagement is currently **minimal**
- There is no emergent community-driven topic requiring analysis

The only long-standing open item with recent activity is **[#438](https://github.com/netease-youdao/LobsterAI/pull/438)** — a stale PR from 2026-03-16 to add an **AIHubMix provider**, bumped today but still unmerged.

---

## 5. Bugs & Stability

| Severity | PR/Issue | Description | Status |
|:---|:---|:---|:---|
| **High** | [#1703](https://github.com/netease-youdao/LobsterAI/pull/1703) | **MCP Manager page crash** caused by missing icon imports during a merge conflict resolution | **Fixed** (merged) |
| **Medium** | [#1704](https://github.com/netease-youdao/LobsterAI/pull/1704) | `HEARTBEAT_OK` replies leaking into Cowork sessions, creating visual noise and potential confusion | **Fixed** (merged) |
| **Medium** | [#1670](https://github.com/netease-youdao/LobsterAI/pull/1670) | WeCom scheduled notification failures | **Fixed** (merged) |
| **Low** | [#1707](https://github.com/netease-youdao/LobsterAI/pull/1707) | Draft input in home input box persists incorrectly when switching Agents | **Open** (fix proposed) |

**Regressions noted:** PR #1703 explicitly calls out a **merge regression** (commit `7df29fd`) that deleted imports and broke a renderer page. This indicates merge conflict resolution processes may need tighter review.

---

## 6. Feature Requests & Roadmap Signals

No user-submitted feature requests appeared today. Signals from merged work suggest the following roadmap priorities:

| Signal | Source PR | Implication |
|:---|:---|:---|
| **Enterprise multi-bot expansion** | [#1670](https://github.com/netease-youdao/LobsterAI/pull/1670) | WeCom integration is actively being deepened for enterprise customers |
| **OpenClaw upgrade** | [#1702](https://github.com/netease-youdao/LobsterAI/pull/1702) | The OpenClaw subsystem (likely agent/tool execution backend) received a full release-branch upgrade |
| **MCP ecosystem maturity** | [#1703](https://github.com/netease-youdao/LobsterAI/pull/1703) | MCP (Model Context Protocol) manager is actively maintained, suggesting first-class MCP support |
| **Update infrastructure personalization** | [#1706](https://github.com/netease-youdao/LobsterAI/pull/1706) | Preparing for more targeted or tracked update rollouts |

**Prediction:** The next release will likely bundle the OpenClaw upgrade, enterprise WeCom multi-bot support, and MCP stability fixes.

---

## 7. User Feedback Summary

**No direct user feedback** (issues, comments, reactions) was captured in today's data. Inferred pain points from bug fixes include:

- **Agent context isolation:** Users likely expect clean state switching between Agents (addressed by open PR [#1707](https://github.com/netease-youdao/LobsterAI/pull/1707))
- **Enterprise reliability:** WeCom notification failures suggest real production friction for business users
- **UI robustness:** The MCP manager crash would have blocked users attempting to configure tool connections

Overall satisfaction cannot be assessed from zero community signals; the project appears **engineering-driven rather than community-feedback-driven** at this stage.

---

## 8. Backlog Watch

| Item | Age | Status | Attention Needed |
|:---|:---|:---|:---|
| [#438](https://github.com/netease-youdao/LobsterAI/pull/438) Feat/add aihubmix provider | **32 days** (since 2026-03-16) | **Open, stale** | Maintainer decision on whether to merge, request changes, or close |
| [#1707](https://github.com/netease-youdao/LobsterAI/pull/1707) fix(cowork): 切换 Agent 时自动清空主页输入框内容 | 1 day | **Open** | Code review and potential merge |

**Recommendation:** PR #438 has been stale for over a month with no comments. A maintainer should triage it to prevent contributor discouragement. PR #1707 is a clean UX fix and should be reviewed promptly to close the Agent-switching regression.

---

*Digest generated from GitHub activity for netease-youdao/LobsterAI on 2026-04-17.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-17

## 1. Today's Overview

Moltis saw **exceptionally high activity** on 2026-04-16, with **18 PRs** (13 merged/closed, 5 open) and **10 issues** (7 closed, 3 open) updated in 24 hours. The maintainer team demonstrated strong throughput, closing numerous provider compatibility and platform stability bugs while advancing a major new **code indexing** subsystem through a 4-PR stacked review. A new release (`20260416.02`) shipped, though detailed release notes were not provided in the source data. The project appears healthy with active core contributors (notably `penso` and `Cstewart-HC`) and responsive issue resolution.

---

## 2. Releases

- **[`20260416.02`](https://github.com/moltis-org/moltis/releases/tag/20260416.02)** — Published 2026-04-16.
  - *No detailed changelog was available in the provided data.* Based on merged PRs, this release likely includes: schema sanitization fixes for Gemini/OpenRouter, Grok reasoning detection, Windows node-host TLS fix, Nostr panic fix, reasoning effort UI toggle, and configurable context window overrides.

---

## 3. Project Progress

### Major Subsystem: Code Indexing
A landmark feature stack was introduced by `Cstewart-HC`, split for review into four sequential PRs:

| PR | Description | Status |
|---|---|---|
| [#753](https://github.com/moltis-org/moltis/pull/753) | Crate scaffold, config, and file discovery | **Open** |
| [#754](https://github.com/moltis-org/moltis/pull/754) | Orchestrator, search, tools, delta sync | **Open** |
| [#755](https://github.com/moltis-org/moltis/pull/755) | Gateway wiring, QMD backend, tool registry | **Open** |
| [#756](https://github.com/moltis-org/moltis/pull/756) | SQLite+FTS5 backend, incremental reindexing, clippy cleanup | **Open** |

- [#752](https://github.com/moltis-org/moltis/pull/752) (the original monolithic PR) was **closed as superseded** by the stack above.

### Provider Compatibility & Tooling Fixes
| PR | Summary |
|---|---|
| [#751](https://github.com/moltis-org/moltis/pull/751) | Prune orphaned `required` entries from tool schemas — fixes Gemini via OpenRouter strict validation |
| [#750](https://github.com/moltis-org/moltis/pull/750) | Add reasoning effort toggle (Off/Low/Medium/High) to chat toolbar |
| [#749](https://github.com/moltis-org/moltis/pull/749) | Install rustls `CryptoProvider` on Windows node-host — fixes `wss://` panic |
| [#746](https://github.com/moltis-org/moltis/pull/746) | Sanitize MCP tool schemas regardless of JSON Schema draft — fixes Attio tools rejected by OpenAI |
| [#740](https://github.com/moltis-org/moltis/pull/740) | Restore type annotations stripped by schema canonicalization — fixes Fireworks AI 400 errors |
| [#741](https://github.com/moltis-org/moltis/pull/741) | Detect Grok 3/4 as reasoning-capable models |
| [#742](https://github.com/moltis-org/moltis/pull/742) | Replace `tokio::sync::RwLock` with `std::sync::RwLock` in Nostr channel — fixes panic |

### Agent Context & Config
| PR | Summary |
|---|---|
| [#737](https://github.com/moltis-org/moltis/pull/737) | Combined PR: configurable context window overrides + oldest-first tool result compaction |
| [#727](https://github.com/moltis-org/moltis/pull/727), [#726](https://github.com/moltis-org/moltis/pull/726), [#723](https://github.com/moltis-org/moltis/pull/723) | Closed as superseded by #737 |

### Packaging
| PR | Summary |
|---|---|
| [#745](https://github.com/moltis-org/moltis/pull/745) | Nix Flake support — **open**, initial implementation |
| [#469](https://github.com/moltis-org/moltis/pull/469) | Earlier Nix flake PR — **closed** (likely superseded by #745) |

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|---|---|---|
| [#102](https://github.com/moltis-org/moltis/issues/102) — Docker-in-Docker sandbox mounts wrong path | 4 comments, 5 👍 | **Highest community interest.** Affects self-hosted/Docker deployments. The root cause (container-internal vs host path mapping) indicates deep architectural friction in sandbox filesystem isolation. No linked fix PR in today's data. |
| [#533](https://github.com/moltis-org/moltis/issues/533) — "+" button for message attachments | 2 comments | UX polish request. Users want richer multimodal/chat input. |
| [#747](https://github.com/moltis-org/moltis/issues/747) — OpenRouter + Gemini `required` property error | 2 comments | Reported and **same-day fixed** by [#751](https://github.com/moltis-org/moltis/pull/751). Shows responsive maintainer action on provider breakage. |

**Underlying needs:** Better Docker/self-hosting ergonomics, richer chat UX, and rapid provider compatibility fixes as the LLM ecosystem fragments.

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR | Notes |
|---|---|---|---|
| **High** | [#757](https://github.com/moltis-org/moltis/issues/757) — Fix in #706 breaks Podman on Ubuntu 24.04/26.04 | **None yet** | Regression from a prior container fix. Affects Linux users on modern Ubuntu. Needs immediate attention. |
| **High** | [#102](https://github.com/moltis-org/moltis/issues/102) — Docker-in-Docker sandbox mounts container-internal path | **None yet** | Breaks sandbox workspaces in Docker deployments. Long-standing (Feb → Apr). |
| **Medium** | [#747](https://github.com/moltis-org/moltis/issues/747) — Gemini `required` validation failure | [#751](https://github.com/moltis-org/moltis/pull/751) | Fixed. |
| **Medium** | [#744](https://github.com/moltis-org/moltis/issues/744) — Windows node `wss://` panic | [#749](https://github.com/moltis-org/moltis/pull/749) | Fixed. Platform-specific TLS init issue. |
| **Medium** | [#743](https://github.com/moltis-org/moltis/issues/743) — MCP schema sanitization misses draft-07 | [#746](https://github.com/moltis-org/moltis/pull/746) | Fixed. Attio tools now work with OpenAI. |
| **Medium** | [#736](https://github.com/moltis-org/moltis/issues/736) — Panic creating Nostr channel | [#742](https://github.com/moltis-org/moltis/pull/742) | Fixed. Async lock misuse in sync context. |
| **Low** | [#738](https://github.com/moltis-org/moltis/issues/738) — Grok 4.20 not using reasoning | [#741](https://github.com/moltis-org/moltis/pull/741) | Fixed. Model detection gap. |

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood in Next Release |
|---|---|---|
| [#533](https://github.com/moltis-org/moltis/issues/533) | Message attachment "+" button in UI | Moderate — discrete UI enhancement |
| [#748](https://github.com/moltis-org/moltis/issues/748) | Easy retry button for failed prompts | High — small UX win, strong user value |
| [#739](https://github.com/moltis-org/moltis/issues/739) | Configure OpenRouter reasoning effort | **Shipped** in [#750](https://github.com/moltis-org/moltis/pull/750) |
| [#753–#756](https://github.com/moltis-org/moltis/pulls?q=is%3Apr+code-index) | Built-in code indexing (SQLite+FTS5, QMD backend) | Very High — major active investment, likely merges soon |

**Roadmap signal:** Moltis is pivoting from "chat wrapper" toward **agentic codebase understanding**, with native code indexing as a first-class subsystem.

---

## 7. User Feedback Summary

### Pain Points
- **Container runtime fragility:** Docker-in-Docker path mapping and Podman regressions suggest sandbox/container abstractions are the most brittle surface.
- **Provider whack-a-mole:** Rapid schema/reasoning detection fixes (#747, #743, #738, #740) show users hitting 400s and silent failures as they switch between OpenRouter, Gemini, Fireworks, Grok, and xAI.
- **Windows second-class experience:** TLS panic (#744) indicates Windows paths are undertested.

### Positive Signals
- **Same-day bug closure:** Provider issues reported and fixed within hours builds strong trust.
- **Reasoning effort UI:** Users appreciate fine-grained control over model behavior.
- **Nix interest:** Two Nix flake PRs show demand from reproducible-build communities.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#102](https://github.com/moltis-org/moltis/issues/102) Docker-in-Docker path bug | ~2 months | High | Needs maintainer assignment; blocks Docker-centric deployments |
| [#757](https://github.com/moltis-org/moltis/issues/757) Podman regression on Ubuntu | 1 day | High | Fresh regression, no PR linked — needs triage and revert/repair of #706 |
| [#745](https://github.com/moltis-org/moltis/pull/745) Nix Flake | 1 day | Low | Community packaging PR; needs review/merge decision |
| [#533](https://github.com/moltis-org/moltis/issues/533) Attachment "+" button | ~2 weeks | Low | UX backlog item; good first issue candidate |

---

*Digest generated from GitHub activity on 2026-04-16.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-17

## 1. Today's Overview

CoPaw/QwenPaw saw **very high community activity** in the last 24 hours with **50 issues and 50 PRs updated**, indicating a rapidly maturing but still turbulent project. The team shipped a **new beta release (v1.1.2-beta.2)** focused on background task stability, while the community actively contributed channel expansions (Signal, WhatsApp, SIP), memory system refactoring, and ACP protocol support. Bug reports remain dense, particularly around Windows installation confusion between `qwenpaw` and `copaw`, file I/O truncation, and frontend-console synchronization issues. The project appears healthy in contributor growth but faces growing pains from a major rebrand and rapid feature accumulation.

---

## 2. Releases

### [v1.1.2-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.2-beta.2)
| Aspect | Detail |
|--------|--------|
| **Type** | Beta patch |
| **Key Fix** | Register `AgentApp` dispatched requests with `TaskTracker` to prevent background task cancellation — addresses silent mid-task drops |
| **Migration Notes** | No breaking changes; version bump only |
| **Related PR** | [#3305](https://github.com/agentscope-ai/QwenPaw/pull/3305), [#3454](https://github.com/agentscope-ai/QwenPaw/pull/3454) |

---

## 3. Project Progress

### Merged/Closed PRs (Selected)

| PR | Description | Significance |
|----|-------------|--------------|
| [#3305](https://github.com/agentscope-ai/QwenPaw/pull/3305) | Fix background task cancellation via `TaskTracker` | Stability win for long-running agents |
| [#3438](https://github.com/agentscope-ai/QwenPaw/pull/3438) | Complete vLLM `tool_choice="auto"` compatibility | Local model deployment improved |
| [#2994](https://github.com/agentscope-ai/QwenPaw/pull/2994) | Preserve channels during hot-reload | Zero-downtime reloads now keep WhatsApp/Signal alive |
| [#2995](https://github.com/agentscope-ai/QwenPaw/pull/2995) | Reply-to trigger message for WhatsApp + Signal | UX polish for messaging channels |
| [#2962](https://github.com/agentscope-ai/QwenPaw/pull/2962) | WhatsApp channel via `neonize` | Foundation for messaging expansion (superseded by #3498) |
| [#3494](https://github.com/agentscope-ai/QwenPaw/pull/3494) | Add warning for free models | User transparency on model limitations |

### Notable Open PRs Advancing

| PR | Description |
|----|-------------|
| [#3509](https://github.com/agentscope-ai/QwenPaw/pull/3509) | **Multimodal message support** (images/files) — first-time contributor |
| [#3500](https://github.com/agentscope-ai/QwenPaw/pull/3500) | **Extensible memory backend system** — ReMe → plugin architecture (mem0, Zep, LangMem) |
| [#3487](https://github.com/agentscope-ai/QwenPaw/pull/3487) | **ACP server** — expose QwenPaw as an ACP-compatible agent for Zed/OpenCode |
| [#3449](https://github.com/agentscope-ai/QwenPaw/pull/3449) | **SIP voice channel** with pyVoIP/LiveKit dual-mode and streaming STT/TTS |
| [#2904](https://github.com/agentscope-ai/QwenPaw/pull/2904) | **Plan mode** — structured multi-step planning via `/plan` |

---

## 4. Community Hot Topics

| Rank | Issue/PR | Comments | Analysis |
|------|----------|----------|----------|
| 1 | [#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309) — *Confusion between qwenpaw and copaw after v1.1.0* | 11 | **Rebrand execution problem**: Windows users face PATH issues, duplicate apps, and split config directories (`~/.qwenpaw/` vs `~/.copaw/`). Underlying need: clear migration guide and unified data directory. |
| 2 | [#1563](https://github.com/agentscope-ai/QwenPaw/issues/1563) — *`write_file` truncates large content (~33KB → 6KB)* | 6 | **Data integrity bug** in a core tool; no linked fix PR yet. High severity for coding workflows. |
| 3 | [#3011](https://github.com/agentscope-ai/QwenPaw/issues/3011) — *Long tasks silently stop with qwen3 coder plus* | 6 | Closed; related to the background task cancellation fixed in v1.1.2-beta.2. Shows model-specific behavior differences. |
| 4 | [#2757](https://github.com/agentscope-ai/QwenPaw/issues/2757) — *WeWork channel disconnects despite heartbeat* | 5 | Enterprise integration reliability gap; no fix PR identified. |
| 5 | [#3462](https://github.com/agentscope-ai/QwenPaw/issues/3462) — *`AGENT_UNKNOWN_ERROR` generic crash* | 5 | Closed; likely covered by recent timeout/error-handling patches. |

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 **High** | [#1563](https://github.com/agentscope-ai/QwenPaw/issues/1563) | `write_file` truncates large files (~19% written) | ❌ None linked |
| 🔴 **High** | [#3445](https://github.com/agentscope-ai/QwenPaw/issues/3445) | MCP GUI config not passed to ReMe module — "Connecting..." forever | ❌ None linked |
| 🟡 **Medium** | [#3489](https://github.com/agentscope-ai/QwenPaw/issues/3489) | Anthropic-compatible API 400 errors from invalid message formats | ❌ None linked |
| 🟡 **Medium** | [#3481](https://github.com/agentscope-ai/QwenPaw/issues/3481) | `/api/tools` 500 when `icon=null` | ✅ [#3497](https://github.com/agentscope-ai/QwenPaw/pull/3497) open |
| 🟡 **Medium** | [#3468](https://github.com/agentscope-ai/QwenPaw/issues/3468) | Console session page freezes, content appears only after refresh | ❌ None linked |
| 🟡 **Medium** | [#3506](https://github.com/agentscope-ai/QwenPaw/issues/3506) | `/api/console/chat` crashes with `AttributeError: 'AgentRequest' object has no attribute 'channel'` | ❌ None linked |
| 🟡 **Medium** | [#3435](https://github.com/agentscope-ai/QwenPaw/issues/3435) | Download URL duplicated (`/api/files/preview` repeated) | ❌ None linked |
| 🟢 **Low** | [#3484](https://github.com/agentscope-ai/QwenPaw/issues/3484) | Search bar UI glitch on `/skills` | ❌ None linked |
| 🟢 **Low** | [#3504](https://github.com/agentscope-ai/QwenPaw/issues/3504) | Skill enable/disable button triggers detail view | ❌ None linked |

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood in Next Release |
|----------|---------|---------------------------|
| [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) | **Agent Teams** — natural-language-driven self-evolving multi-agent collaboration | Medium — architectural, needs design phase |
| [#3470](https://github.com/agentscope-ai/QwenPaw/issues/3470) | **Self-evolution** like Hermes Agent | Medium — aligned with #3224, backend-heavy |
| [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) | **Kimi Code API support** | High — provider expansion is fast-track |
| [#3439](https://github.com/agentscope-ai/QwenPaw/issues/3439) | **Agent/level-specific logs in management console** | Medium — PR #3064 (debug page) already closed, may extend |
| [#3503](https://github.com/agentscope-ai/QwenPaw/issues/3503) | **Batch enable/disable skills in UI** | High — small frontend change, clear UX win |
| [#3507](https://github.com/agentscope-ai/QwenPaw/issues/3507) | **Uninstall for QwenPaw Local / llama.cpp** | Medium — local model UX cleanup |
| [#1059](https://github.com/agentscope-ai/QwenPaw/issues/1059) | **ACP (Agent Communication Protocol) support** | Very High — PR [#3487](https://github.com/agentscope-ai/QwenPaw/pull/3487) already open |
| [#3500](https://github.com/agentscope-ai/QwenPaw/pull/3500) | **Pluggable memory backends** | High — major refactor, fully backward compatible |

---

## 7. User Feedback Summary

### Pain Points
- **Rebrand confusion**: The `qwenpaw`/`copaw` split is the #1 source of friction — PATH, app duplicates, and config directories are misaligned ([#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309)).
- **Silent failures**: Long tasks stopping without error ([#3011](https://github.com/agentscope-ai/QwenPaw/issues/3011)), console freezing ([#3468](https://github.com/agentscope-ai/QwenPaw/issues/3468)), and file truncation ([#1563](https://github.com/agentscope-ai/QwenPaw/issues/1563)) erode trust.
- **Memory persistence gaps**: Users expect MCP usage patterns and encoding fixes to persist across sessions, but they don't ([#3453](https://github.com/agentscope-ai/QwenPaw/issues/3453)).
- **Local model compatibility**: Qwen-family models output XML while QwenPaw expects JSON, breaking local deployments ([#3477](https://github.com/agentscope-ai/QwenPaw/issues/3477)).

### Positive Signals
- Strong enthusiasm for **multi-agent teams**, **voice channels**, and **ACP integration**.
- Active first-time contributor submissions (#3509, #3246, #3242) signal a welcoming community.
- Rapid channel expansion (WhatsApp, Signal, SIP) shows responsiveness to connectivity demands.

---

## 8. Backlog Watch

| Issue/PR | Age | Why It Needs Attention |
|----------|-----|------------------------|
| [#1563](https://github.com/agentscope-ai/QwenPaw/issues/1563) | ~1 month | Core tool data loss — no maintainer response or fix PR |
| [#2757](https://github.com/agentscope-ai/QwenPaw/issues/2757) | ~2 weeks | Enterprise WeWork channel reliability — no fix |
| [#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309) | ~4 days | Highest-comment issue; needs official rebrand clarification |
| [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) | ~1 week | Major feature request with detailed spec; no maintainer reply |
| [#2904](https://github.com/agentscope-ai/QwenPaw/pull/2904) | ~2 weeks | Plan mode PR — significant feature, stuck in review |
| [#3394](https://github.com/agentscope-ai/QwenPaw/pull/3394) | ~2 days | Stale frontend build warning — small but high DX impact, unmerged |

---

*Digest generated from GitHub activity on 2026-04-17.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-17

## 1. Today's Overview

ZeroClaw remains highly active with **90 tracked updates** in the last 24 hours (40 issues, 50 PRs), indicating a project in intense development flux. The community is heavily focused on **architectural maturation** toward v0.7.0/v1.0.0, with a wave of RFCs from core contributor WareWolf-MoonWall shaping governance, documentation, CI/CD, and microkernel design. Meanwhile, practical bug-fixing and provider/channel improvements continue in parallel. No new release was cut today, though a v0.7.0 release PR (#5805) is open, suggesting the maintainers are preparing to ship a major milestone that consolidates months of work.

---

## 2. Releases

**No new releases** today.

The latest release PR ([#5805](https://github.com/zeroclaw-labs/zeroclaw/pull/5805)) proposes **v0.7.0** with changelog, version bump, and integration fixes, but has not yet merged.

---

## 3. Project Progress

### Closed/Merged Items Today

| Item | What Advanced |
|------|---------------|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | **Web dashboard availability bug resolved** — persistent "Web dashboard not available" error across UI and Tauri desktop app was closed after 14 comments. |
| [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) | **Matrix friction tracker completed** — E2EE OTK retry loop and other Matrix channel pain points resolved. |
| [#5447](https://github.com/zeroclaw-labs/zeroclaw/issues/5447) | **Crate split rationale accepted** — compilation speed concerns validated; workspace decomposition already executed in #5559. |
| [#2472](https://github.com/zeroclaw-labs/zeroclaw/issues/2472) | **Multi-query keyword expansion for memory retrieval** — feature to improve memory recall via secondary keyword queries was merged/closed. |
| [#4363](https://github.com/zeroclaw-labs/zeroclaw/issues/4363) | **Contributor branch fixup policy established** — maintainers will push fixups to contributor branches rather than supersede PRs. |
| [#4237](https://github.com/zeroclaw-labs/zeroclaw/issues/4237) | **MkDocs integration for /docs → website sync** accepted/closed. |
| [#2555](https://github.com/zeroclaw-labs/zeroclaw/issues/2555) | **Azure OpenAI custom provider auth** — `api-key` header and `api-version` query support added via custom provider config. |
| [#5679](https://github.com/zeroclaw-labs/zeroclaw/issues/5679) | **i18n docs regression fixed** — 30+ translated setup guides updated after `install.sh` rewrite in #5666. |
| [#5585](https://github.com/zeroclaw-labs/zeroclaw/issues/5585) | **OpenTelemetry formalized as observability standard** (Phase 1 D3). |
| [#5541](https://github.com/zeroclaw-labs/zeroclaw/issues/5541) | **Dockerfile.debian local build** — three blocking bugs fixed. |
| [#5562](https://github.com/zeroclaw-labs/zeroclaw/issues/5562) | **Windows shell command console flash** — resolved. |
| [#3508](https://github.com/zeroclaw-labs/zeroclaw/issues/3508) | **Web Dashboard "Not found"** — closed. |
| [#5798](https://github.com/zeroclaw-labs/zeroclaw/issues/5798) | **Webhook standalone start bug** — fixed (channel now starts without another channel configured). |
| [#5784](https://github.com/zeroclaw-labs/zeroclaw/issues/5784) | **Matrix media download fallback inconsistency** — fixed. |
| [#5755](https://github.com/zeroclaw-labs/zeroclaw/issues/5755) | **Prometheus backend not recognized** — closed. |
| [#5716](https://github.com/zeroclaw-labs/zeroclaw/pull/5716) | **OTEL parent-child span relationships** — merged; fixes root-span isolation in `OtelObserver`. |
| [#5801](https://github.com/zeroclaw-labs/zeroclaw/pull/5801) | **`CONVENTIONS.md` added** — development philosophy overview merged. |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | Core Tension |
|------|------|----------|------------|
| 1 | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) Web dashboard not available | 14 | **Build-system/developer experience gap** — users repeatedly hit missing frontend builds in both web and Tauri distributions. |
| 2 | [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) Matrix friction tracker | 12 | **Protocol complexity vs. user reliability** — E2EE and media handling in Matrix remain fragile; community demanded an umbrella issue. |
| 3 | [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) RFC: Microkernel Transition | 8 | **Architectural direction** — the entire v0.7→v1.0 roadmap hinges on this; comments reflect deep design review. |
| 4 | [#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851) GitHub Copilot provider onboarding | 7 | **Provider discoverability** — Copilot works but is hidden from `zeroclaw onboard`; manual `config.toml` edit required. |

### Underlying Needs
- **First-run reliability**: Dashboard and onboarding bugs generate the most heat because they block new users entirely.
- **Enterprise/self-host trust**: Matrix and observability RFCs signal that production operators need stability guarantees.
- **Governance clarity**: The RFC cluster (#5574, #5579, #5576, #5577, #5653, #5615) shows the project is deliberately transitioning from organic growth to structured engineering.

---

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **S0** | [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) | **Context spillage from chat to schedule** — data isolation breach; chat memory leaks into scheduled tasks. | No open fix PR visible |
| **S1** | [#5685](https://github.com/zeroclaw-labs/zeroclaw/issues/5685) | **CLI channel factory not registered** — `zeroclaw agent` crashes on startup after onboarding. | No open fix PR visible |
| **S1** | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | Web dashboard unavailable (closed today) | ✅ Fixed |
| **S2** | [#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851) | GitHub Copilot missing from onboarding wizard | Workaround: manual config edit |
| **S2** | [#5360](https://github.com/zeroclaw-labs/zeroclaw/issues/5360) | `codex_cli` tool passes unsupported `-q` flag to Codex CLI v0.118.0 | No open fix PR visible |
| **S2** | [#5562](https://github.com/zeroclaw-labs/zeroclaw/issues/5562) | Windows shell commands flash cmd console | ✅ Fixed |
| **S3** | [#5811](https://github.com/zeroclaw-labs/zeroclaw/issues/5811) | `cargo publish` broken by microkernel workspace split | [#5812](https://github.com/zeroclaw-labs/zeroclaw/pull/5812) open — gates publish until design complete |
| **S3** | [#5541](https://github.com/zeroclaw-labs/zeroclaw/issues/5541) | Dockerfile.debian local build fails | ✅ Fixed |

**Regressions from recent changes:**
- **#5811**: Direct regression from #5559 workspace split — release pipeline at risk.
- **#5679**: Docs regression from #5666 `install.sh` rewrite — already fixed.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features

| Issue | Request | Likelihood in v0.7.x/v0.8.0 |
|-------|---------|------------------------------|
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | Add Napcat/OneBot 11 channel | Medium — channel ecosystem expansion is active, but no assignee |
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) | Webhook transforms (custom paths, payload inspection) | Medium — webhook system is receiving attention (#5798 fixed today) |
| [#3100](https://github.com/zeroclaw-labs/zeroclaw/issues/3100) | Mattermost "oncall" mode (reply to mentions in any channel) | Medium — parity with OpenClaw requested; 2 upvotes |
| [#5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787) | Replace TOML i18n with Mozilla Fluent; remove in-repo translated docs | **High** — opened by core contributor singlerider; aligns with documentation RFCs |

### Predicted v0.7.0/v0.8.0 Inclusions
- **Microkernel workspace split** — already merged (#5559), stabilization in progress.
- **OpenTelemetry trace pipeline completion** — PRs #5716 (merged) and #5804 (open).
- **TOTP-gated shell commands** — PR #5779 (phase 1) under review.
- **Fluent i18n migration** — RFC #5787 + docs RFC #5576.

---

## 7. User Feedback Summary

### Pain Points
- **Onboarding friction**: Repeated reports that `zeroclaw onboard` misses providers (Copilot in #4851) and that first-run dashboard builds fail (#4866, #3508).
- **Channel coverage gaps**: Users want Napcat/OneBot (#2503) and Mattermost oncall mode (#3100), suggesting ZeroClaw lags behind competitors in Chinese IM and enterprise chat integrations.
- **Windows polish**: Console flashes (#5562, now fixed) and architecture detection (#5086, still open) show Windows users feel second-class.
- **Build/compile time**: Crate split validates user complaints about slow compilation (#5447).

### Positive Signals
- **Responsive maintainers**: High closure rate (17/40 issues closed today) and direct maintainer fixups to contributor branches (#4363).
- **Enterprise readiness investments**: OTEL, security gating (#5779), and governance RFCs indicate long-term commitment.
- **Memory retrieval improvement**: Multi-query keyword expansion (#2472) closed — active work on core AI quality.

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Risk | Why It Needs Eyes |
|------|-----|------|-------------------|
| [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) S0 context spillage | ~10 days | **High** | Security/data isolation bug with no visible fix PR; only 2 comments suggests under-triaged. |
| [#5086](https://github.com/zeroclaw-labs/zeroclaw/pull/5086) aarch64 runtime arch detection | ~19 days | Medium | Open since March 29; breaks `zeroclaw update` on ARM/QEMU. |
| [#5105](https://github.com/zeroclaw-labs/zeroclaw/pull/5105) Anthropic endpoints in onboarding | ~18 days | Medium | Provider parity gap; competes with Copilot onboarding issue. |
| [#5305](https://github.com/zeroclaw-labs/zeroclaw/pull/5305) Qwen OAuth token refresh | ~12 days | Medium | Channel auth failure after hours of uptime; production reliability issue. |
| [#5695](https://github.com/zeroclaw-labs/zeroclaw/pull/5695) Respect `prompt_injection_mode` in DelegateTool | ~4 days | Medium | Causes context overflow; prompt engineering hygiene. |
| [#5805](https://github.com/zeroclaw-labs/zeroclaw/pull/5805) v0.7.0 release prep | 1 day | High | Blocked by #5811 publish failure; needs architectural decision on multi-crate release strategy. |

---

*Digest generated from 90 GitHub events on 2026-04-17. Project health assessment: **active and maturing**, with elevated risk around the v0.7.0 release boundary due to workspace-split regressions and two unpatched S0/S1 bugs.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*