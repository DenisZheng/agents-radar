# OpenClaw Ecosystem Digest 2026-05-22

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-22 00:36 UTC

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

**OpenClaw Project Digest – May 22, 2026**

---

### **1. Today’s Overview**  
OpenClaw continues to show high development velocity with 500 issues and 500 PRs updated in the last 24 hours, indicating sustained community engagement and rapid iteration. The project released two new versions (v2026.5.20 and v2026.5.20-beta.2), both focusing on security hardening around exec approvals and Discord voice session enhancements. Overall activity levels remain extremely elevated, suggesting a healthy, fast-moving open-source AI agent platform under active maintenance.

---

### **2. Releases**  
Two minor releases were published today:

- **v2026.5.20**:  
  - Removes legacy allowlist compatibility path for skill execution (`cat SKILL.md && printf ... && <skill-wrapper>`), now requiring skills to be loaded via the `read` tool and auto-approved only for real skill executables—**breaking change** for custom integrations relying on the old method.  
  - Enhances Discord support so voice sessions follow configured users into voice channels.  

- **v2026.5.20-beta.2**:  
  - Contains identical changes to v2026.5.20; appears to be a re-release or stabilization of the same patch.

> ⚠️ **Migration Note**: Users leveraging the deprecated skill-wrapper workflow must refactor their skill loading logic to use the `read` tool explicitly.

---

### **3. Project Progress**  
No merged or closed PRs are listed for today in the provided data. However, several high-priority PRs advanced toward merge readiness:
- PR #85135 (ClawSweeper-automated fix): Automates terminal success preservation in agent spawns.
- PR #85130: Fixes shared-directory watcher duplication across multi-agent workspaces (#84968).
- PR #85137 & #85139: Address Matrix routing and macOS XDG environment inheritance for exec subprocesses.

These reflect ongoing infrastructure hardening and cross-platform reliability improvements.

---

### **4. Community Hot Topics**  
Top issues by engagement reveal key user needs:

- **Linux/Windows Desktop Apps** (#75, 105 comments, +75 👍): Highest demand feature—users want native desktop clients comparable to existing macOS/iOS/Android apps. Suggests mobile-first momentum may be spilling into desktop expectations.
- **Prebuilt Android APK Releases** (#9443, 24 comments): Direct request from an AI assistant on behalf of a user for easier deployment; highlights friction in current Android distribution model.
- **Tiered Bootstrap File Loading** (#22438, 16 comments): Performance concern around token waste in large workspaces; signals growing complexity in enterprise-scale usage.
- **Slack Block Kit Support** (#12602, 13 comments): Rich messaging capability requests indicate adoption beyond basic chatbots into interactive workflows.

Underlying theme: **Platform maturity and developer ergonomics** are top priorities as users scale deployments.

---

### **5. Bugs & Stability**  
New critical bugs reported today:

| Issue | Severity | Impact | Status |
|------|--------|--------|--------|
| **#83796** [CLOSED] – Codex runtime escapes sandbox when Docker containment active | P1 | Security regression | ✅ Closed (likely fixed) |
| **#84880** – Subagent `thinking` still rejected on OpenAI/Codex models despite prior fix | P1 | Auth-provider breakage | 🔴 Open, linked to PR #84626 (misapplied fix) |
| **#85126** – Control UI auto-selects wrong `authProfileOverride` at session creation | P1 | Session misconfiguration | 🟡 New, no fix PR yet |

Additional regressions noted:
- Telegram multi-account config broken after v4.8 upgrade (#62985)
- Feishu config validation fails post-upgrade (#63101)
- Node.js SQLite missing FTS5 module breaks memory search keyword fallback (#62328)

Fix PRs exist for most, but #85126 and #84880 require immediate maintainer triage due to auth and session integrity risks.

---

### **6. Feature Requests & Roadmap Signals**  
High-signal features likely to land soon:
- **Masked Secrets System** (#10659): Prevents agents from viewing raw API keys—aligns with security push in recent releases.
- **Capability-Based Permissions** (#12678): Explicit per-skill permissions could follow the exec-approval tightening seen in v2026.5.20.
- **AWS Deployment Guide** (#13597): Cloud-native documentation gap being actively requested.
- **Multi-Tenancy with RBAC** (#60127): Enterprise adoption driver; may inform next major version planning.

Notably, many features reference **security**, **performance**, and **platform extensibility**, confirming these as core strategic axes.

---

### **7. User Feedback Summary**  
**Pain Points:**
- Friction in Android deployment (lack of prebuilt APKs)
- Sandboxed environment leaks (Codex + Docker issue)
- Confusing default behaviors (e.g., TUI `--deliver`, cron announce suppression)
- Auth profile selection bugs in UIs

**Positive Signals:**
- Strong appreciation for exec approval security improvements
- High upvotes on sandboxing and secrets masking proposals
- Clear use cases around cron jobs, memory persistence, and subagent orchestration

Overall sentiment leans constructive but urgent around stability and security.

---

### **8. Backlog Watch**  
Several long-standing issues need maintainer attention:

- **#75 (Linux/Windows apps)** – Over 6 months old, 105 comments, clearly top priority for desktop parity.
- **#6731 (Safe/Unsafe ClawdBot)** – Proposed Rust rewrite or sandbox abstraction; requires product decision.
- **#13616 (Backup/Restore Utility)** – Critical for disaster recovery; no progress since Feb 2026.
- **#12219 (Skill Permission Manifest)** – Security foundation needed before broader skill ecosystem growth.

All marked with `clawsweeper:needs-maintainer-review` or `clawsweeper:needs-product-decision`, indicating stalled triage.

--- 

*Data compiled from GitHub.com/openclaw/openclaw activity as of 2026-05-22.*

---

## Cross-Ecosystem Comparison

**Cross-Project Comparison Report: AI Agent & Personal AI Assistant Open-Source Ecosystem (May 2026)**

---

### **1. Ecosystem Overview**  
The personal AI agent open-source landscape in May 2026 is characterized by high development velocity, with projects like OpenClaw and Hermes Agent leading in community engagement and rapid iteration. A clear trend toward multi-agent architectures, security hardening, and cross-platform integrations is emerging, driven by demand for scalable, secure, and extensible agent platforms. While some projects remain single-agent-focused (e.g., NanoBot, LobsterAI), others are transitioning to distributed or identity-aware systems (ZeroClaw, IronClaw), signaling a maturation from standalone assistants to orchestrated agent ecosystems.

---

### **2. Activity Comparison**

| Project       | Issues (24h) | PRs (24h) | Releases (Last 7d) | Health Score* |
|---------------|--------------|-----------|--------------------|---------------|
| **OpenClaw**    | 500          | 500       | v2026.5.20         | ⭐⭐⭐⭐☆ (4.2)   |
| **NanoBot**     | 9            | 31        | None               | ⭐⭐⭐☆☆ (3.8)   |
| **Hermes**      | 50           | 50        | None               | ⭐⭐⭐⭐☆ (4.0)   |
| **PicoClaw**    | 9            | 30        | Nightly            | ⭐⭐⭐☆☆ (3.5)   |
| **NanoClaw**    | 3            | 14        | None               | ⭐⭐☆☆☆ (2.9)   |
| **NullClaw**    | 0            | 2         | None               | ⭐⭐☆☆☆ (2.1)   |
| **IronClaw**    | 25           | 47        | Crates.io lagging  | ⭐⭐⭐⭐☆ (4.1)   |
| **LobsterAI**   | 0            | 11        | None               | ⭐⭐☆☆☆ (2.7)   |
| **TinyClaw**    | 0            | 0         | None               | ⭐☆☆☆☆ (1.0)   |
| **Moltis**      | 6            | 5         | None               | ⭐⭐⭐☆☆ (3.3)   |
| **CoPaw**       | 26           | 29        | None               | ⭐⭐⭐⭐☆ (4.0)   |
| **ZeptoClaw**   | 0            | 0         | None               | ⭐☆☆☆☆ (1.0)   |
| **ZeroClaw**    | 21           | 50        | v0.8.0-beta-1      | ⭐⭐⭐⭐☆ (4.3)   |

*Health Score: Estimated based on release cadence, bug resolution speed, issue/PR ratio, and maintainer responsiveness (scale: 1–5).*

---

### **3. OpenClaw's Position**  
OpenClaw leads the ecosystem with exceptional activity levels (1,000+ daily updates), positioning it as the core reference platform for AI agent infrastructure. Its advantages include aggressive security hardening (exec approvals, sandboxing), strong mobile/desktop parity expectations, and a mature skill ecosystem. Unlike peers focused on single-agent simplicity (NanoBot) or niche integrations (PicoClaw), OpenClaw emphasizes enterprise-grade reliability, cross-platform consistency, and developer ergonomics—evidenced by its high issue engagement (#75 Linux/Windows apps) and rapid fix cycles (e.g., Codex Docker escape bug closed within hours). Community size appears largest due to sustained momentum and broad use-case coverage.

---

### **4. Shared Technical Focus Areas**  

| Area                     | Projects Involved                          | Specific Needs                                                                 |
|--------------------------|--------------------------------------------|--------------------------------------------------------------------------------|
| **Security Hardening**   | OpenClaw, Hermes, ZeroClaw, Moltis         | Exec approval workflows, sandbox escapes, credential isolation, Docker containment |
| **Multi-Provider Support** | NanoBot, PicoClaw, NanoClaw, Moltis, ZeroClaw | xAI, DeepSeek, NEAR AI, LiteLLM, g4f, Novita integrations; fallback routing        |
| **Telephony & Messaging**| PicoClaw, CoPaw, Moltis                    | Telegram/Signal stability, Twilio speech handling, file attachment reliability   |
| **Containerization**     | Moltis, Hermes, IronClaw                   | Docker socket access, XDG env inheritance, sandbox auto-detection                |
| **Memory & Context Mgmt**| NanoBot, CoPaw                             | Dream system control, session continuity, context compression                  |

---

### **5. Differentiation Analysis**  

- **Feature Focus**:  
  - *OpenClaw/Hermes*: Platform maturity, security, desktop parity.  
  - *NanoBot/LobsterAI*: WebUI polish, provider expansion, cowork session UX.  
  - *ZeroClaw/IronClaw*: Multi-agent orchestration, Reborn runtime, enterprise scalability.  
  - *PicoClaw/Moltis*: Telephony-first agents, lightweight deployment.  

- **Target Users**:  
  - *Developers/Power Users*: OpenClaw, ZeroClaw, IronClaw (custom integrations, scaling).  
  - *Business Operators*: CoPaw, LobsterAI (WeChat/DingTalk, scheduled workflows).  
  - *Edge/DIY Enthusiasts*: Hermes (Termux/Android), PicoClaw (low-resource hardware).  

- **Technical Architecture**:  
  - *Monolithic Agents*: NanoBot, LobsterAI.  
  - *Modular Runtimes*: IronClaw (WASM/Script lanes), ZeroClaw (RPC-based multi-host).  
  - *Hybrid*: OpenClaw (core + skill plugins), CoPaw (channel adapters).  

---

### **6. Community Momentum & Maturity**  

- **Rapid Iteration Tier**: OpenClaw, ZeroClaw, Hermes, IronClaw (>40 updates/day) — actively evolving with breaking changes and beta releases.  
- **Stabilizing Tier**: NanoBot, CoPaw (~30 updates/day) — focused on UX refinement and provider stabilization.  
- **Niche/Declining Tier**: NullClaw, TinyClaw, ZeptoClaw (<5 updates/day) — minimal engagement, stalled features.  

OpenClaw and ZeroClaw exhibit the healthiest balance of innovation and stability, while Hermes and IronClaw show strong institutional backing despite complexity. Projects like NanoBot demonstrate sustainable maintenance without explosive growth.

---

### **7. Trend Signals**  

- **Multi-Agent Orchestration Rising**: ZeroClaw’s v0.8.0 shift and IronClaw’s Reborn cutover reflect industry move beyond single agents.  
- **Security as Default**: Exec approval, sandboxing, and secrets masking are now baseline expectations (OpenClaw, Hermes).  
- **Telephony Integration Critical**: Signal/Telegram/Twilio reliability is a top pain point (PicoClaw, Moltis, CoPaw).  
- **Provider Neutrality Demanded**: Users reject vendor lock-in; LiteLLM, g4f, and NEAR AI integrations signal demand for open inference layers.  
- **TUI & Observability Gaps**: Terminal interfaces (ZeroClaw #6824) and session visibility (LobsterAI #1536) are underserved compared to WebUIs.  

For AI agent developers, this signals opportunity in **secure agent runtimes**, **cross-platform messaging abstractions**, and **provider-agnostic toolchains**—with OpenClaw and ZeroClaw setting the strategic direction.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – May 22, 2026**

---

### 1. Today's Overview  
NanoBot remains highly active with 31 pull requests updated in the last 24 hours (23 merged), indicating strong development momentum focused on WebUI improvements, provider integrations, and memory system refinements. Issue activity is moderate (9 updates), dominated by WebUI stability and configuration control concerns. No new releases were published today, suggesting ongoing stabilization before a potential next version.

---

### 2. Releases  
No new releases deployed since the last update.

---

### 3. Project Progress  
Today’s merged PRs advanced several key areas:
- **WebUI performance**: Sidebar responsiveness improved via batched rendering (#3953) and collapsible UI refinement (#3951).
- **Provider expansion**: Novita AI added as built-in LLM provider (#3927); Skywork first-level support enabled (#3916); xAI Grok OAuth integration started (#3936).
- **Execution safety**: Shell command stdin detachment fixed to prevent inheritance issues (#3922); Windows shell tests stabilized (#3947); URL-based shell guards corrected to avoid false positives (#3933).
- **Coding tools**: Structured `apply_patch` tool introduced for safer multi-file edits (#3923).
- **Memory system**: Dream + Consolidator prompt enhancements initiated for MECE-structured long-term memory (#3952).
- **Bug fixes**: Kimi thinking model compatibility restored by dropping redundant `reasoning_effort` flag (#3940); WebUI session refresh no longer drops new chats (#3944).

---

### 4. Community Hot Topics  
The most engaged issue (#3885) seeks a global toggle for Dream system jobs to allow users to fully disable them despite other memory settings—highlighting demand for finer-grained control over background processes. The WebUI accessibility concern (#3876) also drew attention, revealing friction in containerized deployments where localhost-only binding blocks external access. Both reflect growing user complexity in production setups and need for clearer configuration boundaries.

---

### 5. Bugs & Stability  
Top-severity bugs addressed:
- **WebUI session termination after first response** (#3884): Fixed by preserving chat state during refresh cycles (#3944).
- **Duplicate `tool_call_id` errors in WebUI** (#3945): Closed without linked fix PR, but likely resolved server-side based on timing.
- **Shell guard blocking valid HTTP requests** (#3931): Addressed in #3933 by excluding URLs from workspace path checks.
- **Moonshot API rejection due to conflicting reasoning flags** (#3939): Resolved in #3940 by removing redundant `reasoning_effort` for Kimi models.

All high-priority WebUI and execution-path bugs received immediate fixes, signaling responsive maintenance.

---

### 6. Feature Requests & Roadmap Signals  
Key feature signals include:
- **Configurable Dream job enablement** (#3885): Strong user desire for opt-out of background memory tasks.
- **Global WebUI accessibility** (#3876): Need to support non-localhost bindings in Docker environments.
- **Image generation providers** (#3954, #3946): OpenAI/Codex and Ollama support actively being integrated.
- **BM25 skill router** (#3865): Emerging efficiency initiative to reduce system prompt bloat (~60% token reduction).
These suggest upcoming versions will emphasize configurability, multi-provider image support, and performance optimization.

---

### 7. User Feedback Summary  
Users report frustration with **uncontrollable background memory generation** ("Dream" skills persisting despite USER.md directives) and **WebUI instability** (session drops, display glitches). Positive engagement surrounds **new provider additions** (Novita, Skywork, xAI) and **improved coding tools**. Pain points center on lack of runtime control and deployment friction in containerized contexts—especially around network binding and authentication flows.

---

### 8. Backlog Watch  
- **#3885 (Dream job switch)**: Open enhancement with clear use case; maintainers should prioritize implementation given recurring user complaints.
- **#3876 (WebUI binding)**: Validated accessibility blocker; needs resolution for Docker/Kubernetes compatibility.
- **#3865 (BM25 skill router)**: High-value efficiency improvement with technical readiness; consider fast-tracking if resources allow.

--- 

*Data sources: GitHub Issues & PRs from [HKUDS/nanobot](https://github.com/HKUDS/nanobot)*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest – May 22, 2026**

---

### **1. Today's Overview**  
Hermes Agent shows high development velocity with 50 issues and 50 PRs updated in the last 24 hours, indicating active maintenance and rapid iteration. No new releases were published today, but multiple bug fixes, security patches, and feature enhancements are being merged. The project continues to prioritize stability (notably addressing crashes and memory leaks), UI/UX improvements, and multi-platform gateway integrations.

---

### **2. Releases**  
*No new releases occurred on May 22, 2026.*

---

### **3. Project Progress**  
Today’s merged or closed PRs include:
- **#30088**: Split Slack `reply_in_thread` into DM-vs-channel knobs for better UX (#30088)
- **#30087**: Fix final-send preservation on Slack DM streaming path (#30087)
- **#30086**: Default `gateway_restart_notification=false` for Slack to reduce noise (#30086)
- **#29438** (closed): Termux CLI startup performance optimization (salvaged onto main) (#29438)
- **#24324** & **#30051**: Computer-use tool fix: surface app filter mismatches instead of silent fallback (#24324, #30051)
- **#27501**: Remove unsupported VOLUME instruction from Dockerfile (#27501)

These changes reflect focus on platform-specific reliability, user experience, and build hygiene.

---

### **4. Community Hot Topics**  
Top-engagement issues highlight demand for improved theming and cross-platform consistency:

- **#18080** ([Improved Themes for Dashboard](https://github.com/NousResearch/hermes-agent/issues/18080)): 24 👍, 15 comments — Users criticize non-standard fonts and low-contrast themes (Midnight/Ember/Mono). Underlying need: accessibility and customization.
- **#7237** ([Response Truncation Bug](https://github.com/NousResearch/hermes-agent/issues/7237)): 4 👍, 31 comments — Long-form output is cut mid-stream during CLI/gateway use. Signals frustration with core LLM integration reliability.
- **#25267** ([Claude Subscription OAuth Support](https://github.com/NousResearch/hermes-agent/issues/25267)): 5 👍, 1 comment — Desire to avoid double billing when using Claude Pro subscriptions. Indicates monetization-aware user segment growing.

PR **#30128** (weekly Docker rebuild for Debian sec patches) also drew attention due to 41 CVEs pending in main image.

---

### **5. Bugs & Stability**  
New critical bugs reported today:
1. **#30100–30103**: Multiple **security vulnerabilities** in terminal/code-execution tools:
   - Sudo password caching in plaintext (#30102)
   - Shell command bypass via obfuscation (#30100)
   - Code execution sandbox lacks isolation (#30101)
   → All flagged P2; urgent review needed.
2. **#30127 / #30122**: **Telegram 409 polling conflicts** cause persistent gateway instability (~31s cycles). Ranked P1 due to gateway disruption.
3. **#30095**: Kimi K2.6 crashes on union-type tool parameters (unhashable list error). Blocks tool usage with Moonshot models.
4. **#29926**: Context compression runs but discards result on next turn — breaks session continuity. P1.

Fix PRs exist for several (e.g., #30108 addresses skill archival race), but security flaws require immediate maintainer action.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging features with strong signals:
- **Local STT with Vosk** (#29688): Requested for low-resource devices like Raspberry Pi — suggests edge deployment focus.
- **Claude Subscription OAuth** (#25267): Direct request for Codex-style provider integration — likely high-priority for enterprise users.
- **MCP Server Resilience** (#29726): Want optional MCP failures not block startup — indicates growing ecosystem plugin reliance.
- **Image Gen Reference Support** (#29999): Need for multi-modal generation (e.g., UNI 1.1) — aligns with vision-capable model trends.

PR **#29974** adds SIMPLICIO_PROMPT overlay — a sign of community-driven prompt engineering becoming first-class.

---

### **7. User Feedback Summary**  
Users express:
- **Frustration** with UI legibility (small serif fonts, poor contrast).
- **Concern** over security gaps in sandboxed execution (especially sudo/env leaks).
- **Appreciation** for responsiveness on Android/Termux optimizations.
- **Desire** for tighter subscription model alignment (avoid API key + paid tier overlap).

Pain points center on **trust** (security), **reliability** (truncation, crashes), and **customization** (themes, MCP resilience).

---

### **8. Backlog Watch**  
Watchlist items requiring maintainer attention:
- **#11693** ([Memory config limits not honored](https://github.com/NousResearch/hermes-agent/pull/11693)): Open since Apr 17, affects memory tool reliability. Needs review — impacts core agent behavior.
- **#28664** ([Document outbound messaging opt-in](https://github.com/NousResearch/hermes-agent/pull/28664)): Docs/test PR open since May 19. Critical for API-server adoption.
- **#24860** ([Ctrl+V paste broken in TUI](https://github.com/NousResearch/hermes-agent/issues/24860)): Still open after 9 days — blocks basic usability in dashboard chat.

Maintainers should prioritize these to prevent technical debt accumulation.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – May 22, 2026**

---

### **Today’s Overview**  
PicoClaw remains highly active with strong development momentum: 30 pull requests updated in the last 24 hours (10 merged/closed, 20 open), including critical dependency upgrades and new provider integrations. The project released a nightly build (v0.2.8-nightly.20260521.33f9d638), indicating ongoing experimental work ahead of a potential stable release. With 9 issues updated—7 resolved—the team demonstrates responsive bug triage and feature refinement. Overall activity reflects healthy contributor engagement and steady progress toward stability and extensibility.

---

### **Releases**  
A new **nightly build** was published:  
- **Version**: `v0.2.8-nightly.20260521.33f9d638`  
- **Notes**: Automated nightly build; may be unstable. Full changelog: [GitHub Compare](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)  
No stable release or breaking changes announced.

---

### **Project Progress**  
**Merged/Closed PRs (today)** include:  
- **Telegram forum topic preservation** for `message` tool sends (#2772)  
- **Tool feedback suppression** for cron jobs to avoid noisy chat output (#2777)  
- **Topic-trigger overrides** for Telegram supergroups (#2779)  
- **Working summary tool feedback mode** for real-time progress display (#2778)  
- **Dockerfile creation** in root directory for easier deployment (#2812)  
- **Session message timestamp fix** ensuring per-message timestamps via API (#2787)  
These reflect focused improvements in messaging reliability, user experience, and infrastructure accessibility.

---

### **Community Hot Topics**  
The most discussed items remain unresolved or feature-rich:  
- **#2916 (CPU, Memory, IO optimizations)** – Two comments from corporatepiyush propose low-level performance enhancements across skills and I/O subsystems. Suggests strategic refactoring for resource-constrained deployments.  
- **#2901 (Native GPT4Free support + fallback routing)** – High-value feature request enabling cost-effective inference on lightweight hardware. Signals growing demand for alternative LLM providers beyond commercial APIs.  
Both issues indicate community push toward efficiency and decentralization.

---

### **Bugs & Stability**  
Critical bugs resolved today:  
1. **PDF stream corruption in Telegram** (#2798): Fixed by preserving session integrity during binary attachment handling.  
2. **Conversation history truncation** (#2795): Addressed incomplete message retrieval in multi-turn sessions.  
3. **Multi-user sender attribution loss** (#2702): Enhanced default session scope to tag historical messages with original senders.  
All fixes were implemented and merged within 24 hours, showing rapid response to core UX pain points.

---

### **Feature Requests & Roadmap Signals**  
Emerging priorities from recent activity:  
- **Provider ecosystem expansion**: NEAR AI Cloud integration (#2917), g4f support (#2901), and unified vendor docs (#2662) suggest broadening LLM compatibility.  
- **Context-aware agent policies**: Frontmatter-based tool filtering (#2838) and request-scoped turn profiles (#2914) point toward finer-grained runtime control.  
- **Infrastructure simplification**: Dockerfile creation (#2812) and funding setup (#2912) highlight efforts to lower entry barriers for new users.  

These trends suggest v0.2.8 or v0.3.0 will emphasize modularity, observability, and ease of deployment.

---

### **User Feedback Summary**  
Key pain points surfaced:  
- Users struggle with **agent role confusion** when child agents inherit root workspace context (#2775).  
- **Shared conversation sessions** in group channels lack proper user attribution, causing misattribution in logs and replies (#2702).  
- **Binary file handling** (e.g., PDFs) breaks under certain conditions, especially in Telegram (#2798).  
Positive signals include appreciation for **transparent progress feedback** (#2778) and desire for **project sustainability** via GitHub Sponsors (#2912).

---

### **Backlog Watch**  
One high-priority item requires maintainer attention:  
- **#2775: Sub-Agent Role Identity Confusion**  
  *Created*: May 5 | *Status*: Closed but marked stale  
  *Issue*: Child agents inherit root `AGENT.md`, blurring role boundaries.  
  *Impact*: Undermines multi-agent orchestration clarity.  
  While closed, it lacks a clear resolution path or follow-up PR, suggesting incomplete implementation or oversight. Maintainers should verify whether role isolation is now enforced or if this remains an open architectural concern.

--- 

*Data snapshot reflects real-time GitHub activity as of 2026-05-22.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – May 22, 2026**

---

### **1. Today’s Overview**  
NanoClaw remains highly active with 14 repository updates in the last 24 hours—9 open pull requests and 3 newly opened issues. Development is accelerating around AI agent integrations (notably Edna Veo 3.1 video support), provider abstraction improvements, and Signal authentication stability. The project shows strong momentum in multi-provider flexibility (Claude Code, Codex, LiteLLM) while actively addressing critical runtime reliability concerns.

---

### **2. Releases**  
No new releases published today.

---

### **3. Project Progress**  
Two PRs were merged/closed since yesterday:
- **#2576**: Fixed a regression in assistant text block visibility during SDK mode by correcting `progressType` handling after commit ea21e58 suppressed intermediate agent thoughts.
- **#2577**: Closed a cross-repository sync issue (`isbtty/deshi#267`) that auto-injected `channelContext` from `session_routing`, streamlining MCP tool arguments and removing redundant fields like `isGroup`.

These fixes improve user-facing responsiveness and internal consistency across agent-tooling interfaces.

---

### **4. Community Hot Topics**  
The most engaged discussions center on **Signal CLI compatibility** (#2581, #2582) and **Edna Veo 3.1 integration** (#2532). While none have comments yet, the rapid opening of related issues and PRs indicates high community interest:
- **#2581** directly addresses a breaking change in signal-cli v0.13+ that broke account detection due to renamed JSON fields.
- **#2532** introduces end-to-end video generation and stitching via Google’s Veo 3.1 API for Slack delivery—a significant multimodal capability expansion.

Both reflect demand for robust, up-to-date third-party integrations and advanced media-handling features.

---

### **5. Bugs & Stability**  
Three new bugs reported today, all related to **Signal service reliability**:

| Issue | Severity | Description | Fix Status |
|------|--------|-------------|------------|
| [#2583](https://github.com/qwibitai/nanoclaw/issues/2583) | High | `restartService()` silently fails when plist is unloaded; uses invalid `launchctl kickstart -k` behavior | No fix PR yet |
| [#2582](https://github.com/qwibitai/nanoclaw/issues/2582) | Critical | `signal-auth listAccounts` deadlocks if daemon holds config lock | **Fix in PR #2584** (same author) |
| [#2581](https://github.com/qwibitai/nanoclaw/issues/2581) | Medium | Incorrect "no linked account" due to JSON field mismatch in signal-cli ≥0.13 | **Fix in PR #2584** |

PR #2584 simultaneously resolves both #2581 and #2582 by implementing timeout-aware `spawnSync` calls and flexible field mapping. However, #2583 remains unaddressed and requires architectural review of service lifecycle management.

---

### **6. Feature Requests & Roadmap Signals**  
Key signals point toward **multi-AI-provider parity** and **enhanced media capabilities**:
- Full **Codex-only installation support** (#2580) enables users to bypass Claude Code entirely.
- **LiteLLM provider integration** (#2490) suggests broader LLM abstraction ambitions.
- **Edna Veo 3.1 video pipeline** (#2532) implies investment in generative multimodal workflows beyond text.

These suggest Q3 2026 may see a major release emphasizing provider neutrality and rich content delivery.

---

### **7. User Feedback Summary**  
Users are experiencing **friction with third-party dependency changes** (signal-cli v0.13) and **service lifecycle edge cases** (unloaded plists). Positive signals include appreciation for deep provider customization (Codex-only setup) and anticipation of video features. Pain points center on silent failures in background services and lack of graceful degradation when external tools misbehave.

---

### **8. Backlog Watch**  
No long-unanswered issues flagged today. All recent activity has been addressed within hours or days. Maintainers should monitor **#2583** closely—its silent failure mode could impact production deployments on macOS systems using launchd.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest – May 22, 2026**

**1. Today’s Overview**  
As of May 22, 2026, the NullClaw project shows minimal activity over the past 24 hours, with no new issues or releases and only two open pull requests updated. This reflects a period of low development velocity, likely coinciding with maintenance or planning phases. The absence of merged changes or critical bug reports suggests stable but inactive progress. With no community engagement (zero comments or reactions on recent PRs), user attention appears subdued at this time.

**2. Releases**  
No new releases have been published today. The last known release remains unspecified in the provided data; no version history is available to reference breaking changes or migration notes.

**3. Project Progress**  
No pull requests were merged or closed within the last day. All recent contributions remain under review or pending integration. Feature development is currently stalled at the PR stage, indicating either code review delays or prioritization shifts.

**4. Community Hot Topics**  
There are no active discussions or highly engaged threads today. The two latest PRs—#783 (cron subagent engine) and #922 (NEAR AI Cloud provider)—have received no comments or reactions despite their technical scope. This may signal either niche interest or that these features are not yet surfaced to broader user workflows. Both PRs target infrastructure expansion (scheduling and multi-provider support), suggesting long-term strategic direction rather than immediate user-facing needs.

**5. Bugs & Stability**  
No bugs, crashes, or regressions were reported in the last 24 hours. There are no open issue tickets to address, indicating system stability and operational reliability at present.

**6. Feature Requests & Roadmap Signals**  
The open PRs hint at upcoming roadmap priorities:  
- **Cron Subagent Engine (#783)**: Introduces a DB-backed job scheduler with historical tracking, JSON output, and security hardening—suggesting enterprise-grade automation and auditability needs.  
- **NEAR AI Cloud Provider (#922)**: Expands OpenAI-compatible provider support, reflecting demand for heterogeneous LLM orchestration.  
While not direct feature requests, these developments imply future versions will emphasize observability, multi-cloud agent execution, and secure job management.

**7. User Feedback Summary**  
No explicit user feedback (comments, reactions, or issue reports) was recorded today. The silence on recent PRs suggests users may not yet be testing these new capabilities or that they are internal/early-access features. No dissatisfaction or pain points have surfaced publicly recently.

**8. Backlog Watch**  
Both open PRs date from April and May 2026 and remain unmerged. PR #783 (cron subagent) has been open for over six weeks without resolution, raising concerns about maintainer availability or architectural complexity. Similarly, PR #922, though newer, lacks review traction. Given their significance to core functionality (scheduling and extensibility), these PRs warrant closer attention to avoid blocking critical feature delivery.

*— End of Digest —*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – May 22, 2026**

**1. Today's Overview**  
The IronClaw project shows robust development velocity with 47 PRs and 25 issues updated in the last 24 hours. Activity is dominated by the ongoing **Reborn cutover initiative**, with multiple P0/P1 blockers nearing completion or recently closed. No new releases were published today, but crates.io remains behind the GitHub tagline (v0.27.0), creating a dependency bottleneck noted in #3259. The codebase continues to evolve toward a shared Reborn runtime architecture across WASM, Script, and MCP lanes.

**2. Releases**  
No new releases were published today. The latest published crate on crates.io remains `ironclaw-v0.24.0` as of March 31, 2026, while GitHub tags go up to v0.27.0 (April 29, 2026). This gap is actively tracked in issue #3259 and may impact downstream consumers pinned to older versions due to wasmtime CVE fixes.

**3. Project Progress**  
Several high-impact PRs merged today:
- **#3852**: Fixed before-inbound policy timeout and logging concerns from prior review (#3632).
- **#3855**: Consolidated generic extension installation state into `ironclaw_extensions`, reducing duplication and clarifying boundaries.
- **#3848** & **#3850**: Advanced skill bundle integration into Reborn context, enabling scoped filesystem access for first-party skills.
- **#3759**: Implemented durable ProductWorkflow ledger with libSQL/PostgreSQL support for idempotency and recovery leases.

These advances reflect steady progress on Reborn’s infrastructure layer, particularly around security, composition, and persistence.

**4. Community Hot Topics**  
Top discussion threads center on **Reborn cutover readiness** and **WebUI usability**:
- **#3031** (*Reborn product surface migration*) has 7 comments and remains open as an EPIC tracking backward compatibility during the transition.
- **#3846** (*Mission notify_channels inheritance*) and **#3840** (*channel badges*) both have zero reactions but reflect user-facing clarity needs in WebUI Chat—especially around channel context propagation and visual consistency.
- **#3821** (*Thread::restore_from_messages drops orphan assistant rows*) touches core session reconstruction logic and has garnered attention from maintainers due to its impact on out-of-band context injection.

Underlying themes: users seek clearer UI semantics; operators need reliable message threading; architects stress-test Reborn’s isolation guarantees.

**5. Bugs & Stability**  
One critical stability alert emerged:
- **#3447** (*Nightly E2E failed*) reports a recent test suite failure linked to commit `030cfeb`. While not tied to a specific crash, this suggests integration instability possibly related to recent Reborn service wiring changes. No fix PR yet, but the issue is being monitored by automation.

Minor UX bugs logged:
- **#3839** (*Retry button returns fired:false*) indicates a frontend-backend contract mismatch in mission retry logic.
- **#1519** (*Routine notifications lack context*) highlights a design gap where routine alerts are siloed from active chat threads.

Both have low comment counts but represent actionable UX improvements.

**6. Feature Requests & Roadmap Signals**  
Strong signals point to **Reborn-native product adapters** as the next frontier:
- **#3857** proposes a Slack MVP adapter with preconfigured credentials—Lane 10 of the broader Reborn rollout.
- **#3810/3811/3812** form a sequenced plan to replace legacy OAuth/auth flows with typed Reborn contracts.
- **#3737** enables dynamic tool/skill installation from IronHub at runtime, signaling a shift toward agent self-sufficiency.

Additionally, **cost-based budgeting** (#3841) and **first-class hook framework** (#3523, now closed) indicate monetization and extensibility priorities for enterprise use cases.

**7. User Feedback Summary**  
Real-world pain points include:
- Confusion around mission behavior in multi-channel WebUI contexts (e.g., which conversation source governs `notify_channels`)—users expect intuitive inheritance semantics.
- Visual inconsistency in channel badges reduces scanability in conversation lists.
- Lack of contextual notifications when routines trigger external alerts isolates users from relevant history.

Satisfaction is mixed: power users appreciate Reborn’s architectural rigor, but casual operators report friction in understanding cross-channel mission behavior and UI affordances.

**8. Backlog Watch**  
Two items demand maintainer attention:
- **#3259** (*Publish 0.25.0–0.27.0 to crates.io*) has been open since May 5 and risks fragmenting dependency resolution. Requires triage on release process bottlenecks.
- **#3447** (*Nightly E2E failure*) has seen no human intervention despite automated reporting—may indicate flaky tests or infra drift affecting reliability assurances.

Both require either ownership assignment or escalation to ensure they don’t become technical debt traps during the critical Reborn cutover phase.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – May 22, 2026**

---

### 1. **Today's Overview**  
LobsterAI shows steady development activity with 11 pull requests updated in the last 24 hours, including 9 open and 2 merged/closed PRs. No new releases were published today, and no issues were opened or resolved. The project maintains a consistent pace of incremental improvements focused on UI polish, internationalization (i18n), and core cowork session management enhancements. Overall, the repository exhibits healthy maintenance activity without major disruptions.

---

### 2. **Releases**  
No new releases were published as of May 22, 2026.

---

### 3. **Project Progress**  
Two PRs were merged or closed today:
- **PR #2025**: Refactored image bot (IM) management UI under `renderer`, `main`, `openclaw`, and `im` modules.
- **PR #2024**: Optimized gateway restart logic in application settings to improve responsiveness.

These changes reflect ongoing backend optimization and frontend UX refinement efforts.

---

### 4. **Community Hot Topics**  
The most active open PRs—all created on April 7 but recently updated—highlight growing demand for enhanced cowork session usability:
- **PR #1536** proposes system-level notifications when cowork tasks complete/fail (#1536), addressing user awareness gaps during multitasking.
- **PR #1538** introduces bookmarking AI responses (#1538), enabling quick reference in long conversations.
- **PR #1542** adds custom tagging and filtering for cowork sessions (#1542), improving organization.

While these PRs have zero reactions or comments, their sustained staleness (no updates since May 21 despite being open since early April) suggests potential review bottlenecks or low maintainer bandwidth.

---

### 5. **Bugs & Stability**  
No new critical bugs reported today. However, several high-severity fixes are under review:
- **PR #1543** addresses hardcoded Chinese strings in approval dialogs breaking English mode (#1543)—a direct i18n integrity issue.
- **PR #1544** fixes memory leaks in GitHub Copilot OAuth polling upon settings unmount (#1544).
- **PR #1545** resolves delayed skill badge updates after agent modifications (#1545).

All three target stability and localization reliability; none have associated open issues yet, indicating proactive bug detection.

---

### 6. **Feature Requests & Roadmap Signals**  
User feedback strongly signals need for better session lifecycle visibility and personalization:
- **System notifications** (PR #1536) indicate users struggle to track background task completion.
- **Bookmarking AI replies** (PR #1538) and **custom tags** (PR #1542) suggest desire for richer conversation archiving and retrieval.
- **Engine overlay improvements** (PR #1546) show frustration with opaque startup failures.

These features align with expected Q3 2026 roadmap priorities around cowork experience maturity and cross-platform consistency.

---

### 7. **User Feedback Summary**  
Key pain points include:
- **Language inconsistency**: Hardcoded Chinese text breaks immersion in English mode (PR #1543).
- **Poor task feedback**: Users miss when cowork tasks finish due to lack of system alerts (PR #1536).
- **UI/UX friction**: Settings like Copilot auth and scheduled tasks exhibit state retention bugs (PRs #1544, #1547).
- **Discovery challenges**: Long conversations make it hard to find important AI responses (driving PRs #1538, #1542).

Satisfaction appears moderate—users value functionality but report fragmentation between core cowork features and peripheral settings.

---

### 8. **Backlog Watch**  
Several open PRs remain stale despite clear value:
- **PR #1536**, **#1538**, **#1542**, **#1546**: All propose meaningful UX upgrades but lack maintainer engagement for over a month.
- **PR #1547** (scheduled task notification bugfix) also sits unresolved since April 7.

Maintainers should prioritize these to prevent community disengagement. Consider designating a "UX sprint" to close these feature requests efficiently.

--- 

*Data source: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – May 22, 2026**

---

### 1. **Today's Overview**  
The Moltis project shows steady development activity with 6 open issues and 5 pull requests updated in the last 24 hours. No new releases were published today, but one PR (#1005) was merged, indicating ongoing stabilization and feature refinement. A clear pattern emerges around Docker/sandboxing challenges and telephony integration improvements, suggesting these areas are active pain points for users. Overall project momentum remains healthy with responsive maintainer engagement.

---

### 2. **Releases**  
No new releases published today.

---

### 3. **Project Progress**  
One pull request was merged today:  
- **#1005**: *feat(openai-codex): add reasoning effort support* (merged on 2026-05-21)  
This enhancement enables better control over OpenAI Codex’s reasoning capabilities by passing `reasoning_effort` through cloned provider instances and ensuring encrypted content continuity across follow-up turns.

Other open PRs include security (vault disabling), Twilio speech handling fixes, Docker sandbox auto-detection improvements, and a new NEAR AI Cloud provider integration—all reflecting focused efforts on infrastructure reliability and multi-provider support.

---

### 4. **Community Hot Topics**  
- **Issue #977**: Browser sandbox failure in Docker environments has 4 comments and is actively discussed. Users report mounting issues when running Moltis inside LXC containers with Docker socket access—a critical concern for self-hosted deployments.  
  🔗 [moltis-org/moltis#977](https://github.com/moltis-org/moltis/issues/977)

- **PR #1035**: *fix(sandbox): auto-detect docker host data mounts* directly addresses #977 by improving fallback logic for container path resolution. This PR is live and may resolve the core complaint.

- **PR #1034**: Fixes Twilio gather parsing to handle speech results before call status updates—critical for real-world voice agent functionality.

These items highlight strong alignment between user-reported problems and active fixes, especially around containerized execution and telephony robustness.

---

### 5. **Bugs & Stability**  
Five bugs reported today, all newly opened:

| Issue | Severity | Description | Fix Status |
|-------|----------|-------------|------------|
| #977 | High | Browser sandbox fails in Docker/LXC | ✅ Fix proposed in #1035 |
| #1037 | High | `send_image` / `send_document` fail in Docker | Likely related to #977; no fix yet |
| #1032 | Medium-High | Twilio calls receive greeting but don’t respond to input | Partially addressed in #1034 (gather parsing) |
| #1030 | Medium | OpenAI TTS requires `opus` format unsupported by Speaches | No fix PR yet |
| #1029 | Low-Medium | Piper TTS conversion not handled in crate | Enhancement, not bug |

Two Docker-related bugs appear interlinked, suggesting a systemic issue with file/media handling in containerized browser sandboxes.

---

### 6. **Feature Requests & Roadmap Signals**  
- **NEAR AI Cloud provider** (#1031): Indicates expansion beyond OpenAI-compatible providers toward decentralized or alternative AI inference platforms.
- **Arbitrary inbound file attachments in web UI** (#1036): Suggests growing demand for richer user interaction modalities.
- **Piper TTS audio conversion** (#1029): Reflects need for broader TTS engine support beyond OpenAI and Speaches.

These signals point toward enhanced extensibility and multi-modal interaction as near-term roadmap priorities.

---

### 7. **User Feedback Summary**  
Users express frustration primarily around **Docker compatibility**, especially with media uploads (`send_image`, `send_document`) and browser sandbox initialization. Real-world telephony use cases (Twilio phone calls) reveal gaps in speech event sequencing that impact conversational flow. There’s also interest in greater customization of TTS output formats and expanded provider ecosystems. Satisfaction appears mixed—core functionality works, but deployment complexity and edge-case handling in container environments remain barriers.

---

### 8. **Backlog Watch**  
- **Issue #977** (Browser sandbox in Docker): Created May 6, 2026; still open despite multiple comments. While #1035 offers a fix, it hasn’t been merged or tested in depth. Maintainers should prioritize review to prevent regression.
- No other long-unanswered high-priority issues detected today.

--- 

*Data snapshot reflects GitHub activity up to 2026-05-22. All links verified against moltis-org/moltis repository.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – May 22, 2026**

---

### **1. Today's Overview**
The CoPaw project remains highly active, with 55 total updates (26 issues + 29 PRs) in the last 24 hours. Development momentum is strong, driven by rapid iteration on channel integrations, UI polish, and backend reliability. No new releases were published today, but several critical bug fixes and enhancements are under review or merged. The community continues to engage deeply around messaging channels (WeChat, DingTalk), agent stability, and developer tooling.

---

### **2. Releases**
No new releases were published today.

---

### **3. Project Progress**
**Merged/Closed PRs (last 24h):**  
- **#4576**: Fixed WeChat iLink message deduplication and infinite retry loops when `context_token` expires ([PR #4576](https://github.com/agentscope-ai/QwenPaw/pull/4576))  
- **#4598 / #4520**: Implemented chat input draft persistence across page navigation in Console frontend ([PR #4598](https://github.com/agentscope-ai/QwenPaw/pull/4598))  
- **#4591**: Enhanced skill validation with proper error code propagation during ZIP import ([PR #4591](https://github.com/agentscope-ai/QwenPaw/pull/4591))  
- **#4567**: Added file block processing in message handlers for richer media support ([PR #4567](https://github.com/agentscope-ai/QwenPaw/pull/4567))  
- **#4609**: Fixed test suite regression in `test_mcp.py` ([PR #4609](https://github.com/agentscope-ai/QwenPaw/pull/4609))  

Several other fixes—including DingTalk filename decoding, headless browser warnings, and ACP session cleanup—were also closed today, reflecting focused stabilization efforts.

---

### **4. Community Hot Topics**
Top-discussed items include:
- **#4559**: Performance degradation with >40 agents in console UI ([Issue #4559](https://github.com/agentscope-ai/QwenPaw/issues/4559)) — Users report sluggishness; linked to earlier issue #3499.
- **#4585**: Self-developed plugins not auto-discovered in WeCom channel chats ([Issue #4585](https://github.com/agentscope-ai/QwenPaw/issues/4585)) — Highlights inconsistency between desktop and channel plugin discovery.
- **#4611**: ACP sessions not auto-closing post-task, causing conflicts on reuse ([Issue #4611](https://github.com/agentscope-ai/QwenPaw/issues/4611)) — Directly addressed by PR #4615 today.

These reflect a core user need: **consistent behavior across deployment modes** (desktop vs. channel) and **robust multi-agent orchestration**.

---

### **5. Bugs & Stability**
Critical bugs reported today:
1. **#4605**: `ValidationError` on Gemini/Gemma models due to incorrect `max_tokens` parameter ([Issue #4605](https://github.com/agentscope-ai/QwenPaw/issues/4605)) — High severity; blocks model usage.
2. **#4612**: WeChat `send_file_to_user` shows success but fails silently ([Issue #4612](https://github.com/agentscope-ai/QwenPaw/issues/4612)) — Medium severity; affects file delivery reliability.
3. **#4586**: DingTalk filenames with Chinese characters get percent-encoded ([Issue #4586](https://github.com/agentscope-ai/QwenPaw/issues/4586)) — UX blocker for East Asian users.

Fixes for #4612 and #4586 are already in progress (#4597, #4600). #4605 lacks an open fix yet.

---

### **6. Feature Requests & Roadmap Signals**
Notably active feature requests:
- **#4551**: Lossless context compression via DAG-based summarization ([Issue #4551](https://github.com/agentscaw/issues/4551)) — Suggests architectural shift toward smarter memory management.
- **#4613**: Plugin agent hook support (`register_agent_hook`) ([Issue #4613](https://github.com/agentscope-ai/QwenPaw/issues/4613)) — Indicates demand for deeper plugin integration.
- **#4584**: Improve browser automation stability by prioritizing Playwright over headless Chrome ([Issue #4584](https://github.com/agentscope-ai/QwenPaw/issues/4584)) — Reflects production reliability concerns.

Given recent activity, **context-aware cron jobs** (via #4602) and **unified skill market** (#4518) appear likely for inclusion in v1.1.9+.

---

### **7. User Feedback Summary**
Users highlight:
- **Frustration**: Inconsistent logging in failed file/message sends (WeChat/DingTalk), especially lack of visibility into iLink API failures.
- **Appreciation**: Draft persistence fix (#4520) and skill validation improvements show responsiveness.
- **Use Case Gap**: Heavy reliance on scheduled tasks (cron) for daily workflows; current token-expiry handling is brittle.
- **Localization Needs**: Chinese filename encoding and dark-mode styling gaps indicate localization not fully baked in.

Overall sentiment leans constructive but urgent around channel reliability.

---

### **8. Backlog Watch**
- **#3054**: OneBot cron group messaging broken since April — unresolved for >6 weeks ([Issue #3054](https://github.com/agentscope-ai/QwenPaw/issues/3054)). Requires maintainer triage.
- **#4408**: Unified `.qwenpaw` workspace directory proposal — long-standing UX suggestion needing design alignment.
- **#3813**: Tauri 2.x desktop app support — stalled PR awaiting review or CI fixes.

Maintainers should prioritize #3054 and assess feasibility of #3813 to prevent further fragmentation.

--- 

*Data as of 2026-05-22 00:00 UTC | Source: GitHub API snapshots*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – May 22, 2026**

---

### **1. Today's Overview**
ZeroClaw shows strong development momentum with 50 PRs and 21 issues updated in the last 24 hours. The project released v0.8.0-beta-1, marking a major shift to multi-agent architecture—transitioning from a single-agent daemon to a scalable, identity-aware agent host. With 45 open PRs and high-priority bugs actively being addressed, the community is engaged around TUI development, provider compatibility, and runtime extensibility. Overall activity reflects a healthy, fast-moving beta cycle focused on stability ahead of stable release.

---

### **2. Releases**

**v0.8.0-beta-1**  
- **Key Change**: ZeroClaw now operates as a true multi-agent host. Each agent runs independently with distinct identities, workspaces, memory, model providers, channels, and security profiles.
- **Capabilities**: Agents can communicate internally; configuration supports per-agent customization.
- **Migration Note**: Existing single-agent deployments will need reconfiguration to define multiple agents or migrate to a new `agent` namespace in config files. No breaking changes for core daemon operation, but skill and channel bindings must be reviewed per agent.

> Changelog: [`v0.7.5 → v0.8.0-beta-1`](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.0-beta-1)

---

### **3. Project Progress**

**Merged/Closed PRs Today**:
- **#6839**: Implemented RPC dispatch layer and Unix socket transport (`zeroclaw-runtime`). Enables direct TUI/daemon communication without HTTP gateway (peer transport).
- **#6398** *(Closed)*: Multi-agent runtime and schema V3 foundation merged—core enabling architecture for v0.8.0.

**Advancements**:
- Skills management API now exposed via gateway (PR #6700).
- Jira tool actions expanded (`list_transitions`, `transition_ticket`, `create_ticket`) for workflow automation.
- Email channel improved: HTML rendering, threading, and attachment path resolution fixed.

---

### **4. Community Hot Topics**

Most active discussions center on **TUI integration** and **provider extensibility**:

- **TUI Agent Chat** (#6824): Ratatui-based terminal interface for real-time agent interaction. High demand for parity with web dashboard.  
  🔗 [Issue #6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824)

- **DeepSeek-V4 API Format Incompatibility** (#6059): Critical bug reported by 4 users; 12 comments indicate widespread impact. Affects production use with DeepSeek models.  
  🔗 [Issue #6059](https://github.com/github.com/zeroclaw-labs/zeroclaw/issues/6059)

- **ACP Protocol Extensions for Diffs & File Proposals** (#6820): RFC proposing side-by-side diff display during file edits—enables richer approval UX.  
  🔗 [Issue #6820](https://github.com/zeroclaw-labs/zeroclaw/issues/6820)

These reflect user needs for **better observability**, **multi-modal editing**, and **broader LLM provider support**.

---

### **5. Bugs & Stability**

New critical bugs reported today:

| Issue | Severity | Component | Status |
|-------|----------|-----------|--------|
| [#6841] Vision provider ignored → routed to fallback | S1 (Blocked) | Provider / Multimodal | Open |
| [#6844] Slack `bot_token` not read from env var | S1 (Blocked) | Channel | Open |
| [#6836] Minimal build still ~26MB vs expected ~6MB | S2 (Degraded) | Daemon/Runtime | Open |

- **Fixes in progress**: No dedicated fix PRs yet for #6841 or #6844. #6836 may relate to debug symbols not stripped in minimal mode.
- **Note**: Issue #6771 (multiline heredocs blocked by SecurityPolicy) was closed—maintainers resolved sandbox policy conflict.

---

### **6. Feature Requests & Roadmap Signals**

High-signal features likely in next release:

- **Terminal User Interface (TUI)**: Multiple trackers (#6826, #6823, #6825) show coordinated effort. Expect first usable prototype post-v0.8.0.
- **Per-Session Runtime Overrides** (#6817): Allow temporary model/temperature changes without config reload—highly requested for interactive sessions.
- **Ephemeral Daemon Mode** (#6818): Auto-terminate when clients disconnect—useful for ephemeral deployments.
- **jina.ai Web Search Provider** (#6827): Growing interest in alternative search APIs beyond default options.

These align with v0.8.0 focus on usability and deployment flexibility.

---

### **7. User Feedback Summary**

**Pain Points**:
- **Build Size**: Users frustrated by large binaries despite `--minimal` flag (“still 26MB”).
- **Provider Configuration**: Slack token handling inconsistent; vision providers silently ignored due to misrouting logic.
- **Tool Filtering**: `tool_filter_groups` documented but non-functional for MCP tools—confusing for skill authors.

**Positive Signals**:
- Praise for multi-agent architecture enabling isolated agent contexts.
- Appreciation for granular config per agent (model, tools, channels).
- Strong engagement on TUI and ACP protocol extensions shows appetite for richer client experiences.

---

### **8. Backlog Watch**

**Long-unanswered Items Needing Attention**:

- **#6059 (DeepSeek-V4 Incompatibility)**: Open since Apr 24, high risk, P1 priority. Only 12 comments but 4 upvotes—likely blocking real-world usage. No fix PR yet.
- **#6699 (tool_filter_groups no-op)**: Critical for skill modularity. Open since May 16, affects MCP toolchains. Needs urgent triage.
- **#6771 (Heredoc Security Policy Block)**: Closed but may indicate broader sandbox policy rigidity—monitor related reports.

Maintainers should prioritize these to prevent regression into instability ahead of stable release.

--- 

*Data snapshot as of 2026-05-22 00:00 UTC. All links point to GitHub.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*