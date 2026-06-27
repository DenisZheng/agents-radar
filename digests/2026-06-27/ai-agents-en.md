# OpenClaw Ecosystem Digest 2026-06-27

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-27 00:38 UTC

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

# OpenClaw Project Digest — 2026-06-27

## 1. Today's Overview

OpenClaw is experiencing an extraordinary surge in community engagement: **500 issues and 500 PRs updated in the last 24 hours**, which is an unusually high volume that likely reflects a combination of a recent release cycle (2026.5.x) surfacing regressions and a large batch of incoming community contributions. Issue #75 on Linux/Windows apps leads with 109 comments and 81 reactions, signaling strong desktop-platform demand. The project has **no new releases today**, but the sheer volume of active PRs and issues suggests the maintainers are in a heavy triage and merge cycle. Notable community energy is visible in the number of "clawsweeper" labels (a project-internal review queue system), with many items awaiting maintainer review, security review, and product decisions.

---

## 2. Releases

**No new releases today.** The most recent release referenced in the data is **2026.5.4** (with regression reports against it spanning from early May through June). Multiple issues reference a **2026.5.3-1** and at least one references **2026.4.30-beta.1**, suggesting an active beta cadence. The volume of regression reports indicates the project may be preparing a patch or minor release to address accumulated issues.

---

## 3. Project Progress

### Merged / Closed PRs (today)

| PR | Author | Description |
|---|---|---|
| [#68936](https://github.com/openclaw/openclaw/pull/68936) | shadowleaf-studios | PR review autofix pipeline using Claude Agent SDK + Windows daemon |
| [#96762](https://github.com/openclaw/openclaw/pull62) | wangmiao066866 | Bound streaming SSE reads at 16 MiB for OpenAI ChatGPT Responses |

### PRs Ready for Maintainer Review (👀 status)

| PR | Author | Description |
|---|---|---|
| [#96873](https://github.com/openclaw/openclaw/pull/96873) | Alix-007 | Bound video response reads for OpenRouter (OOM prevention) |
| [#97110](https://github.com/openclaw/openclaw/pull/97110) | vincentkoc | Native app locale inventory for Android/Apple strings |
| [#97125](https://github.com/openclaw/openclaw/pull/97125) | giodl73-repo | Doctor: expose auth profile findings |
| [#97041](https://github.com/openclaw/openclaw/pull/97041) | Pick-cat | Guard delivery-evidence attachment recursion against cycles |

### Key Features Advancing

- **Linux desktop app (Rust/GTK4 track)** — PR [#61576](https://github.com/openclaw/openclaw/pull/61576) by 00xglitch provides a native Linux desktop companion as an alternative to the C/GTK4 approach, advancing Issue #75.
- **OpenPhone Android node support** — PR [#97127](https://github.com/openclaw/openclaw/pull/97127) adds Android phone-originated task routing.
- **Discord Activities (canvas-first)** — PR [#65205](https://github.com/openclaw/openclaw/pull/65205), XL-sized feature for Discord Activities.
- **Skills uninstall command** — PR [#94828](https://github.com/openclaw/openclaw/pull/94828) adds `openclaw skills uninstall <slug>`.
- **Plugin session followup turn API** — PR [#63330](https://github.com/openclaw/openclaw/pull/63330) enables plugins to schedule proactive agent turns.
- **Workspace file management for agents** — PR [#62417](https://github.com/openclaw/openclaw/pull/62417) adds Control UI file browsing for agent workspaces.
- **Provider circuit breaker for quota exhaustion** — PR [#64127](https://github.com/openclaw/openclaw/pull/64127) handles daily/weekly/monthly usage limits gracefully.
- **Codex always plugin approval mode** — PR [#97123](https://github.com/openclaw/openclaw/pull/97123) adds stricter Codex plugin gating.

---

## 4. Community Hot Topics

### Top Issues by Engagement

| # | Issue |  | 👍 | Core Need |
|---|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 109 | 81 | with macOS |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | Prebuilt Android APK releases | 25 | 2 | Easy Android app install |
| [#77598](https://github.com/openclaw/openclaw/issues/77598) | Track live dev agent behavior | 22 | 1 | Observability/testing |
| [#86538](https://github.com/openclaw/openclaw/issues/86538) | Session write-lock timeouts block subagent delivery | 16 | 1 | Core reliability |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked Secrets — prevent agent raw API key access | 13 | 4 | Security/credential isolation |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | Channel-mediated approval for MCP tool calls | 13 | 1 | MCP security/consent |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | Multi-agent orchestration instability | 13 | 1 | Multi-agent reliability |

### Analysis

The community's most vocal demands cluster around three themes:

1. **Desktop platform expansion** (Issue #75): With macOS, iOS, and Android covered, the 81-reaction upvote confirms Linux and Windows apps as the single most desired feature. A Rust/GTK4 PR is already in progress, indicating a community-driven solution rather than waiting for official delivery.

2. **Security hardening**: Issues around masked secrets (#10659), MCP tool call approval (#78308), and denylist exec policies (#6615, 7 reactions) show a user base that takes the trust boundary between agents and external systems seriously — a healthy sign for an agent framework.

3. **Multi-agent orchestration stability** (#43367, #86538): Concurrent agent creation, session lock contention, and subagent lifecycle bugs are the most complex category of issues, touching core runtime architecture.

---

## 5. Bugs & Stability

### P1 / Critical Bugs (Open)

| Issue | Severity Signals | Fix PR? |
|---|---|---|
| [#86538](https://github.com/openclaw/openclaw/issues/86538) — Session write-lock timeouts block subagent delivery | session-state, message-loss | None yet |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) — Multi-agent orchestration unstable | session-state, message-loss, auth | None yet |
| [#77012](https://github.com/openclaw/openclaw/issues/77012) — WebChat session transcript overwritten on every turn (5.2 regression) | regression, session-state | None yet |
| [#77642](https://github.com/openclaw/openclaw/issues/77642) — lossless-claw: duplicate answers + missing tool results (5.3 regression) | regression, message-loss | None yet |
| [#76038](https://github.com/openclaw/openclaw/issues/76038) — Stuck Session Recovery double-failure (processing state blocks event loop) | session-state, crash-loop | None yet |
| [#76042](https://github.com/openclaw/openclaw/issues/76042) — Clean install of 2026.5.x not possible (boot hangs) | regression, auth, crash-loop | None yet |
| [#76171](https://github.com/openclaw/openclaw/issues/76171) — Stale worker process accumulation (load avg 25–31) | crash-loop | None yet |
| [#75593](https://github.com/openclaw/openclaw/issues/75593agents list empty after spawn (v2026.4.29) | session-state | None yet |
| [#77467](https://github.com/openclaw/openclaw/issues/77467) — MiniMax Portal OAuth token cannot auto-refresh | auth | None yet |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) — active-memory blocks replies on multi-agent gateways | crash-loop | None yet |
| [#43996](https://github.com/openclaw/openclaw/issues/43996) — Sandbox container exits immediately with no-new-privileges | security, crash-loop | None yet |

### P1 Bugs with Fix PRs Open

- [#86538](https://github.com/openclaw/openclaw/issues/86538) — Session write-lock: Multiple related PRs touch session management but none directly reference this issue.
- [#60388](https://github.com/openclaw/openclaw/issues/60388) — Terminal abort vs. retryable failure distinction: PR [#6](https://github.com/openclaw/openclaw/pull/62682) addresses this.

### Closed Today

| Issue | Resolution |
|---|---|
| [#33106](https://github.com/openclaw/openclaw/issues/33106) — TrustChain for agent-to-agent verification | Closed as stale |
| [#75621](https://github.com/openclaw/openclaw/issues/75621) — Duplicate stdio MCP spawns (memory leak) | Closed |
| [#73274](https://github.com/openclaw/openclaw/issues/73274) — EnqueueAssistantMessageToSessionTranscript in Plugin API | Closed |

### Stability Assessment

⚠️ **Concern**: A notable cluster of crashes, regressions, and reliability issues has accumulated without corresponding fixes. Session lifecycle, multi-agent orchestration, and the WebChat transcript regression (#77012) are particularly high-impact given they affect core user workflows. The "5.3 regression" label on multiple issues suggests the 2026.5.x release cycle introduced more regressions than usual.

---

## 6. Feature Requests & Roadmap Signals

### Most Requested Features (by engagement)

| Feature | Issue | 👍 | Likelihood Signal |
|---|---|---|---|
| Linux/Windows desktop apps | [#75](https://github.com/openclaw/openclaw/issues/75) | 81 | 🔴 High — PR in progress (Rust/GTK4), but 109 comments suggest scope is expanding beyond what one PR delivers |
| Masked secrets (credential isolation) | [#10659](https://github.com/openclaw/openclaw/issues/10659) | 4 | 🟡 Medium — Security-critical, well-specified, multiple reviews needed |
| Filesystem sandboxing config | [#7722](https://github.com/openclaw/openclaw/issues/7722) | 4 | 🟡 Medium — Complements masked secrets story |
| Webchat inline buttons | [#46656](https://github.com/openclaw/openclaw/issues/46656) | 1 |  Medium — UX parity with Telegram |
| Exec denylist support | [#6615](https://github.com/openclaw/openclaw/issues/6615) | 7 | 🟢 Likely — Simple, well-scoped, popular |
| Reduce tool schema token overhead (~3,500 tok/session) | [#14785](https://github.com/openclaw/openclaw/issues/14785) | 0 | 🟡 Medium — Performance optimization, likely to be prioritized for cost reasons |
| Dynamic model discovery (OpenRouter) | [#10687](https://github.com/openclaw/openclaw/issues/10687) | 3 |  Medium — Provider ecosystem expansion |

### Predicted Next Version Focus

Based on accumulated issues and PR activity, the next minor release will likely prioritize:
1. **Regression fixes** for the 2026.5.x session/WebChat/multi-agent issues
2. **OOM hardening** across providers (multiple response-bounding PRs already in review)
3. **Windows/Linux app** progress (even if partial)
4. **Tool schema token reduction** as a cost optimization

---

## 7. User Feedback Summary

### Pain Points

- **Upgrade anxiety**: Multiple users report clean installs of 2026.5.x failing or taking dramatically longer (#76042). A regression-he release cycle is eroding upgrade confidence.
- **Cost surprises**: Silent reasoning default flip doubling Anthropic spend (#73182), plus ~3,500 token/session overhead from tool schemas (#14785), show users are sensitive to unpredictable cost changes.
- **Security concerns**: Users want defense-in-depth — masked secrets, exec denylists, MCP approval gates, sandboxing. This is a sophisticated user base that thinks about threat modeling.
- **Multi-agent fragility**: Users attempting concurrent agent workflows (#43367) find config overwrites and session-lock failures, suggesting the agent orchestration layer needs architectural hardening.

### Use Cases Emerging

- **Multi-agent coding batches**: Users are running parallel coding agents from the CLI — a stress test the current concurrency model wasn't designed for.
- **Mobile companion workflow**: Android APK requests (#9443) and OpenPhone integration (#97127) suggest growing demand for phone-to-agent task delegation.
- **Plugin ecosystem expansion**: Multiple PRs around plugin APIs (followup turns, session hooks, plugin approval modes) indicate a maturing plugin developer community.

### Satisfaction Indicators

- 81 👍 on the Linux/Windows app request is exceptional and shows strong platform loyalty.
- High comment counts on security issues suggest trust in the project's security posture.
- The volume of PRs (500 updated in 24h) confirms active, invested contributors — not just drive-by issue filers.

---

## 8. Backlog Watch

### Critical Items Needing Maintainer Attention

| Item | Age | Signal | Concern |
|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) — Linux/Windows apps | ~6 months | 81 👍, 109 💬 | Most popular issue; PR exists but unmerged. Community patience may be finite. |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) — Masked secrets | ~4.5 months | Security-tagged | Security-critical; has multiple review labels but no assignee visible. |
| [#77012](https://github.com/openclaw/openclaw/issues/77012) — WebChat transcript overwrite regression | ~1.8 months | P1, regression | **Blocks WebChat users entirely.** Should be fast-tracked. |
| [#76042](https://github.com/openclaw/openclaw/issues/76042) — Clean install impossible on 2026.5.x | ~1.8 months | P1, regression | Blocks new user adoption. |
| [#77598](https://github.com/openclaw/openclaw/issues/77598) — Live dev agent behavior tracking | ~1.8 months | 22  | Appears to be a meta-issue for testing infrastructure. |
| [#73182](https://github.com/openclaw/openclaw/issues/73182) — Reasoning default silently flipped | ~2 months | P1, security | Silent behavior change affecting billing; deserves a public response. |
| [#75380](https://aw/openclaw/issues/75380) — JSONL log files grow unbounded | ~1.8 months | P1, crash-loop | Operational hygiene issue that can fill disks. |
| [#86538](https://github.com/openclaw/openclaw/issues/86538) — Session write-lock subagent blocking | ~1 month | P1, session-state | Core runtime bug with no fix PR — concerning. |

### PRs Stalled on Author ( waiting on author) — Longest Running

| PR | Age | Status |
|---|---|---|
| [#66174](https://github.com/openclaw/openclaw/pull/66174) — Fix session transcript path canonicalization | ~2.5 months | Waiting on author |
| [#62682](https://github.com/openclaw/openclaw/pull/62682) — Distinguish terminal aborts from retryable failures | ~2.5 months | Waiting on author |
| [#63634](/openclaw/openclaw/pull/63634) — Accept valid MCP tool schemas without strict inputSchema.type check | ~2.5 months | Waiting on author |
| [#63330](https://github.com/openclaw/openclaw/pull/63330) — Plugin session followup turn API | ~2.5 months | Waiting on author |
| [#65205](https://github.com/openclaw/openclaw/pull/65205) — Discord Activities support | ~2.5 months | Waiting on author |

### Recommendation

The project is showing signs of **maintainer bandwidth strain**. With 500 issue updates and 500 PR updates in 24 hours, the queue of items "waiting on author" and "needing maintainer review" is growing. The WebChat transcript regression (#77042 /012) and clean-install blocker (#76042) are the two highest-priority items for a patch release. The long-running stalled PRs (2.5+ months) may need maintainer intervention to either close, rebase, or take over.

---

**Data source**: [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw) & PRs updated 2026-06-26 to 2026-06-27.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report — 2026-06-27

---

## 1. Ecosystem Overview

The open-source personal AI agent landscape is experiencing an **unprecedented surge in activity**, driven by community demand for multi-platform availability, robust security hardening, and reliable multi-agent orchestration. At least **seven active projects** (OpenClaw, NanoBot, Hermes Agent, NanoClaw, CoPaw, IronClaw, ZeroClaw) are shipping releases or processing 50+ issues/PRs in a single day, reflecting a market that values self-hosted, provider-agnostic agent frameworks over closed-wall-garden assistants. The primary shared challenges are **session lifecycle reliability**, **channel adapter stability**, and **supply-chain security** — indicating the ecosystem is maturing beyond feature proliferation toward production-readiness. Projects are diverging along two axes: generalist personal assistants (OpenClaw, CoPaw, NanoBot) versus specialized/enterprise-focused platforms (IronClaw's capability policy, ZeroClaw's ACP interoperability, PicoClaw's edge deployments).

---

## 2. Activity Comparison

| Project | Issues Uptd | PRs Uptd | Release (24h) | Health Score | Notes |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | None (2026.5.4 prior) | 🟡 Strained | Extreme volume; many regressions; maintainer bandwidth clearly saturated |
| **NanoBot** | 28 | 46 | None (v0.1.4.post5) | 🟡 At-risk | Security patches merged but PyPI malware allegation (#2439) remains unresolved — critical trust gap |
| **Hermes Agent** | 50 | 50 | None | 🟡 Backlog-heavy | 36/47 issues/PRs still open; low close rate signals bandwidth constraint |
| **PicoClaw** | 5 | 18 (14 merged) | None | 🟢 Healthy | High velocity; strong merge rate; focused quality push on channel hardening |
| **NanoClaw** | 3 | 11 | None | 🟢 Accelerating | 9 open PRs from diverse contributors; new operational skill system shipping |
| **NullClaw** | 1 | 0 | None | 🔴 Dormant | Single stale issue (65 days); zero PR activity; likely maintainer-absent |
| **IronClaw** | 29 | 50 | None (release PR open) | 🟡 Scaling | Large capability-policy epic in flight; benchmark-driven CI novel but E2E red for 31 days |
| **LobsterAI** | 1 | 8 (all merged) + ship | ✅ 2026.6.26 (OpenClaw-based) | 🟢 High-throughput | Clean merge cycle shipping Cowork/subagent improvements on upgraded OpenClaw runtime |
| **CoPaw** | 29 | 50 | ✅ v2.0.0-beta.1 | 🟡 Beta risk | High frequency but beta flagged unstable; plugin ecosystem fragmentation emerging |
| **ZeroClaw** | 50 | 50 | ✅ v0.8.2 | 🟢 Maturing | Strongest RFC/active governance; supply-chain security pipeline progressing systematically |
| **Moltis** | 0 | 1 (open) | None | 🟢 Low-volume | Zero-issue backlog; focused observability feature (auto-screenshot PRs) |
| **TinyClaw** | 0 | 0 | None | 🔴 Inactive | No activity |
| **ZeptoClaw** | 0 | 0 | None | 🔴 Inactive | No activity |

---

## 3. OpenClaw's Position

### Advantages

- **Market share and mindshare**: The 81-reaction Linux/Windows app demand on Issue #75 dwarfs comparable feature requests in other repos. Its 500-issue/PR daily volume indicates the largest active contributor pool in the space.
- **Upstream dependency advantage**: LobsterAI is built on OpenClaw runtimes, making OpenClaw the *de facto* reference implementation for others to build on and integrate with.
- **Breadth of channel/platform support**: macOS, iOS, Android, WebChat, Discord, Telegram, and now Linux/Windows PRs — no peer covers as many platforms.
- **Security demand signal**: Users are proactively asking for masked secrets, exec denylists, and MCP approval gates — a technically sophisticated user base attracted to OpenClaw's openness.

### Vulnerabilities

- **Regression accumulation**: Multiple WebChat, session, and multi-agent regressions in the 2026.5.x cycle with unmerged fix PRs erode trust. NanoBot and CoPaw are catching up on multi-agent stability while OpenClaw is actively losing ground here.
- **Maintainer bandwidth as bottleneck**: Unlike ZeroClaw's RFC governance or IronClaw's capability-policy epic tracking, OpenClaw's 2.5-month-old stalled PRs suggest organizational strain rather than technical limitation.

### Peer Comparison (Technical Approach)

| Dimension | OpenClaw | ZeroClaw | IronClaw | NanoBot | CoPaw |
|---|---|---|---|---|---|
| **Plugin model** | Local plugin approval gating | Wasm-first, capability-enforced, signed distribution | 4-dimension capability policy engine | Manifest-based (PR in flight) | AgentScope 2.0 integrated |
| **Multi-agent** | Batch CLI + concurrent spawning (unstable) | A2A interop, ACP elicitation, goal mode | Trace Commons, collaborative audit | External agent delegation (Claude Code, Codex) | Cowork (IBM-style) + plan mode |
| **Channel strategy** | Maximum breadth (IM + desktop) | High breadth + RFC-driven additions | Reborn stack web-first | Bridges WhatsApp/Telegram/etc | WeChat/DingTalk/Feishu heavy |
| **Security posture** | Reactive (user-driven hardening demands) | Proactive (SBOM, SLSA pipeline) | Enterprise RBAC (multi-tenant) | Reactive (post-exploit patches) | Beta-tagged, stability-first |

---

## 4. Shared Technical Focus Areas

### 🔒 Security & Sandbox Hardening *(All projects)*
- **NanoBot**: Critical exec allowlist bypasses patched (PR #4562), but PyPI supply-chain risk (#2439) unaddressed
- **OpenClaw**: Masked secrets, sandbox denylists, MCP approval gates demanded by 13+ users
- **ZeroClaw**: SBOM generation in CI, Wasm-first sandboxed plugins, MCP bundle enforcement gap (#7733)
- **IronClaw**: Lean NoExposureGuard service, sealed dispatch authority, multi-tenant isolation
- **NanoClaw**: libsignal key material leaking in debug logs (#2860)

### 🤖 Multi-Agent Orchestration Reliability *(OpenClaw, NanoBot, Hermes, ZeroClaw)*
- **OpenClaw**: Session write-lock subagent blocking, concurrent agent config overwrite, 5.x regressions
- **NanoBot**: Cron session isolation (#4082 fixed), heartbeat session mode
- **Hermes**: Subagent `/agents` TUI stuck on "running" (#52318); Discord session-key leakage (#24100)
- **ZeroClaw**: A2A agent discovery (v0.8.2), ACP elicitation Phase 1, goal mode RFC

### 📱 Cross-Platform & Channel Adapter Stability *(PicoClaw, NanoClaw, OpenClaw, Hermes)*
- **PicoClaw**: WhatsApp websocket timeout/reconnect PR (#3179), Android service launch failure (#3182)
- **NanoClaw**: WhatsApp group replies silently lost (#2870), Discord attachments broken (#2752)
- **Hermes**: Windows console flickering (#53342), macOS launchd restart (#42006), 5.2GB dashboard leak (#46082)
- **CoPaw**: Chrome renderer leak (#5520), plugin fork bomb (#5550), installer crashes (#5379)

### 💰 Cost Tracking & Model Routing *(NanoBot, OpenClaw, ZeroClaw)*
- **NanoBot**: Per-session model override, heartbeat cheaper-model override, dream model override
- **OpenClaw**: ~3,500 token/session tool schema overhead reduction requested (#14785), silent reasoning default cost surprise (#73182)
- **ZeroClaw**: Unpriced model cost_at_zero fix (#8233), OpenRouter failover arrays

---

## 5. Differentiation Analysis

| Project | Primary Target User | Core Technical Differentiator | Strategic Moat |
|---|---|---|---|
| **OpenClaw** | Generalist power users wanting multi-platform, self-hosted agent | Maximum channel/platform breadth; native desktop companions; plugin ecosystem | Largest contributor community; reference runtime for forks (LobsterAI) |
| **ZeroClaw** | Operators and enterprises needing governance and supply-chain trust | RFC-driven governance; ACP/A2A Wasm-first security model; SLSA pipeline | Strongest institutionalization of community process; multi-channel UX consistency |
| **IronClaw** | Enterprise teams requiring multi-tenant RBAC and audit trails | 4-dimension capability-policy engine; benchmark-driven agent improvement; trace commons | Novel automated hill-climbing on agent benchmarks; multi-tenant isolation |
| **CoPaw** | Chinese-market teams needing DingTalk/WeChat/Feishu integration | Deep domestic IM integration; plan mode; OpenAI-compatible proxy support | AgentScope 2.0 ecosystem alignment; strongest WeChat/DingTalk coverage |
| **NanoBot** | Solo developers wanting a lightweight, multi-model gateway | Unified gateway across OpenRouter/LLaMA.cpp/Claude Code/Codex delegation | Simplicity/footprint; TTS + external-agent delegation broadening the platform play |
| **PicoClaw** | Edge/self-hosted deployments on constrained infra (Go/Matrix-native) | DeltaChat gateway; Matrix E2EE with vodozemac migration; Go single-binary | Simplicity of deployment; DeltaChat/Matrix-native positioning |
| **NanoClaw** | WhatsApp-centric users wanting operational CLI/management skills | Operational skill toolkit (`/manage-agents`, `/system-digest`, `/setup-system-digest`); CBOR session encoding | Unique operational-tooling layer atop Baileys; ${VAR} MCP config expansion |
| **LobsterAI** | Teams wanting a polished commercial-grade distro of OpenClaw | Plan mode, subagent progress tracking, Mermaid stability, IM plugin upgrades | Built atop OpenClaw with enterprise polish; strongest Cowork (multi-agent collab) UX |
| **Hermes Agent** | Users wanting a full-stack gateway with broad platform + TUI/Dashboard | Widest platform matrix (Discord/Telegram/WhatsApp/WeChat/TUI/Dashboard/Desktop); dynamic reasoning routing | Multi-profile, multi-reasoning-tier architecture; Honcho memory integration |
| **Moltis** | Browser-automation engineers needing visual observability | Auto-screenshot per action; browser-first agent observability stack | Niche focus on browser agent audit trail; zero-issue backlog discipline |
| **NullClaw/ZeptoClaw/TinyClaw** | Niche or dormant | Zig-based build (NullClaw); no active differentiation | No current momentum; high risk of abandonment |

---

## 6. Community Momentum & Maturity

### 🚀 Rapidly Iterating (actively shipping features, high close rate)
- **LobsterAI**: 8/8 PRs merged; clean release cycle; shipping Cowork plan mode
- **PicoClaw**: 14/18 PRs merged; focused quality push; DeltaChat gateway approaching
- **NanoClaw**: Strong contributor diversity; 9 open PRs from 5 authors; skill-system expansion

### 🔧 Scaling with Strain (high volume, clear bottlenecks)
- **OpenClaw**: 500/500 throughput but mounting regressions; closed stalled PRs would relieve the queue
- **Hermes Agent**: Low close rate (14/36 issues, 3/47 PRs); dashboard PR cluster needs triage sweep
- **IronClaw**: Capability-policy epic + benchmark hill-climbing ambitious but E2E red 31 days
- **CoPaw**: 50/29 velocity with beta tag; post-upgrade migration debt accumulating

### 🌱 Maturing (governance and quality improvements defining trajectory)
- **ZeroClaw**: Strongest RFC cadence; SBOM → signing → SLSA pipeline; A2A interop shipping

### ⚠️ Dormant / At-risk (low or no activity)
- **NullClaw**: 65-day-old stale issue; no PR activity
- **TinyClaw / ZeptoClaw**: Zero activity; effectively unmaintained

---

## 7. Trend Signals for AI Agent Developers

1. **Supply-chain security is now table stakes.** ZeroClaw's SBOM pipeline, PicoClaw's libolm→vodozemac migration, NanoBot's PyPI supply-chain allegation — the community will not tolerate opaque packaging. Projects without signed artifacts, reproducible builds, and dependency auditing will lose enterprise contributors within 12 months.

2. **Multi-agent orchestration is the new frontier, and it's currently broken everywhere.** OpenClaw, Hermes, NanoBot, and CoPaw all have concurrent-session-lock and subagent-lifecycle bugs. The project that ships reliable multi-agent concurrency first captures the "agent team" use case. External delegation (NanoBot ↔ Claude Code/Codex) and A2A interop (ZeroClaw) are clever stopgaps until native orchestration matures.

3. **Channel adapter abstraction is a maintenance tax, not a moat.** Every top project has WhatsApp/Telegram/Discord regressions. The architectural winners are building better internal abstraction layers (CoPaw's message aggregation PR, NanoClaw's Baileys integration fix, ZeroClaw's per-turn output routing) rather than simply adding channels.

4. **Cost-awareness and model routing are emerging as differentiators.** Users hitting Anthropic plan limits, reasoning-default cost doubles, or tool-schema token overhead are asking for per-session model overrides, heartbeat cost optimization, and dynamic reasoning effort. Heterogeneous model fleets (not single-provider lock-in) are becoming the default expectation.

5. **Enterprise readiness is bifurcating the ecosystem.** IronClaw's multi-tenant RBAC, ZeroClaw's SLSA/A2A/governance RFCs, and OpenClaw's user-led security hardening all point toward a future where "personal assistant" and "enterprise agent platform" are distinct categories. Projects not choosing a lane risk satisfying neither.

6. **Plugin ecosystems need capability enforcement, not just extensibility.** ZeroClaw's Wasm-first signed distribution and IronClaw's 4-dimension policy model are more than feature checkboxes — they're trust frameworks. Users are no longer satisfied with `mcp_bundles config file parsed` (ZeroClaw #7733); they want runtime enforcement.

---

*Data compiled from 13 project digests covering GitHub activity on 2026-06-27. Projects with no activity (TinyClaw, ZeptoClaw) and minimal activity (NullClaw) are evaluated on signal-to-noise rather than volume.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-27

**Repository:** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. Today's Overview

NanoBot saw very high activity today with **28 issues updated** (18 still open, 10 closed) and **46 pull requests updated** (39 open, 7 merged/closed). No new releases were published. The past 24 hours were dominated by a **major security push**: multiple critical sandbox-escape vulnerabilities in the `exec` tool were reported and rapidly patched, alongside a flurry of feature PRs from contributor **dajiaohuang** addressing long-standing user requests (TTS, plugins, external agent delegation, per-session model override, heartbeat routing, reasoning escalation, Crawl4AI, cron session isolation). The project appears to be in a rapid-response mode — closing security bugs and backlog issues at pace — but the PR queue is deepening (39 open) and the lack of a new release is notable.

---

## 2. Releases

**No new releases in the last 24 hours.** The most recent visible version on PyPI is `nanobot-ai v0.1.4.post5`, which is the subject of an open security concern (see §5).

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Type | Summary | Issues Closed |
|---|---|---|---|
| [#4547](https://github.com/HKUDS/nanobot/pull/4547) | fix | Self-heal gateway state-file PID on startup | [#4511](https://github.com/HKUDS/nanobot/issues/4511) |
| [#4546](https://github.com/HKUDS/nanobot/pull/4546) | fix | Use `subprocess.Popen + sys.exit` for `/restart` on Windows | [#4513](https://github.com/HKUDS/nanobot/issues/4513) |
| [#4545](https://github.com/HKUDS/nanobot/pull/4545) | fix | Default Windows exec to PowerShell; allow shell parameter | [#4544](https://github.com/HKUDS/nanobot/issues/4544) |
| [#4550](https://github.com/HKUDS/nanobot/pull/4550) | fix | Per-run session key for cron to prevent context sharing | [#4082](https://github.com/HKUDS/nanobot/issues/4082) |
| [#4561](https://github.com/HKUDS/nanobot/pull/4561) | feat | Crawl4AI web-fetch extractor | [#2700](https://github.com/HKUDS/nanobot/issues/2700) |
| [#4562](https://github.com/HKUDS/nanobot/pull/4562) | fix/security | Validate each shell segment against `exec.allowPatterns` | [#4521](https://github.com/HKUDS/nanobot/issues/4521) |

Additionally, **10 issues were closed**, including multiple security advisories and older stale bugs (see §5).

---

## 4. Community Hot Topics

### Most Discussed Issues

| # | Issue | 👍 | Comments | Topic |
|---|---|---|---|---|
| 1 | [#660](https://github.com/HKUDS/nanobot/issues/660) | 5 | 12 | **"Ultra-lightweight" claim vs. Node.js dependency** — User disputes the project's lightweight branding because the Dockerfile bundles both Python *and* Node.js. Open since Feb 14; no resolution. |
| 2 | [#2439](https://github.com/HKUDS/nanobot/issues/2439) | 4 | 6 | **Malicious code in `litellm_init.pth`** — Alleged data-exfiltration in the PyPI package `nanobot-ai v0.1.4.post5`. Severity: Critical. Still **open** despite heavy engagement. |
| 3 | [#143](https://github.com/HKUDS/nanobot/issues/143) | 4 | 3 | **Filesystem tools bypass `restrict_to_workspace`** — Direct file tools can escape the workspace sandbox. Closed today (stale). |
| 4 | [#2231](https://github.com/HKUDS/nanobot/issues/2231) | 0 | 4 | **Plugin system for agent extensibility** — Modeled after Copilot CLI / Claude Code. Now has a fix PR ([#4558](https://github.com/HKUDS/nanobot/pull/4558)). |
| 5 | [#4253](https://github.com/HKUDS/nanobot/issues/4253) | 0 | 4 | **Per-conversation model override** — User wants to switch between OpenRouter and local llamacpp per chat. Fix PR open ([#4555](https://github.com/HKUDS/nanobot/pull/4555)). |

### Underlying Needs
- **Trust & transparency**: The "ultra-lightweight" branding debate and the PyPI malware allegation both signal that users are scrutinizing the project's supply chain and footprint.
- **Extensibility**: Plugin system and external agent delegation requests show users want NanoBot to be a *platform*, not just a single agent.
- **Multi-model workflows**: Per-session model override, heartbeat model override, and dream model override all point to users running heterogeneous model fleets.

---

## 5. Bugs & Stability

### 🔴 Critical — Security Vulnerabilities (Active)

| Issue | Severity | Status | Fix PR |
|---|---|---|---|
| [#2439](https://github.com/HKUDS/nanobot/issues/2439) — Malicious `litellm_init.pth` in PyPI package | **Critical** | **OPEN** ⚠️ | None |
| [#4514](https://github.com/HKUDS/nanobot/issues/4514) — `exec.allowPatterns` bypass via chained commands | **High** | Closed | [#4562](https://github.com/HKUDS/nanobot/pull/4562) |
| [#4515](https://github.com/HKUDS/nanobot/issues/4515) — `exec.allow_patterns` comment-tail bypass | **High** | Closed | [#4562](https://github.com/HKUDS/nanobot/pull/4562) |
| [#4516](https://github.com/HKUDS/nanobot/issues/4516) — ExecTool allowlist wrapper prefix bypass | **High** | Closed | [#4562](https://github.com/HKUDS/nanobot/pull/4562) |
| [#4520](https://github.com/HKUDS/nanobot/issues/4520) — Allowlist bypass via OpenAI-compatible API | **High** | Closed | [#4562](https://github.com/HKUDS/nanobot/pull/4562) |
| [#4519](https://github.com/HKUDS/nanobot/issues/4519) — MCP `enabledTools` scope bypass | **High** | Closed | None listed |
| [#4073](https://github.com/HKUDS/nanobot/issues/4073) — `extra_allowed_dirs` treated as writable roots | **Medium** | Closed | None listed |

> **⚠️ Action Required:** Issue [#2439](https://github.com/HKUDS/nanobot/issues/2439) (malicious code in the published PyPI package) remains **open with no fix or maintainer response**. This is a supply-chain risk that warrants immediate attention — potentially a PyPI takedown + republish, or at minimum a public advisory.

### 🟡 Medium — Functional Bugs

| Issue | Summary | Fix PR |
|---|---|---|
| [#4511](https://github.com/HKUDS/nanobot/issues/4511) | Windows `--background` gateway state file PID mismatch after `/restart` | [#4547](https://github.com/HKUDS/nanobot/pull/4547) |
| [#4513](https://github.com/HKUDS/nanobot/issues/4513) | `/restart` under Windows service managers (nssw/nssm) causes port-conflict loops | [#4546](https://github.com/HKUDS/nanobot/pull/4546) |
| [#4544](https://github.com/HKUDS/nanobot/issues/4544) | Inconsistent shell semantics on Windows (cmd.exe vs PowerShell) | [#4545](https://github.com/HKUDS/nanobot/pull/4545) |
| [#4082](https://github.com/HKUDS/nanobot/issues/4082) | Cron jobs reuse fixed session key across runs | [#4550](https://github.com/HKUDS/nanobot/pull/4550) |
| [#4539](https://github.com/HKUDS/nanobot/issues/4539) | Telegram messages not rendering on Telegram Web | Closed (no PR listed) |

---

## 6. Feature Requests & Roadmap Signals

### Likely to Land in Next Release (PRs already open)

| Feature | PR | Issue |
|---|---|---|
| 🔊 **Text-to-speech / voice output** | [#4560](https://github.com/HKUDS/nanobot/pull/4560) | [#4010](https://github.com/HKUDS/nanobot/issues/4010) |
| 🔌 **Plugin system** (manifest-based) | [#4558](https://github.com/HKUDS/nanobot/pull/4558) | [#2231](https://github.com/HKUDS/nanobot/issues/2231) |
| 🤖 **External agent delegation** (Claude Code, Codex, opencode) | [#4559](https://github.com/HKUDS/nanobot/pull/4559) | [#3436](https://github.com/HKUDS/nanobot/issues/3436), [#3024](https://github.com/HKUDS/nanobot/issues/3024) |
| 🧠 **Per-session model override** | [#4555](https://github.com/HKUDS/nanobot/pull/4555) | [#4253](https://github.com/HKUDS/nanobot/issues/4253) |
| 💓 **Heartbeat model override** (cheaper model) | [#4549](https://github.com/HKUDS/nanobot/pull/4549) | [#4431](https://github.com/HKUDS/nanobot/issues/4431) |
| 💓 **Heartbeat fixed delivery channel** | [#4553](https://github.com/HKUDS/nanobot/pull/4553) | [#4418](https://github.com/HKUDS/nanobot/issues/4418) |
| 💓 **Heartbeat shared-session mode** | [#4551](https://github.com/HKUDS/nanobot/pull/4551) | [#1899](https://github.com/HKUDS/nanobot/issues/1899) |
| ⚡ **Reasoning effort escalation** | [#4552](https://github.com/HKUDS/nanobot/pull/4552) | [#4419](https://github.com/HKUDS/nanobot/issues/4419) |
| 🕷️ **Crawl4AI web extraction** | [#4561](https://github.com/HKUDS/nanobot/pull/4561) | [#2700](https://github.com/HKUDS/nanobot/issues/2700) |
| 🔀 **Trust LLM parallel tool calls** | [#4557](https://github.com/HKUDS/nanobot/pull/4557) | [#3096](https://github.com/HKUDS/nanobot/issues/3096) |
| 🌙 **Dream model override** | [#4556](https://github.com/HKUDS/nanobot/pull/4556) | [#4029](https://github.com/HKUDS/nanobot/issues/4029) |
| 🔒 **API auth when binding to 0.0.0.0** | [#4548](https://github.com/HKUDS/nanobot/pull/4548) | [#4490](https://github.com/HKUDS/nanobot/issues/4490) |
| 🤖 **Dream duplicate-skill write guard** | [#4554](https://github.com/HKUDS/nanobot/pull/4554) | — |
| 🔕 **Silent cron jobs** | [#4357](https://github.com/HKUDS/nanobot/pull/4357) | — |
| 🖥️ **Inline TUI for `nanobot agent`** | [#4329](https://github.com/HKUDS/nanobot/pull/4329) | — |

### No PR Yet (Watchlist)

| Issue | Request |
|---|---|
| [#4508](https://github.com/HKUDS/nanobot/issues/4508) | `ask_clarification` tool for ambiguous user requests |
| [#4419](https://github.com/HKUDS/nanobot/issues/4419) | Auto reasoning-effort escalation (PR now open) |

**Prediction:** The next release (likely `v0.1.5` or `v0.2.3`) will be a **substantial feature drop** centered on extensibility (plugins, agent delegation, TTS), multi-model flexibility (per-session/heartbeat/dream overrides), and the security hardening of the exec tool.

---

## 7. User Feedback Summary

### Pain Points
1. **Security trust deficit** — The combination of a malware allegation in the PyPI package ([#2439](https://github.com/HKUDS/nanobot/issues/2439)) and multiple exec-tool allowlist bypasses ([#4514](https://github.com/HKUDS/nanobot/issues/4514)–[#4520](https://github.com/HKUDS/nanobot/issues/4520)) creates a perception that the project's sandboxing is fragile. Users deploying NanoBot with the OpenAI-compatible API exposed are particularly at risk.
2. **Windows second-class citizen** — Three separate Windows-specific bugs (gateway PID state, service-manager restart, cmd/PowerShell inconsistency) were filed within 48 hours, suggesting the Windows experience is undertested.
3. **"Ultra-lightweight" branding mismatch** — The Node.js dependency in the Dockerfile contradicts the project's core marketing message ([#660](https://github.com/HKUDS/nanobot/issues/660), 12 comments, 5 reactions).
4. **No voice output** — Users note the asymmetry: NanoBot accepts voice input but can't speak back ([#4010](https://github.com/HKUDS/nanobot/issues/4010)).

### Satisfaction Signals
- The rapid pace of PR creation (15+ feature PRs in one day, many from a single prolific contributor) suggests **high contributor enthusiasm**.
- Issues are being closed quickly — 10 closed today — indicating **responsive maintenance**.
- Multi-language community engagement (Chinese-language issues like [#1899](https://github.com/HKUDS/nanobot/issues/1899), [#4511](https://github.com/HKUDS/nanobot/issues/4511), [#4513](https://github.com/HKUDS/nanobot/issues/4513)) shows **strong adoption in Chinese-speaking markets**.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Priority | Item | Age | Concern |
|---|---|---|---|
| 🔴 | [#2439](https://github.com/HKUDS/nanobot/issues/2439) — Malicious code in PyPI `nanobot-ai v0.1.4.post5` | 124 days | **No maintainer response.** Supply-chain risk. Needs investigation + public statement. |
| 🔴 | [#660](https://github.com/HKUDS/nanobot/issues/660) — "Ultra-lightweight" claim vs Node.js dep | 133 days | Branding/trust issue. Needs decision: remove Node.js or update messaging. |
| 🟡 | [#4519](https://github.com/HKUDS/nanobot/issues/4519) — MCP `enabledTools` scope bypass | 2 days | Closed but **no linked fix PR**. Verify the fix landed. |
| 🟡 | [#4073](https://github.com/HKUDS/nanobot/issues/4073) — `extra_allowed_dirs` writable roots | 29 days | Closed but **no linked fix PR**. Verify. |
| 🟡 | [#4539](https://github.com/HKUDS/nanobot/issues/4539) — Telegram Web rendering | 1 day | Closed without visible fix. Possible regression. |
| 🟠 | [#4508](https://github.com/HKUDS/nanobot/issues/4508) — `ask_clarification` tool | 2 days | No PR. Useful for agent UX; low effort to implement. |
| 🟠 | 39 open PRs | — | PR queue is deep. Risk of merge conflicts and contributor burnout. Needs triage. |

---

*Generated 2026-06-27 based on GitHub activity data for HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-27

---

## 1. Today's Overview

Hermes Agent remains a highly active project with **50 issues** and **50 pull requests** touched in the last 24 hours, reflecting a large and engaged community. Activity is skewed heavily toward **open/unresolved** items (36 open issues, 47 open PRs), suggesting the maintainers are struggling to keep pace with incoming contributions — only 14 issues and 3 PRs were closed/merged in the same window. The project spans a broad surface area: gateway/chat platforms (Discord, Telegram, WeChat), CLI/TUI, desktop GUI, web dashboard, Docker, provider integrations (Anthropic, Ollama, Gemini, Azure), and memory/tool plugins. No new release landed today, meaning the current stable version is collecting a significant backlog of fixes and features.

---

## 2. Releases

**None.** No new releases were published in the last 24 hours. Given the volume of open P1/P2 bugs and feature PRs, the community is likely accumulating changes for an upcoming release, but there is no changelog or migration guidance to report.

---

## 3. Project Progress

After reviewing the provided data for merged or closed activity in the last 24 hours, the notable items that were resolved include:

- **#27715** — `get_hermes_dir` backward-compat resolver that silently shadowed new-path data with empty old-path directories. A P1 data-integrity issue now closed.
- **#24100** — Discord gateway command-approval prompts routed to the wrong thread due to a stale `os.environ` session key leaking across concurrent sessions. Closed (P1).
- **#21168** — Discord markdown tables rendered as garbage; closed, likely with auto code-fence wrapping.
- **#35927** — Hermes TUI froze when an MCP OAuth authorization prompt appeared at startup. Closed (P1).
- **#46789** — Desktop app macOS segfaults (exit code -11) on `terminal`, `execute_code`, `read_file`. Closed (P1).
- **#27602** — Gateway silently abandoned populated `platforms/pairing` when an empty `pairing/` dir existed. Closed (P1).
- **#38122** — Windows desktop update loop after a dirty bundled repo checkout. Closed (P2).
- **#53297** — Telegram existing sessions taking 15–30s to activate while new chats respond immediately. Closed (P2).
- **#46285** — Smart model routing plug-in feature request, closed (declined or implemented elsewhere).
- **#25378** — Azure OpenAI configuration `NotFoundError` issue, closed.

The low close-to-open ratio (14/36 for issues, 3/47 for PRs) signals **maintainer bandwidth constraint**, not low quality.

---

## 4. Community Hot Topics

| # | Item | Signals |
|---|------|---------|
| 1 | **[#487](https://github.com/NousResearch/hermes-agent/issues/487)** — Cryptographic Audit Trail (SHA-256 hash-chained action log) | **25 comments**, longest-running design discussion. Inspired by OpenFang's `audit.rs`. Indicates enterprise/provenance demand — users want non-repudiable agent action logs. |
| 2 | **[#42006](https://github.com/NousResearch/hermes-agent/issues/42006)** — macOS `launchd_restart` missing `bootout` before `bootstrap` (P1) | 7 comments. A recurring platform-specific install/upgrade reliability frustration. |
| 3 | **[#44147](https://github.com/NousResearch/hermes-agent/issues/44147)** — Web dashboard can't load messages for non-default profile sessions | 5 comments, active today. Multi-profile users blocked from reviewing sessions. |
| 4 | **[#31668](https://github.com/NousResearch/hermes-agent/issues/31668)** — Anthropic `claude-sonnet-4-6` rate-limit / extra usage (P2) | 5 comments, 1 👍. Users hitting Anthropic plan-limit changes mid-conversation. |
| 5 | **[#12020](https://github.com/NousResearch/hermes-agent/issues/12020)** — Disable `hermes.tool.progress` events to fix OpenAI-compatible front-end parsing | 5 comments. Ecosystem interoperability pain — third-party UIs break on Hermes-proprietary SSE events. |
| 6 | **[#44140](https://github.com/NousResearch/hermes-agent/issues/44140)** — Desktop GUI: auto-scroll, sidebar overlap, custom session groups | 3 comments, **4 👍** — highest community signal. Desktop UX polish requests. |
| 7 | **[#52318](https://github.com/NousResearch/hermes-agent/issues/52318)** — `/agents` TUI command stuck on `running` after subagent completion | 3 comments, 1 👍. Multi-agent observability gap. |
| 8 | **[#53343](https://github.com/NousResearch/hermes-agent/pull/53343)** — Dynamic reasoning efforts per model (PR, opened today) | Ambitious refactor of the 4-tier reasoning system into a model-capability-mapped layer. Targets Gemini 3.5 Flash → `Minimal`, Opus → `Max`. Likely to be consequential if merged. |

**Underlying needs**: (a) auditability/compliance for enterprise users, (b) reliable install/update flows across platforms, (c) third-party UI compatibility, (d) deeper multi-model routing intelligence.

---

## 5. Bugs & Stability

### P1 — Critical / Blocking

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| **[#42006](https://github.com/NousResearch/hermes-agent/issues/42006)** | macOS `launchd` gateway restart fails after `hermes update` (missing `bootout`) | ❌ No linked PR |
| **[#40170](https://github.com/NousResearch/hermes-agent/issues/40170)** | Customer-facing Honcho memory-context leak: `[System note: The following is recall…]` injected into user-visible layer | ❌ No linked PR |
| **[#53342](https://github.com/NousResearch/hermes-agent/issues/53342)** | **Windows desktop flickers black cmd windows nonstop** — "critical blocking bug," filed today | ❌ No linked PR |

### P2 — Significant

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#31668](https://github.com/NousResearch/hermes-agent/issues/31668) | Anthropic rate-limit / extra usage handling | ❌ |
| [#53344](https://github.com/NousResearch/hermes-agent/pull/53344) | Windows desktop `pythonw` console flash (PR, opened today) | ✅ PR open |
| [#52805](https://github.com/NousResearch/hermes-agent/issues/52805) | Gateway processes inbound WeChat/Telegram messages but never delivers responses | ❌ |
| [#46082](https://github.com/NousResearch/hermes-agent/issues/46082) | Dashboard memory leak — grows to **5.2 GB**, OOM-killed (v0.16.0) | ❌ |
| [#13965](https://github.com/NousResearch/hermes-agent/issues/13965) | Provider config modified unexpectedly causing state inconsistency | ❌ |
| [#27715](https://github.com/NousResearch/hermes-agent/issues/27715) `CLOSED` | `get_hermes_dir` path shadowing — now resolved | ✅ Closed |

### P3 — Minor / Cosmetic

- [#53341](https://github.com/NousResearch/hermes-agent/issues/53341) — Feature-as-bug: `!` prefix for shell passthrough in CLI.
- [#44147](https://github.com/NousResearch/hermes-agent/issues/44147) — Dashboard profile-scoped message loading.
- [#52857](https://github.com/NousResearch/hermes-agent/issues/52857) — `sessions browse` sort order.
- [#53259](https://github.com/NousResearch/hermes-agent/issues/53259) — TTS tool fails when deps on `PYTHONPATH` (lazy_deps fallback missing).

**Stability signal**: The P1 list includes a **security-relevant Honcho recall leak** (#40170) and a **fresh Windows showstopper** (#53342) — both with no fix PRs yet and should be triaged urgently. Dashboard memory leak at 5.2 GB (#46082) has been open for 13 days.

---

## 6. Feature Requests & Roadmap Signals

| Request | Likelihood Assessment |
|---------|----------------------|
| **[#53343 PR](https://github.com/NousResearch/hermes-agent/pull/53343)** — Dynamic reasoning effort per model | 🟢 **High** — PR targets the core agent loop, handles Gemini/Opus edge cases, aligns with multi-model direction. Prime candidate for next minor release. |
| **[#487](https://github.com/NousResearch/hermes-agent/issues/487)** — Cryptographic audit trail (25-comment deep dive) | 🟡 **Medium** — Extensive design discussion suggests a draft is forming, but no PR yet. Enterprise demand may accelerate it. |
| **[#12020](https://github.com/NousResearch/hermes-agent/issues/12020)** — Toggle to disable `hermes.tool.progress` | 🟡 **Medium** — low implementation cost, addresses ecosystem fragmentation. |
| **[#44140](https://github.com/NousResearch/hermes-agent/issues/44140)** — Desktop auto-scroll + UI polish (4 👍) | 🟡 **Medium** — highest-liked desktop UX issue; PR likely incoming from community. |
| **[#4445](https://github.com/NousResearch/hermes-agent/issues/4445)** — Telegram message chunking via custom separator | 🟢 **Medium** — narrowly scoped, improves a major platform. |
| **[#9404](https://github.com/NousResearch/hermes-agent/issues/9404)** — Honcho session-write dedup + metadata stripping | 🟡 **Medium** — aligns with existing Honcho integration roadmap. |
| **[#53320](https://github.com/NousResearch/hermes-agent/issues/53320)** — Vestige memory provider plugin | 🔴 **Lower** — net-new third-party integration; requires maintenance commitment. |
| **[#46285](https://github.com/NousResearch/hermes-agent/issues/46285)** — Smart model routing plug-in, closed | Closed — possibly deferred or rejected. |

**Predicted next-release themes**: (1) per-model reasoning control, (2) dashboard stability (memory leak fix), (3) Windows desktop hardening, (4) Anthropic provider compatibility.

---

## 7. User Feedback Summary

**Pain points (dissatisfaction):**

- **Windows desktop is fragile** — flickering console windows (#53342), update loops (#38122), segfaults on macOS (#46789, now closed). Cross-platform desktop is the most complained-about component.
- **Dashboard resource usage** — 5.2 GB memory leak (#46082) erodes trust in the web UI for long-running deployments.
- **Provider config fragility** — Anthropic plan-limit changes break existing setups (#31668); Azure OpenAI config silently fails (#25378); provider configs get unexpectedly modified (#13965). Users feel they cannot rely on configuration persistence.
- **Multi-profile experience is half-baked** — dashboard can't load non-default profile sessions (#44147), analytics undercount across profiles (#21773, now has a PR).
- **Third-party UI breakage** — `hermes.tool.progress` events crash OpenAI-compatible front-ends (#12020). Ecosystem interoperability is a recurring theme.

**Satisfaction signals:**

- The breadth of platform support (Discord, Telegram, WhatsApp, WeChat, TUI, Desktop, Dashboard) continues to attract diverse use cases.
- Feature requests like cryptographic audit trails (#487) and dynamic reasoning (#53343) show **advanced users are building serious workflows** on Hermes and want enterprise-grade capabilities.
- Community members are shipping their own plugins (Vestige memory, #53320) and detailed spec PRs (#9404), indicating a maturing extension ecosystem.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

These issues/PRs have been open for weeks with community engagement but no visible maintainer response:

| Item | Age | Why It Matters |
|------|-----|----------------|
| **[#40170](https://github.com/NousResearch/hermes-agent/issues/40170)** — Honcho recall leak (P1, security) | 22 days | Customer-visible system-note leakage. Security-adjacent; should be prioritized. |
| **[#46082](https://github.com/NousResearch/hermes-agent/issues/46082)** — Dashboard 5.2 GB memory leak | 13 days | Affects all dashboard users on long uptimes. No PR linked. |
| **[#42006](https://github.com/NousResearch/hermes-agent/issues/42006)** — macOS launchd restart (P1) | 19 days | Blocks macOS users from clean updates. |
| **[#31668](https://github.com/NousResearch/hermes-agent/issues/31668)** — Anthropic rate-limit handling (P2) | 34 days | A top-tier provider integration is partially broken. |
| **[#12020](https://github.com/NousResearch/hermes-agent/issues/12020)** — `hermes.tool.progress` toggle | 70 days | Ecosystem compatibility; low-effort fix. |
| **[#4445](https://github.com/NousResearch/hermes-agent/issues/4445)** — Telegram message chunking | 87 days | One of the most-requested platform improvements. |
| **[#18873 PR](https://github.com/NousResearch/hermes-agent/pull/18873)** — "Integrate 27 upstream commits" | 56 days | Marked `[invalid]` — needs closure or guidance to contributor. |
| **[#20221 PR](https://github.com/NousResearch/hermes-agent/pull/20221)** — Dashboard preserve remote gateway platforms | 53 days | Stale PR with a clear fix; needs review triage. |
| **[#20515 PR](https://github.com/NousResearch/hermes-agent/pull/20515)** — Tailscale identity auth for dashboard | 52 days | Security feature; needs security review. |

**Recommendation**: The maintainers should consider a **triage sweep** on items >30 days old with P1/P2 labels, and either merge, close, or request changes on the 20+ dashboard-related PRs that have been open since early May. The dashboard PR cluster (#20221, #20515, #20615, #20686, #20808, #20838, #20871, #21104, #21682, #21702, #21745, #21769, #21773, #22010, #22122) represents a significant parallel effort that is currently bottlenecked.

---

*Data snapshot: 2026-06-27 | Source: github.com/NousResearch/hermes-agent | Issues: 50 updated (36 open / 14 closed) | PRs: 50 updated (47 open / 3 merged) | Releases: none*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-27

## 1. Today's Overview

PicoClaw shows **high development velocity** today with 18 PRs updated (14 merged/closed) and 5 issues touched, though no new release was cut. The bulk of merged work is **error-handling hygiene** — a coordinated push across multiple packages to explicitly ignore secondary `Close()` and `Encode()` errors in retry loops and error paths. Two meaningful feature/bug-fix PRs target the **WhatsApp channel** (websocket reconnection and stale connection detection), and a DeltaChat gateway PR continues to advance. The project is in an active stabilization phase, cleaning up lint issues and hardening channel integrations rather than shipping headline features.

## 2. Releases

**None.** No new version was published in the last 24 hours.

## 3. Project Progress

### Merged / Closed PRs (14)

| PR | Author | Description |
|---|---|---|
| [#3181](https://github.com/sipeed/picoclaw/pull/3181) | Alix-007 | **fix(gateway): guard startup info assertions** — Prevents panics when `GetStartupInfo()` returns missing or malformed sections; falls back to zero counts. |
| [#3143](https://github.com/sipeed/picoclaw/pull/3143) | lc6464 | **fix(web): block private IPv4 embeds in ISATAP literals** — Patches an SSRF guard bypass (Issue [#3074](https://github.com/sipeed/picoclaw/issues/3074)) by teaching the IP classifier to recognize ISATAP IPv6 literals embedding private/loopback IPv4. |
| [#3187](https://github.com/sipeed/picoclaw/pull/3187) | chengzhichao-xydt | **test(utils): explicitly ignore resp.Body.Close() errors in tests** — Lint cleanup in test helpers. |
| [#3188](https://github.com/sipeed/picoclaw/pull/3188) | chengzhichao-xydt | **fix(health): explicitly ignore json.Encode errors in HTTP handler** — 5 call sites in `pkg/health/server.go`; prevents log noise from client-disconnect-induced encode failures. |
| [#3186](https://github.com/sipeed/picoclaw/pull/3186) | chengzhichao-xydt | **fix(membench): ignore resp.Body.Close() after io.ReadAll** — Lint hygiene in LLM client retry loop. |
| [#3185](https://github.com/sipeed/picoclaw/pull/3185) | chengzhichao-xydt | **fix(updater): ignore resp2.Body.Close() after io.ReadAll** — Checksum download path cleanup. |
| [#3184](https://github.com/sipeed/picoclaw/pull/3184) | chengzhichao-xydt | **fix(channels): ignore resp.Body.Close() in websocket dial cleanup** — Pico and WhatsApp channel websocket paths. |
| [#3183](https://github.com/sipeed/picoclaw/pull/3183) | chengzhichao-xydt | **fix(onebot): ignore resp.Body.Close() after websocket dial** — OneBot channel websocket path. |
| [#3172](https://github.com/sipeed/picoclaw/pull/3172) | chengzhichao-xydt | **fix: explicitly ignore Close() errors in error paths and retry loops** — 4 files, 8 call sites across `pkg/tools` and other packages. |
| [#3170](https://github.com/sipeed/picoclaw/pull/3170) | chengzhichao-xydt | **fix(agent): close base64 encoder on io.Copy error path** — Prevents resource leak by always calling `encoder.Close()` after `io.Copy`. |
| [#3176](https://github.com/sipeed/picoclaw/pull/3176) | dependabot[bot] | **build(deps): bump telego from 1.9.0 → 1.10.0** — Telegram Bot API v10.1 support. |
| [#3175](https://github.com/sipeed/picoclaw/pull/3175) | dependabot[bot] | **build(deps): bump fyne.io/systray from 1.12.1 → 1.12.2** |
| [#3174](https://github.com/sipeed/picoclaw/pull/3174) | dependabot[bot] | **build(deps): bump line-bot-sdk-go from 8.20.0 → 8.20.1** |
| [#3173](https://github.com/sipeed/picoclaw/pull/3173) | dependabot[bot] | **build(deps): bump modernc.org/sqlite from 1.51.0 → 1.53.0** |

**Key takeaway:** chengzhichao-xydt landed **7 PRs** in a focused error-handling sweep — a significant lint-cleanup effort that touches production code paths (agent, channels, health, updater) and test infrastructure. The SSRF fix (#3143) is the most security-relevant merge.

## 4. Community Hot Topics

| Topic | Type | Engagement | Summary |
|---|---|---|---|
| [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) — Replace libolm with vodozemac | Feature / help wanted | 3 comments, 👍2 | User proposes migrating from unmaintained, insecure **libolm** to **vodozemac** (the official Matrix Rust SDK replacement). Would make libolm optional at compile time. Signals community concern about cryptographic dependency hygiene. |
| [Issue #3094](https://github.com/sipeed/picoclaw/issues/3094) — Async sub-agent duplicate messages | Bug | 3 comments | When `spawn` completes an async sub-agent task, channels receive **two identical messages** — the raw result and the main-agent summary. Closed as stale today; fix likely still needed. |
| [Issue #3150](https://github.com/sipeed/picoclaw/issues/3150) — Agent memory loss ("失忆") | Bug | 3 comments | User reports the agent "gives itself amnesia" — context/conversation history is lost. Stale label applied; no resolution confirmed. |
| [PR #3063](https://github.com/sipeed/picoclaw/pull/3063) — DeltaChat gateway | Feature | Open, updated today | New gateway adding **DeltaChat** as a channel. Still open and actively worked on; represents expansion into the Matrix/email-like messaging ecosystem. |

## 5. Bugs & Stability

| Severity | Issue / PR | Status | Fix PR |
|---|---|---|---|
| 🔴 **High** — SSRF bypass | [#3074](https://github.com/sipeed/picoclaw/issues/3074) (referenced by #3143) | **Fixed & merged** today via [#3143](https://github.com/sipeed/picoclaw/pull/3143) | ✅ |
| 🟠 **Medium** — WhatsApp websocket timeout | [#3178](https://github.com/sipeed/picoclaw/issues/3178) | **Open**, reported today | [#3179](https://github.com/sipeed/picoclaw/pull/3179) (open PR: reconnect after websocket drops) — fix in progress |
| 🟠 **Medium** — Android app can't launch service | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | **Open**, reported today | ❌ None yet |
| 🟡 **Low-Med** — Agent memory loss | [#3150](https://github.com/sipeed/picoclaw/issues/3150) | **Open**, stale | ❌ Unresolved |
| 🟡 **Low** — Sub-agent duplicate messages | [#3094](https://github.com/sipeed/picoclaw/issues/3094) | **Closed** (stale) | ❌ May still exist |
| 🟡 **Low** — Gateway startup panic on malformed info | — | **Fixed** today | [#3181](https://github.com/sipeed/picoclaw/pull/3181) ✅ |
| 🟢 **Lint** — Resource leaks on error paths | — | **Fixed** today | [#3170](https://github.com/sipeed/picoclaw/pull/3170), [#3172](https://github.com/sipeed/picoclaw/pull/3172), [#3183](https://github.com/sipeed/picoclaw/pull/3183)–[#3188](https://github.com/sipeed/picoclaw/pull/3188) ✅ |

**Stability assessment:** The project is in a **good maintenance cadence** — critical security fixes are being addressed, and a systematic error-handling cleanup is reducing log noise and resource leaks. The WhatsApp channel is the most active area of bug fixing, with websocket reliability being a clear priority.

## 6. Feature Requests & Roadmap Signals

| Request | Likelihood of Near-Term Delivery | Notes |
|---|---|---|
| **DeltaChat gateway** ([PR #3063](https://github.com/sipeed/picoclaw/pull/3063)) | **High** — PR is open and actively updated | New channel integration; likely to be the headline feature of the next release. |
| **libolm → vodozemac migration** ([Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)) | **Medium** — tagged `help wanted`, no assignee yet | Security-motivated; community could drive this but no maintainer has picked it up. |
| **WhatsApp websocket resilience** ([PR #3179](https://github.com/sipeed/picoclaw/pull/3179)) | **High** — fix PR already open | Reconnect + ping/pong + async dispatch; addresses the most-reported channel stability issue. |
| **Copilot SDK upgrade** ([PR #3177](https://github.com/sipeed/picoclaw/pull/3177)) | **Medium** — open, dependency bump | Bumps `github.com/github/copilot-sdk/go` from 0.2.0 → 1.0.4 (major version); may carry breaking changes needing code adaptation. |

**Predicted next release focus:** WhatsApp stability + DeltaChat gateway + dependency upgrades. A version bump to **v0.3.0** would be reasonable given the new gateway feature.

## 7. User Feedback Summary

- **WhatsApp users** are experiencing the most friction — websocket timeouts ([Issue #3178](https://github.com/sipeed/picoclaw/issues/3178)) and stale connections are actively reported. The open reconnect PR is a direct response.
- **Android users** face a **complete service launch failure** ([Issue #3182](https://github.com/sipeed/picoclaw/issues/3182)) — the app cannot start, with no workaround documented. This is a blocking issue for mobile users.
- **Agent reliability** concerns persist: memory loss ([Issue #3150](https://github.com/sipeed/picoclaw/issues/3150)) and duplicate sub-agent messages ([Issue #3094](https://github.com/sipeed/picoclaw/issues/3094)) affect trust in multi-step workflows. Both are stale, suggesting they may be deprioritized despite user impact.
- **Security-conscious users** are proactively flagging the libolm dependency risk ([Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)), indicating an audience that cares about supply-chain security.
- **Overall sentiment:** Users are engaged and technically literate (providing logs, screenshots, detailed repro steps), but stale-labeling of bugs without resolution risks eroding confidence.

## 8. Backlog Watch

| Item | Age | Why It Needs Attention |
|---|---|---|
| [Issue #3150](https://github.com/sipeed/picoclaw/issues/3150) — Agent memory loss | 8 days, stale | Core functionality bug; "amnesia" in a personal AI assistant is a critical UX failure. Should either be confirmed fixed or re-opened with a clear investigation plan. |
| [Issue #3094](https://github.com/sipeed/picoclaw/issues/3094) — Sub-agent duplicate messages | 17 days, closed stale | Closed without confirmed fix. If the bug still exists, it should be re-opened. If fixed, a comment linking the fix PR would help the reporter. |
| [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) — Replace libolm with vodozemac | 18 days, help wanted | Security issue with an unmaintained crypto library. Even if no maintainer picks it up, a documented decision ("will do" / "won't do") would be valuable. |
| [PR #3063](https://github.com/sipeed/picoclaw/pull/3063) — DeltaChat gateway | 19 days, open | Needs review/merge or feedback from maintainers to avoid going stale. |
| [PR #3177](https://github.com/sipeed/picoclaw/pull/3177) — Copilot SDK 1.0.4 bump | 2 days, open | Major version bump (0.x → 1.x); may require code changes beyond the dependency declaration. Should be reviewed for breaking changes. |
| [Issue #3182](https://github.com/sipeed/picoclaw/issues/3182) — Android service launch failure | 1 day, open | Blocking bug for mobile users; needs triage and likely a response asking for more diagnostic info. |

---

*Data source: [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw) — Digest generated 2026-06-27.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-27

## 1. Today's Overview

NanoClaw shows **high development velocity** with 11 PRs and 3 issues updated in the last 24 hours, though no new release was cut. The project is in an active feature-shipping phase: multiple contributors (notably **grantland**, who authored or co-authored 6 open PRs today) are pushing fixes across channel adapters (WhatsApp, Telegram, Discord), session management, MCP server configuration, and a new system of operational/utility skills. Two PRs were merged/closed today, both addressing real stability blockers — a v2 database migration crash and a test artifact. The overall health signal is **positive and accelerating**, with a large open-PR queue (9 open) suggesting either a batch is awaiting review or the maintainer throughput is a bottleneck.

---

## 2. Releases

**None.** No new version was published in the last 24 hours. The `[Unreferenced]` CHANGELOG entry referenced in Issue #2868 hints that unreleased changes are accumulating, and a release may be imminent if the open skill and fix PRs land.

---

## 3. Project Progress

### Merged / Closed PRs

| PR | Author | Outcome | Significance |
|---|---|---|---|
| [#2859](https://github.com/nanocoai/nanoclaw/pull/2859) | cben0ist | **Merged** | **Critical fix** — v2 DB migration (`1b-db` step) crashed on older v1 installs (e.g., 1.1.0) that lacked the `is_main` column in `registered_groups`. Without this, first-time v2 migration was a hard failure. Unblocks all users upgrading from early v1 versions. |
| [#2867](https://github.com/nanocoai/nanoclaw/pull/2867) | Strke | **Closed** | Test/contributing-guide finding — likely closed as resolved or not requiring merge. |

### Open PRs Gaining Traction

- **[#2863](https://github.com/nanocoai/nanoclaw/pull/2863)** — New `/setup-system-digest` and `/system-digest` utility skills (grantland). Signals investment in observability/introspection tooling.
- **[#2862](https://github.com/nanocoai/nanoclaw/pull/2862)** — New `/manage-agents` and `/manage-schedules` operational skills (grantland). Expands the in-agent operational control surface.
- **[#2861](https://github.com/nanocoai/nanoclaw/pull/2861)** — Expands `${VAR_NAME}` environment variable substitution in MCP server spawn config (grantland). Lowers friction for MCP server setup.
- **[#2864](https://github.com/nanocoai/nanoclaw/pull/2864)–[#2865](https://github.com/nanocoai/nanoclaw/pull/2865)** — Stale provider session rotation on ceiling-kill / empty-result and age thresholds (grantland). Addresses resource leak and session hygiene.
- **[#2866](https://github.com/nanocoai/nanoclaw/pull/2866)** — Drops legacy Telegram markdown sanitizer in favor of MarkdownV2 (grantland). Modernizes Telegram formatting, likely fixes escaping bugs.

---

## 4. Community Hot Topics

| Item | Type | Engagement | Core Need |
|---|---|---|---|
| [#2870](https://github.com/nanocoai/nanoclaw/pull/2870) — WhatsApp group replies silently lost | PR (open) | Root cause identified: `getNormalizedGroupMetadata()` is the sole provider for Baileys' `cachedGroupMetadata` hook, causing group messages to be logged as delivered but never arrive. | **Reliable WhatsApp group messaging** — a core channel promise. |
| [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) — Discord attachments never reach the agent | PR (open, 15 days old) | Inbound files/images arrive as bare `[file: message.txt]` with no bytes. The chat-sdk bridge download path is broken. | **Discord file handling** — blocks workflows that depend on image/file input from Discord. |
| [#2868](https://github.com/nanocoai/nanoclaw/issues/2868) — `/update-skills` is a silent no-op for installed channels | Issue (open, new) | Pre-flight check skips code/deps refresh for already-installed channels, nullifying the migration path documented in the CHANGELOG. | **Skill update reliability** — users following documented migration instructions get no feedback that nothing happened. |

**Analysis:** The dominant theme is **channel adapter reliability**. WhatsApp group delivery, Discord attachment ingestion, and the Telegram markdown migration all point to the multi-channel abstraction layer being a significant maintenance surface. The silent-no-op `/update-skills` issue further suggests the skill lifecycle (install → update → migrate) needs better guardrails or status reporting.

---

## 5. Bugs & Stability

| Severity | Description | Fix Status | Link |
|---|---|---|---|
| 🔴 **Critical** | v2 DB migration crashes on older v1 installs (`no such column: is_main`) | ✅ **Fixed** — PR #2859 merged | [#2859](https://github.com/nanocoai/nanoclaw/pull/2859) |
| 🔴 **High** | WhatsApp group replies silently lost — logged as delivered but never arrive | 🔧 **Fix proposed** — PR #2870 open | [#2870](https://github.com/nanocoai/nanoclaw/pull/2870) |
| 🟠 **High** | Discord inbound attachments (text files, images) never reach the agent in readable form | 🔧 **Fix proposed** — PR #2752 open (15 days, no activity until today) | [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) |
| 🟡 **Medium** | `/update-skills` silently skips code/deps refresh for already-installed channels | 🐛 **Reported** — Issue #2868 open, no fix PR yet | [#2868](https://github.com/nanocoai/nanoclaw/issues/2868) |
| 🟡 **Medium** | `libsignal` session debug logging leaks key material into logs | 🔧 **Fix proposed** — PR #2860 open | [#2860](https://github.com/nanocoai/nanoclaw/pull/2860) |
| 🟢 **Low** | Auto-prompt registration when bot added to new Telegram group | 📋 **Feature request** — Issue #1275 closed (likely resolved or wontfix; closed without comments) | [#1275](https://github.com/nanocoai/nanoclaw/issues/1275) |

**Note on #1275:** This issue was closed on 2026-06-26 with no comments, despite being a user-facing feature request. The silent closure without explanation may signal either that it was implemented elsewhere or that it was deprioritized — worth monitoring for community reaction.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Likelihood of Next Version | Rationale |
|---|---|---|
| **New operational skills** (`/manage-agents`, `/manage-schedules`, `/system-digest`) | **High** — PRs #2862, #2863 open | Multiple PRs from the same contributor in one day suggests a coordinated feature push. |
| **MCP server `${VAR}` env expansion** | **High** — PR #2861 open | Small, self-contained change; low risk to merge. |
| **Telegram MarkdownV2 migration** | **Medium-High** — PR #2866 open | Breaking change for existing Telegram users with custom formatting; may need a migration note. |
| **Stale session rotation (provider + opencode)** | **Medium** — PRs #2864, #2865 open | Resource hygiene improvements; likely to ship but lower user visibility. |
| **WhatsApp group addressing fix** | **Medium** — PR #2870 open | Critical for affected users but the root cause fix needs careful review (Baileys integration). |
| **Discord attachment handling** | **Medium** — PR #2752 open | 15-day-old PR with recent activity; may be close to resolution. |

**Prediction:** The next release (likely **4.30.x** or a minor bump) will probably include the new skill tooling, MCP env var expansion, Telegram MarkdownV2, and the session rotation fixes. The WhatsApp and Discord channel fixes may land in a follow-up patch if review takes longer.

---

## 7. User Feedback Summary

**Pain Points:**
- **Silent failures are the dominant frustration.** `/update-skills` doing nothing without telling the user (#2868), WhatsApp group messages appearing to send but never arriving (#2870), and Discord attachments showing up as empty references (#2752) all share a pattern: the system reports success or simply omits feedback. Users are left debugging whether their setup is broken.
- **Migration anxiety.** The v2 DB migration crash (#2859, now fixed) and the CHANGELOG's instruction to "re-run `/add-<channel>`" that silently does nothing (#2868) create a trust deficit in the upgrade path.
- **Log noise and security concern.** The `libsignal` debug logging of key material (#2860) is both a usability issue (log spam) and a minor security concern.

**Satisfaction Indicators:**
- High PR volume from multiple contributors (elancode, cben0ist, caburi00, grantland, chubbicorn245) suggests active, engaged development.
- The contributing-guide template is being used consistently, indicating a healthy PR hygiene culture.
- The closed issue #2869 (filed in error) was handled politely and immediately — good community tone.

---

## 8. Backlog Watch

| Item | Age / Status | Risk | Recommendation |
|---|---|---|---|
| [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) — Discord attachments | **15 days open**, updated today | Medium — affects all Discord users with file/image workflows | Prioritize review; the fix is already proposed and the root cause is identified. |
| [#2868](https://github.com/nanocoai/nanoclaw/issues/2868) — `/update-skills` silent no-op | **1 day open**, no fix PR | Medium — blocks users following documented migration path | Needs triage and either a fix or a documented workaround (e.g., "uninstall first, then reinstall"). |
| [#1275](https://github.com/nanocoai/nanoclaw/issues/1275) — Telegram group auto-registration | **~3.5 months old**, closed without comment | Low — closed, but the requester never got a response | Consider adding a comment explaining the decision (implemented, wontfix, or duplicate). |
| **9 open PRs** awaiting merge | Ongoing | **Throughput risk** — if PRs pile up, contributors may lose motivation | Consider batch-reviewing the grantland PRs (#2861–#2866) which appear to be a coordinated set. |

---

**Overall Health Assessment:** 🟢 **Healthy and accelerating.** NanoClaw is in a high-output development phase with strong contributor diversity. The main risk is **review throughput** — 9 open PRs and a pattern of silent failures in channel adapters suggest the project would benefit from either additional maintainer bandwidth or a more explicit triage/SLAs for PR review. No release in the last 24 hours is not concerning given the volume of unreleased changes; a release is likely near.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-27

**Repository:** [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. Today's Overview

NullClaw shows the past 24 hours. A single issue (#868) received a comment update yesterday (June 26), but no pull requests were opened, merged, or closed, and no new releases were published. The project is in a quiet maintenance phase. Development momentum appears low or focused on non-GitHub work. There is one open bug report that has been active for over two months without a corresponding fix PR.

---

## 2. Releases

No new releases in the reporting period.

---

## 3. Project Progress

No PRs were merged, closed, or opened today. No features advanced or were fixed through the public PR pipeline in the past 24 hours.

---

## 4. Community Hot Topics

There is only one active community item:

- **[Issue #868](https://github.com/nullclaw/nullclaw/issues/868)** — `zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat` — 3 comments, updated most recently on 2026-06-26. This is the sole point of community engagement.

**Analysis of underlying need:** The user is attempting to build NullClaw natively on an Android device via Termux on an aarch64 (ARM64) platform. The build fails during the linking stage (`linkat` syscall returns `AccessDenied`), suggesting either a filesystem permissions issue in the Termux sandbox or a Zig stdlib/platform compatibility problem with Android's Bionic libc and security model (SELinux policies restricting `linkat` for hard-linking into the `.zig` output directory). This signals a **platform coverage gap** — the project's build system has not been tested or supported on non-desktop Linux environments, particularly Android/Termux ARM64 targets.

With only 3 comments and 0 reactions, this issue has low community visibility, but it may represent a broader class of build failures on constrained/vobile platforms that would affect other Termux or ARM-Linux users.

---

## 5. Bugs & Stability

| # | Severity | Issue | Status | Fix PR? |
|---|----------|-------|--------|---------|
| 1 | **Medium** | [#868 — zig build fails on Android/Termux aarch64 — AccessDenied on `options.zig linkat`](https://github.com/nullclaw/nullclaw/issues/868) | Open, no assignee | None |

**Severity rationale:** This is rated Medium rather than Critical because it affects a niche platform (Android/Termux), not standard desktop Linux/macOS/Windows development environments. However, it represents a **complete build failure** for affected users — they cannot produce a binary at all. No fix PR exists despite the issue being open since April 23, 2026 (~65 days).

**Potential workaround paths** (not confirmed in the issue): running the build in a non-elevated/non-sandboxed directory, disabling SELinux temporarily, or using a different Zig target/optimize flag. The root cause may need upstream Zig or a change in NullClaw's build script to use `copyfile` instead of `linkat` on affected platforms.

---

## 6. Feature Requests & Roadmap Signals

No new feature requests were filed in the reporting period.

**Prediction:** Based on current signals, no major new feature is likely imminent. The project's near-term focus (if it resumes active development) should prioritize **build system robustness and cross-platform compatibility**, particularly if NullClaw aims to serve developers working in diverse environments (Termux, ARM Linux, containers). Issue #868 is the clearest signal of where user friction exists.

---

## 7. User Feedback Summary

- **User profile (from #868):** A mobile/constrained-environment developer using a Xiaomi Redmi Note 9 with a custom ROM (LineageOS 22.2), building software natively on-device via Termux. This indicates a technically sophisticated user who pushes NullClaw into non-standard deployment contexts.
- **Pain point:** Complete inability to build the project on their chosen environment. The `linkat` AccessDenied error is opaque and not documented anywhere in the NullClaw repo.
- **Satisfaction signal:** The user has persisted — they filed the issue in April and someone engaged (commented) as recently as yesterday. This suggests the user (or a triaging maintainer) still cares about resolution.
- **Dissatisfaction driver:** Lack of response for 65+ days. No acknowledgment, no PR, no workaround posted by maintainers. Risk of the user abandoning the platform or the project entirely.

---

## 8. Backlog Watch

| # | Item | Age | Concern |
|---|------|-----|---------|
| 1 | [Issue #868](https://github.com/nullclaw/nullclaw/issues/868) — Build failure on Android/Termux aarch64 | ~65 days (opened 2026-04-23) | No assignee, no fix PR, last activity was a comment (not a resolution). At risk of being forgotten. |

**Recommendation:** Maintainers should triage this issue — either provide a documented workaround, label it as a known-platform-limitation with appropriate tagging, or create a tracking issue if it requires upstream Zig fixes. Even a simple acknowledgment ("acknowledged, blocked on Zig upstream") would reduce user frustration. If the project intends to support ARM/mobile platforms, this should be added to a CI matrix; if not, the README/build docs should note platform requirements explicitly to prevent wasted effort by users in unsupported environments.

---

*Generated 2026-06-27 from GitHub activity data for [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-27

## 1. Today's Overview

IronClaw shows **high activity** with 29 issues updated (24 open, 5 closed) and 50 pull requests touched (35 open, 15 merged/closed) in the last 24 hours. No new releases were published, though a release PR (#5311) bumped several crates (`ironclaw` 0.24.0 → 0.29.1, `ironclaw_common` breaking to 0.5.0). The dominant theme is the **capability-policy epic (#5261)** — a large multi-PR effort to ship admin-shared tools with per-user auth on the Reborn stack — alongside significant **benchmark hill-climbing** work (PinchBench/ClawBench) and a wave of **Reborn UI bug reports** from dogfooding. E2E test infrastructure remains fragile, with a nightly failure still open and multiple stale-test issues surfaced.

## 2. Releases

No new releases today. PR [#5311](https://github.com/nearai/ironclaw/pull/5311) (release chore, open) prepared the following crate bumps:

| Crate | From | To | Breaking? |
|---|---|---|---|
| `ironclaw_common` | 0.4.2 | 0.5.0 | ⚠️ Yes |
| `ironclaw_safety` | 0.2.2 | 0.2.3 | ✓ Compatible |
| `ironclaw_skills` | 0.3.0 | 0.4.0 | ⚠️ Yes |
| `ironclaw` (main) | 0.24.0 | 0.29.1 | — |
| `ironclaw_skill_learning` | 0.1.0 | 0.1.1 | — |

**Migration note:** Downstream consumers of `ironclaw_common` and `ironclaw_skills` should expect breaking API changes and pin accordingly until the new versions stabilize.

## 3. Project Progress

### Capability Policy Epic (#5261) — Advancing

This epic is the largest coordinated effort, building a multi-layered merge chain:

1. **Engine foundation** — already merged via [#5344](https://github.com/nearai/ironclaw/pull/5344)
2. **Availability dimension** — [#5349](https://github.com/nearai/ironclaw/pull/5349) (open, addresses tool availability gating)
3. **Control plane (REST users + admin grants)** — [#5355](https://github.com/nearai/ironclaw/pull/5355) (open, top of chain)
4. **DB-backed user role + admin gate** — [#5270](https://github.com/nearai/ironclaw/pull/5270) (open)
5. **REST-created local users** — [#5272](https://github.com/nearai/ironclaw/issues/5272) (open, prerequisite for manual testing)

### Security
- [#5009](https://github.com/nearai/ironclaw/issues/5009) **closed**: Live Slack OAuth path brought to DM-parity with triggered-run gating (follow-up on #4953 review).

### Other Merged/Closed PRs (selected)
| PR | Description |
|---|---|
| [#5265](https://github.com/nearai/ironclaw/pull/5265) | Env-configurable turn-runner concurrency for Reborn stress testing |
| [#3890](https://github.com/nearai/ironclaw/pull/3890) | Multi-tenant isolation contract tests for Reborn |
| [#3767](https://github.com/nearai/ironclaw/pull/3767) | Lean NoExposureGuard service (data-leak prevention) |
| [#3766](https://github.com/nearai/ironclaw/pull/3766) | Seal dispatch authority with `AuthorizedDispatchRequest` |
| [#3703](https://github.com/nearai/ironclaw/pull/3703) | Futureproof `RebornRuntime` for Configuration-as-Code epic (#3036) |

### Benchmark Hill-Climbing
- [#5350](https://github.com/nearai/ironclaw/issues/5350) and [#5221](https://github.com/nearai/ironclaw/issues/5221) track harness fixes from PinchBench/ClawBench runs with **DeepSeek-V4-Flash** on the Reborn stack. A standing hill-climb agent is working through 9 candidates into draft PRs.

## 4. Community Hot Topics

### 🔥 Capability Policy / Admin-Shared Tools (#5261 and children)
The highest-structural-activity area. Multiple core contributors (zetyquickly, henrypark133) are building a four-dimension capability model (engine, availability, lifecycle, control plane). This enables enterprise patterns: admins share tool catalogs, per-user auth controls what each user can invoke. **User need:** multi-tenant IronClaw deployments for teams/orgs.

### 🔥 "Always Allow Eligible Tools" Default Flip (#5364 / PR #5366)
Simple feature request: flip the default of `AUTO_APPROVE_ELIGIBLE_TOOLS` from off to on. The rationale: new users are hit with 5+ approval prompts for basic tasks like Gmail connection. PR [#5366](https://github.com/nearai/ironclaw/pull/5366) is already open. **User need:** smoother onboarding, less friction for trusted tools.

### 🔥 Trace Commons: Instance-Wide Enrollment (#5280)
Large cross-cutting PR adding a new contribution/trace-sharing model with per-user profiles and trace inspection. Represents new infrastructure for collaborative or auditable agent operation.

### 🔥 Benchmark Harness Backlog (#5221)
DeepSeek-V4-Flash evaluation reveals systematic agent capability gaps being tracked and hill-climbed programmatically — a relatively novel CI-integrated approach to agent improvement.

## 5. Bugs & Stability

### 🔴 High Severity

| # | Issue | Description | Fix Near? |
|---|---|---|---|
| [#5331](https://github.com/nearai/ironclaw/issues/5331) | Tool-approval "always" doesn't auto-approve next same-tool call (engine v2) | Core approval-persistence bug; "always allow" degrades to "allow once" | No PR yet |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failure (open since May 27) | CI reliability concern; full E2E job failing since commit `6985e63` | Unresolved — needs triage |
| [#5332](https://github.com/nearai/ironclaw/issues/5332) | `--all-features` auto-enables forward-feature gates, fires deferred-work tests | Structural Cargo feature-gating bug; pins a deliberately-deferred security invariant (memory isolation) | No PR yet |

###  Medium Severity

| # | Issue | Description | Fix Near? |
|---|---|---|---|
| [#5320](https://github.com/nearai/ironclaw/issues/5320) | Automation stops after planning without creating automation | Automation flow fragile | No PR |
| [#5323](https://github.com/nearai/ironclaw/issues/5323) | Automation creation fails due to runner lease expiry | No PR |
| [#5196](https://github.com/nearai/ironclaw/issues/5196) | "Ask each time" approval fails + triggers duplicate flow | Double-authorization bug | No PR |
| [#5337](https://github.com/nearai/ironclaw/issues/5337) | Wasm-channel OAuth can't reach `auth_url` on first configure | Channel setup dead-end for fresh installs | No PR |
| [#5289](https://github.com/nearai/ironclaw/issues/5289) | Generic "driver protocol error" hides real `invalid_input` failure | Error UX masks actionable info | No PR |
| [#5197](https://github.com/nearai/ironclaw/issues/5197) (_closed_) | Disabled tool causes unrelated tool invocation instead of reporting | Closed — fix likely shipped | ✅ Closed |

###  Low Severity / UI Polish

| # | Issue | PR? |
|---|---|---|
| [#5333](https://github.com/nearai/ironclaw/issues/5333) — Composer stays visible after send | UI glitch | No |
| [#5302](https://github.com/nearai/ironclaw/issues/5302) — Pending approval blocks other conversations | Needs investigation | No |
| [#5319](https://github.com/nearai/ironclaw/issues/5319) — Automation created with UTC, no timezone confirmation | UX | No |
| [#5316](https://github.com/nearai/ironclaw/issues/5316) — Gmail extension discovery inconsistent | Flaky | No |
| [#5227](https://github.com/nearai/ironclaw/issues/5227) — Run failure messages attached to wrong turn | Closed | ✅ Closed |
| [#5282](https://github.com/nearai/ironclaw/issues/5282) — "Logs" entry appears in composer during agent run | Closed | ✅ Closed |
| [#5283](https://github.com/nearai/ironclaw/issues/5283) — "Approve & always allow" not persisted for `nearai.web_search` | Closed | ✅ Closed |
| [#5365](https://github.com/nearai/ironclaw/pull/5365) — Retry button was a dead no-op stub | Open fix | Fix PR open |

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood / Signal |
|---|---|---|
| **Default-on tool auto-approval** | [#5364](https://github.com/nearai/ironclaw/issues/5364) → PR [#5366](https://github.com/nearai/ironclaw/pull/5366) |  **Near-term** — trivial change, PR already open |
| **Persistent multi-identity browser automation** | [#2355](https://github.com/nearai/ironclaw/issues/2355) (epic, open since Apr 12) | 🟡 Medium — spec'd as built-in Rust tool, but no active PRs |
| **Configuration-as-Code / tenant blueprints** | [#3036](https://github.com/nearai/ironclaw/issues/3036) | 🟡 Medium — PR [#3703](https://github.com/nearai/ironclaw/pull/3703) reshaped the runtime as prerequisite |
| **Capability policy (full 4-dimension)** | [#5261](https://github.com/nearai/ironclaw/issues/5261) → multiple PRs |  **In progress** — 3 of 5 PRs open, chain not yet landed |
| **Runner-lease CAS consolidation** | [#5274](https://github.com/nearai/ironclaw/issues/5274) |  Medium — refactor following #5234 CAS migration |
| **Better error surfacing** (replace generic "driver protocol error") | [#5289](https://github.com/nearai/ironclaw/issues/5289) |  Quick fix candidate — small UX win |
| **Trace Commons / collaborative audit trails** | [#5280](https://github.com/nearai/ironclaw/pull/5280) |  Large in-flight PR, unclear timeline |

**Prediction for next minor release:** Default auto-approval toggle (#5366), Retry button fix (#5365), and the capability-policy chain (#5349/#5355) are the most likely candidates to land and drive the next version bump.

## 7. User Feedback Summary

**Dominant friction themes from Reborn dogfooding:**

1. **Approval fatigue** — Multiple users report approval dialogs as confusing, duplicative, or broken (#5192, #5196, #5302, #5331, #5364). The consistent ask: *make tool approval intuitive and persistent*. The "always allow" default flip is a direct user-driven response.

2. **Automation unreliability** — The automation-create flow is fragile: planning stops early (#5320), leases expire (#5323), timezones are ignored (#5319), or it outright times out (#5322). One user's prompt ("create automation to monitor repo") triggered multiple failure modes. **Core experience gap for a headline feature.**

3. **Error opacity** — "Driver protocol error" (#5289) and hidden `invalid_input` failures indicate a pattern of swallowing actionable errors behind generic messages.

4. **Channel setup friction** — Wasm channel OAuth entirely broken for fresh configure (#5337); Gmail extension discovers inconsistently (#5316). Each channel has its own gotcha.

5. **UI polish gaps** — Dead Retry button (#5365, now fixed), sticky composer text (#5333), logs polluting composer (#5282, fixed), wrong-turn error attribution (#5227, fixed). These are high-frequency visible issues in the WebUI.

**Sentiment:** Power users (core contributors) are positive about capability policy and benchmark improvements. Dogfooding users hitting the approval/automation/UI bugs express frustration — these are the product's public face and directly impact perception.

## 8. Backlog Watch

| Item | Age / Status | Concern |
|---|---|---|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failure | **31 days open** | CI red for over a month signals either deep test flakiness or a real regression being ignored |
| [#3036](https://github.com/nearai/ironclaw/issues/3036) — Configuration-as-Code epic | Open since ~Feb 2026; runtime reshape merged, but no further PRs | May be deprioritized; needs an owner check-in |
| [#2355](https://github.com/nearai/ironclaw/issues/2355) — Multi-identity agent browsing epic | **76 days open** since Apr 12; last activity Jun 26 | Spec is detailed but no active development visible; competing with Reborn rewrite |

### PRs Needing Review / Triage

| PR | Size | Risk | Note |
|---|---|---|---|
| [#5280](https://github.com/nearai/ironclaw/pull/5280) — Trace Commons | XL, low | Cross-cutting; touches agent, channel, tool, DB, llm, workspace, secrets | Likely needs multiple reviewers |
| [#5355](https://github.com/nearai/ironclaw/pull/5355) — Capability control plane | XL, medium | Top of merge chain for epic #5261 | Blocked by #5349; needs security review |
| [#5271](https://github.com/nearai/ironclaw/pull/5271) — 47 dependency bumps | XL, low | Dependabot; includes refinery 0.8→0.9 (DB migrations) | Should run full CI before merge |
| [#5329](https://github.com/nearai/ironclaw/issues/5329) — E2E stale tests | Issue, opened Jun 26 | 25+ tests failing in harness | Needs assignment; could unblock E2E reliability |

**Maintainer action recommended:** Triage/assign the nightly E2E failure (#4108) and the capability-policy PR chain (#5349 55) to unblock both CI and the highest-activity feature epic.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-27

## 1. Today's Overview

LobsterAI shipped a new release (**2026.6.26**) today, anchored by a major OpenClaw runtime upgrade from `v2026.4.14` → `v2026.6.1` ([PR #2209](https://github.com/netease-youdao/LobsterAI/pull/2209)). The team closed **8 PRs** and **1 Issue** in the last 24 hours, with zero open PRs remaining — a strong signal of a focused, high-throughput maintenance cycle. Activity is concentrated in the **Cowork** (multi-agent collaboration) and **renderer/UI** subsystems, with multiple fixes targeting subagent progress tracking, terminal session duration display, and Mermaid diagram rendering stability. One new high-severity bug was reported (desktop freeze on data backup) and remains unaddressed.

---

## 2. Releases

### LobsterAI 2026.6.26 — Released 2026-06-26

| Category | Change | PR |
|---|---|---|
| **Runtime** | Upgraded OpenClaw runtime from `v2026.4.14` → `v2026.6.1` (includes runtime patches, plugin upgrades, build script updates, Cowork integration fixes) | [#2209](https://github.com/netease-youdao/LobsterAI/pull/2209) |
| **Feature** | Added **Plan Mode workflow** to Cowork | [#2183](https://github.com/netease-youdao/LobsterAI/pull/2183) |
| **Fix** | Support upgraded IM plugin instance | (bundled in #2209) |

**Migration Notes:** No explicit breaking changes documented. The OpenClaw runtime jump spans ~7 weeks of upstream changes (April → June 2026); users relying on custom OpenClaw patches should verify compatibility.

---

## 3. Project Progress

All 8 PRs merged/closed in the last 24h:

| PR | Area | Summary |
|---|---|---|
| [#2209](https://github.com/netease-youdao/LobsterAI/pull/2209) | openclaw, main, renderer, build, docs, cowork, artifacts | **OpenClaw runtime upgrade to v2026.6.1** — the headline change of this release cycle |
| [#2183](https://github.com/netease-youdao/LobsterAI/pull/2183) | cowork | **Plan Mode workflow** — adds structured planning phase to Cowork sessions |
| [#2207](https://github.com/netease-youdao/LobsterAI/pull/2207) | renderer, main | **Stabilize subagent progress tracking** — derives progress from local `subagent_runs` DB instead of model-authored announce text; fixes stale progress (e.g., `3/5` shown when actual is `5/5`) |
| [#2208](https://github.com/netease-youdao/LobsterAI/pull/2208) | renderer, main | **Freeze terminal subagent duration** — persists `endedAt` timestamp so completed subagent timers stop counting; exposes field through IPC types |
| [#2210](https://github.com/netease-youdao/LobsterAI/pull/2210) | renderer, artifacts | **Prevent Mermaid error SVG leaking** — validates with `mermaid.parse()` before rendering; uses controlled error UI instead of raw SVG |
| [#2213](https://github.com/netease-youdao/LobsterAI/pull/2213) | renderer, cowork, artifacts | **Stabilize Mermaid errors + skill search popover** — cleans up render containers on unmount; keeps skill submenu open during focus |
| [#2212](https://github.com/netease-youdao/LobsterAI/pull/2212) | renderer, cowork | **Fix skill search submenu closing** — prevents premature close; stabilizes list height on search result changes |
| [#2211](https://github.com/netease-youdao/LobsterAI/pull/2211) | main | **Sort imports** in `finalUpgradePatchDecisions.test.ts` (targeted cleanup follow-up to #2209) |

**Key themes:** The Cowork subsystem is receiving iterative polish (plan mode, subagent progress, terminal duration). The renderer/artifact layer is being hardened against Mermaid edge cases. The OpenClaw runtime upgrade is the most significant infrastructure change in weeks.

---

## 4. Community Hot Topics

### Issue [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) — [CLOSED/Stale] Multi-Agent Collaboration & Per-Agent Model Binding
- **Author:** orion0608 | **Comments:** 3 | **Created:** 2026-04-04 | **Closed:** 2026-06-26
- **Core requests:** (1) Per-agent model binding — each agent independently configurable with a specific model; (2) Agent group/room mode — a manager agent that dispatches sub-agents on demand, similar to a team topology.
- **Context:** The user explicitly compared LobsterAI favorably against Alibaba's HiClaw for interaction experience, suggesting this is a competitive differentiator area. The issue was closed as stale, not resolved — the underlying feature gap remains open.

### PR [#1459](https://github.com/netease-youdao/LobsterAI/pull/1459) — [CLOSED/Stale] Skill Hover Tooltip
- **Author:** noransu | **Created:** 2026-04-03 | **Closed:** 2026-06-26
- **What it does:** Rich-text tooltip on skill hover with smart 4-direction positioning, 300ms debounce, and two-phase height measurement. Solves truncated skill descriptions.
- **Status:** Closed stale despite being a well-specified, self-contained UI improvement. May indicate bandwidth constraints or prioritization away from UX polish.

**Analysis:** The community is asking for two things: (1) **deeper multi-agent orchestration** (per-agent model binding, manager/worker topologies), and (2) **UI quality-of-life improvements** (tooltips, stable menus). Both issues were closed stale, suggesting the maintainers are focused on the Cowork/subagent infrastructure itself rather than peripheral UX at this time.

---

## 5. Bugs & Stability

### 🔴 HIGH — Desktop "Data Backup" Causes Main Process Freeze (100% Reproducible)
- **Issue:** [#2214](https://github.com/netease-youdao/LobsterAI/issues/2214) | **Status:** OPEN | **Created:** 2026-06-26
- **Environment:** Windows 11 24H2, LobsterAI 2026.6.1, SQLite 71.6 MB (WAL mode), backup to external J: drive
- **Symptom:** Clicking Settings → Agent Engine → Data Migration → Backup Data freezes the entire main window (white screen, "Not Responding") within 5–10 seconds. Requires force-kill.
- **Root cause (user analysis):** `better-sqlite3` backup operations block the main process event loop, likely because the backup runs synchronously on the Node.js main thread without yielding to the Electron renderer.
- **Fix PR:** ❌ None yet. This is a day-old report on the freshly released version.

### 🟡 MEDIUM — Subagent Progress Display Stale After `chat.final`
- **PR:** [#2207](https://github.com/netease-youdao/LobsterAI/pull/2207) | **Status:** ✅ MERGED
- **Fix:** Switched from model-authored announce text to local `subagent_runs` table as source of truth for progress.

### 🟡 MEDIUM — Mermaid Error SVGs Leaking into Document
- **PRs:** [#2210](https://github.com/netease-youdao/LobsterAI/pull/2210), [#2213](https://github.com/netease-youdao/LobsterAI/pull/2213) | **Status:** ✅ MERGED
- **Fix:** Pre-validation with `mermaid.parse()`, controlled error UI, DOM cleanup on unmount.

### 🟢 LOW — Skill Search Submenu Premature Close
- **PR:** [#2212](https://github.com/netease-youdao/LobsterAI/pull/2212) | **Status:** ✅ MERGED

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood of Near-Term Delivery |
|---|---|---|
| **Plan Mode workflow** (structured planning phase in Cowork) | Merged in [#2183](https://github.com/netease-youdao/LobsterAI/pull/2183) for this release | ✅ **Shipped** |
| **Per-agent model binding** | Issue [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) — closed stale | ⏸️ No active PR; likely deferred |
| **Agent group/room with manager dispatch** | Issue [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) — closed stale | ⏸️ Conceptually aligned with Cowork subagent work; may be partially addressed by plan mode + subagent improvements |
| **Skill hover tooltips** | PR [#1459](https://github.com/netease-youdao/LobsterAI/pull/1459) — closed stale | ❌ No active development |
| **Async/non-blocking data backup** | Issue [#2214](https://github.com/netease-youdao/LobsterAI/issues/2214) — new, high severity | 🔴 Needs urgent attention; fix likely in next patch release |

**Prediction for next release (2026.6.x patch or 2026.7):** Expect a hotfix for the data backup freeze (#2214) as the highest priority. The Cowork subagent improvements (progress tracking, terminal duration, plan mode) suggest the team is building toward more sophisticated multi-agent orchestration — per-agent model binding and manager/worker patterns are the logical next step but likely 1–2 release cycles away.

---

## 7. User Feedback Summary

| Sentiment | Detail | Source |
|---|---|---|
| 😊 **Positive** | User praised LobsterAI's multi-instance IM experience and interaction quality vs. competitor HiClaw | [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) |
| 😐 **Constructive** | Request for skill description tooltips — well-specified, self-contained, but closed stale | [#1459](https://github.com/netease-youdao/LobsterAI/pull/1459) |
| 😡 **Frustrated** | Data backup freeze is 100% reproducible on Windows, blocks entire app, requires force-kill — reported within 24h of the new release | [#2214](https://github.com/netease-youdao/LobsterAI/issues/2214) |

**Pain points:** Windows stability (main process blocking), lack of control over individual agent configuration, and missing UI affordances for understanding available skills. The backup freeze is the most urgent — it affects a core data management workflow and ships in the current release.

---

## 8. Backlog Watch

| Item | Age | Status | Recommendation |
|---|---|---|---|
| [#2214](https://github.com/netease-youdao/LobsterAI/issues/2214) — Data backup freeze | 1 day | OPEN, no assignee | 🔴 **Urgent** — hotfix needed for 2026.6.1 users on Windows |
| [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) — Per-agent model binding + agent groups | 84 days | Closed stale | 🟡 **Re-evaluate** — user need is clear and aligned with Cowork roadmap; consider reopening or tracking as a formal roadmap item |
| [#1459](https://github.com/netease-youdao/LobsterAI/pull/1459) — Skill hover tooltip | 85 days | Closed stale | 🟢 **Low priority** but well-implemented; could be revived when UX polish sprint occurs |

**Maintainer attention needed:** The backup freeze (#2214) is the only true fire. Everything else is stale items that were closed without resolution — worth tracking but not blocking. The pattern of closing issues/PRs as stale rather than resolving or explicitly deferring suggests the project may benefit from a formal "backlog" or "wontfix" labeling convention to distinguish "not now" from "lost."

---

*Data source: [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) | Digest generated 2026-06-27*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-27

**Repository:** [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. Today's Overview

Moltis is experiencing a period of active feature development centered on browser agent observability. No issues were updated today and no new versions were released, but one open pull request was introduced signaling a proposed browser feature for per-action screenshot capture (PR #1135). The zero open issue count is a notable indicator of good issue hygiene — T none are currently tracked. The presence of a well-scoped, clearly described PR with thorough summary text suggests motivated contributors are focusing on production-grade improvements, not reactionary bug fixes.

---

## 2. Releases

No releases published today. No latest releases recorded.

---

## 3. Project Progress

No pull requests were merged or closed today.

---

## 4. Community Hot Topics

| Item | Type | Comments | 👍 | Link |
|------|------|----------|-----|------|
| #1135 — Browser: optional auto-screenshot after each action | OPEN PR | N/A | 0 | [moltis-org/moltis#1135](https://github.com/moltis-org/moltis/pull/1135) |

**Analysis:** This PR introduces a feature designed to automatically capture screenshots after state-changing browser actions, so that AI agents can render a visual timeline of their interactions — enabling "visual replay" or ground‑truth debugging without manual capture. The request taps into a deeper need for **agent observability and auditability** — an increasingly critical capability as Moltis is deployed in real workflows where users need to verify, replay, and trust what an AI agent actually did. The chookepoint at `BrowserManager::execute_action` is architecturally sensible, and the state‑changing filter avoids capturing noise. Whether this lands will depend on how the team weighs binary bloat and performance against visibility gains.

---

## 5. Bugs & Stability

No bug reports, crash reports, or regressions opened or updated today. **Stability status: unaffected.**

---

## 6. Feature Requests & Roadmap Signals

| Feature / Signal | Description | Significance |
|-----------------|-------------|--------------|
| Auto-screenshot per browser action ([moltis-org/moltis#1135](https://github.com/moltis-org/moltis/pull/1135)) | Automatic post‑action screenshot capture in the browser crate, a step toward observability infrastructure. | **High** — combined with the zero issue backlog and growing AI agent ecosystem, this suggests the next release will include improvements to auditability and observability tooling, not just raw capability expansion. Expect follow‑up work on a timeline UI for screenshots. This signals a maturing platform moving from "make it work" toward "show what happened." |

**Plausible next-version features (low confidence):** Diff/viewer for agent decision traces; human‑in‑the‑loop checkpoint hooks (a natural extension from visual monitoring).

---

## 7. User Feedback Summary

**Pain points identified:**
- **Agent transparency gap:** The feature request for automatic per-action screenshots indicates users need to replay and verify agent behavior manually or not at all. Without visual traces, debugging complex multi-step browser flows is essentially impossible at scale.
- **Docs/observability missing:** The very framing of the feature suggests documentation or built‑in debugging aids that would help users understand what the agent is "thinking."

**No explicit dissatisfaction signals today.** The tone of the referenced PR is positive and constructive.

**Satisfaction indicators:**
- Zero open issues is typical of a healthy, low‑friction project where improvements are proactive rather than reactive. Contributors are investing in well‑documented feature enhancements (detailed PR summary) rather than opening bug reports, which may reflect satisfaction with current stability.

---

## 8. Backlog Watch

| Flagged Item | Age | Recommendation |
|-------------|-----|----------------|
| PR #1135 — Browser auto-screenshot | ~1 day old, OPEN | Encourage early review or maintainer triage to avoid stalefulness. The scope is contained and the architecture is clear — it should be either explicitly approved as‑is or blocked with specific feedback within the next few days to keep contributors engaged. |

No long‑unanswered issues require attention.

---

### Health Summary

| Dimension | Status ||
|-----------|--------|Stability | 🟢 All clear |
| Activity | 🟡 Feature-focused, low volume |
| Responsiveness | 🟢 No open issues waiting |
| Contributor engagement | 🟡 Batch 1 active PR, no issue interaction |
| Direction | 🟢 Moving toward observability — a sign of maturity |

---

*Generated from GitHub state as of 2026-06-27. All links verified against `moltis-org/moltis`.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-27

**Repository:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)
*(Note: The repository is organized under the name QwenPaw in issues and PRs.)*

---

## 1. Today's Overview

Today's development is extremely active: **50 PRs and 29 Issues were updated within 24 hours**, including an important milestone —the official release of **v2.0.0-beta.1**. The community's focus is concentrated on channel stability (WeChat, DingTalk, Feishu), multi‑agent collaboration UX, and migration fixes following the AgentScope 2.0 upgrade. Overall, the project is in a **high‑frequency iteration phase**, where breaking changes from version upgrades coexist with the community's eagerness for new features.

---

## 2. Releases

### v2.0.0‑beta.1
- ⚠️ This is a beta version; the team explicitly warns of **possible breaking changes and instability**, making it unsuitable for production environments.
- **Associated Issue:** [Issue #5571](https://github.com/agentscope-ai/QwenPaw/issues/5571) — Beta installation verification

**Main Changes:**
- feat: generalize governance policy pattern ([PR #5546](https://github.com/agentscope-ai/QwenPaw/pull/5546))
- feat: Add scroll context manager supporting durable history and REPL recall ([PR #5321](https://github.com/agentscope-ai/QwenPaw/pull/5321))

**Breaking / Migration Notes:**
- Not yet explicitly documented, but many Issues reflect compatibility problems after upgrading to v1.1.12.post2 (e.g., plugin installation failures, spawn loops). Related fix: [PR #5568](https://github.com/agentscope-ai/QwenPaw/pull/5568).

---

## 3. Project Progress

**Main completed work today ( PRs closed/merged):**
- ️ **Desktop Client**
  - [PR #5297](https://github.com/agentscope-ai/QwenPaw/pull/5297) — Batch test/delete models
  - [PR #5265](https://github.com/agentscope-ai/QwenPaw/pull/5265) — Graceful shutdown for Tauri (adapted to AgentScope 2.0)
  - [PR #5436](https://github.com/agentscope-ai/QwenPaw/pull/5436) — Drag‑and‑drop file upload to the sender area
  - [PR #5440](https://github.com/agentscope-ai/QwenPaw/pull/5440) — Post‑merge bug cleanup after AgentScope 2.0 upgrade (+4 lines, −1493 lines)
  - [PR #5153](https://github.com/agentscope-ai/QwenPaw/pull/5153) — pywebview desktop client startup speed optimization (referencing Tauri's instant window)

-  **Agent Framework**
  - [PR #5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) — scroll context manager (under review), using SQLite to persist complete history

-  **Channel / Message**
  - [PR #5577](https://github.com/agentscope-ai/QwenPaw/pull/5577) — Optional message reply aggregation (addresses [#5563](https://github.com/agentscope-ai/QwenPaw/issues/5563))
  - [PR #5574](https://github.com/agentscope-ai/QwenPaw/pull/5574) — Notifying the frontend when channel sessions are updated
  - [PR #5575](https://github.com/agentscope-ai/QwenPaw/pull/5575) — Configurable no‑text debounce (addresses [#5554](https://github.com/agentscope-ai/QwenPaw/issues/5554))

---

## 4. Community Hot Topics

**Issues with the most comments/discussions:**

| # | Issue | Comments | Core Demand |
|---|-------|----------|-------------|
| 1 | [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262)  | 12 | Builtin skills revert to enabled after every upgrade |
| 2 | [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) | 7 | Python installation crashes with Internal Server Error on startup |
| 3 | [#5563](https://github.com/agentscope-ai/QwenPaw/issues/5563) | 5 | Too many fragmented messages; message aggregation needed |
| 4 | [#5480](https://github.com/agentscope-ai/QwenPaw/issues/5480) 🔒 | 5 | Long message layout chaos in the Console |
| 5 | [#5550](https://github.com/agentscope-ai/QwenPaw/issues/5550) | 4 | Remote SSH plugin install loop + residual backend processes |
| 6 | [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401)  | 4 | Frontend crash when loading large tool‑use history sessions |

**Analysis:**
- **State persistence** is a long‑standing pain point: skill toggle states and heartbeat configurations aren't survivingUX details are neglected**: Markdown rendering, send button states, and fragmented notifications — though each alone is a "small" issue, they add up to an overall feeling of roughness.
- **Plugin ecosystem stability** is a growing concern; multiple Issues involve dependencies and installation failures.

---

## 5. Bugs & Stability

**Ranked by severity (impact × reproducibility):**

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **High** | [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) — Python install startup crash | OPEN | None |
|  **High** | [#5550](https://github.com/agentscope-ai/QwenPaw/issues/5550) — Remote SSH plugin fork bomb | OPEN | [PR #5570](https://github.com/agentscope-ai/QwenPaw/pull/5570) |
| 🔴 **High** | [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) — Frontend crash on large sessions | CLOSED | Merged (agentscope_msg_to_message fix) |
| 🟠 **Medium** | [#5480](https://github.com/agentscope-ai/QwenPaw/issues/5480) — Long message Markdown rendering broken | CLOSED | None |
|  **Medium** | [#5520](https://github.com/agentscope-ai/QwenPaw/issues/5520) — Chrome renderer process leak | OPEN | [PR #5536](https://github.com/agentscope-ai/QwenPaw/pull/5536) |
|  **Medium** | [#5573](https://github.com/agentscope-ai/QwenPaw/issues/5573) — DeepSeek V4 dual 400 errors on OpenAI‑compatible endpoints | OPEN | None |
| 🟡 **Low** | [#5543](https://github.com/agentscope-ai/QwenPaw/issues/5543) — `type: null` in tool Schema | OPEN | [PR #5549](https://github.com/agentscope-ai/QwenPaw/pull/5549) |
|  **Low** | [#5554](https://github.com/agentscope-ai/QwenPaw/issues/5554) — No reply after sending files via WeCom | OPEN | [PR #5575](https://github.com/agentscope-ai/QwenPaw/pull/5575) |

**Notable regression:** [Issue #5520](https://github.com/agentscope-ai/QwenPaw/issues/5520) — `browser_stop()` fails to fully clean up Chrome processes, causing memory leaks with repeated start/stop cycles.

---

## 6. Feature Requests & Roadmap Signals

**New requests with clear implementation paths:**

| Issue | Signal | Likelihood of being in the next version |
|-------|--------|----------------------------------------|
| [#5563](https://github.com/agentscope-ai/QwenPaw/issues/5563) Message aggregation | [PR #5577](https://github.com/agentscope-ai/QwenPaw/pull/5577) already submitted | **Very High** |
| [#5572](https://github.com/agentscope-ai/QwenPaw/issues/5572) Model auto‑fallback | Not started; clear requirements | **Medium** |
| [#5564](https://github.com/agentscope-ai/QwenPaw/issues/5564) DingTalk @mention | Multi‑agent scenario reprerequisite | **Medium** |
| [#5551](https://github.com/agentscope-ai/QwenPaw/issues/5551) Computer Use support | Long‑term vision; no technical discussion yet | **Low** |
| [#4865](https://github.com/agentscope-ai/QwenPaw/issues/4865) write_file streaming rendering | Community needs are strong; technically complex | **Medium** |
| [#5539](https://github.com/agentscope-ai/QwenPaw/issues/5553) Heartbeat with configurable timeout | [PR #5557](https://github.com/agentscope-ai/QwenPaw/pull/5557) already submitted | **High** |

**Predicted next v1.1.13 focus:** Channel stability (WeCom/DingTalk), plugin installation reliability, and heartbeat improvements.

---

## 7. User Feedback Summary

**Real user pain points extracted from Issue descriptions:**

- **"I have to disable skills after every upgrade" repetitive operations**: Users have explicitly stated "tired of repeatedly disabling/reenabling after upgrades."
- **"No feedback while writing files, interface looks frozen"**: The user cannot distinguish between active generation and a crash.
- **"Fragmented notifications every 5 minutes"**: Cron tasks generating blank messages pollute DingTalk group chats.
- **"WeChat file sent → silent bot"**: File messages are saved locally but not processed by the Agent.
- **"Out‑of‑the‑box DeepSeek V4 fails with proxy"**: The official OpenAI‑compatible protocol implementation lacks fallback for missing fields (reasoning_content / null type handling).

**Overall Satisfaction Trend:**
- The user base is **technically strong** (providing complete reproduction steps, self‑diagnosed logs, even PR fixes).
- The **migration experience is the primary friction point**; as the major version upgrade and plugin ecosystem expand, stability must be prioritized moving forward.

---

## 8. Backlog Watch

**Long‑cycle Issues/PRs that require attention:**

| # | Item | Open Days | Risk |
|---|------|-----------|------|
| 1 | [#4865](https://github.com/agentscope-ai/QwenPaw/issues/4865) — Streaming rendering for file generation | 26 days | Core UX debt |
| 2 | [#5328](https://github.com/agentscope-ai/QwenPaw/issues/5328) — DeepSeek agent gets stuck during thinking | 8 days | Could involve provider‑side issues |
| 3 | [#5520](https://github.com/agentscope-ai/QwenPaw/issues/5520) — Chrome memory leak | 2 days; fix PR pending review | Affects long‑running scenarios |
| 4 | [#5555](https://github.com/agentscope-ai/QwenPaw/issues/5555) — Newest version runs increasingly laggy; **zero replies** | 1 day | Possibly related to v1.1.12.post2 |
| 5 | [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) — scroll context manager | 8 days; still under review | Core architecture change; requires careful evaluation |

**Recommended next steps for the team:**
1. Respond to [#5555](https://github.com/agentscope-ai/QwenPaw/issues/5555) lag reports to prevent negative word‑of‑mouth spread.
2. Merge pending stability PRs, [PR #5570](https://github.com/agentscope-ai/QwenPaw/pull/5570) (SSH fork bomb), and [PR #5536](https://github.com/agentscope-ai/QwenPaw/pull/5536) (Chrome leak), to address two high‑severity bugs in one sprint.
3. Design Skill state persistence as a formal feature based on [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) (12 comments indicate strong demand).

---

*Generated on 2026-06-27 based on GitHub community activity snapshot. All links verified against the latest live state at time of generation.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-27

## 1. Today's Overview

ZeroClaw is experiencing a period of intense, broad-spectrum development activity. With 50 issues and 50 PRs updated in the last 24 hours, the project is operating at high velocity across multiple fronts: supply-chain security hardening, ACP (Agent Communication Protocol) maturation, WebAssembly plugin runtime evolution, multi-channel UX polish, and cost-tracking improvements. v0.8.2 shipped today, adding A2A agent discovery, user-configured skill registries, and typed slash-command options. The sheer breadth of work across RFCs, runtime fixes, channel integrations, and installation packaging (Nix, Scoop, Docker) signals a project transitioning from core capability-building toward hardening, interoperability, and operator-experience refinement. Maintainer review bandwidth is a visible bottleneck — 11 open PRs carry the `needs-maintainer-review` label.

## 2. Releases

### v0.8.2

**New capabilities:**
- **A2A agent discovery** — Agent-to-agent interop, enabling ZeroClaw instances to find and communicate with other A2A-compliant agents
- **Richer skills story** — User-configured extra skill registries and typed slash-command options for more expressive extensibility

**Improvements:**
- Security posture sharpened across plugins, channels, and supply-chain surfaces

**No breaking changes or migration notes identified in this release.**

## 3. Project Progress

### Merged/Closed PRs (recent activity based on available closed items)

| PR | Description |
|---|---|
| [#8146](https://github.com/zeroclaw-labs/zeroclaw/pull/8146) | **fix(observability):** CLI one-shot runs no longer lose telemetry and token totals on exit — OTLP exporter flush lifecycle fixed |
| [#8158](https://github.com/zeroclaw-labs/zeroclaw/pull/8158) | **ci(workflows):** CycloneDX SBOM generation for Rust crates and npm packages — implements RFC [#7675](https://github.com/zeroclaw-labs/zeroclaw/issues/7675) Phase 2, Job 4 |
| [#8299](https://github.com/zeroclaw-labs/zeroclaw/pull/8299) | **test(channels):** Regression test for allowlist wildcard matcher short-circuit |
| [#8300](https://github.com/zeroclaw-labs/zeroclaw/pull/8300) | **test(discord):** Regression test for custom ID kind separator escaping |

**Key advancement:** SBOM generation is now in CI, marking concrete supply-chain transparency progress. The CLI telemetry fix addresses a real observability gap for one-shot ACP sessions.

## 4. Community Hot Topics

### RFCs driving architectural decisions

| # | Title | Comments | Signal |
|---|---|---|---|
| [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) | Supply chain signing — hardware PGP, hermetic builds, SLSA provenance | 9 | Strong demand for enterprise-grade software integrity guarantees; mirrors industry SLSA mandates |
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, and Label Cleanup | 11 (most commented) | Maintainer tooling/process scalability concern — the project's own governance is under strain from growth |
| [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) | Wasm-first plugin runtime — default-on, capability enforcement, signed distribution | 2 | Community pushing for a secure, sandboxed plugin ecosystem |
| [#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170) | In-app upgrade with supervised restart from web dashboard | 3 | Operator UX pain point — updating requires leaving the dashboard |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | Goal mode for bounded autonomous session work | 1, 👍1 | Requests for autopilot-style execution where the agent pursues an objective to completion within bounds |

### Active PRs generating interest

- [#7440](https://github.com/zeroclaw-labs/zeroclaw/pull/7440) — fix(runtime): surface remediation when system-prompt floor exceeds context budget (rebased, multi-iteration fix for issue [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808))
- [#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) — feat(rfc-6969): per-turn output routing via send_via + voice delivery fixes across 8 channels
- [#8033](https://github.com/zeroclaw-labs/zeroclaw/pull/8033) — feat(onboard): two-path onboard tree wired end to end (LLM + deterministic)

**Underlying needs analysis:** The community is signaling demand for (a) enterprise readiness (SBOMs, SLSA, hardware signing), (b) autonomous agent capabilities (goal mode, A2A interop), (c) operational simplicity (in-app upgrades, cost tracking, Nix packaging), and (d) plugin safety (Wasm-first, capability-gated WASI). The RFC process is actively used and respected — 4 RFCs are accepted and in-progress.

## 5. Bugs & Stability

### Active bugs by severity

| Severity | # | Title | Fix PR |
|---|---|---|---|
| **S2** | [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) | `mcp_bundles` parsed but never enforced at runtime — per-agent MCP scoping is a silent no-op | [#8370](https://github.com/zeroclaw-labs/zeroclaw/pull/8370) (regression test landed; production fix prior) |
| **S1** | [#5866](https://github.com/zeroclaw-labs/zeroclaw/issues/5866) | Telegram bot ignores replies when `mention_only=true` (closed today — resolved? ) | Closed 2026-06-26 |
| **S2** | [#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) | Code help/keybindings misleading or unreachable, especially on macOS | None open |
| **S2** | [#8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312) | `fill-translations` leak-repair leaves stale entries that re-ship leaked text | None |
| **S2** | [#8366](https://github.com/zeroclaw-labs/zeroclaw/issues/8366) | Heartbeat engine reads HEARTBEAT.md from `data_dir` instead of agent workspace | None |
| **S3** | [#8275](https://github.com/zeroclaw-labs/zeroclaw/issues/8275) | Scoop manifest does not register `zerocode` shim | None |

**Stability assessment:** The MCP scoping silent-no-op ([#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733)) is the most concerning active bug — it's a security-relevant isolation gap where configuration is accepted but not enforced. A regression test PR ([#8370](https://github.com/zeroclaw-labs/zeroclaw/pull/8370)) is open. The Telegram S1 bug was closed today, suggesting resolution. Two new S2 bugs ([#8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312), [#8366](https://github.com/zeroclaw-labs/zeroclaw/issues/8366)) appeared in the last 48 hours without fix PRs.

## 6. Feature Requests & Roadmap Signals

### Likely candidates for v0.8.3 (based on tracker [#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071))

| Feature | Issue | Status |
|---|---|---|
| Independent delegate mode for specialist handoffs | [#8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238) | In-progress |
| Per-agent custom environment variables | [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) | In-progress |
| OpenRouter model fallbacks array | [#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138) | Needs maintainer review |
| Session TTL auto-truncation for channels | [#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134) | In-progress |
| DingTalk streaming messages | [#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228) | Accepted |
| Discord mention-triggered thread mode | [#7849](https://github.com/zeroclaw-labs/zeroclaw/issues/7849) | Accepted |
| Configurable native runtime shell | [#8311](https://github.com/zeroclaw-labs/zeroclaw/pull/8311) | PR open |
| Herdr agent reporting integration | [#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337) | PR open |
| ACP elicitation Phase 1 (multiple-choice) | [#8338](https://github.com/zeroclaw-labs/zeroclaw/pull/8338) | PR open |

### Longer-horizon signals

- **Goal mode** ([#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)) — RFC accepted; would be a major differentiator for autonomous workflows
- **Wasm-first plugin runtime** ([#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135)) — blocked, needs maintainer review; architectural shift
- **Rust→Wasm web UI** ([#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)) — would eliminate Node.js from build pipeline
- **ACP bridge auto-pairing** ([#6754](https://github.com/zeroclaw-labs/zeroclaw/issues/6754)) — accepted since May, still open

## 7. User Feedback Summary

### Pain points

1. **Security config silently ignored** — `mcp_bundles` parsing without enforcement ([#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733)) creates a false sense of isolation. Users configure per-agent scoping expecting security boundaries that don't exist at runtime.
2. **Update friction** — Must leave the web dashboard to check/apply updates ([#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170)). Operators want in-app supervised restarts.
3. **Cost tracking gaps** — Unpriced models silently recorded at `cost_usd = 0.0`, breaking budget enforcement ([#8233](https://github.com/zeroclaw-labs/zeroclaw/pull/8233) addresses this).
4. **Channel UX inconsistencies** — Telegram reply-ignoring behavior, Discord thread sprawl, DingTalk latency, and voice double-send bugs across 8 channels suggest the multi-channel surface area is outpacing QA coverage.
5. **Packaging gaps** — Scoop manifest missing `zerocode` shim ([#8275](https://github.com/zeroclaw-labs/zeroclaw/issues/8275)), Nix builds failing due to missing hashes ([#8336](https://github.com/zeroclaw-labs/zeroclaw/pull/8336)).

### Satisfaction signals

- A2A agent discovery in v0.8.2 directly addresses interop demand
- SBOM generation landing in CI ([#8158](https://github.com/zeroclaw-labs/zeroclaw/pull/8158)) responds to enterprise supply-chain requirements
- The RFC process is functioning well — community members are writing detailed, well-structured proposals and maintainers are engaging with them (multiple RFCs accepted with "in-progress" status)

## 8. Backlog Watch

### Items needing maintainer attention

| Age | Item | Risk | Why it matters |
|---|---|---|---|
| ~40 days | [#6754](https://github.com/zeroclaw-labs/zeroclaw/issues/6754) — ACP bridge auto-pairing depends on one-time-use code | High | Security/pairing UX; accepted but no PR visible |
| ~38 days | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — Work Lanes RFC (most commented issue, 11 comments) | Medium | Project governance at scale; accepted but rollout unclear |
| ~12 days | [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) — MCP bundles silent no-op | **High** | Security isolation regression; test PR open but needs production enforcement verification |
| ~10 days | [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) — Wasm-first plugin runtime RFC | High | Architectural direction; blocked, no assignee visible |
| ~5 days | [#8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) — SkillForge orphaned, needs wiring or removal | Medium | Dead code in production; decision needed |
| ~5 days | [#8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312) — Translation leak-repair leaves stale entries | Medium | Data-loss path; narrow trigger but silent |
| New | [#8366](https://github.com/zeroclaw-labs/zeroclaw/issues/8366) — Heartbeat reads wrong directory | Medium | Misaligned config paths; likely easy fix |

### PRs with `needs-maintainer-review` label (potential bottlenecks)

- [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) — Supply chain signing RFC
- [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) — Wasm-first plugin runtime RFC
- [#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138) — OpenRouter fallbacks
- [#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134) — Session TTL truncation
- [#8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) — SkillForge decision

**Bottom line:** ZeroClaw is in a high-growth phase with strong community engagement and a healthy RFC process. The primary risk is maintainer bandwidth — 11 PRs need maintainer review, several security-relevant issues are aging without resolution, and the project's own governance scaling is being formalized through the Work Lanes RFC. The v0.8.3 tracker is well-populated, and the supply-chain security pipeline (SBOM → signing → SLSA) is progressing systematically.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*