# OpenClaw Ecosystem Digest 2026-03-14

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-14 00:20 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw Deep Dive

**OpenClaw Project Digest – March 14, 2026**

---

### **1. Today’s Overview**  
OpenClaw remains highly active with sustained community engagement: 500 issues and PRs updated in the last 24 hours (436 open issues, 361 open PRs). A new release, v2026.3.12, introduces significant UI modernization and gateway dashboard improvements. The project shows strong development velocity but faces recurring stability challenges post-upgrade, particularly around memory usage and WebSocket connectivity.

---

### **2. Releases**  
**v2026.3.12** – Released March 12, 2026  
- **Control UI/dashboard-v2**: Complete redesign with modular views (chat, config, agent, session), command palette, mobile bottom tabs, and enhanced chat tools including slash commands, search, export, and pinned messages (#41503).  
- **OpenAI/GPT-5.4**: Model support added for GPT-5.4 integration.  

> ⚠️ **Migration Note**: Users upgrading from v2026.3.7 may experience regressions in WhatsApp channels, CLI device management, and memory consumption—especially on low-resource hardware like Raspberry Pi 4.

---

### **3. Project Progress**  
**Merged/Closed PRs (Last 24h):**  
- **#45541** (`BunsDev`): Fixed excessive `chat.history` reloads during tool-heavy runs, preventing UI freeze.  
- **#45531**, **#45539**: Refactored Signal and iMessage implementations into extensions to reduce monolithic codebase complexity.  
- **#45512** (`sallyom`): Restored Control UI auth bypass for `operator` sessions and improved connect failure classification.  
- **#45548** (`hartmark`): Added optional QMD CLI installation via Docker build argument.  

These changes reflect ongoing efforts to modularize channel plugins, stabilize gateway authentication, and improve containerization flexibility.

---

### **4. Community Hot Topics**  
Top-discussed items indicate growing demand for **platform accessibility** and **enterprise-grade reliability**:  

- **#3460 [OPEN] Internationalization (i18n) & Localization Support** (101 comments, +3)  
  *Community strongly advocates for global usability; maintainer cites bandwidth constraints.*  
- **#75 [OPEN] Linux/Windows Clawdbot Apps** (38 comments, +60)  
  High upvote count shows unmet need for native desktop clients beyond macOS/iOS/Android.  
- **#6872 [OPEN] xai support for responses and native tools** (15 comments, +11)  
  Repeated requests to integrate xAI (Grok) fully, especially for tool calling parity with official apps.  

*Underlying Need:* OpenClaw is perceived as a "premium" platform with Apple-centric design—users seek cross-platform parity and multilingual support.

---

### **5. Bugs & Stability**  
Multiple **regression bugs** emerged after v2026.3.12, affecting core functionality:  

| Rank | Issue | Severity | Fix Status |
|------|------|----------|------------|
| 1 | #45440 – Memory leak/OOM on Raspberry Pi 4 | Critical | No fix yet |
| 2 | #45171 / #45474 / #45289 – WhatsApp inbound/outbound broken | High | Partial (PRs pending) |
| 3 | #44835 – Web UI validation errors despite valid config | Medium | Under investigation |
| 4 | #45471 – UI chat not opening post-update | High | No fix |

Additional concerns:
- CLI tools (`openclaw devices`, `logs --follow`) fail with WebSocket handshake timeouts.
- Exec approval sockets not created on startup (#43989).
- Discord/Telegram message mirroring broken in Control UI (#44261).

> **Note**: Several critical bugs lack assigned maintainers or fix PRs.

---

### **6. Feature Requests & Roadmap Signals**  
Key feature trends suggest near-term priorities:
- **Multi-language support** (#3460) remains top request but deferred due to resourcing.
- **xAI/Grok integration** (#6872) likely prioritized given repeated submissions.
- **Cross-platform desktop clients** (#75) could drive next major milestone.
- **Prompt caching optimization** (#31708) signals cost-efficiency focus amid rising LLM expenses.

Plausible inclusion in v2026.4.x:
- Enhanced TTS voice persistence (#45530)
- Chrome DevTools MCP preset (#45373)
- Slack mux receiver for multi-gateway setups (#45132)

---

### **7. User Feedback Summary**  
**Pain Points:**  
- **Stability regressions** dominate user frustration—many report unusable states after auto-updates.
- **Resource inefficiency** on edge devices (RPi, 4GB servers) undermines accessibility claims.
- **Channel fragmentation**: WhatsApp, Telegram, and Matrix suffer inconsistent behavior.
- **CLI/Web UI disconnect**: Device identity/auth errors persist despite documented workarounds.

**Satisfaction Indicators:**  
- Positive reception of **dashboard v2 redesign** and **command palette**.
- Appreciation for **modular plugin architecture** and **extension system** (Signal/iMessage refactoring).
- Growing interest in **Docker/QMD support** for deployment flexibility.

---

### **8. Backlog Watch**  
Items requiring maintainer attention beyond current sprint:  

- **#3460 (i18n)**: Decades-old but increasingly urgent; needs strategic commitment.
- **#75 (Linux/Windows apps)**: High community desire; may require dedicated team.
- **#9030 (Discriminator Layer)**: Architectural improvement for safety/scalability—long-term value.
- **#25145 (Outbound message approval gate)**: Security-critical gap for autonomous agents.

> These represent both technical debt and strategic opportunities. Delayed resolution risks alienating non-macOS users and security-conscious enterprises.

--- 

*Data sources: GitHub API snapshots, issue tracker metadata, release notes. Last updated: 2026-03-14T00:00Z.*

---

## Cross-Ecosystem Comparison

**Cross-Project Comparison Report: Personal AI Agent Open Source Ecosystem (March 2026)**

---

### **1. Ecosystem Overview**

The personal AI agent open-source landscape is highly active and fragmented, with multiple projects vying for dominance in modularity, channel support, and developer experience. While OpenClaw leads as a core reference implementation, smaller projects like NanoBot, Zeroclaw, and TinyClaw are rapidly iterating on niche capabilities—such as lightweight deployment, multi-agent orchestration, or cross-platform compatibility. The ecosystem shows strong demand for stability, extensibility, and enterprise-grade reliability, but widespread regressions and configuration fragility hinder production adoption. A clear trend toward MCP integration, local model support, and improved observability is reshaping project priorities.

---

### **2. Activity Comparison**

| Project       | Issues (24h) | PRs (24h) | New Release | Health Score* |
|---------------|--------------|-----------|-------------|----------------|
| OpenClaw      | 500          | 361       | Yes (v2026.3.12) | Medium         |
| NanoBot       | 26           | 155       | No          | High           |
| Zeroclaw      | 37           | 50        | Yes (beta x2) | High           |
| PicoClaw      | 35           | 109       | Nightly     | Medium-High    |
| NanoClaw      | 18           | 37        | No          | Medium         |
| IronClaw      | 25           | 50        | No          | Medium         |
| LobsterAI     | 12           | 9         | No          | Low-Medium     |
| TinyClaw      | 1            | 6         | Yes (v0.0.13) | High           |
| Moltis        | 11           | 11        | No          | High           |
| CoPaw         | 50           | 44        | No          | Medium         |
| ZeptoClaw     | 8            | 6         | No          | High           |
| EasyClaw      | 0            | 0         | No          | N/A            |

\*Health Score: Based on release frequency, bug resolution speed, community engagement, and regression severity (High = stable + responsive; Medium = active but unstable; Low = stagnant or critical issues).

---

### **3. OpenClaw's Position**

**Advantages:**
- Dominates as the **core reference architecture**, driving standardization across the ecosystem.
- Highest issue/PR volume reflects massive community investment and real-world usage.
- Strongest **multi-channel support** (WhatsApp, Signal, Telegram, Feishu) and first-party integrations (OpenAI, xAI).
- Modular plugin system enables third-party extensions (e.g., Signal/iMessage refactoring).

**Technical Differences:**
- Uses a monolithic gateway with extension points vs. NanoBot’s microservice-style channels.
- Prioritizes UI/UX polish (Control UI v2) over minimalism (TinyClaw) or pure CLI (ZeptoClaw).
- Lacks native Linux/Windows desktop clients despite high user demand (#75), unlike emerging competitors.

**Community Size:**
- Clearly largest contributor base and user community, evidenced by 500+ daily updates.
- However, **declining satisfaction** due to post-update instability and Apple-centric design assumptions.

---

### **4. Shared Technical Focus Areas**

Across 8+ projects, these requirements are emerging:

| Need                          | Projects Addressing It                     | Specific Examples |
|------------------------------|--------------------------------------------|-------------------|
| **MCP Integration**           | OpenClaw, NanoBot, Zeroclaw, IronClaw, LobsterAI, TinyClaw, ZeptoClaw | Gateway bridges, tool delegation, stdio channels |
| **Local Model Support**       | LobsterAI, PicoClaw, NanoClaw, Zeroclaw    | Ollama compatibility, GGUF handling, exec tool fixes |
| **Multi-Agent Orchestration**| OpenClaw, CoPaw, TinyClaw, Moltis           | Subagent visibility (#1955), ACP protocol (#1059) |
| **Security Hardening**        | NanoClaw, ZeptoClaw, Moltis                | Filesystem guards, token validation, vault sealing |
| **Channel Extensibility**     | All except EasyClaw                        | WeCom, Feishu, Matrix, Nostr, Slack integrations |
| **Observability**             | NanoBot, TinyClaw, ZeptoClaw               | Streaming metrics, debug modes, memory persistence |

Notably absent: native i18n beyond documentation (only OpenClaw has active #3460), and universal cron UX (broken timezones in CoPaw/OpenClaw).

---

### **5. Differentiation Analysis**

| Project      | Feature Focus                  | Target Users               | Architecture Style         |
|--------------|--------------------------------|----------------------------|----------------------------|
| **OpenClaw** | Full-stack agent platform      | Enterprise/dev teams       | Monolithic gateway + plugins |
| **NanoBot**  | Lightweight, provider-flexible | Individual developers      | Microchannel + OAuth-first |
| **Zeroclaw** | Rapid prototyping, i18n docs   | Global hobbyists           | Rust-native, Docker-first |
| **PicoClaw** | Edge deployment, security      | Embedded/IoT use cases     | Config-driven, audit-heavy |
| **TinyClaw** | Multi-agent coordination       | Research/composable AI     | Hierarchical memory model |
| **ZeptoClaw**| CLI-first, streaming precision | DevOps/automation users    | Minimalist, TTY-aware |
| **CoPaw**    | Chinese enterprise messaging   | Domestic SaaS teams        | Timezone-aware cron engine |

Key divergence: OpenClaw and CoPaw serve institutional users needing compliance; NanoBot/ZeptoClaw target developers wanting composability; TinyClaw explores AGI-like agent ecosystems.

---

### **6. Community Momentum & Maturity**

- **Rapid Iterators**: NanoBot (155 PRs/day), Zeroclaw (50 PRs), PicoClaw (nightly builds) show aggressive feature velocity.
- **Stabilizing Projects**: TinyClaw (v0.0.13 release), Moltis (bug triage focus), ZeptoClaw (safety defaults) prioritize reliability.
- **At-Risk**: LobsterAI (local model bugs unaddressed), EasyClaw (inactive), IronClaw (SSRF vulnerability open).
- **Maturity Indicator**: Only OpenClaw and TinyClaw have >1 year of consistent releases; others remain experimental.

---

### **7. Trend Signals**

From community feedback, three industry shifts are evident:

1. **Shift to Local & Private Inference**  
   Repeated reports of API-dependent features failing locally (LobsterAI #112, PicoClaw #1161) signal demand for self-hosted agent stacks that don’t rely on cloud APIs.

2. **Rise of Composable Agent Protocols**  
   ACP (#1059), MCP delegation (#3069), and event-driven loops (#1316) reflect movement toward interoperable agent ecosystems rather than siloed platforms.

3. **Enterprise Adoption Driven by Observability & Control**  
   Pain points around timezone handling (#1346), cron transparency (#1131), and silent failures (#1270) reveal that businesses need auditable, predictable agent behavior—not just functionality.

For AI agent developers, this means: **prioritize local execution paths, adopt open communication protocols, and bake in operational visibility from day one**. Projects ignoring these will lose ground to more pragmatic alternatives.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – March 14, 2026**

---

### **Today’s Overview**  
NanoBot remains highly active with strong development momentum: 155 PR updates (38 open, 117 merged/closed) and 26 issue updates in the last 24 hours reflect rapid iteration. The project continues to expand its multi-channel architecture and provider support while addressing stability concerns around memory management and tool execution. No new releases were published today, but significant internal improvements—especially around channel plugin modularity and Azure OpenAI OAuth—signal preparation for a future release.

---

### **Releases**  
No new releases published as of March 14, 2026.

---

### **Project Progress**  
- **Merged/Closed PR Highlights**:  
  - [#1909](https://github.com/HKUDS/nanobot/pull/1909): Enforced `tool_choice="required"` for memory consolidation to prevent LLM from skipping `save_memory` calls—fixes critical regression causing silent memory loss.  
  - [#1941](https://github.com/HKUDS/nanobot/pull/1941): Restored plain-text replies for legacy QQ clients after markdown formatting broke backward compatibility.  
  - [#1981](https://github.com/HKUDS/nanobot/pull/1981): Bumped `wecom-aibot-sdk-python` dependency to v0.1.5+ to resolve heartbeat timeouts and disconnection handling.  

These merges address core reliability issues identified in recent user reports.

---

### **Community Hot Topics**  
Top community-engaged items by interaction volume:  
1. **Sub-agent visibility** ([Issue #1955](https://github.com/HKUDS/nanobot/issues/1955), 9 comments): Users demand transparency into sub-agent reasoning loops during execution—a key usability gap in complex workflows.  
2. **Provider switching during conversation** ([Issue #1954](https://github.com/HKUDS/nanobot/issues/1954), 3 comments): Confusion over static provider binding per session suggests demand for dynamic runtime reconfiguration.  
3. **Channel plugin architecture** ([PR #1984](https://github.com/HKUDS/nanobot/pull/1984) / [#1982](https://github.com/HKUDS/nanobot/pull/1982)): Two parallel efforts to decouple channel configs via entry_points, indicating community push for extensibility and third-party integrations.

Underlying need: Enhanced observability, flexibility, and modularity across channels and providers.

---

### **Bugs & Stability**  
High-severity bugs reported today:  
| Issue | Severity | Description | Fix Status |
|-------|----------|-------------|------------|
| [#1979](https://github.com/HKUDS/nanobot/issues/1979) | High | Context window overflow crashes extended chats | No fix PR yet |
| [#1948](https://github.com/HKUDS/nanobot/issues/1948) | Medium | Exec tool fails on `/tmp` even when writable | No fix PR yet |
| [#1947](https://github.com/HKUDS/nanobot/issues/1947) | Medium | Ollama API key misconfigured despite valid setup | Fixed by [PR #1983](https://github.com/HKUDS/nanobot/pull/1983) |
| [#1951](https://github.com/HKUDS/nanobot/issues/1951) | Low | Gateway crashes if MCP started before gateway | Closed without public resolution |

Memory consolidation (`#1931`) and QQ client regression (`#1936`) were resolved via recent PRs.

---

### **Feature Requests & Roadmap Signals**  
Key signals from user requests:  
- **Dynamic provider/model switching mid-session** (#1954): Likely candidate for v0.2.0 if authentication layer supports runtime overrides.  
- **Sub-agent execution visibility** (#1955): May evolve into debug mode or streaming logs—aligns with broader agent observability trends.  
- **XMPP support** (PR #1945): Community-driven extension showing demand for enterprise messaging integrations.  
- **Azure OpenAI Entra ID OAuth** (PR #1987): Enterprise-grade auth enhancement suggesting targeting professional deployments.

---

### **User Feedback Summary**  
Real-world pain points dominate feedback:  
- **Positive**: Praise for lightweight design and “Soul.md/User.md” personality system (noted in #1977).  
- **Negative**: Frustration with static provider bindings, inconsistent tool behavior (`exec`, `spawn`), and lack of context-aware memory limits.  
- **Use Cases**: Users deploy NanoBot for personal assistants, internal bot services, and multi-model orchestration—but stability gaps hinder production adoption.

---

### **Backlog Watch**  
Items requiring maintainer attention:  
- **#1955 (Sub-agent visibility)**: High priority; unresolved since Mar 13 despite active discussion.  
- **#1979 (Context overflow crashes)**: Critical stability blocker for long-running sessions.  
- **#1932 (Disable skills via config)**: Referenced in PR #1934 but original issue lacks closure; may be under-resolved.  

Maintainers should prioritize these to prevent community attrition.

--- 

*Data snapshot reflects GitHub activity up to 2026-03-14T00:00 UTC.*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**Zeroclaw Project Digest – March 14, 2026**

---

### **1. Today’s Overview**  
Zeroclaw shows robust development activity with 37 issues and 50 PRs updated in the last 24 hours, signaling strong community engagement and rapid iteration. The project released two beta versions (v0.1.9-beta.140 and v0.1.9-beta.136), focusing on i18n documentation expansion and stability fixes for older browsers and Ollama model compatibility. With 35 issues closed and 41 PRs merged, the team is actively resolving regressions and enhancing core functionality, particularly around channels, MCP tools, and cross-platform support.

---

### **2. Releases**  
- **v0.1.9-beta.140**: Added full Chinese documentation translation and expanded i18n coverage to all 30 languages via localized `docs/README` and `SUMMARY.md` files ([PR #3450](https://github.com/zeroclaw-labs/zeroclaw/pull/3450)).  
- **v0.1.9-beta.136**: Fixed crypto.randomUUID fallback for legacy browsers and resolved reasoning_enabled handling for unsupported Ollama models ([PR #3407](https://github.com/zeroclaw-labs/zeroclaw/pull/3407), [PR #3411](https://github.com/zeroclaw-labs/zeroclaw/pull/3411)). No breaking changes reported.

---

### **3. Project Progress**  
Key merged PRs advanced critical areas:  
- **MCP Tool Optimization**: On-demand loading via `tool_search` reduces context waste (PR #3446).  
- **Dashboard UX**: Draft preservation across view switches and electric blue theme redesign (PRs #3443, #3445).  
- **Provider Flexibility**: Custom API path suffix support for non-standard LLM endpoints (PR #3447).  
- **Platform Support**: Windows shell tool execution now uses `cmd.exe` natively (PR #3442); x86_64 Windows CI added (PR #3449).  
- **Stability Fixes**: Cron scheduler resilience improved to skip malformed jobs instead of halting (PR #3405); Matrix Relation import resolved (PR #3368).

---

### **4. Community Hot Topics**  
Top-discussed items reflect demand for extensibility and reliability:  
- **Matrix Channel Integration** (#2953): Users urgently need `channel-matrix` flag in official builds to enable enterprise messaging workflows ([Issue #2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953)).  
- **MCP Delegation Bug** (#3069): Subagents fail to access MCP tools despite correct detection—highlighting a gap in agent hierarchy tool propagation ([Issue #3069](https://github.com/zeroclaw-labs/zeroclaw/issues/3069)).  
- **Branch Policy Confusion** (#3131): Mixed signals about `master` vs. `main` branches cause contributor friction; 4 👍 reactions signal urgency for clarification ([Issue #3131](https://github.com/zeroclaw-labs/zeroclaw/issues/3131)).

---

### **5. Bugs & Stability**  
High-severity regressions detected post-branch switch:  
- **S0 Data Loss Risk** (#3397): Branch switch to `master` caused loss of agent_ipc, MCP, and other features ([Issue #3397](https://github.com/zeroclaw-labs/zeroclaw/issues/3397)).  
- **S1 Workflow Blockers**:  
  - Compilation failure on 32-bit targets due to undeclared `AtomicU32` (Issue #3452, opened today).  
  - Matrix SDK compilation blocked by Rust 1.94 issue (#3425).  
  - Heartbeat injecting stale tool results into new sessions (#3402).  
Fixes are underway: PRs targeting atomic types and branch reconciliation expected soon.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven priorities suggest upcoming focus:  
- **Dynamic Node Discovery**: Strong interest in OpenClaw-like peripheral device integration (#3093, closed but addressed in PR #3448).  
- **WeChat Enterprise Support**: Native WeCom channel requested for China-based teams (#3396).  
- **Verbose Debugging Mode**: Requested to expose agent decision logic (#3316, 1 👍).  
- **Slack Thread Replies**: Missing inline thread support flagged for priority (#3084).  
Next release likely includes MCP delegation fixes, verbose logging, and multi-language dashboard polish.

---

### **7. User Feedback Summary**  
Pain points center on **fragmented platform support** and **configuration brittleness**:  
- Docker distroless images lack shells, blocking file operations (#3359).  
- Custom LLM providers require manual header/config tweaks (e.g., Kimi, Aliyun) without standardized hooks (#3189).  
- Slack/Matrix adapters feel "half-baked"—thread support and read receipts missing (#3084, #3357).  
Positive feedback highlights i18n progress and responsive maintainer engagement (e.g., Chinese docs merged swiftly).

---

### **8. Backlog Watch**  
- **#2839 Bridge Channel**: Critical for third-party integrations but never reached `master`—now revived in PR #3401.  
- **#2953 Matrix Flag**: Open since March 7; unresolved despite high severity. Maintainer action needed to unblock users.  
- **#3131 Branch Policy**: Unanswered for 10 days; risks contributor churn. Requires public RFC or governance update.  

--- 

*Data sources: GitHub API snapshot as of 2026-03-14T00:00:00Z.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – March 14, 2026**

---

### **Today’s Overview**  
PicoClaw remains highly active with 109 PR updates and 35 issue updates in the last 24 hours. The project continues its rapid development cycle, driven by a strong focus on agent architecture refactoring, security hardening, and multi-provider support. A new nightly build (v0.2.2-nightly.20260313.19835b2f) was released, reflecting ongoing experimental improvements. Overall activity indicates sustained momentum with both feature expansion and stability work underway.

---

### **Releases**  
- **Nightly Build**: `v0.2.2-nightly.20260313.19835b2f`  
  This automated nightly build includes recent changes from the main branch but is marked as unstable. Users are advised to use it cautiously. Full changelog: [GitHub Compare](https://github.com/sipeed/picoclaw/compare/v0.2.2...main)

No stable releases were published today.

---

### **Project Progress**  
**Merged/Closed PRs (7)**:  
Notable progress includes:
- Fix for legacy provider-only configs not inheriting correct model defaults (#1513)
- Performance improvement in cron job lookup via in-memory indexing (#1518, previously #1494)
- Documentation updates for Spanish README (#1448), Python script skill example (#1523), and cron task visibility (#1515)
- Security enhancements: credential encryption layer introduced via AES-GCM and SecureStore (#1521)

These advances reflect continued investment in configuration robustness, user experience clarity, and infrastructure reliability.

---

### **Community Hot Topics**  
Top discussions highlight core architectural shifts:

1. **[#1218] Agent Refactor: Defining Agent Semantics**  
   *24 comments* — Proposal to formalize agent identity through `SOUL.md` and `AGENT.md`, emphasizing personality and values over rigid configuration. Signals growing demand for richer agent expressiveness.

2. **[#1161] Local Ollama Integration Not Producing Responses**  
   *17 comments* — Users struggle with local model setup; despite agent startup success, no final output is generated. Indicates friction in self-hosted LLM workflows.

3. **[#1316] Event-Driven Agent Loop with Hooks & Interrupts**  
   *9 comments, 1 👍* — Advocates for observable, interruptible agent execution to enable better orchestration and debugging. Aligns with broader trend toward composable AI agents.

4. **[#1506] Expose Local File Paths in Feishu Messages**  
   *9 comments, 1 👍* — Critical for enabling agent file tools when non-image files are uploaded via Feishu. Shows integration-specific needs driving feature requests.

These threads reveal user desires for greater agent transparency, smoother local deployment, and deeper channel integrations.

---

### **Bugs & Stability**  
High-severity issues reported today:

| Issue | Severity | Description | Status |
|-------|----------|-------------|--------|
| [#1150] Pool factory panic causes deadlock | High | Factory initialization failure leaves inflight requests orphaned, permanently blocking target routing | Open |
| [#1493] New model not effective until restart | Medium | Model changes require gateway restart to take effect | Open |
| [#1502] Mistral integration fails with "Extra inputs..." | Medium | API schema mismatch causing request rejection | Open |
| [#1526] Exec tool bypasses workspace symlink guard | High | Restricted execution still allows reading outside workspace via symlinks | Open |

Fix PRs exist for some (e.g., #1526 has linked fix), but critical concurrency and security flaws remain unresolved. Two high-priority security issues (#1530, #1529) warn of overly permissive default configurations in public deployments.

---

### **Feature Requests & Roadmap Signals**  
Emerging priorities based on recent activity:

- **Azure OpenAI Support** (#1424): First-class provider integration requested
- **OpenIM Channel Plugin** (#1372): Expansion beyond WeChat/Feishu/Telegram
- **Capability Discovery Endpoint** (#1474): Enables external orchestration layers
- **Pluggable Speech I/O** (#1503): STT/TTS abstraction for audio channels
- **Model Search & FastEmbed Integration** (#1498): Semantic retrieval enhancement

Given the agent refactor meta-issue (#1216) and multiple steering/hook proposals, expect major architectural updates in v0.3.0, possibly including event-driven loops and improved observability.

---

### **User Feedback Summary**  
Real-world pain points include:
- **Configuration Confusion**: Missing docs for advanced fields (#1489); legacy provider configs misbehave (#1513)
- **Local Deployment Friction**: Ollama models fail silently; new models need restarts
- **Security Misconfigurations**: Default wildcard origins and query-token auth expose endpoints unnecessarily
- **File Tool Limitations**: Agents can’t access uploaded non-image files without path exposure (#1506)
- **Cron Usability**: Lack of clear commands to view/manage scheduled tasks (#1501)

Positive signals include appreciation for performance optimizations and documentation efforts. However, recurring complaints about silent failures and opaque agent behavior suggest UX maturity gaps.

---

### **Backlog Watch**  
Two long-standing issues require maintainer attention:

- **[#1150] Pool Deadlock on Factory Panic**  
  Created Mar 5, updated Mar 13. No progress since initial report. Affects reliability under error conditions. Linked to routing overhaul commit d16290b.

- **[#1203] Safety Guard Blocks Valid URLs**  
  Closed Mar 13 after fix (#1417). Previously blocked legitimate browser tool usage like `open https://github.com`.

Additionally, **[#1216] Meta: Agent Refactor** (created Mar 7) remains unaddressed despite being a declared strategic initiative. Its lack of recent activity may indicate stalled momentum or shifting priorities.

--- 

*End of Digest*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest – March 14, 2026**

---

### **Today's Overview**
NanoClaw shows high development velocity with 37 PRs updated in the last 24 hours and 18 new issues, indicating active iteration on core functionality and security. The project remains focused on expanding channel integrations (WhatsApp, Signal, Nostr), hardening agent reliability, and enhancing memory/search capabilities. No new releases were published today, but multiple critical bug fixes and feature merges suggest imminent stabilization ahead of a potential v0.5.x release.

---

### **Releases**
No new releases were published as of 2026-03-14.

---

### **Project Progress**
**Merged/Closed PRs (today):**
- [#1040](https://github.com/qwibitai/nanoclaw/pull/1040): Fixes message backlog truncation by implementing `getAllMessagesSince()` to fully drain per-group queues and prevent missed messages.
- [#1037](https://github.com/qwibitai/nanoclaw/pull/1037): Adds typed Tanren API client module with full OpenAPI-derived types and error hierarchy for robust worker-manager communication.
- [#1036](https://github.com/qwibitai/nanoclaw/pull/1036) / [#1032](https://github.com/qwibitai/nanoclaw/pull/1032) / [#1035](https://github.com/qwibitai/nanoclaw/pull/1035): Implements WebFetch/WebSearch output sanitization via PostToolUse hooks to block adversarial prompt injection payloads—now consolidated into one merged fix.
- [#1034](https://github.com/qwibitai/nanoclaw/pull/1034): Integrates Trivy CVE scanning into CI/CD for both container images and npm dependencies with fail-on-high/critical thresholds.

These merges reflect significant progress on security hardening, API robustness, and observability.

---

### **Community Hot Topics**
The most discussed items show strong demand for **enhanced searchability** and **cross-platform messaging**:
- **[#908](https://github.com/qwibitai/nanoclaw/issues/908)**: High-priority request for FTS5 conversation indexing—users want keyword-based recall of past interactions. Two comments indicate growing frustration with lack of long-term context.
- **[#1051](https://github.com/qwibitai/nanoclaw/pull/1051)** & **[#1050](https://github.com/qwibitai/nanoclaw/pull/1050)**: WhatsApp integration PR includes critical crash fixes; community awaits stability before adoption.
- **[#979](https://github.com/qwibitai/nanoclaw/pull/979)**: LanceDB memory skill aims to solve session遗忘 (forgetting)—a recurring pain point among power users managing multi-turn workflows.

Underlying need: Users seek persistent, searchable agent memory and reliable multi-channel deployment.

---

### **Bugs & Stability**
High-severity bugs reported today threaten service reliability:
1. **[#1047](https://github.com/qwibitai/nanoclaw/issues/1047)**: WhatsApp crashes on QR scan/logout via `process.exit()` calls—**fix incoming in #1050**.
2. **[#1020](https://github.com/qwibitai/nanoclaw/issues/1020)**: Duplicate message delivery due to redundant `sendMessage()` calls—**no fix yet**, but root cause identified.
3. **[#1045](https://github.com/qwibitai/nanoclaw/issues/1045)**: Invalid Claude tokens accepted silently—**fixed in #1044 & #1048**.
4. **[#1046](https://github.com/qwibitai/nanoclaw/issues/1046)**: Scheduled tasks lose MCP credentials—**addressed in #1049**.

Two critical WhatsApp crashes are now mitigated; duplicate messaging requires further investigation.

---

### **Feature Requests & Roadmap Signals**
Key signals from recent activity:
- **Multi-provider LLM support**: User asks if Anthropic alternatives like DeepInfra are supported (#1015)—suggesting expansion beyond Claude.
- **Prompt caching integration**: Community highlights 90% cost reduction opportunity via external prompt-caching tools (#1033).
- **Nostr & Lightning payments**: Autonomous zap capability (#1042) and NIP-17 DMs (#1041) signal crypto-native use case growth.
- **Browser automation**: Chrome extension + real browser control proposed (#1038)—aligns with agent-as-automation trend.

Likely next version will prioritize FTS5 search (#908), WhatsApp stability, and provider flexibility.

---

### **User Feedback Summary**
Users report **frustration with token validation delays**, **crash-prone channel setups**, and **inconsistent assistant naming across groups**. Positive feedback focuses on rapid feature delivery (e.g., Signal support) and proactive security patches (WebFetch sanitization). Use cases span personal AI assistants, developer tooling (Tanren API), and decentralized communication (Nostr). Satisfaction is high where reliability exists but drops sharply during setup or first-use failures.

---

### **Backlog Watch**
- **[#908](https://github.com/qwibitai/nanoclaw/issues/908)**: FTS5 indexing has been open since March 10 with 2 comments—maintainer must assign or clarify timeline.
- **[#829](https://github.com/qwibitai/nanoclaw/issues/829)**: SOUL.md anti-fabrication rule needed—urgent for agent trustworthiness.
- **[#909](https://github.com/qwibitai/nanoclaw/issues/909)**: IPC flow for session search depends on #908—blocked without resolution.

Maintainers should address these within 7 days to avoid stalling major features.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – March 14, 2026**

---

### 1. Today's Overview  
IronClaw shows robust development activity with 25 issues and 50 pull requests updated in the last 24 hours. The project maintains a healthy balance of bug fixes, security reviews, and feature expansions—particularly around configuration unification, multi-tenant isolation, and channel/plugin support. No new releases were published today, indicating continued stabilization ahead of a potential next milestone. Overall, the project appears stable but under active refactoring to address architectural gaps in configuration management, owner scoping, and extensibility.

---

### 2. Releases  
**No new releases** occurred today. The last release remains unreleased as of this report.

---

### 3. Project Progress  
Today saw **8 merged/closed PRs**, though none are highlighted in detail due to lack of explicit success indicators in the provided data. However, several large-scale refactors advanced:
- **PR #1118**: Multi-tenant auth with per-user workspace isolation (rebased from earlier closed work)  
- **PR #1144**: Moved MCP servers from hardcoded Rust code into JSON manifests for better maintainability  
- **PR #1157**: Telegram owner verification during hot activation to prevent null-owner edge cases  

These reflect ongoing efforts toward secure, scalable deployment and configuration modularity.

---

### 4. Community Hot Topics  
Top community-engaged items include:

- **Issue #728**: Compatibility with Kimi K2.5 model fails due to enforced temperature=1 and missing `reasoning_content` field ([link](https://github.com/nearai/ironclaw/issues/728))  
  → 4 comments, 3 👍; signals growing demand for strict LLM API compliance across providers.

- **PR #1156**: Web UI adds follow-up suggestion chips and ghost text ([link](https://github.com/nearai/ironclaw/pull/1156))  
  → Improves UX by surfacing actionable next steps directly in chat interface.

- **Issue #991**: Intermittent Telegram bot token validation failures (HTTP 404 despite valid tokens) ([link](https://github.com/nearai/ironclaw/issues/991))  
  → Highlights reliability concerns in third-party integrations.

Underlying need: **seamless, resilient integration with external platforms** (Slack, Telegram, Feishu) without manual retries or opaque errors.

---

### 5. Bugs & Stability  
New bugs reported today span UI, auth, and tool execution:

| Severity | Issue | Description |
|--------|-------|-------------|
| **High** | [#1103](https://github.com/nearai/ironclaw/issues/1103) | SSRF risk via unvalidated embedding base URL |
| **High** | [#1142](https://github.com/nearai/ironclaw/issues/1142) | O(n²) string allocations in SSE parser causing performance degradation |
| **Medium** | [#1139](https://github.com/nearai/ironclaw/issues/1139) | Safari IME composition triggers accidental message send |
| **Medium** | [#1141](https://github.com/nearai/ironclaw/issues/1141) | OAuth errors stored as String instead of AuthError type |

Fixes exist for some (e.g., #1153, #1152 target #1142/#1141). Security-critical SSRF issue (#1103) lacks immediate mitigation.

---

### 6. Feature Requests & Roadmap Signals  
Key user-driven enhancements:

- **Image upload & analysis** (Issue #1122, #1123): Users request native support for JPEG/PNG/GIF processing. Likely upcoming given recent focus on multimodal tooling.
- **Socket Mode for Slack** (Issue #1155): Demand for private Slack deployments without public webhooks—parallels OpenClaw’s offering.
- **Human-readable cron summaries** (Issue #1131, PR #1154): Already being implemented; confirms UX polish is a priority.

These suggest **multimodality** and **enterprise-friendly integrations** are near-term roadmap pillars.

---

### 7. User Feedback Summary  
Real-world pain points dominate feedback:

- **Setup friction**: Database save failures during `onboard` (#846), intermittent OAuth expiry (#1136)
- **Integration unreliability**: Telegram/Safari quirks, Google Sheets silent write failures (#1002)
- **Lack of transparency**: Raw cron expressions, unclear error messages for token validation

Users appreciate CLI improvements (model management, logs command) but express frustration over **inconsistent behavior across channels** and **poor error diagnostics** in third-party tooling.

---

### 8. Backlog Watch  
Long-standing issues needing attention:

- **Issue #639**: Support custom headers for MCP auth — closed but may resurface; still relevant for non-OAuth MCPs.
- **Issue #760 / #351**: Thread context pollution — referenced in #1118 rebase; resolved architecturally but requires full audit.
- **Issue #764**: Capacity alerting for worker machines — marked closed but no evidence of implementation; infrastructure monitoring gap persists.

Maintainers should verify whether these truly reached closure or remain latent risks.

--- 

*Data compiled from GitHub activity up to 2026-03-14. All links point to nearai/ironclaw repository.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is a structured project digest for LobsterAI based on the provided GitHub data.

***

### 1. Today's Overview

LobsterAI shows high development activity with 9 merged PRs and 12 active issues reported in the last 24 hours, indicating a very dynamic period. The project is actively addressing integration with OpenClaw, improving startup performance, and fixing gateway-related bugs. A significant portion of the recent issues are related to local model usage and tool/skill execution, highlighting a key area of user focus and potential improvement. No new releases were published today.

### 2. Releases

No new releases have been published today.

### 3. Project Progress

Today, 9 pull requests were merged, representing substantial progress across several areas:

*   **OpenClaw Integration & Memory:** Multiple PRs (#412, #411, #403) from @liuzhq1986 focused on stabilizing and enhancing the integration with OpenClaw, including fixing memory issues, removing redundant sandbox code, and migrating settings.
*   **MCP Bridge & Gateway:** PRs #408, #401, and #346 from @btc69m979y-dotcom introduced or improved the MCP Bridge for OpenClaw's embedded agent, fixed gateway startup deduplication, and addressed channel message display issues.
*   **Performance Optimization:** PR #395 optimized the openclaw gateway startup speed significantly, reducing it to ~15s for subsequent starts.
*   **Task Management:** PR #409 added support for OpenClaw in scheduled tasks, and PR #410 fixed a bug related to deleting scheduled tasks.

### 4. Community Hot Topics

The community is currently most engaged with issues surrounding local model functionality and tool execution. Two issues stand out due to their comments and relevance:

*   **Issue #112: Local models cannot call skills.** This issue, created by @wxpop, is highly critical for users relying on locally deployed models like Qwen3:14b with Ollama. It reports an inability to invoke tools/skills when using local models, which works perfectly with API-based models. This indicates a significant gap in local model capability and is a primary pain point for users seeking self-hosted solutions. [Link](https://github.com/netease-youdao/LobsterAI/issues/112)
*   **Issue #405: Local Ollama cannot execute commands.** Created by @chehxing, this issue describes a similar problem where local models (Qwen2.5-coder:7b, Qwen3:8b, DeepSeek-R1:8b) fail to execute commands like listing directory contents, despite working with online models. This suggests a widespread issue with command execution or tool invocation specifically within the local Ollama environment. [Link](https://github.com/netease-youdao/LobsterAI/issues/405)

These issues collectively point to a core need for robust and consistent tool/skill execution capabilities across both local and remote models.

### 5. Bugs & Stability

Several bugs were reported today, primarily concerning local model functionality and task execution:

1.  **Local Model Skill Execution Failure (Issue #112):** Critical for users of local models. Users report that skills/tools cannot be called with local models (e.g., Qwen3:14b + Ollama), while they work fine with API models. This is a major stability and feature regression for local deployments.
2.  **Local Ollama Command Execution Failure (Issue #405):** Another critical issue for local model users. Commands like `ls` are not executed by local Ollama models, even after configuring `openclaw.json` correctly. This affects basic utility and interactivity.
3.  **Token Limit Error on Simple Input (Issue #370):** A severe usability bug where a simple "hello" input causes a token limit error (8961 tokens input vs. 32000 max). This suggests a significant context accumulation problem or incorrect token counting, severely impacting basic chat functionality.
4.  **Scheduled Task Notification Failure (Issue #285):** An intermittent stability issue where scheduled tasks fail to send DingTalk notifications after execution without any user intervention, potentially linked to server environment or network configuration.
5.  **Gateway Startup Failure in VM (Issue #402):** A crash issue where the application exits unexpectedly during startup on a Debian 12.2 VM, preventing any use of the software.
6.  **API Connection Failure (Issues #406, #399):** Reports of being unable to connect to specific API services (Baidu Qianfan CodingPlan, Alibaba Cloud Bailian GLM 4.5), suggesting potential issues with API endpoint handling, authentication, or service availability detection.

Fixes for some of these issues, particularly those related to OpenClaw and gateway, are already underway as seen in the merged PRs. However, fixes for the local model skill/command execution issues have not yet been released.

### 6. Feature Requests & Roadmap Signals

User feedback strongly signals the following features for future development:

*   **Enhanced Local Model Capabilities:** The repeated issues with local model skill and command execution indicate a strong demand for improving native support for running models directly on user hardware, rather than relying on external APIs.
*   **Improved Tool/Skill Selection UI:** Issue #404 requests the ability to select custom user-created skills directly from a dialog box, suggesting an enhancement to the current skill management interface for better discoverability and ease of use.
*   **Robust Scheduled Task Management:** Issues #407 and #358 highlight problems with cron job generation and task execution reliability, pointing towards a need for more intuitive and stable scheduling features.
*   **MCP Integration:** The rapid progress on MCP Bridge (#408) and gateway optimizations (#395) indicates a strategic roadmap direction towards deeper integration with the Model Context Protocol, enabling richer external tool access.

### 7. User Feedback Summary

Users express significant frustration with the inconsistency between local and remote model experiences. Key pain points include:

*   **Inconsistent Functionality:** The stark difference in skill/tool execution between local and API models is a major source of dissatisfaction, undermining the value proposition of local deployment.
*   **Unstable Core Features:** Issues with scheduled tasks notifying properly and gateway startup failures indicate instability in fundamental operational aspects of the application.
*   **Usability Blockers:** The extreme token consumption issue (#370) and API connection failures (#406, #399) create immediate blockers for users, preventing them from even initiating conversations or using the software.
*   **Configuration Challenges:** Users are actively troubleshooting complex setups (e.g., VMs, specific models), indicating that documentation or default configurations could be improved to reduce friction.
*   **Performance Concerns:** Reports of "speed too slow" and "waiting" suggest performance bottlenecks that impact user experience, especially when interacting with local models or executing tasks.

Overall, users are highly motivated to resolve these issues, as evidenced by the detailed bug reports and feature requests, but are currently facing significant hurdles that detract from their overall satisfaction with the project.

### 8. Backlog Watch

A long-standing and critical issue requiring maintainer attention is:

*   **Issue #112: Local models cannot call skills.** This issue, initially created on 2026-02-26, has been consistently updated and is still open. It represents a fundamental capability gap for local model users and is a primary driver of user dissatisfaction. Given its age and ongoing relevance, it should be prioritized for investigation and resolution. [Link](https://github.com/netease-youdao/LobsterAI/issues/112)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

**TinyClaw Project Digest – March 14, 2026**

---

### 1. Today's Overview  
TinyClaw remains highly active with 6 PR updates and 1 new release (v0.0.13) within the last 24 hours. The project is rapidly maturing its core agent infrastructure, introducing a hierarchical memory system, agent configuration UI, and significant refactoring around provisioning and skill management. With one high-severity bug resolved and multiple feature enhancements merged, the development pace suggests strong momentum toward a more stable and user-friendly experience.

---

### 2. Releases  
**v0.0.13** – Released today  
- **Agent Configuration UI**: New tabbed interface for managing skills, system prompts, memory settings, and heartbeat monitoring per agent ([PR #207](https://github.com/TinyAGI/tinyclaw/pull/207)).  
- **Agent Provisioning Refactor**: Consolidates workspace creation logic and replaces file duplication with symbolic links for `.claude/skills`, improving maintainability and disk efficiency ([PR #211](https://github.com/TinyAGI/tinyclaw/pull/211)).  
- **Hierarchical Memory System**: Persistent, organized memory storage via markdown files with YAML metadata for agent knowledge retention ([PR #209](https://github.com/TinyAGI/tinyclaw/pull/209)).  
- **System Prompt Optimization**: AGENTS.md is now processed in-memory at runtime instead of on-disk manipulation, reducing race conditions and stale data ([PR #208](https://github.com/TinyAGI/tinyclaw/pull/208)).  

*No breaking changes reported; all improvements are additive or internal refactors.*

---

### 3. Project Progress  
All six updated PRs were merged or closed today:
- **Merged Features**: Agent config UI, hierarchical memory, symlink-based skill provisioning, and in-memory prompt handling.
- **Refactored Core Logic**: Centralized agent provisioning reduces code duplication and improves reliability.
- **Documentation Update**: AGENTS.md template now dynamically injects teammate info during startup.

These advances solidify TinyClaw’s foundation for scalable multi-agent workflows.

---

### 4. Community Hot Topics  
While no issue or PR currently has comments or reactions, **#57** ("Add Google chat, API, and MCP comms") stands out as a long-standing feature request dating back to February 14. The ask reflects growing demand for broader communication protocol support beyond current integrations. Though inactive recently, it signals community interest in expanding TinyClaw’s integration surface—potentially aligning with future roadmap priorities.

---

### 5. Bugs & Stability  
- **Bug #210**: A `ReferenceError: exports is not defined in ES module scope` surfaced after prior fixes (#205), indicating an unresolved Node.js module compatibility issue during agent execution via `tinyclaw pairing approve <id>`.  
- **Status**: **Closed today**—fix applied and released in v0.0.13. No regression detected post-fix.  
- Severity: High (blocked CLI workflow), but promptly resolved by maintainers.

---

### 6. Feature Requests & Roadmap Signals  
The open PR **#191** proposes a full rebrand from "TinyClaw" to "TinyAGI", reflecting a strategic shift toward clearer alignment with Artificial General Intelligence concepts. Given its recent activity and comprehensive scope (renaming packages, env vars, CLI commands), this rebrand may signal upcoming public positioning changes rather than just cosmetic updates.

Additionally, **#57** (Google/Slack/Teams integration) remains unaddressed but could resurface if the team prioritizes external connectivity features.

---

### 7. User Feedback Summary  
Users are actively leveraging advanced agent customization and persistent memory capabilities, suggesting satisfaction with recent UX improvements. However, low engagement on newer issues (e.g., zero 👍 or comments) indicates either niche usage or a need for better outreach to drive community participation.

Pain points remain minimal post-bug resolution, though lack of real-time collaboration features (as requested in #57) continues to be a gap for teams seeking integrated messaging.

---

### 8. Backlog Watch  
- **Issue #57**: Open since Feb 14, no recent activity. Represents a meaningful expansion opportunity but lacks maintainer response.
- **PR #191**: Actively worked on (updated Mar 13); likely nearing completion given rapid progress. If merged soon, it will reframe the entire project identity.

Both items warrant closer attention to avoid stagnation on high-impact features and branding clarity.

--- 

*Data compiled from [TinyAGI/tinyclaw GitHub](https://github.com/TinyAGI/tinyclaw) as of 2026-03-14.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest – March 14, 2026**

### 1. Today's Overview  
The Moltis project shows consistent development activity with 22 updates in the last 24 hours—11 issues and 11 pull requests. No new releases were published today, indicating active stabilization rather than a major release cycle. The team is focused on bug fixes, tool reliability improvements, and dependency maintenance, reflecting a mature development rhythm. Overall project health appears stable, with responsive issue resolution and incremental feature refinement.

---

### 2. Releases  
No new releases were published today.

---

### 3. Project Progress  
Five pull requests were merged or closed today, all addressing critical user-facing functionality:

- **#418**: Fixed chat history persistence during aborted runs, ensuring partial assistant output remains visible after interruption. This resolves a key usability regression (#186).
- **#406**: Improved password field accessibility in onboarding flows by adding proper `autocomplete="new-password"` hints and labels—directly closing enhancement request #183.
- **#415**: Restored onboarding accessibility post-authentication reset, preventing broken navigation after auth failures (#316).
- **#409**: Clarified cron setup UI copy, renaming “One-Time” to “Run Once” and improving timezone defaults and payload guidance.
- **#402**: Corrected QMD CLI installation instructions in documentation, fixing references to deprecated packages.

These changes collectively enhance reliability, UX consistency, and documentation accuracy.

---

### 4. Community Hot Topics  
No single issue or PR dominated engagement today, but several reflect recurring pain points:

- **#383 (Support Lark/Feishu)**: Received 2 upvotes and was recently updated, signaling strong interest in expanding collaboration platform integrations. Likely part of an upcoming extensibility roadmap.
- **#317 (Jinja Template Error)**: Recently reopened after being stale; users continue encountering strict system message ordering requirements with certain GGUF models like Qwen. A fix PR (#431) was submitted today to consolidate system messages and prevent template errors.

Both topics highlight demand for broader model compatibility and richer third-party integrations.

---

### 5. Bugs & Stability  
Three high-severity bugs reported today involve core agent functionality:

- **#426**: Incorrect node addresses causing execution failures—likely impacts command reliability.
- **#427**: Agent confusion over node identities during command execution, suggesting state management instability.
- **#428**: Full chat history exposed despite vault being sealed, representing a potential security/data leakage concern.

Two related fixes are already under review:
- **#432** addresses the exec tool’s unconditional `node` parameter exposure when nodes aren’t connected.
- **#431** tackles Jinja template errors in multi-system-message scenarios.

While no crashes were reported, these bugs point to edge cases in agent orchestration and access control that require prompt attention.

---

### 6. Feature Requests & Roadmap Signals  
- **Lark/Feishu support (#383)** remains actively discussed and upvoted, likely to be prioritized given its alignment with enterprise collaboration needs.
- Password manager integration (#183) has been implemented via #406, confirming responsiveness to user experience feedback.
- Documentation clarity (#244, #402) continues to drive iterative improvements in onboarding and developer guidance.

Signals suggest the next milestone may include expanded integrations and enhanced model flexibility, especially around non-OpenAI-compatible backends (e.g., llama.cpp).

---

### 7. User Feedback Summary  
Users report frustration with:
- **Agent unpredictability** around node identification and command execution (#426, #427).
- **Security expectations**: Vault-sealed states should restrict data access (#428).
- **Tooling friction**: Cron tools failing silently and authentication resets breaking workflows (#316, #317).

Positive feedback centers on:
- Successful resolution of password manager compatibility (#183 → #406).
- Clearer UI messaging around cron scheduling (#409).

Overall sentiment leans constructive but highlights need for greater operational predictability.

---

### 8. Backlog Watch  
- **Issue #317** (Jinja Exception: System message must be at the beginning): Open since March 3, recently reactivated. Fix PR #431 addresses it, but requires testing across GGUF models. Maintainer attention recommended.
- **Issue #184** ("npm install -g @anthropic/qmd" not working): Closed but may still affect legacy users. Consider updating migration paths if `@anthropic/qmd` is deprecated.

Both warrant follow-up to ensure full resolution and prevent regression.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest – March 14, 2026**

---

### 1. **Today's Overview**  
CoPaw remains highly active with 50 new issues and 44 pull requests updated in the last 24 hours. The project shows strong community engagement, particularly around channel integrations (Feishu, QQ, WeCom), timezone handling, and model provider compatibility. No new releases were published today, but several critical bug fixes and feature enhancements are actively being merged or reviewed. Overall activity indicates healthy development momentum with recurring themes in stability, localization, and extensibility.

---

### 2. **Releases**  
No new releases were made today. The latest stable version remains **v0.0.7**, released earlier this week. Users continue to report regressions from this update, especially around Ollama connectivity and cron job timezones.

---

### 3. **Project Progress**  
- **Merged PRs**:  
  - [#1432](https://github.com/agentscope-ai/CoPaw/pull/1432): Fixes timezone mismatch in cron scheduling by injecting UTC context into `env_context`, resolving #1346 and #1387.  
  - [#1396](https://github.com/agentscope-ai/CoPaw/pull/1396): Deduplicates built-in skill listings that were incorrectly appearing as custom skills.  
  - [#1440](https://github.com/agentscope-ai/CoPaw/pull/1440): Removes obsolete skill-only test files to streamline CI.  

- **Key Features Advancing**:  
  Nextcloud Talk integration (#1460), WeCom channel support (#1407), and CLI auto-update command (#1278) are under review. These reflect growing demand for enterprise messaging platform coverage.

---

### 4. **Community Hot Topics**  
- **[#1346](https://github.com/agentscope-ai/CoPaw/issues/1346)**: Why doesn’t CoPaw embed local time in system prompts? (7 comments)  
  Users want automatic time injection to reduce reliance on tool calls—especially for weaker models. This ties directly to #1387 about cron timezones.  
- **[#51](https://github.com/agentscope-ai/CoPaw/issues/51)**: Request for WeChat Work (企业微信) support (7 comments)  
  Already addressed via PR #1407, but highlights persistent demand for Chinese enterprise channels.  
- **[#1059](https://github.com/agentscope-ai/CoPaw/issues/1059)**: ACP (Agent Communication Protocol) support (2 comments)  
  Signals interest in interoperability with IDE agents like Claude Code—a forward-looking roadmap item.

---

### 5. **Bugs & Stability**  
High-severity issues reported today include:
1. **[#1385](https://github.com/agentscope-ai/CoPaw/issues/1385)**: CPU spikes to 100% on Ubuntu 25.10 after message receipt (6 comments). Root cause traced to `read_file` or MCP components; fix PR submitted.
2. **[#1293](https://github.com/agentscope-ai/CoPaw/issues/1293)**: `write_file` and shell command failures due to token limits (6 comments).
3. **[#1345](https://github.com/agentscope-ai/CoPaw/issues/1345)**: Feishu channel "delayed reply" where new messages are ignored (5 comments).
4. **[#1176](https://github.com/agentscope-ai/CoPaw/issues/1176)**: Frontend regex fails to parse Qwen thinking content (4 comments).

Fixes are pending for #1385 and #1345. Critical Windows file-lock errors (#1431, #1429) also surfaced.

---

### 6. **Feature Requests & Roadmap Signals**  
- **ACP Support** (#1059): Likely upcoming given its strategic value for agent ecosystems.
- **Multi-Agent Concurrent Execution** (#1298): User explicitly compares CoPaw to OpenClaw’s multi-agent UI—suggests UX gap.
- **Image Upload in Console** (#1045): Multi-modal input capability requested by multiple users.
- **Custom Skill Resource Bundles** (#1316): Need to upload scripts/assets beyond prompts—already closed with partial resolution via #1350 (lobehub import), but full support still lacking.

---

### 7. **User Feedback Summary**  
- **Pain Points**: Timezone inconsistency across cron jobs and tools (#1346, #1387); poor error visibility during silent agent crashes (#1270); fragmented skill management (#1370).  
- **Satisfaction**: Praise for rapid response to WeCom integration request (#51 → #1407) and deduplication fix (#1396).  
- **Use Cases**: Enterprise deployment via Docker (#1452), offline LLM access via Ollama (#1458), and long-running task debugging (#1439) are top concerns.

---

### 8. **Backlog Watch**  
- **[#1059](https://github.com/agentscope-ai/CoPaw/issues/1059)** (ACP Support): No maintainer comment in 4 days despite high interest. Risk of stalling adoption by IDE-integrated agent teams.  
- **[#1298](https://github.com/agentscope-ai/CoPaw/issues/1298)** (Multi-Agent UI): Unanswered since Mar 11. Requires significant frontend/back-end refactoring.  
- **[#1167](https://github.com/agentscope-ai/CoPaw/issues/1167)** (Missing httpx[socks]): One-line install incompleteness affects proxy users—no update in 3 days.

--- 

*Data-driven insights confirm CoPaw is evolving rapidly but must prioritize timezone coherence and silent failure diagnostics to stabilize user experience.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw Project Digest – March 14, 2026**

---

### 1. Today's Overview  
ZeptoClaw shows strong maintenance momentum with 8 updated issues and 6 PRs in the last 24 hours. The project is actively hardening its safety defaults, CLI UX, and channel infrastructure while addressing critical streaming parity gaps. No new releases were published, but several merged fixes and features suggest readiness for a minor version increment. Overall activity reflects focused stability work rather than major feature expansion.

---

### 2. Releases  
No new releases published today.

---

### 3. Project Progress  
**Merged/Closed PRs:**  
- **#353**: Implements interactive CLI approval prompts and session-scoped `/trust` override (enables TTY-gated trust mode).  
- **#351**: Restores streaming tool execution parity with non-streaming paths—fixes missing hooks, metrics, and logging in streaming mode.  
- **#349**: Ensures `AgentLoop` constructors respect config-defined streaming defaults (`agents.defaults.streaming`).  
- **#342**: Introduced streaming-by-default CLI behavior and response metadata footers (token count, tool calls, wall time).  

These advances unify streaming and non-streaming behavior while improving transparency and user control.

---

### 4. Community Hot Topics  
The most engaged items today lack direct user reactions (👍/comments), but key signals include:  
- **Issue #334**: Request to list ZeptoClaw on Shelldex—indicates growing visibility and community interest in directory listings.  
- **PR #356**: ACP stdio + HTTP channel implementation sparks foundational interest in extensibility for external agents/clients.  
This points to demand for better ecosystem integration and protocol standardization.

---

### 5. Bugs & Stability  
Critical safety and correctness bugs were resolved today:  
- **#354 (P1)**: Filesystem write/edit scanning scope too narrow—fixed via PR #342’s broader safety gate.  
- **#351 (P2)**: Streaming tool loops diverged from non-streaming paths—critical for consistent observability; fixed in #351.  
- **#347 (P2)**: Default agent mode dangerously autonomous—now addressed by PRs enforcing safer defaults (#353, #349).  
All high-severity bugs have corresponding merged fixes, indicating rapid triage and resolution.

---

### 6. Feature Requests & Roadmap Signals  
User-driven enhancements emerging today:  
- Interactive CLI approval flow (**#350**) and trusted session override (**#353**) reflect demand for granular local control without sacrificing security.  
- Shelldex listing request (**#334**) suggests users want discoverability within AI tool ecosystems.  
Predicted next-version focus: tighter integration with external agent protocols (via ACP in #356) and refined default policies.

---

### 7. User Feedback Summary  
Users are prioritizing **security**, **transparency**, and **local interactivity**. Pain points include:  
- Unsafe default settings that enable autonomous operation without consent (**#348**).  
- Lack of clear feedback on tool usage and token consumption in streaming mode.  
Positive shifts toward streaming-by-default and metadata footers indicate appreciation for performance and observability improvements.

---

### 8. Backlog Watch  
No long-unanswered critical issues observed today—maintainer responsiveness is high. However, **Issue #347** reappeared as open after initial closure, suggesting incomplete enforcement of safe defaults. Maintainers should verify full policy alignment across all entry points.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*