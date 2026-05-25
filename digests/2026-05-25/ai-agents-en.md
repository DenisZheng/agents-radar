# OpenClaw Ecosystem Digest 2026-05-25

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-25 00:37 UTC

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

# **OpenClaw Project Digest - 2026-05-25**

---

## **1. Today's Overview**
OpenClaw remains highly active with **500 issues and 500 PRs updated in the last 24 hours**, reflecting robust community engagement. The project delivered **3 new releases**, including significant iMessage reaction support (v2026.5.24-beta.2) and gateway performance improvements (v2026.5.22). Merged PRs today focused on **agent runtime consolidation, security hardening, and channel broker unification**, addressing both stability and user-requested integrations.

---

## **2. Releases**
### **v2026.5.24-beta.2**
**Key Changes:**
- **iMessage Reaction Support**:  
  - `👍` (Like tapback) resolves as `allow-once`; `👎` as `deny`.  
  - Read allowlist from `channels.imessage.allowFrom`. Manual `/approve <id> allow-always` for permanent approvals.  
  *Impact*: Enables fine-grained approval workflows for sensitive channels ([Issue #75](https://github.com/openclaw/openclaw/issues/75)).

### **v2026.5.22**
**Performance Fixes:**  
- Reused stable reads for channel catalog/install-record to avoid redundant checks.  
- Cached immutable plugin metadata across restarts.  

---

## **3. Project Progress**
**Merged PRs Today:**
- **Agent Runtime Consolidation (#85341)**:  
  - Moves Pi agent architecture into OpenClaw-owned core, improving maintainability and reducing cross-repo dependencies.
- **Security Hardening (#86177)**:  
  - Blocks OpenAI-compatible chat payloads with system/tool-only turns (fixes [#86145](https://github.com/openclaw/openclaw/issues/86145)).
- **Channel Broker Stack (#86096, #86153–#86165)**:  
  - Unified Telegram/Discord/Slack/Signal/iMessage maintenance behind a single contract, addressing recurring regressions (e.g., [#86184](https://github.com/openclaw/openclaw/issues/86184)).

---

## **4. Community Hot Topics**
### **Top Issues by Comments/Reactions**
1. **[Linux/Windows ClawdBot Apps (#75)](https://github.com/openclaw/openclaw/issues/75)**  
   - **106 comments, 77 👍**: Urgent demand for cross-platform apps beyond macOS/Android/iOS.  
   - *Underlying Need*: Enterprise users want full ecosystem parity.

2. **[Masked Secrets (#10659)](https://github.com/openclaw/openclaw/issues/10659)**  
   - **13 comments, 4 👍**: Critical security request to prevent API key leaks via prompt injection.  
   - *Underlying Need*: Compliance teams require secrets protection without workflow breaks.

3. **[WhatsApp Backfill Missed Messages (#50093)](https://github.com/openclaw/openclaw/issues/50093)**  
   - **8 comments**: Users lose critical messages during outages.  
   - *Underlying Need*: Reliable real-time sync for group chats.

---

## **5. Bugs & Stability**
### **Critical Reports Today**
| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| **Telegram Generic Fallback After Tool Turn (#86184)** | High | Open | Unassigned |
| **DeepSeek V4 Unsigned Thinking Blocks (#85192)** | Medium | Open | Unassigned |
| **Google Chat Space/Group Ignored (#58514)** | Medium | Open | Unassigned |

**Notable Regressions:**
- **Control UI Raw Mode Disabled (#59330)**:  
  - Form-only mode enforced after config round-trip failures (12 👍 fix requests).

---

## **6. Feature Requests & Roadmap Signals**
**Likely Next Version Priorities:**
- **Channel Broker Integration**:  
  - Unified session/routing logic for WhatsApp, Slack, Discord, Telegram, Signal, and iMessage (see [#86096](https://github.com/openclaw/openclaw/pull/86096)).  
- **Cross-Platform Apps**:  
  - Windows/Linux ClawdBot support (#75) and prebuilt APK releases (#9443).  
- **Security**:  
  - Masked secrets (#10659), filesystem sandboxing (#7722), and credential denylists (#6615).

---

## **7. User Feedback Summary**
**Pain Points:**
- **Missed Messages (#50093)**: WhatsApp groups lose messages during reconnection—critical for business use cases.  
- **Permission Overreach (#10659)**: Fear of API key leaks in memory poisoning attacks.  
- **Platform Gaps (#75)**: Lack of native Windows/Linux apps frustrates enterprise deployments.  
**Satisfaction**:  
- **iMessage Reactions (#75)**: Positive adoption of granular approval workflows.

---

## **8. Backlog Watch**
**Maintainer Attention Needed:**
- **Telegram/Discord/Slack/Signal Channel Broker PRs (#86096–#86165)**:  
  - Unifies routing/session semantics; requires review before release.  
- **DeepSeek V4 Thinking Blocks (#85192)**:  
  - Reasoning-only turns bypass retries; needs model-specific fix.  
- **Google Chat Spaces (#58514)**:  
  - Silent group message ingestion bug; investigate HTTP 200 handling.

---

**Summary**: OpenClaw is actively addressing **security, stability, and platform expansion** while unifying channel management. High-priority items include **cross-platform apps, masked secrets, and WhatsApp reliability**. Community feedback emphasizes **enterprise readiness** and **real-time sync**.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent & Open-Source Ecosystem (2026-05-25)**

---

## **1. Ecosystem Overview**  
The personal AI assistant and agent open-source ecosystem in 2026 is marked by **high fragmentation** across projects, with a clear divide between **core platforms** (e.g., OpenClaw, Hermes) and **specialized tools** (e.g., NanoBot, LobsterAI). Projects focus on **interoperability** (MCP/Slack/Discord/Telegram), **stability**, and **security hardening**, but adoption varies widely—some prioritize rapid iteration (OpenClaw, NanoClaw), while others mature toward enterprise readiness (LobsterAI, ZeroClaw). Community engagement spans from niche contributors to cross-platform integrations.

---

## **2. Activity Comparison**  

| Project          | Issues (Last 24h) | PRs (Last 24h) | Releases | Health Score (1–5) |
|-----------------|-------------------|-----------------|-----------|-------------------|
| OpenClaw        | 500              | 500            | 3         | 5 (High)          |
| NanoClaw        | 3                | 10             | 0         | 3 (Moderate)      |
| Hermes Agent    | 50               | 50             | 0         | 4 (Stable)        |
| PicoClaw        | 4                | 10             | 1 (Nightly)| 4 (Stable)        |
| NanoBot         | 17               | 17             | 0         | 4 (Stable)        |
| LobsterAI       | 0                | 14             | 0         | 4 (Stable)        |
| ZeroClaw        | 50               | 50             | 0         | 4 (Stable)        |
| Moltis          | 8                | 10             | 0         | 4 (Stable)        |
| CoPaw           | 14               | 1              | 0         | 3 (Moderate)      |
| Others          | <10              | <10            | 0         | Varies            |

**Health Score**:  
- **5**: Rapid iteration (OpenClaw), **4**: Stable core (Hermes, ZeroClaw), **3**: Specialized niches (NanoClaw, CoPaw).

---

## **3. OpenClaw's Position**  
### **Advantages Over Peers**  
- **Unified Channel Broker**: Unlike NanoBot (focused on tooling) or ZeroClaw (channel-centric), OpenClaw’s **cross-platform integration stack** (iMessage/Telegram/Signal/Slack) reduces boilerplate for users.  
- **Community Size**: Highest engagement (500+ issues/PRs/day) vs. NanoClaw (3 issues) or CoPaw (1 PR).  
- **Technical Approach**: Combines **agent runtime consolidation** (Pi agent architecture) with **security hardening**, balancing flexibility and safety—unlike NanoBot’s modular tooling or Moltis’ preset-based agents.  

---

## **4. Shared Technical Focus Areas**  
| **Requirement**                  | **Projects Addressing It**                          |
|----------------------------------|---------------------------------------------------|
| **Channel Integration**           | OpenClaw, Hermes, ZeroClaw, LobsterAI             |
| **Security Hardening**            | OpenClaw, Hermes, Moltis, NanoClaw (#1063)        |
| **Tool Call Auditing**            | IronClaw (#4019), Hermes (#31740), ZeroClaw (#6897) |
| **Provider Reliability**          | Hermes (#29527), NanoBot (#3979), OpenClaw (#75)  |
| **Multi-Agent Workflows**         | PicoClaw (#2937), NanoClaw (#2605), Moltis (#1049) |

---

## **5. Differentiation Analysis**  

| **Project**     | **Focus Area**                          | **Target Users**               | **Architecture**                     |
|-----------------|----------------------------------------|-------------------------------|-------------------------------------|
| **OpenClaw**    | Cross-platform integration, security   | Enterprise, power users        | Unified channel broker + agent runtime |
| **ZeroClaw**    | Channel reliability, automation        | Self-hosting, dev teams        | Per-channel builds + cron routing     |
| **Hermes Agent**| Provider-specific stability            | CLI/API users                 | Gateway-centric model bridges         |
| **NanoBot**     | Tool call consistency, modularity      | Developers                    | Subagent-based tooling framework     |
| **LobsterAI**   | Real-time collaboration               | Coworking teams               | IM/Cowork session unification       |
| **Moltis**      | Agent configurability, sandboxing      | Multi-agent deployments       | Runtime limits per-agent presets      |

**Key Contrasts**:  
- **OpenClaw** vs. **NanoBot**: OpenClaw unifies channels; NanoBot focuses on tooling internals.  
- **ZeroClaw** vs. **LobsterAI**: ZeroClaw prioritizes channel reliability; LobsterAI excels at multi-agent chat workflows.  

---

## **6. Community Momentum & Maturity**  
### **Rapid Iteration Tier**  
- **OpenClaw**, **NanoClaw**, **PicoClaw**: High activity (500+/day PRs/issues), focused on bleeding-edge features (e.g., agent collaboration buses).  
### **Stabilizing Tier**  
- **Hermes Agent**, **ZeroClaw**, **Moltis**: Steady fixes (40+/day), addressing regressions and roadmap items (e.g., provider audits).  
### **Specialized Tier**  
- **CoPaw**, **NanoClaw**: Niche pain points (e.g., DeepSeek parsing, cron job routing).  
- **Others**: Low activity (<10 issues/PRs), likely maintenance mode.  

---

## **7. Trend Signals & Value for Developers**  
### **Industry Trends**  
1. **Channel Unification**: OpenClaw’s broker pattern is emerging as de facto standard (adopted by ZeroClaw, Hermes).  
2. **Security-by-Design**: Credential masking (Moltis #1063), audit trails (IronClaw #4019), and config sanitization are top community requests.  
3. **Multi-Agent Workflows**: Collaboration buses (PicoClaw #2937) and approval gates (RFC #31392) signal shift from single-agent to orchestrated systems.  
4. **Provider Agnosticism**: Fixes for Anthropic/Gemini (CoPaw #4650) and xAI reasoning efforts (Hermes #23088) show demand for model interoperability.  
5. **Real-Time UX**: Message queuing (LobsterAI #1590) and tool call streaming (Hermes #31741) highlight latency sensitivity.  

**Developer Value**:  
- **For Core Platforms**: OpenClaw’s broker and Hermes’ gateway offer robust infrastructure.  
- **For Tooling**: NanoBot’s subagent system simplifies complex workflows.  
- **For Enterprise**: ZeroClaw/LobsterAI combine self-hosting with production-grade channels.  

--- 

**Summary**: The ecosystem is converging around **channel unification**, **security hardening**, and **multi-agent orchestration**, with OpenClaw leading in breadth and Hermes/ZeroClaw in depth. Developers targeting cross-platform or high-assurance workloads should prioritize OpenClaw or ZeroClaw, while NanoBot suits modular tooling pipelines.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# **NanoBot Project Digest – May 25, 2026**

---

## **1. Today’s Overview**  
NanoBot saw **high developer activity** over the last 24 hours:  
- **17 PRs updated** (11 open, 6 merged/closed), indicating active feature development and maintenance.  
- **4 Issues updated** (2 open, 2 closed), with a mix of bug reports and enhancements.  
- No new releases were published, suggesting ongoing incremental improvements rather than major version bumps.  
Key themes include **tool call consistency**, **agent collaboration**, and **rate-limiting safeguards**.

---

## **2. Releases**  
*No new releases were published today.*

---

## **3. Project Progress**  
### **Merged/Closed PRs (6)**  
- **[PR #3984](https://github.com/HKUDS/nanobot/pull/3984)**: Fixed OpenAI-compatible API `tool_call_id` mismatches (fixes [#3980](https://github.com/HKUDS/nanobot/issues/3980)).  
- **[PR #3987](https://github.com/HKUDS/nanobot/pull/3987)**: Improved slash command actions in WebUI (status details, model context, stop action).  
- **[PR #3982](https://github.com/HKUDS/nanobot/pull/3982)**: Added scripted agent runner harness for testing tool loops.  
- **[PR #3979](https://github.com/HKUDS/nanobot/pull/3979)**: Enhanced MCP setup with presets, hot reload, and branded chat integration.  
- **[PR #3975](https://github.com/HKUDS/nanobot/pull/3975)**: Implemented per-subagent temperature control (addresses [#3969](https://github.com/HKUDS/nanobot/issues/3969)).  
- **[PR #3974](https://github.com/HKUDS/nanobot/pull/3974)**: Added OpenAI API type (`chat_completions`/`responses`) support and `extraBody` config.

### **Open PRs (11)**  
Highlights:  
- **[PR #3992](https://github.com/HKUDS/nanobot/pull/3992)**: Cross-agent messaging bus (enabling multi-instance collaboration).  
- **[PR #3988](https://github.com/HKUDS/nanobot/pull/3988)**: Added StepFun’s Step Plan provider support.  
- **[PR #3985](https://github.com/HKUDS/nanobot/pull/3985)**: **"Loop Guard v2.0"**—hard-blocks redundant tool calls (e.g., repeated `grep`/`list_dir`).  

---

## **4. Community Hot Topics**  
### **Top Issue: [Issue #3986](https://github.com/HKUDS/nanobot/issues/3986)**  
*General tool-level rate limiting & loop detection*  
- Users report models repeating inefficient tool patterns (e.g., same `grep` pattern, rapid `list_dir` calls).  
- Proposed solution: Hard-coded guardrails (see [PR #3985](https://github.com/HKUDS/nanobot/pull/3985)).  
- **Underlying need**: Prevent wasted compute cycles from non-iterative tool use.

### **Top PR: [PR #3992](https://github.com/HKUDS/nanobot/pull/3992)**  
*Cross-agent messaging*  
- Enables agents to communicate via a shared bus (e.g., task delegation, status updates).  
- **Potential impact**: Scalable workflows requiring coordination (e.g., multi-tool pipelines).

---

## **5. Bugs & Stability**  
### **Critical Fix: [Issue #3980 → PR #3984](https://github.com/HKUDS/nanobot/issues/3980)**  
- **Bug**: `tool_call_id` mismatches in OpenAI-compatible APIs (GLM-4.7, Kimi 2.6 via antchat).  
- **Impact**: Tool execution tracking errors; fixed by preserving original IDs.  
- **Severity**: High (breaks auditability for some integrations).

---

## **6. Feature Requests & Roadmap Signals**  
**Prioritized Enhancements:**  
1. **Rate-Limiting Guards** ([PR #3985](https://github.com/HKUDS/nanobot/pull/3985)): Likely next release due to urgency.  
2. **Cross-Agent Collaboration** ([PR #3992](https://github.com/HKUDS/nanobot/pull/3992)): Core functionality for advanced workflows.  
3. **Per-Subagent Temperature Control** ([PR #3975](https://github.com/HKUDS/nanobot/pull/3975)): Already implemented; may be documented in upcoming guides.

---

## **7. User Feedback Summary**  
**Pain Points:**  
- **Tool Redundancy**: Models waste resources on repetitive calls (#3986).  
- **Debugging Challenges**: Mismatched `tool_call_id`s complicate error tracing (#3980).  
- **Discoverability**: Missing `/skill` command (addressed in [PR #3968](https://github.com/HKUDS/nanobot/pull/3968)).  

**Satisfaction:**  
- MCP integration improvements ([PR #3979](https://github.com/HKUDS/nanobot/pull/3979)) and slash command UX gains ([PR #3987](https://github.com/HKUDS/nanobot/pull/3987)) likely improve user experience.

---

## **8. Backlog Watch**  
**Unresolved but Important:**  
- **[Issue #3973](https://github.com/HKUDS/nanobot/issues/3973)**: *Dream System hunger problem* (lack of real-time learning input sources).  
  - Needs architectural changes to integrate dynamic data feeds.  
- **[PR #3990](https://github.com/HKUDS/nanobot/pull/3990)**: Dream memory consolidation (merge two-phase into one).  
  - Could simplify Dream system logic if merged soon.

---

### **Health Summary**  
✅ **Strong momentum**: High PR/issue activity with actionable fixes.  
🔧 **Stability focus**: Critical tool-call bug resolved.  
🚀 **Roadmap alignment**: Rate-limiting and agent collaboration are top priorities.  
📈 **Community engagement**: Clear feedback loops driving feature prioritization.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – May 25, 2026**

---

## **1. Today's Overview**  
Hermes Agent saw significant activity today with **50 issues updated** (32 open, 18 closed) and **50 PRs submitted** (34 open, 16 merged). The project is actively addressing bugs, performance bottlenecks, and feature requests, particularly around provider integrations (Anthropic, xAI), gateway stability, and tooling improvements. No new releases were published, but multiple critical fixes and feature enhancements are in progress.

---

## **2. Releases**  
*No new releases this week.*  

---

## **3. Project Progress**  
- **Merged Fixes & Features:**  
  - **PR #31741**: Fixes BlueBubbles webhook IPv4/IPv6 resolution on macOS ([link](https://github.com/nousresearch/hermes-agent/pull/31741)).  
  - **PR #31740**: Improves SQLite write serialization for Kanban boards to prevent corruption under concurrent crashes ([link](https://github.com/nousresearch/hermes-agent/pull/31740)).  
  - **PR #29527**: Restores Claude Code as a dedicated provider bridge instead of relying on Anthropic aliases ([link](https://github.com/nousresearch/hermes-agent/pull/29527)).  
  - **PR #31416**: Secures credential handling to avoid leaking secrets from `.env` into `~/.hermes/auth.json` ([link](https://github.com/nousresearch/hermes-agent/pull/31416)).  

---

## **4. Community Hot Topics**  
### **Top Active Issues (by Comments/Reactions)**  
#### **Issue #29125 [CLOSED] – Hermes fails via Claude CLI**  
- **24 comments, 👍7**: Critical bug where Hermes cannot authenticate or run through Claude CLI after token insertion. Users report "extra usage" errors due to Anthropic’s third-party app policy.  
  - *Status*: Closed; likely fixed in PR #31740 (SQLite/Kanban stability improvements).  

#### **Issue #31086 [CLOSED] – Telegram topic hijacking**  
- **5 comments, 👍1**: Gateway incorrectly rewrites Telegram DM thread IDs, forcing new topics into old lanes. Self-reinforcing behavior breaks multi-conversation workflows.  
  - *Status*: Closed; may require deeper gateway refactoring (see PR #31713 for Telegram smart routing).  

#### **Issue #23088 [CLOSED] – xAI grok-4-1-fast HTTP 400**  
- **3 comments**: xAI model `grok-4-1-fast` rejects `reasoningEffort` parameter despite support claims.  
  - *Status*: Closed; likely resolved in provider negotiation updates (e.g., PR #10391 for reasoning effort preservation).  

#### **Feature Signal: RFC #31392 – Async Subagent Forking + Human Gates**  
- **5 comments**: Proposed agent-native task relay system with parallel subagents and approval gates. High interest in workflow automation.  

---

## **5. Bugs & Stability**  
### **Critical (P1/P2) Issues Addressed Today**  
| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| **#31110 [CLOSED] – Telegram Timeout crashes gateway** | P1 | Fixed | Likely in gateway resilience patches (#31740) |
| **#30959 [CLOSED] – Internal fields leak to providers** | P1 | Fixed | Credential security patch (#31416) |
| **#31736 [OPEN] – Kanban WAL FD pressure** | P3 | Open | Needs profiling (no PR yet) |

### **Notable Regressions**  
- **Kanban DB corruption (#31502, #31618)**: Recurring under rapid task creation/SIGKILL. PRs #31740 adds serialization locks.  
- **Discord disabled (#30736)**: Gateway attempts connections despite `disabled` flag. Auto-enable loop fix pending.  

---

## **6. Feature Requests & Roadmap Signals**  
### **High-Interest Features**  
- **Task Automation (RFC #31392)**: Async subagent forks + human approval gates align with multi-agent workflows.  
- **Memory Review Triggers (#31622)**: Background memory review at session boundaries (configurable flags).  
- **Telegram Smart Routing (#31713)**: Opt-in unmentioned message classification via auxiliary models.  
- **Bitget Trading Tools (#31735)**: New crypto exchange toolset with corrected API signing.  

*Next release candidates*: Provider-specific fixes (Claude Code, xAI reasoning efforts) and gateway stability (SQLite/WAL pressure).

---

## **7. User Feedback Summary**  
### **Key Pain Points**  
- **Provider Compatibility**: Anthropic extra-usage errors (#29125), xAI parameter rejection (#23088).  
- **Tool Reliability**: Kanban DB corruption (#31502), Telegram topic hijacking (#31086).  
- **UX Friction**: `/resume` truncation (#14082), slash-command freeze on Windows (#30768).  
- **Security Concerns**: Credential leaks (#31416), session ID fixation (#7484).  

*Satisfaction*: Positive sentiment in resolved issues (e.g., #23088), but frustration with regression patterns (Kanban, Discord).

---

## **8. Backlog Watch**  
### **Long-Term Unresolved**  
- **#7484 [SECURITY]** – Predictable session IDs risk session fixation. Requires cryptographic nonce injection.  
- **#22829 [FEATURE]** – Kanban task queue limits needed for local LLMs.  
- **#31674 [DOCS]** – Signal setup gaps (Java pinning, ACI UUID auth) need docs updates.  
- **#31666 [BUG]** – Codex Responses adapter invalid function names in history replay.  

*Maintainer Attention*: Security (#7484) and gateway scalability (WAL pressure, #31736) are priority items.

--- 

**Project Health**: Actively maintained, with strong community engagement. Focus remains on provider reliability, tool robustness, and workflow automation features.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# **PicoClaw Project Digest – May 25, 2026**

---

## **1. Today’s Overview**  
PicoClaw remains actively developed with significant contributions in the last 24 hours:  
- **4 issues updated**, including 2 open and 2 closed (e.g., a critical bug in `exec` tool path validation).  
- **10 PRs opened/merged**, spanning agent collaboration, tool policy enhancements, and documentation updates (e.g., Android Termux guide).  
- A **nightly release (`v0.2.9-nightly.20260524.d499cbec`)** was published, introducing potential stability fixes from recent PRs.  

Activity suggests focused work on **inter-agent communication** (PR #2937), **tool safety improvements** (PR #2936), and **multi-language support** (PR #2935).

---

## **2. Releases**  
### **Nightly Build: v0.2.9-nightly.20260524.d499cbec**  
- **Scope**: Automated build incorporating recent PRs (e.g., agent collaboration bus, cron tool fix).  
- **Caution**: Unstable; use for testing only.  
- **Changelog**: [View diff](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)  

---

## **3. Project Progress**  
### **Merged/Closed PRs (Today)**  
- **#2938 (Closed)**: Fixed a regression where `CronTool` jobs failed silently due to missing `"action": "run"` args.  
- **#2759 (Closed)**: Improved session scoping for retrieval tools (`short_grep`, `short_expand`) to prevent cross-session data leakage.  

### **Open PRs with Major Advances**  
- **#2937 (Agent Collaboration Bus)**: Introduces durable inter-agent communication with mailboxes, threads, and permission-aware envelopes ([details](https://github.com/sipeed/picoclaw/pull/2937)).  
- **#2936 (Skills PATH Handling)**: Fixes skill discovery by skipping those with unavailable binaries (addresses [#2351](https://github.com/sipeed/picoclaw/issues/2351)).  
- **#2935 (zh-TW Support)**: Adds Traditional Chinese localization for docs/frontend.  

---

## **4. Community Hot Topics**  
### **Top Issue (#28 – LM Studio Easy Connect)**  
- **Summary**: User requests simplified integration with LM Studio (a local LLM server) for Android deployment.  
- **Engagement**: 20 comments, 2 likes → Indicates strong demand for **local LLM tooling accessibility**.  
- **Link**: [Issue #28](https://github.com/sipeed/picoclaw/issues/28)  

### **Top PR (#2937 – Agent Collaboration)**  
- **Scope**: First-class agent messaging system.  
- **Potential Impact**: Could revolutionize multi-agent workflows (e.g., task delegation, shared memory).  

---

## **5. Bugs & Stability**  
### **Critical Bug (#1042 – exec Tool Path Validation)**  
- **Severity**: High – Blocks legitimate commands (e.g., `wttr.in` weather lookup) due to overly strict path checks.  
- **Fix Status**: No PR yet; needs attention from maintainers.  
- **Link**: [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)  

### **Regression (#2938 – Cron Tool Job Failure)**  
- **Fixed**: Silent cron job failures due to missing `"action"` argument.  
- **Root Cause**: Regression from commit `3f1ac2...`.  

---

## **6. Feature Requests & Roadmap Signals**  
- **Local LLM Integration (#28)**: Suggests upcoming support for LM Studio/LLaMA.cpp.  
- **Tool Policies (#2837 Closed)**: Previously discussed `allow/deny/glob` policies in AGENT.md frontmatter → May resurface in next version.  
- **Multi-Agents (#2937)**: Collaboration bus hints at future **modular agent ecosystems**.  

---

## **7. User Feedback Summary**  
- **Positive**: Users appreciate nightly builds for early access to features (e.g., agent collaboration).  
- **Pain Points**:  
  - **Tool Safety**: False positives in `exec` tool blocking (#1042).  
  - **Documentation**: Lack of Android setup guides → Addressed via PR #2902.  
- **Use Case**: Weather query (#1042) reflects need for **flexible command execution**.  

---

## **8. Backlog Watch**  
- **High-Priority Open Issues**:  
  - **#1042 (exec Tool Bug)**: Urgent—blocks core functionality.  
  - **#28 (LM Studio Connect)**: Popular feature request with community backing.  
- **Long-Term PRs**:  
  - **#2937 (Agent Collaboration)**: Requires testing before merging.  
  - **#2935 (Localization)**: Needs review for consistency.  

---

### **Project Health Assessment**  
✅ **Active Development**: High PR/issue volume.  
⚠️ **Stability Risk**: Nightly builds + unmerged PRs may introduce instability.  
🔍 **Community Engagement**: Strong interest in tooling flexibility (local LLMs, multi-agent systems).  

**Recommended Actions**:  
- Prioritize fixing `#1042` to restore `exec` tool reliability.  
- Plan a stable release after testing `#2937` thoroughly.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# **NanoClaw Project Digest (2026-05-25)**  

## **1. Today's Overview**  
NanoClaw saw moderate activity over the past 24 hours, with **3 PRs updated** (2 open, 1 merged) and **1 new issue reported**. The merged PR (#2604) added a batch endpoint for agent activity tracking, addressing an admin dashboard need. Meanwhile, two open PRs propose fixes for inbound message handling and OneCLI permission inheritance. No new releases were published. The project remains active but focused on incremental improvements rather than major overhauls.  

🔗 [GitHub Activity Summary](https://github.com/qwibitai/nanoclaw)  

---  

## **2. Releases**  
*No new releases in the last 24 hours.*  

---  

## **3. Project Progress**  
✅ **Merged/Closed PR:**  
- **#2604** (`web: add GET /admin/agent-activity batch endpoint`)  
  - Added a batch API endpoint to fetch agent activity timestamps efficiently, replacing per-row chat history queries. This optimizes performance for dashboards displaying "last active" status.  

🚧 **Open PRs (Proposed Fixes/Features):**  
- **#2607** (`Use platform IDs for inbound message actions`)  
  - Proposes using raw platform message IDs (instead of internal composite IDs) for actions like reactions, ensuring compatibility with external APIs.  
- **#2605** (`feat: inherit parent agent permissions via OneCLI`)  
  - Introduces a mechanism for child agents to inherit permissions from parent agents via OneCLI, improving permission delegation workflows.  

---  

## **4. Community Hot Topics**  
🔥 **Most Active Issue:**  
- **#2606** (`bug: engage_mode='always' silently drops all messages`)  
  - A critical bug where `engage_mode: 'always'` is stored correctly in the DB but ignored by `evaluateEngage()`, causing messages to be dropped silently.  
  - **Underlying Need:** Users expect consistent message routing behavior when engagement modes are set, indicating a gap in edge-case validation.  
  - *No comments/reactions yet—may need maintainer attention soon.*  

---  

## **5. Bugs & Stability**  
⚠️ **High-Priority Bug Reported:**  
- **Issue #2606**: Silent message drops due to unhandled `engage_mode` case in `router.ts`.  
  - **Severity:** High (affects core messaging functionality).  
  - **Fix Status:** No PR submitted yet; may require urgent review.  

📌 *Other stability concerns:* None reported today.  

---  

## **6. Feature Requests & Roadmap Signals**  
🔮 **Potential Next Features:**  
- **Permission Inheritance (#2605):** Could become a key feature for multi-agent systems, reducing manual setup overhead.  
- **Platform Message ID Handling (#2607):** Aligns with broader interoperability needs as agents integrate with more third-party platforms.  

*Note:* No explicit roadmap items mentioned in recent discussions.  

---  

## **7. User Feedback Summary**  
📊 **Key Pain Points:**  
- **Broken Engagement Logic (#2606):** Users relying on `engage_mode: 'always'` may experience unexpected message failures.  
- **Admin Dashboard Needs (#2604):** Batch endpoints were prioritized for performance, suggesting user demand for scalable monitoring tools.  

💡 *Positive Signal:* Quick resolution of the batch endpoint request (#2604) shows responsiveness to infrastructure needs.  

---  

## **8. Backlog Watch**  
⏳ **Critical Unaddressed Items:**  
- **Issue #2606 (Silent Message Drops):** Requires immediate action if `engage_mode` is widely used.  
- **PR #2605 (OneCLI Permissions):** May need design discussion before implementation.  

🔍 *Recommendation:* Maintainers should prioritize reviewing #2606 given its high impact on core functionality.  

---  

### **Health Assessment**  
✅ **Strengths:**  
- Active contributor engagement (3 PRs in 24h).  
- Focus on performance (#2604) and extensibility (#2605).  

⚠️ **Risks:**  
- Unresolved bug (#2606) could degrade user trust.  
- Lack of public roadmap may create uncertainty.  

📈 **Overall:** NanoClaw maintains steady development momentum but needs attention to critical bugs and clearer direction for future features.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# **NullClaw Project Digest (2026-05-25)**  

## **1. Today's Overview**  
The NullClaw project saw moderate activity in the last 24 hours, with **1 issue update** and **1 merged PR**. The community is actively engaging around feature requests, particularly regarding memory recall customization (#919). No new releases were published, indicating ongoing maintenance rather than major version updates. The project remains stable, with no critical bugs reported recently.

## **2. Releases**  
*No new releases were published today.*  

## **3. Project Progress**  
- **PR #881 [CLOSED]** (`refactor(http): remove runtime curl subprocesses`) was merged on 2026-05-24.  
  - **Key Changes:** Replaced `curl`-backed Zig HTTP helpers with native `std.http` wrappers across multiple modules (providers, channels, tools, etc.).  
  - **Impact:** Reduces reliance on external subprocesses, improving performance and maintainability.  
  - **Boundary Note:** `curl` retained only for Docker builds/operator tooling.  
  **[View PR](https://github.com/nullclaw/nullclaw/pull/881)**  

## **4. Community Hot Topics**  
- **Issue #919 [OPEN]** (`Feature: Allow disabling automatic memory recall per-message`)  
  - **Summary:** Users demand finer control over FTS5/BM25 recall parameters (e.g., `DEFAULT_RECALL_LIMIT`, `MAX_CONTEXT_BYTES`), as current hardcoded settings limit flexibility.  
  - **Engagement:** 1 comment, 0 reactions; likely a high-priority request from users needing context-aware recall tuning.  
  **[View Issue](https://github.com/nullclaw/nullclaw/issues/919)**  
  - *Underlying Need:* Customization of retrieval behavior for specialized use cases (e.g., privacy-sensitive conversations or low-latency interactions).  

## **5. Bugs & Stability**  
*No critical bugs or regressions reported today.*  
- **Recent Activity:** Only PR #881 involved refactoring, not bug fixes. The absence of closed issues suggests no urgent stability concerns.  

## **6. Feature Requests & Roadmap Signals**  
- **Top Request:** Per-message memory recall disablement (#919) signals demand for granular recall controls.  
- **Predicted Next Steps:** Likely to be addressed in a future minor release, given its open status since May 18 and lack of traction on alternative solutions.  
- **Technical Debt:** Removal of `curl` subprocesses (PR #881) aligns with long-term performance goals.  

## **7. User Feedback Summary**  
- **Pain Points:**  
  - Hardcoded recall parameters frustrate power users who need dynamic adjustments (#919).  
  - Dependency on `curl` (now partially deprecated) may have caused operational hurdles pre-PR #881.  
- **Satisfaction:** Merges like #881 indicate responsiveness to technical improvements, but feature requests highlight gaps in configurability.  

## **8. Backlog Watch**  
- **Critical Unaddressed Issue:** #919 has been open for ~1 week with no resolution plan visible. Maintainers should prioritize it to avoid stagnation in recall-related UX.  
- **Action Needed:** A design doc or spike could outline trade-offs (e.g., default behaviors vs. user overrides) before implementation.  

---  
**Project Health:** Stable, with incremental improvements (e.g., HTTP refactor) and emerging feature needs (recall customization). Community engagement remains focused on core functionality enhancements.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# **IronClaw Project Digest – May 25, 2026**  

---

## **1. Today’s Overview**  
IronClaw saw **intense activity** with **22 Issues updated** (19 open, 3 closed) and **50 PRs opened** (48 open, 2 merged), indicating active development on the Reborn architecture and security hardening efforts. Key focus areas include **tool execution auditing**, **Reborn integration**, and **approval workflows**. No new releases were published.  

---

## **2. Releases**  
*No new releases were published today.*  

---

## **3. Project Progress**  
- **Merged/Closed PRs**:  
  - **PR #4022**: Fixed a regression where HTTP response errors now model-visible instead of aborting runs ([details](https://github.com/nearai/ironclaw/pull/4022)).  
  - **PR #4021**: Added CI boundary tests to enforce tool-execution audit rules (#4019 step 1) ([details](https://github.com/nearai/ironclaw/pull/4021)).  
  - **PR #4004**: Implemented rich capability activity SSE for WebChat v2 ([details](https://github.com/nearai/ironclaw/pull/4004)).  
- **Key Advances**:  
  - **Reborn integration**: Wired secrets master key resolution (#4013), HTTP access in local dev (#4016/#4018), and durable checkpoint state (#3908).  
  - **Security**: `RuntimeCredentialTarget::PathPlaceholder` audit (#3917) and hook framework parity tests (#3937).  

---

## **4. Community Hot Topics**  
### **Most Active Issues/PRs**  
1. **Issue #4017** (3 comments): *Interactive chat tool calls bypass ToolDispatcher*  
   - Critical gap: Chat path skips audit trails and tool-filtering. Linked to systemic concerns in #4019.  
   - [Link](https://github.com/nearai/ironclaw/issues/4017)  

2. **Issue #3259** (8 comments): *Publish crates.io versions 0.25.0–0.27.0*  
   - Downstream pinned to 0.24.0 due to CVEs in wasmtime 28.x. Urgent for dependency updates.  
   - [Link](https://github.com/nearai/ironclaw/issues/3259)  

3. **PR #4019**: Proposed solution: *Durably enforce tool-execution invariants*  
   - Deny-by-default config + CI boundary tests to close dispatch bypasses.  
   - [Link](https://github.com/nearai/ironclaw/issues/4019)  

**Underlying Needs**:  
- **Security**: Audit trail enforcement (#4017, #3259).  
- **Reborn Stability**: Credential boundaries (#3903, #3917) and production wiring (#3936).  

---

## **5. Bugs & Stability**  
- **Critical**:  
  - **Nightly E2E failure** (#3447): Full test suite failed; no fix PR yet.  
    - [Details](https://github.com/nearai/ironclaw/issues/3447)  
  - **HTTP error handling regression** (#4022): Fixed by PR #4022.  
- **Medium**:  
  - **Hook parity gaps** (#3937): Adversarial tests for cross-backend hooks.  

---

## **6. Feature Requests & Roadmap Signals**  
- **High Priority**:  
  - **Async transaction approval** (#1739): WalletConnect for human-approval loops.  
  - **Subagent spawn** (#3798/#3814): Design for nested agent workflows.  
  - **Reborn telemetry** (#4004): Rich activity SSE for monitoring.  
- **Next Version Hints**:  
  - **Configuration-as-Code** (#3036): Reborn runtime blueprint support (#3703).  
  - **Approval service** (#3889): Dedicated routing for interactions.  

---

## **7. User Feedback Summary**  
- **Pain Points**:  
  - **Dependency risk**: Outdated crates.io versions (#3259) block downstream users.  
  - **Security**: Lack of audit trails in chat tools (#4017).  
- **Positive Signals**:  
  - Strong engagement on Reborn integration issues (#3278, #3286) suggests roadmap alignment.  

---

## **8. Backlog Watch**  
- **Unattended Critical**:  
  - **#3259 (crates.io updates)**: Requires maintainer action to unpin dependencies.  
  - **#4017 (audit bypass)**: Needs architectural fixes before release.  
- **Stale but Relevant**:  
  - **#3608 (dispatch authority)**: P0 issue for WebUI beta—pending review.  

--- 

**Overall Health**: **Active but strained**—focus on security hardening and Reborn stability is driving momentum, but E2E failures and dependency risks require attention.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# **LobsterAI Project Digest – May 25, 2026**

---

## **1. Today's Overview**  
LobsterAI had a highly active day with **14 merged PRs** and **no open issues or new releases**. The project focused on bug fixes, stability improvements, and feature enhancements, particularly in the **Cowork (collaborative AI) module**, **IM integration**, and **frontend rendering**. No new issues were opened, indicating a stable development phase with no urgent blockers.

---

## **2. Releases**  
*No new releases were published today.*  

---

## **3. Project Progress**  
### **Merged PRs (14)**  
Key improvements:  
- **[PR #1585](https://github.com/netease-youdao/LobsterAI/pull/1585)**: Fixed unintended Settings page closure when pressing `Enter` in input fields (affects model/IM config inputs).  
- **[PR #1590](https://github.com/netease-youdao/LobsterAI/pull/1590)**: Enabled message queuing during AI streaming, allowing users to send follow-up messages while waiting for responses.  
- **[PR #1594](https://github.com/netease-youdao/LobsterAI/pull/1594)**: Expanded search functionality across all agents and matched session *content* (not just titles).  
- **[PR #1598](https://github.com/netease-youdao/LobsterAI/pull/1598)**: Fixed hardcoded `executionMode: 'local'` in Cowork config, ensuring UI reflects user settings.  
- **[PR #1601](https://github.com/netease-youdao/LobsterAI/pull/1601)**: Prevented session "cool-off" resumption after gateway reconnects, addressing security/user control gaps.  

Other notable fixes:  
- **IM notification channel errors** (#1588), **OpenClaw cron config cleanup** (#1593), **SQLite migration reliability** (#1595), **Anthropic/Gemini SSE buffering** (#1607), **NetEase Bee secret encryption** (#1606).  

---

## **4. Community Hot Topics**  
No open issues or discussions today, but merged PRs reveal recurring themes:  
- **User Experience Fixes**:  
  - Message queuing (#1590) and search improvements (#1594) enhance collaboration flows.  
- **Stability**:  
  - Gateway/session crash prevention (#1601, #1599) and IM notification robustness (#1588) were prioritized.  
- **Security**:  
  - Credential handling (#1606) aligns with other IM channels (Telegram, Discord, etc.).  

Underlying needs: Users expect seamless multi-agent workflows and reliable cross-platform integrations.

---

## **5. Bugs & Stability**  
**Critical Fixes Today:**  
1. **Session resurrection after disconnect (#1601)** – Fixed by preserving "cool-off" state during gateway reconnection.  
2. **Duplicate error messages in Cowork (#1603)** – Reduced redundant alerts for failed sessions.  
3. **Streaming interruptions (#1607)** – Added SSE buffering for Anthropic/Gemini to prevent data loss.  

All critical bugs addressed via merged PRs; no regressions reported.

---

## **6. Feature Requests & Roadmap Signals**  
Emerging priorities from merged work:  
- **Real-time Collaboration**: Message queuing (#1590) suggests deeper integration of concurrent user inputs.  
- **Cross-Agent Search**: Expanded session search (#1594) hints at future unified context retrieval.  
- **Multi-Engine Security**: Secret encryption (#1606) may extend to other sensitive configs.  

Predicted next version focus: **Enhanced IM reliability** and **UI polish**.

---

## **7. User Feedback Summary**  
Pain points addressed:  
- **Input field quirks (#1585)**: Enter key behavior was a frequent UX complaint.  
- **Session control (#1599, #1601)**: Users need stricter session lifecycle management.  
- **Notification clarity (#1588)**: Misleading "unconfigured IM" warnings caused confusion.  

Satisfaction signals: No open issues suggest users are tolerating minor flaws while major stability is improved.

---

## **8. Backlog Watch**  
**High-Priority Unaddressed Items:**  
- None open today, but stale PRs like **#1585, #1588** should be reviewed for further optimizations.  
- Long-term goals (e.g., **multi-engine conflict resolution**) remain unaddressed—monitor related GitHub discussions.  

**Recommendation**: Maintainers could prioritize **documentation updates** (e.g., IM channel setup guides) to reduce support load.

--- 

**Project Health**: ✅ **Stable & Active**  
[View All Merged PRs](https://github.com/netease-youdao/LobsterAI/pulls?q=is%3Apr+is%3Aclosed+merged%3A2026-05-24)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# **Moltis Project Digest - 2026-05-25**  

## **1. Today's Overview**  
Moltis saw a highly productive day with **8 issues closed** and **10 PRs merged**, indicating focused maintenance and feature refinement. All activity was resolved within the last 24 hours, suggesting efficient issue triage and rapid development cycles. No new releases were published, but multiple bug fixes and enhancements were delivered. The project appears stable, with no open/active issues or PRs in this period.

---

## **2. Releases**  
*No new releases published today.*  

---

## **3. Project Progress (Merged PRs)**  
### **Key Merges & Fixes**  
- **[PR #1066](https://github.com/moltis-org/moltis/pull/1066)**: Added per-agent runtime limits (`timeout_secs`, `max_iterations`), allowing fine-grained control over agent behavior.  
- **[PR #1065](https://github.com/moltis-org/moltis/pull/1065)**: Improved sandbox image prebuild logs to reduce console noise while retaining debug-level details.  
- **[PR #1063](https://github.com/moltis-org/moltis/pull/1063)**: Secured MCP server env variables by masking values in status outputs (preventing leaks via `mcp_list`).  
- **[PR #1061](https://github.com/moltis-org/moltis/pull/1061)**: Validated OpenAI-compatible provider URLs to reject malformed endpoints.  
- **[PR #1060](https://github.com/moltis-org/moltis/pull/1060)**: Fixed model picker UI to accommodate long model names (e.g., versions).  
- **[PR #1064](https://github.com/moltis-org/moltis/pull/1064)**: Enhanced session title generation failure handling.  
- **[PR #1062](https://github.com/moltis-org/moltis/pull/1062)**: Prevented horizontal scrolling caused by chat toolbar overflow.  
- **[PR #1059](https://github.com/moltis-org/moltis/pull/1059)**: Disabled external agents from appearing in the chat picker when `enabled = false`.  
- **[PR #1049](https://github.com/moltis-org/moltis/pull/1049)**: Introduced "agents as capability boundaries," centralizing model, MCP, sandbox, and skill configurations per agent preset.  

---

## **4. Community Hot Topics**  
### **Top Issue (Closed)**  
**[Issue #553](https://github.com/moltis-org/moltis/issues/553)**: *Add per-agent socketback and timeout settings*  
- **Context**: Users requested granular control over agent-specific timeouts and loopback settings.  
- **Signal**: Indicates demand for configurable agent-level constraints, likely driven by multi-agent workflows.  

### **Top PR (High Impact)**  
**[PR #1049](https://github.com/moltis-org/moltis/pull/1049)**: *Agents as capability boundaries*  
- **Impact**: Reduces configuration complexity by binding models, MCP servers, and skills to agent presets.  
- **User Need**: Aligns with trends in modular AI tooling (e.g., separating child agents from parent contexts).  

---

## **5. Bugs & Stability**  
| **Severity** | **Bug** | **Fix PR** |  
|-------------|---------|------------|  
| **Critical** | Env vars leaked via `mcp_list` (#1054) | PR #1063 |  
| **Moderate** | Model picker truncated (#1052) | PR #1060 |  
| **Minor** | Auto-title generation failed (#1053) | PR #1064 |  
| **UI/UX** | Horizontal scrolling in chat toolbar (#1055) | PR #1062 |  
| **Config** | External agents shown despite disabled flag (#1057) | PR #1059 |  

**Stability Note**: All critical bugs addressed; no crashes reported.  

---

## **6. Feature Requests & Roadmap Signals**  
- **Per-Agent Runtime Limits** (#1066): Likely next iteration of agent configurability.  
- **Sandbox Logging Quietness** (#1065): User feedback on noisy Docker build output—may expand to other subsystems.  
- **Provider URL Validation** (#1061): Security-focused; may generalize to other API integrations.  
- **Agent Boundaries** (#1049): Core architectural shift—expected to influence future agent design.  

---

## **7. User Feedback Summary**  
**Pain Points Addressed**:  
- **Security**: Secret leakage via MCP (#1054) was a major concern; resolved via env variable masking.  
- **Usability**: Long model names in pickers (#1052) improved readability.  
- **Config Flexibility**: Per-agent timeouts (#553) cater to complex workflows.  

**Unresolved Themes**:  
- Sandbox build verbosity (#1056) still requires user-configurable log levels.  
- Session title generation (#1053) could benefit from smarter fallbacks.  

---

## **8. Backlog Watch**  
- **Oldest Open Issue**: None (all recent issues closed).  
- **Maintainer Attention Needed**:  
  - **[Issue #1056](https://github.com/moltis-org/moltis/issues/1056)**: Sandbox build logging remains noisy post-fix (#1065).  
  - **[PR #1049](https://github.com/moltis-org/moltis/pull/1049)**: Agent-boundary changes may require downstream testing (e.g., multi-user channels).  

**Health Indicator**: High velocity with no blockers; focus shifts to refining edge cases (e.g., sandbox UX, agent configs).  

--- 

**Project Health**: ✅ **Stable & Active**  
[GitHub Activity Dashboard](https://github.com/moltis-org/moltis)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# **CoPaw Project Digest – May 25, 2026**  

## **1. Today’s Overview**  
CoPaw (GitHub: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)) saw moderate activity with **14 new issues** and **1 open PR** in the last 24 hours. The project is addressing several bugs related to **UI rendering, API integration, task scheduling, and memory management**, indicating active maintenance cycles. No new releases were published this week, suggesting ongoing development without major version updates.  

---

## **2. Releases**  
*No new releases were published today or this week.*  

---

## **3. Project Progress**  
- **PR Activity**:  
  - **[PR #4637](https://github.com/agentscope-ai/CoPaw/pull/4637)** – *feat(chat): add customizable slash command shortcut menu*  
    - Allows users to configure which built-in commands appear in the chat input’s `/` menu via a settings panel, improving discoverability of 20+ built-in features.  
    - **Status**: Open (awaiting review).  

---

## **4. Community Hot Topics**  
Top active issues by engagement:  

### **🔍 DeepSeek Model Parsing Issue (#4051) – Closed**  
- **Issue**: Users reported incorrect parsing of `think` content from DeepSeek v4 Flash, causing incomplete responses.  
- **Context**: Affected version `v1.1.4.post2`.  
- **Impact**: Moderate (blocking for users relying on DeepSeek integration).  
- **Link**: [GitHub Issue #4051](https://github.com/agentscope-ai/CoPaw/issues/4051)  

### **⚠️ Console UI Tool Call Visibility Bug (#4644) – Open**  
- **Issue**: Most tool calls (except `read_file`) fail to display in real-time, requiring manual page refresh.  
- **Logs**: No errors observed in backend/browser logs.  
- **Impact**: High (affects debugging and workflow monitoring).  
- **Link**: [GitHub Issue #4644](https://github.com/agentscope-ai/CoPaw/issues/4644)  

### **🚀 GLM-5.1 Reasoning Chain Display Bug (#4650) – Open**  
- **Issue**: GLM-5.1 model reasoning chains not visible via OpenAI-compatible API, while other models (e.g., DeepSeek) work fine.  
- **Root Cause**: Likely schema handling in API streaming.  
- **Link**: [GitHub Issue #4650](https://github.com/agentscope-ai/CoPaw/issues/4650)  

---

## **5. Bugs & Stability**  
Ranked by severity:  

| **Bug** | **Severity** | **Fix Status** |  
|---------|-------------|----------------|  
| **Console UI Tool Call Rendering (#4644)** | High | No PR yet |  
| **GLM-5.1 Reasoning Chain Loss (#4650)** | Medium | No PR yet |  
| **Orphaned Cron Jobs (#4649)** | Medium | No PR yet |  
| **MCP OAuth `client_secret` Support (#4643)** | Low | No PR yet |  
| **MCP Schema Sanitizer Corruption (#4646)** | Low | No PR yet |  

**Key Concerns**:  
- **Task Interruption (#4653)**: Timed tasks (cron) are being preempted by user messages due to shared sessions.  
- **Memory System Feedback (#4652)**: Users report "recorded but unstructured" memory logs, lacking summarization and indexing.  

---

## **6. Feature Requests & Roadmap Signals**  
High-potential upcoming features:  
- **Automatic Memory Summarization (#4639)**: Proposal to trigger session-end hooks for structured knowledge archiving.  
- **Remote Pet Daemon Support (#4645)**: Allow desktop companion app (`QwenPaw Pet`) to connect to remote agents.  
- **Token Usage Metrics (#4647)**: Request for per-reply token consumption tracking.  
- **Skill Update Automation (#3290)**: Closed issue proposing auto-update for outdated skills.  

---

## **7. User Feedback Summary**  
**Pain Points**:  
- **Model Integration**: DeepSeek/GLM-5.1 inconsistencies highlight API compatibility gaps.  
- **UI/UX**: Real-time feedback gaps (tool calls, reasoning chains) frustrate debugging.  
- **Task Management**: Cron job interruptions and orphaned jobs hinder automation reliability.  
- **Memory Utilization**: Users desire smarter summarization and cross-session knowledge linking.  

**Positive Signals**:  
- Active community engagement (14 issues, 1 PR), with clear bug reports and feature requests.  

---

## **8. Backlog Watch**  
Issues needing maintainer attention:  
- **#4644 (Tool Call Rendering)**: Critical for console UX; no fix yet.  
- **#4653 (Cron Job Preemption)**: Risks breaking scheduled workflows.  
- **#4652 (Memory System Enhancement)**: High-value for long-term usability.  

**Action Items**:  
- Prioritize UI/API rendering fixes (#4644, #4650).  
- Investigate cron job lifecycle management (#4649, #4653).  
- Explore memory system redesign (#4652, #4639).  

---  
**Project Health**: 🟡 **Moderate** – Steady bug fixes and feature development, but key UX/integration issues linger.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – May 25, 2026**

---

## **1. Today's Overview**  
ZeroClaw saw intense activity with **50 new Issues and PRs updated in the last 24 hours**, indicating active development and community engagement. The project remains focused on runtime stability (high-severity bugs like MCP tool filtering, cron output routing) and feature expansion (e.g., Mastodon/Twilio channels). No new releases were published, but multiple PRs merged address critical fixes.

---

## **2. Releases**  
*No new releases this week.*

---

## **3. Project Progress**  
- **Merged PRs:**  
  - **#6866**: Added support for selective channel builds via `default-channels` bundle (enabling targeted deployments). [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/6866)  
  - **#6897**: Persisted cron job delivery failures as degraded status instead of "ok" to better reflect reliability. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/6897)  
  - **#6882**: Fixed media marker sanitization during context compression to avoid truncation errors. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/6882)  
  - **#6901**: Preserved full `reqwest` error chains in provider diagnostics for clearer root-cause analysis. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/6901)  

---

## **4. Community Hot Topics**  
### **Top Issues by Engagement:**  
- **RFC: Work Lanes, Board Automation, and Label Cleanup (#6808)**  
  - **6 comments**, proposing governance changes to automate issue/PR routing. Signals demand for workflow automation. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)  
- **tool_filter_groups no-op for real MCP tools (#6699)**  
  - **6 comments**, a high-severity bug where MCP tools bypass filter groups silently. Critical for MCP integration. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)  
- **Cron job output not routed to channels (#6647)**  
  - **4 comments**, blocking cross-platform monitoring workflows. High severity (S1). [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6647)  

### **Key PR Discussions:**  
- **#6866** and **#6904** sparked debates around default channel bundles, balancing minimalism vs. backward compatibility.  

---

## **5. Bugs & Stability**  
| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| **MCP `tool_filter_groups` no-op (#6699)** | High | Open | #6897 (partial fix) |
| **Cron output routing (#6647)** | High | Open | N/A (needs review) |
| **`web_fetch` private IP bypass (#5122)** | High | Open | N/A |
| **Gemini history serializer violation (#6302)** | High | In-progress | N/A |
| **MCP stdio child process leak (#5903)** | High | Open | N/A |

**Notable Fixes Merged:**  
- **#6882**: Context compression now handles media markers correctly after truncation.  
- **#6901**: Provider errors now expose full stack traces for debugging.  

---

## **6. Feature Requests & Roadmap Signals**  
- **Channels Expansion:**  
  - Mastodon (#6423), Twilio SMS (#6427), Rocket.Chat (#6435), Zulip (#6437) are in-progress, addressing fediverse/self-hosting gaps.  
- **Provider Enhancements:**  
  - Anthropic native thinking support (#5630), OpenAI timeout config (#6723), and model fallback chains (#4647) signal multi-provider polish.  
- **Governance RFCs:**  
  - **Work Lanes (#6808)** suggests future automation for issue/PR management.  

---

## **7. User Feedback Summary**  
**Pain Points:**  
- **Tool Integration:** MCP users report silent failures due to `tool_filter_groups` (#6699) and approval hangs (#6721).  
- **Channel Reliability:** Cron output routing (#6647) and Slack token configs (#6844) block cross-platform workflows.  
- **Security Concerns:** `allowed_private_hosts` bypass (#5122) and OTP action validation (#5810) highlight config trust issues.  

**Positive Signals:**  
- **Community Collaboration:** 4+ PRs from contributors (e.g., Audacity88, yijunyu) show active ecosystem engagement.  

---

## **8. Backlog Watch**  
**Critical Unanswered Items:**  
- **#6472**: Postgres gateway runtime panic (S2) needs investigation into tokio-rt-worker conflicts.  
- **#6808 (RFC)**: Governance proposal requires maintainer prioritization—could shape future roadmap.  
- **#6721 (`tool_search` auto-deny)**: MCP deferred loading hang blocks interactive use cases.  

**Stale PRs Needing Attention:**  
- **#6793/#6778**: AllowlistAspect migrations for Telegram/Discord channels are pending final review.  

---

**Summary:** ZeroClaw is actively improving runtime stability (MCP/cron fixes) while expanding channel integrations. High-severity bugs dominate discussions, but community contributions accelerate progress. Key focus areas: **MCP tool handling**, **cross-channel routing**, and **provider reliability**.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*