# OpenClaw Ecosystem Digest 2026-05-28

> Issues: 382 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-28 00:34 UTC

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

# **OpenClaw Project Digest – May 28, 2026**

---

## **1. Today's Overview**
OpenClaw remains highly active with **382 issues** and **500 PRs** updated in the last 24 hours, reflecting ongoing development and community engagement. Two new releases (`v2026.5.26` and `v2026.5.26-beta.2`) highlight performance improvements for Gateway startup and reply visibility, while critical bugs (e.g., memory leaks, tool relay failures) dominate discussion. The project shows strong momentum in both feature development and stability fixes.

---

## **2. Releases**
- **v2026.5.26**:  
  - **Key Changes**:  
    - Faster Gateway startup by avoiding repeated scans (plugins, channels, sessions).  
    - Separates user-facing replies from follow-up work for better UX.  
    - Caches reduce runtime/session churn under load.  
  - **Migration Notes**: None breaking; backward-compatible.  
  - [Release Notes](https://github.com/openclaw/openclaw/releases/tag/v2026.5.26)

---

## **3. Project Progress**
### **Merged PRs Today**  
- **#87458**: Deduplicated persisted skill prompts to improve disk efficiency ([PR](https://github.com/openclaw/openclaw/pull/87458)).  
- **#87449**: Matternow text-block boundary fixes to prevent draft preview corruption ([PR](https://github.com/openclaw/openclaw/pull/87449)).  
- **#87374**: Cleared stale diagnostic activity to reduce session bloat ([PR](https://github.com/openclaw/openclaw/pull/87374)).  

### **Closed Issues Today**  
- **#87331**: "Native hook relay unavailable" after UUID staleness resolved ([Issue](https://github.com/openclaw/openclaw/issues/87331)).  
- **#87302**: Docker container breakage post-update fixed ([Issue](https://github.com/openclaw/openclaw/issues/87302)).

---

## **4. Community Hot Topics**
### **Top Issue (#48183): Feishu Memory Leak**  
- **Summary**: Feishu plugin’s `httpServers Map` cleanup race condition risks memory leaks ([Issue](https://github.com/openclaw/openclaw/issues/48183)).  
- **Community Impact**: High severity (`🦞 diamond lobster`), 17 comments; users stress need for resource safety.  

### **Top PR (#87455)**  
- **AI-assisted fix**: Recovered message-tool-only replies written as private finals now retry once ([PR](https://github.com/openclaw/openclaw/pull/87455)).  
- **Why It Matters**: Ensures tool-delivery reliability, a frequent pain point.

---

## **5. Bugs & Stability**
### **Critical Regressions Today**  
1. **#87395**: Native hook relay intermittently blocks tools on macOS ([Issue](https://github.com/openclaw/openclaw/issues/87395)) | **Fix PR**: #87455.  
2. **#87317**: Codex PreToolUse relay failure across turns ([Issue](https://github.com/openclaw/openclaw/issues/87317)).  
3. **#87329**: Subagent announce-delivery metadata corruption ([Issue](https://github.com/openclaw/openclaw/issues/87329)).  

### **Stability Flags**  
- **Gateway Event Loop**: Starvation reported in #75378 (subagent spawn delays), #84903 (stalled session blocks loop).  
- **Memory Safety**: Feishu leak (#48183), Telegram plugin-state cap (#87357).

---

## **6. Feature Requests & Roadmap Signals**
### **High-Impact User Demands**  
- **#86881**: "Gateway-lite mode without AI harness" for deterministic deployments ([Issue](https://github.com/openclaw/openclaw/issues/86881)).  
- **#10142**: `session:end` hook for workflow orchestration ([Issue](https://github.com/openclaw/openclaw/issues/10142)).  
- **Prediction**: Next version may focus on isolation (e.g., #84903) and lightweight modes.

---

## **7. User Feedback Summary**
### **Pain Points**  
- **Tool Reliability**: Users report opaque tool failures (#87317, #87395), especially with native hooks.  
- **Message Loss**: WhatsApp crash (#50563), QQBot duplication (#87177).  
- **Performance**: Discord/Telegram streaming gaps (#87326, #87357).  
- **Satisfaction**: Speed improvements (v2026.5.26) praised, but regressions frustrate users.

---

## **8. Backlog Watch**
### **Unanswered Critical Items**  
- **#84903**: Stalled agent sessions blocking entire event loop (needs maintainer review).  
- **#50630**: Tailscale auth bypass security flaw (CVSS 9.3, needs policy fix).  
- **#87362**: Plugin lifecycle hook events for observability ([Issue](https://github.com/openclaw/openclaw/issues/87362)).  
- **#87453**: Telegram plugin-state write preservation at row caps ([PR](https://github.com/openclaw/openclaw/pull/87453)).

---

### **Health Summary**  
OpenClaw is in active development with clear trade-offs: rapid feature adoption vs. stability debt. Recent releases show performance gains, but tooling/relay bugs dominate discussions. Prioritize memory safety (#48183), event-loop isolation (#84903), and native tool fixes (#87395) for next sprints.

---

## Cross-Ecosystem Comparison

# **Open-Source AI Agent & Assistant Ecosystem Comparison Report (2026-05-28)**

---

## **1. Ecosystem Overview**  
The personal AI assistant and agent open-source ecosystem in 2026 is highly fragmented but shows strong momentum, with projects like **OpenClaw**, **Hermes Agent**, and **NanoClaw** leading in activity, while niche players like **TinyClaw** and **ZeptoClaw** lag. Key themes include **multi-agent isolation**, **tool/relay reliability**, **provider flexibility**, and **memory persistence**, with community feedback driving rapid iteration on stability and UX. Projects targeting enterprise or multi-platform use cases (e.g., ZeroClaw, IronClaw) prioritize security and observability, whereas lightweight agents (PicoClaw, NanoBot) focus on modularity.

---

## **2. Activity Comparison**  

| Project          | Issues (Total) | PRs (Total) | Releases This Week | Health Score (1-5) |
|------------------|----------------|-------------|-------------------|-------------------|
| OpenClaw         | 382           | 500         | 2                 | ⭐⭐⭐⭐☆ (4/5)     |
| Hermes Agent     | 48            | 50          | 0                 | ⭐⭐⭐☆☆ (3/5)      |
| NanoClaw         | 9             | 32          | 0                 | ⭐⭐⭐⭐☆ (4/5)      |
| NanoBot          | 12            | 22          | 0                 | ⭐⭐⭐☆☆ (3/5)      |
| IronClaw         | 28            | 50          | 0                 | ⭐⭐⭐⭐☆ (4/5)      |
| LobsterAI        | 23            | 26          | 1                 | ⭐⭐⭐⭐☆ (4/5)      |
| CoPaw            | 40            | 26          | 2                 | ⭐⭐⭐⭐☆ (4/5)      |
| ZeroClaw         | 30            | 50          | 0                 | ⭐⭐⭐⭐☆ (4/5)      |

*Health Score*: Based on issue/PR velocity, release frequency, and stability (1=lagging, 5=highly active/stable).

---

## **3. OpenClaw's Position**  
### **Advantages Over Peers**
- **Activity**: Highest issue/PR volume (382 issues, 500 PRs) reflects robust community engagement.
- **Technical Approach**: Focuses on **Gateway-centric architecture** with plugin/channel/session isolation, offering a "unified runtime" for multi-platform agents (Discord, Telegram, Feishu).
- **Community Size**: Largest GitHub stars (~1.2k) and contributor count (35+), indicating broad adoption.

### **Key Differentiators**
- **Tooling**: Dedicated **tool relay** and **native hook** subsystems address cross-platform tool delivery gaps seen in NanoBot/Hermes Agent.
- **Performance**: Startup optimizations (v2026.5.26) and caching reduce session churn—a pain point in NanoClaw’s provider-focused model.

---

## **4. Shared Technical Focus Areas**
| Requirement                | Projects Addressing It                     | Specific Needs                                                                 |
|---------------------------|-------------------------------------------|-------------------------------------------------------------------------------|
| **Multi-Agent Isolation**  | Hermes Agent (#9514), OpenClaw (Gateway profiles) | Prevent context mixing; workspace/personality separation                         |
| **Provider Flexibility**   | NanoClaw (#80), ZeroClaw (DeepSeek-V4)    | Non-Claude/OpenRouter support; API compatibility                               |
| **Memory Persistence**     | Hermes Agent (#8457), NanoBot (#3885)      | Survive restarts; cross-session search/compression                             |
| **Tool/Relay Reliability**| OpenClaw (#87395), NanoBot (#4027)       | Native hooks (macOS), MCP tool call retries                                   |
| **Security Hardening**     | ZeroClaw (#6971), IronClaw (#4111)        | Credential boundaries, secret redaction                                       |

---

## **5. Differentiation Analysis**
| Project          | Target Users               | Feature Focus                          | Technical Architecture              |
|------------------|----------------------------|---------------------------------------|------------------------------------|
| **OpenClaw**     | Developers, enterprises     | Multi-channel Gateway, tool isolation  | Plugin-based, extensible runtime   |
| **Hermes Agent** | Researchers, teams         | Curator tools, memory persistence     | Monolithic with subagent plugins  |
| **NanoClaw**     | Integrators, providers     | Provider abstraction layer            | NixOS/Docker-first, CLI-driven   |
| **NanoBot**      | Lightweight users          | MCP server, skill lifecycle           | Modular, event-loop focused       |
| **IronClaw**     | Enterprise, Reborn users   | OAuth, credential recovery           | Reborn integration, auth flows    |
| **LobsterAI**    | General public, media gen  | Media generation, cowork UI           | Web-first with OpenClaw plugins   |
| **CoPaw**        | Desktop coders             | Tauri app, Coding Mode IDE           | Electron/Tauri hybrid             |
| **ZeroClaw**     | Security-conscious orgs    | Unified output routing, plugin catalog | RFC-driven, observability-first   |

---

## **6. Community Momentum & Maturity**
- **Rapid Iteration**:  
  - **OpenClaw**, **ZeroClaw**, **NanoClaw**: High issue/PR volumes + RFCs indicate active development cycles.
  - **Hermes Agent**, **NanoBot**: Steady bug fixes but slower feature adoption.
  - **TinyClaw/PicoClaw**: Niche focus, limited activity.
- **Stabilizing**:  
  - **LobsterAI**, **CoPaw**: Released major versions, addressing core pain points (media, desktop apps).
  - **NanoClaw**: Provider-focused; fewer features but high-quality fixes.

---

## **7. Trend Signals**
### **Emerging Industry Trends**
1. **Multi-Platform Tool Reliability**  
   - OpenClaw’s native hooks (#87395), NanoBot’s MCP (#4028), and ZeroClaw’s allowlists (#6981) highlight demand for consistent cross-platform tool delivery.
2. **Provider Agnosticism**  
   - NanoClaw’s #80 (Anthropic lock-in) and ZeroClaw’s DeepSeek-V4 (#6059) push for OpenAI-compatible API flexibility.
3. **Memory & Context Persistence**  
   - Hermes Agent (#8457), NanoBot (#3885), and OpenClaw’s session caching show frustration with lost context post-restart.
4. **Security by Default**  
   - ZeroClaw’s credential boundaries (#6971), IronClaw’s OAuth (#4111), and OpenClaw’s Feishu leak (#48183) emphasize runtime safety needs.
5. **Desktop & Hybrid Apps**  
   - CoPaw’s Tauri app (#3813) and LobsterAI’s cowork UI (#2061) signal shift toward embedded agent experiences.

---

### **Strategic Implications for AI Agent Devs**
- **OpenClaw’s Gateway Model**: Best for **multi-agent orchestration** with strict isolation requirements.
- **ZeroClaw’s Observability**: Ideal for **enterprise deployments** needing audit trails (OTel spans, SecurityPolicy filters).
- **NanoClaw’s Provider Layer**: Simplifies **integration testing** across LLMs (Anthropic, OpenRouter, Novita AI).
- **Hermes Agent’s Memory**: Research-focused **long-running workflows** with curator tools.
- **CoPaw/LobsterAI**: **Consumer-ready** media/coding features with polished UIs.

**Recommendation**: For developers prioritizing **scalability** and **cross-platform tooling**, OpenClaw and ZeroClaw lead. For **provider flexibility**, NanoClaw excels. The ecosystem’s fragmentation suggests a need for interoperability standards (e.g., GitAgent Protocol in NanoBot).

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# **NanoBot Project Digest – May 28, 2026**  

---

## **1. Today’s Overview**  
NanoBot was highly active over the past 24 hours with **5 issues updated (4 open, 1 closed)** and **22 PRs submitted (16 open, 6 merged)**, indicating strong contributor engagement and rapid iteration. No new releases were published, but multiple critical fixes and enhancements were merged, particularly around MCP server stability, memory management, and provider configurability. The project shows steady momentum in addressing both bugs and feature requests.

---

## **2. Releases**  
*No new releases this period.*  

---

## **3. Project Progress**  
### **Merged/Closed PRs:**  
- **[PR #4014 & #4027]** Fixed a **critical MCP reconnection bug**, where sessions failed to reconnect due to `_mcp_connected` not resetting on disconnect. Now includes callbacks for automatic retries ([details](https://github.com/HKUDS/nanobot/pull/4014)).  
- **[PR #4028]** Added support for **`tools/list_changed` notifications**, allowing dynamic tool reloading without session drops ([details](https://github.com/HKUDS/nanobot/pull/4028)).  
- **[PR #4018]** Made **`NANOBOT_STREAM_IDLE_TIMEOUT_S`** configurable for the Codex provider, aligning it with other streaming providers ([details](https://github.com/HKUDS/nanobot/pull/4018)).  
- **[PR #4023]** Refactored the **heartbeat service** into a cron-based auto-registration system, reducing infrastructure complexity ([details](https://github.com/HKUDS/nanobot/pull/4023)).  

### **Open PRs (Top Contributors):**  
- **[PR #4030]** Adds **GitAgent Protocol (GAP) support**, enabling portable agent standardization ([details](https://github.com/HKUDS/nanobot/pull/4030)).  
- **[PR #4007]** Introduced **WebUI project workspaces** and access controls for scoped agent runtime ([details](https://github.com/HKUDS/nanobot/pull/4007)).  
- **[PR #4025]** Protects unprocessed memory entries from compaction to avoid data loss ([details](https://github.com/HKUDS/nanobot/pull/4025)).  

---

## **4. Community Hot Topics**  
### **Most Active Issues:**  
- **[Issue #1922] [CLOSED]** *Self-hosted WebUI Panel* by **Good0007**  
  - A community-built **nanobot-webui** dashboard gained traction (10👍, 10 comments). Highlights demand for better admin interfaces ([link](https://github.com/HKUDS/nanobot/issues/1922)).  
- **[Issue #3885]** *Dream System Global Toggle* by **codeLong1024**  
  - Requests a config switch to **disable Dream memory jobs** entirely (currently hard-registered). Proposed solution: `dream.enabled: false` ([link](https://github.com/HKUDS/nanobot/issues/3885)).  
- **[Issue #4013]** *LLM Stream Timeout Bug* by **mxnbf**  
  - Users report crashes after v0.2.0 upgrade, with streams stalling at 90s timeout. Fix PR (#4020) proposes per-provider timeout tuning ([link](https://github.com/HKUDS/nanobot/issues/4013)).  

### **Trending Feature Requests:**  
- **Provider-specific model overrides** (e.g., separate models for default vs. Dream tasks, [Issue #4029](https://github.com/HKUDS/nanobot/issues/4029)).  
- **Session isolation in DingTalk groups** (to prevent user context mixing, [PR #4016](https://github.com/HKUDS/nanobot/pull/4016)).  

---

## **5. Bugs & Stability**  
### **Critical:**  
- **[Issue #4013]** *Stream Timeout Crashes*  
  - **Severity:** High (blocks all LLM interactions). **Fix:** PR #4020 introduces configurable timeouts per provider ([link](https://github.com/HKUDS/nanobot/issues/4013)).  
- **[PR #4011]** *Orphan Tool Results Cleanup*  
  - Prevents stale `tool_call_id` messages from corrupting history ([link](https://github.com/HKUDS/nanobot/pull/4011)).  

---

## **6. Feature Requests & Roadmap Signals**  
Key upcoming priorities inferred from issues/PRs:  
1. **Memory Management**: Configurable Dream job toggles (#3885), compaction safeguards (#4025).  
2. **Provider Flexibility**: Model/timeout customization (#4029, #4020).  
3. **UX Improvements**: WebUI projects (#4007), session isolation (#4016).  
4. **Standardization**: GitAgent Protocol integration (#4030, #4019).  

---

## **7. User Feedback Summary**  
- **Pain Points:**  
  - Hardcoded cron jobs (Dream memory) frustrate power users needing granular control.  
  - Stream timeouts are too aggressive for local LLMs (e.g., Ollama).  
- **Positive Signals:**  
  - Strong adoption of community extensions (e.g., nanobot-webui).  
  - Rapid response to MCP stability bugs (#4014, #4027).  

---

## **8. Backlog Watch**  
### **High-Priority Open Items:**  
- **[Issue #3885]** *Dream Job Toggle*: Needs maintainer review for backward-compatible config addition.  
- **[Issue #2772]** *WeChat Message Limit*: Users request increasing context window beyond 10 messages.  
- **[PR #4022]** *Modular System Prompts*: Could improve prompt flexibility if merged.  

---

**Project Health:** ✅ **Stable & Evolving**  
With frequent merges addressing critical bugs and feature-driven PRs, NanoBot maintains a robust development pace. Community contributions (webUI, GAP protocol) signal growing ecosystem interest.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – May 28, 2026**

---

## **1. Today's Overview**
Hermes Agent remains highly active with **50 issues updated** (48 open) and **50 PRs submitted** (44 open), indicating robust contributor engagement. No new releases were published this cycle. Key themes revolve around **multi-agent isolation, memory persistence, Telegram integration, and skill management**. The project is experiencing a wave of feature requests for modularity and stability improvements.

---

## **2. Releases**
*No new releases today.*

---

## **3. Project Progress**
- **Merged PRs**:  
  - **#33523**: Fixed Hindsight multimodal payload sanitization to prevent data leaks ([details](https://github.com/NousResearch/hermes-agent/pull/33523)).  
  - **#33542**: Stabilized Codex model auto-selection to avoid hangs with `gpt-5.5` ([details](https://github.com/NousResearch/hermes-agent/pull/33542)).  
  - **#30958**: Resolved Windows venv interpreter resolution in CLI tools ([details](https://github.com/NousResearch/hermes-agent/pull/30958)).  

- **Notable Fixes**:  
  - Gateway atomicity fixes (#28633) and Slack sentinel handling (#30936) improved platform reliability.  
  - Curator toolset consolidation bug (#26655) addressed via proper `.archive/` directory usage.

---

## **4. Community Hot Topics**
### **Top Issues by Engagement**
1. **[#9514: Single-Daemon Multi-Agent Isolation](https://github.com/NousResearch/hermes-agent/issues/9514)**  
   - **11 comments**, 5 👍  
   - *Need*: Users want consolidated gateway profiles per agent (workspace/memory/personality separation) instead of running multiple gateways.  

2. **[#8457: Persistent Session Memory](https://github.com/NousResearch/hermes-agent/issues/8457)**  
   - **9 comments**  
   - *Need*: Survive gateway restarts without losing context; propose cross-session search/compression.  

3. **[#10143: Telegram Topic-to-Profile Routing](https://github.com/NousResearch/hermes-agent/issues/10143)**  
   - **10 comments**  
   - *Need*: Route Telegram forum topics to specialized agents dynamically (model/skills/memory).  

4. **[#24186: Kanban 401 Unauthorized](https://github.com/NousResearch/hermes-agent/issues/24186)**  
   - **9 comments**  
   - *Bug*: Post-update auth failure; dashboard logs suggest config/db checks needed.  

---

## **5. Bugs & Stability**
### **Critical Regressions**
- **[#33502: OpenAI-Codex Provider Crash](https://github.com/NousResearch/hermes-agent/issues/33502)**  
  - *Severity*: High (NoneType iteration error after Docker update).  
  - *Fix PR*: #33542 (Codex model fallback stabilization).  

- **[#33367: Terminal Tool FileNotFoundError](https://github.com/NousResearch/hermes-agent/issues/33367)**  
  - *Recurring* thread cleanup issue; requires C extension review.  

- **[#30151: Kanban Scratch Workspace Corruption](https://github.com/NousResearch/hermes-agent/issues/30151)**  
  - *Severity*: P1 (user projects directory silently deleted).  
  - *Status*: Unfixed; needs audit of `default_workdir` handling.  

---

## **6. Feature Requests & Roadmap Signals**
### **Likely Next-Mile Features**
- **Multi-Agent Isolation (#9514)**: Top-voted request; may drive next release’s architecture shift.  
- **Dynamic Model Routing (#30652)**: Task-based model selection could optimize cost/performance.  
- **Skill Lifecycle Transparency (#28213)**: Audit tools for post-sync skill diffs (#28213).  
- **i18n Dashboard (#9301)**: Non-English UI support requested by non-US users.  

---

## **7. User Feedback Summary**
- **Pain Points**:  
  - **Memory Persistence**: Users report frequent loss of operator corrections due to session caps (#8457, #32064).  
  - **Telegram Limitations**: Lack of topic-to-profile routing frustrates multi-bot setups (#10143).  
  - **Skill Management**: Unversioned `.hermes/skills/` risks silent corruption (#20352).  
- **Satisfaction**: Moderate; fixes like Slack (#30936) and Codex (#33542) address urgent bugs but leave roadmap gaps.

---

## **8. Backlog Watch**
### **High-Priority Unresolved Items**
- **RFC: Per-User Agent Isolation (#21574)**  
  - Prompt injection vulnerabilities need identity-based permission systems.  
- **Persistent Memory (#8457, #32064)**  
  - Cross-session search/compression is critical for long-running agents.  
- **Kanban Workspace Safety (#30151)**  
  - Silent directory deletion requires fail-safes in `default_workdir` logic.  

**Maintainer Attention Needed**:  
- **Curator Toolset Bug (#26655)**: Skills moved to `.archive/` incorrectly; may impact user skill retention.  
- **Terminal Thread Cleanup (#33367)**: Recurring `FileNotFoundError` in daemon threads.  

--- 

**Data Links**:  
- [Issues](https://github.com/NousResearch/hermes-agent/issues) | [PRs](https://github.com/NousResearch/hermes-agent/pulls)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# **PicoClaw Project Digest (2026-05-28)**

---

## **1. Today's Overview**  
PicoClaw remains actively maintained, with **4 open issues**, **6 PRs (5 open, 1 merged)**, and **1 new nightly release (v0.2.9-nightly.20260527)** in the last 24 hours. The project shows consistent activity, particularly around WebSocket streaming fixes (`#2853`, `#2957`) and security enhancements (`#2899`). No critical regressions or outages were reported.

---

## **2. Releases**  
- **Nightly Build**: [v0.2.9-nightly.20260527](https://github.com/sipeed/picoclaw/releases)  
  - Unstable build; includes ongoing fixes for tool calls (`#2957`) and MQTT TLS verification (`#2899`).  
  - *Migration Note*: Users should test thoroughly before production use.

---

## **3. Project Progress**  
- **Merged PR**: [#2853](https://github.com/sipeed/picoclaw/pull/2853)  
  - Added **ChatStream support** for real-time token streaming on the pico channel, improving UX for long-running tasks.  
- **Open PRs**:  
  - [#2957](https://github.com/sipeed/picoclaw/pull/2957): Fixes dropped `tool_calls` during streaming (related to Issue #2958).  
  - [#2956](https://github.com/sipeed/picoclaw/pull/2956): Preserves channel enabled state after config merges.  
  - [#2955](https://github.com/sipeed/picoclaw/pull/2955): Validates PID file ownership to prevent false singleton locks.  

---

## **4. Community Hot Topics**  
### **Top Issues**  
- **[#2958](https://github.com/sipeed/picoclaw/issues/2958)**: Tool calls lost in consecutive pico-channel requests.  
  - *Severity*: High (blocks multi-step workflows).  
  - *Fix PR*: [#2957](https://github.com/sipeed/picoclaw/pull/2957) submitted same day.  
- **[#2952](https://github.com/sipeed/picoclaw/issues/2952)**: User-requested UI/API improvements (model key management, QQ channel bugs).  
  - *Underlying Need*: Better developer ergonomics and stability.  
- **[#2954](https://github.com/sipeed/picoclaw/issues/2954)**: Android 32-bit system incompatibility.  
  - *Scope*: Platform-specific limitation.  

---

## **5. Bugs & Stability**  
| Issue | Severity | Fix Status | Notes |
|-------|----------|------------|-------|
| [#2958](https://github.com/sipeed/picoclaw/issues/2958) | Critical | PR #2957 submitted | Streaming breaks tool calls. |
| [#2953](https://github.com/sipeed/picoclaw/issues/2953) | Medium | Unassigned | OpenAI OAuth response empty (streaming issue). |
| [#2954](https://github.com/sipeed/picoclaw/issues/2954) | Low | Unassigned | Limited Android platform support. |

---

## **6. Feature Requests & Roadmap Signals**  
- **Key Requests from [#2952](https://github.com/sipeed/picoclaw/issues/2952)**:  
  - Model provider/key management UI improvements.  
  - QQ channel bug fixes (reboot loop).  
  - *Prediction*: Likely targeted for v0.3.x roadmap.  
- **Trending Needs**: Real-time streaming reliability (#2957), security configs (#2899), cross-platform support.

---

## **7. User Feedback Summary**  
- **Pain Points**:  
  - **Streaming Reliability**: Users report broken tool calls (#2958) and OAuth responses (#2953).  
  - **Platform Gaps**: Lack of 32-bit Android support (#2954).  
  - **UI/UX Friction**: Manual key management (#2952).  
- **Satisfaction**: Nightly builds indicate users tolerate instability for cutting-edge features (e.g., ChatStream).

---

## **8. Backlog Watch**  
- **Critical**:  
  - **[#2958](https://github.com/sipeed/picoclaw/issues/2958)**: Requires urgent attention due to workflow disruption.  
  - **[#2953](https://github.com/sipeed/picoclaw/issues/2953)**: OAuth bug affects OpenAI integration.  
- **Long-Term**:  
  - **Android 32-bit support (#2954)**: May require low-level changes.  
  - **Security Config Merges (#2956)**: Prevents accidental channel disabling.  

---

### **Health Assessment**  
✅ **Activity**: High (daily PRs/issues).  
⚠️ **Stability**: Minor regressions in streaming, but fixes are rapid.  
🔧 **Roadmap**: Focus on real-time UX (#2853, #2957) and security (#2899).  
📈 **Community Engagement**: Users actively report bugs and feature gaps.  

*For tracking, see [GitHub](https://github.com/sipeed/picoclaw).*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# **NanoClaw Project Digest – May 28, 2026**  

---

## **1. Today's Overview**  
NanoClaw saw moderate activity over the past 24 hours with **9 PRs (5 open, 4 closed)** and **1 resolved issue (#80)**—the only active item in the issue tracker. No new releases were published. The project appears stable, with contributors focusing on bug fixes, infrastructure improvements (NixOS support), and MCP (Model Context Protocol) integrations. The high comment count on Issue #80 suggests strong community engagement around provider flexibility.

---

## **2. Releases**  
*No new releases were published today.*  

---

## **3. Project Progress**  
### **Merged/Closed PRs Today:**  
- **[PR #5](https://github.com/qwibitai/nanoclaw/pull/5)**: Fixed cross-group scheduled tasks using incorrect `chat_jid` by enforcing group JID lookup. *(Critical for multi-group workflows)*  
- **[PR #2629](https://github.com/qwibitai/nanoclaw/pull/2629)**: Resolved NixOS container networking issues by replacing `--add-host=host-gateway` with `--network=host` + `127.0.0.1` gateway. *(Improves Docker runtime stability on NixOS hosts)*  
- **[PR #2577](https://github.com/qwibitai/nanoclaw/pull/2577)** & **[PR #2623](https://github.com/qwibitai/nanoclaw/pull/2623)**: Minor cleanup PRs.  

### **Open PRs Requiring Attention:**  
- **[PR #2628](https://github.com/qwibitai/nanoclaw/pull/2628)**: Fixes ignored `--id` flag in CLI commands (e.g., `ncl groups create`). *(Regression reported by user)*  
- **[PR #2627](https://github.com/qwibitai/nanoclaw/pull/2627)**: Aligns Slack reaction handling with other platforms (unicode vs. shortcodes). *(MCP integration bugfix)*  
- **[PR #2626](https://github.com/qwibitai/nanoclaw/pull/2626)**: Replaces silent `launchctl kickstart` failures with explicit errors. *(Improves debugging for macOS Signal channel setup)*  
- **[PR #2625](https://github.com/qwibitai/nanoclaw/pull/2625)**: Enables file uploads in Microsoft Teams (`supportsFiles: true`). *(High-priority per user report)*  
- **[PR #2624](https://github.com/qwibitai/nanoclaw/pull/2624)**: Adds `disabledTools` per-server config in `McpServerConfig`. *(Flexible tool control for MCP integrations)*  

---

## **4. Community Hot Topics**  
### **Top Issue: [Issue #80](https://github.com/qwibitai/nanoclaw/issues/80)**  
- **Status**: *Closed* (Low priority, but widely discussed).  
- **Summary**: Users urge support for non-Claude providers (e.g., OpenCode, Gemini) due to Anthropic’s subscription restrictions. **60+ reactions, 33 comments** signal strong demand for multi-provider flexibility.  
- **Analysis**: This reflects a core need for vendor neutrality in AI agent tools. If NanoClaw lacks built-in provider abstraction, users may face lock-in risks.  

### **Top PR: [PR #2624](https://github.com/qwibitai/nanoclaw/pull/2624)**  
- **Focus**: Refactoring MCP server configurations to allow disabling tools per server.  
- **Impact**: Critical for enterprises managing sensitive data (e.g., restricting `file_search` in certain environments).  

---

## **5. Bugs & Stability**  
| **Issue/PR** | **Severity** | **Fix Status** |  
|--------------|-------------|----------------|  
| **PR #2626** | Medium (silent `launchctl` failure) | *Fix submitted* |  
| **PR #2628** | Low (CLI ID override regression) | *Pending review* |  
| **PR #2627** | Medium (MCP reaction schema mismatch) | *Pending review* |  
- **No major crashes or regressions reported**. Stability seems intact.  

---

## **6. Feature Requests & Roadmap Signals**  
- **Multi-Provider Support** (#80): Likely a top priority if Anthropic’s policies tighten.  
- **MCP Tool Control** (#2624): Expected to land soon, given its utility for compliance.  
- **Teams File Uploads** (#2625): High urgency for Teams-integrated workflows.  
- **CLI Improvements** (#2628): Minor but impacts UX for automation scripts.  

---

## **7. User Feedback Summary**  
- **Pain Points**:  
  - Provider lock-in (Anthropic dependency) is a recurring concern.  
  - Silent failures (e.g., `launchctl`, reaction handling) frustrate debugging.  
  - Teams file upload limitation blocks collaboration use cases.  
- **Satisfaction**: Core functionality (scheduled tasks, MCP) works well; feedback focuses on extensibility and error transparency.  

---

## **8. Backlog Watch**  
- **High-Priority Open Issues**:  
  - None currently, but Issue #80’s low priority warrants reevaluation if Anthropic policies shift.  
- **Unmerged PRs Needing Review**:  
  - All open PRs (#2624–#2628) address critical bugs/features. Maintainers should prioritize #2625 (Teams) and #2627 (MCP reactions).  

---

### **Project Health Assessment**  
✅ **Stability**: Good (no critical blockers).  
⚠️ **Engagement**: Moderate (active but not frenetic).  
🚀 **Next Steps**: Address multi-provider support (#80) and MCP tool configurability (#2624) as roadmap priorities.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# **NullClaw Project Digest (2026-05-28)**

---

## **1. Today's Overview**  
NullClaw remains actively developed, with moderate activity in the last 24 hours: **3 issues updated** (2 open, 1 closed) and **4 PRs updated** (2 open, 2 merged). No new releases were published. Key focus areas include Windows networking fixes (`HostResolutionFailed` issue #890), provider compatibility (#936), and build system updates (#887). The project shows steady progress on bug fixes, though feature development appears slower.

---

## **2. Releases**  
*No new releases since May 28.*

---

## **3. Project Progress**  
### **Merged/Closed PRs**  
- **[PR #892](https://github.com/nullclaw/nullclaw/pull/892)** (Closed): Added Windows `getAddressList` regression tests to fix provider DNS resolution failures (related to #890). This resolved a critical Windows connectivity issue where literal-IP endpoints failed due to stubbed localhost resolver logic.  
- **[PR #891](https://github.com/nullclaw/nullclaw/pull/891)** (Closed): Preserved CURL transport errors (DNS, TLS, timeout) in OpenAI-compatible provider health checks, improving debugging accuracy.  

### **Open PRs Under Review**  
- **[PR #887](https://github.com/nullclaw/nullclaw/pull/887)**: Builds for Zig v0.16 on Windows/Linux—likely addressing toolchain compatibility.  
- **[PR #878](https://github.com/nullclaw/nullclaw/pull/878)**: Replaced cooperative thread sleep (`std.Io.sleep`) with POSIX `nanosleep` for true OS thread suspension, improving timing reliability.  

---

## **4. Community Hot Topics**  
### **Most Active Issues/PRs**  
- **[Issue #890](https://github.com/nullclaw/nullclaw/issues/890)**: *Windows `HostResolutionFailed`* (Closed)  
  - **Impact**: Critical blocker for Windows users using custom IP-based provider URLs. PR #892’s DNS fix addressed this, but root cause (stubbed `getAddressList`) highlights platform-specific quirks in networking code.  
  - **Community Reaction**: 👍 from one user; comments focused on workaround needs (e.g., forcing curl paths).  

- **[Issue #936](https://github.com/nullclaw/nullclaw/issues/936)**: *Custom provider fallback to hardcoded Claude models* (Open)  
  - **Underlying Need**: Users expect dynamic model discovery via `/v1/models` endpoint. Suggests a gap in config-driven provider flexibility.  

---

## **5. Bugs & Stability**  
### **Critical Fixes Today**  
- **Windows DNS Resolution (#890)**: Fixed via PR #892 (severity: **High**). Now handles literal-IP base URLs correctly.  
- **Transport Error Logging (#891)**: Merged PR preserves detailed CURL error states (severity: **Medium**), aiding debugging of provider connectivity.  

### **Outstanding Bugs**  
- **Unused Config Flag (#937)**: `compact_context` is parsed but ignored—low-severity technical debt.  
- **Zig Build Compatibility (#887)**: Unconfirmed impact; may require testing before merge.  

---

## **6. Feature Requests & Roadmap Signals**  
- **Dynamic Model Discovery (#936)**: High-priority request for OpenAI-compatible providers to auto-detect models instead of falling back to Anthropic. Likely next version candidate.  
- **Config Flags (#937)**: Small UX improvement—could be addressed in minor release.  
- **Platform-Specific Optimizations**: PR #878’s thread sleep fix hints at ongoing work on cross-platform performance tuning.  

---

## **7. User Feedback Summary**  
- **Pain Points**:  
  - Windows users faced **blocking DNS issues** (#890), now mitigated.  
  - Custom provider support lacks **flexibility** (#936), requiring manual model lists.  
- **Satisfaction**:  
  - Positive response to fixes (#892/#891) suggests strong need for robust networking.  
  - Low engagement on open PRs (#887, #878) may indicate smaller contributor pool.  

---

## **8. Backlog Watch**  
- **Priority Items Needing Attention**:  
  - **#936 (Custom Providers)**: Blocks broader adoption of non-OpenRouter integrations.  
  - **#937 (Unused Config)**: Low-hanging fruit for maintainers.  
  - **PR #887 (Zig 0.16)**: Risk of build breaks if not tested thoroughly.  

--- 

**Project Health**: **Stable, evolving**. Core networking bugs are being resolved, but feature requests (especially around provider flexibility) could accelerate adoption. Maintainers should prioritize #936 as a key roadmap signal.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# **IronClaw Project Digest – May 28, 2026**

---

## **1. Today's Overview**
IronClaw saw **28 active issues** (23 open, 5 closed) and **50 updated PRs** (21 open, 29 merged/closed), indicating high developer activity with ongoing feature development and bug fixes. No new releases were published this week, but multiple critical Reborn integration features (OAuth, credential recovery, and event streaming) advanced in PRs. The project remains focused on stabilizing authentication flows (`#4111`), improving agent capabilities (`#4147`), and addressing UX gaps for desktop clients (`#4153`, `#4152`). Nightly E2E testing failed recently (`#4108`), signaling a need to investigate flaky tests.

---

## **2. Releases**
*No new releases were published today.*

---

## **3. Project Progress**
### **Merged PRs:**
- **`#4111`** [codex] Add GSuite OAuth backend  
  - Added Google OAuth provider backend, typed credential dispatch states, and token refresh support. Critical for SSO integration ([link](https://github.com/nearai/ironclaw/pull/4111)).
- **`#4156`** fix(reborn): grant yolo coding tools ambient workspace paths  
  - Expanded local-dev tool mounts to include workspace root access while preserving security boundaries ([link](https://github.com/nearai/ironclaw/pull/4156)).
- **`#4154`** feat(shell) add saved output refs for Reborn shell  
  - Captures large shell outputs via temp files instead of memory buffering, improving resource safety ([link](https://github.com/nearai/ironclaw/pull/4154)).

### **Closed Issues:**
- **`#3883`** [Reborn] Step 6: Add credential recovery projections  
  - Completed auth recovery and account-selection state management ([link](https://github.com/nearai/ironclaw/issues/3883)).
- **`#3889`** [reborn] Add approval interaction routing  
  - Separated approval-specific auth flows from general interaction logic ([link](https://github.com/nearai/ironclaw/issues/3889)).

---

## **4. Community Hot Topics**
### **Top Active Issues:**
1. **`#4116`** [enhancement, risk: high] Carry v1 Google/GitHub/NEAR SSO into WebChat v2  
   - High-severity issue integrating legacy SSO into Reborn WebChat. Likely next priority after OAuth backend completion ([link](https://github.com/nearai/ironclaw/issues/4116)).
2. **`#4153`** [gateway] GET /api/routines/recent-runs — endpoint not implemented  
   - Blocks desktop client UX; requires API endpoint for routine history tracking ([link](https://github.com/nearai/ironclaw/issues/4153)).
3. **`#3436`** DeepSeek API returns 400: reasoning_content must be passed back in thinking mode  
   - Provider-specific error needing backend validation tweaks ([link](https://github.com/nearai/ironclaw/issues/3436)).

---

## **5. Bugs & Stability**
### **Critical Issues:**
- **`#4108`** Nightly E2E failed  
  - Full E2E test suite failure (v2-engine) requires investigation ([link](https://github.com/nearai/ironclaw/issues/4108)).
- **`#4106`** bug(setup): wizard’s sandbox image bypasses env precedence  
  - Sandbox setup ignores `SANDBOX_IMAGE` env variable due to hardcoded defaults ([link](https://github.com/nearai/ironclaw/issues/4106)).  
  *Fix PR:* `#4159` (merged) removed line caps, though env handling remains unresolved.

---

## **6. Feature Requests & Roadmap Signals**
### **Upcoming Features:**
- **`#4120`** Declarative Reborn capability policy  
  - TOML-based policy for local-dev grants (PR `#4127` merged) aligns with Config-as-Code efforts ([link](https://github.com/nearai/ironclaw/issues/4120)).
- **`#4149`** Inject ambient runtime context  
  - Proposal to inject platform/date/git context into prompt bundles (open) ([link](https://github.com/nearai/ironclaw/issues/4149)).
- **`#4118`** Reborn CLI provider parity  
  - Track CLI model/provider management post-LLM config wiring ([link](https://github.com/nearai/ironclaw/issues/4118)).

---

## **7. User Feedback Summary**
### **Pain Points:**
- **Authentication Flows:** Users want SSO integration (#4116) and conversation deletion (#1907), but OAuth backend (#4111) is progressing.
- **Desktop Client Gaps:** Missing endpoints for routines (`#4153`), signout (`#4152`), and memory deletion (`#4151`) frustrate desktop app developers.
- **Provider Errors:** DeepSeek 400 errors (#3436) highlight LLM provider compatibility needs.

---

## **8. Backlog Watch**
### **High-Priority Open Items:**
- **`#4147`** Design durable background subagent completion  
  - Resolves silent child-agent completion failures (#4084). PR `#4089` merged but design still open ([link](https://github.com/nearai/ironclaw/issues/4147)).
- **`#4113`** Reborn GSuite token refresh & health  
  - Follow-up to OAuth backend (#4111) requiring implementation ([link](https://github.com/nearai/ironclaw/issues/4113)).
- **`#4125`** Auth interaction gate-resolution cleanup  
  - Maintainability improvement for approval/auth flow logic ([link](https://github.com/nearai/ironclaw/issues/4125)).

---

### **Health Summary**
IronClaw is actively advancing core Reborn integrations (auth, agents, providers) while addressing UX gaps for desktop clients. E2E stability and sandbox env bugs require immediate attention. Community feedback emphasizes SSO, provider compatibility, and tooling extensibility as top priorities.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# **LobsterAI Project Digest – May 28, 2026**

---

## **1. Today's Overview**  
LobsterAI saw moderate development activity today with **23 PRs updated (18 open, 5 merged/closed)** and **2 active issues**. A new release (**2026.5.27**) was published, introducing media generation support and cowork features like click-to-preview for attachments. The project is actively addressing user-reported bugs and expanding core capabilities, particularly around media, skills, and task management.

---

## **2. Releases**  
### **v2026.5.27**  
#### **Key Changes:**  
- **Media Generation Support**: Integrated Kling V3/DouYin video generation with quota-based entitlements ([PR #2064](https://github.com/netease-youdao/LobsterAI/pull/2064)).  
- **Cowork UI Improvements**: Added click-to-preview for image attachments in input prompts ([PR #2061](https://github.com/netease-youdao/LobsterAI/pull/2061)).  
- **OpenClaw Stability**: Bidirectional sync fixes for plugins/skills.  
*No breaking changes; backward-compatible.*  

---

## **3. Project Progress**  
**Merged/Closed PRs Today:**  
- **#2061**: Enabled full-size image previews in cowork chat (user-requested UX improvement).  
- **#2064**: Release v2026.5.25 (media generation + OpenClaw fixes).  

**Active PRs (Open):**  
- **#2060**: "Kit（专家套件）" integration—bundling skills into installable packages with store/dialog integration ([details](https://github.com/netease-youdao/LobsterAI/pull/2060)).  
- **#1505**: Bugfix: Agent skill list not updating in current session until agent switch resolved ([link](https://github.com/netease-youdao/LobsterAI/pull/1505)).  

---

## **4. Community Hot Topics**  
**Top Issue (#1903): [会员登录频繁失败](https://github.com/netease-youdao/LobsterAI/issues/1903)**  
- **Context**: Users cannot log into premium models (e.g., paid AI features).  
- **Severity**: High (blocks core functionality). No fix PR yet.  

**Top PR (#2060): Kit（专家套件）商店与对话集成**  
- **Demand**: Users want modular skill bundles (like "one-click installs") to streamline workflows.  
- **Progress**: UI draft completed; pending testing.  

---

## **5. Bugs & Stability**  
**Critical:**  
- **Task Timeout (#2062)**: Long-running tasks (>24h) fail unexpectedly ([issue](https://github.com/netease-youdao/LobsterAI/issues/2062)). *No fix PR yet.*  
- **Skill Persistence Issues**: Disabling skills doesn’t remove them from `activeSkillIds` ([PR #1501](https://github.com/netease-youdao/LobsterAI/pull/1501) proposes fix).  

---

## **6. Feature Requests & Roadmap Signals**  
- **Next Version Likelihoods:**  
  - **Media Generation**: Already shipped (v2026.5.27), but quota system may need tuning.  
  - **Expert Kits (#2060)**: High priority for enterprise users.  
  - **Session Pruning (#1499)**: Auto-cull long conversations to avoid model context limits.  

---

## **7. User Feedback Summary**  
- **Pain Points:**  
  - Login failures (#1903) severely impact paid features.  
  - Task timeouts (#2062) hinder automation use cases.  
- **Positive UX Wins:** Click-to-image preview (#2061) reduces friction in cowork chat.  
- **Satisfaction**: Media generation and Kits are highly anticipated.  

---

## **8. Backlog Watch**  
**Needs Maintainer Attention:**  
- **#1903 (Login Failures)**: Urgent—requires auth backend review.  
- **#2062 (Task Timeouts)**: Needs investigation into task lifecycle management.  
- **Stale PRs (#1485, #1494)**: Skill state isolation improvements (e.g., per-session skills) could prevent future bugs.  

---

**GitHub Activity Snapshot:**  
- 📦 **Releases**: 1 (v2026.5.27)  
- 🐛 **Issues**: 2 open (#1903, #2062)  
- 💡 **PRs**: 23 total (+18 open)  

*Project Health*: **Stable but critical path items remain unaddressed.** Media generation and Kits show strong momentum.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# **Moltis Project Digest – May 28, 2026**  

## **1. Today's Overview**  
Moltis saw moderate activity in the last 24 hours with **3 updated issues (all open)** and **2 merged PRs**. No new releases were published. The project remains focused on improving multi-agent orchestration (e.g., Claude Code CLI integration) while addressing provider compatibility (Novita AI). Community engagement is steady, with a partnership inquiry from MyClaw.ai signaling interest in collaboration.  

## **2. Releases**  
*No new releases this week.*  

## **3. Project Progress**  
- **PR #1074 [Closed]**: Added configurable embedding dimensions for OpenAI-compatible providers, enabling safe reindexing when dimensions change ([details](https://github.com/moltis-org/moltis/pull/1074)).  
- **PR #451 [Closed]**: Integrated Novita AI as an OpenAI-compatible LLM provider, supporting models like Kimi K2.5 and DeepSeek V3.2 ([details](https://github.com/moltis-org/moltis/pull/451)).  

## **4. Community Hot Topics**  
### **Most Active Issue: #235 – PTY-based Interactive Claude Code CLI Control**  
- **Status**: Open since Feb 2026, 4 comments, 1 👍  
- **Summary**: Users report that spawning Claude Code as a subprocess (`stdio: pipe`) forces non-interactive mode, breaking autonomous agent workflows. This is a critical blocker for multi-agent orchestration ([issue](https://github.com/moltis-org/moltis/issues/235)).  
- **Underlying Need**: Developers need reliable terminal emulation to enable interactive LLM control within agent frameworks.  

### **Partnership Inquiry (#1076)**  
A representative from MyClaw.ai (OpenClaw hosting) expressed interest in partnering with Moltis, citing its technical merits ([issue](https://github.com/moltis-org/moltis/issues/1076)).  

## **5. Bugs & Stability**  
- **Critical Bug (#1077)**: A runtime error occurs when user names are inconsistent (e.g., "2013" mismatch). Reported by a user on May 27, with no prior reports. No fix PR yet ([issue](https://github.com/moltis-org/moltis/issues/1077)).  
- **Severity**: Medium (affects authentication/config validation but no widespread crashes reported).  

## **6. Feature Requests & Roadmap Signals**  
- **Claude Code PTY Integration (#235)**: High priority for next release; likely requires low-level terminal emulation work.  
- **Provider Expansion**: Novita AI support (#451) suggests ongoing focus on OpenAI-compatible LLM diversity.  
- **Configurable Embeddings (#1074)**: Reflects demand for flexibility in vector DB setups.  

## **7. User Feedback Summary**  
- **Pain Points**:  
  - Non-interactive Claude Code usage cripples agent workflows (#235).  
  - Inconsistent naming errors (#1077) hint at potential config validation gaps.  
- **Positive Signals**: Partnership interest (#1076) indicates growing ecosystem traction.  

## **8. Backlog Watch**  
- **#235 (Claude Code CLI)**: Long-standing issue; needs maintainer attention due to high impact.  
- **#1077 (Bug)**: Freshly reported; may require immediate investigation if reproducible.  
- **#1076 (Partnership)**: Low urgency but valuable for community growth.  

---  
**Project Health**: Stable, with active development on integrations and core features. Key bottlenecks (CLI interaction, config bugs) warrant prioritization.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# **CoPaw Project Digest – May 28, 2026**

---

## **1. Today's Overview**
CoPaw saw a **highly active day** with **40 updated issues** (24 open, 16 closed) and **26 new/updated PRs** (11 open, 15 merged), alongside **two new releases**. The project is experiencing steady development momentum, particularly in desktop app integration, coding mode enhancements, and provider expansion. Community engagement remains strong, with key discussions around stability, usability, and feature requests.

- [Issues Dashboard](https://github.com/agentscope-ai/QwenPaw/issues)
- [PRs Dashboard](https://github.com/agentscope-ai/QwenPaw/pulls)

---

## **2. Releases**
### **v1.1.9 (Official Release)**
#### ✨ **Key Features & Fixes**
- **Desktop App**: Tauri-based native macOS/Windows desktop app ([#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)).
- **Coding Mode**: Web IDE with three-panel layout (file tree, tabbed editor, inline diff) and per-hunk `Keep`/`Undo` actions ([#4716](https://github.com/agentscope-ai/QwenPaw/pull/4716)).
- **Provider Expansion**: Xiaomi MiMo Token Plan added as built-in provider ([#4722](https://github.com/agentscope-ai/QwenPaw/pull/4722)).

#### 🐛 **Critical Fixes**
- Windows subprocess flags adjusted to avoid false-positive virus alerts ([#4723](https://github.com/agentscope-ai/QwenPaw/pull/4723)).
- Git console windows hidden in Coding Mode for cleaner UX ([#4696](https://github.com/agentscope-ai/QwenPaw/pull/4696)).

[Release Notes: v1.1.9](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.9)

---

## **3. Project Progress**
### **Merged PRs Today**
| PR # | Summary | Status |
|------|---------|--------|
| [#4720](https://github.com/agentscope-ai/QwenPaw/pull/4720) | Added message timestamps in chat UI (fixes [#4662](https://github.com/agentscope-ai/QwenPaw/issues/4662)) | ✅ Merged |
| [#4719](https://gitlab.com/agentscope/qwenpaw/-/merge_requests/4719) | Integrated GitLab skill support | ✅ Merged |
| [#4725](https://github.com/agentscope-ai/QwenPaw/pull/4725) | Fixed download button UI feedback (fixes [#4670](https://github.com/agentscope-ai/QwenPaw/issues/4670)) | ✅ Merged |
| [#4701](https://github.com/agentscope-ai/QwenPaw/pull/4701) | "Approve All" button for multi-step tool approvals | ✅ Merged |

### **Notable Activity**
- **Coding Mode**: Per-hunk diff controls (`Keep`/`Undo`) and smart copy-to-chat improved ([#4716](https://github.com/agentscope-ai/QwenPaw/pull/4716)).
- **Security**: Windows subprocess tweaks reduced Defender false positives ([#4724](https://github.com/agentscope-ai/QwenPaw/pull/4724)).

---

## **4. Community Hot Topics**
### **Top Issue by Engagement**
**#2291: Open Tasks Help Wanted**  
- **Comments**: 63 (most active issue).  
- **Summary**: Maintainer [@cuiyuebing](https://github.com/cuiyuebing) invites contributors to claim "Not Started" tasks (priority P0–P2).  
- **Underlying Need**: Community-driven task management; signals desire for decentralized contribution.

### **Other High-Comment Issues**
- **#4680**: Skill name update breaks agent persistence (7 comments) → Desktop session state bug.
- **#4625**: MiniMax-M2.5 XML format in thinking blocks (5 comments) → Provider compatibility fix pending.

[Top Issues](https://github.com/agentscope-ai/QwenPaw/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%3Ascore)

---

## **5. Bugs & Stability**
### **Critical Bugs Reported**
| Issue | Severity | Fix PR? |
|-------|----------|---------|
| **#4712** | High | CLI command failures (e.g., Feishu) in v1.1.9-beta.1 | Under review |
| **#4704** | Critical | macOS crash after upgrade to Tahoe 26.5 | Needs investigation |
| **#4714** | Medium | Task queue blocking during concurrent inference | PR in progress |

### **Stability Wins**
- **Git Console Windows**: Hidden in Coding Mode ([#4696](https://github.com/agentscope-ai/QwenPaw/pull/4696)).
- **Subprocess Flags**: Adjusted for Windows security ([#4724](https://github.com/agentscope-ai/QwenPaw/pull/4724)).

---

## **6. Feature Requests & Roadmap Signals**
### **User-Suggested Features**
- **RBAC/Multi-User Management** (#4702): Enterprise admins want role-based access control.
- **File Upload Size Limits** (#4729): Customizable max file size settings.
- **Memory System Enhancements** (#4652): "Summarize-Learn-Remind" improvements.

### **Likely Next Version**
- **Provider Expansion**: Xiaomi MiMo Token Plan already merged (v1.1.9).
- **UI/UX**: Timestamping in chat, download feedback, and session persistence.

---

## **7. User Feedback Summary**
### **Pain Points**
- **Session State**: Users frustrated by lost sessions on restart (#4733, #4713).
- **Performance**: Console freezing (#3468) and delayed downloads (#4670) cited.
- **CLI Limitations**: Local command execution blocked in beta (#4712).

### **Satisfaction**
- **Desktop App**: Positive reception for Tauri integration (#3813).
- **Coding Mode**: Praised for diff editing (#4716).

---

## **8. Backlog Watch**
### **High-Priority Unaddressed Items**
- **#4408**: Centralized `.qwenpaw` workdir proposal (5 comments).
- **#4705**: Mission Phase 2 stuck on user input (3 comments).
- **#4731**: Browser startup crashes (Edge/Firefox) → Needs root cause analysis.

### **Action Required**
- **Memory System**: #4652’s "learn-from-history" needs implementation.
- **Cron Jobs**: Orphaned job cleanup (#4649) still unresolved.

---

**Project Health**: **Green**. Strong release cadence (+2 versions this month), active community engagement, and rapid bug response. Focus areas: session state, RBAC, and enterprise features.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – May 28, 2026**  

---

## **1. Today's Overview**  
ZeroClaw saw significant activity over the past 24 hours: **30 Issues updated (20 open, 10 closed)** and **50 PRs updated (39 open, 11 merged)**. The project is actively addressing critical bugs, security hardening, and architectural RFCs (e.g., plugin system unification). Notably, **DeepSeek-V4 API compatibility** (#6059) and **runtime credential isolation** (#6971) are high-priority items under review. No new releases were published today.

---

## **2. Releases**  
*No new releases this update.*  

---

## **3. Project Progress**  
- **Merged/Closed PRs**:  
  - **#6980**: Fixed DeepSeek-V4 `reasoning_content` preservation in native tool requests ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/6980)).  
  - **#6920**: Enforced `allowed_tools`/`denied_tools` at execution time for MCP tools ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/6920)).  
  - **#6960**: Applied `SecurityPolicy` filters to eager built-in tools in `process_message()` ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/6960)).  
- **Key Advances**:  
  - **RFCs**: Unified output routing model (#6954), security UX defaults (#6971), and plugin system deconfliction (#6943) under review.  
  - **Observability**: OTel GenAI spans now include LLM prompt/completion content (#6966).  

---

## **4. Community Hot Topics**  
- **Most Active Issue**: **DeepSeek-V4 API incompatibility (#6059)** (14 comments, 👍4): Users report errors with both Pro and Flash variants due to thinking-mode handling. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6059).  
- **High-Impact RFC**: **Work Lanes & Board Automation (#6808)** (7 comments): Proposed to streamline PR/issue routing without manual maintenance. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6808).  
- **User-Critical Bug**: **Matrix Channel Session Amnesia (#6958)**: Each Matrix message creates a new session, breaking context continuity. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6958).  

---

## **5. Bugs & Stability**  
- **Critical (S0/S1)**:  
  - **WebSocket chat failure (#6976)**: Missing `?agent=` parameter causes Web UI connection drops ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6976)). *Fix PR pending.*  
  - **Windows build MANIFEST error (#6964)**: Tauri CI fails due to duplicate resource embedding ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6964)).  
  - **Canvas page deadlock (#6965)**: Web UI agent never receives canvas frames ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6965)).  
- **Degraded Behavior (S2)**:  
  - **Cron scheduler best-effort delivery (#6632)**: Manual `cron_run` persists failures as "OK" instead of "degraded" ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6632)).  

---

## **6. Feature Requests & Roadmap Signals**  
- **Next Version Candidates**:  
  - **Plugin Catalog Unification (#6489)**: Merging integrations/plugins into a unified system ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)).  
  - **Skill-Scoped Tool Activation (#6915)**: Temporary elevation of composio/builtin tools during skill execution ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6915)).  
  - **File Download Tool (#6957)**: Fetch remote files into workspace via `file_download` ([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6957)).  

---

## **7. User Feedback Summary**  
- **Pain Points**:  
  - **Provider Compatibility**: DeepSeek-V4 API errors (#6059) hinder adoption; users expect seamless multi-provider support.  
  - **Runtime Security**: Requests for credential boundaries (#6971) and secret redaction (#6978) highlight growing security concerns.  
  - **UX Friction**: Matrix channel amnesia (#6958) and Web UI WebSocket issues (#6976) degrade user experience.  
- **Positive Signals**:  
  - **Community Engagement**: RFCs like #6808 (work lanes) show demand for structured workflows.  
  - **Tooling Demand**: File download (#6957) and HTTP allowlists (#6981) reflect need for flexible tool access.  

---

## **8. Backlog Watch**  
- **Maintainer Attention Needed**:  
  - **RFC: Plugin System Deconfliction (#6943)**: Extism vs. WASMtime trade-offs require immediate decision ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6943)).  
  - **TUI UX Tracker (#6825)**: Cross-cutting terminal polish (themes, keybindings) needs prioritization ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6825)).  
  - **Audit of Lost Commits (#6074)**: Bulk revert recovery of 153 commits requires tracking ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)).  

--- 

**Health Status**: High momentum with active bug triage and RFCs, but critical path items (DeepSeek, Windows builds) need resolution. Security and observability gains signal maturing architecture.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*