# OpenClaw Ecosystem Digest 2026-07-13

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-13 01:43 UTC

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

# OpenClaw Project Digest — 2026-07-13

## Today's Overview

OpenClaw shows **high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a large and engaged community. Activity is split roughly evenly between open and closed items (289 open issues, 271 open PRs), reflecting both active development and responsive issue management. The project released **v2026.7.1-beta.6** today, adding new model providers and updating default configurations. However, several critical **P0/P1 bugs** remain open, including a gateway memory leak (RSS growing to 15.5GB) and a regression where tool outputs render as `(see attached image)` placeholders, making them unreadable to agents.

## Releases

**v2026.7.1-beta.6** — `openclaw 2026.7.1-beta.6`
- **New models and providers**: Added Featherless, Claude Sonnet 5, Mythos 5, Meta Muse Spark 1.1, and ClawRouter
- **Default model changed**: GPT-5.6 is now the new-setup default
- **New `/think` modes**: `ultra` for Sol and Terra, `max` for Luna
- **OAuth improvements**: Refresh model availability after OAuth, honor Z.AI `max`
- **No breaking changes or migration notes** in this release

## Project Progress

9 PRs were merged/closed today, including several important fixes and features:

- **#105832** — `feat(ui): scope the sidebar sessions list to the chip-selected agent` (merged) — Web UI now shows only the selected agent's sessions in the sidebar
- **#105813** — `fix(slack): suppress room event typing indicators` (merged) — Fixes false "typing…" indicators for observe-style channel turns
- **#105834** — `refactor(infra): trim advertised host exports` (merged) — Dead-code cleanup, reducing public API surface
- **#103778** — `gateway: failed plugin reload leaves current plugin metadata describing a plugin set that never loaded` (closed) — Critical bug in plugin hot-reload rollback logic

## Community Hot Topics

### Most Commented/Reacted Issues

1. **[#75 — Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** (110 comments, 81 👍)
   - **Underlying need**: Users want equivalent desktop apps for Linux and Windows to match macOS, iOS, and Android. This is the **longest-running open enhancement** (since Jan 2026) and clearly the most requested cross-platform feature.

2. **[#99241 — Tool outputs render as image attachments](https://github.com/openclaw/openclaw/issues/99241)** (22 comments, 2 👍)
   - **Underlying need**: In long-running ANSI-heavy workflows, tool results become invisible to agents — a **critical usability bug** that breaks agent autonomy in tool-heavy sessions.

3. **[#91588 — Gateway Memory Leak — RSS grows from 350MB to 15.5GB](https://github.com/openclaw/openclaw/issues/91588)** (19 comments, 1 👍)
   - **P0 critical bug** causing repeated OOM crashes and restart cycles. This is the **most severe ongoing reliability issue** in the project.

4. **[#7707 — Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)** (16 comments)
   - **Underlying need**: Users want security defenses against memory poisoning attacks by tagging entries by trust level based on origin.

5. **[#10659 — Masked Secrets: Prevent Agent from Accessing Raw API Keys](https://github.com/openclaw/openclaw/issues/10659)** (13 comments, 4 👍)
   - **Underlying need**: Security-conscious users want agents to *use* API keys without being able to *read* them, protecting against prompt injection extraction.

## Bugs & Stability

### Critical (P0)

- **#91588** — [Gateway Memory Leak](https://github.com/openclaw/openclaw/issues/91588): RSS grows from 350MB → 15.5GB over 2-3 days, causing repeated OOM kills and restart cycles. **No fix PR yet**. This is the project's most urgent reliability problem.
- **#104721** — [All tool results return "(see attached image)"](https://github.com/openclaw/openclaw/issues/104721): Regression where tool outputs become unreadable placeholders. Filed 2 days ago, 12 comments. **No fix PR yet**.
- **#101290** — [CLI startup preflight corrupts live state DB](https://github.com/openclaw/openclaw/issues/101290): Health-check commands cause "database disk image is malformed" — corrupting the SQLite database while gateway is running. **No fix PR yet**.

### High Priority (P1)

- **#89228** — [exec intermittently unavailable in isolated cron sessions](https://github.com/openclaw/openclaw/issues/89228): Regression, was fixed in 2026.4.1 but reappeared.
- **#99947** — [codex harness mirrored-session-history read fails](https://github.com/openclaw/openclaw/issues/99947): Affects ephemeral sessions and failover — shared app-server client retired while turns in flight.
- **#102020** — [Second message fails with "reply session initialization conflicted"](https://github.com/openclaw/openclaw/issues/102020): Cross-channel, position-dependent bug. **Fix PR #103562** exists for Discord.
- **#102400** — [Reply-session init conflict silently dropped on Slack/webchat/heartbeat](https://github.com/openclaw/openclaw/issues/102400): Similar to #102020 but affects additional channels.
- **#94939** — [6.x state migration leaves conversation-store SQLite empty](https://github.com/openclaw/openclaw/issues/94939): 0-byte migration file, breaks MS Teams proactive sends.

### Notable Fix PRs in Progress

- **#103562** — fix(discord): retry reply session init conflicts — **ready for maintainer look**
- **#105806** — fix(recovery): reclaim terminal-phase reply operations in stuck-session recovery
- **#105807** — fix(config): apply provider-level contextWindow/maxTokens defaults to models

## Feature Requests & Roadmap Signals

### Likely for Next Release (high community demand + existing PRs)

1. **Filesystem sandboxing** (#7722) — 9 comments, 4 👍 — Active discussion with proposed config structure. High security value.
2. **Dynamic model discovery** (#10687) — 9 comments, 3 👍 — Currently static models require rebuilds for fast-moving providers like OpenRouter. Multiple PRs touching config/model loading.
3. **Masked secrets / API key protection** (#10659) — 13 comments, 4 👍 — Strong security interest. Similar to memory trust tagging (#7707).

### Mid-term Predictions

- **Exec-approval denylist** (#6615) — 7 comments, 7 👍 — Simple config addition, complements existing allowlist. Likely low-effort win.
- **TUI multi-line editing** (#10118) — 5 comments, 4 👍 — Shift+Enter for newlines is a common UX request. Low complexity.
- **Context overflow error improvements** (#9409) — 4 comments, 3 👍 — Better error messages with token counts. Likely to be prioritized alongside compaction fixes.

### Mature/Long-requested Features

- **Memory trust tagging** (#7707) — Since Feb 2026 — Security feature for agent memory integrity
- **WhatsApp sticker support** (#7476) — Since Feb 2026 — Niche but requested
- **Voice call streaming TTS** (#8355) — Since Feb 2026 — Reduces voice call latency from 5-15s → sub-second

## User Feedback Summary

**Pain Points:**
- **Tool output invisibility** is the most acute problem — users are frustrated that agents cannot read their own tool results in long sessions (#99241, #104721)
- **Platform gaps** are highly visible — the top-voted issue (#75) about missing Linux/Windows apps has 81 👍 and remains unaddressed since January
- **Session reliability** is degrading — multiple users report "reply session initialization conflicted" errors (#102020), silent message drops (#102400), and stuck sessions (#105806)
- **SQLite corruption** (#101290, #71689) is a recurring theme across versions

**Satisfaction Signals:**
- High PR throughput (500 updated in 24h) shows active development response
- New model support (GPT-5.6, Claude Sonnet 5, Mythos 5) shows responsiveness to AI model landscape
- The `/think` mode expansion (ultra, max) for different tiers (Sol, Terra, Luna) demonstrates attention to power-user workflows

## Backlog Watch

### Long-unanswered Important Issues (needing maintainer attention)

1. **#75** — [Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) (since 2026-01-01): 81 👍, 110 comments — **oldest open enhancement**, flagged `needs-product-decision`
2. **#6615** — [Exec-approval denylist](https://github.com/openclaw/openclaw/issues/6615) (since 2026-02-01): 7 👍, flagged `needs-maintainer-review` and `needs-product-decision`
3. **#7707** — [Memory trust tagging](https://github.com/openclaw/openclaw/issues/7707) (since 2026-02-03): Flagged `needs-maintainer-review`, `needs-product-decision`, `needs-security-review`
4. **#10687** — [Dynamic model discovery](https://github.com/openclaw/openclaw/issues/10687) (since 2026-02-06): 3 👍, flagged `needs-maintainer-review`, `needs-product-decision`
5. **#9986** — [Model fallback on context length exceeded](https://github.com/openclaw/openclaw/issues/9986) (since 2026-02-05): Flagged `needs-maintainer-review`, `needs-product-decision`

### Stale Issues

- **#65161** — [Heartbeat isolated mode cadence stalls](https://github.com/openclaw/openclaw/issues/65161) (closed as stale today, Apr 12 → Jul 13) — Multiple heartbeat regressions in isolated mode
- **#71326** — [Cross-exec stale file reads](https://github.com/openclaw/openclaw/issues/71326) (since Apr 25, stale tag) — Regression in 2026.4.20, still unresolved

### PRs Awaiting Maintainer Review (status: ready for maintainer look)

- **#104727** — Remove unnecessary readParamRaw wrapper (cleanup)
- **#104027** — Dependencies bump (14 updates, security-related)
- **#103562** — fix(discord): retry reply session init conflicts (**P1 bug fix**)
- **#105807** — fix(config): apply provider-level contextWindow/maxTokens defaults (**P2 bug fix**)

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digest data for 2026-07-13.

---

## Cross-Project Ecosystem Analysis: AI Agent Open-Source Landscape
**Date:** 2026-07-13
**Scope:** OpenClaw, NanoBot, Hermes Agent, PicoClaw, NanoClaw, NullClaw, IronClaw, LobsterAI, CoPaw, ZeroClaw

### 1. Ecosystem Overview

The open-source personal AI agent ecosystem is maturing rapidly, characterized by a bifurcation between high-velocity, feature-rich "reference" platforms and specialized, lightweight runners. The ecosystem is currently prioritizing **production stability** and **multi-platform reliability** over novel feature development, as several projects mature from experimental to daily-driver status. A collective focus on **message delivery guarantees** (handling tool result serialization, session persistence, and silent drops) and **infrastructure resilience** (CI stability, memory leak management, reconnection logic) indicates the community is investing heavily in operational hardening. The emergence of unified guard layers, operator approval workflows, and masked secret management signals a growing enterprise and security-conscious user base, pushing the ecosystem toward governance-ready features.

### 2. Activity Comparison (Last 24 Hours)

| Project | Issues Updated | PRs Updated | Release Status | Ecosystem Health Score |
|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | New: v2026.7.1-beta.6 | High |
| **ZeroClaw** | 32 | 50 | None | Very High |
| **IronClaw** | 10 | 50 | None | Very High |
| **Hermes Agent** | 50 | 50 | None | High |
| **CoPaw** | 21 | 11 | None (v2.0.0 shipped) | Moderate-High |
| **NanoClaw** | 3 | 13 | None | High |
| **NanoBot** | 4 | 7 | None | Moderate |
| **NullClaw** | 0 | 5 | None | Low-Moderate |
| **PicoClaw** | 5 | 2 | None | Low-Moderate |
| **LobsterAI** | 1 | 2 | None | Low |
| **TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | None | Inactive |

**Notes on Health Score:** Based on a composite of raw activity, closure rate, maintainer responsiveness, and severity of open bugs. Scores are relative to this ecosystem snapshot.

### 3. OpenClaw's Position

**Advantages over peers:**
- **Community size and engagement:** 1000 combined issues/PRs updated in 24 hours is an order of magnitude larger than any other project, demonstrating unmatched community momentum.
- **Release velocity:** The only project shipping a new release today (v2026.7.1-beta.6), indicating a mature release pipeline and consistent delivery.
- **Model provider breadth:** Adding Featherless, Claude Sonnet 5, Mythos 5, and ClawRouter shows aggressive support for the full AI model landscape.
- **Feature depth:** Advanced `/think` modes (ultra, max) and OAuth model refresh are sophisticated power-user features not seen in smaller projects.

**Technical approach differences:**
- Unlike NanoClaw or IronClaw, which focus on containerized/harnessed execution, OpenClaw appears to be a **monolithic reference implementation** with broad all-in-one functionality.
- Its "gateway" architecture (suffering the memory leak) is distinct from NullClaw's lightweight gateway or Hermes' plugin-based architecture.
- Aims to be the "reference implementation" for the ecosystem, analogous to the Kubernetes project in cloud-native.

**Community size comparison:**
- OpenClaw's 500 issues/500 PRs dwarfs every other project. For context, ZeroClaw (next highest) has 32 issues/50 PRs. This suggests the largest developer base by a significant margin.

### 4. Shared Technical Focus Areas (Cross-Project Themes)

| Theme | Affected Projects | Specific Need |
|---|---|---|
| **Tool Output Resilience** | OpenClaw, NanoClaw, CoPaw | Tool results rendered as `(see attached image)` or causing 400 errors; silent drop of tool/agent replies |
| **Session Reliability & Persistence** | OpenClaw, Hermes Agent, CoPaw, LobsterAI | "Reply session initialization conflicted," silent message drops, session persistence bugs, config/data corruption on restart |
| **Platform Parity (Desktop/Mobile)** | OpenClaw (Linux/Windows), PicoClaw (Android), Hermes (Windows) | Missing native desktop apps for non-macOS platforms; mobile launch failures |
| **Memory Management / Leaks** | OpenClaw (Gateway 15.5GB leak), ZeroClaw (unbounded RSS growth), CoPaw (tool pairing) | RSS growth leading to OOM; production instability for long-running servers |
| **CI / Infrastructure Stability** | IronClaw (~70% main branch failures), CoPaw (v2.0.0 regressions) | Flaky tests blocking developer velocity; major release breaking existing data |
| **Security / Governance** | OpenClaw (masked secrets), NanoClaw (guard layer, approval verbs), CoPaw (shell approval) | Agent prompt injection extraction; need for operator approval workflows; go-to-prompt for automated actions |
| **Local / Small Model Support** | NanoBot (Ollama 60s delays), ZeroClaw (ZeroCode format alienates Ollama) | Performance and compatibility gaps for users running local inference |
| **Background Task / Cron Reliability** | Hermes Agent (cron never triggers), NullClaw (cron attribution) | Scheduled agent execution failing silently or without proper attribution |

### 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | Hermes Agent | CoPaw | NanoClaw | NullClaw |
|---|---|---|---|---|---|---|
| **Target User** | Power users, all-in-one | Operations teams, multi-channel | Enterprise, broad platform | Chinese enterprise (Feishu/DingTalk) | Containerized agent fleets | Minimalist self-hosters |
| **Architecture** | Monolithic reference | Modular with trackers | Plugin ecosystem | Monolithic (+ Qt UI) | Harness/container based | Lightweight Zig-based |
| **Key Strength** | Community size, model support | Production hardening control | Platform breadth (Telegram, QQ, WeChat) | Desktop UX (v2.0.0 Qt) | Governance (guard seam) | Minimalism, fast startup |
| **Key Weakness** | Memory leaks, tool invisibility | CI stability, S1 bugs unpatched | Windows-specific bugs | v1→v2 migration pain | Duplicate reply regressions | Low community velocity |
| **Primary Language** | Go/TypeScript | Go | Python/PyTorch | Python | Go/TypeScript | Zig |

### 6. Community Momentum & Maturity Tiers

**Tier 1: High-Velocity (Rapidly Iterating, High Community Engage)**
- **OpenClaw**: Reference platform; shipping betas weekly; massive engagement; stability issues in gateway.
- **ZeroClaw**: Intense development (50 PRs/day), methodical tracker groups, strong contributor throughput.
- **IronClaw**: 50 PRs/day, core-team driven, deep internal focus on CI and "reborn loop" resilience.
- **Hermes Agent**: Consistent, well-balanced activity; strong closure rate; mature sweeper infrastructure.

**Tier 2: Post-Launch Stabilization**
- **CoPaw**: Released v2.0.0 and is now absorbing community regressions; high bug-report volume indicates adoption.
- **NanoClaw**: High velocity on core reliability; guard layer and operator approval are significant architecture signals.

**Tier 3: Maintenance-Phase (Stable but Lower Activity)**
- **NanoBot**, **NullClaw, PicoClaw**: Receiving targeted bug fixes but not shipping major features or releases; community is smaller and more passive.
- **LobsterAI**: Minimal activity; a single high-severity bug (#2293) has no maintainer response, suggesting limited bandwidth.

**Tier 4: Inactive**
- **TinyClaw, Moltis, ZeptoClaw**: No activity in 24 hours.

### 7. Trend Signals for AI Agent Developers

1. **From "Building Agents" to "Running Agents Reliably":** The dominant pain point across *every active project* is not how to create agents, but how to prevent them from breaking mid-task. Tool output serialization, session persistence, and memory leakage are the industry's core problems.

2. **Security is Becoming a Product Requirement:** The coordinated push for masked secrets (OpenClaw #10659), memory trust tagging (#7707), unified guard layers (NanoClaw #2986), and operator approval workflows (NanoClaw #3029, CoPaw shell approval) shows the ecosystem is anticipating enterprise audit requirements.

3. **Local Model Support is a Latent Market:** The "totally unusable" complaint from a NanoBot user running Ollama on 32GB VRAM, combined with ZeroClaw's adapter issues for llama3.2, suggests a significant underserved user base. Developers who solve the local inference performance gap (prompt caching, format adapters) will capture this market.

4. **Platform Parity is Non-Negotiable:** OpenClaw's top-voted issue (#75, 81 👍) for Linux/Windows apps, combined with PicoClaw's Android failure and Hermes' Windows-specific bugs, indicates that "works on my Mac" is no longer acceptable. Desktop and mobile support are emerging as table stakes, not differentiators.

5. **Observability is Driving Architecture:** IronClaw's failure taxonomy (#6011), ZeroClaw's OTel trace correlation (#6641), and NanoClaw's audit logging (#2987) signal a maturation from "chatbot" to "production system." The ability to debug agent behavior across long, tool-heavy traces is becoming a competitive advantage.

6. **The "Containerization" Split:** A clear architectural divergence is emerging between monolithic all-in-one agents (OpenClaw, CoPaw) and containerized/harnessed agents (NanoClaw, IronClaw). The latter approach offers better isolation, governance, and scaling for production deployments, suggesting the industry is moving toward micro-agent architectures.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project digest for 2026-07-13.

---

## NanoBot Project Digest – 2026-07-13

### 1. Today's Overview
The project is experiencing a high level of development activity, with 7 pull requests and 4 issues updated in the last 24 hours. This signals strong community engagement and active maintenance. The day saw a significant push on stability and configuration fixes, including a high-precision fix for the heartbeat system and a security-oriented PR for remote workspace access. However, three new critical bugs related to Dream sessions and Discord integration have been opened, indicating ongoing stability challenges in those areas.

### 2. Releases
None. There were no new releases published in the last 24 hours.

### 3. Project Progress
Three pull requests were merged or closed today:
- **PR #4879 (CLOSED)** – feat(long_task): gate sustained-goal behind opt-in flag (default off). *Addresses a core UX issue where long-running tasks blocked user interaction.*
- **PR #4892 (CLOSED)** – fix(webui): allow remote workspace access reduction. *A security-focused fix that limits remote WebUI sessions to default permissions, preventing unauthorized access escalation.*
- **PR #4898 (CLOSED)** – merge. *A simple merge commit with no specific feature content.*

### 4. Community Hot Topics
- **Issue #4867 – [CLOSED] – Preserve exact prompt prefix to enable caching in Ollama** (4 comments)
  - *Link:* https://github.com/HKUDS/nanobot/issues/4867
  - *Analysis:* Although closed, this was the most discussed issue. The user reports that NanoBot adds a 60-second delay per turn when using Ollama due to broken prompt caching. This highlights a deep performance pain point for users running local models on high-end hardware (32GB VRAM). The underlying need is for performance parity with other frameworks when using local inference.

### 5. Bugs & Stability
Three new bugs were reported today, ranked by severity:

- **P1: Issue #4894 – [OPEN] – prune_dream_sessions() fails to prune base64-encoded Dream session files**
  - *Link:* https://github.com/HKUDS/nanobot/issues/4894
  - *Severity:* High. The pruning logic is broken against the new filename format, leading to storage bloat over time. No fix PR exists yet.
- **P2: Issue #4893 – [OPEN] – /dream-log and /dream-restore show non-Dream commits**
  - *Link:* https://github.com/HKUDS/nanobot/issues/4893
  - *Severity:* Medium. Confusing UI output due to filtering gaps in the git log calls.
- **P3: Issue #4897 – [OPEN] – Issue with Discord bot integration**
  - *Link:* https://github.com/HKUDS/nanobot/issues/4897
  - *Severity:* Medium. The bot connects but fails to receive messages, suggesting a potential runtime loop or permission issue.

**Fix PRs:** PR #4896 (fix(heartbeat)) and PR #4895 (fix(transcription)) are open fixes for known bugs, though they are not related to the three new bugs above.

### 6. Feature Requests & Roadmap Signals
- **PR #4855 – [OPEN] – feat(webui): add guided setup flows**
  - *Link:* https://github.com/HKUDS/nanobot/pull/4855
  - *Signal:* This long-running PR aims to productize channel setup with QR handoff, multi-assistant state, and safer secret handling. If merged, it will significantly lower the barrier for new users.
- **PR #4879 (closed today)** – gating the sustained-goal feature behind an opt-in flag suggests the team is prioritizing user-control over autonomous behavior, a likely focus for the next release.

### 7. User Feedback Summary
- **Pain Points:** The primary user pain point is performance degradation with local models (Ollama), where every turn incurs a 60-second delay—described as "totally unusable." Users also report confusion from non-Dream commits appearing in Dream-specific logs.
- **Satisfaction:** Positive indicators include the active maintenance cadence (multiple PRs merged today) and the swift handling of security concerns in the WebUI (PR #4892). Users appreciate the swift resolution of the sustained-goal blocking issue.

### 8. Backlog Watch
- **PR #4145 – [OPEN] – fix: resolve #3958 — Weather Skill (since 2026-06-01)**
  - *Link:* https://github.com/HKUDS/nanobot/pull/4145
  - *Status:* This PR has been open for over six weeks with no recent maintainer interaction. It adds a new structured skills example (weather) and tests. Growing age without review suggests it may be deprioritized or require a maintainer to sign off.
- **PR #4855 – [OPEN] – feat(webui): add guided setup flows (since 2026-07-08)**
  - *Status:* This large feature PR has been idle for 5 days. Given its scope (multiple files, complex setup), it likely needs a dedicated review cycle.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-13

## Today's Overview
Project activity is **moderate to high**, with 50 issues and 50 PRs updated in the last 24 hours. The closure rate is strong — 40 of 50 updated issues were closed, and 12 of 50 PRs were merged or closed, suggesting maintainers are actively clearing the backlog. There are no new releases today, but the volume of merged bug fixes (particularly around the gateway, TUI, and platform integrations) indicates a focused stability push. The project remains healthy with steady community contributions and responsive maintainer triage.

## Releases
No new releases were published today.

## Project Progress
Twelve pull requests were merged or closed today. Key highlights from the top-20 PR list include:

- **#22887** (`fix: add runtime safety hardening`, `P2`) — Adds runtime guidance injection, source-aware pre-tool gates, and shell hook hardening, improving security posture for high-risk agent workflows.
- **#22866** (`fix(tui): sync history rewrites to session db`, `P2`) — Fixes TUI session persistence where undo/clear commands left `SessionDB` stale, causing ghost turns on resume.
- **#22890** (`feat: enforced goal execution`, `P3`) — Rebuilds the `/goal` execution engine with hard pivot enforcement, semantic loop detection, and verification gates, replacing a pure LLM judge with a three-stage pipeline.
- **#22892** (`fix(memory): preserve file permissions during atomic write`, `P2`) — Fixes a bug where `MEMORY.md`/`USER.md` file permissions were reset on each write.
- **#22876** (`fix(shutdown): harden cleanup blocks against second-Ctrl-C`, `P2`) — Prevents unhandled `KeyboardInterrupt` traceback when a second Ctrl-C is pressed during shutdown.

## Community Hot Topics
The most active discussions (by comment and reaction count):

1. **#22791** (7 comments, 13 👍) — **[Feature]: Add Infisical as an External Vault backend**  
   A sub-issue of the broader Phase 4 "External Vaults" initiative. The strong positive reaction suggests strong demand for Infisical integration alongside HashiCorp Vault and AWS Secrets Manager.  
   [NousResearch/hermes-agent Issue #22791](https://github.com/NousResearch/hermes-agent/issues/22791)

2. **#21827** (6 comments) — **Topic-Aware Subagent Routing**  
   Proposes routing tasks to specialized subagents based on domain (coding, finance, research), allowing use of cheaper models for simpler tasks. The 0 👍 is surprising given the concept's merit; may need better framing or proof-of-concept.  
   [NousResearch/hermes-agent Issue #21827](https://github.com/NousResearch/hermes-agent/issues/21827)

3. **#21867** (6 comments) — **[Bug]: Cron doesn't work!**  
   Critical bug report where `cronjob` tool's `action='run'` advances `next_run_at` but never executes the job. Marked `sweeper:implemented-on-main`, suggesting a fix is in the pipeline.  
   [NousResearch/hermes-agent Issue #21867](https://github.com/NousResearch/hermes-agent/issues/21867)

4. **#22926** (5 comments) — **Kanban stale claim locks from dead workers**  
   Workers that die ungracefully (OOM, SIGKILL) leave stale claim locks, permanently blocking tasks. The ~15-minute TTL doesn't always re-trigger dispatcher recovery.  
   [NousResearch/hermes-agent Issue #22926](https://github.com/NousResearch/hermes-agent/issues/22926)

5. **#22918** (undefined comments, PR) — **Engineering Cybernetics × AI Agent architecture analysis**  
   A research document applying Qian Xuesen's cybernetics to Hermes, producing a 15-mechanism mapping matrix. Unclear comment count may indicate maintainer review pending.  
   [NousResearch/hermes-agent PR #22918](https://github.com/NousResearch/hermes-agent/pull/22918)

**Underlying needs**: Users are pushing for (a) **better resilience** in background task execution (cron, kanban), (b) **smarter routing** to reduce costs, and (c) **deeper theoretical grounding** — the cybernetics PR suggests a community segment interested in first-principles architecture analysis.

## Bugs & Stability
Reported bugs ranked by severity:

| Severity | Issue | Summary | Fix Status |
|----------|-------|---------|------------|
| **High** | #52951 | `cua-driver` UIAccess helper dies after Alt+Tab — blocks all `computer_use` for remainder of session | No fix PR linked; open |
| **High** | #63223 | `heartbeat.py` crashes on Windows (Chinese locale) due to GBK encoding error + `state.db` lock race | No fix PR; open |
| **Medium** | #21867 | Cron `action='run'` never triggers job execution | Fix on `main` |
| **Medium** | #22926 | Kanban stale claim locks from dead workers | Fix on `main` |
| **Medium** | #21801 | TUI shows `[session ended]` after v0.13.0 update | Fix on `main` |
| **Medium** | #22864 | Dashboard `/chat` WebSocket times out before HTTP 101 response | Fix on `main` |
| **Medium** | #21915 | Systemd restart loop due to incomplete process cleanup | Fix on `main` |
| **Medium** | #22328 | `vision_analyze` cannot read any local files (including browser screenshots) | Fix on `main` |
| **Medium** | #22250 | Telegram reply-to-photo not forwarded to agent | Fix on `main` |

**Notable**: 8 of 9 high/medium severity bugs have fixes implemented on `main`, indicating a strong bug-fixing cadence. The two high-severity remaining bugs (#52951, #63223) are Windows-specific and may require platform experts.

## Feature Requests & Roadmap Signals

**High-demand features (community-backed):**
- **#22791**: Infisical vault backend (13 👍) — strong signal for Phase 4 external vault expansion.
- **#38164 / #38173**: Desktop client Tirith approval dialog (3 comments each) — users want a GUI popup for security approvals, not just CLI.
- **#44987**: Arabic localization with full RTL support (PR open) — signals growing international use.

**Predictions for next release:**
1. **Topic-Aware Subagent Routing** (#21827) — likely to move forward given cost optimization benefits.
2. **Infisical vault backend** (#22791) — already a sub-issue of planned Phase 4 work; high community interest.
3. **Plugin inventory JSON contract** (PR #22881) — maintainer-coded PR with CLI and API surface; strong candidate.
4. **Pre-budget pause with audit state capture** (PR #22868) — solves the abrupt truncation problem; high practical value.

## User Feedback Summary
- **Pain points**: Windows stability remains a concern — both high-severity open bugs are Windows-specific (UIAccess, GBK encoding). Users also report frustration with **stale kanban claims** (tasks stuck until manual intervention), **cron unreliability**, and **TUI session persistence bugs** (history not saved on resume).
- **Satisfaction drivers**: Users appreciate the **broad platform support** (Telegram, Discord, WeChat, QQ, Teams) and the **plugin ecosystem** (MCP, Gemini CLI skill). The cybernetics PR (#22918) and localizations (#44987) suggest a community that values deep technical documentation and internationalization.
- **Use cases**: Showcase submissions (e.g., #22417 — ThinkCheck 3.0 reasoning evaluation engine on top of Hermes) indicate real production use in Chinese enterprise contexts, particularly for legal document analysis.

## Backlog Watch
The following open issues/PRs require maintainer attention:

1. **#17476** — **[OPEN, P3] Consolidate live-time PRs around one ephemeral runtime context path**  
   Created 2026-04-29, last updated 2026-07-13. No recent activity. This refactor would simplify a fragmented timestamp/timezone implementation.  
   [NousResearch/hermes-agent Issue #17476](https://github.com/NousResearch/hermes-agent/issues/17476)

2. **#52951** — **[OPEN, P2] cua-driver UIAccess dies after window focus change**  
   Open since 2026-06-26. Blocks `computer_use` on Windows for entire session. No fix PR yet.  
   [NousResearch/hermes-agent Issue #52951](https://github.com/NousResearch/hermes-agent/issues/52951)

3. **#63223** — **[OPEN, P3] heartbeat.py Windows GBK encoding + state.db lock crash**  
   Open since 2026-07-12. Another Windows-specific crash affecting Chinese locale users.  
   [NousResearch/hermes-agent Issue #63223](https://github.com/NousResearch/hermes-agent/issues/63223)

4. **#32392** — **[OPEN, P3] Support Claude Code / Claude Team authentication**  
   Open since 2026-05-26 (2 comments, 1 👍). Users want to use existing Claude subscriptions without API keys. Could unlock a large user base.  
   [NousResearch/hermes-agent Issue #32392](https://github.com/NousResearch/hermes-agent/issues/32392)

5. **#12874** — **[OPEN, P3] Make session hygiene message-limit configurable**  
   Created 2026-04-20, no merge progress. Would resolve user surprise at silent transcript compaction.  
   [NousResearch/hermes-agent PR #12874](https://github.com/NousResearch/hermes-agent/pull/12874)

**Backlog health**: Most older open items are P3 (low priority) or awaiting maintainer review. The project's sweeper infrastructure is effectively clearing P2 bugs. The primary risk is the two Windows-specific P2/P3 bugs that could alienate a growing Windows user base.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the PicoClaw project digest for 2026-07-13.

---

## PicoClaw Project Digest – 2026-07-13

### 1. Today's Overview
PicoClaw shows **moderate activity** today, with a slight uptick in community troubleshooting and a focused feature merge. Five issues were updated in the last 24 hours, three of which remain open, while two pull requests were touched—one being a fresh fix for the Anthropic provider. The absence of new releases suggests the team is in a maintenance and bug-fixing phase, though the volume of incoming feedback (especially around Matrix and Android) indicates growing real-world adoption. The project is generally healthy but faces a recurring pattern of user friction around reconnection stability and platform support.

### 2. Releases
**No new releases** were published. The latest stable version remains **v0.2.9**, with the development tree (git: `ed618e14`) dated March 25, 2026. There are no release notes, migration guides, or breaking changes to report.

### 3. Project Progress
- **Merged PR #3190** (closed, by chengzhichao-xydt): Fixed internationalization by syncing missing locale keys (`chat.dropImagesActive`, `chat.disableCodeWrap`, `chat.enableCodeWrap`) from English into the `bn-in` and `cs` translation files. This is a low-risk, quality-of-life fix for non-English users.
- **Open PR #3251** (by hydrogenbond007): A proposed fix to capture and expose prompt cache token usage from the Anthropic SDK and Anthropic Messages API providers. If merged, this will allow operators to monitor whether Claude’s prompt caching is actually saving costs—a valuable observable for anyone running PicoClaw in production with Anthropic models.

No other features or major changes were advanced in the last 24 hours.

### 4. Community Hot Topics
- **Issue #3182 – "Android version"** (3 comments, by Monessem): A persistent bug blocking the service from launching on Android despite full permissions. Users cannot change the path from settings. This is the most-commented issue in the set and highlights a gap in the Android deployment story.
- **Issue #3203 – "Matrix sync loop has no reconnection logic"** (2 comments, +1 reaction, by weissfl): Describes a silent death of the Matrix `/sync` loop after network disruption. The core complaint—that `systemd` can’t restart the gateway because the process stays alive—echoes a broader reliability pain point for self-hosters.
- **Issue #3252 – "splitKnownProviderModel strips provider prefix"** (no comments yet, by v2up-32mb): A parse bug where model IDs that coincidentally contain a provider alias (e.g., `openai/gpt-4o`) get mangled. This is a sharp edge case that could silently break model routing for advanced configurations.

**Underlying need:** Users are increasingly running PicoClaw in unattended, headless, or mobile environments. The community is demanding **robust network resilience** (Matrix), **proper cross-platform packaging** (Android), and **reliable model identifier parsing**—all signs of a project that has moved from prototype to daily-driver status.

### 5. Bugs & Stability
Ranked by severity:

- **Medium – Issue #3252** (splitKnownProviderModel stripping): A logic bug that can cause incorrect provider selection or silent fallback. No fix PR exists yet.
- **Medium – Issue #3203** (Matrix sync loop, silent death): A reliability bug that makes Matrix channels effectively brittle without a watchdog. No fix PR exists, though the bug report is detailed and reproducible.
- **Low – Issue #3194** (closed, stale): "Received encrypted message but crypto is not enabled." This was closed as stale after 2 comments. It likely reflects a misconfiguration rather than a core bug.
- **Low – Issue #3182** (Android launch failure): Reproducible but platform-specific. No fix PR yet; likely requires broader CI/QA for mobile targets.

### 6. Feature Requests & Roadmap Signals
- **Docker Compose for ARMv7 (Issue #3250, closed – likely merged or manually addressed):** User zhang090210 requested support for ARMv7 devices (e.g., 玩客云/OneCloud). The request was closed very quickly—potentially a maintainer accepted the patch or decided to add official support. This is a strong signal that the project is **leaning into low-power, self-hosted, home-server use cases**.
- **Prompt cache observability (PR #3251):** While technically a bug fix, exposing Anthropic cache metrics is a de facto feature request from operators managing cost. Expect this to be merged in the next patch release.

**Prediction for next version (v0.3.0 or v0.2.10):** ARMv7 Docker support, Anthropic cache metrics, and at minimum a hotfix for the `splitKnownProviderModel` stripping bug.

### 7. User Feedback Summary
- **Pain points:** Three distinct user pain points emerge:
    1. **Mobile deployment frustration** – Android users cannot run the gateway at all.
    2. **Silent failures** – The Matrix channel dies without detection, leading to loss of service.
    3. **Model routing confusion** – Misconfigured provider/model IDs cause hard-to-diagnose failures.
- **Use cases:** Self-hosters (ARM home servers), cross-platform users (Android/Matrix), and AI service operators (Anthropic cache monitoring).
- **Satisfaction:** Mixed. The project is clearly useful and growing, but users who hit edge cases (especially around matrix sync or mobile) express noticeable frustration and unanswered questions.

### 8. Backlog Watch
- **Issue #3182 (OPEN, 17 days stale):** The Android launch issue has had no maintainer response. It remains the longest-open active issue in the current batch and is likely the most impactful to a growing user segment. Needs maintainer attention or a request for logs/device details.
- **Issue #3194 (CLOSED as stale, 16 days):** While closed, the underlying question ("Matrix encrypted messages without crypto enabled") may resurface as more users adopt encrypted rooms. The maintainer might consider adding a warning log or a config check to prevent silent misconfiguration.
- **PR #3190 (CLOSED, merged):** Already handled—no further action needed.
- **PR #3251 (OPEN, new):** No maintainer comments yet. Since it addresses a clear operational gap for Anthropic users, it should be reviewed and merged quickly to avoid backlog.

---

*End of digest.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-13

## Today's Overview
NanoClaw is in a period of **high development velocity**, with 13 pull requests updated in the last 24 hours (11 open, 2 merged/closed) and 3 active issues. The project is actively addressing core reliability concerns — token caps, silent reply drops, and container initialization failures — while simultaneously pushing forward significant architectural work around a unified guard layer and operator approval flows. The absence of a new release suggests these changes are still coalescing, with several high-impact fixes and features likely to ship together in the next version.

## Releases
No new releases published in the last 24 hours. The project appears to be accumulating changes for a forthcoming release.

## Project Progress

### Merged/Closed PRs (2 total):
- **[#3024 — fix(container): raise the agent SDK's 32000 output-token cap to the model's real ceiling](https://github.com/nanocoai/nanoclaw/pull/3024)** — Merged. Directly addresses Issue #3023. This is a critical fix: every Claude agent was silently capped at 32,000 output tokens by the Agent SDK default (`CLAUDE_CODE_MAX_OUTPUT_TOKENS`), causing long turns (e.g., generating OpenSCAD files) to fail partway through. The PR raises this to the model's actual ceiling, resolving a frustrating silent failure mode.
- **[#2952 — Skill/add opencode stack](https://github.com/nanocoai/nanoclaw/pull/2952)** — Closed (merged 2026-07-12). An operational/container skill adding the OpenCode stack, expanding NanoClaw's deployment options.

### Features that advanced:
- **Unified Guard Layer** — [#2986](https://github.com/nanocoai/nanoclaw/pull/2986) (core-team, open) introduces a single `guard()` decision function for all privileged actions crossing container/channel boundaries, replacing the previous voluntary gating pattern.
- **Operator CLI Approvals** — [#3029](https://github.com/nanocoai/nanoclaw/pull/3029) (core-team, open) adds `approve`, `reject`, and `reject-with-reason` verbs to `ncl approvals`, giving operators a CLI path to resolve pending approvals.
- **Scheduled Tasks in Templates** — [#3022](https://github.com/nanocoai/nanoclaw/pull/3022) (core-team, open) allows templates to define recurring scheduled tasks via `tasks/*.md`, which are created paused on agent group stamping.
- **Harness Capability Toggles** — [#2983](https://github.com/nanocoai/nanoclaw/pull/2983) (core-team, open) extends per-group configuration for disabling harness capabilities (beyond the existing cron/scheduling disable) with lean defaults for new groups.

## Community Hot Topics

### Most Active PR/Issue Discussions
1. **[#3020 — fix(agent-runner): rescue undelivered unwrapped replies after the re-wrap nudge](https://github.com/nanocoai/nanoclaw/pull/3020)** — A critical fix for silent reply drops (addressing #2369, #2393, and #2404) when the model omits `<message to>` wrappers after long tool chains. This has been updated recently and is a core stabilization effort.

2. **[#3016 — Every rate_limit_event logged as quota error even when "allowed"](https://github.com/nanocoai/nanoclaw/issues/3016)** — The most active issue (1 comment). A user reports that since PR #2965, every rate limit event is logged as a quota error regardless of actual status. Logs show 82 occurrences in a week, all on successful turns. This is generating noise that could mask real quota issues.

3. **[#3026 — Re-wrap nudge duplicates replies when agent already replied via send_message](https://github.com/nanocoai/nanoclaw/issues/3026)** — A regression where the unwrapped-output nudge re-runs the model even when `dispatchResultText` already sent a reply via `send_message`, causing duplicate responses. A companion fix PR [#3028](https://github.com/nanocoai/nanoclaw/pull/3028) is already open.

### Underlying Needs
The hot topics cluster around **reliability of message delivery and error reporting**. Users need:
- Correct error classification (quota vs. allowed) to distinguish real problems from false alarms
- Prevention of both silent reply drops (Issue #3020) and duplicate replies (Issue #3026)
- Transparent token limits so long-running tasks don't fail silently mid-output

## Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#3023](https://github.com/nanocoai/nanoclaw/issues/3023) | All Claude agents silently capped at 32,000 output tokens, causing long turns to fail mid-output | **Merged** in [#3024](https://github.com/nanocoai/nanoclaw/pull/3024) |
| **Critical** | [#3020](https://github.com/nanocoai/nanoclaw/issues/3020) (via #2369, #2393) | Silent reply drops when model omits `<message to>` wrapper after long tool chains | **Open** — PR [#3020](https://github.com/nanocoai/nanoclaw/pull/3020) |
| **High** | [#3026](https://github.com/nanocoai/nanoclaw/issues/3026) | Re-wrap nudge causes duplicate replies when `send_message` already replied | **Open** — PR [#3028](https://github.com/nanocoai/nanoclaw/pull/3028) |
| **High** | [#3027](https://github.com/nanocoai/nanoclaw/pull/3027) | Container silence due to TMPDIR root-owned dir poisoning (`EISDIR` on `/tmp/onecli-proxy-ca.pem`) | **Open** — PR [#3027](https://github.com/nanocoai/nanoclaw/pull/3027) |
| **Medium** | [#3016](https://github.com/nanocoai/nanoclaw/issues/3016) | Every rate_limit_event logged as quota error even when "allowed" — 82 false alarms in one week | No fix PR yet |

**Observations:** The project is responding rapidly to high-severity bugs — the token cap fix was merged within 24 hours of its issue being filed, and fix PRs exist for both the duplicate reply issue and the container poisoning bug. The rate-limit misclassification (#3016) is lower severity but will produce significant log noise for all users.

## Feature Requests & Roadmap Signals

### User-Requested Features (from open issues/PRs):
- **WhatsApp safety warning** — [#3021](https://github.com/nanocoai/nanoclaw/pull/3021) (open PR) adds a warning before connecting a shared/personal WhatsApp number, protecting users from temporary suspension. Signals user demand for platform-specific safety guardrails.
- **Audit logging** — [#2987](https://github.com/nanocoai/nanoclaw/pull/2987) (open, skill + core-team) adds an opt-in local audit log for the `ncl` surface, indicating enterprise/governance use cases gaining traction.
- **OpenCode stack support** — [#2952](https://github.com/nanocoai/nanoclaw/pull/2952) (just merged) expands deployment flexibility, suggesting user interest in non-standard infrastructure.

### Predicted Next-Version Inclusions:
The cluster of related fixes around message delivery reliability (re-wrap nudge, duplicate replies, silent drops) strongly suggests these will ship together in the next release. The guard seam (#2986) and operator approval verbs (#3029) represent foundational architecture changes that may also be batched for a larger milestone.

## User Feedback Summary

### Pain Points (explicitly reported):
1. **Silent failures**: Long-running CAD agents die mid-output with no user-visible cause (#3023) — a "trust-breaking" bug for production use.
2. **Log noise**: False quota errors flood logs (82/week) eroding trust in monitoring (#3016).
3. **Container silences**: Users lose WhatsApp replies entirely when containers fail to spawn due to root-owned directories (#3027).
4. **Duplicate replies**: Agents that successfully reply via `send_message` then re-run and send a second message, creating confusion (#3026).

### Use Cases Revealed:
- **CAD/programmatic generation**: User hitting token cap is emitting "a long OpenSCAD file" — indicates agent-as-code-generator use case.
- **Subscription deployments**: The high rate-limit event count (#3016) from a subscription install suggests production-scale usage with persistent agent-runner instances.
- **Template-driven multi-agent setups**: Scheduled tasks in templates (#3022) points toward automated, repeatable agent fleet management.

### Satisfaction Signals:
The one positive signal is the **rapid fix turnaround** — the token cap bug was reported and fixed within 24 hours, which likely maintains user confidence despite the stability issues.

## Backlog Watch

### Issues/PRs Possibly Needing Maintainer Attention:

1. **[#2982 — fix(agent-runner): reconcile Claude tool allowlist with pinned CLI](https://github.com/nanocoai/nanoclaw/pull/2982)** — Open since 2026-07-08 (5 days). This is a potentially impactful fix: the tool allowlist names five tools that don't exist on the pinned Claude Code CLI (2.1.197) — `Task` (renamed `Agent`), `TodoWrite`, `TeamCreate`, `TeamDelete`, `ToolSearch`. The comment also notes the SDK's `allowedTools` filter may be ineffective. This could cause agents to silently miss capabilities or fail to use available tools. No update in 4 days despite being tagged `[core-team]`.

2. **[#3016 — Rate limit misclassification](https://github.com/nanocoai/nanoclaw/issues/3016)** — While not old (2026-07-11), it currently has no fix PR attached. Given the high noise level (82 events/week), this should see a fix soon or it will erode monitoring trust.

3. **[#2987 — /add-audit skill](https://github.com/nanocoai/nanoclaw/pull/2987)** — Open since 2026-07-09, rebased recently (2026-07-12). While not stale, this is a substantial feature PR that may need thorough review given the concurrent guard-layer refactoring in [#2986](https://github.com/nanocoai/nanoclaw/pull/2986) that it depends on.

---

*Digest generated 2026-07-13 from public GitHub data. Activity levels: High (13 PRs updated, 3 new issues, 2 merged/closed PRs).*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-13

## 1. Today's Overview
NullClaw saw moderate development activity today with 5 pull requests updated, though no new GitHub Issues were filed and no new releases were cut. Four of the five PRs were closed/merged, indicating maintainers are actively cleaning up the backlog of bug fixes and configuration improvements. The project remains in a stable maintenance phase, with focus shifting to Discord gateway reliability, agent runner output handling, and proper configuration plumbing. The one remaining open PR (#953) addresses a critical gateway socket recovery issue that has been in progress for over a month.

## 2. Releases
**No new releases today.** The last release remains the previous version. No changelog, breaking changes, or migration notes to report.

## 3. Project Progress
Four pull requests were closed/merged today:

- **[#951] fix(agent_runner): suppress stderr initialization logs on agent failure** (merged) — Prevents initialization logs (memory plan, MCP server registration, channel startup) from being posted to channels when the agent child process exits non-zero. Stderr fallback is now only used on success. Author: vernonstinebaker

- **[#950] fix(gateway): move port probe before allocations to prevent test leak** (merged) — Reorders gateway startup so that port availability is checked before allocating Config, RuntimeProviderBundle, SessionManager, etc., preventing resource leaks in test environments when `AddressInUse` errors occur. Author: addadi

- **[#949] fix: make queue_mode configurable from config.json** (merged) — Adds `agent.default_queue_mode` config field to set initial queue mode for new sessions. Moves `QueueMode` enum to `config_types.zig` as single source of truth, with JSON parsing from config.json and fallback defaults. Author: vernonstinebaker

- **[#948] fix cron agent delivery attribution** (merged) — Passes cron delivery origin metadata into spawned subprocesses so `agent_start` is attributed to the correct delivery channel/account. Preserves delivery routing flags for `once-agent` in both local storage and gateway `/cron/add` payloads. Author: DonPrus

## 4. Community Hot Topics
No Issues or PRs received comments or reactions today (all PRs show `undefined` comment counts with 0 👍). The most notable active topic remains:

- **[#953] fix(discord): recover closed gateway sockets** ([OPEN](https://github.com/nullclaw/nullclaw/pull/953)) — Open for over a month, this PR addresses stalled pre-HELLO gateway reconnects and adds bounded grace windows for health detection. While not generating active discussion, it represents the most significant stability work in the pipeline. The lack of comments may suggest either maintainer consensus or that the fix is considered straightforward by the team.

## 5. Bugs & Stability
**No new bugs or regressions were reported today.** The closed PRs today represent fixes for existing issues:

- **Medium severity:** Gateway resource leak on `AddressInUse` errors (fixed via #950) — test environments could leave behind unclosed config/session allocations.
- **Medium severity:** Agent output leakage of initialization logs (fixed via #951) — user channels could receive internal startup logs as if they were agent responses.
- **Low severity:** Cron delivery attribution missing (fixed via #948) — scheduled agent runs were not properly associated with their triggering channel.

The open PR #953 addresses a **high-severity** issue: Discord gateway socket recovery failure during reconnects, which could cause agents to become unreachable after transient network issues.

## 6. Feature Requests & Roadmap Signals
No new feature requests were filed today. However, the merged PRs signal several forward-looking developments:

- **Configurable queue mode (#949)** — The addition of `agent.default_queue_mode` to config.json suggests the team is preparing for more flexible session queue behavior, potentially enabling users to choose between "latest" and other strategies. This could appear in the next release.
- **Cron delivery attribution (#948)** — Enhanced metadata tracking for scheduled agent executions indicates work on auditability and multi-channel delivery reliability, possibly leading to a cron dashboard or logging improvements.
- **Gateway connection resilience (#953)** — The long-open PR on gateway socket recovery suggests deeper reconnection logic improvements are anticipated, likely targeting the next minor release.

## 7. User Feedback Summary
No direct user feedback (comments, reactions, or new issues) was captured today. Based on the fixes merged:

- **Pain point: Agent output noise** — Users (or operators) were reportedly receiving initialization logs in channels after agent crashes. PR #951 addresses this by suppressing stderr logs on failure.
- **Pain point: Configuration inflexibility** — The inability to set default queue mode from config.json was a limitation; PR #949 adds this capability.
- **Pain point: Cron attribution confusion** — Scheduled agent responses were not being attributed to the correct delivery channel, which PR #948 fixes.

No satisfaction or dissatisfaction signals were observed.

## 8. Backlog Watch
- **[#953] fix(discord): recover closed gateway sockets** — Open since 2026-06-12 (32 days), no comments, no reviews. This is the oldest open PR and addresses a potentially critical Discord connectivity issue. It needs maintainer attention to either merge or provide feedback to the author (vernonstinebaker) on next steps.

No Issues are currently open, so there is no long-unanswered issue backlog to flag. The project maintains a clean issue tracker.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the structured project digest for the **IronClaw** AI agent framework based on data from **2026-07-13**.

---

## 1. Today's Overview

Project activity is **intense and highly focused**, with 50 PRs updated in the last 24 hours (27 open, 23 merged/closed) and 10 active issues. The core team appears to be in the middle of a major "extension-runtime" train and a parallel "reborn loop resilience" stack, both targeting production hardening. A notable structural crisis has emerged: **CI fragility is bleeding main branch stability**, with ~70% of July pushes failing coverage checks, prompting several dedicated hardening PRs and a daily failure taxonomy issue. While no new formal releases were cut, the sheer volume of code churn suggests an imminent stabilization release.

## 2. Releases

**None.** No new releases or tags were recorded in the 24-hour window.

## 3. Project Progress

**Merged/Closed PRs (23 total):** The project merged the final wave of several large dependency updates and closed key blockers.

- **Dependency Alignment:** Two large Dependabot PRs were merged: `#5926` and `#6021`, collectively bumping 42 dependencies, including a major version jump for `agent-client-protocol` (0.10.4 → 1.2.0) and `claude-code-action` (1.0.88 → 1.0.171).
- **Bug-Fix Cleanup:** Three issues were closed automatically (likely by linked PRs or mergers):
    - `#5704` [bug] Image preview transparency during active chat — fixed.
    - `#6010` [bug] NEAR AI inference (GLM-5.2) hangs — resolved.
    - `#6009` [bug] GLM-5.2 missing from opencode default model list — resolved.
- **CI Hardening:** PR `#6022` (static pre-push checks) and PR `#6023` (fix for flaky `build_runtime_input` tests) were pushed toward merge, directly addressing the CI crisis.

## 4. Community Hot Topics

No single issue or PR attracted a high volume of comments or reactions (most show `undefined` or `0`), indicating that the **project is maintainer-driven** rather than community-chatter driven. However, the most structurally significant items are:

- **Issue #6014** — [bug, scope: ci] "CI fragility: flaky non-hermetic tests abort the coverage matrix, reding ~70% of main pushes." This is the #1 internal pain point, with the core team (ilblackdragon) filing 6 related bug/CI issues and 3 PRs in response. *Underlying need:* The project needs deterministic CI to maintain velocity.  
  [View Issue](https://github.com/nearai/ironclaw/issues/6014)

- **Issue #6011** — "Daily ironclaw failure taxonomy — 2026-07-12." A systematic post-mortem of a 136-failing-test benchmark run. This meta-issue signals a cultural shift toward data-driven quality engineering.  
  [View Issue](https://github.com/nearai/ironclaw/issues/6011)

- **Issue #2601** — [OPEN] "Feature Proposal: CLI / TUI for Managing Secrets." Dated April 18, 2026, this is the oldest open feature request, with 2 comments. While not heavily commented, it represents an ongoing user pain point around authentication onboarding.  
  [View Issue](https://github.com/nearai/ironclaw/issues/2601)

## 5. Bugs & Stability

**Severity: CRITICAL — CI is red on 70% of main pushes.**

| Rank | Issue | Severity | Description | Fix Status |
|------|-------|----------|-------------|------------|
| 1 | #6014 | **Critical** | CI fragility flaky tests abort coverage, reding 70% of main | Fix PRs #6022, #6023, #6019 in review |
| 2 | #6015 | **High** | Flaky test isolation defect in `build_runtime_input_production_*` | Fixed by PR #6023 |
| 3 | #6016 | **High** | Slack trigger-delivery e2e timeouts (live offenders, two latest main failures) | No dedicated fix PR yet |
| 4 | #6017 | **High** | DB concurrency contract tests flaky (Postgres delete/recreate race, libSQL) | No dedicated fix PR yet |
| 5 | #6010 | **Medium** | NEAR AI GLM-5.2 inference hangs for minutes during opencode | Closed |
| 6 | #5704 | **Low** | Image preview transparency while chat is active | Closed |

**Takeaway:** The project has a structural CI reliability problem. The core team is actively addressing it with static pre-push checks (`#6022`) and test isolation fixes (`#6023`), but the Slack e2e and DB concurrency flakes remain unpatched.

## 6. Feature Requests & Roadmap Signals

- **New Feature: CLI/TUI for Secrets Management (#2601)** — The oldest open feature request. The author (ek775) explicitly states authentication is poorly documented. Given the CI crisis is consuming mindshare, this likely slips to the next minor release (v0.12+), but it is a strong candidate for a "new contributor" or "good first issue" label.

- **Deterministic CI / Static Pre-Push Checks (#6018)** — Filed by ilblackdragon. This is a classic "developer experience" feature that will ship before the next major release, likely as part of the current CI hardening sprint. Expect it in the next patch release.

- **MCP Registration Store (PR #5970)** — A per-user MCP registration stack for the reborn agent loop. This is a major architectural feature (T1 of a multi-T stack). It is being actively developed by core contributor henrypark133 and is a strong candidate for the next minor version.

- **Prompt-Cache Break Detection (PR #5975)** — An optimization feature to detect KV-cache collapse (82% hit rate → 29%) and stop doomed compaction. This directly targets cost and latency for long agentic runs. Likely to land in the next release as part of the reborn loop resilience work.

## 7. User Feedback Summary

The most honest user feedback comes from **bug reports and feature requests**, which reveal real friction:

- **Authentication/secrets onboarding is painful** (#2601). The user explicitly states “it’s not well documented how users are intended to manage their secrets.” This is a **recurring user pain point** that predates the current CI crisis.
- **Inference hangs (GLM-5.2)** made opencode “unusable for real-time interactive development” (#6010). Although closed, this indicates that model integration is still rough.
- **Missing default model support** (#6009) forced users to manually fork and add support for GLM-5.2. This suggests that the project's "default model list" for external integrations is lagging behind provider releases.

**Satisfaction signal:** The rapid closure of #6009 and #6010 (both filed and closed within 24 hours) indicates that the maintainers are responsive to user-reported issues when they surface.

## 8. Backlog Watch

- **Issue #2601** — "Feature Proposal: CLI / TUI for Managing Secrets". Created **2026-04-18** (3 months ago). The oldest open issue. No maintainer response visible. This is the #1 candidate for a "pinned issue" or maintainer acknowledgment, as it reflects a core onboarding pain point.  
  [View Issue](https://github.com/nearai/ironclaw/issues/2601)

- **Pull Request #5664** — Dependabot PR for GitHub Actions (16 updates). Created **2026-07-05**, last updated 2026-07-12, still open. While Dependabot PRs are often auto-merged, this one has lingered for 8 days, which is unusual. It may be blocked by the CI instability.  
  [View PR](https://github.com/nearai/ironclaw/pull/5664)

- **CI Flake #6016** (Slack trigger-delivery e2e timeouts) and **#6017** (DB concurrency flake) have no dedicated fix PRs. They are documented but untreated, creating risk for the next release candidate.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-13

## Today's Overview
Project activity was low-to-moderate over the last 24 hours, with 1 active issue and 2 pull requests updated. No new releases were published. A significant bug report (#2293) concerning USER.md overwriting across multiple agents remains open and has received multiple comments, indicating a potential regression. Two older PRs (#1325 and #2065) were updated after long periods of inactivity, suggesting maintainers are clearing the stale queue. Overall, the project appears stable but with a small maintenance pulse.

## Releases
No new releases were published in the last 24 hours. The project currently has no active release cycle visible in the data.

## Project Progress
- **PR #2065** (area: main, stale) – **Merged**. This PR fixes a bug where Agent IDs were generated from agent names, causing old data to "resurrect" when a deleted agent was recreated with the same name. The solution uses short UUIDs instead. Note: the PR description acknowledges that deletion still does not clean up `cowork_sessions`, marking that as a known residual issue.
  - GitHub: [PR #2065](https://github.com/netease-youdao/LobsterAI/pull/2065)
- **PR #1325** (stale) – Remains **open**. This UI enhancement adds tooltip `title` attributes to the "New Chat" icon button across several views (CoworkView, AgentsView, McpView) when the sidebar is collapsed. It has been open since April 2, 2026.
  - GitHub: [PR #1325](https://github.com/netease-youdao/LobsterAI/pull/1325)

## Community Hot Topics
- **Issue #2293** (OPEN, 4 comments) – The most active discussion in the last 24 hours. A user reports that after restarting LobsterAI, all agents' `USER.md` files are overwritten with the content from the main agent's `USER.md`. This makes it impossible to maintain distinct personalities/configs for multiple agents. The user suspects a recent update introduced this bug. No maintainer response is visible in the data.
  - GitHub: [Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293)

## Bugs & Stability
| Rank | Issue | Severity | Description | Fix PR? |
|------|-------|----------|-------------|---------|
| High | #2293 | Major – Data loss / incorrect behavior | Multiple agents' `USER.md` files are overwritten by the main agent's content on restart. Breaks multi-agent personalization. | None yet |
| Medium | (PR #2065 residual) | Minor – Orphaned data | Deleting an agent does not clean up `cowork_sessions`, leading to orphaned database records. | Acknowledged but not fixed in scope of #2065 |

**Summary**: The #2293 bug is the most critical unresolved issue, as it directly impacts a core feature (multi-agent support). No fix PR has been opened yet.

## Feature Requests & Roadmap Signals
- **UI polish (PR #1325)**: Adding hover tooltips to icon-only buttons is a small but welcome UX improvement. This PR has been open for over 3 months, suggesting it is not a priority but may be merged in a future UI-focused release.
- **Agent identity stability (PR #2065)**: The merged fix addresses a subtle data resurrection bug. The residual `cowork_sessions` cleanup may become a follow-up task.
- **No explicit feature requests** were filed in the last 24h. The main feedback signal is around multi-agent configuration integrity, which could drive a stability-focused patch.

## User Feedback Summary
- **Dissatisfaction (multi-agent overwrite)**: One user (yepcn) reports a clear and reproducible bug affecting multi-agent use. The frustration is evident — the user has tested by manually editing files and confirmed the overwrite happens on restart. This indicates a regression likely introduced in a recent release.
- **No positive feedback or praise** was recorded in the last 24h.
- The lack of maintainer response on #2293 may contribute to user dissatisfaction if unresolved.

## Backlog Watch
- **PR #1325** (OPEN, last updated 2026-07-12, created 2026-04-02) – This UI improvement has been open for over 3 months. While not critical, it has no maintainer comments or requested changes. It may require a review decision: merge or close.
  - GitHub: [PR #1325](https://github.com/netease-youdao/LobsterAI/pull/1325)
- **Issue #2293** (OPEN, created 2026-07-07, last updated 2026-07-12) – This high-severity bug has no maintainer response and is now 6 days old. It should be triaged to either reproduce, confirm, or assign.
  - GitHub: [Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293)

---

*Generated from GitHub data snapshot at 2026-07-13. Data reflects the last 24 hours of activity.*

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

Here is the CoPaw project digest for **2026-07-13**.

---

# CoPaw Project Digest — 2026-07-13

## 1. Today's Overview
CoPaw experienced a **burst of activity** today, with 21 issues and 11 PRs updated in the last 24 hours. While no new releases were published, the community is actively reporting regressions from the recent **v2.0.0** release, particularly around message serialization, context compression, and sandboxing. The **v1.x → v2.x data migration** is a recurring pain point, with three separate PRs submitted to fix legacy session media loading. The project is currently **heavily in a stability and bug-fix phase**, with contributors stepping up to address core compatibility gaps.

## 2. Releases
**No new releases today.** The last stable release remains **v2.0.0**, which was the subject of the majority of bug reports.

## 3. Project Progress
Three pull requests were merged/closed today, all focused on **data compatibility** and **message integrity**:

- **[PR #5987](https://github.com/agentscope-ai/QwenPaw/pull/5987) — [CLOSED] fix(scroll): sanitize unpaired tool messages after context compression**  
  A first-time contributor (tadebao) successfully closed a fix that removes orphaned `tool_result` messages after context compression eviction. This is a direct mitigation for the widespread `400 BadRequestError` (role 'tool' without 'tool_calls').

- **[PR #5988](https://github.com/agentscope-ai/QwenPaw/pull/5988) & [PR #5990](https://github.com/agentscope-ai/QwenPaw/pull/5990) — [CLOSED] fix(compat): handle legacy 'file' block type in _coerce_block**  
  Both closed by Nioolek. These fix the v1→v2 message deserializer, which previously only handled `image`, `audio`, and `video` blocks but missed `file` blocks, causing `ToolResult` deserialization failures on legacy sessions.

## 4. Community Hot Topics
The following issues and PRs generated the most discussion:

- **[Issue #5996](https://github.com/agentscope-ai/QwenPaw/issues/5996) — [Bug]: 2.0.0对话时会产生MODEL_EXECUTION_ERROR (5 comments)**  
  **Analysis:** Users are hitting a consistent `400` error from OpenAI when `ToolResultBlock` is serialized as a `role=tool` message without a preceding `tool_calls`. This is the **most commented issue** and appears to be the root cause of multiple related bugs (#5986, #6002, #5985). The core problem is in `_hint.py` and the OpenAI formatter.

- **[Issue #5952](https://github.com/agentscope-ai/QwenPaw/issues/5952) — [Bug]: auto-memory fails with "No module named 'agentscope.tool._builtin._scripts'" (4 comments)**  
  **Analysis:** The auto-memory (ReMe) background task is broken in the v2.0.0 desktop bundle. Users running `qwenpaw-desktop.exe` on Windows cannot use memory summarization at all. A fix PR ([#5997](https://github.com/agentscope-ai/QwenPaw/pull/5997)) is already open.

- **[Issue #5986](https://github.com/agentscope-ai/QwenPaw/issues/5986) — Bug: Context compression breaks tool_call/tool_result pairing (4 comments)**  
  **Analysis:** This is a **critical regression** in the context compression middleware. When token limits are hit, old messages are evicted without preserving the `tool_call/tool_result` parent-child relationship, leading to a `400` error. Two fix PRs ([#5987](https://github.com/agentscope-ai/QwenPaw/pull/5987) & [#5989](https://github.com/agentscope-ai/QwenPaw/pull/5989)) were opened by the reporter, tadebao.

## 5. Bugs & Stability
### Critical (immediate crash or data loss)
| Bug | Severity | Fix Status |
|------|----------|------------|
| **Context compression orphans tool results → 400 error** (#5986, #6002, #5985, #5996) | **Critical** — blocks all long-running sessions | Fix PRs: #5987 (closed), #5989 (open) |
| **Auto-memory completely broken in desktop bundle** (#5952) | **High** — memory summarization dead | Fix PR: #5997 (open) |
| **Messages silently dropped when session is busy** (#5995) | **High** — silent data loss | No fix yet |

### High (major feature broken)
| Bug | Severity | Fix Status |
|------|----------|------------|
| **v1.x session media not loading in v2.0** (implied by #5990, #5991) | **High** — migration blocker | Fix PRs: #5993 (open), #5991 (open) |
| **New skills never appear in skill pool** (#6001, #6000) | **High** — skill system inert | No fix yet |
| **Shell execution demands approval on every call** (#5982, #5984) | **High** — breaks automation | No fix yet |

### Medium
| Bug | Severity | Fix Status |
|------|----------|------------|
| Chat-to-session mapping lost after upgrade (#5964) | Medium | No fix |
| `qwenpaw doctor` hardcoded health endpoint wrong (#5983) | Medium | No fix |
| Plugin HTTP routes lost after workspace hot-reload (#5977) | Medium | No fix |
| v2.0.0 missing SSH Offline, Profiles 404 (#5980) | Medium | No fix |

## 6. Feature Requests & Roadmap Signals
The community is requesting several impactful features:

- **[Cross-channel session handoff](https://github.com/agentscope-ai/QwenPaw/issues/5999)** — Users want to start a session in the console and continue it on Feishu/DingTalk. This is a **high-value UX improvement** and likely to be considered for v2.1.

- **[Per-session model overrides](https://github.com/agentscope-ai/QwenPaw/pull/5992)** — A first-time contributor (mango8853) has submitted a PR to allow different LLMs per conversation. This is a **strong candidate for inclusion** in the next minor release.

- **[Vision fallback for text-only models](https://github.com/agentscope-ai/QwenPaw/pull/5726)** — A long-standing PR (13 days) from wangfei010313 that enables automatic fallback to a vision-capable model when an image is uploaded. This aligns with the multi-model trend and is under review.

- **[Slash command autocomplete across all UIs](https://github.com/agentscope-ai/QwenPaw/pull/5869)** — Exposes system commands (`/new`, `/history`, `/plan`, etc.) in autocomplete. Low-risk, high-visibility improvement.

## 7. User Feedback Summary
- **Pain Point #1: "Every tool call or context eviction breaks my session."**  
  Multiple users (#5996, #5986, #6002, #5985) report that v2.0.0 produces `400` errors during normal operation. The community is frustrated that "messages with role 'tool' must be a response to a preceding message with 'tool_calls'" is the most common error.

- **Pain Point #2: "Upgrading to v2.0.0 broke my existing data."**  
  Users upgrading from v1.x (#5964, #5993, #5991, #5980) are losing session history, media files, and mapping data. The compatibility layer is incomplete.

- **Pain Point #3: "Governance/safety prompts are too aggressive."**  
  Users (#5994, #5982, #5984) report that every shell command or file operation triggers governance approval prompts, and there is no persistent way to disable them on headless/containerized deployments. This is a **major productivity blocker** for power users.

- **Satisfaction Signal:** First-time contributors (tadebao, Nioolek, dongbeixiaohuo, mango8853) are actively submitting high-quality bug fixes and features, indicating a **healthy, engaged contributor community**.

## 8. Backlog Watch
The following items have **no maintainer response** and may be slipping:

- **[Issue #6001](https://github.com/agentscope-ai/QwenPaw/issues/6001) — New skills never appear in skill pool** (1 comment, no maintainer reply)  
  *Risk:* The skill system is completely inert for all new installs. This is a basic feature that new users expect to work.

- **[Issue #5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) — Messages silently dropped when session is busy** (2 comments, closed without fix)  
  *Risk:* Closed by author as "close-and-review-later", but the underlying silent-drop bug is **not fixed**. Data loss can occur for any user sending a message while the agent is mid-toolchain.

- **[Issue #5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) — v2.0.0 Missing features: SSH Offline, Profiles returning 404** (no maintainer reply)  
  *Risk:* Users who relied on SSH Offline and Profile features in v1.x cannot use them in v2.0.0. If these are considered deprecated, a migration notice is needed.

- **[PR #5726](https://github.com/agentscope-ai/QwenPaw/pull/5726) — Vision fallback** (13 days without merge)  
  *Risk:* A valuable feature with no recent activity. It may require maintainer review to proceed.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-13

## 1. Today's Overview
ZeroClaw continues at high velocity with **32 active issues** and **50 PRs** updated in the last 24 hours, reflecting intense development activity. The project is in the midst of its **v0.8.3 / v0.8.4 maintenance cycle**, with three major tracker groups (runtime execution, provider serialization, and gateway/ZeroCode UX) all under active development. A critical **S1 bug** (#5808) involving the default context budget being exceeded on the very first turn remains the most pressing open stability concern. Only **1 issue was closed** and **3 PRs merged/closed** in the last day, suggesting the team is primarily pushing work forward rather than cycling through quick fixes.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress
Three PRs reached closure today:

- **#8940 [CLOSED]** — `fix(zerocode): apply fill_style() to queue sidebar and session picker overlays` (tzy-17): A small UI fix ensuring ZeroCode theme styles apply correctly after `Clear` operations. Marked as duplicate.
- One additional closed item (exact PR not visible in truncated top-20 list).

The 47 open PRs show heavy activity across **memory subsystems** (Nillth's 6+ PRs on audit trails, retrieval caching, typed memory, and content scanning), **SOP/approval workflow** (Nillth with #8903 delivering approval notices via route adapters), and **ZeroCode refinements** (ConYel's #8655 Code-pane consolidation and #8796 slash-skill hardening). A notable prototype effort is **#8661** — WASM plugin out-of-process execution via sidecar, now in proof-of-concept stage.

## 4. Community Hot Topics
The most active discussions this week center on infrastructure robustness and feature parity:

- **#5808 [Bug] — Default 32k context budget exceeded on iteration 1** (8 comments, opened 3 months ago, still in-progress). Users report that system prompts + tool definitions blow past the default 32k limit, triggering a "perpetual preemptive trim" loop. The issue has high risk and P1 priority, but no fix PR has materialized — a worrying sign for a workflow-blocking S1 bug.
- **#6055 [Feature] — Slack thread context hydration** (6 comments). Users want `conversations.replies` backfill on first bot mention to maintain conversation continuity. This reflects growing Slack channel maturity demands.
- **#6641 [Feature] — Turn-level OTel trace correlation** (5 comments). A planned follow-up to #6009 and #6190, demonstrating the project's commitment to production observability.

The **Nillth PR cluster** (#8893, #8895, #8897, #8898, #8900, #8984) received no reviewer comments but represents a major memory subsystem overhaul — adding audit trails, rerank stages, retrieval caching, cross-session recall, and typed memory classification. This signals strong internal investment in memory reliability and observability.

## 5. Bugs & Stability
Today's bug landscape is dominated by **critical and high-risk issues**:

| Severity | Issue | Problem | Fix PR? |
|----------|-------|---------|---------|
| **S1 - Workflow Blocked** | #5808 | Default 32k context budget exceeded by system prompt + tools on turn 1, causing infinite trim loop | ❌ No fix PR |
| **S1 - Workflow Blocked** | #8563 | SOPs not available through web dashboard chat session | ❌ No fix PR |
| **S1 - Workflow Blocked** | #9019 | OpenAI Responses provider rejects vision-capable models before serializing image input | ❌ No fix PR |
| **S1 - Workflow Blocked** | #9016 | OpenAI tool turns fail when Chat Completions rejects reasoning_effort | ❌ No fix PR |
| **High** | #8654 | skill-review fork panics with out-of-range slice → daemon SIGSEGV | ❌ No fix PR |
| **High** | #8642 | MCP/tool-schema cloning drives unbounded RSS growth in agent loop | ❌ No fix PR |
| **High** | #8999 | ZeroCode streamed user turns look like log/API payloads to small local models (Ollama) | ❌ No fix PR |

Notably, **none of today's new S1 bugs have corresponding fix PRs**. The #5808 budget issue has been open since April 16 (3 months) without resolution. The MCP memory leak (#8642) is split from a longer-running OOM tracker (#5542) — a system-level concern for production deployments.

Two new bugs filed today:
- **#9017** — `--config-dir` flag is ignored during CLI locale detection (S2 severity)
- **#9019** — OpenAI Responses provider blocks vision before image serialization (S1)

## 6. Feature Requests & Roadmap Signals
Several new feature requests signal where ZeroClaw's user base is pushing:

- **#9022** — *Optional Slack Events API (HTTP Request URL) mode for scale-to-zero deploys* (dakaii). Users want a lightweight HTTP endpoint as an alternative to polling or Socket Mode for serverless deployments. Likely candidate for v0.8.4 given growing serverless interest.
- **#9020** — *Add session rewind and fork-from-message workflows to ZeroCode* (Audacity88). ZeroCode users need recovery from bad turns without starting fresh. High probability for next release given ZeroCode hardening tracker (#9010).
- **#8860** — *Per-Agent In-Flight Prompt Counter on Web Gateway Dashboard* (databillm). Operations teams want real-time visibility into per-agent load across channels. Under progress, likely for v0.8.3 gateway milestone.
- **#8445**, **#8442** — Telegram multi-message mode and Matrix single-message streaming drafts respectively. Channel parity continues to be a community-driven priority.

The **five v0.8.3 trackers** (#8070, #8071, #8360, #8362, #8363) cover runtime execution, gateway/ZeroCode, provider serialization, channel adapters, and config-driven policy — these define the immediate release scope.

## 7. User Feedback Summary
Dissatisfaction signals are emerging around:

- **Memory/stability concerns**: The #5808 budget issue and #8642 unbounded RSS growth affect users with moderate tool definitions — a common use case. Comments indicate frustration with the "perpetual preemptive trim" and WSL2 OOM scenarios.
- **SOP availability**: #8563 reports that configured SOPs are invisible to the agent through the web dashboard, blocking an intended workflow. The user expected StageHand-like behavior but got none.
- **Small model usability**: #8999 with Ollama/llama3.2 reveals ZeroCode's streaming format alienates local models, making them interpret user messages as protocol logs rather than conversation.
- **Documentation gaps**: #7762 highlights that cron documentation is entirely missing from the docs site, and users cannot find how to assign cron jobs to specific models. A clear pain point for operational users.

Positive signals: the community continues contributing actively (tzy-17 with 3 PRs, Nillth with 6+ PRs), suggesting developer satisfaction with the contribution process.

## 8. Backlog Watch
Several long-standing issues continue without adequate maintainer attention:

- **#5808** (3 months open, 8 comments, P1): Default context budget bug blocking first-turn execution. The most critical unresolved issue in the project.
- **#6074** (2.5 months open): Audit tracking 153 commits lost in a bulk revert. Requires careful recovery effort; only 3 comments suggests stalled investigation.
- **#8353** (17 days with `needs-author-action` + `stale-candidate`): PR to improve error messages with unwrap→expect replacement. Low risk but awaiting author response — at risk of being closed stale.
- **#7762** (26 days open): Cron documentation missing. Multiple requests unanswered. With cron being a core runtime feature, this documentation gap is notable.
- **#8655** (10 days, `needs-author-action`): Large ZeroCode refactor (size:XL) consolidating Code pane, rails, and prompt drafts. The refactor touches agent, channel, gateway, and runtime — blocking progress on multiple fronts until resolved.

The **8353** and **8655** PRs are yellow flags: if maintainers do not respond soon, weeks of community contribution risk going stale.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*