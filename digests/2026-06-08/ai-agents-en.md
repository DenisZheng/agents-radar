# OpenClaw Ecosystem Digest 2026-06-08

> Issues: 296 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-08 00:41 UTC

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

# OpenClaw Project Digest — 2026-06-08

---

## 1. Today's Overview

OpenClaw is operating at exceptionally high throughput: **296 issues** and **500 pull requests** updated in the last 24 hours, with 177 issues and 374 PRs still open. No new releases were published today. The project is clearly in an active development sprint — the volume of open PRs (374) significantly exceeds the merged/closed count (126), suggesting the maintainer team is working through a substantial review backlog. The issue queue is heavily weighted toward P1 bugs with security and session-state impact, indicating stability and correctness remain the dominant focus. Community engagement is strong, with several issues accumulating double-digit comment counts and reaction scores.

---

## 2. Releases

**None.** No new versions were published on 2026-06-08. The most recent activity is concentrated in the PR and issue queues.

---

## 3. Project Progress

Several PRs were merged or closed today, advancing fixes across multiple subsystems:

- **PR #91252 [CLOSED]** — Fixed a file descriptor leak in the skills runtime watcher (chokidar), where persistent FDs for each `SKILL.md` were never released, accumulating linearly with installed skills. This is a meaningful stability fix for long-running gateways. [openclaw/openclaw#91252](https://github.com/openclaw/openclaw/pull/91252)

- **PR #88234 [CLOSED]** — Resolved a Feishu dispatch crash (`TypeError: Cannot read properties of undefined (reading 'run')`) that caused message delivery failures for all Feishu Bot private messages. [openclaw/openclaw#88234](https://github.com/openclaw/openclaw/issues/88234)

- **PR #84216 [CLOSED]** — Added a collapsible dropdown for recent sessions in the Control UI sidebar, addressing a UX pain point for users with limited screen height. [openclaw/openclaw#84216](https://github.com/openclaw/openclaw/issues/84216)

- **PR #71932 [CLOSED]** — Fixed a 404 "Model Not Found" error when spawning sub-agents with `google/gemini-3.1-flash-lite-preview`, caused by a missing `models/` prefix in the request path. [openclaw/openclaw#71932](https://github.com/openclaw/openclaw/issues/71932)

- **PR #76724 [CLOSED]** — Fixed MCP tools not being discovered by the Agent despite successful handshake (200 OK), a regression affecting tool availability. [openclaw/openclaw#76724](https://github.com/openclaw/openclaw/issues/76724)

Several high-value PRs are **ready for maintainer review** and could land soon:
- **PR #90328** — Exposes model picker agent runtimes in the WebUI (e.g., showing "GPT-5.5 · OpenAI Codex" labels). [openclaw/openclaw#90328](https://github.com/openclaw/openclaw/pull/90328)
- **PR #90858** — Fixes iMessage split-send coalescing using new `imsg` structural metadata. [openclaw/openclaw#90858](https://github.com/openclaw/openclaw/pull/90858)
- **PR #90101** — Adds runtime self-context config and tool, the first slice of a larger runtime/offload/scale effort. [openclaw/openclaw#90101](https://github.com/openclaw/openclaw/pull/90101)
- **PR #89045** — Recovers terminal session status on visible inbound turns, fixing group chat sessions stuck in `failed` status that silently drop messages. [openclaw/openclaw#89045](https://github.com/openclaw/openclaw/pull/89045)

---

## 4. Community Hot Topics

The most discussed issues reveal several recurring themes:

**Security & Data Leakage** — The most-commented issue, [#25592](https://github.com/openclaw/openclaw/issues/25592) (27 comments), reports that text produced between tool calls leaks to messaging channels (Slack, iMessage, etc.) as visible messages. This is a significant UX and security concern — internal processing output, failed exec acknowledgments, and narration are all exposed to end users. Tagged as `impact:security` and `impact:message-loss` with a diamond lobster rating.

**Session/Transcript SQLite Migration** — [#88838](https://github.com/openclaw/openclaw/issues/88838) (18 comments) tracks the migration of core session/transcript runtime state to SQLite via a branch-by-abstraction seam. This is a large, high-risk architectural change that the team is deliberately decomposing into small, reviewable PRs.

**Codex App-Server Regression** — [#88312](https://github.com/openclaw/openclaw/issues/88312) (14 comments, 👍3) reports that multi-tool agent turns on the Codex app-server reliably fail with "Codex stopped before confirming the turn was complete" starting in version 2026.5.27, a regression of a previously fixed issue (#84076).

**Bootstrap File Injection** — [#29387](https://github.com/openclaw/openclaw/issues/29387) (14 comments, 👍5) reports that bootstrap `.md` files (SOUL.md, AGENTS.md, etc.) placed in per-agent `agentDir` are silently ignored — only files under the shared workspace directory are loaded into the system prompt. This affects users with multi-agent configurations.

**Cron State Contamination** — [#90991](https://github.com/openclaw/openclaw/issues/90991) (13 comments) reports that cron scheduled triggers contaminate global runtime state, causing transient system-wide overload failures after upgrading to 2026.6.1.

**Subagent Completion Hooks** — [#22358](https://github.com/openclaw/openclaw/issues/22358) (12 comments) requests a `post_subagent_complete` extension hook for automatically generating structured trajectory files after significant subagent tasks.

**Exec Tool Environment Variables** — [#31583](https://github.com/openclaw/openclaw/issues/31583) (12 comments, 👍2) reports that `skills.entries.*.env` environment variables are not passed through to subprocesses spawned by the `exec` tool, making it impossible to inject secrets.

**Write Tool Append Mode** — [#40001](https://github.com/openclaw/openclaw/issues/40001) (11 comments) reports that isolated cron sessions using the `write` tool overwrite shared workspace files instead of appending, causing silent data loss.

---

## 5. Bugs & Stability

Ranked by severity (P1 first, then by impact scope):

| Severity | Issue | Impact | Fix PR |
|----------|-------|--------|--------|
| **P1 🔴** | [#25592](https://github.com/openclaw/openclaw/issues/25592) — Text between tool calls leaks to channels | Security, message-loss | None open |
| **P1 🔴** | [#88312](https://github.com/openclaw/openclaw/issues/88312) — Codex app-server turn-completion stall (regression) | Session-state, message-loss | None open |
| **P1 🔴** | [#29387](https://github.com/openclaw/openclaw/issues/29387) — Bootstrap files in agentDir silently ignored | Session-state, security | None open |
| **P1 🔴** | [#90991](https://github.com/openclaw/openclaw/issues/90991) — Cron trigger contaminates global runtime state | Auth-provider, system-wide | None open |
| **P1 🔴** | [#31583](https://github.com/openclaw/openclaw/issues/31583) — Exec tool doesn't inherit skills env vars (regression) | Security, auth-provider | Linked PR open |
| **P1 🔴** | [#40001](https://github.com/openclaw/openclaw/issues/40001) — Write tool lacks append mode, cron sessions destroy files | Session-state, data-loss | None open |
| **P1 🔴** | [#37634](https://github.com/openclaw/openclaw/issues/37634) — Sandbox workspaceAccess:none makes workspace read-only | Session-state, security | None open |
| **P1 🔴** | [#91212](https://github.com/openclaw/openclaw/issues/91212) — Delivery-recovery fails after gateway restart (0 recovered) | Message-loss | None open |
| **P1 🔴** | [#90639](https://github.com/openclaw/openclaw/issues/90639) — Compaction safeguard mode allows sessions to grow to context ceiling | Session-state, message-loss | None open |
| **P1 🔴** | [#90428](https://github.com/openclaw/openclaw/issues/90428) — Exec tool triggers gateway SIGTERM restart on WSL2/Node 24 | Crash | None open |
| **P1 🔴** | [#38091](https://github.com/openclaw/openclaw/issues/38091) — WebSocket reconnect terminates active sessions | Session-state, message-loss | None open |
| **P1 🔴** | [#38622](https://github.com/openclaw/openclaw/issues/38622) — Workspace file injector doesn't follow symlinks | Session-state, security | Linked PR open |
| **P1 🔴** | [#38907](https://github.com/openclaw/openclaw/issues/38907) — ACP bridge sessions fail with acp_session_init_failed | Session-state, message-loss | None open |
| **P2 🟡** | [#87326](https://github.com/openclaw/openclaw/issues/87326) — Telegram streaming loses intermediate text blocks | Message-loss | None open |
| **P2 🟡** | [#87136](https://github.com/openclaw/openclaw/issues/87136) — Compaction absolute token thresholds break when switching models | Session-state, auth-provider | None open |
| **P2 🟡** | [#64664](https://github.com/openclaw/openclaw/issues/64664) — Approvals lost on gateway restart, stale buttons show errors | Session-state | None open |

**Key observation:** The vast majority of P1 issues have **no linked fix PR** and carry `clawsweeper:no-new-fix-pr` and `clawsweeper:needs-maintainer-review` labels, indicating they are known, triaged, and awaiting maintainer bandwidth. The most critical unaddressed regressions are the Codex app-server stall (#88312) and the delivery-recovery failure (#91212).

---

## 6. Feature Requests & Roadmap Signals

Several feature requests signal clear user demand that could shape the next release:

- **Gateway-lite mode** ([#86881](https://github.com/openclaw/openclaw/issues/86881)) — A lightweight deployment mode without an AI harness for deterministic deployments (channel gateways, webhooks, cron scheduling). This reflects a growing use case of OpenClaw as an infrastructure platform, not just an AI assistant.

- **Topic-session families** ([#90916](https://github.com/openclaw/openclaw/issues/90916)) — Multiple named topic lanes with isolated transcript context per assistant, sharing durable memory through explicit family-level rules. This is a sophisticated multi-context architecture request.

- **Post-subagent completion hooks** ([#22358](https://github.com/openclaw/openclaw/issues/22358)) — Extension hooks for structured trajectory generation after subagent tasks.

- **Session reset prompt configuration** ([#45501](https://github.com/openclaw/openclaw/issues/45501)) — Making the hardcoded session startup message configurable.

- **Cumulative context usage in /usage** ([#40215](https://github.com/openclaw/openclaw/issues/40215), 👍3) — Showing model + context tokens / window in the usage footer.

- **Bounded append semantics for pre-compaction memory flush** ([#90354](https://github.com/openclaw/openclaw/issues/90354)) — Hard guardrails for append size and post-write validation.

- **Runtime self-context config and tool** — Already has an implementation PR (#90101) ready for review, suggesting this is likely to land in the next release.

**Prediction:** The next release will likely focus on stability fixes (delivery recovery, compaction, session state) rather than major new features, given the volume of P1 bugs. The runtime self-context feature (#90101) is the most likely new feature to ship soon.

---

## 7. User Feedback Summary

**Pain points:**

- **Message leakage to channels** is the single most-discussed issue. Users are frustrated that internal agent processing text (error handling, narration between tool calls) appears as visible messages in Slack, iMessage, etc. This is both a UX problem and a potential security concern. [#25592](https://github.com/openclaw/openclaw/issues/25592)

- **Silent data loss** is a recurring theme: write tool overwriting shared files ([#40001](https://github.com/openclaw/openclaw/issues/40001)), delivery-recovery silently failing ([#91212](https://github.com/openclaw/openclaw/issues/91212)), and Telegram streaming losing intermediate text ([#87326](https://github.com/openclaw/openclaw/issues/87326)).

- **Multi-agent configuration is fragile.** Bootstrap files in `agentDir` are ignored ([#29387](https://github.com/openclaw/openclaw/issues/29387)), sub-agent model routing ignores explicit model parameters ([PR #91206](https://github.com/openclaw/openclaw/pull/91206)), and compaction thresholds break when switching between models with different context windows ([#87136](https://github.com/openclaw/openclaw/issues/87136)).

- **Cron/isolated session reliability** is a growing concern, with reports of global state contamination ([#90991](https://github.com/openclaw/openclaw/issues/90991)), file overwrites ([#40001](https://github.com/openclaw/openclaw/issues/40001)), and delivery failures after gateway restart ([#91212](https://github.com/openclaw/openclaw/issues/91212)).

- **Gateway restart recovery** is a systemic weakness: approvals are lost ([#64664](https://github.com/openclaw/openclaw/issues/64664)), delivery recovery fails ([#91212](https://github.com/openclaw/openclaw/issues/91212)), ancient subagent tasks are resurrected ([#69778](https://github.com/openclaw/openclaw/issues/69778)), and WebChat sessions are silently rotated ([#70330](https://github.com/openclaw/openclaw/issues/70330)).

**Satisfaction signals:**
- Users appreciate the WebUI improvements (model picker runtimes, collapsible session list).
- The Feishu plugin has active community contributors filing detailed bug reports with root cause analysis.
- The `openclaw doctor` diagnostic tool is valued but needs refinement (false positives, missing warnings).

---

## 8. Backlog Watch

These important issues and PRs have been open for extended periods without resolution and need maintainer attention:

- **[#25592](https://github.com/openclaw/openclaw/issues/25592)** — Text between tool calls leaks to messaging channels. Open since **2026-02-24** (~3.5 months), 27 comments, diamond lobster rating, tagged `impact:security`. No linked fix PR. This is the highest-comment issue in the entire dataset and affects all channel integrations.

- **[#29387](https://github.com/openclaw/openclaw/issues/29387)** — Bootstrap files in agentDir silently ignored. Open since **2026-02-28** (~3.5 months), 14 comments, 👍5, diamond lobster. No linked fix PR. Affects all multi-agent deployments.

- **[#31583](https://github.com/openclaw/openclaw/issues/31583)** — Exec tool doesn't inherit skills env vars (regression). Open since **2026-03-02** (~3 months), 12 comments, diamond lobster. Has a linked PR but no movement.

- **[#22358](https://github.com/openclaw/openclaw/issues/22358)** — Post-subagent completion extension hook. Open since **2026-02-21** (~3.5 months), 12 comments, diamond lobster. No linked fix PR.

- **[#37634](https://github.com/openclaw/openclaw/issues/37634)** — Sandbox workspaceAccess:none makes workspace read-only. Open since **2026-03-06** (~3 months), 9 comments, 👍6 (highest reaction count among sandbox issues). No linked fix PR.

- **[#40001](https://github.com/openclaw/openclaw/issues/40001)** — Write tool lacks append mode. Open since **2026-03-08** (~3 months), 11 comments, diamond lobster. No linked fix PR.

- **[#88838](https://github.com/openclaw/openclaw/issues/88838)** — SQLite session/transcript migration tracking. Open since **2026-06-01**, 18 comments. This is a major architectural effort that needs sustained maintainer coordination.

- **PR #89659** — Feishu retry on send rate-limit errors. Open since **2026-06-03**, P1, gold shrimp rating, needs proof. Feishu is a major channel for Chinese-language users.

- **PR #90480** — WhatsApp live QA coverage expansion. Open since **2026-06-04**, XL size, off-meta tidepool rating. Important for WhatsApp channel reliability but may be deprioritized due to size.

---

*Data source: [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw) — Snapshot taken 2026-06-08.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant & Agent Open-Source Ecosystem

**Date:** 2026-06-08 | **Projects Analyzed:** 14 | **Generated by:** OWL

---

## 1. Ecosystem Overview

The open-source personal AI agent landscape is in a period of rapid, parallel maturation across a dozen active projects, all converging on a common architecture: gateway-based multi-channel routing, tool-equipped agent loops, sandboxed execution, and session/transcript persistence. **OpenClaw** and **ZeroClaw** lead in raw community scale (500 and 50 PRs updated daily, respectively), while mid-tier projects like **NanoBot**, **Hermes Agent**, **IronClaw**, and **CoPaw** are in focused hardening phases. Smaller-footprint projects like **PicoClaw**, **NanoClaw**, and **Moltis** serve niche deployment scenarios. Three projects — **NullClaw**, **TinyClaw**, and **ZeptoClaw** — showed no activity in the reporting window, suggesting dormancy or pre-launch status. The ecosystem is clearly past the proof-of-concept stage; the dominant themes today are **stability, security hardening, and production operability** rather than novel feature invention.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Open PRs | Releases (24h) | Health Signal |
|---|---|---|---|---|---|
| **OpenClaw** | 296 | 500 | 374 | None | 🔴 High throughput, large review backlog |
| **ZeroClaw** | 50 | 50 | 39 | None (v0.8.0 prep) | 🟢 Rapid iteration, strong merge cadence |
| **Hermes Agent** | 50 | 50 | ~40+ | None | 🟠 Desktop regression wave, otherwise active |
| **PicoClaw** | 21 | 19 | 7 | Nightly build | 🟢 Stable, quality-focused sprint |
| **IronClaw** | 50 | 38 | 22 | None | 🟢 Deep in Reborn architecture migration |
| **NanoBot** | 7 | 18 | 14 | None | 🟢 Maturation, security hardening |
| **CoPaw** | 5 | 2 | 2 | None | 🟡 Post-release feedback gathering |
| **NanoClaw** | 3 | 9 | 6 | None | 🟡 Onboarding/stabilization focus |
| **LobsterAI** | 15 | 0 | 0 | None | 🔴 No PRs, stale backlog accumulating |
| **Moltis** | 1 | 3 | 3 | None | 🟡 Active but small-scale |
| **NullClaw** | 0 | 0 | 0 | None | ⚪ No activity |
| **TinyClaw** | 0 | 0 | 0 | None | ⚪ No activity |
| **ZeptoClaw** | 0 | 0 | 0 | None | ⚪ No activity |

*Health score considers merge cadence, backlog age, release frequency, and severity of open bugs.*

---

## 3. OpenClaw's Position

**Community size:** OpenClaw is the ecosystem's clear leader in raw engagement — 500 PRs and 296 issues in 24 hours is 10× the volume of most competitors. This scale is both a strength (broad testing surface, diverse contributions) and a challenge (374 open PRs indicate a significant maintainer review bottleneck).

**Advantages vs. peers:**
- **Breadth of channel integrations**: OpenClaw supports the widest range of messaging platforms (Feishu, iMessage, Slack, WhatsApp, Telegram, etc.) with active dispatch logic, whereas most competitors support 3–5 channels.
- **Control UI / WebUI investment**: Multiple PRs in this cycle target the WebUI sidebar, model picker, and session management — OpenClaw treats the management console as a first-class product, not an afterthought.
- **Skills runtime**: The `SKILL.md`-based skill system with a file-watcher runtime is more developed than equivalents in PicoClaw or NanoClaw, though the fd leak fix (#91252) shows it needs hardening.

**Technical approach differences:**
- Unlike **Hermes Agent** (Electron desktop client focus) or **IronClaw** (Rust-based Reborn architecture), OpenClaw is Node.js/TypeScript-centric with a gateway-first, channel-agnostic design.
- Compared to **ZeroClaw** (which is building the zerocode TUI client and schema-v3 provider abstraction), OpenClaw's UI investment is web-based rather than terminal-first.
- OpenClaw's SQLite session/transcript migration (#88838) parallels similar persistence hardening in other projects but is more advanced in its branch-by-abstraction approach.

**Key vulnerability:** OpenClaw has the highest count of P1 bugs with **no linked fix PR** in the ecosystem (9 of 13 P1s unassigned). The security-critical message leakage bug (#25592) with 27 comments and diamond lobster rating has been open for ~3.5 months. This backlog risk is OpenClaw's most significant competitive weakness relative to leaner projects like PicoClaw or NanoBot where the review pipeline is more responsive.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging independently across multiple projects, indicating ecosystem-wide priorities:

### 🔐 Security Sandboxing
Projects are independently discovering and hardening execution boundaries:
- **NanoBot**: bwrap sandbox HOME reset failure (#4237), Ubuntu 24.04 namespace issues (#4236)
- **OpenClaw**: Sandbox `workspaceAccess:none` makes workspace read-only (#37634); write tool append mode needed (#40001)
- **ZeroClaw**: Bubblewrap sandbox configurable writable paths requested (#5127)
- **PicoClaw**: Skill binary requirement filtering (#2351, merged) to prevent advertising unusable capabilities

**Shared need:** A standardized, cross-platform sandbox configuration interface with clear writable-path declarations.

### 💬 Session / Transcript Management Correctness
Every project with meaningful usage reports is hitting session state bugs:
- **OpenClaw**: SQLite migration tracking (#88838); compaction safeguard allows context ceiling breach (#90639); WebSocket reconnect kills sessions (#38091)
- **NanoBot**: `find_legal_message_start` drops all messages after orphan tool results (#4203); empty-response retry duplicates user turns (#4234)
- **Moltis**: Persisted tool/tool-result caps during session rehydration (#1089)
- **ZeroClaw**: Context compression not triggered in daemon mode (#4880, closed)

**Shared need:** Robust session state management with crash recovery, clear compaction semantics, and history rehydration safety.

### 📊 Cost / Token Efficiency
Production users are increasingly cost-conscious:
- **ZeroClaw**: Skill compilation to reduce token spend (#5146, 9 comments)
- **OpenClaw**: Cumulative context usage in /usage requested (#40215)
- **Hermes Agent**: Honcho loop guardrail bypass causing 39–58 tool calls per turn (#41615, fixing)
- **LobsterAI**: Repeated output consuming excessive tokens (#2121)
- **NanoBot**: Context-pressure-based microcompaction (#4238)

**Shared need:** Token budgeting primitives — context budget enforcement, skill injection optimization, and loop guardrails.

### 🌐 Channel Integration Reliability
Multi-channel dispatch remains fragile across the ecosystem:
- WhatsApp voice/mention routing: **Hermes Agent** (#41616), **NanoBot** (#2663), **OpenClaw** (Feishu dispatch crash #88234)
- Telegram streaming/locations: **Moltis** (#1113), **PicoClaw** (#3049), **OpenClaw** (#87326)
- Multi-account support: **Hermes Agent** WeChat multi-account (#29144), **NanoClaw** account rotation drift (#2706)

### 🔄 Gateway Restart Recovery
A systemic weakness across projects:
- **OpenClaw**: Delivery recovery fails after restart (#91212); approvals lost (#64664); ancient subagent tasks resurrected (#69778)
- **Hermes Agent**: Windows gateway restart fails under guard (#41148); sleep/wake recovery (#40135, merged)

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | IronClaw | ZeroClaw | NanoBot | PicoClaw | NanoClaw | CoPaw |
|---|---|---|---|---|---|---|---|---|
| **Primary UI** | WebUI | Electron Desktop | WebChat v2 (beta) | zerocode TUI | WebUI | CLI-first | CLI + MCP | Web UI |
| **Language** | TypeScript/Node | Python | Rust | Rust + TypeScript | Python | Go | TypeScript | Python |
| **Target User** | Power user / team | Consumer desktop | Enterprise infra | Developer/CLI | Self-hoster | Edge/mobile | Container teams | Alibaba ecosystem |
| **Architecture** | Gateway + plugins | Gateway + ACP | Reborn (WASM components) | Gateway + schema-v3 | Gateway + MCP | Gateway + skills | Container-native | Gateway + ACP |
| **Key Differentiator** | Broadest channel support + maturing skills runtime | Desktop-first experience + multi-platform OAuth | Rust performance + WASM adapter isolation | TUI client + provider ecosystem expansion | Security sandbox emphasis | Small footprint (Android/ARM64, edge DB) | Container sandbox isolation | ACP protocol leadership |
| **Deployment Model** | CLI / daemon | Desktop app / CLI | CLI + WebChat | CLI / daemon / docker | CLI / daemon | CLI / mobile / edge | Docker-native | Web / docker |

**Notable architectural splits:**
- **Rust vs. TypeScript vs. Python**: IronClaw and ZeroClaw are betting on Rust for core infrastructure (safety, performance). OpenClaw and NanoClaw use Node.js/TypeScript for rapid iteration. Hermes Agent and CoPaw use Python for ML ecosystem compatibility.
- **Terminal vs. Web vs. Desktop UI**: ZeroClaw is the only project investing heavily in terminal UI (zerocode TUI). Hermes Agent is the only one with a full Electron desktop client. OpenClaw and NanoBot prioritize web-based dashboards.
- **Container-native**: NanoClaw uniquely targets a Docker-first deployment model with per-container isolation.

---

## 6. Community Momentum & Maturity

### 🚀 Rapid Iteration Tier
- **OpenClaw**: Maximum velocity but review backlog is straining (374 open PRs). Needs maintainer scaling.
- **ZeroClaw**: Strong merge cadence (11 merged/closed today), clear release cycle (v0.8.0 imminent), broad contributor base.
- **Hermes Agent**: High throughput (50/50 issues/PRs) with responsive review (6 merged today), but desktop regression rate is concerning.

### 🔧 Stabilization Tier
- **PicoClaw**: Aggressive defensive quality fixes, nightly build cycle, approaching stable v0.2.9. Well-managed for its size.
- **NanoBot**: Security sandbox hardening phase, session management bugs being addressed. Small but focused.
- **IronClaw**: Deep in Reborn migration — high architectural activity but no user-facing releases yet. Building for the next phase.

### 📋 Feedback Gathering Tier
- **CoPaw**: Post-v1.1.10 regression reports coming in, ACP protocol work progressing. Needs to address upgrade breakage (#4989).
- **NanoClaw**: Setup hardening and contributor onboarding focus. Smaller scale but methodical.
- **Moltis**: Three focused PRs (streaming, rehydration, logging) suggest a lean, well-managed backlog.

### ⚠️ At-Risk Tier
- **LobsterAI**: Zero PRs, zero releases, 14 of 15 issues stale. Silent failure pattern in the skill system undermining trust. Risk of community attrition if not addressed.
- **NullClaw / TinyClaw / ZeptoClaw**: No observable activity. Status unknown.

---

## 7. Trend Signals

### 📈 A2A Protocol Convergence
Three projects (Hermes Agent #5146 comments, ZeroClaw #3566 with 7👍, OpenClaw via multi-agent routing discussions) are actively pursuing Google's A2A protocol. This is the clearest ecosystem-wide strategic signal: **interoperability between agent frameworks is becoming a first-class requirement**, not a nice-to-watch. Developers should begin designing agent-to-agent communication interfaces now.

### 🛡️ Security Sandboxing as Table Stakes
Five projects are simultaneously hardening execution sandboxing (NanoBot, OpenClaw, ZeroClaw, PicoClaw, NanoClaw). The pattern is clear: **untrusted tool execution with configurable filesystem and network boundaries is becoming expected**, not optional. The project that solves sandboxing cleanly (declarative config, cross-platform compatibility) will have a significant adoption advantage.

### 💸 Production Cost Awareness
Four projects (ZeroClaw, OpenClaw, Hermes Agent, LobsterAI) have users explicitly burning tokens and demanding accounting/optimization. The era of free-form, unlimited context injection is ending. **Token budgeting, skill compilation, and loop guardrails** are becoming production requirements. Developers building agent orchestration should context-engineering cost modeling into their architecture.

### 🔄 The Silent Failure Anti-Pattern
Across OpenClaw (message leakage, delivery recovery failure), Hermes Agent (config migration kills tools, cron silent fallback), NanoClaw (setup hangs 120s), and LobsterAI (skills toggle broken, OAuth token lost), **silent failures are the primary driver of user distrust**. The ecosystem collectively needs better error surfacing, validation-at-config-time, and operational diagnostics. The `openclaw doctor` pattern is a start but needs to become standard.

### 🖥️ Desktop Client as Gateway to Adoption
Hermes Agent's experience shows that the Electron desktop client is the primary surface where new users encounter the tool — and where regressions are most felt. ZeroClaw's zerocode TUI takes the opposite approach. **The question of terminal-first vs. desktop-first vs. web-first UI is unresolved** and likely audience-dependent. However, client-side quality is clearly a retention factor.

### 🧱 Managed UV / Resolver Hermeticity
Hermes Agent (#41534) and others are grappling with hermetic runtime resolution — `managed_uv` needs fallback binary path recovery. As these projects mature, **self-contained, hermetic runtime management** (no ambient system dependencies) is becoming critical for reliable deployment.

---

*Report generated by OWL. Data sourced from 14 GitHub repositories, snapshot 2026-06-08. All issue and PR counts reflect activity in the preceding 24-hour window.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-08

---

## 1. Today's Overview

NanoBot remains in a highly active development phase with **7 issues** and **18 pull requests** updated in the last 24 hours. The project shows strong community engagement: 14 PRs are open and actively iterating, while 4 have been merged/closed recently. No new releases were published today. The activity is concentrated in three areas — **sandbox/security hardening**, **session/message management correctness**, and **WebUI enhancements** — indicating the project is in a maturation phase focused on stability and developer experience rather than feature expansion.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours.

---

## 3. Project Progress

### Merged / Closed PRs (4)

| # | PR | Summary |
|---|-----|---------|
| [#4227](https://github.com/HKUDS/nanobot/pull/4227) | `fix: preserve empty-string reasoning_content` | Fixes a bug where custom providers (e.g., DeepSeek, Kimi) returning `reasoning_content=""` had it coerced to `None`, dropping the field entirely. Important for providers that explicitly signal "no reasoning this turn." |
| [#4240](https://github.com/HKUDS/nanobot/pull/4240) | `feat(webui): render ANSI output in code blocks` | Adds an ANSI SGR parser to the WebUI code block shell, supporting 256-color, RGB, bold, italic, underline, and inverse styles. Copy-as-clean-text strips control sequences. |
| [#2885](https://github.com/HKUDS/nanobot/pull/2885) | `fix(feishu): resolve mentions and token init` | Resolves `@_user_n` placeholders with actual user info in Feishu messages and fixes access token initialization. This PR had been open since April 2026. |
| [#2663](https://github.com/HKUDS/nanobot/pull/2663) | `fix(whatsapp): handle LID group mentions` | Fixes WhatsApp group mention detection for LID and device-suffixed bot JIDs, and treats swipe replies to bot messages as addressed when `groupPolicy=mention`. Open since March 2026. |

**Key takeaway:** Two long-standing channel bugs (Feishu mentions, WhatsApp LID mentions) were finally merged, improving reliability for users on those platforms. The `reasoning_content` fix addresses a real interoperability issue with major Chinese model providers.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **[#2256](https://github.com/HKUDS/nanobot/issues/2256)** — 飞书话题群bot回复问题 (4 comments) — *Closed*
   - **Underlying need:** Feishu topic group users expect the bot to reply within the same topic thread rather than the root. This is a platform-convention expectation. The issue was closed (likely by the merged PR #2885 or a related fix), suggesting the community need was addressed.

2. **[#4203](https://github.com/HKUDS/nanobot/issues/4203)** — `find_legal_message_start` discards all messages after orphan tool results (2 comments) — *Open*
   - **Underlying need:** Session history correctness. When tool results appear without a matching assistant tool_call (e.g., due to provider quirks or partial failures), the entire conversation history is silently dropped. This is a **data-loss-adjacent** bug that could cause agents to lose context mid-conversation. A fix PR [#4219](https://github.com/HKUDS/nanobot/pull/4219) is already open.

3. **[#4237](https://github.com/HKUDS/nanobot/issues/4237)** — bwrap sandbox doesn't reset `HOME` (1 comment) — *Open*
4. **[#4236](https://github.com/HKUDS/nanobot/issues/4236)** — bwrap sandbox fails on Ubuntu 24.04 (1 comment) — *Open*
   - **Underlying need:** Both filed by the same author (`primit1v0`) within hours, indicating a real user hitting sandbox deployment issues on modern Linux. Fix PRs [#4239](https://github.com/HKUDS/nanobot/pull/4239) (HOME fix) is already open. The Ubuntu 24.04 namespace issue (#4236) has no PR yet and may need a documentation or configuration fix.

### Most Active PRs (by update recency and scope)

- **[#4238](https://github.com/HKUDS/nanobot/pull/4238)** — "Gate microcompact by context pressure" — Extracts context governance into a `ContextGovernor` class, gating compaction on actual context pressure rather than fixed counts. This is a **significant architectural improvement** for long-running sessions.
- **[#4190](https://github.com/HKUDS/nanobot/pull/4190)** — "Improve tool call validation strictness" — Prevents silent repair of invalid tool arguments into `{}`, instead rejecting them with explicit errors. Improves debuggability.

---

## 5. Bugs & Stability

### Ranked by Severity

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| 🔴 **High** | [#4203](https://github.com/HKUDS/nanobot/issues/4203) | `find_legal_message_start` drops **all** messages when orphan tool results exist — silent context loss | [#4219](https://github.com/HKUDS/nanobot/pull/4219) (open) |
| 🔴 **High** | [#4234](https://github.com/HKUDS/nanobot/issues/4234) | Empty-response retry in `/v1/chat/completions` **duplicates user turns** in session history | [#4234](https://github.com/HKUDS/nanobot/pull/4234) (open, same number = fix PR) |
| 🟠 **Medium** | [#4237](https://github.com/HKUDS/nanobot/issues/4237) | bwrap sandbox `HOME` not reset — tool writes fail inside sandbox | [#4239](https://github.com/HKUDS/nanobot/pull/4239) (open) |
| 🟠 **Medium** | [#4236](https://github.com/HKUDS/nanobot/issues/4236) | bwrap sandbox fails on Ubuntu 24.04 due to restricted user namespaces | None yet |
| 🟡 **Low** | [#4105](https://github.com/HKUDS/nanobot/issues/4105) | Custom provider drops `reasoning_content` when empty string | Fixed by [#4227](https://github.com/HKUDS/nanobot/pull/4227) (merged) |
| 🟡 **Low** | [#4230](https://github.com/HKUDS/nanobot/issues/4230) | `streamableHttp` MCP has `timeout=None` — can hang indefinitely on unresponsive servers | [#4230](https://github.com/HKUDS/nanobot/pull/4230) (open, fix PR) |

**Stability assessment:** The two high-severity bugs (#4203, #4234) both involve **session history corruption** — one drops messages, the other duplicates them. Both have fix PRs open, which is positive. The bwrap sandbox issues suggest the project's security sandbox feature needs more testing across Linux distributions.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signal Strength | Likely Timeline |
|---------|-------|-----------------|-----------------|
| Show version in WebUI | [#4233](https://github.com/HKUDS/nanobot/issues/4233) | ✅ **Already implemented** — PR [#4235](https://github.com/HKUDS/nanobot/pull/4235) open | Next release |
| Model parameter for `spawn` tool | [#4231](https://github.com/HKUDS/nanobot/issues/4231) | 🟡 Moderate — common use case (cheap subagent for simple tasks, powerful model for complex ones) | Likely v0.x |
| Shared voice input / transcription | [#4232](https://github.com/HKUDS/nanobot/pull/4232) | 🟡 Moderate — PR already open, refactors transcription from channel-only to global config | Next release |
| Context-pressure-based microcompaction | [#4238](https://github.com/HKUDS/nanobot/pull/4238) | 🟢 Strong — architectural improvement, already in PR review | Next release |

**Prediction:** The next release will likely include the WebUI version display, shared transcription config, and the context governor refactor. The `spawn` model override is a logical follow-up but may need more design discussion.

---

## 7. User Feedback Summary

### Pain Points

1. **Session history fragility** — Multiple bugs (#4203, #4234) reveal that the session management layer is a critical weak point. Users running long conversations or using the OpenAI-compatible API are at risk of silent context loss or message duplication. This is the **most urgent user-facing concern**.

2. **Sandbox deployment friction** — The bwrap sandbox, while powerful, is causing real deployment issues on Ubuntu 24.04 (#4236, #4237). Users who enable security sandboxing are hitting environment and permission issues that block tool execution entirely.

3. **Channel-specific quirks** — Feishu and WhatsApp users have been waiting months for mention-handling fixes (#2885 merged after ~2 months, #2663 after ~2.5 months). This suggests channel integrations may need more dedicated maintenance or testing infrastructure.

### Satisfaction Signals

- The `reasoning_content` fix (#4227) was merged quickly after the issue was filed (7 days), showing responsive handling of provider interoperability bugs.
- The WebUI ANSI rendering PR (#4240) addresses a quality-of-life improvement that terminal-savvy users clearly want.
- The `spawn` model override request (#4231) signals that users are building **multi-agent workflows** and need finer control — a sign of advanced adoption.

---

## 8. Backlog Watch

These items have been open for extended periods and may need maintainer attention:

| Item | Age | Description | Risk |
|------|-----|-------------|------|
| [#2663](https://github.com/HKUDS/nanobot/pull/2663) (PR) | ~2.5 months | WhatsApp LID mention fix | ✅ **Merged today** — resolved |
| [#2885](https://github.com/HKUDS/nanobot/pull/2885) (PR) | ~2 months | Feishu mention resolution | ✅ **Merged today** — resolved |
| [#3982](https://github.com/HKUDS/nanobot/pull/3982) (PR) | ~2 weeks | Scripted agent runner test harness | Still active, needs review |
| [#3983](https://github.com/HKUDS/nanobot/pull/3983) (PR) | ~2 weeks | Runner blocked tool-call finish reason tests | Still active, needs review |
| [#4053](https://github.com/HKUDS/nanobot/pull/4053) (PR) | ~1.5 weeks | Read-only root write-path protection | Security-related, should be prioritized |
| [#4119](https://github.com/HKUDS/nanobot/pull/4119) (PR) | ~1.5 weeks | Relative symlink workspace escape fix | Security-related, should be prioritized |
| [#4123](https://github.com/HKUDS/nanobot/pull/4123) (PR) | ~1 week | MCP SSRF guard for HTTP URLs | Security-related, should be prioritized |

**Recommendation:** PRs #4053, #4119, and #4123 are all **security-hardening** PRs that have been open for 1–2 weeks. Given the project's focus on sandboxing and tool execution security, these should be reviewed and merged with priority. The test harness PRs (#3982, #3983) are also valuable for preventing regressions in the runner layer.

---

*Data source: [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot) — Digest generated 2026-06-08*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-08

---

## 1. Today's Overview

Hermes Agent remains in a highly active development phase, with **50 issues** and **50 PRs** updated in the last 24 hours and no new releases, indicating the project is deep in a pre-release integration cycle. The PR pipeline is notably efficient: 6 of today's updated PRs are already closed/merged, suggesting a responsive review process. Activity is heavily concentrated on three fronts — **Desktop/Electron client stability** (macOS signing, Windows gateway restart, Wayland flickering, sleep/wake recovery), **multi-platform gateway hardening** (Discord timeout on Windows, WhatsApp voice/routing, email IMAP login, systemd exit codes), and **agent runtime reliability** (Bedrock duplication, cron silent-fallback, tool-loop guardrails, rate-limit recovery, Honcho runaway loops). The volume and severity distribution of bugs — several P1 and P2 items surfacing within the same 24-hour window — signals that recent refactors (desktop OAuth, config migration v25→v26, the managed_uv resolver) introduced regressions that are now being caught by a growing user base.

---

## 2. Releases

**No new releases** in the reporting window.

---

## 3. Project Progress

The following **6 PRs were closed/merged** in this period, representing completed work shipping toward the next release:

| # | PR | What landed |
|---|---|---|
| [40605](https://github.com/NousResearch/hermes-agent/pull/40605) | fix(hindsight) | Memory plugin now sends only **new-turn delta** on `append` instead of re-sending the entire session — correctness fix scoped to `plugins/memory/hindsight/` |
| [41215](https://github.com/NousResearch/hermes-agent/pull/41215) | feat(gateway) | Terminal tool calls now render as native **\`\`\`bash\`\`\` fenced code blocks** on every markdown-capable platform, replacing flat `terminal: "cmd…"` lines |
| [40135](https://github.com/NousResearch/hermes-agent/pull/40135) | fix(desktop) | **Sleep/wake recovery** — desktop chat no longer stays locked on the "Starting…" placeholder after macOS sleep/wake cycles |
| [41568](https://github.com/NousResearch/hermes-agent/pull/41568) | security | **Dependency hardening** — bumps PyJWT → 2.13.0, aiohttp → 3.14.0, resolving idna/urllib3; clears **12 CVEs** (#41374) |
| [41635](https://github.com/NousResearch/hermes-agent/pull/41635) | feat(gateway) | **macOS launchd identity hardening** — optional `Hermes Agent.app` wrapper identity so privacy/TCC prompts show a named app instead of generic Python; safer PATH handling |
| [41569](https://github.com/NousResearch/hermes-agent/pull/41569) | fix(desktop) | **\`/exit\` / \`/quit\` issues routed through Electron** for Desktop sessions, fixing the blocked-command bug (#41417) |

---

## 4. Community Hot Topics

**A2A Protocol Support** — [Issue #514](https://github.com/NousResearch/hermes-agent/issues/514) (101 comments, 18 👍, authored by founder teknium1): The single most-engaged issue. The community wants first-class support for [Google's A2A protocol](https://a2a-protocol.org), positioning Hermes as an inter-agent orchestrator. This signals a strategic direction beyond single-agent workflows — remote agent discovery and cross-platform interoperability. The high attention count and reaction count relative to its age suggest this is a marquee roadmap item.

**Weixin (WeChat) Multi-Account / Enterprise** — [Issue #29144](https://github.com/NousResearch/hermes-agent/issues/29144) (2 comments, 4 👍): The gateway adapter architecture currently binds a single WeChat account, which is a hard blocker for enterprise team deployments. Unlike Telegram/Discord/QQ, WeChat's product model fundamentally requires multi-account support. This surfaced recently (May 20) and already has traction.

**Desktop Client-Only Install** — [Issue #38602](https://github.com/NousResearch/hermes-agent/issues/38602) (2 comments, 8 👍): The Electron desktop client auto-bootstraps a full Hermes runtime regardless of whether the user wants a thin client connected to a remote installation. The high 👍 from only 2 comments indicates broad silent demand for a daemon/client split.

**Telegram Video Visibility** — [Issue #41366](https://github.com/NousResearch/hermes-agent/issues/41366) + **WhatsApp Voice Bridge** — [Issue #41616](https://github.com/NousResearch/hermes-agent/pull/41616): Adjacent Telegram/WhatsApp media issues highlight a recurring gap: the mesh gateway adapters download media but fail to expose the cached paths to the agent loop. The WhatsApp half already has a fix in progress.

**Unified Plugin Route Selector** — [Issue #41190](https://github.com/NousResearch/hermes-agent/issues/41190): Plugin authors need a single stable hook to override provider/model for every LLM call. Routing logic is currently fragmented across config, heuristics, and failure-recovery code paths — a structural limitation for advanced customizations.

---

## 5. Bugs & Stability

### 🔴 Critical (P1)

**Config migration silently kills all tools** — [Issue #38798](https://github.com/NousResearch/hermes-agent/issues/38798)
`hermes update` migration v25→v26 rewrites `platform_toolsets` from valid `hermes-cli` to invalid `hermes`, causing **all tools to silently stop working** with no user-visible error. This is the most dangerous open bug: it affects every user running auto-update and the failure mode (silent) is maximally hostile to diagnosis. No fix PR listed yet.

**Gateway ignores `--profile` flag** — [Issue #41355](https://github.com/NousResearch/hermes-agent/issues/41355)
`hermes gateway run --profile <name>` loads config, SOUL.md, MEMORY.md, USER.md, and skills from the default profile instead of the target. Multi-profile users cannot isolate their workspaces. No fix PR listed yet.

### 🟠 High (P2)

| # | Issue | Status |
|---|---|---|
| [41631](https://github.com/NousResearch/hermes-agent/issues/41631) | Gateway exits code 1 on `systemctl stop` → unit marked `failed` | No fix PR |
| [41539](https://github.com/NousResearch/hermes-agent/issues/41539) | Discord gateway times out after 30s on Windows native | No fix PR |
| [41457](https://github.com/NousResearch/hermes-agent/issues/41457) | Shell hooks (pre_tool_call) not registered in Desktop TUI / ACP adapter — security-related silent bypass | No fix PR |
| [41534](https://github.com/NousResearch/hermes-agent/issues/41534) | `managed_uv` resolver has no fallback binary path recovery | No fix PR |
| [41517](https://github.com/NousResearch/hermes-agent/issues/41517) | Desktop chat worker loses selected profile and falls back to default at runtime | No fix PR |
| [41296](https://github.com/NousResearch/hermes-agent/issues/41296) | Bedrock regional inference profiles (jp/eu/apac) fail on mid-session `/model` switch | No fix PR |
| [41355](https://github.com/NousResearch/hermes-agent/issues/41355) | Bedrock GPT-5.x Responses streams duplicate output_items producing 9500+ char duplicates | **Fixing** — [PR #41332](https://github.com/NousResearch/hermes-agent/pull/41332) |
| [41331](https://github.com/NousResearch/hermes-agent/issues/41331) | Email IMAP/SMTP login hardcoded to EMAIL_ADDRESS, breaks alias domains | No fix PR |
| [41366](https://github.com/NousResearch/hermes-agent/issues/41366) | Telegram video messages downloaded but never exposed to agent | No fix PR |
| [41377](https://github.com/NousResearch/hermes-agent/issues/41377) | Cron job main model silent fallback on 404 — run recorded as ok with no error disclosure | No fix PR |
| [41392](https://github.com/NousResearch/hermes-agent/issues/41392) | `hermes cron list` crashes with TypeError when any job has `deliver: null` | **Fixing** — [PR #41604](https://github.com/NousResearch/hermes-agent/pull/41604) |
| [41148](https://github.com/NousResearch/hermes-agent/pull/41148) | Windows gateway restart fails under `_HERMES_GATEWAY=1` guard | **Fix in review** |
| [41615](https://github.com/NousResearch/hermes-agent/pull/41615) | Honcho memory tools bypass loop guardrail for 39–58 calls / ~95s | **Fix in review** |

### 🟡 Medium (P3) — Selected

| Issue | Summary |
|---|---|
| [#41092](https://github.com/NousResearch/hermes-agent/issues/41092) | Desktop auxiliary model switch preserves stale `base_url` |
| [#38015](https://github.com/NousResearch/hermes-agent/issues/38015) | Linux Wayland: chat transcript flickers every few seconds (no workaround) |
| [#41499](https://github.com/NousResearch/hermes-agent/issues/41499) | macOS build fails with ambiguous codesign identity — **Fixing** [PR #41524](https://github.com/NousResearch/hermes-agent/pull/41524) |
| [#41518](https://github.com/NousResearch/hermes-agent/issues/41518) | macOS `/Applications` auto-place + Dock pin removed by OAuth refactor |
| [#41327](https://github.com/NousResearch/hermes-agent/issues/41327) | Desktop dashboard serves HTTP 404 — `dist/` packed in `app.asar` but never unpacked |
| [#41311](https://github.com/NousResearch/hermes-agent/issues/41311) | Kanban dispatcher injects archived skill, crashing workers |
| [#41379](https://github.com/NousResearch/hermes-agent/issues/41379) | `reasoning_effort: none` silently dropped on Anthropic-protocol third-party providers |
| [#41490](https://github.com/NousResearch/hermes-agent/issues/41490) | Agent loops on identical tool calls despite being blocked |

---

## 6. Feature Requests & Roadmap Signals

**Likely in the next release (already have active PRs):**
- **Windows gateway transactional restart** — [PR #41148](https://github.com/NousResearch/hermes-agent/pull/41148) — fail-closed coordinator, no legacy fallback
- **macOS launchd identity hardening** — [PR #41635](https://github.com/NousResearch/hermes-agent/pull/41635)
- **WhatsApp voice message support** — [PR #41616](https://github.com/NousResearch/hermes-agent/pull/41616)
- **Tool progress `full` mode** — [PR #41617](https://github.com/NousResearch/hermes-agent/pull/41617) — untruncated tool arguments in gateway notifications
- **Delegate task goal previews** — [PR #41618](https://github.com/NousResearch/hermes-agent/pull/41618)
- **Honcho loop guardrail fix** — [PR #41615](https://github.com/NousResearch/hermes-agent/pull/41615)
- **Nous rate-limit re-probe** — [PR #41610](https://github.com/NousResearch/hermes-agent/pull/41610)
- **RPC socket reuse on Windows** — [PR #41638](https://github.com/NousResearch/hermes-agent/pull/41638) — prevents TIME_WAIT exhaustion

**Strong community demand, no PR yet (likely next-next release):**
- **A2A Protocol support** — [Issue #514](https://github.com/NousResearch/hermes-agent/issues/514) — founder-authored, highest engagement
- **Desktop thin-client mode** — [Issue #38602](https://github.com/NousResearch/hermes-agent/issues/38602) — 8 👍, clear use case
- **WeChat multi-account** — [Issue #29144](https://github.com/NousResearch/hermes-agent/issues/29144) — enterprise blocker
- **Unified plugin route selector** — [Issue #41190](https://github.com/NousResearch/hermes-agent/issues/41190) — structural refactor needed
- **Hermes Workspace integration in Desktop** — [Issue #41553](https://github.com/NousResearch/hermes-agent/issues/41553)
- **Tool error classification for smarter recovery** — [Issue #41314](https://github.com/NousResearch/hermes-agent/issues/41314)

---

## 7. User Feedback Summary

**Pain points dominating the signal:**

1. **Desktop client quality** is the single largest source of friction. Users report: sleep/wake lockup (now fixed), macOS codesign failures, Wayland flickering, dashboard 404s, profile loss at runtime, and `/exit` being blocked. The Electron client is clearly the primary surface where new users encounter Hermes, and the regression rate from recent refactors (OAuth, config migration) is high.

2. **Silent failures erode trust.** Multiple bugs share a pattern: the system fails without surfacing an error — config migration kills tools silently, cron fallback records success, `reasoning_effort: none` is dropped, shell hooks don't fire. Users cannot diagnose or work around failures they cannot see.

3. **Multi-platform gateway parity is incomplete.** WeChat, Telegram, WhatsApp, Discord, and email each have platform-specific bugs (multi-account, video exposure, voice messages, Windows timeout, IMAP login). The adapter abstraction is leaking platform-specific assumptions.

4. **Enterprise/team use cases are emerging.** WeChat multi-account, profile isolation, and plugin route overrides all point to users deploying Hermes beyond personal single-user setups. The current architecture (single WeChat binding, profile flag ignored) is not ready for this.

5. **Positive signals:** The community is actively contributing fixes (12+ unique PR authors in today's batch), the founder is personally engaged on the A2A protocol issue, and the security PR clearing 12 CVEs was merged quickly. The project's velocity is high and the review pipeline is functional.

---

## 8. Backlog Watch

These important items have **no fix PR and limited maintainer response** — they risk becoming long-tail frustrations:

| # | Issue | Why it matters |
|---|---|---|
| [#38798](https://github.com/NousResearch/hermes-agent/issues/38798) | Config migration silently kills all tools | Affects **every** user on auto-update; silent failure mode |
| [#41355](https://github.com/NousResearch/hermes-agent/issues/41355) | Gateway ignores `--profile` flag | Blocks multi-profile workflows entirely |
| [#41457](https://github.com/NousResearch/hermes-agent/issues/41457) | Shell hooks bypassed in Desktop/ACP | Security-adjacent: pre_tool_call veto hooks silently ignored |
| [#41327](https://github.com/NousResearch/hermes-agent/issues/41327) | Desktop dashboard HTTP 404 (asarUnpack) | Packaged app is non-functional for dashboard users |
| [#38015](https://github.com/NousResearch/hermes-agent/issues/38015) | Linux Wayland flickering, no workaround | Platform-specific, no mitigation path for affected users |
| [#41331](https://github.com/NousResearch/hermes-agent/issues/41331) | Email IMAP login hardcoded | Blocks custom-domain email setups |
| [#41377](https://github.com/NousResearch/hermes-agent/issues/41377) | Cron silent fallback with no error disclosure | Scheduled tasks appear to succeed but use wrong model |
| [#29144](https://github.com/NousResearch/hermes-agent/issues/29144) | WeChat multi-account enterprise blocker | Growing demand, no architectural response yet |

---

*Generated by OWL for NousResearch/hermes-agent — 2026-06-08. Data window: last 24h.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-08

---

## 1. Today's Overview

PicoClaw is in a high-activity maintenance and hardening phase leading up to the v0.2.9 release cycle. In the last 24 hours the project saw **21 issues updated** (4 still open, 17 closed) and **19 pull requests updated** (7 open, 12 merged/closed), alongside a **nightly build release**. The majority of merged PRs are defensive quality fixes targeting unchecked type assertions, ignored I/O errors (`Close()` after `io.Copy`), and config correctness (Anthropic default model ID). A new Kagi search provider was also merged. The volume of zero-comment task-style issues (IDs #3024–#3032, authored by jcafeitosa — likely an internal or bounty sprint) was notably high but all were closed within ~24h, suggesting either rapid resolution or triage cleanup.

---

## 2. Releases

- **Nightly Build** — `v0.2.9-nightly.20260607.7d2b0c2a`
  - This is an automated nightly build; the maintainer explicitly warns it "may be unstable."
  - Content: all changes between `v0.2.9` tag and `main`. The full changelog is at the standard compare URL.
  - No formal stable release note was published today. The trailing `.nightly.*` tag indicates the team is prepping v0.2.9 stability patches.

Full Changelog: https://github.com/sipeed/picoclaw/compare/v0.2.9...main

---

## 3. Project Progress (Closed/Merged PRs)

| # | PR | Author | Summary |
|---|----|--------|---------|
| **#3037** | Add native Kagi web search provider | jp39 | A full new `tools.web` provider for **Kagi Search**, complete with OpenAPI client, config support, `.security.yml` key loading, and UI integration. This is the most substantive feature addition today. |
| **#3036** | fix(config): canonical Anthropic model ID | SutraHsing | Renames the seeded default `claude-sonnet-4.6` → `claude-sonnet-4-6` (dots → hyphens) to match what the Anthropic API actually accepts, preventing a 404 on first use. Adds regression tests. |
| **#3046** | fix(agent): startup-info type assertion ok checks | chengzhichao-xydt | Guards two `map[string]any` type assertions in `agentCmd` to prevent panics if types change. |
| **#3042** | fix: handle os.Getwd() error in evolution skills | chengzhichao-xydt | `_ = os.Getwd()` replaced with proper error handling, preventing confusing downstream "missing directory" errors. |
| **#3040** | fix: singleflight bool assertion guard | chengzhichao-xydt | Adds `ok` check on `singleflight.Group.Do()` result in model probe, preventing nil-panic edge case. |
| **#2936** | feat(skills): skip skills missing required bins | maxmilian | Parses `requires.bins` from `SKILL.md` frontmatter and filters out skills whose binaries aren't on `PATH`, so the agent prompt won't advertise unusable skills (fixes #2351). |
| **#2902** | docs: Android Termux guide | puneetdixit200 | New dedicated guide for running PicoClaw on ARM64 Android via Termux; linked from the existing docs index and README. |
| **#2906** | fix: message bus backpressure & health | SiYue-ZO | Bounded waiting replaces unbounded blocking on saturated queues; per-stream drop stats and health wiring added. |
| **#3033–#3035** | fix: close-error checks on media/file downloads (×3) | chengzhichao-xydt | Replaced `defer Close()` patterns with explicit error checks after `io.Copy` in Feishu media download, generic file copy, and general media download — preventing silent truncation on disk-full/I/O failure. |
| **#3016** | fix: dispatch-task cancel & nil guard on reload | chengzhichao-xydt | Prevents goroutine leak when `Manager.Reload()` overwrites `dispatchTask` without canceling the old context; nil-guards `ts.agent`. |

---

## 4. Community Hot Topics

### 🗨️ Most Commented Issue (still open)
- **Issue #2674** — *Codex OAuth: empty assistant response when ChatGPT backend streams via `response.output_item.done`*
  - **8 comments, 4 👍** | Author: geekgonecrazy | Domain: Provider
  - Users see "model returned an empty response" despite the stream working. This is a real-world usage pain point with the ChatGPT Codex OAuth backend pairing. The issue has been open since late April, suggesting it may need dedicated attention or a workstream for provider streaming edge cases.
  - 🔗 https://github.com/sipeed/picoclaw/issues/2674

### 🔥 Active Open Issues Driving Current PRs
- **Issue #3044** — *Matrix `allow_from` fails for user IDs with colon* (0 comments, but two PRs exist)
  - **Fix PR #3045** (chengzhichao-xydt) is open and ready to merge. The bug prevents any Matrix user from messaging the bot if their ID contains the standard `:domain` syntax.
  - 🔗 https://github.com/sipeed/picoclaw/issues/3044

- **Issue #286** — *Android Termux guide* → resolved via merged **PR #2902**.
  
- **Issue #2978** — *Add omniroute as provider* — stale, low engagement, but signals demand for more provider options on the platform side.

### 📌 Sprint-style task issues (#3024–#3032)
  - All authored by jcafeitosa, likely an internal tradecraft sprint (exchange connectors, risk management, CI/CD, ClawHub). All **closed within ~24h**, indicating either external resolution or self-service task tracking.

---

## 5. Bugs & Stability

### 🔴 High Severity
| Issue | Description | Fix Available? |
|-------|-------------|----------------|
| **#3049** — Telegram ignores location messages | `message.location` is never ingested; Telegram pin-sharing silently dropped with **zero log output**. Breaks location-sharing use case entirely. | No PR yet |
| **#3041** — `mcp add` mis-parses global flags | `DisableFlagParsing: true` causes root-level flags (e.g., `--no-color`) to leak into the MCP add command, breaking `http`/`sse` additions; silently mis-names stdio servers. This corrupts the MCP server list. | **Fix PR #3048** open (afjcjsbx) |
| **#3044** — Matrix `allow_from` broken for colon IDs | `ParseCanonicalID` splits incorrectly on `@user:domain`, silently denying all Matrix users with standard IDs. | **Fix PR #3045** open (chengzhichao-xydt) |

### 🟡 Medium Severity
| Issue | Description | Status |
|-------|-------------|--------|
| **#2674** — Codex OAuth empty responses | Streaming `response.output_item.done` yields empty assistant messages. | Open, stale, 8 comments |
| **#2941** — Anthropic default model ID uses dots not hyphens | Fresh install → immediate 404 from Anthropic API on first use. | **Fixed by PR #3036** (merged) |
| **#2351** — Skills with missing bins advertised in prompt | Agent suggests skills requiring `agent-browser` etc. on machines without them. | **Fixed by PR #2936** (merged) |

### 🟢 Low / Informational
- **#2978** — omniroute provider request (stale, 0 engagement)
- **#2952** — stale feature feedback on UI, exec command, QQ channel behaviors (4 comments, 0 👍)
- **#2834** — request for upgrade-from-source tutorial (stale)

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Signal Strength | Likely in Next Release? |
|---------|--------|-----------------|-------------------------|
| **Kagi web search provider** | PR #3037 (merged) | ✅ Merged | Already in main — will ship with next release |
| **Android Termux support** | PR #2902 (merged) | ✅ Merged (docs) | Shipped |
| **Skill binary requirement filtering** | PR #2936 (merged) | ✅ Merged | Shipped |
| **OmniRoute provider** | Issue #2978 | 🟡 Stale, 0 reactions | Unlikely in v0.2.9 unless picked up by a contributor |
| **Exchange/trading infrastructure** | Issues #3024–#3032 | 🟡 Closed tasks, unknown scope | Unclear — appears to be a parallel internal sprint |

**Prediction for v0.2.9 (stable):** The PR patterns suggest a **quality/stability release** — defensive type assertion guards, I/O error handling, config correctness, backpressure management, and one new provider (Kagi). A stable tag is likely imminent after the P1 bugs (#3041, #3044, #3049) are resolved.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|-----------|----------|-----------|
| **First-run config generates invalid model IDs** | #2941 — Anthropic 404 on fresh install | Frustrating; fixed by PR #3036 but was open since May 25 |
| **Skills silently broken when bins missing** | #2351 → closed by PR #2936 | Resolved; users previously got confused agent suggestions with no way to run them |
| **Location sharing via Telegram completely non-functional** | #3049 (just filed) | Critical for location-aware workflows; no workaround currently documented |
| **Unclear upgrade path** | #2834 — request for "remove old, install new" tutorial | Moderate docs gap; still open |
| **QQ channel restart loop** | #2952 — restart message itself triggers repeated restart | Valid stability concern in Chinese-market deployment |
| **Codex OAuth integration flaky with ChatGPT backend** | #2674 (8 comments, stale since April) | High engagement but no resolution; likely a blocking issue for OAuth users |

**Overall satisfaction signals:** The project is responsive to concrete bugs (rapid PR closures for type assertions, I/O errors, config bugs). Users on edge-case integrations (Codex OAuth, Matrix `allow_from`, Telegram locations) may feel underserved — these remain open with limited maintainer engagement.

---

## 8. Backlog Watch (Items Needing Maintainer Attention)

| Item | Age / Status | Why It Needs Attention |
|------|-------------|----------------------|
| **Issue #2674** — Codex OAuth empty responses | Created April 26, 8 comments, stale, still open 🔗 https://github.com/sipeed/picoclaw/issues/2674 | 8 comments indicate real user pain; stale label suggests it fell off the radar. Needs a definitive answer or PR. |
| **Issue #2978** — Add omniroute provider | Created May 31, stale, 1 comment 🔗 https://github.com/sipeed/picoclaw/issues/2978 | Low engagement but represents platform extensibility demand; a contributor pointer or documentation link to custom provider integration would close it gracefully. |
| **Issue #2952** — UX/feature feedback (exec, QQ, UI) | Created May 27, stale, 4 comments 🔗 https://github.com/sipeed/picoclaw/issues/2952 | Multiple distinct bugs rolled into one issue (QQ restart loop, exec command UX, model provider UI). Needs triage into separate trackable items or a structured response. |
| **Issue #2834** — Upgrade-from-source tutorial | Created May 9, stale 🔗 https://github.com/sipeed/picoclaw/issues/2834 | Simple docs-only fix; would reduce friction for non-package-manager users. |
| **PR #3045** — Matrix `allow_from` fix | Open, targets #3044, no comments 🔗 https://github.com/sipeed/picoclaw/pull/3045 | Straightforward fix for a complete breakage in Matrix integration; should be reviewed and merged promptly. |
| **PR #3048** — MCP add flag parsing fix | Open, targets #3041, no comments 🔗 https://github.com/sipeed/picoclaw/pull/3048 | Fixes a command that can silently corrupt MCP server configuration; high stability impact. |

---

**Digest Summary:** PicoClaw's v0.2.9 cycle is tightening around stability. The team has been aggressive on defensive quality fixes and a new Kagi provider lands. Three open P1 bugs (Telegram locations, MCP add flag parsing, Matrix allow_from) have corresponding PRs ready or close — merging these would materially improve release readiness. The Codex OAuth backlog item (#2674) remains the longest-standing open user-facing regression.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-08

**Repository:** [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. Today's Overview

NanoClaw logged a steady day of development activity on 2026-06-08 with **3 active issues opened** and **9 pull requests touched** (6 open, 3 closed/merged). There were **no new releases** pushed to the repository. The project remains in a rapid contributor-onboarding and hardening phase — most PR authors today are newer contributors filing small, well-scoped bug fixes and documentation improvements under the project's `CONTRIBUTING.md` guidelines. The day's work skews heavily toward setup/deployment reliability, container configuration, and cross-platform account rotation correctness, rather than major new feature work. Given the volume of incoming setup and security-related issues, the project appears to be approaching a stabilization milestone focused on "out-of-box works correctly" improvements rather than feature velocity.

---

## 2. Releases

**None.** No new releases were published in the last 24 hours (or at all in the recent data window). The project remains at approximately **v2.0.64** upstream on `main` (per issue #2711 referencing commit `d144721`).

---

## 3. Project Progress

Three PRs were merged/closed today, each addressing a distinct area of reliability:

- **PR [#2710](https://github.com/nanocoai/nanoclaw/pull/2710) [CLOSED]** — *Docs: Ollama prompt caching documentation.* Adds a new section to `docs/ollama.md` explaining why the Claude-Code-CLI → Ollama pathway is slow by default and how to allow prompt caching by filtering cache-busting hashes. This is a docs-only contribution from @markbala.

- **PR [#2707](https://github.com/nanocoai/nanoclaw/pull/2707) [CLOSED]** — *feat(upgrade): startup tripwire + upgrade marker.* Adds a safeguard that refuses to start NanoClaw unless the install reached its current version through a sanctioned path (`/setup`, `/update-nanoclaw`, `/migrate-nanoclaw`). Raw `git pull` migration skips now fail loudly with a self-healing error message instead of silently breaking at runtime. From @gavrielc — a meaningful operational hardening change.

- **PR [#2706](https://github.com/nanocoai/nanoclaw/pull/2706) [CLOSED]** — *fix(账号轮换): restrict mode switching + calibrate account rotation state.* Prevents Codex/Gemini-backed groups from entering Anthropic's automatic account rotation (which was sending Claude quota notifications to wrong recipients), fixes cursor drift in the DB rotation tracker, adds immediate rotation notification, and adds SIGTERM/SIGKILL cleanup in `killGroup`. From @tier2tech-tian with a Chinese-language PR body — a multi-faceted fix to the cross-platform credential rotation system.

**Notable open PRs advancing:**

- **PR [#2709](https://github.com/nanocoai/nanoclaw/pull/2709)** — DB-backed `env` and `blocked_hosts` columns on `ContainerConfig` (#1867 requested by maintainers), materializing per-container network and environment isolation.
- **PR [#2708](https://github.com/nanocoai/nanoclaw/pull/2708)** — Reap orphaned agent containers on service stop, cleaning up a resource leak.

---

## 4. Community Hot Topics

**By comment count (most engaged):**

- **[Issue #2312](https://github.com/nanocoai/nanoclaw/issues/2312)** — *`groups/global/CLAUDE.md` unconditionally deleted on every startup* (2 comments, opened 2026-05-06, still active). Core complaint: the `migrateGroupsToClaudeLocal()` function deletes a committed file on every restart, leaving every instance in a permanently dirty working tree. This is a long-standing UX/architectural problem (~33 days old) with no fix merged.

- **[Issue #2711](https://github.com/nanocoai/nanoclaw/issues/2711)** — *`create_agent` MCP tool is ungated despite "admin-only" comment — any container can create agent groups.* (0 comments, filed today). This is technically a security boundary issue: the description says admin-only, but the host performs no role check. If containers are running untrusted workloads, this could be escalated privilege concern.

**By update activity (most PRs advanced):**

- **[PR #2531](https://github.com/nanocoai/nanoclaw/pull/2531)** — *fix(poll-loop): suppress duplicate text when send_message fires mid-turn* — open since 2026-05-18 but touched again today, suggesting active back-and-forth.
- **[PR #1626](https://github.com/nanocoai/nanoclaw/pull/1626)** — *Telegram topic isolation with auto-registration* — open since 2026-04-04 (~65 days), revisited today without recent resolution.

---

## 5. Bugs & Stability

**High severity (data integrity / security boundary):**

1. **[Issue #2312 — CLAUDE.md unconditionally deleted on startup](https://github.com/nanocoai/nanoclaw/issues/2312)** — **Severity: Medium-High.** A committed file is removed on every startup, producing a perpetually dirty working tree. Affects all instances that clone and restart. No linked fix PR exists. Status: **unresolved since May 6** (~33 days).

2. **[Issue #2711 — `create_agent` tool is ungated](https://github.com/nanocoai/nanoclaw/issues/2711)** — **Severity: Medium.** Described as admin-only but exposed to every container without role verification. Present since commit `e83ffbc`. No linked fix PR. Status: **new, unreviewed.**

**Medium severity (functional breakage):**

3. **[Issue #2703 — Setup leaves `cli/local` unwired but advertises `pnpm run chat hi` which hangs 120s](https://github.com/nanocoai/nanoclaw/issues/2703)** — **Severity: Medium.** Follows the recommended setup path exactly, yet the suggested "next step" command hangs indefinitely with a timeout error. This is a **first-user experience barrier** that likely drives away new contributors and self-hosters. No fix PR filed.

**Lower severity / already being fixed:**

4. **[PR #2705](https://github.com/nanocoai/nanoclaw/pull/2705) — `use-native-credential-proxy` silently falls back to OneCLI gateway.** Open PR attempting to fix incorrect `process.env`-only reading in native credential mode. **Fix in progress.**

5. **Account rotation drift + cross-platform notification misfires** — Fixed today in [PR #2706](https://github.com/nanocoai/nanoclaw/pull/2706) (closed/merged).

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood of near-term implementation |
|---|---|---|
| **Per-container `env` + `blocked_hosts` configuration** | [PR #2709](https://github.com/nanocoai/nanoclaw/pull/2709) — implements maintainer-filed #1867 | **High** — maintainers already designated this as wanted |
| **Startup tripwire / upgrade path enforcement** | [PR #2707](https://github.com/nanocoai/nanoclaw/pull/2707) — merged | **Done** |
| **Telegram topic isolation + auto-registration** | [PR #1626](https://github.com/nanocoai/nanoclaw/pull/1626) | **Medium** — open 65 days, revisited today but not yet resolved |
| **Native credential proxy bypass (true opt-out)** | [PR #2705](https://github.com/nanocoai/nanoclaw/pull/2705) | **Medium** — clear bug, scoped cleanly |
| **`parseArgs` unit tests for setup flow** | [PR #2704](https://github.com/nanocoai/nanoclaw/pull/2704) | **High** — small, well-scoped, zero-risk docs/test contribution |

The signals point toward a **stabilization-focused near-term roadmap**: setup hardening, container isolation, and credential management correctness, rather than new channels or AI features.

---

## 7. User Feedback Summary

**Pain points emerging from today's data:**

- **Setup/doesn't-work-out-of-box** (#2703): A new user following the documented recommended path ends up with a broken CLI command they're told to run. They get a 120-second hang with no diagnostic hint. This is the most user-visible failure mode and likely the #1 source of frustrated first-time users and abandoned installs.

- **Permanently dirty git state** (#2312): A 33-day-old issue with 2 comments — signals that users encounter it, report it, but see no fix. The dirty tree prevents clean upgrades and creates confusion.

- **Security boundary confusion** (#2711): API tools annotated "admin-only" that aren't. While not reported as exploited, it signals a gap between documented contracts and implementation that multi-admin users or enterprise users will eventually hit.

- **Notification misfires across platforms** (#2706): Users reported Claude account quota notifications going to Codex/Gemini groups — a multi-platform UX rot problem that was clearly bothering users enough to warrant a cross-lingual contribution (PR body in Chinese).

**Overall satisfaction signal:** Mixed. The project is clearly attracting an active contributor community (6 open PRs from new authors today), but the **user-facing onboarding path has rough edges** that are being reported consistently.

---

## 8. Backlog Watch

| Item | Age | Status | Risk if unaddressed |
|---|---|---|---|
| [Issue #2312](https://github.com/nanocoai/nanoclaw/issues/2312) — CLAUDE.md deleted on startup | ~33 days | Unresolved, 2 comments | Degrades user trust; permanent dirty state on every clone |
| [Issue #2703](https://github.com/nanocoai/nanoclaw/issues/2703) — `pnpm run chat hi` hangs 120s on fresh setup | 1 day | No fix PR yet | First-time user drop-off; likely high-volume frustration |
| [PR #1626](https://github.com/nanocoai/nanoclaw/pull/1626) — Telegram topic isolation | ~65 days | Open, revisited today | Stalled contribution; contributor waiting for maintainer review signal |
| [PR #2531](https://github.com/nanocoai/nanoclaw/pull/2531) — poll-loop duplicate text suppression | ~21 days | Active back-and-forth | UX defect for all messaging channels |
| [Issue #2711](https://github.com/nanocoai/nanoclaw/issues/2711) — `create_agent` ungated | 1 day | No fix, no comments | Security boundary; could grant container privilege escalation |

**Maintainer attention recommended, in priority order:**
1. **#2711** (security, filed today — needs triage)
2. **#2703** (first-user onboarding blocker — fast fix potential)
3. **#1626** (contributor retention — 65-day wait is signaling disengagement risk)
4. **#2312** (longest-standing unresolved bug, systemic)

---

*Generated by OWL for NanoClaw — 2026-06-08. All links reference `github.com/nanocoai/nanoclaw`.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-08

---

## 1. Today's Overview

IronClaw remains in an intensely active development phase centered on the **Reborn** architecture migration. Over the past 24 hours, the project saw **50 issues updated** (42 still open, 8 closed) and **38 pull requests updated** (22 open, 16 merged/closed), with no new releases. The overwhelming majority of activity is driven by core contributor **serrrfirat**, with meaningful contributions from **zmanian** (security/audit focus) and **henrypark133** (outbound facade contracts). The project is deep in the Reborn cutover — wiring production composition roots, hardening security boundaries, and building out the WebChat v2 beta surface. No new releases landed, but several version-bumping PRs (e.g., #3708) are queued.

---

## 2. Releases

**No new releases today.** The most recent release PR (#3708, still open) proposes bumping `ironclaw_common` 0.4.2 → 0.5.0 (⚠ API breaking), `ironclaw_skills` 0.3.0 → 0.4.0 (⚠ API breaking), `ironclaw_safety` 0.2.2 → 0.2.3, and `ironclaw` 0.24.0 → 0.29.1. This release has been open since May 16 and likely awaits Reborn integration milestones before merging.

---

## 3. Project Progress

**Merged/closed PRs in the last 24 hours:**

| PR | Summary |
|---|---|
| **[#4532](https://github.com/nearai/ironclaw/pull/4532)** | Added Slack allowed-channel picker for WebUI v2 admin management, wired through Reborn Slack host-beta backend |
| **[#4530](https://github.com/nearai/ironclaw/pull/4530)** | Added structured model-visible tool observations with typed `ModelVisibleToolObservation` / recovery DTOs under neutral run-profile contracts (supersedes #4526) |
| **[#4511](https://github.com/nearai/ironclaw/pull/4511)** | Added Phase 1 outbound delivery preference contracts to `ironclaw_product_workflow` with `OutboundPreferencesProductFacade` wiring |
| **[#4463](https://github.com/nearai/ironclaw/pull/4463)** | Wired Slack host-beta conversation, outbound, and idempotency state to host filesystem-backed durable stores; improved turn runner wake-up for prompt reply delivery |
| **[#4516](https://github.com/nearai/ironclaw/pull/4516)** | Added WebChat v2 DELETE thread route with authenticated caller scoping |
| **[#3298](https://github.com/nearai/ironclaw/pull/3298)** | Added hermetic local CI gate (fmt, safety checks, clippy, Rust test tiers) with pre-push hooks |
| **[#3565](https://github.com/nearai/ironclaw/pull/3565)** | Extended nightly E2E timeout to 90 minutes; refreshed `AGENTS.md` |

**Key themes advancing:**
- **WebChat v2 beta surface** is rapidly gaining features: Slack channel management, thread deletion, session capabilities endpoint (#4519 open), auth/security audits (#3615).
- **Reborn outbound/messaging infrastructure** is maturing: durable Slack stores, outbound preference facades, and structured tool observations are landing.
- **Security hardening** continues: `SecurityAuditSink` adoption at boundary call sites (#3959), FS-hardening with `RESOLVE_NO_XDEV` (#3956), and third-party hook quarantine improvements (#3957) are all in progress.

---

## 4. Community Hot Topics

**Most-discussed issues (by comment count):**

1. **[#3280](https://github.com/nearai/ironclaw/issues/3280)** — *Add ProductWorkflow and InboundTurnService facade* (7 comments, P0, Reborn M2)
   The most active discussion. This is the central facade connecting ProductAdapters to host-layer Reborn services. The depth of comments reflects architectural complexity — defining the boundary between product-facing adapters and the Reborn kernel is a critical design decision affecting all channel integrations.

2. **[#3036](https://github.com/nearai/ironclaw/issues/3036)** — *Configuration-as-Code for IronClaw Reborn* (5 comments, P2, EPIC)
   Operators want declarative configuration (tenant blueprints, use-case harnesses) instead of hand-editing `.env`, workspace docs, settings JSON, and runtime flags. This is a significant UX gap for production operators.

3. **[#3044](https://github.com/nearai/ironclaw/issues/3044)** — *Local developer runtime profiles* (3 comments, P1, M4)
   Engineers need a simple `ironclaw up` experience for local development without manually wiring grants, mounts, process backends, network policy, and approvals.

4. **[#3283](https://github.com/nearai/ironclaw/issues/3283)** — *Migrate OpenAI-compatible APIs onto Reborn* (3 comments, P2)
   Moving `/v1/chat/completions` and `/v1/responses` onto Reborn's product workflow while preserving external compatibility.

5. **[#3333](https://github.com/nearai/ironclaw/issues/3333)** — *Production wiring and missing crates* (3 comments, P0, M4)
   Audit found fake/in-memory/no-op seams still present in the Reborn stack. Some components need real implementations; others need composition wiring.

**Underlying needs analysis:**
The top discussions reveal a project in the **midst of a major architectural transition**. The community (primarily core contributors) is working through the hard problems of: (a) defining clean service boundaries between legacy and Reborn, (b) making the platform operable without deep internal knowledge, and (c) ensuring no-op/fake components are replaced before production cutover. The Configuration-as-Code epic (#3036) signals growing operator pain as the system's configuration surface expands.

---

## 5. Bugs & Stability

No explicit bug reports or crash reports were filed in the last 24 hours. However, several issues track **stability and production-readiness gaps** that function as latent bugs:

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| 🔴 High | [#3333](https://github.com/nearai/ironclaw/issues/3333) | Fake/in-memory/no-op seams in Reborn stack (P0) | Partial — #4530, #4463 address some seams |
| 🔴 High | [#4042](https://github.com/nearai/ironclaw/issues/4042) | Docker tenant sandbox limited to simple scoped command execution; needs workspace mounts, network policy, secrets injection | No dedicated PR yet |
| 🟡 Medium | [#4059](https://github.com/nearai/ironclaw/issues/4059) | Model-visible error output too conservative — safe but not maximally useful for recovery | No PR yet |
| 🟡 Medium | [#3572](https://github.com/nearai/ironclaw/issues/3572) | Telegram v2 ProductAdapter is native Rust, not WASM component; safety checks leaked into legacy v1 code | No PR yet |
| 🟢 Low | [#3956](https://github.com/nearai/ironclaw/issues/3956) | Missing `RESOLVE_NO_XDEV` — mount-point traversal across device boundaries not blocked | No PR yet |

**Note:** The project's "bug" tracking is deeply intertwined with its Reborn migration tracking. Many stability issues are framed as production-readiness blockers rather than traditional bug reports.

---

## 6. Feature Requests & Roadmap Signals

**User-requested features with traction:**

| Feature | Issue | Signal Strength | Likely Timeline |
|---|---|---|---|
| **Configuration-as-Code** (tenant blueprints, use-case harnesses) | [#3036](https://github.com/nearai/ironclaw/issues/3036) | 🟡 Medium — EPIC tagged, 5 comments, 👍1 | Next major release (post-Reborn cutover) |
| **Local dev runtime profiles** | [#3044](https://github.com/nearai/ironclaw/issues/3044) | 🟡 Medium — P1, 3 comments | Near-term (blocks developer onboarding) |
| **WebChat v2 SSO parity** (Google/GitHub/NEAR) | [#4116](https://github.com/nearai/ironclaw/issues/4116) | 🟡 Medium — P1, high risk, 2 comments | Near-term (blocks beta release) |
| **WASM ProductAdapters** | [#3572](https://github.com/nearai/ironclaw/issues/3572) | 🟢 Low — P2, 2 comments | Medium-term |
| **Skills settings UI** | [#4527](https://github.com/nearai/ironclaw/pull/4527) | 🟢 Low — PR already open | Likely next release |

**Prediction:** The next release will likely focus on **Reborn production readiness** (closing no-exposure safeguards, completing composition root wiring) and **WebChat v2 beta** (SSO, auth audit, skills UI). Configuration-as-Code is a strong candidate for the release after that, as it requires the Reborn substrate to stabilize first.

---

## 7. User Feedback Summary

**Pain points expressed in issues:**

1. **Configuration complexity** (#3036): Operators must hand-edit `.env`, workspace docs under `.system/...`, settings JSON, extension installs, and runtime flags — with no schema, no diff, no audit trail, and no way to source-control configurations. This is the most clearly articulated operator pain point.

2. **Local development friction** (#3044): Engineers cannot easily run IronClaw as a local coding agent. They must manually wire grants, mounts, process backends, network policy, and approvals. The desired experience is `ironclaw up` and go.

3. **Legacy/Reborn boundary confusion** (#3572): The Telegram v2 work blurred boundaries between legacy v1 channels and Reborn, with safety checks leaking into legacy code. This creates maintenance burden and risk of regressions.

4. **Error recovery UX** (#4059): Model-visible error output is intentionally conservative but not maximally useful. Users/operators need better safe recovery context to diagnose and resolve issues without exposing sensitive data.

**Satisfaction signals:** The pace of PR merges (16 in 24h) and the depth of architectural discussion suggest a highly engaged core team. The security-focused work (NoExposureGuard, SecurityAuditSink, hook quarantine) indicates mature engineering practices. No public frustration or complaints were visible in the issue data.

---

## 8. Backlog Watch

**Long-unanswered important issues needing maintainer attention:**

| Issue | Age | Priority | Status | Risk |
|---|---|---|---|---|
| **[#3026](https://github.com/nearai/ironclaw/issues/3026)** — Config-driven production composition root | 41 days | P0, Reborn cutover blocker | Open, 2 comments | 🔴 Critical — blocks production Reborn cutover |
| **[#3032](https://github.com/nearai/ironclaw/issues/3032)** — No-exposure safeguards | 41 days | P0, Reborn cutover blocker | Open, 2 comments | 🔴 Critical — security boundary for production |
| **[#3029](https://github.com/nearai/ironclaw/issues/3029)** — Migration and compatibility bridges | 41 days | P1, Reborn cutover blocker | Open, 1 comment | 🟡 High — data preservation during cutover |
| **[#3169](https://github.com/nearai/ironclaw/issues/3169)** — Concurrent background fan-out handoff IDs | 38 days | P2 | Open, 1 comment | 🟡 Medium — limits background job parallelism |
| **[#3231](https://github.com/nearai/ironclaw/issues/3231)** — Follow-up architecture deepening | 36 days | P2 | Open, 1 comment | 🟢 Low — improvement, not blocker |
| **[#3957](https://github.com/nearai/ironclaw/issues/3957)** — Third-party hook activation hardening | 16 days | Security review required | Open, 1 comment | 🟡 High — must be resolved before `HOOKS_THIRD_PARTY_ENABLED` in multi-tenant prod |
| **[#3958](https://github.com/nearai/ironclaw/issues/3958)** — Hooks composition maintainability (1k+ line file split) | 16 days | — | Open, 1 comment | 🟢 Low — tech debt, not user-facing |

**Key concern:** The three P0 Reborn cutover blockers (#3026, #3032, #3029) from April 28 have only 2, 2, and 1 comments respectively after 41 days. These are critical path items for production Reborn, and their low engagement suggests they may need explicit prioritization or decomposition into smaller, assignable tasks.

---

*Data source: [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw) | Digest generated: 2026-06-08*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI Project Digest — 2026-06-08

> **Repository:** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. Today's Overview

LobsterAI saw moderate community activity over the past 24 hours with **15 open issues** receiving updates and **zero pull requests** or new releases. Notably, the vast majority of updated issues carry the **stale** label — 14 of 15 — indicating aged reports from April 2026 that have resurfaced without resolution. The only genuinely new report is **Issue #2121** from June 7, raising a token-waste concern. The project currently shows **no active code contributions** (no open or merged PRs) and **no recent releases**, suggesting a period of maintenance quiescence despite a growing backlog of user-reported issues.

---

## 2. Releases

**None.** No new releases or tags have been published in the observation window.

---

## 3. Project Progress

**No PRs opened, merged, or closed today.** The zero-PR signal combined with zero releases indicates no visible feature advancement or bug-fix deployment within this 24-hour period. Community contributor `swuzjb` filed a PR-related issue (#1518) referencing CI failures from PR #1498, but no corresponding PR activity is currently observable.

---

## 4. Community Hot Topics

Despite 15 updated issues, comment and reaction engagement is extremely low across the board (most at 0–2 comments, 0 👍). The most-discussed items are:

- **#1509** — [Skills generation blocking with no intermediate state feedback](https://github.com/netease-youdao/LobsterAI/issues/1509) (2 comments) — A user hits a blocking state during skill creation with zero UI feedback, compounded by inconsistent model understanding compared to Openclaw.

- **#1500** — [Disabled skills still active in conversations](https://github.com/netease-youdao/LobsterAI/issues/1500) (1 comment) — Skills toggled off in the manager still inject into prompts.

- **# #1502** — [Skill list changes don't sync to current session](https://github.com/netease-youdao/LobsterAI/issues/1502) (1 comment) — Configuration-save-to-session propagation is broken.

- **#1516** — [GitHub Copilot OAuth token lost on panel close](https://github.com/netease-youdao/LobsterAI/issues/1516) (1 comment) — Token delivery failure due to un-aborted polling.

- **#2121** — *(newest)* — [Repeated output consuming excessive tokens](https://github.com/netease-youdao/LobsterAI/issues/2121) (0 comments) — User suspects duplicate text generation is burning tokens silently.

**Underlying needs:** A recurring theme across multiple issues (1509, 1500, 1502, 1506, 1516) is **silent failure** — operations that appear to succeed but produce no visible effect, with no error feedback. This points to a systemic UX gap around state management and user-visible feedback loops.

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 High | [#1500](https://github.com/netease-youdao/LobsterAI/issues/1500) | Disabled skills still injected into prompts — breaks user trust in toggle controls | None |
| 🔴 High | [#1516](https://github.com/netease-youdao/LobsterAI/issues/1516) | OAuth polling not aborted on panel close; token silently lost | None |
| 🟠 Medium | [#1506](https://github.com/netease-youdao/LobsterAI/issues/1506) | Scheduled tasks with empty IM session pass validation; notifications silently fail | None |
| 🟠 Medium | [#1502](https://github.com/netease-youdao/LobsterAI/issues/1502) | Agent skill config saves but doesn't propagate to current session | None |
| 🟠 Medium | [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) | Repeated text output potentially wasting tokens — possible generation loop | None |
| 🟡 Low | [#1504](https://github.com/netease-youdao/LobsterAI/issues/1504) | PO's AES Key missing required-field validation in IM Bot settings | None |
| 🟡 Low | [#1512](https://github.com/netease-youdao/LobsterAI/issues/1512) | QQ Bot group allowlist has no input field — UI is non-functional | None |
| 🟡 Low | [#1513](https://github.com/netease-youdao/LobsterAI/issues/1513) | Terms & conditions page has numbering/formatting errors | None |

**Pattern:** Three high/medium bugs (#1500, #1506, #1516) share a root cause of **silent failure without user notification** — a compounding trust issue that should be prioritized.

---

## 6. Feature Requests & Roadmap Signals

Multiple issues filed as bugs are effectively **feature requests** for missing capabilities that established competitors already provide:

| Issue | Feature | Likelihood of Near-Term Implementation |
|-------|---------|----------------------------------------|
| [#1525](https://github.com/netease-youdao/LobsterAI/issues/1525) | Session color labels for visual organization | Medium — common in comparable tools |
| [#1528](https://github.com/netease-youdao/LobsterAI/issues/1528) | Batch export of multiple sessions | Medium — logical extension of existing batch delete |
| [#1541](https://github.com/netease-youdao/LobsterAI/issues/1541) | Session tags and filtering system | Medium — aligns with data management trends |
| [#1537](https://github.com/netease-youdao/LobsterAI/issues/1537) | Message bookmarking/favorites in conversations | Medium — high user value for long sessions |
| [#1532](https://github.com/netease-youdao/LobsterAI/issues/1532) | Local usage statistics panel in Settings | Medium — low implementation cost (SQLite already present) |

**Prediction:** A future patch release will likely prioritize the **skill system bugs** (#1500, #1502) as they affect core functionality, while **session management features** (color labels, tags, batch export) may arrive in a minor version update as differentiators.

---

## 7. User Feedback Summary

**Pain points surfaced today:**

- **Opacity of long-running operations** (#1509): Users have no visibility into whether skill generation is progressing or stuck. This creates anxiety and abandoned workflows.

- **Configuration doesn't stick** (#1500, #1502): Toggling skills off or changing agent settings has no reliable effect — the single most damaging pattern for user trust.

- **Silent validation failures** (#1504, #1506): Forms accept invalid or incomplete configurations, then fail at runtime with no indication *why* it previously "succeeded."

- **Missing consumer-grade UX** (#1525, #1528, #1537, #1541): Power users managing many sessions feel the tool lacks organizational primitives (colors, tags, bookmarks, batch export) that competitors offer.

- **Token economy concern** (#2121): A new user is already questioning whether output duplication is wasting paid tokens — a trust issue that could drive churn.

**User archetype emerging:** The active issue reporters (particularly `MaoQianTu`, who authored 7 of the 15 issues) appear to be **heavy, detail-oriented users** running LobsterAI as a daily productivity tool across multiple IM platforms — exactly the engaged user base whose retention matters most.

---

## 8. Backlog Watch

Issues requiring urgent maintainer attention:

- **[#1500](https://github.com/netease-youdao/LobsterAI/issues/1500)** — Skill toggle broken (📅 2+ months stale): A fundamental Settings ↔ Runtime state desync. If a user explicitly disables a skill, having it still fire is a functional correctness bug that undermines the entire skill system.

- **[#1516](https://github.com/netease-youdao/LobsterAI/issues/1516)** — OAuth token loss (📅 2+ months stale): Not only a UI bug (polling not aborted) but a data-loss scenario where the user *completed* authentication but the token vanished. Could drive users away from GitHub Copilot integration permanently.

- **[#1518](https://github.com/netease-youdao/LobsterAI/issues/1518)** — CI Labeler permissions broken (📅 2+ months stale): Issues can't be auto-labeled, meaning maintainer triage overhead is higher than it should be. This infra issue may be silently masking the true volume of incoming reports.

- **Author `MaoQianTu`'s cluster of 7 issues** (all filed April 7, 2026): This represents a single highly-engaged user who did thorough testing and filed detailed, individually-reproducible bug reports. The fact that none have received a maintainer response after two months is a retention risk.

> **Bottom line:** LobsterAI is accumulating a technically-shallow but **trust-deep** backlog. The bugs aren't arcane — they're about settings not saving, toggles not working, and forms silently failing. Fast triage on the 3 high-severity items above would disproportionately improve perceived project health.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-08

---

## 1. Today's Overview

Moltis shows moderate open-source activity today with no new releases, one open issue, and three open pull requests under active development. All three PRs (opened by the same author, s-salamatov) were updated within the last 24 hours, indicating focused incremental work on three distinct patches: Telegram streaming reliability, session rehydration safety, and channel activity logging. There were no merged or closed PRs and no releases today, suggesting the project is in an accumulation/review phase. Overall health appears stable with no urgent bugs or regressions flagged in the past 24 hours.

---

## 2. Releases

**None.** No new versions were published today or in the reporting window.

---

## 3. Project Progress

No PRs were merged or closed today. Three PRs remain open and active:

- **PR #1113**: Hotfix for Telegram edit-in-place streaming (sequel to PR #1099), restoring correct final-answer delivery when completion notifications are disabled.
- **PR #1089**: Caps persisted tool and tool-result content during session history rehydration, covering normal chat, streaming, retry-after-compaction, prompt inspection, silent memory turns, and LLM-backed compaction prompts.
- **PR #1093**: Adds per-account/per-channel/per-user `activity_log` visibility controls (`all` / `errors_only` / `off`) with user-override priority logic.

---

## 4. Community Hot Topics

| Item | Type | Author | Topic |
|------|------|--------|-------|
| [#1107](https://github.com/moltis-org/moltis/issues/1107) | Feature Request | IlyaBizyaev | Multiline text input in mobile web UI |
| [#1107](https://github.com/moltis-org/moltis/issues/1107) | — | — | Has 1 comment, 0 👍 — low community traction so far |

The most-discussed item is #1107, requesting multiline text input on mobile. The underlying need is clear: mobile users hit friction composing long prompts or structured text, limiting the mobile web experience compared to native chat apps. No PR yet addresses this.

---

## 5. Bugs & Stability

| Severity | Issue / PR | Status |
|----------|-----------|--------|
| Medium | [#1107](https://github.com/moltis-org/moltis/issues/1107) — Mobile multiline input missing | Open, no fix PR yet |

No crashes, regressions, or critical bugs were reported today. The Telegram streaming fix (PR #1113) addresses a post-#1099 regression where final replies could be silently dropped when completion notifications were off — this is the closest thing to a stability fix in the current open PRs.

---

## 6. Feature Requests & Roadmap Signals

- **Multiline mobile input** ([#1107](https://github.com/moltis-org/moltis/issues/1107)): A UX polish request likely to land in a minor release once prioritized.
- **Activity log visibility controls** (PR #1093): Adds granular logging preferences — this and the other two PRs (#1089, #1113) are the strongest candidates for the next release.

Given all three open PRs target reliability and configurability rather than major new features, the next release (if any) will likely be a patch/minor bump focused on streaming stability, session safety, and logging controls.

---

## 7. User Feedback Summary

- **Pain point**: Mobile web users cannot input multiline text, degrading the mobile experience ([#1107](https://github.com/moltis-org/moltis/issues/1107)).
- **Satisfaction indicator**: The Telegram streaming regression (now being fixed in PR #1113) was caught quickly, suggesting active contributor responsiveness.
- **Underlying theme**: Users expect the mobile web UI to match native chat-app input ergonomics; multiline support is a basic but impactful ask.

---

## 8. Backlog Watch

| Item | Age | Risk |
|------|-----|------|
| [#1107](https://github.com/moltis-org/moltis/issues/1107) — Mobile multiline input | ~3 days old | Low urgency, but no maintainer response yet; may linger if not triaged |
| [#1089](https://github.com/moltis-org/moltis/pull/1089) — Cap persisted tool results | 7 days old | Stale; needs review or merge to prevent drift |
| [#1093](https://github.com/moltis-org/moltis/pull/1093) — Activity log settings | 5 days old | Stale; similar risk |

PRs #1089 and #1093 are approaching one week without closure — a prompt review or status update from maintainers would keep contributor momentum high.

---

*Generated by OWL for Moltis (github.com/moltis-org/moltis) — 2026-06-08*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-08

**Repository:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) (also referenced as QwenPaw)

---

## 1. Today's Overview

CoPaw saw moderate community activity over the past 24 hours with **5 new or updated issues** and **2 open pull requests**, but no new releases or merged PRs. The project appears to be in an active feedback-gathering phase following the v1.1.10 release, with users surfacing both regressions and feature gaps. No critical blockers (e.g., mass user reports, security issues) were observed, but a notable regression bug from v1.1.9 onward warrants maintainer attention.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours. The latest observed release remains **v1.1.10**.

---

## 3. Project Progress

**No PRs were merged or closed today.** Two PRs remain open:

| PR | Status | Description |
|---|---|---|
| [#4995](https://github.com/agentscope-ai/CoPaw/pull/4995) — *fix(channels): preserve renderer tool output* | 🟡 Open | First-time contributor submission; fixes loss of tool output attachments and visible text when `show_tool_details` is disabled. Also preserves `audio` media_type. |
| [#4949](https://github.com/agentscope-ai/CoPaw/pull/4949) — *feat(acp): advertise commands, surface errors, tool params, agent/model meta, file links* | 🟡 Under Review (since 2026-06-03) | Extends ACP (Agent Client Protocol) server metadata for richer terminal UI experiences. Additive, scoped to ACP server. |

**No changes shipped today.** PR #4995 appears to be a regression fix and would be a good candidate for the next patch release if validated.

---

## 4. Community Hot Topics

### ACP Protocol Enhancement (PR #4949)
🔗 [PR #4949](https://github.com/agentscope-ai/CoPaw/pull/4949)
This is the oldest tracked PR (opened 2026-06-03) and focuses on enriching the ACP server with commands, error surfacing, tool parameters, and file links. It targets integration with the `paw` TUI client. This signals growing ecosystem interest in terminal-first ACP clients and suggests CoPaw is positioning itself as a protocol-compliant agent platform, not just a web UI tool.

### Visual Model Fallback Feature Request (Issue #4992)
🔗 [Issue #4992](https://github.com/agentscope-ai/CoPaw/issues/4992)
Requests a standalone `visual_model` config that acts as a vision relay when the primary model is text-only (e.g., deepseek-v4-flash). This is a significant architectural ask — introducing a routing layer for multimodal content to a secondary model. It reflects real user demand for model flexibility without sacrificing visual understanding capabilities.

---

## 5. Bugs & Stability

### 🔴 High Severity — Regression in v1.1.9 / v1.1.10
**[#4989](https://github.com/agentscope-ai/CoPaw/issues/4989)** — *Qwen 3.6-27B (vLLM local) causes infinite loading in chat*
- **Symptom:** After upgrading from v1.1.5.post2 to v1.1.9 or v1.1.10, locally deployed Qwen 3.6-27B via vLLM (OpenAI-compatible API) produces no response — chat shows perpetual loading spinner with no backend errors.
- **Environment:** Docker deployment, vLLM serving Qwen 3.6-27B.
- **Impact:** **Complete breakage** for users upgrading to recent versions. Connection and multimodal tests pass, but actual inference fails silently.
- **No linked fix PR exists.** ⚠️ This needs urgent triage — it is a clear regression from v1.1.5.

### 🟡 Medium Severity — UI Jitter
**[#4993](https://github.com/agentscope-ai/CoPaw/issues/4993)** — *Image preview drag causes abnormal stuttering after zoom*
- **Symptom:** On macOS 26.5 (v1.1.10), dragging a zoomed image in the web UI causes severe jitter and non-following mouse behavior.
- **Scope:** Frontend/console UI only. No data loss or functional breakage, but impacts UX for image-heavy workflows.
- **No linked fix PR.**

### 🟢 Low Severity — Question/Triage
**[#4991](https://github.com/agentscope-ai/CoPaw/issues/4991)** — Minimal description with image attachment only; unclear if this is a bug or question. Needs maintainer follow-up.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood of Inclusion Signal |
|---|---|---|
| **Visual Model Fallback** — standalone vision model relay for text-only LLMs | [#4992](https://github.com/agentscope-ai/CoPaw/issues/4992) | 🔶 Medium — significant scope, but aligns with model-flexibility trend |
| **Layered/Hierarchical Memory System** — self-evolving memory with tiered structure (episodic, semantic, procedural) | [#4994](https://github.com/agentscope-ai/CoPaw/issues/4994) | 🔶 Medium — vague request but matches industry direction (e.g., MemGPT, Mem0 patterns) |
| **ACP metadata enrichment** — richer protocol responses for TUI clients | [PR #4949](https://github.com/agentscope-ai/CoPaw/pull/4949) | 🟢 High — already has an open PR under review |

**Prediction:** The ACP enhancement (PR #4949) and channel renderer fix (PR #4995) are the most likely candidates for inclusion in the next release. The visual fallback and memory system requests are larger undertakings that may require design discussion.

---

## 7. User Feedback Summary

**Key Pain Points:**
1. **Upgrade regressions** — Users upgrading from v1.1.5 to v1.1.9/1.1.10 experience complete silent breakage with locally-hosted models (Issue #4989). This is the single most impactful complaint and risks user churn if not addressed swiftly.
2. **Multimodal inflexibility** — Users want to pair text-only models with a separate vision model without changing their primary model config (Issue #4992). This reflects a real-world cost/performance tradeoff users face.
3. **Memory capability gap** — At least one user perceives CoPaw's memory system as underdeveloped compared to competing agent frameworks (Issue #4994), suggesting room for competitive differentiation.
4. **UI polish** — The image viewer jitter bug (Issue #4993) suggests frontend QA on macOS needs attention.

**Satisfaction signals:** None explicitly positive in today's window — all tracked items are issues or unresolved PRs, which may indicate the v1.1.x series has introduced friction.

---

## 8. Backlog Watch

| Item | Age | Why It Needs Attention |
|---|---|---|
| **PR [#4949](https://github.com/agentscope-ai/CoPaw/pull/4949)** — ACP metadata enrichment | 5 days (since 2026-06-03) | PR has been "Under Review" for 5 days; blocking ecosystem client development. Needs approval or feedback. |
| **Issue [#4989](https://github.com/agentscope-ai/CoPaw/issues/4989)** — v1.1.9/v1.1.10 regression with vLLM models | 2 days (since 2026-06-06) | No maintainer comment yet. Affects Docker-deployed users with local vLLM backends — a core use case. Increasing silence risk as more users upgrade. |
| **PR [#4995](https://github.com/agentscope-ai/CoPaw/pull/4995)** — First-time contributor renderer fix | 1 day (since 2026-06-07) | First-time contributors benefit from early engagement. The fix is scoped and appears low-risk. |

> ⚠️ **Priority recommendation:** Issue #4989 should be top triage priority. If confirmed as a regression, a patch release (v1.1.11 or v1.1.10.post1) should be considered to prevent further user impact.

---

*Generated by OWL · 2026-06-08 · [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-08

---

## 1. Today's Overview

ZeroClaw saw intense activity with **50 issues updated** and **50 pull requests updated** in the last 24 hours, reflecting a large and highly active open-source community. A significant batch of closed issues (17) and merged/closed PRs (11) landed today, most concentrated in iterative UI polish and provider support. No new releases were published, though a **v0.8.0 release prep PR** (#7364) has been opened, signaling that a major version bump is imminent. The project is in heavy development on multiple fronts — the zerocode TUI client, provider ecosystem expansion (7 new OpenAI-compatible providers), channel runtime hardening, and security features. Overall project health is strong with rapid community contribution flow, though the volume of open issues (33) and PRs (39) indicates significant backlog pressure on maintainers.

---

## 2. Releases

**None.** No new releases were published today. PR #7364 (`chore(release): release v0.8.0`) has been opened and is targeting the `master` branch. Several stacked PRs are gated behind schema-v3 refactoring work and will likely land in the v0.8.0 release cycle.

---

## 3. Project Progress

**Closed/Merged Today:**

| # | Summary | Impact |
|---|---------|--------|
| **#7249** | feat(zerocode): theme enhancements — color-depth fallback, registry-generated presets, per-agent overrides, palette swatches | 🔗 [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/7249) — Major UI polish improving terminal compatibility (tmux/screen, old macOS Terminal.app) |
| **#7190** | feat(zerocode): outbound message queue with sidebar and injection | 🔗 [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/7190) — Unblocks input while agent is responding, significantly improving UX |
| **#7209** | feat(zerocode): /model and /model-provider picker with live switching | 🔗 [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/7209) — In-session model switching without restart |
| **#7178** | feat(providers): per-alias model-provider fallback on failure | 🔗 [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/7178) — Declarative per-alias fallback chains restore pre-V2/V3 resilience |
| **#7315** | fix(bedrock): skip prompt caching for models that don't support it | 🔗 [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/7315) — Fixes 400 errors with non-Claude/Nova Bedrock models |
| **#7262** | docs(providers): worked-example usage for 7 new schema-v3 providers | 🔗 [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/7262) — Documentation for Morph, GitHub Models, Upstage, Featherless, Arcee, Lambda AI, Inception |
| **#7011** | docs(maintainers): define issue ownership path | 🔗 [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/7011) — Improves maintainer workflow for issue triage |
| **#7357** | fix(channels): update image history fixture context field | 🔗 [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/7357) — Test fixture maintenance post model-provider refactor |

**Key Signals:** The dominant theme of the day is **zerocode TUI maturation** (themes, queue, model picker, quickstart UX fixes) and **provider ecosystem expansion**. The v0.8.0 release cycle appears to be a significant milestone bundling schema-v3 provider architecture, multi-instance channel routing, and runtime resilience improvements.

---

## 4. Community Hot Topics

### Most Active by Engagement

**#3642** ⭐ [Feature]: Provide a "full" docker image — **9 comments, 3 👍** (🔗 [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/3642))
Users want a Docker image with all feature flags compiled in (e.g. WhatsApp). This surfaces a recurring onboarding friction: ZeroClaw's default minimal build creates a high barrier for non-technical users. Recent PRs like #6760 (Docker documentation updates for v0.7.5-debian) show community self-service, but an official "full" image remains unaddressed.

**#5146** [Feature]: Token consumption minimization via skill compilation — **9 comments, 1 👍** (🔗 [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5146))
Users are benchmarking token costs and finding that verbose SKILL.md files (400+ lines) are injected full into every request even when only a simple curl pattern is needed. This reflects growing **cost-consciousness** among production users scaling agent workloads. The proposed skill compilation approach could meaningfully reduce per-call token spend.

**#2503** [Feature]: where is napcat channel — **9 comments** (🔗 [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/2503))
The demand for OneBot/NapCat (QQ protocol) channel integration has persisted since March 2026 with no resolution. This represents a significant **community segment (Chinese-language users)** whose needs remain blocked.

**#2767** ⭐ [Feature]: Multi-Agent Routing — **6 comments, 9 👍** (🔗 [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/2767))
High-reaction feature request for OpenClaw-style multi-agent routing: isolated agents with separate workspaces, agent dirs, and sessions, plus multi-account channel support with inbound bindings. The high 👍 count relative to comment count indicates broad community agreement with relatively niche discussion.

**#3566** ⭐ [Feature]: A2A (Agent-to-Agent) Protocol Support — **6 comments, 7 👍** (🔗 [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/3566))
Addition of native A2A protocol support (v0.3.0+) for inter-agent communication. This positions ZeroClaw within the emerging Linux Foundation A2A ecosystem, enabling coordination with OpenClaw, NanoClaw, and other compliant agents. High technical priority per labels.

---

## 5. Bugs & Stability

| Severity | # | Summary | Component | Fix PR |
|----------|---|---------|-----------|--------|
| 🔴 S0 | **#4627** | file_write tool silently fails — files invisible on host filesystem | runtime, tool | 🔗 [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) | No |
| 🔴 S1 | **#4879** | Gemini CLI OAuth is simply not working | provider: gemini | 🔗 [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | No |
| 🔴 S1 | **#4866** (closed) | Web dashboard still not available | runtime/daemon | 🔗 [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | — |
| 🟡 S1 | **#5803** (closed) | Fallback provider chain ignores `[providers.X]` config | provider | 🔗 [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5803) | — |
| 🟡 S2 | **#4880** (closed) | context_compression not triggered in daemon mode | agent, runtime | 🔗 [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/4880) | — |
| 🟡 S1 | **#5155** (closed) | Delegate agents ignore `[skills].prompt_injection_mode` | agent, skills, tool | 🔗 [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5155) | — |
| 🟡 S2 | **#5122** (closed) | web_fetch allowed_private_hosts useless for private-IP domains | tool: web_fetch | 🔗 [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) | — |
| 🟢 S3 | **#4873** | Feishu integration calls LLM instead of Agent | channel: lark | 🔗 [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/4873) | No |

**Notable:** The most critical open bug is **#4627** — silent data loss in the `file_write` tool with S0 severity rating. Despite being labeled `in-progress`, no linked fix PR is visible. Issue **#4879** (Gemini OAuth) blocks an entire provider workflow with no assigned fix.

---

## 6. Feature Requests & Roadmap Signals

**Likely candidates for next version(s):**

| # | Feature | Signal Strength | Rationale |
|---|---------|----------------|-----------|
| **#3566** | A2A Protocol Support | 🟡 Strong (7 👍, p2, accepted) | Strategic alignment with Linux Foundation ecosystem; increasing interop demand |
| **#2767** | Multi-Agent Routing | 🟡 Strong (9 👍, p2, accepted) | Frequently compared to OpenClaw; core architecture request |
| **#3642** | Full Docker Image | 🟠 Moderate (3 👍, p2, blocked) | Onboarding blocker; Docker docs PR (#6760) already landing |
| **#6312** | Per-alias webhook path routing | 🟠 Moderate (actively PR'd) | PR opened 2026-06-08; multi-instance channel support is a natural progression |
| **#5146** | Token consumption minimization / skill compilation | 🟡 Strong (9 comments, p2) | Directly impacts production cost at scale; aligns with broader LLM ecosystem trends |
| **#4853** | Skills installation from `.well-known` URI | 🟠 Moderate (p2, accepted) | Industry standard being set by Cloudflare/Vercel; Agent Skills group coordination |
| **#5145** | `send_channel_message` tool for direct delivery | 🟠 Moderate (p2, accepted) | Fills gap in channel agent workflow fundamentals |
| **#5127** | Bubblewrap sandbox configurable writable paths | 🟠 Moderate (p2, accepted) | Security hardening; container users need filesystem flexibility |

**Key Prediction:** v0.8.0 will likely ship with **schema-v3 provider architecture** (7 new providers), **per-channel alias routing**, and **resilience improvements** (fallback chains). The major strategic features — A2A support, multi-agent routing, and skill compilation — appear to be architectural efforts more suited for v0.9.x unless work is already happening out-of-band.

---

## 7. User Feedback Summary

**Pain Points:**
- **Web/Dashboard not buildable** (#4866, closed but with 28 comments): Users across many versions cannot access the web UI or Tauri desktop app due to missing frontend builds. This is a persistent, unresolved block for non-CLI users.
- **Docker onboarding complexity** (#3642): Manual compilation with specific feature flags creates friction. Community members are publishing their own Docker Compose files (#6760) to fill the gap.
- **Token cost opacity** (#5146): Users are actively measuring and complaining about the cost of skill injection bloat — a sign that ZeroClaw has users running at meaningful production scale.
- **Channel ecosystem gaps**: QQ/OneBot (#2503), NapCat, and other region-specific channels have long-blocked users. Feishu (Lark) partial integration bugs (#4873) further compound this.
- **Silent failures** (#4627): The file_write tool reporting success but producing no host-visible files is a S0 trust-eroding bug.

**Positive Signals:**
- Active PRs themed at UX polish (themes, outbound queue, model picker) generating community engagement
- Contributors shipping self-documentation (Docker examples, provider worked-examples)
- Broad provider ecosystem expansion (7 new OpenAI-compatible providers in active PRs)

---

## 8. Backlog Watch

| # | Summary | Age | Risk | Status |
|---|---------|-----|------|--------|
| **#2503** | NapCat/OneBot/QQ channel | 3+ months | Community segment blocked | Accepted, no-stale, no assignee |
| **#2767** | Multi-Agent Routing | 3+ months | High 👍 demand unmet | Accepted, no-stale, no assignee |
| **#3566** | A2A Protocol Support | 3+ months | Strategic ecosystem gap | Accepted, no-stale, no assignee |
| **#3642** | Full Docker Image | 3+ months | Onboarding friction | Blocked, accepted, no-stale |
| **#4627** | file_write silent failure (S0) | 2.5+ months | **Data loss risk** | In-progress, no fix PR visible |
| **#4879** | Gemini CLI OAuth not working (S1) | 2.5+ months | **Provider blocked** | In-progress, no fix PR visible |
| **#2467** | Webhook transforms | 3+ months | Medium-demand feature | Blocked, no recent activity |
| **#4710** | Better LOGO | 2.5+ months | Low-stakes community engagement | Blocked, needs-author-action |

**Attention needed:** Issues **#4627** and **#4879** are the most concerning — both are in-progress, S0/S1 severity, with no visible linked fixes, yet block critical workflows for real users. Issues #2503, #2767, and #3566 have been open for 3+ months with acceptance labels but no assignee movement, suggesting they need architectural scoping or dedicated ownership.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*