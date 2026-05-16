# OpenClaw Ecosystem Digest 2026-05-16

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-16 00:31 UTC

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

**OpenClaw Project Digest – May 16, 2026**

---

### **Today's Overview**  
OpenClaw remains highly active with 500 issues and 500 PRs updated in the last 24 hours, reflecting intense development velocity and community engagement. The project released **v2026.5.14-beta.2**, introducing per-agent bootstrap configuration overrides and improved command-turn handling for plugin contexts. With 454 open issues and 470 open PRs, the ecosystem shows strong momentum but also highlights ongoing stability challenges, particularly around channel integrations (Telegram, Discord, Slack) and model backend regressions.

---

### **Releases**  
**v2026.5.14-beta.2** was published today. Key changes include:  
- **Channels/SDK**: Normalized command turn construction now exposed via `command-turn` helpers for inbound plugin contexts, enabling more consistent cross-channel tool invocation.  
- **Agents/config**: Added support for per-agent overrides of `contextInjection`, `bootstrapMaxChars`, and `bootstrapTotalMaxChars`, improving customization granularity without breaking backward compatibility.  
No breaking changes reported; migration is seamless for existing configurations.

---

### **Project Progress**  
While no PRs were merged or closed today (all remain open), several high-priority fixes advanced:  
- **PR #82369**: Recovers stale embedded tool calls during gateway diagnostics, preventing diagnostic loops from blocking active runs.  
- **PR #82298**: Fixes Telegram session abort deadlocks by aligning stop-lane logic with canonical session keys.  
- **PR #78931**: Ensures Gemini replay payloads exclude runtime-context artifacts and errored turns, restoring accurate history reconstruction.  
These advances address core stability gaps identified in recent regression reports.

---

### **Community Hot Topics**  
Top-discussed items reflect urgent needs around **channel reliability** and **multi-backend consistency**:  

1. **[#78308](https://github.com/openclaw/openclaw/issues/78308)** – *Channel-mediated approval for MCP tool calls*: 10 comments, 1 👍. Users demand standardized consent flows for external state mutations (e.g., vault writes, email sends), mirroring existing shell-exec protections.  
2. **[#79794](https://github.com/openclaw/openclaw/issues/79794)** – *Discord guild message delivery broken post-v2026.5.7*: 8 comments, 1 👍. Regression suggests WebSocket event routing misconfiguration in gateway session resolution.  
3. **[#77576](https://github.com/openclaw/openclaw/issues/77576)** – *Telegram group replies routed to webchat*: 5 comments, 4 👍. High frustration over UX fragmentation—responses appear nowhere users expect them.  

Underlying need: **predictable message delivery semantics** across channels, especially for group contexts.

---

### **Bugs & Stability**  
Critical regressions reported today, ranked by impact:  

| Issue | Description | Severity | Fix Status |
|-------|-------------|----------|------------|
| [#82037](https://github.com/openclaw/openclaw/issues/82037) | macOS 26.5 + v2026.5.12 causes WebSocket "wrong protocol" errors | High | Closed (no fix PR yet) |
| [#79794](https://github.com/openclaw/openclaw/issues/79794) | Discord READY event never fires; guild messages lost | High | Open |
| [#81955](https://github.com/openclaw/openclaw/issues/81955) | Agent persona lost after update—injections fail | Medium-High | Closed |
| [#82254](https://github.com/openclaw/openclaw/issues/82254) | Web UI replies "NO!" after upgrade/doctor | Medium | Closed |

**Root cause pattern**: Post-update regressions concentrated in **gateway session lifecycle** and **OAuth token refresh logic**. Two fixes landed today (#82366, #82365) targeting SQLite WAL stalls and skill snapshot invalidation, but channel-specific bugs lack immediate mitigations.

---

### **Feature Requests & Roadmap Signals**  
Users are pushing for **enhanced observability** and **i18n support**:  
- **[#79458](https://github.com/openclaw/openclaw/issues/79458)**: i18n fields for slash commands (Chinese users see English-only labels). Likely candidate for next release given low implementation cost and UX urgency.  
- **[#77202](https://github.com/openclaw/openclaw/issues/77202)**: Live tool-call progress on Signal via edit-free pattern. Aligns with trend toward richer streaming UIs (see Slack plan cards in PR #82258).  
- **[#69492](https://github.com/openclaw/openclaw/issues/69492)**: Event consumer-path leakage classification. Suggests upcoming architecture hardening around event routing boundaries.

Predicted next-version focus: **channel UX polish** and **multi-provider cache optimization** (evidenced by ZhipuAI X-Session-Id injection in #68079).

---

### **User Feedback Summary**  
Pain points center on **post-upgrade instability** and **fragmented user experiences**:  
- Multiple users report **silent failures** in Telegram/Slack delivery despite successful internal processing (e.g., #80520, #77320).  
- **Persona loss** after minor version bumps (#81955) erodes trust in upgrade safety.  
- **Cold-path auth delays** (~4s vs 2–4ms warm) frustrate interactive workflows (#82041).  
Positive signals: Praise for **embedded agent recoverability** (PR #82369) and **HTML response rendering** in Control UI (#77505). Overall sentiment: *Cautiously optimistic but demanding faster regression fixes*.

---

### **Backlog Watch**  
Items requiring maintainer attention beyond 2+ weeks:  

- **[#36614](https://github.com/openclaw/openclaw/issues/36614)**: `per-channel-peer` sessions still leak delivery context into main session. Affects iMessage and other DM-bound channels. No activity since March.  
- **[#70164](https://github.com/openclaw/openclaw/issues/70164)**: WebSocket output skips events, showing premature `state:final`. Impacts real-time debugging.  
- **[#70493](https://github.com/openclaw/openclaw/issues/70493)**: Isolated gateway missing full Playwright support. Blocks browser automation in subagents.  

These represent architectural debt that could compound if left unaddressed during continued channel expansion.

--- 

*Data as of 2026-05-16. All links point to GitHub Issues/PRs.*

---

## Cross-Ecosystem Comparison

### Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem (May 16, 2026)

---

#### **1. Ecosystem Overview**  
The personal AI agent open-source landscape is highly active and fragmented, with multiple projects vying for dominance in agent orchestration, multi-channel integration, and extensibility. Projects like OpenClaw, NanoBot, Hermes Agent, and IronClaw lead in core agent runtime capabilities, while niche tools like Moltis and ZeroClaw focus on infrastructure and security hardening. A clear trend toward production-grade reliability, provider-agnosticism, and channel-specific UX polish is emerging across the ecosystem, driven by real-world deployment demands.

---

#### **2. Activity Comparison**  

| Project         | Issues (24h) | PRs (24h) | Open Issues | Releases (Last 7d) | Health Score* |
|-----------------|--------------|-----------|-------------|--------------------|---------------|
| OpenClaw        | 500          | 500       | 454         | v2026.5.14-beta.2  | High (Stability gaps) |
| NanoBot         | 58           | 22        | ~30         | None               | Medium-High   |
| Hermes Agent    | 50           | 50        | ~40         | None               | Medium        |
| PicoClaw        | 11           | 35        | ~20         | Nightly only       | Medium        |
| NanoClaw        | 50           | 50        | ~25         | v2.0.63            | High          |
| NullClaw        | 2            | 0         | ~10         | None               | Low           |
| IronClaw        | ~20          | 50        | ~30         | v0.28.2 (May 14)   | High          |
| LobsterAI       | 1–5          | 33        | ~15         | None               | Medium        |
| TinyClaw        | 0            | 0         | —           | Stale              | Very Low      |
| Moltis          | 4            | 7         | ~10         | None               | Medium        |
| CoPaw           | 24           | 50        | ~50         | v1.1.7             | Medium-High   |
| ZeptoClaw       | 0            | 0         | —           | Stale              | Very Low      |
| ZeroClaw        | 22           | 50        | ~40         | None               | High          |

*\*Health Score reflects activity velocity, release cadence, bug resolution speed, and community engagement.*

---

#### **3. OpenClaw's Position**  
OpenClaw dominates as the **core reference implementation**, evidenced by its massive issue/PR volume (500 each), indicating it serves as a central hub for agentic AI tooling. Its technical approach emphasizes **channel-agnostic plugin contexts**, per-agent bootstrap customization, and robust gateway session handling—differentiating it from more modular or lightweight peers. While Hermes Agent and NanoClaw compete closely in feature scope, OpenClaw’s scale attracts broader contributor attention and cross-project interoperability efforts. However, its high open-issue count signals stability challenges, particularly around Telegram/Discord integrations and model backend regressions.

---

#### **4. Shared Technical Focus Areas**  
Multiple projects highlight convergence on these critical needs:

- **Multi-Provider Compatibility**: OpenClaw (#78308), Hermes Agent (#26599), NanoClaw (#80), CoPaw (#4051) all report API inconsistencies (e.g., DeepSeek reasoning_content, Anthropic file types, Alibaba Cloud routing).
- **Channel Message Semantics**: Telegram group routing (#77576), Matrix sender identity (#2816), and Discord guild delivery (#79794) are repeatedly broken, demanding unified message context models.
- **Session & Memory Integrity**: Hermes Agent (#5563), IronClaw (#3602), and ZeroClaw (#6689) expose risks in session persistence, cron isolation, and audit logging.
- **Security Hardening**: NanoBot (#3842), ZeroClaw (#5779), and CoPaw (#4409) prioritize OAuth refresh, TOTP-gated shells, and backup signing.
- **Observability Gaps**: ZeroClaw (#6669) and IronClaw (#3616) seek unified metrics/traces across gateways and production workflows.

These reflect an industry-wide shift from experimental agents to deployable, auditable systems.

---

#### **5. Differentiation Analysis**  

| Project       | Feature Focus                     | Target Users                  | Architecture Style               |
|---------------|----------------------------------|-------------------------------|----------------------------------|
| OpenClaw      | Channel plugins, gateway sessions | Core infra maintainers        | Monolithic + Plugin SDK          |
| NanoBot       | Documentation, security, UX      | Enterprise/local deployments    | Modular, CLI-first               |
| Hermes Agent  | Provider auth, process lifecycle | Production bot operators      | Process-oriented, registry-driven|
| PicoClaw      | Mobile/Android, LM Studio        | Hobbyists, edge users         | Lightweight, config-centric      |
| NanoClaw      | Sovereignty, minimalism          | Privacy-focused developers    | Minimal core, expandable surface |
| IronClaw      | Reborn agent loop, WebUI         | Platform engineers            | Runtime composition, WASM-ready  |
| ZeroClaw      | SOP engine, multi-agent runtime  | Enterprise orchestrators      | Schema-driven, ACP-aligned       |
| CoPaw         | Chinese IM channels (WeCom/DingTalk)| China-localized teams         | Channel-specialized, skill-heavy |

Notably, **China-centric projects (NanoBot, CoPaw)** prioritize Feishu/WeChat ecosystems, while **global players (OpenClaw, Hermes)** stress multi-provider neutrality.

---

#### **6. Community Momentum & Maturity**  

- **Rapid Iteration Tier**: OpenClaw, NanoClaw, IronClaw, ZeroClaw show >40 PRs/day with structured releases or nightlies—indicating aggressive feature development.
- **Stabilization Tier**: NanoBot, LobsterAI focus on polish and regression fixes; Hermes Agent addresses auth/reliability gaps.
- **Niche/Declining Tier**: NullClaw and ZeptoClaw have minimal activity; TinyClaw is effectively dormant.
- **Emerging Strengths**: PicoClaw gains traction via mobile support; Moltis matures as a secure remote-access layer.

All mature projects (>6 months active) now emphasize **production safety** over novelty.

---

#### **7. Trend Signals**  

- **Provider Agnosticism Over Vendor Lock-in**: Requests for Groq Whisper fallback (#2396, NanoClaw), LM Studio integration (#28, PicoClaw), and OpenRouter support (#3851, NanoBot) reveal demand for sovereignty and redundancy.
- **Conversational Continuity**: Rich message context (reply threading, voice transcription, thinking mode parsing) becomes essential—not optional—for usable agents (#618, #2817, #4051).
- **Security-by-Default**: From OAuth hardening to TOTP shells, trust is shifting from assumed to enforced.
- **Extensibility Through Standards**: MCP adoption surges (IronClaw #3650, PicoClaw #2811); ACP schemas gain traction in ZeroClaw.
- **Localized Deployments**: Self-hosted, air-gapped, or mesh-based setups (NetBird, Cloudflare Tunnel) are no longer fringe but mainstream concerns.

For AI agent developers, this signals that **building for interoperability, observability, and channel fidelity will separate viable long-term platforms from ephemeral tools**.

--- 

*Report compiled from May 16, 2026 GitHub activity snapshots. All data points sourced from public issue/PR histories and release tags.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – May 16, 2026**

**1. Today's Overview**  
NanoBot shows high recent activity with 58 issues and 22 PRs updated in the last 24 hours, indicating strong community engagement and ongoing development momentum. The project remains focused on documentation localization (Chinese), security hardening, and core feature stabilization, particularly around WebUI rendering, provider integrations, and long-running task management. No new releases were published today, but multiple critical fixes and enhancements have been merged.

**2. Releases**  
No new releases were created in the past 24 hours.

**3. Project Progress**  
Today’s merged PRs reflect a focus on stability, security, and UX improvements:
- Fixed WebUI markdown preloading performance issue (#3782)
- Implemented gateway lifecycle hooks for systemd services (#3373, #3792)
- Stabilized prompt cache keys in Codex provider to prevent cache misses across turns (#3793)
- Enhanced Brave search resilience with rate-limit retry logic (#3840)
- Secured local media attachment handling in restricted environments (#3842)
- Improved Windows UNC path support in shell tool (#3764)
- Added chat-native DM sender approval flow for private assistants (#3774)

Additionally, several refactoring efforts completed, including removal of redundant GlobTool (#3841) and runtime context optimization for better KV cache hit rates (#3844).

**4. Community Hot Topics**  
The most discussed issue (#3790, 9 comments) concerns WebUI session display corruption after updating to v0.1.5.post3.2026.05.13—a regression affecting user experience. Another notable thread (#3402, 9 comments) advocates migrating from JSON to TOML for configuration files, citing usability and maintainability benefits. These discussions reveal users value both backward compatibility and modern configuration ergonomics.

Among open PRs, two stand out: #3851 proposes wiring MiMo thinking control through gateways (e.g., OpenRouter), addressing model-specific behavior leakage; and #3847 introduces a `skill_load` tool to preserve skill.md content across multi-turn conversations—directly responding to developer pain points about context loss during extended interactions.

**5. Bugs & Stability**  
A confirmed UI regression was reported in #3790 where WebUI session output becomes garbled post-update unless refreshed—ranked as high severity due to broken core functionality. A related but less severe rendering bug (#3848) surfaced in the same timeframe. Both are under active investigation; however, no fix PR has been submitted yet. The lack of immediate resolution suggests this may require deeper frontend state management review.

Other resolved bugs include media path leaks in voice transcription (#3752) and insecure filename handling in Feishu media downloads (#3789), both now patched.

**6. Feature Requests & Roadmap Signals**  
Key feature requests signal upcoming direction:
- Secret management via external sources (file or exec) to replace plaintext config storage (#2172)—high-priority security concern.
- Gateway lifecycle notifications (on_start/on_stop) for monitoring systemd deployments (#3279)—now implemented via PRs #3373 and #3792.
- Support for OpenCode Go gateway (aggregating multiple Chinese LLMs)—under active development in PR #3785.

These indicate NanoBot is maturing toward enterprise-ready deployment scenarios with improved observability, security, and multi-provider orchestration.

**7. User Feedback Summary**  
Users express frustration with configuration complexity and security risks of hardcoded secrets. Real-world use cases emphasize reliability in automated messaging channels (Feishu, WhatsApp) and stable WebUI experiences. Satisfaction centers around successful long-task execution (via /goal command, PR #3788) and robust channel integration, though newcomers struggle with setup and documentation gaps.

Notably, contributors like @olgagaga and @xianqiangfu are driving significant progress in code commenting and Chinese documentation—addressing localization needs that expand the project’s accessibility.

**8. Backlog Watch**  
Issue #2172 (secret reference support) remains open for over two months with persistent interest but no action—critical for security-conscious adopters. Similarly, #3790 (WebUI display bug) has seen sustained discussion without resolution, suggesting need for maintainer escalation. Both represent opportunities to engage users and prioritize technical debt reduction.

For maintainers: consider dedicating resources to finalize secret management and stabilize WebUI rendering before next release cycle.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest – May 16, 2026**

---

### 1. **Today's Overview**
Hermes Agent shows high development velocity with 50 issues and 50 PRs updated in the last 24 hours, reflecting an active maintenance and enhancement cycle. No new releases were published today. The project continues to prioritize stability fixes for multi-turn agent interactions, gateway/platform integrations (especially Telegram and Feishu), and authentication flows across providers like xAI and Google Gemini. Overall activity indicates sustained contributor engagement and responsive issue triage.

---

### 2. **Releases**
No new releases were published today.

---

### 3. **Project Progress**
**Merged/Closed PRs Today:**  
- #26664: Fixed xAI OAuth credential-refresh loop on 403 errors; bumped grok-4.3 context window to 1M tokens.  
- #26666: Improved xAI 403 error messaging to avoid blaming subscribed users.  
- #26660 & #26613 (#26659): Fixed `process_registry.poll()` incorrectly marking completions as consumed, resolving duplicate notifications.  
- #26616: Corrected process completion handling to prevent premature notification suppression.  

These merges address critical reliability issues in credential management and process lifecycle tracking, improving robustness in production deployments.

---

### 4. **Community Hot Topics**
Top community discussions reflect urgent needs around **agent identity impersonation**, **multi-turn DeepSeek API failures**, and **gateway session binding integrity**:
- **#25839**: Reports that background skill-review prompts are disguised as user messages, causing parallel agents to unknowingly modify skills without consent ([link](https://github.com/NousResearch/hermes-agent/issues/25839)). This touches on trust and security in multi-instance setups.
- **#5563**: Heavy production user highlights memory persistence flaws leading to token waste, state.db corruption, and environment hallucinations ([link](https://github.com/NousResearch/hermes-agent/issues/5563)). Signals growing pains in long-running deployments.
- **#20470**: Telegram DM topic binding fails to refresh after session splits during compression, causing infinite preflight loops ([link](https://github.com/NousResearch/hermes-agent/issues/20470)). Critical for threaded group chats.

Underlying themes: **session integrity**, **authentication transparency**, and **cross-platform message context preservation**.

---

### 5. **Bugs & Stability**
**High-Severity Bugs Reported Today:**
1. **#25839** (P1): System impersonates user role → unauthorized skill edits in parallel instances. *No fix yet.*
2. **#20470** (P1): Telegram DM topic binding stale after session split → infinite compression loop. *Fix under discussion.*
3. **#26599** (P1): Codex backend rejects `extra_headers` in Responses API → HTTP 400 on GPT-5.5. *No fix PR yet.*
4. **#26581** (P2): Telegram group chats lack sender metadata → broken multi-user context. *No fix PR yet.*

Several DeepSeek-related bugs remain unresolved (#17212 closed today, but similar ones persist), indicating ongoing provider-specific instability.

Fix PRs exist for lower-severity regressions (e.g., kanban severity filter, CLI verbose display), showing prompt triage.

---

### 6. **Feature Requests & Roadmap Signals**
Key feature requests suggest upcoming directions:
- **Skill Validation & Linting** (#416): Automated quality checks during skill creation — likely prioritized given repeated reports of malformed skills.
- **Stage-Level Tool Whitelisting** (#26524): Per-turn tool filtering to reduce decision fatigue — aligns with agent autonomy trends.
- **Per-Job Timezone Support** (#26549, #16610): Localized cron scheduling — addresses global deployment needs.
- **xAI OAuth Native Flow** (#26588): Non-interactive auth for headless servers — follows pattern from other providers.

These indicate roadmap focus on **developer experience**, **deployment flexibility**, and **provider parity**.

---

### 7. **User Feedback Summary**
Real-world pain points center on:
- **Authentication friction**: Headless xAI OAuth (#26563), misleading Gemini health checks (#26623).
- **Session reliability**: Telegram topic binding, memory corruption, and session replay inefficiencies.
- **Configuration complexity**: Docker env var support (#12188), timezone ambiguity in cron jobs.

Positive feedback appears limited today, though #5563 includes strong praise for the skill system and architecture. Users express frustration over silent failures and opaque error messages (e.g., xAI 403 hints initially blaming subscribers).

---

### 8. **Backlog Watch**
- **#5563**: Long-standing (created April 6) production UX report with P1 severity and 👍 from heavy user. Requires deep dive into memory/session handling.  
- **#416**: Skill validation request open since March 5 — recurring theme in skill ecosystem maturity.  
- **#25839**: Security concern about impersonation not yet addressed despite clear impact.  

Maintainers should prioritize these as they represent systemic risks affecting trust, reliability, and scalability.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – May 16, 2026**

---

### 1. Today’s Overview  
The PicoClaw project shows strong development momentum with 35 pull requests updated in the last 24 hours—22 merged/closed and 13 still under review—indicating active feature work and stabilization efforts. Issue activity remains steady at 11 total updates, with 9 open/active items reflecting ongoing user-reported concerns around platform integrations, configuration flexibility, and channel-specific bugs. A new nightly build (v0.2.8-nightly.20260515) was released, signaling continued pre-release iteration ahead of a potential stable v0.2.9. Overall, the project maintains healthy contributor engagement and responsiveness to community feedback.

---

### 2. Releases  
A new **nightly build** is available:  
- **v0.2.8-nightly.20260515.794eb04f**  
This automated build includes recent changes from `main` but may be unstable; users are advised to use caution. Full changelog: [GitHub Diff](https://github.com/sipeed/picoclaw/compare/v0.2.8...main). No stable release was published today.

---

### 3. Project Progress  
Key merged/closed PRs advancing the codebase include:  
- **[#2874](https://github.com/sipeed/picoclaw/pull/2874)**: Fixes image media preservation across Pico attachments and client flows.  
- **[#2862](https://github.com/sipeed/picoclaw/pull/2862)**: Aligns MiMo reasoning replay logic with DeepSeek to resolve multi-turn conversation failures.  
- **[#2811](https://github.com/sipeed/picoclaw/pull/2811)**: Enhances MCP transport support with streamable HTTP aliases and integration testing framework.  
- **[#2814](https://github.com/sipeed/picoclaw/pull/2814)**: Corrects exec tool guard to allow legitimate relative script paths (fixes false-positive path blocks).  
These fixes improve stability, especially for multimodal inputs and sandboxed command execution.

---

### 4. Community Hot Topics  
Top issues by engagement:  
- **[#28] Feat Request: LM Studio Easy Connect** ([link](https://github.com/sipeed/picoclaw/issues/28)) – 19 comments, 2 👍. Users seek streamlined integration with local LLM runtime LM Studio, highlighting demand for better offline/local model support.  
- **[#1042] exec tool’s guardCommand misclassifies non-path commands** ([link](https://github.com/sipeed/picoclaw/issues/1042)) – 11 comments, 2 👍. Core usability blocker where safety guards incorrectly flag benign commands like `curl wttr.in/Beijing?T` as unsafe due to flawed regex path detection.  
- **[#2879] make load_image configurable** ([link](https://github.com/sipeed/picoclaw/pull/2879)) – Immediate response to user confusion about hardcoded tool registration. Reflects growing need for fine-grained tool control via config.json.  

Underlying need: **simpler setup for end-users**, particularly on mobile (Android) and self-hosted environments.

---

### 5. Bugs & Stability  
Critical bugs reported today:  
1. **[#2817] Voice transcription not passed to LLM** ([link](https://github.com/sipeed/picoclaw/issues/2817)) – High severity: Groq Whisper succeeds but LLM receives placeholder `[voice]` instead of text. Fix needed in media processing pipeline.  
2. **[#2816] Matrix sender identity missing** ([link](https://github.com/sipeed/picoclaw/issues/2816)) – Medium: Agent lacks sender context in Matrix channels, breaking accountability and personalization.  
3. **[#2815] allow_from filter broken on Matrix** ([link](https://github.com/sipeed/picoclaw/issues/2815)) – Medium: Filter either blocks all messages or none, rendering access control unusable.  

PRs addressing these exist:  
- [#2827](https://github.com/sipeed/picoclaw/pull/2827) targets Matrix filtering logic.  
- No fix yet for voice transcription (likely requires deeper media handler refactor).

---

### 6. Feature Requests & Roadmap Signals  
Emerging priorities from recent requests:  
- **Native audio input for multimodal LLMs** (e.g., Gemini 1.5) – Already implemented in PR [#2626](https://github.com/sipeed/picoclaw/pull/2626), suggesting this will land soon.  
- **Non-destructive session reset** (preserve Seahorse history) – Requested in [#2820](https://github.com/sipeed/picoclaw/issues/2820); likely to be addressed given its impact on long-running workflows.  
- **LM Studio integration** – High interest but low technical capacity from users; maintainers may prioritize lightweight provider abstractions over full GUI connectors.  

Prediction: Next stable release (v0.2.9) will emphasize **audio/multimodal support**, **Matrix/Telegram UX polish**, and **configurable tooling**.

---

### 7. User Feedback Summary  
Users express frustration with:  
- **Overly restrictive security guards** (exec tool blocking valid commands).  
- **Inconsistent channel behavior** (Matrix vs. Telegram sender handling).  
- **Poor Android experience** – multiple reports (#2744) indicate data access failures in tabs post-v0.2.8.  

Positive signals:  
- Appreciation for rapid bug fixes (e.g., MiMo reasoning now working after [#2862](https://github.com/sipeed/picoclaw/pull/2862)).  
- Desire for more transparency in nightly builds and config options.  

Overall sentiment: **Cautiously optimistic**, with trust eroded by stability gaps on mobile and niche providers.

---

### 8. Backlog Watch  
Items flagged as stale but critical:  
- **[#28] LM Studio Easy Connect** – Open since Feb 11; no maintainer action despite high interest. Suggests need for delegated contribution or template-based provider integration guide.  
- **[#2706] DeepSeek v4 thinking model** – Closed but unresolved root cause noted; may resurface if new DeepSeek API changes break reasoning replay.  

Recommendation: Assign owners to long-standing enhancement requests to prevent community disengagement.

--- 

*Data snapshot taken May 16, 2026. All links verified against GitHub.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – May 16, 2026**

---

### 1. Today's Overview  
NanoClaw shows strong recent activity with 50 issues and 50 PRs updated in the last 24 hours, reflecting an actively maintained open-source AI agent project. The team has just published **v2.0.63**, marking the start of a formal release cadence aligned with `package.json` version bumps on `main`. This signals increased stability and user-facing commitment. With 44 closed PRs and issues today alone, development velocity remains high, focusing on reliability, extensibility, and multi-provider support.

---

### 2. Releases  
**v2.0.63** is the first properly published GitHub Release under a new automated policy: every `package.json` bump to `main` triggers a manual release by maintainers (GitHub Actions do not auto-cut releases). This ensures traceability but may introduce lag between code merges and public availability. No breaking changes are documented for this version; it primarily consolidates prior work into a structured changelog starting here.

---

### 3. Project Progress  
Today’s merged/closed PRs include:
- **Security & Stability**: Fix for silent SQLite write failures (`#2496`), improving command-gate reliability.
- **Observability**: New health-monitor module detecting silent container failures (`#2498`) with Discord alerts.
- **Provider Flexibility**: OpenRouter non-Anthropic model routing fix (`#954`) enabling broader LLM compatibility.
- **Operational Improvements**: Per-install systemd service naming (`#2493`) preventing conflicts in multi-checkout setups; OAuth token refresh from macOS Keychain added during spawn (`#2498`).
- **Documentation**: CHANGELOG.md rollup for v2.0.63 and RELEASING.md now published (`#2502`).

Open PRs focus on feature skills like early compaction nudging (`#2500`), agent networking (`#2497`), and LiteLLM provider integration (`#2490`).

---

### 4. Community Hot Topics  
Top-discussed items reflect demand for **multi-provider resilience** and **modular skill architecture**:
- **Issue #80** (32 comments, 👍60): Urges support beyond Anthropic/Claude—specifically opencode, Codex, Gemini—as users face subscription shutdowns from Anthropic. Signals strategic need for provider-agnostic design.
- **Issue #384** (9 comments, 👍16): Advocates for a skill marketplace/registry to scale NanoClaw’s “small core, expandable surface” model securely. Aligns with long-term vision of composable, auditable agents.
- **PR #2500** (early-compact-nudge skill): Introduces proactive context management via system reminders when effective context nears compaction thresholds—addresses context rot in long sessions.

These trends indicate community prioritization of **sovereignty**, **interoperability**, and **adaptive intelligence**.

---

### 5. Bugs & Stability  
Critical bugs resolved today include:
- **High**: IPC message drops after query result (`#233`) — now fixed via stream termination logic in agent-runner (`#967`).
- **Critical**: WhatsApp auth files created with world-readable permissions (`#635`) — security hardening likely imminent.
- **High**: OOM crash due to ghost sockets accumulating on reconnect (`#595`) — addressed in earlier sprints; no new reports today.

No unaddressed critical crashes reported. Most recent stability fixes target memory leaks and permission misconfigurations in persistent connections.

---

### 6. Feature Requests & Roadmap Signals  
User requests point toward **cloud-local hybrid inference** and **agent collaboration**:
- **Groq Whisper opt-in cloud backend** (`#2396`): Extends sovereignty model by allowing local whisper.cpp as default + cloud fallback—mirrors trend seen in other agent frameworks.
- **Agent network capability** (`#2497`): Proposes inter-agent communication channels, suggesting roadmap expansion beyond single-agent workflows.
- **Quote/reply threading** (`#618`) and **message steering** (`#617`): Indicate maturation toward contextual, conversational AI rather than stateless tool use.

Maintainers appear receptive—these features are either merged or under active PR review.

---

### 7. User Feedback Summary  
Users express appreciation for NanoClaw’s **security-first minimalism** and **channel flexibility**, but highlight friction points:
- Installation complexity: Multiple users request simpler setup scripts (`#439`).
- Token lifecycle: OAuth tokens expiring overnight break unattended services (`#730`)—requires background refresh mechanism.
- Multi-platform parity: Podman support suggested (`#957`) for Linux/macOS users avoiding Docker dependencies.
- Transparency gap: Lack of npm package confuses newcomers (`#347`)—though project appears CLI-native.

Overall sentiment leans positive, with frustration centered on operational hurdles rather than core functionality.

---

### 8. Backlog Watch  
One notable item requiring attention:
- **PR #514** (image recognition skill): Stalled since Feb, awaiting review despite clear use case (WhatsApp image handling). Maintainer bandwidth may be limited—community could consider contributing test cases or documentation to unblock.

All other long-standing issues have recent updates, indicating active triage.

--- 

*Data snapshot taken May 16, 2026. Source: [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest – 2026-05-16**

---

### 1. **Today’s Overview**  
The NullClaw project shows minimal activity today, with two new issues reported and no pull requests or releases. Development appears to be in a maintenance or stabilization phase, as there are no merged PRs or new versions released. The open issues suggest user-reported edge cases involving Telegram integration and scheduler authentication, but no urgent blockers have emerged. Overall, the project remains stable but lacks active feature development or community contributions.

---

### 2. **Releases**  
No new releases were published today. The last release remains unchanged, indicating a focus on issue resolution rather than major updates.

---

### 3. **Project Progress**  
Zero pull requests were merged or closed in the past 24 hours. No features were advanced or bugs fixed today.

---

### 4. **Community Hot Topics**  
No issues or PRs received comments or reactions today. Both recent issues (#916 and #915) remain isolated reports without community engagement. However, #916 highlights a clear enhancement opportunity: users expect full context extraction when replying to messages in Telegram, not just bot detection logic.

---

### 5. **Bugs & Stability**  
- **Issue #915**: A reported bug where the scheduler fails due to unauthorized access (likely related to authentication or permissions). Severity: Medium—impacts core scheduling functionality used by external tools. No fix PR exists yet.  
- **Issue #916**: Not a bug but an enhancement request; however, it reveals a potential UX gap in message context handling during replies.  

Both issues were filed simultaneously and lack follow-up, suggesting they may require maintainer triage.

---

### 6. **Feature Requests & Roadmap Signals**  
- **#916** signals growing demand for richer inbound message context parsing in Telegram chats, particularly support for `reply_to_message.text`. This could align with broader goals of improving conversational continuity and tool-use accuracy.  
Given its specificity and alignment with chatbot usability, this feature may gain traction if framed as enabling better multi-turn interactions.

---

### 7. **User Feedback Summary**  
Users report:
- Incomplete message context when responding in Telegram groups (#916), reducing conversational coherence.
- Scheduler authentication failures (#915), hindering automation workflows even when LLM inference works correctly.

These reflect real-world deployment pain points, especially around integration reliability and contextual awareness.

---

### 8. **Backlog Watch**  
Both #915 and #916 are newly opened and require initial assessment. Given their impact on core functionality (scheduling) and user experience (Telegram replies), prompt review is recommended to prevent escalation. Neither has been acknowledged by maintainers yet.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026-05-16**

---

### 1. Today's Overview  
IronClaw shows high development velocity with 50 PRs updated in the last 24 hours (22 open, 28 merged), indicating active feature work and stabilization efforts. The project maintains strong momentum around its Reborn agent-loop initiative, particularly WebUI integration and production readiness gates. A single new release (v0.28.2) was published yesterday, primarily addressing tool installation reliability and LLM provider abstraction cleanups. Overall activity suggests a healthy, fast-moving open-source AI agent platform under active engineering.

---

### 2. Releases  
**ironclaw-v0.28.2** (released 2026-05-14)  
- **Fixed**: Restored chat-driven `tool_install` functionality; resolved double-invocation bug; added auto-approval safety guard to prevent unintended installations ([PR #3559](https://github.com/nearai/ironclaw/pull/3559)).  
- **Changed**: Abstracted provider-specific auth, model fetching, and embeddings configuration behind facade interfaces for cleaner extensibility ([PR #3416](https://github.com/nearai/ironclaw/pull/3416)).  
*No breaking changes or migration notes reported.*

---

### 3. Project Progress  
**Merged/Closed PRs (last 24h):**  
- **#3686**: Fixed cancellation safety by acknowledging drained inputs before exit ([link](https://github.com/nearai/ironclaw/pull/3686))  
- **#3685**: Wired live cancellation into host runtime via turn-state tracking ([link](https://github.com/nearai/ironclaw/pull/3685))  
- **#3684**: Verified cancellation state from durable turn storage ([link](https://github.com/nearai/ironclaw/pull/3684))  
- **#3652**: Completed wiring of live planned runtime composition components ([link](https://github.com/nearai/ironclaw/pull/3652))  
- **#3651**: Registered default path for planned driver selection ([link](https://github.com/nearai/ironclaw/pull/3651))  
- **#3650**: Integrated six host-port capability/workflow modules (WS9–WS15) into unified base ([link](https://github.com/nearai/ironclaw/pull/3650))  
- **#3665**: Added `IRONCLAW_DISABLE_CODEACT` flag to disable v2 CodeAct engine selectively ([link](https://github.com/nearai/ironclaw/pull/3665))  

These advances reflect progress toward productionizing Reborn’s agent loop, especially cancellation handling and runtime composition.

---

### 4. Community Hot Topics  
Top issues driving discussion:  
- **#3259**: Urgent request to publish versions 0.25.0–0.27.0 to crates.io due to CVE-related pinning in wasmtime 28.x ([link](https://github.com/nearai/ironclaw/issues/3259)) — affects downstream Rust users reliant on cargo.  
- **#3616**: Proposal to wire production app/gateway/channel ingress into Reborn live workflow ([link](https://github.com/nearai/ironclaw/issues/3616)) — signals move from test-only to real-user-facing loops.  
- **#3602**: Missing startup check for `RebornLoopProductionReport`, risking unsafe deploys ([link](https://github.com/nearai/ironclaw/issues/3602)) — highlights need for robust pre-flight validation.  

Underlying need: **Production-grade observability and safety controls** as Reborn transitions from experimental to deployable workflows.

---

### 5. Bugs & Stability  
- **Nightly E2E Failure (#3447)**: Scheduled end-to-end tests failed on 2026-05-15 ([link](https://github.com/nearai/ironclaw/issues/3447)) — suggests intermittent infrastructure or test fragility; no fix PR yet.  
- **Markdown Table Rendering Bug (#3675)**: TUI fails to render Markdown tables correctly ([link](https://github.com/nearai/ironclaw/issues/3675)) — low severity but impacts user experience in CLI mode.  
- **DeepSeek Reasoning Content Drop (#3673)**: openai_compatible provider omits `reasoning_content`, breaking DeepSeek v4-pro multi-turn tool calls ([link](https://github.com/nearai/ironclaw/issues/3673)) — medium severity; likely requires provider-specific field mapping fix.  

No critical crashes reported. Fix PRs are being tracked separately.

---

### 6. Feature Requests & Roadmap Signals  
Strong signals point toward:  
- **WebChat v2 Native Routes (#3611)**: Minimal implementation of thread/message/timeline endpoints for beta testing ([link](https://github.com/nearai/ironclaw/issues/3611)) — likely next sprint deliverable.  
- **Idempotent WebUI Mutations (#3625)**: Client-side deduplication via `client_action_id` — essential for web UX reliability.  
- **Per-Hook DoS Budgets (#3689)**: Rate-limiting event-triggered Installed-tier hooks — indicates growing concern over third-party extension security.  

Next version will likely prioritize **WebUI stability**, **provider compatibility hardening**, and **extension sandboxing**.

---

### 7. User Feedback Summary  
- **Downstream Pinning Pain (#3259)**: Rust ecosystem users blocked by outdated crate versions → frustration with publication lag.  
- **Tool Correlation Needs (#3669)**: Tools require `thread_id`/`response_id` metadata to correlate side effects → reflects real-world integration demands.  
- **Security Transparency (#3676)**: Request for clear docs on secrets and WASM sandboxing → evaluators seek trust in isolation boundaries.  

Overall sentiment: **High engagement with core capabilities**, but growing demand for **stability assurances** and **security clarity** in production contexts.

---

### 8. Backlog Watch  
- **#3259 (crates.io publishing)**: Open since May 5, 4 comments — **maintainer attention needed** to unblock Rust adopters.  
- **#3602 (production gate missing)**: High-risk oversight; if unresolved, could lead to unsafe deployments.  
- **#3447 (nightly E2E flakiness)**: Recurring issue since May 10 — investigate root cause to prevent regression masking.  

These represent **blockers to broader adoption** and should be prioritized in upcoming planning cycles.

--- 

*Data snapshot: 2026-05-16 | Source: GitHub API + manual curation*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – May 16, 2026**

---

### **1. Today's Overview**  
LobsterAI shows strong development momentum with 33 merged PRs and 3 new open PRs in the last 24 hours, indicating active maintenance and feature refinement. The project maintains a healthy release cadence with no new releases today but demonstrates consistent internal progress. One critical user-reported issue (#1988) highlights a regression in third-party model integration (Qwen3.6-Plus via Alibaba Cloud’s Coding Plan), suggesting potential configuration or authentication drift post-update. Overall activity reflects focused engineering efforts on UI/UX polish, security hardening, and backend performance.

---

### **2. Releases**  
No new releases published today.

---

### **3. Project Progress**  
Today’s merged PRs emphasize frontend experience enhancements and stability improvements:
- **PPT & File Preview Overhaul**: Multi-tab preview interface (#1989),宽屏 support (#1990), and tab interaction fixes improve document handling.
- **IM Platform Pairing Support**: Added pairing code inputs for Telegram/Discord/QQ/POPO (#1987).
- **Session Management Fix**: Resolved duplicate character loss in managed sessions due to flawed suffix overlap logic (#1986).
- **Security Hardening**: Unified token refresh locks (#822), added URL protocol validation (#826), and fixed path traversal in `localfile://` handler (#828).
- **Performance Optimization**: Database tuning (#830) and streaming render optimizations (#1186) reduce CPU load during AI responses.

A notable stale PR (#1967) was closed—likely an accidental commit from Claude Code—highlighting CI vigilance.

---

### **4. Community Hot Topics**  
Only one issue (#1988) has meaningful engagement today. It reports that after a recent update, Qwen3.6-Plus (via Alibaba Cloud’s “Coding Plan”) is forcibly redirected to NetEase’s own model despite correct config settings, blocking external LLM usage. Users report the system auto-overrides configs, creating friction with multi-vendor workflows. This suggests a shift in default behavior or credential routing logic that affects enterprise/cloud-integrated users. The lack of reactions (👍0) implies either low visibility or acceptance of temporary workarounds.

---

### **5. Bugs & Stability**  
**Critical Issue**: #1988 – Model redirection bug preventing use of Qwen3.6-Plus via Alibaba Cloud.  
- **Root Cause**: Likely changes in model provider routing or auth flow that hardcode NetEase models for certain endpoints.  
- **Status**: Open, no fix PR submitted yet. Given the volume of other fixes today, this may require deeper investigation.  
- **Impact**: High for users relying on Alibaba Cloud’s coding plan; moderate for general users if it affects multi-cloud strategies.

No crashes or regressions reported beyond this issue.

---

### **6. Feature Requests & Roadmap Signals**  
New open PRs signal upcoming capabilities:
- **Thinking Level Control** (#1985): Allows granular control over AI reasoning depth (Off to Adaptive), mirroring modern agentic workflows. Likely tied to next-gen model integrations.
- **Per-Channel IM Models** (#838, merged): Already delivered—enables channel-specific model selection for IM bots, addressing operational flexibility needs.
- **MCP JSON Paste Mode** (#835, merged): Streamlines tool server setup, reflecting growing demand for MCP ecosystem compatibility.

These indicate LobsterAI is evolving toward customizable, extensible agent platforms rather than generic chat clients.

---

### **7. User Feedback Summary**  
**Pain Points**:  
- Configuration rigidity: Users report settings being overridden unexpectedly (#1988), eroding trust in customization.  
- Performance: Long conversations still trigger high CPU during streaming (#1186 addressed).  

**Positive Signals**:  
- Praise implied by rapid fixes (e.g., session sync, security patches) suggests responsive maintainership.  
- Feature adoption: Multi-tab previews and folder shortcuts (PR #1185) show attention to productivity workflows.  

Satisfaction appears mixed: technical users appreciate deep integrations (IM, skills), while power users express frustration with opaque model routing.

---

### **8. Backlog Watch**  
Two stale issues warrant attention:
- **#806**: "大量会话性能瓶颈" – Session/message indexing added, but long-term scalability for >10k sessions untested.  
- **#807**: "executionMode 配置不生效" – Fixed in PR #827, but verification needed for edge cases.  

Both were resolved in PRs today, so status is likely updated. However, if similar issues recur, they signal deeper architectural debt in session management or config persistence.

--- 

*Data sources: GitHub API snapshots @ 2026-05-16 00:00 UTC*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – May 16, 2026**

---

### 1. **Today's Overview**  
The Moltis project remains highly active with 11 updates in the past 24 hours—4 closed issues and 7 pull requests (6 merged, 1 open). No new releases were published today. The development pace is robust, focusing on infrastructure reliability, TLS enhancements, remote access integrations, and user-facing UI stability. Community engagement appears routine with no urgent escalations, indicating a mature but evolving toolchain.

---

### 2. **Releases**  
No new releases were published today. The last release date is unspecified; maintainers appear to follow a feature-driven or milestone-based release strategy rather than daily or weekly publishing.

---

### 3. **Project Progress**  
Six PRs were merged today, advancing core functionality:
- **#1002**: Introduces support for NetBird private mesh and Cloudflare Tunnel as remote-access backends (open for review).
- **#1001**: Adds OAuth client secret handling for MCP authentication flows.
- **#1000**: Enables public IP Subject Alternative Names (SAN) in auto-generated TLS certificates, addressing certificate validation limitations.
- **#998**: Fixes horizontal scrolling in chat UI caused by long unbroken prompt text (#994), with regression tests added.
- **#997**: Improves Proxmox installer resilience by tolerating missing CA cert files during LXC container creation.
- **#987**: Replaced mdBook-based documentation with an Astro-powered site, improving navigation, search, and theming without breaking existing URLs.

These changes reflect a strong focus on security, usability, and deployment flexibility.

---

### 4. **Community Hot Topics**  
No issue or PR garnered reactions or comments today. However, **Issue #995** (“Integration of `portal-tunnel` as a trustless relay channel”) stands out as a high-priority enhancement request involving decentralized communication infrastructure. While closed today, it signals growing demand for non-trust-based networking layers within Moltis’ agent ecosystem. This may foreshadow future roadmap items around zero-trust or peer-to-peer agent coordination.

---

### 5. **Bugs & Stability**  
Four bugs were resolved today:
- **#996**: TLS certificates incorrectly restricted to localhost despite documentation claiming broader validity—now fixed via PR #1000.
- **#994**: Chat UI regressed into horizontal overflow on long prompts—immediately addressed in PR #998.
- **#993**: Proxmox LXC creation failed on container ID 91 due to strict CA cert validation—patched in PR #997.
- **#995** was originally filed as an enhancement but involved a trust model clarification related to tunneling.

All fixes are already merged, indicating prompt triage and resolution practices. No critical crashes reported.

---

### 6. **Feature Requests & Roadmap Signals**  
The closure of **#995** suggests interest in integrating `portal-tunnel` for trustless relay capabilities—potentially paving the way for decentralized agent-to-agent communication. Combined with today’s PRs adding Cloudflare Tunnel and NetBird support (**#1002**), this points toward expanding Moltis’ remote-access layer beyond built-in options. Future versions may prioritize hybrid or third-party tunneling integrations as standard features.

---

### 7. **User Feedback Summary**  
Users report real-world pain points:
- Confusion over TLS scope (expected public IP support vs. actual localhost-only behavior).
- UI instability under edge cases (long prompts causing layout breaks).
- Friction in automated deployments (Proxmox script failing on specific container IDs due to overly rigid CA checks).

Feedback indicates users value documentation accuracy, installer robustness, and responsive UI polish—areas where recent merges directly address prior friction.

---

### 8. **Backlog Watch**  
No long-unanswered issues require immediate attention today. All reported problems received timely responses and fixes within 1–2 days. The only notable signal is **#995**, which, though closed, reflects forward-looking architectural interest that could influence future design decisions around secure, decentralized agent connectivity.

--- 

*Data compiled from [moltis-org/moltis](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – May 16, 2026**

### 1. Today's Overview  
The CoPaw project shows strong development momentum with 50 PR updates and 24 issue updates in the last 24 hours. Activity is high across both core functionality and channel integrations, indicating active user engagement and rapid iteration. No new releases were published today, but several critical bug fixes and security enhancements have been merged. The project maintains a healthy balance of feature development, stability improvements, and community feedback responsiveness.

---

### 2. Releases  
No new releases were published as of 2026-05-16. Users should continue using v1.1.7 or earlier until the next official release.

---

### 3. Project Progress  
**Merged/Closed PRs (selected):**  
- [#4427](https://github.com/agentscope-ai/QwenPaw/pull/4427): Fixed duplicate "Thinking…" placeholders in WeCom channel during rapid message bursts.  
- [#4423](https://github.com/agentscope-ai/QwenPaw/pull/4423): Resolved CloudPaw plugin import errors and improved Alibaba Cloud Skills integration.  
- [#4425](https://github.com/agentscope-ai/QwenPaw/pull/4425): Added timeout control for cron job creation to prevent agent task hangs.  
- [#4409](https://github.com/agentscope-ai/QwenPaw/pull/4409): Hardened backup trust controls with HMAC signing and import validation.  
- [#4198](https://github.com/agentscope-ai/QwenPaw/pull/4198): Strengthened plan-mode tool gate enforcement to prevent unauthorized execution before user confirmation.

These merges reflect progress on reliability, security, and user experience—particularly around cron tasks, backups, and multi-channel messaging.

---

### 4. Community Hot Topics  
Top-discussed items by comment volume (>3 comments):  
- **#4299**: `write_file()` failing with missing arguments on long outputs → [Link](https://github.com/agentscope-ai/QwenPaw/issues/4299)  
- **#3957**: Agent workspace hijacking via inter-agent messages in DingTalk → [Link](https://github.com/agentscope-ai/QwenPaw/issues/3957)  
- **#4051**: DeepSeek V4 Flash thinking content parsing failures → [Link](https://github.com/agentscope-ai/QwenPaw/issues/4051)  

**Analysis**: These highlight two key themes:  
1. **LLM output parsing robustness**, especially for models with structured reasoning tags (`<think>`, `reasoning_content`).  
2. **Channel-specific concurrency and isolation issues**, particularly in group chats (DingTalk, WeCom). Users demand better session scoping and message handling per participant.

---

### 5. Bugs & Stability  
**Critical Bugs (ranked by impact):**  
1. **[High]** #4299: `write_file()` argument error on long outputs — corrupts file operations in agent workflows. *Fix status*: Open (no PR yet).  
2. **[High]** #2751: Anthropic API rejects `type: "file"` in messages after `send_file_to_user` — breaks file-sharing flows. *Fix status*: Open (no PR yet).  
3. **[Medium]** #1516: Telegram voice messages not processed due to missing `AudioContent` support. *Fix status*: Open (no PR yet).  
4. **[Medium]** #4314: MiMo thinking mode + tool calls cause 400 errors in multi-turn chats. *Fix status*: Closed (resolved in v1.1.7b1).

All high-severity bugs lack immediate fixes; contributors are encouraged to prioritize them.

---

### 6. Feature Requests & Roadmap Signals  
Emerging priorities from open requests:  
- **Plugin discovery & installation** (#4406): Users want built-in plugins (e.g., `cloudpaw`, `qwen-image`) to be discoverable and installable—mirroring “skills” UX. Likely candidate for v1.2.0.  
- **Per-model token limits** (#4417): Request to configure `max_tokens` and `max_input_length` per model (not just agent level). Aligns with growing customization needs.  
- **Cron context isolation** (#4162, #4432): Demand for “Clear Before Run” toggle to avoid stale session pollution in scheduled tasks. Already being implemented in #4432.  
- **DingTalk parallel message processing** (#4431): Suggests architectural shift toward per-user session threading in group channels.

These signals point toward **enhanced configurability**, **better isolation semantics**, and **improved UX for plugin ecosystems**.

---

### 7. User Feedback Summary  
**Pain Points:**  
- Identity confusion in multi-agent environments (#3957)  
- Silent failures in file operations and LLM parsing (#4299, #4051)  
- Poor visibility into token usage and system state (#4114, #4433)  

**Satisfaction Indicators:**  
- Positive reception of cron timeout fixes (#4425)  
- Appreciation for backup trust hardening (#4409)  
- Enthusiasm for new built-in skills (e.g., World Cup companion via #4407)

Overall sentiment leans constructive but urgent around stability in production use cases.

---

### 8. Backlog Watch  
Items requiring maintainer attention beyond 60+ days:  
- **#1499**: QQ bot startup failure due to missing active model config — reported Mar 14, no resolution. Likely stems from misconfigured default providers.  
- **#2751**: Anthropic file-type incompatibility — reported Apr 1, still open. Impacts core file-sharing functionality.  
- **#1516**: Telegram AudioContent support — reported Mar 15, unresolved. Affects voice message usability.  

These represent **blockers for platform completeness** and should be prioritized in upcoming sprints.

--- 

*Data compiled from GitHub activity on agentscope-ai/QwenPaw as of 2026-05-16.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026-05-16**

---

### **1. Today’s Overview**  
The ZeroClaw project shows high development velocity with **50 PRs updated** and **22 issues active** in the past 24 hours, indicating intense feature work and rapid iteration. Activity is dominated by security hardening, observability improvements, and SOP (Standard Operating Procedure) engine refinements, reflecting a mature but rapidly evolving agentic AI runtime. No new releases were published today, suggesting the team is focused on stabilization ahead of an upcoming v0.8.0 milestone.

---

### **2. Releases**  
No new releases have been made since the last digest period. The absence of a release coincides with ongoing large-scale refactoring in PR #6398 ("v0.8.0: Multi-Agent Runtime and Schema V3"), which remains open and under review.

---

### **3. Project Progress**  
Today saw **9 issues closed**, including critical fixes for:
- **Session ownership model enforcement** (#5833): Closed after implementing scoped session keys to prevent cross-agent destructive operations.
- **CI stale check regression** (#6679): Fixed to require fresh CI runs before merging stale branches.
- **Docker bind mount shadowing web dashboard** (#6400): Resolved path collision preventing access to pre-built frontend assets.
- **Bash completion infinite recursion** (#6402): Patched by avoiding recursive function calls during CLI tab-completion.

Additionally, **6 PRs were merged**, including infrastructure improvements like version stamping in `/api/status` (#6367) and matrix threading fixes (#6525).

---

### **4. Community Hot Topics**  
Top-discussed items show community interest in **observability gaps** and **SOP reliability**:

- **#6689**: Production SOP audit logging silently fails—users report missing audit entries despite documentation promises. This has 0 reactions but 2 maintainer-authored issues this week, signaling internal urgency.
- **#6669**: Request to unify metric/trace sinks across gateway/runtime after split Prometheus registries (#6596). Reflects demand for consistent monitoring in multi-instance deployments.
- **#6253**: Coordinated tracker for v0.7.6 skills UX improvements—actively soliciting community input on authoring tools, sandboxing, and test harnesses.

These threads reveal a user base deeply engaged in production-grade deployment concerns rather than experimental features.

---

### **5. Bugs & Stability**  
Three high-severity bugs reported today:

| Issue | Severity | Impact | Status |
|------|--------|--------|--------|
| [#6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681) | S1 | `skills install clawhub:*` panics due to blocking HTTP client in async context | **Open** – Fix PR #6682 submitted |
| [#6678](https://github.com/zeroclaw-labs/zeroclaw/issues/6678) | S1 | Anthropic API rejects skill tool names with malformed format strings | **Open** – Likely needs schema validation fix |
| [#6654](https://github.com/zeroclaw-labs/zeroclaw/issues/6654) | S3 | Cron read-only queries hit writable DB path unnecessarily | **Closed** – Fixed in same-day update |

All high-risk bugs either have fixes underway or are resolved. One critical panic (#6681) was immediately addressed by contributor @abhinavmathur-atlan in PR #6682.

---

### **6. Feature Requests & Roadmap Signals**  
Strong signals point toward **enhanced security controls** and **multi-agent orchestration**:

- **TOTP-gated shell commands** (#5779): Phase 1 now open for review—users want selective command-level authentication without disabling shell entirely.
- **SearXNG search support** (#5316): Privacy-focused search alternative requested, especially for autonomous agents needing non-DuckDuckGo fallback.
- **Multi-Agent Runtime + Schema V3** (#6398): Massive PR targeting next major version; includes ACP session persistence, extended thinking APIs, and channel unification.

These suggest v0.8.0 will prioritize enterprise-grade security and scalability over incremental UX tweaks.

---

### **7. User Feedback Summary**  
Key pain points emerging:
- **Observability fragmentation**: Users struggle to correlate traces/metrics across gateway, runtime, and agent loops in distributed setups.
- **SOP lifecycle gaps**: Multiple reports (#6685–6687) that SOP cron triggers, HTTP fan-in, and audit logging are documented but not functional—hurting compliance workflows.
- **Localization readiness**: Requests (#6670) to adopt Fluent early for i18n, indicating growing international user base.

Positive feedback surrounds **active maintainer engagement**—multiple contributors report quick responses from core team (@Audacity88, @JordanTheJet), fostering trust in stability.

---

### **8. Backlog Watch**  
Two long-standing items need maintainer attention:

- **#5779 (TOTP-gated shell commands)**: Open since April 15, risk:high, flagged "needs-maintainer-review". Critical for security-sensitive deployments.
- **#6074 (Audit 153 lost commits post-bulk revert)**: Still open; describes irreversible loss of reviewed commits from c3ff635 revert. May require repository surgery or policy change.

Both represent high-impact decisions requiring maintainer bandwidth.

--- 

*Data compiled from GitHub activity between 2026-05-15 00:00 UTC and 2026-05-16 00:00 UTC.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*