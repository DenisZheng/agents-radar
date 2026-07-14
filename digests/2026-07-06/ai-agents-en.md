# OpenClaw Ecosystem Digest 2026-07-06

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-06 02:03 UTC

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

Here is the project digest for OpenClaw, generated from the provided GitHub data.

---

## OpenClaw Project Digest — 2026-07-06

### 1. Today's Overview

The OpenClaw project is experiencing extremely high activity, with 500 issues and 500 PRs updated in the last 24 hours, indicating a massive surge in community engagement and development output. The release of `v2026.7.1-beta.2` suggests the project is on a rapid release cadence, incorporating major new features like GPT-5.6 support. While new features are advancing, the project is concurrently managing a large number of unaddressed P1/P2 bugs and security concerns, which may be creating a backlog for core maintainers. The community is deeply engaged, submitting complex bug reports, feature proposals, and a high volume of pull requests.

### 2. Releases

- **New Version:** `v2026.7.1-beta.2` (`openclaw 2026.7.1-beta.2`)
- **Key Changes:**
    - **Major Feature:** Added support for the new **OpenAI GPT-5.6 model family** across catalog, capability, and runtime selection paths ([PR #98333](openclaw/openclaw/pull/98333), thanks @steipete-oai).
    - **New Feature:** Introduced `openclaw attach` command, which launches an external harness against an existing Gateway session.
- **Breaking Changes / Migration Notes:** None detailed in the provided release data.
- **Assessment:** This is a significant feature release, strategically aligning OpenClaw with the latest frontier models. Users should update to leverage GPT-5.6 capabilities.

### 3. Project Progress

- **Merged/Closed PRs:** 355 out of 500 updated PRs were merged or closed in the last 24 hours, indicating a high rate of code integration and issue resolution.
- **Key Advances and Fixes (from top PRs):**
    - **Android Stability:** Fixes for push-to-talk microphone restart issues ([#100552](openclaw/openclaw/pull/100552)) and chat message preservation across reconnect/recovery ([#100551](openclaw/openclaw/pull/100551)).
    - **iOS Stability:** Fix for location permission selection ("While Using") snapping back after approval ([#100512](openclaw/openclaw/pull/100512)).
    - **AI Provider Support:** Added `claude-sonnet-5` to adaptive thinking and native max effort allowlists ([#100539](openclaw/openclaw/pull/100539)); wired `buildModelFetch` into the GitHub Copilot client branch for Anthropic ([#100550](openclaw/openclaw/pull/100550)); fix for Ollama native streams ending early ([#100482](openclaw/openclaw/pull/100482)).
    - **Infrastructure & DX:** New `openclaw secrets audit --severity-min` threshold option for better security auditing ([#97162](openclaw/openclaw/pull/97162)); improved warning when the transcript byte guard is inactive ([#100549](openclaw/openclaw/pull/100549)); new Telegram onboarding flow via BotFather web app ([#100540](openclaw/openclaw/pull/100540)).

### 4. Community Hot Topics

- **Most Active Issue:** **[#75 - Linux/Windows Clawdbot Apps](openclaw/openclaw/issues/75)**
    - *Comments:* 110 | *Reactions:* 81 👍
    - *Analysis:* This long-standing feature request remains the single most active discussion in the community. The high level of engagement shows a strong, unmet demand for desktop app support on non-Apple platforms. This is a critical roadmap signal for the project's growth.

- **Most Engaging Discussion on Security:** **[#75 - Feature Request: Memory Trust Tagging by Source](openclaw/openclaw/issues/7707)**
    - *Comments:* 14 | *Reactions:* 0
    - *Analysis:* While having fewer comments, this issue resonates with a core user concern about security and data integrity. The idea of tagging memory by source trust level suggests users are thinking deeply about advanced security postures beyond basic access control.

- **Most Discussed PR Context:** **[#100535 - Automatic managed git worktrees for agent tasks](openclaw/openclaw/pull/100535)**
    - *Analysis:* This draft PR from a maintainer represents a significant infrastructure improvement, aiming to solve the real-world problem of parallel work collisions in agent tasks. It indicates the project is investing in making the agent development workflow more robust and professional.

### 5. Bugs & Stability

**Critical & High Severity (P1/P0):**
- **Memory Leak:** Gateway memory can leak from ~389MB to 14.7GB over 4 days ([#54155](openclaw/openclaw/issues/54155)). *No fix PR currently linked.*
- **Data Loss:** Browser tools silently discard downloads when using CDP connections ([#48045](openclaw/openclaw/issues/48045)). *No fix PR currently linked.*
- **Session Corruption:** Subagent sessions can persist after completion, making the main session unresponsive ([#47975](openclaw/openclaw/issues/47975)). *No fix PR currently linked.*
- **Authentication/Authorization:** `clearUnboundScopes` can unconditionally strip operator scopes for non-local clients, breaking backend integrations ([#51396](openclaw/openclaw/issues/51396)). *A linked PR is open.*
- **State Persistence:** Managed browser cookies never persist to disk, causing login sessions to be lost on restart ([#96704](openclaw/openclaw/issues/96704)). *No fix PR currently linked, though the issue itself is a refile.*

**Medium Severity (P2):**
- **Data Integrity:** Orchestrated tasks appear hallucinated when faced with tool failures ([#49876](openclaw/openclaw/issues/49876)). *No fix PR linked.*
- **Platform Bugs:** `$XDG_CONFIG_HOME` is not processed when installing skills, causing configuration issues in containerized environments ([#53628](openclaw/openclaw/issues/53628)). *A linked PR is open.*
- **UX Bugs:** `/pair qr` can change `gateway.bind` and break Tailscale Serve webchat ([#98239](openclaw/openclaw/issues/98239), closed). *This issue is now closed, indicating a fix was likely merged.*

**Assessment:** The project is contending with a high volume of stability issues, especially around session state, memory management, and data integrity. The presence of multiple P1 bugs without associated fix PRs is a significant health concern.

### 6. Feature Requests & Roadmap Signals

- **Strong Predictions for Next Version:**
    - **Git Worktrees for Tasks:** The "automatic managed git worktrees" PR ([#100535](openclaw/openclaw/pull/100535)) is a major feature that is likely to be merged soon, significantly improving developer workflows.
    - **WebSocket Client SDK:** The proposal for a reusable `@openclaw/gateway-client` SDK ([#49178](openclaw/openclaw/issues/49178)) indicates an effort to improve the third-party integration developer experience.
- **Long-Term Roadmap Signals:**
    - **Multi-Agent Collaboration:** An RFC for multi-agent collaboration ([#35203](openclaw/openclaw/issues/35203)) with capability profiling, shared blackboards, and token cost governance points to a major future architecture shift.
    - **Multi-Index Embeddings:** Feature requests for multi-index embedding memory with model-aware failover ([#63990](openclaw/openclaw/issues/63990)) show a need for more resilient and scalable memory systems.
- **Community-Driven Needs:**
    - **Desktop App Expansion:** The persistent demand for Linux/Windows apps ([#75](openclaw/openclaw/issues/75)) is the single most requested feature.
    - **Prebuilt Binaries:** The request for prebuilt APK releases ([#9443](openclaw/openclaw/issues/9443)) mirrors the need for easier deployment, especially for mobile users.

### 7. User Feedback Summary

- **Dissatisfaction / Pain Points:**
    - **Stability & Reliability:** Users are experiencing significant trust issues due to unreliable tool execution, data loss (e.g., browser downloads, session state), and memory leaks. The frustration is palpable in bug reports about hallucinated outputs and lost sessions.
    - **Complex Configuration:** Several issues highlight that configuration options are too complex or ineffective. For example, memory tagging ([#7707](openclaw/openclaw/issues/7707)) and the inactive byte guard ([#100549](openclaw/openclaw/pull/100549)) show users want more control but find the current implementations confusing or broken.
    - **Cross-Platform Gaps:** The lack of desktop and mobile apps on most platforms is a major point of friction for users outside the Apple ecosystem.
- **Satisfaction / Use Cases:**
    - **Advanced Features:** Users are testing and relying on advanced features like sub-agents, cron jobs, and multi-channel support, indicating deep engagement with the platform's core value proposition.
    - **Security-Conscious Users:** There is a vocal, sophisticated user base concerned with security (prompt injection, secret masking, filesystem sandboxing). Their detailed feature requests show they see OpenClaw as a critical infrastructure component.

### 8. Backlog Watch

The following issues are significant, have high comment/reaction counts, and appear to be stalled or waiting for maintainer action.

- **Issue #75 - Linux/Windows Clawdbot Apps**: The most requested feature. **Tagged with:** `help wanted`, `needs-product-decision`. This issue has been open for over six months with 110 comments. A product decision is critically needed.
- **Issue #50090 - Community Skill Development & ClawHub**: A core feature for platform growth. **Tagged with:** `needs-product-decision`, `needs-security-review`. The community is waiting for clarity on the skill ecosystem's future.
- **Issue #10659 - Masked Secrets**: A high-impact security feature. **Tagged with:** `needs-product-decision`, `needs-security-review`. This is a key security gap that needs architectural planning.
- **Issue #29387 - Bootstrap Files Silently Ignored**: A confusing bug for new users and an unexpected behavior. **Tagged with:** `needs-product-decision`.
- **Issue #54155 - Gateway Memory Leak**: A P1, high-impact stability bug with no linked fix PR. This should be a top priority for the core development team.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report: AI Agent Open-Source Landscape
**Date**: 2026-07-06

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing a **bifurcation phase** between established reference implementations and emerging specialized agents. Core projects like OpenClaw and ZeroClaw are racing to integrate frontier models (GPT-5.6, Claude Sonnet 5) while shoring up stability for production deployments, with both showing release cadences of 2-4 weeks. A second tier of projects—NanoBot, IronClaw, and Hermes Agent—are pivoting toward **multi-agent orchestration** and **enterprise security** features, indicating the market is maturing beyond single-agent chat. Notably, the ecosystem shows a **stability gap**: every active project reports P1 bugs around session state, memory management, or provider interoperability, suggesting the infrastructure layer remains fragile despite rapid feature development. The community is signaling strong demand for cross-platform desktop support (especially Linux/Windows), OAuth-based provider integration to avoid double-billing, and fine-grained security controls (prompt injection guards, capability allowlists, telemetry content policies).

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release This Period | Health Score | Notes |
|---------|-------------|-----------|---------------------|--------------|-------|
| **OpenClaw** | 500 updated | 500 updated (355 merged) | ✅ v2026.7.1-beta.2 | **Fair** | High velocity but P1 bug backlog (memory leaks, data loss) |
| **ZeroClaw** | 23 updated (5 closed) | 50 updated (7 merged) | ❌ No release | **Good** | Intense dev phase; strong fix-to-bug ratio |
| **IronClaw** | 4 active | 28 updated (6 merged) | 🔄 Release PR open (v0.30) | **Good** | High-velocity Rust ecosystem; Slack OAuth migration |
| **NanoBot** | 2 open | 18 updated (3 merged) | ❌ No release | **Fair** | Heavy security fixes (SSRF, MCP crashes); 15 open PRs |
| **Hermes Agent** | 45 active | 50 updated (8 merged) | ❌ No release | **Fair** | Growing backlog; 45/50 issues open; responsive bug-fix PRs |
| **CoPaw** | 12 active | 5 open (0 merged) | ❌ No release | **Concerning** | No PRs merged; frontend/backend bugs accumulating |
| **PicoClaw** | 2 updated | 5 updated (1 merged) | ❌ No release | **Fair** | Moderate maintenance; key libolm→vodozemac migration pending |
| **NanoClaw** | 0 new | 3 merged | ❌ No release | **Good** | Stable; clean backlog; skill ecosystem growing |
| **LobsterAI** | 0 new | 2 updated (1 merged) | ❌ No release | **Low** | 3-month stale PR; minimal community engagement |
| **NullClaw** | 0 | 0 | — | **Inactive** | No activity |
| **TinyClaw** | 0 | 0 | — | **Inactive** | No activity |
| **Moltis** | 0 | 0 | — | **Inactive** | No activity |
| **ZeptoClaw** | 0 | 0 | — | **Inactive** | No activity |

**Health Score Definition**:
- *Good*: Active merging, responsive to bugs, clean backlog
- *Fair*: High activity but with stability concerns or growing backlog
- *Concerning*: PRs not merging, bugs accumulating, maintainer bottleneck
- *Low*: Stale PRs, minimal activity, community disengagement
- *Inactive*: Zero activity in 24h window

---

## 3. OpenClaw's Position

**Advantages vs. Peers**:
- **Scale of adoption**: 500+ issues and PRs updated daily—3-10x more than any competitor—indicating the largest user and contributor base
- **Release velocity**: `v2026.7.1-beta.2` shipped with GPT-5.6 support, demonstrating ability to land major features quickly
- **Platform breadth**: iOS, Android, CLI, Gateway—broader client support than any peer (ZeroClaw lacks mobile clients; Hermes lacks native mobile)
- **Security ecosystem**: Mature secrets audit, memory trust tagging proposals, and sandboxing infrastructure (others still adding basic SSRF protection)

**Technical Approach Differences**:
- **Architecture**: Go-based core with channel abstraction layer vs. IronClaw's Rust/microservice approach and NanoBot's lightweight Python
- **Agent model**: Session-gateway architecture with subagent support vs. ZeroClaw's goal-mode/SOP control plane and Hermes' desktop-first design
- **Memory system**: File-based with trust-tagging proposals vs. PicoClaw's libolm-based encrypted storage and IronClaw's RootFilesystem-backed persistence

**Community Size Comparison**:
- OpenClaw's community engagement (#75 Linux/Windows apps: 110 comments, 81 👍) is an order of magnitude larger than any single feature request on other projects
- ZeroClaw's most active issue (#8681 goal-mode: 8 comments) represents OpenClaw's *typical* daily discussion volume
- OpenClaw has the only project-wide skill marketplace proposal (ClawHub, #50090) with dedicated tracking—no other project has reached this scale of ecosystem ambition

---

## 4. Shared Technical Focus Areas

| Requirement | Affected Projects | Specific Needs |
|-------------|------------------|----------------|
| **Memory state persistence & integrity** | OpenClaw (#96704), ZeroClaw, PicoClaw (#3150 memory loss) | Browser cookies, memory files, session state surviving restarts |
| **Provider/OAuth integration** | Hermes (#25267 Claude OAuth), IronClaw (#5604 Slack OAuth), NanoBot (#4699 Anthropic OAuth), ZeroClaw (#8603 OpenAI adapter) | Users demanding subscription passthrough, avoiding double-billing |
| **Multi-agent orchestration** | OpenClaw (#35203 RFC), NanoBot (#4697 subagent MCP), ZeroClaw (#8681 goal-mode), Hermes (Kanban agent tasks) | Subagent spawning, capability profiling, shared blackboards |
| **Cross-platform desktop support** | OpenClaw (#75 Linux/Windows), Hermes (#41566 desktop false positive), CoPaw (#5787 mobile truncation) | Non-Apple desktop and mobile clients urgently requested |
| **Security & sandbox hardening** | OpenClaw (#51396 auth scoping), NanoBot (#4671 SSRF), IronClaw (#5647 bridged tool disclosure), ZeroClaw (#8741 path traversal) | Capability allowlists, prompt injection guards, telemetry content policies |
| **MCP/agent tool reliability** | NanoBot (#4764 reconnect crash), OpenClaw (#48045 CDP download loss), Hermes (#53984 MCP config crash) | Streaming stability, reconnection logic, tool-call loop breaking |
| **Memory leak & resource management** | OpenClaw (#54155 389MB→14.7GB leak), CoPaw (#5789 compression crash), ZeroClaw (#8731 zombie MCP) | Sustained operation memory growth, subprocess reaping |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | IronClaw | NanoBot | Hermes Agent |
|-----------|----------|----------|----------|---------|--------------|
| **Primary language** | Go | Rust | Rust | Python | Go (inferred) |
| **Target user** | Power users, multi-platform | Devs, SOP-driven workflows | Enterprise, Slack-integrated | Lightweight/embedded users | Desktop-first, creator-focused |
| **Core differentiator** | Broadest platform support + skill ecosystem | Goal-mode + control plane architecture | WASM-based Reborn architecture + Slack native | Minimal footprint, Telegram focus | Claude subscription passthrough + Kanban |
| **Release maturity** | Beta with rapid cadence | Pre-release (v0.8.x) | Pre-release (v0.24→v0.29) | Pre-release (v0.2.x) | Pre-release (no tagged releases) |
| **Unique risk** | P1 bug accumulation from high velocity | Architectural churn during Reborn migration | Nightly E2E failing 40+ days | Python SDK completely broken | 90% issues open—maintainer bottleneck |
| **Community engagement** | Very High (500+ daily) | High (73 daily touches) | Medium (28 daily PRs) | Low (2 open issues) | Medium (50 daily touches) |

**Key Architectural Differences**:
- **IronClaw** is the only project investing in WASM-based extension architecture (Reborn), suggesting a microservice/plugin future
- **ZeroClaw** is the only project with explicit SOP (Standard Operating Procedure) authoring—turning agents into programmable workflows
- **NanoBot** uses subagent MCP inheritance, making it the lightest multi-agent orchestration approach
- **OpenClaw** remains the only project with a formal skill marketplace proposal (ClawHub) and community skill development infrastructure

---

## 6. Community Momentum & Maturity

**Tier 1: Rapid Iteration (Daily releases or major features landing)**
- **OpenClaw**: Highest raw velocity; shipping beta releases with frontier model support; managing scale-through-bug tradeoff
- **IronClaw**: Second-highest velocity; completing major architecture migration (Reborn) and Slack overhaul simultaneously
- **ZeroClaw**: Exceptionally high PR:issue ratio (50:23); closing issues faster than they open; architecture phase shift

**Tier 2: Stable Development (Regular PR merges, growing backlog)**
- **NanoBot**: Heavy security sprint (SSRF, MCP fixes); 15 open PRs suggest imminent feature batch
- **Hermes Agent**: Fast bug-fix PRs but 90%+ open issue rate indicates maintainer bottleneck; needs release cycle
- **NanoClaw**: Clean, stable; closing PRs without accumulating issues; healthy contributor pipeline

**Tier 3: Maintenance Lull (Sporadic activity, stale issues)**
- **PicoClaw**: Moderate activity; key migration (libolm→vodozemac) stuck without implementation PR
- **CoPaw**: Concerning signal—issues accumulating without PR merges; maintainer attention needed
- **LobsterAI**: Near-dormant; 3-month stale fix PR; low community engagement

**Tier 4: Inactive (Zero activity)**
- NullClaw, TinyClaw, Moltis, ZeptoClaw—no development signals in 24h window

**Maturity Assessment**: The ecosystem is **pre-1.0 across the board**. No project has shipped a stable release despite production usage. OpenClaw's beta framework is the most mature release vehicle. The community is accepting pre-release stability in exchange for rapid feature access.

---

## 7. Trend Signals

**1. Provider Interoperability is the #1 Community Pain Point**
Users across Hermes (41 👍, #25267), OpenClaw (GPT-5.6 integration), IronClaw (OpenRouter XML corruption fix), and ZeroClaw (OpenAI adapter RFC) are demanding:
- **OAuth passthrough** to avoid paying both subscription and API token costs
- **Model-agnostic tool-call format** to prevent provider-specific corruption
- **Subscription-tier model access** without per-token billing
- **Implication for developers**: Build provider abstraction layers; the "write once, run on any LLM" promise is table stakes

**2. From Chat to Control Planes**
ZeroClaw's SOP system (trackers #8288, #8736) and OpenClaw's goal-mode RFC (#35203) signal a shift from conversational agents to **programmable agent workflows**. Users want agents that execute multi-step processes, not just answer questions.
- **Implication**: Agent frameworks must support state machines, conditional routing, and failure recovery—not just prompt chains

**3. Security is Moving from Optional to Critical**
Across all active projects: SSRF protection (NanoBot #4671), capability allowlisting (IronClaw #5647), path traversal (ZeroClaw #8741), auth scoping (OpenClaw #51396). Enterprise deployment demands are driving this.
- **Implication**: Security features (sandboxing, content policies, audit trails) are now requirements, not differentiators

**4. Cross-Platform Desktop is an Unmet Need**
OpenClaw's #75 (110 comments, 81 👍) is the most-demanded feature in the ecosystem. No project ships production-quality desktop apps for Linux or Windows.
- **Implication**: First project to deliver stable Linux/Windows desktop clients gains significant adoption advantage

**5. Memory & State are the Reliability Bottleneck**
Every active project has open bugs around memory persistence: OpenClaw (#96704 cookies), PicoClaw (#3150 memory loss), CoPaw (#5789 compression crash), ZeroClaw (#8731 zombie processes).
- **Implication**: Stateless agent designs may be premature; robust state management is the hidden infrastructure cost of AI assistant adoption

**6. Multi-Agent is the Next Architecture Frontier**
OpenClaw (RFC #35203), NanoBot (subagent MCP inheritance #4697), Hermes (multi-session Kanban), and ZeroClaw (goal-mode) are all building multi-agent capability simultaneously—without standardization.
- **Implication**: Early standardization opportunity for subagent communication protocols, capability discovery, and orchestration governance

**Value for AI Agent Developers**:
- **Invest in provider abstraction**: The market is demanding "bring your own LLM" with OAuth passthrough
- **Prioritize state resilience**: Memory persistence bugs are the most common production failure pattern
- **Build for multi-agent early**: The architecture decisions you make now (subagent spawning, tool inheritance, session isolation) will determine whether you can scale
- **Security is a feature gate**: SSRF protection, sandboxing, and content policies are no longer optional for enterprise adoption
- **Desktop is where users live**: Mobile-first or CLI-only projects will struggle against those offering native desktop experiences

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-06

## Today's Overview

NanoBot shows **very high development velocity** today with 18 pull requests updated in the last 24 hours, though only 3 were closed/merged. The project has **2 active open issues** with no new releases. The PR pipeline is heavily loaded with security-critical fixes (P0/P1) and substantial new feature work, particularly around subagent architecture, MCP stability, and SSRF hardening. The 15 open PRs suggest a **major development sprint is in progress**, with several long-running branches converging this week. Community engagement remains moderate, with no issues attracting significant discussion.

## Releases

**No new releases.** The last release appears to be version 0.2.2 (referenced in documentation). Several feature PRs and fixes are likely candidates for the next release.

## Project Progress

**3 PRs closed/merged today:**

| PR | Title | Category |
|---|---|---|
| [#4554](https://github.com/HKUDS/nanobot/pull/4554) | fix(memory): block Dream from creating duplicate skills via write guard | Memory/Fix |
| [#4441](https://github.com/HKUDS/nanobot/pull/4441) | fix(mcp): force-close streamable_http generator on reconnect failure | MCP/Fix |
| [#4699](https://github.com/HKUDS/nanobot/pull/4699) | fix(providers): add Anthropic OAuth with env-var-aware login/logout | Providers/Fix |

**Key feature advances** (still open but active):
- **Subagent improvements**: Three PRs ([#4697](https://github.com/HKUDS/nanobot/pull/4697), [#4623](https://github.com/HKUDS/nanobot/pull/4623), [#4624](https://github.com/HKUDS/nanobot/pull/4624)) add MCP inheritance for subagents, spawn model overrides, and aggregated result mode — significantly enhancing multi-agent orchestration.
- **Security**: PR [#4671](https://github.com/HKUDS/nanobot/pull/4671) pins validated DNS for SSRF checks, a critical security hardening measure.
- **Heartbeat system**: PR [#4620](https://github.com/HKUDS/nanobot/pull/4620) adds a new `nanobot heartbeat trigger` command with dry-run and JSON output support.
- **Feishu integration**: PR [#4763](https://github.com/HKUDS/nanobot/pull/4763) adds session dividers and reasoning panels for the Feishu channel.

## Community Hot Topics

**No issues or PRs have received comments or reactions** beyond author activity. This suggests either:
- The user base is consuming releases passively rather than participating in development discussion
- Issues are being rapidly triaged without community engagement

The two open issues remain **zero-comment**:
- [#4765](https://github.com/HKUDS/nanobot/issues/4765) — Bug: Python SDK async context manager protocol error
- [#4702](https://github.com/HKUDS/nanobot/issues/4702) — Feature request: Custom Telegram API Base URL

**Underlying need**: The Telegram channel issue (#4702) signals demand from users in restricted network environments who need custom API endpoints — likely in China, Iran, or enterprise firewalls.

## Bugs & Stability

**High-severity bugs reported/patched today:**

| Severity | Issue/PR | Description | Status |
|---|---|---|---|
| **P0** | [#4671](https://github.com/HKUDS/nanobot/pull/4671) | SSRF vulnerability: DNS rebinding could bypass URL validation | Fix PR open |
| **P1** | [#4764](https://github.com/HKUDS/nanobot/pull/4764) | MCP reconnect paths crash gateway with cancel scope errors | Fix PR open |
| **P1** | [#4701](https://github.com/HKUDS/nanobot/pull/4701) | Unhandled MCP exceptions crash agent loop | Fix PR open |
| **P1** | [#4700](https://github.com/HKUDS/nanobot/pull/4700) | Long MCP-derived tool names exceed API limits | Fix PR open |
| **P1** | [#4765](https://github.com/HKUDS/nanobot/issues/4765) | Python SDK async context manager protocol error | Open (no fix) |
| **P1** | [#4545](https://github.com/HKUDS/nanobot/pull/4545) | Windows command execution inconsistency (cmd vs PowerShell) | Fix PR open |

**Key stability concerns:**
- **MCP reliability** has two separate P1 fixes in flight (#4764, #4701), indicating this subsystem is a current stability hotspot
- The **Python SDK bug** (#4765) blocks all programmatic API usage — concerning but recently filed
- SSRF vulnerability (#4671) is the most serious security issue, with a fix already submitted

No regressions from today's closed PRs.

## Feature Requests & Roadmap Signals

**User-requested features** (from issues):

| Issue | Request | Likely Ship Window |
|---|---|---|
| [#4702](https://github.com/HKUDS/nanobot/issues/4702) | Custom Telegram API Base URL + headers | Unlikely next release — no PR |
| [#4765](https://github.com/HKUDS/nanobot/issues/4765) | Async context manager support for Nanobot object | Next release expected (bugfix) |

**In-progress features likely for next release:**
- **Subagent MCP inheritance** ([#4697](https://github.com/HKUDS/nanobot/pull/4697)) — **Very likely** (author is major contributor)
- **Serper.dev web search** ([#4406](https://github.com/HKUDS/nanobot/pull/4406)) — Likely, been open 18 days
- **SSRF hardening** ([#4671](https://github.com/HKUDS/nanobot/pull/4671)) — Certain (P0 security)
- **Windows `exec` fix** ([#4545](https://github.com/HKUDS/nanobot/pull/4545)) — Likely, important for Windows users
- **OpenCode provider support** ([#4686](https://github.com/HKUDS/nanobot/pull/4686)) — Possible

**Roadmap signals**: The concentration of subagent improvements suggests NanoBot is pivoting toward complex multi-agent orchestration as a core differentiator.

## User Feedback Summary

**Pain points expressed:**
1. **Python API unusable** ([#4765](https://github.com/HKUDS/nanobot/issues/4765)) — The documented Python SDK example fails immediately with async context manager error. This blocks all automation/framework integration use cases.
2. **Telegram regional restrictions** ([#4702](https://github.com/HKUDS/nanobot/issues/4702)) — Users in restricted networks cannot configure custom Telegram endpoints, forcing proxy workarounds.
3. **Windows inconsistency** ([#4545](https://github.com/HKUDS/nanobot/pull/4545)) — Multi-line vs single-line commands behave differently on Windows, breaking scripts.

**Satisfaction signals**: None today — no positive feedback, no "works great" comments.

**Use cases revealed:**
- Automated API-based interaction (blocked by #4765)
- Deployment in restricted/enterprise networks (Telegram custom endpoint)
- Cross-platform Windows/Linux agent execution
- Multi-agent systems with subagent specialization (evidenced by PR volume)

## Backlog Watch

**Long-unanswered items needing maintainer attention:**

| Issue/PR | Age | Status | Risk |
|---|---|---|---|
| [#4406](https://github.com/HKUDS/nanobot/pull/4406) (Serper.dev) | 18 days | Open, no maintainer review | Low — small feature |
| [#4353](https://github.com/HKUDS/nanobot/pull/4353) (WhatsApp audio) | 21 days | Open, no maintainer review | Medium — blocks WhatsApp voice note users |
| [#4545](https://github.com/HKUDS/nanobot/pull/4545) (Windows exec) | 10 days | Open, no maintainer review | Medium — affects Windows users |
| [#4765](https://github.com/HKUDS/nanobot/issues/4765) (Python SDK) | **0 days** (today) | No comments or assignee | **High** — blocks all Python API usage |

**Notable**: The Python SDK bug (#4765) is the most impactful unaddressed item. While filed today, it has zero maintainer response, and the documented API is completely broken. This should be triaged as P1 immediately.

**Oldest open PRs without maintainer attention**: #4353 (21 days) and #4406 (18 days) are both quality contributions from franciscomaestre that have not received review feedback. This may frustrate community contributors.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-06

## Today's Overview

Hermes Agent shows **high activity** today with 50 issues and 50 PRs updated in the last 24 hours, though the project has **no new releases**. The open/active issue count (45) significantly outpaces closed items (5), indicating a growing backlog. The community is actively submitting bug fixes — 20 PRs are open, with several targeting critical delivery and security issues. The project appears to be in a **consolidation phase** with many small bug-fix PRs landing alongside ongoing feature work, but the absence of a release suggests maintainers may be preparing a larger batch update. The overall sentiment is productive, though several long-standing bugs (some dating to April) remain unaddressed.

## Releases

**No new releases today.** The project has not shipped a tagged release in the observed period. This is notable given the volume of merged/closed PRs (8) that could benefit from packaging.

## Project Progress

**8 PRs merged or closed today**, spanning fixes and minor features:

- **#59284** (closed) — `fix(kanban): goal-gate judge unpack matches judge_goal's 4-tuple (completes #38367)` — Fixes a bug where goal-mode completion gate had been fail-open-by-crash since landing
- **#59257** (closed) — Desktop-first commits silently degrading CLI/TUI — session title lost on exit (PR #57000) — Reported and closed
- **#54935** (closed) — Feishu webhook oversized body buffering fix
- **#54940** (closed) — WhatsApp Cloud webhook oversized body buffering fix
- **#59169** (closed) — `hermes update` doesn't reinstall Photon sidecar npm deps
- **#9318** (closed) — Auxiliary client fallback bug when `api_key` empty but `base_url` set
- Several other smaller closed items across plugins and gateway components

**Key fixed areas**: Kanban cron reliability, webhook security boundaries, plugin dependency management, multi-client session listing parity.

## Community Hot Topics

### Most Active Issues (by comments/reactions)

1. **#25267** — `[Feature]: Claude Agent SDK model provider with subscription OAuth (Codex-style)` — 9 comments, **41 👍** — Strong community demand for using existing Claude subscriptions without double-billing. Users want to run Hermes with Claude as backend while paying only their subscription fee, not additional per-token API costs. This is the **most upvoted open issue** and signals a critical monetization pain point.

2. **#34390** — `[Feature] dashboard: add --allowed-hosts flag for reverse-proxy and Tailscale access` — 9 comments — Users need to run Hermes dashboard behind reverse proxies (Tailscale, nginx, Caddy), but current host-header validation (GHSA-ppp5-vxwm-4cf7) blocks this. Request is for an explicit allowlist flag.

3. **#43900** — `[Bug] Ollama local models silently capped at 4096-token context` — 8 comments — Ollama users unknowingly hitting context limits because Hermes reads GGUF metadata but never applies the `num_ctx` override. Critical for local model users.

4. **#42961** — `[Bug] terminal.cwd config ignored for local backend` — 8 comments — Configuration silently discarded; process CWD always used.

### Most Active PRs

1. **#59292** — Multi-bug fix PR (4 bugs: IndexError, OOM, SOUL.md fallback, kanban delivery loop) — 4 distinct fixes in one PR, indicates community frustration with accumulated edge cases.

2. **#59298** — `Surface approval rule keys in gateway clients` — Follow-up stacked on #59163, bringing Desktop/TUI/gateway approval parity. This shows the approval gating system is being actively refactored.

## Bugs & Stability

### New Bugs Today (Highest Severity First)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P2** | #59288 | `hermes update` can wipe `web_dist`, `--skip-build` hard-fails when missing | None yet |
| **P2** | #59276 | `_display_resumed_history` IndexError on empty message text | ✅ #59276 (open) |
| **P2** | #59272 | QQBot `connect()` missing `is_reconnect` parameter → TypeError on every connect/reconnect | ✅ #59297 (open) |
| **P2** | #59224 | Classic CLI `/resume` hides Desktop/WebUI sessions (hardcoded `source="cli"`) | ✅ #59281 (open) |
| **P2** | #59257 | CLI/TUI exit summary silently missing after `/new` + `/exit` (was merged then regressed) | Closed |
| **P3** | #59292 | BlueBubbles webhook OOM via unbounded body reads | ✅ #59280 (open) |
| **P3** | #59228 | Desktop sidebar creates duplicate 'main' lane for non-git project folders | None yet |
| **P3** | #59236 | Cron marker leaks into interactive gateway approvals (security follow-up) | None yet |
| **P3** | #59235 | Plain-formatter redaction gaps for split secrets/tracebacks (security follow-up) | None yet |
| **P3** | #59287 | False cron thread loss warnings | ✅ #59287 (open) |

### Critical Regressions

- **#59288**: Update can break the dashboard entirely — no defensive check for web_dist existence. This is a **release-blocking** level bug for anyone running the dashboard.
- **#59272**: QQBot platform **entirely broken** on first connect due to missing kwarg. Fix PR #59297 submitted same day.

### Long-Standing Bugs (Still Open)

| # | Issue | Created | Status |
|---|-------|---------|--------|
| #5388 | Context fragmentation in Gateway (Chinese-language user report) | Apr 6 (3 months) | Needs repro |
| #9318 | Auxiliary client fallback to "no-key-required" (closed today) | Apr 14 | 🟢 Fixed |
| #41566 | Desktop "Could not connect" false positive | Jun 7 (1 month) | 4 comments, no fix |
| #41556 | Image paste sends file path instead of data | Jun 7 (1 month) | 2 comments, no fix |

## Feature Requests & Roadmap Signals

### High-Community-Demand Features

1. **#25267 (41 👍)** — Claude subscription OAuth provider — **Most demanded feature.** Users want to use existing Claude subscriptions without per-token API billing. This is the #1 community pain point and likely to land in next major release given the 41 upvotes.

2. **#34390 (9 comments)** — `--allowed-hosts` flag for reverse proxy — Likely to land soon as it's a small but critical UX improvement for Docker/Tailscale users.

3. **#38552 (3 comments)** — Automated Workspace Memory — Agent remembers directory purposes across sessions. Complements long-standing feature #33856.

4. **#29914 (2 comments)** — First-class per-turn and per-tool-call model overrides — Users want to switch models mid-conversation for specific tool calls (e.g., use cheap model for search, expensive for reasoning).

5. **#59275 (open PR)** — Auto-detect OS appearance changes and switch skins mid-session — Already has a PR, likely to land soon.

### Predictions for Next Release

- **Claude OAuth provider (#25267)** is the most likely major feature
- **Kanban notification substrate (#49190)** — The active PRs around event subscriptions suggest this is being prepared
- **Ollama context cap fix (#43900)** — High-impact, simple fix, likely to ship
- **Dashboard reverse-proxy support (#34390)** — Small, well-defined, high value

## User Feedback Summary

### Pain Points

1. **Double-billing with Claude**: "I want to run Hermes with Claude as the model backend while staying on my Claude subscription... effectively paying twice" — This is the single most upvoted issue and a significant barrier to adoption for Claude subscribers.

2. **Ollama users hit invisible context limits**: "Ollama local models silently capped at 4096-token context — causes finish_reason=length and garbled retry responses" — Users think Hermes is broken when it's actually a configuration leak.

3. **Dashboard breaks after updates**: "An update should not be able to leave the dashboard unstartable without manual intervention" — Update process feels fragile.

4. **Desktop app "looks completely broken"** (#41566): Users lose trust when the app shows a persistent error overlay despite the gateway working fine.

5. **Cross-client session visibility**: CLI users cannot discover sessions started in Desktop, breaking workflow continuity.

### Satisfaction Signals

- **Rapid bug-fix PRs**: Multiple bugs reported today already have fix PRs (e.g., #59272 → #59297, #59276 → #59292), showing responsive maintainers
- **Security attention**: Multiple PRs tagged `sweeper:risk-security-boundary` indicate active security hardening
- **Platform parity**: PRs addressing feishu, whatsapp, qqbot, and bluebubbles suggest broad platform support

## Backlog Watch

### Critical Issues Needing Maintainer Attention

| # | Issue | Age | Why It Matters |
|---|-------|-----|----------------|
| #53984 | MCP JSON string headers config crash (PR open) | 8 days | A high-quality fix PR exists but is not merged — blocks MCP users |
| #57129 | MCP client permanently abandons server after 5 failed reconnects | 4 days | Transient network blips permanently kill MCP tools until process restart — design flaw |
| #54147 | `hermes chat -m` uses stale api_mode from config → 404 errors | 8 days | CLI model override is broken when using different API modes |
| #59288 | Update can wipe web_dist with no auto-rebuild | Today | Dashboard completely broken after update — release-blocking |
| #5388 | "上下文断的" (context fragmentation) | 3 months | Unaddressed Chinese-language user report — unclear if repro exists |

### Mergers/Contributions Stalled

- **#55321** (`fix(redact): strip controls from masked secrets`) — Open since Jun 30, 7 days ago — Security-sensitive fix for secret visibility
- **#54959** (`fix(gateway): strip internal tool-trace banners from chat output`) — Open since Jun 29, 8 days ago — User-facing cleanup PR
- **#53984** (`fix(mcp): handle JSON string headers config without crashing`) — Open since Jun 28, 9 days ago — Blocks MCP config flexibility

### Maintenance Risk

The project has **45 open/active issues** against only **5 closed in 24h**, suggesting maintainers may be overwhelmed. The presence of 3-month-old unresponded issues (#5388) and multiple open PRs without merge activity indicates a potential bottleneck in code review and release management. The **absence of any release** despite significant fix activity suggests the team may be operating in a "merge to main" mode without formal release cycles.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-06

## 1. Today's Overview
Project activity remains moderate, with 5 pull requests and 2 issues updated in the last 24 hours. One long-standing bug (#3150) was closed as stale, and a new fix PR targeting that same memory overwrite issue was opened (#3226). The most significant ongoing discussion revolves around replacing the unmaintained `libolm` with `vodozemac` (#3088), which has attracted maintainer attention and community support. No new releases were cut today, suggesting focus remains on refactoring and maintenance rather than shipping new features.

## 2. Releases
No new releases today. The latest release remains unchanged.

## 3. Project Progress
**Merged/Closed PRs (1 item):**
- **#3189** [CLOSED] `fix(line): explicitly ignore resp.Body.Close() errors in Send and classifySDKError` — by `chengzhichao-xydt`  
  Cleaned up resource handling in the LINE channel by explicitly ignoring non-critical `resp.Body.Close()` errors, improving code clarity without behavioral change.  
  https://github.com/sipeed/picoclaw/pull/3189

**Notable Open PRs advancing the codebase:**
- **#3222** [OPEN] `refactor(deltachat): cleanup implementation, documentation -320LOC` — by `trufae`  
  Significant delta chat module cleanup: removes legacy features, drops hardcoded relay lists in favor of official website references, eliminates password-based email config, and renames `invite_link` → `join_invite_link` with a new `show_invite_link` method. Lines of code reduced by 320.  
  https://github.com/sipeed/picoclaw/pull/3222
- **#3192** [OPEN] Bumps goreleaser base images from `alpine:3.21` to `3.23`.  
  https://github.com/sipeed/picoclaw/pull/3192
- **#3191** [OPEN] Removes duplicate `build/` entry in `.gitignore`.  
  https://github.com/sipeed/picoclaw/pull/3191

## 4. Community Hot Topics
**Most Active Issues:**
1. **#3088** [OPEN, priority: high] `[Feature] use vodozemac instead of libolm`  
   - Author: `pbsds` | 6 comments | 2 👍 | Updated 2026-07-05  
   - **Analysis:** Community strongly desires migrating from the unmaintained and insecure `libolm` to its official replacement `vodozemac`. The proposal to make `libolm` optional at compile time suggests a gradual migration path. This is the single highest-priority feature request currently open.  
   https://github.com/sipeed/picoclaw/issues/3088

2. **#3226** [OPEN] `fix(tools): stop write_file from coaching destructive overwrite (#3150)`  
   - Author: `ACMYuechen` | Updated 2026-07-05  
   - **Analysis:** Directly addresses a user-reported bug (#3150, see Bugs section). The PR changes `write_file` behavior so it no longer encourages destructive overwrites of existing files, particularly relevant for memory files. The fix prevents the agent from being coached toward losing data.  
   https://github.com/sipeed/picoclaw/pull/3226

## 5. Bugs & Stability
**High Severity — Fixed:**
- **#3150** [CLOSED, stale] `BUG:它给自己整失忆了` (transl. "It made itself lose memory")  
   - Author: `svier0` | 5 comments | Created 2026-06-19  
   - **Root Cause:** The `write_file` tool’s overwrite guard explicitly coached the agent to overwrite existing memory files, leading to data loss.  
   - **Status:** Issue closed as stale, but a fix PR (#3226) is now open and active.  
   https://github.com/sipeed/picoclaw/issues/3150

**Medium Severity — Fixed:**
- **#3189** [CLOSED] `ignore resp.Body.Close() errors in Send and classifySDKError` — Cleanup of error handling in the LINE channel; low user-facing impact but improves code hygiene.  
   https://github.com/sipeed/picoclaw/pull/3189

## 6. Feature Requests & Roadmap Signals
**Likely for Next Release:**
- **Vodozemac migration (#3088)** — With 2 👍 and maintainer-labeled `priority: high`, this is the strongest candidate for inclusion in the next release. The swap would remove a security risk (unmaintained libolm) and align with upstream recommendations.  

**Possible for Next Release:**
- **DeltaChat module overhaul (#3222)** — The -320 LOC refactor is substantial and appears ready; it cleans up legacy functionality and moves configuration into secure JSON-RPC. Could ship alongside or soon after the next release.

**Less Likely Short-Term:**
- No other new feature requests surfaced in the last 24 hours.

## 7. User Feedback Summary
- **Pain Point — Memory Loss (#3150):** A user reported losing stored memory due to `write_file`’s destructive overwrite behavior. The tool’s prompt guided the AI agent to replace existing files, leading to accidental data deletion. The community and contributor responded with a targeted fix (#3226).  
- **Pain Point — Security & Maintenance (#3088):** A user flagged that `libolm` is unmaintained and insecure, requesting migration to `vodozemac`. The issue has community support and maintainer acknowledgment.  
- **Satisfaction Signal:** The delta chat refactor (#3222) and LINE channel cleanup (#3189) indicate ongoing investment in code quality and security, likely appreciated by users who depend on these channels.

## 8. Backlog Watch
- **#3088** — `[Feature] use vodozemac instead of libolm` (6 comments, 2 👍, priority: high)  
  Awaiting implementation. While the maintainer has labeled it high priority, no PR has been opened. This has been open since June 9, nearly one month.  
  https://github.com/sipeed/picoclaw/issues/3088

- **#3222** — `refactor(deltachat): cleanup implementation, documentation -320LOC` (open since July 3)  
  Has 0 comments from maintainers. Might benefit from review before going stale.  
  https://github.com/sipeed/picoclaw/pull/3222

- **#3192, #3191** — Infrastructure/cleanup PRs open since June 27 with no review comments. Low risk but attention needed to avoid accumulation.  
  https://github.com/sipeed/picoclaw/pull/3192 | https://github.com/sipeed/picoclaw/pull/3191

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**Project Digest: NanoClaw (github.com/nanocoai/nanoclaw)**
**Date:** 2026-07-06

---

### 1. Today's Overview

Activity today is moderate, with the project continuing to progress on its strategic **agent templates** and **guardrails** initiatives. No new releases were published, and no new issues were opened in the last 24 hours. The day’s focus was on closing and merging three side-feature PRs, while two more substantial open PRs remain under review. The overall project health appears stable, with the maintainers consolidating recent feature work while continuing to accept skill contributions from the community.

### 2. Releases

No new releases were published today. The project currently has no tagged release versions to report.

### 3. Project Progress

Three pull requests were merged or closed today, reflecting incremental improvements in developer tooling and safety features:

- **#2766 [CLOSED]** – `feat(channels): add .format-lint-off` (author: amit-shafnir, updated 2026-07-05)  
  Adds a `.format-lint-off` capability to channels, likely a developer utility to suppress formatting/linting in specific channel contexts. No scope or detail provided in the summary.
  [PR Link](https://github.com/nanocoai/nanoclaw/pull/2766)

- **#2726 [CLOSED]** – `feat: add /add-guardrails skill` (author: amit-shafnir, updated 2026-07-05)  
  Ships a fully functional **/add-guardrails** skill for per-agent-group input/output guardrails. Implements deterministic regex/keyphrase blocking (prompt-injection, credential leaks) with `block`/`flag` actions, chat alerts, and a host-side quarantine audit trail. Merged as a stable feature.
  [PR Link](https://github.com/nanocoai/nanoclaw/pull/2726)

- **#2908 [CLOSED]** – `feat(codex): persona prepend + git-independent skill discovery` (author: amit-shafnir, updated 2026-07-05)  
  Completes the end-to-end integration of agent templates under the Codex provider. Enables persona prepending and provider-agnostic skill discovery without Git dependency, exposing group skills at `$HOME/.agents/skills`. Critical for template agents in multi-provider environments.
  [PR Link](https://github.com/nanocoai/nanoclaw/pull/2908)

### 4. Community Hot Topics

No issues or PRs have comments or reactions to report today. The two open PRs below are the most significant community-facing items:

- **#2949 [OPEN]** – `feat(skill): /add-litellm — minimal model router` (author: javexed, updated 2026-07-06)  
  A utility skill for adding a minimal model router supporting local servers and optional remote backends. This is a community skill submission (non-core source changes). No comments or reactions yet.
  [PR Link](https://github.com/nanocoai/nanoclaw/pull/2949)

- **#2909 [OPEN]** – `feat(setup): template setup flow in the wizard` (author: amit-shafnir, updated 2026-07-05)  
  Implements the second part of the agent templates work: a setup wizard flow that asks users how to create their first agent (fresh vs. template), right before the sandbox build. Underlying need is to streamline onboarding for new users.
  [PR Link](https://github.com/nanocoai/nanoclaw/pull/2909)

### 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours. There are no open bug-related issues on the tracker. The project appears stable with no urgent stability concerns.

### 6. Feature Requests & Roadmap Signals

No explicit feature requests were raised today. The roadmap signals are clear from recent PRs:

- **Agent Templates** (PRs #2909, #2908) – The team is actively completing a two-part feature. The setup wizard flow (#2909) is the final piece, and its merge is likely imminent. This will likely appear in the next release.
- **Guardrails** (PR #2726, closed) – The /add-guardrails skill has been merged. It provides deterministic safety controls (prompt injection blocking, credential leak detection), signaling a focus on enterprise/security use cases.
- **Model Router Skills** (PR #2949) – The community is contributing a lightweight litellm-based model router, indicating interest in multi-model orchestration from within NanoClaw skills.

### 7. User Feedback Summary

No user feedback (comments, reactions, or new issues) was recorded in the last 24 hours. The project lacks direct user sentiment data from this window.

### 8. Backlog Watch

There are no long-unanswered issues or PRs that require maintainer attention. Both open PRs (#2949, #2909) are recent and currently active, with no signs of neglect. The project’s backlog is effectively clean.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-06

## 1. Today's Overview

IronClaw remains in a high-velocity development cycle, with **28 pull requests updated in the last 24 hours**—including 6 merged/closed—and **4 active issues**. The project is in the midst of two major feature rollouts: the **Reborn architecture migration** (replacing the v1 monolith) and the **Slack OAuth/pairing-code overhaul**. Activity is dominated by core contributors (henrypark133, ilblackdragon, serrrfirat, abbyshekit, BenKurrek) with a clear pattern of stacked PRs being built and reviewed. Dependabot continues to drive dependency hygiene with 9 updates across the ecosystem. A nightly E2E failure (#4108) remains unresolved since May, warranting attention.

## 2. Releases

**No new releases in the last 24 hours.** The most recent release candidate is in open PR #5598 (`chore: release`), which proposes:
- `ironclaw_common`: 0.4.2 → **0.5.0** (⚠ API breaking changes)
- `ironclaw_safety`: 0.2.2 → 0.2.3 (API compatible)
- `ironclaw_skills`: 0.3.0 → **0.4.0** (⚠ API breaking changes)
- `ironclaw`: 0.24.0 → **0.29.1** (major version jump)
- `ironclaw_vault`: **0.1.0** (new crate)

🔗 [Release PR #5598](https://github.com/nearai/ironclaw/pull/5598)

## 3. Project Progress

**6 PRs merged/closed today**—the most impactful advances:

- **Slack pairing → OAuth migration (production change):** PR #5604 (merged, 121 files) removes the old Slack pairing-code flow, models Slack as an installable channel entrypoint with per-user OAuth-backed tool identity, and wires OAuth setup through extensions and chat. Stack continuation PRs #5645 and #5646 are in review. 🔗 [#5604](https://github.com/nearai/ironclaw/pull/5604)
- **Slack ingress routes from manifest:** PR #5626 (merged) makes the manifest-driven ingress contract load-bearing—Slack's two inbound routes now declared as data in the bundled extension manifest instead of Rust policy literals. 🔗 [#5626](https://github.com/nearai/ironclaw/pull/5626)
- **Integration harness wiring-parity tripwire:** Issue #5637 (closed via PR) adds an assertion that harness runtime shape matches production local-dev composition—a follow-up from the integration-suite restructure. 🔗 [#5637](https://github.com/nearai/ironclaw/issues/5637)
- **Optimize hosted Postgres turn-state latency:** PR #5667 (draft, closed/chopped up) was split into smaller pieces for review. Original proposal: move hot paths from blob-style persistence toward RootFilesystem-backed append/row stores. 🔗 [#5667](https://github.com/nearai/ironclaw/pull/5667)

## 4. Community Hot Topics

**Most active PR by scope and team investment:**

1. **PR #5665** — `fix(ironclaw_llm): repair provider-corrupted tool-call argument JSON` (abbyshekit)  
   Addresses a critical cross-provider bug where OpenAI-compatible providers (OpenRouter, NEAR AI Cloud) leak native XML tool-call formats through translation. Filed by a regular contributor. 🔗 [#5665](https://github.com/nearai/ironclaw/pull/5665)

2. **PR #5666** — `feat(agent): break repeated identical tool-call loops with a corrective nudge` (abbyshekit)  
   Draft PR adding a repetition breaker to the v1 agentic loop, distinct from Reborn's failure-termination work. Addresses a real user pain point—models getting stuck in identical tool-call loops. 🔗 [#5666](https://github.com/nearai/ironclaw/pull/5666)

3. **Issue #5647** — `Bridged tool disclosure + narrowed capability allowlist strips the bridge meta-tools` (henrypark133)  
   A latent security issue discovered during coverage testing: when bridged disclosure defers a >32-tool catalog, the synthetic `ironclaw.*` bridge capability IDs are not part of any granted capability set. Fix PR #5659 is already open. 🔗 [#5647](https://github.com/nearai/ironclaw/issues/5647)

**Underlying need analysis:** The community (dominated by the core team) is intensely focused on:
- **Provider interoperability:** Multiple PRs address LLM provider quirks (corrupted XML, tool-call format issues)
- **Migration completeness:** The Slack OAuth stack and Reborn architecture transitions are consuming most bandwidth
- **Security boundaries:** The bridged-tool disclosure issue shows security is being stress-tested during the Reborn rollout

## 5. Bugs & Stability

**High severity:**

- **#5647 — Bridge meta-tools stripped from narrowed allowlists (LATENT, fixed by #5659)**  
  A security filter (`CapabilitySurfaceProfileFilter`) was stripping host-synthesized bridge meta-tools (`tool_search`/`tool_describe`/`tool_call`) from narrowed-allowlist callers crossing the 32-tool bridging threshold. **Fix PR #5659 is open** and marked as a production change. 🔗 [Issue #5647](https://github.com/nearai/ironclaw/issues/5647) | [PR #5659](https://github.com/nearai/ironclaw/pull/5659)

**Medium severity:**

- **#4108 — Nightly E2E failing (open since 2026-05-27, 40 days)**  
  Scheduled E2E run continues failing, last updated 2026-07-05. The commit at `85c02c29fd6b3231e28f0abacb78fe06ebd2334c` may be a regression point. No fix PR yet. 🔗 [#4108](https://github.com/nearai/ironclaw/issues/4108)

**Low severity (being addressed):**

- **#5657 — Coverage scope: v1-only crates exempted from Reborn coverage denominator**  
  Tracking issue for four crates exempted from Reborn coverage measurement. Transparent reporting, not a runtime bug. 🔗 [#5657](https://github.com/nearai/ironclaw/issues/5657)

**Stability improvements in review:**
- PR #5662: Converting 90 silent `let _ = <fallible>` sites into explicit error handling across runtime error paths. 🔗 [#5662](https://github.com/nearai/ironclaw/pull/5662)
- PR #5661: CAS-contention + discard-tombstone coverage, fixing `InMemoryStore` parity bug (#5467). 🔗 [#5661](https://github.com/nearai/ironclaw/pull/5661)
- PR #5663: Prompt-context assembly hardening—compaction truncation, drop observability, opt-in instruction budget. 🔗 [#5663](https://github.com/nearai/ironclaw/pull/5663)

## 6. Feature Requests & Roadmap Signals

**Likely shipping in the next release (v0.30+):**

1. **Slack OAuth migration (complete):** PRs #5604, #5645, #5646 form a stacked migration from pairing-codes to personal OAuth. The first is merged, the other two are in active review. 🔗 [#5645](https://github.com/nearai/ironclaw/pull/5645) | [#5646](https://github.com/nearai/ironclaw/pull/5646)

2. **Manifest-driven ingress (complete):** PR #5626 merged—Slack routes now declared as data, not Rust literals. This paves the way for other channel extensions.

3. **Agent loop repetition breaker (v1):** PR #5666 (draft) adds corrective nudge for repeated identical tool-call loops. Distinct from Reborn's stop-condition work. Likely to ship in next v1 patch. 🔗 [#5666](https://github.com/nearai/ironclaw/pull/5666)

4. **Postgres turn-state latency improvements:** The chopped-up PR #5667 will yield smaller, reviewable pieces targeting hosted single-tenant Postgres performance.

**Further out:**
- **IronLoop dogfood configuration:** PR #5580 adds config for an AI-assisted code review agent ("IronLoop") with conservative small-fix implementer. 🔗 [#5580](https://github.com/nearai/ironclaw/pull/5580)
- **Reborn coverage measurement redesign:** The exemption tracking in #5657 suggests the team is formalizing crate-tier instrumentation for the Reborn architecture.

## 7. User Feedback Summary

While direct user commentary is limited (the GitHub activity is dominated by the core team), several **implicit user pain points** are being addressed:

- **Provider-caused tool-call corruption (PR #5665):** Users running IronClaw against OpenRouter or NEAR AI Cloud would see truncated or XML-tainted tool arguments. The team is actively patching this.
- **Agent stuck in tool-call loops (PR #5666):** A clear usability issue—agents repeating identical tool calls without progress. The draft fix adds a "corrective nudge" to break the cycle.
- **Security edge case (Issue #5647):** The bridged-tool disclosure bug meant narrowed capability allowlists could strip access to tool search/describe/call—potently surprising for users relying on capability-based security.
- **Nightly E2E flakiness (Issue #4108):** 40-day unresolved failure suggests users running nightly builds may encounter unstable tests or CI failures.

**Satisfaction signals:** The rapid iteration on Slack integration (pairing → OAuth) and the security-focused coverage testing suggest a team that is responsive to real deployment feedback.

## 8. Backlog Watch

**Critical items needing maintainer attention:**

1. **Issue #4108 — Nightly E2E failure (40 days open)**  
   The longest-unresolved active issue. No comments from maintainers despite 40 days of failure. This affects the team's CI reliability signal. 🔗 [#4108](https://github.com/nearai/ironclaw/issues/4108)

2. **PR #4032 — WASM dependency bump (42 days open)**  
   Dependabot PR updating `wit-component` and `wit-parser` that has been open since May 25. Given the Reborn architecture's use of WebAssembly, stale WASM deps could cause friction. 🔗 [#4032](https://github.com/nearai/ironclaw/pull/4032)

3. **PR #5114 — Tokio-ecosystem dependency bump (15 days open)**  
   Updates to `tokio-tungstenite`, `tokio-postgres-rustls`, `tower-http`, and `hyper`. These are foundational network dependencies. 🔗 [#5114](https://github.com/nearai/ironclaw/pull/5114)

4. **PR #5550 — Bulk dependency update (4 days open)**  
   Updates 13 packages including a major jump in `agent-client-protocol` (0.10.4 → 1.0.1) and `webpki-roots`. Breaking change risk in the protocol crate. 🔗 [#5550](https://github.com/nearai/ironclaw/pull/5550)

5. **Issue #5657 — Coverage scope exemptions (1 day open)**  
   Newly filed, but the four v1-only crate exemptions may need architectural review—particularly if the Reborn migration intends for these crates to eventually be tested under the new system. 🔗 [#5657](https://github.com/nearai/ironclaw/issues/5657)

---

**Overall project health:** **High velocity, good responsiveness to bugs (same-day fix PR for #5647), but a 40-day-nightly-E2E failure is a yellow flag for CI reliability.** The Reborn migration and Slack OAuth overhaul are the dominant themes, with security hardening proceeding alongside feature work.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-06

## Today's Overview
Project activity remains low, with no new issues or releases in the last 24 hours. Two pull requests were updated, one of which was merged. The merged PR (#2273) represents meaningful front-end progress in task scheduling UI. However, a long-standing open PR (#1349) fixing a critical IM connectivity validation bug has been marked as stale after over three months with no maintainer action. Overall, the project appears to be in a maintenance lull with moderate code churn but limited community interaction.

## Releases
None.

## Project Progress
- **Merged/Closed PRs (1):**
  - **#2273** **[CLOSED]** — `feat(scheduledTask): task list card redesign with status chip, toggle, search, and optimistic UI feedback (renderer)`  
    Areas: renderer, main, openclaw.  
    Author: fisherdaddy | Created: 2026-07-05 | Merged: 2026-07-05  
    **Summary:** Redesigned the scheduled task list UI cards, adding status chips, toggle functionality, search capability, and optimistic UI feedback in the renderer layer.  
    **Link:** [PR #2273](https://github.com/netease-youdao/LobsterAI/pull/2273)

## Community Hot Topics
No issues or PRs attracted comments or reactions in the last 24 hours. The project currently has zero open issues and the only active PR (#1349) received no recent engagement.

## Bugs & Stability
No new bug reports or crash reports were filed today.

**Existing known bug (unresolved, stale):**
- **PR #1349** (Open, stale) — `fix(im): add real API validation for POPO connectivity test`  
  **Problem:** POPO connection test always shows "verified" even with invalid appKey/appSecret.  
  **Root cause:** Code only checks config field non-emptiness, never calls the actual POPO API.  
  **Status:** PR created 2026-04-02, last updated 2026-07-05, marked stale. No merge activity from maintainers.  
  **Severity:** High — impacts user trust in IM connectivity validation.  
  **Link:** [PR #1349](https://github.com/netease-youdao/LobsterAI/pull/1349)

## Feature Requests & Roadmap Signals
No new feature requests were filed. The merged PR #2273 indicates active development on the task scheduler UI, suggesting that improved user interaction for scheduled tasks (search, toggles, status chips) is a current priority. No roadmap signals for upcoming releases are available from the data.

## User Feedback Summary
No user feedback, comments, or reactions were recorded in the last 24 hours. The project lacks visible community discussion, which may indicate low active user engagement or that users are not filing feedback through GitHub Issues.

## Backlog Watch
- **PR #1349** — `fix(im): add real API validation for POPO connectivity test`  
  **Author:** gongzhi-netease | **Created:** 2026-04-02 | **Last updated:** 2026-07-05 (as stale)  
  **Why it matters:** This PR fixes a significant bug where false "verified" status could mislead users during IM configuration. Despite a clear root cause and proposed fix, it has languished for over 3 months without maintainer review or merge. The PR is now marked stale, risking abandonment.  
  **Action needed:** Maintainer review and decision (merge, request changes, or close with explanation).  
  **Link:** [PR #1349](https://github.com/netease-youdao/LobsterAI/pull/1349)

*Note: No long-unanswered issues exist — the project currently has zero open issues.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Based on the provided GitHub data for the CoPaw project (agentscope-ai/CoPaw) on 2026-07-06, here is the structured project digest.

---

## CoPaw Project Digest: 2026-07-06

### 1. Today's Overview
CoPaw is experiencing a surge in community activity and maintenance effort. In the last 24 hours, 12 new or updated issues and 5 open pull requests have been logged, indicating a high level of user engagement and developer attention. While there are no new releases, the project is actively processing significant bug reports and feature requests, with a strong focus on frontend UI/UX issues, cross-provider model compatibility, and backend timezone handling. The high volume of open issues (12 active, 0 closed) suggests a critical need for a stability-focused patch release.

### 2. Releases
**None.** No new releases were published in the last 24 hours. The latest version remains v1.1.12.post2, which is the target of several bug reports.

### 3. Project Progress
- **Merged/Closed PRs:** No PRs were merged or closed in the last 24 hours.
- **Active PRs:** 5 PRs are currently open for review.
    - **Bug Fixes (Critical Path):** Two PRs target high-priority bugs:
        - [PR #5786](https://github.com/agentscope-ai/CoPaw/pull/5786) aims to fix three bugs: frontend compression threshold display (#5784), context compression on model re-deployment (#5773), and multi-workflow agent creation (#5709).
        - [PR #5783](https://github.com/agentscope-ai/CoPaw/pull/5783) directly addresses the timezone bug in the cron state API (#5779).
    - **Feature Advancement:** [PR #5777](https://github.com/agentscope-ai/CoPaw/pull/5777) introduces a new `auto-memory turn state management` system for sessions, suggesting ongoing work on agent memory features.
    - **First-Time Contributors:** Two PRs ([#5792](https://github.com/agentscope-ai/CoPaw/pull/5792), [#5791](https://github.com/agentscope-ai/CoPaw/pull/5791)) from new contributor `Osamaali313` address tool message sanitization and number formatting, indicating a healthy onboarding process.

### 4. Community Hot Topics
The most engaging discussion revolves around the anticipated **V2.0 release**, with a user expressing high expectations ([Issue #5770](https://github.com/agentscope-ai/CoPaw/issues/5770)). This signals strong community interest in the next major version's capabilities.

Other highly active threads:
- **[#5784 Front-end Compression Threshold Bug](https://github.com/agentscope-ai/CoPaw/issues/5784):** A well-documented bug where the UI shows incorrect compression thresholds for models with the same name across different providers. (3 comments)
- **[#5779 Cron State API Timezone Bug](https://github.com/agentscope-ai/CoPaw/issues/5779):** A backend bug where the cron API returns times in UTC instead of the configured timezone, causing confusion for scheduling. (3 comments)
- **[#5785 Feature Request: Hidden Folder Selection](https://github.com/agentscope-ai/CoPaw/issues/5785):** A user in "coding" mode requests the ability to select hidden folders (those starting with a dot). (3 comments)

**Underlying Needs:** Users are demanding better **configuration accuracy** (threshold display), **schedule reliability** (timezone handling), and **dev-tool usability** (hidden folder access).

### 5. Bugs & Stability
A significant number of bugs were reported, indicating a fragile state in the v1.1.12.post2 release. Ranked by severity:

- **Critical:**
    - **Context Compression Crash ([#5789](https://github.com/agentscope-ai/CoPaw/issues/5789)):** Agent crashes when generating structured output that exceeds JSON Schema `maxLength` limits. This is a stability issue that can break agent execution.
    - **Loading Animation Hang ([#5790](https://github.com/agentscope-ai/CoPaw/issues/5790)):** The UI loading spinner fails to disappear after an agent response, rendering the interface unusable until refresh.
- **High:**
    - **Cron API Timezone Issue ([#5779](https://github.com/agentscope-ai/CoPaw/issues/5779)):** Breaks scheduled job accuracy. Fixed in [PR #5783](https://github.com/agentscope-ai/CoPaw/pull/5783).
    - **Frontend Threshold Display ([#5784](https://github.com/agentscope-ai/CoPaw/issues/5784)):** Leads to incorrect user configuration. Fixed in [PR #5786](https://github.com/agentscope-ai/CoPaw/pull/5786).
    - **Feishu (Lark) No Reply ([#5757](https://github.com/agentscope-ai/CoPaw/issues/5757)):** Intermittent failure where the bot receives messages but does not reply, affecting a major IM channel.
- **Medium/Low:**
    - **Mobile UI Truncation ([#5787](https://github.com/agentscope-ai/CoPaw/issues/5787)):** Content is clipped on mobile/tablet.
    - **Google Gemini Embedding Failure ([#5782](https://github.com/agentscope-ai/CoPaw/issues/5782)):** Vector search silently falls back to keyword search due to `index=None` parsing error.
    - **Skills List Limit ([#5788](https://github.com/agentscope-ai/CoPaw/issues/5788)):** Only 20 skills displayed with broken infinite scroll.

### 6. Feature Requests & Roadmap Signals
Two explicit feature requests were raised, pointing toward a "Multi-Tenant" future.

- **Team/Multi-User Account Management ([#5780](https://github.com/agentscope-ai/CoPaw/issues/5780)):** A user requests multi-user support for team deployment. This is a significant architectural request that suggests CoPaw is being used in production team settings, and the current single-bot auth model is a bottleneck. This is a strong candidate for the **V2.0** roadmap.
- **Hidden Folder Selection in Coding Mode ([#5785](https://github.com/agentscope-ai/CoPaw/issues/5785)):** A smaller, developer-focused UX improvement.
- **Offline Code Mode ([#5781](https://github.com/agentscope-ai/CoPaw/issues/5781)):** A user reports that the "code preview" feature requires an internet connection, which is a blocker for offline usage.

**Prediction:** The **multi-user account** feature is the most likely major new feature to be considered for V2.0, while the hidden folder and offline features are quick wins for a v1.1.13 patch.

### 7. User Feedback Summary
- **High Satisfaction:** One user explicitly expresses anticipation and excitement for V2.0, indicating strong loyalty and positive sentiment toward the project's direction (#5770).
- **Key Pain Points:**
    - **Reliability:** The "Feishu No Reply" bug (#5757) and "Context Compression Crash" (#5789) are causing user frustration regarding agent reliability.
    - **Configuration Confusion:** The provider/model threshold mismatch (#5784) creates a distrust in the UI's accuracy.
    - **Tooling Gaps:** Users needing advanced features (multi-user, hidden folders, offline coding) feel limited by the current feature set.
    - **Mobile Experience:** The mobile UI truncation (#5787) suggests a lack of responsive design testing.

### 8. Backlog Watch
While no issues are extremely old, several are active without a clear path to closure:
- **[#5757 Feishu No Reply](https://github.com/agentscope-ai/CoPaw/issues/5757):** Created July 3rd, this is a high-impact bug affecting a primary communication channel. It requires immediate debugging attention as it affects production reliability.
- **Open PR Logjam:** With 5 open PRs and 0 closed today, the project appears to have a review bottleneck. The PRs from first-time contributors ([#5792](https://github.com/agentscope-ai/CoPaw/pull/5792), [#5791](https://github.com/agentscope-ai/CoPaw/pull/5791)) are small and should be merged quickly to encourage continued contribution.
- **No Response from Maintainers:** Several impactful bug reports ([#5787](https://github.com/agentscope-ai/CoPaw/issues/5787), [#5782](https://github.com/agentscope-ai/CoPaw/issues/5782)) have only 1-2 comments (likely from the reporter) and lack a triage label or response from a maintainer.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-06

Generated from [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | Data snapshot: 2026-07-06

---

## 1. Today's Overview

ZeroClaw is in an **intense development phase** with exceptionally high activity: 23 issues updated and 50 pull requests touched in the last 24 hours. The project is actively advancing **goal-mode implementation** (tracker #8681), **SOP authoring** (tracker #8736, #8288), and **architecture cleanup** (tracker #8583). Security and stability concerns dominate the open issue set, with three P1 bugs reported in the last 24 hours covering zombie MCP processes, browser hang deadlocks, and broken onboarding config. A major architectural RFC (#8603) proposes an OpenAI Chat Completions compatibility adapter, signaling intent to widen the integration surface dramatically. No new releases were published.

**Open/active issues: 18 | Closed issues today: 5 | Open PRs: 43 | Merged/closed PRs: 7 | New releases: 0**

---

## 2. Releases

**No new releases** were published in the last 24 hours. The last release activity remains tracked under v0.8.3 observability and release support work (issue #8073).

---

## 3. Project Progress

**7 PRs were merged/closed today.** Key advances:

### Merged/closed PRs with notable impact:
- **[PR #8727](https://github.com/zeroclaw-labs/zeroclaw/pull/8727)** — **fix(gateway): reject empty bearer token in require_auth**. Defense-in-depth security hardening that prevents bypass of authentication when an empty token is presented.
- **[PR #8645](https://github.com/zeroclaw-labs/zeroclaw/issues/8645)** — **Closed (fixed)**: Reload banner showing persistent drift for `ZEROCLAW_*` env-overridden secrets. Fix resolved a confusing UX issue in multi-agent deployments.
- **[PR #8462](https://github.com/zeroclaw-labs/zeroclaw/issues/8462)** — **Closed (fixed)**: RFC for Runtime Policy on OTel LLM and Tool Content — accepted and implemented split from structured-observability umbrella.
- **[PR #7861](https://github.com/zeroclaw-labs/zeroclaw/issues/7861)** — **Closed (fixed)**: Security-audit-skipped skills now surfaces in `zeroclaw skills list` — addresses a long-standing visibility gap.
- **[PR #8251](https://github.com/zeroclaw-labs/zeroclaw/issues/8251)** — **Closed (fixed)**: Relationship memory surfaced as user-facing workflows — knowledge graph interaction now documented and operational.
- **[PR #7879](https://github.com/zeroclaw-labs/zeroclaw/issues/7879)** — **Closed (fixed)**: Bounded `SKILL.md` reflection for skill creation — auto-generated skills now have context-limited reflection.

### Trackers advancing:
- **Goal-mode implementation** ([#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681)): 8 comments, splitting `feat/goal-mode` into reviewable PRs.
- **Architecture cleanup** ([#8583](https://github.com/zeroclaw-labs/zeroclaw/issues/8583)): Channel/source shared-boundary cleanup underway.
- **SOP control plane** ([#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288)): Multi-PR rollout to reach 5/5 SOP capability.

---

## 4. Community Hot Topics

### Most Active Discussions (by comment count):

1. **[#8681 — Goal mode implementation split stack](https://github.com/zeroclaw-labs/zeroclaw/issues/8681)** (8 comments)
   - **Underlying need:** Coordinating the delivery of a complex, high-risk feature across multiple PRs without breaking master. The community is actively tracking how goal-mode will land.

2. **[#6165 — Lighter ZeroClaw core through external integrations](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)** (8 comments)
   - **Underlying need:** Defining architectural boundaries — what should live in core vs. as MCP servers, skills, or plugins. This is a foundational architectural debate with downstream impact on all integration work.

3. **[#8462 — RFC: Runtime Policy for OTel LLM and Tool Content](https://github.com/zeroclaw-labs/zeroclaw/issues/8462)** (4 comments, now closed)
   - **Underlying need:** Users need fine-grained control over what telemetry data is sent to OTel backends to avoid leaking sensitive content (prompts, tool outputs). Now accepted and resolved.

4. **[#8603 — OpenAI Chat Completions compatibility adapter](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** (3 comments)
   - **Underlying need:** Users running Open WebUI, LobeChat, or custom integrations cannot connect to ZeroClaw without building custom adapters. This RFC proposes adding native OpenAI API compatibility — a major integration surface expansion.

5. **[#6715 — Delete unneeded branches](https://github.com/zeroclaw-labs/zeroclaw/issues/6715)** (4 comments)
   - **Underlying need:** Repository hygiene — 200+ stale branches from forks are creating organizational friction. Blocked but maintainers are aware.

---

## 5. Bugs & Stability

### Critical/High Severity (P1):

| Issue | Component | Summary | Fix PR Exists? |
|-------|-----------|---------|----------------|
| **[#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731)** | runtime/daemon | **Zombie MCP processes**: Stdio-based MCP servers accumulate as unreaped zombie processes under active daemon PIDs, degrading system resources. | No |
| **[#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560)** | tools | **browser_open hangs agent turn**: Fails to open window (no display/headless) → unbounded subprocess wait, also affects TTS and ffmpeg. | No |
| **[#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718)** | config/onboarding | **Broken config template**: `zeroclaw config init` ships a config that its own daemon rejects, silently disabling local_whisper transcription on fresh installs. | No |

### Medium Severity (P2):

| Issue | Component | Summary |
|-------|-----------|---------|
| **[#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720)** | provider:bedrock | **Cannot disable cachePoint for Nova 2 Lite**: Random caching errors make the model unusable for some users. |
| **[#8722](https://github.com/zeroclaw-labs/zeroclaw/issues/8722)** | security/sandbox | **High-entropy detector false positives**: Redacts legitimate generated filenames as secrets (e.g., `demo/dbca1b03.md` → `demo/[REDACTED]`). |
| **[#8733](https://github.com/zeroclaw-labs/zeroclaw/issues/8733)** | provider | **models.dev catalog discards capabilities**: Only model IDs are parsed; vision/other capabilities are dropped, so `supports_vision()` falls back to hardcoded per-family bools. |
| **[#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911)** | Android/Termux | **Installation broken on Android-Termux**: Binary and source builds both fail on Linux aarch64. Blocked, needs author action. |

### Notable Fix PRs Open:
- **[PR #8741](https://github.com/zeroclaw-labs/zeroclaw/pull/8741)** — fix(browser): validate screenshot destination path against workspace policy (addresses path traversal vulnerability)
- **[PR #8690](https://github.com/zeroclaw-labs/zeroclaw/pull/8690)** — fix(channels): gate `/model --agent` behind per-sender authorization (addresses privilege escalation #8044)
- **[PR #8696](https://github.com/zeroclaw-labs/zeroclaw/pull/8696)** — fix(runtime): enforce leading user-turn invariant before provider dispatch (prevents provider crashes from malformed conversation state)
- **[PR #8726](https://github.com/zeroclaw-labs/zeroclaw/pull/8726)** — fix(runtime/shell): block dangerous env vars from TUI overlay (TUI security hardening)
- **[PR #8725](https://github.com/zeroclaw-labs/zeroclaw/pull/8725)** — fix(channels/webhook): refuse to start listener without configured secret (prevents unauthenticated webhook endpoints)
- **[PR #8739](https://github.com/zeroclaw-labs/zeroclaw/pull/8739)** — fix(error-context): preserve inner map_err failures across 4 crates (diagnostics improvement)
- **[PR #8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746)** — fix(goal): stop active goal self-resume loops (prevents runaway goal execution)

---

## 6. Feature Requests & Roadmap Signals

### High-Velocity Features in Flight:

| Feature | Issue/PR | Status | Expected Impact |
|---------|----------|--------|-----------------|
| **Goal-mode implementation** | [#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) | Tracker — splitting into PRs | v0.9+ — core agent behavior upgrade |
| **SOP authoring surface** | [#8736](https://github.com/zeroclaw-labs/zeroclaw/issues/8736), [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) | Active with node-graph editor | v0.9 — SOPs reach 5/5 capability |
| **OpenAI Chat Completions adapter** | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC — needs maintainer review | v0.9+ — unlocks Open WebUI, LobeChat |
| **Inkbox native channel** | [#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) | PR — needs author action, size:XL | v0.8.4+ — email/SMS/voice/iMessage |
| **Bocha AI web search** | [#8737](https://github.com/zeroclaw-labs/zeroclaw/pull/8737) | PR — risk:high | v0.8.4 — mainland-China usable search |
| **Schema V4 breaking cut** | [#8310](https://github.com/zeroclaw-labs/zeroclaw/issues/8310) | Accepted | v0.9 — removes dead/inert config surface |

### Likely for Next Version (v0.8.4 or v0.9):
- **Bocha AI search provider** — addresses mainland-China deployment gap
- **SOP false-when routing fix** ([#8719](https://github.com/zeroclaw-labs/zeroclaw/issues/8719)) — unblocks multi-phase SOPs
- **Matrix single-message progress drafts** ([#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443)) — better real-time UX on Matrix
- **Cron `uses_memory` flag** ([#8676](https://github.com/zeroclaw-labs/zeroclaw/pull/8676)) — fine-grained memory control for scheduled jobs
- **Feature matrix auto-generation** ([#8697](https://github.com/zeroclaw-labs/zeroclaw/pull/8697)) — docs quality-of-life improvement

---

## 7. User Feedback Summary

### Pain Points (Explicitly Stated):
- **Onboarding friction:** [#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718) — `zeroclaw config init` ships a broken template that silently disables transcription. Fresh installs expect voice to work but it doesn't.
- **Android/Termux exclusion:** [#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911) — No viable installation path for Android users. "I cannot get past this error."
- **Bedrock caching roadblock:** [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) — "I want to disable caching so I can stop getting this error" — no documented config knob exists.
- **False-positive secret redaction:** [#8722](https://github.com/zeroclaw-labs/zeroclaw/issues/8722) — Legitimate filenames are redacted, breaking file references in agent output.
- **Browser tool unreliability on headless hosts:** [#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) — Agent turn hangs indefinitely when there's no display.

### Use Cases (Explicit):
- **Multi-agent deployment with env-injected secrets** ([#8645](https://github.com/zeroclaw-labs/zeroclaw/issues/8645)) — operators using `ZEROCLAW_*` env vars need accurate reload banners
- **Mainland-China deployments** ([#8737](https://github.com/zeroclaw-labs/zeroclaw/pull/8737)) — "all currently supported providers are unusable from mainland-China"
- **Open WebUI/LobeChat integration** ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)) — "cannot connect without building an adapter of their own"

### Satisfaction Signals:
- High community engagement on architectural trackers (#8681, #6165, #8583) suggests appreciation for structured feature delivery
- The swift closure of 5 issues and 7 PRs indicates active maintainer responsiveness
- Multiple new contributors active (wangmiao0668000666, Super-Cabbage, ryanlee486) — healthy PR pipeline

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention:

| Issue | Age | Summary | Why Stalled |
|-------|-----|---------|-------------|
| **[#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911) — Android Termux Setup** | 18 days | Installation broken on Android aarch64 | Blocked on `needs-author-action`; no repro provided |
| **[#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) — Delete unneeded branches** | 51 days | 200+ stale branches from forks | Marked `status:blocked` — may need tooling or policy decision |
| **[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — OpenAI Chat Completions adapter** | 4 days | RFC pending initial review | `needs-maintainer-review` — a high-impact architectural decision |

### PRs Blocked or Needing Author Action:
- **[#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) — Inkbox channel** (9 days): Size:XL, `needs-author-action` — a major feature that could unblock email/SMS/voice/iMessage support
- **[#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313) — Compact skill injection** (11 days): Core architectural change — skills default to progressive-disclosure model

### Risk Watch — High-Risk Open Items with No Assigned Fix:
- **Zombie MCP processes** ([#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731)) — P1, reported yesterday, no fix PR yet
- **browser_open hang** ([#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560)) — P1, 6 days old, blocks headless/desktop workflows
- **Broken config template** ([#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718)) — P1, 2 days old, affects every new installation

---

*Digest generated 2026-07-06. Data sourced from zeroclaw-labs/zeroclaw public GitHub activity in the preceding 24 hours.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*