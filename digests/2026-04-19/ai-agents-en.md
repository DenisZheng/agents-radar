# OpenClaw Ecosystem Digest 2026-04-19

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-19 00:25 UTC

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

**OpenClaw Project Digest – April 19, 2026**

**1. Today’s Overview**  
OpenClaw shows intense development activity with 500 issues and pull requests updated in the last 24 hours—indicating sustained community engagement and rapid iteration. No new releases were published today, but multiple high-impact fixes and enhancements are under review or recently merged. The project continues to prioritize stability, extensibility, and cross-platform channel support amid growing complexity in agent orchestration and multi-provider integrations.

**2. Releases**  
No new releases have been published as of 2026-04-19. The most recent version remains v2026.4.14, which introduced breaking changes around model configuration and onboarding workflows that require user action (e.g., re-running `openclaw onboard`).

**3. Project Progress**  
Among the merged/closed PRs today:
- **PR #68736**: Standardized memory-wiki schema and repaired pipeline, resolving 42 lint errors and 682 warnings.
- **PR #68724**: Preserved pinned dispatcher in BlueBubbles media fetches to prevent SSRF bypasses.
- **PR #68717**: Enabled failure alerts by default for recurring cron jobs to improve observability.
- **PR #68722**: Fixed config file permissions (`openclaw.json`) post-write to enforce secure defaults.
These changes reflect a strong focus on reliability, security, and developer experience.

**4. Community Hot Topics**  
Top-discussed issues reveal strategic directions:
- **[RFC: Native Agent Identity & Trust Verification](https://github.com/openclaw/openclaw/issues/49971)** (96 comments): Critical push for decentralized identity standards (ERC-8004, W3C DID/VC) to combat malicious skills—directly tied to recent reports of compromised skill ecosystems.
- **[Behavioral reputation for OpenClaw skills](https://github.com/openclaw/openclaw/issues/55342)** (16 comments): Proposes behavioral scoring beyond identity checks, citing 341 malicious skills detected in Q1 2026.
- **[WhatsApp auth hardening](https://github.com/openclaw/openclaw/pull/67815)** (PR with undefined comment count): Addresses persistent auth durability gaps in WhatsApp integration, showing channel plugin maintenance demands.
These signals suggest upcoming emphasis on trust frameworks and secure third-party skill ecosystems.

**5. Bugs & Stability**  
High-severity regressions dominate recent reports:
- **Critical**: Memory leak causing OOM crashes in v2026.3.12 ([#45064](https://github.com/openclaw/openclaw/issues/45064), 31 comments)—still open despite recent updates.
- **Regression**: `@buape/carbon` module missing after update to v2026.4.5 ([#62272](https://github.com/openclaw/openclaw/issues/62272), 16 comments).
- **Crash on onboarding**: Undefined `.trim()` error during channel selection ([#67353](https://github.com/openclaw/openclaw/issues/67353), closed today).
Multiple fix PRs exist for these (e.g., #67341, #68722), indicating active remediation. Tool execution hangs (OAuth timeouts, subagent spawning) remain frequent pain points.

**6. Feature Requests & Roadmap Signals**  
Emerging priorities from user feedback:
- **Gateway restart notifications** (#51130): Users want visibility into completed work post-restart—suggesting need for durable task logging.
- **Unified Amazon AI plugin** (#64318, PR under review): Consolidates Polly TTS, Transcribe STT, and Nova Sonic—aligns with multi-modal voice trend.
- **Dynamic tool surface narrowing via hooks** (#68734): Allows plugins to reduce token usage per-turn, critical for cost-sensitive deployments.
Given the volume of related PRs (#68734, #68718), expect enhanced plugin extensibility in next release.

**7. User Feedback Summary**  
Real-world pain points highlight operational friction:
- Docker/Linux environments fail on `brew`-dependent skills ([#14593](https://github.com/openclaw/openclaw/issues/14593)), exposing containerization gaps.
- iMessage delivery fails silently due to FDA permission inheritance issues ([#5116](https://github.com/openclaw/openclaw/issues/5116)).
- Model pricing cache timeouts break OpenRouter workflows ([#53639](https://github.com/openclaw/openclaw/issues/53639)).
Satisfaction is mixed: users praise rich channel support but express frustration with inconsistent tool availability across sessions (Telegram, subagents) and brittle upgrade paths.

**8. Backlog Watch**  
Long-standing blockers needing attention:
- **[Agent tools not loading in Telegram](https://github.com/openclaw/openclaw/issues/36651)** (stale, 12 comments since March): No resolution after 2+ months; impacts core use case.
- **[Tailscale serve mode requires pairing](https://github.com/openclaw/openclaw/issues/29670)** (stale, 6 comments): Blocks seamless remote access despite `allowTailscale=true`.
- **[SecretsProvider unification](https://github.com/openclaw/openclaw/issues/17311)** (6 comments): Incomplete consolidation of cloud key providers; may require architectural refactor.
Maintainers should prioritize these to prevent community attrition.

---

## Cross-Ecosystem Comparison

**Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem (April 2026)**

---

### **1. Ecosystem Overview**

The personal AI agent open-source landscape in April 2026 is characterized by intense development activity, with projects rapidly iterating on core functionalities such as multi-provider LLM orchestration, cross-platform channel support, memory management, and security hardening. A clear maturation trend is evident, moving from initial feature parity to addressing operational stability, observability, and enterprise-grade reliability. The ecosystem is bifurcating along architectural lines: monolithic frameworks like OpenClaw and ZeroClaw emphasize extensibility and rich integrations, while modular or lightweight projects (e.g., NanoBot, Moltis) focus on composability, sandboxing, and developer experience. Trust, authentication, and long-term memory are emerging as critical battlegrounds, reflecting real-world deployment needs.

---

### **2. Activity Comparison**

| Project        | Issues (24h) | PRs (24h) | Recent Release(s)       | Health Indicator                     |
|----------------|--------------|-----------|--------------------------|--------------------------------------|
| **OpenClaw**   | 500+         | 500+      | v2026.4.14               | High activity, active fixes          |
| **NanoBot**    | 26           | 54        | None (v0.2.0 pending)    | Strong velocity, stabilization focus |
| **Hermes**     | 50           | 50        | None                     | Reliability/obs. focus               |
| **PicoClaw**   | 11           | 8         | Nightly v0.2.6-20260418  | Provider regression concerns         |
| **NanoClaw**   | 5            | 21        | None                     | Major refactor, imminent release     |
| **NullClaw**   | 8            | 11        | None                     | Config/tooling polish                |
| **IronClaw**   | 18           | 50        | None                     | CI/secrets hardening                 |
| **LobsterAI**  | 0            | 2*        | None                     | Stable, low-churn                    |
| **TinyClaw**   | 0            | 0         | N/A                      | Inactive                             |
| **Moltis**     | 2            | 11        | None                     | Docs/tooling improvements            |
| **CoPaw**      | 15           | 11        | None (last: v1.1.2)      | Unicode/console stability focus      |
| **ZeptoClaw**  | 0            | 0         | N/A                      | Inactive                             |
| **ZeroClaw**   | 49           | 40        | Beta v0.7.0-beta.1047/1049 | Structural overhaul, CI/CD focus   |

\* LobsterAI and ZeptoClaw have no recent issue activity; only open PRs updated.

---

### **3. OpenClaw's Position**

**Advantages vs Peers:**
- **Community Scale & Velocity:** With ~500 issues/PRs daily, OpenClaw dwarfs peers in raw engagement—indicative of a mature, widely adopted core reference implementation.
- **Extensibility Leadership:** Prioritizes standardized schemas (memory-wiki), secure defaults (config permissions), and multi-provider orchestration, setting de facto patterns for skill ecosystems.
- **Trust & Security Focus:** Proactively addresses malicious skill detection via identity verification (ERC-8004/W3C DID) and behavioral reputation—critical for production agent marketplaces.

**Technical Approach Differences:**
- Unlike modular projects (NanoBot, Moltis), OpenClaw embraces a monolithic yet highly configurable architecture, enabling deep integration across channels and tools without abstraction layers.
- Its emphasis on "durable task logging" and "unified Amazon AI plugin" signals a shift toward resilient, cross-session workflows—distinct from ephemeral agent paradigms.

**Community Size Comparison:**
- OpenClaw’s activity volume suggests it has become the dominant hub for agent infrastructure, attracting both skill developers and end-users. Smaller projects often cite OpenClaw as an integration target or inspiration, reinforcing its ecosystem leadership.

---

### **4. Shared Technical Focus Areas**

Across multiple projects, key requirements are emerging:

| Area                  | Projects Involved                          | Specific Needs                                                                 |
|-----------------------|--------------------------------------------|--------------------------------------------------------------------------------|
| **Provider Reliability** | OpenClaw, PicoClaw, Hermes, NanoClaw, CoPaw | OAuth timeouts, credential collisions, API rate limiting, fallback mechanisms |
| **Memory Management** | OpenClaw, NanoBot, Hermes, NullClaw, CoPaw | Long-horizon retention, compaction strategies, vector-based retrieval           |
| **Observability**     | NanoBot, Hermes, IronClaw, Moltis, ZeroClaw | Task logging, lifecycle notifications, OTel GenAI tracing                       |
| **Authentication Hardening** | OpenClaw, Hermes, PicoClaw, ZeroClaw | Decentralized identity, zero-trust auth (Authula), shell policy enforcement     |
| **Cross-Platform Stability** | Hermes, NanoClaw, CoPaw, ZeroClaw | Windows install, Linux containerization, macOS PTY reliability                  |

These reflect a industry-wide pivot toward **operational resilience** and **secure multi-tenancy**, especially as agents move beyond single-user contexts.

---

### **5. Differentiation Analysis**

| Project        | Feature Focus                     | Target Users                     | Architecture Style              |
|----------------|-----------------------------------|-----------------------------------|----------------------------------|
| **OpenClaw**   | Rich channel support, skill trust | General-purpose agent builders    | Monolithic, extensible core      |
| **NanoBot**    | Modularity, config clarity        | Developers valuing clean APIs     | Lightweight, plugin-driven       |
| **Moltis**     | Sandbox security, code intelligence | Enterprise DevOps/sandbox users | Container-native, AST-aware      |
| **ZeroClaw**   | Production readiness, microkernel | Embedded/IoT/edge deployments     | Cargo workspace, Rust-first      |
| **IronClaw**   | Credential mgmt, meeting automation | Business process automation       | Event-driven, WASM-integrated    |
| **CoPaw**      | Multimodal output, UI consistency | Desktop/mobile app users          | Electron/Web hybrid              |

Notably:
- **Security & Sandboxing**: Moltis and ZeroClaw lead here, targeting regulated or embedded environments.
- **Enterprise Integration**: IronClaw and NullClaw prioritize DingTalk, Notion, and workflow orchestration.
- **Developer Experience**: NanoBot and CoPaw emphasize CLI clarity and error visibility.

---

### **6. Community Momentum & Maturity**

- **Rapid Iterators**: OpenClaw, ZeroClaw, and NanoClaw show high churn with structural changes (workspace refactor, module extraction), indicating aggressive feature development.
- **Stabilizing Projects**: LobsterAI and TinyClaw exhibit minimal activity, suggesting either niche specialization or stagnation.
- **Health Signals**: 
  - Positive: Quick bug triage (e.g., OpenClaw’s OOM fix, CoPaw’s Unicode crash resolution).
  - Negative: Persistent regressions (PicoClaw’s auth drops, Hermes’ Gemini credential conflicts) reveal infrastructure fragility despite high activity.

Most projects are transitioning from MVP to production-readiness, with security and observability becoming gatekeepers for adoption.

---

### **7. Trend Signals**

From community feedback, three overarching trends emerge for AI agent developers:

1. **Shift Toward Stateful Agents**: Demand for persistent memory (MemPalace, Dream Mode) and session checkpointing (#3027, #6323) reflects need for agents that learn across interactions—not just within context windows.

2. **Enterprise-Grade Observability is Non-Negotiable**: Real-time task logging, OTel integration, and audit trails (#1731, #2654) are now expected in professional toolchains, not optional extras.

3. **Authentication & Skill Trust Are Critical Path Concerns**: With reports of 341+ malicious skills (OpenClaw) and credential leakage risks (Hermes, ZeroClaw), decentralized identity (DID/VC) and behavioral scoring are becoming baseline requirements for any public agent ecosystem.

These trends suggest that future success will depend less on novel architectures and more on **resilient operation**, **transparent governance**, and **secure composability**—especially as agents integrate into business-critical workflows.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – April 19, 2026**

---

### 1. Today’s Overview  
NanoBot remains highly active with strong community engagement: **26 issues** and **54 PRs** updated in the last 24 hours. The project shows robust development velocity, particularly around memory management, provider reliability, and user experience polish. With zero new releases today, focus continues on stabilization and feature refinement ahead of likely v0.2.0 milestones.

---

### 2. Releases  
No new releases published today.

---

### 3. Project Progress  
Key merged/improved items from recent PRs (notably #3289, #3112, #3277):  
- Fixed GitStore nested repo creation bug that corrupted `.gitignore` (#3289)  
- Enhanced config resolution to respect provider default API bases (#3112)  
- Added structured issue templates to improve bug report quality (#3287)  
- Introduced lightweight model router for cost-aware task routing (#3109)  
- Hardened cron tool contract to prevent malformed calls (#3125)

---

### 4. Community Hot Topics  
Top discussion drivers:  

| Issue/PR | Type | Comments | Summary |
|---------|------|--------|--------|
| [#3227](https://github.com/HKUDS/nanobot/issues/3227) | CLOSED | 13 | User feedback on long-term memory limitations in large sessions; team acknowledged gap and signaled roadmap interest in hierarchical or vector-based retention. |
| [#3274](https://github.com/HKUDS/nanobot/issues/3274) | OPEN | 4 | Developer confusion over dual compaction strategies (`maybe_consolidate_by_tokens()` vs `AutoCompact._archive()`); highlights need for clearer architecture docs or unification. |
| [#3291](https://github.com/HKUDS/nanobot/pull/3291) | OPEN | – | Implements lifecycle notifications for systemd users—directly addresses demand from [#3279](https://github.com/HKUDS/nanobot/issues/3279) for startup/shutdown visibility. |

Underlying theme: **Observability & Control**—users increasingly seek transparency into agent state transitions and graceful recovery from failures.

---

### 5. Bugs & Stability  
High-severity regressions reported:  

1. **[P0] Gemini API key collision error** (#3206) – Multiple auth credentials cause fatal LLM errors; fix PR #3205 adds circuit breaker but not yet merged.  
2. **[P1] DuckDuckGo web search hangs indefinitely** (#2804, #2071) – Async thread blocking kills message processing; no active fix despite multiple reports.  
3. **[P1] Config env var syntax `${VAR}` not parsed** (#3251) – Silent auth failure due to broken config interpolation; resolved via PR #3112 (merged).  

Stability concern: **Unbounded inbound queue growth** (#3202) now mitigated by queue size limits—critical for long-running deployments.

---

### 6. Feature Requests & Roadmap Signals  
Strong signals for upcoming capabilities:  

- **Configurable consolidation ratio** (#3270) → Implemented in parallel PRs #3285/#3281 (awaiting merge)  
- **Session-level focus tool** (#3292) – Suggests persistent task anchoring across interruptions; aligns with Dream memory redesign goals  
- **WebSocket delta streaming** (#3286) – Indicates shift toward real-time, chunked responses for better UX in chat UIs  

Predicted next release focus: **Memory fidelity controls**, **multi-agent signaling**, and **provider fault tolerance**.

---

### 7. User Feedback Summary  
- **Positive**: Praise for clean codebase and OpenClaw integration path; appreciation for responsive maintainer engagement.  
- **Negative**: Frustration with silent config failures (env vars, auth), poor error visibility during streaming cuts, and inconsistent skill management APIs.  
- **Use case insight**: Heavy users run long-lived agents (>2hrs) where memory compression erases critical context—this is the top pain point driving consolidation enhancements.

---

### 8. Backlog Watch  
- **#3027** (Agent Checkpointing): Still unresolved after 3 weeks; essential for long-running workflows.  
- **#237** (LitellM integration question): Reopened recently; reflects ongoing debate about abstraction layer trade-offs.  
- **#3047** (Dream memory overflow): Critical for large projects; requires architectural change beyond incremental fixes.  

Maintainers should prioritize checkpointing and Dream redesign to address core scalability concerns flagged repeatedly.

---  
*Data snapshot taken April 19, 2026. All links refer to HKUDS/nanobot repository.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest – April 19, 2026**

---

### **Today’s Overview**

Hermes Agent shows strong development activity today with 50 updated issues and 50 pull requests, indicating an actively maintained project. No new releases were published, but multiple stability fixes, gateway enhancements, and cross-platform compatibility improvements have been merged or proposed. The high volume of authentication, provider, and messaging-related bugs suggests ongoing challenges in API integration robustness—particularly around Gemini, MiniMax, and Discord delivery. Overall, the project appears healthy but faces recurring infrastructure friction points.

---

### **Releases**

No new releases were published today.

---

### **Project Progress**

**Merged/Closed PRs (last 24h):**
- **#12328**: Fixed CI test failures and marked flaky tests as serial (#12328)  
- **#12148**: Added rate limit cooldown to avoid repeated restoration attempts during sustained HTTP 429s (#12148)  
- **#55**: Eliminated SystemExit traceback during Ctrl+C shutdown (#55)  
- **#201**: Corrected skills hub deduplication logic to respect trust level hierarchy (#201)  

These reflect a focus on reliability, testing stability, and error handling resilience.

---

### **Community Hot Topics**

1. **[#6323](https://github.com/NousResearch/hermes-agent/issues/6323)** – *“add mempalace for external memory support”*  
   - **Comments:** 10 | **👍:** 21  
   - Users strongly advocate for persistent, queryable memory via MemPalace to enable long-horizon reasoning across sessions. This signals demand for stateful agent capabilities beyond context windows.

2. **[#7893](https://github.com/NousResearch/hermes-agent/issues/7893)** – *HTTP 400 “Multiple authentication credentials received” when using native gemini provider*  
   - **Comments:** 16 | **👍:** 0  
   - High-priority authentication bug affecting Gemini users; likely due to credential precedence logic. Fix is under discussion but not yet implemented.

3. **[#11692](https://github.com/NousResearch/hermes-agent/issues/11692)** – *Receipts for self-improving agents: proving which skill version produced which output*  
   - **Comments:** 4 | **👍:** 0  
   - Raises critical governance concerns about provenance in self-modifying agents—highlighting need for audit trails and version accountability.

---

### **Bugs & Stability**

High-severity bugs reported today include:

| Issue | Severity | Description | Status |
|-------|----------|-------------|--------|
| [#12242](https://github.com/NousResearch/hermes-agent/issues/12242) | High | StepFun API fails due to malformed JSON from broken truncation in `context_compressor` | Open |
| [#12296](https://github.com/NousResearch/hermes-agent/issues/12296) | Medium | Kimi For Coding model switch silently falls back due to provider slug mismatch | Open |
| [#5861](https://github.com/NousResearch/hermes-agent/issues/5861) | Medium | Cron jobs falsely report “ok” status despite failed message delivery | Open |
| [#9331](https://github.com/NousResearch/hermes-agent/issues/9331) | Medium | `load_pool()` destructively prunes valid credentials if env var missing | Open |

Fixes exist for some (e.g., [#12242](https://github.com/NousResearch/hermes-agent/pull/12242)), while others lack active resolution.

---

### **Feature Requests & Roadmap Signals**

- **External Memory Integration** (#6323): Strong community push for MemPalace integration, suggesting imminent roadmap inclusion.
- **Desire-State Planning Engine** (#12327): New request for goal-tracking and gap-analysis features, possibly signaling future cognitive architecture upgrades.
- **Multimodal API Support** (#12329): Asymmetry between CLI and API server in image handling—likely to be unified soon.
- **Windows Native Install** (#12164, #10565, #12317): Multiple efforts to improve Windows compatibility indicate expanding platform support ambitions.

---

### **User Feedback Summary**

Users express frustration with:
- **Authentication fragility**, especially around Gemini and MiniMax providers.
- **Inconsistent messaging delivery**, particularly in cron jobs and Discord contexts.
- **Poor UX in terminal visibility** (white-on-white text issue #12330).
- **Lack of observability** into agent state changes and skill provenance.

Positive feedback centers on interest in **self-modifying agent governance** (#11692) and **long-term memory persistence** (#6323), reflecting maturation toward autonomous agent use cases.

---

### **Backlog Watch**

- **[#6323](https://github.com/NousResearch/hermes-agent/issues/6323)**: Over 10 comments, 21 upvotes—external memory is a top-requested enhancement with clear implementation path. Maintainer attention recommended.
- **[#5861](https://github.com/NousResearch/hermes-agent/issues/5861)**: Silent failure masking affects operational reliability; stale since April 7. Needs triage.
- **[#9331](https://github.com/NousResearch/hermes-agent/issues/9331)**: Destructive credential pruning risks user data loss; security-sensitive.

Maintainers should prioritize these to prevent erosion of trust in configuration management.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest**  
*Date: 2026-04-19*

---

### 1. **Today's Overview**

PicoClaw remains highly active, with 11 new or updated issues and 8 pull requests in the last 24 hours, reflecting strong community engagement and rapid iteration. A nightly build (v0.2.6-nightly.20260418) was released, though marked unstable due to recent changes in the main branch. The project shows consistent development momentum, particularly around provider reliability and tooling enhancements, but faces growing pressure on authentication, observability, and cross-platform support.

---

### 2. **Releases**

- **Nightly Build**: v0.2.6-nightly.20260418.6126ede9  
  This is an automated nightly snapshot built from `main` as of April 18, 2026. It includes all recent commits since the last tagged release (`v0.2.6`). Users are advised not to use this in production due to potential instability.  
  [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

> No stable releases were made today; only a nightly build exists.

---

### 3. **Project Progress**

No merged or closed PRs were recorded in the past 24 hours. All 8 recent PRs remain open, indicating ongoing development cycles focused on browser automation, channel abstraction, MCP integration, Codex streaming fixes, and diff-tool refinements.

---

### 4. **Community Hot Topics**

Top community discussions reflect urgent needs for **Android support**, **provider stability**, and **enterprise-grade observability**:

- **#292** – *Android Device Automation & Remote Operations* (8 comments, 1 👍)  
  Users want PicoClaw to control Android devices via Termux or direct API bridges—positioned as a key enabler for LLM-to-mobile task execution.  
  🔗 [Issue #292](https://github.com/sipeed/picoclaw/issues/292)

- **#618** – *Self-Upgrade Support* (9 comments, 2 👍)  
  Cross-platform auto-update capability requested for deb, winget, and embedded systems (e.g., opkg), critical for security patching and feature delivery.  
  🔗 [Issue #618](https://github.com/sipeed/picoclaw/issues/618)

- **#1731** – *OTel GenAI Observability* (4 comments, 0 👍)  
  Enterprise users seek OpenTelemetry integration to monitor LLM calls, traces, and metrics—aligning with DevOps standards.  
  🔗 [Issue #1731](https://github.com/sipeed/picoclaw/issues/1731)

These signals suggest increasing enterprise adoption and demand for robust operational tooling.

---

### 5. **Bugs & Stability**

Multiple provider-related bugs surfaced in v0.2.6, indicating a regression in credential handling:

| Issue | Severity | Summary |
|------|----------|--------|
| **#2578** – `openai_compat` drops Authorization header | High | API keys silently ignored across all config sources; breaks HTTP-based providers. |
| **#2584** – DeepSeek returns 401 despite valid key | High | Authentication failure even with correct credentials. |
| **#2583** – Ollama fails on qwen3.5/gemma4 | Medium | Empty responses despite models working outside PicoClaw. |
| **#2046** – LongCat API tools not invoked | Medium | Tool calling broken specifically for LongCat provider. |

✅ **Fix in progress**: PR #2581 addresses Codex streaming output recovery, showing responsiveness to core provider issues.  
⚠️ No fix PRs yet for #2578, #2584, or #2583—critical for user trust.

---

### 6. **Feature Requests & Roadmap Signals**

Key feature requests hint at near-future priorities:

- **Browser automation via CDP** (PR #2410, linked to roadmap item #293): Likely to land soon, enabling web interaction.
- **MCP slash commands** (PR #2535): Enhances CLI usability and tool discovery.
- **Multi-user & auth support** (PR #2313): Suggests security hardening is a top initiative.
- **Authula integration** (#1067): Explicit request for zero-trust authentication framework.
- **Auto-fallback for search APIs** (#2582): Improves resilience of external integrations.

Predicted next release will likely include browser tools, MCP improvements, and partial security hardening—but may delay Android support until post-v0.3.0.

---

### 7. **User Feedback Summary**

Users express **frustration with provider reliability**, especially after the v0.2.6 regression affecting DeepSeek, OpenAI-compatible endpoints, and Ollama models. There’s clear demand for:

- **Enterprise observability** (OTel support),
- **Cross-platform self-updating**,
- **Mobile/Android compatibility** (via Termux),
- **Authentication layers** to prevent unauthorized command execution.

Positive feedback centers on modular design and extensibility, but negative sentiment grows around broken auth flows and lack of fallback mechanisms.

---

### 8. **Backlog Watch**

Several long-standing items require maintainer attention:

- **#618**: Self-upgrade support has been open since February with sustained interest (9 comments, 2 upvotes). Critical for sustainable distribution.
- **#2313**: Multi-user & Agent Shield integration spans weeks; involves significant architectural changes and security review.
- **#292**: Android automation aligns with project vision but lacks implementation timeline.

Maintainers should prioritize these to prevent technical debt accumulation and maintain community trust.

--- 

*End of Digest*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – April 19, 2026**

**1. Today's Overview**  
NanoClaw shows high development velocity with 21 pull requests updated in the last 24 hours—14 merged and 7 open—indicating active refactoring and feature integration. Five issues were also updated, including three new critical bugs reported on the same day, suggesting increased user testing or recent deployment of complex features like scheduled tasks and OAuth flows. No new releases were published today, but the pace of changes implies imminent stabilization before a release cycle.

**2. Releases**  
No new releases were published today.

**3. Project Progress**  
Today’s merged PRs reflect a major architectural refactoring effort:  
- Module extraction into registry-based components (e.g., scheduling, approvals, agent-to-agent messaging) completed across multiple PRs (#1840–#1842).  
- A CLI channel was added (#1853), enabling terminal-based interaction with the daemon via Unix sockets.  
- OpenAI Codex fallback provider implemented (#1852), improving reliability when Claude API limits are hit.  
- Docker/CasaOS deployment support finalized (#1637), expanding containerized deployment options.  
These changes advance modularity, extensibility, and cross-platform usability.

**4. Community Hot Topics**  
The most engaged issue is #1413 ([Feature Request: Add Matrix as a channel](https://github.com/qwibitai/nanoclaw/issues/1413)), which has 4 upvotes and 1 comment, reflecting strong community interest in decentralized communication protocol support. Users see value in privacy-respecting, self-hosted channels aligning with NanoClaw’s ethos. Other trending topics include OAuth token refresh problems on Linux (#1850) and silent exit failures in scheduled tasks (#1854), both highlighting growing adoption on non-Windows platforms and operational concerns around task reliability.

**5. Bugs & Stability**  
Three high-severity bugs surfaced today:  
- **Critical**: Scheduled tasks with `context_mode='group'` cause main chat agent to duplicate tool actions due to shared-session reconstruction pressure (#1855) — no fix PR yet.  
- **High**: Plain-text “thinking” output leaks despite "exit silently" instructions, indicating fragile `<internal>` wrapping logic (#1854) — no fix PR yet.  
- **Medium**: OneCLI MITM proxy fails on Linux (Debian/Proxmox VMs), breaking credential injection for containerized agents (#1850) — no fix PR yet.  
All three require immediate attention; maintainers should prioritize session isolation and output sanitization in upcoming sprints.

**6. Feature Requests & Roadmap Signals**  
Beyond Matrix integration (#1413), user demand centers on protocol diversity: CalDAV calendar access (#1835), Blossom media hosting (#1834), and Nostr posting (#1833) all signal appetite for decentralized data standards. These suggest NanoClaw may expand its “agent marketplace” strategy toward interoperable, censorship-resistant integrations. Auto-evo memory injection (#1841) and Codex fallback (#1843) also point to roadmap emphasis on adaptive intelligence and resilience.

**7. User Feedback Summary**  
Real-world pain points center on platform-specific limitations (Linux OAuth/MITM failures), inconsistent task behavior under load (duplicate actions), and lack of silent operation guarantees (leaked internal thoughts). Conversely, users appreciate modular design (module refactor progress), CLI access, and fallback providers—indicating satisfaction with technical direction but urgency around stability polish.

**8. Backlog Watch**  
Issue #1413 (Matrix channel request) stands out as a long-pending feature request with sustained community engagement (created March 25, still open). Despite being tagged as low-priority historically, its recent activity suggests renewed interest. Maintainers should assess feasibility against current module architecture before committing timeline.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest – April 19, 2026**

### 1. Today's Overview
NullClaw remains highly active with sustained development momentum: 8 issues and 11 pull requests updated in the last 24 hours, reflecting ongoing feature expansion and community engagement. No new releases were published today, but multiple high-impact enhancements—particularly around agent skills, tool customization, and Matrix E2EE support—are under active review. The project shows strong maintainer responsiveness, with several recent PRs targeting configuration flexibility and interoperability improvements.

### 2. Releases
No new releases were published on April 19, 2026.

### 3. Project Progress
Today saw no merged or closed PRs; all 11 open PRs represent incremental but significant advances in core functionality:
- **Multi-workspace support** (PR #842) enables running isolated agent instances via `--workspace` flag.
- **Tool customization system** (PR #411) introduces trigger-based prioritization and parameter management.
- **Agent Skills RFC 0.2.0 compliance** (PR #831) hardens web skill discovery with schema validation and integrity checks.
- **Matrix E2EE proxy integration** (PR #838) adds optional pantalaimon support for end-to-end encrypted messaging.
- **REST Admin API foundation** (PR #770) provides runtime inspection and cron job control without new dependencies.

These collectively enhance configurability, security, and operational scalability.

### 4. Community Hot Topics
The most engaged issue (#376) concerns DingTalk channel behavior: users report it operates as "send-only," preventing message reception despite correct `config.json` setup. This suggests a gap in bidirectional gateway implementation for certain enterprise messaging platforms. The corresponding PR (#842) directly addresses this by enabling per-instance workspace isolation—a solution that could also resolve workspace-specific channel misconfigurations. Both have 3 comments and zero reactions, indicating quiet but persistent user concern about real-time interactivity in enterprise integrations.

### 5. Bugs & Stability
Two critical bugs stand out:
- **Tool call parsing failure** (#408): Valid JSON tool calls like `{"name": "memory_recall", ...}` are misparsed, extracting `:` instead of the actual tool name. This breaks core agent functionality and has persisted since March 10 with only one comment—a red flag for regressions.
- **Version display inconsistency** (#821): Installing from source yields `"dev"` instead of a version number or hash when running `nullclaw version`. While now closed, its resolution implies build-system fixes were needed.
Both issues impact reliability but lack immediate mitigation in open PRs. No fix PRs currently target #408.

### 6. Feature Requests & Roadmap Signals
User demand centers on **concurrent interactivity** (#832) and **multi-workspace orchestration** (#833). These reflect growing use cases where agents must handle long-running tasks alongside live user input without blocking. The concurrent interactivity request aligns closely with PR #836 (trigger-based tool prioritization), suggesting such features may land soon. Additionally, external tool customization files (#837) and skill activation flags (#841) signal a trend toward composable, deployment-friendly agents.

### 7. User Feedback Summary
Key pain points include:
- **Fragile Homebrew upgrades**: Service fails silently after updates due to hardcoded binary paths (Issue #354).
- **Enterprise messaging limitations**: DingTalk and similar channels lack full two-way sync capabilities.
- **Debugging complexity**: Tool call parsing errors produce opaque failures rather than actionable diagnostics.
Users value modularity and CLI flexibility (evidenced by rapid adoption of `--workspace` and skill flags) but express frustration with silent failures and inconsistent behavior across installation methods.

### 8. Backlog Watch
- **Issue #408** (Tool call parsing bug): Open since March 10, no resolution in sight despite being foundational to agent operation. Requires deep parser refactoring—maintainer attention strongly recommended.
- **Issue #376** (DingTalk receive-only mode): Despite being open for over a month, it lacks technical details or proposed solutions. Needs clarification whether this is a protocol limitation or implementation gap.
- **PR #770** (REST Admin API): Large feature (~20+ commits) awaiting review; critical for lightweight client ecosystems but may require API stability discussion.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest — 2026-04-19**

### 1. Today’s Overview  
The IronClaw project shows strong development momentum with 50 PR updates and 18 issue updates in the last 24 hours, indicating active iteration and stabilization efforts. While no new releases were published today, the high volume of merged/closed PRs (9) suggests focused progress on internal quality improvements, including CI hardening, secret management, and gateway refactoring. Open issues reflect ongoing concerns around credential handling, test reliability, and platform boundary enforcement—key themes for near-term stability.

---

### 2. Releases  
No new releases were published today.

---

### 3. Project Progress  
**Merged/Closed PRs (9):**  
- #2656: Hardened Playwright selector to resolve strict-mode duplicate element errors in E2E tests (#2626).  
- #2570: Fixed event-driven mission re-firing logic after completion, resolving "no self-improvement missions" false positives.  
- #2648: Auto-generates secrets master key via `.env` on startup, closing #1820 ("secrets store not available").  
- #2556: Prevented auto-starting inactive WASM channels at boot, aligning “installed” behavior with user intent.  
- #2625 & #2623: Diagnosed macOS PTY harness unreliability and Slack fixture boot failures as non-product regressions.  

These merges emphasize test robustness, secret lifecycle correctness, and startup behavior fidelity.

---

### 4. Community Hot Topics  
No PR or issue received multiple comments or reactions today. However, **Issue #91** ([Meeting Intelligence Pipeline](https://github.com/nearai/ironclaw/issues/91)) remains a long-standing P2 feature request spanning audio recording, transcription, action item extraction, and proactive follow-up—indicating sustained demand for meeting automation capabilities. The lack of recent engagement may signal either implementation complexity or shifting priorities toward core infrastructure.

---

### 5. Bugs & Stability  
**High-severity bugs addressed:**  
- #1882 (Closed): MCP server name validation lacked shell metacharacter protection—now resolved per staging CI findings.  
- #2410 (Closed): Dashboard refresh loop in staging environment diagnosed and fixed.  
- #2069 (Closed): Removed silent “default” credential fallback in WASM tools to prevent cross-tenant leakage (MT-2).  

**Active critical paths:**  
- #2636: Skill install fails due to artificial 506KB size cap (vs. 64KB limit), blocking large skill deployment. Maintainer notes “skill size no need limit” and cites lack of similar project constraints.  
- #2655: Routine runs fail to finalize when linked jobs remain pending—a concurrency edge case in `routine_engine.rs`.  

Fixes exist for all reported issues; no open crashes or data loss reports.

---

### 6. Feature Requests & Roadmap Signals  
Key signals from today’s activity:  
- **Credential profiles** (#2642): Support multiple accounts per service (e.g., multiple Google/Notion accounts)—high-priority extension request.  
- **Gateway real-time coverage** (#2654): Complete bridge between engine events (`EventKind`) and UI `AppEvent` streams to ensure full observability.  
- **Platform boundary enforcement** (#2599): Epic driving staged refactoring of web gateway into crated features + platform layer, enforced via CI.  

These suggest next release will prioritize auth scalability, observability completeness, and architectural clarity over flashy UX additions.

---

### 7. User Feedback Summary  
- **Pain points**:  
  - Users hitting arbitrary skill size limits (#2636) expect unbounded skill deployment like competitors.  
  - Multi-account workflows blocked by single-credential model (#2642).  
  - Staging environment instability (#2410) undermines trust in hosted instances.  
- **Satisfaction indicators**:  
  - Silent credential fallback fix (#2069) addresses critical security concern without user-facing change.  
  - Tool output previews (#2571) enhance transparency—small but meaningful UX win.  

Overall sentiment leans toward appreciation for backend fixes but frustration with UX friction and undocumented limits.

---

### 8. Backlog Watch  
- **#91 (Meeting Intelligence)**: Created Feb 14, 2026—over 2 months old, P2 priority, spans multiple subsystems. Requires cross-team coordination; likely deferred beyond immediate roadmap.  
- **#2599 (Gateway Boundaries)**: Active epic with daily activity; appears well-managed but may absorb significant dev bandwidth through Q2.  

Both represent strategic bets requiring sustained effort—maintainers should clarify timelines to avoid community misalignment.

---  
*Data snapshot taken 2026-04-19. All links verified against nearai/ironclaw GitHub repository.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – April 19, 2026**

---

### 1. **Today’s Overview**  
The LobsterAI project shows minimal activity as of April 19, 2026. No new issues were opened or closed in the last 24 hours, and there were no new releases. However, two open pull requests remain under active development, both updated within the past day, indicating ongoing integration work around model provider support and API updates. The repository maintains a stable, low-churn state typical of mature AI agent frameworks.

---

### 2. **Releases**  
No new releases have been published since the last entry. The absence of versioned releases suggests the project operates primarily through direct code contributions rather than formal release cycles.

---

### 3. **Project Progress**  
- **Merged PRs today**: 0  
- **Closed PRs today**: 0  

Despite no merges today, two open PRs saw recent updates:
- [PR #428](https://github.com/netease-youdao/LobsterAI/pull/428): Integration of LM Studio as a local LLM provider via OpenAI-compatible endpoint.
- [PR #388](https://github.com/netease-youdao/LobsterAI/pull/388): Upgrade MiniMax default model to M2.7 and update API base URL.

These reflect continued expansion of supported inference backends and alignment with evolving third-party model offerings.

---

### 4. **Community Hot Topics**  
Currently, there are no issues with user comments or reactions. The most active items are the two open PRs, though neither has garnered community engagement (zero 👍 or comments). This may indicate either niche use cases (e.g., specialized model providers like LM Studio) or that these features are still in internal review by maintainers. Underlying need: broader LLM provider compatibility, especially for users leveraging locally hosted models or newer cloud APIs.

---

### 5. **Bugs & Stability**  
No bugs, crashes, or regressions were reported or resolved in the last 24 hours. The lack of issue activity suggests stable operation in active deployments.

---

### 6. **Feature Requests & Roadmap Signals**  
While no explicit feature requests appear in open issues, the recent push to add **LM Studio** and upgrade **MiniMax to M2.7** signals a clear roadmap direction:
- Support for local/self-hosted LLMs via standardized APIs (OpenAI-compatible).
- Rapid adaptation to model version updates from major providers.
- Emphasis on i18n readiness and UX consistency across providers.

These trends suggest future versions will prioritize extensibility and multi-provider abstraction.

---

### 7. **User Feedback Summary**  
No direct user feedback (via comments or reactions) is visible in the last 24 hours. Historical patterns—such as clean integration of Ollama before LM Studio—suggest users value seamless onboarding of new model providers without breaking changes. There is no indication of dissatisfaction; instead, the project appears to meet developer needs for modular, plug-and-play LLM support.

---

### 8. **Backlog Watch**  
Two long-running PRs require maintainer attention due to their “stale” status:
- **[PR #428](https://github.com/netease-youdao/LobsterAI/pull/428)**: Added 55 days ago, last updated April 18. Integrates LM Studio but lacks reviewer feedback.
- **[PR #388](https://github.com/netease-youdao/LobsterAI/pull/388)**: Created March 12, updated April 18—still awaiting merge after ~6 weeks.

Both PRs involve non-breaking enhancements aligned with core functionality, making them low-risk candidates for inclusion. Their prolonged staleness may slow ecosystem adoption of newer model endpoints.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – April 19, 2026**

---

### 1. Today's Overview  
Moltis shows steady development activity with 11 pull requests updated in the last 24 hours—six merged and five still open—indicating ongoing feature work and maintenance. Two new issues were opened today, both related to container readiness and operational controls, suggesting growing user reliance on sandboxed environments. No new releases have been published, but several infrastructure improvements (e.g., WebAuthn reverse proxy support, code indexing crate) are nearing completion. Overall, the project maintains a healthy cadence of documentation grooming, refactoring, and UX enhancements.

---

### 2. Releases  
No new releases were published in the past 24 hours.

---

### 3. Project Progress  
Six PRs were merged/closed today:
- **PR #785**: Added `server.external_url` configuration for reverse proxy WebAuthn support (#772), enabling secure external access.
- **PR #784**: Enhanced sandbox observability by adding detailed logs during container lifecycle events, addressing opaque dpkg processes (#781).
- **PR #779**: Fixed task visibility bug where `task_list.list` ignored custom list IDs unless explicitly specified, now defaults to listing all tasks and adds `list_lists` action (#776).
- **PR #777 & #780**: Doc rotisserie updates for `docker.md` and `graphql.md`, correcting stale examples and field naming conventions.
- **PR #771**: Introduced `moltis-code-index` crate with built-in SQLite+FTS5 backend for incremental code search indexing.

These reflect progress in authentication, debugging, task management, documentation hygiene, and developer tooling.

---

### 4. Community Hot Topics  
The most active recent issue is **#788** ([Feature]: "Abort" current operation from Telegram & fallback models), which requests a way to cancel long-running LLM operations via external interfaces. Though no comments yet, this signals demand for better interruptibility in agent workflows. The second trend is robust sandbox monitoring, as seen in **#786** (Browser container fails to become ready within 60s) and the logging overhaul in **PR #784**, indicating users need clearer feedback when containers stall.

---

### 5. Bugs & Stability  
Two critical bugs reported today:
- **#786**: Browser containers fail to reach ready state within 60 seconds—potentially blocking user interactions. No fix PR yet, but high severity due to impact on core functionality.
- **#776** (now closed): `task_list.list` missed tasks under non-default list IDs—already resolved in **PR #779**.
- **#588**: Podman backend ignored in `is_container_available()`—closed without comment, likely addressed off-band.

The lack of resolution on #786 warrants immediate attention given its effect on usability.

---

### 6. Feature Requests & Roadmap Signals  
User-driven features point toward enhanced control and extensibility:
- **Abort capability** (#788) for external interfaces like Telegram suggests a push toward richer telephony/chat integrations.
- **Web UI migration** (**PR #775**) using Vite + Preact + TypeScript marks a strategic shift toward modern frontend architecture.
- **AST-aware chunking** (**PR #791**) and **code indexing crate** (**PR #771**) signal investment in smarter context handling for AI agents—key for enterprise use cases.

Future versions may prioritize interruptible agent workflows and improved code intelligence.

---

### 7. User Feedback Summary  
Users express frustration with opaque container behavior (“dpkg processes with no moltis logs”) and incomplete task discovery—highlighting needs for transparency and discoverability. Positive feedback appears implicit in rapid fixes (e.g., #776 → #779), showing responsiveness. New pain points include container startup timeouts, underscoring reliability gaps in ephemeral environments.

---

### 8. Backlog Watch  
While most items are actively addressed, **Issue #588** (Podman backend ignored) has been closed recently but lacks public resolution details—maintainers should clarify whether this was a config oversight or deeper backend parity issue. Additionally, **#788**’s abort request remains open with zero engagement; if traction builds, it could become a priority for next sprint.

--- 

*Data source: [moltis-org/moltis](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – April 19, 2026**

---

### 1. Today’s Overview  
The CoPaw project remains highly active with **26 new updates** (15 issues, 11 PRs) in the past 24 hours, indicating strong development momentum and community engagement. While no new releases were published today, rapid iteration is evident through multiple bug fixes, feature enhancements, and infrastructure improvements—particularly around memory management, console stability, and localization. The project shows healthy contributor activity, including first-time contributors shipping fixes for Unicode handling and test setup.

---

### 2. Releases  
No new releases were published on 2026-04-19. The last stable version appears to be v1.1.2 (based on recent issue reports).

---

### 3. Project Progress  
Two pull requests were merged or closed today:
- **PR #3561**: Synchronized source branch (routine maintenance).
- **PR #3545**: Implemented delete functionality for models in the Provider UI (frontend enhancement), addressing a UX gap noted by users (#3545 closed after implementation).
- **PR #3542**: Fixed Ollama model invocation failure under VPN proxy conditions.
- **PR #3268 & #3553**: Both related to Unicode surrogate handling in SSE streams; while not merged today, their corresponding issues (#3552, #3553) reflect urgent stability concerns being actively addressed.

These closures indicate responsive triage of user-reported regressions and feature gaps.

---

### 4. Community Hot Topics  
Top-discussed items include:
- **Issue #3356**: Persistent confusion between `.copaw` and `.qwenpaw` directories post-upgrade, with 19 comments highlighting installation path ambiguity and legacy data migration pain points. This suggests a need for clearer upgrade documentation or automated cleanup logic.
- **Issue #3470**: Inquiry about Hermes-like self-evolution capabilities, with 5 comments expressing interest in autonomous agent improvement mechanisms. Though speculative, this signals demand for next-level agent intelligence features.
- **Issue #3293 & #3554**: Multiple users request voice output support across channels (DingTalk, Feishu, etc.), indicating expanding use cases beyond text-based assistants toward multimodal interaction.

Underlying needs: **installation clarity**, **multimodal output**, and **agent autonomy**.

---

### 5. Bugs & Stability  
Critical bugs reported today:
1. **#3552 – Console SSE crash on malformed Unicode surrogates** (Severity: High)  
   - Causes streaming chat to abort unexpectedly.  
   - **Fix in progress**: PR #3553 submitted same day to sanitize surrogate encoding before serialization.

2. **#3555 – Desktop app hangs at "Waiting for HTTP ready..." on Windows** (Severity: High)  
   - Blocks user launch entirely; likely a race condition or port binding issue. No fix PR yet.

3. **#3560 – Tool call parsing error with custom llama.cpp backend** (Severity: Medium)  
   - Affects local LLM tool usage; minimal context but reproducible via logs shared by user.

All three represent runtime instability risks, particularly for Windows desktop deployment. Two have immediate mitigation paths via incoming PRs.

---

### 6. Feature Requests & Roadmap Signals  
Key requested features:
- **Voice response capability** (#3293): Users want non-text outputs across messaging platforms.
- **Context usage visibility** (#3563): Need for real-time token/cost monitoring to trigger compaction decisions.
- **Self-evolution / adaptive agents** (#3470): Forward-looking ask suggesting roadmap consideration for meta-learning or feedback-driven improvement.
- **Model deletion in UI** (#3545): Already implemented—shows responsiveness to configuration UX demands.

Predicted near-term inclusion: **voice synthesis integration** and **enhanced memory diagnostics**, given parallel work in skills and memory modules (PRs #3558, #3548).

---

### 7. User Feedback Summary  
Real pain points include:
- **Installation/upgrade friction**: Legacy directory persistence confusing users (#3356).
- **Platform-specific crashes**: Windows desktop hanging and Unicode errors disrupt core usage.
- **Limited observability**: Users lack insight into context consumption or model costs.
- **Inconsistent UX**: Web console missing features available in mobile app (e.g., default agent editing, #3557).

Positive signals: Active contributors are fixing critical bugs quickly; model management improvements show commitment to usability.

---

### 8. Backlog Watch  
- **Issue #2943** ("copaw init hangs") created 14 days ago remains unresolved despite closure status—possibly mislabeled. Still showing update activity (comments, reactions). Requires maintainer review.
- **PR #3117** ("semantic skill routing") has been open for 10+ days with "Under Review" tag and requests discussion—may need clarification or scope refinement before merge.

Both items signal potential bottlenecks if not revisited soon.

--- 

*Data sources: [agentscope-ai/QwenPaw GitHub](https://github.com/agentscope-ai/QwenPaw)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest — 2026-04-19**

**Today’s Overview**  
ZeroClaw shows strong development momentum with 49 active issues and 40 updated PRs in the last 24 hours. The project has shipped two new beta releases (v0.7.0-beta.1047 and v0.7.1-beta.1049), marking significant progress following a major structural overhaul of its codebase into a Cargo workspace. CI/CD improvements dominate recent activity, including token migration to GitHub Apps and Docker manifest fixes for microkernel compatibility. Overall, the project maintains high engagement with a focus on stability, security hardening, and extensibility for production-grade agent deployments.

---

**Releases**  
Two new beta releases were published:
- **v0.7.0-beta.1047**: Represents the largest structural overhaul in ZeroClaw’s history, transitioning the entire monolithic codebase into a focused Cargo workspace with a redesigned config schema and live migration support.
- **v0.7.1-beta.1049**: A maintenance release addressing build and packaging regressions introduced during the v0.7.0 transition, particularly around Docker image generation and workspace crate resolution.

Both versions remain in beta; no stable release has been tagged yet for v0.7.x. Users are advised to test thoroughly due to breaking changes in configuration handling and internal crate boundaries.

---

**Project Progress**  
Merged/closed PRs advanced critical infrastructure:
- #5888: Replaced personal access tokens with `GITHUB_TOKEN` in release workflows, improving maintainer accessibility and reducing credential sprawl.
- #5860: Fixed immutable-release errors by decoupling tag creation from release publishing in CI.
- #5832 & #5826: Enhanced Signal channel support with media attachment handling and native markdown rendering via `textStyles`.
- #5801: Introduced `CONVENTIONS.md`, clarifying development philosophy and contributor expectations.

These changes reflect a strategic shift toward sustainable maintainability and cross-platform reliability.

---

**Community Hot Topics**  
Top-engagement items reveal core user needs:
- **#4866** [CLOSED] Web dashboard unavailability blocked workflow for multiple users (#4866). Despite closure, residual confusion suggests incomplete resolution or lack of clear rebuild instructions.
- **#5719**: High-severity security concern where `runtime.kind = "native"` fails to bypass Docker for shell tool execution, undermining sandbox integrity (#5719).
- **#3642**: Demand for a “full” Docker image with all features enabled (e.g., WhatsApp) to lower entry barriers for non-technical users (#3642).
- **#5849**: Novel proposal for “Dream Mode” — idle-time memory consolidation — indicating growing interest in autonomous long-term learning (#5849).

Underlying themes: **production readiness**, **security transparency**, and **user accessibility**.

---

**Bugs & Stability**  
High-priority bugs reported:
1. **#5813** (S1): Compaction orphans `tool_result` blocks, bricking sessions until manual cleanup — fix under discussion (#5813).
2. **#5861** (S1): Voice-wake feature fails to compile on Arch Linux with Rust 1.94.1 due to `cpal` compatibility (#5861).
3. **#5810** (S2): OTP gate silently accepts invalid action names, creating false security assurances (#5810).
4. **#5809** (S2): Shell policy misinterprets `git -C <path>` as `-c` flag, blocking legitimate operations (#5809).

Fix PRs exist for several (e.g., #5834 addresses SQLite FTS stale content), but none have merged for S1 items yet.

---

**Feature Requests & Roadmap Signals**  
User-driven signals point to near-term priorities:
- Full Docker image (#3642) and native STT via whisper.cpp (#5868) are actively being prototyped.
- Interactive channel approval (#5741) and session ownership models (#5833) suggest enhanced governance for multi-agent environments.
- i18n modernization via Mozilla Fluent (#5787) and documentation standardization (#5576) indicate maturity initiatives.

The “Dream Mode” concept (#5849) may evolve into a background memory optimization service post-v0.7.2.

---

**User Feedback Summary**  
Real-world pain points include:
- Build complexity for embedded/arm64 targets (#5756).
- Silent failures in channel message routing (Telegram/Discord Canvas frames not reaching WS clients, #5356).
- Overweight memory weighting in system prompts disrupting cron job behavior (#5844).

Positive feedback highlights improved Signal UX and clearer contribution guidelines (`CONVENTIONS.md`). However, recurring frustration surrounds inconsistent error messages (e.g., “Web dashboard not available” without actionable steps).

---

**Backlog Watch**  
Items requiring maintainer attention:
- **#5719**: Security-critical native-mode sandboxing flaw — needs urgent review and fix.
- **#5787**: RFC for i18n replacement with Fluent — stalled since April 16; depends on team bandwidth.
- **#5576**: Documentation standards RFC — draft status, but foundational for future releases.
- **#5721 & #5722**: Skill injection and Python environment bugs tied to InvestorClaw use case — signal importance for FINOS CDM compliance.

All four require maintainer triage to avoid blocking ecosystem adoption.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*