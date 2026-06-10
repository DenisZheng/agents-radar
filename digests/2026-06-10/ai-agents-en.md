# OpenClaw Ecosystem Digest 2026-06-10

> Issues: 453 | PRs: 496 | Projects covered: 13 | Generated: 2026-06-10 00:42 UTC

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

# OpenClaw Project Digest — 2026-06-10

---

## 1. Today's Overview

OpenClaw is operating at exceptionally high throughput: **453 issues** and **496 PRs** updated in the last 24 hours, with 315 active issues and 352 open PRs. Two new releases shipped today — **v2026.6.5** (stable) and **v2026.6.5-beta.6** — both focused on message delivery hygiene (stripping model reasoning scaffolding from QQBot, MCP tool result coercion). The project is clearly in a stabilization phase heading into mid-2026, with heavy investment in QA infrastructure (multiple PRs adding scorecard taxonomy validation, mapped QA run profiles, and evidence normalization). The volume of stale, maintainer-review-flagged issues (many tagged `clawsweeper:no-new-fix-pr`) suggests a significant backlog that is straining maintainer bandwidth.

---

## 2. Releases

### v2026.6.5 (stable) & v2026.6.5-beta.6

**Highlights:**
- **QQBot reasoning leak fix**: Model `<thinking>` scaffolding is now stripped before native delivery, preventing raw reasoning content from leaking into channel replies. (#89913, #90132) Thanks @openperf.
- **MCP tool result coercion**: MCP tool results now coerce `resource_link`, `resource`, `audio`, malformed image, and future non-standard content types into a safe format before delivery.

**Migration notes:** No breaking changes identified. Users on QQBot channels should upgrade to prevent reasoning-artifact leakage. MCP-heavy setups should see fewer malformed-content errors.

---

## 3. Project Progress

Several significant PRs were **merged/closed** today:

| PR | Description |
|---|---|
| **#91787** | fix(doctor): keep TTS legacy migration on supported paths — prevents `openclaw doctor` from rewriting unsupported TTS config blocks |
| **#91782** | Superseded by #91784 (voice-call realtime WebSocket path boundary fix) |
| **#91757** | fix(config): clarify retired `skill-workshop` plugin warning to point users to current built-in surfaces |
| **#91750** | fix(search): enforce native web search tool policy — gates OpenAI/Codex `web_search` behind full tool policy layer checks |

**Key features advancing (open, ready for maintainer review):**
- **#87893** — Repair stale auto runtime auth selection so Control UI sessions don't inherit fallback auth as a real user choice.
- **#84792** — Run memory flush before preflight compaction, preventing context loss during compaction cycles.
- **#84540** — Emit throttled `run.progress` diagnostic events during CLI stdout, preventing false stuck-session watchdog aborts on long reasoning turns.
- **#91747** — Validate discovered CDP WebSocket URLs against endpoint policy before returning to downstream consumers (browser security hardening).
- **#91770** — Abort memory search embeddings on tool timeout via `AbortSignal`, fixing #91718.

---

## 4. Community Hot Topics

The most-commented issues reveal deep, recurring pain points around **message delivery reliability** and **session state integrity**:

1. **[#25592](https://github.com/openclaw/openclaw/issues/25592)** — *Text between tool calls leaks to messaging channels* (29 comments, 👍1) — The most-discussed issue. Internal agent narration, error handling text, and processing acknowledgments are being routed to Slack, iMessage, etc. as visible messages. This is a fundamental UX problem affecting all channel types. Tagged `impact:security` and `impact:message-loss`.

2. **[#88312](https://github.com/openclaw/openclaw/issues/88312)** — *Codex app-server turn-completion stall regression* (15 comments, 👍3) — Multi-tool agent turns reliably fail with "Codex stopped before confirming the turn was complete" starting in 2026.5.27. A regression of a previously fixed issue (#84076).

3. **[#87307](https://github.com/openclaw/openclaw/issues/87307)** — *Matrix thread replies sent as normal replies* (14 comments, 👍1) — Bot answers in Matrix are posted as flat replies instead of threaded responses after upgrading to 2026.5.22. `/status` and `/model` commands also go silent.

4. **[#54253](https://github.com/openclaw/openclaw/issues/54253)** — *"LLM Request Failed" on RISC-V64* (13 comments, 👍4) — OpenClaw installs successfully on RISC-V64 but fails at runtime. Highest reaction count in the top issues, suggesting strong community interest in architecture portability.

5. **[#53628](https://github.com/openclaw/openclaw/issues/53628)** — *`${XDG_CONFIG_HOME}` not processed during skill install* (13 comments, 👍1) — Docker users with custom XDG paths cannot install skills via clawhub.

**Underlying needs:** The community is signaling that **message routing correctness** (what gets delivered to channels vs. what stays internal) is the single most critical quality issue. Session state regressions on the Codex app-server path are a close second. Architecture portability (RISC-V64) and Docker/XDG compliance represent underserved user segments.

---

## 5. Bugs & Stability

Ranked by severity (P1 security/crash-loop > P1 regression > P2 behavior):

### 🔴 Critical (P1 — Security / Crash Loop / Message Loss)

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | P1 🔒 | Text between tool calls leaks to channels | Open, linked PR |
| [#44905](https://github.com/openclaw/openclaw/issues/44905) | P1 🔒 | Discord leaks internal tool-call traces (NO_REPLY, commentary, raw JSON) | Open |
| [#31331](https://github.com/openclaw/openclaw/issues/31331) | P1 🔒 | Docker + Sandbox workspaceAccess completely broken | Open, linked PR |
| [#89315](https://github.com/openclaw/openclaw/issues/89315) | P1 💥 | Gateway heap grows unbounded, OOM-killed on long-running Linux systemd deployments (👍3) | None |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) | P1 💥 | Active Memory + Codex path causes hook timeouts, startup aborts, event-loop stalls | None |
| [#83184](https://github.com/openclaw/openclaw/issues/83184) | P1 | Heartbeat replies leave `pendingFinalDelivery` stuck, blocking subsequent heartbeats (👍3) | Open, linked PR |
| [#84569](https://github.com/openclaw/openclaw/issues/84569) | P1 | WhatsApp session stalls on long model calls, reply never delivered (👍3) | Open, linked PR |
| [#56096](https://github.com/openclaw/openclaw/issues/56096) | P1 💥 | Telegram `sendChatAction` infinite retry loop with no backoff — makes bot completely unresponsive | Open |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) | P1 | Embedded runner "Network connection lost" when LLM generates large tool call params | Open |

### 🟡 High (P1 — Regression / P2 — Behavior)

| Issue | Description | Fix PR? |
|---|---|---|
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex turn-completion stall regression (2026.5.27) | None |
| [#87307](https://github.com/openclaw/openclaw/issues/87307) | Matrix thread reply regression (2026.5.22) | None |
| [#86599](https://github.com/openclaw/openclaw/issues/86599) | Local model calls block gateway event loop on Windows (~4 min for trivial infer) | Closed |
| [#87299](https://github.com/openclaw/openclaw/issues/87299) | Spurious "Something went wrong" + Codex failures in large Telegram sessions | None |
| [#76233](https://github.com/openclaw/openclaw/issues/76233) | exec-approval-followup races subagent bundle-mcp disposal → UNAVAILABLE | Open |
| [#53599](https://github.com/openclaw/openclaw/issues/53599) | Chrome extension browser relay removed with no cross-machine replacement (👍4) | Open |

**Notable:** Issue [#89315](https://github.com/openclaw/openclaw/issues/89315) (gateway heap OOM) has no linked fix PR and affects long-running production deployments — this is a silent killer that warrants urgent attention.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version |
|---|---|---|
| **Pre-compaction memory flush guardrails** (bounded append, post-write validation) | [#90354](https://github.com/openclaw/openclaw/issues/90354) | 🟡 Medium — aligns with current compaction stability work |
| **Per-channel/per-group/per-DM model override** | [#53638](https://github.com/openclaw/openclaw/issues/53638) | 🟡 Medium — frequently requested, clean config addition |
| **STATE.md auto-loaded workspace bootstrap** (post-compaction state recovery) | [#56110](https://github.com/openclaw/openclaw/issues/56110) | 🟢 High — directly supports the compaction UX problem being actively worked |
| **Persistent task-status surface for long-running turns** | [#52640](https://github.com/openclaw/openclaw/issues/52640) | 🔵 Lower — larger architectural effort |
| **MathJax/LaTeX in Control UI** | [#42840](https://github.com/openclaw/openclaw/issues/42840) (👍6) | 🔵 Lower — UI enhancement, not core agent |
| **Telegram Inline Query support** | [#54794](https://github.com/openclaw/openclaw/issues/54794) | 🔵 Lower — channel-specific feature |
| **Session labels/nicknames** | [#55249](https://github.com/openclaw/openclaw/issues/55249) | 🟡 Medium — small config/UX win |
| **Configurable file permissions for multi-user setups** | [#56263](https://github.com/openclaw/openclaw/issues/56263) | 🟡 Medium — Docker/multi-user demand is growing |
| **Context provenance metadata** (source/volatility for injected segments) | [#54435](https://github.com/openclaw/openclaw/issues/54435) | 🔵 Lower — RFC stage, significant architectural work |

**Prediction:** The next minor release will likely include pre-compaction memory flush guardrails (#90354) and STATE.md bootstrap support (#56110), given the active investment in compaction reliability (PR #84792 already merged). Per-channel model overrides (#53638) are a strong candidate for a point release.

---

## 7. User Feedback Summary

**Dominant pain points:**

1. **Message delivery correctness** — Users are frustrated that internal agent processing text (tool-call narration, error handling, reasoning artifacts) leaks into their messaging channels. This is the #1 complaint by comment volume and spans Discord, Slack, Telegram, and QQBot. The v2026.6.5 QQBot fix addresses one channel, but the systemic issue (#25592) remains open.

2. **Session stalls and incomplete turns** — Multiple users report sessions that silently fail to deliver responses, particularly on Codex app-server and WhatsApp. The Codex regression (#88312) is especially painful because it was previously fixed.

3. **Docker and non-standard environments** — Users on Docker, RISC-V64, and custom XDG paths feel like second-class citizens. Issues #31331, #54253, and #53628 all reflect friction in non-default setups.

4. **Memory and compaction reliability** — Users with active-memory enabled report timeouts, slow responses, and context loss after compaction. The community is asking for better guardrails (#90354) and state recovery (#56110).

5. **Positive signal** — The QA infrastructure investment (scorecard taxonomy, mapped profiles, evidence normalization) suggests the maintainers are responding to quality concerns with systematic tooling, which should improve release confidence.

**Satisfaction indicators:** High engagement (453 issues, 496 PRs in 24h) suggests a vibrant, invested community. However, the large number of `clawsweeper:no-new-fix-pr` and `clawsweeper:needs-maintainer-review` tags indicates users are experiencing long wait times for resolution.

---

## 8. Backlog Watch

These important issues have been open for extended periods and need maintainer attention:

| Issue | Age | Why It Matters |
|---|---|---|
| **[#25592](https://github.com/openclaw/openclaw/issues/25592)** — Text between tool calls leaks to channels | 3.5 months | Most-commented issue; affects all channels; tagged `impact:security` |
| **[#31331](https://github.com/openclaw/openclaw/issues/31331)** — Docker + Sandbox workspaceAccess broken | 3 months | Blocks Docker production deployments; has linked PR ready |
| **[#44905](https://github.com/openclaw/openclaw/issues/44905)** — Discord leaks internal tool-call traces | 3 months | Security-adjacent; raw JSON visible to end users |
| **[#48003](https://github.com/openclaw/openclaw/issues/48003)** — Steer mode doesn't inject messages mid-turn | 3 months | Core session interaction regression; has linked PR |
| **[#53599](https://github.com/openclaw/openclaw/issues/53599)** — Chrome extension browser relay removed (no replacement) | 2.5 months | Managed hosting providers blocked; 👍4; regression |
| **[#54253](https://github.com/openclaw/openclaw/issues/54253)** — RISC-V64 "LLM Request Failed" | 2.5 months | Architecture portability; 👍4 (highest in set) |
| **[#56096](https://github.com/openclaw/openclaw/issues/56096)** — Telegram infinite retry loop | 2.5 months | Makes bot completely unresponsive; P1 crash-loop |
| **[#89315](https://github.com/openclaw/openclaw/issues/89315)** — Gateway heap OOM on long-running Linux | 8 days | No fix PR; silent production killer; 👍3 |

**Stale PR watch:** PR [#84792](https://github.com/openclaw/openclaw/pull/84792) (memory flush before compaction) has been open since May 21 and is ready for maintainer review — it directly addresses the compaction reliability issues users are reporting. PR [#87893](https://github.com/openclaw/openclaw/pull/87893) (auth profile selection fix) is also ready and has been open since May 29.

---

*Data source: github.com/openclaw/openclaw — snapshot 2026-06-10. All links reference openclaw/openclaw issues and PRs.*

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report — 2026-06-10

*Generated by OWL | Data snapshot: 2026-06-10*

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape in mid-2026 is characterized by **high fragmentation and rapid parallel iteration** across at least 12 identifiable projects. The ecosystem is converging around a shared architecture — gateway-based agent runtimes with multi-channel delivery, tool-calling via MCP, and workspace-based memory — but diverging sharply in implementation language, target deployment surface, and philosophical priorities. **OpenClaw** serves as the de facto reference implementation against which most peers are measured, but challengers are carving out distinct niches: NanoBot and CoPaw prioritize approachability, IronClaw targets production enterprise deployments, PicoClaw emphasizes multi-channel breadth, and ZeroClaw pursues maximum channel/tool extensibility. The overall trajectory is toward **stabilization and production hardening** after a period of explosive feature development, with security auditing, context compaction reliability, and provider compatibility emerging as universal pain points.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Open Issues | Open PRs | Releases (24h) | Health Score |
|---|---|---|---|---|---|---|
| **OpenClaw** | 453 | 496 | 315 | 352 | v2026.6.5, v2026.6.5-beta.6 | 🔶 High volume, backlog strain |
| **Hermes Agent** | 50 | 50 | 45 | 43 | None | 🔶 Active, intake > resolution |
| **IronClaw** | 47 | 50 | 42 | 42 | None | 🔶 Pre-release accumulation |
| **ZeroClaw** | 50 | 50 | 48 | 49 | None | 🔶 Heavy iteration, low merge rate |
| **NanoBot** | 6 | 23 | — | 12 open | None | 🟢 Focused, good merge ratio |
| **NanoClaw** | 1 | 43 | — | — | None | 🟢 High throughput, catch-up mode |
| **CoPaw** | 33 | 34 | 16 | 18 | v1.1.11-beta.2 | 🟢 Sprint cadence, shipping |
| **PicoClaw** | 20 | 20 | — | — | v0.2.9-nightly | 🟡 Security disclosure surge |
| **NullClaw** | 5 | 7 | 1 | 1 | None | 🟢 Small, responsive |
| **LobsterAI** | 2 | 5 | 2 | 1 | None | 🟢 Niche, low volume |
| **TinyClaw** | 0 | 0 | — | — | — | ⚪ No activity |
| **Moltis** | 0 | 0 | — | — | — | ⚪ No activity |
| **ZeptoClaw** | 0 | 0 | — | — | — | ⚪ No activity |

**Health scoring rationale:** 🟢 = healthy throughput with good merge/release ratio; 🔶 = high activity but accumulating backlog or low closure rate; 🟡 = notable risk factor; ⚪ = dormant.

---

## 3. OpenClaw's Position

**Advantages vs. peers:**

- **Scale of community engagement** is unmatched: 453 issues and 496 PRs in 24 hours is 5–10× the volume of any peer. This creates a rich feedback loop but also strains maintainer bandwidth, as evidenced by the large number of `clawsweeper:needs-maintainer-review` tags.
- **Release cadence** is the most mature in the ecosystem — two releases shipped on the same day (stable + beta), with clear migration notes and no breaking changes. Most peers have no releases in the reporting window.
- **QA infrastructure investment** (scorecard taxonomy validation, mapped QA run profiles, evidence normalization) is unique to OpenClaw and signals a level of engineering discipline not yet visible in other projects.
- **Breadth of channel support** (QQBot, Discord, Slack, Telegram, WhatsApp, Matrix, iMessage, etc.) exceeds all peers.

**Technical approach differences:**

| Dimension | OpenClaw | Closest Peer | Key Difference |
|---|---|---|---|
| Runtime | TypeScript/Node.js gateway | NanoBot (Python), IronClaw (Rust), NullClaw (Zig) | OpenClaw targets the broadest runtime compatibility; peers optimize for specific deployment profiles |
| Memory model | Active Memory + compaction | NanoBot (history.jsonl + Dream), Hermes (Honcho prefetch) | OpenClaw's compaction is more aggressive but has more reported reliability issues |
| Extensibility | Plugin/skill system + MCP | ZeroClaw (skill-scoped security), NanoClaw (plugin-first) | OpenClaw's extension model is more mature but less formally structured than NanoClaw's plugin architecture |
| Security posture | Defense-in-depth redaction | PicoClaw (14 new CVEs), Hermes (CVSS 7.0 cron issue) | OpenClaw has its own security gaps but is ahead of peers in systematic hardening |

**Community size comparison:** OpenClaw's 24-hour activity volume rivals the combined total of all other active projects. However, engagement quality (comments per issue, reaction signals) is comparable across projects — suggesting OpenClaw's community is proportionally larger but not disproportionately more engaged per capita.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging simultaneously across multiple projects, indicating ecosystem-wide convergence:

### 4.1 Context Compaction & Memory Reliability
**Projects:** OpenClaw, NanoBot, Hermes Agent, CoPaw, NullClaw, ZeroClaw
- OpenClaw: Pre-compaction memory flush (#84792), STATE.md bootstrap (#56110)
- NanoBot: `idleCompact` discards critical correction messages (#4264), cross-session history injection (#4259)
- Hermes: Messages lost after compaction split (#43067)
- CoPaw: `/compact` falls back to hardcoded 128K (#5021, fixed)
- ZeroClaw: System prompt exceeds 32k budget on iteration 1 (#5808)

**Core need:** Compaction must be *lossless* and *context-aware*, preserving corrections and task conclusions. The current generation of implementations all use naive truncation strategies that lose critical information.

### 4.2 Message Delivery Correctness
**Projects:** OpenClaw, NanoBot, Hermes Agent, ZeroClaw, NullClaw
- OpenClaw: Text between tool calls leaks to channels (#25592), QQBot reasoning leak (fixed in v2026.6.5)
- NanoBot: WebUI silently drops assistant replies (#4267)
- Hermes: Password redaction artifacts break downstream tool calls (#43083)
- ZeroClaw: Messages lost with custom providers (#6034)
- NullClaw: Agent cron jobs silently fail to spawn (#941)

**Core need:** A formal model for *what gets delivered to channels vs. what stays internal*, with delivery guarantees and failure visibility.

### 4.3 Provider Compatibility & Multi-Model Orchestration
**Projects:** OpenClaw, NanoBot, Hermes Agent, IronClaw, CoPaw, PicoClaw, LobsterAI
- NanoBot: OpenAI-compatible text-format tool calls not parsed (#4061), GPT-5.x `max_tokens` rejection (#4261)
- Hermes: Gemini OpenAI-compatible HTTP 400/404 (#43026), delegation fallback model chain (merged #41224)
- IronClaw: Strict-mode provider `null` for unset optionals rejected (#4642), DeepSeek duplicate `model` field (#4548)
- CoPaw: DeepSeek tool naming rules, vLLM regression (#4989)
- LobsterAI: Cross-model sub-agent orchestration failure (#2132)

**Core need:** A provider abstraction layer that handles the full diversity of OpenAI-compatible API implementations, including streaming quirks, parameter deprecations, and non-standard tool-call formats.

### 4.4 Security Hardening
**Projects:** PicoClaw, Hermes Agent, NanoClaw, ZeroClaw, CoPaw
- PicoClaw: 14 coordinated security disclosures (SSRF, CSRF, auth bypass)
- Hermes: Cron environment pollution (CVSS 7.0, #37968)
- NanoClaw: Predictable Telegram pairing codes via `Math.random()` (#2722)
- ZeroClaw: `allowed_tools` doesn't restrict MCP tools (#6876), no process-memory limits on subprocesses (#6916)
- CoPaw: OpenSandbox plugin for isolated code execution (#5043, shipped)

**Core need:** Systematic security auditing and sandboxing, particularly for multi-tenant deployments and tool execution surfaces.

### 4.5 Multi-Agent Orchestration
**Projects:** PicoClaw, Hermes Agent, NullClaw, LobsterAI
- PicoClaw: Agent Collaboration Bus (merged #2937)
- Hermes: Delegation fallback model chain (merged #41224), per-task model override (#43134)
- NullClaw: Cross-agent memory synchronization (merged #711)
- LobsterAI: Cross-model sub-agent lifecycle tracking (#2132)

**Core need:** First-class inter-agent communication, shared state, and cross-model task delegation with reliable completion tracking.

---

## 5. Differentiation Analysis

| Project | Primary Target User | Key Differentiator | Technical Stack | Deployment Model |
|---|---|---|---|---|
| **OpenClaw** | Power users, multi-channel operators | Reference implementation, broadest channel support, mature release cadence | TypeScript/Node.js | Self-hosted gateway |
| **NanoBot** | Developers, local AI enthusiasts | Clean Python architecture, strong docs investment, WebUI-first | Python | CLI + WebUI |
| **Hermes Agent** | Researchers, multi-model orchestrators | Autonomous model routing, delegation chains, Desktop GUI | Python + Tauri | Desktop app + CLI |
| **PicoClaw** | Multi-channel deployers (Asia-focused) | Feishu/WeCom/OneBot/LINE/MQTT breadth, Agent Collaboration Bus | Rust | Gateway |
| **NanoClaw** | Extension builders, plugin developers | Plugin-first architecture, skill marketplace, direct runner mode | TypeScript | Gateway + plugins |
| **NullClaw** | Zig ecosystem developers, minimalists | Zig implementation, PII redaction, cross-agent memory | Zig | Gateway |
| **IronClaw** | Enterprise/production deployers | Reborn Postgres storage, operator auth, subagent durability, NEAR integration | Rust | Production gateway |
| **CoPaw** | Chinese market, desktop users | AgentScope backend, Cowork sessions, strong localization, E2E CI | Python + Tauri | Desktop + cloud |
| **ZeroClaw** | Tinkerers, smart-home users | Maximum channel/tool extensibility (SMS, Mastodon, Home Assistant, Spotify) | TypeScript | Gateway |
| **LobsterAI** | Cowork/collaboration users | Task completion notifications, multi-model sub-agent orchestration | Electron + Python | Desktop app |
| **TinyClaw/Moltis/ZeptoClaw** | — | No observable activity | — | — |

**Architectural spectrum:**

```
Minimalist ◄──────────────────────────────────────────► Full-featured
NullClaw    NanoClaw    NanoBot    OpenClaw    ZeroClaw    IronClaw
  (Zig)     (Plugin)    (Python)   (Reference) (Extensible) (Production)

Desktop-first ◄──────────────────────────────────────► Gateway-first
LobsterAI    CoPaw      Hermes     OpenClaw     PicoClaw    IronClaw
```

---

## 6. Community Momentum & Maturity

### Tier 1 — High Velocity, Production-Bound
- **OpenClaw**: Massive scale, stabilization phase, shipping releases with QA infrastructure. The project is transitioning from feature development to reliability engineering.
- **IronClaw**: Intense pre-production push (Reborn cutover). High PR volume but low merge rate suggests a team accumulating changes for a major release.

### Tier 2 — Active Iteration, Feature Development
- **Hermes Agent**: Strong feature momentum (delegation routing, Desktop UX), but intake outpaces resolution. No releases in window.
- **ZeroClaw**: Very high issue/PR volume but extremely low merge rate (1/50 PRs closed). Suggests either a bottleneck in review or a deliberate accumulation strategy.
- **CoPaw**: Sprint-paced with regular beta releases. Best-in-class CI/CD investment (E2E Playwright pipeline). Growing backlog from batch-reporter accounts.

### Tier 3 — Focused Maintenance
- **NanoBot**: Smaller scale but healthy merge ratio. Clear focus on memory/context correctness and provider compatibility.
- **NanoClaw**: Catch-up mode — 39/43 PRs merged suggests clearing a long backlog. Plugin architecture and skill marketplace shipped.
- **PicoClaw**: Active development (Agent Collaboration Bus, DeltaChat gateway) but 14 unacknowledged security disclosures represent a critical risk.

### Tier 4 — Low Volume / Niche
- **NullClaw**: Small, responsive team. Rapid fix turnaround but no releases shipping.
- **LobsterAI**: Niche desktop/cowork focus. Low community engagement.

### Tier 5 — Dormant
- **TinyClaw, Moltis, ZeptoClaw**: No activity in the reporting window.

---

## 7. Trend Signals

### Trend 1: The Compaction Crisis Is the Defining Technical Challenge
Every project with a memory system is reporting compaction-related data loss. The community is converging on the need for **lossless, context-aware compaction** with post-write validation and state recovery (STATE.md). Projects that solve this first will have a significant competitive advantage. *Relevance: All agent developers should prioritize compaction correctness over new feature development.*

### Trend 2: Multi-Model Orchestration Is the Next Frontier
Users are no longer satisfied with single-model deployments. Hermes (delegation fallback), LobsterAI (cross-model sub-agents), NanoClaw (multi-runtime SDK abstraction), and PicoClaw (Agent Collaboration Bus) all signal demand for **heterogeneous model routing** — using different models for planning, execution, and review within a single workflow. *Relevance: Agent frameworks need per-task model selection and cross-model state passing as first-class primitives.*

### Trend 3: Security Auditing Is Catching Up to Feature Development
PicoClaw's 14 coordinated disclosures, Hermes's CVSS 7.0 cron issue, NanoClaw's CSPRNG fix, and ZeroClaw's MCP tool restriction gap all indicate that the ecosystem's **security surface area has outpaced its security review capacity**. The trend toward multi-tenant deployments (ZeroClaw's RBAC requests, IronClaw's operator auth) will accelerate this. *Relevance: Every project needs a dedicated security audit cycle before its next major release.*

### Trend 4: The Desktop App Is Reemerging as a Primary Interface
Hermes (Desktop GUI with sidebar, session management, dark theme), CoPaw (Tauri desktop with Cowork sessions), and LobsterAI (Electron desktop with task notifications) are all investing heavily in desktop experiences. This contrasts with the gateway-first approach of OpenClaw and ZeroClaw. *Relevance: The market is segmenting into "gateway for developers" and "desktop for end users" — projects should choose their primary surface deliberately.*

### Trend 5: Provider Abstraction Fragility Is a Universal Pain Point
No project has successfully abstracted away the diversity of OpenAI-compatible provider implementations. Issues span GPT-5.x parameter changes, DeepSeek response format quirks, Gemini HTTP errors, vLLM silent hangs, and non-standard tool-call formats. *Relevance: The ecosystem would benefit from a shared provider compatibility test suite or a standardized provider adapter interface.*

### Trend 6: Windows Support Is a Persistent Weak Spot
CoPaw (UI lag, MAX_PATH overflow, drive selection, Tauri issues), Hermes (launchd equivalent gaps), and OpenClaw (Windows event loop blocking) all report Windows-specific friction. As the user base grows beyond developer-first Linux/macOS users, **Windows parity is becoming a adoption blocker**. *Relevance: Projects should invest in Windows CI and dedicated Windows QA resources.*

---

*Report generated by OWL — 2026-06-10. Data sourced from GitHub repositories as cited in individual project digests.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-10

---

## 1. Today's Overview

NanoBot remains in a phase of high-intensity iteration and issue triage. In the last 24 hours, the project received **23 PR updates** (12 open, 11 merged/closed) and **6 new or active issues**, with zero new releases. The volume of both inbound bug reports and merged fixes signals a mature project that is actively hardening core subsystems — particularly memory/context management, tool-call validation, and provider compatibility. The maintainers are clearly in a "catch-up and stabilize" cycle, clearing a backlog of PRs that have been open for days to weeks.

---

## 2. Releases

No new releases in the reporting window. The project is accumulating fixes and features that will likely coalesce into a patch or minor release soon, given the number of bug-fix PRs merged in this 24-hour window.

---

## 3. Project Progress (Merged / Closed PRs)

### Core Correctness & Security

| PR | Summary |
|---|---|
| **[#4252](https://github.com/HKUDS/nanobot/pull/4252)** — fix(webui): render TeX math delimiters | Adds parser-level support for `\(...\)`, `\[...\]`, and guarded `$...$` TeX delimiters via a micromark/remark extension. Integrates with the existing `remark-math` / `rehype-katex` pipeline instead of fragile string rewriting. |
| **[#4190](https://github.com/HKUDS/nanobot/pull/4190)** — Improve tool call validation strictness | Stops silently coercing malformed tool-call arguments into `{}`. Now requires arguments to resolve to a JSON object before schema casting; arrays, scalars, and malformed JSON strings are rejected. Improves debuggability and correctness when non-standard providers emit bad tool-call payloads. |
| **[#4265](https://github.com/HKUDS/nanobot/pull/4265)** — feat(english-read): change cron schedule to every 2 days | Reduces cron frequency for the `daily-english-read` skill from daily (`0 6 * * *`) to every two days (`0 6 */2 * *`). |

### Memory & Identity

| PR | Summary |
|---|---|
| **[#3400](https://github.com/HKUDS/nanobot/pull/3400)** — feat(dream): allow users to decide whether dream can edit USER.md and SOUL.md | Adds `allow_edit_identity_files` flag (default `True`) to `DreamConfig`. When set to `False`, the Dream consolidation phase skips `SOUL.md` and `USER.md`, protecting identity files from automated modification. |

### Interoperability & Protocols

| PR | Summary |
|---|---|
| **[#4034](https://github.com/HKUDS/nanobot/pull/4034)** — Add GitAgent Protocol support | Adds `agent.yaml` + `SOUL.md` manifest files to make NanoBot installable/discoverable via the [GitAgent Protocol](https://gitagent.sh). *(Note: marked as **duplicate** — likely folded into another PR or handled separately.)* |

### Docs & Onboarding

| PR | Summary |
|---|---|
| **[#4177](https://github.com/HKUDS/nanobot/pull/4177)** — docs: make onboarding friendlier for beginners | Reworks documentation entry points with distinct paths: no-background setup, quick CLI, WebUI, chat apps, provider recipes, deployment. Adds a CLI command chooser and configuration task map. |

### Feature Enhancements (Closed)

| PR | Summary |
|---|---|
| **[#4208](https://github.com/HKUDS/nanobot/pull/4208)** — feat(webui): add assistant reply fork-from-here | Users can now "fork" from any completed assistant reply in the WebUI, opening a new chat with the conversation prefix up to that point. Original chat is preserved unchanged. |
| **[#3434](https://github.com/HKUDS/nanobot/pull/3434)** — feat(lateX): add LaTeX to Feishu channel via CodeCogs | Feishu channel now supports LaTeX-to-image rendering using CodeCogs API. Requires enabling a new config flag. No new dependencies needed. |

---

## 4. Community Hot Topics

These are the most discussed or highest-signal issues and open PRs:

### 🔴 Context Pollution from Cross-Session History Injection — [#4259](https://github.com/HKUDS/nanobot/issues/4259)
**Status:** Open (enhancement, refactor) | 2 comments
`history.jsonl` entries are per-session summaries generated by `Consolidator.archive()`, but `ContextBuilder.build_system_prompt()` injects *all* unprocessed entries into the current session's system prompt without session isolation. This means task conclusions and facts from unrelated sessions "leak" into new conversations. This is a **design-level correctness issue** in the memory system — arguably the most architecturally significant bug in the current queue. The fix likely requires session-scoped filtering or tagging.

### 🔴 `idleCompact` Discards Critical Correction Messages — [#4264](https://github.com/HKUDS/nanobot/issues/4264)
**Status:** Open (bug) | 0 comments
The `idleCompact` mechanism summarizes everything *except* the last 8 messages. But in short task-completion scenarios — where the user corrects the model and the model gets it right on the final turn — those last 8 messages contain the *only* correct conclusion. The result is a `history.jsonl` entry that records the *wrong* answer as the session's outcome. A fix would need to keep the complete session history, not just tail-truncated history, for the summarization step.

### 🟡 OpenAI-Compatible Text-Format Tool Calls Not Parsed — [#4061](https://github.com/HKUDS/nanobot/issues/4061)
**Status:** Open (bug) | 1 comment | Open since May 29
Some providers (e.g., certain Ollama/OpenRouter configurations) emit tool calls as plain-text markup inside assistant content rather than structured `tool_calls`. NanoBot only dispatches structured tool calls, so these providers show raw markup to users without executing tools. This is a **provider compatibility gap** affecting users on local or proxy setups.

### 🟡 WebUI Session Content Dropping — [PR #4267](https://github.com/HKUDS/nanobot/pull/4267)
**Status:** Open (fix, webui)
Bug where the WebUI silently drops entire assistant replies from rendering (though they persist in workspace). Intermittent — depends on token generation rate. An active PR (`fix(websocket)`) is in progress.

### 🟢 Per-Conversation Model Override — [#4253](https://github.com/HKUDS/nanobot/issues/4253)
**Status:** Open (enhancement) | 3 comments
User wants to switch models between conversations (e.g., fast cloud model vs. private local model) based on privacy/time needs. Only a global model setting exists today. This is a practical workflow request from multi-model users.

---

## 5. Bugs & Stability

| Severity | Issue / PR | Description | Fix Status |
|---|---|---|---|
| 🔴 **High** | [#4259](https://github.com/HKUDS/nanobot/issues/4259) — Cross-session history injection pollutes context | `history.jsonl` entries from other sessions are mixed into system prompts of new sessions. This causes incorrect "memories" to influence unrelated conversations. | No fix PR yet. Core memory system change required. |
| 🔴 **High** | [#4264](https://github.com/HKUDS/nanobot/issues/4264) — `idleCompact` discards last 8 messages, losing correct conclusions | Short task-completion sessions have their correct final answers omitted from consolidation summaries, resulting in wrong `history.jsonl` entries. | No fix PR yet. |
| 🔴 **High** | [#4267](https://github.com/HKUDS/nanobot/pull/4267) — WebUI silently drops assistant replies | WebSocket rendering intermittently loses messages at higher token rates. Data persists in workspace but users see incomplete conversations. | Fix PR open. |
| 🟠 **Medium** | [#4061](https://github.com/HKUDS/nanobot/issues/4061) — OpenAI-compatible text tool calls not parsed | Providers emitting non-structured tool calls show raw markup to users; tools never dispatch. | No fix PR. Open since May 29 — needs attention. |
| 🟠 **Medium** | [#4261](https://github.com/HKUDS/nanobot/issues/4261) — `OpenAICompatProvider` uses `max_tokens` for GPT-5.x | GPT-5.x rejects `max_tokens` in favor of `max_completion_tokens`. | Fix PR [#4263](https://github.com/HKUDS/nanobot/pull/4263) open. |
| 🟡 **Low** | [#4262](https://github.com/HKUDS/nanobot/issues/4262) — `botIcon` not shown on first agent startup | Default "puppy" icon appears on first load even when `botIcon` is configured; correct icon appears on subsequent loads only. | No fix PR yet. |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood of Near-Term Implementation |
|---|---|---|
| **Per-conversation model override** | [#4253](https://github.com/HKUDS/nanobot/issues/4253) | **Medium-High** — Relatively bounded scope (config + context selector), strong user workflow need (privacy vs. speed), 3 comments but no reaction signals yet. |
| **StepFun ASR provider** | [PR #4260](https://github.com/HKUDS/nanobot/pull/4260) | **High** — Already an active PR. Straightforward provider plugin addition. |
| **On-demand version check in WebUI** | [PR #4255](https://github.com/HKUDS/nanobot/pull/4255) | **High** — Replaces fragile real-time PyPI polling with a click-to-check button. Addresses background thread flakiness in #4235. |
| **Fenced-code-block-aware message splitting** | [PR #4257](https://github.com/HKUDS/nanobot/pull/4260) | **High** — Fixes broken rendering when long messages containing code fences are chunked across channels. |
| **Memory lifecycle test harness** | [PR #4193](https://github.com/HKUDS/nanobot/pull/4193) | **High** — Test infrastructure PR. Enables regression coverage for the memory subsystem bugs (#4259, #4264) above. |

---

## 7. User Feedback Summary

**Core pain points emerging from yesterday's activity:**

1. **Memory/context integrity is the #1 concern.** Two separate users filed bugs (#4259, #4264) about the memory/history system producing incorrect or contaminated context. Both describe scenarios where the agent "learns" wrong things because of poor session isolation or aggressive message truncation. This is a trust issue — if users can't rely on what the bot "remembers," the product loses its value proposition.

2. **Provider compatibility friction.** Issues #4061 (text-format tool calls) and #4261 (`max_tokens` vs. `max_completion_tokens`) both stem from NanoBot's limited handling of non-standard or newer OpenAI-compatible providers. As more users deploy via Local AI/OpenRouter/Azure with GPT-5.x, these gaps will increase in frequency.

3. **WebUI reliability erodes confidence.** PR #4267 and previously merged PR #4252 (TeX rendering) suggest the WebUI has accumulated rendering bugs — dropped messages, broken math — that degrade the visual chat experience.

4. **Multi-model workflows are under-supported.** Issue #4253 makes it clear that users running heterogeneous model setups (cloud + local) need per-session model selection, not a single global default.

**Satisfaction signals:** Several merged PRs (#4177 docs improvement, #4208 fork-from-here, #3400 identity file protection) show the maintainers are responsive to user requests. The Project is actively improving docs quality, which is a positive signal from a developer experience perspective.

---

## 8. Backlog Watch

These items have been open without resolution and may need maintainer attention:

| Age | Item | Summary | Why It Matters |
|---|---|---|---|
| **12 days** | [#4061](https://github.com/HKUDS/nanobot/issues/4061) — OpenAI-compatible text tool calls not parsed | Open since May 29. Affects users on local/proxy providers. No fix PR. | Blocks a significant segment of the user base (local AI enthusiasts). |
| **11 days** | [PR #4119](https://github.com/HKUDS/nanobot/pull/4119) — Block relative symlink workspace escapes | Security fix for exec tool. Open since May 31. | Security-related. Should be prioritized. |
| **11 days** | [PR #4053](https://github.com/HKUDS/nanobot/pull/4053) — Keep read-only roots out of write paths | Filesystem permission hardening. Open since May 29. | Security-related. Should be prioritized. |
| **16 days** | [PR #3983](https://github.com/HKUDS/nanobot/pull/3983) — Cover runner blocked tool-call finish reasons | Test coverage for edge-case provider responses. Open since May 24. | Important for correctness but lower urgency. |
| **16 days** | [PR #3982](https://github.com/HKUDS/nanobot/pull/3982) — Scripted agent runner harness | Test infrastructure. Open since May 24. | Enables better regression testing for the runner. |

**Recommendation:** The security PRs (#4119, #4053) have been open for nearly two weeks without merge. Given that they address workspace escape vectors, they should be reviewed and merged or closed with explanation. Issue #4061 is the longest-open user-facing bug and is likely affecting a growing number of users as local AI adoption increases.

---

*Data snapshot: 2026-06-10 | Source: HKUDS/nanobot | Generated by OWL*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-10

---

## 1. Today's Overview

Hermes Agent remains a highly active project with **50 issues and 50 PRs updated in the last 24 hours**, showing sustained community engagement across a broad surface area. There were **no new releases** in this window. Activity is dominated by feature requests around multi-agent routing, provider/platform support, and gateway/dashboard UX, alongside a meaningful cluster of P1–P2 stability bugs — particularly around context compaction, provider HTTP clients, and macOS gateway restarts. The volume of open items (45 issues, 43 PRs) vs. closed (5 issues, 7 PRs) indicates the project's intake velocity currently outpaces its resolution capacity, which is typical for a rapidly evolving agent framework.

---

## 2. Releases

None in the last 24 hours.

---

## 3. Project Progress (Merged / Closed Today)

| # | Title | Author | Type |
|---|-------|--------|------|
| **#20056** | [fix(snapshot): write hermes-snap-*.sh with mode 600](https://github.com/NousResearch/hermes-agent/pull/20056) | andrewhomeyer | Security fix |
| **#13314** | feat: add You.com as web backend *(status changed to CLOSED)* | EdwardIrby | Feature |
| **#41224** | [feat: delegation fallback model chain](https://github.com/NousResearch/hermes-agent/pull/41224) | pedrowow | Feature |
| **#43151** | [feat(gateway): add OpenRC service support for Alpine Linux](https://github.com/NousResearch/hermes-agent/pull/43151) | HagegeR | Feature |
| **#42871** | [fix(desktop): edit default profile's SOUL.md from single-profile setup](https://github.com/NousResearch/hermes-agent/pull/42871) | xxxigm | Bug fix |
| **#42516** | Desktop new sessions at bottom *(Issue, closed)* | chatpongs | Bug |
| **#42506** | Add usememos as official memory provider *(closed, no resolution)* | Wang-zhechao | Feature |
| **#40998** | Windows installer failure *(closed, needs-repro)* | A1nto | Bug |
| **#33865** | state.db FTS corruption no integrity check *(closed)* | tuancookiez-hub | Feature |

**Key takeaways:**
- **#20056** closes a meaningful security gap where snapshot files containing full shell environments were written with default umask — now locked to mode 600. This has been open since early May and is a good catch.
- **#41224** delivers the delegation fallback model chain, directly enabling the multi-model routing use case that several open issues (#16525, #38954) are also requesting through different angles.
- **#42871** fixes Desktop UX for single-profile users who couldn't edit their SOUL.md — a small but impacting polish fix.
- Two closed issues (#42506, #33865) were closed without visible resolution or merge, which may warrant follow-up scrutiny.

---

## 4. Community Hot Topics

### Discussed Issues (by comment count)

1. **[#21587](https://github.com/NousResearch/hermes-agent/issues/21587)** — *Telegram Guest Bots, Bot-to-Bot, Stickers and Chat Automation* (9 comments, 1 👍) — Author: Editorenbici | Created: 2026-05-08
   Proposes integrating Telegram's latest May 2026 bot API features (guest bots, bot-to-bot, stickers) into Hermes. **Underlying need:** Multi-agent collaboration on Telegram is poorly supported today; users want Hermes agents to participate natively in group chats and cross-bot workflows. This is a large-scope, platform-leadership ask.

2. **[#10567](https://github.com/NousResearch/hermes-agent/issues/10567)** — *Add --host and CORS config for Tailscale/VPN access to dashboard* (8 comments, 11 👍) | Created: 2026-04-15
   The highest-liked issue in this window, and it's been open for ~2 months. Users running Hermes headlessly on remote machines or VPS cannot access the web dashboard because binding is hardcoded to `127.0.0.1` with restrictive CORS. **Underlying need:** Remote/cloud deployment is a critical use case that the current architecture inadvertently blocks. This is a small config change with outsized impact.

3. **[#43083](https://github.com/NousResearch/hermes-agent/issues/43083)** — *Passwords redacted as *** but model reads conversation history and fails on second tool call* (6 comments) | Created: 2026-06-09
   A P1 bug where the defense-in-depth credential redaction strategy (replacing passwords with `***` in tool call history) causes the model to fail on follow-up tool calls because the redacted artifact breaks downstream parsing. **Underlying need:** Security hardening must be balanced against functional correctness — this is a common tension in agent frameworks.

4. **[#16525](https://github.com/NousResearch/hermes-agent/issues/16525)** — *Expose model_switch as agent-callable tool for autonomous routing* (6 comments, 2 👍) | Created: 2026-04-27
   Users want the agent itself to dynamically call a `model_switch` tool to route tasks to lighter or heavier models autonomously. Closely related to **#41224** (delegation fallback, merged today) and **#38954**.

5. **[#42006](https://github.com/NousResearch/hermes-agent/issues/42006)** — *macOS launchd_restart missing bootout before bootstrap* (5 comments) | Created: 2026-06-08
   A P2 gateway restart failure on macOS post-update. Hermes `update` leaves the gateway in a broken restart loop because `launchctl bootstrap` is called without a prior `bootout` when the job is still registered as stopped.

### Active PRs Drawing Attention

- **[#43067](https://github.com/NousResearch/hermes-agent/pull/43067)** — P1 fix for lost messages after context compaction split. Three related persistence failures addressed together. High priority; this could explain intermittent user-visible data loss.
- **[#43134](https://github.com/NousResearch/hermes-agent/pull/43134)** + **[#43185](https://github.com/NousResearch/hermes-agent/pull/43185)** — Per-task model/provider override for delegate_tool. Addresses #18591. Follow-up PR incorporates 8-reviewer feedback. This directly complements the delegation fallback feature merged today.
- **[#43189](https://github.com/NousResearch/hermes-agent/pull/43189)** — Fix for dashboard-hosted sessions not loading MCP tools (a silent regression where web UI sessions were unable to use any MCP servers).

---

## 5. Bugs & Stability

### By Severity

**P1 — Critical**
| # | Issue | Created | Fix PR? |
|---|-------|---------|---------|
| **[#43083](https://github.com/NousResearch/hermes-agent/issues/43083)** | Password redaction breaks model on second tool call | 2026-06-09 | None yet |
| **[#43014](https://github.com/NousResearch/hermes-agent/issues/43014)** | `cron: deliver=origin` fails to resolve delivery target in CLI sessions | 2026-06-09 | None yet |
| **[#43067](https://github.com/NousResearch/hermes-agent/pull/43067)** *(fixed in PR)* | Messages lost after compaction split; follow-ups merged into single turn | 2026-06-09 | **#43067** (open PR) |

**P2 — High**
| # | Issue | Created | Fix PR? |
|---|-------|---------|---------|
| **[#42006](https://github.com/NousResearch/hermes-agent/issues/42006)** | macOS launchd restart fails after `hermes update` | 2026-06-08 | None yet |
| **[#43026](https://github.com/NousResearch/hermes-agent/issues/43026)** | Gemini OpenAI-compatible provider returns HTTP 400/404 via internal HTTP client | 2026-06-09 | None yet |
| **[#37968](https://github.com/NousResearch/hermes-agent/issues/37968)** | Cron gateway approvals vulnerable to environment pollution (CVSS 7.0) | 2026-06-03 | None yet |
| **[#43146](https://github.com/NousResearch/hermes-agent/issues/43146)** | Context scanner false-positive on "praxis" blocks entire files | 2026-06-09 | None yet |

**P3 — Moderate & Notable**
| # | Issue | Fix PR? |
|---|-------|---------|
| **[#34070](https://github.com/NousResearch/hermes-agent/issues/34070)** | Honcho memory prefetch hang on fresh subprocess (v0.15.0 regression) | None |
| **[#43042](https://github.com/NousResearch/hermes-agent/issues/43042)** | Desktop file browser ENOENT from session.info CWD overwrite (duplicate) | None |
| **[#43054](https://github.com/NousResearch/hermes-agent/issues/43054)** | Gmail get returns only top-level MIME part (forwarded emails broken) | None |
| **[#43117](https://github.com/NousResearch/hermes-agent/issues/43117)** | `hermes plugins enable` rejects pip entry-point plugins runtime supports | None |
| **[#43122](https://github.com/NousResearch/hermes-agent/issues/43122)** | Messaging provider icons invisible on dark UI theme | None |

**Stability assessment:** Three P1 bugs in a single day (credential redaction, cron delivery, compaction persistence) represent a confluence of issues in core agent plumbing. The compaction data loss bug (#43067 fix PR at least) is the most concerning — it can silently drop assistant messages without user awareness. The macOS launchd issue compounds operational fragility for Mac users.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issues | Likelihood |
|---------|--------|------------|
| **Autonomous model routing / `model_switch` tool** | [#16525](https://github.com/NousResearch/hermes-agent/issues/16525), [#38954](https://github.com/NousResearch/hermes-agent/issues/38954) | **High** — PR #41224 (delegation fallback) just landed; PR #43134/#43185 (per-task override) is actively in review. The delegation routing subsystem is clearly the current priority area. |
| **Per-task model override in delegate** | [#18591](https://github.com/NousResearch/hermes-agent/issues/18591) (referenced by PR #43134) | **High** — PR is active with multi-reviewer review. Likely to land in the near term. |
| **Dashboard multi-profile switching** | [#10674](https://github.com/NousResearch/hermes-agent/issues/10674) | **Medium** — Well-scoped, has community backing. Aligns with Desktop UX improvements already in progress (sidebar sorting #42767, session order fix #42516). |
| **Telegram platform expansion (guest bots, bot-to-bot)** | [#21587](https://github.com/NousResearch/hermes-agent/issues/21587) | **Low–Medium** — Large scope; depends on upstream Telegram API stability adoption. May be partially addressed incrementally. |
| **Remote/VPN dashboard access (CORS, --host)** | [#10567](https://github.com/NousResearch/hermes-agent/issues/10567) (11 👍) | **High despite low assignment** — Simple config change, high community demand, has lingered 2 months. Most likely a quick win if prioritized. |
| **OpenSSF Scorecard workflow** | [#43074](https://github.com/NousResearch/hermes-agent/issues/43074) | **Medium** — Standard open-source hygiene; growing community expectation. |
| **Amazon Bedrock `service_tier` support** | [#31322](https://github.com/NousResearch/hermes-agent/issues/31322) | **Low** — Niche provider cost-optimization flag; limited author bandwidth. |
| **Disable `execute_code` approval prompts (YOLO mode)** | [#42921](https://github.com/NousResearch/hermes-agent/issues/42921) | **Medium** — Power-user need; scope is a single config flag. |

**Prediction for next 1–2 releases:** Delegation routing improvements (per-task model override + fallback chain) will likely headline, alongside Desktop UX polish. The CORS/remote dashboard issue (#10567) is the most overdue simple fix by community signal.

---

## 7. User Feedback Summary

**Dominant themes from today's activity:**

1. **Multi-model orchestration is the #1 user demand.** Multiple issues converge on the same need: agents should autonomously select or switch models based on task complexity, delegation targets should support per-task overrides, and fallback chains should exist. The community is building sophisticated multi-model workflows and hitting current architecture limits repeatedly. PRs #41224 and #43134/#43185 suggest the maintainers are actively addressing this, but the breadth of feature requests (#16525, #38954, #18591, #10567) indicates the problem space hasn't been fully closed.

2. **Remote/cloud deployment friction.** Issue #10567 (CORS/dashboard binding, 11 👍) and the macOS launchd restart bug (#42006) both signal that users are running Hermes in non-local environments (VPS, remote Macs, headless servers) and encountering blockers. The project's default assumptions are still desktop-local-first.

3. **Provider/ecosystem expansion pressure.** Requests for You.com web backend (PR #13314), Amazon Bedrock service_tier (#31322), Usememos memory plugin (#42506), and `local` provider overlay (#43052) reflect users wanting Hermes to be a universal provider abstraction layer — not just an OpenAI/Anthropic client.

4. **Security vs. functionality tension.** The credential redaction bug (#43083) and the cron environment pollution issue (#37968) both show that security hardening is being applied, but sometimes at the cost of breaking core functionality. Users are not asking for less security, but for redaction strategies that don't inject malformed artifacts into the model's conversation history.

5. **Desktop app polish.** Multiple issues (#42516, #42767, #42989, #43042, #43122) are Desktop-specific UX bugs — session ordering, sidebar sorting, context stats display, dark theme icons, file browser errors. The Desktop GUI is clearly a major usage surface, and users expect parity with CLI quality.

6. **Satisfaction signals:** Generally positive issue authors (most features are detailed and constructive). The 11 👍 on #10567 suggests strong community alignment on priorities. No high-anger or abandonment patterns visible.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| # | Item | Age | Why It Needs Attention |
|---|------|-----|----------------------|
| **#10567** | [--host and CORS config for remote dashboard access](https://github.com/NousResearch/hermes-agent/issues/10567) | **56 days**, 11 👍, 8 comments | Highest community demand item; small scoped fix; no owner visible; impacts remote deployment. |
| **#21587** | [Telegram Guest Bots / Bot-to-Bot support](https://github.com/NousResearch/hermes-agent/issues/21587) | **33 days**, 9 comments | Platform-leadership opportunity; may need a design RFC before implementation; worth at least an official response since Telegram just shipped the APIs. |
| **#37968** | [Isolate cron gateway approvals from environment pollution](https://github.com/NousResearch/hermes-agent/issues/37968) | **7 days**, P2/CVSS 7.0 | Security issue with documented CVSS score; no activity visible; the severity warrants triage even if closed later. |
| **#43014** | [cron deliver=origin resolution failure](https://github.com/NousResearch/hermes-agent/issues/43014) | **1 day**, P1 | Bug report indicates cron jobs silently fail at delivery; no maintainer response yet; directly impacts scheduled automation workflows. |
| **#42006** | [macOS launchd restart failure post-update](https://github.com/NousResearch/hermes-agent/issues/42006) | **2 days**, P2 | Gateway restart loop affects every Mac user running `hermes update`; will compound over time as more users update. |
| **#14390** | [Stabilize gateway runtime and restore green test suite](https://github.com/NousResearch/hermes-agent/pull/14390) | **48 days**, P1 PR | A major stability PR from April with no visible merge or maintainer comment; if the test suite is still flaky, this is foundational work. |
| **#38954** | [Automatic Role-Based Model Routing](https://github.com/NousResearch/hermes-agent/issues/38954) | **6 days** | Scopes aligns closely with PR #43134 in review; would benefit from a maintainer comment connecting the two. |
| **#34070** | [Honcho memory prefetch hang (v0.15.0 regression)](https://github.com/NousResearch/hermes-agent/issues/34070) | **13 days** | Labeled as a regression since v0.15.0; affects cron and subprocess-based dispatchers; no response. |

---

*Generated by OWL for Hermes Agent (NousResearch/hermes-agent) on 2026-06-10.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-10

---

## 1. Today's Overview

PicoClaw is experiencing a **high-activity day** with 20 issues and 20 PRs updated in the last 24 hours, plus a new nightly release. The most striking pattern is a **coordinated security disclosure burst**: 14 security advisories (#3068–#3082) were filed today by a single researcher (YLChen-007), covering SSRF bypasses, authorization flaws, CSRF, and symlink races across multiple channels and tools. On the development side, the project is advancing steadily with a new DeltaChat gateway PR, launcher hardening work, and several bug fixes targeting session history, config migration, and Windows UX. The volume of open security issues with no maintainer response yet is a notable concern.

---

## 2. Releases

**Nightly Build — `v0.2.9-nightly.20260609.46b29a0a`**
- Automated nightly build; may be unstable.
- Full changelog: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
- No stable release today.

---

## 3. Project Progress

### Merged / Closed PRs (5)

| PR | Author | Description |
|---|---|---|
| [#3064](https://github.com/sipeed/picoclaw/pull/3064) | chengzhichao-xydt | **fix(config):** Add `ok` check for type assertion in migration model name indexing — prevents panic on malformed config entries |
| [#2942](https://github.com/sipeed/picoclaw/pull/2942) | LegendAlessandro-Liguori | **fix(config):** Use canonical hyphenated model ID for default `claude-sonnet` entry — fixes first-message failure on fresh installs |
| [#2940](https://github.com/sipeed/picoclaw/pull/2940) | LegendAlessandro-Liguori | **fix(providers):** Omit `temperature` for `claude-opus-4-7` — resolves HTTP 400 errors |
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) | afjcjsbx | **feat(agent):** Agent Collaboration Bus — durable inter-agent communication with per-agent mailboxes, collaboration threads, and permission-aware delivery |
| [#3086](https://github.com/sipeed/picoclaw/pull/3086) | imguoguo | **docs:** Update WeChat QR code |

### Notable Open PRs

- [#3063](https://github.com/sipeed/picoclaw/pull/3063) — **feat: add DeltaChat gateway** (trufae) — new channel integration
- [#3083](https://github.com/sipeed/picoclaw/pull/3083) — **feat(web): harden launcher access control** with configurable localhost bypass and trusted proxy CIDRs (lc6464)
- [#3085](https://github.com/sipeed/picoclaw/pull/3085) — **fix(tools): block 198.18.0.0/15** in SSRF guard (ACMYuechen)
- [#3087](https://github.com/sipeed/picoclaw/pull/3087) — **fix(tools): allow workspace relative exec paths** (jp39)
- [#3067](https://github.com/sipeed/picoclaw/pull/3067) — **fix: persist `dm_scope` setting** in SessionConfig (SiYue-ZO)

---

## 4. Community Hot Topics

### Most Discussed Issues

1. **[#2404](https://github.com/sipeed/picoclaw/issues/2404)** — *Add config option to send streaming HTTP requests* (OuSatoru, 11 comments, 👍1)
   - **Underlying need:** Users want OpenAI-compatible `streaming: true` config support for LLM backends. This is a long-standing request (since April) with sustained engagement, indicating strong demand for streaming-first workflows.

2. **[#2796](https://github.com/sipeed/picoclaw/issues/2796)** — *History only shows last user message in multi-message conversations* (EverestSnow, 6 comments)
   - **Status:** Closed (stale). Fix PR [#2990](https://github.com/sipeed/picoclaw/pull/2990) is open but stale — needs maintainer review.

3. **[#2939](https://github.com/sipeed/picoclaw/issues/2939)** — *claude-opus-4-7 fails with 'temperature is deprecated'* (LegendAlessandro-Liguori, 2 comments)
   - **Status:** Closed (stale). Fixed by merged PR [#2940](https://github.com/sipeed/picoclaw/pull/2940).

### Key Signal

The **Agent Collaboration Bus** PR [#2937](https://github.com/sipeed/picoclaw/pull/2937) represents a significant architectural addition — first-class inter-agent communication. This positions PicoClaw toward multi-agent orchestration, a major roadmap signal.

---

## 5. Bugs & Stability

### 🔴 Critical — Security Advisories (14 issues, all OPEN, all from 2026-06-09)

All filed by YLChen-007. **No maintainer response or fix PRs yet.**

| Severity | Issue | Title |
|---|---|---|
| 🔴 Critical | [#3072](https://github.com/sipeed/picoclaw/issues/3072) | CSRF in launcher first-run password setup → local control-plane takeover |
| 🔴 Critical | [#3071](https://github.com/sipeed/picoclaw/issues/3071) | Authenticated WebSocket clients can trigger unauthorized config reload via `/reload` |
| 🔴 High | [#3082](https://github.com/sipeed/picoclaw/issues/3082) | Feishu reply-context expansion bypasses `allow_from` |
| 🔴 High | [#3080](https://github.com/sipeed/picoclaw/issues/3080) | Launcher `allowed_cidrs` bypassed via same-host loopback proxying |
| 🔴 High | [#3069](https://github.com/sipeed/picoclaw/issues/3069) | Launcher `allowed_cidrs` bypassed via reverse proxy (`RemoteAddr` trust) |
| 🔴 High | [#3078](https://github.com/sipeed/picoclaw/issues/3078) | `web_fetch` SSRF bypass via environment-configured HTTP proxy |
| 🔴 High | [#3077](https://github.com/sipeed/picoclaw/issues/3077) | `web_fetch` SSRF bypass via `198.18.0.0/15` — **fix PR [#3085](https://github.com/sipeed/picoclaw/pull/3085) open** |
| 🔴 High | [#3074](https://github.com/sipeed/picoclaw/issues/3074) | `web_fetch` SSRF bypass via ISATAP IPv6 literals |
| 🔴 High | [#3070](https://github.com/sipeed/picoclaw/issues/3070) | OneBot media URL allows host-side arbitrary fetch |
| 🟡 Medium | [#3081](https://github.com/sipeed/picoclaw/issues/3081) | Approval hook `cwd` symlink race |
| 🟡 Medium | [#3079](https://github.com/sipeed/picoclaw/issues/3079) | `exec` whitelist allows `jq` environment disclosure |
| 🟡 Medium | [#3076](https://github.com/sipeed/picoclaw/issues/3076) | WeCom group trigger policy bypass |
| 🟡 Medium | [#3075](https://github.com/sipeed/picoclaw/issues/3075) | Untrusted `skills/` metadata auto-loaded into system prompt |
| 🟡 Medium | [#3073](https://github.com/sipeed/picoclaw/issues/3073) | LINE webhook replay allows duplicate event execution |
| 🟡 Medium | [#3068](https://github.com/sipeed/picoclaw/issues/3068) | MQTT `allow_from` bypass via topic `client_id` spoofing |

### 🟡 Other Bugs

- [#2796](https://github.com/sipeed/picoclaw/issues/2796) — Session history display bug (closed stale, fix PR [#2990](https://github.com/sipeed/picoclaw/pull/2990) pending)
- [#2939](https://github.com/sipeed/picoclaw/issues/2939) — claude-opus-4-7 temperature error (closed stale, fixed by [#2940](https://github.com/sipeed/picoclaw/pull/2940))

---

## 6. Feature Requests & Roadmap Signals

| Issue | Title | Signal Strength |
|---|---|---|
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Streaming HTTP request config | 🔥 High — 11 comments, long-lived |
| [#2984](https://github.com/sipeed/picoclaw/issues/2984) | Explicit turn completion signal for WebSocket clients | 🔥 High — protocol-level need |
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | Replace libolm with vodozemac | 🟡 Medium — security modernization |
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) | DeltaChat gateway (PR) | 🟡 Medium — new channel |
| [#2917](https://github.com/sipeed/picoclaw/pull/2917) | NEAR AI Cloud provider (PR) | 🟡 Medium — new provider |

**Prediction for next stable release (v0.2.9):** The DeltaChat gateway, launcher hardening (#3083), SSRF fixes (#3085), and the various config/session bug fixes are likely candidates. The Agent Collaboration Bus (#2937) may target a later release given its scope.

---

## 7. User Feedback Summary

**Pain points:**
- **Security surface area** is the dominant concern — 14 coordinated disclosures suggest the project's multi-channel architecture (Feishu, WeCom, LINE, OneBot, MQTT, WebSocket) has inconsistent authorization boundaries. Users deploying PicoClaw in production should exercise caution.
- **Session history visibility** ([#2796](https://github.com/sipeed/picoclaw/issues/2796)) frustrated users who couldn't review full conversation context — a core UX issue for an AI assistant.
- **Streaming support** ([#2404](https://github.com/sipeed/picoclaw/issues/2404)) remains the most requested feature, with users comparing PicoClaw to the OpenAI Python client experience.
- **Model compatibility** issues (claude-opus-4-7, claude-sonnet ID format) indicate friction with rapidly evolving LLM provider APIs.

**Positive signals:**
- Active community contributions: 5 contributors submitted PRs in the last 24h.
- The Agent Collaboration Bus shows the project is innovating beyond single-agent use cases.
- Responsive fix culture: several stale issues were closed with corresponding merged PRs.

---

## 8. Backlog Watch

These items need maintainer attention:

| Item | Age | Why It Matters |
|---|---|---|
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) — Streaming config | 64 days, 11 comments | Most-engaged feature request; no assignee |
| [#2984](https://github.com/sipeed/picoclaw/issues/2984) — WebSocket turn completion | 8 days | Protocol gap affecting client developers |
| [#2990](https://github.com/sipeed/picoclaw/pull/2990) — Session history fix | 8 days (stale) | Fixes a closed bug; ready for review |
| [#2988](https://github.com/sipeed/picoclaw/pull/2988) — Context compression config | 8 days (stale) | Fixes `/context` command display |
| [#2987](https://github.com/sipeed/picoclaw/pull/2987) — tool_calls filtering | 8 days (stale) | Fixes streaming session message drops |
| [#2983](https://github.com/sipeed/picoclaw/pull/2983) — Empty LLM response retry | 9 days (stale) | Reliability fix for edge-case provider behavior |
| **All 14 security issues** (#3068–#3082) | 1 day | No maintainer acknowledgment; several are critical severity |

---

*Generated by OWL for PicoClaw (github.com/sipeed/picoclaw) — 2026-06-10*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-10

---

## 1. Today's Overview

NanoClaw is in a **high-throughput maintenance and consolidation phase**. Over the past 24 hours, PRs surged to 43 updates, with the vast majority (39) being merged or closed — indicating the maintainers are working through a substantial backlog of long-standing contributions rather than reviewing new work. Only 1 issue was updated (remaining open) and no new releases were published, suggesting the team is batching changes into a future release. The activity level is **very high on PR churn** but the cadence is catch-up rather than greenfield development. Project health is solid but the backlog signals a project that scaled faster than its review bandwidth.

---

## 2. Releases

**None.** No new releases in the tracking window.

---

## 3. Project Progress

Today's merged/closed PRs clean up contributions that have been open for weeks to months. The meaningful themes:

| Area | Representative PRs | What Advanced |
|---|---|---|
| **Security hardening** | [#2722](https://github.com/nanocoai/nanoclaw/pull/2722), [#1605](https://github.com/nanocoai/nanoclaw/pull/1605) | CSPRNG for Telegram pairing codes (closing a real vulnerability); deterministic security policy engine with tool restrictions and readonly mounts |
| **Documentation overhaul** | [#2721](https://github.com/nanocoai/nanoclaw/pull/2721), [#214](https://github.com/nanocoai/nanoclaw/pull/214), [#1084](https://github.com/nanocoai/nanoclaw/pull/1084) | Customizing/intro/skills docs establish the extension contract; comprehensive security audit report published; Container Sandbox System design doc captured |
| **Observability & ops** | [#1202](https://github.com/nanocoai/nanoclaw/pull/1202), [#337](https://github.com/nanocoai/nanoclaw/pull/337), [#1333](https://github.com/nanocoai/nanoclaw/pull/1333) | Agent trace logging with web UI dashboard on :3001; prompt trace logging with redaction; build-time version metadata in all log entries |
| **Architecture & extensibility** | [#1387](https://github.com/nanocoai/nanoclaw/pull/1387), [#1309](https://github.com/nanocoai/nanoclaw/pull/1309), [#1285](https://github.com/nanocoai/nanoclaw/pull/1285) | Plugin system mirroring channel architecture; skill marketplace/registry with CLI install; direct runner mode eliminating Docker dependency |
| **Skills & capabilities** | [#1245](https://github.com/nanocoai/nanoclaw/pull/1245), [#1161](https://github.com/nanocoai/nanoclaw/pull/1161) | `/approve` and `/reject` skills for capability gating; `/setup-dev` skill for local development workflows |
| **Model/config clarity** | [#1192](https://github.com/nanocoai/nanoclaw/pull/1192) | Claude model selection now explicit in code, eliminating confusion about which model is active per session |
| **Community skills** | [#1527](https://github.com/nanocoai/nanoclaw/pull/1527) | Room API proxy for self-hosted music-gen and facebook-page-manager services |

The closure of [#212](https://github.com/nanocoai/nanoclaw/pull/212) (WebUI control panel from February) as **blocked/pending closure** after months is notable — it signals a prioritization decision to defer the built-in web UI, possibly because external solutions were deemed sufficient.

---

## 4. Community Hot Topics

### Active (open items)

- **[[#1690](https://github.com/nanocoai/nanoclaw/issues/1690) — Multi-runtime agent SDK abstraction (Claude + Codex + local models)](https://github.com/nanocoai/nanoclaw/issues/1690)** 👍 **3** · 4 comments · Open since April 7, updated June 9
  - Author `chiptoe-svg` built an `AgentRuntime` interface abstraction layer that mirrors the existing channel integration pattern (`/add-telegram`, `/add-slack`) but for *agent SDKs*. This would let users swap Claude ↔ Codex ↔ local models as modular skills.
  - **Underlying need:** Vendor lock-in anxiety and demand for model portability. Users want the same "plug-in" experience for AI providers that they already have for communication channels. The 3 upvotes and continued engagement (updated today, 2 months after opening) confirm this is not a fringe request.

### Recently merged PRs receiving attention

- **[#2722](https://github.com/nanocoai/nanoclaw/pull/2722) — CSPRNG for Telegram pairing codes** — The only open PR today, fixing a real security issue. Expected to merge quickly.
- **[#2721](https://github.com/nanocoai/nanoclaw/pull/2721) — Skills customization docs** — Establishes the official mental model for how users should extend NanoClaw without merge conflicts, directly addressing the most common community friction point.

---

## 5. Bugs & Stability

| Severity | Issue / Fix | Status |
|---|---|---|
| 🔴 **High — Security** | Predictable Telegram pairing codes via `Math.random()` ([details](https://github.com/nanocoai/nanoclaw/pull/2722)) | **Fix PR open: [#2722](https://github.com/nanocoai/nanoclaw/pull/2722)** — switches to `crypto.randomInt` (CSPRNG) |
| 🟡 **Medium** | Potential issue surfaced in [#1690](https://github.com/nanocoai/nanoclaw/issues/1690) — no severity indicated, but a workaround/extension layer suggests friction in the existing single-runtime architecture | **Discussion ongoing**, no fix PR |

The security fix for pairing codes is the most critical item — predictable codes on a system where the first pairer can be promoted to **owner** is a serious concern. The PR is freshly opened and should be prioritized.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Likelihood | Rationale |
|---|---|---|
| **Multi-runtime/agent SDK abstraction** | ⬆️ **High** | [#1690](https://github.com/nanocoai/nanoclaw/issues/1690) has engaged community members, the author already built a working prototype, and it mirrors patterns the codebase already supports (channel plugins) |
| **Skill Marketplace/Registry** | ✅ **Shipped** | [#1309](https://github.com/nanocoai/nanoclaw/pull/1309) was closed/merged today |
| **Direct runner mode (no Docker)** | ✅ **Shipped** | [#1285](https://github.com/nanocoai/nanoclaw/pull/1285) merged today via `NANOCLAW_DIRECT_RUNNER=1` |
| **Plugin system** | ✅ **Shipped** | [#1387](https://github.com/nanocoai/nanoclaw/pull/1309) closed/merged today |
| **Built-in WebUI** | ⬇️ **Deferred** | [#212](https://github.com/nanocoai/nanoclaw/pull/212) marked blocked/pending closure after 4 months — the team appears to have moved to external/trace-based observability instead |

The clearest next-release candidate is the multi-runtime abstraction. The project is clearly trending toward a modular, plugin-first architecture.

---

## 7. User Feedback Summary

**Pain points:**

1. **Merge conflict anxiety when upgrading** — Solved by the newly merged docs in [#2721](https://github.com/nanocoai/nanoclaw/pull/2721) establishing that "every change is a skill." This was clearly the #1 extension pain point.
2. **Model opacity** — Users couldn't easily determine which Claude model was serving their sessions ([#1192](https://github.com/nanocoai/nanoclaw/pull/1192)).
3. **Docker dependency friction** — Multiple PRs (#1285, #1605) reflect users wanting lighter-weight, non-containerized execution paths.
4. **AI provider lock-in** — [#1690](https://github.com/nanocoai/nanoclaw/issues/1690) explicitly requests the ability to swap Claude for Codex or local models seamlessly.

**Satisfaction signals:** The volume and diversity of community contributions (security research, observability, docs, marketplace) indicate a maturing, engaged contributor base. The maintainers closing 39 PRs in a single day shows responsiveness to that community.

---

## 8. Backlog Watch

| Item | Age | Why It Needs Attention |
|---|---|---|
| **[#1690](https://github.com/nanocoai/nanoclaw/issues/1690) — Multi-runtime agent SDK abstraction** | 64 days open, updated today | The author has a working implementation. This is the most strategically important open issue — it defines NanoClaw's architecture for multi-model support. Needs a maintainer decision: accept, request changes, or close. |
| **[#212](https://github.com/nanocoai/nanoclaw/pull/212) — WebUI control panel** | 116 days open, now blocked/pending closure | A significant contribution (11-tab Lit + Vite panel) that has been in limbo for 4 months. If it's being closed, the maintainers should communicate the rationale and whether an alternative is planned. |
| **[#337](https://github.com/nanocoai/nanoclaw/pull/337) — Prompt trace logging** | 108 days open, closed/blocked | Overlapping with the observability PRs that *were* merged (#1202). Needs clarification on whether this is superseded or still desired. |
| **[#357](https://github.com/nanocoai/nanoclaw/pull/357) — External markdown seed files** | 107 days open, closed/blocked | Useful for persistence context customization. Should be either explicitly closed as "won't fix" or unblocked. |

**Recommendation:** The maintainers should triage the blocked/closed PRs with clear status labels (superseded vs. won't fix) to reduce contributor confusion and signal what kinds of contributions are currently desired.

---

*Data source: [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) · Digest generated 2026-06-10*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-10

---

## 1. Today's Overview

NullClaw saw a productive day with **5 issues** and **7 PRs** updated in the last 24 hours, though no new releases were published. The project is in a strong maintenance and polish phase: 4 of 5 issues were closed and 6 of 7 PRs were merged/closed, indicating a high throughput of bug fixes and small feature additions. The remaining open items — one issue and one PR — both touch agent tooling and suggest the team is actively refining the agent subsystem. Overall project health is good, with contributors rapidly closing reported bugs, though the lack of a new release means these fixes are still sitting on the main branch.

---

## 2. Releases

**None.** No new releases were published in the last 24 hours. The backlog of merged fixes (custom provider model listing, PII redaction false positives, Telegram typing indicator, dead config flag) is accumulating without a tagged release, which may leave users on older versions exposed to known issues.

---

## 3. Project Progress

Six PRs were merged or closed today, advancing several areas:

- **PR [#940](https://github.com/nullclaw/nullclaw/pull/940) — fix(models): query `base_url` for custom OpenAI-compatible providers**
  Selecting a custom provider via the `/models` menu now correctly queries the provider's `/v1/models` endpoint instead of falling back to a hardcoded Claude model list. This unblocks users of arbitrary OpenAI-compatible gateways.

- **PR [#945](https://github.com/nullclaw/nullclaw/pull/945) — fix(redaction): reject ISO date/time patterns as false-positive phone matches**
  The PII redactor no longer redacts system date/time output (e.g., `2026-06-02 20:17`) as phone numbers. A targeted `isDateLike()` guard was added to `matchPhone` in `src/redaction.zig`.

- **PR [#943](https://github.com/nullclaw/nullclaw/pull/943) — fix(telegram): show typing indicator during callback-query processing**
  Telegram inline button presses (`callback_query`) now trigger the "typing…" indicator, matching the behavior of regular text messages. Closes [#942](https://github.com/nullclaw/nullclaw/issues/942).

- **PR [#939](https://github.com/nullclaw/nullclaw/pull/939) — fix(agent): honor `compact_context` flag instead of always compacting**
  The previously dead `AgentConfig.compact_context` flag is now read at runtime, giving users control over whether conversation history is auto-compacted. Closes [#937](https://github.com/nullclaw/nullclaw/issues/937).

- **PR [#947](https://github.com/nullclaw/nullclaw/pull/947) — feat(providers): add Evolink as an OpenAI-compatible provider**
  [Evolink](https://evolink.ai) is now a first-class provider, exposing GPT-5, Gemini, DeepSeek, Doubao, MiniMax, and others through a single OpenAI-compatible endpoint.

- **PR [#711](https://github.com/nullclaw/nullclaw/pull/711) — Feat/cross memory**
  A long-running PR (opened 2026-03-23) adding a deterministic memory event stream for cross-agent memory synchronization was closed/merged today. This is a significant architectural addition enabling multi-agent workflows where agents share preferences and context.

---

## 4. Community Hot Topics

- **[Issue #941](https://github.com/nullclaw/nullclaw/issues/941) — Agent-type cron jobs don't spawn a subprocess (Telegram delivery never happens)** — **OPEN**, 1 comment, the only unresolved issue. A scheduled `agent`-type job with `delivery_mode: "always"` and `delivery_channel: "telegram"` marks itself complete without ever launching the agent subprocess. This is a functional break in the scheduling + delivery pipeline and the most pressing open item.

- **[PR #946](https://github.com/nullclaw/nullclaw/pull/946) — fix(agent): filter tools in system prompt text by `tool_filter_groups`** — **OPEN**. Adds `filterToolsForPromptText` so only built-in tools and MCP tools from `always` filter groups appear in the text-based system prompt. Dynamic-group MCP tools are omitted from text but still sent via native API tool-calling. This addresses prompt bloat and potential confusion when many MCP tools are registered.

- **[Issue #936](https://github.com/nullclaw/nullclaw/issues/936) — Custom OpenAI-compatible provider falls back to hardcoded Claude models** — Closed today via PR [#940](https://github.com/nullclaw/nullclaw/pull/940). The underlying need is clear: users expect custom providers to behave identically to built-in ones, including model discovery.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **High** | [#941](https://github.com/nullclaw/nullclaw/issues/941) — Agent cron jobs silently fail to spawn subprocess; Telegram delivery never fires | **OPEN, no fix yet** | — |
| 🟡 **Medium** | [#944](https://github.com/nullclaw/nullclaw/issues/944) — PII redactor falsely matches date/time output as phone numbers | **Closed** | [#945](https://github.com/nullclaw/nullclaw/pull/945) |
| 🟡 **Medium** | [#936](https://github.com/nullclaw/nullclaw/issues/936) — Custom provider model listing returns hardcoded Claude models | **Closed** | [#940](https://github.com/nullclaw/nullclaw/pull/940) |
| 🟢 **Low** | [#942](https://github.com/nullclaw/nullclaw/issues/942) — Missing Telegram typing indicator on inline button press | **Closed** | [#943](https://github.com/nullclaw/nullclaw/pull/943) |
| 🟢 **Low** | [#937](https://github.com/nullclaw/nullclaw/issues/937) — Dead `compact_context` flag parsed but never used | **Closed** | [#939](https://github.com/nullclaw/nullclaw/pull/939) |

**Key concern:** Issue [#941](https://github.com/nullclaw/nullclaw/issues/941) is the only high-severity open bug. Scheduled agent jobs silently succeeding without execution is a data-integrity-adjacent failure — users may believe a task ran when it did not. No fix PR has been opened yet.

---

## 6. Feature Requests & Roadmap Signals

- **Cross-agent memory synchronization** — PR [#711](https://github.com/nullclaw/nullclaw/pull/711) landed today after ~3 months. This signals investment in multi-agent workflows and shared state, likely a foundation for future collaboration features.

- **Tool filtering by group** — PR [#946](https://github.com/nullclaw/nullclaw/pull/946) (open) introduces `tool_filter_groups` for controlling which tools appear in the system prompt text. This suggests the project is scaling its MCP tool ecosystem and needs better prompt management.

- **New provider integrations** — The addition of Evolink ([#947](https://github.com/nullclaw/nullclaw/pull/947)) and the fix for custom provider model discovery ([#940](https://github.com/nullclaw/nullclaw/pull/940)) indicate a push toward broader LLM provider compatibility. Expect more first-class provider PRs in the near term.

- **Agent scheduling reliability** — The open [#941](https://github.com/nullclaw/nullclaw/issues/941) highlights that the scheduling subsystem needs hardening. A fix here is likely to appear in the next release cycle.

---

## 7. User Feedback Summary

- **Pain point: Silent failures in scheduling.** The most critical user-facing issue is [#941](https://github.com/nullclaw/nullclaw/issues/941) — a scheduled agent job that appears to succeed but never actually runs. For users relying on cron-style automation with Telegram delivery, this is a complete workflow break with no user-visible error.

- **Pain point: PII redaction over-triggering.** Issue [#944](https://github.com/nullclaw/nullclaw/issues/944) shows that the PII redactor (enabled by default since May 2026) is too aggressive, redacting benign system command output. Users who rely on agents to run `date` or similar commands see corrupted output.

- **Pain point: Custom provider friction.** Issue [#936](https://github.com/nullclaw/nullclaw/issues/936) reflects user frustration that custom OpenAI-compatible providers don't "just work" — the interactive model selector showed wrong models, undermining trust in the configuration system.

- **Positive signal: Rapid fix turnaround.** All four closed issues had corresponding fix PRs merged the same day, suggesting responsive maintainers. The community (contributors `raskevichai`, `vernonstinebaker`) is actively submitting high-quality fixes.

---

## 8. Backlog Watch

- **[Issue #941](https://github.com/nullclaw/nullclaw/issues/941) — Agent-type cron jobs don't spawn a subprocess** — Open since 2026-05-31, now 10+ days without a fix PR. This is the most urgent item needing maintainer attention. The bug affects a core feature (scheduled agent execution) and has a clear reproduction path.

- **[PR #946](https://github.com/nullclaw/nullclaw/pull/946) — Tool filtering by `tool_filter_groups`** — Open since 2026-003, updated today but still unmerged. The change touches the system prompt construction, which is sensitive — it may need careful review, but the longer it sits, the higher the risk of merge conflicts as the agent subsystem evolves.

- **No new release** — With 6 PRs merged today (including a major feature in [#711](https://github.com/nullclaw/nullclaw/pull/711)), users on the latest release are missing significant fixes and features. A new tagged release should be prioritized.

---

*Generated by OWL — 2026-06-10*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-10

---

## 1. Today's Overview

IronClaw is in a period of intense, high-velocity development with **47 issues** and **50 PRs** updated in the last 24 hours — a clear signal that the team is pushing hard on the Reborn production cutover and WebUI v2 stabilization. The dominant theme is **production readiness**: multiple stacked PRs and issues target the Reborn Postgres storage path, operator auth, subagent durability, and end-to-end smoke coverage for the new WebUI. No new releases shipped today, but the volume of open work (42 open issues, 42 open PRs) suggests a release is being assembled rather than shipped incrementally. The project is healthy in terms of throughput but carries a large surface of concurrent in-flight changes that will need careful integration.

---

## 2. Releases

**None.** No new releases were published in the last 24 hours.

---

## 3. Project Progress

### Closed/Merged Issues (5)

| # | Title | Significance |
|---|-------|-------------|
| [#4447](https://github.com/nearai/ironclaw/issues/4447) | Close OpenAI-compatible API migration with compatibility and security tests | Final acceptance gate for the #3283 OpenAI-compat migration — marks the SSE/streaming and redaction work as complete |
| [#4446](https://github.com/nearai/ironclaw/issues/4446) | Translate projection streams to OpenAI-compatible SSE | Streaming slice of the OpenAI-compat migration closed out |
| [#4591](https://github.com/nearai/ironclaw/issues/4591) | Operator command-plane foundation for setup, config, diagnostics, and lifecycle APIs | Shared operator API facade established for Reborn |
| [#4604](https://github.com/nearai/ironclaw/issues/4604) | Reborn WebUI v2 lacks browser-driven full-stack E2E | Closed — likely superseded by the new smoke-coverage epic (#4632) |
| [#4609](https://github.com/nearai/ironclaw/issues/4609) | Audit & test authentication parity for WebChat v2 | Auth parity audit completed |

### Key Open PRs Advancing

- **[#4663](https://github.com/nearai/ironclaw/pull/4663)** — Project-scoped automation ownership core model (XL, core). Establishes `CommunicationPreferenceKey::project(tenant, project)` with fail-closed ambiguous ownership resolution.
- **[#4664](https://github.com/nearai/ironclaw/pull/4664)** — Product-surface vocabulary rename completing the project-ownership stack.
- **[#4656](https://github.com/nearai/ironclaw/pull/4656)** — WU-C2 durable gate resolution store + capacity counter for subagent durability (survives host restarts).
- **[#4660](https://github.com/nearai/ironclaw/pull/4660)** — Fixes Reborn Docker production storage opt-in (`postgres` feature in `Dockerfile.reborn`).
- **[#4659](https://github.com/nearai/ironclaw/pull/4659)** — Fixes SSO operator WebUI auth so env bearer token remains the operator credential.
- **[#4658](https://github.com/nearai/ironclaw/pull/4658)** — Fixes per-caller Reborn extension auth state projection.
- **[#4613](https://github.com/nearai/ironclaw/pull/4613)** — Persistent approval policies with scoped allow/lookup/revoke.
- **[#4583](https://github.com/nearai/ironclaw/pull/4583)** — `NormalizingProvider` Layer-3 decorator closing RC1/M1 audit (tool_calls finish_reason normalization).
- **[#4650](https://github.com/nearai/ironclaw/pull/4650)** — Drops `temperature` for models that reject it (Opus 4.7/4.8, gpt-5.x).
- **[#4661](https://github.com/nearai/ironclaw/pull/4661)** — New `near` first-party extension for read-only NEAR mainnet queries (new contributor).

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

1. **[#3026](https://github.com/nearai/ironclaw/issues/3026)** — *Epic: Reborn production wiring and cutover readiness* (3 comments, P0, reborn, M4-host-kernel). The central epic driving most current work. Underlying need: the team needs a validated, default-off, rollback-aware production graph before exposing Reborn to real traffic. Multiple child issues (#4551, #4620, #4621) are actively decomposing this.

2. **[#4642](https://github.com/nearai/ironclaw/issues/4642)** — *Strict-mode providers' null-for-unset-optionals rejected by capability-port validation* (1 comment, bug). Affects most first-party tools — strict-mode LLM providers (e.g., OpenAI) send `null` for unset optional parameters, and IronClaw's validator rejects them against the non-nullable schema. This is a **cross-cutting compatibility bug** that could silently break tool calls across the board.

3. **[#88](https://github.com/nearai/ironclaw/issues/88)** — *Security hardening: device pairing, elevated mode, safe bins, media URL validation* (1 comment, P2-P3, safety). A long-standing feature parity issue (created 2026-02-14) tracking OpenClaw security features not yet ported to IronClaw. Still open after ~4 months.

### Most Active PRs

- **[#4600](https://github.com/nearai/ironclaw/pull/4600)** — Slack personal DM outbound targets (XL, core). Phase 4 C2 of trigger delivery. Already pushed `slack_host_state.rs` to 2,823 lines, triggering the file-size tracking issues (#4666, #4665).
- **[#4559](https://github.com/nearai/ironclaw/pull/4559)** — Agent-driven Trace Commons onboarding via invite link (XL, core). Replaces a 15-flag CLI flow with a single invite-link UX.
- **[#4492](https://github.com/nearai/ironclaw/pull/4492)** — Fix configured extension credential staging (XL, core, DB MIGRATION). Touches 20+ scope tags — a wide-reaching refactor of the local-dev SecretStore path.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 **High** | [#4642](https://github.com/nearai/ironclaw/issues/4642) | Strict-mode providers' `null` for unset optionals rejected by capability-port validation — breaks most first-party tools | ❌ No fix PR yet |
| 🔴 **High** | [#4548](https://github.com/nearai/ironclaw/issues/4548) | Chat completion serializes duplicate top-level `model` field when tools are included — DeepSeek returns HTTP 400 | ❌ No fix PR yet |
| 🟡 **Medium** | [#4587](https://github.com/nearai/ironclaw/issues/4587) | Minimax provider cannot be configured — `secret_store` read fails, reports `api_key_set=false` | ❌ No fix PR yet |
| 🟡 **Medium** | [#4640](https://github.com/nearai/ironclaw/issues/4640) | `google-calendar` `list_events` returns oldest/unordered events (no `timeMin`, missing `singleEvents`/`orderBy`) | ❌ No fix PR yet |
| 🟢 **Low** | [#4666](https://github.com/nearai/ironclaw/issues/4666) | `slack_host_state.rs` at 2,823 lines — approaching file-size cap | Tracking issue; decomposition needed |
| 🟢 **Low** | [#4665](https://github.com/nearai/ironclaw/issues/4665) | `slack_host_beta.rs` at 3,359 lines — over 3,000-line threshold | Tracking issue; decomposition needed |

**Notable:** The two high-severity bugs (#4642, #4548) both involve LLM provider API compatibility and could affect a wide range of users. Neither has an associated fix PR yet — these should be prioritized.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Description | Likelihood of Near-Term Delivery |
|-------|-------------|----------------------------------|
| [#4647](https://github.com/nearai/ironclaw/issues/4647) | Unified (omni) search across threads, skills, extensions, and memory | Medium — marked P1, fan-out first approach |
| [#4644](https://github.com/nearai/ironclaw/issues/4644) | Universal attachments across all channels (wire v1 pipeline into Reborn) | Medium — P1, but requires `MessageContent` contract change |
| [#4625](https://github.com/nearai/ironclaw/issues/4625) | Slack channel-routed personal and team agents | Medium — P1, but complex multi-tenant routing |
| [#4628](https://github.com/nearai/ironclaw/issues/4628) | Admin-shared tools and skills with per-user auth | Medium — high risk, P1 |
| [#4657](https://github.com/nearai/ironclaw/issues/4657) | Unify reusable Google OAuth credentials across GSuite scopes | Low — no priority label |
| [#4629](https://github.com/nearai/ironclaw/issues/4629) | Reborn/Crabshack closeout: delete obsolete legacy paths and config | High — natural follow-on after production cutover |

**Prediction:** The next release will likely focus on **production cutover readiness** (#3026 epic closure), **WebUI v2 smoke coverage** (#4632 epic), and the **project-scoped ownership model** (#4662–#4664). The omni-search and universal attachments features are strong candidates for the release after that.

---

## 7. User Feedback Summary

- **Provider compatibility pain is acute.** Two separate bugs (#4642, #4548) and one provider config failure (#4587) all point to friction with third-party LLM provider APIs. Users on DeepSeek, Minimax, and strict-mode OpenAI-compatible providers are hitting real blockers.
- **Production deployment is the top user-facing priority.** The #3026 epic and its children (#4551, #4620, #4621, #4646) reflect a team that is methodically working through the checklist for a production deploy — Postgres storage, Docker images, rollback proof, default-off gates.
- **WebUI v2 quality is being taken seriously.** The #4632 epic spawned 5 child test-coverage issues in a single day, targeting streaming, tool turns, auth parity, management surfaces, and SSO. This is a strong signal that the team wants the new UI to be reliable before wider exposure.
- **Security remains a background concern.** Issue #88 (security hardening) has been open since February with P2-P3 priority — users have noted the gap but it's not blocking.
- **New contributor engagement is healthy.** PRs from `abbyshekit` (#4661, #4650) and `danielwpz` (#4613) show the project is attracting external contributors for meaningful features.

---

## 8. Backlog Watch

| Item | Age | Why It Needs Attention |
|------|-----|----------------------|
| [#88](https://github.com/nearai/ironclaw/issues/88) — Security hardening (device pairing, elevated mode, safe bins, media URL validation) | ~4 months (2026-02-14) | P2-P3 safety issue with no recent activity. Multiple OpenClaw security features remain unported. |
| [#4642](https://github.com/nearai/ironclaw/issues/4642) — Strict-mode provider null-for-unset bug | 1 day | High-severity, affects most first-party tools, no fix PR yet. |
| [#4548](https://github.com/nearai/ironclaw/issues/4548) — DeepSeek duplicate `model` field | 2 days | Blocks DeepSeek users entirely when tools are involved. |
| [#4587](https://github.com/nearai/ironclaw/issues/4587) — Minimax provider config failure | 1 day | Provider is unusable; likely a SecretStore metadata issue. |
| [#4666](https://github.com/nearai/ironclaw/issues/4666) / [#4665](https://github.com/nearai/ironclaw/issues/4665) — File-size cap tracking | 0 days (just opened) | `slack_host_state.rs` and `slack_host_beta.rs` are over budget; every PR touching them makes it worse. Needs a decomposition plan. |
| [#4629](https://github.com/nearai/ironclaw/issues/4629) — Reborn/Crabshack legacy path cleanup | 1 day | High-risk refactoring; leaving dual code paths increases maintenance burden and bug surface. |

---

*Generated by OWL for IronClaw (github.com/nearai/ironclaw) — 2026-06-10*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-10

---

## 1. Today's Overview

LobsterAI saw moderate activity on 2026-06-09, with **2 new issues opened** and **5 pull requests updated** (4 closed/merged, 1 still open). No new releases were published. The development focus is clearly on **Cowork session task-completion notifications** and **data backup/migration** features, with multiple PRs touching the renderer, docs, and main areas landing in rapid succession. The project appears to be in an active iteration cycle around notification UX and cross-model sub-agent orchestration. Community engagement remains light (low comment and reaction counts), suggesting these are early-stage feature discussions.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours.

---

## 3. Project Progress

Four PRs were merged/closed today, advancing several features:

| # | PR | Area | Summary |
|---|-----|------|---------|
| [#2130](https://github.com/netease-youdao/LobsterAI/pull/2130) | feat(cowork): add task completion notifications | renderer, build, docs, main | Adds privacy-safe task completion reminders for Cowork sessions when LobsterAI is not in foreground. Includes a General settings toggle, system notifications (without exposing task titles/prompts), macOS Dock badge counts, and Windows taskbar indicators. |
| [#2134](https://github.com/netease-youdao/LobsterAI/pull/2134) | Liuzhq/task complete notice | renderer, docs, main | Restores LobsterAI from task completion notifications when the main window has been closed/destroyed. Waits for the renderer notification handler to be ready before opening the target Cowork session. Keeps active system notification references so macOS Notification Center clicks remain actionable. |
| [#2135](https://github.com/netease-youdao/LobsterAI/pull/2135) | chore: temporary close databackup | renderer | Temporarily disables the data backup feature (likely a hotfix or rollback). |
| [#2136](https://github.com/netease-youdao/LobsterAI/pull/2136) | feature: data backup and migration | renderer, docs, main | Implements data backup and migration functionality (subsequently closed — possibly superseded by #2135's temporary disablement). |

**Key takeaway:** The team shipped a **task completion notification system** for Cowork sessions across platforms (macOS + Windows) in two complementary PRs (#2130 + #2134). Simultaneously, a **data backup feature** was developed (#2136) but appears to have been temporarily pulled back (#2135), suggesting stability or design concerns.

**Still open:**
- [#2133](https://github.com/netease-youdao/LobsterAI/pull/2133) — fix: fix export and code copy bugs (renderer, cowork)

---

## 4. Community Hot Topics

### Issue [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132) — 跨模型子任务调用的问题
**Author:** woxinsj | **Comments:** 0 | **👍:** 0

This is the most technically substantive issue today. The user reports a **cross-model sub-agent orchestration failure**: when a main task (using model M3 for planning/oversight) delegates to a sub-task (using DeepSeek for fast execution), the sub-task completion is not properly tracked. The root cause identified is that `call_function_gblu0nmqpcej_1` is a **gateway-level function call**, not a `sessions_spawn`-created sub-agent, so it doesn't appear in `sessions_list` or `subagents`. The user proposes two design improvements:
1. Borrow the same-model sub-agent completion notification mechanism for cross-model scenarios.
2. Allow sub-agents to proactively notify the main task upon completion or when blocked.

**Underlying need:** Users are building **multi-model agent pipelines** (planning model + execution model) and need reliable cross-model task lifecycle management. This is a sophisticated use case signaling that LobsterAI's user base includes advanced agent builders.

### Issue [#2131](https://github.com/netease-youdao/LobsterAI/issues/2131) — LobsterAI 支持 hermes agent有计划吗？
**Author:** wtgoku-create | **Comments:** 1 | **👍:** 0

A user asks about **Hermes agent support** plans. With only 1 comment, this is a lightweight feature inquiry, but it signals interest in broader agent framework compatibility.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| 🔴 **Medium** | [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132) | Cross-model sub-agent orchestration: gateway function calls not tracked in sub-agent lifecycle | No fix PR yet |
| 🟡 **Low** | [#2133](https://github.com/netease-youdao/LobsterAI/pull/2133) | Export and code copy bugs in renderer/cowork | Fix PR open, not yet merged |
| 🟡 **Low** | [#2135](https://github.com/netease-youdao/LobsterAI/pull/2135) → [#2136](https://github.com/netease-youdao/LobsterAI/pull/2136) | Data backup feature temporarily disabled (possible stability concern) | Rolled back via #2135 |

**Assessment:** No critical crashes or regressions reported. The cross-model sub-agent issue (#2132) is the most impactful bug — it affects users building multi-model agent workflows, which is a core advanced use case. The data backup rollback (#2135 closing #2136) suggests the team is being cautious about data integrity.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood | Notes |
|---------|--------|------------|-------|
| **Cross-model sub-agent orchestration** | [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132) | **High** | The issue includes a detailed root cause analysis and proposed design. The team already has same-model sub-agent notification infrastructure (referenced in the issue), so extending it to cross-model is a natural next step. |
| **Hermes agent support** | [#2131](https://github.com/netease-youdao/LobsterAI/issues/2131) | **Low-Medium** | Single user request, no maintainer response yet. Depends on Hermes framework adoption in the community. |
| **Data backup & migration** | [#2136](https://github.com/netease-youdao/LobsterAI/pull/2136) / [#2135](https://github.com/netease-youdao/LobsterAI/pull/2135) | **High (but delayed)** | Feature was built but temporarily pulled. Will likely return after stability fixes. |

**Prediction:** The next release will likely focus on **Cowork notification polish** (already merged) and may include the **cross-model sub-agent fix** given the detailed technical analysis provided by the community.

---

## 7. User Feedback Summary

**Pain points identified today:**

1. **Multi-model agent workflows are fragile.** Advanced users orchestrating different models for planning vs. execution are hitting lifecycle management gaps. The sub-agent tracking system was designed for same-model delegation and doesn't generalize well to cross-model scenarios. This is a **dissatisfaction signal** from power users.

2. **Data backup is a desired but unstable feature.** The fact that a backup feature was built, merged, and then temporarily disabled within the same day suggests the feature is **user-requested but not yet production-ready**. Users wanting data portability may be frustrated by the rollback.

3. **Notification UX is being actively improved.** The two merged PRs (#2130, #2134) show the team is responsive to users who want to stay informed about background task completion — a common need for long-running agent sessions.

**Satisfaction signals:** The rapid iteration on notifications (two PRs merged in one day) suggests a responsive development cycle. The privacy-safe approach to notifications (not exposing task titles/prompts) shows thoughtful UX design.

---

## 8. Backlog Watch

| Item | Age | Risk | Recommendation |
|------|-----|------|----------------|
| [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132) — Cross-model sub-agent orchestration | 1 day (new) | **Watching** — No maintainer response yet, but issue contains detailed technical analysis. Given the sophistication of the use case, this deserves a maintainer acknowledgment to signal prioritization. | Maintainer should confirm whether cross-model sub-agent tracking is on the roadmap. |
| [#2131](https://github.com/netease-youdao/LobsterAI/issues/2131) — Hermes agent support | 1 day (new) | **Low** — Single user inquiry, low engagement. | Can be triaged as "under consideration" or closed with a roadmap link. |
| [#2133](https://github.com/netease-youdao/LobsterAI/pull/2133) — Export and code copy bugs | 1 day (new) | **Low** — Fix PR is open but not yet reviewed/merged. | Needs reviewer attention; straightforward bug fix. |

**No long-unanswered critical items** were identified in today's data. All items are less than 24 hours old. However, the cross-model sub-agent issue (#2132) should be flagged for early maintainer engagement given its technical depth and relevance to advanced users.

---

*Data source: [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) | Digest generated: 2026-06-10*

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

# CoPaw Project Digest — 2026-06-10

---

## 1. Today's Overview

CoPaw (agentscope-ai/CoPaw) is in a period of intensive mid-cycle development, with very high activity: **33 issues updated** (16 still open, 17 closed) and **34 pull requests updated** (18 open, 16 merged/closed) in the past 24 hours, plus one new **beta release (v1.1.11-beta.2)**. The project is clearly in a sprint-paced cadence, shipping bugs and features at a rapid clip. However, the open-issue backlog is growing — several batch-reporter accounts are filing large volumes of bugs simultaneously, which could strain triage capacity. The most impactful structural work underway is the **AgentScope 2.0 backend migration** ([#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)), which is tracked as a breaking change and will be the next major inflection point for the project.

---

## 2. Releases

### v1.1.11-beta.2 ([PR #5055](https://github.com/agentscope-ai/QwenPaw/pull/5055))

**What's changed:**
- **Browser tool enhancements** — Added page coordinate click support to `browser_control` (enables precise pixel-level clicking) and added a CDP timeout parameter plus browser profile isolation for cross-browser switching ([#4905](https://github.com/agentscope-ai/QwenPaw/pull/4905)).
- **/compact and auto-compaction fix** — Previously, when `active_model` was unset in `agent.json`, context compaction silently fell back to a hardcoded 128K default instead of reading the model's true `max_input_length`. Fixed in [#5021](https://github.com/agentscope-ai/QwenPaw/pull/5021).
- **Breaking change warning:** The AgentScope 2.0 migration ([#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)) is still open and will likely land in a future release. Users on AgentScope 1.x (`agentscope==1.0.20`) should monitor this issue for migration guidance.

---

## 3. Project Progress

### Merged / Closed PRs Today

| PR | Summary |
|---|---|
| [#5021](https://github.com/agentscope-ai/QwenPaw/pull/5021) | **fix(config):** `/compact` and auto-compaction now correctly use the model's `max_input_length` from config instead of falling back to 128K |
| [#5043](https://github.com/agentscope-ai/QwenPaw/pull/5043) | **feat(security):** OpenSandbox plugin added with MCP protocol support — isolated code execution for agents |
| [#5048](https://github.com/agentscope-ai/QwenPaw/pull/5048) | **fix(agent):** Defensive await for unawaited coroutine in `_broadcast_to_subscribers`, fixing edge cases where async bound methods are misidentified |
| [#5049](https://github.com/agentscope-ai/QwenPaw/pull/5049) | **feat(providers):** Zero-config free models + one-click OAuth authentication for paid providers (e.g., OpenRouter) |
| [#5050](https://github.com/agentscope-ai/QwenPaw/pull/5050) | **fix(ui):** System theme toggle icon changed from computer to sun for clarity |
| [#5054](https://github.com/agentscope-ai/QwenPaw/pull/5054) | **ci(e2e):** Complete E2E Playwright CI pipeline with backend coverage collection and flaky test fixes |
| [#5056](https://github.com/agentscope-ai/QwenPaw/pull/5056) | **ci:** Removed redundant `channel-tests.yml` workflow (already covered by `tests.yml`) |
| [#4857](https://github.com/agentscope-ai/QwenPaw/pull/4857) | **feat(skills):** Enhanced `make-skill` flow with background execution via `spawn_subagent(fork=True)` for self-evolving skill creation |

**Key themes:**
- **Security hardening** — OpenSandbox plugin ([PR #5043](https://github.com/agentscope-ai/QwenPaw/pull/5043)) and the in-progress file-preview path restriction fix ([#4981](https://github.com/agentscope-ai/QwenPaw/pull/4981)) show a growing focus on sandboxing and filesystem security.
- **Provider ecosystem expansion** — Zero-config free models and OAuth ([PR #5049](https://github.com/agentscope-ai/QwenPaw/pull/5049)) lower the barrier to entry significantly.
- **CI/CD maturity** — E2E pipeline completion and CI deduplication indicate the project is investing in release reliability.

---

## 4. Community Hot Topics

### Most Discussed Issues

| Issue | Comments | Signal |
|---|---|---|
| [#5017](https://github.com/agentscope-ai/QwenPaw/issues/5017) — Suggestion: study Hermes Agent's Learning Loop | 10 💬, 👍3 | A user recommends adopting Hermes Agent's "Learning Loop" (self-evolving skills). Notably, PR #4857 shipping self-evolving skill creation in this release cycle directly addresses this direction. |
| [#5003](https://github.com/agentscope-ai/QwenPaw/issues/5003) — Qwen3.7-plus hangs on Aliyun Coding Plan | 8 💬 | Multiple users experiencing hangs with a specific provider+model combo. Needs investigation into provider-specific streaming or timeout handling. |
| [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) — Migrate backend to AgentScope 2.0 (Breaking Change) | 7 💬, 👍2 | The most structurally significant open issue. Users need this tracked closely; downstream integrations may need updates. |
| [#5015](https://github.com/agentscope-ai/QwenPaw/issues/5015) — Windows Desktop UI lag during task execution | 5 💬 | Front-end performance regression on Windows, especially during active agent execution. Cross-references with [#4792](https://github.com/agentscope-ai/QwenPaw/issues/4792) (streaming output causes system-wide lag). |
| [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) — Qwen 3.6-27B local vLLM model unresponsive on v1.1.9+ | 4 💬 | Working on v1.1.5.post2 but broken on newer versions — suggests a regression in provider compatibility or response parsing after v1.1.5. |

### Analysis
The community's underlying needs cluster into three areas: **(1) Competitive feature parity** — users are watching projects like Hermes Agent and want CoPaw to match advanced features (learning loops, memory evolution); **(2) Stability on Windows** — multiple reports of UI freezes, path overflow ([#4988](https://github.com/agentscope-ai/QwenPaw/issues/4988)), and desktop-specific bugs suggest Windows first-class support needs more investment; **(3) Provider compatibility breadth** — friction with DeepSeek naming rules, response parsing across models, and KimiCode thinking display all point to the OpenAI-compatible provider layer being a high-surface-area pain point.

---

## 5. Bugs & Stability

### New Bugs Reported Today (ranked by severity)

| Severity | Issue | Summary | Fix PR? |
|---|---|---|---|
| 🔴 High | [#5039](https://github.com/agentscope-ai/QwenPaw/issues/5039) — tag-derived tool calls overwrite each other in OpenAI-compat stream parser | Tool calls from multiple thinking blocks get overwritten instead of accumulated, causing silent tool-call loss. Reproducible on `main`. | 🔧 Open — needs fix |
| 🔴 High | [#5025](https://github.com/agentscope-ai/QwenPaw/issues/5025) — `submit_to_agent` session file path `FileNotFoundError` | Background inter-agent task submission fails at execution time due to session file naming inconsistency. | ✅ [#5036](https://github.com/agentscope-ai/QwenPaw/pull/5036) open |
| 🟡 Medium | [#5045](https://github.com/agentscope-ai/QwenPaw/issues/5045) — Dots in PAT tool names (`pat.batch_plan`) rejected by DeepSeek API | Tool naming with dots violates DeepSeek's `^[a-zA-Z0-9_-]+$` regex requirement. | ⚠️ Closed as invalid/external; no fix in CoPaw scoped |
| 🟡 Medium | [#5044](https://github.com/agentscope-ai/QwenPaw/issues/5044) — Tauri desktop: external links & file downloads broken | Two desktop UX issues from `tauri://localhost` origin isolation. Affects documentation access and export/backup downloads. | ⏳ Open |
| 🟡 Medium | [#5042](https://github.com/agentscope-ai/QwenPaw/issues/5042) — Windows: "Open Directory" fails for drives other than C: | Code directory selection limited to C: drive. | ⏳ Open |
| 🟡 Medium | [#4988](https://github.com/agentscope-ai/QwenPaw/issues/4988) — Session filename duplication causes Windows `MAX_PATH` overflow | Session ID duplicated in filename → path too long on Windows. | ✅ [#5036](https://github.com/agentscope-ai/QwenPaw/pull/5036) open |
| 🟡 Medium | [#5031](https://github.com/agentscope-ai/QwenPaw/issues/5031) — Skill slash invocation shows expanded SKILL.md in Console | UX regression: `/pdf` command displays raw skill markdown instead of a clean invocation indicator. | ⏳ Open |
| 🟢 Low | [#5057](https://github.com/agentscope-ai/QwenPaw/issues/5057) — DingTalk AI Card sends empty card when agent output is empty | Minor UX: empty agent output still triggers a "processing..." card. | ⏳ Open |
| 🟢 Low | [#5030](https://github.com/agentscope-ai/QwenPaw/issues/5030) — Proactive mode causes duplicate replies on WeChat channel | Workaround exists (disable proactive mode). | ⏳ Open |

### Notable Regression
- **v1.1.9+ broke local vLLM model compatibility** ([#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989)) — Qwen 3.6-27B via vLLM works on v1.1.5.post2 but hangs silently on v1.1.9 and v1.1.10. No error logs. This is a **silent regression** affecting users with local model deployments and needs urgent triage.

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests

| Issue | Description | Likelihood in Next Release |
|---|---|---|
| [#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) — Independent visual model fallback (`visual_model`) | Allow a separate vision model when the main model is text-only. Clean architecture, high user demand. | 🟡 Medium — well-scoped, aligns with provider expansion work |
| [#4994](https://github.com/agentscope-ai/QwenPaw/issues/4994) — Self-evolving memory system | User requests layered memory with auto-evolution, similar to Hermes. | 🟡 Medium — PR #4857 (self-evolving skills) is a stepping stone |
| [#5009](https://github.com/agentscope-ai/QwenPaw/issues/5009) — Observability/tracing integration (Langfuse, OpenTelemetry) | Request for built-in tracing, token usage metrics, latency breakdown. | 🔵 Low — no signals this is being worked on yet |
| [#4778](https://github.com/agentscope-ai/QwenPaw/issues/4778) — Cron task management UX improvements | 4 specific UX improvements for manual cron creation (session naming, simpler input format, timestamps, inbox-to-session linking). | 🟢 High — small, well-defined UX fixes |
| [#4951](https://github.com/agentscope-ai/QwenPaw/issues/4951) — OpenSandbox support | ✅ **Already shipped** in PR #5043. | ✅ Delivered |

### Prediction
The **next minor release (v1.1.11 stable)** will likely include: the stream parser tool-call accumulation fix ([#5039](https://github.com/agentscope-ai/QwenPaw/issues/5039)), the session filename fix ([#5036](https://github.com/agentscope-ai/QwenPaw/pull/5036)), and the visual model fallback ([#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992)). The **AgentScope 2.0 migration** will be a v2.0 or v1.2.0 milestone event.

---

## 7. User Feedback Summary

### Pain Points
- **Windows experience is a persistent weak spot** — UI lag ([#5015](https://github.com/agentscope-ai/QwenPaw/issues/5015)), path overflow ([#4988](https://github.com/agentscope-ai/QwenPaw/issues/4988)), drive selection ([#5042](https://github.com/agentscope-ai/QwenPaw/issues/5042)), Tauri desktop issues ([#4733](https://github.com/agentscope-ai/QwenPaw/issues/4733), [#5044](https://github.com/agentscope-ai/QwenPaw/issues/5044)). Windows users are a significant portion of the user base and are experiencing friction across multiple surfaces.
- **Provider compatibility is fragile** — DeepSeek tool naming rules, KimiCode thinking display, MiniMax reasoning content filtering, and vLLM regression all point to the OpenAI-compatible abstraction layer needing more robust provider-specific handling.
- **Session management UX is confusing** — Multiple issues ([#4971](https://github.com/agentscope-ai/QwenPaw/issues/4971), [#4778](https://github.com/agentscope-ai/QwenPaw/issues/4778)) request better session switching, naming, and navigation.

### Positive Signals
- Users explicitly praise CoPaw's **localization and out-of-box experience** compared to alternatives ([#5017](https://github.com/agentscope-ai/QwenPaw/issues/5017)).
- The **self-evolving skill creation** feature (PR #4857) directly addresses a community-requested direction, showing the team is listening.
- **Zero-config free models** (PR #5049) will significantly lower the barrier for new users.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Why It Matters |
|---|---|---|
| [#2777](https://github.com/agentscope-ai/QwenPaw/issues/2777) — GPT-5.x models fail with `max_tokens` parameter error | 70+ days (since 2026-04-01) | Hardcoded model list in `provider_manager.py` instead of dynamic fetching. Affects all OpenAI GPT-5.x users. No assignee, no linked PR. |
| [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) — AgentScope 2.0 migration (Breaking Change) | 14 days | The most consequential architectural change on the horizon. Needs a migration guide and clear communication timeline. |
| [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) — Local vLLM Qwen 3.6-27B silent hang on v1.1.9+ | 4 days | Silent regression with no error logs. Affects users with local model deployments — a core use case for CoPaw. Needs bisection to identify the breaking commit. |
| [#5003](https://github.com/agentscope-ai/QwenPaw/issues/5003) — Qwen3.7-plus hangs on Aliyun Coding Plan | 2 days | 8 comments, active discussion. Provider-specific hang with no resolution. |
| [#4792](https://github.com/agentscope-ai/QwenPaw/issues/4792) — Streaming output causes system-wide client lag | 11 days | Severe UX issue — mouse becomes unresponsive during long streaming responses. Related to [#5015](https://github.com/agentscope-ai/QwenPaw/issues/5015). |

### PRs Awaiting Review

| PR | Description | Note |
|---|---|---|
| [#5036](https://github.com/agentscope-ai/QwenPaw/pull/5036) | Fix session filename duplication + Desktop inter-agent call failures | Fixes two Windows-critical bugs; should be prioritized |
| [#4981](https://github.com/agentscope-ai/QwenPaw/pull/4981) | Restrict file preview to `WORKING_DIR`, block sensitive paths | Security fix; has been open 4 days |
| [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) | Tauri desktop auto-updater | Open 15 days; important for desktop user experience |
| [#5033](https://github.com/agentscope-ai/QwenPaw/pull/5033) | CloudPaw plugin: AgentHub import + A2A capabilities | New contributor; expands ecosystem integration |

---

*Data source: agentscope-ai/CoPaw (GitHub), snapshot 2026-06-10. All links reference the QwenPaw repository as reflected in the source data.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-06-10

---

## 1. Today's Overview

ZeroClaw remains in a highly active development phase with **50 issues and 50 PRs updated in the last 24 hours**, signaling a large and engaged contributor base. No new releases have been published recently, with the latest known version being **v0.8.0-beta-1**. The project is clearly in a heavy iteration cycle: the vast majority of issues (48/50) and PRs (49/50) remain open, with only 2 issues and 1 PR closed/merged in the reporting window. Activity is concentrated across **runtime stability, security hardening, channel expansion, and provider architecture** — all core infrastructure areas. The absence of new releases despite this volume of work suggests the team is accumulating changes for a significant upcoming release.

---

## 2. Releases

**No new releases today.** The latest known version is **v0.8.0-beta-1**. Multiple PRs in the pipeline (e.g., PR #7361, #7367, #7265, #7270, #7278) represent substantial feature work that will likely land in the next release cycle.

---

## 3. Project Progress

Only **1 PR was merged/closed** in the last 24 hours:

- **[PR #7425 [CLOSED]](https://github.com/zeroclaw-labs/zeroclaw/pull/7425)** — `fix(runtime): resolve channel pricing via bare-type fallback in cost lookup`
  - **Impact:** Fixed a silent bug where channel cost tracking recorded `cost_usd = 0` for every channel agent, rendering per-day budget enforcement completely inert. The root cause was a key mismatch in the pricing map (bare provider type vs. full channel key). This is an important fix for anyone relying on cost controls.

**2 issues were closed:**

- **[Issue #4710 [CLOSED]](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)** — Logo redesign feature request (19 comments, low priority, was blocked/accepted). Closed after extended community discussion.
- **[Issue #7117 [CLOSED]](https://github.com/zeroclaw-labs/zeroclaw/issues/7117)** — Config UX parity across CLI, Quickstart, zerocode, and web surfaces. Closed (was accepted, P2).

Several high-value PRs are open and advancing:

- **[PR #7440](https://github.com/zeroclaw-labs/zeroclaw/pull/7440)** — Skips futile history trimming when the system prompt alone exceeds the context budget, directly addressing the pain point from [Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808).
- **[PR #7441](https://github.com/zeroclaw-labs/zeroclaw/pull/7441)** — Fixes the doctor command to validate custom model providers against actual config rather than the legacy factory.
- **[PR #7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361)** — Large PR implementing per-turn output routing (`send_via`) and voice delivery fixes across 8 channels (Slack, Telegram, CLI, Discord, Matrix, Nextcloud Talk, WeCom).
- **[PR #7367](https://github.com/zeroclaw-labs/zeroclaw/pull/7367)** — Routes inbound webhooks per channel alias, fixing multi-instance channel configs (e.g., separate work/personal WhatsApp instances).

---

## 4. Community Hot Topics

The most discussed issues reveal clear community priorities:

| Issue | Comments | Signal |
|-------|----------|--------|
| **[#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)** — A better LOGO | 19 💬, 👍2 | Branding/community identity; closed today after months of discussion |
| **[#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)** — Agent doesn't know it can add cron | 12 💬 | **Agent self-awareness gap**: the agent fails to discover its own cron tool, pointing to a tool-description or system-prompt issue |
| **[#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937)** — Unify providers architecture & reqwest client | 10 💬 | **Technical debt**: significant code duplication and inconsistent reqwest usage across providers; accepted and high-risk |
| **[#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)** — Per-sender RBAC for multi-tenant deployments | 9 💬 | **Enterprise demand**: single ZeroClaw instance serving multiple user classes with isolated workspaces, tools, rate limits |
| **[#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378)** — Discord bot respond only in specific channels | 7 💬 | Channel-level access control parity (Matrix/Nextcloud Talk already have `allowed_rooms`) |
| **[#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)** — Too much emphasis on memory | 6 💬 | Agent over-prioritizes stored memories over current prompt, especially in cron jobs |

**Underlying needs analysis:**
- **Multi-tenancy & security** (RBAC, per-sender isolation, skill-scoped permissions) is a dominant theme — users are deploying ZeroClaw in production for multiple users and hitting security boundaries.
- **Agent reliability & self-knowledge** — the agent not knowing about its own tools (cron) and over-relying on memory suggest system prompt and tool registration improvements are needed.
- **Channel maturity** — Discord channel restrictions, Telegram delivery issues, and the large batch PRs for new channels (SMS, Mastodon, Rocket.Chat, Zulip, Lemmy) show the community wants ZeroClaw to be a universal messaging gateway.

---

## 5. Bugs & Stability

Ranked by severity:

### S1 — Workflow Blocked

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| **[#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034)** | User messages lost in single/multi-turn conversations with custom providers (5 💬) | ❌ |
| **[#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)** | Default 32k context budget exceeded by system prompt + tool definitions on iteration 1, causing perpetual preemptive trim (3 💬) | ✅ [PR #7440](https://github.com/zeroclaw-labs/zeroclaw/pull/7440) |
| **[#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002)** | Telegram messages not clearly addressed to the assistant when using llama.cpp locally (4 💬) | ❌ |
| **[#6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646)** | `web_search_tool` and `web_fetch` not firing via Telegram in v0.7.5 (3 💬) | ✅ [PR #7438](https://github.com/zeroclaw-labs/zeroclaw/pull/7438) |
| **[#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037)** | Cron jobs can launch repeatedly while still running — observed 20x burst execution (1 💬, in-progress) | ❌ |

### S2 — Degraded Behavior

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| **[#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)** | Memory over-emphasis in system prompt (6 💬) | ❌ |
| **[#6584](https://github.com/zeroclaw-labs/zeroclaw/issues/6584)** | OpenAI-Compatible provider ignores `reasoning` field, only reads `reasoning_content` (3 💬) | ❌ |
| **[#7376](https://github.com/zeroclaw-labs/zeroclaw/issues/7376)** | zerocode Dashboard hides unavailable/error states, mislabels history as active sessions (1 💬) | ❌ |

### S3 — Minor Issues

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| **[#7377](https://github.com/zeroclaw-labs/zeroclaw/issues/7377)** | zerocode dark themes inherit unreadable terminal foreground text (1 💬) | ❌ |
| **[#7378](https://github.com/zeroclaw-labs/zeroclaw/issues/7378)** | macOS Cmd-C copy treated as quit chord in zerocode (1 💬) | ❌ |
| **[#7400](https://github.com/zeroclaw-labs/zeroclaw/issues/7400)** | zerocode locale selection appears to do nothing until restart (1 💬) | ❌ |

### Security-Relevant Bugs

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| **[#6876](https://github.com/zeroclaw-labs/zeroclaw/issues/6876)** | `risk_profile.allowed_tools` does not restrict MCP tools — by design or doc gap? (3 💬) | ❌ |
| **[#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916)** | No process-memory limits on shell/skill_tool subprocess — can OOM container (3 💬) | ❌ |
| **[#6862](https://github.com/zeroclaw-labs/zeroclaw/issues/6862)** | Gateway SPA fallback serves `index.html` for unimplemented `/api/*` routes, breaking dashboard JSON.parse (2 💬) | ❌ |

---

## 6. Feature Requests & Roadmap Signals

**High-confidence candidates for the next release (based on accepted status, active PRs, and maintainer attention):**

1. **Channel expansion batch** — [PR #7265](https://github.com/zeroclaw-labs/zeroclaw/pull/7265) (5 SMS channels: Twilio, Plivo, Telnyx, Sinch, Vonage) and [PR #7270](https://github.com/zeroclaw-labs/zeroclaw/pull/7270) (Mastodon, Rocket.Chat, Zulip, Lemmy) are both large, structured PRs with documentation. These are strong candidates to land soon.

2. **Integration tools batch** — [PR #7278](https://github.com/zeroclaw-labs/zeroclaw/pull/7278) adds Home Assistant, Philips Hue, 8Sleep, Spotify, and Sonos as built-in tools. This significantly expands ZeroClaw's smart-home/entertainment use case.

3. **Per-turn output routing** — [PR #7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) implements `send_via` for directing agent output to specific channels mid-conversation, plus voice delivery fixes. This is a major architectural feature.

4. **Webhook routing per channel alias** — [PR #7367](https://github.com/zeroclaw-labs/zeroclaw/pull/7367) fixes multi-instance channel support, critical for production deployments.

5. **Remote admin reload** — [PR #7344](https://github.com/zeroclaw-labs/zeroclaw/pull/7344) adds `gateway.allow_remote_admin` to allow config reloads from remote dashboards without full restart.

**Medium-term signals (accepted but no active PR yet):**
- **Provider architecture unification** ([#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937), 10 comments) — accepted, high-risk refactor.
- **Per-sender RBAC** ([#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982), 9 comments) — accepted, blocked, needs author action.
- **Skill-scoped security permissions** ([#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775)) — accepted, blocked.
- **`.well-known` URI skill installation** ([#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)) — accepted, help wanted.

---

## 7. User Feedback Summary

**Pain points:**

- **Context budget exhaustion** is a recurring, critical complaint. Users with default settings (32k tokens) find that the system prompt plus tool definitions alone exceed the budget on the first iteration ([#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)), causing perpetual trimming and degraded responses. This affects users with large tool surfaces the most.

- **Agent tool discovery failures** — the agent not knowing about its own `zeroclaw cron` capability ([#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)) suggests the tool registration or system prompt tool descriptions need improvement. This erodes user trust in the agent's competence.

- **Custom/local provider fragility** — multiple issues ([#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034), [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002), [#6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646)) report message loss, tool failures, and addressing problems when using OpenAI-compatible backends (llama.cpp, LM Studio, custom APIs). This is a significant segment of the user base.

- **Cost tracking silently broken** — the channel pricing bug (fixed in PR #7425) meant budget enforcement was completely non-functional for channel agents. Users relying for cost controls would have had no indication.

- **zerocode TUI quality** — multiple minor but accumulating complaints about dark theme readability ([#7377](https://github.com/zeroclaw-labs/zeroclaw/issues/7377)), macOS key handling ([#7378](https://github.com/zeroclaw-labs/zeroclaw/issues/7378)), error state visibility ([#7376](https://github.com/zeroclaw-labs/zeroclaw/issues/7376)), and locale selection ([#7400](https://github.com/zeroclaw-labs/zeroclaw/issues/7400)) suggest the TUI needs a polish pass.

**Use cases observed:**
- Multi-tenant deployments with per-sender RBAC needs (enterprise/team use)
- Smart home automation (Home Assistant, Philips Hue, 8Sleep integrations in PR)
- Multi-channel messaging hub (users connecting 5+ channels simultaneously)
- Local LLM backends (llama.cpp, LM Studio) for privacy/cost reasons

---

## 8. Backlog Watch

These important issues and PRs have been open for extended periods and may need maintainer attention:

| Item | Age | Status | Note |
|------|-----|--------|------|
| **[#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)** — Context budget exceeded on iteration 1 | ~55 days | Accepted, P1 | Fix PR #7440 now open; needs review/merge |
| **[#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)** — Agent doesn't know about cron | ~53 days | Blocked, needs author action | 12 comments; core agent capability gap |
| **[#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937)** — Provider architecture unification | ~51 days | Accepted, P2 | 10 comments; significant refactor, no PR yet |
| **[#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775)** — Per-skill security permissions | ~56 days | Blocked, accepted | Security-critical; needs unblock |
| **[#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)** — `.well-known` URI skill installation | ~75 days | Help wanted, accepted | Aligns with Agent Skills standardization effort |
| **[#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037)** — Cron job duplicate execution | ~48 days | In-progress, P1 | Active but no PR linked; production-impacting |
| **[#6876](https://github.com/zeroclaw-labs/zeroclaw/issues/6876)** — `allowed_tools` doesn't restrict MCP tools | ~18 days | Accepted, P1, no-stale | Security design question needs maintainer clarification |
| **[PR #7265](https://github.com/zeroclaw-labs/zeroclaw/pull/7265)** — 5 SMS channels (XL) | ~5 days | Open, needs author-action | Large PR; may need author follow-up |
| **[PR #7270](https://github.com/zeroclaw-labs/zeroclaw/pull/7270)** — 4 social channels (XL) | ~5 days | Open, needs author-action | Large PR; may need author follow-up |
| **[PR #7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361)** — Per-turn output routing (XL) | ~3 days | Open | Complex, cross-channel; needs thorough review |

**Key concern:** Issues [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) (agent can't discover cron) and [#5937](https://zeroclaw-labs/zeroclaw/issues/5937) (provider architecture refactor) have been open for 50+ days with community engagement but no resolution. The MCP tool restriction design question ([#6876](https://github.com/zeroclaw-labs/zeroclaw/issues/6876)) is security-relevant and needs a maintainer to confirm whether the behavior is intentional or a bug.

---

*Data source: github.com/zeroclaw-labs/zeroclaw | Digest generated: 2026-06-10*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*