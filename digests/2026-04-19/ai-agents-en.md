# OpenClaw Ecosystem Digest 2026-04-19

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-19 00:13 UTC

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

# OpenClaw Project Digest — 2026-04-19

## 1. Today's Overview

OpenClaw shows **extremely high community activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a mature but stressed codebase with active triage. No new releases were published today, suggesting the project is in a stabilization period between the recent 2026.4.14 release and an anticipated next version. The issue-to-PR ratio (326 open issues vs. 346 open PRs) reveals a backlog where proposed fixes slightly outpace reported problems, though both numbers indicate substantial unresolved work. Critical stability concerns dominate: onboarding crashes, provider configuration failures, and memory issues are recurring themes. The community is particularly focused on identity verification infrastructure and subagent reliability, signaling OpenClaw's evolution toward enterprise-grade multi-agent orchestration.

---

## 2. Releases

**No new releases today.** The latest version in the wild appears to be **2026.4.14** (released ~April 14-15), which introduced several regressions now being actively patched.

---

## 3. Project Progress

### Merged/Closed PRs (Significant)

| PR | Description | Impact |
|---|---|---|
| [#68729](https://github.com/openclaw/openclaw/pull/68729) | Prompt hooks can dynamically narrow tool surface | **Major** — enables plugins to reduce token usage by filtering tools per-turn |
| [#68608](https://github.com/openclaw/openclaw/pull/68608) | Same as above (superseded #68729, closed) | Architectural foundation for plugin-extensible agent capabilities |
| [#68726](https://github.com/openclaw/openclaw/pull/68726) | Subagent error payloads include role, session key, timing | **Operational** — better debugging for distributed agent failures |
| [#68718](https://github.com/openclaw/openclaw/pull/68718) | **Minions: SQLite-backed durable job queue** | **Critical infrastructure** — persistence for subagents, ACP, CLI, cron; prevents work loss on gateway crashes |
| [#68733](https://github.com/openclaw/openclaw/pull/68733) | Prefer API audio providers before local fallback | **Reliability** — fixes audio transcription routing |
| [#68730](https://github.com/openclaw/openclaw/pull/68730) | Claude Opus 4.7 support via Anthropic Messages API on Bedrock Mantle | **Model support** — keeps pace with AWS releases |
| [#68725](https://github.com/openclaw/openclaw/pull/68725) | Known context windows for Mantle open-weight models | **Accuracy** — fixes premature context limit errors |
| [#68724](https://github.com/openclaw/openclaw/pull/68724) | BlueBubbles preserve pinned dispatcher for media fetches | **Security** — maintains SSRF protection |
| [#68722](https://github.com/openclaw/openclaw/pull/68722) | Config file chmod 0o600 after atomic rename | **Security hardening** |
| [#68721](https://github.com/openclaw/openclaw/pull/68721) | Codex app-server defaults to on-request approvals | **Security** — secure-by-default for autonomous code execution |
| [#68717](https://github.com/openclaw/openclaw/pull/68717) | Cron failure alerts enabled by default | **Reliability** — prevents silent recurring failures |
| [#68716](https://github.com/openclaw/openclaw/pull/68716) | Discord guild-admin permission verification | **Security** — fixes privilege escalation |
| [#68670](https://github.com/openclaw/openclaw/pull/68670) | MiniMax thinking-only finals promoted to text | **Model compatibility** |
| [#68269](https://github.com/openclaw/openclaw/pull/68269) | Skip gateway token warning in trusted-proxy mode | **UX** — reduces false alarms |
| [#68193](https://github.com/openclaw/openclaw/pull/68193) | Gemma 4 reasoning detection | **Model support** |

### Key Architectural Advances

- **Durable execution** ([PR #68718](https://github.com/openclaw/openclaw/pull/68718)): The "minions" SQLite job queue represents a major architectural shift from ephemeral in-memory subagent dispatch to persistent, recoverable, cancelable distributed work. This addresses a systemic reliability gap.
- **Dynamic tool surface** ([PR #68729](https://github.com/openclaw/openclaw/pull/68729)): Enables runtime plugin intelligence to optimize agent cognition costs.

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | Status | Core Concern |
|---|---|---|---|
| [#49971](https://github.com/openclaw/openclaw/issues/49971) — **RFC: Native Agent Identity & Trust Verification** | 96 | Open | **Foundational security infrastructure** for multi-agent ecosystems |
| [#45064](https://github.com/openclaw/openclaw/issues/45064) — Memory leak OOM on basic commands | 31 | **Closed** | Critical stability (2026.3.12 regression) |
| [#14593](https://github.com/openclaw/openclaw/issues/14593) — Skill install fails in Docker (brew dependency) | 24 | Open | **Container deployment UX** — 17 👍 indicates broad impact |
| [#40082](https://github.com/openclaw/openclaw/issues/40082) — Agents accept but don't execute tasks | 21 | Open | **Core reliability** — "phantom execution" undermines trust |
| [#36399](https://github.com/openclaw/openclaw/issues/36399) — 60s hangs on OAuth tool calls | 21 | Open | **Performance** — provider-specific rate limit handling |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) — Tool call text leaks to messaging channels | 20 | Open | **UX/privacy** — internal processing exposed to users |
| [#55342](https://github.com/openclaw/openclaw/issues/55342) — Behavioral reputation for skills | 16 | Open | **Security layer beyond identity** — cites 341 malicious skills on ClawHub |

### Underlying Needs Analysis

- **Identity & trust** (#49971, #55342): The community recognizes that OpenClaw's skill marketplace (ClawHub) is vulnerable to prompt injection, impersonation, and slow-burn attacks. The proposed ERC-8004 integration and behavioral reputation system suggest demand for **decentralized, cryptographically verifiable agent identity** — a differentiator from closed competitors.
- **Execution transparency** (#40082, #25592): Users cannot distinguish between "agent is working" and "agent has failed silently." This erodes trust in autonomous operation.
- **Container-native deployment** (#14593): Docker is a first-class deployment target, but skill packaging assumes macOS/Homebrew conventions.

---

## 5. Bugs & Stability

### Critical (Data Loss / Security / Complete Unusability)

| Issue | Severity | Fix PR? | Details |
|---|---|---|---|
| [#67353](https://github.com/openclaw/openclaw/issues/67353) — Onboarding crash `.trim()` on undefined | **Critical** | **Yes** — multiple PRs | Blocks new user adoption; affects all channels + skip option |
| [#67074](https://github.com/openclaw/openclaw/issues/67074) — Same crash, Chinese locale | **Critical** | Same fix | Confirmed international impact |
| [#67130](https://github.com/openclaw/openclaw/issues/67130) — Onboard crashes due to incomplete plugin meta | **Critical** | **Fixed** | Root cause identified: bundled setup plugin |
| [#45064](https://github.com/openclaw/openclaw/issues/45064) — Memory leak OOM | **Critical** | **Closed** | 2026.3.12 regression, now resolved |

### High (Performance / Provider Breakage / Feature Degradation)

| Issue | Severity | Fix PR? | Details |
|---|---|---|---|
| [#36399](https://github.com/openclaw/openclaw/issues/36399) — 60s hangs on Google Gemini OAuth | **High** | No | 6x slower than proxy; hardcoded retry logic |
| [#40082](https://github.com/openclaw/openclaw/issues/40082) — Agents don't execute, placeholder replies | **High** | No | "One sec" / "let me actually test it" — fake execution |
| [#62272](https://github.com/openclaw/openclaw/issues/62272) — Update to 2026.4.5 fails, missing `@buape/carbon` | **High** | No | Blocks updates; 7 👍 |
| [#36994](https://github.com/openclaw/openclaw/issues/36994) — Exec/tools keep breaking | **High** | No | Regression pattern: works first run, fails subsequently |
| [#67698](https://github.com/openclaw/openclaw/issues/67698) — OpenRouter "incomplete turn, payloads=0" | **High** | **Yes** — [#67425](https://github.com/openclaw/openclaw/issues/67425), [#67575](https://github.com/openclaw/openclaw/issues/67575) closed | Multiple related fixes landed |
| [#67295](https://github.com/openclaw/openclaw/issues/67295) — Wrong baseUrls in per-agent models.json | **High** | **Fixed** | Breaks OpenRouter, Arcee, OpenAI-Codex, Copilot simultaneously |

### Medium (UX / Platform-Specific / Workaround Available)

| Issue | Severity | Fix PR? | Details |
|---|---|---|---|
| [#14593](https://github.com/openclaw/openclaw/issues/14593) — Docker skill install requires brew | Medium | No | Container deployment blocked for brew-based skills |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) — Tool text leaks to channels | Medium | No | Privacy/UX issue |
| [#5116](https://github.com/openclaw/openclaw/issues/5116) — iMessage FDA doesn't propagate via LaunchAgent | Medium | No | macOS 26 specific |
| [#31486](https://github.com/openclaw/openclaw/issues/31486) — Image tool ignores custom providers | Medium | No | Configuration not respected |
| [#28222](https://github.com/openclaw/openclaw/issues/28222) — diagnostics-otel plugin missing dependency | Medium | No | Plugin system dependency management |

### Stability Assessment

**Concerning pattern**: Multiple "fixed" onboarding crashes (#67353, #67074, #67130, #67076) all stem from the same root cause (`.trim()` on undefined in channel selection/plugin metadata), suggesting **insufficient test coverage for the onboarding critical path** across locales and skip paths. The rapid-fire fixes indicate reactive rather than preventive quality assurance.

---

## 6. Feature Requests & Roadmap Signals

### Explicit Feature Requests

| Issue/PR | Request | Likelihood in Next Version |
|---|---|---|
| [#49971](https://github.com/openclaw/openclaw/issues/49971) | Native agent identity & trust verification (DID, ERC-8004, VCs) | **High** — 96 comments, security-critical, differentiation opportunity |
| [#55342](https://github.com/openclaw/openclaw/issues/55342) | Behavioral reputation layer for skills | Medium — depends on #49971 infrastructure |
| [#51130](https://github.com/openclaw/openclaw/issues/51130) | Gateway restart notification to user | Medium — UX polish, "minions" queue may enable this |
| [#17311](https://github.com/openclaw/openclaw/issues/17311) | SecretsProvider: env, keyring, 1Password | Medium — extends #16663 cloud providers |
| [#65824](https://github.com/openclaw/openclaw/issues/65824) | 11 platform gaps from intensive daily use | Medium — consolidated meta-request, needs prioritization |

### Predicted Next-Version Features (based on PR momentum)

1. **Durable subagent execution** (minions/PR #68718) — nearly certain; foundational
2. **Dynamic tool narrowing** (PR #68729) — high confidence; enables plugin ecosystem
3. **Amazon unified plugin** (Polly, Transcribe, Nova Sonic — PR #64318) — high confidence; large PR active
4. **Claude Opus 4.7 on Bedrock Mantle** (PR #68730) — immediate
5. **Gemma 4 reasoning support** (PR #68193) — immediate

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Theme | Frequency | Representative Issues |
|---|---|---|
| **"It worked before, now broken"** | Very high | #40082, #36994, #57099, #63345, #67295 — regression fatigue |
| **Silent failures / fake execution** | High | #40082 — "One sec" placeholder replies; #67698 — payloads=0 |
| **Onboarding is fragile** | High | #67353, #67074, #67130, #67076 — `.trim()` crashes block adoption |
| **Docker/container second-class** | Medium | #14593 — brew dependency; no native Linux package management |
| **Provider configuration complexity** | Medium | #67295 — wrong baseUrls; #57099 — Ollama provider registration |
| **Memory/performance degradation** | Medium | #45064 — OOM; #49888 — oversized tool results poison sessions |

### Use Cases Emerging

- **Enterprise multi-agent orchestration**: Subagent spawning, ACP (Agent Communication Protocol), durable queues
- **Security-conscious deployments**: Identity verification, skill reputation, least-privilege tool access
- **Voice/media-heavy workflows**: STT mic permissions, audio transcription, media understanding in followups

### Satisfaction/Dissatisfaction

- **Satisfied with**: Pace of model support (Claude, Gemini, Ollama, etc.), active maintainer response, plugin extensibility
- **Dissatisfied with**: Stability of releases, onboarding reliability, opaque execution state, container deployment friction

---

## 8. Backlog Watch

### Long-Unanswered Critical Issues Needing Maintainer Attention

| Issue | Age | Risk | Action Needed |
|---|---|---|---|
| [#49971](https://github.com/openclaw/openclaw/issues/49971) Agent Identity & Trust | ~1 month | **Strategic** — security differentiation | RFC review, assign core architect |
| [#55342](https://github.com/openclaw/openclaw/issues/55342) Behavioral Reputation | ~3 weeks | **Strategic** — marketplace safety | Depends on #49971; needs design sync |
| [#14593](https://github.com/openclaw/openclaw/issues/14593) Docker brew dependency | ~2 months | **Adoption blocker** — 17 👍 | Container-native skill packaging design |
| [#40082](https://github.com/openclaw/openclaw/issues/40082) Phantom task execution | ~6 weeks | **Trust erosion** | Root cause analysis; may relate to #36994 |
| [#36994](https://github.com/openclaw/openclaw/issues/36994) Exec/tools keep breaking | ~6 weeks | **Core functionality** | Stability sprint; Pinokio interaction |
| [#49888](https://github.com/openclaw/openclaw/issues/49888) Oversized toolResult poisoning | ~4 weeks | **Performance/Reliability** | Session hygiene architecture |
| [#43556](https://github.com/openclaw/openclaw/issues/43556) streamTo breaks subagent runtime | ~5 weeks | **Subagent reliability** — 8 👍 | Subagent contract review |

### Stale PRs at Risk of Bitrot

| PR | Age | Risk |
|---|---|---|
| [#36630](https://github.com/openclaw/openclaw/pull/36630) Signal bidirectional quote-reply | ~6 weeks | Large XL PR; merge conflicts likely |
| [#46454](https://github.com/openclaw/openclaw/pull/46454) Media understanding for followups | ~5 weeks | Depends on followup runner architecture |
| [#46303](https://github.com/openclaw/openclaw/pull/46303) Drain buffers before SIGUSR1 reload | ~5 weeks | Reliability-critical; needs review bandwidth |
| [#46741](https://github.com/openclaw/openclaw/pull/46741) Defer sessions_yield announce | ~5 weeks | Concurrency correctness |

---

## Project Health Assessment

| Metric | Assessment |
|---|---|
| **Activity** | 🔥 Exceptional — 1000 items/day indicates vibrant community |
| **Responsiveness** | ⚡ High — rapid closure of onboarding crashes |
| **Stability** | ⚠️ **At risk** — regression pattern suggests insufficient pre-release validation |
| **Security posture** | 📈 Improving — identity RFC, reputation layer, permission fixes |
| **Technical debt** | ⚠️ **Accumulating** — large backlog of open XL PRs, stale issues |
| **Ecosystem maturity** | 📈 Advancing — durable queues, dynamic hooks, unified providers |

**Recommendation**: A stabilization release (2026.4.15/16) with focused regression testing for onboarding, subagent execution, and provider configuration would rebuild user confidence before pursuing the ambitious identity/reputation roadmap.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent Ecosystem
## 2026-04-19 Community Digest Analysis

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing intense parallel development across 13+ active projects, with daily issue/PR volumes exceeding 1,000 items collectively. The landscape shows a clear bifurcation: **mature orchestration frameworks** (OpenClaw, ZeroClaw) battling stability debt from rapid feature expansion versus **emerging lightweight alternatives** (NanoBot, PicoClaw, NanoClaw) prioritizing architectural cleanliness and specific deployment targets. A dominant industry-wide shift toward **multi-agent orchestration**, **persistent memory systems**, and **enterprise-grade security** is visible across all major projects, with containerized and self-hosted deployments now table stakes rather than differentiators.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Status |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | None (stabilizing post-2026.4.14) | ⚠️ At Risk | High volume, regression fatigue |
| **NanoBot** | 25 | 54 | None | 🟢 Healthy | Strong closure rate (70%), memory focus |
| **Hermes Agent** | 50 | 50 | None | 🟡 Stressed | 78% open issue rate, Gemini auth crisis |
| **PicoClaw** | 11 | 8 | v0.2.6-nightly | 🔴 Compromised | Critical auth regression in release |
| **NanoClaw** | 5 | 21 | None | 🟡 Refactoring | v2 modularization, bus factor risk |
| **NullClaw** | 8 | 11 | None ("dev") | 🟡 Pre-release | Tool customization push, parsing bugs |
| **IronClaw** | 18 | 50 | None | 🟡 Bottlenecked | 82% open PR rate, gateway refactor |
| **LobsterAI** | 0 | 2 (stale) | None | 🔴 Dormant | Minimal activity, stale PRs |
| **TinyClaw** | 0 | 0 | None | ⚫ Inactive | No activity |
| **Moltis** | 4 | 11 | None | 🟢 Healthy | Same-day merges, infrastructure focus |
| **CoPaw/QwenPaw** | 15 | 11 | None | 🟡 Strained | Rebrand friction, Windows instability |
| **ZeptoClaw** | 0 | 0 | None | ⚫ Inactive | No activity |
| **ZeroClaw** | 49 | 46 | v0.7.0-beta.1047, v0.7.1-beta.1049 | 🔴 Turbulent | Post-major-refactor regression wave |

---

## 3. OpenClaw's Position

| Dimension | OpenClaw Advantage | Peer Challenge |
|:---|:---|:---|
| **Scale** | 1000 items/day = 10x nearest competitor | ZeroClaw (95 items), Hermes (100 items) |
| **Enterprise features** | Durable subagent queues (SQLite), dynamic tool narrowing, identity verification RFC | NanoBot lacks durable execution; Hermes lacks native identity layer |
| **Provider breadth** | Claude Opus 4.7 Bedrock, Gemini, Ollama, OpenRouter, MiniMax, Gemma 4 | PicoClaw broken on OpenAI-compatible auth; CoPaw struggling with llama.cpp/Ollama |
| **Multi-agent infrastructure** | ACP protocol, subagent error payloads with session keys, cron failure alerts | IronClaw's engine v2 still stabilizing; NanoClaw's scheduling module regressing |

**Technical approach differences:**
- **OpenClaw**: Monolithic but plugin-extensible; heavy investment in runtime safety (approvals, durable queues, identity verification)
- **ZeroClaw**: Cargo workspace modularity; security-first sandboxing but currently too restrictive for production
- **NanoBot**: Flat memory architecture (`history.jsonl` + `MEMORY.md`); lightweight but hitting scaling walls
- **Hermes Agent**: Self-modification as core differentiator; memory via external `mempalace` integration

**Community size**: OpenClaw's 1000 daily items dwarfs all peers; however, its 326 open issues vs. 346 open PRs suggests **volume without velocity**—a backlog management challenge smaller projects (Moltis: 11 PRs with same-day merges) avoid.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Persistent/durable execution** | OpenClaw, ZeroClaw, NanoClaw, Hermes | OpenClaw: SQLite job queues ("minions"); ZeroClaw: schema v2 live migration; NanoClaw: scheduling module extraction; Hermes: `mempalace` external memory |
| **Memory system overhaul** | NanoBot, CoPaw, Hermes, ZeroClaw | NanoBot #3227: hierarchical beyond flat `history.jsonl`; CoPaw #3548: auto-memory/auto-dream; Hermes #6323: `mempalace` (21 👍); ZeroClaw #5849: "Dream Mode" |
| **Identity & trust verification** | OpenClaw, IronClaw, ZeroClaw | OpenClaw #49971: ERC-8004/DID/VCs (96 comments); IronClaw #2617: identity newtypes; ZeroClaw: OTP `gated_actions` validation gaps |
| **Provider auth robustness** | Hermes, PicoClaw, NanoBot, ZeroClaw | Hermes: 4 Gemini auth issues in 24h; PicoClaw #2578: silent API key dropping; NanoBot #3206: multiple credential conflict; ZeroClaw #5815: schema v2 ignores `llamacpp` |
| **Container/self-hosting polish** | OpenClaw, ZeroClaw, PicoClaw, NanoClaw, IronClaw | OpenClaw #14593: Docker brew dependency; ZeroClaw #5879: K8s manifests; PicoClaw #618: self-upgrade; NanoClaw #1637: CasaOS; IronClaw #1820: secrets store headless |
| **Sandbox security ↔ usability tension** | ZeroClaw, OpenClaw, PicoClaw | ZeroClaw #5719-#5722: sandbox blocks FINOS compliance; OpenClaw #68721: Codex on-request approvals; PicoClaw #2313: "Agent Shield" multi-user |
| **E2E/test stabilization** | IronClaw, OpenClaw, CoPaw | IronClaw: 5 E2E issues closed today; OpenClaw: onboarding crash cluster from insufficient test coverage; CoPaw #3559: Vitest infrastructure |

---

## 5. Differentiation Analysis

| Project | Core Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Enterprise multi-agent orchestration with verifiable identity | Platform engineers, enterprise IT | TypeScript/monolithic with plugin registry; SQLite durable queues |
| **ZeroClaw** | Security-first Rust sandbox with maximum provider compatibility | Privacy-conscious self-hosters, regulated industries | Cargo workspace; TOML config with live migration; feature-gated compilation |
| **NanoBot** | Lightweight Python agent with "Dream" memory consolidation | Individual developers, small teams | Flat file memory; uv package management; systemd deployment |
| **Hermes Agent** | Self-modifying agent with skill marketplace | Power users, automation enthusiasts | Async tool execution; Atropos integration; `mempalace` external memory |
| **PicoClaw** | Embedded/IoT-first lightweight footprint | Edge deployers, Chinese market | Rust; opkg support; Termux/Android; Feishu-native |
| **NanoClaw** | Protocol-agnostic modular architecture (v2 refactor) | Protocol-native communities (Matrix, Nostr) | Registry-based optional modules; Chat SDK + approval dialogs |
| **Moltis** | Code-aware RAG with FTS5 indexing | Developers, code-centric workflows | Rust workspace; `moltis-code-index` + `moltis-splitter` crates |
| **CoPaw/QwenPaw** | Qwen model ecosystem integration | Chinese-speaking users, Alibaba Cloud | Brand transition; AgentScope 2.0; LLM routing UI |
| **IronClaw** | NEAR blockchain-adjacent agent runtime | Web3 developers, NEAR ecosystem | WASM channels; engine v2; WebAuthn passkey auth |

**Key architectural divides:**
- **Memory**: Flat files (NanoBot) vs. external services (Hermes `mempalace`) vs. hierarchical rebuilds (CoPaw #3548) vs. "Dream" consolidation (NanoBot/ZeroClaw)
- **Sandboxing**: ZeroClaw's restrictive Docker-native default vs. OpenClaw's on-request approval model vs. PicoClaw's emerging "Agent Shield"
- **Modularity**: NanoClaw's v2 registry-based extraction vs. ZeroClaw's Cargo workspace vs. OpenClaw's plugin hooks

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|:---|:---|:---|
| **🔥 Hyper-velocity (500+ items/day)** | OpenClaw | Mature but stressed; volume indicates success and maintenance burden |
| **⚡ High-velocity (50-100 items/day)** | ZeroClaw, Hermes Agent, IronClaw | Active development with significant quality pressure; stabilization vs. feature tension |
| **🚀 Rapid iteration (20-50 items/day)** | NanoBot, NanoClaw, CoPaw | Healthy growth; architectural decisions being made now |
| **📈 Emerging (10-20 items/day)** | PicoClaw, Moltis, NullClaw | Finding product-market fit; infrastructure investment |
| **💤 Dormant/inactive** | LobsterAI, TinyClaw, ZeptoClaw | Stale PRs, no activity; contributor attrition risk |

**Stabilizing vs. iterating:**
- **Stabilizing**: OpenClaw (post-2026.4.14 regression fixes), ZeroClaw (v0.7.2 "no runtime changes" milestone), IronClaw (gateway refactor stage 5)
- **Iterating rapidly**: NanoBot (memory system refinement), NanoClaw (v2 modularization), Moltis (code indexing + web UI migration)
- **At risk**: PicoClaw (v0.2.6 auth regression needs hotfix), CoPaw (Windows failures + rebrand friction), LobsterAI (maintainer absence)

---

## 7. Trend Signals

| Trend | Evidence Across Projects | Implication for Developers |
|:---|:---|:---|
| **Agent identity as security primitive** | OpenClaw #49971 (96 comments, ERC-8004); IronClaw identity newtypes; ZeroClaw OTP validation; PicoClaw "Agent Shield" | Decentralized, cryptographically verifiable agent-to-agent trust is becoming foundational, not optional. Skill marketplaces require reputation systems. |
| **Memory as bottleneck, not solved problem** | NanoBot #3227: "existing memory system... in retaining details方面有些吃力"; CoPaw #3548 rebuild; Hermes #6323 external memory; ZeroClaw "Dream Mode" | Flat context + periodic compression is insufficient for long-horizon tasks. Hierarchical, queryable, and reflective memory architectures are next competitive battleground. |
| **Sandbox escape as production blocker** | ZeroClaw perlowja cluster: 4 S1/S2 bugs on sandbox/policy; OpenClaw #68721 secure-by-default Codex; PicoClaw #2313 multi-user security | Security defaults designed for hypothetical threats are blocking real workflows. "Secure by default, override by policy" is replacing "maximum lockdown." |
| **Provider fragility as systemic risk** | Hermes: 4 Gemini issues in 24h; PicoClaw: auth header regression; NanoBot: Groq base URL, Gemini auth; ZeroClaw: MiniMax tool stripping | Multi-provider abstraction layers are leaky. Projects investing in provider-specific testing infrastructure (OpenClaw's Bedrock Mantle support) gain reliability advantage. |
| **Voice/media as emerging standard** | OpenClaw: audio provider routing, STT mic permissions; ZeroClaw: `voice-wake` feature, native STT; Moltis: meeting intelligence (#91) | Text-only agents are becoming legacy. Local STT (whisper.cpp), audio understanding, and media followups are table stakes for next-generation agents. |
| **Self-hosting sovereignty demand** | NanoClaw: Matrix + Nostr + CasaOS; ZeroClaw: K8s manifests + local STT; PicoClaw: Termux + embedded; OpenClaw: Docker brew dependency frustration | Users rejecting cloud-dependent agents. Federated protocols, local inference, and edge deployment are growth vectors. |
| **"It worked before, now broken" fatigue** | Universal across all projects with releases | Regression testing, staged rollouts, and config migration validation are becoming competitive differentiators. User tolerance for breaking changes is near zero. |

---

*Report generated from 2026-04-19 community digests across 13 projects. Data reflects single-day snapshot; trends require longitudinal validation.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-19

**Repository:** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. Today's Overview

NanoBot showed **very high development velocity** over the past 24 hours with 79 total items updated (25 issues, 54 PRs) and a healthy 70% closure rate on PRs (38 merged/closed vs. 16 open). The project is in active feature development with significant community contribution, particularly around memory system improvements, provider stability, and gateway lifecycle management. No new releases were cut, suggesting the team is accumulating changes for a larger version bump. The contributor base is broadening with multiple first-time PR authors landing features.

---

## 2. Releases

**No new releases** in the past 24 hours. Latest release remains prior to this period.

---

## 3. Project Progress

### Merged/Closed PRs (38 total; key highlights)

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #3289 | longle325 | **Fix GitStore nested repo bug** — Prevents `porcelain.init()` from creating nested `.git` directories and overwriting `.gitignore` when workspace is already inside a git repository | [PR #3289](https://github.com/HKUDS/nanobot/pull/3289) |
| #3287 | chengyongru | **Add structured issue templates** — Bug report and feature request templates with dropdowns for channel/provider/Python/OS; disables blank issues | [PR #3287](https://github.com/HKUDS/nanobot/pull/3287) |
| #3281 | subalkum | **Configurable memory consolidation ratio** — Adds `consolidationRatio` to AgentDefaults (0.1-0.95 range, default 0.5); superseded by #3285 | [PR #3281](https://github.com/HKUDS/nanobot/pull/3281) |
| #3277 | chengyongru | **Wizard enhancement** — Channel Common, API Server menus with constraint validation | [PR #3277](https://github.com/HKUDS/nanobot/pull/3277) |
| #3271 | pixan-ai | **Fix TTY detection in stream renderer** — Respects `sys.stdout.isatty()` to prevent escape sequences in pipes/Docker | [PR #3271](https://github.com/HKUDS/nanobot/pull/3271) |
| #3112 | zijiefang | **Fix config API base resolution** — Aligns `Config.get_api_base()` with provider registry defaults | [PR #3112](https://github.com/HKUDS/nanobot/pull/3112) |
| #3109 | wanghesong2019 | **Lightweight model router** — Auto-routes simple tasks to cheaper "light model" vs. complex tasks to primary model | [PR #3109](https://github.com/HKUDS/nanobot/pull/3109) |
| #3125 | yeyitech | **Harden cron tool contract** — Action-specific requirements, runtime validation, duplicate call blocking | [PR #3125](https://github.com/HKUDS/nanobot/pull/3125) |

**Key advancement:** Memory system configurability is actively being refined with two competing PRs (#3281 closed, #3285 open) for consolidation ratio control, indicating rapid iteration on user feedback.

---

## 4. Community Hot Topics

### Most Active Discussions (by engagement)

| # | Topic | Comments | 👍 | Link | Underlying Need |
|:---|:---|:---:|:---:|:---|:---|
| **#3227** | Memory system limitations in long/large projects | **13** | 4 | [Issue #3227](https://github.com/HKUDS/nanobot/issues/3227) | **Scalable long-term memory architecture** — Users need hierarchical memory beyond flat `history.jsonl` + `MEMORY.md` injection; Dream's 2-hour cycle is too coarse |
| **#3206** | Gemini provider API key error ("Multiple authentication credentials") | 5 | 0 | [Issue #3206](https://github.com/HKUDS/nanobot/issues/3206) | **Provider auth robustness** — Conflicting credential paths (env vs. config) causing silent failures |
| **#3274** | `maybe_consolidate_by_tokens()` vs `AutoCompact._archive()` summary injection strategy | 4 | 0 | [Issue #3274](https://github.com/HKUDS/nanobot/issues/3274) | **Memory system transparency** — Contributors need architectural clarity on why two compression paths behave differently |
| **#3220** | Infinite empty tool-call loop with non-compliant API gateways | 4 | 0 | [Issue #3220](https://github.com/HKUDS/nanobot/issues/3220) | **Defensive agent loop design** — Gateways violating OpenAI spec (tool_calls without `finish_reason="tool_calls"`) crash the agent |

**Community signal:** Memory architecture is the #1 concern. Issue #3227's detailed critique from a user who "really likes this code" but hit scaling limits has become a rallying point for redesign discussion.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Details |
|:---|:---|:---|:---|:---|
| **P0 — Auth failure** | [#3206](https://github.com/HKUDS/nanobot/issues/3206) Gemini "Multiple authentication credentials" | **OPEN** | ❌ No | Blocks Gemini users; credential priority logic unclear |
| **P0 — Config silent fail** | [#3251](https://github.com/HKUDS/nanobot/issues/3251) `${VAR}` env syntax not parsed | **CLOSED** | ✅ #3251 (self-resolved) | 78+ hour outage for Feishu channel; config system defect |
| **P1 — Infinite loop** | [#3220](https://github.com/HKUDS/nanobot/issues/3220) Empty tool-call loop on bad gateways | **CLOSED** | ✅ #3220 | Agent loop lacked `finish_reason` validation |
| **P1 — Hang/crash** | [#2804](https://github.com/HKUDS/nanobot/issues/2804) DuckDuckGo search hangs indefinitely | **CLOSED** | ✅ #2804 | `asyncio.to_thread(ddgs.text, ...)` blocks message pipeline |
| **P1 — Hang/crash** | [#2071](https://github.com/HKUDS/nanobot/issues/2071) DuckDuckGo search not working (config) | **OPEN** | ❌ No | Related to #2804 but config-level; user workaround exists |
| **P2 — Streaming failure** | [#2709](https://github.com/HKUDS/nanobot/issues/2709) "Streaming required for >10min operations" | **OPEN** | ❌ No | Anthropic-specific timeout; needs long-request pattern |
| **P2 — Data loss** | [#3250](https://github.com/HKUDS/nanobot/issues/3250) PPTX table/grouped shape text missing | **CLOSED** | ✅ #3250 | `python-pptx` extraction gaps |
| **P2 — Provider bug** | [#3213](https://github.com/HKUDS/nanobot/issues/3213) GroqTranscription ignores `apiBase` | **CLOSED** | ✅ #3213 | Only read `GROQ_BASE_URL` env, not config |

**Stability assessment:** Strong closure rate on bugs, but **two P0-class issues remain open** (#3206, #2709). The DuckDuckGo search reliability problems (#2804/#2071) appear partially addressed but not fully resolved at the configuration layer.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Configurable memory consolidation ratio** | [#3270](https://github.com/HKUDS/nanobot/issues/3270) → [#3285](https://github.com/HKUDS/nanobot/pull/3285) | **HIGH** | Two PRs in 24h; direct response to user pain; simple config addition |
| **Gateway lifecycle notifications (on_start/on_stop)** | [#3279](https://github.com/HKUDS/nanobot/issues/3279) → [#3291](https://github.com/HKUDS/nanobot/pull/3291) | **HIGH** | PR already open; systemd deployment pain is common; low risk |
| **Session-level "focus tool" for task anchoring** | [#3292](https://github.com/HKUDS/nanobot/issues/3292) | **MEDIUM** | Well-specified feature request; aligns with memory system redesign needs; requires architecture discussion |
| **Customizable Dream/skill drift control** | [#3282](https://github.com/HKUDS/nanobot/issues/3282) | **MEDIUM** | User already overwriting templates; first-party config would reduce fragility |
| **Agent checkpointing & resume** | [#3027](https://github.com/HKUDS/nanobot/issues/3027) | **LOW-MEDIUM** | High value but complex; may depend on memory refactor |
| **Lightweight model router** | [#3109](https://github.com/HKUDS/nanobot/pull/3109) | **MERGED** | Already in; cost optimization feature |
| **Unified `manage_skill` CRUD tool** | [#3137](https://github.com/HKUDS/nanobot/pull/3137) | **MEDIUM** | Open PR; skill management is active development area |

**Prediction:** Next release (likely 0.1.6 or 0.2.0) will include consolidation ratio config, gateway lifecycle hooks, and possibly the skill management tool. Memory architecture overhaul (#3227) may require longer design cycle.

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Memory system doesn't scale** | "In long-running sessions, early messages are often compressed or dropped" [#3274](https://github.com/HKUDS/nanobot/issues/3274); "existing memory system... in retaining details方面有些吃力" [#3227](https://github.com/HKUDS/nanobot/issues/3227) | Critical |
| **Dream process introduces noise** | "my files just drifted and the dream process introduces noise in the skills" [#3282](https://github.com/HKUDS/nanobot/issues/3282) | High |
| **Uninstall/documentation gaps** | "why cant i uninstall and why does it still run when i delete it on uv" [#3267](https://github.com/HKUDS/nanobot/issues/3267) | Medium |
| **Provider-specific quirks** | Gemini auth [#3206](https://github.com/HKUDS/nanobot/issues/3206), Groq base URL [#3213](https://github.com/HKUDS/nanobot/issues/3213), Anthropic streaming [#2709](https://github.com/HKUDS/nanobot/issues/2709) | Medium |
| **No issue templates = poor reports** | "有很多issue就提供一个报错...系统信息 nanobot版本都没有" [#3283](https://github.com/HKUDS/nanobot/issues/3283) | Low (now fixed) |

### Positive Signals

- Code quality appreciation: "整洁、轻巧、容易上手，探索起来是一种享受" [#3227](https://github.com/HKUDS/nanobot/issues/3227)
- Active community problem-solving: Users proposing specific fixes (e.g., [#2853](https://github.com/HKUDS/nanobot/issues/2853) Gemini sub-agent role workaround)
- Broad platform coverage: Windows, Docker, systemd, Feishu, Discord all represented

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Status | Risk | Action Needed |
|:---|:---|:---|:---|:---|
| [#3047](https://github.com/HKUDS/nanobot/issues/3047) Dream memory consolidation issues | 8 days | **OPEN**, 2 comments | **Memory redesign blocker** | Architectural response to #3227's critique; may need RFC |
| [#2071](https://github.com/HKUDS/nanobot/issues/2071) DuckDuckGo search config failure | 35 days | **OPEN**, 1 comment | Search feature partially broken | Reproduce config-less setup; likely simple default fix |
| [#2853](https://github.com/HKUDS/nanobot/issues/2853) Gemini sub-agent no completion details | 13 days | **OPEN**, 1 comment | Gemini compatibility gap | Review proposed `current_role` fix; test for regressions |
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) Preserve session on `/stop` | 24 days | **OPEN** | Data loss on user interrupt | Code review; merge-ready? |
| [#3205](https://github.com/HKUDS/nanobot/pull/3205) Circuit breaker for Responses API | 2 days | **OPEN** | Production resilience | Review circuit breaker logic; half-open state timing |
| [#3202](https://github.com/HKUDS/nanobot/pull/3202) Bounded inbound queue | 2 days | **OPEN** | Memory safety critical | Review critical fix for queue size 0 edge case |

**Escalation recommendation:** [#3047](https://github.com/HKUDS/nanobot/issues/3047) + [#3227](https://github.com/HKUDS/nanobot/issues/3227) together represent a **coherent memory system redesign request** that deserves a maintainer-written response or design doc. The current PR velocity suggests capacity exists, but strategic direction on memory architecture is unclear to contributors.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-19

## 1. Today's Overview

Hermes Agent shows **high community velocity** with 50 issues and 50 PRs updated in the last 24 hours, indicating an active development cycle with substantial user engagement. The project is currently in a **stabilization phase** with zero new releases, focusing on bug fixes and provider compatibility rather than feature launches. A notable pattern is the concentration of Gemini/Google provider authentication issues (4+ related issues closed today), suggesting recent provider-side changes or a Hermes regression in that area. The 78% open issue rate (39/50) and 74% open PR rate (37/50) indicate a growing backlog that may need maintainer attention. Cross-platform support (Windows native, Termux, nix-darwin) is emerging as a significant theme in both issues and PRs.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#201](https://github.com/NousResearch/hermes-agent/pull/201) | 0xbyt4 | **Skills hub dedup trust-level fix**: Corrected ranking so `builtin (2) > trusted (1) > community (0)` prevents trusted results overwriting builtins | Reliability |
| [#19](https://github.com/NousResearch/hermes-agent/pull/19) | teknium1 | **Async tool execution + Atropos integration**: Thread pool executor for sync tools in async contexts; event loop compatibility fixes | Performance, integration |
| [#55](https://github.com/NousResearch/hermes-agent/pull/55) | bierlingm | **Clean Ctrl+C shutdown**: Suppresses `SystemExit` traceback during atexit cleanup from browser tool | UX polish |
| [#12328](https://github.com/NousResearch/hermes-agent/pull/12328) | yakovkhalinsky | **CI stabilization**: Fixes test failures, marks flaky tests serial, adds category merges for single-field categories | Developer experience |
| [#433](https://github.com/NousResearch/hermes-agent/pull/433) | Farukest | **Cross-platform port cleanup**: Replaces Linux-only `fuser` with Windows-compatible `netstat`-based cleanup | Windows support |
| [#12148](https://github.com/NousResearch/hermes-agent/pull/12148) | mtuwei | **Rate limit cooldown**: Prevents hammering rate-limited primary providers during fallback | Reliability, cost |

**Key advances**: Trust-level correctness in skill resolution, async architecture hardening, CI reliability, and cross-platform portability.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#6323 — mempalace external memory](https://github.com/NousResearch/hermes-agent/issues/6323) | 10 comments, 21 👍 | **Highest community demand**. Users want persistent, queryable memory beyond context windows. The linked [mempalace](https://github.com/milla-jovovich/mempalace) repo suggests ecosystem interest in memory architectures. **Underlying need**: Long-horizon task continuity — a core limitation of current LLM agents. |
| [#7893 — Gemini "Multiple authentication credentials"](https://github.com/NousResearch/hermes-agent/issues/7893) | 16 comments | **Most discussed bug**. Complex auth interaction between native Gemini provider and Vertex AI-generated keys. Resolution involved key format differences (`AQ.Ab8...` prefix). **Underlying need**: Clearer provider auth documentation and validation. |
| [#2706 — Response truncation](https://github.com/NousResearch/hermes-agent/issues/2706) | 8 comments | Rollback behavior on `finish_reason='length'` creates poor UX for long outputs. **Underlying need**: Streaming/chunked handling or user-configurable output limits. |
| [#12127 / #12168 — Gemini API_KEY_INVALID](https://github.com/NousResearch/hermes-agent/issues/12127) | 6 & 3 comments | Cluster of Gemini auth regressions post-update. Valid keys failing, OpenAI-compatible endpoint fragility. **Underlying need**: Provider API stability and backward compatibility. |
| [#9782 — nix-darwin support](https://github.com/NousResearch/hermes-agent/issues/9782) | 6 comments | Nix ecosystem expansion request. **Underlying need**: Hermes adoption in declarative macOS environments. |

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Details |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#11001 — Death spiral: 400 invalid tool call → context compression loop](https://github.com/NousResearch/hermes-agent/issues/11001) | **CLOSED** | Yes (implied) | Non-OpenAI models (GLM-5.1 via Ollama) trigger infinite retry loop instead of graceful abort. **Regression risk**: Affects all non-compliant providers. |
| 🔴 **Critical** | [#4662 — Malformed persisted tool calls poison sessions](https://github.com/NousResearch/hermes-agent/issues/4662) | **OPEN** | No | Persisted invalid tool calls replay to provider, causing repeated 400s. **Data integrity issue** — requires session sanitization. |
| 🟡 **High** | [#7893 — Gemini multiple auth credentials](https://github.com/NousResearch/hermes-agent/issues/7893) | **CLOSED** | No explicit PR | Native Gemini provider + `.env` key conflict. |
| 🟡 **High** | [#12127 — Gemini API_KEY_INVALID](https://github.com/NousResearch/hermes-agent/issues/12127) | **CLOSED** | No explicit PR | Post-update regression, OpenAI-compatible endpoint breakage. |
| 🟡 **High** | [#12168 — Gemini invalid key](https://github.com/NousResearch/hermes-agent/issues/12168) | **CLOSED** | No explicit PR | Same root as #12127 — endpoint URL confusion (`generativelanguage.googleapis.com/v1beta/openai`). |
| 🟡 **High** | [#12242 — StepFun broken JSON in context_compressor](https://github.com/NousResearch/hermes-agent/issues/12242) | **OPEN** | No | Truncation produces invalid JSON (unterminated strings). **Strict API compatibility issue**. |
| 🟡 **High** | [#12260 — `~` expansion uses wrong HOME](https://github.com/NousResearch/hermes-agent/issues/12260) | **OPEN** | No | Containerized deployments broken: `os.path.expanduser()` uses process HOME vs. `HERMES_HOME`. |
| 🟡 **High** | [#9331 — `load_pool()` destructively prunes env credentials](https://github.com/NousResearch/hermes-agent/issues/9331) | **OPEN** | No | Read operation has destructive side effect — credential loss when env vars absent. |
| 🟢 **Medium** | [#5472 — Discord `send_message` targets wrong channel](https://github.com/NousResearch/hermes-agent/issues/5472) | **OPEN** | [#12320](https://github.com/NousResearch/hermes-agent/pull/12320) | Gateway session context not respected. **PR available for review**. |
| 🟢 **Medium** | [#12296 — Kimi model switch silent fallback](https://github.com/NousResearch/hermes-agent/issues/12296) | **OPEN** | No | Provider slug mismatch causes silent default fallback. |
| 🟢 **Medium** | [#6133 — `vars()` on response objects without `__dict__`](https://github.com/NousResearch/hermes-agent/issues/6133) | **OPEN** | No | Pydantic/slotted class incompatibility in `run_agent.py:7479`. |
| 🟢 **Medium** | [#10573 — "copied evolver"](https://github.com/NousResearch/hermes-agent/issues/10573) | **OPEN** | No | Spam/low-quality report, but 2 👍 suggests possible real issue obscured by poor description. |

**Gemini provider stability** is the dominant theme — 4 related issues in 24h suggests either a Google API change or a Hermes regression in auth handling.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Category | Predicted Priority | Rationale |
|:---|:---|:---|:---|
| [#12327 — Desired-state planning engine](https://github.com/NousResearch/hermes-agent/issues/12327) | Core architecture | **Medium-High** | From teknium1 (repeat contributor, PR #19). Aligns with agent autonomy trends; large scope. |
| [#12326 — Persistent cross-session todo system](https://github.com/NousResearch/hermes-agent/issues/12326) | Productivity integration | **Medium** | Also teknium1. Complements #6323 (mempalace) — memory + task management as unified theme. |
| [#6323 — mempalace external memory](https://github.com/NousResearch/hermes-agent/issues/6323) | Memory architecture | **High** | 21 👍, highest community demand. External repo exists — could be fast to integrate. |
| [#12238 — Auto-backup & version control for `~/.hermes/`](https://github.com/NousResearch/hermes-agent/issues/12238) | Data reliability | **Medium** | 2 👍, self-modification safety concern. Low implementation cost, high user trust impact. |
| [#12213 — `compress_context` as native Tool](https://github.com/NousResearch/hermes-agent/issues/12213) | Tool ecosystem | **Low-Medium** | Enables SKILL.md procedural use. Small surface area. |
| [#12188 — Docker compose env var config](https://github.com/NousResearch/hermes-agent/issues/12188) | Deployment | **Medium** | Container-native configuration is table stakes for production use. |
| [#10656 — `script_skip_if_empty` for cron](https://github.com/NousResearch/hermes-agent/issues/10656) | Cron/scheduler | **Low-Medium** | Cost optimization, straightforward implementation. |

**Emerging theme**: Memory persistence (#6323, #12326, #12327) and self-modification safety (#12238, #11692) suggest the community is pushing Hermes from "chat assistant" toward "long-running autonomous agent."

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Intensity |
|:---|:---|:---|
| **Provider auth fragility** | #7893, #12127, #12168, #12167 (MiniMax), #8259 (NVIDIA) | 🔴 Severe |
| **Google/Gemini specifically broken** | 4 issues, all post-update | 🔴 Severe |
| **Cross-platform install friction** | #9782 (nix-darwin), #10565, #12317 (Windows native), #9846 (Termux) | 🟡 Moderate-High |
| **Silent failures / poor observability** | #5861 (cron delivery shows "ok"), #12296 (silent model fallback) | 🟡 Moderate |
| **Context/compression bugs** | #2706, #12242, #12213, #11001 | 🟡 Moderate |
| **Credential management** | #7863 (dead config), #9331 (destructive prune) | 🟢 Moderate |

### Use Cases
- **Discord/Telegram gateway deployments** — session-aware messaging (#5472, #5861)
- **Self-hosting with diverse providers** — NVIDIA NIM, MiniMax, Gemini, StepFun, Kimi
- **Declarative/infra-as-code setups** — Nix, Docker Compose
- **Long-horizon autonomous operation** — mempalace, desired-state planning, persistent todos

### Satisfaction Signals
- High engagement (50 issues/PRs daily) indicates active user investment
- teknium1's repeated contributions (PR #19, issues #12326, #12327) suggest power-user commitment

### Dissatisfaction Signals
- "Death spiral" terminology (#11001) indicates frustration with error handling
- Multiple "worked before, broken now" reports (#12127: "Worked fine in previous version")
- "Lackluster" documentation complaint (#12188)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#4662 — Malformed tool calls poison sessions](https://github.com/NousResearch/hermes-agent/issues/4662) | 17 days | **High** — data corruption, no workaround | Maintainer triage, session validation design |
| [#6323 — mempalace](https://github.com/NousResearch/hermes-agent/issues/6323) | 11 days | **High** — 21 👍, community flagship request | Maintainer response on integration feasibility |
| [#5472 — Discord session targeting](https://github.com/NousResearch/hermes-agent/issues/5472) | 13 days | **Medium** — PR #12320 available | PR review and merge |
| [#5861 — Silent cron delivery failures](https://github.com/NousResearch/hermes-agent/issues/5861) | 12 days | **Medium** — reliability gap | Delivery status propagation fix |
| [#7863 — `suppressed_sources` dead config](https://github.com/NousResearch/hermes-agent/issues/7863) | 8 days | **Low-Medium** — security/privacy | Implement read path or deprecate |
| [#6133 — `vars()` TypeError](https://github.com/NousResearch/hermes-agent/issues/6133) | 11 days | **Medium** — intermittent crashes | Defensive coding, SDK compatibility |
| [#11692 — Receipts for self-improving agents](https://github.com/NousResearch/hermes-agent/issues/11692) | 2 days | **Medium** — governance/design | Architectural discussion, not quick fix |

**Critical gap**: No maintainer-visible response on #6323 (mempalace) despite being the highest-voted open issue. The project's positioning as "the only agent that can self-modify" (#11692) creates unmet expectations around provenance and safety that need architectural attention.

---

*Digest generated from 50 issues and 50 PRs updated 2026-04-18 to 2026-04-19.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-19

## 1. Today's Overview

PicoClaw shows **high community activity** with 11 fresh issues and 8 PRs updated in the last 24 hours, indicating a rapidly maturing AI agent framework under active development. The project released its latest nightly build (`v0.2.6-nightly.20260418.6126ede9`) on the heels of the v0.2.6 stable release, suggesting accelerated iteration. However, **provider-layer stability is emerging as a critical concern**: three distinct authentication/connection bugs were filed against v0.2.6 within 24 hours, including a severe regression where API keys are silently dropped from all config sources. On the feature front, the community is pushing hard toward enterprise readiness (multi-user security, observability, self-upgrade) and expanded platform coverage (Android, Feishu/Lark). The maintainer team's response velocity to these incoming reports will be a key health indicator in coming days.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [`v0.2.6-nightly.20260418.6126ede9`](https://github.com/sipeed/picoclaw/compare/v0.2.6...main) | Nightly | Automated build from `main` branch; **may be unstable** |

**⚠️ Migration Caution**: The nightly build follows closely after v0.2.6, which [Issue #2578](https://github.com/sipeed/picoclaw/issues/2578) identifies contains a **critical regression** in `openai_compat` provider authentication. Users on v0.2.6 or this nightly should verify API key transmission if using non-OpenAI-compatible endpoints.

---

## 3. Project Progress

### Closed/Merged PRs (3 items)

| PR | Status | Summary | Significance |
|----|--------|---------|------------|
| [#2575](https://github.com/sipeed/picoclaw/pull/2575) | **Merged** | Refactored diff tool with independent path validation, `fstools.ToolResult` standardization, strict integer arg checking | Tool architecture hardening |
| [#2576](https://github.com/sipeed/picoclaw/pull/2576) | **Merged** | PID/token updates, gateway logging improvements | Infrastructure maintenance |
| [#2577](https://github.com/sipeed/picoclaw/pull/2577) | **Merged** | Added file diff comparison tool with test files | New tool capability |

### Active Open PRs Advancing

| PR | Domain | Progress Signal |
|----|--------|---------------|
| [#2410](https://github.com/sipeed/picoclaw/pull/2410) | Browser automation (CDP) | Addresses roadmap item #293; direct Chrome DevTools Protocol integration for agent web interaction |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) | Channel architecture | Refactors channel identification to decouple names from provider types — **enables multi-instance deployments** |
| [#2535](https://github.com/sipeed/picoclaw/pull/2535) | MCP commands | Adds `/list mcp`, `/show mcp <server>` slash commands for MCP server management in chat |
| [#2581](https://github.com/sipeed/picoclaw/pull/2581) | Provider (Codex) | **Fix for Codex streaming output recovery** — captures `response.output_item.done` events when completed payload is empty |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | Security/multi-user | Large "Agent Shield" integration PR for multi-user support, security hardening, skills whitelisting |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Issue/PR | Comments | 👍 | Underlying Need |
|------|----------|----------|-----|-----------------|
| 1 | [#618](https://github.com/sipeed/picoclaw/issues/618) Self-upgrade support | 9 | 2 | **Operational maturity**: Users need zero-downtime update paths across package managers (deb, winget, opkg) for embedded deployments |
| 2 | [#292](https://github.com/sipeed/picoclaw/issues/292) Android Device Automation | 8 | 1 | **Mobile AI agent expansion**: Direct smartphone control as next frontier; references "Botdrop" as competitor benchmark |
| 3 | [#286](https://github.com/sipeed/picoclaw/issues/286) Android via Termux guide | 8 | 2 | **Accessibility**: Lower barrier for Android users without dedicated hardware |

### Analysis

- **Self-upgrade (#618)** reflects production deployment pressure — users are running PicoClaw in field/embedded contexts where manual updates are impractical.
- **Android cluster (#292, #286)** signals demand for edge/mobile AI agents, particularly in markets where smartphones outnumber PCs.
- **Feishu optimization (#2580)** reveals significant **Chinese user base** needing domestic platform integration without VPN dependencies.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? | Regression? |
|----------|-------|-------------|---------|-------------|
| 🔴 **Critical** | [#2578](https://github.com/sipeed/picoclaw/issues/2578) | `openai_compat` provider **never sends Authorization header** in v0.2.6 — API keys silently dropped from ALL config sources | **Yes: [#2581](https://github.com/sipeed/picoclaw/pull/2581)** (Codex-related, may partially address) | **Yes — v0.2.6 regression** |
| 🔴 **Critical** | [#2584](https://github.com/sipeed/picoclaw/issues/2584) | DeepSeek provider 401 "Authentication Fails (governor)" despite valid key | No | Likely related to #2578 auth layer changes |
| 🟡 **High** | [#2046](https://github.com/sipeed/picoclaw/issues/2046) | PicoClaw does not call tools with LongCat API | No | Unknown |
| 🟡 **High** | [#2583](https://github.com/sipeed/picoclaw/issues/2583) | qwen3.5/gemma4 broken with Ollama — empty responses despite token generation | No | Model-specific compatibility |
| 🟢 **Medium** | [#2582](https://github.com/sipeed/picoclaw/issues/2582) | Search API lacks auto-fallback on quota exhaustion (429) | No | Feature gap, not crash |

### Stability Assessment

**v0.2.6 release quality is compromised**. The authentication regression ([#2578](https://github.com/sipeed/picoclaw/issues/2578)) breaks all OpenAI-compatible providers, and two additional provider bugs ([#2584](https://github.com/sipeed/picoclaw/issues/2584), [#2583](https://github.com/sipeed/picoclaw/issues/2583)) suggest insufficient provider testing coverage. The rapid-fire bug reports within 24 hours of release indicate either insufficient CI for provider integration tests or a risky refactor in the auth layer.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Maturity Signal | v0.2.7 Probability |
|---------|-------|---------------|------------------|
| **Self-upgrade mechanism** | [#618](https://github.com/sipeed/picoclaw/issues/618) | Detailed todo list, cross-platform scope defined | High — infrastructure critical |
| **Android device automation** | [#292](https://github.com/sipeed/picoclaw/issues/292) | Roadmap item, high priority label | Medium — large scope |
| **OTel GenAI observability** | [#1731](https://github.com/sipeed/picoclaw/issues/1731) | Enterprise demand, standard compliance | Medium — PR #2313 security work may unblock |
| **Authula auth integration** | [#1067](https://github.com/sipeed/picoclaw/issues/1067) | Security gap acknowledged, PR #2313 in flight | High — blocked on multi-user architecture |
| **Browser automation (CDP)** | [#2410](https://github.com/sipeed/picoclaw/pull/2410) | PR open, addresses roadmap #293 | **Very High — likely merges soon** |
| **MCP slash commands** | [#2535](https://github.com/sipeed/picoclaw/pull/2535) | PR open, user-facing DX improvement | High |
| **Search API fallback chain** | [#2582](https://github.com/sipeed/picoclaw/issues/2582) | Fresh request, specific implementation proposed | Medium — good first issue candidate |

### Prediction

**v0.2.7** will likely prioritize: (1) **hotfix for auth regression**, (2) **browser automation merge**, (3) **MCP command polish**, with multi-user security as the headline feature if [#2313](https://github.com/sipeed/picoclaw/pull/2313) stabilizes.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Intensity |
|-------|----------|-----------|
| **Authentication silently fails** | [#2578](https://github.com/sipeed/picoclaw/issues/2578), [#2584](https://github.com/sipeed/picoclaw/issues/2584) | 🔴 Severe — breaks all workflows |
| **Provider fragmentation** | [#2046](https://github.com/sipeed/picoclaw/issues/2046) LongCat, [#2583](https://github.com/sipeed/picoclaw/issues/2583) Ollama models | 🟡 High — compatibility lottery |
| **No auth layer = production blocker** | [#1067](https://github.com/sipeed/picoclaw/issues/1067) | 🟡 High — security-conscious users stalled |
| **Manual update burden on embedded** | [#618](https://github.com/sipeed/picoclaw/issues/618) | 🟡 Moderate — operational friction |
| **Chinese users need native Feishu** | [#2580](https://github.com/sipeed/picoclaw/issues/2580) | 🟢 Growing — market access issue |

### Use Cases Emerging

- **Embedded/IoT AI agents** (opkg upgrade path, lightweight footprint)
- **Enterprise self-hosted deployments** (auth, observability, multi-tenant security)
- **Mobile-first markets** (Android via Termux, smartphone automation)
- **China domestic integration** (Feishu without VPN, local model providers)

### Satisfaction/Dissatisfaction

Users appreciate PicoClaw's **lightweight philosophy** (noted in [#2580](https://github.com/sipeed/picoclaw/issues/2580)) but are hitting **production readiness walls** — the auth gap and recent regression suggest the project is in a "capabilities vs. reliability" tension point typical of fast-moving frameworks.

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|----------|-----|------|---------------|
| [#618](https://github.com/sipeed/picoclaw/issues/618) Self-upgrade | ~2 months | **High** — blocks continuous delivery | Maintainer decision on package manager strategy |
| [#292](https://github.com/sipeed/picoclaw/issues/292) Android automation | ~2 months | Medium — large scope, needs architectural review | Roadmap prioritization or community champion |
| [#1731](https://github.com/sipeed/picoclaw/issues/1731) OTel GenAI | ~1 month | Medium — enterprise adoption blocker | Design review for telemetry integration points |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) Agent Shield | ~2 weeks | **High** — 6 domains touched, merge conflicts likely | Maintainer review bandwidth; security audit |
| [#2410](https://github.com/sipeed/picoclaw/pull/2410) CDP browser | ~2 weeks | Low — active, well-scoped | Final review, test coverage check |

### Critical Attention Required

- **Auth regression cluster** ([#2578](https://github.com/sipeed/picoclaw/issues/2578), [#2584](https://github.com/sipeed/picoclaw/issues/2584)): Needs immediate maintainer triage; consider emergency v0.2.6.1 patch.
- **PR #2313**: Largest open PR with security implications; stalled review risks bit-rot given active `main` branch velocity.

---

*Digest generated from GitHub activity 2026-04-18 to 2026-04-19. Data source: sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-19

## 1. Today's Overview

NanoClaw experienced **extremely high development velocity** on 2026-04-18 with **21 PRs updated** (14 merged/closed, 7 open) and **5 issues** (4 active, 1 closed). The project is in an active **v2 architectural refactor phase**, with maintainer `gavrielc` driving a systematic modularization of the codebase. No new releases were cut, suggesting the team is consolidating changes before a tagged release. Community contribution is broad, with multiple external authors submitting skills and integrations alongside core refactoring work.

---

## 2. Releases

**No new releases** — The project remains without a recent tagged version despite substantial code changes. The v2 refactor appears to be stabilizing before release.

---

## 3. Project Progress

### Major Merged/Closed PRs (14 items)

| PR | Author | Description | Link |
|:---|:---|:---|:---|
| **#1838–#1840, #1842, #1847–#1849, #1851** | gavrielc | **v2 Module Refactor — Phase 1-3**: Systematic extraction of core systems into registry-based optional modules | [qwibitai/nanoclaw#1838](https://github.com/qwibitai/nanoclaw/pull/1838) → [qwibitai/nanoclaw#1849](https://github.com/qwibitai/nanoclaw/pull/1849) |
| **#1853** | gavrielc | **CLI channel**: Unix-socket based terminal interface (`pnpm run chat`) — first default channel shipping with main | [qwibitai/nanoclaw#1853](https://github.com/qwibitai/nanoclaw/pull/1853) |
| **#1852** | chuchothecat | **OpenAI Codex SDK fallback**: Automatic failover when Claude hits rate limits (429) or auth errors (401) | [qwibitai/nanoclaw#1852](https://github.com/qwibitai/nanoclaw/pull/1852) |
| **#1637** | ragincajunbanjo | **Docker/CasaOS deployment**: Full containerization with OneCLI + PostgreSQL stack, Gitea Actions CI/CD | [qwibitai/nanoclaw#1637](https://github.com/qwibitai/nanoclaw/pull/1637) |
| **#1837** | uniclawassistant | **Paperclip integration**: `/paperclip/wake` webhook for external agent waking | [qwibitai/nanoclaw#1837](https://github.com/qwibitai/nanoclaw/pull/1837) |
| **#1836** | gavrielc | **v2 preview announcement**: README update for Chat SDK + approval dialogs preview | [qwibitai/nanoclaw#1836](https://github.com/qwibitai/nanoclaw/pull/1836) |
| **#1844** | evenisse | **Timestamp normalization**: ISO 8601 standardization for auto-generated DB timestamps | [qwibitai/nanoclaw#1844](https://github.com/qwibitai/nanoclaw/pull/1844) |

### Refactor Architecture Summary
The modularization extracts these systems from core into optional, registry-based modules:
- **Approvals** (default tier, public API)
- **Interactive questions**
- **Scheduling** (delivery actions, recurrence, pre-task scripts)
- **Permissions** (identity, roles, access decisions)
- **Agent-to-agent messaging** (inter-agent, `create_agent`, destinations)
- **Self-modification** (install_packages, request_rebuild, add_mcp_server) — *optional*

---

## 4. Community Hot Topics

### Most Active Discussion

| Item | Engagement | Analysis |
|:---|:---|:---|
| **[#1413] Add Matrix as a channel** | 👍 4, 1 comment | **Highest community demand**. Privacy-focused, decentralized communication protocol. Reflects user desire for self-hosted, federated alternatives to corporate platforms. Long-running (created 2026-03-25, active for 3+ weeks). | [qwibitai/nanoclaw#1413](https://github.com/qwibitai/nanoclaw/issues/1413) |

### Underlying Needs
- **Protocol diversity**: Users want NanoClaw to be channel-agnostic (Matrix, Nostr, CLI, CalDAV all in flight)
- **Self-hosting sovereignty**: Matrix + Nostr + CalDAV + CasaOS all emphasize user-controlled infrastructure
- **Enterprise/devops integration**: Paperclip webhook, Docker deployment show production deployment needs

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 High** | **[#1855]** `context_mode='group'` scheduled tasks cause duplicate tool actions | Shared-session reconstruction under pressure leads to main chat agent repeating tool executions. Draft issue, no fix PR yet. | **No fix** — architectural, related to scheduling module extraction |
| **🟡 Medium** | **[#1854]** Scheduled tasks leak "thinking" text despite `<internal>` wrapping | Fragile silent-exit mechanism; internal reasoning exposed to users. Indicates boundary-control issues in agent output filtering. | **No fix** — container skill instruction parsing problem |
| **🟡 Medium** | **[#1850]** Linux OAuth token auth + auto-refresh failure | OneCLI MITM proxy fails on Linux (ECONNRESET); token refresh broken. Workaround exists (manual token injection). | **No fix** — platform-specific SSL/TLS handling |
| **🟢 Low/Closed** | **[#1846]** Issue created by mistake | N/A | Closed |

### Stability Assessment
Two **fresh architectural bugs** (#1855, #1854) emerged directly from the scheduling module extraction, suggesting **refactor-induced regressions** in edge cases (group contexts, output filtering). The Linux OAuth issue (#1850) is a **platform parity gap** affecting production deployments.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Matrix channel** | Issue #1413 | **High** | Clear pattern (`/add-matrix` skill), existing channel architecture, strong community votes |
| **CalDAV calendar integration** | PR #1835 (open) | **High** | Complete implementation, marketplace-ready, standard protocol |
| **Nostr ecosystem** (posting + Blossom media + signer) | PRs #1833, #1834 (open), depends on #1056 | **Medium-High** | Three coordinated PRs show ecosystem intent; dependency chain may delay |
| **OpenAI Codex provider (full)** | PR #1843 (open) | **High** | Complements merged #1852 fallback; persistent sessions, streaming, MCP tools |
| **Auto-evo group strategy memory** | PR #1841 (open) | **Medium** | Experimental; session-injected persistence pattern may need bake time |

### Predicted v2 Release Blockers
- Module registry stabilization (refactor PRs need integration testing)
- Scheduling module regressions (#1854, #1855) require resolution
- Codex provider parity completion (#1843 vs. merged #1852)

---

## 7. User Feedback Summary

### Pain Points

| Issue | User | Context |
|:---|:---|:---|
| **Linux deployment friction** | vapolaborium | "OneCLI SSL/MITM proxy doesn't work on Linux" — production VM deployments blocked without workarounds |
| **Scheduled task reliability** | 0reo (internal/draft) | Group-context tasks duplicate actions + leak internal reasoning — **trust/safety concern** for automation |
| **Platform auth fragility** | vapolaborium | Auto-refresh broken, manual token management required |

### Positive Signals
- **CLI channel** (#1853) addresses developer ergonomics — "talk to your agent from the terminal"
- **Docker/CasaOS** (#1637) lowers self-hosting barrier
- **Multiple protocol integrations** show healthy ecosystem expansion

### Satisfaction/Dissatisfaction Pattern
- **Satisfied**: Developers, self-hosters, protocol-native users (Nostr, Matrix communities)
- **Dissatisfied**: Linux production operators hitting auth edge cases, users relying on scheduled task automation in group contexts

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| **[#1413] Matrix channel** | 24 days | **Stagnation** — high-vote feature request with no assigned PR | Maintainer response on implementation timeline; could attract contributor |
| **[#1056] Nostr signer skill** (dependency for #1833, #1834) | Unknown | **Blocking** — two open PRs depend on this | Verify if #1056 is merged but unlinked, or if dependency is soft |
| **Refactor execution docs** | N/A | **Transparency gap** — `REFACTOR_PLAN.md` and `REFACTOR_EXECUTION.md` referenced but "kept locally, not committed" | Publish roadmap docs to enable external contribution alignment |

### Maintainer Attention Required
- **evenisse** has duplicate timestamp PRs (#1844 closed, #1845 open) — likely accidental, needs triage
- **gavrielc's** 9 merged PRs in one day suggest heroic effort but may indicate **bus factor risk** for architectural decisions

---

*Digest generated from GitHub activity 2026-04-18. All links: [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-19

## 1. Today's Overview

NullClaw saw **significant community activity** in the past 24 hours with **8 updated issues** (7 open, 1 closed) and **11 open pull requests** (none yet merged). The project shows **healthy engagement** with no new releases, but substantial development momentum around **multi-workspace support**, **tool customization systems**, and **skill management enhancements**. A notable pattern is the concentrated contribution from community member `manelsen`, who authored **8 of the 11 PRs** submitted today, suggesting either a sponsored contributor or highly motivated power user driving a coordinated feature push. The project remains pre-release quality with version reporting still showing "dev" strings in source builds.

---

## 2. Releases

**No new releases** (v0 or otherwise). The latest closed issue [#821](https://github.com/nullclaw/nullclaw/issues/821) explicitly highlights that source builds report version as `"dev"` rather than semantic versions or commit hashes, indicating the project has not yet established stable release tagging.

---

## 3. Project Progress

**No PRs were merged or closed today.** All 11 PRs remain open and under review. However, several feature lines advanced substantially through new submissions:

| PR | Author | Feature Area | Status |
|:---|:---|:---|:---|
| [#842](https://github.com/nullclaw/nullclaw/pull/842) | manelsen | Multi-workspace CLI support | Open |
| [#841](https://github.com/nullclaw/nullclaw/pull/841) | manelsen | Skill activation at startup | Open |
| [#840](https://github.com/nullclaw/nullclaw/pull/840) | manelsen | Nested skill discovery | Open |
| [#838](https://github.com/nullclaw/nullclaw/pull/838) | manelsen | Matrix E2EE proxy support | Open |
| [#836](https://github.com/nullclaw/nullclaw/pull/836) | manelsen | Trigger-based tool prioritization | Open |
| [#835](https://github.com/nullclaw/nullclaw/pull/835) | manelsen | Tool prompt/enabled overrides | Open |
| [#834](https://github.com/nullclaw/nullclaw/pull/834) | manelsen | Tool customization config schema | Open |
| [#837](https://github.com/nullclaw/nullclaw/pull/837) | manelsen | External tool customizations file | Open |
| [#831](https://github.com/nullclaw/nullclaw/pull/831) | manelsen | Agent Skills RFC 0.2.0 support | Open |
| [#770](https://github.com/nullclaw/nullclaw/pull/770) | vernonstinebaker | REST Admin API | Open (updated) |
| [#411](https://github.com/nullclaw/nullclaw/pull/411) | qxo | Tool customization system (original) | Open (updated) |

The `manelsen` PR cluster represents a **coherent feature ecosystem** around tool customization and skill management, likely intended to integrate with or supersede the earlier [#411](https://github.com/nullclaw/nullclaw/pull/411) from `qxo`.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Issue/PR | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|:---|
| 1 | [#821](https://github.com/nullclaw/nullclaw/issues/821) (closed) | 3 | Version reporting shows "dev" | **Developer experience**: Need for reproducible builds and debugging context |
| 2 | [#376](https://github.com/nullclaw/nullclaw/issues/376) | 3 | DingTalk receive-only limitation | **Bidirectional channel parity**: Users expect full duplex on all channels |
| 3 | [#354](https://github.com/nullclaw/nullclaw/issues/354) | 2 | Homebrew upgrade breaks service | **Operational reliability**: Package manager integration must survive updates |

### Emerging Discussion

- **[#832](https://github.com/nullclaw/nullclaw/issues/832)** — *Concurrent/non-blocking interactivity* (0 comments, but high conceptual importance): Articulates a **fundamental architectural limitation** of single-session agent frameworks. The author identifies that long-running jobs block conversation, suggesting demand for **async/multi-threaded agent execution** — a significant roadmap signal.

- **[#833](https://github.com/nullclaw/nullclaw/issues/833)** → immediately addressed by **[#842](https://github.com/nullclaw/nullclaw/pull/842)**: Rapid request-to-PR turnaround for multi-workspace support indicates responsive (or anticipatory) development.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---|
| **High** | [#408](https://github.com/nullclaw/nullclaw/issues/408) | **Tool call JSON parsing corrupts valid output** — colon `:` extracted as tool name instead of actual tool name | **None identified** — critical for tool-using agents |
| **High** | [#665](https://github.com/nullclaw/nullclaw/issues/665) | `error.NoResponseContent` crash on Windows x86_64 with llama.cpp backend | **None identified** — appears to be model/response handling failure |
| **Medium** | [#354](https://github.com/nullclaw/nullclaw/issues/354) | Homebrew upgrade breaks LaunchAgent plist due to hardcoded Cellar paths | **None identified** — packaging/deployment issue |
| **Low** | [#821](https://github.com/nullclaw/nullclaw/issues/821) | Version string shows "dev" | **Closed** — fixed in source (implied by closure) |

**Critical concern**: [#408](https://github.com/nullclaw/nullclaw/issues/408) represents a **core parsing bug** that breaks fundamental agent functionality when LLMs emit correct JSON. Without a fix PR, this risks user trust in tool execution reliability. [#665](https://github.com/nullclaw/nullclaw/issues/665) may relate to the same underlying response handling fragility.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Multi-workspace CLI support** | [#833](https://github.com/nullclaw/nullclaw/issues/833) + [#842](https://github.com/nullclaw/nullclaw/pull/842) | **Very High** | PR already submitted, clean implementation, clear user demand |
| **Tool customization system** | [#834](https://github.com/nullclaw/nullclaw/pull/834)-[#837](https://github.com/nullclaw/nullclaw/pull/837), [#411](https://github.com/nullclaw/nullclaw/pull/411) | **High** | 8 coordinated PRs suggest planned integration; may consolidate |
| **Nested skill directories** | [#840](https://github.com/nullclaw/nullclaw/pull/840) | **High** | Low-risk UX improvement, part of skill ecosystem |
| **Matrix E2EE support** | [#838](https://github.com/nullclaw/nullclaw/pull/838) | **Medium** | Niche but well-scoped; adds enterprise deployment viability |
| **REST Admin API** | [#770](https://github.com/nullclaw/nullclaw/pull/770) | **Medium** | Mature PR (2+ weeks old), zero-dependency design, mobile/dashboard use cases |
| **Concurrent agent sessions** | [#832](https://github.com/nullclaw/nullclaw/issues/832) | **Low-Medium** | Architectural change requiring design discussion; no PR yet |
| **DuckDuckGo search backend** | [#623](https://github.com/nullclaw/nullclaw/issues/623) | **Low** | Single +1 request, competing search backends exist |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Installation/upgrade fragility** | [#354](https://github.com/nullclaw/nullclaw/issues/354) (Homebrew), [#821](https://github.com/nullclaw/nullclaw/issues/821) (version) | Medium — affects macOS power users |
| **Channel incompleteness** | [#376](https://github.com/nullclaw/nullclaw/issues/376) (DingTalk receive-only) | Medium — limits enterprise chat integrations |
| **Core reliability** | [#408](https://github.com/nullclaw/nullclaw/issues/408) (parsing), [#665](https://github.com/nullclaw/nullclaw/issues/665) (crashes) | **High** — undermines agent trust |
| **Operational scaling** | [#832](https://github.com/nullclaw/nullclaw/issues/832) (blocking), [#833](https://github.com/nullclaw/nullclaw/issues/833) (multi-workspace) | Medium-High — power user / production needs |

### Use Cases Emerging

- **Multi-tenant gateway deployments**: [#833](https://github.com/nullclaw/nullclaw/issues/833)/[#842](https://github.com/nullclaw/nullclaw/pull/842) suggests users running multiple agent instances
- **Long-running autonomous tasks**: [#832](https://github.com/nullclaw/nullclaw/issues/832) indicates shift from chat-interactive to background-agent usage
- **Enterprise chat compliance**: [#838](https://github.com/nullclaw/nullclaw/pull/838) Matrix E2EE for regulated environments

### Satisfaction Signals

- Rapid issue-to-PR response for workspace feature suggests **responsive maintainers or engaged contributors**
- Active bilingual PR descriptions (EN/CN) indicate **international user base**

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#770](https://github.com/nullclaw/nullclaw/pull/770) REST Admin API | **14 days open** | Stale; may need rebase or maintainer review | Maintainer decision on scope/merge |
| [#411](https://github.com/nullclaw/nullclaw/pull/411) Tool customization (qxo) | **40 days open** | Superseded by manelsen PR cluster? | Clarify relationship to [#834](https://github.com/nullclaw/nullclaw/pull/834)-[#837](https://github.com/nullclaw/nullclaw/pull/837); merge or close |
| [#376](https://github.com/nullclaw/nullclaw/issues/376) DingTalk bidirectional | **42 days open** | Channel parity gap | Maintainer response on roadmap; community PR? |
| [#623](https://github.com/nullclaw/nullclaw/issues/623) DDGS search | **32 days open** | Low engagement | Close as "help wanted" or implement if trivial |

**Critical gap**: No maintainer-visible response on [#408](https://github.com/nullclaw/nullclaw/issues/408) (parsing bug) or [#665](https://github.com/nullclaw/nullclaw/issues/665) (crash) — these core reliability issues risk user attrition if unaddressed.

---

*Digest generated from GitHub activity data. All links reference `https://github.com/nullclaw/nullclaw`.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-19

## 1. Today's Overview

IronClaw shows **high-velocity development with significant quality pressure**. The project processed 50 PRs and 18 issues in 24 hours, with an 82% open PR rate (41 open vs. 9 merged/closed) indicating either a bottleneck in review capacity or deliberate staging accumulation. The day's activity centers on three themes: **gateway/platform architectural refactoring** (#2599 epic), **secrets and auth hardening** (multiple PRs), and **E2E test stabilization** (five closed issues). No new releases were cut, suggesting the team is prioritizing infrastructure consolidation over shipping.

---

## 2. Releases

**None** — No new releases published.

---

## 3. Project Progress

### Merged/Closed PRs Today (9 total)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#2531](https://github.com/nearai/ironclaw/pull/2531) | serrrfirat | `FINAL`/`FINAL_VAR` awaitability + runaway loop protection | Engine v2 reliability |
| [#2656](https://github.com/nearai/ironclaw/pull/2656) | serrrfirat | Harden tab-button selector for Playwright strict mode | E2E stability |
| [#2570](https://github.com/nearai/ironclaw/pull/2570) | serrrfirat | Allow completed event-driven missions to re-fire | Fixes `/expected` command regression |
| [#2648](https://github.com/nearai/ironclaw/pull/2648) | ilblackdragon | Auto-generate secrets master key via `.env` on startup | Closes [#1820](https://github.com/nearai/ironclaw/issues/1820) — secrets store availability |

### Key Feature Advancements

- **Gateway UI**: [#2571](https://github.com/nearai/ironclaw/pull/2571) (open, XL) adds tool output previews and structured rendering in web gateway — major UX improvement for engine v2 tool calls
- **Platform boundaries**: [#2647](https://github.com/nearai/ironclaw/pull/2647) enforces gateway feature boundaries via CI guardrails, stage 5 of [#2599](https://github.com/nearai/ironclaw/issues/2599) epic
- **Secrets infrastructure**: [#2653](https://github.com/nearai/ironclaw/pull/2653) (open) improves keychain preference and TOCTOU safety, iterating on [#2648](https://github.com/nearai/ironclaw/pull/2648)

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | 👍 | Topic | Analysis |
|:---|:---:|:---:|:---|:---|
| [#2599](https://github.com/nearai/ironclaw/issues/2599) | 0 | 1 | Epic: Gateway feature boundaries | Only 👍 in issues; reflects maintainer priority, not community demand. Architecture debt reduction for long-term maintainability |
| [#2636](https://github.com/nearai/ironclaw/issues/2636) | 1 | 0 | Skill size limit (506KB vs 64KB max) | **User friction point**: jonhoosh argues limit is arbitrary vs. competitors. Technical constraint vs. UX tension |
| [#91](https://github.com/nearai/ironclaw/issues/91) | 1 | 0 | Meeting intelligence pipeline | Long-lived feature request (Feb→Apr) spanning audio, memory, routines — complex cross-cutting P2 |
| [#2633](https://github.com/nearai/ironclaw/issues/2633) | 1 | 0 | Gateway correctness/perf issues from refactor | Technical debt surfacing during platform extraction — risk of regression accumulation |

### Underlying Needs

- **Scalability**: Skill size limits and credential profiles (#2642) suggest power users hitting single-account/single-file constraints
- **Enterprise readiness**: Meeting intelligence (#91) and multi-account support (#2642) indicate B2B use cases emerging
- **Reliability**: Gateway refactor (#2599) and E2E stabilization show investment in production quality

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **HIGH** | [#1882](https://github.com/nearai/ironclaw/issues/1882) MCP server name validation — shell metacharacter injection | **CLOSED** | — | Staging CI found; HIGH:75 score. Closed today, likely fixed in earlier merge |
| **HIGH** | [#2653](https://github.com/nearai/ironclaw/pull/2653) Secrets TOCTOU and key resolution | **OPEN** | #2653 | Security hardening in progress |
| **MEDIUM** | [#2410](https://github.com/nearai/ironclaw/issues/2410) Dashboard refresh loop | **CLOSED** | — | Staging QA bug, resolved |
| **MEDIUM** | [#2482](https://github.com/nearai/ironclaw/issues/2482) Telegram group metadata omission | **CLOSED** | — | Telegram channel normalization fix |
| **MEDIUM** | [#2655](https://github.com/nearai/ironclaw/issues/2655) `sync_dispatched_runs` never finalizes pending jobs | **OPEN** | — | Routine engine state machine gap — no fix PR yet |
| **MEDIUM** | [#2624](https://github.com/nearai/ironclaw/issues/2624) Telegram E2E 401 bot token validation | **OPEN** | [#2652](https://github.com/nearai/ironclaw/pull/2652) | Fix in flight — debug build HTTP rewrites + fixture reuse |
| **LOW** | [#2626](https://github.com/nearai/ironclaw/issues/2626) Stale E2E selector | **CLOSED** | [#2656](https://github.com/nearai/ironclaw/pull/2656) | Quick fix merged |
| **LOW** | [#2625](https://github.com/nearai/ironclaw/issues/2625) macOS REPL auth PTY harness | **CLOSED** | — | Test infrastructure, not product bug |

### Regression Risk Assessment

- **E2E flakiness cluster**: 5 closed E2E issues today suggests systematic cleanup, but [#2624](https://github.com/nearai/ironclaw/issues/2624) (Telegram) and [#2623](https://github.com/nearai/ironclaw/issues/2623) (Slack, closed as fixture issue) indicate WASM channel E2E remains fragile
- **Gateway refactor risk**: [#2633](https://github.com/nearai/ironclaw/issues/2633) explicitly flags "pre-existing correctness/perf issues surfaced" during move-only refactor — classic risk of latent bugs becoming visible

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Signal Strength | Likelihood in Next Version |
|:---|:---|:---:|:---|
| **Credential profiles (multi-account)** | [#2642](https://github.com/nearai/ironclaw/issues/2642) | Strong — ilblackdragon authored, detailed use cases | **High** — architectural fit with #2617 identity newtypes |
| **Meeting intelligence pipeline** | [#91](https://github.com/nearai/ironclaw/issues/91) | Medium — P2, cross-cutting, complex | **Low-Medium** — likely post-gateway refactor |
| **Skill size limit removal/increase** | [#2636](https://github.com/nearai/ironclaw/issues/2636) | Medium — user-reported, competitive pressure | **Medium** — technical constraint may be addressable with streaming/lazy loading |
| **Approval queue tray (web UI)** | [#2270](https://github.com/nearai/ironclaw/pull/2270) | Strong — XL PR open, companion to merged #2267 | **High** — near completion |
| **Aliyun Coding Plan support** | [#1446](https://github.com/nearai/ironclaw/pull/1446) | Medium — large external contribution | **Medium** — review bandwidth dependent |

---

## 7. User Feedback Summary

### Explicit Pain Points

| Source | Issue | Sentiment |
|:---|:---|:---|
| jonhoosh, [#2636](https://github.com/nearai/ironclaw/issues/2636) | "skill size no need limit, no similar project do this" | **Frustrated** — competitive disadvantage perceived |
| n4s3r, [#1826](https://github.com/nearai/ironclaw/issues/1826) | DNS failures cause auth URL resolution crashes; wants graceful degradation | **Annoyed** — infrastructure fragility |
| lucasjinreal, [#1820](https://github.com/nearai/ironclaw/issues/1820) | "Cannot store API keys: secrets store is not available" | **Blocked** — setup friction on headless/container environments |

### Use Case Signals

- **Multi-service power users**: [#2642](https://github.com/nearai/ironclaw/issues/2642) (multiple Gmail/Notion/Calendar accounts) — indicates personal productivity power-user segment
- **Enterprise/team meetings**: [#91](https://github.com/nearai/ironclaw/issues/91) — structured transcription, action items, follow-up suggests meeting-heavy workflows
- **Self-hosting/container deployment**: [#1820](https://github.com/nearai/ironclaw/issues/1820), [#1826](https://github.com/nearai/ironclaw/issues/1826) — Docker/headless Linux users hitting secrets/auth setup friction

---

## 8. Backlog Watch

### Needs Maintainer Attention

| Item | Age | Risk | Why Flagged |
|:---|:---|:---|:---|
| [#91](https://github.com/nearai/ironclaw/issues/91) Meeting intelligence | ~2 months | **Scope creep** | P2 since Feb, complex cross-cutting feature. Needs decision: commit or defer? |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) Aliyun support | ~1 month | **Contributor drift** | XL external PR, broad scope. Risk of merge conflicts with ongoing gateway refactor |
| [#2504](https://github.com/nearai/ironclaw/pull/2504) "[WILL NOT MERGE]" demo branch | 4 days | **Process noise** | Explicitly marked non-merging but kept open. Clutters review queue |
| [#1869](https://github.com/nearai/ironclaw/pull/1869) CLI-only listener suppression | ~18 days | **Staleness** | L size, core contributor. May need rebase after gateway changes |

### Architectural Debt Indicators

- **[#2599](https://github.com/nearai/ironclaw/issues/2599) epic**: 5 stages, multiple PRs (#2644-#2647+), indicating large-scale restructuring. Risk of intermediate instability
- **Stringly-typed identity migration**: [#2611](https://github.com/nearai/ironclaw/pull/2611) → [#2617](https://github.com/nearai/ironclaw/pull/2617) — necessary but touches many scopes, potential for subtle breakage

---

## Project Health Assessment

| Dimension | Score | Evidence |
|:---|:---:|:---|
| **Velocity** | ⭐⭐⭐⭐⭐ | 50 PRs, 18 issues in 24h |
| **Merge Rate** | ⭐⭐⭐☆☆ | 18% closed/merged rate suggests bottleneck |
| **Quality Focus** | ⭐⭐⭐⭐☆ | Heavy E2E stabilization, security hardening |
| **Release Cadence** | ⭐⭐☆☆☆ | No release; accumulating unreleased changes |
| **Community Responsiveness** | ⭐⭐⭐☆☆ | Some user issues resolved (#1820, #1826), but #2636 unaddressed, #91 aging |
| **Stability Risk** | ⚠️ **ELEVATED** | Large gateway refactor in flight, E2E flakiness cluster |

**Bottom line**: IronClaw is executing ambitious architectural refactoring with strong engineering discipline (E2E hardening, security fixes), but the high open-PR ratio and "WILL NOT MERGE" demo branches suggest review/merge capacity constraints. The project would benefit from either increased maintainer bandwidth or a temporary feature freeze to land the gateway refactor and cut a release.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-19

## 1. Today's Overview

LobsterAI shows minimal activity on 2026-04-19 with zero issues updated and only 2 stale pull requests receiving minor updates (both last modified 2026-04-18). The project appears to be in a maintenance lull with no new releases, no merged contributions, and no community-reported issues in the past 24 hours. Both active PRs are over one month old and tagged as stale, suggesting either maintainer bandwidth constraints or deliberation on feature scope. Overall project health indicators point to a stable but slow-moving codebase with limited community momentum at present.

---

## 2. Releases

**No new releases.** No version tags or release notes published.

---

## 3. Project Progress

**No merged or closed PRs today.** No features advanced to completion.

Both open PRs remain unmerged with no recent code review activity:
- Neither PR received comments or approvals in the 24h window
- Both PRs were last updated 2026-04-18 (likely automated stale-bot labeling or minor author activity)

---

## 4. Community Hot Topics

| PR | Status | Engagement | Analysis |
|:---|:---|:---|:---|
| [#428 — Add LM Studio as a model provider](https://github.com/netease-youdao/LobsterAI/pull/428) | Open, stale | 👍 0, comments undefined | **Local AI tooling expansion**: Follows established Ollama integration pattern, suggesting user demand for local/self-hosted model options. LM Studio's OpenAI-compatible API lowers implementation barrier. No community reactions may indicate niche interest or discoverability issues. |
| [#388 — Upgrade MiniMax default model to M2.7](https://github.com/netease-youdao/LobsterAI/pull/388) | Open, stale | 👍 0, comments undefined | **Third-party API currency**: Tracks MiniMax's model evolution (M2.5 → M2.7) and domain migration (.com → .io). Vendor URL changes often indicate service restructuring; delay in merging may risk broken integrations for MiniMax users. |

**Underlying needs detected:**
- **Local-first AI**: LM Studio support signals user preference for offline/private inference
- **Vendor agility**: Rapid MiniMax model turnover requires responsive provider maintenance

---

## 5. Bugs & Stability

**No bugs, crashes, or regressions reported today.** Zero issues created or updated.

*Note: Absence of bug reports may indicate stability or, conversely, reduced user engagement.*

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| LM Studio local provider integration | PR #428 | Medium-High | Low complexity (mirrors Ollama pattern), no API key friction, aligns with local AI trend |
| MiniMax M2.7 default upgrade | PR #388 | Medium | Straightforward model list update, but blocked by stale status; urgency depends on M2.5 deprecation timeline |

**Emerging pattern**: Dual-track provider strategy — expanding *local options* (LM Studio, Ollama) while maintaining *cloud API currency* (MiniMax, others). No explicit roadmap documentation found in available data.

---

## 7. User Feedback Summary

**No direct user feedback captured today** (0 issues, 0 comments on PRs).

**Inferred signals from PR authors:**
- **Pain point**: Users want LM Studio integration without manual OpenAI-compatible endpoint configuration
- **Pain point**: MiniMax users need current model defaults to avoid performance degradation
- **Satisfaction gap**: Stale PRs without maintainer response may frustrate contributors (mvanhorn, octo-patch)

---

## 8. Backlog Watch

| Item | Age | Risk | Recommended Action |
|:---|:---|:---|:---|
| [#428 LM Studio provider](https://github.com/netease-youdao/LobsterAI/pull/428) | 35 days | Contributor attrition, duplicate effort | Maintainer review for merge/feedback |
| [#388 MiniMax M2.7 upgrade](https://github.com/netease-youdao/LobsterAI/pull/388) | 38 days | Integration breakage if M2.5 deprecated | Priority review; API URL change may affect active users |

**Systemic concern**: Both PRs exceed one month without maintainer engagement. Stale automation is active but no human triage visible. This pattern risks contributor turnover and outdated dependencies.

---

*Digest generated from GitHub activity data for netease-youdao/LobsterAI on 2026-04-19.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-19

---

## 1. Today's Overview

Moltis shows **strong development velocity** with 11 PRs updated in the last 24 hours (6 merged/closed, 5 open) and 4 issues active (2 closed, 2 open). No new releases were cut. The project demonstrates healthy maintainer responsiveness with same-day merges on multiple PRs, though the high volume of automated documentation PRs suggests tooling investment that may need consolidation. Core infrastructure work dominates: code indexing, sandbox observability, WebAuthn proxy support, and a TypeScript web UI migration indicate maturation toward production readiness. The community is actively reporting runtime issues (container timeouts, Telegram control needs) alongside feature development.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs (6 items)

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #785 | penso | **feat(config)**: Added `server.external_url` for reverse proxy WebAuthn support — enables declarative public URL configuration with `MOLTIS_EXTERNAL_URL` env override; auto-derives RP ID and origin | [moltis-org/moltis#785](https://github.com/moltis-org/moltis/pull/785) |
| #784 | penso | **fix(sandbox)**: Added observability logging and prevented repeated package provisioning — addresses unexplained `dpkg` processes with lifecycle `debug!`/`info!`/`warn!` logs | [moltis-org/moltis#784](https://github.com/moltis-org/moltis/pull/784) |
| #771 | Cstewart-HC | **feat(code-index)**: New `moltis-code-index` crate with SQLite+FTS5 backend — file discovery, filtering, incremental delta sync, wired into gateway as agent tools | [moltis-org/moltis#771](https://github.com/moltis-org/moltis/pull/771) |
| #779 | Cstewart-HC | **fix(task_list)**: Lists all tasks by default (not just "default"), adds `list_lists` action — fixes visibility of custom list IDs like `"CURRICULUM_1"` | [moltis-org/moltis#779](https://github.com/moltis-org/moltis/pull/779) |
| #777 | Cstewart-HC | **[AutoDoc]**: Updated `docker.md` — `MOLTIS_PASSWORD`→`MOLTIS_TOKEN` rename, volume mounts table, compose examples | [moltis-org/moltis#777](https://github.com/moltis-org/moltis/pull/777) |
| #780 | Cstewart-HC | **[AutoDoc]**: Updated `graphql.md` — snake_case field fixes, `chat.send` mutation example with required params | [moltis-org/moltis#780](https://github.com/moltis-org/moltis/pull/780) |

**Key advances**: Production infrastructure (reverse proxy auth, sandbox debugging), core agent capability (code indexing with full-text search), and UX fix for task list discoverability.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| **#775** — TypeScript web UI migration (OPEN) | penso | [moltis-org/moltis#775](https://github.com/moltis-org/moltis/pull/775) |
| | **Most significant structural PR** — Vite/Preact/TypeScript migration under `crates/web/ui/src`. Represents major frontend modernization but carries integration risk with existing Rust workspace. No comments suggests either early WIP or maintainer confidence. | |
| **#791** — `moltis-splitter` crate extraction (OPEN) | Cstewart-HC | [moltis-org/moltis#791](https://github.com/moltis-org/moltis/pull/791) |
| | **Architecture refactor** — Extracts AST-aware chunking from `moltis-memory` into dedicated crate with tree-sitter support for 15 languages. Signals investment in RAG/retrieval quality for code contexts. Feature-gating suggests concern for compile times/binary size. | |
| **#783, #789, #787** — Doc Rotisserie batches (OPEN) | Cstewart-HC | [moltis-org/moltis#783](https://github.com/moltis-org/moltis/pull/783), [moltis-org/moltis#789](https://github.com/moltis-org/moltis/pull/789), [moltis-org/moltis#787](https://github.com/moltis-org/moltis/pull/787) |
| | **Automation intensity** — 3 PRs in 24h for automated doc audits (12/62 docs completed). Underlying need: documentation drift is chronic; Greptile integration for P2 issue detection. Risk: PR noise vs. value. Community may benefit from batched weekly rotisserie rather than daily micro-PRs. | |

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **High** | **#786** — Browser container fails to become ready within 60s | **OPEN** | None yet | [moltis-org/moltis#786](https://github.com/moltis-org/moltis/issues/786) — Runtime failure in containerized browser environment; hard timeout suggests resource contention or startup dependency issue. No workaround documented. |
| Medium | #776 — `task_list.list` default behavior | **CLOSED** | #779 | [moltis-org/moltis#776](https://github.com/moltis-org/moltis/issues/776) — Fixed: custom list IDs were invisible to agents |
| Medium | #588 — `is_container_available()` ignores Podman | **CLOSED** | Unknown | [moltis-org/moltis#588](https://github.com/moltis-org/moltis/issues/588) — Container backend detection gap; closed without visible PR link (may have been fixed by #784 sandbox work or direct commit) |

**Stability assessment**: Sandbox/container subsystem under active stress — #784's observability additions and #786's timeout failure suggest this is a current reliability frontier. The 60s browser container timeout (#786) is the most urgent unaddressed issue.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood in Next Version |
|:---|:---|:---|
| **#788** — "Abort" current operation from Telegram & fallback models | **OPEN** | [moltis-org/moltis#788](https://github.com/moltis-org/moltis/issues/788) |
| | User control plane expansion: Telegram bot needs cancel/abort capability; fallback model orchestration needs graceful interruption. Aligns with multi-platform agent deployment trend. | **High** — Small surface area, high user value, safety-critical for cost/loop control |
| #775 — TypeScript web UI migration | Frontend modernization | Medium — Large PR, may span multiple releases |
| #791 — `moltis-splitter` crate | RAG quality infrastructure | High — Modular, additive change |
| #771 (merged) — Code indexing with FTS5 | Agent tool capability | **Shipped** — Available in main |

**Predicted next-version features**: Abort/cancel controls (#788), `moltis-splitter` stabilization, continued Doc Rotisserie completion (50 remaining docs).

---

## 7. User Feedback Summary

### Pain Points
- **Container runtime reliability**: Users hit opaque failures (#786 timeout, #588 Podman detection, #781 `dpkg` mystery processes before #784 fix) — sandbox environment is a friction point
- **Task visibility**: Agents couldn't discover or list custom task lists, breaking workflow continuity (#776)
- **Documentation accuracy**: Stale docs causing configuration errors (env var renames, field name changes) — driving the intensive rotisserie effort

### Use Cases Emerging
- **Reverse proxy deployments**: #785 shows production self-hosting demand with WebAuthn passkey auth
- **Multi-platform control**: Telegram as primary interface needing abort controls (#788)
- **Code-aware agents**: #771 and #791 show investment in local, private code understanding without external API dependency

### Satisfaction Indicators
- Fast maintainer response (same-day merges)
- Active automated tooling investment (Greptile, Doc Rotisserie)
- Incremental, well-scoped PRs

### Dissatisfaction Indicators
- Container subsystem reliability gaps
- Documentation drift requiring corrective sprints

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| **#775** — TypeScript web UI migration | 2 days | **High** — Large architectural change, no review comments | Maintainer review for integration approach; risk of bitrot if unreviewed |
| **#786** — Browser container timeout | 1 day | **High** — Unassigned, no fix PR | Triage: reproducibility, environment details, assign to sandbox owner |
| #588 — Podman support | 10 days | Medium — Closed but fix path unclear | Verify closure in release notes; may need regression test |
| Doc Rotisserie automation (3 open PRs) | 1 day | Low-Medium | Consider batching policy to reduce review overhead |

**Maintainer attention priority**: #786 (user-facing runtime failure) → #775 (structural review) → rotisserie batching strategy.

---

*Digest generated from GitHub activity 2026-04-18 to 2026-04-19. All links: [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-19

## 1. Today's Overview

CoPaw/QwenPaw showed **high community activity** with 15 issues and 11 PRs updated in the last 24 hours, indicating an engaged but potentially strained development cycle. No new releases were published, suggesting the project is in an active development phase rather than a stabilization period. The issue-to-PR ratio (15:11) and high open issue count (12 of 15 remain open) point to a growing backlog that may challenge maintainer bandwidth. Notably, the project appears to be undergoing a **branding transition from CoPaw to QwenPaw**, with multiple issues referencing the new name while legacy artifacts persist—creating migration friction for users. Windows platform stability remains a recurring theme, with multiple hang and path-related issues reported.

---

## 2. Releases

**None** — No new releases published.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #3561 | yangz-github | Branch synchronization (first-time contributor) | [PR #3561](https://github.com/agentscope-ai/QwenPaw/pull/3561) |
| #3268 | no-teasy | **Closed without merge** — Automatic timestamp injection into user prompts (first-time contributor, under review, needed discussions) | [PR #3268](https://github.com/agentscope-ai/QwenPaw/pull/3268) |

**Assessment:** Minimal forward progress on merged features. The timestamp injection PR (#3268) was closed after a week of review, suggesting maintainer rejection or contributor abandonment—concerning for first-time contributor retention.

### Active Development (Open PRs with Recent Updates)

| PR | Author | Focus Area | Status |
|:---|:---|:---|:---|
| #3559 | hanson-hex | **Frontend testing infrastructure** — Vitest setup, Chat pilot tests | [PR #3559](https://github.com/agentscope-ai/QwenPaw/pull/3559) |
| #3558 | Leirunlin | **Builtin skill i18n** — EN/ZH dual-language support | [PR #3558](https://github.com/agentscope-ai/QwenPaw/pull/3558) |
| #3548 | jinliyl | **Memory system rebuild** — Auto-memory, auto-dream, Agent.md decoupling | [PR #3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) |
| #3556 | shadowabi | **Browser tool enhancement** — Custom args and executable path | [PR #3556](https://github.com/agentscope-ai/QwenPaw/pull/3556) |
| #3553 | Prince-liu | **SSE crash fix** — Unicode surrogate handling | [PR #3553](https://github.com/agentscope-ai/QwenPaw/pull/3553) |

---

## 4. Community Hot Topics

### Most Active Discussions (by comment count)

| Rank | Issue/PR | Comments | Topic | Link |
|:---|:---|:---:|:---|:---|
| 1 | **#3356** — WORKING_DIR points to old `.copaw` after QwenPaw upgrade | **19** | Brand migration data path bug | [Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) |
| 2 | **#2943** — `copaw init` hangs on security warning (CLOSED) | 6 | Windows CLI initialization | [Issue #2943](https://github.com/agentscope-ai/QwenPaw/issues/2943) |
| 3 | **#3470** — Self-evolution roadmap (Hermes Agent-like) | 5 | Core AI capability | [Issue #3470](https://github.com/agentscope-ai/QwenPaw/issues/3470) |

**Underlying Needs Analysis:**

- **#3356** reveals a **critical migration infrastructure gap**: The rebrand to QwenPaw is incomplete at the configuration layer. Users performing "fresh" installs still inherit legacy paths, suggesting the installer doesn't properly isolate or migrate state. The 19-comment thread indicates users are actively debugging workarounds—high friction for adoption.

- **#3470** signals **competitive pressure**: Users explicitly compare QwenPaw to Hermes Agent's self-evolution capabilities, indicating the project may be perceived as falling behind in autonomous agent features. This is a strategic roadmap question, not merely a feature request.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? | Link |
|:---|:---|:---|:---:|:---|
| **🔴 Critical** | **#3555** | Desktop hangs at "Waiting for HTTP ready..." — Windows HTTP server fails to start, 300s timeout | **No** | [Issue #3555](https://github.com/agentscope-ai/QwenPaw/issues/3555) |
| **🔴 Critical** | **#3552** | Console channel **crash** on malformed Unicode surrogate during SSE serialization | **Yes: #3553** | [Issue #3552](https://github.com/agentscope-ai/QwenPaw/issues/3552) / [PR #3553](https://github.com/agentscope-ai/QwenPaw/pull/3553) |
| **🟡 High** | **#3560** | llama.cpp backend: Tool call stream parsing error (qwen3.6) | No | [Issue #3560](https://github.com/agentscope-ai/QwenPaw/issues/3560) |
| **🟡 High** | **#3562** | Ollama local model: Output loss after multi-turn calls (128K context configured) | No | [Issue #3562](https://github.com/agentscope-ai/QwenPaw/issues/3562) |
| **🟡 High** | **#3356** | WORKING_DIR migration failure (data loss risk) | No | [Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) |
| **🟡 High** | **#3557** | Console UI parity gap: Cannot modify default agent (APP can) | No | [Issue #3557](https://github.com/agentscope-ai/QwenPaw/issues/3557) |
| **🟢 Medium** | **#3564** | Frequent interruptions (vague report, needs details) | No | [Issue #3564](https://github.com/agentscope-ai/QwenPaw/issues/3564) |
| **🟢 Medium** | **#3542** | Ollama + VPN proxy model call failure (CLOSED) | Resolved | [Issue #3542](https://github.com/agentscope-ai/QwenPaw/issues/3542) |

**Stability Assessment:** Two critical Windows-specific startup/runtime failures (#3555, #3552) in one day is concerning. The SSE crash has an active fix PR (#3553) from the reporter, indicating responsive community contribution. However, the Desktop hang (#3555) lacks a fix and blocks basic functionality. Local model backends (llama.cpp, Ollama) show emerging reliability issues.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Strategic Signal | Likelihood in Next Version |
|:---|:---|:---|:---:|
| #3470 | Self-evolution / autonomous improvement (Hermes Agent parity) | **Core AI differentiation** — competitive necessity | Medium |
| #3548 (PR) | Memory system rebuild with auto-memory, auto-dream | **Infrastructure modernization** — aligns with AgentScope 2.0 | **High** |
| #3563 | Context usage visibility for compact decisions | UX improvement — low cost, high user value | High |
| #3293 | Per-skill voice/direct reply configuration | Channel flexibility — enterprise use case | Medium |
| #3554 | [Console enhancement — details incomplete] | UI/UX iteration | Unknown |
| #3551 | Hide/disable builtin free models (OpenCode) | **Customization / enterprise governance** — recurring deployment pain | Medium |
| #3545 (CLOSED) | Delete models from Provider management | **Shipped** | ✅ Done |
| #3452 / #3550 | LLM routing UI + runtime scope-first routing | **Multi-model orchestration** — major feature in progress | **High** |

**Prediction:** The memory rebuild (#3548) and LLM routing (#3452/#3550) are likely the next major release pillars. Context usage metrics (#3563) is a quick win that should follow. Self-evolution (#3470) is a strategic question requiring maintainer response—silence risks competitive positioning.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Intensity |
|:---|:---|:---:|
| **Windows reliability** | #3555 (Desktop hang), #2943 (init hang), #3356 (path issues), #3564 (interruptions) | 🔴 Severe |
| **Rebrand migration friction** | #3356 — legacy `.copaw` paths persisting in `.qwenpaw` installs | 🔴 Severe |
| **Local model backend fragility** | #3560 (llama.cpp tool parsing), #3562 (Ollama output loss), #3542 (Ollama+VPN) | 🟡 High |
| **Console UI parity gaps** | #3557 (can't modify default agent vs. APP), #3545 (delete models — now fixed) | 🟡 High |
| **Deployment customization** | #3551 (builtin models reappear on redeploy), #3293 (skill output control) | 🟡 High |
| **Context management opacity** | #3563 (no visibility into token usage before compact) | 🟢 Moderate |

### Use Cases & Satisfaction Indicators

- **Positive:** Users actively deploying to both Desktop and web Console; multi-channel usage (DingTalk, Feishu, QQ, Discord, iMessage); local-first model preference (Ollama, llama.cpp)
- **Negative:** Windows users disproportionately affected by startup/runtime failures; containerized deployments losing configuration state; power users hitting context limits without visibility

---

## 8. Backlog Watch

| Item | Age | Issue | Risk | Link |
|:---|:---:|:---|:---|:---|
| #3117 | **11 days** | Semantic skill routing — embedding-based skill filtering | **Stalled review** — "need discussions" label, first-time contributor | [PR #3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) |
| #3356 | **5 days** (19 comments) | WORKING_DIR migration | **Escalating user friction** — no maintainer resolution | [Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) |
| #3470 | **3 days** | Self-evolution roadmap | **Strategic silence** — competitive positioning at risk | [Issue #3470](https://github.com/agentscope-ai/QwenPaw/issues/3470) |
| #3293 | **7 days** | Skill voice/direct reply toggle | Awaiting prioritization | [Issue #3293](https://github.com/agentscope-ai/QwenPaw/issues/3293) |

**Maintainer Attention Needed:**

1. **#3117** — Longest-running open PR with review block. Risk of contributor abandonment.
2. **#3356** — Highest-comment open issue with clear data-loss implications. Needs architectural decision on migration strategy.
3. **#3555** — Critical Windows startup failure with no fix PR. Blocks new user adoption.

---

## Project Health Indicator

| Metric | Status |
|:---|:---|
| Activity Volume | 🟢 High (26 items in 24h) |
| Issue Resolution Rate | 🟡 Low (3/15 closed = 20%) |
| PR Merge Rate | 🟡 Low (2/11 merged/closed = 18%) |
| First-time Contributor Experience | 🟡 Mixed (#3553 merged quickly, #3117 stalled, #3268 closed) |
| Platform Stability (Windows) | 🔴 Concerning — multiple startup/runtime failures |
| Strategic Responsiveness | 🟡 Unclear — roadmap questions (#3470) unanswered |

**Overall:** CoPaw/QwenPaw demonstrates strong community engagement but faces **growing maintenance debt** during a sensitive rebrand period. Prioritizing Windows stability fixes, completing the migration infrastructure, and providing roadmap clarity would significantly improve project health.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-19

## 1. Today's Overview

ZeroClaw shows **very high development velocity** with 49 issues and 46 PRs updated in the last 24 hours, reflecting intense post-v0.7.0 stabilization activity. The project shipped two beta releases (v0.7.0-beta.1047 and v0.7.1-beta.1049) following the "largest structural overhaul in ZeroClaw's history" — a full Cargo workspace refactor with live config migration. However, **bug report volume significantly outpaces closures** (46 open/active vs. 3 closed issues), indicating a turbulent stabilization period. Security and runtime bugs dominate, with multiple S1-severity workflow blockers reported by production users. Community engagement is strong but strained, with core contributors like `perlowja` (InvestorClaw) and `Audacity88` filing detailed, high-impact issues.

---

## 2. Releases

### [v0.7.0-beta.1047](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.0-beta.1047)
**Major structural overhaul** — changes since v0.6.9 stable:
- **Breaking**: Entire codebase split into proper Cargo workspace of focused crates
- **Breaking**: New config schema shipped with **live migration** (schema v2)
- Risk: Large surface area for regressions; multiple v0.6.9 bugs reported against this release

### [v0.7.1-beta.1049](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.1-beta.1049)
- Maintenance release following v0.7.0
- Includes CI rationalization and version bump (see [PR #5867](https://github.com/zeroclaw-labs/zeroclaw/pull/5867))

---

## 3. Project Progress

### Merged/Closed PRs (17 total, selected highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#5888](https://github.com/zeroclaw-labs/zeroclaw/pull/5888) | **CI security hardening**: Remove PAT dependency from release workflows, replace with `GITHUB_TOKEN` | Reduces supply-chain attack surface; any maintainer can now trigger releases |
| [#5867](https://github.com/zeroclaw-labs/zeroclaw/pull/5867) | v0.7.1 release prep + CI rationalization Phase 1 | Unblocked release pipeline |
| [#5832](https://github.com/zeroclaw-labs/zeroclaw/pull/5832) | **Signal channel**: Media attachments, marker wiring, inbound persistence | Major channel capability expansion |
| [#5826](https://github.com/zeroclaw-labs/zeroclaw/pull/5826) | **Signal channel**: Render agent markdown as native Signal text styles | UX polish for Signal users |
| [#5762](https://github.com/zeroclaw-labs/zeroclaw/pull/5762) | **Provider fix**: Strip native tool messages for providers with `native_tool_calling=false` | Fixes MiniMax and other OpenAI-compatible API rejections |
| [#5801](https://github.com/zeroclaw-labs/zeroclaw/pull/5801) | Added `CONVENTIONS.md` — development philosophy overview | Contributor onboarding improvement |
| [#5472](https://github.com/zeroclaw-labs/zeroclaw/pull/5472) | WhatsApp web LID → number processing (superseded by [#5884](https://github.com/zeroclaw-labs/zeroclaw/pull/5884)) | Initial fix, refined in open PR |

### Active Development (29 open PRs)

| PR | Description | Status |
|:---|:---|:---|
| [#5884](https://github.com/zeroclaw-labs/zeroclaw/pull/5884) | **WhatsApp LID→number processing** — moves conversion after policy checks for all messages, not just self-chat | Critical fix for WhatsApp reply delivery |
| [#5881](https://github.com/zeroclaw-labs/zeroclaw/pull/5881) | **CI security**: Migrate 6 PATs to GitHub App token (short-lived, scoped) | Awaiting review; supersedes #5888 |
| [#5880](https://github.com/zeroclaw-labs/zeroclaw/pull/5880) | **K8s/OpenShift deployment manifests** with hardened SecurityContext | Production deployment enablement |
| [#5879](https://github.com/zeroclaw-labs/zeroclaw/pull/5879) | **Docker fix**: Copy all 14 workspace crate manifests | Fixes v0.7.0 Docker build regression |
| [#5868](https://github.com/zeroclaw-labs/zeroclaw/pull/5868) | **Native local STT** via whisper.cpp behind `local-stt` feature flag | Privacy/local-first capability |
| [#5874](https://github.com/zeroclaw-labs/zeroclaw/pull/5874) | **Skill generation**: LLM reflection for Hermes-style `SKILL.md` | Developer experience for skill authors |
| [#5606](https://github.com/zeroclaw-labs/zeroclaw/pull/5606) | **Preserve streamed reasoning content** for tool replay (Kimi compatibility) | `agent-approved`, needs maintainer review |

---

## 4. Community Hot Topics

### Most Active Issues by Comment Count

| # | Issue | Comments | Core Tension |
|:---|:---|:---:|:---|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | **Web dashboard unavailable** — build instructions not working | 15 | **Recurring infrastructure pain**: Dashboard delivery has been broken across multiple versions; closed but pattern suggests systemic build/packaging issue |
| [#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) | `runtime.kind = "native"` does **not bypass Docker** for shell tool execution | 6 | **Security vs. usability**: User expects native execution, gets Docker sandbox; breaks FINOS compliance workflow |
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | **"Full" Docker image** with all feature flags (WhatsApp, etc.) | 6 | **Onboarding friction**: Technical users can build, but non-technical users blocked; 3 upvotes indicate demand |
| [#5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787) | **RFC: Replace TOML i18n with Mozilla Fluent** | 4 | **Technical debt**: Hand-rolled i18n system vs. standard solution; docs i18n strategy contested |

### Underlying Needs Analysis

- **Production deployment readiness**: Users like `perlowja` (InvestorClaw) are building regulated-financial use cases and hitting sandbox/security defaults that block realistic workflows
- **Build reproducibility**: Web dashboard and Docker builds remain fragile across releases
- **Documentation as product surface**: RFC #5576 and #5787 show maintainers treating docs architecture seriously, but implementation lagging

---

## 5. Bugs & Stability

### S1 — Workflow Blocked (Critical)

| Issue | Component | Reporter | Fix PR? |
|:---|:---|:---|:---:|
| [#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) | `runtime.kind="native"` ignored, Docker forced for shell | perlowja | ❌ |
| [#5813](https://github.com/zeroclaw-labs/zeroclaw/issues/5813) | Compaction orphans `tool_result` blocks → Anthropic API 400, session bricked | itripn | ❌ |
| [#5861](https://github.com/zeroclaw-labs/zeroclaw/issues/5861) | `voice-wake` feature fails to compile in v0.6.9 | TTimo | ❌ |
| [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) | Provider ignores `llamacpp` object (schema v2 regression) | hsuenaga | ❌ |

### S2 — Degraded Behavior (High Risk)

| Issue | Component | Reporter | Fix PR? |
|:---|:---|:---|:---:|
| [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) | Shell policy lowercases args, blocks `git -C` (conflates with `-c`) | Mohl | ❌ |
| [#5720](https://github.com/zeroclaw-labs/zeroclaw/issues/5720) | `PYTHONPATH=val` inline env var syntax broken in shell tool | perlowja | ❌ |
| [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | Default shell sandbox blocks all realistic Python skill patterns | perlowja | ❌ |
| [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | Too much emphasis on memory in system prompt (cron jobs affected) | databillm | ❌ |
| [#5810](https://github.com/zeroclaw-labs/zeroclaw/issues/5810) | `security.otp.gated_actions` silently accepts unknown action names | Mohl | ❌ |

### Pattern: Schema v2 Regressions
Multiple bugs (#5815, #5720, #5721, #5722) trace to **config schema v2 changes** — live migration succeeded but semantic behavior shifted, breaking existing deployments.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Feature | Predicted Version | Confidence |
|:---|:---|:---|:---:|
| [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) | **"Dream Mode"** — periodic memory consolidation & reflective learning | v0.8.0+ | Medium |
| [#5741](https://github.com/zeroclaw-labs/zeroclaw/issues/5741) | Interactive channel approval for medium/high-risk operations | v0.7.2+ | High |
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | "Full" Docker image with all features | v0.7.2 | High |
| [#5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787) | Mozilla Fluent i18n replacement | v0.8.0 | Medium |
| [#5576](https://github.com/zeroclaw-labs/zeroclaw/issues/5576) | Documentation standards & knowledge architecture | v0.7.2 | High |
| [#5851](https://github.com/zeroclaw-labs/zeroclaw/issues/5851) | `tcp_user_timeout` for Linux/Android | v0.7.2 | High |

**v0.7.2 milestone** ([#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)) explicitly scoped as **"no runtime changes"** — CI cleanup, docs, language standardization, and approved bug fixes only. This suggests maintainers are **stabilizing before next feature wave**.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Sandbox too restrictive for real work** | perlowja's 4 detailed issues: native runtime ignored, PYTHONPATH broken, skill prompts not injected, Python patterns blocked | 🔴 Critical |
| **Config migration broke existing setups** | Schema v2: llama.cpp ignored, prompt injection mode broken | 🔴 Critical |
| **Build/packaging unreliable** | Dashboard build failures, Docker workspace manifest omission, voice-wake compilation fail | 🟡 High |
| **Memory system over-prioritized** | Cron jobs derailed by memory weighting; "too much emphasis on memory" | 🟡 High |
| **Signal channel gaps** | No media, no markdown rendering (now fixed in closed PRs) | 🟢 Resolved |

### Use Cases Emerging

- **Regulated finance**: FINOS CDM compliance (InvestorClaw)
- **Embedded/IoT**: aarch64 musl builds for custom boards ([#5756](https://github.com/zeroclaw-labs/zeroclaw/issues/5756))
- **Privacy-first local deployment**: Native STT, local LLM (llama.cpp)

### Satisfaction Signals
- Strong contributor retention: `perlowja` continues detailed reporting despite blockers
- Active skill ecosystem: InvestorClaw as "exemplar of production-grade agent"
- Maintainer responsiveness: `WareWolf-MoonWall` actively milestone-tracking

---

## 8. Backlog Watch

### Needs Maintainer Attention (High-Value, Stalled)

| Item | Age | Risk | Action Needed |
|:---|:---|:---:|:---|
| [#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) | 5 days | 🔴 High | `r:needs-repro` — but reporter provided detailed repro; likely mis-triaged |
| [#5720](https://github.com/zeroclaw-labs/zeroclaw/issues/5720) | 5 days | 🟡 Medium | Same reporter cluster; no maintainer response |
| [#5721](https://github.com/zeroclaw-labs/zeroclaw/issues/5721) | 5 days | 🟡 Medium | Skill prompt injection broken — blocks skill ecosystem |
| [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | 5 days | 🔴 High | Default sandbox blocks Python skills — design decision needed |
| [#5606](https://github.com/zeroclaw-labs/zeroclaw/pull/5606) | 9 days | 🟡 Medium | `agent-approved`, `needs-maintainer-review` — Kimi compatibility fix languishing |
| [#5712](https://github.com/zeroclaw-labs/zeroclaw/pull/5712) | 6 days | 🟡 Medium | IMAP polling fallback — `needs-author-action` but no maintainer guidance |
| [#5691](https://github.com/zeroclaw-labs/zeroclaw/pull/5691) | 6 days | 🟡 Medium | Telegram bot commands — `needs-author-action`, unclear what action |

### Critical Gap: Security/Runtime Bug Triage
`perlowja` filed **4 interrelated S1/S2 bugs** on 2026-04-14 with detailed repros; as of 2026-04-19, all remain `r:needs-repro` or un-triaged despite clear evidence. This risks losing a high-quality production user.

---

## Project Health Assessment

| Dimension | Score | Notes |
|:---|:---:|:---|
| **Velocity** | ⭐⭐⭐⭐⭐ | 95 items updated in 24h; 2 releases |
| **Stability** | ⭐⭐☆☆☆ | v0.7.0 major refactor causing regression wave; S1 bugs unaddressed |
| **Security** | ⭐⭐⭐☆☆ | Active hardening (PAT removal, OTP validation bugs found), but sandbox escapes and config validation gaps |
| **Community** | ⭐⭐⭐⭐☆ | Engaged power users, detailed bug reports, but triage bandwidth strained |
| **Production Readiness** | ⭐⭐☆☆☆ | Multiple blockers for non-trivial deployments; Docker/K8s docs improving but runtime rough |

**Recommendation**: ZeroClaw should prioritize **stabilization over features** — the v0.7.2 "no runtime changes" scope is correct, but S1 bugs from v0.6.9→v0.7.0 migration need urgent owner assignment, particularly the schema v2 regressions and sandbox policy issues blocking `perlowja`'s InvestorClaw production deployment.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*