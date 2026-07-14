# OpenClaw Ecosystem Digest 2026-07-01

> Issues: 315 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-01 00:28 UTC

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

Here is the **OpenClaw Project Digest** for **2026-07-01**.

---

## 1. Today’s Overview
Project activity remains extremely high, with **315 issues** and **500 pull requests** updated in the last 24 hours. The community is engaged in heavy triage, with **60 PRs merged/closed** showing strong maintainer throughput. A new patch release (`v2026.6.11`) landed, focusing on channel control and operational reliability. However, the backlog remains dense with high-severity bugs: four `P0`/`P1` issues involve **silent message loss** and **session starvation**, indicating that stability is the current core challenge for the maintainers.

## 2. Releases
**Version:** `v2026.6.11` (openclaw 2026.6.11)

- **More capable channel control:** Slack relay mode, native Mattermost `/oc_queue`, and per-DM model overrides.
- **Richer operational tooling:** Improvements to gateway management and configuration handling.

**Note:** No breaking changes or specific migration notes were provided in the release data, though users upgrading from `2026.4.x` should be aware of the ongoing session-state regressions listed below.

## 3. Project Progress
- **Merged PRs (60):** Key fixes landed for the `memory-wiki` module, where multiple PRs (#96130, #96177, #97177) now gracefully handle malformed YAML frontmatter, preventing vault-wide crashes. A fix for colliding model-ref map keys in `openclaw doctor` also merged (#96544).
- **Active Fixes in Review:** Several high-impact PRs await maintainer review:
    - #97167: Fixes targetless `message.send` failures in WebChat.
    - #98267: Moves exec-approval below the cache boundary to reduce latency jitter.
    - #98293: Emits diagnostics for stale exec-approval followups.
    - #98302: Fixes iOS onboarding getting stuck after QR scan.

## 4. Community Hot Topics
| Issue/PR | Title | Comments | Impact |
| :--- | :--- | :--- | :--- |
| **#9443** | [Request: Prebuilt Android APK releases](https://github.com/openclaw/openclaw/issues/9443) | 26 | **High demand:** The community (and AI assistant QING) wants easier mobile deployment. High engagement suggests a strong need for better mobile distribution. |
| **#48003** | [Steer mode does not inject messages mid-turn for main sessions](https://github.com/openclaw/openclaw/issues/48003) | 14 | **Critical regression:** A core feature (`steer` mode) is broken. This is a longstanding issue (filed March 2026) that remains a top frustration point. |
| **#84516** | [Codex app-server: long agent replies silently truncated](https://github.com/openclaw/openclaw/issues/84516) | 11 | **Data loss:** Silent truncation of replies is likely eroding user trust in the Codex integration. |
| **#84583** | [cron announce delivery triggers takeover error when user is chatting](https://github.com/openclaw/openclaw/issues/84583) | 9 | **User experience:** Automated tasks hijacking active user sessions is a significant UX antipattern. |

**Underlying needs:** The community is clearly demanding **reliability** (fix `steer` mode, stop data loss), **better mobile support** (APKs), and **concurrent session safety** (stop cron tasks from interrupting human conversations).

## 5. Bugs & Stability
**High Severity (P0/P1)**
1.  **[#84882]** (P0) **memory-core Dreaming silently deletes daily memory files.** `[impact: data-loss]`. **No fix PR yet.** *Status:* Needs product decision.
2.  **[#98239]** (P1) `/pair qr` can change `gateway.bind` and break Tailscale Serve webchat. `[impact: security, message-loss]`. *Status:* Needs live repro & security review.
3.  **[#96704]** (P1) **Managed browser cookies never persist to disk.** `[impact: data-loss]`. *Status:* Reproduces on current release. A refile of a stale issue—root cause is known but unfixed.
4.  **[#94176]** (P1) Non-deliverable terminal turns not surfaced. **Fix PR #94848 is open** but waiting on proof.

**Moderate/High (P1/P2) with Fixes Available**
- **#98297** (P2) iOS app rejects LAN `ws://` URLs. **Fix PR #98302 is open and ready for review.**
- **#98210** (P1) iOS Talk treats SecretRef-backed API keys as missing. **Fix PR #98210 is open.**
- **#96125** (P2) Wiki YAML parse errors break vault. **Multiple fix PRs already merged.**
- **#98101** (P2) HTTP 429 with 'overloaded' body misclassified as rate limit. *Status:* Open, no fix PR.

**Regressions**
- **#84536** (P1) Preemptive context overflow silently kills embedded sessions.
- **#84610** (P1) Gateway loops with SIGTERM after upgrade (WSL2).
- **#83532** (P1) Web UI response delivery delayed, requires manual refresh.

## 6. Feature Requests & Roadmap Signals
- **High Likelihood (Next Version):**
    - *Session health visibility:* PR #92697 (surfacing `blocked` and `stale` statuses) is in review, suggesting the team is prioritizing operator tools here.
    - *Accessibility:* Issue #82450 requests a Linear Persistent Workspace Mode for blind users. This has strong sentiment and is likely to be addressed soon.
- **Medium/Uncertain:**
    - *Multiple Azure/Teams bots:* Issue #71058 is popular but still waiting on a product decision.
    - *Prebuilt Android APKs:* Issue #9443 has massive engagement but remains in `needs-product-decision` limbo.
    - *Slack per-thread context isolation:* Issue #97341 is a new request with growing interest.

## 7. User Feedback Summary
- **Pain Points:**
    - **"My data is disappearing."** ([#84882], [#96704]) Users are reporting silent loss of memory files and login sessions, causing deep frustration.
    - **"I am invisible."** Blind user (#82450) states current workspace is inaccessible for linear workflows despite finding OpenClaw powerful.
    - **"It broke after update."** Multiple regressions (WSL2 [#84610], macOS crashes [#83968], Web UI latency [#83532]) indicate recent release quality is shaky.
- **Satisfaction:**
    - Users are highly engaged in filing detailed bug reports with root causes (e.g., commit `9889c6da5` in #48003), indicating a technically sophisticated user base willing to help debug.
    - The release of `v2026.6.11` with better channel control has positive sentiment, with multiple contributors thanked.

## 8. Backlog Watch
- **[#48003]** *(P1, Open 107 days)* **Steer mode broken.** This is the oldest, most critical bug in the backlog. It has a specific root cause identified (commit `9889c6da5`) but has no linked fix PR. It should be the maintainers' #1 priority.
- **[#38327]** *(P1, Open 116 days)* **Google Vertex/Gemini regression.** A long-standing issue blocking a significant chunk of the user base. "Needs live repro" after 4 months suggests a difficult environment dependency, but it needs attention.
- **[#58775]** *(P2, Open 90 days)* **Google Vertex provider merged into Google transport path.** Another Vertex issue that remains unresolved, creating a poor experience for GCP users.
- **[#83736]** *(P2, Open 43 days)* **Gateway intolerance to node version skew.** This is a fundamental infrastructure reliability issue flagged by a user that could cause brittle deployments. (Note: There is a new PR #68936 that partially addresses this by adding a Windows daemon, but the core tolerance issue remains).

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date:** 2026-07-01 | **Analyst:** Senior AI Agent Ecosystem Analyst

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing a **hyperactive phase**, with eight of ten tracked projects showing significant daily activity. The landscape is bifurcating between **full-stack agent platforms** (OpenClaw, ZeroClaw, NanoBot, IronClaw, CoPaw) and **specialized/embedded implementations** (PicoClaw, NullClaw, TinyClaw, ZeptoClaw). A clear pattern has emerged: projects are converging on memory reliability, channel adapter robustness, and agent-to-agent (A2A) collaboration as the next battleground features. However, all projects share a common pain point—**stability regressions** from rapid feature development, with multiple high-severity bugs (silent data loss, session starvation, onboarding failures) persisting across the ecosystem. The community is sophisticated and willing to contribute, but maintainer bandwidth is becoming the primary bottleneck sustaining velocity.

---

## 2. Activity Comparison

| Project | Open Issues | Open PRs | 24h Issues Updated | 24h PRs Updated | PRs Merged/Closed | Release | Health Signal |
|---------|------------|----------|-------------------|-----------------|-------------------|---------|---------------|
| **OpenClaw** | High | High | 315 | 500 | 60 | v2026.6.11 | ⚠️ High activity, heavy bug backlog |
| **NanoBot** | 12 | 67 | 12 | 67 | 35 | None | 🟢 Very active, strong throughput |
| **Hermes Agent** | High | 50+ | 50 | 50 | 10 | v0.14.0 (stale) | 🟡 Stable fix push, unreleased critical fix |
| **PicoClaw** | 5 | 4 | 6 | 7 | 3 | v0.3.1-nightly | 🟢 Moderate, manageable backlog |
| **NanoClaw** | 3 | 4 | 3 | 14 | 10 | None | 🟢 High momentum, security-aware |
| **NullClaw** | 2 | 0 | 2 | 0 | 4 | v2026.4.17 | 🟡 Low activity, steady maintenance |
| **IronClaw** | High | 25 | High | 25 | 25 | None | 🟡 High bug-bash activity, no release |
| **LobsterAI** | ~6 | ~10 | ~6 | ~14 | 14 | 2026.6.30 | 🟢 Very high velocity, fresh release |
| **CoPaw (QwenPaw)** | ~23 | ~50 | 23 | 50 | 22 | v1.1.12.post2 | 🟢 Extremely active, pre-v2.0 sprint |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | 0 | — | ⚫ Inactive |
| **TinyClaw** | 0 | 0 | 0 | 0 | 0 | — | ⚫ Inactive |
| **Moltis** | 0 | 1 | 0 | 3 | 2 | None | ⚫ Maintenance mode |
| **ZeroClaw** | 46 | 45 | 50 | 50 | 5 | v0.8.1 | 🟡 Intense but backlog widening |

**Notes:** Health signals are subjective—🟢 healthy, 🟡 caution, ⚫ inactive. "High" indicates 50+ items where exact counts weren't provided.

---

## 3. OpenClaw's Position

OpenClaw remains the **ecosystem's reference implementation** with the largest community and most comprehensive feature set, but this comes at a cost.

### Advantages vs. Peers
- **Largest contributor base**: 315 issues and 500 PRs updated daily dwarfs all peers
- **Broadest integration surface**: Slack relay, Mattermost, WebChat, iOS, Tailscale Serve
- **Mature memory architecture**: Dedicated `memory-core` and `memory-wiki` modules with YAML frontmatter handling
- **Operational tooling**: `openclaw doctor`, gateway management, channel control

### Technical Approach Differences
- **Steer mode**: Unique mid-turn message injection (currently broken—see #48003)
- **Cron announcement delivery**: Automated task injection (causes takeover errors—see #84583)
- **Session-state management**: More complex than peers, leading to regression risk

### Community Size Comparison
| Metric | OpenClaw | Nearest Peer (ZeroClaw) | Ratio |
|--------|----------|------------------------|-------|
| Daily Issues Updated | 315 | 50 | 6.3x |
| Daily PRs Updated | 500 | 50 | 10x |
| PRs Merged/Closed | 60 | 5 | 12x |

**Verdict**: OpenClaw has **6-10x the community activity** of its nearest competitor, but this creates a **volatility problem**—more changes mean more regressions. The 4 P0/P1 bugs (silent message loss, session starvation) erode its reliability advantage.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging independently across multiple projects, indicating ecosystem-level needs:

| Focus Area | Affected Projects | Specific Needs |
|------------|-------------------|----------------|
| **Media & Attachment Reliability** | NanoClaw, PicoClaw, LobsterAI | Discord attachments dropped (#2888), WhatsApp silent failures (#2894), WeChat dedup bugs |
| **Channel-Specific Configuration** | OpenClaw, ZeroClaw, PicoClaw | Telegram idle death (#972), channel config broken (#8505), custom endpoints failing (#3199) |
| **OAuth & Authentication** | NanoBot, PicoClaw, NanoClaw | Anthropic OAuth (#4604), Codex/Antygravity OAuth broken (#3197), token persistence |
| **Memory & Context Management** | OpenClaw, NanoBot, CoPaw | Silent memory file deletion (#84882), duplicate skill creation (#4554), Reranker API |
| **Agent Workflow Reliability** | Hermes Agent, IronClaw, CoPaw | Loop detection (#5657), lease expiration (#5456), background review hallucination (#55647) |
| **Mobile & Edge Deployment** | OpenClaw, PicoClaw, NullClaw | Prebuilt APKs (#9443), NanoKVM support (#3195), Android/Termux build (#868) |
| **Cost Optimization** | Hermes Agent, NanoBot, OpenClaw | 73% fixed token overhead (#4379), context reduction (#4581), token overhead analysis |

**Key Insight**: **Attachment handling** and **channel-specific configuration** are the most common pain points, suggesting the ecosystem's adapter layer needs standardization or a shared library.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | CoPaw | ZeroClaw | IronClaw |
|-----------|----------|---------|--------------|-------|----------|----------|
| **Target User** | Power users, ops teams | Developers, automation | CLI-first, custom providers | Enterprise teams | Multi-tenant orgs | Research/QA teams |
| **Primary Interface** | WebUI, Slack, iOS | WebUI, CLI | CLI (Hermes Console) | Console, TUI, DingTalk | CLI, ZeroCode, Web | Reborn WebUI |
| **Architecture** | Modular monorepo | Lightweight core | Plugin-heavy | Macro + micro agents | Wire-protocol-first | Rust backend |
| **Memory Strategy** | Dedicated modules | Dream-based | Skill-based | Reranker-enhanced | SQLite/embedder | WASM tools |
| **Channel Support** | Slack, Mattermost, WebChat | Multi (custom adapters) | Discord, Feishu, Telegram | DingTalk, Telegram | Telegram, AMQP | Internal only |
| **Security Model** | Steer/moderate | SSRF validation | Approval-locked commands | ToolGuard + Policy | Work lanes, TOTP | Runtime policy |
| **AI Provider Focus** | OpenAI-compatible | Anthropic, OpenAI | Codex, Claude, custom | Qwen, DeepSeek | Anthropic, OpenAI | Internal models |
| **Unique Strength** | Reference impl, largest community | Lightweight codebase, fast iteration | CLI REPL, token analysis | Chinese market, Reranker | Wire protocol, governance RFCs | Quality assurance tooling |
| **Current Weakness** | Regression velocity | Provider token persistence | Codex release broken | v2.0 stability | Onboarding friction | Concurrency bugs |

---

## 6. Community Momentum & Maturity

### Tier 1: Hyperactive (10+ PRs merged/day)
- **CoPaw** (22 merged) — Pre-v2.0 sprint, strongest feature velocity
- **LobsterAI** (14 merged) — Enterprise-focused, fresh release
- **NanoClaw** (10 merged) — Security-aware, channel expansion
- **Hermes Agent** (10 merged) — Unblocking stale fixes
- **OpenClaw** (60 merged) — Highest absolute output, but spreading thin

### Tier 2: Active (5-10 PRs merged/day)
- **NanoBot** (35 merged) — Agent reliability push
- **IronClaw** (25 merged) — Bug-bash mode, "Reborn" rewrite tail
- **ZeroClaw** (5 merged) — Widening backlog, architectural work

### Tier 3: Stable/Maintenance
- **PicoClaw** (3 merged) — Nightly builds, manageable backlog
- **NullClaw** (4 merged) — Cron subsystem enhancements
- **Moltis** (2 merged) — Dependency updates only

### Tier 4: Inactive
- **TinyClaw**, **ZeptoClaw** — No activity; potential zombie projects

### Maturity Assessment
- **Stabilizing**: NullClaw, Moltis — focused on dependency hygiene and cron reliability
- **Rapidly Iterating**: CoPaw, LobsterAI, NanoBot — shipping features weekly
- **Consolidating**: OpenClaw, ZeroClaw, Hermes Agent — high activity but buggy; need a stabilization release
- **Emerging**: PicoClaw, NanoClaw — promising but need maintainer responsiveness

---

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

1. **"Silent data loss is the #1 trust killer"**
   - Memory files silently deleted (OpenClaw #84882), cookies never persisted (OpenClaw #96704), tool call IDs corrupted (NanoBot #4595), WhatsApp media dropped (NanoClaw #2894)
   - **Implication**: Users are moving from "feature exploration" to "production adoption" and demanding data integrity guarantees

2. **"Multi-model enterprises want control, not just choice"**
   - Custom provider endpoints failing (PicoClaw #3199), per-session model presets (NanoBot #4555), per-agent env vars (ZeroClaw #8226), configurable approval-locked commands (Hermes Agent #5528)
   - **Implication**: The market is segmenting—enterprises need governance, not just API key flexibility

3. **"A2A collaboration is the next frontier"**
   - Native A2A peer delegation (NanoBot #4571), subagent depth guards, cron descendant fixes (LobsterAI #2234), work lanes RFC (ZeroClaw #6808)
   - **Implication**: Single-agent assistants are commoditizing; multi-agent orchestration is the differentiator for 2026-2027

4. **"Mobile/edge deployment is underserved"**
   - Prebuilt APK requests (OpenClaw #9443), NanoKVM support (PicoClaw #3195), Android/Termux build failure (NullClaw #868), Linux AppImage missing (CoPaw #5668)
   - **Implication**: Desktop/server-first projects will lose the mobile+edge wave; early movers (PicoClaw, OpenClaw iOS) will capture this segment

5. **"Token cost anxiety is intensifying"**
   - 73% fixed overhead analysis (Hermes Agent #4379), context reduction PR (NanoBot #4581), auto-summarize requests (Hermes Agent #55961), 10x slower than competitor (LobsterAI #2230)
   - **Implication**: API costs are the hidden barrier to adoption; projects providing cost-optimized architectures will win enterprise deployments

### Value for AI Agent Developers

These trends suggest **three strategic bets** for developers evaluating the ecosystem:

1. **Invest in multi-agent orchestration**—A2A, subagents, work lanes are where differentiation is happening
2. **Prioritize silent-failure elimination**—Users will forgive missing features but not data corruption
3. **Prepare for mobile/edge distribution**—The desktop-first model is hitting adoption ceiling; prebuilt binaries and low-resource configurations will unlock new user segments

The winning projects are those that **stabilize first** (resolve P0/P1 bugs) then **diversify** (mobile, A2A, cost optimization). OpenClaw has the community gravity to lead, but its regression velocity is a liability. CoPaw and NanoBot are best positioned for the next growth phase if they maintain their momentum while closing stability gaps.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project digest for **2026-07-01**.

---

## NanoBot Project Digest: 2026-07-01

### 1. Today's Overview
The NanoBot project is experiencing a period of extremely high activity, with **67 pull requests** and **12 issues** updated in the last 24 hours. This indicates a strong push from the core team and community contributors. While there were no new releases today, a significant volume of code is in the pipeline, with **35 PRs being merged or closed** and **5 new issues** opened. The project is clearly in an active development sprint, focusing on agent reliability, memory management, and channel-specific features.

### 2. Releases
**No new releases today.**

### 3. Project Progress
A substantial number of changes were merged or closed today. Key areas of progress include:

- **Core Reliability & Verification:** PR **#4534** (`feat(agent): improve reliability, verification, and exec services`) is a major work-in-progress aiming to add a general-purpose reliability layer, including Codex provider integration and verification feedback.
- **File-Edit Stability:** A critical bug was fixed in PR **#4595** (closed issue) and likely addressed by PR **#4609** (`fix(webui): keep idle compaction out of session recency`), which stops the WebUI from corrupting tool call IDs during streaming.
- **Configuration & Setup:** PR **#4573** (`fix(cli): allow oauth login to be/set main provider`) was merged, fixing a frustrating issue for new users who prefer OAuth login.
- **Windows Service Robustness:** Issue **#4513** (closed) identified a crash loop when using `nssm` with the `/restart` command. PR **#4547** (`fix(gateway): self-heal state file PID on server startup`) is in progress to address the root cause on Windows.
- **Feature Work:** Multiple features are advancing, including heartbeat model overrides (PR #4549), per-session model presets (PR #4555), and native WhatsApp activity cues (PR #4563).

### 4. Community Hot Topics
The following issues and PRs generated the most discussion (by comments):

- **[Issue #4418: Heartbeat tasks should deliver to the correct channel](https://github.com/HKUDS/nanobot/issues/4418)** (4 comments): This was a popular closed feature request. The underlying need is a desire for better task isolation and context-aware delivery, which is critical for multi-channel users. A related solution is being built in PR #4437 (`add heartbeat trigger command`).
- **[Issue #4604: Anthropic OAuth](https://github.com/HKUDS/nanobot/issues/4604)** (2 comments): A simple but clear request for supporting Anthropic's OAuth flow, suggesting a desire to move away from API key-based authentication for this provider.
- **[Issue #4603: Stop mutating `tool_call.id` for WebUI](https://github.com/HKUDS/nanobot/issues/4603)** (0 comments, but related to the high-traffic bug #4595): This is a proposed refactor that directly follows the critical bug fix in #4595, indicating the community is pushing for a more correct, long-term solution rather than just a patch.

### 5. Bugs & Stability
- **Critical Severity:**
    - **[Bug #4595: `apply_final_call_ids` overwrites correct tool_call ids](https://github.com/HKUDS/nanobot/issues/4595)**: This caused permanent session poisoning for all tool types after WebUI file edits. A fix was merged. (Status: **Closed**)
    - **[Bug #4611: DNS rebinding TOCTOU in SSRF validation](https://github.com/HKUDS/nanobot/issues/4611)**: A security vulnerability where the SSRF check (`validate_url_target`) is subject to a Time-of-Check Time-of-Use race condition, allowing an attacker to bypass private network checks. This is a high-severity security bug. (Status: **Open**, no fix PR yet)
- **High Severity:**
    - **[Bug #4513: /restart crash on Windows with nssm](https://github.com/HKUDS/nanobot/issues/4513)**: A crash loop specifically on Windows when using the `/restart` command while NanoBot is run as a system service. A fix is in progress (PR #4547). (Status: **Closed**)
    - **[Bug #4599: Install script crashes](https://github.com/HKUDS/nanobot/issues/4599)**: The default Linux install script crashes immediately upon entering the TUI. This blocks new user onboarding. (Status: **Closed**)

### 6. Feature Requests & Roadmap Signals
Several feature requests point toward the next release's themes:

- **Agent-to-Agent (A2A) Collaboration:** PR **#4571** (`feat(subagent): native A2A peer delegation with depth guard`) is a major feature that allows teams of agents to collaborate. This is likely a headline feature for the next minor version.
- **Per-Session Flexibility:** Multiple PRs focus on configuration flexibility per session or task, including per-session model presets (PR #4555), heartbeat model overrides (PR #4549), and isolated session configs (PR #4551). This suggests a roadmap focus on "context-aware agents."
- **External Integration & Webhook Triggers:** Issue **#4605** (`trigger an agent action from an external script`) and Issue **#4604** (`Anthropic OAuth`) show user demand for better programmatic control and authentication options.
- **Cost Optimization:** PR **#4581** (`optimization: reducing context usage`) directly addresses user pain points around API costs, a common theme in the requests.

### 7. User Feedback Summary
- **Pain Point (Setup):** The install script crash (Issue #4599) and frustrating OAuth setup flow (PR #4573) are creating friction for new users.
- **Use Case (Automation):** User "chengyongru" (Issues #4604, #4605) is a power user integrating NanoBot with external tools (Gmail) and wanting a webhook trigger, showing a desire to move beyond chat into automation.
- **Satisfaction (Codebase):** User "chengyongru" (Issue #4605) explicitly praised the lightweight codebase, stating it's "easy to read and understand the source." This is a strong signal of satisfaction with the project's architecture.
- **Dissatisfaction (Costs):** The context optimization PR (#4581) and the "reducing costs" title indicate users feel the current token consumption is a significant pain point.

### 8. Backlog Watch
- **[Issue #1023: Provider login tokens not persisted + config refresh drops unknown providers](https://github.com/HKUDS/nanobot/issues/1023)**: This has been open since February 2026 (over 4 months) with +2 upvotes. While the OAuth setup flow was fixed today, this deeper issue about token persistence remains unresolved and could cause significant problems for users relying on OAuth providers.
- **[Issue #4220: Add GitHub Copilot for Business / GitHub Enterprise support](https://github.com/HKUDS/nanobot/issues/4220)**: Open for over 3 weeks with no maintainer response. This blocks enterprise users who rely on GitHub Enterprise Server.
- **[Issue #4554: Fix(memory): block Dream from creating duplicate skills](https://github.com/HKUDS/nanobot/pull/4554)**: This PR is still open and has been idle for a few days. It addresses a core issue with the 'Dream' skill creation process, which could lead to user confusion and skill directory bloat. It requires review to prevent regressions in the self-improvement loop.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-01

## Today's Overview

Hermes Agent is exhibiting **very high activity**, with **50 issues and 50 PRs updated in the last 24 hours** — a notable surge driven largely by maintainers merging long-standing cleanup branches and addressing stability regressions. **30 new PRs were opened today** (mostly bug fixes) and **10 were merged/closed**, signaling a focused push to stabilize the codebase before the next release. **No new releases** were cut today; the last published version remains v0.14.0 (PyPI), though significant unreleased fixes are accumulating on `main`. Community engagement is robust, with several complex bug reports and feature requests attracting sustained discussion.

---

## Releases

**No new releases** were published today. Notable: Issues #33439 and #33932 document that **v0.14.0 (latest PyPI) is broken** against the current OpenAI Codex `/responses` endpoint (requires `stream: true`). A fix has landed on `main` but remains unreleased — users reliant on Codex must run from source.

---

## Project Progress

**10 PRs merged/closed today**, representing a major cleanup of long-stale branches and targeted stability fixes:

### Merged or Closed PRs

| PR | Title | Summary |
|----|-------|---------|
| [#55964](https://github.com/NousResearch/hermes-agent/pull/55964) | fix(cli): prevent process_loop freeze from MCP reload join and voice flag leak | Salvaged from stale #16931, fixes the "TUI input black hole" (#16803) where CLI renders but ignores input |
| [#55958](https://github.com/NousResearch/hermes-agent/pull/55958) | fix(anthropic+feishu): model-gate max_tokens fallback; wire Feishu channel_prompt | Two independent fixes from #12811, now merged |
| [#16931](https://github.com/NousResearch/hermes-agent/pull/16931) | fix: make process_loop never die | Long-standing fix for CLI daemon thread crashes causing unrecoverable freeze |
| [#12811](https://github.com/NousResearch/hermes-agent/pull/12811) | fix: Anthropic max_tokens + Feishu channel_prompt + Discord free_response | Multi-fix PR for Claude proxy fallback and platform adapters |
| [#17844](https://github.com/NousResearch/hermes-agent/pull/17844) | fix(config): preserve optional custom_providers fields on v11→v12 migration | Prevents data loss during config schema migration |
| [#55735](https://github.com/NousResearch/hermes-agent/pull/55735) | fix: Deprecated rcedit@5.0.2 in desktop devDependencies | 📦 Dependency cleanup |

**Key advancement:** The "background review hallucination" bug (#55647, closed today) — where the agent's self-improvement thread could overwrite skills it never read — was addressed, closing a subtle data corruption vector.

---

## Community Hot Topics

### Most Discussed Issues (by comment count)

1. **[#4379](https://github.com/NousResearch/hermes-agent/issues/4379) — Token overhead analysis: 73% fixed overhead** (17 comments, open since April)
   - A community member built a monitoring dashboard and found ~13.9K tokens in every API call is fixed overhead. This sparked a deep technical discussion about optimizing system prompts and context reuse — represents a strong latent demand for token cost optimization.

2. **[#33932](https://github.com/NousResearch/hermes-agent/issues/33932) — OpenAI Codex crashes with 'NoneType'** (12 comments, closed)  
   - Closed as duplicate of #33439, but garnered significant attention — Codex provider reliability is clearly a top user concern.

3. **[#38855](https://github.com/NousResearch/hermes-agent/issues/38855) — Desktop working directory not overriding stale localStorage** (10 comments, open)  
   - Deep UX issue: users who change their workspace CWD in settings still land in an old directory because the Electron renderer caches it. Frustration is high.

4. **[#33439](https://github.com/NousResearch/hermes-agent/issues/33439) — v0.14.0 broken on Codex, fix on main unreleased** (8 comments, closed, **6 👍**)  
   - **Highest-reacted issue.** Users are stuck on a broken release; urgency for a patch release is palpable.

5. **[#27430](https://github.com/NousResearch/hermes-agent/issues/27430) — `hermes update` fails with NODE_ENV=production** (7 comments, closed)  
   - Affects VPS/Docker deployments. Fixed, but users continue to encounter it due to missing patch release.

### Most Active PR (by reactions)

- **No PRs with significant reactions** today; the code flow is heavily maintainer-driven.

---

## Bugs & Stability

### Critical (P1)

| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#55925](https://github.com/NousResearch/hermes-agent/issues/55925) | Background review thread kills Telegram polling coroutine | **Under investigation**; self-healing PR #55921 merged, root cause analysis ongoing |
| [#55647](https://github.com/NousResearch/hermes-agent/issues/55647) | skill_manage patches hallucinate existing skill content (read-before-write violated) | **CLOSED** — fix merged |
| [#54919](https://github.com/NousResearch/hermes-agent/issues/54919) | `hermes` not launching on Windows: "uv trampoline failed" | **CLOSED** — platform-specific |
| [#33439](https://github.com/NousResearch/hermes-agent/issues/33439) | v0.14.0 Codex provider completely broken (stream:true required) | **Fix on `main`, unreleased** |

### High (P2)

| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#55815](https://github.com/NousResearch/hermes-agent/issues/55815) | Custom Cline provider incorrectly appends `/models` to Base URL | **OPEN**, no fix PR |
| [#55902](https://github.com/NousResearch/hermes-agent/issues/55902) | Kimi K2.5 provider: HTTP 400 due to `timestamp` field in messages | **OPEN**, no fix PR |
| [#55416](https://github.com/NousResearch/hermes-agent/issues/55416) | Photon iMessage: persistent RST_STREAM code 2 (gRPC stream dead) | **OPEN, needs repro** |
| [#55761](https://github.com/NousResearch/hermes-agent/issues/55761) | Telegram: duplicate identical messages on text-only turns | **OPEN, needs repro** |
| [#41517](https://github.com/NousResearch/hermes-agent/issues/41517) | Desktop chat worker loses selected profile, falls back to default | **OPEN** (updated today) |

### Medium (P3)

| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#55977](https://github.com/NousResearch/hermes-agent/pull/55977) | Windows: detached stdout raises OSError(22) instead of EPIPE | **PR open** — adds EINVAL to PEER_GONE_ERRNOS |
| [#55969](https://github.com/NousResearch/hermes-agent/pull/55969) | Windows: ACCESS_VIOLATION crash on concurrent delegate_task | **PR open** — censored cascade detection |
| [#55971](https://github.com/NousResearch/hermes-agent/pull/55971) | Telegram: buffered messages dispatch into torn-down sessions | **PR open** — cancel delayed deliveries on disconnect |
| [#55970](https://github.com/NousResearch/hermes-agent/pull/55970) | Dashboard: WebSocket Origin validation blocks reverse-proxy tunnels | **PR open** — allow X-Forwarded-Host |
| [#55972](https://github.com/NousResearch/hermes-agent/pull/55972) | Auxiliary client: credential rotation shadowed by stale shell export | **PR open** — .env-preferring lookup |

### New Bug Fix PRs Opened Today

- [#55976](https://github.com/NousResearch/hermes-agent/pull/55976) — Cron scheduler: guard against interpreter finalization during SIGTERM/shutdown
- [#55973](https://github.com/NousResearch/hermes-agent/pull/55973) — Cron: avoid scheduling work during shutdown
- [#55968](https://github.com/NousResearch/hermes-agent/pull/55968) — Desktop: preserve popped-out pet overlay on app quit

---

## Feature Requests & Roadmap Signals

### High-Potential Features (likely to ship in next version)

1. **[#55954](https://github.com/NousResearch/hermes-agent/pull/55954) — Hermes Console REPL** (PR open)  
   A safe, curated non-shell command engine plus `hermes console` REPL, with a dashboard WebSocket backing. This is **near-ready** and would dramatically improve safety for automation workflows.

2. **[#55961](https://github.com/NousResearch/hermes-agent/issues/55961) — Auto-summarize conversation history** (opened today, 1 comment)  
   Request to automatically condense long conversation history to reduce token consumption. Directly addresses the finding in #4379 (73% overhead). **Strong candidate** for v0.15.0.

3. **[#16004](https://github.com/NousResearch/hermes-agent/issues/16004) — Configurable bounded auto-continue** (4 comments, open since April)  
   When max tool-call iterations are exhausted, auto-continue instead of blocking. This would fix a major UX pain point for long-running autonomous sessions.

### Community-Driven Feature Requests

| Issue | Title | Signal |
|-------|-------|--------|
| [#5528](https://github.com/NousResearch/hermes-agent/issues/5528) | Configurable approval-locked command patterns | **11 👍** — highest-reacted open feature |
| [#16702](https://github.com/NousResearch/hermes-agent/issues/16702) | Auto-start dashboard with gateway systemd service | **9 👍** — strong demand for WSL/server deployments |
| [#10011](https://github.com/NousResearch/hermes-agent/issues/10011) | Auto-discover models from custom provider endpoints | **5 👍** — friction point for LiteLLM/new-api users |
| [#40347](https://github.com/NousResearch/hermes-agent/issues/40347) | Russian locale for Desktop app | 6 comments, installer provided by community member |
| [#523](https://github.com/NousResearch/hermes-agent/issues/523) | Local Model Setup Skill (Ollama, llama.cpp, vLLM) | **3 👍**, research-backed proposal |

### i18n Progress

PR [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) (multi-language i18n with 15 languages) remains **open** on `main`, synced post-v0.16.0. This is a large, community-contributed feature that could land in a future release.

---

## User Feedback Summary

### Pain Points (vocal dissatisfaction)

1. **Broken Codex release v0.14.0** — multiple duplicate issues, users stuck, fix unreleased. Strongest negative signal.
2. **Desktop working directory persistence** — GUI setting has no effect due to stale Electron localStorage (#38855).
3. **TUI input black hole** — CLI freezes unrecoverably, user must `kill -9`. Fixes being merged today (#55964).
4. **Profiles not respected in Desktop** — chat worker starts in wrong profile (#41517).
5. **Token cost anxiety** — detailed analysis (#4379) shows 73% overhead; users are actively optimizing and sharing tools.

### Positive Signals

- Community members are building and sharing complementary tooling (monitoring dashboards, locale installers, PR contributions).
- Complex multi-platform bugs (Discord, Feishu, Signal, Telegram) are being actively fixed, not ignored.
- The "bg-review hallucination" bug (#55647) was found and closed in under 24 hours — fast response.

---

## Backlog Watch

### Issues & PRs Needing Maintainer Attention

| Item | Age | Reason for Attention |
|------|-----|----------------------|
| [#4379](https://github.com/NousResearch/hermes-agent/issues/4379) — Token overhead analysis | **3 months** (since April 1) | Highest-value performance data; maintainers have not acknowledged or responded. 17 comments from community |
| [#523](https://github.com/NousResearch/hermes-agent/issues/523) — Local Model Setup Skill | **4 months** (since March 6) | Well-researched feature request with model recommendations; no maintainer response |
| [#5528](https://github.com/NousResearch/hermes-agent/issues/5528) — Configurable approval-locked commands | **3 months** (since April 6) | **11 👍**, oldest high-reacted feature; no assignee, no milestone |
| [#16702](https://github.com/NousResearch/hermes-agent/issues/16702) — Auto-start dashboard with systemd | **2 months** (since April 27) | **9 👍**, no maintainer engagement |
| [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) — Multi-language i18n (15 languages) | **27 days** (since June 4) | Large community PR; maintainers synced once but haven't moved toward merge |
| [#55815](https://github.com/NousResearch/hermes-agent/issues/55815) — Cline provider URL mangling | **1 day** (opened today) | New bug, no response yet — affects custom provider users |

### Risk: Unreleased Critical Fix

Issue [#33439](https://github.com/NousResearch/hermes-agent/issues/33439) (Codex broken in v0.14.0) and its PR fix are merged on `main` but **no patch release has been cut**. This is the single highest-impact gap between `main` and PyPI, affecting all Codex users.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-01

**Generator:** AI Agent & Personal AI Assistant Analyst  
**Data Source:** github.com/sipeed/picoclaw

---

## Today's Overview

PicoClaw shows **moderate activity**, with 6 issues updated and 7 pull requests touched in the last 24 hours. The project shipped a **new nightly build (v0.3.1-nightly.20260630)**, signaling ongoing development toward the next stable release. However, issue parity remains positive: 5 open issues and 4 open PRs indicate a manageable backlog. A notable **cluster of bugs** emerged around custom/local provider connections, OAuth login failures, and NanoKVM integration — all reported on the same day — suggesting increased adoption on edge hardware. The community continues to contribute both feature work (Android ADB tool, Delta Chat gateway) and stability patches (SSRF fixes, error messaging improvements).

---

## Releases

**New:** `v0.3.1-nightly.20260630.52320f48` — Nightly Build  
- Status: **unstable automated build** — use with caution  
- Full changelog: [compare/v0.3.1...main](https://github.com/sipeed/picoclaw/compare/v0.3.1...main)  
- **No breaking changes** or migration notes documented in this nightly; changes are incremental against v0.3.1.  

**No stable release was cut today.** The last stable version remains **v0.2.9** (referenced in multiple bug reports).

---

## Project Progress

**Merged/Closed PRs today (3):**

| PR | Title | Outcome |
|----|-------|---------|
| [#3198](https://github.com/sipeed/picoclaw/pull/3198) | fix(providers): surface friendly auth error messages ✅ | **Merged** — improves API key/token error clarity |
| [#3143](https://github.com/sipeed/picoclaw/pull/3143) | fix(web): block private IPv4 embeds in ISATAP literals ✅ | **Merged** — closes SSRF bypass (issue #3074) |
| [#3131](https://github.com/sipeed/picoclaw/pull/3131) | fix(registry): add ok checks for tool schema type assertions ✅ | **Merged** — hardening tool registry against malformed schemas |

**Key feature advances:**  
- Provider authentication errors now show **human-readable messages** instead of raw HTTP codes (PR #3198) — directly impacts user experience.  
- Web fetch SSRF guard **closes a known bypass** using ISATAP IPv6 literals (PR #3143) — important security fix.  
- Tool registry gains **type assertion safety checks** (PR #3131) — prevents potential crashes in tool schema parsing.  

**Stale-but-active PRs still open:**  
- [#3157](https://github.com/sipeed/picoclaw/pull/3157) — Android ADB remote operations tool (last updated today but created 9 days ago)  
- [#3063](https://github.com/sipeed/picoclaw/pull/3063) — Delta Chat gateway (22 days old, no maintainer response visible)  
- [#3118](https://github.com/sipeed/picoclaw/pull/3118) — Remote WebSocket mode for agent (19 days old)  
- [#3115](https://github.com/sipeed/picoclaw/pull/3115) — Fix inline data URL media extraction (19 days old)

---

## Community Hot Topics

### Most Active Issue
**#3153 — [BUG] Volcengine Doubao Seed tool calls leak as `<seed:tool_call>` text**  
- 2 comments, created 8 days ago, still open  
- Link: [Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)  
- **Analysis:** This is a **provider-specific parsing bug** where tool call responses from Volcengine's `doubao-seed-2.0-pro` model are not being intercepted/detected properly. Instead of executing the tool, the raw XML tag bleeds into conversation output. Users relying on this model for coding plans cannot use tool execution. **No fix PR exists yet** — likely needs model-specific response format detection.

### Most Active PR (by comments)
None of today's PRs have visible comment counts. However **#3157** (Android ADB tool) and **#3063** (Delta Chat gateway) have remained open for 9–22 days without maintainer engagement, suggesting community interest may outpace maintainer bandwidth.

### Underlying Needs
1. **Provider-specific tool call format handling** — The Doubao bug (#3153) and the custom local endpoint bug (#3199) both point to insufficiently flexible provider adapter logic. Users want to plug in any OpenAI-compatible API without surprises.  
2. **Edge device support** — The NanoKVM issue (#3195) and the burst of issues from new users suggest growing adoption on constrained hardware. The community needs better default configs and error messages for low-resource environments.

---

## Bugs & Stability

### High Severity

| Issue | Severity | Description | Has Fix PR? |
|-------|----------|-------------|-------------|
| [#3153](https://github.com/sipeed/picoclaw/issues/3153) | **High** | Tool calls return as raw text instead of executing — breaks code planning workflows | ❌ |
| [#3199](https://github.com/sipeed/picoclaw/issues/3199) | **High** | Custom local OpenAI endpoint (127.0.0.1) fails to connect entirely | ❌ (Closed w/o resolution) |
| [#3195](https://github.com/sipeed/picoclaw/issues/3195) | **High** | GPT-5.4 on NanoKVM returns silent failures with default config | ❌ |
| [#3159](https://github.com/sipeed/picoclaw/issues/3159) | **Medium** | Task duplication — AI re-executes previous requests (e.g., re-runs "US news" when asked for "France news") | ❌ |

### Medium Severity

| Issue | Severity | Description | Has Fix PR? |
|-------|----------|-------------|-------------|
| [#3197](https://github.com/sipeed/picoclaw/issues/3197) | **Medium** | Codex & Antygravity OAuth login broken in v0.2.9 | ❌ |
| [#3196](https://github.com/sipeed/picoclaw/issues/3196) | **Medium** | Duplicate of #3197 (same author, same title) | ❌ |

### Positive Signal
- **#3198 was merged** — improves auth error messages, which indirectly helps users diagnose issues like #3199 and #3195 faster.  
- **#3143 was merged** — SSRF security fix for web_fetch tool.

### Regression Risk
Issue #3199 was **closed without resolution** (0 comments, author report only). The custom local endpoint bug appears to be a PicoClaw-side limitation, but the issue is closed — suggesting either a configuration error or an undocumented constraint. Users with local Ollama/vLLM instances may hit this.

---

## Feature Requests & Roadmap Signals

### Emerging Feature Demand
1. **Android ADB tool** ([PR #3157](https://github.com/sipeed/picoclaw/pull/3157)) — 9 days open, experimental but complete. Likely to land in next minor release if reviewed.  
2. **Delta Chat gateway** ([PR #3063](https://github.com/sipeed/picoclaw/pull/3063)) — 22 days open. Represents peer-to-peer messaging integration. Visionary but stalled.  
3. **Remote WebSocket agent mode** ([PR #3118](https://github.com/sipeed/picoclaw/pull/3118)) — enables running PicoClaw agent headless over WebSocket. Useful for IoT/edge scenarios.  
4. **Better local endpoint support** — Multiple bug reports (#3199, #3195) implicitly request better handling of `http://127.0.0.1` and local-only environments.

### Prediction for Next Version (v0.3.x)
Likely inclusions:
- Fix for Volcengine Doubao tool call parsing (#3153) — high-impact bug
- Merge of ADB tool (#3157) — relatively simple, community contributed
- Merge of remote agent mode (#3118) — if maintainer reviews soon
- General provider auth/connection hardening (leveraging #3198 pattern)

---

## User Feedback Summary

### Pain Points
1. **"Silent failures on local/edge setups"** — #3195 (NanoKVM), #3199 (custom endpoint) both describe cases where PicoClaw returns errors or hangs without useful diagnostics. Even though #3198 improves auth errors, broader connectivity debugging is needed.  
2. **"Models behave differently than advertised"** — #3153 shows a provider-specific tool call issue that makes a supported model non-functional for tool use. Users feel misled when advertised providers don't work.  
3. **"Task hallucination/task duplication"** — #3159 (Chinese-language report) describes the AI re-doing prior tasks. This is a deep prompt/context management issue that frustrates multi-step workflows.  
4. **"OAuth logins break after update"** — #3197/#3196 indicate Codex and Antygravity integrations are broken in v0.2.9. Social/saas features are important to this user base.

### Satisfaction Signals
- No positive feedback issues/comments were found in the recent data.  
- The PR #3198 (friendly auth errors) suggests the team is **responsive to user frustration** — the merged fix directly addresses a common user complaint.

### Use Cases Emerging
- **Edge AI (NanoKVM, local endpoints)** — users deploying on low-power hardware  
- **Multi-model coding assistants** — Volcengine Doubao, GPT-5.4, DeepSeek v4  
- **Mobile/remote control** — ADB tool PR, WebSocket agent mode  

---

## Backlog Watch

### Stale Issues Needing Maintainer Attention

| Issue | Age | Why It Matters |
|-------|-----|----------------|
| [#3153](https://github.com/sipeed/picoclaw/issues/3153) | 8 days | **High severity** tool call bug with Volcengine — affects a supported provider |
| [#3159](https://github.com/sipeed/picoclaw/issues/3159) | 7 days | **Medium severity** task duplication — undermines multi-step reliability |
| [#3199](https://github.com/sipeed/picoclaw/issues/3199) | <1 day | **Closed without resolution** — custom local endpoint failure may affect many users |
| [#3195](https://github.com/sipeed/picoclaw/issues/3195) | <1 day | **NanoKVM integration** — new feature area, first bugs deserve quick response |

### Stale PRs Needing Maintainer Engagement

| PR | Age | Status |
|----|-----|--------|
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) | 22 days | Delta Chat gateway — no maintainer comments |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | 19 days | Remote WebSocket agent mode — no maintainer comments |
| [#3115](https://github.com/sipeed/picoclaw/pull/3115) | 19 days | Media extraction fix — no maintainer comments |
| [#3157](https://github.com/sipeed/picoclaw/pull/3157) | 9 days | Android ADB tool — no maintainer comments |

**Risk:** Four community-contributed PRs (3 features, 1 fix) have been open for **9–22 days without any maintainer response**. This risks contributor burnout and slows community momentum. The ADB tool (#3157) is the most likely candidate for fast-track review as it's a clean, experimental feature.

---

**Summary:** PicoClaw is shipping nightlies and merging important fixes, but faces a growing backlog of community contributions and a cluster of high-severity bugs from new edge/self-hosted use cases. Maintainer responsiveness to stale PRs will be critical to sustaining contribution velocity.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-01

## 1. Today's Overview
The NanoClaw project is in a **high-activity maintenance and feature-rollout phase**, with 14 pull requests updated in the last 24 hours (10 merged/closed) and 3 active issues. The project shows strong contributor momentum, with major fixes for security vulnerabilities (symlink escape), critical channel adapter improvements (WhatsApp media recovery, Discord attachment handling), and new native integrations (Matrix E2EE, WeChat adapter). No new releases were cut today, but the PR pipeline suggests a release candidate is being assembled. Overall project health is good, with security issues being addressed promptly and community feature requests receiving active attention.

## 2. Releases
**No new releases** were published as of 2026-07-01. The latest release remains the previous version. Given the volume of merged PRs (10), a patch or minor release is likely imminent.

## 3. Project Progress
**10 PRs merged/closed today**, covering significant feature work and bug fixes:

### Security Fixes
- **[PR #2880](https://github.com/nanocoai/nanoclaw/pull/2880) [CLOSED]** — *fix(security): contain inbox symlink escapes in attachment writes* — Fixes the critical CWE-59 symlink-follow vulnerability (Issue #2828) by closing both inbound file-write paths and adding `fs.realpathSync` checks before writes.

### Channel Adapter Enhancements
- **[PR #2884](https://github.com/nanocoai/nanoclaw/pull/2884) [CLOSED]** — *feat(discord): add Discord channel adapter + fix Gateway approval-button routing* — New Discord adapter via Chat SDK bridge, plus fix for DM-context approval button routing.
- **[PR #2889](https://github.com/nanocoai/nanoclaw/pull/2889) [CLOSED]** — *feat: daily-news-agent for Andy group + WeChat channel* — New agent template and WeChat adapter with setup script.
- **[PR #2891](https://github.com/nanocoai/nanoclaw/pull/2891) [CLOSED]** — *feat(channels): add optional resolveChannelName to ChannelAdapter interface* — Enables Slack and Telegram to resolve channel names, unblocking cross-channel routing.
- **[PR #2895](https://github.com/nanocoai/nanoclaw/pull/2895) [CLOSED]** — *fix(whatsapp): recover inbound media download via reuploadRequest* — WhatsApp media downloads no longer silently fail; adds `reuploadRequest` recovery and visible failure notes.

### Infrastructure & Developer Experience
- **[PR #2893](https://github.com/nanocoai/nanoclaw/pull/2893) [CLOSED]** — *feat(render): host-mediated document rendering via ephemeral container* — New `render_document` MCP tool with network-isolated container execution for Quarto/LaTeX/Chromium.
- **[PR #2875](https://github.com/nanocoai/nanoclaw/pull/2875) [CLOSED]** — *Deploy/coolify* — Operational container skill for Coolify deployment.
- **[PR #2874](https://github.com/nanocoai/nanoclaw/pull/2874) [CLOSED]** — *fix(signal): survive signal-cli boot flaps instead of crash-looping* — Signal adapter stability fix.
- **[PR #2885](https://github.com/nanocoai/nanoclaw/pull/2885) [CLOSED]** — *fix(setup): offer Slack Socket Mode in the guided setup flow* — Brings Slack Socket Mode setup into `main` branch.
- **[PR #2018](https://github.com/nanocoai/nanoclaw/pull/2018) [CLOSED]** — *fix(channels): resolve clicker user from interaction.user in DM-context approvals* — Fixes Discord DM approval flow.

## 4. Community Hot Topics

### Most Active Discussions

1. **[Issue #2828](https://github.com/nanocoai/nanoclaw/issues/2828) [CLOSED]** — *[Security] NanoClaw A2A attachment forwarding follows a symlinked inbox and writes outside the target session root* — **2 reactions**. This security advisory drew high attention due to severity (arbitrary host file write). Already fixed in PR #2880. The community responded positively to the rapid response.

2. **[Issue #2888](https://github.com/nanocoai/nanoclaw/issues/2888) [OPEN]** — *Discord (and likely other url-only chat-sdk adapters) drop image/file attachments* — **1 comment**. User reports agents receive only metadata, never content. This affects Discord users heavily and stems from `messageToInbound` only downloading bytes. Likely to be prioritized next given community reliance on Discord.

3. **[Issue #2894](https://github.com/nanocoai/nanoclaw/issues/2894) [OPEN]** — *WhatsApp adapter: inbound media silently dropped when direct CDN fetch fails* — Raised by same author as the fix PR #2895 (merged today). The community pain point was silent data loss; the fix now surfaces visible failure notes.

### Underlying Needs
Users are increasingly **demanding reliable cross-platform media handling** (Discord, WhatsApp, Signal, Telegram). The clustering of issues around attachment/media processing indicates this is the single biggest pain point for production deployments. The need for **explicit error messaging** (vs silent failures) is a recurring theme.

## 5. Bugs & Stability
Ranked by severity:

| Severity | Issue | Fix Status | Summary |
|----------|-------|------------|---------|
| **Critical** | [#2888](https://github.com/nanocoai/nanoclaw/issues/2888) — Discord attachments dropped | No fix PR yet | Users see only `{type, name, mimeType, size}` — content never arrives |
| **High** | [#2894](https://github.com/nanocoai/nanoclaw/issues/2894) — WhatsApp media silently dropped | **Fixed in PR #2895** (merged today) | CDN fetch failures swallowed; now reuploadRequest recovery added |
| **Medium** | [#2896](https://github.com/nanocoai/nanoclaw/pull/2896) [OPEN] — Regression on approval-answer path | Fix PR open for review | `appendMediaFailureNote` applied before slash-command handler, breaking approval flow |

**Stability notes**: The Signal adapter (PR #2874) now survives boot flaps instead of crash-looping. The Slack Socket Mode setup is now properly merged into main (PR #2885), reducing configuration friction.

## 6. Feature Requests & Roadmap Signals

### Active Feature Development (open PRs)
- **[PR #2844](https://github.com/nanocoai/nanoclaw/pull/2844) [OPEN]** — *feat(matrix): native persistent E2EE adapter via matrix-bot-sdk* — Replaces Chat SDK bridge with native Rust-crypto-backed Matrix adapter. This is a significant architectural investment suggesting the team views Matrix as a strategic channel.
- **[PR #2892](https://github.com/nanocoai/nanoclaw/pull/2892) [OPEN]** — *fix(telegram): enable thread support* — Simple flag flip, likely to merge quickly.
- **[PR #2890](https://github.com/nanocoai/nanoclaw/pull/2890) [OPEN]** — *feat(templates): agent template loader, setup flow, and docs* — Template system for reusable agent configurations, with public library and git repo support. This could streamline onboarding significantly.

### Predicted Next Version Features
The next release will likely include:
- Native Matrix E2EE support (PR #2844)
- Agent template system (PR #2890)
- Thread support for Telegram
- Discord adapter (from channels branch)
- Document rendering via ephemeral containers (PR #2893)

### Long-term Signal
The daily-news-agent (PR #2889) and WeChat adapter suggest **growing demand for content curation and Chinese-market channels**. The template system hints at a future **agent marketplace/registry**.

## 7. User Feedback Summary

### Pain Points
- **Media handling inconsistency**: "Telegram works fine" but Discord/WhatsApp drop content — users expect uniform behavior across channels
- **Silent failures**: Multiple issues report that errors are swallowed (WhatsApp CDN failures, Discord metadata-only) — users want explicit error messages
- **Setup friction**: Slack Socket Mode was split across branches, confusing users who "followed the docs" (PR #2885 rationale)

### Use Cases
- **Production deployments**: Multiple issues from enterprise users (eagansilverpathmarketing, YLChen-007) indicate production use in marketing, customer support contexts
- **Multi-channel content sharing**: Users share images/screenshots across Discord, Telegram, WhatsApp — need consistent attachment pipeline
- **Security-conscious deployments**: The symlink advisory shows users running agents in containerized, security-sensitive environments

### Satisfaction
- Positive response to rapid security fix (Issue #2828 → PR #2880 merged within ~9 days)
- Community contributors actively fixing their own reported issues (echarrod reporting and immediately submitting fix for WhatsApp)

## 8. Backlog Watch

### Items Needing Maintainer Attention

| Issue/PR | Days Open | Priority | Reason for Attention |
|----------|-----------|----------|---------------------|
| **[PR #2844](https://github.com/nanocoai/nanoclaw/pull/2844)** | 7 days | **High** | Major Matrix integration — complex review needed (Rust crypto bindings, E2EE persistence). Uncommented for 7 days despite being large architectural change. |
| **[Issue #2888](https://github.com/nanocoai/nanoclaw/issues/2888)** | 1 day | **High** | Discord attachment drop is a critical UX bug. Needs maintainer to confirm root cause and assign fix. |
| **[PR #2896](https://github.com/nanocoai/nanoclaw/pull/2896)** | 1 day | **Medium** | Regression fix on WhatsApp — ready for review as follow-up to merged PR #2895. |
| **[PR #2892](https://github.com/nanocoai/nanoclaw/pull/2892)** | 1 day | **Low** | Simple Telegram thread flag — trivial merge candidate. |

### No Stale Critical Issues
The maintainers appear responsive (10 PRs merged in 24h), and the oldest open issue is from June 24. No issue exceeds 14 days without response, indicating healthy project maintenance hygiene.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-01

## 1. Today's Overview
NullClaw shows moderate activity today with 4 pull requests merged and 2 open issues updated. All 4 PRs were merged on 2026-06-30, representing a batch closure of fixes and features submitted over the past months. No new releases were published. Both open issues are bugs, with one affecting Android/Termux users and the other concerning Telegram channel stability after idle periods. The project appears to be in a steady maintenance phase with thoughtful improvements to scheduling, provider integrations, and CLI usability.

## 2. Releases
No new releases were published today. The latest available version remains **v2026.4.17** (referenced in Issue #868).

## 3. Project Progress
Four pull requests were merged on 2026-06-30, all authored by **yanggf8**:

- **[PR #641 — fix(providers): fix GLM/ZhipuAI thinking mode and native tool_calls](https://github.com/nullclaw/nullclaw/pull/641)** — Resolves response loops caused by always-on thinking mode for GLM/ZhipuAI providers. Also fixes native tool_call support, improving reliability for users of Chinese AI model providers.

- **[PR #643 — fix(cron): allow agent jobs to omit command field in cron.json](https://github.com/nullclaw/nullclaw/pull/643)** — Agent cron jobs previously required a redundant `command` field; jobs with `"command": null` were silently skipped on gateway restart. Now optional, preventing data loss after restarts.

- **[PR #645 — fix(cron): add --account flag to cron add-agent CLI](https://github.com/nullclaw/nullclaw/pull/645)** — Adds `--account` flag to `cron add-agent` so users can specify delivery accounts (e.g., Telegram bot identity) directly from CLI instead of manually editing `cron.json`.

- **[PR #783 — feat(cron): cron subagent, run history, JSON output, security hardening](https://github.com/nullclaw/nullclaw/pull/783)** — Major cron subsystem enhancement: DB-backed scheduler with run history, atomic job ticketing, support for skill/agent/shell job types, per-job timezone offsets, delivery routing, operator alerts, and JSON CLI output for automation.

## 4. Community Hot Topics
Activity is concentrated on two open bugs:

- **Issue #868 — [bug] zig build fails on Android/Termux** — This issue has been open since April 23, 2026, and has 5 comments. The user reports a linker permission error on aarch64 Android/Termux when building from source. This represents a significant blocker for Android users who want to compile NullClaw natively. No fix PR has been linked.

- **Issue #972 — [bug] telegram channel stops responding after idle** — Filed on 2026-06-30, this issue reports that Telegram channel functionality dies after several hours of inactivity, even though the backend agent continues running normally (confirmed by user logs showing successful `ping` responses). This is a fresh bug with high practical impact for users relying on Telegram as their primary interface.

## 5. Bugs & Stability

| Severity | Issue | Description | Status |
|----------|-------|-------------|--------|
| **High** | [#972 — Telegram idle death](https://github.com/nullclaw/nullclaw/issues/972) | Telegram channel stops responding after ~8+ hours idle; backend remains alive | No fix PR |
| **High** | [#868 — Android/Termux build failure](https://github.com/nullclaw/nullclaw/issues/868) | `zig build` fails with `AccessDenied` on `linkat` for aarch64; blocks all Android compilation | No fix PR; open 69 days |

Both bugs are open and unaddressed by PRs. The Telegram idle issue is particularly concerning for users running 24/7 chatbots. The Android build issue has been stale for over two months with no maintainer response — this may indicate limited testing on mobile platforms.

## 6. Feature Requests & Roadmap Signals
The merged PRs today signal active investment in the **cron/scheduling subsystem**:
- DB-backed job history and atomic scheduling (PR #783) suggest moves toward enterprise-grade reliability
- Per-job timezone support and delivery routing indicate multi-user/multi-account scenarios
- JSON CLI output hints at programmatic/automation use cases

No new feature requests were filed today. The cron enhancements merged today likely address previously unvoiced needs for persistent job tracking and better CLI tooling.

## 7. User Feedback Summary
- **Telegram channel users** are experiencing reliability issues — the channel goes silent after overnight idle, which undermines the primary user interface for many deployments
- **Android/Termux users** (typically mobile developers or privacy-conscious users) cannot compile the project from source, limiting the platform's reach
- **Cron users** benefit from three merged fixes: no more lost agent jobs after restart (PR #643), easier delivery account setup (PR #645), and a more robust scheduling engine (PR #783)
- **GLM/ZhipuAI users** get improved reliability with thinking mode and tool_call fixes (PR #641)

## 8. Backlog Watch
- **[Issue #868 — Android/Termux build failure](https://github.com/nullclaw/nullclaw/issues/868)** — **Critical backlog item**: Open since April 23, 2026 (69 days), with 5 comments and no maintainer response. This is the longest-unaddressed open issue affecting a specific user base. The problem appears related to filesystem permissions on Termux's FUSE-based file system during Zig's linker phase. A workaround or fix would significantly improve platform inclusivity.

- **PRs #641, #643, #645, #783** — All merged after 3+ months open. While these were eventually resolved, the long review/merge cycle (March → June) suggests maintainer bandwidth may be constrained or PRs require multiple review rounds.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the IronClaw project digest for July 1, 2026.

---

## IronClaw Project Digest — 2026-07-01

### 1. Today's Overview
The project is in a high-activity state, driven by a major bug-bashing session and the tail end of the "Reborn" backend rewrite. Maintainers merged 25 pull requests while keeping another 25 open, reflecting a strong push toward stability. However, zero new releases were cut, suggesting the team is still consolidating critical fixes before a new tag. The top priority is clearly addressing concurrency regressions (lock convoys, CAS serialization) and quality assurance issues surfaced by the QA team.

### 2. Releases
**No new releases were published today.** The last publicly available release remains the `ibsql-prod` commit referenced in several open QA issues.

### 3. Project Progress
The team merged 25 PRs today, with the following highlights across stability, performance, and infrastructure:

- **Concurrency & Stability:**
    - **PR #5234 (CLOSED):** Removed per-record lock convoys by introducing a shared `cas_update` helper, fixing the root cause of a runtime wedge from June 24.
    - **PR #5465 (CLOSED):** Collapsed the group integration-test harness to a single runtime with a scope-routed gateway, reducing flakiness under CPU contention.
- **Storage & Performance:**
    - **PR #5455 (CLOSED):** Added a row-native sequence primitive (`reserve_sequence`) and reworked thread/turn storage to use it, improving streaming write efficiency. Includes a database migration.
- **UX & Fixes:**
    - **PR #5463 (CLOSED):** Removed the chat-triggered Slack connection flow from the new WebUI.
- **Infrastructure (CI & Dependencies):**
    - **PR #5430 & #5432 (OPEN):** Added integration-tier coverage jobs and fixed discovery of subdirectory test binaries.
    - **PR #5475 (OPEN):** Replaced the unmaintained `serde_yml` crate with `serde_norway` to resolve security alerts.

### 4. Community Hot Topics
The most active items are internal engineering issues rather than external feature discussion.

- **PR #5280 (OPEN, XL size):** *Trace Commons: instance-wide enrollment, per-user profiles, and trace inspection.* This large, long-running PR (open since June 26) is a major feature addition for trace debugging and is the most commented PR. It signals a heavy investment in observability.
    - [Issue #5280](https://github.com/nearai/ironclaw/pull/5280)
- **PR #5441 (OPEN, XL size):** *Add header notifications for automation approvals.* This user-facing UI feature for the Reborn WebUI has high engagement. It directly addresses a common user pain point (visibility of automation results).
    - [PR #5441](https://github.com/nearai/ironclaw/pull/5441)
- **Issue #5437 (OPEN):** *Daily ironclaw failure taxonomy — 2026-06-30.* This meta-issue aggregates a failing benchmark run, explicitly tracking model gateway failures and high concurrency test flakiness, showing a proactive approach to stability.
    - [Issue #5437](https://github.com/nearai/ironclaw/issues/5437)

### 5. Bugs & Stability
Today saw several critical bugs and regressions reported, likely stemming from the rapid development of the "Reborn" backend.

- **Critical (P1):**
    - **Routine Run Lease Expiration (Issue #5456):** Routine runs fail because a 90-second inactivity timeout is too short for multi-tool workflows. **No fix PR linked.**
        - [Issue #5456](https://github.com/nearai/ironclaw/issues/5456)
- **High (P2):**
    - **Logs Page Empty (Issue #5457):** The new logs page never loads entries, blocking developer debugging. **No fix PR linked.**
        - [Issue #5457](https://github.com/nearai/ironclaw/issues/5457)
    - **Double Header on Logs Page (Issue #5458):** A rendering regression in the new WebUI. **No fix PR linked.**
        - [Issue #5458](https://github.com/nearai/ironclaw/issues/5458)
    - **Routine Delivery is Global (Issue #5420):** Setting a delivery target for one routine overrides all others for that user. **No fix PR linked.**
        - [Issue #5420](https://github.com/nearai/ironclaw/issues/5420)
- **Medium:**
    - **Per-Key Mutex Violates New Guardrail (Issue #5468):** Older storage stores still use the pattern that caused the June 24 runtime wedge. **Identified in PR #5234 review.**
    - **Parallel Turn-Run Failure (Issue #5466):** Two concurrent turn-runs against a shared store have a ~10% failure rate. **No fix PR linked, but a test for it was added in PR #5465.**

### 6. Feature Requests & Roadmap Signals
The roadmap is heavily focused on the "Reborn" backend's **Tier-0 completion** and new infrastructure.

- **Configurable Skills & Tools (Issue #5459):** A formal request for admin/user role-based management of WASM tools and skills, indicating a need for granular access control.
    - [Issue #5459](https://github.com/nearai/ironclaw/issues/5459)
- **Automation Notifications (PR #5441 & Issue #5443):** The push for header notifications for automation results is strong and likely to land in the next release.
- **Trace Commons (PR #5280):** This large feature suggests per-instance and per-user trace inspection will be a cornerstone of the next major release.
- **Live Latency Traces (PR #5472):** Instrumentation for troubleshooting request stalls is being built, hinting at ongoing performance investigation.

### 7. User Feedback Summary
User pain points, captured via QA, are concentrated on reliability and visibility:

- **Frustration:** Routine automations are unreliable due to lease expirations (Issue #5456), making multi-tool workflows unviable.
- **Confusion:** The Logs page failing to load (Issue #5457) removes users' ability to self-diagnose failures.
- **Data Leakage Concern:** A privacy issue where workspace memories are visible to all users (Issue #5460) is a significant trust concern.
- **Lack of Control:** Users want the ability to fine-tune which tools/skills are available and to whom (Issue #5459).

### 8. Backlog Watch
One long-standing issue remains open without resolution.

- **Issue #4108 (OPEN, since May 27):** *Nightly E2E failed.* This recurring CI failure has gone unresolved for over a month. While it was updated today, the lack of a linked fix or root cause analysis is a risk for the release pipeline.
    - [Issue #4108](https://github.com/nearai/ironclaw/issues/4108)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for July 1, 2026.

---

# LobsterAI Project Digest – 2026-07-01

## 1. Today's Overview
The project is in a **high-velocity release cycle**, with 14 pull requests merged in the last 24 hours and a new patch release (2026.6.30) shipped. Activity is heavily concentrated on the **Cowork** and **OpenClaw** subsystems, with the team executing a series of targeted fixes, reverting an accidental merge, and re-applying the correct changes to the release branch. While merge activity is intense, the open issue backlog contains 6 stale items that have received no maintainer response in nearly three months, indicating a potential risk of unresolved user friction. One new, critical performance bug was reported today, which will require immediate attention.

## 2. Releases
- **Version:** LobsterAI 2026.6.30 (Released 2026-06-30)
- **Key Changes:**
    - Added diagnostics logging for Cowork and OpenClaw flows to improve production troubleshooting ([PR #2229](https://github.com/netease-youdao/LobsterAI/pull/2229))
    - Fixed OpenClaw fallback catalog max token limits for native Anthropic-format providers ([PR #2232](https://github.com/netease-youdao/LobsterAI/pull/2232))
    - Fixed scheduled task gateway initialization to prevent false "empty" run history on startup ([PR #2231](https://github.com/netease-youdao/LobsterAI/pull/2231))
    - Added unified Youdao Analyzer usage reporting across all major features (agents, artifacts, skills, MCP, IM, scheduled tasks)
- **Migration Notes:** No breaking changes or migration steps noted. Users should update to resolve the scheduled task startup issue.

## 3. Project Progress
The following major areas advanced via merged PRs in the last 24 hours:

- **Cowork UI & Stability:** 8 merged PRs focused on the conversation rail navigation, including cleaning tooltip previews, fixing lazy navigation, and preventing toolbar overlap when resizing artifacts ([PR #2235](https://github.com/netease-youdao/LobsterAI/pull/2235), [PR #2218](https://github.com/netease-youdao/LobsterAI/pull/2218), [PR #2222](https://github.com/netease-youdao/LobsterAI/pull/2222)). A revert/re-apply cycle was completed cleanly on the release branch.
- **OpenClaw (AI Agent Engine):** Fixed a critical bug where descendant agents failed to drive parent agent execution in `cron` and parallel agent scenarios ([PR #2234](https://github.com/netease-youdao/LobsterAI/pull/2234) - still open). A separate fix ensures the built-in `maxTokens` fallback works when the provider catalog is unreadable ([PR #2232](https://github.com/netease-youdao/LobsterAI/pull/2232)).
- **Analytics & Telemetry:** Removed prompt intent fields (type, subtype, keyword) from analytics events to avoid sending inferred user semantics ([PR #2233](https://github.com/netease-youdao/LobsterAI/pull/2233)). Added comprehensive diagnostics logging for Cowork and OpenClaw ([PR #2229](https://github.com/netease-youdao/LobsterAI/pull/2229)).
- **Scheduled Tasks:** Restored gateway-backed run history, ensuring task lists no longer appear empty after a fresh start ([PR #2231](https://github.com/netease-youdao/LobsterAI/pull/2231)).

## 4. Community Hot Topics
- **#1382 - [SUGGESTION] Red color for export logs is misleading** ([Issue](https://github.com/netease-youdao/LobsterAI/issues/1382))
    - *2 comments, Open (3 months stale).* User requests changing the red color scheme for log exports, as red typically indicates failure. *Analysis:* A simple UX/accessibility issue that impacts user trust in log data.
- **#1381 - [REQUEST] Scheduled tasks should reuse the same conversation window** ([Issue](https://github.com/netease-youdao/LobsterAI/issues/1381))
    - *1 comment, Open (3 months stale).* User reports that cron jobs create new session windows each run, cluttering the UI, especially for short-interval tasks. *Analysis:* A workflow quality-of-life request. If the team prioritizes reducing session spam, this is a high-impact fix.
- **#1283 - [BUG] Duplicate identical WeChat messages only sync once** ([Issue](https://github.com/netease-youdao/LobsterAI/issues/1383))
    - *1 comment, Open (3 months stale).* Identical text queries sent via WeChat are not individually synced to the desktop application. *Analysis:* Likely a deduplication bug in the WeChat bridge, affecting power users who send repetitive queries.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR Exists? |
|-----------|-------|-------------|----------------|
| Critical | [#2230](https://github.com/netease-youdao/LobsterAI/issues/2230) | **Same model runs 10x slower in LobsterAI vs CodeBuddy** (25 min vs 2m24s, 60M tokens vs 67k tokens). Reported 2026-06-30. | No |
| High | [#1384](https://github.com/netease-youdao/LobsterAI/issues/1384) | **Multi-file upload only retains the last file** (3 months stale, still Open). | Yes: [#1372](https://github.com/netease-youdao/LobsterAI/pull/1372) (Open, stale) |
| Medium | [#1385](https://github.com/netease-youdao/LobsterAI/issues/1385) | **WeChat session history not cleared after deleting conversation** (3 months stale). | No |
| Medium | [#1426](https://github.com/netease-youdao/LobsterAI/issues/1426) | **No success indicator or list refresh after uploading a skill** (Closed, but root may still exist). | Closed (stale) |
| Medium | [#1427](https://github.com/netease-youdao/LobsterAI/issues/1427) | **Local skill upload allows duplicate skill names** (Closed, but root may still exist). | Closed (stale) |

**Key Note:** Issue #2230 is a **critical performance regression** reported today. The token count disparity (60M vs 67k) suggests a potential infinite loop or runaway context accumulation bug. No fix PR exists yet.

## 6. Feature Requests & Roadmap Signals
- **User Request (Strong Signal):** Reuse the same conversation window for cron/scheduled task results ([#1381](https://github.com/netease-youdao/LobsterAI/issues/1381)). This is likely to be addressed in the next release, given the team is actively working on the scheduled tasks subsystem (see PR #2231 and PR #2234).
- **User Request (Weak Signal):** Change log export color scheme ([#1382](https://github.com/netease-youdao/LobsterAI/issues/1382)). Low priority, but indicates a need for clearer UX signaling.
- **Team Action (Roadmap Signal):** The addition of unified Youdao Analyzer usage reporting across the entire application (`settings, prompt input, conversations, artifacts, agents, skills, MCP, kits, IM settings, scheduled tasks`) strongly suggests an upcoming focus on **telemetry and product analytics** to measure feature adoption and guide the next roadmap cycle.

## 7. User Feedback Summary
- **Pain Points:**
    - **Performance:** The most severe complaint is the drastic slowness of the AI engine compared to a direct competitor (CodeBuddy). This erodes user trust in the core product.
    - **Session Management:** Users are frustrated by the proliferation of new windows for scheduled tasks and the inability to consistently upload multiple files.
    - **WeChat Integration:** The WeChat bot bridge has multiple edge cases (duplicate message handling, history cleanup) that degrade the user experience for mobile-first users.
- **Satisfaction Indicators:** The high volume of merged PRs (14) and the quick revert/re-apply cycle show an actively maintained project that is responsive to internal regressions, though this responsiveness has not yet extended to the stale community-reported issues.

## 8. Backlog Watch
| Issue/PR | Status | Why it matters |
|-----------|--------|----------------|
| [#1372](https://github.com/netease-youdao/LobsterAI/pull/1372) – Fix multi-file upload | Open for 3 months, no maintainer review | PR contains a fix with unit tests for a bug that has been reported twice (#1384). It is ready for merge but stagnating. |
| [#1381](https://github.com/netease-youdao/LobsterAI/issues/1381) – Reuse session for cron tasks | Open for 3 months, no maintainer comment | Highly requested by users; an official "acknowledged" label or roadmap comment would signal engagement. |
| [#2234](https://github.com/netease-youdao/LobsterAI/pull/2234) – OpenClaw cron descendant fix | Open (no merge) | This is an active, unmerged fix for the core agent execution engine. Delaying this risks blocking the full `cron` + agent parallelism feature set. |
| All stale issues (#1382-#1385) | No maintainer response for ~90 days | These are closed or uncommented. A triage pass (close, label `wontfix`, or assign) would improve community trust and backlog hygiene. |

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-01

## 1. Today's Overview
Moltis showed minimal community activity in the last 24 hours, with **no new issues** opened and **zero open issues** currently tracked. The project maintained dependency hygiene through three pull requests, two of which were merged/closed. No new releases were published. Overall, the project appears to be in a **low-activity maintenance phase**, with no reported bugs, feature requests, or user feedback surfaced through GitHub.

## 2. Releases
**No new releases** were published today. The latest available release remains unchanged.

## 3. Project Progress
Two pull requests were merged or closed today, both focused on dependency updates:

- **[PR #1134]** — chore(deps): bump the npm_and_yarn group across 2 directories with 2 updates *(closed 2026-06-30)*  
  - Updated `astro` from 6.3.3 to 6.4.8 (in `/docs`) and `undici` to latest (in `/website`)  
  - [View PR](https://github.com/moltis-org/moltis/pull/1134)

- **[PR #1121]** — chore(deps-dev): bump esbuild from 0.25.12 to 0.28.1 in /crates/web/ui *(closed 2026-06-30)*  
  - A major version bump for `esbuild`, likely bringing performance or compatibility improvements to the UI build system  
  - [View PR](https://github.com/moltis-org/moltis/pull/1121)

**One open PR** remains:

- **[PR #1141]** — chore(deps): bump the npm_and_yarn group across 3 directories with 4 updates *(open since 2026-06-30)*  
  - Targets `esbuild` and `vite` in `/crates/web/ui` plus `esbuild` in `/docs`  
  - [View PR](https://github.com/moltis-org/moltis/pull/1141)

**No feature development or new functionality** was advanced in these changes.

## 4. Community Hot Topics
No issues or PRs received comments or reactions in the last 24 hours. The only open pull request (#1141) has **zero comments and zero reactions**, indicating low community engagement. No underlying needs or discussions could be identified from the available data.

## 5. Bugs & Stability
**No bugs, crashes, or regressions** were reported or resolved today. The project has zero open issues, suggesting either high stability or low reporting activity.

## 6. Feature Requests & Roadmap Signals
**No feature requests** were submitted or discussed. The project roadmap remains opaque from this data snapshot. Based on the dependency-focused activity, the next minor release may simply include updated dependencies (esbuild 0.28.1, astro 6.4.8) with no new features.

## 7. User Feedback Summary
**No user feedback**—positive or negative—was expressed through GitHub issues, pull request comments, or reactions. It is not possible to assess user satisfaction or pain points from this data.

## 8. Backlog Watch
**No long-unanswered issues or PRs** require maintainer attention. The only open PR (#1141) is a routine Dependabot update less than 24 hours old. The project's issue tracker is completely empty, which may indicate excellent responsiveness—or that users are not reporting problems through GitHub.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is a structured digest for the CoPaw project (known as QwenPaw) generated from the GitHub data snapshot for July 1, 2026.

---

## CoPaw / QwenPaw Project Digest – 2026-07-01

### 1. Today's Overview
The CoPaw (QwenPaw) project exhibits **very high development velocity** today, with a significant 50 Pull Requests updated and 23 Issues touched in the last 24 hours. This volume suggests an active sprint, likely targeting the upcoming v2.0.0 release. The community is heavily engaged in both reporting edge-case bugs and submitting substantial feature contributions, including first-time contributors. The project is focused on hardening core infrastructure (sandbox, governance, memory) while simultaneously shipping UX improvements for both the Console and TUI. No new releases were cut today, indicating that the codebase is in a phase of active integration rather than release stabilization.

### 2. Releases
**No new releases were made today.** The latest public version remains `v1.1.12.post2`. The high number of merged PRs and active v2.0.0 bug tracking (#5273) suggest a major version release may be approaching.

### 3. Project Progress
Today saw **22 merged/closed PRs**, reflecting strong forward momentum across several key areas:
- **Security & Governance:** A major refactor merged `ToolGuard` detectors into the central `Policy` engine (PR #5301). The Linux sandbox implementation using Bubblewrap for mount-namespace isolation was completed and merged (PR #5310). A critical bug fix ensured that the "OFF" governance mode actually disables tool approval prompts (PR #5623).
- **Memory & Retrieval:** A major feature milestone was reached: the memory system now supports an external **Reranker API** (e.g., SiliconFlow, Qwen3-Rerank) for two-stage retrieval. This was implemented in backend (PR #5648) and integrated with a frontend configuration panel (PR #5647), directly addressing community demand for better search precision.
- **Channels & Integration:** DingTalk channel functionality was enhanced with `@mention` support for proactive sends via CLI and API (PR #5590).
- **Documentation & TUI:** Critical fixes were merged for CJK/IME input support in the TUI (PR #5671). A new architecture documentation page was contributed (PR #5653).

### 4. Community Hot Topics
The most active discussions highlight user demand for **advanced agent control** and **specific integration features**:
- **[Tracking] QwenPaw v2.0.0 Pre-release Bug Tracker (#5273)**: This central thread remains a key coordination point for pre-release issues, with high maintainer and community engagement.
- **[Enhancement] Support custom BaseURL for Telegram channel (#5630)**: Users are requesting greater network flexibility for specific messaging platforms, reflecting the global nature of the user base.
- **[Feature] Request for Loop Detection Mechanism (#5657)**: A user reported agent workflows getting stuck in loops with specific models (e.g., Qwen3.6-27B), sparking a discussion about system-level reliability. A developer has responded with a dedicated PR (#5665) implementing a "composable gate architecture" to address this.
- **[Enhancement] Reranker for Memory Search (#5588)**: This feature request had high traction and was **fully resolved today** with the merging of PRs #5647 and #5648.

### 5. Bugs & Stability
Today's bug reports show good depth of testing, particularly around edge cases.
- **High Severity - Console Crash on Large Tool-Use History (#5401):** This is a frontend rendering crash. The root cause involves a mismatch between the backend data format (`type: "data"`) and the frontend component expectations (`type: "tool_use"`). **Status:** Closed.
- **High Severity - Remote SSH Plugin Installation Loop (#5550):** A bug on macOS causing a circular dependency install and residual backend processes. **Status:** Closed with a fix.
- **Medium Severity - Browser Autofill Hijacks Model Config Search (#5403):** A UX bug where the browser’s password manager interferes with the provider search field. **Status:** Open.
- **Medium Severity - Linux Build Not Available (#5668):** While not a bug in code, the lack of a native Linux AppImage build is a significant gap for the Linux user base, now formally flagged.
- **Low Severity - Tool Call Result Card Count Stuck at 1 (#5624):** A UI cosmetic bug where the result counter is incorrect for tools like `glob_search`. **Status:** Closed.

### 6. Feature Requests & Roadmap Signals
The requests today signal a strong desire for **mature, production-ready behaviors**:
- **Agent Loop Control (#5657, PR #5665):** The request for a "Loop Detection Mechanism" is a strong signal for needs around agent reliability and cost control. This is already addressed by a draft PR for a "Gate Architecture," making it very likely for the next version (v2.0).
- **Linux Desktop Support (#5668):** The request for an AppImage build is a clear signal for expanding the desktop user base. This is a highly actionable, low-effort request given the Tauri framework.
- **Workspace File Browser in Chat (#5667):** Users want to see agent outputs without leaving the conversation (no more "why did this job fail"). This is a strong UX enhancement candidate for the next minor release.
- **Input Character Limit Removal (#5670):** A request to remove the current 10k character limit to leverage modern LLM context windows. This is a straightforward backend change and is very likely to be implemented soon.

### 7. User Feedback Summary
The user feedback is broadly positive, focusing on **enhancing reliability and expanding utility** rather than reporting frustration with core features.
- **Pain Points:** Task termination without logs (#5616), silent execution of cron tasks (#5566), and slow streaming on DingTalk channels (#5603) are the most frequently cited friction points.
- **Use Cases:** Users are actively deploying CoPaw in multi-agent collaboration scenarios, using it for remote server management (SSH plugin), and building cron-based monitoring systems. The demand for the Reranker feature confirms that users are scaling up their memory usage and hitting the limits of basic search.
- **Satisfaction:** The rapid and transparent resolution of bugs like the DeepSeek V4 compatibility (#5573) and the tool approval governance (#5623) indicates a healthy development process where user reports are taken seriously and fixed quickly.

### 8. Backlog Watch
Two long-running, significant PRs remain open and require maintainer attention to land for v2.0:
- **PR #5187: Windows Desktop GUI Automation (Computer Use):** This is a massive feature, open for over two weeks, enabling native Windows UIA control. It is a key differentiator for the project but may be stalled on review complexity.
- **PR #5525: Windows Native Sandbox:** Complementary to the above, this is essential for security on Windows. It is crucial to integrate this before a stable v2.0 release.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-01

## Today's Overview

ZeroClaw remains in an intense development cycle with **50 issues and 50 PRs updated in the last 24 hours**, indicating very high contributor velocity. The project has **46 open issues and 45 open PRs**, with only 4 issues and 5 PRs closed/merged today—suggesting a widening backlog as new work outpaces resolution. No new releases were published today; the project is currently at **v0.8.1** with the **v0.8.3** tracker issues active. The community is engaged around governance, architecture RFCs, and channel/telegram integration pain points. A notable architectural decision was executed today: the **retirement of the zeroclaw-desktop Tauri app** (PR #8544 merged), signaling a strategic pivot away from desktop client maintenance.

## Releases
**None today.** The latest release remains v0.8.1. The project is actively tracking v0.8.3 work across three tracker issues ([#8070](https://github.com/zeroclaw-labs/zeroclaw/issues/8070), [#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071), [#8360](https://github.com/zeroclaw-labs/zeroclaw/issues/8360)), so a release may be forthcoming.

## Project Progress
**5 PRs merged/closed today** (out of 50 updated):

- **[PR #8544](https://github.com/zeroclaw-labs/zeroclaw/pull/8544) (merged)** — `chore(desktop): remove the zeroclaw-desktop Tauri app and all wiring`. A significant cleanup: the entire `apps/tauri` crate, CI, docs, and i18n references were excised. Signals ZeroClaw is focusing on CLI/ZeroCode/web interfaces.

- **[PR #8501](https://github.com/zeroclaw-labs/zeroclaw/pull/8501) (merged)** — `fix(config): warn when sqlite memory requests vector search without an embedder`. Addresses the widely-discussed onboarding bug ([#8386](https://github.com/zeroclaw-labs/zeroclaw/issues/8386)) where hybrid search silently degrades to keyword-only.

- **Issue #6943** ([closed](https://github.com/zeroclaw-labs/zeroclaw/issues/6943)) — RFC for replacing Extism with direct wasmtime component model host was accepted and completed.

- **Issue #7816** ([closed](https://github.com/zeroclaw-labs/zeroclaw/issues/7816)) — Pluggable skill registries feature was accepted and implementation merged.

- **Issue #8386** ([closed](https://github.com/zeroclaw-labs/zeroclaw/issues/8386)) — The SQLite/embedder mismatch bug was resolved.

**Features that advanced (open PRs with recent commits):**
- **MCP resources-as-context** ([PR #8508](https://github.com/zeroclaw-labs/zeroclaw/pull/8508)) — Stacked on PR A (#8403), adds agent-loop support for MCP resource/prompt rendering.
- **Two-path onboard tree** ([PR #8033](https://github.com/zeroclaw-labs/zeroclaw/pull/8033)) — Large (size:XL) PR wiring LLM + deterministic onboarding over RPC and CLI.
- **AMQP SOP fan-in** ([PR #8521](https://github.com/zeroclaw-labs/zeroclaw/pull/8521)) — AMQP deliveries can now drive SOP engine, with credential secret fix.
- **Telegram multi-message mode** ([PR #8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561)) — New streaming mode for Telegram channel.
- **Quickstart provider reuse** ([PR #8522](https://github.com/zeroclaw-labs/zeroclaw/pull/8522)) — Improves UX for reusing existing model providers.

## Community Hot Topics

**Most Active Issues (by comment count):**

1. **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** (13 comments) — **RFC: Work Lanes, Board Automation, and Label Cleanup**. A governance RFC with Rev. 6 that proposes work routing automation. High engagement suggests the community is invested in project governance and triage process improvements.

2. **[#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)** (6 comments) — **MCP tools/tool_search missing from TUI sessions**. S1-severity bug blocking workflows for MCP users. Two users report MCP tools discovered by the gateway are invisible in TUI sessions.

3. **[#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)** (6 comments) — **Consecutive OOM in WSL2**. S0 severity (data loss/security risk) — the `zeroclaw` daemon is being killed by OOM killer on WSL2 with 8GB+ RSS. Long-standing issue (since April 2026) still unresolved.

4. **[#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)** (4 comments) — **Per-agent custom environment variables**. Proposes `runtime_context` and `runtime_secrets` blocks for multi-tenancy across process lanes and MCP instances.

5. **[#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)** (3 comments) — **Telegram channel cannot be configured**. S1 severity — users report `channels doctor` claims channels are not set up even after following quickstart. Bot unresponsive on Telegram.

**Underlying needs:** The community is signaling three core pain points: (1) MCP tooling integration is unstable across the gateway/TUI boundary; (2) onboarding and configuration (Telegram, providers, memory) has too many silent failure modes; (3) there is strong interest in multi-agent and multi-tenant patterns (work lanes, environment variables, skill registries).

## Bugs & Stability

**Critical (S0) issues:**
- **[#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)** — OOM in WSL2 (no-stale, accepted). No fix PR visible. Risk: high. Lingering since April.

**High severity (S1) issues:**
- **[#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)** — MCP tools missing from TUI (accepted, high risk). No fix PR yet.
- **[#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)** — Telegram channel configuration broken (accepted, high risk). No fix PR yet.
- **[#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563)** (filed today) — SOPs unavailable through web dashboard chat session. New, zero comments.
- **[#8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094)** — Anthropic provider added via Quickstart unavailable until reset. Blocked (needs author action).

**Medium severity (S2) issues:**
- **[#8386](https://github.com/zeroclaw-labs/zeroclaw/issues/8386)** — SQLite/embedder mismatch (now closed via PR #8501).
- **[#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269)** — Installation documentation needs improvement.

**Stability improvements merged today:**
- **[PR #8564](https://github.com/zeroclaw-labs/zeroclaw/pull/8564)** — `fix(tools): bound browser_open launcher waits` — adds 10-second timeout to browser subprocess launches.
- **[PR #8562](https://github.com/zeroclaw-labs/zeroclaw/pull/8562)** — `fix(cron): filter recv_log_event by job_id` — fixes flaky test due to broadcast pollution.

## Feature Requests & Roadmap Signals

**High-engagement feature requests (likely for v0.8.3 or v0.9.0):**

1. **Per-agent custom env vars** ([#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)) — `runtime_context`/`runtime_secrets` blocks. Strong candidate for next release given its priority p2 and active discussion.

2. **Telegram multi-message mode** ([#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445), PR [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561)) — Already has an open PR, likely shipping soon.

3. **Pluggable skill registries** ([#7816](https://github.com/zeroclaw-labs/zeroclaw/issues/7816)) — Now closed/merged; expected in next release.

4. **Cross-channel TOTP gate** ([#3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767)) — Long-standing, no-stale, priority p1. Security-critical feature with multi-channel implications.

5. **Surface relationship memory** ([#8251](https://github.com/zeroclaw-labs/zeroclaw/issues/8251)) — Documentation/knowledge graph workflow. Priority p2, accepted.

6. **Runtime Policy for OTel LLM** ([#8462](https://github.com/zeroclaw-labs/zeroclaw/issues/8462)) — RFC accepted, open questions about content masking in observability pipelines.

**Architecture RFCs in progress (blocked/needs-review):**
- [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) — Wire-protocol-first provider model (needs maintainer review)
- [#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398) — Plugin permission/config/secrets model (needs maintainer review)
- [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) — `.ignore` file mechanism for workspace protection (needs author action)

## User Feedback Summary

**Pain points expressed by users:**

1. **Onboarding friction:** Multiple users report that Quickstart and configuration flows have silent failures. The Anthropic provider not showing in chat ([#8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094)) and Telegram channels not responding ([#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)) are recurrent themes. The SQLite/embedder mismatch ([#8386](https://github.com/zeroclaw-labs/zeroclaw/issues/8386)) was fixed today, addressing a core onboarding complaint.

2. **MCP tool accessibility:** Users report that MCP tools discovered by the gateway are invisible in TUI sessions ([#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)), blocking MCP-based workflows entirely.

3. **Documentation gaps:** Users want better installation docs ([#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269)) and surfaced relationship memory workflows ([#8251](https://github.com/zeroclaw-labs/zeroclaw/issues/8251)).

4. **SOPs not functioning:** A user reports ([#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563), filed today) that Standard Operating Procedures configured in the shared directory are not detected by the agent runtime in web dashboard sessions. This is a high-severity workflow blocker.

**Satisfaction signals:** The community is actively contributing (50+ issues/PRs updated daily). The label cleanup RFC ([#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)) shows community care about project governance. New contributors filed multiple issues today (susyabashti, metalmon, cloud-post-code), indicating healthy onboarding despite pain points.

## Backlog Watch

**Long-unanswered important issues needing maintainer attention:**

| Issue | Age | Priority | Notes |
|-------|-----|----------|-------|
| [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) | 83 days | S0 | OOM in WSL2 — data loss risk. No resolution. |
| [#3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767) | 106 days | p1 | Cross-channel TOTP gate — no-stale but no assignee. |
| [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) | 88 days | p2 | Installation docs improvement — accepted but no movement. |
| [#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) | 11 days | p2 | Publish channels-full prebuilt assets — blocked, needs maintainer review. |
| [#8057](https://github.com/zeroclaw-labs/zeroclaw/issues/8057) | 10 days | p2 | CI security jobs (CodeQL, Trivy, SBOM) — blocked. |
| [#8056](https://github.com/zeroclaw-labs/zeroclaw/issues/8056) | 10 days | p2 | CI required PR gates (cargo audit) — blocked. |
| [#8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094) | 9 days | S0 | Anthropic provider unavailable until reset — needs author action. |
| [#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) | 10 days | p2 | Retire aardvark-sys crate — needs maintainer review. |

**Notable:** The WSL2 OOM issue ([#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)) at S0 severity has been open for nearly 3 months with no fix PR. Additionally, six RFCs/features are in "blocked" status awaiting maintainer review, which may slow the v0.8.3 timeline if not addressed soon.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*