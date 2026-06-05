# OpenClaw Ecosystem Digest 2026-06-05

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-05 00:40 UTC

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

# OpenClaw Project Digest — 2026-06-05

---

## 1. Today's Overview

OpenClaw remains in a period of exceptionally high activity with **500 issues and 500 PRs updated in the last 24 hours**, reflecting a large and engaged contributor base. No new releases were published today, but the project is clearly in active development toward the next version following the 2026.6.1 release. The volume of open issues (346) and open PRs (394) is substantial, with many items flagged as needing maintainer review or product decisions — suggesting the project's bottleneck is review capacity rather than contributor output. The most pressing themes today are **session-state reliability**, **message delivery correctness across channels**, and **SQLite migration fallout** from the 2026.6.1 release.

---

## 2. Releases

**No new releases today.** The latest release remains **2026.6.1**, which introduced the SQLite session/transcript migration — a change that is generating significant bug reports and regression issues (see Sections 5 and 7).

---

## 3. Project Progress

Several notable PRs were merged or advanced today, indicating forward progress on stability and channel reliability:

- **Discord outbound adapter resolution** — PR [#90198](https://github.com/openclaw/openclaw/pull/90198) (P1, ready for maintainer) fixes Discord final replies failing with "Outbound not configured for channel" when the pinned channel registry desyncs from the active replacement registry.
- **Pending final delivery cleanup** — PR [#90229](https://github.com/openclaw/openclaw/pull/90229) (P1, waiting on author) clears durable `pendingFinalDelivery` state immediately after successful delivery, preventing stale retry ghosts.
- **Announce-delivery origin backfill** — PR [#89949](https://github.com/openclaw/openclaw/pull/89949) (P2, ready for maintainer, video proof supplied) fixes silent media-delivery drops when `image_generate` or similar tasks run off the direct-reply path (heartbeat, cron, subagent) where `agentTo` is undefined.
- **Native /compact reply delivery** — PR [#90212](https://github.com/openclaw/openclaw/pull/90212) (P1, ready for maintainer) ensures native slash command `/compact` replies are delivered through source suppression, fixing [#90185].
- **Cron source-delivery guard** — PR [#85249](https://github.com/openclaw/openclaw/pull/85249) (P1, ready for maintainer) guards against `undefined` `sourceDelivery` in the isolated cron executor, preventing `TypeError` crashes.
- **Gateway restart recovery** — PR [#90490](https://github.com/openclaw/openclaw/pull/90490) adds periodic restart/session-delivery recovery so entries deferred by retry backoff are retried after startup (fixes [#76087]).
- **WhatsApp connection timeout** — PR [#90486](https://github.com/openclaw/openclaw/pull/90486) (P2, ready for maintainer) bounds WhatsApp startup wait times, recreating the fix from the repeatedly closed [#63037].
- **Dashboard usage range fix** — PR [#90485](https://github.com/openclaw/openclaw/pull/90485) (P2, closed) excluded untimestamped usage from bounded dashboard ranges so daily totals aren't inflated.

---

## 4. Community Hot Topics

The most discussed issues reveal clear patterns of user concern:

| Issue | Comments | 👍 | Core Concern |
|-------|----------|-----|--------------|
| [#72808](https://github.com/openclaw/openclaw/issues/72808) — Slack silently lost connection | 20 | 3 | **Slack reliability**: Connection drops without warning, no auto-recovery. Users lose trust when the bot goes silent mid-session. |
| [#88838](https://github.com/openclaw/openclaw/issues/88838) — SQLite session/transcript migration tracking | 17 | 1 | **Migration risk management**: The community wants the SQLite migration broken into small, reviewable PRs rather than one high-risk rewrite. This is a meta-process issue reflecting anxiety about the 2026.6.1 migration. |
| [#80171](https://github.com/openclaw/openclaw/issues/80171) — Codex-vs-Pi runtime parity QA harness | 15 | 1 | **Runtime transition confidence**: As OpenClaw moves to Codex as the default runtime, users need assurance that tool surfaces, doctor migrations, and plugin flows remain compatible. |
| [#65161](https://github.com/openclaw/openclaw/issues/65161) — Heartbeat isolated mode regressions | 14 | 1 | **Heartbeat reliability**: Multiple regressions in isolated mode — cadence stalls, mislabeled events, missing state writer. Heartbeat is a core health mechanism; failures here cascade into session issues. |
| [#87307](https://github.com/openclaw/openclaw/issues/87307) — Matrix thread replies regression | 13 | 1 | **Matrix channel correctness**: Thread replies sent as normal replies; `/status` and `/model` silent. Channel-specific regressions after the 2026.5.22 upgrade. |
| [#90083](https://github.com/openclaw/openclaw/issues/90083) — OpenAI gpt-5.4/gpt-5.5 transport failure | 11 | 3 | **Model compatibility**: The newest OpenAI models fail with `invalid_provider_content_type` after the 2026.6.1 config/plugin migration. High 👍 count signals broad impact. |
| [#68113](https://github.com/openclaw/openclaw/issues/68113) — Mattermost slash commands 503 | 11 | 3 | **Mattermost regression**: Slash commands returning "not yet initialized" since v2026.4.15. Persistent issue with multiple 👍 but no fix PR merged. |

**Underlying needs analysis**: The community is navigating a **platform transition period** — the SQLite migration, Codex runtime adoption, and rapid channel expansion (Google Chat, Feishu, QQBot, Zalo) are creating compounding instability. Users need (1) better migration communication and rollback paths, (2) channel-specific regression test coverage, and (3) faster turnaround on P1 bugs that affect production deployments.

---

## 5. Bugs & Stability

### Critical / P1 Bugs

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 P1 | [#90083](https://github.com/openclaw/openclaw/issues/90083) | OpenAI gpt-5.4/gpt-5.5 Responses transport fails with `invalid_provider_content_type` on 2026.6.1 | PR [#90487](https://github.com/openclaw/openclaw/pull/90487) (open, needs proof) |
| 🔴 P1 | [#90093](https://github.com/openclaw/openclaw/issues/90093) | ChatGPT Responses native replay sends encrypted reasoning, breaks next turn with `invalid_encrypted_content` | Related to #90083 |
| 🔴 P1 | [#90072](https://github.com/openclaw/openclaw/issues/90072) | **Cron state silently wiped** during SQLite migration on upgrade to 2026.6.1 — 44 of 45 cron jobs lost | ❌ No fix PR yet |
| 🔴 P1 | [#90082](https://github.com/openclaw/openclaw/issues/90082) | Active-memory circuit breaker too aggressive; fallback prompt pollutes main session | ❌ No fix PR yet |
| 🔴 P1 | [#87307](https://github.com/openclaw/openclaw/issues/87307) | Matrix thread replies sent as normal replies; `/status` and `/model` silent (2026.5.22 regression) | ❌ No fix PR yet |
| 🔴 P1 | [#68113](https://github.com/openclaw/openclaw/issues/68113) | Mattermost slash commands return 503 "not yet initialized" since v2026.4.15 | ❌ No fix PR yet |
| 🔴 P1 | [#63216](https://github.com/openclaw/openclaw/issues/63216) | Repeated hard resets on same session key despite high `reserveTokensFloor`; retry loop re-injects bootstrap context | ❌ No fix PR yet |
| 🔴 P1 | [#67777](https://github.com/openclaw/openclaw/issues/67777) | Subagent completion delivery lost on direct-announce timeout, drain, or orphan prune | ❌ No fix PR yet |
| 🔴 P1 | [#77642](https://github.com/openclaw/openclaw/issues/77642) | Lossless-claw: duplicate answers + "missing tool result" synthetic errors (5.3 regression) | ❌ No fix PR yet |

### High-Impact P2 Bugs

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#65161](https://github.com/openclaw/openclaw/issues/65161) | Heartbeat isolated mode: cadence stalls, mislabeled events, missing state writer | ❌ No fix PR yet |
| [#67288](https://github.com/openclaw/openclaw/issues/67288) | Amazon Bedrock unnecessary discovery runs on every request (no `config.discovery.enabled` gate) | ❌ No fix PR yet |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | Session context bloat: bootstrap files re-injected every turn, wasting 20-30% tokens | ❌ No fix PR yet |
| [#76038](https://github.com/openclaw/openclaw/issues/76038) | Stuck session recovery doubly broken + session preprocessing too slow | ❌ No fix PR yet |
| [#66977](https://github.com/openclaw/openclaw/issues/66977) | `sqlite-vec` extension cannot load on macOS (Node.js compiled with `OMIT_LOAD_EXTENSION`) | ❌ No fix PR yet |
| [#88929](https://github.com/openclaw/openclaw/issues/88929) | Feishu streaming card: abnormal typewriter effect, final content truncated to last character | ❌ No fix PR yet |

### Stability Assessment

The **cron state wipe** issue [#90072](https://github.com/openclaw/openclaw/issues/90072) is the most urgent new bug — it is a **data loss** issue affecting users upgrading to 2026.6.1, with no warning or backup prompt. This demands an immediate hotfix or at minimum a prominent advisory. The OpenAI transport failures [#90083](https://github.com/openclaw/openclaw/issues/90083) and [#90093](https://github.com/openclaw/openclaw/issues/90093) are also high-priority as they affect users on the latest OpenAI models. Overall, the project has a significant backlog of P1 bugs without fix PRs, indicating the maintainer team is stretched thin relative to the volume of critical issues.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Description | Signal Strength |
|-------|-------------|-----------------|
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | SQLite session/transcript migration via accessor seam (branch-by-abstraction) | **Strong** — 17 comments, maintainer-authored, process-critical for the current migration |
| [#89502](https://github.com/openclaw/openclaw/pull/89502) | Native Google Chat approval cards | **Strong** — PR ready for maintainer, expands channel parity |
| [#89569](https://github.com/openclaw/openclaw/pull/89569) | Pre-auth access requests and grouped DM allowlists for Telegram/WhatsApp | **Strong** — PR ready, addresses access control gaps |
| [#63990](https://github.com/openclaw/openclaw/issues/63990) | Multi-index embedding memory with model-aware failover | **Moderate** — 6 comments, addresses production reliability for memory |
| [#64046](https://github.com/openclaw/openclaw/issues/64046) | Sensitive data masking/desensitization (API keys in config, logs, UI) | **Moderate** — 8 comments, security-adjacent, Chinese community particularly vocal |
| [#69066](https://github.com/openclaw/openclaw/issues/69066) | Separate internal service identity from user auth in gateway | **Moderate** — RFC, 6 comments, architectural improvement |
| [#63930](https://github.com/openclaw/openclaw/issues/63930) | Anthropic advisor tool (beta server-side tool) support | **Moderate** — keeps OpenClaw competitive with native Claude features |
| [#71736](https://github.com/openclaw/openclaw/issues/71736) | Control UI plugin contribution slots (SDK surface) | **Moderate** — RFC, would enable richer plugin ecosystems |

**Prediction for next release**: The next version (likely 2026.6.2 or 2026.7.0) will prioritize **SQLite migration stabilization** (cron state preservation, session recovery fixes), **OpenAI transport compatibility** (gpt-5.4/5.5 content-type handling), and **channel reliability** (Discord, Matrix, Mattermost regressions). Feature work on Google Chat approval cards and Telegram/WhatsApp access control is close to merge-ready and may land soon.

---

## 7. User Feedback Summary

### Pain Points

1. **Silent failures erode trust**: Multiple users report connections (Slack [#72808](https://github.com/openclaw/openclaw/issues/72808), Discord [#79794](https://github.com/openclaw/openclaw/issues/79794)) that drop without warning or auto-recovery. Users discover the bot is unresponsive only when trying to interact. This is the most damaging pattern for a personal AI assistant.

2. **Migration anxiety**: The 2026.6.1 SQLite migration is causing real data loss (cron jobs [#90072](https://github.com/openclaw/openclaw/issues/90072)) and configuration issues. Users want migration rollback paths, pre-flight checks, and prominent warnings before destructive operations.

3. **Token efficiency concerns**: Users are frustrated by bootstrap file re-injection consuming 20-30% of context every turn [#67419](https://github.com/openclaw/openclaw/issues/67419), and excessive JSON metadata in Telegram messages degrading model comprehension [#72704](https://github.com/openclaw/openclaw/issues/72704). These are cost and quality-of-service issues.

4. **Channel parity gaps**: Users on Mattermost, Matrix, Feishu, and QQBot report regressions that don't affect Slack/Telegram/Discord users, creating a two-tier experience. The community is asking for more consistent channel testing.

5. **Security consciousness**: Users are requesting sensitive data masking [#64046](https://github.com/openclaw/openclaw/issues/64046) and separation of service identity from user auth [#69066](https://github.com/openclaw/openclaw/issues/69066), indicating OpenClaw is being deployed in security-sensitive environments.

### Satisfaction Signals

- High engagement (500+ issues and PRs in 24h) suggests a passionate, invested community.
- Multiple PRs include video proof and detailed reproduction steps, indicating a mature contributor culture.
- The maintainer team is actively labeling and triaging (clawsweeper labels, issue ratings), which provides structure even if response times are slow.

---

## 8. Backlog Watch

These important issues and PRs have been open for extended periods without resolution and need maintainer attention:

| Age | Item | Why It Matters |
|-----|------|----------------|
| 54 days | [#63216](https://github.com/openclaw/openclaw/issues/63216) — Repeated hard resets on session key | P1, 3 👍, 11 comments. Core session stability issue with no fix PR after nearly two months. |
| 48 days | [#63930](https://github.com/openclaw/openclaw/issues/63930) — Anthropic advisor tool support | P2, 6 comments. Competitive feature gap as Claude adds server-side tools. |
| 47 days | [#64046](https://github.com/openclaw/openclaw/issues/64046) — Sensitive data masking | P1, 8 comments. Security concern for production deployments. |
| 44 days | [#65624](https://github.com/openclaw/openclaw/issues/65624) — Mattermost cleartext callback URLs (CVSS 7.6-8.6) | P1, **security vulnerability** with CVSS score, 6 comments. No fix PR. |
| 39 days | [#66977](https://github.com/openclaw/openclaw/issues/66977) — sqlite-vec cannot load on macOS | P2, 5 comments. Blocks vector memory search for all macOS users. |
| 37 days | [#67419](https://github.com/openclaw/openclaw/issues/67419) — Session context bloat (20-30% token waste) | P2, 2 👍, 8 comments. Directly impacts cost and model quality for all users. |
| 55 days | [#65161](https://github.com/openclaw/openclaw/issues/65161) — Heartbeat isolated mode regressions | P2, 14 comments. Heartbeat is a core health mechanism; multi-symptom regression. |
| 49 days | [#67288](https://github.com/openclaw/openclaw/issues/67288) — Amazon Bedrock unnecessary discovery | P2, 11 comments. Performance waste, linked PR open. |
| 24 days | [#76038](https://github.com/openclaw/openclaw/issues/76038) — Stuck session recovery doubly broken | P2, 2 👍, 6 comments. Gateway becomes unresponsive, requires manual restart. |
| 57 days | [#48300](https://github.com/openclaw/openclaw/issues/48300) — memory_search hybrid mode not returning FTS matches | P2, 2 👍, 5 comments. Core memory search broken for hybrid mode since March. |
| 39 days (PR) | [#73260](https://github.com/openclaw/openclaw/pull/73260) — Auth profile content-hash + models.json drift detection | P1, needs proof. Important for config reliability, open since April. |
| 22 days (PR) | [#81864](https://github.com/openclaw/openclaw/pull/81864) — Plain-language plugin approvals | P2, waiting on author. Security UX improvement across 10+ channels. |

**Recommendation**: The maintainer team should consider a focused "backlog sprint" targeting the oldest P1 issues, particularly the Mattermost security vulnerability [#65624](https://github.com/openclaw/openclaw/issues/65624) and the session stability issues [#63216](https://github.com/openclaw/openclaw/issues/63216) and [#67777](https://github.com/openclaw/openclaw/issues/67777), which have been open for over seven weeks without fix PRs.

---

*Data source: github.com/openclaw/openclaw — snapshot 2026-06-05. All links reference the openclaw/openclaw repository.*

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report — 2026-06-05

---

## 1. Ecosystem Overview

The personal AI agent / assistant open-source landscape in mid-2026 is characterized by **high fragmentation, rapid iteration, and a shared set of hard problems** — multi-channel delivery correctness, session/context management, and local model reliability. At least **13 identifiable projects** span the space, from minimalist edge-deployed agents (PicoClaw, NanoClaw) to full-stack platforms with desktop apps, plugin marketplaces, and hook frameworks (OpenClaw, Hermes Agent, IronClaw, CoPaw). The ecosystem is converging on a common architecture pattern: a gateway process managing provider routing, tool orchestration, session persistence, and multi-channel delivery adapters, with a web or desktop UI layered on top. The leading projects ship combined totals of **hundreds of issues and PRs per 24-hour cycle**, indicating a mature and highly engaged global contributor base.

---

## 2. Activity Comparison

| Project | Issues (updated 24h) | PRs (updated 24h) | Recent Release | Open Issues | Health Signal |
|---|---|---|---|---|---|
| **OpenClaw** | 500 (346 open) | 500 (394 open) | 2026.6.1 | 346 | 🟡 Active — high volume, review bottleneck |
| **NanoBot** | 6 (1 open) | 77 (61 merged, 16 open) | None | 1 | 🟢 High throughput, responsive |
| **Hermes Agent** | 50 (32 open) | 50 (32 open) | v0.15.1 (May 29) | — | 🟡 Desktop bugs generating churn |
| **PicoClaw** | 5 (1 open) | 19 (12 merged, 7 open) | v0.2.9 | — | 🟢 Fast bug turnaround |
| **NanoClaw** | 1 (1 open) | 8 (3 merged, 5 open) | None | — | 🟢 Focused channel hardening |
| **IronClaw** | 40 (25 open) | 50 (19 merged, 31 open) | None | — | 🟢 High-velocity Reborn sprint |
| **LobsterAI** | 1 (1 open) | 17 (all merged) | v2026.5.28 | 1 | 🟢 Efficient, internal-driven |
| **Moltis** | 2 (2 open) | 4 (0 merged, 4 open) | None | — | 🟡 Low closure rate, review bottleneck |
| **CoPaw** | 32 (13 open) | 26 (16 merged, 10 open) | v1.1.11-beta.1 | — | 🟢 Strong iteration, plugin growth |
| **ZeroClaw** | 35 (30 open) | 50 (17 merged, 33 open) | None (v0.8.0 tracker) | — | 🟡 Stabilization push, build regressions |
| **NullClaw** | 0 | 0 | — | — | ⚪ No activity |
| **TinyClaw** | 0 | 0 | — | — | ⚪ No activity |
| **ZeptoClaw** | 0 | 0 | — | — | ⚪ No activity |

**Key takeaway:** OpenClaw dominates in absolute volume (500+ issues and PRs each) but has the highest backlog ratio (394 open PRs). NanoBot and LobsterAI show the most efficient merge ratios. IronClaw and ZeroClaw are in high-velocity development sprints without recent releases, suggesting imminent version bumps.

---

## 3. OpenClaw's Position

### Advantages vs. Peers

- **Largest community by far**: 500 issues + 500 PRs in 24 hours dwarfs all competitors. This creates a rich feedback loop and a deep contributor pipeline, but also a significant review-capacity bottleneck.
- **Broadest channel coverage**: OpenClaw supports Slack, Discord, Telegram, WhatsApp, Matrix, Mattermost, Feishu, QQBot, Google Chat, and Zalo — more than any peer. This makes it the de facto choice for multi-channel deployments.
- **SQLite migration leadership**: The 2026.6.1 SQLite session/transcript migration is the most ambitious storage-layer refactor in the ecosystem. While it has introduced regressions (cron state wipe, session issues), it positions OpenClaw for better long-term session durability and queryability.
- **Plugin and SDK surface**: OpenClaw's plugin contribution slots, control UI SDK, and hook surfaces are more mature than most peers, enabling richer third-party extensions.

### Technical Approach Differences

| Dimension | OpenClaw | Peers |
|---|---|---|
| **Runtime** | Transitioning from Pi to Codex (in progress) | Hermes uses its own runtime; IronClaw is Rust-based (Reborn); ZeroClaw is Rust-native |
| **Storage** | SQLite migration (2026.6.1) | Hermes uses SQLite with pluggable SessionDB RFC; PicoClaw uses SQLite; IronClaw uses LibSQL |
| **Architecture** | Monolithic gateway with channel adapters | IronClaw uses actor/subject separation; ZeroClaw uses a cleaner product-adapter facade; NanoClaw is minimalist |
| **Desktop** | Web dashboard | Hermes has a full Electron desktop app; CoPaw has Tauri desktop; LobsterAI has Cowork desktop |
| **Language** | TypeScript/Node.js | IronClaw and ZeroClaw are Rust; PicoClaw is Go; NanoBot is Python |

### Community Size Comparison

OpenClaw's 346 open issues and 394 open PRs indicate a community roughly **5–10× larger** than the next most active projects (IronClaw, ZeroClaw, Hermes Agent). However, the backlog-to-throughput ratio suggests OpenClaw's maintainer team is stretched thin — many P1 bugs lack fix PRs after weeks. Smaller projects like NanoBot and PicoClaw achieve faster per-issue resolution due to tighter scope and more focused maintainer attention.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging simultaneously across multiple projects, indicating ecosystem-wide convergence:

### 4.1 Multi-Channel Delivery Correctness
**Projects:** OpenClaw, NanoClaw, Moltis, CoPaw, ZeroClaw
- Silent message drops (Signal DMs in NanoClaw, Slack in OpenClaw, WhatsApp LID in NanoClaw)
- Thread/reply scoping regressions (Matrix in OpenClaw)
- Streaming UX fragmentation (Telegram in Moltis, Feishu in OpenClaw)
- **Core need:** A shared channel-testing harness or conformance suite that validates delivery semantics (streaming, threading, reactions, media) across adapters.

### 4.2 Session & Context Management
**Projects:** OpenClaw, Hermes Agent, ZeroClaw, CoPaw, Moltis
- Context bloat from bootstrap re-injection (OpenClaw #67419)
- `/compact` ignoring model `max_input_length` (CoPaw #4937, OpenClaw #90185)
- Tool-result bloat after compaction/rehydration (Moltis #1089)
- Stuck session recovery (OpenClaw #76087)
- **Core need:** Standardized compaction strategies that are model-aware and preserve tool-call integrity across rehydration.

### 4.3 Local Model & Ollama Reliability
**Projects:** ZeroClaw, OpenClaw, NanoBot, Moltis
- Ollama tool-calling failures (ZeroClama #5962, OpenClaw Codex/Pi transition)
- LSP integration to reduce hallucinations (ZeroClaw #5907)
- Local STT engines (Moltis #1102 — FunASR/SenseVoice)
- **Core need:** A local-model compatibility layer that normalizes tool-call streaming, vision, and function-calling across Ollama, llama.cpp, and similar runtimes.

### 4.4 Subagent Lifecycle & Delivery
**Projects:** OpenClaw, IronClaw, NanoBot, CoPaw
- Subagent completion delivery lost on timeout (OpenClaw #67777)
- Subagent results never delivered to parent (IronClaw #4084)
- Subagent MCP tool inheritance (NanoBot #4192)
- Subagent lifecycle events (CoPaw #4955)
- **Core need:** A reliable subagent completion contract — at-least-once delivery, timeout handling, and parent-session reassembly.

### 4.5 Security & Auth Architecture
**Projects:** OpenClaw, IronClaw, ZeroClaw, CoPaw, NanoClaw
- SSRF guards for MCP HTTP URLs (NanoBot #4123)
- Pluggable security provider interface (ZeroClaw #7142)
- OIDC authentication for RPC/WSS (ZeroClaw #7141)
- Sensitive data masking (OpenClaw #64046)
- Symlink workspace escapes (NanoBot #4119)
- **Core need:** A shared security model for agent gateways — workspace isolation, credential scoping, and execution confirmation tiers.

### 4.6 MCP (Model Context Protocol) Reliability
**Projects:** NanoBot, CoPaw, ZeroClaw, LobsterAI
- MCP reconnection after session drop (NanoBot #4027)
- MCP tool name sanitization for OpenAI/Anthropic (CoPaw #4958)
- MCP server startup optimization (LobsterAI #2091)
- MCP dashboard management UI (ZeroClaw #7229)
- **Core need:** MCP has become critical infrastructure; the ecosystem needs standardized connection lifecycle management, URL validation, and tool-name normalization.

---

## 5. Differentiation Analysis

| Project | Primary Target User | Key Differentiator | Technical Stack | Deployment Model |
|---|---|---|---|---|
| **OpenClaw** | Power users, multi-channel operators | Broadest channel coverage; plugin ecosystem | TS/Node → Codex runtime | Self-hosted gateway |
| **NanoBot** | Developers, researchers | Clean architecture; fast iteration; WebUI polish | Python | CLI + WebUI |
| **Hermes Agent** | Desktop-first users | Full desktop app (Electron); Nous Portal integration | TS/Electron + Python | Desktop + remote gateway |
| **PicoClaw** | Edge/embedded users | Lightweight; Go-based; multi-provider | Go | Single binary |
| **NanoClaw** | Minimalist users | Small footprint; channel-focused | TS/Node | Self-hosted |
| **IronClaw** | Production/enterprise | Rust performance; Reborn actor model; NEAR AI integration | Rust | Self-hosted + IronHub |
| **LobsterAI** | Enterprise (Chinese market) | Cowork desktop; Kit marketplace; MCP tooling | TS + Python | Desktop + cloud |
| **Moltis** | Browser automation users | Shadow-DOM piercing; multi-channel | TS/Node | Self-hosted |
| **CoPaw** | Plugin ecosystem builders | Prompt section registry; Tauri desktop; multi-channel | Python + Tauri | Desktop + self-hosted |
| **ZeroClaw** | Rust enthusiasts; security-conscious | Rust-native; A2A protocol interest; pluggable auth | Rust | Self-hosted gateway |

**Notable architectural split:** The ecosystem is dividing between **TypeScript/Node.js** projects (OpenClaw, NanoClaw, Moltis, Hermes) that prioritize rapid iteration and channel breadth, and **Rust** projects (IronClaw, ZeroClaw) that prioritize performance, memory safety, and clean architectural boundaries. **Python** occupies a middle ground (NanoBot, CoPaw) with strong library ecosystems and desktop integration. **Go** (PicoClaw) serves the lightweight/edge niche.

---

## 6. Community Momentum & Maturity

### Tier 1 — High Momentum, Rapid Iteration
- **OpenClaw**: Massive volume but review-constrained. The SQLite migration and Codex runtime transition are generating significant regression surface. Needs maintainer bandwidth infusion.
- **IronClaw**: Aggressive "land the Reborn platform" sprint. 19 PRs merged in 24h with critical bug fixes shipping same-day. Architectural debt in composition layer needs attention.
- **ZeroClaw**: Stabilization push toward v0.8.0. Build regressions from recent refactors are being patched rapidly. Web UI feature work is accelerating.

### Tier 2 — Steady Iteration, Focused Scope
- **NanoBot**: Exceptional merge throughput (61/77 PRs closed). Clean, well-scoped contributions. Desktop shell PR (#4195) signals expansion.
- **CoPaw**: Strong plugin ecosystem growth. 35 items closed in 24h. Windows-specific issues remain a friction point.
- **Hermes Agent**: Desktop surface area generating bugs faster than triage. Remote gateway on macOS is a critical pain point. Team is salvaging old PRs aggressively.

### Tier 3 — Maintenance Mode, Targeted Fixes
- **PicoClaw**: Fast bug turnaround (same-day fixes for critical issues). v0.2.9 regression cleanup in progress.
- **NanoClaw**: Focused on channel hardening (Signal, WhatsApp LID). Low activity but high fix quality.
- **LobsterAI**: Efficient internal-driven development. Only 1 open issue. Gateway startup reliability (#769) is the main concern.
- **Moltis**: Low closure rate. Shadow-DOM and Telegram streaming fixes awaiting review.

### Tier 4 — Dormant
- **NullClaw, TinyClaw, ZeptoClaw**: No activity in the reporting window.

---

## 7. Trend Signals

### 7.1 The MCP Inflection Point
MCP has moved from experimental to **critical infrastructure** across the ecosystem. Projects are investing in connection lifecycle management (NanoBot), tool name sanitization (CoPaw), startup optimization (LobsterAI), and dashboard management (ZeroClaw). **Implication for developers:** MCP server compatibility and connection resilience should be first-class design concerns, not afterthoughts.

### 7.2 The Rust Migration Signal
Two of the most architecturally ambitious projects (IronClaw, ZeroClaw) are Rust-based, and both cite resource efficiency and clean architectural boundaries as primary motivations. ZeroClaw's community explicitly praises its lightweight resource profile. **Implication:** Rust is becoming the language of choice for performance-critical agent runtimes, while TypeScript/Node.js and Python dominate the rapid-iteration and desktop-integration layers.

### 7.3 Desktop as a First-Class Surface
Hermes Agent, CoPaw, and LobsterAI are all investing heavily in desktop applications (Electron/Tauri/native). The recurring theme is that **web-only interfaces are insufficient** for personal AI assistant use cases — users expect native-feeling desktop experiences with system tray, voice input, and offline capability. **Implication:** Desktop integration is becoming a competitive differentiator, not a nice-to-have.

### 7.4 The Silent Failure Tax
Across OpenClaw, NanoClaw, Hermes Agent, and ZeroClaw, the most damaging user experience pattern is **silent failure** — connections dropping without warning, messages being lost without error, and state corruption going undetected. Projects that invest in proactive health monitoring, connection lifecycle visibility, and clear error propagation will win user trust. **Implication:** Observability and failure-mode UX are underinvested across the ecosystem.

### 7.5 Multi-Agent as the Next Frontier
IronClaw's subagent lifecycle work, NanoBot's subagent MCP inheritance, OpenClaw's subagent delivery fixes, and ZeroClaw's A2A protocol interest all point to **multi-agent orchestration** as the next major capability frontier. The ecosystem is moving from "single agent, multiple channels" to "multiple agents, coordinated workflows." **Implication:** Subagent completion contracts, inter-agent communication protocols, and agent discovery mechanisms will be critical infrastructure in the next 12 months.

### 7.6 Security Consciousness Rising
SSRF guards (NanoBot), pluggable security providers (ZeroClaw), sensitive data masking (OpenClaw), and execution confirmation tiers (ZeroClaw) all indicate that **users are deploying agents in security-sensitive environments** and demanding enterprise-grade controls. **Implication:** Security architecture is shifting from bolt-on to foundational — projects that treat it as a core design constraint will have an adoption advantage.

### 7.7 The Local Model Reliability Gap
Ollama tool-calling failures (ZeroClaw), LSP integration requests (ZeroClaw), and local STT engine demands (Moltis) all reflect a growing user base that wants **fully local or hybrid deployments** but is hitting reliability walls. Cloud-provider APIs remain more stable for tool-calling and structured output. **Implication:** The ecosystem needs a local-model compatibility normalization layer — or acceptance that hybrid (cloud + local) architectures are the pragmatic near-term path.

---

*Report generated by OWL — ZOO Company. Data sources: individual project GitHub repositories, snapshots 2026-06-05.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-05

---

## 1. Today's Overview

NanoBot is experiencing a **high-activity development day** with 77 PRs updated (61 merged/closed, 16 still open) and 6 issues updated (5 closed, 1 open). The project is clearly in a rapid iteration phase, with a strong focus on **stability hardening, test infrastructure, and WebUI polish**. No new releases were published today, but the volume of merged PRs suggests a release may be imminent. The contributor base is broad and active, with multiple authors landing fixes across providers, MCP, WebUI, CLI, and agent lifecycle systems.

---

## 2. Releases

**None.** No new versions were published on 2026-06-05.

---

## 3. Project Progress

### Merged / Closed PRs (Highlights)

| # | PR | Summary |
|---|-----|---------|
| [#4176](https://github.com/HKUDS/nanobot/pull/4176) | **Add run-level agent hook lifecycle** | Introduces `AgentRunHookContext` with `before_run`, `after_run`, `on_error`, `on_finally` callbacks — a significant extensibility improvement for plugin and observability authors. |
| [#4027](https://github.com/HKUDS/nanobot/pull/4027) | **Fix MCP reconnection** | Resets `_mcp_connected` on session drop and adds reconnect callbacks to MCP wrapper classes. Fixes a critical bug where dead MCP sessions could never reconnect. |
| [#4126](https://github.com/HKUDS/nanobot/pull/4126) | **Azure AAD auth for Azure OpenAI** | Adds Azure Identity-based authentication as an alternative to API key auth for the Azure OpenAI provider. Closes [#4125](https://github.com/HKUDS/nanobot/issues/4125). |
| [#3984](https://github.com/HKUDS/nanobot/pull/3984) | **Preserve OpenAI-compatible tool call IDs** | Fixes tool call/result ID mismatches for GLM-4.7, Kimi 2.6 via antchat, and other OpenAI-compatible APIs. Closes [#3980](https://github.com/HKUDS/nanobot/issues/3980). |
| [#4164](https://github.com/HKUDS/nanobot/pull/4164) | **Fall back to `uv pip` when pip unavailable** | Fixes WebUI CLI App installs when nanobot is installed via `uv tool`. Closes [#4158](https://github.com/HKUDS/nanobot/issues/4158). |
| [#3966](https://github.com/HKUDS/nanobot/pull/3966) | **Render CLI-generated image artifacts in WebUI** | Enables WebUI to display raster images generated by CLI apps using workspace-relative Markdown paths, including live streaming. |
| [#4163](https://github.com/HKUDS/nanobot/pull/4163) | **Fork-from-here for user messages in WebUI** | Adds the ability to fork a conversation from any historical user message, with provenance metadata stored on the new session. |
| [#4189](https://github.com/HKUDS/nanobot/pull/4189) | **Deterministic unit test coverage improvements** | Replaces timing-based waits with deterministic clocks/events across command, agent, channel, pairing, and tool tests. |
| [#4191](https://github.com/HKUDS/nanobot/pull/4191) | **Enhanced memory management** | Improves memory management internals (details sparse in PR body). |

### Open PRs Worth Watching

| # | PR | Summary |
|---|-----|---------|
| [#4195](https://github.com/HKUDS/nanobot/pull/4195) | **Desktop shell polish** | First open desktop surface for nanobot, with shared WebUI chat/settings and gateway APIs for file preview, skills, and automation. |
| [#4192](https://github.com/HKUDS/nanobot/pull/4192) | **Subagent MCP tool inheritance** | Adds `tools.subagentMcpAccess` config to let spawned subagents inherit live MCP tools from the main agent. |
| [#4123](https://github.com/HKUDS/nanobot/pull/4123) | **SSRF guard for MCP HTTP URLs** | Validates MCP SSE/streamable HTTP URLs against SSRF before probing; validates redirect targets via `httpx` request hooks. |
| [#4119](https://github.com/HKUDS/nanobot/pull/4119) | **Block relative symlink workspace escapes** | Security fix preventing exec commands from following symlinks outside the workspace. |
| [#4190](https://github.com/HKUDS/nanobot/pull/4190) | **Stricter tool call validation** | Near-miss tool names and scalar/non-object arguments now return explicit errors instead of being guessed. |

---

## 4. Community Hot Topics

### Most Discussed Issues

1. **[#912](https://github.com/HKUDS/nanobot/issues/912) — Support Task-Specific Model Configuration** (4 comments, 👍3, open since Feb 20, stale)
   - **Underlying need:** Users want to assign different models to different task types (conversational, tool use, browser use) rather than a single global model. This is a common production optimization pattern — cheaper models for simple chat, more capable ones for complex tool orchestration. Despite 3 upvotes and 4 comments, it's been marked stale, suggesting it needs a champion or a design proposal to move forward.

2. **[#1121](https://github.com/HKUDS/nanobot/issues/1121) — Fallback model not triggered on LLM timeout** (3 comments, 👍3, closed)
   - **Underlying need:** When a primary model times out or returns 503, the configured fallback models are not retried. This is a critical reliability gap for production deployments. The issue was closed today, likely by one of the merged PRs addressing fallback/retry logic, though no explicit closing PR is referenced.

### Activity Signals

- **77 PRs updated in 24 hours** is an exceptionally high throughput, indicating either a sprint/merge window or a very active maintainer team batch-processing contributions.
- Multiple contributors (chengyongru, yu-xin-c, Re-bin) are landing multi-PR batches, suggesting coordinated development efforts.

---

## 5. Bugs & Stability

| Severity | Issue / PR | Status | Details |
|----------|-----------|--------|---------|
| 🔴 **Critical** | [#4168](https://github.com/HKUDS/nanobot/issues/4168) — MCP server unreachable after random time | **CLOSED** (fix likely via [#4027](https://github.com/HKUDS/nanobot/pull/4027)) | MCP sessions dying silently with "Session terminated" error, requiring full nanobot restart. The `_mcp_connected` flag was never reset, preventing reconnection. |
| 🔴 **Critical** | [#1121](https://github.com/HKUDS/nanobot/issues/1121) — Fallback model not triggered on timeout/503 | **CLOSED** | Agent returns error to user instead of retrying with fallback models. A significant reliability gap for production use. |
| 🟡 **Medium** | [#4158](https://github.com/HKUDS/nanobot/issues/4158) — WebUI CLI App pip installs fail under `uv tool` | **CLOSED** (fixed by [#4164](https://github.com/HKUDS/nanobot/pull/4164)) | `sys.executable` under `uv tool` has no `pip` module. Fix falls back to `uv pip`. |
| 🟡 **Medium** | [#4125](https://github.com/HKUDS/nanobot/issues/4125) — No Azure AAD auth for Azure OpenAI | **CLOSED** (fixed by [#4126](https://github.com/HKUDS/nanobot/pull/4126)) | Azure subscriptions with strict policies can't use API key auth. AAD support now added. |
| 🟢 **Low** | [#4178](https://github.com/HKUDS/nanobot/issues/4178) — No keyboard shortcut for new chat in WebUI | **CLOSED** | Only `Cmd/Ctrl+K` (session search) existed. New chat required mouse interaction. |

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood of Next Version | Notes |
|---------|--------|---------------------------|-------|
| **Desktop app surface** | [#4195](https://github.com/HKUDS/nanobot/pull/4195) (open PR) | **High** | PR is already in review. First desktop shell with shared WebUI surfaces. |
| **Subagent MCP tool inheritance** | [#4192](https://github.com/HKUDS/nanobot/pull/4192) (open PR) | **High** | Opt-in config `tools.subagentMcpAccess`. Clean, well-scoped PR with tests. |
| **Task-specific model configuration** | [#912](https://github.com/HKUDS/nanobot/issues/912) (stale) | **Low** | Marked stale; needs redesign or champion. Complex feature touching agent routing. |
| **SSRF hardening for MCP** | [#4119](https://github.com/HKUDS/nanobot/pull/4119), [#4123](https://github.com/HKUDS/nanobot/pull/4123) (open PRs) | **High** | Security fixes, likely to be merged soon. |
| **Stricter tool call validation** | [#4190](https://github.com/HKUDS/nanobot/pull/4190) (open PR) | **Medium** | Improves error messages and prevents silent misrouting of tool calls. |
| **`/skill` slash command** | [#3968](https://github.com/HKUDS/nanobot/pull/3968) (open PR) | **Medium** | Adds discoverability for enabled skills. Small, self-contained feature. |

---

## 7. User Feedback Summary

**Pain Points:**
- **MCP reliability** is a recurring theme — sessions dying silently ([#4168](https://github.com/HKUDS/nanobot/issues/4168)) and reconnection being impossible without restart. This is a core infrastructure concern for users relying on MCP tool servers.
- **Model fallback not working** ([#1121](https://github.com/HKUDS/nanobot/issues/1121)) undermines confidence in production deployments. Users expect graceful degradation when primary models fail.
- **Azure enterprise users** are blocked by API key-only auth ([#4125](https://github.com/HKUDS/nanobot/issues/4125)), a common enterprise policy constraint.
- **`uv tool` install friction** ([#4158](https://github.com/HKUDS/nanobot/issues/4158)) — as `uv` becomes the recommended Python install path, nanobot needs to handle pip-less environments gracefully.

**Satisfaction Signals:**
- High PR merge rate (61 closed today) suggests responsive maintainers, which correlates with positive contributor sentiment.
- WebUI improvements (image rendering, fork-from-here, keyboard shortcuts) show attention to daily UX polish.
- Test infrastructure investments (deterministic tests, harnesses) signal maturing engineering practices.

---

## 8. Backlog Watch

| Item | Age | Risk | Recommendation |
|-----|-----|------|----------------|
| [#912](https://github.com/HKUDS/nanobot/issues/912) — Task-specific model config | **104 days** (Feb 20), marked stale | Feature request with community support (👍3, 4 comments) going stale | Needs a maintainer to either close with a design direction or label as `help wanted`. Risk of community frustration if left to rot. |
| [#3968](https://github.com/HKUDS/nanobot/pull/3968) — `/skill` slash command | **13 days** (May 23), still open | Small, self-contained PR with clear value | Low risk but should be reviewed soon to avoid contributor attrition. |
| [#4053](https://github.com/HKUDS/nanobot/pull/4053) — Read-only roots out of write paths | **7 days** (May 29), still open | Security-adjacent fix | Should be prioritized — filesystem permission correctness is important for workspace isolation. |
| [#3982](https://github.com/HKUDS/nanobot/pull/3982) — Scripted agent runner harness | **12 days** (May 24), still open | Test infrastructure | Important for long-term maintainability; should be merged or reviewed. |

---

*Data source: [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot) — Snapshot as of 2026-06-05.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent — Project Digest
**Date: 2026-06-05**

---

## 1. Today's Overview

Hermes Agent remains in a period of intense activity with **50 issues and 50 PRs updated in the last 24 hours**, reflecting a large and highly engaged contributor base. No new releases have landed today, but the project is clearly in a heavy stabilization and feature-shipping cycle following the v0.15.1 desktop release. The overwhelming majority of today's activity clusters around **Desktop app reliability** (remote gateway sessions, update loops, UI bugs), **Docker sandbox resilience**, and **multi-agent correctness** (memory isolation, session scoping). The volume of closed/merged PRs (18) relative to open ones (32) suggests maintainers are actively clearing backlog, but the equally high number of new issues signals that the desktop surface area is still maturing rapidly.

---

## 2. Releases

**None today.** The latest known release remains **v0.15.1 (2026.5.29)**, which is the version referenced across nearly all bug reports filed in the past 48 hours.

---

## 3. Project Progress

### Merged / Closed PRs (Today)

| # | PR | Summary |
|---|-----|---------|
| [#39002](https://github.com/NousResearch/hermes-agent/pull/39002) | `fix(openviking): scope memory writes per-agent` | Fixes cross-tenant memory leakage in multi-agent deployments — a high-severity correctness bug. Salvage of #37279. |
| [#39415](https://github.com/NousResearch/hermes-agent/pull/39415) | `fix(docker): recover from out-of-band container removal` | Persistent Docker sandbox now re-spawns containers removed externally (OOM, prune, daemon restart). Salvage of #36631 with added regression tests. |
| [#39410](https://github.com/NousResearch/hermes-agent/pull/39410) | `fix(desktop): rename session via session.title RPC` | Fixes `/title` slash command on all platforms (was broken per #38508). Supersedes #38576. |
| [#39066](https://github.com/NousResearch/hermes-agent/pull/39066) | `fix(file): verify file exists after write` | Catches silent CWD-drift failures in long-running sessions. Salvage of #26336. |
| [#39073](https://github.com/NousResearch/hermes-agent/pull/39073) | `fix(vision): detect vision-capable providers via ProviderProfile` | Enables multipart image results for providers outside the hardcoded allowlist (e.g., xiaomi). Superseded by #39422. |
| [#39402](https://github.com/NousResearch/hermes-agent/pull/39402) | `fix(desktop): offer remote sign-in on gated-gateway boot failure` | Users hitting auth-lapse on remote gateway restart now get a "Sign-in" path instead of a dead-end retry loop. |
| [#39405](https://github.com/NousResearch/hermes-agent/pull/39405) | `fix(desktop): switch model order` | Model picker now lists HA (Hermes-native) models before Portal models. |
| [#39409](https://github.com/NousResearch/hermes-agent/pull/39409) | `feat(models): add qwen/qwen3.7-plus` | New model added to both Nous Portal and OpenRouter catalogs. |
| [#39128](https://github.com/NousResearch/hermes-agent/pull/39128) | `docs: make dashboard/gateway prerequisites explicit` | Clarifies that Desktop's "remote backend" is `hermes dashboard`, not the gateway process. |
| [#26227](https://github.com/NousResearch/hermes-agent/pull/26227) | `fix(openrouter): show all tool-capable models in /model picker` | Expands OpenRouter picker from ~31 hardcoded models to the full live API list. |
| [#39421](https://github.com/NousResearch/hermes-agent/pull/39421) | `fix(deps): bump react-router-dom to 7.17.0` | Clears npm audit advisory GHSA-8x6r-g9mw-2r78 / CVE-2026-42342. |

**Key themes:** The team is aggressively salvaging and landing older community PRs (noted as "salvage of #XXXX"), indicating a push to clear long-standing bugs. Docker resilience, desktop auth/session correctness, and multi-agent memory isolation are the dominant fix categories.

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

1. **[#23717](https://github.com/NousResearch/hermes-agent/issues/23717) — RFC: Pluggable SessionDB Provider (PostgreSQL, MySQL, and Beyond)** — 7 comments
   - **Underlying need:** Users running Hermes in production or multi-instance deployments are hitting SQLite's concurrency and hot-update limitations. This RFC proposes a provider interface for external databases. This is a **scalability and deployment maturity** signal — the project is outgrowing its embedded-store origins.

2. **[#34120](https://github.com/NousResearch/hermes-agent/issues/34120) — Cronjob `create` action always fails with "schedule is required"** — 5 comments
   - **Underlying need:** The cron tool's parameter validation is rejecting valid inputs, blocking a core autonomous-agent use case (scheduled recurring tasks). This is a **reliability blocker** for power users building agent workflows.

3. **[#37549](https://github.com/NousResearch/hermes-agent/issues/37549) — Flickering on Desktop chat transcripts** — 5 comments, 5 👍
   - **Underlying need:** Auto-scroll logic fights the user during and after streaming. This is a **UX polish** issue but with the highest community reaction count today, indicating it affects many users.

4. **[#38272](https://github.com/NousResearch/hermes-agent/issues/38272) — Desktop chat auto-scrolls erratically during streaming** — 4 comments
   - Closely related to #37549; likely the same root cause. Two independent reporters confirm this is a widespread desktop UX regression.

5. **[#23297](https://github.com/NousResearch/hermes-agent/issues/23297) — RuntimeWarning on `/clear` or `/new` in CLI** — 4 comments (closed)
   - An async coroutine leak in the CLI confirmation flow. Closed today, likely resolved.

### Notable Open PRs

- **[#39423](https://github.com/NousResearch/hermes-agent/pull/39423) — `feat(installer): do shallow clones`** — Would significantly reduce install bandwidth and time. High practical impact.
- **[#39353](https://github.com/NousResearch/hermes-agent/pull/39353) — `change(tooling): typecheck in CI, update TS to 6`** — Infrastructure hardening; would catch entire classes of desktop bugs pre-merge.
- **[#38030](https://github.com/NousResearch/hermes-agent/pull/38030) — `feat: improve Discord scoped sessions and guardrails`** — Platform-specific session isolation improvements for Discord.

---

## 5. Bugs & Stability

### Ranked by Severity

#### P2 — High Priority

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#38115](https://github.com/NousResearch/hermes-agent/issues/38115) | Remote gateway session won't hold on macOS — SIGTERM → WebSocket 1012 loop; auto-updater corrupts install | ⚠️ None yet |
| [#39365](https://github.com/NousResearch/hermes-agent/issues/39365) | Misleading "OpenRouter API key missing" error when real failure is gateway 401 | ⚠️ None yet |
| [#39332](https://github.com/NousResearch/hermes-agent/issues/39332) | Mac installer failure (build/packaging error) | ⚠️ None yet |
| [#39333](https://github.com/NousResearch/hermes-agent/issues/39333) | Desktop strands managed install on detached HEAD, reports false "cancelled by user" | ⚠️ None yet |
| [#38873](https://github.com/NousResearch/hermes-agent/issues/38873) | Remote gateway mode flaps back to local backend after successful remote validation | ⚠️ None yet |

#### P3 — Medium Priority (Desktop UX Cluster)

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#37549](https://github.com/NousResearch/hermes-agent/issues/37549) | Chat transcript flickering / scroll position jumps | ⚠️ None yet |
| [#38272](https://github.com/NousResearch/hermes-agent/issues/38272) | Aggressive auto-scroll fights user input during streaming | ⚠️ None yet |
| [#39349](https://github.com/NousResearch/hermes-agent/issues/39349) | `~/.hermes/.env` overrides session token, breaks `/api/ws` | ⚠️ None yet |
| [#39231](https://github.com/NousResearch/hermes-agent/issues/39231) | CJK IME: send button not shown during composition | ⚠️ None yet |
| [#39292](https://github.com/NousResearch/hermes-agent/issues/39292) | TTS "Read aloud" times out intermittently (15s) | ⚠️ None yet |
| [#39339](https://github.com/NousResearch/hermes-agent/issues/39339) | Update installs but version unchanged — update loop on macOS | ⚠️ None yet |
| [#38858](https://github.com/NousResearch/hermes-agent/issues/38858) | Pinned sessions don't persist across app restart | ⚠️ None yet |
| [#38901](https://github.com/NousResearch/hermes-agent/issues/38901) | Model display stale when switching sessions | ⚠️ None yet |
| [#38078](https://github.com/NousResearch/hermes-agent/issues/38078) | Pasted images fail with remote gateway (local paths sent) | ⚠️ None yet |

**Stability assessment:** There is a **concerning cluster of P2 desktop issues** — particularly around remote gateway reliability on macOS (#38115, #39365, #38873) and the update/install pipeline (#39332, #39333, #39339) — that currently lack fix PRs. These represent potential blockers for users relying on remote or managed deployments. The P3 desktop UX bugs are numerous but non-critical; they degrade daily usability.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood of near-term delivery |
|-------|---------|----------------------------------|
| [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) | Pluggable SessionDB (PostgreSQL/MySQL) | 🟡 Medium — RFC stage, significant architectural change, but clear demand from production users |
| [#21172](https://github.com/NousResearch/hermes-agent/issues/21172) | First-class Loop Contract for cron-backed agent loops | 🟡 Medium — Aligns with Boris Cherny's public vision for persistent agent workflows; strategic fit |
| [#15621](https://github.com/NousResearch/hermes-agent/issues/15621) | Split storage gate from LLM-invocation gate in group chats | 🟢 High — Clean separation of concerns, frequently requested for Slack/Discord/WhatsApp deployments |
| [#38894](https://github.com/NousResearch/hermes-agent/issues/38894) | Separate cron/autonomous sessions from manual chats in Desktop | 🟢 High — Directly addresses desktop UX pain; low implementation complexity |
| [#38849](https://github.com/NousResearch/hermes-agent/issues/38849) | Quick workspace switcher in Desktop status bar | 🟢 High — Small feature, high usability impact |
| [#34390](https://github.com/NousResearch/hermes-agent/issues/34390) | `--allowed-hosts` flag for reverse-proxy/Tailscale access | 🟢 High — Security-adjacent, well-scoped, common deployment need |

**Prediction for next release (likely v0.15.2 or v0.16.0):** Expect the session-list separation (#38894), workspace switcher (#38849), and `--allowed-hosts` (#34390) to land — they are well-scoped, frequently requested, and align with the desktop maturation trajectory. The pluggable SessionDB RFC (#23717) is a longer-term architectural bet.

---

## 7. User Feedback Summary

### Pain Points

- **Remote gateway on macOS is a minefield.** Multiple users report cascading failures: session token mismatches (#39349), SIGTERM loops (#38115), misleading error messages (#39365), and the app silently falling back to local mode (#38873). This is the **single biggest source of user frustration** today.
- **Desktop update/install pipeline is broken for some Mac users.** Build failures (#39332), detached HEAD states (#39333), and version-not-updating loops (#39339) suggest the auto-updater and packaging scripts need hardening.
- **Chat UX regressions are widespread.** Auto-scroll fighting (#37549, #38272), stale model display (#38901), and lost pins (#38858) make the desktop feel unreliable for daily use.
- **CJK IME users are underserved.** The send button not appearing during composition (#39231) is a basic input-method bug that blocks entire user segments.

### Satisfaction Signals

- The team's aggressive PR salvage and merge pace (18 closed today) is a strong positive signal — users see their reported bugs being addressed.
- The OpenRouter model picker expansion (#26227) and new model additions (#39409) show responsiveness to model ecosystem changes.
- Docker sandbox resilience fixes (#39415) address a critical pain point for VPS-deployed users.

### Use Cases Observed

- **Persistent autonomous agents** with cron-backed loops (news digests, monitoring) — driving demand for loop contracts and cron reliability.
- **Remote gateway + Tailscale** deployments — a popular setup that is currently fragile on macOS.
- **Multi-agent deployments** with shared infrastructure — driving demand for memory isolation and pluggable session stores.

---

## 8. Backlog Watch

### Long-Unanswered Issues Needing Maintainer Attention

| Issue | Age | Why It Matters |
|-------|-----|----------------|
| [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) — Pluggable SessionDB RFC | Created 2026-05-11 (25 days) | Architectural RFC with 7 comments and active discussion; needs a maintainer decision (accept/reject/iterate) to unblock contributors. |
| [#15621](https://github.com/NousResearch/hermes-agent/issues/15621) — Split storage from LLM-invocation gate | Created 2026-04-25 (41 days) | Clean feature request with clear semantics; 41 days without maintainer response. |
| [#21172](https://github.com/NousResearch/hermes-agent/issues/21172) — First-class Loop Contract | Created 2026-05-07 (29 days) | Strategic feature aligned with industry direction (Boris Cherny's public comments); needs scoping decision. |
| [#34120](https://github.com/NousResearch/hermes-agent/issues/34120) — Cronjob create always fails | Created 2026-05-28 (8 days) | Blocks a core autonomous-agent workflow; 5 comments, no fix PR yet despite being a straightforward validation bug. |
| [#38115](https://github.com/NousResearch/hermes-agent/issues/38115) — Remote gateway session won't hold on macOS | Created 2026-06-03 (2 days) | P2 severity, no fix PR, affects a popular deployment pattern. Needs triage. |

### Stale PRs at Risk of Going Stale

| PR | Age | Notes |
|----|-----|-------|
| [#38030](https://github.com/NousResearch/hermes-agent/pull/38030) — Discord scoped sessions | Created 2026-06-03 (2 days) | 12-commit branch from external contributor; needs review bandwidth. |
| [#37949](https://github.com/NousResearch/hermes-agent/pull/37949) — Slash command preview fix | Created 2026-06-03 (2 days) | Small, well-scoped desktop UX fix; should be quick to review. |

---

**Overall Project Health: 🟡 Stable but under pressure.** The maintainers are shipping fixes at a strong pace, but the desktop surface area is generating bugs faster than they can be triaged. The remote gateway on macOS and the update pipeline are the two areas most likely to drive user churn if not addressed in the next release cycle. The community is highly active and contributing quality PRs — the project needs maintainer bandwidth for review and architectural decisions more than it needs more code.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-05

---

## 1. Today's Overview

PicoClaw is in a high-activity maintenance phase following the v0.2.9 release. In the last 24 hours, the project saw **5 issues** (4 closed, 1 open) and **19 pull requests** (12 merged/closed, 7 open), indicating a very active contributor base rapidly addressing post-release bugs and dependency updates. No new releases were published today. The majority of activity is concentrated on **stability fixes** (singleton PID, session history, Codex tool calls), **build system robustness** (Go version string parsing), and **dependency churn** (5 Dependabot PRs). The project appears healthy with fast turnaround on bug fixes — most issues reported in the last 1–2 days already have merged PRs.

---

## 2. Releases

**No new releases today.** The latest release remains **v0.2.9** (referenced in multiple issues as the version where regressions were introduced). PR [#2995](https://github.com/sipeed/picoclaw/pull/2995) was merged to update the README News section with highlights from v0.2.5 through v0.2.9, closing the documentation gap reported in [#2981](https://github.com/sipeed/picoclaw/issues/2981).

---

## 3. Project Progress

### Merged/Closed PRs (12)

| PR | Description | Significance |
|---|---|---|
| [#3000](https://github.com/sipeed/picoclaw/pull/3000) | **fix(pid): verify process identity in singleton PID check** | Critical stability fix — prevents crash loop when PID is reused by unrelated process |
| [#3008](https://github.com/sipeed/picoclaw/pull/3008) | **fix: adapt to larksuite oapi-sdk-go v3.9.4 breaking changes** | Follow-up to Dependabot bump; fixes compilation errors from renamed API constants |
| [#3007](https://github.com/sipeed/picoclaw/pull/3007) | **fix: preserve streamed Codex tool calls** | Fixes GPT-5.5 tool-use returning empty responses despite valid function-call events |
| [#2992](https://github.com/sipeed/picoclaw/pull/2992) | **fix(session): skip main-session alias during history promotion** | Fixes v0.2.9 regression where new Web UI sessions inherited old message history |
| [#2996](https://github.com/sipeed/picoclaw/pull/2996) | **fix(tools): handle json.Marshal errors in exec tool responses** | Replaces 7 silent error drops with proper error reporting |
| [#2999](https://github.com/sipeed/picoclaw/pull/2999) | **fix: handle space in go env GOVERSION with firstword** | Build fix for Go toolchains returning version strings with embedded spaces |
| [#2976](https://github.com/sipeed/picoclaw/pull/2976) | **fix: Makefile handle space in go1.25.10 X:nodwarf5** | Related build fix for the same Go version string issue |
| [#2995](https://github.com/sipeed/picoclaw/pull/2995) | **docs: add v0.2.5~v0.2.9 release highlights to README** | Documentation update |
| [#3005](https://github.com/sipeed/picoclaw/pull/3005) | build(deps): bump larksuite/oapi-sdk-go v3.7.5 → v3.9.4 | Dependency update |
| [#3004](https://github.com/sipeed/picoclaw/pull/3004) | build(deps): bump aws-sdk-go-v2/bedrockruntime v1.50.6 → v1.53.3 | Dependency update |
| [#3003](https://github.com/sipeed/picoclaw/pull/3003) | build(deps): bump modernc.org/sqlite v1.50.1 → v1.51.0 | Dependency update |
| [#2963](https://github.com/sipeed/picoclaw/pull/2963) | build(deps): bump larksuite/oapi-sdk-go v3.7.5 → v3.9.3 | Dependency update (superseded by #3005) |

**Key themes:** The project is rapidly hardening v0.2.9. Three significant bug fixes landed (PID identity, session history, Codex tool calls), alongside build system fixes for Go toolchain compatibility. Dependency management is active with 5 Dependabot PRs, though the larksuite SDK required a manual follow-up fix for breaking API changes.

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

1. **[#2720](https://github.com/sipeed/picoclaw/issues/2720)** — *Singleton PID check doesn't verify process identity* (8 comments, closed)
   - **Underlying need:** Production reliability. Users running PicoClaw as a long-lived gateway service need confidence that crash recovery won't enter infinite loops. The PID reuse problem is a classic Unix pitfall, and the community engaged deeply (8 comments) before PR [#3000](https://github.com/sipeed/picoclaw/pull/3000) resolved it.

2. **[#2972](https://github.com/sipeed/picoclaw/issues/2972)** — *Web UI message chaos after v0.2.9 upgrade* (2 comments, closed)
   - **Underlying need:** Clean session isolation. Users expect new chat sessions to start fresh. The regression in v0.2.9's session alias promotion logic broke this expectation, indicating the session management refactor needs more robust testing.

3. **[#3006](https://github.com/sipeed/picoclaw/issues/3006)** — *Codex OAuth GPT-5.5 drops tool calls* (0 comments, closed same day)
   - **Underlying need:** Reliable tool-use with frontier models. As users adopt GPT-5.5 via Codex OAuth, correct handling of streaming function-call events is critical. Fixed within hours by PR [#3007](https://github.com/sipeed/picoclaw/pull/3007).

### Notable Open PRs

- **[#3001](https://github.com/sipeed/picoclaw/pull/3001)** — *fix(tools): allow scheme-less URLs in workspace guard*: Addresses false-positive blocking of commands like `curl wttr.in/Beijing` when workspace restriction is enabled. Practical UX improvement for tool-using agents.

---

## 5. Bugs & Stability

### Ranked by Severity

| Severity | Issue | Status | Fix PR |
|---|---|---|---|
| 🔴 **High** | [#2720](https://github.com/sipeed/picoclaw/issues/2720) — Singleton PID check doesn't verify process identity; stale PID causes crash loop | ✅ Closed | [#3000](https://github.com/sipeed/picoclaw/pull/3000) |
| 🔴 **High** | [#3006](https://github.com/sipeed/picoclaw/issues/3006) — Codex OAuth GPT-5.5 drops tool calls (empty response output) | ✅ Closed | [#3007](https://github.com/sipeed/picoclaw/pull/3007) |
| 🟡 **Medium** | [#2972](https://github.com/sipeed/picoclaw/issues/2972) — v0.2.9 Web UI new sessions inherit old message history | ✅ Closed | [#2992](https://github.com/sipeed/picoclaw/pull/2992) |
| 🟡 **Medium** | [#3002](https://github.com/sipeed/picoclaw/issues/3002) — OneBot group replies use `send_private_msg` instead of `send_group_msg` | 🟠 Open | None yet |
| 🟢 **Low** | [#2999](https://github.com/sipeed/picoclaw/issues/2999) / [#2976](https://github.com/sipeed/picoclaw/pull/2976) — Build fails with Go version strings containing spaces | ✅ Closed | [#2999](https://github.com/sipeed/picoclaw/pull/2999), [#2976](https://github.com/sipeed/picoclaw/pull/2976) |

**Assessment:** All high and medium severity bugs reported in the last 24 hours have been resolved with merged PRs. The remaining open bug ([#3002](https://github.com/sipeed/picoclaw/issues/3002)) is a channel routing issue affecting OneBot group chat users — it incorrectly sends group replies as private messages. This is a functional regression that likely affects all OneBot group chat users and should be prioritized.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed in the last 24 hours. However, several **implicit roadmap signals** emerge from the PR backlog:

- **Open PRs awaiting review** suggest upcoming improvements:
  - [#2956](https://github.com/sipeed/picoclaw/pull/2956) — Preserve channel `enabled` state when merging `security.yml` (configuration UX)
  - [#2985](https://github.com/sipeed/picoclaw/pull/2985) — Show both summarize and compress thresholds in `/context` command (transparency/usability)
  - [#2934](https://github.com/sipeed/picoclaw/pull/2934) — WhatsApp native mode support via `use_native` flag (channel expansion)

- **Dependency velocity** is high (5 Dependabot PRs in 24h), suggesting the project is actively keeping up with upstream SDK changes across LarkSuite, Anthropic, AWS Bedrock, and SQLite.

- **Prediction:** The next release (likely v0.2.10 or v0.3.0) will be a stability-focused patch incorporating the session history fix, PID identity fix, Codex tool-call fix, and the pending channel configuration PRs. The Anthropic SDK bump to v1.46.0 ([#2962](https://github.com/sipeed/picoclaw/pull/2962)) is a significant version jump that may bring new model support.

---

## 7. User Feedback Summary

### Pain Points

1. **v0.2.9 regressions** — The latest release introduced at least two user-visible bugs (Web UI session history contamination, and potentially the OneBot group messaging issue). Users on FreeBSD and other platforms are actively reporting issues, suggesting the release may have been shipped with insufficient cross-platform testing.

2. **Build fragility** — Multiple users encountered build failures due to Go toolchain version string parsing (`go1.25.10 X:nodwarf5`). This indicates the Makefile assumes a specific Go version output format that doesn't hold across all distributions.

3. **Documentation lag** — The README News section was 5 versions behind (stopped at v0.2.4), forcing users to dig through GitHub release notes manually.

### Satisfaction Indicators

- **Fast bug turnaround:** Issues like #3006 (Codex tool calls) were reported and fixed within hours. Issue #2720 (PID crash loop) had active discussion and a merged fix.
- **Active dependency management:** Dependabot is configured and maintainers are promptly addressing breaking changes (e.g., #3008 following #3005).
- **Diverse platform testing:** Users on FreeBSD, and with various AI providers (MiniMax, DeepSeek, Codex OAuth, mimo-v2.5) are actively testing and reporting, which improves coverage.

### Use Cases Observed

- Web UI chat sessions (primary interface)
- OneBot protocol integration (QQ/group messaging via NapCat)
- Codex OAuth with GPT-5.5 for tool-using agents
- LarkSuite/Feishu enterprise messaging
- WhatsApp (native mode interest)
- AWS Bedrock runtime

---

## 8. Backlog Watch

### Open PRs Needing Maintainer Attention

| PR | Age | Description | Risk if Stale |
|---|---|---|---|
| [#2813](https://github.com/sipeed/picoclaw/pull/2813) | 29 days | fix(pid): verify gateway identity before blocking startup on stale PID | Superseded by #3000 — should be closed to avoid confusion |
| [#2947](https://github.com/sipeed/picoclaw/pull/2947) | 10 days | fix: correct claude-sonnet-4.6 model ID to use hyphens | Stale; causes HTTP 404 for Anthropic users — low effort to review |
| [#2934](https://github.com/sipeed/picoclaw/pull/2934) | 12 days | fix(channels): allow whatsapp native mode with use_native flag | Stale; blocks WhatsApp native mode users |
| [#2962](https://github.com/sipeed/picoclaw/pull/2962) | 8 days | build(deps): bump anthropic-sdk-go v1.26.0 → v1.46.0 | Large version jump; needs careful review for breaking changes |
| [#2956](https://github.com/sipeed/picoclaw/pull/2956) | 9 days | fix: preserve channel enabled state when merging security.yml | Moderate; affects channel configuration UX |
| [#2985](https://github.com/sipeed/picoclaw/pull/2985) | 3 days | fix(context): show both summarize and compress thresholds in /context | Fresh; straightforward improvement |
| [#3001](https://github.com/sipeed/picoclaw/pull/3001) | 1 day | fix(tools): allow scheme-less URLs in workspace guard | Fresh; practical fix |

### Recommended Actions

1. **Close [#2813](https://github.com/sipeed/picoclaw/pull/2813)** — It's been superseded by the merged [#3000](https://github.com/sipeed/picoclaw/pull/3000). Keeping it open creates confusion.
2. **Prioritize review of [#2947](https://github.com/sipeed/picoclaw/pull/2947)** — A one-character fix (hyphen vs. dot in model ID) that's been stale for 10 days and directly breaks Anthropic API calls.
3. **Review [#3002](https://github.com/sipeed/picoclaw/issues/3002)** — The open OneBot bug needs a fix PR; it's a clear regression affecting group chat functionality.
4. **Carefully review [#2962](https://github.com/sipeed/picoclaw/pull/2962)** — A 20-version jump in the Anthropic SDK is substantial and may introduce breaking changes beyond what Dependabot can detect.

---

*Generated by OWL — ZOO Company*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-06-05

---

## 1. Today's Overview

NanoClaw is a personal AI assistant / agent framework whose repository (`nanocoai/nanoclaw`) is experiencing strong contributor activity with **8 updated PRs (5 open, 3 merged/closed)** but no open bugs reported in the last 24 hours. Neither new releases nor new issues were filed. The bulk of today's work centers on **messaging channel robustness** — Signal DM routing, WhatsApp LID group compatibility, and WhatsApp session reliability are all being actively patched. The project is in a maintenance-and-hardening phase for its multi-channel communication layer.

**Activity assessment:** High. The project shows active merger throughput (3 closed/merged PRs in one day) and sustained PR contributor engagement across time zones.

---

## 2. Releases

**No new releases today.**

There were zero releases in the last 24 hours. The repo has no new tagged version since its last release.

---

## 3. Project Progress

Three PRs were merged/closed today, advancing stability and code quality:

| # | PR | Author | Focus |
|---|-----|--------|-------|
| 2633 | [fix(whatsapp): self-destruct and shutdown auth wipe](https://github.com/qwibitai/nanoclaw/pull/2633) | maschenborn | Fixes two structural bugs in `src/channels/whatsapp.ts` that caused paired sessions on Baileys 7.x to self-destruct and lose auth state on shutdown/unexpected disconnect. |
| 2687 | [Trip agent](https://github.com/qwibitai/nanoclaw/pull/2687) | dtanikella | Closed without merge — a skill contribution following the contributing guide template. |
| 104 | [fix: replace `as any` casts with proper BoomError type](https://github.com/qwibitai/nanoclaw/pull/104) | Alakazam03 | Closed (Feb PR, processed today). Introduces a typed `BoomError` interface in `types.ts`, replacing unsafe `as any` casts in WhatsApp disconnect handling. |

**Key takeaways:**
- WhatsApp channel reliability is getting significant attention — session lifecycle bugs (self-destruct, auth wipe on shutdown) have been resolved, directly improving durability of `WHATSAPP_PHONE_NUMBER`-based installs on Baileys 7.x.
- A long-open (#104, from February) was closed today suggesting a triage push on older PRs.

---

## 4. Community Hot Topics

The single new issue is low-activity:
- [#2686 [OPEN] Traveling](https://github.com/qwibitai/nanoclaw/issues/2686) — *Author: drannyyoung007-max* | 0 comments, 0 👍 | The user states "I want to travel to Canada." This appears to be either a mistitled feature request for a travel-related skill/agent, or a misclassified issue with insufficient detail.

**No high-engagement issues today.** All new PRs have 0 comments and 0 👍, indicating they are freshly filed and await review.

**Themes surfacing from open PRs (potential hot topics to watch):**
1. **Signal channel completeness** — DM mention routing (`#2689`), group typing, outbound reactions, quote-reply docs (`#2685`) — suggests Signal is a channel the community is actively maturing.
2. **WhatsApp LID (LinkedID) groups** (`#2688`) — WhatsApp is migrating groups to LID addressing; the bot silently fails (ack 421) on every outbound send if the fix isn't applied. This is an urgent compatibility concern.
3. **Voice transcription skill** (`#2459`) — Adds opt-in on-device Whisper.cpp voice transcription for Discord and all Chat SDK-bridged channels, no cloud API required. Long-open since May 13.
4. **Poll-loop message wrapping** (`#2405`) — Delivering unwrapped output to the sole destination after auto-compaction, fixing a protocol-compliance bug in the poll loop.

---

## 5. Bugs & Stability

**No new bug reports (issues) filed in the last 24 hours.**

However, several PRs in the open queue address active bugs:

- **[#2689 OPEN] fix(signal): set isMention for DMs** ([link](https://github.com/qwibitai/nanoclaw/pull/2689)) — **Severity: HIGH.** Signal DM first messages were silently dropped because `isMention` was never set to `true`, preventing `messaging_groups` row creation in the router. A fix PR exists.

- **[#2688 OPEN] fix(whatsapp): stop translating group participants to phone JIDs** ([link](https://github.com/qwibitai/nanoclaw/pull/2688)) — **Severity: HIGH.** Every outbound send to WhatsApp LID-addressed groups silently fails with ack error 421. A fix PR exists.

- **[#2405 OPEN] fix(poll-loop): deliver unwrapped output to sole destination after compaction** ([link](https://github.com/qwibitai/nanoclaw/pull/2405)) — **Severity: MEDIUM.** After auto-compaction, the model drops `<message>` tag wrapping discipline, producing malformed output. Fix PR open since May 11.

- **[#2633 CLOSED] fix(whatsapp): self-destruct and shutdown auth wipe** ([link](https://github.com/qwibitai/nanoclaw/pull/2633)) — **Severity: HIGH (resolved).** Session self-destruct on unexpected disconnect is merged.

---

## 6. Feature Requests & Roadmap Signals

| Signal | PR/Issue | Description | Likelihood of next version |
|--------|----------|-------------|---------------------------|
| Signal channel maturation | [#2689](https://github.com/qwibitai/nanoclaw/pull/2689), [#2685](https://github.com/qwibitai/nanoclaw/pull/2685) | DM mention routing, group typing, outbound reactions, quote-reply | **High** — multiple focused PRs, reviewable scope |
| WhatsApp LID group support | [#2688](https://github.com/qwibitai/nanoclaw/pull/2688) | LID participant addressing migration from WhatsApp | **High** — WhatsApp-wide migration affecting all bots |
| On-device voice transcription | [#2459](https://github.com/qwibitai/nanoclaw/pull/2459) | Local Whisper.cpp voice transcription for all Chat SDK channels | **Medium** — larger surface area, needs testing; open since May 13 |
| Travel/trip skill | [#2686](https://github.com/qwibitai/nanoclaw/issues/2686) | User stated desire to "travel to Canada" — potentially a trip-planning agent request | **Low** — too little detail to assess |

**Prediction:** The next release (if it materializes soon) will likely focus on **channel hardening** — closing the Signal DM gap and WhatsApp LID compatibility, both of which are discrete, high-impact PRs ready for review.

---

## 7. User Feedback Summary

- **Silent failure frustration**: Multiple PRs point to silent error modes — Signal DMs being dropped without error and WhatsApp ack 421 with no user-visible indication. The community is clearly frustrated by failures that happen "silently" and is actively instrumenting fixes.
- **Channel parity demand**: Contributors are investing in Signal (typing, reactions, docs) and WhatsApp (LID, session durability) — users expect feature parity and reliability across all messaging backends.
- **Privacy-conscious voice transcription**: PR #2459 explicitly opts for on-device Whisper.cpp with "no cloud API, no `OPENAI_API_KEY`" — suggesting the user base values privacy and offline capability.
- **Single vague user need**: Issue #2686 ("Travel to Canada") indicates a user exploring the assistant for real-world task delegation (travel planning), but filed in the wrong venue. This hints at a potential gap between user expectations and platform capabilities/onboarding.

---

## 8. Backlog Watch

| # | PR/Item | Age | Status | Note |
|---|---------|-----|--------|------|
| **[#104](https://github.com/qwibitai/nanoclaw/pull/104)** | fix: replace `as any` casts with proper BoomError type | 4+ months (Feb → Jun) | **Closed today** | Resolved after a long gestation — type-safety improvement in WhatsApp disconnect handling. |
| **[#2459](https://github.com/qwibitai/nanoclaw/pull/2459)** | feat(skill): add /add-voice-transcription-chat-sdk | 23 days (May 13 → Jun 4, still open) | **Open** | Substantial skill contribution for local voice transcription. Passive last update suggests it needs a reviewer. Community may be waiting on this. |
| **[#2405](https://github.com/qwibitai/nanoclaw/pull/2405)** | fix(poll-loop): deliver unwrapped output after compaction | 24 days (May 11 → Jun 4, still open) | **Open** | Poll-loop post-compaction wrapping bug with no maintainer comment. Affects agent output reliability after auto-compaction — should not languish. |

**Maintainer action recommended:** Prioritize review of #2459 (voice transcription skill) and #2405 (poll-loop fix) — both are >3 weeks old, no comments, and address real user-impacting functionality. If deprioritized, inform contributors to set expectations.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-05

---

## 1. Today's Overview

IronClaw is in a period of intense, high-output development activity. In the last 24 hours the project saw **40 issues updated** (25 still open, 15 closed) and **50 pull requests updated** (31 open, 19 merged/closed), with no new releases. The overwhelming majority of activity is concentrated in the **Reborn** subsystem — the project's next-generation agent runtime — spanning subagent lifecycle correctness, trigger lifecycle hardening, Slack product adapter integration, WebChat v2 onboarding UX, and a large hooks-framework PR train. Two core contributors (`serrrfirat` and `henrypark133`) dominate the activity, with regular contributors (`zmanian`, `ilblackdragon`, `denbite`, `italic-jinxin`, `zetyquickly') also shipping meaningful work. The velocity is high, the surface area is broad, and the project appears to be in a "land the Reborn platform" sprint phase.

---

## 2. Releases

**None.** No new tagged releases in the last 24 hours.

---

## 3. Project Progress

### Merged / Closed PRs (19 total; highlights)

| PR | Summary |
|---|---|
| **#4476** | **Wire Reborn Slack actor/subject journey** — Splits Slack product bindings into `actor_user_id` and `subject_user_id` so channel routes execute under the configured subject while preserving the paired Slack sender as actor. Wires Slack host-beta through subject-owned turn/thread scopes and host-runtime egress credential staging. |
| **#4478** | **Surface auth setup links in Slack prompts** — Shares the existing Reborn auth prompt enrichment path between WebUI projection and Slack delivery; wires the runtime auth challenge provider into the Slack final-reply observer. Adds a Slack Events E2E route covering a blocked auth run that posts an OAuth setup link back to Slack. |
| **#4480** | **fix(webui-v2): address provider grouping review feedback** — Splits provider disclosure into native button controls, collapses inactive provider cards, adds missing-configuration labels and defensive provider grouping guards. |
| **#4477** | **feat(webui-v2): group LLM providers by setup status** — Redesigns the WebUI v2 LLM Providers settings panel with progressive disclosure so users see what's running, what can be switched to, and what needs setup. |
| **#4467** | **Fix model-visible HTTP result budgeting** — Adds a host-runtime-local `ToolCallHttpEgress` path for model-visible `builtin.http` output; caps inline results with body, header, and final serialized-output limits. |
| **#4440** | **Handle deferred compaction ranges** — Adds `LoopCompactionOutcome` so host compaction can return `Compacted` or non-fatal `Deferred`; classifies compaction transcript messages, skips UI-only previews, defers unstable transcript states, and adds agent-loop-owned deferred-boundary backoff. |
| **#4466** | **[codex] Pair trigger creator during trigger create** — Adds a trigger-create lifecycle hook so `builtin.trigger_create` can run composition-owned side effects before persistence; wires Reborn composition to pair the creator as the synthetic `trigger/reborn-trigger-poller` actor. |
| **#3719** | **chore(deps): bump deps to address security advisories** — Updates `rustls-webpki` to patch RUSTSEC-2026-0104 and related CVEs. |

**Key themes shipped today:**
- **Slack integration** is maturing rapidly (PRs #4476, #4478) — the Reborn Slack adapter now has proper actor/subject separation and auth-link delivery.
- **WebChat v2 UX** is being polished for first-run onboarding (#4477, #4480).
- **Agent loop correctness** — compaction deferral (#4440) and trigger creator pairing (#4466) close important durability gaps.

---

## 4. Community Hot Topics

### Most-discussed issues (by comment count)

1. **[#3280](https://github.com/nearai/ironclaw/issues/3280)** — *[OPEN, suggested_P0] Add ProductWorkflow and InboundTurnService facade* (6 comments)
   The foundational Reborn workflow facade issue. This is the parent/umbrella for the entire Reborn product-adapter architecture. Its P0 label and 6 comments signal it remains the highest-priority structural work item. Related to 12+ other issues/PRs.

2. **[#3857](https://github.com/nearai/ironclaw/issues/3857)** — *[CLOSED] Lane 10: add Slack ProductAdapter MVP with preconfigured credentials* (6 comments)
   Now closed — the Slack MVP shipped. The 6 comments reflect the design discussion around preconfigured credentials and DM/app-mention routing.

3. **[#4424](https://github.com/nearai/ironclaw/issues/4424)** — *[CLOSED] builtin.spawn_subagent advertised in surface text but absent from structured tools array* (4 comments)
   A model-visible capability was advertised in the system prompt but not present in the structured `tools: [...]` array, so OpenAI-compatible models couldn't invoke it. Closed — fix shipped.

4. **[#4427](https://github.com/nearai/ironclaw/issues/4427)** — *[OPEN] Reborn: loop exit reason invisible — LoopFailureKind never traced* (2 comments)
   Operators running `RUST_LOG=ironclaw=debug` cannot see why a loop ended. The reason is persisted to DB but never logged. This is an observability gap that affects production debugging.

5. **[#3283](https://github.com/nearai/ironclaw/issues/3283)** — *[OPEN, suggested_P2] Migrate OpenAI-compatible chat and Responses APIs onto Reborn* (2 comments)
   The long-term migration of OpenAI-compatible API surfaces onto the Reborn product workflow. Active but lower priority than the P0 facade work.

### Analysis of underlying needs

The discussion patterns reveal three coherent needs:
- **Production observability**: Issues #4427 and #4431 (visible_capabilities ⇔ tool_definitions parity) both point to a need for better runtime introspection and correctness guarantees as Reborn moves toward production.
- **Product surface completeness**: The Slack adapter work (#3857 → #4476, #4478) and WebChat v2 onboarding (#4477, #4480, #4481) show the project is shifting from core-runtime development to product-surface polish.
- **Subagent and trigger lifecycle correctness**: Multiple issues (#4474, #4475, #4465) are being tracked as umbrella issues for durable subagent completion delivery and trigger lifecycle correctness — these are the hardest remaining reliability gaps.

---

## 5. Bugs & Stability

### Bugs reported/updated in last 24h, ranked by severity

| Severity | Issue | Status | Fix PR | Summary |
|---|---|---|---|---|
| 🔴 **Critical** | [#4424](https://github.com/nearai/ironclaw/issues/4424) | ✅ Closed | Merged | `builtin.spawn_subagent` advertised to model but absent from structured tools array — model couldn't call it. |
| 🔴 **Critical** | [#4420](https://github.com/nearai/ironclaw/issues/4420) | ✅ Closed | Merged | `TriggerCompletionPolicy::CompleteAfterFirstFire` stored but never consulted — triggers re-fire forever. |
| 🟠 **High** | [#4427](https://github.com/nearai/ironclaw/issues/4427) | 🟡 Open | None yet | `LoopFailureKind` never traced — operators can't see why a loop ended. |
| 🟠 **High** | [#4464](https://github.com/nearai/ironclaw/issues/4464) | 🟡 Open | None yet | Reborn compaction retry needs status-only stabilization metadata. |
| 🟡 **Medium** | [#4431](https://github.com/nearai/ironclaw/issues/4431) | 🟡 Open | None yet | Regression test needed: every visible capability must be callable (visible_capabilities ⇔ tool_definitions parity). |
| 🟡 **Medium** | [#4084](https://github.com/nearai/ironclaw/issues/4084) | ✅ Closed | Merged | Background subagent results never delivered to parent. |
| 🟡 **Medium** | [#4437](https://github.com/nearai/ironclaw/issues/4437) | ✅ Closed | Merged | Durable idempotency for subagent completion result delivery — transient marker could allow duplicate delivery after gate deletion. |
| 🟡 **Medium** | [#4472](https://github.com/nearai/ironclaw/issues/4472) | ✅ Closed | Merged | Activation state for trigger create pairing — window where trigger visible before pairing completes. |
| 🟡 **Medium** | [#4473](https://github.com/nearai/ironclaw/issues/4473) | ✅ Closed | Merged | `builtin.trigger_create` only accepted cron expressions, not one-time runs. |
| 🟢 **Low** | [#4438](https://github.com/nearai/ironclaw/issues/4438) | ✅ Closed | Merged | Terminal cleanup policy for subagent rollback reservations — `request_cancel` only accepts best-effort. |

**Stability assessment:** The project is in a "hardening sprint" — many critical and high-severity bugs are being found and fixed rapidly. The open items (#4427, #4464, #4431) are all observability or correctness gaps rather than data-loss or crash bugs. The fact that 15 issues and 19 PRs closed in 24h with most bugs having fix PRs merged the same day is a strong signal of responsive maintenance.

---

## 6. Feature Requests & Roadmap Signals

### Active feature work (open PRs and issues)

| Item | Type | Signal |
|---|---|---|
| **[#4479](https://github.com/nearai/ironclaw/pull/4479)** — Port IronHub install flow to Reborn | Open PR (XL) | **IronHub skill/tool installation** is being ported to Reborn with signed catalog client, Ed25519 verification, and sha256 checks. This is a major ecosystem expansion. |
| **[#4481](https://github.com/nearai/ironclaw/pull/4481)** — WebChat v2 first-run provider onboarding | Open PR (XL) | First-run UX for WebChat v2: choose a provider, sign in to NEAR AI or ChatGPT, or paste an API key — **without a restart**. Stacks on merged LLM-config work. |
| **[#4461](https://github.com/nearai/ironclaw/pull/4461)** — Canonical Reborn identity resolver for OAuth | Open PR (XL) | Introduces `ironclaw_reborn_identity` as the single boundary resolving every external identity to a stable `UserId` before any runtime state is touched. Rewires WebChat v2 SSO through it. |
| **[#4468](https://github.com/nearai/ironclaw/issues/4468)** — Expose `resp_…` (previous_response_id) to tools | Open issue | Parity with engine v2 #3669 — tools need access to the `resp_…` id for external-API conversation continuation. |
| **[#4470](https://github.com/nearai/ironclaw/issues/4470)** — Refactor Reborn composition into owned crates | Open issue | `crates/ironclaw_reborn_composition` has accumulated too many responsibilities. Needs decomposition into owned crates with CI-enforced boundaries. |
| **[#4379](https://github.com/nearai/ironclaw/pull/4379)** — Migrate read-only CLI commands to Reborn | Open PR (XL) | Migrates `doctor`, `status`, `config list/get` to the Reborn CLI binary, consuming only Reborn-native APIs. |

### Predicted next-version features
Based on the current trajectory, the next release will likely include:
1. **IronHub integration** (#4479) — signed skill/tool installation through Reborn.
2. **WebChat v2 first-run onboarding** (#4481) — provider selection and SSO without restart.
3. **Canonical identity resolution** (#4461) — unified OAuth/actor identity boundary.
4. **Reborn composition crate decomposition** (#4470, #4471, #4469) — architectural cleanup to keep the codebase maintainable.

---

## 7. User Feedback Summary

### Pain points (from issue descriptions and PR discussions)

1. **Model-tool parity gaps**: The `builtin.spawn_subagent` bug (#4424) and the follow-up regression test request (#4431) reveal a real user-facing pain: when the system prompt advertises a capability the model can't actually invoke, the agent loops narrating about a tool it can't call. This is a trust/reliability issue for end users.

2. **Observability in production**: Issue #4427 explicitly calls out that operators running `RUST_LOG=ironclaw=debug` cannot see why a loop ended. This is a direct pain point for anyone running Reborn in production or staging.

3. **Subagent completion delivery**: The long thread from #4084 → #4147 → #4348 → #4437 → #4474 shows that background subagent results silently disappearing has been a persistent, multi-week pain point. The umbrella issue #4474 now consolidates this.

4. **Trigger lifecycle correctness**: Issues #4420, #4472, #4473 (now consolidated under #4475) show that triggers had multiple behavioral gaps: infinite re-firing, missing activation states, and no one-time run support. These are product-blocking for scheduling use cases.

5. **First-run UX**: The WebChat v2 PRs (#4477, #4480, #4481) directly address user feedback that the LLM provider settings page was "a wall of adapter/base-URL/model meta" rather than answering "what's running, what can I switch to, what needs setup."

### Satisfaction signals
- The rapid closure of critical bugs (same-day fix-and-merge for #4204, #4420, #4472, #4473) suggests users are getting fast responses.
- The Slack integration shipping (#4476, #4478) delivers on a long-requested product surface (#3857).

---

## 8. Backlog Watch

### Long-unanswered or important items needing maintainer attention

| Item | Age | Status | Risk |
|---|---|---|---|
| **[#3280](https://github.com/nearai/ironclaw/issues/3280)** — Add ProductWorkflow and InboundTurnService facade | 30 days (created 2026-05-06) | 🟡 Open, P0 | **High** — This is the P0 parent issue for the entire Reborn product-adapter architecture. 12+ related issues/PRs depend on it. It has 6 comments but no merged resolution. |
| **[#3283](https://github.com/nearai/ironclaw/issues/3283)** — Migrate OpenAI-compatible APIs onto Reborn | 30 days (created 2026-05-06) | 🟡 Open, P2 | **Medium** — Important for API compatibility but lower priority. Needs a concrete implementation plan. |
| **[#4427](https://github.com/nearai/ironclaw/issues/4427)** — LoopFailureKind never traced | 2 days | 🟡 Open | **Medium-High** — Observability gap affecting production debugging. No fix PR yet despite being a straightforward logging addition. |
| **[#4464](https://github.com/nearai/ironclaw/issues/4464)** — Compaction retry stabilization metadata | 1 day | 🟡 Open | **Medium** — Follow-up to PR #4440. Needs a small targeted fix. |
| **[#4470](https://github.com/nearai/ironclaw/issues/4470)** — Refactor Reborn composition into owned crates | 1 day | 🟡 Open | **High (architectural)** — The composition crate is already over 3,000 lines and accumulating more responsibilities. This will become a maintenance bottleneck if not addressed soon. |
| **[#4471](https://github.com/nearai/ironclaw/issues/4471)** — Track Reborn runtime decomposition | 1 day | 🟡 Open | **High (architectural)** — `runtime.rs` is over the 3,000-line budget with multiple runtime concerns. |
| **[#4469](https://github.com/nearai/ironclaw/issues/4469)** — Track Reborn composition factory decomposition | 1 day | 🟡 Open | **High (architectural)** — `factory.rs` similarly over budget. |
| **[#4238](https://github.com/nearai/ironclaw/issues/4238)** — Project product-auth accounts into CredentialAccountStore | 7 days | 🟡 Open | **Medium** — Follow-up to merged PRs #4175/#4234. Needs a broker projection implementation. |

### PRs awaiting review (open, no comments yet)

| PR | Size | Risk | Note |
|---|---|---|---|
| **[#4479](https://github.com/nearai/ironclaw/pull/4479)** — Port IronHub install flow to Reborn | XL | Low | Major ecosystem feature. Needs review. |
| **[#4481](https://github.com/nearai/ironclaw/pull/4481)** — WebChat v2 first-run onboarding | XL | Low | UX-critical. Needs review. |
| **[#4461](https://github.com/nearai/ironclaw/pull/4461)** — Canonical Reborn identity resolver | XL | Medium | Architectural. Replaces `RebornLibSqlUserStore`. |
| **[#4379](https://github.com/nearai/ironclaw/pull/4379)** — Migrate read-only CLI commands to Reborn | XL | Low | From regular contributor `denbite`. |
| **[#3951](https://github.com/nearai/ironclaw/pull/3951)** — Third-party extension hook activation | XL | Low | From `zmanian`. Stacks on #3938. |
| **[#3938](https://github.com/nearai/ironclaw/pull/3938)** — Activate hook framework in production | XL | Low | Ships dark (flag default OFF). |

---

**Overall project health: 🟢 Strong.** IronClaw is in a high-velocity development phase with rapid bug turnaround, clear architectural direction (Reborn migration), and active community contribution. The main risks are architectural debt accumulation in the Reborn composition layer (#4470, #4471, #4469) and the need to ship a release soon to surface the significant work that has landed.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – 2026-06-05**

---

### 1. **Today's Overview**  
LobsterAI shows strong development momentum with **17 pull requests merged or closed** in the last 24 hours, indicating active iteration and rapid integration of fixes and features. However, **no new releases** have been published since the last version (2026.5.28), suggesting the team is accumulating changes for a future release. Only **one issue remains open**, reflecting either efficient triage or limited community reporting. The project appears healthy, with focused work on stability, MCP tooling, and Cowork UX improvements.

---

### 2. **Releases**  
**None.** The most recent release is **v2026.5.28** (merged via PR [#2090](https://github.com/netease-youdao/LobsterAI/pull/2090)), which introduced Kit marketplace, local Cowork session forking, plugin manual updates, and multiple stability fixes. No new version has been tagged as of 2026-06-05.

---

### 3. **Project Progress**  
Key merged/closed PRs highlight focused improvements:

- **MCP Stability & Performance**:  
  - PR [#2091](https://github.com/netease-youdao/LobsterAI/pull/2091): Optimized `npx`-based MCP server startup by pre-resolving npm packages to absolute `node` paths, reducing latency. Added first-response timing logs for diagnostics.  
  - PR [#2100](https://github.com/netease-youdao/LobsterAI/pull/2100): Ensured managed MCP installs use correct Node toolchain paths, preventing environment mismatches.  
  - PR [#2103](https://github.com/netease-youdao/LobsterAI/pull/2103): Added validation for remote MCP server URLs to prevent misconfigurations.

- **Cowork UX & Reliability**:  
  - PR [#2111](https://github.com/netease-youdao/LobsterAI/pull/2111): Refactored voice input into modular components (ASR, WAV encoding, error handling), improving maintainability.  
  - PR [#2110](https://github.com/netease-youdao/LobsterAI/pull/2110): Prevented oversized image payloads from crashing `chat.send` by classifying gateway errors (e.g., code `1009`) as size-related.  
  - PR [#2095](https://github.com/netease-youdao/LobsterAI/pull/2095): Enabled batch deletion of subagent sessions with async cleanup to avoid gateway overload.  
  - PR [#2101](https://github.com/netease-youdao/LobsterAI/pull/2101): Allowed users to select text from artifact previews and insert it into Cowork drafts—enhancing workflow continuity.

- **Bug Fixes & Polish**:  
  - PR [#2093](https://github.com/netease-youdao/LobsterAI/pull/2093): Enabled image input for MiniMax-M3, correcting a hardcoded `false` flag.  
  - PR [#2096](https://github.com/netease-youdao/LobsterAI/pull/2096): Hid internal OpenClaw plugins from user-facing plugin management to reduce confusion.  
  - PR [#2097](https://github.com/netease-youdao/LobsterAI/pull/2097): Added a close button to the Cowork search modal title bar for better UX consistency.

- **Stale but Merged Community Contributions**:  
  Several long-pending community PRs were merged, including system notifications for Cowork completion ([#1536](https://github.com/netease-youdao/LobsterAI/pull/1536)), message bookmarking ([#1538](https://github.com/netease-youdao/LobsterAI/pull/1538)), session tagging ([#1542](https://github.com/netease-youdao/LobsterAI/pull/1542)), i18n fixes ([#1540](https://github.com/netease-youdao/LobsterAI/pull/1540), [#1543](https://github.com/netease-youdao/LobsterAI/pull/1543)), and OAuth polling cleanup ([#1544](https://github.com/netease-youdao/LobsterAI/pull/1544)).

---

### 4. **Community Hot Topics**  
- **Issue [#769](https://github.com/netease-youdao/LobsterAI/issues/769)**: “OpenClaw gateway failed to start within the expected time” — the only open issue, updated yesterday. Though it has only 1 comment and 0 reactions, it points to a **critical onboarding/first-run reliability problem**. The user included a screenshot but no logs, suggesting a need for better error diagnostics or startup timeout handling. This could affect new users disproportionately.

No PRs had significant engagement (all 👍 = 0), indicating low community interaction despite high merge velocity—possibly due to internal-driven development.

---

### 5. **Bugs & Stability**  
- **High Severity**:  
  - **Gateway startup failure** ([#769](https://github.com/netease-youdao/LobsterAI/issues/769)): Unresolved; no linked fix PR yet. Could block user onboarding.  
  - **Oversized payload crashes** (fixed in [#2110](https://github.com/netease-youdao/LobsterAI/pull/2110)): Previously caused silent failures when sending large images. Now properly classified and handled.

- **Medium Severity**:  
  - **MCP launch instability** (addressed in [#2091](https://github.com/netease-youdao/LobsterAI/pull/2091), [#2100](https://github.com/netease-youdao/LobsterAI/pull/2100)): Node path and install issues could break MCP tooling. Now mitigated with robust resolution and fallbacks.

- **Low Severity**:  
  - UI polish issues (e.g., missing close button in search modal [#2097](https://github.com/netease-youdao/LobsterAI/pull/2097)) and i18n gaps ([#1540](https://github.com/netease-youdao/LobsterAI/pull/1540))—all resolved.

**No active crashes or regressions reported today.**

---

### 6. **Feature Requests & Roadmap Signals**  
- **Artifact-to-chat workflow** ([#2101](https://github.com/netease-youdao/LobsterAI/pull/2101)) signals investment in **deep integration between artifacts and conversational AI**, likely a core UX pillar.
- **Kit marketplace** (from v2026.5.28) and **plugin management refinements** ([#2096](https://github.com/netease-youdao/LobsterAI/pull/2096)) suggest a growing **extensibility ecosystem**.
- Community-contributed features like **session tagging** and **message bookmarking** (now merged) indicate demand for **knowledge management** within long-running Cowork sessions.

**Predicted next release focus**: Stability hardening for MCP and gateway, expanded Kit/artifact interoperability, and improved onboarding reliability (potentially addressing #769).

---

### 7. **User Feedback Summary**  
- **Pain Points**:  
  - Gateway startup failures ([#769](https://github.com/netease-youdao/LobsterAI/issues/769)) create first-impression friction.  
  - Oversized image handling was previously opaque—users saw generic errors instead of actionable feedback (now fixed).  
  - i18n inconsistencies in approval dialogs ([#1543](https://github.com/netease-youdao/LobsterAI/pull/1543)) broke immersion in non-Chinese locales.

- **Satisfaction Drivers**:  
  - Rapid merging of community PRs (e.g., notifications, bookmarks) shows responsiveness.  
  - Modular refactors (e.g., voice input [#2111](https://github.com/netease-youdao/LobsterAI/pull/2111)) improve long-term maintainability, indirectly benefiting users.

Overall, users value **reliability**, **workflow continuity**, and **polished multilingual support**.

---

### 8. **Backlog Watch**  
- **Issue [#769](https://github.com/netease-youdao/LobsterAI/issues/769)**: Open since **March 24, 2026** (over 2 months), with minimal maintainer response. Despite low engagement, it represents a **critical path failure** for new users. Requires urgent triage—either a fix, documentation update, or diagnostic guide.
- All other issues appear resolved or merged. No stale PRs remain open; the team has effectively cleared older community contributions.

**Recommendation**: Prioritize investigation into gateway startup timeouts, especially on Windows (noted in PR [#2090](https://github.com/netease-youdao/LobsterAI/pull/2090) scope), and consider adding startup health checks or user-facing troubleshooting tips.

--- 

*Data as of 2026-06-05 | Source: [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-05

---

## 1. Today's Overview

Moltis showed moderate activity over the past 24 hours with **2 new issues** and **4 open PRs**, none of which have been merged or closed yet. No new releases were published, indicating the project is in an active development phase—accumulating changes rather than shipping. The contributor `s-salamatov` is particularly active, authoring 3 of the 4 open PRs, suggesting focused effort on browser-tool improvements and channel-layer fixes. All 2 issues were created within the last 24 hours and have no comments or reactions, so no active community discussion has formed yet. Overall, the project is healthy and actively iterated, but the zero-closure rate on today's PRs suggests a bottleneck or pending review capacity.

---

## 2. Releases

**No new releases** were published in the reporting window. The latest release data is not provided in this digest's scope.

---

## 3. Project Progress

**No PRs were merged or closed** today. However, several PRs have advanced with recent updates:

- **[PR #1109](https://github.com/moltis-org/moltis/pull/1099)** — Separates Telegram streaming progress messages from final replies. Fixes issue #1097 by sending silent throttled progress updates that are deleted once the stream completes, so the final answer is delivered cleanly. This is a UX improvement for Telegram channel users.
- **[PR #1103](https://github.com/moltis-org/moltis/pull/1103)** — Alternative path for PR #1100: enables efficient shadow-DOM piercing during browser snapshot collection and ref-based lookups. Targets web-component-heavy sites (e.g., Salesforce Lightning) where elements inside shadow roots were previously invisible to the browser tool.
- **[PR #1089](https://github.com/moltis-org/moltis/pull/1089)** — Caps persisted `tool` and `tool_result` content when session histories are rehydrated into provider-bound `ChatMessage`s. This prevents oversized tool-call payloads from bloating LLM context windows after compaction, prompt inspection, or silent memory turns. A stability/correctness improvement with wide-reaching impact.

---

## 4. Community Hot Topics

Today's issues and PRs have **zero comments and zero reactions**, so there are no "hot" discussions forming yet. The most substantive threads to watch are:

- **[PR #1103](https://github.com/moltis-org/moltis/pull/1103) / [PR #1100](https://github.com/moltis-org/moltis/pull/1100)** — The shadow-DOM piercing fix has attracted attention, with two contributors (`s-salamatov` and `resumeparseeval`) working on the same problem via separate PRs. The underlying need is clear: modern web apps built on Salesforce Lightning, custom web components, or similar shadow-DOM architectures are effectively invisible to Moltis's browser automation. This is a real and growing pain point as shadow DOM adoption increases.
- **[PR #1099](https://github.com/moltis-org/moltis/pull/1099)** — The Telegram progress-stream fix directly addresses a usability frustration where long-running agent turns would flood Telegram chats with fragmented messages.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix PR |
|----------|------|-------------|--------|
| 🔴 High | Browser shadow-DOM blind spot | Browser tool completely misses elements inside shadow roots, breaking automation on Salesforce Lightning and similar SPAs. | [PR #1103](https://github.com/moltis-org/moltis/pull/1103), [PR #1100](https://github.com/moltis-org/moltis/pull/1100) — both open |
| 🟡 Medium | Telegram stream UX | Long agent turns deliver fragmented, overlapping messages on Telegram instead of a single clean reply. | [PR #1099](https://github.com/moltis-org/moltis/pull/1099) — open, fixes #1097 |
| 🟡 Medium | Persisted tool-result bloat | Rehydrated session history may carry oversized tool-result content, bloating LLM context. | [PR #1089](https://github.com/moltis-org/moltis/pull/1089) — open |

No crash regressions, data-loss bugs, or security issues were reported in this window.

---

## 6. Feature Requests & Roadmap Signals

- **[Issue #1102](https://github.com/moltis-org/moltis/issues/1102) — Add FunASR / SenseVoice as a local STT engine** — Requests integration of Alibaba's ultra-fast local speech-to-text models (SenseVoice-Small: ~70ms for 10s audio, native streaming). If implemented, this would lower the barrier to fully offline voice interaction, reducing dependency on cloud STT APIs like Whisper or Google. Strong candidate for inclusion given the project's emphasis on personal/AI-assistant use cases.
- **[Issue #1101](https://github.com/moltis-org/moltis/issues/1101) — Add SMS and LINE channels (`moltis-sms`, `moltis-line)`** — Proposes two new messaging channel integrations. SMS expands Moltis's reach to non-smartphone users and low-bandwidth environments; LINE targets the Japanese/Taiwanese market where it dominates. This signals internationalization intent and could be a significant growth driver in Asian markets if prioritized.

**Prediction:** The FunASR/SenseVoice STT integration (#1102) is the most likely candidate for near-term implementation, as it aligns with the project's core voice-assistant value proposition and leverages well-maintained upstream libraries.

---

## 7. User Feedback Summary

- **Voice pipeline enhancement:** The request for FunASR/SenseVoice (#1102) reflects a user base that values low-latency, local-first voice processing. Satisfaction appears contingent on reducing round-trip times for speech interactions—cloud STT introduces perceptible lag.
- **Browser automation reliability:** The dual PRs for shadow-DOM support (#1100, #1103) reveal a structural gap: users trying to automate enterprise web applications (explicitly Salesforce Lightning) hit a hard wall. This is not a niche concern—it affects any user automating modern SPAs.
- **Multi-channel expansion:** The SMS + LINE request (#1101) and the Telegram streaming fix (#1099) together indicate a growing user population deploying Moltis across diverse messaging platforms. Users increasingly treat Moltis as a multi-channel AI assistant hub, not just a single-platform tool.
- **Session management quality:** PR #1089 (tool-result capping) addresses an emergent pain point for long-lived sessions—tool output bloating context windows, degrading LLM performance. Users running extended or recurring sessions likely experience model confusion or token-limit errors that this fix would mitigate.

Satisfaction signals: generally positive (Issue #1102 opens with "Great voice assistant project!"). Dissatisfaction signals: minimal, but the blind spots in browser automation and fragmented Telegram delivery are concrete UX failures.

---

## 8. Backlog Watch

All new items from this report are ≤24 hours old and have zero engagement—so no long-term backlog items are flagged today. However, maintainers should monitor:

- **[PR #1100](https://github.com/moltis-org/moltis/pull/1100) vs. [PR #1103](https://github.com/moltis-org/moltis/pull/1103)** — Two contributors have independently submitted shadow-DOM fixes. One should be merged and the other closed to avoid confusion. PR #1103 explicitly states it is "an alternative/update path for #1100" because the original contributor could not push follow-up commits—this dependency should be resolved promptly.
- **[PR #1089](https://github.com/moltis-org/moltis/pull/1089)** — Opened 2026-06-01, already 4 days without merge. Has no comments or review. Given its broad impact on session hygiene across all chat modes, it deserves timely review.
- **[Issue #1102](https://github.com/moltis-org/moltis/issues/1102) and [Issue #1101](https://github.com/moltis-org/moltis/issues/1101)** — Both are fresh feature requests with genuine community need signals. Acknowledgment (even a label or brief comment) within the next few days would signal healthy community management.

---

*OWL · Moltis Digest · Generated 2026-06-05 · Data source: github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-05

---

## 1. Today's Overview

CoPaw (agentscope-ai/CoPaw) is in a highly active development phase. In the last 24 hours, the project saw **32 issues updated** (13 open/active, 19 closed) and **26 pull requests updated** (10 open, 16 merged/closed), plus **1 new release** (v1.1.11-beta.1). The velocity of both issue resolution and PR merging is strong — 35 total items were closed/merged in a single day, indicating a responsive maintainer team. The project is clearly in a rapid iteration cycle focused on stability fixes, plugin ecosystem expansion, and UX polish across desktop, console, and multi-channel surfaces.

---

## 2. Releases

### v1.1.11-beta.1

Two changes in this beta release:

- **fix(config):** Added `ProviderManager` fallback to `get_model_max_input_length` — addresses cases where model max input length lookup fails, likely related to the `/compact` command bug where models with custom `max_input_length` (e.g., MiniMax M3 at 512K) were still defaulting to 128K. ([#4827](https://github.com/agentscope-ai/QwenPaw/pull/4827))
- **refactor(cron):** Disabled push notification bubbles for cron jobs of type `'agent'` — reduces notification noise from automated agent cron tasks. ([#4803](https://github.com/agentscope-ai/QwenPaw/pull/4803))

**Migration notes:** No breaking changes. The config fix is backward-compatible. Users relying on cron agent push bubbles will notice fewer notifications.

---

## 3. Project Progress

### Merged/Closed PRs (16 total, highlights)

| PR | Description |
|---|---|
| [#4958](https://github.com/agentscope-ai/QwenPaw/pull/4958) | **fix(mcp):** Sanitize MCP tool names containing `.`, `/`, `:` to comply with OpenAI/Anthropic `^[a-zA-Z0-9_-]+$` validation — fixes gpt-5.5 failures |
| [#4954](https://github.com/agentscope-ai/QwenPaw/pull/4954) | **fix(file_io):** Replace blocking `open()` with `aiofiles` for non-blocking file writes |
| [#4879](https://github.com/agentscope-ai/QwenPaw/pull/4879) | **feat(feishu):** Support interactive card content extraction and refactor message parsing |
| [#4848](https://github.com/agentscope-ai/QwenPaw/pull/4848) | **feat(channels):** Add QR code authorization for QQ channel |
| [#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853) | **fix(browser):** Kill entire process tree and clean lock files on Windows after browser_use sessions |
| [#4801](https://github.com/agentscope-ai/QwenPaw/pull/4801) | **fix(pet):** Auto-install missing `pyside6-essentials` dependency for Windows Desktop v1.1.9 |
| [#4804](https://github.com/agentscope-ai/QwenPaw/pull/4804) | **feat(plugins):** Add Prompt Section Registry allowing plugins to inject system prompt blocks at defined anchor points |
| [#4332](https://github.com/agentscope-ai/QwenPaw/pull/4332) | **test(console):** Complete frontend unit test milestone — 10 test files, ~100 new test cases |
| [#4925](https://github.com/agentscope-ai/QwenPaw/pull/4925) | **fix(channel):** Preserve `acl_sender_id` during native payload merge across all channels |

**Key themes:** The project is advancing on three fronts simultaneously — **(1) stability** (MCP tool name sanitization, file I/O async, browser process cleanup, ACL preservation), **(2) plugin ecosystem** (prompt section registry, DataPaw, OpenSandbox), and **(3) channel expansion** (Feishu interactive cards, QQ QR auth).

---

## 4. Community Hot Topics

### Most Discussed Issues

1. **[#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644)** — Console UI tool calls not displayed until page refresh (20 comments, closed)
   - **Underlying need:** Real-time frontend state synchronization. Users expect tool call visibility during agent execution. This is a core UX reliability issue affecting trust in the console.

2. **[#4796](https://github.com/agentscope-ai/QwenPaw/issues/4796)** — Tab-completion for skills via `/` in input box (6 comments, closed)
   - **Underlying need:** Discoverability and efficiency. Users want IDE-like autocomplete for skills, similar to how modern AI coding assistants handle slash commands.

3. **[#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652)** — Memory system needs summarization-association-reminder mechanism (4 comments, closed)
   - **Underlying need:** Agent memory quality over quantity. Users are experiencing "information accumulation without learning" — the memory system stores but doesn't synthesize or cross-reference.

4. **[#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891)** — DeepSeek prefix cache hit rate only ~95%, optimization potential (4 comments, 👍1, **still open**)
   - **Underlying need:** Cost optimization. With DeepSeek's 4-10x price differential between cache hit and miss, even small improvements save significant costs at scale.

5. **[#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937)** — `/compact` ignores model's `max_input_length`, uses 128K default (3 comments, **still open**)
   - **Underlying need:** Correct context window utilization for models with non-standard context lengths. Directly related to the v1.1.11-beta.1 fix.

---

## 5. Bugs & Stability

### Ranked by Severity

**🔴 Critical (data loss / complete failure)**

| Issue | Description | Fix Status |
|---|---|---|
| [#4953](https://github.com/agentscope-ai/QwenPaw/issues/4953) | `/compact` crashes with `'str' object has no attribute 'get'` on mixed-type content lists | Closed (fix likely in v1.1.11-beta.1) |
| [#4956](https://github.com/agentscope-ai/QwenPaw/issues/4956) | Context compact fails repeatedly on every agent interaction, flooding logs | Closed |
| [#4918](https://github.com/agentscope-ai/QwenPaw/issues/4918) | MCP tools with `.` in names cause complete request rejection on gpt-5.5 | **Fix merged** — [#4958](https://github.com/agentscope-ai/QwenPaw/pull/4958) |
| [#4957](https://github.com/agentscope-ai/QwenPaw/issues/4957) | Task Status API returns stale "running" status after task completion | **Open** — needs attention |

**🟡 High (feature broken, workaround exists)**

| Issue | Description | Fix Status |
|---|---|---|
| [#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644) | Console UI tool calls not displayed in real-time | Closed (20 comments — most discussed issue) |
| [#4781](https://github.com/agentscope-ai/QwenPaw/issues/4781) | `tool_result_pruning` fails to prevent context blowup from oversized shell output | Closed |
| [#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937) | `/compact` ignores model's `max_input_length` | **Open** — fix in v1.1.11-beta.1 |
| [#4962](https://github.com/agentscope-ai/QwenPaw/issues/4962) | DeepSeek API responses fold content into thinking process, requiring manual expand | **Open** |
| [#4959](https://github.com/agentscope-ai/QwenPaw/issues/4959) | LaTeX formula rendering abnormal in console | **Open** |

**🟢 Medium/Low (UX friction, edge cases)**

| Issue | Description | Fix Status |
|---|---|---|
| [#4875](https://github.com/agentscope-ai/QwenPaw/issues/4875) | Installation script resets uv virtual environment | Closed |
| [#4928](https://github.com/agentscope-ai/QwenPaw/issues/4928) | Skill marketplace download fails with 422 (body too large, 5MB limit) | Closed |
| [#3555](https://github.com/agentscope-ai/QwenPaw/issues/3555) | Desktop hangs at "Waiting for HTTP ready..." on Windows | Closed |
| [#4960](https://github.com/agentscope-ai/QwenPaw/issues/4960) | Cannot access desktop console from mobile browser on LAN | **Open** |

---

## 6. Feature Requests & Roadmap Signals

### Likely Candidates for Next Release (v1.1.11 or v1.1.12)

| Request | Signal Strength | Likelihood |
|---|---|---|
| **Agent execution interrupt** ([#4961](https://github.com/agentscope-ai/QwenPaw/issues/4961), [#4964](https://github.com/agentscope-ai/QwenPaw/issues/4964)) | Filed twice same day, practical pain point | **High** — duplicate filing signals urgency |
| **Cron: direct script/shell execution** ([#4950](https://github.com/agentscope-ai/QwenPaw/issues/4950), [#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963)) | Filed twice same day | **High** — clear use case for scheduled tasks without AI overhead |
| **Token usage visibility per session** ([#4767](https://github.com/agentscope-ai/QwenPaw/issues/4767), [#4782](https://github.com/agentscope-ai/QwenPaw/issues/4782)) | PR [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) already in review | **Very High** — PR exists, just needs merge |
| **Auto provider failover** ([#4757](https://github.com/agentscope-ai/QwenPaw/issues/4757)) | Related to closed [#4181](https://github.com/agentscope-ai/QwenPaw/issues/4181) | **Medium** — recurring request, but complex to implement |
| **Skill tab-completion** ([#4796](https://github.com/agentscope-ai/QwenPaw/issues/4796)) | Closed but highly requested UX pattern | **Medium** — aligns with IDE-like UX direction |
| **Subagent lifecycle events** ([#4955](https://github.com/agentscope-ai/QwenPaw/pull/4955)) | PR already open | **High** — natural extension of `spawn_subagent` feature |

### Longer-Term Signals

- **Memory system intelligence** ([#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652), [#4640](https://github.com/agentscope-ai/QwenPaw/issues/4652)): Users want auto-summarization, state management, and cross-temporal indexing — this is a major architectural feature.
- **DeepSeek cache optimization** ([#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891)): Cost-driven, but requires low-level prompt engineering changes.

---

## 7. User Feedback Summary

### Pain Points

1. **Console real-time reliability** — The most-commented issue (#4644, 20 comments) is about tool calls not appearing in real-time. This erodes user trust in the primary interface.
2. **Context management opacity** — Multiple users ([#4767](https://github.com/agentscope-ai/QwenPaw/issues/4767), [#4782](https://github.com/agentscope-ai/QwenPaw/issues/4782), [#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937)) want visibility into token usage and context window status. Users feel "blind" to when compaction will trigger.
3. **Agent execution control** — Users cannot interrupt a running agent ([#4961](https://github.com/agentscope-ai/QwenPaw/issues/4961), [#4964](https://github.com/agentscope-ai/QwenPaw/issues/4964)). Messages queue behind the current execution, which is frustrating in interactive use.
4. **Windows-specific issues** — Desktop hangs ([#3555](https://github.com/agentscope-ai/QwenPaw/issues/3555)), browser process cleanup ([#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853)), pet plugin dependency ([#4801](https://github.com/agentscope-ai/QwenPaw/pull/4801)) — Windows users face a disproportionate number of environment issues.
5. **Skill/file discoverability** — Users want tab-completion for skills ([#4796](https://github.com/agentscope-ai/QwenPaw/issues/4796)) and quick-open buttons for generated files ([#4786](https://github.com/agentscope-ai/QwenPaw/issues/4786)).

### Satisfaction Indicators

- **Plugin ecosystem growth** is strong: DataPaw ([#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622)), OpenSandbox ([#4934](https://github.com/agentscope-ai/QwenPaw/pull/4934)), and the prompt section registry ([#4804](https://github.com/agentscope-ai/QwenPaw/pull/4804)) show a healthy extension model.
- **Channel diversity** is expanding: Feishu interactive cards, QQ QR auth, DingTalk fixes — the project is becoming a true multi-channel agent platform.
- **Responsiveness**: 19 issues and 16 PRs closed in 24 hours signals an engaged maintainer team.

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Status | Risk |
|---|---|---|---|
| [#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891) — DeepSeek prefix cache optimization | 39 days | Open, 4 comments, 👍1 | Cost impact for users; technically non-trivial |
| [#4957](https://github.com/agentscope-ai/QwenPaw/issues/4957) — Task Status API returns stale status | 1 day | Open, 1 comment | API correctness issue; affects programmatic consumers |
| [#4962](https://github.com/agentscope-ai/QwenPaw/issues/4962) — DeepSeek response folding into thinking | 1 day | Open, 1 comment | UX issue for DeepSeek users; may need frontend fix |
| [#4959](https://github.com/agentscope-ai/QwenPaw/issues/4959) — LaTeX rendering abnormal | 1 day | Open, 1 comment | Math/academic use case blocked |
| [#4960](https://github.com/agentscope-ai/QwenPaw/issues/4960) — LAN mobile access to desktop console | 1 day | Open, 1 comment | Network config / CORS issue; affects mobile users |
| [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) — Tauri auto updater | 11 days | Open | Desktop update UX; may need security review |
| [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) — Decouple plugin loader from agent startup | 3 days | Open | Tauri Desktop stability; blocks PyInstaller users |
| [#4932](https://github.com/agentscope-ai/QwenPaw/pull/4932) — DingTalk cross-user message merging | 2 days | Open | Data isolation bug; security-adjacent |

**Recommendation:** The stale task status API ([#4957](https://github.com/agentscope-ai/QwenPaw/issues/4957)) and DingTalk message merging ([#4932](https://github.com/agentscope-ai/QwenPaw/pull/4932)) should be prioritized — both involve correctness and potential data isolation concerns. The DeepSeek cache issue ([#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891)) has been open for 39 days with community interest and deserves a maintainer response or prioritization signal.

---

*Data source: agentscope-ai/CoPaw (GitHub) | Digest generated: 2026-06-05*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-05

---

## 1. Today's Overview

ZeroClaw remains in a high-activity pre-release development phase with no new tagged releases today. The project saw **35 issues** (30 open, 5 closed) and **50 PRs** (33 open, 17 merged/closed) updated in the last 24 hours, indicating sustained contributor momentum. Development focus is concentrated on the **v0.8.0 / v0.8.1 release trackers** (#7112, #6970), with significant work across the web gateway UI, provider ecosystem, and security architecture. A notable pattern today is the volume of **build-fix and regression PRs** targeting the Ollama provider, suggesting recent refactors (#7095, #6848) introduced latent breakage that the community is actively patching. The project is clearly in a stabilization push ahead of its next minor release.

---

## 2. Releases

**No new releases today.** The latest tracked release work is coordinated through the v0.8.0 tracker (#7112) and v0.8.1 integration queue (#6970).

---

## 3. Project Progress

### Merged / Closed PRs (today)

| PR | Summary |
|---|---|
| **#7231** | **fix(ollama): restore compiling master build** — Fixed two defects in `ollama.rs` (type mismatches from a stale CI base after #7095). Critical for anyone building from master. |
| **#7211** | Closed (issue: repo size complaint) — No code change. |

### Key Open PRs Advancing

- **#7229** — *feat(web): MCP, Skills, Plugins & Providers dashboard tabs*: A major web UI addition giving operators first-class management interfaces for MCP servers, skills, plugins, and providers directly from the gateway dashboard. This is a significant UX milestone.
- **#7223** — *feat(web): support slash commands in gateway web chat input*: Implements `/help`, `/clear`, `/model`, `/status` and aliases in the web chat, bringing it to parity with channel surfaces.
- **#7221** — *fix(gateway): block observability telemetry from chat WS by default*: Root-cause fix for #7151 where tool_call telemetry leaked into the chat WebSocket, causing permanent "unknown" tool cards.
- **#7222** — *fix(gateway): clear backend history on "Clear all"*: Fixes #7126 where "Clear all" only wiped frontend state; now properly calls `DELETE /api/sessions/:id`.
- **#7136** — *feat(providers): add Kilo AI Gateway as first-class model provider*: New provider integration with pricing capture.
- **#7124** — *fix(docs): keep _shared chrome master-owned and retrofit version selector*: Fixes versioned-docs deployment where older tag deploys could overwrite shared CSS/JS.

---

## 4. Community Hot Topics

### Most Discussed Issues

1. **[#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)** — *Ollama Provider call failed when tools are needed* (6 comments, closed) — Long-standing bug (since April) where Ollama tool-calling breaks sessions entirely. Underlying need: **robust local-model tool-call parity** with cloud providers.

2. **[#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)** — *Computer-use support (screen interaction)* (5 comments) — Requests Codex/Peekaboo-style screenshot + mouse/keyboard control. Signals demand for **desktop automation capabilities** as a first-class tool.

3. **[#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)** — *A2A (Agent-to-Agent) Protocol Support* (5 comments, 👍7) — The highest-reacted feature request. Users want ZeroClaw to interoperate with other agents (OpenClaw, NanoClaw, any A2A-compliant system) via the Linux Foundation's A2A protocol v0.3.0. This is a **strategic interoperability** ask.

4. **[#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)** — *LSP support* (3 comments) — Users want Language Server Protocol integration to reduce hallucination in code generation, especially for local models. Parity with Claude Code and OpenCode is the explicit benchmark.

5. **[#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)** & **[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** — *Pluggable security provider interface* and *OIDC authentication for RPC/WSS* (3 comments each) — Both tagged as tracking issues targeting **v0.9.0**, signaling a major security architecture overhaul.

### Analysis

The community's needs cluster around three themes: **(1) local model reliability** (Ollama bugs, LSP for hallucination reduction), **(2) multi-agent interoperability** (A2A protocol, agent discovery), and **(3) security hardening** (pluggable auth, OIDC, command confirmation tiers). The high comment count on older issues (#5962 from April, #3566 from March) suggests these are persistent pain points without adequate maintainer bandwidth.

---

## 5. Bugs & Stability

### Critical / S1 Bugs (workflow-blocking)

| Issue | Severity | Status | Fix PR? |
|---|---|---|---|
| **[#7179](https://github.com/zeroclaw-labs/zeroclaw/issues/7179)** — ZeroClaw reaps idle RPC sessions at 10 min | S1 | ✅ Closed | Presumably fixed |
| **[#7083](https://github.com/zeroclaw-labs/zeroclaw/issues/7083)** — Windows shell tool mangles commands with double quotes | S1 | ✅ Closed | Presumably fixed |
| **[#7125](https://github.com/zeroclaw-labs/zeroclaw/issues/7125)** — TUI (zerocode) freezes entirely when daemon disconnects | S1 | 🔄 In-progress | None yet |
| **[#7227](https://github.com/zeroclaw-labs/zeroclaw/issues/7227)** — zerocode Quickstart hardcodes model-provider alias to `default` | S1 | 🆕 New | None yet |
| **[#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)** — Ollama provider call failed when tools needed | S1 | ✅ Closed | Fixed |

### High-Impact Bugs (S2 / degraded)

| Issue | Severity | Status | Fix PR? |
|---|---|---|---|
| **[#7126](https://github.com/zeroclaw-labs/zeroclaw/issues/7126)** — Web UI "Clear all" only wipes rendered messages | S2 | Open | **#7222** (open) |
| **[#7151](https://github.com/zeroclaw-labs/zeroclaw/issues/7151)** — Observability telemetry leaks onto chat WS | S2 | Open | **#7221** (open) |
| **[#7143](https://github.com/zeroclaw-labs/zeroclaw/issues/7143)** — Agent runs near-duplicate shell commands until max_tool_iterations | S2 | Open | None yet |
| **[#7225](https://github.com/zeroclaw-labs/zeroclaw/issues/7225)** — WhatsApp Web `mention_only` ignores replies to bot | S2 | 🆕 New | None yet |

### Build / Regression Issues

- **Ollama provider build breakage**: Multiple PRs (#7231 merged, #7213, #7224 open) are fixing compile errors from the interaction of #7095 and #6848. This is a **regression cluster** — three separate contributors are independently fixing the same broken build, indicating the CI gap allowed broken code to reach master.

---

## 6. Feature Requests & Roadmap Signals

### Likely for v0.8.0 (active tracker #7112)

- **Per-model capability & context-window config** ([#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)) — P1, RFC, needs maintainer review. Wiring `vision` and `context_window` per model into capability checks and UI.
- **v0.8.0 Stable-tier promotion** ([#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)) — The coordination tracker itself.

### Likely for v0.8.1 (active tracker #6970)

- **Slack lifecycle progress indicators** ([#7113](https://github.com/zeroclaw-labs/zeroclaw/issues/7113)) — P2, medium risk.
- **Gateway web chat file upload UI** ([#7138](https://github.com/zeroclaw-labs/zeroclaw/issues/7138)) — P3, medium risk.
- **Gateway web chat slash commands** ([#7137](https://github.com/zeroclaw-labs/zeroclaw/issues/7137)) — P3, already has PR #7223.

### Targeting v0.9.0 (security architecture)

- **Pluggable security provider interface** ([#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142))
- **OIDC authentication for RPC/WSS** ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141))
- **Per-execution confirmation tier for shell commands** ([#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)) — P1, Claude Code-style allow/ask/deny policy.

### Strategic / Long-term

- **A2A protocol support** ([#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)) — Blocked, but with 👍7 it has the most community support of any feature request.
- **Computer-use / screen interaction** ([#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)) — Accepted, high risk.
- **LSP support** ([#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)) — Blocked, high risk.

---

## 7. User Feedback Summary

### Pain Points

1. **Ollama / local model reliability**: The #5962 bug (Ollama tool-calling breaks sessions) persisted for over a month before closing. Combined with #7145 (temperature handling in OpenAI-compatible provider) and the cluster of Ollama build-fix PRs today, **local model users are experiencing significant friction**. This is the single biggest source of user pain.

2. **Windows support gaps**: #7083 (shell command mangling with double quotes on Windows) was S1 and workflow-blocked. While now closed, it reveals that **Windows is a second-class platform** in testing.

3. **Web UI parity with TUI/channels**: Multiple issues (#7126, #7137, #7138, #7139, #7157) highlight that the gateway web chat lacks features that the TUI and channel surfaces have — slash commands, file upload, proper clear behavior, i18n for toolbar buttons, timestamp rendering. Users expect **feature parity across all interfaces**.

4. **Agent loop behavior**: #7143 describes agents repeatedly running near-duplicate shell commands until `max_tool_iterations` is exhausted. This is a **core agent quality** issue affecting Slack users specifically.

5. **Repo bloat**: #7121 (closed today) complained about repository size. #7184 proposes moving i18n files to a git submodule to address this.

### Satisfaction Signals

- Positive comment in #7143: *"It is great to see a Rust-based agent runtime that is much lighter on resources than many other agent systems we have tried."*
- High engagement on PRs (50 updated in 24h) suggests an **active, invested contributor community**.

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Age | Why It Matters |
|---|---|---|
| **[#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)** — A2A Protocol Support | ~3 months (Mar 15) | Highest community demand (👍7), blocked, strategic for multi-agent ecosystem. Needs maintainer unblock or timeline. |
| **[#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)** — LSP Support | ~1.5 months (Apr 19) | Blocked. Critical for local model coding quality. Competitive parity ask (Claude Code, OpenCode). |
| **[#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)** — Audit 153 commits lost in bulk revert | ~1.5 months (Apr 24) | In-progress but complex. Recovery of lost bug fixes and features from the c3ff635 revert. |
| **[#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)** — Ollama tool-calling failure | ~1.5 months (Apr 21) | Just closed. Worth monitoring for regressions given the Ollama build-fix cluster today. |

### PRs Needing Maintainer Attention

- **#7136** — Kilo AI Gateway provider (size: L, risk: high) — Needs maintainer review flag. Large PR adding a new first-class provider with pricing capture.
- **#7155** — Per-execution confirmation tier for shell commands (P1, RFC) — Needs maintainer review. Security-critical feature.
- **#7100** — Per-model capability config (P1, RFC) — Needs maintainer review. Foundational for v0.8.0 config work.

---

*Data source: github.com/zeroclaw-labs/zeroclaw — snapshot 2026-06-05. All links reference zeroclaw-labs/zeroclaw.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*