# OpenClaw Ecosystem Digest 2026-05-26

> Issues: 477 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-26 00:36 UTC

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

# **OpenClaw Project Digest - 2026-05-26**

---

## **1. Today's Overview**
OpenClaw is experiencing high activity, with **477 Issues** (open: 192) and **500 PRs** (open: 271) updated in the last 24 hours. The project shows strong momentum in bug fixes, feature development, and community engagement—particularly around session state management, provider routing, and tool reliability. No new releases were published this week.

---

## **2. Releases**
*None*  

---

## **3. Project Progress**
### **Merged PRs Today**
- **[#86624](https://github.com/openclaw/openclaw/pull/86624)**  
  *fix(agents): persist CLI user turns before attempts*  
  Ensures CLI inputs are recorded to sessions even if backend attempts fail.
- **[#84007](https://github.com/openclaw/openclaw/pull/84007)**  
  *fix(agents): inherit subagent thinking defaults*  
  Subagents now inherit parent session’s `thinking` configuration by default.
- **[#86312](https://github.com/openclaw/openclaw/pull/86312)**  
  *fix(agents): cap MiniMax /btw side-question tokens*  
  Fixes `/btw` tool token limits for MiniMax providers.

### **Closed PRs Today**
- **[#86678](https://github.com/openclaw/openclaw/pull/86678)**  
  *perf: reduce session and auth cache hotpath work*  
  Optimizes gateway CPU usage by deferring immutable snapshot cloning until read-time.

---

## **4. Community Hot Topics**
### **Top Issues by Comments/Reactions**
1. **[#80319](https://github.com/openclaw/openclaw/issues/80319)**  
   *QA tool-defaults suite conflates Codex-native tools with OpenClaw dynamic tool parity*  
   **17 comments, 👍1**  
   Users report misalignment between Codex and OpenClaw tool behavior; QA harness needs refinement.

2. **[#68596](https://github.com/openclaw/openclaw/issues/68596)**  
   *Configurable streaming watchdog timeout threshold*  
   **13 comments, 👍8**  
   Request to adjust timeout thresholds for long-thinking models (e.g., DeepSeek-R1).

3. **[#84038](https://github.com/openclaw/openclaw/issues/84038)**  
   *doctor --fix silently migrates config, breaking PI+OAuth runtime*  
   **12 comments, 👍3**  
   Regression causing token inflation after `doctor --fix`; upstream Codex/OpenClaw routing issue.

4. **[#18160](https://github.com/openclaw/openclaw/issues/18160)**  
   *Direct Exec Mode for Cron Jobs*  
   **12 comments, 👍9**  
   Demand for non-agent cron job execution to avoid LLM interpretation overhead.

**Analysis**: High engagement on tooling, session stability, and provider routing—key pain points for production use.

---

## **5. Bugs & Stability**
### **Critical Bugs Reported Today**
| Issue | Severity | Fix PR? |
|-------|----------|---------|
| [#85913](https://github.com/openclaw/openclaw/issues/85913) | 🦞 diamond lobster (session-state race) | No |
| [#85953](https://github.com/openclaw/openclaw/issues/85953) | 🐚 platinum hermit (subagent lock stall) | No |
| [#86214](https://github.com/openclaw/openclaw/issues/86214) | 🐚 platinum hermit (Codex mid-turn drop) | No |
| [#86613](https://github.com/openclaw/openclaw/issues/86613) | 🦞 diamond lobster (FD leak) | No |

**Notable Stability Trends**:
- **Session-state races**: Multiple issues (`EmbeddedAttemptSessionTakeoverError`, heartbeat/channel lane collisions) suggest concurrency model fragility.
- **Provider drops**: Codex tool/image requests failing mid-turn (#86214) and Telegram message loss (#80520) indicate delivery reliability gaps.

---

## **6. Feature Requests & Roadmap Signals**
### **High-Priority User Requests**
1. **Configurable Streaming Watchdog Timeout** ([#68596](https://github.com/openclaw/openclaw/issues/68596))  
   Likely next beta: Adjustable timeout thresholds for long-thinking models.
2. **Direct Cron Execution** ([#18160](https://github.com/openclaw/openclaw/issues/18160))  
   Expected in upcoming release: Non-agent cron job support via `exec` mode.
3. **Xiaomi MiMo Token Plan Provider** ([#86169](https://github.com/openclaw/openclaw/issues/86169))  
   In progress: Xiaomi provider plugin (#86670).
4. **Telegram Bot Command Routing** ([#86553](https://github.com/openclaw/openclaw/pull/86553))  
   Merged: Targeted bot commands now treated as mentions.

---

## **7. User Feedback Summary**
### **Pain Points**
- **Silent Failures**: Users report dropped messages (#80520), lost subagent completions (#85953), and unlogged errors (#84945).  
  **Root Cause**: Session-state locks and event-loop starvation need hardening.
- **Token Inflation**: Codex vs. OpenClaw routing causes 3–4x token costs (#84038).  
  **User Impact**: Operational cost spikes for API users.
- **Provider Crashes**: Local memory embeddings on Apple Silicon crash gateway (#44202).  
  **Feedback Needed**: Metal/GPU guidance required.

### **Satisfaction**
Positive reactions (👍8+) on configurable features (watchdog, cron) show strong demand for flexible tooling.

---

## **8. Backlog Watch**
### **Long-Unanswered Critical Items**
1. **[#86201](https://github.com/openclaw/openclaw/issues/86201)**  
   WSL2 upgrade slowness/crash loops post-2026.5.22.  
   **Action Required**: Investigate event-loop delays.
2. **[#86018](https://github.com/openclaw/openclaw/pull/86018)**  
   Clarify QQBot passive group event wording.  
   **Community Signal**: Needs real-world proof.
3. **[#86540](https://github.com/openclaw/openclaw/pull/86540)**  
   Subagent delivery preservation after lock stalls.  
   **Merge Risk**: Pending proof.

---

**Summary**: OpenClaw is actively addressing tooling, session state, and provider routing bugs while responding to user requests for configurability. Stability improvements (especially concurrency) and silent failure mitigation are top priorities. Next version likely includes watchdog tuning, cron jobs, and Xiaomi provider support.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent & Assistant Ecosystem (2026)**

---

## 1. **Ecosystem Overview**  
The personal AI agent/assistant open-source ecosystem is rapidly evolving, with projects like **OpenClaw**, **NanoBot**, and **Hermes Agent** leading in tooling, session management, and provider routing—key for production-grade LLM applications. Projects such as **PicoClaw** and **ZeroClaw** focus on security sandboxing and multi-provider compatibility, while others like **CoPaw** prioritize UI/UX and desktop integration. Community-driven features (e.g., **LobsterAI’s memory system**, **IronClaw’s attested signing**) signal demand for **automation, interoperability, and data persistence**.

---

## 2. **Activity Comparison**  

| Project           | Issues (Total) | Open Issues | PRs Total | Merged PRs | Releases | Health Score* |
|-------------------|----------------|-------------|-----------|------------|-----------|---------------|
| **OpenClaw**      | 977 (477 open)| 192         | 500       | ~100       | None      | ★★★★☆        |
| **NanoBot**       | 423 (5 open)  | 8           | 118       | ~20        | None      | ★★★☆☆        |
| **Hermes Agent**  | 1,210 (25 open)| 25          | 50        | ~15        | None      | ★★★☆☆        |
| **PicoClaw**      | 1,042 (9 open)| 8           | 8         | 0          | Nightly   | ★★☆☆☆        |
| **ZeroClaw**      | 1,560 (19 open)| 7           | 50        | ~16        | None      | ★★★☆☆        |
| **LobsterAI**     | 894 (1 open)  | 1           | 29        | ~15        | None      | ★★★☆☆        |
| **IronClaw**      | 1,100 (18 open)| 18          | 50        | ~25        | None      | ★★★★☆        |

*Higher score = More activity + stability + community engagement (★ = 1-5).  

---

## 3. **OpenClaw's Position**  
### **Advantages Over Peers**  
- **Technical Approach**:  
  - **Provider Routing & Session State**: OpenClaw excels in **multi-provider orchestration** (MiniMax, Xiaomi, Telegram) with explicit session state management (e.g., CLI turn persistence), while peers like NanoBot focus on subagent collaboration, and Hermes Agent emphasizes dashboard UX.  
  - **Tool Reliability**: Fixes like `/btw` token capping (#86312) show rigorous edge-case handling vs. PicoClaw’s safety guards or ZeroClaw’s sandboxing.  
- **Community Size**:  
  - **477 open issues** vs. NanoBot’s 8, Hermes Agent’s 25, and ZeroClaw’s 19—OpenClaw attracts more enterprise users needing scalable deployments.  

---

## 4. **Shared Technical Focus Areas**  
| Requirement                  | Projects Addressing It                                                                 | Key Need                                                                 |
|-----------------------------|---------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| **Session Persistence**      | OpenClaw (#86624), NanoBot (#3999), LobsterAI (#2046)                                | Avoid lost turns post-error                                               |
| **Multi-Provider Routing**   | OpenClaw (MiniMax/Xiaomi), NanoBot (StepFun), ZeroClaw (Z.AI/Gemini)                   | Unified API abstraction                                                  |
| **Sandbox Security**         | ZeroClaw (Bubblewrap), PicoClaw (guardCommand), IronClaw (attested signing)             | Isolated execution                                                     |
| **Tool Rate Limiting**        | NanoBot (#3985), OpenClaw (#86312), Hermes Agent (#32321)                            | Prevent LLM loops                                                       |

---

## 5. **Differentiation Analysis**  
| Project          | Target Users                     | Feature Focus                          | Architecture Highlights                           |
|------------------|----------------------------------|----------------------------------------|--------------------------------------------------|
| **OpenClaw**     | Enterprises, API integrations    | Provider routing, session state, tools   | Explicit provider adapters, CLI/session lifecycle  |
| **NanoBot**      | Developers, researchers         | Subagent collaboration, dynamic tools   | Lightweight, plugin-based extensibility           |
| **Hermes Agent** | Teams, Slack/Telegram users     | Dashboard UX, provider security         | Multi-platform adapter framework                 |
| **ZeroClaw**     | Security-first deployments      | Sandboxing, provider allowlisting       | Bubblewrap, WASM plugin isolation               |
| **PicoClaw**     | Chinese market, lightweight CLI  | Safety guards, channel integrations     | RISC-V optimized, local model support            |
| **IronClaw**     | Custodial/multi-chain agents    | Attested signing, Reborn migration      | NEAR blockchain attestation substrate            |
| **LobsterAI**    | Productivity-focused           | Memory system, OpenClaw sync            | Browser IndexedDB persistence                   |

---

## 6. **Community Momentum & Maturity**  
- **Rapid Iteration**:  
  - **OpenClaw** (477 open issues, 500 PRs): High activity but unaddressed bugs suggest scaling challenges.  
  - **NanoBot** (118 PRs, 5 open issues): Focused on tooling/collaboration; fewer blockers.  
  - **Hermes Agent** (50 PRs, 25 open issues): Stabilizing with provider fixes.  
- **Stabilization**:  
  - **PicoClaw** (Nightly builds only): Low health score due to frequent regressions.  
  - **ZeroClaw** (50 PRs, 19 open issues): Security-focused, fewer new issues than OpenClaw.  
- **Mature**:  
  - **IronClaw** (50 PRs, 18 open issues): Attested signing and Reborn integration are core.  

---

## 7. **Trend Signals**  
### **Industry Trends & Developer Value**  
1. **Provider Abstraction & Routing**:  
   - OpenClaw, NanoBot, and ZeroClaw highlight demand for **multi-provider compatibility** (Xiaomi, Z.AI, StepFun).  
   - *Value*: Simplifies API management for heterogeneous LLM stacks.  
2. **Security & Sandboxing**:  
   - ZeroClaw (Bubblewrap), PicoClaw (guardCommand), IronClaw (attested signing) reflect **trustless execution** needs.  
   - *Value*: Critical for sensitive workflows (e.g., financial/legal tools).  
3. **Memory & Context Persistence**:  
   - LobsterAI (session titles), OpenClaw (CLI turns), NanoBot (cross-instance messaging) show **long-context awareness**.  
   - *Value*: Reduces manual tracking in agent workflows.  
4. **Tool Reliability**:  
   - OpenClaw (`/btw` token caps), NanoBot (rate-limiting), Hermes Agent (memory staleness warnings) emphasize **LLM loop prevention**.  
   - *Value*: Mitigates operational costs/time waste.  
5. **UI/UX Integration**:  
   - CoPaw (coding IDE), Hermes Agent (dashboard themes), NanoBot (thread-awareness) signal **developer ergonomics**.  
   - *Value*: Accelerates adoption in non-technical teams.  

---

### **Strategic Takeaways**  
- **OpenClaw** leads in **production-ready multi-provider/agent state**, while **NanoBot** and **Hermes Agent** excel in collaboration/platform-specific UX.  
- **ZeroClaw** and **PicoClaw** address niche markets (security/lightweight CLI), whereas **IronClaw** and **LobsterAI** target **productivity/custodial use cases**.  
- **Maturity**: OpenClaw and Hermes Agent show **stability signals** (high PR volume + resolved critical bugs), while PicoClaw requires **regression mitigation**.  
- **Future-Proofing**: Projects emphasizing **attested signing (IronClaw)**, **sandboxing (ZeroClaw)**, and **provider routing (OpenClaw)** align with **secure, scalable AI agent infrastructure**.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# **NanoBot Project Digest – May 26, 2026**  

---

## **1. Today's Overview**  
NanoBot saw **high activity** in the last 24 hours: **5 issues** (3 open, 2 closed) and **118 PRs** (108 open, 10 merged), indicating active development and community contributions. No new releases were published, but multiple feature enhancements and bug fixes were merged, particularly around agent collaboration, tool cycling detection, and provider integrations. The project is maintaining steady momentum with both core improvements and infrastructure refinements.

---

## **2. Releases**  
*No new releases were published on May 26, 2026.*  

---

## **3. Project Progress**  
### **Merged/Closed PRs:**  
- **[PR #3999](https://github.com/HKUDS/nanobot/pull/3999)**: Fixed `AgentRunner` exiting prematurely during sustained goals (`/goal`).  
- **[PR #3988](https://github.com/HKUDS/nanobot/pull/3988)**: Added StepFun’s **Step Plan API** support, mirroring existing providers like VolcEngine/BytePlus.  
- **[PR #3867](https://github.com/HKUDS/nanobot/pull/3867)**: Resolved OpenRouter/MiMo thinking control issues for reasoning model consistency.  
- **[PR #3985](https://github.com/HKUDS/nanobot/pull/3985)**: Introduced **v2.0 loop guard & rate-limiting** to prevent tool repetition bugs (e.g., `grep` loops).  
- **[PR #3978](https://github.com/HKUDS/nanobot/pull/3978)**: Propagated `maxConcurrentSubagents` config to avoid subagent concurrency limits being ignored.  

**Key Advances:**  
- **Agent collaboration** (#3992): Cross-instance messaging via a shared message bus.  
- **Dream memory consolidation** (#3990): Unified two-phase memory into a single `AgentLoop`-driven lifecycle.  
- **Telegram webhook mode** (#3996): Added opt-in webhook support alongside long polling.  

---

## **4. Community Hot Topics**  
### **Top Issues/PRs by Engagement:**  
#### **Issue #3986** ([Link](https://github.com/HKUDS/nanobot/issues/3986))  
- **Title**: *"通用工具级循环检测与速率限制护栏"* (Tool Cycling Detection & Rate Limiting Fences)  
- **Context**: Users reported LLM loops (e.g., repeated `grep`/`list_dir` calls). Proposed solution (#3985 PR) hard-blocks such behavior.  
- **Signal**: High user demand for **runtime safety guards**, likely to be integrated into next release.  

#### **PR #4005** ([Link](https://github.com/HKUDS/nanobot/pull/4005))  
- **GitAgent Protocol Support**: Adds compatibility with [GAP](https://gitagent.sh), aligning NanoBot with portable agent standards.  
- **Impact**: Positions NanoBot as a lightweight, multi-provider ecosystem player.  

#### **Issue #4000** ([Link](https://github.com/HKUDS/nanobot/issues/4000))  
- **Native ASR for StepFun**: Users want built-in transcription for StepFun’s Step Plan API (currently unsupported).  

---

## **5. Bugs & Stability**  
### **Critical Fixes Today:**  
| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| **#3995** ([PowerShell流式换行异常](https://github.com/HKUDS/nanobot/issues/3995)) | Medium | Closed | N/A (User-reported) |
| **#3999** (`AgentRunner` premature exit) | High | Closed | PR #3999 |

**Open Bugs Requiring Attention:**  
- **#4000** (StepFun ASR): Needs provider integration.  
- **#4003** (Dream ownership guard): Preventing unintended skill modifications.  

---

## **6. Feature Requests & Roadmap Signals**  
**High-Priority Features:**  
1. **Rate-Limiting & Tool Cycling Guards** (#3986 → #3985): Already merged; likely to stabilize in v0.3.  
2. **Cross-Agent Collaboration** (#3992): Enables multi-agent workflows (e.g., task delegation).  
3. **Webhook Modes** (#3996): Expands Telegram integration options.  
4. **StepFun Transcription** (#4000): Native voice support for Step Plan users.  

**Predicted Next Version (v0.3.0+):**  
- Enhanced runtime safety (rate-limiting, subagent concurrency).  
- Provider expansions (StepFun, GitAgent Protocol).  

---

## **7. User Feedback Summary**  
**Pain Points Addressed:**  
- **Terminal UI Glitches**: PowerShell streaming (#3995) fixed via user-reported workaround.  
- **Model Loops**: Rate-limiting (#3985) tackles wasted tokens/time from repetitive tool calls.  
- **Provider Limitations**: StepFun ASR (#4000) reflects niche user needs.  

**Satisfaction:**  
- Positive feedback on **collaboration features** (#3992) and **simplified CLI/MCP unification** (#3991).  
- Requests for **more provider flexibility** (e.g., OpenRouter thinking controls resolved in #3867).  

---

## **8. Backlog Watch**  
**Long-Unanswered Issues Needing Review:**  
- **#3958** ([Weather Skill](https://github.com/HKUDS/nanobot/issues/3958)): Proposes moving weather to an example folder (low priority but aligns with "lean" design).  
- **#3993** ([Anthropic Content Blocks](https://github.com/HKUDS/nanobot/issues/3993)): Requires handling missing `type` fields in Anthropic responses.  
- **#2155** ([TUI Improvements](https://github.com/HKUDS/nanobot/pull/2155)): Terminal UI enhancements still in progress.  

**Action Items:**  
- Prioritize **Anthropic compatibility** (#3993) for broader provider support.  
- Consider **TUX integration** (#2155) if community interest grows.  

--- 

**Overall Health**: NanoBot is **actively maintained**, with strong community engagement focused on **scalability, safety, and provider expansion**. The project is well-positioned for adoption in multi-agent ecosystems.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – May 26, 2026**

---

## **1. Today's Overview**  
Hermes Agent saw **high activity** with **50 Issues updated** (25 open, 25 closed) and **50 PRs submitted** (43 open, 7 merged/closed). No new releases were published today. The project is in active development, with a mix of bug fixes, feature enhancements, and community-driven improvements. Key focus areas include **dashboard UX, Docker permissions, memory management, and gateway stability**.

---

## **2. Releases**  
*No new releases were published today.*

---

## **3. Project Progress**  
- **Merged PRs**:  
  - [#32321](https://github.com/NousResearch/hermes-agent/pull/32321): Added memory staleness warnings to prevent outdated context usage.  
  - [#32319](https://github.com/NousResearch/hermes-agent/pull/32319): Fixed AWS credential blocklist for Bedrock provider security.  
  - [#32315](https://github.com/NousResearch/hermes-agent/pull/32315): Slack thread image context now includes prior mentions.  
  - [#32318](https://github.com/NousResearch/hermes-agent/pull/32318): Resolved Claude Pro/Max OAuth token routing issues.  

- **Closed PRs**:  
  - [#32309](https://github.com/NousResearch/hermes-agent/pull/32309): Feishu media uploads switched to HTTP/1.1 to avoid stream resets.  
  - [#32307](https://github.com/NousResearch/hermes-agent/pull/32307): Discord `allowed_channels` config now honors `config.yaml`.  

**Key Advances**: Memory system hardening, gateway/platform adapter fixes, and CLI/dashboard UX updates.

---

## **4. Community Hot Topics**  
### **Top-Commented Issues (Open)**:  
- **[#18080](https://github.com/NousResearch/hermes-agent/issues/18080)**: *Improved Dashboard Themes* (19 comments, 27 👍s)  
  - **Need**: Users demand better font/contrast choices in the dashboard UI—current themes are hard to read. High engagement suggests this is a priority for next release.  
- **[#13659](https://github.com/NousResearch/hermes-agent/issues/13659)**: *DeepSeek-R1 Tool Enforcement Bug* (6 comments)  
  - **Need**: Local model (`deepseek-r1:7b`) fails when `tool_use_enforcement=never` is set. Indicates tool flexibility gaps in local LLM integrations.  
- **[#32291](https://github.com/NousResearch/hermes-agent/issues/32291)**: *Add Antigravity Toolset* (1 comment)  
  - **Need**: Users want direct access to Google’s `antigravity` SDK (like Cursor/Codex). Signals interest in multi-agent orchestration tools.  

### **Top-Commented PRs (Merged)**:  
- **Memory Staleness Warning** ([PR #32321](https://github.com/NousResearch/hermes-agent/pull/32321))  
  - **Signal**: Explicit freshness checks align with Claude Code’s best practices—users care about accuracy over time.  

---

## **5. Bugs & Stability**  
| **Severity** | **Issue** | **Status** | **Fix PR?** |
|-------------|-----------|------------|-------------|
| **High** | [#18482](https://github.com/NousResearch/hermes-agent/issues/18482) | Docker home dir permission denied | Unresolved |
| **Medium** | [#23402](https://github.com/NousResearch/hermes-agent/issues/23402) | Docker UID/Permissions issue | Unresolved |
| **Medium** | [#32283](https://github.com/NousResearch/hermes-agent/issues/32283) | TUI `/tmp` file-handle leak | Fixed by [PR #32316](https://github.com/NousResearch/hermes-agent/pull/32316) |

**Critical**: Docker permissions (#18482) blocks container deployments; needs urgent attention.

---

## **6. Feature Requests & Roadmap Signals**  
- **Dashboard Themes** ([#18080](https://github.com/NousResearch/hermes-agent/issues/18080)): High-priority UI improvement likely in v2.0+.
- **Antigravity Integration** ([#32291](https://github.com/NousResearch/hermes-agent/issues/32291)): Multi-agent toolchains may be prioritized post-v1.x.
- **Cron Job Retry Logic** ([#32290](https://self)): Transient failures could become a configurable feature.

---

## **7. User Feedback Summary**  
**Pain Points**:  
- **Docker Permissions**: Multiple reports (#18482, #23402, #14448) show frustration with UID/mount configurations—needs clearer docs or defaults.  
- **Local Model Support**: DeepSeek-R1 tool enforcement bugs (#13659) highlight lack of flexibility for local LLMs.  
- **Dashboard UX**: Theme readability (#18080) and agent status board ([PR #32317](https://github.com/NousResearch/hermes-agent/pull/32317)) signal demand for observability.  

**Satisfaction**:  
- OAuth fixes (#32318) and platform adapters (Feishu/Discord) show responsiveness to edge cases.

---

## **8. Backlog Watch**  
- **Unresolved Critical**:  
  - [#18482](https://github.com/NousResearch/hermes-agent/issues/18482) (Docker permissions)  
  - [#32235](https://github.com/NousResearch/hermes-agent/issues/32235) (Cron skill scoping)  
- **Long-Term Needs**:  
  - Memory importance scoring (#12883) and Kanban FD pressure (#31736) require architectural review.

---

### **Project Health Summary**  
✅ **Active Development**: High Issue/PR volume with mixed priorities (stability + features).  
⚠️ **Stability Risks**: Docker/permission bugs need immediate action.  
🚀 **Community-Driven**: UI/UX and tool integration requests dominate discussions—align roadmap accordingly.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# **PicoClaw Project Digest – May 26, 2026**

---

## **1. Today's Overview**  
PicoClaw remains actively developed with **9 issues updated and 8 open PRs** in the last 24 hours, indicating steady maintenance and feature work. A **nightly build (v0.2.9-nightly.20260525)** was released, though marked as potentially unstable. No PRs were merged yet, suggesting a focus on review or testing before integration. Key themes include **security guards, streaming output, and model compatibility**, with several high-priority bugs flagged.

---

## **2. Releases**  
- **Nightly Build**: [v0.2.9-nightly.20260525.ab6d3946](https://github.com/sipeed/picoclaw/releases/tag/v0.2.9-nightly.20260525.ab6d3946)  
  - *Note*: Automated build; caution advised for unstable features.  
  - **Full Changelog**: [Compare v0.2.9…main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main).

---

## **3. Project Progress**  
No PRs merged today, but **8 active PRs** under review:  
- **Streaming Output (#2853)**: Adds `ChatStream` support for real-time token streaming via WebSocket (by @loafoe).  
- **SC³ Bot Channel (#2893)**: Implements Server酱³ Bot support (by @dtapps).  
- **PID Crash Fix (#2813)**: Fixes gateway startup crash due to stale PID reuse (by @mrigangha).  
- **Anthropic Model Fixes (#2940, #2942)**: Corrects API errors for `claude-opus-4-7` and `claude-sonnet-4.6` (by @LegendAlessandro-Liguori).  

*Key Focus*: Stability improvements (PID checks, SSL certs) and channel integrations.

---

## **4. Community Hot Topics**  
### **Top Active Issue**: [#1042 — exec工具路径验证问题](https://github.com/sipeed/picoclaw/issues/1042)  
- **14 comments**, 2 upvotes.  
- **Problem**: Safety guard blocks valid commands like `curl wttr.in/Beijing?T` due to overly strict path validation.  
- **Impact**: Critical for tooling flexibility; needs regex refinement in `guardCommand`.  

### **Top PR**: [#2813 — Stale PID Guard Fix](https://github.com/sipeed/picoclaw/pull/2813)  
- Resolves crashes when OS reuses PIDs of unrelated processes (e.g., `systemd-resolved`).  
- **User Demand**: High-priority bug (#2720) linked directly.

---

## **5. Bugs & Stability**  
| **Issue**               | **Severity** | **Status**                     | **Fix PR?**              |
|-------------------------|-------------|--------------------------------|--------------------------|
| [#2720] Stale PID Crash | High        | Open                           | ✅ (#2813)               |
| [#2887] RISC-V .deb Broken | Medium    | Open                           | ❌ (Needs investigation) |
| [#2943] WeChat GLM-5 Error | Low      | Open                           | ❌ (API-specific fix?)   |

- **Critical**: PID check fix (#2813) is merging soon; others require deeper analysis.

---

## **6. Feature Requests & Roadmap Signals**  
- **Streaming Output (#1950)**: Web chat users request real-time token streaming (now in progress via #2853).  
- **Channel Expansion**: SC³ Bot (#2893) reflects demand for Chinese notification integrations.  
- **Security Enhancements**: Path validation (#1042) may need overhaul in next release.  

*Predicted Next Features*: Streaming UI, more channel plugins, improved LLM prompt efficiency.

---

## **7. User Feedback Summary**  
- **Pain Points**:  
  - **Tool Safety Guards**: Overblocking valid commands (e.g., weather tools).  
  - **Historical Data Loss**: Users report missing earlier messages in logs (#2796).  
  - **Model Compatibility**: Anthropic API errors (temperature deprecated, ID format) (#2939, #2941).  
- **Satisfaction**: Stability fixes (PID, SSL) are appreciated; streaming features are highly anticipated.

---

## **8. Backlog Watch**  
- **High-Priority Unresolved Issues**:  
  - [#2887] RISC-V .deb incompatibility with OpenAI models → Needs platform-specific build fixes.  
  - [#2796] Conversation history truncation → Likely requires DB/schema update.  
- **Long-Term PRs**:  
  - [#2696] Dynamic MCP headers (#2696): Could enable advanced auth flows but lacks traction.  

**Action Needed**: Maintainers should triage RISC-V builds and history storage urgently.

---

### **Project Health Assessment**  
✅ **Strengths**: Rapid issue response, active community engagement, stability patches in progress.  
⚠️ **Risks**: Model compatibility gaps (Anthropic, GLM-5), path validation UX friction.  
📈 **Outlook**: Strong momentum toward streaming and multi-channel support; next release may focus on security and usability refinements.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# **NanoClaw Project Digest – May 26, 2026**  

## **1. Today's Overview**  
NanoClaw saw **high activity** over the last 24 hours, with **19 PRs updated** (14 open, 5 merged) and **4 issues updated** (3 open, 1 closed). No new releases were published. The project is actively addressing bugs (e.g., message delivery duplicates), feature gaps (Slack multi-workspace support), and stability fixes (group deletion errors). Slack integration improvements dominate recent work, suggesting ongoing focus on real-world deployment scalability.

---

## **2. Releases**  
*No new releases were announced today.*

---

## **3. Project Progress**  
- **Merged/Closed PRs**:  
  - #2526: Fixed `ncl groups delete` cascading deletes (resolved #2525’s foreign key constraint bug).  
  - #2592: Documented Teams CLI as an auto-credentials path (utility skill).  
  - #2612: Added `debug-issue` skill for incident triage.  
- **Open PRs Under Review**:  
  - #2619: Restores `/health` endpoint (regression fix from v2 rewrite).  
  - #2618: Reintroduces v1 image/voice/PDF attachments + `chat.onReaction`.  
  - #2615/#2614: Slack thread-context seeding (enables per-thread session awareness).  

*Key momentum*: Slack adapter enhancements (#2613, Socket Mode; #2615, thread parenting) are advancing core integrations.

---

## **4. Community Hot Topics**  
### **Top Issues by Engagement**  
- **[#2404](https://github.com/qwibitai/nanoclaw/issues/2404)**: *Double delivery when using `send_message` MCP tool + `<message>` blocks* (3 comments).  
  - **Need**: Fixing output duplication in mixed tool/message-block usage. Root cause lies in StdioServerTransport subprocess handling.  
- **[#1804](https://github.com/qwibitai/nanoclaw/issues/1804)**: *Support multiple concurrent Slack workspaces* (2 comments).  
  - **Need**: Dynamic channel registry to avoid token overwrites. Likely requires refactoring `channel-registry.ts`.  

### **Top PRs by Activity**  
- **#2618** (johnmathews): Restores v1 multimodal features (images, voice, PDFs). High demand for rich media support.  
- **#2617** (mmahmed): Adds `channelType` overrides for SDK routing. Signals need for flexible channel configuration.  

---

## **5. Bugs & Stability**  
| Issue | Severity | Status | Fix PR |  
|-------|----------|--------|--------|  
| [#2404](https://github.com/qwibitai/nanoclaw/issues/2404) | Medium | Open | Unassigned |  
| [#2506](https://github.com/qwibitai/nanoclaw/issues/2506) | Critical | Open | Unassigned | *(Silent response drops in <60s turns)* |  
| [#2525](https://github.com/qwibitai/nanoclaw/issues/2525) | High | Closed | #2526 | *(Group deletion FK error fixed)* |  

**Priority**: Address #2506 urgently—timeouts could disrupt agent workflows.

---

## **6. Feature Requests & Roadmap Signals**  
- **Slack Multi-Workspace Support** (#1804): Likely upcoming, given active development (#2613, #2615).  
- **Multimodal Restoration** (#2618): Images/voice/PDFs may return soon if tests pass.  
- **Thread Context Seeding** (#2614/#2615): Enhances Slack thread-awareness for better conversation modeling.  
- **Debugging Skill** (#2612): New self-service troubleshooting tool reduces maintainer load.  

*Roadmap Clues*: Focus on **integration robustness** (Slack, MCP) and **user experience** (media, debugging).

---

## **7. User Feedback Summary**  
- **Pain Points**:  
  - Silent failures in rapid-turn conversations (#2506) risk user frustration.  
  - Slack workspace limitations (#1804) hinder multi-channel deployments.  
- **Positive Signals**:  
  - Debugging skill (#2612) shows proactive effort to reduce ticket volume.  
  - Multimodal restoration (#2618) suggests strong demand for richer interactions.  

*Satisfaction*: Mixed—core functionality is stable, but edge cases (e.g., message duplication) need attention.

---

## **8. Backlog Watch**  
- **High-Priority Unaddressed Issues**:  
  - [#2404](https://github.com/qwibitai/nanoclaw/issues/2404): MCP tool conflicts require transport-layer changes.  
  - [#2506](https://github.com/qwibitai/nanoclaw/issues/2506): Timeout logic needs review (potential race condition).  
- **Long-Term Items**:  
  - End-to-end provider/model config (#1968) remains pending despite progress.  

*Recommendation*: Prioritize #2506 to prevent regressions in fast-paced interactions.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# **NullClaw Project Digest – May 26, 2026**  

## **1. Today's Overview**  
NullClaw saw moderate activity in the past 24 hours with **1 issue updated**, **2 PRs opened (1 merged)**, and no new releases. The project remains stable, with a mix of dependency updates (`busybox` bump via Dependabot) and feature additions (gateway methods). No critical blockers were identified, but an open issue regarding outdated Zig version documentation needs attention. [View Activity](https://github.com/nullclaw/nullclaw/commits/master)  

---

## **2. Releases**  
*No new releases were published today.*  

---

## **3. Project Progress**  
- **Merged PR #931**: Updated `busybox` from v1.37 to v1.38 in Docker dependencies ([PR Link](https://github.com/nullclaw/nullclaw/pull/931)).  
- **Open PR #933**: Adds authenticated `POST /media/transcribe` endpoint and extends config parsing for gateway/A2A/memory/audio handling ([PR Link](https://github.com/nullclaw/nullclaw/pull/933)).  

---

## **4. Community Hot Topics**  
- **Issue #932 (Open)**: Critical documentation bug—getting-started page specifies Zig 0.15.2, but builds fail due to missing `std.Io.Dir` (introduced in Zig 0.16.0). This affects users attempting setup ([Issue Link](https://github.com/nullclaw/nullclaw/issues/932)).  
  - *Underlying Need*: Users need accurate build instructions to avoid frustration during onboarding.  

---

## **5. Bugs & Stability**  
- **Severity: High (Documentation Bug)**:  
  - Issue #932 could mislead developers into using unsupported Zig versions, causing build failures.  
  - No fix PR exists yet; maintainer intervention is needed to update docs or clarify requirements.  

---

## **6. Feature Requests & Roadmap Signals**  
- **Gateway Enhancements (#933)**: New `transcribe` API and expanded config parsing suggest growing focus on multimodal AI integrations (audio, memory, A2A).  
- *Prediction*: Next release may include STT provider support and improved gateway security (token hashing/timeouts).  

---

## **7. User Feedback Summary**  
- **Pain Points**:  
  - Build process complexity (Zig version mismatch).  
  - Desire for clearer API documentation (e.g., gateway methods).  
- **Positive Signals**:  
  - Active contribution from external devs (DonPrus, Dependabot) indicates healthy community engagement.  

---

## **8. Backlog Watch**  
- **Critical Unresolved Items**:  
  - **Issue #932**: Must be addressed promptly to prevent user attrition during setup.  
  - **PR #933**: Needs review/testing before merging; could impact roadmap timelines.  

### **Project Health Summary**  
✅ **Stability**: No crashes/regressions reported.  
⚠️ **Attention Needed**: Documentation accuracy (#932) and pending PR reviews (#933) are priorities.  
🔍 **Growth Focus**: Gateway features align with broader AI agent trends (multimodal workflows).  

[GitHub Repository](https://github.com/nullclaw/nullclaw) | [Activity Dashboard](https://github.com/nullclaw/nullclaw/pulse)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# **IronClaw Project Digest – May 26, 2026**

---

## **1. Today's Overview**  
IronClaw saw **high activity** with **22 issues updated** (18 open) and **50 PRs updated** (40 open), reflecting active development on multi-tenant security, Reborn integration, and tool execution audits. The project is focused on **attested-signing substrate**, **Reborn WebUI porting**, and **tool-execution invariant enforcement**. No new releases were published, but several critical PRs addressing security and infrastructure are under review.

---

## **2. Releases**  
*No new releases this week.*  

---

## **3. Project Progress**  
### **Merged/Closed PRs (Highlights)**  
- **Attested-Signing Substrate (#3961–#3997):**  
  - **PR #3961** (`ironclaw_attestation` crate) and **PR #3963** (sealed grant store + signing ledger) laid groundwork for multi-chain signing (#3965, #3994).  
  - **PR #3992** (WalletConnect backend) and **PR #3993** (NEAR redirect provider) enable external wallet auth.  
  - **PR #3996** adds durable PostgreSQL/libSQL stores for attestation broadcasts.  
  - **PR #4015** raises attested gates in Reborn loops for custodial signing.  
- **Tool-Execution Audits (#4019 Steps):**  
  - **PR #4021** (CI boundary test) prevents bypasses of the `dispatch` funnel.  
  - **PR #4023–#4026** migrate chat, scheduler, engine-v2 effects through audited dispatch.  
  - **Regression fix (#4022):** HTTP response errors now recoverable (prevents run-aborts).  
- **Reborn WebUI (#3886, #3807, #3811):**  
  - **Slack MVP (#3857)** and **WebChat v2 ingress (#3815)** progress toward Reborn-native channels.  

---

## **4. Community Hot Topics**  
### **Top Issues by Engagement**  
1. **[#3259](https://github.com/nearai/ironclaw/issues/3259)**: *Publish 0.25.0–0.27.0 to crates.io*  
   - **9 comments**: Downstream users pinned to outdated `0.24.0` due to CVEs in Wasmtime 28.x. High priority for release hygiene.  
2. **[#4019](https://github.com/nearai/ironclaw/issues/4019)**: *Enforce tool-execution invariants*  
   - **1 comment**: Audit bypasses in chat/scheduler/routines flagged as security risk. PR #4023+#4026 address this.  
3. **[#4051](https://github.com/nearai/ironclaw/issues/4051)**: *Multi-tenant attested-signing model*  
   - **1 comment**: Explicit isolation tests (#4054) validate tenant-scoped keys/grants.  
4. **[#3702](https://github.com/nearai/ironclaw/issues/3702)**: *Binary-E2E test framework*  
   - **4 comments**: Rust/integration-test parity reviewed; guides future testing strategy.  

---

## **5. Bugs & Stability**  
| Severity | Issue/PR | Status | Notes |
|----------|----------|--------|-------|
| **High** | **#3701** ([macOS gateway bind failure](https://github.com/nearai/ironclaw/issues/3701)) | Open | Gateway fails despite config; may block deployment. |
| **Medium** | **#4014 Regression (#4022)** | Fixed | HTTP response errors now recoverable (run-abort → model error). |
| **Low** | **#3447** ([Nightly E2E failure](https://github.com/nearai/ironclaw/issues/3447)) | Open | CI pipeline failed; may need log analysis. |

---

## **6. Feature Requests & Roadmap Signals**  
### **Upcoming Features (Predicted in Next Release)**  
- **Reborn WebUI Beta (#3807, #3886):** Native Slack/WebChat integration via Reborn.  
- **Attested-Signing (#4052, #4053):** Trust enrollment + fail-closed KMS guards.  
- **Tool-Execution Transparency (#4043):** Rate-limiting/credit consumption UX improvements.  
- **Tenant Sandbox (#4042):** Enhanced process capabilities for hosted execution.  

---

## **7. User Feedback Summary**  
- **Pain Points:**  
  - **Downstream dependency hell** (#3259): Users blocked on `0.24.0` due to Wasmtime CVEs. Urgent for maintainers to publish updates.  
  - **Tool-Execution Bypasses (#4019):** Security team flagged missing audits in chat/scheduler paths. PRs #4023–#4026 mitigate.  
  - **Discord Channel Bug (#4030):** WASM channel hangs at 100% CPU; investigation needed.  
- **Positive Signals:**  
  - Reborn migration (#3857, #3811) shows strong interest in modular, secure channels.  
  - Attested-signing (#3961–#3997) aligns with user demand for custody solutions.  

---

## **8. Backlog Watch**  
### **Critical Unaddressed Issues**  
1. **[#3259](https://github.com/nearai/ironclaw/issues/3259)**: *Release crates.io updates*.  
   - **Impact**: Blocks downstream adoption; requires maintainer attention.  
2. **[#3701](https://github.com/nearai/ironclaw/issues/3701)**: *macOS gateway bind failure*.  
   - **Risk**: Prevents local testing/deployment.  
3. **[#4059](https://github.com/nearai/ironclaw/issues/4059)**: *Reborn runtime error context*.  
   - **UX Gap**: Users need clearer error recovery hints.  

---

**Project Health**: **Active, Security-Focused**. Reborn integration and attested-signing are key themes. Prioritize crates.io release (#3259) and macOS fixes (#3701) to stabilize dependencies.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# **LobsterAI Project Digest - May 26, 2026**

---

## **1. Today's Overview**  
LobsterAI maintained steady development activity with **1 active issue** and **29 PRs updated in the last 24 hours**, including **15 merged/closed PRs**. No new releases were announced today. Key contributions focused on **performance optimization (e.g., token burn prevention), plugin management enhancements (OpenClaw integration), and bug fixes** (session freezing, gateway timeouts). The project shows consistent momentum in addressing user-reported issues.

---

## **2. Releases**  
*No new releases published today.*  
[GitHub Releases](https://github.com/netease-youdao/LobsterAI/releases)

---

## **3. Project Progress**  
**Merged/Closed PRs (15):**  
- **#2044**: Prevented subagent cleanup from blocking due to hook failures (`area: docs`).  
- **#2042**: Enabled automatic plugin discovery/sync from OpenClaw’s extension directory (`area: cowork`).  
- **#2011**: Added subagent session sidebar views with tree navigation (`area: main`).  
- **#2013**: Improved context window slider presets (K/M support) (`area: renderer`).  

**Key Fixes & Features:**  
- **Performance**: PR #2049 prevented infinite token burns during idle loops by enabling `tools.loopDetection`.  
- **OpenClaw Integration**: PRs #2045 and #2042 unified skill/plugin sync between LobsterAI and OpenClaw.  
- **UX**: PR #2048 filtered empty LLM streaming output for cleaner UI updates.  

---

## **4. Community Hot Topics**  
**#2046 [Agent Memory System] (Open)**  
🔗 [Issue #2046](https://github.com/netease-youdao/LobsterAI/issues/2046)  
**Summary**: Users demand persistent Agent memory across sessions, citing current reliance on manual title metadata (stored in browser IndexedDB, not accessible to AI).  
**Underlying Need**: Long-term contextual awareness is critical for productivity; this suggests a roadmap shift toward **automated session history indexing**.  

**Top Recent PRs (by engagement):**  
- **#2050**/#2049/#2047: Gateway timeout fixes and session freezes (all authored by *fisherdaddy*).  
- **#2045** (skill sync): High demand for interoperability with OpenClaw ecosystem.  

---

## **5. Bugs & Stability**  
**Critical Fixes (Today):**  
- **Session Freezing (#2047)**: Fixed by preventing blocked chat sends during gateway timeouts.  
- **Token Burn (#2049)**: Stalled tool loops consuming tokens resolved via loop detection.  
- **Gateway Restart (#2043)**: GitHub Copilot OAuth refresh no longer triggers unnecessary restarts.  

**Ongoing Issues:**  
- **Memory System (#2046)** remains open but has community backing (0 likes yet).  

---

## **6. Feature Requests & Roadmap Signals**  
**High-Priority User Requests:**  
✅ **Automated Session History** (#2046) → Likely next release focus (persistent titles + cross-session context).  
✅ **OpenClaw Ecosystem Sync** (#2045/#2042) → Unified plugin/skills management signals deeper collaboration plans.  
🚀 **Dynamic Model List Fetching** (#1522) – Already implemented (merged), suggesting ongoing provider API integrations.  

---

## **7. User Feedback Summary**  
**Pain Points:**  
- **Manual Data Maintenance**: Frustration over lack of automated memory (e.g., session titles lost post-refresh).  
- **Token Waste**: Infinite loops wasting tokens without user intervention (#2049).  
- **Plugin Fragmentation**: Need for seamless OpenClaw-LobsterAI interoperability (#2045).  

**Positive Indicators:**  
- Rapid response to critical bugs (e.g., session freezing resolved within 24h).  
- Clear roadmap signals (memory system, plugin sync) align with user needs.  

---

## **8. Backlog Watch**  
**Unaddressed Priorities:**  
- **#1206 (Log Export Timeout)**: PR #1515 proposes DEFLATE compression optimization—awaiting review.  
- **#1517 (OAuth Token Loss)**: Settings panel cleanup needed to prevent auth failures.  
- **Stale PRs (#1521, #1584)**:  
  - #1584: Agent ID generation risks data resurrection (needs UUID overhaul).  
  - #1521: Spurious gateway restarts from skill changes require root-cause analysis.  

**Action Required**: Maintainers should prioritize memory system (#2046) and agent ID safety (#1584) to prevent data corruption.  

--- 

**Overall Health**: ★★★★☆ (4/5)  
*Strong activity, clear user-driven direction, but memory system and data integrity need urgent attention.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# **Moltis Project Digest – May 26, 2026**  

## **1. Today's Overview**  
Moltis saw **high activity** over the past 24 hours, with **5 issues updated** (2 open, 3 closed) and **6 PRs merged/closed**, including a new release (**20260525.01**). The team addressed critical Docker build failures, introduced non-blocking agent spawning, and improved tool control mechanisms. One open issue (#868) seeks enhanced Landlock debug logging for security observability.  

---

## **2. Releases**  
- **v20260525.01** (May 25, 2026):  
  - Key improvements:  
    - Non-blocking `spawn_agent` support (#1067)  
    - Per-turn tool controls (`active_tools`, `tool_choice`) (#1069)  
    - Sub-agent preset editing (#1070)  
    - Moltis version exposed in prompts (#1068)  
  - No breaking changes reported.  

---

## **3. Project Progress (Merged PRs)**  
- **#1073**: Fixed Docker build failures (proc macro panic in docs.rs).  
- **#1069**: Added per-turn tool controls for drift-resistant routing (Anthropic/OpenAI support).  
- **#1070**: Enabled sub-agent preset creation/editing via Web UI.  
- **#1067**: Implemented non-blocking `spawn_agent` with task management tools.  
- **#1068**: Exposed Moltis version to LLM prompts for workflow tracking.  

---

## **4. Community Hot Topics**  
- **Issue #868 [Open]**: *Add Landlock access denial debug logging* ([link](https://github.com/moltis-org/moltis/issues/868))  
  - **Context**: Users need visibility into filesystem access denials for troubleshooting. Low engagement (👍: 1), but high relevance for security.  
- **PR #1069 [Closed]**: *Per-turn tool controls* ([link](https://github.com/moltis-org/moltis/pull/1069))  
  - **Impact**: Critical for LLM routing reliability (e.g., small models like Claude Haiku).  

---

## **5. Bugs & Stability**  
- **Critical**:  
  - **Issue #1072 [Closed]**: *WebSocket disconnect during LLM updates* ([link](https://github.com/moltis-org/moltis/issues/1072))  
    - **Resolution**: Likely fixed in recent WebSocket protocol updates (merged PR #1073).  
- **New Bug**:  
  - **Issue #1072 [Open]**: *Cron jobs marked "Host" run in sandbox* ([link](https://github.com/moltis-org/moltis/issues/1072))  
    - **Severity**: Medium (affects scheduled tasks). No fix PR yet.  

---

## **6. Feature Requests & Roadmap Signals**  
- **High Priority**:  
  - **Non-blocking workflows** (#1067, #1004): Users want parallel agent execution without blocking parent sessions.  
  - **Tool filtering** (#1011): Small LLMs need forced tool-choice validation to avoid drift.  
- **Likely Next Version**:  
  - Landlock debug logging (#868) and cron job fixes (#1072) may target v20260526.  

---

## **7. User Feedback Summary**  
- **Pain Points**:  
  - **Security**: Demand for granular Landlock observability (#868).  
  - **Performance**: Blocking `spawn_agent` limits scalability (#1004, #1067).  
  - **UX**: Sub-agent preset editing (#1070) addresses configuration friction.  
- **Satisfaction**: High on tool control improvements (#1069); mixed on cron behavior (#1072).  

---

## **8. Backlog Watch**  
- **Needs Attention**:  
  - **PR #1071 [Open]**: *Fix CodeQL scanning alerts* ([link](https://github.com/moltis-org/moltis/pull/1071))  
    - **Risk**: Unpatched vulnerabilities in DOM insertion/secret handling.  
  - **Issue #868**: Low traction; may require maintainer outreach or docs update.  

---  
**Project Health**: **Green**. Strong momentum with feature parity and stability improvements, but security/cron bugs need follow-up.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

---

# **CoPaw Project Digest – May 26, 2026**

---

## **1. Today's Overview**
CoPaw (QwenPaw) saw a **highly active development cycle** today with **42 updated issues** and **44 merged PRs**, indicating robust community engagement and rapid iteration. Notably, **one new beta release (v1.1.9-beta.1)** was published with bug fixes, plugin reload UI improvements, and test coverage expansion. The project is addressing critical bugs in the Console UI (e.g., tool call visibility, memory management), while also advancing desktop experience enhancements like dark mode support and auto-update flows.

---

## **2. Releases**
### **v1.1.9-beta.1** ([Release Notes](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.9-beta.1))
**Key Changes:**
- **Console UX:** Reloads page after successful plugin install/uninstall ([#4588](https://github.com/agentscope-ai/QwenPaw/pull/4588)).
- **Testing:** Expanded integration test coverage + tiered CI gates for Sprints 1.1+1.2 ([#4674](https://github.com/agentscope-ai/QwenPaw/pull/4674)).
- **Desktop Support:** Tauri 2.x desktop app branding + auto-update flow ([#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)).

---

## **3. Project Progress**
**Merged PRs Today:**
- **OpenCode Provider Fix:** Slimmed model list to intersection models between Zen and Go endpoints to prevent API errors ([#4660](https://github.com/agentscope-ai/QwenPaw/pull/4660)).
- **Dark Mode Coding IDE:** Added VS Code-like in-browser coding mode with Git/file management ([#4578](https://github.com/agentscope-ai/QwenPaw/pull/4578)).
- **Security Tests:** Phase 1+2 unit tests added (967 tests, 89% security coverage) ([#4467](https://github.com/agentscope-ai/QwenPaw/pull/4467)).
- **Token Usage Visibility:** Per-conversation token/context usage badges now streamed in UI ([#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433)).

---

## **4. Community Hot Topics**
### **Top Issues by Engagement:**
#### **🔴 [CLOSED] Chat History Disappears (#4620)**
- **Issue:** Critical bug where chat history fails to persist across sessions (12 comments).  
  **Fix:** Likely tracked in ongoing session/file rollback PR [#3346](https://github.com/agentscope-ai/QwenPaw/issues/4620).

#### **🔴 [OPEN] Tool Call UI Not Displaying (#4644)**
- **Issue:** Tool calls (non-read_file) intermittently require page refresh (10 comments).  
  **Root Cause:** Frontend streaming or backend event handling gaps.

#### **🟠 [OPEN] Memory System "Only Records No Learns" (#4652)**
- **User Request:** Agent logs raw data without summarization/linking (3 comments).  
  **Signal:** Suggests need for AI-powered memory aggregation in next version.

#### **🟡 [OPEN] Desktop Startup Slow (#4664)**
- **Feedback:** Windows users report ~40s startup time (2 comments).  
  **PR:** Tauri auto-update may address performance via binary packaging ([#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669)).

---

## **5. Bugs & Stability**
| **Severity** | **Bug** | **Status** | **Fix PR** |
|--------------|---------|------------|------------|
| 🔴 High | **Chat history loss (#4620)** | Closed | In progress [#3346](https://github.com/agentscope-ai/QwenPaw/pull/3346) |
| 🟠 Medium | **Tool call UI glitch (#4644)** | Open | Under review |
| 🟠 Medium | **Memory system no learning (#4652)** | Open | Unassigned |
| 🟡 Low | **DingTalk API channel (#2703)** | Closed | Historical |

---

## **6. Feature Requests & Roadmap Signals**
- **📌 High Priority:**
  - **Memory System Enhancement:** Users demand automated summarization, status tracking, and cross-session linking (Issue #4652).
  - **Desktop Performance:** Tauri migration targets faster startup/icon fixes ([#3729](https://github.com/agentscope-ai/QwenPaw/pull/3729)).
  - **Time Stamps:** Request for message timestamps in console UI ([#4662](https://github.com/agentscope-ai/QwenPaw/issues/4662)).

- **🚀 Planned:**
  - **Coding Mode Dark Theme:** PR #4671.
  - **Auto-Update Flow:** Desktop Tauri implementation (#4669).

---

## **7. User Feedback Summary**
- **✅ Satisfaction:** New features like coding mode and token usage visibility are well-received.
- **❌ Pain Points:**
  - **Windows Desktop:** Slow startup, Python icon misconfiguration (#4664, #3405, #4158).
  - **Memory Management:** Users frustrated by unorganized logs ("only records, no learns") (#4652).
  - **UI Bugs:** Markdown table line breaks fail (#4497), file blocks break reasoning content (#4675).

---

## **8. Backlog Watch**
| **Priority** | **Unresolved Issue/PR** | **Status** | **Notes** |
|--------------|------------------------|------------|----------|
| 🔴 High | **Session/File Rollback (#3346)** | Open | Critical for data integrity |
| 🟠 Medium | **Tool Call Streaming (#4644)** | Open | Blocks real-time UX |
| 🟡 Low | **Desktop Icon Fixes (#3729)** | Merged | Partial fix; needs testing |

---

**Health Check:** CoPaw remains **actively maintained**, with strong momentum in core stability (memory, UI) and expanding feature scope (coding, desktop). Community engagement signals focus on **data organization** and **performance**. 🚀

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest - 2026-05-26**  

---

## **1. Today's Overview**  
ZeroClaw saw **high activity today**, with **26 issues updated** (19 open, 7 closed) and **50 PRs updated** (34 open, 16 merged). The project is actively addressing critical bugs in sandboxing (`Bubblewrap` on Fedora), provider compatibility (`Z.AI`/`Gemini`), and security (tool allowlisting). Recent PRs focus on WebSocket session persistence, OAuth provider auth fixes, and browser compatibility banners. No new releases were published.  

---

## **2. Releases**  
*No new releases this week.*  

---

## **3. Project Progress**  
### **Merged Fixes & Features:**  
- **[PR #6884](https://github.com/zeroclaw-labs/zeroclaw/pull/6884)**: Fixed `web_fetch` tool truncating responses due to `max_response_size=0` misconfiguration.  
- **[PR #6933](https://github.com/zeroclaw-labs/zeroclaw/pull/6933)**: Preserves WebSocket steering transcripts during streaming turns, improving session continuity.  
- **[PR #6928](https://github.com/zeroclaw-labs/zeroclaw/pull/6928)**: Validates provider aliases during onboarding, fixing misconfigured model endpoints.  
- **[PR #6935](https://github.com/zeroclaw-labs/zeroclaw/pull/6935)**: Restored missing `RouterModelProvider::stream_chat_with_system` for system-prompt streaming.  

---

## **4. Community Hot Topics**  
### **Top Active Issue:**  
- **[Issue #4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)**: **Logo redesign request** (👍2, 10 comments). Community engagement suggests branding is a priority.  
- **[Issue #5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122)**: **Security-critical bug** in `web_fetch`’s private host validation (👍0, 3 comments). High severity, low community traction—likely internal-facing.  
- **[RFC #6883](https://github.com/zeroclaw-labs/zeroclaw/issues/6883)**: **Reply-message constructor pattern** (👍0, 2 comments). Architectural simplification requested by maintainers.  

---

## **5. Bugs & Stability**  
### **Critical Bugs (Severity S1-S2):**  
| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| **[#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302)** | S1 (Gemini 400) | Open | None |
| **[#6878](https://github.com/zeroclaw-labs/zeroclaw/issues/6878)** | S2 (Fedora 43 Bubblewrap) | Closed | N/A |
| **[#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)** | S1 (Sandbox Python Skills) | Closed | N/A |
| **[#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914)** | S2 (Tool Allowlist) | Blocked | **[PR #6920](https://github.com/zeroclaw-labs/zeroclaw/pull/6920)** |

**Notable:**  
- **Gemini 400 (#6302)**: LLM history serializer violates provider constraints; blocking API integration.  
- **Sandbox (#5722)**: Critical for skills; resolved but may need regression testing.  
- **Tool Allowlist (#6914)**: Security fix pending maintainer review.  

---

## **6. Feature Requests & Roadmap Signals**  
### **High-Risk Upcoming Features:**  
- **[RFC #6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)**: "Everything as a plugin" unification (integrations + WASM plugins). Likely v0.8+ roadmap.  
- **[RFC #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)**: **Computer-use support** (screen interaction like Codex/Peekaboo). Major UX upgrade.  
- **[#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)**: Skills UX improvements (CLI, loader, sandbox test harness).  

---

## **7. User Feedback Summary**  
### **Pain Points:**  
- **Security**: Sandbox failures (#5722, #6878) and tool allowlist gaps (#6914) signal strong demand for hardened execution.  
- **Providers**: Z.AI (#5636), Gemini (#6302), and OpenAI OAuth (#6908) are frequent breaking points—users expect seamless multi-provider support.  
- **UX**: Logo (#4710) and skills documentation (#6253) reflect community desire for polish.  
- **Docs**: Windows setup (#6102) and browser requirements (#6921) highlight incomplete onboarding guidance.  

---

## **8. Backlog Watch**  
### **Unresolved Critical Issues Needing Attention:**  
- **[#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)**: **153 lost commits** in bulk revert—audit for recovery needed.  
- **[#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916)**: Skill memory OOMs (shell tools) require runtime process limits.  
- **[#6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917)**: Composio action-scoped permissions—security enhancement.  
- **[#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915)**: Skill-scoped tool elevation (defense-in-depth).  

**Action Items:** Maintainers should prioritize these for v0.8.0 stability.  

--- 

**Overall Health**: ZeroClaw is **actively evolving**, with strong focus on **security**, **provider interoperability**, and **UX refinements**. High bug resolution rates (+16 PRs merged) indicate robust maintenance.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*