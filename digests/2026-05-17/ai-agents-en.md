# OpenClaw Ecosystem Digest 2026-05-17

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-17 00:34 UTC

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

**OpenClaw Project Digest – May 17, 2026**

---

### 1. **Today’s Overview**
OpenClaw remains highly active with 500 updated issues and 500 pull requests in the last 24 hours, signaling strong community engagement and rapid development velocity. The project released three beta versions (v2026.5.16-beta.1 through .3), introducing xAI OAuth support, cron CLI enhancements, and maintainer tooling refinements. With 430 open/active issues and 412 open PRs, the ecosystem continues to prioritize stability improvements, security hardening, and multi-agent orchestration resilience.

---

### 2. **Releases**
Three new beta releases were published on May 16, 2026:

- **v2026.5.16-beta.3**: Adds xAI Grok OAuth authentication for SuperGrok subscribers, enabling `xai/*` model access without requiring `XAI_API_KEY`. Also introduces `openclaw cron run --wait` with configurable timeout and polling intervals, plus precise filtering via `cron.runs --run-id`.
  
- **v2026.5.16-beta.2**: Mirrors beta.3 changes—xAI OAuth integration and cron CLI improvements.
  
- **v2026.5.16-beta.1**: Routes Crabbox skill defaults through repo-brokerd AWS config; makes Blacksmith Testbox opt-in rather than default. Localizes onboarding wizard and channel setup flows to English and Simplified Chinese.

No breaking changes noted; all updates are additive or configuration-aware.

---

### 3. **Project Progress**
Among today’s merged/closed PRs, key advances include:
- Removal of deprecated Codex OAuth sidecar runtime (PR #82777), consolidating credentials into `auth-profiles.json`.
- Fix for Discord reply context leakage at LLM boundary (PR #82801), preserving user-turn metadata during embedded runs.
- Windows image model event loop stall resolution (PR #82799), improving startup reliability on Windows.
- Telegram polling routing fix (PR #82705), ensuring isolated message handling post-update dispatch.

These reflect ongoing focus on session integrity, cross-platform stability, and credential management.

---

### 4. **Community Hot Topics**
Top-discussed items center on **security**, **multi-agent instability**, and **toolchain usability**:

- **#45740**: Untrusted GitHub issue bodies injected into sub-agent prompts risk prompt injection attacks—12 comments, flagged as clawsweeper:needs-security-review. Underlying need: input sanitization or sandboxed execution for gh-issues skill.
  
- **#43367**: Multi-agent orchestration suffers from concurrent config overwrites and session-lock failures—8 comments. Users demand atomic agent registration and better isolation guarantees.
  
- **#45031**: Proposal for built-in skill installation scanning (citing AgentShield research)—6 comments. Reflects growing concern about third-party skill vetting.

Other notable activity includes #42840 (MathJax/LaTeX in Control UI, +4 👍) and #45758 (YAML config support, +2 👍), indicating UX/readability priorities.

---

### 5. **Bugs & Stability**
Critical regressions and crashes reported today:

| Issue | Severity | Description | Fix Status |
|------|----------|-----------|------------|
| #71127 | P1 | Stuck processing sessions never abort; require external restart | No fix PR yet |
| #45326 | P1 | TUI swallows user input during model generation (interrupt failure) | No fix PR |
| #63216 | P1 | Repeated hard resets despite high token reserves | No fix PR |
| #43661 | P1 | Compaction timeouts cause infinite hangs and duplicate messages | No fix PR |

Additional regressions: #45765 (nested `.openclaw` dirs when `OPENCLAW_HOME` set), #44599 (`OPENCLAW_CONFIG_DIR` rejects whitespace), and #45706 (HTTP 422 on OpenAI-compatible endpoints). Several have associated PRs under review (e.g., #82748 fixes malformed assistant content crashes).

---

### 6. **Feature Requests & Roadmap Signals**
High-interest features emerging from recent discussions:
- **Per-agent cost budgets** (#42475): Gateway-level spend caps to prevent runaway usage.
- **Private network fetch enablement** (#39604): Opt-in `tools.web.fetch.allowPrivateNetwork` flag.
- **Memory wiki per-agent vaults** (#63829): Isolated knowledge bases for multi-agent setups.
- **Fallback model activation on provider errors** (#44353): Critical for reliability with volatile providers like AWS Bedrock.

Given today’s release cycle and PR triage tags, **per-skill model routing** (#43260) and **OAuth-based xAI auth** are most likely to appear in next stable release.

---

### 7. **User Feedback Summary**
Users express frustration around:
- **Silent data loss**: Cron jobs overwrite shared files due to lack of append mode (#40001).
- **Debuggability gaps**: Heartbeat timestamps stale across runs (#44993); Control UI progressive stalling (#45698).
- **Security opacity**: Internal tool traces leak to public channels (Discord #44905; gh-issues #45740).
- **Cross-platform inconsistency**: macOS Apple Silicon memory embedding crashes (#44202); Windows image model stalls (#82799 fixed today).

Positive signals include appreciation for localized onboarding (+3 👍 on #45314 fix) and fallback model logic improvements (+2 👍 on #44353).

---

### 8. **Backlog Watch**
Items requiring long-term maintainer attention:
- **#39223**: Configure wizard hangs at Gateway selection—blocks OAuth flows since March. No progress in 2+ months.
- **#41165**: Telegram DMs still routed to main session after deduplication fix (#40519). Lingers unresolved.
- **#43747**: Memory management “chaos”—users report inconsistent chunking/embedding across team members. Needs root-cause analysis.
- **#45535** (PR): While merged, robust token normalization for OpenAI-compatible providers awaits real-world validation per triage tag.

These represent systemic pain points that could erode trust if not addressed.

---

## Cross-Ecosystem Comparison

**Cross-Project Comparison Report: Personal AI Assistant Open-Source Ecosystem (May 17, 2026)**

---

### **1. Ecosystem Overview**  
The personal AI agent open-source landscape is highly dynamic, with multiple projects converging on modular architectures for multi-channel, multi-provider assistants. Core frameworks like OpenClaw and IronClaw lead in production-grade tooling and agent orchestration, while niche players like NanoBot and Moltis emphasize specialized agentic behaviors or decentralized execution. A shared emphasis on OAuth-based provider authentication, cron job reliability, and session integrity reflects maturation toward enterprise usability—though fragmentation persists around channel support (Telegram, WeChat, email) and memory isolation models.

---

### **2. Activity Comparison**  

| Project         | Issues (24h) | PRs (24h) | Releases (Last 24h) | Health Score* |
|-----------------|--------------|-----------|---------------------|---------------|
| **OpenClaw**    | 500          | 500       | v2026.5.16-beta.3   | ★★★★☆         |
| **NanoBot**     | 7            | 26 (16 merged) | v0.2.0           | ★★★★☆         |
| **Hermes Agent**| 50           | 50        | v0.14.0             | ★★★☆☆         |
| **PicoClaw**    | 5            | 4         | Nightly only        | ★★★☆☆         |
| **NanoClaw**    | 5            | 9         | None                | ★★★☆☆         |
| **IronClaw**    | 15           | 34 (15 merged) | None (recent: v0.28.2) | ★★★★★      |
| **LobsterAI**   | 1            | 22 (10 merged) | None (merged release branch) | ★★★★☆   |
| **Moltis**      | 1            | 3 (1 merged) | None              | ★★★☆☆         |
| **CoPaw**       | 14           | 12        | None                | ★★☆☆☆         |
| **ZeroClaw**    | 50           | 50        | None                | ★★★★☆         |

*\*Health Score based on bug severity distribution, fix velocity, release stability, and community engagement.*

---

### **3. OpenClaw's Position**  
OpenClaw dominates as the core reference implementation, evidenced by its unmatched GitHub activity (500 issues/PRs/day), beta cadence, and integration-first approach. It leads in xAI OAuth support, cron CLI enhancements, and maintainer tooling—features absent or nascent in peers. Unlike Hermes Agent (focused on single-agent deployment) or IronClaw (tool-centric Reborn loop), OpenClaw emphasizes **multi-agent orchestration resilience** and **cross-platform stability**, backed by localized UI flows and Windows-specific fixes. Its community size dwarfs others (evidenced by issue volume), but faces pressure from ZeroClaw’s modular security focus and CoPaw’s rapid feature iteration.

---

### **4. Shared Technical Focus Areas**  

| Requirement                  | Projects Involved                     | Specific Needs                                                                 |
|------------------------------|---------------------------------------|--------------------------------------------------------------------------------|
| **Provider Authentication**  | OpenClaw, Hermes, IronClaw, ZeroClaw  | xAI OAuth, Vertex AI gaps, subscription-based auth (#5601 in ZeroClaw)           |
| **Session Integrity**        | OpenClaw, Hermes, NanoClaw            | Discord context leakage (#82801), compaction failures (#4448), token waste       |
| **Cron & Scheduled Jobs**    | OpenClaw, NanoClaw, CoPaw             | Silent data loss (#40001), abort-on-stuck sessions (#71127)                      |
| **Memory Management**        | Hermes, IronClaw, ZeroClaw          | Per-user vaults (#63829), compression corruption (#25585), wiki persistence       |
| **Security Hardening**       | OpenClaw, Hermes, LobsterAI, ZeroClaw | Prompt injection (#45740), URL allowlisting (#794), per-skill permissions (#5775) |

---

### **5. Differentiation Analysis**  

| Project       | Feature Focus                          | Target Users                     | Architecture Highlights                     |
|---------------|----------------------------------------|----------------------------------|---------------------------------------------|
| **OpenClaw**  | Multi-agent orchestration, stability   | Enterprise devs, ops teams       | Modular skills, repo-brokerd AWS config     |
| **IronClaw**  | Tool execution, production cutover     | B2B operators                    | Reborn loop, config-as-code                 |
| **NanoBot**   | Goal persistence, efficiency           | Researchers, small-scale agents  | BM25 skill router, MiMo reasoning control   |
| **Moltis**    | Distributed agent ecosystems           | Architects, platform builders    | NetBird tunneling, agent system builder     |
| **CoPaw**     | Cross-channel UX, approval workflows   | End-users, chat-heavy use cases  | Lightweight `/goal`, Telegram/QQ integrations |

---

### **6. Community Momentum & Maturity**  

- **Rapid Iteration**: OpenClaw, ZeroClaw, and NanoBot show high velocity with weekly betas and daily PR merges—indicating active experimentation but potential instability.
- **Stabilization Phase**: IronClaw and LobsterAI prioritize production readiness (test harnesses, release branch integration), suggesting maturity toward enterprise adoption.
- **Niche Specialization**: Moltis and PicoClaw serve targeted niches (distributed agents, Chinese market channels) with slower but focused development cycles.
- **Crisis Signals**: CoPaw’s critical rate-limit bugs (#4449) and Hermes’ `.env` stripping (#26804) reveal fragility despite activity levels.

---

### **7. Trend Signals**  

- **Enterprise-Grade Security**: Demand for per-skill sandboxing (#5775), OAuth subscriptions, and SSRF protection (#794) signals shift from hobbyist to regulated-use deployments.
- **Cost-Aware Context Management**: Session splitting, token refresh automation (#2508), and fallback models (#44353) reflect LLM cost sensitivity.
- **Multi-Modal Channel Expansion**: Email (#2421), WeChat multi-account (#2881), and Telegram inline buttons (#2515) indicate convergence toward omnichannel support.
- **Agent Orchestration Complexity**: Non-blocking sub-agents (#1004), DAG contexts (#27155), and peer discovery (#3854) point to next-gen workflow engines beyond linear conversation.

For AI agent developers, this ecosystem offers battle-tested foundations (OpenClaw/IronClaw) with clear paths to customization, though success requires navigating trade-offs between modularity, documentation quality, and stability guarantees.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – May 17, 2026**

---

### 1. Today's Overview  
NanoBot shows strong development momentum with 26 PRs updated (16 merged) and 7 issues active in the last 24 hours, reflecting an engaged contributor base. A new release, **v0.2.0**, was launched, introducing persistent goal tracking via `/goal` and `long_task`, marking a significant step in agentic behavior. The project continues to expand its channel support (Signal, improved gateway handling) while addressing stability concerns around WebUI rendering and provider reliability.

---

### 2. Releases  
**v0.2.0** (May 16, 2026):  
- Introduces persistent goal state via `/goal` command and `long_task` API, allowing sustained objectives across turns even after context compaction.  
- No breaking changes reported; backward compatible with prior versions.  
- Highlights: 105 merged PRs, 20 new contributors.  
🔗 [Release Notes](https://github.com/HKUDS/nanobot/releases/tag/v0.2.0)

---

### 3. Project Progress  
**Merged/Closed PRs (today)** include:
- **MiMo thinking control fix** (#3851): Ensures reasoning effort is correctly passed when MiMo models are routed through gateways like OpenRouter.  
- **BM25-lite skill router** (#3865): Reduces system prompt size by ~60% by dynamically selecting only relevant skills per message.  
- **Context deduplication fix** (#3859): Prevents duplicate runtime context injection in mid-turn messages, saving LLM tokens.  
- **Checkpoint & turn-writer extraction** (#3856): Improves code modularity by moving persistence logic out of `loop.py`.  
- **ExecTool URL format bypass** (#3853): Fixes false-positive blocking of legitimate `format=json` query parameters.  

These advances reflect focused improvements in agent efficiency, multi-turn context management, and security.

---

### 4. Community Hot Topics  
- **Issue #3790**: WebUI session output garbled without refresh—high engagement (12 comments). Suggests UI state synchronization flaw post-update.  
- **PR #3865 (BM25 skill router)**: Top contributor PR aiming to optimize long-context performance—likely to land soon given its impact on core UX.  
- **Issue #2172 (Secret management)**: Reopened discussion on secure secret handling (file/exec-based retrieval), indicating growing security awareness among users.  

Underlying need: Better observability, performance optimization, and enterprise-grade security.

---

### 5. Bugs & Stability  
**High-severity issues today:**
1. **#3857**: Bootstrap fails with HTTP 500 despite gateway running—blocks WebUI access entirely.  
   - *Fix status*: No PR yet; affects onboarding flow.
2. **#3863**: WeChat login rejected due to version incompatibility—limits adoption in China.  
   - *Workaround*: None documented; likely needs channel plugin update.
3. **#3790**: WebUI display corruption—moderate severity but impacts usability.  
   - *Status*: Active investigation; no fix PR posted.

Two open bug reports lack immediate mitigation, raising short-term stability concerns.

---

### 6. Feature Requests & Roadmap Signals  
- **Multi-instance peer discovery** (#3854): Enables federation across NanoBot instances (e.g., HF Spaces), signaling expansion toward decentralized agent networks.  
- **Skill persistence in conversations** (#3846): Users want skills auto-loaded per topic—aligns with v0.2.0’s goal-awareness theme.  
- **Chinese rate-limit detection** (#3864): Shows regional adaptation focus; likely part of broader i18n/infrastructure hardening.  

Predicted next-version themes: Agent orchestration, cross-instance communication, and enhanced multilingual robustness.

---

### 7. User Feedback Summary  
- **Pain points**: Confusion around secret storage security (#2172), WebUI instability (#3790), and WeChat compatibility (#3863).  
- **Positive signals**: Praise for modular architecture (checkpoint extraction #3856) and token-saving optimizations (#3865).  
- **Use case revealed**: Enterprise users seek isolated agent instances with dynamic peer coordination—hinting at B2B potential.

Overall sentiment: Enthusiastic about agent capabilities but cautious about production readiness due to UX gaps.

---

### 8. Backlog Watch  
- **Issue #2172 (Secret reference)**: Open since March 2026; critical for security-conscious deployments. Requires maintainer prioritization.  
- **PR #3728 (LoopDetectHook)**: Agent self-correction framework pending review—could become core to preventing infinite loops in complex tasks.  

Both items demand attention to sustain trust and advance agent intelligence maturity.

--- 

*Data sources: GitHub Issues & PRs from HKUDS/nanobot as of 2026-05-17 UTC*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest – May 17, 2026**

---

### 1. **Today's Overview**
The Hermes Agent project remains highly active with sustained development velocity: 50 new issues and 50 PR updates in the last 24 hours indicate strong community engagement and ongoing maintenance. A new release (v0.14.0) was published yesterday, marking a significant milestone described as the "Foundation Release" that enhances installation and runtime stability. The high volume of both open bugs and feature discussions suggests healthy experimentation but also points to growing complexity around multi-user isolation, provider support, and session state management.

---

### 2. **Releases**
**Hermes Agent v0.14.0** released on May 16, 2026  
- **Key Metrics**: 808 commits since v0.13.0; 633 merged PRs; 165K+ insertions; 545 issues closed (including 12 P0 and 50 P1).  
- **Notable Change**: Introduced foundational improvements for agent deployment and execution reliability, though specific technical details beyond installation/runtime behavior are not fully disclosed in the release notes.  
- **Migration Note**: No explicit breaking changes mentioned; however, users should verify environment variable handling post-update due to reported `.env` stripping during config migration (#26804).

---

### 3. **Project Progress**
- **Merged/Closed PRs Today**: 31  
  - Major fixes include:
    - Fix Codex fallback logic for interactive CLI sessions matching cron behavior (#27185)
    - Strip historical media after compression to prevent context bloat (#27189)
    - Surface namespaced plugins in `hermes plugins list` (#27187)
    - Preserve explicit `--provider` flags in ACP model switching (#27173)
  - Documentation updated via README overhaul (#27191)

---

### 4. **Community Hot Topics**
Top-discussed items reflect urgent needs around **security**, **multi-tenancy**, and **provider parity**:

1. **[#21574](https://github.com/NousResearch/hermes-agent/issues/21574)** – *Per-user agent isolation & identity-based permissions* (6 comments): Prompt injection vulnerability exposed when multiple users interact via gateways (e.g., Telegram), enabling impersonation. Critical for shared deployments.
2. **[#11692](https://github.com/NousResearch/hermes-agent/issues/11692)** – *Provenance tracking for self-improving skills* (11 comments): Governance concern about skill version accountability in autonomous agent workflows.
3. **[#5563](https://github.com/NousResearch/hermes-agent/issues/5563)** – *Memory persistence corruption & token waste* (4 comments, 👍1): Production users report session replay inefficiencies and database corruption under heavy load—high impact on reliability.

These threads signal demand for stronger access control, audit trails, and memory segmentation in multi-user environments.

---

### 5. **Bugs & Stability**
High-severity issues detected today:

| Rank | Issue | Severity | Description | Fix Status |
|------|-------|----------|-------------|------------|
| 1 | [#27033](https://github.com/NousResearch/hermes-agent/issues/27033) | P1 | Tool errors persistently loop as HTTP 400 due to contamination | Open |
| 2 | [#26804](https://github.com/NousResearch/hermes-agent/issues/26804) | P1 | `.env` stripped silently during update/migration | Open |
| 3 | [#27100](https://github.com/NousResearch/hermes-agent/issues/27100) | P1 | Docker + Telegram fails on `--user` flag post-v0.14.0 | Open |
| 4 | [#25585](https://github.com/NousResearch/hermes-agent/issues/25585) | P1 | Context compression discards turns on summary failure | Open |

Fixes underway:  
- Codex 429 fallback now works in CLI (merged #27185)  
- Runtime footer config parsing fixed (#27179)  
- MCP schema reference resolution improved (#27180)

Test suite instability (#27004) may hinder further progress if unresolved.

---

### 6. **Feature Requests & Roadmap Signals**
User-driven priorities emerging:

- **Native Google Vertex AI Support** (#13484): Missing OAuth machinery blocks enterprise GCP adoption.
- **Qwen Vision Integration** (#27117): Demand for Alibaba vision models in desktop automation flows.
- **Per-User Memory Isolation** (#11430, #27183): Multiple users request partitionable USER.md and memory stores for group chats.
- **DAG Context Engine** (#27155): Opt-in structured context management proposed as scalable alternative to linear history.

Given recent focus on provider extensibility and memory architecture, **Vertex AI and per-user memory features are likely candidates for v0.15.0**.

---

### 7. **User Feedback Summary**
- **Praise**: Users highlight exceptional capability in production software development (#5563), skill delegation, and persistent memory.
- **Pain Points**:
  - Configuration fragility (`hermes update` breaking `.env`)
  - Poor error visibility (silent drops vs. clear feedback)
  - Inconsistent provider behavior (Codex, Supergrok, Qwen)
  - Session context loss across restarts (Telegram topics)

Overall sentiment is positive toward core functionality but frustrated by edge-case instability and lack of polish in shared-environment usage.

---

### 8. **Backlog Watch**
Items requiring maintainer attention beyond current cycle:

- **[#11692](https://github.com/NousResearch/hermes-agent/issues/11692)**: Self-modification provenance lacks architectural specification—critical for auditing autonomous agents.
- **[#21574](https://github.com/NousResearch/hermes-agent/issues/21574)**: Identity isolation RFC needs design proposal or roadmap commitment.
- **[#13484](https://github.com/NousResearch/hermes-agent/issues/13484)**: Vertex AI gap affects large-scale deployments; may require dedicated contributor.

Maintainers should prioritize defining governance model for agent evolution and establishing security review process for gateway integrations.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – May 17, 2026**

---

### 1. **Today's Overview**  
PicoClaw remains actively developed with consistent community engagement: 5 issues and 4 pull requests updated in the last 24 hours, including one new nightly release (v0.2.8-nightly.20260516). The project shows healthy momentum—particularly around channel integrations and UI improvements—while addressing stability concerns like gateway initialization failures and Android permission errors. With 3 open PRs and 4 active issues as of today, the development velocity is moderate but focused on both feature expansion and bug resolution.

---

### 2. **Releases**  
A new **nightly build** was published today:  
- **v0.2.8-nightly.20260516.0df050ff**  
This automated nightly build includes all changes from `main` since v0.2.8. As an unstable pre-release, it should be used cautiously for testing only. No stable releases were made today.  
🔗 Full changelog: [https://github.com/sipeed/picoclaw/compare/v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

---

### 3. **Project Progress**  
One PR was merged today:  
- **#2881**: *feat: 支持微信多账号配置*  
This adds multi-account support for WeChat channels, enabling users to manage several WeChat instances within a single PicoClaw deployment. The implementation includes frontend management interfaces and backend CRUD APIs, with compatibility maintained for existing single-account setups.  
🔗 [PR #2881](https://github.com/sipeed/picoclaw/pull/2881)  

No other merged or closed PRs were recorded today.

---

### 4. **Community Hot Topics**  
Top community discussions reflect evolving communication needs:  
- **#2421**: Request to add **email as a native channel** (6 comments, +1 reaction)  
Users highlight corporate/scientific environments where email is primary over chat platforms. This signals demand for broader enterprise-grade messaging support.  
🔗 [Issue #2421](https://github.com/sipeed/picoclaw/issues/2421)  
- **#2742**: Gateway fails to initialize channels in v0.2.8 (4 comments)  
Reports indicate a regression causing empty channel lists at startup, especially after Telegram integration. Users seek urgent fixes due to broken core functionality.  
🔗 [Issue #2742](https://github.com/sipeed/picoclaw/issues/2742)  
- **#2882**: Independent code block copy/collapse controls in web UI (new)  
Improves UX by allowing per-code-block actions without affecting others—a usability enhancement requested for better developer experience.  
🔗 [PR #2882](https://github.com/sipeed/picoclaw/pull/2882)

---

### 5. **Bugs & Stability**  
Two notable bugs reported today:  
1. **#2742** (High Severity): *Gateway starts with no channels in v0.2.8*  
   - Affects multiple users post-upgrade; appears tied to channel discovery logic. No fix PR yet.  
2. **#2880** (Medium Severity): *Permission denied on Android when creating Downloads/picoclaw directory*  
   - Occurs despite granted storage permissions, suggesting path-handling or scoped-storage limitations on MIUI/Android 10. No fix PR submitted.  
Both require maintainer attention to prevent user churn.

---

### 6. **Feature Requests & Roadmap Signals**  
Key features gaining traction:  
- **Email channel integration (#2421)**: Likely next major channel addition after chat platforms, driven by enterprise use cases.  
- **MCP Streamable HTTP transport (#2782, now CLOSED)**: Addressed in latest nightly—enables compatibility with modern MCP servers.  
- **Multi-account WeChat support (#2881 merged)**: Shows trend toward scalable channel management.  
Predicted next version (v0.3.0?) may include email channel and refined MCP client capabilities.

---

### 7. **User Feedback Summary**  
Users express frustration with:  
- **Platform-specific instability**: Android permission issues (#2880) and Telegram gateway failures (#2742).  
- **Limited native channels**: Desire for email (#2421) and better WeChat scalability indicates need for expanded protocol support.  
Positive feedback centers on UI polish (e.g., code block controls in #2882) and backward compatibility during upgrades (#2834). Overall sentiment leans constructive but urgent regarding core reliability.

---

### 8. **Backlog Watch**  
Long-standing items needing resolution:  
- **#2421 (Email Channel)**: Open since April 8; has 6 comments and 1 upvote. Represents high-priority feature request from power users.  
- **#2742 (Gateway Bug)**: High-severity regression in v0.2.8; unresolved despite recent activity. Risks user trust if not addressed soon.  
- **#2834 (Upgrade Tutorial)**: User struggles with manual upgrade process; lack of documentation hampers adoption.  

Maintainers should prioritize these to reduce technical debt and improve user onboarding.

--- 

*Data compiled from GitHub API snapshot on 2026-05-17. All links verified.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026-05-17**

**1. Today's Overview**  
NanoClaw shows moderate development activity with 9 PRs and 5 issues updated in the last 24 hours. While no new releases were published, several focused improvements are underway, particularly around health monitoring, Telegram integration, and stability fixes for containerized deployments. The project maintains a steady pace of maintenance and feature work without major regressions or outages reported.

**2. Releases**  
No new releases were published today.

**3. Project Progress**  
Two PRs merged today:
- **#2515**: Adds inline keyboard button support to Telegram messaging (via [@mkeizer](https://github.com/mkeizer)) — enables richer interactive UX in Telegram channels.
- **#2509**: Aligns changelog formatting with release guidelines (via [@glifocat](https://github.com/glifocat)) — ensures documentation consistency.

These closings reflect ongoing efforts to improve developer experience and channel integrations.

**4. Community Hot Topics**  
Most active items remain under discussion but lack significant engagement (all have ≤1 comment or 👍). However, **#2516** (SIGKILL recovery for `outbound.db-journal`) stands out as a critical infrastructure concern affecting container resilience on shared volumes. Similarly, **#2508** introduces a proactive token refresh sweep system, signaling growing focus on operational reliability and OAuth lifecycle management.

**5. Bugs & Stability**  
Four high-priority bugs reported today:
1. **#2506**: Silent response drops during rapid turn completions (<60s apart) or concurrent streaming queries — risks client timeouts and broken agent workflows. *(Severity: High)*
2. **#2512**: Inter-container communication failure between OneCLI and PostgreSQL despite shared network — suggests Docker networking misconfiguration or service discovery regression. *(Severity: High)*
3. **#2513**: Colima CA cert bind-mount becomes empty on macOS, breaking HTTPS to api.anthropic.com — impacts macOS users relying on Colima. *(Severity: Medium-High)*
4. **#2514**: Setup hangs due to `needrestart` whiptail prompt — blocks initial deployment. *(Severity: Medium)*

All issues lack associated fix PRs yet, indicating active troubleshooting phase.

**6. Feature Requests & Roadmap Signals**  
Strong signals point toward enhanced observability and automation:
- Token refresh automation via **#2505** and **#2498** suggests next-gen health monitoring is maturing.
- Agent network capability (**#2497**) may indicate expansion beyond single-agent use cases.
- Inline buttons for Telegram (**#2515**, now merged) show investment in user-facing interactivity.

**7. User Feedback Summary**  
Key pain points revolve around:
- Deployment friction on macOS (Colima certs, needrestart prompts)
- Container resilience during abrupt termination (SIGKILL)
- Reliability of async message handling during rapid interactions
- Database connectivity in default Ubuntu installations

Users seek robust defaults and clear recovery paths for edge-case failures, especially in production-like environments.

**8. Backlog Watch**  
No long-unanswered critical items surfaced today. All recent issues and PRs are within 1–2 days of creation. However, maintainers should monitor **#2506** closely — its impact on core message delivery could affect many users if not addressed soon.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – May 17, 2026**

---

### 1. **Today’s Overview**  
The IronClaw project shows strong development momentum with 34 PRs updated in the last 24 hours—19 open and 15 merged—demonstrating active progress on Reborn-related features and infrastructure. Issue activity remains moderate (15 total), with a focus on production readiness for the Reborn agent loop, configuration-as-code, and tool integration. No new releases were published today, though a prior release (`ironclaw_common` 0.4.2 → 0.5.0, `ironclaw` 0.24.0 → 0.28.2) introduced breaking changes requiring migration attention. Overall, the project is in a high-velocity phase centered on shipping Reborn as a stable, configurable personal AI assistant runtime.

---

### 2. **Releases**  
No new releases were created today. However, a recent automated release (#3708) advanced key dependencies:
- **`ironclaw_common`: 0.4.2 → 0.5.0** — Contains API-breaking changes (noted via discriminant change warning).
- **`ironclaw`: 0.24.0 → 0.28.2** — Includes fixes and enhancements across core engine and gateway components.

Operators should review the changelog for enum compatibility issues when upgrading `ironclaw_common`.

---

### 3. **Project Progress**  
**Merged/Closed PRs (last 24h):**
- **#3712**: Fixed Reborn loop-exit evidence to accept capability result refs alongside durable replies (critical for tool completion paths).
- **#3710**: Added product-live planned AgentLoop harness for regression testing (closed after merging foundational test framework).
- **#3588**: Implemented logs download button in UI (frontend-only, no backend changes).
- **#3122**: Enabled externally-provided tools natively in Responses API (landed earlier but finalized documentation today via #3709).

These advances strengthen reliability of tool-calling workflows and improve operator debugging capabilities.

---

### 4. **Community Hot Topics**  
Top-discussed items reflect deepening investment in Reborn’s production viability:

- **[Issue #3692](https://github.com/nearai/ironclaw/issues/3692)**: Proposes policy-gated identity context and heartbeat prompts—enables fine-grained access control for personal AI identity management (4 comments).  
- **[PR #3717](https://github.com/nearai/ironclaw/pull/3717)**: Wires run-profile resolver into Reborn composition—critical enabler for dynamic tenant configurations (core contributor-authored).  
- **[Issue #3036](https://github.com/nearai/ironclaw/issues/3036)**: Configuration-as-Code epic seeks declarative blueprints for operators—highly voted (+1), signaling demand for schema-driven setup over manual `.env` edits.

Underlying need: **Operators want declarative, auditable, and reusable deployment patterns** instead of fragmented configuration.

---

### 5. **Bugs & Stability**  
One notable bug reported:
- **[Issue #3701](https://github.com/nearai/ironclaw/issues/3701)**: macOS prebuilt binary fails to bind gateway port despite correct config/doctor output—suggests platform-specific initialization race or permission issue. No fix PR yet.

Additionally, nightly E2E tests continue failing ([#3447](https://github.com/nearai/ironclaw/issues/3447)), indicating flakiness in CI pipeline or environment assumptions. This requires investigation but doesn’t impact local development.

---

### 6. **Feature Requests & Roadmap Signals**  
High-priority signals from recent activity:
- **Configuration-as-Code** (#3036): Strong user/operator push for typed, versionable configs—likely next major milestone.
- **Production Cutover Readiness**: Multiple deferred issues (#3698, #3700, #3699) indicate staged rollout strategy post-test-harness validation.
- **Tool Integration Parity**: PRs like #3716 and #3718 prove real tool execution in product-live paths—clear sign that native tool support is nearing public availability.

Predicted next release (v0.29.x): Focus on completing Reborn’s web ingress cutover and stabilizing tool-result evidence handling.

---

### 7. **User Feedback Summary**  
Key pain points emerging:
- **Debugging Difficulty**: Users struggle with log visibility (prompted #3534 → resolved in #3588) and understanding why tools fail silently.
- **Configuration Fragmentation**: Operators cite scattered settings across `.env`, JSON, docs, and flags as unsustainable (#3036).
- **Platform Reliability**: macOS users report inconsistent gateway binding despite valid configs (#3701).

Positive signals include appreciation for transparent progress tracking (e.g., milestone events) and structured API documentation (#3709).

---

### 8. **Backlog Watch**  
Items requiring maintainer bandwidth:
- **[Issue #3026](https://github.com/nearai/ironclaw/issues/3026)**: Config-driven production composition root blocker—explicitly flagged as post-group cutover dependency; stalled without recent updates.
- **[Issue #3447](https://github.com/nearai/ironclaw/issues/3447)**: Recurring nightly E2E failures—needs triage to prevent regression masking.
- **[PR #3679](https://github.com/nearai/ironclaw/pull/3679)**: Universal FS dispatch across crates—large, complex refactor; may need review capacity.

These represent critical path items for stabilizing Reborn in production environments.

--- 

*Data compiled from GitHub activity on 2026-05-17.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – May 17, 2026**

---

### 1. **Today's Overview**
The LobsterAI project shows strong development momentum with 22 pull requests updated in the last 24 hours—10 merged and 12 still open—indicating active maintenance and feature iteration. Only one issue was reported, signaling stable user experience overall. No new releases were published today, but a recent integration into `main` (PR #1998) suggests ongoing version stabilization. The high volume of PRs, particularly around renderer and cowork modules, reflects focused efforts on UI polish, security hardening, and backend reliability.

---

### 2. **Releases**
No new releases were published today. However, PR #1998 indicates that version **2026.5.16** was recently merged from the release branch, bundling fixes for artifacts UX, IM onboarding, OpenClaw/Cowork integrations, and model updates.

---

### 3. **Project Progress**
- **Merged/Closed PRs Today**:  
  - PR #1999: Fixed `reasoning_content` handling for Mimo model in multi-turn sessions.  
  - PR #1998: Full release integration (2026.5.16) including artifacts, build, docs, and cowork improvements.  
  - PRs #1997–1992: Various chores and fixes across renderer, main process, and documentation (e.g., default model list bug, Dream UI optimizations).  
  - PR #813: Added support for MiMo V2 Pro and MiMo V2 Omni models to Xiaomi provider config.

These changes enhance model compatibility, improve session management robustness, and refine user-facing interfaces.

---

### 4. **Community Hot Topics**
Despite low comment activity today, several long-standing open PRs remain under review:
- **PR #789**: Adds session export functionality (Markdown/PDF), requested by users needing local archiving. Still marked as "stale" despite recent updates.
- **PR #794**: Implements URL scheme allowlist for `shell.openExternal()` to prevent SSRF attacks—critical security improvement pending merge.
- **PR #793 & #801**: Address skill toggle persistence bugs; both relate to gateway reload logic after configuration changes.

While not trending in comments yet, these suggest growing user demand for data portability and enhanced security controls.

---

### 5. **Bugs & Stability**
- **Issue #1993**: Reports persistent “AI engine connection lost” error in desktop app, though IM Bot works fine. User advised to restart app or retry—no fix PR attached yet.  
  *Severity*: Medium—affects core functionality but has workaround.  
  *Status*: Active, awaiting investigation.

No crashes or regressions noted in closed PRs today; stability appears maintained.

---

### 6. **Feature Requests & Roadmap Signals**
User-driven signals point toward:
- **Session export capability** (PR #789): Strong implicit need for offline access and sharing.
- **Enhanced skill lifecycle management**: Multiple PRs address skill enable/disable state persistence.
- **Security hardening**: URL validation (PR #794) and encrypted export passwords (PR #790) reflect rising privacy concerns.

Given the density of related fixes, expect session management and security features to be prioritized in upcoming releases.

---

### 7. **User Feedback Summary**
Real-world pain points include:
- Unreliable AI engine connection in desktop client vs. stable IM Bot usage → suggests environment-specific instability.
- Disabled skills still being invoked → undermines user trust in settings.
- Lack of native session export → blocks workflows requiring local backup or compliance.

Users appear increasingly security-conscious and value control over their conversational data.

---

### 8. **Backlog Watch**
Several important items require maintainer attention:
- **PR #789** (session export): Over 2 months old, high user utility.
- **PR #794** (security fix): Critical vulnerability mitigation delayed.
- **Issue #1993**: Needs deeper diagnosis beyond restart workaround.

These represent opportunities to reduce technical debt and close user-requested gaps ahead of next release cycle.

--- 

*Data source: GitHub.com/netease-youdao/LobsterAI | Generated: 2026-05-17*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – May 17, 2026**

**1. Today’s Overview**  
The Moltis project shows moderate development activity over the past 24 hours, with one new issue and three pull requests updated—two still open and one recently merged. No new releases were published, indicating continued focus on feature development rather than stabilization or versioning milestones. The recent work centers on remote connectivity enhancements (NetBird/Cloudflare Tunnel), OpenAI Codex integration improvements, and a newly added agent system builder skill. Overall project momentum remains steady, with no signs of regression but also no major breaking changes introduced.

**2. Releases**  
No new releases were made in the last 24 hours. The last release remains [insert previous version if known], so users should continue using their current stable installation without migration urgency.

**3. Project Progress**  
- **PR #1003** was merged today: *feat(skills): add agent system builder skill* by kyungw00k. This introduces a bundled `build-agent-systems` skill enabling designers to model multi-user, multi-channel, distributed agent architectures. It includes templates for agentic patterns and skill authoring guidance, directly supporting Moltis’ vision of scalable agent ecosystems. ([View PR](https://github.com/moltis-org/moltis/pull/1003))

**4. Community Hot Topics**  
Currently, there are no issues or PRs with comments or reactions in the past day. However, **Issue #1004** highlights a growing user need for non-blocking sub-agent execution—users want parent agents to remain responsive during long-running spawned tasks. This reflects demand for improved concurrency and responsiveness in agent orchestration. ([View Issue](https://github.com/moltis-org/moltis/issues/1004))  

Among active PRs, **#1002** (NetBird + Cloudflare Tunnel support) and **#1005** (OpenAI Codex reasoning effort propagation) represent strategic infrastructure upgrades that enhance secure remote access and LLM provider fidelity, respectively.

**5. Bugs & Stability**  
No bugs, crashes, or regressions were reported or addressed in the last 24 hours. All activity consists of feature additions or enhancements, suggesting stable core functionality.

**6. Feature Requests & Roadmap Signals**  
- **Non-blocking `spawn_agent`** (Issue #1004): Strong signal that asynchronous agent spawning is a priority for users building complex, interactive agent workflows.
- **Advanced LLM provider controls**: PR #1005’s handling of `reasoning_effort` suggests deeper integration with OpenAI’s advanced inference features is part of the roadmap.
- **Secure remote agent communication**: PR #1002’s dual support for NetBird and Cloudflare Tunnel indicates a push toward enterprise-grade, private networking capabilities for distributed agents.

These collectively point to next-version themes: *asynchronous agent execution*, *enhanced LLM provider APIs*, and *secure remote orchestration*.

**7. User Feedback Summary**  
Users are increasingly focused on **scalability** and **responsiveness** in agent systems. The request for non-blocking `spawn_agent` reveals frustration with synchronous execution bottlenecks during sub-agent operations. Meanwhile, the adoption of skills like the agent system builder implies strong interest in declarative, template-driven agent design—suggesting users value abstraction over low-level coding. There’s no indication of dissatisfaction with stability, but clear demand for richer integrations (networking, LLMs).

**8. Backlog Watch**  
- **Issue #1004** (Non-blocking spawn_agent) has been opened just yesterday but already signals a structural concern in agent concurrency. Given its alignment with broader trends in agent frameworks, it may warrant early attention from maintainers to avoid future blocking bottlenecks.
- **PR #1002** and **#1005** are both high-value contributions requiring review; while not stale, they represent significant scope and may benefit from maintainer input to ensure consistency with project architecture.

No other long-unanswered critical items appear in today’s snapshot.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – May 17, 2026**

---

### 1. Today's Overview  
The CoPaw project remains actively developed with moderate community engagement over the past 24 hours: 14 issues and 12 pull requests were updated. One issue was closed (a test), while 11 open issues reflect ongoing user-reported bugs and feature requests. Twelve PRs are under review or recently opened, including stability fixes and new integrations (notably xAI/Grok). No new releases were published, indicating continued development without versioned milestones.

---

### 2. Releases  
No new releases have been published today. The last stable release appears to be v1.1.7, referenced in several bug reports.

---

### 3. Project Progress  
- **Closed PR**: None today.  
- **Merged PRs**: None today.  
However, multiple active PRs show steady progress:
- [#4446](https://github.com/agentscope-ai/QwenPaw/pull/4446) improves import isolation for `runner` modules.
- [#4444](https://github.com/agentscope-ai/QwenPaw/pull/4444) adds full xAI OAuth + Grok provider support.
- [#4443](https://github.com/agentscope-ai/QwenPaw/pull/4443) implements lightweight `/goal` mode.
- Multiple cron-related fixes (#4303, #4223, #4084) continue enhancing reliability of scheduled tasks.

These contributions signal focus on backend modularity, multi-provider extensibility, and operational robustness.

---

### 4. Community Hot Topics  
Top discussions center on **user experience improvements** and **platform stability**:

- **Interactive Approval UX**: Issue [#4451](https://github.com/agentscope-ai/QwenPaw/issues/4451) proposes adding inline buttons for Telegram/QQ tool approvals—mirroring existing WebUI functionality. This addresses a common pain point where users must manually type commands.
- **Context Management Enhancements**: Issues like [#4435](https://github.com/agentscope-ai/QwenPaw/issues/4435), [#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436), and [#4437](https://github.com/agentscope-ai/QwenPaw/issues/4437) request UI-level controls for managing conversation history (chat count display, selective deletion, session splitting), reflecting growing demand for fine-grained context control amid rising token costs.
- **Model Configuration Simplification**: Issue [#4441](https://github.com/agentscope-ai/QwenPaw/issues/4441) seeks one-click OpenCode Go model setup—indicating friction in onboarding and deployment workflows.

These trends suggest strong user desire for intuitive, cost-aware interaction models and streamlined configuration.

---

### 5. Bugs & Stability  

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| High | [#4448](https://github.com/agentscope-ai/QwenPaw/issues/4448) | Context compaction fails due to missing headers during long chats | No fix yet |
| Critical | [#4449](https://github.com/agentscope-ai/QwenPaw/issues/4449) | Model 429 rate limits cause message queues to clear permanently, freezing agents | No fix yet |
| Medium | [#4453](https://github.com/agentscope-ai/QwenPaw/issues/4453) | Chat window unresponsive; event loop crashes in WeChat channel | No fix yet |

Both high-severity issues (#4448 and #4449) appear duplicated (likely by different users), indicating systemic problems:
- **Context compaction failures** disrupt long conversations.
- **Zero-downtime reload logic** incorrectly purges pending messages after transient model errors, leading to perceived “freezing” of agents.

No corresponding PRs address these yet, though related infrastructure work (e.g., runner decoupling) may indirectly mitigate risks.

---

### 6. Feature Requests & Roadmap Signals  

Several recurring themes hint at near-term roadmap priorities:
- **Approval Command UX**: Short aliases (`/approve`, `/deny`) exist but lack discoverability; enhancement requested via scopes (`/session`, `/always`) and help text updates (#4450).
- **Multi-Modal Tooling**: PRs integrating xAI/Grok (#4444) and browser tab metadata (#4438) show commitment to expanding supported providers and tool capabilities.
- **Session Lifecycle Controls**: Features like `/goal`, chat deletion, and session splitting (#4435–#4437) align with trend toward granular context management—likely driven by cost sensitivity and user retention.

Given current velocity, we anticipate v1.2.0 will include at least: improved approval flows, Grok support, and basic session editing tools.

---

### 7. User Feedback Summary  

Real-world pain points highlighted today:
- **Operational Frustration**: Users report complete chat freezes after brief API outages (#4449), undermining trust in resilience.
- **Discovery Gaps**: Power features like short approval commands are undocumented (#4450).
- **Context Blindness**: Users unaware of token accumulation struggle to manage costs (#4435).
- **Cross-Channel Inconsistency**: Telegram/QQ lack interactive approval UI compared to WebUI (#4451).

Satisfaction is mixed: appreciation for rapid feature delivery (e.g., Grok integration) coexists with frustration over stability regressions and poor documentation.

---

### 8. Backlog Watch  

No long-unanswered issues from this batch exceed 30 days. However, **critical bugs** like #4449 and #4448 warrant urgent maintainer attention due to their impact on core functionality. Additionally, first-time contributor PRs such as #4041 (system tray startup) and #3246 (QQ typing indicators) remain open beyond typical review cycles—suggesting potential resource constraints or unclear acceptance criteria.

--- 

*Data snapshot taken May 17, 2026.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – May 17, 2026**

---

### **1. Today’s Overview**  
The ZeroClaw project remains highly active with sustained development momentum: 50 issues and 50 PRs were updated in the last 24 hours, indicating strong contributor engagement. No new releases occurred today, but ongoing work suggests v0.8.0 is nearing completion after extensive incremental reviews. The codebase shows robust progress across core subsystems—runtime, gateway, provider integrations, and skill management—while maintaining focus on security hardening and observability.

---

### **2. Releases**  
*No new releases published today.*

---

### **3. Project Progress**  
- **Closed PRs (today):** None reported in update window.
- **Merged/closed PRs:** One notable closure: #6728 ([feat(web-dashboard): M5.0 — Overview page + shared SectionNav](https://github.com/zeroclaw-labs/zeroclaw/pull/6728)), advancing dashboard UX for operators.
- **Key advancements:** Multiple PRs addressed critical runtime persistence bugs (e.g., #6719 fixes model_switch persistence; #6684 enforces skill patch cooldowns), while new features like ACP session storage (#6649) and dream-mode memory consolidation (#6693) demonstrate architectural evolution toward multi-agent resilience and long-term context optimization.

---

### **4. Community Hot Topics**  
Top discussion drivers reflect demand for extensibility and operational control:
- **#6659**: Requests API for pushing notifications into gateway sessions—highlighting need for real-time operator alerts from external daemons (e.g., klodi-plugin).  
- **#2467**: Advocacy for customizable webhook transforms to handle arbitrary payloads—critical for integrating with platforms like GitHub Webhooks lacking native schema support.  
- **#6269**: Context compressor dropping `reasoning_content` during proactive compression—impacting providers requiring structured reasoning traces (e.g., DeepSeek).  

These threads reveal user frustration with rigid ingestion pipelines and highlight desire for finer-grained control over conversational metadata preservation.

---

### **5. Bugs & Stability**  
Three high-severity bugs surfaced:
1. **#6721**: `tool_search` not auto-approved under deferred loading causes silent hangs in webhook mode—blocks non-interactive deployments. *Fix pending.*
2. **#6724**: Channels supervisor crash-loops when all channels disabled—causes resource exhaustion via restart storms. *No fix yet.*
3. **#6173**: `model_switch` tool fails to persist across turns in gateway/UI paths—degrades agent responsiveness. *Fix submitted (#6719).*

All other reported bugs are medium-risk or already assigned fixes. Overall system stability appears intact despite edge-case failures in configuration-driven workflows.

---

### **6. Feature Requests & Roadmap Signals**  
Strong signals point toward next-cycle priorities:
- **Provider-native OAuth**: Issue #5601 calls for subscription-based auth (Ollama Cloud, z.ai, Kimi, MiniMax)—aligns with trend toward frictionless SaaS integrations.
- **Per-skill security policies**: #5775 seeks scoped script/command permissions per skill, addressing growing operator concern about privilege escalation.
- **LSP integration**: #5907 requests language server protocol support—positioning ZeroClaw as a coding agent with IDE-grade accuracy aids.

Given active work on skills ecosystem (#6253 tracker) and desktop app expansion (#6710), expect v0.8.0 to prioritize developer experience enhancements and secure sandboxing improvements.

---

### **7. User Feedback Summary**  
Users consistently report:
- **Pain points**: Silent failures in non-interactive modes (webhook/timeouts), lack of granular config per model/provider, and opaque error handling during onboarding.
- **Use cases**: Enterprise operators deploy ZeroClaw in LXC/Docker environments where credential persistence and cross-container communication are essential (#6123). Others leverage cron jobs and email channels (#5573) for automated reporting—but require SMTP channel maturity.
- **Satisfaction**: Praise for modular architecture (skills, tools, channels), though frustration grows around documentation fragmentation and CI/CD gaps (#5908).

Negative sentiment clusters around undocumented breaking changes post-bulk revert (#6074) and inconsistent behavior between CLI and web UI paths.

---

### **8. Backlog Watch**  
Two long-standing items require maintainer attention:
- **#5908**: GitHub Actions CI/CD for Debian container images—blocked since April, impeding release pipeline reliability.
- **#5775**: Per-skill security permissions—high-risk, blocked on review, yet critical for multi-tenant or regulated use cases.

Both have clear technical scope but await maintainer capacity; community contributions could unblock them via RFC-style implementation plans.

--- 

*Data sources: GitHub API snapshot @ 2026-05-17T00:00Z*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*