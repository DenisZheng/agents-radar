# OpenClaw Ecosystem Digest 2026-04-29

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-29 00:20 UTC

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

# OpenClaw Project Digest — 2026-04-29

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, though the vast majority remain open (487 issues, 466 PRs), indicating a significant backlog accumulation. Only 13 issues were closed and 34 PRs merged/closed, suggesting **maintainer bandwidth constraints** relative to community contributions. A new release (v2026.4.26) shipped with notable realtime voice capabilities, yet a **critical performance regression** from v4.22→4.26 has emerged as a blocker. The project appears healthy in terms of engagement but faces **stability and scaling challenges** as it grows.

---

## 2. Releases

### [v2026.4.26](https://github.com/openclaw/openclaw/releases/tag/v2026.4.26) — OpenClaw 2026.4.26

| Aspect | Details |
|--------|---------|
| **Key Changes** | • **Realtime voice infrastructure**: Generic browser realtime transport contract, Google Live browser Talk sessions with constrained ephemeral tokens, Gateway relay for backend-only realtime voice plugins (contributed by @VACInc)<br>• **CLI/model routing**: Provider-filtered model listing through CLI |
| **Breaking Changes** | None explicitly noted |
| **Migration Notes** | Users leveraging voice features should review new Gateway relay configuration; ephemeral token constraints may require auth flow updates |
| **Risk Assessment** | **Moderate** — new voice stack is complex; monitor for integration issues with existing channel adapters |

---

## 3. Project Progress

**Merged/Closed PRs Today (34 total, highlights):**

| PR | Author | Focus | Status |
|----|--------|-------|--------|
| [#73883](https://github.com/openclaw/openclaw/pull/73883) | CadanHu | Session archive recovery (`includeArchived` for `chat.history`) | **OPEN** (active, targets #45003 roadmap) |
| [#73822](https://github.com/openclaw/openclaw/pull/73822) | nickytonline | SecretRef for phone numbers across messaging channels (PII protection) | **OPEN** (XL-sized, multi-channel) |
| [#73871](https://github.com/openclaw/openclaw/pull/73871) | pash-openai | Codex Computer Use onboarding setup | **OPEN** |
| [#73877](https://github.com/openclaw/openclaw/pull/73877) | arcanis2k3 | **Beta blocker**: Workspace plugin HTTP 404 fix | **OPEN** (critical for webhooks) |
| [#73884](https://github.com/openclaw/openclaw/pull/73884) | chareice | Telegram polling stall false restart prevention | **OPEN** |

**Feature Advancement Areas:**
- **Voice/realtime**: Major infrastructure landed in release
- **Security/PII**: SecretRef abstraction expanding across channels
- **Session management**: Archive recovery, context retention improvements
- **Reliability**: Circuit breakers, proxy resilience, error handling refinements

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| # | Issue | Comments | 👍 | Core Need |
|---|-------|----------|-----|-----------|
| [#14593](https://github.com/openclaw/openclaw/issues/14593) | Skill install fails in Docker: `brew not installed` on Linux | 27 | 17 | **Cross-platform packaging** — Homebrew assumption breaks Linux containers; users need portable skill installation |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | Centralized filename encoding utility | 17 | 0 | **Internationalization architecture** — Feishu/Asian market encoding needs systemic solution, not one-off fixes |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | Bootstrap files in `agentDir` silently ignored | 13 | 4 | **Agent isolation vs. workspace confusion** — Per-agent config discovery broken, breaks multi-agent workflows |
| [#41304](https://github.com/openclaw/openclaw/issues/41304) | Agent hallucinates success on write/action tools | 11 | 0 | **Tool execution trust** — Critical reliability gap; users cannot verify actual vs. claimed action completion |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | Allow private network access (opt-in) | 11 | 4 | **Enterprise/self-hosted flexibility** — Current blanket blocking prevents legitimate internal integrations |
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | Agent replies to previous message (session context confusion) | 11 | 1 | **Session state correctness** — Core conversation integrity bug |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked secrets: prevent agent from accessing raw API keys | 11 | 4 | **Security architecture** — Prompt injection credential exfiltration risk |

**Underlying Pattern**: Community is **maturing from "does it work" to "can I trust it"** — focus shifting toward security, reliability, and enterprise-grade operational concerns.

---

## 5. Bugs & Stability

### Critical/Blocker

| Issue | Severity | Description | Fix PR? |
|-------|----------|-------------|---------|
| [#73501](https://github.com/openclaw/openclaw/issues/73501) | **BLOCKER** | v4.22→4.26 **significant performance regression** — reactions, replies dramatically slower | None identified |
| [#72338](https://github.com/openclaw/openclaw/issues/72338) | **Critical** | Gateway CPU spin → Telegram stalls, status probe timeouts | None identified |
| [#61701](https://github.com/openclaw/openclaw/issues/61701) | **Critical** (Closed) | Gateway 100% CPU after v2026.4.5 upgrade — **resolved by rollback to 4.2** | **CLOSED** (workaround: rollback) |
| [#73877](https://github.com/openclaw/openclaw/pull/73877) | **Beta blocker** | Workspace plugin HTTP routes return 404 — blocks webhooks | **PR OPEN** |

### High Severity

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#48573](https://github.com/openclaw/openclaw/issues/48573) | Zombie agents persist after parent termination (embedded-run session leak) | None |
| [#49157](https://github.com/openclaw/openclaw/issues/49157) | Session write locks leak → >30min deadlocks | None |
| [#48534](https://github.com/openclaw/openclaw/issues/48534) | Plugin `before_agent_start` hook hang permanently blocks all runs | None |
| [#49055](https://github.com/openclaw/openclaw/issues/49055) | Silent delivery drop after `overloaded_error` recovery | None |
| [#52421](https://github.com/openclaw/openclaw/issues/52421) | Unexpected `tool_use_id` in `tool_result` blocks disrupts sessions | None |

### Regressions (Multiple)

| Issue | Regression From | Description |
|-------|---------------|-------------|
| [#41494](https://github.com/openclaw/openclaw/issues/41494) | v2026.3.8 | Gemini reasoning leaks into chat (re-emerged) |
| [#51871](https://github.com/openclaw/openclaw/issues/51871) | 2026.3.13 | Cron jobs not displayed in Control UI dashboard |
| [#38439](https://github.com/openclaw/openclaw/issues/38439) | Earlier | Webchat avatar endpoint 404 |
| [#41619](https://github.com/openclaw/openclaw/issues/41619) | v2026.3.8 | Google Gemini CLI auth failure |
| [#48810](https://github.com/openclaw/openclaw/issues/48810) | Earlier | Compaction retry creates orphan fork in `parentId` chain |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Feature | Likelihood in Next Version | Rationale |
|-------|---------|---------------------------|-----------|
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked secrets system | **High** | Security-critical, 17 👍, aligns with enterprise push; foundational for trust |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | `tools.web.fetch.allowPrivateNetwork` | **High** | Simple boolean toggle, clear use case, low implementation risk |
| [#39979](https://github.com/openclaw/openclaw/issues/39979) | Path-scoped RWX permissions for exec/file tools | **Medium-High** | Replaces problematic binary allowlist; Unix DAC model is clean |
| [#33975](https://github.com/openclaw/openclaw/issues/33975) | Fallback approval mode + model attribution | **Medium** | Two-feature bundle; model attribution simpler than approval UI |
| [#49178](https://github.com/openclaw/openclaw/issues/49178) | Reusable gateway WebSocket client SDK | **Medium** | Code health; duplicative implementations in CLI + UI |
| [#49273](https://github.com/openclaw/openclaw/issues/49273) | Default `nativeSkills: "none"` vs `"auto"` | **Medium** | Platform limit pain (Telegram 100-command cap); breaking change concern |
| [#48874](https://github.com/openclaw/openclaw/issues/48874) | Multi-Session Architecture (RFC) | **Low-Medium** | Architectural; significant design review needed |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) | Safe/unsafe ClawdBot (Rust rewrite) | **Low** | Ideological; massive effort, no maintainer signal |

**Emerging Theme**: **Operational control** — users want granular permissions, audit trails, and predictable resource boundaries.

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Performance degradation** | [#73501](https://github.com/openclaw/openclaw/issues/73501) "significantly slower", [#61278](https://github.com/openclaw/openclaw/issues/61278) 4-min gateway startup | Critical |
| **Silent failures / hallucinated success** | [#41304](https://github.com/openclaw/openclaw/issues/41304) "hallucinates success", [#49876](https://github.com/openclaw/openclaw/issues/49876) cron delivers fabricated output | Critical (trust erosion) |
| **Session state corruption** | [#32296](https://github.com/openclaw/openclaw/issues/32296) wrong message reply, [#48573](https://github.com/openclaw/openclaw/issues/48573) zombie agents, [#48810](https://github.com/openclaw/openclaw/issues/48810) orphan forks | High |
| **Docker/container friction** | [#14593](https://github.com/openclaw/openclaw/issues/14593) brew in Linux container, hardcoded paths [#51429](https://github.com/openclaw/openclaw/issues/51429) | High |
| **Hardcoded developer artifacts** | [#51429](https://github.com/openclaw/openclaw/issues/51429) `/Users/wangtao` path shipped in release | Embarrassing/operational risk |

### Positive Signals

| Theme | Evidence |
|-------|----------|
| **Voice/realtime excitement** | v2026.4.26 release, @VACInc contribution |
| **International expansion** | Vietnamese i18n [#49028](https://github.com/openclaw/openclaw/pull/49028), Feishu improvements, Zalo channel support |
| **Enterprise readiness interest** | SecretRef [#73822](https://github.com/openclaw/openclaw/pull/73822), private network [#39604](https://github.com/openclaw/openclaw/issues/39604), masked secrets [#10659](https://github.com/openclaw/openclaw/issues/10659) |

### Satisfaction Gap

Users **love the vision** (multi-agent, multi-channel, extensible) but **struggle with production reliability**. The project is at an inflection point: feature velocity remains high, but **operational maturity** is becoming the bottleneck to broader adoption.

---

## 8. Backlog Watch

### Long-Unanswered Critical Items Needing Maintainer Attention

| Issue | Age | Why It Matters | Action Needed |
|-------|-----|--------------|---------------|
| [#14593](https://github.com/openclaw/openclaw/issues/14593) | ~2.5 months | **Most-commented open issue** (27); Docker is primary deployment path; brew assumption is architectural | Decision: replace brew with portable package manager or document Linux exclusion |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | ~2 months | Breaks per-agent isolation promise; `agentDir` config is documented but non-functional | Verify if fix conflicts with workspace loading order; assign owner |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) | ~3 months | Rust rewrite proposal; 11 comments but no maintainer response | Close or redirect to discussion; set expectations |
| [#2597](https://github.com/openclaw/openclaw/issues/2597) | ~3 months | Context window visibility; simple telemetry addition prevents data loss | Low effort, high user value; good first issue? |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | ~1.5 months | Multi-agent orchestration — **core value proposition** — is "unstable" | Requires design review; may need milestone assignment |
| [#51857](https://github.com/openclaw/openclaw/issues/51857) | ~1.5 months | "Blind Spot Problem" — systematic media/vision failures with silent data loss | Meta-issue; needs owner to decompose into actionable bugs |

### PRs Stalled Without Review

| PR | Size | Blocker |
|----|------|---------|
| [#73822](https://github.com/openclaw/openclaw/pull/73822) | XL | Large surface area (6 channels); needs security review |
| [#49841](https://github.com/openclaw/openclaw/pull/49841) | L | Nacos integration; infrastructure change needs ops validation |
| [#48834](https://github.com/openclaw/openclaw/pull/48834) | L | Feishu `/focus` + ACP delivery; complex channel logic |

---

## Health Assessment

| Dimension | Score | Notes |
|-----------|-------|-------|
| **Activity** | ⭐⭐⭐⭐⭐ | Exceptional contribution volume |
| **Responsiveness** | ⭐⭐⭐☆☆ | ~97% open rate suggests maintainer scaling challenge |
| **Stability** | ⭐⭐⭐☆☆ | Blocker regression, multiple CPU spin issues, silent failures |
| **Security Posture** | ⭐⭐⭐⭐☆ | Proactive (masked secrets, SecretRef), but gaps remain |
| **Enterprise Readiness** | ⭐⭐⭐☆☆ | PII handling improving; operational reliability lagging |

**Recommendation**: Consider **stability sprint** or **LTS branch** to address blocker regressions before next feature release. The v4.22→4.26 performance regression and gateway CPU issues risk user churn.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent Ecosystem
## 2026-04-29 Community Digest Analysis

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing **intense growth with divergent maturation paths**. A clear tier structure has emerged: established projects (OpenClaw, Hermes Agent, IronClaw) battle scaling challenges while newer entrants (NanoClaw, Moltis, ZeroClaw) prioritize architectural cleanliness and production readiness. **Voice capabilities, multi-agent orchestration, and enterprise security** have become universal investment areas, while **session state integrity and deployment friction** represent the sector's most critical collective failure mode. The ecosystem is simultaneously expanding platform coverage (WeChat, Feishu, DingTalk, QQ, Matrix) and consolidating around protocol standards like ACP.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Merge Rate | Health Assessment |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | v2026.4.26 shipped | 6.8% (34/500) | ⭐⭐⭐⭐☆ High activity, maintainer bottleneck, stability debt |
| **NanoBot** | 13 | 36 | None | 44% (16/36) | ⭐⭐⭐⭐☆ Strong velocity, Windows fragility, memory regressions |
| **Hermes Agent** | 50 | 50 | None | 20% (10/50) | ⭐⭐⭐☆☆ Security backlog critical, gateway reliability gaps |
| **PicoClaw** | 17 | 16 | None | 38% (6/16) | ⭐⭐⭐☆☆ Edge/hardware focus, retry architecture gaps |
| **NanoClaw** | 3 | 24 | None | 46% (11/24) | ⭐⭐⭐⭐☆ v2 stabilization, multi-provider momentum |
| **NullClaw** | 1 | 3 | None | 0% (0/3) | ⭐⭐☆☆☆ Maintenance mode, Zig migration regressions |
| **IronClaw** | 30 | 46 | None | 35% (16/46) | ⭐⭐⭐☆☆ Reborn architecture transition, canary failures |
| **LobsterAI** | 3 | 47 | None | 49% (23/47) | ⭐⭐⭐⭐☆ Feature velocity high, security debt accumulating |
| **Moltis** | 5 | 18 | 20260428.03 | 83% (15/18) | ⭐⭐⭐⭐⭐ Best-in-class throughput, enterprise positioning |
| **CoPaw/QwenPaw** | 43 | 31 | v1.1.5-beta.1 | 65% (20/31) | ⭐⭐⭐⭐☆ Session instability persistent despite fixes |
| **ZeptoClaw** | 0 | 15 | None | 0% (0/15) | ⭐☆☆☆☆ Stalled—Dependabot-only activity |
| **ZeroClaw** | 20 | 44 | None | 2% (1/44) | ⭐⭐⭐☆☆ Severe review bottleneck, pre-release stabilization |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw Strength | Peer Comparison |
|:---|:---|:---|
| **Community scale** | 500 issues/PRs daily = 10x nearest competitor | Hermes (50), IronClaw (76), Moltis (23) |
| **Release velocity** | v2026.4.26 shipped with realtime voice | Most peers frozen (ZeroClaw, IronClaw, NanoClaw) |
| **Feature breadth** | Multi-channel, voice, CLI routing, SecretRef PII | Moltis approaching parity; NanoClaw v2 catching up |
| **Internationalization** | Vietnamese i18n, Feishu/Zalo channels | LobsterAI strong on Chinese IM; NanoBot expanding QQ |

### Technical Approach Differences
- **OpenClaw**: Monolithic TypeScript/Node.js with plugin architecture; rapid feature iteration accumulating technical debt
- **Moltis**: Rust core with Landlock sandboxing; security-first, deterministic voice personas
- **IronClaw**: "Reborn" microkernel transition; configuration-as-code substrate
- **NanoClaw**: v2 "agent groups" abstraction; container-centric lifecycle management
- **ZeroClaw**: Microkernel RFC accepted for v1.0; governance-heavy decision process

### Community Size Comparison
OpenClaw operates at **ecosystem-defining scale**—its daily activity exceeds most peers' weekly or monthly volume. However, this creates a **maintainer bandwidth crisis** (97% open issue rate) that smaller projects avoid. Moltis achieves superior merge rates (83% vs. 6.8%) with focused contributor discipline. NanoClaw and ZeroClaw demonstrate that architectural clarity attracts contributors, but review throughput remains the scaling bottleneck.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Voice/Realtime** | OpenClaw, Moltis, NanoClaw, CoPaw | OpenClaw: browser transport + Gateway relay; Moltis: deterministic TTS personas; NanoClaw: circuit breaker for gateway limits |
| **Multi-Agent Orchestration** | OpenClaw, NanoClaw, ZeroClaw, CoPaw | OpenClaw: per-agent config discovery broken; NanoClaw: agent-to-agent relay + unwired provisioning; ZeroClaw: RFC governance for UX flow |
| **Enterprise Security** | OpenClaw, Hermes, Moltis, ZeroClaw, LobsterAI | OpenClaw: SecretRef + masked secrets; Hermes: 5 unaddressed tool bypasses; Moltis: Landlock FS isolation; ZeroClaw: HMAC receipts; LobsterAI: MCP command injection backlog |
| **Session State Integrity** | OpenClaw, Hermes, NanoBot, PicoClaw, NanoClaw, CoPaw | Universal crisis: zombie agents, history loss, context corruption, pause/stop failures |
| **Provider Diversification** | NanoBot, NanoClaw, LobsterAI, CoPaw, PicoClaw | Escape from Claude/OpenAI lock-in: OpenCode, Codex, Ollama, Kimi, DeepSeek, Qwen, local inference |
| **Observability** | IronClaw, ZeroClaw, NanoBot, OpenClaw | IronClaw: OTel spans; ZeroClaw: cost tracking + memory ops; NanoBot: profiler API; OpenClaw: context window visibility |
| **Configuration Ergonomics** | IronClaw, ZeroClaw, OpenClaw | IronClaw: runtime presets; ZeroClaw: dynamic config maps; OpenClaw: config schema drift |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Ecosystem breadth + release velocity | Power users, multi-channel operators | Plugin-extensible monolith |
| **Moltis** | Production security + import tooling | Enterprise, compliance-conscious | Rust + Landlock sandbox |
| **IronClaw** | "Reborn" microkernel + crypto-native | Developers, Web3-adjacent | Modular substrate with NEAR integration |
| **NanoClaw** | Agent-group abstraction + backend diversity | SaaS operators, multi-tenant | Container-centric v2 runtime |
| **ZeroClaw** | Governance-heavy RFC process + ACP protocol | Protocol-oriented integrators | Microkernel transition (v0.7→v1.0) |
| **Hermes Agent** | Holographic memory + cognitive architecture | AI researchers, long-context users | Dual-path retrieval (FTS + HRR) |
| **LobsterAI** | Chinese IM ecosystem integration | China-market enterprise | Youdao ecosystem integration |
| **CoPaw/QwenPaw** | Qwen-native + ACP interoperability | Chinese developers, agent teams | AgentScope protocol alignment |
| **NanoBot** | Lightweight + rapid provider expansion | Self-hosters, local inference | Python, minimal footprint |
| **PicoClaw** | Edge/hardware (MQTT, serial, Pi Zero) | IoT, embedded deployments | Cross-platform hardware abstraction |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Velocity, Some Instability)
| Project | Evidence | Risk |
|:---|:---|:---|
| **OpenClaw** | 1000 items/day, voice release | Maintainer burnout, regression debt |
| **LobsterAI** | 47 PRs, same-day bug fixes | Security review starvation |
| **IronClaw** | 76 items, Reborn migration | Canary failures, "almost works" syndrome |

### Tier 2: Controlled Growth (Balanced Velocity/Quality)
| Project | Evidence | Trajectory |
|:---|:---|:---|
| **Moltis** | 83% merge rate, daily releases | Becoming enterprise default |
| **CoPaw/QwenPaw** | Beta release, 65% merge rate | Stabilizing for v1.2 |
| **NanoBot** | Provider expansion, Windows fixes | Gaining self-hosted market |

### Tier 3: Pre-Release Stabilization
| Project | Evidence | Blocker |
|:---|:---|:---|
| **NanoClaw** | v2 agent groups, 13 open PRs | Discord routing regression, backup infrastructure |
| **ZeroClaw** | v0.7.4 milestone, 1% merge rate | Review bottleneck, encryption data loss |
| **Hermes Agent** | Security cluster unaddressed | 17-day-old P1 issues, no fix PRs |

### Tier 4: Maintenance/At Risk
| Project | Evidence | Concern |
|:---|:---|:---|
| **PicoClaw** | 67-day retry bug, duplicate OpenVINO PRs | Contributor coordination failure |
| **NullClaw** | Zig migration critical regressions | Release qualification gaps |
| **ZeptoClaw** | Dependabot-only, zero human activity | Project hibernation or abandonment |

---

## 7. Trend Signals

| Trend | Evidence | Value for AI Agent Developers |
|:---|:---|:---|
| **"Trust over features" shift** | OpenClaw: hallucinated success (#41304), masked secrets (#10659); Hermes: tool bypass cluster; universal session integrity crises | Prioritize verifiable execution, audit trails, and deterministic output validation over capability expansion |
| **Container-native deployment** | NanoClaw: root+readonly DB blocker; ZeroClaw: Docker build complexity; OpenClaw: brew-in-Docker | Assume Kubernetes/Docker as primary target; design for non-root, readonly filesystems, and graceful degradation |
| **Protocol standardization** | ACP in CoPaw, NanoClaw, ZeroClaw; OpenClaw's implicit channel contracts | Invest in protocol interoperability; avoid vendor-specific integrations |
| **Local/self-hosted resurgence** | Ollama, vLLM, LM Studio support across NanoBot, NanoClaw, CoPaw; `extra_body` configs | Design provider abstraction layers with local inference as first-class, not afterthought |
| **Memory as moat** | Hermes: CerebroCortex, holographic memory; CoPaw: dream agent failures; Moltis: auto-indexing | Long-context and persistent memory are becoming differentiators; invest in retrieval architecture early |
| **Governance formalization** | ZeroClaw: RFC votes; IronClaw: Reborn EPIC coordination | Scale requires explicit decision processes; ad-hoc maintainer judgment breaks at ~50 active contributors |
| **Windows as enterprise requirement** | NanoBot: 3/6 critical bugs Windows-specific; PicoClaw: serial port cross-platform | Cross-platform CI (including Windows runners) is non-negotiable for B2B adoption |
| **Per-agent/tenant isolation** | NanoClaw: per-group config; OpenClaw: agentDir confusion; Moltis: import tooling | Multi-tenancy and agent lifecycle management are emerging as core primitives, not add-ons |

---

*Report generated from 12 project digests covering 1,247 GitHub items (2026-04-28/29). All source links available in individual project digests.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-29

## 1. Today's Overview

NanoBot shows **high development velocity** with 36 PRs and 13 issues updated in the last 24 hours, indicating an active, rapidly evolving codebase. The project is in a **heavy integration phase**: 16 PRs were merged/closed while 20 remain open, suggesting aggressive feature development with some backlog accumulation. Notably, **zero new releases** were cut despite significant activity, which may indicate maintainers are batching changes for a larger release or stabilization period. The community is actively expanding platform support (QQ, ZenMux, Olostep) while addressing Windows-specific stability issues and memory regressions. Overall project health appears **strong but strained** — high throughput with emerging technical debt in cross-platform compatibility.

---

## 2. Releases

**No new releases** were published in the last 24 hours. The latest activity remains at v0.1.5.post2, which [introduced a memory regression](https://github.com/HKUDS/nanobot/issues/3410) (~200MB → ~600MB baseline usage) tied to the "dream" feature.

---

## 3. Project Progress

### Merged/Closed PRs (16 total, key highlights)

| PR | Author | Description | Impact |
|:---|:---|:---|:---|
| [#3505](https://github.com/HKUDS/nanobot/pull/3505) | chengyongru | Backport Olostep web search provider from nightly to main | New search backend available |
| [#3405](https://github.com/HKUDS/nanobot/pull/3405) | umerkay | Original Olostep provider implementation (nightly) | Foundation for #3505 |
| [#3502](https://github.com/HKUDS/nanobot/pull/3502) | BarclayII | Fix Feishu emoji timing — `done_emoji` fired on intermediate stream ends | UX polish for enterprise users |
| [#3500](https://github.com/HKUDS/nanobot/pull/3500) | RongLei-intel | Module-level profiler + span tracing (superseded by #3501) | Performance observability groundwork |
| [#3491](https://github.com/HKUDS/nanobot/pull/3491) | hussein1362 | `extra_body` config for OpenAI-compatible endpoints | Unlocks local inference servers (vLLM, LM Studio, Ollama) |
| [#2740](https://github.com/HKUDS/nanobot/pull/2740) | masterlyj | `--config` option for `channels login` and `status` CLI commands | Multi-instance deployment support |

**Feature advancement themes:**
- **Provider ecosystem expansion**: Olostep search, ZenMux gateway, OpenAI `extra_body` flexibility
- **Enterprise/self-hosted readiness**: Per-channel configs, custom config paths, local Whisper transcription
- **Observability**: Profiler API and span tracing entering codebase

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | Core Tension |
|:---|:---|:---|
| [#217](https://github.com/HKUDS/nanobot/issues/217) — Kimi support | 6 | **Contributor onboarding friction** — interested contributor (tmdgusya) seeking guidance; closed without clear resolution path |
| [#490](https://github.com/HKUDS/nanobot/issues/490) — Memory system optimization | 5 | **Architectural roadmap opacity** — user asking about future plans for memory subsystem; no maintainer response documented |
| [#3473](https://github.com/HKUDS/nanobot/issues/3473) — WebSocket remote access | 3 | **Deployment documentation gap** — common 0.0.0.0 binding issue for remote servers |

### Underlying Needs Analysis

- **#217**: Community wants to contribute but lacks clear `CONTRIBUTING.md` or provider integration guide. *Risk*: losing motivated contributors to better-documented projects.
- **#490**: Memory management is a perceived weakness vs. competitors. Users want visibility into roadmap priorities.
- **#3473**: NanoBot's default localhost binding assumes local development; production deployment patterns are underdocumented.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Details |
|:---|:---|:---|:---|:---|
| **🔴 Critical** | [#3506](https://github.com/HKUDS/nanobot/issues/3506) — Matrix fails on Windows (WinError 123) | **OPEN** | [#3510](https://github.com/HKUDS/nanobot/pull/3510) | Colon in `user_id` creates invalid filesystem paths; **complete outbound message failure** on Windows |
| **🔴 Critical** | [#3494](https://github.com/HKUDS/nanobot/issues/3494) — `history.jsonl` loaded into context (162k/65k tokens) | **CLOSED** | [#3508](https://github.com/HKUDS/nanobot/pull/3508) | Context budget explosion; atomic write fix in progress |
| **🟡 High** | [#3410](https://github.com/HKUDS/nanobot/issues/3410) — 3x RAM regression in v0.1.5.post2 | **CLOSED** | Unknown | "Dream" feature suspected; no linked fix PR visible |
| **🟡 High** | [#3328](https://github.com/HKUDS/nanobot/issues/3328) — DeepSeek "failed to deserialize" | **CLOSED** | Unknown | Post-update breakage; config migration issues |
| **🟡 High** | [#3324](https://github.com/HKUDS/nanobot/issues/3324) — WinError 193 (chrome-devtools-mcp) | **CLOSED** | Unknown | Windows MCP server integration broken |
| **🟢 Medium** | [#3488](https://github.com/HKUDS/nanobot/issues/3488) — Telegram MIME type incorrect | **CLOSED** | Unknown | `application.octet-stream` instead of proper HTML type |

**Pattern**: **Windows compatibility is a systemic weakness** — 3 of 6 significant bugs are Windows-specific path/execution issues. The Matrix fix (#3510) is urgent and has an active PR.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Session-scoped history** | [#3481](https://github.com/HKUDS/nanobot/pull/3481) | **High** | Addresses #3494's critical context bug; clean architectural fix with clear user value |
| **Per-provider generation config** | [#3507](https://github.com/HKUDS/nanobot/pull/3507) | **High** | Reduces config friction; aligns with multi-provider expansion trend |
| **Local Whisper transcription** | [#3513](https://github.com/HKUDS/nanobot/pull/3513) | **Medium-High** | Privacy/compliance demand; completes audio capability gap |
| **Napcat (QQ) channel** | [#3509](https://github.com/HKUDS/nanobot/pull/3509) | **Medium** | Chinese market expansion; competes with existing QQ platform bot |
| **AgentHiFive integration** | [#3144](https://github.com/HKUDS/nanobot/pull/3144) | **Medium** | Large PR (14 days old); complex MCP-backed architecture |
| **SwarmScore trust rating** | [#3512](https://github.com/HKUDS/nanobot/issues/3512) | **Low** | External protocol proposal; no prior maintainer engagement |
| **Multi-modal (images/voice/video)** | [#223](https://github.com/HKUDS/nanobot/issues/223) | **Unclear** | Marked stale; roadmap item but no visible progress |

**Predicted next release focus**: Session isolation + provider config ergonomics + Windows stability hardening.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Memory/context bloat** | #3410 (RAM 3x), #3494 (162k context) | 🔴 Critical for long-running instances |
| **Windows as second-class citizen** | #3506, #3324, path handling throughout | 🔴 Barrier to enterprise adoption |
| **Config migration fragility** | #3328 (DeepSeek break on update), #3473 (bind address) | 🟡 High upgrade anxiety |
| **User identity in group channels** | [#3511](https://github.com/HKUDS/nanobot/issues/3511) — `sender_id` not reaching LLM context | 🟡 Breaks multi-user household/team use cases |

### Positive Signals

- **Active contributor interest**: #217 (Kimi), #3513 (Whisper) show external developers willing to extend
- **Enterprise feature uptake**: Feishu fixes (#3502), per-channel controls (#3487), custom config paths (#2740) indicate real organizational deployments
- **Local/self-hosted emphasis**: `extra_body` (#3491), local Whisper (#3513), ZenMux (#3503) align with privacy-conscious users

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#3144](https://github.com/HKUDS/nanobot/pull/3144) AgentHiFive integration | 14 days open | **High** — large architectural PR with no comments | Maintainer review; approve/reject with feedback |
| [#3331](https://github.com/HKUDS/nanobot/pull/3331) WeCom WebSocket fixes | 8 days open | **Medium** — enterprise channel broken | Merge or request changes; blocks WeCom users |
| [#3512](https://github.com/HKUDS/nanobot/issues/3512) SwarmScore proposal | 1 day open | **Low** — spam-adjacent? | Triage: legitimate protocol or promotional? |
| [#490](https://github.com/HKUDS/nanobot/issues/490) Memory optimization roadmap | 77 days since creation, updated yesterday | **Medium** — roadmap transparency gap | Maintainer response on memory architecture plans |
| [#223](https://github.com/HKUDS/nanobot/issues/223) Multi-modal support | 82 days, marked stale | **Medium** — top roadmap item with zero visible progress | Clarify status or remove from roadmap to maintain credibility |

**Critical attention**: [#3144](https://github.com/HKUDS/nanobot/pull/3144) and [#3331](https://github.com/HKUDS/nanobot/pull/3331) are mature PRs at risk of bitrot without maintainer engagement. The stale multi-modal issue (#223) damages roadmap trust if left unaddressed.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-29

## 1. Today's Overview

Hermes Agent shows **extremely high community activity** with 50 issues and 50 PRs updated in the last 24 hours, indicating a mature, actively maintained project with significant user adoption. The 92% open issue rate (46/50) and 80% open PR rate (40/50) suggests either a recent surge in reports or potential backlog pressure. Notably, **zero new releases** were cut today despite substantial merge activity (10 PRs closed), which may indicate maintainers are accumulating changes for a larger release or facing release pipeline constraints. The issue mix reveals critical stability concerns alongside active feature development across gateway platforms, agent core, and security surfaces.

---

## 2. Releases

**No new releases** — None published as of 2026-04-29.

---

## 3. Project Progress

### Merged/Closed PRs Today (10 total, highlights)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#16396](https://github.com/NousResearch/hermes-agent/pull/16396) | Referralconsequently | **Fix launchd gateway status detection** — uses `launchctl print` as source of truth, sanitizes output | macOS gateway reliability |
| [#16414](https://github.com/NousResearch/hermes-agent/pull/16414) | Vottam | **[verified] Fix `hermes update` branch restore flow** — eliminates double-restore bug, aligns with `npm ci` | CLI integrity |
| [#17179](https://github.com/NousResearch/hermes-agent/pull/17179) | ZippyZebra75 | **Telegram `sendMessageDraft` transport for DM streaming** (superseded by #3412) | Platform UX |
| [#17176](https://github.com/NousResearch/hermes-agent/pull/17176) | ZippyZebra75 | **Map `telegram.reply_to_mode` from config.yaml** (superseded by #17183) | Config correctness |

**Active Development Tracks:**
- **Telegram streaming modernization**: Parallel PRs #3412 and #17179/#17183 show competing approaches to native draft-based streaming vs. legacy edit-based methods
- **TUI polish**: [#17175](https://github.com/NousResearch/hermes-agent/pull/17175) adds LaTeX→Unicode rendering for math in terminal UI
- **Memory system evolution**: [#17181](https://github.com/NousResearch/hermes-agent/pull/17181) introduces parallel dual-path retrieval (FTS + HRR) for holographic memory
- **Gateway stability**: [#17180](https://github.com/NousResearch/hermes-agent/pull/17180) fixes `/restart` deadlock; [#17184](https://github.com/NousResearch/hermes-agent/pull/17184) resolves Slack synthetic thread status pollution

---

## 4. Community Hot Topics

### Most Discussed Issues

| Issue | Comments | Core Tension |
|:---|:---|:---|
| [#7976](https://github.com/NousResearch/hermes-agent/issues/7976) — `gateway install --system` uses wrong Python interpreter | **4** | **Deployment correctness**: Systemd service generation broken for uv-managed environments; blocks production deployments |
| [#16923](https://github.com/NousResearch/hermes-agent/issues/16923) — Claude CLI backend provider (CLOSED) | **2** | **Legal/ToS compliance**: Users want Anthropic access without ban risk; closed suggests maintainer resolution or redirect |
| [#7914](https://github.com/NousResearch/hermes-agent/issues/7914) — Matrix gateway receive failure | **2** | **Platform parity**: Send works, receive broken — critical for bidirectional bot operation |
| [#7896](https://github.com/NousResearch/hermes-agent/issues/7896) — CerebroCortex memory provider | **2** | **Cognitive architecture**: Community pushing beyond simple MEMORY.md to brain-analogous systems (associative networks, decay, dream consolidation) |
| [#17169](https://github.com/NousResearch/hermes-agent/issues/17169) — Anthropic OAuth rate limiting on newer models | **2** | **Provider relationship**: Suggests Anthropic actively enforcing against Hermes usage patterns |

### Underlying Needs Analysis

- **Gateway reliability** dominates: Matrix, Discord, Telegram, Slack all have active break/fix cycles
- **Memory as competitive moat**: Users dissatisfied with 1,300 token limit; want local-first semantic memory
- **Provider diversification pressure**: Single-provider dependencies (Anthropic, OpenAI) creating operational risk

---

## 5. Bugs & Stability

### P1 (Critical) — Immediate Attention Required

| Issue | Component | Description | Fix PR? |
|:---|:---|:---|:---|
| [#7976](https://github.com/NousResearch/hermes-agent/issues/7976) | CLI/Gateway | `ExecStart` points to base Python, not venv → service crash on boot | **No** |
| [#7914](https://github.com/NousResearch/hermes-agent/issues/7914) | Gateway/Matrix | Receive path dead; mautrix client initialization bug | **No** |
| [#7968](https://github.com/NousResearch/hermes-agent/issues/7968) | Agent Core | `_last_content_with_tools` fallback terminates agent loops silently | **No** |
| [#8030](https://github.com/NousResearch/hermes-agent/issues/8030) | Agent/State | Schema migrations non-atomic → corruption under concurrent init | **No** |
| [#8032](https://github.com/NousResearch/hermes-agent/issues/8032) | Tool/Terminal | `force=True` exposed to LLM schema → bypasses all security checks | **No** |
| [#8034](https://github.com/NousResearch/hermes-agent/issues/8034) | Tool/Browser | Local Playwright skips SSRF validation entirely | **No** |
| [#8035](https://github.com/NousResearch/hermes-agent/issues/8035) | Tool/File | `read_file` allows exfiltration of `auth.json`, MCP tokens | **No** |
| [#17139](https://github.com/NousResearch/hermes-agent/issues/17139) | Cron/Telegram | `deliver=['telegram']` fails: "no delivery target resolved" | **No** |
| [#17063](https://github.com/NousResearch/hermes-agent/issues/17063) | Gateway/Telegram | Reconnect watcher gives up permanently after 20 failures | **No** |

### P2 (High) — Significant Impact

| Issue | Component | Description | Fix PR? |
|:---|:---|:---|:---|
| [#8029](https://github.com/NousResearch/hermes-agent/issues/8029) | Gateway | Non-atomic transcript rewrite → data loss on `/retry`, `/undo`, `/compress` | **No** |
| [#8038](https://github.com/NousResearch/hermes-agent/issues/8038) | Agent | `_flush_messages_to_session_db` swallows all persistence errors | **No** |
| [#8039](https://github.com/NousResearch/hermes-agent/issues/8039) | Agent | Thread-unsafe caches in `model_metadata.py` → data races | **No** |
| [#17171](https://github.com/NousResearch/hermes-agent/issues/17171) | Gateway/OpenAI | `gpt-5-4` vs `gpt-5.4` naming → Codex 404 | **No** |
| [#17180](https://github.com/NousResearch/hermes-agent/pull/17180) | Gateway | `/restart` deadlock (60s hang) | **YES — PR open** |

### Security Cluster Alert

**5 security issues** filed by `tomqiaozc` on 2026-04-12 remain unaddressed, covering: symlink bypasses, TOCTOU DNS rebinding, terminal force parameter, browser SSRF gaps, and auth token exfiltration. This represents a **systematic tool-hardening gap** requiring coordinated response.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Feature | Maturity Signal | Predicted Priority |
|:---|:---|:---|:---|
| [#7896](https://github.com/NousResearch/hermes-agent/issues/7896) | CerebroCortex memory (associative, decay, dreams) | Detailed spec, brain-analogous design | **High** — memory is competitive differentiator |
| [#7876](https://github.com/NousResearch/hermes-agent/issues/7876) | Skip context files for script-only cron | Clear cost optimization (10-20k tokens/run) | **Medium** — straightforward config addition |
| [#10309](https://github.com/NousResearch/hermes-agent/issues/10309) | Session-scoped repo pinning | Coding workflow fragility acknowledged | **Medium** — needs architecture change |
| [#12688](https://github.com/NousResearch/hermes-agent/issues/12688) | Configurable command prefix (Matrix/Mattermost `/` conflict) | Platform ecosystem constraint | **High** — blocks enterprise adoption |
| [#17091](https://github.com/NousResearch/hermes-agent/issues/17091) | Telegram i18n command descriptions | Internationalization maturity marker | **Low** — nice-to-have |
| [#7924](https://github.com/NousResearch/hermes-agent/issues/7924) | SkillClaw integration | External framework collaboration | **Low** — exploratory |

**Emerging Theme**: Memory systems are becoming the **primary innovation vector** — holographic memory PR #17181, CerebroCortex request, and Honcho alignment fixes (#17186) all point to v0.9+ focusing on persistent, semantic, multi-modal memory.

---

## 7. User Feedback Summary

### Pain Points

| Category | Specific Complaint | Frequency Signal |
|:---|:---|:---|
| **Configuration silent failures** | `context_window` ignored (#8015), `reply_to_mode` unmapped (#17139, #17176) | Recurring — config schema drift |
| **Gateway platform fragility** | Matrix receive broken, Discord sync timeouts, Telegram reconnect death, cron delivery failures | **Critical mass** — reliability perception risk |
| **Provider enforcement** | Anthropic OAuth rate limits (#17169), OpenAI naming quirks (#17171) | External dependency volatility |
| **Security model trust** | Multiple tool bypasses exposed — users auditing before production deployment | Growing sophistication |
| **Deployment operations** | Systemd venv resolution (#7976), Docker DNS detection (#7905) | Production-readiness gaps |

### Satisfaction Indicators

- Active PR contributions for niche features (LaTeX rendering, Telegram drafts) suggest engaged power users
- Architecture quality audit tool (`hermescheck`, #17154) indicates ecosystem maturation
- Feature requests show sophisticated use (multi-provider fallback, memory decay models, i18n)

---

## 8. Backlog Watch

### Long-Duration Issues Needing Maintainer Triage

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#7976](https://github.com/NousResearch/hermes-agent/issues/7976) | 17 days | **Production deployment blocker** | Assign, verify uv integration path |
| [#7914](https://github.com/NousResearch/hermes-agent/issues/7914) | 17 days | Matrix platform effectively unusable | Reproduce, mautrix version audit |
| [#7896](https://github.com/NousResearch/hermes-agent/issues/7896) | 17 days | Memory architecture direction | Design review, community RFC |
| [#7876](https://github.com/NousResearch/hermes-agent/issues/7876) | 17 days | Token cost optimization | Trivial fix — config pass-through |
| [#7886](https://github.com/NousResearch/hermes-agent/issues/7886) | 17 days | Vision tool regression (Kimi) | Provider API change tracking |
| [#7905](https://github.com/NousResearch/hermes-agent/issues/7905) | 17 days | Container-native deployment | Expand `is_local_endpoint` heuristic |
| [#8015](https://github.com/NousResearch/hermes-agent/issues/8015) | 16 days | Config key alias standardization | One-line alias addition |

### PRs Stalled Without Review

| PR | Age | Blocker |
|:---|:---|:---|
| [#3412](https://github.com/NousResearch/hermes-agent/pull/3412) | 33 days | Telegram draft streaming — architecture decision needed vs. #17179/#17183 |
| [#7866](https://github.com/NousResearch/hermes-agent/pull/7866) | 18 days | Workspace API expansion — scope review |
| [#7873](https://github.com/NousResearch/hermes-agent/pull/7873) | 18 days | Kimi custom headers — provider policy alignment |

---

## Project Health Assessment

| Metric | Status | Trend |
|:---|:---|:---|
| Issue velocity | Very high (50/day) | ⚠️ Potential backlog accumulation |
| PR throughput | Moderate (10 merged/closed of 50) | ⚠️ Merge rate lagging submission rate |
| Security responsiveness | **At risk** — 5 P1-P2 security issues 17 days old | 🔴 Declining |
| Release cadence | Stalled (0 today, none noted) | 🔴 Concerning for production users |
| Community engagement | Strong — detailed reports, external audits | 🟢 Healthy |
| Platform coverage | Active development across 5+ gateways | 🟢 Diversifying |

**Recommendation**: Prioritize security backlog (#8030-#8035 cluster), cut a patch release for critical gateway fixes, and establish config schema validation to prevent silent configuration failures.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-29

## 1. Today's Overview

PicoClaw shows **high community activity** with 17 issues and 16 PRs updated in the last 24 hours, though the 13:4 open-to-closed issue ratio and 10:6 open-to-merged PR ratio indicates a **growing backlog**. No new release was published. The project is actively expanding its provider ecosystem (Intel OpenVINO, Exa search) and channel integrations (MQTT, Weixin, email), while stability issues persist around cron jobs, session management, and certificate handling. A notable trend is the **duplication of effort**—two separate PRs for Intel OpenVINO support (#2496 closed, #2703 open) and recurring session-related bugs suggest coordination challenges. The community is pushing hard toward production readiness with security hardening and multi-user features, but maintainer bandwidth appears strained.

---

## 2. Releases

**No new releases** (v0.2.7 remains current).

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Description | Impact |
|---|---|---|---|
| [#2689](https://github.com/sipeed/picoclaw/pull/2689) | afjcjsbx | **fix(cron): propagate sessionKey to prevent duplicate tool responses** | Fixes duplicate report bug (closes [#2687](https://github.com/sipeed/picoclaw/issues/2687)) |
| [#2697](https://github.com/sipeed/picoclaw/pull/2697) | lc6464 | **fix(serial_windows): remove unused import** | Minor cleanup |
| [#2653](https://github.com/sipeed/picoclaw/pull/2653) | hehaijunandhenry | **feat: add MQTT channel support** | New IoT channel integration |
| [#2673](https://github.com/sipeed/picoclaw/pull/2673) | SiYue-ZO | **Add cross-platform serial tool support** | Hardware tool expansion (Linux/macOS/Windows) |
| [#2680](https://github.com/sipeed/picoclaw/pull/2680) | lc6464 | **refactor(pico): unify message kind handling of tool_calls and thought** | Protocol modernization (intentional frontend breaking change) |
| [#2496](https://github.com/sipeed/picoclaw/pull/2496) | JohnLeFeng | ~~Add Intel OpenVINO Model Server support~~ (closed, superseded by #2703) | Duplicate effort |

**Key advances:** Cron reliability improved; IoT/edge capabilities expanded via MQTT and serial tools; internal protocol cleaned up for future maintainability.

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Comments | Analysis |
|---|---|---|
| [#629](https://github.com/sipeed/picoclaw/issues/629) **LLM call retry failure** | 11 | **Long-running reliability crisis** — OpenRouter HTTP 500s hang tasks without retry. Oldest active bug (Feb 22), suggests fundamental resilience gap. |
| [#2513](https://github.com/sipeed/picoclaw/issues/2513) **Gateway start abnormal** | 7 | Deployment instability on Debian with digntalk channel; binary-specific issue affecting production users. |
| [#2367](https://github.com/sipeed/picoclaw/issues/2367) **Chinese UI in English mode** | 5 | Localization debt in Android app; tagged stale but resurfaced. |
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) **Streaming output for Web Chat** | 5 | User expectation mismatch — modern chat UIs require streaming; marked "nice-to-have" but competitive necessity. |
| [#1587](https://github.com/sipeed/picoclaw/issues/1587) **Mattermost channel support** | 4 (closed) | Enterprise team demand; closed without merge suggests prioritization gap. |

**Underlying needs:** Production resilience (retry/gateway), enterprise channel coverage (Mattermost, email), and polished UX (streaming, localization).

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR? | Details |
|---|---|---|---|
| 🔴 **High** | [#629](https://github.com/sipeed/picoclaw/issues/629) LLM retry failure | ❌ No | Task hangs on provider errors; 2+ months old |
| 🔴 **High** | [#2513](https://github.com/sipeed/picoclaw/issues/2513) Gateway startup crash | ❌ No | Binary deployment blocker |
| 🟡 **Medium** | [#2687](https://github.com/sipeed/picoclaw/issues/2687) Cron duplicate reports | ✅ [#2689](https://github.com/sipeed/picoclaw/pull/2689) merged | Fixed in latest |
| 🟡 **Medium** | [#2699](https://github.com/sipeed/picoclaw/issues/2699) Reasoning leakage across Slack channels | ✅ Closed | Cross-channel session contamination |
| 🟡 **Medium** | [#2702](https://github.com/sipeed/picoclaw/issues/2702) Multi-user history lacks sender attribution | ❌ No | Privacy/UX issue in group channels |
| 🟡 **Medium** | [#2694](https://github.com/sipeed/picoclaw/issues/2694) Certificate verification failure (ADB) | ❌ No | Android x509 chain issue |
| 🟢 **Low** | [#2081](https://github.com/sipeed/picoclaw/issues/2081) Unicode escape in tool preview | ❌ No | Readability issue |
| 🟢 **Low** | [#2367](https://github.com/sipeed/picoclaw/issues/2367) Chinese UI remnant | ❌ No | i18n polish |

**Regression risk:** [#2689](https://github.com/sipeed/picoclaw/pull/2689) fix for cron duplicates may need verification across other session-dependent flows.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Release | Rationale |
|---|---|---|---|
| **Intel OpenVINO inference** | [#2703](https://github.com/sipeed/picoclaw/pull/2703) | **High** | Second attempt, clean implementation, hardware acceleration demand |
| **Streaming Web Chat** | [#1950](https://github.com/sipeed/picoclaw/issues/1950) | Medium | Competitive parity, but marked low priority |
| **Email channel** | [#2421](https://github.com/sipeed/picoclaw/issues/2421) | Medium | Enterprise accessibility use case |
| **Token consumption dashboard** | [#2217](https://github.com/sipeed/picoclaw/issues/2217) | Low | Operational feature, no PR yet |
| **Mission Control integration** | [#2698](https://github.com/sipeed/picoclaw/issues/2698) | Low | OpenClaw/PicoClaw divergence problem; architectural decision needed |
| **Multi-user/Agent Shield security** | [#2313](https://github.com/sipeed/picoclaw/pull/2313) | Uncertain | Large PR, stale, needs review bandwidth |

**Signal:** Provider diversification (OpenVINO, Exa [#2676](https://github.com/sipeed/picoclaw/issues/2676)) and channel expansion (MQTT, Weixin [#2606](https://github.com/sipeed/picoclaw/pull/2606)) are clear investment areas.

---

## 7. User Feedback Summary

### Pain Points
- **Reliability:** "Task hang without retry" ([#629](https://github.com/sipeed/picoclaw/issues/629)) — core automation promise broken
- **Deployment friction:** Gateway crashes ([#2513](https://github.com/sipeed/picoclaw/issues/2513)), Docker build broken ([#2700](https://github.com/sipeed/picoclaw/pull/2700) fixes)
- **Session integrity:** History loss ([#2310](https://github.com/sipeed/picoclaw/issues/2310)), cross-channel leakage ([#2699](https://github.com/sipeed/picoclaw/issues/2699)), missing sender attribution ([#2702](https://github.com/sipeed/picoclaw/issues/2702))
- **Mobile polish:** Android config/model issues ([#2368](https://github.com/sipeed/picoclaw/issues/2368)), certificate failures ([#2694](https://github.com/sipeed/picoclaw/issues/2694)), undocumented `.so` library ([#2695](https://github.com/sipeed/picoclaw/issues/2695))

### Positive Signals
- Active hardware/edge use cases (serial tools, MQTT, Pi Zero deployments)
- Security-conscious enterprise interest (Agent Shield, multi-user)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#629](https://github.com/sipeed/picoclaw/issues/629) LLM retry | 67 days open | **Critical reliability** | Design retry policy with backoff; assign owner |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) Agent Shield / Multi-user | 26 days, stale | Security/enterprise blocker | Maintainer review; possibly split into smaller PRs |
| [#2411](https://github.com/sipeed/picoclaw/pull/2411) SSE chunk parsing | 22 days, stale | Streaming correctness | Merge or close with explanation |
| [#2310](https://github.com/sipeed/picoclaw/issues/2310) History truncation | 26 days, stale | Data loss perception | Reproduce and scope fix |
| [#2217](https://github.com/sipeed/picoclaw/issues/2217) Token dashboard | 29 days, stale | Operational visibility | Community contribution welcome? |

**Maintainer attention most needed on:** Retry architecture ([#629](https://github.com/sipeed/picoclaw/issues/629)) and large PR triage ([#2313](https://github.com/sipeed/picoclaw/pull/2313)).

---

*Digest generated from GitHub activity 2026-04-28. All links: https://github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-29

## 1. Today's Overview

NanoClaw shows **high development velocity** with 24 PRs updated in the last 24 hours (13 open, 11 merged/closed) and 3 active issues, indicating an active pre-release stabilization period for v2. No new releases were published today. The project is experiencing a **channel expansion surge** (Discord, Telegram, WhatsApp, Matrix, Slack all receiving fixes) alongside **backend diversification** (OpenCode, Codex, Ollama providers). However, the high close rate (11 PRs) suggests maintainers are aggressively landing fixes, while the 13 open PRs indicate a substantial review queue that may create merge backlog risk.

---

## 2. Releases

**No new releases** published today. Latest releases section is empty.

---

## 3. Project Progress

### Merged/Closed PRs Today (11 items)

| PR | Author | Summary | Significance |
|---|---|---|---|
| [#1628](https://github.com/qwibitai/nanoclaw/pull/1628) | talmosko-code | OpenCode SDK as alternative agent backend | **Backend diversification milestone** — first alternative to Anthropic/Claude |
| [#1776](https://github.com/qwibitai/nanoclaw/pull/1776) | talmosko-code | OpenCode v2 AgentProvider with SSE, session resume, MCP | v2-native provider architecture; completes OpenCode integration |
| [#1864](https://github.com/qwibitai/nanoclaw/pull/1864) | talmosko-code | Pin OpenCode SDK/CLI to 1.4.17, overlay propagation | **Stability fix** — prevents breaking API changes from upstream |
| [#2083](https://github.com/qwibitai/nanoclaw/pull/2083) | barkain | Discord, Telegram, WhatsApp channels + Codex provider + agent-to-agent relay | **Major feature bundle** — 3 new channels, 1 new provider, inter-agent messaging |
| [#2080](https://github.com/qwibitai/nanoclaw/pull/2080) | Koshkoshinsk | Startup circuit breaker for crash loop protection | **Reliability** — protects Discord gateway limits, Cloudflare bans |
| [#2079](https://github.com/qwibitai/nanoclaw/pull/2079) | Koshkoshinsk | Startup circuit breaker (duplicate/related) | Same feature, likely iterative refinement |
| [#2008](https://github.com/qwibitai/nanoclaw/pull/2008) | TerrifiedBug | Telegram media routing via typed APIs | UX improvement — inline previews for images/video/audio |
| [#2007](https://github.com/qwibitai/nanoclaw/pull/2007) | TerrifiedBug | Fix reaction lookups using canonical chat-sdk composite ID | **Bug fix** — corrects message ID resolution across agent groups |
| [#2081](https://github.com/qwibitai/nanoclaw/pull/2081) | underscorerootword | *Unclear from summary* | Operational/container skill per template |
| [#2077](https://github.com/qwibitai/nanoclaw/pull/2077) | gabi-simons | Handle duplicate message ID in session DB insert | **Data integrity** — `INSERT OR IGNORE` prevents crash on duplicate events |
| [#2075](https://github.com/qwibitai/nanoclaw/pull/2075) | gabi-simons | Complete Slack setup wiring with welcome DM | **Channel parity** — Slack now matches Discord/Telegram onboarding |

**Key advancement:** Multi-provider architecture is now production-viable with OpenCode and Codex joining Claude, plus Ollama multimodal support in review.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|---|---|---|
| [#1959](https://github.com/qwibitai/nanoclaw/issues/1959) Discord reply routing bug | 1 comment, 1 👍 | **Highest-engagement issue** — v2 regression affecting core UX; replies misrouted based on container init state rather than message context. Indicates architectural tension in v2's container lifecycle vs. conversation state management. |
| [#2084](https://github.com/qwibitai/nanoclaw/pull/2084) Daily backup + restore | Open, no comments | **Critical infrastructure gap** — addresses "no way back from `rm -rf`" explicitly. High user anxiety around data loss in self-hosted deployments. |
| [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) Matrix E2EE + per-group config | Open since Apr 4 | **Long-running feature PR** — E2EE is table-stakes for privacy-conscious users; per-group model config enables cost/quality tuning. Stalled 24 days suggests review complexity. |

**Underlying needs:** (1) **Predictable conversation routing** — users expect channel-native behavior, not container-centric behavior; (2) **Operational confidence** — backup/restore and crash protection are becoming first-class requirements; (3) **Deployment flexibility** — per-group configuration avoids one-size-fits-all constraints.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|---|---|---|---|
| 🔴 **High** | [#2073](https://github.com/qwibitai/nanoclaw/issues/2073) | Container fails with "readonly database" when host runs as root; containers exit in ~1 second | **No fix PR** — blocks root-based deployments (common in containers/VMs) |
| 🟡 **Medium** | [#1959](https://github.com/qwibitai/nanoclaw/issues/1959) | Discord replies routed by container init, not message source | **No fix PR** — v2 regression, workaround unclear |
| 🟡 **Medium** | [#2078](https://github.com/qwibitai/nanoclaw/pull/2078) | `:ag-<agentGroupId>` suffix leaks to adapter ops, breaking reactions/edits | **Fix PR open** — PR #2078 addresses |
| 🟢 **Low** | [#2076](https://github.com/qwibitai/nanoclaw/pull/2076) | Slack standalone file uploads not received in channels | **Fix PR open** — PR #2076 addresses |
| 🟢 **Low** | [#2074](https://github.com/qwibitai/nanoclaw/pull/2074) | MCP server `args` not coerced to `string[]`, written as JSON string | **Fix PR open** — PR #2074 closes #2051 |

**Stability wins:** Circuit breaker (#2080/#2079) prevents cascading failures from crash loops. Duplicate message handling (#2077) eliminates a race condition.

**Risk:** Root + readonly database (#2073) is a **deployment blocker** with no assigned fix; likely permissions/ownership issue in SQLite access from container.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version |
|---|---|---|
| **Unwired agent provisioning** (`/create-agent` skill) | [#2085](https://github.com/qwibitai/nanoclaw/issues/2085) | **High** — aligns with v2's agent-group architecture; enables SaaS/multi-tenant patterns |
| **Daily backup + S3 restore** | [#2084](https://github.com/qwibitai/nanoclaw/pull/2084) | **High** — disaster recovery is ops-critical; PR is comprehensive |
| **Ollama multimodal (images)** | [#2072](https://github.com/qwibitai/nanoclaw/pull/2072) | **Medium-High** — PR open, small surface area, enables local vision models |
| **Agent-to-agent message capping** | [#2063](https://github.com/qwibitai/nanoclaw/pull/2063) | **Medium** — fixes production-observed failure modes (self-loops, politeness loops) |
| **Matrix E2EE channel** | [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) | **Medium** — large PR, stalled; may need rebase or split |

**Emerging pattern:** "Agent groups" as the core v2 abstraction is driving demand for **lifecycle management** (create without wire), **isolation** (per-group config), and **governance** (routing caps, backup boundaries).

---

## 7. User Feedback Summary

### Pain Points
- **Deployment fragility:** Root-user crashes (#2073), crash loops without protection (addressed by #2080), no recovery path (#2084)
- **Channel behavior unpredictability:** Discord threading (#1959), Slack file handling (#2076), message ID collisions (#2077, #2007)
- **Provider lock-in anxiety:** Multiple PRs for OpenCode, Codex, Ollama suggest users want escape hatches from Claude dependency

### Use Cases Expressed
- **Per-user personal agents:** Create agents upfront, wire later per-user (#2085) — indicates multi-tenant or team-deployment scenarios
- **Cost/quality tuning:** Per-group model configuration (#1624) — users want to trade capability for expense
- **Self-hosted privacy:** Matrix E2EE (#1624), local Ollama (#2072) — data sovereignty concerns

### Satisfaction Signals
- Aggressive community contribution (24 PRs/day) suggests healthy engagement
- Rapid merge of circuit breaker and duplicate-message fixes shows responsive maintainers

### Dissatisfaction Signals
- 24-day-old Matrix PR (#1624) without resolution risks contributor burnout
- "No way back from careless `rm -rf`" in #2084 indicates traumatic data loss experiences

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) Matrix E2EE + per-group config | 24 days | **Contributor attrition** | Maintainer review or request for split into smaller PRs |
| [#1959](https://github.com/qwibitai/nanoclaw/issues/1959) Discord reply routing | 6 days | **v2 UX regression** | Assign to v2 channel owner; may need architectural decision on container vs. conversation state |
| [#2073](https://github.com/qwibitai/nanoclaw/issues/2073) Root + readonly database | 1 day | **Deployment blocker** | Fast-track; likely SQLite file permissions in container bind-mount |

**Review queue concern:** 13 open PRs with 11 closed in 24h suggests **2:1 open/close ratio** that could accumulate. Four open PRs are fixes (#2074, #2076, #2078, #2063) that should be prioritized over features to prevent bug backlog.

---

*Digest generated from GitHub activity data for qwibitai/nanoclaw on 2026-04-29.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-29

## 1. Today's Overview

NullClaw shows **moderate maintenance activity** with 3 PRs and 1 issue updated in the last 24 hours, though no new releases were cut. The project is actively addressing a **high-severity regression from the Zig 0.16 migration** that impacts all Mattermost-connected production agents, with a fix PR currently open after an initial attempt was closed. A substantial cron subagent feature continues to undergo review after three weeks in development. Overall activity suggests a project in **stabilization mode** focused on production reliability rather than new feature expansion.

---

## 2. Releases

*No new releases today.*

---

## 3. Project Progress

### Merged/Closed Today

| PR | Author | Status | Summary |
|:---|:---|:---|:---|
| [#872](https://github.com/nullclaw/nullclaw/pull/872) | vernonstinebaker | **CLOSED** | Fix for Zig 0.16 Mattermost regression (superseded by #873) |

The closed PR #872 appears to have been an initial fix attempt for the Mattermost regression that was **replaced by #873**—likely due to review feedback or incomplete implementation. No actual merge occurred; the fix remains pending.

### In Progress

| PR | Author | Status | Age | Summary |
|:---|:---|:---|:---|:---|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | yanggf8 | **OPEN** | 21 days | Cron subagent engine with DB-backed scheduler, JSON CLI output, security hardening |

The cron subagent PR represents **significant architectural work** (DB schema, worker queues, atomic operations, multi-timezone support) but has been open since April 7 without merge, suggesting either thorough review cycles or maintainer bandwidth constraints.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#873](https://github.com/nullclaw/nullclaw/pull/873) — Mattermost fix | Updated 2026-04-28, high-severity labeling | **Critical production blocker**; the explicit "CAUTION" callout and "all Mattermost-connected agents" scope indicates this is the community's immediate priority |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) — Cron subagent | Updated 2026-04-28, 21 days open | Represents **long-term architectural direction**; JSON output suggests API/CLI modernization needs |

**Underlying needs detected:**
- **Operational reliability**: Users depend on NullClaw for production Mattermost integrations and cannot tolerate CPU wastage or silent message failures
- **Observability & automation**: Cron subagent with run history and JSON output points to DevOps/CI-CD integration use cases
- **Security posture**: "security hardening" in cron PR and missing security policy docs (#874) indicate enterprise/security-conscious adoption

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#873](https://github.com/nullclaw/nullclaw/pull/873) | **100% CPU utilization** on gateway thread (EAGAIN busy-spin) since Zig 0.16 migration | **Fix PR open, unmerged** |
| 🔴 **Critical** | [#873](https://github.com/nullclaw/nullclaw/pull/873) | **Silent Mattermost messaging failure** — empty-body POST regression | **Fix PR open, unmerged** |

**Assessment**: Both regressions stem from the **Zig 0.16 migration**, indicating insufficient test coverage for platform-specific networking behavior (EAGAIN handling) and HTTP client edge cases. The fact that #872 was closed and #873 opened suggests iterative fix attempts—possible risk of further iterations before resolution.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release |
|:---|:---|:---|
| Cron subagent with DB scheduling | [#783](https://github.com/nullclaw/nullclaw/pull/783) | **High** — substantial implementation complete, pending review |
| JSON CLI output for cron commands | [#783](https://github.com/nullclaw/nullclaw/pull/783) | **High** — bundled with cron PR |
| Per-job timezone offsets | [#783](https://github.com/nullclaw/nullclaw/pull/783) | **Medium** — may be deferred if PR split for review |
| Delivery routing & operator alerts | [#783](https://github.com/nullclaw/nullclaw/pull/783) | **Medium** — depends on core scheduler merge |
| Security policy documentation | [#874](https://github.com/nullclaw/nullclaw/issues/874) | **Low-Medium** — simple docs fix, low priority unless enterprise push |

**Predicted next version focus**: Production stability (Mattermost fix) + cron subsystem release, possibly as **v0.x.0 minor release** given feature scope.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Segment |
|:---|:---|:---|
| **Production downtime from Zig 0.16 upgrade** | #873 severity labeling, "affects all...in production" | Enterprise/self-hosted operators |
| **Undocumented security boundaries** | [#874](https://github.com/nullclaw/nullclaw/issues/874) — missing `default_allowed_commands` docs | Security-conscious adopters, compliance-driven orgs |
| **Need for programmatic integration** | JSON output in cron PR | DevOps/automation engineers |
| **Complex scheduling requirements** | Timezone offsets, run history, queue workers | Multi-region deployments |

**Satisfaction concern**: The Zig 0.16 migration introduced **two critical regressions simultaneously**, suggesting release qualification gaps that may erode operator confidence. The rapid fix attempt (same-day PR #872, replacement #873) shows responsive maintenance but also possible pressure.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) Cron subagent | **21 days open** | Bit rot, review fatigue, contributor attrition | Maintainer review or split into smaller PRs |
| [#874](https://github.com/nullclaw/nullclaw/issues/874) Security docs | 1 day | Low individually, but pattern of docs debt | Triage: good first issue or security priority? |

**Critical gap**: No open issue tracking the **Zig 0.16 migration quality** itself—only symptomatic fixes. Recommend meta-issue to audit migration completeness (HTTP client, async I/O, platform-specific error handling).

---

*Digest generated from github.com/nullclaw/nullclaw data as of 2026-04-29.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-29

## 1. Today's Overview

IronClaw shows **extremely high engineering velocity** with 76 total items updated in 24 hours (30 issues, 46 PRs), dominated by the massive "Reborn" architecture migration. The project is in a critical architectural transition period: 26 of 30 open issues and the majority of PRs relate to reborn infrastructure, while live canary failures (3 separate `private-oauth` failures plus `public-smoke`) indicate **staging instability**. No new releases were cut, suggesting the team is holding releases until Reborn stabilizes. The contributor base is active across core team (serrrfirat, henrypark133, nickpismenkov) and new community members (Kampouse, failuresmith, ddu-aeron).

---

## 2. Releases

**No new releases** — Version 0.26.0 remains current. The absence of releases amid heavy Reborn development suggests deliberate release freeze until architectural cutover completes.

---

## 3. Project Progress

### Merged/Closed PRs (16 total, selected significant):

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| **#3050** | zetyquickly | Abound demo: removed CodeAct, adjusted system prompt for structured tool calls | [PR #3050](https://github.com/nearai/ironclaw/pull/3050) |
| **#3007** | henrypark133 | Disabled v2 CodeAct for Abound demo testing — forced structured tool calls path | [PR #3007](https://github.com/nearai/ironclaw/pull/3007) |
| **#3049** | zetyquickly | Added send tool executed assertion + fixed temperature handling | [PR #3049](https://github.com/nearai/ironclaw/pull/3049) |
| **#3046** | Kampouse | Telegram `allowed_chat_ids` for group-level access control (superseded by #3047) | [PR #3046](https://github.com/nearai/ironclaw/pull/3046) |
| **#3042** | nickpismenkov | Policy engine (superseded by #3043) | [PR #3042](https://github.com/nearai/ironclaw/pull/3042) |
| **#3015** | serrrfirat | Reborn extension manifest registry | [PR #3015](https://github.com/nearai/ironclaw/pull/3015) |
| **#2999** | serrrfirat | Reborn auth control substrate | [PR #2999](https://github.com/nearai/ironclaw/pull/2999) |

### Key Advances:
- **Abound demo stabilization**: Two PRs explicitly disabled v2 CodeAct for demo readiness, indicating production pressure for a specific customer/deployment
- **Reborn substrate landing**: Auth control (#2999) and extension registry (#3015) merged; trust-class policy engine (#3043) now open as refined successor to closed #3042
- **Telegram channel hardening**: Community contributor Kampouse iterating on group chat access controls

---

## 4. Community Hot Topics

### Most Active by Engagement:

| Item | Comments/Reactions | Topic | Link |
|:---|:---|:---|:---|
| **#2987** [EPIC] Reborn architecture landing strategy | 23 comments, 0 👍 | **The central coordination issue** for entire Reborn migration — defines grouped PR plan, contract freeze, staging cutover | [Issue #2987](https://github.com/nearai/ironclaw/issues/2987) |
| **#1044** E2E test with Claude Code + Chrome MCP | 2 comments, closed | Completed E2E testing infrastructure | [Issue #1044](https://github.com/nearai/ironclaw/issues/1044) |
| **#3045** Runtime presets and effective runtime policy | 1 comment | User-facing configuration simplification for Reborn | [Issue #3045](https://github.com/nearai/ironclaw/issues/3045) |
| **#3044** Local developer runtime profiles | 1 comment | DX-critical: one-command local coding agent setup | [Issue #3044](https://github.com/nearai/ironclaw/issues/3044) |
| **#3036** Configuration-as-Code EPIC | 1 comment, 1 👍 | Declarative tenant blueprints — strong user demand signal | [Issue #3036](https://github.com/nearai/ironclaw/issues/3036) |

### Underlying Needs Analysis:
- **#2987** reveals **engineering process strain**: The team explicitly avoids "one massive stacked PR" by creating a reviewable integration plan, indicating prior pain with large changesets
- **#3036** and **#3045/#3044** show convergent demand for **declarative, simplified configuration** — operators reject current ".env + JSON + flags" sprawl
- The single 👍 on #3036 (from ilblackdragon, a core contributor) suggests even internal stakeholders prioritize this

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 Critical** | **#3038** Live canary: `public-smoke` failed | Production smoke test failing on Anthropic provider | [Issue #3038](https://github.com/nearai/ironclaw/issues/3038) — **NO FIX PR** |
| **🔴 Critical** | **#3037** Live canary: `private-oauth` failed | OAuth authentication lane failing (3rd occurrence: #3030, #3005) | [Issue #3037](https://github.com/nearai/ironclaw/issues/3037) — **NO FIX PR** |
| **🟡 High** | **#3030** Live canary: `private-oauth` failed (earlier) | Same lane, same commit `7194808f` — persistent regression | [Issue #3030](https://github.com/nearai/ironclaw/issues/3030) |
| **🟡 High** | **#3011** Zero log output from `ironclaw run` | `tracing` fmt layer broken — complete observability blackout for operators | [Issue #3011](https://github.com/nearai/ironclaw/issues/3011) — **NO FIX PR** |
| **🟡 High** | **#2949** No Linux x86_64 download | Installer script fails for common platform; release artifacts misconfigured | [Issue #2949](https://github.com/nearai/ironclaw/issues/2949) — **NO FIX PR** |
| **🟡 High** | **#2437** Tool schema normalization bug | `nearai_chat` fails with `oneOf`/`anyOf` schemas (closed) | [Issue #2437](https://github.com/nearai/ironclaw/issues/2437) — **FIXED** |
| **🟢 Medium** | **#3035** Agent ignores configured display name | Identity configuration not respected in V2 engine | [Issue #3035](https://github.com/nearai/ironclaw/issues/3035) — **NO FIX PR** |
| **🟢 Medium** | **#3034** HTTP tool disabled without onboarding | V2 engine UX gap — users can't discover how to enable HTTP tools | [Issue #3034](https://github.com/nearai/ironclaw/issues/3034) — **NO FIX PR** |
| **🟢 Medium** | **#3010** Generated images not in follow-up context | `image_generate` output lost between turns | [Issue #3010](https://github.com/nearai/ironclaw/issues/3010) — **NO FIX PR** |

### Stability Assessment:
- **Canary system is red**: 4 failures in 24h on same commit suggest either infrastructure flakiness or genuine regression in `7194808f`
- **Observability crisis**: #3011 means operators cannot debug the canary failures — compounded problem
- **V2 engine rough edges**: #3035, #3034, #3010 all stem from new engine rollout; pattern of "feature works but integration/polish missing"

---

## 6. Feature Requests & Roadmap Signals

| Feature | Signal Strength | Predicted Timeline | Link |
|:---|:---|:---|:---|
| **Configuration-as-Code / Tenant Blueprints** | ⭐⭐⭐⭐⭐ Strong — EPIC filed by ilblackdragon, aligns with #3045/#3044 | Post-Reborn (0.28.0+) | [Issue #3036](https://github.com/nearai/ironclaw/issues/3036) |
| **Runtime Presets / Profiles** | ⭐⭐⭐⭐⭐ Strong — explicit "simple as `ironclaw run --preset coding`" UX goal | Reborn MVP | [Issue #3045](https://github.com/nearai/ironclaw/issues/3045) |
| **Local Developer Profiles** | ⭐⭐⭐⭐ Strong — reduces onboarding friction | Reborn MVP | [Issue #3044](https://github.com/nearai/ironclaw/issues/3044) |
| **Trezor/Metamask Wallet Support** | ⭐⭐⭐ Medium — single user request, but hits OSS values (open source wallets) | Unscheduled | [Issue #3025](https://github.com/nearai/ironclaw/issues/3025) |
| **Unified Test Harness** | ⭐⭐⭐ Medium — tracking issue, fragmented systems acknowledged | 0.27.0 | [Issue #2828](https://github.com/nearai/ironclaw/issues/2828) |
| **Telegram Group Chat Controls** | ⭐⭐⭐ Active — Kampouse iterating rapidly | Next release | [PR #3047](https://github.com/nearai/ironclaw/pull/3047), [PR #3048](https://github.com/nearai/ironclaw/pull/3048) |

### Prediction:
The **"Reborn" architecture is 0.27.0's defining feature**. Configuration-as-Code will likely be 0.28.0's headline, as it's explicitly deferred to post-substrate work.

---

## 7. User Feedback Summary

### Pain Points (Real User Voices):

| User | Issue | Core Problem |
|:---|:---|:---|
| **gittyhubert** | #2949 | **Platform support gap**: "I found [Linux releases] on your release page" — script vs. release artifact mismatch breaks trust |
| **benjaminpreiss** | #3025 | **Wallet vendor lock-in**: Forced to use closed-source wallets; "Most of them... are not open source or dont have a github repo linked" — values misalignment for crypto-native users |
| **joe-rlo** (QA) | #3035, #3034 | **V2 engine polish gaps**: Identity and tool onboarding regressions in staging |
| **synner88** | #3011 | **Operational blindness**: Zero logs despite `RUST_LOG=trace` — critical for self-hosters |
| **hanakannzashi** | #3010, #2437 | **Tool integration fragility**: Schema handling and context retention bugs |

### Satisfaction Signals:
- Closed #2982 (migration issue) and #2833 (cross-conversation contamination) show responsive bug fixes
- Rapid community PR turnaround (Kampouse's Telegram features merged same day)

### Dissatisfaction Pattern:
**"Almost works" syndrome** — V2 engine and Reborn infrastructure function at core but fail on edge cases that block real workflows. Users encountering these are likely early adopters/self-hosters who are also the project's advocate base.

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Why It Needs Attention | Link |
|:---|:---|:---|:---|:---|
| **#2987** Reborn EPIC | 2 days | **Critical** | Central coordination; 23 comments suggest active debate but risk of decision fatigue | [Issue #2987](https://github.com/nearai/ironclaw/issues/2987) |
| **#2828** Harness testing epic | 6 days | **High** | Test fragmentation acknowledged; without this, Reborn cutover lacks safety net | [Issue #2828](https://github.com/nearai/ironclaw/issues/2828) |
| **#1764** Abound demo PR | 30 days | **High** | XL PR open for month; customer pressure evident from #3050/#3007 rapid disables | [PR #1764](https://github.com/nearai/ironclaw/pull/1764) |
| **#2925** Deploy infra PR | 5 days | **Medium** | XL PR with undefined comments — may be stuck in review limbo | [PR #2925](https://github.com/nearai/ironclaw/pull/2925) |
| **#2949** Linux download failure | 4 days | **Medium** | New user blocker; trivial fix (script artifact matching) but unaddressed | [Issue #2949](https://github.com/nearai/ironclaw/issues/2949) |
| **#3025** Trezor/Metamask | 1 day | **Low-Medium** | Values-aligned request; no maintainer response yet | [Issue #3025](https://github.com/nearai/ironclaw/issues/3025) |

### Maintainer Action Recommended:
1. **Acknowledge canary failures** — 4 issues with no assignees or fix PRs is alarming
2. **Resolve #2949** — likely one-line fix, high new-user impact
3. **Clarify Abound demo vs. Reborn priority tension** — #3050/#3007 suggest emergency patches to a month-old demo branch while Reborn is supposedly the focus

---

*Digest generated from 76 GitHub items on 2026-04-29. IronClaw is a high-velocity, architecture-transitioning project with strong engineering momentum but emerging stability and observability gaps requiring immediate attention.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-29

## 1. Today's Overview

LobsterAI shows **exceptionally high engineering velocity** with 47 PRs updated in 24 hours (23 merged/closed, 24 open), indicating active development sprint activity. No new releases were cut today. The issue backlog remains light at 3 active issues, though all are unresolved. The merge pattern reveals intense focus on **gateway stability**, **model switching UX**, and **multi-platform integration** (WeChat, Feishu/Lark, DingTalk). Notably, two security-related PRs from March remain unmerged, suggesting potential prioritization tension between feature velocity and security hardening.

---

## 2. Releases

**No new releases** today. Latest release status unchanged.

---

## 3. Project Progress

### Merged/Closed PRs (23 total — key themes)

| PR | Author | Area | Summary |
|:---|:---|:---|:---|
| [#1872](https://github.com/netease-youdao/LobsterAI/pull/1872) | fisherdaddy | docs, main, openclaw | **Gateway stability**: Fix forced gateway restart on plan model list updates |
| [#1871](https://github.com/netease-youdao/LobsterAI/pull/1871) | fisherdaddy | docs, main | **IM reliability**: Fix intermittent IM message display ordering in task records |
| [#1870](https://github.com/netease-youdao/LobsterAI/pull/1870) | fisherdaddy | docs, main | **Qwen compatibility**: Fix gateway restart triggered by Qwen 3.6 Plus responses |
| [#1869](https://github.com/netease-youdao/LobsterAI/pull/1869) | liuzhq1986 | main | **Session deadlock prevention**: Abort gateway run on lifecycle error fallback |
| [#1868](https://github.com/netease-youdao/LobsterAI/pull/1868) | liuzhq1986 | renderer, cowork | **WeChat UX**: Constrain markdown image size + add click-to-preview for IM channel images |
| [#1867](https://github.com/netease-youdao/LobsterAI/pull/1867) | fisherdaddy | renderer, docs, main, openclaw | **Vision model reliability**: Fix intermittent image input rejection on Qwen 3.6 Plus |
| [#1866](https://github.com/netease-youdao/LobsterAI/pull/1866) | liugang519 | openclaw | **Feishu/Lark i18n**: Fix Chinese filename garbling when receiving files |
| [#1865](https://github.com/netease-youdao/LobsterAI/pull/1865) | btc69m979y-dotcom | renderer, cowork | **Per-agent model selection**: Header ModelSelector now tracks per-agent overrides instead of global single value |
| [#1864](https://github.com/netease-youdao/LobsterAI/pull/1864) | liuzhq1986 | docs, skills | **Youdao Note skill upgrade** |
| [#1863](https://github.com/netease-youdao/LobsterAI/pull/1863) | liugang519 | main, Windows | **WeChat integration fixes** |
| [#1862](https://github.com/netease-youdao/LobsterAI/pull/1862) | fisherdaddy | renderer | **New model support**: Xiaomi MiMo model coding plan |
| [#1861](https://github.com/netease-youdao/LobsterAI/pull/1861) | — | — | *(related issue, see below)* |
| [#1860](https://github.com/netease-youdao/LobsterAI/pull/1860) | btc69m979y-dotcom | renderer, cowork | **Vision capability sync**: Use header-selected model (not agent default) for `supportsImage` check on home page |
| [#1859](https://github.com/netease-youdao/LobsterAI/pull/1859) | fisherdaddy | renderer | **New model support**: Baidu Qianfan coding plan |
| [#1858](https://github.com/netease-youdao/LobsterAI/pull/1858) | btc69m979y-dotcom | renderer, cowork | **Z-index fix**: EngineStartupOverlay above Settings modal during gateway restart |
| [#1857](https://github.com/netease-youdao/LobsterAI/pull/1857) | liuzhq1986 | main | **Gateway optimization**: Prevent hard restart when switching models on home page |
| [#1856](https://github.com/netease-youdao/LobsterAI/pull/1856) | btc69m979y-dotcom | renderer, cowork | **IM display cleanup**: Strip media metadata from user message display (DingTalk `[图片]`, openclaw markers, etc.) |
| [#1855](https://github.com/netease-youdao/LobsterAI/pull/1855) | liuzhq1986 | renderer | **UI polish**: Truncate long model names in ModelSelector |
| [#1854](https://github.com/netease-youdao/LobsterAI/pull/1854) | liuzhq1986 | renderer | *(duplicate/related UI fix for model name truncation)* |

**Key advancement**: The project resolved a **systematic model selection architecture flaw** — moving from global `selectedModel` to per-agent `selectedModelByAgent` with lazy resolution chain, directly addressing root cause of multiple vision/ non-vision switching bugs.

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|:---|:---|:---|
| [#1813 — DeepSeek V4 "provider rejected request schema or tool payload"](https://github.com/netease-youdao/LobsterAI/issues/1813) | 6 comments, created 2026-04-24, active through 2026-04-28 | **Highest engagement**. New model integration friction: DeepSeek V4's API schema/tool calling format incompatible with LobsterAI's payload generation. Signals: (a) rapid model addition creating maintenance burden, (b) need for provider-agnostic schema adapter layer, (c) user demand for latest frontier models |
| [#1861 — Image attachment `supportsImage` state desync](https://github.com/netease-youdao/LobsterAI/issues/1861) | 1 comment, created 2026-04-28 | Well-documented bug with 3 reproduction scenarios. **Already fixed** by PRs #1860 and #1865 merged same day — demonstrates responsive engineering |

**Underlying needs**: Users want **seamless model switching** without manual attachment re-upload, and **rapid access to new models** (DeepSeek V4, Qwen 3.6 Plus) without breaking existing workflows.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **High** | [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) | **Follow-up queries cause infinite `NO_REPLY` or truncated output** — task marked complete while model still generating, causing empty page response | **OPEN — no fix PR identified** |
| **High** | [#1870](https://github.com/netease-youdao/LobsterAI/pull/1870) | Qwen 3.6 Plus responses trigger gateway restart | **Fixed** (merged) |
| **High** | [#1869](https://github.com/netease-youdao/LobsterAI/pull/1869) | Session deadlock: failed LLM retry leaves gateway run active, rejects subsequent messages | **Fixed** (merged) |
| **Medium** | [#1861](https://github.com/netease-youdao/LobsterAI/issues/1861) / [#1860](https://github.com/netease-youdao/LobsterAI/pull/1860) | Image attachment handling broken across vision/non-vision model switches | **Fixed** (merged) |
| **Medium** | [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) | DeepSeek V4 schema/tool payload rejection | **Open** — 6 comments, ongoing |
| **Medium** | [#1872](https://github.com/netease-youdao/LobsterAI/pull/1872) | Gateway forced restart on plan model list updates | **Fixed** (merged) |
| **Low** | [#1871](https://github.com/netease-youdao/LobsterAI/pull/1871) | IM message display ordering glitch | **Fixed** (merged) |

**Critical concern**: [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) represents a **core streaming/ completion race condition** with no visible fix PR — this should be top priority as it breaks basic conversational flow.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Release |
|:---|:---|:---|
| **Expanded coding plan support** | PRs [#1862](https://github.com/netease-youdao/LobsterAI/pull/1862) (Xiaomi MiMo), [#1859](https://github.com/netease-youdao/LobsterAI/pull/1859) (Baidu Qianfan) | **High** — active development, pattern suggests more providers coming |
| **Provider-agnostic model schema adapter** | [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) pain point | **Medium-High** — technical debt accumulating with each new model |
| **Enhanced Youdao Note integration** | [#1864](https://github.com/netease-youdao/LobsterAI/pull/1864) | **Medium** — skill ecosystem expansion |
| **Security hardening (MCP/skill audit)** | PRs [#908](https://github.com/netease-youdao/LobsterAI/pull/908), [#909](https://github.com/netease-youdao/LobsterAI/pull/909) (stale since March) | **Uncertain** — blocked or deprioritized |

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | User Impact |
|:---|:---|:---|
| **Gateway restarts disrupting sessions** | Multiple PRs | Severe — loses context, requires re-authentication, Settings modal conflicts |
| **Model switching breaks attachments** | [#1861](https://github.com/netease-youdao/LobsterAI/issues/1861) | High — forces re-upload, confusing UX |
| **New model integration fragility** | [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813), [#1870](https://github.com/netease-youdao/LobsterAI/pull/1870) | High — users expect "it just works" |
| **Follow-up query failures** | [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) | Critical — breaks core conversation loop |
| **IM channel polish** | [#1868](https://github.com/netease-youdao/LobsterAI/pull/1868), [#1856](https://github.com/netease-youdao/LobsterAI/pull/1856), [#1866](https://github.com/netease-youdao/LobsterAI/pull/1866) | Medium — image sizing, metadata cleanup, encoding |

### Satisfaction Signals
- **Rapid bug turnaround**: [#1861](https://github.com/netease-youdao/LobsterAI/issues/1861) reported and fixed same day
- **Broad platform support**: Active work on WeChat, Feishu, DingTalk integrations
- **Model diversity**: Adding Xiaomi, Baidu, Qwen, DeepSeek support

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#908](https://github.com/netease-youdao/LobsterAI/pull/908) — MCP stdio command injection fix | **33 days** (2026-03-26) | **Security-critical**: Prevents RCE via compromised renderer process | **Urgent maintainer review** — marked stale, no merge despite clear vulnerability |
| [#909](https://github.com/netease-youdao/LobsterAI/pull/909) — Skill security scan bypass fix | **33 days** (2026-03-26) | **Security-critical**: Malicious skills can crash scanner to bypass audit | **Urgent maintainer review** — same author as #908, same stale status |
| [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) — Follow-up infinite NO_REPLY | **1 day** (2026-04-28) | **Stability-critical**: Core feature broken | Assign engineer, root cause in task completion race condition already identified |

**Security debt concern**: Two security PRs by @vdorchan from March remain unmerged with no visible review activity. The MCP command injection (#908) is particularly severe as it crosses the renderer-main process boundary. The project's high feature velocity may be crowding out security review bandwidth — recommend explicit security sprint or dedicated reviewer assignment.

---

*Digest generated from GitHub activity data for netease-youdao/LobsterAI on 2026-04-29.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-29

## 1. Today's Overview

Moltis demonstrates **exceptionally high development velocity** with 18 PRs updated in 24 hours and 15 merged/closed, indicating a mature, well-maintained CI/CD pipeline and active maintainer engagement. The project released version `20260428.03` yesterday, continuing a steady release cadence. Community activity is healthy with 5 issues updated, though only 3 remain open. The dominant themes are **multi-platform import tooling**, **voice/identity features**, and **sandbox security hardening**—positioning Moltis as a serious enterprise-ready AI agent framework competing with proprietary alternatives.

---

## 2. Releases

### [20260428.03](https://github.com/moltis-org/moltis/releases/tag/20260428.03)
Released: 2026-04-28

No detailed changelog provided in release metadata. Based on merged PRs in this cycle, this release likely includes:
- Claude Code / Hermes / Claude Desktop import capabilities
- Voice personas for deterministic TTS
- Command palette (Cmd+K/Ctrl+K) in web UI
- Landlock filesystem sandbox isolation
- Auto-triggered code indexing with deduplication
- Self-update mechanism (`/update` command + UI button)

**Breaking changes**: None explicitly flagged. The provider name validation refactor (PR #912) fixes false "unknown provider" errors for 7 providers—users previously workarounding these should verify configurations.

**Migration notes**: Discord and MS Teams channels now compile optionally (PR #899); custom builds may need feature flags enabled.

---

## 3. Project Progress

### Merged/Closed PRs (15 total)

| PR | Author | Description | Significance |
|:---|:---|:---|:---|
| [#914](https://github.com/moltis-org/moltis/pull/914) | penso | Multi-source import: Claude Code, Claude Desktop, Hermes | **Major** — parity with OpenClaw migration tools; reduces vendor lock-in |
| [#916](https://github.com/moltis-org/moltis/pull/916) | penso | Voice personas for deterministic TTS identity | **Major** — enterprise-grade voice consistency; enables branded agent identities |
| [#904](https://github.com/moltis-org/moltis/pull/904) | penso | Command palette (Cmd+K/Ctrl+K) | UX polish; power-user efficiency |
| [#903](https://github.com/moltis-org/moltis/pull/903) | Cstewart-HC | Auto-triggered code indexing with deduplication | **Major** — eliminates manual indexing ops; scales to large codebases |
| [#876](https://github.com/moltis-org/moltis/pull/876) | Cstewart-HC | File upload button (+) for web chat | Closes UX gap with ChatGPT/Claude web UIs |
| [#866](https://github.com/moltis-org/moltis/pull/866) | Cstewart-HC | Landlock FS isolation for sandbox | **Security-critical** — kernel-level containment; addresses [#818](https://github.com/moltis-org/moltis/issues/818) |
| [#911](https://github.com/moltis-org/moltis/pull/911) | penso | Self-update (`/update` command + UI button) | Reduces ops friction; critical for non-Docker deployments |
| [#915](https://github.com/moltis-org/moltis/pull/915) | penso | Sanitize user name field for channel messages | Fixes [#905](https://github.com/moltis-org/moltis/issues/905) Telegram bug |
| [#913](https://github.com/moltis-org/moltis/pull/913) | penso | steipete crawl tools (wacrawl, discrawl, slacrawl, birdclaw) | **Platform expansion** — WhatsApp, Discord, Slack, Twitter/X data ingestion |
| [#869](https://github.com/moltis-org/moltis/pull/869) | penso | Obscura lightweight browser backend | Alternative to Chromium; ~30MB sidecar; privacy-focused |
| [#912](https://github.com/moltis-org/moltis/pull/912) | penso | Unify provider name validation | Fixes false errors for 7 providers including `zai`, `github-copilot`, `local-llm` |
| [#910](https://github.com/moltis-org/moltis/pull/910) | penso | Consistent SessionMemoryHook dispatch | Reliability fix for session lifecycle edge cases |
| [#909](https://github.com/moltis-org/moltis/pull/909) | penso | Scoped changelog generation | Release engineering quality |
| [#907](https://github.com/moltis-org/moltis/pull/907) | penso | nginx `$http_host` fix for non-standard ports | Fixes WebSocket cross-origin errors behind reverse proxies |
| [#899](https://github.com/moltis-org/moltis/pull/899) | Cstewart-HC | Optional Discord/MS Teams compile-time features | Build flexibility; follows Telegram pattern from [#891](https://github.com/moltis-org/moltis/pull/891) |

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|:---|:---|:---|
| [#905](https://github.com/moltis-org/moltis/issues/905) [CLOSED] Telegram bug | 3 comments, 1 👍 | **Root cause**: Unsanitized display names breaking Mistral (HTTP 422) and OpenAI APIs. **User need**: Reliable multi-channel messaging without provider-specific breakage. Rapid fix (closed same day) demonstrates responsive maintenance. |
| [#533](https://github.com/moltis-org/moltis/issues/533) [OPEN] "+" button for attachments | 3 comments, 0 👍 | **Underlying need**: Feature parity with mainstream LLM chat UIs. **Note**: PR [#876](https://github.com/moltis-org/moltis/pull/876) merged file upload button—may partially address; issue still open suggests scope mismatch or incomplete implementation. |
| [#896](https://github.com/moltis-org/moltis/issues/896) [CLOSED] Docker build DNS failure | 2 comments, 0 👍 | Transient infrastructure issue (`ports.ubuntu.com` resolution). Quick closure indicates good triage hygiene. |

### Open PRs Awaiting Review

| PR | Status | Risk |
|:---|:---|:---|
| [#917](https://github.com/moltis-org/moltis/pull/917) Web UI import wiring for Claude/Hermes | Open, 0 comments | Companion to merged [#914](https://github.com/moltis-org/moltis/pull/914); likely fast-follow |
| [#916](https://github.com/moltis-org/moltis/pull/916) Voice personas | Open, 0 comments | **High-value feature**; may be pending final review despite creation date |
| [#339](https://github.com/moltis-org/moltis/pull/339) zh-TW locale | Open since 2026-03-05 | **Stalled localization** — 54 days open; risks contributor attrition |

---

## 5. Bugs & Stability

| Severity | Issue | Fix Status | Details |
|:---|:---|:---|:---|
| **Medium** | [#905](https://github.com/moltis-org/moltis/issues/905) Telegram name sanitization | ✅ Fixed in [#915](https://github.com/moltis-org/moltis/pull/915) | Affected Mistral + OpenAI providers; could break any channel with spaces/special chars in display names |
| **Low** | [#896](https://github.com/moltis-org/moltis/issues/896) Docker DNS resolution | ✅ Closed | External infrastructure; no code change needed |
| **Low** | [#907](https://github.com/moltis-org/moltis/pull/907) nginx WebSocket port handling | ✅ Fixed | Affected non-standard port deployments behind reverse proxy |

**Stability assessment**: No critical or high-severity bugs in 24h. The Telegram sanitization bug was the only user-facing production issue, with same-day resolution. Security posture improved via Landlock sandboxing.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Sub-agent WebUI configuration** | [#906](https://github.com/moltis-org/moltis/issues/906) | **High** | Filed yesterday; aligns with active agent orchestration work; minimal scope |
| **9router native support** | [#266](https://github.com/moltis-org/moltis/issues/266) | **Medium** | 2 months old, 1 comment; depends on external project maturity; would require significant gateway work |
| **Attachment UX ("+" button)** | [#533](https://github.com/moltis-org/moltis/issues/533) | **Resolved?** | PR [#876](https://github.com/moltis-org/moltis/pull/876) merged file upload; issue may need closure |
| **Traditional Chinese locale** | [#339](https://github.com/moltis-org/moltis/pull/339) | **Uncertain** | 54-day-old PR; may need rebase or maintainer bandwidth |

**Emerging pattern**: Heavy investment in **import/migration tooling** (Claude Code, Hermes, Claude Desktop) suggests strategic positioning as a **universal AI agent platform**—not just a standalone tool but a hub for consolidating AI workflows from fragmented proprietary tools.

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | Severity |
|:---|:---|:---|
| Cross-channel API compatibility (Telegram → Mistral/OpenAI name handling) | Isolated but blocking | Medium |
| Docker/build environment fragility | Rare | Low |
| WebSocket reverse proxy configuration | Documentation gap | Low |

### Use Cases Gaining Traction
- **Enterprise voice deployments**: Voice personas (#916) indicate demand for consistent brand identity in spoken AI interactions
- **Multi-tool consolidation**: Import features signal users migrating from Claude Code, Cursor, and other tools—seeking unified agent management
- **Compliance/security-conscious deployments**: Landlock sandboxing and optional channel compilation suggest regulated environment adoption

### Satisfaction Indicators
- Same-day bug resolution for [#905](https://github.com/moltis-org/moltis/issues/905)
- 15/18 PRs merged (83% closure rate)
- Active release cadence (daily builds)

### Dissatisfaction Risks
- [#339](https://github.com/moltis-org/moltis/pull/339) zh-TW PR stalled 54 days may alienate East Asian contributor community
- [#266](https://github.com/moltis-org/moltis/issues/266) 9router request unanswered for 2 months suggests ecosystem integration backlog

---

## 8. Backlog Watch

| Item | Age | Risk | Recommended Action |
|:---|:---|:---|:---|
| [#339](https://github.com/moltis-org/moltis/pull/339) zh-TW Traditional Chinese | **54 days** | Contributor attrition; i18n gap | Merge or request rebase with explicit timeline |
| [#266](https://github.com/moltis-org/moltis/issues/266) 9router support | **60 days** | Ecosystem integration miss | Acknowledge with feasibility assessment or roadmap placement |
| [#533](https://github.com/moltis-org/moltis/issues/533) "+" attachment button | **29 days** | Duplicate effort confusion | Verify if [#876](https://github.com/moltis-org/moltis/pull/876) resolves; close or clarify scope |

**Maintainer bandwidth concern**: penso authored 11 of 18 PRs (61%), indicating potential **bus factor risk**. Cstewart-HC is the only other significant contributor in this window. Diversifying review/merge responsibilities would improve project resilience.

---

*Digest generated from GitHub activity 2026-04-28. All links: https://github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-29

## 1. Today's Overview

CoPaw (operating as QwenPaw) shows **high development velocity** with 43 issues and 31 PRs updated in the last 24 hours, indicating an active maintenance cycle ahead of the v1.1.5 release. The project released **v1.1.5-beta.1** today, introducing ACP (Agent Communication Protocol) support alongside console and timezone fixes. Community engagement remains strong with 25 open/active issues, though a concentration of **critical stability bugs**—particularly around session state management, pause/resume functionality, and MCP integration—suggests the maintainers are prioritizing reliability over new features. The PR merge rate of 20/31 (65%) reflects efficient code review, with performance optimizations and chat subsystem improvements dominating recent contributions. Overall project health is **moderate-to-good** with active development, but persistent session-handling regressions risk user trust in production deployments.

---

## 2. Releases

### [v1.1.5-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.5-beta.1)

| Change | Author | PR |
|--------|--------|-----|
| **fix(console)**: Use hybrid storage for per-tab agent selection | @zhaozhuang521 | [#3857](https://github.com/agentscope-ai/QwenPaw/pull/3857) |
| **fix(timezone)**: Normalize non-standard timezone names | @xieyxclack | [#3858](https://github.com/agentscope-ai/QwenPaw/pull/3858) |
| **feat(ACP)**: Add ACP (Agent Communication Protocol) support | — | — |

**Breaking Changes / Migration Notes:** None explicitly documented. The ACP feature addition is backward-compatible. Users relying on custom timezone configurations should verify normalization behavior after upgrade.

---

## 3. Project Progress

### Merged/Closed PRs Today (20 total, key items)

| PR | Description | Impact |
|----|-------------|--------|
| [#3914](https://github.com/agentscope-ai/QwenPaw/pull/3914) | chore(version): bumping version to 1.1.5b1 | Release preparation |
| [#3910](https://github.com/agentscope-ai/QwenPaw/pull/3910) | perf: Cache skill manifest reads to prevent FD exhaustion | **Production stability** — fixes file descriptor exhaustion under concurrent load |
| [#3912](https://github.com/agentscope-ai/QwenPaw/pull/3912) | perf(console): Virtualize chat session list with react-window | **UX scalability** — handles large session histories |
| [#3897](https://github.com/agentscope-ai/QwenPaw/pull/3897) | refactor(chat): Dedupe repeated model API requests | **Performance** — eliminates 3× redundant `/api/models` calls (75KB saved per page load) |
| [#3904](https://github.com/agentscope-ai/QwenPaw/pull/3904) | fix(mcp): Pass execution timeout to MCP client | **MCP reliability** — addresses timeout-related hangs |
| [#3896](https://github.com/agentscope-ai/QwenPaw/pull/3896) | fix(console): Proxy approval_level through running config API | **Config flexibility** — partial field updates now supported |
| [#3845](https://github.com/agentscope-ai/QwenPaw/pull/3845) | fix(qq): Voice message type mapping and platform ASR support | **Channel parity** — QQ voice messages properly handled |
| [#3908](https://github.com/agentscope-ai/QwenPaw/pull/3908) | Console/chat performance optimizations | **UX responsiveness** — paginated loading, singleton drawer pattern |
| [#3895](https://github.com/agentscope-ai/QwenPaw/pull/3895) | fix(context): Prevent context loss when tool result exceeds reserve limit | **Critical bugfix** — resolves infinite loop from context truncation (see [#3893](https://github.com/agentscope-ai/QwenPaw/issues/3893)) |
| [#3917](https://github.com/agentscope-ai/QwenPaw/pull/3917) | chore(console): Upgrade @agentscope-ai/chat to beta with stop fix | **Stop button reliability** |

**Key Advances:** Performance engineering is a major theme—three PRs target console/chat scalability. The MCP timeout fix and context loss prevention address severe stability issues. ACP protocol support positions CoPaw for multi-agent interoperability.

---

## 4. Community Hot Topics

| Rank | Issue/PR | Comments | Analysis of Underlying Need |
|------|----------|----------|----------------------------|
| 1 | **[#3853](https://github.com/agentscope-ai/QwenPaw/issues/3853)** [OPEN] Debian 12: Page freezes after saving model settings, requires root | 9 | **Privilege/permissions model broken** — non-root deployments fail catastrophically; users need sandboxed or capability-aware installation |
| 2 | **[#3430](https://github.com/agentscope-ai/QwenPaw/issues/3430)** [CLOSED] QwenPaw vs CoPaw relationship | 7 | **Branding confusion persists** — community needs clear project identity documentation; "CoPaw" as org vs "QwenPaw" as product is unclear |
| 3 | **[#3049](https://github.com/agentscope-ai/QwenPaw/issues/3049)** [CLOSED] `/stop` invalid, session history load fails | 6 | **Interrupt/signal handling fundamentally unreliable** — users need guaranteed task cancellation and data durability |
| 4 | **[#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843)** [OPEN] Session history disappears, messages routed to wrong session | 6 | **Session identity/affinity broken** — critical data loss scenario; suggests race condition in session lifecycle management |
| 5 | **[#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437)** [OPEN] Support Kimi Code API | 6 | **Provider diversity demand** — users want broader model ecosystem beyond built-in options |
| 6 | **[#3893](https://github.com/agentscope-ai/QwenPaw/issues/3893)** [OPEN] Context sync race condition: tool result dropped, infinite loop | 5 | **Concurrency control in agent execution** — high-iteration workflows need transactional context guarantees |

**Emerging Pattern:** Session state integrity is the dominant concern—4 of top 6 issues involve history loss, freeze, or misrouting. The community is stress-testing CoPaw in long-running, multi-turn production scenarios.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|----------|-------|--------|--------|---------|
| 🔴 **Critical** | [#3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) Debian freeze on model save | OPEN | None | Requires root workaround; blocks non-privileged deployment |
| 🔴 **Critical** | [#3893](https://github.com/agentscope-ai/QwenPaw/issues/3893) Context sync race → infinite loop | OPEN | [#3895](https://github.com/agentscope-ai/QwenPaw/pull/3895) (closed today) | Fix merged but issue still open—verify resolution |
| 🔴 **Critical** | [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) Session history disappearance | OPEN | None | Data loss; no fix identified |
| 🟡 **High** | [#3850](https://github.com/agentscope-ai/QwenPaw/issues/3850) Pause button only stops frontend, agent continues | CLOSED | [#3917](https://github.com/agentscope-ai/QwenPaw/pull/3917) | Fixed in beta chat package upgrade |
| 🟡 **High** | [#3905](https://github.com/agentscope-ai/QwenPaw/issues/3905) Dream agent: MEMORY.md empty, no memory consolidation | OPEN | None | Memory subsystem failure—core feature broken |
| 🟡 **High** | [#3861](https://github.com/agentscope-ai/QwenPaw/issues/3861) Console conversation multiple interrupts | OPEN | None | Stop/interrupt signal storm |
| 🟡 **High** | [#3702](https://github.com/agentscope-ai/QwenPaw/issues/3702) Skill pool persistent errors | OPEN | None | Blocks skill-based workflows |
| 🟢 **Medium** | [#3927](https://github.com/agentscope-ai/QwenPaw/issues/3927) Can't type Chinese when renaming conversation | OPEN | None | IME integration bug |
| 🟢 **Medium** | [#3886](https://github.com/agentscope-ai/QwenPaw/issues/3886) ACP compatibility: Hermes Agent can't call QwenPaw | OPEN | None | Protocol interoperability gap |

**Regression Risk:** The session/pause/stop subsystem has seen multiple fixes (#3850, #3750, #2190, #3049) yet new variants keep emerging—suggests **architectural debt** in the agent execution state machine, not just isolated bugs.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in v1.2 | Rationale |
|---------|-------|-------------------|-----------|
| **Kimi Code API support** | [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) | High | Explicit provider expansion; aligns with existing Ollama/LMS support |
| **llama.cpp as official provider** | [#3920](https://github.com/agentscope-ai/QwenPaw/issues/3920) | High | Minimal effort (similar to Ollama); strong community ask |
| **Per-model timeout & context_window_size config** | [#3929](https://github.com/agentscope-ai/QwenPaw/issues/3929) | Medium-High | Infrastructure improvement; affects reliability |
| **MCP tool discovery/visibility in UI** | [#2495](https://github.com/agentscope-ai/QwenPaw/issues/2495) | Medium | UX enhancement; MCP is actively developed |
| **Skill unit test framework** | [#3883](https://github.com/agentscope-ai/QwenPaw/issues/3883) | Medium | Developer experience; quality initiative |
| **DingTalk quoted messages + files** | [#3747](https://github.com/agentscope-ai/QwenPaw/issues/3747) | Medium | Enterprise channel parity |
| **DeepSeek prefix cache optimization** | [#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891) | Low-Medium | Requires provider-side cooperation; 95%→99% is marginal gain |
| **Workflow orchestration (OpenClaw-like)** | [#3873](https://github.com/agentscope-ai/QwenPaw/issues/3873) | Low | Architectural divergence; may be plugin territory |

**Signal from PRs:** Memory subsystem enhancements ([#3913](https://github.com/agentscope-ai/QwenPaw/pull/3913)), async session title generation ([#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829)), and GPT Image 2 plugin ([#3911](https://github.com/agentscope-ai/QwenPaw/pull/3911)) indicate active investment in **agent intelligence** and **content generation capabilities**.

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Category | Specific Complaints | Frequency |
|----------|---------------------|-----------|
| **Stop/Pause broken** | "Pause only stops frontend rendering, backend continues"; "stop command invalid, session stuck" | 🔥🔥🔥🔥🔥 |
| **Session fragility** | "History disappears"; "new messages routed to different session"; "click stop, then no response to new messages" | 🔥🔥🔥🔥🔥 |
| **MCP instability** | "Infinite hang with MCP search"; "MCP causes chat to freeze indefinitely" | 🔥🔥🔥🔥 |
| **Memory/Dream agent failure** | "MEMORY.md only has blank template"; "memory consolidation skipped entirely" | 🔥🔥🔥 |
| **Deployment friction** | "Requires root on Debian"; "Windows PowerShell Docker install fails" | 🔥🔥🔥 |
| **Provider limitations** | "No Kimi Code API"; "no llama.cpp official support" | 🔥🔥🔥 |

### Satisfaction Indicators
- Users actively building **practice-agent-teams** and **multi-agent workflows**
- Appreciation for **WeCom/DingTalk/QQ channel coverage** (enterprise use cases)
- Demand for **configurable upload limits** resolved quickly ([#3884](https://github.com/agentscope-ai/QwenPaw/issues/3884) closed)

### Dissatisfaction Indicators
- **"基础且高频使用的功能：聊天+工具调用+长流程这块保证稳定性和效率"** (SeoMP, [#2190](https://github.com/agentscope-ai/QwenPaw/issues/2190)) — core stability over features
- Multiple "serious problem" labels on MCP and session issues

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|----------|-----|------|---------------|
| [#2429](https://github.com/agentscope-ai/QwenPaw/issues/2429) Cron job interruption: "I noticed that you have interrupted me" | 32 days | **Medium** | Agent scheduling pattern undefined; needs architectural decision on background vs foreground execution |
| [#2495](https://github.com/agentscope-ai/QwenPaw/issues/2495) MCP tool visibility in UI | 30 days | **Low-Medium** | MCP UX completeness; blocked by higher-priority MCP stability fixes |
| [#3747](https://github.com/agentscope-ai/QwenPaw/issues/3747) DingTalk quoted messages/files | 6 days | **Low** | Enterprise feature; no assignee |
| [#3574](https://github.com/agentscope-ai/QwenPaw/pull/3574) Whisper transcription for voice input | 10 days | **Medium** | Under review; significant UX improvement for browser compatibility |
| [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) Async LLM-generated session titles | 4 days | **Low** | Quality-of-life; depends on async infrastructure |
| [#3913](https://github.com/agentscope-ai/QwenPaw/pull/3913) Memory system enhancements | 1 day | **High** | Major subsystem refactor; needs thorough review given [#3905](https://github.com/agentscope-ai/QwenPaw/issues/3905) memory failures in production |

**Maintainer Attention Required:** The memory subsystem PR [#3913](https://github.com/agentscope-ai/QwenPaw/pull/3913) arriving concurrently with [#3905](https://github.com/agentscope-ai/QwenPaw/issues/3905) (blank MEMORY.md) suggests either the fix is already in progress or the refactor may exacerbate existing issues—**coordinated review needed**.

---

*Digest generated from GitHub activity 2026-04-28 to 2026-04-29. All links reference https://github.com/agentscope-ai/QwenPaw.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-04-29

**Repository:** [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

---

## 1. Today's Overview

ZeptoClaw shows **zero human-driven development activity** on 2026-04-28/29. All 15 pull requests opened in the last 24 hours originate from Dependabot, covering routine dependency updates across Rust core, JavaScript frontend, GitHub Actions CI/CD, and Docker infrastructure. No issues were opened, updated, or closed, and no releases were published. The project appears to be in **maintenance-only mode** with automated tooling sustaining dependency hygiene, but no active feature development, bug fixes, or community engagement visible in this period. The high volume of dependency PRs (15 in one day) suggests either a backlog in automated updates or a broad dependency tree requiring regular attention. All PRs remain unmerged, indicating potential maintainer bandwidth constraints or a batch-merge workflow.

---

## 2. Releases

**No new releases.** No version tags or release notes published in the last 24 hours.

---

## 3. Project Progress

**No merged or closed PRs today.** All 15 PRs remain open.

| PR | Status | Description | Link |
|:---|:---|:---|:---|
| #549-#563 | All OPEN | Dependency updates only — no feature advancement | [PRs list](https://github.com/qhkm/zeptoclaw/pulls) |

**Notable dependency updates by category:**

| Category | Count | Key Updates |
|:---|:---|:---|
| **Rust core** | 5 | [tokio 1.50.0→1.51.1](https://github.com/qhkm/zeptoclaw/pull/550), [lettre 0.11.20→0.11.21](https://github.com/qhkm/zeptoclaw/pull/563), [libc 0.2.184→0.2.185](https://github.com/qhkm/zeptoclaw/pull/560), [webpki-roots 1.0.6→1.0.7](https://github.com/qhkm/zeptoclaw/pull/558), [zip 8.4.0→8.5.1](https://github.com/qhkm/zeptoclaw/pull/555) |
| **JavaScript/frontend** | 4 | [vite 8.0.0→8.0.8](https://github.com/qhkm/zeptoclaw/pull/561) in `/panel`, [astro 6.0.8→6.1.6](https://github.com/qhkm/zeptoclaw/pull/557) and [@astrojs/starlight 0.38.2→0.38.3](https://github.com/qhkm/zeptoclaw/pull/559) in `/landing/zeptoclaw/docs`, [astro 6.0.5→6.1.6](https://github.com/qhkm/zeptoclaw/pull/552) and [@astrojs/starlight 0.38.2→0.38.3](https://github.com/qhkm/zeptoclaw/pull/554) in `/landing/r8r/docs` |
| **GitHub Actions** | 4 | [taiki-e/install-action 2.75.10→2.75.17](https://github.com/qhkm/zeptoclaw/pull/562), [cargo-deny-action 2.0.16→2.0.17](https://github.com/qhkm/zeptoclaw/pull/556), [softprops/action-gh-release 2.6.1→3.0.0](https://github.com/qhkm/zeptoclaw/pull/553), [actions/upload-artifact 7.0.0→7.0.1](https://github.com/qhkm/zeptoclaw/pull/551) |
| **Docker** | 1 | [debian base image digest update](https://github.com/qhkm/zeptoclaw/pull/549) (`trixie-slim`) |

**Zero progress on features or fixes.** The project structure reveals multiple components (`panel`, `landing/zeptoclaw/docs`, `landing/r8r/docs`, core Rust) but no cross-component integration work today.

---

## 4. Community Hot Topics

**No community activity detected.** All PRs have:
- **0 comments**
- **0 reactions (👍)**

| Metric | Value |
|:---|:---|
| Human-authored PRs | 0 |
| Human comments on PRs | 0 |
| Issue discussions | 0 |

**Analysis:** The complete absence of community engagement suggests either:
- Project is early-stage with limited adoption
- Development occurs outside GitHub (Discord, private channels)
- Maintainer(s) may be inactive or focused on other priorities
- Dependabot noise drowning out human signal

**No items merit "hot topic" status.** The [tokio update](https://github.com/qhkm/zeptoclaw/pull/550) (async runtime, critical for Rust applications) and [softprops/action-gh-release v3.0.0](https://github.com/qhkm/zeptoclaw/pull/553) (major version bump, potential breaking changes) would typically warrant review priority, but neither has attracted attention.

---

## 5. Bugs & Stability

**No bug reports, crashes, or regressions identified today.**

| Severity | Count | Items |
|:---|:---|:---|
| Critical | 0 | — |
| High | 0 | — |
| Medium | 0 | — |
| Low | 0 | — |

**Stability considerations from dependency updates:**

| PR | Potential Risk | Mitigation Status |
|:---|:---|:---|
| [#550 tokio 1.51.1](https://github.com/qhkm/zeptoclaw/pull/550) | Patch release with "Fixed" items — review changelog for relevant fixes | Unmerged |
| [#553 action-gh-release 3.0.0](https://github.com/qhkm/zeptoclaw/pull/553) | **Major version bump** — potential breaking changes in release automation | Unmerged |
| [#549 debian digest](https://github.com/qhkm/zeptoclaw/pull/549) | Base image security updates | Unmerged |

**Risk assessment:** All security and stability updates are **backlogged**. The unmerged state of 15 dependency PRs, including a major version CI change, represents accumulated technical debt.

---

## 6. Feature Requests & Roadmap Signals

**No feature requests or roadmap discussions today.**

**Inferred from project structure:**

| Component | Technology | Likely Purpose |
|:---|:---|:---|
| Core | Rust (tokio, lettre, zip, webpki-roots) | Async backend, email handling, archive operations, TLS |
| Admin Panel | Vite-based JavaScript | Web UI for configuration/management |
| Documentation | Astro + Starlight | Multiple documentation sites (`zeptoclaw`, `r8r`) |
| CI/CD | GitHub Actions + cargo-deny | Rust-focused quality gates, release automation |

**Speculative roadmap signals:**
- Multi-product architecture (ZeptoClaw + R8R) suggests platform expansion
- Email capability (lettre) implies notification/agent communication features
- Archive handling (zip) suggests file/package distribution or plugin system
- No evidence of LLM/AI-specific dependencies in today's updates — unusual for "AI agent" project; may indicate abstraction layer or separate module

---

## 7. User Feedback Summary

**No direct user feedback available** — zero issues, zero discussions, zero human PRs.

**Proxy indicators:**

| Indicator | Assessment |
|:---|:---|
| Dependabot-only activity | Possible sign of low community contribution or maintainer gatekeeping |
| No issues filed | Either exceptional stability, low usage, or users reporting elsewhere |
| Dual landing sites (`zeptoclaw`, `r8r`) | Possible rebrand or product split in progress; may confuse users |
| Unmerged dependency backlog | Users may encounter known-fixed bugs in dependencies |

**Pain point hypothesis:** If users exist, they may be experiencing:
- Security exposure from outdated dependencies (webpki-roots, debian base)
- Build issues from stale CI actions
- Documentation lag if Astro/Starlight versions drift

---

## 8. Backlog Watch

**Critical backlog: 15 unreviewed dependency PRs**

| Age | Count | Risk Level |
|:---|:---|:---|
| 1 day (2026-04-28) | 15 | Elevated — batch unmerged |

**Maintainer attention needed:**

| Priority | PR | Rationale | Link |
|:---|:---|:---|:---|
| **P1** | #553 | Major version CI change — could break release pipeline | [PR #553](https://github.com/qhkm/zeptoclaw/pull/553) |
| **P1** | #550 | Core async runtime — security/stability fixes in tokio 1.51.1 | [PR #550](https://github.com/qhkm/zeptoclaw/pull/550) |
| **P2** | #558 | TLS root certificates — security-critical | [PR #558](https://github.com/qhkm/zeptoclaw/pull/558) |
| **P2** | #549 | OS base image — security patches | [PR #549](https://github.com/qhkm/zeptoclaw/pull/549) |
| **P2** | #563 | Email functionality — potential security fixes | [PR #563](https://github.com/qhkm/zeptoclaw/pull/563) |
| **P3** | #555, #560, #561, #562, #556, #551, #557, #559, #552, #554 | Routine minor updates | [PR list](https://github.com/qhkm/zeptoclaw/pulls) |

**Long-term concerns:**
- No issue triage activity (0 open issues) — unclear if this reflects health or neglect
- No release in observed period — version stagnation risk
- Documentation site split (`zeptoclaw` vs `r8r`) may indicate unresolved product direction

---

## Project Health Scorecard

| Dimension | Rating | Notes |
|:---|:---|:---|
| Code maintenance | ⚠️ Fair | Automated updates flowing, but unmerged |
| Security hygiene | ⚠️ Fair | Updates identified but not applied |
| Feature velocity | 🔴 Poor | Zero human development visible |
| Community engagement | 🔴 Poor | No issues, comments, or contributions |
| Release cadence | 🔴 Poor | No releases, no merge activity |
| Documentation | 🟡 Unknown | Infrastructure exists, content unknown |

**Overall assessment:** ZeptoClaw appears to be a **stalled or maintainer-absent project** with active automated dependency monitoring but no human oversight. The 15 unmerged Dependabot PRs and complete absence of issues or community interaction suggests either a private development workflow or project hibernation. For an "AI agent and personal AI assistant" project, the lack of visible AI/ML-specific development activity is notable.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-29

## 1. Today's Overview

ZeroClaw shows **intense development activity** with 44 PRs and 20 issues updated in the last 24 hours, though only 1 PR was merged/closed against 43 open, indicating a significant review backlog. The project is in a **pre-release stabilization phase** for v0.7.4, with heavy focus on web dashboard maturity, protocol correctness (ACP v1), and provider reliability. No new releases were cut, suggesting the team is accumulating fixes before shipping. The high volume of `priority:p1` items and security-related PRs indicates production-readiness efforts are accelerating.

---

## 2. Releases

**No new releases.** The v0.7.4 milestone is actively tracked in [#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877) but has not shipped. Notably, v0.7.3 was an emergency release due to "broken tags blowout," suggesting recent release infrastructure instability.

---

## 3. Project Progress

### Merged/Closed Today (1 PR, 4 Issues)

| Item | Type | Summary |
|------|------|---------|
| [#6162](https://github.com/zeroclaw-labs/zeroclaw/pull/6162) | **Merged PR** | Defensive `Array.isArray` guards on web API helpers to prevent crashes from malformed responses |
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | Closed Issue | Web/dashboard unavailability bug resolved (26 comments, S1 severity) |
| [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) | Closed Issue | Microkernel architecture RFC accepted — v0.7.0→v1.0.0 transition plan finalized |
| [#2628](https://github.com/zeroclaw-labs/zeroclaw/issues/2628) | Closed Issue | Container image with all build options — shipped |
| [#6187](https://github.com/zeroclaw-labs/zeroclaw/issues/6187) | Closed Issue | Missing config reference guide (S1 workflow blocked) |

### Key Advances

- **ACP Protocol v1**: Major PR [#6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167) implements full protocol with tool-call permissions and back-channel — restores Nori compatibility
- **Web Dashboard Maturation**: Multiple PRs for manual cron triggers ([#6164](https://github.com/zeroclaw-labs/zeroclaw/pull/6164)), cost tracking ([#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159)), and onboarding parity ([#6175](https://github.com/zeroclaw-labs/zeroclaw/issues/6175))
- **Observability**: OTel GenAI spans for tool calls ([#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009)) and runtime memory ops ([#6190](https://github.com/zeroclaw-labs/zeroclaw/pull/6190)) — stacked PRs nearing merge

---

## 4. Community Hot Topics

| Rank | Item | Comments/Activity | Underlying Need |
|------|------|-------------------|---------------|
| 🔥 1 | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) — Web dashboard unavailability | 26 comments, S1, **CLOSED** | Users need reliable first-run experience; build-system complexity is a barrier to adoption |
| 🔥 2 | [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) — Microkernel RFC | 10 comments, **ACCEPTED** | Architectural debt from reactive growth; community wants intentional design for v1.0 |
| 🔥 3 | [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) — Multi-agent UX flow RFC | 7 comments, pending vote | Orchestration of multiple agents is a core differentiator; design needs governance buy-in |
| 🔥 4 | [#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877) — v0.7.4 milestone | 6 comments | Release predictability; trust recovery after v0.7.3 emergency ship |

**Analysis**: The community is demanding **production stability** (dashboard works on first launch) and **architectural clarity** (microkernel, multi-agent). The high engagement on closed issues suggests users are validating fixes actively.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Risk |
|----------|-------|--------|---------|------|
| **S1** | [#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180) — llama-server services fail | OPEN | ❌ No | Blocks local LLM users |
| **S1** | [#6188](https://github.com/zeroclaw-labs/zeroclaw/issues/6188) — `enc2:` config undecryptable after identity rotation | OPEN | ❌ No | **Data loss risk**: all provider keys become unrecoverable |
| **S2** | [#6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097) — Local image reading failed | OPEN | ❌ No | Skills generating images break multimodal workflows |
| **S2** | [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) — Matrix voice transcription fails | OPEN | ❌ No | Audio format `.` parsing bug |
| **S2** | [#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) — `model_switch` tool doesn't persist | OPEN | ❌ No | Core agent behavior unreliable |
| **S3** | [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) — Nextcloud Talk wrong bot API | OPEN | ❌ No | Channel integration broken |

**Critical Concern**: [#6188](https://github.com/zeroclaw-labs/zeroclaw/issues/6188) is a **silent data loss bug** — encrypted provider configs become permanent garbage after common operations (Yocto reflash, volume migration). No recovery path documented. Needs immediate attention.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in v0.7.4+ | Signal Strength |
|---------|----------|----------------------|-----------------|
| **Dream Mode** (periodic memory consolidation) | [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) | Medium | Novel differentiation; 5 comments |
| **Web onboarding parity** with CLI | [#6175](https://github.com/zeroclaw-labs/zeroclaw/issues/6175) | **High** | P1 priority, active PRs, blocks adoption |
| **HMAC tool receipts** (security) | [#6182](https://github.com/zeroclaw-labs/zeroclaw/issues/6182) | High | Docs already claim it's shipped; gap is embarrassing |
| **Multi-agent UX flow** | [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | Medium (v0.8+) | RFC process; needs 2/3 vote |
| **Dynamic config map entries** (`providers.models.<name>`) | [#6053](https://github.com/zeroclaw-labs/zeroclaw/issues/6053) | High | Blocks reasonable config UX |
| **Matrix file uploads in partial stream mode** | [#6177](https://github.com/zeroclaw-labs/zeroclaw/issues/6177) | Medium | Niche but completeness issue |

**Prediction**: Web onboarding ([#6175](https://github.com/zeroclaw-labs/zeroclaw/issues/6175)), HMAC receipts ([#6182](https://github.com/zeroclaw-labs/zeroclaw/issues/6182)), and config map support ([#6053](https://github.com/zeroclaw-labs/zeroclaw/issues/6053)) will land before v0.8.0. Dream Mode and multi-agent are v0.8+ or v1.0 scope per microkernel transition.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **"First launch doesn't work"** | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) (dashboard build), [#6175](https://github.com/zeroclaw-labs/zeroclaw/issues/6175) (onboarding gap) | Critical — churn risk |
| **Config is hostile** | [#6053](https://github.com/zeroclaw-labs/zeroclaw/issues/6053) (dynamic maps), [#6188](https://github.com/zeroclaw-labs/zeroclaw/issues/6188) (encryption fragility), [#6187](https://github.com/zeroclaw-labs/zeroclaw/issues/6187) (missing docs) | High |
| **Channel integrations flaky** | [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) (Matrix), [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) (Nextcloud), [#5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837) (ACP cancellation) | Medium-High |
| **Local model support gaps** | [#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180) (llama-server), [#6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097) (local images) | High for self-hosters |

### Satisfaction Signals
- Microkernel RFC acceptance ([#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574)) shows trust in long-term direction
- Active contribution volume (44 PRs) indicates healthy contributor retention
- Security-conscious features (HMAC receipts, sandboxing docs) suggest mature priorities

---

## 8. Backlog Watch

| Item | Age | Blocker | Action Needed |
|------|-----|---------|---------------|
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) Multi-agent UX RFC | 10 days | Core team vote per #5577 §8.2 | **Maintainer vote call** — discussion period concluded 2026-04-26 |
| [#5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837) ACP cancellation support | 12 days | Blocked (label) | Needs dependency or design decision |
| [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) Configurable reply-intent | 17 days | In-progress | 3 👍, user-impacting; finish or unassign |
| [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) OTel tool spans | 8 days | Review backlog | Blocks stacked PR #6190; merge or provide feedback |

**Urgency**: [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) has completed its 7-day discussion window and is **awaiting mandatory governance vote** — this is a process bottleneck that could stall multi-agent work. [#6188](https://github.com/zeroclaw-labs/zeroclaw/issues/6188) (encryption rotation data loss) has no assignee or PR and represents a **silent production risk**.

---

*Digest generated from 20 issues and 44 PRs updated 2026-04-28. Project health: **Active development, review bottleneck, stabilization in progress**.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*