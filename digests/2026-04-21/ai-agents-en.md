# OpenClaw Ecosystem Digest 2026-04-21

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-21 00:26 UTC

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

**OpenClaw Project Digest – April 21, 2026**

### **Today's Overview**
OpenClaw remains highly active with sustained community engagement: 500 issues and PRs updated in the last 24 hours, reflecting ongoing development momentum. The project shows no new releases today, but rapid iteration continues on stability, channel integrations, and UI refinements. With a balanced mix of bug fixes, regressions, and feature work—particularly around gateway reliability and cross-platform support—the project demonstrates strong maintenance responsiveness despite its complexity.

---

### **Releases**
No new releases were published as of April 21, 2026.

---

### **Project Progress**
Among today’s merged/closed pull requests:
- **Telegram proxy media restoration** (PR #66440): Reinstated reliable proxy handling for Telegram downloads.
- **Gateway shutdown robustness** (PR #43961): Ensures stale processes are SIGKILLed if graceful shutdown times out.
- **Codex session lane release** (PR #69072): Fixes frozen channels after Codex turns by releasing session locks properly.
- **Anthropic OAuth refresh token persistence** (implied via closed issue #34117): Earlier fix confirmed in recent commits ensures tokens survive restarts.

These advances address core operational concerns around state management, plugin reliability, and user-facing connectivity.

---

### **Community Hot Topics**
Top-discussed items include:
- **[Linux/Windows ClawdBot Apps](https://github.com/openclaw/openclaw/issues/75)** (#75, 88 comments, 👍71): Strong demand for native desktop clients on non-Apple platforms—highlighting fragmentation in ecosystem accessibility.
- **[GPT-5.4 support misleading](https://github.com/openclaw/openclaw/issues/37623)** (#37623, 16 comments, 👍7): Users confused when configured models appear available but fail at runtime—underscoring need for clearer model validation UX.
- **[CLI hangs at WebSocket handshake](https://github.com/openclaw/openclaw/issues/68944)** (#68944, 5 comments): New regression post-2026.4.15 suggests instability in CLI-gateway handshaking logic.

These reflect urgent needs for platform parity, transparent model support signaling, and CLI resilience.

---

### **Bugs & Stability**
Critical regressions reported today:
1. **[LLM request schema rejection (Azure/GPT)](https://github.com/openclaw/openclaw/issues/65603)** (#65603): Blocks reasoning/tool use on Azure Foundry models—regression since 2026.4.11; no fix PR yet.
2. **[CLI hangs at handshake](https://github.com/openclaw/openclaw/issues/68944)** (#68944): All CLI commands stall after connecting to gateway—new in 2026.4.15; likely tied to auth or routing changes.
3. **[Feishu streaming duplicates](https://github.com/openclaw/openclaw/issues/65993)** (#65993): Long replies split/truncated in Feishu cards—behavioral regression; fix PR may be forthcoming.

A recurring theme is **channel-specific message delivery corruption**, especially in Slack, Discord, and Feishu, indicating gaps in subagent routing logic.

---

### **Feature Requests & Roadmap Signals**
Notably absent from top issues today is native **MCP (Model Context Protocol) integration** (#34097), which has seen 6 comments and 3 upvotes—a clear signal of rising industry alignment toward MCP standards. Additionally:
- **Safe vs. unsafe ClawdBot execution modes** (#6731) suggests interest in sandboxing for security-sensitive deployments.
- **Cross-platform desktop apps** (#75) remain a persistent ask, implying potential roadmap consideration for Electron or Tauri-based binaries.

While not all will land immediately, these reflect strategic directions aligning with broader AI agent tooling trends.

---

### **User Feedback Summary**
Users consistently report:
- **Frustration with opaque model availability**: Configuring GPT-5.4 or similar leads to false confidence followed by runtime errors.
- **Channel fragmentation**: Telegram, WhatsApp, Feishu, and Google Chat exhibit message duplication, timing issues, or authentication failures—especially after upgrades.
- **CLI unreliability**: Recent versions introduce handshake stalls or command hangs, undermining automation workflows.
- **Desire for better governance visibility**: Lack of drift detection for SOUL.md/CONSTITUTION.md files silences coordination risks.

Overall sentiment leans toward appreciation for rapid fixes (e.g., Telegram polling timeout increase), but growing concern over regression frequency in multi-channel environments.

---

### **Backlog Watch**
Several high-impact issues remain unresolved:
- **[Session context corruption loop](https://github.com/openclaw/openclaw/issues/37834)** (#37834): Orphaned tool_use IDs cause infinite 400 loops—created March 6, still open, stale-labeled.
- **[OpenAI Codex OAuth persistence](https://github.com/openclaw/openclaw/issues/52037)** (#52037): Tokens not saved to disk after refresh—critical for headless deployments; no recent activity.
- **[Docker workspaceAccess failure](https://github.com/openclaw/openclaw/issues/31331)** (#31331): Sandboxing breaks Docker-in-Docker mounts—affects enterprise users; needs maintainer triage.

Maintainers should prioritize these to prevent technical debt accumulation in session integrity and auth flows.

---

## Cross-Ecosystem Comparison

**Cross-Project Comparison Report – April 21, 2026**

---

### **1. Ecosystem Overview**  
The personal AI agent open-source landscape is highly active, with projects demonstrating strong development momentum across integrations, stability fixes, and user experience refinements. While most frameworks prioritize multi-channel support, provider reliability, and tooling extensibility, there's a growing convergence toward standards like MCP (Model Context Protocol) and ACP (Agent Communication Protocol). Community engagement remains robust, though fragmentation persists in platform targeting—especially around native desktop clients, cross-platform compatibility, and enterprise-grade security. Overall, the ecosystem is maturing rapidly, balancing rapid iteration with increasing demands for production readiness.

---

### **2. Activity Comparison**  

| Project       | Issues (24h) | PRs (24h) | Merged PRs | Release Status           | Health Score* |
|---------------|--------------|-----------|------------|--------------------------|---------------|
| OpenClaw      | 500          | 500       | ~20+       | Stable; no new release   | High          |
| NanoBot       | 12           | 51        | 30         | v0.1.5.post1             | High          |
| Hermes Agent  | 50           | 50        | 18         | Stable; no new release   | High          |
| PicoClaw      | 13           | 114       | 8          | Nightly v0.2.6+          | Medium-High   |
| NanoClaw      | 1            | 25        | 8          | Stable; no new release   | Medium        |
| NullClaw      | 1            | 3         | 0          | Stable; no new release   | Medium        |
| IronClaw      | 50           | 50        | ~15        | Staging v0.25.0          | High          |
| LobsterAI     | 1            | 50        | 28         | Stable; no new release   | High          |
| TinyClaw      | 0            | 1         | 1          | Stable; no new release   | Low           |
| Moltis        | 9            | 17        | 12         | v20260420.02 (daily)     | Very High     |
| CoPaw         | 42           | 50        | 5          | v1.1.3-beta.1            | High          |
| ZeptoClaw     | 0            | 0         | 0          | Inactive                 | Low           |
| ZeroClaw      | 44           | 50        | 21         | Pre-v1.0; no stable      | High          |

*Health Score*: Based on issue resolution velocity, release cadence, bug severity distribution, and community responsiveness.

---

### **3. OpenClaw's Position**  
OpenClaw remains the de facto core reference implementation, distinguished by its massive scale (500 issues/PRs/day), deep integration breadth, and rapid maintenance response. Its strength lies in operational robustness—particularly around gateway reliability, session management, and cross-platform channel support. While other projects target niche domains (e.g., Moltis’ self-improving agents or ZeroClaw’s microkernel evolution), OpenClaw excels at serving broad, real-world deployments with minimal friction. However, its complexity can hinder adoption for lightweight use cases, where NanoBot or TinyClaw offer leaner alternatives.

---

### **4. Shared Technical Focus Areas**  

| Requirement                     | Projects Involved                          | Notes |
|----------------------------------|--------------------------------------------|-------|
| **MCP Integration**              | OpenClaw (#34097), NanoBot, Hermes, PicoClaw, NanoClaw, Moltis, CoPaw, ZeroClaw | Universal demand for standardized tool calling |
| **OAuth & Auth Resilience**      | OpenClaw, Hermes, PicoClaw, IronClaw, CoPaw | Critical for cloud provider access (Google, Anthropic, etc.) |
| **CLI/Gateway Stability**        | OpenClaw, Hermes, NullClaw, ZeroClaw       | Handshake hangs, process lifecycle, CPU spin bugs |
| **Multi-Channel Message Integrity** | OpenClaw, NanoBot, Hermes, PicoClaw, CoPaw | Duplication, truncation, auth failures in Slack/Discord/Feishu |
| **Desktop Native Clients**       | OpenClaw (#75), Hermes, CoPaw               | Linux/Windows support requested but underdeveloped |
| **Docker & Container Hardening** | Moltis, ZeroClaw, NullClaw, IronClaw       | Sandboxing, WASM security, health checks |

---

### **5. Differentiation Analysis**  

| Project       | Feature Focus                          | Target Users                     | Architecture Trait               |
|---------------|----------------------------------------|----------------------------------|----------------------------------|
| **OpenClaw**  | Broad channel/provider support         | Enterprises, power users         | Monolithic, plugin-heavy         |
| **NanoBot**   | Performance, memory efficiency         | Developers, embedded/IoT         | Lightweight, event-bus oriented  |
| **Hermes**    | Memory systems, TUI, Google bypass     | Researchers, privacy-focused     | Modular, memory-centric          |
| **Moltis**    | Autonomous agents, sandboxing          | AI labs, experimental users      | Self-evolving, sandbox-first     |
| **ZeroClaw**  | Microkernel, ACP compliance            | Platform builders                | RFC-driven, schema-v3 future     |
| **CoPaw**     | Plugin economy, console UX             | SMEs, collaborative teams        | Console-first, skill marketplace |

Notably:
- **Moltis** leads in agentic autonomy (self-improving loops).
- **ZeroClaw** is architecturally forward-looking (microkernel transition).
- **OpenClaw** dominates in scale and ecosystem integration.
- **NanoBot** and **TinyClaw** serve constrained environments.

---

### **6. Community Momentum & Maturity**  

- **Rapid Iterators**: *Moltis*, *PicoClaw*, and *NanoBot* show >100 PRs/day with daily releases or nightlies—indicating aggressive feature development.
- **Stabilizing Players**: *OpenClaw*, *Hermes*, and *IronClaw* focus on hardening existing surfaces despite high activity volume.
- **Niche Specialists**: *CoPaw* (plugin UX), *ZeroClaw* (architecture), and *LobsterAI* (Chinese-market channels) cater to specific workflows.
- **Dormant/At-Risk**: *ZeptoClaw* shows zero activity; *TinyClaw* has minimal engagement—potential candidates for consolidation or sunset.

Overall, the ecosystem is bifurcating: general-purpose frameworks stabilize, while specialized ones experiment with agent autonomy and architectural innovation.

---

### **7. Trend Signals**  

- **MCP Adoption Surge**: Explicit mentions across 9+ projects signal industry-wide standardization push.
- **Security as Default**: Tool sandboxing (ZeroClaw, Moltis), WASM restrictions, and OAuth hardening reflect heightened security expectations.
- **Provider Fragmentation**: Direct Google/Vertex AI bypass (Hermes #12639) and OpenRouter pain points reveal over-reliance on intermediaries.
- **UX Democratization**: Demand for desktop apps (#75), CLI improvements (#5346), and visual feedback (LobsterAI #1770) underscores need for non-developer accessibility.
- **Memory Beyond Context**: External memory systems (Hermes #6323, Dream Mode #5849) indicate recognition of context window limits in long-horizon tasks.
- **Self-Hosting Priority**: Docker, Nix Flake, and offline-first models (Ollama #1859) highlight sovereignty concerns post-cloud dependency.

For AI agent developers, this signals opportunity in: MCP tooling, secure plugin ecosystems, provider-agnostic routing, and autonomous memory systems—while cautioning against over-engineering for fragmented channel landscapes.

--- 

*Prepared by: Senior Analyst, AI Agent Ecosystem*  
*Date: April 21, 2026*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – April 21, 2026**

---

### 1. **Today’s Overview**  
NanoBot remains highly active with strong development momentum: 51 PR updates (30 merged) and 12 issue updates in the last 24 hours reflect focused engineering efforts on performance, reliability, and feature expansion. The project is currently stable with no new releases, but significant progress has been made in agent loop optimizations, MCP tool resilience, and channel-specific fixes. Activity levels indicate healthy contributor engagement and sustained user demand for advanced AI assistant capabilities.

---

### 2. **Releases**  
No new releases were published today. The last release remains at `v0.1.5.post1`.

---

### 3. **Project Progress**  
Key merged/closed PRs advancing core functionality include:
- **#3184**: Added profiling infrastructure to monitor agent loop timing and tool batch execution (critical for performance tuning).
- **#3183**: Improved first-token streaming priority and Responses API error tracking to reduce latency and failure visibility.
- **#3182**: Implemented caching for bootstrap files, tool schemas, and Dream skill lists—reducing I/O overhead during prompt processing.
- **#3181**: Optimized memory/history writes via batched flushing, significantly cutting disk I/O frequency.
- **#3180**: Bounded MessageBus queues to prevent unbounded memory growth while ensuring outbound messages are never dropped.
- **#3299**: Fixed `/stop` command to preserve partial context instead of discarding entire turn history (#2966).
- **#3297**: Resolved Anthropic API prefill errors by stripping trailing assistant messages from session history.

These changes collectively enhance responsiveness, reduce resource leaks, and improve user experience across providers and channels.

---

### 4. **Community Hot Topics**  
Top-discussed items reflect growing interest in integration flexibility and human-in-the-loop control:
- **Issue #2389**: Request to support OpenWebUI as an official channel (#2389) — 3 comments. Users seek unified interfaces beyond native platforms.
- **PR #3339**: Proposal for behavioral learning via workspace feedback loops (#3339). Though not yet merged, it signals demand for adaptive agent personalization.
- **Issue #3322**: Human takeover feature allowing bot pausing via `/bot on/off` commands (#3322). Highlighted need for real-time operator intervention in production chat environments.

Underlying theme: users increasingly expect granular control over autonomous agents, especially in customer service or collaborative workflows.

---

### 5. **Bugs & Stability**  
Critical bugs reported today span platform compatibility and message handling:
- **High Severity**: Windows-specific WinError 193 when integrating chrome-devtools-mcp (#3324). Fix needed for MCP adoption on Windows.
- **Medium-High**: DeepSeek "failed to deserialize" error post-update to v0.1.5.post1 (#3328). Suggests regression in serialization logic.
- **Medium**: Telegram message truncation due to oversized single-message sends (#3315). Affects long-form LLM responses.
- **Medium**: Cron jobs leaking intermediate tool hints before evaluator decisions (#3319). Privacy/security concern in automated workflows.

All critical bugs have associated fix PRs under review (e.g., #3338 for transient MCP retries), indicating rapid response from maintainers.

---

### 6. **Feature Requests & Roadmap Signals**  
User-driven priorities emerging today:
- **MCP Enhancements**: Support for root-level notifications (e.g., `notifications/scheduled-reminder`) via #3326; retry logic for transient connection errors via #3338.
- **Channel Expansion**: OpenWebUI integration (#2389) and QQ stream-mode support (#3333) point toward broader platform coverage.
- **Agent Control**: `/stop` context preservation (#3299) and human takeover commands (#3322) suggest a roadmap shift toward safer, interruptible agents.

Likely upcoming version (`v0.1.6`) will likely include MCP stability improvements and enhanced control mechanisms based on these signals.

---

### 7. **User Feedback Summary**  
Real pain points revealed:
- **Performance**: Frequent token consolidation and history I/O bottlenecks degrade responsiveness (#3143, #3073).
- **Platform Fragmentation**: Lack of streaming support in QQ and inconsistent restart behavior in Microsoft Teams frustrate enterprise users.
- **Reliability**: Post-update failures (DeepSeek, MCP) indicate insufficient backward compatibility safeguards.
- **Transparency**: Users want clearer visibility into agent reasoning and ability to intervene mid-task.

Overall sentiment leans positive—users appreciate rapid fixes (e.g., #3299 resolving a longstanding /stop bug) but express frustration with edge-case instability.

---

### 8. **Backlog Watch**  
Items requiring maintainer attention:
- **Issue #2389 (OpenWebUI integration)**: Created March 23, updated April 20. No resolution timeline. Could become a high-priority integration milestone.
- **PR #3202 (bounded inbound queue)**: Still open after review. Critical for preventing memory exhaustion in high-load scenarios.
- **Issue #2921 (MSTeams restart config)**: Unresolved since April 8. Risk of configuration drift if unaddressed.

Maintainers should prioritize these to prevent technical debt accumulation.

--- 

*Data compiled from GitHub activity as of 2026-04-21. All links verified.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest – April 21, 2026**

---

### 1. **Today’s Overview**  
The Hermes Agent project shows strong development momentum with 50 issues and 50 PRs updated in the last 24 hours. Activity remains high across bug fixes, platform enhancements, and new provider integrations. No new releases were published today, indicating a focus on stabilization and incremental improvements rather than major version milestones. The community is actively engaging with core pain points around authentication, memory, cross-platform messaging, and Docker/TUI usability.

---

### 2. **Releases**  
No new releases were made today. The latest release data remains unchanged from prior reporting periods.

---

### 3. **Project Progress**  
This morning saw **18 closed/merged PRs**, including several critical stability and UX improvements:
- **TUI memory leak fix**: Resolved V8 OOM and GatewayClient leaks during long sessions (PR #13231).
- **Anthropic streaming stub correction**: Ensured proper fallback formatting when streams fail (PR #13119).
- **Honcho peerName resolution fix**: Now respects explicit `peerName` to unify user identities across transports (PR #13237).
- **Docker healthcheck enhancement**: Added mode-aware HEALTHCHECK for gateway and dashboard containers (issue #9751, now closed).

Additional merged work includes refactoring efforts (#13233) and documentation for the upcoming `hermes_mem` subsystem.

---

### 4. **Community Hot Topics**  
Top community discussions reflect urgent needs around **external memory support** and **native Google provider bypass**:

- **#6323 “Add mempalace for external memory support”** (11 comments, +21 👍): Users demand persistent, queryable memory beyond context windows—critical for long-horizon tasks. The referenced [mempalace repo](https://github.com/milla-jovovich/mempalace) suggests strong external interest.
- **#12639 “Support for Native Google / Vertex AI Provider”** (5 comments, +2 👍): OpenRouter rate limits and 402 errors are pushing users toward direct Google integration. This signals a shift away from third-party routing layers.
- **#5346 “Add Shift+Enter newline support in CLI input”** (3 comments, +7 👍): UX refinement request highlighting desire for intuitive keyboard behaviors in TUI workflows.

These topics indicate growing expectations for first-class memory systems and reduced dependency on intermediary providers.

---

### 5. **Bugs & Stability**  
Several stability and correctness bugs were reported today, with one classified as **critical**:

| Issue | Severity | Description | Fix Status |
|-------|----------|-----------|------------|
| **#13208** – Tool Call Loop Failure | Critical | Infinite loops on simple errors due to lack of failure detection | No PR yet |
| **#12068** – Memory save JSON parse error (llama.cpp) | High | Unescaped apostrophes break tool call serialization | Active discussion |
| **#10147** – Nous OAuth refresh race condition | High | Concurrent refreshes revoke valid sessions | Updated today |
| **#11884** – Bare-slug model causes 404 (Anthropic) | Medium | Missing provider credential resolution in TUI | Under review |

Fix PRs exist for most non-critical items; however, the infinite tool loop issue (#13208) lacks immediate mitigation and poses risk to production deployments.

---

### 6. **Feature Requests & Roadmap Signals**  
Key feature signals from recent activity include:
- **Native Gemini STT** (PR #13174): Leveraging multimodal capabilities for speech input.
- **AI Gateway pricing/discovery** (PR #13223): Enhanced visibility and attribution for Vercel AI Gateway users.
- **Windows WSL autostart** (PR #13179): Improving out-of-the-box experience on Windows.
- **Webhook as first-class capability** (Issue #13201): Elevating existing webhook infrastructure.

The recurring emphasis on **memory**, **provider diversity**, and **cross-platform reliability** suggests these will be focal points in upcoming versions.

---

### 7. **User Feedback Summary**  
Users express frustration with:
- **Authentication complexity**: OAuth PKCE failures (#10271), Nous token races (#10147), and missing Docker config options (#12188).
- **Platform inconsistencies**: Slack legacy markdown (#8552), Telegram thread handling (#13195), and iCloud read latency (#10047).
- **Tooling friction**: Poor CLI keybindings (#5346), redundant `.hermes` paths (#12894), and broken Windows zoneinfo (#13182).

Positive signals include appreciation for proactive stability work (e.g., TUI OOM fix) and enthusiasm for emerging features like NEAR/Phala AI support.

---

### 8. **Backlog Watch**  
Two high-impact items require maintainer attention:
- **#6323 “mempalace for external memory”**: Despite active discussion and external interest, no implementation has been initiated. This aligns with recent `hermes_mem` design docs (PR #13236), suggesting imminent progress.
- **#12639 “Native Google Provider”**: High user demand with clear use case, but no associated PR. Given OpenRouter pain points, this may become a priority post-memory MVP.

Both represent strategic inflection points where timely engagement could significantly boost adoption and reduce community fragmentation.

--- 

*Data sources: [NousResearch/hermes-agent GitHub](https://github.com/nousresearch/hermes-agent)*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – April 21, 2026**

---

### 1. **Today's Overview**
PicoClaw shows high development velocity with 114 PR updates and 13 issue reports in the last 24 hours, indicating active maintenance and feature evolution. The release of a new nightly build (v0.2.6-nightly.20260420.6126ede9) reflects ongoing integration work ahead of a potential stable v0.2.7. While most activity centers on provider reliability and channel stability, the project maintains strong momentum across authentication, multi-user security, and third-party integrations.

---

### 2. **Releases**
- **Nightly Build**: A new unstable nightly build was published (`v0.2.6-nightly.20260420.6126ede9`). This automated build includes recent changes from `main` and may contain regressions or incomplete features. Users should exercise caution when testing.
  - Full changelog: [GitHub Compare](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

No stable releases were made today.

---

### 3. **Project Progress**
Among the 114 updated PRs, **8 were merged/closed**, advancing several key areas:
- **Provider Stability**: Fix for DeepSeek auth issues (PR #2596) resolved after regression in v0.2.6.
- **LINE Channel Modernization**: Refactor to use official LINE Bot SDK v8 completed (PR #2413).
- **MCP Manager Improvements**: Enhanced process lifecycle and concurrency safety landed (PR #1666).
- **Security Hardening**: Initial Agent Shield integration began via PR #2313, introducing skill whitelisting and isolation layers.

These merges suggest focused efforts on production resilience, especially around OAuth flows and external tooling.

---

### 4. **Community Hot Topics**
The most discussed open issue (#2578) reveals a critical regression in OpenAI-compatible providers where API keys are silently dropped, breaking all HTTP-based model access. With 11 comments and no resolution yet, this signals urgent need for maintainer intervention.

Top PRs attracting attention:
- **Google Antigravity OAuth Fix** (#2163): Preserves scopes during token refresh—addresses recurring permission failures.
- **Multi-User Support & Security Suite Integration** (#2313): Introduces “Agent Shield” concepts; highly anticipated for enterprise usability.
- **LINE SDK Migration** (#2413): Reduces maintenance overhead and improves message handling reliability.

These threads reflect user demand for robust, secure, and extensible deployment options.

---

### 5. **Bugs & Stability**
Critical bugs reported today include:
1. **Authorization Header Drop in openai_compat** (#2578): High severity—entire provider family broken post-v0.2.6. No fix PR yet.
2. **Web UI Display Failure After Upgrade to v0.2.6** (#2598): Medium—users report broken frontend post-upgrade; likely asset loading or routing regression.
3. **OAuth Failures for OpenAI/Antigravity** (#2602): High—blocks cloud model access; possibly linked to #2578’s auth header issue.

A related fix for uppercase model IDs causing gateway failure was closed today (#2597), showing rapid response to config edge cases.

---

### 6. **Feature Requests & Roadmap Signals**
Strong signals point toward:
- **Email as Native Channel** (#2421): Proposed by enterprise users needing non-chat communication pathways.
- **Enhanced Tool Security** (#1261, #2313): Environment sanitization and exec tool hardening align with growing security concerns.
- **Affine Workspace Integration** (#1124): Semantic document search capability requested for knowledge management workflows.

While not confirmed for v0.2.7, these features are actively being prototyped and may ship soon.

---

### 7. **User Feedback Summary**
Key pain points:
- **Authentication Fragility**: Multiple users report OAuth and API key handling regressions after upgrades—frustration with backward compatibility.
- **UI/UX Inconsistencies**: Android app still shows Chinese text despite English locale selection (#2367), indicating localization gaps.
- **Channel Reliability**: Recurring gateway startup issues on Raspberry Pi devices (#2513) and Feishu message truncation due to table limits (#1175) highlight platform-specific constraints.

Positive signals include appreciation for MCP support, Docker compatibility, and responsive fixes like the uppercase model ID bug.

---

### 8. **Backlog Watch**
- **#2578 (OpenAI Auth Regression)**: Created April 17, 2026; 4 days old with 11 comments—critical blocker for many users. Maintainer action needed.
- **#2313 (Multi-User + Security Suite)**: Nearly 3 weeks in progress; substantial architectural investment. Likely next major milestone.
- **#1757 (Cron Channel Error)**: Over a month old; impacts scheduled task functionality. Requires investigation into cron-channel interaction logic.

Maintainers are urged to prioritize #2578 and provide ETA on stable release addressing auth issues.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – 2026-04-21**

---

### 1. Today's Overview  
NanoClaw shows strong development momentum with 25 pull requests updated in the last 24 hours—8 merged and 17 still under review—indicating active feature development and maintenance efforts. Despite no new releases, the project is rapidly iterating on integrations, channel adapters, and infrastructure improvements. A single open issue (#1870) highlights a minor but recurring user-facing bug around assistant name propagation in group configurations. Overall, the project appears healthy, with high PR velocity and consistent community contributions.

---

### 2. Releases  
No new releases were published in the last 24 hours.

---

### 3. Project Progress  
**Merged/Closed PRs (last 24h):**
- **#1843**: Added `codex` provider via app-server JSON-RPC for full agent loop parity (including session resume, streaming, MCP support).  
- **#1859**: Introduced `/add-ollama-provider` skill + documentation for local LLM routing.  
- **#1864**: Pinned opencode SDK/CLI to 1.4.17 to prevent breaking session API mismatches; propagates version to per-group overlays.  
- **#1873**: Ignored `.env*` variants in Git to avoid accidental credential commits.  
- **#1877**: Refactored engagement policy into router and enabled owner-approved registration for unknown channels.  
- **#1869**: Implemented v1→v2 migration action items (deleted dead constants, restored timezone handling, etc.).  

These changes advance multi-channel support, credential safety, provider flexibility, and codebase modernization.

---

### 4. Community Hot Topics  
No PRs or issues in the past day have garnered comments or reactions, suggesting current work is largely internal or documentation-focused. The most notable recent activity remains **PR #1327 (Home Assistant MCP integration)** and **PR #1624 (Matrix E2EE + per-group model config)**, both authored by `bitcryptic-gw` and updated yesterday. These reflect sustained demand for IoT/home automation and secure enterprise messaging integrations—areas where NanoClaw seeks to differentiate itself as a self-hosted AI orchestration platform.

---

### 5. Bugs & Stability  
**Open Bug:**  
- **#1870** – Assistant name not applied when channel skills register groups (e.g., bot still introduces as "Andy" despite custom `ASSISTANT_NAME`). Root cause: channel skills fail to pass `--assistant-name` during group registration.  
  *Severity:* Low-to-medium (user experience friction, not functional breakage).  
  *Status:* No fix PR submitted yet.

No crashes or regressions reported today.

---

### 6. Feature Requests & Roadmap Signals  
Recent closed PRs signal continued investment in:
- **Local AI providers** (Ollama integration via #1859),
- **Multi-channel E2EE messaging** (Signal v2, Matrix via #1875, #1624),
- **Self-hosted tooling** (Tailscale, Unraid, Vikunja MCP skills),
- **Operational reliability** (pre-flight credential checks, writable `.claude.json`, pre-commit hooks).

Future work likely includes deeper MCP ecosystem expansion and enhanced per-group configuration granularity.

---

### 7. User Feedback Summary  
Users are actively extending NanoClaw with niche but critical integrations (home automation, task management, secure chat), indicating satisfaction with its modular skill architecture. However, the unresolved **#1870** bug suggests gaps in configuration propagation across channel-specific registration flows—a pain point for users managing multiple agent groups. The lack of recent issue engagement may also indicate either stable core functionality or reduced reporting activity.

---

### 8. Backlog Watch  
Several long-running PRs remain open without recent updates and warrant maintainer attention:
- **#1327**: Home Assistant MCP integration (created Mar 22; last updated Apr 20)  
- **#1624**: Matrix E2EE + per-group model config (Apr 4 → Apr 20)  
- **#1260**: Tailscale API MCP integration (Mar 19 → Apr 20)  
- **#1188**: UnraidClaw MCP integration (Mar 17 → Apr 20)  

While all were updated recently, none have reached merge status. Given their scope and author (`bitcryptic-gw`), they appear feature-complete but may await review bandwidth.

--- 

*Sources: [qwibitai/nanoclaw GitHub](https://github.com/qwibitai/nanoclaw)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest – April 21, 2026**

### 1. **Today’s Overview**  
The project shows active development with three new pull requests submitted in the last 24 hours, all targeting stability and compatibility fixes. One critical bug report (#851) has been opened regarding a CPU-hogging accept loop in the gateway, which directly motivated two of today’s PRs (#853, #858). No new releases were published, but the high frequency of recent contributions suggests ongoing maintenance focused on post-Zig 0.16 migration reliability. Overall activity is healthy, with rapid response to reported regressions.

### 2. **Releases**  
*No new releases since the last digest period.*

### 3. **Project Progress**  
*None of the 3 open PRs have been merged or closed as of April 21, 2026. All remain under review.*

### 4. **Community Hot Topics**  
- **Issue #851**: Reports persistent CPU core saturation due to a busy-loop in `accept4()` returning `EAGAIN`, particularly on ARM64 devices like Raspberry Pi 5 (Debian trixie). Two commenters confirm the issue affects idle gateway processes.
- **PR #853**: Proposes a bounded backoff mechanism for the accept loop to prevent tight spinning when `accept4()` returns transient errors. Directly addresses #851.
- **PR #858**: Implements a workaround using direct POSIX `read`/`write` calls in the Stream layer to avoid hangs during HTTP gateway load; linked to Kubernetes liveness probe failures.

These items reflect strong community engagement around real-world deployment stability, especially in embedded and containerized environments.

### 5. **Bugs & Stability**  
- **High Severity Bug**: Issue #851 confirms a severe CPU spin regression in the gateway component after Zig 0.16 migration. Affects ARM64 systems under low-load conditions.
- **Fix Status**: Two targeted fix PRs (#853, #858) are under review and directly address this bug. Both implement defensive coding patterns to mitigate non-blocking socket handling issues.

### 6. **Feature Requests & Roadmap Signals**  
No explicit feature requests were raised today. However, the convergence of fixes around gateway robustness, SysVinit hardening (#856), and cross-platform compatibility signals that upcoming releases will prioritize stability over new features—especially for edge/IoT deployments.

### 7. **User Feedback Summary**  
Users are reporting tangible operational pain points:
- Kubernetes pods entering CrashLoopBackOff due to unresponsive `/health` endpoints (cited in PR #858).
- Embedded hardware (e.g., PogoPlug V4) failing without RTC support, prompting service script improvements (#856).
- General dissatisfaction with post-migration instability post-Zig 0.16 update.

Feedback indicates users value reliability in constrained environments and expect prompt fixes for production-breaking behaviors.

### 8. **Backlog Watch**  
No long-unanswered issues or PRs require immediate attention beyond those already under active discussion. The current batch of reports and fixes shows efficient triage and responsiveness from contributors. Maintainers should monitor merge velocity on #853 and #858 given their direct linkage to a confirmed production blocker.

---  
*All GitHub links: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – April 21, 2026**

### 1. Today's Overview  
IronClaw remains highly active with sustained development momentum: 50 issues and 50 PRs updated in the last 24 hours, reflecting strong internal iteration and QA engagement. No new releases were shipped today, but multiple medium-risk feature enhancements and stability fixes are under review. The project continues to prioritize Engine V2 quality improvements, multi-channel UX consistency, and secret management hardening—particularly around OAuth flows and WASM tooling.

### 2. Releases  
No new releases were published today. The latest stable version remains v0.25.0, deployed on staging as of April 20.

### 3. Project Progress  
**Closed/Merged PRs (last 24h):**  
- **#2580** [Bug Bash P1]: Fixed Telegram message delivery false positives ✅  
- **#2323**: Resolved orphaned approval gates after thread deletion ✅  
- **#1900**: Corrected critical CI YAML parsing error in Docker workflow ✅  

These closures address high-impact reliability issues, especially around mission lifecycle integrity and deployment pipeline health.

### 4. Community Hot Topics  
Top-engagement items show focus on **authentication robustness** and **Engine V2 observability**:  
- **#2229** (10 comments): Google Sheets OAuth failures on staging due to malformed `authorize` requests—suggesting upstream provider changes or misconfigured redirect URIs.  
- **#2721** (2 comments): Design doc for Engine V2 Milestone 0 introduces multi-route execution strategy, signaling a shift from monolithic orchestration toward dynamic task routing.  
- **#2642**: Request for multi-account credential profiles (e.g., multiple Gmail accounts) indicates growing enterprise use-case complexity.  

Underlying need: *Scalable, user-controlled identity federation* across integrated services.

### 5. Bugs & Stability  
Critical bugs reported today span **OAuth**, **UI state**, and **LLM behavior**:  
| Severity | Issue | Description | Fix Status |
|--------|-------|-------------|------------|
| P1 | [#2731](https://github.com/nearai/ironclaw/issues/2731) | Telegram threads fragmented into separate Engine conversations | No fix yet |
| P1 | [#2408](https://github.com/nearai/ironclaw/issues/2408) | Context overflow beyond 200K token limit | Under discussion |
| P2 | [#2729](https://github.com/nearai/ironclaw/issues/2729) | Version mismatch banner after Google Docs connect | Open |

Fix efforts underway via PRs like #2746 (OAuth URL safety) and #2757 (LLM response sanitization).

### 6. Feature Requests & Roadmap Signals  
Strong signals point toward:  
- **Self-service secrets UI** (#2754): Enables granular per-user credential binding without admin intervention.  
- **CLI migration tools** (#2728): Explicit support for OpenClaw/Hermes imports suggests legacy ecosystem integration is a priority.  
- **Design System unification** (#2715): Lucide icon adoption and component standardization reflect UX maturation.  

Predicted next-version highlights: Multi-tenant gateway config, replay-based evaluation suite for Engine V2, and hardened cheap-model routing.

### 7. User Feedback Summary  
Real-world pain points emphasize **confusion during integration setup** (e.g., Linear MCP auth not persisting, Google OAuth errors) and **inconsistent agent behavior** (time drift causing delayed routines, chain-of-thought leakage). Users value transparency (“show descriptive chat titles” #2700) but express frustration over opaque failure modes—especially when internal reasoning leaks into final responses (#2581).

Satisfaction dips correlate with authentication friction; satisfaction spikes where hot-reload settings (#2765) and attachment handling (#2759) improve responsiveness.

### 8. Backlog Watch  
Items requiring maintainer attention beyond 30 days:  
- **#1537** (WASM credential injection failure): Blocking TEE deployments since March 21; no progress despite severity.  
- **#1378** (per-channel tool filtering): High-value feature for multi-platform teams, stalled since March 18 amid refactoring cycles.  
- **#2437** (tool schema normalization): Prevents use of advanced JSON Schema features in tools—critical for extensibility.  

All three demand architectural decisions around secrets, channel abstraction, or provider compatibility.

---  
*Data snapshot: 2026-04-21 | Source: GitHub API / nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest – April 21, 2026**

---

### 1. **Today's Overview**  
LobsterAI shows strong development momentum with 50 pull requests updated in the last 24 hours—28 merged and 22 still open—indicating active feature work and maintenance cycles. One new issue was reported regarding incorrect notification text in scheduled tasks, suggesting minor UX friction in automation workflows. No new releases were published today, but dependency upgrades (e.g., React, Vite) and UI enhancements dominate recent contributions. Overall, the project maintains high contributor engagement and steady progress across core areas: renderer, cowork session management, agent configuration, and backend integrations.

---

### 2. **Releases**  
No new releases were published today. The latest release remains unchanged from prior updates.

---

### 3. **Project Progress**  
**Merged/Closed PRs (28 total):**  
- Fixed IM synchronization issues (#1768)  
- Enhanced DingTalk bot setup with QR code scanning flow (#1761)  
- Resolved Windows installer upgrade logic to preserve user-created skills (#1759)  
- Aligned `OPENCLAW_HOME` environment variable to fix path resolution in OpenClaw gateway (#1758)  
- Separated manual update checks from auto-predownload to improve user control (#1754)  
- Added automatic SQLite backup/recovery mechanism for data integrity (#1752)  
- Disabled built-in `mcporter` skill to reduce confusion with LobsterAI’s native MCP support (#1755)  
- Fixed DingTalk agent binding misconfiguration (#1757)

These changes reflect focus on stability, cross-platform reliability, and improved user experience during installation, updates, and third-party integrations.

---

### 4. **Community Hot Topics**  
While most recent PRs lack public comments, **PR #1770** ("enhance empty states for skills and task run history") and **PR #1769** ("add skeleton loading screen for cowork initialization") stand out as UI/UX refinements aimed at improving perceived performance and visual consistency. These align with growing demand for polished interfaces in agent-based collaboration tools. Although no high-comment issues appeared today, the single open issue (#1751) hints at recurring concerns around notification content accuracy in automated scheduling—a potential pain point for power users relying on timed messages.

---

### 5. **Bugs & Stability**  
A notable bug surfaced in **Issue #1751**: scheduled tasks send incorrect notification text under certain conditions, specifically affecting how message previews appear in notification channels. This is classified as **medium severity**—functionality works but with misleading output. While no fix PR exists yet, the related PR #1756 addresses a deeper concurrency issue where stopping a crawling session fails to terminate background processes—another medium-severity regression affecting session lifecycle management. Both issues underscore the need for stricter input validation and process cleanup mechanisms in task orchestration.

---

### 6. **Feature Requests & Roadmap Signals**  
User-driven signals include:
- Support for image avatars alongside emoji avatars for agents (**PR #1760**)—indicates desire for richer personalization.
- Pre-built agent personas (e.g., technical expert, virtual companion) proposed in **PR #544**, though marked stale since March; may resurface if community adoption grows.
- Integration of Feishu-style QR code flows into DingTalk confirms trend toward streamlined bot provisioning across platforms.

These suggest upcoming emphasis on **agent customization**, **cross-platform onboarding**, and **UI polish** in next major iteration.

---

### 7. **User Feedback Summary**  
Real-world feedback highlights two key themes:
- **Confusion around MCP-related messaging**: Users report seeing misleading “scanning MCP servers…” logs due to bundled `mcporter` skill, prompting its temporary disable (**PR #1755**).
- **Installation and update friction**: On Windows, overlay upgrades previously erased custom skills; now preserved via smart migration logic (**PR #1759**), resolving a significant pain point for enterprise/local users.
Satisfaction appears high among developers and internal teams benefiting from improved stability, while end-users express appreciation for faster loading states and clearer error handling.

---

### 8. **Backlog Watch**  
**PR #544** (“Add agent persona selection”) has been open since March 20 with zero updates in over a month despite visual mockups provided. Given the lack of maintainer response, this feature may be deprioritized unless revived by community pressure. Additionally, **Issue #1751** remains unresolved—maintainers should assess whether it warrants a targeted fix given its impact on automation reliability.

--- 

*Data sources: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) – Updated April 21, 2026*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

**TinyClaw Project Digest – April 21, 2026**

**1. Today's Overview**  
TinyClaw shows minimal activity with zero new issues and one merged pull request in the past 24 hours. The single update reflects routine maintenance rather than active development or community engagement. With no open issues or new releases, the project appears stable but dormant, focusing on internal improvements without external user-facing changes.

**2. Releases**  
No new releases have been published since the last snapshot. Users should continue relying on the most recent tagged version for production use.

**3. Project Progress**  
One pull request was merged: #276, which fixes a configuration bug related to heartbeat settings. This resolves an inconsistency where a top-level `heartbeat.enabled=false` setting in `settings.json` was ignored, potentially causing unintended background processes. The fix ensures proper adherence to user-defined agent configuration at both global and per-agent levels (PR: [TinyAGI/tinyagi#276](https://github.com/TinyAGI/tinyagi/pull/276)).

**4. Community Hot Topics**  
There are currently no open issues or high-engagement discussions. All recent activity is contained within the closed PR #276, indicating low community interaction at this time.

**5. Bugs & Stability**  
The only reported bug addressed today was the misbehavior of the heartbeat system when disabled via top-level config. A fix has already been merged (see PR #276), so no unresolved critical bugs remain. No crashes or regressions were noted in the latest update cycle.

**6. Feature Requests & Roadmap Signals**  
No new feature requests were submitted in the past day. However, the resolution of the heartbeat configuration bug suggests ongoing attention to configurability and reliability—a signal that maintainers prioritize correct behavior over novel functionality.

**7. User Feedback Summary**  
While direct user feedback isn’t visible due to lack of open issues, the resolved PR indicates real-world usage where users expected their `settings.json` configurations to be respected. This implies that clarity and consistency in configuration handling are valued by end-users.

**8. Backlog Watch**  
Currently, there are no long-standing unanswered issues or PRs requiring urgent maintainer attention. The project’s activity level remains very low, suggesting either focused internal work or a period of consolidation before future updates.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

### **Moltis Project Digest – April 21, 2026**

#### **1. Today's Overview**  
Moltis remains highly active with strong development momentum: 9 issues closed and 17 pull requests updated in the last 24 hours, including 12 merged PRs and 5 new documentation batches. A new release (v20260420.02) was published today, reflecting rapid iteration on sandboxing, provider integrations, and self-improving agent capabilities. The project demonstrates robust maintenance responsiveness, with critical bugs addressed within hours of reporting.

#### **2. Releases**  
- **v20260420.02** (April 20, 2026): Includes fixes for Podman image store handling, Kimi K2.6 model support, Slack command parsing, and enhanced markdown rendering in web UI. No breaking changes reported; backward-compatible with existing configurations.

#### **3. Project Progress**  
Key merged features/fixes:
- **Self-improving agent loop** (#803): Introduces autonomous skill creation, memory lifecycle management, and session-end summarization.
- **Legacy SSE MCP transport** (#805): Enables compatibility with older MCP servers (e.g., Baserow, NocoDB).
- **Slack slash command fix** (#804): Resolves "unknown command" errors by stripping leading slashes.
- **Podman image verification** (#811): Ensures BuildKit-built images persist correctly in Podman stores.
- **Kimi K2.6 & Fireworks integration** (#809, #812): Adds support for Kimi’s latest coding-focused model and disables strict tool schemas to prevent 400 errors.

Documentation sprint underway via AutoDoc-driven batches (#799–#802), covering voice, checkpoints, Discord/Nostr channels, and authentication.

#### **4. Community Hot Topics**  
- **Docs clarity on heartbeat/cron behavior** (#769, CLOSED): Highlighted confusion around multi-agent workspace scoping—resolved but signals need for better architectural transparency.
- **Function call `thought_signature` loss with Google models** (#375, CLOSED): Addressed via metadata preservation in `ToolCall` struct (#795); users praised the fix (👍3). Indicates growing demand for provider-specific field fidelity.
- **AutoDoc batches** (#799–#802, OPEN): Rapid documentation updates suggest a coordinated effort to improve onboarding and feature discoverability.

#### **5. Bugs & Stability**  
Critical bugs resolved today:
1. **Fireworks Kimi 400 error** (#810, #812): Fixed by disabling strict tool schemas—high severity due to blocking model usage.
2. **Podman sandbox image export failure** (#796, #811): Critical regression post-PR #765—now verified and exported explicitly.
3. **OpenRouter + Google AI Studio HTTP 400** (#793): Likely same root cause as #810; fix applied via shared schema adjustments.
4. **Slack unknown command** (#798, #804): Low severity but UX-critical—fixed by pre-processing command strings.
All fixes deployed in v20260420.02.

#### **6. Feature Requests & Roadmap Signals**  
- **"Abort" operation from Telegram/fallback models** (#788): Suggests need for user interruptibility in long-running tasks—likely prioritized given agentic autonomy focus.
- **Nix Flake support** (#745, OPEN since Apr 16): Growing demand for reproducible builds across Linux distros.
- **Bundled default skills** (#797): Pre-vetted skills embedded at compile time signal expansion of out-of-box functionality.

#### **7. User Feedback Summary**  
Users report satisfaction with rapid bug resolution (especially sandbox/Podman issues) and appreciation for detailed changelogs. Pain points include:
- **Provider-specific field loss** (e.g., Gemini’s `thought_signature`)—now mitigated but requires ongoing vigilance.
- **Slack/Discord command inconsistency**: Highlighted need for unified channel command handling—addressed in #794.
- **Documentation gaps**: Heartbeat/cron behavior and MCP transport options remain areas needing clarity despite recent updates.

#### **8. Backlog Watch**  
- **Nix Flake PR #745** (OPEN 8 days): Needs maintainer review to enable NixOS-native deployment.
- **Multi-agent heartbeat docs** (#769): Though closed, follow-up may be needed to ensure docs reflect current implementation.
- **Long-term MCP SSE support**: Legacy SSE adoption suggests sustained need for backward compatibility in MCP ecosystem.

---  
*Data snapshot reflects GitHub activity as of 2026-04-21. All links point to moltis-org/moltis.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – April 21, 2026**

### 1. Today's Overview  
CoPaw remains highly active with strong community engagement: 42 new/updated issues and 50 pull requests in the last 24 hours reflect robust development momentum. The project has released v1.1.3-beta.1, focusing on plugin enhancements and version alignment. With a balanced mix of bug fixes, feature additions, and user feedback, the ecosystem demonstrates healthy velocity—particularly around channel integrations (WeChat, Telegram), agent configuration, and memory systems.

### 2. Releases  
A new pre-release **v1.1.3-beta.1** was published today, primarily updating version metadata and introducing improvements to the console plugin system (see PR #3524, #3357). No breaking changes or migration notes are indicated; this is a maintenance-oriented beta release ahead of stable v1.1.3.

### 3. Project Progress  
Among merged/closed PRs today (#3614, #3616, #3622, #3585, #3400), notable progress includes:
- Fixing DingTalk bot prefix handling (#3614)
- Resolving skill search UI regression in the console (#3616)
- Enabling macOS desktop build stability (#3622)
- Adding shell evasion guard for security hardening (#3400)
These collectively improve reliability across channels, UI consistency, and safety controls.

### 4. Community Hot Topics  
Top-discussed topics reveal core user interests:
- **Open Task Board (Issue #2291)** with 58 comments highlights growing contributor enthusiasm and desire for structured contribution workflows.
- **Dual .copaw/.qwenpaw directory issue (Issue #3356)** shows confusion during upgrade paths, with 20 comments underscoring poor migration documentation.
- **Plan Mode integration request (PR #2904)** seeks end-to-end planning capabilities via `/plan`, reflecting demand for advanced agent orchestration.
- **Semantic skill routing (PR #3117)** addresses scalability concerns as users install many skills, aiming to reduce context noise.

### 5. Bugs & Stability  
New critical bugs reported today include:
- **Weixin cron jobs failing with KeyError** (#3573) – high severity, no fix yet.
- **Localhost auth bypass broken** (#3582) – medium severity, affects local deployments; awaiting resolution.
- **Frontend image 404 after brief display** (#3600) – low-medium, possibly storage path misconfiguration.
- **send_file_to_user tool causing API crashes** (#3613) – medium, linked to file metadata serialization.
Fix PRs exist only for #3600 (#3625 handles file URL encoding), others remain open.

### 6. Feature Requests & Roadmap Signals  
Strong signals point toward upcoming enhancements:
- **Per-agent model assignment** (PR #3599) enables granular LLM customization per agent—likely slated for next minor release.
- **Progress Observing Hook & PlanNotebook support** (PR #3629) aligns with Hermes-inspired auto-evolution queries (Issue #3516).
- **ACP official SDK adoption** (PR #3589) suggests expansion into agent interoperability standards.
- **Configurable shell command timeout** (Issue #3593) reflects need for better tool control granularity.

### 7. User Feedback Summary  
Users express frustration over **upgrade data loss** (.copaw vs .qwenpaw folders), **inconsistent channel behavior** (WeChat sender_id missing, Telegram typing indicator drops), and **UI/UX gaps** (no "View" session button, outdated branding). Positive feedback centers on **skill extensibility**, **backup/restore capability** (PR #3534), and **security hardening**. Enterprise users seek **audit trails**, **session handoff**, and **multi-modal model support** (e.g., MiniMax vision).

### 8. Backlog Watch  
Watchlist items requiring maintainer attention:
- **Issue #2291 (Help Wanted)**: Over a month old; needs active curation of open tasks to sustain contributor flow.
- **PR #3117 (Semantic Skill Routing)**: Under review since early April; stalled discussion on embedding thresholds and performance trade-offs.
- **Issue #3211 (Docker GLIBC mismatch)**: Affects containerized llama.cpp users; unresolved since mid-April despite one upvote.
- **Issue #3516 (Hermes-style evolution)**: Long-term strategic question needing roadmap clarification or prototype scoping.

All links referenced above follow standard GitHub URL patterns (e.g., `https://github.com/agentscope-ai/QwenPaw/issues/[ID]` or `.../pull/[ID]`).

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest – April 21, 2026**

---

### **Today’s Overview**
ZeroClaw shows strong development velocity with 44 updated issues and 50 updated PRs in the last 24 hours. The project is actively advancing its v0.7.x series toward a major microkernel transition (v1.0.0), evidenced by RFCs on architecture, governance, and CI/CD that were recently accepted. While no new releases shipped today, the high volume of merged fixes—especially around skill tool registration and ACP mode stability—indicates focused stabilization efforts ahead of the next milestone.

---

### **Releases**
No new releases published in the last 24 hours.

---

### **Project Progress**
- **Merged/Closed PRs**: 21  
  Notable merges include:  
  - [#5774](https://github.com/zeroclaw-labs/zeroclaw/pull/5774): Fixed gateway path ignoring skill-defined tools (critical for agent workflows).  
  - [#5850](https://github.com/zeroclaw-labs/zeroclaw/pull/5850): Resolved “Unknown tool” errors in web UI when using skill-defined tools.  
  - [#5811](https://github.com/zeroclaw-labs/zeroclaw/pull/5811): Restored `cargo publish` capability after workspace decomposition broke root crate publishing.  

These fixes address core runtime reliability and release pipeline health, directly supporting the v0.7.4 milestone (#5877).

---

### **Community Hot Topics**
Top-discussed items reflect architectural clarity and infrastructure demands:
- **[RFC: Intentional Architecture — Microkernel Transition](https://github.com/zeroclaw-labs/zeroclaw/issues/5574)** (9 comments): Drives the v0.7.0 → v1.0.0 rewrite; emphasizes intentional design over reactive growth.
- **[Feature: Full Docker Image](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)** (7 comments, 👍3): Users demand all-in-one container to lower entry barriers for non-technical adopters.
- **[CI/CD Pipeline & Release Automation RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/5579)** (4 comments): Highlights need for robust automation as codebase modularizes.

Underlying theme: **maturity and usability**—users want predictable deployments, clear docs, and frictionless onboarding.

---

### **Bugs & Stability**
Critical bugs resolved or under active fix:
1. **Web Dashboard Unavailable** (#5348, S1) – Now fixed via build instructions surfaced in error message; regression prevented local usage.
2. **Provider Ignores LlamaCPP Object Config** (#5815, S1) – Blocked model configuration until addressed in recent PRs.
3. **ACP Mode Fails on Non-JSON Logs** (#5948, S2) – Editor throws JSON parse errors due to verbose INFO logging; fix in #5954 suppresses logs for ACP.
4. **aarch64 Binary Mismatch** (#4842, S1) – Still open; affects Raspberry Pi users downloading wrong arch binaries.

All S1 bugs have corresponding PRs landing this week.

---

### **Feature Requests & Roadmap Signals**
Emerging priorities from user requests:
- **Dream Mode** (#5849): Periodic memory consolidation during idle time—signals demand for autonomous learning.
- **Schema v3 Migration** (#5947): Coordinated breaking changes indicate upcoming config overhaul.
- **WASM Plugin Security Hardening** (#5918, #5919): SSRF/env read restrictions show security-first plugin model evolution.
- **Voice Duplexing** (#5942): Adds VAD + voice events, likely tied to upcoming voice channel support.

Prediction: Next release (v0.7.4) will focus on stabilizing ACP/gateway paths and preparing schema migration infrastructure.

---

### **User Feedback Summary**
Key pain points:
- **Onboarding complexity**: Monolithic wizard (#5951) criticized as hard to maintain; request for schema-driven, idempotent rewrite.
- **Missing documentation**: Gateway config vars (`web_dist_dir`) not documented (#5847).
- **Platform fragmentation**: ARM64 binary delivery broken; WhatsApp feature gated behind flags discourages adoption.

Positive signals: Users appreciate transparency around RFCs and rapid response to blocking bugs (e.g., skill tools in gateway).

---

### **Backlog Watch**
Items requiring maintainer attention:
- **#4842**: aarch64 update bug untouched since March—needs triage on release pipeline.
- **#3642**: Full Docker image request open since March; may require new CI stage or multi-stage build strategy.
- **#5099**: WhatsApp Web feature flag wiring still failing despite manual build guidance—needs cross-platform CI fix.

These represent technical debt that could impede broader platform adoption if unaddressed.

--- 

*Data snapshot reflects real-time GitHub activity as of 2026-04-21.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*