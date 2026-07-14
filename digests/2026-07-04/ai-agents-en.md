# OpenClaw Ecosystem Digest 2026-07-04

> Issues: 314 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-04 01:50 UTC

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

# OpenClaw Project Digest — 2026-07-04

## Today's Overview

OpenClaw shows **very high activity** today with 314 issues and **500 pull requests** updated in the last 24 hours. The project remains heavily focused on **stability hardening, security improvements, and consolidation refactoring** — with maintainer-led PRs across abort primitives, HTTP body reads, tool result helpers, and boolean coercion dominating merged/active work. No new releases were issued today, suggesting the team is in a **deep engineering cycle** before cutting the next version. The open/active issue count (222) indicates a substantial maintenance backlog, while the PR pipeline (444 open) reflects sustained, large-scale contributor engagement.

## Releases

**None.** No new releases were published today.

## Project Progress

**Merged/Closed PRs (56 total):** Key merged work includes a fix preserving OpenCode Go DeepSeek V4 max thinking behavior (PR #99637, closed) and several rapid consolidation refactors.

**Active PRs advancing core stability today:**
- **[PR #99753]** — Consolidate abort primitives across core runtime paths (maintainer-led, preventing drift on abort reasons)
- **[PR #99744]** — Consolidate bounded HTTP body reads from media package into transport infrastructure (L-size, ready for maintainer review)
- **[PR #99740]** — Refactor plugin SDK tool result helpers (S-size, 12 plugins touched)
- **[PR #99750]** — Consolidate exact boolean coercion into single contract (S-size)
- **[PR #99742]** — Keep Codex delegation controls directly available, fixing PR #99464 (L-size, ready for maintainer look)
- **[PR #99707]** — Unify live channel QA runtime hosting for Telegram, Slack, WhatsApp, Matrix (L-size)

**Channels/platforms receiving targeted fixes:** macOS launch-at-login plist env preservation (PR #99752), Telegram rich send fallback and typing breaker (PR #99745), WhatsApp list reply actions (PR #83600, re-reviewed), and fetch/install robustness for `@openclaw/llama-cpp-provider` (PR #99751).

## Community Hot Topics

**Most active issues (by comments/reactions):**

| Issue | Comments | 👍 | Summary |
|-------|----------|----|---------|
| [#25592] Text between tool calls leaks | 33 | 1 | **Highest-traffic issue:** Internal processing output routed to Slack/iMessage channels as visible messages. Diamond lobster severity, meaning maintainers consider this critical. |
| [#99551] Codex worker runaway hardening sprint | 14 | 1 | **Tracker issue** for hardening failure modes from incident worker `019f18dc`. Engineers actively spinning up child issues. |
| [#73148] Opaque "Failed to optimize image" | 14 | 3 | **Widespread UX pain** — `sharp` not installed yields opaque error on every image. Undiagnosed by new users. |
| [#10659] Masked Secrets — prevent agent from seeing API keys | 13 | 4 | **Most-liked feature request** — community deeply concerned about credential leakage via prompt injection. |
| [#98416] v2026.6.11 published dist missing reentrancy guard | 11 | 5 | **Most-reacted bug** — published release missing a fix present in source, causing reply session initialization conflicts. Community frustration is palpable. |
| [#12602] Slack Block Kit support | 13 | 0 | **Long-standing feature request** (since February) — agents still stuck with plain text in Slack. |
| [#85714] Agent's final message stranded when LLM forgets delivery tool | 8 | 0 | **Recurring UX issue** — responses silently lost with no fallback delivery from task_complete. |
| [#6615] Denylist support for exec-approvals | 7 | 7 | **Highest-reaction score** among all listed issues — community strongly wants "allow everything except X" policies. |

**Underlying needs:** Community pain clusters around *information leakage* (text leaks, masked secrets, raw API key exposure), *silent failures* (stranded messages, opaque image errors, empty tool outputs), and *lack of rich formatting* (Slack Block Kit, Telegram parse modes, Markdown IRC).

## Bugs & Stability

**P1 (Critical) bugs reported or active today:**

| Issue | Type | Impact | Fix PR? |
|-------|------|--------|---------|
| [#98416] v2026.6.11 dist missing reentrancy guard | **Regression** | Reply session init conflicts, message loss | No new PR yet (reported 2026-07-01, still open) |
| [#98528] Tool output empty after first call (2026.6.11 regression) | **Regression** | All tool calls (exec, web_fetch, web_search) return empty | **CLOSED** — fixed |
| [#97871] Agent --local hangs with Ollama/LM Studio | **Behavior bug** | Infinite hang, capability model run works | **CLOSED** — fixed |
| [#90361] Intermittent `memory_search` "index metadata is missing" | **Regression** | Search/reindex race, locally hotfixed | Linked PR open, waiting on maintainer review |
| [#99241] Tool outputs render as image placeholders | **Behavior bug** | Agent blind to stdout/stderr in ANSI-heavy workflows | No fix PR |
| [#96857] Tool text outputs degrade to `(see attached image)` placeholders | **Behavior bug** | Agent blind to ordinary command output | No fix PR |

**P1 stability bugs (still open, no fix PR):**
- [#92043] 180s compaction timeout fails identically every turn (no partial-progress reuse) — *long-running sessions effectively bricked*
- [#72015] Active-memory blocks replies, QMD boot overloads multi-agent gateways
- [#78562] Repeated tool-loop context overflows cause successive auto-compactions after successful compaction
- [#92241] Gateway holds stale module import paths after update/rollback — messages silently dropped (ERR_MODULE_NOT_FOUND)

**Security bugs (P1, open):**
- [#25592] Text between tool calls leaks to messaging channels (diamond lobster severity)
- [#10659] Masked secrets feature — raw API keys fully accessible, prompt injection risk

**Stability concern:** Multiple diamond-lobster-rated bugs (project's highest severity) have been open for weeks. The compaction timeout bug (#92043, filed June 10) and the tool output degradation bugs (#99241, #96857) represent a **growing class of silent data-loss issues** affecting long-running agent sessions.

## Feature Requests & Roadmap Signals

**Top community feature demands (by reactions/comments):**

| Issue | Feature | 👍 | Comments | Status |
|-------|---------|----|----------|--------|
| [#10659] Masked Secrets | API key protection from agent | 4 | 13 | Waiting on product decision + security review |
| [#6615] Denylist for exec-approvals | "Allow everything except X" | 7 | 7 | Waiting on product decision + security review |
| [#12602] Slack Block Kit | Rich interactive messages | 0 | 13 | Waiting on product decision |
| [#35203] Multi-Agent Enhancement | Capability profiling, shared blackboard, layered memory | 0 | 9 | RFC stage, waiting on product decision |
| [#14785] Reduce tool schema token overhead | ~3,500 tok/session saved | 0 | 8 | Waiting on product decision |
| [#12855] Built-in auto-update | Scheduled updates with confirmation | 0 | 7 | Waiting on security review |

**Likely next-version candidates:** Masked Secrets (#10659) has been open since February and continues to attract strong support — it has security review, product decision, and maintainer review tags already applied. The denylist approval feature (#6615) has the highest reaction score today and similarly advanced tags. **Both could land in the next 1-2 releases.**

**Watch:** The Skill Permission Manifest (#12219) and capability-based permissions (#12678) are complementary proposals that, if accepted, would fundamentally change OpenClaw's security model.

## User Feedback Summary

**Pain points (recurring, high noise):**
1. **Silent reply failures** — Agent forgets to call delivery tool and response is lost (#85714); iOS/WebChat messages appended but never trigger replies (#97983); empty tool outputs after first call (#98528, now fixed)
2. **Configuration opacity** — Opaque errors when `sharp` not installed (#73148); hardcoded 5MB media limit not configurable (#40880); hardcoded Telegram `parse_mode: 'Markdown'` (#10944)
3. **Update/rollback hazards** — Stale module paths after rollback cause silent message drop (#92241); published dist missing commits present in source (#98416)
4. **Multi-agent pain** — No per-agent plugin config (#55401); sub-agent announce cannot be suppressed (#8299); no tool restrictions for spawned sub-agents (#15032)

**Use cases driving demand:**
- **Production deployments on VPS** — safer self-update with backup/rollback (#14526), backup/restore utility (#13616)
- **Enterprise/regulated environments** — masked secrets (#10659), denylist approvals (#6615), skill permission manifests (#12219)
- **Voice and mobile** — streaming TTS pipeline (#8355), Wear OS app (PR #47604), iOS stabilization (PR #50483)

**Satisfaction indicators:** High PR throughput (500 updated today) signals an active, engaged community. Multiple bugs closed within 1-3 days (e.g., #98528, #97871) suggests responsive maintainership. However, the number of diamond-lobster-severity bugs open for weeks (#92043 since June 10, #25592 since February) indicates **structural stability challenges** that may be eroding user confidence for production workloads.

## Backlog Watch

**Issues needing maintainer attention (long-unanswered, high severity):**

| Issue | Age | Severity | Status |
|-------|-----|----------|--------|
| [#25592] Text leaks to messaging channels | **132 days** (Feb 24) | Diamond lobster | Stalled on product decision + security review |
| [#10659] Masked Secrets | **150 days** (Feb 6) | Diamond lobster | Needs maintainer review + product decision |
| [#14785] Reduce token overhead | **144 days** (Feb 12) | Diamond lobster | Needs product decision |
| [#8299] Suppress sub-agent announce | **153 days** (Feb 3) | Diamond lobster | Needs product decision |
| [#9986] Trigger fallback on context exceeded | **151 days** (Feb 5) | Diamond lobster | Needs product decision |
| [#92043] Compaction timeout failure loop | **24 days** (June 10) | Diamond lobster | Linked PR open, needs review |

**Stale issues with active community impact:**
- [#73148] Image tool opaque error (69 days, P2) — received 3 👍 and 14 comments but marked `stale`
- [#55401] Per-agent plugin config (99 days, P2) — 5 comments, waiting on product decision

**Critical PRs stalled:**
- **[PR #58373]** Fix non-main agent bootstrap (`Unknown model` after `agents.create`) — **95 days open**, waiting on author despite having `proof: sufficient`
- **[PR #56904]** Add guard delivery and subagent review hooks — **97 days open**, waiting on author despite having `maintainer` attention
- **[PR #50483]** iOS chat streaming stabilization — **107 days open**, needs proof

**Maintainer availability concern:** 4 of the top-10 most-commented issues have been awaiting product decision for 69–153 days. The diamond lobster backlogs suggest the project may benefit from **delegating product decisions** or **narrowing the scope** of the next release to clear these blocking items.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Open-Source Ecosystem
**Analysis Date:** 2026-07-04

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape is experiencing an intense development cycle, with seven of eleven tracked projects showing high or very high daily activity. The ecosystem is bifurcating into two tiers: large reference implementations (OpenClaw, IronClaw, ZeroClaw) with 50+ daily PRs and deep architectural work, and smaller specialized agents (NanoBot, PicoClaw, NanoClaw) focusing on platform integration reliability. A shared industry-wide push toward production hardening is evident—projects are prioritizing memory system integrity, credential security, cross-platform stability, and MCP tool reliability over new feature velocity. The community is increasingly deploying these agents for continuous operation on VPS and container infrastructure, driving demand for self-healing connections, graceful degradation, and secure secret management.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Today | Activity Level | Health Signal |
|---------|-------------|-----------|---------------|----------------|---------------|
| **OpenClaw** | 314 updated | 500 updated | None | 🔴 Very High | Hardening cycle; 444 open PRs indicate massive contributor engagement |
| **IronClaw** | 33 updated | 50 updated | None | 🔴 Very High | CI red on main; deep Reborn migration; 28 PRs merged |
| **ZeroClaw** | 36 updated | 50 updated | None | 🔴 Very High | Sprint toward v0.8.3; SOP/goal-mode features advancing |
| **Hermes Agent** | 50 updated | 50 updated | None | 🟡 High | Healthy issue/PR ratio; platform-specific bug fixes dominate |
| **NanoBot** | 29 updated | 38 updated | None | 🟡 High | Provider integration (Anthropic OAuth, OpenCode); memory issues |
| **PicoClaw** | — | 17 updated | v0.3.1 | 🟡 Moderate | Messaging channel reconnection fixes; Android blocker |
| **NanoClaw** | 1 new | 17 updated | None | 🟡 Moderate | New channels (LINE, Delta Chat); DB leak fix |
| **CoPaw** | 25 closed | 15 closed | None | 🟡 High (declining) | Sprint to close technical debt; v2.0 context bugs |
| **LobsterAI** | 1 closed | 16 updated | v2026.7.3 | 🟡 Moderate | Cowork module hardening; macOS crash fixed |
| **NullClaw** | 1 updated | 0 | None | 🟢 Low | Stagnant; sole Telegram idle-disconnect bug |
| **TinyClaw** | 0 | 0 | None | ⚫ None | Zero activity |
| **Moltis** | 0 | 0 | None | ⚫ None | Zero activity |
| **ZeptoClaw** | 0 | 0 | None | ⚫ None | Zero activity |

**Health Definitions:** Very High (50+ daily updates across both dimensions), High (30-50), Moderate (10-30), Low (<10), None (0)

---

## 3. OpenClaw's Position

**Advantages over peers:**
- **Community scale**: 500 PRs/day and 314 issues/day—3-10x larger than any peer. The 444 open PRs indicate a contributor base that rivals mid-size commercial projects.
- **Platform breadth**: 12+ messaging channels receiving targeted fixes (Telegram, Slack, WhatsApp, Matrix, IRC) vs. 3-5 for most peers.
- **Stability infrastructure**: Diamond-lobster severity classification, structured hardening sprints, and consolidation refactors across core primitives (abort, HTTP, boolean coercion).

**Technical approach differences:**
- OpenClaw uses a **monolithic core with plugin SDK** architecture, contrasting with ZeroClaw's WASM plugin program and IronClaw's crate-based Reborn migration.
- Maintainer-led consolidation PRs (abort primitives, HTTP transport, boolean coercion) suggest a top-down architecture discipline absent in smaller projects like NanoClaw or PicoClaw.

**Community size comparison:**
- OpenClaw's 444 open PRs dwarf IronClaw's 43 open PRs and ZeroClaw's 44 open PRs.
- However, three dormant projects (TinyClaw, Moltis, ZeptoClaw) suggest ecosystem churn—projects that fail to maintain pace may be abandoned.

**Vulnerability**: Despite scale, OpenClaw has the most diamond-lobster-severity bugs open for weeks (#92043 since June 10, #25592 since February), indicating that volume alone doesn't guarantee production readiness.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging **independently across multiple projects**, indicating deep industry needs:

| Focus Area | Affected Projects | Specific Need |
|------------|------------------|---------------|
| **Credential/Secret Security** | OpenClaw (#10659), Hermes (#48441), CoPaw (#5705), ZeroClaw (#8645) | Prevent prompt injection from exposing API keys; sanitize logs; isolate credentials across gateway profiles |
| **Memory & Context Reliability** | OpenClaw (#25592, #92043), NanoBot (#4044), CoPaw (#5746), ZeroClaw (#8642) | Prevent information leakage between turns; fix compaction failures; avoid unbounded growth |
| **MCP Tool Reliability** | NanoBot (#4652), Hermes (#57905), ZeroClaw (#7756, #8642), NanoClaw (#2917) | Handle empty/error returns gracefully; fix memory leaks; propagate tools correctly |
| **Platform-Specific Stability** | Hermes (Windows), CoPaw (Windows GBK #4481), ZeroClaw (74 Windows failures #7462), PicoClaw (Android #3182) | Cross-platform CI; encoding fixes; process management on non-Linux |
| **Self-Healing Connections** | PicoClaw (WhatsApp #3178, Matrix #3219), NullClaw (Telegram #972), Hermes (#5763) | Reconnect logic for long-running messaging channels; avoid silent disconnection |
| **Multi-Agent Orchestration** | OpenClaw (#35203), NanoBot (#4179), PicoClaw (#2937), LobsterAI (Cowork) | Agent-to-agent collaboration, sub-agent session management, capability routing |
| **Rich Message Formatting** | OpenClaw (Slack Block Kit #12602, Telegram parse modes), Hermes (#57928) | Move beyond plain text; support interactive elements in chat platforms |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | ZeroClaw | NanoBot | CoPaw | LobsterAI |
|-----------|----------|----------|----------|---------|-------|-----------|
| **Target User** | Power users, self-hosters | Enterprise/production | Developer-centric | CLI/TUI power users | Desktop + enterprise | Asian market teams |
| **Architecture** | Monolithic + plugin SDK | Crate-based (Reborn) | WASM plugin program | Modular provider system | Plugin+memory focused | Electron desktop app |
| **Key Feature** | Platform breadth | Identity layer, OAuth | SOP engine, goal mode | OpenCode, Anthropic OAuth | Memory reranker | Cowork goal mode |
| **Release Cadence** | Frequent (no release today) | Active cycle (CI red) | Sprint to v0.8.3 | Provider-driven | v2.0 beta issues | Stable patch v2026.7.3 |
| **Primary Language** | TypeScript/Go | Rust | Rust | TypeScript | Python | TypeScript (Electron) |
| **Community Engagement** | Massive (500 PRs/day) | High (50 PRs/day) | High (50 PRs/day) | High (38 PRs/day) | Declining | Moderate (16 PRs) |
| **Risk Profile** | Scale risks (diamond lobsters open) | Reborn cutover blockers | Windows CI gap | Memory architecture flaws | v2.0 context regression | Stale PRs (3 months) |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly Iterating (50+ daily PRs):**
- **OpenClaw**: Highest raw activity but accumulating structural debt (444 open PRs, diamond lobsters stale for months). The ecosystem's busiest project, but velocity may be outpacing stability.
- **IronClaw**: Deep architectural migration (Reborn) with CI failures blocking merges. High risk/high reward—once Reborn stabilizes, it could leapfrog peers.
- **ZeroClaw**: Most disciplined of the three—sprint toward v0.8.3 with clear targets, immediate fix PRs for critical bugs. Strongest signal of maturity.

**Tier 2 — Actively Stabilizing (15-50 daily PRs):**
- **NanoBot**: Responsive maintainers (6 PRs merged today), but memory architecture flaws (#4044) threaten long-running session reliability.
- **Hermes Agent**: Healthy issue/PR ratio; platform-specific bugs (Windows, Docker) suggest maturing but fragmented deployment base.
- **CoPaw**: Declining activity (previously higher; 25 issues *closed* today suggests debt-clearing). v2.0 beta instability may be losing contributors.
- **LobsterAI**: Most "shipped" project—actual release v2026.7.3 today. Stable but slower velocity. Cowork module is its differentiator.

**Tier 3 — Low Activity / At Risk:**
- **PicoClaw**: Active but small (17 PRs). Android blocker (#3182) unaddressed for 8 days.
- **NanoClaw**: Growing PR backlog (7+ PRs over 2 months old). New features (LINE, CalDAV) suggest ambition exceeding bandwidth.
- **NullClaw**: Single bug report, zero PRs. Project may be maintained in survival mode.
- **TinyClaw, Moltis, ZeptoClaw**: No activity. These projects are effectively frozen and should be considered abandoned unless revived.

---

## 7. Trend Signals for AI Agent Developers

**1. Production deployments demand self-healing infrastructure.** Multiple projects report silent disconnections on messaging channels (WhatsApp, Telegram, Matrix) after 2-3 days of operation. Developers deploying agents on VPS or Docker need built-in reconnection logic with exponential backoff—not manual restart.

**2. Memory management is the #1 architectural challenge.** Every active project has open bugs related to context loss, compaction failures, token overflow, or cross-turn information leakage. The ecosystem has not yet converged on a standard approach; expect fragmentation until a reference implementation proves robust at production scale.

**3. Security is shifting from "optional" to "blocker."** Masked secrets, credential isolation across gateway profiles, OIDC authentication, and prompt-injection defenses are the highest-voted feature requests across projects. The trend suggests enterprise adoption is imminent, and projects without these features will be excluded from regulated environments.

**4. MCP tool integration quality varies widely.** Bugs in tool-call argument validation (ZeroClaw), empty returns (NanoBot), memory leaks (ZeroClaw), and propagation failures (Hermes) indicate that MCP, while popular, is not yet a reliable abstraction layer. Developers should budget for MCP-related debugging.

**5. Cross-platform parity is a growing pain point.** Windows users are second-class citizens across Hermes, CoPaw, ZeroClaw, and CoPaw (GBK encoding). Android deployment is blocked in PicoClaw. The mainline Linux-first development model is creating adoption barriers for non-Linux users.

**6. Rich formatting is the next UX frontier.** Slack Block Kit, Telegram parse modes, and Markdown IRC are long-standing requests across OpenClaw and Hermes. As agents move from chat toys to productivity tools, the ability to present formatted output (tables, buttons, structured layouts) becomes critical.

**7. Agent-to-agent orchestration is speculative but trending.** A2A architectures appear in multiple RFCs and feature requests (OpenClaw #35203, NanoBot #4179, PicoClaw #2937) but none have shipped production code. The community is sensing the need but the implementations are 3-6 months away.

**Recommendation for developers choosing a platform:**
- **For maximum community support and platform breadth**: OpenClaw (but budget for stability overhead)
- **For production/enterprise deployments**: IronClaw or ZeroClaw (more disciplined architecture, Rust-based reliability)
- **For rapid prototyping and CLI/TUI workflows**: NanoBot (responsive maintainers, fast iteration)
- **For desktop-first Asian market users**: LobsterAI (stable releases, Cowork module)
- **Avoid**: NullClaw, TinyClaw, Moltis, ZeptoClaw (no activity → support risk)

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project digest for **NanoBot** (github.com/HKUDS/nanobot) for **2026-07-04**.

---

## NanoBot Project Digest – 2026-07-04

### 1. Today's Overview
The project is experiencing **high activity** (29 Issues, 38 PRs updated in 24h), driven largely by the integration of new providers (Anthropic OAuth, OpenCode) and systematic stability fixes. The maintainer team is highly responsive, merging 6 PRs and closing 2 Issues today. The community is deeply engaged with complex memory architecture issues, indicating a user base pushing the tool toward production-grade reliability.

### 2. Releases
**No new releases** were published today. The project remains on the previous tagged version.

### 3. Project Progress
**6 PRs were merged/closed today**, advancing several key areas:
- **Provider & Model Support**:
  - **PR #4687** (merged): Updated the Anthropic default model from `claude-sonnet-4-20250514` to `claude-sonnet-4-6`, fixing stale defaults across the codebase.
  - **PR #4685** (merged): Fixed the Anthropic temperature parameter for `claude-sonnet-5` models, which were causing API 400 errors.
  - **PR #4632** (merged): Added a new **Anthropic OAuth provider**, enabling Claude subscription users to connect without an API key.
- **CLI & Plugin System Polish**:
  - **PR #4691** (merged): Polished optional feature controls, adding graceful warnings for missing dependencies and improving recovery paths.
  - **PR #4688** (merged): Added a safe first-run `nanobot webui` launcher with config/workspace validation.
- **Configuration**:
  - **PR #4132** (not shown in top 20 but noted as closed): Fixed the `modelPresets` serialization consistency.

### 4. Community Hot Topics
The most active discussions reveal a focus on **memory reliability and session continuity**:

- **Issue #4044** – *Short term memory loss* (6 comments): Deeply discussed root cause analysis identifying context window pressure and consolidation logic flaws. A fix PR (#4280) is now open, addressing message history preservation.
- **Issue #4061** – *OpenAI-compatible text-format tool calls* (6 comments): Users report that some providers emit tool calls as plain text instead of structured JSON, causing tool dispatch failures. No fix PR exists yet.
- **Issue #3846** – *Keep skill content in multi-turn conversations* (5 comments, 👍1): Proposes keeping `skill.md` definitions in context across turns rather than relying on `read_file` each time. Signals a desire for more persistent context.

**Key insight**: The community is demanding that NanoBot handle long, complex workflows without "forgetting" context or losing tool definitions.

### 5. Bugs & Stability
Several bugs were reported or resolved today, ranked by severity:

| Severity | Issue/PR | Description | Status |
| --- | --- | --- | --- |
| **Critical** | #4652 | Nanobot crashes when MCP tool call returns error/empty data | Open; **Fix PR #4666** submitted |
| **High** | #4511 | `--background` flag on Windows produces stale process info after restart | Open |
| **High** | #4302 | Gateway crashes after MCP reconnect (Windows) | Open; linked to #4211 |
| **Medium** | #4683 (CLOSED) | `claude-sonnet-5` temperature parameter causes 400 errors | **Fixed in PR #4685** |
| **Medium** | #4675 (CLOSED) | Stale default model for Anthropic/OAuth providers | **Fixed in PR #4687** |
| **Low** | #4307 | Post-turn consolidation wipes agent's delivery message | Open; root cause identified |

**Stability signal**: The MCP-related crash (#4652) is the most critical unresolved issue, with a targeted fix (PR #4666) under review.

### 6. Feature Requests & Roadmap Signals
The following features are likely candidates for the next minor version:

- **Native Agent-to-Agent (A2A) Orchestration** (Issue #4179, 👍1): Request for a Supervisor → Researcher → Writer multi-agent team architecture. High complexity but strong community interest.
- **`search_history` read-only tool** (Issue #4440, PR #4439, 👍1): Proposed tool to query `memory/history.jsonl` without loading it into context. The PR (#4439) is already open, making this a high-probability inclusion.
- **Heartbeat model override** (Issue #4431): Request to run heartbeat on a cheaper/dedicated model. A related PR (#4620) adds a trigger command, suggesting this is being designed.
- **`ask_clarification` tool** (Issue #4508): A tool to end the turn with a focused question when input is ambiguous. No PR yet, but common in advanced agents.

**Prediction**: The **A2A orchestration** and **search_history** features represent the biggest architectural signals for the next release.

### 7. User Feedback Summary
Real user pain points expressed in today's data:

- **Memory Friction**: "Nanobot asks a question, you answer, and it has no memory of asking" (#4044). Users report the system feels "snapped" between turns.
- **Windows Pain**: Multiple open bugs (#4511, #4302) specifically affect Windows users, including process management and MCP reconnect crashes.
- **Customization Limits**: Users want to run multiple instances from a single machine with per-folder config (#4390), customize sandbox mounts (#4107), and avoid duplicate skill creation by the Dream system (#4467).
- **Authentication UX**: Users want OAuth token expiry warnings (#4689 PR) and a diagnostic `nanobot doctor` command (#3769) to simplify setup troubleshooting.

**Satisfaction signal**: The overall tone is constructive—users report bugs clearly and propose workarounds, indicating a **highly engaged and technically sophisticated user base** that sees long-term value in the project.

### 8. Backlog Watch
The following important issues/PRs have been open for **more than 30 days** without resolution or maintainer reply:

| Issue/PR | Age (days) | Title | Notes |
| --- | --- | --- | --- |
| **#3744** | 54 | Session-level MEMORY for multi-IM users | Unanswered; concerns fundamentally how `USER.md`/`MEMORY.md` work across shared agents. |
| **#3626** | 60 | Telegram long polling silently hangs | No fix or workaround from maintainers. Critical for Telegram channel reliability. |
| **#3769** | 52 | `nanobot doctor` diagnostic command | Feature request with no maintainer acknowledgment. |
| **#3958** | 43 | Weather Skill - move to example folder | Minor but unresolved direction on skill organization. |
| **#3973** | 42 | Dream System: Hunger Problem & lack of real-time learning | Architecture critique of the Dream system with no response. |

**Recommendation**: Issue **#3744** (multi-user memory) and **#3626** (Telegram hanging) are the most important backlog items requiring maintainer prioritization.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-04

## Today's Overview

The Hermes Agent project shows **very high activity** today with 50 issues and 50 pull requests updated in the last 24 hours, indicating a vibrant development cycle. The project maintains a healthy ratio of open to closed work items (47 open vs. 3 closed issues; 43 open vs. 7 merged/closed PRs). Activity is heavily concentrated around **security hardening, session state correctness, and platform-specific bugs** (Windows, Docker), as well as ongoing feature work on achievements and OAuth reliability. No new releases were published today; the project appears to be between stable versions.

## Releases

No new releases were published today.

## Project Progress

**7 pull requests were merged or closed today**, including:

- **[PR #58012 (CLOSED)](https://github.com/NousResearch/hermes-agent/pull/58012)** — `feat(achievements): add export endpoint and agent summary (#18472)` — Implements the export & agent-communication workstream for achievements, adding an API endpoint and agent-facing summary
- **[PR #57999 (CLOSED)](https://github.com/NousResearch/hermes-agent/pull/57999)** — `feat(telegram): add external callback handlers` — Adds prefix-based callback_data dispatch to local scripts for Telegram
- **[PR #56074 (CLOSED)](https://github.com/NousResearch/hermes-agent/pull/56074)** — `fix: reset in-memory _openrouter_catalog_cache on /model --refresh` — Fixes stale OpenRouter model catalogs persisting after explicit refresh
- **[PR #51592 (CLOSED)](https://github.com/NousResearch/hermes-agent/pull/51592)** — `fix(docker): avoid overlayfs copy-up storm in chmod/chown` — Reduces Docker build time by avoiding three redundant recursive permission passes on `/opt/hermes`
- **[Issue #57909 (CLOSED)](https://github.com/NousResearch/hermes-agent/pull/57909)** — `"WARNING gateway.run: No adapter available for telegram"` — A Telegram adapter availability bug that appeared after `hermes update`, now resolved

## Community Hot Topics

**Most active discussions (by comment count):**

- **[Issue #12058](https://github.com/NousResearch/hermes-agent/issues/12058)** — `[Bug]: OpenAI Codex OAuth works in CLI, but Telegram gateway replies "No Codex credentials stored"` (5 comments, opened 2026-04-18). A persistent, multi-month gateway-specific auth issue where Codex credentials work in CLI but fail in Telegram/Discord/docker deployments. This suggests a **credential scoping problem** between gateway processes and CLI sessions.
- **[Issue #48441](https://github.com/NousResearch/hermes-agent/issues/48441)** (CLOSED) — `[Security] Terminal session snapshots leak .env secrets to disk in plaintext` (5 comments, 1👍, closed today). A **highly sensitive security bug** where terminal snapshot mechanism writes all environment variables (including secrets) to plaintext `cache/terminal/hermes-snap-*.sh` files.
- **[Issue #12188](https://github.com/NousResearch/hermes-agent/issues/12188)** — `[Feature]: Setting hermes model config/settings inside Docker compose as env variables` (5 comments, 2👍). Users want to configure model settings purely via Docker Compose environment variables without needing `docker exec`.

**Underlying needs:** Users are demanding **better credential isolation** across gateway platforms, **secure secret handling** that doesn't leak to disk, and **fully Docker-native configuration** for headless/containerized deployments.

## Bugs & Stability

### Critical/High Severity (P1)

- **[Issue #58010](https://github.com/NousResearch/hermes-agent/issues/58010)** — `AsyncSessionDB breaks /resume — missing await in slash_commands.py` — **NEW today.** `/resume` crashes with `TypeError: 'coroutine' object is not subscriptable` because `slash_commands.py` was never updated to `await` async SessionDB calls. Flagged as `duplicate`.
- **[Issue #57909](https://github.com/NousResearch/hermes-agent/issues/57909)** (CLOSED) — `"WARNING gateway.run: No adapter available for telegram"` — P1 regression after `hermes update`, now closed.
- **[Issue #12058](https://github.com/NousResearch/hermes-agent/issues/12058)** — Codex OAuth works in CLI but not in Telegram/Discord gateways — **long-standing P1** (since April 2026).
- **[Issue #54675](https://github.com/NousResearch/hermes-agent/issues/54675)** — `Multiplexed gateway: platform bot tokens resolved via os.getenv bypass per-profile secret scope` — **Security boundary bug** where multiplexed profiles all authenticate with the default profile's token.
- **[Issue #57928](https://github.com/NousResearch/hermes-agent/issues/57928)** — `file attachment broken` — When a file is attached to a Telegram message with a slash command, the attachment is silently dropped (P2, flagged `sweeper:risk-message-delivery`).

### Medium Severity (P2)

- **[Issue #57905](https://github.com/NousResearch/hermes-agent/issues/57905)** — `computer_use ignores cua-driver 0.7.0 data.windows output` on Windows — Fixed by PR #58008 today (delete read-only `.git` files).
- **[Issue #57911](https://github.com/NousResearch/hermes-agent/issues/57911)** — `Desktop sessions land in wrong project with remote gateway` — Sessions created globally land in unexpected project workspaces.
- **[Issue #57903](https://github.com/NousResearch/hermes-agent/issues/57903)** — `async LLM calls block the desktop WebSocket loop via busy-poll` — Implemented in draft PR #57933.
- **[Issue #57563](https://github.com/NousResearch/hermes-agent/issues/57563)** — Multiplex credential isolation and cron scheduler thread safety fixes — addressed in PR #57563.

### Lower Severity (P3)

- **[Issue #57968](https://github.com/NousResearch/hermes-agent/issues/57968)** — `Desktop: flat "Sessions" list missing from sidebar after update` (Windows v0.18.0).
- **[Issue #57967](https://github.com/NousResearch/hermes-agent/issues/57967)** — `hermes kanban create` reports success but row never lands in DB (silent commit failure under gateway contention).
- **[Issue #57986](https://github.com/NousResearch/hermes-agent/issues/57986)** — `/journey crashes when a skill's frontmatter metadata is not a dict`.
- **[Issue #57949](https://github.com/NousResearch/hermes-agent/issues/57949)** — `Langfuse SDK plugin: placeholder API key silent failure` — No traces emitted, no errors raised.

**Fix PRs were submitted today** for several bugs, including OAuth token TOCTOU (#58006), MCP git cleanup on Windows (#58008), self-healing venv after failed update (#58004), and SQLite busy timeout increase from 1s to 30s (#58003).

## Feature Requests & Roadmap Signals

**Most prominent new features requested:**

1. **[#40173](https://github.com/NousResearch/hermes-agent/issues/40173)** — `channel_profiles: route Telegram chats to different Hermes profiles in one gateway` (3👍) — Users want one Telegram bot to serve multiple agent personalities per chat. **Likely roadmap priority** given `multiplex_profiles` is already under development.

2. **[#50668](https://github.com/NousResearch/hermes-agent/issues/50668)** — `Telegram cron delivery should optionally create a fresh DM topic per execution` — Addresses a UX gap where cron output lands in random topics.

3. **[#46337](https://github.com/NousResearch/hermes-agent/issues/46337)** — `Add UI for Custom Local STT/TTS and Local Media Generation Providers in Hermes Desktop` — Desktop GUI lacks configuration for local speech/image providers.

4. **[#57973](https://github.com/NousResearch/hermes-agent/issues/57973)** — `Expose privacy-safe per-model MoA usage accounting` — Users want granular cost breakdown per underlying model, not just MoA preset names.

5. **[#31776](https://github.com/NousResearch/hermes-agent/issues/31776)** — `Expose multi-bank routing for Hindsight memory tools` — Advanced memory management for different context banks.

6. **[#524](https://github.com/NousResearch/hermes-agent/issues/524)** — `Agent Migration System: Auto-Detect & Import Settings from Claude Code, Codex, Gemini CLI, Cursor, Aider, Roo Code & Others` (1👍, opened March 2026) — A strategic feature for user acquisition, but has seen no progress.

**Prediction:** The `/achievements` export work merged today (#58012), the channel_profiles gateway feature (#40173), and secrets management tool (#3651, PR open since March) are strong candidates for the next minor version.

## User Feedback Summary

**Pain Points:**
- OAuth credential isolation failures between CLI and gateway platforms are causing **repeated user frustration** (Issues #12058, #54675, #48534).
- Docker/containerized deployment users find configuration **undocumented and non-intuitive** (#12188).
- Desktop app stability regressions: missing sidebar after update (#57968), session routing to wrong projects (#57911), flashing terminal windows on Windows (#56747).
- Cron job tooling bugs are impacting automated workflows (MCP tools not attached to cron sessions #57861, kanban commit failures #57967).

**Satisfaction signals:**
- Active community engagement with 50+ daily contributions across issues and PRs.
- Users are actively submitting **well-documented bug reports with reproduction steps** (see #57903, #57911, #57986).
- Multiple users submitting PRs (Que0x, AlexFucuson9, abhi-0203, HexLab98) indicates a healthy contributor community.

**Friction:** New users face authentication setup failures with Anthropic OAuth (#48534, #6347), and the `hermes doctor` tool provides misleading diagnostics (falsely reports Mem0 API key missing in OSS mode, #57931).

## Backlog Watch

**Long-unanswered issues needing maintainer attention:**

- **[Issue #524](https://github.com/NousResearch/hermes-agent/issues/524)** — `Agent Migration System from Claude Code, Codex, etc.` — Opened **2026-03-06**, 4 months ago. **124 days unanswered.** A potentially high-value feature for user onboarding but shows no maintainer engagement.

- **[Issue #12058](https://github.com/NousResearch/hermes-agent/issues/12058)** — Codex OAuth gateway failure — Opened **2026-04-18** (77 days ago). Still open despite being **P1** severity. Comments suggest maintainers are aware but no fix PR exists.

- **[PR #3651](https://github.com/NousResearch/hermes-agent/pull/3651)** — `feat(secrets): add phase 1 secrets tool and redaction hardening` — Opened **2026-03-29** (97 days open). A substantial feature PR with security implications that has received no merge activity. With the recent terminal snapshot credential leak bug (#48441), this PR's secret management functionality is increasingly urgent.

- **[Issue #6347](https://github.com/NousResearch/hermes-agent/issues/6347)** — Anthropic OAuth refresh gets Cloudflare 403 — Opened **2026-04-09** (86 days, P2). A related follow-up to the now-closed #6346, but the core OAuth refresh path remains broken.

- **[Issue #17790](https://github.com/NousResearch/hermes-agent/issues/17790)** — Make Discord voice inactivity timeout configurable — Opened **2026-04-30** (65 days). A small configuration change, likely low effort but not yet prioritized.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-04

## Today's Overview
PicoClaw saw moderate activity today with 17 pull requests updated in the last 24 hours, signaling a productive development cycle focused on stability improvements for messaging integrations. Five PRs were merged or closed, while 12 remain open with active review. Two long-standing bugs remain open but have received no maintainer response in over a week. A new patch release, v0.3.1, was issued, though its changelog appears sparse and possibly incomplete. Overall project health is stable, with a clear emphasis on hardening WhatsApp, Matrix, and Discord channels against disconnection issues.

## Releases
**v0.3.1 released** — A minor patch version. The public changelog includes only merge commit references and lacks user-facing descriptions of changes. Based on merged PRs, this release likely includes fixes for web search provider error handling (`#3128`) and sub-turn message deduplication (`#3142`). No breaking changes or migration notes have been documented. Users upgrading from v0.3.0 should expect a safe patch update.

## Project Progress
Five PRs were merged or closed in the last 24 hours:

- **#3223 (closed)** — `fix(agent): clear routed agent session` — Closed in favor of #3224, which remains open with the actual fix.
- **#3128 (closed)** — `fix(web): explicitly ignore resp.Body.Close() errors` — Cleaned up lint warnings in four search provider functions (Bing, Tavily, Sogou, Perplexity).
- **#3142 (closed)** — `fix(spawn): clear ForUser in sub-turn ToolResult` — Fixes duplicate message delivery when async sub-agents complete, a real user-facing bug.
- **#3156 (closed)** — `feat(pico): emit per-turn LLM token usage` — Adds token consumption tracking per message over the Pico channel, useful for downstream billing or monitoring.
- **#3063 (closed)** — `feat: add deltachat gateway` — A substantial new feature adding Delta Chat as a communication channel.

Feature advancement: The long-running **Agent Collaboration Bus PR (#2937)** has been open since May 24 and continues to receive updates, suggesting it remains a priority but is undergoing significant review.

## Community Hot Topics
Two issues dominate community attention, both stale with no maintainer response:

- **#3182 — [BUG] Android version** (2 comments) — User cannot launch the Android service despite granting full permissions. Screenshots show a settings path issue. This is a potentially critical blocker for Android users. *Link: [Issue #3182](https://github.com/sipeed/picoclaw/issues/3182)*

- **#3178 — [BUG] WhatsApp Websocket Timeout** (1 comment) — User on v0.2.9 reports WhatsApp connections fail when using websocket bridges with scheduled tasks in Docker. *Link: [Issue #3178](https://github.com/sipeed/picoclaw/issues/3178)*

Both issues have been open since June 26 and received their last update on July 3, but lack any maintainer acknowledgment.

## Bugs & Stability
**High severity:**
- **WhatsApp websocket silent disconnection** — Multiple PRs (#3179, #3220) from different contributors independently identified that WhatsApp websocket connections die silently after 2-3 days with no reconnection logic. Fixes are in review: #3220 implements exponential backoff reconnection; #3179 restructures the read loop and adds ping/pong handlers.
- **Android service launch failure** — Issue #3182 remains unaddressed. No fix PR exists.

**Medium severity:**
- **Matrix sync loop death** — PR #3219 fixes a bug where Matrix sync exits permanently on any network disruption or homeserver restart, with no recovery mechanism and no systemd trigger.
- **Config migration regression** — PR #3218 fixes a false `unknown field(s): build_info` error that blocks v2→v3 configuration migration for users on v0.2.5+.
- **Routed agent /clear bug** — PR #3224 fixes `/clear` clearing the wrong agent's session when multiple agents are configured.

**Low severity:**
- **Sub-turn duplicate messages** — Fixed in #3142 (now merged). Spawned sub-agents were sending messages twice via independent push paths.

## Feature Requests & Roadmap Signals
Several features are in active development:

- **Delta Chat gateway** (#3063, merged) — Adds a new email-based messaging channel, expanding PicoClaw's platform reach.
- **Simplex channel** (#3193, open) — Adds yet another privacy-focused messaging protocol.
- **Configurable model fallback chains** (#3200, open) — A highly requested web UI feature allowing users to set and reorder fallback model chains with persistence.
- **Role-based access control for Discord** (#3217, open) — Introduces `allow_roles` field to limit bot interaction to users with specific server roles, without requiring privileged intents.
- **Agent Collaboration Bus** (#2937, open) — This long-running PR introduces inter-agent mailboxes and structured collaboration threads. If merged in the next version, it would be the most significant architectural change in recent months.

Likely candidates for next release: The WhatsApp/Matrix reconnection fixes, Discord RBAC, and the model fallback chain feature all have high user impact and are in active review.

## User Feedback Summary
- **WhatsApp reliability is the top pain point** — Multiple users report the service silently disconnecting after days of operation, requiring manual restart. The community has stepped up to author fixes (two competing PRs exist).
- **Android users face a launch blocker** — One user reports inability to start the service at all on Android, with no workaround documented. This affects mobile deployment scenarios.
- **Configuration migration friction** — Users upgrading from v0.2.5 to v0.3.x may encounter an obscure validation error that blocks the migration. A fix PR (#3218) is under review.
- **Multi-agent setup clarity** — The `/clear` command bug in multi-agent configurations caused confusion, but a fix is nearing merge.

## Backlog Watch
- **#3182 — Android version bug** (created June 26, no maintainer response in 8 days) — This is the most critical unattended issue. No PR exists. An urgent blocker for Android adoption.
- **#3178 — WhatsApp Websocket Timeout** (created June 26, no maintainer response) — Describes a reliable reproduction with Docker and scheduled tasks. Multiple related PRs exist but issue itself lacks triage.
- **#2937 — Agent Collaboration Bus** (open since May 24, 40+ days) — A massive feature PR with no merge in sight. Risk of stagnation; maintainers should provide status update.
- **#3165 — Seed XML tool call recovery** (open 10 days, no merge) — Fixes tool call compatibility with Volcengine Doubao API. Important for users of that provider.

*Note: All issue/PR links assume the base URL `https://github.com/sipeed/picoclaw/` followed by the item type and number.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-04

## Today's Overview

Project activity remains moderate-to-high with 17 pull requests updated in the last 24 hours, though only 2 have been merged/closed. One new issue was filed, bringing open issue count to 1. No new releases were published. The overall project health appears stable, with the team primarily focused on bug fixes across polling, messaging channels, and MCP transport, alongside new channel integration (LINE) and skill additions (Google Contacts, system digest, CalDAV). The pull request backlog continues to grow, with several long-standing open PRs still awaiting review or merge.

## Releases

No new releases were published in the last 24 hours.

## Project Progress

Two pull requests were merged or closed today:

- **#2765 [CLOSED]** — `feat(providers): add .format-lint-off` (author: amit-shafnir). A feature addition to support a lint-format scoping mechanism in provider configurations. ([PR link](https://github.com/nanocoai/nanoclaw/pull/2765))
- **#2330 [CLOSED]** — `fix(container): make axios MCP servers work through OneCLI's proxy` (author: Tij8i). Resolves a silent breakage where axios v1.x HTTPS proxy support fails with OneCLI's CONNECT-only gateway, causing auth injection failures. ([PR link](https://github.com/nanocoai/nanoclaw/pull/2330))

Key features and fixes that advanced via open PRs include: a new LINE Official Account channel adapter (#2918), Google Contacts tool skill (#2693), system digest skills (#2863), CalDAV tool support (#2530), and numerous Signal channel fixes (#2694, #2695).

## Community Hot Topics

No issues or PRs exhibit significant community discussion (comments count is undefined or zero across all items). The most notable open conversations revolve around:

- **Issue #2917** — "Local model as primary agents pay full MCP tool-schema token cost regardless of backend" — Reports a ~27k token overhead per request when using a local model (Gemma4:31B) as the orchestrating agent. This is a critical performance concern for users deploying local models as primary agents. ([Issue link](https://github.com/nanocoai/nanoclaw/issues/2917))

- **PR #2184** — Long-running (since May 2) poll-loop fix addressing stale session handling. No comments from maintainers visible. ([PR link](https://github.com/nanocoai/nanoclaw/pull/2184))

The lack of visible comment threads may indicate either low community engagement or that discussion is occurring off-platform.

## Bugs & Stability

**Critical:**
- **Issue #2917** — Local model agent overhead: Full MCP tool schema (~27k tokens) sent on every request regardless of backend. This is a performance regression for local model users, significantly increasing latency and cost. No fix PR exists yet. ([Issue link](https://github.com/nanocoai/nanoclaw/issues/2917))

**High:**
- **PR #2920** — `fix: DB connection leak in container restart, stale docs, duplicate script` — openInboundDb() not closed after checking pending messages, causing file descriptor leaks on each container restart check. Also includes stale docs referencing removed env vars. Fix PR is open. ([PR link](https://github.com/nanocoai/nanoclaw/pull/2920))

**Medium:**
- **PR #2694** — Signal adapter missing `isMention`/`isGroup` flags causes inbound DMs to be silently dropped. Fix PR open. ([PR link](https://github.com/nanocoai/nanoclaw/pull/2694))
- **PR #2695** — Signal adapter emits host attachment paths inaccessible from container. Fix PR open. ([PR link](https://github.com/nanocoai/nanoclaw/pull/2695))
- **PR #2531** — Duplicate text output when `send_message` fires mid-turn in poll loop. Fix PR open. ([PR link](https://github.com/nanocoai/nanoclaw/pull/2531))
- **PR #2349** — Mount security allowlist entries missing `path` field cause crashes. Fix PR open. ([PR link](https://github.com/nanocoai/nanoclaw/pull/2349))

**Low:**
- **PR #2230** — Rootless Podman container runner fails to map host user. Fix PR open. ([PR link](https://github.com/nanocoai/nanoclaw/pull/2230))

## Feature Requests & Roadmap Signals

Strong signals for upcoming features based on open PRs and issue:

- **New Channel: LINE Official Account** — PR #2918 adds a native LINE channel adapter with `/add-line` skill. Likely to be merged soon given community demand for Asian-market messaging platforms. ([PR link](https://github.com/nanocoai/nanoclaw/pull/2918))

- **New Integrations/Utilities:**
  - Google Contacts tool (`/add-google-contacts-tool`) — PR #2693 ([PR link](https://github.com/nanocoai/nanoclaw/pull/2693))
  - CalDAV tool (`/add-caldav-tool`) — PR #2530 ([PR link](https://github.com/nanocoai/nanoclaw/pull/2530))
  - System digest skills (`/setup-system-digest`, `/system-digest`) — PR #2863 ([PR link](https://github.com/nanocoai/nanoclaw/pull/2863))

- **MCP Transport Extensibility** — PR #2208 adds HTTP and SSE MCP server transport support, expanding connection options beyond stdio. This is a significant infrastructure improvement. ([PR link](https://github.com/nanocoai/nanoclaw/pull/2208))

- **Skill Composition Fix** — PR #2921 gates skill fragment injection on group skill selection, preventing instruction leaks across groups. Likely to ship next. ([PR link](https://github.com/nanocoai/nanoclaw/pull/2921))

## User Feedback Summary

The only direct user-reported issue (#2917) reflects a significant pain point: users deploying local models as primary agents are penalized with full MCP tool schema token costs regardless of backend. This suggests growing real-world adoption of local model orchestration and a mismatch with the current architecture that assumes Claude as the primary model.

Other implicit pain points emerge from fix PR descriptions:
- Signal messaging silently drops DMs due to missing flags — impacts real-time chat reliability
- Image attachments in Signal unreadable from containers — breaks visual input workflows
- Duplicate text output during poll turns — degrades user experience with garbled messages
- Container restart DB connection leaks — potential long-term stability risk for production deployments

## Backlog Watch

Several long-standing open PRs require maintainer attention:

- **PR #2184** (since May 2) — Fix for stale session handling in poll loop. No visible maintainer response. ([PR link](https://github.com/nanocoai/nanoclaw/pull/2184))
- **PR #2208** (since May 3) — HTTP/SSE MCP transport support. Large feature PR that could impact many downstream integrations. ([PR link](https://github.com/nanocoai/nanoclaw/pull/2208))
- **PR #2230** (since May 3) — Rootless Podman user mapping fix. ([PR link](https://github.com/nanocoai/nanoclaw/pull/2230))
- **PR #2348** (since May 8) — Signal channel single-timer reconnect and clean teardown. ([PR link](https://github.com/nanocoai/nanoclaw/pull/2348))
- **PR #2349** (since May 8) — Mount security allowlist robustness fix. ([PR link](https://github.com/nanocoai/nanoclaw/pull/2349))
- **PR #2530** (since May 18) — CalDAV tool skill. ([PR link](https://github.com/nanocoai/nanoclaw/pull/2530))
- **PR #2531** (since May 18) — Duplicate text suppression in poll loop. ([PR link](https://github.com/nanocoai/nanoclaw/pull/2531))

These PRs, some over two months old, represent accumulated technical debt. The lack of maintainer engagement on these items may indicate resource constraints or prioritization toward newer features over backlog cleanup.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for **2026-07-04**.

---

## NullClaw Project Digest – 2026-07-04

### 1. Today's Overview
Project activity is minimal today, with only one open issue updated in the last 24 hours and no new Pull Requests or Releases. The single active issue concerns a potential stability regression in the Telegram channel integration, suggesting that the core backend remains functional while the connection layer may have a timeout or idle-reconnection bug. With no merges or releases, the project appears to be in a low-activity state, possibly awaiting maintainer triage or contributions. Overall, project health is stable but stagnant.

### 2. Releases
No new releases were published in the last 24 hours. There are no version changes, breaking changes, or migration notes to report.

### 3. Project Progress
No Pull Requests were created, merged, or closed today. No features advanced or bugs were fixed through PRs in this period.

### 4. Community Hot Topics
The only active issue this period is:

- **#972 [BUG] Telegram channel stops responding after some idle time**  
  Author: i11010520 | Updated: 2026-07-03 | Comments: 1 | 👍: 0  
  [Link to Issue](nullclaw/nullclaw Issue #972)

This issue reports that the Telegram channel goes silent after a night or more of idle time, while the nullclaw backend continues working (e.g., responding to pings). The single comment likely discusses potential causes such as session timeouts, keep-alive failures, or Telegram API rate-limit issues. The underlying need is for reliable long-running channel connectivity without manual restart.

### 5. Bugs & Stability
One stability-related bug is active:

- **Severity: Medium-High** – **#972** (Telegram channel idle disconnect). This bug impacts user-facing reliability for those relying on Telegram as a primary interface. It causes the agent to appear dead even though the backend is healthy. No fix PR exists yet. The implicit workaround (manual restart or re-trigger) is not documented.

### 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed today. However, the idle-disconnect bug in #972 may signal a need for:
- Automatic reconnection or heartbeat mechanism for long-lived channels
- Improved logging for channel-level errors versus backend errors
- A configurable idle-timeout or explicit keep-alive setting

Given the project’s current state, a hotfix for #972 is more likely in the next version than new features.

### 7. User Feedback Summary
- **Pain Point:** The Telegram channel requires manual intervention after extended idle periods, causing frustration for users expecting persistent availability.
- **Use Case:** Users run nullclaw on cloud VMs (e.g., EC2) and rely on Telegram for asynchronous interaction overnight.
- **Satisfaction:** Likely moderate – the backend is praised for working well, but the channel disconnect erodes trust in the agent's autonom. One user has explicitly filed a bug, indicating dissatisfaction with the current reliability.

### 8. Backlog Watch
There are no long-unanswered issues or PRs in the backlog currently visible from the 24-hour data window. However, #972 has been open for 4 days with only one comment, suggesting it may be waiting for maintainer reproduction or triage. Maintainers should prioritize a response or fix for this issue to prevent further user churn.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the IronClaw project digest for July 4, 2026.

---

## IronClaw Project Digest — 2026-07-04

### 1. Today's Overview

IronClaw continues at a high velocity, with significant churn in both issues (33 updated) and pull requests (50 updated). The project is deep in the "Reborn" migration and feature parity cycle, focusing heavily on production-hardening the new architecture through de-slop refactors, identity layer fixes, and ingress contract standardization. A major focus today is on stabilizing CI on `main` after recent engine-v2 removal churn and addressing a backlog of high-risk bugs discovered through QA and internal audits. While no new releases were cut, the volume of merged and closed PRs (28) indicates strong forward momentum on the core platform.

### 2. Releases

No new releases were published in the last 24 hours.

### 3. Project Progress

28 pull requests were merged or closed today, marking significant progress in several key areas:

- **Identity Layer De-slop (PR #5619):** A major refactor of the `ironclaw_reborn_identity` crate landed, removing dead types, enforcing boundary rules, adding contract documentation, and expanding error-path tests. This directly addresses several high-risk bugs raised by core contributor `ilblackdragon`.
- **Reborn Composition Refactor (PR #5585):** Merged a significant restructuring of the Reborn composition internals, moving observability and other owned code behind clearer module boundaries for better maintainability.
- **Manifest-Driven Ingress (PRs #5625, #5626):** The team is executing on the strategy to make channel ingress (like Slack) manifest-defined rather than hardcoded in Rust. PR #5625 finalized the fail-closed credential coherence contract, and PR #5626 projects Slack's ingress routes directly from its manifest, eliminating the last of the Rust policy literals.
- **Type & Trait Cleanup (PR #5567):** A judged dedup backlog was executed, removing 6 redundant traits and unifying 6 DTO clusters, resulting in a net reduction of 176 lines of code with no behavioral changes.
- **Bug Fixes:** PR #5132 (redirect invalid chat thread routes) and PR #5130 (clear sidebar highlight off chat routes) were merged, improving the Web UI v2 user experience.
- **Feature Work:** PR #5049 wired production-graph composition for identity and profile context sources, meaning production agents will now have access to user-specific data like timezone and locale.

### 4. Community Hot Topics

The highest-activity issue and PR threads reveal deep technical debates about security, correctness, and architectural integrity.

- **Issue #3067 (33 comments):** `[TEST] Reborn: Add vertical-slice integration test suite` — This long-running issue (open since April) continues to be the most active. It is the strategic epic for proving the Reborn substrate works through public entrypoints. The high comment count reflects the complexity of designing these tests and ensuring they cover the critical "reborn-integration" stack.

- **Issue #5522 (3 comments):** `[QA] Reborn routine fails (status=Failed) when task requires reading Slack DMs` — This QA bug report describes a concrete user-facing failure where the agent enters a retry loop when lacking a capability (reading Slack DMs). The "capability_info retry loop" suggests a fundamental issue in the error handling and capability negotiation logic of the Reborn agent loop. This is a high-priority bug from the QA team (`thisisjoshford`).

- **PRs #5093, #5072, #5107 (Grouped, closed as superseded):** The long chain of PRs surrounding `manifest-driven channel ingress` has been a major source of activity. The conversation reflects a deep architectural debate about how to abstract Slack, Telegram, and other integrations. The final resolution (PRs #5625 and #5626) represents a compromise that keeps the contract simple while achieving the goal of manifest-defined routes.

### 5. Bugs & Stability

The project reported 13 new open bugs today, ranging from high-risk architectural defects to minor UX issues. CI is actively red on `main`, which is a critical stability concern.

- **Critical (Risk: High)**
    - **Issue #5615:** `ironclaw_reborn_identity: bind() has no OAuth-surface guard (defense-in-depth)` — A security audit finding where the `bind` method lacks a guard against channel actors, allowing a potential bypass of surface-kind restrictions.
    - **Issue #5614:** `ironclaw_reborn_identity: cross-process divergent-email logins can split a principal` — A race condition in the identity filesystem store that could allow the same user with different emails to create separate principal identities.
    - **Issue #5512:** `WASM credential provider re-derives injection eligibility from manifest instead of consulting authorizer's Decision.obligations` — This means the WASM runtime ignores the authorization system's decisions, potentially injecting credentials that should have been denied. A fix PR (#5623) is open.
    - **Issue #5603:** `CI red on main after engine-v2 removal: Docker Build missing prompts COPY + Clippy Windows unused import` — Active failures on the main branch's CI pipeline are blocking further merges. Issue #5590 tracks this as a broad goal to "Make main branch CI checks green again."

- **Medium (Risk: Medium)**
    - **Issue #5617:** `ironclaw_reborn_identity: login seam (OAuth route → WebuiUserDirectory → resolver) is tested only with fakes on both sides` — The entire production login path is untested in integration.
    - **Issue #5616:** `ironclaw_reborn_identity: adopt_migrated_identity never writes StoredUser` — A defect that creates phantom users in the system.
    - **Issue #5608:** `reborn: retry path is unreachable for local-dev synthetic capabilities` — A core Reborn contract is broken for development workflows.
    - **Issue #5605:** `reborn: memory prompt-context injection is unwired` — A feature (memory injection) is completely dead code in production due to a missing wiring step in the composition graph.

- **Low**
    - **Issue #5583:** Hallucinated call to disabled capability fails the run as `model_error` instead of a graceful denial.
    - **Issue #5507:** Failed routine runs show "No thread attached," blocking debugging.
    - **Issue #5510:** Users cannot delete old routines.
    - **Issue #5602:** Slack connection flow fails in the chat UI.

### 6. Feature Requests & Roadmap Signals

While there are no explicit "feature requests" from external users in this batch, the internal issues strongly signal the roadmap:

- **Manifest-driven everything:** The closure of complex PRs and the landing of #5625 and #5626 signal that the architecture for extensions, ingress, and credentials is solidifying around a manifest-based system. This will be a core feature of the next release.
- **Identity and Safety Hardening:** The "de-slop" loop is a strong signal that the next release will prioritize a hardened, audited, and fully tested identity layer. The high volume of bugs found by `ilblackdragon` suggests this is a major blocker for the Reborn cutover.
- **Reborn Cutover:** Issue #3067 (the vertical-slice test suite) is the most active issue and a `suggested_P0`. Its closure will be a key milestone for declaring Reborn ready for user-facing cutover.

### 7. User Feedback Summary

Direct user feedback is limited, but the number of QA-discovered bugs (Issues #5522, #5507, #5510, #5602) paints a clear picture of user pain points:

- **Pain: Reliability of Routine Execution.** The report of a routine failing permanently due to a missing capability (Issue #5522) is a core reliability problem. Users expect graceful degradation, not a hard failure.
- **Pain: Visual Debugging.** The inability to view the thread of a failed routine (Issue #5507) is frustrating for both end-users and developers trying to understand what went wrong.
- **Pain: Data Management.** The inability to delete old routines (Issue #5510) is a clear UX failure that clutters the user's workspace and prevents them from cleaning up stale configurations.
- **Pain: Onboarding Friction.** The Slack connection flow failing in chat (Issue #5602) creates a poor first-impression for new users trying to integrate with their communication tools.

### 8. Backlog Watch

Several "Reborn" architecture issues have been open for over two months without resolution, suggesting they are either blocked or de-prioritized but remain critical for the final Reborn feature parity.

- **Issue #3068 (Open since Apr 29, `suggested_P0`):** `[Reborn Cutover Blocker] Preserve brokered HTTP credential injection` — This is explicitly labeled a cutover blocker. It has been open for 66 days.
- **Issue #3141 (Open since May 1, `suggested_P1`):** `[Reborn] Integrate cost-based budgets into ResourceGovernor and HostRuntime` — A key feature for resource management that has not yet been integrated.
- **Issue #3238 (Open since May 3, `suggested_P1`):** `[Reborn] Define cancellation semantics` — A fundamental design decision for the agent loop that remains undefined.
- **Issue #3127 (Open since Apr 30, `suggested_P1`):** `[Reborn] Design scalable capability permission UX and policy resolver` — The UX for managing complex capability permissions is still in design phase.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for July 4, 2026.

---

## LobsterAI Project Digest — 2026-07-04

### 1. Today's Overview
The project sees very high activity today, driven primarily by a large wave of merge activity around the `release/2026.7.1` branch. 16 Pull Requests were updated, with 14 successfully merged or closed, signaling a disciplined push to stabilize the current release. A single issue was closed (a stale UI bug), and one new release (v2026.7.3) was cut. The focus this cycle is overwhelmingly on the **Cowork** module, with significant improvements to goal mode, session handling, and subagent artifact management, alongside important cross-platform fixes for macOS stability.

### 2. Releases
**New Version:** LobsterAI 2026.7.3 — Released 2026-07-03

**What's Changed:**
- **Feature:** Service deployment capabilities improved ([#2238](https://github.com/netease-youdao/LobsterAI/pull/2238)).
- **Feature (Cowork):** New "Goal Mode" introduced for the cowork interface ([#2241](https://github.com/netease-youdao/LobsterAI/pull/2241)).
- **Feature (Cowork):** Added a dedicated subagent artifact panel ([#2241](https://github.com/netease-youdao/LobsterAI/pull/2241)).

**Adoption Note:** It is recommended for any user leveraging the Cowork module, as it contains multiple fixes for session stability and UI rendering detailed below.

### 3. Project Progress
Today's merge activity focused on hardening the `release/2026.7.1` branch and shipping patches.

- **Cowork Stability:**
    - **Session Sync:** Fixed a bug where IM/channel sessions could diverge from model switches made outside the app (`#2267`).
    - **Error Handling:** Ensured chat errors clear "context maintenance" state to prevent the UI from getting stuck (`#2266`).
    - **Session Recovery:** Delayed plan recovery until after an abort fully settles, preventing file lock collisions (`#2247`).
    - **Large Session Performance:** Reduced render work for tool-heavy sessions by lowering collapsed result formatting limits and adding memoization (`#2264`).
- **UI/UX Improvements:**
    - Fixed compact prompt toolbar width issues when the artifact panel was open (`#2268`, `#2242`).
    - Removed redundant "goal helper" text from the menu (`#2262`).
    - Added tooltips to the "create agent" button and guided users to auth requirements when toggling disabled providers (`#2269`).
    - Optimized font size and settings UI (`#2263`).
- **Cross-Platform Fixes:**
    - **macOS:** Fixed a black screen bug caused by closing a fullscreen window while in tray mode by exiting native fullscreen before hiding the window (`#2246`).
- **Artifacts & Deployment:**
    - Fixed the share deployment dialog layout so the header and footer remain fixed during content scroll (`#2265`).

### 4. Community Hot Topics
There are no highly active community discussions today; activity is dominated by internal team merges. The only issue updated was a stale bug:

- **#1422 [Closed]:** UI display issue on the MCP custom page when service names are long. This was a minor cosmetic bug that has now been addressed.

### 5. Bugs & Stability
One critical stability bug was fixed today:

- **Severity: High (macOS Crash):** **Black screen when closing fullscreen app** ([PR #2246](https://github.com/netease-youdao/LobsterAI/pull/2246)). This fix prevents a black screen that occurred when a user in macOS native fullscreen closed the main window for tray behavior. [Fix PR: #2246].

**Other Stability Fixes:**
- **Severity: Medium (Data Integrity):** Session file lock collisions during cowork plan recovery ([PR #2247](https://github.com/netease-youdao/LobsterAI/pull/2247)). [Fix PR: #2247].
- **Severity: Medium (UX/State Stuck):** UI stuck in "context maintenance" state after a chat error ([PR #2266](https://github.com/netease-youdao/LobsterAI/pull/2266)). [Fix PR: #2266].
- **Severity: Medium (Subagent Timestamp):** Subagent panel showing incorrect timestamps due to incorrect SQLite column alias ([PR #2261](https://github.com/netease-youdao/LobsterAI/pull/2261)). [Fix PR: #2261].

### 6. Feature Requests & Roadmap Signals
The most significant new feature shipped in this cycle is **Cowork Goal Mode** (`#2241`). This suggests the team is actively building out structured task management within the agent collaboration workspace.

Two older, long-standing PRs signal community desire for better agent management and IM configuration:
- **#1353 (Open):** **Agent Skill Selector Enhancement** — Requests "select all" and "clear" functionality for the skill picker.
- **#1464 (Open):** **IM Instance Duplicate Validation** — Requests validation to prevent users from creating duplicate bot instances in DingTalk, Feishu, and QQ.

*Prediction:* Given the current focus on Cowork, the next minor version (v2026.7.x) is likely to refine the Goal Mode UX based on feedback. The "Agent Skill Selector" feature (#1353) has been open for three months on the stale list and may be considered for a future maintenance cycle.

### 7. User Feedback Summary
Direct user feedback in the last 24 hours is minimal. The closure of issue **#1422** indicates a user pain point (truncated UI on MCP custom pages for long service names) that has now been resolved. The PR **#2263** ("optimize font size and settings ui") and **#2269** (adding tooltips and auth guidance) suggest the team is responding to internal UX friction regarding discoverability and readability.

### 8. Backlog Watch
The following long-unanswered PRs remain open and require maintainer attention. They are both marked as `[stale]`, indicating they have not seen updates in over three months.

- **[PR #1353](https://github.com/netease-youdao/LobsterAI/pull/1353) (feat, Stale, 3 months):** Implements "select all/clear" for the Agent Skill Selector. This is a mature PR with a clear description and low risk.
- **[PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464) (fix, Stale, 3 months):** Adds duplicate validation for IM instance names and credential IDs. This is a data integrity fix that prevents user error.

**Recommendation:** These two PRs should be reviewed and merged or explicitly closed before they rot further, as they represent straightforward improvements that do not conflict with current development vectors.

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

Here is the project digest for **CoPaw**, generated from the provided GitHub data for **2026-07-04**.

---

## CoPaw Project Digest
**Date:** 2026-07-04

### 1. Today's Overview
The CoPaw project is in a **high-activity maintenance and stabilization phase**. Over the last 24 hours, the community resolved 15 pull requests and closed 25 issues, indicating a strong effort to clear technical debt and squash bugs. Development velocity is high, with 18 new PRs opened today, signaling active feature integration (including Azure Bot support and Tauri desktop packaging). However, the project is grappling with significant architectural challenges in the upcoming **v2.0 Runtime**, specifically around context management, session handling, and tool-call reliability, which are generating intense discussion. The maintainers are responding rapidly to critical bugs, but several deep-seated, systemic issues remain under active investigation.

### 2. Releases
**No new releases were published in the last 24 hours.**

### 3. Project Progress
The project saw significant cleanup and infrastructure improvements:
- **Memory System Enhancement:** The reranker feature for memory search is now complete, with both backend config (#5648) and frontend UI panel (#5647) merged, allowing users to improve memory retrieval relevance.
- **Windows Support:** A first-time contributor merged a native Windows sandbox implementation (#5525), a critical step for improving stability on that platform.
- **Provider Updates:** The GitHub Models provider was updated to a new endpoint and now supports fine-grained Personal Access Tokens (#5735).
- **UI/UX Refinement:** A major PR unified the session item component (sidebar vs. drawer), improving code maintainability and UI consistency (#5754). A fix was also merged to make the agent resilient to invalid MCP client configs, preventing the entire backend from crashing on a single typo (#5755).
- **Stability Fixes:** A fix was merged to properly synchronize execution policies (e.g., "off" for tool execution) between the frontend and backend `policy.yaml` (#5506).

### 4. Community Hot Topics
The most active discussions reveal deep user concerns about the core agent's reliability and security.

- **Key Security and Logging (#5705):** This open feature request has 6 comments, detailing gaps in API key security (env var fallback) and a total lack of log sanitization for secrets in dialog and ReMe logs. This is a high-priority trust issue for production users.
- **System-Level Windows Encoding (#4481):** A now-closed issue regarding Windows `GBK` encoding problems (which cause emoji/Unicode failures) garnered significant attention. The proposal to replace scattered fixes with a system-level solution is a key indicator of ongoing pain for a major user segment.
- **Plugin Architecture Gaps (#4642):** A user with 2 comments provided a comprehensive wishlist for non-invasive plugin extension points (Context/Memory/Hooks), comparing CoPaw unfavorably to OpenClaw. This is a strong signal that power users want deeper extensibility without modifying core code.
- **Browser Automation Instability (#4584):** Community members are actively reporting flakiness with CDP-based browser automation and are advocating for a switch to Playwright for better reliability in timed tasks.

### 5. Bugs & Stability
Bug reports remain the dominant category, with several high-severity issues identified.

- **High Severity:**
    - **v2.0 Context Compression Loss (#5746):** An open bug describes a critical failure where the new `scroll` context strategy incorrectly "folds" the current active task, causing the model to "forget" its mission and reply with stale information. A fix PR (#5765) is already open to protect the active turn and add pressure relief.
    - **Endless Tool Execution Loop (#5717):** This open bug reports a severe regression in Runtime 2.0 where a malformed tool-call input causes the model to execute the same tool infinitely. A targeted fix PR (#5761) is also open.
    - **Console 404 on v2.0b2 (#5769):** The latest beta version has a critical API routing bug (`/api/api/...`) that breaks the entire Console frontend for command discovery. This is a blocker for v2.0 beta testing.
- **Medium Severity:**
    - **Plugin Deletion Leaves Ghost (#5689):** Removing a plugin leaves broken references, causing the agent to crash with `ModuleNotFoundError` on subsequent queries. A fix is needed to ensure clean plugin lifecycle management.
    - **Task Interruption / Crashes (#5763):** A user reports that "heavy tasks" cause the latest version to freeze or crash inexplicably, a symptom of an underlying stability issue under high load.

### 6. Feature Requests & Roadmap Signals
Users are demanding more enterprise-grade features and extensibility.

- **Non-Standard API Support (#5609):** A user requests support for custom model API protocols beyond the standard `/v1/chat/completions` format (e.g., image generation APIs). This is likely to be considered for a future release to support a wider variety of backends.
- **Plugin Architecture Overhaul (#4642):** The desire for non-invasive plugin development (Context, Hooks, Skills) is a strong signal for the medium-term roadmap, potentially leading to a richer plugin SDK.
- **Custom Model Protocols (#5609):** A request to support API endpoints that are not standard `/v1/chat/completions` (e.g., image generation APIs). This could be a candidate for a v1.2 or v2.1 release to expand provider compatibility.
- **Session Awareness for Plugins (#5547):** Developers using CoPaw as a backend service need the current `session_id` or `user_id` passed into plugin tools for authorization. This is critical for enterprise integration scenarios.

### 7. User Feedback Summary
The user base is deeply technical and actively pushing CoPaw toward a more stable, secure, and professional platform.

- **Pain Points:** Core reliability remains the biggest pain point. Users are frustrated by context loss (scroll strategy), console UI bugs, encoding issues on Windows, and crashes during heavy tasks. The "endless tool execution" loop in Runtime 2.0 is a severe trust-breaker.
- **Desired Improvements:** There is a clear call for **non-invasive extensibility** (better plugin hooks), **enhanced security** (key sanitization, request-specific identity), and **enterprise usability** (session/user ID propagation to tools, stable long-running background tasks).
- **Satisfaction vs. Dissatisfaction:** Users are highly engaged and invested in the project (many first-time contributors are submitting fixes). However, the sentiment is that the v2.0 beta, while ambitious, is currently unstable for production use. The rapid response from maintainers (e.g., opening fix PRs for critical bugs) is likely the key factor preventing user exodus.

### 8. Backlog Watch
Several high-value issues and PRs require maintainer attention to unblock contributors and close long-standing gaps.

- **Plugin Management Gaps (#4642):** This detailed enhancement request has been open for over a month with no resolution. It defines a strategic vision for the project's extensibility. Lack of engagement here could discourage future plugin developers.
- **Chat Input Queue Migration (#5514):** An open PR that has been awaiting review for over a week. It addresses a fundamental issue where user input can be lost or misrouted due to session ID migration in the Console UI. This is a high-priority fix for a poor user experience.
- **Per-Request Model Override (#5731):** A first-time contributor has a fix for allowing cron jobs to override the model without changing the agent's config. This is a small, targeted feature that would dramatically improve the flexibility of automated tasks. Stalled review risks discouraging the contributor.
- **System-Level Windows GBK Fix (#4481):** While the issue is closed, the underlying problem persists. A system-level fix has been proposed but not yet implemented. This remains a major irritant for the large Windows user base.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-04

## 1. Today's Overview

ZeroClaw is in an intensive development sprint toward the v0.8.3 release, with **36 updated issues** and **50 updated PRs** in the last 24 hours indicating very high activity. The project shows a healthy balance of feature work and bugfixing, with notably strong attention to security hardening, cross-platform compatibility (Windows testing gap), and plugin architecture maturation. Two critical bugs were reported today involving the SOP engine's approval-gate bypass and a daemon SIGSEGV crash in the skill-review fork, both receiving immediate fix PRs. The community is deeply engaged in RFC discussions around work lanes, OIDC authentication, and goal-mode autonomous sessions, suggesting the project is actively shaping its governance and architecture alongside code delivery.

## 2. Releases

**No new releases today.** The project appears to be staging toward v0.8.3; the tracker issue [#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071) (runtime execution) and [#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314) (WASM plugin program) both target this version.

## 3. Project Progress

**6 PRs were merged or closed today.** Notable changes advancing the codebase:

- **OpenAI-compatible tool-call empty content fix** — [#8524](https://github.com/zeroclaw-labs/zeroclaw/pull/8524) (merged): Omits empty assistant `tool_calls[].function.arguments` content in OpenAI-wire-format provider requests, fixing 400 errors on OpenRouter, Azure OpenAI, and Copilot endpoints.
- **SOP visual authoring surfaces** — [#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) (open, XL size): Major PR adding SOP.toml support, channel fan-in, tests, and docs. The "Beta Testers" callout suggests this is nearing user-facing maturity.
- **Multi-user auth providers** — [#8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672) (open): Implements RFC #7141 adding `peercred`, `native` pairing bearer, `ssh-key` challenge-response, and `oidc.<alias>` providers with permission profiles and principal isolation.
- **Cron uses_memory CLI/tools exposure** — [#8676](https://github.com/zeroclaw-labs/zeroclaw/pull/8676) (open): Adds the `uses_memory` parameter to `cron_add`/`cron_update` tools and CLI, addressing feature request [#8397](https://github.com/zeroclaw-labs/zeroclaw/issues/8397).
- **Agent-policy parity harness** — [#8659](https://github.com/zeroclaw-labs/zeroclaw/pull/8659) (open): Test infrastructure scaffold for verifying agent behavior matches declared policy.

## 4. Community Hot Topics

The most active discussions reflect the project's governance and architectural evolution:

1. **[#6808 — RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** (13 comments, open) — A governance RFC in its 9th revision, now "accepted / rollout in progress". Proposes automated issue routing through label-based work lanes to reduce maintainer overhead. High engagement suggests the community values process improvements alongside code.

2. **[#7462 — 74 test failures on Windows](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)** (8 comments, open, p1/high risk) — A major cross-platform gap: the entire test suite only runs on Linux CI, leaving Windows users with broken path semantics, console encoding issues, and Unix-only test commands. The community is pushing for Windows CI coverage as a prerequisite for broader adoption.

3. **[#7141 — RFC: OIDC authentication provider support](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** (7 comments, open, p1/high risk) — Tracking issue for pluggable auth providers. The recently opened PR [#8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672) implementing this received immediate community attention.

4. **[#5542 — Consecutive OOM in WSL2](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)** (7 comments, **closed**) — After months as a multi-root-cause tracker, this S0 severity bug has been resolved. Two root causes were split out: the WSL2 restart-storm (fixed by component-supervisor backoff in #8633) and unbounded RSS growth from MCP/tool-schema cloning (tracked separately in [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)).

## 5. Bugs & Stability

**Critical/S0 severity bugs reported today:**

- **[#8678 — SOP approval-gate bypass via sop_advance](https://github.com/zeroclaw-labs/zeroclaw/issues/8678)** (S2, open) — `SopEngine::advance_step` lacks a run-status guard, allowing a driver to skip approval gates. No fix PR yet; rated S2 but integrity impact is severe.
- **[#8654 — Skill-review fork SIGSEGV (daemon crash)](https://github.com/zeroclaw-labs/zeroclaw/issues/8654)** (p1, open) — Out-of-range slice panic in `skills/review.rs:159` kills the agent process under `panic=abort`. **Fix PR [#8680](https://github.com/zeroclaw-labs/zeroclaw/pull/8680) opened same day** by bounding the history slice against in-fork compaction.
- **[#8675 — Malformed tool-call arguments sent unvalidated to OpenAI-format providers](https://github.com/zeroclaw-labs/zeroclaw/issues/8675)** (S1, open) — Provider 400 errors when models emit non-JSON tool-call arguments. Related to the merged fix in [#8524](https://github.com/zeroclaw-labs/zeroclaw/pull/8524) (empty content), but this is a distinct validation gap.
- **[#8642 — MCP/tool-schema cloning unbounded RSS growth](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)** (p1, open) — Split from the OOM tracker #5542; cloned tool schemas in the agent loop never release memory, driving unbounded heap growth.
- **[#8644 — ZeroCode completes Code turn with no visible output](https://github.com/zeroclaw-labs/zeroclaw/issues/8644)** (S2, open) — Runtime considers the turn successful, but TUI shows no assistant message. User-experience bug in the ZeroCode frontend.
- **[#8645 — Reload banner shows persistent drift for env-overridden secrets](https://github.com/zeroclaw-labs/zeroclaw/issues/8645)** (p2, open) — Gateway/web reports permanent config drift for `ZEROCLAW_*` env-injected secrets, causing false-positive alert noise in multi-agent deployments.
- **[#8677 — WhatsApp Web device linking broken](https://github.com/zeroclaw-labs/zeroclaw/issues/8627)** (p1, **blocked**) — WhatsApp's new passkey/SHORTCAKE companion-linking gate prevents QR-based device linking. This is an upstream dependency issue with no immediate resolution path.

## 6. Feature Requests & Roadmap Signals

**High-engagement feature requests likely targeting v0.8.3:**

- **[#8303 — Goal mode for bounded autonomous sessions](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)** (accepted RFC, 1 👍) — Implementation PR [#8393](https://github.com/zeroclaw-labs/zeroclaw/pull/8393) is already open (XL size, high risk). This will enable durable, interruptible goal pursuit with budget limits and pause/resume — a foundational capability for production agent deployments.
- **[#8636 — Plugin system follow-ups](https://github.com/zeroclaw-labs/zeroclaw/issues/8636)** (p2, in-progress) — Findings from third-party validation of plugin authoring guides. The project is investing heavily in making plugin development accessible, with 5 new guide pages in PR [#8621](https://github.com/zeroclaw-labs/zeroclaw/pull/8621).
- **[#8397 — Expose per-cron-job uses_memory flag](https://github.com/zeroclaw-labs/zeroclaw/issues/8397)** — Now implemented in PR [#8676](https://github.com/zeroclaw-labs/zeroclaw/pull/8676) and has a companion web UI request [#8677](https://github.com/zeroclaw-labs/zeroclaw/issues/8677). Likely to land in v0.8.3.
- **[#8626 — ZeroCode receives full RPC spec from daemon](https://github.com/zeroclaw-labs/zeroclaw/issues/8626)** (p2, accepted) — Eliminates shadow registries of hand-typed constants; improves ZeroCode's resilience to daemon API changes.
- **[#8653 — Auto-resume most recent Code session on pane entry](https://github.com/zeroclaw-labs/zeroclaw/issues/8653)** (p3, low engagement) — UX polish for ZeroCode that reduces friction for power users.

## 7. User Feedback Summary

- **Windows users are blocked**: The 74-test-failure report ([#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)) reflects that Windows is a second-class platform. Users attempting to run ZeroClaw on Windows 11 with Chinese locale encountered broken path semantics and Unix-only test commands. This is a significant adoption barrier for the Windows developer audience.
- **Security-conscious users are pushing for hardening**: The zip-bomb fix ([#8554](https://github.com/zeroclaw-labs/zeroclaw/issues/8554), closed today) and the OIDC auth RFC ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)) show demand for enterprise-grade security. The permission profiles in PR [#8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672) directly address this.
- **MCP tool reliability is a pain point**: Two bugs ([#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) closed, [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) open) around MCP tools not propagating to models and causing memory leaks suggest MCP integration quality is a current weakness.
- **SOP users want better UX**: The visual authoring PR [#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) and the SOP approval-gate bypass bug [#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678) indicate SOP is gaining adoption but needs better tooling and integrity guarantees.

## 8. Backlog Watch

**Issues needing maintainer attention:**

- **[#6717 — Integrate arch-review artifact into PR review session](https://github.com/zeroclaw-labs/zeroclaw/pull/6717)** (open since May 16) — A skill enhancement PR that's been open for 7 weeks with no review activity. It adds a "Phase 1.5" step to consume architecture advisory artifacts during PR reviews.
- **[#6716 — pr-architecture-check advisory review skill](https://github.com/zeroclaw-labs/zeroclaw/pull/6716)** (open since May 16) — Companion skill to #6717, same age and inactivity. Implements automated architecture review of PR diffs against ZeroClaw's engineering conventions.
- **[#6718 — Document work queue query in issue triage skill](https://github.com/zeroclaw-labs/zeroclaw/pull/6718)** (open since May 16) — Third in the May 16 batch of skill PRs, all from the same author. The cluster suggests a skills-sprint deliverable that needs final review.
- **[#8519 — cargo-audit/deny.toml drift and wasmtime-wasi CVEs](https://github.com/zeroclaw-labs/zeroclaw/issues/8519)** (p1, open since June 30) — 22 RustSec advisories causing CI failures; `cargo audit` fails master but `cargo deny` tolerates them. The audit tooling inconsistency needs resolution before the project can assert clean vulnerability posture.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*