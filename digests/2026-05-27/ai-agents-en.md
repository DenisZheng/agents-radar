# OpenClaw Ecosystem Digest 2026-05-27

> Issues: 383 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-27 00:37 UTC

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

# **OpenClaw Project Digest – May 27, 2026**

---

## **1. Today's Overview**
OpenClaw remains highly active with **383 updated issues** (182 open, 201 closed) and **500 PRs** (293 open, 207 merged/closed) in the last 24 hours. Two new beta releases were published (`v2026.5.26-beta.1` and `v2026.5.25-beta.1`), focusing on performance optimizations (e.g., faster replies, startup improvements) and iMessage attachment fixes. The project is experiencing steady momentum with a mix of feature development, bug triage, and community engagement.

---

## **2. Releases**
### **v2026.5.26-beta.1**
- **Highlights:**
  - Faster replies and startup: Separates user-facing sends from slower follow-up work, reuses metadata on hot paths, and optimizes Gateway startup scans.
  - iMessage attachment fix: Threads inbound saved attachments under `~/Library/Messages/Attachments` into the image tool policy.
- **Migration Notes:** None; backward-compatible.

### **v2026.5.25-beta.1**
- **Beta 1 late fixes:** Resolved issues with iMessage attachment handling.

---

## **3. Project Progress**
- **Merged PRs Today:**  
  - **#87084**: Fixed plugin SDK diagnostic event export aliasing (gateway stop/restart).  
  - **#86956**: Centralized user-turn transcript persistence for Gateway, CLI, Pi, and Codex app-server.  
  - **#86433**: Restores Anthropic system prompt passing for claude-cli backend.  
  - **#87087**: Fixes duplicate skills prompt in Claude CLI runs.  

- **Closed PRs Today:**  
  - **#86261**: Syncs plugin skills to sandbox workspace.  
  - **#86924**: Scrubbed Discord tool-call text from replies.  

**Focus Areas:** Performance (transcription, Codex native threads), stability (Anthropic/Claude CLI), and UX (skills catalog).

---

## **4. Community Hot Topics**
| Issue/PR | Comments/Reactions | Key Concern |
|----------|-------------------|-------------|
| **[Issue #75](https://github.com/openclaw/openclaw/issues/75)** | 109👍 | Linux/Windows client apps missing; macOS/iOS/Android have full feature sets. |
| **[PR #86956](https://github.com/openclaw/openclaw/pull/86956)** | 0👍 | Unified transcript persistence across runtimes (Gateway, CLI, Codex). |
| **[Issue #85030](https://github.com/openclaw/openclaw/issues/85030)** | 5👍 | MCP tools not injected into subagents via `sessions_spawn`. |

**Underlying Needs:** Cross-platform support (#75), tooling interoperability (#85030), and runtime consistency (#86956) are high-priority themes.

---

## **5. Bugs & Stability**
**Critical Issues (Today):**
1. **[Issue #86948](https://github.com/openclaw/openclaw/issues/86948)** (Beta blocker)  
   - **Symptom:** Codex app-server turns silently drop after 1–4 successful interactions.  
   - **Fix PR:** **#87079** (arm idle watch for stalled binary).  
   - **Severity:** High (blocks Beta release).

2. **[Issue #86599](https://github.com/openclaw/openclaw/issues/86599)**  
   - **Symptom:** Local model provider blocks Windows Gateway event loop (~4-min infer run).  
   - **Severity:** Medium (performance regression).

3. **[Issue #86508](https://github.com/openclaw/openclaw/issues/86508)**  
   - **Symptom:** Discord fails with `EmbeddedAttemptSessionTakeoverError`.  
   - **Severity:** Medium (session state corruption).

---

## **6. Feature Requests & Roadmap Signals**
- **Top Requests:**  
  - **Subagent lifecycle observability** (#38626): Need deterministic visibility/control for async workflows.  
  - **Voice message Matrix support** (#78016): Users report voice messages are ignored.  
  - **Configurable streaming watchdog timeout** (#68596): Long-thinking models trigger false warnings.  
- **Prediction:** Next version may focus on **subagent supervision** (#38626) and **streaming timeout tuning** (#68596).

---

## **7. User Feedback Summary**
**Pain Points:**  
- **iMessage attachments** (#78016): Voice messages fail on Matrix/Element.  
- **Discord session recovery** (#86508): Silent failures after AI turn timeout.  
- **Cron job rate limits** (#86861): Tasks fail post-5.20+ due to cooldown timeout.  
- **Satisfaction:** Beta users praise startup speed (#2026.5.26), but stability concerns persist (e.g., #86948).

---

## **8. Backlog Watch**
- **Unanswered Critical Issues:**  
  - **[Issue #75](https://github.com/openclaw/openclaw/issues/75)**: Linux/Windows client apps missing (109 comments, 77👍). Requires maintainer attention for cross-platform roadmap alignment.  
  - **[Issue #86354](https://github.com/openclaw/openclaw/issues/86354)**: Codex native code mode disabled on Node.js-hosted gateways. Needs resolution for cron jobs losing exec tools.  
- **Stuck PRs:** **#87085** (chat timeout fallback cascade) and **#87084** (diagnostic events) await maintainer review.

---

**Health Summary:** OpenClaw is actively addressing performance, stability, and cross-platform gaps while engaging deeply with the community. Beta progress is strong, but critical bugs (e.g., Codex drops) block release readiness.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Assistant & Agent Ecosystem (2026-05-27)**

---

## **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem is rapidly evolving, with projects like **OpenClaw**, **NanoClaw**, **Hermes Agent**, and **IronClaw** leading in feature breadth and community engagement. Key themes include **real-time collaboration tools**, **multi-provider LLM integrations**, and **cross-platform stability**. Projects are addressing gaps in **streaming responses**, **subagent orchestration**, and **sandboxed execution**—critical for enterprise adoption.

---

## **2. Activity Comparison**  
| Project          | Issues (Last 24h) | PRs (Last 24h) | Releases | Health Score (1-5) |  
|------------------|--------------------|------------------|-----------|---------------------|  
| **OpenClaw**     | 383               | 500             | 2 Beta    | ⭐⭐⭐⭐☆ (4/5)      |  
| **NanoBot**      | 5                 | 18              | None      | ⭐⭐⭐☆☆ (3/5)       |  
| **Hermes Agent** | 50                | 50              | None      | ⭐⭐⭐⭐ (4/5)        |  
| **IronClaw**     | 11                | 36              | v0.29.0   | ⭐⭐⭐⭐ (4/5)        |  
| **LobsterAI**    | 15                | 15              | None      | ⭐⭐⭐⭐ (4/5)        |  
| **CoPaw**        | 27                | 27              | None      | ⭐⭐⭐⭐☆ (4.5/5)     |  
| **ZeroClaw**     | 7                 | 36              | None      | ⭐⭐⭐⭐ (4/5)        |  

**Key Metrics**:  
- **High Activity**: OpenClaw, ZeroClaw, IronClaw lead in PR/Issue volume.  
- **Low Maintenance**: NanoClaw, NullClaw focus on dependency fixes.  
- **Balanced Growth**: CoPaw, LobsterAI show steady iteration without major releases.  

---

## **3. OpenClaw's Position**  
**Advantages Over Peers**:  
- **Technical Breadth**: OpenClaw leads with **beta releases**, **cross-platform support**, and **real-time collaboration tools** (e.g., `Gateway`, `Codex threads`).  
- **Community Size**: Highest engagement (383 issues + 500 PRs vs. peers averaging <30).  
- **Differentiators**:  
  - **iMessage attachment policy enforcement** and **subagent lifecycle observability** (#38626).  
  - **Performance optimizations** (startup replies, Gateway scans).  

**Technical Approach**:  
- **Hybrid Architecture**: Combines CLI, GUI, and Codex-native threads with **strict plugin SDK diagnostics**.  
- **Target Users**: Developers needing **enterprise-grade agent frameworks** with macOS/iOS dominance.  

---

## **4. Shared Technical Focus Areas**  
| Requirement                     | Projects Addressing It                  |  
|---------------------------------|----------------------------------------|  
| **Streaming Responses**         | OpenClaw, Hermes Agent, CoPaw, ZeroClaw |  
| **Subagent Orchestration**      | OpenClaw, IronClaw, NanoBot            |  
| **Sandboxed Execution**         | IronClaw, Hermes Agent, ZeroClaw (MCP) |  
| **Multi-Provider LLM Support**  | NanoBot, Hermes Agent, LobsterAI        |  
| **Tool History/API Compliance**  | NanoBot, Hermes Agent, CoPaw           |  

**Emerging Needs**:  
- **Real-Time Collaboration**: OpenClaw’s `Gateway`/`Codex threads` vs. Hermes’ A2A protocol.  
- **Security**: IronClaw’s `TenantSandboxProcessPort` and Hermes’ `approval.py` fixes.  
- **Stability**: ZeroClaw’s DeepSeek/V4 API fixes vs. OpenClaw’s iMessage attachment handling.  

---

## **5. Differentiation Analysis**  
| Project          | Feature Focus                          | Target Users                  | Technical Architecture          |  
|------------------|---------------------------------------|-------------------------------|--------------------------------|  
| **OpenClaw**     | Real-time collaboration, subagents     | Enterprise developers/macOS/iOS | Hybrid (CLI/GUI/Codex-native) |  
| **Hermes Agent** | Multi-platform, strict OpenAI APIs     | ChatGPT/Codex providers       | Plugin-based (Telegram/QQBot)   |  
| **IronClaw**     | Sandboxed extensions, GSuite/WCom      | Enterprises, multi-tenant      | Reborn lifecycle + MCP         |  
| **ZeroClaw**     | Computer-use, DeepSeek/V4 compatibility | Power users, automation       | Rust-based, TUI/keybindings    |  
| **NanoBot**      | Dream system, sandbox security         | Security-focused devs         | Modular (MCP/Anthropic)       |  

**Key Contrasts**:  
- **OpenClaw vs. Hermes**: OpenClaw prioritizes **macOS/iOS integration**; Hermeks focuses on **strict OpenAI provider compliance**.  
- **IronClaw vs. ZeroClaw**: IronClaw targets **enterprise extensions** (GSuite/WCom); ZeroClaw enables **GUI automation** (computer-use).  
- **CoPaw vs. LobsterAI**: CoPaw emphasizes **real-time debugging**; LobsterAI integrates **OpenClaw skills**.  

---

## **6. Community Momentum & Maturity**  
- **Rapid Iteration**: OpenClaw, ZeroClaw, Hermes Agent lead in PR/Issue volume.  
- **Stabilizing**: IronClaw, LobsterAI, NanoClaw focus on maintenance (dependency/security).  
- **Growing**: CoPaw shows high activity but lacks desktop stability (macOS crashes).  

**Maturity Tier**:  
| Tier          | Projects                              |  
|---------------|---------------------------------------|  
| **Leading**   | OpenClaw, Hermes Agent, ZeroClaw      |  
| **Mid-Tier**  | IronClaw, CoPaw, LobsterAI           |  
| **Maintenance**| NanoClaw, NullClaw, NanoBot         |  

---

## **7. Trend Signals & Value Proposition**  
**Industry Trends**:  
1. **Streaming Responses**: OpenClaw/Hermes/CoPaw prioritize **low-latency LLM interactions**, critical for real-world workflows.  
2. **Subagent Control**: OpenClaw/IronClaw address **deterministic async task supervision**, appealing to enterprises.  
3. **Provider Agnosticism**: Hermes/NanoBot enforce **OpenAI/Codex standards**, reducing integration friction.  
4. **GUI Automation**: ZeroClaw’s computer-use aligns with **automation-as-a-service** demand (e.g., screen interaction).  

**Value for Developers**:  
- **OpenClaw**: Best for **collaborative agents** (e.g., team chatbots).  
- **Hermes**: Ideal for **strict LLM provider compliance** (ChatGPT/Codex).  
- **IronClaw**: Targets **secure multi-tenant deployments** (e.g., internal Slack bots).  
- **ZeroClaw**: Powers **automation-heavy use cases** (e.g., GUI workflows).  

---

### **Strategic Takeaways**  
- **OpenClaw** dominates **collaboration/agent frameworks**; **Hermes** leads **provider standardization**.  
- **Enterprise Adoption**: IronClaw/ZeroClaw bridge **security** and **automation** niches.  
- **Community Health**: OpenClaw’s engagement (383 issues) signals strong developer interest, while NanoBot/NullClaw need outreach.  
- **Future Roadmap**: Expect **subagent observability** (#38626) and **streaming timeout tuning** (#68596) as cross-project priorities.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# **NanoBot Project Digest (2026-05-27)**  

---

## **1. Today's Overview**  
NanoBot shows **high activity** with **5 new Issues**, **18 PRs (12 open, 6 merged/closed)**, and no new releases. The project is actively addressing **MCP reconnection bugs, Dream system enhancements, and tool history fixes**. Recent PRs focus on **collaboration between agents, sandbox security, and orphaned tool result cleanup**. Community engagement remains strong, with multiple feature requests and bug reports signaling evolving use cases.

---

## **2. Releases**  
*No new releases were published in the last 24 hours.*  

---

## **3. Project Progress**  
### **Merged/Closed PRs Today:**  
- **[PR #3944](https://github.com/HKUDS/nanobot/pull/3944)**: Fixed WebUI chat retention during session refreshes (regression fix).  
- **[PR #4009](https://github.com/HKUDS/nanobot/pull/4009)**: Improved Codex provider error handling (user-facing clarity).  
- **[PR #3981](https://github.com/HKUDS/nanobot/pull/3981)**: Added ESLint linting for WebUI code (maintainability).  
- **[PR #3996](https://github.com/HKUDS/nanobot/pull/3996)**: Enabled Telegram webhook mode (multi-channel support).  

### **Key Active Developments:**  
- **[PR #4011](https://github.com/HKUDS/nanobot/pull/4011)**: Drops orphaned tool results from history (fixes API compliance issues).  
- **[PR #4007](https://github.com/HKUDS/nanobot/pull/4007)**: Exposed workspace sandbox capabilities (security hardening).  
- **[PR #3990](https://github.com/HKUDS/nanobot/pull/3990)**: Consolidated Dream system into a single-phase AgentLoop-driven workflow (performance/memory optimization).  

---

## **4. Community Hot Topics**  
### **Top-Commented Issue:**  
- **[Issue #3469 (Closed)](https://github.com/HKUDS/nanobot/issues/3469)**: DeepSeek-V4 API error (`reasoning_content` validation). *2 comments*, likely resolved via prior fixes.  

### **Highly Active PR:**  
- **[PR #4012](https://github.com/HKUDS/nanobot/pull/4012)**: MCP reconnection logic (critical for reliability).  
- **[PR #4014](https://github.com/HKUDS/nanobot/pull/4014)**: MCP `ToolListChangedNotification` support (dynamic tool reloading).  

**Underlying Needs:** Users demand **better API resilience** (DeepSeek/Codex errors), **real-time collaboration** (#3992), and **tool lifecycle management** (#4006).  

---

## **5. Bugs & Stability**  
| Severity | Bug | Status | Fix PR? |  
|----------|-----|--------|---------|  
| **Critical** | Stream stalled >90s (#4013) | Open | *Pending* |  
| **High** | Orphaned tool results (#4006) | Open | **PR #4011** merged |  
| **Medium** | DeepSeek-V4 API error (#3469) | Closed | Likely resolved |  

**Regression Alert:** Newer versions (e.g., 0.2.0) introduced stream stalls (#4013), requiring urgent attention.  

---

## **6. Feature Requests & Roadmap Signals**  
### **Likely Next Version Priorities:**  
- **Voice Output Support** (#4010): Closing conversational loop with TTS.  
- **Agent Collaboration Bus** (#3992): Cross-instance messaging.  
- **Dream System Overhaul** (#3973 + #3990): Real-time learning + goal-state tracking.  
- **Slash Commands** (#3968): `/skill` command for skill discovery.  

**Tech Debt:** Sandbox enforcement (#4007) and ESLint integration (#3981) suggest **security/code quality** focus.  

---

## **7. User Feedback Summary**  
- **Pain Points:**  
  - API inconsistencies (DeepSeek/Codex errors).  
  - Tool call mismatches breaking strict APIs (#4006).  
  - WebUI instability during refreshes (#3944).  
- **Positive Notes:**  
  - Praise for 0.1.5-post2’s performance (#4013).  
  - Appreciation for modular features (MCP, Telegram webhooks).  

**Sentiment:** Mixed—users value flexibility but need stability fixes.  

---

## **8. Backlog Watch**  
**Unanswered Critical Items Needing Attention:**  
- **[#4013](https://github.com/HKUDS/nanobot/issues/4013)**: Stream stalls (blocks usability).  
- **[#3973](https://github.com/HKUDS/nanobot/issues/3973)**: Dream hunger problem (limits self-improvement).  
- **[PR #1443](https://github.com/HKUDS/nanobot/pull/1443)**: Heartbeat reasoning decoupling (legacy behavior).  

**Action Required:** Prioritize #4013 and #3973 to align with real-time collaboration goals.  

--- 

**Health Check:** NanoBot is **actively evolving** with strong community contributions, but **stability gaps** (API errors, tool history) require focused fixes. Voice output and agent collaboration may define v0.3.0.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest (2026-05-27)**

---

## 1. **Today's Overview**  
Hermes Agent remains highly active with **50 issues and 50 PRs updated in the last 24 hours**, indicating intense development focus. No new releases were published, but multiple bug fixes and feature implementations are in progress. Key areas include **Codex/Responses API streaming crashes**, **gateway stability**, and **multi-agent protocol support (A2A)**. The project is actively addressing critical bugs while advancing interoperability features.

---

## 2. **Releases**  
*No new releases on 2026-05-27.*  

---

## 3. **Project Progress**  
- **Merged PRs**: Multiple fixes for Codex/Responses API crashes (#32891, #32898, #32897, #32884) where terminal `output=null` events caused `TypeError: 'NoneType' object is not iterable`.  
- **Gateway Stability**: PR #32880 surfaces dropped `MEDIA` attachments in Telegram, improving tool reliability.  
- **Multi-Agent Protocol**: A2A (Agent-to-Agent) support (#514) is gaining traction with 9👍s, signaling demand for cross-agent communication standards.  
- **i18n**: PR #30492 adds 11-language translations (zh, ja, ko, de, es, fr, it, pt, ru, pl, tr), addressing localization gaps.  

---

## 4. **Community Hot Topics**  
- **Most Discussed Issue**: **[#11179](https://github.com/NousResearch/hermes-agent/issues/11179)** – *Responses stream crashes when `response.output` is null* (35 comments). Users report frequent crashes with OpenAI-compatible providers like ChatGPT.  
- **High-Reaction PR**: **[#32890](https://github.com/NousResearch/hermes-agent/pull/32890)** (34👍) – Recovers Codex streams from `output=null` errors, directly addressing #11179.  
- **Gateway Feature Request**: **[#8287](https://github.com/NousResearch/hermes-agent/issues/8287)** (11👍s) – Users want to run multiple Telegram bots under one agent session, reflecting need for parallel task workflows.  
- **Security Bug**: **[#32877](https://github.com/NousResearch/hermes-agent/issues/32877)** – MCP-wrapped tools bypass approval checks, raising security concerns (0👍s, low engagement suggests urgency).  

---

## 5. **Bugs & Stability**  
**Critical Bugs Today**:  
1. **[#32892](https://github.com/NousResearch/hermes-agent/issues/32892)** – ChatGPT integration fails silently (`'NoneType' object is not iterable`). *Fix PRs (#32891, #32898, #32897) are in flight*.  
2. **[#31435](https://github.com/NousResearch/hermes-agent/issues/31435)** – Plugin tools return `Dict` content, violating OpenAI’s string requirement (HTTP 400).  
3. **[#31101](https://github.com/NousResearch/hermes-agent/issues/31101)** – QQBot adapter loops silently after WebSocket failures.  

**Regression Notes**:  
- SQLite/WAL leaks (#29610) persist despite prior fixes, requiring deeper DB lifecycle analysis.  

---

## 6. **Feature Requests & Roadmap Signals**  
- **A2A Protocol (#514)**: High demand for inter-agent communication (9👍s) may lead to a v0.15.x release.  
- **Xiaomi Token Plan (#32874)**: New first-class provider added, following Alibaba/Stepfun patterns.  
- **Silent Response Opt-Out (#32861, #32879)**: Group-channel users want agents to skip `[SILENT]` placeholders without replies.  
- **Cron Job Fixes (#32895, #32896)**: Silent thread halts/job crashes suggest gateway cron needs audit.  

---

## 7. **User Feedback Summary**  
**Pain Points**:  
- **Streaming Crashes**: Frequent `output=null` errors disrupt workflows (e.g., ChatGPT, Codex). Users expect automatic recovery (#11179, #32883).  
- **Tool Reliability**: Vision analyzer (#9077) and Telegram media (#32837) fail on image inputs; mobile UX blurry on large files.  
- **Security Gaps**: MCP tools bypass approval (#32877) risks destructive command execution.  
- **Localization**: 11 new languages (#30492) address non-English user base needs.  

**Dissatisfaction**:  
- QQBot silent loop (#31101) and Matrix decryption (#5134) frustrate platform-specific integrations.  

---

## 8. **Backlog Watch**  
**High-Priority Unanswered Issues**:  
- **[#514](https://github.com/NousResearch/hermes-agent/issues/514)** – A2A protocol support is community-voted but lacks implementation roadmap.  
- **[#29610](https://github.com/NousResearch/hermes-agent/issues/29610)** – SQLite WAL leaks post-fix need attention (6 comments, no resolution).  
- **[#32877](https://github.com/NousResearch/hermes-agent/issues/32877)** – Security-critical; requires review of `approval.py` scope.  

**Stale PRs**:  
- #23812 (MCP reload watcher) closed but may need reevaluation if dynamic tool updates remain broken.  

--- 

**Overall Health**: Hermes is actively fixing critical bugs while prioritizing multi-agent and internationalization features. Community engagement is high around streaming stability (#11179) and gateway reliability (#31101). Next steps should prioritize A2A (#514) and SQLite leak (#29610) fixes.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# **PicoClaw Project Digest – May 27, 2026**

---

## **1. Today’s Overview**  
PicoClaw saw **high activity** today with **6 new Issues**, **21 PRs (8 open, 13 merged)**, and **one nightly release (v0.2.9-nightly.20260526.ab6d3946)**. The project is actively addressing feature requests, bug fixes, and provider integrations, particularly around streaming HTTP requests, multi-provider stability, and Telegram/WeChat channel improvements. The merge volume suggests strong developer engagement.

---

## **2. Releases**  
- **Nightly Build**: `v0.2.9-nightly.20260526.ab6d3946` ([Release Notes](https://github.com/sipeed/picoclaw/compare/v0.2.9...main))  
  - Automated build; experimental changes since last stable release.  
  - No breaking changes reported, but users should test for instability.

---

## **3. Project Progress**  
### **Merged PRs (13)**
Key advancements:
- **Streaming HTTP Requests (#2851)**: Added `"streaming": true` config support for LLM backend interactions (aligned with OpenAI client behavior).  
- **Telegram Business Mode (#2845)**: Enabled Telegram business message forwarding via new `business_mode` setting.  
- **Guest Mode Support (#2849)**: Added guest query handling for Telegram channels.  
- **Web Search Fixes (#2951, #2948)**: Fixed API compatibility issues with OpenAI Anthropic models (`claude-opus-4-7`, `claude-sonnet-4.6`).  
- **WeChat Multi-Account (#2883)**: Dynamic `weixin_*` config key parsing for multiple accounts.  
- **Code Block UI (#2933)**: Added line numbers and wrap toggle for code blocks in chat/skills.  

### **Open PRs (8)**
- **WeChat GLM-5 Error Fix (#2943)**: Investigating API error 1210 when sending images via WeChat + 智谱 GLM-5-Turbo.  
- **Termux SSL Detection (#2949)**: Auto-detection of CA bundle paths to fix HTTPS failures in Termux.  

---

## **4. Community Hot Topics**  
### **Top Issue by Engagement**: [#2404 – Streaming HTTP Request Config](https://github.com/sipeed/picoclaw/issues/2404)  
- **8 comments, 1 👍**: Users demand native support for streaming LLM responses (e.g., OpenAI’s `stream=True`). Highlighted as a **core workflow improvement**.  
- **Status**: PR likely in progress (merged PRs today align with this need).  

### **Top Bug Report**: [#2674 – Codex OAuth Empty Response](https://github.com/sipeed/picoclaw/issues/2674)  
- **6 comments, 4 👍**: OpenAI Codex OAuth returns empty responses when streaming. Critical for ChatGPT backend reliability.  
- **Status**: Unresolved; may require provider-side debugging.  

---

## **5. Bugs & Stability**  
| **Issue** | **Severity** | **Fix Status** |
|-----------|-------------|----------------|
| [#2887 – RISC-V .deb OpenAI Failure](https://github.com/sipeed/picoclaw/issues/2887) | **High** (RISC-V deployment block) | Unfixed; needs Go/Debian toolchain investigation. |
| [#2943 – WeChat GLM-5 API Error 1210](https://github.com/sipeed/picoclaw/issues/2943) | **Medium** (WeChat integration) | Open PR under review. |
| [#2674 – Codex OAuth Empty Stream](https://github.com/sipeed/picoclaw/issues/2674) | **Critical** (Provider reliability) | Unfixed; requires backend analysis. |

---

## **6. Feature Requests & Roadmap Signals**  
- **Streaming LLM Responses**: Dominant user request ([#2404](https://github.com/sipeed/picoclaw/issues/2404)); expected in next stable release.  
- **Multi-Channel Provider Support**: Telegrams/WeChat enhancements (#2849, #2883) signal focus on **multi-platform scalability**.  
- **Agent Orchestration**: Async tool delivery policies (#2830) suggest deeper **sub-agent control** in v0.3+.  

---

## **7. User Feedback Summary**  
- **Pain Points**:  
  - **Provider Reliability**: Empty responses (#2674), API errors (#2943) indicate backend fragility.  
  - **Deployment Challenges**: RISC-V `.deb` issues (#2887) hinder embedded adoption.  
- **Satisfaction**:  
  - Positive reception for Telegram guest mode (#2849) and web search fixes (#2951).  
  - UI polish (code blocks) praised (#2933).  

---

## **8. Backlog Watch**  
🔴 **Urgent**:  
- [#2674 – Codex OAuth Streaming Bug](https://github.com/sipeed/picoclaw/issues/2674): Affects ChatGPT integration; high priority.  
- [#2887 – RISC-V .deb Failure](https://github.com/sipeed/picoclaw/issues/2887): Blocks ARM/RISC-V deployments.  

🟠 **Long-Term**:  
- [#2551 – Channel Identification Refactor](https://github.com/sipeed/picoclaw/pull/2551): Decouples channel names from providers—future scalability work.  
- [#2943 – WeChat GLM-5 Fix](https://github.com/sipeed/picoclaw/issues/2943): Needs API parameter validation.  

--- 

**Overall Health**: ✅ **Active Development**. PicoClaw is rapidly iterating on core features while addressing critical bugs. Next release will likely prioritize **streaming support** and **multi-provider stability**.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# **NanoClaw Project Digest (2026-05-27)**  

---

## **1. Today's Overview**  
NanoClaw remained relatively quiet over the past 24 hours, with no new issues opened or closed and no releases published. However, five pull requests (PRs) were updated: four are still open, while one (#2622) was merged earlier in the day. The activity focuses on maintenance tasks—updating CI dependencies, fixing container stability, and ensuring consistent file line endings. No major blockers or urgent bugs surfaced, suggesting steady progress behind the scenes.  

---

## **2. Releases**  
*No new releases were published today.*  

---

## **3. Project Progress**  
### **Merged PRs:**  
- **[#2622] web: restart container after marketplace skill/persona update**  
  - **Fix**: Ensures containers restart properly when skills/personas are updated via the Solela AI marketplace ([details](https://github.com/nanocoai/nanoclaw/pull/2622)).  
  - **Impact**: Prevents stale container states during provisioning.  

### **Open PRs (4):**  
- **[#2608]** Bump Node.js GitHub Actions to v5 for June 2026 deprecation ([details](https://github.com/nanocoai/nanoclaw/pull/2608))  
  - *Maintenance*: Upgrades `actions/checkout`, `setup-node`, and `pnpm/action-setup` to avoid future runtime failures.  
- **[#2621]** Add `.gitattributes` to enforce LF line endings for shell scripts ([details](https://github.com/nanocoai/nanoclaw/pull/2621))  
  - *Cross-platform fix*: Prevents CRLF line-ending mismatches on Windows.  
- **[#2620]** Self-heal missing Docker images before spawning containers ([details](https://github.com/nanocoai/nanoclaw/pull/2620))  
  - *Stability*: Auto-rebuilds agent images if missing (critical for Dokploy users).  
- **[#2541]** Fix poll-loop parser from mistaking `</message>` in text as EOM tag ([details](https://github.com/nanocoai/nanoclaw/pull/2541))  
  - *Bugfix*: Correctly handles `</message>` in user-facing content (e.g., code examples).  

---

## **4. Community Hot Topics**  
No high-comment/reaction issues/PRs this cycle, but two standout themes:  
1. **CI/CD Maintenance** (#2608): Proactive upgrade of Node.js actions signals long-term infrastructure health.  
2. **Container Stability** (#2620, #2622): Multiple fixes address edge cases (missing images, stale configs), reflecting focus on reliability for marketplace integrations.  

---

## **5. Bugs & Stability**  
*None reported today, but two open PRs mitigate known risks:*  
- **Severity: Medium** (#2620) – Missing Docker image crash loops could disrupt deployments.  
- **Severity: Low** (#2541) – Parser false positives in message handling. Both have proposed fixes.  

---

## **6. Feature Requests & Roadmap Signals**  
- **Marketplace Integration**: The merged PR (#2622) suggests ongoing polish for skill/persona updates, hinting at deeper Solela AI ecosystem support.  
- **DevOps Tooling**: #2620’s self-healing feature may inspire broader container resilience improvements.  
- **Line Ending Consistency**: #2621’s `.gitattributes` addition reflects cross-platform adoption needs.  

---

## **7. User Feedback Summary**  
*Indirect feedback via PRs:*  
- **Pain Points**:  
  - Dokploy compatibility (#2620) indicates niche but critical user base.  
  - Message parsing quirks (#2541) show edge-case UX friction.  
- **Satisfaction**: Proactive maintenance (e.g., Node.js upgrades) signals strong backward compatibility efforts.  

---

## **8. Backlog Watch**  
- **#2608 (Node.js Actions Update)**: Needs review to ensure no breaking changes in CI pipelines.  
- **#2621 (.gitattributes)**: Low-risk but should be tested across contributors’ environments.  
- **#2541 (Parser Bug)**: Could impact agents generating rich-text replies; prioritize testing.  

---

**Health Check**: NanoClaw is maintaining steady, low-risk development with a focus on infrastructure and edge-case fixes. No urgent roadblocks, but community engagement (e.g., issue/PR discussions) remains light—consider encouraging more user feedback channels.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# **NullClaw Project Digest – May 27, 2026**  

## **1. Today's Overview**  
NullClaw remained relatively quiet over the past 24 hours with no issues opened or closed and no new releases. However, two open pull requests (PRs) were updated, focusing on Nix dependency fixes and LINE channel improvements. The project shows moderate activity in maintenance tasks but lacks major feature development or bug resolution at this time.  

## **2. Releases**  
*No new releases were published today.*  

## **3. Project Progress**  
- **PR #935 (`fix(nix): updated lockfiles to work with zig 0.16.0`)** [Link](https://github.com/nullclaw/nullclaw/pull/935)  
  - Updated `flake.lock` to support Zig 0.16.0 by pinning a compatible `zig2nix` version, resolving broken Nix builds.  
- **PR #934 (`fix(channels/line): fix sendMessage routing and implement replyToken cache`)** [Link](https://github.com/nullclaw/nullclaw/pull/934)  
  - Introduced a thread-safe reply token cache (`[16]ReplyTokenData`) with a 30s TTL for LINE webhook replies.  
  - Increased token buffer size to `512 bytes` for improved reliability.  

Both PRs are still pending review and merge, indicating ongoing maintenance efforts.  

## **4. Community Hot Topics**  
Currently, there are no active issues or highly commented PRs. The latest PRs (#935, #934) address technical debt and infrastructure improvements rather than user-facing features.  

## **5. Bugs & Stability**  
No new bugs or crashes were reported today. The open PRs suggest stability concerns around:  
- **Nix/Zig compatibility** (#935) – A build-breaking issue that requires urgent resolution if users rely on Nix flakes.  
- **LINE message routing** (#934) – A functional fix that could impact real-time messaging reliability.  

## **6. Feature Requests & Roadmap Signals**  
No explicit feature requests were logged, but the following signals emerge:  
- **Dependency management** (#935) → Future work may involve better automated dependency updates.  
- **LINE optimizations** (#934) → Could hint at broader platform-specific performance tuning (e.g., caching strategies).  

## **7. User Feedback Summary**  
No direct user feedback was captured via issues/PR comments. The lack of activity suggests either:  
- Low community engagement, or  
- Users are addressing problems internally without public reporting.  

## **8. Backlog Watch**  
Key unresolved items needing attention:  
- **PR #935 (Nix/Zig lockfile update)** – Critical for users relying on Nix; should be merged soon to prevent build failures.  
- **PR #934 (LINE replyToken cache)** – Functional improvement but requires testing before integration.  

### **Health Assessment**  
✅ **Maintenance Focus**: Active on dependency fixes, but lacks feature momentum.  
⚠️ **Stability Risk**: Nix compatibility (#935) is a high-priority blocker for some users.  
📢 **Engagement Gap**: No public discussion—consider encouraging user feedback channels (e.g., Discord, forum).  

*Next Steps*: Maintainers should prioritize merging #935 to avoid downstream impacts. Encourage contributors to review pending PRs to advance progress.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# **IronClaw Project Digest – May 27, 2026**  

---

## **1. Today’s Overview**  
IronClaw had a highly active day with **50 PRs updated (36 open, 14 merged/closed)** and **11 new issues**, alongside the release of **v0.29.0**. The project is in a state of rapid development, particularly around **Reborn extension lifecycle management, subagent fixes, and security hardening**. Merged PRs focused on **tool integration, CLI improvements, and sandbox approvals**, while open issues highlight ongoing challenges in **multi-tenant runtime wiring and background subagent result delivery**.

---

## **2. Releases**  
### **ironclaw-v0.29.0 (May 26, 2026)**  
- **WeCom channel support**: Added WeChat enterprise integration ([#2394](https://github.com/nearai/ironclaw/pull/2394)).  
- **Externally-provided tools**: Enhanced `Responses API` to accept externally supplied tools ([#3122](https://github.com/nearai/ironclaw/pull/3122)).  
- **Gateway logs download**: Added UI button for log retrieval ([#3588](https://github.com/nearai/ironclaw/pull/3588)) *(truncated)*.  

*Note: No breaking changes or migration steps reported.*

---

## **3. Project Progress**  
### **Merged PRs Today:**  
- **[#4071](https://github.com/nearai/ironclaw/pull/4071)**: Reborn HTTP response body saving (scoped metadata storage).  
- **[#4079](https://github.com/nearai/ironclaw/pull/4079)**: Shared LLM config resolution for Reborn (replaces manual provider parsing).  
- **[#4100](https://github.com/nearai/ironclaw/pull/4100)**: GSuite (Gmail/Google Calendar) first-party extension wiring via Reborn lifecycle.  
- **[#3922](https://github.com/nearai/ironclaw/pull/3922)**: Integrated `SecurityAuditSink` into obligation handlers for compliance tracking.  

### **Open PRs (Key Themes):**  
- **Extension Lifecycle**: [#4099](https://github.com/nearai/ironclaw/pull/4099) (CLI for local-dev extensions), [#4100](https://github.com/nearai/ironclaw/pull/4100) (GSuite integration).  
- **Subagent Fixes**: [#4092](https://github.com/nearai/ironclaw/issues/4092) (background result polling), [#4084](https://github.com/nearai/ironclaw/issues/4084) (silent completion bug).  
- **Sandboxing & Security**: [#4094](https://github.com/nearai/ironclaw/pull/4094) (sandbox spawn approvals), [#4082](https://github.com/nearai/ironclaw/issues/4082) (credential string unwrapping).  

---

## **4. Community Hot Topics**  
### **Most Active Issues/PRs:**  
#### **Issue #3259** ([Link](https://github.com/nearai/ironclaw/issues/3259))  
- **Topic**: Outdated crates.io release (`0.24.0` vs. latest GitHub tags).  
- **Engagement**: High comment volume (10 comments), signaling downstream dependency concerns.  
- **Analysis**: Urgent—downstream projects may be vulnerable due to pinned versions.  

#### **PR #3960** ([Link](https://github.com/nearai/ironclaw/pull/3960))  
- **Topic**: `SigningProvider` trait crate for attested signing.  
- **Engagement**: Core team focus; foundational for secure channels.  

#### **Issue #4084** ([Link](https://github.com/nearai/ironclaw/issues/4084))  
- **Topic**: Background subagent results not delivered to parent.  
- **Engagement**: Silent failure mode—needs immediate fix (linked PR: [#4092](https://github.com/nearai/ironclaw/issues/4092)).  

---

## **5. Bugs & Stability**  
| **Severity** | **Bug** | **Fix Status** |
|-------------|---------|----------------|
| **Critical** | Background subagent results never notified to parent ([#4084](https://github.com/nearai/ironclaw/issues/4084)) | Fix in progress ([#4092](https://github.com/nearai/ironclaw/issues/4092)) |
| **High** | Multi-tenant runtime misses `TenantSandboxProcessPort` ([#4085](https://github.com/nearai/ironclaw/issues/4085)) | Unassigned |
| **Medium** | Credential unwrapping bypasses secrecy ([#4082](https://github.com/nearai/ironclaw/issues/4082)) | Pending review |

---

## **6. Feature Requests & Roadmap Signals**  
- **Slack Integration**: Issue [#3857](https://github.com/nearai/ironclaw/issues/3857) requests MVP with preconfigured credentials.  
- **Event Streaming Timeline**: [#3809](https://github.com/nearai/ironclaw/issues/3809) tracks replay path for run progress.  
- **Context Compaction**: Spec draft ([#4096](https://github.com/nearai/ironclaw/pull/4096)) suggests memory optimizations for long-running agents.  
- **Next Likely Features**:  
  - **Multi-tenant sandbox wiring** (linked to #4085).  
  - **Background subagent polling** (#4092).  

---

## **7. User Feedback Summary**  
- **Pain Points**:  
  - **Downstream Dependency Risk**: crates.io lagging behind GitHub releases (#3259).  
  - **Silent Failures**: Subagents completing without notification (#4084).  
- **Use Cases**:  
  - Enterprises need **Slack/WeCom integrations** (#3857, #2394).  
  - Security teams demand **credential hardening** (#4082).  

---

## **8. Backlog Watch**  
- **Unaddressed Criticals**:  
  - **Multi-tenant runtime port wiring** (#4085) — blocks production scalability.  
  - **Signer approval gate optional** (#4081) — security gap.  
- **Stale Issues**:  
  - **Decomposition of large Reborn files** (#4088) — maintainability concern.  
  - **Timeline/replay path** (#3809) — WebUI dependency.  

---

### **Health Check**  
✅ **Strengths**: Rapid feature rollout, strong security focus, community engagement.  
⚠️ **Risks**: crates.io sync delay, multi-tenant runtime gaps, silent subagent failures.  
🔍 **Action Needed**: Prioritize #3259 (dependency risk) and #4084 (subagent fix).

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# **LobsterAI Project Digest – May 27, 2026**  

---

## **1. Today's Overview**  
LobsterAI had moderate activity over the past 24 hours with **15 PRs merged/closed**, but no new issues or releases were opened. The project appears to be in active maintenance mode, focusing on bug fixes, OpenClaw integration improvements, and UI refinements. No open/active issues suggest low immediate user-reported blockers, though several pending PRs (e.g., #2057) indicate ongoing technical debt cleanup.

---

## **2. Releases**  
*No new releases were published today.*

---

## **3. Project Progress**  
### **Merged/Closed PRs (15 total)**  
- **Core Fixes & Stability**:  
  - [#2058](https://github.com/netease-youdao/LobsterAI/pull/2058): Tightened grace period handling for large tool results to prevent session freezing.  
  - [#2055](https://github.com/netease-youdao/LobsterAI/pull/2055): Disabled OpenClaw skill sync behind a feature flag and allowed marketplace skill deletion.  
  - [#2054](https://github.com/netease-youdao/LobsterAI/pull/2054): Hidden OpenClaw provider plugins from sync detection to avoid unintended state changes.  
  - [#2051](https://github.com/netease-youdao/LobsterAI/pull/2051): Refixed tool loop breaker to prevent token burn during idle periods.  
  - [#2049](https://github.com/netease-youdao/LobsterAI/pull/2049): Added upstream loop detection to abort stalled tool loops in OpenClaw integrations.  

- **UI/UX Improvements**:  
  - [#2053](https://github.com/netease-youdao/LobsterAI/pull/2053): Fixed model-select UI inconsistencies in the renderer.  
  - [#2052](https://github.com/netease-youdao/LobsterAI/pull/2052): Preserved user-selected skills when switching models.  
  - [#2047](https://github.com/netease-youdao/LobsterAI/pull/2047): Resolved session freezing issues during LLM streaming.  

- **Feature Additions**:  
  - [#2045](https://github.com/netease-youdao/LobsterAI/pull/2045): Enabled OpenClaw-to-LobsterAI skill synchronization, including protection for plugin-skills.  
  - [#1760](https://github.com/netease-youdao/LobsterAI/pull/1760)*: Added image avatar support alongside emoji avatars for custom agents (created Apr 20).*  

- **Localization & Docs**:  
  - [#1773](https://github.com/netease-youdao/LobsterAI/pull/1773)*: Fixed missing "edit" translation key in memory entries (created Apr 21).*  
  - [#2048](https://github.com/netease-youdao/LobsterAI/pull/2048): Filtered empty data from LLM streaming output.  

*Pending PRs (4 open)*:  
- [#2057](https://github.com/netease-youdao/LobsterAI/pull/2057): Replaces deprecated VBScript launcher with hidden PowerShell (docs/maintenance).  
- [#2056](https://github.com/netease-youdao/LobsterAI/pull/2056): HTML share functionality (unreleased summary).  

---

## **4. Community Hot Topics**  
No highly commented issues/PRs today, but recurring themes:  
- **OpenClaw Integration**: Multiple PRs (#2045, #2054, #2055) focused on syncing skills and preventing token burn in OpenClaw-linked workflows. Suggests strong demand for tighter cross-platform interoperability.  
- **Session Stability**: Fixes like [#2051](https://github.com/netease-youdao/LobsterAI/pull/2051) and [#2047](https://github.com/netease-youdao/LobsterAI/pull/2047) address freezing/freezes—likely tied to real-time collaboration (`cowork`) use cases.  
- **Avatar Customization**: PR [#1760](https://github.com/netease-youdao/LobsterAI/pull/1760) signals growing need for richer agent identity features (image vs. emoji).  

---

## **5. Bugs & Stability**  
- **Critical**: None reported today.  
- **High Severity**:  
  - **Session Freezing** (resolved via [#2047](https://github.com/netease-youdao/LobsterAI/pull/2047))  
  - **Token Burn During Idle** (fixed via [#2049](https://github.com/netease-youdao/LobsterAI/pull/2049))  
- **Low Severity**: Minor UI tweaks (model-switching, skill retention).  

---

## **6. Feature Requests & Roadmap Signals**  
- **OpenClaw Synergy**: Skill sync (#2045), loop detection (#2049), and plugin management (#2055) hint at deeper OpenClaw integration as a roadmap focus.  
- **Agent Customization**: Image avatars (#1760) may expand into broader profile customization tools.  
- **Performance**: Streaming output filtering (#2048) suggests ongoing LLM efficiency optimizations.  

---

## **7. User Feedback Summary**  
- **Pain Points**:  
  - Session stability (freezes, token burn) was a frequent complaint, now addressed.  
  - OpenClaw users needed clearer sync controls (skill deletion, loop safety).  
- **Satisfaction**: No negative sentiment in PRs; fixes were targeted and timely.  

---

## **8. Backlog Watch**  
- **Pending PRs**:  
  - [#2057](https://github.com/netease-youdao/LobsterAI/pull/2057): Critical tech-debt cleanup (VBScript → PowerShell). Needs maintainer review.  
  - [#2056](https://github.com/netease-youdao/LobsterAI/pull/2056): Unclear scope of HTML share feature—awaiting summary updates.  
- **Stale Issues**: No unresolved issues, but older PRs (e.g., #1760, #1773) may need follow-up if dependent on newer code.  

--- 

**Health Score**: 🟢 **Stable & Active**  
Project is addressing technical debt while expanding core capabilities. Next steps: prioritize pending PRs (#2057) and monitor OpenClaw integration maturity.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# **Moltis Project Digest – May 27, 2026**  

## **1. Today's Overview**  
Moltis saw moderate activity over the last 24 hours with **1 open issue** and **2 pull requests (PRs)**—one merged (#1049) and one newly opened (#1074). No new releases were published. The project remains focused on agent capabilities and memory system enhancements, with no major stability or regression reports. Activity suggests steady development but low external engagement (minimal comments/reactions on issues/PRs).  

🔗 [GitHub Data Snapshot](https://github.com/moltis-org/moltis)  

---  

## **2. Releases**  
*No new releases* since the last digest.  

---  

## **3. Project Progress**  
- **Merged PR #1049 (`feat: agents as capability boundaries`)** – A significant architectural update that formalizes agents as core capability boundaries, integrating MCP servers, sandbox policies, and skills into agent presets. This enables granular control over model behavior per user/context (e.g., kids vs. parents channels).  
  - Impact: Enables modular agent configuration for multi-tenant use cases.  
  - Link: [PR #1049](https://github.com/moltis-org/moltis/pull/1049)  

- **Open PR #1074 (`memory`: Configurable embedding dimensions)** – Adds support for dynamic embedding dimension tuning in OpenAI-compatible providers, including auto-reindexing when dimensions change.  
  - Status: Awaiting review; could improve flexibility for custom LLM integrations.  
  - Link: [PR #1074](https://github.com/moltis-org/moltis/pull/1074)  

---  

## **4. Community Hot Topics**  
- **Issue #1075: "fork" forks at prompt, not response** ([Link](https://github.com/moltis-org/moltis/issues/1075))  
  - **Severity**: Bug (behavioral inconsistency).  
  - **Context**: Users report incorrect "fork" functionality (likely a tool/agent invocation bug). No reactions yet; may need deeper debugging.  
  - **Underlying Need**: Robust tool execution validation to prevent unintended branching during interactions.  

---  

## **5. Bugs & Stability**  
- **No critical bugs reported today**.  
- **Active Issue #1075** requires attention but lacks urgency due to limited visibility (no upvotes/comments).  
- No regressions or crashes noted in recent activity.  

---  

## **6. Feature Requests & Roadmap Signals**  
- **Agent Capabilities (#1049)** – Strong signal toward **multi-agent orchestration**, suggesting future work on:  
  - Cross-agent communication protocols.  
  - Dynamic skill assignment based on context (e.g., switching between "educational" and "creative" modes).  
- **Memory System (#1074)** – Indicates demand for **flexible vector DB configurations**, potentially leading to:  
  - Support for multiple embedding models (e.g., OpenAI + local models).  
  - Fine-grained reindexing controls.  

---  

## **7. User Feedback Summary**  
- **Pain Points**:  
  - Tool/functionality reliability (Issue #1075 hints at execution quirks).  
  - Limited user engagement (few reactions/comments suggest low community participation).  
- **Opportunities**:  
  - Improved documentation/agent preset examples could boost adoption.  
  - More interactive demos (e.g., live agent playground) might attract contributors.  

---  

## **8. Backlog Watch**  
- **Issue #1075 (Bug: Incorrect fork behavior)** – Needs investigation but has low priority due to lack of engagement.  
- **PR #1074 (Configurable embeddings)** – High-potential feature awaiting maintainer review; could unlock niche use cases.  

---  

### **Project Health Assessment**  
✅ **Strengths**: Clear focus on agent modularity and memory system improvements.  
⚠️ **Areas for Growth**:  
- Increase issue/PR engagement (community signals are sparse).  
- Prioritize documentation updates to onboard new users.  
- Address tool execution bugs proactively to prevent adoption friction.  

🔹 **Next Steps**: Review PR #1074, triage Issue #1075, and consider roadmap docs for upcoming agent features.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# **CoPaw Project Digest – May 27, 2026**

---

## **1. Today's Overview**
The CoPaw project saw **27 new issues** (18 open) and **27 PRs** (18 open) in the last 24 hours, indicating active community engagement and development momentum. No releases were published, suggesting a focus on ongoing bug fixes and feature refinements rather than major versioning. The high volume of open issues and PRs reflects both user-reported problems and contributor-driven improvements.

---

## **2. Releases**
*No new releases today.*

---

## **3. Project Progress**
- **Merged PRs**:  
  - [#4699](https://github.com/agentscope-ai/CoPaw/pull/4699): Added per-message timestamps to the chat UI (addresses [#4662](https://github.com/agentscope-ai/CoPaw/issues/4662)).  
  - [#4706](https://github.com/agentscope-ai/CoPaw/pull/4706): Atomic session state writes to prevent corruption during crashes/OOM kills.  
  - [#4693](https://github.com/agentscope-ai/CoPaw/pull/4693): Plugin-registered custom channels with dynamic config UI (schema-driven).  
- **Key Fixes**:  
  - ToolResponse text block handling (#4707), OpenAI-compatible provider parameter routing (#4689), and desktop app external link fixes (#4683).

---

## **4. Community Hot Topics**
### **Top-Commented Issues**:
1. **[#4644](https://github.com/agentscope-ai/CoPaw/issues/4644)**: *Tool calls not displaying in console UI* (18 comments). Users report intermittent tool call visibility without errors, requiring page refreshes.  
   - **Root Need**: Real-time debugging visibility for developers.  
2. **[#4650](https://github.com/agentscope-ai/CoPaw/issues/4650)**: *GLM-5.1 reasoning chain missing in OpenAI API* (5 comments). Only certain models (e.g., deepseek-v4-pro) show reasoning content.  
   - **Root Need**: Consistent LLM behavior across providers/models.  
3. **[#4680](https://github.com/agentscope-ai/CoPaw/issues/4680)**: *Custom skill renaming breaks agent persistence* (7 comments). Web UI fails after skill name edits.  
   - **Root Need**: Robust skill/agent lifecycle management.

### **Top-Commented PR**:
- **[#4699](https://github.com/agentscope-ai/CoPaw/pull/4699)**: Timestamp integration in chat UI (addresses [#4662](https://github.com/agentscope-ai/CoPaw/issues/4662))—highly requested for conversation auditing.

---

## **5. Bugs & Stability**
| Severity | Bug Description | Fix Status |
|----------|-----------------|------------|
| **Critical** | [#4704](https://github.com/agentscope-ai/CoPaw/issues/4704) | macOS Tahoe 26.5 crashes desktop app (`SIGSEGV`). |
| **High** | [#4675](https://github.com/agentscope-ai/CoPaw/issues/4675), [#4691](https://github.com/agentscope-ai/CoPaw/issues/4691) | File blocks break reasoning content injection permanently. |
| **Medium** | [#4006](https://github.com/agentscope-ai/CoPaw/issues/4006) | MiniMax/OpenAI provider fails to filter reasoning content. |
| **Low** | [#4700](https://github.com/agentscope-ai/CoPaw/issues/4700) | Console build fails due to missing Monaco Editor types. |

- **Notable Fixes**: Atomic session writes (#4706), audio content handling (#4383), and OpenCode model list pruning (#4660).

---

## **6. Feature Requests & Roadmap Signals**
- **Top User Votes**:  
  - **Conversation-level artifact view** ([#4676](https://github.com/agentscope-ai/CoPaw/issues/4676)): Directly browse files generated by agents in a chat.  
  - **RBAC/multi-user admin** ([#4702](https://enterprise users need role-based access control).  
  - **Plugin-extensible components** ([#4642](https://github.com/agentscope-ai/CoPaw/issues/4642)): Non-invasive hooks/context/memory plugins.  
- **Predicted Next Version Focus**:  
  - Timestamps (#4662), plugin system (#4642), and mission mode fixes (#4705) are likely candidates.

---

## **7. User Feedback Summary**
- **Pain Points**:  
  - **UI Reliability**: Tool call visibility (#4644), skill persistence (#4680), and download button delays (#4670) frustrate power users.  
  - **Debugging Gaps**: Missing reasoning chains (#4650) and orphaned assistant messages (#3984) hinder troubleshooting.  
  - **Enterprise Needs**: RBAC requests (#4702) signal adoption in multi-user environments.  
- **Positive Signals**: Mission mode enhancements (#4703) and fork/rewind features show interest in advanced collaboration.

---

## **8. Backlog Watch**
- **Unresolved Criticals**:  
  - **Desktop App Crash** (#4704): SIGSEGV on macOS upgrade—requires Tauri or runtime isolation fix.  
  - **WeChat Channel Poll Thread** (#4697/#4698): Event loop crashes during zero-downtime reloads.  
- **Long-Term Tech Debt**:  
  - Full-backup slowness (#4678): Needs parallelization (e.g., workspace-level threading).  
  - Model-specific configs (#4687): `max_iters` auto-adaptation post-model-switch.  

---

**Project Health Score**: ⭐⭐⭐☆ (3.5/5)  
- **Strengths**: High contributor activity, targeted fixes for top bugs.  
- **Risks**: Desktop stability, enterprise features lagging behind core UX needs.  
- **Action Items**: Prioritize macOS crash (#4704), plugin extensibility (#4642), and reasoning-chain consistency (#4650).

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# **ZeptoClaw Project Digest (2026-05-27)**  

## **1. Today's Overview**  
ZeptoClaw saw **high dependency-maintenance activity** with **16 PRs submitted in the last 24 hours**, primarily automated by Dependabot for dependency updates across JavaScript (Astro, ESLint) and Rust (tower-http, clap, bcrypt). No new issues were opened or closed, suggesting a focus on **stability maintenance** rather than active development or bug fixes. The project remains **actively maintained**, but with no major feature contributions or releases.  

🔗 **[View PRs](https://github.com/qhkm/zeptoclaw/pulls?q=is%3Apr+created%3A2026-05-26)**  

---  

## **2. Releases**  
*No new releases* in the last 24 hours.  

---  

## **3. Project Progress**  
✅ **Merged/Closed PRs**:  
- **PR #578** (closed): Upgraded Astro (`6.1.6` → `6.3.1`) in `/landing/zeptoclaw/docs`.  
- **PR #572** (closed): Upgraded `@astrojs/starlight` (`0.38.3` → `0.39.2`) in `/landing/r8r/docs`.  

⚠️ **Open PRs** (14 total):  
- Dependency bumps for:  
  - ESLint (`10.0.2` → `10.3.0`) ([#608](https://github.com/qhkm/zeptoclaw/pull/608))  
  - Tower HTTP (`0.6.8` → `0.6.10`) ([#606](https://github.com/qhkm/zeptoclaw/pull/606))  
  - UUID (`1.23.0` → `1.23.1`) ([#601](https://github.com/qhkm/zeptoclaw/pull/601))  
  - Rust toolchain updates (e.g., `clap`, `bcrypt`).  

---  

## **4. Community Hot Topics**  
*No high-engagement Issues/PRs* (all PRs are low-traffic dependency updates).  
- **Most Active PR**: `#608` (ESLint upgrade) has **no reactions**—likely automated.  
- **Underlying Need**: Consistent dependency management suggests a focus on **security patches** and compatibility with upstream libraries.  

---  

## **5. Bugs & Stability**  
*No reported bugs or crashes* in the last 24 hours.  
- **Recent Dependency Updates**: All PRs are non-breaking (patch/minor version bumps), indicating **stable maintenance**.  

---  

## **6. Feature Requests & Roadmap Signals**  
*No explicit feature requests* detected in recent activity.  
- **Implied Focus**:  
  - **Documentation**: Multiple Astro/Starlight updates hint at docs improvements.  
  - **Security**: Regular `cargo-deny-action` checks (#597) suggest proactive vulnerability scanning.  

---  

## **7. User Feedback Summary**  
*No user feedback* (Issues/PRs lack comments).  
- **Pain Points**: Unclear; likely handled via automated dependency workflows.  
- **Use Cases**: Primarily infrastructure/tooling support (e.g., Rust backend, static site generation).  

---  

## **8. Backlog Watch**  
🔍 **Pending Attention**:  
- **Open PRs (#608, #607, etc.)**: All need review to merge pending maintainer action.  
- **Unmerged Dependency Updates**: Risk of outdated dependencies if not promptly addressed.  

---  

### **Summary Health Check**  
✅ **Strengths**:  
- Proactive dependency management.  
- No critical stability issues.  

⚠️ **Risks**:  
- Low manual engagement (no human-driven PRs/issues).  
- Potential backlog accumulation if PRs aren’t merged quickly.  

📌 **Recommendation**: Prioritize merging open PRs to maintain security/stability. Monitor for upstream library changes affecting ZeptoClaw.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – May 27, 2026**  

---

## **1. Today's Overview**  
ZeroClaw saw significant activity today with **7 open issues** and **36 PRs updated in the last 24 hours**, indicating active development across multiple subsystems. High-priority bugs (e.g., DeepSeek API compatibility) and feature requests (computer-use support, TUI keybindings) dominate discussion. Notably, **6 PRs were merged**, addressing runtime stability, security, and tooling improvements. No new releases were published.

---

## **2. Releases**  
*No new releases this period.*  

---

## **3. Project Progress**  
**Merged PRs:**  
- **#6953**: Fixed SiliconFlow API endpoint misconfiguration (`.cn` → `.com`) to resolve auth failures ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/6953)).  
- **#6951**: Added `ChannelMessage::new` and `reply_to` constructors to prevent breaking changes in email/WeCom channels ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/6951)).  
- **#6947**: Suppressed `INFO` logs in interactive agent mode to improve readability ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/6947)).  

**In Development:**  
- **Skill Management (#6667)**: Background review fork for skills integration (targeting Phase 2 of FND-001).  
- **Computer-Use (#6909)**: RFC for screen/mouse interaction (aligned with Codex/Peekaboo).  

---

## **4. Community Hot Topics**  
**Top Issue by Engagement:**  
- **DeepSeek-V4 API Bug (#6059)**: 13 comments, 4 👍s. Users report errors due to "thinking mode" format incompatibility. *High priority*—needs provider-specific fixes ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)).  

**Top PR by Discussion:**  
- **Skills Cooldown Enforcement (#6684)**: Addresses skill patch action safety gaps (linked to #6683). Requires maintainer action ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/6684)).  

**Notable Feature Requests:**  
- **TUI Keybindings (#6950/#6952)**: Adds `Alt+1–5`/`Tab` support for compact keyboards (Logitech MX Keys Mini, etc.) ([links](https://github.com/zeroclaw-labs/zeroclaw/issues/6950, https://github.com/zeroclaw-labs/zeroclaw/pull/6952)).  
- **Computer-Use (#6909)**: Screen interaction capability requested by users comparing ZeroClaw to OpenAI Codex ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)).  

---

## **5. Bugs & Stability**  
**Critical:**  
- **DeepSeek-V4 API Mismatch (#6059)**: Regression blocking DeepSeek-Pro/Flash usage. *Fix pending*.  
- **Model Switch Persistence (#6719)**: Resolved via PR #6719 (fixed `model_switch` tool state tracking).  

**Medium Severity:**  
- **Email Attachment Validation (#6937)**: Documented path resolution risks (PR #6949 adds rustdoc contracts).  
- **Discord Preflight 429 Handling (#6934)**: Improved retry logic for rate limits.  

---

## **6. Feature Requests & Roadmap Signals**  
**Likely Next Version Priorities:**  
- **Computer-Use Support (#6909)**: High-demand feature for GUI automation.  
- **Skill Tool Elevation (#6924)**: Scoped access to blocked tools (e.g., shell commands).  
- **MCP Resource/Prompt Tools (#6946)**: Expands MCP server integration capabilities.  

**RFCs Under Review:**  
- **Orchestrator Pipeline Routing (#6954)**: Fixes cron job safety gaps (linked to #6037, #6648).  
- **Plugin System Refactor (#6943)**: Replaces Extism with WASMtime for better isolation.  

---

## **7. User Feedback Summary**  
**Pain Points:**  
- **API Compatibility**: DeepSeek/V4 errors frustrate users relying on specific models ([issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)).  
- **TUI Usability**: Compact keyboard users need better shortcuts (#6950).  
- **Log Clutter**: Interactive mode drowns output in `INFO` logs (#6944, fixed in #6947).  

**Positive Feedback:**  
- **Skill Management**: Users appreciate granular control over cooldowns/patch actions (#6684).  

---

## **8. Backlog Watch**  
**Unresolved Critical Issues Needing Attention:**  
- **Provider Aliases During OAuth (#6938)**: Fixing Codex subscription auth preservation.  
- **Discord Gateway 429 Handling (#6934)**: Pending final review.  
- **RFC: Orchestrator Pipeline (#6954)**: Addresses multiple scheduler-related bugs (#6037, #6648).  

**Stale but Active:**  
- **Computer-Use (#6909)**: Needs implementation roadmap.  

--- 

**Health Assessment**: Strong momentum with focus on stability (DeepSeek, model switches), usability (TUI, logs), and extensibility (skills, MCP). Community engagement is high, particularly around real-world integrations.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*