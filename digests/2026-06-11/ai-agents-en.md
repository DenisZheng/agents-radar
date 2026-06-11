# OpenClaw Ecosystem Digest 2026-06-11

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-11 00:42 UTC

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

# OpenClaw Project Digest — 2026-06-11

---

## 1. Today's Overview

OpenClaw is operating at exceptionally high throughput: **500 issues** and **500 PRs** updated in the last 24 hours, with 465 open issues and 400 open PRs indicating a massive backlog that far outpaces the maintainer team's capacity to triage. A new beta release (**v2026.6.6-beta.1**) shipped today with a heavy emphasis on security hardening across transcripts, sandboxing, MCP stdio, Codex HTTP access, and several other boundary surfaces. The project is clearly in a stabilization and security-tightening phase, but the volume of open issues — many tagged `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` — suggests significant triage debt. Community engagement is intense, with several issues accumulating double-digit comments and reactions, particularly around session state management, message delivery correctness, and security boundaries.

---

## 2. Releases

### v2026.6.6-beta.1 — 2026.6.6

**Highlights — Security Boundaries Substantially Tightened:**

This release focuses on hardening security across a wide surface area:
- **Transcript security** — tighter controls on what gets persisted
- **Sandbox bind restrictions** — reduced escape surface
- **Host environment inheritance** — limited leakage into agent processes
- **MCP stdio hardening** — stricter controls on MCP server communication
- **Codex HTTP access** — restricted network boundaries for Codex tool calls
- **Native search policy** — tightened what the agent can search/access
- **Elevated sender checks** — stronger authentication on privileged message sources
- **Deleted-agent ACP bypass prevention** — closing a vector where removed agents could still invoke ACP tools
- **Loopback tool restrictions** — preventing abuse of localhost-facing tools
- **Discord moderation** — improved moderation controls
- **Teams group access controls** — tighter group-level permissions

**Assessment:** This is a security-focused beta release with broad-reaching changes. Operators should review sandbox and MCP configurations before upgrading, as several defaults have tightened. No explicit breaking changes or migration notes were published in the release notes, but the scope of changes warrants careful staging-environment testing.

---

## 3. Project Progress

### Merged/Closed PRs (Today)

| PR | Description | Area |
|---|---|---|
| [#92059](https://github.com/openclaw/openclaw/pull/92059) | fix(agents): treat NO_REPLY-only assistant replies as empty | Agents |
| [#92056](https://github.com/openclaw/openclaw/pull/92056) | fix(exec): honor state dir approvals (OPENCLAW_STATE_DIR) | Exec / Security |
| [#91305](https://github.com/openclaw/openclaw/pull/91305) | fix(control-ui): make bootstrap config endpoint base-path-relative | Control UI |
| [#91720](https://github.com/openclaw/openclaw/pull/91720) | fix(openai): remove chatgpt-responses transport override from gpt-5.3-codex | Models |
| [#91292](https://github.com/openclaw/openclaw/pull/91292) | fix(models): keep bundled provider catalog when base URL is blank | Models |
| [#91711](https://github.com/openclaw/openclaw/pull/91711) | fix(agents): classify harness provider mismatch as format error | Agents |
| [#91471](https://github.com/openclaw/openclaw/pull/91471) | feat(cron): add readable ISO time fields to `cron runs` JSON output | Cron |
| [#92027](https://github.com/openclaw/openclaw/pull/92027) | fix(gateway): recover config hot-reload after watcher errors | Gateway |
| [#91351](https://github.com/openclaw/openclaw/pull/91351) | fix(opencode-go): add qwen3.7-plus tiered pricing | Models |
| [#64473](https://github.com/openclaw/openclaw/pull/64473) | fix: allow symlinks within ~/.openclaw in boundary path checks | Security |
| [#74002](https://github.com/openclaw/openclaw/pull/74002) | fix(exec): respect OPENCLAW_STATE_DIR for exec approvals | Exec / Security |

**Key Themes:**
- **Exec/state-dir security** — Two PRs (#92056, #74002) converged on properly respecting `OPENCLAW_STATE_DIR` for exec approvals, closing a gap where custom state directories were not honored.
- **Model catalog correctness** — Three PRs addressed model resolution bugs (bundled catalog fallback, transport override removal, provider mismatch classification), improving reliability for non-standard provider configurations.
- **Control UI fix** — The duplicated base-path segment (#91305) was a visible regression preventing the UI from bootstrapping at the default entry point.
- **Gateway resilience** — Config hot-reload now recovers from watcher errors with bounded backoff instead of permanently disabling.

### Notable Open PRs Awaiting Review

| PR | Description | Status |
|---|---|---|
| [#91897](https://github.com/openclaw/openclaw/pull/91897) | fix(memory): self-heal missing index identity | Needs proof |
| [#92035](https://github.com/openclaw/openclaw/pull/92035) | feat(memory): apply temporal decay to QMD search results | Needs proof |
| [#91296](https://github.com/openclaw/openclaw/pull/91296) | fix: hand off supervised git updates | Needs proof |
| [#91586](https://github.com/openclaw/openclaw/pull/91586) | fix(update): continue after package doctor warnings | Ready for maintainer look |
| [#90173](https://github.com/openclaw/openclaw/pull/90173) | fix(agents): stabilize a2a prompt cache context | Ready for maintainer look |
| [#90912](https://github.com/openclaw/openclaw/pull/90912) | fix(agents): honor configured CLI resume timeouts | Ready for maintainer look |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **[#25592](https://github.com/openclaw/openclaw/issues/25592)** — *Text between tool calls leaks to messaging channels* (31 comments, 👍1)
   - **P1, Security + Message Loss, Diamond Lobster**
   - Internal agent narration/error text between tool calls is routed to Slack, iMessage, etc. as visible messages. This is both a UX problem and a potential information disclosure issue. Tagged `clawsweeper:linked-pr-open` — a fix PR exists but hasn't merged.

2. **[#88838](https://github.com/openclaw/openclaw/issues/88838)** — *Track core session/transcript SQLite migration via accessor seam* (19 comments, 👍1)
   - **P0, Session State + Message Loss, Diamond Lobster**
   - A maintainer-tracked issue proposing to break the large, risky session/transcript SQLite migration into small, reviewable PRs using branch-by-abstraction. This is a meta-engineering issue about how to safely execute a major architectural migration.

3. **[#32473](https://github.com/openclaw/openclaw/issues/32473)** — *Control UI requires device identity (HTTPS or localhost)* (17 comments, 👍4)
   - **P2, Security + Auth, Diamond Lobster, Regression**
   - Users on VPS/Docker setups cannot access the Control UI because device identity APIs require a secure context. This is a regression that blocks remote deployment workflows.

4. **[#22438](https://github.com/openclaw/openclaw/issues/22438)** — *Tiered bootstrap file loading for progressive context control* (17 comments)
   - **P2, Session State, Diamond Lobster**
   - Users with large workspaces waste context window budget loading all bootstrap files into every session, including sub-agents and cron jobs that never reference them.

5. **[#22676](https://github.com/openclaw/openclaw/issues/22676)** — *Signal daemon stop() race condition on SIGUSR1 restart* (17 comments)
   - **P1, Message Loss + Crash Loop, Diamond Lobster**
   - During gateway restarts, the signal daemon doesn't wait for the old process to exit before spawning a new one, causing orphaned processes and send failures.

### Underlying Needs Analysis

The dominant themes in the most-discussed issues reveal **three systemic pain points**:

- **Message delivery correctness** — Multiple top issues (#25592, #32296, #39476, #43015, #83184) involve the agent sending messages to the wrong place, at the wrong time, or with wrong content. This suggests the message routing and session-boundary logic needs architectural attention.
- **Session state management** — The SQLite migration (#88838), bootstrap file loading (#22438), and multiple session-context confusion bugs (#32296, #43367, #85030) all point to session lifecycle management as the project's most complex and error-prone subsystem.
- **Security boundary enforcement** — Tool call text leaking (#25592), masked secrets (#10659), exec env inheritance (#31583), and private network access (#39604) all reflect users wanting finer-grained, enforceable security policies rather than prompt-based soft constraints.

---

## 5. Bugs & Stability

### Critical / P0 Bugs

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | P0 | Session/transcript SQLite migration tracking — high-risk architectural change needs incremental approach | No (meta-issue) |

### High-Priority / P1 Bugs

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | P1, Security | Text between tool calls leaks to messaging channels | Linked PR open |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | P1, Crash Loop | Signal daemon race condition — orphaned processes on restart | No |
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | P1, Session State | Agent replies to previous message instead of current (context confusion) | No |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | P1, Security | Bootstrap files in agentDir silently ignored | No |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | P1, Security, Regression | exec tool doesn't inherit skills.entries.*.env variables | Linked PR open |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | P1, Data Loss | Write tool lacks append mode — cron sessions destroy shared files | Linked PR open |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | P1, Security | MCP tools not injected into subagent sessions | No |
| [#83184](https://github.com/openclaw/openclaw/issues/83184) | P1, Message Loss | Heartbeat replies leave pendingFinalDelivery stuck, blocking subsequent heartbeats | Linked PR open |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | P1, Message Loss | A2A sessions_send causes duplicate messages via callback | Linked PR open |
| [#43015](https://github.com/openclaw/openclaw/issues/43015) | P1, Message Loss | message.send schema overexposes poll/components, causing GPT breakage | No |
| [#86508](https://github.com/openclaw/openclaw/issues/86508) | P1, Regression | EmbeddedAttemptSessionTakeoverError during Discord runs | No |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) | P1, Security | Sandbox workspaceAccess none makes workspaces read-only (👍6) | No |
| [#31331](https://github.com/openclaw/openclaw/issues/31331) | P1, Security | Docker + Sandbox can't workspaceAccess — bind mount fails | No |
| [#40540](https://github.com/openclaw/openclaw/issues/40540) | P1, Behavior | `openclaw update` fails with EBUSY on Windows | No |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | P1, Regression, Crash | "Cannot convert undefined or null to object" with google-vertex/gemini-3.1-pro-preview | No |

### Regressions (Confirmed)

- [#32473](https://github.com/openclaw/openclaw/issues/32473) — Control UI device identity requirement breaks VPS/Docker setups
- [#31583](https://github.com/openclaw/openclaw/issues/31583) — exec tool env inheritance regression
- [#38439](https://github.com/openclaw/openclaw/issues/38439) — Avatar endpoint returns 404
- [#41201](https://github.com/openclaw/openclaw/issues/41201) — Control UI avatar not displaying
- [#86508](https://github.com/openclaw/openclaw/issues/86508) — Discord session takeover error
- [#38327](https://github.com/openclaw/openclaw/issues/38327) — google-vertex model crash

**Stability Assessment:** The project has a significant number of P1 bugs in the open state, many without linked fix PRs. The concentration of session-state and message-delivery bugs suggests these are the least stable subsystems. The regression count (6 confirmed) relative to the recent release cadence indicates the v2026.6.x cycle may have introduced more instability than usual, though today's beta release appears to address some security concerns.

---

## 6. Feature Requests & Roadmap Signals

### Most-Requested Features (by community engagement)

| Issue | 👍 | Description | Likelihood of Near-Term Implementation |
|---|---|---|---|
| [#18160](https://github.com/openclaw/openclaw/issues/18160) | 👍10 | Direct Exec Mode for cron jobs (skip LLM for simple commands) | **High** — clear pain point, well-defined scope |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | 👍9 | tools.web.fetch.allowPrivateNetwork opt-in | **Medium** — security-sensitive, needs careful design |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | 👍6 | MathJax/LaTeX support in Control UI | **Low** — nice-to-have, limited to UI |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) | 👍6 | Sandbox workspaceAccess none → writable workspaces | **Medium** — overlaps with security hardening in v2026.6.6 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | 👍4 | Masked secrets — agent can use but not see API keys | **Medium** — aligns with security focus of current release |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 👍1 | Per-agent cost budget enforcement at gateway | **Medium** — infrastructure exists (session-cost-usage.ts) |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 👍0 | Tiered bootstrap file loading | **Medium** — 17 comments show sustained interest |
| [#43260](https://github.com/openclaw/openclaw/issues/43260) | 👍0 | Per-skill model routing via SKILL.md frontmatter | **Low** — architectural change to model selection |
| [#35203](https://github.com/openclaw/openclaw/issues/35203) | 👍0 | Multi-agent collaboration: capability profiling + shared blackboard | **Low** — large RFC, no maintainer pickup |
| [#13616](https://github.com/openclaw/openclaw/issues/13616) | 👍0 | Backup/restore utility for config, cron, sessions | **Low** — no maintainer engagement |

### Predicted Next Version Focus

Given the v2026.6.6-beta.1 security focus and the open PR queue, the next stable release will likely include:
1. **Exec approval state-dir fixes** (#92056 already merged to main)
2. **Model catalog reliability** (bundled catalog fallback, transport fixes — #91292, #91711 merged)
3. **Memory search improvements** (temporal decay for QMD — #92035 pending)
4. **Cron direct exec mode** (#18160 has the highest 👍 count and addresses a clear reliability gap)
5. **Masked secrets** (#10659) — aligns with the security hardening trajectory

---

## 7. User Feedback Summary

### Pain Points

1. **"The agent talks to my users when it shouldn't"** — The most commented issue (#25592) and several related bugs (#32296, #39476, #43015) reflect a fundamental trust problem: users cannot reliably control what the agent sends to messaging channels. Internal processing text leaking to Slack/iMessage is both embarrassing and potentially dangerous.

2. **"Cron jobs are unreliable"** — Multiple issues (#18160, #40001, #41165, #11665) describe cron jobs that overwrite files, route to wrong sessions, or fail silently. Users want cron jobs to be simple, reliable, and not require LLM interpretation for basic commands.

3. **"Security is all soft prompts"** — Issues #10659 (masked secrets), #13583 (pre-response enforcement hooks), #31583 (exec env), and #39604 (private network access) all express the same underlying frustration: security rules are currently enforced through system prompts that the agent can ignore or bypass. Users want mechanical enforcement.

4. **"Multi-agent is broken in practice"** — Issue #43367 describes concurrent agent config overwrites, session-lock failures, and detached child work. The multi-agent orchestration features exist on paper but are unreliable for real workloads.

5. **"Docker/VPS setup is second-class"** — Issues #32473, #31331, and #37634 all describe Docker or remote deployment scenarios that don't work correctly. The project's security model appears designed around localhost/trusted-machine assumptions.

### Satisfaction Signals

- The **Control UI** is clearly a valued surface — multiple issues (#42840, #41201, #91305) show users actively engaging with it and requesting improvements.
- **Cost tracking** infrastructure exists and is appreciated — the request for per-agent budgets (#42475) builds on existing session-cost-usage tracking.
- The **memory system** is a key differentiator — users are actively requesting improvements (#90354, #40418, #22358) rather than abandoning it.

### Dissatisfaction Signals

- **Stale issue accumulation** — Many high-priority issues have been open for months with `stale` tags and `clawsweeper:no-new-fix-pr` labels, suggesting the community has given up expecting fixes.
- **Regression frequency** — 6 confirmed regressions in the current release cycle erodes trust in upgrades.
- **Maintainer bandwidth** — The `clawsweeper:needs-maintainer-review` tag appears on nearly every top issue, indicating a bottleneck.

---

## 8. Backlog Watch

### Critical Issues Without Maintainer Response

| Issue | Age | Description | Risk |
|---|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 106 days | Text between tool calls leaks to channels (P1, Security) | Security + UX |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | 109 days | Signal daemon race condition (P1, Crash Loop) | Reliability |
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | 99 days | Agent replies to wrong message (P1, Session State) | Core correctness |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | 102 days | agentDir bootstrap files silently ignored (P1, Security) | Security |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | 99 days | exec tool env inheritance regression (P1, Security) | Security |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | 93 days | Write tool append mode — data loss in cron (P1, Data Loss) | Data loss |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | 20 days | MCP tools not in subagents (P1, Security) | Security |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) | 95 days | Sandbox workspace read-only (P1, Security, 👍6) | Usability |
| [#31331](https://github.com/openclaw/openclaw/issues/31331) | 99 days | Docker sandbox workspace bind fails (P1, Security) | Deployment |
| [#10659](https://github.com/openclaw/openclaw/issues/2026-02-06) | 124 days | Masked secrets feature request (Security, 👍4) | Security |

### Stale but Important PRs Needing Review

| PR | Age | Description | Why It Matters |
|---|---|---|---|
| [#86360](https://github.com/openclaw/openclaw/pull/86360) | 16 days | fix(codex): honor bound agent exec host policy | Security boundary fix |
| [#90747](https://github.com/openclaw/openclaw/pull/90747) | 6 days | fix(plugins): cache plugin setup registry to kill /models CPU storm | Performance |
| [#90167](https://github.com/openclaw/openclaw/pull/90167) | 7 days | fix(plugins): resolve config env vars for runtime loads | Plugin reliability |
| [#91311](https://github.com/openclaw/openclaw/pull/91311) | 3 days | Allow Skill Workshop apply through trusted skill symlinks | Security + UX |
| [#91296](https://github.com/openclaw/openclaw/pull/91296) | 3 days | fix: hand off supervised git updates | Update reliability |

### Recommendations for Maintainers

1. **Triage the message delivery cluster** — Issues #25592, #32296, #39476, #43015, and #83184 are all symptoms of the same underlying problem: the boundary between "internal agent processing" and "outbound message" is not well-enforced. A focused architectural review of the message routing pipeline would address multiple top issues simultaneously.

2. **Address the Docker/VPS deployment gap** — Three P1 issues (#32473, #31331, #37634) affect users running OpenClaw in containers or on remote servers. As the project matures, this deployment model needs first-class support.

3. **Break the stale issue deadlock** — 10+ P1 issues have been open for 90+ days. Even if fixes aren't ready, maintainer acknowledgment and prioritization signals would help community morale. The `clawsweeper:needs-product-decision` tag on many of these suggests product-level decisions are blocking progress.

---

*Data source: OpenClaw GitHub (github.com/openclaw/openclaw), snapshot 2026-06-11. Issue/PR counts reflect 2026-06-10 to 2026-06-11 window.*

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report — 2026-06-11

*Generated by OWL, ZOO Company*

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape in mid-2026 is characterized by rapid fragmentation and specialization, with at least 14 identifiable projects competing across a spectrum from lightweight wrappers to full-stack agent operating systems. The dominant architectural pattern is a gateway-based design that connects LLM providers to messaging channels (Telegram, Slack, Discord, Feishu, WhatsApp), with MCP (Model Context Protocol) emerging as the universal tool-integration layer. Security hardening is the defining theme of this release cycle — nearly every active project shipped or is working on sandbox tightening, credential isolation, and SSRF protection. The ecosystem is bifurcating into "platform" projects (OpenClaw, ZeroClaw, IronClaw/Reborn) that aim to be general-purpose agent runtimes, and "product" projects (LobsterAI, CoPaw) that deliver polished desktop/mobile experiences on top of agent backends. Community engagement is intense but maintainer bandwidth is the universal bottleneck.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Open Issues | Open PRs | Release Today | Health Score |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 465 | 400 | v2026.6.6-beta.1 | 🟡 Moderate — massive backlog, security focus |
| **NanoBot** | 10 | 33 | — | 14 | None (v0.2.1 latest) | 🟢 Good — fast triage, responsive |
| **Hermes Agent** | 50 | 50 | — | — | None (v0.16.0 latest) | 🟡 Moderate — post-release regression triage |
| **PicoClaw** | 5 | 14 | 4 | 8 | Nightly v0.2.9 | 🟢 Good — small, responsive |
| **NanoClaw** | 1 | 10 | — | 4 | None | 🟢 Good — fast merge cadence |
| **NullClaw** | 0 | 6 | — | 4 | None | 🟢 Stable — quiet, no open issues |
| **IronClaw** | 50 | 50 | 34 | 28 | None (crates.io stuck at 0.24.0) | 🟡 Moderate — Reborn rewrite in progress |
| **LobsterAI** | 0 | 20 | 0 | 2 | v2026.6.10 | 🟢 Excellent — zero open issues |
| **Moltis** | 1 | 0 | 1 | 0 | None | 🔴 Low activity — quiet period |
| **CoPaw** | 37 | 50 | — | 20 | v1.1.11 + v1.1.11-beta.3 | 🟢 Good — weekly cadence, high throughput |
| **ZeroClaw** | 41 | 50 | — | — | None (v0.8.x pending) | 🟢 Good — high closure rate |
| **TinyClaw** | 0 | 0 | — | — | None | 🔴 No activity |
| **ZeptoClaw** | 0 | 0 | — | — | None | 🔴 No activity |

*Note: "Issues/PRs (24h)" = updated in the last 24 hours. Health score reflects backlog severity, release cadence, and maintainer responsiveness.*

---

## 3. OpenClaw's Position

### Advantages vs Peers

- **Largest community by volume**: 500 issues and 500 PRs in 24 hours is unmatched — roughly 10× the activity of the next most active project (CoPaw at 37/50). This signals the largest user and contributor base in the ecosystem.
- **Most comprehensive security hardening**: The v2026.6.6-beta.1 release covers more security surface area (transcripts, sandboxing, MCP stdio, Codex HTTP, host env inheritance, loopback restrictions, elevated sender checks, deleted-agent ACP bypass) than any peer release today.
- **Broadest channel and provider support**: OpenClaw supports the widest range of messaging channels (Slack, Discord, iMessage, Telegram, Teams) and LLM providers among all projects.
- **Control UI as a differentiator**: The web-based Control UI is a unique asset — most peers rely on CLI/TUI-only or third-party frontends.

### Technical Approach Differences

| Dimension | OpenClaw | Peers |
|---|---|---|
| **Architecture** | Monolithic gateway with plugin system | ZeroClaw/IronClaw use more modular daemon registries; NanoClaw uses container-per-agent isolation |
| **Session management** | SQLite-based (in migration) | NanoBot uses JSONL; ZeroClaw uses typed daemon registry; Hermes uses Honcho plugin |
| **Sandbox model** | Configurable sandbox with bind restrictions | PicoClaw uses bwrap; NanoClaw uses per-container IPC namespaces; CoPaw uses conda-pack |
| **Multi-agent** | A2A sessions with callback routing | ZeroClaw has SubAgent/ACP with cwd inheritance; NanoClaw has agent collaboration bus (stale PR); Hermes has subagent model presets |
| **Security enforcement** | Mixed: mechanical + prompt-based | NanoClaw is furthest along with mechanical guardrails (IPC namespaces, per-group isolation); OpenClaw is catching up with v2026.6.6 |

### Community Size Comparison

OpenClaw's 465 open issues and 400 open PRs dwarf all peers. For context:
- OpenClaw's open issue count ≈ **all other active projects combined** × 3–5×
- However, the triage debt is proportionally larger — the `clawsweeper:needs-maintainer-review` bottleneck means community goodwill is at risk despite the project's dominance
- CoPaw and ZeroClaw are the only projects with comparable per-capita engagement (high close-to-open ratios)

---

## 4. Shared Technical Focus Areas

The following requirements are emerging simultaneously across multiple projects, indicating ecosystem-wide convergence:

### 4.1 MCP Usability & Reliability
**Projects**: OpenClaw, ZeroClaw, CoPaw, Hermes Agent
- ZeroClaw has 4 active PRs on MCP (default-enable, eager loading, policy parity, auto-reconnect)
- OpenClaw hardened MCP stdio in v2026.6.6-beta.1
- CoPaw's Agent OS Driver PR (#5067) unifies MCP/A2A/ACP under one abstraction
- **Core need**: MCP is the de facto tool integration standard, but the UX is still fragile — silent hangs, policy gaps, and dropped streams are universal complaints

### 4.2 Security Boundary Hardening
**Projects**: OpenClaw, PicoClaw, NanoClaw, Hermes Agent, ZeroClaw
- SSRF protection (PicoClaw #3085, OpenClaw native search policy)
- Credential isolation (NanoClaw IPC namespaces #3, Hermes credential redaction #42846, OpenClaw masked secrets request)
- Sandbox escape prevention (OpenClaw bind restrictions, PicoClaw bwrap $HOME fix, CoPaw aiohttp pinning)
- **Core need**: Moving from prompt-based soft security to mechanical enforcement — users no longer trust system prompts to constrain agent behavior

### 4.3 Session State & Context Management
**Projects**: OpenClaw, NanoBot, Hermes Agent, CoPaw, ZeroClaw
- OpenClaw's SQLite migration (#88838) is the highest-risk architectural change in the ecosystem
- NanoBot fixed cross-session contamination (#4259) and stream-stall fallback (#4013)
- CoPaw's session pruning and context window management (#1499, #4433)
- ZeroClaw's lost user messages (#6034) is a P1 core reliability bug
- **Core need**: Session lifecycle management is the most complex and error-prone subsystem across all projects — no one has fully solved it

### 4.4 Multi-Agent Orchestration
**Projects**: OpenClaw, NanoClaw, ZeroClaw, Hermes Agent, CoPaw
- Subagent model routing (Hermes #4291, NanoClaw #1690)
- Subagent duplicate messages (PicoClaw #3094)
- Agent collaboration bus (NanoClaw #22937, stale)
- Subagent cwd inheritance (ZeroClaw #7263)
- **Core need**: Multi-agent workflows are a key differentiator but remain unreliable in practice — message routing, environment inheritance, and observability are the top gaps

### 4.5 Windows Platform Support
**Projects**: OpenClaw, PicoClaw, CoPaw, LobsterAI, Hermes Agent
- PicoClaw's os.Root path separator fix (#3089) after 2-month lag
- CoPaw's dedicated Windows build fixes (4 PRs in v1.1.11)
- LobsterAI's close-button behavior and NSIS installer fixes
- Hermes's Nix build and `hermes update` slowness on Windows
- **Core need**: Windows is consistently treated as a second-class platform — all projects have Windows-specific bugs with above-average resolution times

---

## 5. Differentiation Analysis

### Feature Focus Comparison

| Project | Primary Focus | Target User | Key Differentiator |
|---|---|---|---|
| **OpenClaw** | General-purpose agent OS | Power users, self-hosters | Broadest channel/provider support, Control UI |
| **NanoBot** | Lightweight agent framework | Developers, rapid prototyping | Fast iteration, clean architecture, low ceremony |
| **Hermes Agent** | Multi-channel personal assistant | Individuals, small teams | Desktop/TUI experience, Honcho memory integration |
| **PicoClaw** | Embedded/IoT agent runtime | Edge developers, Sipeed users | Small footprint, hardware-integrated |
| **NanoClaw** | Container-isolated multi-agent | Enterprise, multi-tenant | Per-agent containers, IPC security, guardrails |
| **NullClaw** | Minimalist agent runtime | Minimalists, embedded use | Small codebase, fast startup |
| **IronClaw/Reborn** | Workflow automation platform | Teams, enterprises | Triggered automations, Slack DM delivery, NEAR integration |
| **LobsterAI** | Desktop AI assistant product | End users, non-technical | Polished Electron app, backup/restore, task scheduling |
| **CoPaw** | Full-stack agent platform | Developers, enterprises | AgentScope integration, DataPaw analytics, multi-channel |
| **ZeroClaw** | Extensible agent runtime | Developers, tinkerers | WASM plugins, MCP-first, zerocode TUI |
| **Moltis** | Voice/conversational agent | — | Coqui TTS integration (currently quiet) |

### Technical Architecture Spectrum

```
Lightweight ◄──────────────────────────────────────────► Full-Stack

NullClaw → NanoBot → PicoClaw → Moltis → Hermes → ZeroClaw → CoPaw → OpenClaw → IronClaw/Reborn
                                                                     ↑
                                                              NanoClaw (container-isolated)
                                                                     ↑
                                                              LobsterAI (desktop product)
```

- **Left side** (NullClaw, NanoBot, PicoClaw): Minimal dependencies, fast startup, limited channel support, CLI-first
- **Middle** (Hermes, ZeroClaw, CoPaw): Balanced feature set, active development, multi-channel, moderate complexity
- **Right side** (OpenClaw, IronClaw): Maximum feature breadth, highest complexity, largest communities, greatest triage debt

---

## 6. Community Momentum & Maturity

### Tier 1: High Velocity, Active Development
- **OpenClaw**: 500/500 issues/PRs — dominant but drowning in backlog. Security hardening phase.
- **CoPaw**: 37/50 with weekly releases — best balance of velocity and stability in the ecosystem.
- **ZeroClaw**: 41/50 with 19 closures — strong throughput, approaching v0.8.0 stable.
- **NanoBot**: 10/33 with 19 merges — excellent triage speed, v0.2.2 patch assembling.

### Tier 2: Steady Iteration
- **Hermes Agent**: 50/50 — post-v0.16.0 regression triage, desktop/TUI polish phase.
- **IronClaw**: 50/50 — Reborn rewrite consuming all capacity, crates.io publishing gap is a critical blocker.
- **NanoClaw**: 1/10 — small but fast, skills ecosystem growing rapidly.
- **PicoClaw**: 5/14 — small team, responsive, nightly build cadence.

### Tier 3: Stable / Quiet
- **LobsterAI**: 0/20 with release shipped — mature product, zero open issues, batch cleanup complete.
- **NullClaw**: 0/6 — minimal activity, no open issues, small contributor base.
- **Moltis**: 1/0 — single minor issue, effectively dormant.

### Tier 4: Inactive
- **TinyClaw**, **ZeptoClaw**: No activity in 24 hours. Status unclear — may be pre-launch or abandoned.

### Maturity Assessment

| Project | Maturity Level | Evidence |
|---|---|---|
| LobsterAI | **Production-ready** | Zero open issues, non-destructive restore, session pruning |
| CoPaw | **Late beta** | Weekly releases, AgentScope 2.0 migration planned |
| NanoBot | **Early beta** | v0.2.x, regressions being resolved rapidly |
| OpenClaw | **Beta (high churn)** | Massive backlog, 6 regressions in current cycle |
| ZeroClaw | **Beta (pre-stable)** | v0.8.0 tracker active, MCP hardening in progress |
| Hermes Agent | **Beta** | v0.16.0, desktop polish phase |
| IronClaw | **Alpha (Reborn)** | Major rewrite, crates.io gap, local dev friction |
| NanoClaw | **Early alpha** | Fast iteration, small community |
| PicoClaw | **Alpha** | Nightly builds, Windows lag |

---

## 7. Trend Signals

### Trend 1: MCP Is the New Plugin System — But It's Not Ready for Prime Time
Every project with tool integration is converging on MCP, but the experience is universally painful. ZeroClaw alone has 4 active MCP PRs. OpenClaw hardened MCP stdio. CoPaw is building an abstraction layer over MCP/A2A/ACP. The signal: **MCP will win as the standard, but the current implementation quality is the #1 developer experience gap in the ecosystem.** Projects that invest in MCP reliability (auto-reconnect, policy parity, eager loading) will have a significant advantage.

### Trend 2: Security Is Shifting from Prompt-Based to Mechanical Enforcement
Users across OpenClaw (#10659 masked secrets), NanoClaw (#2726 guardrails), Hermes (#42846 credential redaction), and PicoClaw (#3085 SSRF) are demanding enforceable security policies. The era of "put it in the system prompt" is ending. **Projects that build mechanical security boundaries (sandboxing, credential isolation, network policies) will earn trust faster than those relying on LLM compliance.**

### Trend 3: The Session Management Crisis Is Universal
OpenClaw's SQLite migration, NanoBot's cross-session contamination, CoPaw's context window overflow, ZeroClaw's lost messages, and Hermes's Honcho memory pollution all point to the same unsolved problem: **no project has a fully reliable session lifecycle management system.** This is the highest-leverage technical investment any project can make — it affects message correctness, context fidelity, and multi-agent reliability simultaneously.

### Trend 4: Desktop/Product Experiences Are the Moat
LobsterAI (zero open issues), CoPaw (weekly releases with desktop fixes), and Hermes (TUI/Desktop focus) show that **polished end-user experiences create more satisfaction than feature breadth.** OpenClaw's 465 open issues vs. LobsterAI's 0 suggests that raw capability without UX polish generates more friction than value. The projects that will win end-user adoption are those that package agent capabilities into reliable, intuitive interfaces.

### Trend 5: Multi-Agent Workflows Are the Next Battleground
Subagent model routing (Hermes, NanoClaw), agent collaboration (NanoClaw #2937), parallel fan-out (ZeroClaw #7442), and A2A sessions (OpenClaw) all signal that **the industry is moving from single-agent to multi-agent architectures.** However, every project reports reliability issues — duplicate messages, environment inheritance failures, and observability gaps. The first project to deliver reliable, observable multi-agent orchestration will capture significant mindshare.

### Trend 6: Windows Support Is a Competitive Disadvantage for All
Every project with Windows users has above-average bug resolution times for Windows-specific issues. PicoClaw's path separator bug took 2 months. CoPaw needed 4 PRs for Windows build fixes. Hermes has Nix and update issues on Windows. **The ecosystem is effectively Linux-first, and any project that achieves reliable Windows parity will capture an underserved market segment.**

### Trend 7: Release Infrastructure Is an Underinvested Capability
IronClaw's crates.io gap (37 days, CVE exposure), OpenClaw's regression frequency, and NanoBot's v0.2.0→v0.2.2 patch cycle all show that **release engineering and CI/CD maturity lag behind feature development.** Projects with automated, reliable release pipelines (LobsterAI, CoPaw) have dramatically better user experiences.

---

*This report was generated by OWL using community digest data from 12 active projects across the personal AI agent open-source ecosystem. Data snapshot: 2026-06-11.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-11

---

## 1. Today's Overview

NanoBot is experiencing a period of intense development activity. In the last 24 hours, **33 pull requests** were updated (14 open, 19 merged/closed) and **10 issues** were updated (4 open, 6 closed), with no new releases. The project is clearly in a rapid iteration cycle following the v0.2.0 release, with the community and maintainers aggressively addressing regressions, stability gaps, and feature debt. The volume of merged PRs (19 in a single day) signals a healthy merge cadence and responsive maintainers. However, the high number of open issues and PRs also suggests the project is accumulating technical debt faster than it can fully resolve, particularly around context management, sandboxing, and multi-model fallback reliability.

---

## . Releases

**No new releases today.** The latest published version remains **v0.2.1** (referenced in issue #4287). The significant volume of merged PRs — particularly around fallback handling, context isolation, cron validation, and WebUI transcript storage — strongly suggests a **v0.2.2 patch release** is being assembled.

---

## 3. Project Progress

Nineteen PRs were merged or closed today. The most impactful changes:

### Stability & Bug Fixes
- **[PR #4272](https://github.com/HKUDS/nanobot/pull/4272)** — Stream-stalled LLM responses now trigger retry and fallback to alternate models instead of silently returning truncated output. This directly addresses [#4013](https://github.com/HKUDS/nanobot/issues/4013) (the "stream stalled for more than 90 seconds" regression in v0.2.0).
- **[PR #4274](https://github.com/HKUDS/nanobot/pull/4274)** — `history.jsonl` entries are now scoped by session, preventing cross-session context contamination. Fixes [#4259](https://github.com/HKUDS/nanobot/issues/4259).
- **[PR #4273](https://github.com/HKUDS/nanobot/pull/4273)** — Added `tools.exec.pathPrepend` config so custom tool directories take PATH precedence over the system Python, resolving [#3934](https://github.com/HKUDS/nanobot/issues/3934) where `pip install` inside exec was broken.
- **[PR #4275](https://github.com/HKUDS/nanobot/pull/4275)** — Config files that fail to parse, migrate, or validate now fail fast with a clear error instead of silently falling back to defaults.
- **[PR #4277](https://github.com/HKUDS/nanobot/pull/4277)** — Feishu channel now lazy-loads the heavy `lark_oapi` SDK at startup rather than at import time, reducing gateway startup overhead.

### WebUI Improvements
- **[PR #4278](https://github.com/HKUDS/nanobot/pull/4278)** — Transcript storage is now segmented (rotating immutable segment files), preventing large chats from becoming unopenable.
- **[PR #4247](https://github.com/HKUDS/nanobot/pull/4247)** — Auto-compacts transcripts when they exceed the 8 MB hard limit instead of silently dropping chat history.
- **[PR #4255](https://github.com/HKUDS/nanobot/pull/4255)** — Replaced real-time PyPI polling with an on-demand version check button in Settings > About, eliminating background daemon threads.

### Provider & Transcription
- **[PR #4281](https://github.com/HKUDS/nanobot/pull/4281)** — Added **SiliconFlow** as a transcription provider (Whisper-compatible, default model `FunAudioLLM/SenseVoiceSmall`).

---

## 4. Community Hot Topics

| Item | Type | Comments | Signal |
|---|---|---|---|
| [#4013](https://github.com/HKUDS/nanobot/issues/4013) — "stream stalled for more than 90 seconds" | Issue (closed) | 4 👍 | Most-commented issue today. A v0.2.0 regression that broke real work for users. Now addressed by PR #4272. |
| [#3934](https://github.com/HKUDS/nanobot/issues/3934) — exec tool pip install broken | Issue (closed) | 3 👍 | Long-standing pain point (opened May 20). Users couldn't install Python packages in exec sandbox. Fixed by PR #4273. |
| [#4259](https://github.com/HKUDS/nanobot/issues/4259) — history.jsonl cross-session contamination | Issue (closed) | 2 👍 | Context isolation bug affecting multi-session users. Fixed by PR #4274. |
| **[PR #4276](https://github.com/HKUDS/nanobot/pull/4276)** — Model-agnostic computer use tools | PR (open) | 0 | Ambitious feature: native `computer_use` (pixel-based) and `browser` (DOM-based) tools without MCP. Signals demand for agentic desktop/browser automation. |
| **[PR #4291](https://github.com/HKUDS/nanobot/pull/4291)** — Subagent configurable model presets | PR (open) | 0 | Allows subagents to run on different model presets than the parent. Addresses cost/performance tiering needs. |

**Underlying needs analysis:** The community is converging on three themes: (1) **reliability of the LLM provider layer** (fallbacks, timeouts, empty responses), (2) **context and memory correctness** (session isolation, compaction fidelity), and (3) **agentic capability expansion** (computer use, subagent model routing). The exec/sandbox PATH issue persisting for 3+ weeks before a fix suggests the tool execution subsystem needs more dedicated maintainer attention.

---

## 5. Bugs & Stability

### 🔴 High Severity (data loss / broken core workflows)
| Bug | Status | Fix PR |
|---|---|---|
| [#4259](https://github.com/HKUDS/nanobot/issues/4259) — Cross-session context contamination via `history.jsonl` | ✅ Closed | [PR #4274](https://github.com/HKUDS/nanobot/pull/4274) |
| [#4013](https://github.com/HKUDS/nanobot/issues/4013) — Stream stalled 90s timeout (v0.2.0 regression) | ✅ Closed | [PR #4272](https://github.com/HKUDS/nanobot/pull/4272) |
| [#4237](https://github.com/HKUDS/nanobot/issues/4237) — bwrap sandbox `$HOME` not reset, breaking tool writes | ✅ Closed | (fix merged, PR not in top 20 list) |

### 🟡 Medium Severity (feature degradation)
| Bug | Status | Fix PR |
|---|---|---|
| [#4287](https://github.com/HKUDS/nanobot/issues/4287) — Empty model responses don't trigger fallback | 🟡 Open | [PR #4288](https://github.com/HKUDS/nanobot/pull/4288) (open, targets this) |
| [#4290](https://github.com/HKUDS/nanobot/issues/4290) — Cronjob ends early when subagent spawned | 🔴 Open | None yet |
| [#4286](https://github.com/HKUDS/nanobot/issues/4286) — "Sustained goal" context missing error | 🔴 Open | None yet |
| [#4261](https://github.com/HKUDS/nanobot/issues/4261) — GPT-5.x `max_tokens` vs `max_completion_tokens` | ✅ Closed | (fix merged) |

### 🟢 Low Severity (cosmetic / edge case)
| Bug | Status | Fix PR |
|---|---|---|
| [#4000](https://github.com/HKUDS/nanobot/issues/4000) — StepFun ASR provider missing | ✅ Closed | (enhancement addressed) |

**Assessment:** The project is in active triage mode. Most high-severity bugs from the v0.2.0 transition are being resolved within days. The two open medium-severity bugs (#4290 cronjob/subagent interaction, #4286 "sustained goal" error) have no fix PRs yet and could affect users running complex multi-agent workflows.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release |
|---|---|---|
| **Subagent configurable model presets** | [PR #4291](https://github.com/HKUDS/nanobot/pull/4291) | 🟢 High — PR already open, well-scoped |
| **Computer use + browser tools (native)** | [PR #4276](https://github.com/HKUDS/nanobot/pull/4276) | 🟡 Medium — Ambitious scope, needs review |
| **Aggregated subagent notifications** (reduce hallucination) | [#4279](https://github.com/HKUDS/nanobot/issues/4279) | 🟡 Medium — No PR yet, but clear user need |
| **Slack groupRequireMention** | [PR #4289](https://github.com/HKUDS/nanobot/pull/4289) | 🟢 High — Small, well-defined PR |
| **Skill activation via slash palette in WebUI** | [PR #4284](https://github.com/HKUDS/nanobot/pull/4284) | 🟢 High — UI enhancement, low risk |
| **File management in Settings view** | [PR #4282](https://github.com/HKUDS/nanobot/pull/4282) | 🟡 Medium — Useful but needs security review |
| **StepFun native ASR provider** | [#4000](https://github.com/HKUDS/nanobot/issues/4000) | ✅ Merged |

**Prediction:** The next release (likely v0.2.2) will be a stability-focused patch bundling the stream-stall retry fix, context isolation fix, exec PATH fix, and cron validation. The subagent model presets and Slack mention scoping are strong candidates for inclusion. Computer use tools are more likely targeted at v0.3.0 given their scope.

---

## 7. User Feedback Summary

**Pain points expressed today:**

1. **v0.2.0 upgrade broke core functionality.** User `mxnbf` reported the stream-stall error "renders any real work useless" and had to repeatedly ask the agent to continue. This is the most impactful regression signal in the dataset. The fix (PR #4272) is merged but not yet released.

2. **Sandbox/tool execution environment is confusing.** Multiple users struggled with the exec tool's Python environment — `pip install` failed because the system Python took precedence over virtual environments (issue #3934, now fixed by PR #4273). The bwrap `$HOME` issue (#4237) further indicates the sandbox model needs clearer documentation.

3. **Context management is a recurring source of bugs.** Cross-session contamination (#4259), memory loss under context pressure (#4280 PR), and cronjob/subagent interaction failures (#4290) all point to the context/memory subsystem being the project's most complex and error-prone area.

4. **Users want more control over multi-agent workflows.** Requests for subagent model presets (#4291), aggregated subagent notifications (#4279), and cronjob reliability (#4290) all reflect users building increasingly complex agent orchestrations.

**Satisfaction signals:** User `mxnbf` explicitly thanked the team ("way to say ty") despite the bug, suggesting goodwill toward the project. The rapid closure of long-standing issues (#3934 opened May 20, closed June 10) demonstrates the team is responsive to backlog.

---

## 8. Backlog Watch

These items need maintainer attention:

| Item | Age | Risk | Note |
|---|---|---|---|
| [#4290](https://github.com/HKUDS/nanobot/issues/4290) — Cronjob ends early with subagents | 1 day | 🔴 High | No fix PR. Affects users running scheduled multi-agent workflows. Could be a race condition in session lifecycle management. |
| [#4286](https://github.com/HKUDS/nanobot/issues/4286) — "Sustained goal" context missing | 1 day | 🟡 Medium | No fix PR. Screenshot attached but no reproduction steps. May be related to the context builder changes in PR #4274. |
| [#4279](https://github.com/HKUDS/nanobot/issues/4279) — Aggregated subagent notifications | 1 day | 🟡 Medium | Feature request with no PR. Addresses LLM hallucination from real-time subagent result injection. |
| [#4280](https://github.com/HKUDS/nanobot/pull/4280) — Memory context continuity under pressure | 1 day | 🟡 Medium | Open PR, no comments yet. Related to #4044 (older issue). Needs review. |
| [#3934](https://github.com/HKUDS/nanobot/issues/3934) — exec pip install (now closed) | 20 days | ✅ Resolved | Took 3 weeks to fix. Suggests the tool execution module needs a dedicated owner or better test coverage. |

**Overall project health: 🟡 Good, with caveats.** The merge velocity is excellent and the team is clearly responsive. However, the context/memory subsystem is generating a disproportionate share of bugs, and the v0.2.0 release introduced regressions that took weeks to fully resolve. A dedicated stabilization sprint before the next minor release would benefit the project.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-11

---

## 1. Today's Overview

Hermes Agent remains in a high-activity development phase with **50 issues and 50 PRs updated in the last 24 hours**, indicating a very active contributor base and rapid iteration cycle. No new releases have been published today, suggesting the project is accumulating changes toward a future release (likely post-v0.16.0). The activity is heavily concentrated in **bug fixes and stability improvements** across the gateway layer (Telegram, WhatsApp, email), the Honcho memory plugin, credential pool management, and the Desktop/TUI experience. Several PRs port fixes from Google's gemini-cli, signaling active cross-project learning. The volume of newly opened issues (many from June 10–11) suggests the v0.16.0 release surfaced regressions that the community is actively reporting.

---

## 2. Releases

**No new releases today.** The latest published version remains **v0.16.0** (referenced in multiple issue reports). The absence of a release despite high PR throughput implies the team is batching fixes for an upcoming patch release.

---

## 3. Project Progress

### Merged / Closed PRs (Today)

| PR | Summary |
|---|---|
| [#42813](https://github.com/NousResearch/hermes-agent/pull/42813) | **fix(agent): rename context compressor headers to historical markers** — Compaction summaries now use past-tense headers ("Historical Task", "Previous Work In Progress") to avoid confusing the LLM into treating compressed context as active work. |
| [#41824](https://github.com/NousResearch/hermes-agent/pull/41824) | **fix(logging): suppress Docker environment verbose startup logs** — Prevents Docker sandbox DEBUG/INFO messages from polluting the TUI conversation transcript. |
| [#36245](https://github.com/NousResearch/hermes-agent/pull/36245) | **fix(agent): honor auxiliary task extra_body** — Profile describer, kanban specify/decompose, and goal judge now correctly pass `extra_body` through auxiliary task calls. |

### Notable Open PRs (Active Today)

| PR | Summary |
|---|---|
| [#43867](https://github.com/NousResearch/hermes-agent/pull/43867) | **fix(acp): gate Windows→/mnt path translation behind is_wsl()** — Prevents native Windows ACP file paths from being incorrectly rewritten to WSL `/mnt/` paths. |
| [#43861](https://github.com/NousResearch/hermes-agent/pull/43861) | **fix(tui): fall back on primary AuthError during agent creation** — Desktop/TUI now respects `fallback_providers` when the primary OAuth provider has revoked credentials (fixes [#43588](https://github.com/NousResearch/hermes-agent/issues/43588)). |
| [#43855](https://github.com/NousResearch/hermes-agent/pull/43855) | **feat(sessions): drop empty sessions on CLI exit and rotation** — Port from gemini-cli; prevents untitled, message-less sessions from cluttering `/resume` and session lists. |
| [#43856](https://github.com/NousResearch/hermes-agent/pull/43856) | **feat(agent): add exponential backoff for credential pool exhaustion** — Addresses [#15296](https://github.com/NousResearch/hermes-agent/issues/15296); replaces flat TTL cooldown with exponential backoff to reduce 429 retry loops. |
| [#43864](https://github.com/NousResearch/hermes-agent/pull/43864) | **fix(cron): add standalone cron daemon mode** — New `hermes cron daemon` command allows cron jobs to run without the gateway process (critical for Windows and headless servers). |
| [#43862](https://github.com/NousResearch/hermes-agent/pull/43862) | **feat: index trigger_keywords from SKILL.md frontmatter** — Non-invasive skill auto-discovery improvement (addresses [#3879](https://github.com/NousResearch/hermes-agent/issues/3879)). |
| [#42846](https://github.com/NousResearch/hermes-agent/pull/42846) | **fix(security): redact credentials from messages before sending to LLM providers** — Adds mandatory outbound credential redaction at the trust boundary. |
| [#43803](https://github.com/NousResearch/hermes-agent/pull/43803) | **fix(memory): read endpoint.baseUrl from Honcho config** — Honcho plugin now reads the SDK-native `endpoint.baseUrl` config path and accepts `HONCHO_ENDPOINT` env var. |

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

1. **[#10143](https://github.com/NousResearch/hermes-agent/issues/10143)** — **Topic-to-Profile routing for Telegram** (14 comments, opened Apr 15)
   - **Underlying need:** Power users running multi-agent setups want a single Telegram bot to dispatch messages from different forum topics to different Hermes profiles (each with its own model, skills, memory, and system prompt). This is a significant UX gap for teams and advanced users managing multiple specialized agents.

2. **[#17861](https://github.com/NousResearch/hermes-agent/issues/17861)** — **Multi-turn history loses thinking/redacted_thinking blocks** (7 comments, P1, closed)
   - **Underlying need:** Anthropic Claude models use `thinking` and `redacted_thinking` blocks in the content array. Hermes's `_build_assistant_message()` was not preserving these as source of truth, causing multi-turn context loss. This was filed by a Hermes Agent instance itself via live debugging — a notable example of self-diagnostic capability.

3. **[#19566](https://github.com/NousResearch/hermes-agent/issues/19566)** — **OpenAI-Codex credential pool drops newly added credentials after stale auth.json rewrite** (7 comments, 👍1, P2)
   - **Underlying need:** Race condition in credential rotation when multiple Hermes processes concurrently rewrite `~/.hermes/auth.json`. Newly added credentials can be lost, causing authentication failures mid-session.

4. **[#43731](https://github.com/NousResearch/hermes-agent/issues/43731)** — **Honcho memory file migration re-runs every session, flooding with duplicate facts** (4 comments, P3)
5. **[#43733](https://github.com/NousResearch/hermes-agent/issues/43733)** — **Honcho: injected skill invocation text syncs to memory as user speech** (4 comments, P3)
   - **Underlying need (both):** The Honcho memory plugin has two related data integrity issues — migration is not truly one-time, and skill content injected into the conversation is being stored as user speech, polluting the deriver with noise. These suggest the memory plugin's session boundary detection needs hardening.

6. **[#43775](https://github.com/NousResearch/hermes-agent/issues/43775)** — **Honcho plugin silently fails against self-hosted Honcho v3.x server** (4 comments, 👍1, closed)
   - **Underlying need:** The `honcho-ai` SDK is pinned to v2.0.1, but the self-hosted Honcho Docker image ships v3.x. The v2 SDK's constructor is rejected by the v3 server's pydantic validator. This is a version compatibility issue blocking all self-hosted Honcho users.

---

## 5. Bugs & Stability

### Critical / P1

| Issue | Severity | Status | Fix PR |
|---|---|---|---|
| [#17861](https://github.com/NousResearch/hermes-agent/issues/17861) Multi-turn history loses thinking/redacted_thinking blocks (Anthropic) | P1 | **Closed** | Likely fixed (issue closed Jun 10) |

### High / P2

| Issue | Severity | Status | Fix PR |
|---|---|---|---|
| [#19566](https://github.com/NousResearch/hermes-agent/issues/19566) OpenAI-Codex credential pool drops credentials after auth.json rewrite | P2 | Open | — |
| [#40416](https://github.com/NousResearch/hermes-agent/issues/40416) Context compaction visually deletes messages from Telegram chat (terrible UX) | P2 | Open | — |
| [#43441](https://github.com/NousResearch/hermes-agent/issues/43441) Telegram bound topic final replies render raw Markdown | P2 | **Closed** | Fixed |
| [#43823](https://github.com/NousResearch/hermes-agent/issues/43823) Shell hooks never registered in desktop TUI entry point | P2 | Open | — |
| [#43830](https://github.com/NousResearch/hermes-agent/issues/43830) WhatsApp bridge: LID-addressed group messages silently dropped | P2 | Open | — |
| [#39856](https://github.com/NousResearch/hermes-agent/issues/39856) Email adapter breaks IMAP on servers without RFC 2971 (e.g. Purelymail) | P2 | Open | — |
| [#43835](https://github.com/NousResearch/hermes-agent/issues/43835) Telegram: double messages (tool output + response body) | P2 | Open | — |
| [#43617](https://github.com/NousResearch/hermes-agent/issues/43617) kimi-coding provider uses wrong endpoint + User-Agent for sk-kimi-* keys | P2 | Open | — |
| [#43571](https://github.com/NousResearch/hermes-agent/issues/43571) Desktop app ignores --profile CLI argument, always boots as "default" | P2 | Open | — |
| [#43747](https://github.com/NousResearch/hermes-agent/issues/43747) openai-codex credential pool marks healthy account as usage_limit_reached | P2 | Open | — |
| [#43814](https://github.com/NousResearch/hermes-agent/issues/43814) WhatsApp bridge: CVE-2026-48063 (GHSA-qvv5-jq5g-4cgg) in pinned Baileys version | P2 (Security) | Open | [#43830](https://github.com/NousResearch/hermes-agent/pull/43830) addresses Baileys bump |
| [#43827](https://github.com/NousResearch/hermes-agent/issues/43827) MiniMax-M3 Chinese reasoning tags leak to user output | P2 | Open | — |
| [#43713](https://github.com/NousResearch/hermes-agent/issues/43713) Profile config providers dict replaces/clears default providers instead of inheriting | P2 | Open | — |
| [#43657](https://github.com/NousResearch/hermes-agent/issues/43657) aiohttp ClientSession leak after auxiliary tasks | P2 | Open | — |
| [#43810](https://github.com/NousResearch/hermes-agent/issues/43810) Nix build fails when extraPythonPackages contain deps already in sealed venv | P2 | Open | — |

### Medium / P3

| Issue | Severity | Status |
|---|---|---|
| [#43731](https://github.com/NousResearch/hermes-agent/issues/43731) Honcho memory migration re-runs every session | P3 | Open |
| [#43733](https://github.com/NousResearch/hermes-agent/issues/43733) Honcho skill invocation text pollutes memory | P3 | Open |
| [#43829](https://github.com/NousResearch/hermes-agent/issues/43829) Dashboard "Browse Hub" skill install always cancels (no stdin for confirmation) | P3 | Open |
| [#43825](https://github.com/NousResearch/hermes-agent/issues/43825) Desktop Settings window clears prompt text | P3 | Open |
| [#43837](https://github.com/NousResearch/hermes-agent/issues/43837) hermes update reinstalls Node.js deps unconditionally (~8 min on Windows) | P3 | Open |
| [#43796](https://github.com/NousResearch/hermes-agent/issues/43796) Profile-scoped skills trigger security warning on every skill_view call | P3 | Open |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal Strength | Likelihood in Next Release |
|---|---|---|
| [#10143](https://github.com/NousResearch/hermes-agent/issues/10143) Telegram topic-to-profile routing | 🔴 Strong (14 comments, open 2+ months) | Medium — complex but clearly needed by power users |
| [#37876](https://github.com/NousResearch/hermes-agent/issues/37876) Desktop: simultaneous local + remote backends | 🟡 Medium (3 comments, 👍1) | Medium — natural evolution of desktop app |
| [#40347](https://github.com/NousResearch/hermes-agent/issues/40347) Russian locale for Desktop app | 🟡 Medium (4 comments, installer available) | High — contributor already built it, needs integration |
| [#43818](https://github.com/NousResearch/hermes-agent/issues/43818) Feishu clarify interactive card buttons | 🟡 Medium (1 comment) | Medium — platform parity with other gateways |
| [#15296](https://github.com/NousResearch/hermes-agent/issues/15296) Credential pool exponential backoff | 🟢 **PR open** ([#43856](https://github.com/NousResearch/hermes-agent/pull/43856)) | **Very High** — fix already in PR |
| [#3879](https://github.com/NousResearch/hermes-agent/issues/3879) Skill trigger_keywords indexing | 🟢 **PR open** ([#43862](https://github.com/NousResearch/hermes-agent/pull/43862)) | **Very High** — fix already in PR |
| [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) Desktop multilingual i18n (15 languages) | 🟢 **PR open** | High — PR synced with upstream main post-v0.16.0 |

**Prediction for next release (likely v0.16.1 or v0.17.0):** Expect the standalone cron daemon, exponential backoff for credential pools, skill trigger_keywords indexing, Honcho v3 compatibility fix, and the Baileys security bump to land. The i18n PR (15 languages) is ambitious and may take longer to review.

---

## 7. User Feedback Summary

**Dominant pain points from the last 24 hours:**

1. **Honcho memory plugin instability** — Multiple users report the plugin is unreliable: migration re-runs every session ([#43731](https://github.com/NousResearch/hermes-agent/issues/43731)), skill text pollutes memory ([#43733](https://github.com/NousResearch/hermes-agent/issues/43733)), and it silently fails with self-hosted v3 servers ([#43775](https://github.com/NousResearch/hermes-agent/issues/43775)). This is the single most problematic subsystem right now.

2. **Credential pool race conditions** — Users with multiple OpenAI-Codex accounts are hitting credential loss during rotation ([#19566](https://github.com/NousResearch/hermes-agent/issues/19566)) and false rate-limit detection ([#43747](https://github.com/NousResearch/hermes-agent/issues/43747)). The flat TTL retry loop ([#15296](https://github.com/NousResearch/hermes-agent/issues/15296)) exacerbates this.

3. **Desktop/TUI experience gaps** — Shell hooks ignored in TUI ([#43823](https://github.com/NousResearch/hermes-agent/issues/43823)), Settings window clearing prompt text ([#43825](https://github.com/NousResearch/hermes-agent/issues/43825)), profile CLI argument ignored ([#43571](https://github.com/NousResearch/hermes-agent/issues/43571)), and slow `hermes update` on Windows ([#43837](https://github.com/NousResearch/hermes-agent/issues/43837)) all point to the desktop app needing polish.

4. **Telegram UX issues** — Double messages ([#43835](https://github.com/NousResearch/hermes-agent/issues/43835)), raw Markdown rendering in topics ([#43441](https://github.com/NousResearch/hermes-agent/issues/43441)), and context compaction visually deleting messages ([#40416](https://github.com/NousResearch/hermes-agent/issues/40416)) are degrading the Telegram user experience.

5. **Security concern** — The WhatsApp bridge has a **critical CVE** ([CVE-2026-48063](https://github.com/advisories/GHSA-qvv5-jq5g-4cgg)) in the pinned Baileys version ([#43814](https://github.com/NousResearch/hermes-agent/issues/43814)), and credential leakage to LLM providers ([#42846](https://github.com/NousResearch/hermes-agent/pull/42846)) is being addressed. These should be prioritized for the next release.

**Satisfaction signals:** The project's self-diagnostic capability (an Hermes Agent instance filed [#17861](https://github.com/NousResearch/hermes-agent/issues/17861) via live debugging) demonstrates the platform's maturity. Active cross-project contributions (ports from gemini-cli) suggest a healthy open-source ecosystem.

---

## 8. Backlog Watch

### Long-Unanswered Important Issues Needing Maintainer Attention

| Issue | Age | Why It Matters |
|---|---|---|
| [#10143](https://github.com/NousResearch/hermes-agent/issues/10143) Telegram topic-to-profile routing | **57 days** (Apr 15) | Most-commented active feature request; multi-agent power users are blocked. Needs design decision or maintainer response. |
| [#15296](https://github.com/NousResearch/hermes-agent/issues/15296) Credential pool exponential backoff | **48 days** (Apr 24) | Now has a PR ([#43856](https://github.com/NousResearch/hermes-agent/pull/43856)) — needs review/merge. |
| [#40416](https://github.com/NousResearch/hermes-agent/issues/40416) Context compaction visually deletes Telegram messages | **5 days** (Jun 6) | High-impact UX bug; P2 but affects every Telegram user during compaction. No fix PR yet. |
| [#39856](https://github.com/NousResearch/hermes-agent/issues/39856) Email adapter breaks on servers without RFC 2971 | **6 days** (Jun 5) | Blocks users on Purelymail and similar providers. No fix PR yet. |
| [#43814](https://github.com/NousResearch/hermes-agent/issues/43814) CVE-2026-48063 in WhatsApp bridge Baileys pin | **1 day** (Jun 10) | **Critical security vulnerability.** Needs immediate Baileys version bump. Related to [#43830](https://github.com/NousResearch/hermes-agent/issues/43830). |
| [#43571](https://github.com/NousResearch/hermes-agent/issues/43571) Desktop ignores --profile CLI argument | **1 day** (Jun 10) | Breaks multi-profile CLI workflows; desktop overwrites CLI sessions. No fix PR. |
| [#43713](https://github.com/NousResearch/hermes-agent/issues/43713) Profile config providers dict replaces defaults | **1 day** (Jun 10) | Silent data loss of default providers when using sub-profiles. No fix PR. |

### PRs Aging Without Review

| PR | Age | Summary |
|---|---|---|
| [#42846](https://github.com/NousResearch/hermes-agent/pull/42846) | **2 days** (Jun 9) | Security: credential redaction before LLM provider calls — should be high priority. |
| [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) | **7 days** (Jun 4) | Desktop i18n with 15 languages — large PR, needs dedicated review. |
| [#43803](https://github.com/NousResearch/hermes-agent/pull/43803) | **1 day** (Jun 10) | Honcho config fix — small, targeted, should be quick to merge. |

---

*Data source: NousResearch/hermes-agent GitHub repository. Digest generated by OWL for 2026-06-11.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-11

---

## 1. Today's Overview

PicoClaw is in a highly active maintenance and hardening phase. In the last 24 hours the project saw **5 issues updated** (4 open, 1 closed) and **14 pull requests updated** (8 open, 6 merged/closed), indicating a fast-paced review-and-merge cadence from maintainers. A new **nightly build** (`v0.2.9-nightly.20260610.b9a8fad6`) was published, reflecting continuous integration maturity. The majority of activity centers on bug fixes — particularly around type assertion safety, SSRF hardening, and cross-platform compatibility — suggesting the project is stabilizing the v0.2.x line ahead of a potential stable release. Community engagement is moderate, with a few issues attracting multi-comment discussions.

---

## 2. Releases

**Nightly Build — `v0.2.9-nightly.20260610.b9a8fad6`**
- This is an automated nightly build and may be unstable. Use with caution.
- Full changelog: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
- No stable release was published today. The nightly incorporates the batch of fixes merged over the past 24 hours (SSRF guard, Windows path separator, type assertion checks, etc.).

---

## 3. Project Progress

Six PRs were merged/closed today, advancing several important fixes:

| PR | Description |
|---|---|
| [#3089](https://github.com/sipeed/picoclaw/pull/3089) | **fix os.Root API on Windows** — Resolves path separator mismatch causing `list_dir` to return "invalid argument" on Windows. Fixes [#2472](https://github.com/sipeed/picoclaw/issues/2472). |
| [#3085](https://github.com/sipeed/picoclaw/pull/3085) | **SSRF guard: block `198.18.0.0/15`** — Blocks the RFC 2544 benchmark address range in `web_fetch` SSRF protection. Addresses security advisory [#3077](https://github.com/sipeed/picoclaw/issues/3077). |
| [#2945](https://github.com/sipeed/picoclaw/pull/2945) | **feat: add debug trace viewer (picoclaw-tracer)** — New standalone web UI for real-time LLM trace inspection (system prompt, messages, tool calls, response metadata). |
| [#2951](https://github.com/sipeed/picoclaw/pull/2951) | **fix: use function-type web_search for better API compatibility** — Fixes HTTP 400 errors on OpenAI endpoints that don't support `web_search_preview`. |
| [#2948](https://github.com/sipeed/picoclaw/pull/2948) | **fix: skip temperature parameter for claude-opus-4-7** — Fixes HTTP 400 errors for models that deprecated the `temperature` parameter. |
| [#3043](https://github.com/sipeed/picoclaw/pull/3043) | **fix: check strconv.Atoi and json.Unmarshal errors** — Properly handles previously silently discarded parse errors. |

**Key themes:** Cross-platform reliability (Windows), security hardening (SSRF), AI provider compatibility (OpenAI/Anthropic), and developer experience (trace viewer).

---

## 4. Community Hot Topics

**🔥 [#2472 — `list_dir` returns "invalid argument" on Windows](https://github.com/sipeed/picoclaw/issues/2472)** (5 comments, 👍1)
- The most discussed active issue. Windows path separators (`\`) passed to Go's `os.Root` API (which requires `/`) cause filesystem tool failures. **Fix already merged** via PR [#3089](https://github.com/sipeed/picoclaw/pull/3089). This has been open since April 2026, indicating it affected Windows users for ~2 months before resolution.

**🔥 [#3094 — Async sub-agent duplicate messages](https://github.com/sipeed/picoclaw/issues/3094)** (new today)
- Users report receiving two identical messages on Feishu/Telegram when using `spawn`: one raw push from the sub-agent and one formatted summary from the main agent. This is a UX regression in the sub-agent orchestration flow. No fix PR yet.

**Notable open PRs with community interest:**
- [#2937 — Agent Collaboration Bus](https://github.com/sipeed/picoclaw/pull/2937): A stale but ambitious PR introducing durable inter-agent communication with mailboxes, collaboration threads, and permission-aware messaging. Has not seen recent activity.
- [#3083 — Harden launcher access control](https://github.com/sipeed/picoclaw/pull/3083): Adds configurable localhost bypass and trusted proxy CIDRs for the launcher component.

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Status | Fix PR |
|---|---|---|---|
| 🔴 **High (Security)** | [#3077](https://github.com/sipeed/picoclaw/issues/3077) — SSRF bypass via `198.18.0.0/15` | ✅ **Closed** | [#3085](https://github.com/sipeed/picoclaw/pull/3085) merged |
| 🟠 **Medium** | [#2472](https://github.com/sipeed/picoclaw/issues/2472) — `list_dir` fails on Windows | ✅ **Fix merged** | [#3089](https://github.com/sipeed/picoclaw/pull/3089) merged |
| 🟠 **Medium** | [#3094](https://github.com/sipeed/picoclaw/issues/3094) — Sub-agent duplicate messages on Feishu/Telegram | 🔓 Open | None yet |
| 🟡 **Low** | [#3090](https://github.com/sipeed/picoclaw/issues/3090) — Panel broken on Safari iOS < 16.4 | 🔓 Open | None yet |
| 🟡 **Low** | [#3091](https://github.com/sipeed/picoclaw/pull/3091) — `native_search` type assertion silently fails | 🔓 Open PR | Self-fix PR open |
| 🟡 **Low** | [#3087](https://github.com/sipeed/picoclaw/pull/3087) — Exec safety guard false positive on workspace-relative paths | 🔓 Open PR | Self-fix PR open |

**Assessment:** The security issue was resolved quickly (same-day fix). The Windows path bug had a 2-month lag but is now fixed. The duplicate sub-agent message bug is the most impactful open issue affecting daily UX.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version |
|---|---|---|
| **SimpleX/Tox/Wire gateway support** | [#3093](https://github.com/sipeed/picoclaw/issues/3093) | Low — single request, no community traction yet |
| **Agent Collaboration Bus** (inter-agent mailboxes, threads) | [#2937](https://github.com/sipeed/picoclaw/pull/2937) | Medium — PR exists but stale; signals demand for multi-agent workflows |
| **Debug trace viewer (picoclaw-tracer)** | [#2945](https://github.com/sipeed/picoclaw/pull/2945) | ✅ **Already merged** — will appear in next nightly/stable |
| **Launcher access control hardening** | [#3083](https://github.com/sipeed/picoclaw/pull/3083) | Medium — security-adjacent, likely to be reviewed soon |
| **Session scope (`dm_scope`) persistence** | [#3067](https://github.com/sipeed/picoclaw/pull/3067) | Medium — straightforward fix, addresses config UX gap |

**Prediction:** The next stable release (likely v0.2.10 or v0.3.0) will focus on stability fixes (type assertion safety, cross-platform compatibility) and may include the tracer tool. Multi-agent collaboration features appear to be a longer-term roadmap item.

---

## 7. User Feedback Summary

**Pain points identified:**
- **Windows compatibility** has been a persistent friction point — the `os.Root` path separator issue went unresolved for ~2 months, suggesting Windows may be a secondary platform in testing priority.
- **Sub-agent orchestration UX** — the duplicate message bug ([#3094](https://github.com/sipeed/picoclaw/issues/3094)) indicates that async multi-agent workflows, while powerful, have rough edges in message routing and deduplication.
- **Mobile Safari support** — the panel incompatibility with iOS < 16.4 ([#3090](https://github.com/sipeed/picoclaw/issues/3090)) suggests the web frontend may use modern APIs without sufficient fallbacks.
- **Config persistence gaps** — users report that UI settings (like session scope) don't survive page reloads ([#3067](https://github.com/sipeed/picoclaw/pull/3067)), indicating frontend-backend config sync issues.

**Positive signals:**
- The project is responsive to security disclosures (SSRF fix merged same day).
- The new tracer tool ([#2945](https://github.com/sipeed/picoclaw/pull/2945)) addresses a clear developer need for observability into LLM agent behavior.
- Multiple contributors are proactively fixing type assertion safety issues, improving overall code robustness.

---

## 8. Backlog Watch

Items needing maintainer attention:

| Item | Age | Risk | Notes |
|---|---|---|---|
| [#2472](https://github.com/sipeed/picoclaw/issues/2472) — Windows `list_dir` | 2 months | ✅ Resolved | Fix merged via [#3089](https://github.com/sipeed/picoclaw/pull/3089) |
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) — Agent Collaboration Bus | 2 weeks (stale) | ⚠️ At risk of abandonment | Ambitious feature PR with no recent activity; needs maintainer review or contributor check-in |
| [#3045](https://github.com/sipeed/picoclaw/pull/3045) — Matrix `allow_from` colon parsing | 4 days | ⚠️ Open | Fixes Matrix user ID parsing; straightforward but unreviewed |
| [#3094](https://github.com/sipeed/picoclaw/issues/3094) — Sub-agent duplicate messages | 1 day | 🔴 Active | New issue, no fix yet; affects core UX for multi-agent users |
| [#3090](https://github.com/sipeed/picoclaw/issues/3090) — Safari iOS < 16.4 panel broken | 1 day | 🟡 Low | Frontend compatibility; may affect mobile users |

**Recommendation:** Prioritize review of [#3094](https://github.com/sipeed/picoclaw/issues/3094) (duplicate messages) as it impacts the increasingly important sub-agent workflow. The stale PR [#2937](https://github.com/sipeed/picoclaw/pull/2937) needs a maintainer decision — either close with feedback or assign a reviewer to move it forward.

---

*Data source: [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw) | Digest generated for 2026-06-11*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-11

---

## 1. Today's Overview

NanoClaw shows **high activity** with 10 PRs updated in the last 24 hours (4 open, 6 closed/merged) and 1 active issue. The project is in a **feature-expansion phase**, with multiple community-contributed skills (guardrails, web search, tool visibility, finance DD agent) landing in rapid succession. A notable infrastructure PR — persisting agent container stdout/stderr to disk — signals production hardening work. No new releases were published today, suggesting the team is accumulating features for a future cut. Overall project health appears strong: contributions are flowing, PRs are being reviewed and merged within 1–2 days, and the skills-based customization model (formalized in merged PR [#2721](https://github.com/nanocoai/nanoclaw/pull/2721)) is clearly resonating with external contributors.

---

## 2. Releases

**No new releases today.** The latest release information was not included in the data provided. The high PR merge cadence suggests a new release may be imminent given the volume of recently landed features and fixes.

---

## 3. Project Progress

### Merged / Closed PRs (6)

| PR | Author | Summary |
|---|---|---|
| [#2721](https://github.com/nanocoai/nanoclaw/pull/2721) | gavrielc | **Docs: Customizing intro, skills model, and skill guidelines** — Establishes the public skills-based customization contract with three layered docs (`customizing.md`, skills model, skill guidelines). This is foundational documentation that formalizes "every change is a skill" philosophy. |
| [#2719](https://github.com/nanocoai/nanoclaw/pull/2719) | amit-shafnir | **feat: add `uninstall.sh`** — Per-copy uninstaller with confirmation, dry-run, and OneCLI agent cleanup. Improves operational hygiene for self-hosted deployments. |
| [#2718](https://github.com/nanocoai/nanoclaw/pull/2718) | brookgao | **fix(feishu): cleanup zombie active_cards** — Fixes a real production bug where Feishu interactive cards got stuck showing "运行中" for 50+ minutes after `agent-runner` was killed by `PROCESS_TIMEOUT`. Root cause: `deleteActiveCard(jid)` only fired inside the SDK's `final` event handler, which abnormal kills bypass. |
| [#2723](https://github.com/nanocoai/nanoclaw/pull/2723) | dtanikella | **Finance DD agent** — New skill contribution (details sparse, likely a due-diligence financial analysis agent). |
| [#3](https://github.com/nanocoai/nanoclaw/pull/3) | gavrielc | **Secure IPC with per-group namespaces** — Each container now gets its own IPC directory (`/data/ipc/{groupFolder}/`) instead of a shared global directory. Identity is determined by directory, not self-reported data. Prevents privilege escalation between agent groups. |
| [#2724](https://github.com/nanocoai/nanoclaw/pull/2724) | Pineacles | Closed immediately — opened against wrong repo. No impact. |

### Key Takeaways
- The **skills ecosystem** is the dominant growth vector: guardrails, web search, tool visibility, finance DD, and uninstaller all arrived as skills.
- **Security** is being addressed at the IPC layer (PR [#3](https://github.com/nanocoai/nanoclaw/pull/3)), which is critical for multi-tenant deployments.
- **Feishu integration** is receiving production-quality bug fixes, indicating real-world usage on that platform.

---

## 4. Community Hot Topics

### Most Active Issue

- **[#1690](https://github.com/nanocoai/nanoclaw/issues/1690)** — *Multi-runtime agent SDK abstraction (Claude + Codex + local models)* by `chiptoe-svg` | 6 comments | 👍 3 | Open since 2026-04-07
  - **Analysis:** This is the most engaged-with item in the dataset. The author built a multi-runtime abstraction layer allowing different agent SDKs to be installed as modular skills (mirroring the `/add-telegram`, `/add-slack` pattern). An `AgentRuntime` interface at the host level lets the app call `runtime.run()` against Claude, Codex, or local models interchangeably. The 6 comments and 3 reactions suggest strong community interest in **runtime portability** — users want to avoid vendor lock-in and switch between LLM backends seamlessly. This has been open for over two months, indicating it's a complex architectural discussion.

### Notable Open PRs Generating Interest

- **[#2726](https://github.com/nanocoai/nanoclaw/pull/2726)** — `/add-guardrails` skill: per-agent-group input/output guardrails with deterministic regex/keyphrase rules, prompt-injection blocking, credential-leak patterns, `block`/`flag` actions, and quarantine audit trails. **Fails closed on broken rules** — a security-first design.
- **[#2725](https://github.com/nanocoai/nanoclaw/pull/2725)** — `web-search-plus` skill: multi-provider web search + URL extraction via a `wsp` CLI, no MCP dependency. Addresses a common need for container agents to access live web data.

---

## 5. Bugs & Stability

| Severity | Issue / PR | Status | Fix Available? |
|---|---|---|---|
| 🔴 **High** | **Feishu zombie active_cards** — Cards stuck in "运行中" state for 50+ min after `PROCESS_TIMEOUT` kill. Real production bug. | ✅ **Fixed** in PR [#2718](https://github.com/nanocoai/nanoclaw/pull/2718) (merged 2026-06-10) | Yes — merged |
| 🟡 **Medium** | **Agent container log loss** — stdout/stderr from agent containers currently discarded, hindering debugging. | 🔧 **Proposed** in PR [#2727](https://github.com/nanocoai/nanoclaw/pull/2727) (open) | PR pending review |
| 🟢 **Low** | **Privilege escalation via shared IPC** — Containers could impersonate other groups via self-reported IPC data. | ✅ **Fixed** in PR [#3](https://github.com/nanocoai/nanoclaw/pull/3) (merged 2026-06-10) | Yes — merged |

**Assessment:** The project is actively addressing both security and observability gaps. The Feishu card bug fix is particularly important for production trust. The container log persistence PR ([#2727](https://github.com/nanocoai/nanoclaw/pull/2727)) is a sibling to a Microsoft amplifier-app PR, suggesting cross-organizational alignment on production readiness.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood of Next Version |
|---|---|---|
| **Multi-runtime agent SDK abstraction** | Issue [#1690](https://github.com/nanocoai/nanoclaw/issues/1690) (6 comments, open 2+ months) | 🟡 Medium — Architectural complexity is high; likely a longer-term effort. Community-built abstraction exists as a reference. |
| **Per-agent-group guardrails** | PR [#2726](https://github.com/nanocoai/nanoclaw/pull/2726) (open) | 🟢 High — Already implemented as a skill, just needs review/merge. Addresses prompt injection and credential leak prevention. |
| **Multi-provider web search for agents** | PR [#2725](https://github.com/nanocoai/nanoclaw/pull/2725) (open) | 🟢 High — Self-contained skill, no MCP dependency, clean design. Likely to merge soon. |
| **Live tool-call previews in chat** | PR [#2211](https://github.com/nanocoai/nanoclaw/pull/2211) (open since May) | 🟡 Medium — Rebuilt per skill guidelines; may need further iteration. |
| **Container log persistence** | PR [#2727](https://github.com/nanocoai/nanoclaw/pull/2727) (open) | 🟢 High — Production necessity, sibling PR already merged in Microsoft fork. |

**Prediction:** The next release will likely emphasize **security hardening** (guardrails, IPC namespaces), **production observability** (container log persistence), and **skills ecosystem expansion** (web search, tool visibility). The multi-runtime abstraction is a longer-horizon architectural play.

---

## 7. User Feedback Summary

**Pain Points:**
- **No container observability**: Agent stdout/stderr is discarded, making debugging extremely difficult for self-hosted users (PR [#2727](https://github.com/nanocoai/nanoclaw/pull/2727) addresses this).
- **Feishu integration fragility**: Production deployments on Feishu experienced stuck interactive cards, eroding trust in the platform integration (fixed in [#2718](https://github.com/nanocoai/nanoclaw/pull/2718)).
- **Security concerns with shared IPC**: Multi-group deployments risked privilege escalation (fixed in [#3](https://github.com/nanocoai/nanoclaw/pull/3)).

**Use Cases Emerging:**
- **Financial due diligence agents** — Custom skill for finance DD workflows ([#2723](https://github.com/nanocoai/nanoclaw/pull/2723)).
- **Multi-provider web search** — Agents needing live web data without MCP complexity ([#2725](https://github.com/nanocoai/nanoclaw/pull/2725)).
- **Compliance-sensitive deployments** — Guardrails for blocking prompt injection and credential leaks ([#2726](https://github.com/nanocoai/nanoclaw/pull/2726)).

**Satisfaction Indicators:**
- The skills-based customization model (formalized in [#2721](https://github.com/nanocoai/nanoclaw/pull/2721)) is clearly working — **5+ skill PRs** landed in the past 48 hours, indicating high contributor engagement.
- Fast PR turnaround (most merged within 1–2 days) suggests responsive maintainers.

---

## 8. Backlog Watch

| Item | Type | Open Since | Concern |
|---|---|---|---|
| **[#1690](https://github.com/nanocoai/nanoclaw/issues/1690)** — Multi-runtime agent SDK abstraction | Issue | 2026-04-07 (**67 days**) | Most commented issue (6 comments). Architectural discussion may need maintainer direction or a decision on scope. Risk of stalling. |
| **[#2211](https://github.com/nanocoai/nanoclaw/pull/2211)** — Tool-visibility skill for live tool-call previews | PR | 2026-05-03 (**39 days**) | Open for over a month. Was rebuilt per skill guidelines but hasn't merged. May need reviewer attention or further revision. |
| **[#2727](https://github.com/nanocoai/nanoclaw/pull/2727)** — Container stdout/stderr persistence to disk | PR | 2026-06-10 (1 day) | Important for production debugging. Sibling PR already merged in Microsoft fork — should be prioritized. |

**Recommendation:** The maintainers should consider:
1. **Triaging [#1690](https://github.com/nanocoai/nanoclaw/issues/1690)** — either accepting the abstraction into core, or documenting it as a community pattern. The 67-day wait risks contributor frustration.
2. **Reviewing [#2211](https://github.com/nanocoai/nanoclaw/pull/2211)** — a month-old PR with no comments signals either invisible or forgotten. A quick status update would help.
3. **Fast-tracking [#2727](https://github.com/nanocoai/nanoclaw/pull/2727)** — production observability is table stakes for self-hosted deployments.

---

*Generated by OWL — NanoClaw Project Digest, 2026-06-11*
*Data source: [github.com/qwibitai/nanoclaw](https://github.com/nanocoai/nanoclaw)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-11

---

## 1. Today's Overview

NullClaw shows **moderate active development** with 6 pull requests updated in the last 24 hours (4 open, 2 merged/closed) and zero new issues. No new releases were published. The project is in a **stabilization and polish phase**, with contributors focusing on configuration flexibility, agent output correctness, and test infrastructure reliability. The absence of new issues suggests the current release is relatively stable in the field, or that the user base is small and quiet. All activity is PR-driven, indicating a contributor-led development cadence rather than a reactive, issue-driven one.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours.

---

## 3. Project Progress

Two PRs were merged/closed today, advancing fixes in two areas:

- **[#945 [CLOSED]] fix(redaction): reject ISO date/time patterns as false-positive phone matches**
  [nullclaw/nullclaw#945](https://github.com/nullclaw/nullclaw/pull/945)
  The redaction engine's `matchPhone` function was incorrectly flagging ISO date/time strings (e.g., `2026-06-02 20:17`) emitted by the system prompt's `appendDateTimeSection` as phone numbers. A new `isDateLike()` guard now rejects these patterns. This is a **data quality fix** preventing false-positive PII redaction that could corrupt agent context or user-facing output.

- **[#946 [CLOSED]] fix(agent): filter tools in system prompt text by tool_filter_groups**
  [nullclaw/nullclaw#946](https://github.com/nullclaw/nullclaw/pull/946)
  The text-based system prompt now only includes built-in tools and MCP tools from `always` filter groups. Dynamic-group MCP tools are omitted from the text prompt but still available via native API tool-calling when turn keywords match. This reduces prompt bloat and token consumption for agents with large MCP tool surfaces, improving cost and latency.

---

## 4. Community Hot Topics

No issues have been filed, and none of the open PRs have received comments or reactions (all at 0 👍, comments: undefined). The most substantive open PRs by scope are:

- **[#949 [OPEN]] fix: make queue_mode configurable from config.json, default to latest**
  [nullclaw/nullclaw#949](https://github.com/nullclaw/nullclaw/pull/949)
  Moves `QueueMode` to a shared config type and allows `agent.default_queue_mode` to be set in `config.json`. This addresses a **configuration ergonomics gap** — users previously had no declarative way to set the default queue behavior for new sessions.

- **[#948 [OPEN]] fix cron agent delivery attribution**
  [nullclaw/nullclaw#948](https://github.com/nullclaw/nullclaw/pull/948)
  Ensures cron-triggered agent runs correctly attribute their delivery origin (channel/account) through the full pipeline, including `nullclaw cron once-agent`. This is a **routing correctness fix** for multi-channel deployments where cron jobs need to deliver responses to the right destination.

---

## 5. Bugs & Stability

| Severity | PR | Description |
|----------|-----|-------------|
| **Medium** | [#951 [OPEN]](https://github.com/nullclaw/nullclaw/pull/951) | `buildAgentOutput` fell back to stderr on non-zero agent exit, causing initialization logs (memory plan, MCP registration, channel startup) to be posted to channels as if they were agent responses. Fix suppresses stderr fallback on failure. |
| **Medium** | [#950 [OPEN]](https://github.com/nullclaw/nullclaw/pull/950) | `gateway.run()` performs heavy allocations (Config, SessionManager, tools) *before* port probing. On `AddressInUse` failures in test environments, these allocations leak because defers don't fully clean up the early-exit path. Fix moves port probe before allocations. |
| **Low** | [#945 [CLOSED]](https://github.com/nullclaw/nullclaw/pull/945) | ISO date/time false-positive phone redaction (fixed, merged). |

**Assessment:** The stderr-as-agent-output bug (#951) is the most user-visible issue — it would cause confusing noise in chat channels. The test leak (#950) is infrastructure-only but important for CI reliability. Both have open fix PRs awaiting review.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed as issues. However, the PR activity reveals **implicit roadmap direction**:

- **Configurability push:** PR #949's `default_queue_mode` config field signals a broader effort to make agent behavior declaratively configurable via `config.json` rather than hardcoded or CLI-only. Expect more config surface expansion in upcoming releases.
- **Cron/attribution hardening:** PR #948's delivery attribution fix suggests NullClaw is maturing its multi-channel cron scheduling — a sign the project is being used in production multi-account setups.
- **Prompt optimization:** PR #946's tool filtering indicates ongoing work to reduce token overhead, likely driven by cost-sensitive deployments with many MCP tools.

**Predicted next release focus:** Configuration system consolidation, agent output correctness, and prompt/token optimization.

---

## 7. User Feedback Summary

No direct user feedback (issues, comments, reactions) was recorded in the last 24 hours. Indirect signals from PR content suggest:

- **Pain point — noisy agent output:** Users (or contributors acting as users) are encountering initialization logs leaking into channel output (#951), which degrades the chat experience.
- **Pain point — configuration rigidity:** The need for `queue_mode` in config.json (#949) indicates users want more declarative control over session defaults.
- **Pain point — prompt bloat:** The tool filtering fix (#946) suggests users with large MCP tool sets are hitting token/cost limits.
- **Satisfaction signal:** The project continues to attract consistent PR contributions (6 in 24h from 3 different authors), indicating contributor confidence in the project's direction.

---

## 8. Backlog Watch

All 4 open PRs were created on **2026-06-10** (yesterday), so there is no long-unanswered backlog at this time. However, the following PRs are **awaiting review/merge** and should be prioritized:

1. **[#951](https://github.com/nullclaw/nullclaw/pull/951)** — stderr initialization log leak (user-visible bug, medium severity)
2. **[#950](https://github.com/nullclaw/nullclaw/pull/950)** — gateway test allocation leak (CI reliability)
3. **[#949](https://github.com/nullclaw/nullclaw/pull/949)** — queue_mode config (feature/config enhancement)
4. **[#948](https://github.com/nullclaw/nullclaw/pull/948)** — cron delivery attribution (correctness fix)

**Note:** All PRs are from a small set of contributors (`vernonstinebaker` authored 4 of the 6 total). The project may benefit from broader reviewer participation to avoid bottleneck dependency on a single maintainer.

---

*Generated by OWL — ZOO Company*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-11

---

## 1. Today's Overview

IronClaw is in a period of intense activity around its **Reborn** platform rewrite, with 50 issues and 50 PRs updated in the last 24 hours. The project is clearly in a heavy development sprint: 34 issues remain open (many filed today as local-testing findings), and 28 PRs are open against 22 merged/closed. No new releases have been published to crates.io, and the most significant open issue (#3259) highlights that crates.io remains pinned to **0.24.0** while GitHub tags go up to **0.27.0** — a gap of over a month that blocks downstream consumers affected by wasmtime 28.x CVEs. The overwhelming majority of today's activity is Reborn-focused: WebUI v2 UX polish, auth/provider configuration fixes, Slack integration, and extension/MCP infrastructure.

---

## 2. Releases

**No new releases today.** The crates.io publishing gap (Issue [#3259](https://github.com/nearai/ironclaw/issues/3259)) remains the most pressing release concern — downstream users are stuck on 0.24.0 due to wasmtime 28.x CVEs with no path to 0.25.0–0.27.0 via crates.io.

---

## 3. Project Progress

Key merged/closed PRs from the last 24 hours:

| PR | Summary |
|---|---|
| **[#4743](https://github.com/nearai/ironclaw/pull/4743)** | Fixed NEAR context overflow classification — `prompt is too long` 400 responses now correctly parsed as `ContextLengthExceeded` with token counts extracted |
| **[#4742](https://github.com/nearai/ironclaw/pull/4742)** | Fixed manual token runtime credential selection — `ManualToken` vs `OAuth` now threaded through authorization obligations, WASM restaging, and WebUI credential status |
| **[#4730](https://github.com/nearai/ironclaw/pull/4730)** | **Slack DM end-to-end delivery** for personal triggered-event automations — users can now pair Slack, auto-provision a DM delivery target, and receive triggered run replies/approval prompts/auth notices in DM |
| **[#4717](https://github.com/nearai/ironclaw/pull/4717)** | Restored WebUI v2 "Always Allow" approval affordance — persistent approval policies for typed product-workflow gates |
| **[#4652](https://github.com/nearai/ironclaw/pull/4652)** | Added `docs/reborn-binary.md` and `scripts/run-reborn-webui.sh` — one-command local Reborn + WebChat v2 launcher |
| **[#4739](https://github.com/nearai/ironclaw/pull/4739)** | Enabled Slack in Railway QA Docker configs |

**Notable open PRs in progress:**

- **[#4731](https://github.com/nearai/ironclaw/pull/4731)** — Fixing operator LLM provider configuration end-to-end (save, model discovery, Settings UI). Closes [#4673](https://github.com/nearai/ironclaw/issues/4673).
- **[#4738](https://github.com/nearai/ironclaw/pull/4738)** — Attachment upload UX in WebChat v2 SPA (stacked on backend work from [#4670](https://github.com/nearai/ironclaw/pull/4670)).
- **[#4745](https://github.com/nearai/ironclaw/pull/4745)** — Refactoring automations panel to use `TriggerRepository` instead of capability dispatch.
- **[#4744](https://github.com/nearai/ironclaw/pull/4744)** — Gating extension activation on product auth.
- **[#4735](https://github.com/nearai/ironclaw/pull/4735)** — Programmatic MCP server config + PATCH update for Extensions API.
- **[#4559](https://github.com/nearai/ironclaw/pull/4559)** — Agent-driven Trace Commons onboarding via invite link.

---

## 4. Community Hot Topics

**Most commented issues:**

1. **[#3259](https://github.com/nearai/ironclaw/issues/3259)** — *Publish 0.25.0–0.27.0 to crates.io* (14 comments, opened May 5). This is the **longest-standing critical issue** — downstream consumers are pinned to 0.24.0 due to wasmtime 28.x CVEs. The gap between GitHub tags (up to 0.27.0) and crates.io (0.24.0) has persisted for over a month. **Underlying need:** A reliable, automated crates.io publishing pipeline.

2. **[#3036](https://github.com/nearai/ironclaw/issues/3036)** — *[EPIC] Configuration-as-Code for IronClaw Reborn* (6 comments). Operators want declarative configuration (tenant blueprints, use-case harnesses) instead of hand-editing `.env`, workspace docs, settings JSON, and runtime flags. **Underlying need:** Schema-driven, auditable, diffable configuration — a foundational requirement for enterprise adoption.

3. **[#3283](https://github.com/nearai/ironclaw/issues/3283)** — *[Reborn] Migrate OpenAI-compatible chat and Responses APIs onto Reborn* (3 comments, now closed). This EPIC tracks the migration of OpenAI-compatible API surfaces onto the Reborn product workflow. Several child issues have been closed, indicating steady progress.

---

## 5. Bugs & Stability

Ranked by severity:

### 🔴 Critical / High

- **[#3259](https://github.com/nearai/ironclaw/issues/3259)** — crates.io stuck on 0.24.0; downstream consumers exposed to wasmtime 28.x CVEs. **No fix PR visible.** This is a release infrastructure issue, not a code fix, but it has security implications.
- **[#4642](https://github.com/nearai/ironclaw/issues/4642)** — *Strict-mode providers' null-for-unset-optionals rejected by capability-port validation* (closed). Affected most first-party tools. **Fix merged** — this was addressed in recent PRs.

### 🟡 Medium

- **[#4703](https://github.com/nearai/ironclaw/issues/4703)** — *Conversation cannot use NEAR AI provider after successful setup.* Test connection succeeds (40 models available), but the provider doesn't work in conversation. **No fix PR yet.**
- **[#4673](https://github.com/nearai/ironclaw/issues/4673)** — *NEAR AI provider configuration cannot be saved after successful Test connection* (closed). **Fix PR: [#4731](https://github.com/nearai/ironclaw/pull/4731)** (open, in progress).
- **[#4729](https://github.com/nearai/ironclaw/issues/4729)** — *NEAR AI login broken for local/desktop builds*: `private.near.ai` rejects non-private.near.ai `frontend_callback` values with HTTP 400. **No fix PR yet.** This blocks local development.
- **[#4741](https://github.com/nearai/ironclaw/issues/4741)** — *Reborn local-dev secret store: opaque "Invalid master key" on corrupt/low-entropy key file.* Un-actionable error message. **No fix PR yet.**
- **[#4740](https://github.com/nearai/ironclaw/issues/4740)** — *Slack tool: advertised `parameters_schema` only declares `action`* — other params (`channel`, `limit`, `text`, etc.) are untyped, causing models to guess wrong. **No fix PR yet.**

### 🟢 Low (UX / Polish)

- **[#4683](https://github.com/nearai/ironclaw/issues/4683)** — Generic "driver unavailable" error for invalid model config.
- **[#4704](https://github.com/nearai/ironclaw/issues/4704)** — `builtin.http` approval loop repeats after `invalid_input` failure without actionable details.
- **[#4701](https://github.com/nearai/ironclaw/issues/4701)** — Approval modal lacks context for `builtin.http` tool requests.
- **[#4706](https://github.com/nearai/ironclaw/issues/4706)** — Authorization flows don't recover after failed/cancelled sign-in.
- **[#4724](https://github.com/nearai/ironclaw/issues/4724)** — Unsent draft lost when leaving New Conversation.
- **[#4725](https://github.com/nearai/ironclaw/issues/4725)** — Composer remains interactive while in Working state.
- **[#4733](https://github.com/nearai/ironclaw/issues/4733)** — Clicking response links navigates away from active conversation.
- **[#4708](https://github.com/nearai/ironclaw/issues/4708)** — Code blocks lack syntax highlighting in WebUI.
- **[#4707](https://github.com/nearai/ironclaw/issues/4707)** — Conversation page font size too small.
- **[#4722](https://github.com/nearai/ironclaw/issues/4722)** — Conversation messages don't display user or assistant identity.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Likelihood of next version | Notes |
|---|---|---|
| **crates.io publishing** ([#3259](https://github.com/nearai/ironclaw/issues/3259)) | 🔴 Critical need | Security/CVE pressure; not a feature but a release pipeline fix |
| **Configuration-as-Code** ([#3036](https://github.com/nearai/ironclaw/issues/3036)) | 🟡 Medium-term | EPIC scope; foundational for enterprise use |
| **Programmatic MCP server config** ([#4735](https://github.com/nearai/ironclaw/pull/4735)) | 🟢 Likely soon | PR already open, additive changes |
| **Attachment UX in WebChat v2** ([#4738](https://github.com/nearai/ironclaw/pull/4738)) | 🟢 Likely soon | Backend already merged; frontend PR open |
| **Automations panel refactor** ([#4745](https://github.com/nearai/ironclaw/pull/4745)) | 🟢 Likely soon | PR open, clean refactor |
| **Extension activation gating on product auth** ([#4744](https://github.com/nearai/ironclaw/pull/4744)) | 🟢 Likely soon | PR open |
| **Trace Commons onboarding** ([#4559](https://github.com/nearai/ironclaw/pull/4559)) | 🟡 Medium-term | XL PR, agent-driven flow |
| **Reborn observability seams** ([#4588](https://github.com/nearai/ironclaw/pull/4588)) | 🟡 Medium-term | Enables external benchmarking tooling |

---

## 7. User Feedback Summary

**Dominant pain points from today's issues:**

1. **Local development experience is rough.** Multiple testers filed issues on the same day ([#4692](https://github.com/nearai/ironclaw/issues/4692) tracker) covering: opaque errors for corrupt secret keys ([#4741](https://github.com/nearai/ironclaw/issues/4741)), generic "driver unavailable" messages for config errors ([#4683](https://github.com/nearai/ironclaw/issues/4683)), broken NEAR AI login for local builds ([#4729](https://github.com/nearai/ironclaw/issues/4729)), and provider config that tests OK but won't save ([#4673](https://github.com/nearai/ironclaw/issues/4673)). **The onboarding funnel is leaking at multiple stages.**

2. **WebUI v2 UX is functional but unpolished.** A cluster of UX issues — small fonts ([#4707](https://github.com/nearai/ironclaw/issues/4707)), missing syntax highlighting ([#4708](https://github.com/nearai/ironclaw/issues/4708)), missing user/assistant identity ([#4722](https://github.com/nearai/ironclaw/issues/4722)), lost drafts ([#4724](https://github.com/nearai/ironclaw/issues/4724)), interactive composer during Working state ([#4725](https://github.com/nearai/ironclaw/issues/4725)), and links navigating away ([#4733](https://github.com/nearai/ironclaw/issues/4733)) — suggest the WebUI is in **beta-quality territory** and needs a focused polish pass.

3. **Tool approval UX is confusing.** Users don't get enough context to make informed approval decisions ([#4701](https://github.com/nearai/ironclaw/issues/4701)), and when tools fail, the error messages are not actionable ([#4704](https://github.com/nearai/ironclaw/issues/4704)).

4. **Positive signal:** The Slack DM end-to-end delivery PR ([#4730](https://github.com/nearai/ironclaw/pull/4730)) merging indicates the team is making tangible progress on the automation/delivery story, which is a key differentiator for IronClaw as a personal AI assistant.

---

## 8. Backlog Watch

Items needing maintainer attention:

| Item | Age | Risk |
|---|---|---|
| **[#3259](https://github.com/nearai/ironclaw/issues/3259)** — crates.io publishing gap | 37 days | **Security exposure** for downstream users; 14 comments with no resolution visible |
| **[#3036](https://github.com/nearai/ironclaw/issues/3036)** — Configuration-as-Code EPIC | 44 days | Important for enterprise adoption; needs scoping/owner assignment |
| **[#3708](https://github.com/nearai/ironclaw/pull/3708)** — Release PR (0.24.0 → 0.29.1) | 26 days | Open release PR with breaking changes in `ironclaw_common` and `ironclaw_skills`; needs review/merge to unblock crates.io publishing |
| **[#4703](https://github.com/nearai/ironclaw/issues/4703)** — NEAR AI provider works in test but not in conversation | 1 day | Blocks a core use case (NEAR AI as provider); no fix PR yet |
| **[#4729](https://github.com/nearai/ironclaw/issues/4729)** — NEAR AI login broken for local/desktop builds | 1 day | Blocks local development; likely needs coordination with `private.near.ai` team |

---

**Overall Health Assessment:** IronClaw is in an active development phase with strong PR throughput (22 merged/closed in 24h). The Reborn rewrite is clearly the center of gravity. The most critical gap is **release infrastructure** — the crates.io publishing pipeline needs immediate attention due to CVE exposure. The WebUI v2 is approaching feature completeness but needs a focused UX polish pass. Local developer experience is the biggest source of user friction and should be prioritized to reduce onboarding drop-off.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-11

---

## 1. Today's Overview

LobsterAI is in a high-velocity release cycle. In the past 24 hours the project merged **20 PRs** and shipped a new version (**2026.6.10**), with zero open issues — indicating strong maintainer responsiveness. The activity is heavily concentrated in three areas: **data migration/backup infrastructure**, **authentication improvements**, and a large batch of **stale PR cleanup** (14+ PRs originally opened in early April were finally merged or closed today). Two PRs remain open: a Windows-specific NSIS installer fix and a Dependabot Electron bump. Overall project health is excellent — fast iteration, no backlog of open issues, and a disciplined release cadence.

---

## 2. Releases

### LobsterAI 2026.6.10 — Released 2026-06-10

**Key changes:**

| Feature | PR | Author |
|---|---|---|
| **User data backup & restore** — full data migration tooling for backing up and restoring user data | [#2125](https://github.com/netease-youdao/LobsterAI/pull/2125) | fisherdaddy |
| **Local callback login flow** — new auth path for local OAuth/callback-based login | [#2122](https://github.com/netease-youdao/LobsterAI/pull/2122) | liuzhq1986 |
| **Settings: surface OpenClaw configuration** — exposes OpenClaw settings in the UI settings panel | (part of release PR [#2140](https://github.com/netease-youdao/LobsterAI/pull/2140)) | — |
| **Task completion notifications** — restore LobsterAI from system notifications when the main window is closed; macOS Notification Center click handling | [#2134](https://github.com/netease-youdao/LobsterAI/pull/2134) | liuzhq1986 |
| **Data migration fix** — preserve target backups, cowork sessions, runtimes, and MCP packages on restore | [#2138](https://github.com/netease-youdao/LobsterAI/pull/2138) | fisherdaddy |
| **UI polish** — refined markdown rendering, code block syntax highlighting (One Dark/Light), model selector styling | [#2139](https://github.com/netease-youdao/LobsterAI/pull/2139) | fisherdaddy |

**Migration notes:** Users performing data restore should update to 2026.6.10 before running a migration — the prior restore logic would overwrite existing backups, cowork sessions, runtime configs, and MCP packages. The fix in [#2138](https://github.com/netease-youdao/LobsterAI/pull/2138) makes restore non-destructive.

---

## 3. Project Progress

### Merged/Closed PRs (20 total, grouped by theme)

**🔐 Auth & Data Infrastructure**
- [#2122](https://github.com/netease-youdao/LobsterAI/pull/2122) — Local callback login flow (liuzhq1986)
- [#2125](https://github.com/netease-youdao/LobsterAI/pull/2125) — User data backup & restore (fisherdaddy)
- [#2138](https://github.com/netease-youdao/LobsterAI/pull/2138) — Fix data migration to preserve existing data on restore (fisherdaddy)

**🔔 Notifications & Task System**
- [#2134](https://github.com/netease-youdao/LobsterAI/pull/2134) — Task completion notification restore from closed-window state (liuzhq1986)
- [#1489](https://github.com/netease-youdao/LobsterAI/pull/1489) — Local macOS notification channel for scheduled tasks (BucleLiu)
- [#1490](https://github.com/netease-youdao/LobsterAI/pull/1490) — Fix delivery channel not updating after scheduled task edit (BucleLiu)
- [#1486](https://github.com/netease-youdao/LobsterAI/pull/1486) — "Test Task" button in scheduled task creation form (BucleLiu)

**🛠️ Stale PR Batch Merge (originally opened April 5–7, merged today)**
- [#1485](https://github.com/netease-youdao/LobsterAI/pull/1485) — Enforce disabled skills in system prompts (kayo5994)
- [#1497](https://github.com/netease-youdao/LobsterAI/pull/1497) — Windows "close button" behavior config: minimize to taskbar vs. quit (Yang1k)
- [#1499](https://github.com/netease-youdao/LobsterAI/pull/1499) — Session pruning to prevent context window overflow in long Cowork sessions (linlihua)
- [#1501](https://github.com/netease-youdao/LobsterAI/pull/1501) — Fix disabled skills remaining in `activeSkillIds` (MaoQianTu)
- [#1503](https://github.com/netease-youdao/LobsterAI/pull/1503) — Rich text Markdown editor for Agent identity/soul/user files (swuzjb)
- [#1505](https://github.com/netease-youdao/LobsterAI/pull/1505) — Sync `activeSkillIds` immediately after saving Agent skill list (MaoQianTu)
- [#1507](https://github.com/netease-youdao/LobsterAI/pull/1507) — Require POPO AES Key when bot is enabled (kayo5994)
- [#2139](https://github.com/netease-youdao/LobsterAI/pull/2139) — Markdown/code block/model selector UI polish (fisherdaddy)

**🔧 CI/Dependency Updates (Dependabot batch)**
- [#1491](https://github.com/netease-youdao/LobsterAI/pull/1491) — `actions/upload-artifact` v4 → v7
- [#1492](https://github.com/netease-youdao/LobsterAI/pull/1492) — `actions/setup-node` v4 → v6
- [#1493](https://github.com/netease-youdao/LobsterAI/pull/1493) — `softprops/action-gh-release` v1 → v2

---

## 4. Community Hot Topics

**No open issues exist** — the issue tracker is completely clear, which is exceptional for a project of this scale.

The most active area by PR volume is the **stale batch merge**: 14+ PRs from early April were resolved today, suggesting the maintainers ran a coordinated cleanup sprint. The most substantive discussions (by PR complexity) are:

- **Session pruning** [#1499](https://github.com/netease-youdao/LobsterAI/pull/1499) — addresses a critical UX gap where long Cowork sessions would hit context window limits and become unusable. This was a highly-requested parity feature with OpenClaw.
- **Data backup & restore** [#2125](https://github.com/netease-youdao/LobsterAI/pull/2125) + [#2138](https://github.com/netease-youdao/LobsterAI/pull/2138) — the largest single feature in this release (~6,900 insertions), indicating significant user demand for migration/portability tooling.

---

## 5. Bugs & Stability

**No new bugs or regressions reported today** (0 issues opened/updated).

Notable fixes shipped in this release:

| Severity | Bug | Fix PR |
|---|---|---|
| 🔴 High | Disabled skills still triggered in Cowork chat | [#1485](https://github.com/netease-youdao/LobsterAI/pull/1485), [#1501](https://github.com/netease-youdao/LobsterAI/pull/1501) |
| 🔴 High | Data restore overwrites existing backups, sessions, runtimes, MCP packages | [#2138](https://github.com/netease-youdao/LobsterAI/pull/2138) |
| 🟡 Medium | Scheduled task notification channel not updating after edit | [#1490](https://github.com/netease-youdao/LobsterAI/pull/1490) |
| 🟡 Medium | Agent skill list changes require Agent switch to take effect | [#1505](https://github.com/netease-youdao/LobsterAI/pull/1505) |
| 🟡 Medium | POPO bot enabled with empty AES Key | [#1507](https://github.com/netease-youdao/LobsterAI/pull/1507) |
| 🟢 Low | Windows update in-app broken | [#2141](https://github.com/netease-youdao/LobsterAI/pull/2141) |

---

## 6. Feature Requests & Roadmap Signals

Based on the trajectory of merged PRs, the following themes are likely to continue in upcoming releases:

1. **Windows platform parity** — PRs [#2142](https://github.com/netease-youdao/LobsterAI/pull/2142) (NSIS installer fix, still open) and [#1497](https://github.com/netease-youdao/LobsterAI/pull/1497) (close button behavior) show ongoing investment in Windows UX. Expect more Windows-specific polish.
2. **Scheduled task system maturation** — Three PRs merged in this area (test button, local notifications, edit sync). The notification and task infrastructure is being actively hardened.
3. **Agent configuration UX** — The rich text Markdown editor [#1503](https://github.com/netease-youdao/LobsterAI/pull/1503) and skill sync fix [#1505](https://github.com/netease-youdao/LobsterAI/pull/1505) suggest the Agent settings panel is undergoing a UX overhaul.
4. **Electron upgrade** — Dependabot PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (Electron 40 → 42) is still open; this will likely land in the next release cycle.

---

## 7. User Feedback Summary

**Pain points addressed in this release:**

- **"I lost all my data when restoring a backup"** → Fixed in [#2138](https://github.com/netease-youdao/LobsterAI/pull/2138). The restore process now preserves existing data.
- **"Disabled skills still run in my Cowork sessions"** → Fixed in [#1485](https://github.com/netease-youdao/LobsterAI/pull/1485) and [#1501](https://github.com/netease-youdao/LobsterAI/pull/1501). Skills disabled in settings are now properly excluded from system prompts and `activeSkillIds`.
- **"My long Cowork sessions crash with 'input too long'"** → Fixed in [#1499](https://github.com/netease-youdao/LobsterAI/pull/1499). Session pruning now automatically truncates history to fit model context windows.
- **"I can't tell if my scheduled task works without waiting"** → Fixed in [#1486](https://github.com/netease-youdao/LobsterAI/pull/1486). A "Test Task" button now allows immediate validation.
- **"I click the close button on Windows and the app quits instead of minimizing"** → Fixed in [#1497](https://github.com/netease-youdao/LobsterAI/pull/1497). Users can now configure close-to-taskbar behavior.

**Satisfaction signals:** The rapid batch merge of 14+ stale PRs suggests the team is actively closing the feedback loop. Zero open issues is a strong indicator of user satisfaction or at minimum, responsive triage.

---

## 8. Backlog Watch

| Item | Status | Age | Note |
|---|---|---|---|
| [#2142](https://github.com/netease-youdao/LobsterAI/pull/2142) — Fix NSIS destructive init & redesign engine loading page | 🟡 Open | 1 day | Windows installer issue; author is active (fisherdaddy). Likely to merge soon. |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Dependabot: Electron 40.2.1 → 42.3.3 | 🟡 Open | ~70 days | Electron major version bump. Stale but important for security/compatibility. Needs maintainer review and conflict resolution. |

**Recommendation:** The Electron bump [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) has been open for over two months and is a significant version jump (two major versions). It should be prioritized for the next release cycle to avoid falling further behind on the Electron release track.

---

*Data source: [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) | Digest generated by OWL for 2026-06-11*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-11

---

## 1. Today's Overview

Moltis saw minimal activity in the last 24 hours, with a single issue opened and no pull requests or new releases. The project appears to be in a quiet period, with no active code-level contributions landing today. The lone open issue is a minor configuration bug, suggesting the core platform is relatively stable at this time. Overall, the project's momentum is low but not alarming — it may simply reflect a lull between development cycles.

---

## 2. Releases

No new releases were published in the reporting window.

---

## 3. Project Progress

No PRs were merged or closed in the last 24 hours. No features advanced or were fixed during this period.

---

## 4. Community Hot Topics

With only one issue filed and zero PRs, there are no active community hot topics to highlight today. The project's discussion channels appear quiet.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| Minor | [#1114 — provider 'coqui' not configured](https://github.com/moltis-org/moltis/issues/1114) | Open | None |

**Analysis:** The sole bug report concerns the `coqui` provider not being recognized as configured. This is tagged as **minor** and has no comments or reactions yet. It likely affects users attempting to use the Coqui TTS/voice provider and may stem from a configuration parsing gap or a documentation shortfall. No fix PR has been opened.

---

## 6. Feature Requests & Roadmap Signals

No new feature requests were filed in the last 24 hours. Given the quiet period, no near-term roadmap predictions can be drawn from today's data alone.

---

## 7. User Feedback Summary

The only user signal today is the `coqui` provider configuration bug filed by user **vvuk**. The issue is well-structured (preflight checklist completed, version confirmed up-to-date), suggesting an engaged and technically competent user base. There is no broader satisfaction or dissatisfaction trend to assess from a single minor bug report.

---

## 8. Backlog Watch

- **[#1114 — provider 'coqui' not configured](https://github.com/moltis-org/moltis/issues/1114)** — Opened 2026-06-10, 0 comments, 0 reactions. This issue has gone unanswered for over 24 hours. While minor, it would benefit from a maintainer triage (even a clarifying comment or documentation pointer) to signal responsiveness to the community.

---

*Generated by OWL — Project intelligence, distilled.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-11

**Repository:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) (QwenPaw)

---

## 1. Today's Overview

CoPaw is in a highly active development phase with **37 issues** and **50 PRs** updated in the last 24 hours, signaling a large and engaged contributor base pushing rapid iteration. Two new releases shipped today — **v1.1.11** (stable) and **v1.1.11-beta.3** — indicating the project is on a roughly weekly release cadence. The activity is heavily weighted toward bug fixes, build/packaging stability (especially Windows), and infrastructure modernization (Runtime 2.0, Agent OS Driver). A major breaking-change migration to AgentScope 2.0 is being tracked as a high-priority open issue. Overall project health is strong: high merge velocity (30 PRs closed/merged vs. 20 still open) suggests maintainers are keeping up with the influx.

---

## 2. Releases

### v1.1.11 (stable) — [PR #5080](https://github.com/agentscope-ai/CoPaw/pull/5080)

**✨ New Features**
- **Free Model OAuth**: Zero-config free models with one-click OAuth authentication ([#5049](https://github.com/agentscope-ai/CoPaw/pull/5049))
- **Xiaomi MiMo Provider**: Added as a built-in provider ([#4722](https://github.com/agentscope-ai/CoPaw/pull/4722))
- **Enhanced `make-skill` flow**: Supports self-evolving skill creation ([#4857](https://github.com/agentscope-ai/CoPaw/pull/4857))
- **Agent-scoped Web Console accounts**: Per-agent login credentials for multi-user deployments ([#4858](https://github.com/agentscope-ai/CoPaw/pull/4858))
- **File guard preview**: Allows previewing files outside the workspace in file guard ([#5081](https://github.com/agentscope-ai/CoPaw/pull/5081))

**🔧 Fixes**
- Surface original API error reason in user-facing messages instead of generic errors ([#5079](https://github.com/agentscope-ai/CoPaw/pull/5079))
- Pin `aiohttp<=3.14.0` to fix Windows build SSL errors ([#5082](https://github.com/agentscope-ai/CoPaw/pull/5082))
- Use certifi CA bundle for Windows build verification ([#5083](https://github.com/agentscope-ai/CoPaw/pull/5083))
- Compile-check discord after conda-unpack for Windows packaging ([#5084](https://github.com/agentscope-ai/CoPaw/pull/5084))

### v1.1.11-beta.3
- CI cleanup: removed redundant channel-tests workflow ([#5056](https://github.com/agentscope-ai/CoPaw/pull/5056))
- Same `make-skill` self-evolving skill creation enhancement

**⚠️ Breaking Change Tracked (Not Yet Shipped)**
- [#4727](https://github.com/agentscope-ai/CoPaw/issues/4727) — Migration from AgentScope 1.x to AgentScope 2.0 is planned. This will change backend architecture, APIs, and runtime model. Users should monitor this issue for migration guidance.

---

## 3. Project Progress

### Merged/Closed PRs (Key Highlights)

| PR | Description |
|---|---|
| [#5080](https://github.com/agentscope-ai/CoPaw/pull/5080) | **v1.1.11 release** — stable channel |
| [#5079](https://github.com/agentscope-ai/CoPaw/pull/5079) | **Better error messages** — original API error reason now shown inline to users |
| [#5081](https://github.com/agentscope-ai/CoPaw/pull/5081) | **File guard enhancement** — preview files outside workspace |
| [#5082](https://github.com/agentscope-ai/CoPaw/pull/5082) | **Windows build fix** — pin aiohttp to avoid SSL errors on CI |
| [#5083](https://github.com/agentscope-ai/CoPaw/pull/5083) | **Windows build fix** — use certifi CA bundle |
| [#5084](https://github.com/agentscope-ai/CoPaw/pull/5084) | **Windows packaging** — compile-check discord after conda-unpack |
| [#4858](https://github.com/agentscope-ai/CoPaw/pull/4858) | **Auth** — agent-scoped web login accounts |
| [#3721](https://github.com/agentscope-ai/CoPaw/pull/3721) | **Chore** — merge v1.1.3.post1 bugfix into main |

### Open PRs Worth Watching

| PR | Description |
|---|---|
| [#5078](https://github.com/agentscope-ai/CoPaw/pull/5078) | **Runtime 2.0** — modular architecture with ToolCoordinator for fine-grained tool-call lifecycle control |
| [#5067](https://github.com/agentscope-ai/CoPaw/pull/5067) | **Agent OS Driver** — unified abstraction for MCP/A2A/ACP external capabilities |
| [#4622](https://github.com/agentscope-ai/CoPaw/pull/4622) | **DataPaw plugin** — data-analysis plugin with 12 BI skills |
| [#4433](https://github.com/agentscope-ai/CoPaw/pull/4433) | **Token usage visibility** — per-turn usage, context-window estimation, floating TokenUsageBadge |
| [#5051](https://github.com/agentscope-ai/CoPaw/pull/5051) | **Desktop fix** — persist backend port across restarts to preserve localStorage |
| [#5036](https://github.com/agentscope-ai/CoPaw/pull/5036) | **Desktop fix** — resolve session filename duplication and inter-agent call failures |
| [#4669](https://github.com/agentscope-ai/CoPaw/pull/4669) | **Tauri auto-updater** — desktop auto-update flow |

---

## 4. Community Hot Topics

### Most Discussed Issues

1. **[#4342](https://github.com/agentscope-ai/CoPaw/issues/4342)** — Backend unit test coverage Phase 5 (11 comments, CLOSED)
   - Comprehensive test coverage push for `local_models/`, `providers/`, `tunnel/`, `utils/`. Reflects a maturing project investing in quality infrastructure.

2. **[#4727](https://github.com/agentscope-ai/CoPaw/issues/4727)** — Migrate backend from AgentScope 1.x to 2.0 (8 comments, 👍2, OPEN)
   - **The most strategically important open issue.** AgentScope 2.0 is released and CoPaw needs to migrate. This is a breaking change that will affect all users. High community interest.

3. **[#4878](https://github.com/agentscope-ai/CoPaw/issues/4878)** — WeChat channel delivery failure for scheduled tasks (7 comments, CLOSED)
   - Root cause identified in `channel.py` `to_handle_from_target` logic. A real integration pain point for WeChat users.

4. **[#4666](https://github.com/agentscope-ai/CoPaw/issues/4666)** — Models config page lost after new session (7 comments, CLOSED)
   - UI state management regression. Users lose model configuration and must restart.

5. **[#4989](https://github.com/agentscope-ai/CoPaw/issues/4989)** — Local Qwen3.6-27B model unresponsive in v1.1.9/1.1.10 (5 comments, CLOSED)
   - Regression from v1.1.5 to v1.1.9 for local vLLM-deployed models. No error logs — silent failure.

6. **[#5064](https://github.com/agentscope-ai/CoPaw/issues/5064)** — Agent-created scheduled tasks can't trigger or be edited (5 comments, OPEN)
   - New issue today. Tasks generated by agents are non-functional — can't auto-trigger or manually edit.

### Underlying Needs Analysis
- **Reliability of local model deployments** is a recurring pain point (multiple issues across versions)
- **Windows desktop experience** is a major focus area — packaging, port persistence, session management, UI rendering
- **Multi-channel delivery** (WeChat, DingTalk) needs more robust error handling and testing
- **Agent-scoped security and multi-tenancy** is emerging as a real deployment need

---

## 5. Bugs & Stability

### 🔴 High Severity

| Issue | Description | Fix Status |
|---|---|---|
| **[#4989](https://github.com/agentscope-ai/CoPaw/issues/4989)** | Local vLLM models (Qwen3.6-27B) completely unresponsive in v1.1.9/1.1.10 — silent failure, no logs | CLOSED (fix likely in v1.1.11) |
| **[#5064](https://github.com/agentscope-ai/CoPaw/issues/5064)** | Agent-created scheduled tasks don't trigger and can't be edited | OPEN — no fix PR yet |
| **[#5052](https://github.com/agentscope-ai/CoPaw/issues/5052)** | Tool calls fail after a few rounds with `unexpected keyword argument 'arguments'` | OPEN — no fix PR yet |

### 🟡 Medium Severity

| Issue | Description | Fix Status |
|---|---|---|
| **[#4666](https://github.com/agentscope-ai/CoPaw/issues/4666)** | Models config page lost after new session, "Load failed" error | CLOSED |
| **[#4878](https://github.com/agentscope-ai/CoPaw/issues/4878)** | WeChat delivery fails for scheduled tasks | CLOSED |
| **[#5031](https://github.com/agentscope-ai/CoPaw/issues/5064)** | Skill slash invocation shows expanded SKILL.md content in Console | OPEN |
| **[#5053](https://github.com/agentscope-ai/CoPaw/issues/5053)** | Windows Tauri desktop: 10+ second lag when switching between 4+ session tabs | OPEN |
| **[#4865](https://github.com/agentscope-ai/CoPaw/issues/4865)** | `write_file` content not streamed — UI appears frozen during long generation | OPEN |

### 🟢 Low Severity / Cosmetic

| Issue | Description | Fix Status |
|---|---|---|
| **[#4993](https://github.com/agentscope-ai/CoPaw/issues/4993)** | Image preview jitter when dragging zoomed images | CLOSED |
| **[#4777](https://github.com/agentscope-ai/CoPaw/issues/4777)** | Shell command execution pops up cmd window on Windows desktop | CLOSED |
| **[#4800](https://github.com/agentscope-ai/CoPaw/issues/4800)** | `/skills` command fails on first input, errors on second | CLOSED |

---

## 6. Feature Requests & Roadmap Signals

### Likely in Next 1-2 Releases

| Request | Issue | Signal Strength |
|---|---|---|
| **Token usage dashboard** | [#4433](https://github.com/agentscope-ai/CoPaw/pull/4622) (PR in review) | 🟢 High — PR is under active review |
| **Desktop auto-updater (Tauri)** | [#4669](https://github.com/agentscope-ai/CoPaw/pull/4669) (PR open) | 🟢 High — PR in progress |
| **DataPaw analytics plugin** | [#4622](https://github.com/agentscope-ai/CoPaw/pull/4622) (PR in review) | 🟡 Medium — under review |
| **Agent OS Driver (MCP/A2A/ACP)** | [#5067](https://github.com/agentscope-ai/CoPaw/pull/5067) (PR open) | 🟡 Medium — just opened, architectural |
| **Runtime 2.0 modular architecture** | [#5078](https://github.com/agentscope-ai/CoPaw/pull/5078) (PR open) | 🟡 Medium — just opened, large scope |

### Community-Requested (No PR Yet)

| Request | Issue | Notes |
|---|---|---|
| **Visual Model Fallback** — independent vision model config | [#4992](https://github.com/agentscope-ai/CoPaw/issues/4992) (👍1) | Allows text-only models to handle images via a separate vision model |
| **Headroom context compression** — 60-95% token reduction | [#5063](https://github.com/agentscope-ai/CoPaw/issues/5063) | Integration of external compression layer |
| **Sub-agent runtime visibility** | [#4923](https://github.com/agentscope-ai/CoPaw/issues/4923) | Can't see what spawned sub-agents are doing in real-time |
| **DingTalk custom endpoint** for private deployments | [#4887](https://github.com/agentscope-ai/CoPaw/issues/4887) | Enterprise deployment need |
| **Windows system tray** support | [#3751](https://github.com/agentscope-ai/CoPaw/issues/3751) | Desktop UX improvement |
| **AgentScope tracing integration** | [#4057](https://github.com/agentscope-ai/CoPaw/issues/4057) | Observability for agent behavior |

---

## 7. User Feedback Summary

### Pain Points

- **Local model regression**: Users report that local vLLM models that worked in v1.1.5 broke silently in v1.1.9/1.1.10 with no error logs ([#4989](https://github.com/agentscope-ai/CoPaw/issues/4989)). This is the most damaging type of bug — silent failure with no diagnostic information.
- **Windows desktop experience is rough**: Multiple issues — cmd windows popping up ([#4777](https://github.com/agentscope-ai/CoPaw/issues/4777)), session switching lag with 4+ tabs ([#5053](https://github.com/agentscope-ai/CoPaw/issues/5053)), localStorage reset on restart ([#4733](https://github.com/agentscope-ai/CoPaw/issues/4733)), session filename duplication ([#4988](https://github.com/agentscope-ai/CoPaw/issues/4988)). The Windows desktop app needs a dedicated stabilization sprint.
- **Tool call reliability**: After a few rounds of tool calls, all tools start failing with `unexpected keyword argument 'arguments'` ([#5052](https://github.com/agentscope-ai/CoPaw/issues/5052)). This is a critical regression for agent workflows.
- **UI responsiveness**: Long-running `write_file` operations appear to freeze the UI ([#4865](https://github.com/agentscope-ai/CoPaw/issues/4865)). Chat interface hangs with large histories ([#4917](https://github.com/agentscope-ai/CoPaw/issues/4917), [#4213](https://github.com/agentscope-ai/CoPaw/issues/4213)).
- **Agent action visibility**: Users can't see what agents are doing until all actions complete ([#4170](https://github.com/agentscope-ai/CoPaw/issues/4170)), and sub-agent contents are invisible during execution ([#4923](https://github.com/agentscope-ai/CoPaw/issues/4923)).

### Positive Signals
- **Free Model OAuth** is a strong UX improvement — one-click authentication for free models lowers the barrier to entry.
- **Agent-scoped web login** ([#4858](https://github.com/agentscope-ai/CoPaw/pull/4858)) addresses real multi-user deployment needs.
- **Better error messages** ([#5079](https://github.com/agentscope-ai/CoPaw/pull/5079)) directly addresses user frustration with opaque failures.
- Active community with many first-time contributors getting PRs merged.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Why It Matters |
|---|---|---|
| **[#4727](https://github.com/agentscope-ai/CoPaw/issues/4727)** — AgentScope 2.0 migration | 15 days | **Breaking change** with wide impact. Needs a clear migration timeline and communication plan. 8 comments, 👍2. |
| **[#5064](https://github.com/agentscope-ai/CoPaw/issues/5064)** — Agent-created scheduled tasks broken | 1 day | New high-impact bug. Scheduled tasks created by agents are completely non-functional. Needs triage. |
| **[#5052](https://github.com/agentscope-ai/CoPaw/issues/5052)** — Tool call degradation after few rounds | 2 days | Affects all agent workflows using tools. Needs root cause analysis. |
| **[#4057](https://github.com/agentscope-ai/CoPaw/issues/4057)** — AgentScope tracing support | 36 days | Users want observability. Low effort to add `agentscope.init()` hook. |
| **[#3751](https://github.com/agentscope-ai/CoPaw/issues/3751)** — Windows system tray | 49 days | Frequently requested desktop UX improvement. |
| **[#4356](https://github.com/agentscope-ai/CoPaw/issues/4356)** — File guard granular control (read-only paths) | 28 days | Security feature request from power users. |

### Stale PRs at Risk of Going Stale

| PR | Age | Notes |
|---|---|---|
| [#4433](https://github.com/agentscope-ai/CoPaw/pull/4433) — Token usage badge | 27 days | Under review but needs a decision |
| [#4622](https://github.com/agentscope-ai/CoPaw/pull/4622) — DataPaw plugin | 20 days | Under review, first-time contributor |
| [#4669](https://github.com/agentscope-ai/CoPaw/pull/4669) — Tauri auto-updater | 17 days | Depends on prior PR #3813 |

---

*Generated by OWL — 2026-06-11*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-11

---

## 1. Today's Overview

ZeroClaw remains in a highly active development phase with **41 issues** and **50 pull requests** updated in the last 24 hours, signaling a large and engaged contributor base working toward the v0.8.x release cycle. No new releases were published today, but the project is clearly in a heavy integration and stabilization window — 19 PRs were merged/closed and 19 issues were resolved, indicating strong maintainer throughput. The activity is concentrated around **MCP tooling**, **runtime/agent correctness**, **gateway/web dashboard fixes**, and **provider security hardening**. Multiple RFCs and tracker issues point to architectural decisions being actively debated for v0.8.0–v0.8.2. Overall project health is robust: high volume, fast closure rate, and no stale release bottleneck.

---

## 2. Releases

**No new releases today.** The project appears to be accumulating changes toward a future v0.8.0 stable release, with several release-gate and tracker issues still open (see Backlog Watch).

---

## 3. Project Progress

### Merged / Closed PRs (notable)

| PR | Summary |
|---|---|
| [#7444](https://github.com/zeroclaw-labs/zeroclaw/pull/7444) | **zerocode Dashboard** now correctly distinguishes loading, error, and live/persisted states — fixes misleading UI that previously labeled history as active sessions. |
| [#7365](https://github.com/zeroclaw-labs/zeroclaw/pull/7365) | **Documentation overhaul**: mdBook reworked with numbered child pages; provider/config surfaces now derived from source. (DO NOT MERGE — author-controlled stack base.) |
| [#7466](https://github.com/zeroclaw-labs/zeroclaw/pull/7466) | **CI fix**: restored `master` compile after a merge batch broke channel test builds. |
| [#7458](https://github.com/zeroclaw-labs/zeroclaw/pull/7458) | **CI revert**: removed cross-platform Clippy lint gate (reverting #7428) to avoid blocking routine PRs with extra macOS/Windows Clippy jobs. |

### Key Open PRs Advancing

| PR | Summary |
|---|---|
| [#7464](https://github.com/zeroclaw-labs/zeroclaw/pull/7464) | **MCP usability**: makes configured MCP servers usable by default; enables eager schema loading by default. Directly addresses the pain point in [#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721). |
| [#7456](https://github.com/zeroclaw-labs/zeroclaw/pull/7456) | **MCP security**: applies `ToolAccessPolicy` to eager MCP registration, closing a policy gap between eager and deferred MCP discovery paths. |
| [#7442](https://github.com/zeroclaw-labs/zeroclaw/pull/7442) | **SubAgent reliability**: exempts `spawn_subagent`/`delegate` from the per-turn duplicate-call guard so parallel fan-out works correctly. |
| [#7433](https://github.com/zeroclaw-labs/zeroclaw/pull/7433) | **Provider config hot-refresh**: active sessions now rebuild provider wiring after config edits without requiring a daemon restart. |
| [#7430](https://github.com/zeroclaw-labs/zeroclaw/pull/7430) | **Runtime refactor**: replaces daemon subsystem callbacks with a typed `DaemonRegistry` for chainable, type-checked startup hooks. |
| [#7419](https://github.com/zeroclaw-labs/zeroclaw/pull/7419) | **Provider security**: fallback providers now fail loudly when they can't supply required credentials, instead of silently degrading. |
| [#7351](https://github.com/zeroclaw-labs/zeroclaw/pull/7351) | **MCP auto-reconnect**: handles stale sessions and dropped SSE streams without requiring a daemon restart. |
| [#7454](https://github.com/zeroclaw-labs/zeroclaw/pull/7454) | **WASM plugin**: adds `office-tools` reference plugin for Office document extraction (DOCX, XLSX, PPTX, etc.) — early signal of the v0.8.2 WASM plugin program. |

---

## 4. Community Hot Topics

### Most Discussed Issues

1. **[#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)** — *"A better LOGO of Zerocaw"* (20 comments, 👍2) — Closed. A community design discussion with 20 comments, reflecting community identity investment. Low risk, blocked, needs author action.

2. **[#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)** — *"Provide a 'full' docker image"* (12 comments, 👍3) — Open, blocked. Users want a Docker image with all feature flags (e.g., WhatsApp) enabled by default to lower the barrier to entry for non-technical users. This is a recurring onboarding friction point.

3. **[#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034)** — *"Single-turn and multi-turn conversations lose user messages"* (6 comments) — Open, P1. A critical runtime bug where user messages are silently dropped, causing 400 Bad Request errors from providers. Affects core chat reliability.

4. **[#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721)** — *"`tool_search` not in `default_auto_approve` → deferred_loading+webhook silently hangs 120s then auto-denies"* (5 comments) — Open, P1. MCP tool discovery silently fails in non-interactive/webhook mode. **PR [#7464](https://github.com/zeroclaw-labs/zeroclaw/pull/7464) directly addresses this.**

5. **[#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)** — *"RFC: Prefer a lighter ZeroClaw core through external integrations"* (4 comments) — Open, blocked. Proposes removing built-in integrations (GWS, Jira, GitHub) in favor of skill-based approaches. Architectural debate about core bloat vs. extensibility.

### Underlying Needs
- **MCP is a major pain point**: multiple high-priority issues and PRs converge on MCP usability, auto-approval, auto-reconnect, and policy consistency. The community is clearly adopting MCP heavily and hitting rough edges.
- **Onboarding friction**: Docker image requests, documentation gaps, and installation UX issues signal that ZeroClaw's power comes with a steep setup curve.
- **Architectural direction**: RFCs on plugin systems, core unification, and WASM suggest the project is at an inflection point for its extensibility model.

---

## 5. Bugs & Stability

### Critical / High Severity (P1)

| Issue | Severity | Status | Fix PR? |
|---|---|---|---|
| [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) — User messages lost in conversation | S1 — workflow blocked | Open, accepted | ❌ No PR yet |
| [#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) — `tool_search` not auto-approved, webhook hangs 120s | S1 — workflow blocked | Open, accepted | ✅ [#7464](https://github.com/zeroclaw-labs/zeroclaw/pull/7464) |
| [#7263](https://github.com/zeroclaw-labs/zeroclaw/issues/7263) — Subagents don't inherit `cwd` in ACP sessions | S1 — workflow blocked | Open, accepted | ❌ No PR yet |
| [#7436](https://github.com/zeroclaw-labs/zeroclaw/issues/7436) — `image_info` tool output doesn't reach vision models | S2 — degraded | Open | ❌ No PR yet |
| [#6309](https://github.com/zeroclaw-labs/zeroclaw/issues/6309) — `model_routing_config` stomps `schema_version=2` settings | S2 — degraded | Closed, blocked, needs author action | ❌ Needs author |

### Medium Severity (P2)

| Issue | Status | Fix PR? |
|---|---|---|
| [#7376](https://github.com/zeroclaw-labs/zeroclaw/issues/7376) — Dashboard hides error states, labels history as active | Closed | ✅ [#7444](https://github.com/zeroclaw-labs/zeroclaw/pull/7444) merged |
| [#6722](https://github.com/zeroclaw-labs/zeroclaw/issues/6722) — `MemoryConfig.rerank_enabled` scaffolded but no consumer | Closed | ✅ Addressed |
| [#6958](https://github.com/zeroclaw-labs/zeroclaw/issues/6958) — Matrix session keyed on event_id causes amnesia | Closed | ✅ Fixed |
| [#7409](https://github.com/zeroclaw-labs/zeroclaw/issues/7409) — Clippy lint gate is Linux-only, Windows/macOS code never linted | Closed | ✅ [#7458](https://github.com/zeroclaw-labs/zeroclaw/pull/7458) |

### New Bugs Reported Today

| Issue | Severity |
|---|---|
| [#7469](https://github.com/zeroclaw-labs/zeroclaw/issues/7469) — Default editor is "vi" but container doesn't include it | S3 — minor |

---

## 6. Feature Requests & Roadmap Signals

### Likely for v0.8.0 (current release queue, [#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112))

- **MCP default-enable and eager loading** ([#7464](https://github.com/zeroclaw-labs/zeroclaw/pull/7464)) — near-merge, directly unblocks [#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721).
- **Provider config hot-refresh** ([#7433](https://github.com/zeroclaw-labs/zeroclaw/pull/7433)) — active sessions rebuilding without restart.
- **MCP policy parity** ([#7456](https://github.com/zeroclaw-labs/zeroclaw/pull/7456)) — security hardening for eager MCP registration.
- **SubAgent/ACP `cwd` inheritance** ([#7263](https://github.com/zeroclaw-labs/zeroclaw/issues/7263)) — P1, no PR yet but likely needed for stable.

### Likely for v0.8.1 ([#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970))

- **Pre-turn routing intent extraction** ([#7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431)) — natural language `send_via` detection before LLM call.
- **Unified agent turn engines** ([#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)) — RFC to consolidate three duplicate turn loop implementations.

### Likely for v0.8.2 ([#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314))

- **WASM plugin system** — [#7454](https://github.com/zeroclaw-labs/zeroclaw/pull/7454) is an early reference implementation; [#7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420) is the RFC for a native dynamic-library plugin system.
- **MCP auto-reconnect** ([#7351](https://github.com/zeroclaw-labs/zeroclaw/pull/7351)) — resilience for remote MCP servers.

### Longer-term / Architectural

- **Lighter core via external integrations** ([#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)) — RFC, blocked, would be a significant architectural shift.
- **Full Docker image** ([#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)) — blocked, needs CI/CD container build pipeline ([#5908](https://github.com/zeroclaw-labs/zeroclaw/issues/5908)).

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence |
|---|---|
| **MCP is powerful but fragile** | [#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721), [#7351](https://github.com/zeroclaw-labs/zeroclaw/pull/7351), [#7464](https://github.com/zeroclaw-labs/zeroclaw/pull/7464) — auto-approval gaps, silent hangs, dropped streams. Users adopting MCP hit multiple rough edges simultaneously. |
| **Onboarding is hard** | [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) (full Docker image), [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) (installation docs), [#6760](https://github.com/zeroclaw-labs/zeroclaw/issues/6760) (Docker docs), [#7469](https://github.com/zeroclaw-labs/zeroclaw/issues/7469) (missing `vi` in container). Non-technical users struggle with setup. |
| **Core chat reliability** | [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) (lost messages) — this is a fundamental trust issue. If messages disappear, the agent is unusable. |
| **Subagent/ACP workflows** | [#7263](https://github.com/zeroclaw-labs/zeroclaw/issues/7263) (cwd not inherited) — users building multi-agent development patterns hit environment issues. |
| **zerocode TUI UX** | [#7467](https://github.com/zeroclaw-labs/zeroclaw/issues/7467), [#7468](https://github.com/zeroclaw-labs/zeroclaw/issues/7468), [#7469](https://github.com/zeroclaw-labs/zeroclaw/issues/7469) — string editing, alias renaming, missing editor. The TUI is functional but has rough edges in interactive editing. |

### Satisfaction Signals
- Active community logo design discussion ([#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)) shows identity investment.
- Multiple community-authored RFCs ([#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165), [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415), [#7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420)) indicate deep engagement with architecture.
- High PR merge rate (19 closed today) suggests contributors feel their work is being reviewed and landed.

---

## 8. Backlog Watch

### Important Issues Needing Maintainer Attention

| Issue | Age | Why It Matters |
|---|---|---|
| **[#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034)** — User messages lost in conversation | ~70 days, P1 | Core chat reliability bug with no PR. S1 severity. This should be a top priority. |
| **[#7263](https://github.com/zeroclaw-labs/zeroclaw/issues/7263)** — Subagents don't inherit `cwd` in ACP sessions | ~6 days, P1 | Blocks subagent-driven development workflows. No PR yet despite being accepted. |
| **[#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)** — Full Docker image | ~88 days, blocked | Recurring request with 👍3 and 12 comments. Blocked on CI/CD pipeline work ([#5908](https://github.com/zeroclaw-labs/zeroclaw/issues/5908), also 63 days old). This is a persistent onboarding barrier. |
| **[#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)** — RFC: Lighter core via external integrations | ~45 days, blocked | Architectural RFC with no resolution. Needs maintainer ratification or closure. |
| **[#7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420)** — RFC: Native Dynamic-Library Plugin System | ~2 days, needs-maintainer-review | Fresh RFC, needs review. Related to v0.8.2 WASM plugin direction. |
| **[#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)** — RFC: Unify three agent turn engines | ~2 days, needs-maintainer-review | Fresh RFC addressing code duplication in core agent loop. Important for maintainability. |
| **[#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)** — v0.8.0 release queue tracker | ~9 days | No comments. Needs active curation — what's actually blocking v0.8.0 stable? |

### PRs Needing Author Action

| PR | Note |
|---|---|
| [#7351](https://github.com/zeroclaw-labs/zeroclaw/pull/7351) — MCP auto-reconnect | `needs-author-action` label; important resilience fix. |
| [#6309](https://github.com/zeroclaw-labs/zeroclaw/issues/6309) — model_routing_config schema stomp | Closed but `needs-author-action`; may need reopening. |

---

*Data source: github.com/zeroclaw-labs/zeroclaw — snapshot 2026-06-11. Generated by OWL.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*