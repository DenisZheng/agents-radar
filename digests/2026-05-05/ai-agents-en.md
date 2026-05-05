# OpenClaw Ecosystem Digest 2026-05-05

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-05 00:31 UTC

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

**OpenClaw Project Digest – May 5, 2026**

### 1. Today's Overview  
OpenClaw shows sustained high development velocity with 500 issues and 500 PRs updated in the last 24 hours—indicating active maintenance and rapid iteration. Four new releases were published, including a core npm hotfix (`v2026.5.3-1`) and beta builds (`v2026.5.4-beta.1`), signaling ongoing stabilization efforts ahead of a stable release. The project maintains strong engagement across GitHub activity metrics, reflecting both developer interest and operational reliability.

### 2. Releases  
**New Releases:**  
- **openclaw@2026.5.4-beta.1**: Introduces the bundled `file-transfer` plugin with secure binary file operations (`file_fetch`, `dir_list`, etc.) on paired nodes, featuring per-node default-deny path policies requiring operator approval.  
- **openclaw@2026.5.3-1**: Core npm hotfix addressing regression where install scanner incorrectly blocked official bundled plugins due to `process.env` access patterns in compiled bundles (closes #77416).  

No breaking changes noted; all updates are additive or corrective.

### 3. Project Progress  
Key merged/closed PRs include:  
- **#77591**: Blocks remote node OAuth writes during `models auth login`, preventing stale token reuse (#42291).  
- **#77589**: Ensures status commands honor selected usage auth profiles (#58498).  
- **#77587**: Fixes OpenAI SSE frame splitting to prevent parser starvation (#76305).  
- **#77188** (merged): Adds optional `agentId` filtering to `cron list`, reducing noise in multi-agent setups.  

Several infrastructure improvements focused on auth resilience, CLI diagnostics routing, and provider initialization reliability.

### 4. Community Hot Topics  
Top-engagement issues reveal platform expansion priorities:  
- **Linux/Windows App Support (#75)**: Top-voted (74 👍) request for desktop companion apps beyond macOS/iOS/Android—highlighting demand for cross-platform parity.  
- **Prebuilt Android APK (#9443)**: User seeks ready-to-install binaries instead of source-only builds, indicating friction in mobile deployment workflows.  
- **Skill Ecosystem Gap (#50090)**: Community-driven critique of ClawHub’s underperformance versus promised “living ecosystem”—suggesting need for better skill discovery and installation tooling.  

These reflect strategic focus areas: client diversity, distribution simplicity, and extensibility.

### 5. Bugs & Stability  
Notable bugs reported today:  
- **High**: Fal GPT Image 2 routing error causes HTTP 404 on image-to-image edits (#77295). *Fix PR pending*.  
- **Medium**: Telegram photo inbound mislabels non-image content as `<media:image>` (#69793)—*fixed in main via #69793 closure*.  
- **Medium**: RISC-V64 LLM failures due to missing optimizations (#54253)—ongoing investigation.  
- **Regression**: Discord npm plugin secret contract fails if compiled to `dist/` subdirectory (#77241)—*hotfixed in v2026.5.3-1*.  

Stability remains a concern around media processing and cross-platform compatibility.

### 6. Feature Requests & Roadmap Signals  
Emerging themes from user requests:  
- **Multi-bot Communication**: Telegram `allowBots` support requested for group parity with Discord/Slack (#8295, 4 👍).  
- **Context Management**: Fallback model triggering on context overflow (#9986); visibility into context usage percentage (#2597).  
- **Reliability Enhancements**: Native iMessage read receipts (#51088), WhatsApp missed-message backfill (#50093).  

Predict next release will prioritize channel reliability, memory management, and cross-platform client availability.

### 7. User Feedback Summary  
Users express frustration with:  
- Silent message loss during gateway reconnects (WhatsApp/Telegram) (#50040, #50093).  
- Poor transparency when tools fail (e.g., image optimization errors without dependency hints) (#73148).  
- Unresponsive agents during skill installation (#52073) and cron hallucinations (#49876).  

Positive signals: appreciation for granular cron controls and OAuth fixes, though trust erosion occurs when internal paths are hardcoded (#51429).

### 8. Backlog Watch  
- **#75 (Linux/Windows Apps)**: Open since Jan 2026; requires significant app engineering effort.  
- **#50090 (ClawHub Maturity)**: Critical for ecosystem growth; needs dedicated roadmap commitment.  
- **#8295 (Telegram allowBots)**: Low-effort parity feature likely slated for near-term inclusion given Discord/Slack precedent.  

Maintainers should prioritize clear communication on long-term app strategy and skill marketplace viability to sustain community momentum.

---

## Cross-Ecosystem Comparison

**Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem (May 2026)**

---

### **1. Ecosystem Overview**  
The personal AI agent open-source landscape is highly active, with multiple projects vying for leadership in modular, extensible agent frameworks. Key players like OpenClaw and NanoBot emphasize rapid iteration and cross-platform reliability, while Hermes Agent and IronClaw focus on production-grade stability and enterprise integrations. A clear trend toward multi-provider resilience, session continuity, and security hardening is evident across the ecosystem. Despite fragmentation in tooling and channel support, interoperability via OpenAI-compatible APIs remains a common denominator, accelerating adoption but also exposing regional or provider-specific fragility.

---

### **2. Activity Comparison**

| Project         | Issues (24h) | PRs (24h) | Releases (Latest)     | Health Score* |
|-----------------|--------------|-----------|------------------------|---------------|
| OpenClaw        | 500          | 500       | v2026.5.4-beta.1       | High          |
| NanoBot         | 8            | 19        | v0.1.5.post3           | Medium-High   |
| Hermes Agent    | 50           | 50        | v0.12.0                | Medium        |
| PicoClaw        | 29           | 60        | None                   | Medium        |
| NanoClaw        | 5            | 34 (19 merged) | None               | Medium        |
| NullClaw        | 3            | 5         | v2026.5.4              | Stable        |
| IronClaw        | 2            | 19 (8 merged) | None               | Medium        |
| LobsterAI       | 1 (closed)   | 2         | None                   | Low-Medium    |
| Moltis          | 1            | 1 (merged)| None                   | Low           |
| CoPaw           | 13           | 22 (15 merged) | v1.1.5            | Medium-High   |
| ZeroClaw        | 50           | 50        | None                   | High          |

\* *Health Score inferred from velocity, bug resolution rate, release cadence, and community engagement.*

---

### **3. OpenClaw's Position**  
OpenClaw leads in raw development velocity and operational maturity, maintaining sustained activity (~500 issues/PRs/day) and publishing frequent beta releases with targeted hotfixes (e.g., npm scanner regression). Its core advantage lies in deep integration of bundled plugins (e.g., `file-transfer`) and robust auth workflows, supported by strong GitHub metrics indicating broad developer adoption. Compared to peers, OpenClaw emphasizes platform expansion (Linux/Windows apps, ClawHub ecosystem) and infrastructure resilience—traits less visible in NanoBot’s niche LLM routing focus or Hermes Agent’s CLI-centric model. While smaller projects like Moltis or LobsterAI show lower volume, OpenClaw’s scale enables faster feedback loops and earlier exposure to edge cases, reinforcing its role as a de facto reference implementation.

---

### **4. Shared Technical Focus Areas**  

| Focus Area                     | Projects Involved                          | Specific Needs                                                                 |
|--------------------------------|--------------------------------------------|--------------------------------------------------------------------------------|
| Multi-Provider Reliability     | NanoBot, Hermes, IronClaw, ZeroClaw        | Failover chains, geoblocking handling, credential rotation                   |
| Session & Context Management   | NanoBot, PicoClaw, CoPaw, OpenClaw         | Task anchoring, memory consolidation, `/status`/`compact` commands             |
| Security Hardening             | Hermes, PicoClaw, NullClaw, ZeroClaw       | Secret redaction defaults, sandbox isolation, auth header validation           |
| Channel Gateway Stability      | OpenClaw, NanoClaw, Hermes, PicoClaw       | WhatsApp/Telegram reconnection logic, media processing, OAuth flow fixes       |
| Observability & Debugging      | Moltis, NullClaw, CoPaw                    | RPC logging, progress indicators, streaming diagnostics                        |

These areas reflect convergent user needs around trust, recoverability, and transparency—especially critical as agents handle longer-running workflows.

---

### **5. Differentiation Analysis**  

| Project       | Feature Focus                  | Target Users                 | Technical Architecture Highlights                     |
|---------------|-------------------------------|------------------------------|--------------------------------------------------------|
| **OpenClaw**  | Platform parity, extensibility| General developers, enterprises| Bundled plugins, permissive path policies, npm-based distribution |
| **NanoBot**   | LLM routing, cognitive realism | Researchers, prod users      | Configurable memory ratio, opt-in focus persistence, HF Spaces orchestration |
| **Hermes**    | CLI stability, gateway reliability | Power users, sysadmins     | TUI hardening, WSL-aware adapters, ACP integration     |
| **IronClaw**  | Enterprise ops, IaC-style config | DevOps, multi-tenant orgs   | Reborn memory stack, WASM signing, declarative blueprints |
| **CoPaw**     | Rapid prototyping, UI polish | Individual users, startups   | Electron frontend, preflight checks, Azure/GCP integration |
| **ZeroClaw**  | Modular skills, cost control | Production teams             | Per-provider pricing, HMAC receipts, schema-driven config |

Notably, most projects converge on OpenAI-compatible providers, but differentiation emerges in deployment models: desktop-first (Hermes), embedded/IoT (PicoClaw), or cloud-native (IronClaw).

---

### **6. Community Momentum & Maturity**  

- **Rapidly Iterating**: OpenClaw and ZeroClaw exhibit sprint-like velocity with daily merges and beta cadences, signaling aggressive feature development.
- **Stabilizing/Maturing**: NanoBot, Hermes, and IronClaw show steady maintenance with fewer breaking changes, focusing on hardening rather than expansion.
- **Niche or Declining**: Moltis and LobsterAI have minimal activity; the latter faces geographic API limitations that constrain global usability.
- **Emerging**: CoPaw demonstrates strong contributor engagement (22 PRs, 13 issues) but must address UX friction to scale beyond early adopters.

Overall, the ecosystem is bifurcating into two tiers: high-velocity platforms (OpenClaw, ZeroClaw) versus specialized, stability-focused tools (NanoBot, Hermes).

---

### **7. Trend Signals**  

- **Demand for Cross-Platform Clients**: Linux/Windows app requests (#75, #4025) signal shift from mobile-first to desktop/server agent dominance.
- **Security by Default**: Unauthenticated gateways (CoPaw #4037), secret leaks (Hermes #19897), and sandbox escapes (PicoClaw #2688) push hardening into core design.
- **Observability as a Feature**: Progress tracking (#886), token logging (#6357), and RPC tracing (Moltis #965) reflect need for debuggability in autonomous agents.
- **Local LLM Integration Gap**: Requests for llama.cpp support (#2234, #28) reveal tension between cloud reliance and sovereignty/autonomy demands.
- **Cost Transparency**: Silent zero-cost records (#6356) and per-provider pricing (#6357) highlight monetization awareness even in OSS.

For AI agent developers, these trends favor projects offering granular control, secure defaults, and clear upgrade paths—making OpenClaw and ZeroClaw strategic choices despite their complexity.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – May 5, 2026**

---

### 1. Today's Overview  
NanoBot shows strong development momentum with 19 PR updates and 8 issue updates in the past 24 hours, reflecting active maintenance and feature evolution. The project remains stable with no new releases but demonstrates consistent responsiveness to user-reported bugs and enhancement requests. High-velocity activity centers on provider reliability, session continuity, and multi-agent orchestration—particularly for Hugging Face Spaces deployments.

---

### 2. Releases  
No new releases published today. Last known version remains **v0.1.5.post3**.

---

### 3. Project Progress  
**Merged/Closed PRs (key highlights):**
- **#3616**: Fixes DeepSeek-V4 `reasoning_content` handling by backfilling missing fields instead of dropping history (#3554, #3584) — resolves a regression affecting reasoning models.
- **#3613**: Expands shell command safety guard exemptions (`/dev/*` paths), preventing false positives that blocked legitimate operations like `/dev/null` redirection.
- **#3612**: Implements `nanobot provider logout <provider>` CLI command for OpenAI Codex and GitHub Copilot OAuth cleanup — directly addresses user confusion about credential management.
- **#3607**: Adds WhatsApp voice message download support via bridge layer, resolving silent failures when processing audio attachments.
- **#3281**: Makes memory consolidation ratio configurable (default: 0.5), enabling users to tune long-term memory fidelity vs. compression trade-offs.

---

### 4. Community Hot Topics  
Top community discussions reflect demand for **resilient LLM routing** and **session-aware task anchoring**:
- **[Issue #3376](https://github.com/HKUDS/nanobot/issues/3376)** (13 comments, 👍1): Strong user push for cross-provider/model failover beyond intra-provider retries. Users already configure multiple providers but lack automatic fallback on timeouts or 429/5xx errors—critical for production reliability.
- **[PR #3622](https://github.com/HKUDS/nanobot/pull/3622)** (opt-in focus persistence via `my` tool): Direct implementation of [Issue #3292](https://github.com/HKUDS/nanobot/issues/3292), which describes the need for agents to retain primary task context across interruptions—mimicking human "task board" mental state. This signals growing interest in cognitive realism.
- **[PR #3624](https://github.com/HKUDS/nanobot/pull/3624)** (hallucinated tool-call guard): Introduces AI-powered detection of natural-language claims without actual tool execution (e.g., “I’ve added the meeting…”), addressing trust gaps in agent autonomy.

These topics indicate strategic focus areas: **fault tolerance**, **cognitive consistency**, and **verifiable action**.

---

### 5. Bugs & Stability  
Newly reported stability issues:
- **[Issue #3618](https://github.com/HKUDS/nanobot/issues/3618)** (**High Severity**): Regional model unavailability (403) caused widespread task failures from April 25–May 4. User workaround required reinstall; root cause appears tied to geoblocking logic not respecting updated account regions. No fix PR yet, but high visibility suggests urgency.
- **[Issue #3625](https://github.com/HKUDS/nanobot/issues/3625)** (**Medium Severity**): WhatsApp token-stream fragmentation when using providers with `supports_progress_deltas=True`. Each token becomes a separate message, degrading UX. Affects OpenAI Codex users primarily. No fix PR submitted yet.

Both issues impact core messaging channels and require prompt attention to maintain user trust.

---

### 6. Feature Requests & Roadmap Signals  
User-driven features likely heading into next cycle:
- **Multi-provider failover chain** (#3376): Already has traction (13+ comments). Given LiteLLM integration patterns elsewhere in the codebase, expect this to evolve into a formal “fallback chain” config option soon.
- **Xiaomi MiMo custom provider documentation** (#3617 → PR #3619): Rapid progression from request to doc PR indicates strong demand for OpenAI-compatible API support beyond mainstream vendors.
- **Tool hint length control** (PR #3623): Addresses readability in chat UIs (Telegram etc.). Low effort, high UX value—likely to be merged quickly.
- **HF Spaces multi-agent squad deployment** (PR #3621): Experimental but signals expansion into collaborative agent ecosystems, especially for cloud-hosted demos.

---

### 7. User Feedback Summary  
**Pain Points:**
- Lack of cross-provider resilience undermines reliability despite multi-provider setups.
- Session interruptions break task continuity—users want “context anchors.”
- Silent failures on regional model access and WhatsApp audio degrade perceived robustness.
- Hardcoded UI truncation lengths hurt usability for long commands.

**Satisfaction Signals:**
- Rapid resolution of DeepSeek reasoning issues (#3616) and logout functionality (#3612) shows responsive debugging.
- Positive reception to memory consolidation tuning (#3281) reflects appreciation for fine-grained control.

---

### 8. Backlog Watch  
**Long-standing unresolved items needing maintainer bandwidth:**
- **[Issue #2804](https://github.com/HKUDS/nanobot/issues/2804)** (DuckDuckGo web search hangs indefinitely): Open since April 5; affects core `web_search` utility. Requires async/threading fix in `ddgs.text()` call. No recent progress.
- **[PR #2438](https://github.com/HKUDS/nanobot/pull/2438)** (MCP ImageContent support): Stalled since March 24. Blocks richer MCP tool outputs (charts, graphs). Needs review or alternative implementation.

Both items represent foundational gaps in external integrations that hinder advanced use cases.

--- 

*Data as of 2026-05-05 UTC*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest – May 5, 2026**

---

### 1. **Today's Overview**
Hermes Agent shows robust community engagement with 50 new issues and 50 PRs updated in the last 24 hours, indicating active development and user involvement. Despite high activity, no new releases were shipped today, suggesting the team is focused on stabilizing recent changes rather than cutting a release. The project continues to prioritize CLI stability (notably macOS/Linux crashes), gateway platform reliability (Feishu/WeCom/WSL edge cases), and security hardening around credential exposure.

---

### 2. **Releases**
No new releases published today. Last release remains v0.12.0 (April 30, 2026).

---

### 3. **Project Progress**
- **Merged PRs**: 20 closed PRs addressed critical regressions including FTS5 query parsing (#19952), WeCom markdown truncation (#19811), and ACP todo rendering (#17658).
- **Notable Fixes**:
  - Fixed virtual row height cache drift causing TUI transcript blanks (#19948 → addresses #19944)
  - Hardened config parsing for empty `voice.record_key` to prevent startup crashes (#19945 → resolves #19915)
  - Bounded adapter disconnect timeouts to avoid gateway shutdown hangs on flaky WSL networks (#19946 → fixes #19937)

---

### 4. **Community Hot Topics**
- **[Issue #19903](https://github.com/NousResearch/hermes-agent/issues/19903)**: CLI crash due to unsupported `c-S-c` keybinding in prompt_toolkit (P0). High comment volume (7) reflects widespread impact across OS platforms.
- **[PR #19956](https://github.com/NousResearch/hermes-agent/pull/19956)**: Discord guild-level free-response mode enables opt-in bypass of @mention requirements—directly responding to power-user demand for flexible access control.
- **[Security Issue #19897](https://github.com/NousResearch/hermes-agent/issues/19897)**: API keys exposed in Telegram/Discord chats due to misconfigured `HERMES_REDACT_SECRETS` flag (P0). Highlights urgent need for secure defaults.

---

### 5. **Bugs & Stability**
| Severity | Issue | Description | Fix Status |
|--------|-------|-------------|------------|
| P0 | [#19903](https://github.com/NousResearch/hermes-agent/issues/19903) | CLI crashes on all platforms at startup due to invalid Shift modifier binding | ✅ Fixed in #19945 |
| P0 | [#19897](https://github.com/NousResearch/hermes-agent/issues/19897) | Sensitive env vars leaked in chat output via gateways | ⏳ No fix yet |
| P0 | [#4427](https://github.com/NousResearch/hermes-agent/issues/4427) | Env var sanitization bypass via `/proc/environ` | ⏳ No fix yet |
| P2 | [#19280](https://github.com/NousResearch/hermes-agent/issues/19280) | Terminal resize causes TUI status bar duplication on macOS | ✅ Fixed in #19948 |

> **Root Cause**: Multiple P0 bugs stem from improper input validation in CLI keybindings and config handling, now being systematically hardened.

---

### 6. **Feature Requests & Roadmap Signals**
- **Discord Guild Flexibility** (#19956): Strong signal toward per-platform access control customization.
- **Provider Ecosystem Expansion**: New built-in provider support (CrofAI via #19954) suggests roadmap focus on OpenAI-compatible provider integrations.
- **Session Visibility Improvements**: Two related features (#19816, #19818) request real-time session state writes and continuity linking—indicating growing agentic workflow use cases.
- **Enhanced Observability**: Request to expand `runtime_footer` metrics (#19922) points toward operational tooling needs for multi-agent deployments.

---

### 7. **User Feedback Summary**
- **Top Pain Points**:
  - **CLI Instability**: Startup crashes affect basic usage (especially on macOS/Linux).
  - **Gateway Reliability**: Feishu/WeCom adapters suffer from silent disconnections in WSL environments.
  - **Security Misconfigurations**: Users unaware that secret redaction isn’t enabled by default.
  - **TUI Responsiveness**: Transcript rendering glitches degrade long-session experience.
- **Positive Signals**: Community actively contributes fixes; e.g., #19948 directly addressed a complex TUI caching bug reported by a user.

---

### 8. **Backlog Watch**
- **[Issue #19897](https://github.com/NousResearch/hermes-agent/issues/19897)**: Security regression exposing API keys—requires immediate attention due to production risk.
- **[Issue #4427](https://github.com/NousResearch/hermes-agent/issues/4427)**: Subprocess environment leak—long-standing issue needing deeper audit of subprocess isolation.
- **[PR #11103](https://github.com/NousResearch/hermes-agent/pull/11103)**: Signal platform precedence fix pending merge after 2+ weeks; impacts operator configurability.

> Maintainers should prioritize these items before next release cycle to ensure system-wide security and reliability.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – May 5, 2026**

---

### **1. Today’s Overview**  
PicoClaw shows robust development activity with 60 PR updates and 29 issue updates in the last 24 hours, indicating strong contributor engagement. No new releases were published today, but multiple high-impact features and bug fixes are under active review or recently merged. The project continues to prioritize extensibility (e.g., new providers, tools) and stability improvements across channels, providers, and agent tooling.

---

### **2. Releases**  
No new releases were made on 2026-05-05.

---

### **3. Project Progress**  
Several significant enhancements and fixes were merged or closed in the past day:
- **Tool & Agent UX**: Added `update_plan` tool from OpenClaw for structured progress tracking ([PR #2765](https://github.com/sipeed/picoclaw/pull/2765)); improved Telegram media group handling ([PR #2758](https://github.com/sipeed/picoclaw/pull/2758)); fixed HTML escaping in tool feedback via `PrettyPrint`/`DisableEscapeHTML` flags ([PR #2670](https://github.com/sipeed/picoclaw/pull/2670)).
- **Provider Support**: Introduced Gemini web search provider ([PR #2763](https://github.com/sipeed/picoclaw/pull/2763)); enabled ChatGPT OAuth subscription support with proper streaming reconstruction ([PR #2679](https://github.com/sipeed/picoclaw/pull/2679)).
- **Session Management**: Implemented `/status`, `/compact`, `/new` commands for manual context control ([PR #2491](https://github.com/sipeed/picoclaw/pull/2491)).
- **Config Fixes**: Resolved YAML config parsing for `web_search` tool and ensured explicit `mention_only=false` is preserved in group triggers ([PR #2647](https://github.com/sipeed/picoclaw/pull/2647), [PR #2565](https://github.com/sipeed/picoclaw/pull/2565)).

These changes reflect ongoing investment in usability, multi-channel reliability, and provider interoperability.

---

### **4. Community Hot Topics**  
Top discussions center around **voice interaction capabilities** and **authentication/authorization**:
- **[Issue #1648](https://github.com/sipeed/picoclaw/issues/1648)**: Feature request for TTS/ASR integration—already has a related PR (#1642) awaiting gateway integration. High community interest in multimodal agent functionality.
- **[Issue #28](https://github.com/sipeed/picoclaw/issues/28)**: Request for LM Studio easy connect—user-friendly provider onboarding remains a recurring theme.
- **[Issue #1067](https://github.com/sipeed/picoclaw/issues/1067)**: Authula integration proposal for enterprise-grade auth—aligns with growing demand for secure, production-ready deployments.

These topics signal strong user desire for richer agent modalities and better access control.

---

### **5. Bugs & Stability**  
Critical issues reported include:
- **High Severity**:  
  - **Auth regression**: Valid API keys failing across providers due to missing Authorization headers in `openai_compat` provider ([Issue #2578](https://github.com/sipeed/picoclaw/issues/2578))—likely impacting all HTTP-based model usage.
  - **Sandbox escape vulnerability**: `find /` bypasses workspace restrictions, enabling filesystem enumeration ([Issue #2688](https://github.com/sipeed/picoclaw/issues/2688)).
- **Medium Severity**:  
  - Gateway not starting with configured channels in v0.2.7–v0.2.8 ([Issues #2690](https://github.com/sipeed/picoclaw/issues/2690), [#2742](https://github.com/sipeed/picoclaw/issues/2742)).
  - Codex OAuth returning empty responses despite valid streaming ([Issue #2674](https://github.com/sipeed/picoclaw/issues/2674))—fix PR #2679 addresses this.
- **Fixes In Progress**:  
  Multiple PRs targeting these bugs (e.g., #2679, #2581) suggest rapid response from maintainers.

---

### **6. Feature Requests & Roadmap Signals**  
Key user-requested features that may influence next release:
- **TTS/ASR support** (Issue #1648): Likely high-priority given existing PR and architectural design docs.
- **LM Studio native integration** (Issue #28): Simplifies local LLM usage—low-hanging fruit for adoption.
- **Search API fallback chains** (Issue #2582): Enhances reliability of web search tools.
- **Raspberry Pi Zero 2W support** (Issue #2675): Expands embedded deployment reach.
- **OTel GenAI observability** (Issue #1731): Enterprise observability alignment.

The inclusion of session management (`/status`, `/compact`) and dynamic skill tools indicates a strategic shift toward richer agent lifecycle control.

---

### **7. User Feedback Summary**  
Users express frustration over:
- **Broken authentication flows** (especially OAuth and API key validation).
- **Inconsistent channel initialization** after upgrades.
- **Lack of progress feedback during long-running tool executions** (addressed partially by new `update_plan` tool).

Positive signals include appreciation for:
- Multi-language UI support (pt-br added).
- Flexible tool configuration (YAML tags now supported).
- Active maintenance responsiveness (multiple hotfixes within days).

Use cases highlighted: personal AI assistants, embedded automation, enterprise agent orchestration.

---

### **8. Backlog Watch**  
Watchlist for maintainer attention:
- **[Issue #1648](https://github.com/sipeed/picoclaw/issues/1648)**: TTS/ASR feature stalled since March—requires gateway integration decision.
- **[Issue #618](https://github.com/sipeed/picoclaw/issues/618)**: Self-upgrade mechanism still incomplete after 3+ months; critical for security/maintenance.
- **[PR #1642](https://github.com/sipeed/picoclaw/pull/1642)**: Audio-related implementation pending merge and testing.

These items represent technical debt and potential friction points affecting user retention and ecosystem growth.

--- 

*Data as of 2026-05-05 | Source: GitHub API*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – May 5, 2026**

**1. Today’s Overview**  
NanoClaw remains highly active with 34 pull requests updated in the last 24 hours—19 merged—and 5 new issues opened, signaling strong development velocity and community engagement. The project continues to prioritize stability fixes around container configuration, chat adapter updates, and WhatsApp integration, while also expanding channel support (e.g., Telegram UX improvements). No new releases were published today, but multiple hotfixes and feature skills are nearing completion.

**2. Releases**  
No new releases published as of May 5, 2026.

**3. Project Progress**  
- **Merged/Closed PRs**: 19 closed today, including critical infrastructure fixes such as dynamic MCP tool registration (#2242), WhatsApp LID migration cleanup (#2260), and PATH injection for post-install CLI access (#2055).  
- **Notable Advances**: A full cohort bump of `@chat-adapter/*` to v4.27.0 resolves Discord card duplication across all channel-install skills (#2266); WhatsApp now uses Baileys v7 for reliable LID handling (#2259); and `send_card` functionality is restored via Chat SDK bridge (#2265).

**4. Community Hot Topics**  
The most-discussed open issue (#2234) asks whether NanoClaw supports `llama.cpp`, reflecting user demand for local LLM compatibility beyond Claude Code. Though only one comment so far, it highlights a growing trend toward self-hosted or offline AI assistants. No PR currently addresses this, suggesting a potential gap in documentation or roadmap alignment with llama.cpp ecosystems.

**5. Bugs & Stability**  
Three high-severity bugs reported today:
- **#2257 (High)**: Silent wipe of `container.json` on container spawn—fix underway in #2255 (path correction PR).
- **#2263 (Medium)**: `send_card` no-op on Chat SDK channels—**already fixed** in PR #2265.
- **#2264 (Medium)**: Discord card duplication due to pinned `@chat-adapter/discord@4.26.0`—**resolved** by cohort bump in #2266.

All reported regressions have immediate fix candidates, indicating responsive triage.

**6. Feature Requests & Roadmap Signals**  
Users are actively requesting richer messaging capabilities:
- Per-wiring channel permissions (read/write modes) proposed in #2248,
- Enhanced Telegram setup UX with QR codes and mobile fallbacks (#2246, #2249),
- Media transformation via ffmpeg MCP server (#2261, duplicate of earlier closed PR).

These signal a focus on granular control, cross-platform usability, and extensibility—particularly around media and multi-session coordination.

**7. User Feedback Summary**  
Real-world pain points center on:
- **Silent data loss** from corrupted container configs (“my mounts vanished”),
- **Duplicate messages** in Discord and general chat outputs,
- **Frustration with WhatsApp session splitting** due to legacy LID handling.

Satisfaction appears tied to rapid bug resolution; users report appreciation for quick fixes (e.g., Discord card issue addressed within hours). However, lack of official llama.cpp support may deter non-Claude deployments.

**8. Backlog Watch**  
Issue #2234 (llama.cpp compatibility) remains unanswered despite its relevance to evolving open-source AI agent trends. While not yet classified as “stale,” it warrants maintainer input to clarify current capabilities or outline future plans. No other long-unanswered critical issues observed today.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

### **NullClaw Project Digest – May 5, 2026**

---

#### **1. Today's Overview**  
NullClaw shows steady development activity with 8 total updates in the last 24 hours: 3 issues and 5 pull requests. One new release (v2026.5.4) was published, indicating regular maintenance cadence. The project continues to prioritize security hardening (e.g., sandbox improvements), cross-platform build compatibility (Zig v0.16 fixes), and experimental features like a Data Governance Layer for an upcoming hackathon. Overall, momentum is stable with no major blockers reported.

---

#### **2. Releases**  
**v2026.5.4**  
- Includes critical fixes for Agent Skills RFC 0.2.0 compliance and enhanced reliability of the Web Skill fetch mechanism.  
- Addresses a Zig stdlib regression affecting process execution safety.  
- No breaking changes noted; this is a maintenance-focused patch release.

---

#### **3. Project Progress**  
**Merged/Closed PRs Today:**  
- **#888**: Version bump for v2026.5.4 ([link](https://github.com/nullclaw/nullclaw/pull/888))  
- **#884**: Added critical Zig test coverage for high-risk runtime contracts and fixed production edge cases ([link](https://github.com/nullclaw/nullclaw/pull/884))  

These reflect ongoing investment in test robustness and release hygiene.

---

#### **4. Community Hot Topics**  
- **Issue #886** ([link](https://github.com/nullclaw/nullclaw/issues/886)): Strong user demand for visibility into agent reasoning during long-running tasks (e.g., email parsing). Zero engagement yet but signals need for UX transparency.  
- **Issue #871** ([link](https://github.com/nullclaw/nullclaw/issues/871)): Recurring concern about `web_search` inefficiency on low-resource devices—users seek lightweight alternatives without external API dependencies. Underlying need: resource-constrained deployment viability.  
- **PR #885** ([link](https://github.com/nullclaw/nullclaw/pull/885)): Bold experimental feature introducing a *Data Governance Layer* as part of a hackathon entry. Suggests strategic interest in enterprise-grade data control and compliance.

---

#### **5. Bugs & Stability**  
No new critical bugs reported today. However:  
- **Issue #871** remains open and labeled as a **critical bug** regarding `web_search` impracticality on weak hardware. Affects core functionality for constrained environments.  
- No associated fix PRs currently exist; community may be awaiting architectural solutions.

---

#### **6. Feature Requests & Roadmap Signals**  
- **Thinking/reasoning visibility** (#886): High-priority UX request from active users. Likely to be prioritized ahead of v2026.5.5 given its impact on debugging and trust.  
- **Sandbox optimization** (#882): Request to default to Landlock and eliminate startup probing. Aligns with security best practices—could appear in next minor release if tested.  
- **Data Governance Layer** (#885): Experimental but signals future direction toward regulated or enterprise use cases.

---

#### **7. User Feedback Summary**  
Users express frustration with:  
- Lack of progress indicators during lengthy operations (e.g., Outlook MCP integration).  
- Overhead of `web_search` on embedded or low-memory systems.  
- Startup performance due to sandbox tool probing.  

Positive signals include active participation in hackathons and willingness to contribute advanced features (e.g., data governance). Satisfaction appears mixed: core functionality works, but observability and edge-case handling need refinement.

---

#### **8. Backlog Watch**  
- **Issue #871** (Created Apr 25, Updated May 4): Critical usability blocker for low-resource deployments. Needs maintainer response to avoid alienating embedded/IoT target users.  
- **PR #885** (Draft): While tagged for hackathon, it introduces potentially valuable infrastructure. Requires deeper review to assess long-term alignment with project goals.

--- 

*Note: All links assume base URL `https://github.com/nullclaw/nullclaw`.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – May 5, 2026**

---

### 1. Today's Overview  
IronClaw shows strong development momentum with 19 pull requests updated in the last 24 hours—8 merged/closed and 11 still open—indicating active feature work and maintenance. Two new issues were opened, both related to Reborn enhancements: one proposing a visibility-only capability catalog service, and another calling for declarative configuration-as-code via tenant blueprints. No releases occurred today. Overall activity remains high across core infrastructure, memory subsystems, event stores, and channel integrations.

---

### 2. Releases  
No new releases were published today.

---

### 3. Project Progress  
Eight pull requests were merged or closed in the past day:
- **PR #3180–#3185** (Reborn memory stack): Fully integrated native-isolated guardrails and split `lib.rs`, including LibSQL and PostgreSQL backend implementations for Reborn’s memory document layer (#3180–#3185).
- **PR #3242**: Added missing mission.md documentation file.
- **PR #3241**: Extended Abound demo support for target rate checking and mission termination logic.
- **PR #2390**: Fixed OpenAI-compatible vision image detail defaulting to `auto` to resolve provider compatibility errors.

These advances reflect progress on Reborn substrate stabilization, CI resilience improvements, and user-facing integration polish.

---

### 4. Community Hot Topics  
Two issues generated meaningful discussion recently:

- **[Issue #3036](https://github.com/nearai/ironclaw/issues/3036)** – *Configuration-as-Code for IronClaw Reborn*: An EPIC requesting declarative tenant blueprints and use-case harnesses. Three comments indicate operator demand for schema-backed, auditable configuration workflows beyond manual `.env` and JSON edits. This signals growing need for IaC-style tooling within multi-tenant environments.
  
- **[Issue #3090](https://github.com/nearai/ironclaw/issues/3090)** – *ToolSurfaceService / CapabilityCatalog*: Proposal for a host-owned visibility service that exposes model-visible tools without granting authority. Though only one reaction (👍), it aligns closely with security-first design principles under active development.

Both reflect strategic direction toward safer, observable, and operator-friendly runtime behavior.

---

### 5. Bugs & Stability  
No new bugs or regressions were reported today. However, **PR #3235** addresses a critical CI failure affecting Live Canary auth lanes due to engine-v2 contract changes introduced on May 1st—highlighting ongoing stability risks during major architectural transitions. While not a user-facing crash, this underscores the fragility of automated validation pipelines post-cutover.

---

### 6. Feature Requests & Roadmap Signals  
Key feature signals include:
- **Declarative Configuration** (Issue #3036): Strong implicit request from operators for infrastructure-as-configuration patterns.
- **Credential Signing Flexibility** (PR #3240): New WASM-per-request signing schemes (HMAC, EIP-712, NEP-413) suggest expansion into blockchain and secure API authentication domains.
- **WeChat Channel Support** (PR #1666): First-party Chinese-market messaging integration points to geographic expansion efforts.

Given current velocity, declarative configuration and Reborn-native event projection services are likely candidates for inclusion in upcoming minor releases.

---

### 7. User Feedback Summary  
Pain points highlighted by recent contributions center on:
- **Operational Complexity**: Manual config editing without schema or diff support (Issue #3036).
- **Provider Compatibility**: Vision systems failing silently due to missing OpenAI `detail` parameter (fixed in PR #2390).
- **Authentication Rigidity**: Need for dynamic credential signing per request in decentralized contexts (PR #3240).

Users appear technically sophisticated but frustrated by fragmented configuration surfaces and opaque error handling—especially around vision APIs and approval gates.

---

### 8. Backlog Watch  
- **[Issue #3036](https://github.com/nearai/ironclaw/issues/3036)**: High-priority EPIC requiring maintainer scoping for configuration-as-code architecture. No clear ownership yet; overdue for triage.
- **[PR #1666](https://github.com/nearai/ironclaw/pull/1666)** (WeChat channel): Active since March 26, updated May 4—appears stalled despite recent activity. May need maintainer review to unblock or reassign.
- **[PR #3240](https://github.com/nearai/ironclaw/pull/3240)**: New contributor submission on per-request credential signing; low engagement may indicate need for guidance or scope clarification.

Maintainers should prioritize reviewing Issue #3036 and confirming roadmap alignment for WeChat/credential features.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – May 5, 2026**

---

### 1. **Today's Overview**  
LobsterAI showed modest activity over the past 24 hours, with one issue closed and two open pull requests (PRs) updated. The project remains in active development, focusing on dependency maintenance and performance optimization. No new releases were published, indicating continued stabilization before a potential next version. Overall, the project health appears stable with routine maintenance and incremental improvements underway.

---

### 2. **Releases**  
*No new releases were published today.*

---

### 3. **Project Progress**  
- **#1877**: Issue resolved regarding OpenAI authentication failure due to regional restrictions. The user confirmed local Codex functionality works, suggesting the issue is tied to geographic access controls rather than code defects.  
*(GitHub Link: [netease-youdao/LobsterAI#1877](https://github.com/netease-youdao/LobsterAI/issues/1877))*

No merged PRs advanced core features today; development focus remains on internal tooling and performance enhancements.

---

### 4. **Community Hot Topics**  
Currently, no issues or PRs generated significant engagement (>2 comments or reactions). However, **PR #811** stands out for its technical depth—introducing an O(1) lookup mechanism for streaming message updates in the cowork module. This reflects growing demand for scalability in long-lived chat sessions.  
*(GitHub Link: [netease-youdao/LobsterAI#811](https://github.com/netease-youdao/LobsterAI/pull/811))*

While not highly reactive yet, this PR signals backend efficiency priorities aligned with real-world usage patterns.

---

### 5. **Bugs & Stability**  
**Issue #1877** reported a critical but environment-specific bug: users outside supported regions encountered HTTP 403 errors during OpenAI token exchange when using ChatGPT integration. Though the underlying API constraint is external, the error surfaced in LobsterAI’s auth flow.  
- **Severity**: Medium (affects international users)  
- **Status**: Closed as “not actionable” by maintainers (user workaround available via local models)  
- **Fix PR**: None required—issue stems from OpenAI’s geo-restrictions, not code flaws  

*(GitHub Link: [netease-youdao/LobsterAI#1877](https://github.com/netease-youdao/LobsterAI/issues/1877))*

No crashes or regressions reported today.

---

### 6. **Feature Requests & Roadmap Signals**  
The closed issue hints at expanding multi-region support or alternative LLM providers to reduce dependency on region-locked APIs. Meanwhile, **PR #811** suggests upcoming optimizations for real-time collaboration features, possibly targeting enterprise or team-use cases where message latency matters.

Given the electron dependency update (#1277), future releases may include UI/UX refinements or Electron 41 compatibility improvements.

---

### 7. **User Feedback Summary**  
Key pain point: **Geographic access limitations** blocking global users from cloud-based AI services. Users express frustration over opaque regional blocks despite working locally.  
Secondary signal: Performance concerns in large conversational contexts, driving interest in indexing optimizations.  

Overall sentiment appears neutral-to-satisfied, with users leveraging local models as a viable alternative.

---

### 8. **Backlog Watch**  
**PR #811** has been open since March 25 and updated recently—it addresses a clear performance bottleneck but awaits review. Given its technical merit and alignment with scalability needs, it merits prompt maintainer attention.  
**PR #1277** (dependency update) is low-risk but also pending final review.

Both represent opportunities to advance code quality and stability ahead of a planned release cycle.

--- 

*Data source: GitHub API snapshot @ 2026-05-05 00:00 UTC*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – May 5, 2026**

---

### 1. **Today’s Overview**  
The Moltis project shows moderate activity with one newly reported bug and one merged PR focused on CI diagnostics. No new releases were published today. The team continues to prioritize stability and observability, as evidenced by the recent logging improvements in PR #965. Overall, the project maintains steady maintenance momentum with minimal high-priority disruptions.

---

### 2. **Releases**  
No new releases have been published since the last update.

---

### 3. **Project Progress**  
- **PR #965** (`debug(e2e): add RPC logging + gateway.log capture for CI diagnosis`) was merged today (May 4). This enhancement improves debuggability by capturing WebSocket RPC method calls, timing metrics, connection events, and stderr output during CI runs—directly addressing intermittent test timeouts that occur locally but fail in CI due to unobserved hangs.

---

### 4. **Community Hot Topics**  
No issues or PRs received comments or reactions today. The most active item is the newly opened bug report (#964), which highlights a concurrency issue in parallel tool execution within Docker sandboxes. While not yet discussed, this signals growing user reliance on concurrent operations and potential scalability challenges under containerized workloads.

---

### 5. **Bugs & Stability**  
- **Issue #964**: Reports sandbox name collisions when running tools in parallel using Docker.  
  - **Severity**: Medium (impacts reliability of concurrent workflows)  
  - **Status**: Open, no fix PR submitted yet.  
  - **Link**: [moltis-org/moltis#964](https://github.com/moltis-org/moltis/issues/964)

This bug could affect users leveraging Moltis for multi-agent or batch processing scenarios requiring isolated execution environments.

---

### 6. **Feature Requests & Roadmap Signals**  
No feature requests were submitted today. However, the recent focus on RPC logging and CI resilience in PR #965 suggests an emerging emphasis on observability and debugging infrastructure—potentially paving the way for future enhancements in real-time monitoring or distributed tracing.

---

### 7. **User Feedback Summary**  
The primary pain point surfaced today relates to inconsistent behavior between local development and CI environments due to insufficient visibility into RPC-level interactions. Users appear increasingly dependent on reliable parallel execution (especially in containerized contexts), making sandbox isolation a critical quality-of-life factor. There is no indication of dissatisfaction with core functionality beyond this specific concurrency edge case.

---

### 8. **Backlog Watch**  
No long-unanswered issues or PRs require immediate attention based on today’s snapshot. All items are either recently active or remain open without community engagement. Maintainers should monitor Issue #964 for follow-up from the reporter to determine feasibility of resolution.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – May 5, 2026**

---

### 1. Today's Overview  
The CoPaw project shows strong development momentum with 22 pull requests updated in the last 24 hours—15 merged and 7 still open—and 13 new issues opened, indicating active user engagement and ongoing feature refinement. No new releases were published today, but multiple bug fixes and enhancements are under review or recently completed. The high volume of PR activity suggests contributors are actively addressing stability concerns and improving usability, particularly around tool execution, environment compatibility, and multi-agent workflows.

---

### 2. Releases  
No new releases were made today. The latest stable version remains **v1.1.5**, with beta builds (e.g., `1.1.6b1`) being tested internally or via community feedback.

---

### 3. Project Progress  
**Merged/Closed PRs (last 24h):**  
- **#1508**: Fixed missing dependencies in Docker image by adding "full" extra install; resolved silent failures during containerized runs.  
- **#763**: Improved error visibility for iMessage channel crashes on macOS due to missing Full Disk Access.  
- **#756**: Corrected Azure OpenAI connection test for GPT-5/o-series models using `max_completion_tokens`.  
- **#2520**: Added preflight checks for model activation to surface provider compute errors early.  
- **#2052 & #1977**: Harden MCP teardown and cron runtime exception handling to prevent silent shutdown noise.  

These merges reflect a focus on **reliability**, **diagnostics**, and **cross-platform robustness**.

---

### 4. Community Hot Topics  
Top-discussed items (by comment activity) reveal core user interests:  
- **#4023 (Input lag)**: Users report severe UI stuttering in the Console input field—likely tied to streaming or event-loop performance under load.  
- **#4024 (Hermes upgrade path)**: A feature request to adopt Hermes-style reasoning traces or agent orchestration mechanisms, signaling demand for more transparent AI behavior.  
- **#4037 (Unauthenticated HTTP gateway)**: Security-conscious users highlight that the default unauthenticated `/api` endpoint exposes dangerous tools (`execute_shell_command`). This is a top-priority concern requiring immediate hardening.  

These topics point to growing expectations around **transparency**, **security**, and **real-time responsiveness**.

---

### 5. Bugs & Stability  
New bugs reported today include:  
1. **#4027**: Intermittent failure to interrupt sessions and unstable Python interpreter targeting in skills—affects reliability of long-running tasks. *(Fix PR #4028 submitted)*  
2. **#4034**: Streaming models (MiMo/DeepSeek) cause ReAct loops to duplicate tool calls and responses—clear UX regression.  
3. **#4033**: MCP tool timeout hardcoded to 30s, ignoring server-configurable limits.  
4. **#3988**: Conda-pack ≤0.7.1 conflicts with `pip install qwenpaw[full]` during Windows packaging due to pip/setuptools upgrades.  

Severity ranking: **High** for #4027 (user control loss), **Medium-High** for #4034/#4033 (core functionality broken). Fix PRs exist for #4027 only.

---

### 6. Feature Requests & Roadmap Signals  
Key requested features suggest upcoming directions:  
- **#4030**: Add Vertex AI Gemini provider (enterprise/GCP users)  
- **#4029**: One-shot cron jobs via `--at <ISO datetime>` (vs. recurring only)  
- **#4031**: Multi-agent session continuity to avoid context fragmentation  
- **#4020**: File read-only enforcement for MEMORY/AGENTS/SOUL.md to prevent accidental overwrites  

These indicate roadmap emphasis on **enterprise integration**, **scheduling flexibility**, **agent collaboration**, and **data integrity**.

---

### 7. User Feedback Summary  
Users express frustration with:  
- **Setup complexity**: Adding new models requires ≥5 UI steps (#4036)  
- **Debugging difficulty**: Lack of stderr/stdout capture in build scripts (#3988)  
- **Security gaps**: Default-exposed shell gateway (#4037)  
- **Platform limitations**: ARM64 GLIBC incompatibility due to Debian 12 base image (#4025)  

Positive signals include appreciation for recent stability improvements in skills execution and MCP diagnostics. Overall sentiment leans toward **critical need for polish and security hardening**, balanced by recognition of rapid iteration.

---

### 8. Backlog Watch  
- **#3829**: Async session title generation via LLM—has been under review since April 25 with no maintainer response despite clear UX value.  
- **#3729**: Windows taskbar icon fix—WIP for nearly 2 weeks; Win32 API implementation may require testing on target OS.  

Both require maintainer attention to unblock contributors and deliver promised improvements.

--- 

*Data source: agentscope-ai/QwenPaw GitHub repository (as of 2026-05-05)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – 2026-05-05**

---

### **1. Today's Overview**  
The project shows high development velocity with 50 issues and 50 PRs updated in the last 24 hours, indicating an active sprint focused on configuration robustness, channel reliability, and observability hardening. No new releases were published today. Overall activity is healthy but concentrated around breaking changes for v0.8.0 (e.g., schema migration), requiring careful coordination.

---

### **2. Releases**  
*No new releases since the last digest.*

---

### **3. Project Progress**  
- **Merged/Closed PRs**: 21 closed PRs (including fixes for Matrix duplicate replies, WhatsApp self-chat scoping, Jira auth improvements, cost tracking, memory recall, and CI toolchain updates).  
- **Key advances**:  
  - Schema v3 migration prep landed in #6266 (targeting integration/v0.8.0).  
  - HMAC tool receipts reactivated (#6214), restoring security feature parity per docs.  
  - Per-provider pricing model introduced (#6357), enabling granular cost tracking across multi-vendor setups.  
  - WhatsApp cron delivery now supported (#6230, #6261).  

All merged PRs address regressions or low-risk enhancements; no major breaking changes finalized yet.

---

### **4. Community Hot Topics**  
Top issues by engagement reflect core infrastructure concerns:  
- **Default model config failure on fresh installs** (#6123): 15 comments; blocks out-of-box UX. Underlying need: robust provider auto-discovery during `onboard`.  
- **DeepSeek-V4 API incompatibility** (#6059): 8 comments; disrupts users relying on DeepSeek’s thinking-mode APIs. Signals demand for provider-specific request shaping.  
- **Release automation scope tracking** (#5878): 6 comments; confirms team commitment to standardized release workflows ahead of v0.7.5.  

PRs like #6159 (cost/token logging) and #6357 (per-provider pricing) show strong maintainer focus on operator visibility—critical for production deployments.

---

### **5. Bugs & Stability**  
High-severity bugs remain open but are actively addressed:  
| Issue | Severity | Impact | Fix Status |
|------|----------|--------|------------|
| Context spillage from chat to schedule (#5415) | S0 (data loss/security) | Unauthorized cross-session data leakage | Blocked, needs repro |
| DeepSeek-V4 API format mismatch (#6059) | S2 (degraded) | Blocks DeepSeek usage | Open, no fix PR yet |
| llama-server service failure (#6180) | S1 (workflow blocked) | Breaks local LLM setups | Open, awaiting repro |
| Anthropic temperature field issue (#6147) | S2 (degraded) | May block Claude Opus 4.7 | Investigating |

Fix PRs exist for most medium-risk issues (e.g., #6306 for Matrix duplicates), but critical path items like #5415 require user input before resolution.

---

### **6. Feature Requests & Roadmap Signals**  
Strong signals point to upcoming priorities:  
- **Skills ecosystem expansion**: #6253 (skills UX tracker), #6140 (WASM+SKILL hybrid plugins), and #6165 (lightweight tool removal) indicate a push toward modular, composable agent capabilities.  
- **Channel-native UX**: #6150 requests `/clear` commands in chat interfaces—suggesting a trend toward embedded session management.  
- **Observability defaults**: Closed #5626 implies Prometheus instrumentation may be trimmed post-v0.8.0 unless justified otherwise.  
- **Discord channel filtering**: #6378 shows demand for fine-grained access control beyond guild-level restrictions.  

These align with v0.7.6/v0.8.0 themes: skills maturity, config simplification, and operational clarity.

---

### **7. User Feedback Summary**  
Users report frustration with:  
- **Onboarding friction**: Confusing provider/model selection logic (#6120, #6123) and silent URL mismatches (#6126).  
- **Channel instability**: WhatsApp/Mattermost message handling gaps and transcription failures (#6153).  
- **Cost opacity**: Silent zero-cost records for non-OpenAI/Anthropic providers (#6356) hinder budget monitoring.  

Positive feedback centers on recent fixes: Matrix duplicate elimination (#6306), improved Jira auth (#6116), and dashboard update flows (#6370) enhance reliability for enterprise users.

---

### **8. Backlog Watch**  
- **#5415 (Context spillage)**: Stale since April 6, S0 severity, unblocked only after reproducible test case. High priority for security review.  
- **#6095 / #6147 (Bedrock/Anthropic temperature)**: Both relate to same root cause—temperature field handling varies by vendor. Requires unified provider abstraction update.  
- **#6074 (Lost commits audit)**: Longstanding CI integrity concern; needs historical commit recovery plan before v0.8.0 merge.  

Maintainers should prioritize these to prevent regression into v0.8.0.

--- 

*Data snapshot reflects GitHub activity through 2026-05-05 00:00 UTC.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*