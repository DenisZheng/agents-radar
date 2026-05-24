# OpenClaw Ecosystem Digest 2026-05-24

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-24 00:36 UTC

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

---

### **OpenClaw Project Digest – May 24, 2026**

---

#### **1. Today's Overview**  
OpenClaw is experiencing high activity with **500 new issues and PRs** in the last 24 hours, including a new beta release (v2026.5.22-beta.1). The project shows strong engagement across documentation, bug fixes, feature requests, and tooling improvements. Notably, security-focused issues (e.g., token leaks, proxy misconfigurations) and multi-agent collaboration enhancements are prominent.

---

#### **2. Releases**  
- **[v2026.5.22-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.22-beta.1)**  
  - **Documentation**: Clarified onboarding, Gateway startup paths, WhatsApp QR/408 recovery, cron output language prompts, skill advanced features, upstream 403 troubleshooting, and plugin fallback override guidance.  
  - Contributors: @deepujain, @Zacxxx, @Jah-yee, @neyric, @usimic.

---

#### **3. Project Progress (Merged PRs)**  
- **High-Impact Fixes & Features**  
  - **[fix(proxy): redact sensitive headers in standalone debug proxy](https://github.com/openclaw/openclaw/pull/82951)** (M)  
    - Redacts `Authorization`, `x-api-key`, etc., from proxy captures to prevent secret leaks.  
  - **[feat(tts): skipEmojiSymbols option](https://github.com/openclaw/openclaw/pull/78172)** (M)  
    - Adds TTS preprocessing to strip emojis/symbols for clearer speech output.  
  - **[fix(ui): show WebChat done after reply renders](https://github.com/openclaw/openclaw/pull/85576)** (S)  
    - Fixes race condition between terminal runs and UI updates.  

---

#### **4. Community Hot Topics**  
Top commented/reacted Issues/PRs:  
- **Linux/Windows Clawdbot Apps (#75, 105 comments, 77 👍)**  
  - *Need*: Cross-platform app support (macOS/iOS/Android) for Linux/Windows.  
- **Masked Secrets (#10659, 12 comments, 4 👍)**  
  - *Need*: Prevent API key exposure via prompt injection attacks.  
- **Browser Tool Improvements (#44431, 8 comments)**  
  - *Need*: CSS selector support, iframe isolation, and real-world automation fixes.  
- **Signal Quote-Replies (#36630, 0 comments)**  
  - *Need*: Bidirectional Signal quote-reply support (agent→user/user→agent).  

---

#### **5. Bugs & Stability**  
**Critical Issues Reported Today**:  
- **Subagent Completion Loss (#44925, 15 comments)**  
  - Silent loss of subagent results; no retry/auto-restart. *No PR yet*.  
- **Token Usage Shows 0/200k (#44845, 7 comments)**  
  - Volcengine coding plan misreports usage stats. *No PR yet*.  
- **Discord Leaks Internal Traces (#44905, 8 comments)**  
  - Exposes LLM tool-call JSON to channels. *No PR yet*.  
- **Docker Sandbox Read-Only (#37634, 8 comments)**  
  - `/workspace` mounted as read-only despite `sandbox.workspaceAccess: "none"`. *PR in review*.  

---

#### **6. Feature Requests & Roadmap Signals**  
**Likely Next Version Priorities**:  
- **Multi-Agent Collaboration (#35203, 7 comments)**  
  - Capability profiling, shared blackboard, token cost governance.  
- **Per-Agent Cost Budgets (#42475, 13 comments)**  
  - Enforce daily/monthly spend limits at gateway level.  
- **Slack Block Kit Support (#12602, 13 comments)**  
  - Rich interactive Slack messages (blocks, actions).  
- **Theme Customization (#28300, 6 👍)**  
  - Preset themes + user-generated color palettes.  

---

#### **7. User Feedback Summary**  
**Pain Points**:  
- **Security**: Multiple issues highlight token leaks (Discord, Signal, secrets), prompting demand for stricter boundaries.  
- **UX**: Browser automation (#44431) requires robust selectors and sandboxing; Windows/macOS apps (#75) need cross-platform support.  
- **Performance**: Token overhead (#14785) and session hangs (#43661) frustrate long workflows.  
- **Feedback**: Users praise theme customization (#28300) but want deeper deployment guides (#13597).  

---

#### **8. Backlog Watch**  
**Unmaintained Critical Items**:  
- **Memory Management Chaos (#43747, 8 comments)**  
  - Inconsistent SQLite vs. file-based memory storage; needs standardization.  
- **Telegram Durable Groups (#85656, 0 comments)**  
  - Retry logic fails on `-100...` chat IDs; PR submitted.  
- **DeepSeek V4 Flash Context Window (#85840, 0 comments)**  
  - Older configs set 200K tokens vs. official 1M; doctor script patch pending.  

---

### **Health Assessment**  
✅ **Strengths**: Active community, rapid response to docs/security bugs, roadmap clarity (multi-agent, budgets, themes).  
⚠️ **Risks**: Unresolved regressions (subagents, token leaks), backlog pressure (memory, Docker sandbox).  
🚀 **Trends**: Security hardening, UX polish (themes, Slack blocks), and automation robustness are top user priorities.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: AI Agent & Personal Assistant Open-Source Ecosystem (2026)**

---

## **1. Ecosystem Overview**  
The 2026 AI agent and personal assistant open-source ecosystem is marked by **high fragmentation**, with projects prioritizing either **technical differentiation** (e.g., OpenClaw’s multi-agent collaboration) or **platform-specific optimization** (e.g., NanoBot’s long-term memory). Key themes include **security hardening** (Hermes, IronClaw), **cross-platform support** (OpenClaw, NanoClaw), and **provider flexibility** (NanoClaw, PicoClaw). Community engagement spans from rapid iteration (ZeroClaw, LobsterAI) to stabilization (NullClaw, Moltis).

---

## **2. Activity Comparison**

| Project          | Issues (Last 24h) | PRs (Last 24h) | Releases Today | Health Score (1–5) |
|------------------|-------------------|-----------------|---------------|-------------------|
| **OpenClaw**     | 500              | 500             | Beta v2026.5.22-beta.1 | 4/5 (High activity, but security risks) |
| **NanoBot**      | 8                | 17              | None          | 3/5 (Stable, focused on memory/provider fixes) |
| **Hermes Agent** | 50               | 50              | None          | 3/5 (Stability gaps in Telegram/Discord) |
| **PicoClaw**     | 6                | 9 (3 open)      | Nightly v0.2.9-nightly.20260523 | 3.5/5 (Xiaomi permissions pending) |
| **NanoClaw**     | 4 (1 open)       | 17 merged       | None          | 4/5 (WhatsApp fixes, transcript rotation) |
| **NullClaw**     | 0                | 10 open         | None          | 3/5 (Maintenance-heavy, no issues) |
| **IronClaw**     | 16               | 50 (34 open)    | None          | 2.5/5 (Security focus, installer bugs) |
| **LobsterAI**    | 3 (2040–2041)   | 2 (open)        | None          | 2.5/5 (Memory/Schema instability) |
| **TinyClaw**     | 0                | 0               | None          | N/A (Inactivity) |
| **Moltis**       | 8 (553, 1054)   | 4 merged + 1049 (open) | None | 3/5 (Agent capabilities overhaul) |
| **CoPaw**        | 11 (4265, 4644) | 2 (open)        | None          | 3/5 (Mobile/UX gaps) |
| **ZeptoClaw**    | 3 (6724, 6856)  | 17 merged       | None          | 3.5/5 (Docs/Middleware refactoring) |
| **ZeroClaw**     | 50               | 50              | None          | 3/5 (Channel schema/tool-call bugs) |
| **ZeroClaw**     | 50               | 50              | None          | 3/5 (Provider/channel stability) |

---

## **3. OpenClaw's Position**
### **Advantages Over Peers**
- **Multi-Agent Collaboration**: Only project with explicit capability profiling, blackboard sharing (#35203 vs. NanoBot’s memory focus).
- **Security Hardening**: Token leak fixes (proxy, Discord) surpass Hermes’ plugin system maturity.
- **Community Size**: Highest issue/PR volume (500+ each), indicating broad developer interest.

### **Technical Differentiation**
- **Gateway Architecture**: Centralized token budgets per agent vs. NanoBot’s per-subagent control.
- **Cross-Platform**: Windows/Linux apps (#75) vs. NanoClaw’s WhatsApp-centric fixes.

### **Maturity Tier**
- **Rapid Iteration**: Beta releases, but unresolved subagent completion loss (#44925) suggests scaling challenges.

---

## **4. Shared Technical Focus Areas**
| **Requirement**               | **Projects Addressing It**                                                                 |
|------------------------------|------------------------------------------------------------------------------------------|
| **Security Hardening**        | OpenClaw (token leaks), IronClaw (hooks), NullClaw (curl removal)                       |
| **Long-Term Memory**          | NanoBot (MECE structure), LobsterAI (scalability), Moltis (vault encryption)              |
| **Provider Flexibility**       | NanoClaw (transcript rotation), PicoClaw (DeepSeek/OpenAI), ZeptoClaw (middleware)        |
| **Cross-Platform Support**    | OpenClaw (Windows/Linux apps), NanoClaw (WeChat/Discord), CoPaw (mobile client requests)  |
| **UX/Debugging**             | ZeroClaw (tool-call visibility), CoPaw (syntax highlighting), NanoClaw (approval flows)   |

---

## **5. Differentiation Analysis**
| **Aspect**            | **Key Projects**                                                                 | **Target Users**                     | **Architecture**                          |
|-----------------------|---------------------------------------------------------------------------------|-------------------------------------|------------------------------------------|
| **Multi-Agent**       | OpenClaw (capability profiles, shared blackboard)                               | Enterprise workflows                | Gateway-centric                           |
| **Memory Efficiency** | NanoBot (Dream/Consolidator prompts), LobsterAI (three-tier memory)              | Long-running agents                | Structured storage                        |
| **Security First**    | IronClaw (Reborn-native sandbox), NullClaw (credential removal)                  | Production deployments             | Zero-trust design                         |
| **Mobile-First**      | CoPaw (mobile client), ZeptoClaw (local-first docs)                            | Casual/personal use               | Lightweight UI                            |
| **Provider Agnostic** | NanoClaw (Groq/Azure), PicoClaw (DeepSeek/OpenAI)                             | Developers/integrators             | Plugin system                             |
| **Protocol Standardization** | ZeroClaw (ACP/ICSE 2027)                                                  | Enterprise/compliance              | Protocol extensibility                    |

---

## **6. Community Momentum & Maturity**
- **Rapid Iteration**:  
  - *OpenClaw* (500+/24h), *NanoClaw* (17 PRs), *ZeroClaw* (50+ PRs).  
- **Stabilizing**:  
  - *NullClaw* (maintenance mode), *IronClaw* (security hardening), *TinyClaw* (no activity).  
- **Mixed**:  
  - *NanoBot* (memory fixes), *PicoClaw* (beta builds), *Moltis* (agent capabilities).  

---

## **7. Trend Signals**
### **Emerging Industry Trends**
1. **Security by Default**  
   - *IronClaw* (hooks), *OpenClaw* (proxy/Discord leaks), *NullClaw* (curl removal).  
   - **Value**: Reduces attack surface for production deployments.

2. **Modular Agent Design**  
   - *OpenClaw* (per-agent budgets), *Moltis* (#1049), *NanoBot* (subagent control).  
   - **Value**: Enables role-based task delegation (enterprise/automation).

3. **Long-Term Memory Scalability**  
   - *NanoBot* (MECE prompts), *LobsterAI* (three-tier), *Hermes* (OpenViking fixes).  
   - **Value**: Critical for stateful agents (e.g., customer support).

4. **Cross-Platform Consistency**  
   - *OpenClaw* (macOS/iOS/Android), *CoPaw* (mobile client), *NanoClaw* (WeChat/Discord).  
   - **Value**: Expands accessibility beyond chat apps.

5. **Provider-Agnostic Tooling**  
   - *NanoClaw* (transcript rotation), *PicoClaw* (DeepSeek/OpenAI), *ZeptoClaw* (middleware).  
   - **Value**: Unlocks LLM vendor flexibility.

---

### **Strategic Implications**
- **For Developers**: Prioritize projects like *OpenClaw* (multi-agent) or *NanoBot* (memory) if building complex agents.  
- **For Enterprises**: *IronClaw* (sandbox) or *ZeroClaw* (protocol) align with compliance needs.  
- **For Casual Users**: *CoPaw* (mobile) or *TinyClaw* (if revived) offer lightweight options.  

**Ecosystem Outlook**: Fragmentation is driving specialization; security and modularity are dominant themes.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# **NanoBot Project Digest – May 24, 2026**  

## **1. Today's Overview**  
NanoBot remains highly active with **8 issues updated** (5 open, 3 closed) and **10 PRs updated** (6 open, 4 merged/closed) in the last 24 hours. No new releases were published, but multiple critical bug fixes and feature enhancements are progressing. Key focus areas include **long-term memory optimization**, **spawn tool flexibility**, and **transcription provider transparency**. Community engagement is strong, with several high-impact PRs addressing user-reported pain points.

---

## **2. Releases**  
*No new releases this period.*  

---

## **3. Project Progress**  
### **Merged/Closed PRs:**  
- **[PR #3967](https://github.com/HKUDS/nanobot/pull/3967)**: Fixes two major issues:  
  - Uncapped `exec` tool timeout (#3595), allowing long-running scripts.  
  - Standardized `apiBase` for transcription providers (#3637), resolving Groq configuration ambiguity.  
- **[PR #3952](https://github.com/HKUDS/nanobot/pull/3952)**: Enhanced Dream/Consolidator prompts to reduce redundant long-term memory entries (MECE structure).  
- **[PR #3971](https://github.com/HKUDS/nanobot/pull/3971)**: Added support for Zhipu AI’s image generation provider.  

### **Open PRs Under Development:**  
- **[PR #3975](https://github.com/HKUDS/nanobot/pull/3975)**: Implements per-subagent `temperature` control in `spawn` tool (#3969).  
- **[PR #3974](https://github.com/HKUDS/nanobot/pull/3974)**: Adds OpenAI API type (`chat_completions`/`responses`) and `extraBody` config flexibility.  

---

## **4. Community Hot Topics**  
### **Top Issues by Engagement:**  
1. **[Issue #3969](https://github.com/HKUDS/nanobot/issues/3969)** (Enhancement): Requests configurable `temperature` for subagents via `spawn`. *High demand*—users need varied reasoning styles (e.g., deterministic vs. creative tasks). PR #3975 addresses this.  
2. **[Issue #3637](https://github.com/HKUDS/nanobot/issues/3637)** (Bug): Transcription provider (`Groq`) misconfiguration led to opaque setup failures. Fixed in PR #3967.  
3. **[Issue #2182](https://github.com/HKUDS/nanobot/issues/2182)** (Feature): Hook system (like Copilot CLI) for lifecycle events (*e.g.*, pre/post tool use). *Long-standing request*; may be prioritized next sprint.  

---

## **5. Bugs & Stability**  
### **Critical Bugs Reported/Fixed Today:**  
| Severity | Issue | Status | PR Link |  
|----------|-------|--------|---------|  
| High | Transcription provider misconfiguration (#3637) | ✅ Fixed | [#3967](https://github.com/HKUDS/nanobot/pull/3967) |  
| Medium | Exec tool timeout capped at 600s (#3595) | ✅ Fixed | [#3967](https://github.com/HKUDS/nanobot/pull/3967) |  
| Low | Dream memory duplication (#3047) | 🔄 Active | PR #3952 in progress |  

No crashes or regressions reported in the last 24h.

---

## **6. Feature Requests & Roadmap Signals**  
### **High-Priority User Requests:**  
- **Per-Subagent Temperature Control**: Already addressed in PR #3975.  
- **Hook System**: #2182 (lifecycle automation) could improve extensibility.  
- **Real-Time Memory Learning**: #3973 suggests dynamic Dream updates beyond `history.jsonl`—future work needed.  
- **WhatsApp Human Reply Pause**: #2837 (privacy-focused bot behavior) may require event-listener integration.  

**Prediction**: Next release likely includes `spawn` temperature fixes (#3969) and OpenAI API flexibility (#3974).

---

## **7. User Feedback Summary**  
### **Pain Points & Use Cases:**  
- **Transparency**: Users struggle with hidden provider configs (#3637)—fix improved clarity.  
- **Memory Efficiency**: Redundant entries in `MEMORY.md` (#3047) hurt performance; MECE prompts (#3952) aim to resolve.  
- **Flexibility**: Demand for task-specific reasoning modes (e.g., low temp for JSON parsing, high temp for brainstorming).  
- **Integration**: Azure Speech (#3970) and Zhipu AI (#3971) show strong interest in multi-provider support.  

*Satisfaction*: Bug fixes received quick responses (e.g., #3595/#3637 merged within days), indicating responsive maintenance.

---

## **8. Backlog Watch**  
### **Issues Needing Attention:**  
1. **[#2182](https://github.com/HKUDS/nanobot/issues/2182)**: Hooks system—could unlock advanced automation.  
2. **[#3973](https://github.com/HKUDS/nanobot/issues/3973)**: Real-time Dream learning—key for adaptive agents.  
3. **[#2837](https://github.com/HKUDS/nanobot/issues/2837)**: WhatsApp human reply detection—requires chat context analysis.  

These items align with core agent intelligence goals and should be prioritized post-next release.

--- 

**Overall Health**: NanoBot is **stable and feature-driven**, with rapid iteration on user-reported bugs. The community’s feedback loop is effective, and upcoming changes will address both technical debt (memory, timeouts) and extensibility (hooks, temperature control).

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – May 24, 2026**

---

## **1. Today's Overview**  
Hermes Activity remains high with **50 Issues and 50 PRs updated in the last 24 hours**, reflecting active community engagement. The project is addressing critical bugs (e.g., CLI/TUI stability, plugin system) while advancing features (e.g., memory plugins, provider capabilities). No new releases were published this week. Key areas of focus include **gateway reliability, multi-platform support, and configuration management**.

---

## **2. Releases**  
*No new releases today.*  

---

## **3. Project Progress**  
- **Merged PRs**:  
  - [#31215](https://github.com/NousResearch/hermes-agent/pull/31215): Added `secret-guard` plugin to prevent credential leaks.  
  - [#31210](https://github.com/NousResearch/hermes-agent/pull/31210): Fixed Azure AI Foundry model resolution for non-OpenAI providers (DeepSeek, Grok, etc.).  
  - [#31214](https://github.com/NousResearch/hermes-agent/pull/31214): Normalized shared session IDs across platforms (Telegram/Discord) to reduce agent bloat.  
- **Closed PRs**: Fixes for `.env null-byte stripping` (#29360, #31211) and `delegate timeout diagnostics` (#31207).  

---

## **4. Community Hot Topics**  
### **Top Active Issue: [Claude CLI Bug](#29125)**  
- **Issue**: Hermes fails when used via Claude CLI ([#29125](https://github.com/NousResearch/hermes-agent/issues/29125)).  
  - **Comments**: 19 | 👍 7  
  - **Need**: Provider integration refinement (Anthropic/OpenAI client conflicts).  

### **Plugin System Debates**  
- **OpenViking Memory Mirroring Failure**: [#31000](https://github.com/NousResearch/hermes-agent/issues/31000) (3 comments) — Users demand plugin reliability fixes.  
- **Infisical Vault Request**: [#22791](https://github.com/NousResearch/hermes-agent/issues/22791) (👍 5) — Expanding secret manager ecosystem.  

---

## **5. Bugs & Stability**  
| **Severity** | **Bug** | **Fix Status** |
|-------------|---------|----------------|
| **High** | [Telegram DM Topic Hijacking](#31086) ([#31086](https://github.com/NousResearch/hermes-agent/issues/31086)) — New DMs reused old topic IDs. | PR: In progress ([#31214](https://github.com/NousResearch/hermes-agent/pull/31214)). |
| **Medium** | [QQ Bot CPU Spin](#31193) ([#31193](https://github.com/NousResearch/hermes-agent/issues/31193)) — Reconnect loop consumes 100% CPU. | PR: Proposed fix needed. |
| **Low** | [Kanban DB Corruption](#31158) ([#31158](https://github.com/NousResearch/hermes-agent/issues/31158)) — Concurrency race condition. | PR: SQLite hardening ([#31208](https://github.com/NousResearch/hermes-agent/pull/31208)). |

---

## **6. Feature Requests & Roadmap Signals**  
- **Memory Plugins**: LLM Wiki ([#31201](https://github.com/NousResearch/hermes-agent/pull/31201)) and OpenViking fixes (#31000) signal demand for richer memory backends.  
- **Provider Flexibility**: Custom capability metadata ([#31140](https://github.com/NousResearch/hermes-agent/pull/31140)) allows per-model feature flags (e.g., vision support).  
- **Security**: Secret guard plugin ([#31215](https://github.com/NousResearch/hermes-agent/pull/31215)) reflects growing need for credential protection.  

---

## **7. User Feedback Summary**  
- **Pain Points**:  
  - **Gateway Reliability**: Multiple reports of crashes mid-session (#27282, #31162) and slow backend timeouts (#27059).  
  - **Configuration Drift**: Cron jobs ignoring global model changes (#19615).  
  - **UX Conflicts**: Discord auto-enabling without token checks (#31154).  
- **Satisfaction**: Praise for plugin extensibility (👍 on Infisical request) but frustration with TUI accessibility gaps (#30793).  

---

## **8. Backlog Watch**  
- **Critical Unanswered**:  
  - [Azure OpenAI Config Bug](#25378) ([#25378](https://github.com/NousResearch/hermes-agent/issues/25378)) — Broken API endpoint handling needs urgent review.  
  - [Kanban DB Corruption Risk](#30445) ([#30445](https://github.com/NousResearch/hermes-agent/issues/30445)) — Multi-profile SQLite access requires locking fixes.  
- **Long-Term**: Candlestick-patterns label reclassification (#31166) and Discord reaction emoji customization (#31167) await implementation.  

--- 

**Health Score**: 🟡 Moderate (high activity, but critical bugs persist). Prioritize gateway stability and plugin reliability in next sprints.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# **PicoClaw Project Digest – May 24, 2026**  

## **1. Today's Overview**  
PicoClaw shows steady activity with **6 updated issues**, **9 PRs (3 open)**, and **1 new nightly release** (`v0.2.9-nightly.20260523`). The project is actively addressing bug fixes, channel integrations (e.g., Discord), and provider compatibility (DeepSeek/OpenAI). Recent merges include critical context-budget enforcement for DeepSeek thinking mode and improved attachment handling in Discord. Community engagement remains high, particularly around feature requests like email support and multi-account WeChat integration.

---

## **2. Releases**  
- **Nightly Build**: [`v0.2.9-nightly.20260523.f09a7d67`](https://github.com/sipeed/picoclaw/releases/tag/nightly)  
  - *Automated build; may be unstable*. Includes recent fixes from `main` branch. No breaking changes reported.

---

## **3. Project Progress**  
### **Merged Fixes & Features**  
- **Context Budget Enforcement** (#2895): Fixed a regression where DeepSeek’s `FreshTailCount` bypassed token limits ([Issue #2894](https://github.com/sipeed/picoclaw/issues/2894)).  
- **DeepSeek Thinking Mode Mapping** (#2928): Added OpenAI-compatible `thinking_level` support for DeepSeek (`off/low/high/xhigh`).  
- **Discord Attachments** (#2931): Non-audio attachments (images/files) are now properly downloaded instead of dropped as raw URLs.  
- **Dependency Update** (#2930): Upgraded `golang.org/x/net` to `v0.55.0` for security compliance.  

### **Open PRs Requiring Attention**  
- **WeChat Multi-Account Support** (#2883): Adds dynamic config parsing for multiple WeChat accounts.  
- **Code Block UI Tweaks** (#2933): Introduces line numbers and wrap toggling for code blocks.  
- **Czech Locale** (#2932): New full translation (`cs`) for frontend strings.  

---

## **4. Community Hot Topics**  
### **Top Issue: Email as Native Channel** (#2421)  
- **7 comments, 2 upvotes**. Users demand email support for enterprise/scientific workflows (e.g., corporate environments where chat apps are restricted). High priority if addressed soon.  
- *[Link](https://github.com/sipeed/picoclaw/issues/2421)*  

### **Top PR: WeChat Multi-Account Config** (#2883)  
- Early-stage feature request from `@jiegehere`. Could unlock broader WeChat use cases (e.g., personal + work accounts).  
- *[Link](https://github.com/sipeed/picoclaw/pull/2883)*  

---

## **5. Bugs & Stability**  
### **Critical Fixes Merged**  
1. **Context Window Overflow** (#2894 → #2895):  
   - *Severity*: High (prevented API failures due to model limits).  
   - *Fix*: Budget now enforces `FreshTailCount` constraints.  
2. **Permission Denied on Xiaomi Devices** (#2880):  
   - *Severity*: Medium (storage permission issue). No fix merged yet—needs review.  

---

## **6. Feature Requests & Roadmap Signals**  
- **Email Integration** (#2421): Likely next version if community traction continues.  
- **Multi-WeChat Accounts** (#2883): Technical feasibility confirmed; pending implementation.  
- **UI Enhancements** (#2933): Code block usability improvements align with user feedback.  
- **Localization Push**: Czech (`cs`) addition suggests ongoing i18n efforts.  

---

## **7. User Feedback Summary**  
- **Positive**: DeepSeek compatibility (#2928) and budget fixes (#2895) address key pain points.  
- **Negative**: Xiaomi device permissions (#2880) frustrate users needing offline functionality.  
- **Use Cases**: Enterprise (email), cross-platform (WeChat/Discord), and developer tools (code blocks) are recurring themes.  

---

## **8. Backlog Watch**  
- **Stale Issues Needing Review**:  
  - **Gateway Initialization Bug** (#2742): Telegram channels missing after startup in v0.2.8. No responses since May 1.  
  - **Upgrade Guide Missing** (#2834): Users struggle with manual updates (closed but not resolved).  
- **Unmerged PRs**:  
  - **Xiaomi Storage Fix** (#2880): Should be prioritized given device-specific reports.  

---

### **Health Assessment**  
✅ **Strengths**: Active maintenance, provider compatibility, and responsiveness to critical bugs.  
⚠️ **Risks**: Permission issues (#2880) and stale issues (#2742) could erode user trust if unaddressed.  
🔮 **Prediction**: Next release likely includes email support (#2421) and WeChat multi-account (#2883) if development accelerates.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# **NanoClaw Project Digest – May 24, 2026**  

## **1. Today’s Overview**  
NanoClaw saw **high activity today**, with **4 issues updated (1 open)** and **17 PRs merged/closed (4 still open)**, indicating robust development momentum. The project addressed several WhatsApp-related routing bugs (`#2193`, `#2194`), transcript rotation fixes (`#2586`), and security improvements for approval flows (`#2545`). No new releases were published, but multiple critical stability fixes were landed in the past 24 hours.  

## **2. Releases**  
*No new releases published.*  

## **3. Project Progress**  
- **Merged Fixes**:  
  - **WhatsApp JID persistence fix (#2554)**: Resolved LID-to-phone JID mapping not persisting after restarts ([Issue #2194](https://github.com/nanocoai/nanoclaw/issues/2194)).  
  - **Transcript rotation (#2586)**: Prevents unbounded growth of session transcripts in long-running agents.  
  - **Security hardening (#2545)**: Replaced `Math.random()` with CSPRNG for approval card IDs.  
  - **WhatsApp formatting skill (#2553)**: Added container skill to enforce `@<phone-digits>` syntax for mentions.  
- **Open PRs**:  
  - **`compact` skill merge bug (#2603)**: Breaking build due to v1/v2 symbol mismatches.  
  - **Slash command handling (#2346)**: Unrecognized commands now treated as normal chat.  

## **4. Community Hot Topics**  
- **Most Active Issue**: **[#2603](https://github.com/nanocoai/nanoclaw/issues/2603)** – Build failure when merging `skill/compact` into v2 (0 comments but high urgency).  
- **Notable PR Engagement**: **[#2545](https://github.com/nanocoai/nanoclaw/pull/2545)** – Security-focused approval flow fixes (no reactions but critical impact).  
- **Underlying Needs**:  
  - WhatsApp integration reliability (multiple fixes this week).  
  - Transcript management (rotation logic gaps).  
  - Skill compatibility (v1→v2 migration pains).  

## **5. Bugs & Stability**  
| **Severity** | **Bug** | **Status** |  
|-------------|---------|------------|  
| **Critical** | WhatsApp channel routing failures (#2193, #2194) | Fixed (#2554) |  
| **High** | Inbound.DB corruption hangs (#2597) | Fixed (#2597) |  
| **Medium** | CLAUDE.local.md not auto-loaded (#2185) | Fixed (#2598) |  
- **Unresolved**: **Compact skill merge issue (#2603)** – Requires maintainer attention.  

## **6. Feature Requests & Roadmap Signals**  
- **Custom OpenAI-compatible endpoints (#1994)**: Per-group LLM backend support (merged).  
- **WhatsApp formatting (#2553)**: Standardized mention syntax via container skill.  
- **Next Likely Focus**:  
  - Skill ecosystem modularity (v1→v2 compatibility).  
  - Agent transcript lifecycle management (rotation policies).  

## **7. User Feedback Summary**  
- **Pain Points**:  
  - WhatsApp adapters require manual JID persistence workarounds (users report restart failures).  
  - Skill merges break due to version mismatches (e.g., `compact` skill).  
  - Transcript bloat in long-lived sessions (e.g., hub agents).  
- **Satisfaction**: Security fixes (CSPRNG) and WhatsApp improvements likely address core needs.  

## **8. Backlog Watch**  
- **High Priority**:  
  - **[#2603](https://github.com/nanocoai/nanoclaw/issues/2603)** – Skill merge breaks builds; needs v1/v2 symbol resolution strategy.  
  - **Unmerged PRs**: **Slash command handling (#2346)** – Could improve UX for unrecognized commands.  
- **Stale Issues**: None recently updated beyond last month.  

---  
**Health Status**: ✅ **Stable & Active** – Focused on WhatsApp reliability, transcript management, and security. Maintainers are addressing critical bugs swiftly, though skill compatibility requires deeper review.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# **NullClaw Project Digest – May 24, 2026**  

---

## **1. Today’s Overview**  
NullClaw saw **high development activity** with **10 open PRs** in the last 24 hours, but no issues or releases. The focus was primarily on bug fixes, security hardening, and infrastructure improvements (e.g., removing `curl` subprocesses, path security, and webhook hardening). No new features were merged, suggesting a maintenance-heavy phase. The absence of issue updates indicates stable core functionality, though unresolved PRs may impact future releases.

---

## **2. Releases**  
*No new releases* were published today or recently. The project remains on its latest stable version.  

---

## **3. Project Progress**  
Key advancements/fixes from recent PRs:  
- **Telegram Channel Fixes (#928)**: Resolved subagent result delivery gaps in polling mode ([link](https://github.com/nullclaw/nullclaw/pull/928)).  
- **Memory Tool Fixes (#929)**: Fixed global memory visibility in `memory_list` tool ([link](https://github.com/nullclaw/nullclaw/pull/929)).  
- **Security Hardening (#907)**: Removed credentialed `curl` subprocesses, enforced inbound trust for Telegram/Discord ([link](https://github.com/nullclaw/nullclaw/pull/907)).  
- **Path Security (#925)**: Allowed macOS workspaces under `/private/var/folders/` while blocking system paths ([link](https://github.com/nullclaw/nullclaw/pull/925)).  
- **HTTP Refactor (#881)**: Migrated to native Zig HTTP handlers, eliminating runtime `curl` dependencies ([link](https://github.com/nullclaw/nullclaw/pull/881)).  

---

## **4. Community Hot Topics**  
**Top Active PRs:**  
- **#930 (Telegram Reply Context)**: Adds support for `reply_to_message.text` in inbound contexts (closes #916) ([link](https://github.com/nullclaw/nullclaw/pull/930)). *Potential need for multi-message conversation handling.*  
- **#924 (Channel Allow-List Numeric IDs)**: Fixes silent exclusion of Telegram user IDs configured as integers (closes #869, #901) ([link](https://github.com/nullclaw/nullclaw/pull/924)). *Common config issue for Telegram users.*  

**Underlying Needs:**  
- **Telegram UX**: Users expect richer context (replies, numeric IDs).  
- **Config Robustness**: Edge cases in JSON parsing require stricter validation.  

---

## **5. Bugs & Stability**  
**Critical Issues Addressed:**  
- **Subagent Result Leak (#928)**: Production bots losing subagent outputs ([link](https://github.com/nullclaw/nullclaw/issues/918)). *Severity: High – PR pending review.*  
- **Global Memory Visibility (#929)**: `memory_list` filtering broken for session-less entries ([link](https://github.com/nullclaw/nullclaw/issues/917)). *Severity: Medium – Functional regression.*  

No crashes/regressions reported; fixes are actively being developed.

---

## **6. Feature Requests & Roadmap Signals**  
**Emerging Trends:**  
- **Enhanced Context Handling**: Support for reply chains (#930) suggests demand for threaded conversations.  
- **Provider API Stability**: Tests for deterministic failures (#926, #927) hint at upcoming provider reliability improvements.  
- **Security by Default**: Credential removal (#907) aligns with broader zero-trust trends.  

**Predicted Next Features:**  
- Multi-session memory management.  
- Unified error handling for provider probes.  

---

## **7. User Feedback Summary**  
**Pain Points:**  
- **Telegram Bots**: Silent failures due to numeric ID misconfigurations (#924).  
- **Debugging**: Provider errors clutter test logs (#927).  
- **Tool Limitations**: Global memory access gaps (#929).  

**Satisfaction Indicators:**  
- No critical issues open; fixes prioritized based on production reports (e.g., #928).  

---

## **8. Backlog Watch**  
**Unresolved High-Priority Items:**  
- **#930 (Telegram Reply Text)**: Could significantly improve bot responsiveness if merged soon.  
- **#924 (Numeric IDs)**: Affects Telegram adoption—needs attention before release.  
- **#907 (Security)**: Critical for production deployments; pending final review.  

**Recommendation:** Maintainers should prioritize these PRs to prevent user blockers.  

--- 

**Overall Health:** ✅ **Stable but active**. Focus on security, reliability, and UX refinements.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# **IronClaw Project Digest – May 24, 2026**  

## **1. Today’s Overview**  
IronClaw saw **high activity today**, with **50 PRs updated** (34 open, 16 merged) and **16 active Issues**, reflecting intense focus on security hardening, hook framework activation, and sandbox improvements. The project is in a **development-heavy phase**, with core maintainers (`zmanian`, `serrrfirat`) driving architectural refinements, particularly around **multi-tenant security** and **Reborn-native integration**. No new releases were published.  

---

## **2. Releases**  
*No new releases this day.*  

---

## **3. Project Progress**  
- **Merged/Closed PRs**:  
  - **[#3951](https://github.com/nearai/ironclaw/pull/3951)**: Enables third-party hook extension activation via projection model (`HOOKS_THIRD_PARTY_ENABLED` flag). Critical for multi-tenant extensibility.  
  - **[#3938](https://github.com/nearai/ironclaw/pull/3938)**: Activates the hook framework in production behind `HOOKS_ENABLED` (default OFF), resolving [#3934](https://github.com/nearai/ironclaw/issues/3934).  
  - **[#3937](https://github.com/nearai/ironclaw/pull/3937)**: Completes adversarial parity testing for durable predicate backends, ensuring backend consistency.  
  - **[#3952](https://github.com/nearai/ironclaw/pull/3952)**: Hardens `LocalFilesystem` against TOCTOU races, critical for tenant isolation.  

---

## **4. Community Hot Topics**  
- **Top Active Issues**:  
  - **[#3564](https://github.com/nearai/ironclaw/issues/3564)** (*Security*): **Wallet signing requires unforgeable user channels** (0👍, 1 comment). Highlights need for stronger auth separation.  
  - **[#3917](https://github.com/nearai/ironclaw/issues/3917)** (*Security Review*): Debate over `RuntimeCredentialTarget::PathPlaceholder`—potential leakage risk.  
  - **[#3953](https://github.com/nearai/ironclaw/issues/3953)** (*RFC*): Proposal for OpenAPI/AsyncAPI contracts to standardize API surfaces. Shows demand for interoperability.  
- **Top PR Engagement**:  
  - **[#3960](https://github.com/nearai/ironclaw/pull/3960)**: Introduces `SigningProvider` trait for secure signing abstraction (core substrate work).  

---

## **5. Bugs & Stability**  
- **Critical Security**:  
  - **[#3915](https://github.com/nearai/ironclaw/issues/3915)**: Default-to-no-op guardrails silently bypassed (3 instances). Fixed in follow-up PRs (#3928, #3931).  
  - **[#3931](https://github.com/nearai/ironclaw/pull/3931)**: Fixes cross-tenant replay/provider spoofing in event-triggered hooks (fail-closed).  
- **QA Regression**:  
  - **[#3945](https://github.com/nearai/ironclaw/issues/3945)**: macOS/Linux installer script broken since v0.26 (unfixed today; needs attention).  
- **Nightly E2E Failure**:  
  - **[#3447](https://github.com/nearai/ironclaw/issues/3447)**: Last run failed (commit `030cfeb`). Investigation needed.  

---

## **6. Feature Requests & Roadmap Signals**  
- **High Priority**:  
  - **Hook Framework Activation** (#3934, #3938): Production-ready hooks are next milestone.  
  - **Multi-Tenant Sandboxing** (#3948): Reborn-native Docker transport reduces attack surface.  
  - **Budget Tracking** (#3899): Follow-ups for Reborn cost-based budgets.  
- **RFCs Under Discussion**:  
  - **OpenAPI/AsyncAPI Standards** (#3953): Potential for API-first integrations.  
  - **Manifest v2 Credentials** (#3944): Runtime credential declarations in manifests.  

---

## **7. User Feedback Summary**  
- **Pain Points**:  
  - Installer regressions (#3945) frustrate Linux/macOS users.  
  - Security-critical issues (#3564, #3917) signal demand for stricter auth/signing controls.  
- **Positive Signals**:  
  - Adoption of Reborn-native features (#3948, #3955) aligns with user requests for tighter isolation.  

---

## **8. Backlog Watch**  
- **Urgent**:  
  - **Installer Bug (#3945)**: Broken since 0.26; needs patch release.  
  - **Nightly E2E Failures (#3447)**: Investigate root cause (link: [run logs](https://github.com/actions/runs/26323246539)).  
- **Architectural Debt**:  
  - **Hook Composition Maintainability** (#3958): Large `hooks.rs` split deferred for scalability.  
  - **FS Hardening** (#3956): Mount traversal containment pending `openat2` fixes.  

---  
**Key Takeaway**: IronClaw is advancing rapidly toward **production-ready hooks** and **multi-tenant security**, but installer stability and E2E robustness require immediate attention. Security hardening (#3951, #3952) remains a top priority.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# **LobsterAI Project Digest (2026-05-24)**

---

## **1. Today's Overview**  
LobsterAI saw moderate activity in the past 24 hours, with **3 open issues** and **2 open PRs** updated but no new releases. The project is currently focused on addressing memory system bottlenecks, OpenClaw’s critical vulnerabilities, and schema compatibility for Dreaming mode. No merges or closures were reported, indicating active but unresolved development work.

---

## **2. Releases**  
*No new releases were published today.*  

---

## **3. Project Progress**  
- **No merged PRs** this period; both open PRs (#1529, #1530) remain under review since April:  
  - [#1529](https://github.com/netease-youdao/LobsterAI/pull/1529): Adds batch export of conversations as JSON files (linked to Issue #1528).  
  - [#1530](https://github.com/netease-youdao/LobsterAI/pull/1530): Enables Agent selection for scheduled tasks in multi-Agent setups.  

---

## **4. Community Hot Topics**  
**Top Active Issues:**  
- **[#2041](https://github.com/netease-youdao/LobsterAI/issues/2041): Memory System Bottleneck**  
  - Highlights a gap between LobsterAI’s `memory/`/`learnings/` structure and the ideal "three-tier memory" framework (trajectory/declarative/structured). Suggests urgent scalability improvements.  
- **[#2040](https://github.com/netease-youdao/LobsterAI/issues/2040): OpenClaw’s Critical Weaknesses**  
  - Flags **high severity**: memory fragmentation, malicious skills (1467/5700), and unscalable Computer Use costs. Indicates systemic risks requiring architectural fixes.  
- **[#2039](https://github.com/netease-youdao/LobsterAI/issues/2039): Dreaming Mode Schema Bug**  
  - A regression where `/dreaming on` writes incompatible configurations to `memory-core`. Requires schema updates and UI fixes.  

**Underlying Needs:**  
Users demand **scalable memory systems**, **security hardening**, and **cross-task learning capabilities**—key for enterprise adoption.

---

## **5. Bugs & Stability**  
**Critical Issues Today:**  
1. **Dreaming Mode Schema Incompatibility** (#2039)  
   - *Severity*: High (breaks persistence after Gateway restarts).  
   - *Fix PR*: None yet; needs `memory-core` schema update.  
2. **OpenClaw Security Vulnerabilities** (#2040)  
   - *Severity*: Extreme (malicious skills + token cost spikes).  
   - *Action Required*: Immediate mitigation strategies needed.  

---

## **6. Feature Requests & Roadmap Signals**  
**High-Interest Features Under Development:**  
- **Batch Export Conversations** (#1529) → Improves data portability.  
- **Multi-Agent Task Assignment** (#1530) → Supports complex workflows.  
- **Memory System Overhaul** (#2041) → Likely next major focus post-Q2.  

---

## **7. User Feedback Summary**  
**Pain Points:**  
- **Memory Fragmentation**: Users struggle with cross-session knowledge retention (#2041).  
- **Security Risks**: Malicious skills threaten reliability (#2040).  
- **Configuration Fragility**: Dreaming mode requires manual intervention post-reboot (#2039).  

**Satisfaction:** Mixed—core features are functional but stability/security concerns dominate discussions.

---

## **8. Backlog Watch**  
**Unresolved Critical Items Needing Attention:**  
- **#2040 (OpenClaw Security)**: Requires immediate action due to malicious skill prevalence.  
- **#2039 (Dreaming Schema)**: Blocking persistent dream state functionality.  
- **#2041 (Memory Scalability)**: Long-term architectural hurdle.  

**Maintainer Priority Recommendation**: Address security and schema bugs first, then memory design.  

--- 

**Data Source**: [GitHub.netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# **Moltis Project Digest - May 24, 2026**  

## **1. Today's Overview**  
Moltis shows steady development activity with **8 issues updated** (5 open, 3 closed) and **4 PRs merged/closed** in the last 24 hours. No new releases were published, but several critical bugs were fixed, including hook registration, vault initialization, and light-mode syntax highlighting. The project remains focused on improving agent capabilities, security, and user experience.  

## **2. Releases**  
*No new releases this period.*  

## **3. Project Progress**  
- **PRs Merged:**  
  - **[#1048](https://github.com/moltis-org/moltis/pull/1048)**: Fixed hooks registration from `moltis.toml` config, ensuring runtime execution of declared hooks.  
  - **[#1050](https://github.com/moltis-org/moltis/pull/1050)**: Resolved vault initialization for existing-password setups, improving encryption workflow.  
  - **[#1047](https://github.com/moltis-org/moltis/pull/1047)**: Restored syntax highlighting in light mode, fixing a UI regression.  
- **New PR Opened:**  
  - **[#1049](https://github.com/moltis-org/moltis/pull/1049)** (open): Introduces "agents as capability boundaries," enabling granular control over MCP servers, sandbox policies, and skills per agent. A major architectural shift.  

## **4. Community Hot Topics**  
- **Most Active Issues:**  
  - **[#553](https://github.com/moltis-org/moltis/issues/553)** (enhancement): Request for **per-agent loopback/timeout settings**. Indicates demand for fine-grained agent customization (👍 0, 1 comment).  
  - **[#1054](https://github.com/moltis-org/moltis/issues/1054)** (bug): **Env vars exposed via `mcp_list`**—a security concern (👍 0, no comments yet).  
- **Analysis:** Security (env var leakage) and agent configurability are top concerns. The new capability-boundaries PR (#1049) suggests a roadmap toward modular agent design.  

## **5. Bugs & Stability**  
| Issue | Severity | Status | Fix PR? |  
|-------|----------|--------|---------|  
| **[#1051](https://github.com/moltis-org/moltis/issues/1051)** | Medium (security risk) | Open | Unassigned |  
| *OpenAI-compatible `baseUrl` not validated* | | | |  
| **[#1054](https://github.com/moltis-org/moltis/issues/1054)** | High (security) | Open | Unassigned |  
| *Env vars leaked via `mcp_list`* | | | |  
| **[#1053](https://github.com/moltis-org/moltis/issues/1053)** | Low (UX) | Open | Unassigned |  
| *Session title generation broken* | | | |  

**Recent fixes:**  
- [#1045](https://github.com/moltis-org/moltis/issues/1045) (code block highlighting)  
- [#1046](https://github.com/moltis-org/moltis/issues/1046) (vault password detection)  

## **6. Feature Requests & Roadmap Signals**  
- **Agent Capabilities (#1049)** is a major upcoming feature, allowing **per-agent control over MCP servers, sandbox policies, and skills**. This signals a shift toward **modular, role-based agents**.  
- **Per-agent timeout/loopback settings (#553)** hints at future **agent isolation and resource management**.  
- **Security hardening** (e.g., env var validation) may follow after core agent redesign.  

## **7. User Feedback Summary**  
- **Pain Points:**  
  - **Security gaps** (env leaks, unvalidated URLs) need urgent attention.  
  - **UI/UX regressions** (light-mode syntax) frustrate users.  
  - **Vault setup friction** (#1046, #1050) indicates configuration complexity.  
- **Satisfaction:** Quick bug resolution (e.g., hooks, vault) suggests responsiveness to critical issues.  

## **8. Backlog Watch**  
- **High Priority:**  
  - **[#1051](https://github.com/moltis-org/moltis/issues/1051)** and **[#1054](https://github.com/moltis-org/moltis/issues/1054)** require security review before next release.  
- **Long-Term:**  
  - **Capability-boundary architecture (#1049)** will likely dominate next version planning.  
  - **Agent-level timeouts (#553)** could be tied to this redesign.  

### **Health Assessment:**  
✅ **Stability:** Good (critical bugs addressed quickly).  
⚠️ **Security:** Needs vigilance (env leaks, URL validation).  
🚀 **Innovation:** Strong focus on agent modularity (#1049).  

**Links:** [GitHub Issues](https://github.com/moltis-org/moltis/issues?q=is%3Aissue), [PRs](https://github.com/moltis-org/moltis/pulls)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# **CoPaw Project Digest – May 24, 2026**  

## **1. Today's Overview**  
CoPaw (QwenPaw) saw moderate activity with **11 issues updated** in the last 24 hours (10 open, 1 closed) and **2 open PRs** under review. No new releases were published. The project remains focused on bug fixes, MCP enhancements, and UX improvements, particularly around mobile accessibility, memory management, and token tracking. Community engagement is steady but low in reactions/comments per issue/PR.  

---

## **2. Releases**  
*No new releases today.*  

---

## **3. Project Progress**  
- **PRs**:  
  - **[#4630](https://github.com/agentscope-ai/QwenPaw/pull/4630)**: Enhances MCP management with marketplace integration, health checks, and key validation (*under review*).  
  - **[#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622)**: Adds a `datapaw` plugin with 12 BI skills (*first-time contributor contribution*).  
  *Neither PR has merged yet; both are actively discussed.*  

---

## **4. Community Hot Topics**  
### **Top Issues by Engagement**  
1. **[#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265)** *(Closed)*: Severe memory leak when reading logs (5 comments). Highlights critical stability risk.  
2. **[#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644)**: Console UI tool-call display bugs (3 comments). Real-time feedback gaps frustrate users.  
3. **[#4635](https://github.com/agentscope-ai/QwenPaw/issues/4635)**: Mobile client enhancement request (2 comments). Indicates demand for cross-platform consistency.  

*Underlying Needs*:  
- **Stability** (#4265): Memory/resource leaks require urgent attention.  
- **UX Consistency** (#4644, #4635): Tool visibility and mobile support are top pain points.  

---

## **5. Bugs & Stability**  
### **Critical**  
- **[#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265)**: Log reading causes SSH lockouts (closed, but root cause unclear).  
- **[#4643](https://github.com/agentscope-ai/QwenPaw/issues/4643)**: MCP OAuth lacks `client_secret` support (blocks enterprise integrations).  
- **[#4646](https://github.com/agentscope-ai/QwenPaw/issues/4646)**: Schema sanitizer corrupts boolean values (MCP compatibility issue).  

*Open PRs addressing these? None yet; may need maintainer prioritization.*  

---

## **6. Feature Requests & Roadmap Signals**  
### **High Demand Features**  
1. **Mobile-First Client** (#4635): Align with chat channels (DingTalk, Feishu) for full-stack access.  
2. **Token Metrics Display** (#4647): Users need cost/performance transparency.  
3. **Remote Daemon Support** (#4645): Extend Pet desktop app to manage remote agents.  
4. **Auto-Summary Hooks** (#4640, #4639): Reduce manual memory archiving (memory utilization gap).  
5. **Plugin System Refinement** (#4642): Non-invasive extensibility vs. OpenClaw’s flexibility.  

*Next Version Prediction*: Mobile UI and memory hooks likely candidates.  

---

## **7. User Feedback Summary**  
**Pain Points**:  
- **Resource Management**: Memory leaks (#4265) disrupt workflows.  
- **Debugging**: Silent tool-call failures (#4644) hinder troubleshooting.  
- **Enterprise Readiness**: OAuth schema flaws (#4643) block confidential server integrations.  

**Satisfaction**:  
- Plugin contributions (e.g., DataPaw) show community enthusiasm for modularity.  
- Mobile inconsistencies (#4635) suggest unmet expectations compared to chat channels.  

---

## **8. Backlog Watch**  
**Urgent Unresolved Issues**:  
- **[#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265)**: Closed but needs audit—similar issues could recur.  
- **[#4643](https://github.com/agentscope-ai/QwenPaw/issues/4643)**: OAuth fix impacts security compliance.  
- **[#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644)**: UI real-time sync is a blocker for adoption.  

**Maintainer Focus Recommended**:  
- Prioritize memory leak fixes (#4265) before scaling usage.  
- Address OAuth schema bugs (#4643) to unlock enterprise features.  

--- 

**Health Assessment**: CoPaw is active but faces stability and scalability challenges. Mobile and memory features are high-priority signals from users. Proactive bug resolution will be key to maintaining trust.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# **ZeptoClaw Project Digest – May 24, 2026**  

## **1. Today’s Overview**  
ZeptoClaw saw **high activity** in the past 24 hours: **3 issues updated** (1 open, 2 closed) and **17 PRs merged/updated** (3 open). The project is actively addressing dependency security updates (RUSTSEC advisories), middleware pipeline refactoring (#593), and documentation alignment (#565/#570). No new releases were published today.  

---

## **2. Releases**  
*No new releases on May 24.*  

---

## **3. Project Progress**  
- **Merged PRs:**  
  - **#583** (Closed): Phase 2 of middleware pipeline wiring for `process_message` and `CoreLoop`, though incomplete due to scaffolding needs ([details](https://github.com/qhkm/zeptoclaw/pull/583)).  
  - **#571** (Closed): Added trigger-phrase guidance to the `longterm_memory` tool description, mirroring Hermes Agent’s self-improvement loop ([details](https://github.com/qhkm/zeptoclaw/pull/571)).  
  - **#570** (Closed): Aligned docs (README, AGENTS.md) with local-first positioning and softened competitor comparisons ([details](https://github.com/qhkm/zeptoclaw/pull/570)).  
  - Multiple dependency updates (e.g., `tokio`, `rustls`, `astro`) via Dependabot ([list](https://github.com/qhkm/zeptoclaw/pulls?q=is%3Apr+is%3Aclosed+sort%3Aupdated-desc)).  

- **Open PRs:**  
  - **#594**: Critical RUSTSEC advisory fixes (`lettre`, `diesel`) blocked CI until resolved ([details](https://github.com/qhkm/zeptoclaw/pull/594)).  
  - **#578**, **#572**: Minor frontend dependency bumps (Astro, Starlight landing pages).  

---

## **4. Community Hot Topics**  
- **Middleware Pipeline Refactoring (#593)**: High-priority RFC to move `process_message` into the `Pipeline` middleware system ([issue](https://github.com/qhkm/zeptoclaw/issues/593)). Signals a major architectural shift toward modular agent design.  
- **Documentation Alignment (#565/#570)**: Multiple PRs to clarify ZeptoClaw’s "local-first" positioning after discrepancies arose ([PR #570](https://github.com/qhkm/zeptoclaw/pull/570)). Indicates user demand for transparent project scope.  

---

## **5. Bugs & Stability**  
- **Security Blockers**:  
  - **RUSTSEC advisories** (#594) halted CI due to zero-tolerance policy in `deny.toml`. Fixed by updating `lettre` and `diesel`.  
  - No crashes or regressions reported today; last known issue was `rumqttc` MQTT feature (parked upstream).  

---

## **6. Feature Requests & Roadmap Signals**  
- **Middleware Pipeline (#593)**: Phase 2b aims to decouple `process_message` from core logic—likely next milestone.  
- **Trigger-Phrase Tools (#571)**: Explicit user guidance for memory persistence, hinting at Hermes-inspired self-improvement features.  
- **Docs Updates (#565)**: Suggests future focus on competitive differentiation and user-facing clarity.  

---

## **7. User Feedback Summary**  
- **Pain Points**:  
  - Security strictness (RUSTSEC) caused workflow disruptions but reflects strong safety culture.  
  - Documentation inconsistencies (#565) led to confusion about project scope.  
- **Satisfaction**:  
  - Closed PRs (#570/#571) show responsiveness to user requests (Hermes integration patterns).  

---

## **8. Backlog Watch**  
- **#593 (Middleware Pipeline)**: Needs attention—Phase 2 was partially implemented (#583) but stalled.  
- **MQTT Integration**: Cargo feature is parked pending `rumqttc` upstream fixes (unresolved for weeks).  

### **Health Assessment**  
✅ **High momentum** (17 PRs merged in 24h)  
⚠️ **Critical path items** (middleware, security docs) need prioritization  
🔍 **Community engagement** focused on architecture and clarity—aligns with long-term goals.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – May 24, 2026**

---

## **1. Today's Overview**
ZeroClaw remains highly active with **50 issues and 50 PRs updated in the last 24 hours**, indicating steady development momentum. The project is focused on core stability (e.g., channel crashes, provider errors) alongside feature expansion (e.g., TUI Agent Chat, protocol extensions). No new releases were published today, but multiple high-risk issues are being actively addressed.

---

## **2. Releases**
- **None** released today.

---

## **3. Project Progress**
### **Merged/Closed PRs:**
- **PR #6882** (`fix(runtime): sanitize compressor media markers before truncation`)  
  - Fixes a regression where context truncation could split media markers, improving summarizer output integrity.  
  - [View PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6882)

### **In-Progress PRs:**
- **PR #6848** (`Integration/zeroclaw tui`)  
  - Early-stage work on a terminal UI for agent interactions.  
  - [View PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6848)
- **PR #6792–#6799** (Batch migration of 7+ hand-rolled channel allowlist predicates to `AllowlistAspect` archetype A/B/D→A)  
  - Part of ICSE 2027 M1 evaluation: standardizing security checks across channels (Slack, Matrix, Signal, etc.).  
  - [See all PRs](https://github.com/zeroclaw-labs/zeroclaw/pulls?q=is%3Apr+is%3Amerged+after:2026-05-23)

---

## **4. Community Hot Topics**
### **Top Issues by Engagement:**
#### **🔴 Issue #6856 – Missing `show_tool_calls` in Channel Schema v3** ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6856))  
- **5 comments**: Users report degraded behavior—tool call details aren’t visible in responses after migrating from schema v2 to v3. High priority due to workflow impact.

#### **🟠 Issue #6127 – Gateway Silent-Fallback Hardening** ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6127))  
- **4 comments**: Follow-up to credential-resolution improvements (#6099), ensuring fail-safety in gateway/provider fallbacks.

#### **🟡 Issue #6724 – Channels Supervisor Crashloops** ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6724))  
- **3 comments**: Critical bug when all channels are disabled (`enabled=false`), causing infinite supervisor restarts. Needs maintainer review.

#### **💡 PR #6665 – Add `channel_send` Tool with Default Target** ([Link](https://github.com/zeroclaw-labs/zeroclaw/pull/6665))  
- Addresses [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647): Adds cross-channel messaging capabilities.

---

## **5. Bugs & Stability**
| **Severity** | **Issue/PR** | **Impact** | **Fix Status** |
|-------------|--------------|-----------|----------------|
| **High** | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Supervisor crashloop when all channels disabled | Unresolved; needs maintainer action |
| **High** | [#6862](https://github.com/zeroclaw-labs/zeroclaw/issues/6862) | Gateway SPA fallback serves `index.html` for `/api/*` routes | Regression in v0.8.0-beta-1 |
| **Medium** | [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) | Missing tool-call visibility in channel responses | In progress (schema v3 fix proposed) |
| **Medium** | [#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180) | `llama-cpp` integration error | Provider compatibility issue |

---

## **6. Feature Requests & Roadmap Signals**
- **TUI Agent Chat (#6824)**  
  - Terminal-based UI for streaming interactions. Likely candidate for v0.9.x.
- **ACP Protocol Extensions (#6820)**  
  - Diff/file-proposal support for approval workflows. Aligns with web/dashboard UX.
- **Memory Strategy Decoupling (#6850)**  
  - Proposal to abstract memory policies from storage backends (RFC status).

---

## **7. User Feedback Summary**
- **Pain Points:**  
  - **Channel Configuration**: Users struggle with blank credentials causing crashloops ([#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724)).  
  - **Provider Failures**: Qwen/llama-server integration errors ([#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180), [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558)).  
  - **Tool Visibility**: Missing `show_tool_calls` breaks debugging workflows ([#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856)).  
- **Positive Signals:**  
  - Logo addition to [Agent Skills clients page (#5262)](https://github.com/zeroclaw-labs/zeroclaw/issues/5262) reflects community engagement.

---

## **8. Backlog Watch**
### **Critical Maintainer Attention:**
- **Issue #6724** ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6724))  
  - Immediate fix needed to prevent daemon instability.
- **Issue #6864** ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6864))  
  - Architectural dependency inversion between `channels` and `runtime`.
- **Issue #6715** ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6715))  
  - Cleanup of 200+ stale branches.

---

**Health Check:**  
✅ **Active Development**: High PR/issue throughput.  
⚠️ **Stability Risks**: Channel/config bugs require urgent fixes.  
🚀 **Growth Focus**: UI enhancements and protocol extensions signal roadmap direction.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*