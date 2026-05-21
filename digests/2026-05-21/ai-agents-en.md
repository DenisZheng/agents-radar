# OpenClaw Ecosystem Digest 2026-05-21

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-21 00:38 UTC

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

**OpenClaw Project Digest – May 21, 2026**

---

### **Today’s Overview**

OpenClaw remains highly active, with 500 issues and PRs updated in the last 24 hours—indicating sustained development momentum and strong community engagement. The project released three new versions (v2026.5.19, v2026.5.19-alpha.1, and v2026.5.20-beta.1), focusing on Discord voice session resilience, dependency updates, and agent behavior clarifications. With a mix of high-priority security and stability concerns alongside feature-driven enhancements, the project demonstrates both rapid iteration and growing complexity.

---

### **Releases**

**v2026.5.20-beta.1**  
- Enhances Discord voice session handling: enables agents to follow configured users into voice channels with channel-level access controls, multi-user handoff capabilities, bounded reconciliation for state consistency, and preservation of DAVE recovery context (#84264).  
- Introduces structured identity documentation via `IDENTITY.md` and `USER.md` within bounded execution contexts.

**v2026.5.19** & **v2026.5.19-alpha.1**  
- Clarifies best practices for agent fixes: defaults should prioritize clean bounded refactors, lean internal logic, and explicit deprecation paths for plugin SDKs/API surfaces.  
- Updates `@openclaw/proxyline` to v0.3.3 and Pi packages to v0.75.1; raises minimum Node.js support to version 22.

> No breaking changes noted; all updates are backward-compatible or additive.

---

### **Project Progress**

Today saw **27 merged PRs**, including several critical reliability and security patches:
- Fixed session-poisoning bug where message-tool delivery could leave inconsistent transcript histories (#84708).
- Added native subagent completion ownership tracking to prevent ambiguous final result attribution (#80544).
- Improved Discord reconnection logic to backfill missed messages after websocket drops (#81226).
- Enhanced TTS preprocessing to skip emojis/symbols by default when `messages.tts.skipEmojiSymbols` is enabled (#78172).
- Introduced structured sandbox repair checks in the `doctor` command for better diagnostics (#84326).

Additionally, automated ClawSweeper merges handled routine docs, CLI logging, and provider catalog hygiene tasks.

---

### **Community Hot Topics**

Top-discussed items reflect demand for **platform extensibility**, **developer tooling**, and **enterprise-grade reliability**:

1. **[Issue #9443](https://github.com/openclaw/openclaw/issues/9443)**: Request for prebuilt Android APKs (24 comments, +1 upvote). Users seek easier deployment beyond source builds—signal for mobile/edge use cases.
2. **[PR #84563](https://github.com/openclaw/openclaw/pull/84563)**: Fixes Telegram partial-stream truncation during final delivery (high visibility due to messaging UX impact).
3. **[Issue #10659](https://github.com/openclaw/openclaw/issues/10659)**: Masked secrets system to prevent agents from seeing raw API keys (12 comments, +4 upvotes). Direct response to credential leak risks—aligns with broader security roadmap signals.
4. **[PR #80056](https://github.com/openclaw/openclaw/pull/80056)**: Policy plugin now enforces tool metadata conformance at runtime—significant step toward sandboxed skill governance.

These threads highlight user desire for tighter integration control, safer secret handling, and richer platform APIs.

---

### **Bugs & Stability**

Newly reported regressions and crashes include:

| Issue | Severity | Description | Fix Status |
|-------|----------|-------------|------------|
| [#84059](https://github.com/openclaw/openclaw/issues/84059) | P1 | Embedded sessions fail after upgrade due to session file race conditions (`EmbeddedAttemptSessionTakeoverError`) | ✅ Fix PR #84250 submitted |
| [#84038](https://github.com/openclaw/openclaw/issues/84038) | P1 | `doctor --fix` silently migrates OpenAI Codex configs → standard OpenAI, breaking OAuth and inflating token usage 3–4× | 🔄 Under review |
| [#72808](https://github.com/openclaw/openclaw/issues/72808) | Bug | Slack connection drops silently without reconnection attempts | No fix yet |
| [#57349](https://github.com/openclaw/openclaw/issues/57349) | Closed | Heap exhaustion after ~17h uptime (OOM during fs scan) | Resolved |

Critical path: Session integrity and model fallback reliability are top stability concerns.

---

### **Feature Requests & Roadmap Signals**

Users are pushing for:
- **Native MCP server tool exposure** across agent requests (multiple reports since v4.26; see #80909).
- **Per-model usage logging** for cost transparency (#13219).
- **Fallback approval mode** with model attribution in messages (#33975).
- **AWS deployment guides** for EC2/ECS/Lambda (#13597).

The emphasis on *fallback mechanisms*, *tool visibility*, and *cloud-native packaging* suggests these will be prioritized in Q3 2026 releases.

---

### **User Feedback Summary**

**Pain Points**:  
- Agents leaking internal processing text into user channels (“narration spam”)—#25592 shows deep frustration over UX pollution.  
- Lack of disaster recovery tools (no config/session backup/restore)—#13616 echoes enterprise needs.  
- Poor accessibility in TUI due to emoji/unicode clutter—#9637 indicates exclusionary design.  

**Satisfaction Signals**:  
- Strong appreciation for proactive security warnings in `doctor` (e.g., plaintext key detection).  
- Positive reception of Telegram message interleaving improvements (+6 on #20786).  

Overall sentiment leans toward **pragmatic adoption** with calls for hardening, not reinvention.

---

### **Backlog Watch**

Watchlist items requiring maintainer attention:

- **[Issue #25592](https://github.com/openclaw/openclaw/issues/25592)**: Text-between-tool-calls leakage affects core UX—created Feb 24, still open, rated 🦞 diamond lobster. No linked fix PR.
- **[PR #35241](https://github.com/openclaw/openclaw/pull/35241)**: `--session-key` CLI flag for external integrations—submitted Mar 5, pending real-behavior proof.
- **[Issue #11829](https://github.com/openclaw/openclaw/issues/11829)**: Security roadmap for API key protection—longstanding, high-severity, but fragmented into multiple sub-tasks.

Maintainers should prioritize resolving session-state races and completing the secrets management overhaul to reduce technical debt.

--- 

*Data as of 2026-05-21 00:00 UTC. Sources: [GitHub openclaw/openclaw](https://github.com/openclaw/openclaw)*

---

## Cross-Ecosystem Comparison

**Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem (May 2026)**

---

### **1. Ecosystem Overview**

The personal AI agent open-source landscape in May 2026 is characterized by high activity and rapid iteration, with projects like OpenClaw leading as core reference implementations. The ecosystem spans from full-featured frameworks (OpenClaw, IronClaw) to lightweight runtimes (PicoClaw, NanoClaw) and niche integrations (CoPaw, LobsterAI). A clear trend toward enhanced security, multi-platform messaging support (Discord, Telegram, WhatsApp), provider extensibility, and robust agent orchestration is evident across the board. While many projects share overlapping technical foundations—often built atop or inspired by OpenClaw—they differentiate through deployment targets (desktop, mobile, embedded), integration breadth, and architectural focus (e.g., Reborn-native vs. plugin-based).

---

### **2. Activity Comparison**

| Project       | Issues (24h) | PRs (24h) | Merged PRs (24h) | Releases (Last 3 Days) | Health Score* |
|---------------|--------------|-----------|------------------|------------------------|---------------|
| **OpenClaw**  | 500          | ~500      | 27               | 3 (v2026.5.19–20)      | ⭐⭐⭐⭐☆ (9.2) |
| NanoBot       | 11           | 40        | 27               | None                   | ⭐⭐⭐☆☆ (7.8) |
| Hermes Agent  | 50           | 50        | 0                | None                   | ⭐⭐⭐☆☆ (7.6) |
| PicoClaw      | 8            | 27        | 7                | 1 nightly              | ⭐⭐⭐⭐☆ (8.4) |
| NanoClaw      | 4            | 23        | 6                | None                   | ⭐⭐⭐☆☆ (7.4) |
| NullClaw      | 0            | 2         | 0                | None                   | ⭐⭐☆☆☆ (5.1) |
| IronClaw      | 18           | 46        | 3                | None                   | ⭐⭐⭐⭐☆ (8.6) |
| LobsterAI     | 4            | 24        | 7                | None                   | ⭐⭐⭐☆☆ (7.7) |
| Moltis        | 2            | 3         | 3                | None                   | ⭐⭐⭐☆☆ (7.5) |
| CoPaw         | 37           | 36        | 11               | v1.1.8.post1           | ⭐⭐⭐⭐☆ (8.3) |
| ZeptoClaw     | 0            | 1         | 0                | None                   | ⭐☆☆☆☆ (3.2) |
| ZeroClaw      | 29           | 50        | 0                | None                   | ⭐⭐⭐☆☆ (7.9) |

\* *Health Score based on: release frequency, bug resolution speed, community engagement, CI/CD stability, and backlog hygiene (scale: 1–10)*

---

### **3. OpenClaw's Position**

OpenClaw remains the dominant reference implementation, evidenced by its massive issue/PR volume (~500/day), frequent releases, and adoption as a dependency by other projects (e.g., PicoClaw porting tools from it). Its technical approach emphasizes **stability-first iteration**, backward compatibility, and enterprise-grade reliability—evident in its session resilience, sandbox diagnostics (`doctor` command), and structured identity docs (`IDENTITY.md`). Community size dwarfs peers: NanoBot has ~40 daily PRs vs. OpenClaw’s ~500 issues updated daily. While smaller projects target specific niches (e.g., CoPaw for WeChat, Hermes for gateway routing), OpenClaw serves as the de facto standard for core agent behavior, making it the central nervous system of the broader ecosystem.

---

### **4. Shared Technical Focus Areas**

Several cross-cutting requirements are emerging:

- **Provider & Model Fallback Reliability**: Multiple projects report critical bugs around provider inference failures (ZeptoClaw #592), API key leaks (OpenClaw #10659), and OAuth misconfigurations (Hermes #29344, ZeroClaw #6059). All seek hardened credential handling and graceful degradation.
  
- **Multi-Channel Messaging Resilience**: WhatsApp mention logic (#2565, NanoClaw), Slack reconnection (#81226, OpenClaw), Discord voice sessions (#84264), and Feishu streaming (#4572, CoPaw) highlight demand for consistent message delivery across fragmented platforms.

- **Tool & Skill Governance**: Runtime enforcement of tool metadata conformance (OpenClaw #80056), MCP tool filtering (ZeroClaw #6699), and skill manifest standardization (ZeroClaw #6645) reflect a push toward sandboxed, auditable agent capabilities.

- **Session & State Integrity**: Race conditions in embedded sessions (OpenClaw #84059), memory isolation (#3744, NanoBot), and context compaction drops (Hermes #29522) signal universal concerns about state consistency in long-running agents.

- **Deployment Observability**: Per-model usage logging (OpenClaw #13219), token refresh stability (LobsterAI #2018), and fallback approval modes (OpenClaw #33975) indicate growing operational needs in production environments.

---

### **5. Differentiation Analysis**

| Project       | Primary Focus                          | Target Users                     | Key Architecture Trait               |
|---------------|----------------------------------------|----------------------------------|--------------------------------------|
| **OpenClaw**  | Core agent framework + enterprise ops  | DevOps, platform builders        | Bounded execution contexts, SDK hardening |
| **IronClaw**  | Reborn-integrated agent runtime        | Near.ai ecosystem users          | Native Reborn surface ownership      |
| **CoPaw**     | Chinese-market chatbot integration     | SMB bot operators in China       | WeChat iLink, Pet plugin UX          |
| **NanoBot**   | Multi-channel messaging automation     | Team collaboration bots          | Signal-first, per-user memory scopes |
| **PicoClaw**  | Lightweight edge/deployment          | Homelab, low-cost inference      | Android/Termux support, minimal deps |
| **ZeroClaw**  | Configurable, modular agent runtime  | Power users, researchers         | Schema v3, dynamic provider routing  |

Notably, most projects converge on **MCP (Model Context Protocol)** and **OAuth provider flows**, but diverge in abstraction layers: OpenClaw emphasizes stability, ZeroClaw enables deep customization, while CoPaw and NanoBot prioritize platform-specific UX polish.

---

### **6. Community Momentum & Maturity**

- **Rapid Iteration Tier**: OpenClaw, ZeroClaw, and IronClaw show sustained high velocity (>40 PRs/day), with proactive security and stability patches.
- **Stabilization Tier**: Moltis and NanoBot maintain steady, focused development without breaking changes.
- **Niche Specialization**: CoPaw and PicoClaw serve tight user bases with strong feedback loops despite lower absolute activity.
- **At-Risk**: ZeptoClaw and NullClaw exhibit stagnation—low engagement, unresolved critical bugs, and minimal maintainer responsiveness.

Overall, the ecosystem is maturing rapidly, with core functionality solidified but new pain points emerging around multi-tenancy, deployment scalability, and provider heterogeneity.

---

### **7. Trend Signals**

From community feedback, three macro trends are shaping the next wave of agent development:

1. **Shift Toward Production-Grade Observability**: Users increasingly demand cost tracking (per-model logs), audit trails (job history in Moltis), and self-service dashboards (ZeroClaw skills gateway #6700). Expect native telemetry APIs in Q3.

2. **Rise of Config-Driven Agent Orchestration**: Projects like NullClaw (cron subagent #783) and ZeroClaw (tool filter groups #6699) reveal a move away from hardcoded workflows toward declarative configuration—aligning with GitOps and policy-as-code paradigms.

3. **Convergence on Secure, Isolated Execution**: With repeated reports of credential leaks (#10659) and sandbox escapes (#2688), the industry is prioritizing bounded contexts, secret masking, and immutable skill packaging—mirroring cloud security best practices.

For AI agent developers, this signals that **robustness over novelty**, **observability over magic**, and **extensibility over monolithicity** will define successful projects in H2 2026.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – May 21, 2026**

---

### 1. Today's Overview  
NanoBot remains highly active, with **40 pull requests updated in the last 24 hours**, including 27 merged/closed and 13 open—demonstrating rapid development velocity. The project saw **11 new or updated issues**, primarily focused on integration enhancements (Signal), stability fixes (IMAP, WebUI), and provider expansion (Novita AI, xAI OAuth). No new releases were published today, indicating a maintenance-focused cycle. Overall activity reflects strong community engagement and steady feature maturation.

---

### 2. Releases  
*No new releases were published today.*

---

### 3. Project Progress  
**Merged/Closed PRs (last 24h):**  
- **[#3935](https://github.com/HKUDS/nanobot/pull/3935)**: Signal channel support via `signal-cli` daemon (merged after review; enables secure messaging integration).  
- **[#3852](https://github.com/HKUDS/nanobot/pull/3852)**: Redundant Signal implementation merged (likely duplicate of #3935).  
- **[#3930](https://github.com/HKUDS/nanobot/pull/3930)**: Multi-language README documentation links added for global accessibility.  

These merges advance multi-channel support and internationalization efforts. Several older refactoring and tooling improvements (e.g., #2787, #2852) also closed today, reflecting ongoing architectural cleanup.

---

### 4. Community Hot Topics  
Top-engaged items show demand for **enhanced multi-user session management** and **cross-platform compatibility**:  
- **[#3744](https://github.com/HKUDS/nanobot/issues/3744)**: User asks how shared agent sessions handle per-user memory isolation (USER.md/MEMORY.md) across IM channels—highlighting need for session-scoped persistence.  
- **[#49](https://github.com/HKUDS/nanobot/issues/49)**: Feature request for Signal integration via `signal-cli`, already implemented in PRs—shows strong user appetite for privacy-first messaging backends.  
- **[#3938](https://github.com/HKUDS/nanobot/issues/3938)**: Group chat message buffering/debouncing requested to reduce noise in collaborative environments.  

These reflect real-world usage of NanoBot in team-based or group communication scenarios, driving UX refinements.

---

### 5. Bugs & Stability  
Critical bugs reported, mostly related to **third-party API misconfigurations** and **UI state leaks**:  
1. **[#3884](https://github.com/HKUDS/nanobot/issues/3884)**: WebUI conversation resets after first response—blocks core usability (severity: high).  
2. **[#3934](https://github.com/HKUDS/nanobot/issues/3934)**: ExecTool fails to install pip packages due to PATH precedence—impairs dynamic script execution (severity: medium).  
3. **[#3931](https://github.com/HKUDS/nanobot/issues/3931)**: `restrictToWorkspace=true` blocks legitimate web requests like `curl`—safety guard overreach (severity: medium).  

Fixes are underway: PR #[3937](https://github.com/HKUDS/nanobot/pull/3937) adds user confirmation for dangerous commands addressing safety concerns. No crashes reported.

---

### 6. Feature Requests & Roadmap Signals  
Users actively seek **local model support** and **OAuth provider flows**:  
- **[#3941](https://github.com/HKUDS/nanobot/issues/3941)**: Request to add image generation for Ollama—aligns with trend toward local AI deployment.  
- **[#3936](https://github.com/HKUDS/nanobot/pull/3936)**: xAI Grok OAuth implementation in progress—suggests roadmap prioritization of authentication convenience over manual key entry.  
- **[#3903](https://github.com/HKUDS/nanobot/issues/3903)**: Image MIME type detection needed across providers—points to unifying abstraction layer for multimodal outputs.  

Predicted next-version focus: **OAuth providers**, **group chat UX**, and **image generation extensibility**.

---

### 7. User Feedback Summary  
Real pain points center on **session isolation**, **security policy clarity**, and **multi-user collaboration**:  
- Users express frustration with shared-agent memory conflicts (#3744) and restrictive safety guards (#3931).  
- Positive reception for Signal integration (#49, 👍5) signals trust in security-conscious design.  
- Developers report workflow disruption from exec-tool limitations (#3934), indicating need for better sandboxed environment handling.  

Overall sentiment is constructive but urgent—maintainers appear responsive (e.g., quick merge of Signal PR).

---

### 8. Backlog Watch  
No long-unanswered issues >30 days without activity today. However:  
- **[#3744](https://github.com/HKUDS/nanobot/issues/3744)** has 4 comments since May 11 but zero maintainer replies—critical for multi-user deployments.  
- **[#1123](https://github.com/HKUDS/nanobot/issues/1123)** (163.com IMAP fix) unresolved since Feb 24—requires server-side workaround testing.  

Both warrant maintainer attention to prevent technical debt accumulation.

--- 

*Data snapshot: May 21, 2026 | Source: GitHub activity API*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**1. Today's Overview**  
Hermes Agent shows strong development activity with 50 issues and 50 PRs updated in the last 24 hours, indicating an active maintenance cycle focused on stability, gateway reliability, and multi-platform support. No new releases were published today, but multiple high-severity bug fixes and configuration enhancements are under review. The project continues its pattern of rapid iteration around v0.14.x architecture changes, particularly in authentication, provider routing, and TUI/Gateway integrations.

**2. Releases**  
No new releases were made today.

**3. Project Progress**  
- **Closed PRs**: None merged or closed in the last 24h (all recent closures occurred earlier).
- **Active Fixes**: Several critical infrastructure improvements are under way:
  - FD recycling race condition in API calls (PR #29544) — P1 severity, addressing silent kanban.db corruption.
  - Slack thread context parsing now includes Block Kit content (PR #29541).
  - Discord typing task cleanup on teardown (PR #23083).
  - MCP reconnection after timeout (PR #24508).
  - Provider validation harness added to CLI (PR #29540).

These advances suggest ongoing stabilization efforts ahead of potential release cycles.

**4. Community Hot Topics**  
Top community discussions center on **multi-user isolation** and **gateway message routing**:
- **Multi-Role Auto-Routing via Gateway Hooks** (#5143): High engagement (12 👍), proposing a contextual classifier to route messages to appropriate Hermes profiles within a single gateway instance—critical for enterprise deployments.
- **Per-conversation context isolation** (#14162) & **Per-user USER.md isolation** (#27182): Both lack traction but signal growing demand for multi-tenant safety in shared environments.
- **Rewind/edit-and-resubmit** (#21910): Moderate interest (4 👍), reflecting user desire for better session control akin to Claude Code’s double-Esc.

Underlying need: **Scalable, secure, and composable agent orchestration** across teams and platforms.

**5. Bugs & Stability**  
New bugs reported include:
- **High**: Automatic context compaction dropping assistant responses (#29522) — P1, observed in long sessions; fix under discussion.
- **Medium**: xAI OAuth misclassifying token failures as entitlement errors (#29344) — impacts token refresh logic.
- **Gateway leaks**: ANSI escape sequences flooding TUI stdin after pipe break (#28419); dangerous command warnings leaking into agent output (#29511).
- **Provider/auth false negatives**: Copilot auth detection (#29442), SSH config ignored by `hermes doctor` (#29481).

Multiple fixes already submitted (e.g., #29544 for FD race), indicating prompt response to critical regressions.

**6. Feature Requests & Roadmap Signals**  
Key feature requests trending:
- **Spreadsheet skill abstraction** (#4438): Rich file handling beyond raw Python libraries.
- **Model overrides per subagent** (#18591): Needed for rate-limited providers like Zhipu GLM.
- **Silent skip delivery for WhatsApp groups** (#18848): Essential for non-intrusive bot behavior.
- **Per-session working directories** (#29531): Required for concurrent OpenAI-compatible API sessions.

These reflect roadmap emphasis on **tooling maturity**, **provider flexibility**, and **platform-specific UX refinement**.

**7. User Feedback Summary**  
Users report frustration with:
- **Auth complexity**: Confusion around GitHub Copilot, xAI OAuth, and SSH credential visibility.
- **Gateway message handling**: Misrouted Feishu DMs (#29466), broken Markdown chunking (#29471), Discord slash-command normalization (#29528).
- **TUI instability**: ANSI leaks and spurious warnings degrade experience.
- **Lack of isolation**: Shared memory and global state hinder multi-user use cases.

Satisfaction is mixed—core functionality works, but advanced deployment scenarios require more polish.

**8. Backlog Watch**  
Long-standing high-priority items needing attention:
- **Multi-role auto-routing v2** (#5143): Updated proposal aligns with v0.14.0 architecture but awaits design sign-off.
- **Persistent history for background tasks** (#16946): Finished tasks lost on restart; no recent progress.
- **Immutable skills protection** (#25083): Critical for governance but stalled since May 13.

Maintainers should prioritize reviewing these architectural proposals to prevent blockage in next major iteration.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – May 21, 2026**

---

### **Today’s Overview**  
PicoClaw shows healthy development momentum with 27 PR updates and 8 issue activity in the past 24 hours. The project released a new nightly build (v0.2.8-nightly.20260520.639b3270), indicating active CI/CD automation. A mix of security fixes, stability improvements, and feature expansions—particularly around provider support and message delivery—dominates recent contributions. Overall activity suggests strong maintainer engagement and growing community interest.

---

### **Releases**  
A single nightly release was published:  
- **nightly**: Nightly Build for `v0.2.8-nightly.20260520.639b3270`  
This is an automated unstable build. Full changelog available [here](https://github.com/sipeed/picoclaw/compare/v0.2.8...main). No stable releases or breaking changes reported today.

---

### **Project Progress**  
**Merged/Closed PRs (last 24h):**  
- #2891 – Added “Reset to Factory Defaults” functionality with config backup and credential preservation  
- #2765 – Ported `update_plan` tool from OpenClaw for structured multi-step progress tracking  
- #2760 – Introduced provider-backed image generation tool (disabled by default)  
- #2757 – Enhanced OpenAI OAuth support for Codex and transcription flows  
- #2725 – Made MCP initialization failures non-fatal to prevent agent loop crashes  
- #2691 – Added `get_current_time` utility tool  
- #2679 – Fixed ChatGPT Plus subscription/OAuth handling  

These merges reflect progress on configuration resilience, agent reliability, and extended tooling.

---

### **Community Hot Topics**  
Most engaged discussions center on **streaming output** and **rich media messaging**:  
- **#1950**: Streaming Web Chat output requested (9 comments, low priority but roadmap-aligned)  
- **#2404**: Config-based streaming HTTP request toggle for LLM backends (7 comments, +1 reaction)  
- **#2855**: Extend `message` tool to support media attachments natively (1 comment; linked to active PR #2856)  

Underlying need: smoother integration between agents and modern chat interfaces requiring real-time text + media delivery. Maintainers appear responsive—PR #2856 directly addresses this demand.

---

### **Bugs & Stability**  
High-severity bug identified and actively addressed:  
- **#2720**: Singleton PID check fails when stale PID is reused by another process → causes crash loops  
  - **Status**: Open, but fix implemented in PR #2813 (updated May 20)  
  - Impact: Critical for daemon reliability on systems with aggressive PID recycling  

Other bugs:  
- #2769 – Authentication failures with valid API keys (closed today after investigation)  
- Memory store metadata drift post-crash (fixed in PR #2907)  

No critical regressions reported today.

---

### **Feature Requests & Roadmap Signals**  
Top user-driven enhancements likely to influence next stable version:  
- **Native GPT4Free (g4f) support** (#2901): First-class provider with fallback/proxy routing  
- **DeepSeek thinking-level mapping** (#2903): Align internal abstraction with DeepSeek’s reasoning controls  
- **WhatsApp-compiled builds** (#2625): Pre-built binaries with channel plugins for embedded devices  

Signal: Focus on broadening provider compatibility and optimizing for lightweight hardware (e.g., Pi Zero, Termux/Android).

---

### **User Feedback Summary**  
Users report frustration with **authentication edge cases** (#2769) and **sandbox escapes** (#2688), though both are now resolved. Positive signals include appreciation for **security hardening** (CSRF, path traversal fixes in #2900) and **configuration recovery options** (#2891). Real-world use cases emphasize **homelab deployment**, **low-cost inference**, and **cross-platform compatibility** (notably Android via Termux guide added in #2902).

Satisfaction appears mixed: core functionality works well, but advanced integrations (streaming, media, niche providers) require polish.

---

### **Backlog Watch**  
Two long-standing issues risk staleness despite importance:  
- **#2720** (PID identity verification): High severity, fix exists but awaits merge  
- **#2625** (WhatsApp-compiled builds): Low priority but impacts embedded users; no ETA  

Maintainer attention recommended to prevent regression or lost opportunity for edge-case users.

--- 

*Data snapshot as of 2026-05-21 | Source: GitHub API / sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – May 21, 2026**

**1. Today’s Overview**  
NanoClaw shows high development velocity with 23 PR updates and 4 issue reports in the last 24 hours, signaling active maintenance and rapid feature evolution. The project is deepening its integration capabilities—particularly around Agent Client Protocol (ACP) and IDE tooling—while addressing stability concerns in WhatsApp channel handling and container runtime security. No new releases were published today, but multiple security fixes and infrastructure improvements have been merged or proposed.

**2. Releases**  
No new releases were published as of 2026-05-21.

**3. Project Progress**  
Six PRs were closed/merged today, including:
- **PR #2565**: Fixed WhatsApp group mention detection by properly reading `contextInfo.mentionedJid` instead of hardcoding `isMention: undefined` ([link](https://github.com/nanocoai/nanoclaw/pull/2565))
- **PR #2057, #2054, #2052, #2056**: Systemd setup enhancements for LXC compatibility and sudo visibility fixes across multiple related commits ([links](https://github.com/nanocoai/nanoclaw/pull/2057), etc.)
- **PR #2143**: Added admin cancellation commands for active agent runs ([link](https://github.com/nanocoai/nanoclaw/pull/2143))

These merges reflect focus on installer robustness, user experience polish, and critical messaging reliability.

**4. Community Hot Topics**  
Top engagement centers on **WhatsApp mention logic** (#2560, #2570, #2565) and **container infrastructure staleness** (#2574). The ACP-related PRs (#2542, #2575) demonstrate strong interest in IDE-agent interoperability, with a live WebStorm demo showing real-world utility. Underlying needs include: reliable multi-user chat routing, secure cross-container permissions, and seamless developer toolchain integration.

**5. Bugs & Stability**  
High-severity bug resolved today: WhatsApp group @-mentions failing to set `isMention` flag (CLOSED via #2565), which blocked documented onboarding flows. Two open issues highlight ongoing risks:
- **#2570**: Shared-number mode incorrectly triggering agent on human operator mentions (severe UX breakage)
- **#2569**: Emoji reaction schema mismatch breaking WhatsApp/Discord integrations

Both lack fix PRs yet but are actively reported. Rootless Podman bugs (#2572) also pose deployment stability concerns.

**6. Feature Requests & Roadmap Signals**  
Significant signals point toward:
- **ACP ecosystem expansion** (#2542, #2575): Full JSON-RPC agent protocol support enabling external AI editors
- **RTK CLI proxy integration** (#2571): Token-saving optimization for dev workflows
- **Context window introspection** (#2573): Model-aware context budgeting (inspired by Claude Code)

These suggest NanoClaw is maturing from standalone assistant to extensible agent middleware.

**7. User Feedback Summary**  
Users report frustration with **messaging platform quirks**—especially WhatsApp’s shared-number mode misrouting and emoji API inconsistencies across channels. Positive feedback emerges around **IDE integration viability**, with successful WebStorm proof-of-concept. Pain points center on installation complexity (LXC/sudo hangs) and permission granularity in multi-admin environments.

**8. Backlog Watch**  
Critical attention needed on:
- **#2574**: Stale `skill/apple-container` branch threatening container infra continuity if unmerged
- **#2570 & #2569**: High-priority WhatsApp/Discord bugs without assigned fixes
- **#1999, #2004, #2383**: Security hardening trio requiring coordinated review

All three demand maintainer bandwidth to prevent technical debt accumulation.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest – May 21, 2026**

---

### 1. Today's Overview  
The NullClaw project shows minimal activity today, with no new issues or releases and two open pull requests last updated yesterday. Development momentum appears stable but slow; both recent PRs focus on infrastructure hardening and testing improvements rather than major feature rollouts. The absence of merged changes suggests a quiet period in active development, possibly aligning with maintenance or stabilization phases.

---

### 2. Releases  
No new releases were published today.

---

### 3. Project Progress  
No pull requests were merged or closed in the past 24 hours.

---

### 4. Community Hot Topics  
Both open PRs have seen recent updates but remain unmerged as of May 20:
- **PR #892**: Adds regression tests for Windows `getAddressList` compatibility, addressing a prior stub implementation that caused `HostResolutionFailed` errors in chat completion providers. This reflects ongoing efforts to stabilize cross-platform networking behavior.
- **PR #783**: Proposes a comprehensive cron subagent engine with job history tracking, JSON CLI output, and security hardening. It introduces database-backed scheduling, multiple job types (skill/agent/shell), time zone support per job, alerting, and atomic operations—signaling a significant backend infrastructure upgrade.

Neither PR has received comments or reactions, indicating limited community engagement despite their technical scope.

---

### 5. Bugs & Stability  
No new bugs or regressions were reported today. However, **PR #892** implicitly addresses a known Windows-specific bug (#890) related to incomplete `getAddressList` resolution, which was fixed upstream but lacks test coverage—highlighting a gap between codebase stability and test robustness.

---

### 6. Feature Requests & Roadmap Signals  
**PR #783** strongly signals upcoming roadmap priorities: robust job orchestration via cron-like scheduling, structured logging/output (JSON), and enhanced security controls. Its complexity and scope suggest it may target a future minor version release, potentially Q3 2026. Meanwhile, **PR #892** indicates continued investment in cross-platform compatibility testing, especially for Windows networking layers.

---

### 7. User Feedback Summary  
While direct user feedback is not visible in today’s data, the nature of both PRs implies real-world pain points:
- Users on Windows may have experienced intermittent host resolution failures during provider-based chat completions.
- Power users and operators likely demand better job automation, auditability, and secure execution—prompting the cron subagent proposal.
Overall sentiment appears neutral to constructive, with contributors focusing on reliability and operational tooling over flashy features.

---

### 8. Backlog Watch  
- **PR #892** (Windows `getAddressList` regression tests): Created May 5, last updated May 20. No maintainer response yet; critical for preventing future regressions in Windows environments.  
- **PR #783** (cron subagent engine): Created April 7, last updated May 20. High-impact feature requiring thorough review due to database schema changes and security implications.  

Both PRs warrant maintainer attention to prevent stagnation.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**1. Today’s Overview**  
IronClaw remains highly active with 64 tracked items updated in the last 24 hours—18 issues and 46 pull requests—indicating sustained development momentum around its Reborn integration initiative. No new releases were published today, but multiple core infrastructure PRs advanced toward production-grade secret egress, WebUI composition, and local-dev shell capabilities. The project continues to prioritize stability and observability improvements (e.g., CI slash-command workflows) while expanding native support for agentic tooling via MCP and OAuth flows.

**2. Releases**  
No new releases occurred on 2026-05-21.

**3. Project Progress**  
Key merged/closed PRs include:  
- **#3816** (Closed): Ported shell execution logic into Reborn-built-in capabilities, enabling first-party command dispatch within agent loops ([PR link](https://github.com/nearai/ironclaw/pull/3816)).  
- **#3820** (Closed): Enforced staged credential policies for production HTTP egress, blocking direct secret store access in live environments ([PR link](https://github.com/nearai/ironclaw/pull/3820)).  
- **#3808** (Closed): Implemented `/benchmark` slash-command dispatcher for automated regression testing across PRs ([PR link](https://github.com/nearai/ironclaw/pull/3808)).  

These advances solidify Reborn’s internal security boundaries and developer experience tooling.

**4. Community Hot Topics**  
Top-discussed items remain focused on Reborn integration architecture:  
- **Issue #3580**: Urgent request to port WebUI/Web Gateway to native Reborn surfaces, with clear parent tracker (#3577) and porting guide ([link](https://github.com/nearai/ironclaw/issues/3580)).  
- **Issue #3281**: High-priority demand for durable event streaming via `EventStreamManager`, critical for real-time user-facing updates ([link](https://github.com/nearai/ironclaw/issues/3281)).  
- **PR #3815**: Large-scale WebChat v2 gateway composition landing, representing a major milestone in channel re-architecture ([link](https://github.com/nearai/ironclaw/pull/3815)).  

Underlying need: Unify all external interfaces under Reborn-owned abstractions to reduce technical debt and improve maintainability.

**5. Bugs & Stability**  
One notable regression identified today:  
- **Issue #3734**: v0.28.2 broke provider config UI by removing API Key and "Fetch available models" controls in non-TEE agents ([link](https://github.com/nearai/ironclaw/issues/3734)). Severity: Medium—impacts user onboarding and configuration. No fix PR submitted yet.  
Additionally, nightly E2E failures persist (**#3447**, last updated yesterday), suggesting intermittent test instability; no action taken as of today.

**6. Feature Requests & Roadmap Signals**  
Strong signals point to upcoming capabilities:  
- Native Google Calendar/Gmail and Notion MCP integrations (**#3829**, **#3805**) are explicitly scoped behind extension-v2 readiness, indicating imminent release.  
- Routine notification context threading (**#1519**) reflects user desire for seamless chat continuity—likely slated for Q3 given its P2 classification.  
- Subagent spawn design (**#3798**) is proposed but not yet prioritized; may follow deeper AgentLoop stabilization.

**7. User Feedback Summary**  
Pain points center on:  
- **Configuration fragility**: Missing UI controls post-upgrade frustrate users managing inference providers.  
- **Context isolation**: Notifications appearing outside chat threads disrupt conversational UX.  
Satisfaction is high around Reborn’s architectural clarity and CI automation, evidenced by rapid adoption of `/benchmark` commands and positive engagement on porting guides.

**8. Backlog Watch**  
Critical long-standing items requiring attention:  
- **Issue #1519** (Open since March 2026): Over 60 days unresolved; impacts core UX coherence.  
- **Issue #3094** (Open since April 2026): Auth interaction services needed for blocked-run UX flows; parent of multiple Reborn lanes.  
Both lack maintainer updates despite high strategic importance—risk stalling Reborn adoption if not addressed soon.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – May 21, 2026**

### 1. **Today's Overview**
The project shows high development activity with 24 PR updates and 4 issue updates in the last 24 hours. Most PRs were merged or closed today, indicating rapid iteration on stability, UI/UX enhancements, and backend reliability. No new releases were published, but multiple fixes and feature additions suggest active stabilization ahead of a potential release cycle. The community remains engaged with both bug reports and feature proposals, particularly around integration conflicts and user experience friction.

---

### 2. **Releases**
*No new releases reported as of May 21, 2026.*

---

### 3. **Project Progress**
Seven PRs were merged or closed today, focusing on:
- **Browser & Web Fetch Stability** (#2023): Improved success rates for external resource fetching.
- **HTML Preview & Source View UX** (#2022): Lazy loading for large files, theme-aware rendering, and better error handling.
- **Model Context Window Support** (#2021): Adds `contextWindow` field from provider APIs to client-side configuration (`openclaw.json`).
- **Cross-DPI Multi-Monitor Fix** (#2020): Prevents window size distortion on Windows secondary monitors with different DPI scaling.
- **Thinking Block Display & Custom Params** (#2019): Introduces per-model custom parameters and real-time thinking process visualization.
- **Gateway Token Refresh Stability** (#2018): Avoids unnecessary gateway restarts during token refreshes.
- **Message Compaction Retries** (#2015): Handles edge cases in message truncation logic during long conversations.

These changes enhance reliability, user control, and visual feedback across core workflows.

---

### 4. **Community Hot Topics**
No single issue dominated engagement, but recurring themes include:
- **Integration Conflicts**: Issue #1698 highlights a critical port conflict between "Youdao Lobster" and "OpenClaw Crab," causing authentication failures when co-deployed—users report this as a blocking workflow issue.
- **Setup Friction**: Issue #2017 describes failure to detect built runtime despite running build scripts, preventing any local usage.
- **Feature Gaps**: Issue #2016 requests support for the `openhuman` engine, suggesting expansion beyond current provider ecosystems.
While no issue has >2 comments or reactions, the concentration of recent reports points to onboarding and multi-instance deployment challenges.

---

### 5. **Bugs & Stability**
**High Severity**:
- **#1698**: *Port Conflict Between OpenClaw Instances* – Must-reproduce gateway failure when running multiple instances; affects production deployments. No fix PR yet, but related token refresh fix (#2018) may mitigate symptoms.
- **#2017**: *Missing Runtime Detection After Build* – Blocks all local usage despite correct build steps; appears to be an environment path or file permission issue. No resolution proposed.

**Medium Severity**:
- Minor UI bugs (e.g., vertical scrollbar glitches in source view) addressed in merged PRs today, showing responsive maintenance.

No crashes or security issues reported.

---

### 6. **Feature Requests & Roadmap Signals**
Top requested features:
- **OpenHuman Engine Support** (#2016): Indicates demand for expanding supported LLM backends beyond current providers.
- **Slash Commands for IM Channels** (#1573): Suggests need for lightweight bot controls in chat platforms—aligns with growing agent-as-service use cases.
- **Recently Used Skills Tab** (#1583): Reflects desire for observability into AI tool usage patterns, especially for auto-routing scenarios.

These signals point toward enhanced extensibility, user transparency, and cross-platform usability in upcoming versions.

---

### 7. **User Feedback Summary**
Users express frustration with:
- **Complex Setup Process**: Multiple reports of build/runtime detection failures suggest documentation or automation gaps.
- **Multi-Instance Instability**: Deployment conflicts hinder team or service-based usage.
- **Limited Provider Support**: Requests for additional engines (e.g., openhuman) show ecosystem lock-in concerns.

Positive trends include appreciation for granular model controls (custom params) and visual feedback (thinking blocks), indicating strong adoption of advanced agent features.

---

### 8. **Backlog Watch**
Several stale but important PRs require attention:
- **#1548**: Streaming Activity Bar timers—long-standing UX improvement for execution visibility.
- **#1550**: Scheduled task delivery mode bug—affects session-triggered automations.
- **#1576**: SSE race condition—could cause silent data loss in fast interactions.

These have been open since April 7–8 with no maintainer activity since May 20, signaling potential bandwidth constraints or prioritization shifts.

---

*Data sourced from [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – May 21, 2026**

---

### 1. **Today’s Overview**  
The Moltis project shows steady development momentum with three merged pull requests and two new enhancement issues opened in the last 24 hours. Activity remains focused on reliability improvements and feature expansion, particularly around memory management and sandboxing. No new releases were published today, indicating continued stabilization ahead of a potential upcoming release cycle. Overall project health appears strong, with maintainers actively addressing technical debt and user-requested capabilities.

---

### 2. **Releases**  
No new releases have been published since the last digest period. The absence of a release suggests the team is prioritizing code quality and stability over version increments at this time.

---

### 3. **Project Progress**  
Three pull requests were merged yesterday (May 20), all targeting critical backend subsystems:

- **[#1026](https://github.com/moltis-org/moltis/pull/1026)**: Fixes vault authentication synchronization by enforcing atomic password changes during rotation—prevents mismatches between auth and vault credentials for sealed vaults.  
- **[#1009](https://github.com/moltis-org/moltis/pull/1009)**: Resolves process leak in `QmdManager::run_with_timeout` by ensuring child processes are properly terminated when timeouts occur.  
- **[#1010](https://github.com/moltis-org/moltis/pull/1010)**: Enables nested subfolder support in memory operations, allowing users to write to collection-aware paths beyond flat `memory/*.md` files—aligning memory I/O with QMD’s flexible directory structure.

These merges reflect ongoing efforts to harden core infrastructure and improve usability within evolving agent workflows.

---

### 4. **Community Hot Topics**  
The most engaged issue from the past day is **#1028**, requesting out-of-the-box access to Moltis documentation for agents. This signals growing demand for self-service knowledge integration within autonomous agent contexts. While it has only one comment so far, its placement alongside recent memory and provider enhancements suggests a broader vision for embedded context awareness.

Another notable topic is **#1027**, proposing Google Antigravity SDK support as a new provider. Though currently unsubscribed (0 👍), it aligns with the pattern of expanding third-party integrations—a trend reinforced by prior provider-related PRs.

Both issues were opened on May 20 by active contributors (`IlyaBizyaev`, `BrandonStudio`) and reflect strategic direction toward extensibility and developer experience.

---

### 5. **Bugs & Stability**  
A previously open bug (#977) regarding browser sandbox failures in Docker environments was **closed** today after resolution. The issue described mounting challenges with Docker sockets and data volumes affecting sandbox execution. Since a fix was delivered and merged prior to closure, no active stability risks remain for containerized deployments. No new bugs or crashes were reported in the last 24 hours.

---

### 6. **Feature Requests & Roadmap Signals**  
Two high-priority enhancement requests emerged simultaneously:

- **Agent-accessible docs OOTB** (#1028): Users want agents to automatically ingest project documentation without manual setup—this could become a default capability in v1.5+ if prioritized.
- **Google Antigravity SDK provider** (#1027): Suggests ecosystem expansion; given the modular provider architecture, this may be feasible in the next minor release if Google confirms SDK compatibility.

Both requests indicate increasing reliance on Moltis as a platform for production-grade AI agent orchestration rather than just a runtime.

---

### 7. **User Feedback Summary**  
Real-world pain points center around **containerization reliability** (historically problematic sandbox behavior in Docker) and **agent context limitations** (lack of native doc access). The successful resolution of #977 validates that operational concerns are being addressed transparently. Meanwhile, enhancement proposals reveal satisfaction with core functionality but frustration with friction in advanced use cases—particularly around observability and integration depth.

---

### 8. **Backlog Watch**  
No long-standing unresolved issues require immediate maintainer attention. All items from the past week have seen timely responses or resolutions. However, **#1028** (docs access) and **#1027** (Antigravity SDK)—both opened today—should be monitored closely as early indicators of upcoming roadmap priorities. Given their recency and alignment with existing architectural patterns, they may signal planned feature sprints in Q3 2026.

--- 

*Data compiled from GitHub API activity on 2026-05-21.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – May 21, 2026**

---

### **Today’s Overview**
The CoPaw project shows strong development momentum with 37 issues and 36 PRs updated in the last 24 hours. Active community engagement is evident, particularly around WeChat integration, Pet plugin stability, and multi-modal model routing. One minor patch release (v1.1.8.post1) was published today, focusing on documentation and provider enhancements. Overall activity levels are high, indicating healthy maintenance and feature evolution.

---

### **Releases**
A minor patch release **v1.1.8.post1** has been published today:
- Added backup directory reference in install docs (#4534)
- Integrated OpenCode Go via `meta.base_url_options` provider configuration (#4536)
- Bumped version for internal tracking

No breaking changes or migration notes associated with this release.

---

### **Project Progress**
Among today’s merged/closed PRs:
- Fixed WeChat iLink context_token expiration handling and added message deduplication logic (#4576)
- Resolved backup access restrictions when running in Docker containers (#4563)
- Improved file name normalization in message processing (#4574)
- Patched infinite session-switching loop in console UI (#4573)
- Enhanced Windows compatibility and bilingual UI support for QwenPaw Pet plugin (#4564)

Several other fixes related to console rendering, test isolation, and dark mode visibility were also closed.

---

### **Community Hot Topics**
Top discussions reflect real-world usage challenges:

1. **[WeChat iLink Cron Failures](https://github.com/agentscope-ai/QwenPaw/issues/4477)** (13 comments): Users report failed scheduled message delivery due to expired tokens and lack of retry logic—critical for production bot deployments.

2. **[AGENTS.md Loading Default Template After Upgrade](https://github.com/agentscope-ai/QwenPaw/issues/4496)** (13 comments): Regression in v1.1.7 causing workspace-specific system prompts to be overwritten by built-in defaults, disrupting agent personalization.

3. **[Performance Degradation Beyond 40 Agents](https://github.com/agentscope-ai/QwenPaw/issues/4559)** (7 comments): Console becomes unresponsive with many agents loaded; suggests scalability limitations in frontend state management.

These threads highlight needs around reliability, configuration persistence, and performance at scale.

---

### **Bugs & Stability**
High-severity bugs reported today include:

| Issue | Severity | Description | Fix Status |
|------|--------|-------------|------------|
| [#4541](https://github.com/agentscope-ai/QwenPaw/issues/4541) | Critical | Pet plugin crashes main process on first message in Windows | ✅ Fixed in #4564 |
| [#4572](https://github.com/agentscope-ai/QwenPaw/issues/4572) | High | Feishu CardKit streaming fails due to sequence=0 | ⏳ Fix PR open (#4572) |
| [#4581](https://github.com/agentscope-ai/QwenPaw/issues/4581) | High | Model switching erases long-term memory | ❌ No fix yet |

Two additional crashes linked to Pet plugin (#4575) and session instability (#4557) were resolved today. Remaining open issues point to edge cases in channel integrations and lifecycle management.

---

### **Feature Requests & Roadmap Signals**
Key feature demands from users:
- **Auto multi-modal routing**: Automatic model selection based on input type (image/video/audio) without manual config (#4539)—received 👍1.
- **Coding Mode**: In-browser IDE with Git integration alongside chat panel (#4578).
- **Lightweight Goal Mode**: Session-scoped objectives via `/goal` commands (#4443).
- **Tauri Desktop Support**: Next-gen desktop app using Tauri 2.x (#3813).

The inclusion of OpenCode Go provider (#4536) and extraSystemPrompt API parameter (#4580) signals growing focus on extensibility and per-request context injection.

---

### **User Feedback Summary**
Users express frustration over:
- **Unreliable channel integrations** (WeChat, Feishu) affecting core functionality.
- **Poor offline experience**, especially with Pet plugin requiring external assets.
- **UI inconsistencies** in dark mode and file handling.
- **Lack of zero-config model switching**, forcing manual intervention for multimodal use.

Positive feedback centers on recent improvements to skill marketplace responsiveness and backup reliability. The Pet plugin remains popular but suffers from platform-specific instability.

---

### **Backlog Watch**
One notable long-standing issue requiring attention:
- **[#1740: K8s Deployment Guide](https://github.com/agentscope-ai/QwenPaw/issues/1740)** (last updated May 20, 2026): Still unanswered since March 2026—users seek official Kubernetes deployment guidance despite working v0.0.7 image.

Additionally, **#3813 (Tauri Desktop)** has been in review for weeks without resolution—maintainers should clarify roadmap priorities for desktop packaging.

--- 

*Data snapshot as of 2026-05-21 00:00 UTC*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw Project Digest – May 21, 2026**

---

### **Today’s Overview**  
On May 21, 2026, ZeptoClaw showed minimal activity with no updates to issues or releases and only one open pull request (PR) from the previous day. The project appears stable but in a quiet maintenance phase, with developers focusing on resolving a specific provider fallback bug rather than introducing new features. No merged PRs or new releases occurred today, indicating a low-intensity development cycle typical of mature open-source projects between feature sprints.

---

### **Releases**  
No new releases were published in the last 24 hours.

---

### **Project Progress**  
No pull requests were merged or closed today. Development focus remains on addressing an unresolved bug related to provider inference logic.

---

### **Community Hot Topics**  
Currently, there are no active discussions with comments or reactions. The sole open issue/PR (#592) has zero engagement, suggesting it is either newly reported or under internal review without external feedback.

---

### **Bugs & Stability**  
A critical bug was identified in PR #592: `infer_provider_name_for_model` incorrectly resolves model names to unconfigured providers due to an oversight in the keyword-based fallback mechanism. This flaw caused complete service failure for certain models like `openai/gpt-oss-120b` served via NIM (NVIDIA Inference Microservice). While not yet classified as a regression, its production impact warrants urgent resolution. A fix PR exists and is under review.

---

### **Feature Requests & Roadmap Signals**  
No new feature requests were submitted today. However, the bug fix in PR #592 indirectly highlights demand for stricter provider validation and improved error resilience in model-to-provider mapping—suggesting future enhancements around configuration safety and failover handling.

---

### **User Feedback Summary**  
Direct user input is absent today, but the nature of PR #592 implies real-world operational pain: users encountered total service outages when their configured provider set excluded the inferred provider, revealing a gap in production-grade reliability assumptions. This reflects dissatisfaction with silent failures and underscores the need for better validation guards.

---

### **Backlog Watch**  
PR #592 ([fix(providers): keyword fallback must not claim unconfigured provider](https://github.com/qhkm/zeptoclaw/pull/592)) requires maintainer attention. Although created on May 20, 2026, it has seen no updates or reviews since then despite its potential impact on deployment stability. Given its severity and lack of progress, this PR should be prioritized for merge or clarification.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest — 2026-05-21**

---

### 1. **Today’s Overview**  
The ZeroClaw project shows robust development activity with 29 updated issues and 50 PR updates in the last 24 hours, indicating a highly active iteration cycle. No new releases were published today, but multiple high-priority bug fixes and configuration enhancements are underway, especially around multi-agent runtime stability, provider compatibility (notably DeepSeek-V4), and MCP tool filtering. The team is actively addressing post-revert recovery efforts and schema migration blockers ahead of v0.8.0 integration.

---

### 2. **Releases**  
No new releases have been published as of 2026-05-21.

---

### 3. **Project Progress**  
While no PRs were merged today, several key changes advanced toward resolution:  
- **Schema v3 batch migration (#5947)** remains a merge blocker; all checklist items must land before v0.8.0 can proceed.  
- **Multi-agent UX RFC (#5890)** was accepted by core team vote and is now being extracted into formal documentation.  
- **V3 env-var override mechanism (#6375)** and **typed-family provider split (#6273)** reached `status:accepted`, signaling imminent implementation.  
- Multiple CI/CD automation improvements (e.g., labeler.yml fix #6814, pr-title workflow unblocking #6752) reduce maintainer friction.

---

### 4. **Community Hot Topics**  
Top community-engaged items reflect urgent operational needs:  
- **Issue #6059**: High-severity bug blocking DeepSeek-V4 users due to API format incompatibility. Active discussion (11 comments, 4 👍) suggests widespread impact across Pro/Flash variants.  
- **PR #6700**: Skills management dashboard (gateway + web UI) gains traction for enabling non-developer skill governance—critical for enterprise adoption.  
- **Issue #6699**: Reports that `tool_filter_groups` is non-functional for real MCP tools, undermining config-driven tool scoping. Seen as a blocker for production deployments using deferred loading.  

These indicate strong demand for improved provider interoperability, granular tool control, and self-service skill management.

---

### 5. **Bugs & Stability**  
Several high-risk bugs reported today require immediate attention:  
| Issue | Severity | Description | Fix Status |
|-------|----------|-------------|------------|
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | P1 / High Risk | DeepSeek-V4 API incompatibility breaks thinking mode | In progress |
| [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | P1 / High Risk | `tool_filter_groups` is a no-op for MCP tools | Accepted |
| [#6771](https://github.com/zeroclaw-labs/zeroclaw/issues/6771) | P1 / High Risk | SecurityPolicy blocks valid multiline heredocs | Accepted → PR #6816 |
| [#6801](https://github.com/zeroclaw-labs/zeroclaw/issues/6801) | P1 / High Risk | `purge_namespace` deletes wrong column (category vs namespace) | In progress → PR #6777 |

Fixes exist or are imminent for three of four top bugs, reflecting responsive engineering.

---

### 6. **Feature Requests & Roadmap Signals**  
User-requested features point toward next-cycle priorities:  
- **Lightweight ZeroClaw mode** (#6165): Proposal to remove redundant integrations (GWS, Jira, etc.) via skills abstraction—suggests move toward minimal core + plugin model.  
- **Custom Telegram WebAPI endpoint** (#6807): Indicates need for provider flexibility beyond official APIs.  
- **Feature/support matrix** (#6810): Explicit request for clearer capability visibility, likely precursor to public roadmap refinement.  

Combined with active schema v3 migration (#5947) and multi-agent runtime overhaul (#6272), these signal v0.8.0 will emphasize configurability, isolation, and extensibility.

---

### 7. **User Feedback Summary**  
Real-world pain points include:  
- **Configuration complexity**: Users struggle with dynamic map entries (`providers.models.<name>`) not supported by CLI (#6053) and missing V3 env-var overrides (#6375).  
- **Provider inconsistency**: Native OpenAI provider ignores `timeout_secs` config while compatible providers honor it (#6723).  
- **Channel fragility**: Empty channel configs cause supervisor crashloops (#6724); WeChat loses context tokens on restart (#6238).  
- **Skill ecosystem fragmentation**: Tools expect `SKILL.toml` but bundled skills use `manifest.toml` (#6645), breaking automation.  

Satisfaction appears mixed: power users appreciate deep customization but face steep learning curves; new users hit blockers early (web_search failing on fresh installs, #6373).

---

### 8. **Backlog Watch**  
Two critical items demand maintainer action:  
- **Issue #6074**: Audit 153 commits lost in bulk revert c3ff635—requires historical analysis to recover valuable fixes without destabilizing master.  
- **Issue #6165**: "Prefer lighter ZeroClaw" proposes architectural shift; if implemented, could resolve long-term bloat concerns but requires careful deprecation planning.  

Both relate to post-v0.7.x stability and future direction clarity.

--- 

*Data snapshot: 2026-05-21 | Source: GitHub API*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*