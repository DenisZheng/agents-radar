# OpenClaw Ecosystem Digest 2026-05-19

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-19 00:37 UTC

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

**OpenClaw Project Digest – May 19, 2026**

---

### 1. **Today’s Overview**  
OpenClaw remains highly active with 500 updated issues and PRs in the last 24 hours, indicating sustained development momentum. The project released five new versions today—including v2026.5.19-beta.1—focusing on dependency updates, agent behavior clarifications, and Docker build improvements. With 442 open issues and PRs still pending review or implementation, maintainer throughput appears robust but backlog-heavy. Overall project health is strong, though several critical session-state and security bugs demand immediate attention.

---

### 2. **Releases**  
**v2026.5.19-beta.1**:  
- Clarified agent fix guidelines: defaults should prioritize clean bounded refactors, internal leanings, and explicit plugin SDK/API deprecation paths.  
- Updated `@openclaw/proxyline` to v0.3.3.  
- Raised minimum supported Node.js version to v22.19; Pi packages updated to v0.75.1.  

**Other recent releases (v2026.5.18, v2026.5.18-beta.1, etc.)** reflect nearly identical changes, suggesting rapid stabilization around dependency alignment and Node.js compatibility. No breaking changes reported; migration is expected to be smooth for most users.

---

### 3. **Project Progress**  
Today’s merged/closed PRs include:
- **#83823**, **#83825**, **#83824**: Automated fixes from ClawSweeper bot targeting skill snapshot refreshes, UI delete confirmation viewport stability, and QA-lab personal-agent scenarios.
- **#83790** (closed): Improved Telegram queued followup resilience during gateway restarts.
- **#83317**: Fixed Web Push VAPID subject default to avoid iOS rejection.

These advances show continued automation of routine maintenance and improved user-facing reliability, particularly in messaging delivery and configuration edge cases.

---

### 4. **Community Hot Topics**  
Top-discussed items reveal core community priorities:

- **#50090**: *Community Skill Development & ClawHub* (14 comments) — Users advocate for a living ecosystem of community-maintained skills via `SKILL.md` standardization and ClawHub distribution. The gap between promise and practice is widening, calling for governance and tooling.
- **#45740**: *gh-issues skill injects untrusted content into sub-agent prompts* (12 comments) — A critical security concern where raw GitHub issue bodies are passed unsanitized to LLM subagents, risking prompt injection.
- **#43367**: *Multi-agent orchestration instability* (8 comments) — Concurrent `agents add` calls overwrite configs; session locks fail; child work detaches. This undermines production use of parallel agent workflows.

These topics highlight demand for stronger sandboxing, better skill authoring frameworks, and improved concurrency controls.

---

### 5. **Bugs & Stability**  
Newly reported regressions and crashes (ranked by impact):

1. **#51593** (P1): Moonshot/kimi-k2.5 returns HTTP 400 “tool call id duplicated” exclusively in WhatsApp group chats → **fix PR not yet filed**.
2. **#51871** (P2): Cron jobs not displayed in Control UI dashboard after upgrade to 2026.3.13 → **regression**, likely due to UI state mismanagement.
3. **#45765** (P2): Nested `.openclaw` directory created when `OPENCLAW_HOME=~/.openclaw` → **regression**, configuration path handling broken.
4. **#45269** (P2): `apply_patch` treated as unknown tool in agent policy → **regression**, blocks agent-routed runs.

Fix PRs exist for some (#51871, #45765), but moonshot-specific crash requires provider-level debugging.

---

### 6. **Feature Requests & Roadmap Signals**  
High-priority feature requests suggesting upcoming capabilities:

- **#42475**: Per-agent cost budget enforcement at gateway level — indicates monetization or operational safety focus.
- **#45608**: Pre-reset memory flush before `/new`/`reset` — aligns with compaction hygiene initiatives.
- **#43260**: Per-skill model routing via `model` field in `SKILL.md` — signals finer-grained resource allocation.
- **#50093**: WhatsApp backfill after reconnection — reflects growing reliance on real-time messaging reliability.

These suggest next release may emphasize observability, cost control, and channel-specific robustness.

---

### 7. **User Feedback Summary**  
Users report frustration with:
- **Silent data loss** in cron sessions (#40001, #50248) and message delivery (#44905 Discord tool traces leaked).
- **Memory management chaos** across team members (#43747), indicating poor isolation or sync mechanisms.
- **Regression fatigue**: Many P2/P1 bugs labeled "regression," signaling erosion of baseline stability post-upgrade.

Positive signals include appreciation for Telegram guest mode (#83632) and Web Push fixes (#83317), showing responsiveness to communication UX.

---

### 8. **Backlog Watch**  
Long-standing high-impact items needing maintainer intervention:

- **#43367** (*Multi-agent orchestration*) — Open since March 11, 2026; affects core workflow reliability.
- **#45740** (*gh-issues prompt injection*) — Security-critical, unaddressed for >2 months.
- **#50090** (*ClawHub ecosystem*) — Visionary but stalled; needs concrete roadmap or RFC response.

Maintainers should prioritize these to prevent contributor attrition and security debt accumulation.

--- 

*Data sources: [openclaw/openclaw](https://github.com/openclaw/openclaw)*

---

## Cross-Ecosystem Comparison

**Cross-Project Comparison Report: Personal AI Agent Open Source Ecosystem – May 19, 2026**

---

### **1. Ecosystem Overview**  
The personal AI assistant open-source landscape is highly fragmented but rapidly converging around core themes: multi-provider LLM orchestration, agent memory systems, cross-platform channel integrations, and enterprise-grade reliability. Projects are bifurcating along specialization axes—some prioritize developer tooling (OpenClaw, CoPaw), others focus on embedded or edge deployment (TinyClaw, PicoClaw), while a growing cohort emphasizes production observability and security (IronClaw, ZeroClaw). Despite architectural diversity, all face shared pressures around session state management, cost control, and sandboxed skill execution. The ecosystem remains dominated by Chinese-language platforms (NanoBot, PicoClaw) alongside global leaders (OpenClaw, Hermes Agent), reflecting both regional adoption patterns and distinct technical philosophies.

---

### **2. Activity Comparison**  

| Project         | Issues (24h) | PRs (24h) | New Release     | Health Indicator                     |
|-----------------|--------------|-----------|------------------|---------------------------------------|
| **OpenClaw**    | 500          | 500       | v2026.5.19-beta.1| High activity; strong maintainer throughput but backlog-heavy |
| **NanoBot**     | 7            | 21        | None             | Steady maintenance + provider expansion |
| **Hermes Agent**| 50           | 50        | None             | Stable iteration; authentication focus |
| **PicoClaw**    | 8            | 26        | Nightly only     | Rapid nightly cadence; memory system emphasis |
| **NanoClaw**    | 4            | 36        | v2.0.64          | High velocity; messaging reliability gains |
| **NullClaw**    | 1            | 1*        | None             | Focused fixes; cross-platform networking |
| **IronClaw**    | 36           | 48        | None             | Reborn migration; crates.io publishing block |
| **LobsterAI**   | 0            | 18        | v2026.5.18       | Polish-focused; UX refinements |
| **Moltis**      | 8            | 8         | 20260518.01      | Bug-fix driven; plugin stability |
| **CoPaw**       | 31           | 22        | v1.1.8-beta.1    | High engagement; contributor-driven |
| **ZeroClaw**    | 26           | 50        | None             | Enterprise reliability; skills ecosystem |

\* *One draft fix under review*

Health scoring based on release frequency, bug resolution speed, issue triage efficiency, and security responsiveness.

---

### **3. OpenClaw's Position**  
OpenClaw stands as the de facto reference implementation in this ecosystem, distinguished by its aggressive release cadence (five versions today alone), comprehensive Node.js SDK, and explicit governance around agent behavior standards. It leads in community scale—evidenced by 500 daily updates—and maintains strong maintainer throughput despite a large backlog. Its technical approach emphasizes declarative agent policies, bounded refactoring guidelines, and Docker-first deployment, appealing to teams requiring production-grade composability. While smaller projects like NanoBot and PicoClaw offer more niche integrations (e.g., WeChat, SiliconFlow), OpenClaw’s API surface and documentation breadth make it the default choice for complex agent workflows. However, its rapid iteration can introduce regression fatigue, as seen in recent session-state bugs.

---

### **4. Shared Technical Focus Areas**  

Several high-level requirements are emerging across multiple projects:

- **Provider Abstraction & Multi-Modal Support**: NanoBot (Gemini/MiniMax image gen), PicoClaw (SiliconFlow), ZeroClaw (custom endpoint model listing), and CoPaw (ChatGPT-5.5 demand) all stress the need for standardized provider interfaces beyond OpenAI compatibility.
- **Memory & Context Management**: PicoClaw’s Seahorse system, NullClaw’s FTS5 recall opt-in request (#919), and LobsterAI’s compaction roadmap reflect universal demands for controllable context depth and cost-aware summarization.
- **Channel-Specific Reliability**: WhatsApp group message desync (NanoClaw #2535), Telegram thread misrouting (Hermes #28153), and WeChat login failures (NanoBot #3863) highlight fragile protocol adapters requiring deeper platform-specific hardening.
- **Security & Sandboxing**: Prompt injection risks (OpenClaw #45740), RCE vulnerabilities (CoPaw #4470), and credential brokering safety (IronClaw #3068) drive cross-project interest in input sanitization and runtime isolation.
- **Observability & Diagnostics**: Widespread frustration with “silent failures” has spurred requests for `doctor` commands (Hermes #28223), live config reloading (IronClaw #3762), and usage aggregation (CoPaw #4476).

These needs signal maturation beyond basic agent scripting toward operational AI systems.

---

### **5. Differentiation Analysis**  

| Project       | Feature Focus                          | Target Users                  | Architecture Notes                     |
|---------------|----------------------------------------|-------------------------------|----------------------------------------|
| **OpenClaw**  | General-purpose agent orchestration    | Teams, devs building agents   | Node.js, Docker-native, policy-based   |
| **NanoBot**   | Multimodal + CLI-first                 | Researchers, local users      | Python, WebUI, heavy provider support  |
| **Hermes**    | Cross-platform CLI/runtime modularity  | Power users, sysadmins        | Modular gateway, OAuth-heavy           |
| **PicoClaw**  | Edge/embedded cognition                | Embedded devs, hobbyists      | Memory-centric, low-overhead           |
| **NanoClaw**  | Messaging swarm coordination           | Chatbot operators             | XMPP/JID-based, ACP bridge support     |
| **IronClaw**  | Production agent frameworks (Rust)     | SaaS builders, infra teams    | Reborn architecture, crate separation  |
| **CoPaw**     | Contributor-friendly plugin ecosystem  | Community developers          | TypeScript, skill marketplace          |
| **ZeroClaw**  | Enterprise automation + skills hub     | Ops/security-conscious orgs   | Skills registry, cron reliability      |

Notably, most projects converge on supporting major messaging channels (Telegram, WhatsApp, Discord, WeChat), while diverging sharply on language (Node.js vs Python vs Rust vs Zig) and deployment model (desktop app vs CLI vs container).

---

### **6. Community Momentum & Maturity**  

- **Rapid Iteration Tier**: OpenClaw, CoPaw, ZeroClaw exhibit explosive PR volumes (>40/day) with beta releases nearly daily—signaling active development but potential instability.
- **Stabilizing Tier**: Hermes Agent, IronClaw, Moltis show steady, quality-focused progress with fewer regressions, suggesting transition toward mature APIs.
- **Niche Specialization**: TinyClaw (inactive), PicoClaw (edge focus), NullClaw (cross-platform networking) operate in narrower domains with slower but precise evolution.
- **Contributor Engagement**: CoPaw’s #2291 call for contributors and OpenClaw’s ClawHub vision reveal awareness of sustainability challenges; only ZeroClaw and IronClaw have formal governance signals.

Overall, the ecosystem is moving from experimental prototypes to operational tooling, though fragmentation persists in language, deployment target, and use case.

---

### **7. Trend Signals**  

From aggregated community feedback, three macro-trends emerge:

1. **Cost-Aware Agent Design**: Per-message effort routing (NanoClaw #2406), budget enforcement (OpenClaw #42475), and small-LLM tool filtering (Moltis #1011) indicate a shift toward economical, adaptive reasoning rather than monolithic LLM calls.

2. **User Sovereignty Over Context**: Opt-out memory recall (NullClaw #919), compaction controls (LobsterAI #752), and per-agent memory hygiene (OpenClaw #45608) reflect growing privacy and performance expectations around long-term interaction.

3. **Enterprise Integration Readiness**: Cron consistency (ZeroClaw #6632), credential injection safety (IronClaw #3068), and audit trails (OpenClaw #43367) suggest commercial users are pushing open-source agents toward production compliance.

For AI agent developers, this means prioritizing modularity, transparent resource usage, and secure defaults. Projects that address these dimensions—like IronClaw’s Reborn or ZeroClaw’s skills registry—are best positioned to capture institutional adoption.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – May 19, 2026**

---

### **Today's Overview**  
The NanoBot project shows strong development momentum with 21 pull requests updated in the last 24 hours and 7 issues actively discussed. The activity is concentrated around infrastructure improvements (e.g., WebUI bootstrap configuration), provider integrations, and agent execution stability. No new releases were published today, but multiple merged PRs indicate active progress toward v0.16 or internal milestones. Overall, the project maintains a healthy pace of maintenance, feature expansion, and user-requested enhancements.

---

### **Releases**  
No new releases published in the last 24 hours.

---

### **Project Progress**  
**Merged/Closed PRs Today (10):**
- **#3886**: Added Gemini image generation support (`GeminiImageGenerationClient`) for both Imagen 4 and Gemini Flash models ([link](https://github.com/HKUDS/nanobot/pull/3886))
- **#3879**: Integrated MiniMax as an official image generation provider with aspect ratio validation and reference image support ([link](https://github.com/HKUDS/nanobot/pull/3879))
- **#3890**: Reintroduced Model Preset wizard CLI onboarding flow with cache and CRUD handling ([link](https://github.com/HKUDS/nanobot/pull/3890))
- **#3889**: Fixed Markdown rendering to preserve single newlines via `remark-breaks` plugin in WebUI ([link](https://github.com/HKUDS/nanobot/pull/3889))
- **#3883**: Closed as invalid; model config CLI commands deemed redundant or premature ([link](https://github.com/HKUDS/nanobot/pull/3883))

Additional closed PRs include refactoring AgentRunner.run() (#3892) and Docker docs fixes (#3875). These reflect ongoing efforts in code clarity, documentation accuracy, and user experience polish.

---

### **Community Hot Topics**  
While most recent Issues and PRs have zero reactions, **Issue #3863** ("微信不能Login") stands out due to its practical impact on Chinese users relying on WeChat login functionality. The bug—where QR code scanning fails with a version compatibility error despite using the latest WeChat client—has garnered 5 comments without resolution, signaling urgency around WeChat integration reliability. Similarly, **PR #3893** introduces a modular Image Generation Provider registry, addressing technical debt in image handling and fixing silent drops in streamed responses—critical for multimodal workflows. Both items highlight demand for better localization support and robust provider abstraction.

---

### **Bugs & Stability**  
**Top Bug Reports:**
1. **#3863** – WeChat login failure due to version mismatch (severity: high; affects core channel authentication)  
   *Fix status:* No fix PR yet.
2. **#3901** – X API cron job setup loops indefinitely, hitting tool call limits (severity: medium; impacts automation reliability)  
   *Fix status:* Open investigation.
3. **#3885** – Dream system job registered even when disabled via config (severity: low-mid; UX inconsistency)  
   *Fix status:* Feature request pending implementation.

All bugs are currently open with minimal engagement beyond reporting. Maintainers should prioritize #3863 given its real-world usability blockage.

---

### **Feature Requests & Roadmap Signals**  
User requests point toward enhanced control and extensibility:
- **Global toggle for Dream jobs** (#3885) suggests desire for granular lifecycle management.
- **Dangerous command authorization mechanism** (#3887) indicates need for safer sandbox escalation paths.
- **Skill persistence across turns** (#3847) reflects growing use of long-term agent memory.

These align with upcoming roadmap themes: improved agent autonomy, security configurability, and persistent cognitive state—likely to be addressed in v0.16 or later.

---

### **User Feedback Summary**  
Real pain points center on **deployment complexity** (Docker/WebUI access issues), **provider fragmentation**, and **lack of fine-grained control over background processes**. Users express frustration with hardcoded behaviors (e.g., localhost-only bootstrap) and undocumented edge cases in multi-agent environments. Positive feedback surrounds new provider support (Ant Ling, Qiniu, MiniMax) and CLI enhancements, indicating satisfaction with proactive ecosystem expansion.

---

### **Backlog Watch**  
- **Issue #3873** (Docker docs inconsistencies): Closed today after PR #3875 resolved it—good catch-up.
- **PR #3621** (HF Spaces multi-agent squad): Still open since May 4; needs review for production readiness.
- **PR #3568** (Manifest LLM router): Open since Apr 30; awaits integration testing and documentation.

Maintainers should allocate time to assess scalability claims in #3621 and validate gateway provider patterns in #3568 before end-of-month milestone planning.

--- 

*Data sources: GitHub API snapshots from HKUDS/nanobot (as of 2026-05-19)*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest — May 19, 2026**

**1. Today’s Overview**  
The Hermes Agent project remains highly active, with 50 issues and 50 pull requests updated in the last 24 hours, reflecting sustained community engagement and rapid iteration. No new releases were published today, but development momentum is strong across CLI, agent runtime, gateway, and platform integrations. The volume of bug reports—particularly around authentication, provider fallbacks, and session management—suggests ongoing complexity in multi-provider and cross-platform deployment scenarios.

**2. Releases**  
No new releases were published today. The latest stable version remains v0.14.0 (released May 16, 2026).

**3. Project Progress**  
Today saw 6 closed issues and 6 merged PRs. Key advancements include:
- Fixing a critical NameError in `conversation_loop.py` (#28268) that caused crashes during rate-limit recovery.
- Resolving UI layering bugs in the web dashboard modal rendering (#28267).
- Improving OAuth reliability for xAI Grok token refresh cycles (#28250).
- Enhancing computer-use tool error surfacing to prevent silent misrouting (#24324).
These fixes address stability gaps in core agent workflows and user-facing interfaces.

**4. Community Hot Topics**  
Top-discussed items reflect growing demand for robust multi-agent interoperability and developer tooling:
- **Agent Migration System** (#524): Users strongly desire automatic import of settings from Claude Code, Cursor, Aider, etc., indicating a need for smoother onboarding and ecosystem portability.
- **Google Gemini CLI 429 despite quota availability** (#15895): High comment count (13) reveals frustration over opaque quota validation between local CLI auth and Hermes’ internal routing logic.
- **Kanban worker zombie state after SIGTERM** (#28181): Real-time operational concern about graceful shutdown in managed environments like systemd or Kubernetes.

**5. Bugs & Stability**  
Critical bugs reported today include:
1. **xAI Grok OAuth tokens expiring within ~24h**, breaking auxiliary title generation (#28250) – *P3, fix PR pending*.
2. **Anthropic streaming incorrectly rebuilding OpenAI client**, causing 15-minute hangs (#28161) – *P1, open*.
3. **Vision fallback chain silently broken due to kwarg mismatch** (#27555) – *P1, fix PR exists* (#28268-related refactor).
4. **Telegram group thread ID misrouting human-handoff replies** (#28153) – *P1, under investigation*.
All high-severity bugs have corresponding fix attempts; several are awaiting review.

**6. Feature Requests & Roadmap Signals**  
User-submitted features point toward next-phase priorities:
- **`hermes doctor` command** (#28223): Explicit call for diagnostics tooling due to widespread “silent failure” frustrations.
- **In-run quality gates for cron/agent tasks** (#28056): Signals move toward structured task validation and retry bounds in autonomous workflows.
- **Giphy-multi skill** (#28264): Shows expansion into rich media and cross-platform reaction capabilities.
These suggest upcoming emphasis on observability, reliability hardening, and multimodal interaction enhancements.

**7. User Feedback Summary**  
Users report significant pain points around:
- **Authentication fragility**: OAuth flows failing unexpectedly (Gemini, xAI), credential picker showing stale entries (#28140), Bedrock IAM confusion (#28156).
- **Platform-specific quirks**: WhatsApp requiring explicit no-reply support (#28208), WeChat STT garbling non-Chinese languages (#27300), Discord approval prompts needing requester mention (#21528).
- **Tool reliability**: Computer-use toolset showing 5 macOS-specific bugs (#24170), vision fallbacks not triggering on 503s (#25822).
Satisfaction is mixed: users praise modularity and platform reach but express frustration over inconsistent behavior across providers and platforms.

**8. Backlog Watch**  
Several long-standing items require maintainer attention:
- **Agent Migration System** (#524): Created March 6, 2026; still open with 4 comments and 👍 support—clear user need for seamless transition from other agents.
- **Infinite retry loop on local LLM prefill timeout** (#7069): Open since April 10; upvoted twice—critical for self-hosted deployments.
- **Command injection via `shell=True`** (#16560): Security issue raised April 27; low activity may indicate neglect despite P2 severity.
Maintainers should prioritize these to reduce churn and improve first-time experience.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – May 19, 2026**

---

### 1. Today’s Overview  
PicoClaw remains highly active with **26 pull requests** and **8 issues** updated in the past 24 hours, indicating strong development momentum. The project released a new **nightly build (v0.2.8-nightly.20260518)** featuring upstream `main` changes, though stability warnings apply. A significant focus is on improving agent memory systems (Seahorse), provider compatibility, and channel integrations. Overall activity suggests healthy community engagement and rapid iteration.

---

### 2. Releases  
- **Nightly Build**: `v0.2.8-nightly.20260518.0df050ff`  
  This automated nightly includes all commits from `main` since the last stable tag (`v0.2.8`). It may contain unstable or experimental features—use with caution.  
  Full changelog: [GitHub Compare](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

*No stable releases or breaking changes reported today.*

---

### 3. Project Progress  
**Merged/Closed PRs (today):**
- **#2885** – Added native SiliconFlow provider support (closed)  
- **#2886** – Enhanced chat UI with reasoning/tool visibility selector (closed)  
- **#2882** – Independent code block copy/collapse controls for web chat (closed)  

These advances improve multi-provider compatibility, user experience clarity, and code readability in the frontend.

---

### 4. Community Hot Topics  
- **Issue #1919** ([Seahorse Memory System](https://github.com/sipeed/picoclaw/issues/1919)) – Biologically-inspired memory architecture for AI agents, inspired by hippocampal function. Despite being closed, it generated 11 comments and represents a strategic long-term vision for intelligent context management.  
- **PR #2895** ([Fix Seahorse Budget Overflow](https://github.com/sipeed/picoclaw/pull/2895)) – Direct response to #2894, addressing critical budget enforcement bypass. High relevance due to impact on model reliability.  

Both reflect deep investment in agent cognition and context-awareness—core differentiators for PicoClaw.

---

### 5. Bugs & Stability  
**Critical Issues:**
1. **#2894** – *Seahorse Assembler*: FreshTail messages bypass token budget limits, causing `400 BadRequestError`. **Fix in PR #2895** (merged same day).  
2. **#2887** – .deb package on RISC-V fails with OpenAI models due to missing compiler/runtime support. No fix yet.  
3. **#2674** – Codex OAuth returns empty responses via ChatGPT backend; affects streaming integrity. Stale but unresolved.  

Severity ranked by system impact: memory budget overflow > platform-specific breakage > streaming edge case.

---

### 6. Feature Requests & Roadmap Signals  
Top signals:
- **Native provider support** (SiliconFlow, per-request MCP headers) → indicates expansion beyond OpenAI compatibility.
- **Telegram Business/Guest modes** (PRs #2845, #2849) → enterprise and public deployment use cases.
- **Steering-heavy turn rendering** (Issue #2843 + PR #2844) → refined agent interaction fidelity.
- **Factory reset functionality** (PR #2891) → config resilience for production users.

Predicted inclusion in next release: **SiliconFlow provider**, **ChatStream enhancements**, and **Seahorse budget fixes**.

---

### 7. User Feedback Summary  
- **Pain Points**:  
  - Incomplete conversation history display (#2796) frustrates debugging multi-turn dialogues.  
  - Platform-specific binaries (e.g., RISC-V .deb) lack full model support.  
  - Configuring image tools via `config.json` is non-intuitive (#2878).  
- **Satisfaction Drivers**:  
  - Rapid response to critical bugs like Seahorse budget leak.  
  - Clear progress on complex features like memory systems and streaming.  
  - Active localization and UI polish efforts (e.g., independent code blocks).

---

### 8. Backlog Watch  
- **Issue #2843** ([same-agent final render](https://github.com/sipeed/picoclaw/issues/2843)): Over 8 days old; related PR #2844 submitted but still open. Requires review for steering-chain optimization.  
- **Issue #2796** ([incomplete message history](https://github.com/sipeed/picoclaw/issues/2796)): Chinese-language UX bug; stale flag set but needs localization-aware fix.  
- **PR #2551** ([channel decoupling](https://github.com/sipeed/picoclaw/pull/2551)): Refactoring for multi-instance provider support; pending integration after recent channel updates.

These items demand maintainer attention to prevent technical debt accumulation.

--- 

*Data compiled from GitHub activity as of 2026-05-19.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – May 19, 2026**

**1. Today's Overview**  
NanoClaw shows strong development momentum with 36 PR updates and one release in the last 24 hours, indicating active maintenance and feature expansion. The project remains highly responsive to both bug fixes and security improvements, as evidenced by multiple low-level infrastructure changes targeting webhook configuration, container validation, and cryptographic randomness. Issue activity is moderate (4 total), with one newly closed item suggesting efficient triage, though SSL certificate warnings persist. Overall, the project demonstrates healthy contributor engagement and rapid iteration velocity.

**2. Releases**  
A new release was published today: **v2.0.64**.  
Key change: Approved destination additions/removals now propagate immediately to receiving agents instead of silently failing at `send_message`. This resolves a critical messaging reliability gap where newly added destinations were not reflected in the receiver’s session state, causing delivery failures under approval workflows. No breaking changes or migration steps noted.

**3. Project Progress**  
Today saw significant progress on stability and security:  
- **PR #2547** (closed): Webhook server now defaults to binding on loopback (`127.0.0.1`) for enhanced security, reducing accidental LAN exposure unless explicitly overridden via `WEBHOOK_BIND=0.0.0.0`.  
- **PR #867** (closed): Scheduled-task agents can now send messages back to their task output JIDs, enabling better swarm coordination patterns.  
- **PR #2375** (closed): Excludes per-thread sessions from agent-shared channel lookups, preventing misrouting of messages in hybrid GitHub/chat environments.  
These merges reflect ongoing efforts to refine session lifecycle management and cross-channel message routing.

**4. Community Hot Topics**  
No single issue or PR dominates comment volume today—all recent items have zero comments or reactions—but two open issues signal emerging user needs:  
- **Issue #1984** requests provider support for custom OpenAI-compatible endpoints (e.g., Codex, OpenCode), highlighting demand for extensibility beyond built-in providers. Though stale (created Apr 24), it reflects a recurring theme in NanoClaw’s skill ecosystem.  
- **Issue #1503** alerts to an invalid SSL certificate on nanoclaw.dev, which has 19 comments but no resolution. This risks user trust and documentation access; maintainers should prioritize fixing soon.  

**5. Bugs & Stability**  
Two high-severity bugs reported today:  
- **#2535 (OPEN)**: WhatsApp group messages appear as “Waiting for this message” due to LID encryption desync, blocking bot functionality in groups. Likely requires protocol-level fix in WhatsApp adapter. No fix PR yet.  
- **#2533 (CLOSED)**: Stale `container_status` persisted after deploy/restart—now resolved via session reconciliation logic. Demonstrates effective bug response.  

Both are operationally critical; #2535 urgently needs attention given WhatsApp’s growing adoption.

**6. Feature Requests & Roadmap Signals**  
Several PRs suggest upcoming capabilities:  
- **ACP Client Protocol integration** (#2542): Enables external AI agents via JSON-RPC 2.0, opening interoperability with non-native models.  
- **Per-message reasoning-effort routing** (#2406): Allows dynamic effort allocation per message type (e.g., lightweight replies vs. complex synthesis), improving cost-efficiency.  
- **Telegram reaction/callback support** (#2544): Expands interactive UX on Telegram channels.  
These align with trends toward modular agent orchestration and fine-grained resource control.

**7. User Feedback Summary**  
Users express frustration over:  
- Silent destination failures during approval flows (now fixed in v2.0.64).  
- Inconsistent timestamp formatting in databases (#1845 addressed).  
- Hardcoded ports causing deployment conflicts (#2435 resolved).  
Positive signals include appreciation for security hardening (CSPRNG adoption in #2545) and configurability improvements. WhatsApp group usability remains a pain point requiring urgent resolution.

**8. Backlog Watch**  
- **Issue #1503** (SSL cert): High visibility, low resolution—maintainers must act within days to avoid reputational risk.  
- **Issue #1984** (custom providers): Long-standing request; consider prioritizing if community interest grows.  
- **PR #2497** (agent network): Large feature PR from May 15 with no recent updates—monitor for stalled development.  

Overall, NanoClaw exhibits robust engineering discipline with rapid bug resolution and proactive security hardening. Strategic focus should shift toward resolving lingering community-reported blockers like WhatsApp group support and SSL infrastructure.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest – May 19, 2026**

### 1. Today's Overview  
The NullClaw project shows modest but focused activity today with one new issue and one open PR addressing critical platform-specific and performance concerns. No releases were published, indicating the team is likely in active development or stabilization phases rather than shipping features. Overall project health appears stable, with maintainers engaging directly on technical roadblocks—particularly around cross-platform networking and memory management efficiency.

---

### 2. Releases  
No new releases were made today.

---

### 3. Project Progress  
No pull requests were merged or closed today; all recent contributions remain under review or discussion.

---

### 4. Community Hot Topics  
**Issue #919**: *Feature: Allow disabling automatic memory recall (FTS5) per-message*  
This issue highlights a growing demand for user-configurable behavior in message enrichment workflows. Users are frustrated by the non-discretionary application of full-text search (FTS5) + BM25 recall on every incoming message, which consumes resources and may not align with privacy or performance preferences. The hardcoded parameters (`DEFAULT_RECALL_LIMIT`, `MAX_CONTEXT_BYTES`, etc.) limit flexibility for lightweight or ephemeral chat contexts. This reflects an emerging need for granular control over AI assistant context management—a key pain point as agents handle longer conversations or sensitive topics.  
🔗 [GitHub Issue #919](https://github.com/nullclaw/nullclaw/issues/919)

---

### 5. Bugs & Stability  
**PR #920**: *fix(net): fix Windows DNS resolution for non-localhost hostnames*  
A confirmed bug affecting Windows users attempting to connect to remote providers has been identified and partially addressed in a draft fix. The root cause was an unconditional failure in `net.zig`’s `getAddressList()` function for any hostname other than localhost, returning `UnknownHostName` and triggering `error.HostResolutionFailed`. This represents a **high-severity regression** for Windows deployments relying on external endpoints. A fix is under review but not yet merged, so the issue remains unresolved for affected users.  
🔗 [GitHub PR #920](https://github.com/nullclaw/nullclaw/pull/920)

---

### 6. Feature Requests & Roadmap Signals  
The request to make FTS5-based memory recall **opt-in per message** signals strong user desire for:  
- Configurable context depth  
- Resource usage transparency  
- Privacy-first defaults  
While not explicitly tagged as roadmap items, such customization aligns with broader trends in personal AI assistants toward user sovereignty over data retention and computational overhead. Given its specificity and clear implementation path (likely via runtime flags or config overrides), this feature may surface in the next minor release if prioritized.

---

### 7. User Feedback Summary  
Users express dissatisfaction with **uncontrolled background processing**, particularly when memory recall runs automatically without user awareness or consent. Use cases involving short-lived interactions, private conversations, or low-end devices highlight the need for opt-out mechanisms. Conversely, contributors like @chenhlSH demonstrate active troubleshooting engagement, reinforcing community-driven maintenance culture. The absence of reactions (👍0) on both today’s items suggests either recent posting or niche impact—but the underlying issues affect core functionality across platforms.

---

### 8. Backlog Watch  
No long-unanswered issues or stalled PRs are flagged for immediate attention today. However, **PR #920**—if it remains unmerged beyond a week—could escalate due to its impact on Windows users, especially if no alternative workaround exists. Similarly, **Issue #919** merits prompt consideration given its alignment with evolving expectations for customizable agent behavior. Both require maintainer input to prevent stagnation in critical areas of usability and cross-platform compatibility.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – May 19, 2026**

**1. Today's Overview**  
IronClaw shows high development velocity with 36 active issues and 48 PR updates in the last 24 hours—indicating sustained engineering momentum centered on the Reborn architecture migration. The project continues to prioritize production readiness for Reborn, evidenced by a cluster of test infrastructure, composition factory, and credential injection enhancements. No new releases were published today, but internal crate version bumps (e.g., `ironclaw_common: 0.4.2 → 0.5.0`) suggest ongoing API evolution. Overall activity reflects focused progress toward feature parity and safety guarantees ahead of Reborn cutover.

**2. Releases**  
No new public releases deployed to crates.io or GitHub tags as of May 19, 2026. The latest published release remains `ironclaw-v0.27.0` (April 29), while downstream dependencies continue to pin to `0.24.0` due to unresolved CVE-related constraints (Issue #3259).

**3. Project Progress**  
- **PR #3721**: Merged critical personal context policy gating for Reborn run profiles, restricting access to identity files like `USER.md` based on explicit authorization—advancing secure multi-tenancy.
- **PR #3739**: Extracted embedding providers into a dedicated `ironclaw_embeddings` crate, decoupling concerns and enabling cleaner dependency management.
- **PR #3708**: Released `ironclaw_common` v0.5.0 with breaking changes to enum representations; requires downstream consumers to update discriminant handling.

These advances signal stabilization of core abstractions around identity, embeddings, and workflow durability.

**4. Community Hot Topics**  
Top-engagement items center on **Reborn testability** and **credential injection safety**:
- **#3692** (6 comments): Proposal to gate personal identity context via policy rules, preserving stable prompt surfaces while enabling fine-grained access control—core to Reborn’s security model.
- **#3259** (5 comments): Persistent demand to publish newer versions (0.25.0–0.27.0) to crates.io, blocking downstream adoption due to wasmtime CVE workarounds.
- **#3068** (1 comment, high-risk label): Non-negotiable blocker requiring backward-compatible credential brokering preservation during Reborn migration—underscores V1-to-V2 compatibility as a hard constraint.

Underlying need: Users seek predictable upgrade paths and audit-compliant secret handling as Reborn approaches production deployment.

**5. Bugs & Stability**  
Three notable bugs surfaced today, all related to embedding provider configuration edge cases:
- **#3751**: Unknown embedding provider names silently route to OpenAI—potentially causing unexpected costs or failures.
- **#3754**: Double `/v1/` endpoint construction when `EMBEDDING_BASE_URL` already ends with `/v1`—leads to 404 errors.
- **#3753**: Bedrock embeddings incorrectly fall back to `OPENAI_API_KEY` validation, masking missing AWS credentials.

Fixes likely tied to **PR #3739**, which refactored embedding logic. No dedicated bugfix PRs opened yet, but these will be addressed in the upcoming extraction wave.

**6. Feature Requests & Roadmap Signals**  
User-requested features emphasize operational flexibility:
- **#3763** (P2): Per-user tool enable/disable UI controls—critical for SaaS deployments needing tenant-level tool scoping.
- **#3762** (P1): Live update of `AGENTS.md` system prompts without restart—high UX friction point currently requiring config reload.

Both signals align with Reborn’s goal of dynamic, user-managed agent personalities. Likely candidates for next minor release (v0.28.x).

**7. User Feedback Summary**  
Pain points revolve around **embeddings misconfiguration** and **lack of granular tool governance**. Real-world usage reveals:
- Operators struggle with opaque error messages when Bedrock/OpenAI keys are mismatched.
- WebUI users expect immediate feedback when editing identity files—current lag undermines trust in agent behavior consistency.
Satisfaction is mixed: Core developers praise Reborn’s modularity gains, but SaaS integrators express concern over lack of per-tenant tool policies.

**8. Backlog Watch**  
- **#3259**: Stalled since May 5; needs maintainer intervention to unpublish old versions or coordinate with RustSec triage. Blocks ecosystem growth.
- **#3068**: Longstanding cutover blocker; requires architectural decision documentation to avoid regression during Reborn rollout.
- **#3607** (WebUI Beta tracker): Overdue for milestone review; WebChat v2 beta path risks delay if auth/security audit (#3615) isn’t prioritized.

Maintainers should allocate bandwidth to resolve crates.io publishing and finalize credential injection contracts before Q3 cutover planning.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – May 19, 2026**

---

### 1. **Today's Overview**  
The LobsterAI project remains highly active with strong development momentum as of May 18–19, 2026. A total of 18 pull requests were updated in the last 24 hours—12 merged and 6 still open—indicating focused feature refinement and stabilization efforts. One new release (v2026.5.18) was published, bundling UI improvements, model configuration enhancements, and infrastructure upgrades. No issues were opened or closed recently, suggesting a stable operational phase. The activity reflects a mature team prioritizing polish, performance optimizations, and user-facing usability.

---

### 2. **Releases**  
A new minor release was launched on **May 18, 2026**:  
**LobsterAI v2026.5.18**  
Key changes include:  
- Addition of **per-model context window sliders** in model settings (nonlinear scale up to 2M tokens) (#2001)  
- Refactored Settings UI into modular components for better maintainability (#2004)  
- Fix for non-ASCII MCP server name handling in OpenClaw compatibility layer (#2006)  
- UI consistency fixes (e.g., restoring theme-aware backgrounds, standardizing toggle switches) (#2005, #2007)  
- Markdown preview local asset path resolution improvement (#2002)  
- Dependency updates: `electron` → v42.1.0 and `moltbot-popo` plugin upgraded to v2.1.8 (#1277, #2003)  

No breaking changes reported; all modifications are backward-compatible enhancements.

---

### 3. **Project Progress**  
**Merged/Closed PRs Today:**  
- **[#2010]** Release consolidation for v2026.5.18  
- **[#2009]** Cron UI update (chore)  
- **[#2008]** Icon refresh (chore)  
- **[#2007]** Restore correct background color on new-task page  
- **[#2006]** Fix OpenClaw MCP server name sanitization for non-ASCII names  
- **[#2005]** Replace text toggles with standardized switch component for DREAMING setting  
- **[#2004]** Extract ModelSettings into dedicated React component + utils  
- **[#2003]** Upgrade moltbot-popo plugin to v2.1.8  
- **[#2001]** Add per-model context window slider (main feature of this cycle)  
- **[#2002]** Fix relative image paths in Markdown previews  
- **[#2000]** Anthropic format compatibility fix for mimo model  

These advances strengthen core UX, improve developer ergonomics, and enhance cross-platform compatibility.

---

### 4. **Community Hot Topics**  
No issues have recent engagement. However, several **long-standing open PRs** show sustained interest:  
- **[#752](https://github.com/netease-youdao/LobsterAI/pull/752)**: Implementation of `/compact` command and auto-compaction for Cowork sessions (stale since Mar 24). Suggests demand for smarter conversation memory management.  
- **[#755](https://github.com/netease-youdao/LobsterAI/pull/755)**: Export chat history to Markdown/JSON (also stale since Mar 24). Indicates strong user desire for archival and sharing capabilities.  
Both reflect recurring needs around session lifecycle control and data portability.

---

### 5. **Bugs & Stability**  
No new bugs or regressions reported today. All resolved items were **UI/UX or compatibility fixes**, not critical crashes or data-loss issues. The release appears stable, with attention focused on refinement rather than crisis response.

---

### 6. **Feature Requests & Roadmap Signals**  
User-driven signals point toward:  
- **Conversation compaction** (/compact command + auto-mode): High-priority request evident from multiple contributors (#752, related to #811’s streaming perf work). Likely upcoming.  
- **Enhanced export functionality**: Multiple contributors working on Markdown/JSON export (#755), signaling roadmap inclusion.  
- **Per-model fine-tuning controls**: Context window sliders (#2001) suggest trend toward granular model configuration—possibly precursor to more advanced provider-specific settings.  

---

### 7. **User Feedback Summary**  
Positive feedback inferred from:  
- Appreciation for UI consistency (#2005, #2007)  
- Demand for better conversation management (compaction, export)  
- Satisfaction with improved OpenClaw integration (#2006)  
No negative sentiment detected in recent activity. Users appear engaged with iterative improvements rather than complaining about blockers.

---

### 8. **Backlog Watch**  
Two notable **stale PRs requiring maintainer attention**:  
- **[#748](https://github.com/netease-youdao/LobsterAI/pull/748)**: Refactor IM platform handlers into factory pattern (since Mar 24). Could reduce code duplication but risks merge conflicts.  
- **[#749](https://github.com/netease-youdao/LobsterAI/pull/749)**: Memoize cowork message components to prevent re-renders (since Mar 24). Performance-critical for long streams.  

Maintainers should prioritize reviewing these for potential merge or closure before they become stale artifacts.

--- 

*Data snapshot: May 18–19, 2026 | Source: GitHub API / NetEase Youdao LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – May 19, 2026**

**1. Today’s Overview**  
The Moltis open-source AI agent framework shows strong development momentum with 8 issues and 8 PRs updated in the past 24 hours, including one new release (20260518.01). The project maintains a steady pace of bug fixes, stability improvements, and minor feature enhancements, with all recent activity focused on refining core agent behavior, sandboxing, configuration handling, and LLM provider integration. Overall, the project appears healthy and responsive to user-reported problems.

**2. Releases**  
A new release was published today: **20260518.01**. While no explicit changelog is provided in the data, the release correlates with multiple targeted fixes for regressions introduced during recent refactoring. Given the context of closed issues around hook dispatch and config defaults, this appears to be a maintenance patch resolving critical stability concerns. Users should upgrade to benefit from resolved edge cases in agent lifecycle management and dangerous command scanning.

**3. Project Progress**  
Six pull requests were merged today, addressing key reliability gaps:
- Fix sandbox module path alignment (#1021)
- Prevent heredoc false positives in dangerous pattern detection (#1019)
- Restore `BeforeAgentStart` hook dispatch after April refactor (#1017)
- Honor payload modifications in `BeforeLLMCall` hooks (#1018)
- Parse `<thought>` reasoning tags for Gemma models (#1016)
- Preserve explicit Coqui TTS config defaults during startup (#1015)

These merges indicate active remediation of post-refactor instabilities and improved observability for plugin developers.

**4. Community Hot Topics**  
No issue or PR received comments or reactions today, suggesting either rapid resolution or limited discussion scope. However, Issue #1011—a feature request for per-turn tool filtering to enable drift-resistant routing with smaller LLMs—stands out as conceptually significant. It reflects growing demand for lightweight, adaptive agent orchestration, likely signaling future roadmap interest in cost-aware execution strategies.

**5. Bugs & Stability**  
Seven bugs were resolved today, all classified as low-to-moderate severity based on descriptions:
- Heartbeat loop bug when agents use `exec` during heartbeat turn (#858) – **fixed**
- Docker sandbox image prebuild failure due to outdated Go module path (#1020) – **fixed**
- Reasoning tag misinterpretation for Gemma-4-31b-it (<thought> vs <think>) (#1007) – **fixed**
- Dangerous-pattern false positive on heredoc content (#1014) – **fixed**
- `BeforeAgentStart` hook never firing post-refactor (#1012) – **fixed**
- `BeforeLLMCall` ModifyPayload ignored despite documentation claims (#1013) – **fixed**
- VoiceCoquiTtsConfig defaults stripped during auto-compact (#1006) – **fixed**

All have corresponding fix PRs merged within 24 hours, demonstrating effective triage and resolution workflow.

**6. Feature Requests & Roadmap Signals**  
One open feature request (#1011) proposes granular tool selection via `tool_choice` and `active_tools` per agent turn, aimed at improving reliability when using small LLMs that may hallucinate or misroute tools. This aligns with broader trends toward fine-grained control in autonomous systems. Though not slated for immediate implementation, it signals potential inclusion in a future iteration focused on agent resilience.

Additionally, two open PRs suggest memory system expansion:
- Nested subfolders and collection-aware writes in QMD backend (#1010)
- Proper child process cleanup in `run_with_timeout` (#1009)

These point toward planned enhancements in long-term memory organization and execution safety.

**7. User Feedback Summary**  
Real-world pain points center around:
- Configuration persistence (defaults vanishing unexpectedly)
- Incorrect parsing of advanced LLM output formats (e.g., Gemma reasoning blocks)
- Unreliable plugin event delivery after recent updates
- False-positive security scans blocking legitimate heredoc usage

Users express frustration with breaking behavioral changes masked as "improvements," especially around auto-compaction and hook semantics. Satisfaction is tied directly to maintainer responsiveness—rapid fixes for regressions appear to be restoring trust.

**8. Backlog Watch**  
No issues older than 30 days are visible among today’s updates. All recent reports received timely attention, indicating efficient backlog management. No PRs or issues require urgent maintainer escalation at this time.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – May 19, 2026**

---

### 1. Today's Overview  
The CoPaw project shows strong development momentum with **31 new issues** and **22 updated PRs** in the last 24 hours, indicating active community engagement and ongoing feature evolution. One beta release (v1.1.8-beta.1) was published today, focusing on plan-mode enhancements and browser tool fixes. The high volume of user-reported bugs—particularly around chat responsiveness, WeChat integration, and context management—suggests recent changes may have introduced instability despite rapid iteration.

---

### 2. Releases  

#### v1.1.8-beta.1  
- **Key Changes**:  
  - Strengthened plan reaffirmation logic from user messages (#4198)  
  - Fixed incomplete browser implementation snippet (partial commit shown)  
  - Version bump via automated chore (#4346)  
- **Notes**: This is a pre-release; no breaking changes documented. Users should test in non-production environments.

---

### 3. Project Progress  

**Merged/Closed PRs Today**:  
- **#4471**: Added built-in `html-video-demo` skill (EN + ZH) for interactive UI demos  
- **#4429**: Backup trust hardening follow-up for secure restore workflows  
- **#4487**: Replaced global LLM rate limiter with per-model instances to resolve chat hangs (#4469)  
- **#4488**: Fixed SSE connection leak in console chat during page navigation  
- **#4476**: Implemented per-model token usage aggregation for accurate billing/metrics  
- **#4479**: Updated model provider configuration (added Octoken, removed others)  

These advances address core stability, observability, and multi-provider support.

---

### 4. Community Hot Topics  

Top discussions reflect urgent needs for **contributor onboarding** and **multi-modal reliability**:  

- **#2291 (62 comments)**: Open call for contributors listing prioritized tasks (P0–P2). High engagement signals desire for structured contribution pathways.  
- **#4477 (7 comments)**: WeChat iLink cron failures due to expired `context_token` without retry logic. Points to fragile auth handling in scheduled tasks.  
- **#4474 (6 comments)**: Inquiry about ChatGPT-5.5 support suggests expanding third-party LLM compatibility is top user priority.  

Underlying themes: **improved contributor experience**, **robust channel integrations**, and **broader LLM vendor support**.

---

### 5. Bugs & Stability  

Critical regressions reported today:  

| Issue | Severity | Description | Fix Status |
|-------|----------|-------------|------------|
| #4469 (CLOSED) | High | Console chat hangs with "three dots" spinner; tied to LLM rate limiting | ✅ Fixed by #4487 (per-model ratelimiter) |
| #4477 (OPEN) | Medium-High | WeChat cron jobs fail silently when `context_token` expires | 🔄 No fix yet; requires auth refresh logic |
| #4448 (OPEN) | Medium | Context compaction fails due to missing markdown headers | ⚠️ Duplicate of #4447 (both open) |
| #4470 (OPEN) | Critical | Plugin interface has RCE vulnerability | ⚠️ Security concern—requires immediate review |

Note: The RCE flaw (#4470) demands urgent maintainer attention due to security implications.

---

### 6. Feature Requests & Roadmap Signals  

User-driven features gaining traction:  

- **Conversation Management**: Multiple requests (#4435–#4437) for deleting/editing individual chat turns and splitting sessions—indicating pain with long-context token bloat.  
- **CLI Modernization**: Proposal (#4472) to migrate from `click` to `typer` for better type hints and colored output.  
- **Desktop Packaging**: Interest (#4486) in Flatpak support for Linux distribution.  
- **Model Support**: Explicit ask (#4474) for ChatGPT-5.5 implies upcoming provider expansion.  

These suggest next release may prioritize UX refinement and extensibility.

---

### 7. User Feedback Summary  

**Pain Points**:  
- Frequent chat freezes ("thinking" loops without response) across channels (Console, Feishu, WeChat)  
- Inconsistent behavior with DeepSeek’s reasoning tokens (`<think>` blocks not rendering properly)  
- Poor error visibility in file/image sending (e.g., WeChat iLink)  

**Positive Signals**:  
- Appreciation for modular plugin system and skill ecosystem  
- Clear versioning and changelog transparency (e.g., v1.1.8-beta.1 notes)  

Overall sentiment leans toward **frustration with reliability**, but openness to new features if stability improves.

---

### 8. Backlog Watch  

Items requiring maintainer escalation:  

- **#4470 (RCE Vulnerability)**: Security-critical; needs triage within 48h.  
- **#2291 (Contribution Framework)**: Over 60 comments show community eagerness—delaying this risks contributor attrition.  
- **#4051 (DeepSeek Think Parsing)**: Long-standing issue (created May 6) still unresolved; affects key Chinese LLM users.  

Maintainers should prioritize these to sustain community trust and product safety.

--- 

*Data sources: [agentscope-ai/CoPaw GitHub](https://github.com/agentscope-ai/CoPaw)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026-05-19**

---

### **Today's Overview**  
ZeroClaw shows sustained development momentum with 26 issues and 50 PRs updated in the last 24 hours, indicating active maintenance and feature expansion. The project continues to prioritize stability, observability, and ecosystem integration—particularly around skills, providers, and cron tooling—while addressing several high-severity bugs affecting core workflows. No new releases were published today, but multiple critical fixes have been merged or are under review. Overall, the activity level reflects a mature, well-maintained open-source agent framework focused on enterprise-grade reliability.

---

### **Releases**  
No new releases were made on 2026-05-19.

---

### **Project Progress**  
**Merged/Closed PRs (today):**  
- [#6758](https://github.com/zeroclaw-labs/zeroclaw/pull/6758): Split MiniMax provider into Global and China variants for better regional routing.  
- [#6750](https://github.com/zeroclaw-labs/zeroclaw/pull/6750): Fixed Windows snapshot TTL issue causing excessive PowerShell calls during onboarding.  
- [#6749](https://github.com/zeroclaw-labs/zeroclaw/pull/6749): Expanded manual cross-platform build matrix coverage to align with release targets.  

These merges improve provider flexibility, reduce system overhead, and strengthen CI/CD consistency.

---

### **Community Hot Topics**  
The most engaged discussions center on **skills ecosystem UX**, **cron scheduler consistency**, and **provider reliability**:  
- **#6253** (Skills Support & UX Tracker): Coordinates improvements across CLI, sandbox, and authoring tools for v0.7.6; signals strong demand for better developer experience.  
- **#6632** (Cron Delivery Failure Handling): Highlights inconsistency between manual `cron_run` and scheduled jobs regarding error state reporting—users expect uniform behavior.  
- **#6756** (Custom Provider Model Listing): Reveals a mismatch between onboard success and `models list` failure for custom endpoints, undermining trust in configuration workflows.  

All three reflect growing complexity in multi-provider and scheduled-task use cases requiring clearer contracts.

---

### **Bugs & Stability**  
**High-Severity Issues:**  
1. **#6756** – Custom provider model listing fails despite successful onboard (S2: degraded behavior). *Root cause*: `doctor` path ignores stored API keys. Fix needed in config validation layer.  
2. **#6681** – `skills install clawhub:*` panics due to blocking HTTP calls in async context (S1: workflow blocked). *Fix underway* via #6684 (enforcing cooldown logic), but requires runtime isolation refactor.  
3. **#6724** – Channels supervisor crash-loops when all channels disabled (S2: degraded behavior). No fix yet; impacts dashboard users who misconfigure channels.  

Two of these involve **runtime orchestration flaws** that risk user frustration during onboarding and operational use.

---

### **Feature Requests & Roadmap Signals**  
Key requested capabilities point toward next version priorities:  
- **FreeBSD binary support** (#1924, now CLOSED) was recently prioritized—suggesting upcoming platform expansion.  
- **PDF ingestion tools** (#5745) and **smart home integrations** (#6464, #6470, #6471) signal strong interest in document processing and IoT automation.  
- **Agent capability flags** (#6729) and **ACP bridge persistence** (#6649) reflect security-conscious operators seeking fine-grained access control.  

These align with ZeroClaw’s evolution from general-purpose agent to domain-specific automation platform.

---

### **User Feedback Summary**  
Users report **frustration with inconsistent error handling** (e.g., CLI vs HTTP API responses in #6252) and **confusion around cron timezones** (#6739), indicating gaps in documentation and contract clarity. Positive feedback focuses on **new provider support** (GitHub Models, Morph) and **tool extensibility**, especially for smart home and productivity APIs. Pain points emphasize the need for **more transparent failure modes** and **better onboarding diagnostics**.

---

### **Backlog Watch**  
- **#6074** (Audit: Recover Lost Commits): High-risk issue about 153 commits lost in bulk revert—still unresolved after >2 months; poses historical integrity concerns.  
- **#6245** (Tavily Search Provider): Stub-only implementation since April; lacks maintainer attention despite clear TODO marker.  
- **#6751** (CI: PR Title Workflow Never Runs): Critical infrastructure bug introduced in May 2026; silently breaks PR hygiene checks.  

Maintainers should prioritize reviewing these to prevent technical debt accumulation.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*