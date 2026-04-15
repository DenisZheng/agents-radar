# OpenClaw Ecosystem Digest 2026-04-07

> Issues: 500 | PRs: 500 | Projects covered: 11 | Generated: 2026-04-07 00:12 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-04-07

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a rapidly evolving codebase with substantial community engagement. The 417 open/active issues against 83 closed suggests a growing backlog that may strain maintainer capacity. A new release (v2026.4.5) dropped with breaking configuration changes, signaling aggressive technical debt cleanup. Cross-platform support gaps (Linux/Windows desktop apps) remain the most requested feature with 74 comments and 67 upvotes. The project appears to be in a **stability-versus-velocity tension**: major architectural work (MCP server registration, OAuth, compaction checkpoints) proceeds alongside critical regressions in Windows support, provider authentication, and session management.

---

## 2. Releases

### v2026.4.5 — 2026.4.5

| Aspect | Details |
|--------|---------|
| **Breaking Changes** | Removal of legacy public config aliases: `talk.voiceId`, `talk.apiKey`, `agents.*.sandbox.perSession`, `browser.ssrfPolicy.allowPrivateNetwork`, `hooks.internal.handlers`, and channel/group/room `allow` toggles |
| **Migration Path** | Users must migrate to canonical public paths and `enabled` booleans; no automatic migration provided |
| **Risk Assessment** | **HIGH** — These are commonly-used configuration keys; production deployments will fail on upgrade without manual intervention |

**Note**: Immediate follow-up issues (#61686, #61911, #61759) report CLI breakage after this release, suggesting insufficient pre-release validation.

---

## 3. Project Progress

### Merged/Closed PRs (Selected Significant Items)

| PR | Description | Impact |
|----|-------------|--------|
| [#42825](https://github.com/openclaw/openclaw/pull/42825) | Fix unknown-model fallback notice and model resolution edge cases | **UX**: Eliminates silent model fallback confusion |
| [#58276](https://github.com/openclaw/openclaw/pull/58276) | Add `thread.requireExplicitMention` config for Slack | **Control**: Prevents implicit thread mention bypass |
| [#34389](https://github.com/openclaw/openclaw/pull/34389) | Config option to disable implicit thread mentions | **Control**: Complement to above for strict mention gating |
| [#62116](https://github.com/openclaw/openclaw/pull/62116) | Gateway: fail closed critical auth stages | **Security**: Prevents auth stage bypass on exceptions |
| [#62180](https://github.com/openclaw/openclaw/pull/62180) | Fix failing `pnpm check` command | **DevEx**: Restores CI validation |
| [#61093](https://github.com/openclaw/openclaw/issues/61093) | Claude-cli backend model registration fix | **CLOSED**: Resolved claude-cli/* model_not_found errors |
| [#60772](https://github.com/openclaw/openclaw/issues/60772) | Exec host=node regression fix | **CLOSED**: Restored Windows node routing |
| [#61793](https://github.com/openclaw/openclaw/issues/61793) | dropThinkingBlocks prompt cache fix | **CLOSED**: Fixed Claude Opus 4.5+ prompt caching |
| [#31234](https://github.com/openclaw/openclaw/issues/31234) | z.ai provider API limit error | **CLOSED**: Provider-side resolution |
| [#26108](https://github.com/openclaw/openclaw/issues/26108) | Discord voice no live audio | **CLOSED**: Fixed decrypt receive path |
| [#29982](https://github.com/openclaw/openclaw/issues/29982) | allowGeneric subagent spawn blocking | **CLOSED**: Strict agent hierarchy enforcement |
| [#62125](https://github.com/openclaw/openclaw/issues/62125) | Bundled extensions async register() promise drop | **CLOSED**: Loader now awaits async registration |

### Active Development (Open PRs)

| PR | Description | Strategic Significance |
|----|-------------|------------------------|
| [#62160](https://github.com/openclaw/openclaw/pull/62160) | Plugin SDK: register managed MCP servers | **Major**: Native MCP server lifecycle management |
| [#62134](https://github.com/openclaw/openclaw/pull/62134) | OAuth authentication for remote MCP servers | **Major**: Unlocks enterprise MCP adoption |
| [#62146](https://github.com/openclaw/openclaw/pull/62146) | Gateway compaction checkpoints | **Reliability**: First-class compaction recovery |
| [#62201](https://github.com/openclaw/openclaw/pull/62201) | Mitigate stale toolResult replay pollution | **Stability**: Prevents session history corruption |
| [#62195](https://github.com/openclaw/openclaw/pull/62195) | Cron preHook gate for pre-run checks | **Ops**: Resource-aware job scheduling |
| [#61718](https://github.com/openclaw/openclaw/pull/61718) | GitHub Copilot embedding provider | **UX**: Zero-config memory search for Copilot users |
| [#62203](https://github.com/openclaw/openclaw/pull/62203) | Real-estate-assistant skill | **Vertical**: First industry-specific skill |

---

## 4. Community Hot Topics

### By Engagement (Comments + Reactions)

| Rank | Issue | Engagement | Core Need |
|------|-------|-----------|-----------|
| 1 | [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 74 comments, 67 👍 | **Platform parity**: macOS/iOS/Android have native apps; Linux/Windows users excluded from full feature set |
| 2 | [#23538](https://github.com/openclaw/openclaw/issues/23538) Anthropic setup-token auth 401 | 27 comments | **Auth reliability**: Setup flow succeeds, runtime fails — credential lifecycle bug |
| 3 | [#46049](https://github.com/openclaw/openclaw/issues/46049) LLM timeout ignores settings | 22 comments, 7 👍 | **Operational control**: Hardcoded timeouts breaking long-running workflows |
| 4 | [#14593](https://github.com/openclaw/openclaw/issues/14593) Skill install fails in Docker (brew) | 21 comments, 16 👍 | **Containerization**: Docker image lacks Linux-native skill installation |
| 5 | [#52875](https://github.com/openclaw/openclaw/issues/52875) Session_send "no session found" | 17 comments | **Inter-agent communication**: Regression breaks agent-to-agent messaging |

### Underlying Needs Analysis

- **Cross-platform equity**: The Linux/Windows gap (#75) is a **strategic blocker** for enterprise adoption and developer mindshare. 67 upvotes with no maintainer response in 3+ months suggests roadmap misalignment.
- **Configuration reliability**: Multiple auth/timeout issues indicate the configuration system is **leaky abstraction** — settings exist but aren't respected at runtime.
- **Container-native workflows**: Docker users are second-class citizens; skills assume macOS package managers.

---

## 5. Bugs & Stability

### Critical/Severe (Data Loss, Security, Complete Failure)

| Issue | Severity | Description | Fix PR? |
|-------|----------|-------------|---------|
| [#60213](https://github.com/openclaw/openclaw/issues/60213) | **CRITICAL** | Compaction silently kills session — **complete conversation memory loss** | None |
| [#61911](https://github.com/openclaw/openclaw/issues/61911) | **CRITICAL** | Windows: `ERR_UNSUPPORTED_ESM_URL_SCHEME` — **fresh install broken** | [#62194](https://github.com/openclaw/openclaw/pull/62194) |
| [#61686](https://github.com/openclaw/openclaw/issues/61686) | **HIGH** | 2026.4.5 npm update leaves CLI broken — **missing plugin runtime deps** | None |
| [#61759](https://github.com/openclaw/openclaw/issues/61759) | **HIGH** | nextcloud-talk plugin broken in 2026.4.5 — **missing activate export** | None |
| [#46049](https://github.com/openclaw/openclaw/issues/46049) | **HIGH** | LLM timeout ignores all configured settings — **workflows fail** | None |
| [#61847](https://github.com/openclaw/openclaw/issues/61847) | **HIGH** | `gateway install --force` breaks AWS credential discovery | None |

### Regressions (Worked Before)

| Issue | Regression From | Impact |
|-------|---------------|--------|
| [#53959](https://github.com/openclaw/openclaw/issues/53959) | 2026.3.23-2 | gpt-5.3-codex stops executing tools |
| [#52875](https://github.com/openclaw/openclaw/issues/52875) | 2026-3-22 | Session_send inter-agent messaging broken |
| [#45110](https://github.com/openclaw/openclaw/issues/45110) | Recent | Prompt cache disabled → **1000x inference cost increase** |
| [#43233](https://github.com/openclaw/openclaw/issues/43233) | 2026.3.8 | Telegram polling stall, forced restart loop |
| [#59257](https://github.com/openclaw/openclaw/issues/59257) | Recent | Cron model override silently ignored |

### Stability Patterns

- **v2026.4.5 release quality**: 3+ immediate breakage reports suggest insufficient integration testing on Windows and plugin loading paths.
- **Cost regressions**: [#45110](https://github.com/openclaw/openclaw/issues/45110) (prompt cache) and [#31708](https://github.com/openclaw/openclaw/issues/31708) (5x API costs) indicate optimization work is being undone by architectural changes.

---

## 6. Feature Requests & Roadmap Signals

### High-Probability Near-Term (Active PRs or Strong Signals)

| Feature | Evidence | Likelihood |
|---------|----------|------------|
| **Managed MCP servers** | [#62160](https://github.com/openclaw/openclaw/pull/62160) open, substantial implementation | **95%** — v2026.4.6 or .5 |
| **OAuth for MCP** | [#62134](https://github.com/openclaw/openclaw/pull/62134) open, enterprise-critical | **90%** — paired with above |
| **Compaction checkpoints** | [#62146](https://github.com/openclaw/openclaw/pull/62146) open, addresses #60213 | **85%** — data loss prevention |
| **GitHub Copilot embeddings** | [#61718](https://github.com/openclaw/openclaw/pull/61718) open, low-risk | **80%** |
| **Cron preHook gates** | [#62195](https://github.com/openclaw/openclaw/pull/62195) open, ops-focused | **75%** |

### Medium-Term (Strong Community Demand, No Active PR)

| Feature | Evidence | Blockers |
|---------|----------|----------|
| **Linux/Windows desktop apps** | [#75](https://github.com/openclaw/openclaw/issues/75) — 74 comments, 67 👍 | Resource allocation; macOS/iOS priority |
| **Encrypted secrets/keystore** | [#7916](https://github.com/openclaw/openclaw/issues/7916) (17 👍), [#10659](https://github.com/openclaw/openclaw/issues/10659) (10 👍) | Design consensus on encryption backend |
| **Agent-to-Agent economy protocol** | [#28106](https://github.com/openclaw/openclaw/issues/28106) — RFC open | Complex; depends on MCP stabilization |
| **Pre-response enforcement hooks** | [#13583](https://github.com/openclaw/openclaw/issues/13583) — hard gates for compliance | Architectural: requires execution model changes |

### Predicted v2026.5.0 Themes

Based on active development: **MCP ecosystem maturity**, **session reliability**, **enterprise auth**, and **cost optimization restoration**.

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Category | Specific Complaints | Frequency |
|----------|---------------------|-----------|
| **Platform exclusion** | "Linux and Windows are missing" — feature parity demand | Dominant |
| **Silent failures** | "silently kills session", "silently ignore model override", "silently stop working" | High |
| **Cost surprises** | "inference costs x1000", "5x API costs" | Moderate-High |
| **Configuration fragility** | "cryptic errors", "settings not respected", "breaks after update" | High |
| **Docker neglect** | "brew not installed on Linux container" | Moderate |

### Satisfaction Indicators

- **Strong**: Active PR contribution, skill ecosystem growth (real-estate-assistant), rapid security fixes (fail-closed auth)
- **Weak**: Release stability, cross-platform equity, configuration system predictability

### Use Case Evolution

- **Enterprise**: OAuth, SSO, audit hooks, pre-response gates emerging as requirements
- **Developer**: Copilot integration, local Ollama support, container-native workflows
- **Power users**: Agent-to-agent delegation, custom skills, memory search

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>30 days, high engagement, no response)

| Issue | Age | Engagement | Risk |
|-------|-----|-----------|------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows apps | 3+ months | 74 comments, 67 👍 | **Community trust erosion**; competitive disadvantage |
| [#7916](https://github.com/openclaw/openclaw/issues/7916) Encrypted secrets | 2+ months | 17 comments, 11 👍 | Security audit blocker |
| [#22278](https://github.com/openclaw/openclaw/issues/22278) JSON Schema publishing | 1.5 months | 11 comments, 11 👍 | Developer experience; config errors |
| [#28106](https://github.com/openclaw/openclaw/issues/28106) Agent economy RFC | 1+ month | 6 comments | Strategic differentiation |

### PRs At Risk of Stagnation

| PR | Status | Risk |
|----|--------|------|
| [#55396](https://github.com/openclaw/openclaw/pull/55396) Kudosity SMS channel | Open since Mar 26 | Channel diversity; contributor retention |
| [#59866](https://github.com/openclaw/openclaw/pull/59866) NVIDIA endpoints refresh | Open since Apr 2 | Partner relationship; model catalog accuracy |

### Recommended Maintainer Actions

1. **Acknowledge #75** with roadmap timeline — 67 upvotes deserve visibility
2. **Fast-track Windows fixes** — [#61911](https://github.com/openclaw/openclaw/issues/61911) is breaking new user acquisition
3. **Stabilize release process** — v2026.4.5 had 3+ immediate regressions; consider beta channel
4. **Document configuration migration** — breaking changes in v2026.4.5 lack automated tooling

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Comparison Report
*Generated: 2026-04-07*

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem exhibits **intense competitive velocity** with 9 active projects showing substantial daily activity (12–500+ items/day). The space is consolidating around **MCP (Model Context Protocol) as the de facto integration standard**, with 6+ projects actively implementing server lifecycle management, OAuth flows, and tool registries. **Cross-platform equity remains unresolved**—Linux/Windows desktop gaps persist across major players while mobile-first and container-native workflows emerge as differentiators. The ecosystem is simultaneously maturing toward enterprise requirements (multi-tenancy, auditability, cost controls) while struggling with production stability, as evidenced by multiple critical regressions in recent releases.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
|:---|:---:|:---:|:---|:---:|
| **OpenClaw** | 417 active / 83 closed | 500 updated | v2026.4.5 (breaking, HIGH risk) | ⚠️ **7/10** — High velocity, stability debt |
| **IronClaw** | 33 updated | 50 updated | v0.24.1 pending | ⚠️ **6/10** — Critical security gaps, customer pain |
| **NanoBot** | 26 updated | 56 updated | v0.1.5 (version mismatch bug) | ⚠️ **6/10** — Growing pains, architectural fixes needed |
| **CoPaw** | 24 active | 15 updated | None | ✅ **7/10** — Healthy growth, MCP debt |
| **Moltis** | 11 updated | 9 updated (6 merged) | 20260406.04 (fresh) | ✅ **8/10** — Responsive maintenance, feature expansion |
| **NanoClaw** | 8 updated | 26 updated | None | ✅ **7/10** — High velocity, infra gaps |
| **PicoClaw** | 8 fresh | 6 updated | v0.2.5 nightly | ⚠️ **5/10** — Provider fragility, WebUI broken |
| **NullClaw** | 1 active | 7 updated | None (v2026.3.21 stable) | ⚠️ **6/10** — Regression risk, Admin API progress |
| **ZeptoClaw** | 4 updated | 8 updated (2 merged) | None | ✅ **7/10** — Tight issue→PR cycles, scaling challenges |
| **LobsterAI** | 0 active | 11 updated (0 merged) | None | ⚠️ **5/10** — Review bottleneck, accumulation risk |
| **TinyClaw** | — | — | — | ❌ **N/A** — No activity |

*\*Health score considers: velocity, release stability, bug resolution speed, maintainer responsiveness, architectural maturity*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 PRs/24h, 500 issues — 10× nearest peer | IronClaw (50), NanoBot (56), NanoClaw (26) |
| **Ecosystem breadth** | Native apps (macOS/iOS/Android), 10+ channel integrations | Most peers web/CLI-first; Moltis catching up |
| **MCP maturity** | Managed servers + OAuth in active PR (#62160, #62134) | CoPaw struggling with lifecycle bugs; NanoBot expanding to resources/prompts |
| **Enterprise features** | Gateway compaction checkpoints, fail-closed auth, Cron preHooks | IronClaw building similar; others lag |
| **Skill ecosystem** | Real-estate-assistant vertical, bundled extensions | CoPaw planning hub; NanoClaw has isolated sessions |

### Technical Approach Differences
- **Configuration-first architecture**: Aggressive deprecation of legacy keys (v2026.4.5 breaking changes) vs. peers' additive approaches
- **Gateway pattern**: Explicit gateway/node topology vs. Moltis's unified server or ZeptoClaw's embedded model
- **Compaction-based memory**: Checkpoints for conversation recovery vs. NanoBot's unbounded history crisis

### Community Size Comparison
OpenClaw operates at **infrastructure-scale engagement** (500 items/day) comparable to major language ecosystems, while peers operate at **product-scale** (10–60 items/day). However, this creates **maintainer capacity strain**—417 open issues vs. 83 closed suggests backlog accumulation that smaller projects (Moltis: 6/9 PRs merged) avoid.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Evidence |
|:---|:---|:---|
| **MCP ecosystem hardening** | OpenClaw, NanoBot, CoPaw, NanoClaw | Server registration (#62160), lifecycle cleanup (#2979), OAuth (#62134), resources/prompts expansion (#2861) |
| **Multi-tenancy / isolation** | IronClaw, NanoClaw, ZeptoClaw | Ownership model (MT-1–MT-6), per-chat workspace (#2836), session-scoped skills (#1494) |
| **Cost optimization / routing** | OpenClaw, NanoClaw, Moltis | Keyword-based pre-turn routing (#1680–1682), prompt caching (#571), model override fixes |
| **Local/edge deployment** | PicoClaw, NanoBot, CoPaw, Moltis | iStoreOS gateway (#2373), Ollama reliability (#2829), llama.cpp auto-update (#2889), local Whisper (#570) |
| **Cross-platform desktop parity** | OpenClaw, CoPaw, PicoClaw | Linux/Windows apps (#75), Windows client crashes (#2911), Android APK workflows |
| **Container-native workflows** | OpenClaw, NullClaw, IronClaw | Docker skill install (#14593), NULLCLAW_HOME respect (#692), uid 65534 support |
| **Production reliability** | All 9 active projects | Compaction checkpoints, deadlock fixes, container lifecycle, queue management |

---

## 5. Differentiation Analysis

| Project | Core Differentiation | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Scale + enterprise gateway | Teams, SaaS builders | Distributed gateway/node, aggressive config evolution |
| **IronClaw** | NEAR blockchain integration + multi-tenant SaaS | Web3 + enterprise teams | WASM sandboxing, on-chain agent identity |
| **NanoBot** | Plugin-first, multilingual, rapid channel expansion | International developers, self-hosters | Pure plugin architecture, Python ecosystem |
| **Moltis** | "Secure persistent personal agent server" | Privacy-conscious individuals, small teams | Unified server, cron-native, proxy-per-channel |
| **CoPaw** | Local model emphasis, skill ecosystem | Power users, China market | Desktop-first, llama.cpp integration, hub planned |
| **NanoClaw** | Claude-native, Discord thread isolation | Community builders, async workflows | Container-per-agent, thread-as-tenant |
| **PicoClaw** | Edge/embedded, mobile-first | IoT, mobile operators | Go-based, lightweight, gateway pattern |
| **NullClaw** | Zig systems programming, minimal footprint | Systems engineers, embedded | Zig native, yolo mode, Admin API |
| **ZeptoClaw** | Research automation, OpenAI compatibility | Knowledge workers, API consumers | Browser automation, context compaction |
| **LobsterAI** | Scheduled task specialization | Automation-focused professionals | Electron, "定时任务" vertical |

---

## 6. Community Momentum & Maturity

### Rapid Iteration Tier (>40 items/day, high breakage risk)
| Project | Pattern | Risk |
|:---|:---|:---|
| OpenClaw | Aggressive feature delivery, breaking releases | v2026.4.5: 3+ immediate regressions |
| IronClaw | Security hardening + customer firefighting | MT-1/MT-2 critical, 5–10s response times |
| NanoBot | v0.1.5 growing pains, architectural debt | Unbounded history, thinking stream UX |

### Stabilization Tier (10–30 items/day, reliability focus)
| Project | Pattern | Trajectory |
|:---|:---|:---|
| Moltis | Responsive maintenance, feature expansion | Healthy: 6/9 PRs merged, same-day fixes |
| NanoClaw | High contributor growth, infra debt | SSL lapse (#1503), Anthropic risk (#1669) |
| CoPaw | MCP hardening, first-time contributors | Production perception gap ("toy vs. tool") |
| ZeptoClaw | Tight issue→PR cycles, scaling architecture | Concurrency RFC needed (#486) |

### Accumulation Risk Tier (low merge velocity)
| Project | Pattern | Concern |
|:---|:---|:---|
| LobsterAI | 11 PRs, 0 merged | Review bottleneck, scheduled task batch needs coordination |
| PicoClaw | WebUI broken (#2354), no assignee | Blocking new user acquisition |
| NullClaw | Shell tool regression (#779), no response | Core functionality broken, version pinning observed |

### Dormant
| Project | Status |
|:---|:---|
| TinyClaw | No activity — potential abandonment |

---

## 7. Trend Signals

| Trend | Evidence | Value for AI Agent Developers |
|:---|:---|:---|
| **MCP as universal glue** | 6+ projects implementing; OpenClaw/CoPaw/NanoBot converging on server lifecycle standards | Build once, integrate everywhere; prioritize MCP-compatible tool design |
| **Cost-aware architecture** | Keyword routing (NanoClaw), prompt caching (Moltis), model override fixes (OpenClaw) | Design for token economics; users will demand visibility and control |
| **Async/concurrent execution** | ZeptoClaw #486, IronClaw heartbeat dispatch, OpenClaw cron preHooks | Blocking architectures hit scaling walls; plan for job queues and status streaming |
| **Local-first + edge deployment** | llama.cpp, Ollama, Whisper, iStoreOS integrations across 4+ projects | Privacy and cost pressures drive on-premise requirements; cloud-only strategies risk exclusion |
| **Multi-modal document RPA** | PDF ingestion (Moltis #563), browser automation (ZeptoClaw #459), image corruption fixes (CoPaw) | Text-only agents insufficient; plan for structured document and web interaction pipelines |
| **Enterprise isolation demands** | Per-chat workspaces, session-scoped skills, container lifecycle management | Single-tenant assumptions break at scale; design tenancy boundaries early |
| **Configuration fragility crisis** | OpenClaw breaking changes, NanoBot version mismatch, PicoClaw provider bugs | Invest in schema validation, migration tooling, and runtime config verification |

---

*Report synthesized from 1,400+ data points across 10 repositories. For detailed per-project analysis, refer to individual digests.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-07

---

## 1. Today's Overview

NanoBot shows **high community velocity** with 56 PRs and 26 issues updated in the last 24 hours, reflecting active development around the recent v0.1.5 release. The project is experiencing growing pains typical of rapid adoption: version mismatch bugs, platform-specific regressions (Windows, WeChat, Matrix), and security boundary concerns. Core infrastructure work dominates—MCP ecosystem expansion, multi-channel stability, and memory/session management—while user-facing friction points (thinking stream visibility, tool call reliability) remain unresolved. The 30:26 open-to-closed PR ratio suggests healthy review throughput but also indicates backlog accumulation.

---

## 2. Releases

### v0.1.5 (2026-04-06)
- **66 PRs merged, 27 new contributors**
- **First release with official website**: [nanobot.wiki](https://nanobot.wiki) with multilingual documentation (EN, ZH, JA, KO, ES)
- **Migration note**: Version string inconsistency detected—`__init__.py` reports `0.4.1` while `pyproject.toml` declares `0.1.5`. Fix PR [#2860](https://github.com/HKUDS/nanobot/pull/2860) addresses this.

---

## 3. Project Progress

### Merged/Closed Today (8 PRs)

| PR | Description | Impact |
|:---|:---|:---|
| [#2864](https://github.com/HKUDS/nanobot/pull/2864) | Fix: `WriteFileTool` success message accuracy (bytes → characters) | Correctness for non-ASCII content |
| [#2863](https://github.com/HKUDS/nanobot/issues/2863) | Same fix, issue closed | — |
| [#2856](https://github.com/HKUDS/nanobot/issues/2856) | Version mismatch documented | — |
| [#2848](https://github.com/HKUDS/nanobot/pull/2848) | Plugin channel config compatibility | Extensibility |
| [#2525](https://github.com/HKUDS/nanobot/pull/2525) | Reduced false-positive progress reporting | UX reliability |
| [#2796](https://github.com/HKUDS/nanobot/issues/2796) | Exec tool localhost blocking resolved | Local service integration restored |
| [#2369](https://github.com/HKUDS/nanobot/issues/2369) | Cron reminder suppression fixed | Core functionality |
| [#2839](https://github.com/HKUDS/nanobot/issues/2839) | Web search disable config now respected | Configuration integrity |

### Active Development (30 open PRs)
- **Web channel**: [#2871](https://github.com/HKUDS/nanobot/pull/2871) adds SSE streaming browser interface as pure plugin
- **MCP expansion**: [#2861](https://github.com/HKUDS/nanobot/pull/2861) exposes resources/prompts beyond tools
- **Platform hardening**: Matrix, Discord, Telegram, Feishu/Lark channel fixes

---

## 4. Community Hot Topics

| Rank | Item | Activity | Analysis |
|:---|:---|:---|:---|
| 1 | [#2638](https://github.com/HKUDS/nanobot/issues/2638) Unbounded session history | 5 comments, 👍1 | **Critical reliability concern**: Memory consolidation failures cause unbounded growth → unresponsive agents. Underlying need: circuit breakers and hard limits in session management |
| 2 | [#2796](https://github.com/HKUDS/nanobot/issues/2796) Exec tool localhost blocking | 5 comments, 👍1, **CLOSED** | SSRF protection vs. local development tension—resolved with nuanced allowlisting |
| 3 | [#2795](https://github.com/HKUDS/nanobot/issues/2795) Thinking stream visible in Telegram | 4 comments | **UX regression**: v0.1.4→latest exposes internal reasoning. Users want clean output |
| 4 | [#2871](https://github.com/HKUDS/nanobot/pull/2871) Web channel with SSE | New, high engagement | Strong demand for browser-native interface without core modifications |

**Underlying needs identified**:
- **Transparency control**: Users want visibility into *when* agent is thinking vs. final output
- **Local-first development**: Security features must not block legitimate localhost workflows
- **Session hygiene**: Production deployments need memory bounds guarantees

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#2828](https://github.com/HKUDS/nanobot/issues/2828) | DuckDuckGo search hangs entire system (unresponsive to SIGTERM, requires force kill) | **No PR** — platform-level freeze |
| 🔴 **Critical** | [#2638](https://github.com/HKUDS/nanobot/issues/2638) | Unbounded session history → agent unresponsive | **No PR** — architectural fix needed |
| 🟡 **High** | [#2829](https://github.com/HKUDS/nanobot/issues/2829) | Ollama tool calling broken (formatting issue) | **No PR** — local LLM compatibility |
| 🟡 **High** | [#2846](https://github.com/HKUDS/nanobot/issues/2846) | CLI crashes on Unicode surrogates (Windows) | PR [#2869](https://github.com/HKUDS/nanobot/pull/2869) open |
| 🟡 **High** | [#2858](https://github.com/HKUDS/nanobot/issues/2858) | Tool call parameter validation failures | PR [#2859](https://github.com/HKUDS/nanobot/pull/2859) open |
| 🟡 **High** | [#2857](https://github.com/HKUDS/nanobot/issues/2857) | Version mismatch (0.4.1 vs 0.1.5) | PR [#2860](https://github.com/HKUDS/nanobot/pull/2860) open |
| 🟡 **High** | [#2826](https://github.com/HKUDS/nanobot/issues/2826) | File deletion escapes `restrictToWorkspace` | **No PR** — security boundary failure |
| 🟢 **Medium** | [#2757](https://github.com/HKUDS/nanobot/issues/2757) | OpenAI `max_tokens` vs `max_completion_tokens` | **No PR** — API compatibility |
| 🟢 **Medium** | [#2853](https://github.com/HKUDS/nanobot/issues/2853) | Gemini sub-agent lacks completion details | Workaround identified, no PR |
| 🟢 **Medium** | [#2851](https://github.com/HKUDS/nanobot/issues/2851) | Matrix `e2eeEnabled` config alias broken | PR [#2855](https://github.com/HKUDS/nanobot/pull/2855) open |

**Regression pattern**: v0.1.5 release introduced multiple breaking changes—thinking stream visibility, Windows bash enforcement (fixed), version string drift.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version |
|:---|:---|:---|
| [#2870](https://github.com/HKUDS/nanobot/issues/2870) | **Reaction callbacks as memory signals** — ingest 👍/❤️ as feedback | **High** — small surface, high value, RFC format indicates maintainer interest |
| [#2845](https://github.com/HKUDS/nanobot/issues/2845) | **Native MPP (Machine Payments Protocol)** — autonomous service payments | **Medium** — aligns with agent autonomy trend, but external protocol dependency |
| [#2836](https://github.com/HKUDS/nanobot/issues/2836) | **Per-chat workspace isolation** (WhatsApp) | **High** — privacy-critical, pattern applicable to all channels |
| [#2837](https://github.com/HKUDS/nanobot/issues/2837) | **Human-in-loop pause** — 12h silence after human reply | **Medium** — social feature, implementation straightforward |
| [#2820](https://github.com/HKUDS/nanobot/issues/2820) | **`/status` expansion** — web search quota visibility | **Medium** — operational tooling, depends on provider abstraction |
| [#2854](https://github.com/HKUDS/nanobot/issues/2854) + [#2861](https://github.com/HKUDS/nanobot/pull/2861) | **Full MCP spec support** (resources, prompts) | **High** — PR already open |

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Output cleanliness** | [#2795](https://github.com/HKUDS/nanobot/issues/2795) thinking stream pollution | High — daily UX friction |
| **Local LLM reliability** | [#2829](https://github.com/HKUDS/nanobot/issues/2829) Ollama broken | High — self-hosted users blocked |
| **System stability** | [#2828](https://github.com/HKUDS/nanobot/issues/2828) hard freezes, [#2638](https://github.com/HKUDS/nanobot/issues/2638) unbounded memory | Critical — production risk |
| **Security boundaries** | [#2826](https://github.com/HKUDS/nanobot/issues/2826) workspace escape, [#2796](https://github.com/HKUDS/nanobot/issues/2796) over-blocking | High — trust erosion |
| **Configuration confusion** | [#2839](https://github.com/HKUDS/nanobot/issues/2839) web search disable ignored, [#2851](https://github.com/HKUDS/nanobot/issues/2851) config aliases | Medium — documentation gap |

### Positive Signals
- **Multilingual docs launch** well-received (27 new contributors)
- **Plugin architecture** enabling community channels without core changes
- **MCP ecosystem** expansion showing strategic vision

### Use Case Tensions
| User Type | Need | Conflict |
|:---|:---|:---|
| Self-hosters (Ollama) | Local, private, cheap | Tool calling reliability |
| Enterprise | Isolation, auditability, quotas | Default open permissions |
| Power users | Deep integrations (PinchTab, etc.) | Security guardrails |
| Casual users | Simple, clean chat | Exposed complexity (thinking streams) |

---

## 8. Backlog Watch

### Long-Standing Issues Needing Attention

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#2638](https://github.com/HKUDS/nanobot/issues/2638) Session history unbounded | 8 days | **Production stability** | Architectural decision: hard limit vs. compression vs. eviction |
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) `/stop` loses session state | 12 days | Data loss on cancellation | Review pending—preserves user message/tool calls |
| [#2674](https://github.com/HKUDS/nanobot/pull/2674) Feishu/Lark global support | 7 days | Enterprise adoption (China/global) | Config extension, low risk |
| [#1681](https://github.com/HKUDS/nanobot/issues/1681) Matrix E2EE | ~30 days | **Security/privacy** | Closed but pattern of E2EE issues continues (#2851) |

### Maintainer Attention Recommended
- **Critical stability**: [#2828](https://github.com/HKUDS/nanobot/issues/2828) (system freeze) — may indicate async/event loop deadlock
- **Security review**: [#2826](https://github.com/HKUDS/nanobot/issues/2826) — `restrictToWorkspace` bypass for deletion
- **API drift**: [#2757](https://github.com/HKUDS/nanobot/issues/2757) — OpenAI provider parameter modernization

---

*Digest generated from 56 PRs and 26 issues updated 2026-04-06*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-07

## 1. Today's Overview

PicoClaw shows **high community activity** with 8 fresh issues and 6 PRs updated in the last 24 hours, indicating an engaged user base around the v0.2.5 nightly release. The project is experiencing **growing pains** with multiple provider integration bugs (Gemini, OpenRouter, Ollama) and UI/UX friction points across WebUI and Android platforms. Security consciousness is emerging with a terminal sanitization PR addressing unsafe control characters. No new releases were cut, suggesting maintainers are accumulating fixes before a stable release. The volume of configuration and channel-related issues signals the project is expanding its integration surface faster than documentation can keep pace.

---

## 2. Releases

**No new releases** — v0.2.5 nightly remains the current version.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Description | Impact |
|:---|:---|:---|
| [#2379](https://github.com/sipeed/picoclaw/pull/2379) | Telegram Codex Orchestrator feature | **Closed without merge** — complex Telegram integration abandoned or superseded |
| [#2353](https://github.com/sipeed/picoclaw/pull/2353) | LOCOMO memory benchmark for retrieval evaluation | **Merged** — Adds `cmd/membench/` for quantitative short-memory retrieval testing; enables data-driven improvements to seahorse memory system |

### Advancing Work

- **Terminal security hardening**: [#2378](https://github.com/sipeed/picoclaw/pull/2378) provides comprehensive fix for unsafe terminal control characters (addresses [#2377](https://github.com/sipeed/picoclaw/issues/2377))
- **Provider configuration fixes**: [#2372](https://github.com/sipeed/picoclaw/pull/2372) resolves three distinct auth/lookup bugs affecting OpenRouter, Ollama, and legacy API key formats
- **CLI modernization**: [#2229](https://github.com/sipeed/picoclaw/pull/2229) introduces structured terminal UI with boxed, column-aligned output
- **Telegram reliability**: [#2209](https://github.com/sipeed/picoclaw/pull/2209) adds TLS trust configuration for restricted environments (Termux, corporate proxies)

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Item | Activity | Analysis |
|:---|:---|:---|:---|
| 1 | [#1372](https://github.com/sipeed/picoclaw/issues/1372) — OpenIM plugin request | 5 comments, 2+ months old | **Enterprise integration demand**: Users want OpenIM (open-source WeChat Work alternative) support, indicating PicoClaw is being evaluated for business messaging workflows. Stalled since March — needs maintainer triage. |
| 2 | [#2354](https://github.com/sipeed/picoclaw/issues/2354) — WebUI input unresponsive | 2 comments, critical UX bug | **Platform reliability concern**: Core WebUI functionality broken (disabled inputs/buttons). User notes shell channel works, isolating bug to frontend. High priority for user retention. |
| 3 | [#2367](https://github.com/sipeed/picoclaw/issues/2367) — Chinese localization leak | 1 comment | **Polish/quality signal**: English mode incomplete — suggests i18n system gaps. Easy fix, low effort/high visibility. |

### Underlying Needs
- **Multi-channel enterprise readiness** (OpenIM, Telegram robustness)
- **Cross-platform UI consistency** (WebUI, Android APK)
- **Provider ecosystem breadth** (Gemini, Qwen, DeepSeek compatibility)

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **Critical** | [#2354](https://github.com/sipeed/picoclaw/issues/2354) | WebUI completely non-functional for input — users cannot send messages | 🔴 **No PR** — frontend regression, needs immediate attention |
| **High** | [#2371](https://github.com/sipeed/picoclaw/issues/2371) | Agent loop crash `loop.go:2171` with Qwen models via OpenRouter/Ollama | 🟡 **PR #2372** addresses related provider lookup bugs — may resolve |
| **High** | [#2374](https://github.com/sipeed/picoclaw/issues/2374) | Gemini models fail despite working curl — API base/key handling broken | 🟡 **PR #2372** includes Gemini config fixes — verification needed |
| **Medium** | [#2377](https://github.com/sipeed/picoclaw/issues/2377) | Terminal control character injection in exec/logs | 🟢 **PR #2378** ready — security hardening |
| **Medium** | [#2373](https://github.com/sipeed/picoclaw/issues/2373) | Gateway missing `stop` command support (Chinese: "gateway不支持 stop 等命令") | 🔴 **No PR** — control plane gap |
| **Low** | [#2367](https://github.com/sipeed/picoclaw/issues/2367) | Untranslated Chinese string in settings | 🔴 **No PR** — cosmetic |

### Stability Assessment
Provider configuration layer is **fragile** — multiple auth and model resolution bugs suggest the config system needs architectural review. WebUI regression is **blocking new user adoption**.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| OpenIM channel plugin | [#1372](https://github.com/sipeed/picoclaw/issues/1372) | Medium | Enterprise demand clear; channel architecture exists; needs implementation |
| Disable Enter-to-send (mobile) | [#2376](https://github.com/sipeed/picoclaw/issues/2376) | **High** | Simple config toggle; Android-specific UX pain; low implementation cost |
| Structured CLI UI | [#2229](https://github.com/sipeed/picoclaw/pull/2229) | **High** | PR already open; modernizes user experience |
| Memory benchmark tooling | [#2353](https://github.com/sipeed/picoclaw/pull/2353) | **Shipped** | Merged — enables future retrieval quality improvements |
| Telegram TLS flexibility | [#2209](https://github.com/sipeed/picoclaw/pull/2209) | Medium | PR open; solves real deployment friction in restricted environments |

**Predicted v0.2.6 contents**: Provider config fixes (#2372), terminal sanitization (#2378), CLI UI refresh (#2229), mobile UX toggle (#2376), and Telegram TLS options (#2209).

---

## 7. User Feedback Summary

### Pain Points
| Category | Evidence | Intensity |
|:---|:---|:---|
| **Provider setup complexity** | [#2371](https://github.com/sipeed/picoclaw/issues/2371), [#2374](https://github.com/sipeed/picoclaw/issues/2374) — "what a correct command should i use?" | High — users reverse-engineering config from curl |
| **WebUI reliability** | [#2354](https://github.com/sipeed/picoclaw/issues/2354) — "Normal conversations are not possible" | Critical — complete feature failure |
| **Mobile UX friction** | [#2376](https://github.com/sipeed/picoclaw/issues/2376) — unexpected Enter behavior on Android | Medium — daily annoyance |
| **Documentation gaps** | [#2374](https://github.com/sipeed/picoclaw/issues/2374) — working curl config fails in PicoClaw | High — config schema unclear |

### Use Cases Emerging
- **Edge/embedded deployment**: iStoreOS gateway usage ([#2373](https://github.com/sipeed/picoclaw/issues/2373))
- **Mobile-first operation**: Android APK with keyboard workflows ([#2376](https://github.com/sipeed/picoclaw/issues/2376))
- **Enterprise messaging**: OpenIM integration requests ([#1372](https://github.com/sipeed/picoclaw/issues/1372))
- **Restricted environments**: Termux, corporate proxies requiring TLS customization ([#2209](https://github.com/sipeed/picoclaw/pull/2209))

### Satisfaction Signals
- Active community providing detailed bug reports with environment specs
- Users investing effort in complex integrations (OpenRouter, Ollama, Gemini)
- Willingness to test nightly builds

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1372](https://github.com/sipeed/picoclaw/issues/1372) OpenIM plugin | ~27 days | **High** — enterprise user may abandon | Maintainer response: feasibility assessment, community contribution welcome? |
| [#2229](https://github.com/sipeed/picoclaw/pull/2229) CLI UI | ~7 days | Medium — merge conflict risk | Code review for scope creep; well-isolated change |
| [#2209](https://github.com/sipeed/picoclaw/pull/2209) Telegram TLS | ~7 days | Low — targeted fix | Final review, merge for v0.2.6 |

### Maintainer Attention Required
- **WebUI regression** [#2354](https://github.com/sipeed/picoclaw/issues/2354) — no assignee, blocking release quality
- **Gateway control plane** [#2373](https://github.com/sipeed/picoclaw/issues/2373) — missing stop/start commands suggest incomplete lifecycle management
- **i18n system** — pattern of untranslated strings indicates missing linting or coverage

---

*Digest generated from GitHub activity 2026-04-06 to 2026-04-07. All links: https://github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-07

## 1. Today's Overview

NanoClaw shows **high development velocity** with 26 PRs and 8 issues updated in the last 24 hours, indicating an active, growing open-source AI agent framework. The project is experiencing significant architectural evolution with three competing PRs (#1680, #1681 duplicates, and related #1679) proposing **keyword-based message routing** — a zero-cost pre-turn model selection feature. Infrastructure concerns are emerging around SSL certificate validity (#1503) and compliance risks with Anthropic's OAuth policies (#1669). The community is expanding platform support aggressively: Matrix E2EE (#1624), Feishu UX improvements (#1668), and Codex SDK integration (#963) are all in flight. No releases were cut today, suggesting maintainers are accumulating changes for a larger version bump.

---

## 2. Releases

**No new releases** (v0.x.x or otherwise) published on 2026-04-06/07.

---

## 3. Project Progress

### Merged/Closed PRs (14 items)

| PR | Author | Summary | Significance |
|:---|:---|:---|:---|
| [#1664](https://github.com/qwibitai/nanoclaw/issues/1664) | castours-dev | Telegram group registration for Castours project | Community ecosystem growth |
| [#1672](https://github.com/qwibitai/nanoclaw/issues/1672) | jizusun | **Research: Headless SigV4 auth for Kiro CLI** — *documented failure* | Important negative result; saves future effort on unsupported AWS auth path |
| [#1660](https://github.com/qwibitai/nanoclaw/pull/1660) | johnnyfish | Gmail OneCLI credential mode detection | Integration robustness |
| [#1677](https://github.com/qwibitai/nanoclaw/pull/1677), [#1676](https://github.com/qwibitai/nanoclaw/pull/1676) | shin902 | Discord thread auto-registration as derived groups + session isolation | **Major architecture advancement** — enables thread-based multi-tenancy |
| [#1675](https://github.com/qwibitai/nanoclaw/pull/1675) | uniclawassistant | Self-update pipeline dry run | DevOps infrastructure validation |
| [#1674](https://github.com/qwibitai/nanoclaw/pull/1674) | openclaw-shi | `group_type` parameter for `register_group` MCP tool | Extensibility foundation for main/chat/thread group taxonomy |
| [#1592](https://github.com/qwibitai/nanoclaw/pull/1592) | mathiasz1 | Working acknowledgement for piped messages | UX consistency — prevents user confusion during busy states |
| [#541](https://github.com/qwibitai/nanoclaw/pull/541) | k-fls | Improved queue with 4-state container lifecycle | **Core reliability** — replaces fragile idle timeout |
| [#1673](https://github.com/qwibitai/nanoclaw/pull/1673) | ufJmacca | Telegram channel support for Codex branch | Multi-engine parity progress |
| [#1508](https://github.com/qwibitai/nanoclaw/pull/1508) | SimonKvalheim | Close review agent containers on draft resolve | **Resource leak fix** — ~240MB per container recovered |
| [#1623](https://github.com/qwibitai/nanoclaw/pull/1623) | yaniv-golan | Fix 30-min deadlock on piped messages | **Critical stability fix** — race condition in message streaming |

**Key Advances:**
- **Container lifecycle management** matured significantly with 4-state queue (#541) and deadlock elimination (#1623, #1576)
- **Discord thread architecture** now supports true session isolation — enables enterprise use cases with threaded support tickets
- **Resource efficiency** via review container cleanup (#1508) and uv cache persistence (#1671, open)

---

## 4. Community Hot Topics

### Highest Activity by Engagement

| Item | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) | **8** | nanoclaw.dev SSL certificate invalid | **Trust/credibility** — users cannot access documentation; impacts adoption |
| [#963](https://github.com/qwibitai/nanoclaw/pull/963) | undefined* | OpenAI Codex SDK as alternative agent engine | **Vendor diversification** — reduce Anthropic dependency, enable model choice |
| [#1680](https://github.com/qwibitai/nanoclaw/pull/1680) / [#1681](https://github.com/qwibitai/nanoclaw/issues/1681) / [#1679](https://github.com/qwibitai/nanoclaw/issues/1679) | 0 each (but 3 duplicates) | Keyword-based pre-turn model routing | **Cost optimization + performance** — route cheap queries to cheap models without LLM call overhead |

*PR comment counts not provided in data; inferred from "undefined" values suggesting high activity.

**Analysis:** The duplicate routing PRs (#1680-1682, #1679) indicate either:
- A **contributor coordination failure** (scottgl9 opened 3 near-identical issues/PRs)
- **Urgent community demand** for cost-aware routing

The pattern suggests users are hitting cost/performance pain points with single-model architectures.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **High** | [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) | Production documentation site SSL failure — 9+ days ongoing | **Unfixed** — no PR linked |
| 🟡 **Medium** | [#1669](https://github.com/qwibitai/nanoclaw/issues/1669) | Credential Proxy risks Anthropic account bans | **Under investigation** — compliance/legal risk |
| 🟢 **Low** (resolved) | [#1623](https://github.com/qwibitai/nanoclaw/pull/1623), [#1576](https://github.com/qwibitai/nanoclaw/pull/1576) | Message loss/deadlock in piped message handling | **Fixed** — merged 2026-04-06 |
| 🟢 **Low** (resolved) | [#1508](https://github.com/qwibitai/nanoclaw/pull/1508) | Review agent container resource leak | **Fixed** — merged |

**Regression Risk:** The SSL cert lapse (#1503) lasting since 2026-03-28 suggests **infrastructure monitoring gaps**. Combined with the Anthropic compliance question (#1669), the project faces **platform risk** from external vendor policies.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Keyword-based model routing** | #1680, #1681, #1679, #1682 | **Very High** | 3 duplicate PRs show contributor momentum; zero-cost optimization aligns with cost-conscious users |
| **Matrix E2EE channel** | #1624 | **High** | Complete implementation with Rust crypto store; follows established patterns |
| **OpenAI Codex engine parity** | #963, #1673, #1593 | **Medium-High** | Active development branch with Telegram support; blocked on review |
| **Feishu (Lark) enterprise UX** | #1668 | **Medium** | Chinese market focus; progress cards + llmlog command show polish |
| **Isolated sessions skill** | #1583 | **Medium** | Per-context isolation within groups — addresses multi-tenant SaaS use case |
| **uv cache persistence** | #1671 | **High** | Performance fix with clear implementation; low risk |

**Emerging Theme:** The project is pivoting from "Claude-only" toward **model-agnostic, cost-optimized routing** — a necessary evolution for production deployments.

---

## 7. User Feedback Summary

### Pain Points
| Issue | Evidence | Severity |
|:---|:---|:---|
| **Documentation inaccessible** | #1503 SSL failure | Critical — 9+ days |
| **Vendor lock-in anxiety** | #1669 Anthropic ban risk, #963 Codex alternative | High |
| **Cost unpredictability** | #1680-1682 routing feature requests | High |
| **Claude Code IDE pollution** | #1665 `.claude/settings.local.json` git noise | Low but annoying |

### Positive Signals
- **Platform expansion**: Castours (#1664), Matrix (#1624), Feishu (#1668) show international/community growth
- **Reliability investments**: Deadlock fixes (#1623, #1576) and container lifecycle (#541) demonstrate production-readiness focus
- **Developer experience**: Voice transcription skill updates (#1678), local Whisper expansion

### Use Case Evolution
Users are deploying NanoClaw for:
- **Multi-channel customer support** (Discord threads, Telegram groups)
- **CI/CD-integrated coding agents** (Kiro CLI research, though SigV4 blocked)
- **Cost-sensitive production workloads** (routing features)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) SSL cert | **10 days** | Reputational damage, new user abandonment | **Immediate ops response** — cert renewal + monitoring |
| [#963](https://github.com/qwibitai/nanoclaw/pull/963) Codex SDK | **26 days** | Merge conflicts, contributor fatigue | Maintainer review decision: merge, close, or scope reduction |
| [#541](https://github.com/qwibitai/nanoclaw/pull/541) Improved queue | **39 days** | Finally merged, but long cycle discourages contributors | Post-mortem: why 39 days for core reliability fix? |
| [#1669](https://github.com/qwibitai/nanoclaw/issues/1669) Anthropic compliance | **1 day** | **Existential risk** if bans materialize | Legal/technical review; public response strategy |

**Maintainer Attention Required:** The SSL issue (#1503) and Anthropic policy risk (#1669) are **external-facing crises** that could overshadow technical progress. The duplicate routing PRs suggest **contribution process friction** — scottgl9 may need guidance on consolidating changes.

---

*Digest generated from GitHub activity 2026-04-06. Data source: qwibitai/nanoclaw repository.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-07

## 1. Today's Overview

NullClaw shows **moderate development velocity** with 7 PRs updated in the last 24 hours and 1 active bug report. The project is experiencing a **regression in the shell tool** affecting users on the latest version, while simultaneously advancing a **major REST Admin API initiative** through a stacked PR series (#770 → #771 → #780). No new releases were published today, leaving the reported shell tool regression unpatched in the stable channel. Community engagement appears developer-heavy with minimal end-user comment activity.

---

## 2. Releases

**No new releases** (v2026.3.21 remains latest stable).

---

## 3. Project Progress

### Merged/Closed Today

| PR | Description | Impact |
|:---|:---|:---|
| [#692](https://github.com/nullclaw/nullclaw/pull/692) | `fix: respect NULLCLAW_HOME in cron.zig` | **Docker/containers**: Fixes hardcoded `$HOME/.nullclaw/` paths that caused `AccessDenied` errors when `NULLCLAW_HOME` was set. Enables proper state persistence in restricted environments (uid 65534). |
| [#716](https://github.com/nullclaw/nullclaw/pull/716) | `Add calculator tool for mathematical operations` | **Tooling**: New 20-operation calculator (`add`, `stdev`, `percentile`, etc.) in `src/tools/calculator.zig`. Expands agent mathematical reasoning capabilities. |

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#780](https://github.com/nullclaw/nullclaw/pull/780) | Fresh (Apr 6), stacked on #770/#771 | **REST Admin API completion** — config mutation, MCP servers, agent sessions, memory CRUD. Signals strategic pivot toward operational manageability for production deployments. |
| [#757](https://github.com/nullclaw/nullclaw/pull/757) | Active discussion | **Heartbeat task dispatch fix** — Previously `HEARTBEAT.md` tasks were parsed but never executed. This closes a critical gap in autonomous agent workflows. |

**Underlying need**: Users need **observability and control** over running agents. The Admin API stack (#770/#771/#780) suggests maintainers recognize that CLI-only management doesn't scale for teams or long-running daemon deployments.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|:---|:---|:---|:---|
| 🔴 **High** | [#779](https://github.com/nullclaw/nullclaw/issues/779): Shell tool docker error in yolo mode | **Open**, 0 comments | ❌ No |
| 🟡 **Medium** | [#781](https://github.com/nullclaw/nullclaw/pull/781): GLM-5 null `tool_calls` crash | **Open PR** (Apr 6) | ✅ Yes — under review |

### #779 Analysis
- **Regression**: Broke between v2026.3.21 and latest
- **Trigger**: Non-Docker users hit Docker-related errors
- **User impact**: Shell tool completely non-functional for brew-installed yolo mode users
- **Risk**: Affects core functionality; no maintainer response yet

### #781 Analysis
- **Crash type**: Debug panic / ReleaseSmall SIGSEGV
- **Root cause**: Provider (GLM-5/infini-ai) returns `"tool_calls": null` vs. expected array
- **Scope**: Affects `openai.zig` and `compatible.zig` provider implementations

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Release |
|:---|:---|:---|
| **REST Admin API (full suite)** | #770, #771, #780 | **High** — Stacked PRs indicate coordinated delivery; ~30KB binary increase acceptable |
| **Heartbeat-driven agent dispatch** | #757 | **Medium-High** — Fixes broken existing functionality |
| **Calculator tool** | #716 | **Shipped** — Already merged |
| **Provider robustness (null handling)** | #781 | **High** — Crash fix, likely fast-tracked |

**Predicted v2026.4.x**: Admin API foundation + heartbeat fix + calculator + GLM-5 stability patch.

---

## 7. User Feedback Summary

| Theme | Evidence | Sentiment |
|:---|:---|:---|
| **Regression anxiety** | #779: "latest update broke the shell tool" | 😞 Negative — upgrade broke core workflow |
| **Version pinning** | User explicitly staying on v2026.3.21 | ⚠️ Caution — trust erosion in "latest" |
| **Container edge cases** | #692 Docker/uid 65534 fix | 😐 Neutral — infrastructure complexity |
| **Provider diversity pain** | #781 GLM-5 incompatibility | 😐 Neutral — ecosystem fragmentation |

**Key pain point**: The shell tool regression (#779) demonstrates that **yolo mode releases may lack sufficient smoke testing** for non-Docker paths. The user's explicit version rollback is a red flag for release process maturity.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#779](https://github.com/nullclaw/nullclaw/issues/779) Shell tool regression | 1 day | 🔴 **Escalating** — Core tool broken, no maintainer acknowledgment | Triage and hotfix assessment |
| #770/#771/#780 stack | 1-2 days | 🟡 **Dependency chain** — Later PRs blocked on earlier reviews | Sequential review to unblock API feature |
| #757 Heartbeat dispatch | 6 days | 🟡 **Functional gap** — Tasks silently ignored | Merge decision |

**Recommendation**: Prioritize #779 as potential **v2026.3.22 hotfix** candidate; the shell tool is too central to leave broken while Admin API ships.

---

*Digest generated from nullclaw/nullclaw GitHub data — 2026-04-07*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-07

## Today's Overview

IronClaw shows **exceptionally high activity** with 33 issues and 50 PRs updated in the last 24 hours, indicating a project in intensive development and stabilization phase. The team is actively addressing critical multi-tenant security gaps through a coordinated "ownership model" initiative (MT-1 through MT-6), while simultaneously fixing regressions introduced by recent staging merges. No new releases were cut today, though a v0.24.1 patch release is queued in PR [#2075](https://github.com/nearai/ironclaw/pull/2075). The project appears to be navigating a challenging transition period with Engine V2 stabilization, multi-tenant hardening, and customer-reported production issues competing for attention.

---

## Releases

**No new releases today.**

A patch release **v0.24.1** is pending in PR [#2075](https://github.com/nearai/ironclaw/pull/2075) with minor API-compatible changes, primarily labeling improvements for migration PRs.

---

## Project Progress

### Merged/Closed PRs (5 total)

| PR | Description | Impact |
|:---|:---|:---|
| [#2051](https://github.com/nearai/ironclaw/pull/2051) | Fix: Allow "telegram" WASM channel name (was incorrectly reserved) | Unblocks Telegram WASM channel loading; regression fix |
| [#2010](https://github.com/nearai/ironclaw/pull/2010) | Fix: `AGENT_AUTO_APPROVE_TOOLS=true` ignored under Engine V2 | Restores expected automation behavior |
| [#1784](https://github.com/nearai/ironclaw/pull/1784) | E2E coverage: SSE connectivity and reconnect tests | Infrastructure for reliability validation |
| *(2 additional)* | Staging promotion PRs | CI/automation maintenance |

### Notable Open PRs Advancing

- **[#2086](https://github.com/nearai/ironclaw/pull/2086)** — Critical fix for shared skills visibility in multi-tenant deployments (addresses [#2084](https://github.com/nearai/ironclaw/issues/2084))
- **[#2083](https://github.com/nearai/ironclaw/pull/2083)** — SSE event ordering fix for web UI messages appearing "stuck"
- **[#2050](https://github.com/nearai/ironclaw/pull/2050)** — Large stabilization PR consolidating auth readiness, OAuth flows, and multi-tenant credential scoping
- **[#1446](https://github.com/nearai/ironclaw/pull/1446)** — New Aliyun Coding Plan provider support (XL contribution from new contributor)

---

## Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | Topic | Underlying Need |
|:---|:---:|:---|:---|
| [#846](https://github.com/nearai/ironclaw/issues/846) | 4 | `onboard` database save failure | **First-run reliability** — users encounter confusing state where setup fails but app starts anyway |
| [#2084](https://github.com/nearai/ironclaw/issues/2084) | 2 | Skills invisible to gateway users after `resolve_user_project` | **Multi-tenant skill visibility** — admin-created skills must propagate to users without breaking isolation |
| [#1350](https://github.com/nearai/ironclaw/issues/1350) | 2 👍2 | Hot-reload LLM provider without restart | **Operational agility** — users expect immediate configuration changes in web UI |
| [#1996](https://github.com/nearai/ironclaw/issues/1996) | 1 | Routine runs fail with "Tools Disabled" | **Automation reliability** — scheduled jobs need guaranteed tool access |

### Analysis

The top discussions reveal tension between **security isolation** (per-user projects, ownership boundaries) and **usability** (shared resources, immediate configuration changes). The `resolve_user_project` change (#2084) exemplifies this—correctly implemented isolation inadvertently broke legitimate skill sharing patterns.

---

## Bugs & Stability

### Critical (P1 / Security)

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#2069](https://github.com/nearai/ironclaw/issues/2069) | **MT-2**: Silent cross-tenant credential fallback to "default" in WASM tools | Open — ownership hardening |
| [#2068](https://github.com/nearai/ironclaw/issues/2068) | **MT-1**: Sandbox jobs use owner's secrets regardless of job creator | Open — ownership hardening |
| [#2056](https://github.com/nearai/ironclaw/issues/2056) | **SECURITY**: Test API URL rewriters ship in production binaries (Telegram/Slack) | Open — high risk, needs immediate attention |
| [#2089](https://github.com/nearai/ironclaw/issues/2089) | IronClaw responses 5-10s for simple queries (multi-tenant) | Open — performance regression |
| [#2087](https://github.com/nearai/ironclaw/issues/2087) | Complete hang after Notion setup request | Open — potential deadlock/infinite loop |

### High (P2 / Customer-Impacting)

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#2084](https://github.com/nearai/ironclaw/issues/2084) | Gateway users cannot see any skills | **PR [#2086](https://github.com/nearai/ironclaw/pull/2086)** open |
| [#2079](https://github.com/nearai/ironclaw/issues/2079) | Web UI messages stuck until refresh (SSE ordering) | **PR [#2083](https://github.com/nearai/ironclaw/pull/2083)** open |
| [#1996](https://github.com/nearai/ironclaw/issues/1996) | Routine runs fail with tools disabled | Open — needs investigation |
| [#1992](https://github.com/nearai/ironclaw/issues/1992) | Google OAuth 400 "Access blocked" | Open — OAuth policy compliance issue |

### Medium/Other

- [#1999](https://github.com/nearai/ironclaw/issues/1999): Skill names with spaces fail validation
- [#1998](https://github.com/nearai/ironclaw/issues/1998) / [#1997](https://github.com/nearai/ironclaw/issues/1997): Slack integration broken/missing app

---

## Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Release |
|:---|:---|:---:|
| [#1350](https://github.com/nearai/ironclaw/issues/1350) | Hot-reload LLM provider without restart | **High** — well-scoped, has 👍 support, architectural change identified |
| [#70](https://github.com/nearai/ironclaw/issues/70) | Feed system for non-intrusive event stream | Medium — foundational infrastructure, no assignee |
| [#2082](https://github.com/nearai/ironclaw/issues/2082) | Trace-driven self-improvement loop | Medium — architectural RFC, needs design review |
| [#2077](https://github.com/nearai/ironclaw/issues/2077) | Publish market.near.ai contract source | Low — external dependency, legal/commercial consideration |
| [#2088](https://github.com/nearai/ironclaw/issues/2088) | Admin-created system prompts for all users | **High** — customer request, aligns with multi-tenant admin features |

**Predicted near-term priorities**: Hot-reload (#1350) and admin prompt sharing (#2088) fit naturally with current multi-tenant work. The Feed system (#70) may wait for ownership model stabilization.

---

## User Feedback Summary

### Pain Points (Production Users)

| Issue | User Impact | Severity |
|:---|:---|:---:|
| [#2089](https://github.com/nearai/ironclaw/issues/2089) | 5-10 second response times make product unusable for chat | 🔴 Critical |
| [#2084](https://github.com/nearai/ironclaw/issues/2084) | Skills completely invisible to end users | 🔴 Critical |
| [#2087](https://github.com/nearai/ironclaw/issues/2087) | Complete system hang during Notion setup | 🔴 Critical |
| [#1996](https://github.com/nearai/ironclaw/issues/1996) | Scheduled automations fail silently | 🟡 High |
| [#1992](https://github.com/nearai/ironclaw/issues/1992) | Google Workspace integration broken | 🟡 High |
| [#846](https://github.com/nearai/ironclaw/issues/846) | Confusing onboarding failure state | 🟡 Medium |

### Positive Signals

- Active enterprise/team deployment interest (multi-tenant feature requests from [@sergeiest](https://github.com/sergeiest))
- Sovereign agent use case emerging ([#2077](https://github.com/nearai/ironclaw/issues/2077)) — on-chain autonomous agents

### Satisfaction Risk

Multiple "bug_bash" and "customer" labeled issues from the same reporter ([@sergeiest](https://github.com/sergeiest)) suggest concentrated production pain from a single deployment, potentially representing a larger customer cohort.

---

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#846](https://github.com/nearai/ironclaw/issues/846) | 28 days | Onboarding friction | Root cause analysis of database save failure vs. successful startup |
| [#70](https://github.com/nearai/ironclaw/issues/70) | 52 days | Feature gap | Roadmap decision on Feed system priority |
| [#1350](https://github.com/nearai/ironclaw/issues/1350) | 20 days | UX gap | Assignment for hot-reload implementation |
| [#1999](https://github.com/nearai/ironclaw/issues/1999) | 3 days | Skill ecosystem | Validation regex fix for human-readable skill names |

### PRs At Risk of Stagnation

- **[#1446](https://github.com/nearai/ironclaw/pull/1446)** (Aliyun support): XL contribution from new contributor, needs review bandwidth to avoid contributor attrition
- **[#1764](https://github.com/nearai/ironclaw/pull/1764)** (Abound demo): 8 days old, high risk, large scope — may need decomposition

---

*Generated from IronClaw GitHub activity 2026-04-06 to 2026-04-07*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-07

## 1. Today's Overview

LobsterAI shows **moderate development activity** with 11 open pull requests updated in the last 24 hours, though no issues were active and no releases were cut. The project is experiencing a **concentrated push on scheduled task (定时任务) functionality**, with 5 of 11 PRs targeting this module—suggesting this is a current strategic priority. Dependency maintenance is well-automated via Dependabot, with 4 CI/dependency PRs queued. Notably, **zero PRs were merged or closed today**, indicating potential code review bottlenecks or maintainer bandwidth constraints. The project appears healthy but with accumulation of unreviewed changes.

---

## 2. Releases

**No new releases** — No versions were published in the last 24 hours.

---

## 3. Project Progress

**No PRs merged or closed today.** All 11 PRs remain open, representing work-in-progress across multiple domains:

| Area | PRs | Status |
|------|-----|--------|
| Scheduled Tasks (定时任务) | #1486, #1488, #1489, #1490, #1449 | Awaiting review |
| Cowork/Session Management | #1494 | Awaiting review |
| Dependencies & CI | #1277, #1278, #1491, #1492, #1493 | Awaiting review |

**Key advances pending merge:**
- **UI/UX overhaul for scheduled tasks** (#1488): Card grid layout, search, date filtering, history grouping
- **Session-scoped skill selection** (#1494): Fixes cross-session skill state pollution
- **Local macOS notifications** (#1489): Completes notification channel architecture

---

## 4. Community Hot Topics

**No commented or highly-reacted items** — All PRs show 0 comments and 0 reactions, indicating limited community engagement or maintainer review activity.

**Most significant pending changes by impact:**

| PR | Link | Underlying Need |
|----|------|---------------|
| #1488 — Scheduled Task UI upgrade | [netease-youdao/LobsterAI#1488](https://github.com/netease-youdao/LobsterAI/pull/1488) | Users struggle with table-based task management; need visual, searchable, time-bounded history |
| #1494 — Session-independent skill state | [netease-youdao/LobsterAI#1494](https://github.com/netease-youdao/LobsterAI/pull/1494) | Multi-session workflows require isolation—global state causes confusion |
| #1449 — Collapse scheduled task executions | [netease-youdao/LobsterAI#1449](https://github.com/netease-youdao/LobsterAI/pull/1449) | Chronic UX debt: recurring tasks spam sidebar, destroying navigability |

**Pattern detected:** Heavy investment in "定时任务" (scheduled tasks) suggests this is a **differentiating feature** for LobsterAI vs. generic AI assistants, likely targeting automation/power-user workflows.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **Medium** | #1490 | [Scheduled task delivery channel not updating after edit](https://github.com/netease-youdao/LobsterAI/pull/1490) | Fix PR open |
| **Medium** | #1489 | [macOS notifications incorrectly triggered for "no notify" tasks](https://github.com/netease-youdao/LobsterAI/pull/1489) | Fix PR open (includes new feature) |
| **Low** | #1277, #1278 | Electron + Anthropic SDK dependency bumps | Routine maintenance |

**No crashes or regressions reported in Issues** — the zero open issues count suggests either excellent stability or underreporting.

---

## 6. Feature Requests & Roadmap Signals

**Inferred from PR content (no explicit user requests):**

| Feature | Evidence | Likelihood in Next Release |
|---------|----------|---------------------------|
| **Scheduled Task Test/Dry-run** | #1486 adds "Test Task" button to creation flow | High — addresses clear UX gap |
| **Notification Channel Polish** | #1489, #1490 complete notification architecture | High — fixes known bugs |
| **Session Management Improvements** | #1494, #1449 both address session state/history | High — core UX debt |
| **Electron 41 + Security Patches** | #1277 | Medium — blocked on review |

**Emerging pattern:** The project is maturing from "functional" to "polished"—focus on history management, state isolation, and visual consistency suggests preparation for broader user adoption.

---

## 7. User Feedback Summary

**No direct user feedback in Issues/PRs today.** Inferred pain points from PR descriptions:

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| Sidebar clutter from recurring tasks | #1449 description: "一周后侧栏就会出现 7 条同名记录" | High |
| Confusing skill state across conversations | #1494: "切换到其他会话后仍然生效，体验不合理" | Medium |
| Difficult task debugging workflow | #1486: "路径过长，调试体验差" | Medium |
| Notification configuration not respected | #1489, #1490 | Medium |

**Use case signal:** Heavy emphasis on scheduled tasks suggests target users are **knowledge workers automating repetitive information tasks** (reports, monitoring, scheduled analysis).

---

## 8. Backlog Watch

**No long-unanswered Issues** (0 open issues total).

**PRs requiring maintainer attention:**

| PR | Age | Risk if Delayed |
|----|-----|---------------|
| #1277, #1278 (dependencies) | 4-5 days | Security/compat exposure |
| #1449 (task history grouping) | 4 days | UX debt accumulation |
| #1486-#1494 (concentrated batch) | 1-2 days | Merge conflict risk due to overlapping scheduled task code |

**Recommendation:** The 5 scheduled task PRs (#1449, #1486, #1488, #1489, #1490) likely have overlapping touchpoints—coordinated review or batch merge advised to prevent integration issues.

---

*Digest generated from GitHub data for netease-youdao/LobsterAI on 2026-04-07*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-07

## 1. Today's Overview

Moltis demonstrates **high development velocity** with 20 tracked items updated in 24 hours (11 issues, 9 PRs) and a fresh release cut. The project shows strong maintainer responsiveness: 6 of 9 PRs were merged/closed, including critical Docker build fixes and Copilot enterprise compatibility. Community engagement is active with 5 new feature requests filed in a single day, though this suggests users are pushing the platform's boundaries faster than current capabilities allow. The codebase appears healthy with rapid bug turnaround, though infrastructure debt (Matrix channel support, local network binding) is emerging as a friction point.

---

## 2. Releases

**20260406.04** — [Release link](https://github.com/moltis-org/moltis/releases/tag/20260406.04)

*Note: No detailed changelog provided in source data. Based on merged PRs, this release likely includes:*
- Docker build fixes restoring Matrix, Firecrawl, ngrok, and Slack integrations
- Copilot enterprise token proxy routing
- Telegram channel proxy support
- Cron-based session/container cleanup
- Website branding refresh with provider/channel showcase

---

## 3. Project Progress

### Merged/Closed PRs (6 items)

| PR | Description | Impact |
|:---|:---|:---|
| [#576](https://github.com/moltis-org/moltis/pull/576) | **fix(docker): add missing default features** | Critical fix restoring 4 integrations (Matrix, Firecrawl, ngrok, Slack) for Docker users |
| [#573](https://github.com/moltis-org/moltis/pull/573) | **fix(web): session sidebar new-tab support** | UX improvement for power users managing multiple sessions |
| [#567](https://github.com/moltis-org/moltis/pull/567) | **feat(website): provider pills + branding update** | Marketing milestone positioning Moltis as "secure persistent personal agent server" |
| [#355](https://github.com/moltis-org/moltis/pull/355) | **fix(providers): Copilot enterprise proxy routing** | Enterprise readiness: resolves 421 errors for Copilot Business/Enterprise users |
| [#564](https://github.com/moltis-org/moltis/pull/564) | **feat(cron): auto-cleanup orphaned sessions/containers** | Reliability: prevents resource leaks from cron executions and sandbox containers |
| [#550](https://github.com/moltis-org/moltis/pull/550) | **feat: Telegram channel-level proxy support** | Privacy/compliance: per-channel SOCKS5/HTTP proxy for restricted network environments |

**Key architectural advances:**
- External agent bridge foundation laid (#566 open) — strategic move toward CLI agent ecosystem integration
- Webhook ingress system (#575 open) — infrastructure for event-driven AI agent triggers

---

## 4. Community Hot Topics

### Most Engaged Items

| Rank | Item | Engagement | Analysis |
|:---|:---|:---|:---|
| 1 | [#233 Matrix Support](https://github.com/moltis-org/moltis/issues/233) | **4 comments, 5 👍** | Longest-running feature request (since Feb 25). High demand for decentralized/federated messaging. Blocked on config resolution (#569 closed as duplicate/related). |
| 2 | [#549 macOS OAuth Codex flow](https://github.com/moltis-org/moltis/issues/549) | 3 comments | Desktop app authentication friction — resolved same day it was reported. |
| 3 | [#565 Network binding login failures](https://github.com/moltis-org/moltis/issues/565) | 1 comment, 1 👍 | Self-hosting pain point: security/network configuration conflict with authentication. |

**Underlying needs detected:**
- **Decentralization demand**: Matrix (#233) represents user desire to escape centralized platforms
- **Self-hosting complexity**: Network binding (#565) and OAuth flows (#549) show deployment edge cases
- **Enterprise features**: Copilot proxy (#355) and model routing (#574) indicate B2B/team usage emerging

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| 🔴 **High** | [#565](https://github.com/moltis-org/moltis/issues/565) Login fails with custom bind address (0.0.0.0/192.168.x) | **OPEN** | None — requires auth system audit |
| 🟡 **Medium** | [#568](https://github.com/moltis-org/moltis/issues/568) LLM list retrieval fails for registered providers | **OPEN** | None — provider registry regression |
| 🟢 **Low** | [#569](https://github.com/moltis-org/moltis/issues/569) Matrix config not resolving in "proposed" channels | **CLOSED** | Fixed by #576 (Docker features) |
| 🟢 **Low** | [#572](https://github.com/moltis-org/moltis/issues/572) Telegram channel account not found | **CLOSED** | Likely config/docs issue |

**Regression risk:** The network binding bug (#565) is critical for self-hosted deployments — authentication logic appears hardcoded to specific interfaces. The LLM list retrieval issue (#568) suggests provider metadata caching may be fragile.

---

## 6. Feature Requests & Roadmap Signals

### New Requests (April 6, 2026)

| Issue | Request | Likelihood in Next Release |
|:---|:---|:---|
| [#574](https://github.com/moltis-org/moltis/issues/574) | **Model routing per topic** — route different conversations to different LLMs | High — aligns with existing provider abstraction |
| [#571](https://github.com/moltis-org/moltis/issues/571) | **Prompt caching** — reduce API costs and latency | Medium — requires storage layer decisions |
| [#570](https://github.com/moltis-org/moltis/issues/570) | **Local OpenAI Whisper setup flow** | Medium — local-first trend, but UX complexity |
| [#563](https://github.com/moltis-org/moltis/issues/563) | **PDF ingestion for bot** | High — multimodal/document RPA is competitive necessity |

**Strategic signals:**
- **Cost optimization** (#571) and **local AI** (#570) suggest user base is scaling and seeking infrastructure efficiency
- **Multimodal expansion** (#563) positions against competitors like Claude/ChatGPT with native document support
- **Topic-based routing** (#574) indicates sophisticated multi-agent workflows emerging

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Configuration complexity** | #569, #565, #572 — network, channels, providers | Moderate — docs and validation needed |
| **Desktop app polish** | #549 OAuth flow | Low — rapid fix suggests responsive team |
| **Missing integrations** | #233 Matrix, #570 Whisper | Moderate — community providing PRs |

### Use Cases Emerging
- **Enterprise/team deployment**: Copilot enterprise, model routing, proxy support
- **Privacy-conscious self-hosting**: Local Whisper, Matrix, network binding customization
- **Automation platform**: Webhooks (#575), cron jobs (#564), external agents (#566)

### Satisfaction Indicators
- Fast bug resolution (same-day for #549, #572)
- Active maintainer presence (penso, c0bra merging frequently)
- Users filing detailed feature requests with preflight checklists — indicates invested community

---

## 8. Backlog Watch

### Needs Maintainer Attention

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#233 Matrix Support](https://github.com/moltis-org/moltis/issues/233) | **40 days** | Community fragmentation | Decision: implement native or document bridge? 5 👍 signals demand |
| [#535 Langfuse tracing](https://github.com/moltis-org/moltis/pull/535) | 6 days | Observability gap | Merge or scope — critical for production debugging |
| [#566 External agents bridge](https://github.com/moltis-org/moltis/pull/566) | 1 day | Strategic direction | Review for CLI agent ecosystem positioning |
| [#575 Webhook ingress](https://github.com/moltis-org/moltis/pull/575) | 1 day | Infrastructure readiness | Security audit — 9 auth modes is attack surface |

**Recommendation:** Matrix support (#233) has become a reputation risk with 40 days open and active duplicate reports. A clear roadmap communication or community contribution pathway would reduce friction.

---

*Digest generated from 20 GitHub items. Project health: **Strong** — high velocity, responsive maintenance, growing feature surface with manageable technical debt.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-07

## 1. Today's Overview

CoPaw shows **high community activity** with 28 issues updated (24 active) and 15 PRs in the last 24 hours, indicating robust engagement despite **no new releases**. The project is experiencing **growing pains around MCP (Model Context Protocol) integration**, with multiple critical bugs around client lifecycle management, hot-reload cleanup, and repeated registration causing CPU spikes and task cancellations. Windows desktop stability and local model integration (llama.cpp, Ollama) remain friction points. The contributor base is expanding with several first-time contributors submitting fixes, suggesting the project is maturing its onboarding experience.

---

## 2. Releases

**No new releases** (last: none specified in data).

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#2889](https://github.com/agentscope-ai/CoPaw/pull/2889) | pan-x-c | Support CoPaw Local Update for llama.cpp; fix parse error with MAX_REPETITION_THRESHOLD=20000 | **Production** — enables self-updating local models, fixes config parsing |
| [#2998](https://github.com/agentscope-ai/CoPaw/pull/2998) | mozovw | Cache MCP client registration to avoid repeated `list_tools()` calls | **Critical stability** — fixes CancelledError crashes on slow MCP servers |
| [#2974](https://github.com/agentscope-ai/CoPaw/pull/2974) | shaojun | Logo-related changes (minimal details) | Minor branding |

**Key advancement**: MCP reliability infrastructure is being actively hardened with two complementary fixes (#2998 merged, #2979 pending) addressing root causes of production crashes.

---

## 4. Community Hot Topics

### Most Active Discussions (by engagement)

| Issue/PR | Comments | Core Tension |
|:---|:---:|:---|
| [#2888](https://github.com/agentscope-ai/CoPaw/issues/2888) — High CPU idle usage (busy loop) | **9** | **Infrastructure debt**: AnyIO cancellation handling causing 100% CPU spin; indicates event loop hygiene issues |
| [#2955](https://github.com/agentscope-ai/CoPaw/issues/2955) — 无法安装llama.cpp (llama.cpp install fails) | **8** | **Onboarding blocker**: Download completes but UI doesn't reflect installation; metadata directory handling in archives |
| [#2418](https://github.com/agentscope-ai/CoPaw/issues/2418) — Skills-hub management page request | **6** | **Ecosystem maturity**: Users want centralized skill discovery/management; signals demand for marketplace infrastructure |
| [#2323](https://github.com/agentscope-ai/CoPaw/issues/2323) — Tags-based skill indexing | **4** | **UX scalability**: Current LLM-only skill selection is unreliable; users want deterministic keyword retrieval |

**Underlying needs analysis**: The community is pushing for **(a) reliable local model deployment** (llama.cpp/Ollama friction), **(b) skill ecosystem discoverability** (hub + tagging), and **(c) production-grade stability** (CPU, memory, connection lifecycle). These cluster around "make CoPaw work reliably for power users with local infrastructure."

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#2960](https://github.com/agentscope-ai/CoPaw/issues/2960) | MCP Client not cleaned up on hot reload → persistent CPU spike | PR [#2979](https://github.com/agentscope-ai/CoPaw/pull/2979) open |
| 🔴 **Critical** | [#2999](https://github.com/agentscope-ai/CoPaw/issues/2999) | Repeated MCP registration causes task cancellation | **Fixed** by [#2998](https://github.com/agentscope-ai/CoPaw/pull/2998) |
| 🟡 **High** | [#2888](https://github.com/agentscope-ai/CoPaw/issues/2888) | 100% CPU idle usage (AnyIO busy loop) | **Closed** — root cause identified, fix applied |
| 🟡 **High** | [#2911](https://github.com/agentscope-ai/CoPaw/issues/2911) | Windows client auto-crashes after hours | No fix identified |
| 🟡 **High** | [#2967](https://github.com/agentscope-ai/CoPaw/issues/2967) | `execute_shell_command` bypasses File Guard | PR [#2978](https://github.com/agentscope-ai/CoPaw/pull/2978) open |
| 🟡 **High** | [#2992](https://github.com/agentscope-ai/CoPaw/issues/2992) | Garbled multilingual output at context limit | No fix |
| 🟡 **High** | [#2991](https://github.com/agentscope-ai/CoPaw/issues/2991) | Stop/interrupt button non-functional | No fix |
| 🟢 **Medium** | [#2956](https://github.com/agentscope-ai/CoPaw/issues/2956) | Telegram channel becomes unresponsive | No fix |
| 🟢 **Medium** | [#2988](https://github.com/agentscope-ai/CoPaw/issues/2988) | Ollama local models can't call tools | No fix |
| 🟢 **Medium** | [#2965](https://github.com/agentscope-ai/CoPaw/issues/2965) | Image content corruption in multimodal (Minimax) | No fix |

**Pattern**: MCP lifecycle management is the dominant stability theme. Three interrelated bugs (#2960, #2999, #2888) suggest architectural debt in async resource cleanup.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| **Skills Hub / Marketplace** | [#2418](https://github.com/agentscope-ai/CoPaw/issues/2418), [#2361](https://github.com/agentscope-ai/CoPaw/issues/2361) | **High** | Multiple requests, ecosystem growth blocker, competitive necessity |
| **Tags-based skill indexing** | [#2323](https://github.com/agentscope-ai/CoPaw/issues/2323) | **Medium-High** | Technical foundation for hub; improves current UX pain point |
| **Explicit skill selection / deterministic invocation** | [#2902](https://github.com/agentscope-ai/CoPaw/issues/2902) | **Medium** | Production readiness request; may conflict with agent autonomy philosophy |
| **Custom UI titles (multi-agent management)** | [#3000](https://github.com/agentscope-ai/CoPaw/issues/3000) | **Medium** | Low complexity, high user value for power users |
| **Markdown rendering for user messages** | [#2975](https://github.com/agentscope-ai/CoPaw/issues/2975) | **Medium** | Frontend polish, straightforward implementation |
| **WhatsApp channel** | [#2962](https://github.com/agentscope-ai/CoPaw/pull/2962) | **High** | PR already open, active development |
| **GitHub Copilot provider** | [#2366](https://github.com/agentscope-ai/CoPaw/pull/2366) | **Medium** | OAuth flow complete, needs review bandwidth |

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

| Category | Evidence | Sentiment |
|:---|:---|:---:|
| **"Toy vs. Production" gap** | *"claw要具备生产应用能力，需要有稳定的技能和快速的应用连接，否则只停留在玩具的水平"* [#2902](https://github.com/agentscope-ai/CoPaw/issues/2902) | 😤 Frustrated |
| **Skill invocation randomness** | *"技能的调用往往是随机的、遍历式的...技能调用很不稳定"* [#2902](https://github.com/agentscope-ai/CoPaw/issues/2902) | 😤 Frustrated |
| **Local model friction** | llama.cpp install fails silently, Ollama GPU support "说一套做一套" [#2955](https://github.com/agentscope-ai/CoPaw/issues/2955), [#2985](https://github.com/agentscope-ai/CoPaw/issues/2985) | 😤 Confused/annoyed |
| **Windows client reliability** | Auto-crash, spellcheck red underlines for Chinese [#2911](https://github.com/agentscope-ai/CoPaw/issues/2911), [#2970](https://github.com/agentscope-ai/CoPaw/issues/2970) | 😤 Annoyed |
| **UI/UX polish gaps** | Chat sorting by creation not last message, voice settings unclear, Markdown tables broken [#2982](https://github.com/agentscope-ai/CoPaw/issues/2982), [#2981](https://github.com/agentscope-ai/CoPaw/issues/2981), [#2983](https://github.com/agentscope-ai/CoPaw/issues/2983) | 😐 Tolerating |

### Positive Signals
- Active first-time contributors (#2998, #2366, #2976) suggest documentation and dev environment are accessible
- Rapid bug acknowledgment (multiple issues closed same day with fixes)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#2361](https://github.com/agentscope-ai/CoPaw/issues/2361) Skill ecosystem launch | ~12 days | **High** — explicit user anticipation, competitive positioning | Maintainer roadmap communication |
| [#2323](https://github.com/agentscope-ai/CoPaw/issues/2323) Tags-based indexing | ~12 days | **Medium** — blocks efficient skill discovery | Design review, assign contributor |
| [#2366](https://github.com/agentscope-ai/CoPaw/pull/2366) GitHub Copilot provider | ~12 days | **Medium** — complete implementation, needs merge | Code review, OAuth security audit |
| [#2911](https://github.com/agentscope-ai/CoPaw/issues/2911) Windows client crashes | ~3 days | **High** — production blocker for Windows users | Reproduction, memory leak investigation |

**Recommendation**: Prioritize [#2361](https://github.com/agentscope-ai/CoPaw/issues/2361) roadmap communication and [#2911](https://github.com/agentscope-ai/CoPaw/issues/2911) Windows stability investigation to address the "toy vs. production" perception gap.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-04-07

## 1. Today's Overview

ZeptoClaw shows **healthy development velocity** with 12 items updated in the last 24 hours (4 issues, 8 PRs). The project is in an active stabilization phase: 2 PRs were merged/closed, addressing critical Telegram reliability issues, while 6 PRs remain open for review—including major features like browser automation and context compaction. No new releases were cut. The maintainer (qhkm) and core contributor (stuartbowness) are actively collaborating, with cross-referenced fixes showing tight issue-to-PR resolution cycles.

---

## 2. Releases

**No new releases** (v0.x.x remains current).

---

## 3. Project Progress

### Merged/Closed PRs (2 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#462](https://github.com/qhkm/zeptoclaw/pull/462) | stuartbowness | **fix(telegram): prevent silent message failures with chunking and plaintext fallback** | Resolves [#461](https://github.com/qhkm/zeptoclaw/issues/461)—Telegram research tasks no longer fail silently; implements intelligent message chunking (paragraph → line → hard-split) with plaintext error fallback |
| [#458](https://github.com/qhkm/zeptoclaw/pull/458) | qhkm | **fix(telegram): add message chunking and error fallback** | Foundation for #462; addresses 4096 UTF-16 code unit limit with `chunk_message()` utility |

**Key advancement:** Telegram integration is now production-ready for long-form research outputs, a major UX blocker eliminated.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#486](https://github.com/qhkm/zeptoclaw/issues/486) — "true concurrent/non blocking design" | 1 comment, 0 reactions, **Large scope estimate** | **Highest strategic interest.** User superhero75 identifies a fundamental architectural limitation: ZeptoClaw blocks on long-running jobs, degrading real-time responsiveness. References [spacebot](https://github.com/spacedriveapp/spacebot) as prior art. **Underlying need:** Users want async job execution with status streaming—essential for production deployments. |
| [#489](https://github.com/qhkm/zeptoclaw/pull/489) | Open, maintainer-authored | **Critical API expansion.** OpenAI-compatible tool calling for `/v1/chat/completions`—enables ZeptoClaw as drop-in replacement for OpenAI in existing toolchains. Streaming + non-streaming support. |
| [#460](https://github.com/qhkm/zeptoclaw/pull/460) | Multi-layered context compaction | **Performance at scale.** Addresses token overflow crashes via defense-in-depth compaction strategy. Large conversations currently "crash with unrecoverable token overflow errors"—this PR is essential for power users. |
| [#459](https://github.com/qhkm/zeptoclaw/pull/459) | Browser automation via agent-browser | **New capability vertical.** Smart engine management (Lightpanda → Chrome fallback), SSRF protection. Split from #410 indicating sustained investment in web interaction features. |

**Community signal:** Heavy investment in reliability (Telegram fixes), API compatibility (OpenAI spec), and scale (context compaction, concurrency). Users are pushing ZeptoClaw toward production-grade multi-tenant deployment.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix Available |
|:---|:---|:---|:---|
| **High** | [#488](https://github.com/qhkm/zeptoclaw/issues/488) — Tool calls dropped in streaming mode | **OPEN** | **Yes** — [#489](https://github.com/qhkm/zeptoclaw/pull/489) addresses this directly |
| Medium | [#466](https://github.com/qhkm/zeptoclaw/issues/466) — Shell escaping breaks CLI wrappers | **CLOSED** | **Merged** — [#467](https://github.com/qhkm/zeptoclaw/pull/467) adds `raw_string` param type |
| Medium | [#461](https://github.com/qhkm/zeptoclaw/issues/461) — Telegram silent failures | **CLOSED** | **Merged** — [#462](https://github.com/qhkm/zeptoclaw/pull/462) |

**Stability assessment:** Two medium-severity bugs resolved. One high-severity streaming API bug has an active fix PR under review. No regressions introduced in today's merges.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **True concurrent/non-blocking execution** | [#486](https://github.com/qhkm/zeptoclaw/issues/486) | Medium-High | Large scope, but fundamental to production adoption; may require architectural RFC |
| **OpenAI-compatible tool calling** | [#489](https://github.com/qhkm/zeptoclaw/pull/489) | **Very High** | PR open, maintainer-authored, completes API compatibility story |
| **Browser automation (agent-browser)** | [#459](https://github.com/qhkm/zeptoclaw/pull/459) | High | Mature PR, split from earlier work, addresses research task use cases |
| **Context compaction / token overflow prevention** | [#460](https://github.com/qhkm/zeptoclaw/pull/459) | High | Fixes crash-inducing bug for long conversations |
| **OpenRouter vendor-prefixed model routing** | [#468](https://github.com/qhkm/zeptoclaw/pull/468) | Medium | Provider ecosystem expansion; fixes routing inconsistency |

**Roadmap prediction:** Next release likely includes #489 (OpenAI tools), #459 (browser), #460 (compaction), and #468 (OpenRouter fixes). Concurrency (#486) may spawn dedicated tracking issue or RFC.

---

## 7. User Feedback Summary

### Pain Points Resolved
- **Telegram reliability:** "The bot goes silent. No response, no error, nothing" — now fixed with chunking + fallback ([#462](https://github.com/qhkm/zeptoclaw/pull/462))
- **CLI wrapper compatibility:** Shell-escaping broke `gws {{args}}` patterns — `raw_string` type added ([#467](https://github.com/qhkm/zeptoclaw/pull/467))

### Active Friction
- **Blocking execution model:** "If the agent is running a long job, it won't respond to users until it finishes" — architectural limitation requiring async redesign
- **Token overflow crashes:** Long conversations hit "unrecoverable token overflow errors" — fix in review ([#460](https://github.com/qhkm/zeptoclaw/pull/460))

### Use Case Evolution
Users are deploying ZeptoClaw for:
- **Research automation** (browser-dependent, long-running)
- **Multi-channel delivery** (Telegram, with API compatibility for other clients)
- **Production API replacement** (OpenAI compatibility layer)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#486](https://github.com/qhkm/zeptoclaw/issues/486) — Concurrent/non-blocking design | 4 days | **High** | Maintainer response; likely needs RFC or architecture discussion given "Large" scope estimate and "No" implementation offer |
| [#460](https://github.com/qhkm/zeptoclaw/pull/460) — Context compaction | 11 days open | Medium | Review and merge; addresses crash bug |
| [#459](https://github.com/qhkm/zeptoclaw/pull/459) — BrowserTool | 11 days open | Medium | Final review; split from #410 suggests prior feedback incorporated |

**Attention flag:** [#486](https://github.com/qhkm/zeptoclaw/issues/486) is the most strategically significant unaddressed item. Without maintainer engagement, risk of contributor attrition or fork for async architecture.

---

*Digest generated from 12 data points across qhkm/zeptoclaw repository state as of 2026-04-07.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*