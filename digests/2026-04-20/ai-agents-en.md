# OpenClaw Ecosystem Digest 2026-04-20

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-20 00:14 UTC

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

# OpenClaw Project Digest — 2026-04-20

---

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a mature, fast-moving project with substantial community engagement. The 2 beta releases (v2026.4.19-beta.1 and beta.2) suggest an active release cadence focused on agent-channel routing fixes and OpenAI-compatible backend improvements. With 289 open issues against 211 closed and 294 open PRs against 206 merged/closed, the project maintains a roughly 60/40 open-to-closed ratio—healthy for a large-scale open-source project but suggesting some backlog accumulation. The community is particularly focused on **multi-agent identity management**, **cross-platform desktop support**, and **preventing internal agent reasoning from leaking to end users**.

---

## 2. Releases

### [v2026.4.19-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.4.19-beta.2)
- **Fix**: Agents/openai-completions — ensures `stream_options.include_usage` is always sent on streaming requests, fixing 0% usage reporting on local/custom OpenAI-compatible backends ([#68746](https://github.com/openclaw/openclaw/issues/68746), thanks @kagura-agent)
- **Fix**: Agents/nested lanes — properly scopes nested agent work to prevent context bleeding

### [v2026.4.19-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.4.19-beta.1)
- **Fix**: Agents/channels — routes cross-agent subagent spawns through the target agent's bound channel account while preserving peer and workspace/role-scoped bindings. Eliminates child sessions inheriting the caller's account in shared rooms, workspaces, or multi-account setups ([#67508](https://github.com/openclaw/openclaw/issues/67508))

**Migration Notes**: Both releases are beta channel; no breaking changes. Users on multi-account or shared workspace configurations should prioritize beta.1 for security isolation improvements.

---

## 3. Project Progress

### Merged/Closed PRs (Selected Significant Items)

| PR | Description | Impact |
|:---|:---|:---|
| [#43961](https://github.com/openclaw/openclaw/pull/43961) | SIGKILL stale process when graceful shutdown times out | **Critical reliability** — prevents port conflicts and zombie processes on restart/stop |
| [#47863](https://github.com/openclaw/openclaw/pull/47863) | HTTP REST API endpoints for gateway queries | **Performance** — eliminates 30-40s CLI cold-start penalty for status checks |
| [#41035](https://github.com/openclaw/openclaw/pull/41035), [#39481](https://github.com/openclaw/openclaw/pull/39481), [#39464](https://github.com/openclaw/openclaw/pull/39464) | Slack `url_verification` challenge handling (3 related fixes) | **Onboarding friction** — fixes repeated Slack app setup failures |
| [#65986](https://github.com/openclaw/openclaw/pull/65986) | Invalidate orphaned sessions on agent deletion | **Security/stability** — prevents `sessions_send` targeting deleted agents |
| [#68726](https://github.com/openclaw/openclaw/pull/68726) | Richer subagent error payloads (role, session key, timing) | **Observability** — enables better retry logic and debugging |

### Active Development (Open PRs)
- **Multi-agent UI**: [#68926](https://github.com/openclaw/openclaw/pull/68926) adds agent/model/thinking selectors to chat controls; [#45086](https://github.com/openclaw/openclaw/issues/45086) tracks the underlying feature request
- **Linux desktop**: [#59859](https://github.com/openclaw/openclaw/pull/59859) — GTK-native Linux app addressing long-standing gap (Issue [#75](https://github.com/openclaw/openclaw/issues/75))
- **GitHub Copilot integration**: [#69116](https://github.com/openclaw/openclaw/pull/69116) — opt-in provider plugin using `@github/copilot-sdk`, no API keys needed
- **Gateway reliability**: [#66735](https://github.com/openclaw/openclaw/pull/66735) (systemd self-restart handoff), [#69121](https://github.com/openclaw/openclaw/pull/69121) (drain pending replies before restart)

---

## 4. Community Hot Topics

### Top Issues by Engagement

| Issue | Comments | 👍 | Core Need |
|:---|:---|:---|:---|
| [#49971](https://github.com/openclaw/openclaw/issues/49971) — **RFC: Native Agent Identity & Trust Verification** | 99 | 0 | **Decentralized trust infrastructure** — ERC-8004/DID/VC-based agent attestation for multi-agent ecosystems; signals enterprise/blockchain-adjacent demand |
| [#75](https://github.com/openclaw/openclaw/issues/75) — **Linux/Windows Clawdbot Apps** | 86 | 68 | **Platform parity** — 68 upvotes make this the most popular request; macOS/iOS/Android have native apps, desktop Linux/Windows missing |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) — **Text between tool calls leaks to messaging channels** | 21 | 0 | **UX polish** — internal processing visible to users; affects all channels |
| [#13688](https://github.com/openclaw/openclaw/issues/13688) — **Discord WebSocket disconnects** (closed) | 22 | 2 | **Reliability** — unbounded backoff left bots offline 30+ min |

**Underlying Needs Analysis**:
- **Identity/trust** (#49971): The 99-comment RFC indicates deep community interest in agent-to-agent verification standards, likely driven by multi-tenant deployments and agent marketplaces.
- **Platform expansion** (#75): Strong vote count (68) vs. low comment count suggests broad latent demand, not just vocal power users.
- **Output hygiene** (#25592, #41494, #26466, #42446): Pattern of "reasoning/thinking leaks to users" spans multiple models (Gemini, Claude, generic) — indicates architectural gap in output filtering, not model-specific bug.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#62335](https://github.com/openclaw/openclaw/issues/62335) — CLI commands hang indefinitely, uninterruptible | **OPEN** | None identified | `openclaw devices list`, `pairing list`, `config validate` hang post-2026.4.5; force-kill required |
| 🔴 **Critical** | [#67936](https://github.com/openclaw/openclaw/issues/67936) — Matrix channel cannot start (2026.4.15 regression) | **OPEN** | None identified | `Cannot find package 'openclaw'` import error — packaging/deployment regression |
| 🟡 **High** | [#42446](https://github.com/openclaw/openclaw/issues/42446) — Internal tool calls and file write output leaking to chat | **OPEN** | [#68986](https://github.com/openclaw/openclaw/pull/68986) in progress | Regression; raw tool output visible to users |
| 🟡 **High** | [#43767](https://github.com/openclaw/openclaw/issues/43767) — Heartbeat ignores `lightContext: true`, loads full context | **OPEN** | None identified | Unbounded session growth, performance degradation |
| 🟡 **High** | [#63732](https://github.com/openclaw/openclaw/issues/63732) — Daily `atHour` reset no longer fires (2026.4.1 regression) | **OPEN** | None identified | Sessions grow unbounded; bisected to `updatedAt: Date.now()` write |
| 🟡 **High** | [#37303](https://github.com/openclaw/openclaw/issues/37303) — Onboarding crashes with exec secret provider for channel tokens | **OPEN** | None identified | Regression; Telegram/Slack/Discord affected |
| 🟢 **Medium** | [#67414](https://github.com/openclaw/openclaw/issues/67414) — Control UI: pasted images blank, reprocessed on history load | **OPEN** | None identified | UX degradation, unnecessary compute |
| 🟢 **Medium** | [#50294](https://github.com/openclaw/openclaw/issues/50294) — pnpm install fails with SSH host key verification | **OPEN** | None identified | Private dependency `tloncorp/api-beta.git` blocking builds |

**Stability Assessment**: Two critical uninterruptible/failure-to-start bugs in recent releases suggest regression testing gaps around CLI lifecycle and packaging. The "leaking internal output" pattern (4+ issues) is a systemic architecture concern, not isolated bugs.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Signal Strength | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Native Linux desktop app** | ⭐⭐⭐⭐⭐ Very High | **High** — PR [#59859](https://github.com/openclaw/openclaw/pull/59859) active | Addresses #75 (68 upvotes); GTK-native implementation in progress |
| **Multi-agent chat UI switching** | ⭐⭐⭐⭐⭐ Very High | **High** — PRs [#68926](https://github.com/openclaw/openclaw/pull/68926), [#45086](https://github.com/openclaw/openclaw/issues/45086) | Core UX gap; multiple PRs converging |
| **GitHub Copilot as model backend** | ⭐⭐⭐⭐ Strong | **Medium-High** — PR [#69116](https://github.com/openclaw/openclaw/pull/69116) just opened | Novel "no API key" provider; opt-in reduces risk |
| **Agent identity/trust verification (DID/VC)** | ⭐⭐⭐⭐ Strong | **Low-Medium** — RFC stage | 99 comments but complex standardization; likely experimental branch first |
| **Windows desktop app** | ⭐⭐⭐⭐ Strong | **Low** — no PR yet | Paired with #75 but Linux prioritized; may follow GTK pattern |
| **Async exec callback / long-running process support** | ⭐⭐⭐ Moderate | **Medium** — Issue [#18237](https://github.com/openclaw/openclaw/issues/18237) closed without merge | Closed stale; may resurface with subagent improvements |
| **Agent-controlled compaction** | ⭐⭐⭐ Moderate | **Low-Medium** — Issue [#28845](https://github.com/openclaw/openclaw/issues/28845) closed | Architectural RFC; black-box compaction seen as pain point |

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Output hygiene failures** | #25592, #41494, #26466, #42446, #33091, #30681 | 🔴 Systemic — "internal processing visible to users" undermines trust |
| **Platform gaps (Linux/Windows)** | #75, #59859 | 🟡 Friction — macOS-centric development alienates enterprise/technical users |
| **CLI reliability regressions** | #62335, #28423 | 🟡 Operational — updates breaking basic commands |
| **Heartbeat/session management** | #43767, #63732, #65161 | 🟡 Performance — unbounded growth, ignored settings |
| **Channel-specific fragility** | #13688, #26691, #33256, #35095, #67936 | 🟢 Integration debt — each channel has unique failure modes |

### Use Cases (Inferred from Issues)
- **Multi-account/multi-workspace**: Beta.1 fix signals enterprise users with shared environments
- **Embedded/self-hosted**: SSRF protection conflicts (#33086), local backend usage (#68746) indicate strong self-hosting community
- **Cross-platform messaging aggregation**: Users connecting Telegram, Slack, Discord, WhatsApp, iMessage, Feishu, Google Chat, Matrix, Nextcloud Talk simultaneously — complexity surface is enormous

### Satisfaction Indicators
- **Positive**: Rapid beta releases, active PR review (500 PRs updated), responsive to security isolation needs
- **Negative**: Stale bot closing valid issues (#13688, #18237, #33086 all closed as stale with ongoing problems), regression density in 2026.4.x series

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (High Value, Stalled)

| Issue | Age | Problem | Action Needed |
|:---|:---|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows apps | ~4 months | 68 upvotes, no official timeline | Commit to roadmap or explain platform prioritization |
| [#49971](https://github.com/openclaw/openclaw/issues/49971) Agent identity RFC | ~1 month | 99 comments, no maintainer response visible | RFC review, assign shepherd, or decline with rationale |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) Text leaking between tool calls | ~2 months | Pattern match to 5+ related issues | Architectural fix, not per-channel patches |
| [#62335](https://github.com/openclaw/openclaw/issues/62335) CLI hang | ~2 weeks | Uninterruptible, force-kill required | P0 investigation — breaks basic operations |
| [#67936](https://github.com/openclaw/openclaw/issues/67936) Matrix channel failure | ~3 days | Complete channel regression in 2026.4.15 | Hotfix or revert guidance |

### PRs At Risk of Stagnation

| PR | Age | Risk |
|:---|:---|:---|
| [#59859](https://github.com/openclaw/openclaw/pull/59859) GTK Linux app | ~2.5 weeks | XL size, may need incremental review strategy |
| [#66735](https://github.com/openclaw/openclaw/pull/66735) systemd restart handoff | ~1 week | L size, touches gateway/cli/agents — cross-domain review bottleneck |

---

*Digest generated from GitHub activity data for 2026-04-20. All links reference https://github.com/openclaw/openclaw.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent Ecosystem
**Date:** 2026-04-20 | **Analyst:** Senior AI Agent Ecosystem Analyst

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing **intensifying fragmentation and specialization**, with 10+ active projects pursuing divergent architectural philosophies—from OpenClaw's TypeScript-first multi-channel hub to ZeroClaw's Rust-based microkernel ambition and NanoBot's security-hardened Telegram-centric design. **Multi-agent orchestration, provider diversification beyond OpenAI, and enterprise-grade security isolation** have emerged as universal priorities, while platform coverage (Linux desktop, mobile, edge IoT) remains the primary competitive battleground. The sector shows classic signs of rapid maturation: established projects (OpenClaw, Hermes Agent) are fighting technical debt from scale, while newer entrants (NanoClaw, NullClaw) are racing to prove architectural viability before network effects consolidate. Critically, **no project has achieved cross-platform parity or seamless multi-agent trust verification**, leaving substantial white space for differentiation.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Assessment |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | 2 betas (v2026.4.19-beta.1/2) | 🟢 **Strong** | Highest absolute activity; healthy 60/40 open/close ratio; regression testing gaps |
| **NanoBot** | 12 | 160 (133 open, 27 closed) | None | 🟡 **Volatile** | Security sprint velocity; 133 open PRs = severe review bottleneck; no releases risks stagnation perception |
| **Hermes Agent** | 50 | 50 | None (v0.10.0 current) | 🟢 **Stabilizing** | Post-release cleanup; maintainer `teknium1` actively salvaging stalled PRs; 84% open issue rate concerning |
| **PicoClaw** | 12 | 9 | 1 nightly (v0.2.6-nightly) | 🔴 **Fragile** | Critical auth regression in stable; high open/close ratio (18:3); chaotic stabilization crunch |
| **NanoClaw** | 3 | 15 (11 open, 4 closed) | None | 🟡 **Building** | 27% merge rate; major features competing; potential release bottleneck; **zero visible maintainer comments** |
| **NullClaw** | 7 | 12 (all open) | None | 🟡 **Intense but unmerged** | 12 same-day PRs by single contributor; 5-PR stack for concurrent interactivity; review bottleneck or batch strategy |
| **IronClaw** | 11 | 50 (32 open, 18 merged) | None | 🟢 **Advancing** | Engine v2 stabilization; healthy merge rate; contributor PRs stalled ~1 month (#1446, #1549) |
| **LobsterAI** | 4 | 9 (all open, 6 stale) | None | 🔴 **Stalled** | 0/9 PRs merged; 6 stale PRs; critical fixes (#515–#518) at bitrot risk; review bandwidth crisis |
| **TinyClaw** | 2 | 0 | None | 🔴 **Dormant** | Zero activity beyond 2 unacknowledged bugs; potential abandonment risk |
| **CoPaw** | 21 | 14 (all open) | None (v1.1.2) | 🟡 **Active but blocked** | High issue velocity; 0 merged PRs; dependency chain #3452→#3550→#3579 at risk |
| **Moltis** | 2 | 5 (4 merged, 1 open) | None | 🟢 **Disciplined** | Quality-focused: TS migration, error refactoring, docs initiative; low feature velocity |
| **ZeroClaw** | 49 | 33 | v0.7.3 stable + beta | 🟢 **Restructuring** | Emergency release post-tag blowout; massive Cargo workspace migration; RFC-driven governance |

**Health Score Methodology:** Combines merge velocity, release cadence, critical bug response time, and contributor diversity. Scale: Strong/Volatile/Stabilizing/Fragile/Building/Intense/Advancing/Stalled/Dormant/Blocked/Disciplined/Restructuring.

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw | Closest Competitor | Gap |
|:---|:---|:---|:---|
| **Absolute scale** | 500 issues/PRs daily | Hermes Agent (50/50), ZeroClaw (49/33) | **10× activity volume** |
| **Release cadence** | 2 betas in 24h | PicoClaw (1 nightly), ZeroClaw (1 emergency) | Only project with continuous beta channel |
| **Platform coverage** | macOS/iOS/Android native, Linux in progress (#75: 68 upvotes) | Hermes Agent (broader channel matrix) | Hermes leads on channels; OpenClaw leads on native apps |
| **Multi-agent infrastructure** | Agent-channel routing fixes (beta.1), nested lane scoping | NanoClaw (per-agent LLM assignment in PR) | **Production multi-account isolation shipped** |

### Technical Approach Differences

| Aspect | OpenClaw | Peer Alternatives |
|:---|:---|:---|
| **Runtime** | Node.js/TypeScript with gateway architecture | ZeroClaw (Rust/Cargo workspace), NanoBot (Python), Moltis (Rust+Preact) |
| **State management** | Session-based with heartbeat compaction | IronClaw (Cognitive Guardian proactive compaction), ZeroClaw (context spillage issues) |
| **Security model** | Channel-account binding, peer/workspace scoping | NanoBot (filesystem ACLs replacing regex guards), PicoClaw ("Agent Shield" PR) |
| **Provider abstraction** | OpenAI-compatible backend focus | NanoClaw (strategic Anthropic decoupling via Codex/OpenAI/Ollama PRs), Hermes (native Google GenAI, Claude-mem) |

### Community Size Comparison

OpenClaw operates at **ecosystem-hub scale** (500 daily items ≈ small city's GitHub activity). Hermes Agent and ZeroClaw are **viable alternatives at 10% scale** with more focused communities. NanoBot's 160 PRs suggest **contributor enthusiasm but maintainer bottleneck**. LobsterAI and TinyClaw demonstrate **attrition risk** at low activity with no merges.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Multi-agent identity & trust** | OpenClaw (#49971: 99 comments), ZeroClaw (#5890 RFC), IronClaw (engine v2 mission introspection) | Decentralized attestation (ERC-8004/DID/VC), cross-agent verification, marketplace safety |
| **Provider diversification & fallback** | NanoClaw (#1843 Codex, #1774 OpenAI, #1859 Ollama), OpenClaw (#68746 local backends), Hermes (#12732 smart routing removal), ZeroClaw (#5815 schema v2 provider break) | Escape OpenAI dependency; cost optimization; local model support; graceful degradation |
| **Output hygiene / reasoning isolation** | OpenClaw (#25592, 4+ related issues), Hermes (#12731 compression corrupts tool_call JSON), ZeroClaw (#5813 compaction orphans tool_result) | Prevent internal tool calls/thinking from leaking to users; reliable JSON preservation |
| **Linux desktop parity** | OpenClaw (#75: 68 upvotes, #59859 GTK PR), CoPaw (#3578 Windows white screen), LobsterAI (#1687 Deepin Linux) | Cross-platform native apps; enterprise desktop deployment |
| **Sandbox security vs. ergonomics** | ZeroClaw (#5719 native vs. Docker, #5720 PYTHONPATH), NanoBot (#3255 shell guard bypass, #3240 expansion bypass), IronClaw (#936 open_file approvals) | Safe code execution without blocking legitimate workflows; filesystem/network ACLs |
| **Telegram UX polish** | NanoBot (#3315 message length, #3311/#3316 competing fixes), CoPaw (#3585 typing indicator, #1874), Hermes (#11016 stale busy lock) | Streaming chunking, typing indicators, inline keyboards, message routing |
| **Session/memory management** | OpenClaw (#43767 heartbeat ignores lightContext, #63732 unbounded growth), IronClaw (#1019 Cognitive Guardian), ZeroClaw (#5844 memory over-emphasis) | Bounded context, intelligent compaction, recall quality, cron isolation |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Multi-channel hub with native mobile apps | Power users, small teams, cross-platform aggregators | TypeScript monorepo, gateway pattern, beta release train |
| **NanoBot** | Security-hardened Telegram-first agent | Security-conscious individual users, Chinese market | Python, regex→ACL security evolution, black-box UX criticism |
| **Hermes Agent** | Skill ecosystem + creative tooling (pixel art) | Developers, creative automators | Tool-first architecture, lazy loading optimization, pixel-art community |
| **PicoClaw** | Edge/embedded + cost optimization (FreeRide failover) | IoT/embedded (Sipeed hardware), budget self-hosters | Go, agent loop pipeline refactor, OpenRouter free-tier optimization |
| **NanoClaw** | Anthropic-centric → provider-agnostic transition | Claude-dependent users hedging bets | TypeScript, headless/scheduled automation, v1→v2 migration |
| **NullClaw** | Concurrent interactivity + Tailscale integration | Edge deployers, secure remote access seekers | Rust, inbound router refactor, bus message architecture |
| **IronClaw** | Engine v2 + Cognitive Guardian memory discipline | Research/advanced users, NEAR ecosystem | Rust, WASM sandbox, bounded contexts, mission introspection |
| **LobsterAI** | NetEase Youdao enterprise integration | Chinese enterprise, POPO/Weixin users | TypeScript, OpenClaw fork/sync, skill marketplace |
| **CoPaw** | Per-agent LLM routing + local model focus | Windows-heavy users, llama.cpp community | TypeScript, Vitest infrastructure, Qwen-family optimization |
| **Moltis** | Documentation discipline + library API stability | Rust developers, integration builders | Rust workspace, `thiserror` migration, Doc Rotisserie |
| **ZeroClaw** | Microkernel ambition + WASM plugin bridge | Enterprise compliance (FINOS), Rust enthusiasts | Cargo workspace, Extism WASM, RFC governance, schema v2 migration |
| **TinyClaw** | *None evident* | — | Node.js, unmaintained |

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics |
|:---|:---|:---|
| **🔥 Hyperactive** | OpenClaw | 500+ daily items; mature but accumulating backlog; regression risk |
| **⚡ Rapid Iteration** | ZeroClaw, NanoBot, Hermes Agent | Major restructuring (ZeroClaw), security sprint (NanoBot), post-release stabilization (Hermes) |
| **🏗️ Building** | NanoClaw, NullClaw, CoPaw, IronClaw | Feature development active but merge-blocked or RFC-driven; pre-release tension |
| **🛠️ Maintenance** | Moltis, PicoClaw | Quality-focused, architectural debt paydown; lower velocity by design |
| **⚠️ At Risk** | LobsterAI, TinyClaw | Stale PR accumulation, zero merges, unacknowledged bugs; contributor attrition likely |

### Stabilization vs. Growth Trajectory

| Stabilizing (paying down debt) | Growing (adding capabilities) |
|:---|:---|
| OpenClaw (output hygiene fixes), Hermes (terminal subsystem), ZeroClaw (schema v2 migration), Moltis (error types, TS migration) | NanoClaw (provider diversification), NullClaw (concurrent interactivity), IronClaw (Engine v2, browser tool), CoPaw (LLM routing) |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Strategic Implication |
|:---|:---|:---|
| **"Output hygiene" as trust prerequisite** | 4+ projects with reasoning leakage bugs; OpenClaw's systemic pattern | **Architectural requirement**: Separate internal tool execution from user-visible streams at framework level, not per-channel patch |
| **Provider abstraction as survival** | NanoClaw's 3 parallel provider PRs; OpenClaw's OpenAI-compatible focus; ZeroClaw's schema v2 breakage | **Design for churn**: LLM provider APIs are unstable; robust abstraction layers with live migration are competitive moats |
| **Security vs. ergonomics tension** | ZeroClaw's sandbox blocking Python data science; NanoBot's regex→ACL evolution; IronClaw's approval workflows | **Default-deny is insufficient**: Enterprise adoption requires configurable trust boundaries, not one-size-fits-all |
| **Edge/IoT as emerging frontier** | NullClaw (Raspberry Pi), PicoClaw (Android/Sipeed), ZeroClaw (low-resource claims) | **Resource constraints reshape architecture**: Async, concurrent interactivity, and minimal dependencies become table stakes |
| **Multi-agent trust as unsolved** | OpenClaw's 99-comment RFC; ZeroClaw's microkernel RFC; no shipped implementation | **First-mover opportunity**: DID/VC-based agent attestation lacks production reference; standardization window open |
| **Contributor experience as bottleneck** | LobsterAI's 6 stale PRs; NanoBot's 133 open PRs; IronClaw's 1-month contributor stalls | **Maintainer bandwidth is product risk**: Automated triage, clear merge criteria, and incremental review strategies are infrastructure |
| **"Black box" operability demands** | NanoBot #3107, Hermes #1501 (Langfuse), ZeroClaw Perlowja cluster | **Observability is feature**: Token tracing, retry visibility, stage-level latency metrics required for production confidence |

---

*Report compiled from 12 project digests covering 2026-04-19 to 2026-04-20 activity. Health assessments reflect snapshot conditions and may shift rapidly with maintainer actions.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-20

## 1. Today's Overview

NanoBot shows **exceptionally high development velocity** with 160 PRs updated in the last 24 hours (133 open, 27 merged/closed) and 12 active issues. The project is in a **security-hardening sprint** with multiple critical fixes from contributor `mohamed-elkholy95` addressing SSRF vulnerabilities, shell-escape bypasses, and DNS failure handling. Telegram integration dominates both bug reports and feature work, suggesting it's the primary user-facing channel. No new releases were cut, indicating the team is accumulating changes for a larger version bump rather than shipping incrementally.

---

## 2. Releases

**None** — No new releases published. The last release remains prior to this reporting period.

---

## 3. Project Progress

### Merged/Closed PRs (27 total; notable items):

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #2625 | ravs-cyberrock | HTTP health endpoint on gateway port (default 18790) for monitoring/service discovery | [PR #2625](https://github.com/HKUDS/nanobot/pull/2625) |
| #1273 | gthieleb | Telegram inline keyboards for multiple choice questions (closes #708) | [PR #1273](https://github.com/HKUDS/nanobot/pull/1273) |

### Key Open PRs Advancing:

| PR | Author | Status | Significance |
|:---|:---|:---|:---|
| #3255 | mohamed-elkholy95 | Open | Filesystem-layer enforcement for `history.jsonl` / `.dream_cursor` protection — replaces regex-based shell guards with proper ACLs |
| #3240 | mohamed-elkholy95 | Open | Hardens #2989 against shell-expansion bypasses (`$(echo tee)` attacks) |
| #3252 | mohamed-elkholy95 | Open | Expands SSRF detection to non-HTTP schemes (`file://`, `gopher://`) |
| #3311 | stutiredboy | Open | **Live fix**: Telegram streaming buffer chunking mid-flight to prevent 4096-char overflow |
| #3316 | himax12 | Open | Markdown→HTML conversion *before* splitting to prevent length overflow (fixes #3315) |
| #3317 | gthieleb | Open | Inline keyboard buttons routing taps as regular messages |

---

## 4. Community Hot Topics

### Most Active by Engagement:

| # | Item | Comments | Core Need |
|:---|:---|:---|:---|
| 1 | **#3300** [CLOSED] DeepSeek API not supported | 6 comments | [Issue #3300](https://github.com/HKUDS/nanobot/issues/3300) — **Provider diversity**: Users want Chinese-model ecosystem access beyond OpenAI/Anthropic/Google |
| 2 | **#3107** [OPEN] 一些建议 (Suggestions) | 6 comments | [Issue #3107](https://github.com/HKUDS/nanobot/issues/3107) — **Observability & operability**: Task counts in status, retry visibility, configurable timeouts, model CLI args, provider fallback chains |
| 3 | **#3206** [CLOSED] Gemini provider API key error | 5 comments | [Issue #3206](https://github.com/HKUDS/nanobot/issues/3206) — **Auth robustness**: "Multiple authentication credentials" conflict in Google AI Studio vs. Vertex AI paths |
| 4 | **#2220** [OPEN] ContextVar for task-local tool routing | 5 comments | [Issue #2220](https://github.com/HKUDS/nanobot/issues/2220) — **Async safety**: Prevent cross-task contamination in `message`, `spawn`, `cron` tools |
| 5 | **#3274** [CLOSED] Summary injection strategy discussion | 4 comments | [Issue #3274](https://github.com/HKUDS/nanobot/issues/3274) — **Memory architecture consistency**: Two compression paths with divergent prompt-injection behavior |

### Underlying Needs Analysis:
- **#3107** reveals NanoBot's "black box" problem: users cannot debug *why* tasks hang or fail. The checklist format (3/7 completed) suggests maintainer engagement but slow execution.
- **#2220** is a **correctness issue** for multi-tenant or high-concurrency deployments — likely blocks enterprise adoption if unaddressed.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR? | Details |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | #3315 Telegram "Message too long" | **OPEN** | ✅ #3311, #3316 | Streaming + markdown expansion exceeds 4096 char limit; **two competing fixes** in flight |
| 🔴 **Critical** | #3255 Shell-command guard bypass | **OPEN** | ✅ #3255 itself | Regex-based protection fundamentally broken; filesystem ACLs needed |
| 🟡 **High** | #3206 Gemini dual-auth error | CLOSED | ✅ #3206 (resolved) | Multiple credential sources conflict |
| 🟡 **High** | #3240 Shell expansion bypass | **OPEN** | ✅ #3240 | `$(echo tee)` style attacks bypass filename guards |
| 🟡 **High** | #3235 DNS failure fail-open in SSRF | **OPEN** | ✅ #3235 | `validate_resolved_url` returns `(True, "")` on `socket.gaierror` |
| 🟢 **Medium** | #3265 UI "dumps a lot of crap" | CLOSED | — | Spinner artifacts with Gemini 2.0 Flash; terminal escape sequences |
| 🟢 **Medium** | #3253 Whisper transient failures | **OPEN** | ✅ #3253 | 502/503 returns empty string → silent voice message loss |

**Regression Risk**: The concentration of security fixes from a single contributor (`mohamed-elkholy95`) suggests either a dedicated security audit or a bug bounty — positive for health, but indicates prior underinvestment in defensive coding.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Telegram inline keyboards** | #3317 (PR), #1273 (merged) | **High** | Infrastructure merged; #3317 extends to general message routing |
| **Per-chat group policy overrides** | #3309 | Medium | Telegram-specific; needs config schema change |
| **Plugin system** | #2231 | Low-Medium | Large architectural proposal (manifest format, lifecycle hooks); 3 comments, no PR |
| **Voice pipeline latency metrics** | #3257 | Medium | Observability trend aligns with #3107; STT→LLM→TTS tracing |
| **Silent/quiet retry mode** | #3246 | Medium | UX polish; small scope, clear user value |
| **Cron edit action** | #2217 (PR) | High | Small, complete PR; obvious gap in current cron tool |
| **Whisper language parameter** | #3116 (PR) | High | One-line API passthrough; significant accuracy improvement |
| **Provider fallback chains** | #3107 (item 6) | Low | Requires LLM routing architecture; no PR |
| **DeepSeek official API support** | #3300 | Medium | Closed without clear resolution — may need reopening |

**Predicted vNext themes**: Telegram UX polish, security hardening completion, voice interaction reliability, cron tool maturity.

---

## 7. User Feedback Summary

### Pain Points (verbatim themes):

| Category | Quote/Paraphrase | Source |
|:---|:---|:---|
| **Opaque failures** | "nanobot当前状态黑盒" (current state is black box) | #3107 |
| **Message length crashes** | "If model stream too much messages, bot tries to send it with a single message, and I'm getting errors" | #3315 |
| **Noisy error recovery** | "3-5 messages during error recovery" | #3246 |
| **Voice latency untraceable** | "35–60 seconds... no way to tell which stage" | #3257 |
| **Provider lock-in** | DeepSeek official API unsupported | #3300 |

### Satisfaction Signals:
- Active multi-channel usage (Telegram, email, voice) indicates core utility
- Detailed bug reports with logs (#3206, #3265) suggest engaged technical users
- Chinese-language issues (#3107, #3274) show international adoption

### Dissatisfaction Signals:
- **No releases** despite heavy PR activity — users may perceive stagnation
- Security vulnerabilities requiring emergency patches suggest code quality debt
- competing fixes for same bug (#3311 vs #3316) indicate coordination gaps

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| **#2220** ContextVar async safety | ~1 month | **Architectural correctness** | [Issue #2220](https://github.com/HKUDS/nanobot/issues/2220) — 5 comments, no PR. Blocks safe multi-task usage; needs core maintainer decision on `nightly` target |
| **#2231** Plugin system | ~1 month | **Ecosystem growth** | [Issue #2231](https://github.com/HKUDS/nanobot/issues/2231) — 3 comments, no PR. Large scope; risk of being "evergreen" request without champion |
| **#2414** Tirith pre-exec scanning | ~1 month | **Security innovation** | [PR #2414](https://github.com/HKUDS/nanobot/pull/2414) — Rust-based command interception; stalled? No recent updates |
| **#2255** Telegram topic chat_id | ~1 month | **Telegram completeness** | [PR #2255](https://github.com/HKUDS/nanobot/pull/2255) — Format parsing fix; small, should be mergeable |
| **#2217** Cron edit action | ~1 month | **Tool maturity** | [PR #2217](https://github.com/HKUDS/nanobot/pull/2217) — Complete implementation; needs review bandwidth |

**Maintainer Attention Required**: The PR queue (133 open) is heavily backlogged. Security PRs from `mohamed-elkholy95` are getting rapid updates (same-day revisions), suggesting prioritized review, but feature PRs languish. Consider splitting review bandwidth or establishing merge criteria by category.

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-04-20.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-20

## 1. Today's Overview

Hermes Agent shows **high community velocity** with 50 issues and 50 PRs active in the last 24 hours, though no new release was cut. The project is in an intensive **bug-fixing and stabilization phase** following the v0.10.0 release (2026-04-16), with maintainers actively salvaging stalled community PRs and addressing regressions in terminal handling, Docker deployment, and provider routing. The 84% open issue rate (42/50) suggests either a backlog accumulation or rapid triage of new reports. Notably, core maintainer `teknium1` is directly merging multiple salvage PRs, indicating focused cleanup effort on long-standing terminal and process-management bugs.

---

## 2. Releases

**No new releases** — v0.10.0 (2026-04-16) remains current.

---

## 3. Project Progress

### Merged/Closed PRs Today (19 total; key items highlighted)

| PR | Author | Description | Significance |
|:---|:---|:---|:---|
| [#12734](https://github.com/NousResearch/hermes-agent/pull/12734) | teknium1 | **Security fix**: Redact credentials from context compression summaries | Prevents credential leakage across session compactions |
| [#12733](https://github.com/NousResearch/hermes-agent/pull/12733) | kagura-agent | **Docker fix**: Run entrypoint as root for UID/GID remapping | Fixes [#12696](https://github.com/NousResearch/hermes-agent/issues/12696) |
| [#12732](https://github.com/NousResearch/hermes-agent/pull/12732) | teknium1 | **Refactor**: Remove `smart_model_routing` feature | Simplifies routing code; `/fast` pipeline preserved |
| [#12730](https://github.com/NousResearch/hermes-agent/pull/12730) | thedotmack | **New feature**: `claude-mem` memory provider plugin | Adds local memory worker integration |
| [#12729](https://github.com/NousResearch/hermes-agent/pull/12729) | jerome-benoit | **Fix**: `google-workspace` setup.py fallback without `hermes_constants` | Fixes standalone skill installation |
| [#12726](https://github.com/NousResearch/hermes-agent/pull/12726) | mavrickdeveloper | **Fix**: Keep default-off toolsets disabled in fresh CLI config | Fixes [#2761](https://github.com/NousResearch/hermes-agent/issues/2761) tool disable ineffectiveness |
| [#12728](https://github.com/NousResearch/hermes-agent/pull/12728) | teknium1 | **Docs**: Document Discord free-response channel threading behavior | Closes documentation gap |
| [#12725](https://github.com/NousResearch/hermes-agent/pull/12725) | teknium1 | **Feature**: Pixel-art skill expansion (14 palettes, video animation) | Creative tooling enhancement |
| [#12207](https://github.com/NousResearch/hermes-agent/pull/12207) / [#12724](https://github.com/NousResearch/hermes-agent/pull/12724) | handsdiff / teknium1 | **Fix**: Bash subshell leak with `A && B &` pattern | Salvaged fix for background process handling |
| [#12032](https://github.com/NousResearch/hermes-agent/pull/12032) | mark-ramsell | **Fix**: Reap backgrounded children in LocalEnvironment | Prevents zombie processes |
| [#10810](https://github.com/NousResearch/hermes-agent/pull/10810) / [#12723](https://github.com/NousResearch/hermes-agent/pull/12723) | etherman-os / teknium1 | **Fix**: Guard foreground server/watch commands | Salvaged fix steering model to `background=true` |

**Key advancement**: Terminal subsystem receiving **convergent fixes** for background process handling (#8340 → #12207/#12724, #10810/#12723, #12032), suggesting v0.10.0 exposed systemic shell parsing issues.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Issue/PR | Comments | 👍 | Topic | Underlying Need |
|:---|:---|:---|:---|:---|
| [#4983](https://github.com/NousResearch/hermes-agent/issues/4983) — Native Google GenAI Provider | 12 | 2 | **CLOSED** — Native Gemini integration | Users need **reliable tool calling**; OpenAI compatibility layer is fragile for Gemini's native features |
| [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) — Claude subscription auth "out of extra usage" | 12 | 14 | **CLOSED** — Anthropic auth/session management | **Critical reliability**: Subscription-based auth must survive restarts; users depend on Claude for production |
| [#6174](https://github.com/NousResearch/hermes-agent/issues/6174) — Matrix E2EE verification | 5 | 2 | **CLOSED** — Encryption protocol compliance | Enterprise/self-hosted users need **secure bot communications**; E2EE is table-stakes for Matrix |
| [#11016](https://github.com/NousResearch/hermes-agent/issues/11016) — Telegram stale adapter busy lock | 5 | 0 | **OPEN** — Gateway session state consistency | **Platform adapter reliability**: Split-brain between adapter and runner breaks user experience |
| [#2761](https://github.com/NousResearch/hermes-agent/issues/2761) — `hermes tools disable memory` ineffective | 4 | 0 | **OPEN** → Fix in [#12726](https://github.com/NousResearch/hermes-agent/pull/12726) | Configuration system must **honor explicit user intent**; "success" feedback with no effect erodes trust |

**Analysis**: Top issues cluster around **provider reliability** (Gemini native, Claude auth) and **state consistency** (gateway adapters, config application). The high 👍 on #6475 (14) relative to comments indicates silent majority impact — auth failures are show-stoppers.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 Critical** | [#11016](https://github.com/NousResearch/hermes-agent/issues/11016) | Telegram split-brain: stale busy lock traps sessions in interrupt loop | **OPEN**, no PR |
| **🔴 Critical** | [#12395](https://github.com/NousResearch/hermes-agent/issues/12395) | QQ bot message failure → **infinite LLM loop burning tokens** | **OPEN**, no PR; user reports "想哭" (want to cry) |
| **🟠 High** | [#12731](https://github.com/NousResearch/hermes-agent/issues/12731) | Session compression **corrupts tool_call JSON** (truncated to 214 chars) | **OPEN**, reported today |
| **🟠 High** | [#9125](https://github.com/NousResearch/hermes-agent/issues/9125) | `kimi-coding` auxiliary calls fail with temperature error when `provider=auto` | **OPEN**, no PR |
| **🟠 High** | [#12638](https://github.com/NousResearch/hermes-agent/issues/12638) | Vision route drops named custom provider, misroutes to default | **OPEN**, no PR |
| **🟡 Medium** | [#12689](https://github.com/NousResearch/hermes-agent/issues/12689) | `file_tools.py` ignores `TERMINAL_CWD`, leaks out of worktree isolation | **PR ready**: [#12721](https://github.com/NousResearch/hermes-agent/pull/12721) |
| **🟡 Medium** | [#12696](https://github.com/NousResearch/hermes-agent/issues/12696) | `HERMES_UID`/`HERMES_GID` ignored in Docker | **PR ready**: [#12733](https://github.com/NousResearch/hermes-agent/pull/12733) |
| **🟡 Medium** | [#12727](https://github.com/NousResearch/hermes-agent/issues/12727) | Bedrock inference profile IDs broken by `normalize_model_name()` | **OPEN**, no PR |
| **🟡 Medium** | [#12544](https://github.com/NousResearch/hermes-agent/issues/12544) | Webhook invalid signatures consume rate-limit bucket (DoS vector) | **OPEN**, no PR |
| **🟢 Low** | [#12641](https://github.com/NousResearch/hermes-agent/issues/12641) | CLI status bar duplicates as new lines when idle | **OPEN**, no PR |
| **🟢 Low** | [#12372](https://github.com/NousResearch/hermes-agent/issues/12372) | Skill number duplicates on dashboard | **OPEN**, no PR |

**Regression pattern**: v0.10.0 appears to have introduced or exposed **routing normalization bugs** (#12727, #12638) and **terminal state issues** (#12641, #12689).

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| [#12213](https://github.com/NousResearch/hermes-agent/issues/12213) | Expose `compress_context` as native Tool (not just slash command) | **High** | Small surface, enables SKILL.md procedural use; aligns with tool-first architecture |
| [#1501](https://github.com/NousResearch/hermes-agent/issues/1501) | Langfuse tracing for subagents/gateway sessions | **Medium** | Production observability is recurring theme; may need plugin architecture decision |
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | Lazy tool schema loading (two-pass injection) | **Medium-High** | Token cost reduction (3,500-5,000 tokens/call); performance wins are prioritized |
| [#11115](https://github.com/NousResearch/hermes-agent/issues/11115) | Lean default tool exposure + lazy non-core discovery | **Medium** | Complements #6839; startup latency focus |
| [#11425](https://github.com/NousResearch/hermes-agent/issues/11425) | Skills lifecycle management (usage tracking, stale detection, auto-cleanup) | **Medium** | User has 89+ skills; scaling pain is real but complex |
| [#12700](https://github.com/NousResearch/hermes-agent/issues/12700) | Gemini `service_tier: "flex"` support | **High** | Cost reduction (50%) for cron/background; simple provider config addition |
| [#12655](https://github.com/NousResearch/hermes-agent/issues/12655) | `picker_providers` config to filter `/model` entries | **High** | Small config change; custom endpoint users are vocal |
| [#12708](https://github.com/NousResearch/hermes-agent/pull/12708) | `create_thread` tool for Discord | **High** | PR already open; REST-based, no gateway dependency |

**Emerging theme**: **Cost optimization** (lazy loading, flex tier, tool filtering) and **production operability** (tracing, lifecycle management) signal user base maturation beyond early adopters.

---

## 7. User Feedback Summary

### Pain Points (verbatim signals)

| Source | Feedback | Category |
|:---|:---|:---|
| #12395 | "想哭，qqbot消息推送失败后，hermes竟然一直循环调大模型，疯狂消耗token" | **Cost/looping panic** — financial harm from bug |
| #6475 | "You're out of extra usage... persists after restarting Hermes" | **Auth reliability** — breaks workflow entirely |
| #12641 | "empty dialogue boxes / blank message bubbles keep appearing" | **UI polish** — erodes trust in idle state |
| #12340 | "hardcoded review prompts break local LLMs at high context" | **Local LLM support** — forced skill generation wastes tokens |
| #12534 | "environment variables... never forwarded to the sandbox container" | **Deployment friction** — breaks CLI tool auth |

### Satisfaction Signals

- **Pixel-art skill expansion** (#12725): Creative users engaged
- **Claude-mem plugin** (#12730): Memory ecosystem growing
- **STT/TTS provider diversity** (#8605, #8606): Voice modality investment

### Use Case Evolution

| Early Adopter | Maturing User |
|:---|:---|
| "Get it working with OpenAI/Claude" | "Optimize token costs, manage 89 skills, monitor production" |
| Single provider | Multi-provider with custom endpoints |
| Interactive CLI | Gateway mode with Telegram/Discord/Slack |

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>7 days old, high impact, no resolution)

| Issue | Age | Blocker | Risk |
|:---|:---|:---|:---|
| [#2761](https://github.com/NousResearch/hermes-agent/issues/2761) — `hermes tools disable memory` ineffective | **27 days** | Config reverse-mapping logic | User config trust; **PR #12726 ready** |
| [#1501](https://github.com/NousResearch/hermes-agent/issues/1501) — Langfuse tracing | **35 days** | Architecture decision (core vs. plugin) | Production adoption blocker |
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) — Lazy tool schema loading | **11 days** | Design review for two-pass injection | Token cost; 3 👍 indicates demand |
| [#11115](https://github.com/NousResearch/hermes-agent/issues/11115) — Lean default tool exposure | **4 days** | Related to #6839, needs coordination | Startup latency |

### Stalled PRs (salvage candidates)

| Original PR | Salvage Status | Note |
|:---|:---|:---|
| #12207 → **#12724** | ✅ Merged today | Bash subshell leak |
| #10810 → **#12723** | ✅ Merged today | Foreground guardrails |
| #8605, #8606 | **OPEN**, 8 days | STT/TTS wizards — voice modality completeness |

### Action Needed

1. **Merge #12726** to close #2761 (config disable bug)
2. **Triage #11016** (Telegram split-brain) and #12395 (infinite token loop) — both are user-facing crises
3. **Decision on #12732** (smart_model_routing removal) — breaking change needs changelog
4. **Review #8605/#8606** for v0.11.0 voice features or defer

---

*Digest generated from GitHub activity 2026-04-19 to 2026-04-20. All links: https://github.com/NousResearch/hermes-agent*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-20

## 1. Today's Overview

PicoClaw shows **high development velocity** with 21 tracked activities in 24 hours (12 issues, 9 PRs), indicating an active but somewhat chaotic development phase. The project released a new nightly build (`v0.2.6-nightly.20260419.6126ede9`) while grappling with **critical authentication regressions** in the `openai_compat` provider that silently drop API keys—a severe breaking bug in the current stable version. Community engagement is robust with cross-cutting contributions spanning security hardening, streaming UI improvements, and provider architecture modernization. However, the high open-to-closed ratio (18:3 for issues/PRs) suggests accumulating technical debt and review backlog. The project appears to be in a **stabilization crunch** following major architectural changes.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [`v0.2.6-nightly.20260419.6126ede9`](https://github.com/sipeed/picoclaw/compare/v0.2.6...main) | Nightly | Automated build from `main` branch; **explicitly flagged as potentially unstable** |

**⚠️ Critical Context:** This nightly follows the `v0.2.6` tag (`git: 51eecde`) which contains a **confirmed critical bug** ([#2578](https://github.com/sipeed/picoclaw/issues/2578)) where the `openai_compat` provider silently drops Authorization headers. Users should verify whether `6126ede9` includes fixes before deploying.

---

## 3. Project Progress

### Merged/Closed Today

| PR/Issue | Link | Significance |
|----------|------|------------|
| **PR #2588** — FreeRide model failover integration | [Closed (superseded)](https://github.com/sipeed/picoclaw/pull/2588) | Major feature: intelligent provider rotation via OpenRouter; **closed in favor of #2591** (same author, refined implementation) |
| **Issue #2583** — qwen3.5/gemma4 Ollama compatibility | [Closed](https://github.com/sipeed/picoclaw/issues/2583) | Provider-specific model compatibility bug resolved |
| **Issue #2506** — CLA legal irrelevance | [Closed](https://github.com/sipeed/picoclaw/issues/2506) | Legal/process issue: project's SAP-derived CLA deemed inappropriate |

### Architectural Advancement

- **Agent Loop Refactoring:** [PR #2585](https://github.com/sipeed/picoclaw/pull/2585) advances Phase 2 of agent architecture modernization—1500-line `loop.go` decomposed into pipeline stages (`SetupTurn`, `CallLLM`, `ExecuteTools`, `Finalize`)
- **Provider Deduplication:** [PR #2586](https://github.com/sipeed/picoclaw/pull/2586) consolidates repeated utility functions across provider packages, improving maintainability

---

## 4. Community Hot Topics

### Most Active Discussions (by engagement depth)

| Rank | Item | Comments | Link | Underlying Need |
|------|------|----------|------|---------------|
| 1 | **Issue #2171** — Migrate to OpenAI Responses API | 7 comments | [#2171](https://github.com/sipeed/picoclaw/issues/2171) | **Future-proofing against OpenAI API deprecation**; community wants alignment with vendor recommendations |
| 2 | **Issue #2583** — qwen3.5/gemma4 Ollama bug (now closed) | 2 comments | [#2583](https://github.com/sipeed/picoclaw/issues/2583) | **Local model ecosystem compatibility** — Ollama is critical self-hosted infrastructure |
| 3 | **Issue #2578** — openai_compat auth header regression | 2 comments | [#2578](https://github.com/sipeed/picoclaw/issues/2578) | **Operational reliability** — silent credential failure is catastrophic for production |

### Emerging Patterns

- **Provider architecture is in flux:** Parallel efforts (#2171 Responses API, #2586 deduplication, #2591/#2588 FreeRide failover) indicate the provider layer is being actively restructured
- **Security consciousness rising:** [PR #2313](https://github.com/sipeed/picoclaw/pull/2313) ("Agent Shield") and [PR #2256](https://github.com/sipeed/picoclaw/pull/2256) (WebSocket CSWSH hardening) show community investment in enterprise-grade security

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR? | Impact |
|----------|------|--------|---------|--------|
| 🔴 **Critical** | **#2578** — `openai_compat` never sends Authorization header | **Open, confirmed in v0.2.6** | ❌ None yet | **All HTTP-based providers broken**; API keys silently ignored regardless of config source |
| 🔴 **Critical** | **#2584** — DeepSeek 401 "Authentication Fails (governor)" | Open | ❌ None yet | DeepSeek provider completely non-functional; may be related to #2578 or separate token validation issue |
| 🟡 **High** | **#2590** — Android app fails to start (`libpicoclaw.so` execution error) | Open, 1 day old | ❌ None yet | Mobile/Android deployment blocked |
| 🟡 **High** | **#2237** — 飞书 (Lark/Feishu) integration issues with newapi | Open | ❌ None yet | Enterprise China market channel broken |
| 🟡 **High** | **#2310** — Session history truncated to 1-2 messages | Open | ❌ None yet | Core UX degradation; data loss on page refresh |

**Regression Analysis:** The `v0.2.6` release appears to have introduced **at least one critical authentication regression** (#2578). The timing of DeepSeek failures (#2584) suggests systemic auth handling issues. No emergency patch PRs are visible in today's activity.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|---------|----------|---------------------------|-----------|
| **Streaming web chat UX** | [PR #2587](https://github.com/sipeed/picoclaw/pull/2587) | **High** | Active PR, same-day creation/update; modernizes core WebUI experience |
| **FreeRide model failover** | [PR #2591](https://github.com/sipeed/picoclaw/pull/2591) | **High** | Superseded #2588; author iterating rapidly; cost optimization is compelling |
| **Multi-user/Agent Shield security** | [PR #2313](https://github.com/sipeed/picoclaw/pull/2313) | Medium | Large scope, 16 days old; may need more review cycles |
| **Token consumption dashboard** | [Issue #2217](https://github.com/sipeed/picoclaw/issues/2217) | Medium | Clear enterprise need; depends on telemetry infrastructure |
| **Thinking/reasoning content display** | [Issue #2216](https://github.com/sipeed/picoclaw/issues/2216) | Medium | Aligns with reasoning model trends (o1, DeepSeek-R1, etc.) |
| **Zalo Chat channel** | [Issue #2261](https://github.com/sipeed/picoclaw/issues/2261) | Low-Medium | Vietnam market expansion; no PR yet |
| **Provider-level model management** | [Issue #2321](https://github.com/sipeed/picoclaw/issues/2321) | Medium | Configuration UX pain; would reduce redundant setup |

**Predicted v0.2.7 Focus:** Authentication hotfix (#2578/#2584), streaming UX (#2587), and FreeRide failover (#2591) appear most probable given active PR momentum.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Silent authentication failures** | #2578, #2584 | Critical — "works with curl, breaks in PicoClaw" |
| **Session data loss** | #2310 | High — users lose conversation context on refresh |
| **Local model compatibility gaps** | #2583 (qwen3.5/gemma4) | High — Ollama ecosystem is strategic for self-hosting |
| **Mobile deployment fragility** | #2590 | High — Android completely non-functional |
| **Configuration redundancy** | #2321 | Medium — "repeatedly enter provider credentials" |

### Use Case Signals

- **Enterprise/self-hosted:** Strong demand for Ollama compatibility, token dashboards, multi-user security
- **Cost-sensitive deployments:** FreeRide failover (#2591) targets OpenRouter free tier optimization
- **China market:** Feishu (#2237) and Zalo (#2261) indicate APAC channel expansion needs
- **Mobile edge computing:** Android support (#2590) suggests IoT/embedded use cases (aligned with Sipeed hardware roots)

### Satisfaction/Dissatisfaction

- ✅ **Positive:** Active nightly builds, responsive issue closure (#2583), architectural investment
- ❌ **Negative:** `v0.2.6` stability concerns, silent failures (no error propagation), incomplete session persistence

---

## 8. Backlog Watch

### Items Needing Maintainer Intervention

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| **Issue #2171** — OpenAI Responses API migration | 20 days | Medium | Technical decision: accept breaking API change? Community has 7-comment thread with no maintainer resolution |
| **PR #2313** — Agent Shield multi-user security | 16 days | **High** | Large cross-cutting PR (agent, tool, config, build, docker); stalled without review |
| **PR #2256** — WebSocket CSWSH security hardening | 18 days | Medium | Security fix ready; needs merge or feedback |
| **Issue #2216/#2217** — WebUI thinking content + token dashboard | 19-20 days | Low | Feature requests with clear scope; need prioritization signal |

### Process Concerns

- **CLA Issue #2506** was closed without addressing the underlying problem (SAP-derived CLA still active per link). Contributor legal risk remains unmitigated.
- **PR #2588 → #2591** rapid supersession suggests author (stevef1uk) is self-correcting without maintainer guidance, potentially wasting review effort.

---

*Digest generated from GitHub activity 2026-04-19. All links reference `https://github.com/sipeed/picoclaw`.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-20

## 1. Today's Overview

NanoClaw showed **strong development velocity** with 18 total items updated in the past 24 hours (3 issues, 15 PRs), though the **merge rate remains low at 27%** (4 merged/closed vs. 11 open). No new releases were cut. The project is clearly in an active development phase with multiple major features competing for integration—including a web channel, OpenAI/Codex provider support, security policy engine, and v1→v2 migration work—suggesting a potential **release bottleneck** as maintainers juggle large, cross-cutting PRs.

---

## 2. Releases

**None.** No releases published today.

---

## 3. Project Progress

### Merged/Closed Today (4 items)

| PR/Issue | Description | Significance |
|----------|-------------|--------------|
| [#1866](https://github.com/qwibitai/nanoclaw/issues/1866) | Headless mode deployed on `burg-optiplex` | Production deployment milestone for forked headless operation alongside OpenClaw tri-system platform |
| [#1865](https://github.com/qwibitai/nanoclaw/issues/1865) | Upstream sync completed for `nu-gui/nanoclaw` | Fork maintenance; ensures headless-mode branch has latest upstream fixes |
| [#1861](https://github.com/qwibitai/nanoclaw/pull/1861) / [#1860](https://github.com/qwibitai/nanoclaw/pull/1860) | Telegram typing indicator heartbeat (4s repeat) | UX fix for long agent turns; closed as duplicate—[#1861](https://github.com/qwibitai/nanoclaw/pull/1861) superseded [#1860](https://github.com/qwibitai/nanoclaw/pull/1860) |

### Notable: Web Channel Iteration
- [#1862](https://github.com/qwibitai/nanoclaw/pull/1862) (closed) → [#1863](https://github.com/qwibitai/nanoclaw/pull/1863) (open): Author [VivianBalakrishnan](https://github.com/VivianBalakrishnan) rapidly iterated from "PWA with SSE, zero dependencies" to simplified "browser portal with polling," suggesting **scope reduction to ease review burden**.

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|---------------|
| [#1869](https://github.com/qwibitai/nanoclaw/pull/1869) — v1→v2 action items | Fresh, large PR (5 commits, table-structured) | **Technical debt reduction**: Dead code elimination, timezone modernization, config cleanup—signals preparation for stable v2 release |
| [#1868](https://github.com/qwibitai/nanoclaw/pull/1868) — Host env forwarding allowlist | Fresh, security-sensitive | **Enterprise secrets management**: Safe credential injection for scheduled tasks (Notion, GitHub, etc.) without credential proxy limitations |
| [#1843](https://github.com/qwibitai/nanoclaw/pull/1843) — Codex provider via app-server | 2+ days old, substantial | **Provider diversification**: Full agent loop with Claude-SDK parity using OpenAI's Codex; strategic hedging against single-provider dependency |
| [#1774](https://github.com/qwibitai/nanoclaw/pull/1774) — OpenAI model support + token tracking | 6 days old, actively updated | **Cost optimization + local model support**: GPT-5.4 nano/mini, Ollama compatibility; token tracking enables usage governance |

**Pattern**: Three parallel provider PRs ([#1843](https://github.com/qwibitai/nanoclaw/pull/1843) Codex, [#1774](https://github.com/qwibitai/nanoclaw/pull/1774) OpenAI, [#1859](https://github.com/qwibitai/nanoclaw/pull/1859) Ollama) indicate **strategic priority to decouple from Anthropic-only architecture**.

---

## 5. Bugs & Stability

| Severity | Item | Status | Notes |
|----------|------|--------|-------|
| **Medium** | [#1856](https://github.com/qwibitai/nanoclaw/pull/1856) — `archive all` chat command bypasses Gmail | **Fixed** (closed) | Data consistency bug: local resolution without Gmail sync caused split-brain state; fix threaded `gmailOps` properly |
| **Low** | [#1861](https://github.com/qwibitai/nanoclaw/pull/1861) / [#1860](https://github.com/qwibitai/nanoclaw/pull/1860) — Telegram typing indicator timeout | **Fixed** (closed as duplicate) | UX degradation, not crash; 4s heartbeat resolves "silent failure" perception |

**Assessment**: No critical crashes or security vulnerabilities reported today. Stability focus is on **data consistency** (Gmail sync) and **perceived responsiveness** (typing indicators).

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release | Rationale |
|---------|--------|---------------------------|-----------|
| **Custom container env vars** | [#1867](https://github.com/qwibitai/nanoclaw/issues/1867) | **High** | Small, focused issue; unblocks [#1868](https://github.com/qwibitai/nanoclaw/pull/1868) allowlist work; clear user need |
| **Web channel (browser UI)** | [#1863](https://github.com/qwibitai/nanoclaw/pull/1863) | **Medium-High** | Second iteration, simplified scope; eliminates Redis/Next.js dependency concerns |
| **User abort/stop flow** | [#1858](https://github.com/qwibitai/nanoclaw/pull/1858) | **Medium** | Critical for long-running tasks; depends on `isStopIntent()` design review |
| **Security policy engine** | [#1605](https://github.com/qwibitai/nanoclaw/pull/1605) | **Medium** | Large PR (supersedes #1360); deterministic enforcement is architecturally significant but needs maintainer bandwidth |
| **v1→v2 migration items** | [#1869](https://github.com/qwibitai/nanoclaw/pull/1869) | **Medium** | 5 discrete commits ease partial merge; likely prerequisite for v2 release |
| **Ollama local provider** | [#1859](https://github.com/qwibitai/nanoclaw/pull/1859) | **Lower** | Operational skill (`.claude/skills/`), less core architecture; may merge faster due to isolation |

---

## 7. User Feedback Summary

### Pain Points
- **Long-running task opacity**: Users cannot distinguish "processing" from "crashed" without typing indicator fixes ([#1861](https://github.com/qwibitai/nanoclaw/pull/1861))
- **No abort path for multi-hour tasks**: Forces SSH intervention or timeout waiting ([#1858](https://github.com/qwibitai/nanoclaw/pull/1858))
- **Credential injection friction**: External services need env vars without source modification ([#1867](https://github.com/qwibitai/nanoclaw/issues/1867), [#1868](https://github.com/qwibitai/nanoclaw/pull/1868))
- **Deployment complexity**: Seeding `ScheduledTask` requires manual SQL or runtime agent creation ([#1857](https://github.com/qwibitai/nanoclaw/pull/1857))

### Use Cases Emerging
- **Headless/scheduled automation**: Production deployment alongside OpenClaw ([#1866](https://github.com/qwibitai/nanoclaw/issues/1866))
- **Multi-provider cost optimization**: OpenAI, Ollama, Codex as Anthropic alternatives ([#1774](https://github.com/qwibitai/nanoclaw/pull/1774), [#1843](https://github.com/qwibitai/nanoclaw/pull/1843), [#1859](https://github.com/qwibitai/nanoclaw/pull/1859))
- **Browser-based access**: Web channel for users without Telegram ([#1863](https://github.com/qwibitai/nanoclaw/pull/1863))

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#1605](https://github.com/qwibitai/nanoclaw/pull/1605) Security policy engine | **18 days** | **High** | Rebased once already; large architectural PR risking further drift; needs maintainer review or decomposition |
| [#1774](https://github.com/qwibitai/nanoclaw/pull/1774) OpenAI support + token tracking | **6 days** | Medium | Actively updated; may conflict with [#1843](https://github.com/qwibitai/nanoclaw/pull/1843) Codex provider—consider coordination |
| [#1843](https://github.com/qwibitai/nanoclaw/pull/1843) Codex provider | **2 days** | Medium | Substantial; "app-server vs. SDK" decision has long-term maintenance implications |
| [#1845](https://github.com/qwibitai/nanoclaw/pull/1845) ISO 8601 timestamp normalization | **2 days** | Low | v2 cleanup; blocked on v2 merge strategy? |

**Critical Concern**: **No maintainer comments visible** on any PR (all show `Comments: undefined` or 0). This suggests either data truncation in the source or a **review bottleneck** that threatens to stall the 11 open PRs. The project health indicator would improve significantly with visible maintainer engagement triaging [#1869](https://github.com/qwibitai/nanoclaw/pull/1869) (v2 prep), [#1868](https://github.com/qwibitai/nanoclaw/pull/1868) (env allowlist), and [#1605](https://github.com/qwibitai/nanoclaw/pull/1605) (security engine).

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-20

## 1. Today's Overview

NullClaw saw **exceptionally high development velocity** on 2026-04-19, with **12 new pull requests opened** (all by core contributor `manelsen`) and **7 issues updated** (6 still open, 1 closed). No releases were cut. The activity pattern reveals an intense, coordinated engineering push addressing **three interconnected themes**: gateway stability fixes, subagent result delivery, and a major infrastructure refactor for concurrent inbound message routing. Notably, all 12 PRs remain unmerged, suggesting either a pending review bottleneck or an intentional batch-merge strategy. The project shows strong maintainer responsiveness to fresh bug reports but carries significant unmerged code volume.

---

## 2. Releases

**No new releases.** The project remains without any tagged versions in the tracking period. Issue #821 (closed) explicitly highlighted that source builds report version `"dev"` rather than meaningful version identifiers, indicating the project may still be pre-release or using continuous deployment without semantic versioning.

---

## 3. Project Progress

**No PRs were merged or closed on 2026-04-19.** All 12 PRs opened today remain in open status. However, the *scope* of proposed changes is substantial:

| PR | Focus | Fixes Issue |
|:---|:---|:---|
| [#845](https://github.com/nullclaw/nullclaw/pull/845) | **Core infrastructure**: Inbound router + mid-turn injection | #832 |
| [#846](https://github.com/nullclaw/nullclaw/pull/846) | **Channel loop**: Telegram/Max routing via inbound_router | — |
| [#847](https://github.com/nullclaw/nullclaw/pull/847) | **Gateway**: Webhook routing via inbound_router | — |
| [#848](https://github.com/nullclaw/nullclaw/pull/848) | **Daemon**: Bus message routing via inbound_router | — |
| [#855](https://github.com/nullclaw/nullclaw/pull/855) | **Daemon/session**: Inbound concurrency + preemption | #832 |
| [#854](https://github.com/nullclaw/nullclaw/pull/854) | **Subagent**: Result delivery to original channel context | [#849](https://github.com/nullclaw/nullclaw/issues/849) |
| [#853](https://github.com/nullclaw/nullclaw/pull/853) | **Gateway**: Accept-loop backoff, CPU spin fix | [#851](https://github.com/nullclaw/nullclaw/issues/851) |
| [#852](https://github.com/nullclaw/nullclaw/pull/852) | **Memory**: Archive provenance + recall quality | — |
| [#850](https://github.com/nullclaw/nullclaw/pull/850) | **Tunnel**: Encrypted Tailscale auth_key support | — |
| [#844](https://github.com/nullclaw/nullclaw/pull/844) | **A2A**: Skill tool-call progress hints forwarding | — |
| [#843](https://github.com/nullclaw/nullclaw/pull/843) | **Onboard**: Fix KeyWriteFailed crash | [#763](https://github.com/nullclaw/nullclaw/issues/763) |
| [#770](https://github.com/nullclaw/nullclaw/pull/770) | **API**: REST Admin API (runtime, config, models, cron) | — |

**Key architectural signal**: PRs #845–#848 + #855 form a **5-PR stack** implementing non-blocking concurrent interactivity—a major capability gap being addressed systematically across all entry points (gateway webhooks, Telegram/Max channels, daemon bus).

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#826](https://github.com/nullclaw/nullclaw/issues/826) | **9 comments** | Tailscale gateway integration docs | Users want secure, zero-config remote access without manual tunnel setup; documentation gap + `NotImplemented` error suggests Tailscale support is partial |
| [#821](https://github.com/nullclaw/nullclaw/issues/821) | 4 comments | Version string shows `"dev"` | **Closed** — Build reproducibility and release hygiene; users need to identify what they're running |
| [#354](https://github.com/nullclaw/nullclaw/issues/354) | 3 comments | Homebrew upgrade breaks service | Packaging/deployment stability; hardcoded Cellar paths indicate fragile macOS service installation |

**Analysis**: The Tailscale issue (#826) is the **longest-running active thread** (created 2026-04-15, 9 comments) and intersects with today's PR #850 (encrypted Tailscale auth_key). The user need is **frictionless secure networking**—NullClaw appears to be moving toward integrated Tailscale automation but documentation and error handling lag implementation.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **🔴 High** | [#851](https://github.com/nullclaw/nullclaw/issues/851) — Gateway CPU spin on `accept4()` EAGAIN | Open, 0 comments | [#853](https://github.com/nullclaw/nullclaw/pull/853) | 100% CPU core consumption on Raspberry Pi 5; busy-loop in accept loop under transient failures |
| **🔴 High** | [#849](https://github.com/nullclaw/nullclaw/issues/849) — Subagent cannot return results | Open, 0 comments | [#854](https://github.com/nullclaw/nullclaw/pull/854) | Subagent spawns, executes, creates files, but result channel broken; breaks multi-agent workflows |
| **🟡 Medium** | [#408](https://github.com/nullclaw/nullclaw/issues/408) — Tool call parsing extracts `:` as tool name | Open, 2 comments | **None** | JSON parsing bug: `{"name": "memory_recall", ...}` parsed as tool name `":"`; affects LLM integration reliability |
| **🟡 Medium** | [#665](https://github.com/nullclaw/nullclaw/issues/665) — `error.NoResponseContent` | Open, 2 comments | **None** | Memory backend initialization succeeds but model response missing; unclear if model or routing issue |
| **🟡 Medium** | [#354](https://github.com/nullclaw/nullclaw/issues/354) — Homebrew upgrade breaks service | Open, 3 comments | **None** | LaunchAgent plist hardcodes versioned Cellar path; upgrade orphans service |
| **🟢 Low/Fixed** | [#821](https://github.com/nullclaw/nullclaw/issues/821) — Version shows `"dev"` | **Closed** | **None** (likely build fix) | Build-time version injection missing |

**Stability assessment**: **Two critical bugs reported today have same-day fix PRs** (#851→#853, #849→#854), indicating responsive maintainer triage. However, #408 (tool parsing) and #665 (NoResponseContent) are **older open bugs with no linked fixes**, suggesting deeper architectural issues or lower prioritization.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Release |
|:---|:---|:---|
| **Concurrent inbound message handling** | PRs #845–#848, #855 | **Very High** — 5 PRs, core infrastructure |
| **Tailscale-integrated secure tunneling** | PR #850 + Issue #826 | **High** — implementation exists, needs merge + docs |
| **REST Admin API** | PR #770 (opened 2026-04-05, updated today) | **Medium** — mature PR, opt-in, zero dependencies |
| **A2A protocol progress streaming** | PR #844 | **Medium** — protocol compliance feature |
| **Memory recall quality improvements** | PR #852 | **Medium** — quality-of-life, not blocking |
| **Docker onboarding reliability** | PR #843 | **High** — small fix, clear user pain (#763) |

**Predicted next version focus**: The inbound router refactor (#845–#855) appears to be **the dominant roadmap item**—enabling NullClaw to handle multiple concurrent conversations and mid-turn interruptions, a foundational capability for interactive agents.

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Scenario | Satisfaction Impact |
|:---|:---|:---|
| **Tailscale integration friction** (#826) | Remote VPS deployment with secure networking | 🔴 **Blocking** — `NotImplemented` error halts progress |
| **Subagent result blackhole** (#849) | Multi-agent delegation workflows | 🔴 **Blocking** — task completes, output lost |
| **Gateway CPU exhaustion** (#851) | Raspberry Pi / resource-constrained edge deployment | 🔴 **Severe** — renders gateway unusable |
| **Homebrew service fragility** (#354) | macOS users expecting standard package behavior | 🟡 **Friction** — silent failure after upgrade |
| **Version opacity** (#821) | Source builders, debugging, support | 🟡 **Friction** — now fixed |

### Use Case Patterns

- **Edge/IoT deployment**: Raspberry Pi 5 + Debian trixie (#851) indicates ARM64 edge usage
- **Secure remote access**: Tailscale + VPS (#826) for self-hosted agents
- **Multi-agent orchestration**: Subagent spawning (#849) for complex task decomposition
- **macOS desktop integration**: Homebrew + LaunchAgent (#354) for personal assistant use

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#408](https://github.com/nullclaw/nullclaw/issues/408) Tool parsing bug | **41 days** | 🔴 **Data corruption** — wrong tool invoked | Triage: root cause in JSON parser vs. regex extraction; assign or request repro |
| [#354](https://github.com/nullclaw/nullclaw/issues/354) Homebrew service break | **44 days** | 🟡 **Packaging debt** | Simple fix: dynamic path resolution in plist template; good first issue? |
| [#665](https://github.com/nullclaw/nullclaw/issues/665) NoResponseContent | **30 days** | 🟡 **Model compatibility** | Needs repro steps with specific model/backend; may be llama.cpp-specific |
| [#832](https://github.com/nullclaw/nullclaw/issues/832) *(implied by PRs)* | — | — | Parent issue for concurrent interactivity; verify closure when #845–#855 merge |

**Maintainer attention gap**: #408 stands out as the **oldest unaddressed bug with clear repro steps and logs**—the tool name `":"` extraction strongly suggests a regex or tokenizer bug in the tool call parser that could silently break agent functionality across all LLM providers.

---

*Digest generated from GitHub activity 2026-04-19. All links reference https://github.com/nullclaw/nullclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-20

## 1. Today's Overview

IronClaw shows **very high development velocity** with 50 PRs and 11 issues updated in the last 24 hours, though no new releases were cut. The project is in an intensive **Engine v2 stabilization and gateway redesign phase**, with multiple staging promotions (#2690–#2696) indicating active CI/CD pipeline movement. Core maintainers ilblackdragon and serrrfirat are driving most activity, with significant focus on auth flows, design system adoption, and sandbox security hardening. The 32:18 open-to-merged PR ratio suggests a healthy but backlogged review queue. Notably, several long-running community PRs (Aliyun support, Slack Socket Mode) remain open after ~1 month, indicating potential contributor experience friction.

---

## 2. Releases

**No new releases** — version 0 remains the latest.

---

## 3. Project Progress

### Merged/Closed PRs (18 total, selected highlights)

| PR | Description | Significance |
|:---|:---|:---|
| [#2549](https://github.com/nearai/ironclaw/pull/2549) | `mission_get` action for Engine v2 — retrieves mission results, status, approach history | **Closes critical UX gap** where agents couldn't answer "what is the result of the research?" |
| [#2694](https://github.com/nearai/ironclaw/pull/2694) | Document Engine v2 opt-in (`ENGINE_V2=true`) | Reduces onboarding confusion; docs-only |
| [#1019](https://github.com/nearai/ironclaw/pull/1019) | `CognitiveGuardian` — proactive memory discipline module (706 lines) | Advanced agent behavior: checkpoints work before context pressure forces compaction |
| [#936](https://github.com/nearai/ironclaw/pull/936) | `open_file` workflow with persistent/revocable approvals | Local filesystem integration with safety controls |
| [#1540](https://github.com/nearai/ironclaw/pull/1540) | Slack thread participation memory across replies | Fixes #1404; improves multi-turn Slack UX |
| [#2576](https://github.com/nearai/ironclaw/pull/2576) | Fix Claude Code Review targeting merged PRs instead of promotion PRs | CI reliability improvement |

### Key Advances
- **Engine v2** gains mission introspection capabilities and clearer onboarding documentation
- **Slack channel** now remembers thread context, reducing @mention fatigue
- **Local development** streamlined via slimmer default Cargo features (#2693, see section 5)

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | 👍 | Analysis |
|:---|:---|:---:|:---:|:---|
| 1 | [#1350](https://github.com/nearai/ironclaw/issues/1350) — **CLOSED** Hot-reload LLM provider without restart | 2 | 2 | **Resolved pain point**: Users expected immediate provider switching; root cause was singleton initialization pattern. Fix merged. |
| 2 | [#2599](https://github.com/nearai/ironclaw/issues/2599) — Epic: Gateway feature boundaries + crate guardrails | 2 | 1 | **Architectural debt**: Large-scale frontend refactor to bounded contexts. Staged approach suggests maintainers recognize risk. |
| 3 | [#2360](https://github.com/nearai/ironclaw/issues/2360) — Built-in browser tool with CDP/AX-tree | 2 | 0 | **Core capability gap**: Agent cannot interact with JS-rendered pages; blocked on 3 dependencies (#2357–#2359). High complexity, long lead time. |

### Underlying Needs
- **Immediate configurability**: Users want runtime changes without restarts (#1350 pattern)
- **Modular architecture**: Gateway is becoming unmaintainable; boundaries needed (#2599)
- **Real web interaction**: Raw HTTP insufficient for modern web; browser automation critical (#2360)

---

## 5. Bugs & Stability

| Severity | Item | Status | Details | Fix PR? |
|:---|:---|:---:|:---|:---:|
| **🔴 High** | [#2676](https://github.com/nearai/ironclaw/issues/2676) — WASM URL leak scan runs post-injection | **OPEN** | Security regression: leak detection misses injected URLs on both channel and tool paths. Follow-up from #1377 review. | None yet |
| **🟡 Medium** | [#2697](https://github.com/nearai/ironclaw/issues/2697) — Agent reports incorrect time (~11 min behind) | **OPEN** | Causes `delay_minutes` routines to fire incorrectly; time-sensitive reminders unreliable. Root cause unidentified. | None yet |
| **🟡 Medium** | [#2624](https://github.com/nearai/ironclaw/issues/2624) — Telegram E2E bot token validation 401 | **CLOSED** | E2E test failure; likely test env config, not production bug. Closed without clear resolution note. | N/A |
| **🟢 Low** | [#1947](https://github.com/nearai/ironclaw/issues/1947) — MCP test-server UTF-8 truncation panic | **CLOSED** | Multi-byte char boundary panic in CLI; fixed. | Merged |
| **🟢 Low** | [#1840](https://github.com/nearai/ironclaw/issues/1840) — `--cli-only` still starts webhook server | **CLOSED** | Security/surprise issue: ignores HTTP_HOST/HTTP_PORT, binds 0.0.0.0:8080. Fixed. | Merged |

### Stability Notes
- **#2676 is critical**: WASM sandbox security boundary compromised; should be prioritized for next release
- **#2697** suggests NTP/time sync or container clock drift issue; affects core scheduling reliability
- Multiple E2E test fixes (#2624, #2576) indicate CI fragility, not necessarily production instability

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| **Built-in browser tool** | [#2360](https://github.com/nearai/ironclaw/issues/2360) | Medium | Blocked on 3 sub-issues; ~1–2 sprints once unblocked. High user value. |
| **Engine v2 full sandboxing** | [#2667](https://github.com/nearai/ironclaw/issues/2667) | High | Tracking issue for Phases 1–7 completion; active work, security-critical. |
| **Gateway design system** | [#2695](https://github.com/nearai/ironclaw/pull/2695), [#2689](https://github.com/nearai/ironclaw/pull/2689) | High | Two PRs active; visual language + tokens in parallel. Near-term merge likely. |
| **Aliyun Coding Plan support** | [#1446](https://github.com/nearai/ironclaw/pull/1446) | Uncertain | XL PR open since March 20; contributor PR, may need rebase/review bandwidth. |
| **Slack Socket Mode** | [#1549](https://github.com/nearai/ironclaw/pull/1549) | Uncertain | Same pattern: contributor PR, March 21, no recent maintainer comments. NAT-friendly connectivity is clear enterprise need. |
| **Secrets management CLI/TUI** | [#2600](https://github.com/nearai/ironclaw/issues/2600) | Medium | Closed as proposal; documentation gap acknowledged. May resurface as implementation. |

---

## 7. User Feedback Summary

### Explicit Pain Points

| Issue | User | Core Problem |
|:---|:---|:---|
| [#2600](https://github.com/nearai/ironclaw/issues/2600) | ek775 | **Secrets management is undocumented and confusing** — "struggles with authentication," "not well documented how users are intended to manage their secrets." *Closed as proposal; no immediate action.* |
| [#1350](https://github.com/nearai/ironclaw/issues/1350) | italic-jinxin | **Configuration changes require restart** — poor UX for LLM provider switching. *Fixed.* |
| [#2697](https://github.com/nearai/ironclaw/issues/2697) | rizgan | **Time-sensitive features unreliable** — reminders/alarms fire incorrectly due to clock skew. *Open, unassigned.* |

### Satisfaction Signals
- Hot-reload fix (#1350) received 👍×2, indicating appreciation for responsiveness
- Cognitive Guardian (#1019) and `open_file` (#936) show investment in advanced user workflows

### Dissatisfaction Signals
- Two major contributor PRs (#1446, #1549) stalled ~1 month with no clear path to merge
- Secrets management issue closed without implementation — "understandably, authentication patterns may drift" reads as maintainer excuse, not resolution

---

## 8. Backlog Watch

### Long-Running Items Needing Attention

| Item | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#1446](https://github.com/nearai/ironclaw/pull/1446) Aliyun support | ~30 days | **Contributor attrition** | XL PR from new contributor; no maintainer review comments visible. Needs scope review or friendly close with guidance. |
| [#1549](https://github.com/nearai/ironclaw/pull/1549) Slack Socket Mode | ~30 days | **Contributor attrition** | Enterprise connectivity feature; same pattern. Needs maintainer triage. |
| [#2360](https://github.com/nearai/ironclaw/issues/2360) Browser tool | ~8 days | **Dependency chain risk** | 3 blocking issues (#2357–#2359) must complete first. Monitor for cascade delays. |
| [#2599](https://github.com/nearai/ironclaw/issues/2599) Gateway boundaries epic | ~3 days | **Architecture divergence** | Large refactor; needs milestone assignment to prevent scope creep. |

### Maintainer Focus This Week
1. **Security**: #2676 (WASM URL leak) — unassigned, high risk
2. **Reliability**: #2697 (time skew) — affects core scheduling
3. **Contributor experience**: #1446, #1549 — review or close decisively

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-20

## 1. Today's Overview

LobsterAI shows **moderate community activity** with 4 issues and 9 pull requests updated in the last 24 hours, though no new releases were published. The project appears to be in a **maintenance-heavy phase**: all 9 active PRs remain unmerged (many marked stale), while issue resolution is mixed with 2 of 4 recent issues closed. Notably, the maintainer team seems responsive to critical bugs—an exec routing conflict in Telegram was resolved within a day—but the growing backlog of unmerged community contributions suggests **review bandwidth constraints** that could slow feature velocity.

---

## 2. Releases

**No new releases** as of 2026-04-20. The latest version remains unreported in current data.

---

## 3. Project Progress

**No PRs were merged or closed today.** All 9 updated PRs remain in OPEN status, with several carrying the `[stale]` label, indicating they have been open for 30+ days without maintainer action.

Notable PRs awaiting review that would advance the project:

| PR | Description | Status |
|:---|:---|:---|
| [#428](https://github.com/netease-youdao/LobsterAI/pull/428) | Add LM Studio as model provider (local AI, no API key needed) | Open, updated today |
| [#515](https://github.com/netease-youdao/LobsterAI/pull/515) | Fix OpenAI `max_completion_tokens` deprecation for new models | `[stale]`, updated today |
| [#517](https://github.com/netease-youdao/LobsterAI/pull/517) | Fix scheduled task interval corruption to `nan:nan` | `[stale]`, updated today |
| [#518](https://github.com/netease-youdao/LobsterAI/pull/518) | Fix API-created task Chinese path encoding | `[stale]`, updated today |
| [#537](https://github.com/netease-youdao/LobsterAI/pull/537) | Add GitHub profile Skill | `[stale]`, updated today |
| [#538](https://github.com/netease-youdao/LobsterAI/pull/538) | Add QR code generation Skill | `[stale]`, updated today |

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|:---|:---|:---|
| [#1687](https://github.com/netease-youdao/LobsterAI/issues/1687) — Login failure on Deepin V25 | 3 comments, **CLOSED** | **Root cause**: OAuth callback fails in embedded browser vs. system browser works. Signals **Linux desktop compatibility gap** in authentication flow. |
| [#1744](https://github.com/netease-youdao/LobsterAI/issues/1744) — Bug report | 2 comments, **OPEN** | Author failed to upload diagnostic file; limited actionable info. Suggests need for **structured bug report template** with automated diagnostics collection. |
| [#1743](https://github.com/netease-youdao/LobsterAI/issues/1743) — Telegram exec routing conflict | 2 comments, **CLOSED** | **Rapidly resolved**: `sandbox mode: off` config conflicted with hardcoded `host=sandbox` in Telegram sessions. Indicates **platform-specific exec environment detection bug**. |

**Underlying needs detected:**
- **Cross-platform auth reliability** (Linux especially)
- **Clearer exec environment configuration** (sandbox vs. local mode per-IM-platform)
- **Better diagnostic tooling** for bug reports

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|:---|:---|:---|:---|
| 🔴 **High** | [#1743](https://github.com/netease-youdao/LobsterAI/issues/1743) — Telegram exec calls fail due to sandbox/local mode mismatch | **CLOSED** (fixed) | Implied in closure; no linked PR visible |
| 🟡 **Medium** | [#1744](https://github.com/netease-youdao/LobsterAI/issues/1744) — Unspecified bug (diagnostic upload failed) | **OPEN** | No PR |
| 🟡 **Medium** | [#1687](https://github.com/netease-youdao/LobsterAI/issues/1687) — Login failure on Deepin Linux | **CLOSED** | No linked PR; likely config workaround |
| 🟢 **Low** | [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) — Outlook OAuth2 unsupported | **OPEN** | No PR |

**Regression risk**: The Telegram exec fix (#1743) suggests **configuration state propagation issues** between OpenClaw sync and IM-specific routing. Similar bugs may affect other platforms (Slack, Discord, POPO).

**Outstanding stability PRs awaiting merge:**
- [#515](https://github.com/netease-youdao/LobsterAI/pull/515) — OpenAI API breakage for new models (will cause failures as `gpt-5` series expands)
- [#517](https://github.com/netease-youdao/LobsterAI/pull/517) — Scheduled task corruption (data integrity risk)

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version |
|:---|:---|:---|
| **OAuth2/Modern Auth for email** (Outlook, corporate SSO) | [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) | **High** — Critical for enterprise adoption; Microsoft deprecated basic auth |
| **LM Studio local model support** | [#428](https://github.com/netease-youdao/LobsterAI/pull/428) | **Medium-High** — Aligns with on-premise/privacy trends; PR ready |
| **GitHub integration Skill** | [#537](https://github.com/netease-youdao/LobsterAI/pull/537) | **Medium** — PR complete with tests; blocked on review |
| **QR code generation Skill** | [#538](https://github.com/netease-youdao/LobsterAI/pull/538) | **Medium** — PR complete; utility feature |
| **i18n/暗黑模式 polish** | [#535](https://github.com/netease-youdao/LobsterAI/pull/535), [#536](https://github.com/netease-youdao/LobsterAI/pull/536) | **Medium** — Quality-of-life; affects international users |

**Predicted v20260420+ priorities**: Email OAuth2 (security compliance), local model provider expansion (LM Studio, Ollama parity), Skill ecosystem growth.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Authentication fragility** | #1687 (Linux login), #1745 (Outlook OAuth) | High — blocks core functionality |
| **Platform-specific exec failures** | #1743 (Telegram sandbox conflict) | High — breaks agent actions |
| **Configuration opacity** | #1743 logs show `sandbox mode: off` but behavior contradicts | Medium — debuggability gap |
| **Email integration outdated** | #1745 — "普通应用密码登录被完全禁止" | High — Microsoft ecosystem exclusion |

### Use Cases Emerging
- **Linux desktop users** (Deepin V25) — niche but vocal; likely Chinese domestic market
- **Telegram-heavy automation workflows** — exec reliability critical for bot users
- **Enterprise email integration** — Outlook/Exchange modern auth required for B2B

### Satisfaction Signals
- Rapid closure of #1743 (same-day fix) → **responsive for critical bugs**
- User #1743 provided detailed logs and root cause analysis → **engaged technical community**

### Dissatisfaction Signals
- 6 of 9 PRs marked `[stale]` → **contributor frustration from review delays**
- Failed file upload in #1744 → **tooling friction in bug reporting**

---

## 8. Backlog Watch

### Critical PRs at Risk of Bitrot

| PR | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#515](https://github.com/netease-youdao/LobsterAI/pull/515) — OpenAI `max_completion_tokens` fix | ~32 days | **API breakage for new models** | Merge or rebase; affects all OpenAI users |
| [#517](https://github.com/netease-youdao/LobsterAI/pull/517) — Scheduled task `nan:nan` fix | ~32 days | Data corruption bug | Low complexity; quick win |
| [#518](https://github.com/netease-youdao/LobsterAI/pull/518) — Chinese path encoding fix | ~32 days | International user breakage | Small scope; should merge |
| [#537](https://github.com/netease-youdao/LobsterAI/pull/537) — GitHub Skill | ~32 days | Feature delivery | Complete with tests; review needed |
| [#538](https://github.com/netease-youdao/LobsterAI/pull/538) — QR code Skill | ~32 days | Feature delivery | Complete with tests; review needed |

### Unanswered Issues Needing Triage

| Issue | Status | Concern |
|:---|:---|:---|
| [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) — Outlook OAuth2 | Open, 1 comment | No maintainer response; blocks enterprise users |
| [#1744](https://github.com/netease-youdao/LobsterAI/issues/1744) — Incomplete bug report | Open, 2 comments | Needs template enforcement or bot automation |

---

## Project Health Assessment

| Metric | Status |
|:---|:---|
| Issue resolution rate | ⚠️ Moderate (50% closed, but small sample) |
| PR merge velocity | 🔴 **Poor** (0/9 merged, 6 stale) |
| Critical bug response | 🟢 Good (same-day fix for #1743) |
| Contributor retention risk | 🔴 **High** (stale PR accumulation) |
| Feature readiness | 🟢 Good (multiple complete PRs awaiting merge) |

**Recommendation**: LobsterAI would benefit from a **focused review sprint** to clear the stale PR backlog, particularly the stability fixes (#515–#518) that prevent user-facing failures. The maintainer team's bug-fix responsiveness is a strength, but review bandwidth appears to be the primary bottleneck limiting project velocity.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw Project Digest — 2026-04-20

**Project:** TinyAGI/tinyagi (TinyClaw)  
**Date:** 2026-04-20  
**Source:** github.com/TinyAGI/tinyagi

---

## 1. Today's Overview

TinyClaw shows minimal activity over the past 24 hours with **2 new bug reports filed and zero pull request or release activity**. The project appears to be in a maintenance-stagnant phase—no code contributions, no issue resolutions, and no maintainer engagement with newly reported problems. Both issues originate from the same user (debamitro), suggesting either a concentrated onboarding friction point or limited active user base. The absence of any closed issues or merged PRs indicates potential maintainer bandwidth constraints. Overall project health signals **concerning stagnation** for a tool positioning itself as an AI agent framework.

---

## 2. Releases

*No new releases. No version tags or changelog activity in the past 24 hours.*

---

## 3. Project Progress

**No merged or closed PRs today.** Zero code advancement. The project made no measurable engineering progress on 2026-04-19/20.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#279: channel setup not working](https://github.com/TinyAGI/tinyagi/issues/279) | 0 comments, 0 reactions | **Core feature completely broken** — Telegram channel setup, a primary integration pathway, fails with "Unknown messaging command: setup". This suggests either documentation drift (command changed, docs didn't) or a regression in CLI routing. |
| [#278: better-sqlite3 still needs to be rebuilt](https://github.com/TinyAGI/tinyagi/issues/278) | 0 comments, 0 reactions | **Recurring native dependency pain** — fresh installs require manual `npm rebuild better-sqlite3`, indicating prebuilt binaries aren't distributed or `postinstall` hooks are failing silently. |

**Underlying needs:** Both issues expose **first-run experience failures**. Users expect `npm install && npm start` to work; TinyClaw currently fails this threshold. The concentration of problems in installation/initialization suggests the project lacks CI-tested clean-environment validation.

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR? | Details |
|----------|-------|---------|---------|
| **High** | [#279: channel setup not working](https://github.com/TinyAGI/tinyagi/issues/279) | ❌ None | Core Telegram integration non-functional; no workaround identified |
| **Medium** | [#278: better-sqlite3 still needs to be rebuilt](https://github.com/TinyAGI/tinyagi/issues/278) | ❌ None | Workaround exists (`npm rebuild`) but degrades first-run trust |

**Stability assessment:** Two fresh bugs, zero fixes, no maintainer acknowledgment. The High-severity issue breaks a documented core workflow. The better-sqlite3 issue is a **known-class Node.js problem** (native modules across platforms) that mature projects solve via `prebuildify` or `better-sqlite3`'s prebuilt distribution—its persistence suggests outdated dependency management.

---

## 6. Feature Requests & Roadmap Signals

*No feature requests filed today.* Both issues are bug reports, not enhancements. However, the nature of these bugs implies missing infrastructure:

| Implied Need | Likelihood in Next Version |
|--------------|---------------------------|
| Automated prebuilt binary distribution for better-sqlite3 | Medium — standard fix, but requires maintainer action |
| CLI command validation/testing suite | High — #279 suggests no integration tests for CLI paths |
| Docker/containerized distribution to sidestep native build issues | Low — no signals of this direction |

---

## 7. User Feedback Summary

**Real pain points from debamitro (reported 2026-04-19):**

| Pain Point | Use Case Impact | Satisfaction Signal |
|------------|---------------|---------------------|
| Cannot configure Telegram channels | Blocks messaging/notification workflows | 🔴 **Blocker** — cannot evaluate core value |
| Manual native module rebuild required | Delays/degrades every fresh install | 🟡 **Friction** — workaround exists but erodes confidence |

**Pattern:** Both reports follow a **"fresh install → immediate failure"** trajectory. This is the highest-risk dropout point for open-source tools. No response from maintainers within 24h amplifies dissatisfaction.

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#279](https://github.com/TinyAGI/tinyagi/issues/279) | 1 day | **Critical** — High severity, no workaround, no maintainer response | Triage + assign; likely CLI routing regression |
| [#278](https://github.com/TinyAGI/tinyagi/issues/278) | 1 day | Elevated — Medium severity, known workaround, no maintainer response | Evaluate `better-sqlite3` version bump or prebuild integration |

**Broader concern:** With only 2 issues total and **zero maintainer engagement**, TinyClaw may face **bus factor or abandonment risk**. No PR activity, no release cadence, and same-day unacknowledged high-severity bugs are early warning indicators for project sustainability.

---

*Digest generated from GitHub activity data. All links direct to github.com/TinyAGI/tinyagi.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-20

## 1. Today's Overview

Moltis showed **moderate development activity** over the past 24 hours with 5 pull requests updated and 2 active issues, though no new releases were cut. The project appears focused on **code quality improvements and documentation maintenance** rather than feature expansion, with significant engineering work landing in error handling refactoring and a completed TypeScript UI migration. Two Google model-related bugs remain open and unaddressed, suggesting potential provider compatibility gaps that may need prioritization. The "Doc Rotisserie" initiative indicates systematic investment in documentation accuracy, with 11 files audited across two merged batches. Overall project health seems stable with active maintenance but no major feature velocity.

---

## 2. Releases

**No new releases** — None published in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs (4 items)

| PR | Author | Description | Significance |
|:---|:---|:---|:---|
| [#775](https://github.com/moltis-org/moltis/pull/775) | penso | **Completed TypeScript web UI migration** — Full rewrite from JS+HTM to TypeScript+JSX (Preact) with Vite; 142 TS/TSX files (~49K LoC) from 135 JS files | Major architectural modernization; eliminates untyped JS surface, improves build tooling |
| [#513](https://github.com/moltis-org/moltis/pull/513) | leszek3737 | **Added Jina.ai as web search provider** — Third search option alongside Brave and Perplexity, with locale parameter mapping | Expands search ecosystem diversity; reduces vendor lock-in |
| [#787](https://github.com/moltis-org/moltis/pull/787) | Cstewart-HC | **Doc Rotisserie Batch 2** — 4 stale docs audited; session-state and Slack docs corrected | Continues documentation reliability initiative |
| [#792](https://github.com/moltis-org/moltis/pull/792) | penso | **Refactored error types in 8 library crates** — Replaced `anyhow` with `thiserror`-based enums in auth, caldav, httpd, mcp-agent-bridge, memory, node-host, qmd, skills | Critical for API stability and downstream error handling; enables matchable error types |

### Open PR
| PR | Author | Description | Status |
|:---|:---|:---|:---|
| [#783](https://github.com/moltis-org/moltis/pull/783) | Cstewart-HC | **Doc Rotisserie Batch 1** — 7 documentation files audited (+186/−63); 12/62 docs completed in rotation | Awaiting review/merge; builds on merged #787 |

---

## 4. Community Hot Topics

### Most Active Discussion
| Item | Engagement | Analysis |
|:---|:---|:---|
| [#375 — Function call missing thought_signature with Google models](https://github.com/moltis-org/moltis/issues/375) | 3 👍, 1 comment, 41 days open | **Highest community concern.** Underlying need: **Reliable function-calling with Google's Gemini models**, specifically preserving chain-of-thought signatures that downstream consumers expect. The 41-day duration with no fix PR suggests either complexity in Google API compatibility or prioritization gap. Users likely blocked on production deployments using Gemini. |
| [#793 — Openrouter + Google AI Studio = HTTP 400](https://github.com/moltis-org/moltis/issues/793) | 0 👍, 0 comments, 1 day old | **Emerging provider interoperability issue.** Fresh report indicates routing-layer problems when combining OpenRouter with Google AI Studio. Underlying need: **Stable abstraction over rapidly evolving LLM provider landscape.** May share root cause with #375 (Google model handling). |

**Pattern:** Both active bugs cluster around **Google model/provider integration**, suggesting a systematic compatibility blind spot.

---

## 5. Bugs & Stability

| Severity | Issue | Age | Fix PR? | Details |
|:---|:---|:---|:---|:---|
| **High** | [#375](https://github.com/moltis-org/moltis/issues/375) — Missing `thought_signature` in functionCall (Google models) | 41 days | ❌ No | Breaks function-calling workflows; 3 user upvotes; no maintainer response visible |
| **Medium-High** | [#793](https://github.com/moltis-org/moltis/issues/793) — Openrouter + Google AI Studio HTTP 400 | 1 day | ❌ No | Fresh; may indicate broader provider routing regression; needs triage |

**Assessment:** Two Google-related bugs with no associated fix PRs. The aged #375 is particularly concerning—function-calling is core functionality, and 41 days without resolution risks user attrition. No crash or security regressions reported today.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests** opened in the last 24 hours. However, **implicit signals from merged work**:

| Signal | Likely Near-Term Priority |
|:---|:---|
| Jina.ai search provider (#513) | **Search provider diversity** — Expect more provider additions (Tavily, Serper, custom?) |
| `thiserror` migration (#792) | **Library API stabilization** — Preparing for 1.0 or public crate releases; error types are breaking-change sensitive |
| TS+Preact migration completion (#775) | **Web UI feature expansion** — New frontend capabilities now unblocked by modern stack |
| Doc Rotisserie batches | **Documentation-driven onboarding** — Reducing friction for new contributors/users |

**Predicted for next version:** Search provider plugin architecture refinement; possible Google model compatibility fixes if prioritized; web UI enhancements leveraging new TS foundation.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| **Google model reliability** | #375 (41 days, 3 👍), #793 (fresh) | Critical — core provider broken |
| **Documentation staleness** | Addressed by Doc Rotisserie (#783, #787) | Moderate — actively being fixed |
| **Error handling opacity** | #792 (thiserror migration) | Moderate — improving via engineering |

**Satisfaction indicators:** Active maintenance (4 PRs merged), systematic docs investment, modern tooling adoption. **Dissatisfaction risk:** Unfixed Google bugs may drive users to alternatives (LangChain, LiteLLM) for provider stability.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#375](https://github.com/moltis-org/moltis/issues/375) — Google `thought_signature` | 41 days | **Escalating** — longest-open active bug, core feature | Maintainer triage; assign to Google provider owner; consider `help wanted` label |
| [#783](https://github.com/moltis-org/moltis/pull/783) — Doc Rotisserie Batch 1 | 2 days | Low | Routine review; merge to continue rotation |

**Critical gap:** No PR addressing either Google model issue. Recommend maintainers prioritize #375 and investigate #793 for shared root cause.

---

*Digest generated from github.com/moltis-org/moltis data as of 2026-04-20.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-20

## 1. Today's Overview

CoPaw shows **high community activity** with 21 issues updated and 14 active pull requests in the past 24 hours, though **zero merged PRs** indicates a potential review bottleneck. The project is experiencing a surge in first-time contributors (4 of 14 PRs), suggesting growing adoption, but the all-open PR status raises questions about maintainer bandwidth. Bug reports cluster around **Windows-specific path handling**, **Unicode serialization**, and **channel configuration gaps**, while frontend UX improvements dominate feature requests. No new release was cut, leaving v1.1.2 as the current stable version with known issues.

---

## 2. Releases

**No new releases** — v1.1.2 remains current.

---

## 3. Project Progress

**Merged/Closed PRs today: 0**

Despite 14 active PRs, none were merged or closed, suggesting either:
- Maintainer review queue backlog
- CI/test failures blocking merge
- Weekend/holiday lull in maintainer activity

**Notable advancing work:**

| PR | Author | Status | Significance |
|:---|:---|:---|:---|
| [#3559](https://github.com/agentscope-ai/QwenPaw/pull/3559) | hanson-hex | Updated 2026-04-20 | First comprehensive frontend test infrastructure (Vitest) — foundational for code quality |
| [#3550](https://github.com/agentscope-ai/QwenPaw/pull/3550) | vvv214 | Active updates | LLM routing runtime implementation — critical infrastructure follow-through from UI work |
| [#3452](https://github.com/agentscope-ai/QwenPaw/pull/3452) | vvv214 | Active since 2026-04-15 | LLM routing UI — long-running feature nearing completion |

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#3568](https://github.com/agentscope-ai/QwenPaw/issues/3568) — Skill YAML crash | 3 | Fatal crash from invalid skill metadata | **Resilience**: Users expect graceful degradation, not total system failure from plugin errors |
| [#3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) — Weixin cron KeyError | 3 | Channel mismatch in cron execution | **Consistency**: CLI-created channels must match runtime channel resolution |
| [#3552](https://github.com/agentscope-ai/QwenPaw/issues/3552) — Unicode SSE crash | 3 | Malformed surrogate crashes Console | **Robustness**: Streaming must handle real-world text edge cases |
| [#3560](https://github.com/agentscope-ai/QwenPaw/issues/3560) — llama.cpp tool parsing | 3 (closed) | Local model tool call stream error | **Local-first reliability**: Community actively debugging local LLM integrations |

### Most Active PRs

| PR | Topic | Why It Matters |
|:---|:---|:---|
| [#3585](https://github.com/agentscope-ai/QwenPaw/pull/3585) | Telegram typing indicator during tools | Addresses [#1874](https://github.com/agentscope-ai/QwenPaw/issues/1874) — first-time contributor solving real UX pain |
| [#3553](https://github.com/agentscope-ai/QwenPaw/pull/3553) | Unicode surrogate fix | Direct fix for [#3552](https://github.com/agentscope-ai/QwenPaw/issues/3552), ready for review |

**Community pattern**: Strong contributor response to their own reported issues — healthy self-healing dynamic.

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR? | Details |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#3568](https://github.com/agentscope-ai/QwenPaw/issues/3568) — Skill YAML crash | ✅ [#3583](https://github.com/agentscope-ai/QwenPaw/pull/3583) | Complete QwenPaw unresponsiveness from single bad skill; fix PR adds error handling |
| 🔴 **Critical** | [#3578](https://github.com/agentscope-ai/QwenPaw/issues/3578) — White screen on launch | ❌ No | Complete failure to start (Windows); no diagnostic clarity yet |
| 🟡 **High** | [#3552](https://github.com/agentscope-ai/QwenPaw/issues/3552) — Unicode SSE crash | ✅ [#3553](https://github.com/agentscope-ai/QwenPaw/pull/3553) | Aborts active streaming sessions |
| 🟡 **High** | [#3582](https://github.com/agentscope-ai/QwenPaw/issues/3582) — Localhost auth bypass broken | ❌ No | Documentation-promised feature fails; security/UX impact |
| 🟡 **High** | [#3580](https://github.com/agentscope-ai/QwenPaw/issues/3580) / [#3581](https://github.com/agentscope-ai/QwenPaw/issues/3581) — Full-width punctuation file send | ✅ [#3581](https://github.com/agentscope-ai/QwenPaw/issues/3581) closed | Windows path encoding; duplicate reports suggest real prevalence |
| 🟡 **High** | [#3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) — Weixin cron KeyError | ❌ No | Channel configuration drift between CLI and runtime |
| 🟢 **Medium** | [#3566](https://github.com/agentscope-ai/QwenPaw/issues/3566) — view_image not registered | ❌ No | Multimodal feature partially broken |
| 🟢 **Medium** | [#3576](https://github.com/agentscope-ai/QwenPaw/issues/3576) — Google Fonts blocked (China) | ❌ No | Accessibility/regional availability |

**Stability assessment**: Windows platform showing disproportionate path/encoding issues. Two critical startup/runtime failures without immediate fixes.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Per-agent LLM assignment** | [#3579](https://github.com/agentscope-ai/QwenPaw/pull/3579) | 🔥 **High** | PR ready, builds on active #3550/#3452 routing work |
| **LLM routing runtime** | [#3550](https://github.com/agentscope-ai/QwenPaw/pull/3550) | 🔥 **High** | Core infrastructure, actively updated |
| **AgentMemory backend** | [#3565](https://github.com/agentscope-ai/QwenPaw/pull/3565) | 🟡 **Medium** | First-time contributor, architectural addition — may need review cycles |
| **Whisper voice input** | [#3574](https://github.com/agentscope-ai/QwenPaw/pull/3574) | 🟡 **Medium** | Novel feature, clean scope, first-time contributor |
| **Code block folding** | [#3572](https://github.com/agentscope-ai/QwenPaw/issues/3572) | 🟢 **Lower** | Pure UI, pending prioritization |
| **Context usage visibility** | [#3563](https://github.com/agentscope-ai/QwenPaw/issues/3563) | 🟢 **Lower** | Needs design, no PR yet |
| **Session list → chat deep links** | [#3378](https://github.com/agentscope-ai/QwenPaw/issues/3378) | 🟢 **Lower** | UX debt, 1+ month old |
| **Chat pagination** | [#3570](https://github.com/agentscope-ai/QwenPaw/issues/3570) | 🟢 **Lower** | Performance at scale, needs architectural decision |

**Roadmap signal**: Heavy investment in **LLM routing flexibility** (local/cloud/agent-scoped) suggests this is the current strategic priority. Memory system pluggability emerging as secondary theme.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Windows compatibility** | [#3580](https://github.com/agentscope-ai/QwenPaw/issues/3580), [#3581](https://github.com/agentscope-ai/QwenPaw/issues/3581), [#3578](https://github.com/agentscope-ai/QwenPaw/issues/3578), [#3562](https://github.com/agentscope-ai/QwenPaw/issues/3562) | High — path encoding, startup failures, Ollama integration |
| **China accessibility** | [#3576](https://github.com/agentscope-ai/QwenPaw/issues/3576) Google Fonts blocked | Moderate — affects core market |
| **Skill system fragility** | [#3568](https://github.com/agentscope-ai/QwenPaw/issues/3568) crash from bad YAML | High — plugin system should sandbox failures |
| **Cron/channel reliability** | [#3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) Weixin mismatch | Moderate — automation use cases broken |
| **Frontend density/clutter** | [#3571](https://github.com/agentscope-ai/QwenPaw/issues/3571) hide header, [#3572](https://github.com/agentscope-ai/QwenPaw/issues/3572) fold code | Moderate — power users want cleaner UI |

### Positive Signals

- **Active self-service**: Users reporting *and* fixing their own issues (#3585, #3553, #3574)
- **Local model commitment**: [#3560](https://github.com/agentscope-ai/QwenPaw/issues/3560) shows sophisticated local llama.cpp debugging by "normal user" with AI assistance
- **Multimodal interest**: [#3566](https://github.com/agentscope-ai/QwenPaw/issues/3566), [#3584](https://github.com/agentscope-ai/QwenPaw/pull/3584) indicate vision feature adoption

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1874](https://github.com/agentscope-ai/QwenPaw/issues/1874) — Telegram typing indicator | 1 month | **Resolved by PR** — [#3585](https://github.com/agentscope-ai/QwenPaw/pull/3585) now open | Review/merge #3585 |
| [#3378](https://github.com/agentscope-ai/QwenPaw/issues/3378) — Session→chat deep links | 6 days | UX debt accumulating | Triage: small effort, high user value |
| [#2432](https://github.com/agentscope-ai/QwenPaw/pull/2432) — Chat timestamps/identity | 24 days | Stale PR, merge conflicts likely | Maintainer decision: revive or close |
| [#3452](https://github.com/agentscope-ai/QwenPaw/pull/3452) — LLM routing UI | 5 days | Blocking #3550 runtime work | Final review, merge to unblock dependency chain |
| [#3550](https://github.com/agentscope-ai/QwenPaw/pull/3550) — Routing runtime | 3 days | Depends on #3452 | Merge #3452 first, then expedite |

**Critical path**: #3452 → #3550 → #3579 forms a dependency chain for the headline "per-agent LLM" feature. Delayed merges here cascade to release schedule.

---

*Digest generated from GitHub activity 2026-04-19 to 2026-04-20. All links: https://github.com/agentscope-ai/QwenPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-20

---

## 1. Today's Overview

ZeroClaw shows **intense development velocity** with 49 issues and 33 PRs active in the last 24 hours, indicating a project in active maturation. The v0.7.3 stable release shipped as an emergency patch after broken tags blew out the v0.7.2 milestone, representing the "largest structural overhaul in ZeroClaw's history" with a full Cargo workspace migration and new config schema. A significant cluster of high-priority runtime bugs from community contributor Jason Perlow (InvestorClaw) is driving sandbox and native execution fixes. The project is simultaneously pushing ambitious long-term architecture RFCs (microkernel transition, v1.0.0 roadmap) while fighting immediate fires in CI automation, documentation quality gates, and runtime stability. Overall health is **mixed but improving** — engineering discipline is being institutionalized through RFCs, but execution debt from rapid growth is evident.

---

## 2. Releases

### [v0.7.3](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.3) (Stable)
- **Scope**: Emergency release after v0.7.2 tag blowout; milestone renumbered to v0.7.4
- **Key Changes**:
  - Entire codebase split into proper Cargo workspace of focused crates
  - New config schema shipped with live migration support
  - Deployment features (OpenShift/K8s manifests via #5880)
  - Bug fixes for provider issues (#5879, #5606)
- **Breaking Changes**: Config schema v2 migration required; workspace structure changes affect downstream builds
- **Migration Notes**: Live migrator included; manual review needed for custom `providers.models.llamacpp` configurations (see #5815)

### [v0.7.3-beta.1051](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.3-beta.1051)
- Pre-stable testing build; no separate changelog

---

## 3. Project Progress

### Merged/Closed PRs (2026-04-19 to 2026-04-20)

| PR | Author | Summary | Significance |
|:---|:---|:---|:---|
| [#5913](https://github.com/zeroclaw-labs/zeroclaw/pull/5913) | JordanTheJet | **Extism WASM execution bridge (Phase 2 D2)** — `WasmTool::execute` now functional with Extism 1.21 | Major plugin architecture milestone; WASM plugins actually executable |
| [#5893](https://github.com/zeroclaw-labs/zeroclaw/pull/5893) | WareWolf-MoonWall | Version bump to 0.7.3 + changelog update | Release mechanics |
| [#5876](https://github.com/zeroclaw-labs/zeroclaw/pull/5876) | WareWolf-MoonWall | CI action-pinning enforcement check (FND-004 Phase 1 D4) | Security hardening completed |
| [#5898](https://github.com/zeroclaw-labs/zeroclaw/pull/5898) | perlowja | Python skills quickstart docs (native + custom-image paths) | Closes #5722; unblocks production Python skill deployment |
| [#5901](https://github.com/zeroclaw-labs/zeroclaw/pull/5901) | dshivendra | **BitChat BLE mesh + WiFi Direct offline agent communication** | Closed without merge; ambitious but likely premature — offline mesh networking for agents |

### Notable Open PRs Advancing

| PR | Author | Status |
|:---|:---|:---|
| [#5910](https://github.com/zeroclaw-labs/zeroclaw/pull/5910) | WareWolf-MoonWall | `review-session` skill lands (replaces `github-pr-review`) |
| [#5911](https://github.com/zeroclaw-labs/zeroclaw/pull/5911) | WareWolf-MoonWall | ZeroClaw Maturity Framework ratification — 6 foundation RFCs committed |
| [#5906](https://github.com/zeroclaw-labs/zeroclaw/pull/5906) | perlowja | memcg detection at daemon startup (#5895 fix) |
| [#5905](https://github.com/zeroclaw-labs/zeroclaw/pull/5905) | perlowja | Workspace bind-mount support for DockerSandbox (#5720 fix) |
| [#5904](https://github.com/zeroclaw-labs/zeroclaw/pull/5904) | perlowja | Respect `runtime.kind = "native"` in sandbox auto-detection (#5719 fix) |

---

## 4. Community Hot Topics

### Most Active by Discussion Volume

| # | Issue/PR | Comments | Core Tension |
|:---|:---|:---:|:---|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | **[CLOSED] Web dashboard still not available** | 17 | **Build system complexity vs. user experience** — recurring issue across versions; Tauri + web UI build pipeline remains fragile despite closure |
| [#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) | `runtime.kind = "native"` bypasses Docker for shell tool execution | 10 | **Security defaults vs. developer ergonomics** — sandbox auto-detection overrides explicit user intent; blocks production Python skills |
| [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) | **RFC: Microkernel Transition (v0.7.0 → v1.0.0)** | 8 | **Architectural ambition vs. delivery cadence** — team acknowledges "codebase that grew reactively"; massive refactor planned |
| [#5720](https://github.com/zeroclaw-labs/zeroclaw/issues/5720) | PYTHONPATH inline env var syntax broken in shell tool | 6 | **POSIX compliance vs. convenience syntax** — `ENV=val command` pattern fails; affects data science workflows |
| [#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) | Telegram voice message transcription | 6 | **Feature parity with OpenClaw (TypeScript counterpart)** — platform competitiveness |

### Underlying Needs Analysis

- **Perlowja cluster (#5719, #5720, #5722, #5895)**: A single sophisticated user (InvestorClaw, FINOS CDM-compliant finance skill) is stress-testing the Python skill runtime and hitting systematic sandbox/runtime friction. This represents a **canary for enterprise adoption** — if ZeroClaw can't support pandas/numpy workflows with reasonable security, it loses a major use case.
- **RFC series (#5574, #5576, #5577, #5579, #5615, #5653)**: WareWolf-MoonWall is institutionalizing engineering culture at scale — architecture, documentation, governance, CI/CD, quality, contribution culture. This suggests **project leadership recognizes sustainability risks** from rapid growth.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **S0 — Data loss/Security risk** | [#5672](https://github.com/zeroclaw-labs/zeroclaw/issues/5672) | Feishu bot responds when `mention_only` enabled — privacy leak | ❌ No fix PR |
| **S0 — Data loss/Security risk** | [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) | Context spillage from chat to schedule — cross-contamination | ❌ No fix PR |
| **S1 — Workflow blocked** | [#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) | `runtime.kind="native"` ignored, Docker forced | ✅ [#5904](https://github.com/zeroclaw-labs/zeroclaw/pull/5904) open |
| **S1 — Workflow blocked** | [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) | Provider ignores `llamacpp` object (schema v2 regression) | ❌ No fix PR |
| **S1 — Workflow blocked** | [#5813](https://github.com/zeroclaw-labs/zeroclaw/issues/5813) | Compaction orphans `tool_result` blocks, bricks Anthropic sessions | ❌ No fix PR |
| **S2 — Degraded behavior** | [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | Memory over-emphasis in system prompt (cron jobs affected) | ❌ No fix PR |
| **S2 — Degraded behavior** | [#5897](https://github.com/zeroclaw-labs/zeroclaw/issues/5897) | Telegram photo flow sends image markers to non-vision provider | ❌ No fix PR |
| **S2 — Degraded behavior** | [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) | MCP stdio child process leak — 48 orphans/day at default heartbeat | ❌ No fix PR |

**Regression Pattern**: Schema v2 config migration introduced multiple provider breakages (#5815, #5879). The workspace split is causing rebase/merge conflicts for older PRs (#5902, #5162 re-application needed).

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in v0.7.4/v0.8.0 | Signal Strength |
|:---|:---|:---:|:---|
| **Multi-agent routing** | [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) (7 👍), [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | High | Long-standing demand + new RFC posted 2026-04-19; core to v1.0.0 microkernel |
| **Telegram voice transcription** | [#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) | Medium | OpenClaw parity pressure; clear scope |
| **OAuth for Ollama Cloud, Zhipu, Kimi, MiniMax** | [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) (1 👍) | Medium | Provider expansion strategy; subscription-native auth trend |
| **GitHub integration tool** | [#4352](https://github.com/zeroclaw-labs/zeroclaw/issues/4352) | Low-Medium | "Help wanted" label; blocked on skill architecture |
| **Mattermost WebSocket channel** | [#5902](https://github.com/zeroclaw-labs/zeroclaw/pull/5902) | High | PR open, re-applied from earlier work |
| **OpenShift/K8s deployment** | [#5880](https://github.com/zeroclaw-labs/zeroclaw/pull/5880) | **Shipped in v0.7.3** | ✅ Complete |

**Architectural Predictions**: The microkernel RFC (#5574) signals v1.0.0 will be a ground-up restructuring. Near-term (v0.7.4-v0.8.0) expect incremental modularization — WASM bridge (#5913), multi-agent UX (#5890), and CI hardening (#5877, #5915) are the leading indicators.

---

## 7. User Feedback Summary

### Pain Points

| User | Issue | Core Complaint |
|:---|:---|:---|
| **perlowja** (InvestorClaw) | #5719, #5720, #5722, #5895 | "ZeroClaw's sandbox defaults block all realistic Python skill patterns" — sandbox security model incompatible with data science workflows; Docker over-native forcing breaks dependency management |
| **databillm** | #5844, #5415 | Memory system over-prioritizes historical context over current prompt; cross-session context leakage |
| **itripn** | #5813 | Compaction logic bricks sessions permanently — data loss, manual file deletion required |
| **hsuenaga** | #5815 | Schema v2 broke existing `llamacpp` configuration without clear migration path |

### Use Cases Emerging

- **Financial services compliance**: InvestorClaw as FINOS CDM exemplar — needs native Python, audit trails, sandbox transparency
- **Low-resource deployment**: Raspberry Pi OOM during linking (#4704, 3 👍) — claims of "<$10 hardware, <5MB RAM" need build system alignment
- **Enterprise messaging**: Feishu, Mattermost, Telegram voice — multi-platform workplace integration

### Satisfaction Signals

- Active RFC participation (WareWolf-MoonWall's 6-document framework)
- Rapid response to Perlowja's bug cluster (4 PRs filed same day as issues)
- Emergency v0.7.3 release shows responsiveness to tag blowout

### Dissatisfaction Signals

- "Vibe-coded workflows" being deleted (#5915) — admits prior CI automation was careless
- Docs quality gate blocking 3 PRs, then removed (#5914) — process thrashing
- #4866 closed but web dashboard remains fragile per recurring reports

---

## 8. Backlog Watch

### Critical Items Needing Maintainer Action

| Issue/PR | Age | Problem | Risk |
|:---|:---|:---|:---|
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) Multi-Agent Routing | ~47 days | 7 👍, "stale" label; superseded by #5890 but original not closed | Community confusion, duplicated effort |
| [#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704) Raspberry Pi deployment guide | ~26 days | 3 👍, "help wanted"; build OOM kills actual low-resource use | Marketing claim vs. reality gap |
| [#4352](https://github.com/zeroclaw-labs/zeroclaw/issues/4352) GitHub integration tool | ~28 days | "Help wanted"; no maintainer engagement | Platform ecosystem gap |
| [#5372](https://github.com/zeroclaw-labs/zeroclaw/pull/5372) Truncate oversized memory API payloads | ~14 days | "Needs-author-action" — stalled on feedback? | Dashboard performance |
| [#5623](https://github.com/zeroclaw-labs/zeroclaw/pull/5623) OpenRouter `extra_body` passthrough | ~9 days | "Needs-author-action" | Provider flexibility |
| [#5592](https://github.com/zeroclaw-labs/zeroclaw/pull/5592) Docker.debian build fix | ~10 days | "Needs-author-action" | Build reliability |

### Maintainer Capacity Concerns

- **WareWolf-MoonWall** is single-handedly driving: release management, RFC authorship, CI cleanup, docs framework, and manual runbook creation (#5920). This is a **bus factor risk**.
- **Perlowja** is effectively co-developing on runtime fixes — 4 PRs in 24h. Dependency on a single external contributor for critical path items.

---

*Digest generated from GitHub activity 2026-04-19 to 2026-04-20. All links: [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*